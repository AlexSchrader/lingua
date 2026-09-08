// DE Unit 41 — Essen und Kochen (slot: vocabulary 2 (A2)) — A2
// Block 3 (u41–u50). Conventions: see de/unit1.js.
//
// THEME CHOSEN BY THIS SEAT. The scaffold called u41–u50 "Vocabulary 2..11 (A2)",
// which marks a slot and not a theme (CLAUDE.md — No front language), so choosing
// and naming the ten domains was this block's first task. A1's u6 gave the learner
// eighteen food NOUNS and the two verbs essen and trinken — enough to name a meal
// and not enough to make one. This unit takes the kitchen: what you do to food,
// what you do it with, what you put in, and how the result tastes.
//
// Chosen to sit clear of both siblings: u27 is shopping and money (buying food,
// not cooking it) and u35 is culture and leisure. Nothing in u21–u40 touches a
// stove.
// Rejected as already taught: kochen (u20 — the A1 verb unit took it, and it is
// used freely here instead), essen, trinken and the eighteen u6 nouns.
// Rejected as the same lexeme or too close: das Viertel (~vier u5), die Wolle
// (~wollen u20, and a bad minimal pair to introduce beside a cooking word).
// Kept deliberately: der Kuchen is held in reserve rather than taught, because
// die Küche (u1) folds to almost the same string and the pair would be a
// gratuitous trap in the unit that also teaches the kitchen.
// FREE: Pizza, Suppe, Salat, Butter, Liter, Gramm | Eier, Nudeln, Kartoffeln, Tomaten, Zwiebeln, Zutaten, Teller, Messer, Löffel
export const DE_UNIT41 = {
  id: "de-u41",
  lang: "de",
  title: "Essen und Kochen",
  order: 41,
  stage: "a2",
  lessons: [
    {
      id: "de-u41l1",
      unit: 41,
      lesson: 1,
      title: "Kochen und backen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you are doing to the food: baking, frying, cutting, mixing, stirring and seasoning.",
      items: [
        { id: "de-u41l1-backen", type: "vocab", front: "backen", reading: "backen", meaning: "to bake", example: { jp: "Meine Mutter backt am Sonntag immer Brot.", en: "My mother always bakes bread on Sunday." }, drill: { jp: "Wir backen heute Brot", en: "We are baking bread today" }, accept: ["to bake"], hint: "Only in an oven. Anything in a pan is braten — German splits what English calls cooking." },
        { id: "de-u41l1-braten", type: "vocab", front: "braten", reading: "braten", meaning: "to fry / roast", example: { jp: "Ich brate das Ei in der Pfanne.", en: "I am frying the egg in the pan." }, drill: { jp: "Wir braten die Eier in der Pfanne", en: "We are frying the eggs in the pan" }, accept: ["to fry", "to roast"], hint: "In fat, in a pan or in the oven. Stem change in er/sie: er brät." },
        { id: "de-u41l1-schneiden", type: "vocab", front: "schneiden", reading: "schneiden", meaning: "to cut", example: { jp: "Kannst du bitte das Brot schneiden?", en: "Can you cut the bread, please?" }, drill: { jp: "Wir schneiden das Brot und den Käse", en: "We are cutting the bread and the cheese" }, accept: ["to cut", "to slice", "to chop"], hint: "Also what a hairdresser does. Strong verb: ich schneide, ich habe geschnitten." },
        { id: "de-u41l1-mischen", type: "vocab", front: "mischen", reading: "mischen", meaning: "to mix", example: { jp: "Ich mische das Mehl mit Wasser und Salz.", en: "I mix the flour with water and salt." }, drill: { jp: "Wir mischen das Mehl mit Wasser", en: "We mix the flour with water" }, accept: ["to mix", "to blend"], hint: "mischen MIT something. Regular, and the same word is used for shuffling cards." },
        { id: "de-u41l1-ruhren", type: "vocab", front: "rühren", reading: "ruhren", meaning: "to stir", example: { jp: "Du musst den Kaffee mit dem Löffel rühren.", en: "You have to stir the coffee with the spoon." }, drill: { jp: "Wir rühren den Kaffee mit dem Löffel", en: "We stir the coffee with the spoon" }, accept: ["to stir"], hint: "Moving something round in a liquid. umrühren, with um-, is the everyday form and separable." },
        { id: "de-u41l1-wurzen", type: "vocab", front: "würzen", reading: "wurzen", meaning: "to season", example: { jp: "Du kannst das Gemüse mit Salz würzen.", en: "You can season the vegetables with salt." }, drill: { jp: "Wir würzen das Gemüse mit Salz", en: "We season the vegetables with salt" }, accept: ["to season", "to add spice to"], hint: "From das Gewürz, a spice. Salt, pepper and herbs all count." },
      ],
    },
    {
      id: "de-u41l2",
      unit: 41,
      lesson: 2,
      title: "In der Küche",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what you cook and eat with, and say what is in the pot or on the plate.",
      items: [
        { id: "de-u41l2-dertopf", type: "vocab", front: "der Topf", reading: "dertopf", meaning: "the pot", example: { jp: "In dem Topf kocht das Wasser.", en: "The water is boiling in the pot." }, drill: { jp: "Der Topf ist zu klein", en: "The pot is too small" }, accept: ["the pot", "the saucepan"], hint: "Deep, with a lid, for anything wet. Plural umlauts: die Töpfe." },
        { id: "de-u41l2-diepfanne", type: "vocab", front: "die Pfanne", reading: "diepfanne", meaning: "the frying pan", example: { jp: "In der Pfanne ist noch Öl.", en: "There is still oil in the pan." }, drill: { jp: "Die Pfanne ist sehr heiß", en: "The frying pan is very hot" }, accept: ["the frying pan", "the pan", "the skillet"], hint: "Flat and shallow — what you braten in. Pf at the start is one sound; both letters are said." },
        { id: "de-u41l2-dasmesser", type: "vocab", front: "das Messer", reading: "dasmesser", meaning: "the knife", example: { jp: "Das Messer ist nicht scharf genug.", en: "The knife is not sharp enough." }, drill: { jp: "Das Messer liegt auf dem Tisch", en: "The knife is lying on the table" }, accept: ["the knife"], hint: "Plural identical to the singular: ein Messer, zwei Messer." },
        { id: "de-u41l2-diegabel", type: "vocab", front: "die Gabel", reading: "diegabel", meaning: "the fork", example: { jp: "Ich esse die Nudeln immer mit der Gabel.", en: "I always eat the noodles with a fork." }, drill: { jp: "Die Gabel liegt neben dem Teller", en: "The fork is lying next to the plate" }, accept: ["the fork"], hint: "Also a garden fork and a fork in the road — one word for all three." },
        { id: "de-u41l2-derloffel", type: "vocab", front: "der Löffel", reading: "derloffel", meaning: "the spoon", example: { jp: "Für die Suppe brauchst du einen Löffel.", en: "For the soup you need a spoon." }, drill: { jp: "Der Löffel ist im Topf", en: "The spoon is in the pot" }, accept: ["the spoon"], hint: "Plural identical again: ein Löffel, drei Löffel. You may type loffel or löffel." },
        { id: "de-u41l2-derteller", type: "vocab", front: "der Teller", reading: "derteller", meaning: "the plate", example: { jp: "Auf dem Teller ist nichts.", en: "There is nothing on the plate." }, drill: { jp: "Der Teller liegt auf dem Tisch", en: "The plate is lying on the table" }, accept: ["the plate", "the dish"], hint: "Masculine, and its plural does not change: der Teller, die Teller." },
      ],
    },
    {
      id: "de-u41l3",
      unit: 41,
      lesson: 3,
      title: "Die Zutaten",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what goes into a dish — the ingredient itself, and the salt, sugar, flour and oil you add.",
      items: [
        { id: "de-u41l3-diezutat", type: "vocab", front: "die Zutat", reading: "diezutat", meaning: "the ingredient", example: { jp: "Für das Brot brauchen wir vier Zutaten.", en: "For the bread we need four ingredients." }, drill: { jp: "Die Zutat ist sehr frisch", en: "The ingredient is very fresh" }, accept: ["the ingredient"], hint: "Almost always plural: die Zutaten. From zu + tun, the things you do into it." },
        { id: "de-u41l3-dassalz", type: "vocab", front: "das Salz", reading: "dassalz", meaning: "the salt", example: { jp: "Das Salz ist neben dem Zucker.", en: "The salt is next to the sugar." }, drill: { jp: "Das Salz ist auf dem Tisch", en: "The salt is on the table" }, accept: ["the salt"], hint: "English salt with a German z, which is said ts: zalts." },
        { id: "de-u41l3-derpfeffer", type: "vocab", front: "der Pfeffer", reading: "derpfeffer", meaning: "the pepper", example: { jp: "Zu viel Pfeffer macht das Essen zu scharf.", en: "Too much pepper makes the food too spicy." }, drill: { jp: "Der Pfeffer ist sehr scharf", en: "The pepper is very hot" }, accept: ["the pepper"], hint: "The spice, not the vegetable — a bell pepper is die Paprika." },
        { id: "de-u41l3-derzucker", type: "vocab", front: "der Zucker", reading: "derzucker", meaning: "the sugar", example: { jp: "Ich trinke den Kaffee ohne Zucker.", en: "I drink my coffee without sugar." }, drill: { jp: "Der Zucker ist im Schrank", en: "The sugar is in the cupboard" }, accept: ["the sugar"], hint: "Sugar and Zucker are the same word. Ohne Zucker is what you say in every café." },
        { id: "de-u41l3-dasmehl", type: "vocab", front: "das Mehl", reading: "dasmehl", meaning: "the flour", example: { jp: "Wir haben kein Mehl im Haus.", en: "We have no flour in the house." }, drill: { jp: "Das Mehl ist im Schrank", en: "The flour is in the cupboard" }, accept: ["the flour"], hint: "English meal, as in oatmeal, is the same old word. Note Mehl and mehr differ by one letter." },
        { id: "de-u41l3-dasol", type: "vocab", front: "das Öl", reading: "dasol", meaning: "the oil", example: { jp: "In die Pfanne kommt das Öl.", en: "The oil goes into the pan." }, drill: { jp: "Das Öl ist in der Pfanne", en: "The oil is in the frying pan" }, accept: ["the oil"], hint: "Two letters and an umlaut. Oil and Öl are the same word, and it covers the car kind too." },
      ],
    },
    {
      id: "de-u41l4",
      unit: 41,
      lesson: 4,
      title: "Wie schmeckt es?",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how something tastes — sweet, salty, sour, spicy or fresh — and ask whether someone likes it.",
      items: [
        { id: "de-u41l4-schmecken", type: "vocab", front: "schmecken", reading: "schmecken", meaning: "to taste", example: { jp: "Der Salat schmeckt mir sehr gut.", en: "The salad tastes very good to me." }, drill: { jp: "Die Nudeln schmecken sehr gut", en: "The noodles taste very good" }, accept: ["to taste", "to taste good"], hint: "Works like gefallen (u17): the FOOD is the subject and you are dative — es schmeckt mir." },
        { id: "de-u41l4-suss", type: "vocab", front: "süß", reading: "suss", meaning: "sweet", example: { jp: "Der Tee ist mir zu süß.", en: "The tea is too sweet for me." }, drill: { jp: "Die Banane ist sehr süß", en: "The banana is very sweet" }, accept: ["sweet"], hint: "Also sweet about a person or an animal, exactly as in English. ß, so you may type suss or süß." },
        { id: "de-u41l4-salzig", type: "vocab", front: "salzig", reading: "salzig", meaning: "salty", example: { jp: "Die Suppe ist heute sehr salzig.", en: "The soup is very salty today." }, drill: { jp: "Der Käse ist zu salzig", en: "The cheese is too salty" }, accept: ["salty"], hint: "Salz plus -ig, the ending that turns a noun into an adjective." },
        { id: "de-u41l4-sauer", type: "vocab", front: "sauer", reading: "sauer", meaning: "sour", example: { jp: "Der Apfel ist sauer, aber ich esse ihn gern.", en: "The apple is sour, but I eat it happily." }, drill: { jp: "Der Apfel ist sehr sauer", en: "The apple is very sour" }, accept: ["sour", "acidic"], hint: "Also means cross with someone: er ist sauer auf mich. Same word, two very different jobs." },
        { id: "de-u41l4-scharf", type: "vocab", front: "scharf", reading: "scharf", meaning: "spicy / sharp", example: { jp: "Ich esse gern scharf, aber nicht zu scharf.", en: "I like eating spicy food, but not too spicy." }, drill: { jp: "Das Essen ist heute sehr scharf", en: "The food is very spicy today" }, accept: ["spicy", "hot", "sharp"], hint: "One word for chilli-hot food and for a knife with a good edge. Never heiß — that is temperature." },
        { id: "de-u41l4-frisch", type: "vocab", front: "frisch", reading: "frisch", meaning: "fresh", example: { jp: "Das Brot ist noch frisch.", en: "The bread is still fresh." }, drill: { jp: "Das Obst ist sehr frisch", en: "The fruit is very fresh" }, accept: ["fresh"], hint: "Fresh and frisch are the same word. Frisch gestrichen on a bench means wet paint." },
      ],
    },
  ],
};
