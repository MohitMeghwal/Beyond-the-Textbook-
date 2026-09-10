/* =========================================================
   SCIENCE BEYOND THE TEXTBOOK
   WHY DOES THIS HAPPEN? — QUESTION DATABASE

   Add new questions by adding another object to this array.
   No HTML changes are required.
========================================================= */

const whyQuestions = [

  {
    id: 1,
    emoji: "🌈",
    category: "Light",
    categoryHi: "प्रकाश",
    questionEn: "Why does a rainbow appear after rain?",
    questionHi: "बारिश के बाद इंद्रधनुष क्यों दिखाई देता है?",
    answerEn:
      "Rain droplets act like tiny prisms. Sunlight enters the droplets, gets refracted and dispersed into different colours, then some of the light is reflected back toward our eyes.",
    answerHi:
      "बारिश की पानी की बूंदें छोटी प्रिज्म की तरह काम करती हैं। सूर्य का प्रकाश बूंदों में प्रवेश करते समय अपवर्तित और विक्षेपित होता है तथा कुछ प्रकाश परावर्तित होकर हमारी आँखों तक पहुँचता है।"
  },

  {
    id: 2,
    emoji: "🔵",
    category: "Light",
    categoryHi: "प्रकाश",
    questionEn: "Why does the sky appear blue?",
    questionHi: "आसमान नीला क्यों दिखाई देता है?",
    answerEn:
      "Sunlight contains many colours. Earth's atmosphere scatters shorter wavelengths such as blue light more strongly in different directions, making the sky appear blue.",
    answerHi:
      "सूर्य के प्रकाश में कई रंग होते हैं। पृथ्वी का वायुमंडल छोटी तरंगदैर्ध्य वाले प्रकाश, विशेषकर नीले प्रकाश, को अधिक बिखेरता है। इसलिए हमें आसमान नीला दिखाई देता है।"
  },

  {
    id: 3,
    emoji: "🌅",
    category: "Light",
    categoryHi: "प्रकाश",
    questionEn: "Why does the Sun look reddish during sunrise and sunset?",
    questionHi: "सूर्योदय और सूर्यास्त के समय सूर्य लाल क्यों दिखाई देता है?",
    answerEn:
      "At sunrise and sunset, sunlight travels through a longer path in the atmosphere. Much of the blue light is scattered away, allowing more red and orange light to reach our eyes.",
    answerHi:
      "सूर्योदय और सूर्यास्त के समय सूर्य का प्रकाश वायुमंडल में अधिक लंबी दूरी तय करता है। नीला प्रकाश अधिक बिखर जाता है, इसलिए लाल और नारंगी प्रकाश हमारी आँखों तक अधिक पहुँचता है।"
  },

  {
    id: 4,
    emoji: "🥄",
    category: "Light",
    categoryHi: "प्रकाश",
    questionEn: "Why does a spoon look bent when placed in water?",
    questionHi: "पानी में रखा चम्मच टेढ़ा क्यों दिखाई देता है?",
    answerEn:
      "Light changes direction when it passes from water to air. This bending of light is called refraction, which makes the submerged part of the spoon appear shifted.",
    answerHi:
      "जब प्रकाश पानी से हवा में जाता है तो उसकी दिशा बदल जाती है। प्रकाश के इस मुड़ने को अपवर्तन कहते हैं। इसी कारण पानी में डूबा चम्मच अपनी वास्तविक स्थिति से थोड़ा अलग दिखाई देता है।"
  },

  {
    id: 5,
    emoji: "🍲",
    category: "Pressure",
    categoryHi: "दाब",
    questionEn: "Why does a pressure cooker cook food faster?",
    questionHi: "प्रेशर कुकर में खाना जल्दी क्यों पकता है?",
    answerEn:
      "The pressure inside a pressure cooker becomes higher than normal atmospheric pressure. This raises the boiling point of water, allowing food to cook at a higher temperature.",
    answerHi:
      "प्रेशर कुकर के अंदर दाब सामान्य वायुमंडलीय दाब से अधिक हो जाता है। इससे पानी का क्वथनांक बढ़ जाता है और भोजन अधिक तापमान पर पकता है।"
  },

  {
    id: 6,
    emoji: "🚲",
    category: "Motion",
    categoryHi: "गति",
    questionEn: "Why does a bicycle become easier to balance when moving?",
    questionHi: "चलती हुई साइकिल को संतुलित करना आसान क्यों होता है?",
    answerEn:
      "A moving bicycle can be steered to correct small tilts. The rotating wheels and steering system also contribute to its dynamic stability.",
    answerHi:
      "चलती साइकिल में छोटे झुकाव को स्टीयरिंग द्वारा ठीक किया जा सकता है। पहियों की घूर्णन गति और स्टीयरिंग व्यवस्था भी साइकिल के गतिशील संतुलन में योगदान देती है।"
  },

  {
    id: 7,
    emoji: "⚡",
    category: "Electricity",
    categoryHi: "विद्युत",
    questionEn: "Why do we sometimes get a small electric shock after walking on a carpet?",
    questionHi: "कालीन पर चलने के बाद कभी-कभी हल्का बिजली का झटका क्यों लगता है?",
    answerEn:
      "Friction can transfer electric charge between your shoes and the carpet. When you touch a conductor, the accumulated charge may suddenly discharge.",
    answerHi:
      "घर्षण के कारण आपके जूतों और कालीन के बीच विद्युत आवेश का स्थानांतरण हो सकता है। किसी चालक को छूने पर यह जमा हुआ आवेश अचानक प्रवाहित हो सकता है।"
  },

  {
    id: 8,
    emoji: "🧲",
    category: "Magnetism",
    categoryHi: "चुंबकत्व",
    questionEn: "Why does a magnet attract iron?",
    questionHi: "चुंबक लोहे को अपनी ओर क्यों खींचता है?",
    answerEn:
      "A magnet produces a magnetic field. In materials such as iron, this field can cause magnetic domains to align in a way that produces an attractive force.",
    answerHi:
      "चुंबक अपने चारों ओर चुंबकीय क्षेत्र उत्पन्न करता है। लोहे जैसे पदार्थों में यह क्षेत्र चुंबकीय डोमेन को व्यवस्थित कर सकता है, जिससे आकर्षण बल उत्पन्न होता है।"
  },

  {
    id: 9,
    emoji: "🧊",
    category: "Heat",
    categoryHi: "ऊष्मा",
    questionEn: "Why does ice float on water?",
    questionHi: "बर्फ पानी पर क्यों तैरती है?",
    answerEn:
      "When water freezes, hydrogen bonding forms a more open structure. Ice therefore has a lower density than liquid water, allowing it to float.",
    answerHi:
      "जब पानी जमता है तो हाइड्रोजन बॉन्डिंग के कारण एक अपेक्षाकृत खुली संरचना बनती है। इसलिए बर्फ का घनत्व द्रव पानी से कम होता है और वह पानी पर तैरती है।"
  },

  {
    id: 10,
    emoji: "💨",
    category: "Air",
    categoryHi: "वायु",
    questionEn: "Why can we feel wind even though air is invisible?",
    questionHi: "हवा दिखाई नहीं देती, फिर भी हमें हवा महसूस क्यों होती है?",
    answerEn:
      "Moving air exerts forces on our skin. Although individual air molecules are too small to see, their collective motion can be detected as wind.",
    answerHi:
      "चलती हुई हवा हमारी त्वचा पर बल लगाती है। हवा के अणु दिखाई नहीं देते, लेकिन बहुत सारे अणुओं की सामूहिक गति हमें हवा के रूप में महसूस होती है।"
  },

  {
    id: 11,
    emoji: "🌱",
    category: "Biology",
    categoryHi: "जीवविज्ञान",
    questionEn: "Why are leaves usually green?",
    questionHi: "पत्तियाँ सामान्यतः हरी क्यों होती हैं?",
    answerEn:
      "Leaves contain chlorophyll. Chlorophyll absorbs mainly red and blue parts of visible light and reflects more green light, making leaves appear green.",
    answerHi:
      "पत्तियों में क्लोरोफिल नामक वर्णक होता है। यह मुख्यतः लाल और नीले प्रकाश को अवशोषित करता है और अधिक हरा प्रकाश परावर्तित करता है, इसलिए पत्तियाँ हरी दिखाई देती हैं।"
  },

  {
    id: 12,
    emoji: "🫁",
    category: "Biology",
    categoryHi: "जीवविज्ञान",
    questionEn: "Why do we breathe faster during exercise?",
    questionHi: "व्यायाम करते समय हमारी साँस तेज क्यों हो जाती है?",
    answerEn:
      "Working muscles need more oxygen and produce more carbon dioxide. Breathing becomes faster to increase oxygen supply and remove carbon dioxide.",
    answerHi:
      "व्यायाम के दौरान मांसपेशियों को अधिक ऑक्सीजन की आवश्यकता होती है और अधिक कार्बन डाइऑक्साइड बनती है। इसलिए ऑक्सीजन की आपूर्ति बढ़ाने और कार्बन डाइऑक्साइड हटाने के लिए साँस तेज हो जाती है।"
  },

  {
    id: 13,
    emoji: "❤️",
    category: "Biology",
    categoryHi: "जीवविज्ञान",
    questionEn: "Why does our heart beat faster during exercise?",
    questionHi: "व्यायाम के दौरान हमारा हृदय तेजी से क्यों धड़कता है?",
    answerEn:
      "Active muscles need more oxygen and nutrients. The heart increases its pumping rate to deliver blood to the working tissues more quickly.",
    answerHi:
      "सक्रिय मांसपेशियों को अधिक ऑक्सीजन और पोषक पदार्थों की आवश्यकता होती है। इसलिए हृदय रक्त को अधिक तेजी से पंप करता है।"
  },

  {
    id: 14,
    emoji: "🧼",
    category: "Chemistry",
    categoryHi: "रसायन विज्ञान",
    questionEn: "Why does soap help remove oily dirt?",
    questionHi: "साबुन तैलीय गंदगी को हटाने में मदद क्यों करता है?",
    answerEn:
      "Soap molecules have one end that interacts with water and another that interacts with oils. They surround oily particles and help suspend them in water so they can be washed away.",
    answerHi:
      "साबुन के अणु के एक सिरे की जल के साथ और दूसरे सिरे की तेल के साथ अच्छी परस्पर क्रिया होती है। वे तैलीय कणों को घेर लेते हैं और उन्हें पानी में फैलाकर धोने में मदद करते हैं।"
  },

  {
    id: 15,
    emoji: "🍎",
    category: "Chemistry",
    categoryHi: "रसायन विज्ञान",
    questionEn: "Why does a cut apple turn brown?",
    questionHi: "कटा हुआ सेब भूरा क्यों हो जाता है?",
    answerEn:
      "When the inside of an apple is exposed to oxygen, enzymes help trigger oxidation reactions. These reactions produce brown-coloured compounds.",
    answerHi:
      "सेब का अंदरूनी भाग हवा के ऑक्सीजन के संपर्क में आने पर एंजाइमों की सहायता से ऑक्सीकरण अभिक्रियाओं से गुजरता है। इससे भूरे रंग के यौगिक बनते हैं।"
  },

  {
    id: 16,
    emoji: "🎈",
    category: "Pressure",
    categoryHi: "दाब",
    questionEn: "Why does an inflated balloon move when air escapes from it?",
    questionHi: "फुलाए हुए गुब्बारे से हवा निकलने पर वह इधर-उधर क्यों चलता है?",
    answerEn:
      "Air escaping from the balloon carries momentum in one direction. The balloon experiences a reaction force in the opposite direction.",
    answerHi:
      "गुब्बारे से हवा एक दिशा में तेज़ी से बाहर निकलती है और अपने साथ संवेग ले जाती है। इसके कारण गुब्बारे पर विपरीत दिशा में प्रतिक्रिया बल लगता है।"
  },

  {
    id: 17,
    emoji: "🔊",
    category: "Sound",
    categoryHi: "ध्वनि",
    questionEn: "Why can we hear an echo?",
    questionHi: "हमें प्रतिध्वनि क्यों सुनाई देती है?",
    answerEn:
      "An echo occurs when sound waves reflect from a distant surface and return to our ears after a noticeable time interval.",
    answerHi:
      "जब ध्वनि तरंगें किसी दूर की सतह से परावर्तित होकर कुछ समय बाद हमारी कानों तक वापस पहुँचती हैं, तो हमें प्रतिध्वनि सुनाई देती है।"
  },

  {
    id: 18,
    emoji: "🌊",
    category: "Earth",
    categoryHi: "पृथ्वी",
    questionEn: "Why do ocean waves move toward the shore?",
    questionHi: "समुद्र की लहरें किनारे की ओर क्यों आती हैं?",
    answerEn:
      "Waves are generated mainly by energy transferred to the water, often by wind. As waves approach shallow water, their shape and motion change and they eventually break near the shore.",
    answerHi:
      "समुद्र की लहरें मुख्यतः हवा द्वारा पानी को दी गई ऊर्जा से बनती हैं। जब वे उथले पानी में पहुँचती हैं तो उनकी गति और आकृति बदलती है और वे किनारे के पास टूटने लगती हैं।"
  },

  {
    id: 19,
    emoji: "🌍",
    category: "Earth",
    categoryHi: "पृथ्वी",
    questionEn: "Why do we have day and night?",
    questionHi: "दिन और रात क्यों होते हैं?",
    answerEn:
      "Earth rotates around its own axis. The side facing the Sun experiences daytime, while the side facing away from the Sun experiences night.",
    answerHi:
      "पृथ्वी अपनी धुरी पर घूमती है। सूर्य की ओर वाला भाग दिन का अनुभव करता है, जबकि सूर्य से विपरीत दिशा वाला भाग रात का अनुभव करता है।"
  },

  {
    id: 20,
    emoji: "🌙",
    category: "Space",
    categoryHi: "अंतरिक्ष",
    questionEn: "Why does the Moon appear to change shape?",
    questionHi: "चंद्रमा का आकार बदलता हुआ क्यों दिखाई देता है?",
    answerEn:
      "The Moon does not actually change shape. As it orbits Earth, we see different portions of its sunlit half. These changing appearances are called lunar phases.",
    answerHi:
      "चंद्रमा वास्तव में अपना आकार नहीं बदलता। पृथ्वी की परिक्रमा करते समय हमें उसके प्रकाशित भाग का अलग-अलग हिस्सा दिखाई देता है। इन बदलती आकृतियों को चंद्रमा की कलाएँ कहते हैं।"
  }

];
