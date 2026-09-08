// PT Unit 41 — A cozinha e as receitas (slot: coverage-a2-2) — A2
// COOKING AT HOME. Narrowed from the original "A cozinha portuguesa" after the
// three-way collision check: 12 of that unit's 24 fronts belonged to block 2's
// u38 "A comida e a bebida · 2", which is the template's NAMED second food slot.
// The ruling (Curriculum Claude, relayed by block 1) is that a named thematic
// slot beats an unnamed coverage slot — so the EATING-OUT half went to u38
// (o ovo, o sal, a pimenta, o azeite, o alho, o marisco, a sobremesa, o petisco,
// a ementa, o guardanapo, a gorjeta, servir) and this unit keeps the COOKING half
// and backfills around it. A1's u6 holds the food nouns and u15 the kitchen
// furniture; what was missing, and what this unit now owns cleanly, is the ACT
// of cooking.
//
// Kept from the original 24, each re-verified against all 1,202 fronts in the
// band: a farinha · a chávena · a sardinha · assar · cortar · cozer · fritar ·
// misturar · o bacalhau · o pastel · o talher · temperar.
// Backfilled 12: descascar · ralar · bater · o óleo · o lume · ferver · grelhar ·
// a panela · a frigideira · a tigela · arrefecer · o molho.
//
// a tigela closes a gap the content-auditor found in u43: a taça is a STEMMED
// GLASS, and the everyday Portuguese soup bowl is uma tigela. It is carded here.
// o óleo is set against o azeite (now u38): azeite is specifically OLIVE oil,
// óleo is every other cooking oil — a split Spanish does not make at all.
// o lume is the pt-PT cooking word (ao lume, em lume brando) where Brazil reaches
// for o fogo; grelhar carries the sardine, which is how this country cooks in June.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT41 = {
  id: "pt-u41",
  lang: "pt",
  title: "A cozinha e as receitas",
  order: 41,
  stage: "a2",
  lessons: [
    {
      id: "pt-u41l1",
      unit: 41,
      lesson: 1,
      title: "Preparar",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Do the preparation a Portuguese recipe asks for — peel it, cut it, grate it, beat it.",
      items: [
        { id: "pt-u41l1-descascar", type: "vocab", front: "descascar", reading: "descascar", meaning: "to peel", example: { jp: "Vou descascar a batata e a laranja na cozinha de Ana.", en: "I'm going to peel the potato and the orange in Ana's kitchen." }, drill: { jp: "Descascar a batata é fácil", en: "Peeling the potato is easy" }, accept: ["peel", "to skin", "to shell"], hint: "desh-kash-KAR: descasco, descascas, descasca. Built on a casca, the skin or peel, with des- taking it off — the same reversing prefix that turned ligar into desligar in Unit 18." },
        { id: "pt-u41l1-cortar", type: "vocab", front: "cortar", reading: "cortar", meaning: "to cut", example: { jp: "Vou cortar o pão com a faca que está na cozinha.", en: "I'm going to cut the bread with the knife that's in the kitchen." }, drill: { jp: "Cortar o pão com a faca", en: "To cut the bread with the knife" }, accept: ["cut", "to slice", "slice", "to cut off"], hint: "kur-TAR: corto, cortas, corta. To cut, and also to cut OFF — cortaram a luz is what you say when the power has been cut. Um corte is a cut in cloth, in a budget, or in your finger." },
        { id: "pt-u41l1-ralar", type: "vocab", front: "ralar", reading: "ralar", meaning: "to grate", example: { jp: "Vou ralar o queijo e a sopa fica deliciosa.", en: "I'm going to grate the cheese and the soup turns out delicious." }, drill: { jp: "Ralar o queijo é rápido", en: "Grating the cheese is quick" }, accept: ["grate", "to shred"], hint: "rra-LAR, strong opening r: ralo, ralas, rala. The grater is um ralador, with the -dor ending that names a tool. Reflexively it goes somewhere else entirely: não te rales is a very Portuguese \"don't worry about it\"." },
        { id: "pt-u41l1-bater", type: "vocab", front: "bater", reading: "bater", meaning: "to beat", example: { jp: "Vou bater a farinha e o leite na tigela grande.", en: "I'm going to beat the flour and the milk in the big bowl." }, drill: { jp: "Bater a farinha na tigela", en: "To beat the flour in the bowl" }, accept: ["beat", "to whisk", "to whip", "to knock"], hint: "ba-TER: bato, bates, bate. To beat in cooking — and to knock at a door, bater à porta, and to hit. Um batido is a milkshake, which is the same verb wearing a different hat." },
        { id: "pt-u41l1-afarinha", type: "vocab", front: "a farinha", reading: "afarinha", meaning: "flour", example: { jp: "Comprei a farinha no mercado e fiz um bolo enorme.", en: "I bought the flour at the market and made an enormous cake." }, drill: { jp: "A farinha do bolo é branca", en: "The cake flour is white" }, accept: ["the flour"], hint: "fa-REE-nya, with nh. Bread flour is farinha de trigo. The ground maize that makes broa — Portugal's dense, sweet-crusted corn bread — is farinha de milho, and the two are not interchangeable." },
        { id: "pt-u41l1-ooleo", type: "vocab", front: "o óleo", reading: "ooleo", meaning: "oil", example: { jp: "O óleo da frigideira é quente e o peixe já está ali.", en: "The oil in the frying pan is hot and the fish is already in it." }, drill: { jp: "O óleo da frigideira é quente", en: "The frying-pan oil is hot" }, accept: ["the oil", "cooking oil", "vegetable oil"], hint: "O-li-u, stress on the first syllable. Any cooking oil EXCEPT olive oil, which keeps its own word, o azeite. Spanish makes no such split — aceite covers both — so this one has to be learned fresh. Engine oil is óleo too." },
      ],
    },
    {
      id: "pt-u41l2",
      unit: 41,
      lesson: 2,
      title: "Ao lume",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say how a dish is being cooked in Portuguese — boiled, fried, grilled or roasted — and put it on the heat.",
      items: [
        { id: "pt-u41l2-olume", type: "vocab", front: "o lume", reading: "olume", meaning: "the heat", example: { jp: "A panela está ao lume e a água já está quente.", en: "The pot is on the heat and the water is already hot." }, drill: { jp: "O lume da cozinha está quente", en: "The kitchen heat is hot" }, accept: ["the flame", "the fire", "burner", "stove"], hint: "LOO-me. THE cooking word Portugal actually uses: ao lume is on the heat, em lume brando on a low flame. It is an open fire as well. Brazil reaches for o fogo here, which in Portugal means fire in general." },
        { id: "pt-u41l2-ferver", type: "vocab", front: "ferver", reading: "ferver", meaning: "to boil", example: { jp: "A água da panela vai ferver e a batata fica boa.", en: "The water in the pot is going to boil and the potato will be good." }, drill: { jp: "A água da panela vai ferver", en: "The water in the pot is going to boil" }, accept: ["boil", "to bubble", "to seethe"], hint: "fer-VER: fervo, ferves, ferve. This is the LIQUID boiling of its own accord — where cozer, next, is what you do to the food sitting in it. Água a ferver is boiling water, and ferver de raiva is to seethe." },
        { id: "pt-u41l2-cozer", type: "vocab", front: "cozer", reading: "cozer", meaning: "to boil (food)", example: { jp: "Vou cozer a batata em água ao lume.", en: "I'm going to boil the potato in water on the heat." }, drill: { jp: "Cozer a batata em água", en: "To boil the potato in water" }, accept: ["to cook", "boil", "to boil up", "to bake"], hint: "ku-ZER: cozo, cozes, coze. To cook something IN water — narrower than cozinhar, which is cooking in general, and the transitive partner of ferver. Watch the spelling: coser, with an s, means to SEW, and the two are said identically." },
        { id: "pt-u41l2-fritar", type: "vocab", front: "fritar", reading: "fritar", meaning: "to fry", example: { jp: "Vou fritar o peixe no óleo da frigideira.", en: "I'm going to fry the fish in the oil in the frying pan." }, drill: { jp: "Fritar o peixe na frigideira", en: "To fry the fish in the frying pan" }, accept: ["fry", "to deep fry"], hint: "fri-TAR: frito, fritas, frita. Batatas fritas are chips, and peixe frito is what the whole coast eats. The adjective and the past participle are the same word, frito." },
        { id: "pt-u41l2-grelhar", type: "vocab", front: "grelhar", reading: "grelhar", meaning: "to grill", example: { jp: "Vou grelhar a sardinha e o jantar fica delicioso.", en: "I'm going to grill the sardine and dinner turns out delicious." }, drill: { jp: "Grelhar a sardinha é fantástico", en: "Grilling the sardine is fantastic" }, accept: ["grill", "to barbecue", "to broil"], hint: "gre-LYAR, with the lh of a colher: grelho, grelhas, grelha. Over charcoal, which is how this country cooks fish. The grill itself is o grelhador, and grelhado on a menu means it came off one." },
        { id: "pt-u41l2-assar", type: "vocab", front: "assar", reading: "assar", meaning: "to roast", example: { jp: "Vou assar a carne e as batatas, e o jantar fica delicioso.", en: "I'm going to roast the meat and the potatoes, and dinner turns out delicious." }, drill: { jp: "Assar a carne e as batatas", en: "To roast the meat and the potatoes" }, accept: ["roast", "to bake", "bake"], hint: "a-SAR: asso, assas, assa. Roasted or baked in an oven. Frango assado is the roast chicken every Portuguese town sells on a Sunday, and leitão assado — roast suckling pig — is what Coimbra is known for." },
      ],
    },
    {
      id: "pt-u41l3",
      unit: 41,
      lesson: 3,
      title: "As panelas e as tigelas",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name what a Portuguese cook actually holds — the pot, the pan, the bowl — and say when to leave something to cool.",
      items: [
        { id: "pt-u41l3-apanela", type: "vocab", front: "a panela", reading: "apanela", meaning: "pot", example: { jp: "A panela da sopa é enorme e está ao lume.", en: "The soup pot is enormous and is on the heat." }, drill: { jp: "A panela da sopa é enorme", en: "The soup pot is enormous" }, accept: ["the pot", "saucepan", "pan", "cooking pot"], hint: "pa-NE-la — the deep pot you boil in. A panela de pressão is a pressure cooker, and it is in every Portuguese kitchen, because it is how a cozido gets done in an hour instead of three." },
        { id: "pt-u41l3-afrigideira", type: "vocab", front: "a frigideira", reading: "afrigideira", meaning: "frying pan", example: { jp: "A frigideira da cozinha é pequena e o peixe não fica bem ali.", en: "The kitchen frying pan is small and the fish doesn't do well in it." }, drill: { jp: "A frigideira da cozinha é pequena", en: "The kitchen frying pan is small" }, accept: ["the frying pan", "skillet", "pan", "frypan"], hint: "fri-zhi-DAY-ra, from fritar. The shallow pan. Do not let o frigorífico from Unit 15 mislead you — fridge and frying pan look related and are not: one is from frigus, cold, the other from frigere, to fry." },
        { id: "pt-u41l3-atigela", type: "vocab", front: "a tigela", reading: "atigela", meaning: "bowl", example: { jp: "A tigela de sopa é branca e pequena.", en: "The soup bowl is white and small." }, drill: { jp: "A tigela de sopa é branca", en: "The soup bowl is white" }, accept: ["the bowl", "basin", "dish"], hint: "ti-ZHE-la. THE ordinary Portuguese bowl — for soup, for cereal, for beating an egg in. Keep it apart from uma taça, which is a stemmed glass or a trophy, and from o prato, which is flat." },
        { id: "pt-u41l3-otalher", type: "vocab", front: "o talher", reading: "otalher", meaning: "cutlery", example: { jp: "O talher está na mesa, à direita do prato.", en: "The cutlery is on the table, to the right of the plate." }, drill: { jp: "O talher está na mesa", en: "The cutlery is on the table" }, accept: ["the cutlery", "silverware", "utensil", "place setting"], hint: "ta-LYER, lh. One piece of cutlery; the set is os talheres, which is what you will actually hear. It comes from talhar, to carve — the same root as o talho, the butcher's shop." },
        { id: "pt-u41l3-achavena", type: "vocab", front: "a chávena", reading: "achavena", meaning: "cup", example: { jp: "Uma chávena de café é o que Portugal bebe todo o dia, e nunca é enorme.", en: "A cup of coffee is what Portugal drinks all day, and it is never large." }, drill: { jp: "A chávena de café é pequena", en: "The coffee cup is small" }, accept: ["the cup", "teacup", "coffee cup"], hint: "PORTUGAL SAYS CHÁVENA — SHA-ve-na, ch as sh. Brazil says a xícara. And what goes in it is uma bica in Lisbon, um cimbalino in Porto, and never \"um espresso\"." },
        { id: "pt-u41l3-arrefecer", type: "vocab", front: "arrefecer", reading: "arrefecer", meaning: "to cool", example: { jp: "O bolo vai arrefecer na mesa e a chávena de café também.", en: "The cake is going to cool on the table and so is the cup of coffee." }, drill: { jp: "O bolo vai arrefecer na mesa", en: "The cake is going to cool on the table" }, accept: ["cool", "to cool down", "to get cold", "to chill"], hint: "a-rre-fe-SER, strong rr, built on frio from Unit 8. To cool down — of food, of weather, and of a friendship. Portugal uses it where Brazil more often says esfriar, which is the same idea assembled the same way." },
      ],
    },
    {
      id: "pt-u41l4",
      unit: 41,
      lesson: 4,
      title: "A receita portuguesa",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Follow a Portuguese recipe through to the end — season it, mix it, sauce it — and name the dishes the country is known for.",
      items: [
        { id: "pt-u41l4-temperar", type: "vocab", front: "temperar", reading: "temperar", meaning: "to season", example: { jp: "Temperar o peixe é o trabalho do cozinheiro e o prato fica delicioso.", en: "Seasoning the fish is the cook's job and the dish turns out delicious." }, drill: { jp: "Temperar o peixe é importante", en: "Seasoning the fish is important" }, accept: ["season", "to flavour", "to flavor", "to marinate"], hint: "tem-pe-RAR: tempero, temperas, tempera. The seasoning itself is o tempero. It shares a root with o tempo from Unit 8 — both from Latin tempus, the idea being to do a thing in due measure." },
        { id: "pt-u41l4-misturar", type: "vocab", front: "misturar", reading: "misturar", meaning: "to mix", example: { jp: "Vou misturar a farinha na tigela e o bolo fica delicioso.", en: "I'm going to mix the flour in the bowl and the cake turns out delicious." }, drill: { jp: "Misturar a farinha na tigela", en: "To mix the flour in the bowl" }, accept: ["mix", "to blend", "to stir", "blend"], hint: "mish-tu-RAR: misturo, misturas, mistura. A mixture is uma mistura. In a bar it comes with its own warning attached: misturar is what you should not do to your drinks." },
        { id: "pt-u41l4-omolho", type: "vocab", front: "o molho", reading: "omolho", meaning: "sauce", example: { jp: "O molho do peixe é delicioso e a sardinha fica melhor com ele.", en: "The fish sauce is delicious and the sardine is better with it." }, drill: { jp: "O molho do peixe é delicioso", en: "The fish sauce is delicious" }, accept: ["the sauce", "gravy", "dressing"], hint: "MO-lyu, with lh — sauce or gravy. Close the o and it becomes a different word: um molho de chaves is a BUNCH of keys, so the vowel is doing real work. And note Spanish salsa is a sauce, while a salsa here, from Unit 6, is parsley." },
        { id: "pt-u41l4-obacalhau", type: "vocab", front: "o bacalhau", reading: "obacalhau", meaning: "salt cod", example: { jp: "O bacalhau é o peixe de Portugal, e comi bacalhau no Porto com a família de Tiago.", en: "Salt cod is Portugal's fish, and I ate cod in Porto with Tiago's family." }, drill: { jp: "O bacalhau é o peixe de Portugal", en: "Salt cod is Portugal's fish" }, accept: ["the salt cod", "cod", "salted cod", "dried cod"], hint: "ba-ka-LYOW, lh again. SALT cod — dried stiff as a board and soaked for a day before it is cooked, not fresh cod at all. Portugal calls it o fiel amigo, the faithful friend, and claims 365 recipes for it." },
        { id: "pt-u41l4-asardinha", type: "vocab", front: "a sardinha", reading: "asardinha", meaning: "sardine", example: { jp: "Em junho, Lisboa come sardinha na rua com pão e vinho.", en: "In June, Lisbon eats sardines in the street with bread and wine." }, drill: { jp: "A sardinha de junho é deliciosa", en: "The June sardine is delicious" }, accept: ["the sardine", "sardines"], hint: "sar-DEE-nya. Grilled whole over charcoal and eaten on a slice of bread. They belong to June and to the Festas de Santo António — for a fortnight the whole city smells of them and nobody minds." },
        { id: "pt-u41l4-opastel", type: "vocab", front: "o pastel", reading: "opastel", meaning: "pastry", example: { jp: "O pastel de Belém é famoso em Portugal, e comi três no Porto.", en: "The Belém tart is famous in Portugal, and I ate three in Porto." }, drill: { jp: "O pastel de Belém é famoso", en: "The Belém tart is famous" }, accept: ["the pastry", "tart", "pastry", "cake"], hint: "pash-TEL — any small pastry, sweet or savoury: o pastel de bacalhau is a cod fritter. The plural shifts the stress and drops the l, os pastéis. Only the Belém bakery may call its own os Pastéis de Belém; everywhere else sells pastéis de nata." },
      ],
    },
  ],
};

// RESERVE LIST — in-scope swap-ins if the merge seat has to drop a collided card.
// Re-verified after the u38 collision against A1's 482, block 1's 240, block 2's
// 240 and this block's own 240.
//   l1 Preparar        : mexer (to stir) · a casca (peel, skin) · o avental (apron)
//   l2 Ao lume         : estufar (to stew) · o grelhador (the grill) · escorrer (to drain)
//   l3 Panelas/tigelas : o tacho (deep pan) · a colher de pau (wooden spoon) · a travessa (serving dish)
//   l4 A receita       : o caldo (broth) · adoçar (to sweeten) · o coador (strainer)
