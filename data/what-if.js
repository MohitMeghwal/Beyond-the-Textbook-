// data/what-if.js
// WHAT IF? — 35 Bilingual Science Scenarios
// English + Hindi

const whatIfData = [

  // =========================================================
  // 1–20 : CORE SCENARIOS
  // =========================================================

  {
    id: 1,
    icon: "🌍",
    title: {
      en: "What If Earth Stopped Spinning?",
      hi: "क्या हो अगर पृथ्वी अचानक घूमना बंद कर दे?"
    },
    whatIf: {
      en: "Earth suddenly stopped rotating on its axis while continuing to orbit the Sun.",
      hi: "पृथ्वी अपनी धुरी पर घूमना अचानक बंद कर दे, जबकि सूर्य की परिक्रमा जारी रहे।"
    },
    changes: {
      en: "Day and night cycles extend to 6 months each. Atmosphere and oceans rush eastward due to inertia.",
      hi: "दिन और रात 6-6 महीने के हो जाएंगे। जड़त्व के कारण वायुमंडल और महासागर पूर्व की ओर तेजी से बहने लगेंगे।"
    },
    why: {
      en: "Newton's First Law of Motion: objects in motion stay in motion unless acted upon by an external force.",
      hi: "न्यूटन का पहला नियम: गतिमान वस्तुएँ तब तक अपनी गति बनाए रखती हैं जब तक उन पर कोई बाहरी बल न लगाया जाए।"
    },
    notice: {
      en: "Extreme atmospheric winds, major ocean redistribution, and severe differences between the sunlit and dark sides.",
      hi: "अत्यधिक वायुमंडलीय हवाएँ, महासागरों का बड़ा पुनर्वितरण और प्रकाश वाले तथा अंधेरे भागों के बीच अत्यधिक तापमान अंतर।"
    },
    science: {
      en: "Conservation of angular momentum (L = Iω) and the loss of equatorial centrifugal effect would redistribute oceans toward the poles.",
      hi: "कोणीय संवेग संरक्षण (L = Iω) और भूमध्यरेखीय अपकेंद्रीय प्रभाव के समाप्त होने से महासागर ध्रुवों की ओर पुनर्वितरित होंगे।"
    }
  },

  {
    id: 2,
    icon: "🌙",
    title: {
      en: "What If the Moon Disappeared?",
      hi: "क्या हो अगर चंद्रमा अचानक गायब हो जाए?"
    },
    whatIf: {
      en: "The Moon vanishes instantly from Earth's orbit.",
      hi: "चंद्रमा पृथ्वी की कक्षा से अचानक पूरी तरह गायब हो जाए।"
    },
    changes: {
      en: "Ocean tides would become much weaker, nights much darker, and Earth's axial stability would change over long periods.",
      hi: "समुद्री ज्वार-भाटा बहुत कमजोर हो जाएगा, रातें अधिक अंधेरी होंगी और लंबे समय में पृथ्वी के अक्षीय झुकाव की स्थिरता बदल सकती है।"
    },
    why: {
      en: "The Moon's gravity is the main driver of ocean tides and contributes to the long-term stability of Earth's axial tilt.",
      hi: "चंद्रमा का गुरुत्वाकर्षण समुद्री ज्वार का मुख्य कारण है और पृथ्वी के अक्षीय झुकाव की दीर्घकालीन स्थिरता में योगदान देता है।"
    },
    notice: {
      en: "Marine ecosystems would be disrupted and long-term climate patterns could change.",
      hi: "समुद्री पारिस्थितिक तंत्र प्रभावित होंगे और लंबे समय में जलवायु के पैटर्न बदल सकते हैं।"
    },
    science: {
      en: "Gravitational interaction follows F = G(m₁m₂)/r², while lunar torque influences Earth's rotational orientation.",
      hi: "गुरुत्वाकर्षण अंतःक्रिया F = G(m₁m₂)/r² का पालन करती है, जबकि चंद्रमा का टॉर्क पृथ्वी के घूर्णन अभिविन्यास को प्रभावित करता है।"
    }
  },

  {
    id: 3,
    icon: "☀️",
    title: {
      en: "What If the Sun Suddenly Vanished?",
      hi: "क्या हो अगर सूर्य अचानक गायब हो जाए?"
    },
    whatIf: {
      en: "The Sun vanishes instantly without a trace.",
      hi: "सूर्य बिना कोई सुराग छोड़े अचानक गायब हो जाए।"
    },
    changes: {
      en: "Sunlight would disappear after about 8 minutes 20 seconds, and Earth would no longer remain in its present solar orbit.",
      hi: "लगभग 8 मिनट 20 सेकंड बाद सूर्य का प्रकाश गायब हो जाएगा और पृथ्वी अपनी वर्तमान सौर कक्षा में नहीं रहेगी।"
    },
    why: {
      en: "Light and changes in the gravitational field propagate through space at the speed of light.",
      hi: "प्रकाश और गुरुत्वाकर्षण क्षेत्र में परिवर्तन अंतरिक्ष में प्रकाश की गति से फैलते हैं।"
    },
    notice: {
      en: "Complete darkness would follow, photosynthesis would stop, and Earth's surface would gradually cool.",
      hi: "पूर्ण अंधकार छा जाएगा, प्रकाश संश्लेषण रुक जाएगा और पृथ्वी की सतह धीरे-धीरे ठंडी होने लगेगी।"
    },
    science: {
      en: "General Relativity describes gravitational propagation at c, while planetary cooling is governed by radiative heat loss.",
      hi: "सामान्य सापेक्षता गुरुत्वाकर्षण प्रभावों के प्रसार को c से संबंधित करती है, जबकि ग्रह का ठंडा होना विकिरणीय ऊष्मा हानि से नियंत्रित होता है।"
    }
  },

  {
    id: 4,
    icon: "🪶",
    title: {
      en: "What If Gravity Became Half as Strong?",
      hi: "क्या हो अगर गुरुत्वाकर्षण आधा हो जाए?"
    },
    whatIf: {
      en: "The universal gravitational constant G suddenly decreases by 50%.",
      hi: "सार्वत्रिक गुरुत्वाकर्षण नियतांक G अचानक 50% कम हो जाए।"
    },
    changes: {
      en: "Weight would decrease, atmospheric pressure would fall, and planetary orbital conditions would change.",
      hi: "वजन कम हो जाएगा, वायुमंडलीय दबाव घटेगा और ग्रहों की कक्षीय स्थितियाँ बदल जाएँगी।"
    },
    why: {
      en: "Weight depends on gravitational acceleration: W = mg.",
      hi: "भार गुरुत्वीय त्वरण पर निर्भर करता है: W = mg।"
    },
    notice: {
      en: "Objects would be easier to lift, jumps would become higher, and the atmosphere would become less strongly bound to Earth.",
      hi: "वस्तुओं को उठाना आसान होगा, छलांग अधिक ऊँची होगी और वायुमंडल पृथ्वी से कम मजबूती से बंधा रहेगा।"
    },
    science: {
      en: "Surface gravity follows g = GM/r², so changing G changes gravitational acceleration.",
      hi: "सतही गुरुत्वीय त्वरण g = GM/r² पर निर्भर करता है, इसलिए G बदलने पर गुरुत्वीय त्वरण भी बदलता है।"
    }
  },

  {
    id: 5,
    icon: "💨",
    title: {
      en: "What If There Were No Air Resistance?",
      hi: "क्या हो अगर वायु प्रतिरोध समाप्त हो जाए?"
    },
    whatIf: {
      en: "Fluid friction in the atmosphere drops to zero for moving objects.",
      hi: "वायुमंडल में चलती हुई वस्तुओं पर वायु घर्षण शून्य हो जाए।"
    },
    changes: {
      en: "Terminal velocity would disappear and falling objects would continue accelerating under gravity.",
      hi: "सीमांत वेग समाप्त हो जाएगा और गिरती हुई वस्तुएँ गुरुत्वाकर्षण के कारण लगातार त्वरित होती रहेंगी।"
    },
    why: {
      en: "Air drag normally opposes motion and balances gravitational force during falling.",
      hi: "वायु प्रतिरोध सामान्यतः गति का विरोध करता है और गिरती वस्तु पर गुरुत्वाकर्षण बल को संतुलित करता है।"
    },
    notice: {
      en: "Feathers and heavy objects would fall with the same gravitational acceleration in the absence of drag.",
      hi: "वायु प्रतिरोध न होने पर पंख और भारी वस्तुएँ समान गुरुत्वीय त्वरण से गिरेंगी।"
    },
    science: {
      en: "Without drag, acceleration approaches g and velocity follows v = gt for ideal free fall.",
      hi: "वायु प्रतिरोध न होने पर त्वरण g के करीब रहेगा और आदर्श मुक्त-पतन में v = gt होगा।"
    }
  },

  {
    id: 6,
    icon: "🧊",
    title: {
      en: "What If Water Couldn't Freeze?",
      hi: "क्या हो अगर पानी बर्फ न बन सके?"
    },
    whatIf: {
      en: "Water molecules could not transition into a solid crystal lattice at low temperature.",
      hi: "पानी के अणु कम तापमान पर ठोस क्रिस्टलीय संरचना में परिवर्तित न हो सकें।"
    },
    changes: {
      en: "Glaciers and permanent ice reservoirs would disappear, changing sea levels and global circulation.",
      hi: "ग्लेशियर और स्थायी बर्फीले जल भंडार समाप्त हो जाएंगे, जिससे समुद्र स्तर और वैश्विक परिसंचरण बदल जाएगा।"
    },
    why: {
      en: "Freezing is a phase transition in which hydrogen bonding organizes water molecules into a solid structure.",
      hi: "जमना एक अवस्था परिवर्तन है जिसमें हाइड्रोजन बंध पानी के अणुओं को ठोस संरचना में व्यवस्थित करते हैं।"
    },
    notice: {
      en: "Polar freshwater reserves would be lost and Earth's climate system would be strongly disturbed.",
      hi: "ध्रुवीय मीठे पानी के भंडार समाप्त हो जाएंगे और पृथ्वी की जलवायु प्रणाली गंभीर रूप से प्रभावित होगी।"
    },
    science: {
      en: "Phase transitions involve latent heat and changes in molecular structure.",
      hi: "अवस्था परिवर्तनों में गुप्त ऊष्मा और अणुओं की संरचना में परिवर्तन शामिल होता है।"
    }
  },

  {
    id: 7,
    icon: "🔊",
    title: {
      en: "What If Sound Could Travel Through Space?",
      hi: "क्या हो अगर ध्वनि अंतरिक्ष में यात्रा कर सके?"
    },
    whatIf: {
      en: "Space contains a medium capable of carrying mechanical sound waves.",
      hi: "अंतरिक्ष में ध्वनि तरंगों को ले जाने वाला कोई माध्यम मौजूद हो।"
    },
    changes: {
      en: "The cosmos would no longer be silent, and astronomical events could produce detectable sound waves.",
      hi: "ब्रह्मांड पूरी तरह शांत नहीं रहेगा और खगोलीय घटनाएँ सुनाई देने वाली ध्वनि तरंगें उत्पन्न कर सकती हैं।"
    },
    why: {
      en: "Sound is a mechanical wave and requires a material medium, unlike electromagnetic light.",
      hi: "ध्वनि एक यांत्रिक तरंग है और इसे पदार्थ के माध्यम की आवश्यकता होती है, जबकि विद्युतचुंबकीय प्रकाश निर्वात में भी चल सकता है।"
    },
    notice: {
      en: "Distant astronomical events could produce a continuous background of mechanical vibrations.",
      hi: "दूर की खगोलीय घटनाएँ यांत्रिक कंपन की पृष्ठभूमि उत्पन्न कर सकती हैं।"
    },
    science: {
      en: "Sound travels through longitudinal pressure variations in a material medium.",
      hi: "ध्वनि किसी भौतिक माध्यम में अनुदैर्ध्य दबाव परिवर्तनों के रूप में यात्रा करती है।"
    }
  },

  {
    id: 8,
    icon: "⚡",
    title: {
      en: "What If Electricity Moved at the Speed of Light?",
      hi: "क्या हो अगर इलेक्ट्रॉन प्रकाश की गति से बहें?"
    },
    whatIf: {
      en: "Individual electron drift velocity inside conductors suddenly reaches the speed of light.",
      hi: "चालकों के अंदर इलेक्ट्रॉनों की वास्तविक ड्रिफ्ट गति अचानक प्रकाश की गति के बराबर हो जाए।"
    },
    changes: {
      en: "Ordinary electrical circuits would behave completely differently, with enormous relativistic effects.",
      hi: "सामान्य विद्युत परिपथ पूरी तरह अलग तरीके से व्यवहार करेंगे और अत्यधिक सापेक्षिक प्रभाव दिखाई देंगे।"
    },
    why: {
      en: "Individual electron drift is normally very slow, while electrical signals propagate much faster through a circuit.",
      hi: "व्यक्तिगत इलेक्ट्रॉन की ड्रिफ्ट गति सामान्यतः बहुत धीमी होती है, जबकि विद्युत संकेत परिपथ में बहुत तेज गति से फैलते हैं।"
    },
    notice: {
      en: "Ordinary conductors and electronic devices could not operate under such extreme conditions.",
      hi: "ऐसी अत्यधिक परिस्थितियों में सामान्य चालक और इलेक्ट्रॉनिक उपकरण काम नहीं कर पाएंगे।"
    },
    science: {
      en: "Relativistic motion is described using relativistic momentum and energy rather than classical formulas alone.",
      hi: "सापेक्षिक गति को केवल शास्त्रीय सूत्रों से नहीं, बल्कि सापेक्षिक संवेग और ऊर्जा से वर्णित किया जाता है।"
    }
  },

  {
    id: 9,
    icon: "🌿",
    title: {
      en: "What If Plants Could Move Like Animals?",
      hi: "क्या हो अगर पौधे जानवरों की तरह चल सकें?"
    },
    whatIf: {
      en: "Plants develop active tissues capable of rapid movement.",
      hi: "पौधों में तेजी से गति करने में सक्षम सक्रिय ऊतक विकसित हो जाएँ।"
    },
    changes: {
      en: "Forests could become dynamic environments where plants actively compete for light, water, and nutrients.",
      hi: "जंगल गतिशील वातावरण बन जाएंगे जहाँ पौधे प्रकाश, पानी और पोषक तत्वों के लिए सक्रिय रूप से प्रतिस्पर्धा करेंगे।"
    },
    why: {
      en: "Plants normally rely mainly on growth and slow movements rather than animal-like muscles.",
      hi: "पौधे सामान्यतः जानवरों जैसी मांसपेशियों के बजाय वृद्धि और धीमी गतियों पर निर्भर करते हैं।"
    },
    notice: {
      en: "Plants could change location, seek resources, and respond rapidly to their surroundings.",
      hi: "पौधे अपना स्थान बदल सकते, संसाधनों की तलाश कर सकते और अपने वातावरण पर तेजी से प्रतिक्रिया दे सकते।"
    },
    science: {
      en: "Rapid movement would require coordinated signaling and force-generating tissues capable of active contraction.",
      hi: "तेज गति के लिए समन्वित संकेत तंत्र और सक्रिय संकुचन करने वाले बल-उत्पादक ऊतकों की आवश्यकता होगी।"
    }
  },

  {
    id: 10,
    icon: "🧊",
    title: {
      en: "What If Ice Were Denser Than Water?",
      hi: "क्या हो अगर बर्फ पानी से अधिक घनी हो जाए?"
    },
    whatIf: {
      en: "Solid ice becomes denser than liquid water and sinks.",
      hi: "ठोस बर्फ पानी से अधिक घनी हो जाए और डूबने लगे।"
    },
    changes: {
      en: "Lakes and oceans could freeze from the bottom upward, dramatically changing aquatic ecosystems.",
      hi: "झीलें और महासागर नीचे से ऊपर की ओर जम सकते हैं, जिससे जलीय पारिस्थितिक तंत्र में बड़ा बदलाव आएगा।"
    },
    why: {
      en: "Water normally expands during freezing because of its hydrogen-bonded crystal structure.",
      hi: "पानी सामान्यतः जमने पर फैलता है क्योंकि हाइड्रोजन बंध एक खुली क्रिस्टलीय संरचना बनाते हैं।"
    },
    notice: {
      en: "Deep water would lose the insulating ice layer that normally protects aquatic life.",
      hi: "गहरे पानी को सामान्यतः मिलने वाली बर्फ की सुरक्षात्मक इन्सुलेशन परत समाप्त हो जाएगी।"
    },
    science: {
      en: "Water's unusual density behavior near 4°C helps prevent complete freezing of natural water bodies.",
      hi: "4°C के आसपास पानी का असामान्य घनत्व व्यवहार प्राकृतिक जल निकायों को पूरी तरह जमने से बचाने में मदद करता है।"
    }
  },

  {
    id: 11,
    icon: "🧲",
    title: {
      en: "What If Earth Lost Its Magnetic Field?",
      hi: "क्या हो अगर पृथ्वी अपना चुंबकीय क्षेत्र खो दे?"
    },
    whatIf: {
      en: "Earth's internal dynamo stops generating its protective magnetic field.",
      hi: "पृथ्वी का आंतरिक डायनेमो अपना सुरक्षात्मक चुंबकीय क्षेत्र बनाना बंद कर दे।"
    },
    changes: {
      en: "Earth would lose an important shield against charged particles from the Sun.",
      hi: "पृथ्वी सूर्य से आने वाले आवेशित कणों के विरुद्ध एक महत्वपूर्ण सुरक्षा कवच खो देगी।"
    },
    why: {
      en: "Motion of conducting material inside Earth's outer core generates the geomagnetic field.",
      hi: "पृथ्वी के बाहरी कोर में चालक पदार्थ की गति भू-चुंबकीय क्षेत्र उत्पन्न करती है।"
    },
    notice: {
      en: "Satellites, communication systems, and atmospheric chemistry could be strongly affected.",
      hi: "उपग्रह, संचार प्रणालियाँ और वायुमंडलीय रसायन गंभीर रूप से प्रभावित हो सकते हैं।"
    },
    science: {
      en: "Charged particles experience the Lorentz force F = q(E + v × B) in electromagnetic fields.",
      hi: "आवेशित कण विद्युतचुंबकीय क्षेत्रों में लॉरेंत्ज़ बल F = q(E + v × B) का अनुभव करते हैं।"
    }
  },

  {
    id: 12,
    icon: "⚛️",
    title: {
      en: "What If Electrons Suddenly Became Twice as Massive?",
      hi: "क्या हो अगर इलेक्ट्रॉनों का द्रव्यमान अचानक दोगुना हो जाए?"
    },
    whatIf: {
      en: "The rest mass of electrons increases globally by 100%.",
      hi: "इलेक्ट्रॉनों का विराम द्रव्यमान पूरी दुनिया में अचानक 100% बढ़ जाए।"
    },
    changes: {
      en: "Atomic and molecular structures would change dramatically, altering chemistry and matter.",
      hi: "परमाणु और आणविक संरचनाएँ बहुत बदल जाएँगी, जिससे रसायन विज्ञान और पदार्थ का व्यवहार बदल जाएगा।"
    },
    why: {
      en: "Electron mass influences atomic length scales and the energies of electronic states.",
      hi: "इलेक्ट्रॉन का द्रव्यमान परमाणु की लंबाई के पैमाने और इलेक्ट्रॉनिक अवस्थाओं की ऊर्जा को प्रभावित करता है।"
    },
    notice: {
      en: "Chemical bonds, molecular structures, and biological chemistry could behave very differently.",
      hi: "रासायनिक बंध, आणविक संरचनाएँ और जैव-रसायन बहुत अलग तरीके से व्यवहार कर सकते हैं।"
    },
    science: {
      en: "The Bohr radius scales approximately as a₀ ∝ 1/me, showing the connection between electron mass and atomic size.",
      hi: "बोहर त्रिज्या लगभग a₀ ∝ 1/me के अनुसार बदलती है, जो इलेक्ट्रॉन द्रव्यमान और परमाणु आकार के संबंध को दर्शाती है।"
    }
  },

  {
    id: 13,
    icon: "❄️",
    title: {
      en: "What If Absolute Zero Could Be Reached?",
      hi: "क्या हो अगर परम शून्य तापमान प्राप्त किया जा सके?"
    },
    whatIf: {
      en: "A macroscopic object is cooled exactly to 0 Kelvin.",
      hi: "किसी स्थूल वस्तु को ठीक 0 Kelvin तक ठंडा कर दिया जाए।"
    },
    changes: {
      en: "Quantum effects would become extraordinarily important, but ordinary thermal motion would be reduced to its minimum possible level.",
      hi: "क्वांटम प्रभाव अत्यंत महत्वपूर्ण हो जाएंगे, जबकि सामान्य तापीय गति अपने न्यूनतम संभव स्तर तक पहुँच जाएगी।"
    },
    why: {
      en: "Temperature is related to the average thermal energy of particles.",
      hi: "तापमान कणों की औसत तापीय ऊर्जा से संबंधित होता है।"
    },
    notice: {
      en: "Quantum states could dominate the behavior of matter, producing unusual low-temperature phenomena.",
      hi: "क्वांटम अवस्थाएँ पदार्थ के व्यवहार पर हावी हो सकती हैं और अत्यंत निम्न तापमान की असामान्य घटनाएँ दिखाई दे सकती हैं।"
    },
    science: {
      en: "Quantum zero-point energy and the uncertainty principle prevent ordinary matter from simply becoming completely motionless.",
      hi: "क्वांटम शून्य-बिंदु ऊर्जा और अनिश्चितता सिद्धांत सामान्य पदार्थ को पूरी तरह स्थिर होने से रोकते हैं।"
    }
  },

  {
    id: 14,
    icon: "💧",
    title: {
      en: "What If Oil and Water Could Mix Freely?",
      hi: "क्या हो अगर तेल और पानी आसानी से आपस में घुल जाएँ?"
    },
    whatIf: {
      en: "Non-polar oils become completely soluble in polar water.",
      hi: "अध्रुवीय तेल ध्रुवीय पानी में पूरी तरह घुलनशील हो जाएँ।"
    },
    changes: {
      en: "Many biological membranes and familiar separation processes would behave completely differently.",
      hi: "कई जैविक झिल्लियों और सामान्य पृथक्करण प्रक्रियाओं का व्यवहार पूरी तरह बदल जाएगा।"
    },
    why: {
      en: "Water and oil normally differ strongly in polarity, leading to the familiar rule that like dissolves like.",
      hi: "पानी और तेल की ध्रुवीयता अलग होती है, इसलिए सामान्यतः 'समान समान को घोलता है' का सिद्धांत लागू होता है।"
    },
    notice: {
      en: "Cell membrane structure and many biological processes would be fundamentally altered.",
      hi: "कोशिका झिल्ली की संरचना और कई जैविक प्रक्रियाएँ मूल रूप से बदल जाएँगी।"
    },
    science: {
      en: "Polarity and hydrophobic interactions are central to molecular organization and membrane formation.",
      hi: "ध्रुवीयता और हाइड्रोफोबिक अंतःक्रियाएँ आणविक संगठन और कोशिका झिल्ली के निर्माण में महत्वपूर्ण हैं।"
    }
  },

  {
    id: 15,
    icon: "🫧",
    title: {
      en: "What If Earth's Atmosphere Were 100% Oxygen?",
      hi: "क्या हो अगर पृथ्वी का वायुमंडल 100% ऑक्सीजन हो?"
    },
    whatIf: {
      en: "Nitrogen and trace gases are completely replaced by pure oxygen.",
      hi: "नाइट्रोजन और अन्य गैसों की जगह वायुमंडल में केवल शुद्ध ऑक्सीजन हो।"
    },
    changes: {
      en: "Combustion would become dramatically easier and biological systems would face extreme oxidative stress.",
      hi: "दहन बहुत अधिक आसानी से होगा और जीवित प्रणालियों पर अत्यधिक ऑक्सीडेटिव तनाव पड़ेगा।"
    },
    why: {
      en: "Earth's atmosphere normally contains large amounts of nitrogen, which dilutes oxygen and affects combustion and biology.",
      hi: "पृथ्वी के वायुमंडल में बड़ी मात्रा में नाइट्रोजन होता है, जो ऑक्सीजन को dilute करता है और दहन तथा जीव विज्ञान को प्रभावित करता है।"
    },
    notice: {
      en: "Fire behavior and oxidation processes would be dramatically different from today's conditions.",
      hi: "आग का व्यवहार और ऑक्सीकरण प्रक्रियाएँ वर्तमान परिस्थितियों से बहुत अलग हो जाएँगी।"
    },
    science: {
      en: "Combustion rate depends strongly on oxygen concentration and partial pressure.",
      hi: "दहन की दर ऑक्सीजन की सांद्रता और आंशिक दबाव पर बहुत निर्भर करती है।"
    }
  },

  {
    id: 16,
    icon: "⚡",
    title: {
      en: "What If the Human Body Could Generate 1000 Volts?",
      hi: "क्या हो अगर मानव शरीर 1000 वोल्ट बिजली पैदा कर सके?"
    },
    whatIf: {
      en: "Human bioelectric systems develop an electric discharge capability similar to electric eels.",
      hi: "मानव जैव-विद्युत तंत्र इलेक्ट्रिक ईल जैसी विद्युत डिस्चार्ज क्षमता विकसित कर ले।"
    },
    changes: {
      en: "Normal human contact and electronic interfaces would require very different electrical protection.",
      hi: "सामान्य मानवीय संपर्क और इलेक्ट्रॉनिक उपकरणों के लिए बहुत अलग विद्युत सुरक्षा की आवश्यकता होगी।"
    },
    why: {
      en: "Human nervous systems normally operate using very small electrical potential differences across cell membranes.",
      hi: "मानव तंत्रिका तंत्र सामान्यतः कोशिका झिल्लियों के पार बहुत छोटे विद्युत विभवांतर का उपयोग करता है।"
    },
    notice: {
      en: "Everyday contact with people and electronic devices could become an electrical engineering challenge.",
      hi: "लोगों और इलेक्ट्रॉनिक उपकरणों के साथ रोज़मर्रा का संपर्क एक विद्युत इंजीनियरिंग चुनौती बन सकता है।"
    },
    science: {
      en: "Electric voltage can be increased by arranging electrocyte-like cells in series, where Vtotal = ΣVi.",
      hi: "इलेक्ट्रोसाइट जैसी कोशिकाओं को श्रेणीक्रम में जोड़ने पर Vtotal = ΣVi के अनुसार कुल वोल्टेज बढ़ाया जा सकता है।"
    }
  },

  {
    id: 17,
    icon: "🌊",
    title: {
      en: "What If Oceans Lost All Their Salt?",
      hi: "क्या हो अगर महासागरों का सारा नमक गायब हो जाए?"
    },
    whatIf: {
      en: "Ocean salinity suddenly falls from its present level to nearly zero.",
      hi: "महासागरों की लवणता अचानक वर्तमान स्तर से घटकर लगभग शून्य हो जाए।"
    },
    changes: {
      en: "Marine ecosystems and the density-driven circulation of the oceans would be severely disrupted.",
      hi: "समुद्री पारिस्थितिक तंत्र और घनत्व-आधारित महासागरीय परिसंचरण गंभीर रूप से प्रभावित होंगे।"
    },
    why: {
      en: "Marine organisms are adapted to specific salinity conditions, and salinity contributes to ocean density differences.",
      hi: "समुद्री जीव विशेष लवणता परिस्थितियों के अनुकूल होते हैं और लवणता महासागर के घनत्व अंतर में योगदान देती है।"
    },
    notice: {
      en: "Marine ecosystems would change dramatically and global ocean circulation could weaken.",
      hi: "समुद्री पारिस्थितिक तंत्र में बड़ा बदलाव आएगा और वैश्विक महासागरीय परिसंचरण कमजोर हो सकता है।"
    },
    science: {
      en: "Osmotic pressure and density gradients are strongly influenced by dissolved salts.",
      hi: "परासरण दाब और घनत्व प्रवणता घुले हुए लवणों से बहुत प्रभावित होती हैं।"
    }
  },

  {
    id: 18,
    icon: "🪐",
    title: {
      en: "What If Jupiter Swapped Places with Mars?",
      hi: "क्या हो अगर बृहस्पति और मंगल अपनी जगह बदल लें?"
    },
    whatIf: {
      en: "Jupiter moves near Mars' present orbital region while Mars moves outward.",
      hi: "बृहस्पति मंगल की वर्तमान कक्षा के पास आ जाए और मंगल बाहरी कक्षा में चला जाए।"
    },
    changes: {
      en: "The gravitational architecture of the Solar System would change dramatically.",
      hi: "सौरमंडल की गुरुत्वीय संरचना में बहुत बड़ा बदलाव आ जाएगा।"
    },
    why: {
      en: "Jupiter is extremely massive and strongly influences the orbits of many smaller bodies.",
      hi: "बृहस्पति अत्यंत विशाल है और कई छोटे पिंडों की कक्षाओं को बहुत प्रभावित करता है।"
    },
    notice: {
      en: "Asteroid orbits and planetary orbital stability could be strongly disturbed.",
      hi: "क्षुद्रग्रहों की कक्षाएँ और ग्रहों की कक्षीय स्थिरता गंभीर रूप से प्रभावित हो सकती है।"
    },
    science: {
      en: "N-body gravitational dynamics and orbital resonance determine how planetary systems respond to massive objects.",
      hi: "N-body गुरुत्वीय गतिकी और कक्षीय अनुनाद यह निर्धारित करते हैं कि ग्रह प्रणालियाँ विशाल पिंडों पर कैसे प्रतिक्रिया देती हैं।"
    }
  },

  {
    id: 19,
    icon: "🕳️",
    title: {
      en: "What If a Coin-Sized Black Hole Appeared on Earth?",
      hi: "क्या हो अगर पृथ्वी पर सिक्के के आकार का ब्लैक होल दिखाई दे?"
    },
    whatIf: {
      en: "A black hole with an event horizon comparable to the size of a small coin appears on Earth.",
      hi: "छोटे सिक्के के आकार के बराबर घटना क्षितिज वाला ब्लैक होल पृथ्वी पर दिखाई दे जाए।"
    },
    changes: {
      en: "Its enormous mass would create an extreme gravitational environment.",
      hi: "इसके अत्यधिक बड़े द्रव्यमान के कारण अत्यंत शक्तिशाली गुरुत्वीय वातावरण बन जाएगा।"
    },
    why: {
      en: "A black hole's Schwarzschild radius is directly related to its mass.",
      hi: "ब्लैक होल की श्वार्ज़शिल्ड त्रिज्या उसके द्रव्यमान से सीधे संबंधित होती है।"
    },
    notice: {
      en: "Nearby matter and Earth's structure would experience extreme gravitational effects.",
      hi: "पास का पदार्थ और पृथ्वी की संरचना अत्यधिक गुरुत्वीय प्रभावों का अनुभव करेगी।"
    },
    science: {
      en: "The Schwarzschild radius is rs = 2GM/c², linking event-horizon size to mass.",
      hi: "श्वार्ज़शिल्ड त्रिज्या rs = 2GM/c² होती है, जो घटना क्षितिज के आकार को द्रव्यमान से जोड़ती है।"
    }
  },

  {
    id: 20,
    icon: "🌱",
    title: {
      en: "What If Photosynthesis Efficiency Reached 100%?",
      hi: "क्या हो अगर प्रकाश संश्लेषण की दक्षता 100% हो जाए?"
    },
    whatIf: {
      en: "Plants convert essentially all absorbed useful solar photon energy into chemical energy.",
      hi: "पौधे अवशोषित उपयोगी सौर फोटॉन ऊर्जा का लगभग पूरा भाग रासायनिक ऊर्जा में बदलने लगें।"
    },
    changes: {
      en: "Plant productivity would rise dramatically, atmospheric carbon dioxide could fall rapidly, and oxygen production could increase.",
      hi: "पौधों की उत्पादकता बहुत बढ़ जाएगी, वायुमंडलीय CO₂ तेजी से घट सकती है और ऑक्सीजन उत्पादन बढ़ सकता है।"
    },
    why: {
      en: "Photosynthesis is limited by biochemical steps, energy losses, and the efficiency of light conversion.",
      hi: "प्रकाश संश्लेषण जैव-रासायनिक चरणों, ऊर्जा हानि और प्रकाश रूपांतरण की दक्षता से सीमित होता है।"
    },
    notice: {
      en: "Plant growth and global carbon cycling would change dramatically.",
      hi: "पौधों की वृद्धि और वैश्विक कार्बन चक्र में बहुत बड़ा बदलाव आएगा।"
    },
    science: {
      en: "The simplified photosynthesis equation is 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂.",
      hi: "प्रकाश संश्लेषण का सरल समीकरण 6CO₂ + 6H₂O + प्रकाश → C₆H₁₂O₆ + 6O₂ है।"
    }
  },


  // =========================================================
  // 21–35 : NEW WHAT IF SCENARIOS
  // =========================================================

  {
    id: 21,
    icon: "🌎",
    title: {
      en: "What If Earth's Atmosphere Disappeared?",
      hi: "क्या हो अगर पृथ्वी का वायुमंडल गायब हो जाए?"
    },
    whatIf: {
      en: "Earth suddenly loses its atmosphere while the planet itself remains intact.",
      hi: "पृथ्वी अपना वायुमंडल अचानक खो दे, जबकि ग्रह स्वयं बना रहे।"
    },
    changes: {
      en: "Air pressure would vanish, weather would stop, and the surface would experience extreme temperature changes.",
      hi: "वायुदाब समाप्त हो जाएगा, मौसम की प्रक्रियाएँ रुक जाएँगी और सतह पर तापमान में अत्यधिक बदलाव होगा।"
    },
    why: {
      en: "The atmosphere provides pressure, transports heat, and interacts with incoming solar radiation.",
      hi: "वायुमंडल दाब प्रदान करता है, ऊष्मा का परिवहन करता है और आने वाले सौर विकिरण के साथ अंतःक्रिया करता है।"
    },
    notice: {
      en: "Liquid water would become unstable at the surface and the sky would appear black even during daytime.",
      hi: "सतह पर तरल पानी स्थिर नहीं रहेगा और दिन में भी आकाश काला दिखाई देगा।"
    },
    science: {
      en: "Atmospheric pressure and the greenhouse effect strongly influence surface temperature and the stability of liquid water.",
      hi: "वायुमंडलीय दाब और ग्रीनहाउस प्रभाव सतह के तापमान तथा तरल पानी की स्थिरता को बहुत प्रभावित करते हैं।"
    }
  },

  {
    id: 22,
    icon: "🌊",
    title: {
      en: "What If Earth's Oceans Suddenly Evaporated?",
      hi: "क्या हो अगर पृथ्वी के महासागर अचानक वाष्पित हो जाएँ?"
    },
    whatIf: {
      en: "Most of Earth's liquid ocean water instantly becomes water vapor.",
      hi: "पृथ्वी का अधिकांश महासागरीय तरल पानी अचानक जलवाष्प में बदल जाए।"
    },
    changes: {
      en: "Atmospheric humidity would become enormous and Earth's climate system would be completely disrupted.",
      hi: "वायुमंडलीय आर्द्रता अत्यधिक बढ़ जाएगी और पृथ्वी की जलवायु प्रणाली पूरी तरह बदल जाएगी।"
    },
    why: {
      en: "Oceans store and transport enormous amounts of heat and water through the global water cycle.",
      hi: "महासागर जल चक्र के माध्यम से विशाल मात्रा में ऊष्मा और पानी को संग्रहित तथा परिवहन करते हैं।"
    },
    notice: {
      en: "Cloud formation, rainfall, surface temperature, and ecosystems would all change dramatically.",
      hi: "बादल निर्माण, वर्षा, सतही तापमान और पारिस्थितिक तंत्र सभी में बड़ा बदलाव आएगा।"
    },
    science: {
      en: "Evaporation absorbs latent heat, while atmospheric water vapor strongly affects energy balance.",
      hi: "वाष्पीकरण गुप्त ऊष्मा अवशोषित करता है, जबकि जलवाष्प पृथ्वी के ऊर्जा संतुलन को बहुत प्रभावित करती है।"
    }
  },

  {
    id: 23,
    icon: "🌡️",
    title: {
      en: "What If Temperature Stopped Affecting Matter?",
      hi: "क्या हो अगर तापमान पदार्थ को प्रभावित करना बंद कर दे?"
    },
    whatIf: {
      en: "Changes in temperature no longer alter the thermal motion or properties of matter.",
      hi: "तापमान में बदलाव पदार्थ की तापीय गति या उसके गुणों को प्रभावित करना बंद कर दे।"
    },
    changes: {
      en: "Heating and cooling would no longer produce many familiar physical changes.",
      hi: "गर्म करने और ठंडा करने से होने वाले कई सामान्य भौतिक परिवर्तन समाप्त हो जाएँगे।"
    },
    why: {
      en: "Temperature is closely connected to the thermal energy and microscopic motion of particles.",
      hi: "तापमान कणों की तापीय ऊर्जा और सूक्ष्म गति से गहराई से जुड़ा होता है।"
    },
    notice: {
      en: "Expansion, contraction, phase changes, and many thermal processes would behave completely differently.",
      hi: "प्रसार, संकुचन, अवस्था परिवर्तन और कई तापीय प्रक्रियाएँ पूरी तरह अलग तरीके से व्यवहार करेंगी।"
    },
    science: {
      en: "Thermal energy influences particle motion and macroscopic properties such as volume and phase.",
      hi: "तापीय ऊर्जा कणों की गति और आयतन तथा अवस्था जैसे स्थूल गुणों को प्रभावित करती है।"
    }
  },

  {
    id: 24,
    icon: "🔦",
    title: {
      en: "What If Light Traveled Half as Fast?",
      hi: "क्या हो अगर प्रकाश आधी गति से चले?"
    },
    whatIf: {
      en: "The speed of light in vacuum suddenly becomes half its present value.",
      hi: "निर्वात में प्रकाश की गति अचानक अपनी वर्तमान गति की आधी हो जाए।"
    },
    changes: {
      en: "Communication across space would take longer and many electromagnetic and relativistic relationships would change.",
      hi: "अंतरिक्ष में संचार में अधिक समय लगेगा और कई विद्युतचुंबकीय तथा सापेक्षिक संबंध बदल जाएँगे।"
    },
    why: {
      en: "The speed of light is a fundamental constant that appears throughout electromagnetism and relativity.",
      hi: "प्रकाश की गति एक मौलिक नियतांक है जो विद्युतचुंबकत्व और सापेक्षता में महत्वपूर्ण भूमिका निभाता है।"
    },
    notice: {
      en: "We would see distant astronomical objects with a different delay, and measurements based on c would change.",
      hi: "दूर की खगोलीय वस्तुओं को देखने में अलग समय-विलंब होगा और c पर आधारित माप बदल जाएँगे।"
    },
    science: {
      en: "The relation E = mc² connects mass and energy through the speed of light.",
      hi: "E = mc² द्रव्यमान और ऊर्जा को प्रकाश की गति के माध्यम से जोड़ता है।"
    }
  },

  {
    id: 25,
    icon: "🌌",
    title: {
      en: "What If Space Had Earth's Atmosphere Everywhere?",
      hi: "क्या हो अगर पूरे अंतरिक्ष में पृथ्वी जैसा वायुमंडल हो?"
    },
    whatIf: {
      en: "The space between planets is filled with a dense atmospheric medium.",
      hi: "ग्रहों के बीच का अंतरिक्ष एक घने वायुमंडलीय माध्यम से भर जाए।"
    },
    changes: {
      en: "Spacecraft would experience strong drag and sound could propagate between planets.",
      hi: "अंतरिक्ष यान पर मजबूत वायु प्रतिरोध लगेगा और ग्रहों के बीच ध्वनि यात्रा कर सकेगी।"
    },
    why: {
      en: "A dense medium creates friction and can carry mechanical waves.",
      hi: "घना माध्यम घर्षण पैदा करता है और यांत्रिक तरंगों को आगे ले जा सकता है।"
    },
    notice: {
      en: "Orbital motion, spacecraft design, astronomy, and communication would all be transformed.",
      hi: "कक्षीय गति, अंतरिक्ष यान की डिजाइन, खगोल विज्ञान और संचार सभी बदल जाएँगे।"
    },
    science: {
      en: "Drag depends on density, velocity, area, and drag coefficient: Fd = ½ρv²CdA.",
      hi: "वायु प्रतिरोध घनत्व, वेग, क्षेत्रफल और ड्रैग गुणांक पर निर्भर करता है: Fd = ½ρv²CdA।"
    }
  },

  {
    id: 26,
    icon: "🧲",
    title: {
      en: "What If Gravity Became Repulsive?",
      hi: "क्या हो अगर गुरुत्वाकर्षण आकर्षण के बजाय प्रतिकर्षण करे?"
    },
    whatIf: {
      en: "Gravity between ordinary masses suddenly becomes repulsive.",
      hi: "सामान्य द्रव्यमानों के बीच गुरुत्वाकर्षण अचानक प्रतिकर्षी बल बन जाए।"
    },
    changes: {
      en: "Planets, stars, moons, and galaxies would no longer remain bound by ordinary gravitational attraction.",
      hi: "ग्रह, तारे, चंद्रमा और आकाशगंगाएँ सामान्य गुरुत्वीय आकर्षण से बंधी नहीं रह पाएँगी।"
    },
    why: {
      en: "Ordinary gravity attracts masses and provides the binding force for planetary and stellar systems.",
      hi: "सामान्य गुरुत्वाकर्षण द्रव्यमानों को आकर्षित करता है और ग्रहों तथा तारकीय प्रणालियों को बाँधे रखता है।"
    },
    notice: {
      en: "Orbital systems would rapidly become unstable and matter would tend to separate.",
      hi: "कक्षीय प्रणालियाँ तेजी से अस्थिर हो जाएँगी और पदार्थ अलग होने की प्रवृत्ति दिखाएगा।"
    },
    science: {
      en: "Stable orbits depend on the balance between gravitational attraction and orbital motion.",
      hi: "स्थिर कक्षाएँ गुरुत्वीय आकर्षण और कक्षीय गति के संतुलन पर निर्भर करती हैं।"
    }
  },

  {
    id: 27,
    icon: "🌙",
    title: {
      en: "What If Earth Had Two Moons?",
      hi: "क्या हो अगर पृथ्वी के दो चंद्रमा होते?"
    },
    whatIf: {
      en: "Earth suddenly gains a second moon in a stable orbit.",
      hi: "पृथ्वी को अचानक एक दूसरा चंद्रमा मिल जाए जो स्थिर कक्षा में हो।"
    },
    changes: {
      en: "Tidal patterns, night-sky appearance, and long-term orbital interactions would become more complex.",
      hi: "ज्वार-भाटा, रात के आकाश का दृश्य और दीर्घकालीन कक्षीय अंतःक्रियाएँ अधिक जटिल हो जाएँगी।"
    },
    why: {
      en: "Each moon would exert its own gravitational influence on Earth and the other moon.",
      hi: "दोनों चंद्रमा पृथ्वी और एक-दूसरे पर अपना गुरुत्वीय प्रभाव डालेंगे।"
    },
    notice: {
      en: "Some coastlines could experience unusual combinations of high and low tides.",
      hi: "कुछ तटीय क्षेत्रों में ज्वार-भाटा के असामान्य संयोजन दिखाई दे सकते हैं।"
    },
    science: {
      en: "Multiple-body orbital systems are governed by interacting gravitational forces and orbital resonances.",
      hi: "बहु-पिंड कक्षीय प्रणालियाँ परस्पर गुरुत्वीय बलों और कक्षीय अनुनाद द्वारा नियंत्रित होती हैं।"
    }
  },

  {
    id: 28,
    icon: "🌳",
    title: {
      en: "What If Trees Could Grow 10 Times Faster?",
      hi: "क्या हो अगर पेड़ 10 गुना तेजी से बढ़ने लगें?"
    },
    whatIf: {
      en: "Trees and other large plants grow at ten times their normal biological rate.",
      hi: "पेड़ और बड़े पौधे अपनी सामान्य जैविक दर से दस गुना तेजी से बढ़ने लगें।"
    },
    changes: {
      en: "Forests would expand rapidly and the global carbon cycle would change significantly.",
      hi: "वन तेजी से फैलेंगे और वैश्विक कार्बन चक्र में बड़ा बदलाव आएगा।"
    },
    why: {
      en: "Plant growth depends on photosynthesis, water, nutrients, cell division, and environmental conditions.",
      hi: "पौधों की वृद्धि प्रकाश संश्लेषण, पानी, पोषक तत्वों, कोशिका विभाजन और पर्यावरणीय परिस्थितियों पर निर्भर करती है।"
    },
    notice: {
      en: "Competition for sunlight, water, and nutrients would intensify dramatically.",
      hi: "प्रकाश, पानी और पोषक तत्वों के लिए प्रतिस्पर्धा बहुत बढ़ जाएगी।"
    },
    science: {
      en: "Plant biomass accumulation depends on carbon fixation, respiration, nutrient availability, and energy balance.",
      hi: "पौधों के जैवभार का निर्माण कार्बन स्थिरीकरण, श्वसन, पोषक तत्वों और ऊर्जा संतुलन पर निर्भर करता है।"
    }
  },

  {
    id: 29,
    icon: "🫁",
    title: {
      en: "What If Humans Didn't Need Oxygen?",
      hi: "क्या हो अगर मनुष्यों को ऑक्सीजन की आवश्यकता न हो?"
    },
    whatIf: {
      en: "Human cells can produce sufficient usable energy without relying on oxygen.",
      hi: "मानव कोशिकाएँ ऑक्सीजन पर निर्भर हुए बिना पर्याप्त उपयोगी ऊर्जा बना सकें।"
    },
    changes: {
      en: "Human survival would no longer depend on continuous oxygen supply in the same way.",
      hi: "मानव जीवन उसी प्रकार लगातार ऑक्सीजन की आपूर्ति पर निर्भर नहीं रहेगा।"
    },
    why: {
      en: "Aerobic respiration normally uses oxygen as the final electron acceptor in cellular energy production.",
      hi: "वायवीय श्वसन में ऑक्सीजन सामान्यतः कोशिकीय ऊर्जा उत्पादन में अंतिम इलेक्ट्रॉन स्वीकर्ता के रूप में काम करती है।"
    },
    notice: {
      en: "High-altitude environments and many low-oxygen conditions would become much easier to tolerate.",
      hi: "अधिक ऊँचाई और कम ऑक्सीजन वाली कई परिस्थितियों को सहन करना बहुत आसान हो जाएगा।"
    },
    science: {
      en: "Cellular respiration converts chemical energy into ATP, with aerobic pathways normally producing much more ATP than anaerobic pathways.",
      hi: "कोशिकीय श्वसन रासायनिक ऊर्जा को ATP में बदलता है और सामान्यतः वायवीय मार्ग अवायवीय मार्गों से अधिक ATP बनाते हैं।"
    }
  },

  {
    id: 30,
    icon: "🔬",
    title: {
      en: "What If Atoms Were 10 Times Larger?",
      hi: "क्या हो अगर परमाणु 10 गुना बड़े हो जाएँ?"
    },
    whatIf: {
      en: "The characteristic size of atoms suddenly becomes ten times larger.",
      hi: "परमाणुओं का विशिष्ट आकार अचानक दस गुना बड़ा हो जाए।"
    },
    changes: {
      en: "The structure and density of ordinary matter would change dramatically.",
      hi: "सामान्य पदार्थ की संरचना और घनत्व में बहुत बड़ा बदलाव आएगा।"
    },
    why: {
      en: "The size of atoms is determined by quantum behavior of electrons and the electromagnetic interaction with nuclei.",
      hi: "परमाणुओं का आकार इलेक्ट्रॉनों के क्वांटम व्यवहार और नाभिक के साथ विद्युतचुंबकीय अंतःक्रिया से निर्धारित होता है।"
    },
    notice: {
      en: "Chemical bonds, material strength, density, and biological structures would all be affected.",
      hi: "रासायनिक बंध, पदार्थों की मजबूती, घनत्व और जैविक संरचनाएँ सभी प्रभावित होंगी।"
    },
    science: {
      en: "Atomic length scales arise from quantum mechanics and electromagnetic forces.",
      hi: "परमाणु की लंबाई के पैमाने क्वांटम यांत्रिकी और विद्युतचुंबकीय बलों से निर्धारित होते हैं।"
    }
  },

  {
    id: 31,
    icon: "🌧️",
    title: {
      en: "What If Clouds Never Released Rain?",
      hi: "क्या हो अगर बादल कभी बारिश न करें?"
    },
    whatIf: {
      en: "Clouds continue forming but water never falls back to Earth's surface as rain or snow.",
      hi: "बादल बनते रहें लेकिन पानी वर्षा या बर्फ के रूप में पृथ्वी की सतह पर वापस न गिरे।"
    },
    changes: {
      en: "The natural water cycle would be severely disrupted and freshwater availability would decline.",
      hi: "प्राकृतिक जल चक्र गंभीर रूप से बाधित हो जाएगा और मीठे पानी की उपलब्धता घट जाएगी।"
    },
    why: {
      en: "Precipitation returns atmospheric water to land and oceans, completing an essential part of the water cycle.",
      hi: "वर्षण वायुमंडलीय पानी को भूमि और महासागरों तक वापस पहुँचाता है और जल चक्र का महत्वपूर्ण भाग पूरा करता है।"
    },
    notice: {
      en: "Rivers, lakes, soil moisture, agriculture, and ecosystems would gradually change.",
      hi: "नदियाँ, झीलें, मिट्टी की नमी, कृषि और पारिस्थितिक तंत्र धीरे-धीरे बदल जाएँगे।"
    },
    science: {
      en: "The water cycle depends on evaporation, condensation, precipitation, runoff, and groundwater movement.",
      hi: "जल चक्र वाष्पीकरण, संघनन, वर्षण, अपवाह और भूजल की गति पर निर्भर करता है।"
    }
  },

  {
    id: 32,
    icon: "🧬",
    title: {
      en: "What If DNA Could Never Mutate?",
      hi: "क्या हो अगर DNA में कभी उत्परिवर्तन न हो?"
    },
    whatIf: {
      en: "Genetic material becomes perfectly resistant to all mutations.",
      hi: "आनुवंशिक पदार्थ सभी प्रकार के उत्परिवर्तन के प्रति पूरी तरह प्रतिरोधी हो जाए।"
    },
    changes: {
      en: "Genetic variation would become extremely limited, changing the long-term course of evolution.",
      hi: "आनुवंशिक विविधता बहुत सीमित हो जाएगी और विकास की दीर्घकालीन दिशा बदल जाएगी।"
    },
    why: {
      en: "Mutation introduces new genetic variation that can contribute to evolution.",
      hi: "उत्परिवर्तन नई आनुवंशिक विविधता उत्पन्न करता है जो विकास में योगदान दे सकती है।"
    },
    notice: {
      en: "Populations would have much less genetic variation to adapt to changing environments.",
      hi: "बदलते वातावरण के अनुकूल होने के लिए आबादी में बहुत कम आनुवंशिक विविधता होगी।"
    },
    science: {
      en: "Evolution depends on heritable variation, selection, genetic drift, and other population processes.",
      hi: "विकास वंशानुगत विविधता, प्राकृतिक चयन, आनुवंशिक बहाव और अन्य जनसंख्या प्रक्रियाओं पर निर्भर करता है।"
    }
  },

  {
    id: 33,
    icon: "🔥",
    title: {
      en: "What If Fire Needed No Oxygen?",
      hi: "क्या हो अगर आग को ऑक्सीजन की आवश्यकता न हो?"
    },
    whatIf: {
      en: "Combustion can sustain itself without atmospheric oxygen.",
      hi: "दहन वायुमंडलीय ऑक्सीजन के बिना भी जारी रह सके।"
    },
    changes: {
      en: "Combustion would no longer be limited by the availability of oxygen in the surrounding environment.",
      hi: "दहन अब आसपास उपलब्ध ऑक्सीजन की मात्रा से सीमित नहीं रहेगा।"
    },
    why: {
      en: "Ordinary combustion is a chemical oxidation process that normally requires an oxidizer.",
      hi: "सामान्य दहन एक रासायनिक ऑक्सीकरण प्रक्रिया है जिसमें सामान्यतः ऑक्सीकारक की आवश्यकता होती है।"
    },
    notice: {
      en: "The behavior of flames and many energy-releasing chemical reactions would be fundamentally different.",
      hi: "लपटों का व्यवहार और कई ऊर्जा-उत्सर्जक रासायनिक अभिक्रियाएँ मूल रूप से अलग होंगी।"
    },
    science: {
      en: "Combustion releases chemical energy through favorable reaction pathways involving an oxidizing agent.",
      hi: "दहन ऑक्सीकारक से जुड़ी अनुकूल रासायनिक अभिक्रियाओं के माध्यम से रासायनिक ऊर्जा मुक्त करता है।"
    }
  },

  {
    id: 34,
    icon: "🪐",
    title: {
      en: "What If Saturn Lost Its Rings?",
      hi: "क्या हो अगर शनि अपने छल्ले खो दे?"
    },
    whatIf: {
      en: "Saturn's famous ring system suddenly disappears.",
      hi: "शनि के प्रसिद्ध छल्ले अचानक गायब हो जाएँ।"
    },
    changes: {
      en: "Saturn's appearance would change dramatically, while the planet itself would continue orbiting normally.",
      hi: "शनि का दृश्य रूप बहुत बदल जाएगा, जबकि ग्रह स्वयं सामान्य रूप से सूर्य की परिक्रमा करता रहेगा।"
    },
    why: {
      en: "Saturn's rings are made primarily of countless particles of ice and rock orbiting the planet.",
      hi: "शनि के छल्ले मुख्यतः बर्फ और चट्टान के असंख्य कणों से बने हैं जो ग्रह की परिक्रमा करते हैं।"
    },
    notice: {
      en: "From Earth, one of the Solar System's most recognizable planetary features would disappear.",
      hi: "पृथ्वी से देखने पर सौरमंडल की सबसे पहचानने योग्य ग्रह विशेषताओं में से एक गायब हो जाएगी।"
    },
    science: {
      en: "Planetary rings are governed by orbital motion, gravity, collisions, and tidal effects.",
      hi: "ग्रहों के छल्ले कक्षीय गति, गुरुत्वाकर्षण, टक्करों और ज्वारीय प्रभावों द्वारा नियंत्रित होते हैं।"
    }
  },

  {
    id: 35,
    icon: "🌠",
    title: {
      en: "What If Earth Moved Twice as Fast Around the Sun?",
      hi: "क्या हो अगर पृथ्वी सूर्य की परिक्रमा दोगुनी गति से करने लगे?"
    },
    whatIf: {
      en: "Earth's orbital speed around the Sun suddenly doubles.",
      hi: "पृथ्वी की सूर्य के चारों ओर कक्षीय गति अचानक दोगुनी हो जाए।"
    },
    changes: {
      en: "Earth would no longer remain in its current circular orbit and its path around the Sun would change dramatically.",
      hi: "पृथ्वी अपनी वर्तमान लगभग वृत्ताकार कक्षा में नहीं रह पाएगी और सूर्य के चारों ओर उसका पथ बहुत बदल जाएगा।"
    },
    why: {
      en: "Orbital motion depends on the balance between gravitational attraction and tangential velocity.",
      hi: "कक्षीय गति गुरुत्वीय आकर्षण और स्पर्शरेखीय वेग के संतुलन पर निर्भर करती है।"
    },
    notice: {
      en: "Earth's distance from the Sun would vary strongly along its new trajectory.",
      hi: "नई कक्षा में पृथ्वी की सूर्य से दूरी काफी बदलती रहेगी।"
    },
    science: {
      en: "Orbital energy and angular momentum determine whether an object remains bound, enters an elliptical orbit, or escapes.",
      hi: "कक्षीय ऊर्जा और कोणीय संवेग यह निर्धारित करते हैं कि कोई पिंड बंधी हुई, दीर्घवृत्तीय कक्षा में रहेगा या पलायन करेगा।"
    }
  }

];
