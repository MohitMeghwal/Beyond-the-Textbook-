/* =========================================================
   SCIENCE BEYOND THE TEXTBOOK
   FROM CLASSROOM TO REAL LIFE
   Data File

   File:
   data/science-classroom-to-real-life.js

   Purpose:
   - 25 rotating real-world science topics
   - One topic visible at a time
   - Next button support
   - English / Hindi content
   - No external images required
   - Emoji-based visual replacement for images
========================================================= */

const classroomToRealLife = [

  /* =======================================================
     1. NEWTON'S LAWS OF MOTION
  ======================================================= */

  {
    id: "newtons-laws-of-motion",

    icon: "⚛️",

    title: {
      en: "Newton's Laws of Motion",
      hi: "न्यूटन के गति के नियम"
    },

    example: {
      en: "Newton's Laws of Motion",
      hi: "न्यूटन के गति के नियम"
    },

    concept: {
      en: "Every object resists a change in motion, and every force has an equal force acting back against it.",
      hi: "हर वस्तु अपनी गति में बदलाव का विरोध करती है, और हर बल के विरुद्ध एक बराबर बल कार्य करता है।"
    },

    realWorldUse: {
      en: "This is why seatbelts and airbags protect passengers during sudden stops, and why rockets are able to push themselves forward into space.",
      hi: "यही कारण है कि सीटबेल्ट और एयरबैग अचानक रुकने पर यात्रियों की रक्षा करते हैं, और रॉकेट खुद को आगे बढ़ाकर अंतरिक्ष में पहुँचा पाते हैं।"
    },

    visual: {
      type: "emoji",
      value: "🚀",
      label: "Motion & Force"
    }
  },


  /* =======================================================
     2. GRAVITATION
  ======================================================= */

  {
    id: "gravitation",

    icon: "🌍",

    title: {
      en: "Gravitation",
      hi: "गुरुत्वाकर्षण"
    },

    example: {
      en: "Gravitation",
      hi: "गुरुत्वाकर्षण"
    },

    concept: {
      en: "Every object in the universe pulls every other object toward itself, and this same pull keeps planets, moons, and satellites in their orbits.",
      hi: "ब्रह्मांड की हर वस्तु हर दूसरी वस्तु को अपनी ओर खींचती है, और यही खिंचाव ग्रहों, चंद्रमाओं, और उपग्रहों को उनकी कक्षाओं में बनाए रखता है।"
    },

    realWorldUse: {
      en: "This is why satellites stay in orbit around Earth, sending back weather data, GPS signals, and communication without ever falling down.",
      hi: "यही कारण है कि उपग्रह पृथ्वी के चारों ओर अपनी कक्षा में बने रहते हैं, और बिना गिरे मौसम डेटा, जीपीएस संकेत, और संचार भेजते रहते हैं।"
    },

    visual: {
      type: "emoji",
      value: "🛰️",
      label: "Satellite Orbit"
    }
  },


  /* =======================================================
     3. WORK AND ENERGY
  ======================================================= */

  {
    id: "work-and-energy",

    icon: "⚡",

    title: {
      en: "Work and Energy",
      hi: "कार्य और ऊर्जा"
    },

    example: {
      en: "Work and Energy",
      hi: "कार्य और ऊर्जा"
    },

    concept: {
      en: "Energy cannot be created or destroyed, only changed from one form into another, like motion turning into heat or height turning into speed.",
      hi: "ऊर्जा को न तो बनाया जा सकता है और न ही नष्ट किया जा सकता है, इसे केवल एक रूप से दूसरे रूप में बदला जा सकता है, जैसे गति का गर्मी में बदलना या ऊँचाई का गति में बदलना।"
    },

    realWorldUse: {
      en: "This is why hydroelectric dams can turn falling water into electricity, and why a moving car's brakes get warm when they stop it.",
      hi: "यही कारण है कि जल-विद्युत बांध गिरते पानी को बिजली में बदल सकते हैं, और एक चलती कार के ब्रेक उसे रोकते समय गर्म हो जाते हैं।"
    },

    visual: {
      type: "emoji",
      value: "⚡",
      label: "Energy"
    }
  },


  /* =======================================================
     4. SOUND
  ======================================================= */

  {
    id: "sound",

    icon: "🔊",

    title: {
      en: "Sound",
      hi: "ध्वनि"
    },

    example: {
      en: "Sound",
      hi: "ध्वनि"
    },

    concept: {
      en: "Sound travels as vibrations moving through air, water, or solids, carrying energy from one place to another without carrying matter itself.",
      hi: "ध्वनि हवा, पानी, या ठोस पदार्थों से होकर कंपन के रूप में यात्रा करती है, और बिना पदार्थ को साथ ले गए एक जगह से दूसरी जगह ऊर्जा पहुँचाती है।"
    },

    realWorldUse: {
      en: "This is why stethoscopes let doctors hear a heartbeat, and why speakers can fill a room with music from a single vibrating surface.",
      hi: "यही कारण है कि स्टेथोस्कोप डॉक्टरों को दिल की धड़कन सुनने देते हैं, और स्पीकर एक कंपन करती सतह से पूरे कमरे को संगीत से भर देते हैं।"
    },

    visual: {
      type: "emoji",
      value: "🔊",
      label: "Sound Waves"
    }
  },


  /* =======================================================
     5. LIGHT — REFLECTION AND REFRACTION
  ======================================================= */

  {
    id: "light-reflection-refraction",

    icon: "🔦",

    title: {
      en: "Light — Reflection and Refraction",
      hi: "प्रकाश — परावर्तन और अपवर्तन"
    },

    example: {
      en: "Light — Reflection and Refraction",
      hi: "प्रकाश — परावर्तन और अपवर्तन"
    },

    concept: {
      en: "Light bounces off surfaces in predictable ways and bends when it passes from one transparent material into another.",
      hi: "प्रकाश सतहों से एक निश्चित तरीके से परावर्तित होता है, और जब यह एक पारदर्शी पदार्थ से दूसरे में जाता है, तो मुड़ जाता है।"
    },

    realWorldUse: {
      en: "This is why mirrors show a clear reflection, why glasses correct blurry vision, and why telescopes can bring distant stars into focus.",
      hi: "यही कारण है कि दर्पण स्पष्ट प्रतिबिंब दिखाते हैं, चश्मे धुंधली नज़र को ठीक करते हैं, और टेलीस्कोप दूर के तारों को स्पष्ट दिखा पाते हैं।"
    },

    visual: {
      type: "emoji",
      value: "🔦",
      label: "Light & Optics"
    }
  },


  /* =======================================================
     6. ELECTRICITY
  ======================================================= */

  {
    id: "electricity",

    icon: "💡",

    title: {
      en: "Electricity",
      hi: "विद्युत"
    },

    example: {
      en: "Electricity",
      hi: "विद्युत"
    },

    concept: {
      en: "Electric current is simply the flow of charged particles through a conductor, and this flow can be controlled using voltage and resistance.",
      hi: "विद्युत धारा असल में किसी चालक में आवेशित कणों का प्रवाह है, और इस प्रवाह को वोल्टेज और प्रतिरोध की मदद से नियंत्रित किया जा सकता है।"
    },

    realWorldUse: {
      en: "This is why switching on a light bulb, charging a phone, and running a fan all depend on the same basic flow of current through wires.",
      hi: "यही कारण है कि बल्ब जलाना, फोन चार्ज करना, और पंखा चलाना, ये सभी तारों में बहती उसी बुनियादी धारा पर निर्भर करते हैं।"
    },

    visual: {
      type: "emoji",
      value: "💡",
      label: "Electric Current"
    }
  },


  /* =======================================================
     7. MAGNETIC EFFECTS OF ELECTRIC CURRENT
  ======================================================= */

  {
    id: "magnetic-effects-electric-current",

    icon: "🧲",

    title: {
      en: "Magnetic Effects of Electric Current",
      hi: "विद्युत धारा का चुंबकीय प्रभाव"
    },

    example: {
      en: "Magnetic Effects of Electric Current",
      hi: "विद्युत धारा का चुंबकीय प्रभाव"
    },

    concept: {
      en: "A wire carrying electric current creates a magnetic field around itself, and this effect can be used to produce motion or generate electricity.",
      hi: "विद्युत धारा ले जाने वाले तार के चारों ओर एक चुंबकीय क्षेत्र उत्पन्न होता है, और इस प्रभाव का उपयोग गति पैदा करने या बिजली बनाने के लिए किया जा सकता है।"
    },

    realWorldUse: {
      en: "This is the principle behind electric motors that spin fans and vehicles, and generators that produce the electricity we use every day.",
      hi: "यही सिद्धांत पंखों और वाहनों को घुमाने वाली इलेक्ट्रिक मोटरों के पीछे है, और उन जनरेटरों के पीछे भी जो हमारे रोज़ उपयोग होने वाली बिजली बनाते हैं।"
    },

    visual: {
      type: "emoji",
      value: "🧲",
      label: "Magnetic Field"
    }
  },


  /* =======================================================
     8. CHEMICAL REACTIONS AND EQUATIONS
  ======================================================= */

  {
    id: "chemical-reactions-equations",

    icon: "🧪",

    title: {
      en: "Chemical Reactions and Equations",
      hi: "रासायनिक अभिक्रियाएँ और समीकरण"
    },

    example: {
      en: "Chemical Reactions and Equations",
      hi: "रासायनिक अभिक्रियाएँ और समीकरण"
    },

    concept: {
      en: "When substances react, their atoms rearrange to form entirely new substances with different properties than what they started with.",
      hi: "जब पदार्थ प्रतिक्रिया करते हैं, तो उनके परमाणु फिर से व्यवस्थित होकर पूरी तरह नए पदार्थ बनाते हैं, जिनके गुण शुरुआती पदार्थों से अलग होते हैं।"
    },

    realWorldUse: {
      en: "This is why rusting changes shiny iron into a weak, flaky material, and why baking ingredients can turn into a completely different food.",
      hi: "यही कारण है कि जंग चमकदार लोहे को कमज़ोर, परतदार पदार्थ में बदल देती है, और बेकिंग की सामग्री पूरी तरह अलग खाद्य पदार्थ में बदल जाती है।"
    },

    visual: {
      type: "emoji",
      value: "🧪",
      label: "Chemical Reaction"
    }
  },


  /* =======================================================
     9. ACIDS, BASES AND SALTS
  ======================================================= */

  {
    id: "acids-bases-salts",

    icon: "⚗️",

    title: {
      en: "Acids, Bases and Salts",
      hi: "अम्ल, क्षार, और लवण"
    },

    example: {
      en: "Acids, Bases and Salts",
      hi: "अम्ल, क्षार, और लवण"
    },

    concept: {
      en: "Acids, bases, and salts each behave in predictable chemical ways, and mixing an acid with a base in the right amount neutralizes both.",
      hi: "अम्ल, क्षार, और लवण प्रत्येक एक निश्चित रासायनिक तरीके से व्यवहार करते हैं, और सही मात्रा में अम्ल को क्षार के साथ मिलाने पर दोनों उदासीन हो जाते हैं।"
    },

    realWorldUse: {
      en: "This is why antacid tablets relieve an acidic stomach, and why farmers add specific substances to soil to balance its acidity.",
      hi: "यही कारण है कि एंटासिड गोलियाँ पेट की अम्लता को कम करती हैं, और किसान मिट्टी की अम्लता संतुलित करने के लिए विशेष पदार्थ मिलाते हैं।"
    },

    visual: {
      type: "emoji",
      value: "⚗️",
      label: "Acid & Base"
    }
  },


  /* =======================================================
     10. METALS AND NON-METALS
  ======================================================= */

  {
    id: "metals-nonmetals",

    icon: "🔩",

    title: {
      en: "Metals and Non-metals",
      hi: "धातु और अधातु"
    },

    example: {
      en: "Metals and Non-metals",
      hi: "धातु और अधातु"
    },

    concept: {
      en: "Metals and non-metals have very different physical and chemical properties, which is why they are used for very different purposes.",
      hi: "धातुओं और अधातुओं के भौतिक और रासायनिक गुण बहुत अलग होते हैं, इसी कारण इनका उपयोग बहुत अलग-अलग कामों के लिए किया जाता है।"
    },

    realWorldUse: {
      en: "This is why wires are made of metal to conduct electricity, while rubber, a non-metal, is used to insulate and protect those same wires.",
      hi: "यही कारण है कि तार बिजली प्रवाहित करने के लिए धातु से बनाए जाते हैं, जबकि रबर, एक अधातु, उन्हीं तारों को ढकने और सुरक्षित रखने के लिए उपयोग होता है।"
    },

    visual: {
      type: "emoji",
      value: "🔩",
      label: "Materials"
    }
  },


  /* =======================================================
     11. CARBON AND ITS COMPOUNDS
  ======================================================= */

  {
    id: "carbon-compounds",

    icon: "🧬",

    title: {
      en: "Carbon and its Compounds",
      hi: "कार्बन और उसके यौगिक"
    },

    example: {
      en: "Carbon and its Compounds",
      hi: "कार्बन और उसके यौगिक"
    },

    concept: {
      en: "Carbon atoms can link together in countless different arrangements, forming the basis of millions of different compounds.",
      hi: "कार्बन के परमाणु अनगिनत अलग-अलग तरीकों से आपस में जुड़ सकते हैं, जो लाखों अलग-अलग यौगिकों का आधार बनाते हैं।"
    },

    realWorldUse: {
      en: "This is why carbon compounds make up everything from the fuel in a car's tank to the plastic in everyday household items.",
      hi: "यही कारण है कि कार्बन यौगिक कार के टैंक में मौजूद ईंधन से लेकर रोज़मर्रा की घरेलू वस्तुओं में मौजूद प्लास्टिक तक, हर चीज़ बनाते हैं।"
    },

    visual: {
      type: "emoji",
      value: "🧬",
      label: "Carbon Structures"
    }
  },


  /* =======================================================
     12. PERIODIC CLASSIFICATION OF ELEMENTS
  ======================================================= */

  {
    id: "periodic-classification",

    icon: "🧩",

    title: {
      en: "Periodic Classification of Elements",
      hi: "तत्वों का आवर्त वर्गीकरण"
    },

    example: {
      en: "Periodic Classification of Elements",
      hi: "तत्वों का आवर्त वर्गीकरण"
    },

    concept: {
      en: "Elements arranged by their properties follow a repeating pattern, which makes it possible to predict how an element will behave.",
      hi: "गुणों के आधार पर व्यवस्थित किए गए तत्व एक दोहराने वाला पैटर्न दिखाते हैं, जिससे यह अनुमान लगाना संभव होता है कि कोई तत्व कैसा व्यवहार करेगा।"
    },

    realWorldUse: {
      en: "This is why chemists can predict the properties of newly discovered elements before ever testing them in a lab.",
      hi: "यही कारण है कि रसायनज्ञ नए खोजे गए तत्वों के गुणों का अनुमान, प्रयोगशाला में परखने से पहले ही लगा सकते हैं।"
    },

    visual: {
      type: "emoji",
      value: "🧩",
      label: "Elements"
    }
  },


  /* =======================================================
     13. LIFE PROCESSES
  ======================================================= */

  {
    id: "life-processes",

    icon: "🫀",

    title: {
      en: "Life Processes",
      hi: "जैविक प्रक्रियाएँ"
    },

    example: {
      en: "Life Processes",
      hi: "जैविक प्रक्रियाएँ"
    },

    concept: {
      en: "Every living thing must carry out basic processes like breathing, digestion, and transport of nutrients to stay alive.",
      hi: "हर सजीव को जीवित रहने के लिए साँस लेना, पाचन, और पोषक तत्वों का परिवहन जैसी बुनियादी प्रक्रियाएँ करनी पड़ती हैं।"
    },

    realWorldUse: {
      en: "This is why doctors check breathing, pulse, and digestion first when examining a patient, since these processes reveal how well the body is functioning.",
      hi: "यही कारण है कि डॉक्टर किसी मरीज़ की जाँच करते समय सबसे पहले साँस, नब्ज़, और पाचन देखते हैं, क्योंकि ये प्रक्रियाएँ बताती हैं कि शरीर कितना ठीक काम कर रहा है।"
    },

    visual: {
      type: "emoji",
      value: "🫀",
      label: "Life Processes"
    }
  },


  /* =======================================================
     14. CONTROL AND COORDINATION
  ======================================================= */

  {
    id: "control-coordination",

    icon: "🧠",

    title: {
      en: "Control and Coordination",
      hi: "नियंत्रण और समन्वय"
    },

    example: {
      en: "Control and Coordination",
      hi: "नियंत्रण और समन्वय"
    },

    concept: {
      en: "The nervous system and hormones work together to let the body sense its surroundings and react quickly and appropriately.",
      hi: "तंत्रिका तंत्र और हार्मोन मिलकर शरीर को अपने आस-पास के वातावरण को महसूस करने और तुरंत उचित प्रतिक्रिया देने देते हैं।"
    },

    realWorldUse: {
      en: "This is why you instantly pull your hand back from something hot, and why doctors treat hormone imbalances to correct problems like abnormal growth.",
      hi: "यही कारण है कि तुम किसी गर्म चीज़ से तुरंत अपना हाथ खींच लेते हो, और डॉक्टर असामान्य वृद्धि जैसी समस्याओं को ठीक करने के लिए हार्मोन के असंतुलन का इलाज करते हैं।"
    },

    visual: {
      type: "emoji",
      value: "🧠",
      label: "Nervous System"
    }
  },


  /* =======================================================
     15. HEREDITY AND EVOLUTION
  ======================================================= */

  {
    id: "heredity-evolution",

    icon: "🧬",

    title: {
      en: "Heredity and Evolution",
      hi: "आनुवंशिकता और विकास"
    },

    example: {
      en: "Heredity and Evolution",
      hi: "आनुवंशिकता और विकास"
    },

    concept: {
      en: "Traits pass from parents to offspring through genes, and small changes in these traits over many generations can lead species to evolve.",
      hi: "गुण माता-पिता से संतान तक जीन के माध्यम से आगे बढ़ते हैं, और कई पीढ़ियों में इन गुणों में हुए छोटे बदलाव प्रजातियों के विकास की ओर ले जा सकते हैं।"
    },

    realWorldUse: {
      en: "This is why children resemble their parents, and why scientists can trace how today's species descended from ancient ancestors.",
      hi: "यही कारण है कि बच्चे अपने माता-पिता से मिलते-जुलते दिखते हैं, और वैज्ञानिक यह पता लगा पाते हैं कि आज की प्रजातियाँ प्राचीन पूर्वजों से कैसे विकसित हुईं।"
    },

    visual: {
      type: "emoji",
      value: "🧬",
      label: "Genes & Evolution"
    }
  },


  /* =======================================================
     16. IMPROVEMENT IN FOOD RESOURCES
  ======================================================= */

  {
    id: "improvement-food-resources",

    icon: "🌾",

    title: {
      en: "Improvement in Food Resources",
      hi: "खाद्य संसाधनों में सुधार"
    },

    example: {
      en: "Improvement in Food Resources",
      hi: "खाद्य संसाधनों में सुधार"
    },

    concept: {
      en: "Selecting and breeding plants and animals with better traits can increase how much food they produce and how well they resist disease.",
      hi: "बेहतर गुणों वाले पौधों और जानवरों को चुनकर और प्रजनन कराकर, उनके द्वारा दिए जाने वाले भोजन की मात्रा और बीमारियों से बचने की क्षमता बढ़ाई जा सकती है।"
    },

    realWorldUse: {
      en: "This is why farmers today grow crop varieties that give higher yields and raise livestock breeds that produce more milk or meat than older varieties.",
      hi: "यही कारण है कि आज के किसान ऐसी फसल किस्में उगाते हैं जो अधिक उपज देती हैं, और ऐसी पशु नस्लें पालते हैं जो पुरानी किस्मों से अधिक दूध या मांस देती हैं।"
    },

    visual: {
      type: "emoji",
      value: "🌾",
      label: "Food & Farming"
    }
  },


  /* =======================================================
     17. OUR ENVIRONMENT
  ======================================================= */

  {
    id: "our-environment",

    icon: "🌳",

    title: {
      en: "Our Environment",
      hi: "हमारा पर्यावरण"
    },

    example: {
      en: "Our Environment",
      hi: "हमारा पर्यावरण"
    },

    concept: {
      en: "Living things and their surroundings are deeply connected in a web where every part affects the others.",
      hi: "सजीव और उनका आस-पास का वातावरण एक ऐसे जाल में गहराई से जुड़े होते हैं जिसमें हर हिस्सा दूसरे हिस्से को प्रभावित करता है।"
    },

    realWorldUse: {
      en: "This is why cutting down a forest doesn't just remove trees, it also affects rainfall, soil, and the animals that depended on that habitat.",
      hi: "यही कारण है कि जंगल काटने से सिर्फ पेड़ ही नहीं हटते, बल्कि इससे बारिश, मिट्टी, और उस आवास पर निर्भर रहने वाले जानवर भी प्रभावित होते हैं।"
    },

    visual: {
      type: "emoji",
      value: "🌳",
      label: "Ecosystem"
    }
  },


  /* =======================================================
     18. THERMODYNAMICS
  ======================================================= */

  {
    id: "thermodynamics",

    icon: "🌡️",

    title: {
      en: "Thermodynamics",
      hi: "ऊष्मागतिकी"
    },

    example: {
      en: "Thermodynamics",
      hi: "ऊष्मागतिकी"
    },

    concept: {
      en: "Heat always flows from a hotter object to a colder one until both reach the same temperature, and this flow can be used to do useful work.",
      hi: "गर्मी हमेशा गर्म वस्तु से ठंडी वस्तु की ओर तब तक बहती है जब तक दोनों का तापमान बराबर न हो जाए, और इस प्रवाह का उपयोग उपयोगी कार्य करने के लिए किया जा सकता है।"
    },

    realWorldUse: {
      en: "This is the basic principle behind how refrigerators keep food cold and how engines convert burning fuel into motion.",
      hi: "यही बुनियादी सिद्धांत है जिसके कारण रेफ्रिजरेटर भोजन को ठंडा रखते हैं, और इंजन जलते हुए ईंधन को गति में बदल पाते हैं।"
    },

    visual: {
      type: "emoji",
      value: "🌡️",
      label: "Heat & Temperature"
    }
  },


  /* =======================================================
     19. ELECTROMAGNETIC INDUCTION
  ======================================================= */

  {
    id: "electromagnetic-induction",

    icon: "⚡",

    title: {
      en: "Electromagnetic Induction",
      hi: "विद्युत चुंबकीय प्रेरण"
    },

    example: {
      en: "Electromagnetic Induction",
      hi: "विद्युत चुंबकीय प्रेरण"
    },

    concept: {
      en: "Moving a magnet near a wire, or a wire near a magnet, can generate an electric current without any direct contact between them.",
      hi: "किसी तार के पास चुंबक को हिलाने से, या चुंबक के पास तार को हिलाने से, बिना किसी सीधे संपर्क के विद्युत धारा उत्पन्न की जा सकती है।"
    },

    realWorldUse: {
      en: "This is the principle that lets power plants generate the electricity that reaches almost every home and building.",
      hi: "यही सिद्धांत है जिसके कारण पावर प्लांट वह बिजली बना पाते हैं जो लगभग हर घर और इमारत तक पहुँचती है।"
    },

    visual: {
      type: "emoji",
      value: "⚡",
      label: "Induction"
    }
  },


  /* =======================================================
     20. SEMICONDUCTOR ELECTRONICS
  ======================================================= */

  {
    id: "semiconductor-electronics",

    icon: "💻",

    title: {
      en: "Semiconductor Electronics",
      hi: "अर्धचालक इलेक्ट्रॉनिक्स"
    },

    example: {
      en: "Semiconductor Electronics",
      hi: "अर्धचालक इलेक्ट्रॉनिक्स"
    },

    concept: {
      en: "Certain materials can be precisely controlled to either conduct or block electric current, forming the basis of modern electronic devices.",
      hi: "कुछ विशेष पदार्थों को इतनी सटीकता से नियंत्रित किया जा सकता है कि वे विद्युत धारा को या तो प्रवाहित होने दें या रोक दें, जो आधुनिक इलेक्ट्रॉनिक उपकरणों का आधार बनता है।"
    },

    realWorldUse: {
      en: "This is why tiny chips inside phones and computers can perform billions of calculations every second.",
      hi: "यही कारण है कि फोन और कंप्यूटर के अंदर मौजूद छोटी चिप हर सेकंड अरबों गणनाएँ कर पाती है।"
    },

    visual: {
      type: "emoji",
      value: "💻",
      label: "Microchip"
    }
  },


  /* =======================================================
     21. COMMUNICATION SYSTEMS
  ======================================================= */

  {
    id: "communication-systems",

    icon: "📡",

    title: {
      en: "Communication Systems",
      hi: "संचार प्रणालियाँ"
    },

    example: {
      en: "Communication Systems",
      hi: "संचार प्रणालियाँ"
    },

    concept: {
      en: "Information can be converted into signals, such as light or radio waves, and transmitted across huge distances almost instantly.",
      hi: "जानकारी को प्रकाश या रेडियो तरंगों जैसे संकेतों में बदला जा सकता है, और बहुत बड़ी दूरियों तक लगभग तुरंत पहुँचाया जा सकता है।"
    },

    realWorldUse: {
      en: "This is why a video call can connect two people on opposite sides of the world with barely any delay.",
      hi: "यही कारण है कि एक वीडियो कॉल दुनिया के दो विपरीत छोर पर मौजूद लोगों को बिना किसी देरी के जोड़ पाती है।"
    },

    visual: {
      type: "emoji",
      value: "📡",
      label: "Communication Network"
    }
  },


  /* =======================================================
     22. POLYMERS
  ======================================================= */

  {
    id: "polymers",

    icon: "🧴",

    title: {
      en: "Polymers",
      hi: "बहुलक (पॉलिमर)"
    },

    example: {
      en: "Polymers",
      hi: "बहुलक (पॉलिमर)"
    },

    concept: {
      en: "Long chains of repeating smaller molecules can be joined together to create materials with very specific properties, like flexibility or strength.",
      hi: "छोटे-छोटे बार-बार दोहराए जाने वाले अणुओं की लंबी शृंखलाओं को आपस में जोड़कर, लचीलेपन या मज़बूती जैसे विशेष गुणों वाले पदार्थ बनाए जा सकते हैं।"
    },

    realWorldUse: {
      en: "This is why plastic bottles, rubber tyres, and synthetic fabrics all exist, each built from a different polymer chosen for its specific properties.",
      hi: "यही कारण है कि प्लास्टिक की बोतलें, रबर के टायर, और सिंथेटिक कपड़े मौजूद हैं, हर एक अलग बहुलक से बना है जिसे उसके विशेष गुणों के लिए चुना गया है।"
    },

    visual: {
      type: "emoji",
      value: "🧴",
      label: "Polymer Materials"
    }
  },


  /* =======================================================
     23. ELECTROCHEMISTRY
  ======================================================= */

  {
    id: "electrochemistry",

    icon: "🔋",

    title: {
      en: "Electrochemistry",
      hi: "विद्युत रसायन"
    },

    example: {
      en: "Electrochemistry",
      hi: "विद्युत रसायन"
    },

    concept: {
      en: "Chemical reactions can produce electric current, and electric current can also be used to drive chemical reactions in the opposite direction.",
      hi: "रासायनिक प्रतिक्रियाएँ विद्युत धारा उत्पन्न कर सकती हैं, और विद्युत धारा का उपयोग विपरीत दिशा में रासायनिक प्रतिक्रियाएँ कराने के लिए भी किया जा सकता है।"
    },

    realWorldUse: {
      en: "This is why batteries can store and release electrical energy through chemical reactions, powering everything from phones to electric vehicles.",
      hi: "यही कारण है कि बैटरियाँ रासायनिक प्रतिक्रियाओं के ज़रिए विद्युत ऊर्जा संग्रहित और मुक्त कर पाती हैं, जो फोन से लेकर इलेक्ट्रिक वाहनों तक सबको शक्ति देती हैं।"
    },

    visual: {
      type: "emoji",
      value: "🔋",
      label: "Battery Chemistry"
    }
  },


  /* =======================================================
     24. BIOTECHNOLOGY — PRINCIPLES AND PROCESSES
  ======================================================= */

  {
    id: "biotechnology",

    icon: "🧫",

    title: {
      en: "Biotechnology — Principles and Processes",
      hi: "जैव प्रौद्योगिकी — सिद्धांत और प्रक्रियाएँ"
    },

    example: {
      en: "Biotechnology — Principles and Processes",
      hi: "जैव प्रौद्योगिकी — सिद्धांत और प्रक्रियाएँ"
    },

    concept: {
      en: "Living organisms or their components can be used and modified in controlled ways to create useful products.",
      hi: "सजीवों या उनके हिस्सों का उपयोग और नियंत्रित तरीके से संशोधन करके, उपयोगी उत्पाद बनाए जा सकते हैं।"
    },

    realWorldUse: {
      en: "This is why bacteria can be engineered to produce insulin, and why crops can be improved to resist pests and disease.",
      hi: "यही कारण है कि बैक्टीरिया को इंसुलिन बनाने के लिए तैयार किया जा सकता है, और फसलों को कीटों व बीमारियों से बचने के लिए सुधारा जा सकता है।"
    },

    visual: {
      type: "emoji",
      value: "🧫",
      label: "Biotechnology"
    }
  },


  /* =======================================================
     25. HUMAN HEALTH AND DISEASE
  ======================================================= */

  {
    id: "human-health-disease",

    icon: "🩺",

    title: {
      en: "Human Health and Disease",
      hi: "मानव स्वास्थ्य और बीमारी"
    },

    example: {
      en: "Human Health and Disease",
      hi: "मानव स्वास्थ्य और बीमारी"
    },

    concept: {
      en: "Diseases can spread through germs, poor nutrition, or the body's own systems malfunctioning, and understanding the cause helps determine the right treatment.",
      hi: "बीमारियाँ कीटाणुओं, खराब पोषण, या शरीर की अपनी प्रणालियों में गड़बड़ी के कारण फैल सकती हैं, और कारण समझने से सही इलाज तय करने में मदद मिलती है।"
    },

    realWorldUse: {
      en: "This is why doctors ask detailed questions and run tests before treating a patient, since different causes of illness need completely different solutions.",
      hi: "यही कारण है कि डॉक्टर किसी मरीज़ का इलाज करने से पहले विस्तृत सवाल पूछते हैं और जाँच करते हैं, क्योंकि बीमारी के अलग-अलग कारणों के लिए बिल्कुल अलग समाधान चाहिए होते हैं।"
    },

    visual: {
      type: "emoji",
      value: "🩺",
      label: "Human Health"
    }
  }

];


/* =========================================================
   PUBLIC API
========================================================= */

let classroomToRealLifeIndex = 0;


/*
   Get all topics
*/
function getClassroomToRealLifeTopics() {
  return classroomToRealLife;
}


/*
   Get one topic by ID
*/
function getClassroomToRealLifeTopic(id) {
  return classroomToRealLife.find(topic => topic.id === id);
}


/*
   Get current topic
*/
function getCurrentClassroomToRealLifeTopic() {
  return classroomToRealLife[classroomToRealLifeIndex];
}


/*
   Move to next topic
   After the last topic, start again from first.
*/
function nextClassroomToRealLifeTopic() {

  classroomToRealLifeIndex++;

  if (classroomToRealLifeIndex >= classroomToRealLife.length) {
    classroomToRealLifeIndex = 0;
  }

  return classroomToRealLife[classroomToRealLifeIndex];
}


/*
   Move to previous topic
*/
function previousClassroomToRealLifeTopic() {

  classroomToRealLifeIndex--;

  if (classroomToRealLifeIndex < 0) {
    classroomToRealLifeIndex = classroomToRealLife.length - 1;
  }

  return classroomToRealLife[classroomToRealLifeIndex];
}


/*
   Set a specific topic
*/
function setClassroomToRealLifeTopic(index) {

  if (
    typeof index !== "number" ||
    index < 0 ||
    index >= classroomToRealLife.length
  ) {
    return classroomToRealLife[classroomToRealLifeIndex];
  }

  classroomToRealLifeIndex = index;

  return classroomToRealLife[classroomToRealLifeIndex];
}


/*
   Get current index
*/
function getClassroomToRealLifeIndex() {
  return classroomToRealLifeIndex;
}


/*
   Total number of topics
*/
function getClassroomToRealLifeCount() {
  return classroomToRealLife.length;
}


/*
   Language helper
*/
function getClassroomToRealLifeText(value, language = "en") {

  if (!value) return "";

  if (language === "hi") {
    return value.hi ?? value.en ?? "";
  }

  return value.en ?? value.hi ?? "";
}


/* =========================================================
   GLOBAL OBJECT
========================================================= */

window.ClassroomToRealLife = {

  all() {
    return classroomToRealLife;
  },

  get(id) {
    return getClassroomToRealLifeTopic(id);
  },

  current() {
    return getCurrentClassroomToRealLifeTopic();
  },

  next() {
    return nextClassroomToRealLifeTopic();
  },

  previous() {
    return previousClassroomToRealLifeTopic();
  },

  set(index) {
    return setClassroomToRealLifeTopic(index);
  },

  index() {
    return getClassroomToRealLifeIndex();
  },

  count() {
    return getClassroomToRealLifeCount();
  },

  text(value, language = "en") {
    return getClassroomToRealLifeText(value, language);
  }

};


/*
   Backward/simple global reference
*/
window.classroomToRealLife = classroomToRealLife;
