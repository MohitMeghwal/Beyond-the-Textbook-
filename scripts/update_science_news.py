import json
import os
import re
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "data" / "science-news.json"
MAX_ARTICLES = 60
TIMEOUT = 25

HEADERS = {
    "User-Agent": "ScienceAroundUs/1.0 (educational science website)"
}


def fetch(url):
    request = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(request, timeout=TIMEOUT) as response:
        return response.read()


def clean(text):
    if not text:
        return ""
    return re.sub(r"\s+", " ", text).strip()


def parse_date(value):
    if not value:
        return ""
    try:
        return datetime.fromisoformat(
            value.replace("Z", "+00:00")
        ).astimezone(timezone.utc).strftime("%Y-%m-%d")
    except (ValueError, TypeError):
        return value[:10]


def make_article(title, source, category, published, summary, url):
    return {
        "title": clean(title),
        "category": category,
        "source": source,
        "publishedAt": parse_date(published),
        "summary": clean(summary)[:700],
        "url": url,
        "image": "",
        "type": "research" if source in ("arXiv", "PubMed") else "news"
    }


def fetch_arxiv():
    articles = []
    query = urllib.parse.urlencode({
        "search_query": (
            "cat:astro-ph.EP OR cat:astro-ph.HE OR "
            "cat:physics OR cat:q-bio"
        ),
        "start": 0,
        "max_results": 15,
        "sortBy": "submittedDate",
        "sortOrder": "descending"
    })

    try:
        root = ET.fromstring(
            fetch("https://export.arxiv.org/api/query?" + query)
        )
        ns = {"a": "http://www.w3.org/2005/Atom"}

        for entry in root.findall("a:entry", ns):
            title = entry.findtext("a:title", "", ns)
            summary = entry.findtext("a:summary", "", ns)
            published = entry.findtext("a:published", "", ns)
            link = entry.find("a:id", ns)

            if link is None or not link.text:
                continue

            articles.append(make_article(
                title, "arXiv", "Scientific Research",
                published, summary, link.text.strip()
            ))
    except Exception as exc:
        print("arXiv fetch failed:", exc)

    return articles


def fetch_pubmed():
    articles = []

    try:
        params = urllib.parse.urlencode({
            "db": "pubmed",
            "term": "biomedical research",
            "sort": "date",
            "retmax": 10,
            "retmode": "json"
        })
        search_url = (
            "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?"
            + params
        )
        result = json.loads(fetch(search_url))
        ids = result.get("esearchresult", {}).get("idlist", [])

        if not ids:
            return articles

        summary_url = (
            "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?"
            + urllib.parse.urlencode({
                "db": "pubmed",
                "id": ",".join(ids),
                "retmode": "json"
            })
        )
        summaries = json.loads(fetch(summary_url)).get("result", {})

        for pmid in ids:
            item = summaries.get(pmid, {})
            title = item.get("title", "")
            if not title:
                continue

            articles.append(make_article(
                title,
                "PubMed",
                "Medical Research",
                item.get("pubdate", ""),
                item.get("sorttitle", title),
                f"https://pubmed.ncbi.nlm.nih.gov/{pmid}/"
            ))
    except Exception as exc:
        print("PubMed fetch failed:", exc)

    return articles


def fetch_nasa_apod():
    articles = []
    api_key = os.environ.get("NASA_API_KEY", "DEMO_KEY")

    try:
        url = (
            "https://api.nasa.gov/planetary/apod?"
            + urllib.parse.urlencode({
                "api_key": api_key,
                "count": 5
            })
        )
        data = json.loads(fetch(url))

        if isinstance(data, dict):
            data = [data]

        for item in data:
            link = item.get("url", "")
            if not link:
                continue

            articles.append({
                "title": clean(item.get("title", "NASA Astronomy Picture")),
                "category": "Space & Astronomy",
                "source": "NASA APOD",
                "publishedAt": item.get("date", ""),
                "summary": clean(item.get("explanation", ""))[:700],
                "url": link,
                "image": item.get("hdurl") or link,
                "type": "astronomy"
            })
    except Exception as exc:
        print("NASA APOD fetch failed:", exc)

    return articles


def main():
    old_data = {"articles": [], "lastUpdated": None}

    if OUTPUT.exists():
        try:
            old_data = json.loads(OUTPUT.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError):
            print("Could not read existing JSON; starting fresh.")

    collected = []
    collected.extend(fetch_arxiv())
    collected.extend(fetch_pubmed())
    collected.extend(fetch_nasa_apod())

    existing = old_data.get("articles", [])
    combined = {}

    for article in existing + collected:
        url = article.get("url", "").strip()
        title = article.get("title", "").strip()

        if not url or not title:
            continue

        combined[url] = article

    articles = sorted(
        combined.values(),
        key=lambda item: item.get("publishedAt", ""),
        reverse=True
    )[:MAX_ARTICLES]

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(
        json.dumps({
            "lastUpdated": datetime.now(timezone.utc).isoformat(),
            "articles": articles
        }, ensure_ascii=False, indent=2),
        encoding="utf-8"
    )

    print(f"Collected {len(collected)} new items.")
    print(f"Saved {len(articles)} unique items to {OUTPUT}.")


if __name__ == "__main__":
    main()
