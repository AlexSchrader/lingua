// PT Unit 41 — A cozinha portuguesa (slot: coverage-a2-2) — A2
// Block 3's first unit. A1's Unit 6 taught what Portugal eats at the level of
// nouns — pão, peixe, queijo, vinho — and Unit 15 gave the kitchen and the
// cutlery. Nothing yet says what anything is MADE of, how it is COOKED, or what
// to call the dishes the country is actually known for. This unit is that.
//
// Deliberately sited away from block 1's u27 (shops: a padaria, o talho, a
// peixaria) and block 1's u21 (cozinhar, tomar): this is ingredients, methods,
// dishes and the table, not the shopping or the routine. o fogão and o forno are
// block 1's u30 and are used in hints only, never carded.
//
// pt-PT markers carded here: a ementa (Brazil: o cardápio) and a chávena
// (Brazil: a xícara). o azeite is a distinction Spanish does not make at all —
// it is specifically OLIVE oil, where Spanish aceite covers every cooking oil.
// a gorjeta CLOSES THE PROPINA TRAP opened at A1 u17l4: Spanish propina is a
// tip, Portuguese a propina is a university fee, and the tip is a gorjeta.
// cozer is carded against coser (to sew) — identical sound, one letter apart.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT41 = {
  id: "pt-u41",
  lang: "pt",
  title: "A cozinha portuguesa",
  order: 41,
  stage: "a2",
  lessons: [
    {
      id: "pt-u41l1",
      unit: 41,
      lesson: 1,
      title: "Os ingredientes",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the ingredients a Portuguese kitchen actually starts from, and say what a dish is made of.",
      items: [
        { id: "pt-u41l1-oovo", type: "vocab", front: "o ovo", reading: "oovo", meaning: "egg", example: { jp: "Comi um ovo com pão e queijo ao pequeno-almoço.", en: "I ate an egg with bread and cheese at breakfast." }, drill: { jp: "O ovo com presunto é delicioso", en: "The egg with ham is delicious" }, accept: ["the egg", "egg"], hint: "OH-vu — but the plural opens the vowel right up: os ovos is said \"OH-vush\". Portugal fries them (ovo estrelado), boils them (ovo cozido), and builds half its pastry on the yolks alone, which is why convent sweets are so yellow." },
        { id: "pt-u41l1-afarinha", type: "vocab", front: "a farinha", reading: "afarinha", meaning: "flour", example: { jp: "Comprei a farinha no mercado e fiz um bolo enorme.", en: "I bought the flour at the market and made an enormous cake." }, drill: { jp: "A farinha do bolo é branca", en: "The cake flour is white" }, accept: ["the flour"], hint: "fa-REE-nya, with nh. Bread flour is farinha de trigo. The ground maize that makes broa — Portugal's dense, sweet-crusted corn bread — is farinha de milho, and the two are not interchangeable." },
        { id: "pt-u41l1-osal", type: "vocab", front: "o sal", reading: "osal", meaning: "salt", example: { jp: "O sal do mar de Portugal é famoso e o peixe fica delicioso com ele.", en: "Portugal's sea salt is famous and the fish turns out delicious with it." }, drill: { jp: "O sal do mar é famoso", en: "Sea salt is famous" }, accept: ["the salt"], hint: "SAL. Portugal still rakes it by hand in the salinas of Aveiro and the Algarve, and flor de sal is the fine layer skimmed off the top. Keep it apart from a sala (Unit 15) and a salada (Unit 6) — three words, one letter between them." },
        { id: "pt-u41l1-apimenta", type: "vocab", front: "a pimenta", reading: "apimenta", meaning: "pepper", example: { jp: "A pimenta e o sal estão na mesa da cozinha, à direita do prato.", en: "The pepper and the salt are on the kitchen table, to the right of the plate." }, drill: { jp: "A pimenta está na mesa", en: "The pepper is on the table" }, accept: ["the pepper", "black pepper"], hint: "pi-MEN-ta — the SPICE. The vegetable is o pimento, masculine, and Portugal grills those whole. What actually makes Portuguese food hot is neither: it is piri-piri, the small African chilli the country brought home." },
        { id: "pt-u41l1-oazeite", type: "vocab", front: "o azeite", reading: "oazeite", meaning: "olive oil", example: { jp: "O azeite de Portugal é delicioso, e o peixe é sempre bom com azeite e sal.", en: "Portugal's olive oil is delicious, and fish is always good with olive oil and salt." }, drill: { jp: "O azeite de Portugal é delicioso", en: "Portugal's olive oil is delicious" }, accept: ["the olive oil", "olive oil"], hint: "a-ZAY-te. Specifically OLIVE oil, from a azeitona, the olive. Any other cooking oil is o óleo — a distinction Spanish does not make, since aceite there covers both. It goes on everything here, the bread included." },
        { id: "pt-u41l1-oalho", type: "vocab", front: "o alho", reading: "oalho", meaning: "garlic", example: { jp: "O alho e o azeite são a cozinha de Portugal, e o peixe nunca é bom sem eles.", en: "Garlic and olive oil are Portuguese cooking, and fish is never good without them." }, drill: { jp: "O alho e o azeite são bons", en: "Garlic and olive oil are good" }, accept: ["the garlic"], hint: "AH-lyu, with the lh of a colher. Garlic, olive oil and coentros (coriander) are the three things that make a dish taste Portuguese. A leek is a different word again — o alho-francês." },
      ],
    },
    {
      id: "pt-u41l2",
      unit: 41,
      lesson: 2,
      title: "Cozinhar",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say how a dish is cooked in Portuguese — fried, roasted or boiled — and follow the steps of a simple recipe.",
      items: [
        { id: "pt-u41l2-fritar", type: "vocab", front: "fritar", reading: "fritar", meaning: "to fry", example: { jp: "Vou fritar o peixe com alho e azeite, como faz a mãe de Tiago.", en: "I'm going to fry the fish with garlic and olive oil, the way Tiago's mother does." }, drill: { jp: "Fritar o peixe com alho", en: "To fry the fish with garlic" }, accept: ["fry", "to deep fry"], hint: "fri-TAR: frito, fritas, frita. Batatas fritas are chips, and peixe frito is what the whole coast eats. The adjective and the past participle are the same word, frito." },
        { id: "pt-u41l2-assar", type: "vocab", front: "assar", reading: "assar", meaning: "to roast", example: { jp: "Vou assar a carne e as batatas, e o jantar fica delicioso.", en: "I'm going to roast the meat and the potatoes, and dinner turns out delicious." }, drill: { jp: "Assar a carne e as batatas", en: "To roast the meat and the potatoes" }, accept: ["roast", "to bake", "bake"], hint: "a-SAR: asso, assas, assa. Roasted or baked. Frango assado is the roast chicken every Portuguese town sells on a Sunday, and leitão assado — roast suckling pig — is what Coimbra is known for." },
        { id: "pt-u41l2-cozer", type: "vocab", front: "cozer", reading: "cozer", meaning: "to boil", example: { jp: "Vou cozer o ovo e a batata em água com sal.", en: "I'm going to boil the egg and the potato in salted water." }, drill: { jp: "Cozer o ovo em água", en: "To boil the egg in water" }, accept: ["boil", "to cook", "to boil up"], hint: "ku-ZER: cozo, cozes, coze. To cook IN WATER — narrower than cozinhar, which is cooking in general. Watch the spelling: coser, with an s, means to SEW, and the two are said identically." },
        { id: "pt-u41l2-misturar", type: "vocab", front: "misturar", reading: "misturar", meaning: "to mix", example: { jp: "Vou misturar a farinha com o ovo e o açúcar, e o bolo fica delicioso.", en: "I'm going to mix the flour with the egg and the sugar, and the cake turns out delicious." }, drill: { jp: "Misturar a farinha com o ovo", en: "To mix the flour with the egg" }, accept: ["mix", "to blend", "to stir", "blend"], hint: "mish-tu-RAR: misturo, misturas, mistura. A mixture is uma mistura. In a bar it has its own warning attached: misturar is what you should not do to your drinks." },
        { id: "pt-u41l2-cortar", type: "vocab", front: "cortar", reading: "cortar", meaning: "to cut", example: { jp: "Vou cortar o pão com a faca que está na cozinha.", en: "I'm going to cut the bread with the knife that's in the kitchen." }, drill: { jp: "Cortar o pão com a faca", en: "To cut the bread with the knife" }, accept: ["cut", "to slice", "slice", "to cut off"], hint: "kur-TAR: corto, cortas, corta. To cut, and also to cut OFF — cortaram a luz is what you say when the power has been cut. Um corte is a cut in cloth, in a budget, or in your finger." },
        { id: "pt-u41l2-temperar", type: "vocab", front: "temperar", reading: "temperar", meaning: "to season", example: { jp: "Temperar o peixe com sal, azeite e alho é o que Portugal faz sempre.", en: "Seasoning the fish with salt, olive oil and garlic is what Portugal always does." }, drill: { jp: "Temperar o peixe com sal", en: "To season the fish with salt" }, accept: ["season", "to flavour", "to flavor", "to marinate"], hint: "tem-pe-RAR: tempero, temperas, tempera. The seasoning itself is o tempero. It shares a root with o tempo from Unit 8 — both from Latin tempus, the idea being to do a thing in due measure." },
      ],
    },
    {
      id: "pt-u41l3",
      unit: 41,
      lesson: 3,
      title: "Os pratos portugueses",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Recognise and order the dishes Portugal is actually known for — including the one it claims a recipe for every day of the year.",
      items: [
        { id: "pt-u41l3-obacalhau", type: "vocab", front: "o bacalhau", reading: "obacalhau", meaning: "salt cod", example: { jp: "O bacalhau é o peixe de Portugal, e comi bacalhau no Porto com a família de Tiago.", en: "Salt cod is Portugal's fish, and I ate cod in Porto with Tiago's family." }, drill: { jp: "O bacalhau é o peixe de Portugal", en: "Salt cod is Portugal's fish" }, accept: ["the salt cod", "cod", "salted cod", "dried cod"], hint: "ba-ka-LYOW, lh again. SALT cod — dried stiff as a board and soaked for a day before it is cooked, not fresh cod at all. Portugal calls it o fiel amigo, the faithful friend, and claims 365 recipes for it." },
        { id: "pt-u41l3-asardinha", type: "vocab", front: "a sardinha", reading: "asardinha", meaning: "sardine", example: { jp: "Em junho, Lisboa come sardinha na rua com pão e vinho.", en: "In June, Lisbon eats sardines in the street with bread and wine." }, drill: { jp: "A sardinha de junho é deliciosa", en: "The June sardine is delicious" }, accept: ["the sardine", "sardines"], hint: "sar-DEE-nya. Grilled whole over charcoal and eaten on a slice of bread. They belong to June and to the Festas de Santo António — for a fortnight the whole city smells of them and nobody minds." },
        { id: "pt-u41l3-omarisco", type: "vocab", front: "o marisco", reading: "omarisco", meaning: "shellfish", example: { jp: "O marisco é caro em Lisboa, e o restaurante de Ana é famoso por isso.", en: "Shellfish is expensive in Lisbon, and Ana's restaurant is famous for it." }, drill: { jp: "O marisco é caro em Lisboa", en: "Shellfish is expensive in Lisbon" }, accept: ["the shellfish", "seafood"], hint: "ma-RISH-ku. All shellfish together — crab, prawns, clams. The restaurant that serves it is uma marisqueira, and the dish to know is amêijoas à Bulhão Pato: clams with garlic and coriander." },
        { id: "pt-u41l3-opastel", type: "vocab", front: "o pastel", reading: "opastel", meaning: "pastry", example: { jp: "O pastel de Belém é famoso em Portugal, e comi três no Porto.", en: "The Belém tart is famous in Portugal, and I ate three in Porto." }, drill: { jp: "O pastel de Belém é famoso", en: "The custard tart is famous" }, accept: ["the pastry", "tart", "pastry", "cake"], hint: "pash-TEL — any small pastry, sweet or savoury: o pastel de bacalhau is a cod fritter. The plural shifts the stress and drops the l, os pastéis. And o pastel de nata is the custard tart the rest of the world now copies." },
        { id: "pt-u41l3-asobremesa", type: "vocab", front: "a sobremesa", reading: "asobremesa", meaning: "dessert", example: { jp: "A sobremesa de hoje é um bolo de chocolate enorme.", en: "Today's dessert is an enormous chocolate cake." }, drill: { jp: "A sobremesa de hoje é o bolo", en: "Today's dessert is the cake" }, accept: ["the dessert", "pudding", "sweet"], hint: "so-bre-ME-za — literally \"over-table\", what arrives once the meal itself is done. Portugal's are mostly egg and sugar: arroz doce, leite-creme, pudim. One word, and feminine." },
        { id: "pt-u41l3-opetisco", type: "vocab", front: "o petisco", reading: "opetisco", meaning: "snack", example: { jp: "O petisco é um almoço pequeno, e comi um na esplanada com uma cerveja.", en: "A petisco is a small lunch, and I ate one on the terrace with a beer." }, drill: { jp: "O petisco é um almoço pequeno", en: "A petisco is a small lunch" }, accept: ["the snack", "tapa", "small plate", "appetiser", "appetizer"], hint: "pe-TISH-ku. Portugal's answer to tapas — small plates shared across a table — and petiscar is the verb for an entire evening spent doing it. It is not a starter: a starter is uma entrada." },
      ],
    },
    {
      id: "pt-u41l4",
      unit: 41,
      lesson: 4,
      title: "No restaurante",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Get through a Portuguese restaurant — read the menu, name what is on the table, and leave the right thing behind.",
      items: [
        { id: "pt-u41l4-aementa", type: "vocab", front: "a ementa", reading: "aementa", meaning: "menu", example: { jp: "A ementa do restaurante é enorme, e o prato do dia é bacalhau com batata.", en: "The restaurant's menu is enormous, and the dish of the day is cod with potato." }, drill: { jp: "A ementa do restaurante é enorme", en: "The restaurant's menu is enormous" }, accept: ["the menu", "bill of fare"], hint: "PORTUGAL SAYS EMENTA — i-MEN-ta. Brazil says o cardápio, which is not used here at all. A ementa do dia is the cheap fixed lunch, and it is how most of the country eats at midday." },
        { id: "pt-u41l4-otalher", type: "vocab", front: "o talher", reading: "otalher", meaning: "cutlery", example: { jp: "O talher está na mesa, à direita do prato e do guardanapo.", en: "The cutlery is on the table, to the right of the plate and the napkin." }, drill: { jp: "O talher está na mesa", en: "The cutlery is on the table" }, accept: ["the cutlery", "silverware", "utensil", "place setting"], hint: "ta-LYER, lh. One piece of cutlery; the set is os talheres, which is what you will actually hear. It comes from talhar, to carve — the same root as o talho, the butcher's shop." },
        { id: "pt-u41l4-oguardanapo", type: "vocab", front: "o guardanapo", reading: "oguardanapo", meaning: "napkin", example: { jp: "O guardanapo e o talher estão na mesa do restaurante de Ana.", en: "The napkin and the cutlery are on the table in Ana's restaurant." }, drill: { jp: "O guardanapo está na mesa", en: "The napkin is on the table" }, accept: ["the napkin", "serviette"], hint: "gwar-da-NA-pu — literally \"keep-the-cloth\", from guardar (to keep). Spanish servilleta offers no help whatever here. A tablecloth is uma toalha de mesa." },
        { id: "pt-u41l4-achavena", type: "vocab", front: "a chávena", reading: "achavena", meaning: "cup", example: { jp: "Uma chávena de café é o que Portugal bebe todo o dia, e nunca é enorme.", en: "A cup of coffee is what Portugal drinks all day, and it is never large." }, drill: { jp: "A chávena de café é pequena", en: "The coffee cup is small" }, accept: ["the cup", "teacup", "coffee cup"], hint: "PORTUGAL SAYS CHÁVENA — SHA-ve-na, ch as sh. Brazil says a xícara. And what goes in it is uma bica in Lisbon, um cimbalino in Porto, and never \"um espresso\"." },
        { id: "pt-u41l4-agorjeta", type: "vocab", front: "a gorjeta", reading: "agorjeta", meaning: "tip", example: { jp: "A gorjeta em Portugal é pequena e nunca é importante, e não é uma propina.", en: "The tip in Portugal is small and never a big deal, and it isn't a propina." }, drill: { jp: "A gorjeta em Portugal é pequena", en: "The tip in Portugal is small" }, accept: ["the tip", "gratuity"], hint: "gur-ZHE-ta. THIS CLOSES THE TRAP FROM UNIT 17. Spanish propina means a tip — but Portuguese a propina is a university fee. The tip is a gorjeta, and here it stays small: round the bill up, or leave a euro or two." },
        { id: "pt-u41l4-servir", type: "vocab", front: "servir", reading: "servir", meaning: "to serve", example: { jp: "O empregado vai servir o peixe com batata e salada.", en: "The waiter is going to serve the fish with potato and salad." }, drill: { jp: "Servir o peixe com salada", en: "To serve the fish with salad" }, accept: ["serve", "to wait on", "to be useful"], hint: "ser-VEER: sirvo, serves, serve — the e turns to i in the \"I\" form, exactly as in vestir. It also means to be of use: não serve is what you say when something does not fit or is no good. A portion is uma dose, and uma meia-dose is a real and generous option." },
      ],
    },
  ],
};

// RESERVE LIST — in-scope fronts to swap in if the merge seat has to drop a
// collided card from this unit (RUNBOOK §6 step 3 leaves holes; these fill them
// without re-authoring the lesson). None collide with A1's 482 or block 1's 240.
//   l1 Os ingredientes : a azeitona (olive) · a manteiga (butter) · o milho (maize)
//   l2 Cozinhar        : descascar (to peel) · ferver (to boil, of liquid) · o tacho (cooking pot)
//   l3 Os pratos       : a broa (corn bread) · o cozido (boiled meat-and-veg stew) · a francesinha (Porto's sandwich)
//   l4 No restaurante  : a panela (saucepan) · a frigideira (frying pan) · a entrada (starter)
