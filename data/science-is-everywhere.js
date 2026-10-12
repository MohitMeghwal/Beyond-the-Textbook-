// science-is-everywhere.js
// Data for Science Is Everywhere – 32 bilingual science discoveries

const scienceDiscoveries = [
  // Batch 1 – Physics Around Us
  {
    id: "magnet",
    category: "physics",
    emoji: "🧲",
    title: { en: "The Science of Magnets", hi: "चुंबक का विज्ञान" },
    question: {
      en: "How can a magnet pull some objects without touching them?",
      hi: "चुंबक बिना छुए कुछ चीज़ों को कैसे खींचता है?"
    },
    intro: {
      en: "A magnet can attract certain materials, such as iron and many types of steel. It has two poles, called north and south. Around the magnet is a magnetic field—a region where magnetic forces can act. The field is invisible, but its effects can be observed.",
      hi: "चुंबक लोहे और कई प्रकार के स्टील जैसी कुछ सामग्रियों को आकर्षित कर सकता है। इसके दो ध्रुव होते हैं—उत्तर और दक्षिण। चुंबक के आसपास चुंबकीय क्षेत्र होता है, जहाँ चुंबकीय बल काम कर सकता है। यह क्षेत्र दिखाई नहीं देता, लेकिन इसके प्रभाव देखे जा सकते हैं।"
    },
    thinkQuestion: {
      en: "Which object is most likely to be attracted by an ordinary bar magnet?",
      hi: "सामान्य छड़ चुंबक किस वस्तु को आकर्षित करने की सबसे अधिक संभावना रखता है?"
    },
    options: [
      { text: { en: "A plastic ruler", hi: "प्लास्टिक की स्केल" }, correct: false, feedback: { en: "Not quite. Think about which material contains iron or another strongly magnetic material.", hi: "फिर से सोचो—किस वस्तु में लोहा या कोई अन्य प्रबल चुंबकीय पदार्थ हो सकता है?" } },
      { text: { en: "An iron nail", hi: "लोहे की कील" }, correct: true, feedback: { en: "Correct! Iron is a ferromagnetic material, so it is strongly attracted to a magnet.", hi: "सही! लोहा एक लौहचुंबकीय पदार्थ है, इसलिए चुंबक उसे प्रबल रूप से आकर्षित करता है।" } },
      { text: { en: "A wooden pencil", hi: "लकड़ी की पेंसिल" }, correct: false, feedback: { en: "Not quite. Think about which material contains iron or another strongly magnetic material.", hi: "फिर से सोचो—किस वस्तु में लोहा या कोई अन्य प्रबल चुंबकीय पदार्थ हो सकता है?" } }
    ],
    workingSteps: [
      { title: { en: "A magnetic field surrounds the magnet", hi: "चुंबक के चारों ओर चुंबकीय क्षेत्र" }, description: { en: "A magnet produces a magnetic field around it. The field can exert forces on certain materials and other magnets.", hi: "चुंबक अपने चारों ओर चुंबकीय क्षेत्र बनाता है। यह क्षेत्र कुछ पदार्थों और दूसरे चुंबकों पर बल लगा सकता है।" } },
      { title: { en: "Materials respond differently", hi: "पदार्थ अलग-अलग प्रतिक्रिया देते हैं" }, description: { en: "Iron, nickel, cobalt, and many of their alloys respond strongly to magnets. Wood, plastic, and paper are not strongly attracted by an ordinary magnet.", hi: "लोहा, निकेल, कोबाल्ट और इनके कई मिश्रधातु चुंबक से प्रबल रूप से प्रभावित होते हैं। लकड़ी, प्लास्टिक और कागज़ सामान्य चुंबक से प्रबल रूप से आकर्षित नहीं होते।" } },
      { title: { en: "Poles interact", hi: "ध्रुव परस्पर क्रिया करते हैं" }, description: { en: "Like magnetic poles repel; unlike poles attract. North attracts south, while two north poles or two south poles repel.", hi: "समान चुंबकीय ध्रुव एक-दूसरे को दूर धकेलते हैं, जबकि विपरीत ध्रुव आकर्षित होते हैं। उत्तर और दक्षिण ध्रुव आकर्षित होते हैं; दो उत्तर या दो दक्षिण ध्रुव प्रतिकर्षित होते हैं।" } }
    ],
    scienceBehind: {
      en: "In materials such as iron, tiny magnetic regions can align in response to an external magnetic field. This makes the material strongly attracted to a magnet. Magnetic field lines represent the field's direction and relative strength; they are not actual threads in space.",
      hi: "लोहे जैसे पदार्थों में बहुत छोटे चुंबकीय क्षेत्र वाले भाग होते हैं। बाहरी चुंबकीय क्षेत्र के प्रभाव से इनमें से कई भाग एक दिशा में व्यवस्थित हो सकते हैं, जिससे पदार्थ चुंबक की ओर प्रबल रूप से आकर्षित होता है। चुंबकीय क्षेत्र रेखाएँ क्षेत्र की दिशा और सापेक्ष तीव्रता दिखाने का तरीका हैं; वे अंतरिक्ष में मौजूद असली धागे नहीं हैं।"
    },
    realLifeUses: [
      { en: "Magnetic compasses use a small magnet that aligns approximately with Earth's magnetic field.", hi: "चुंबकीय कंपास में छोटा चुंबक पृथ्वी के चुंबकीय क्षेत्र के अनुसार लगभग उत्तर-दक्षिण दिशा में व्यवस्थित होता है।" },
      { en: "Electric motors use magnetic forces to produce motion.", hi: "विद्युत मोटर चुंबकीय बलों का उपयोग करके गति उत्पन्न करती हैं।" },
      { en: "Magnetic catches and some speakers use magnets in everyday devices.", hi: "कई उपकरणों में चुंबकीय लॉक और कुछ स्पीकर चुंबकों का उपयोग करते हैं।" }
    ],
    didYouKnow: {
      en: "Magnetic field lines are drawn closer together where the field is represented as stronger.",
      hi: "चुंबकीय क्षेत्र रेखाएँ जहाँ पास-पास दिखाई जाती हैं, वहाँ चित्र में क्षेत्र को अधिक प्रबल दर्शाया जाता है।"
    },
    experiment: {
      en: "Test which household objects are attracted to a fridge magnet. Materials: A fridge magnet; adult-approved safe objects such as a paper clip, steel spoon, plastic cap, paper, and wooden pencil. Steps: 1. Predict which objects will be attracted. 2. Bring the magnet close to each object without forcing or scratching it. 3. Record observations in two columns: Attracted / Not strongly attracted. 4. Compare your predictions with the results. What to notice: Material matters more than size or colour. Some stainless-steel objects may respond weakly or not noticeably, depending on their composition. Safety: Keep strong magnets away from small children, medical devices, magnetic cards, and electronics that may be affected. Never swallow magnets.",
      hi: "पहले अनुमान लगाओ, फिर चुंबक को अलग-अलग सुरक्षित वस्तुओं के पास लाकर देखो कि कौन-सी वस्तु आकर्षित होती है। परिणाम लिखो और अपने अनुमान से तुलना करो। वस्तु किस पदार्थ से बनी है, यह उसके आकार या रंग से अधिक महत्वपूर्ण हो सकता है।"
    },
    relatedIds: ["battery", "smartphone", "gps", "sound"],
    visualType: "magnetic-field-diagram"
  },
  {
    id: "rainbow",
    category: "physics",
    emoji: "🌈",
    title: { en: "The Science of Rainbows", hi: "इंद्रधनुष का विज्ञान" },
    question: {
      en: "How can white sunlight appear as many colours?",
      hi: "सफेद सूर्य का प्रकाश कई रंगों में कैसे दिखाई देता है?"
    },
    intro: {
      en: "Sunlight looks nearly white, but it contains a range of visible colours. When sunlight enters a raindrop, it bends, separates into colours, reflects inside the drop, and bends again as it leaves. Light from many droplets reaches your eyes to form the rainbow you see.",
      hi: "सूर्य का प्रकाश हमें लगभग सफेद दिखाई देता है, लेकिन उसमें कई दृश्य रंग शामिल होते हैं। जब सूर्य का प्रकाश बारिश की बूंद में प्रवेश करता है, तो वह मुड़ता है और अलग-अलग रंगों में बँटता है। बूंद के अंदर परावर्तन के बाद बाहर निकलते समय प्रकाश फिर मुड़ता है। बहुत-सी बूंदों से आने वाला प्रकाश मिलकर हमें इंद्रधनुष दिखाता है।"
    },
    thinkQuestion: {
      en: "What is the main source of the light that makes a natural rainbow visible?",
      hi: "प्राकृतिक इंद्रधनुष को दिखाई देने वाला प्रकाश मुख्य रूप से कहाँ से आता है?"
    },
    options: [
      { text: { en: "The Sun", hi: "सूर्य" }, correct: true, feedback: { en: "Correct! Sunlight enters water droplets and is redirected and separated into colours.", hi: "सही! सूर्य का प्रकाश पानी की बूंदों में प्रवेश करता है, मुड़ता है और अलग-अलग रंगों में बँटता है।" } },
      { text: { en: "The Moon itself produces rainbow colours", hi: "चंद्रमा स्वयं इंद्रधनुष के रंग बनाता है" }, correct: false, feedback: { en: "Not quite. Raindrops redirect and separate incoming light; they are not tiny lamps.", hi: "पूरी तरह सही नहीं। बारिश की बूंदें आने वाले प्रकाश को मोड़ती और रंगों में बाँटती हैं; वे छोटे बल्ब की तरह अपना प्रकाश नहीं बनातीं।" } },
      { text: { en: "Raindrops produce their own light", hi: "बारिश की बूंदें अपना प्रकाश बनाती हैं" }, correct: false, feedback: { en: "Not quite. Raindrops redirect and separate incoming light; they are not tiny lamps.", hi: "पूरी तरह सही नहीं। बारिश की बूंदें आने वाले प्रकाश को मोड़ती और रंगों में बाँटती हैं; वे छोटे बल्ब की तरह अपना प्रकाश नहीं बनातीं।" } }
    ],
    workingSteps: [
      { title: { en: "Sunlight enters a water droplet", hi: "सूर्य का प्रकाश पानी की बूंद में प्रवेश करता है" }, description: { en: "Light changes direction when it moves from air into water. This bending is called refraction.", hi: "जब प्रकाश हवा से पानी में प्रवेश करता है, तो उसकी दिशा बदल सकती है। इस मुड़ने को अपवर्तन कहते हैं।" } },
      { title: { en: "White light separates into colours", hi: "सफेद प्रकाश अलग-अलग रंगों में बँटता है" }, description: { en: "Different wavelengths of visible light bend by slightly different amounts in water. This separation is called dispersion.", hi: "दृश्य प्रकाश की अलग-अलग तरंगदैर्घ्य पानी में थोड़ी अलग मात्रा में मुड़ती हैं। रंगों के इस अलगाव को वर्ण-विक्षेपण कहते हैं।" } },
      { title: { en: "Light reflects inside the droplet", hi: "बूंद के अंदर प्रकाश परावर्तित होता है" }, description: { en: "Light reflects from the inside surface of the droplet before travelling back toward the outside.", hi: "बूंद के अंदर प्रकाश का कुछ भाग अंदरूनी सतह से परावर्तित होकर बाहर की ओर लौटता है।" } },
      { title: { en: "Light exits and reaches the observer", hi: "प्रकाश बाहर निकलकर देखने वाले तक पहुँचता है" }, description: { en: "As light leaves the droplet, it refracts again. Different colours leave at different angles. Many droplets together create the arc seen by an observer.", hi: "बूंद से बाहर निकलते समय प्रकाश फिर अपवर्तित होता है। अलग-अलग रंग अलग कोणों पर निकलते हैं। बहुत-सी बूंदों से आने वाला प्रकाश मिलकर हमें इंद्रधनुष का चाप दिखाता है।" } }
    ],
    scienceBehind: {
      en: "A primary rainbow is usually seen when the Sun is behind the observer and rain is in front. Each droplet sends different colours in different directions, so the observer sees particular colours from droplets at particular angles. Red is typically on the outside of a primary rainbow and violet on the inside. A secondary rainbow can form after two internal reflections; its colour order is reversed and it is usually fainter.",
      hi: "प्राथमिक इंद्रधनुष सामान्यतः तब दिखाई देता है जब सूर्य देखने वाले व्यक्ति के पीछे और बारिश सामने होती है। हर बूंद अलग-अलग रंगों के प्रकाश को अलग दिशाओं में भेजती है, इसलिए देखने वाले को विशेष कोणों पर स्थित बूंदों से विशेष रंग दिखाई देते हैं। प्राथमिक इंद्रधनुष में लाल रंग आम तौर पर बाहर की ओर और बैंगनी अंदर की ओर होता है। बूंद के अंदर दो परावर्तनों से द्वितीयक इंद्रधनुष बन सकता है; उसमें रंगों का क्रम उल्टा होता है और वह सामान्यतः अधिक धुंधला होता है।"
    },
    realLifeUses: [
      { en: "A glass prism can separate white light into a spectrum because different wavelengths refract by different amounts.", hi: "काँच का प्रिज़्म सफेद प्रकाश को रंगों के स्पेक्ट्रम में बाँट सकता है, क्योंकि अलग-अलग तरंगदैर्घ्य अलग मात्रा में अपवर्तित होती हैं।" },
      { en: "Spectroscopy studies light emitted or absorbed by materials and helps scientists learn about stars and substances.", hi: "स्पेक्ट्रोस्कोपी में पदार्थों द्वारा उत्सर्जित या अवशोषित प्रकाश का अध्ययन किया जाता है। इससे वैज्ञानिक तारों और विभिन्न पदार्थों के बारे में जानकारी प्राप्त कर सकते हैं।" },
      { en: "Rainbows show that visible light contains different colours with different wavelengths.", hi: "इंद्रधनुष दिखाता है कि दृश्य प्रकाश में अलग-अलग तरंगदैर्घ्य वाले कई रंग शामिल होते हैं।" }
    ],
    didYouKnow: {
      en: "A rainbow is part of a circle. From the ground, the horizon often hides the lower part, so we usually see an arc.",
      hi: "इंद्रधनुष एक वृत्त का हिस्सा होता है। जमीन से देखने पर क्षितिज अक्सर उसका निचला भाग छिपा देता है, इसलिए हमें सामान्यतः चाप दिखाई देता है।"
    },
    experiment: {
      en: "Make a small spectrum with a prism, if available. Materials: An educational prism, flashlight, white paper, and a dim room. Use a flashlight rather than looking toward the Sun. Steps: 1. Shine the flashlight through the prism toward the white paper. 2. Slowly change the prism's angle. 3. Look for a band of colours on the paper. 4. Draw the observed colour band. Safety: Never look directly at the Sun or direct sunlight through a lens or prism into your eyes.",
      hi: "यदि प्रिज़्म उपलब्ध हो, तो टॉर्च की रोशनी को उससे गुजारकर सफेद कागज़ पर रंगों की पट्टी देखने की कोशिश करो। सूर्य को सीधे कभी न देखो।"
    },
    relatedIds: ["mirror", "eyes", "camera", "moon"],
    visualType: "light-ray-diagram"
  },
  {
    id: "sound",
    category: "physics",
    emoji: "🔊",
    title: { en: "The Science of Sound", hi: "ध्वनि का विज्ञान" },
    question: {
      en: "How does a vibration become a sound you can hear?",
      hi: "कंपन से ऐसी ध्वनि कैसे बनती है जिसे हम सुन सकते हैं?"
    },
    intro: {
      en: "When an object vibrates, it makes nearby particles in a medium—such as air—vibrate. These disturbances travel outward as a sound wave. When the wave reaches the ear, it causes structures in the ear to vibrate, and the brain interprets the signals as sound. Sound needs a medium to travel, so it cannot travel through a perfect vacuum.",
      hi: "जब कोई वस्तु कंपन करती है, तो वह अपने पास मौजूद हवा जैसे माध्यम के कणों में कंपन पैदा करती है। ये हलचलें ध्वनि तरंग के रूप में आगे बढ़ती हैं। तरंग कान तक पहुँचती है, तो कान की संरचनाओं में कंपन होता है। मस्तिष्क इन संकेतों को ध्वनि के रूप में समझता है। ध्वनि को चलने के लिए माध्यम चाहिए, इसलिए वह पूर्ण निर्वात में यात्रा नहीं कर सकती।"
    },
    thinkQuestion: {
      en: "Can sound travel through a perfect vacuum?",
      hi: "क्या ध्वनि पूर्ण निर्वात में यात्रा कर सकती है?"
    },
    options: [
      { text: { en: "Yes, exactly like light", hi: "हाँ, बिल्कुल प्रकाश की तरह" }, correct: false, feedback: { en: "Not quite. Light can travel through a vacuum, but sound needs a material medium.", hi: "पूरी तरह सही नहीं। प्रकाश निर्वात में चल सकता है, लेकिन ध्वनि को भौतिक माध्यम चाहिए।" } },
      { text: { en: "No, sound needs a material medium", hi: "नहीं, ध्वनि को भौतिक माध्यम चाहिए" }, correct: true, feedback: { en: "Correct! Sound is a mechanical wave and needs particles to pass the disturbance along.", hi: "सही! ध्वनि एक यांत्रिक तरंग है। कंपन को आगे पहुँचाने के लिए उसे माध्यम के कणों की आवश्यकता होती है।" } },
      { text: { en: "Only if the sound is very loud", hi: "केवल तब, जब ध्वनि बहुत तेज़ हो" }, correct: false, feedback: { en: "Not quite. Light can travel through a vacuum, but sound needs a material medium.", hi: "पूरी तरह सही नहीं। प्रकाश निर्वात में चल सकता है, लेकिन ध्वनि को भौतिक माध्यम चाहिए।" } }
    ],
    workingSteps: [
      { title: { en: "An object vibrates", hi: "कोई वस्तु कंपन करती है" }, description: { en: "A vibrating object disturbs the surrounding medium. A guitar string, speaker cone, or vocal cords can act as a sound source.", hi: "कंपन करती वस्तु अपने आसपास के माध्यम में हलचल पैदा करती है। गिटार की तार, स्पीकर का कोन या स्वर-तंत्रियाँ ध्वनि का स्रोत बन सकती हैं।" } },
      { title: { en: "The disturbance travels", hi: "हलचल आगे बढ़ती है" }, description: { en: "In air, sound travels as alternating compressions and rarefactions—regions of slightly higher and lower pressure. Air particles vibrate back and forth around their positions; they do not travel all the way from the source to the listener.", hi: "हवा में ध्वनि संपीड़न और विरलन के रूप में आगे बढ़ती है—ऐसे क्षेत्र जहाँ दबाव थोड़ा अधिक या कम होता है। हवा के कण अपनी जगह के आसपास आगे-पीछे कंपन करते हैं; वे स्रोत से श्रोता तक पूरी दूरी तय नहीं करते।" } },
      { title: { en: "The ear receives the wave", hi: "कान तरंग प्राप्त करता है" }, description: { en: "The sound wave makes the eardrum vibrate. Other structures in the ear pass the vibration along, and sensory cells in the inner ear help convert it into nerve signals.", hi: "ध्वनि तरंग कान के पर्दे में कंपन पैदा करती है। कान की अन्य संरचनाएँ इस कंपन को आगे पहुँचाती हैं, और भीतरी कान की संवेदनशील कोशिकाएँ इसे तंत्रिका संकेतों में बदलने में मदद करती हैं।" } },
      { title: { en: "The brain interprets the signal", hi: "मस्तिष्क संकेत को समझता है" }, description: { en: "The brain processes signals from the auditory system, allowing us to recognize voices, music, and other sounds.", hi: "मस्तिष्क श्रवण तंत्र से आने वाले संकेतों को संसाधित करता है, जिससे हम आवाज़, संगीत और अन्य ध्वनियों को पहचान पाते हैं।" } }
    ],
    scienceBehind: {
      en: "Sound is a mechanical wave. In air and liquids, sound generally travels as a longitudinal pressure wave. Frequency is related to perceived pitch: higher frequency usually sounds higher-pitched. Amplitude is related to loudness, although perceived loudness also depends on frequency and the listener. Sound travels at different speeds in different materials; in general, it travels faster in many solids than in air. There is no sound propagation through a perfect vacuum because there are no particles to carry the mechanical disturbance.",
      hi: "ध्वनि एक यांत्रिक तरंग है। हवा और द्रवों में ध्वनि सामान्यतः अनुदैर्ध्य दबाव तरंग के रूप में चलती है। आवृत्ति का संबंध सुनाई देने वाली तारत्व से है: अधिक आवृत्ति वाली ध्वनि सामान्यतः अधिक तीखी सुनाई देती है। आयाम का संबंध ध्वनि की तीव्रता से है, हालाँकि सुनाई देने वाली तेज़ी पर आवृत्ति और सुनने वाले की संवेदनशीलता का भी प्रभाव पड़ता है। अलग-अलग पदार्थों में ध्वनि की गति अलग होती है; सामान्यतः कई ठोस पदार्थों में ध्वनि हवा से तेज़ चलती है। पूर्ण निर्वात में ध्वनि नहीं चलती, क्योंकि कंपन को आगे ले जाने वाले कण नहीं होते।"
    },
    realLifeUses: [
      { en: "Musical instruments create sound by vibrating strings, air columns, membranes, or other parts.", hi: "संगीत वाद्य यंत्र तारों, हवा के स्तंभों, झिल्लियों या अन्य भागों के कंपन से ध्वनि बनाते हैं।" },
      { en: "Ultrasound uses sound waves above the usual human hearing range for some medical imaging and other applications.", hi: "अल्ट्रासाउंड में सामान्य मानव श्रवण सीमा से अधिक आवृत्ति वाली ध्वनि तरंगों का उपयोग कुछ चिकित्सकीय इमेजिंग और अन्य कामों में किया जाता है।" },
      { en: "Noise-cancelling headphones use microphones and electronics to help reduce some incoming sound, especially steady low-frequency noise.", hi: "नॉइज़-कैंसलिंग हेडफ़ोन माइक्रोफ़ोन और इलेक्ट्रॉनिक्स की मदद से कुछ बाहरी ध्वनियों—विशेषकर लगातार आने वाली कम-आवृत्ति की आवाज़ों—को कम करने में मदद करते हैं।" }
    ],
    didYouKnow: {
      en: "In space, an explosion would not create the familiar travelling sound wave through the vacuum around it. Spacecraft can still make sounds inside their pressurised cabins, where air is present.",
      hi: "अंतरिक्ष के निर्वात में विस्फोट की आवाज़ वैसी ध्वनि तरंग के रूप में नहीं चल सकती जैसी हवा में चलती है। अंतरिक्षयान के अंदर हवा होने के कारण वहाँ आवाज़ सुनी जा सकती है।"
    },
    experiment: {
      en: "Feel a vibration while making sound. Materials: A clean ruler and a stable table, or a small drum/rubber-band activity supervised by an adult. Steps: 1. Place a ruler on a table with a short section hanging over the edge, keeping it secure. 2. Gently pluck the free end. 3. Observe the vibration and listen to the sound. 4. Change the length of the free section and compare the sound. Safety: Do not use sharp or brittle objects, and do not make loud sounds close to anyone's ears.",
      hi: "मेज़ के किनारे सुरक्षित रूप से रखी स्केल के बाहर निकले हिस्से को धीरे से हिलाओ। कंपन और ध्वनि को देखो-सुनो। बाहर निकले हिस्से की लंबाई बदलने पर ध्वनि में बदलाव भी देखो।"
    },
    relatedIds: ["smartphone", "headphones", "camera", "eyes"],
    visualType: "sound-wave-animation"
  },
  {
    id: "mirror",
    category: "physics",
    emoji: "🪞",
    title: { en: "The Science of Mirrors", hi: "दर्पण का विज्ञान" },
    question: {
      en: "How does a mirror show an image of you?",
      hi: "दर्पण में हमारी छवि कैसे दिखाई देती है?"
    },
    intro: {
      en: "Light from a source—such as a lamp or the Sun—reflects off your face and reaches a mirror. The mirror reflects some of that light toward your eyes. Your visual system interprets the reflected rays as an image that appears behind the mirror. A flat mirror usually forms an upright virtual image that is about the same size as the object.",
      hi: "किसी प्रकाश स्रोत—जैसे बल्ब या सूर्य—का प्रकाश आपके चेहरे से परावर्तित होकर दर्पण तक पहुँचता है। दर्पण उस प्रकाश के कुछ भाग को आपकी आँखों की ओर परावर्तित करता है। हमारी दृष्टि प्रणाली इन किरणों को ऐसे समझती है मानो वे दर्पण के पीछे से आ रही हों, इसलिए वहाँ छवि दिखाई देती है। समतल दर्पण सामान्यतः सीधी, आभासी और वस्तु के लगभग समान आकार की छवि बनाता है।"
    },
    thinkQuestion: {
      en: "What does a flat mirror mainly do to the light that reaches it?",
      hi: "समतल दर्पण उस पर पड़ने वाले प्रकाश के साथ मुख्य रूप से क्या करता है?"
    },
    options: [
      { text: { en: "It reflects light", hi: "वह प्रकाश को परावर्तित करता है" }, correct: true, feedback: { en: "Correct! A mirror reflects light in an orderly way, allowing a clear image to form.", hi: "सही! दर्पण प्रकाश को व्यवस्थित ढंग से परावर्तित करता है, जिससे स्पष्ट छवि बन सकती है।" } },
      { text: { en: "It turns all light into sound", hi: "वह सारे प्रकाश को ध्वनि में बदल देता है" }, correct: false, feedback: { en: "Not quite. A mirror does not create a real person; it reflects light from the object.", hi: "पूरी तरह सही नहीं। दर्पण कोई नया व्यक्ति नहीं बनाता; वह वस्तु से आने वाले प्रकाश को परावर्तित करता है।" } },
      { text: { en: "It creates a new person behind the glass", hi: "वह काँच के पीछे एक नया व्यक्ति बना देता है" }, correct: false, feedback: { en: "Not quite. A mirror does not create a real person; it reflects light from the object.", hi: "पूरी तरह सही नहीं। दर्पण कोई नया व्यक्ति नहीं बनाता; वह वस्तु से आने वाले प्रकाश को परावर्तित करता है।" } }
    ],
    workingSteps: [
      { title: { en: "Light reaches the object", hi: "प्रकाश वस्तु तक पहुँचता है" }, description: { en: "Light from a lamp or the Sun falls on you and reflects from your skin and clothes in many directions.", hi: "बल्ब या सूर्य का प्रकाश आप पर पड़ता है और आपकी त्वचा तथा कपड़ों से कई दिशाओं में परावर्तित होता है।" } },
      { title: { en: "Some reflected light reaches the mirror", hi: "कुछ परावर्तित प्रकाश दर्पण तक पहुँचता है" }, description: { en: "A portion of the light from you travels to the mirror.", hi: "आपसे परावर्तित प्रकाश का कुछ भाग दर्पण तक पहुँचता है।" } },
      { title: { en: "The mirror reflects the light toward your eyes", hi: "दर्पण प्रकाश को आपकी आँखों की ओर परावर्तित करता है" }, description: { en: "The angle of reflection equals the angle of incidence, measured from the normal—a line perpendicular to the mirror surface.", hi: "आपतन कोण और परावर्तन कोण बराबर होते हैं। दोनों कोण दर्पण की सतह पर खींचे गए अभिलंब के सापेक्ष मापे जाते हैं।" } },
      { title: { en: "Your brain interprets the image", hi: "आपका मस्तिष्क छवि को समझता है" }, description: { en: "The reflected rays reach your eyes. Your brain interprets them as if they came from a point behind the mirror, where the virtual image appears to be.", hi: "परावर्तित किरणें आपकी आँखों तक पहुँचती हैं। मस्तिष्क उन्हें ऐसे समझता है मानो वे दर्पण के पीछे किसी बिंदु से आ रही हों। वहाँ आभासी छवि दिखाई देती है।" } }
    ],
    scienceBehind: {
      en: "A smooth mirror surface produces specular reflection, where reflected rays follow a predictable direction. For a plane mirror, the image is virtual, upright, approximately the same size as the object, and appears the same distance behind the mirror as the object is in front. The familiar left-right reversal is more precisely a front-back reversal: the mirror reverses the direction perpendicular to its surface, while our brains compare the image with how we imagine a person turned around.",
      hi: "दर्पण की चिकनी सतह नियमित परावर्तन करती है, जिसमें परावर्तित किरणों की दिशा निश्चित नियम का पालन करती है। समतल दर्पण में छवि आभासी, सीधी और वस्तु के लगभग समान आकार की होती है। छवि दर्पण के पीछे उतनी ही दूरी पर दिखाई देती है जितनी दूरी पर वस्तु सामने होती है। हमें अक्सर लगता है कि दर्पण बाएँ-दाएँ उलट देता है; अधिक सटीक रूप से, दर्पण सतह के लंबवत दिशा को उलटता है। बाएँ-दाएँ उलटने का अनुभव इस बात से जुड़ा है कि हम किसी व्यक्ति के घूमने की कल्पना कैसे करते हैं।"
    },
    realLifeUses: [
      { en: "Rear-view and side-view mirrors help drivers see objects behind or beside a vehicle; curved mirrors provide different fields of view.", hi: "रियर-व्यू और साइड-व्यू दर्पण चालकों को वाहन के पीछे या बगल की वस्तुएँ देखने में मदद करते हैं। वक्र दर्पण अलग-अलग दृश्य क्षेत्र देते हैं।" },
      { en: "Reflecting telescopes use mirrors to collect and focus light from distant objects.", hi: "परावर्ती दूरबीनें दूर की वस्तुओं से आने वाले प्रकाश को एकत्रित और केंद्रित करने के लिए दर्पणों का उपयोग करती हैं।" },
      { en: "Periscopes use mirrors or prisms to redirect light so a person can see around or over an obstacle.", hi: "पेरिस्कोप में दर्पण या प्रिज़्म प्रकाश की दिशा बदलते हैं, जिससे व्यक्ति किसी बाधा के ऊपर या आसपास देख सकता है।" }
    ],
    didYouKnow: {
      en: "A plane mirror does not actually place a person behind the glass. The image is virtual: reflected rays only appear to come from behind the mirror.",
      hi: "समतल दर्पण वास्तव में किसी व्यक्ति को काँच के पीछे नहीं रखता। छवि आभासी होती है—परावर्तित किरणें केवल दर्पण के पीछे से आती हुई प्रतीत होती हैं।"
    },
    experiment: {
      en: "Observe reflection and image position with a small flat mirror. Materials: A small, unbroken flat mirror with a safe edge, paper, pencil, and a small object. Steps: 1. Place the mirror upright on the paper, with adult help if needed. 2. Put a small object in front of it. 3. Look at the image from different viewing positions. 4. Draw the object, mirror, and apparent image position behind the mirror. Safety: Do not use broken glass or sharp-edged mirrors. Never use a mirror to direct sunlight into someone's eyes.",
      hi: "एक सुरक्षित समतल दर्पण के सामने छोटी वस्तु रखो। अलग-अलग स्थानों से छवि देखो और कागज़ पर वस्तु, दर्पण तथा छवि की अनुमानित स्थिति बनाओ। टूटे काँच का उपयोग मत करो।"
    },
    relatedIds: ["rainbow", "eyes", "camera", "smartphone"],
    visualType: "reflection-ray-diagram"
  },
  // Batch 2 – Everyday Gadgets
  {
    id: "smartphone",
    category: "gadgets",
    emoji: "📱",
    title: { en: "How Does a Smartphone Work?", hi: "स्मार्टफ़ोन कैसे काम करता है?" },
    question: {
      en: "How can one small device make calls, take photos, show maps, and connect to the internet?",
      hi: "एक छोटा-सा फ़ोन कॉल, फ़ोटो, नक्शे और इंटरनेट—सब कैसे संभाल लेता है?"
    },
    intro: {
      en: "A smartphone is a small computer with several communication tools built in. Its processor runs instructions, memory stores information temporarily or permanently, and the operating system manages apps and hardware. The touchscreen detects your touch, the camera senses light, and wireless radios send and receive information. These parts work together so you can call, photograph, navigate, play, and learn.",
      hi: "स्मार्टफ़ोन एक छोटा कंप्यूटर है जिसमें कई संचार सुविधाएँ भी होती हैं। इसका प्रोसेसर निर्देशों को चलाता है, मेमोरी जानकारी को अस्थायी या स्थायी रूप से रखती है, और ऑपरेटिंग सिस्टम ऐप्स व हार्डवेयर को संभालता है। टचस्क्रीन आपके स्पर्श को पहचानती है, कैमरा प्रकाश को महसूस करता है, और वायरलेस रेडियो जानकारी भेजते तथा प्राप्त करते हैं। ये सभी हिस्से मिलकर कॉल, फ़ोटो, नक्शे, गेम और पढ़ाई जैसी सुविधाएँ देते हैं।"
    },
    thinkQuestion: {
      en: "What does a smartphone's processor mainly do?",
      hi: "स्मार्टफ़ोन का प्रोसेसर मुख्य रूप से क्या करता है?"
    },
    options: [
      { text: { en: "It runs instructions and processes data", hi: "निर्देश चलाता है और डेटा संसाधित करता है" }, correct: true, feedback: { en: "Correct! The processor executes instructions and helps apps and system functions work.", hi: "सही! प्रोसेसर निर्देशों को चलाता है और ऐप्स तथा सिस्टम के काम करने में मदद करता है।" } },
      { text: { en: "It creates sunlight for the camera", hi: "कैमरे के लिए सूर्य का प्रकाश बनाता है" }, correct: false, feedback: { en: "Not quite. The processor is the device's computing engine; sensors and other parts have their own jobs.", hi: "पूरी तरह सही नहीं। प्रोसेसर फ़ोन का गणना करने वाला मुख्य भाग है; सेंसर और दूसरे हिस्सों के अपने अलग काम होते हैं।" } },
      { text: { en: "It replaces every sensor", hi: "सभी सेंसरों की जगह लेता है" }, correct: false, feedback: { en: "Not quite. The processor is the device's computing engine; sensors and other parts have their own jobs.", hi: "पूरी तरह सही नहीं। प्रोसेसर फ़ोन का गणना करने वाला मुख्य भाग है; सेंसर और दूसरे हिस्सों के अपने अलग काम होते हैं।" } }
    ],
    workingSteps: [
      { title: { en: "You give an input", hi: "आप इनपुट देते हैं" }, description: { en: "You tap the screen, press a button, speak into a microphone, or move the phone. Touch sensors and other sensors detect these actions.", hi: "आप स्क्रीन छूते हैं, बटन दबाते हैं, माइक्रोफ़ोन में बोलते हैं या फ़ोन को हिलाते हैं। टच सेंसर और दूसरे सेंसर इन क्रियाओं को पहचानते हैं।" } },
      { title: { en: "The processor handles instructions", hi: "प्रोसेसर निर्देशों को संभालता है" }, description: { en: "The processor executes instructions from the operating system and apps. It works with memory and other chips to process information.", hi: "प्रोसेसर ऑपरेटिंग सिस्टम और ऐप्स के निर्देश चलाता है। जानकारी संसाधित करने के लिए यह मेमोरी और अन्य चिप्स के साथ काम करता है।" } },
      { title: { en: "The phone uses the right hardware", hi: "फ़ोन सही हार्डवेयर का उपयोग करता है" }, description: { en: "The camera sensor detects light; the screen produces images; the speaker makes sound; and the battery supplies electrical energy.", hi: "कैमरा सेंसर प्रकाश को पहचानता है, स्क्रीन चित्र दिखाती है, स्पीकर ध्वनि बनाता है और बैटरी विद्युत ऊर्जा देती है।" } },
      { title: { en: "Wireless signals carry information", hi: "वायरलेस संकेत जानकारी ले जाते हैं" }, description: { en: "Cellular, Wi-Fi, Bluetooth, and other radios use radio waves to communicate with compatible devices or networks. Internet services may then send information back to your phone.", hi: "मोबाइल नेटवर्क, वाई-फ़ाई और ब्लूटूथ जैसे रेडियो सिस्टम रेडियो तरंगों के माध्यम से अनुकूल उपकरणों या नेटवर्क से संवाद करते हैं। इंटरनेट सेवाएँ फिर जानकारी आपके फ़ोन तक भेज सकती हैं।" } }
    ],
    scienceBehind: {
      en: "A smartphone uses semiconductor electronics. Transistors inside chips act as tiny electronic switches and help process binary information. Software instructions control how hardware is used. Radio transmitters convert information into signals that can be sent through antennas; receivers detect incoming signals and recover information from them. Sensors convert physical quantities—such as light, acceleration, or sound—into electrical signals that electronics can process. Exact components and communication methods depend on the phone model and network.",
      hi: "स्मार्टफ़ोन में अर्धचालक इलेक्ट्रॉनिक्स का उपयोग होता है। चिप के अंदर ट्रांजिस्टर छोटे इलेक्ट्रॉनिक स्विच की तरह काम करते हैं और बाइनरी जानकारी संसाधित करने में मदद करते हैं। सॉफ़्टवेयर के निर्देश बताते हैं कि हार्डवेयर का उपयोग कैसे होगा। रेडियो ट्रांसमीटर जानकारी को ऐसे संकेतों में बदलते हैं जिन्हें एंटीना से भेजा जा सकता है; रिसीवर आने वाले संकेतों को पहचानकर उनमें से जानकारी प्राप्त करते हैं। सेंसर प्रकाश, त्वरण या ध्वनि जैसी भौतिक राशियों को विद्युत संकेतों में बदलते हैं, जिन्हें इलेक्ट्रॉनिक्स संसाधित कर सकता है। सटीक पुर्ज़े और संचार विधियाँ फ़ोन के मॉडल तथा नेटवर्क पर निर्भर करती हैं।"
    },
    realLifeUses: [
      { en: "GPS/GNSS receivers use signals from navigation satellites to help calculate location; maps then display that location and route information.", hi: "GPS/GNSS रिसीवर नेविगेशन उपग्रहों से संकेत लेकर स्थान का अनुमान लगाने में मदद करते हैं। नक्शे उस स्थान और रास्ते की जानकारी दिखाते हैं।" },
      { en: "A phone's camera converts incoming light into electrical signals that are processed into an image.", hi: "फ़ोन का कैमरा आने वाले प्रकाश को विद्युत संकेतों में बदलता है, जिन्हें संसाधित करके तस्वीर बनाई जाती है।" },
      { en: "A phone's accelerometer can detect changes in motion and help rotate the screen or support motion-based apps.", hi: "फ़ोन का एक्सेलेरोमीटर गति में बदलाव पहचान सकता है और स्क्रीन घुमाने या गति-आधारित ऐप्स में मदद कर सकता है।" }
    ],
    didYouKnow: {
      en: "The touchscreen, camera, microphone, and motion sensors do different jobs; the processor combines their data when an app needs it.",
      hi: "टचस्क्रीन, कैमरा, माइक्रोफ़ोन और गति-सेंसर अलग-अलग काम करते हैं। किसी ऐप को ज़रूरत होने पर प्रोसेसर उनकी जानकारी का उपयोग करता है।"
    },
    experiment: {
      en: "Explore how a phone responds to different sensors. Materials: A smartphone and a trusted, built-in app such as Camera or Compass. No additional app is required. Steps: 1. Open the Camera app and point it at a well-lit object. 2. Cover the camera lens briefly with a finger and observe the preview change. 3. If your phone has a compass app, rotate the phone slowly and observe the heading change. 4. Open screen rotation settings (if available) and tilt the phone to see whether the screen orientation changes. Safety: Do not install unknown apps for this activity. Do not point the camera at people without permission, and do not expose the phone to water or extreme heat.",
      hi: "फ़ोन के कैमरे, कंपास और स्क्रीन-रोटेशन जैसी सुविधाओं को देखकर समझो कि अलग-अलग सेंसर अलग प्रकार की जानकारी पहचानते हैं। किसी अनजान ऐप को इंस्टॉल करने की ज़रूरत नहीं है।"
    },
    relatedIds: ["headphones", "camera", "gps", "battery"],
    visualType: "smartphone-system-map"
  },
  {
    id: "headphones",
    category: "gadgets",
    emoji: "🎧",
    title: { en: "How Do Headphones Work?", hi: "हेडफ़ोन कैसे काम करते हैं?" },
    question: {
      en: "How can tiny headphones turn electrical signals into music?",
      hi: "छोटे-से हेडफ़ोन विद्युत संकेतों को संगीत में कैसे बदलते हैं?"
    },
    intro: {
      en: "Headphones receive an audio signal from a phone, computer, or other device. Inside each earcup or earbud is a small driver. In many common designs, an electrical signal flows through a coil in a magnetic field, making a diaphragm move. The moving diaphragm vibrates nearby air, creating sound waves that reach your ears. Different headphone designs use different technologies, but the goal is the same: convert an audio signal into sound.",
      hi: "हेडफ़ोन फ़ोन, कंप्यूटर या किसी अन्य उपकरण से ऑडियो संकेत प्राप्त करते हैं। हर ईयरकप या ईयरबड के अंदर एक छोटा ड्राइवर होता है। कई सामान्य डिज़ाइनों में विद्युत संकेत एक चुंबकीय क्षेत्र में रखी कुंडली से गुजरता है, जिससे पतली झिल्ली हिलती है। यह झिल्ली पास की हवा में कंपन पैदा करती है और ध्वनि तरंगें आपके कानों तक पहुँचती हैं। हेडफ़ोन के अलग-अलग डिज़ाइन अलग तकनीकें इस्तेमाल कर सकते हैं, लेकिन उद्देश्य ऑडियो संकेत को ध्वनि में बदलना है।"
    },
    thinkQuestion: {
      en: "What part of a typical dynamic headphone directly vibrates to move the air?",
      hi: "सामान्य डायनेमिक हेडफ़ोन में हवा को कंपन कराने के लिए कौन-सा भाग हिलता है?"
    },
    options: [
      { text: { en: "The diaphragm", hi: "डायफ्राम (पतली झिल्ली)" }, correct: true, feedback: { en: "Correct! The diaphragm moves back and forth, creating changing air pressure that travels as sound.", hi: "सही! डायफ्राम आगे-पीछे हिलता है और हवा के दबाव में बदलाव पैदा करता है, जो ध्वनि के रूप में आगे बढ़ता है।" } },
      { text: { en: "The charging case only", hi: "केवल चार्जिंग केस" }, correct: false, feedback: { en: "Not quite. In a typical dynamic driver, a small diaphragm moves to create sound waves.", hi: "पूरी तरह सही नहीं। सामान्य डायनेमिक ड्राइवर में छोटी झिल्ली हिलकर ध्वनि तरंगें बनाती है।" } },
      { text: { en: "The phone's glass screen", hi: "फ़ोन की काँच वाली स्क्रीन" }, correct: false, feedback: { en: "Not quite. In a typical dynamic driver, a small diaphragm moves to create sound waves.", hi: "पूरी तरह सही नहीं। सामान्य डायनेमिक ड्राइवर में छोटी झिल्ली हिलकर ध्वनि तरंगें बनाती है।" } }
    ],
    workingSteps: [
      { title: { en: "An audio signal arrives", hi: "ऑडियो संकेत आता है" }, description: { en: "The phone or computer sends a changing electrical signal that represents the audio waveform.", hi: "फ़ोन या कंप्यूटर बदलता हुआ विद्युत संकेत भेजता है, जो ऑडियो तरंगरूप का प्रतिनिधित्व करता है।" } },
      { title: { en: "The driver responds", hi: "ड्राइवर प्रतिक्रिया देता है" }, description: { en: "In a dynamic driver, current through a voice coil interacts with a magnetic field and creates a force that moves the coil.", hi: "डायनेमिक ड्राइवर में वॉइस कॉइल से बहने वाली धारा चुंबकीय क्षेत्र के साथ क्रिया करती है और कॉइल को हिलाने वाला बल उत्पन्न करती है।" } },
      { title: { en: "The diaphragm moves air", hi: "डायफ्राम हवा को हिलाता है" }, description: { en: "The coil moves a thin diaphragm back and forth. This creates changing pressure in the surrounding air.", hi: "कॉइल एक पतली झिल्ली को आगे-पीछे हिलाती है। इससे आसपास की हवा के दबाव में बदलाव होता है।" } },
      { title: { en: "Sound reaches the ear", hi: "ध्वनि कान तक पहुँचती है" }, description: { en: "The pressure disturbance travels through the air in the ear canal and is detected by the hearing system.", hi: "दबाव में यह हलचल कान की नली में हवा के माध्यम से आगे बढ़ती है और श्रवण तंत्र द्वारा पहचानी जाती है।" } }
    ],
    scienceBehind: {
      en: "A dynamic headphone driver works through electromagnetism. The audio signal changes over time, so the force on the voice coil changes too. The diaphragm follows this changing force and produces pressure variations in air. The pattern of those variations carries information about pitch, loudness, and timbre. Active noise cancellation is a separate electronic feature: microphones measure outside sound and circuitry generates a signal designed to reduce some of it. It works best for certain kinds of steady noise and does not remove every sound.",
      hi: "डायनेमिक हेडफ़ोन ड्राइवर विद्युतचुंबकत्व के सिद्धांत पर काम करता है। ऑडियो संकेत समय के साथ बदलता है, इसलिए वॉइस कॉइल पर लगने वाला बल भी बदलता है। डायफ्राम इस बदलते बल के अनुसार हिलता है और हवा में दबाव के बदलाव पैदा करता है। इन बदलावों के पैटर्न में तारत्व, ध्वनि की तीव्रता और ध्वनि के गुणों की जानकारी होती है। एक्टिव नॉइज़ कैंसलेशन एक अलग इलेक्ट्रॉनिक सुविधा है: माइक्रोफ़ोन बाहरी ध्वनि मापते हैं और सर्किट ऐसा संकेत बनाते हैं जो कुछ ध्वनि को कम करने में मदद करता है। यह कुछ लगातार आने वाली आवाज़ों पर बेहतर काम करता है, लेकिन हर आवाज़ को पूरी तरह नहीं हटाता।"
    },
    realLifeUses: [
      { en: "Headphones and loudspeakers use related principles to convert electrical audio signals into sound, though their size and acoustic design differ.", hi: "हेडफ़ोन और लाउडस्पीकर विद्युत ऑडियो संकेतों को ध्वनि में बदलने के संबंधित सिद्धांतों का उपयोग करते हैं, हालाँकि उनका आकार और ध्वनिक डिज़ाइन अलग होता है।" },
      { en: "Noise-cancelling headphones can reduce some background noise during travel or study.", hi: "नॉइज़-कैंसलिंग हेडफ़ोन यात्रा या पढ़ाई के दौरान कुछ पृष्ठभूमि शोर कम कर सकते हैं।" },
      { en: "Hearing aids also use microphones and electronics, but are designed to support hearing rather than simply play music.", hi: "हियरिंग एड में भी माइक्रोफ़ोन और इलेक्ट्रॉनिक्स होते हैं, लेकिन उन्हें केवल संगीत चलाने के बजाय सुनने में सहायता देने के लिए बनाया जाता है।" }
    ],
    didYouKnow: {
      en: "A headphone diaphragm may be only a few millimetres to a few centimetres across, yet its carefully controlled movement can reproduce a wide range of sound.",
      hi: "हेडफ़ोन का डायफ्राम कुछ मिलीमीटर से कुछ सेंटीमीटर तक का हो सकता है, फिर भी उसकी नियंत्रित गति कई प्रकार की ध्वनियाँ बना सकती है।"
    },
    experiment: {
      en: "Compare headphone sound at different volume levels without opening the device. Materials: Your own headphones and a familiar audio clip at a low volume. Steps: 1. Start with a low volume. 2. Listen briefly to speech or music. 3. Lower the volume further and compare how clearly you hear it. 4. If available, compare passive isolation with active noise cancellation in a safe, quiet place. Safety: Keep volume comfortable and take breaks. Avoid prolonged loud listening. Never insert sharp objects into an earbud or open a battery-powered device.",
      hi: "कम आवाज़ पर संगीत सुनकर समझो कि हेडफ़ोन ऑडियो संकेत को ध्वनि में बदलता है। आवाज़ इतनी रखें कि आसपास की ज़रूरी चेतावनियाँ भी सुन सकें।"
    },
    relatedIds: ["sound", "smartphone", "microphone", "battery"],
    visualType: "speaker-driver-cutaway"
  },
  {
    id: "camera",
    category: "gadgets",
    emoji: "📷",
    title: { en: "How Does a Camera Work?", hi: "कैमरा कैसे काम करता है?" },
    question: {
      en: "How can a camera turn light from the world into a photograph?",
      hi: "कैमरा दुनिया से आने वाले प्रकाश को तस्वीर में कैसे बदलता है?"
    },
    intro: {
      en: "A camera records light coming from a scene. The lens gathers and focuses the light onto an image sensor. The sensor contains many light-sensitive pixels that convert incoming light into electrical signals. The camera's electronics process those signals into a digital image. Focus, exposure time, and sensitivity all affect how the photo looks.",
      hi: "कैमरा किसी दृश्य से आने वाले प्रकाश को रिकॉर्ड करता है। लेंस प्रकाश को एकत्रित करके इमेज सेंसर पर केंद्रित करता है। सेंसर में बहुत-से प्रकाश-संवेदनशील पिक्सेल होते हैं, जो आने वाले प्रकाश को विद्युत संकेतों में बदलते हैं। कैमरे के इलेक्ट्रॉनिक्स इन संकेतों को संसाधित करके डिजिटल तस्वीर बनाते हैं। फ़ोकस, एक्सपोज़र का समय और संवेदनशीलता तस्वीर के रूप को प्रभावित करते हैं।"
    },
    thinkQuestion: {
      en: "What does the lens mainly do in a camera?",
      hi: "कैमरे में लेंस मुख्य रूप से क्या करता है?"
    },
    options: [
      { text: { en: "Focuses light onto the image sensor", hi: "प्रकाश को इमेज सेंसर पर केंद्रित करता है" }, correct: true, feedback: { en: "Correct! The lens directs light so the sensor can measure it and the camera can form an image.", hi: "सही! लेंस प्रकाश को इस तरह निर्देशित करता है कि सेंसर उसे माप सके और कैमरा तस्वीर बना सके।" } },
      { text: { en: "Stores every photo permanently by itself", hi: "हर तस्वीर को अपने आप स्थायी रूप से संग्रहीत करता है" }, correct: false, feedback: { en: "Not quite. The lens controls and focuses light; storage and image processing are handled by other parts.", hi: "पूरी तरह सही नहीं। लेंस प्रकाश को नियंत्रित और केंद्रित करता है; तस्वीर संसाधित करने और संग्रहीत करने का काम दूसरे हिस्से करते हैं।" } },
      { text: { en: "Produces all the light in the scene", hi: "दृश्य का सारा प्रकाश खुद बनाता है" }, correct: false, feedback: { en: "Not quite. The lens controls and focuses light; storage and image processing are handled by other parts.", hi: "पूरी तरह सही नहीं। लेंस प्रकाश को नियंत्रित और केंद्रित करता है; तस्वीर संसाधित करने और संग्रहीत करने का काम दूसरे हिस्से करते हैं।" } }
    ],
    workingSteps: [
      { title: { en: "Light comes from the scene", hi: "दृश्य से प्रकाश आता है" }, description: { en: "Light emitted by or reflected from objects enters the camera.", hi: "वस्तुओं से निकलने वाला या उनसे परावर्तित प्रकाश कैमरे में प्रवेश करता है।" } },
      { title: { en: "The lens focuses light", hi: "लेंस प्रकाश को केंद्रित करता है" }, description: { en: "The lens bends light by refraction so rays from different points in the scene form corresponding points on the sensor when focused.", hi: "लेंस अपवर्तन द्वारा प्रकाश को मोड़ता है, ताकि फ़ोकस सही होने पर दृश्य के अलग-अलग बिंदुओं से आने वाली किरणें सेंसर पर उनके अनुरूप बिंदु बनाएँ।" } },
      { title: { en: "The sensor measures light", hi: "सेंसर प्रकाश मापता है" }, description: { en: "Sensor pixels convert incoming photons into electrical signals. Colour information is commonly captured using colour filters or other sensor designs.", hi: "सेंसर के पिक्सेल आने वाले प्रकाश-कणों की ऊर्जा को विद्युत संकेतों में बदलते हैं। रंगों की जानकारी सामान्यतः रंग फ़िल्टर या अन्य सेंसर डिज़ाइनों से प्राप्त की जाती है।" } },
      { title: { en: "Software builds the photo", hi: "सॉफ़्टवेयर तस्वीर बनाता है" }, description: { en: "Camera electronics process the sensor data, often adjusting colour, brightness, and detail, then save the image in a file.", hi: "कैमरे के इलेक्ट्रॉनिक्स सेंसर के डेटा को संसाधित करते हैं। अक्सर रंग, चमक और विवरण में सुधार करके तस्वीर को फ़ाइल के रूप में सहेजा जाता है।" } }
    ],
    scienceBehind: {
      en: "A camera uses geometrical optics and electronic sensing. Refraction in the lens system changes the direction of light rays so a focused image forms on the sensor. Exposure depends mainly on how much light reaches each pixel and for how long. Digital cameras convert sensor measurements into numerical data, and image-processing software creates the final picture. In many cameras, a colour-filter array helps estimate red, green, and blue information; processing combines these measurements into colour pixels. Modern phone cameras may combine multiple frames computationally.",
      hi: "कैमरा ज्यामितीय प्रकाशिकी और इलेक्ट्रॉनिक संवेदन का उपयोग करता है। लेंस प्रणाली में अपवर्तन प्रकाश किरणों की दिशा बदलता है, जिससे सेंसर पर फ़ोकस की हुई छवि बनती है। एक्सपोज़र मुख्य रूप से इस बात पर निर्भर करता है कि प्रत्येक पिक्सेल तक कितना प्रकाश और कितने समय तक पहुँचता है। डिजिटल कैमरे सेंसर के मापों को संख्यात्मक डेटा में बदलते हैं और इमेज-प्रोसेसिंग सॉफ़्टवेयर अंतिम तस्वीर बनाता है। कई कैमरों में रंग फ़िल्टर ऐरे लाल, हरे और नीले रंग की जानकारी का अनुमान लगाने में मदद करता है। आधुनिक फ़ोन कैमरे कई फ़्रेमों को कम्प्यूटेशनल तरीके से जोड़ भी सकते हैं।"
    },
    realLifeUses: [
      { en: "Security cameras, webcams, microscopes with digital cameras, and phone cameras all use light-sensitive imaging systems.", hi: "सुरक्षा कैमरे, वेबकैम, डिजिटल कैमरे वाले माइक्रोस्कोप और फ़ोन कैमरे—सभी प्रकाश-संवेदनशील इमेजिंग प्रणालियों का उपयोग करते हैं।" },
      { en: "Longer exposure can help in low light, but movement may create blur.", hi: "कम रोशनी में अधिक एक्सपोज़र समय मदद कर सकता है, लेकिन वस्तु या कैमरा हिलने पर तस्वीर धुंधली हो सकती है।" },
      { en: "Scientists use cameras and specialised sensors to observe things beyond ordinary visible light, such as infrared radiation.", hi: "वैज्ञानिक सामान्य दृश्य प्रकाश से परे, जैसे अवरक्त विकिरण, का अध्ययन करने के लिए विशेष कैमरों और सेंसरों का उपयोग करते हैं।" }
    ],
    didYouKnow: {
      en: "The lens usually forms an upside-down optical image on the sensor. The camera's processing and display make the saved photo appear the right way up.",
      hi: "लेंस सामान्यतः सेंसर पर उल्टी प्रकाशीय छवि बनाता है। कैमरे की प्रोसेसिंग और डिस्प्ले के कारण सहेजी गई तस्वीर हमें सीधी दिखाई देती है।"
    },
    experiment: {
      en: "Explore focus and light without changing advanced settings. Materials: A camera or smartphone, a stationary object, and a well-lit location. Steps: 1. Place an object near a window or in even light. 2. Tap the object on the screen to focus, if your camera supports tap-to-focus. 3. Move a little closer or farther away and focus again. 4. Compare a photo in bright light with one in dim light, keeping the object still. Safety and privacy: Ask permission before photographing people. Do not photograph private documents or sensitive information. Never point a camera at the Sun through optical accessories.",
      hi: "एक स्थिर वस्तु की तस्वीर अलग-अलग दूरी और रोशनी में लो। स्क्रीन पर वस्तु को टैप करके फ़ोकस करो और तस्वीरों की स्पष्टता की तुलना करो।"
    },
    relatedIds: ["smartphone", "rainbow", "eyes", "mirror"],
    visualType: "camera-optics-sensor"
  },
  {
    id: "game-controller",
    category: "gadgets",
    emoji: "🎮",
    title: { en: "How Does a Game Controller Work?", hi: "गेम कंट्रोलर कैसे काम करता है?" },
    question: {
      en: "How does pressing a button make a character jump on the screen?",
      hi: "बटन दबाने पर स्क्रीन पर गेम का किरदार कैसे कूदता है?"
    },
    intro: {
      en: "A game controller is an input device. When you press a button, move a stick, or squeeze a trigger, a switch or sensor detects the action. The controller's electronics encode that input and send it to the console, computer, or phone, using a cable or wireless connection. The game software reads the input and updates what happens on screen. Some controllers also vibrate to provide feedback.",
      hi: "गेम कंट्रोलर एक इनपुट उपकरण है। जब आप बटन दबाते हैं, स्टिक घुमाते हैं या ट्रिगर दबाते हैं, तो कोई स्विच या सेंसर उस क्रिया को पहचानता है। कंट्रोलर के इलेक्ट्रॉनिक्स उस इनपुट को संकेत के रूप में बदलकर केबल या वायरलेस कनेक्शन से कंसोल, कंप्यूटर या फ़ोन तक भेजते हैं। गेम का सॉफ़्टवेयर इन संकेतों को पढ़ता है और स्क्रीन पर होने वाली गतिविधि बदलता है। कुछ कंट्रोलर प्रतिक्रिया देने के लिए कंपन भी करते हैं।"
    },
    thinkQuestion: {
      en: "What happens after you press a button on a typical game controller?",
      hi: "सामान्य गेम कंट्रोलर पर बटन दबाने के बाद क्या होता है?"
    },
    options: [
      { text: { en: "The controller sends an input signal that the game can interpret", hi: "कंट्रोलर इनपुट संकेत भेजता है, जिसे गेम समझ सकता है" }, correct: true, feedback: { en: "Correct! The game software interprets the input and updates the game state.", hi: "सही! गेम का सॉफ़्टवेयर इनपुट को समझकर गेम की स्थिति बदलता है।" } },
      { text: { en: "The screen physically moves", hi: "स्क्रीन वास्तव में हिलने लगती है" }, correct: false, feedback: { en: "Not quite. The controller sends input; the game's software decides what that input does in the game.", hi: "पूरी तरह सही नहीं। कंट्रोलर इनपुट भेजता है; गेम का सॉफ़्टवेयर तय करता है कि उस इनपुट का गेम में क्या प्रभाव होगा।" } },
      { text: { en: "The controller directly changes the laws of physics", hi: "कंट्रोलर सीधे भौतिकी के नियम बदल देता है" }, correct: false, feedback: { en: "Not quite. The controller sends input; the game's software decides what that input does in the game.", hi: "पूरी तरह सही नहीं। कंट्रोलर इनपुट भेजता है; गेम का सॉफ़्टवेयर तय करता है कि उस इनपुट का गेम में क्या प्रभाव होगा।" } }
    ],
    workingSteps: [
      { title: { en: "You move a control", hi: "आप कोई नियंत्रण हिलाते हैं" }, description: { en: "Pressing a button closes or changes an electrical switch; moving a stick changes a sensor reading. Different controllers use different input mechanisms.", hi: "बटन दबाने से विद्युत स्विच की स्थिति बदलती है; स्टिक घुमाने से सेंसर का माप बदलता है। अलग-अलग कंट्रोलर अलग इनपुट तकनीकें इस्तेमाल कर सकते हैं।" } },
      { title: { en: "The controller encodes the input", hi: "कंट्रोलर इनपुट को संकेत में बदलता है" }, description: { en: "A small electronic circuit reads the switch or sensor and represents the action as digital data.", hi: "एक छोटा इलेक्ट्रॉनिक सर्किट स्विच या सेंसर को पढ़ता है और क्रिया को डिजिटल डेटा के रूप में दर्शाता है।" } },
      { title: { en: "The device receives the signal", hi: "उपकरण संकेत प्राप्त करता है" }, description: { en: "The signal travels through a cable or a wireless link such as Bluetooth, depending on the controller.", hi: "कंट्रोलर के अनुसार संकेत केबल या ब्लूटूथ जैसे वायरलेस कनेक्शन से पहुँचता है।" } },
      { title: { en: "The game responds", hi: "गेम प्रतिक्रिया देता है" }, description: { en: "The game software interprets the input according to its rules. A jump button may trigger a jump, while a stick may control movement.", hi: "गेम का सॉफ़्टवेयर अपने नियमों के अनुसार इनपुट को समझता है। जंप बटन दबाने से किरदार कूद सकता है, जबकि स्टिक से उसकी गति नियंत्रित हो सकती है।" } }
    ],
    scienceBehind: {
      en: "Controllers combine electrical switches, sensors, microcontrollers, and communication systems. Many buttons use contacts that change an electrical circuit when pressed. Analogue sticks measure movement along two axes; many modern designs use Hall-effect or potentiometer-based sensing, while other designs are possible. The controller sends input data, and the game program updates its internal state and draws a new frame. Vibration feedback commonly uses a small motor or actuator to convert electrical energy into mechanical motion.",
      hi: "कंट्रोलर विद्युत स्विच, सेंसर, माइक्रोकंट्रोलर और संचार प्रणालियों को जोड़ते हैं। कई बटन ऐसे संपर्कों का उपयोग करते हैं जिनकी स्थिति दबाने पर विद्युत परिपथ बदल देती है। एनालॉग स्टिक दो दिशाओं में गति मापती हैं; कई आधुनिक डिज़ाइनों में हॉल-इफ़ेक्ट या पोटेंशियोमीटर आधारित सेंसर होते हैं, हालाँकि अन्य डिज़ाइन भी संभव हैं। कंट्रोलर इनपुट डेटा भेजता है और गेम प्रोग्राम अपनी आंतरिक स्थिति बदलकर नया फ़्रेम बनाता है। कंपन प्रतिक्रिया में सामान्यतः छोटी मोटर या एक्चुएटर विद्युत ऊर्जा को यांत्रिक गति में बदलता है।"
    },
    realLifeUses: [
      { en: "TV remotes, keyboards, mice, and accessibility switches also turn human actions into electronic input.", hi: "टीवी रिमोट, कीबोर्ड, माउस और सहायक स्विच भी मानवीय क्रियाओं को इलेक्ट्रॉनिक इनपुट में बदलते हैं।" },
      { en: "Robotics uses similar sensors and control signals to command motors and other mechanisms.", hi: "रोबोटिक्स में भी मिलते-जुलते सेंसर और नियंत्रण संकेत मोटर तथा अन्य तंत्रों को चलाने के लिए उपयोग किए जाते हैं।" },
      { en: "Vibration feedback in controllers is an example of a device turning electrical energy into a physical sensation.", hi: "कंट्रोलर का कंपन इस बात का उदाहरण है कि कोई उपकरण विद्युत ऊर्जा को महसूस होने वाली भौतिक गति में बदल सकता है।" }
    ],
    didYouKnow: {
      en: "A controller usually does not tell the game exactly how to animate everything. It sends inputs; the game software decides how the character or world responds.",
      hi: "कंट्रोलर सामान्यतः गेम को पूरी एनीमेशन नहीं बताता। वह इनपुट भेजता है; किरदार या दुनिया कैसे प्रतिक्रिया देंगे, यह गेम का सॉफ़्टवेयर तय करता है।"
    },
    experiment: {
      en: "Observe input and output in a simple browser game. Materials: A trusted, age-appropriate game or a simple offline game you already use. Steps: 1. Press one button and observe the action. 2. Try a different button or direction. 3. If the game offers a control guide, compare the input with the action shown. 4. Describe the sequence: action → input signal → game response. Safety and wellbeing: Use age-appropriate games, take regular breaks, and avoid opening or modifying powered controllers. Do not share account passwords or personal details in games.",
      hi: "किसी सुरक्षित गेम में एक-एक बटन दबाकर देखो कि हर इनपुट पर क्या होता है। समझो कि बटन संकेत भेजता है, लेकिन उस संकेत का अर्थ गेम का सॉफ़्टवेयर तय करता है।"
    },
    relatedIds: ["smartphone", "sound", "battery", "electric-motor"],
    visualType: "controller-input-signal-loop"
  },
  // Batch 3 – Forces & Motion Around Us
  {
    id: "bicycle-brakes",
    category: "forces-motion",
    emoji: "🚲",
    title: { en: "How Do Bicycle Brakes Work?", hi: "साइकिल के ब्रेक कैसे काम करते हैं?" },
    question: {
      en: "How can squeezing a small lever help stop a moving bicycle?",
      hi: "ब्रेक का छोटा-सा लीवर दबाने से चलती साइकिल कैसे रुक जाती है?"
    },
    intro: {
      en: "A moving bicycle has kinetic energy. When you squeeze the brake lever, a cable or hydraulic system transfers your action to the brake mechanism. Brake pads press against a rim or a rotor, depending on the design. Friction opposes the motion of the wheel and slows it down. Some of the bicycle's kinetic energy is transferred mainly into thermal energy in the braking surfaces and nearby parts. The tyre-road interaction also matters: if the tyres cannot grip the road, braking becomes less effective.",
      hi: "चलती हुई साइकिल में गतिज ऊर्जा होती है। जब आप ब्रेक लीवर दबाते हैं, तो केबल या हाइड्रोलिक सिस्टम आपकी क्रिया को ब्रेक तंत्र तक पहुँचाता है। डिज़ाइन के अनुसार ब्रेक पैड रिम या रोटर पर दबते हैं। घर्षण पहिए की गति का विरोध करता है और उसे धीमा करता है। साइकिल की कुछ गतिज ऊर्जा मुख्यतः ब्रेक की सतहों और आसपास के हिस्सों में ऊष्मीय ऊर्जा में बदल जाती है। टायर और सड़क के बीच पकड़ भी महत्वपूर्ण है; यदि टायर सड़क को अच्छी तरह नहीं पकड़ते, तो ब्रेक कम प्रभावी हो सकते हैं।"
    },
    thinkQuestion: {
      en: "What is the main role of friction in a bicycle brake?",
      hi: "साइकिल के ब्रेक में घर्षण की मुख्य भूमिका क्या है?"
    },
    options: [
      { text: { en: "It opposes motion and helps slow the wheel", hi: "यह गति का विरोध करके पहिए को धीमा करता है" }, correct: true, feedback: { en: "Correct! Friction between braking surfaces helps reduce wheel speed.", hi: "सही! ब्रेक की सतहों के बीच घर्षण पहिए की गति कम करने में मदद करता है।" } },
      { text: { en: "It creates extra fuel", hi: "यह अतिरिक्त ईंधन बनाता है" }, correct: false, feedback: { en: "Not quite. Braking depends on friction and on the tyre's grip on the road.", hi: "पूरी तरह सही नहीं। ब्रेक लगना घर्षण और टायर की सड़क पर पकड़—दोनों पर निर्भर करता है।" } },
      { text: { en: "It removes the bicycle's mass", hi: "यह साइकिल का द्रव्यमान हटा देता है" }, correct: false, feedback: { en: "Not quite. Braking depends on friction and on the tyre's grip on the road.", hi: "पूरी तरह सही नहीं। ब्रेक लगना घर्षण और टायर की सड़क पर पकड़—दोनों पर निर्भर करता है।" } }
    ],
    workingSteps: [
      { title: { en: "You squeeze the lever", hi: "आप लीवर दबाते हैं" }, description: { en: "Your hand applies a force to the brake lever.", hi: "आपका हाथ ब्रेक लीवर पर बल लगाता है।" } },
      { title: { en: "The force reaches the brake", hi: "बल ब्रेक तक पहुँचता है" }, description: { en: "A cable or hydraulic pressure moves the brake mechanism, depending on the bicycle's design.", hi: "साइकिल के डिज़ाइन के अनुसार केबल या हाइड्रोलिक दबाव ब्रेक तंत्र को चलाता है।" } },
      { title: { en: "The pads create friction", hi: "पैड घर्षण पैदा करते हैं" }, description: { en: "Brake pads press against the rim or disc rotor. Friction opposes the wheel's rotation.", hi: "ब्रेक पैड रिम या डिस्क रोटर पर दबते हैं। घर्षण पहिए के घूमने का विरोध करता है।" } },
      { title: { en: "The bicycle slows down", hi: "साइकिल धीमी होती है" }, description: { en: "The wheel slows, and some kinetic energy is converted into heat. The tyres must still grip the road for the bicycle to stop safely.", hi: "पहिया धीमा होता है और कुछ गतिज ऊर्जा ऊष्मा में बदल जाती है। साइकिल को सुरक्षित रूप से रोकने के लिए टायरों की सड़क पर पकड़ भी ज़रूरी है।" } }
    ],
    scienceBehind: {
      en: "Friction is a force that resists relative motion between surfaces in contact. When brake pads press on a rim or rotor, friction produces a torque that opposes wheel rotation. The bicycle's kinetic energy decreases as it slows; energy is transferred mostly as thermal energy, with smaller amounts going into sound, vibration, and other processes. Braking distance depends on speed, road conditions, tyre grip, brake condition, and how the rider applies the brakes. A bicycle does not stop instantly, and a wet or slippery surface can reduce grip.",
      hi: "घर्षण वह बल है जो संपर्क में मौजूद सतहों के बीच सापेक्ष गति का विरोध करता है। जब ब्रेक पैड रिम या रोटर पर दबते हैं, तो घर्षण ऐसा बलाघूर्ण पैदा करता है जो पहिए के घूमने का विरोध करता है। साइकिल धीमी होने पर उसकी गतिज ऊर्जा घटती है; ऊर्जा का अधिकांश भाग ऊष्मीय ऊर्जा के रूप में स्थानांतरित होता है, जबकि कुछ ऊर्जा ध्वनि, कंपन और अन्य प्रक्रियाओं में जाती है। रुकने की दूरी गति, सड़क की स्थिति, टायर की पकड़, ब्रेक की हालत और सवार के ब्रेक लगाने के तरीके पर निर्भर करती है। साइकिल तुरंत नहीं रुकती और गीली या फिसलन वाली सतह पर पकड़ कम हो सकती है।"
    },
    realLifeUses: [
      { en: "Car and train braking systems also use friction, although their designs and control systems differ.", hi: "कार और ट्रेन के ब्रेक भी घर्षण का उपयोग करते हैं, हालाँकि उनके डिज़ाइन और नियंत्रण प्रणालियाँ अलग होती हैं।" },
      { en: "Anti-lock braking systems in many vehicles help prevent wheels from locking during hard braking, supporting steering control on suitable surfaces.", hi: "कई वाहनों में एंटी-लॉक ब्रेकिंग सिस्टम तेज़ ब्रेक लगाने पर पहियों को लॉक होने से रोकने में मदद करता है, जिससे उपयुक्त सतहों पर दिशा नियंत्रित करने में सहायता मिलती है।" },
      { en: "Shoes grip the ground partly through friction, helping us walk without slipping.", hi: "जूते और ज़मीन के बीच घर्षण हमें फिसले बिना चलने में मदद करता है।" }
    ],
    didYouKnow: {
      en: "Braking can make the brake surfaces warm because some of the bicycle's kinetic energy becomes thermal energy.",
      hi: "ब्रेक लगाने पर ब्रेक की सतहें गर्म हो सकती हैं, क्योंकि साइकिल की कुछ गतिज ऊर्जा ऊष्मीय ऊर्जा में बदलती है।"
    },
    experiment: {
      en: "Observe braking without riding in traffic. Materials: A stationary bicycle and an adult's help if needed. Steps: 1. With the bicycle stationary, gently squeeze each brake lever separately. 2. Observe which brake pads or mechanisms move, without putting fingers near moving parts. 3. If safe and supervised, lift one wheel slightly and rotate it by hand, then gently apply the brake to see it slow. 4. Compare what you observe with the diagram. Safety: Do not test braking by riding fast or in traffic. Keep fingers away from wheels, rotors, chains, and pinch points. A responsible adult should check bicycle brakes before riding.",
      hi: "स्थिर साइकिल पर ब्रेक लीवर दबाकर देखो कि ब्रेक तंत्र कैसे चलता है। सड़क पर तेज़ चलाकर प्रयोग न करो और उँगलियाँ पहिए या डिस्क के पास न रखो।"
    },
    relatedIds: ["seat-belts", "elevator", "washing-machine", "sound"],
    visualType: "brake-friction-cutaway"
  },
  {
    id: "seat-belts",
    category: "forces-motion",
    emoji: "🛡️",
    title: { en: "How Do Seat Belts Work?", hi: "सीट बेल्ट कैसे काम करती है?" },
    question: {
      en: "Why does your body move forward when a car stops suddenly?",
      hi: "कार अचानक रुकने पर हमारा शरीर आगे की ओर क्यों बढ़ता है?"
    },
    intro: {
      en: "When a moving car stops suddenly, a passenger's body tends to keep moving forward because of inertia. A seat belt helps restrain the passenger so they slow down with the vehicle rather than striking the dashboard or windshield. The belt spreads force across stronger parts of the body, especially the pelvis and chest when worn correctly. Many modern seat-belt systems include retractors and pretensioners; some vehicles also use load limiters. The details vary by vehicle, but the belt is designed to reduce the risk of serious injury.",
      hi: "चलती कार अचानक रुकती है, तो जड़त्व के कारण यात्री का शरीर आगे बढ़ते रहने की प्रवृत्ति रखता है। सीट बेल्ट यात्री को रोकने में मदद करती है, ताकि वह डैशबोर्ड या विंडशील्ड से टकराने के बजाय वाहन के साथ धीमा हो। सही तरह पहनी गई बेल्ट बल को शरीर के मजबूत हिस्सों, विशेषकर श्रोणि और छाती, पर फैलाती है। कई आधुनिक सीट-बेल्ट प्रणालियों में रिट्रैक्टर और प्रीटेंशनर होते हैं; कुछ वाहनों में लोड लिमिटर भी होता है। प्रणाली का विवरण वाहन के अनुसार बदलता है, लेकिन इसका उद्देश्य गंभीर चोट का जोखिम कम करना है।"
    },
    thinkQuestion: {
      en: "Why does a passenger tend to move forward when a car stops suddenly?",
      hi: "कार अचानक रुकने पर यात्री आगे की ओर क्यों बढ़ता है?"
    },
    options: [
      { text: { en: "Because of inertia", hi: "जड़त्व के कारण" }, correct: true, feedback: { en: "Correct! Inertia is the tendency of an object to resist a change in its motion.", hi: "सही! जड़त्व किसी वस्तु की अपनी गति में बदलाव का विरोध करने की प्रवृत्ति है।" } },
      { text: { en: "Because gravity disappears", hi: "गुरुत्वाकर्षण समाप्त हो जाता है" }, correct: false, feedback: { en: "Not quite. The body tends to keep its motion unless a force changes it; a seat belt provides a restraining force.", hi: "पूरी तरह सही नहीं। शरीर अपनी गति बनाए रखने की प्रवृत्ति रखता है, जब तक कोई बल उसे बदल न दे; सीट बेल्ट रोकने वाला बल लगाती है।" } },
      { text: { en: "Because the seat belt pushes the car forward", hi: "सीट बेल्ट कार को आगे धकेलती है" }, correct: false, feedback: { en: "Not quite. The body tends to keep its motion unless a force changes it; a seat belt provides a restraining force.", hi: "पूरी तरह सही नहीं। शरीर अपनी गति बनाए रखने की प्रवृत्ति रखता है, जब तक कोई बल उसे बदल न दे; सीट बेल्ट रोकने वाला बल लगाती है।" } }
    ],
    workingSteps: [
      { title: { en: "The car and passenger are moving", hi: "कार और यात्री गति में हैं" }, description: { en: "Before braking, both the car and passenger move together.", hi: "ब्रेक लगाने से पहले कार और यात्री साथ-साथ गति कर रहे होते हैं।" } },
      { title: { en: "The car slows down", hi: "कार धीमी होती है" }, description: { en: "When the car brakes, the car's motion changes quickly. The passenger's body tends to continue moving because of inertia.", hi: "कार में ब्रेक लगने पर उसकी गति जल्दी बदलती है। जड़त्व के कारण यात्री का शरीर आगे बढ़ते रहने की प्रवृत्ति रखता है।" } },
      { title: { en: "The belt applies a restraining force", hi: "बेल्ट रोकने वाला बल लगाती है" }, description: { en: "The seat belt exerts a force that slows the passenger and helps prevent them from striking the vehicle interior.", hi: "सीट बेल्ट यात्री को धीमा करने वाला बल लगाती है और उसे वाहन के अंदरूनी हिस्सों से टकराने से बचाने में मदद करती है।" } },
      { title: { en: "Force is distributed", hi: "बल वितरित होता है" }, description: { en: "A correctly positioned belt spreads force across stronger body areas and helps increase the time over which the body slows, reducing the force compared with a very abrupt stop.", hi: "सही स्थिति में पहनी गई बेल्ट बल को शरीर के मजबूत हिस्सों में फैलाती है और शरीर के धीमा होने का समय बढ़ाने में मदद करती है। इससे बहुत अचानक रुकने की तुलना में बल कम हो सकता है।" } }
    ],
    scienceBehind: {
      en: "Newton's first law describes inertia: an object continues in its state of rest or uniform straight-line motion unless a net external force changes it. During a sudden stop, the car slows, but the passenger's body tends to keep moving. The belt supplies the force that changes the passenger's motion. For the same change in momentum, increasing the stopping time can reduce the average force. Correct fit matters: the lap belt should lie low across the hips/pelvis, and the shoulder belt should cross the chest and shoulder, not the neck or under the arm. Seat belts work together with airbags and other vehicle safety features.",
      hi: "न्यूटन का पहला नियम जड़त्व को समझाता है: कोई वस्तु विराम में रहती है या समान वेग से सीधी रेखा में चलती रहती है, जब तक उस पर लगने वाला परिणामी बाहरी बल उसकी अवस्था न बदल दे। अचानक रुकने पर कार धीमी होती है, लेकिन यात्री का शरीर आगे बढ़ते रहने की प्रवृत्ति रखता है। बेल्ट वह बल लगाती है जो यात्री की गति बदलता है। समान संवेग-परिवर्तन के लिए रुकने का समय बढ़ाने से औसत बल कम हो सकता है। बेल्ट का सही फिट होना ज़रूरी है: गोद वाली बेल्ट कूल्हों/श्रोणि के नीचे वाले हिस्से पर और कंधे वाली बेल्ट छाती व कंधे के ऊपर होनी चाहिए—गर्दन पर या बाँह के नीचे नहीं। सीट बेल्ट एयरबैग और अन्य सुरक्षा प्रणालियों के साथ मिलकर काम करती है।"
    },
    realLifeUses: [
      { en: "Helmets and child restraints also help manage forces and reduce injury risk, but each must be appropriate for the activity and correctly fitted.", hi: "हेलमेट और बच्चों के लिए उपयुक्त रेस्ट्रेंट भी बलों को नियंत्रित करके चोट का जोखिम घटाते हैं, लेकिन उनका सही प्रकार और फिट होना ज़रूरी है।" },
      { en: "Airbags are designed to work with seat belts, not replace them.", hi: "एयरबैग सीट बेल्ट के साथ काम करने के लिए बनाए जाते हैं, उसकी जगह लेने के लिए नहीं।" },
      { en: "The same idea of inertia helps explain why loose objects can slide forward when a vehicle brakes.", hi: "जड़त्व का यही सिद्धांत समझाता है कि वाहन में रखी ढीली वस्तुएँ ब्रेक लगाने पर आगे क्यों खिसक सकती हैं।" }
    ],
    didYouKnow: {
      en: "Seat belts are designed to restrain people in a crash, not simply to keep them comfortable during normal driving.",
      hi: "सीट बेल्ट का मुख्य उद्देश्य सामान्य सफ़र में आराम देना नहीं, बल्कि दुर्घटना के दौरान व्यक्ति को सुरक्षित रूप से रोकने में मदद करना है।"
    },
    experiment: {
      en: "Model inertia using a small toy. Materials: A toy figure, a toy car or small tray, and a flat table. Steps: 1. Place the toy figure on the car or tray. 2. Move it gently across the table at a steady speed. 3. Stop the car or tray gently and observe the toy's tendency to keep moving. 4. Repeat with the toy secured safely using a soft band, without launching or dropping it. Safety: Do not perform this experiment in a real vehicle. Never test seat belts or crash effects on a person.",
      hi: "खिलौना कार को धीरे चलाकर रोकने पर खिलौने की गति देखो। प्रयोग केवल मेज़ पर करो—किसी व्यक्ति पर या असली वाहन में नहीं।"
    },
    relatedIds: ["bicycle-brakes", "elevator", "washing-machine", "gravity"],
    visualType: "inertia-restraint-system"
  },
  {
    id: "elevator",
    category: "forces-motion",
    emoji: "🛗",
    title: { en: "How Does an Elevator Work?", hi: "लिफ़्ट कैसे काम करती है?" },
    question: {
      en: "How can an elevator lift people smoothly between floors?",
      hi: "लिफ़्ट लोगों को एक मंज़िल से दूसरी मंज़िल तक आसानी से कैसे ले जाती है?"
    },
    intro: {
      en: "Many building elevators use an electric motor, strong suspension ropes or belts, and a counterweight. The motor drives a traction system that moves the elevator car and counterweight in opposite directions. The counterweight balances much of the car's weight plus part of its rated load, so the motor does not need to lift the full weight alone. Other elevators, especially in some low-rise buildings, use hydraulic systems. Brakes, sensors, controllers, and door interlocks help the elevator stop and operate safely.",
      hi: "कई इमारतों की लिफ़्ट में विद्युत मोटर, मज़बूत रस्सियाँ या बेल्ट और काउंटरवेट होता है। मोटर ट्रैक्शन तंत्र को चलाती है, जिससे लिफ़्ट का केबिन और काउंटरवेट विपरीत दिशाओं में चलते हैं। काउंटरवेट केबिन के वजन और उसकी निर्धारित क्षमता के भार के एक हिस्से को संतुलित करता है, इसलिए मोटर को अकेले पूरा वजन उठाने की ज़रूरत नहीं होती। कुछ अन्य लिफ़्टों, विशेषकर कुछ कम-मंज़िला इमारतों में, हाइड्रोलिक सिस्टम का उपयोग होता है। ब्रेक, सेंसर, नियंत्रक और दरवाज़े के इंटरलॉक लिफ़्ट को सुरक्षित ढंग से रोकने और चलाने में मदद करते हैं।"
    },
    thinkQuestion: {
      en: "In a common traction elevator, what is the counterweight mainly for?",
      hi: "सामान्य ट्रैक्शन लिफ़्ट में काउंटरवेट का मुख्य काम क्या है?"
    },
    options: [
      { text: { en: "To balance much of the elevator car's weight and reduce motor effort", hi: "केबिन के वजन के बड़े हिस्से को संतुलित करके मोटर का प्रयास कम करना" }, correct: true, feedback: { en: "Correct! A counterweight balances much of the load, improving efficiency in a traction elevator.", hi: "सही! काउंटरवेट भार के बड़े हिस्से को संतुलित करता है और ट्रैक्शन लिफ़्ट की दक्षता बढ़ाने में मदद करता है।" } },
      { text: { en: "To make the elevator float without cables or support", hi: "बिना केबल या सहारे के लिफ़्ट को हवा में तैराना" }, correct: false, feedback: { en: "Not quite. The counterweight helps balance the elevator car; safety systems and the drive system have other roles.", hi: "पूरी तरह सही नहीं। काउंटरवेट लिफ़्ट के केबिन को संतुलित करने में मदद करता है; सुरक्षा और ड्राइव सिस्टम के अलग काम होते हैं।" } },
      { text: { en: "To create extra floors", hi: "अतिरिक्त मंज़िलें बनाना" }, correct: false, feedback: { en: "Not quite. The counterweight helps balance the elevator car; safety systems and the drive system have other roles.", hi: "पूरी तरह सही नहीं। काउंटरवेट लिफ़्ट के केबिन को संतुलित करने में मदद करता है; सुरक्षा और ड्राइव सिस्टम के अलग काम होते हैं।" } }
    ],
    workingSteps: [
      { title: { en: "You choose a floor", hi: "आप मंज़िल चुनते हैं" }, description: { en: "The control system receives the floor request and checks conditions before starting.", hi: "नियंत्रण प्रणाली मंज़िल का अनुरोध प्राप्त करती है और चलने से पहले आवश्यक स्थितियों की जाँच करती है।" } },
      { title: { en: "The drive system moves the car", hi: "ड्राइव सिस्टम केबिन को चलाता है" }, description: { en: "In a traction elevator, a motor turns a sheave that moves the suspension ropes or belts; the counterweight moves in the opposite direction.", hi: "ट्रैक्शन लिफ़्ट में मोटर एक शीव को घुमाती है, जो सहायक रस्सियों या बेल्ट को चलाती है; काउंटरवेट विपरीत दिशा में चलता है।" } },
      { title: { en: "Sensors track the journey", hi: "सेंसर यात्रा पर नज़र रखते हैं" }, description: { en: "The control system uses position and speed information to manage movement and prepare to stop at the selected floor.", hi: "नियंत्रण प्रणाली स्थिति और गति की जानकारी से लिफ़्ट की गति नियंत्रित करती है और चुनी गई मंज़िल पर रुकने की तैयारी करती है।" } },
      { title: { en: "The elevator stops safely", hi: "लिफ़्ट सुरक्षित रुकती है" }, description: { en: "The drive slows the car, the braking system holds it, and door interlocks help ensure doors operate only under safe conditions.", hi: "ड्राइव सिस्टम केबिन को धीमा करता है, ब्रेक उसे रोककर रखते हैं और दरवाज़े के इंटरलॉक सुरक्षित परिस्थितियों में ही दरवाज़े चलने देने में मदद करते हैं।" } }
    ],
    scienceBehind: {
      en: "An elevator uses forces, energy transfer, motors, and control systems. The motor converts electrical energy into mechanical motion. In a traction elevator, the counterweight reduces the difference in load the motor must move; the motor still needs to overcome friction and manage acceleration and braking. The elevator's control system monitors position, speed, doors, and other safety conditions. Hydraulic elevators use a pump and fluid pressure to move a piston that raises the car, with a controlled return for descent. Actual designs include multiple independent safety measures and must be maintained by qualified professionals.",
      hi: "लिफ़्ट में बल, ऊर्जा का स्थानांतरण, मोटर और नियंत्रण प्रणालियाँ काम करती हैं। मोटर विद्युत ऊर्जा को यांत्रिक गति में बदलती है। ट्रैक्शन लिफ़्ट में काउंटरवेट उस भार के अंतर को कम करता है जिसे मोटर को चलाना पड़ता है; फिर भी मोटर को घर्षण, त्वरण और ब्रेकिंग का प्रबंधन करना होता है। नियंत्रण प्रणाली स्थिति, गति, दरवाज़ों और अन्य सुरक्षा स्थितियों पर नज़र रखती है। हाइड्रोलिक लिफ़्ट में पंप और द्रव का दबाव पिस्टन को चलाकर केबिन ऊपर उठाता है; नीचे आने की गति भी नियंत्रित होती है। वास्तविक लिफ़्टों में कई स्वतंत्र सुरक्षा उपाय होते हैं और उनका रखरखाव प्रशिक्षित विशेषज्ञों को करना चाहिए।"
    },
    realLifeUses: [
      { en: "Cranes and hoists also use motors, cables, pulleys, and braking systems to move loads.", hi: "क्रेन और होइस्ट भी भार उठाने के लिए मोटर, केबल, पुली और ब्रेक प्रणालियों का उपयोग करते हैं।" },
      { en: "Counterweights are also used in some stage systems and machines to balance loads.", hi: "कुछ मंच प्रणालियों और मशीनों में भी भार संतुलित करने के लिए काउंटरवेट उपयोग किए जाते हैं।" },
      { en: "Regenerative elevator drives in some systems can recover some energy during certain movements and feed it back into the electrical system.", hi: "कुछ लिफ़्ट प्रणालियों में रीजेनेरेटिव ड्राइव कुछ स्थितियों में गति के दौरान ऊर्जा पुनः प्राप्त करके विद्युत प्रणाली में लौटा सकती है।" }
    ],
    didYouKnow: {
      en: "Not every elevator uses the same mechanism. Traction and hydraulic systems are two common approaches.",
      hi: "हर लिफ़्ट एक ही तंत्र से नहीं चलती। ट्रैक्शन और हाइड्रोलिक सिस्टम दो सामान्य तरीके हैं।"
    },
    experiment: {
      en: "Model a counterweight with a paper cup. Materials: Two small paper cups, string, a pencil supported securely by two stacks of books, and a few coins. Do this with an adult's help. Steps: 1. Make a simple pulley model using the pencil as an axle only if it can be supported securely; otherwise use a safe classroom pulley kit. 2. Attach one cup to each end of the string. 3. Add a few coins to one cup and observe how the system moves. 4. Add coins to the other cup and compare how the balance changes. Safety: This is only a small tabletop model. Never attach the model to a person, climb on furniture, or interfere with a real elevator.",
      hi: "दो छोटे कप और सुरक्षित पुली मॉडल से भार संतुलन समझो। असली लिफ़्ट के हिस्सों को छूने या खोलने की कोशिश न करो।"
    },
    relatedIds: ["bicycle-brakes", "seat-belts", "washing-machine", "electric-motor"],
    visualType: "elevator-counterweight-system"
  },
  {
    id: "washing-machine",
    category: "forces-motion",
    emoji: "🧺",
    title: { en: "How Does a Washing Machine Work?", hi: "वॉशिंग मशीन कैसे काम करती है?" },
    question: {
      en: "How can a machine wash clothes by moving water, detergent, and fabric in a controlled cycle?",
      hi: "मशीन पानी, डिटर्जेंट और कपड़ों को नियंत्रित तरीके से चलाकर सफ़ाई कैसे करती है?"
    },
    intro: {
      en: "A washing machine cleans fabric through a combination of water, detergent, and mechanical action. The detergent helps water wet fabric and helps loosen oils and dirt. A motor moves the drum or agitator, creating motion between clothes and water. The machine drains dirty water, rinses the fabric, and in many designs spins the drum quickly to remove much of the remaining water. The exact sequence depends on the wash programme and machine design.",
      hi: "वॉशिंग मशीन पानी, डिटर्जेंट और यांत्रिक क्रिया के मेल से कपड़ों को साफ़ करती है। डिटर्जेंट पानी को कपड़े में फैलने में मदद करता है और तेल तथा गंदगी को ढीला करने में सहायता करता है। मोटर ड्रम या एजीटेटर को चलाती है, जिससे कपड़ों और पानी के बीच गति होती है। मशीन गंदा पानी निकालती है, कपड़ों को धोकर डिटर्जेंट हटाती है और कई डिज़ाइनों में ड्रम को तेज़ घुमाकर बचा हुआ पानी बाहर निकालती है। सही क्रम वॉश प्रोग्राम और मशीन के डिज़ाइन पर निर्भर करता है।"
    },
    thinkQuestion: {
      en: "What mainly helps a washing machine remove dirt from clothes?",
      hi: "वॉशिंग मशीन कपड़ों से गंदगी हटाने में मुख्य रूप से किन चीज़ों का उपयोग करती है?"
    },
    options: [
      { text: { en: "Detergent, water, and mechanical action", hi: "डिटर्जेंट, पानी और यांत्रिक क्रिया" }, correct: true, feedback: { en: "Correct! These work together to loosen, carry away, and rinse dirt from fabric.", hi: "सही! ये मिलकर कपड़े की गंदगी को ढीला करने, हटाने और धोकर निकालने में मदद करते हैं।" } },
      { text: { en: "Only the colour of the drum", hi: "केवल ड्रम का रंग" }, correct: false, feedback: { en: "Not quite. Cleaning depends on water, detergent, movement, and the rinse process—not on the drum's colour.", hi: "पूरी तरह सही नहीं। सफ़ाई पानी, डिटर्जेंट, गति और रिंसिंग पर निर्भर करती है—ड्रम के रंग पर नहीं।" } },
      { text: { en: "Gravity disappearing during the wash", hi: "धुलाई के समय गुरुत्वाकर्षण का गायब होना" }, correct: false, feedback: { en: "Not quite. Cleaning depends on water, detergent, movement, and the rinse process—not on the drum's colour.", hi: "पूरी तरह सही नहीं। सफ़ाई पानी, डिटर्जेंट, गति और रिंसिंग पर निर्भर करती है—ड्रम के रंग पर नहीं।" } }
    ],
    workingSteps: [
      { title: { en: "Water and detergent enter", hi: "पानी और डिटर्जेंट अंदर आते हैं" }, description: { en: "The machine adds a measured amount of water and detergent according to the selected programme and load.", hi: "चुने गए प्रोग्राम और कपड़ों की मात्रा के अनुसार मशीन पानी और डिटर्जेंट लेती है।" } },
      { title: { en: "Clothes and water move", hi: "कपड़े और पानी हिलते हैं" }, description: { en: "The motor moves the drum or agitator. Fabric moves through water and detergent, helping loosen dirt.", hi: "मोटर ड्रम या एजीटेटर को चलाती है। कपड़े पानी और डिटर्जेंट में हिलते हैं, जिससे गंदगी ढीली होने में मदद मिलती है।" } },
      { title: { en: "Dirty water drains and clothes rinse", hi: "गंदा पानी निकलता है और कपड़े धुलते हैं" }, description: { en: "The machine drains wash water and adds rinse water to carry away detergent and loosened dirt.", hi: "मशीन धुलाई का पानी निकालती है और डिटर्जेंट तथा ढीली हुई गंदगी हटाने के लिए रिंसिंग का पानी लेती है।" } },
      { title: { en: "Spinning removes much of the water", hi: "स्पिनिंग से अधिकांश पानी निकलता है" }, description: { en: "In the spin cycle, the drum rotates rapidly. Water is driven out through drum openings and drained away.", hi: "स्पिन चक्र में ड्रम तेज़ी से घूमता है। पानी ड्रम के छेदों से बाहर निकलकर नाली में चला जाता है।" } }
    ],
    scienceBehind: {
      en: "Washing machines combine chemistry and physics. Detergent molecules help water spread across fabric and help lift oily dirt into the wash water. Mechanical movement repeatedly brings fabric, water, and detergent into contact. Rinsing removes much of the suspended dirt and remaining detergent. During spinning, the drum's circular motion and the drum's holes allow water to move outward relative to the rotating drum and escape; the drum then drains it away. Modern machines use sensors and control electronics to manage water level, timing, spin speed, and imbalance, depending on the model.",
      hi: "वॉशिंग मशीन रसायन विज्ञान और भौतिकी दोनों का उपयोग करती है। डिटर्जेंट के अणु पानी को कपड़े पर फैलने और तैलीय गंदगी को धुलाई के पानी में हटाने में मदद करते हैं। यांत्रिक गति कपड़े, पानी और डिटर्जेंट को बार-बार संपर्क में लाती है। रिंसिंग से निलंबित गंदगी और बचा हुआ डिटर्जेंट हटता है। स्पिन के दौरान ड्रम की वृत्तीय गति और उसके छेदों के कारण पानी घूमते ड्रम के सापेक्ष बाहर की ओर जाता है और बाहर निकल जाता है; फिर मशीन उसे नाली में भेजती है। आधुनिक मशीनें, मॉडल के अनुसार, पानी के स्तर, समय, स्पिन गति और असंतुलन को नियंत्रित करने के लिए सेंसर और इलेक्ट्रॉनिक्स का उपयोग करती हैं।"
    },
    realLifeUses: [
      { en: "Spin dryers and salad spinners also use rotation to remove liquid from items.", hi: "स्पिन ड्रायर और सलाद स्पिनर भी वस्तुओं से तरल हटाने के लिए घूर्णन का उपयोग करते हैं।" },
      { en: "Detergents are designed to help water interact with oily dirt that plain water may not remove easily.", hi: "डिटर्जेंट पानी को तैलीय गंदगी के साथ बेहतर ढंग से काम करने में मदद करते हैं, जिसे केवल पानी से हटाना कठिन हो सकता है।" },
      { en: "Load-balancing systems reduce excessive vibration when clothes collect unevenly in the drum.", hi: "कपड़े ड्रम में असमान रूप से इकट्ठे होने पर लोड-बैलेंसिंग सिस्टम अत्यधिक कंपन कम करने में मदद करता है।" }
    ],
    didYouKnow: {
      en: "The fast spin cycle mainly removes water; most cleaning happens through detergent, water, and mechanical action during the wash and rinse stages.",
      hi: "तेज़ स्पिन चक्र मुख्यतः पानी निकालता है; अधिकांश सफ़ाई धुलाई और रिंसिंग के दौरान पानी, डिटर्जेंट और यांत्रिक क्रिया से होती है।"
    },
    experiment: {
      en: "Observe how rotation moves water in a salad spinner, if one is available. Materials: A clean salad spinner and a few washed lettuce leaves or clean damp cloth pieces. Steps: 1. Place the damp items in the spinner basket. 2. Close the lid and rotate the handle as instructed by the manufacturer. 3. Stop the spinner and observe the collected water. 4. Compare the result with the washing-machine spin diagram. Safety: Use only a hand-operated spinner with its lid closed. Do not touch a moving drum or open a washing machine while it is operating. Children should not handle detergents without adult supervision.",
      hi: "यदि घर में सलाद स्पिनर है, तो उसकी मदद से समझो कि घूर्णन पानी हटाने में कैसे मदद करता है। चलती वॉशिंग मशीन को कभी न खोलो।"
    },
    relatedIds: ["bicycle-brakes", "seat-belts", "elevator", "sound"],
    visualType: "washing-machine-cycle-cutaway"
  },
  // Batch 4 – Light & Optics Around Us
  {
    id: "mirror-reflection",
    category: "light-optics",
    emoji: "🪞",
    title: { en: "Why Does a Mirror Show Your Reflection?", hi: "आईने में हमारा प्रतिबिंब क्यों दिखाई देता है?" },
    question: {
      en: "How does a mirror send light back to your eyes so you can see yourself?",
      hi: "आईना प्रकाश को आपकी आँखों तक वापस कैसे पहुँचाता है, जिससे आप अपना चेहरा देख पाते हैं?"
    },
    intro: {
      en: "Light from a lamp, the Sun, or another source falls on your face and reflects in many directions. When some of that light reaches a mirror, the smooth reflective surface sends it back in a predictable way. Light then travels from the mirror into your eyes, and your brain interprets the rays as an image appearing behind the mirror. A plane mirror usually forms a virtual, upright image that is about the same size as the object and appears as far behind the mirror as the object is in front.",
      hi: "लैंप, सूर्य या किसी अन्य स्रोत का प्रकाश आपके चेहरे पर पड़कर कई दिशाओं में परावर्तित होता है। जब उस प्रकाश का कुछ भाग आईने तक पहुँचता है, तो उसकी चिकनी परावर्तक सतह प्रकाश को एक निश्चित नियम के अनुसार वापस भेजती है। फिर प्रकाश आईने से आपकी आँखों तक पहुँचता है और मस्तिष्क किरणों को ऐसे समझता है मानो प्रतिबिंब आईने के पीछे दिखाई दे रहा हो। समतल आईना सामान्यतः सीधा, आभासी और वस्तु के लगभग समान आकार का प्रतिबिंब बनाता है। प्रतिबिंब आईने के पीछे उतनी ही दूरी पर दिखाई देता है जितनी दूरी पर वस्तु आईने के सामने होती है।"
    },
    thinkQuestion: {
      en: "What mainly helps a plane mirror form a clear reflection?",
      hi: "समतल आईना साफ़ प्रतिबिंब बनाने में मुख्य रूप से किस कारण मदद करता है?"
    },
    options: [
      { text: { en: "Its smooth reflective surface", hi: "उसकी चिकनी परावर्तक सतह" }, correct: true, feedback: { en: "Correct! A smooth surface reflects light in an orderly way, allowing a clear image to form.", hi: "सही! चिकनी सतह प्रकाश को व्यवस्थित ढंग से परावर्तित करती है, जिससे साफ़ प्रतिबिंब बनता है।" } },
      { text: { en: "It creates light from nothing", hi: "वह बिना स्रोत के प्रकाश बनाता है" }, correct: false, feedback: { en: "Not quite. A mirror does not create light; it reflects light that reaches it.", hi: "पूरी तरह सही नहीं। आईना प्रकाश बनाता नहीं है; वह उस पर पड़ने वाले प्रकाश को परावर्तित करता है।" } },
      { text: { en: "It absorbs all the light", hi: "वह सारा प्रकाश सोख लेता है" }, correct: false, feedback: { en: "Not quite. A mirror does not create light; it reflects light that reaches it.", hi: "पूरी तरह सही नहीं। आईना प्रकाश बनाता नहीं है; वह उस पर पड़ने वाले प्रकाश को परावर्तित करता है।" } }
    ],
    workingSteps: [
      { title: { en: "Light illuminates the object", hi: "प्रकाश वस्तु को प्रकाशित करता है" }, description: { en: "Light from a source falls on your face and reflects from it.", hi: "प्रकाश स्रोत से आने वाला प्रकाश आपके चेहरे पर पड़ता है और वहाँ से परावर्तित होता है।" } },
      { title: { en: "Light reaches the mirror", hi: "प्रकाश आईने तक पहुँचता है" }, description: { en: "Some reflected light reaches the mirror's smooth surface.", hi: "परावर्तित प्रकाश का कुछ भाग आईने की चिकनी सतह तक पहुँचता है।" } },
      { title: { en: "The mirror reflects light", hi: "आईना प्रकाश परावर्तित करता है" }, description: { en: "The angle of reflection equals the angle of incidence for each ray in the simplified plane-mirror model.", hi: "समतल आईने के सरल मॉडल में परावर्तन का कोण, आपतन कोण के बराबर होता है।" } },
      { title: { en: "Your eyes and brain interpret the rays", hi: "आपकी आँखें और मस्तिष्क किरणों को समझते हैं" }, description: { en: "Reflected light enters your eyes. Your brain interprets the rays as an image that appears behind the mirror.", hi: "परावर्तित प्रकाश आपकी आँखों में प्रवेश करता है। मस्तिष्क किरणों को ऐसे समझता है मानो प्रतिबिंब आईने के पीछे हो।" } }
    ],
    scienceBehind: {
      en: "Reflection is the change in direction of light when it reaches a surface. On a smooth surface, parallel incoming rays reflect in an orderly way; this is called regular or specular reflection. On a rough surface, light is scattered in many directions, so a clear image usually does not form. A plane mirror forms a virtual image: the light rays do not actually meet behind the mirror, but they appear to come from there when traced backward. The image is upright and approximately the same size as the object.",
      hi: "परावर्तन तब होता है जब प्रकाश किसी सतह से टकराकर दिशा बदलता है। चिकनी सतह पर आने वाली समानांतर किरणें व्यवस्थित ढंग से परावर्तित होती हैं; इसे नियमित या दर्पणीय परावर्तन कहते हैं। खुरदरी सतह पर प्रकाश कई दिशाओं में बिखरता है, इसलिए सामान्यतः साफ़ प्रतिबिंब नहीं बनता। समतल आईना आभासी प्रतिबिंब बनाता है: प्रकाश की किरणें वास्तव में आईने के पीछे नहीं मिलतीं, लेकिन पीछे की ओर बढ़ाकर देखने पर ऐसा प्रतीत होता है कि वे वहीं से आ रही हैं। प्रतिबिंब सीधा और वस्तु के लगभग समान आकार का होता है।"
    },
    realLifeUses: [
      { en: "Rear-view and side-view mirrors help drivers see areas behind or beside a vehicle; their shape and field of view vary by mirror type.", hi: "रियर-व्यू और साइड-व्यू आईने वाहन के पीछे या बगल के हिस्से देखने में मदद करते हैं; उनका आकार और दृश्य क्षेत्र आईने के प्रकार पर निर्भर करता है।" },
      { en: "Periscopes use mirrors or prisms to redirect light around obstacles.", hi: "पेरिस्कोप बाधाओं के आसपास प्रकाश की दिशा बदलने के लिए आईनों या प्रिज़्म का उपयोग करते हैं।" },
      { en: "Reflecting telescopes use mirrors to collect and focus light from distant objects.", hi: "परावर्तक दूरबीनें दूर की वस्तुओं से आने वाला प्रकाश इकट्ठा करने और केंद्रित करने के लिए आईनों का उपयोग करती हैं।" }
    ],
    didYouKnow: {
      en: "A mirror does not show an image because it produces light; it shows an image because light from the surroundings is reflected into your eyes.",
      hi: "आईना प्रतिबिंब इसलिए नहीं दिखाता कि वह प्रकाश बनाता है; वह आसपास से आने वाले प्रकाश को आपकी आँखों तक परावर्तित करता है।"
    },
    experiment: {
      en: "Compare reflection from a mirror and a sheet of paper. Materials: A small mirror, a sheet of white paper, and a torch (flashlight). Steps: 1. Place the mirror and paper on a table. 2. Shine the torch at each surface from a safe angle; do not shine it into anyone's eyes. 3. Observe how the reflected light is directed from the mirror and scattered by the paper. 4. Look at your reflection in the mirror under normal room lighting. Safety: Never shine a bright torch or laser into anyone's eyes. Do not use sunlight concentrated by mirrors.",
      hi: "आईने और सफ़ेद कागज़ पर टॉर्च का प्रकाश डालकर देखो कि दोनों प्रकाश को कैसे परावर्तित करते हैं। प्रकाश आँखों में न डालो।"
    },
    relatedIds: ["rainbow", "eyeglasses", "fibre-optic-internet", "camera"],
    visualType: "light-ray-reflection"
  },
  {
    id: "eyeglasses",
    category: "light-optics",
    emoji: "👓",
    title: { en: "How Do Eyeglasses Work?", hi: "चश्मे के लेंस कैसे काम करते हैं?" },
    question: {
      en: "How can a thin lens help someone see distant or nearby objects more clearly?",
      hi: "पतला-सा लेंस दूर या पास की वस्तुओं को साफ़ देखने में कैसे मदद करता है?"
    },
    intro: {
      en: "To see clearly, light entering the eye must be focused onto the retina at the back of the eye. The cornea and the eye's natural lens do most of this focusing. If the eye's shape or focusing power causes the image to form in front of or behind the retina, distant or nearby objects may look blurry. Eyeglasses use lenses to adjust the path of incoming light so the eye can form a clearer image. Concave lenses are commonly used to correct myopia (short-sightedness), while convex lenses are commonly used to correct hyperopia (long-sightedness); the correct prescription depends on the person.",
      hi: "स्पष्ट देखने के लिए आँख में प्रवेश करने वाला प्रकाश आँख के पीछे स्थित रेटिना पर केंद्रित होना चाहिए। कॉर्निया और आँख का प्राकृतिक लेंस अधिकांश फोकसिंग करते हैं। यदि आँख का आकार या उसकी फोकस करने की क्षमता ऐसी हो कि प्रतिबिंब रेटिना के आगे या पीछे बने, तो दूर या पास की वस्तुएँ धुँधली दिखाई दे सकती हैं। चश्मे के लेंस आने वाले प्रकाश का मार्ग बदलते हैं, ताकि आँख साफ़ प्रतिबिंब बना सके। मायोपिया (निकट-दृष्टिदोष) को ठीक करने के लिए सामान्यतः अवतल लेंस और हाइपरमेट्रोपिया (दूर-दृष्टिदोष) के लिए सामान्यतः उत्तल लेंस उपयोग किए जाते हैं; सही नंबर व्यक्ति के अनुसार तय होता है।"
    },
    thinkQuestion: {
      en: "What is the main job of an eyeglass lens?",
      hi: "चश्मे के लेंस का मुख्य काम क्या है?"
    },
    options: [
      { text: { en: "To change the path of light so the eye can focus more clearly", hi: "प्रकाश का मार्ग बदलना ताकि आँख बेहतर फोकस कर सके" }, correct: true, feedback: { en: "Correct! Lenses refract light and help the eye focus an image on the retina.", hi: "सही! लेंस प्रकाश का अपवर्तन करके आँख को रेटिना पर प्रतिबिंब केंद्रित करने में मदद करते हैं।" } },
      { text: { en: "To make objects produce their own light", hi: "वस्तुओं से उनका अपना प्रकाश निकलवाना" }, correct: false, feedback: { en: "Not quite. Eyeglass lenses redirect light; they do not make objects emit light or enlarge the eye.", hi: "पूरी तरह सही नहीं। चश्मे के लेंस प्रकाश की दिशा बदलते हैं; वे वस्तुओं से प्रकाश नहीं निकलवाते और न ही आँख को बड़ा करते हैं।" } },
      { text: { en: "To increase the size of the eye", hi: "आँख का आकार बढ़ाना" }, correct: false, feedback: { en: "Not quite. Eyeglass lenses redirect light; they do not make objects emit light or enlarge the eye.", hi: "पूरी तरह सही नहीं। चश्मे के लेंस प्रकाश की दिशा बदलते हैं; वे वस्तुओं से प्रकाश नहीं निकलवाते और न ही आँख को बड़ा करते हैं।" } }
    ],
    workingSteps: [
      { title: { en: "Light enters the eye", hi: "प्रकाश आँख में प्रवेश करता है" }, description: { en: "Light from an object enters through the cornea and pupil.", hi: "वस्तु से आने वाला प्रकाश कॉर्निया और पुतली से होकर आँख में प्रवेश करता है।" } },
      { title: { en: "The eye focuses the light", hi: "आँख प्रकाश को केंद्रित करती है" }, description: { en: "The cornea and natural lens bend the light toward the retina.", hi: "कॉर्निया और प्राकृतिक लेंस प्रकाश को रेटिना की ओर मोड़ते हैं।" } },
      { title: { en: "A vision condition shifts the focus", hi: "दृष्टि की स्थिति फोकस बदल देती है" }, description: { en: "Depending on the eye's shape and focusing power, the image may form in front of or behind the retina.", hi: "आँख के आकार और फोकसिंग क्षमता के अनुसार प्रतिबिंब रेटिना के आगे या पीछे बन सकता है।" } },
      { title: { en: "Eyeglasses adjust the rays", hi: "चश्मा किरणों को समायोजित करता है" }, description: { en: "The prescribed lens changes the path of incoming light so the eye can focus the image more clearly on the retina.", hi: "निर्धारित चश्मे का लेंस आने वाले प्रकाश का मार्ग बदलता है, जिससे आँख रेटिना पर अधिक साफ़ प्रतिबिंब बना सके।" } }
    ],
    scienceBehind: {
      en: "Refraction is the bending of light when it passes between materials where its speed changes. A convex lens tends to bring parallel rays together; a concave lens tends to spread them apart. The eye's cornea and natural lens focus light onto the retina, where light-sensitive cells begin the process of sending visual information to the brain. In myopia, distant objects are often blurred because the eye focuses their images in front of the retina; a diverging (concave) lens can help. In hyperopia, near objects may be blurred because the focusing system would place the image behind the retina; a converging (convex) lens can help. Astigmatism and other conditions need different corrections. An eye-care professional should determine the correct prescription.",
      hi: "जब प्रकाश ऐसे पदार्थों के बीच जाता है जहाँ उसकी गति बदलती है, तो दिशा बदल सकती है; इसे अपवर्तन कहते हैं। उत्तल लेंस सामान्यतः समानांतर किरणों को एकत्र करता है, जबकि अवतल लेंस उन्हें फैलाता है। आँख का कॉर्निया और प्राकृतिक लेंस प्रकाश को रेटिना पर केंद्रित करते हैं। रेटिना की प्रकाश-संवेदी कोशिकाएँ दृश्य जानकारी मस्तिष्क तक भेजने की प्रक्रिया शुरू करती हैं। मायोपिया में दूर की वस्तुओं का प्रतिबिंब अक्सर रेटिना के आगे बनता है, इसलिए वे धुँधली दिख सकती हैं; अपसारी (अवतल) लेंस मदद कर सकता है। हाइपरमेट्रोपिया में पास की वस्तुएँ धुँधली दिख सकती हैं, क्योंकि फोकस रेटिना के पीछे पड़ने की प्रवृत्ति होती है; अभिसारी (उत्तल) लेंस मदद कर सकता है। एस्टिग्मैटिज़्म और अन्य स्थितियों के लिए अलग सुधार की आवश्यकता हो सकती है। सही नंबर नेत्र-विशेषज्ञ से निर्धारित करवाना चाहिए।"
    },
    realLifeUses: [
      { en: "Cameras use lenses to focus light onto an image sensor, a principle related to the eye's focusing system.", hi: "कैमरे लेंस से प्रकाश को इमेज सेंसर पर केंद्रित करते हैं; यह सिद्धांत आँख की फोकसिंग प्रणाली से संबंधित है।" },
      { en: "Magnifying glasses use a convex lens to make nearby objects appear larger when used at an appropriate distance.", hi: "आवर्धक काँच उपयुक्त दूरी पर उत्तल लेंस का उपयोग करके पास की वस्तुओं को बड़ा दिखाता है।" },
      { en: "Microscopes and telescopes combine lenses or mirrors to form images of very small or distant objects.", hi: "सूक्ष्मदर्शी और दूरबीन बहुत छोटी या दूर की वस्तुओं के प्रतिबिंब बनाने के लिए लेंस या आईनों का संयोजन उपयोग करते हैं।" }
    ],
    didYouKnow: {
      en: "Eyeglasses do not normally make the eye itself stronger; they help incoming light focus more appropriately.",
      hi: "सामान्यतः चश्मा आँख को स्वयं अधिक शक्तिशाली नहीं बनाता; वह आने वाले प्रकाश को बेहतर ढंग से केंद्रित करने में मदद करता है।"
    },
    experiment: {
      en: "Observe how a magnifying glass changes the appearance of printed text. Materials: A magnifying glass and a printed page. Steps: 1. Hold the magnifying glass above the page. 2. Move it slowly closer to or farther from the page. 3. Observe how the apparent size and sharpness change. 4. Compare this with the simplified convex-lens diagram. Safety: Never use a magnifying glass to focus sunlight. Do not look at the Sun through any lens.",
      hi: "आवर्धक काँच से लिखे अक्षरों को अलग-अलग दूरी पर देखकर समझो कि लेंस प्रतिबिंब को कैसे बदलता है। सूर्य को लेंस से कभी न देखो।"
    },
    relatedIds: ["mirror-reflection", "rainbow", "fibre-optic-internet", "camera"],
    visualType: "eye-lens-ray-correction"
  },
  {
    id: "fibre-optic-internet",
    category: "light-optics",
    emoji: "🌐",
    title: { en: "How Does Fibre-Optic Internet Work?", hi: "फाइबर-ऑप्टिक इंटरनेट कैसे काम करता है?" },
    question: {
      en: "How can pulses of light carry messages through a thin glass fibre?",
      hi: "काँच के बहुत पतले रेशे में प्रकाश की मदद से संदेश कैसे पहुँचते हैं?"
    },
    intro: {
      en: "Fibre-optic cables contain very thin strands of glass or plastic designed to guide light. A transmitter converts digital data into pulses of light, often using a laser or LED depending on the system. The light travels along the fibre's core and is guided by the optical structure, commonly through total internal reflection. At the receiving end, a detector converts the arriving light signals back into electrical signals that equipment can interpret as data. Long-distance systems use carefully engineered fibres, connectors, and repeaters or optical amplifiers where needed.",
      hi: "फाइबर-ऑप्टिक केबल में काँच या प्लास्टिक के बहुत पतले रेशे होते हैं, जिन्हें प्रकाश को मार्ग देने के लिए बनाया जाता है। ट्रांसमीटर डिजिटल डेटा को प्रकाश की पल्स में बदलता है; सिस्टम के अनुसार इसके लिए लेज़र या LED का उपयोग हो सकता है। प्रकाश फाइबर के कोर में चलता है और उसकी प्रकाशीय संरचना उसे मार्ग देती है; सामान्यतः इसमें पूर्ण आंतरिक परावर्तन की भूमिका होती है। दूसरे सिरे पर डिटेक्टर आने वाले प्रकाश संकेतों को फिर विद्युत संकेतों में बदलता है, जिन्हें उपकरण डेटा के रूप में समझ सकते हैं। लंबी दूरी की प्रणालियों में ज़रूरत के अनुसार विशेष रूप से बनाए गए फाइबर, कनेक्टर, रिपीटर या ऑप्टिकल एम्प्लीफायर उपयोग किए जाते हैं।"
    },
    thinkQuestion: {
      en: "What carries information through a fibre-optic cable?",
      hi: "फाइबर-ऑप्टिक केबल में जानकारी किसके माध्यम से पहुँचती है?"
    },
    options: [
      { text: { en: "Pulses of light", hi: "प्रकाश की पल्स" }, correct: true, feedback: { en: "Correct! Transmitters encode data into light signals and receivers detect them at the other end.", hi: "सही! ट्रांसमीटर डेटा को प्रकाश संकेतों में बदलते हैं और दूसरे सिरे पर रिसीवर उन्हें पहचानता है।" } },
      { text: { en: "Water flowing inside every fibre", hi: "हर फाइबर के अंदर बहता पानी" }, correct: false, feedback: { en: "Not quite. Fibre-optic communication uses light signals guided through a thin optical fibre.", hi: "पूरी तरह सही नहीं। फाइबर-ऑप्टिक संचार में पतले प्रकाशीय फाइबर से होकर जाने वाले प्रकाश संकेत उपयोग होते हैं।" } },
      { text: { en: "Sound waves travelling through the glass", hi: "काँच में चलती ध्वनि तरंगें" }, correct: false, feedback: { en: "Not quite. Fibre-optic communication uses light signals guided through a thin optical fibre.", hi: "पूरी तरह सही नहीं। फाइबर-ऑप्टिक संचार में पतले प्रकाशीय फाइबर से होकर जाने वाले प्रकाश संकेत उपयोग होते हैं।" } }
    ],
    workingSteps: [
      { title: { en: "Digital data is encoded", hi: "डिजिटल डेटा एन्कोड होता है" }, description: { en: "A transmitter turns digital information into a sequence of light pulses.", hi: "ट्रांसमीटर डिजिटल जानकारी को प्रकाश की पल्स के क्रम में बदलता है।" } },
      { title: { en: "Light enters the fibre core", hi: "प्रकाश फाइबर कोर में प्रवेश करता है" }, description: { en: "The light enters the central core of the fibre, surrounded by cladding with different optical properties.", hi: "प्रकाश फाइबर के बीच वाले कोर में प्रवेश करता है, जिसके चारों ओर अलग प्रकाशीय गुणों वाली क्लैडिंग होती है।" } },
      { title: { en: "The fibre guides the light", hi: "फाइबर प्रकाश को मार्ग देता है" }, description: { en: "The optical structure keeps the signal guided along the fibre; total internal reflection is a useful simplified way to explain this in many fibres.", hi: "फाइबर की प्रकाशीय संरचना संकेत को उसके भीतर आगे बढ़ने में मदद करती है; कई फाइबरों को सरल रूप में समझाने के लिए पूर्ण आंतरिक परावर्तन उपयोगी अवधारणा है।" } },
      { title: { en: "The receiver reads the signal", hi: "रिसीवर संकेत पढ़ता है" }, description: { en: "A detector senses the light pulses and converts them into electrical signals that a device can decode as data.", hi: "डिटेक्टर प्रकाश की पल्स को पहचानकर विद्युत संकेतों में बदलता है, जिन्हें उपकरण डेटा के रूप में डिकोड कर सकता है।" } }
    ],
    scienceBehind: {
      en: "Optical fibres guide light because the core and cladding have carefully chosen refractive indices. In a common simplified explanation, light travelling in the core can undergo total internal reflection at the core-cladding boundary when it meets the conditions for it. Digital information is represented by changes in the transmitted optical signal. At the receiver, a photodetector converts optical energy into an electrical signal, which electronics process. Fibre links can carry large amounts of data and are useful over long distances, but real performance depends on fibre type, wavelength, connectors, equipment, and network design.",
      hi: "ऑप्टिकल फाइबर प्रकाश को इसलिए मार्ग देते हैं क्योंकि कोर और क्लैडिंग के अपवर्तनांक सावधानी से चुने जाते हैं। एक सामान्य सरल व्याख्या में, कोर में चलने वाला प्रकाश कोर-क्लैडिंग सीमा पर पूर्ण आंतरिक परावर्तन कर सकता है, यदि आवश्यक शर्तें पूरी हों। डिजिटल जानकारी भेजे जाने वाले प्रकाश संकेत में बदलावों के रूप में दर्शाई जाती है। रिसीवर पर फोटो-डिटेक्टर प्रकाशीय ऊर्जा को विद्युत संकेत में बदलता है, जिसे इलेक्ट्रॉनिक प्रणाली संसाधित करती है। फाइबर लिंक बड़ी मात्रा में डेटा ले जा सकते हैं और लंबी दूरी के लिए उपयोगी हैं, लेकिन वास्तविक प्रदर्शन फाइबर के प्रकार, तरंगदैर्घ्य, कनेक्टर, उपकरण और नेटवर्क डिज़ाइन पर निर्भर करता है।"
    },
    realLifeUses: [
      { en: "Fibre-optic cables carry internet traffic between cities and countries, including through undersea cables.", hi: "फाइबर-ऑप्टिक केबल शहरों और देशों के बीच इंटरनेट डेटा ले जाती हैं; समुद्र के नीचे भी ऐसी केबल बिछाई जाती हैं।" },
      { en: "Medical endoscopes can use optical fibres or other optical systems to help doctors see inside the body.", hi: "मेडिकल एंडोस्कोप शरीर के अंदर देखने में डॉक्टरों की मदद के लिए ऑप्टिकल फाइबर या अन्य प्रकाशीय प्रणालियों का उपयोग कर सकते हैं।" },
      { en: "Some sensors use optical fibres to measure changes such as strain, temperature, or pressure.", hi: "कुछ सेंसर तनाव, तापमान या दबाव जैसे बदलाव मापने के लिए ऑप्टिकल फाइबर का उपयोग करते हैं।" }
    ],
    didYouKnow: {
      en: "Fibre-optic cables carry information as light signals, but the devices at each end convert between optical and electrical forms.",
      hi: "फाइबर-ऑप्टिक केबल जानकारी को प्रकाश संकेतों के रूप में ले जाती हैं, लेकिन दोनों सिरों के उपकरण प्रकाशीय और विद्युत रूपों के बीच परिवर्तन करते हैं।"
    },
    experiment: {
      en: "Observe light guided through a clear stream of water (adult-supervised demonstration). Materials: A transparent plastic bottle with a small hole near the lower side, water, a tray, and a low-power flashlight. An adult should prepare the setup. Steps: 1. Place the bottle over a tray and shine the flashlight toward the water stream from the side. 2. Observe whether light follows the curved stream for a short distance. 3. Compare this demonstration with the idea of light being guided through an optical fibre. 4. Discuss why this is only an analogy: a water stream is not a fibre cable. Safety: Use only a low-power flashlight, never a laser. Keep electrical equipment away from water and have an adult handle the setup. Do not drink the demonstration water.",
      hi: "वयस्क की मदद से पानी की पतली धारा में प्रकाश का मार्ग देखो। यह केवल समझाने वाला उदाहरण है, असली फाइबर के समान नहीं।"
    },
    relatedIds: ["mirror-reflection", "rainbow", "eyeglasses", "smartphone"],
    visualType: "fibre-optic-total-internal-reflection"
  },
    // Additional Discovery – Light & Optics
  {
    id: "prism-dispersion",
    category: "light-optics",
    emoji: "🌈",

    title: {
      en: "How Does a Prism Split White Light?",
      hi: "प्रिज़्म सफेद प्रकाश को अलग-अलग रंगों में कैसे बाँटता है?"
    },

    question: {
      en: "White sunlight looks almost colourless. How can a glass prism reveal a spectrum of colours?",
      hi: "सूर्य का सफेद प्रकाश लगभग रंगहीन दिखाई देता है। काँच का प्रिज़्म उसमें से कई रंग कैसे दिखाता है?"
    },

    intro: {
      en: "White light contains a mixture of visible colours. When it passes through a triangular glass prism, the light changes direction because it travels at different speeds in air and glass. Different colours bend by slightly different amounts, so the white light spreads into a spectrum. Red usually bends less than violet in a typical glass prism.",
      hi: "सफेद प्रकाश में दिखाई देने वाले कई रंग मिले होते हैं। जब यह त्रिकोणीय काँच के प्रिज़्म से गुजरता है, तो हवा और काँच में प्रकाश की चाल अलग होने के कारण उसकी दिशा बदलती है। अलग-अलग रंग थोड़ी अलग मात्रा में मुड़ते हैं, इसलिए सफेद प्रकाश रंगों के स्पेक्ट्रम में फैल जाता है। सामान्य काँच के प्रिज़्म में लाल रंग प्रायः बैंगनी रंग से कम मुड़ता है।"
    },

    thinkQuestion: {
      en: "Why do different colours spread out after passing through a prism?",
      hi: "प्रिज़्म से गुजरने के बाद अलग-अलग रंग एक-दूसरे से अलग क्यों हो जाते हैं?"
    },

    options: [
      {
        text: {
          en: "Different colours bend by different amounts",
          hi: "अलग-अलग रंग अलग मात्रा में मुड़ते हैं"
        },
        correct: true,
        feedback: {
          en: "Correct! Different wavelengths experience different refraction in the prism, spreading white light into a spectrum.",
          hi: "सही! अलग-अलग तरंगदैर्घ्य के प्रकाश का प्रिज़्म में अपवर्तन अलग होता है, जिससे सफेद प्रकाश स्पेक्ट्रम में फैल जाता है।"
        }
      },
      {
        text: {
          en: "The prism creates new colours from nothing",
          hi: "प्रिज़्म बिना किसी कारण नए रंग बना देता है"
        },
        correct: false,
        feedback: {
          en: "The colours are already present in white light. The prism separates them.",
          hi: "ये रंग पहले से ही सफेद प्रकाश में मौजूद होते हैं। प्रिज़्म उन्हें अलग करता है।"
        }
      },
      {
        text: {
          en: "The glass absorbs every colour except red",
          hi: "काँच लाल रंग को छोड़कर बाकी सभी रंग सोख लेता है"
        },
        correct: false,
        feedback: {
          en: "A suitable transparent prism transmits the visible light and refracts its colours by different amounts.",
          hi: "उपयुक्त पारदर्शी प्रिज़्म दिखाई देने वाले प्रकाश को गुजरने देता है और अलग-अलग रंगों को अलग मात्रा में मोड़ता है।"
        }
      },
      {
        text: {
          en: "Sound waves turn into colours inside the prism",
          hi: "प्रिज़्म के अंदर ध्वनि तरंगें रंगों में बदल जाती हैं"
        },
        correct: false,
        feedback: {
          en: "A prism separates light; sound waves are not responsible for the spectrum.",
          hi: "प्रिज़्म प्रकाश को अलग करता है; स्पेक्ट्रम बनने में ध्वनि तरंगों की भूमिका नहीं होती।"
        }
      }
    ],

    workingSteps: [
      {
        title: {
          en: "White light enters",
          hi: "सफेद प्रकाश प्रवेश करता है"
        },
        description: {
          en: "A beam of white light reaches one sloping face of the transparent prism.",
          hi: "सफेद प्रकाश की किरण पारदर्शी प्रिज़्म की एक तिरछी सतह पर पहुँचती है।"
        }
      },
      {
        title: {
          en: "Light refracts",
          hi: "प्रकाश का अपवर्तन होता है"
        },
        description: {
          en: "The light changes direction as it enters the glass from air.",
          hi: "हवा से काँच में प्रवेश करते समय प्रकाश की दिशा बदलती है।"
        }
      },
      {
        title: {
          en: "Colours bend differently",
          hi: "रंग अलग-अलग मात्रा में मुड़ते हैं"
        },
        description: {
          en: "Different wavelengths of visible light refract by different amounts in the glass.",
          hi: "काँच में दृश्य प्रकाश की अलग-अलग तरंगदैर्घ्य वाली किरणों का अपवर्तन अलग मात्रा में होता है।"
        }
      },
      {
        title: {
          en: "A spectrum appears",
          hi: "रंगों का स्पेक्ट्रम दिखाई देता है"
        },
        description: {
          en: "The emerging light spreads into a band of colours, from red through orange, yellow, green, blue and indigo to violet.",
          hi: "बाहर निकलने वाला प्रकाश रंगों की पट्टी में फैल जाता है—लाल, नारंगी, पीला, हरा, नीला, जामुनी और बैंगनी।"
        }
      }
    ],

    scienceBehind: {
      en: "Dispersion occurs because a material's refractive index depends on the wavelength of light. When white light passes through a prism, different wavelengths change direction by different amounts at the prism surfaces. The colours spread out and can be observed as a spectrum. A rainbow forms through a different optical process involving refraction, internal reflection and dispersion in water droplets.",
      hi: "प्रकाश का वर्ण-विक्षेपण इसलिए होता है क्योंकि किसी पदार्थ का अपवर्तनांक प्रकाश की तरंगदैर्घ्य पर निर्भर करता है। जब सफेद प्रकाश प्रिज़्म से गुजरता है, तो अलग-अलग तरंगदैर्घ्य की किरणों की दिशा प्रिज़्म की सतहों पर अलग मात्रा में बदलती है। इससे रंग अलग-अलग दिखाई देने लगते हैं और स्पेक्ट्रम बनता है। इंद्रधनुष एक अलग प्रकाशीय प्रक्रिया से बनता है, जिसमें पानी की बूँदों में अपवर्तन, आंतरिक परावर्तन और वर्ण-विक्षेपण शामिल होते हैं।"
    },

    realLifeUses: [
      {
        en: "Prisms and related optical components are used in scientific instruments to separate or redirect light.",
        hi: "प्रिज़्म और उससे संबंधित प्रकाशीय उपकरणों का उपयोग वैज्ञानिक यंत्रों में प्रकाश को अलग करने या उसकी दिशा बदलने के लिए किया जाता है।"
      },
      {
        en: "Spectroscopy helps scientists study the light emitted or absorbed by materials.",
        hi: "स्पेक्ट्रोस्कोपी वैज्ञानिकों को पदार्थों द्वारा उत्सर्जित या अवशोषित प्रकाश का अध्ययन करने में मदद करती है।"
      },
      {
        en: "Dispersion helps explain how white light can separate into colours in optical demonstrations.",
        hi: "वर्ण-विक्षेपण यह समझाने में मदद करता है कि प्रकाशीय प्रयोगों में सफेद प्रकाश अलग-अलग रंगों में कैसे बँट सकता है।"
      }
    ],

    didYouKnow: {
      en: "A prism does not add colours to white light. It separates colours that are already present in the light.",
      hi: "प्रिज़्म सफेद प्रकाश में नए रंग नहीं जोड़ता। वह उन रंगों को अलग करता है जो पहले से ही प्रकाश में मौजूद होते हैं।"
    },

    experiment: {
      en: "With adult supervision, shine a low-power white flashlight through a transparent prism onto a white sheet of paper in a dim room. Adjust the angle and observe whether a band of colours appears. Never look directly at the Sun through a prism, and never direct concentrated sunlight into anyone's eyes.",
      hi: "किसी वयस्क की देखरेख में, कम शक्ति वाली सफेद टॉर्च की रोशनी को पारदर्शी प्रिज़्म से गुजारकर कम रोशनी वाले कमरे में सफेद कागज़ पर डालें। कोण बदलकर देखें कि रंगों की पट्टी दिखाई देती है या नहीं। प्रिज़्म से सूर्य को सीधे कभी न देखें और केंद्रित सूर्यप्रकाश किसी की आँखों पर न डालें।"
    },

    relatedIds: [
      "rainbow",
      "mirror-reflection",
      "eyeglasses",
      "fibre-optic-internet"
    ],

    visualType: "prism-white-light-dispersion"
  },
  // Batch 5 – Electricity & Magnetism Around Us
  {
    id: "electric-bell",
    category: "electricity-magnetism",
    emoji: "🔔",
    title: { en: "How Does an Electric Bell Work?", hi: "बिजली की घंटी कैसे काम करती है?" },
    question: {
      en: "How can electricity make a bell hammer move again and again?",
      hi: "बिजली की मदद से घंटी का हथौड़ा बार-बार कैसे हिलता है?"
    },
    intro: {
      en: "In a traditional electric bell, current flows through a coil of wire and turns it into an electromagnet. The electromagnet attracts a small iron armature carrying a hammer. The hammer strikes the bell, making it vibrate and produce sound. As the armature moves, it opens an electrical contact, interrupting the current. The electromagnet then loses most of its magnetism, and a spring pulls the armature back to its original position. The contact closes again and current flows, repeating the cycle rapidly while the button is pressed.",
      hi: "पारंपरिक बिजली की घंटी में तार की कुंडली से विद्युत धारा गुजरती है, जिससे वह विद्युत चुंबक बन जाती है। विद्युत चुंबक हथौड़े से जुड़े लोहे के छोटे आर्मेचर को आकर्षित करता है। हथौड़ा घंटी से टकराता है, जिससे घंटी में कंपन होता है और आवाज़ निकलती है। आर्मेचर के हिलने पर विद्युत संपर्क खुल जाता है और धारा रुक जाती है। तब विद्युत चुंबक का चुंबकीय प्रभाव कम हो जाता है और स्प्रिंग आर्मेचर को वापस खींचती है। संपर्क फिर बंद होता है और धारा बहने लगती है। बटन दबाए रखने पर यह चक्र तेजी से दोहराता है।"
    },
    thinkQuestion: {
      en: "What makes the iron armature move in a traditional electric bell?",
      hi: "पारंपरिक बिजली की घंटी में लोहे के आर्मेचर को कौन हिलाता है?"
    },
    options: [
      { text: { en: "An electromagnet", hi: "विद्युत चुंबक" }, correct: true, feedback: { en: "Correct! Current through the coil creates a magnetic field that attracts the iron armature.", hi: "सही! कुंडली में धारा बहने से चुंबकीय क्षेत्र बनता है, जो लोहे के आर्मेचर को आकर्षित करता है।" } },
      { text: { en: "Water pressure", hi: "पानी का दबाव" }, correct: false, feedback: { en: "Not quite. In a traditional electric bell, the coil acts as an electromagnet when current flows through it.", hi: "पूरी तरह सही नहीं। पारंपरिक बिजली की घंटी में धारा बहने पर कुंडली विद्युत चुंबक की तरह काम करती है।" } },
      { text: { en: "Light from the bulb", hi: "बल्ब का प्रकाश" }, correct: false, feedback: { en: "Not quite. In a traditional electric bell, the coil acts as an electromagnet when current flows through it.", hi: "पूरी तरह सही नहीं। पारंपरिक बिजली की घंटी में धारा बहने पर कुंडली विद्युत चुंबक की तरह काम करती है।" } }
    ],
    workingSteps: [
      { title: { en: "The button closes the circuit", hi: "बटन परिपथ बंद करता है" }, description: { en: "Pressing the button completes the circuit, allowing current to flow through the coil.", hi: "बटन दबाने पर परिपथ पूरा होता है और कुंडली में धारा बहती है।" } },
      { title: { en: "The coil becomes an electromagnet", hi: "कुंडली विद्युत चुंबक बनती है" }, description: { en: "Current through the coil produces a magnetic field that attracts the iron armature.", hi: "कुंडली में धारा से चुंबकीय क्षेत्र बनता है, जो लोहे के आर्मेचर को आकर्षित करता है।" } },
      { title: { en: "The hammer strikes the bell", hi: "हथौड़ा घंटी पर टकराता है" }, description: { en: "The moving armature carries the hammer into the bell, making the bell vibrate and produce sound.", hi: "हिलता हुआ आर्मेचर हथौड़े को घंटी से टकराता है, जिससे कंपन और आवाज़ पैदा होती है।" } },
      { title: { en: "The circuit breaks and resets", hi: "परिपथ टूटता और रीसेट होता है" }, description: { en: "The contact opens, current stops, and the spring pulls the armature back. The contact closes again and the cycle repeats.", hi: "संपर्क खुलने पर धारा रुकती है और स्प्रिंग आर्मेचर को वापस खींचती है। संपर्क फिर बंद होता है और चक्र दोहराता है।" } }
    ],
    scienceBehind: {
      en: "An electric current in a coil creates a magnetic field. A coil with an iron core can become a strong electromagnet while current flows. In a traditional electric bell, a self-interrupting contact repeatedly switches the current on and off. This makes the armature and hammer move repeatedly, causing the bell to vibrate. Sound is produced by vibrations travelling through the surrounding air. Many modern doorbells are electronic and may use speakers or other mechanisms instead of this exact arrangement.",
      hi: "कुंडली में विद्युत धारा बहने से चुंबकीय क्षेत्र बनता है। लोहे के कोर वाली कुंडली में धारा बहने पर शक्तिशाली विद्युत चुंबक बन सकता है। पारंपरिक बिजली की घंटी में एक संपर्क धारा को बार-बार चालू और बंद करता है। इससे आर्मेचर और हथौड़ा लगातार हिलते हैं और घंटी में कंपन होता है। ये कंपन आसपास की हवा में फैलकर ध्वनि पैदा करते हैं। कई आधुनिक डोरबेल इलेक्ट्रॉनिक होती हैं और उनमें स्पीकर या अन्य तंत्र इस्तेमाल हो सकते हैं।"
    },
    realLifeUses: [
      { en: "Traditional school bells and some alarms use electromagnetic mechanisms to create sound.", hi: "पारंपरिक स्कूल घंटियों और कुछ अलार्मों में आवाज़ पैदा करने के लिए विद्युत चुंबकीय तंत्र उपयोग होते हैं।" },
      { en: "Relays use an electromagnet to move a switch, allowing one circuit to control another.", hi: "रिले में विद्युत चुंबक स्विच को हिलाता है, जिससे एक परिपथ दूसरे परिपथ को नियंत्रित कर सकता है।" },
      { en: "Electromagnets are used in many machines where a magnetic effect must be switched on or off.", hi: "जिन मशीनों में चुंबकीय प्रभाव को चालू या बंद करना होता है, वहाँ विद्युत चुंबकों का उपयोग किया जाता है।" }
    ],
    didYouKnow: {
      en: "In a traditional electric bell, the contact mechanism is what allows the hammer to keep moving while the button stays pressed.",
      hi: "पारंपरिक बिजली की घंटी में संपर्क तंत्र ही हथौड़े को बटन दबे रहने तक बार-बार चलने देता है।"
    },
    experiment: {
      en: "Observe an electromagnet using a classroom low-voltage kit, only with adult/teacher supervision. Materials: A commercial low-voltage electromagnet demonstration kit, iron paper clips, and its specified power source. Steps: 1. Follow the kit's instructions and connect only the supplied low-voltage components. 2. Turn it on briefly and bring the electromagnet near a few paper clips. 3. Turn it off and observe whether the magnetic attraction changes. 4. Discuss how switching current can switch the magnetic effect. Safety: Do not connect a homemade coil directly to a wall socket or mains supply. Do not build a circuit with loose bare wires or short-circuit a battery. Use a commercial classroom kit under supervision.",
      hi: "शिक्षक की देखरेख में कम वोल्टेज वाले तैयार विद्युत चुंबक किट से चुंबकीय प्रभाव देखो। इसे कभी भी सीधे घरेलू बिजली से न जोड़ो।"
    },
    relatedIds: ["electric-motor", "induction-cooktop", "lightning", "smartphone"],
    visualType: "electromagnet-bell-cycle"
  },
  {
    id: "electric-motor",
    category: "electricity-magnetism",
    emoji: "⚙️",
    title: { en: "How Does an Electric Motor Work?", hi: "विद्युत मोटर कैसे काम करती है?" },
    question: {
      en: "How can electricity make a fan or toy wheel spin?",
      hi: "बिजली पंखे या खिलौने के पहिए को घुमाने में कैसे मदद करती है?"
    },
    intro: {
      en: "An electric motor converts electrical energy into mechanical motion. In a simple DC motor, current flows through a coil placed in a magnetic field. The magnetic field exerts forces on the current-carrying sides of the coil, producing a turning effect called torque. A commutator in a traditional brushed DC motor reverses the current in the coil every half-turn, helping the coil keep rotating in the same overall direction. Modern motors may use electronic controllers, permanent magnets, electromagnets, or different designs, but the central idea is that magnetic effects create motion.",
      hi: "विद्युत मोटर विद्युत ऊर्जा को यांत्रिक गति में बदलती है। एक सरल DC मोटर में चुंबकीय क्षेत्र के अंदर रखी कुंडली से धारा बहती है। चुंबकीय क्षेत्र, धारा वाली कुंडली की भुजाओं पर बल लगाता है, जिससे घुमाने वाला प्रभाव पैदा होता है; इसे टॉर्क कहते हैं। पारंपरिक ब्रश वाली DC मोटर में कम्यूटेटर हर आधे चक्कर पर कुंडली की धारा की दिशा बदलता है, जिससे कुंडली लगातार एक ही समग्र दिशा में घूमती रह सकती है। आधुनिक मोटरों में इलेक्ट्रॉनिक नियंत्रक, स्थायी चुंबक, विद्युत चुंबक या अलग-अलग डिज़ाइन हो सकते हैं, लेकिन मूल विचार यही है कि चुंबकीय प्रभाव गति पैदा करते हैं।"
    },
    thinkQuestion: {
      en: "What energy conversion happens in an electric motor?",
      hi: "विद्युत मोटर में कौन-सा ऊर्जा परिवर्तन होता है?"
    },
    options: [
      { text: { en: "Electrical energy to mechanical energy", hi: "विद्युत ऊर्जा से यांत्रिक ऊर्जा" }, correct: true, feedback: { en: "Correct! A motor uses electrical input to create motion, though some energy also becomes heat and sound.", hi: "सही! मोटर विद्युत ऊर्जा से गति पैदा करती है, हालाँकि कुछ ऊर्जा ऊष्मा और ध्वनि में भी बदलती है।" } },
      { text: { en: "Sound energy to chemical energy", hi: "ध्वनि ऊर्जा से रासायनिक ऊर्जा" }, correct: false, feedback: { en: "Not quite. The main useful output of a motor is mechanical motion.", hi: "पूरी तरह सही नहीं। मोटर का मुख्य उपयोगी आउटपुट यांत्रिक गति है।" } },
      { text: { en: "Light energy to mass", hi: "प्रकाश ऊर्जा से द्रव्यमान" }, correct: false, feedback: { en: "Not quite. The main useful output of a motor is mechanical motion.", hi: "पूरी तरह सही नहीं। मोटर का मुख्य उपयोगी आउटपुट यांत्रिक गति है।" } }
    ],
    workingSteps: [
      { title: { en: "Current enters the coil", hi: "धारा कुंडली में प्रवेश करती है" }, description: { en: "A power source sends current through a wire coil inside a magnetic field.", hi: "विद्युत स्रोत चुंबकीय क्षेत्र के भीतर रखी तार की कुंडली में धारा भेजता है।" } },
      { title: { en: "Magnetic forces act on the coil", hi: "कुंडली पर चुंबकीय बल लगते हैं" }, description: { en: "The magnetic field exerts forces on opposite sides of the current-carrying coil.", hi: "चुंबकीय क्षेत्र धारा वाली कुंडली की विपरीत भुजाओं पर बल लगाता है।" } },
      { title: { en: "The coil turns", hi: "कुंडली घूमती है" }, description: { en: "The forces create torque, making the coil rotate.", hi: "ये बल टॉर्क पैदा करते हैं, जिससे कुंडली घूमती है।" } },
      { title: { en: "The motor keeps rotating", hi: "मोटर घूमती रहती है" }, description: { en: "In a brushed DC motor, the commutator reverses current every half-turn so the turning effect continues in the same overall direction.", hi: "ब्रश वाली DC मोटर में कम्यूटेटर हर आधे चक्कर पर धारा की दिशा बदलता है, जिससे घुमाने वाला प्रभाव उसी समग्र दिशा में बना रहता है।" } }
    ],
    scienceBehind: {
      en: "A current-carrying conductor experiences a force when it is placed in a magnetic field. In a coil, forces on opposite sides can act in opposite directions and create a turning effect called torque. The motor's design keeps this turning effect useful as the rotor moves. In a brushed DC motor, brushes and a commutator switch the coil current. Brushless DC motors and AC motors use different switching and field arrangements. Motors also have losses due to electrical resistance, friction, and other effects, so not all input energy becomes useful motion.",
      hi: "जब धारा-वाहित चालक को चुंबकीय क्षेत्र में रखा जाता है, तो उस पर बल लग सकता है। कुंडली की विपरीत भुजाओं पर विपरीत दिशाओं में बल लगने से घुमाने वाला प्रभाव, यानी टॉर्क, पैदा हो सकता है। मोटर का डिज़ाइन रोटर के घूमने के दौरान इस प्रभाव को उपयोगी बनाए रखता है। ब्रश वाली DC मोटर में ब्रश और कम्यूटेटर कुंडली की धारा को स्विच करते हैं। ब्रशलेस DC और AC मोटरों में स्विचिंग तथा चुंबकीय क्षेत्र की व्यवस्था अलग होती है। विद्युत प्रतिरोध, घर्षण और अन्य कारणों से कुछ ऊर्जा नष्ट भी होती है, इसलिए सारी इनपुट ऊर्जा उपयोगी गति में नहीं बदलती।"
    },
    realLifeUses: [
      { en: "Fans, mixers, washing machines, pumps, and many toys use electric motors.", hi: "पंखे, मिक्सर, वॉशिंग मशीन, पंप और कई खिलौनों में विद्युत मोटर होती है।" },
      { en: "Electric vehicles use motors to turn their wheels.", hi: "इलेक्ट्रिक वाहन अपने पहियों को घुमाने के लिए मोटरों का उपयोग करते हैं।" },
      { en: "Some motors can operate as generators under suitable conditions, converting mechanical energy into electrical energy.", hi: "उपयुक्त परिस्थितियों में कुछ मोटर जनरेटर की तरह काम कर सकती हैं और यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदल सकती हैं।" }
    ],
    didYouKnow: {
      en: "A motor and a generator are closely related machines, but they are used for opposite main energy conversions.",
      hi: "मोटर और जनरेटर आपस में संबंधित मशीनें हैं, लेकिन इनके मुख्य ऊर्जा परिवर्तन सामान्यतः एक-दूसरे के विपरीत होते हैं।"
    },
    experiment: {
      en: "Observe a sealed battery-powered toy with a motor. Materials: A small battery-powered toy with its case closed. Steps: 1. Switch the toy on and observe which parts move. 2. Switch it off and notice that the movement stops. 3. Identify the battery as the electrical energy source and the moving part as the mechanical output. 4. Draw a simple energy-flow diagram: battery → motor → motion. Safety: Do not open the toy, expose its wiring, puncture batteries, or connect a motor to mains electricity. Ask an adult if the battery compartment needs opening.",
      hi: "बंद बैटरी वाले खिलौने को चलते हुए देखकर ऊर्जा का प्रवाह समझो। खिलौने को खोलकर तारों या बैटरी से छेड़छाड़ न करो।"
    },
    relatedIds: ["electric-bell", "induction-cooktop", "washing-machine", "smartphone"],
    visualType: "motor-coil-magnetic-force"
  },
  {
    id: "induction-cooktop",
    category: "electricity-magnetism",
    emoji: "🍳",
    title: { en: "How Does an Induction Cooktop Work?", hi: "इंडक्शन कुकटॉप कैसे काम करता है?" },
    question: {
      en: "How can a cooktop heat a pan without a glowing heating coil?",
      hi: "बिना लाल-गर्म हीटिंग कॉइल दिखे इंडक्शन चूल्हा पैन को कैसे गर्म करता है?"
    },
    intro: {
      en: "An induction cooktop uses an electric coil beneath its surface to create a changing magnetic field. When a suitable magnetic pan sits above it, the changing field induces electric currents in the pan. These currents encounter electrical resistance and produce heat; magnetic losses in the pan can also contribute. The pan then transfers heat to the food. Unlike a conventional electric hotplate, which first heats its own element and then the cookware, induction heating produces much of its heat directly in the cookware. The cooktop surface can still become hot from contact with the hot pan.",
      hi: "इंडक्शन कुकटॉप अपनी सतह के नीचे लगी विद्युत कुंडली से बदलता हुआ चुंबकीय क्षेत्र बनाता है। जब उसके ऊपर उपयुक्त चुंबकीय पैन रखा जाता है, तो बदलता क्षेत्र पैन में विद्युत धाराएँ उत्पन्न करता है। इन धाराओं को पैन के विद्युत प्रतिरोध का सामना करना पड़ता है, जिससे ऊष्मा पैदा होती है; पैन में चुंबकीय हानियाँ भी ऊष्मा में योगदान दे सकती हैं। फिर पैन भोजन को गर्म करता है। सामान्य इलेक्ट्रिक हॉटप्लेट पहले अपने हीटिंग तत्व को गर्म करती है और फिर बर्तन को, जबकि इंडक्शन में अधिकांश ऊष्मा सीधे उपयुक्त बर्तन में पैदा होती है। गर्म पैन के संपर्क से कुकटॉप की सतह भी गर्म हो सकती है।"
    },
    thinkQuestion: {
      en: "What produces much of the heat in a suitable pan on an induction cooktop?",
      hi: "इंडक्शन कुकटॉप पर उपयुक्त पैन में अधिकांश ऊष्मा किससे पैदा होती है?"
    },
    options: [
      { text: { en: "Induced electric currents and magnetic losses in the pan", hi: "पैन में प्रेरित विद्युत धाराएँ और चुंबकीय हानियाँ" }, correct: true, feedback: { en: "Correct! The cooktop's changing magnetic field induces currents in compatible cookware, creating heat.", hi: "सही! कुकटॉप का बदलता चुंबकीय क्षेत्र उपयुक्त बर्तन में धाराएँ उत्पन्न करता है, जिससे ऊष्मा बनती है।" } },
      { text: { en: "Sunlight trapped inside the pan", hi: "पैन के अंदर फँसी सूर्य की रोशनी" }, correct: false, feedback: { en: "Not quite. Induction heating uses a changing magnetic field to heat suitable cookware.", hi: "पूरी तरह सही नहीं। इंडक्शन हीटिंग बदलते चुंबकीय क्षेत्र से उपयुक्त बर्तन को गर्म करती है।" } },
      { text: { en: "Water turning into electricity", hi: "पानी का बिजली में बदलना" }, correct: false, feedback: { en: "Not quite. Induction heating uses a changing magnetic field to heat suitable cookware.", hi: "पूरी तरह सही नहीं। इंडक्शन हीटिंग बदलते चुंबकीय क्षेत्र से उपयुक्त बर्तन को गर्म करती है।" } }
    ],
    workingSteps: [
      { title: { en: "Current flows in the cooktop coil", hi: "कुकटॉप कुंडली में धारा बहती है" }, description: { en: "Electronics send a rapidly changing current through the coil beneath the cooktop surface.", hi: "इलेक्ट्रॉनिक प्रणाली कुकटॉप की सतह के नीचे लगी कुंडली में तेजी से बदलती धारा भेजती है।" } },
      { title: { en: "A changing magnetic field forms", hi: "बदलता चुंबकीय क्षेत्र बनता है" }, description: { en: "The coil creates a changing magnetic field that reaches the pan above it.", hi: "कुंडली बदलता हुआ चुंबकीय क्षेत्र बनाती है, जो ऊपर रखे पैन तक पहुँचता है।" } },
      { title: { en: "Currents are induced in the pan", hi: "पैन में धाराएँ प्रेरित होती हैं" }, description: { en: "The changing field induces currents in suitable cookware. Electrical resistance and magnetic losses produce heat.", hi: "बदलता क्षेत्र उपयुक्त बर्तन में विद्युत धाराएँ उत्पन्न करता है। विद्युत प्रतिरोध और चुंबकीय हानियों से ऊष्मा बनती है।" } },
      { title: { en: "The pan cooks the food", hi: "पैन भोजन पकाता है" }, description: { en: "Heat spreads through the pan and transfers to the food. The surface may also warm up from the hot pan.", hi: "ऊष्मा पैन में फैलती है और भोजन तक पहुँचती है। गर्म पैन के कारण कुकटॉप की सतह भी गर्म हो सकती है।" } }
    ],
    scienceBehind: {
      en: "Electromagnetic induction occurs when a changing magnetic field induces an electromotive force and, in a conducting pan, currents. These induced currents are often called eddy currents. The pan's electrical resistance converts some electrical energy into heat. Ferromagnetic cookware can also experience magnetic losses. Induction cooktops use electronic circuits to create a high-frequency alternating current in the coil. Cookware material, pan size, and contact/position affect performance. Many cooktops work best with cookware that a magnet sticks to, but users should follow the manufacturer's compatibility guidance.",
      hi: "विद्युत चुंबकीय प्रेरण तब होती है जब बदलता हुआ चुंबकीय क्षेत्र विद्युत वाहक बल उत्पन्न करता है और चालक पैन में धारा बहने लगती है। इन प्रेरित धाराओं को अक्सर भँवर धाराएँ (eddy currents) कहा जाता है। पैन का विद्युत प्रतिरोध कुछ विद्युत ऊर्जा को ऊष्मा में बदलता है। लौहचुंबकीय बर्तनों में चुंबकीय हानियाँ भी हो सकती हैं। इंडक्शन कुकटॉप इलेक्ट्रॉनिक परिपथों से कुंडली में उच्च आवृत्ति की प्रत्यावर्ती धारा बनाते हैं। बर्तन की सामग्री, आकार और उसकी स्थिति प्रदर्शन को प्रभावित करते हैं। कई कुकटॉप उन बर्तनों के साथ बेहतर काम करते हैं जिनसे चुंबक चिपकता है, लेकिन हमेशा निर्माता के निर्देश देखें।"
    },
    realLifeUses: [
      { en: "Induction cooktops heat compatible cookware efficiently and allow quick control of cooking power.", hi: "इंडक्शन कुकटॉप उपयुक्त बर्तनों को प्रभावी ढंग से गर्म करते हैं और खाना पकाने की शक्ति को जल्दी नियंत्रित करने देते हैं।" },
      { en: "Industrial induction heating can heat metal parts for manufacturing processes.", hi: "औद्योगिक इंडक्शन हीटिंग निर्माण प्रक्रियाओं के लिए धातु के पुर्जों को गर्म कर सकती है।" },
      { en: "Electromagnetic induction is also central to transformers and many generators, though their designs and purposes differ.", hi: "विद्युत चुंबकीय प्रेरण ट्रांसफॉर्मर और कई जनरेटरों में भी महत्वपूर्ण है, हालाँकि उनके डिज़ाइन और उद्देश्य अलग होते हैं।" }
    ],
    didYouKnow: {
      en: "A pan that is not compatible with an induction cooktop may not heat properly, even if it looks like ordinary metal.",
      hi: "इंडक्शन के अनुकूल न होने वाला पैन ठीक से गर्म नहीं हो सकता, भले ही वह सामान्य धातु का दिखाई दे।"
    },
    experiment: {
      en: "Test cookware compatibility with a refrigerator magnet—without turning on a cooktop. Materials: A small refrigerator magnet and several cool, dry pans (with adult permission). Steps: 1. Keep all cookware cool and away from a switched-on cooktop. 2. Bring the magnet near the bottom of each pan. 3. Note whether the magnet sticks strongly, weakly, or not at all. 4. Compare observations with the induction cooktop's manufacturer guidance; a magnet test is a useful clue, not a universal guarantee. Safety: Do not dismantle a cooktop or touch its internal coil. Do not test hot pans. Never place magnets near devices if the manufacturer warns against it.",
      hi: "ठंडे बर्तनों के तले पर छोटे चुंबक से जाँच करो कि चुंबक चिपकता है या नहीं। चालू या गर्म इंडक्शन कुकटॉप को न खोलो और न छुओ।"
    },
    relatedIds: ["electric-bell", "electric-motor", "lightning", "washing-machine"],
    visualType: "induction-coil-pan"
  },
  {
    id: "lightning",
    category: "electricity-magnetism",
    emoji: "⚡",
    title: { en: "What Causes Lightning?", hi: "आकाशीय बिजली कैसे पैदा होती है?" },
    question: {
      en: "How can a storm cloud create a giant flash of electricity across the sky?",
      hi: "तूफ़ानी बादल आकाश में बिजली की विशाल चमक कैसे पैदा करता है?"
    },
    intro: {
      en: "Inside thunderclouds, strong air currents move water droplets, ice crystals, and soft hail-like particles around. Collisions and separation of these particles can help separate electrical charges within the cloud. When the electric field becomes strong enough, a rapid electrical discharge occurs through air—within a cloud, between clouds, or between a cloud and the ground. The discharge heats the surrounding air extremely quickly, causing it to expand and create the sound we hear as thunder. Lightning is dangerous even when it does not strike directly nearby.",
      hi: "तूफ़ानी बादलों के अंदर तेज़ वायु धाराएँ पानी की बूँदों, बर्फ़ के क्रिस्टलों और ओलों जैसे छोटे कणों को इधर-उधर ले जाती हैं। इन कणों के टकराने और अलग होने से बादल के भीतर विद्युत आवेशों का पृथक्करण हो सकता है। जब विद्युत क्षेत्र पर्याप्त मजबूत हो जाता है, तो हवा के माध्यम से अचानक विद्युत निर्वहन होता है—बादल के भीतर, दो बादलों के बीच या बादल और ज़मीन के बीच। यह निर्वहन आसपास की हवा को बहुत तेजी से गर्म करता है, जिससे हवा फैलती है और गर्जना की आवाज़ पैदा होती है। बिजली खतरनाक होती है, भले ही वह सीधे पास में न गिरे।"
    },
    thinkQuestion: {
      en: "What causes the sound of thunder after a lightning flash?",
      hi: "बिजली चमकने के बाद बादलों की गर्जना किस कारण होती है?"
    },
    options: [
      { text: { en: "Air expands rapidly after being heated by the lightning discharge", hi: "बिजली के निर्वहन से गर्म हुई हवा तेजी से फैलती है" }, correct: true, feedback: { en: "Correct! Lightning heats air very rapidly, causing expansion that creates a pressure wave we hear as thunder.", hi: "सही! बिजली हवा को बहुत तेजी से गर्म करती है। हवा के फैलने से दबाव तरंग बनती है, जिसे हम गर्जना के रूप में सुनते हैं।" } },
      { text: { en: "Clouds rub together like rocks", hi: "बादल पत्थरों की तरह रगड़ खाते हैं" }, correct: false, feedback: { en: "Not quite. Thunder is produced by the rapid heating and expansion of air around the lightning channel.", hi: "पूरी तरह सही नहीं। बिजली के मार्ग के आसपास हवा तेजी से गर्म होकर फैलती है, जिससे गर्जना पैदा होती है।" } },
      { text: { en: "Rain drops make the sky vibrate", hi: "बारिश की बूँदें पूरे आकाश को कंपाती हैं" }, correct: false, feedback: { en: "Not quite. Thunder is produced by the rapid heating and expansion of air around the lightning channel.", hi: "पूरी तरह सही नहीं। बिजली के मार्ग के आसपास हवा तेजी से गर्म होकर फैलती है, जिससे गर्जना पैदा होती है।" } }
    ],
    workingSteps: [
      { title: { en: "A storm cloud develops", hi: "तूफ़ानी बादल बनता है" }, description: { en: "Strong updrafts and downdrafts move water and ice particles inside a storm cloud.", hi: "तूफ़ानी बादल में ऊपर और नीचे चलने वाली तेज़ वायु धाराएँ पानी और बर्फ़ के कणों को हिलाती हैं।" } },
      { title: { en: "Electrical charges separate", hi: "विद्युत आवेश अलग होते हैं" }, description: { en: "Collisions and movement of particles help separate electric charges within the cloud.", hi: "कणों के टकराने और गति करने से बादल के भीतर विद्युत आवेश अलग-अलग क्षेत्रों में जमा हो सकते हैं।" } },
      { title: { en: "A discharge occurs", hi: "निर्वहन होता है" }, description: { en: "When the electric field becomes strong enough, an electrical discharge travels through air.", hi: "विद्युत क्षेत्र पर्याप्त मजबूत होने पर हवा के माध्यम से विद्युत निर्वहन होता है।" } },
      { title: { en: "The air heats and thunder follows", hi: "हवा गर्म होती है और गर्जना होती है" }, description: { en: "The lightning channel heats air rapidly. The expanding air produces a pressure wave heard as thunder.", hi: "बिजली का मार्ग हवा को तेजी से गर्म करता है। फैलती हुई हवा दबाव तरंग बनाती है, जिसे गर्जना कहते हैं।" } }
    ],
    scienceBehind: {
      en: "Lightning is a large electrical discharge. Storm processes can separate positive and negative charges, creating a strong electric field. When conditions allow a conducting path to form through the air, a discharge transfers charge and energy. The air along the channel becomes extremely hot in a very short time and expands rapidly, generating a pressure wave that travels outward as thunder. Thunder is usually heard after the flash because light reaches us much faster than sound. The time gap can give a rough sense of distance, but lightning safety must never depend on estimating distance alone.",
      hi: "आकाशीय बिजली एक बड़ा विद्युत निर्वहन है। तूफ़ान के दौरान होने वाली प्रक्रियाएँ धनात्मक और ऋणात्मक आवेशों को अलग कर सकती हैं, जिससे मजबूत विद्युत क्षेत्र बनता है। जब हवा में चालक मार्ग बनने की परिस्थितियाँ बनती हैं, तो निर्वहन आवेश और ऊर्जा का स्थानांतरण करता है। बिजली के मार्ग की हवा बहुत कम समय में अत्यधिक गर्म होकर तेजी से फैलती है और दबाव तरंग बनाती है, जो गर्जना के रूप में बाहर की ओर चलती है। चमक के बाद गर्जना इसलिए सुनाई देती है क्योंकि प्रकाश ध्वनि से बहुत तेज़ चलता है। इनके बीच का समय दूरी का मोटा अनुमान दे सकता है, लेकिन बिजली से सुरक्षा केवल दूरी का अनुमान लगाकर तय नहीं करनी चाहिए।"
    },
    realLifeUses: [
      { en: "Lightning protection systems use conductors and grounding to provide a designed path for lightning current; they must be installed by qualified professionals.", hi: "बिजली सुरक्षा प्रणालियाँ चालक और अर्थिंग की मदद से बिजली की धारा के लिए नियोजित मार्ग देती हैं; इन्हें योग्य विशेषज्ञों से लगवाना चाहिए।" },
      { en: "Weather services monitor thunderstorms to issue alerts and help people take shelter.", hi: "मौसम सेवाएँ तूफ़ानों पर नज़र रखती हैं और लोगों को सुरक्षित आश्रय लेने के लिए चेतावनी देती हैं।" },
      { en: "The delay between a flash and thunder occurs because light travels much faster than sound.", hi: "चमक और गर्जना के बीच का अंतर इसलिए होता है क्योंकि प्रकाश ध्वनि से बहुत तेज़ चलता है।" }
    ],
    didYouKnow: {
      en: "If you can hear thunder, lightning is close enough to be a safety concern. Go to a substantial enclosed building or a fully enclosed hard-topped vehicle; wait at least 30 minutes after the last thunder before returning outdoors.",
      hi: "यदि गर्जना सुनाई दे रही है, तो बिजली इतनी पास हो सकती है कि सुरक्षा की चिंता हो। किसी मजबूत बंद इमारत या पूरी तरह बंद कठोर छत वाले वाहन में आश्रय लें; आख़िरी गर्जना के बाद बाहर लौटने से पहले कम-से-कम 30 मिनट प्रतीक्षा करें।"
    },
    experiment: {
      en: "Use a static-electricity balloon demonstration indoors (not during a storm). Materials: A balloon, a small piece of paper, and dry hair or a wool cloth. Steps: 1. Inflate the balloon and tie it securely. 2. Rub it gently on dry hair or wool for a few seconds. 3. Hold it near small paper pieces and observe whether they move toward it. 4. Discuss how static electric charge can attract light objects. Safety: This is only a small static-electricity demonstration and is not a model of the full lightning process. Never conduct outdoor activities during a thunderstorm.",
      hi: "घर के अंदर गुब्बारे से स्थिर विद्युत का छोटा प्रयोग करो। यह असली आकाशीय बिजली का पूरा मॉडल नहीं है। तूफ़ान के दौरान बाहर प्रयोग बिल्कुल न करो।"
    },
    relatedIds: ["electric-bell", "electric-motor", "induction-cooktop", "rainbow"],
    visualType: "storm-cloud-charge-discharge"
  },
  // Batch 6 – Chemistry Around Us
  {
    id: "soap-cleaning",
    category: "chemistry-around-us",
    emoji: "🧼",
    title: { en: "How Does Soap Clean Our Hands?", hi: "साबुन हमारे हाथ कैसे साफ़ करता है?" },
    question: {
      en: "How can soap help water remove greasy dirt that water alone struggles to wash away?",
      hi: "साबुन पानी को ऐसी चिकनाई हटाने में कैसे मदद करता है, जिसे पानी अकेला आसानी से नहीं हटा पाता?"
    },
    intro: {
      en: "Water is very good at washing away many water-soluble substances, but oily dirt does not mix easily with water. Soap molecules have two different ends: one interacts well with water, while the other interacts with oils and grease. When we rub soap with water, the molecules help surround tiny droplets of oil and keep them dispersed in the water. Rinsing then carries away the trapped grease, dirt, and many microbes from the skin. Soap works best when we rub all hand surfaces thoroughly and rinse well.",
      hi: "पानी कई ऐसे पदार्थों को धोने में अच्छा है जो उसमें घुल जाते हैं, लेकिन तैलीय गंदगी पानी में आसानी से नहीं मिलती। साबुन के अणुओं के दो अलग-अलग सिरे होते हैं: एक पानी के साथ अच्छी तरह जुड़ता है, जबकि दूसरा तेल और चिकनाई के साथ। पानी के साथ साबुन रगड़ने पर ये अणु तेल की छोटी बूँदों को घेरने और उन्हें पानी में फैलाए रखने में मदद करते हैं। फिर पानी से धोने पर चिकनाई, गंदगी और कई सूक्ष्मजीव त्वचा से हट जाते हैं। हाथों की सभी सतहों को अच्छी तरह रगड़कर और पानी से धोकर साबुन सबसे अच्छा काम करता है।"
    },
    thinkQuestion: {
      en: "Why is soap useful for removing greasy dirt?",
      hi: "चिकनी-तैलीय गंदगी हटाने में साबुन उपयोगी क्यों है?"
    },
    options: [
      { text: { en: "Its molecules can interact with both water and oils", hi: "इसके अणु पानी और तेल दोनों के साथ परस्पर क्रिया कर सकते हैं" }, correct: true, feedback: { en: "Correct! One part of a soap molecule interacts with water, while another part interacts with oil and grease.", hi: "सही! साबुन के अणु का एक हिस्सा पानी से और दूसरा हिस्सा तेल व चिकनाई से जुड़ता है।" } },
      { text: { en: "It turns all dirt into light", hi: "यह सारी गंदगी को प्रकाश में बदल देता है" }, correct: false, feedback: { en: "Not quite. Soap helps oily dirt mix into the rinse water so it can be washed away.", hi: "पूरी तरह सही नहीं। साबुन तैलीय गंदगी को धोने वाले पानी के साथ हटने में मदद करता है।" } },
      { text: { en: "It makes water stop flowing", hi: "यह पानी का बहना रोक देता है" }, correct: false, feedback: { en: "Not quite. Soap helps oily dirt mix into the rinse water so it can be washed away.", hi: "पूरी तरह सही नहीं। साबुन तैलीय गंदगी को धोने वाले पानी के साथ हटने में मदद करता है।" } }
    ],
    workingSteps: [
      { title: { en: "Water alone struggles with grease", hi: "पानी अकेला चिकनाई से नहीं लड़ पाता" }, description: { en: "Oil and water do not mix easily, so greasy dirt may remain on the skin.", hi: "तेल और पानी आसानी से नहीं मिलते, इसलिए चिकनी गंदगी त्वचा पर रह सकती है।" } },
      { title: { en: "Soap molecules have two different ends", hi: "साबुन के अणुओं के दो अलग सिरे होते हैं" }, description: { en: "One end interacts with water; the other interacts with oils and grease.", hi: "एक सिरा पानी के साथ और दूसरा तेल व चिकनाई के साथ परस्पर क्रिया करता है।" } },
      { title: { en: "Molecules surround tiny oil droplets", hi: "अणु तेल की छोटी बूँदों को घेर लेते हैं" }, description: { en: "With rubbing, soap molecules help disperse oil into small droplets in water.", hi: "रगड़ने पर साबुन के अणु तेल को पानी में छोटी-छोटी बूँदों के रूप में फैलाने में मदद करते हैं।" } },
      { title: { en: "Rinsing carries dirt away", hi: "धोने से गंदगी हट जाती है" }, description: { en: "Running water removes the dispersed oil, dirt, and many microbes from the skin.", hi: "बहता पानी फैली हुई चिकनाई, गंदगी और कई सूक्ष्मजीवों को त्वचा से हटा देता है।" } }
    ],
    scienceBehind: {
      en: "Soap is a surfactant. Its molecules have a hydrophilic part that interacts with water and a hydrophobic part that interacts more readily with oils. In water, soap can help form structures called micelles, in which oil-loving parts associate with oily material while water-interacting parts face the surrounding water. Rubbing helps loosen material from the skin, and rinsing carries it away. Washing with soap and water physically removes many microbes; it does not mean every microbe is instantly killed. Proper handwashing also depends on rubbing for long enough and cleaning between fingers, around nails, and the backs of hands.",
      hi: "साबुन एक सर्फैक्टेंट है। इसके अणु का जल-आकर्षी भाग पानी के साथ और जल-विकर्षी भाग तेल के साथ अधिक आसानी से परस्पर क्रिया करता है। पानी में साबुन ऐसे ढाँचे बना सकता है जिन्हें माइसेल कहते हैं। इनमें तेल से जुड़ने वाले भाग तैलीय पदार्थ के पास रहते हैं और पानी से जुड़ने वाले भाग बाहर की ओर होते हैं। रगड़ने से गंदगी त्वचा से ढीली होती है और पानी से धोने पर हट जाती है। साबुन और पानी से हाथ धोने पर कई सूक्ष्मजीव शारीरिक रूप से हटते हैं; इसका अर्थ यह नहीं कि हर सूक्ष्मजीव तुरंत मर जाता है। सही तरीके से हाथ धोने में पर्याप्त समय तक रगड़ना और उँगलियों के बीच, नाखूनों के आसपास तथा हाथों के पीछे की सतह साफ़ करना भी शामिल है।"
    },
    realLifeUses: [
      { en: "Soap and detergent help remove oils from clothes, dishes, and skin.", hi: "साबुन और डिटर्जेंट कपड़ों, बर्तनों और त्वचा से तेल व चिकनाई हटाने में मदद करते हैं।" },
      { en: "Surfactants are also used in shampoos and some cleaning products, with formulas designed for different jobs.", hi: "सर्फैक्टेंट शैम्पू और कई सफाई उत्पादों में भी उपयोग होते हैं; अलग-अलग कामों के लिए उनके फ़ॉर्मूले अलग होते हैं।" },
      { en: "Soap-and-water handwashing is an important way to reduce the spread of many infectious germs.", hi: "साबुन और पानी से हाथ धोना कई संक्रामक रोगाणुओं के फैलाव को कम करने का महत्वपूर्ण तरीका है।" }
    ],
    didYouKnow: {
      en: "The bubbles you see while washing are not the main reason soap cleans. Soap’s molecular structure and the action of rubbing and rinsing do the important work.",
      hi: "हाथ धोते समय दिखने वाले झाग ही सफाई का मुख्य कारण नहीं हैं। साबुन की आणविक संरचना, रगड़ना और पानी से धोना महत्वपूर्ण भूमिका निभाते हैं।"
    },
    experiment: {
      en: "Compare how plain water and soapy water remove a small amount of cooking oil from a washable plate. Materials: A washable plate, a few drops of cooking oil, water, a little dishwashing liquid, and paper towel. Steps: 1. Put a tiny drop of cooking oil on the plate. 2. Try rinsing one area with water only. 3. On a separate oily area, use a little dishwashing liquid and water. 4. Compare how easily the oil lifts away. Wash the plate normally afterward. Safety: Do not taste the materials. Keep soap away from eyes. Clean up slippery spills immediately. Do not mix dish soap with bleach or other household cleaners.",
      hi: "प्लेट पर थोड़ा तेल लगाकर एक हिस्से को केवल पानी से और दूसरे हिस्से को साबुन-पानी से साफ़ करो। सामग्री को चखना नहीं है और सफाई वाले उत्पादों को आपस में नहीं मिलाना है।"
    },
    relatedIds: ["rusting-iron", "baking-powder-cake", "apple-browning", "induction-cooktop"],
    visualType: "soap-oil-water-molecules"
  },
  {
    id: "rusting-iron",
    category: "chemistry-around-us",
    emoji: "🔩",
    title: { en: "Why Does Iron Rust?", hi: "लोहे पर जंग क्यों लगती है?" },
    question: {
      en: "Why does a shiny iron nail slowly develop a reddish-brown coating?",
      hi: "चमकदार लोहे की कील पर धीरे-धीरे लाल-भूरी परत क्यों बनने लगती है?"
    },
    intro: {
      en: "When iron is exposed to both oxygen and moisture for a period of time, it can corrode and form rust—a reddish-brown mixture of hydrated iron oxides and related compounds. Rust is usually rough and flaky, so it does not protect the iron underneath as effectively as some other metal oxide layers protect their metals. Salt dissolved in water can speed up rusting by helping electrical processes occur more easily. Paint, oil, protective coatings, and galvanising can help keep oxygen and water away from iron.",
      hi: "जब लोहा कुछ समय तक ऑक्सीजन और नमी दोनों के संपर्क में रहता है, तो उसमें संक्षारण हो सकता है और जंग बन सकती है। जंग लाल-भूरे रंग के जलयोजित लौह ऑक्साइड और संबंधित पदार्थों का मिश्रण होती है। जंग की परत अक्सर खुरदरी और झड़ने वाली होती है, इसलिए यह नीचे के लोहे की रक्षा उतनी अच्छी तरह नहीं करती जितनी कुछ अन्य धातुओं पर बनने वाली ऑक्साइड परतें करती हैं। पानी में घुला नमक विद्युत-रासायनिक प्रक्रियाओं को आसान बनाकर जंग लगने की गति बढ़ा सकता है। पेंट, तेल, सुरक्षात्मक परत और गैल्वनाइजिंग लोहे को ऑक्सीजन व पानी से बचाने में मदद करते हैं।"
    },
    thinkQuestion: {
      en: "Which conditions are usually needed for ordinary iron to rust?",
      hi: "सामान्य लोहे पर जंग लगने के लिए आम तौर पर किन चीज़ों की आवश्यकता होती है?"
    },
    options: [
      { text: { en: "Oxygen and moisture", hi: "ऑक्सीजन और नमी" }, correct: true, feedback: { en: "Correct! Rusting generally needs both oxygen and water or moisture.", hi: "सही! जंग लगने के लिए सामान्यतः ऑक्सीजन और पानी या नमी दोनों की आवश्यकता होती है।" } },
      { text: { en: "Only darkness", hi: "केवल अँधेरा" }, correct: false, feedback: { en: "Not quite. Iron rusts through chemical and electrochemical reactions involving oxygen and moisture.", hi: "पूरी तरह सही नहीं। लोहे पर जंग ऑक्सीजन और नमी से जुड़ी रासायनिक तथा विद्युत-रासायनिक प्रक्रियाओं से लगती है।" } },
      { text: { en: "Only sound", hi: "केवल ध्वनि" }, correct: false, feedback: { en: "Not quite. Iron rusts through chemical and electrochemical reactions involving oxygen and moisture.", hi: "पूरी तरह सही नहीं। लोहे पर जंग ऑक्सीजन और नमी से जुड़ी रासायनिक तथा विद्युत-रासायनिक प्रक्रियाओं से लगती है।" } }
    ],
    workingSteps: [
      { title: { en: "Iron is exposed", hi: "लोहा संपर्क में आता है" }, description: { en: "The iron surface comes into contact with oxygen in the air and moisture.", hi: "लोहे की सतह हवा की ऑक्सीजन और नमी के संपर्क में आती है।" } },
      { title: { en: "Reactions begin at the surface", hi: "सतह पर अभिक्रियाएँ शुरू होती हैं" }, description: { en: "Chemical and electrochemical processes transfer electrons and form iron compounds.", hi: "सतह पर रासायनिक और विद्युत-रासायनिक प्रक्रियाएँ होती हैं, जिनसे इलेक्ट्रॉनों का स्थानांतरण और लौह यौगिकों का निर्माण होता है।" } },
      { title: { en: "Rust develops", hi: "जंग बनती है" }, description: { en: "Over time, hydrated iron oxides and related compounds create a reddish-brown layer.", hi: "समय के साथ जलयोजित लौह ऑक्साइड और संबंधित पदार्थ लाल-भूरी परत बनाते हैं।" } },
      { title: { en: "Protection slows the process", hi: "सुरक्षा प्रक्रिया को धीमा करती है" }, description: { en: "Paint, oil, coatings, or galvanising can reduce contact with water and oxygen.", hi: "पेंट, तेल, सुरक्षात्मक परत या गैल्वनाइजिंग पानी और ऑक्सीजन के संपर्क को कम कर सकते हैं।" } }
    ],
    scienceBehind: {
      en: "Rusting is a form of corrosion. On a damp iron surface, tiny electrochemical regions can develop. Iron atoms in some regions lose electrons and enter solution as iron ions; oxygen is reduced in other regions, with water participating in the overall reactions. Further reactions form hydrated iron oxides and other compounds commonly called rust. The exact composition of rust varies with conditions. Salt water usually increases the rate because dissolved ions help electrical charge move through the moisture layer. A protective coating works by separating the iron from oxygen and water; galvanising uses a zinc coating, which also offers sacrificial protection if the coating is scratched.",
      hi: "जंग लगना संक्षारण का एक प्रकार है। नम लोहे की सतह पर छोटे-छोटे विद्युत-रासायनिक क्षेत्र बन सकते हैं। कुछ क्षेत्रों में लोहे के परमाणु इलेक्ट्रॉन खोकर लौह आयन के रूप में घोल में चले जाते हैं; अन्य क्षेत्रों में ऑक्सीजन का अपचयन होता है और समग्र अभिक्रियाओं में पानी भाग लेता है। आगे की अभिक्रियाओं से जलयोजित लौह ऑक्साइड और अन्य पदार्थ बनते हैं, जिन्हें सामान्यतः जंग कहते हैं। जंग की सही संरचना परिस्थितियों के अनुसार बदल सकती है। नमक वाला पानी अक्सर जंग की गति बढ़ाता है क्योंकि घुले आयन नमी की परत में विद्युत आवेश के प्रवाह को आसान बनाते हैं। सुरक्षात्मक परत लोहे को पानी और ऑक्सीजन से अलग करती है। गैल्वनाइजिंग में जस्ते की परत लगाई जाती है, जो खरोंच आने पर भी कुछ हद तक बलिदानी सुरक्षा दे सकती है।"
    },
    realLifeUses: [
      { en: "Bridges, railings, vehicles, tools, and pipelines need corrosion protection and maintenance.", hi: "पुलों, रेलिंग, वाहनों, औज़ारों और पाइपों को संक्षारण से बचाने के लिए सुरक्षा और रखरखाव की आवश्यकता होती है।" },
      { en: "Painting and galvanising help extend the life of many iron and steel objects.", hi: "पेंट करना और गैल्वनाइजिंग लोहे व इस्पात की कई वस्तुओं की उम्र बढ़ाने में मदद करते हैं।" },
      { en: "Rust can weaken objects over time, which is why damaged coatings should be repaired.", hi: "समय के साथ जंग वस्तुओं को कमजोर कर सकती है, इसलिए खराब हुई सुरक्षात्मक परतों की मरम्मत ज़रूरी होती है।" }
    ],
    didYouKnow: {
      en: "Rust is not simply a neat, sealed shell of one pure compound; it is often a porous mixture of several iron-containing compounds.",
      hi: "जंग किसी एक शुद्ध पदार्थ की पूरी तरह बंद परत नहीं होती; यह अक्सर लोहे वाले कई पदार्थों का छिद्रयुक्त मिश्रण होती है।"
    },
    experiment: {
      en: "Observe how moisture affects clean iron nails over several days. Materials: Two clean iron nails, two clear labelled containers, dry rice or a suitable desiccant for one container, and a small amount of water for the other. Adult/teacher supervision recommended. Steps: 1. Place one nail in a dry container with dry rice or a suitable desiccant kept separate from the nail. 2. Place the second nail in a container with a small amount of water so it remains moist. 3. Keep both containers in the same safe location and observe them daily. 4. Record changes with drawings or photos over several days. Safety: Do not ingest the materials. Avoid sharp nail tips and wash hands afterward. Do not seal a container in a way that could build pressure. Dispose of rusty nails safely with adult help.",
      hi: "एक कील को सूखी और दूसरी को नम परिस्थिति में रखकर कई दिनों तक बदलाव देखो। कीलों की नोक से सावधान रहो और प्रयोग के बाद हाथ धोओ।"
    },
    relatedIds: ["soap-cleaning", "baking-powder-cake", "apple-browning", "lightning"],
    visualType: "iron-rust-water-oxygen"
  },
  {
    id: "baking-powder-cake",
    category: "chemistry-around-us",
    emoji: "🧁",
    title: { en: "How Does Baking Powder Make Cakes Rise?", hi: "बेकिंग पाउडर केक को कैसे फुलाता है?" },
    question: {
      en: "How can a little baking powder help a cake become soft and fluffy?",
      hi: "थोड़ा-सा बेकिंग पाउडर केक को नरम और फूला हुआ कैसे बनाता है?"
    },
    intro: {
      en: "Baking powder contains a base, usually sodium hydrogen carbonate, and one or more food-grade acids, along with starch to help keep the ingredients dry and free-flowing. When the powder becomes wet, and especially when heated, acid-base reactions release carbon dioxide gas. Tiny gas bubbles become trapped in the batter. As the batter heats, the bubbles expand and help the mixture rise; the structure then sets as the cake cooks. Baking soda is not the same as baking powder: baking soda is mainly sodium hydrogen carbonate and needs an appropriate acidic ingredient in the recipe.",
      hi: "बेकिंग पाउडर में एक क्षार, आम तौर पर सोडियम हाइड्रोजन कार्बोनेट, और एक या अधिक खाद्य-उपयोग वाले अम्ल होते हैं। इसमें स्टार्च भी हो सकता है, जो सामग्री को सूखा और आसानी से उपयोग करने योग्य रखने में मदद करता है। पाउडर गीला होने पर और विशेष रूप से गर्म करने पर अम्ल-क्षार अभिक्रियाओं से कार्बन डाइऑक्साइड गैस निकलती है। गैस की छोटी-छोटी बूँदें घोल में फँस जाती हैं। गर्म होने पर ये बुलबुले फैलते हैं और घोल को ऊपर उठने में मदद करते हैं; पकने पर केक की संरचना जम जाती है। बेकिंग सोडा और बेकिंग पाउडर एक जैसे नहीं हैं: बेकिंग सोडा मुख्यतः सोडियम हाइड्रोजन कार्बोनेट होता है और रेसिपी में उपयुक्त अम्लीय सामग्री की आवश्यकता होती है।"
    },
    thinkQuestion: {
      en: "Which gas helps cake batter rise when baking powder reacts?",
      hi: "बेकिंग पाउडर की अभिक्रिया से कौन-सी गैस केक के घोल को फूलने में मदद करती है?"
    },
    options: [
      { text: { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" }, correct: true, feedback: { en: "Correct! Carbon dioxide forms bubbles that expand and help the batter rise.", hi: "सही! कार्बन डाइऑक्साइड के बुलबुले फैलते हैं और घोल को फूलने में मदद करते हैं।" } },
      { text: { en: "Helium", hi: "हीलियम" }, correct: false, feedback: { en: "Not quite. Baking powder releases carbon dioxide through acid-base reactions.", hi: "पूरी तरह सही नहीं। बेकिंग पाउडर अम्ल-क्षार अभिक्रियाओं से कार्बन डाइऑक्साइड छोड़ता है।" } },
      { text: { en: "Neon", hi: "निऑन" }, correct: false, feedback: { en: "Not quite. Baking powder releases carbon dioxide through acid-base reactions.", hi: "पूरी तरह सही नहीं। बेकिंग पाउडर अम्ल-क्षार अभिक्रियाओं से कार्बन डाइऑक्साइड छोड़ता है।" } }
    ],
    workingSteps: [
      { title: { en: "Baking powder mixes with wet batter", hi: "बेकिंग पाउडर गीले घोल में मिलता है" }, description: { en: "Water allows the ingredients in baking powder to begin reacting.", hi: "पानी मिलने पर बेकिंग पाउडर की सामग्री की अभिक्रिया शुरू हो सकती है।" } },
      { title: { en: "Carbon dioxide forms", hi: "कार्बन डाइऑक्साइड बनती है" }, description: { en: "The acid and base react to release carbon dioxide gas.", hi: "अम्ल और क्षार की अभिक्रिया से कार्बन डाइऑक्साइड गैस निकलती है।" } },
      { title: { en: "Bubbles expand as the batter heats", hi: "गर्म होने पर बुलबुले फैलते हैं" }, description: { en: "Gas bubbles expand during heating and help lift the batter.", hi: "गर्म करने पर गैस के बुलबुले फैलते हैं और घोल को ऊपर उठाते हैं।" } },
      { title: { en: "The cake structure sets", hi: "केक की संरचना जमती है" }, description: { en: "Heat changes and sets the batter's structure, leaving a light, porous cake.", hi: "गर्मी घोल की संरचना को बदलकर जमा देती है, जिससे हल्का और छिद्रयुक्त केक बनता है।" } }
    ],
    scienceBehind: {
      en: "Sodium hydrogen carbonate can react with an acid to produce carbon dioxide, water, and a salt. Commercial baking powder contains measured ingredients to produce gas in a controlled way. Some baking powders release part of their gas when wet and more during heating. Gas bubbles expand when heated, while proteins and starches in the batter change and help the baked structure hold its shape. If the batter is left too long or the recipe is incorrectly balanced, some gas may escape before the structure sets, affecting the final texture.",
      hi: "सोडियम हाइड्रोजन कार्बोनेट किसी अम्ल के साथ अभिक्रिया करके कार्बन डाइऑक्साइड, पानी और एक लवण बना सकता है। व्यावसायिक बेकिंग पाउडर में सामग्री की मात्रा इस तरह तय होती है कि गैस नियंत्रित रूप से बने। कुछ बेकिंग पाउडर गीला होने पर थोड़ी गैस छोड़ते हैं और गर्म करने पर अधिक गैस बनाते हैं। गर्म होने पर गैस के बुलबुले फैलते हैं, जबकि घोल में मौजूद प्रोटीन और स्टार्च बदलकर पके हुए केक की संरचना को आकार बनाए रखने में मदद करते हैं। यदि घोल बहुत देर रखा रहे या रेसिपी का संतुलन सही न हो, तो संरचना जमने से पहले गैस निकल सकती है और केक की बनावट प्रभावित हो सकती है।"
    },
    realLifeUses: [
      { en: "Baking powder is used in many cakes, muffins, pancakes, and quick breads.", hi: "बेकिंग पाउडर कई केक, मफिन, पैनकेक और जल्दी बनने वाली ब्रेड में उपयोग होता है।" },
      { en: "Other leavening methods, such as yeast fermentation, also produce gas to help dough rise, but they use different processes.", hi: "यीस्ट किण्वन जैसी अन्य विधियाँ भी आटा फुलाने के लिए गैस बनाती हैं, लेकिन उनकी प्रक्रिया अलग होती है।" },
      { en: "Correct proportions matter because too much or too little leavening can affect taste and texture.", hi: "सही मात्रा महत्वपूर्ण है, क्योंकि बहुत अधिक या बहुत कम फुलाने वाला पदार्थ स्वाद और बनावट को प्रभावित कर सकता है।" }
    ],
    didYouKnow: {
      en: "The bubbles that make cake batter rise must be held by the batter long enough for its structure to set in the oven.",
      hi: "केक को फुलाने वाले बुलबुलों को घोल में तब तक बने रहना चाहिए, जब तक ओवन में उसकी संरचना जम न जाए।"
    },
    experiment: {
      en: "Observe gas bubbles from a food-safe baking-soda-and-vinegar demonstration. This demonstrates gas formation, not the exact formulation of commercial baking powder. Materials: A small cup, a teaspoon of baking soda, a little vinegar, and a tray to catch overflow. Steps: 1. Place the cup on a tray. 2. Add a small amount of vinegar. 3. With adult supervision, add a small spoonful of baking soda. 4. Observe bubbles and foam; discuss the gas produced. Safety: Do not taste the mixture. Use only a small amount, keep it away from eyes, and never perform the reaction in a sealed container. Do not mix household cleaning chemicals.",
      hi: "बेकिंग सोडा और सिरके की छोटी, खुली कटोरी में होने वाली अभिक्रिया से बुलबुले देखो। यह बेकिंग पाउडर की पूरी संरचना का मॉडल नहीं है। मिश्रण को बंद बोतल में न डालो और न चखो।"
    },
    relatedIds: ["soap-cleaning", "rusting-iron", "apple-browning", "rainbow"],
    visualType: "carbon-dioxide-bubbles-batter"
  },
  {
    id: "apple-browning",
    category: "chemistry-around-us",
    emoji: "🍎",
    title: { en: "Why Does a Cut Apple Turn Brown?", hi: "कटा हुआ सेब भूरा क्यों हो जाता है?" },
    question: {
      en: "Why does a freshly cut apple turn brown after being left in the air?",
      hi: "ताज़ा कटा हुआ सेब हवा में रखने पर भूरा क्यों होने लगता है?"
    },
    intro: {
      en: "When an apple is cut, its inner cells are damaged and previously separated substances come into contact. An enzyme called polyphenol oxidase helps oxygen in the air react with certain compounds in the apple. Further reactions produce brown-coloured substances on the cut surface. This is called enzymatic browning. It is a common change in appearance and does not automatically mean the apple is spoiled, though normal food-safety checks still matter. Lemon juice, refrigeration, and limiting air contact can slow browning.",
      hi: "जब सेब काटा जाता है, तो उसकी अंदरूनी कोशिकाएँ क्षतिग्रस्त होती हैं और पहले अलग-अलग मौजूद पदार्थ एक-दूसरे के संपर्क में आ जाते हैं। पॉलीफेनॉल ऑक्सिडेज़ नाम का एंज़ाइम हवा की ऑक्सीजन को सेब के कुछ यौगिकों के साथ अभिक्रिया करने में मदद करता है। आगे की अभिक्रियाओं से कटी सतह पर भूरे रंग के पदार्थ बनते हैं। इसे एंज़ाइमीय भूरापन कहते हैं। यह दिखने में होने वाला सामान्य बदलाव है और इसका अर्थ अपने-आप यह नहीं कि सेब खराब हो गया है; फिर भी भोजन की सुरक्षा के सामान्य नियमों का ध्यान रखना चाहिए। नींबू का रस, ठंडा रखना और हवा के संपर्क को कम करना भूरापन धीमा कर सकते हैं।"
    },
    thinkQuestion: {
      en: "What helps a cut apple develop a brown surface?",
      hi: "कटे हुए सेब की सतह भूरी होने में क्या मदद करता है?"
    },
    options: [
      { text: { en: "An enzyme and oxygen", hi: "एक एंज़ाइम और ऑक्सीजन" }, correct: true, feedback: { en: "Correct! Enzymatic reactions involving oxygen produce brown-coloured compounds on the cut surface.", hi: "सही! ऑक्सीजन से जुड़ी एंज़ाइमीय अभिक्रियाओं से कटी सतह पर भूरे रंग के पदार्थ बनते हैं।" } },
      { text: { en: "Moonlight alone", hi: "केवल चाँदनी" }, correct: false, feedback: { en: "Not quite. Cutting exposes the apple's inner material to oxygen and allows an enzyme-driven reaction to begin.", hi: "पूरी तरह सही नहीं। काटने से सेब के अंदरूनी पदार्थ ऑक्सीजन के संपर्क में आते हैं और एंज़ाइम की मदद से अभिक्रिया शुरू हो सकती है।" } },
      { text: { en: "Sound waves", hi: "ध्वनि तरंगें" }, correct: false, feedback: { en: "Not quite. Cutting exposes the apple's inner material to oxygen and allows an enzyme-driven reaction to begin.", hi: "पूरी तरह सही नहीं। काटने से सेब के अंदरूनी पदार्थ ऑक्सीजन के संपर्क में आते हैं और एंज़ाइम की मदद से अभिक्रिया शुरू हो सकती है।" } }
    ],
    workingSteps: [
      { title: { en: "The apple is cut", hi: "सेब काटा जाता है" }, description: { en: "Cutting damages cells and brings substances together that were previously separated.", hi: "काटने से कोशिकाएँ क्षतिग्रस्त होती हैं और पहले अलग रहे पदार्थ आपस में संपर्क में आते हैं।" } },
      { title: { en: "Oxygen reaches the exposed surface", hi: "ऑक्सीजन खुली सतह तक पहुँचती है" }, description: { en: "Oxygen from the air contacts compounds inside the apple.", hi: "हवा की ऑक्सीजन सेब के अंदर मौजूद यौगिकों के संपर्क में आती है।" } },
      { title: { en: "An enzyme helps the reaction", hi: "एंज़ाइम अभिक्रिया में मदद करता है" }, description: { en: "Polyphenol oxidase helps start reactions that lead to brown-coloured compounds.", hi: "पॉलीफेनॉल ऑक्सिडेज़ एंज़ाइम उन अभिक्रियाओं में मदद करता है जिनसे भूरे रंग के पदार्थ बनते हैं।" } },
      { title: { en: "Browning can be slowed", hi: "भूरापन धीमा किया जा सकता है" }, description: { en: "Lemon juice, cooler storage, or reducing air contact can slow the process.", hi: "नींबू का रस, ठंडा भंडारण या हवा का संपर्क कम करना इस प्रक्रिया को धीमा कर सकता है।" } }
    ],
    scienceBehind: {
      en: "Enzymatic browning is an oxidation-related process. Cutting or bruising disrupts cells, allowing the enzyme polyphenol oxidase, oxygen, and certain phenolic compounds to interact. The reactions form intermediate products that can change further into brown pigments. Acidic lemon juice can reduce enzyme activity under common kitchen conditions, and its antioxidants can also participate in reactions that delay visible browning. Refrigeration slows many chemical and enzymatic processes. Covering the cut surface or limiting oxygen exposure can also help, though no method makes cut fruit permanently fresh.",
      hi: "एंज़ाइमीय भूरापन ऑक्सीकरण से जुड़ी प्रक्रिया है। काटने या चोट लगने से कोशिकाएँ टूटती हैं और पॉलीफेनॉल ऑक्सिडेज़ एंज़ाइम, ऑक्सीजन तथा कुछ फिनॉलिक यौगिक आपस में संपर्क में आते हैं। इन अभिक्रियाओं से मध्यवर्ती पदार्थ बनते हैं, जो आगे बदलकर भूरे रंग के वर्णक बना सकते हैं। नींबू का अम्लीय रस रसोई की सामान्य परिस्थितियों में एंज़ाइम की सक्रियता कम कर सकता है; इसके एंटीऑक्सिडेंट भी दिखाई देने वाले भूरेपन को देर से आने में मदद कर सकते हैं। ठंडा रखने से कई रासायनिक और एंज़ाइमीय प्रक्रियाएँ धीमी होती हैं। कटी सतह को ढकना या ऑक्सीजन का संपर्क कम करना भी मदद कर सकता है, लेकिन कोई तरीका कटे फल को हमेशा ताज़ा नहीं रखता।"
    },
    realLifeUses: [
      { en: "Food preparation methods use acidity, refrigeration, and packaging to slow unwanted colour changes.", hi: "भोजन तैयार करने में अम्लीय पदार्थ, ठंडा रखना और पैकेजिंग अवांछित रंग परिवर्तन को धीमा करने के लिए उपयोग होते हैं।" },
      { en: "Similar enzymatic browning can occur in some cut fruits and vegetables, such as pears and potatoes.", hi: "नाशपाती और आलू जैसे कुछ कटे फलों व सब्ज़ियों में भी ऐसा एंज़ाइमीय भूरापन हो सकता है।" },
      { en: "Food colour is only one clue; smell, texture, storage time, and safe-handling rules also matter when deciding whether food is safe.", hi: "भोजन का रंग केवल एक संकेत है; भोजन सुरक्षित है या नहीं, यह तय करते समय गंध, बनावट, भंडारण का समय और सुरक्षित रखरखाव भी महत्वपूर्ण हैं।" }
    ],
    didYouKnow: {
      en: "The browning reaction is useful to study because it shows how cell damage, oxygen, and enzymes can change food chemistry.",
      hi: "सेब का भूरापन अध्ययन के लिए उपयोगी उदाहरण है, क्योंकि यह दिखाता है कि कोशिकाओं की क्षति, ऑक्सीजन और एंज़ाइम मिलकर भोजन की रसायनिकी बदल सकते हैं।"
    },
    experiment: {
      en: "Compare browning on apple pieces under different conditions. Materials: Apple pieces, a little lemon juice, two small plates, and a refrigerator if available. An adult should cut the apple. Steps: 1. Place two similar apple pieces on separate plates. 2. Leave one piece untreated and put a few drops of lemon juice on the other. 3. Observe both pieces after 10–20 minutes, noting colour differences. 4. If available, place another covered piece in the refrigerator and compare later. 5. Record the result; do not taste samples used for a classroom observation unless an adult confirms they were handled and stored safely. Safety: An adult should handle the knife. Wash the apple before cutting, keep samples clean, and discard them after the activity. Do not eat fruit that has been left out under unknown or unsafe conditions.",
      hi: "सेब के एक टुकड़े पर नींबू का रस लगाकर दूसरे को बिना उपचार के रखो और रंग की तुलना करो। चाकू का उपयोग वयस्क करें और प्रयोग के बाद नमूनों को खा मत लेना।"
    },
    relatedIds: ["soap-cleaning", "rusting-iron", "baking-powder-cake", "rainbow"],
    visualType: "apple-cut-surface-oxidation"
  },
  // Batch 7 – Earth, Weather & Environment
  {
    id: "lightning-thunder-delay",
    category: "earth-weather-environment",
    emoji: "🌩️",
    title: { en: "Why Do We See Lightning Before We Hear Thunder?", hi: "बिजली की चमक पहले और गर्जना बाद में क्यों सुनाई देती है?" },
    question: {
      en: "Why does a lightning flash appear before the thunder reaches our ears?",
      hi: "बिजली की चमक पहले दिखाई देती है, लेकिन गर्जना बाद में क्यों सुनाई देती है?"
    },
    intro: {
      en: "A lightning flash produces light and heats the surrounding air, creating thunder. The light travels to our eyes extremely quickly, while sound travels through air much more slowly. When a storm is far away, the time gap between the flash and the thunder can be noticeable. Counting the seconds may give a rough estimate of how far away the lightning occurred, but it is not a safety guarantee. If you can hear thunder, you should already be taking lightning precautions and seeking proper shelter.",
      hi: "बिजली की चमक प्रकाश पैदा करती है और आसपास की हवा को गर्म करती है, जिससे गर्जना बनती है। प्रकाश हमारी आँखों तक बहुत तेजी से पहुँचता है, जबकि ध्वनि हवा में उससे काफी धीमी गति से चलती है। तूफ़ान दूर हो तो चमक और गर्जना के बीच का समय साफ़ महसूस हो सकता है। दोनों के बीच सेकंड गिनने से बिजली की दूरी का मोटा अनुमान मिल सकता है, लेकिन यह सुरक्षा की गारंटी नहीं है। यदि गर्जना सुनाई दे रही है, तो बिजली से बचाव के उपाय करने और सुरक्षित आश्रय लेने का समय है।"
    },
    thinkQuestion: {
      en: "Why does a lightning flash usually reach our eyes before thunder reaches our ears?",
      hi: "बिजली की चमक आम तौर पर गर्जना से पहले क्यों दिखाई देती है?"
    },
    options: [
      { text: { en: "Light travels much faster than sound", hi: "प्रकाश ध्वनि से बहुत तेज़ चलता है" }, correct: true, feedback: { en: "Correct! Light reaches us almost instantly over storm distances, while sound takes longer.", hi: "सही! तूफ़ान की दूरी पर प्रकाश लगभग तुरंत पहुँच जाता है, जबकि ध्वनि को अधिक समय लगता है।" } },
      { text: { en: "Thunder waits inside the clouds", hi: "गर्जना बादलों के अंदर इंतज़ार करती है" }, correct: false, feedback: { en: "Not quite. The main reason is the huge difference between the speeds of light and sound.", hi: "पूरी तरह सही नहीं। मुख्य कारण प्रकाश और ध्वनि की गति में बहुत बड़ा अंतर है।" } },
      { text: { en: "Our ears turn sound into light", hi: "हमारे कान ध्वनि को प्रकाश में बदल देते हैं" }, correct: false, feedback: { en: "Not quite. The main reason is the huge difference between the speeds of light and sound.", hi: "पूरी तरह सही नहीं। मुख्य कारण प्रकाश और ध्वनि की गति में बहुत बड़ा अंतर है।" } }
    ],
    workingSteps: [
      { title: { en: "The flash occurs", hi: "चमक होती है" }, description: { en: "A lightning discharge produces a bright flash and rapidly heats air.", hi: "बिजली का निर्वहन तेज़ चमक पैदा करता है और हवा को तेजी से गर्म करता है।" } },
      { title: { en: "Light travels toward us", hi: "प्रकाश हमारी ओर चलता है" }, description: { en: "Light moves so quickly that it reaches an observer almost immediately over ordinary storm distances.", hi: "प्रकाश इतनी तेज़ गति से चलता है कि सामान्य तूफ़ानी दूरियों पर लगभग तुरंत दिखाई देता है।" } },
      { title: { en: "Sound travels through the air", hi: "ध्वनि हवा में चलती है" }, description: { en: "The heated air expands and creates a pressure wave. That sound takes longer to travel to us.", hi: "गर्म हवा फैलती है और दबाव तरंग बनाती है। इस ध्वनि को हम तक पहुँचने में अधिक समय लगता है।" } },
      { title: { en: "We hear thunder later", hi: "हमें गर्जना बाद में सुनाई देती है" }, description: { en: "The observer sees the flash first and hears thunder later. During a storm, seek shelter instead of watching or measuring the delay outdoors.", hi: "व्यक्ति पहले चमक देखता है और बाद में गर्जना सुनता है। तूफ़ान के दौरान बाहर खड़े होकर अंतर मापने के बजाय सुरक्षित आश्रय लें।" } }
    ],
    scienceBehind: {
      en: "Light travels through air at approximately 300,000 kilometres per second, while sound in air near room temperature travels at roughly 343 metres per second. This difference means the flash reaches us far earlier than the sound. Thunder is the sound produced when air heated by the lightning channel expands rapidly and creates pressure waves. The time delay depends on distance and atmospheric conditions. A rough distance estimate is sometimes made by counting seconds between flash and thunder, but lightning can strike far from the visible rain, so this method must never replace official warnings or shelter.",
      hi: "हवा में प्रकाश लगभग 3,00,000 किलोमीटर प्रति सेकंड की गति से चलता है, जबकि कमरे के तापमान के आसपास हवा में ध्वनि की गति लगभग 343 मीटर प्रति सेकंड होती है। इस अंतर के कारण चमक हम तक ध्वनि से बहुत पहले पहुँचती है। बिजली के मार्ग से गर्म हुई हवा तेजी से फैलती है और दबाव तरंगें बनाती हैं; यही गर्जना है। समय का अंतर दूरी और वायुमंडलीय परिस्थितियों पर निर्भर करता है। चमक और गर्जना के बीच सेकंड गिनकर दूरी का मोटा अनुमान लगाया जा सकता है, लेकिन बिजली दिखाई दे रही बारिश से बहुत दूर भी गिर सकती है। इसलिए यह तरीका आधिकारिक चेतावनी या सुरक्षित आश्रय का विकल्प नहीं है।"
    },
    realLifeUses: [
      { en: "Emergency alerts and thunderstorm forecasts are more reliable for safety than trying to estimate danger from a flash alone.", hi: "सुरक्षा के लिए केवल चमक देखकर खतरे का अनुमान लगाने से बेहतर मौसम चेतावनियों और तूफ़ान के पूर्वानुमान पर ध्यान देना है।" },
      { en: "The same speed difference explains why we see a distant firework before hearing its bang.", hi: "यही गति-अंतर समझाता है कि दूर की आतिशबाज़ी पहले दिखाई देती है और उसकी आवाज़ बाद में सुनाई देती है।" },
      { en: "Scientists use precise timing of signals in many fields, but lightning-distance counting is only a rough everyday estimate.", hi: "वैज्ञानिक कई क्षेत्रों में संकेतों के समय का सटीक मापन करते हैं, लेकिन बिजली की दूरी गिनकर निकालना केवल एक मोटा घरेलू अनुमान है।" }
    ],
    didYouKnow: {
      en: "Sound speed changes with air temperature and conditions, but it remains dramatically slower than light.",
      hi: "हवा का तापमान और परिस्थितियाँ ध्वनि की गति बदल सकती हैं, फिर भी ध्वनि प्रकाश से बहुत धीमी रहती है।"
    },
    experiment: {
      en: "Compare light and sound using a safe indoor event, such as a helper clapping at the far end of a large room or school hall. Do not perform this activity during a thunderstorm. Materials: A helper, a visible hand clap, and a safe indoor space. Steps: 1. Stand at a comfortable distance indoors. 2. Ask the helper to clap once while you watch their hands. 3. Notice that you see the hands meet before you hear the clap, especially across a larger space. 4. Discuss why the delay is small indoors but can be more noticeable across longer distances. Safety: This is an indoor classroom demonstration only. Never go outside during a thunderstorm to watch lightning or count the delay.",
      hi: "कक्षा या बड़े कमरे में किसी व्यक्ति की ताली देखकर और सुनकर प्रकाश व ध्वनि के समय का अंतर समझो। तूफ़ान के दौरान यह प्रयोग बाहर बिल्कुल न करो।"
    },
    relatedIds: ["lightning", "rainbow", "electric-motor", "fibre-optic-internet"],
    visualType: "light-vs-sound-distance"
  },
  {
    id: "rain-formation",
    category: "earth-weather-environment",
    emoji: "🌧️",
    title: { en: "How Does Rain Form?", hi: "बारिश कैसे बनती है?" },
    question: {
      en: "How does invisible water vapour turn into raindrops that fall from clouds?",
      hi: "अदृश्य जलवाष्प बादलों से गिरने वाली बारिश की बूँदों में कैसे बदलती है?"
    },
    intro: {
      en: "The Sun provides energy that causes water from oceans, lakes, rivers, soil, and plants to enter the air as water vapour. As moist air rises, it expands and cools. When it cools enough, water vapour condenses onto tiny particles in the air, forming cloud droplets or ice crystals. Inside clouds, droplets can collide and merge, or ice particles can grow and later melt. When particles become heavy enough for the surrounding air currents to support them no longer, they fall as precipitation. Whether they reach the ground as rain, snow, or another form depends on the temperature profile of the air.",
      hi: "सूर्य ऊर्जा देता है, जिससे महासागरों, झीलों, नदियों, मिट्टी और पौधों का पानी जलवाष्प बनकर हवा में जाता है। नम हवा ऊपर उठती है तो फैलती है और ठंडी होती है। पर्याप्त ठंडा होने पर जलवाष्प हवा के सूक्ष्म कणों पर संघनित होकर बादल की छोटी बूँदें या बर्फ़ के क्रिस्टल बनाती है। बादल के भीतर बूँदें टकराकर मिल सकती हैं या बर्फ़ के कण बढ़कर बाद में पिघल सकते हैं। जब कण इतने भारी हो जाते हैं कि हवा की धाराएँ उन्हें ऊपर नहीं संभाल पातीं, तो वे वर्षण के रूप में गिरते हैं। वे बारिश, बर्फ़ या किसी अन्य रूप में ज़मीन तक पहुँचेंगे या नहीं, यह हवा की अलग-अलग ऊँचाइयों पर मौजूद तापमान पर निर्भर करता है।"
    },
    thinkQuestion: {
      en: "What process changes water vapour into tiny cloud droplets?",
      hi: "जलवाष्प को बादल की छोटी बूँदों में बदलने वाली प्रक्रिया क्या है?"
    },
    options: [
      { text: { en: "Condensation", hi: "संघनन" }, correct: true, feedback: { en: "Correct! Cooling allows water vapour to condense into tiny droplets or ice crystals.", hi: "सही! ठंडा होने पर जलवाष्प संघनित होकर छोटी बूँदें या बर्फ़ के क्रिस्टल बना सकती है।" } },
      { text: { en: "Magnetism", hi: "चुंबकत्व" }, correct: false, feedback: { en: "Not quite. Condensation changes water vapour into liquid droplets, or deposition can form ice directly under suitable conditions.", hi: "पूरी तरह सही नहीं। संघनन से जलवाष्प तरल बूँदों में बदलती है; उपयुक्त परिस्थितियों में जलवाष्प सीधे बर्फ़ भी बना सकती है।" } },
      { text: { en: "Combustion", hi: "दहन" }, correct: false, feedback: { en: "Not quite. Condensation changes water vapour into liquid droplets, or deposition can form ice directly under suitable conditions.", hi: "पूरी तरह सही नहीं। संघनन से जलवाष्प तरल बूँदों में बदलती है; उपयुक्त परिस्थितियों में जलवाष्प सीधे बर्फ़ भी बना सकती है।" } }
    ],
    workingSteps: [
      { title: { en: "Water enters the air", hi: "पानी हवा में जाता है" }, description: { en: "Energy from the Sun helps water evaporate from wet surfaces; plants also release water vapour.", hi: "सूर्य की ऊर्जा से गीली सतहों का पानी वाष्पित होता है; पौधे भी जलवाष्प छोड़ते हैं।" } },
      { title: { en: "Moist air rises and cools", hi: "नम हवा ऊपर उठती और ठंडी होती है" }, description: { en: "Rising air expands and cools, bringing it closer to conditions where condensation can occur.", hi: "ऊपर उठती हवा फैलकर ठंडी होती है, जिससे संघनन की परिस्थितियाँ बन सकती हैं।" } },
      { title: { en: "Clouds form and droplets grow", hi: "बादल बनते हैं और बूँदें बढ़ती हैं" }, description: { en: "Water vapour condenses on tiny airborne particles; cloud droplets or ice crystals grow and may collide.", hi: "जलवाष्प हवा के सूक्ष्म कणों पर संघनित होती है; बादल की बूँदें या बर्फ़ के क्रिस्टल बढ़ते और टकराते हैं।" } },
      { title: { en: "Precipitation falls", hi: "वर्षण गिरता है" }, description: { en: "Once particles grow large enough, they can fall through the air as rain or other precipitation.", hi: "कण पर्याप्त बड़े हो जाएँ तो वे बारिश या अन्य वर्षण के रूप में नीचे गिर सकते हैं।" } }
    ],
    scienceBehind: {
      en: "Rain is part of the water cycle. Evaporation and plant transpiration add water vapour to the atmosphere. Rising moist air often cools as it expands. When the air reaches saturation, water vapour can condense onto condensation nuclei such as dust or sea-salt particles. Cloud droplets are initially tiny and often remain suspended. Rain can form through collision and coalescence of droplets in warmer clouds, or through ice-crystal processes in colder clouds where ice particles grow and later melt as they fall through warmer air. Not every cloud produces rain, and the details depend on cloud temperature, moisture, air currents, and other conditions.",
      hi: "बारिश जल चक्र का हिस्सा है। वाष्पीकरण और पौधों से होने वाला वाष्पोत्सर्जन वायुमंडल में जलवाष्प जोड़ते हैं। नम हवा ऊपर उठते समय फैलकर अक्सर ठंडी होती है। जब हवा संतृप्ति के करीब पहुँचती है, तो जलवाष्प धूल या समुद्री नमक जैसे सूक्ष्म कणों पर संघनित हो सकती है। बादल की बूँदें शुरुआत में बहुत छोटी होती हैं और हवा में तैरती रहती हैं। गर्म बादलों में बूँदों के टकराकर मिलने से बारिश बन सकती है; ठंडे बादलों में बर्फ़ के क्रिस्टल बढ़ते हैं और गर्म हवा से गुजरते समय पिघल सकते हैं। हर बादल से बारिश नहीं होती। प्रक्रिया बादल के तापमान, नमी, वायु धाराओं और अन्य परिस्थितियों पर निर्भर करती है।"
    },
    realLifeUses: [
      { en: "Weather forecasts estimate the chance of rain using observations, radar, satellites, and atmospheric models.", hi: "मौसम पूर्वानुमान में बारिश की संभावना जानने के लिए अवलोकन, रडार, उपग्रह और वायुमंडलीय मॉडल उपयोग होते हैं।" },
      { en: "Rain replenishes rivers, lakes, soil moisture, and many water supplies, though its distribution can be uneven.", hi: "बारिश नदियों, झीलों, मिट्टी की नमी और कई जल स्रोतों को भरती है, हालाँकि इसका वितरण असमान हो सकता है।" },
      { en: "Heavy rainfall can cause flooding and erosion, so drainage, vegetation, and early warnings matter.", hi: "तेज़ बारिश से बाढ़ और मिट्टी का कटाव हो सकता है, इसलिए जल निकासी, वनस्पति और समय पर चेतावनी महत्वपूर्ण हैं।" }
    ],
    didYouKnow: {
      en: "A cloud can contain enormous numbers of tiny droplets, yet those droplets may stay suspended until they grow or the air currents change.",
      hi: "बादल में बहुत बड़ी संख्या में छोटी बूँदें हो सकती हैं, फिर भी वे तब तक हवा में तैर सकती हैं जब तक बड़ी न हों या हवा की धाराएँ न बदलें।"
    },
    experiment: {
      en: "Make a mini water-cycle model in a clear container. Materials: A clear heat-safe glass or jar, a little warm (not boiling) water, plastic wrap or a lid, and a few ice cubes placed on top of the cover. Adult supervision required. Steps: 1. Pour a small amount of warm water into the clear container. 2. Cover the opening with plastic wrap or a lid; place a few ice cubes on top of the cover. 3. Observe droplets forming on the underside of the cooler cover. 4. Discuss how water vapour can cool and condense into liquid droplets. Safety: Use only warm, not boiling, water. An adult should handle the container and ice. Do not seal a hot container tightly. This model demonstrates evaporation and condensation, not a complete cloud or rainfall process.",
      hi: "गर्म (उबलता हुआ नहीं) पानी वाले पारदर्शी बर्तन को ढककर ऊपर बर्फ़ रखो और अंदर बूँदें बनने का निरीक्षण करो। यह जल चक्र का छोटा मॉडल है, असली बादल का पूरा रूप नहीं।"
    },
    relatedIds: ["lightning-thunder-delay", "rainbow", "dew-formation", "solar-panels"],
    visualType: "water-cycle-cloud-droplets"
  },
  {
    id: "dew-formation",
    category: "earth-weather-environment",
    emoji: "💧",
    title: { en: "Why Does Dew Appear on Grass?", hi: "घास पर ओस क्यों जमती है?" },
    question: {
      en: "How do tiny water droplets appear on grass even when it has not rained?",
      hi: "बारिश न होने पर भी सुबह घास पर पानी की छोटी बूँदें कैसे दिखाई देती हैं?"
    },
    intro: {
      en: "On a clear, calm night, the ground, grass, leaves, and other surfaces can lose heat and cool down. If a surface becomes cool enough, nearby air can reach its dew point—the temperature at which it becomes saturated with water vapour. Water vapour then condenses on the cool surface as tiny droplets called dew. Dew is different from rain because the droplets form directly on surfaces rather than falling from clouds. If the surface temperature is below freezing, ice crystals may form instead, producing frost.",
      hi: "साफ़ और शांत रात में ज़मीन, घास, पत्तियाँ और दूसरी सतहें ऊष्मा खोकर ठंडी हो सकती हैं। यदि कोई सतह पर्याप्त ठंडी हो जाए, तो उसके पास की हवा ओसांक तक पहुँच सकती है—वह तापमान जहाँ हवा जलवाष्प से संतृप्त हो जाती है। तब जलवाष्प ठंडी सतह पर संघनित होकर ओस की छोटी बूँदें बनाती है। ओस बारिश से अलग है, क्योंकि इसकी बूँदें बादलों से गिरने के बजाय सीधे सतहों पर बनती हैं। यदि सतह का तापमान हिमांक से नीचे हो, तो बर्फ़ के क्रिस्टल बन सकते हैं, जिन्हें पाला कहते हैं।"
    },
    thinkQuestion: {
      en: "What is the main process that forms dew on a cool blade of grass?",
      hi: "ठंडी घास पर ओस बनने की मुख्य प्रक्रिया क्या है?"
    },
    options: [
      { text: { en: "Condensation", hi: "संघनन" }, correct: true, feedback: { en: "Correct! Water vapour condenses into liquid droplets on a cool surface.", hi: "सही! ठंडी सतह पर जलवाष्प संघनित होकर तरल बूँदें बनाती है।" } },
      { text: { en: "Burning", hi: "दहन" }, correct: false, feedback: { en: "Not quite. Dew forms when a surface cools enough for nearby water vapour to condense.", hi: "पूरी तरह सही नहीं। सतह पर्याप्त ठंडी होने पर उसके पास की जलवाष्प संघनित होकर ओस बनाती है।" } },
      { text: { en: "Magnetism", hi: "चुंबकत्व" }, correct: false, feedback: { en: "Not quite. Dew forms when a surface cools enough for nearby water vapour to condense.", hi: "पूरी तरह सही नहीं। सतह पर्याप्त ठंडी होने पर उसके पास की जलवाष्प संघनित होकर ओस बनाती है।" } }
    ],
    workingSteps: [
      { title: { en: "Grass loses heat", hi: "घास ऊष्मा खोती है" }, description: { en: "During the night, grass and other surfaces can cool by radiating heat to the surroundings and sky.", hi: "रात में घास और अन्य सतहें आसपास तथा आकाश की ओर ऊष्मा खोकर ठंडी हो सकती हैं।" } },
      { title: { en: "The surface reaches the dew point", hi: "सतह ओसांक तक पहुँचती है" }, description: { en: "The air next to the cool surface becomes saturated with water vapour.", hi: "ठंडी सतह के पास की हवा जलवाष्प से संतृप्त हो जाती है।" } },
      { title: { en: "Water vapour condenses", hi: "जलवाष्प संघनित होती है" }, description: { en: "Water vapour changes into liquid droplets on the grass.", hi: "जलवाष्प घास पर तरल बूँदों में बदल जाती है।" } },
      { title: { en: "Dew or frost remains", hi: "ओस या पाला रहता है" }, description: { en: "If the surface is above freezing, liquid dew can form; below freezing, frost may form under suitable conditions.", hi: "सतह हिमांक से ऊपर हो तो तरल ओस बन सकती है; हिमांक से नीचे उपयुक्त परिस्थितियों में पाला बन सकता है।" } }
    ],
    scienceBehind: {
      en: "Dew forms through condensation. A surface can cool at night as it emits infrared radiation. When its temperature falls to or below the dew point of the nearby air, water vapour condenses on that surface. Dew is more likely on clear nights with light winds and sufficient moisture, although local conditions matter. Wind can mix the air and reduce the cooling of a surface, while clouds can reduce how much heat the surface loses to the sky. Frost can form when surfaces are below freezing and water vapour deposits as ice or droplets freeze.",
      hi: "ओस संघनन से बनती है। रात में कोई सतह अवरक्त विकिरण के रूप में ऊष्मा छोड़कर ठंडी हो सकती है। जब उसका तापमान पास की हवा के ओसांक तक या उससे नीचे पहुँचता है, तो जलवाष्प उस सतह पर संघनित हो जाती है। पर्याप्त नमी और हल्की हवा वाली साफ़ रातों में ओस बनने की संभावना अधिक हो सकती है, हालाँकि स्थानीय परिस्थितियाँ भी महत्वपूर्ण हैं। हवा के चलने से आसपास की हवा मिलती रहती है और सतह का ठंडा होना कम हो सकता है; बादल सतह से आकाश की ओर ऊष्मा निकलने को कम कर सकते हैं। सतह हिमांक से नीचे हो तो जलवाष्प सीधे बर्फ़ जमा सकती है या बूँदें जम सकती हैं, जिससे पाला बनता है।"
    },
    realLifeUses: [
      { en: "Farmers and gardeners monitor dew and frost because they affect plant surfaces and can influence disease or frost damage.", hi: "किसान और बाग़वान ओस व पाले पर ध्यान देते हैं, क्योंकि ये पौधों की सतहों को प्रभावित कर सकते हैं।" },
      { en: "Dew point is used in weather observations to understand humidity and the likelihood of condensation or fog.", hi: "ओसांक का उपयोग मौसम अवलोकनों में नमी और संघनन या कोहरा बनने की संभावना समझने के लिए किया जाता है।" },
      { en: "The same basic condensation process can make water droplets appear on the outside of a cold drink glass.", hi: "यही संघनन प्रक्रिया ठंडे पेय के गिलास के बाहर पानी की बूँदें बना सकती है।" }
    ],
    didYouKnow: {
      en: "The water on the outside of a cold glass usually comes from water vapour in the surrounding air, not from water leaking through the glass.",
      hi: "ठंडे गिलास के बाहर की बूँदें आम तौर पर आसपास की हवा की जलवाष्प से बनती हैं, गिलास के अंदर का पानी बाहर रिसने से नहीं।"
    },
    experiment: {
      en: "Observe condensation on a cold glass. Materials: A clean, dry glass, cool water, and a few ice cubes. Steps: 1. Dry the outside of the empty glass. 2. Add cool water and a few ice cubes. 3. Leave it on a dry table for several minutes. 4. Observe droplets appearing on the outside and discuss where that water came from. Safety: Use a sturdy glass and avoid very cold glass that may crack due to thermal shock. Wipe spills to prevent slipping. Do not use broken or chipped glass.",
      hi: "सूखे गिलास में ठंडा पानी और बर्फ़ डालो। कुछ मिनट बाद बाहर बनने वाली बूँदों को देखो। सावधानी से काँच का उपयोग करो और पानी गिरने पर पोंछ दो।"
    },
    relatedIds: ["rain-formation", "rainbow", "lightning-thunder-delay", "solar-panels"],
    visualType: "grass-night-cooling-dew"
  },
  {
    id: "solar-panels",
    category: "earth-weather-environment",
    emoji: "☀️",
    title: { en: "How Do Solar Panels Make Electricity?", hi: "सोलर पैनल बिजली कैसे बनाते हैं?" },
    question: {
      en: "How can sunlight power a light or charge a battery without moving parts?",
      hi: "बिना घूमने वाले पुर्ज़ों के सूर्य का प्रकाश बिजली कैसे बना सकता है?"
    },
    intro: {
      en: "A solar panel contains many solar cells, usually made from semiconductor materials such as silicon. When light reaches a cell, photons can transfer energy to electrons in the semiconductor. The cell's internal electric field helps separate the charges, allowing electrons to move through an external circuit and provide direct-current (DC) electricity. A solar installation may use an inverter to convert DC electricity into alternating current (AC) for many household uses. Output depends on sunlight, panel angle, shade, temperature, and the system's design. Solar panels can still produce some electricity on cloudy days, but usually less than in strong direct sunlight.",
      hi: "सोलर पैनल में कई सौर सेल होते हैं, जो आम तौर पर सिलिकॉन जैसे अर्धचालक पदार्थों से बने होते हैं। जब प्रकाश सेल पर पड़ता है, तो फोटॉन अर्धचालक के इलेक्ट्रॉनों को ऊर्जा दे सकते हैं। सेल के भीतर का विद्युत क्षेत्र आवेशों को अलग करने में मदद करता है, जिससे इलेक्ट्रॉन बाहरी परिपथ में चल सकते हैं और दिष्ट धारा (DC) पैदा होती है। कई घरेलू प्रणालियों में इन्वर्टर DC बिजली को प्रत्यावर्ती धारा (AC) में बदलता है। बिजली का उत्पादन सूर्य के प्रकाश, पैन के कोण, छाया, तापमान और प्रणाली के डिज़ाइन पर निर्भर करता है। बादलों वाले दिन भी सोलर पैनल कुछ बिजली बना सकते हैं, लेकिन तेज़ सीधी धूप की तुलना में आम तौर पर कम।"
    },
    thinkQuestion: {
      en: "What is the main energy conversion in a solar cell?",
      hi: "सौर सेल में मुख्य ऊर्जा परिवर्तन क्या होता है?"
    },
    options: [
      { text: { en: "Light energy to electrical energy", hi: "प्रकाश ऊर्जा से विद्युत ऊर्जा" }, correct: true, feedback: { en: "Correct! The photovoltaic effect allows a solar cell to convert light into electrical energy.", hi: "सही! फोटोवोल्टिक प्रभाव सौर सेल को प्रकाश ऊर्जा को विद्युत ऊर्जा में बदलने देता है।" } },
      { text: { en: "Sound energy to magnetic mass", hi: "ध्वनि ऊर्जा से चुंबकीय द्रव्यमान" }, correct: false, feedback: { en: "Not quite. Solar cells convert light energy into electrical energy through the photovoltaic effect.", hi: "पूरी तरह सही नहीं। सौर सेल फोटोवोल्टिक प्रभाव के माध्यम से प्रकाश ऊर्जा को विद्युत ऊर्जा में बदलते हैं।" } },
      { text: { en: "Chemical energy to moonlight", hi: "रासायनिक ऊर्जा से चाँदनी" }, correct: false, feedback: { en: "Not quite. Solar cells convert light energy into electrical energy through the photovoltaic effect.", hi: "पूरी तरह सही नहीं। सौर सेल फोटोवोल्टिक प्रभाव के माध्यम से प्रकाश ऊर्जा को विद्युत ऊर्जा में बदलते हैं।" } }
    ],
    workingSteps: [
      { title: { en: "Sunlight reaches the cell", hi: "सूर्य का प्रकाश सेल तक पहुँचता है" }, description: { en: "Photons from sunlight enter the semiconductor material.", hi: "सूर्य के प्रकाश के फोटॉन अर्धचालक पदार्थ में प्रवेश करते हैं।" } },
      { title: { en: "Light energises charge carriers", hi: "प्रकाश आवेश वाहकों को ऊर्जा देता है" }, description: { en: "Photons transfer energy that can free electrons and create mobile charge carriers.", hi: "फोटॉन ऊर्जा देते हैं, जिससे इलेक्ट्रॉन मुक्त हो सकते हैं और गतिशील आवेश वाहक बनते हैं।" } },
      { title: { en: "The cell separates charges", hi: "सेल आवेशों को अलग करता है" }, description: { en: "The cell's internal electric field helps direct charges, producing a voltage.", hi: "सेल का आंतरिक विद्युत क्षेत्र आवेशों को अलग दिशा में ले जाने में मदद करता है, जिससे वोल्टेज बनता है।" } },
      { title: { en: "Current powers a device", hi: "धारा उपकरण को चलाती है" }, description: { en: "With a complete external circuit, current can power a device or charge a suitable battery system.", hi: "बाहरी परिपथ पूरा होने पर धारा किसी उपकरण को चला सकती है या उपयुक्त बैटरी प्रणाली को चार्ज कर सकती है।" } }
    ],
    scienceBehind: {
      en: "Solar cells operate through the photovoltaic effect in a semiconductor. Photons with suitable energy can excite electrons into states where they can move through the material, leaving behind positively charged holes. A built-in electric field in the cell's junction helps separate electrons and holes, creating a voltage. When a circuit connects the cell's terminals through a load, electrons flow through the external circuit and electrical energy is delivered. Cells are combined into modules and panels to provide useful voltage and current. Real output is affected by shading, orientation, temperature, dirt, and electrical losses.",
      hi: "सौर सेल अर्धचालक में होने वाले फोटोवोल्टिक प्रभाव से काम करते हैं। उपयुक्त ऊर्जा वाले फोटॉन इलेक्ट्रॉनों को ऐसी अवस्थाओं में पहुँचा सकते हैं जहाँ वे पदार्थ में चल सकें; इसके साथ धनात्मक आवेश वाले होल पीछे रह जाते हैं। सेल के जंक्शन में बना आंतरिक विद्युत क्षेत्र इलेक्ट्रॉनों और होल को अलग करने में मदद करता है, जिससे वोल्टेज बनता है। जब सेल के दोनों सिरों को किसी उपकरण के माध्यम से बाहरी परिपथ में जोड़ा जाता है, तो इलेक्ट्रॉन बाहरी परिपथ में बहते हैं और विद्युत ऊर्जा मिलती है। उपयोगी वोल्टेज और धारा पाने के लिए कई सेल मिलाकर मॉड्यूल और पैनल बनाए जाते हैं। छाया, दिशा, तापमान, धूल और विद्युत हानियाँ वास्तविक उत्पादन को प्रभावित करती हैं।"
    },
    realLifeUses: [
      { en: "Solar panels can power calculators, streetlights, rooftop systems, and remote monitoring equipment.", hi: "सोलर पैनल कैलकुलेटर, स्ट्रीट लाइट, छतों पर लगी प्रणालियों और दूरस्थ निगरानी उपकरणों को बिजली दे सकते हैं।" },
      { en: "Batteries can store solar electricity for use when sunlight is unavailable, depending on system design.", hi: "प्रणाली के डिज़ाइन के अनुसार बैटरियाँ सौर बिजली को उस समय के लिए जमा कर सकती हैं जब धूप उपलब्ध न हो।" },
      { en: "Solar power can reduce the need for electricity from fossil-fuel sources, though manufacturing, land use, storage, and recycling also matter.", hi: "सौर ऊर्जा जीवाश्म ईंधन से बनने वाली बिजली की आवश्यकता कम कर सकती है, हालाँकि निर्माण, भूमि उपयोग, भंडारण और पुनर्चक्रण भी महत्वपूर्ण हैं।" }
    ],
    didYouKnow: {
      en: "Solar panels usually produce DC electricity. Many household systems use an inverter to supply AC electricity to compatible appliances.",
      hi: "सोलर पैनल सामान्यतः DC बिजली बनाते हैं। कई घरेलू प्रणालियाँ उपयुक्त उपकरणों के लिए AC बिजली देने हेतु इन्वर्टर उपयोग करती हैं।"
    },
    experiment: {
      en: "Observe a small commercial solar-powered calculator or educational solar kit. Materials: A solar calculator or a small classroom solar kit with a low-voltage output, plus a desk lamp or daylight. Steps: 1. Observe the device in ordinary room light and note whether it works. 2. Move it to a brighter, safe light source or indirect daylight. 3. If the kit supports it, shade part of the solar cell with paper and observe any change in output. 4. Discuss why light intensity and shading affect performance. Safety: Never look directly at the Sun. Do not connect a classroom solar cell to household mains electricity. Do not dismantle rooftop panels or touch exposed electrical wiring. Use only a commercial low-voltage educational kit.",
      hi: "सोलर कैलकुलेटर या तैयार कम-वोल्टेज किट को अलग-अलग रोशनी में देखकर आउटपुट की तुलना करो। सूर्य को सीधे मत देखो और घरेलू बिजली से प्रयोग मत करो।"
    },
    relatedIds: ["rain-formation", "dew-formation", "electric-motor", "induction-cooktop"],
    visualType: "solar-cell-photovoltaic-effect"
  },
  // Batch 8 – Biology & the Human Body Around Us
  {
    id: "heartbeat",
    category: "biology",
    emoji: "❤️",
    title: { en: "Why Does Our Heart Keep Beating?", hi: "हमारा दिल धड़कता क्यों रहता है?" },
    question: {
      en: "Your heart beats even while you sleep. What keeps this muscular pump working automatically?",
      hi: "जब आप सोते हैं, तब भी आपका दिल धड़कता रहता है। यह मांसपेशियों वाला पंप अपने-आप कैसे काम करता रहता है?"
    },
    intro: {
      en: "Special cells in the heart generate electrical signals that coordinate its contractions. The brain and nerves can adjust the rate, but the heart has its own built-in rhythm system.",
      hi: "हृदय की कुछ विशेष कोशिकाएँ विद्युत संकेत बनाती हैं, जो उसकी मांसपेशियों के संकुचन को तालमेल में रखती हैं। मस्तिष्क और नसें इसकी गति बदल सकती हैं, लेकिन हृदय में अपनी लय बनाने की व्यवस्था भी होती है।"
    },
    thinkQuestion: {
      en: "What normally starts each heartbeat?",
      hi: "सामान्यतः हर धड़कन किससे शुरू होती है?"
    },
    options: [
      { text: { en: "A signal from the stomach", hi: "पेट से आने वाला संकेत" }, correct: false, feedback: { en: "Not quite. The stomach helps digest food; it does not start each heartbeat.", hi: "ऐसा नहीं है। पेट भोजन पचाने में मदद करता है; वह हर धड़कन शुरू नहीं करता।" } },
      { text: { en: "Electrical activity from the heart's natural pacemaker", hi: "हृदय के प्राकृतिक पेसमेकर की विद्युत गतिविधि" }, correct: true, feedback: { en: "Correct! The sinoatrial (SA) node normally starts the electrical impulse that sets the rhythm.", hi: "सही! साइनोएट्रियल (SA) नोड सामान्यतः वह विद्युत संकेत शुरू करता है जो धड़कन की लय तय करता है।" } },
      { text: { en: "Air entering the lungs", hi: "फेफड़ों में हवा जाना" }, correct: false, feedback: { en: "Breathing and heartbeat work together, but air entering the lungs does not directly start every beat.", hi: "साँस और धड़कन साथ काम करते हैं, लेकिन फेफड़ों में हवा जाना हर धड़कन को सीधे शुरू नहीं करता।" } },
      { text: { en: "Food moving through the intestine", hi: "आँत में भोजन का चलना" }, correct: false, feedback: { en: "Digestion and heartbeat are different processes.", hi: "पाचन और हृदय की धड़कन अलग-अलग प्रक्रियाएँ हैं।" } }
    ],
    workingSteps: [
      { title: { en: "A rhythm begins", hi: "लय शुरू होती है" }, description: { en: "The SA node in the right atrium produces an electrical impulse.", hi: "दाएँ आलिंद में स्थित SA नोड विद्युत संकेत बनाता है।" } },
      { title: { en: "The signal spreads", hi: "संकेत फैलता है" }, description: { en: "The impulse travels through the heart's conduction system.", hi: "संकेत हृदय की विद्युत-संचालन प्रणाली में फैलता है।" } },
      { title: { en: "The chambers contract", hi: "कक्ष सिकुड़ते हैं" }, description: { en: "The atria contract, followed by coordinated contraction of the ventricles.", hi: "पहले आलिंद और फिर तालमेल से निलय सिकुड़ते हैं।" } },
      { title: { en: "Blood moves", hi: "रक्त आगे बढ़ता है" }, description: { en: "Blood is pushed toward the lungs and the rest of the body; the heart relaxes and fills again.", hi: "रक्त फेफड़ों और शरीर की ओर पंप होता है; फिर हृदय शिथिल होकर दोबारा रक्त से भरता है।" } }
    ],
    scienceBehind: {
      en: "The heart's natural pacemaker, the SA node, generates electrical impulses. These spread through specialised conduction pathways, causing the atria and then the ventricles to contract in a coordinated way. Valves prevent backflow. The familiar 'lub-dub' sound mainly comes from valves closing. The rate can be adjusted by the autonomic nervous system and hormones according to the body's needs.",
      hi: "हृदय का प्राकृतिक पेसमेकर, SA नोड, विद्युत संकेत बनाता है। ये विशेष संचालन मार्गों से फैलते हैं, जिससे पहले आलिंद और फिर निलय तालमेल से सिकुड़ते हैं। वाल्व रक्त को वापस बहने से रोकते हैं। दिल की 'लब-डब' ध्वनि मुख्यतः वाल्व बंद होने से आती है। शरीर की आवश्यकता के अनुसार स्वायत्त तंत्रिका तंत्र और हार्मोन इस गति को बदल सकते हैं।"
    },
    realLifeUses: [
      { en: "Pulse checks help estimate heart rate; medical ECGs record electrical activity; pacemakers can help when the natural rhythm system is faulty.", hi: "नाड़ी देखकर हृदय गति का अनुमान लगाया जा सकता है; ECG हृदय की विद्युत गतिविधि दर्ज करता है; प्राकृतिक लय में समस्या होने पर पेसमेकर मदद कर सकता है।" }
    ],
    didYouKnow: {
      en: "The familiar “lub-dub” sound mainly comes from heart valves closing, not from the heart muscle rubbing together.",
      hi: "दिल की “लब-डब” ध्वनि मुख्यतः हृदय के वाल्व बंद होने से आती है, न कि हृदय की मांसपेशियों के आपस में रगड़ने से।"
    },
    experiment: {
      en: "Sit quietly for one minute and gently count your pulse at your wrist for 30 seconds; double the count for an approximate beats-per-minute value. After a short, comfortable walk, rest and compare. Do not press hard on your neck or try to change your pulse by holding your breath.",
      hi: "एक मिनट शांति से बैठें और कलाई पर नाड़ी को हल्के से 30 सेकंड तक गिनें; लगभग प्रति मिनट धड़कन जानने के लिए संख्या को दोगुना करें। फिर थोड़ी आरामदायक चाल से चलकर आराम करें और दोबारा तुलना करें। गर्दन पर जोर से दबाव न डालें और साँस रोककर नाड़ी बदलने की कोशिश न करें।"
    },
    relatedIds: ["breathing", "digestion", "plant-photosynthesis"],
    visualType: "heart-sa-node-animation"
  },
  {
    id: "breathing",
    category: "biology",
    emoji: "🫁",
    title: { en: "How Do Our Lungs Help Us Breathe?", hi: "हमारे फेफड़े साँस लेने में कैसे मदद करते हैं?" },
    question: {
      en: "Your lungs do not have muscles that pull air in by themselves. So what makes air move in and out?",
      hi: "फेफड़ों में ऐसी मांसपेशियाँ नहीं होतीं जो खुद हवा खींचें। फिर हवा अंदर-बाहर कैसे जाती है?"
    },
    intro: {
      en: "The diaphragm and chest muscles change the volume of the chest cavity. This changes air pressure, so air flows into or out of the lungs. Oxygen then passes into the blood, while carbon dioxide moves out.",
      hi: "डायफ्राम और छाती की मांसपेशियाँ छाती की गुहा का आयतन बदलती हैं। इससे हवा का दबाव बदलता है और हवा फेफड़ों में आती-जाती है। फिर ऑक्सीजन रक्त में जाती है और कार्बन डाइऑक्साइड बाहर निकलती है।"
    },
    thinkQuestion: {
      en: "What usually happens when the diaphragm contracts and moves downward?",
      hi: "जब डायफ्राम सिकुड़कर नीचे जाता है, तो सामान्यतः क्या होता है?"
    },
    options: [
      { text: { en: "The chest cavity becomes smaller", hi: "छाती की गुहा छोटी हो जाती है" }, correct: false, feedback: { en: "That is closer to what happens during quiet exhalation.", hi: "यह सामान्य साँस छोड़ते समय होने वाली प्रक्रिया के अधिक करीब है।" } },
      { text: { en: "The chest cavity expands and air enters the lungs", hi: "छाती की गुहा फैलती है और हवा फेफड़ों में आती है" }, correct: true, feedback: { en: "Correct! The diaphragm moves down, chest volume increases, and air flows in because pressure inside the lungs falls slightly below outside air pressure.", hi: "सही! डायफ्राम नीचे जाता है, छाती का आयतन बढ़ता है और फेफड़ों के अंदर दबाव थोड़ा कम होने से हवा अंदर आती है।" } },
      { text: { en: "The lungs stop exchanging gases", hi: "फेफड़ों में गैसों का आदान-प्रदान रुक जाता है" }, correct: false, feedback: { en: "Gas exchange continues while you breathe.", hi: "साँस लेते समय गैसों का आदान-प्रदान जारी रहता है।" } },
      { text: { en: "The stomach pumps air into the lungs", hi: "पेट हवा को फेफड़ों में पंप करता है" }, correct: false, feedback: { en: "The stomach is part of the digestive system, not an air pump.", hi: "पेट पाचन तंत्र का हिस्सा है, हवा पंप करने वाला अंग नहीं।" } }
    ],
    workingSteps: [
      { title: { en: "Breathe in", hi: "साँस अंदर लें" }, description: { en: "The diaphragm contracts and flattens; ribs move outward.", hi: "डायफ्राम सिकुड़कर चपटा होता है और पसलियाँ बाहर की ओर उठती हैं।" } },
      { title: { en: "Air enters", hi: "हवा अंदर आती है" }, description: { en: "Chest volume increases and air flows through the airways into the lungs.", hi: "छाती का आयतन बढ़ता है और वायुमार्ग से हवा फेफड़ों में आती है।" } },
      { title: { en: "Gas exchange", hi: "गैसों का आदान-प्रदान" }, description: { en: "In tiny air sacs called alveoli, oxygen enters the blood and carbon dioxide leaves it.", hi: "एल्वियोली नामक सूक्ष्म वायुकोषों में ऑक्सीजन रक्त में जाती है और कार्बन डाइऑक्साइड बाहर आती है।" } },
      { title: { en: "Breathe out", hi: "साँस बाहर छोड़ें" }, description: { en: "During quiet exhalation, the diaphragm relaxes, chest volume decreases, and air flows out.", hi: "सामान्य साँस छोड़ते समय डायफ्राम शिथिल होता है, छाती का आयतन घटता है और हवा बाहर निकलती है।" } }
    ],
    scienceBehind: {
      en: "Breathing is a mechanical process driven by pressure differences. The diaphragm and intercostal muscles change the volume of the thoracic cavity. According to Boyle's law, when volume increases, pressure decreases, so air flows in. Gas exchange occurs in the alveoli by diffusion: oxygen moves from alveoli into blood, and carbon dioxide moves from blood into alveoli. The respiratory and circulatory systems work together to deliver oxygen to cells and remove carbon dioxide.",
      hi: "श्वसन एक यांत्रिक प्रक्रिया है जो दबाव के अंतर से चलती है। डायफ्राम और अंतर-पर्शुका मांसपेशियाँ वक्ष गुहा का आयतन बदलती हैं। बॉयल के नियम के अनुसार, आयतन बढ़ने पर दबाव घटता है, इसलिए हवा अंदर आती है। गैसों का आदान-प्रदान एल्वियोली में विसरण द्वारा होता है: ऑक्सीजन एल्वियोली से रक्त में और कार्बन डाइऑक्साइड रक्त से एल्वियोली में जाती है। श्वसन और संचार तंत्र मिलकर कोशिकाओं तक ऑक्सीजन पहुँचाते हैं और कार्बन डाइऑक्साइड हटाते हैं।"
    },
    realLifeUses: [
      { en: "Breathing rate can rise during exercise because muscles need more oxygen and produce more carbon dioxide. Inhalers and oxygen support can help in specific medical situations when prescribed by a health professional.", hi: "व्यायाम के दौरान साँस की गति बढ़ सकती है क्योंकि मांसपेशियों को अधिक ऑक्सीजन चाहिए और वे अधिक कार्बन डाइऑक्साइड बनाती हैं। डॉक्टर की सलाह पर इनहेलर या ऑक्सीजन सहायता कुछ स्थितियों में उपयोगी हो सकती है।" }
    ],
    didYouKnow: {
      en: "The lungs contain millions of tiny alveoli, creating a large surface area for gas exchange.",
      hi: "फेफड़ों में लाखों सूक्ष्म एल्वियोली होते हैं, जो गैसों के आदान-प्रदान के लिए बहुत बड़ा सतह क्षेत्र बनाते हैं।"
    },
    experiment: {
      en: "Place one hand gently on your upper chest and one on your abdomen. Breathe normally and notice how the areas move. Do not force deep breaths or hold your breath; stop if you feel dizzy or uncomfortable.",
      hi: "एक हाथ छाती के ऊपरी भाग पर और दूसरा पेट पर हल्के से रखें। सामान्य रूप से साँस लें और दोनों जगहों की गति महसूस करें। जबरदस्ती गहरी साँस न लें और साँस न रोकें; चक्कर या असहजता होने पर रुक जाएँ।"
    },
    relatedIds: ["heartbeat", "digestion", "plant-photosynthesis"],
    visualType: "lungs-diaphragm-animation"
  },
  {
    id: "digestion",
    category: "biology",
    emoji: "🍎",
    title: { en: "How Does Food Turn into Energy for Our Body?", hi: "भोजन हमारे शरीर के लिए ऊर्जा में कैसे बदलता है?" },
    question: {
      en: "A bite of food cannot power your muscles immediately. How does the body turn food into useful energy?",
      hi: "भोजन का एक निवाला तुरंत मांसपेशियों को ऊर्जा नहीं दे सकता। शरीर भोजन को उपयोगी ऊर्जा में कैसे बदलता है?"
    },
    intro: {
      en: "Digestion breaks food into small molecules. Nutrients are absorbed—mostly through the small intestine—into the blood and delivered to cells. Cells use nutrients such as glucose in cellular respiration to release usable energy.",
      hi: "पाचन भोजन को छोटे अणुओं में तोड़ता है। पोषक तत्व—मुख्यतः छोटी आँत से—रक्त में अवशोषित होते हैं और कोशिकाओं तक पहुँचते हैं। कोशिकाएँ ग्लूकोज़ जैसे पोषक पदार्थों से कोशिकीय श्वसन द्वारा उपयोगी ऊर्जा प्राप्त करती हैं।"
    },
    thinkQuestion: {
      en: "Where are most digested nutrients absorbed into the bloodstream?",
      hi: "अधिकांश पचे हुए पोषक तत्व रक्त में कहाँ अवशोषित होते हैं?"
    },
    options: [
      { text: { en: "Small intestine", hi: "छोटी आँत" }, correct: true, feedback: { en: "Correct! The small intestine has a large, folded surface with villi that help absorb nutrients.", hi: "सही! छोटी आँत की भीतरी सतह पर अनेक विली होते हैं, जो पोषक तत्वों के अवशोषण में मदद करते हैं।" } },
      { text: { en: "Teeth", hi: "दाँत" }, correct: false, feedback: { en: "Teeth mechanically break food into smaller pieces, but they do not absorb most nutrients into the blood.", hi: "दाँत भोजन को छोटे टुकड़ों में तोड़ते हैं, लेकिन अधिकांश पोषक तत्वों को रक्त में अवशोषित नहीं करते।" } },
      { text: { en: "Windpipe", hi: "श्वासनली" }, correct: false, feedback: { en: "The windpipe carries air to and from the lungs.", hi: "श्वासनली फेफड़ों तक हवा पहुँचाती है और वापस लाती है।" } },
      { text: { en: "Heart valves", hi: "हृदय के वाल्व" }, correct: false, feedback: { en: "Heart valves help direct blood flow.", hi: "हृदय के वाल्व रक्त के प्रवाह की दिशा बनाए रखने में मदद करते हैं।" } }
    ],
    workingSteps: [
      { title: { en: "Mechanical and chemical digestion", hi: "यांत्रिक और रासायनिक पाचन" }, description: { en: "Chewing breaks food apart; saliva starts digesting starch.", hi: "चबाने से भोजन टूटता है और लार स्टार्च का पाचन शुरू करती है।" } },
      { title: { en: "Stomach processing", hi: "आमाशय में प्रक्रिया" }, description: { en: "Muscular mixing and gastric juices help break food down further, especially proteins.", hi: "मांसपेशियों की हलचल और जठर रस भोजन को आगे तोड़ते हैं, विशेषकर प्रोटीन को।" } },
      { title: { en: "Small intestine", hi: "छोटी आँत" }, description: { en: "Enzymes and bile help digestion; nutrients pass through the intestinal lining into blood or lymph.", hi: "एंजाइम और पित्त पाचन में मदद करते हैं; पोषक तत्व आँत की दीवार से रक्त या लसीका में पहुँचते हैं।" } },
      { title: { en: "Cells use nutrients", hi: "कोशिकाएँ पोषक तत्वों का उपयोग करती हैं" }, description: { en: "Cells use nutrients in chemical reactions, including cellular respiration, to make ATP—the cell's usable energy carrier.", hi: "कोशिकाएँ कोशिकीय श्वसन सहित रासायनिक प्रक्रियाओं से ATP बनाती हैं, जो कोशिका में उपयोगी ऊर्जा का वाहक है।" } }
    ],
    scienceBehind: {
      en: "Digestion is both mechanical and chemical. Enzymes break down carbohydrates, proteins, and fats into smaller molecules. The small intestine's structure—with villi and microvilli—provides a large surface area for absorption. Absorbed nutrients travel through the bloodstream to cells. Cellular respiration, which occurs mainly in mitochondria, uses glucose and oxygen to produce ATP, releasing carbon dioxide and water as waste products.",
      hi: "पाचन यांत्रिक और रासायनिक दोनों है। एंजाइम कार्बोहाइड्रेट, प्रोटीन और वसा को छोटे अणुओं में तोड़ते हैं। छोटी आँत की संरचना—विली और माइक्रोविली सहित—अवशोषण के लिए बड़ा सतह क्षेत्र देती है। अवशोषित पोषक तत्व रक्तप्रवाह से कोशिकाओं तक जाते हैं। कोशिकीय श्वसन, जो मुख्यतः माइटोकॉन्ड्रिया में होता है, ग्लूकोज़ और ऑक्सीजन का उपयोग करके ATP बनाता है और कार्बन डाइऑक्साइड तथा पानी अपशिष्ट के रूप में छोड़ता है।"
    },
    realLifeUses: [
      { en: "A varied balanced diet provides energy, protein, fats, vitamins, minerals, and fibre. Drinking water supports digestion, and fibre-rich foods support healthy bowel movements.", hi: "संतुलित और विविध भोजन ऊर्जा, प्रोटीन, वसा, विटामिन, खनिज और रेशा देता है। पानी पाचन में मदद करता है और रेशेदार भोजन सामान्य मल त्याग में सहायक होता है।" }
    ],
    didYouKnow: {
      en: "The small intestine's folds and villi greatly increase its inner surface area, making nutrient absorption more efficient.",
      hi: "छोटी आँत की तहें और विली उसकी भीतरी सतह का क्षेत्र बहुत बढ़ा देते हैं, जिससे पोषक तत्वों का अवशोषण अधिक प्रभावी होता है।"
    },
    experiment: {
      en: "Draw a simple food journey map: mouth → oesophagus → stomach → small intestine → large intestine. Add one sentence about what happens at each stage. Do not use chemicals or attempt to test digestion by tasting unknown substances.",
      hi: "भोजन की यात्रा का सरल चित्र बनाएँ: मुँह → ग्रासनली → आमाशय → छोटी आँत → बड़ी आँत। हर चरण पर क्या होता है, एक वाक्य में लिखें। अज्ञात पदार्थ चखकर या रसायनों का उपयोग करके पाचन जाँचने की कोशिश न करें।"
    },
    relatedIds: ["heartbeat", "breathing", "plant-photosynthesis"],
    visualType: "digestion-path-animation"
  },
  {
    id: "plant-photosynthesis",
    category: "biology",
    emoji: "🌿",
    title: { en: "How Do Plants Make Their Own Food?", hi: "पौधे अपना भोजन कैसे बनाते हैं?" },
    question: {
      en: "Plants do not eat meals like animals. How do leaves make the sugars that help a plant grow?",
      hi: "पौधे जानवरों की तरह भोजन नहीं खाते। पत्तियाँ वह शर्करा कैसे बनाती हैं जो पौधे की वृद्धि में मदद करती है?"
    },
    intro: {
      en: "In photosynthesis, chlorophyll in chloroplasts captures light energy. The plant uses carbon dioxide from the air and water to make sugars, releasing oxygen as a by-product.",
      hi: "प्रकाश-संश्लेषण में क्लोरोप्लास्ट के भीतर मौजूद क्लोरोफिल प्रकाश ऊर्जा ग्रहण करता है। पौधा हवा से कार्बन डाइऑक्साइड और पानी का उपयोग करके शर्करा बनाता है और उप-उत्पाद के रूप में ऑक्सीजन छोड़ता है।"
    },
    thinkQuestion: {
      en: "Which set of inputs is needed for photosynthesis?",
      hi: "प्रकाश-संश्लेषण के लिए किन चीज़ों की आवश्यकता होती है?"
    },
    options: [
      { text: { en: "Carbon dioxide, water, and light energy", hi: "कार्बन डाइऑक्साइड, पानी और प्रकाश ऊर्जा" }, correct: true, feedback: { en: "Correct! Plants use carbon dioxide and water, with light energy, to build sugars.", hi: "सही! पौधे प्रकाश ऊर्जा की मदद से कार्बन डाइऑक्साइड और पानी से शर्करा बनाते हैं।" } },
      { text: { en: "Oxygen, soil, and darkness only", hi: "केवल ऑक्सीजन, मिट्टी और अँधेरा" }, correct: false, feedback: { en: "Photosynthesis requires light energy; oxygen is released during the process rather than serving as its main carbon source.", hi: "प्रकाश-संश्लेषण के लिए प्रकाश ऊर्जा चाहिए; इस प्रक्रिया में ऑक्सीजन निकलती है, वह कार्बन का मुख्य स्रोत नहीं है।" } },
      { text: { en: "Sugar and sound", hi: "शर्करा और ध्वनि" }, correct: false, feedback: { en: "Sound is not the energy source for photosynthesis.", hi: "ध्वनि प्रकाश-संश्लेषण का ऊर्जा स्रोत नहीं है।" } },
      { text: { en: "Sand and wind alone", hi: "केवल रेत और हवा" }, correct: false, feedback: { en: "Sand and wind alone cannot provide the materials and energy required.", hi: "केवल रेत और हवा आवश्यक पदार्थ और ऊर्जा नहीं दे सकते।" } }
    ],
    workingSteps: [
      { title: { en: "Light captured", hi: "प्रकाश ग्रहण होता है" }, description: { en: "Chlorophyll in chloroplasts absorbs light energy.", hi: "क्लोरोफिल क्लोरोप्लास्ट में प्रकाश ऊर्जा ग्रहण करता है।" } },
      { title: { en: "Water is used", hi: "पानी का उपयोग" }, description: { en: "Light-driven reactions help split water; oxygen is released.", hi: "प्रकाश-चालित अभिक्रियाएँ पानी के अणुओं को तोड़ने में मदद करती हैं और ऑक्सीजन निकलती है।" } },
      { title: { en: "Carbon dioxide enters", hi: "कार्बन डाइऑक्साइड प्रवेश करती है" }, description: { en: "Carbon dioxide enters leaves through tiny openings called stomata.", hi: "कार्बन डाइऑक्साइड रंध्रों नामक सूक्ष्म छिद्रों से पत्तियों में प्रवेश करती है।" } },
      { title: { en: "Sugar is built", hi: "शर्करा बनती है" }, description: { en: "The plant uses captured energy to build sugars from carbon dioxide; sugars help supply energy and build plant tissues.", hi: "पौधा संचित ऊर्जा से कार्बन डाइऑक्साइड का उपयोग करके शर्करा बनाता है; यह शर्करा ऊर्जा और नए ऊतक बनाने में मदद करती है।" } }
    ],
    scienceBehind: {
      en: "Photosynthesis is a multi-step process. In the light-dependent reactions, chlorophyll absorbs light, water is split, oxygen is released, and energy carriers are produced. In the light-independent reactions (Calvin cycle), carbon dioxide is fixed into sugars using that energy. The overall simplified equation is: carbon dioxide + water + light energy → sugar + oxygen. Plants use the sugars for energy and as building blocks, and they store some as starch.",
      hi: "प्रकाश-संश्लेषण एक बहु-चरणीय प्रक्रिया है। प्रकाश-निर्भर अभिक्रियाओं में क्लोरोफिल प्रकाश ग्रहण करता है, पानी टूटता है, ऑक्सीजन निकलती है और ऊर्जा वाहक बनते हैं। प्रकाश-स्वतंत्र अभिक्रियाओं (कैल्विन चक्र) में कार्बन डाइऑक्साइड को उस ऊर्जा से शर्करा में बदला जाता है। सरल समीकरण: कार्बन डाइऑक्साइड + पानी + प्रकाश ऊर्जा → शर्करा + ऑक्सीजन। पौधे शर्करा का उपयोग ऊर्जा और निर्माण के लिए करते हैं, और कुछ को स्टार्च के रूप में जमा करते हैं।"
    },
    realLifeUses: [
      { en: "Photosynthesis supports food chains, helps maintain atmospheric oxygen, and stores some of the Sun's energy in plant matter. Farmers consider light, water, nutrients, and carbon dioxide when growing crops.", hi: "प्रकाश-संश्लेषण खाद्य शृंखलाओं का आधार है, वायुमंडल में ऑक्सीजन बनाए रखने में मदद करता है और सूर्य की कुछ ऊर्जा को पौधों के पदार्थ में संचित करता है। फसल उगाते समय किसान प्रकाश, पानी, पोषक तत्वों और कार्बन डाइऑक्साइड का ध्यान रखते हैं।" }
    ],
    didYouKnow: {
      en: "The oxygen released by photosynthesis comes from water molecules, not from carbon dioxide.",
      hi: "प्रकाश-संश्लेषण में निकलने वाली ऑक्सीजन पानी के अणुओं से आती है, कार्बन डाइऑक्साइड से नहीं।"
    },
    experiment: {
      en: "Compare two similar potted plants only if an adult can care for them: keep both watered, but place one in suitable light and the other in a safe, dim location for a short observation period. Record visible changes without leaving a plant in darkness for a long time. Alternatively, inspect leaf veins with a hand lens. Never eat unknown leaves.",
      hi: "यदि कोई वयस्क देखभाल कर सके, तो दो समान गमले वाले पौधों की तुलना करें: दोनों को पानी दें, लेकिन एक को उचित प्रकाश में और दूसरे को थोड़े समय के लिए सुरक्षित कम-रोशनी वाली जगह पर रखें। दिखाई देने वाले बदलाव लिखें; पौधे को लंबे समय तक अँधेरे में न रखें। विकल्प के रूप में आवर्धक लेंस से पत्ती की नसें देखें। अज्ञात पत्तियाँ न खाएँ।"
    },
    relatedIds: ["breathing", "digestion", "rain-formation", "solar-panels"],
    visualType: "leaf-photosynthesis-diagram"
  }
];

// Export for use in browser or Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = scienceDiscoveries;
} else {
  window.scienceDiscoveries = scienceDiscoveries;
                }
