// PT Unit 6 — A comida e a bebida ("Food and drink") — A1
// The meals, the café order, and what is on the plate. This unit carries the
// densest run of pt-PT vocabulary decisions in block 1 — pequeno-almoço, sumo,
// presunto, bica, imperial — every one of which has a different Brazilian word,
// and every one flagged in its hint rather than left for the learner to trip on.
// It also carries the block's second taught false friend: a salsa is PARSLEY.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT6 = {
  id: "pt-u6",
  lang: "pt",
  title: "A comida e a bebida",
  order: 6,
  stage: "a1",
  lessons: [
    {
      id: "pt-u6l1",
      unit: 6,
      lesson: 1,
      title: "Comer e beber",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the three meals of the Portuguese day and say what you eat and drink at each one.",
      items: [
        { id: "pt-u6l1-opequenoalmoco", type: "vocab", front: "o pequeno-almoço", reading: "opequenoalmoco", meaning: "breakfast", example: { jp: "Hoje o pequeno-almoço é em casa.", en: "Today breakfast is at home." }, accept: ["the breakfast", "morning meal"], hint: "PORTUGAL SAYS PEQUENO-ALMOÇO — literally \"little lunch\", with the hyphen. Brazil says café da manhã, which in Portugal would just sound like a coffee you drink in the morning. Cedilla again: al-MO-su." },
        { id: "pt-u6l1-oalmoco", type: "vocab", front: "o almoço", reading: "oalmoco", meaning: "lunch", example: { jp: "O almoço de hoje é muito bom.", en: "Today's lunch is very good." }, accept: ["the lunch", "midday meal"], hint: "The big meal of the Portuguese day, and rarely before one o'clock. The verb is almoçar — with the cedilla, because the o that follows would otherwise harden the c." },
        { id: "pt-u6l1-ojantar", type: "vocab", front: "o jantar", reading: "ojantar", meaning: "dinner", example: { jp: "O jantar é sempre tarde em Portugal.", en: "Dinner is always late in Portugal." }, accept: ["the dinner", "supper", "evening meal"], hint: "Same word as the verb \"to have dinner\" — o jantar, jantar. Eight o'clock is early for it. That j is the zh of \"measure\": zhan-TAR." },
        { id: "pt-u6l1-comer", type: "vocab", front: "comer", reading: "comer", meaning: "to eat", example: { jp: "Comer é um prazer.", en: "Eating is a pleasure." }, accept: ["eat", "to have a meal"], hint: "An -er verb: como, comes, come. Careful — como is also \"how\", as in como estás. Same spelling, two completely different words." },
        { id: "pt-u6l1-beber", type: "vocab", front: "beber", reading: "beber", meaning: "to drink", example: { jp: "Beber água é importante.", en: "Drinking water is important." }, accept: ["drink", "to have a drink"], hint: "bebo, bebes, bebe. The noun a bebida (a drink) comes straight off it, and so does o bebé from Unit 4 — the one who only drinks." },
        { id: "pt-u6l1-aagua", type: "vocab", front: "a água", reading: "aagua", meaning: "water", example: { jp: "A água é sempre boa.", en: "The water is always good." }, accept: ["the water"], hint: "A-gwa, stressed on the first syllable — that is what the accent on the á is for. In a restaurant you will be asked com gás ou sem gás: sparkling or still." },
      ],
    },
    {
      id: "pt-u6l2",
      unit: 6,
      lesson: 2,
      title: "No café",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Order a drink in a Portuguese café — coffee, tea, juice, beer or wine — and ask for it with milk or without.",
      items: [
        { id: "pt-u6l2-ocafe", type: "vocab", front: "o café", reading: "ocafe", meaning: "coffee", example: { jp: "Um café, por favor!", en: "A coffee, please!" }, accept: ["the coffee", "cafe", "espresso"], hint: "Both the drink and the place. Ordering um café in Portugal gets you an espresso, never a mug — and in Lisbon you can ask for uma bica, which is the same thing by its local name." },
        { id: "pt-u6l2-ocha", type: "vocab", front: "o chá", reading: "ocha", meaning: "tea", example: { jp: "O chá é bom de manhã.", en: "Tea is good in the morning." }, accept: ["the tea"], hint: "SHA — ch in Portuguese is always \"sh\", never the \"ch\" of \"church\". The word came into Europe through Portuguese traders, which is why so many languages say some version of chá." },
        { id: "pt-u6l2-oleite", type: "vocab", front: "o leite", reading: "oleite", meaning: "milk", example: { jp: "Café com leite, por favor.", en: "Coffee with milk, please." }, accept: ["the milk"], hint: "LAY-te. A coffee with a lot of milk is um galão in Portugal, served in a tall glass — ask for that rather than a latte." },
        { id: "pt-u6l2-osumo", type: "vocab", front: "o sumo", reading: "osumo", meaning: "juice", example: { jp: "Um sumo de laranja, por favor.", en: "An orange juice, please." }, accept: ["the juice", "fruit juice"], hint: "PORTUGAL SAYS SUMO. Brazil says suco. If you say suco in Lisbon you will be understood, and instantly placed." },
        { id: "pt-u6l2-acerveja", type: "vocab", front: "a cerveja", reading: "acerveja", meaning: "beer", example: { jp: "A cerveja é muito boa em Portugal.", en: "The beer is very good in Portugal." }, accept: ["the beer", "lager"], hint: "ser-VE-zha — soft c, and that zh again. A small draught beer is uma imperial in Lisbon and um fino in Porto; the country changes the word halfway up." },
        { id: "pt-u6l2-ovinho", type: "vocab", front: "o vinho", reading: "ovinho", meaning: "wine", example: { jp: "O vinho é caro?", en: "Is the wine expensive?" }, accept: ["the wine"], hint: "VEE-nyu, with the nh from Unit 1. vinho tinto is red — not vermelho, which is the colour word. And o vinho do Porto is the one the city gave its name to." },
      ],
    },
    {
      id: "pt-u6l3",
      unit: 6,
      lesson: 3,
      title: "À mesa",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read a simple Portuguese menu and say whether you eat meat, fish or neither.",
      items: [
        { id: "pt-u6l3-oqueijo", type: "vocab", front: "o queijo", reading: "oqueijo", meaning: "cheese", example: { jp: "Pão com queijo é o meu almoço.", en: "Bread with cheese is my lunch." }, accept: ["the cheese"], hint: "KAY-zhu — qu is a plain k here, the u silent. Portugal's famous ones are sheep's cheeses: queijo da Serra, queijo de Azeitão." },
        { id: "pt-u6l3-opresunto", type: "vocab", front: "o presunto", reading: "opresunto", meaning: "cured ham", example: { jp: "O presunto é muito bom com pão.", en: "The cured ham is very good with bread." }, accept: ["ham", "the ham", "prosciutto"], hint: "A pt-PT/pt-BR trap on the same word: in Portugal presunto is the dry-cured ham you slice thin, and the cooked pink ham is fiambre. In Brazil presunto IS the cooked ham. Same word, different meat." },
        { id: "pt-u6l3-asopa", type: "vocab", front: "a sopa", reading: "asopa", meaning: "soup", example: { jp: "Hoje a sopa é de peixe.", en: "Today the soup is fish soup." }, accept: ["the soup", "broth"], hint: "SO-pa. Portugal starts almost every lunch with it, and the default is caldo verde or a thick vegetable purée — soup here is a course, not a starter you can skip." },
        { id: "pt-u6l3-opeixe", type: "vocab", front: "o peixe", reading: "opeixe", meaning: "fish", example: { jp: "O peixe de hoje é fantástico.", en: "Today's fish is fantastic." }, accept: ["the fish"], hint: "PAY-she. Both the animal and the food, like English. o bacalhau — salt cod, with the lh — is the national one." },
        { id: "pt-u6l3-acarne", type: "vocab", front: "a carne", reading: "acarne", meaning: "meat", example: { jp: "Não como carne.", en: "I don't eat meat." }, accept: ["the meat", "beef", "flesh"], hint: "KAR-ne. It covers meat in general; a beef steak is um bife. Do not hear the English \"carnal\" in it — this is the everyday butcher's word." },
        { id: "pt-u6l3-oarroz", type: "vocab", front: "o arroz", reading: "oarroz", meaning: "rice", example: { jp: "Arroz com peixe é muito bom.", en: "Rice with fish is very good." }, accept: ["the rice"], hint: "a-RROSH — the double rr is the strong throaty one, and the final z shushes exactly like a final s. Portugal eats it with almost everything, often alongside the potatoes rather than instead of them." },
      ],
    },
    {
      id: "pt-u6l4",
      unit: 6,
      lesson: 4,
      title: "Fruta, salada e bolo",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Ask for fruit, a salad or something sweet — and avoid the trap that a salsa is not a sauce.",
      items: [
        { id: "pt-u6l4-alaranja", type: "vocab", front: "a laranja", reading: "alaranja", meaning: "orange", example: { jp: "O sumo de laranja é delicioso.", en: "The orange juice is delicious." }, accept: ["the orange"], hint: "la-RAN-zha. The fruit and the colour are the same word, and the colour form does not change: uma casa laranja." },
        { id: "pt-u6l4-abatata", type: "vocab", front: "a batata", reading: "abatata", meaning: "potato", example: { jp: "Carne com batatas, por favor.", en: "Meat with potatoes, please." }, accept: ["the potato", "potatoes", "spud"], hint: "ba-TA-ta. Chips are batatas fritas — fried potatoes — and a sweet potato is a batata-doce." },
        { id: "pt-u6l4-asalada", type: "vocab", front: "a salada", reading: "asalada", meaning: "salad", example: { jp: "A salada é sempre boa.", en: "The salad is always good." }, accept: ["the salad", "side salad"], hint: "sa-LA-da. Read the next card before you order one — salada and salsa are one letter apart and you will not enjoy the mistake." },
        { id: "pt-u6l4-asalsa", type: "vocab", front: "a salsa", reading: "asalsa", meaning: "parsley", example: { jp: "A sopa com salsa é muito boa.", en: "The soup with parsley is very good." }, accept: ["the parsley", "herb"], hint: "FALSE FRIEND, and a sharp one. Spanish salsa is a sauce; Portuguese a salsa is PARSLEY, the green stuff on top. A sauce in Portuguese is o molho. Ask for salsa on your chips and you will get herbs." },
        { id: "pt-u6l4-obolo", type: "vocab", front: "o bolo", reading: "obolo", meaning: "cake", example: { jp: "Um bolo de aniversário!", en: "A birthday cake!" }, accept: ["the cake", "sponge"], hint: "BO-lu, closed o. A small individual pastry is um bolo only loosely — the one you actually want is um pastel de nata, and in Lisbon's Belém they are pastéis de Belém." },
        { id: "pt-u6l4-oacucar", type: "vocab", front: "o açúcar", reading: "oacucar", meaning: "sugar", example: { jp: "Café com açúcar, por favor.", en: "Coffee with sugar, please." }, accept: ["the sugar"], hint: "a-SOO-kar. Cedilla before the u, then a hard c before the a — the same letter doing both of its jobs inside one word. Without sugar is sem açúcar." },
      ],
    },
  ],
};
