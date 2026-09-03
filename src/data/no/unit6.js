// NO Unit 6 — Mat og drikke ("Food and drink") — A1
// What is on the table, what is in the glass, the meals, and buying it.
// Conventions are declared in no/unit1.js and bind every unit.
//
// THE MASS-NOUN EXCEPTION LIVES HERE (unit1.js §1b). `vann` and `melk` are taught
// BARE, with no article, because the indefinite singular does not exist for them:
// "et vann" is a lake, not a glass of water. Their gender is named in the hint
// (vannet, melka) so nothing is lost. Every countable food noun on this unit takes
// en/ei/et as normal. Blocks 2 and 3: this exception is for mass nouns and
// plural-only nouns ONLY — it is not a general licence to drop the article.
//
// Cognates are used only where the Norwegian word genuinely is the everyday one
// (en fisk, et eple). The non-obvious words are preferred wherever a choice
// existed: en ost, ei pølse, en gaffel, en kniv, ei skål, å smake.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT6 = {
  id: "no-u6",
  lang: "no",
  title: "Mat og drikke",
  order: 6,
  stage: "a1",
  lessons: [
    {
      id: "no-u6l1",
      unit: 6,
      lesson: 1,
      title: "On the plate",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the food a Norwegian shop actually sells — brød, ost, pølse, fisk — and say what you are buying.",
      items: [
        { id: "no-u6l1-etbrod", type: "vocab", front: "et brød", reading: "etbrod", meaning: "bread", example: { jp: "Jeg kjøper et brød.", en: "I am buying a loaf of bread." }, accept: ["a loaf", "loaf", "a loaf of bread"], hint: "BRUR. et brød is one whole loaf; the stuff in general is brød with no article. Neuter: definite brødet. The reading is hand-written etbrod — ø will not fold on its own." },
        { id: "no-u6l1-enost", type: "vocab", front: "en ost", reading: "enost", meaning: "cheese", example: { jp: "En ost er ikke billig.", en: "A cheese is not cheap." }, accept: ["a cheese", "a whole cheese"], hint: "OOST. Masculine: definite osten. Brunost — brown cheese, sweet and caramelly — is the one Norwegians will make you try." },
        { id: "no-u6l1-eipolse", type: "vocab", front: "ei pølse", reading: "eipolse", meaning: "sausage", example: { jp: "Jeg spiser ei pølse.", en: "I am eating a sausage." }, accept: ["a sausage", "hot dog", "a hot dog"], hint: "PURL-se. Feminine: definite pølsa. A pølse i lompe — in a soft potato flatbread — is the national street food." },
        { id: "no-u6l1-enfisk", type: "vocab", front: "en fisk", reading: "enfisk", meaning: "fish", example: { jp: "Erling kjøper en fisk.", en: "Erling is buying a fish." }, accept: ["a fish"], hint: "Masculine: definite fisken, plural fisker. Laks, salmon, is the one Norway is famous for." },
        { id: "no-u6l1-eikake", type: "vocab", front: "ei kake", reading: "eikake", meaning: "cake", example: { jp: "Kari lager ei kake.", en: "Kari is making a cake." }, accept: ["a cake", "pastry"], hint: "KAH-ke. Feminine: definite kaka. Norwegians eat it with coffee, constantly." },
        { id: "no-u6l1-eteple", type: "vocab", front: "et eple", reading: "eteple", meaning: "apple", example: { jp: "Et eple er billig.", en: "An apple is cheap." }, accept: ["an apple"], hint: "EP-le. Neuter: definite eplet, plural epler." },
      ],
    },
    {
      id: "no-u6l2",
      unit: 6,
      lesson: 2,
      title: "Eating and drinking",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you eat and drink, and handle the two words that take no article at all: vann and melk.",
      items: [
        { id: "no-u6l2-aspise", type: "vocab", front: "å spise", reading: "aspise", meaning: "to eat", example: { jp: "Vi spiser en fisk.", en: "We are eating a fish." }, accept: ["eat", "to have a meal", "dine"], hint: "SPEE-se, present spiser. sp- is said as written — Norwegian never turns it into \"shp\" the way German does." },
        { id: "no-u6l2-adrikke", type: "vocab", front: "å drikke", reading: "adrikke", meaning: "to drink", example: { jp: "Hva drikker du?", en: "What are you drinking?" }, accept: ["drink", "to have a drink"], hint: "DRIK-ke, present drikker. As a noun, en drikk is a drink and drikke is the drinks in general — mat og drikke." },
        { id: "no-u6l2-vann", type: "vocab", front: "vann", reading: "vann", meaning: "water", example: { jp: "Jeg drikker vann.", en: "I drink water." }, accept: ["the water"], hint: "VANN. No article — this is the mass-noun rule: et vann means a LAKE, not a glass of water. Neuter, so the definite is vannet." },
        { id: "no-u6l2-melk", type: "vocab", front: "melk", reading: "melk", meaning: "milk", example: { jp: "Kari kjøper melk.", en: "Kari is buying milk." }, accept: ["the milk"], hint: "MELK. No article either, for the same reason — you cannot have \"a milk\". Feminine, so the definite is melka." },
        { id: "no-u6l2-enkopp", type: "vocab", front: "en kopp", reading: "enkopp", meaning: "cup", example: { jp: "Jeg har en kopp kaffe.", en: "I have a cup of coffee." }, accept: ["a cup", "mug", "a mug"], hint: "Masculine: definite koppen. En kopp kaffe — a cup of coffee — needs no \"of\": the two nouns just sit side by side." },
        { id: "no-u6l2-etglass", type: "vocab", front: "et glass", reading: "etglass", meaning: "glass", example: { jp: "Et glass vann, vær så snill.", en: "A glass of water, please." }, accept: ["a glass", "tumbler"], hint: "GLASS. Neuter: definite glasset, plural glass — unchanged. Same trick as en kopp kaffe: et glass vann, no \"of\"." },
      ],
    },
    {
      id: "no-u6l3",
      unit: 6,
      lesson: 3,
      title: "Meals, hunger and thirst",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the meals of the day and say you are hungry or thirsty — jeg er sulten — which Norwegian says with er, not har.",
      items: [
        { id: "no-u6l3-enfrokost", type: "vocab", front: "en frokost", reading: "enfrokost", meaning: "breakfast", example: { jp: "Jeg spiser frokost klokka åtte.", en: "I eat breakfast at eight o'clock." }, accept: ["a breakfast", "morning meal"], hint: "FROO-kost. Named meals drop the article after spise: spiser frokost, not \"spiser en frokost\"." },
        { id: "no-u6l3-enmiddag", type: "vocab", front: "en middag", reading: "enmiddag", meaning: "dinner", example: { jp: "Vi lager middag sammen.", en: "We are making dinner together." }, accept: ["a dinner", "main meal", "supper"], hint: "Literally \"midday\" — but Norwegians eat middag in the late afternoon, around four or five, not at noon." },
        { id: "no-u6l3-sulten", type: "vocab", front: "sulten", reading: "sulten", meaning: "hungry", example: { jp: "Jeg er sulten nå.", en: "I am hungry now." }, accept: ["starving", "famished"], hint: "SUEL-ten. Norwegian says you ARE hungry, like English and unlike French or Spanish — jeg er sulten, never \"jeg har\"." },
        { id: "no-u6l3-torst", type: "vocab", front: "tørst", reading: "torst", meaning: "thirsty", example: { jp: "Er du tørst?", en: "Are you thirsty?" }, accept: ["parched"], hint: "TURST — hand-folded reading again, torst. Same pattern as sulten: jeg er tørst." },
        { id: "no-u6l3-alage", type: "vocab", front: "å lage", reading: "alage", meaning: "to make", example: { jp: "Kari lager en god middag.", en: "Kari is making a good dinner." }, accept: ["make", "to cook", "cook", "to prepare"], hint: "LAH-ge, hard g, present lager. It covers making and cooking both — å lage mat is simply \"to cook\"." },
        { id: "no-u6l3-asmake", type: "vocab", front: "å smake", reading: "asmake", meaning: "to taste", example: { jp: "En ost smaker godt.", en: "A cheese tastes good." }, accept: ["taste", "to try", "to sample"], hint: "SMAH-ke. Note godt, not god — after smaker the adjective is working as an adverb and takes -t." },
      ],
    },
    {
      id: "no-u6l4",
      unit: 6,
      lesson: 4,
      title: "The table and the shop",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Lay a table — bord, gaffel, kniv, skål — go to the shop, and ask what something costs.",
      items: [
        { id: "no-u6l4-etbord", type: "vocab", front: "et bord", reading: "etbord", meaning: "table", example: { jp: "Vi har et bord i et rom.", en: "We have a table in a room." }, accept: ["a table", "desk", "board"], hint: "BOOR — the d is silent. Neuter: definite bordet, plural bord, unchanged." },
        { id: "no-u6l4-engaffel", type: "vocab", front: "en gaffel", reading: "engaffel", meaning: "fork", example: { jp: "Gi meg en gaffel, vær så snill.", en: "Give me a fork, please." }, accept: ["a fork"], hint: "GAF-fel, hard g. Masculine: definite gaffelen, plural gafler — the middle e drops out." },
        { id: "no-u6l4-enkniv", type: "vocab", front: "en kniv", reading: "enkniv", meaning: "knife", example: { jp: "En kniv er ikke ei skje.", en: "A knife is not a spoon." }, accept: ["a knife", "blade"], hint: "The k is fully pronounced: KNEEV. Norwegian keeps the k in kn- that English writes and swallows — kniv, kne, knapp." },
        { id: "no-u6l4-eiskal", type: "vocab", front: "ei skål", reading: "eiskal", meaning: "bowl", example: { jp: "Jeg har ei skål og en kopp.", en: "I have a bowl and a cup." }, accept: ["a bowl", "dish", "a dish"], hint: "SKOL — sk before å is a hard sk, not the sh of skje. On its own, Skål! is what Norwegians say when they raise a glass." },
        { id: "no-u6l4-enbutikk", type: "vocab", front: "en butikk", reading: "enbutikk", meaning: "shop", example: { jp: "Erling kjøper melk i butikken.", en: "Erling buys milk in the shop." }, accept: ["a shop", "store", "a store"], hint: "bue-TIKK, stress on the end. Masculine: definite butikken." },
        { id: "no-u6l4-akoste", type: "vocab", front: "å koste", reading: "akoste", meaning: "to cost", example: { jp: "Hvor mye koster et brød?", en: "How much does a loaf cost?" }, accept: ["cost", "to be priced"], hint: "KOS-te, present koster. Hvor mye koster det? is the question you will use in every shop." },
      ],
    },
  ],
};
