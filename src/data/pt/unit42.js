// PT Unit 42 — Os materiais e os objetos (slot: coverage-a2-3) — A2
// What things are MADE OF. A1 taught objects (a mesa, a cadeira, o copo, a chave)
// and the adjectives for their size, colour and state (u10: grande, pequeno,
// limpo, sujo, novo, velho); nothing yet lets a learner say a table is wooden,
// a shirt is cotton, or a surface is rough rather than merely dirty.
//
// Sited away from block 1's u26 (nature: a pedra, a folha) and u30 (the fabric of
// the house itself: a parede, o chão, o teto). This unit is portable materials and
// small objects, plus the shape-and-texture adjectives A1's u10 did not cover.
//
// Three Portuguese things are carded through their material rather than as
// trivia: a madeira is the island AND the wood AND the wine, o barro carries the
// Barcelos cockerel, and o ouro carries northern filigree.
// o vidro is kept explicitly apart from o copo (Unit 15) — English says "glass"
// for both, Portuguese never does. a prata's hint blocks the Brazilian
// money-slang sense, which Portugal does not use.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT42 = {
  id: "pt-u42",
  lang: "pt",
  title: "Os materiais e os objetos",
  order: 42,
  stage: "a2",
  lessons: [
    {
      id: "pt-u42l1",
      unit: 42,
      lesson: 1,
      title: "Os materiais",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what an everyday object is made of in Portuguese, using de plus the material.",
      items: [
        { id: "pt-u42l1-ovidro", type: "vocab", front: "o vidro", reading: "ovidro", meaning: "glass", example: { jp: "A janela do quarto é de vidro e a porta é de madeira.", en: "The bedroom window is glass and the door is wood." }, drill: { jp: "O vidro da janela está limpo", en: "The window glass is clean" }, accept: ["the glass", "glass", "pane"], hint: "VEE-dru — the MATERIAL. A drinking glass is o copo, from Unit 15, and Portuguese never mixes the two the way English \"glass\" does. Vidro also names a single windowpane." },
        { id: "pt-u42l1-amadeira", type: "vocab", front: "a madeira", reading: "amadeira", meaning: "wood", example: { jp: "A mesa é de madeira e a cadeira da cozinha é de metal.", en: "The table is wood and the kitchen chair is metal." }, drill: { jp: "A madeira da mesa é dura", en: "The table's wood is hard" }, accept: ["the wood", "timber", "lumber"], hint: "ma-DAY-ra. And yes, the island: A Madeira was named in 1419 for the forest the Portuguese found covering it. The wine then took the island's name — so one word is a material, a place and a drink." },
        { id: "pt-u42l1-ometal", type: "vocab", front: "o metal", reading: "ometal", meaning: "metal", example: { jp: "O metal do carro é forte e o carro é muito caro.", en: "The car's metal is strong and the car is very expensive." }, drill: { jp: "O metal do carro é forte", en: "The car's metal is strong" }, accept: ["the metal"], hint: "me-TAL, stressed on the end like o hospital and o jornal. The plural makes the same -al to -ais swap those do: os metais." },
        { id: "pt-u42l1-oplastico", type: "vocab", front: "o plástico", reading: "oplastico", meaning: "plastic", example: { jp: "O plástico é barato e o saco de plástico da loja não é bom.", en: "Plastic is cheap and the shop's plastic bag isn't good." }, drill: { jp: "O plástico da caixa é barato", en: "The box's plastic is cheap" }, accept: ["the plastic"], hint: "PLASH-ti-ku — the accent pulls the stress onto the FIRST syllable, PLÁS-tico, not plas-TI-co. Portuguese shops charge for o saco de plástico by law, so almost everyone carries their own." },
        { id: "pt-u42l1-oferro", type: "vocab", front: "o ferro", reading: "oferro", meaning: "iron", example: { jp: "O ferro é um metal forte e a porta do prédio é de ferro.", en: "Iron is a strong metal and the building's door is made of iron." }, drill: { jp: "O ferro é um metal forte", en: "Iron is a strong metal" }, accept: ["the iron"], hint: "FE-rru, with the strong double rr. The metal — and also the thing you press clothes with, o ferro de engomar. The railway is o caminho de ferro, literally the iron road." },
        { id: "pt-u42l1-oalgodao", type: "vocab", front: "o algodão", reading: "oalgodao", meaning: "cotton", example: { jp: "A camisa de algodão é boa no verão e não é cara.", en: "The cotton shirt is good in summer and isn't expensive." }, drill: { jp: "O algodão da camisa é branco", en: "The shirt's cotton is white" }, accept: ["the cotton"], hint: "al-gu-DAWNG, closing on the -ão nasal; plural os algodões. From Arabic al-qutn, like most Portuguese words that begin al-. The cotton wool sold at a farmácia is algodão too." },
      ],
    },
    {
      id: "pt-u42l2",
      unit: 42,
      lesson: 2,
      title: "Mais materiais",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the materials Portuguese clothing and craft are made from.",
      items: [
        { id: "pt-u42l2-ocouro", type: "vocab", front: "o couro", reading: "ocouro", meaning: "leather", example: { jp: "Os sapatos de couro são caros, e o casaco de Ana também é de couro.", en: "Leather shoes are expensive, and Ana's coat is leather too." }, drill: { jp: "O couro do casaco é caro", en: "The coat's leather is expensive" }, accept: ["the leather", "hide"], hint: "KOH-ru. Portugal still makes shoes in São João da Madeira, and the other word you will read on a shoe label for the same thing is o cabedal." },
        { id: "pt-u42l2-ala", type: "vocab", front: "a lã", reading: "ala", meaning: "wool", example: { jp: "A camisola de lã é quente no inverno e a de algodão não é.", en: "The wool sweater is warm in winter and the cotton one isn't." }, drill: { jp: "A lã da camisola é quente", en: "The sweater's wool is warm" }, accept: ["the wool", "woollen", "woolen"], hint: "LAN — one syllable, the tilde nasalising it exactly like a maçã. Serra da Estrela wool is the country's best known. It is feminine, a lã, despite that stressed nasal ending." },
        { id: "pt-u42l2-otecido", type: "vocab", front: "o tecido", reading: "otecido", meaning: "fabric", example: { jp: "O tecido do vestido é bonito e o tamanho é bom.", en: "The dress's fabric is pretty and the size is right." }, drill: { jp: "O tecido do vestido é bonito", en: "The dress's fabric is pretty" }, accept: ["the fabric", "cloth", "material", "textile"], hint: "te-SEE-du. Cloth, from tecer, to weave. It also means \"tissue\" in the body sense — which is the same image underneath: something woven." },
        { id: "pt-u42l2-oouro", type: "vocab", front: "o ouro", reading: "oouro", meaning: "gold", example: { jp: "O ouro é muito caro e as coisas de ouro são elegantes.", en: "Gold is very expensive and gold things are elegant." }, drill: { jp: "O ouro é muito caro", en: "Gold is very expensive" }, accept: ["the gold", "golden"], hint: "OH-ru. Portuguese filigree — fine gold thread worked by hand — is a craft of the north, and the heart-shaped Coração de Viana is the piece every household knows." },
        { id: "pt-u42l2-aprata", type: "vocab", front: "a prata", reading: "aprata", meaning: "silver", example: { jp: "A prata é elegante e o talher da avó de Ana é de prata.", en: "Silver is elegant and Ana's grandmother's cutlery is silver." }, drill: { jp: "A prata do talher é elegante", en: "The cutlery's silver is elegant" }, accept: ["the silver"], hint: "PRA-ta. In Brazil prata is also slang for money — Portugal does not use it that way, so do not import the Spanish plata sense either. Money here is dinheiro, full stop." },
        { id: "pt-u42l2-obarro", type: "vocab", front: "o barro", reading: "obarro", meaning: "clay", example: { jp: "O prato de barro é muito bonito e a loja de Coimbra tem oito.", en: "The clay plate is very pretty and the Coimbra shop has eight." }, drill: { jp: "O barro do prato é bonito", en: "The plate's clay is pretty" }, accept: ["the clay", "earthenware", "pottery"], hint: "BA-rru, strong rr. Clay and the fired pottery made from it — louça de barro. Barcelos makes its painted cockerel out of it, which is the souvenir Portugal is best known for abroad." },
      ],
    },
    {
      id: "pt-u42l3",
      unit: 42,
      lesson: 3,
      title: "Os objetos do dia a dia",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the small everyday objects a Portuguese home is full of and say where each one is.",
      items: [
        { id: "pt-u42l3-osaco", type: "vocab", front: "o saco", reading: "osaco", meaning: "bag", example: { jp: "O saco de plástico da loja não é enorme e o pão não cabe.", en: "The shop's plastic bag isn't big and the bread doesn't fit." }, drill: { jp: "O saco da loja é enorme", en: "The shop's bag is enormous" }, accept: ["the bag", "sack", "carrier bag"], hint: "SA-ku. A bag or a sack: um saco de plástico is a carrier bag, um saco-cama a sleeping bag. A handbag is something else again — uma mala de mão, built on a mala from Unit 20." },
        { id: "pt-u42l3-acorda", type: "vocab", front: "a corda", reading: "acorda", meaning: "rope", example: { jp: "A corda é forte e o barco está na praia com ela.", en: "The rope is strong and the boat is on the beach with it." }, drill: { jp: "A corda do barco é forte", en: "The boat's rope is strong" }, accept: ["the rope", "string", "cord"], hint: "KOR-da. Rope or string — and the string of a guitar, which is why as cordas is also the string section of an orchestra. Skipping is saltar à corda." },
        { id: "pt-u42l3-aagulha", type: "vocab", front: "a agulha", reading: "aagulha", meaning: "needle", example: { jp: "A agulha e o fio estão na caixa da mãe de Maria.", en: "The needle and the thread are in Maria's mother's box." }, drill: { jp: "A agulha está na caixa", en: "The needle is in the box" }, accept: ["the needle"], hint: "a-GOO-lya, lh. A sewing needle, a knitting needle — and the hand of a clock, a agulha do relógio. Its eye is o buraco da agulha, literally the needle's hole." },
        { id: "pt-u42l3-obotao", type: "vocab", front: "o botão", reading: "obotao", meaning: "button", example: { jp: "O botão da camisa é pequeno e branco, e o tecido é de algodão.", en: "The shirt's button is small and white, and the fabric is cotton." }, drill: { jp: "O botão da camisa é pequeno", en: "The shirt's button is small" }, accept: ["the button", "switch"], hint: "bu-TAWNG, -ão nasal, plural os botões. A button on a shirt and a button you press — o botão do elevador. Pressing it is carregar no botão, never empurrar." },
        { id: "pt-u42l3-atampa", type: "vocab", front: "a tampa", reading: "atampa", meaning: "lid", example: { jp: "A tampa da caixa é de madeira e é muito bonita.", en: "The box's lid is wooden and very pretty." }, drill: { jp: "A tampa da caixa é de madeira", en: "The box's lid is made of wood" }, accept: ["the lid", "cap", "cover", "top"], hint: "TAM-pa, nasal first syllable. A lid, a cap or a cover; the verb is tapar, to cover. The manhole cover in the street is a tampa de esgoto." },
        { id: "pt-u42l3-ofio", type: "vocab", front: "o fio", reading: "ofio", meaning: "thread", example: { jp: "O fio da agulha é branco e comprido, e a mãe de Ana está a cortar mais.", en: "The needle's thread is white and long, and Ana's mother is cutting more." }, drill: { jp: "O fio da agulha é comprido", en: "The needle's thread is long" }, accept: ["the thread", "string", "wire", "yarn"], hint: "FEE-u. Thread or string, and also an electrical wire or a phone line. But what most Portuguese people mean by um fio is a gold chain — um fio de ouro." },
      ],
    },
    {
      id: "pt-u42l4",
      unit: 42,
      lesson: 4,
      title: "As formas e o estado",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe the shape and the feel of an object, not just its size and its colour.",
      items: [
        { id: "pt-u42l4-redondo", type: "vocab", front: "redondo", meaning: "round", reading: "redondo", example: { jp: "A mesa da cozinha é redonda e o prato de barro também.", en: "The kitchen table is round and the clay plate is too." }, drill: { jp: "O prato é redondo e branco", en: "The plate is round and white" }, accept: ["circular", "rounded"], hint: "rre-DON-du, opening on the strong r. It agrees: redondo, redonda. À volta means \"around\" as a movement; redondo is the shape itself." },
        { id: "pt-u42l4-quadrado", type: "vocab", front: "quadrado", reading: "quadrado", meaning: "square", example: { jp: "A janela do quarto é quadrada e a porta é comprida.", en: "The bedroom window is square and the door is long." }, drill: { jp: "O prato quadrado é moderno", en: "The square plate is modern" }, accept: ["square-shaped", "a square"], hint: "kwa-DRA-du, agreeing quadrado/quadrada. It is also the noun for the shape, and um metro quadrado is a square metre — the unit every Portuguese flat is advertised in." },
        { id: "pt-u42l4-liso", type: "vocab", front: "liso", reading: "liso", meaning: "smooth", example: { jp: "O vidro da janela é liso e o barro do prato não é.", en: "The window glass is smooth and the plate's clay isn't." }, drill: { jp: "O vidro é liso e limpo", en: "The glass is smooth and clean" }, accept: ["flat", "straight", "sleek"], hint: "LEE-zu, the s saying z. Smooth or flat — and, of hair, straight: cabelo liso, using o cabelo from Unit 11. A plain colour with no pattern is liso as well." },
        { id: "pt-u42l4-aspero", type: "vocab", front: "áspero", reading: "aspero", meaning: "rough", example: { jp: "O barro é áspero e o vidro é liso, e o tecido não é duro.", en: "Clay is rough and glass is smooth, and fabric isn't hard." }, drill: { jp: "O barro é áspero e duro", en: "The clay is rough and hard" }, accept: ["coarse", "harsh", "scratchy"], hint: "ASH-pe-ru, stress on the first syllable where the accent sits. Rough to the touch, the opposite of liso. Of a voice or a person it means harsh — the same idea carried across." },
        { id: "pt-u42l4-duro", type: "vocab", front: "duro", reading: "duro", meaning: "hard", example: { jp: "O pão de ontem está duro e a faca não corta bem.", en: "Yesterday's bread is hard and the knife doesn't cut well." }, drill: { jp: "O pão de ontem está duro", en: "Yesterday's bread is hard" }, accept: ["tough", "stiff", "firm"], hint: "DOO-ru. Hard of a thing — and, of a life or a job, difficult: trabalho duro. For texture its opposite is mole, next. Note it takes estar, not ser, when it is a state the bread has got into." },
        { id: "pt-u42l4-mole", type: "vocab", front: "mole", reading: "mole", meaning: "soft", example: { jp: "O bolo é mole e o pão é duro, e a sobremesa fica melhor com o bolo.", en: "The cake is soft and the bread is hard, and dessert works better with the cake." }, drill: { jp: "O bolo é mole e delicioso", en: "The cake is soft and delicious" }, accept: ["squishy", "limp", "tender"], hint: "MO-le. Soft — and it does NOT change for gender: o bolo mole, a cama mole. Of a person it means feeble or listless. It has nothing to do with the Mexican sauce of the same spelling." },
      ],
    },
  ],
};

// RESERVE LIST — in-scope swap-ins if the merge seat has to drop a collided card.
// None collide with A1's 482 or block 1's 240.
//   l1 Os materiais    : o aço (steel) · o tijolo (brick) · o cimento (cement)
//   l2 Mais materiais  : a cortiça (cork — Portugal makes half the world's) · o linho (linen) · a seda (silk)
//   l3 Os objetos      : o prego (nail) · o martelo (hammer) · a cola (glue)
//   l4 Formas e estado : fino (thin) · grosso (thick) · brilhante (shiny)
