/* =========================================================
   SCIENCE CHALLENGES
   Data file for Science Beyond the Textbook

   Format:
   - One question at a time
   - 4 options
   - Answer revealed after selection
   - Explanation expands after answering
   - English + Hindi
========================================================= */

const scienceChallenges = [

  /* =======================================================
     QUESTION 1
  ======================================================= */

  {
    id: 1,

    question: {
      en: "Why do astronauts float inside the International Space Station even though Earth's gravity still reaches there?",
      hi: "अंतरराष्ट्रीय अंतरिक्ष स्टेशन के अंदर अंतरिक्ष यात्री क्यों तैरते हैं, जबकि वहाँ पृथ्वी का गुरुत्वाकर्षण अब भी पहुँचता है?"
    },

    options: {
      en: [
        "There is no gravity in space",
        "They are in continuous free-fall around Earth",
        "Their spacesuits cancel gravity",
        "The space station has no mass"
      ],

      hi: [
        "अंतरिक्ष में गुरुत्वाकर्षण होता ही नहीं",
        "वे पृथ्वी के चारों ओर लगातार मुक्त-पतन की अवस्था में होते हैं",
        "उनकी अंतरिक्ष पोशाक गुरुत्वाकर्षण को समाप्त कर देती है",
        "स्टेशन का कोई द्रव्यमान नहीं होता"
      ]
    },

    answer: 1,

    explanation: {
      en: "The station and everyone inside are constantly falling toward Earth, but their forward speed is so great that they keep missing the surface and instead loop around the planet. This continuous falling motion around Earth is what we call being in orbit. Gravity has not disappeared — it is simply balanced by their orbital motion, which creates the feeling of weightlessness.",

      hi: "स्टेशन और उसके अंदर मौजूद हर व्यक्ति लगातार पृथ्वी की ओर गिर रहा होता है, लेकिन उनकी आगे की गति इतनी अधिक होती है कि वे पृथ्वी की सतह से चूकते हुए उसके चारों ओर चक्कर लगाते रहते हैं। इसी निरंतर गिरने की प्रक्रिया को परिक्रमा कहा जाता है। गुरुत्वाकर्षण समाप्त नहीं होता, बल्कि उनकी परिक्रमा गति के कारण संतुलित हो जाता है, जिससे भारहीनता जैसा अनुभव होता है।"
    }
  },


  /* =======================================================
     QUESTION 2
  ======================================================= */

  {
    id: 2,

    question: {
      en: "Why can't a matchstick burn in a vacuum, such as in space?",
      hi: "निर्वात में, जैसे अंतरिक्ष में, माचिस की तीली क्यों नहीं जल सकती?"
    },

    options: {
      en: [
        "It is too cold",
        "There is no gravity to hold the flame",
        "There is no oxygen to support combustion",
        "Matches only work on Earth"
      ],

      hi: [
        "वहाँ बहुत अधिक ठंड होती है",
        "ज्वाला को थामने के लिए गुरुत्वाकर्षण नहीं होता",
        "दहन के लिए आवश्यक ऑक्सीजन नहीं होती",
        "माचिस केवल पृथ्वी पर ही काम करती है"
      ]
    },

    answer: 2,

    explanation: {
      en: "Burning is a chemical reaction that requires oxygen to continue. Since a vacuum contains no air and therefore no oxygen, there is nothing available to sustain a flame, so a matchstick cannot burn there.",

      hi: "जलना एक रासायनिक प्रक्रिया है जिसे जारी रहने के लिए ऑक्सीजन की आवश्यकता होती है। निर्वात में हवा नहीं होती और इसलिए ऑक्सीजन भी नहीं होती, जिसके कारण वहाँ ज्वाला को बनाए रखने के लिए कुछ भी उपलब्ध नहीं होता, इसलिए माचिस की तीली वहाँ नहीं जल सकती।"
    }
  },


  /* =======================================================
     QUESTION 3
  ======================================================= */

  {
    id: 3,

    question: {
      en: "Why do desert plants like the cactus have spines instead of broad leaves?",
      hi: "कैक्टस जैसे मरुस्थलीय पौधों में चौड़ी पत्तियों की जगह कांटे क्यों होते हैं?"
    },

    options: {
      en: [
        "To attack animals",
        "To reduce water loss through the leaf surface",
        "Because spines look better",
        "Because they cannot grow leaves at all"
      ],

      hi: [
        "जानवरों पर हमला करने के लिए",
        "पत्ती की सतह से होने वाली जल हानि को कम करने के लिए",
        "क्योंकि कांटे देखने में अच्छे लगते हैं",
        "क्योंकि वे पत्तियाँ उगा ही नहीं सकते"
      ]
    },

    answer: 1,

    explanation: {
      en: "Broad leaves lose water quickly through a process called transpiration. Spines have a much smaller surface area, so far less water escapes through them, which helps desert plants survive with very little water.",

      hi: "चौड़ी पत्तियों से वाष्पोत्सर्जन नामक प्रक्रिया के द्वारा पानी तेज़ी से उड़ता है। कांटों का सतही क्षेत्रफल बहुत कम होता है, इसलिए उनसे बहुत कम पानी बाहर निकलता है, जिससे मरुस्थलीय पौधों को बहुत कम पानी में भी जीवित रहने में मदद मिलती है।"
    }
  },


  /* =======================================================
     QUESTION 4
  ======================================================= */

  {
    id: 4,

    question: {
      en: "Why does ice float on water instead of sinking?",
      hi: "बर्फ पानी में डूबने के बजाय ऊपर क्यों तैरती है?"
    },

    options: {
      en: [
        "Ice is warmer than water",
        "Ice has less density than liquid water",
        "Water pushes ice upward",
        "Ice contains only air bubbles"
      ],

      hi: [
        "बर्फ पानी से अधिक गर्म होती है",
        "बर्फ का घनत्व तरल पानी से कम होता है",
        "पानी बर्फ को ऊपर धकेलता है",
        "बर्फ में केवल हवा के बुलबुले होते हैं"
      ]
    },

    answer: 1,

    explanation: {
      en: "When water freezes, its molecules arrange themselves into an open structure with more space between them, which makes ice less dense than liquid water. Since less dense substances float on denser ones, ice stays on top instead of sinking.",

      hi: "जब पानी जमता है, तो उसके अणु एक खुली संरचना में व्यवस्थित हो जाते हैं जिसमें उनके बीच अधिक जगह होती है, जिससे बर्फ का घनत्व तरल पानी की तुलना में कम हो जाता है। चूँकि कम घनत्व वाले पदार्थ अधिक घनत्व वाले पदार्थों पर तैरते हैं, इसलिए बर्फ डूबने के बजाय पानी के ऊपर तैरती रहती है।"
    }
  },


  /* =======================================================
     QUESTION 5
  ======================================================= */

  {
    id: 5,

    question: {
      en: "Why do our eyes water while cutting onions?",
      hi: "प्याज़ काटते समय हमारी आँखों से पानी क्यों आता है?"
    },

    options: {
      en: [
        "Onions release a gas that reacts with the eye's fluid to form a mild acid",
        "Onions are naturally very spicy",
        "Cutting releases heat that irritates the eyes",
        "It is simply a myth with no real cause"
      ],

      hi: [
        "प्याज़ एक गैस छोड़ता है जो आँख की नमी से मिलकर हल्का अम्ल बना देती है",
        "प्याज़ स्वाभाविक रूप से बहुत तीखा होता है",
        "काटने से निकलने वाली गर्मी आँखों को परेशान करती है",
        "यह केवल एक मिथक है जिसका कोई वास्तविक कारण नहीं है"
      ]
    },

    answer: 0,

    explanation: {
      en: "When an onion is cut, an enzyme inside it converts sulfur compounds into a gas that spreads into the air. When this gas reaches the eyes, it reacts with the fluid on their surface to form a mild irritant, and the eyes produce tears to wash this irritant away.",

      hi: "जब प्याज़ काटा जाता है, तो उसके अंदर मौजूद एक एंजाइम गंधक के यौगिकों को एक गैस में बदल देता है जो हवा में फैल जाती है। जब यह गैस आँखों तक पहुँचती है, तो यह आँख की सतह पर मौजूद नमी से मिलकर एक हल्का उत्तेजक पदार्थ बना देती है, और इसे बाहर निकालने के लिए आँखों से आँसू निकलने लगते हैं।"
    }
  },


  /* =======================================================
     QUESTION 6
  ======================================================= */

  {
    id: 6,

    question: {
      en: "Why does a compass needle always point north?",
      hi: "दिक्सूचक की सुई हमेशा उत्तर दिशा की ओर ही क्यों इशारा करती है?"
    },

    options: {
      en: [
        "It is attracted to the North Star",
        "Earth itself behaves like a giant magnet",
        "It is manufactured to point north",
        "Wind direction affects it"
      ],

      hi: [
        "यह ध्रुव तारे की ओर आकर्षित होती है",
        "पृथ्वी स्वयं एक विशाल चुंबक की तरह व्यवहार करती है",
        "इसे उत्तर की ओर इशारा करने के लिए बनाया जाता है",
        "हवा की दिशा इसे प्रभावित करती है"
      ]
    },

    answer: 1,

    explanation: {
      en: "The movement of molten iron inside Earth's core generates a magnetic field with a north and a south magnetic pole. A compass needle is itself a small magnet, and it simply aligns itself with this magnetic field, which is why it points north.",

      hi: "पृथ्वी के क्रोड में पिघले हुए लोहे की गति से एक चुंबकीय क्षेत्र उत्पन्न होता है, जिसके उत्तरी और दक्षिणी चुंबकीय ध्रुव होते हैं। दिक्सूचक की सुई स्वयं एक छोटा चुंबक होती है, और यह केवल इस चुंबकीय क्षेत्र के साथ स्वयं को संरेखित करती है, इसी कारण यह उत्तर दिशा की ओर इशारा करती है।"
    }
  },


  /* =======================================================
     QUESTION 7
  ======================================================= */

  {
    id: 7,

    question: {
      en: "Why does iron rust faster in humid places compared to dry places?",
      hi: "शुष्क स्थानों की तुलना में आर्द्र स्थानों पर लोहे में जंग तेज़ी से क्यों लगती है?"
    },

    options: {
      en: [
        "Humidity makes iron softer",
        "Water and oxygen together speed up the reaction that forms rust",
        "Humid air is heavier than dry air",
        "Rust only forms in humid areas and nowhere else"
      ],

      hi: [
        "आर्द्रता लोहे को नरम बना देती है",
        "पानी और ऑक्सीजन मिलकर जंग बनाने वाली प्रतिक्रिया को तेज़ कर देते हैं",
        "आर्द्र हवा शुष्क हवा से भारी होती है",
        "जंग केवल आर्द्र क्षेत्रों में ही लगती है, अन्यत्र नहीं"
      ]
    },

    answer: 1,

    explanation: {
      en: "Rusting is a chemical reaction that needs both oxygen and water to take place. Humid air contains more moisture, which speeds up this reaction, while in dry areas the lack of moisture slows rusting down considerably.",

      hi: "जंग लगना एक रासायनिक प्रक्रिया है जिसके होने के लिए ऑक्सीजन और पानी दोनों की आवश्यकता होती है। आर्द्र हवा में नमी अधिक होती है, जिससे यह प्रक्रिया तेज़ हो जाती है, जबकि शुष्क क्षेत्रों में नमी की कमी के कारण जंग लगने की प्रक्रिया काफी धीमी हो जाती है।"
    }
  },


  /* =======================================================
     QUESTION 8
  ======================================================= */

  {
    id: 8,

    question: {
      en: "Do chameleons change color mainly to camouflage with their surroundings?",
      hi: "क्या गिरगिट मुख्य रूप से अपने आस-पास के वातावरण में छिपने के लिए रंग बदलता है?"
    },

    options: {
      en: [
        "Yes, they change color only for camouflage",
        "No, it happens mainly due to mood, temperature, and communication",
        "They cannot actually change color at all",
        "They change color only to hide from predators"
      ],

      hi: [
        "हाँ, यह केवल छिपने के लिए ही रंग बदलता है",
        "नहीं, यह मुख्य रूप से मनोदशा, तापमान और संचार के कारण होता है",
        "यह वास्तव में रंग बदल ही नहीं सकता",
        "यह केवल शिकारियों से बचने के लिए रंग बदलता है"
      ]
    },

    answer: 1,

    explanation: {
      en: "This is a common misunderstanding. Chameleons change color through special skin cells that reflect light differently, and this change is driven mainly by their mood, body temperature, and the need to signal other chameleons, rather than simply blending into the background.",

      hi: "यह एक सामान्य गलतफहमी है। गिरगिट अपनी त्वचा की विशेष कोशिकाओं के माध्यम से प्रकाश को अलग-अलग तरीके से परावर्तित करके रंग बदलता है, और यह परिवर्तन मुख्य रूप से उसकी मनोदशा, शरीर के तापमान और अन्य गिरगिटों को संकेत देने की आवश्यकता के कारण होता है, न कि केवल पृष्ठभूमि में छिपने के लिए।"
    }
  },


  /* =======================================================
     QUESTION 9
  ======================================================= */

  {
    id: 9,

    question: {
      en: "Why does the sky appear blue during the day?",
      hi: "दिन के समय आसमान नीला क्यों दिखाई देता है?"
    },

    options: {
      en: [
        "The sky reflects the color of the ocean",
        "Blue light is scattered more by the atmosphere than other colors",
        "The sun emits only blue light",
        "Tiny blue particles float in the air"
      ],

      hi: [
        "आसमान समुद्र के रंग को परावर्तित करता है",
        "वायुमंडल द्वारा नीला प्रकाश अन्य रंगों की तुलना में अधिक प्रकीर्णित होता है",
        "सूर्य केवल नीला प्रकाश ही उत्सर्जित करता है",
        "हवा में छोटे-छोटे नीले कण तैरते रहते हैं"
      ]
    },

    answer: 1,

    explanation: {
      en: "Sunlight is made up of many colors, and as it passes through the atmosphere, blue light, which has a shorter wavelength, gets scattered in every direction far more than the other colors. This scattered blue light reaching our eyes from all around is what makes the sky look blue.",

      hi: "सूर्य के प्रकाश में कई रंग मिले होते हैं, और जब यह वायुमंडल से होकर गुज़रता है, तो कम तरंगदैर्घ्य वाला नीला प्रकाश अन्य रंगों की तुलना में हर दिशा में कहीं अधिक प्रकीर्णित होता है। यही प्रकीर्णित नीला प्रकाश जब चारों ओर से हमारी आँखों तक पहुँचता है, तो आसमान नीला दिखाई देता है।"
    }
  },


  /* =======================================================
     QUESTION 10
  ======================================================= */

  {
    id: 10,

    question: {
      en: "Why does soda fizz and form bubbles as soon as you open the bottle?",
      hi: "बोतल खोलते ही सोडा में बुलबुले क्यों बनने लगते हैं?"
    },

    options: {
      en: [
        "Opening the bottle heats up the liquid",
        "Releasing the pressure lets dissolved carbon dioxide escape as gas",
        "Shaking the bottle always causes fizzing",
        "The material of the bottle reacts with the drink"
      ],

      hi: [
        "बोतल खोलने से तरल पदार्थ गर्म हो जाता है",
        "दबाव कम होते ही घुली हुई कार्बन डाइऑक्साइड गैस के रूप में बाहर निकलने लगती है",
        "हिलाने से हमेशा बुलबुले बनते हैं",
        "बोतल का पदार्थ पेय के साथ प्रतिक्रिया करता है"
      ]
    },

    answer: 1,

    explanation: {
      en: "Carbon dioxide gas is dissolved into soda under high pressure. As soon as the bottle is opened, this pressure drops suddenly, and the gas can no longer stay dissolved, so it escapes from the liquid in the form of visible bubbles.",

      hi: "सोडा में कार्बन डाइऑक्साइड गैस उच्च दबाव के साथ घोली जाती है। बोतल खुलते ही यह दबाव अचानक कम हो जाता है, जिसके कारण गैस अब घुली हुई अवस्था में नहीं रह पाती और तरल पदार्थ से बाहर निकलकर दिखाई देने वाले बुलबुलों के रूप में निकलने लगती है।"
    }
  },


  /* =======================================================
     QUESTION 11
  ======================================================= */

  {
    id: 11,

    question: {
      en: "Why do we get goosebumps when we feel cold or scared?",
      hi: "ठंड लगने या डर लगने पर हमारे शरीर पर रोंगटे क्यों खड़े हो जाते हैं?"
    },

    options: {
      en: [
        "It is a leftover reflex from ancestors who had much more body hair",
        "It is always a sign of illness",
        "Skin cells suddenly multiply in that area",
        "It only happens during cold weather"
      ],

      hi: [
        "यह हमारे उन पूर्वजों से मिली एक बची हुई प्रतिक्रिया है जिनके शरीर पर बहुत अधिक बाल होते थे",
        "यह हमेशा किसी बीमारी का संकेत होता है",
        "उस क्षेत्र में त्वचा की कोशिकाएँ अचानक बढ़ जाती हैं",
        "यह केवल ठंड के मौसम में ही होता है"
      ]
    },

    answer: 0,

    explanation: {
      en: "Our early ancestors had much thicker body hair, and small muscles beneath the skin would raise that hair either to trap warmth in the cold or to make the body look bigger when frightened. Even though we have far less body hair today, this same muscle reflex still occurs.",

      hi: "हमारे आरंभिक पूर्वजों के शरीर पर बहुत घने बाल होते थे, और त्वचा के नीचे मौजूद छोटी मांसपेशियाँ उन बालों को खड़ा कर देती थीं, ताकि ठंड में गर्मी बनी रहे या डर लगने पर शरीर बड़ा दिखाई दे। आज हमारे शरीर पर बाल बहुत कम हैं, फिर भी मांसपेशियों की यही प्रतिक्रिया अब भी होती रहती है।"
    }
  },


  /* =======================================================
     QUESTION 12
  ======================================================= */

  {
    id: 12,

    question: {
      en: "Why does a straw appear bent when placed in a glass of water?",
      hi: "पानी से भरे गिलास में रखने पर स्ट्रॉ मुड़ी हुई क्यों दिखाई देती है?"
    },

    options: {
      en: [
        "The straw actually bends physically inside the water",
        "Light changes speed and bends as it passes from air into water",
        "Water magnifies objects placed inside it",
        "It is an optical illusion with no real scientific cause"
      ],

      hi: [
        "पानी के अंदर स्ट्रॉ वास्तव में भौतिक रूप से मुड़ जाती है",
        "प्रकाश हवा से पानी में जाते समय अपनी गति बदलता है और मुड़ जाता है",
        "पानी अंदर रखी वस्तुओं को बड़ा करके दिखाता है",
        "यह बिना किसी वास्तविक वैज्ञानिक कारण के एक दृष्टि भ्रम है"
      ]
    },

    answer: 1,

    explanation: {
      en: "Light travels at different speeds in different mediums, such as air and water. When light passes from one medium into another, its path bends at the boundary, and this bending is the reason the part of the straw under water appears shifted from the part above water.",

      hi: "प्रकाश अलग-अलग माध्यमों में, जैसे हवा और पानी में, अलग-अलग गति से यात्रा करता है। जब प्रकाश एक माध्यम से दूसरे माध्यम में प्रवेश करता है, तो सीमा पर उसका पथ मुड़ जाता है, और इसी कारण पानी के नीचे वाला स्ट्रॉ का हिस्सा ऊपर वाले हिस्से से हटा हुआ दिखाई देता है।"
    }
  },


  /* =======================================================
     QUESTION 13
  ======================================================= */

  {
    id: 13,

    question: {
      en: "Why does mixing baking soda and vinegar produce bubbles?",
      hi: "बेकिंग सोडा और सिरका मिलाने से बुलबुले क्यों बनते हैं?"
    },

    options: {
      en: [
        "They physically mix together without any reaction",
        "A chemical reaction between them produces carbon dioxide gas",
        "The vinegar evaporates instantly on contact",
        "The baking soda dissolves and traps pockets of air"
      ],

      hi: [
        "वे बिना किसी प्रतिक्रिया के केवल भौतिक रूप से मिल जाते हैं",
        "उनके बीच होने वाली एक रासायनिक प्रतिक्रिया से कार्बन डाइऑक्साइड गैस बनती है",
        "सिरका संपर्क में आते ही तुरंत वाष्पित हो जाता है",
        "बेकिंग सोडा घुलकर हवा की जेबें बना देता है"
      ]
    },

    answer: 1,

    explanation: {
      en: "Baking soda and vinegar undergo an acid-base reaction that produces sodium acetate, water, and carbon dioxide gas. It is this carbon dioxide gas escaping from the mixture that appears as the bubbles we see.",

      hi: "बेकिंग सोडा और सिरके के बीच एक अम्ल-क्षार प्रतिक्रिया होती है, जिससे सोडियम एसीटेट, पानी और कार्बन डाइऑक्साइड गैस बनती है। यही कार्बन डाइऑक्साइड गैस मिश्रण से बाहर निकलते हुए बुलबुलों के रूप में दिखाई देती है।"
    }
  },


  /* =======================================================
     QUESTION 14
  ======================================================= */

  {
    id: 14,

    question: {
      en: "Why does applying antiseptic on a cut cause a stinging sensation?",
      hi: "कटे हुए स्थान पर रोगाणुनाशक लगाने से चुभन क्यों महसूस होती है?"
    },

    options: {
      en: [
        "The antiseptic burns the skin permanently",
        "It irritates the nerve endings that are exposed at the site of the wound",
        "A stinging sensation is always a sign of infection",
        "It happens because the liquid is cold"
      ],

      hi: [
        "रोगाणुनाशक त्वचा को स्थायी रूप से जला देता है",
        "यह घाव वाली जगह पर खुली हुई तंत्रिका अंत को उत्तेजित करता है",
        "चुभन हमेशा संक्रमण का संकेत होती है",
        "यह तरल पदार्थ के ठंडा होने के कारण होता है"
      ]
    },

    answer: 1,

    explanation: {
      en: "When the skin is cut, the nerve endings beneath its surface become exposed. Many antiseptic liquids chemically irritate these exposed nerves directly, and it is this nerve response that causes the sting, rather than it being a sign of infection.",

      hi: "जब त्वचा कटती है, तो उसकी सतह के नीचे मौजूद तंत्रिका अंत खुल जाते हैं। अधिकांश रोगाणुनाशक तरल पदार्थ इन खुली हुई संवेदनशील तंत्रिकाओं को सीधे रासायनिक रूप से उत्तेजित करते हैं, और यही तंत्रिका प्रतिक्रिया चुभन का कारण बनती है, न कि यह संक्रमण का कोई संकेत होता है।"
    }
  },


  /* =======================================================
     QUESTION 15
  ======================================================= */

  {
    id: 15,

    question: {
      en: "Why does the Moon appear to change shape throughout the month, in what we call its phases?",
      hi: "पूरे महीने में चंद्रमा का आकार, जिसे हम कलाएँ कहते हैं, बदलता हुआ क्यों दिखाई देता है?"
    },

    options: {
      en: [
        "The Moon actually changes its physical shape",
        "We see different portions of its sunlit half as it moves around Earth",
        "Clouds on Earth cover different parts of the Moon",
        "The Moon moves closer to and farther from Earth every night"
      ],

      hi: [
        "चंद्रमा वास्तव में अपना भौतिक आकार बदलता है",
        "पृथ्वी के चारों ओर घूमते समय हमें उसके प्रकाशित आधे हिस्से का अलग-अलग भाग दिखाई देता है",
        "पृथ्वी के बादल चंद्रमा के अलग-अलग हिस्सों को ढक लेते हैं",
        "चंद्रमा हर रात पृथ्वी के करीब और दूर होता रहता है"
      ]
    },

    answer: 1,

    explanation: {
      en: "The Sun always lights up exactly half of the Moon at any given time. As the Moon moves around Earth, we see different amounts of that lit half from our position, and it is this changing view that creates the phases, from new moon to crescent to full moon and back again.",

      hi: "सूर्य हमेशा चंद्रमा के ठीक आधे हिस्से को प्रकाशित करता है। जैसे-जैसे चंद्रमा पृथ्वी के चारों ओर घूमता है, हमें हमारी स्थिति से उस प्रकाशित हिस्से का अलग-अलग भाग दिखाई देता है, और यही बदलता हुआ दृश्य कलाओं को जन्म देता है — अमावस्या से लेकर अर्धचंद्र और पूर्णिमा तक, और फिर वापस।"
    }
  }

];


/* =========================================================
   PUBLIC API
========================================================= */

window.ScienceChallenges = {

  /**
   * Return all questions
   */
  all() {
    return scienceChallenges;
  },

  /**
   * Return one question by ID
   */
  get(id) {
    return scienceChallenges.find(question => question.id === id);
  },

  /**
   * Return total number of questions
   */
  count() {
    return scienceChallenges.length;
  }

};


/* =========================================================
   BACKWARD / DIRECT ACCESS
========================================================= */

window.scienceChallenges = scienceChallenges;
