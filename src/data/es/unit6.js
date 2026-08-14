// ES Unit 6 — Food and drink (slot: food) — A1
// ─────────────────────────────────────────────────────────────────────────────
// What is on the table, what grows, what is in the glass, and the four verbs that
// get it in front of you — quiero, me gusta, como, bebo — plus la cuenta to end
// the meal. Regional split noted where it matters (patata/papa, cerveza's two
// pronunciations). Conventions: see es/unit1.js.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT6 = {
  id: "es-u6",
  lang: "es",
  title: "La comida",
  order: 6,
  stage: "a1",
  lessons: [
    // Lesson 1: what is on the table
    {
      id: "es-u6l1",
      unit: 6,
      lesson: 1,
      title: "At the table",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what is on the table — la comida, el pan, el queso, la carne, el pescado, el agua.",
      items: [
        { id: "es-u6l1-lacomida", type: "vocab", front: "la comida", reading: "lacomida", meaning: "food", example: { jp: "La comida de mi abuela es fantástica.", en: "My grandmother's food is fantastic." }, accept: ["the food", "meal", "lunch"], hint: "Both \"food\" in general and, in Spain, the midday meal — the big one, eaten around two." },
        { id: "es-u6l1-elpan", type: "vocab", front: "el pan", reading: "elpan", meaning: "bread", example: { jp: "Hay pan en la mesa.", en: "There's bread on the table." }, accept: ["the bread", "loaf"], hint: "One syllable, clean vowel: PAN. Nothing like the English \"pan\"." },
        { id: "es-u6l1-elqueso", type: "vocab", front: "el queso", reading: "elqueso", meaning: "cheese", example: { jp: "Me gusta el queso.", en: "I like cheese." }, accept: ["the cheese"], hint: "qu is a plain k and the u is silent: KE-so." },
        { id: "es-u6l1-lacarne", type: "vocab", front: "la carne", reading: "lacarne", meaning: "meat", example: { jp: "No como carne.", en: "I don't eat meat." }, accept: ["the meat", "beef", "flesh"], hint: "CAR-ne — you can hear it inside the English word \"carnivore\"." },
        { id: "es-u6l1-elpescado", type: "vocab", front: "el pescado", reading: "elpescado", meaning: "fish", example: { jp: "Hoy hay pescado.", en: "There's fish today." }, accept: ["the fish"], hint: "From pescar, to fish — so this is the fish on your plate. The one still swimming is el pez." },
        { id: "es-u6l1-elagua", type: "vocab", front: "el agua", reading: "elagua", meaning: "water", example: { jp: "Agua, por favor.", en: "Water, please." }, accept: ["the water"], hint: "Feminine, but it takes el — la agua would run two stressed a's together. It stays feminine in every other way." },
      ],
    },
    // Lesson 2: fruit and vegetables
    {
      id: "es-u6l2",
      unit: 6,
      lesson: 2,
      title: "Fruit and vegetables",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Shop for the basics — la fruta, la manzana, la naranja, el tomate, la patata — and put them in una ensalada.",
      items: [
        { id: "es-u6l2-lafruta", type: "vocab", front: "la fruta", reading: "lafruta", meaning: "fruit", example: { jp: "La fruta de México es fantástica.", en: "The fruit from Mexico is fantastic." }, accept: ["the fruit"], hint: "Singular where English often goes plural: la fruta covers the whole fruit bowl." },
        { id: "es-u6l2-lamanzana", type: "vocab", front: "la manzana", reading: "lamanzana", meaning: "apple", example: { jp: "Como una manzana.", en: "I'm eating an apple." }, accept: ["the apple"], hint: "man-SA-na, or man-THA-na in most of Spain. In many cities it also means a city block." },
        { id: "es-u6l2-lanaranja", type: "vocab", front: "la naranja", reading: "lanaranja", meaning: "orange", example: { jp: "La naranja es de España.", en: "The orange is from Spain." }, accept: ["the orange"], hint: "The fruit and the colour, same word. That j is the throaty one: na-RAN-ha." },
        { id: "es-u6l2-eltomate", type: "vocab", front: "el tomate", reading: "eltomate", meaning: "tomato", example: { jp: "Hay tomate en la ensalada.", en: "There's tomato in the salad." }, accept: ["the tomato"], hint: "to-MA-te, three syllables, every vowel pronounced. The word travelled from Nahuatl into Spanish and then into English." },
        { id: "es-u6l2-lapatata", type: "vocab", front: "la patata", reading: "lapatata", meaning: "potato", example: { jp: "La patata es de América.", en: "The potato comes from the Americas." }, accept: ["the potato", "potatoes", "spud"], hint: "Spain says patata; most of Latin America says papa. Both are understood everywhere." },
        { id: "es-u6l2-laensalada", type: "vocab", front: "la ensalada", reading: "laensalada", meaning: "salad", example: { jp: "Quiero una ensalada.", en: "I'd like a salad." }, accept: ["the salad"], hint: "Salt is hiding in the middle — sal. That is what the word originally meant: the salted thing." },
      ],
    },
    // Lesson 3: what is in the glass
    {
      id: "es-u6l3",
      unit: 6,
      lesson: 3,
      title: "Drinks",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Order a drink — el café, el té, la leche, el vino, la cerveza — and ask for un vaso de agua.",
      items: [
        { id: "es-u6l3-elcafe", type: "vocab", front: "el café", reading: "elcafe", meaning: "coffee", example: { jp: "Un café, por favor.", en: "A coffee, please." }, accept: ["the coffee", "cafe"], hint: "Accent on the last syllable: ka-FÉ. It is also the place you drink it in." },
        { id: "es-u6l3-elte", type: "vocab", front: "el té", reading: "elte", meaning: "tea", example: { jp: "Quiero un té.", en: "I'd like a tea." }, accept: ["the tea"], hint: "The accent is doing real work: té is tea, te without it means \"you\"." },
        { id: "es-u6l3-laleche", type: "vocab", front: "la leche", reading: "laleche", meaning: "milk", example: { jp: "Un café con leche, por favor.", en: "A coffee with milk, please." }, accept: ["the milk"], hint: "LE-che. Café con leche is the standard Spanish breakfast order." },
        { id: "es-u6l3-elvino", type: "vocab", front: "el vino", reading: "elvino", meaning: "wine", example: { jp: "El vino de España es famoso.", en: "Spanish wine is famous." }, accept: ["the wine"], hint: "v and b are the same sound in Spanish — vino starts closer to a b than to an English v." },
        { id: "es-u6l3-lacerveza", type: "vocab", front: "la cerveza", reading: "lacerveza", meaning: "beer", example: { jp: "Una cerveza, por favor.", en: "A beer, please." }, accept: ["the beer"], hint: "Soft c and soft z in one word: ser-VE-sa in Latin America, ther-VE-tha in most of Spain." },
        { id: "es-u6l3-elvaso", type: "vocab", front: "el vaso", reading: "elvaso", meaning: "glass", example: { jp: "Un vaso de agua, por favor.", en: "A glass of water, please." }, accept: ["the glass", "tumbler", "cup"], hint: "The thing you drink from. The material glass is el vidrio — different word." },
      ],
    },
    // Lesson 4: ordering and eating
    {
      id: "es-u6l4",
      unit: 6,
      lesson: 4,
      title: "Ordering",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Order a meal and pay for it — quiero, me gusta, como, bebo, con — then ask for la cuenta.",
      items: [
        { id: "es-u6l4-quiero", type: "vocab", front: "quiero", reading: "quiero", meaning: "I want", example: { jp: "Quiero pescado y ensalada.", en: "I'd like fish and salad." }, accept: ["i'd like", "i would like", "i wish"], hint: "In a restaurant it lands as \"I'd like\", not as a demand. It also means \"I love\" — te quiero is what you say to family and partners." },
        { id: "es-u6l4-megusta", type: "vocab", front: "me gusta", reading: "megusta", meaning: "I like", example: { jp: "Me gusta el café con leche.", en: "I like coffee with milk." }, accept: ["i enjoy", "it pleases me", "i like it"], hint: "Literally \"it pleases me\", so the thing you like is the subject: me gusta el vino. For more than one thing it becomes me gustan." },
        { id: "es-u6l4-como", type: "vocab", front: "como", reading: "como", meaning: "I eat", example: { jp: "Como pan con queso.", en: "I eat bread with cheese." }, accept: ["i am eating", "i have (food)"], hint: "Spelled like cómo (\"how\") but with no accent, and the two never appear in the same slot in a sentence." },
        { id: "es-u6l4-bebo", type: "vocab", front: "bebo", reading: "bebo", meaning: "I drink", example: { jp: "Bebo agua.", en: "I drink water." }, accept: ["i am drinking", "i have (a drink)"], hint: "From beber. In much of Latin America tomar does this job instead: tomo agua." },
        { id: "es-u6l4-lacuenta", type: "vocab", front: "la cuenta", reading: "lacuenta", meaning: "the bill", example: { jp: "La cuenta, por favor.", en: "The bill, please." }, accept: ["the check", "bill", "account"], hint: "You have to ask for it — in Spain it is considered rude to bring it before you do." },
        { id: "es-u6l4-con", type: "vocab", front: "con", reading: "con", meaning: "with", example: { jp: "Quiero un té con leche.", en: "I'd like a tea with milk." }, accept: ["along with", "together with"], hint: "Two irregular partners worth knowing early: conmigo (with me) and contigo (with you)." },
      ],
    },
  ],
};
