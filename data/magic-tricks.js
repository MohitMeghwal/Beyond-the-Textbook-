const magicTricks = [

  {
    id: 1,
    icon: "🪄",
    title: {
      en: "The Floating Body",
      hi: "The Floating Body"
    },
    subtitle: {
      en: "Levitation",
      hi: "Levitation"
    },
    whatYouSee: {
      en: "Ek performer hawa mein floating dikhta hai, bina kisi support ke.",
      hi: "एक performer हवा में floating दिखाई देता है, बिना किसी support के।"
    },
    secret: {
      en: "Ek hidden metal rig ya rod costume ke andar chhupa hota hai, jisse body ek fixed point se supported rehta hai. Lighting aur angle is support ko invisible bana deta hai.",
      hi: "एक hidden metal rig या rod costume के अंदर छिपा होता है, जिससे body एक fixed point से supported रहती है। Lighting और angle इस support को invisible बना देते हैं।"
    },
    funFact: {
      en: "Kuch modern levitation tricks mein magnetic force bhi use hoti hai — chhoti metal plate shoes ke andar aur floor ke neeche electromagnet chhupa hota hai.",
      hi: "कुछ modern levitation tricks में magnetic force भी use होती है — छोटी metal plate shoes के अंदर और floor के नीचे electromagnet छुपा होता है।"
    }
  },

  {
    id: 2,
    icon: "🪚",
    title: {
      en: "Sawing a Person in Half",
      hi: "Sawing a Person in Half"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Ek insaan box ke andar leta hota hai, saw se box ko beech se cut kar diya jaata hai — insaan bilkul theek nikalta hai.",
      hi: "एक इंसान box के अंदर लेटा होता है, saw से box को बीच से cut कर दिया जाता है — इंसान बिल्कुल ठीक निकलता है।"
    },
    secret: {
      en: "Box mein do performers hote hain — ek jiska sirf upper body dikhta hai, dusra jiske pair dikhte hain, dono apna hissa fold karke chhupa lete hain. Saw sirf khaali jagah se guzarta hai.",
      hi: "Box में दो performers होते हैं — एक जिसका सिर्फ upper body दिखता है, दूसरा जिसके पैर दिखते हैं, दोनों अपना हिस्सा fold करके छुपा लेते हैं। Saw सिर्फ खाली जगह से गुजरता है।"
    },
    funFact: {
      en: "Yeh trick 1920s mein pehli baar perform hui thi aur tab se sainkadon variations ban chuki hain.",
      hi: "यह trick 1920s में पहली बार perform हुई थी और तब से सैकड़ों variations बन चुकी हैं।"
    }
  },

  {
    id: 3,
    icon: "🥄",
    title: {
      en: "The Bending Spoon",
      hi: "The Bending Spoon"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Magician sirf haath se spoon ko halka rub karta hai aur wo achanak mudne lagta hai.",
      hi: "Magician सिर्फ हाथ से spoon को हल्का rub करता है और वह अचानक मुड़ने लगता है।"
    },
    secret: {
      en: "Spoon pehle se weaken kiya hua hota hai (baar-baar bend-unbend karke metal fatigue create karna), ya sleight of hand se already-bent spoon se switch kar diya jaata hai.",
      hi: "Spoon पहले से weaken किया हुआ होता है (बार-बार bend-unbend करके metal fatigue create करना), या sleight of hand से already-bent spoon से switch कर दिया जाता है।"
    },
    funFact: {
      en: "Metal fatigue real physics hai — baar-baar mudne se metal ki andar ki structure weak ho jaati hai, aakhir mein wo asaani se modne lagta hai.",
      hi: "Metal fatigue real physics है — बार-बार मुड़ने से metal की अंदर की structure weak हो जाती है, आखिर में वह आसानी से मुड़ने लगता है।"
    }
  },

  {
    id: 4,
    icon: "🚪",
    title: {
      en: "Walking Through a Wall",
      hi: "Walking Through a Wall"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Performer ek solid deewar ke through directly walk kar jaata hai.",
      hi: "Performer एक solid दीवार के through directly walk कर जाता है।"
    },
    secret: {
      en: "Deewar mein ek hidden panel/secret door hota hai jo bilkul wall jaisa dikhta hai. Lighting, timing aur audience ka attention control (misdirection) is trick ka asli kamal hai.",
      hi: "दीवार में एक hidden panel/secret door होता है जो बिल्कुल wall जैसा दिखता है। Lighting, timing और audience का attention control (misdirection) इस trick का असली कमाल है।"
    },
    funFact: {
      en: "Bade illusions mein 'misdirection' hi sabse bada tool hota hai — mechanism se zyada zaroori hota hai audience ka dhyan control karna.",
      hi: "बड़े illusions में 'misdirection' ही सबसे बड़ा tool होता है — mechanism से ज्यादा जरूरी होता है audience का ध्यान control करना।"
    }
  },

  {
    id: 5,
    icon: "🔥",
    title: {
      en: "Fire Breathing",
      hi: "Fire Breathing"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Performer mooh se flame ka bada gola bahar phoonkta hai.",
      hi: "Performer मुँह से flame का बड़ा गोला बाहर फूँकता है।"
    },
    secret: {
      en: "Yeh illusion fuel mist aur flame ke interaction par based hota hai, lekin ise perform karna extremely dangerous hai.",
      hi: "यह illusion fuel mist और flame के interaction पर based होता है, लेकिन इसे perform करना extremely dangerous है।"
    },
    funFact: {
      en: "Yeh dangerous trick hai — galat conditions mein serious burns ho sakti hain.",
      hi: "यह dangerous trick है — गलत conditions में serious burns हो सकती हैं।"
    }
  },

  {
    id: 6,
    icon: "🃏",
    title: {
      en: "The \"Mind-Reading\" Card Trick",
      hi: "The \"Mind-Reading\" Card Trick"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Magician bina dekhe bata deta hai ki tumne kaunsa card socha tha.",
      hi: "Magician बिना देखे बता देता है कि तुमने कौन-सा card सोचा था।"
    },
    secret: {
      en: "Deck ek particular mathematical order mein pehle se arrange hota hai (stacked deck). Shuffle karte waqt bhi wo order maintain rehta hai, jisse magician ko pata chal jaata hai kaunsa card kahan hai.",
      hi: "Deck एक particular mathematical order में पहले से arrange होता है (stacked deck)। Shuffle करते वक्त भी वह order maintain रहता है, जिससे magician को पता चल जाता है कौन-सा card कहाँ है।"
    },
    funFact: {
      en: "Yeh telepathy nahi — pure math hai. Kuch card tricks mein Fibonacci-jaisi number sequences tak use hoti hain.",
      hi: "यह telepathy नहीं — pure math है। कुछ card tricks में Fibonacci-जैसी number sequences तक use होती हैं।"
    }
  },

  {
    id: 7,
    icon: "🧠",
    title: {
      en: "Cold Reading Mentalism",
      hi: "Cold Reading Mentalism"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "\"Mind reader\" tumhari life ke baare mein sahi-sahi baatein bata deta hai, jaise usko sab pata ho.",
      hi: "\"Mind reader\" तुम्हारी life के बारे में सही-सही बातें बता देता है, जैसे उसको सब पता हो।"
    },
    secret: {
      en: "Yeh generic, vague statements hote hain jo zyadatar logon pe fit ho jaate hain. Performer body language aur reactions padhke apne guesses refine karta jaata hai.",
      hi: "ये generic, vague statements होते हैं जो ज्यादातर लोगों पर fit हो जाते हैं। Performer body language और reactions पढ़कर अपने guesses refine करता जाता है।"
    },
    funFact: {
      en: "Isko \"Barnum Effect\" kehte hain — log generic statements ko apne liye bahut personal aur accurate maan lete hain.",
      hi: "इसे \"Barnum Effect\" कहते हैं — लोग generic statements को अपने लिए बहुत personal और accurate मान लेते हैं।"
    }
  },

  {
    id: 8,
    icon: "👻",
    title: {
      en: "The Ghost That Isn't There",
      hi: "The Ghost That Isn't There"
    },
    subtitle: {
      en: "Pepper's Ghost",
      hi: "Pepper's Ghost"
    },
    whatYouSee: {
      en: "Stage pe achanak ek transparent \"ghost\" figure appear ho jaata hai, jo through-dikhta hai.",
      hi: "Stage पर अचानक एक transparent \"ghost\" figure appear हो जाता है, जो through-दिखता है।"
    },
    secret: {
      en: "Ek badi angled glass sheet stage pe lagi hoti hai. Neeche hidden room mein bright light se performer ko illuminate kiya jaata hai — uska reflection glass pe transparent figure jaisa dikhta hai.",
      hi: "एक बड़ी angled glass sheet stage पर लगी होती है। नीचे hidden room में bright light से performer को illuminate किया जाता है — उसका reflection glass पर transparent figure जैसा दिखता है।"
    },
    funFact: {
      en: "Yeh technique 1862 se use ho rahi hai — aaj bhi concerts mein \"hologram\" performances isi principle pe based hote hain.",
      hi: "यह technique 1862 से use हो रही है — आज भी concerts में \"hologram\" performances इसी principle पर based होते हैं।"
    }
  },

  {
    id: 9,
    icon: "🪄",
    title: {
      en: "The Vanishing Object",
      hi: "The Vanishing Object"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Ek object achanak gayab ho jaata hai, jaise kabhi tha hi nahi.",
      hi: "एक object अचानक गायब हो जाता है, जैसे कभी था ही नहीं।"
    },
    secret: {
      en: "Ek mirror 45-degree angle pe is tarah lagaya jaata hai ki wo background ko reflect karke khaali space jaisa dikhaye, jisse actual chhupi hui jagah invisible ho jaati hai.",
      hi: "एक mirror 45-degree angle पर इस तरह लगाया जाता है कि वह background को reflect करके खाली space जैसा दिखाए, जिससे actual छुपी हुई जगह invisible हो जाती है।"
    },
    funFact: {
      en: "Same trick \"invisible box\" illusions mein bhi use hoti hai — jahan poora khaali room bhi mirrors se banaya jaata hai.",
      hi: "Same trick \"invisible box\" illusions में भी use होती है — जहाँ पूरा खाली room भी mirrors से बनाया जाता है।"
    }
  },

  {
    id: 10,
    icon: "🔦",
    title: {
      en: "The Invisible Performer",
      hi: "The Invisible Performer"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Kaale background mein sirf kuch objects khud-ba-khud move karte dikhte hain, performer invisible lagta hai.",
      hi: "काले background में सिर्फ कुछ objects खुद-ब-खुद move करते दिखते हैं, performer invisible लगता है।"
    },
    secret: {
      en: "Performer poori tarah black velvet suit pehne hota hai aur stage bhi black velvet se covered hoti hai. Sirf non-black (glowing) objects highlight hote hain, isliye performer \"gayab\" ho jaata hai.",
      hi: "Performer पूरी तरह black velvet suit पहने होता है और stage भी black velvet से covered होती है। सिर्फ non-black (glowing) objects highlight होते हैं, इसलिए performer \"गायब\" हो जाता है।"
    },
    funFact: {
      en: "Yeh technique ko \"Black Art\" kehte hain — puppetry aur theatre mein sadiyon se use ho rahi hai.",
      hi: "इस technique को \"Black Art\" कहते हैं — puppetry और theatre में सदियों से use हो रही है।"
    }
  },

  {
    id: 11,
    icon: "🪞",
    title: {
      en: "The Infinite Tunnel",
      hi: "The Infinite Tunnel"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Do mirrors ke beech khadi ho toh apna reflection ek endless tunnel jaisa dikhta hai.",
      hi: "दो mirrors के बीच खड़े हों तो अपना reflection एक endless tunnel जैसा दिखता है।"
    },
    secret: {
      en: "Do mirrors ek dusre ke saamne rakhe jaate hain. Light unke beech baar-baar bounce karti hai, har baar naya reflection bana ke — isliye endless-lagne wala tunnel effect banta hai.",
      hi: "दो mirrors एक-दूसरे के सामने रखे जाते हैं। Light उनके बीच बार-बार bounce करती है, हर बार नया reflection बनाकर — इसलिए endless-लगने वाला tunnel effect बनता है।"
    },
    funFact: {
      en: "Har naya reflection thoda dimmer hota hai (thodi light har bounce pe absorb hoti hai), isliye tunnel eventually fade ho jaata hai, chahe infinite lage.",
      hi: "हर नया reflection थोड़ा dimmer होता है (थोड़ी light हर bounce पर absorb होती है), इसलिए tunnel eventually fade हो जाता है, चाहे infinite लगे।"
    }
  },

  {
    id: 12,
    icon: "🥤",
    title: {
      en: "The Disappearing Coin in Water",
      hi: "The Disappearing Coin in Water"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Glass mein rakha coin ek certain angle se dekhne pe achanak gayab ho jaata hai.",
      hi: "Glass में रखा coin एक certain angle से देखने पर अचानक गायब हो जाता है।"
    },
    secret: {
      en: "Jab light paani se hawa mein bahut tirchhi angle pe nikalne ki koshish karti hai, wo bahar nahi nikal paati aur andar hi wapas bounce ho jaati hai — isko \"total internal reflection\" kehte hain.",
      hi: "जब light पानी से हवा में बहुत तिरछी angle पर निकलने की कोशिश करती है, वह बाहर नहीं निकल पाती और अंदर ही वापस bounce हो जाती है — इसे \"total internal reflection\" कहते हैं।"
    },
    funFact: {
      en: "Yehi principle fibre-optic cables mein use hota hai — light andar hi bounce karte hue lambi distance tak travel karti hai, bahar leak nahi hoti.",
      hi: "यही principle fibre-optic cables में use होता है — light अंदर ही bounce करते हुए लंबी distance तक travel करती है, बाहर leak नहीं होती।"
    }
  },

  {
    id: 13,
    icon: "💫",
    title: {
      en: "The Floating Ghost Flame",
      hi: "The Floating Ghost Flame"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Ek jalti candle ki flame hawa mein floating dikhti hai, bina kisi candle ke.",
      hi: "एक जलती candle की flame हवा में floating दिखाई देती है, बिना किसी candle के।"
    },
    secret: {
      en: "Asli candle ek chhupi hui jagah pe jal rahi hoti hai, aur ek angled glass sheet uska reflection audience ki taraf \"float\" karti hui image ki tarah dikhati hai.",
      hi: "असली candle एक छुपी हुई जगह पर जल रही होती है, और एक angled glass sheet उसका reflection audience की तरफ \"float\" करती हुई image की तरह दिखाती है।"
    },
    funFact: {
      en: "Yeh bhi Pepper's Ghost ka hi chhota version hai — bas scale aur setup alag hota hai.",
      hi: "यह भी Pepper's Ghost का ही छोटा version है — बस scale और setup अलग होता है।"
    }
  },

  {
    id: 14,
    icon: "🌈",
    title: {
      en: "The Instant Color Swap",
      hi: "The Instant Color Swap"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Ek image ya card ko ghumate hi uska color achanak badal jaata hai.",
      hi: "एक image या card को घुमाते ही उसका color अचानक बदल जाता है।"
    },
    secret: {
      en: "Do polarizing filters use hote hain. Jab unki alignment same hoti hai, light pass ho jaati hai; ek filter ghumaye jaane pe light block ho jaati hai ya different color show hoti hai.",
      hi: "दो polarizing filters use होते हैं। जब उनकी alignment same होती है, light pass हो जाती है; एक filter घुमाए जाने पर light block हो जाती है या different color show होता है।"
    },
    funFact: {
      en: "Yehi technology 3D movie glasses aur kuch sunglasses mein use hoti hai — glare kam karne ke liye.",
      hi: "यही technology 3D movie glasses और कुछ sunglasses में use होती है — glare कम करने के लिए।"
    }
  },

  {
    id: 15,
    icon: "✨",
    title: {
      en: "The Secret UV Message",
      hi: "The Secret UV Message"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Ek blank kagaz UV light ke neeche achanak glowing message dikhata hai.",
      hi: "एक blank कागज़ UV light के नीचे अचानक glowing message दिखाता है।"
    },
    secret: {
      en: "Message special fluorescent ink se likha jaata hai jo normal light mein almost invisible hota hai. UV light us ink ke molecules ko excite karti hai, jisse wo visible light emit karne lagte hain.",
      hi: "Message special fluorescent ink से लिखा जाता है जो normal light में almost invisible होता है। UV light उस ink के molecules को excite करती है, जिससे वह visible light emit करने लगता है।"
    },
    funFact: {
      en: "Currency notes pe bhi aise hidden UV marks hote hain jo security ke liye use hote hain — normal light mein invisible, UV mein visible.",
      hi: "Currency notes पर भी ऐसे hidden UV marks होते हैं जो security के लिए use होते हैं — normal light में invisible, UV में visible।"
    }
  },

  {
    id: 16,
    icon: "🎨",
    title: {
      en: "The 3D Painting Illusion",
      hi: "The 3D Painting Illusion"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Ek flat, 2D painting ek particular angle se dekhne pe achanak 3D lagne lagti hai.",
      hi: "एक flat, 2D painting एक particular angle से देखने पर अचानक 3D लगने लगती है।"
    },
    secret: {
      en: "Painting jaan-boojhkar distort karke banaya jaata hai (anamorphosis), taaki sirf ek exact viewing angle se perspective sahi lage aur brain use 3D samjhe.",
      hi: "Painting जान-बूझकर distort करके बनाया जाता है (anamorphosis), ताकि सिर्फ एक exact viewing angle से perspective सही लगे और brain उसे 3D समझे।"
    },
    funFact: {
      en: "Yeh technique Renaissance-era painters bhi use karte the — kai famous artworks mein hidden anamorphic images chhupi hoti hain.",
      hi: "यह technique Renaissance-era painters भी use करते थे — कई famous artworks में hidden anamorphic images छुपी होती हैं।"
    }
  },

  {
    id: 17,
    icon: "🎇",
    title: {
      en: "The Beam You Can See",
      hi: "The Beam You Can See"
    },
    subtitle: {
      en: "",
      hi: ""
    },
    whatYouSee: {
      en: "Laser ki ek seedhi, glowing line hawa mein dikhti hai — jaise light ka solid beam ho.",
      hi: "Laser की एक सीधी, glowing line हवा में दिखाई देती है — जैसे light का solid beam हो।"
    },
    secret: {
      en: "Normal, saaf hawa mein light beam invisible hoti hai. Jab fog/smoke ke chhote particles hawa mein hote hain, light unse takra ke scatter hoti hai — hume beam ka path dikhne lagta hai.",
      hi: "Normal, साफ हवा में light beam invisible होती है। जब fog/smoke के छोटे particles हवा में होते हैं, light उनसे टकराकर scatter होती है — हमें beam का path दिखाई देने लगता है।"
    },
    funFact: {
      en: "Yehi wajah hai ki concert laser shows mein fog machines use hoti hain — warna beams sirf ek dot jaisi dikhengi, poori line nahi.",
      hi: "यही वजह है कि concert laser shows में fog machines use होती हैं — वरना beams सिर्फ एक dot जैसी दिखेंगी, पूरी line नहीं।"
    }
  }

];
