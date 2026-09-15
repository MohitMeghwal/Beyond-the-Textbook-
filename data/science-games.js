/* =========================================================
   SCIENCE BEYOND THE TEXTBOOK
   SCIENCE GAMES ENGINE
   =========================================================

   TOTAL GAMES : 22
   PLAYABLE    : 12
   COMING SOON : 10

   PHYSICS
   1. Circuit Builder
   2. Magnetic Maze
   3. Light & Lens
   4. Gravity Challenge
   5. Balance It
   6. Orbital Motion
   7. Sound Wave Lab

   CHEMISTRY
   8. Build the Molecule
   9. Reaction Match
   10. Atomic Structure
   11. Energy of Reactions
   12. States of Matter

   BIOLOGY
   13. Build a Cell
   14. Human Body Explorer
   15. Plant Transport
   16. Microbe Detective
   17. DNA Match

   EARTH & SPACE
   18. Planet Builder
   19. Weather Maker
   20. Moon Phases
   21. Inside the Earth
   22. Solar System Explorer

   ========================================================= */


/* =========================================================
   GAME DATA
   ========================================================= */

const scienceGames = [

  /* ========================= PHYSICS ========================= */

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
      hi: "विद्युत घटकों को सही ढंग से जोड़कर परिपथ पूरा करें।"
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
      en: "Use magnetic forces to guide the particle to the target.",
      hi: "चुंबकीय बल का उपयोग करके कण को लक्ष्य तक पहुँचाएँ।"
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
      en: "Explore how object distance changes the image formed by a convex lens.",
      hi: "समझें कि वस्तु की दूरी बदलने से उत्तल लेंस द्वारा बनी छवि कैसे बदलती है।"
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
      en: "Discover how force and distance affect rotational balance.",
      hi: "जानें कि बल और दूरी घूर्णीय संतुलन को कैसे प्रभावित करते हैं।"
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


  /* ========================= CHEMISTRY ========================= */

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
      hi: "अणु बनाने के लिए परमाणुओं को सही क्रम में जोड़ें।"
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
      en: "Build an atom by selecting the correct numbers of particles.",
      hi: "कणों की सही संख्या चुनकर परमाणु बनाएँ।"
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


  /* ========================= BIOLOGY ========================= */

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
      hi: "मानव शरीर की प्रमुख प्रणालियों को समझें और उनके कार्य जानें।"
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


  /* ========================= EARTH & SPACE ========================= */

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
      hi: "ग्रह की परिस्थितियाँ बदलकर देखें कि वे किसी विश्व को कैसे प्रभावित करती हैं।"
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
      hi: "वायुमंडलीय परिस्थितियाँ बदलकर विभिन्न मौसम प्रतिरूप देखें।"
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

    if(typeof value === "string"){
      return value;
    }

    return value[currentLanguage] ||
           value.en ||
           "";

  }


  /* =======================================================
     HELPERS
     ======================================================= */

  function escapeHTML(value){

    return String(value)
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;")
      .replace(/'/g,"&#039;");

  }


  function makeText(en,hi){

    return {
      en: en,
      hi: hi
    };

  }


  function statusBox(){

    return `<div class="sg-status"></div>`;

  }


  function setStatus(message,success){

    const el =
      gameRoot &&
      gameRoot.querySelector(".sg-status");

    if(!el) return;

    el.textContent = message;

    el.classList.toggle(
      "success",
      !!success
    );

  }


  function shuffle(array){

    const copy = array.slice();

    for(
      let i = copy.length - 1;
      i > 0;
      i--
    ){

      const j =
        Math.floor(
          Math.random() * (i + 1)
        );

      const temp = copy[i];

      copy[i] = copy[j];

      copy[j] = temp;

    }

    return copy;

  }


  /* =======================================================
     GAME SHELL
     ======================================================= */

  function createShell(game){

    closeGame();

    gameOverlay =
      document.createElement("div");

    gameOverlay.id =
      "scienceGameOverlay";

    gameOverlay.innerHTML = `

      <div class="sg-backdrop"></div>

      <div class="sg-window">

        <div class="sg-header">

          <div class="sg-header-info">

            <div class="sg-kicker">
              SCIENCE GAME
            </div>

            <h2 class="sg-title">
              ${escapeHTML(text(game.title))}
            </h2>

            <div class="sg-concept">
              ${escapeHTML(text(game.concept))}
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

    document.body.classList.add(
      "sg-game-open"
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
      }catch(error){}

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

    document.body.classList.remove(
      "sg-game-open"
    );

  }


  /* =======================================================
     1. CIRCUIT BUILDER
     ======================================================= */

  function circuitBuilder(game){

    createShell(game);

    gameRoot.innerHTML = `

      <div class="sg-intro">
        ${text(makeText(
          "Build a closed circuit by connecting all three gaps.",
          "तीनों अंतरालों को जोड़कर एक बंद परिपथ बनाएँ।"
        ))}
      </div>

      <div class="circuit-board">

        <div class="circuit-wire-line top-line"></div>
        <div class="circuit-wire-line bottom-line"></div>

        <div class="circuit-component battery">
          <span>🔋</span>
          <small>${text(makeText("Battery","बैटरी"))}</small>
        </div>

        <div class="circuit-component switch">
          <span>⏻</span>
          <small>${text(makeText("Switch","स्विच"))}</small>
        </div>

        <div class="circuit-component bulb">
          <span>💡</span>
          <small>${text(makeText("Bulb","बल्ब"))}</small>
        </div>

      </div>

      <div class="circuit-controls">

        <button
          class="sg-button circuit-connect"
          data-part="battery-switch"
        >
          ${text(makeText(
            "Battery → Switch",
            "बैटरी → स्विच"
          ))}
        </button>

        <button
          class="sg-button circuit-connect"
          data-part="switch-bulb"
        >
          ${text(makeText(
            "Switch → Bulb",
            "स्विच → बल्ब"
          ))}
        </button>

        <button
          class="sg-button circuit-connect"
          data-part="bulb-battery"
        >
          ${text(makeText(
            "Bulb → Battery",
            "बल्ब → बैटरी"
          ))}
        </button>

      </div>

      ${statusBox()}

    `;

    const connected =
      new Set();

    gameRoot
      .querySelectorAll(".circuit-connect")
      .forEach(button => {

        button.addEventListener(
          "click",
          function(){

            const part =
              this.dataset.part;

            connected.add(part);

            this.classList.add(
              "selected"
            );

            if(
              connected.size === 3
            ){

              gameRoot
                .querySelector(".bulb")
                .classList.add("lit");

              setStatus(
                text(makeText(
                  "Circuit complete! The closed path allows current to flow.",
                  "परिपथ पूरा हो गया! बंद मार्ग विद्युत धारा के प्रवाह की अनुमति देता है।"
                )),
                true
              );

            }else{

              setStatus(
                text(makeText(
                  "Connections completed: " +
                  connected.size +
                  "/3",
                  "पूर्ण किए गए संयोजन: " +
                  connected.size +
                  "/3"
                ))
              );

            }

          }
        );

      });

  }
function circuitBuilder(game){

    createShell(game);

    /* ---- terminal coordinates on a 400x300 board ---- */

    const T = {
      battPos:    { x: 70,  y: 145 },
      battNeg:    { x: 70,  y: 235 },
      swLeft:     { x: 150, y: 60  },
      swRight:    { x: 250, y: 60  },
      bulbTop:    { x: 330, y: 145 },
      bulbBottom: { x: 330, y: 235 }
    };

    function pairKey(a,b){
      return [a,b].sort().join("|");
    }

    const REQUIRED = [
      pairKey("battPos","swLeft"),
      pairKey("swRight","bulbTop"),
      pairKey("bulbBottom","battNeg")
    ];

    const LEVELS = [
      {
        instruction: makeText(
          "Terminal (gol bindu) par tap karo, phir doosre terminal par tap karo — battery, switch aur bulb ko jodkar circuit poora karo.",
          "टर्मिनल (गोल बिंदु) पर टैप करो, फिर दूसरे टर्मिनल पर टैप करो — बैटरी, स्विच और बल्ब को जोड़कर परिपथ पूरा करो।"
        ),
        initialGood: [],
        initialBroken: [],
        switchLocked: true,
        switchStart: true
      },
      {
        instruction: makeText(
          "Pehle circuit poora jodo, phir neeche diye switch button se use band (close) karo — tabhi bulb jalega.",
          "पहले परिपथ पूरा जोड़ो, फिर नीचे दिए स्विच बटन से उसे बंद करो — तभी बल्ब जलेगा।"
        ),
        initialGood: [],
        initialBroken: [],
        switchLocked: false,
        switchStart: false
      },
      {
        instruction: makeText(
          "Do connections theek hain, ek toota (broken) hai — use dhoondo aur wahi terminal jodkar theek karo.",
          "दो कनेक्शन ठीक हैं, एक टूटा है — उसे ढूंढो और वही टर्मिनल जोड़कर ठीक करो।"
        ),
        initialGood: [
          pairKey("battPos","swLeft"),
          pairKey("bulbBottom","battNeg")
        ],
        initialBroken: [
          pairKey("swRight","bulbTop")
        ],
        switchLocked: true,
        switchStart: true
      }
    ];

    let levelIndex = 0;
    let connections = {};
    let switchClosed = true;
    let selected = null;
    let wrongAttempt = false;

    function loadLevel(index){

      const level = LEVELS[index];

      connections = {};

      level.initialGood.forEach(key => { connections[key] = "good"; });
      level.initialBroken.forEach(key => { connections[key] = "broken"; });

      switchClosed = level.switchStart;
      selected = null;
      wrongAttempt = false;

      render();

    }

    function isComplete(){

      const wiresDone = REQUIRED.every(key => connections[key] === "good");

      return wiresDone && switchClosed;

    }

    function line(p1,p2,cls){

      return `<line x1="${T[p1].x}" y1="${T[p1].y}" x2="${T[p2].x}" y2="${T[p2].y}" class="${cls}"/>`;

    }

    function render(){

      const level = LEVELS[levelIndex];

      let wiresSvg = "";

      REQUIRED.forEach(key => {

        const [a,b] = key.split("|");
        const state = connections[key];

        if(state === "good"){
          wiresSvg += line(a,b,"circuit-wire wire-good");
        }else if(state === "broken"){
          wiresSvg += line(a,b,"circuit-wire wire-broken");
        }

      });

      const complete = isComplete();

      gameRoot.innerHTML = `

        <div class="sg-intro">${text(level.instruction)}</div>

        <div class="circuit-level-bar">
          ${LEVELS.map((l,i)=>`<span class="circuit-dot ${i===levelIndex?'active':''} ${i<levelIndex?'done':''}"></span>`).join("")}
          <small>${text(makeText("Level","स्तर"))} ${levelIndex+1} / ${LEVELS.length}</small>
        </div>

        <div class="circuit-board-v2">

          <svg viewBox="0 0 400 300" class="circuit-svg">

            ${wiresSvg}

            <line x1="${T.swLeft.x}" y1="${T.swLeft.y}" x2="${T.swRight.x}" y2="${T.swRight.y}"
              class="switch-lever ${switchClosed ? 'closed' : 'open'}"/>

            <text x="70" y="192" class="circuit-emoji" text-anchor="middle">🔋</text>
            <text x="330" y="192" class="circuit-emoji ${complete ? 'bulb-lit':''}" text-anchor="middle">💡</text>

            ${Object.keys(T).map(id => `
              <g class="term-group" data-id="${id}">
                <circle cx="${T[id].x}" cy="${T[id].y}" r="24" class="term-hit"></circle>
                <circle cx="${T[id].x}" cy="${T[id].y}" r="10" class="term-dot ${selected===id?'selected':''}"></circle>
              </g>
            `).join("")}

          </svg>

        </div>

        ${level.switchLocked ? "" : `
          <button class="sg-button circuit-switch-btn" id="switchToggle">
            ${switchClosed
              ? text(makeText("Switch: ON — tap to open","स्विच: चालू — बंद करने के लिए टैप करो"))
              : text(makeText("Switch: OFF — tap to close","स्विच: बंद — चालू करने के लिए टैप करो"))
            }
          </button>
        `}

        ${statusBox()}

      `;

      gameRoot.querySelectorAll(".term-group").forEach(group => {

        group.addEventListener("click", function(){
          handleTerminalTap(this.dataset.id);
        });

      });

      const toggleBtn = gameRoot.querySelector("#switchToggle");

      if(toggleBtn){

        toggleBtn.addEventListener("click", function(){
          switchClosed = !switchClosed;
          render();
        });

      }

      if(complete){

        if(levelIndex === LEVELS.length - 1){

          setStatus(
            text(makeText(
              "Circuit poora! Sabhi levels complete — tumne current, switch aur broken wire dhoondna seekh liya.",
              "परिपथ पूरा! सभी स्तर पूरे — तुमने धारा, स्विच और टूटा तार ढूंढना सीख लिया।"
            )),
            true
          );

        }else{

          setStatus(
            text(makeText(
              "Circuit poora! Current bulb tak pahunch raha hai.",
              "परिपथ पूरा! धारा बल्ब तक पहुँच रही है।"
            )),
            true
          );

          setTimeout(showNextButton, 600);

        }

      }else if(wrongAttempt){

        setStatus(
          text(makeText(
            "Ye connection sahi nahi hai. Dusra terminal try karo.",
            "यह कनेक्शन सही नहीं है। दूसरा टर्मिनल आज़माओ।"
          ))
        );

        wrongAttempt = false;

      }else{

        setStatus(
          text(makeText(
            "Terminal (bindu) par tap karke connections jodo.",
            "टर्मिनल (बिंदु) पर टैप करके कनेक्शन जोड़ो।"
          ))
        );

      }

    }

    function showNextButton(){

      const box = gameRoot.querySelector(".sg-status");

      if(!box) return;

      const btn = document.createElement("button");

      btn.className = "sg-button circuit-next-btn";
      btn.textContent = text(makeText("Next Level →","अगला स्तर →"));

      btn.addEventListener("click", function(){
        levelIndex++;
        loadLevel(levelIndex);
      });

      box.insertAdjacentElement("afterend", btn);

    }

    function handleTerminalTap(id){

      if(isComplete()) return;

      if(selected === null){
        selected = id;
        render();
        return;
      }

      if(selected === id){
        selected = null;
        render();
        return;
      }

      const key = pairKey(selected, id);

      if(REQUIRED.includes(key)){
        connections[key] = "good";
        wrongAttempt = false;
      }else{
        wrongAttempt = true;
      }

      selected = null;

      render();

    }

    loadLevel(0);

}

  /* =======================================================
     2. MAGNETIC MAZE
     ======================================================= */

  function magneticMaze(game){

    createShell(game);

    gameRoot.innerHTML = `

      <div class="sg-intro">
        ${text(makeText(
          "Guide the particle through the maze and reach the star.",
          "कण को भूलभुलैया से निकालकर तारे तक पहुँचाएँ।"
        ))}
      </div>

      <div
        class="magnetic-maze"
        id="magneticMaze"
      >

        <div class="maze-wall mw1"></div>
        <div class="maze-wall mw2"></div>
        <div class="maze-wall mw3"></div>
        <div class="maze-wall mw4"></div>

        <div class="maze-magnet magnet-n">
          N
        </div>

        <div class="maze-magnet magnet-s">
          S
        </div>

        <div
          class="maze-player"
          id="mazePlayer"
        >
          ●
        </div>

        <div
          class="maze-target"
          id="mazeTarget"
        >
          ★
        </div>

      </div>

      <div class="maze-controls">

        <button class="sg-button" data-dir="up">↑</button>

        <div>
          <button class="sg-button" data-dir="left">←</button>
          <button class="sg-button" data-dir="down">↓</button>
          <button class="sg-button" data-dir="right">→</button>
        </div>

      </div>

      ${statusBox()}

    `;

    const player =
      gameRoot.querySelector(
        "#mazePlayer"
      );

    const target =
      gameRoot.querySelector(
        "#mazeTarget"
      );

    let x = 9;
    let y = 10;

    const targetX = 88;
    const targetY = 84;

    function render(){

      player.style.left =
        x + "%";

      player.style.top =
        y + "%";

      const distance =
        Math.hypot(
          targetX - x,
          targetY - y
        );

      if(distance < 8){

        setStatus(
          text(makeText(
            "Target reached! Magnetic fields can influence the motion of magnetic materials.",
            "लक्ष्य प्राप्त! चुंबकीय क्षेत्र चुंबकीय पदार्थों की गति को प्रभावित कर सकते हैं।"
          )),
          true
        );

      }

    }

    function move(direction){

      const step = 6;

      if(direction === "up"){
        y -= step;
      }

      if(direction === "down"){
        y += step;
      }

      if(direction === "left"){
        x -= step;
      }

      if(direction === "right"){
        x += step;
      }

      x =
        Math.max(
          6,
          Math.min(93,x)
        );

      y =
        Math.max(
          7,
          Math.min(91,y)
        );

      render();

    }

    gameRoot
      .querySelectorAll("[data-dir]")
      .forEach(button => {

        button.addEventListener(
          "click",
          function(){

            move(
              this.dataset.dir
            );

          }
        );

      });

    function keyHandler(event){

      const map = {
        ArrowUp:"up",
        ArrowDown:"down",
        ArrowLeft:"left",
        ArrowRight:"right"
      };

      if(map[event.key]){

        event.preventDefault();

        move(map[event.key]);

      }

    }

    document.addEventListener(
      "keydown",
      keyHandler
    );

    cleanupFunction = function(){

      document.removeEventListener(
        "keydown",
        keyHandler
      );

    };

    target.style.left =
      targetX + "%";

    target.style.top =
      targetY + "%";

    render();

  }


  /* =======================================================
     3. LIGHT & LENS
     ======================================================= */

  function lightLens(game){

    createShell(game);

    gameRoot.innerHTML = `

      <div class="sg-intro">
        ${text(makeText(
          "Move the object and observe how a convex lens changes the image.",
          "वस्तु को स्थानांतरित करें और देखें कि उत्तल लेंस छवि को कैसे बदलता है।"
        ))}
      </div>

      <div class="lens-lab">

        <div class="lens-axis"></div>

        <div class="lens-focus left-focus">
          F
        </div>

        <div class="lens-focus right-focus">
          F
        </div>

        <div
          class="lens-object"
          id="lensObject"
        >
          ▲
        </div>

        <div class="convex-lens">
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

        <span>
          ${text(makeText(
            "Object distance",
            "वस्तु की दूरी"
          ))}
        </span>

        <input
          id="lensSlider"
          type="range"
          min="10"
          max="85"
          value="65"
        >

      </label>

      <div class="lens-reading" id="lensReading"></div>

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

    const reading =
      gameRoot.querySelector(
        "#lensReading"
      );

    function update(){

      const distance =
        Number(slider.value);

      object.style.left =
        distance + "%";

      const relative =
        (distance - 10) / 75;

      const imagePosition =
        38 - relative * 22;

      image.style.left =
        Math.max(
          8,
          Math.min(38,imagePosition)
        ) + "%";

      let type;

      if(distance > 58){

        type = makeText(
          "Real and inverted image region",
          "实像 और उलटी छवि का क्षेत्र"
        );

      }else if(distance > 38){

        type = makeText(
          "Image position changes rapidly near the focal region.",
          "फोकस क्षेत्र के पास छवि की स्थिति तेजी से बदलती है।"
        );

      }else{

        type = makeText(
          "Object is close to the lens.",
          "वस्तु लेंस के पास है।"
        );

      }

      reading.textContent =
        text(type);

      setStatus(
        text(makeText(
          "Changing object distance changes the position and size of the image.",
          "वस्तु की दूरी बदलने से छवि की स्थिति और आकार बदलते हैं।"
        ))
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
        name: makeText("Water","जल"),
        formula: "H₂O",
        atoms: ["H","O","H"]
      },

      {
        name: makeText(
          "Carbon Dioxide",
          "कार्बन डाइऑक्साइड"
        ),
        formula: "CO₂",
        atoms: ["C","O","O"]
      },

      {
        name: makeText(
          "Ammonia",
          "अमोनिया"
        ),
        formula: "NH₃",
        atoms: ["N","H","H","H"]
      },

      {
        name: makeText(
          "Oxygen",
          "ऑक्सीजन"
        ),
        formula: "O₂",
        atoms: ["O","O"]
      }

    ];

    const target =
      molecules[
        Math.floor(
          Math.random() *
          molecules.length
        )
      ];

    const options =
      shuffle(
        Array.from(
          new Set(target.atoms)
        )
      );

    gameRoot.innerHTML = `

      <div class="sg-intro">
        ${text(makeText(
          "Select atoms until the target molecule is complete.",
          "लक्ष्य अणु पूरा होने तक परमाणुओं का चयन करें।"
        ))}
      </div>

      <div class="molecule-target">

        <div>
          <small>
            ${text(makeText(
              "TARGET",
              "लक्ष्य"
            ))}
          </small>

          <strong>
            ${text(target.name)}
          </strong>
        </div>

        <span>
          ${target.formula}
        </span>

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
        ${text(makeText(
          "Reset",
          "पुनः प्रारंभ करें"
        ))}
      </button>

      ${statusBox()}

    `;

    const atomOptions =
      gameRoot.querySelector(
        "#atomOptions"
      );

    const slots =
      gameRoot.querySelector(
        "#moleculeSlots"
      );

    let selected = [];

    options.forEach(atom => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "atom-button";

      button.textContent =
        atom;

      button.addEventListener(
        "click",
        function(){

          if(
            selected.length >=
            target.atoms.length
          ){
            return;
          }

          selected.push(atom);

          renderSlots();

          if(
            selected.length ===
            target.atoms.length
          ){

            const sortedSelected =
              selected
                .slice()
                .sort()
                .join("");

            const sortedTarget =
              target.atoms
                .slice()
                .sort()
                .join("");

            if(
              sortedSelected ===
              sortedTarget
            ){

              setStatus(
                text(makeText(
                  "Correct! You built " +
                  target.formula +
                  ".",
                  "सही! आपने " +
                  target.formula +
                  " बनाया।"
                )),
                true
              );

            }else{

              setStatus(
                text(makeText(
                  "The atoms do not match the target molecule. Reset and try again.",
                  "परमाणु लक्ष्य अणु से मेल नहीं खाते। पुनः प्रारंभ करके फिर प्रयास करें।"
                ))
              );

            }

          }

        }
      );

      atomOptions.appendChild(
        button
      );

    });

    function renderSlots(){

      slots.innerHTML = "";

      selected.forEach(atom => {

        const span =
          document.createElement(
            "span"
          );

        span.textContent =
          atom;

        slots.appendChild(
          span
        );

      });

    }

    gameRoot
      .querySelector(
        "#moleculeReset"
      )
      .addEventListener(
        "click",
        function(){
          buildMolecule(game);
        }
      );

  }


  /* =======================================================
     5. REACTION MATCH
     ======================================================= */

  function reactionMatch(game){

    createShell(game);

    const reactions = [

      {
        left: "H₂ + O₂",
        right: "H₂O"
      },

      {
        left: "Na + Cl₂",
        right: "NaCl"
      },

      {
        left: "C + O₂",
        right: "CO₂"
      },

      {
        left: "CaCO₃",
        right: "CaO + CO₂"
      },

      {
        left: "Mg + O₂",
        right: "MgO"
      }

    ];

    const questions =
      shuffle(reactions);

    let index = 0;
    let score = 0;

    gameRoot.innerHTML = `

      <div class="sg-intro">
        ${text(makeText(
          "Choose the product that matches the reactants.",
          "अभिकारकों से मेल खाने वाला सही उत्पाद चुनें।"
        ))}
      </div>

      <div
        class="reaction-score"
        id="reactionScore"
      >
        0 / ${questions.length}
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

      const scoreBox =
        gameRoot.querySelector(
          "#reactionScore"
        );

      scoreBox.textContent =
        score +
        " / " +
        questions.length;

      if(index >= questions.length){

        gameRoot.querySelector(
          "#reactionQuestion"
        ).textContent =
          text(makeText(
            "Challenge Complete!",
            "चुनौती पूरी!"
          ));

        gameRoot.querySelector(
          "#reactionOptions"
        ).innerHTML = "";

        setStatus(
          text(makeText(
            "Excellent! You matched " +
            score +
            " out of " +
            questions.length +
            " reactions.",
            "बहुत बढ़िया! आपने " +
            questions.length +
            " में से " +
            score +
            " अभिक्रियाओं का सही मिलान किया।"
          )),
          true
        );

        return;

      }

      const current =
        questions[index];

      gameRoot.querySelector(
        "#reactionQuestion"
      ).textContent =
        current.left +
        "  →  ?";

      const wrong =
        reactions
          .filter(
            reaction =>
              reaction.right !==
              current.right
          )
          .map(
            reaction =>
              reaction.right
          );

      const options =
        shuffle([
          current.right,
          ...shuffle(wrong).slice(0,2)
        ]);

      const box =
        gameRoot.querySelector(
          "#reactionOptions"
        );

      box.innerHTML = "";

      options.forEach(option => {

        const button =
          document.createElement(
            "button"
          );

        button.className =
          "reaction-option";

        button.textContent =
          option;

        button.addEventListener(
          "click",
          function(){

            if(
              option ===
              current.right
            ){

              score++;

              setStatus(
                text(makeText(
                  "Correct!",
                  "सही!"
                )),
                true
              );

              index++;

              setTimeout(
                render,
                350
              );

            }else{

              setStatus(
                text(makeText(
                  "Try again. Think about which atoms are present in the reactants.",
                  "फिर प्रयास करें। सोचें कि अभिकारकों में कौन से परमाणु मौजूद हैं।"
                ))
              );

            }

          }
        );

        box.appendChild(
          button
        );

      });

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
        name: makeText(
          "Hydrogen",
          "हाइड्रोजन"
        ),
        symbol: "H",
        protons: 1,
        neutrons: 0,
        electrons: 1
      },

      {
        name: makeText(
          "Carbon",
          "कार्बन"
        ),
        symbol: "C",
        protons: 6,
        neutrons: 6,
        electrons: 6
      },

      {
        name: makeText(
          "Oxygen",
          "ऑक्सीजन"
        ),
        symbol: "O",
        protons: 8,
        neutrons: 8,
        electrons: 8
      },

      {
        name: makeText(
          "Sodium",
          "सोडियम"
        ),
        symbol: "Na",
        protons: 11,
        neutrons: 12,
        electrons: 11
      },

      {
        name: makeText(
          "Magnesium",
          "मैग्नीशियम"
        ),
        symbol: "Mg",
        protons: 12,
        neutrons: 12,
        electrons: 12
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
        ${text(makeText(
          "Build the target atom using the correct numbers of protons, neutrons and electrons.",
          "प्रोटॉन, न्यूट्रॉन और इलेक्ट्रॉन की सही संख्या चुनकर लक्ष्य परमाणु बनाएँ।"
        ))}
      </div>

      <div class="atom-target-card">

        <span>
          ${text(makeText(
            "TARGET ATOM",
            "लक्ष्य परमाणु"
          ))}
        </span>

        <strong>
          ${text(target.name)}
        </strong>

        <b>
          ${target.symbol}
        </b>

      </div>

      <div class="particle-controls">

        <label>
          ${text(makeText(
            "Protons",
            "प्रोटॉन"
          ))}

          <div class="number-control">

            <button data-particle="p" data-change="-1">
              −
            </button>

            <span id="protonValue">0</span>

            <button data-particle="p" data-change="1">
              +
            </button>

          </div>
        </label>

        <label>
          ${text(makeText(
            "Neutrons",
            "न्यूट्रॉन"
          ))}

          <div class="number-control">

            <button data-particle="n" data-change="-1">
              −
            </button>

            <span id="neutronValue">0</span>

            <button data-particle="n" data-change="1">
              +
            </button>

          </div>
        </label>

        <label>
          ${text(makeText(
            "Electrons",
            "इलेक्ट्रॉन"
          ))}

          <div class="number-control">

            <button data-particle="e" data-change="-1">
              −
            </button>

            <span id="electronValue">0</span>

            <button data-particle="e" data-change="1">
              +
            </button>

          </div>
        </label>

      </div>

      <button
        class="sg-button"
        id="checkAtom"
      >
        ${text(makeText(
          "Check Atom",
          "परमाणु जाँचें"
        ))}
      </button>

      ${statusBox()}

    `;

    const particles = {
      p: 0,
      n: 0,
      e: 0
    };

    function updateDisplay(){

      gameRoot.querySelector(
        "#protonValue"
      ).textContent =
        particles.p;

      gameRoot.querySelector(
        "#neutronValue"
      ).textContent =
        particles.n;

      gameRoot.querySelector(
        "#electronValue"
      ).textContent =
        particles.e;

    }

    gameRoot
      .querySelectorAll(
        "[data-particle]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          function(){

            const key =
              this.dataset.particle;

            const change =
              Number(
                this.dataset.change
              );

            particles[key] =
              Math.max(
                0,
                Math.min(
                  20,
                  particles[key] +
                  change
                )
              );

            updateDisplay();

          }
        );

      });

    gameRoot
      .querySelector(
        "#checkAtom"
      )
      .addEventListener(
        "click",
        function(){

          if(
            particles.p === target.protons &&
            particles.n === target.neutrons &&
            particles.e === target.electrons
          ){

            setStatus(
              text(makeText(
                "Correct! You built the target atom.",
                "सही! आपने लक्ष्य परमाणु बना लिया।"
              )),
              true
            );

          }else{

            setStatus(
              text(makeText(
                "The particle counts do not match. Adjust them and try again.",
                "कणों की संख्या मेल नहीं खाती। उन्हें बदलकर फिर प्रयास करें।"
              ))
            );

          }

        }
      );

    updateDisplay();

  }


  /* =======================================================
     7. BUILD A CELL
     ======================================================= */

  function buildCell(game){

    createShell(game);

    const organelles = [

      {
        id: "nucleus",
        name: makeText(
          "Nucleus",
          "केंद्रक"
        )
      },

      {
        id: "mitochondria",
        name: makeText(
          "Mitochondrion",
          "माइटोकॉन्ड्रिया"
        )
      },

      {
        id: "ribosome",
        name: makeText(
          "Ribosome",
          "राइबोसोम"
        )
      },

      {
        id: "vacuole",
        name: makeText(
          "Vacuole",
          "रसधानी"
        )
      }

    ];

    gameRoot.innerHTML = `

      <div class="sg-intro">
        ${text(makeText(
          "Select each organelle to place it inside the cell.",
          "प्रत्येक कोशिकांग का चयन करके उसे कोशिका के अंदर रखें।"
        ))}
      </div>

      <div class="cell-board">

        <div class="cell-membrane">

          <div
            class="cell-organelle nucleus-zone"
            data-organelle="nucleus"
          >
            N
          </div>

          <div
            class="cell-organelle mito-zone"
            data-organelle="mitochondria"
          >
            M
          </div>

          <div
            class="cell-organelle ribo-zone"
            data-organelle="ribosome"
          >
            R
          </div>

          <div
            class="cell-organelle vacuole-zone"
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

    organelles.forEach(item => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "cell-option";

      button.textContent =
        text(item.name);

      button.addEventListener(
        "click",
        function(){

          selected.add(
            item.id
          );

          this.classList.add(
            "selected"
          );

          const zone =
            gameRoot.querySelector(
              `[data-organelle="${item.id}"]`
            );

          if(zone){
            zone.classList.add(
              "active"
            );
          }

          if(
            selected.size ===
            organelles.length
          ){

            setStatus(
              text(makeText(
                "Cell assembled! The nucleus stores genetic information, mitochondria are involved in energy release, ribosomes make proteins, and vacuoles store substances.",
                "कोशिका तैयार है! केंद्रक आनुवंशिक जानकारी रखता है, माइटोकॉन्ड्रिया ऊर्जा मुक्त करने में शामिल होते हैं, राइबोसोम प्रोटीन बनाते हैं और रसधानियाँ पदार्थों का भंडारण करती हैं।"
              )),
              true
            );

          }

        }
      );

      options.appendChild(
        button
      );

    });

  }


  /* =======================================================
     8. HUMAN BODY EXPLORER
     ======================================================= */

  function humanBodyExplorer(game){

    createShell(game);

    const systems = [

      {
        id: "circulatory",
        name: makeText(
          "Circulatory System",
          "रक्त परिसंचरण तंत्र"
        ),
        icon: "❤️",
        description: makeText(
          "Transports blood, oxygen, nutrients and other substances around the body.",
          "शरीर में रक्त, ऑक्सीजन, पोषक पदार्थ और अन्य पदार्थों का परिवहन करता है।"
        )
      },

      {
        id: "respiratory",
        name: makeText(
          "Respiratory System",
          "श्वसन तंत्र"
        ),
        icon: "🫁",
        description: makeText(
          "Exchanges oxygen and carbon dioxide between the body and the environment.",
          "शरीर और वातावरण के बीच ऑक्सीजन और कार्बन डाइऑक्साइड का आदान-प्रदान करता है।"
        )
      },

      {
        id: "digestive",
        name: makeText(
          "Digestive System",
          "पाचन तंत्र"
        ),
        icon: "🫃",
        description: makeText(
          "Breaks food into smaller substances that the body can absorb and use.",
          "भोजन को छोटे पदार्थों में तोड़ता है जिन्हें शरीर अवशोषित और उपयोग कर सकता है।"
        )
      },

      {
        id: "nervous",
        name: makeText(
          "Nervous System",
          "तंत्रिका तंत्र"
        ),
        icon: "🧠",
        description: makeText(
          "Receives information and coordinates responses throughout the body.",
          "जानकारी प्राप्त करता है और पूरे शरीर में प्रतिक्रियाओं का समन्वय करता है।"
        )
      }

    ];

    gameRoot.innerHTML = `

      <div class="sg-intro">
        ${text(makeText(
          "Select a body system to explore its main function.",
          "किसी शरीर प्रणाली का चयन करके उसका मुख्य कार्य जानें।"
        ))}
      </div>

      <div
        class="body-explorer"
        id="bodyExplorer"
      >

        <div class="body-figure">
          <div class="body-head">◯</div>
          <div class="body-torso">◇</div>
          <div class="body-heart">♥</div>
          <div class="body-lung left">◐</div>
          <div class="body-lung right">◑</div>
        </div>

        <div
          class="body-system-grid"
          id="bodySystems"
        ></div>

      </div>

      <div
        class="body-info"
        id="bodyInfo"
      >
        ${text(makeText(
          "Select a system.",
          "किसी प्रणाली का चयन करें।"
        ))}
      </div>

      ${statusBox()}

    `;

    const grid =
      gameRoot.querySelector(
        "#bodySystems"
      );

    const info =
      gameRoot.querySelector(
        "#bodyInfo"
      );

    systems.forEach(system => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "body-system";

      button.innerHTML = `

        <span class="body-system-icon">
          ${system.icon}
        </span>

        <strong>
          ${escapeHTML(
            text(system.name)
          )}
        </strong>

      `;

      button.addEventListener(
        "click",
        function(){

          grid
            .querySelectorAll(
              ".body-system"
            )
            .forEach(
              item =>
                item.classList.remove(
                  "active"
                )
            );

          this.classList.add(
            "active"
          );

          info.innerHTML = `

            <strong>
              ${escapeHTML(
                text(system.name)
              )}
            </strong>

            <p>
              ${escapeHTML(
                text(system.description)
              )}
            </p>

          `;

          setStatus(
            text(makeText(
              "System selected. Explore another system to compare their functions.",
              "प्रणाली चुनी गई। उनके कार्यों की तुलना करने के लिए दूसरी प्रणाली चुनें।"
            ))
          );

        }
      );

      grid.appendChild(
        button
      );

    });

  }


  /* =======================================================
     9. PLANT TRANSPORT
     ======================================================= */

  function plantTransport(game){

    createShell(game);

    gameRoot.innerHTML = `

      <div class="sg-intro">
        ${text(makeText(
          "Move water from the roots to the leaves through the xylem.",
          "जाइलम के माध्यम से जल को जड़ों से पत्तियों तक पहुँचाएँ।"
        ))}
      </div>

      <div class="plant-lab">

        <div class="plant-canopy">
          🌿
        </div>

        <div class="plant-stem">

          <div class="xylem-line"></div>

          <div
            class="water-particle"
            id="waterParticle"
          >
            💧
          </div>

        </div>

        <div class="plant-roots">
          🌱
        </div>

      </div>

      <div class="plant-progress">

        <div
          id="plantProgress"
        ></div>

      </div>

      <button
        class="sg-button"
        id="moveWater"
      >
        ${text(makeText(
          "Move Water Up",
          "जल को ऊपर ले जाएँ"
        ))}
      </button>

      ${statusBox()}

    `;

    const particle =
      gameRoot.querySelector(
        "#waterParticle"
      );

    const progress =
      gameRoot.querySelector(
        "#plantProgress"
      );

    const button =
      gameRoot.querySelector(
        "#moveWater"
      );

    let position = 0;

    button.addEventListener(
      "click",
      function(){

        if(position >= 100){
          return;
        }

        position += 20;

        particle.style.bottom =
          position + "%";

        progress.style.width =
          position + "%";

        if(position >= 100){

          setStatus(
            text(makeText(
              "Water reached the leaves. Xylem transports water and mineral ions upward through the plant.",
              "जल पत्तियों तक पहुँच गया। जाइलम पौधे में जल और खनिज आयनों को ऊपर की ओर पहुँचाता है।"
            )),
            true
          );

        }else{

          setStatus(
            text(makeText(
              "Water is moving upward through the stem.",
              "जल तने के माध्यम से ऊपर की ओर बढ़ रहा है।"
            ))
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
        ${text(makeText(
          "Change planetary conditions and observe how the environment responds.",
          "ग्रह की परिस्थितियाँ बदलें और देखें कि वातावरण कैसे प्रतिक्रिया करता है।"
        ))}
      </div>

      <div
        class="planet-preview"
        id="planetPreview"
      >
        <div class="planet-globe">
          🌍
        </div>
      </div>

      <div class="planet-controls">

        <label>
          <span>
            ${text(makeText(
              "Temperature",
              "तापमान"
            ))}
          </span>

          <input
            id="planetTemperature"
            type="range"
            min="-50"
            max="100"
            value="20"
          >
        </label>

        <label>
          <span>
            ${text(makeText(
              "Water",
              "जल"
            ))}
          </span>

          <input
            id="planetWater"
            type="range"
            min="0"
            max="100"
            value="60"
          >
        </label>

        <label>
          <span>
            ${text(makeText(
              "Atmosphere",
              "वायुमंडल"
            ))}
          </span>

          <input
            id="planetAtmosphere"
            type="range"
            min="0"
            max="100"
            value="70"
          >
        </label>

      </div>

      <div
        class="planet-reading"
        id="planetReading"
      ></div>

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

    const reading =
      gameRoot.querySelector(
        "#planetReading"
      );

    function update(){

      const t =
        Number(temperature.value);

      const w =
        Number(water.value);

      const a =
        Number(atmosphere.value);

      preview.classList.toggle(
        "planet-dry",
        w < 25
      );

      preview.classList.toggle(
        "planet-hot",
        t > 70
      );

      preview.classList.toggle(
        "planet-cold",
        t < -20
      );

      preview.classList.toggle(
        "planet-thick",
        a > 80
      );

      let state;

      if(t > 70){

        state = makeText(
          "Very hot surface conditions",
          "बहुत गर्म सतही परिस्थितियाँ"
        );

      }else if(t < -20){

        state = makeText(
          "Very cold surface conditions",
          "बहुत ठंडी सतही परिस्थितियाँ"
        );

      }else if(w < 25){

        state = makeText(
          "Dry planetary environment",
          "शुष्क ग्रहीय वातावरण"
        );

      }else if(w > 70 && a > 60){

        state = makeText(
          "Water-rich atmosphere and surface",
          "जल-समृद्ध वातावरण और सतह"
        );

      }else{

        state = makeText(
          "Moderate planetary environment",
          "मध्यम ग्रहीय वातावरण"
        );

      }

      reading.textContent =
        text(state);

      setStatus(
        text(makeText(
          "Temperature, water and atmosphere all influence planetary conditions.",
          "तापमान, जल और वायुमंडल सभी ग्रहीय परिस्थितियों को प्रभावित करते हैं।"
        ))
      );

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
        ${text(makeText(
          "Adjust temperature, moisture and air movement to create different weather conditions.",
          "तापमान, नमी और वायु की गति बदलकर विभिन्न मौसम की परिस्थितियाँ बनाएँ।"
        ))}
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
          💧 💧 💧 💧
        </div>

      </div>

      <div class="weather-controls">

        <label>
          <span>
            ${text(makeText(
              "Temperature",
              "तापमान"
            ))}
          </span>

          <input
            id="weatherTemp"
            type="range"
            min="0"
            max="100"
            value="50"
          >
        </label>

        <label>
          <span>
            ${text(makeText(
              "Moisture",
              "नमी"
            ))}
          </span>

          <input
            id="weatherMoisture"
            type="range"
            min="0"
            max="100"
            value="50"
          >
        </label>

        <label>
          <span>
            ${text(makeText(
              "Air movement",
              "वायु की गति"
            ))}
          </span>

          <input
            id="weatherWind"
            type="range"
            min="0"
            max="100"
            value="40"
          >
        </label>

      </div>

      <div
        class="weather-reading"
        id="weatherReading"
      ></div>

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

    const reading =
      gameRoot.querySelector(
        "#weatherReading"
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

      let condition;

      if(
        m > 70 &&
        w > 55
      ){

        condition = makeText(
          "Rainy and windy conditions",
          "वर्षा और तेज़ हवा की परिस्थितियाँ"
        );

      }else if(
        m > 65
      ){

        condition = makeText(
          "Cloudy and potentially rainy",
          "बादल और वर्षा की संभावना"
        );

      }else if(
        t > 75
      ){

        condition = makeText(
          "Hot and relatively dry",
          "गर्म और अपेक्षाकृत शुष्क"
        );

      }else if(
        t < 25
      ){

        condition = makeText(
          "Cool conditions",
          "ठंडी परिस्थितियाँ"
        );

      }else{

        condition = makeText(
          "Moderate weather conditions",
          "मध्यम मौसम की परिस्थितियाँ"
        );

      }

      reading.textContent =
        text(condition);

      setStatus(
        text(makeText(
          "Weather results from interactions among temperature, moisture, pressure and air movement.",
          "मौसम तापमान, नमी, दाब और वायु की गति के बीच अंतःक्रियाओं से बनता है।"
        ))
      );

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
        ${text(makeText(
          "Move the Moon around Earth and observe how its visible phase changes.",
          "चंद्रमा को पृथ्वी के चारों ओर घुमाएँ और देखें कि उसकी दिखाई देने वाली कला कैसे बदलती है।"
        ))}
      </div>

      <div class="moon-lab">

        <div class="moon-sun">
          ☀️
        </div>

        <div class="moon-earth">
          🌍
        </div>

        <div class="moon-orbit"></div>

        <div
          class="moving-moon"
          id="movingMoon"
        >
          🌙
        </div>

      </div>

      <label class="sg-slider-label">

        <span>
          ${text(makeText(
            "Moon position",
            "चंद्रमा की स्थिति"
          ))}
        </span>

        <input
          id="moonSlider"
          type="range"
          min="0"
          max="359"
          value="0"
        >

      </label>

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

    const phaseName =
      gameRoot.querySelector(
        "#moonPhaseName"
      );

    const phases = [

      {
        start: 0,
        end: 22.5,
        en: "New Moon",
        hi: "अमावस्या"
      },

      {
        start: 22.5,
        end: 67.5,
        en: "Waxing Crescent",
        hi: "शुक्ल पक्ष की बढ़ती चंद्र कला"
      },

      {
        start: 67.5,
        end: 112.5,
        en: "First Quarter",
        hi: "प्रथम चतुर्थांश"
      },

      {
        start: 112.5,
        end: 157.5,
        en: "Waxing Gibbous",
        hi: "बढ़ता हुआ गिबस चंद्रमा"
      },

      {
        start: 157.5,
        end: 202.5,
        en: "Full Moon",
        hi: "पूर्णिमा"
      },

      {
        start: 202.5,
        end: 247.5,
        en: "Waning Gibbous",
        hi: "घटता हुआ गिबस चंद्रमा"
      },

      {
        start: 247.5,
        end: 292.5,
        en: "Third Quarter",
        hi: "तृतीय चतुर्थांश"
      },

      {
        start: 292.5,
        end: 337.5,
        en: "Waning Crescent",
        hi: "घटती चंद्र कला"
      },

      {
        start: 337.5,
        end: 360,
        en: "New Moon",
        hi: "अमावस्या"
      }

    ];

    function update(){

      const angle =
        Number(slider.value);

      const radians =
        angle *
        Math.PI /
        180;

      const radius = 105;

      const x =
        Math.cos(radians) *
        radius;

      const y =
        Math.sin(radians) *
        radius;

      moon.style.transform =
        `translate(${x}px, ${y}px)`;

      const phase =
        phases.find(
          item =>
            angle >= item.start &&
            angle < item.end
        ) ||
        phases[0];

      phaseName.textContent =
        currentLanguage === "hi"
          ? phase.hi
          : phase.en;

      setStatus(
        text(makeText(
          "The Moon reflects sunlight. As it orbits Earth, we see different illuminated portions.",
          "चंद्रमा सूर्य के प्रकाश को परावर्तित करता है। पृथ्वी की परिक्रमा करते समय हमें प्रकाशित भाग के अलग-अलग हिस्से दिखाई देते हैं।"
        ))
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

    all: function(){

      return scienceGames;

    },

    playable: function(){

      return scienceGames.filter(
        game =>
          game.status === "playable"
      );

    },

    comingSoon: function(){

      return scienceGames.filter(
        game =>
          game.status === "coming-soon"
      );

    },

    bySubject: function(subject){

      if(
        !subject ||
        subject === "all"
      ){

        return scienceGames;

      }

      return scienceGames.filter(
        game =>
          game.subject === subject
      );

    },

    get: function(id){

      return scienceGames.find(
        game =>
          game.id === id
      );

    },

    setLanguage: function(language){

      currentLanguage =
        language === "hi"
          ? "hi"
          : "en";

    },

    open: function(id,language){

      if(language){

        this.setLanguage(
          language
        );

      }

      const game =
        this.get(id);

      if(!game){

        console.warn(
          "ScienceGames: Game not found:",
          id
        );

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

        console.warn(
          "ScienceGames: No launcher:",
          id
        );

        return false;

      }

      launcher(game);

      return true;

    },

    close: function(){

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

        font-family:
          Inter,
          system-ui,
          sans-serif;

      }


      body.sg-game-open{

        overflow:hidden;

      }


      .sg-backdrop{

        position:absolute;
        inset:0;

        background:
          rgba(2,8,5,.88);

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
          rgba(0,0,0,.58);

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
          rgba(7,16,11,.94);

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

        margin-bottom:6px;

      }


      .sg-title{

        margin:0;

        font-family:
          Caveat,
          cursive;

        font-size:35px;

        line-height:1;

      }


      .sg-concept{

        margin-top:7px;

        color:#8e9c91;

        font-size:11px;

      }


      .sg-close{

        width:40px;
        height:40px;

        flex:0 0 auto;

        border-radius:50%;

        border:
          1px solid
          rgba(255,255,255,.14);

        background:
          rgba(255,255,255,.04);

        color:#eaf0eb;

        font-size:25px;

        cursor:pointer;

        transition:
          .18s ease;

      }


      .sg-close:hover{

        color:#65f28b;

        border-color:
          rgba(101,242,139,.45);

        transform:
          rotate(90deg);

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

        padding:10px 15px;

        font-size:11px;

        font-weight:800;

        cursor:pointer;

        transition:
          .18s ease;

      }


      .sg-button:hover,
      .sg-button.selected{

        background:#65f28b;

        color:#061008;

        transform:
          translateY(-1px);

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

        line-height:1.65;

      }


      .sg-status.success{

        color:#65f28b;

        border-color:
          rgba(101,242,139,.30);

        background:
          rgba(101,242,139,.06);

      }


      /* =====================================================
         CIRCUIT
         ===================================================== */

      .circuit-board{

        position:relative;

        min-height:260px;

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
          radial-gradient(
            circle at center,
            rgba(101,242,139,.06),
            transparent 55%
          ),
          #09120d;

      }


      .circuit-wire-line{

        position:absolute;

        height:2px;

        background:
          rgba(101,242,139,.15);

        left:10%;
        right:10%;

      }


      .top-line{

        top:25%;

      }


      .bottom-line{

        bottom:25%;

      }


      .circuit-component{

        position:relative;
        z-index:2;

        width:110px;
        height:110px;

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

        font-size:40px;

      }


      .circuit-component small{

        color:#8f9c92;

        font-size:10px;

      }


      .bulb.lit{

        border-color:#65f28b;

        box-shadow:
          0 0 35px
          rgba(255,220,70,.48);

      }


      .circuit-controls{

        display:flex;

        flex-wrap:wrap;

        justify-content:center;

        gap:8px;

        margin-top:18px;

      }
      /*

  .circuit-level-bar{
    display:flex;
    align-items:center;
    gap:6px;
    margin-bottom:14px;
    color:#8e9c91;
    font-size:10px;
  }

  .circuit-level-bar small{
    margin-left:6px;
  }

  .circuit-dot{
    width:8px;
    height:8px;
    border-radius:50%;
    background:rgba(255,255,255,.15);
  }

  .circuit-dot.active{
    background:#65f28b;
  }

  .circuit-dot.done{
    background:rgba(101,242,139,.5);
  }

  .circuit-board-v2{
    border:1px solid rgba(255,255,255,.10);
    border-radius:20px;
    background:radial-gradient(circle at center, rgba(101,242,139,.06), transparent 55%), #09120d;
    padding:10px;
  }

  .circuit-svg{
    width:100%;
    height:auto;
    display:block;
  }

  .term-hit{
    fill:rgba(0,0,0,.01);
    cursor:pointer;
  }

  .term-dot{
    fill:#111d15;
    stroke:rgba(255,255,255,.35);
    stroke-width:2;
    transition:.15s ease;
  }

  .term-dot.selected{
    fill:#65f28b;
    stroke:#65f28b;
  }

  .circuit-wire{
    stroke-linecap:round;
  }

  .wire-good{
    stroke:#65f28b;
    stroke-width:4;
  }

  .wire-broken{
    stroke:#ff6b6b;
    stroke-width:3;
    stroke-dasharray:6 6;
  }

  .switch-lever{
    stroke-width:4;
    stroke-linecap:round;
    transition:.2s ease;
  }

  .switch-lever.closed{
    stroke:#65f28b;
  }

  .switch-lever.open{
    stroke:#ff6b6b;
    stroke-dasharray:4 10;
  }

  .circuit-emoji{
    font-size:40px;
  }

  .bulb-lit{
    filter:drop-shadow(0 0 14px rgba(255,220,70,.9));
  }

  .circuit-switch-btn,
  .circuit-next-btn{
    display:block;
    width:100%;
    text-align:center;
    margin-top:14px;
  }

*/


      /* =====================================================
         MAGNETIC MAZE
         ===================================================== */

      .magnetic-maze{

        position:relative;

        width:100%;

        height:390px;

        overflow:hidden;

        border:
          1px solid
          rgba(255,255,255,.10);

        border-radius:20px;

        background:
          radial-gradient(
            circle at 50% 50%,
            rgba(101,242,139,.05),
            transparent 60%
          ),
          #08110c;

      }


      .maze-wall{

        position:absolute;

        border:
          1px solid
          rgba(101,242,139,.22);

        border-radius:8px;

        background:
          rgba(101,242,139,.08);

      }


      .mw1{

        left:22%;
        top:12%;

        width:8%;
        height:52%;

      }


      .mw2{

        left:39%;
        top:63%;

        width:30%;
        height:7%;

      }


      .mw3{

        left:58%;
        top:25%;

        width:8%;
        height:45%;

      }


      .mw4{

        left:76%;
        top:12%;

        width:7%;
        height:42%;

      }


      .maze-magnet{

        position:absolute;

        width:46px;
        height:46px;

        display:grid;
        place-items:center;

        border-radius:50%;

        background:
          #17221b;

        border:
          1px solid
          rgba(255,255,255,.18);

        color:#65f28b;

        font-weight:800;

        box-shadow:
          inset 0 0 20px
          rgba(101,242,139,.05);

      }


      .magnet-n{

        left:40%;
        top:14%;

      }


      .magnet-s{

        left:66%;
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

        transition:
          .12s ease;

      }


      .maze-target{

        position:absolute;

        color:#65f28b;

        font-size:29px;

        transform:
          translate(-50%,-50%);

      }


      .maze-controls{

        margin-top:15px;

        text-align:center;

      }


      /* =====================================================
         LENS
         ===================================================== */

      .lens-lab{

        position:relative;

        height:310px;

        border:
          1px solid
          rgba(255,255,255,.10);

        border-radius:20px;

        background:
          radial-gradient(
            circle at 50% 50%,
            rgba(101,242,139,.04),
            transparent 65%
          ),
          #08110c;

        overflow:hidden;

      }


      .lens-axis{

        position:absolute;

        left:7%;
        right:7%;

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

        font-size:50px;

        transform:
          translate(-50%,-50%);

      }


      .convex-lens{

        position:absolute;

        left:50%;
        top:50%;

        transform:
          translate(-50%,-50%);

        color:#d9eee0;

        font-size:100px;

        opacity:.38;

      }


      .lens-focus{

        position:absolute;

        top:53%;

        color:#8ba695;

        font-size:10px;

      }


      .left-focus{

        left:38%;

      }


      .right-focus{

        right:38%;

      }


      .sg-slider-label{

        display:block;

        margin-top:18px;

        color:#aeb8af;

        font-size:11px;

      }


      .sg-slider-label span{

        display:block;

        margin-bottom:8px;

      }


      .sg-slider-label input{

        display:block;

        width:100%;

        accent-color:#65f28b;

      }


      .lens-reading,
      .planet-reading,
      .weather-reading{

        margin-top:13px;

        padding:10px 12px;

        border-radius:10px;

        background:
          rgba(101,242,139,.045);

        color:#65f28b;

        font-size:11px;

        border:
          1px solid
          rgba(101,242,139,.14);

      }


      /* =====================================================
         MOLECULE
         ===================================================== */

      .molecule-target{

        display:flex;

        align-items:center;

        justify-content:space-between;

        gap:20px;

        padding:17px;

        border:
          1px solid
          rgba(255,255,255,.10);

        border-radius:14px;

        background:
          rgba(101,242,139,.04);

      }


      .molecule-target small{

        display:block;

        color:#7f9085;

        font-size:8px;

        letter-spacing:.15em;

        margin-bottom:4px;

      }


      .molecule-target strong{

        display:block;

        color:#65f28b;

        font-size:18px;

      }


      .molecule-target span{

        font-size:23px;

        font-weight:800;

        color:#f4f5ef;

      }


      .atom-options,
      .molecule-slots{

        display:flex;

        flex-wrap:wrap;

        justify-content:center;

        gap:10px;

        margin-top:20px;

        min-height:60px;

      }


      .atom-button{

        width:56px;
        height:56px;

        border-radius:50%;

        border:
          1px solid
          rgba(101,242,139,.30);

        background:
          rgba(101,242,139,.08);

        color:#65f28b;

        font-size:18px;

        font-weight:800;

        cursor:pointer;

        transition:.18s ease;

      }


      .atom-button:hover{

        background:#65f28b;

        color:#061008;

        transform:
          translateY(-2px);

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


      /* =====================================================
         REACTION
         ===================================================== */

      .reaction-score{

        text-align:right;

        color:#8e9c91;

        font-size:10px;

        font-weight:800;

        margin-bottom:8px;

      }


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

        min-height:60px;

        padding:14px;

        border:
          1px solid
          rgba(255,255,255,.12);

        border-radius:12px;

        background:
          rgba(255,255,255,.035);

        color:#dfe7e1;

        font-size:13px;

        font-weight:700;

        cursor:pointer;

        transition:.18s ease;

      }


      .reaction-option:hover{

        border-color:
          rgba(101,242,139,.42);

        background:
          rgba(101,242,139,.08);

        color:#65f28b;

      }


      /* =====================================================
         ATOMIC STRUCTURE
         ===================================================== */

      .atom-target-card{

        display:grid;

        grid-template-columns:
          1fr auto auto;

        align-items:center;

        gap:20px;

        padding:20px;

        border:
          1px solid
          rgba(101,242,139,.18);

        border-radius:18px;

        background:
          rgba(101,242,139,.045);

      }


      .atom-target-card span{

        color:#7e8e83;

        font-size:9px;

        letter-spacing:.16em;

        font-weight:800;

      }


      .atom-target-card strong{

        color:#65f28b;

        font-size:18px;

      }


      .atom-target-card b{

        width:48px;
        height:48px;

        display:grid;
        place-items:center;

        border-radius:50%;

        background:
          #101c14;

        border:
          1px solid
          rgba(101,242,139,.24);

        font-size:18px;

      }


      .particle-controls{

        display:grid;

        grid-template-columns:
          repeat(3,1fr);

        gap:12px;

        margin:20px 0;

      }


      .particle-controls label{

        color:#aeb8af;

        font-size:10px;

        text-align:center;

      }


      .number-control{

        display:flex;

        align-items:center;

        justify-content:center;

        gap:10px;

        margin-top:8px;

      }


      .number-control button{

        width:34px;
        height:34px;

        border-radius:50%;

        border:
          1px solid
          rgba(101,242,139,.30);

        background:
          rgba(101,242,139,.07);

        color:#65f28b;

        cursor:pointer;

        font-size:18px;

      }


      .number-control span{

        min-width:30px;

        color:#f4f5ef;

        font-size:16px;

        font-weight:800;

      }


      /* =====================================================
         CELL
         ===================================================== */

      .cell-board{

        display:flex;

        align-items:center;

        justify-content:center;

        min-height:290px;

      }


      .cell-membrane{

        position:relative;

        width:290px;
        height:210px;

        border-radius:
          48% 52% 55% 45% /
          48% 42% 58% 52%;

        border:
          2px solid
          rgba(101,242,139,.45);

        background:
          radial-gradient(
            circle at 50% 45%,
            rgba(101,242,139,.09),
            rgba(8,18,12,.92)
          );

        box-shadow:
          inset 0 0 45px
          rgba(101,242,139,.08);

      }


      .cell-organelle{

        position:absolute;

        display:grid;
        place-items:center;

        border-radius:50%;

        border:
          1px solid
          rgba(255,255,255,.14);

        background:
          #111b15;

        color:#6d7e72;

        font-weight:800;

        transition:.2s ease;

      }


      .cell-organelle.active{

        color:#65f28b;

        border-color:
          rgba(101,242,139,.50);

        background:
          rgba(101,242,139,.10);

        box-shadow:
          0 0 22px
          rgba(101,242,139,.12);

      }


      .nucleus-zone{

        width:85px;
        height:85px;

        left:103px;
        top:62px;

      }


      .mito-zone{

        width:48px;
        height:28px;

        left:40px;
        top:48px;

        border-radius:50%;

      }


      .ribo-zone{

        width:30px;
        height:30px;

        right:45px;
        top:45px;

      }


      .vacuole-zone{

        width:45px;
        height:45px;

        right:40px;
        bottom:35px;

      }


      .cell-options{

        display:flex;

        flex-wrap:wrap;

        justify-content:center;

        gap:9px;

      }


      .cell-option{

        padding:10px 13px;

        border-radius:11px;

        border:
          1px solid
          rgba(101,242,139,.25);

        background:
          rgba(101,242,139,.05);

        color:#aeb8af;

        cursor:pointer;

        font-size:10px;

        font-weight:700;

      }


      .cell-option.selected{

        background:#65f28b;

        color:#061008;

      }


      /* =====================================================
         BODY
         ===================================================== */

      .body-explorer{

        display:grid;

        grid-template-columns:
          220px 1fr;

        gap:20px;

        align-items:center;

      }


      .body-figure{

        position:relative;

        height:310px;

        display:flex;

        flex-direction:column;

        align-items:center;

        color:#65f28b;

      }


      .body-head{

        font-size:70px;

        line-height:1;

      }


      .body-torso{

        font-size:145px;

        line-height:.75;

        opacity:.45;

      }


      .body-heart{

        position:absolute;

        top:130px;

        font-size:32px;

      }


      .body-lung{

        position:absolute;

        top:125px;

        font-size:25px;

        opacity:.65;

      }


      .body-lung.left{

        margin-left:-55px;

      }


      .body-lung.right{

        margin-left:55px;

      }


      .body-system-grid{

        display:grid;

        grid-template-columns:
          repeat(2,1fr);

        gap:10px;

      }


      .body-system{

        padding:15px;

        display:flex;

        align-items:center;

        gap:10px;

        text-align:left;

        border:
          1px solid
          rgba(255,255,255,.10);

        border-radius:14px;

        background:
          rgba(255,255,255,.025);

        color:#dfe7e1;

        cursor:pointer;

        transition:.18s ease;

      }


      .body-system:hover,
      .body-system.active{

        border-color:
          rgba(101,242,139,.35);

        background:
          rgba(101,242,139,.07);

      }


      .body-system-icon{

        font-size:22px;

      }


      .body-system strong{

        font-size:11px;

      }


      .body-info{

        margin-top:18px;

        padding:17px;

        border:
          1px solid
          rgba(255,255,255,.10);

        border-radius:14px;

        background:
          rgba(255,255,255,.025);

        color:#aeb8af;

        font-size:11px;

        line-height:1.7;

      }


      .body-info strong{

        color:#65f28b;

        font-size:14px;

      }


      .body-info p{

        margin:
          7px 0 0;

      }


      /* =====================================================
         PLANT
         ===================================================== */

      .plant-lab{

        position:relative;

        height:330px;

        display:flex;

        flex-direction:column;

        align-items:center;

        justify-content:flex-end;

      }


      .plant-canopy{

        font-size:80px;

        margin-bottom:-5px;

      }


      .plant-stem{

        position:relative;

        width:55px;

        height:190px;

        border-radius:30px;

        background:
          rgba(101,242,139,.10);

        border:
          1px solid
          rgba(101,242,139,.24);

      }


      .xylem-line{

        position:absolute;

        left:50%;

        top:5%;

        bottom:5%;

        width:4px;

        transform:
          translateX(-50%);

        border-radius:10px;

        background:
          rgba(101,242,139,.28);

      }


      .water-particle{

        position:absolute;

        left:50%;

        bottom:0;

        transform:
          translate(-50%,50%);

        font-size:24px;

        transition:
          .35s ease;

      }


      .plant-roots{

        font-size:65px;

        line-height:.8;

      }


      .plant-progress{

        height:7px;

        margin:
          10px 0 16px;

        overflow:hidden;

        border-radius:10px;

        background:
          rgba(255,255,255,.07);

      }


      .plant-progress div{

        width:0;

        height:100%;

        background:#65f28b;

        transition:.3s ease;

      }


      /* =====================================================
         PLANET
         ===================================================== */

      .planet-preview{

        height:230px;

        display:grid;

        place-items:center;

        border:
          1px solid
          rgba(255,255,255,.10);

        border-radius:20px;

        background:
          radial-gradient(
            circle at center,
            rgba(101,242,139,.08),
            transparent 55%
          ),
          #08110c;

        transition:
          .3s ease;

      }


      .planet-globe{

        font-size:110px;

        filter:
          drop-shadow(
            0 0 25px
            rgba(101,242,139,.15)
          );

        transition:.3s ease;

      }


      .planet-preview.planet-dry
      .planet-globe{

        filter:
          grayscale(.55)
          saturate(.55);

      }


      .planet-preview.planet-hot
      .planet-globe{

        transform:
          scale(1.06);

      }


      .planet-preview.planet-cold
      .planet-globe{

        opacity:.72;

      }


      .planet-preview.planet-thick
      .planet-globe{

        filter:
          drop-shadow(
            0 0 35px
            rgba(101,242,139,.28)
          );

      }


      .planet-controls{

        display:grid;

        grid-template-columns:
          repeat(3,1fr);

        gap:13px;

        margin-top:18px;

      }


      .planet-controls label,
      .weather-controls label{

        display:block;

        color:#aeb8af;

        font-size:10px;

      }


      .planet-controls span,
      .weather-controls span{

        display:block;

        margin-bottom:8px;

      }


      .planet-controls input,
      .weather-controls input{

        width:100%;

        accent-color:#65f28b;

      }


      /* =====================================================
         WEATHER
         ===================================================== */

      .weather-sky{

        position:relative;

        height:250px;

        overflow:hidden;

        border:
          1px solid
          rgba(255,255,255,.10);

        border-radius:20px;

        background:
          linear-gradient(
            180deg,
            #0c1a13,
            #07100b
          );

      }


      .weather-sun{

        position:absolute;

        right:12%;

        top:15%;

        font-size:58px;

        transition:
          opacity .25s;

      }


      .weather-cloud{

        position:absolute;

        left:25%;

        top:30%;

        font-size:70px;

        transition:
          opacity .25s;

      }


      .weather-rain{

        position:absolute;

        left:28%;

        top:58%;

        color:#65f28b;

        letter-spacing:14px;

        transition:
          opacity .25s;

      }


      .weather-controls{

        display:grid;

        grid-template-columns:
          repeat(3,1fr);

        gap:13px;

        margin-top:18px;

      }


      /* =====================================================
         MOON
         ===================================================== */

      .moon-lab{

        position:relative;

        width:100%;

        height:330px;

        display:grid;

        place-items:center;

        overflow:hidden;

        border:
          1px solid
          rgba(255,255,255,.10);

        border-radius:20px;

        background:
          radial-gradient(
            circle at center,
            rgba(101,242,139,.05),
            transparent 55%
          ),
          #07100b;

      }


      .moon-sun{

        position:absolute;

        left:8%;

        top:40%;

        font-size:50px;

      }


      .moon-earth{

        position:absolute;

        left:50%;
        top:50%;

        transform:
          translate(-50%,-50%);

        font-size:58px;

        z-index:2;

      }


      .moon-orbit{

        position:absolute;

        left:50%;
        top:50%;

        width:220px;
        height:220px;

        transform:
          translate(-50%,-50%);

        border:
          1px dashed
          rgba(101,242,139,.24);

        border-radius:50%;

      }


      .moving-moon{

        position:absolute;

        left:50%;
        top:50%;

        font-size:29px;

        transform:
          translate(-50%,-50%);

        transition:
          .12s linear;

      }


      .moon-phase-name{

        margin-top:15px;

        text-align:center;

        color:#65f28b;

        font-family:
          Caveat,
          cursive;

        font-size:25px;

      }


      /* =====================================================
         MOBILE
         ===================================================== */

      @media(max-width:700px){

        #scienceGameOverlay{

          padding:10px;

          align-items:flex-end;

        }


        .sg-window{

          width:100%;

          max-height:94vh;

          border-radius:
            20px 20px 0 0;

        }


        .sg-header{

          padding:17px;

        }


        .sg-content{

          padding:18px;

        }


        .sg-title{

          font-size:29px;

        }


        .circuit-board{

          min-height:210px;

          padding:18px;

          gap:8px;

        }


        .circuit-component{

          width:82px;
          height:82px;

          font-size:30px;

        }


        .circuit-component small{

          font-size:8px;

        }


        .magnetic-maze{

          height:300px;

        }


        .lens-lab{

          height:250px;

        }


        .reaction-options{

          grid-template-columns:
            1fr;

        }


        .particle-controls{

          grid-template-columns:
            1fr;

        }


        .atom-target-card{

          grid-template-columns:
            1fr auto;

        }


        .atom-target-card span{

          grid-column:
            1 / -1;

        }


        .body-explorer{

          grid-template-columns:
            1fr;

        }


        .body-figure{

          height:210px;

        }


        .body-system-grid{

          grid-template-columns:
            1fr;

        }


        .body-torso{

          font-size:110px;

        }


        .plant-lab{

          height:280px;

        }


        .planet-preview{

          height:190px;

        }


        .planet-globe{

          font-size:85px;

        }


        .planet-controls,
        .weather-controls{

          grid-template-columns:
            1fr;

        }


        .weather-sky{

          height:210px;

        }


        .moon-lab{

          height:270px;

        }


        .moon-orbit{

          width:180px;
          height:180px;

        }

      }


      @media(prefers-reduced-motion:reduce){

        *{

          scroll-behavior:auto !important;
          transition:none !important;
          animation:none !important;

        }

      }

    `;

    document.head.appendChild(
      style
    );

  }

})();


/* =========================================================
   END OF SCIENCE GAMES ENGINE
   ========================================================= */
