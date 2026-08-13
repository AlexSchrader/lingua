// FR Unit 50 — Combien exactement ("How much exactly") — A2
// Strand D, coverage unit 4 of 11 (block 3). Slot: coverage-a2-4 (generic
// "Vocabulary 4 (A2)"); given a real theme so the four lessons cohere — the slot
// NUMBER is kept, only the name deviates. See unit48.js for the block-3 rules.
// Quantity, approximation, measurement and the size adjectives that go with them —
// the cross-cutting maths of everyday speech, not a topical domain.
export const FR_UNIT50 = {
  id: "fr-u50",
  lang: "fr",
  title: "Combien exactement",
  order: 50,
  stage: "a2",
  lessons: [
    {
      id: "fr-u50l1",
      unit: 50,
      lesson: 1,
      title: "Some, several, none",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how many without counting: a few, several, half, others, most of them — or none at all.",
      items: [
        { id: "fr-u50l1-quelques", type: "vocab", front: "quelques", reading: "quelques", meaning: "a few", example: { jp: "J'ai quelques questions.", en: "I have a few questions." }, accept: ["a couple of", "a handful of"], hint: "Always plural, always before the noun: quelques jours, quelques amis. More than plusieurs? No — quelques is the smaller of the two." },
        { id: "fr-u50l1-plusieurs", type: "vocab", front: "plusieurs", reading: "plusieurs", meaning: "several", example: { jp: "Il y a plusieurs magasins.", en: "There are several shops." }, accept: ["a number of", "many", "quite a few"] },
        { id: "fr-u50l1-lamoitie", type: "vocab", front: "la moitié", reading: "lamoitie", meaning: "half", example: { jp: "Je veux la moitié du gâteau.", en: "I want half of the cake." }, accept: ["the half", "one half"], hint: "The noun for a half. Followed by de: la moitié du gâteau." },
        { id: "fr-u50l1-dautres", type: "vocab", front: "d'autres", reading: "dautres", meaning: "other ones", example: { jp: "Il y a d'autres livres ici.", en: "There are other books here." }, accept: ["others", "other", "some others"] },
        { id: "fr-u50l1-laplupart", type: "vocab", front: "la plupart", reading: "laplupart", meaning: "most", example: { jp: "La plupart des clients sont contents.", en: "Most of the customers are happy." }, accept: ["most of them", "the majority", "most of"], hint: "Followed by des: la plupart des clients." },
        { id: "fr-u50l1-aucun", type: "vocab", front: "aucun", reading: "aucun", meaning: "not a single one", example: { jp: "Je n'ai aucun livre.", en: "I don't have a single book." }, accept: ["none", "not one"], hint: "A negative word like rien and personne — it keeps the ne and drops the pas: je n'ai aucun livre." },
      ],
    },
    {
      id: "fr-u50l2",
      unit: 50,
      lesson: 2,
      title: "Almost and about",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give a number you're not sure of — about, almost, at most, roughly — or insist that it's exact.",
      items: [
        { id: "fr-u50l2-environ", type: "vocab", front: "environ", reading: "environ", meaning: "about", example: { jp: "J'ai environ vingt euros.", en: "I have about twenty euros." }, accept: ["approximately", "thereabouts"], hint: "Sits right before the number it softens: environ vingt euros. à peu près is interchangeable here, and is the one that also works before an adjective (à peu près prêt)." },
        { id: "fr-u50l2-quasiment", type: "vocab", front: "quasiment", reading: "quasiment", meaning: "almost", example: { jp: "Il est quasiment midi.", en: "It's almost noon." }, accept: ["nearly", "just about", "practically"] },
        { id: "fr-u50l2-aumaximum", type: "vocab", front: "au maximum", reading: "aumaximum", meaning: "at most", example: { jp: "Il y a dix livres au maximum.", en: "There are ten books at most." }, accept: ["at the very most", "maximum", "no more than"] },
        { id: "fr-u50l2-apeupres", type: "vocab", front: "à peu près", reading: "apeupres", meaning: "roughly", example: { jp: "Il fait à peu près vingt degrés.", en: "It's roughly twenty degrees." }, accept: ["approximately", "thereabouts"] },
        { id: "fr-u50l2-exactement", type: "vocab", front: "exactement", reading: "exactement", meaning: "exactly", example: { jp: "C'est exactement ça.", en: "That's exactly it." }, accept: ["precisely", "just so"] },
        { id: "fr-u50l2-toutafait", type: "vocab", front: "tout à fait", reading: "toutafait", meaning: "entirely", example: { jp: "C'est tout à fait vrai.", en: "That's entirely true." }, accept: ["quite so", "fully", "quite"], hint: "On its own, « Tout à fait ! » is a strong yes — the French \"absolutely\"." },
      ],
    },
    {
      id: "fr-u50l3",
      unit: 50,
      lesson: 3,
      title: "Measuring and weighing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Measure and weigh things, and ask about a weight, a height, a width or a number.",
      items: [
        { id: "fr-u50l3-mesurer", type: "vocab", front: "mesurer", reading: "mesurer", meaning: "to measure", example: { jp: "Je vais mesurer la table.", en: "I'm going to measure the table." }, accept: ["measure", "be tall"], hint: "Also how you give a person's height: je mesure un mètre quatre-vingts." },
        { id: "fr-u50l3-peser", type: "vocab", front: "peser", reading: "peser", meaning: "to weigh", example: { jp: "Je veux peser les tomates.", en: "I want to weigh the tomatoes." }, accept: ["weigh"] },
        { id: "fr-u50l3-lepoids", type: "vocab", front: "le poids", reading: "lepoids", meaning: "weight", example: { jp: "Le poids est important.", en: "The weight is important." }, accept: ["the weight"], hint: "The d and the s are both silent — it sounds like « pwa »." },
        { id: "fr-u50l3-lahauteur", type: "vocab", front: "la hauteur", reading: "lahauteur", meaning: "height", example: { jp: "Quelle est la hauteur ?", en: "What is the height?" }, accept: ["the height"] },
        { id: "fr-u50l3-lalargeur", type: "vocab", front: "la largeur", reading: "lalargeur", meaning: "width", example: { jp: "Je vais mesurer la largeur.", en: "I'm going to measure the width." }, accept: ["the width", "breadth"] },
        { id: "fr-u50l3-lenombre", type: "vocab", front: "le nombre", reading: "lenombre", meaning: "number", example: { jp: "Le nombre est trop grand.", en: "The number is too big." }, accept: ["the number", "quantity", "amount"], hint: "le nombre is how many there are; le numéro is the label on a door or a phone." },
      ],
    },
    {
      id: "fr-u50l4",
      unit: 50,
      lesson: 4,
      title: "Heavy or light",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe an object by its weight and its size: heavy, light, full, empty, wide, narrow.",
      items: [
        { id: "fr-u50l4-lourd", type: "vocab", front: "lourd", reading: "lourd", meaning: "heavy", example: { jp: "Mon sac est très lourd.", en: "My bag is very heavy." }, accept: ["weighty"] },
        { id: "fr-u50l4-leger", type: "vocab", front: "léger", reading: "leger", meaning: "light", example: { jp: "Ce manteau est léger.", en: "This coat is light." }, accept: ["lightweight", "not heavy"], hint: "Light in WEIGHT only — the light you switch on is la lampe." },
        { id: "fr-u50l4-plein", type: "vocab", front: "plein", reading: "plein", meaning: "full", example: { jp: "Le verre est plein.", en: "The glass is full." }, accept: ["filled"] },
        { id: "fr-u50l4-vide", type: "vocab", front: "vide", reading: "vide", meaning: "empty", example: { jp: "La bouteille est vide.", en: "The bottle is empty." }, accept: ["emptied", "hollow"] },
        { id: "fr-u50l4-large", type: "vocab", front: "large", reading: "large", meaning: "wide", example: { jp: "La rue est large.", en: "The street is wide." }, accept: ["broad"], hint: "False friend: large means WIDE, not \"large\". Big is grand." },
        { id: "fr-u50l4-etroit", type: "vocab", front: "étroit", reading: "etroit", meaning: "narrow", example: { jp: "L'escalier est étroit.", en: "The staircase is narrow." }, accept: ["tight", "cramped"] },
      ],
    },
  ],
};
