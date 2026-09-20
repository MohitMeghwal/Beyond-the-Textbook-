/*
  data/science-beyond-earth.js

  SCIENCE BEYOND EARTH

  Visual-first content:
  Fact → Minimal visual → Tap/Click → Deeper explanation

  8 bilingual science facts.
  English + Hindi content preserved from the source draft.
*/

const scienceBeyondEarth = [

  /* =========================================================
     FACT 1 — LIGHT AND TIME
  ========================================================= */

  {
    id: "light-and-time",

    icon: "☀️",

    title: {
      en: "LIGHT & TIME",
      hi: "प्रकाश और समय"
    },

    fact: {
      en: "Sunlight takes about 8 minutes to reach Earth.",
      hi: "सूर्य के प्रकाश को पृथ्वी तक पहुँचने में लगभग 8 मिनट लगते हैं।"
    },

    visual: {
      en: "☀️ → 🌍",
      hi: "☀️ → 🌍"
    },

    label: {
      en: "8 MINUTES",
      hi: "8 मिनट"
    },

    expandLabel: {
      en: "Tap to expand — What does this mean?",
      hi: "टैप करें — इसका मतलब क्या है?"
    },

    explanation: {
      en: "This means that every time you look at the Sun, you are actually seeing how it looked 8 minutes ago, not how it looks right now. If the Sun suddenly disappeared, we would still see it shining in the sky for another 8 minutes before we found out.",

      hi: "इसका मतलब है कि जब भी तुम सूर्य की ओर देखते हो, तुम असल में यह देख रहे हो कि वह 8 मिनट पहले कैसा दिखता था, न कि अभी कैसा दिखता है। अगर सूर्य अचानक गायब हो जाए, तो भी हमें अगले 8 मिनट तक वह आसमान में चमकता हुआ ही दिखाई देगा, तब तक हमें इसका पता ही नहीं चलेगा।"
    }
  },


  /* =========================================================
     FACT 2 — SCALE OF THE SUN
  ========================================================= */

  {
    id: "scale-of-the-sun",

    icon: "☀️",

    title: {
      en: "THE SCALE OF THE SUN",
      hi: "सूर्य का विशाल आकार"
    },

    fact: {
      en: "More than 1.3 million Earths could fit inside the Sun.",
      hi: "सूर्य के अंदर 13 लाख से अधिक पृथ्वी समा सकती हैं।"
    },

    visual: {
      en: "☀️ 🌍🌍🌍🌍🌍",
      hi: "☀️ 🌍🌍🌍🌍🌍"
    },

    label: {
      en: "1.3 MILLION+ EARTHS",
      hi: "13 लाख+ पृथ्वियाँ"
    },

    expandLabel: {
      en: "Tap to expand — What does this mean?",
      hi: "टैप करें — इसका मतलब क्या है?"
    },

    explanation: {
      en: "The Sun's diameter is about 109 times that of Earth, which means its volume is roughly 1.3 million times larger. Even though the Sun looks like just another bright dot in our solar system, it actually contains more than 99 percent of all the mass in the entire solar system combined.",

      hi: "सूर्य का व्यास पृथ्वी के व्यास से लगभग 109 गुना है, जिसका मतलब है कि उसका आयतन लगभग 13 लाख गुना अधिक है। भले ही सूर्य हमारे सौरमंडल में सिर्फ एक चमकता हुआ गोला दिखाई देता है, लेकिन वास्तव में पूरे सौरमंडल के कुल द्रव्यमान का 99 प्रतिशत से अधिक हिस्सा सूर्य में मौजूद है।"
    }
  },


  /* =========================================================
     FACT 3 — NEUTRON STAR DENSITY
  ========================================================= */

  {
    id: "neutron-star-density",

    icon: "⭐",

    title: {
      en: "NEUTRON STAR DENSITY",
      hi: "न्यूट्रॉन तारे का घनत्व"
    },

    fact: {
      en: "A teaspoon of material from a neutron star would weigh about a billion tons on Earth.",
      hi: "एक न्यूट्रॉन तारे के पदार्थ का एक चम्मच पृथ्वी पर लगभग एक अरब टन के बराबर वज़न रखता है।"
    },

    visual: {
      en: "⭐ 🥄",
      hi: "⭐ 🥄"
    },

    label: {
      en: "≈ 1 BILLION TONS",
      hi: "≈ 1 अरब टन"
    },

    expandLabel: {
      en: "Tap to expand — What does this mean?",
      hi: "टैप करें — इसका मतलब क्या है?"
    },

    explanation: {
      en: "When a massive star collapses at the end of its life, its matter can get crushed so tightly that atoms themselves are squeezed together, leaving almost no empty space inside them. This creates an object so dense that just a small spoonful of it would outweigh a mountain here on Earth.",

      hi: "जब कोई विशाल तारा अपने जीवन के अंत में सिकुड़ जाता है, तो उसका पदार्थ इतनी बुरी तरह दब जाता है कि परमाणु खुद आपस में इतने पास आ जाते हैं कि उनके अंदर लगभग कोई खाली जगह ही नहीं बचती। इससे इतना घना पदार्थ बनता है कि उसका एक छोटा सा चम्मच भी पृथ्वी पर किसी पहाड़ से अधिक वज़नी हो सकता है।"
    }
  },


  /* =========================================================
     FACT 4 — BLACK HOLES
  ========================================================= */

  {
    id: "black-holes",

    icon: "🕳️",

    title: {
      en: "BLACK HOLES",
      hi: "ब्लैक होल"
    },

    fact: {
      en: "Not even light can escape from inside a black hole.",
      hi: "ब्लैक होल के अंदर से प्रकाश भी बाहर नहीं निकल सकता।"
    },

    visual: {
      en: "✨ → 🕳️",
      hi: "✨ → 🕳️"
    },

    label: {
      en: "NOT EVEN LIGHT",
      hi: "प्रकाश भी नहीं"
    },

    expandLabel: {
      en: "Tap to expand — What does this mean?",
      hi: "टैप करें — इसका मतलब क्या है?"
    },

    explanation: {
      en: "A black hole forms when a huge amount of mass gets packed into an extremely small space, creating gravity so strong that nothing, not even light, has enough speed to break free once it crosses a certain boundary called the event horizon. This is exactly why black holes appear completely dark and cannot be seen directly.",

      hi: "ब्लैक होल तब बनता है जब बहुत अधिक द्रव्यमान बेहद छोटी जगह में सिमट जाता है और इतना शक्तिशाली गुरुत्वाकर्षण पैदा करता है कि एक निश्चित सीमा, जिसे इवेंट होराइज़न कहा जाता है, को पार करने के बाद कोई भी चीज़, यहाँ तक कि प्रकाश भी, बाहर नहीं निकल सकता। इसी कारण ब्लैक होल पूरी तरह अंधेरे दिखाई देते हैं और उन्हें सीधे नहीं देखा जा सकता।"
    }
  },


  /* =========================================================
     FACT 5 — DISTANCE TO THE NEAREST STAR
  ========================================================= */

  {
    id: "nearest-star",

    icon: "⭐",

    title: {
      en: "THE NEAREST STAR",
      hi: "सबसे निकटतम तारा"
    },

    fact: {
      en: "The nearest star is more than 4 light-years away.",
      hi: "सबसे निकटतम तारा 4 प्रकाश-वर्ष से भी अधिक दूर है।"
    },

    visual: {
      en: "🌍 ───────── ⭐",
      hi: "🌍 ───────── ⭐"
    },

    label: {
      en: "4+ LIGHT-YEARS",
      hi: "4+ प्रकाश-वर्ष"
    },

    expandLabel: {
      en: "Tap to expand — What does this mean?",
      hi: "टैप करें — इसका मतलब क्या है?"
    },

    explanation: {
      en: "The nearest star is more than 4 light-years away.",

      hi: "सबसे निकटतम तारा 4 प्रकाश-वर्ष से भी अधिक दूर है।"
    }
  },


  /* =========================================================
     FACT 6 — SCALE OF THE UNIVERSE
  ========================================================= */

  {
    id: "scale-of-the-universe",

    icon: "🌌",

    title: {
      en: "THE SCALE OF THE UNIVERSE",
      hi: "ब्रह्मांड का विशाल पैमाना"
    },

    fact: {
      en: "The observable universe may contain more than a trillion galaxies, each with billions of stars.",
      hi: "दिखाई देने वाले ब्रह्मांड में शायद एक खरब से भी अधिक आकाशगंगाएँ हैं, और हर आकाशगंगा में अरबों तारे मौजूद हैं।"
    },

    visual: {
      en: "🌌 ✨ ⭐ ✨ 🌌",
      hi: "🌌 ✨ ⭐ ✨ 🌌"
    },

    label: {
      en: "1 TRILLION+ GALAXIES",
      hi: "1 खरब+ आकाशगंगाएँ"
    },

    expandLabel: {
      en: "Tap to expand — What does this mean?",
      hi: "टैप करें — इसका मतलब क्या है?"
    },

    explanation: {
      en: "Our own galaxy, the Milky Way, alone contains hundreds of billions of stars, and it is just one among the vast number of galaxies scattered across the universe. This means the total number of stars in the observable universe is far greater than the number of grains of sand on every beach on Earth combined.",

      hi: "हमारी अपनी आकाशगंगा, आकाशगंगा पथ, में अकेले ही सैकड़ों अरब तारे मौजूद हैं, और यह ब्रह्मांड में फैली हुई अनगिनत आकाशगंगाओं में से बस एक है। इसका मतलब है कि दिखाई देने वाले ब्रह्मांड में तारों की कुल संख्या, पृथ्वी के हर समुद्र तट पर मौजूद रेत के कणों की कुल संख्या से भी कहीं अधिक है।"
    }
  },


  /* =========================================================
     FACT 7 — HOTTEST PLANET
  ========================================================= */

  {
    id: "hottest-planet",

    icon: "🟠",

    title: {
      en: "THE HOTTEST PLANET",
      hi: "सबसे गर्म ग्रह"
    },

    fact: {
      en: "Venus, not Mercury, is the hottest planet in our solar system, even though Mercury is closer to the Sun.",
      hi: "बुध ग्रह के सूर्य के अधिक नज़दीक होने के बावजूद, शुक्र ग्रह हमारे सौरमंडल का सबसे गर्म ग्रह है, न कि बुध।"
    },

    visual: {
      en: "☀️ → ☿️ 🔥 → ♀️ 🔥🔥",
      hi: "☀️ → ☿️ 🔥 → ♀️ 🔥🔥"
    },

    label: {
      en: "VENUS > MERCURY",
      hi: "शुक्र > बुध"
    },

    expandLabel: {
      en: "Tap to expand — What does this mean?",
      hi: "टैप करें — इसका मतलब क्या है?"
    },

    explanation: {
      en: "Venus has an extremely thick atmosphere made mostly of carbon dioxide, which traps heat in a powerful greenhouse effect. This keeps its surface temperature high enough to melt lead, even though Mercury actually receives more direct sunlight because it orbits closer to the Sun.",

      hi: "शुक्र ग्रह का वायुमंडल बेहद घना है और मुख्य रूप से कार्बन डाइऑक्साइड से बना है, जो एक शक्तिशाली ग्रीनहाउस प्रभाव के कारण गर्मी को अपने अंदर ही रोक लेता है। इसी वजह से इसकी सतह का तापमान इतना अधिक रहता है कि सीसा भी पिघल जाए, जबकि बुध ग्रह सूर्य के अधिक नज़दीक होने के कारण असल में अधिक सीधी धूप पाता है।"
    }
  },


  /* =========================================================
     FACT 8 — A STRANGE VENUS DAY
  ========================================================= */

  {
    id: "venus-day",

    icon: "🪐",

    title: {
      en: "A STRANGE VENUS DAY",
      hi: "शुक्र का अजीब दिन"
    },

    fact: {
      en: "A single day on Venus is longer than a full year on Venus.",
      hi: "शुक्र ग्रह पर एक दिन, शुक्र ग्रह के एक पूरे साल से भी लंबा होता है।"
    },

    visual: {
      en: "🪐 ↻ 243 DAYS  |  ☀️ ↻ 225 DAYS",
      hi: "🪐 ↻ 243 दिन  |  ☀️ ↻ 225 दिन"
    },

    label: {
      en: "243 DAYS > 225 DAYS",
      hi: "243 दिन > 225 दिन"
    },

    expandLabel: {
      en: "Tap to expand — What does this mean?",
      hi: "टैप करें — इसका मतलब क्या है?"
    },

    explanation: {
      en: "Venus spins on its axis extremely slowly, taking about 243 Earth days to complete just one rotation, while it takes only about 225 Earth days to complete one full orbit around the Sun. This means that by the time Venus finishes a single day and night cycle, it has already completed more than one trip around the Sun.",

      hi: "शुक्र ग्रह अपनी धुरी पर बेहद धीरे घूमता है, और एक बार पूरी तरह घूमने में उसे लगभग 243 पृथ्वी-दिन लगते हैं, जबकि सूर्य के चारों ओर एक पूरी परिक्रमा पूरी करने में उसे केवल लगभग 225 पृथ्वी-दिन लगते हैं। इसका मतलब है कि शुक्र ग्रह पर एक दिन-रात का चक्र पूरा होने तक, वह सूर्य के चारों ओर एक से अधिक चक्कर लगा चुका होता है।"
    }
  }

];


/* =========================================================
   PUBLIC API
========================================================= */

window.ScienceBeyondEarth = {

  all() {
    return scienceBeyondEarth;
  },

  get(id) {
    return scienceBeyondEarth.find(fact => fact.id === id);
  },

  count() {
    return scienceBeyondEarth.length;
  },

  setLanguage(language) {
    return language === "hi" ? "hi" : "en";
  }

};


/* Direct access */
window.scienceBeyondEarth = scienceBeyondEarth;
