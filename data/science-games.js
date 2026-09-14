/* =========================================================
   SCIENCE BEYOND THE TEXTBOOK
   SCIENCE GAMES ENGINE
   =========================================================

   TOTAL GAMES : 22
   PLAYABLE    : 12
   COMING SOON : 10

   PLAYABLE GAMES

   PHYSICS
   1. Circuit Builder
   2. Magnetic Maze
   3. Light & Lens

   CHEMISTRY
   4. Build the Molecule
   5. Reaction Match
   6. Atomic Structure

   BIOLOGY
   7. Build a Cell
   8. Human Body Explorer
   9. Plant Transport

   EARTH & SPACE
   10. Planet Builder
   11. Weather Maker
   12. Moon Phases

   ========================================================= */


/* =========================================================
   GAME DATA
   ========================================================= */

const scienceGames = [

  /* =======================================================
     PHYSICS
     ======================================================= */

  {
    id: "circuit-builder",
    subject: "physics",
    icon: "⚡",

    title: {
      en: "Circuit Builder",
      hi: "सर्किट बिल्डर"
    },

    description: {
      en: "Connect electrical components correctly and complete the circuit.",
      hi: "विद्युत घटकों को सही ढंग से जोड़कर सर्किट को पूरा करें।"
    },

    concept: {
      en: "Electric Circuits",
      hi: "विद्युत परिपथ"
    },

    difficulty: {
      en: "Easy",
      hi: "आसान"
    },

    status: "playable"
  },


  {
    id: "magnetic-maze",
    subject: "physics",
    icon: "🧲",

    title: {
      en: "Magnetic Maze",
      hi: "चुंबकीय भूलभुलैया"
    },

    description: {
      en: "Use magnetic attraction and repulsion to guide the particle to the target.",
      hi: "चुंबकीय आकर्षण और प्रतिकर्षण का उपयोग करके कण को लक्ष्य तक पहुँचाएँ।"
    },

    concept: {
      en: "Magnetism",
      hi: "चुंबकत्व"
    },

    difficulty: {
      en: "Easy",
      hi: "आसान"
    },

    status: "playable"
  },


  {
    id: "light-lens",
    subject: "physics",
    icon: "🔍",

    title: {
      en: "Light & Lens",
      hi: "प्रकाश और लेंस"
    },

    description: {
      en: "Move an object and discover how a convex lens changes its image.",
      hi: "वस्तु को स्थानांतरित करें और देखें कि उत्तल लेंस उसकी छवि को कैसे बदलता है।"
    },

    concept: {
      en: "Refraction and Lenses",
      hi: "अपवर्तन और लेंस"
    },

    difficulty: {
      en: "Medium",
      hi: "मध्यम"
    },

    status: "playable"
  },


  {
    id: "gravity-challenge",
    subject: "physics",
    icon: "🍎",

    title: {
      en: "Gravity Challenge",
      hi: "गुरुत्वाकर्षण चुनौती"
    },

    description: {
      en: "Explore how gravity affects the motion of objects.",
      hi: "समझें कि गुरुत्वाकर्षण वस्तुओं की गति को कैसे प्रभावित करता है।"
    },

    concept: {
      en: "Gravity and Motion",
      hi: "गुरुत्वाकर्षण और गति"
    },

    difficulty: {
      en: "Medium",
      hi: "मध्यम"
    },

    status: "coming-soon"
  },


  {
    id: "balance-it",
    subject: "physics",
    icon: "⚖️",

    title: {
      en: "Balance It",
      hi: "संतुलन बनाएँ"
    },

    description: {
      en: "Discover how mass and distance affect balance.",
      hi: "समझें कि द्रव्यमान और दूरी संतुलन को कैसे प्रभावित करते हैं।"
    },

    concept: {
      en: "Force and Torque",
      hi: "बल और आघूर्ण"
    },

    difficulty: {
      en: "Medium",
      hi: "मध्यम"
    },

    status: "coming-soon"
  },


  {
    id: "orbital-motion",
    subject: "physics",
    icon: "🪐",

    title: {
      en: "Orbital Motion",
      hi: "कक्षीय गति"
    },

    description: {
      en: "Explore the relationship between gravity and orbital motion.",
      hi: "गुरुत्वाकर्षण और कक्षीय गति के बीच संबंध को समझें।"
    },

    concept: {
      en: "Gravity and Orbits",
      hi: "गुरुत्वाकर्षण और कक्षाएँ"
    },

    difficulty: {
      en: "Medium",
      hi: "मध्यम"
    },

    status: "coming-soon"
  },


  {
    id: "sound-wave-lab",
    subject: "physics",
    icon: "🔊",

    title: {
      en: "Sound Wave Lab",
      hi: "ध्वनि तरंग प्रयोगशाला"
    },

    description: {
      en: "Explore frequency, wavelength and amplitude through sound waves.",
      hi: "ध्वनि तरंगों के माध्यम से आवृत्ति, तरंगदैर्ध्य और आयाम को समझें।"
    },

    concept: {
      en: "Sound and Waves",
      hi: "ध्वनि और तरंगें"
    },

    difficulty: {
      en: "Medium",
      hi: "मध्यम"
    },

    status: "coming-soon"
  },


  /* =======================================================
     CHEMISTRY
     ======================================================= */

  {
    id: "build-the-molecule",
    subject: "chemistry",
    icon: "⚛️",

    title: {
      en: "Build the Molecule",
      hi: "अणु बनाएँ"
    },

    description: {
      en: "Connect atoms in the correct arrangement to build molecules.",
      hi: "अणुओं का निर्माण करने के लिए परमाणुओं को सही क्रम में जोड़ें।"
    },

    concept: {
      en: "Atoms and Molecules",
      hi: "परमाणु और अणु"
    },

    difficulty: {
      en: "Easy",
      hi: "आसान"
    },

    status: "playable"
  },


  {
    id: "reaction-match",
    subject: "chemistry",
    icon: "🧪",

    title: {
      en: "Reaction Match",
      hi: "अभिक्रिया मिलान"
    },

    description: {
      en: "Match reactants with their correct products.",
      hi: "अभिकारकों को उनके सही उत्पादों से मिलाएँ।"
    },

    concept: {
      en: "Chemical Reactions",
      hi: "रासायनिक अभिक्रियाएँ"
    },

    difficulty: {
      en: "Easy",
      hi: "आसान"
    },

    status: "playable"
  },


  {
    id: "atomic-structure",
    subject: "chemistry",
    icon: "⚛️",

    title: {
      en: "Atomic Structure",
      hi: "परमाणु की संरचना"
    },

    description: {
      en: "Arrange protons, neutrons and electrons to identify an atom.",
      hi: "किसी परमाणु की पहचान करने के लिए प्रोटॉन, न्यूट्रॉन और इलेक्ट्रॉन व्यवस्थित करें।"
    },

    concept: {
      en: "Atomic Structure",
      hi: "परमाणु संरचना"
    },

    difficulty: {
      en: "Medium",
      hi: "मध्यम"
    },

    status: "playable"
  },


  {
    id: "energy-of-reactions",
    subject: "chemistry",
    icon: "🔥",

    title: {
      en: "Energy of Reactions",
      hi: "अभिक्रियाओं की ऊर्जा"
    },

    description: {
      en: "Explore energy changes during chemical reactions.",
      hi: "रासायनिक अभिक्रियाओं के दौरान ऊर्जा में होने वाले बदलावों को समझें।"
    },

    concept: {
      en: "Energy Changes",
      hi: "ऊर्जा परिवर्तन"
    },

    difficulty: {
      en: "Medium",
      hi: "मध्यम"
    },

    status: "coming-soon"
  },


  {
    id: "states-of-matter",
    subject: "chemistry",
    icon: "🧊",

    title: {
      en: "States of Matter",
      hi: "पदार्थ की अवस्थाएँ"
    },

    description: {
      en: "Explore how particles behave in solids, liquids and gases.",
      hi: "समझें कि ठोस, द्रव और गैस में कण कैसे व्यवहार करते हैं।"
    },

    concept: {
      en: "States of Matter",
      hi: "पदार्थ की अवस्थाएँ"
    },

    difficulty: {
      en: "Easy",
      hi: "आसान"
    },

    status: "coming-soon"
  },


  /* =======================================================
     BIOLOGY
     ======================================================= */

  {
    id: "build-a-cell",
    subject: "biology",
    icon: "🧬",

    title: {
      en: "Build a Cell",
      hi: "कोशिका बनाएँ"
    },

    description: {
      en: "Place the major organelles in their correct positions.",
      hi: "प्रमुख कोशिकांगों को उनके सही स्थान पर रखें।"
    },

    concept: {
      en: "Cell Structure",
      hi: "कोशिका संरचना"
    },

    difficulty: {
      en: "Easy",
      hi: "आसान"
    },

    status: "playable"
  },


  {
    id: "human-body-explorer",
    subject: "biology",
    icon: "❤️",

    title: {
      en: "Human Body Explorer",
      hi: "मानव शरीर अन्वेषक"
    },

    description: {
      en: "Explore major human body systems and discover their functions.",
      hi: "मानव शरीर की प्रमुख प्रणालियों को समझें और उनके कार्यों को जानें।"
    },

    concept: {
      en: "Human Body Systems",
      hi: "मानव शरीर की प्रणालियाँ"
    },

    difficulty: {
      en: "Medium",
      hi: "मध्यम"
    },

    status: "playable"
  },


  {
    id: "plant-transport",
    subject: "biology",
    icon: "🌱",

    title: {
      en: "Plant Transport",
      hi: "पादप परिवहन"
    },

    description: {
      en: "Trace the movement of water through a plant.",
      hi: "पौधे के अंदर जल की गति का पता लगाएँ।"
    },

    concept: {
      en: "Transport in Plants",
      hi: "पौधों में परिवहन"
    },

    difficulty: {
      en: "Medium",
      hi: "मध्यम"
    },

    status: "playable"
  },


  {
    id: "microbe-detective",
    subject: "biology",
    icon: "🦠",

    title: {
      en: "Microbe Detective",
      hi: "सूक्ष्मजीव अन्वेषक"
    },

    description: {
      en: "Investigate different microorganisms.",
      hi: "विभिन्न सूक्ष्मजीवों का अध्ययन करें।"
    },

    concept: {
      en: "Microorganisms",
      hi: "सूक्ष्मजीव"
    },

    difficulty: {
      en: "Medium",
      hi: "मध्यम"
    },

    status: "coming-soon"
  },


  {
    id: "dna-match",
    subject: "biology",
    icon: "🧬",

    title: {
      en: "DNA Match",
      hi: "डीएनए मिलान"
    },

    description: {
      en: "Match complementary DNA bases.",
      hi: "पूरक डीएनए क्षारों का मिलान करें।"
    },

    concept: {
      en: "DNA and Genetics",
      hi: "डीएनए और आनुवंशिकी"
    },

    difficulty: {
      en: "Medium",
      hi: "मध्यम"
    },

    status: "coming-soon"
  },


  /* =======================================================
     EARTH & SPACE
     ======================================================= */

  {
    id: "planet-builder",
    subject: "earth-space",
    icon: "🌍",

    title: {
      en: "Planet Builder",
      hi: "ग्रह निर्माता"
    },

    description: {
      en: "Change planetary conditions and discover how they affect a world.",
      hi: "ग्रह की परिस्थितियों को बदलकर देखें कि वे किसी विश्व को कैसे प्रभावित करती हैं।"
    },

    concept: {
      en: "Planetary Science",
      hi: "ग्रहीय विज्ञान"
    },

    difficulty: {
      en: "Medium",
      hi: "मध्यम"
    },

    status: "playable"
  },


  {
    id: "weather-maker",
    subject: "earth-space",
    icon: "🌪️",

    title: {
      en: "Weather Maker",
      hi: "मौसम निर्माता"
    },

    description: {
      en: "Control atmospheric conditions and observe different weather patterns.",
      hi: "वायुमंडलीय परिस्थितियों को बदलकर विभिन्न मौसम प्रतिरूपों को देखें।"
    },

    concept: {
      en: "Weather and Atmosphere",
      hi: "मौसम और वायुमंडल"
    },

    difficulty: {
      en: "Medium",
      hi: "मध्यम"
    },

    status: "playable"
  },


  {
    id: "moon-phases",
    subject: "earth-space",
    icon: "🌙",

    title: {
      en: "Moon Phases",
      hi: "चंद्रमा की कलाएँ"
    },

    description: {
      en: "Move the Moon around Earth and discover why its appearance changes.",
      hi: "चंद्रमा को पृथ्वी के चारों ओर घुमाकर समझें कि उसका दिखाई देने वाला आकार क्यों बदलता है।"
    },

    concept: {
      en: "Moon Phases",
      hi: "चंद्रमा की कलाएँ"
    },

    difficulty: {
      en: "Easy",
      hi: "आसान"
    },

    status: "playable"
  },


  {
    id: "inside-the-earth",
    subject: "earth-space",
    icon: "🌋",

    title: {
      en: "Inside the Earth",
      hi: "पृथ्वी के अंदर"
    },

    description: {
      en: "Explore the internal layers of Earth.",
      hi: "पृथ्वी की आंतरिक परतों का अध्ययन करें।"
    },

    concept: {
      en: "Earth Structure",
      hi: "पृथ्वी की संरचना"
    },

    difficulty: {
      en: "Easy",
      hi: "आसान"
    },

    status: "coming-soon"
  },


  {
    id: "solar-system-explorer",
    subject: "earth-space",
    icon: "☀️",

    title: {
      en: "Solar System Explorer",
      hi: "सौरमंडल अन्वेषक"
    },

    description: {
      en: "Explore planets, orbits and the scale of the Solar System.",
      hi: "ग्रहों, कक्षाओं और सौरमंडल के विशाल पैमाने का अध्ययन करें।"
    },

    concept: {
      en: "Solar System",
      hi: "सौरमंडल"
    },

    difficulty: {
      en: "Easy",
      hi: "आसान"
    },

    status: "coming-soon"
  }

];


/* =========================================================
   GAME ENGINE
   ========================================================= */

(function(){

"use strict";


let currentLanguage = "en";


let gameOverlay = null;


let gameRoot = null;


let cleanupFunction = null;


/* =======================================================
   LANGUAGE
   ======================================================= */

function text(value){

  if(!value) return "";

  if(typeof value === "string") return value;

  return value[currentLanguage] ||
         value.en ||
         "";

}


/* =======================================================
   GAME SHELL
   ======================================================= */

function createShell(game){

  closeGame();


  gameOverlay = document.createElement("div");

  gameOverlay.id = "scienceGameOverlay";


  gameOverlay.innerHTML = `

    <div class="sg-backdrop"></div>

    <div class="sg-window">

      <div class="sg-header">

        <div>

          <div class="sg-kicker">
            SCIENCE GAME
          </div>

          <h2 class="sg-title">
            ${text(game.title)}
          </h2>

          <div class="sg-concept">
            ${text(game.concept)}
          </div>

        </div>

        <button
          class="sg-close"
          type="button"
          aria-label="Close"
        >
          ×
        </button>

      </div>


      <div class="sg-content"></div>

    </div>

  `;


  document.body.appendChild(
    gameOverlay
  );


  gameRoot =
    gameOverlay.querySelector(
      ".sg-content"
    );


  gameOverlay
    .querySelector(".sg-close")
    .addEventListener(
      "click",
      closeGame
    );


  gameOverlay
    .querySelector(".sg-backdrop")
    .addEventListener(
      "click",
      closeGame
    );


  document.addEventListener(
    "keydown",
    escapeHandler
  );


  injectGameStyles();

}


function escapeHandler(event){

  if(event.key === "Escape"){

    closeGame();

  }

}


function closeGame(){

  if(cleanupFunction){

    try{

      cleanupFunction();

    }catch(e){}

    cleanupFunction = null;

  }


  document.removeEventListener(
    "keydown",
    escapeHandler
  );


  if(gameOverlay){

    gameOverlay.remove();

    gameOverlay = null;

  }

  gameRoot = null;

}


/* =======================================================
   COMMON GAME HELPERS
   ======================================================= */

function button(label){

  return `

    <button
      class="sg-button"
      type="button"
    >
      ${label}

    </button>

  `;

}


function statusBox(){

  return `

    <div class="sg-status"></div>

  `;

}


function setStatus(message, success=false){

  const el =
    gameRoot &&
    gameRoot.querySelector(
      ".sg-status"
    );


  if(!el) return;


  el.textContent = message;


  el.classList.toggle(
    "success",
    success
  );

}


function shuffle(array){

  const a =
    array.slice();


  for(
    let i = a.length - 1;
    i > 0;
    i--
  ){

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );


    [
      a[i],
      a[j]
    ] =
    [
      a[j],
      a[i]
    ];

  }


  return a;

}


/* =======================================================
   1. CIRCUIT BUILDER
   ======================================================= */

function circuitBuilder(game){

  createShell(game);


  gameRoot.innerHTML = `

    <div class="sg-intro">

      ${text({
        en:"Connect the components to create a complete circuit.",
        hi:"घटकों को जोड़कर एक पूर्ण परिपथ बनाएँ।"
      })}

    </div>


    <div class="circuit-board">

      <div class="circuit-component battery">
        🔋
        <small>
          ${text({
            en:"Battery",
            hi:"बैटरी"
          })}
        </small>
      </div>

      <div class="circuit-component switch">
        🔘
        <small>
          ${text({
            en:"Switch",
            hi:"स्विच"
          })}
      </small>
      </div>

      <div class="circuit-component bulb">
        💡
        <small>
          ${text({
            en:"Bulb",
            hi:"बल्ब"
          })}
        </small>
      </div>

    </div>


    <div class="circuit-controls">

      <button
        class="sg-button circuit-wire"
        data-part="battery-switch"
      >
        ${text({
          en:"Connect Battery → Switch",
          hi:"बैटरी → स्विच जोड़ें"
        })}
      </button>

      <button
        class="sg-button circuit-wire"
        data-part="switch-bulb"
      >
        ${text({
          en:"Connect Switch → Bulb",
          hi:"स्विच → बल्ब जोड़ें"
        })}
      </button>

      <button
        class="sg-button circuit-wire"
        data-part="bulb-battery"
      >
        ${text({
          en:"Connect Bulb → Battery",
          hi:"बल्ब → बैटरी जोड़ें"
        })}
      </button>

    </div>


    ${statusBox()}

  `;


  const connected = new Set();


  gameRoot
    .querySelectorAll(".circuit-wire")
    .forEach(btn => {

      btn.addEventListener(
        "click",
        () => {

          connected.add(
            btn.dataset.part
          );


          btn.classList.add(
            "selected"
          );


          if(
            connected.size === 3
          ){

            document
              .querySelector(".bulb")
              .classList.add(
                "lit"
              );


            setStatus(
              text({
                en:"Circuit complete! Current now has a closed path.",
                hi:"परिपथ पूरा हो गया! अब विद्युत धारा के लिए बंद मार्ग उपलब्ध है।"
              }),
              true
            );

          }else{

            setStatus(
              text({
                en:`Connections completed: ${connected.size}/3`,
                hi:`पूर्ण किए गए संयोजन: ${connected.size}/3`
              })
            );

          }

        }
      );

    });

}


/* =======================================================
   2. MAGNETIC MAZE
   ======================================================= */

function magneticMaze(game){

  createShell(game);


  gameRoot.innerHTML = `

    <div class="sg-intro">

      ${text({
        en:"Move the magnetic particle to the target. Nearby magnets affect its direction.",
        hi:"चुंबकीय कण को लक्ष्य तक पहुँचाएँ। पास के चुंबक उसकी दिशा को प्रभावित करते हैं।"
      })}

    </div>


    <div class="maze">

      <div class="maze-wall wall1"></div>
      <div class="maze-wall wall2"></div>
      <div class="maze-wall wall3"></div>

      <div class="maze-magnet magnet1">N</div>
      <div class="maze-magnet magnet2">S</div>

      <div
        class="maze-player"
        tabindex="0"
      >
        ●
      </div>

      <div class="maze-target">
        ★
      </div>

    </div>


    <div class="maze-controls">

      <button class="sg-button" data-move="up">↑</button>

      <div>
        <button class="sg-button" data-move="left">←</button>
        <button class="sg-button" data-move="down">↓</button>
        <button class="sg-button" data-move="right">→</button>
      </div>

    </div>


    ${statusBox()}

  `;


  const player =
    gameRoot.querySelector(
      ".maze-player"
    );


  const target =
    gameRoot.querySelector(
      ".maze-target"
    );


  let x = 30;
  let y = 30;


  function render(){

    player.style.left =
      x + "%";

    player.style.top =
      y + "%";


    const dx =
      parseFloat(
        target.style.left || "85"
      ) - x;


    const dy =
      parseFloat(
        target.style.top || "80"
      ) - y;


    if(
      Math.abs(dx) < 8 &&
      Math.abs(dy) < 8
    ){

      setStatus(
        text({
          en:"Target reached! Magnetic fields can influence the motion of charged or magnetic objects.",
          hi:"लक्ष्य प्राप्त! चुंबकीय क्षेत्र चुंबकीय या आवेशित वस्तुओं की गति को प्रभावित कर सकते हैं।"
        }),
        true
      );

    }

  }


  target.style.left = "84%";
  target.style.top = "82%";


  function move(direction){

    const step = 7;


    if(direction === "up")
      y -= step;

    if(direction === "down")
      y += step;

    if(direction === "left")
      x -= step;

    if(direction === "right")
      x += step;


    x = Math.max(
      5,
      Math.min(92,x)
    );


    y = Math.max(
      5,
      Math.min(88,y)
    );


    render();

  }


  gameRoot
    .querySelectorAll(
      "[data-move]"
    )
    .forEach(btn => {

      btn.addEventListener(
        "click",
        () =>
          move(
            btn.dataset.move
          )
      );

    });


  function keyHandler(e){

    const map = {

      ArrowUp:"up",
      ArrowDown:"down",
      ArrowLeft:"left",
      ArrowRight:"right"

    };


    if(map[e.key]){

      e.preventDefault();

      move(map[e.key]);

    }

  }


  document.addEventListener(
    "keydown",
    keyHandler
  );


  cleanupFunction = () => {

    document.removeEventListener(
      "keydown",
      keyHandler
    );

  };


  render();

}


/* =======================================================
   3. LIGHT & LENS
   ======================================================= */

function lightLens(game){

  createShell(game);


  gameRoot.innerHTML = `

    <div class="sg-intro">

      ${text({
        en:"Move the object and observe how the image changes through a convex lens.",
        hi:"वस्तु को स्थानांतरित करें और देखें कि उत्तल लेंस से बनने वाली छवि कैसे बदलती है।"
      })}

    </div>


    <div class="lens-lab">

      <div class="lens-axis"></div>

      <div
        class="lens-object"
        id="lensObject"
      >
        ▲
      </div>

      <div class="lens-shape">
        ◇
      </div>

      <div
        class="lens-image"
        id="lensImage"
      >
        ▲
      </div>

    </div>


    <label class="sg-slider-label">

      ${text({
        en:"Object distance",
        hi:"वस्तु की दूरी"
      })}

      <input
        id="lensSlider"
        type="range"
        min="15"
        max="80"
        value="50"
      >

    </label>


    ${statusBox()}

  `;


  const slider =
    gameRoot.querySelector(
      "#lensSlider"
    );


  const object =
    gameRoot.querySelector(
      "#lensObject"
    );


  const image =
    gameRoot.querySelector(
      "#lensImage"
    );


  function update(){

    const d =
      Number(slider.value);


    object.style.left =
      d + "%";


    const imagePosition =
      70 - d * .45;


    image.style.left =
      Math.max(
        12,
        Math.min(
          65,
          imagePosition
        )
      ) + "%";


    const scale =
      Math.max(
        .45,
        1.6 - d / 70
      );


    image.style.transform =
      `translate(-50%,-50%) scale(${scale})`;


    setStatus(
      text({
        en:"Changing object distance changes the position and size of the image.",
        hi:"वस्तु की दूरी बदलने से छवि की स्थिति और आकार बदलते हैं।"
      })
    );

  }


  slider.addEventListener(
    "input",
    update
  );


  update();

}


/* =======================================================
   4. BUILD THE MOLECULE
   ======================================================= */

function buildMolecule(game){

  createShell(game);


  const molecules = [

    {
      name:{
        en:"Water",
        hi:"जल"
      },
      formula:"H₂O",
      atoms:[
        "H",
        "O",
        "H"
      ]
    },

    {
      name:{
        en:"Carbon Dioxide",
        hi:"कार्बन डाइऑक्साइड"
      },
      formula:"CO₂",
      atoms:[
        "O",
        "C",
        "O"
      ]
    },

    {
      name:{
        en:"Ammonia",
        hi:"अमोनिया"
      },
      formula:"NH₃",
      atoms:[
        "H",
        "N",
        "H",
        "H"
      ]
    }

  ];


  const target =
    molecules[
      Math.floor(
        Math.random() *
        molecules.length
      )
    ];


  const shuffled =
    shuffle(target.atoms);


  gameRoot.innerHTML = `

    <div class="sg-intro">

      ${text({
        en:"Build the molecule by placing the correct atoms in the required order.",
        hi:"सही परमाणुओं को आवश्यक क्रम में रखकर अणु बनाएँ।"
      })}

    </div>


    <div class="molecule-target">

      ${text(target.name)}

      <strong>
        ${target.formula}
      </strong>

    </div>


    <div
      class="atom-options"
      id="atomOptions"
    ></div>


    <div
      class="molecule-slots"
      id="moleculeSlots"
    ></div>


    <button
      class="sg-button"
      id="moleculeReset"
    >
      ${text({
        en:"Reset",
        hi:"पुनः प्रारंभ करें"
      })}
    </button>


    ${statusBox()}

  `;


  const options =
    gameRoot.querySelector(
      "#atomOptions"
    );


  const slots =
    gameRoot.querySelector(
      "#moleculeSlots"
    );


  let selected = [];


  shuffled.forEach(
    atom => {

      const btn =
        document.createElement(
          "button"
        );


      btn.className =
        "atom-button";


      btn.textContent =
        atom;


      btn.addEventListener(
        "click",
        () => {

          selected.push(atom);

          btn.disabled = true;

          renderSlots();


          if(
            selected.length ===
            target.atoms.length
          ){

            const correct =
              selected.every(
                (a,i) =>
                  a === target.atoms[i]
              );


            if(correct){

              setStatus(
                text({
                  en:`Correct! ${target.formula} is ${text(target.name)}.`,
                  hi:`सही! ${target.formula} ${text(target.name)} है।`
                }),
                true
              );

            }else{

              setStatus(
                text({
                  en:"The atom arrangement is not correct. Try again.",
                  hi:"परमाणुओं का क्रम सही नहीं है। फिर प्रयास करें।"
                })
              );

            }

          }

        }
      );


      options.appendChild(btn);

    }
  );


  function renderSlots(){

    slots.innerHTML =
      selected
        .map(
          atom =>
            `<span>${atom}</span>`
        )
        .join("");

  }


  gameRoot
    .querySelector(
      "#moleculeReset"
    )
    .addEventListener(
      "click",
      () =>
        buildMolecule(game)
    );

}


/* =======================================================
   5. REACTION MATCH
   ======================================================= */

function reactionMatch(game){

  createShell(game);


  const reactions = [

    {
      left:"H₂ + O₂",
      right:"H₂O"
    },

    {
      left:"Na + Cl₂",
      right:"NaCl"
    },

    {
      left:"C + O₂",
      right:"CO₂"
    },

    {
      left:"CaCO₃",
      right:"CaO + CO₂"
    }

  ];


  const shuffled =
    shuffle(reactions);


  let index = 0;


  gameRoot.innerHTML = `

    <div class="sg-intro">

      ${text({
        en:"Choose the correct product for each reactant.",
        hi:"प्रत्येक अभिकारक के लिए सही उत्पाद चुनें।"
      })}

    </div>


    <div
      class="reaction-question"
      id="reactionQuestion"
    ></div>


    <div
      class="reaction-options"
      id="reactionOptions"
    ></div>


    ${statusBox()}

  `;


  function render(){

    if(index >= shuffled.length){

      setStatus(
        text({
          en:"Challenge complete! Chemical reactions rearrange atoms to form new substances.",
          hi:"चुनौती पूरी! रासायनिक अभिक्रियाओं में परमाणुओं की पुनर्व्यवस्था होकर नए पदार्थ बनते हैं।"
        }),
        true
      );


      return;

    }


    const reaction =
      shuffled[index];


    document
      .getElementById(
        "reactionQuestion"
      )
      .textContent =
      reaction.left;


    const options =
      shuffle([

        reaction.right,

        ...reactions
          .filter(
            r =>
              r.right !==
              reaction.right
          )
          .slice(0,2)
          .map(
            r => r.right
          )

      ]);


    const box =
      document.getElementById(
        "reactionOptions"
      );


    box.innerHTML = "";


    options.forEach(
      option => {

        const btn =
          document.createElement(
            "button"
          );


        btn.className =
          "reaction-option";


        btn.textContent =
          option;


        btn.addEventListener(
          "click",
          () => {

            if(
              option ===
              reaction.right
            ){

              setStatus(
                text({
                  en:"Correct!",
                  hi:"सही!"
                }),
                true
              );

              index++;

              setTimeout(
                render,
                500
              );

            }else{

              setStatus(
                text({
                  en:"Not this one. Think about which atoms can rearrange to form the product.",
                  hi:"यह सही नहीं है। सोचें कि कौन से परमाणु पुनर्व्यवस्थित होकर उत्पाद बना सकते हैं।"
                })
              );

            }

          }
        );


        box.appendChild(btn);

      }
    );

  }


  render();

}


/* =======================================================
   6. ATOMIC STRUCTURE
   ======================================================= */

function atomicStructure(game){

  createShell(game);


  const elements = [

    {
      name:{
        en:"Hydrogen",
        hi:"हाइड्रोजन"
      },
      symbol:"H",
      protons:1,
      neutrons:0,
      electrons:1
    },

    {
      name:{
        en:"Carbon",
        hi:"कार्बन"
      },
      symbol:"C",
      protons:6,
      neutrons:6,
      electrons:6
    },

    {
      name:{
        en:"Oxygen",
        hi:"ऑक्सीजन"
      },
      symbol:"O",
      protons:8,
      neutrons:8,
      electrons:8
    },

    {
      name:{
        en:"Sodium",
        hi:"सोडियम"
      },
      symbol:"Na",
      protons:11,
      neutrons:12,
      electrons:11
    }

  ];


  const target =
    elements[
      Math.floor(
        Math.random() *
        elements.length
      )
    ];


  gameRoot.innerHTML = `

    <div class="sg-intro">

      ${text({
        en:"Build the atom by selecting the correct number of subatomic particles.",
        hi:"उपपरमाण्विक कणों की सही संख्या चुनकर परमाणु बनाएँ।"
      })}

    </div>


    <div class="atom-target">

      <strong>
        ${text(target.name)}
      </strong>

      <span>
        ${target.symbol}
      </span>

    </div>


    <div class="particle-controls">

      <label>
        ${text({
          en:"Protons",
          hi:"प्रोटॉन"
        })}

        <input
          id="protons"
          type="number"
          min="0"
          max="20"
          value="0"
        >

      </label>


      <label>
        ${text({
          en:"Neutrons",
          hi:"न्यूट्रॉन"
        })}

        <input
          id="neutrons"
          type="number"
          min="0"
          max="20"
          value="0"
        >

      </label>


      <label>
        ${text({
          en:"Electrons",
          hi:"इलेक्ट्रॉन"
        })}

        <input
          id="electrons"
          type="number"
          min="0"
          max="20"
          value="0"
        >

      </label>

    </div>


    <button
      class="sg-button"
      id="checkAtom"
    >
      ${text({
        en:"Check Atom",
        hi:"परमाणु जाँचें"
      })}
    </button>


    ${statusBox()}

  `;


  gameRoot
    .querySelector(
      "#checkAtom"
    )
    .addEventListener(
      "click",
      () => {

        const p =
          Number(
            gameRoot.querySelector(
              "#protons"
            ).value
          );


        const n =
          Number(
            gameRoot.querySelector(
              "#neutrons"
            ).value
          );


        const e =
          Number(
            gameRoot.querySelector(
              "#electrons"
            ).value
          );


        if(
          p === target.protons &&
          n === target.neutrons &&
          e === target.electrons
        ){

          setStatus(
            text({
              en:`Correct! ${text(target.name)} has ${p} proton(s), ${n} neutron(s) and ${e} electron(s) in this model.`,
              hi:`सही! इस मॉडल में ${text(target.name)} में ${p} प्रोटॉन, ${n} न्यूट्रॉन और ${e} इलेक्ट्रॉन हैं।`
            }),
            true
          );

        }else{

          setStatus(
            text({
              en:"The particle numbers do not match the target atom.",
              hi:"कणों की संख्या लक्ष्य परमाणु से मेल नहीं खाती।"
            })
          );

        }

      }
    );

}


/* =======================================================
   7. BUILD A CELL
   ======================================================= */

function buildCell(game){

  createShell(game);


  const organelles = [

    {
      id:"nucleus",
      name:{
        en:"Nucleus",
        hi:"केंद्रक"
      }
    },

    {
      id:"mitochondria",
      name:{
        en:"Mitochondrion",
        hi:"माइटोकॉन्ड्रिया"
      }
    },

    {
      id:"ribosome",
      name:{
        en:"Ribosome",
        hi:"राइबोसोम"
      }
    },

    {
      id:"vacuole",
      name:{
        en:"Vacuole",
        hi:"रसधानी"
      }

  ];


  gameRoot.innerHTML = `

    <div class="sg-intro">

      ${text({
        en:"Place the organelles inside the cell and learn their basic roles.",
        hi:"कोशिका के अंदर कोशिकांगों को रखें और उनके मूल कार्यों को समझें।"
      })}

    </div>


    <div
      class="cell-board"
      id="cellBoard"
    >

      <div class="cell-membrane">

        <div
          class="cell-nucleus"
          data-organelle="nucleus"
        >
          N
        </div>

        <div
          class="cell-mito"
          data-organelle="mitochondria"
        >
          M
        </div>

        <div
          class="cell-ribo"
          data-organelle="ribosome"
        >
          R
        </div>

        <div
          class="cell-vacuole"
          data-organelle="vacuole"
        >
          V
        </div>

      </div>

    </div>


    <div
      class="cell-options"
      id="cellOptions"
    ></div>


    ${statusBox()}

  `;


  const options =
    gameRoot.querySelector(
      "#cellOptions"
    );


  const selected =
    new Set();


  organelles.forEach(
    item => {

      const btn =
        document.createElement(
          "button"
        );


      btn.className =
        "cell-option";


      btn.textContent =
        text(item.name);


      btn.addEventListener(
        "click",
        () => {

          selected.add(
            item.id
          );


          btn.classList.add(
            "selected"
          );


          if(
            selected.size ===
            organelles.length
          ){

            setStatus(
              text({
                en:"Cell assembled! The nucleus stores genetic information, mitochondria are involved in energy release, ribosomes make proteins, and vacuoles store substances.",
                hi:"कोशिका तैयार है! केंद्रक आनुवंशिक जानकारी रखता है, माइटोकॉन्ड्रिया ऊर्जा मुक्त करने में शामिल होते हैं, राइबोसोम प्रोटीन बनाते हैं और रसधानियाँ पदार्थों का भंडारण करती हैं।"
              }),
              true
            );

          }

        }
      );


      options.appendChild(btn);

    }
  );

}


/* =======================================================
   8. HUMAN BODY EXPLORER
   ======================================================= */

function humanBodyExplorer(game){

  createShell(game);


  const systems = [

    {
      name:{
        en:"Circulatory System",
        hi:"रक्त परिसंचरण तंत्र"
      },
      icon:"❤️",
      description:{
        en:"Transports blood, oxygen, nutrients and other substances around the body.",
        hi:"शरीर में रक्त, ऑक्सीजन, पोषक पदार्थ और अन्य पदार्थों का परिवहन करता है।"
      }
    },

    {
      name:{
        en:"Respiratory System",
        hi:"श्वसन तंत्र"
      },
      icon:"🫁",
      description:{
        en:"Exchanges oxygen and carbon dioxide between the body and the environment.",
        hi:"शरीर और वातावरण के बीच ऑक्सीजन और कार्बन डाइऑक्साइड का आदान-प्रदान करता है।"
      }
    },

    {
      name:{
        en:"Digestive System",
        hi:"पाचन तंत्र"
      },
      icon:"🧠",
      description:{
        en:"Breaks food into smaller substances that the body can absorb and use.",
        hi:"भोजन को छोटे पदार्थों में तोड़ता है जिन्हें शरीर अवशोषित और उपयोग कर सकता है।"
      }
    },

    {
      name:{
        en:"Nervous System",
        hi:"तंत्रिका तंत्र"
      },
      icon:"🧠",
      description:{
        en:"Receives information and coordinates responses throughout the body.",
        hi:"जानकारी प्राप्त करता है और पूरे शरीर में प्रतिक्रियाओं का समन्वय करता है।"
      }
    }

  ];


  gameRoot.innerHTML = `

    <div class="sg-intro">

      ${text({
        en:"Select a body system to discover what it does.",
        hi:"किसी शरीर प्रणाली का चयन करके जानें कि वह क्या कार्य करती है।"
      })}

    </div>


    <div
      class="body-system-grid"
      id="bodySystems"
    ></div>


    <div
      class="body-info"
      id="bodyInfo"
    >

      ${text({
        en:"Select a system.",
        hi:"किसी प्रणाली का चयन करें।"
      })}

    </div>

  `;


  const grid =
    gameRoot.querySelector(
      "#bodySystems"
    );


  const info =
    gameRoot.querySelector(
      "#bodyInfo"
    );


  systems.forEach(
    system => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "body-system";


      button.innerHTML = `

        <span>
          ${system.icon}
        </span>

        <strong>
          ${text(system.name)}
        </strong>

      `;


      button.addEventListener(
        "click",
        () => {

          info.innerHTML = `

            <strong>
              ${text(system.name)}
            </strong>

            <p>
              ${text(system.description)}
            </p>

          `;

        }
      );


      grid.appendChild(button);

    }
  );

}


/* =======================================================
   9. PLANT TRANSPORT
   ======================================================= */

function plantTransport(game){

  createShell(game);


  gameRoot.innerHTML = `

    <div class="sg-intro">

      ${text({
        en:"Guide water from the roots toward the leaves.",
        hi:"जल को जड़ों से पत्तियों की ओर पहुँचाएँ।"
      })}

    </div>


    <div class="plant-lab">

      <div class="plant-roots">
        ● ● ●
      </div>

      <div class="plant-stem">

        <div
          class="water-particle"
          id="waterParticle"
        >
          💧
        </div>

      </div>

      <div class="plant-leaves">
        🌿
      </div>

    </div>


    <button
      class="sg-button"
      id="moveWater"
    >
      ${text({
        en:"Move Water Up",
        hi:"जल को ऊपर ले जाएँ"
      })}
    </button>


    ${statusBox()}

  `;


  const particle =
    gameRoot.querySelector(
      "#waterParticle"
    );


  const button =
    gameRoot.querySelector(
      "#moveWater"
    );


  let position = 0;


  button.addEventListener(
    "click",
    () => {

      position += 20;


      particle.style.bottom =
        position + "px";


      if(position >= 100){

        setStatus(
          text({
            en:"Water reached the leaves. Xylem transports water upward through the plant.",
            hi:"जल पत्तियों तक पहुँच गया। जाइलम पौधे में जल को ऊपर की ओर पहुँचाता है।"
          }),
          true
        );

      }else{

        setStatus(
          text({
            en:"Water is moving upward through the stem.",
            hi:"जल तने के माध्यम से ऊपर की ओर बढ़ रहा है।"
          })
        );

      }

    }
  );

}


/* =======================================================
   10. PLANET BUILDER
   ======================================================= */

function planetBuilder(game){

  createShell(game);


  gameRoot.innerHTML = `

    <div class="sg-intro">

      ${text({
        en:"Change planetary conditions and observe how the world responds.",
        hi:"ग्रह की परिस्थितियों को बदलें और देखें कि विश्व कैसे प्रतिक्रिया करता है।"
      })}

    </div>


    <div
      class="planet-preview"
      id="planetPreview"
    >

      🌍

    </div>


    <div class="planet-controls">

      <label>

        ${text({
          en:"Temperature",
          hi:"तापमान"
        })}

        <input
          id="planetTemperature"
          type="range"
          min="-50"
          max="100"
          value="20"
        >

      </label>


      <label>

        ${text({
          en:"Water",
          hi:"जल"
        })}

        <input
          id="planetWater"
          type="range"
          min="0"
          max="100"
          value="60"
        >

      </label>


      <label>

        ${text({
          en:"Atmosphere",
          hi:"वायुमंडल"
        })}

        <input
          id="planetAtmosphere"
          type="range"
          min="0"
          max="100"
          value="70"
        >

      </label>

    </div>


    ${statusBox()}

  `;


  const temperature =
    gameRoot.querySelector(
      "#planetTemperature"
    );


  const water =
    gameRoot.querySelector(
      "#planetWater"
    );


  const atmosphere =
    gameRoot.querySelector(
      "#planetAtmosphere"
    );


  const preview =
    gameRoot.querySelector(
      "#planetPreview"
    );


  function update(){

    const t =
      Number(
        temperature.value
      );


    const w =
      Number(
        water.value
      );


    const a =
      Number(
        atmosphere.value
      );


    const moisture =
      w > 60;


    const extreme =
      t > 70 ||
      t < -20;


    preview.classList.toggle(
      "dry",
      w < 25
    );


    preview.classList.toggle(
      "extreme",
      extreme
    );


    preview.classList.toggle(
      "thick",
      a > 80
    );


    let message;


    if(extreme){

      message = text({
        en:"Extreme temperature creates difficult surface conditions.",
        hi:"अत्यधिक तापमान सतह पर कठिन परिस्थितियाँ उत्पन्न करता है।"
      });

    }else if(moisture){

      message = text({
        en:"Abundant water can strongly influence the planet's surface environment.",
        hi:"अधिक मात्रा में जल ग्रह के सतही वातावरण को बहुत प्रभावित कर सकता है।"
      });

    }else{

      message = text({
        en:"Changing temperature, water and atmosphere changes the planet's environment.",
        hi:"तापमान, जल और वायुमंडल बदलने से ग्रह का वातावरण बदल जाता है।"
      });

    }


    setStatus(message);

  }


  [
    temperature,
    water,
    atmosphere
  ].forEach(
    input =>
      input.addEventListener(
        "input",
        update
      )
  );


  update();

}


/* =======================================================
   11. WEATHER MAKER
   ======================================================= */

function weatherMaker(game){

  createShell(game);


  gameRoot.innerHTML = `

    <div class="sg-intro">

      ${text({
        en:"Change temperature, moisture and air movement to create different weather conditions.",
        hi:"तापमान, नमी और वायु की गति बदलकर विभिन्न मौसम की परिस्थितियाँ बनाएँ।"
      })}

    </div>


    <div
      class="weather-sky"
      id="weatherSky"
    >

      <div
        class="weather-sun"
        id="weatherSun"
      >
        ☀️
      </div>

      <div
        class="weather-cloud"
        id="weatherCloud"
      >
        ☁️
      </div>

      <div
        class="weather-rain"
        id="weatherRain"
      >
        • • • • •
      </div>

    </div>


    <div class="weather-controls">

      <label>

        ${text({
          en:"Temperature",
          hi:"तापमान"
        })}

        <input
          id="weatherTemp"
          type="range"
          min="0"
          max="100"
          value="50"
        >

      </label>


      <label>

        ${text({
          en:"Moisture",
          hi:"नमी"
        })}

        <input
          id="weatherMoisture"
          type="range"
          min="0"
          max="100"
          value="50"
        >

      </label>


      <label>

        ${text({
          en:"Air movement",
          hi:"वायु की गति"
        })}

        <input
          id="weatherWind"
          type="range"
          min="0"
          max="100"
          value="40"
        >

      </label>

    </div>


    ${statusBox()}

  `;


  const temp =
    gameRoot.querySelector(
      "#weatherTemp"
    );


  const moisture =
    gameRoot.querySelector(
      "#weatherMoisture"
    );


  const wind =
    gameRoot.querySelector(
      "#weatherWind"
    );


  const sun =
    gameRoot.querySelector(
      "#weatherSun"
    );


  const cloud =
    gameRoot.querySelector(
      "#weatherCloud"
    );


  const rain =
    gameRoot.querySelector(
      "#weatherRain"
    );


  function update(){

    const t =
      Number(temp.value);


    const m =
      Number(moisture.value);


    const w =
      Number(wind.value);


    sun.style.opacity =
      Math.max(
        .15,
        t / 100
      );


    cloud.style.opacity =
      Math.max(
        .15,
        m / 100
      );


    rain.style.opacity =
      m > 65
        ? Math.min(
            1,
            m / 100
          )
        : 0;


    let message;


    if(m > 65 && w > 50){

      message = text({
        en:"Moist air and strong air movement can support changing cloud and precipitation conditions.",
        hi:"नम हवा और अधिक वायु गति बादलों तथा वर्षण की बदलती परिस्थितियों में योगदान कर सकती है।"
      });

    }else if(t > 70){

      message = text({
        en:"Higher temperature increases the capacity of air to hold water vapour.",
        hi:"अधिक तापमान हवा की जलवाष्प धारण करने की क्षमता को बढ़ाता है।"
      });

    }else{

      message = text({
        en:"Weather emerges from interactions among temperature, moisture, pressure and air movement.",
        hi:"मौसम तापमान, नमी, दाब और वायु की गति के बीच होने वाली अंतःक्रियाओं से बनता है।"
      });

    }


    setStatus(message);

  }


  [
    temp,
    moisture,
    wind
  ].forEach(
    input =>
      input.addEventListener(
        "input",
        update
      )
  );


  update();

}


/* =======================================================
   12. MOON PHASES
   ======================================================= */

function moonPhases(game){

  createShell(game);


  gameRoot.innerHTML = `

    <div class="sg-intro">

      ${text({
        en:"Move the Moon around Earth and identify the phase seen from Earth.",
        hi:"चंद्रमा को पृथ्वी के चारों ओर घुमाएँ और पृथ्वी से दिखाई देने वाली कला पहचानें।"
      })}

    </div>


    <div class="moon-lab">

      <div class="moon-sun">
        ☀️
      </div>

      <div class="moon-earth">
        🌍
      </div>

      <div
        class="orbit"
        id="moonOrbit"
      >

        <div
          class="moving-moon"
          id="movingMoon"
        >
          🌙
        </div>

      </div>

    </div>


    <input
      id="moonSlider"
      class="moon-slider"
      type="range"
      min="0"
      max="360"
      value="0"
    >


    <div
      class="moon-phase-name"
      id="moonPhaseName"
    ></div>


    ${statusBox()}

  `;


  const slider =
    gameRoot.querySelector(
      "#moonSlider"
    );


  const moon =
    gameRoot.querySelector(
      "#movingMoon"
    );


  const name =
    gameRoot.querySelector(
      "#moonPhaseName"
    );


  const phases = [

    {
      min:0,
      max:45,
      en:"New Moon",
      hi:"अमावस्या"
    },

    {
      min:45,
      max:135,
      en:"Waxing Moon",
      hi:"शुक्ल पक्ष"
    },

    {
      min:135,
      max:225,
      en:"Full Moon",
      hi:"पूर्णिमा"
    },

    {
      min:225,
      max:315,
      en:"Waning Moon",
      hi:"कृष्ण पक्ष"
    },

    {
      min:315,
      max:361,
      en:"New Moon",
      hi:"अमावस्या"
    }

  ];


  function update(){

    const angle =
      Number(slider.value);


    const radius = 105;


    const radians =
      angle *
      Math.PI /
      180;


    const x =
      Math.cos(radians) *
      radius;


    const y =
      Math.sin(radians) *
      radius;


    moon.style.transform =
      `translate(${x}px,${y}px)`;


    const phase =
      phases.find(
        p =>
          angle >= p.min &&
          angle < p.max
      ) ||
      phases[0];


    name.textContent =
      currentLanguage === "hi"
        ? phase.hi
        : phase.en;


    setStatus(
      text({
        en:"The Moon does not produce its own visible light. We see changing portions of sunlight reflected from its surface.",
        hi:"चंद्रमा अपना दृश्य प्रकाश उत्पन्न नहीं करता। हमें उसकी सतह से परावर्तित सूर्य के प्रकाश का बदलता हुआ भाग दिखाई देता है।"
      })
    );

  }


  slider.addEventListener(
    "input",
    update
  );


  update();

}


/* =========================================================
   GAME MAP
   ========================================================= */

const gameLaunchers = {

  "circuit-builder":
    circuitBuilder,

  "magnetic-maze":
    magneticMaze,

  "light-lens":
    lightLens,

  "build-the-molecule":
    buildMolecule,

  "reaction-match":
    reactionMatch,

  "atomic-structure":
    atomicStructure,

  "build-a-cell":
    buildCell,

  "human-body-explorer":
    humanBodyExplorer,

  "plant-transport":
    plantTransport,

  "planet-builder":
    planetBuilder,

  "weather-maker":
    weatherMaker,

  "moon-phases":
    moonPhases

};


/* =========================================================
   PUBLIC API
   ========================================================= */

window.ScienceGames = {

  all(){

    return scienceGames;

  },


  playable(){

    return scienceGames.filter(
      game =>
        game.status ===
        "playable"
    );

  },


  comingSoon(){

    return scienceGames.filter(
      game =>
        game.status ===
        "coming-soon"
    );

  },


  bySubject(subject){

    if(subject === "all"){

      return scienceGames;

    }


    return scienceGames.filter(
      game =>
        game.subject ===
        subject
    );

  },


  get(id){

    return scienceGames.find(
      game =>
        game.id === id
    );

  },


  setLanguage(language){

    currentLanguage =
      language === "hi"
        ? "hi"
        : "en";

  },


  open(id, language){

    if(language){

      this.setLanguage(
        language
      );

    }


    const game =
      this.get(id);


    if(!game){

      return false;

    }


    if(
      game.status !==
      "playable"
    ){

      return false;

    }


    const launcher =
      gameLaunchers[id];


    if(!launcher){

      return false;

    }


    launcher(game);


    return true;

  },


  close(){

    closeGame();

  }

};


/* =========================================================
   GLOBAL DATA ACCESS
   ========================================================= */

window.scienceGames =
  scienceGames;


/* =========================================================
   GAME ENGINE CSS
   ========================================================= */

function injectGameStyles(){

  if(
    document.getElementById(
      "scienceGameStyles"
    )
  ){

    return;

  }


  const style =
    document.createElement(
      "style"
    );


  style.id =
    "scienceGameStyles";


  style.textContent = `

    #scienceGameOverlay{

      position:fixed;
      inset:0;
      z-index:99999;

      display:flex;
      align-items:center;
      justify-content:center;

      padding:20px;

      font-family:Inter,
        system-ui,
        sans-serif;

    }


    .sg-backdrop{

      position:absolute;
      inset:0;

      background:
        rgba(2,8,5,.86);

      backdrop-filter:
        blur(12px);

    }


    .sg-window{

      position:relative;
      z-index:2;

      width:min(
        920px,
        100%
      );

      max-height:
        min(
          90vh,
          850px
        );

      overflow:auto;

      border:
        1px solid
        rgba(255,255,255,.14);

      border-radius:24px;

      background:
        linear-gradient(
          145deg,
          #101b14,
          #07100b
        );

      box-shadow:
        0 30px 100px
        rgba(0,0,0,.55);

      color:#f4f5ef;

    }


    .sg-header{

      position:sticky;
      top:0;
      z-index:5;

      display:flex;
      align-items:flex-start;
      justify-content:space-between;

      gap:20px;

      padding:22px 24px;

      background:
        rgba(7,16,11,.92);

      backdrop-filter:
        blur(15px);

      border-bottom:
        1px solid
        rgba(255,255,255,.09);

    }


    .sg-kicker{

      color:#65f28b;

      font-size:9px;
      font-weight:800;

      letter-spacing:.18em;

      text-transform:uppercase;

      margin-bottom:5px;

    }


    .sg-title{

      margin:0;

      font-family:Caveat,
        cursive;

      font-size:34px;

      line-height:1;

    }


    .sg-concept{

      margin-top:7px;

      color:#8e9c91;

      font-size:11px;

    }


    .sg-close{

      width:38px;
      height:38px;

      flex:0 0 auto;

      border-radius:50%;

      border:
        1px solid
        rgba(255,255,255,.14);

      background:
        rgba(255,255,255,.04);

      color:#eaf0eb;

      font-size:24px;

      cursor:pointer;

    }


    .sg-close:hover{

      color:#65f28b;

      border-color:
        rgba(101,242,139,.45);

    }


    .sg-content{

      padding:28px;

    }


    .sg-intro{

      color:#aeb8af;

      font-size:13px;

      line-height:1.7;

      margin-bottom:22px;

    }


    .sg-button{

      border:
        1px solid
        rgba(101,242,139,.34);

      background:
        rgba(101,242,139,.08);

      color:#65f28b;

      border-radius:11px;

      padding:10px 14px;

      font-size:11px;

      font-weight:800;

      cursor:pointer;

      transition:.18s ease;

    }


    .sg-button:hover,
    .sg-button.selected{

      background:#65f28b;

      color:#061008;

      transform:translateY(-1px);

    }


    .sg-button:disabled{

      opacity:.45;

      cursor:not-allowed;

      transform:none;

    }


    .sg-status{

      margin-top:20px;

      padding:13px 15px;

      border:
        1px solid
        rgba(255,255,255,.10);

      border-radius:12px;

      background:
        rgba(255,255,255,.025);

      color:#aeb8af;

      font-size:11px;

      line-height:1.6;

    }


    .sg-status.success{

      color:#65f28b;

      border-color:
        rgba(101,242,139,.30);

      background:
        rgba(101,242,139,.06);

    }


    /* CIRCUIT */

    .circuit-board{

      position:relative;

      min-height:230px;

      display:flex;

      align-items:center;

      justify-content:space-around;

      gap:20px;

      padding:30px;

      border:
        1px solid
        rgba(255,255,255,.10);

      border-radius:20px;

      background:
        #09120d;

    }


    .circuit-component{

      width:105px;
      height:105px;

      display:flex;

      flex-direction:column;

      align-items:center;
      justify-content:center;

      gap:7px;

      border:
        1px solid
        rgba(255,255,255,.12);

      border-radius:18px;

      background:
        #111d15;

      font-size:38px;

    }


    .circuit-component small{

      color:#8f9c92;

      font-size:10px;

    }


    .bulb.lit{

      box-shadow:
        0 0 40px
        rgba(255,220,70,.5);

      border-color:
        #65f28b;

    }


    .circuit-controls{

      display:flex;

      flex-wrap:wrap;

      justify-content:center;

      gap:8px;

      margin-top:18px;

    }


    /* MAGNETIC MAZE */

    .maze{

      position:relative;

      width:100%;

      height:390px;

      overflow:hidden;

      border:
        1px solid
        rgba(255,255,255,.10);

      border-radius:20px;

      background:
        #08110c;

    }


    .maze-wall{

      position:absolute;

      background:
        rgba(101,242,139,.12);

      border:
        1px solid
        rgba(101,242,139,.25);

      border-radius:8px;

    }


    .wall1{

      left:25%;
      top:15%;

      width:10%;
      height:55%;

    }


    .wall2{

      left:48%;
      top:45%;

      width:12%;
      height:40%;

    }


    .wall3{

      left:70%;
      top:18%;

      width:9%;
      height:45%;

    }


    .maze-magnet{

      position:absolute;

      width:44px;
      height:44px;

      display:grid;
      place-items:center;

      border-radius:50%;

      background:
        #19231d;

      border:
        1px solid
        rgba(255,255,255,.18);

      color:#65f28b;

      font-weight:800;

    }


    .magnet1{

      left:38%;
      top:20%;

    }


    .magnet2{

      left:65%;
      top:70%;

    }


    .maze-player{

      position:absolute;

      width:30px;
      height:30px;

      display:grid;
      place-items:center;

      color:#65f28b;

      font-size:28px;

      transform:
        translate(-50%,-50%);

      transition:.15s;

    }


    .maze-target{

      position:absolute;

      color:#65f28b;

      font-size:28px;

      transform:
        translate(-50%,-50%);

    }


    .maze-controls{

      margin-top:15px;

      text-align:center;

    }


    /* LENS */

    .lens-lab{

      position:relative;

      height:300px;

      border:
        1px solid
        rgba(255,255,255,.10);

      border-radius:20px;

      background:
        #08110c;

      overflow:hidden;

    }


    .lens-axis{

      position:absolute;

      left:8%;
      right:8%;
      top:50%;

      height:1px;

      background:
        rgba(101,242,139,.35);

    }


    .lens-object,
    .lens-image{

      position:absolute;

      top:50%;

      color:#65f28b;

      font-size:48px;

      transform:
        translate(-50%,-50%);

    }


    .lens-shape{

      position:absolute;

      left:50%;
      top:50%;

      transform:
        translate(-50%,-50%);

      color:#d9eee0;

      font-size:95px;

      opacity:.35;

    }


    .sg-slider-label{

      display:block;

      margin-top:18px;

      color:#aeb8af;

      font-size:11px;

    }


    .sg-slider-label input{

      display:block;

      width:100%;

      margin-top:10px;

    }


    /* MOLECULE */

    .molecule-target{

      display:flex;

      align-items:center;

      justify-content:space-between;

      padding:16px;

      border:
        1px solid
        rgba(255,255,255,.10);

      border-radius:14px;

      background:
        rgba(101,242,139,.04);

      color:#cdd7cf;

    }


    .molecule-target strong{

      color:#65f28b;

      font-size:20px;

    }


    .atom-options,
    .molecule-slots{

      display:flex;

      flex-wrap:wrap;

      justify-content:center;

      gap:10px;

      margin-top:20px;

    }


    .atom-button{

      width:55px;
      height:55px;

      border-radius:50%;

      border:
        1px solid
        rgba(101,242,139,.3);

      background:
        rgba(101,242,139,.08);

      color:#65f28b;

      font-size:18px;

      font-weight:800;

      cursor:pointer;

    }


    .molecule-slots span{

      width:58px;
      height:58px;

      display:grid;
      place-items:center;

      border:
        1px solid
        rgba(255,255,255,.15);

      border-radius:50%;

      background:#111b15;

      color:#f4f5ef;

      font-weight:800;

    }


    /* REACTION */

    .reaction-question{

      padding:30px;

      text-align:center;

      border:
        1px solid
        rgba(255,255,255,.10);

      border-radius:18px;

      color:#65f28b;

      font-size:28px;

      font-weight:700;

    }


    .reaction-options{

      display:grid;

      grid-template-columns:
        repeat(3,1fr);

      gap:10px;

      margin-top:16px;

    }


    .reaction-option{

      padding:16px;

      border:
        1px solid
        rgba(255,255,255,.12);

      border-radius:12px;

      background:
        rgba(255,255,255,.
