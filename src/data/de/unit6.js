// DE Unit 6 — Food and drink (slot: food) — A1
// Conventions and the FREE list live in de/unit1.js — read that header first.
// Everything here is nominative. Where a verb needs an object, the examples use
// NEUTER or FEMININE nouns only (wir essen eine Tomate, ich trinke Tee), whose
// accusative form is identical to the nominative — so no case is taught early by
// accident. Masculine objects, where den would surface, are avoided on purpose.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT6 = {
  id: "de-u6",
  lang: "de",
  title: "Essen und Trinken",
  order: 6,
  stage: "a1",
  lessons: [
    {
      id: "de-u6l1",
      unit: 6,
      lesson: 1,
      title: "Auf dem Brot",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the staples of a German kitchen — bread, cheese, butter, egg, rice and pasta.",
      items: [
        { id: "de-u6l1-dasbrot", type: "vocab", front: "das Brot", reading: "dasbrot", meaning: "bread", example: { jp: "Das Brot ist sehr gut.", en: "The bread is very good." }, accept: ["bread", "the bread", "loaf"], hint: "BROHT, final t. Germany has hundreds of kinds, and a Bäckerei on nearly every corner selling them." },
        { id: "de-u6l1-derkase", type: "vocab", front: "der Käse", reading: "derkase", meaning: "cheese", example: { jp: "Der Käse ist lecker.", en: "The cheese is delicious." }, accept: ["cheese", "the cheese"], hint: "KAY-ze, two syllables, and the s is said like z. You may type kase or käse." },
        { id: "de-u6l1-diebutter", type: "vocab", front: "die Butter", reading: "diebutter", meaning: "butter", example: { jp: "Die Butter ist hier.", en: "The butter is here." }, accept: ["butter", "the butter"], hint: "BOO-ter, short u — not the English \"buh\". Feminine, unlike most food words in -er." },
        { id: "de-u6l1-dasei", type: "vocab", front: "das Ei", reading: "dasei", meaning: "egg", example: { jp: "Ein Ei, bitte!", en: "One egg, please!" }, drill: { jp: "Das Ei ist sehr klein", en: "The egg is very small" }, accept: ["egg", "the egg"], hint: "Said exactly like English \"eye\" — the ei rule from u1. Plural die Eier." },
        { id: "de-u6l1-derreis", type: "vocab", front: "der Reis", reading: "derreis", meaning: "rice", example: { jp: "Wir essen Reis.", en: "We eat rice." }, drill: { jp: "Der Reis ist sehr lecker", en: "The rice is very delicious" }, accept: ["rice", "the rice"], hint: "RICE, with the same ei. Like English, it takes no article when you mean rice in general." },
        { id: "de-u6l1-dienudeln", type: "vocab", front: "die Nudeln", reading: "dienudeln", meaning: "pasta / noodles", example: { jp: "Die Nudeln sind lecker.", en: "The pasta is delicious." }, accept: ["pasta", "noodles", "the pasta"], hint: "Always plural in this sense, so always sind — where English treats \"pasta\" as singular." },
      ],
    },
    {
      id: "de-u6l2",
      unit: 6,
      lesson: 2,
      title: "Obst und Gemüse",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name common fruit and vegetables and say you are eating them.",
      items: [
        { id: "de-u6l2-derapfel", type: "vocab", front: "der Apfel", reading: "derapfel", meaning: "apple", example: { jp: "Ein Apfel ist gut.", en: "An apple is good." }, drill: { jp: "Der Apfel ist gut", en: "The apple is good" }, accept: ["apple", "the apple"], hint: "AP-fel — pf is one sound, lips together then straight into f. Plural die Äpfel, with the umlaut." },
        { id: "de-u6l2-diebanane", type: "vocab", front: "die Banane", reading: "diebanane", meaning: "banana", example: { jp: "Die Banane ist klein.", en: "The banana is small." }, accept: ["banana", "the banana"], hint: "ba-NAH-ne, three syllables with the final -e said. Nearly every fruit ending in -e is die." },
        { id: "de-u6l2-dietomate", type: "vocab", front: "die Tomate", reading: "dietomate", meaning: "tomato", example: { jp: "Wir essen eine Tomate.", en: "We are eating a tomato." }, drill: { jp: "Die Tomate ist klein", en: "The tomato is small" }, accept: ["tomato", "the tomato"], hint: "to-MAH-te. Same -e ending, same die." },
        { id: "de-u6l2-diekartoffel", type: "vocab", front: "die Kartoffel", reading: "diekartoffel", meaning: "potato", example: { jp: "Die Kartoffel ist groß.", en: "The potato is big." }, accept: ["potato", "the potato"], hint: "kar-TOF-fel. Plural die Kartoffeln — the German table staple." },
        { id: "de-u6l2-dasgemuse", type: "vocab", front: "das Gemüse", reading: "dasgemuse", meaning: "vegetables", example: { jp: "Gemüse ist sehr gut.", en: "Vegetables are very good." }, drill: { jp: "Das Gemüse ist sehr gut", en: "The vegetables are very good" }, accept: ["vegetables", "vegetable", "veg"], hint: "ge-MÜ-ze, with the ü of Tür. Grammatically SINGULAR where English is plural: Gemüse ist, never sind." },
        { id: "de-u6l2-dasobst", type: "vocab", front: "das Obst", reading: "dasobst", meaning: "fruit", example: { jp: "Obst und Gemüse sind lecker.", en: "Fruit and vegetables are delicious." }, drill: { jp: "Das Obst ist lecker", en: "The fruit is delicious" }, accept: ["fruit", "the fruit"], hint: "OHPST — the b hardens to p. Also singular, and it means fruit collectively, not one piece." },
      ],
    },
    {
      id: "de-u6l3",
      unit: 6,
      lesson: 3,
      title: "Getränke",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Order or name a drink — water, coffee, tea, milk, juice or beer.",
      items: [
        { id: "de-u6l3-daswasser", type: "vocab", front: "das Wasser", reading: "daswasser", meaning: "water", example: { jp: "Wasser, bitte!", en: "Water, please!" }, drill: { jp: "Das Wasser ist sehr gut", en: "The water is very good" }, accept: ["water", "the water"], hint: "VA-ser, with w as v. Ordering it, Germans specify: mit Gas or ohne Gas." },
        { id: "de-u6l3-derkaffee", type: "vocab", front: "der Kaffee", reading: "derkaffee", meaning: "coffee", example: { jp: "Wir trinken Kaffee.", en: "We drink coffee." }, drill: { jp: "Der Kaffee ist lecker", en: "The coffee is delicious" }, accept: ["coffee", "the coffee"], hint: "KA-fay, stress on the first syllable — unlike English \"caf-FAY\"." },
        { id: "de-u6l3-dertee", type: "vocab", front: "der Tee", reading: "dertee", meaning: "tea", example: { jp: "Ich trinke Tee.", en: "I drink tea." }, drill: { jp: "Der Tee ist gut", en: "The tea is good" }, accept: ["tea", "the tea"], hint: "TAY, one long syllable. Both Kaffee and Tee are masculine." },
        { id: "de-u6l3-diemilch", type: "vocab", front: "die Milch", reading: "diemilch", meaning: "milk", example: { jp: "Die Milch ist hier.", en: "The milk is here." }, accept: ["milk", "the milk"], hint: "MILSH — the soft ch, as in ich, not the throaty one of Buch." },
        { id: "de-u6l3-dersaft", type: "vocab", front: "der Saft", reading: "dersaft", meaning: "juice", example: { jp: "Der Saft ist lecker.", en: "The juice is delicious." }, accept: ["juice", "the juice"], hint: "ZAFT, s as z. Apfelsaft and Orangensaft are the two you will be offered everywhere." },
        { id: "de-u6l3-dasbier", type: "vocab", front: "das Bier", reading: "dasbier", meaning: "beer", example: { jp: "Das Bier kommt aus München.", en: "The beer comes from Munich." }, accept: ["beer", "the beer"], hint: "BEER, with the ie of hier. Neuter — das Bier — though every other drink here is masculine." },
      ],
    },
    {
      id: "de-u6l4",
      unit: 6,
      lesson: 4,
      title: "Am Tisch",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that you are eating or drinking, name a meal, say something is delicious, and say you are hungry.",
      items: [
        { id: "de-u6l4-essen", type: "vocab", front: "essen", reading: "essen", meaning: "to eat", example: { jp: "Wir essen zusammen.", en: "We eat together." }, accept: ["to eat", "eat"], hint: "Irregular in the middle: ich esse, du isst, er isst, but wir essen. The e becomes i for du and er." },
        { id: "de-u6l4-trinken", type: "vocab", front: "trinken", reading: "trinken", meaning: "to drink", example: { jp: "Was trinkst du?", en: "What are you drinking?" }, drill: { jp: "Wir trinken Kaffee zusammen", en: "We drink coffee together" }, accept: ["to drink", "drink"], hint: "Fully regular: ich trinke, du trinkst, er trinkt. German has no separate \"am drinking\" form — trinke covers both." },
        { id: "de-u6l4-dasfruhstuck", type: "vocab", front: "das Frühstück", reading: "dasfruhstuck", meaning: "breakfast", example: { jp: "Das Frühstück ist jetzt.", en: "Breakfast is now." }, accept: ["breakfast", "the breakfast"], hint: "früh (early) + Stück (piece): the early piece. Two ü sounds — type it fruhstuck." },
        { id: "de-u6l4-dasmittagessen", type: "vocab", front: "das Mittagessen", reading: "dasmittagessen", meaning: "lunch", example: { jp: "Das Mittagessen ist lecker.", en: "Lunch is delicious." }, accept: ["lunch", "the lunch", "midday meal"], hint: "Mittag (midday) + Essen (eating) — another stacked word. The evening one is das Abendessen." },
        { id: "de-u6l4-lecker", type: "vocab", front: "lecker", reading: "lecker", meaning: "delicious", example: { jp: "Das ist sehr lecker!", en: "That is very delicious!" }, accept: ["delicious", "tasty", "yummy"], hint: "The everyday word of praise at a German table — you will hear it far more often than gut for food." },
        { id: "de-u6l4-derhunger", type: "vocab", front: "der Hunger", reading: "derhunger", meaning: "hunger", example: { jp: "Ich habe Hunger.", en: "I am hungry." }, drill: { jp: "Der Hunger ist groß", en: "The hunger is great" }, accept: ["hunger", "the hunger"], hint: "German HAS hunger where English IS hungry: Ich habe Hunger. Same with thirst — Ich habe Durst." },
      ],
    },
  ],
};
