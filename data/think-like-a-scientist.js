/*
  data/think-like-a-scientist.js

  THINK LIKE A SCIENTIST
  Format:
  Scene → Observation → Hypothesis → Experiment → Conclusion

  8 bilingual scientific-discovery stories.

  Answer indexes:
  A = 0
  B = 1
*/

const thinkLikeAScientist = [

  /* =========================================================
     STORY 1 — ISAAC NEWTON
  ========================================================= */

  {
    id: "newton-gravitation",

    scientist: {
      en: "Isaac Newton",
      hi: "आइज़ैक न्यूटन"
    },

    title: {
      en: "Gravitation",
      hi: "गुरुत्वाकर्षण"
    },

    scene: {
      en: "One evening in 1665, a young scientist was sitting in his garden, lost in thought about why planets stay in their orbits. Just then, an apple fell from a tree nearby.",
      hi: "1665 की एक शाम, एक युवा वैज्ञानिक अपने बगीचे में बैठा यह सोच रहा था कि ग्रह अपनी कक्षाओं में क्यों बने रहते हैं। तभी पास के एक पेड़ से एक सेब गिरा।"
    },

    observation: {
      en: {
        question: "What do you think he wondered at that moment?",
        options: [
          "There must be a force that only acts close to the ground, pulling nearby objects down",
          "The same force pulling the apple down might extend far into space, even reaching the Moon"
        ],
        answer: 1
      },

      hi: {
        question: "उस पल उसके मन में क्या विचार आया होगा, तुम्हें क्या लगता है?",
        options: [
          "कोई ऐसा बल होगा जो केवल ज़मीन के पास काम करता है और नज़दीकी वस्तुओं को नीचे खींचता है",
          "जो बल सेब को नीचे खींच रहा है, वही बल शायद अंतरिक्ष में बहुत दूर तक, चंद्रमा तक भी पहुँचता होगा"
        ],
        answer: 1
      }
    },

    hypothesis: {
      en: "He actually wondered option B. Most people at the time assumed gravity was a local, ground-level effect — but he began to suspect it might be universal, acting across huge distances.",

      hi: "उसने असल में विकल्प B के बारे में सोचा। उस समय अधिकतर लोग मानते थे कि गुरुत्वाकर्षण केवल ज़मीन के आस-पास काम करने वाला एक स्थानीय प्रभाव है — लेकिन उसे शक हुआ कि यह शायद सार्वभौमिक हो सकता है, जो बहुत बड़ी दूरियों तक भी काम करता हो।"
    },

    experiment: {
      en: {
        question: "To test this idea, what would you have compared?",
        options: [
          "How fast objects of different weights fall to the ground from the same height",
          "The pull needed to hold the apple near Earth with the pull keeping the Moon moving around Earth"
        ],
        answer: 1
      },

      hi: {
        question: "इस विचार को परखने के लिए, तुम क्या तुलना करते?",
        options: [
          "अलग-अलग वज़न की वस्तुएँ एक ही ऊँचाई से ज़मीन पर कितनी तेज़ी से गिरती हैं",
          "पृथ्वी के पास सेब को खींचने वाले बल की तुलना, चंद्रमा को पृथ्वी के चारों ओर घुमाए रखने वाले बल से"
        ],
        answer: 1
      }
    },

    conclusion: {
      en: "He compared option B. Through careful calculation, he showed that the same force pulling the apple down also keeps the Moon in its orbit around Earth. This became the Law of Universal Gravitation — the idea that every object in the universe pulls every other object toward itself.",

      hi: "उसने विकल्प B की तुलना की। सावधानीपूर्वक गणना करके उसने दिखाया कि जो बल सेब को नीचे खींचता है, वही बल चंद्रमा को भी उसकी कक्षा में बनाए रखता है। यही आगे चलकर सार्वभौमिक गुरुत्वाकर्षण का नियम बना — यह विचार कि ब्रह्मांड की हर वस्तु हर दूसरी वस्तु को अपनी ओर खींचती है।"
    }
  },


  /* =========================================================
     STORY 2 — J.J. THOMSON
  ========================================================= */

  {
    id: "thomson-electron",

    scientist: {
      en: "J.J. Thomson",
      hi: "जे.जे. थॉमसन"
    },

    title: {
      en: "Discovery of the Electron",
      hi: "इलेक्ट्रॉन की खोज"
    },

    scene: {
      en: "In 1897, a scientist was experimenting with a cathode ray tube, and he noticed that when an electric field was applied inside the tube, the rays coming from it bent in one direction.",

      hi: "1897 में, एक वैज्ञानिक कैथोड किरण नली के साथ प्रयोग कर रहा था, और उसने देखा कि जब नली के अंदर एक विद्युत क्षेत्र लगाया गया, तो नली से निकलने वाली किरणें एक दिशा में मुड़ गईं।"
    },

    observation: {
      en: {
        question: "What do you think he suspected these rays actually were?",
        options: [
          "A form of light, or electromagnetic waves, passing through the tube",
          "A stream of tiny charged particles being deflected by the electric field"
        ],
        answer: 1
      },

      hi: {
        question: "तुम्हें क्या लगता है, उसे शक हुआ कि ये किरणें असल में क्या थीं?",
        options: [
          "ये किरणें शायद प्रकाश जैसी विद्युतचुंबकीय तरंगों का ही एक रूप होंगी, जो नली से होकर गुज़र रही हैं",
          "ये किरणें शायद बहुत छोटे आवेशित कणों की धाराएँ होंगी, जो विद्युत क्षेत्र के कारण मुड़ रही हैं"
        ],
        answer: 1
      }
    },

    hypothesis: {
      en: "He actually suspected option B. He began to think these rays were made of small, negatively charged particles, smaller than an atom.",

      hi: "उसने असल में विकल्प B के बारे में सोचा — उसे लगा कि ये किरणें ऐसे छोटे ऋणात्मक आवेशित कणों से बनी हैं जो परमाणु से भी छोटे हैं।"
    },

    experiment: {
      en: {
        question: "To test this, what would you have measured?",
        options: [
          "How the brightness of the glow changed as the pressure inside the tube was altered",
          "How much the rays bent under both electric and magnetic fields, to calculate the charge-to-mass ratio of whatever was causing them"
        ],
        answer: 1
      },

      hi: {
        question: "इसे परखने के लिए, तुम क्या मापते?",
        options: [
          "यह जाँचना कि नली के अंदर के दबाव को बदलने पर चमक कैसे बदलती है",
          "यह मापना कि विद्युत और चुंबकीय दोनों क्षेत्रों के अंतर्गत किरणें कितनी मुड़ती हैं, ताकि उन कणों के आवेश और द्रव्यमान के अनुपात का पता लगाया जा सके"
        ],
        answer: 1
      }
    },

    conclusion: {
      en: "He measured option B, and found that the mass of these particles was far smaller than even the lightest known atom, hydrogen. This proved that atoms contain even smaller particles inside them — this discovery identified the electron, and showed for the first time that the atom is not indivisible.",

      hi: "उसने विकल्प B को मापा, और पाया कि इन कणों का द्रव्यमान सबसे हल्के ज्ञात परमाणु, हाइड्रोजन, से भी बहुत कम है। इससे यह साबित हुआ कि परमाणु के अंदर भी छोटे कण मौजूद होते हैं — इस खोज ने इलेक्ट्रॉन का पता लगाया और पहली बार यह दिखाया कि परमाणु अविभाज्य नहीं है।"
    }
  },


  /* =========================================================
     STORY 3 — ERNEST RUTHERFORD
  ========================================================= */

  {
    id: "rutherford-nucleus",

    scientist: {
      en: "Ernest Rutherford",
      hi: "अर्नेस्ट रदरफोर्ड"
    },

    title: {
      en: "Discovery of the Nucleus",
      hi: "नाभिक की खोज"
    },

    scene: {
      en: "In 1911, Rutherford's team was firing tiny positively charged particles at a very thin sheet of gold foil, expecting them to pass through almost undisturbed, based on the widely accepted model that positive charge was spread evenly throughout the atom.",

      hi: "1911 में, रदरफोर्ड की टीम बहुत पतली सोने की पन्नी पर छोटे धनात्मक आवेशित कण दाग रही थी, यह उम्मीद करते हुए कि वे लगभग बिना किसी रुकावट के पार निकल जाएँगे, क्योंकि उस समय मान्य मॉडल के अनुसार धनात्मक आवेश पूरे परमाणु में समान रूप से फैला हुआ माना जाता था।"
    },

    observation: {
      en: {
        question: "Most particles behaved exactly as expected and passed straight through. But what do you think happened to a small number of them, which left everyone stunned?",
        options: [
          "A small number bounced almost straight back, as if they had hit something solid and dense",
          "A small number simply stopped moving and stayed inside the foil"
        ],
        answer: 0
      },

      hi: {
        question: "अधिकतर कण उम्मीद के अनुसार सीधे पार निकल गए। लेकिन तुम्हें क्या लगता है, कुछ कणों के साथ क्या हुआ जिसने सबको चौंका दिया?",
        options: [
          "कुछ कण लगभग सीधे वापस उछल गए, जैसे वे किसी ठोस और घने पदार्थ से टकराए हों",
          "कुछ कण बस रुक गए और पन्नी के अंदर ही थम गए"
        ],
        answer: 0
      }
    },

    hypothesis: {
      en: "The actual result was option A — a small number of particles bounced almost straight back.",

      hi: "वास्तविक परिणाम विकल्प A था — कुछ कण लगभग सीधे वापस उछल गए।"
    },

    experiment: {
      en: {
        question: "What could explain a positively charged particle bouncing back like that?",
        options: [
          "The atom must contain a tiny, extremely dense, positively charged region at its center that repels the particle",
          "The gold foil must be much thicker in some places, causing particles to hit several atoms at once"
        ],
        answer: 0
      },

      hi: {
        question: "एक धनात्मक आवेशित कण के इस तरह वापस उछलने का क्या कारण हो सकता है?",
        options: [
          "परमाणु के केंद्र में एक बहुत छोटा, अत्यंत घना, धनात्मक आवेशित क्षेत्र होना चाहिए जो कण को पीछे धकेलता है",
          "सोने की पन्नी कुछ जगहों पर अधिक मोटी होगी, जिससे कण एक साथ कई परमाणुओं से टकरा गए होंगे"
        ],
        answer: 0
      }
    },

    conclusion: {
      en: "He reasoned option A. This led to the nuclear model of the atom — a small, dense, positively charged nucleus at the center, with electrons moving around it in mostly empty space, replacing the old model.",

      hi: "उसने विकल्प A के बारे में सोचा। इससे परमाणु का नाभिकीय मॉडल सामने आया — केंद्र में एक छोटा, घना, धनात्मक आवेशित नाभिक, जिसके चारों ओर इलेक्ट्रॉन ज़्यादातर खाली स्थान में घूमते हैं, जिसने पुराने मॉडल की जगह ले ली।"
    }
  },


  /* =========================================================
     STORY 4 — ROBERT HOOKE
  ========================================================= */

  {
    id: "hooke-cell",

    scientist: {
      en: "Robert Hooke",
      hi: "रॉबर्ट हुक"
    },

    title: {
      en: "Discovery of the Cell",
      hi: "कोशिका की खोज"
    },

    scene: {
      en: "In 1665, a scientist examined a thin slice of cork under a simple microscope he had built, curious about why cork felt so light and spongy.",

      hi: "1665 में, एक वैज्ञानिक ने अपने बनाए एक साधारण सूक्ष्मदर्शी के नीचे कॉर्क का एक पतला टुकड़ा रखकर देखा, यह जानने के लिए उत्सुक था कि कॉर्क इतना हल्का और स्पंजी क्यों महसूस होता है।"
    },

    observation: {
      en: {
        question: "What do you think he saw through the microscope?",
        options: [
          "A solid, smooth surface with no visible structure",
          "Tiny box-like compartments packed closely together, like a honeycomb"
        ],
        answer: 1
      },

      hi: {
        question: "सूक्ष्मदर्शी से उसे क्या दिखाई दिया होगा, तुम्हें क्या लगता है?",
        options: [
          "एक ठोस, चिकनी सतह जिसमें कोई संरचना दिखाई न दे",
          "एक-दूसरे से सटे हुए छोटे-छोटे खाने जैसी संरचनाएँ, मधुमक्खी के छत्ते जैसी"
        ],
        answer: 1
      }
    },

    hypothesis: {
      en: "He actually saw option B — tiny compartments he named \"cells\" because they reminded him of the small rooms monks lived in.",

      hi: "उसे असल में विकल्प B दिखाई दिया — छोटे-छोटे खाने जैसी संरचनाएँ, जिन्हें उसने \"कोशिका\" नाम दिया क्योंकि वे उसे मठ के भिक्षुओं के छोटे कमरों जैसी लगीं।"
    },

    experiment: {
      en: {
        question: "To check if this structure was unique to cork, what would you have done next?",
        options: [
          "Examine slices of other plant materials, like a thin piece of a leaf, under the same microscope",
          "Measure the weight of the cork sample before and after heating it"
        ],
        answer: 0
      },

      hi: {
        question: "यह जाँचने के लिए कि क्या यह संरचना केवल कॉर्क में ही है, तुम आगे क्या करते?",
        options: [
          "उसी सूक्ष्मदर्शी के नीचे अन्य पौधों की सामग्री, जैसे किसी पत्ते का पतला टुकड़ा, जाँचना",
          "कॉर्क के नमूने को गर्म करने से पहले और बाद में उसका वज़न मापना"
        ],
        answer: 0
      }
    },

    conclusion: {
      en: "He examined option A, and found similar box-like compartments in other plant tissues too, leading to the idea that living things are made of these small, repeating units — later called cells, the basic building blocks of all life.",

      hi: "उसने विकल्प A से जाँच की, और उसे अन्य पौधों के ऊतकों में भी ऐसी ही छोटे खाने जैसी संरचनाएँ मिलीं, जिससे यह विचार सामने आया कि सजीव इन्हीं छोटी, बार-बार दोहराई जाने वाली इकाइयों से बने होते हैं — जिन्हें बाद में कोशिका कहा गया, जो सभी जीवन की मूल इकाई हैं।"
    }
  },


  /* =========================================================
     STORY 5 — DMITRI MENDELEEV
  ========================================================= */

  {
    id: "mendeleev-periodic-table",

    scientist: {
      en: "Dmitri Mendeleev",
      hi: "दिमित्री मेंडलीफ"
    },

    title: {
      en: "The Periodic Table",
      hi: "आवर्त सारणी"
    },

    scene: {
      en: "In 1869, a chemist was trying to organize all the known elements in a way that made sense, since scientists at the time had discovered over 60 elements with no clear pattern connecting them.",

      hi: "1869 में, एक रसायनज्ञ सभी ज्ञात तत्वों को किसी सार्थक क्रम में व्यवस्थित करने की कोशिश कर रहा था, क्योंकि उस समय तक 60 से अधिक तत्वों की खोज हो चुकी थी, लेकिन उनके बीच कोई स्पष्ट संबंध नहीं दिखता था।"
    },

    observation: {
      en: {
        question: "He arranged elements by increasing atomic weight and noticed something interesting. What pattern do you think he found?",
        options: [
          "Elements with similar properties appeared at regular intervals, forming a repeating pattern",
          "All elements had completely random, unrelated properties, with no visible pattern at all"
        ],
        answer: 0
      },

      hi: {
        question: "उसने तत्वों को बढ़ते हुए परमाणु भार के क्रम में व्यवस्थित किया और कुछ दिलचस्प देखा। तुम्हें क्या लगता है, उसे क्या पैटर्न मिला?",
        options: [
          "समान गुणों वाले तत्व नियमित अंतराल पर बार-बार दिखाई दे रहे थे, जिससे एक दोहराने वाला पैटर्न बन रहा था",
          "सभी तत्वों के गुण पूरी तरह से यादृच्छिक और एक-दूसरे से असंबंधित थे, कोई पैटर्न दिखाई ही नहीं दिया"
        ],
        answer: 0
      }
    },

    hypothesis: {
      en: "He actually found option A — a repeating, periodic pattern of properties.",

      hi: "उसे असल में विकल्प A मिला — गुणों का एक दोहराने वाला, आवर्ती पैटर्न।"
    },

    experiment: {
      en: {
        question: "While building his table, he found gaps where no known element fit properly. What do you think he did about it?",
        options: [
          "Left the gaps empty and predicted that undiscovered elements would later be found to fill them",
          "Rearranged the entire table randomly until every space was filled with some known element"
        ],
        answer: 0
      },

      hi: {
        question: "सारणी बनाते समय, उसे कुछ जगहों पर कोई उपयुक्त ज्ञात तत्व नहीं मिला। तुम्हें क्या लगता है, उसने इसके बारे में क्या किया?",
        options: [
          "उन जगहों को खाली छोड़ दिया और भविष्यवाणी की कि आगे चलकर अज्ञात तत्व खोजे जाएँगे जो इन जगहों में फिट बैठेंगे",
          "पूरी सारणी को फिर से यादृच्छिक ढंग से व्यवस्थित किया जब तक हर जगह किसी ज्ञात तत्व से न भर गई"
        ],
        answer: 0
      }
    },

    conclusion: {
      en: "He chose option A. Several of his predicted elements, like gallium and germanium, were later discovered with almost exactly the properties he had predicted, confirming his arrangement. This became the modern Periodic Table, organizing elements by their repeating properties.",

      hi: "उसने विकल्प A चुना। बाद में गैलियम और जर्मेनियम जैसे कई तत्व खोजे गए, जिनके गुण लगभग वैसे ही निकले जैसी उसने भविष्यवाणी की थी, जिससे उसकी व्यवस्था सही साबित हुई। यही आगे चलकर आधुनिक आवर्त सारणी बनी, जो तत्वों को उनके दोहराने वाले गुणों के आधार पर व्यवस्थित करती है।"
    }
  },


  /* =========================================================
     STORY 6 — GREGOR MENDEL
  ========================================================= */

  {
    id: "mendel-heredity",

    scientist: {
      en: "Gregor Mendel",
      hi: "ग्रेगर मेंडल"
    },

    title: {
      en: "Laws of Heredity",
      hi: "आनुवंशिकता के नियम"
    },

    scene: {
      en: "In the 1850s, a monk was growing thousands of pea plants in his monastery garden, carefully tracking traits like flower color and seed shape across generations.",

      hi: "1850 के दशक में, एक भिक्षु अपने मठ के बगीचे में हज़ारों मटर के पौधे उगा रहा था, और पीढ़ी-दर-पीढ़ी फूलों के रंग और बीज के आकार जैसे गुणों को ध्यान से नोट कर रहा था।"
    },

    observation: {
      en: {
        question: "When he crossed a tall pea plant with a short pea plant, what do you think he actually saw in the next generation?",
        options: [
          "All offspring plants were of medium height, as if the parents' traits had blended together",
          "All offspring plants were tall, and the short trait seemed to disappear completely"
        ],
        answer: 1
      },

      hi: {
        question: "जब उसने एक लंबे मटर के पौधे को एक छोटे मटर के पौधे के साथ संकरण कराया, तो अगली पीढ़ी में उसे वास्तव में क्या दिखाई दिया, तुम्हें क्या लगता है?",
        options: [
          "सभी संतान पौधे मध्यम ऊँचाई के थे, मानो माता-पिता के गुण आपस में मिलकर मिश्रित हो गए हों",
          "सभी संतान पौधे लंबे थे, और छोटा होने का गुण पूरी तरह से गायब हो गया लगा"
        ],
        answer: 1
      }
    },

    hypothesis: {
      en: "He actually saw option B — all first-generation offspring were tall, though the short trait had not disappeared forever.",

      hi: "उसने असल में विकल्प B देखा — सभी पहली पीढ़ी के पौधे लंबे थे, हालांकि छोटा होने का गुण हमेशा के लिए गायब नहीं हुआ था।"
    },

    experiment: {
      en: {
        question: "When he let these tall offspring self-pollinate, what did he find in the next generation?",
        options: [
          "The short trait reappeared in about one out of every four plants",
          "All plants remained tall permanently, and short never appeared again"
        ],
        answer: 0
      },

      hi: {
        question: "जब उसने इन लंबे संतान पौधों को स्वयं-परागण करने दिया, तो अगली पीढ़ी में उसे क्या मिला?",
        options: [
          "हर चार पौधों में से लगभग एक पौधे में छोटा होने का गुण फिर से दिखाई दिया",
          "सभी पौधे हमेशा के लिए लंबे ही रहे, और छोटा होने का गुण फिर कभी नहीं दिखा"
        ],
        answer: 0
      }
    },

    conclusion: {
      en: "He found option A. This showed that traits are passed on as distinct units, now called genes, some dominant and some recessive, rather than blending together. This became the foundation of the laws of heredity.",

      hi: "उसे विकल्प A मिला। इससे यह पता चला कि गुण अलग-अलग इकाइयों, जिन्हें अब जीन कहा जाता है, के रूप में आगे बढ़ते हैं, जिनमें से कुछ प्रभावी और कुछ अप्रभावी होते हैं, न कि आपस में मिलकर मिश्रित हो जाते हैं। यही आनुवंशिकता के नियमों की नींव बनी।"
    }
  },


  /* =========================================================
     STORY 7 — CHARLES DARWIN
  ========================================================= */

  {
    id: "darwin-evolution",

    scientist: {
      en: "Charles Darwin",
      hi: "चार्ल्स डार्विन"
    },

    title: {
      en: "Theory of Evolution",
      hi: "विकासवाद का सिद्धांत"
    },

    scene: {
      en: "During a long sea voyage in the 1830s, a naturalist visited a remote group of islands and noticed that finches on different islands had beaks of very different shapes and sizes.",

      hi: "1830 के दशक में एक लंबी समुद्री यात्रा के दौरान, एक प्रकृतिवादी दूर स्थित द्वीपों के एक समूह पर गया और उसने देखा कि अलग-अलग द्वीपों की चिड़ियों की चोंचों के आकार और बनावट में काफी अंतर था।"
    },

    observation: {
      en: {
        question: "What do you think he wondered about these differences?",
        options: [
          "Each island's finches were placed there separately and had always looked exactly the same",
          "The finches might have descended from a common ancestor, with beak shapes gradually changing to suit the food available on each island"
        ],
        answer: 1
      },

      hi: {
        question: "इन अंतरों के बारे में उसने क्या सोचा होगा, तुम्हें क्या लगता है?",
        options: [
          "हर द्वीप की चिड़ियाँ शुरू से अलग-अलग वहाँ रखी गई थीं और हमेशा से बिल्कुल एक जैसी दिखती रही थीं",
          "ये चिड़ियाँ शायद एक ही पूर्वज से विकसित हुई होंगी, और हर द्वीप पर उपलब्ध भोजन के अनुसार उनकी चोंच का आकार धीरे-धीरे बदलता गया होगा"
        ],
        answer: 1
      }
    },

    hypothesis: {
      en: "He actually leaned toward option B — the idea that a single ancestral species might have changed over generations into many different forms.",

      hi: "उसका झुकाव असल में विकल्प B की ओर था — यह विचार कि एक ही पूर्वज प्रजाति पीढ़ी-दर-पीढ़ी बदलकर कई अलग-अलग रूपों में विकसित हो सकती है।"
    },

    experiment: {
      en: {
        question: "To support this idea, what kind of evidence would you have looked for?",
        options: [
          "Records showing how the shape of animals' body parts related to their environment and survival, across many different species and locations",
          "Measurements of how far apart the islands were from each other in kilometers"
        ],
        answer: 0
      },

      hi: {
        question: "इस विचार का समर्थन करने के लिए, तुम किस तरह के प्रमाण ढूँढते?",
        options: [
          "कई अलग-अलग प्रजातियों और स्थानों में, जीवों के शरीर के अंगों की बनावट का उनके वातावरण और जीवित रहने से संबंध दिखाने वाले रिकॉर्ड",
          "द्वीपों के बीच की दूरी किलोमीटर में कितनी है, इसका माप"
        ],
        answer: 0
      }
    },

    conclusion: {
      en: "He gathered evidence like option A. Combining years of such observations, he proposed that species change gradually over generations through natural selection — individuals better suited to their environment survive and reproduce more, passing on helpful traits. This became the Theory of Evolution.",

      hi: "उसने विकल्प A जैसे प्रमाण इकट्ठा किए। ऐसे कई वर्षों के अवलोकनों को जोड़कर, उसने यह प्रस्तावित किया कि प्रजातियाँ प्राकृतिक चयन के माध्यम से पीढ़ी-दर-पीढ़ी धीरे-धीरे बदलती हैं — जो जीव अपने वातावरण के अनुकूल बेहतर होते हैं, वे अधिक जीवित रहते हैं और अधिक संतान पैदा करते हैं, जिससे उपयोगी गुण आगे बढ़ते जाते हैं। यही विकासवाद का सिद्धांत बना।"
    }
  },


  /* =========================================================
     STORY 8 — HANS CHRISTIAN OERSTED
  ========================================================= */

  {
    id: "oersted-electromagnetism",

    scientist: {
      en: "Hans Christian Oersted",
      hi: "हैंस क्रिश्चियन ओर्स्टेड"
    },

    title: {
      en: "Magnetic Effect of Electric Current",
      hi: "विद्युत धारा का चुंबकीय प्रभाव"
    },

    scene: {
      en: "In 1820, a professor was setting up equipment for a lecture, with a compass placed near a wire connected to a battery.",

      hi: "1820 में, एक प्रोफेसर अपने व्याख्यान के लिए उपकरण तैयार कर रहा था, जिसमें एक बैटरी से जुड़े तार के पास एक दिक्सूचक रखा हुआ था।"
    },

    observation: {
      en: {
        question: "When he passed an electric current through the wire, what do you think happened to the nearby compass needle?",
        options: [
          "The needle stayed completely still, unaffected by the electric current",
          "The needle moved and turned to point in a new direction whenever the current flowed"
        ],
        answer: 1
      },

      hi: {
        question: "जब उसने तार से विद्युत धारा प्रवाहित की, तो पास रखे दिक्सूचक की सुई के साथ क्या हुआ होगा, तुम्हें क्या लगता है?",
        options: [
          "सुई पूरी तरह स्थिर रही, विद्युत धारा से पूरी तरह अप्रभावित",
          "सुई हिली और जब भी धारा प्रवाहित होती, एक नई दिशा में मुड़ जाती"
        ],
        answer: 1
      }
    },

    hypothesis: {
      en: "He actually noticed option B — the compass needle moved whenever current flowed through the wire, and returned to normal when the current stopped.",

      hi: "उसने असल में विकल्प B देखा — दिक्सूचक की सुई हर बार तार में धारा प्रवाहित होने पर हिलती थी, और धारा बंद होने पर वापस सामान्य स्थिति में आ जाती थी।"
    },

    experiment: {
      en: {
        question: "To understand this better, what would you have tested next?",
        options: [
          "Whether reversing the direction of the current changed the direction the needle turned",
          "Whether using a longer wire made the compass needle heavier"
        ],
        answer: 0
      },

      hi: {
        question: "इसे बेहतर समझने के लिए, तुम आगे क्या जाँचते?",
        options: [
          "क्या धारा की दिशा बदलने से सुई के मुड़ने की दिशा भी बदल जाती है",
          "क्या लंबे तार का उपयोग करने से दिक्सूचक भारी हो जाता है"
        ],
        answer: 0
      }
    },

    conclusion: {
      en: "He tested option A, and found that reversing the current reversed the needle's direction too, proving that electric current produces a magnetic field around it. This discovery connected electricity and magnetism for the first time, laying the foundation for electromagnetism.",

      hi: "उसने विकल्प A की जाँच की, और पाया कि धारा की दिशा बदलने से सुई की दिशा भी बदल जाती थी, जिससे यह साबित हुआ कि विद्युत धारा अपने चारों ओर एक चुंबकीय क्षेत्र उत्पन्न करती है। इस खोज ने पहली बार विद्युत और चुंबकत्व को आपस में जोड़ा, जो विद्युतचुंबकत्व की नींव बनी।"
    }
  }

];


/* =========================================================
   PUBLIC API
========================================================= */

window.ThinkLikeAScientist = {

  all() {
    return thinkLikeAScientist;
  },

  get(id) {
    return thinkLikeAScientist.find(story => story.id === id);
  },

  count() {
    return thinkLikeAScientist.length;
  }

};


/* Backward / direct access */
window.thinkLikeAScientist = thinkLikeAScientist;
