/**
 * Science in the Real World
 * 7 Domains • 28 Topics
 *
 * Structure:
 * Domain → Topics → Topic details
 *
 * Each topic contains:
 * - title
 * - collapsed hook
 * - what you see
 * - science behind it
 * - why it matters
 *
 * English + Hindi included.
 */

const T = (
  id,
  en,
  hi,
  hookEn,
  hookHi,
  seeEn,
  seeHi,
  sciEn,
  sciHi,
  whyEn,
  whyHi
) => ({
  id,
  title: {
    en,
    hi
  },
  hook: {
    en: hookEn,
    hi: hookHi
  },
  whatYouSee: {
    en: seeEn,
    hi: seeHi
  },
  scienceBehindIt: {
    en: sciEn,
    hi: sciHi
  },
  whyItMatters: {
    en: whyEn,
    hi: whyHi
  }
});

const D = (
  id,
  icon,
  en,
  hi,
  topics
) => ({
  id,
  icon,
  title: {
    en,
    hi
  },
  topics
});


const scienceRealWorld = [

  /* =====================================================
     1. SPACE & EXPLORATION
     ===================================================== */

  D(
    "space-exploration",
    "🪐",
    "Space & Exploration",
    "Space & Exploration",
    [

      T(
        "rocket-launch",
        "Rocket Launch",
        "रॉकेट लॉन्च",

        "Rocket Launch — How does something so heavy fly into space?",
        "रॉकेट लॉन्च — इतनी भारी चीज़ अंतरिक्ष में कैसे उड़ती है?",

        "A rocket pushes burning gas downward at enormous speed, and the rocket itself shoots upward.",
        "रॉकेट जलती हुई गैस को बहुत तेज़ गति से नीचे की ओर धकेलता है, और रॉकेट खुद ऊपर की ओर उड़ता है।",

        "This happens because of Newton's Third Law of Motion — for every action, there is an equal and opposite reaction. As the rocket pushes hot gas downward through its engines, the gas pushes the rocket upward with the same force, the same idea behind a boat moving forward when you push water backward with an oar.",
        "ऐसा न्यूटन के गति के तीसरे नियम के कारण होता है — हर क्रिया की बराबर और विपरीत प्रतिक्रिया होती है। जैसे ही रॉकेट अपने इंजन से गर्म गैस को नीचे धकेलता है, गैस रॉकेट को उसी बल से ऊपर धकेलती है — वही विचार जिसके कारण चप्पू से पानी को पीछे धकेलने पर नाव आगे बढ़ती है।",

        "This single law is what allows real rockets to escape Earth's gravity and carry satellites, astronauts, and missions into space.",
        "यही एक नियम असली रॉकेटों को पृथ्वी के गुरुत्वाकर्षण से बाहर निकलकर उपग्रहों, अंतरिक्ष यात्रियों, और अभियानों को अंतरिक्ष तक ले जाने में मदद करता है।"
      ),

      T(
        "satellite-orbit",
        "Satellite Orbit",
        "उपग्रह की कक्षा",

        "Satellite Orbit — Why doesn't a satellite just fall back down to Earth?",
        "उपग्रह की कक्षा — उपग्रह वापस पृथ्वी पर क्यों नहीं गिर जाता?",

        "A satellite keeps circling Earth at the same height for years, without any engine constantly pushing it.",
        "एक उपग्रह बिना किसी इंजन के लगातार धक्का दिए, सालों तक एक ही ऊँचाई पर पृथ्वी के चारों ओर चक्कर लगाता रहता है।",

        "Gravity is constantly pulling the satellite toward Earth, but the satellite is also moving forward so fast that it keeps missing the planet's surface as it falls — this balance between falling and forward motion is what creates a stable orbit.",
        "गुरुत्वाकर्षण लगातार उपग्रह को पृथ्वी की ओर खींचता रहता है, लेकिन उपग्रह इतनी तेज़ गति से आगे भी बढ़ रहा होता है कि वह गिरते हुए भी पृथ्वी की सतह से चूकता रहता है — गिरने और आगे बढ़ने के बीच का यही संतुलन एक स्थिर कक्षा बनाता है।",

        "This is exactly how weather satellites, communication satellites, and GPS systems stay in place above Earth, constantly sending back signals and images.",
        "इसी तरह मौसम उपग्रह, संचार उपग्रह, और जीपीएस प्रणाली पृथ्वी के ऊपर अपनी जगह बनाए रखते हैं, और लगातार संकेत व तस्वीरें भेजते रहते हैं।"
      ),

      T(
        "telescope",
        "Telescope",
        "टेलीस्कोप",

        "Telescope — How can a telescope make a distant star look closer?",
        "टेलीस्कोप — टेलीस्कोप किसी दूर के तारे को नज़दीक कैसे दिखा सकता है?",

        "Looking through a telescope makes faint, distant objects in the sky appear much brighter, bigger, and clearer than they look to the naked eye.",
        "टेलीस्कोप से देखने पर आसमान की धुंधली, दूर की वस्तुएँ नंगी आँखों से देखने की तुलना में कहीं अधिक चमकदार, बड़ी, और स्पष्ट दिखाई देती हैं।",

        "A telescope uses curved lenses or mirrors to collect much more light than our eyes can on their own, and then bends or reflects that light to form a focused, magnified image — the same principles of reflection and refraction of light that explain how mirrors and lenses work.",
        "टेलीस्कोप घुमावदार लेंसों या दर्पणों का उपयोग करके हमारी आँखों से कहीं अधिक प्रकाश इकट्ठा करता है, और फिर उस प्रकाश को मोड़कर या परावर्तित करके एक केंद्रित, बड़ी छवि बनाता है — प्रकाश के परावर्तन और अपवर्तन के वही सिद्धांत जो दर्पण और लेंस के काम करने के तरीके को समझाते हैं।",

        "This is how astronomers discover distant planets, study galaxies, and track objects in space that are far too faint to see without help.",
        "इसी के ज़रिए खगोलविद दूर के ग्रहों की खोज करते हैं, आकाशगंगाओं का अध्ययन करते हैं, और अंतरिक्ष में उन वस्तुओं को ट्रैक करते हैं जो बिना मदद के देखी ही नहीं जा सकतीं।"
      ),

      T(
        "astronaut-spacesuit",
        "Astronaut Spacesuit",
        "अंतरिक्ष यात्री की पोशाक",

        "Astronaut Spacesuit — Why do astronauts need a full suit just to step outside?",
        "अंतरिक्ष यात्री की पोशाक — अंतरिक्ष यात्रियों को बाहर कदम रखने के लिए पूरी पोशाक की ज़रूरत क्यों पड़ती है?",

        "Astronauts wear a thick, sealed suit with its own air supply whenever they go outside their spacecraft.",
        "जब भी अंतरिक्ष यात्री अपने यान से बाहर जाते हैं, वे अपनी खुद की हवा की आपूर्ति वाली एक मोटी, सील की हुई पोशाक पहनते हैं।",

        "Space has no air, so there is no oxygen to breathe and almost no pressure pushing against the body. The suit carries its own oxygen supply and keeps enough pressure around the body to let it function normally, while also protecting against extreme temperature changes.",
        "अंतरिक्ष में हवा नहीं होती, इसलिए साँस लेने के लिए ऑक्सीजन भी नहीं होती और शरीर पर दबाव डालने वाला वायुदाब भी लगभग नहीं होता। पोशाक अपनी खुद की ऑक्सीजन आपूर्ति साथ रखती है और शरीर के सामान्य रूप से काम करने के लिए पर्याप्त दबाव बनाए रखती है, साथ ही अत्यधिक तापमान बदलावों से भी बचाती है।",

        "Without this understanding of air, pressure, and temperature, no human could survive even a few seconds outside a spacecraft.",
        "हवा, दबाव, और तापमान की इस समझ के बिना, कोई भी इंसान यान के बाहर कुछ सेकंड भी जीवित नहीं रह सकता।"
      )

    ]
  ),


  /* =====================================================
     2. MEDICAL TECHNOLOGY
     ===================================================== */

  D(
    "medical-technology",
    "🩺",
    "Medical Technology",
    "Medical Technology",
    [

      T(
        "thermometer",
        "Thermometer",
        "थर्मामीटर",

        "Thermometer — How does a thermometer know your exact body temperature?",
        "थर्मामीटर — थर्मामीटर तुम्हारे शरीर का सटीक तापमान कैसे जान लेता है?",

        "A thermometer placed under the tongue or on the skin quickly shows a precise number representing body temperature.",
        "जीभ के नीचे या त्वचा पर रखा गया थर्मामीटर जल्दी ही शरीर के तापमान को दर्शाने वाला एक सटीक अंक दिखा देता है।",

        "Most thermometers work because matter expands when heated. In a liquid thermometer, the liquid inside expands and rises up a thin tube as it absorbs heat from the body, and the height it reaches corresponds to a specific temperature. Digital thermometers use a sensor whose electrical properties change predictably with temperature.",
        "अधिकतर थर्मामीटर इस सिद्धांत पर काम करते हैं कि गर्म होने पर पदार्थ फैलता है। एक तरल थर्मामीटर में, शरीर से गर्मी सोखने पर अंदर का तरल फैलकर एक पतली नली में ऊपर चढ़ता है, और वह जिस ऊँचाई तक पहुँचता है, वह एक विशेष तापमान दर्शाती है। डिजिटल थर्मामीटर एक ऐसे संवेदक का उपयोग करते हैं जिसके विद्युत गुण तापमान के साथ एक निश्चित तरीके से बदलते हैं।",

        "This simple principle of expansion lets doctors quickly detect fever, which is often the first warning sign that the body is fighting an infection.",
        "विस्तार का यह सरल सिद्धांत डॉक्टरों को बुखार का जल्दी पता लगाने में मदद करता है, जो अक्सर यह पहला संकेत होता है कि शरीर किसी संक्रमण से लड़ रहा है।"
      ),

      T(
        "stethoscope",
        "Stethoscope",
        "स्टेथोस्कोप",

        "Stethoscope — How does a simple tube let a doctor hear your heartbeat so clearly?",
        "स्टेथोस्कोप — एक साधारण नली डॉक्टर को दिल की धड़कन इतनी साफ़ कैसे सुनने देती है?",

        "A doctor places a small disc on your chest, and through two tubes connected to their ears, they can clearly hear your heartbeat and breathing.",
        "डॉक्टर तुम्हारी छाती पर एक छोटी डिस्क रखते हैं, और अपने कानों से जुड़ी दो नलियों के माध्यम से, वे तुम्हारे दिल की धड़कन और साँस को साफ़ सुन पाते हैं।",

        "Sound travels as vibrations. The disc on the chest picks up the faint vibrations created inside the body, and the sealed tubes carry these vibrations directly to the ears without letting them spread out and weaken, the same way sound travels through any medium as a wave of vibration.",
        "ध्वनि कंपन के रूप में यात्रा करती है। छाती पर रखी डिस्क शरीर के अंदर बनने वाले हल्के कंपनों को पकड़ लेती है, और सील की हुई नलियाँ इन कंपनों को फैलने और कमज़ोर होने दिए बिना सीधे कानों तक पहुँचाती हैं — ठीक उसी तरह जैसे ध्वनि किसी भी माध्यम में कंपन की तरंग के रूप में यात्रा करती है।",

        "This lets doctors detect irregular heartbeats, breathing problems, and other internal issues just by listening, without needing any machine.",
        "इससे डॉक्टर बिना किसी मशीन के, केवल सुनकर ही अनियमित धड़कन, साँस की समस्याएँ, और अन्य आंतरिक समस्याओं का पता लगा पाते हैं।"
      ),

      T(
        "mri-machine",
        "MRI Machine",
        "एमआरआई मशीन",

        "MRI Machine — How can a machine see inside your body without cutting it open?",
        "एमआरआई मशीन — एक मशीन बिना चीरा लगाए तुम्हारे शरीर के अंदर कैसे देख सकती है?",

        "A patient lies inside a large tunnel-shaped machine, and within minutes, detailed images of the inside of their body appear on a screen.",
        "एक मरीज़ एक बड़ी सुरंग जैसी मशीन के अंदर लेटता है, और कुछ ही मिनटों में उसके शरीर के अंदर की विस्तृत तस्वीरें एक स्क्रीन पर दिखाई देने लगती हैं।",

        "This machine creates a very strong magnetic field around the body. This field affects tiny particles inside the body's cells in a predictable way, and sensors detect their response to build a detailed picture — a direct, large-scale application of the magnetic effects that a current-carrying coil produces around itself.",
        "यह मशीन शरीर के चारों ओर एक बहुत शक्तिशाली चुंबकीय क्षेत्र बनाती है। यह क्षेत्र शरीर की कोशिकाओं के अंदर मौजूद बेहद छोटे कणों को एक निश्चित तरीके से प्रभावित करता है, और संवेदक उनकी प्रतिक्रिया का पता लगाकर एक विस्तृत चित्र बनाते हैं — यह उसी चुंबकीय प्रभाव का एक बड़ा, व्यावहारिक उपयोग है जो धारावाही तार के चारों ओर उत्पन्न होता है।",

        "This allows doctors to study organs, muscles, and injuries in detail without any surgery, making diagnosis safer and far less painful.",
        "इससे डॉक्टर बिना किसी सर्जरी के अंगों, मांसपेशियों, और चोटों का विस्तार से अध्ययन कर पाते हैं, जिससे निदान सुरक्षित और बहुत कम दर्दनाक हो जाता है।"
      ),

      T(
        "vaccines",
        "Vaccines",
        "टीके",

        "Vaccines — How does an injection today protect you from a disease years later?",
        "टीके — आज लगा एक टीका सालों बाद भी तुम्हें किसी बीमारी से कैसे बचाता है?",

        "A child receives a vaccine injection, and years later, even when exposed to that same disease, they usually do not fall seriously ill.",
        "एक बच्चे को टीके का इंजेक्शन दिया जाता है, और सालों बाद, उसी बीमारी के संपर्क में आने पर भी, वह आमतौर पर गंभीर रूप से बीमार नहीं पड़ता।",

        "A vaccine contains a weakened or inactive form of a disease-causing germ, just enough for the body's immune system to recognize it as a threat and learn to fight it, without actually causing the disease. The immune system then remembers this germ, so it can respond much faster if the real infection ever appears.",
        "एक टीके में किसी बीमारी फैलाने वाले कीटाणु का कमज़ोर या निष्क्रिय रूप होता है, जो बीमारी पैदा किए बिना शरीर की प्रतिरक्षा प्रणाली को इसे एक खतरे के रूप में पहचानने और उससे लड़ना सीखने के लिए पर्याप्त होता है। इसके बाद प्रतिरक्षा प्रणाली इस कीटाणु को याद रखती है, ताकि असली संक्रमण होने पर वह कहीं अधिक तेज़ी से प्रतिक्रिया दे सके।",

        "This is exactly how vaccines have controlled or wiped out diseases that once killed millions of people every year.",
        "इसी तरह टीकों ने उन बीमारियों को नियंत्रित किया है या पूरी तरह खत्म कर दिया है जो कभी हर साल लाखों लोगों की जान लेती थीं।"
      )

    ]
  ),


  /* =====================================================
     3. RENEWABLE ENERGY
     ===================================================== */

  D(
    "renewable-energy",
    "☀️",
    "Renewable Energy",
    "Renewable Energy",
    [

      T(
        "solar-panel",
        "Solar Panel",
        "सोलर पैनल",

        "Solar Panel — How does sunlight turn into electricity you can actually use?",
        "सोलर पैनल — सूरज की रौशनी असल में इस्तेमाल होने वाली बिजली में कैसे बदलती है?",

        "A flat panel placed under open sunlight is able to power lights, fans, or charge a battery, with no wires connected to a power plant.",
        "खुली धूप में रखा एक सपाट पैनल, बिना किसी पावर प्लांट से तार जुड़े, लाइटों, पंखों को चला सकता है या बैटरी चार्ज कर सकता है।",

        "A solar panel is made of special materials that release electrons when sunlight falls on them. This movement of electrons is what electric current actually is, so as more light keeps hitting the panel, a steady flow of electricity keeps being produced.",
        "सोलर पैनल ऐसे विशेष पदार्थों से बना होता है जो सूर्य की रौशनी पड़ने पर इलेक्ट्रॉन छोड़ते हैं। इलेक्ट्रॉनों की यही गति असल में विद्युत धारा होती है, इसलिए जितनी अधिक रौशनी पैनल पर पड़ती रहती है, उतनी ही लगातार बिजली बनती रहती है।",

        "This lets homes, streetlights, and even satellites generate their own electricity directly from sunlight, without burning any fuel.",
        "इससे घर, स्ट्रीटलाइट, और यहाँ तक कि उपग्रह भी बिना किसी ईंधन को जलाए, सीधे सूर्य की रौशनी से अपनी खुद की बिजली बना पाते हैं।"
      ),

      T(
        "wind-turbine",
        "Wind Turbine",
        "पवन टर्बाइन",

        "Wind Turbine — How does moving air turn into electricity?",
        "पवन टर्बाइन — बहती हुई हवा बिजली में कैसे बदल जाती है?",

        "Giant blades on a tall tower keep spinning whenever wind blows past them, and this spinning somehow lights up homes far away.",
        "एक ऊँचे टावर पर लगे विशाल ब्लेड हवा चलने पर लगातार घूमते रहते हैं, और यह घूमना किसी तरह दूर के घरों को रोशन कर देता है।",

        "Moving wind pushes against the blades, making them spin. This spinning motion turns a generator connected inside the turbine, and the generator converts this motion into electrical energy — a real-world example of one form of energy being converted into another.",
        "बहती हुई हवा ब्लेडों पर दबाव डालती है, जिससे वे घूमने लगते हैं। यह घूर्णन गति टर्बाइन के अंदर जुड़े एक जनरेटर को घुमाती है, और जनरेटर इस गति को विद्युत ऊर्जा में बदल देता है — यह ऊर्जा के एक रूप को दूसरे रूप में बदलने का एक वास्तविक उदाहरण है।",

        "This allows entire regions to generate clean electricity using nothing but the natural movement of air, with no pollution released.",
        "इससे पूरे क्षेत्र बिना किसी प्रदूषण के, केवल हवा की प्राकृतिक गति का उपयोग करके स्वच्छ बिजली बना पाते हैं।"
      ),

      T(
        "hydroelectric-dam",
        "Hydroelectric Dam",
        "जल-विद्युत बांध",

        "Hydroelectric Dam — How does falling water generate electricity for an entire city?",
        "जल-विद्युत बांध — गिरता हुआ पानी पूरे शहर के लिए बिजली कैसे पैदा कर देता है?",

        "Water stored behind a huge dam is released, and as it rushes down, it somehow produces enough electricity to power an entire city.",
        "एक विशाल बांध के पीछे रुका हुआ पानी छोड़ा जाता है, और जैसे ही वह तेज़ी से नीचे गिरता है, यह किसी तरह पूरे शहर को बिजली देने लायक ऊर्जा पैदा कर देता है।",

        "Water held at a height has stored energy simply because of its position. When released, this stored energy turns into the energy of motion as the water rushes downward, and this fast-moving water spins large turbines connected to generators, converting the motion into electricity.",
        "ऊँचाई पर रुका हुआ पानी अपनी स्थिति के कारण ही एक संचित ऊर्जा रखता है। छोड़े जाने पर, यह संचित ऊर्जा पानी के तेज़ी से नीचे गिरने पर गति की ऊर्जा में बदल जाती है, और यह तेज़ी से बहता पानी जनरेटर से जुड़े बड़े टर्बाइनों को घुमाता है, जिससे गति बिजली में बदल जाती है।",

        "This is one of the largest sources of renewable electricity in the world, powering millions of homes using nothing but flowing water.",
        "यह दुनिया में नवीकरणीय बिजली के सबसे बड़े स्रोतों में से एक है, जो केवल बहते पानी का उपयोग करके लाखों घरों को बिजली देता है।"
      ),

      T(
        "biogas-plant",
        "Biogas Plant",
        "बायोगैस संयंत्र",

        "Biogas Plant — How does waste from a farm turn into fuel for cooking?",
        "बायोगैस संयंत्र — खेत का कचरा खाना पकाने के ईंधन में कैसे बदल जाता है?",

        "Cow dung and kitchen waste are collected in a sealed tank, and after some time, a flammable gas comes out that can be used for cooking or lighting.",
        "गोबर और रसोई के कचरे को एक सील की हुई टंकी में इकट्ठा किया जाता है, और कुछ समय बाद, एक ज्वलनशील गैस निकलती है जिसका उपयोग खाना पकाने या रोशनी के लिए किया जा सकता है।",

        "Inside the sealed tank, tiny microorganisms break down the waste material in the absence of air. As they digest this organic matter, they release a mixture of gases, mainly methane, which can be burned just like any other fuel.",
        "सील की हुई टंकी के अंदर, बेहद छोटे सूक्ष्मजीव हवा की अनुपस्थिति में कचरे को तोड़ते हैं। जैसे ही वे इस कार्बनिक पदार्थ को पचाते हैं, वे गैसों का एक मिश्रण छोड़ते हैं, जिसमें मुख्य रूप से मीथेन होती है, जिसे किसी भी अन्य ईंधन की तरह जलाया जा सकता है।",

        "This turns waste that would otherwise pollute the environment into a clean, renewable fuel that many rural households rely on every day.",
        "इससे वह कचरा जो अन्यथा पर्यावरण को प्रदूषित करता, एक स्वच्छ, नवीकरणीय ईंधन में बदल जाता है, जिस पर कई ग्रामीण घर रोज़ाना निर्भर रहते हैं।"
      )

    ]
  ),


  /* =====================================================
     4. TRANSPORTATION
     ===================================================== */

  D(
    "transportation",
    "🚆",
    "Transportation",
    "Transportation",
    [

      T(
        "car-engine",
        "Car Engine",
        "कार का इंजन",

        "Car Engine — How does fuel inside an engine make a heavy car move?",
        "कार का इंजन — इंजन के अंदर ईंधन एक भारी कार को कैसे चला देता है?",

        "Fuel is pumped into a car's engine, and within moments, the car is able to move with enough force to carry several passengers.",
        "ईंधन को कार के इंजन में भेजा जाता है, और कुछ ही पलों में, कार इतनी ताकत के साथ चलने लगती है कि कई यात्रियों को ले जा सके।",

        "Inside the engine, fuel is mixed with air and ignited, causing a rapid chemical reaction called combustion. This reaction releases a large amount of energy very quickly, and the expanding gases push pistons that ultimately turn the car's wheels.",
        "इंजन के अंदर, ईंधन को हवा के साथ मिलाकर जलाया जाता है, जिससे दहन नामक एक तेज़ रासायनिक प्रतिक्रिया होती है। यह प्रतिक्रिया बहुत तेज़ी से बड़ी मात्रा में ऊर्जा छोड़ती है, और फैलती हुई गैसें पिस्टनों को धकेलती हैं, जो अंततः कार के पहियों को घुमाते हैं।",

        "This chemical reaction, happening thousands of times every minute inside the engine, is what powers the vast majority of vehicles on the road today.",
        "यह रासायनिक प्रतिक्रिया, जो इंजन के अंदर हर मिनट हज़ारों बार होती है, आज सड़क पर चलने वाले अधिकतर वाहनों को शक्ति देती है।"
      ),

      T(
        "electric-vehicle-motor",
        "Electric Vehicle Motor",
        "इलेक्ट्रिक वाहन की मोटर",

        "Electric Vehicle Motor — How does an electric car move without any fuel burning inside it?",
        "इलेक्ट्रिक वाहन की मोटर — बिना किसी ईंधन के जले, एक इलेक्ट्रिक कार कैसे चलती है?",

        "An electric car moves smoothly and silently, powered only by a battery, with no fuel tank or exhaust pipe at all.",
        "एक इलेक्ट्रिक कार बिना किसी ईंधन टैंक या धुआँ निकलने वाली नली के, केवल एक बैटरी से सहजता और शांति से चलती है।",

        "Inside the motor, electric current from the battery flows through coils of wire placed near magnets. This current creates its own magnetic field, and the interaction between these magnetic fields produces a force that makes the motor's shaft spin, which in turn drives the wheels.",
        "मोटर के अंदर, बैटरी से आने वाली विद्युत धारा चुंबकों के पास रखे तार के कुंडलों से होकर बहती है। यह धारा अपना खुद का चुंबकीय क्षेत्र बनाती है, और इन चुंबकीय क्षेत्रों के बीच की पारस्परिक क्रिया एक बल उत्पन्न करती है जिससे मोटर की धुरी घूमने लगती है, जो आगे पहियों को घुमाती है।",

        "This same magnetic principle, used without burning any fuel, is why electric vehicles produce no exhaust and run far more quietly than traditional cars.",
        "यही चुंबकीय सिद्धांत, बिना किसी ईंधन को जलाए इस्तेमाल होने के कारण, यही वजह है कि इलेक्ट्रिक वाहन कोई धुआँ नहीं छोड़ते और पारंपरिक कारों की तुलना में कहीं अधिक शांति से चलते हैं।"
      ),

      T(
        "bicycle-brakes",
        "Bicycle Brakes",
        "साइकिल के ब्रेक",

        "Bicycle Brakes — How does squeezing a lever bring a fast-moving bicycle to a stop?",
        "साइकिल के ब्रेक — लीवर दबाने से तेज़ चलती साइकिल कैसे रुक जाती है?",

        "Squeezing the brake lever presses rubber pads against the wheel, and a fast-moving bicycle quickly slows down and stops.",
        "ब्रेक लीवर दबाने पर रबर के पैड पहिये पर दबते हैं, और तेज़ चलती साइकिल जल्दी ही धीमी होकर रुक जाती है।",

        "When the brake pads press against the spinning wheel, they create friction, a force that opposes motion between two surfaces in contact. This friction converts the bicycle's motion energy into heat, which is why brake pads can feel warm after being used hard.",
        "जब ब्रेक पैड घूमते हुए पहिये पर दबते हैं, तो वे घर्षण उत्पन्न करते हैं, जो संपर्क में आई दो सतहों के बीच गति का विरोध करने वाला एक बल है। यह घर्षण साइकिल की गति की ऊर्जा को गर्मी में बदल देता है, इसी कारण ज़ोर से इस्तेमाल करने के बाद ब्रेक पैड गर्म महसूस हो सकते हैं।",

        "This same friction-based braking principle, scaled up with stronger materials, is also what safely stops cars, trains, and heavy vehicles.",
        "घर्षण पर आधारित यही सिद्धांत, मज़बूत पदार्थों के साथ बड़े स्तर पर इस्तेमाल होकर, कारों, ट्रेनों, और भारी वाहनों को भी सुरक्षित रूप से रोकता है।"
      ),

      T(
        "train-s-electric-system",
        "Train's Electric System",
        "ट्रेन की विद्युत प्रणाली",

        "Train's Electric System — How does a train run continuously for hours without stopping to refuel?",
        "ट्रेन की विद्युत प्रणाली — एक ट्रेन बिना रुके, घंटों लगातार कैसे चलती रहती है?",

        "An electric train draws power from overhead wires or a third rail and keeps running for long distances, without carrying its own fuel tank.",
        "एक इलेक्ट्रिक ट्रेन ऊपर लगे तारों या एक तीसरी पटरी से बिजली लेती है, और बिना अपना ईंधन टैंक साथ रखे, लंबी दूरी तक चलती रहती है।",

        "Electric current flows continuously from the power lines into the train's motors. Inside these motors, this flowing current interacts with magnetic fields to generate the force that turns the train's wheels, a direct, large-scale use of how electric current can be converted into motion.",
        "बिजली की लाइनों से विद्युत धारा लगातार ट्रेन की मोटरों में बहती रहती है। इन मोटरों के अंदर, यह बहती हुई धारा चुंबकीय क्षेत्रों के साथ मिलकर वह बल उत्पन्न करती है जो ट्रेन के पहियों को घुमाता है — यह इस बात का एक प्रत्यक्ष, बड़े स्तर का उपयोग है कि विद्युत धारा को गति में कैसे बदला जा सकता है।",

        "This is why electric trains can run continuously and cleanly over very long distances, as long as the power supply stays connected.",
        "इसी कारण इलेक्ट्रिक ट्रेनें, जब तक बिजली आपूर्ति जुड़ी रहती है, तब तक बहुत लंबी दूरी तक लगातार और स्वच्छ तरीके से चल सकती हैं।"
      )

    ]
  ),


  /* =====================================================
     5. COMMUNICATION
     ===================================================== */

  D(
    "communication",
    "📡",
    "Communication",
    "Communication",
    [

      T(
        "optical-fiber-cable",
        "Optical Fiber Cable",
        "ऑप्टिकल फाइबर केबल",

        "Optical Fiber Cable — How does light carry the internet across an entire country?",
        "ऑप्टिकल फाइबर केबल — प्रकाश पूरे देश में इंटरनेट कैसे पहुँचा देता है?",

        "A thin glass cable buried underground or under the ocean carries massive amounts of internet data between cities and even countries.",
        "ज़मीन के नीचे या समुद्र के नीचे दबी एक पतली काँच की केबल, शहरों और यहाँ तक कि देशों के बीच इंटरनेट का बहुत बड़ा डेटा पहुँचाती है।",

        "Data is converted into pulses of light that travel down the thin glass fiber. Whenever this light hits the inner wall of the fiber at a sharp enough angle, it reflects completely back inside instead of escaping, a phenomenon called total internal reflection, which keeps the light bouncing forward along the entire length of the cable.",
        "डेटा को प्रकाश की तरंगों में बदल दिया जाता है जो पतली काँच की तंतु के अंदर यात्रा करती हैं। जब भी यह प्रकाश तंतु की भीतरी दीवार से एक पर्याप्त तीव्र कोण पर टकराता है, तो वह बाहर निकलने के बजाय पूरी तरह से अंदर ही परावर्तित हो जाता है, इस घटना को पूर्ण आंतरिक परावर्तन कहा जाता है, जो प्रकाश को केबल की पूरी लंबाई तक आगे बढ़ते रहने देती है।",

        "This is what allows internet signals to travel thousands of kilometers at the speed of light, with almost no loss in quality.",
        "इसी के कारण इंटरनेट संकेत लगभग बिना किसी गुणवत्ता हानि के, प्रकाश की गति से हज़ारों किलोमीटर तक यात्रा कर पाते हैं।"
      ),

      T(
        "loudspeaker",
        "Loudspeaker",
        "लाउडस्पीकर",

        "Loudspeaker — How does a small device turn electricity into sound you can hear?",
        "लाउडस्पीकर — एक छोटा उपकरण बिजली को सुनाई देने वाली आवाज़ में कैसे बदल देता है?",

        "A speaker connected to a phone or music system produces loud, clear sound the moment electrical signals are sent to it.",
        "फोन या म्यूज़िक सिस्टम से जुड़ा एक स्पीकर, उसे विद्युत संकेत भेजते ही तेज़, स्पष्ट आवाज़ पैदा कर देता है।",

        "Inside the speaker, the incoming electric current flows through a coil placed near a magnet. As the current changes, the magnetic interaction pushes and pulls this coil back and forth, making it vibrate rapidly. These vibrations push the surrounding air, creating the sound waves that reach your ears.",
        "स्पीकर के अंदर, आने वाली विद्युत धारा एक चुंबक के पास रखे कुंडल से होकर बहती है। जैसे-जैसे धारा बदलती है, चुंबकीय पारस्परिक क्रिया इस कुंडल को आगे-पीछे धकेलती और खींचती है, जिससे वह तेज़ी से कंपन करने लगता है। ये कंपन आस-पास की हवा को धकेलते हैं, जिससे वे ध्वनि तरंगें बनती हैं जो तुम्हारे कानों तक पहुँचती हैं।",

        "This same magnetic-to-sound conversion happens inside every phone speaker, earphone, and loudspeaker system used for music, calls, and announcements.",
        "चुंबकत्व से ध्वनि में बदलने की यही प्रक्रिया हर फोन स्पीकर, ईयरफोन, और संगीत, कॉल, व घोषणाओं के लिए उपयोग होने वाले लाउडस्पीकर सिस्टम के अंदर होती है।"
      ),

      T(
        "satellite-dish",
        "Satellite Dish",
        "सैटेलाइट डिश",

        "Satellite Dish — How does a curved metal dish pull in a signal from space?",
        "सैटेलाइट डिश — एक घुमावदार धातु की डिश अंतरिक्ष से आने वाले संकेत को कैसे पकड़ लेती है?",

        "A curved dish, often sitting quietly on a rooftop, is somehow able to pick up a weak signal sent from a satellite thousands of kilometers away.",
        "अक्सर छत पर चुपचाप रखी एक घुमावदार डिश, किसी तरह हज़ारों किलोमीटर दूर एक उपग्रह से भेजे गए कमज़ोर संकेत को पकड़ लेती है।",

        "The dish has a special curved shape that collects incoming signals spread over its entire surface and reflects all of them toward a single focus point, where a receiver is placed. This is the same principle a curved mirror uses to focus scattered light rays onto one point.",
        "डिश का एक विशेष घुमावदार आकार होता है जो उसकी पूरी सतह पर फैले आने वाले संकेतों को इकट्ठा करता है और उन सभी को एक ही केंद्र बिंदु की ओर परावर्तित कर देता है, जहाँ एक रिसीवर रखा होता है। यह वही सिद्धांत है जिसका उपयोग एक घुमावदार दर्पण बिखरी हुई प्रकाश किरणों को एक बिंदु पर केंद्रित करने के लिए करता है।",

        "This focusing principle is what makes it possible to pick up extremely weak signals from space and turn them into clear television or internet connections.",
        "केंद्रित करने का यही सिद्धांत अंतरिक्ष से आने वाले बेहद कमज़ोर संकेतों को पकड़कर उन्हें स्पष्ट टेलीविज़न या इंटरनेट कनेक्शन में बदलना संभव बनाता है।"
      ),

      T(
        "microphone",
        "Microphone",
        "माइक्रोफ़ोन",

        "Microphone — How does speaking into a tiny device turn your voice into something a speaker can play?",
        "माइक्रोफ़ोन — एक छोटे से उपकरण में बोलना तुम्हारी आवाज़ को ऐसी चीज़ में कैसे बदल देता है जिसे स्पीकर बजा सके?",

        "Someone speaks into a microphone, and their voice can instantly be heard through a speaker far away, or recorded and played back later.",
        "कोई व्यक्ति माइक्रोफ़ोन में बोलता है, और उसकी आवाज़ तुरंत दूर किसी स्पीकर से सुनी जा सकती है, या बाद में सुनने के लिए रिकॉर्ड की जा सकती है।",

        "Your voice travels as vibrations in the air. Inside the microphone, a thin membrane vibrates in response to these sound waves, and this vibration is converted into a matching electrical signal, essentially the reverse of what happens inside a speaker.",
        "तुम्हारी आवाज़ हवा में कंपन के रूप में यात्रा करती है। माइक्रोफ़ोन के अंदर, एक पतली झिल्ली इन ध्वनि तरंगों की प्रतिक्रिया में कंपन करती है, और यह कंपन एक मिलती-जुलती विद्युत संकेत में बदल जाता है — यह मूल रूप से वही प्रक्रिया है जो स्पीकर के अंदर होती है, बस उल्टी दिशा में।",

        "This conversion of sound into an electrical signal is the starting point for every phone call, video call, and voice recording.",
        "ध्वनि को विद्युत संकेत में बदलने की यही प्रक्रिया हर फोन कॉल, वीडियो कॉल, और आवाज़ की रिकॉर्डिंग की शुरुआत होती है।"
      )

    ]
  ),


  /* =====================================================
     6. AI & ROBOTICS
     ===================================================== */

  D(
    "ai-robotics",
    "🤖",
    "AI & Robotics",
    "AI & Robotics",
    [

      T(
        "robotic-arm-motor",
        "Robotic Arm Motor",
        "रोबोटिक भुजा की मोटर",

        "Robotic Arm Motor — How does a robotic arm know exactly how to move and grip?",
        "रोबोटिक भुजा की मोटर — एक रोबोटिक भुजा को यह कैसे पता चलता है कि उसे कैसे हिलना और पकड़ना है?",

        "A robotic arm in a factory bends, rotates, and grips objects with precise, controlled movements, over and over again.",
        "किसी फैक्ट्री में एक रोबोटिक भुजा बार-बार सटीक, नियंत्रित गतियों के साथ मुड़ती है, घूमती है, और वस्तुओं को पकड़ती है।",

        "Each joint of the arm is driven by a small motor, where electric current flowing through a coil near magnets creates a force that produces precise rotation. A control system sends exact amounts of current to each motor, allowing every joint to move to an exact position.",
        "भुजा के हर जोड़ को एक छोटी मोटर चलाती है, जहाँ चुंबकों के पास रखे कुंडल से बहती विद्युत धारा एक बल उत्पन्न करती है जिससे सटीक घूर्णन होता है। एक नियंत्रण प्रणाली हर मोटर को ठीक उतनी ही मात्रा में धारा भेजती है, जिससे हर जोड़ एक सटीक स्थिति तक पहुँच पाता है।",

        "This precise control of motion is what allows robotic arms to assemble cars, handle delicate components, and work tirelessly on factory lines.",
        "गति का यही सटीक नियंत्रण रोबोटिक भुजाओं को कारें जोड़ने, नाज़ुक पुर्ज़ों को संभालने, और फैक्ट्री की लाइनों पर लगातार काम करने की क्षमता देता है।"
      ),

      T(
        "light-sensor",
        "Light Sensor",
        "प्रकाश संवेदक",

        "Light Sensor — How does a robot know whether it's bright or dark around it?",
        "प्रकाश संवेदक — एक रोबोट को यह कैसे पता चलता है कि उसके आस-पास उजाला है या अंधेरा?",

        "A small robot automatically turns its lights on in the dark, or slows down when it detects an obstacle, without anyone telling it to.",
        "एक छोटा रोबोट बिना किसी के बताए, अंधेरे में अपनी-आप लाइट चालू कर देता है, या किसी रुकावट का पता चलने पर धीमा हो जाता है।",

        "A light sensor contains a material whose electrical resistance changes depending on how much light falls on it. In bright conditions, current flows more easily through the sensor, while in darkness, it flows less easily, and the robot's circuit uses this changing current to detect the light level.",
        "एक प्रकाश संवेदक में ऐसा पदार्थ होता है जिसका विद्युत प्रतिरोध इस बात पर निर्भर करता है कि उस पर कितना प्रकाश पड़ रहा है। तेज़ रौशनी में, धारा संवेदक से आसानी से बहती है, जबकि अंधेरे में, वह कम आसानी से बहती है, और रोबोट का परिपथ इसी बदलती हुई धारा का उपयोग करके प्रकाश के स्तर का पता लगाता है।",

        "This same principle lets robots, streetlights, and even phone screens automatically respond to the amount of light around them.",
        "यही सिद्धांत रोबोट, स्ट्रीटलाइट, और यहाँ तक कि फोन की स्क्रीन को भी अपने आस-पास की रौशनी की मात्रा के अनुसार अपने आप प्रतिक्रिया देने देता है।"
      ),

      T(
        "robot-circuit-battery",
        "Robot Circuit & Battery",
        "रोबोट का परिपथ और बैटरी",

        "Robot Circuit & Battery — How does a single battery power every part of a robot at once?",
        "रोबोट का परिपथ और बैटरी — एक अकेली बैटरी एक साथ रोबोट के हर हिस्से को बिजली कैसे देती है?",

        "A small battery, connected through a maze of wires and components, is able to power a robot's motors, sensors, and lights all at the same time.",
        "तारों और उपकरणों के एक जाल से जुड़ी एक छोटी बैटरी, एक साथ रोबोट की मोटरों, संवेदकों, और लाइटों को बिजली दे पाती है।",

        "The battery provides a fixed voltage that pushes electric current through the circuit. How much current flows through each component depends on its resistance, following a simple relationship between voltage, current, and resistance that governs how electricity flows through any circuit, letting engineers design exactly how much power each part receives.",
        "बैटरी एक निश्चित वोल्टेज देती है जो परिपथ में विद्युत धारा को धकेलता है। हर उपकरण से कितनी धारा बहती है, यह उसके प्रतिरोध पर निर्भर करता है, जो वोल्टेज, धारा, और प्रतिरोध के बीच के उस सरल संबंध का पालन करता है जो बताता है कि किसी भी परिपथ में बिजली कैसे बहती है, जिससे इंजीनियर यह तय कर पाते हैं कि हर हिस्से को कितनी बिजली मिलनी चाहिए।",

        "This basic relationship between voltage, current, and resistance is the foundation behind designing every electronic circuit, from a simple robot to a smartphone.",
        "वोल्टेज, धारा, और प्रतिरोध के बीच का यही बुनियादी संबंध, एक साधारण रोबोट से लेकर स्मार्टफोन तक, हर इलेक्ट्रॉनिक परिपथ को डिज़ाइन करने की नींव है।"
      ),

      T(
        "balance-motion-sensor",
        "Balance / Motion Sensor",
        "संतुलन / गति संवेदक",

        "Balance / Motion Sensor — How does a robot know if it's tilting or about to fall over?",
        "संतुलन / गति संवेदक — एक रोबोट को यह कैसे पता चलता है कि वह झुक रहा है या गिरने वाला है?",

        "A two-legged robot adjusts its posture instantly to stay upright, even when it's pushed or the ground beneath it is uneven.",
        "एक दो पैरों वाला रोबोट धक्का लगने पर या नीचे की ज़मीन असमान होने पर भी, तुरंत अपनी मुद्रा को समायोजित करके सीधा खड़ा रहता है।",

        "Motion sensors inside the robot detect changes in speed and direction, essentially measuring the forces acting on the robot's body at every instant. The robot's control system uses this information, based on the same laws that describe how force changes an object's motion, to send instant corrections to its motors and stay balanced.",
        "रोबोट के अंदर लगे गति संवेदक गति और दिशा में होने वाले बदलावों का पता लगाते हैं, जो असल में हर पल रोबोट के शरीर पर लगने वाले बलों को मापना ही है। रोबोट की नियंत्रण प्रणाली इस जानकारी का उपयोग करती है, उन्हीं नियमों के आधार पर जो बताते हैं कि बल किसी वस्तु की गति को कैसे बदलता है, ताकि वह अपनी मोटरों को तुरंत सुधार भेज सके और संतुलन बनाए रख सके।",

        "This constant sensing and correcting is exactly what allows walking robots, drones, and self-balancing vehicles to stay stable in real time.",
        "यही लगातार पता लगाने और सुधारने की प्रक्रिया चलने वाले रोबोट, ड्रोन, और स्वयं-संतुलन बनाने वाले वाहनों को वास्तविक समय में स्थिर बनाए रखती है।"
      )

    ]
  ),


  /* =====================================================
     7. BIOTECHNOLOGY
     ===================================================== */

  D(
    "biotechnology",
    "🧬",
    "Biotechnology",
    "Biotechnology",
    [

      T(
        "genetically-modified-crops",
        "Genetically Modified Crops",
        "आनुवंशिक रूप से सुधारी गई फसलें",

        "Genetically Modified Crops — How can scientists make a crop resist pests without spraying chemicals?",
        "आनुवंशिक रूप से सुधारी गई फसलें — वैज्ञानिक बिना रसायन छिड़के, किसी फसल को कीटों से बचने लायक कैसे बना सकते हैं?",

        "A farmer grows a crop that naturally survives pest attacks and gives a much higher yield than older varieties, without needing heavy pesticide use.",
        "एक किसान ऐसी फसल उगाता है जो बिना भारी कीटनाशकों के इस्तेमाल के, कीटों के हमलों से स्वाभाविक रूप से बच जाती है और पुरानी किस्मों की तुलना में कहीं अधिक उपज देती है।",

        "Every living thing's traits are controlled by information passed down through generations. Scientists can introduce a specific helpful trait, such as pest resistance, directly into a crop's genetic material, so that this useful trait appears reliably in every plant grown from those seeds.",
        "हर सजीव के गुण पीढ़ी-दर-पीढ़ी आगे बढ़ने वाली जानकारी से नियंत्रित होते हैं। वैज्ञानिक किसी विशेष उपयोगी गुण, जैसे कीट प्रतिरोधकता, को सीधे फसल की आनुवंशिक सामग्री में शामिल कर सकते हैं, ताकि यह उपयोगी गुण उन बीजों से उगाए गए हर पौधे में निश्चित रूप से दिखाई दे।",

        "This has helped increase food production and reduce crop losses in many parts of the world, supporting a much larger population than older farming methods alone.",
        "इससे दुनिया के कई हिस्सों में खाद्य उत्पादन बढ़ाने और फसल की हानि को कम करने में मदद मिली है, जिससे पुराने खेती के तरीकों की तुलना में कहीं अधिक बड़ी आबादी का पेट भरना संभव हुआ है।"
      ),

      T(
        "dna-fingerprinting",
        "DNA Fingerprinting",
        "डीएनए फिंगरप्रिंटिंग",

        "DNA Fingerprinting — How can a tiny sample of blood or hair prove exactly who someone is?",
        "डीएनए फिंगरप्रिंटिंग — खून या बाल का एक छोटा सा नमूना किसी के होने का सटीक सबूत कैसे दे सकता है?",

        "Investigators collect a small biological sample from a crime scene, and from it, they can identify a specific person with remarkable accuracy.",
        "जाँचकर्ता अपराध स्थल से एक छोटा सा जैविक नमूना इकट्ठा करते हैं, और उससे, वे अद्भुत सटीकता के साथ एक विशेष व्यक्ति की पहचान कर पाते हैं।",

        "Every person's genetic material has a unique pattern, except in identical twins, similar to how every person has a unique set of fingerprints. By comparing specific patterns in a sample to those of a known person, scientists can determine a match with extremely high confidence.",
        "हर व्यक्ति की आनुवंशिक सामग्री का एक अनोखा पैटर्न होता है, सिवाय समान जुड़वाँ बच्चों के, ठीक उसी तरह जैसे हर व्यक्ति के फिंगरप्रिंट का एक अनोखा सेट होता है। किसी नमूने के विशेष पैटर्न की तुलना किसी ज्ञात व्यक्ति से करके, वैज्ञानिक बेहद उच्च विश्वसनीयता के साथ मिलान तय कर सकते हैं।",

        "This technique is widely used to solve crimes, identify victims, and confirm biological relationships such as parentage.",
        "इस तकनीक का व्यापक रूप से अपराधों को सुलझाने, पीड़ितों की पहचान करने, और माता-पिता जैसे जैविक संबंधों की पुष्टि करने के लिए उपयोग किया जाता है।"
      ),

      T(
        "fermentation",
        "Fermentation",
        "किण्वन",

        "Fermentation — How does plain milk turn into curd just by sitting overnight?",
        "किण्वन — सादा दूध रातभर रखे रहने से दही में कैसे बदल जाता है?",

        "Milk left at room temperature with a small amount of starter curd thickens overnight into fresh curd, with a distinct tangy taste.",
        "थोड़े से दही के साथ कमरे के तापमान पर रखा दूध रातभर में गाढ़ा होकर ताज़े दही में बदल जाता है, जिसका स्वाद अलग और खट्टा होता है।",

        "Tiny microorganisms present in the starter curd multiply rapidly in the milk and convert its natural sugars into lactic acid through a chemical change. This acid is what causes the milk's proteins to thicken, giving curd its texture and tangy flavor.",
        "स्टार्टर दही में मौजूद बेहद छोटे सूक्ष्मजीव दूध में तेज़ी से बढ़ते हैं और एक रासायनिक परिवर्तन के ज़रिए उसकी प्राकृतिक शर्करा को लैक्टिक अम्ल में बदल देते हैं। यही अम्ल दूध के प्रोटीन को गाढ़ा करता है, जिससे दही को उसकी बनावट और खट्टा स्वाद मिलता है।",

        "This same microbial process, used at a larger scale, is also behind making bread rise, producing cheese, and even generating biogas fuel.",
        "यही सूक्ष्मजैविक प्रक्रिया, बड़े स्तर पर इस्तेमाल होकर, ब्रेड को फुलाने, चीज़ बनाने, और यहाँ तक कि बायोगैस ईंधन बनाने के पीछे भी होती है।"
      ),

      T(
        "antibiotic-production",
        "Antibiotic Production",
        "एंटीबायोटिक निर्माण",

        "Antibiotic Production — How does a medicine made from a mold end up saving lives?",
        "एंटीबायोटिक निर्माण — फफूंद से बनी एक दवा आखिर जान बचाने तक कैसे पहुँचती है?",

        "A person with a serious bacterial infection takes a course of medicine, and within days, their infection clears up completely.",
        "किसी गंभीर जीवाणु संक्रमण से पीड़ित व्यक्ति दवा का एक कोर्स लेता है, और कुछ ही दिनों में, उसका संक्रमण पूरी तरह ठीक हो जाता है।",

        "Certain microorganisms, such as specific molds and bacteria, naturally produce substances that kill or stop the growth of other disease-causing bacteria. Scientists grow these helpful microorganisms in large quantities and extract these substances to create antibiotic medicines.",
        "कुछ सूक्ष्मजीव, जैसे विशेष फफूंद और बैक्टीरिया, स्वाभाविक रूप से ऐसे पदार्थ बनाते हैं जो अन्य बीमारी फैलाने वाले बैक्टीरिया को मार देते हैं या उनकी वृद्धि को रोक देते हैं। वैज्ञानिक इन उपयोगी सूक्ष्मजीवों को बड़ी मात्रा में उगाते हैं और इन पदार्थों को निकालकर एंटीबायोटिक दवाइयाँ बनाते हैं।",

        "The discovery of antibiotics is considered one of the biggest breakthroughs in medicine, turning once-deadly bacterial infections into treatable conditions.",
        "एंटीबायोटिक की खोज को चिकित्सा की सबसे बड़ी उपलब्धियों में से एक माना जाता है, जिसने कभी जानलेवा रहे जीवाणु संक्रमणों को इलाज योग्य स्थिति में बदल दिया।"
      )

    ]
  )

];


/* =====================================================
   PUBLIC API
   ===================================================== */

window.ScienceRealWorld = {

  all() {
    return scienceRealWorld;
  },

  getDomain(id) {
    return scienceRealWorld.find(domain => domain.id === id);
  },

  getTopics(domainId) {
    const domain = this.getDomain(domainId);
    return domain ? domain.topics : [];
  },

  getTopic(domainId, topicId) {
    const domain = this.getDomain(domainId);
    return domain
      ? domain.topics.find(topic => topic.id === topicId)
      : undefined;
  },

  count() {
    return scienceRealWorld.length;
  },

  topicCount() {
    return scienceRealWorld.reduce(
      (total, domain) => total + domain.topics.length,
      0
    );
  }

};


/* Backward-compatible global */
window.scienceRealWorld = scienceRealWorld;
