/* =========================================================
   WHAT IF? — SCIENCE SIMULATION ENGINE
   Science Beyond the Textbook
   ---------------------------------------------------------
   Simulations:
   1. Sun Suddenly Disappeared
   2. Earth Stopped Spinning
   3. Moon Disappeared
   4. Earth Lost Its Magnetic Field
   5. Gravity Became Half as Strong
   6. Jupiter Swapped Places with Mars

   Usage:
   WhatIfSimulation.open("sun-disappeared");

   Available keys:
   - sun-disappeared
   - earth-stopped-spinning
   - moon-disappeared
   - magnetic-field-lost
   - half-gravity
   - jupiter-swapped-mars

   ---------------------------------------------------------
   BILINGUAL SUPPORT (EN / HI)
   ---------------------------------------------------------
   This file reads the current site language directly from
   document.body.classList.contains("hindi") — the exact same
   flag the page's language button (#langBtn) already sets.

   A MutationObserver watches document.body for class changes,
   so switching the language on what-if/index.html instantly
   re-renders any open simulation in the new language, without
   needing any changes to the HTML file and without restarting
   the animation.

   All translated text is either fully English or fully Hindi
   (Devanagari script) — no English words are mixed into Hindi
   sentences. The Play / Pause / Reset / Speed controls and the
   "Normal World / What Changes? / The Science" card headers
   are intentionally kept in English only, in both languages.
========================================================= */

(() => {
  "use strict";

  /* =======================================================
     CONFIG
  ======================================================= */

  const CONFIG = {
    green: "#65f28b",
    green2: "#35c968",
    bg: "#07100b",
    bg2: "#0b1510",
    white: "#f4f5ef",
    muted: "#aeb8af",
    line: "rgba(255,255,255,.15)",
    panel: "rgba(13,20,16,.94)"
  };

  /* =======================================================
     LANGUAGE HELPERS
  ======================================================= */

  function getLang() {

    try {

      return document.body.classList.contains("hindi")
        ? "hi"
        : "en";

    } catch (e) {

      return "en";
    }
  }

  /* Resolve a bilingual {en, hi} object to a plain string
     for the current language, falling back to English. */

  function t(entry) {

    if (!entry) return "";

    if (typeof entry === "string") return entry;

    return entry[getLang()] || entry.en || "";
  }

  /* =======================================================
     UI / LABEL TRANSLATIONS
     ---------------------------------------------------------
     NOTE: Play / Pause / Reset / Speed button labels and the
     "Normal World / What Changes? / The Science" info-card
     headers are NOT part of this dictionary — they stay in
     English at all times, by request.
  ======================================================= */

  const translations = {

    ui: {
      whatIfPrefix: { en: "WHAT IF?", hi: "क्या हो अगर?" },
      live: { en: "LIVE", hi: "प्रत्यक्ष" },
      scientificModel: { en: "SCIENTIFIC MODEL", hi: "वैज्ञानिक मॉडल" },
      simulationState: { en: "Simulation State", hi: "सिमुलेशन स्थिति" },
      ready: { en: "Ready", hi: "तैयार" },
      pressPlay: {
        en: "Press Play to observe the change.",
        hi: "बदलाव देखने के लिए नीचे दिया गया बटन दबाएँ।"
      },
      closeAria: { en: "Close simulation", hi: "सिमुलेशन बंद करें" }
    },

    categories: {
      "Astronomy": { en: "Astronomy", hi: "खगोल विज्ञान" },
      "Earth & Motion": { en: "Earth & Motion", hi: "पृथ्वी और गति" },
      "Earth & Space": { en: "Earth & Space", hi: "पृथ्वी और अंतरिक्ष" },
      "Physics": { en: "Physics", hi: "भौतिकी" },
      "Solar System": { en: "Solar System", hi: "सौरमंडल" }
    },

    canvasLabels: {
      SUN: { en: "SUN", hi: "सूर्य" },
      EARTH: { en: "EARTH", hi: "पृथ्वी" },
      TANGENT: {
        en: "EARTH CONTINUES ALONG A TANGENT",
        hi: "पृथ्वी अपनी पुरानी कक्षा की स्पर्श-रेखा दिशा में आगे बढ़ती रहती है"
      },
      ROTATING: { en: "ROTATING", hi: "घूम रहा है" },
      ROTATION_STOPPED: { en: "ROTATION STOPPED", hi: "घूर्णन रुक गया" },
      MOON: { en: "MOON", hi: "चंद्रमा" },
      MOON_GONE: { en: "MOON GONE", hi: "चंद्रमा गायब" },
      MAGNETIC_FIELD: { en: "MAGNETIC FIELD", hi: "चुंबकीय क्षेत्र" },
      MAGNETIC_WEAK: {
        en: "MAGNETIC SHIELD GREATLY WEAKENED",
        hi: "चुंबकीय कवच बहुत कमजोर हो गया"
      },
      NORMAL_G: { en: "NORMAL g ≈ 9.8 m/s²", hi: "सामान्य g ≈ 9.8 मी/से²" },
      HALF_G: { en: "HALF g ≈ 4.9 m/s²", hi: "आधा g ≈ 4.9 मी/से²" },
      MARS: { en: "MARS", hi: "मंगल" },
      JUPITER: { en: "JUPITER", hi: "बृहस्पति" },
      SWAPPED: {
        en: "ORBITAL POSITIONS SWAPPED",
        hi: "कक्षीय स्थितियाँ बदल गईं"
      }
    }
  };

  function tu(key) {

    return t(translations.ui[key]);
  }

  function tc(key) {

    const entry = translations.categories[key];

    return entry ? t(entry) : key;
  }

  function tl(key) {

    return t(translations.canvasLabels[key]);
  }

  /* =======================================================
     SIMULATION DATA
     (title / description / normal / whatIf / science
      are all bilingual {en, hi} objects — Hindi text uses
      standard Hindi scientific vocabulary, no English words
      mixed in)
  ======================================================= */

  const simulations = {

    "sun-disappeared": {
      icon: "☀️",
      title: {
        en: "What If the Sun Suddenly Disappeared?",
        hi: "अगर सूरज अचानक गायब हो जाए तो क्या होगा?"
      },
      category: "Astronomy",
      description: {
        en: "The Sun provides both light and the gravitational influence that keeps Earth in its orbit.",
        hi: "सूर्य हमें प्रकाश देता है और अपने गुरुत्वाकर्षण प्रभाव से पृथ्वी को उसकी कक्षा में बनाए रखता है।"
      },
      normal: {
        en: "Earth continuously orbits the Sun because the Sun's gravity bends Earth's path into an orbit.",
        hi: "पृथ्वी लगातार सूर्य की परिक्रमा करती है क्योंकि सूर्य का गुरुत्वाकर्षण पृथ्वी के मार्ग को मोड़कर एक कक्षा बना देता है।"
      },
      whatIf: {
        en: "The Sun disappears. Earth would not immediately notice. Sunlight takes about 8 minutes 20 seconds to reach Earth, and the gravitational change would also propagate at the speed of light.",
        hi: "मान लीजिए सूर्य अचानक गायब हो जाए। पृथ्वी को तुरंत इसका पता नहीं चलेगा। सूर्य के प्रकाश को पृथ्वी तक पहुँचने में लगभग 8 मिनट 20 सेकंड लगते हैं, और गुरुत्वाकर्षण का यह बदलाव भी प्रकाश की गति से ही फैलेगा।"
      },
      science: {
        en: "After roughly 8 minutes 20 seconds, sunlight would vanish and Earth would no longer be held in its solar orbit. It would continue moving approximately along the tangent to its former orbit.",
        hi: "लगभग 8 मिनट 20 सेकंड बाद सूर्य का प्रकाश गायब हो जाएगा और पृथ्वी अब अपनी सौर कक्षा में बंधी नहीं रहेगी। यह लगभग अपनी पुरानी कक्षा की स्पर्श-रेखा की दिशा में आगे बढ़ती रहेगी।"
      },
      controls: true
    },

    "earth-stopped-spinning": {
      icon: "🌍",
      title: {
        en: "What If Earth Suddenly Stopped Spinning?",
        hi: "अगर पृथ्वी अचानक घूमना बंद कर दे तो क्या होगा?"
      },
      category: "Earth & Motion",
      description: {
        en: "Earth rotates once approximately every 24 hours, producing the cycle of day and night.",
        hi: "पृथ्वी लगभग हर 24 घंटे में एक बार घूमती है, जिससे दिन और रात का चक्र बनता है।"
      },
      normal: {
        en: "Earth's surface rotates eastward while Earth travels around the Sun.",
        hi: "पृथ्वी की सतह पूर्व दिशा में घूमती है जबकि पृथ्वी सूर्य के चारों ओर भी परिक्रमा करती रहती है।"
      },
      whatIf: {
        en: "Imagine Earth's rotation suddenly becoming zero while Earth continues orbiting the Sun.",
        hi: "कल्पना कीजिए कि पृथ्वी का घूर्णन अचानक शून्य हो जाए, जबकि पृथ्वी सूर्य के चारों ओर परिक्रमा करती रहे।"
      },
      science: {
        en: "The length of the day would change dramatically. Earth's atmosphere and oceans would also respond to the sudden change in rotational motion.",
        hi: "दिन की अवधि बहुत ज्यादा बदल जाएगी। पृथ्वी का वायुमंडल और महासागर भी घूर्णी गति में इस अचानक बदलाव पर प्रतिक्रिया देंगे।"
      },
      controls: true
    },

    "moon-disappeared": {
      icon: "🌙",
      title: {
        en: "What If the Moon Disappeared?",
        hi: "अगर चंद्रमा गायब हो जाए तो क्या होगा?"
      },
      category: "Astronomy",
      description: {
        en: "The Moon affects Earth's oceans and participates in the gravitational dance of the Earth–Moon system.",
        hi: "चंद्रमा पृथ्वी के महासागरों को प्रभावित करता है और पृथ्वी-चंद्रमा प्रणाली के गुरुत्वाकर्षण संतुलन में अपनी भूमिका निभाता है।"
      },
      normal: {
        en: "The Moon orbits Earth and its gravity contributes strongly to Earth's tides.",
        hi: "चंद्रमा पृथ्वी की परिक्रमा करता है और उसका गुरुत्वाकर्षण पृथ्वी के ज्वार-भाटा में एक बड़ा योगदान देता है।"
      },
      whatIf: {
        en: "Imagine the Moon suddenly disappearing from the Earth–Moon system.",
        hi: "कल्पना कीजिए कि चंद्रमा पृथ्वी-चंद्रमा प्रणाली से अचानक गायब हो जाए।"
      },
      science: {
        en: "The most noticeable changes would include major changes to tides and the removal of the Moon's contribution to Earth's orbital dynamics.",
        hi: "सबसे ज्यादा ध्यान देने वाले बदलावों में ज्वार-भाटा में बड़ा परिवर्तन और पृथ्वी की कक्षीय गतिकी में चंद्रमा के योगदान का हट जाना शामिल होगा।"
      },
      controls: true
    },

    "magnetic-field-lost": {
      icon: "🧲",
      title: {
        en: "What If Earth Lost Its Magnetic Field?",
        hi: "अगर पृथ्वी अपना चुंबकीय क्षेत्र खो दे तो क्या होगा?"
      },
      category: "Earth & Space",
      description: {
        en: "Earth's magnetic field forms a protective magnetic environment around our planet.",
        hi: "पृथ्वी का चुंबकीय क्षेत्र हमारे ग्रह के चारों ओर एक सुरक्षात्मक चुंबकीय वातावरण बनाता है।"
      },
      normal: {
        en: "Charged particles from the Sun interact with Earth's magnetic environment and are guided around the planet.",
        hi: "सूर्य से आने वाले आवेशित कण पृथ्वी के चुंबकीय वातावरण से टकराकर ग्रह के चारों ओर दिशा बदल लेते हैं।"
      },
      whatIf: {
        en: "Imagine Earth's large-scale magnetic field suddenly becoming extremely weak.",
        hi: "कल्पना कीजिए कि पृथ्वी का विशाल चुंबकीय क्षेत्र अचानक बहुत कमजोर हो जाए।"
      },
      science: {
        en: "Earth's interaction with the solar wind would change significantly. Auroral patterns and the space environment around Earth would also be affected.",
        hi: "पृथ्वी की सौर पवन के साथ अंतःक्रिया काफी बदल जाएगी। ध्रुवीय ज्योति के प्रतिरूप और पृथ्वी के आसपास का अंतरिक्षीय वातावरण भी प्रभावित होगा।"
      },
      controls: true
    },

    "half-gravity": {
      icon: "🪶",
      title: {
        en: "What If Gravity Became Half as Strong?",
        hi: "अगर गुरुत्वाकर्षण आधा हो जाए तो क्या होगा?"
      },
      category: "Physics",
      description: {
        en: "Gravity determines how strongly objects are attracted toward Earth.",
        hi: "गुरुत्वाकर्षण यह तय करता है कि वस्तुएँ पृथ्वी की ओर कितनी ताकत से आकर्षित होती हैं।"
      },
      normal: {
        en: "Near Earth's surface, objects accelerate downward at approximately 9.8 m/s².",
        hi: "पृथ्वी की सतह के पास वस्तुएँ लगभग 9.8 मी/से² के त्वरण से नीचे गिरती हैं।"
      },
      whatIf: {
        en: "Imagine the gravitational acceleration near Earth's surface becoming approximately half its current value.",
        hi: "कल्पना कीजिए कि पृथ्वी की सतह के पास गुरुत्वीय त्वरण अपने वर्तमान मान का लगभग आधा हो जाए।"
      },
      science: {
        en: "Objects would accelerate downward more slowly, jumps would last longer, and the weight of objects would be reduced.",
        hi: "वस्तुएँ धीमी गति से नीचे गिरेंगी, कूदने पर हवा में ज्यादा देर तक रहेंगी, और वस्तुओं का भार भी कम हो जाएगा।"
      },
      controls: true
    },

    "jupiter-swapped-mars": {
      icon: "🪐",
      title: {
        en: "What If Jupiter Swapped Places With Mars?",
        hi: "अगर बृहस्पति और मंगल अपनी जगह बदल लें तो क्या होगा?"
      },
      category: "Solar System",
      description: {
        en: "Jupiter is the largest planet in our Solar System, while Mars is much smaller and orbits farther from the Sun.",
        hi: "बृहस्पति हमारे सौरमंडल का सबसे बड़ा ग्रह है, जबकि मंगल इससे बहुत छोटा है।"
      },
      normal: {
        en: "Mars orbits between Earth and Jupiter, while Jupiter follows a much larger orbit farther from the Sun.",
        hi: "मंगल पृथ्वी और बृहस्पति के बीच की कक्षा में परिक्रमा करता है, जबकि बृहस्पति सूर्य से बहुत दूर एक बड़ी कक्षा में चक्कर लगाता है।"
      },
      whatIf: {
        en: "Imagine Jupiter suddenly occupying Mars's orbital distance while Mars moved into Jupiter's original orbit.",
        hi: "कल्पना कीजिए कि बृहस्पति अचानक मंगल की कक्षीय दूरी पर आ जाए और मंगल बृहस्पति की मूल कक्षा में चला जाए।"
      },
      science: {
        en: "The gravitational architecture of the Solar System would change dramatically. The motion and stability of nearby planetary orbits would need to readjust.",
        hi: "सौरमंडल की गुरुत्वाकर्षण संरचना बहुत ज्यादा बदल जाएगी। आसपास के ग्रहों की कक्षाओं की गति और स्थिरता को फिर से संतुलित होना पड़ेगा।"
      },
      controls: true
    }
  };

  /* =======================================================
     READOUT MESSAGE TRANSLATIONS
     (keyed exactly like the switch-cases in updateReadout)
  ======================================================= */

  const readoutMessages = {

    "sun-disappeared": {
      before: {
        value: { en: "Normal Orbit", hi: "सामान्य कक्षा" },
        small: {
          en: "Earth still receives sunlight. The change has not reached Earth yet.",
          hi: "पृथ्वी को अभी भी सूर्य का प्रकाश मिल रहा है। बदलाव अभी पृथ्वी तक नहीं पहुँचा है।"
        }
      },
      after: {
        value: { en: "Sunlight Lost", hi: "सूर्य का प्रकाश समाप्त" },
        small: {
          en: "Earth leaves its solar orbit and follows its existing motion.",
          hi: "पृथ्वी अपनी सौर कक्षा छोड़कर अपनी मौजूदा गति की दिशा में आगे बढ़ती है।"
        }
      }
    },

    "earth-stopped-spinning": {
      before: {
        value: { en: "Rotation Active", hi: "घूर्णन सक्रिय" },
        small: {
          en: "Earth is rotating around its axis.",
          hi: "पृथ्वी अपनी धुरी पर घूम रही है।"
        }
      },
      after: {
        value: { en: "Rotation = 0", hi: "घूर्णन = 0" },
        small: {
          en: "Earth's axial rotation has been stopped in the model.",
          hi: "इस मॉडल में पृथ्वी के घूर्णन को रोक दिया गया है।"
        }
      }
    },

    "moon-disappeared": {
      before: {
        value: { en: "Moon Present", hi: "चंद्रमा मौजूद" },
        small: {
          en: "The Moon is orbiting Earth normally.",
          hi: "चंद्रमा सामान्य रूप से पृथ्वी की परिक्रमा कर रहा है।"
        }
      },
      after: {
        value: { en: "Moon Removed", hi: "चंद्रमा हटाया गया" },
        small: {
          en: "The Moon's gravitational contribution is now absent.",
          hi: "अब चंद्रमा का गुरुत्वाकर्षण योगदान मौजूद नहीं है।"
        }
      }
    },

    "magnetic-field-lost": {
      small: {
        en: "Illustrative magnetic-field strength.",
        hi: "यह चुंबकीय क्षेत्र की शक्ति का एक उदाहरण मात्र है।"
      }
    },

    "half-gravity": {
      small: {
        en: "The model compares normal gravity with half-strength gravity.",
        hi: "यह मॉडल सामान्य गुरुत्वाकर्षण की तुलना आधी शक्ति वाले गुरुत्वाकर्षण से करता है।"
      }
    },

    "jupiter-swapped-mars": {
      before: {
        value: { en: "Orbital Shift", hi: "कक्षीय बदलाव" },
        small: {
          en: "The two planets are moving toward their new orbital distances.",
          hi: "दोनों ग्रह अपनी नई कक्षीय दूरियों की ओर बढ़ रहे हैं।"
        }
      },
      after: {
        value: { en: "Positions Swapped", hi: "स्थितियाँ बदल गईं" },
        small: {
          en: "The model now shows Jupiter near Mars's original distance.",
          hi: "अब यह मॉडल बृहस्पति को मंगल की मूल दूरी के पास दिखा रहा है।"
        }
      }
    }
  };

  /* =======================================================
     STATE
  ======================================================= */

  let activeKey = null;
  let active = null;
  let running = false;
  let speed = 1;
  let elapsed = 0;
  let lastTime = 0;
  let animationFrame = null;

  let canvas = null;
  let ctx = null;
  let root = null;

  let stars = [];

  let resizeListenerAdded = false;
  let langObserverStarted = false;

  /* =======================================================
     DOM CREATION
  ======================================================= */

  function createStyles() {

    if (document.getElementById("wifs-styles")) return;

    const style = document.createElement("style");
    style.id = "wifs-styles";

    style.textContent = `
      #what-if-simulation-root,
      .wifs-root {
        width:100%;
        min-height:100%;
        color:${CONFIG.white};
        font-family:Inter,system-ui,sans-serif;
      }

      .wifs-shell {
        width:100%;
        max-width:1280px;
        margin:0 auto;
        position:relative;
      }

      .wifs-panel {
        position:relative;
        overflow:hidden;
        border:1px solid rgba(101,242,139,.18);
        border-radius:24px;
        background:
          radial-gradient(circle at 75% 15%,rgba(101,242,139,.07),transparent 30%),
          linear-gradient(145deg,rgba(13,25,17,.97),rgba(7,16,11,.98));
        box-shadow:
          0 25px 80px rgba(0,0,0,.45),
          inset 0 1px 0 rgba(255,255,255,.04);
      }

      .wifs-header {
        display:flex;
        align-items:flex-start;
        justify-content:space-between;
        gap:20px;
        padding:26px 28px 20px;
        border-bottom:1px solid rgba(255,255,255,.08);
      }

      .wifs-title-area {
        min-width:0;
      }

      .wifs-kicker {
        color:${CONFIG.green};
        font-size:12px;
        font-weight:800;
        letter-spacing:.16em;
        text-transform:uppercase;
        margin-bottom:7px;
      }

      .wifs-title {
        margin:0;
        font-size:clamp(24px,4vw,42px);
        line-height:1.08;
        font-weight:800;
        letter-spacing:-.035em;
      }

      .wifs-subtitle {
        margin:10px 0 0;
        max-width:760px;
        color:${CONFIG.muted};
        line-height:1.65;
        font-size:14px;
      }

      .wifs-close {
        flex:0 0 auto;
        width:42px;
        height:42px;
        border-radius:50%;
        border:1px solid rgba(255,255,255,.14);
        background:rgba(255,255,255,.04);
        color:${CONFIG.white};
        cursor:pointer;
        font-size:20px;
        transition:.2s ease;
      }

      .wifs-close:hover {
        border-color:${CONFIG.green};
        color:${CONFIG.green};
        transform:rotate(90deg);
      }

      .wifs-stage {
        position:relative;
        min-height:520px;
        height:min(68vh,680px);
        background:
          radial-gradient(circle at 50% 45%,rgba(27,73,44,.12),transparent 42%),
          #020604;
      }

      .wifs-canvas {
        display:block;
        width:100%;
        height:100%;
      }

      .wifs-hud {
        position:absolute;
        left:18px;
        top:18px;
        display:flex;
        flex-wrap:wrap;
        gap:8px;
        pointer-events:none;
      }

      .wifs-badge {
        padding:8px 11px;
        border:1px solid rgba(101,242,139,.2);
        border-radius:999px;
        background:rgba(3,9,5,.72);
        backdrop-filter:blur(10px);
        color:#dce8df;
        font-size:11px;
        font-weight:700;
      }

      .wifs-badge strong {
        color:${CONFIG.green};
      }

      .wifs-readout {
        position:absolute;
        right:18px;
        top:18px;
        width:220px;
        padding:14px;
        border:1px solid rgba(255,255,255,.1);
        border-radius:15px;
        background:rgba(3,8,5,.76);
        backdrop-filter:blur(12px);
        box-shadow:0 12px 35px rgba(0,0,0,.25);
        pointer-events:none;
      }

      .wifs-readout-label {
        color:${CONFIG.muted};
        font-size:10px;
        text-transform:uppercase;
        letter-spacing:.13em;
        font-weight:800;
      }

      .wifs-readout-value {
        margin-top:5px;
        color:${CONFIG.green};
        font-size:18px;
        font-weight:800;
      }

      .wifs-readout-small {
        margin-top:5px;
        color:#b8c3bb;
        font-size:11px;
        line-height:1.45;
      }

      .wifs-controls {
        display:flex;
        align-items:center;
        gap:9px;
        flex-wrap:wrap;
        padding:18px 20px;
        border-top:1px solid rgba(255,255,255,.08);
        background:rgba(5,11,7,.86);
      }

      .wifs-btn {
        border:1px solid rgba(101,242,139,.26);
        background:rgba(101,242,139,.08);
        color:${CONFIG.white};
        border-radius:11px;
        padding:10px 15px;
        font:600 13px Inter,system-ui,sans-serif;
        cursor:pointer;
        transition:.2s ease;
      }

      .wifs-btn:hover {
        background:rgba(101,242,139,.16);
        border-color:${CONFIG.green};
        transform:translateY(-1px);
      }

      .wifs-btn.primary {
        background:${CONFIG.green};
        color:#061009;
        border-color:${CONFIG.green};
        font-weight:800;
      }

      .wifs-speed {
        margin-left:auto;
        display:flex;
        align-items:center;
        gap:5px;
      }

      .wifs-speed span {
        color:${CONFIG.muted};
        font-size:11px;
        margin-right:4px;
      }

      .wifs-speed button {
        min-width:37px;
        padding:8px 8px;
        border-radius:9px;
        border:1px solid rgba(255,255,255,.1);
        background:rgba(255,255,255,.04);
        color:${CONFIG.muted};
        cursor:pointer;
      }

      .wifs-speed button.active {
        border-color:${CONFIG.green};
        color:${CONFIG.green};
        background:rgba(101,242,139,.08);
      }

      .wifs-info {
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:12px;
        padding:18px;
      }

      .wifs-info-card {
        border:1px solid rgba(255,255,255,.08);
        border-radius:16px;
        padding:18px;
        background:rgba(255,255,255,.025);
      }

      .wifs-info-card h3 {
        margin:0 0 8px;
        font-size:14px;
      }

      .wifs-info-card p {
        margin:0;
        color:${CONFIG.muted};
        line-height:1.65;
        font-size:13px;
      }

      @media(max-width:800px) {
        .wifs-header {
          padding:20px 17px 16px;
        }

        .wifs-stage {
          min-height:410px;
          height:60vh;
        }

        .wifs-readout {
          width:180px;
          right:12px;
          top:12px;
        }

        .wifs-hud {
          left:12px;
          top:12px;
          right:205px;
        }

        .wifs-info {
          grid-template-columns:1fr;
        }

        .wifs-speed {
          margin-left:0;
          width:100%;
        }
      }

      @media(max-width:520px) {

        .wifs-panel {
          border-radius:18px;
        }

        .wifs-title {
          font-size:25px;
        }

        .wifs-stage {
          min-height:430px;
          height:64vh;
        }

        .wifs-readout {
          top:auto;
          bottom:12px;
          left:12px;
          right:12px;
          width:auto;
        }

        .wifs-hud {
          right:12px;
        }

        .wifs-controls {
          padding:13px;
        }

        .wifs-btn {
          flex:1;
          min-width:100px;
        }
      }

      @media(prefers-reduced-motion:reduce) {
        .wifs-btn,
        .wifs-close {
          transition:none;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =======================================================
     ROOT
     (targets the #whatIfSimulation container that already
      lives inside the "See What Happens" section, above the
      "Next Simulation" button)
  ======================================================= */

  function createRoot() {

    root = document.getElementById("whatIfSimulation");

    if (!root) {
      root = document.createElement("div");
      root.id = "whatIfSimulation";
      document.body.appendChild(root);
    }

    root.className = "wifs-root";
  }

  /* =======================================================
     LANGUAGE SYNC
     ---------------------------------------------------------
     Watches document.body's class list. The page's own
     language button toggles the "hindi" class — we simply
     react to it, we never set it ourselves.
  ======================================================= */

  function ensureLanguageObserver() {

    if (langObserverStarted) return;

    langObserverStarted = true;

    const observer = new MutationObserver(() => {

      refreshLanguage();
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    });
  }

  function refreshLanguage() {

    if (!root || !active) return;

    const wasRunning = running;

    renderInterface();
    resizeCanvas();

    if (wasRunning) {

      running = true;

      const btn = document.getElementById("wifsPlay");

      if (btn) btn.textContent = "Ⅱ Pause";

      lastTime = performance.now();

      animationFrame = requestAnimationFrame(loop);
    }
  }

  /* =======================================================
     OPEN
  ======================================================= */

  function open(key) {

    if (!simulations[key]) {
      console.warn("Unknown What If simulation:", key);
      return;
    }

    stopAnimation();

    activeKey = key;
    active = simulations[key];
    elapsed = 0;
    running = false;
    speed = 1;

    createStyles();
    createRoot();
    renderInterface();
    resizeCanvas();
    generateStars();

    ensureLanguageObserver();

    window.requestAnimationFrame(() => {
      draw();
    });
  }

  /* =======================================================
     INTERFACE
  ======================================================= */

  function renderInterface() {

    const playLabel =
      running ? "Ⅱ Pause" : "▶ Play";

    root.innerHTML = `
      <div class="wifs-shell">

        <section class="wifs-panel">

          <header class="wifs-header">

            <div class="wifs-title-area">

              <div class="wifs-kicker">
                ${active.icon} ${tu("whatIfPrefix")} • ${tc(active.category)}
              </div>

              <h2 class="wifs-title">
                ${escapeHTML(t(active.title))}
              </h2>

              <p class="wifs-subtitle">
                ${escapeHTML(t(active.description))}
              </p>

            </div>

            <button class="wifs-close"
                    id="wifsClose"
                    aria-label="${tu('closeAria')}">
              ×
            </button>

          </header>

          <div class="wifs-stage" id="wifsStage">

            <canvas class="wifs-canvas"
                    id="wifsCanvas">
            </canvas>

            <div class="wifs-hud">

              <div class="wifs-badge">
                <strong>${tu("live")}</strong> ${tu("scientificModel")}
              </div>

              <div class="wifs-badge">
                ${active.icon} ${tc(active.category)}
              </div>

            </div>

            <div class="wifs-readout">

              <div class="wifs-readout-label">
                ${tu("simulationState")}
              </div>

              <div class="wifs-readout-value"
                   id="wifsReadout">
                ${tu("ready")}
              </div>

              <div class="wifs-readout-small"
                   id="wifsReadoutSmall">
                ${tu("pressPlay")}
              </div>

            </div>

          </div>

          <div class="wifs-controls">

            <button class="wifs-btn primary"
                    id="wifsPlay">
              ${playLabel}
            </button>

            <button class="wifs-btn"
                    id="wifsReset">
              ↻ Reset
            </button>

            <div class="wifs-speed">

              <span>Speed</span>

              <button data-speed="0.5">
                0.5×
              </button>

              <button data-speed="1" class="active">
                1×
              </button>

              <button data-speed="2">
                2×
              </button>

              <button data-speed="4">
                4×
              </button>

            </div>

          </div>

          <div class="wifs-info">

            <article class="wifs-info-card">

              <h3>🌍 Normal World</h3>

              <p>
                ${escapeHTML(t(active.normal))}
              </p>

            </article>

            <article class="wifs-info-card">

              <h3>❓ What Changes?</h3>

              <p>
                ${escapeHTML(t(active.whatIf))}
              </p>

            </article>

            <article class="wifs-info-card">

              <h3>🔬 The Science</h3>

              <p>
                ${escapeHTML(t(active.science))}
              </p>

            </article>

          </div>

        </section>

      </div>
    `;

    canvas = document.getElementById("wifsCanvas");
    ctx = canvas.getContext("2d");

    document.getElementById("wifsClose")
      .addEventListener("click", close);

    document.getElementById("wifsPlay")
      .addEventListener("click", togglePlay);

    document.getElementById("wifsReset")
      .addEventListener("click", reset);

    root.querySelectorAll("[data-speed]")
      .forEach(btn => {

        btn.addEventListener("click", () => {

          speed = Number(btn.dataset.speed);

          root.querySelectorAll("[data-speed]")
            .forEach(b => b.classList.remove("active"));

          btn.classList.add("active");

        });

      });

    if (!resizeListenerAdded) {

      window.addEventListener("resize", resizeCanvas);

      resizeListenerAdded = true;
    }
  }

  /* =======================================================
     CANVAS
  ======================================================= */

  function resizeCanvas() {

    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    generateStars();
    draw();
  }

  /* =======================================================
     STARS
  ======================================================= */

  function generateStars() {

    if (!canvas) return;

    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    stars = [];

    const count = Math.floor((w * h) / 7000);

    for (let i = 0; i < count; i++) {

      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + .2,
        a: Math.random() * .75 + .15,
        tw: Math.random() * Math.PI * 2
      });

    }
  }

  /* =======================================================
     MAIN DRAW
  ======================================================= */

  function draw() {

    if (!ctx || !canvas || !active) return;

    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    ctx.clearRect(0, 0, w, h);

    drawSpace(w, h);

    switch (activeKey) {

      case "sun-disappeared":
        drawSunDisappeared(w, h);
        break;

      case "earth-stopped-spinning":
        drawEarthStoppedSpinning(w, h);
        break;

      case "moon-disappeared":
        drawMoonDisappeared(w, h);
        break;

      case "magnetic-field-lost":
        drawMagneticField(w, h);
        break;

      case "half-gravity":
        drawHalfGravity(w, h);
        break;

      case "jupiter-swapped-mars":
        drawJupiterMars(w, h);
        break;
    }

    updateReadout();
  }

  /* =======================================================
     SPACE BACKGROUND
  ======================================================= */

  function drawSpace(w, h) {

    const g = ctx.createLinearGradient(0, 0, 0, h);

    g.addColorStop(0, "#020503");
    g.addColorStop(.5, "#041008");
    g.addColorStop(1, "#010302");

    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    const glow = ctx.createRadialGradient(
      w * .5,
      h * .45,
      0,
      w * .5,
      h * .45,
      Math.max(w, h) * .65
    );

    glow.addColorStop(0, "rgba(30,100,55,.12)");
    glow.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, w, h);

    stars.forEach((s, i) => {

      const alpha =
        s.a +
        Math.sin(elapsed * .002 + s.tw) * .15;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);

      ctx.fillStyle =
        `rgba(220,245,228,${Math.max(.05, alpha)})`;

      ctx.fill();
    });
  }

  /* =======================================================
     PLANET RENDERER
  ======================================================= */

  function planet(x, y, radius, type = "earth", rotation = 0) {

    ctx.save();

    ctx.translate(x, y);

    /* Atmospheric halo */

    const halo = ctx.createRadialGradient(
      0, 0, radius * .75,
      0, 0, radius * 1.35
    );

    if (type === "earth") {

      halo.addColorStop(0, "rgba(70,150,255,.16)");
      halo.addColorStop(1, "rgba(70,150,255,0)");

    } else if (type === "mars") {

      halo.addColorStop(0, "rgba(210,90,45,.12)");
      halo.addColorStop(1, "rgba(210,90,45,0)");

    } else if (type === "jupiter") {

      halo.addColorStop(0, "rgba(220,180,130,.12)");
      halo.addColorStop(1, "rgba(220,180,130,0)");

    } else {

      halo.addColorStop(0, "rgba(255,255,255,.06)");
      halo.addColorStop(1, "rgba(255,255,255,0)");
    }

    ctx.fillStyle = halo;
    ctx.beginPath();
    ctx.arc(0, 0, radius * 1.35, 0, Math.PI * 2);
    ctx.fill();

    /* Sphere */

    const lightX = -radius * .45;
    const lightY = -radius * .5;

    const sphere = ctx.createRadialGradient(
      lightX,
      lightY,
      radius * .05,
      0,
      0,
      radius * 1.05
    );

    if (type === "earth") {

      sphere.addColorStop(0, "#aee6ff");
      sphere.addColorStop(.28, "#3281ba");
      sphere.addColorStop(.58, "#145078");
      sphere.addColorStop(.82, "#082b42");
      sphere.addColorStop(1, "#020b12");

    } else if (type === "mars") {

      sphere.addColorStop(0, "#ffb078");
      sphere.addColorStop(.3, "#c55b39");
      sphere.addColorStop(.65, "#7c3023");
      sphere.addColorStop(1, "#240c09");

    } else if (type === "jupiter") {

      sphere.addColorStop(0, "#f5e3c5");
      sphere.addColorStop(.3, "#cda985");
      sphere.addColorStop(.58, "#8f674d");
      sphere.addColorStop(.8, "#51382e");
      sphere.addColorStop(1, "#170f0c");

    } else if (type === "moon") {

      sphere.addColorStop(0, "#eeeeea");
      sphere.addColorStop(.45, "#a9aaa4");
      sphere.addColorStop(.75, "#5f625e");
      sphere.addColorStop(1, "#20231f");

    } else {

      sphere.addColorStop(0, "#eeeeee");
      sphere.addColorStop(.5, "#777");
      sphere.addColorStop(1, "#151515");
    }

    ctx.fillStyle = sphere;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();

    /* Surface texture */

    ctx.save();

    ctx.beginPath();
    ctx.arc(0, 0, radius * .99, 0, Math.PI * 2);
    ctx.clip();

    if (type === "earth") {

      drawEarthSurface(radius, rotation);

    } else if (type === "mars") {

      drawMarsSurface(radius);

    } else if (type === "jupiter") {

      drawJupiterSurface(radius);

    } else if (type === "moon") {

      drawMoonSurface(radius);

    }

    ctx.restore();

    /* Edge atmosphere */

    if (type === "earth") {

      ctx.strokeStyle = "rgba(105,205,255,.45)";
      ctx.lineWidth = Math.max(1, radius * .035);

      ctx.beginPath();
      ctx.arc(0, 0, radius * .98, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.restore();
  }

  /* =======================================================
     EARTH SURFACE
  ======================================================= */

  function drawEarthSurface(radius, rotation) {

    ctx.save();

    ctx.rotate(rotation);

    ctx.fillStyle = "rgba(74,151,71,.85)";

    const continents = [
      [-.25,-.18,.24,.38],
      [.20,-.32,.20,.27],
      [.40,.04,.22,.35],
      [-.38,.28,.17,.28],
      [.03,.22,.15,.20]
    ];

    continents.forEach(c => {

      ctx.beginPath();

      ctx.ellipse(
        c[0] * radius,
        c[1] * radius,
        c[2] * radius,
        c[3] * radius,
        Math.random() * .2,
        0,
        Math.PI * 2
      );

      ctx.fill();

    });

    /* Cloud bands */

    ctx.strokeStyle = "rgba(240,250,246,.25)";
    ctx.lineWidth = radius * .055;

    for (let i = -2; i <= 2; i++) {

      ctx.beginPath();

      ctx.ellipse(
        0,
        i * radius * .24,
        radius * .78,
        radius * .08,
        -.15,
        0,
        Math.PI * 2
      );

      ctx.stroke();
    }

    ctx.restore();
  }

  /* =======================================================
     MARS
  ======================================================= */

  function drawMarsSurface(radius) {

    for (let i = 0; i < 9; i++) {

      const x =
        (Math.random() - .5) * radius * 1.5;

      const y =
        (Math.random() - .5) * radius * 1.5;

      const r =
        Math.random() * radius * .08 +
        radius * .025;

      ctx.fillStyle = "rgba(50,15,10,.35)";

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /* =======================================================
     JUPITER
  ======================================================= */

  function drawJupiterSurface(radius) {

    ctx.save();

    const bands = [
      "#9a755d",
      "#d3b292",
      "#795546",
      "#e0c4a3",
      "#8b624d",
      "#d0aa86",
      "#68493c"
    ];

    bands.forEach((color, i) => {

      const y =
        -radius +
        (i + .5) * (radius * 2 / bands.length);

      ctx.fillStyle = color;

      ctx.fillRect(
        -radius,
        y,
        radius * 2,
        radius * .22
      );
    });

    /* Great Red Spot */

    ctx.fillStyle = "rgba(160,75,52,.75)";

    ctx.beginPath();

    ctx.ellipse(
      radius * .28,
      radius * .2,
      radius * .22,
      radius * .12,
      -.1,
      0,
      Math.PI * 2
    );

    ctx.fill();

    ctx.restore();
  }

  /* =======================================================
     MOON
  ======================================================= */

  function drawMoonSurface(radius) {

    for (let i = 0; i < 13; i++) {

      const a = Math.random() * Math.PI * 2;
      const d = Math.random() * radius * .75;

      const x = Math.cos(a) * d;
      const y = Math.sin(a) * d;

      const r =
        Math.random() * radius * .10 +
        radius * .025;

      ctx.fillStyle = "rgba(30,32,29,.25)";

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  /* =======================================================
     SUN
  ======================================================= */

  function sun(x, y, radius, visible = true) {

    if (!visible) return;

    ctx.save();

    const glow = ctx.createRadialGradient(
      x, y, radius * .3,
      x, y, radius * 3
    );

    glow.addColorStop(0, "rgba(255,218,100,.45)");
    glow.addColorStop(.35, "rgba(255,155,50,.16)");
    glow.addColorStop(1, "rgba(255,120,20,0)");

    ctx.fillStyle = glow;

    ctx.beginPath();
    ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
    ctx.fill();

    const body = ctx.createRadialGradient(
      x - radius * .3,
      y - radius * .35,
      radius * .05,
      x,
      y,
      radius
    );

    body.addColorStop(0, "#fff5a8");
    body.addColorStop(.3, "#ffd65a");
    body.addColorStop(.7, "#ff9c22");
    body.addColorStop(1, "#b94409");

    ctx.fillStyle = body;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    /* Solar texture */

    for (let i = 0; i < 20; i++) {

      const a = Math.random() * Math.PI * 2;
      const d = Math.random() * radius * .75;

      ctx.fillStyle =
        "rgba(170,65,10,.18)";

      ctx.beginPath();

      ctx.arc(
        x + Math.cos(a) * d,
        y + Math.sin(a) * d,
        Math.random() * radius * .07,
        0,
        Math.PI * 2
      );

      ctx.fill();
    }

    ctx.restore();
  }

  /* =======================================================
     ORBIT
  ======================================================= */

  function orbit(cx, cy, rx, ry, alpha = .16) {

    ctx.save();

    ctx.strokeStyle =
      `rgba(150,210,170,${alpha})`;

    ctx.lineWidth = 1;

    ctx.setLineDash([4, 8]);

    ctx.beginPath();

    ctx.ellipse(
      cx,
      cy,
      rx,
      ry,
      0,
      0,
      Math.PI * 2
    );

    ctx.stroke();

    ctx.setLineDash([]);

    ctx.restore();
  }

  /* =======================================================
     LABEL
  ======================================================= */

  function label(text, x, y, align = "center") {

    ctx.save();

    ctx.font =
      "600 11px Inter, system-ui, sans-serif";

    ctx.textAlign = align;

    ctx.fillStyle =
      "rgba(220,235,225,.78)";

    ctx.fillText(text, x, y);

    ctx.restore();
  }

  /* =======================================================
     1 — SUN DISAPPEARED
  ======================================================= */

  function drawSunDisappeared(w, h) {

    const cx = w * .5;
    const cy = h * .53;

    const sunX = w * .5;
    const sunY = h * .5;

    const earthOrbit = Math.min(w, h) * .31;

    const delay = 8.333;

    const phase =
      Math.min(elapsed / 1000, 25);

    const sunVisible =
      phase < delay;

    /* Sun */

    if (sunVisible) {

      sun(
        sunX,
        sunY,
        Math.min(w, h) * .075,
        true
      );

      label(
        tl("SUN"),
        sunX,
        sunY + Math.min(w,h) * .075 + 18
      );
    }

    /* Orbit */

    orbit(
      cx,
      cy,
      earthOrbit,
      earthOrbit * .72,
      .17
    );

    let angle;

    if (phase < delay) {

      angle = phase * .35;

    } else {

      const after =
        phase - delay;

      angle =
        delay * .35 +
        after * .035;
    }

    let ex;
    let ey;

    if (phase < delay) {

      ex =
        cx +
        Math.cos(angle) *
        earthOrbit;

      ey =
        cy +
        Math.sin(angle) *
        earthOrbit * .72;

    } else {

      const startX =
        cx +
        Math.cos(delay * .35) *
        earthOrbit;

      const startY =
        cy +
        Math.sin(delay * .35) *
        earthOrbit * .72;

      const tangentX =
        -Math.sin(delay * .35);

      const tangentY =
        Math.cos(delay * .35);

      const travel =
        Math.min((after / 8) * earthOrbit, earthOrbit * 1.8);

      ex =
        startX +
        tangentX * travel;

      ey =
        startY +
        tangentY * travel * .72;
    }

    planet(
      ex,
      ey,
      Math.min(w,h) * .043,
      "earth",
      elapsed * .00015
    );

    label(tl("EARTH"), ex, ey + Math.min(w,h)*.043 + 17);

    /* Tangent path */

    if (!sunVisible) {

      const sx =
        cx +
        Math.cos(delay * .35) *
        earthOrbit;

      const sy =
        cy +
        Math.sin(delay * .35) *
        earthOrbit * .72;

      const tx =
        -Math.sin(delay * .35);

      const ty =
        Math.cos(delay * .35);

      ctx.save();

      ctx.strokeStyle =
        "rgba(101,242,139,.55)";

      ctx.lineWidth = 1.5;

      ctx.setLineDash([7,8]);

      ctx.beginPath();

      ctx.moveTo(sx, sy);

      ctx.lineTo(
        sx + tx * earthOrbit * 2,
        sy + ty * earthOrbit * 2 * .72
      );

      ctx.stroke();

      ctx.restore();

      label(
        tl("TANGENT"),
        w * .5,
        h - 32
      );
    }
  }

  /* =======================================================
     2 — EARTH STOPPED SPINNING
  ======================================================= */

  function drawEarthStoppedSpinning(w, h) {

    const x = w * .5;
    const y = h * .5;

    const r = Math.min(w,h) * .18;

    const spinTime =
      Math.min(elapsed / 1000, 12);

    const rotation =
      spinTime < 5
        ? spinTime * 2
        : 10;

    planet(
      x,
      y,
      r,
      "earth",
      rotation
    );

    /* Rotation axis */

    ctx.save();

    ctx.strokeStyle =
      "rgba(101,242,139,.55)";

    ctx.lineWidth = 1.2;

    ctx.setLineDash([5,8]);

    ctx.beginPath();

    ctx.moveTo(
      x,
      y-r*1.35
    );

    ctx.lineTo(
      x,
      y+r*1.35
    );

    ctx.stroke();

    ctx.restore();

    /* Rotation arrow */

    if (spinTime < 5) {

      arcArrow(
        x,
        y,
        r * 1.35,
        -Math.PI * .7,
        Math.PI * .7,
        CONFIG.green
      );

      label(
        tl("ROTATING"),
        x,
        y + r * 1.55
      );

    } else {

      label(
        tl("ROTATION_STOPPED"),
        x,
        y + r * 1.55
      );
    }
  }

  /* =======================================================
     3 — MOON DISAPPEARED
  ======================================================= */

  function drawMoonDisappeared(w, h) {

    const cx = w * .5;
    const cy = h * .5;

    const earthR =
      Math.min(w,h) * .13;

    const orbitR =
      Math.min(w,h) * .30;

    const t2 =
      elapsed / 1000;

    const disappearance =
      Math.min(t2 / 8, 1);

    planet(
      cx,
      cy,
      earthR,
      "earth",
      t2 * .03
    );

    label(
      tl("EARTH"),
      cx,
      cy + earthR + 18
    );

    orbit(
      cx,
      cy,
      orbitR,
      orbitR * .8,
      .16
    );

    const moonVisible =
      disappearance < 1;

    if (moonVisible) {

      const a = t2 * .3;

      const mx =
        cx +
        Math.cos(a) * orbitR;

      const my =
        cy +
        Math.sin(a) * orbitR * .8;

      const moonScale =
        1 - disappearance;

      planet(
        mx,
        my,
        Math.max(1, earthR * .42 * moonScale),
        "moon",
        t2 * .02
      );

      if (moonScale > .2) {

        label(
          tl("MOON"),
          mx,
          my + earthR*.5
        );
      }

    } else {

      /* Changed tide visualization */

      drawTideRings(
        cx,
        cy,
        earthR
      );

      label(
        tl("MOON_GONE"),
        cx,
        cy + earthR + 38
      );
    }
  }

  /* =======================================================
     TIDE RINGS
  ======================================================= */

  function drawTideRings(x, y, r) {

    ctx.save();

    for (let i = 0; i < 5; i++) {

      const rr =
        r * (1.8 + i * .32);

      ctx.strokeStyle =
        `rgba(70,160,210,${.18 - i*.025})`;

      ctx.lineWidth = 1;

      ctx.beginPath();

      ctx.ellipse(
        x,
        y,
        rr,
        rr * .72,
        0,
        0,
        Math.PI * 2
      );

      ctx.stroke();
    }

    ctx.restore();
  }

  /* =======================================================
     4 — MAGNETIC FIELD LOST
  ======================================================= */

  function drawMagneticField(w, h) {

    const x = w * .5;
    const y = h * .52;

    const r = Math.min(w,h) * .14;

    planet(
      x,
      y,
      r,
      "earth",
      elapsed * .0001
    );

    label(
      tl("EARTH"),
      x,
      y + r + 18
    );

    const strength =
      Math.max(
        0,
        1 - Math.min(elapsed / 10000, 1)
      );

    if (strength > .02) {

      for (let i = 0; i < 8; i++) {

        const rx =
          r * (1.7 + i * .23);

        const ry =
          r * (2.2 + i * .25);

        ctx.save();

        ctx.strokeStyle =
          `rgba(101,242,139,${.24 * strength})`;

        ctx.lineWidth = 1.4;

        ctx.beginPath();

        ctx.ellipse(
          x,
          y,
          rx,
          ry,
          0,
          Math.PI,
          Math.PI * 2
        );

        ctx.stroke();

        ctx.beginPath();

        ctx.ellipse(
          x,
          y,
          rx,
          ry,
          0,
          0,
          Math.PI
        );

        ctx.stroke();

        ctx.restore();
      }

      label(
        tl("MAGNETIC_FIELD"),
        x,
        y - r * 2.65
      );
    }

    /* Solar particles */

    for (let i = 0; i < 35; i++) {

      const yy =
        ((i * 47 + elapsed * .08) %
          (h + 80)) - 40;

      const xx =
        (i * 97) % w;

      ctx.fillStyle =
        "rgba(255,190,100,.55)";

      ctx.beginPath();

      ctx.arc(
        xx,
        yy,
        1.4,
        0,
        Math.PI * 2
      );

      ctx.fill();
    }

    if (strength < .25) {

      label(
        tl("MAGNETIC_WEAK"),
        x,
        h - 32
      );
    }
  }

  /* =======================================================
     5 — HALF GRAVITY
  ======================================================= */

  function drawHalfGravity(w, h) {

    const ground =
      h * .78;

    const center =
      w * .5;

    const t2 =
      elapsed / 1000;

    const cycle =
      (t2 % 6);

    const gNormal = 9.8;
    const gHalf = 4.9;

    /* Ground */

    ctx.fillStyle =
      "rgba(42,74,51,.45)";

    ctx.fillRect(
      0,
      ground,
      w,
      h-ground
    );

    /* Reference trajectory */

    drawTrajectory(
      center - 90,
      ground,
      150,
      false
    );

    /* Half gravity trajectory */

    drawTrajectory(
      center + 90,
      ground,
      260,
      true
    );

    /* Two objects */

    const normal =
      projectile(
        cycle,
        2.5,
        1
      );

    const half =
      projectile(
        cycle,
        2.5,
        .5
      );

    drawObject(
      center - 90,
      ground - normal.y,
      11
    );

    drawObject(
      center + 90,
      ground - half.y,
      11
    );

    label(
      tl("NORMAL_G"),
      center - 90,
      ground + 25
    );

    label(
      tl("HALF_G"),
      center + 90,
      ground + 25
    );
  }

  function projectile(time, total, factor) {

    const t =
      Math.min(time / total, 1);

    const v0 = 18;

    const g =
      9.8 * factor;

    const y =
      v0 * t * 18 -
      .5 * g * t * t * 18;

    return {
      y: Math.max(0, y)
    };
  }

  function drawTrajectory(x, ground, height, half) {

    ctx.save();

    ctx.strokeStyle =
      half
        ? "rgba(101,242,139,.22)"
        : "rgba(255,255,255,.12)";

    ctx.lineWidth = 1;

    ctx.setLineDash([4,7]);

    ctx.beginPath();

    ctx.moveTo(x, ground);

    ctx.quadraticCurveTo(
      x + 40,
      ground - height,
      x + 100,
      ground
    );

    ctx.stroke();

    ctx.restore();
  }

  function drawObject(x, y, r) {

    const g =
      ctx.createRadialGradient(
        x-r*.4,
        y-r*.5,
        1,
        x,
        y,
        r
      );

    g.addColorStop(0, "#ffffff");
    g.addColorStop(.3, CONFIG.green);
    g.addColorStop(1, "#168b43");

    ctx.fillStyle = g;

    ctx.beginPath();

    ctx.arc(
      x,
      y,
      r,
      0,
      Math.PI*2
    );

    ctx.fill();
  }

  /* =======================================================
     6 — JUPITER / MARS SWAP
  ======================================================= */

  function drawJupiterMars(w, h) {

    const cx = w * .48;
    const cy = h * .52;

    const sunR =
      Math.min(w,h) * .055;

    sun(
      cx,
      cy,
      sunR,
      true
    );

    label(
      tl("SUN"),
      cx,
      cy + sunR + 17
    );

    const scale =
      Math.min(w,h);

    const marsOrbit =
      scale * .23;

    const jupiterOrbit =
      scale * .39;

    const t2 =
      elapsed / 1000;

    /* Normal */

    orbit(
      cx,
      cy,
      marsOrbit,
      marsOrbit * .72,
      .12
    );

    orbit(
      cx,
      cy,
      jupiterOrbit,
      jupiterOrbit * .72,
      .12
    );

    const swap =
      Math.min(t2 / 8, 1);

    const marsRadius =
      scale * .025;

    const jupiterRadius =
      scale * .062;

    const marsDistance =
      marsOrbit +
      (jupiterOrbit - marsOrbit) * swap;

    const jupiterDistance =
      jupiterOrbit -
      (jupiterOrbit - marsOrbit) * swap;

    const ma =
      t2 * .45;

    const ja =
      t2 * .22;

    const mx =
      cx +
      Math.cos(ma) *
      marsDistance;

    const my =
      cy +
      Math.sin(ma) *
      marsDistance * .72;

    const jx =
      cx +
      Math.cos(ja) *
      jupiterDistance;

    const jy =
      cy +
      Math.sin(ja) *
      jupiterDistance * .72;

    planet(
      mx,
      my,
      marsRadius,
      "mars",
      t2*.02
    );

    planet(
      jx,
      jy,
      jupiterRadius,
      "jupiter",
      t2*.01
    );

    label(
      tl("MARS"),
      mx,
      my + marsRadius + 15
    );

    label(
      tl("JUPITER"),
      jx,
      jy + jupiterRadius + 17
    );

    if (swap >= 1) {

      label(
        tl("SWAPPED"),
        w*.5,
        h-30
      );
    }
  }

  /* =======================================================
     ARC ARROW
  ======================================================= */

  function arcArrow(
    x,
    y,
    radius,
    start,
    end,
    color
  ) {

    ctx.save();

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    ctx.beginPath();

    ctx.arc(
      x,
      y,
      radius,
      start,
      end
    );

    ctx.stroke();

    const a = end;

    const px =
      x + Math.cos(a) * radius;

    const py =
      y + Math.sin(a) * radius;

    const size = 8;

    ctx.fillStyle = color;

    ctx.beginPath();

    ctx.moveTo(
      px,
      py
    );

    ctx.lineTo(
      px - Math.cos(a-.6)*size,
      py - Math.sin(a-.6)*size
    );

    ctx.lineTo(
      px - Math.cos(a+.6)*size,
      py - Math.sin(a+.6)*size
    );

    ctx.closePath();

    ctx.fill();

    ctx.restore();
  }

  /* =======================================================
     PLAY / PAUSE
  ======================================================= */

  function togglePlay() {

    running = !running;

    const btn =
      document.getElementById("wifsPlay");

    if (!btn) return;

    if (running) {

      btn.textContent = "Ⅱ Pause";

      lastTime =
        performance.now();

      animationFrame =
        requestAnimationFrame(loop);

    } else {

      btn.textContent = "▶ Play";

      stopAnimation();
    }
  }

  /* =======================================================
     LOOP
  ======================================================= */

  function loop(now) {

    if (!running) return;

    const dt =
      Math.min(
        now - lastTime,
        80
      );

    lastTime = now;

    elapsed +=
      dt * speed;

    draw();

    animationFrame =
      requestAnimationFrame(loop);
  }

  /* =======================================================
     RESET
  ======================================================= */

  function reset() {

    stopAnimation();

    elapsed = 0;
    running = false;

    const btn =
      document.getElementById("wifsPlay");

    if (btn) {
      btn.textContent = "▶ Play";
    }

    draw();
  }

  /* =======================================================
     STOP
  ======================================================= */

  function stopAnimation() {

    if (animationFrame) {

      cancelAnimationFrame(
        animationFrame
      );

      animationFrame = null;
    }

    running = false;
  }

  /* =======================================================
     READOUT
  ======================================================= */

  function updateReadout() {

    const value =
      document.getElementById("wifsReadout");

    const small =
      document.getElementById("wifsReadoutSmall");

    if (!value || !small) return;

    const seconds =
      elapsed / 1000;

    const msgs =
      readoutMessages[activeKey];

    if (!msgs) return;

    switch (activeKey) {

      case "sun-disappeared": {

        const phase =
          seconds < 8.33 ? msgs.before : msgs.after;

        value.textContent = t(phase.value);
        small.textContent = t(phase.small);

        break;
      }

      case "earth-stopped-spinning": {

        const phase =
          seconds < 5 ? msgs.before : msgs.after;

        value.textContent = t(phase.value);
        small.textContent = t(phase.small);

        break;
      }

      case "moon-disappeared": {

        const phase =
          seconds < 8 ? msgs.before : msgs.after;

        value.textContent = t(phase.value);
        small.textContent = t(phase.small);

        break;
      }

      case "magnetic-field-lost": {

        const magnetic =
          Math.max(
            0,
            100 -
            seconds * 10
          );

        value.textContent =
          Math.round(magnetic) + "%";

        small.textContent = t(msgs.small);
        break;
      }

      case "half-gravity": {

        value.textContent =
          "g ≈ 4.9 m/s²";

        small.textContent = t(msgs.small);
        break;
      }

      case "jupiter-swapped-mars": {

        const phase =
          seconds < 8 ? msgs.before : msgs.after;

        value.textContent = t(phase.value);
        small.textContent = t(phase.small);

        break;
      }
    }
  }

  /* =======================================================
     CLOSE
  ======================================================= */

  function close() {

    stopAnimation();

    if (root) {
      root.innerHTML = "";
    }

    active = null;
    activeKey = null;
  }

  /* =======================================================
     ESCAPE HTML
  ======================================================= */

  function escapeHTML(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* =======================================================
     PUBLIC API
  ======================================================= */

  window.WhatIfSimulation = {

    open,

    close,

    reset,

    play() {

      if (!running) {
        togglePlay();
      }

    },

    pause() {

      if (running) {
        togglePlay();
      }

    },

    list() {

      return Object.keys(simulations);
    },

    data: simulations
  };

  /* =======================================================
     OPTIONAL AUTO OPEN
     Example:
     what-if/index.html?simulation=sun-disappeared
  ======================================================= */

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      const params =
        new URLSearchParams(
          window.location.search
        );

      const requested =
        params.get("simulation");

      if (
        requested &&
        simulations[requested]
      ) {

        open(requested);
      }

    }
  );

})();
