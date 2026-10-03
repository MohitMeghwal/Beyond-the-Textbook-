// data/how-science-changes-world.js
// Visuals use emoji fallbacks; image can be added later per topic.

const howScienceChangesWorld = [
  {
    id:"topic-1", visual:"💉", image:"",
    title:{en:"Vaccines Wiping Out Diseases",hi:"टीकों से बीमारियों का खात्मा"},
    description:{en:"Vaccines teach the body to defend itself against a disease before it ever causes harm — a simple idea that has saved more lives than almost any other medical breakthrough in history.",hi:"टीके शरीर को किसी बीमारी के असली नुकसान पहुँचाने से पहले ही उससे बचाव करना सिखाते हैं — यह एक सरल विचार है जिसने इतिहास की लगभग किसी भी अन्य चिकित्सा उपलब्धि से ज़्यादा जानें बचाई हैं।"},
    learnMore:{
      howItWorks:{
        en:"A weakened form of the germ is introduced into the body, enough for the immune system to learn how to fight it without causing real illness. The body remembers this defense for years, so the real disease is fought off almost instantly if it ever appears.",
        hi:"कीटाणु का एक कमज़ोर रूप शरीर में डाला जाता है, जो बिना असली बीमारी पैदा किए, प्रतिरक्षा प्रणाली को उससे लड़ना सिखाने के लिए पर्याप्त होता है। शरीर इस बचाव को सालों तक याद रखता है, इसलिए असली बीमारी आने पर वह लगभग तुरंत उससे लड़ लेता है।"
      },
      impact:{
        en:"Smallpox, which once killed millions every year, has been completely wiped out. Polio, which paralyzed thousands of children, has been eliminated from most of the world.",
        hi:"चेचक, जो कभी हर साल लाखों लोगों की जान लेती थी, पूरी तरह खत्म हो चुकी है। पोलियो, जो हज़ारों बच्चों को लकवाग्रस्त कर देता था, दुनिया के अधिकतर हिस्सों से मिट चुका है।"
      }
    }
  },

  {
    id:"topic-2", visual:"⚡", image:"",
    title:{en:"Electric Vehicles Cutting Pollution",hi:"इलेक्ट्रिक वाहनों से घटता प्रदूषण"},
    description:{en:"Electric vehicles run on stored electrical energy instead of burning fuel, helping cities cut air pollution and reduce dependence on fossil fuels.",hi:"इलेक्ट्रिक वाहन ईंधन जलाने के बजाय संचित विद्युत ऊर्जा से चलते हैं, जिससे शहरों में वायु प्रदूषण घटाने और जीवाश्म ईंधन पर निर्भरता कम करने में मदद मिलती है।"},
    learnMore:{
      howItWorks:{
        en:"Inside the motor, electric current interacts with magnets to create the force that turns the wheels, with no combustion or exhaust involved at all.",
        hi:"मोटर के अंदर, विद्युत धारा चुंबकों के साथ मिलकर वह बल बनाती है जो पहियों को घुमाता है, जिसमें किसी भी तरह का दहन या धुआँ शामिल नहीं होता।"
      },
      impact:{
        en:"Millions of electric vehicles on the road today are helping lower emissions in major cities and slow down climate change.",
        hi:"आज सड़कों पर मौजूद लाखों इलेक्ट्रिक वाहन बड़े शहरों में उत्सर्जन घटाने और जलवायु परिवर्तन को धीमा करने में मदद कर रहे हैं।"
      }
    }
  },

  {
    id:"topic-3", visual:"🌐", image:"",
    title:{en:"The Internet Connecting Billions",hi:"इंटरनेट से जुड़ते अरबों लोग"},
    description:{en:"A web of glass cables carrying pulses of light now connects nearly every corner of the world to information, people, and opportunity.",hi:"प्रकाश की तरंगें ले जाने वाली काँच की केबलों का जाल अब दुनिया के लगभग हर कोने को जानकारी, लोगों, और अवसरों से जोड़ देता है।"},
    learnMore:{
      howItWorks:{
        en:"Data travels as light through thin optical fiber cables laid under oceans and across continents, reflecting internally to stay on course over huge distances.",
        hi:"डेटा समुद्रों के नीचे और महाद्वीपों के पार बिछी पतली ऑप्टिकल फाइबर केबलों में प्रकाश के रूप में यात्रा करता है, और बड़ी दूरियों तक अपने रास्ते पर बने रहने के लिए अंदर ही परावर्तित होता रहता है।"
      },
      impact:{
        en:"Billions of people can now access education, healthcare information, and each other instantly, regardless of where they live.",
        hi:"अब अरबों लोग, चाहे वे कहीं भी रहते हों, तुरंत शिक्षा, स्वास्थ्य जानकारी, और एक-दूसरे तक पहुँच पाते हैं।"
      }
    }
  },

  {
    id:"topic-4", visual:"🤖", image:"",
    title:{en:"Robots Transforming Manufacturing",hi:"रोबोट से बदलता विनिर्माण"},
    description:{en:"Robotic arms now build everything from cars to phones with a speed, precision, and consistency no human hand could ever match.",hi:"रोबोटिक भुजाएँ अब कारों से लेकर फोन तक सब कुछ ऐसी गति, सटीकता, और निरंतरता से बनाती हैं जो किसी इंसानी हाथ से कभी संभव नहीं।"},
    learnMore:{
      howItWorks:{
        en:"Motors at each joint, controlled by precise electrical signals, let the arm move to exact positions over and over without ever tiring.",
        hi:"हर जोड़ पर लगी मोटरें, सटीक विद्युत संकेतों से नियंत्रित होकर, भुजा को बिना थके बार-बार सटीक स्थिति तक पहुँचाती हैं।"
      },
      impact:{
        en:"Factories can now produce goods faster, more safely, and with fewer errors than ever before.",
        hi:"फैक्ट्रियाँ अब पहले से कहीं तेज़, सुरक्षित, और कम गलतियों के साथ उत्पाद बना पाती हैं।"
      }
    }
  },

  {
    id:"topic-5", visual:"🛰️", image:"",
    title:{en:"Accurate Weather Forecasting",hi:"मौसम की सटीक जानकारी"},
    description:{en:"Satellites orbiting Earth give us detailed forecasts days in advance, helping people prepare before storms and floods ever arrive.",hi:"पृथ्वी की परिक्रमा करते उपग्रह हमें दिनों पहले विस्तृत पूर्वानुमान देते हैं, जिससे तूफान और बाढ़ आने से पहले ही लोग तैयारी कर पाते हैं।"},
    learnMore:{
      howItWorks:{
        en:"Weather satellites constantly photograph cloud patterns and measure temperature and moisture in the atmosphere, feeding this data into models that predict what the weather will do next.",
        hi:"मौसम उपग्रह लगातार बादलों के पैटर्न की तस्वीरें लेते हैं और वायुमंडल में तापमान व नमी को मापते हैं, और इस डेटा को ऐसे मॉडलों में डालते हैं जो बताते हैं कि अगला मौसम कैसा होगा।"
      },
      impact:{
        en:"Early warnings from this system have saved countless lives by giving people time to evacuate before major storms hit.",
        hi:"इस प्रणाली से मिलने वाली पहले की चेतावनियों ने बड़े तूफान आने से पहले लोगों को सुरक्षित जगह जाने का समय देकर अनगिनत जानें बचाई हैं।"
      }
    }
  },

  {
    id:"topic-6", visual:"🌱", image:"",
    title:{en:"Genetically Improved Crops Feeding More People",hi:"बेहतर फसलों से भरता अधिक पेट"},
    description:{en:"Crops bred to resist pests and grow faster are helping feed a global population that keeps growing every year.",hi:"कीटों से बचने और तेज़ी से उगने के लिए सुधारी गई फसलें, हर साल बढ़ती वैश्विक आबादी का पेट भरने में मदद कर रही हैं।"},
    learnMore:{
      howItWorks:{
        en:"A specific helpful trait, like pest resistance, is introduced directly into a crop's genetic material, so it appears reliably in every plant grown from those seeds.",
        hi:"कीट प्रतिरोधकता जैसा कोई विशेष उपयोगी गुण सीधे फसल की आनुवंशिक सामग्री में शामिल किया जाता है, ताकि वह उन बीजों से उगाए गए हर पौधे में निश्चित रूप से दिखाई दे।"
      },
      impact:{
        en:"These crops have increased food production and reduced crop losses in many parts of the world.",
        hi:"इन फसलों ने दुनिया के कई हिस्सों में खाद्य उत्पादन बढ़ाया है और फसल की हानि को कम किया है।"
      }
    }
  },

  {
    id:"topic-7", visual:"🧲", image:"",
    title:{en:"MRI & X-ray Technology",hi:"एमआरआई और एक्स-रे तकनीक"},
    description:{en:"These machines let doctors see inside the human body without a single cut, making diagnosis faster and far less painful.",hi:"ये मशीनें डॉक्टरों को बिना कोई चीरा लगाए शरीर के अंदर देखने देती हैं, जिससे निदान तेज़ और बहुत कम दर्दनाक हो जाता है।"},
    learnMore:{
      howItWorks:{
        en:"An MRI machine uses a strong magnetic field to detect how particles inside the body's cells respond, building a detailed image, while an X-ray passes radiation through the body that is absorbed differently by bone and soft tissue.",
        hi:"एमआरआई मशीन एक शक्तिशाली चुंबकीय क्षेत्र का उपयोग करके यह पता लगाती है कि शरीर की कोशिकाओं के अंदर के कण कैसे प्रतिक्रिया करते हैं, जिससे एक विस्तृत चित्र बनता है, जबकि एक्स-रे शरीर से विकिरण गुज़ारती है जिसे हड्डी और कोमल ऊतक अलग-अलग तरीके से सोखते हैं।"
      },
      impact:{
        en:"Doctors can now study injuries, organs, and broken bones in detail without ever needing surgery just to look inside.",
        hi:"डॉक्टर अब सिर्फ अंदर देखने के लिए सर्जरी किए बिना, चोटों, अंगों, और टूटी हड्डियों का विस्तार से अध्ययन कर पाते हैं।"
      }
    }
  },

  {
    id:"topic-8", visual:"🌬️", image:"",
    title:{en:"Wind Energy Growing Fast",hi:"तेज़ी से बढ़ती पवन ऊर्जा"},
    description:{en:"Giant turbines are turning ordinary wind into one of the fastest-growing sources of electricity in the world.",hi:"विशाल टर्बाइन साधारण हवा को दुनिया में बिजली के सबसे तेज़ी से बढ़ते स्रोतों में से एक में बदल रहे हैं।"},
    learnMore:{
      howItWorks:{
        en:"Wind pushes against large blades, making them spin, and this spinning motion turns a generator that converts movement into electrical energy.",
        hi:"हवा बड़े ब्लेडों पर दबाव डालती है, जिससे वे घूमने लगते हैं, और यह घूर्णन गति एक जनरेटर को घुमाती है जो गति को विद्युत ऊर्जा में बदल देता है।"
      },
      impact:{
        en:"Entire regions can now run on clean electricity generated without burning any fuel or releasing pollution.",
        hi:"पूरे क्षेत्र अब बिना किसी ईंधन को जलाए या प्रदूषण फैलाए, स्वच्छ बिजली पर चल पाते हैं।"
      }
    }
  },

  {
    id:"topic-9", visual:"📡", image:"",
    title:{en:"Satellite Communication Reaching Remote Areas",hi:"दूरदराज़ इलाकों तक पहुँचता सैटेलाइट संचार"},
    description:{en:"Satellites bring phone signals, television, and internet to remote villages and ships at sea where cables could never easily reach.",hi:"उपग्रह दूरदराज़ गाँवों और समुद्र में जहाज़ों तक फोन सिग्नल, टेलीविज़न, और इंटरनेट पहुँचाते हैं, ऐसी जगहें जहाँ केबल आसानी से नहीं पहुँच सकतीं।"},
    learnMore:{
      howItWorks:{
        en:"A curved dish on the ground sends and receives signals to and from a satellite far above Earth, which relays them across huge distances instantly.",
        hi:"ज़मीन पर रखी एक घुमावदार डिश, पृथ्वी से बहुत ऊपर मौजूद एक उपग्रह से संकेत भेजती और प्राप्त करती है, जो उन्हें तुरंत बहुत बड़ी दूरियों तक पहुँचा देता है।"
      },
      impact:{
        en:"Communities once completely cut off from the world can now stay connected during emergencies and everyday life alike.",
        hi:"वे समुदाय जो कभी दुनिया से पूरी तरह कटे हुए थे, अब आपात स्थितियों में और रोज़मर्रा की ज़िंदगी में भी जुड़े रह पाते हैं।"
      }
    }
  },

  {
    id:"topic-10", visual:"💊", image:"",
    title:{en:"Antibiotics Saving Millions of Lives",hi:"एंटीबायोटिक से बचती लाखों जानें"},
    description:{en:"A medicine first found growing in mold went on to turn once-deadly bacterial infections into conditions treatable in just days.",hi:"फफूंद में उगती हुई पाई गई एक दवा ने कभी जानलेवा रहे जीवाणु संक्रमणों को कुछ ही दिनों में इलाज योग्य स्थिति में बदल दिया।"},
    learnMore:{
      howItWorks:{
        en:"Certain microorganisms naturally produce substances that kill or stop the growth of disease-causing bacteria, and scientists grow these microorganisms to extract medicine from them.",
        hi:"कुछ सूक्ष्मजीव स्वाभाविक रूप से ऐसे पदार्थ बनाते हैं जो बीमारी फैलाने वाले बैक्टीरिया को मार देते हैं या उनकी वृद्धि रोक देते हैं, और वैज्ञानिक इन सूक्ष्मजीवों को उगाकर उनसे दवा निकालते हैं।"
      },
      impact:{
        en:"Infections that once killed routinely are now treated so reliably that we rarely think of them as dangerous anymore.",
        hi:"वे संक्रमण जो कभी आम तौर पर जानलेवा होते थे, अब इतने भरोसेमंद तरीके से ठीक हो जाते हैं कि हम उन्हें शायद ही कभी खतरनाक मानते हैं।"
      }
    }
  },

  {
    id:"topic-11", visual:"📍", image:"",
    title:{en:"GPS Navigation Guiding the World",hi:"जीपीएस नेविगेशन से मिलता रास्ता"},
    description:{en:"A network of satellites lets anyone, anywhere on Earth, instantly find their exact location and the fastest route forward.",hi:"उपग्रहों का एक जाल पृथ्वी पर कहीं भी मौजूद किसी भी व्यक्ति को तुरंत अपनी सटीक स्थिति और सबसे तेज़ रास्ता जानने देता है।"},
    learnMore:{
      howItWorks:{
        en:"A device picks up timed signals from several satellites at once, and by comparing the tiny differences in when each signal arrives, it calculates an exact position on Earth.",
        hi:"एक उपकरण एक साथ कई उपग्रहों से समय-अंकित संकेत पकड़ता है, और हर संकेत के पहुँचने में आए मामूली अंतर की तुलना करके, पृथ्वी पर एक सटीक स्थिति की गणना करता है।"
      },
      impact:{
        en:"This same system now guides everything from everyday navigation apps to ships, planes, and emergency rescue operations.",
        hi:"यही प्रणाली अब रोज़मर्रा के नेविगेशन ऐप से लेकर जहाज़ों, हवाई जहाज़ों, और आपातकालीन बचाव अभियानों तक, सबका मार्गदर्शन करती है।"
      }
    }
  },

  {
    id:"topic-12", visual:"🧠", image:"",
    title:{en:"Artificial Intelligence Assisting Doctors",hi:"डॉक्टरों की मदद करता कृत्रिम बुद्धिमत्ता"},
    description:{en:"AI systems can now scan medical images and spot early signs of disease that even trained eyes might miss.",hi:"कृत्रिम बुद्धिमत्ता प्रणालियाँ अब मेडिकल इमेज को स्कैन करके बीमारी के ऐसे शुरुआती संकेत पहचान सकती हैं जो प्रशिक्षित आँखों से भी छूट सकते हैं।"},
    learnMore:{
      howItWorks:{
        en:"These systems are trained on thousands of medical images until they learn to recognize subtle patterns that signal disease, patterns too small or gradual for a human to easily notice.",
        hi:"इन प्रणालियों को हज़ारों मेडिकल इमेज पर प्रशिक्षित किया जाता है, जब तक वे बीमारी का संकेत देने वाले सूक्ष्म पैटर्न पहचानना न सीख लें, ऐसे पैटर्न जो इंसान के लिए आसानी से नोटिस करना मुश्किल होते हैं।"
      },
      impact:{
        en:"This is helping doctors diagnose conditions earlier and more accurately, which often makes treatment far more effective.",
        hi:"इससे डॉक्टरों को बीमारियों का निदान जल्दी और अधिक सटीकता से करने में मदद मिलती है, जिससे अक्सर इलाज कहीं अधिक प्रभावी हो जाता है।"
      }
    }
  },

  {
    id:"topic-13", visual:"☀️", image:"",
    title:{en:"Solar Energy Powering Homes",hi:"सौर ऊर्जा से रोशन होते घर"},
    description:{en:"Flat panels placed under open sky convert sunlight directly into electricity, no wires to a power plant needed.",hi:"खुले आसमान के नीचे रखे सपाट पैनल सूर्य की रौशनी को सीधे बिजली में बदल देते हैं, किसी पावर प्लांट से तार जोड़ने की ज़रूरत नहीं पड़ती।"},
    learnMore:{
      howItWorks:{
        en:"Solar panels are made of materials that release electrons when sunlight falls on them, and this movement of electrons is what creates a steady electric current.",
        hi:"सोलर पैनल ऐसे पदार्थों से बने होते हैं जो सूर्य की रौशनी पड़ने पर इलेक्ट्रॉन छोड़ते हैं, और इलेक्ट्रॉनों की यही गति एक लगातार विद्युत धारा बनाती है।"
      },
      impact:{
        en:"Homes, villages, and even satellites now generate their own clean electricity without burning any fuel.",
        hi:"घर, गाँव, और यहाँ तक कि उपग्रह भी अब बिना किसी ईंधन को जलाए, अपनी खुद की स्वच्छ बिजली बना पाते हैं।"
      }
    }
  },

  {
    id:"topic-14", visual:"🚄", image:"",
    title:{en:"High-Speed Trains Transforming Travel",hi:"हाई-स्पीड ट्रेनों से बदलता सफ़र"},
    description:{en:"Modern trains now connect cities hundreds of kilometers apart in just a few hours, changing how people travel.",hi:"आधुनिक ट्रेनें अब सैकड़ों किलोमीटर दूर शहरों को कुछ ही घंटों में जोड़ देती हैं, जिससे लोगों के यात्रा करने का तरीका बदल गया है।"},
    learnMore:{
      howItWorks:{
        en:"Many high-speed trains run on continuous electric current flowing into their motors, where it interacts with magnetic fields to generate smooth, powerful motion.",
        hi:"कई हाई-स्पीड ट्रेनें अपनी मोटरों में लगातार बहती विद्युत धारा से चलती हैं, जो चुंबकीय क्षेत्रों के साथ मिलकर सहज, शक्तिशाली गति उत्पन्न करती है।"
      },
      impact:{
        en:"Journeys that once took an entire day can now be completed before lunch, reshaping how cities and economies connect.",
        hi:"जो यात्राएँ कभी पूरा दिन लेती थीं, वे अब दोपहर के भोजन से पहले ही पूरी हो जाती हैं, जिससे शहरों और अर्थव्यवस्थाओं के जुड़ने का तरीका बदल गया है।"
      }
    }
  },

  {
    id:"topic-15", visual:"🧬", image:"",
    title:{en:"DNA Fingerprinting Solving Crimes",hi:"डीएनए फिंगरप्रिंटिंग से सुलझते अपराध"},
    description:{en:"A tiny biological sample can now identify a person with near-certainty, helping solve crimes once considered impossible to crack.",hi:"एक बेहद छोटा जैविक नमूना अब लगभग निश्चितता के साथ किसी व्यक्ति की पहचान कर सकता है, जिससे कभी असंभव समझे जाने वाले अपराध भी सुलझ जाते हैं।"},
    learnMore:{
      howItWorks:{
        en:"Every person's genetic material has a unique pattern, so comparing specific patterns from a sample to those of a known person can confirm a match with extremely high confidence.",
        hi:"हर व्यक्ति की आनुवंशिक सामग्री का एक अनोखा पैटर्न होता है, इसलिए किसी नमूने के विशेष पैटर्न की तुलना किसी ज्ञात व्यक्ति से करके, बेहद उच्च विश्वसनीयता के साथ मिलान की पुष्टि की जा सकती है।"
      },
      impact:{
        en:"This technique now helps solve crimes, identify victims, and confirm family relationships with scientific certainty.",
        hi:"यह तकनीक अब वैज्ञानिक निश्चितता के साथ अपराध सुलझाने, पीड़ितों की पहचान करने, और पारिवारिक संबंधों की पुष्टि करने में मदद करती है।"
      }
    }
  },

  {
    id:"topic-16", visual:"🌍", image:"",
    title:{en:"Satellites Watching Over Earth",hi:"पृथ्वी पर नज़र रखते उपग्रह"},
    description:{en:"Satellites orbiting high above constantly track our planet's forests, ice, and oceans, revealing changes no ground survey ever could.",hi:"ऊँचाई पर परिक्रमा करते उपग्रह लगातार हमारे ग्रह के जंगलों, बर्फ, और महासागरों पर नज़र रखते हैं, और ऐसे बदलाव दिखाते हैं जो कोई ज़मीनी सर्वेक्षण कभी नहीं दिखा सकता।"},
    learnMore:{
      howItWorks:{
        en:"Cameras and sensors on these satellites continuously photograph and measure Earth's surface from orbit, sending this data back for scientists to analyze.",
        hi:"इन उपग्रहों पर लगे कैमरे और संवेदक कक्षा से लगातार पृथ्वी की सतह की तस्वीरें लेते और माप लेते हैं, और यह डेटा वैज्ञानिकों के विश्लेषण के लिए वापस भेजते हैं।"
      },
      impact:{
        en:"This constant monitoring helps scientists track deforestation, melting glaciers, and natural disasters as they happen.",
        hi:"यह लगातार निगरानी वैज्ञानिकों को वनों की कटाई, पिघलते हिमनदों, और प्राकृतिक आपदाओं को उनके होते ही ट्रैक करने में मदद करती है।"
      }
    }
  },

  {
    id:"topic-17", visual:"💧", image:"",
    title:{en:"Hydroelectric Power Lighting Cities",hi:"जल-विद्युत से रोशन होते शहर"},
    description:{en:"Water stored behind massive dams converts into one of the largest sources of clean electricity in the world.",hi:"विशाल बांधों के पीछे रुका हुआ पानी दुनिया में स्वच्छ बिजली के सबसे बड़े स्रोतों में से एक में बदल जाता है।"},
    learnMore:{
      howItWorks:{
        en:"Water held at a height carries stored energy simply because of its position, and when released, this energy turns into motion that spins turbines connected to generators.",
        hi:"ऊँचाई पर रुका हुआ पानी अपनी स्थिति के कारण ही एक संचित ऊर्जा रखता है, और छोड़े जाने पर, यह ऊर्जा गति में बदल जाती है जो जनरेटर से जुड़े टर्बाइनों को घुमाती है।"
      },
      impact:{
        en:"This single source powers millions of homes using nothing but the natural flow of water.",
        hi:"यह अकेला स्रोत केवल पानी के प्राकृतिक बहाव का उपयोग करके लाखों घरों को बिजली देता है।"
      }
    }
  },

  {
    id:"topic-18", visual:"📱", image:"",
    title:{en:"Mobile Phones Changing How We Talk",hi:"मोबाइल फोन से बदलता संवाद"},
    description:{en:"A device that fits in your pocket now lets you talk, message, and video call anyone around the world in seconds.",hi:"जेब में समा जाने वाला एक उपकरण अब दुनिया भर में किसी से भी कुछ ही सेकंड में बात करना, मैसेज करना, और वीडियो कॉल करना संभव बना देता है।"},
    learnMore:{
      howItWorks:{
        en:"Your voice and data are converted into signals that travel to the nearest network tower and onward through a web of connected networks to reach the other person almost instantly.",
        hi:"तुम्हारी आवाज़ और डेटा को ऐसे संकेतों में बदला जाता है जो निकटतम नेटवर्क टावर तक और फिर जुड़े हुए नेटवर्कों के एक जाल से होते हुए, लगभग तुरंत दूसरे व्यक्ति तक पहुँच जाते हैं।"
      },
      impact:{
        en:"This has made staying in touch with anyone, anywhere, something billions of people now take for granted every single day.",
        hi:"इससे कहीं भी, किसी से भी जुड़े रहना अब कुछ ऐसा बन गया है जिसे अरबों लोग हर रोज़ एक आम बात मान लेते हैं।"
      }
    }
  }
];

window.HowScienceChangesWorld = {
  all(){
    return howScienceChangesWorld;
  },

  get(id){
    return howScienceChangesWorld.find(topic => topic.id === id);
  },

  count(){
    return howScienceChangesWorld.length;
  },

  setLanguage(language){
    return language === "hi" ? "hi" : "en";
  }
};

window.howScienceChangesWorld = howScienceChangesWorld;
