// FR Unit 51 — Où exactement ("Where exactly") — A2
// Strand D, coverage unit 5 of 11 (block 3). Slot: coverage-a2-5 (generic
// "Vocabulary 5 (A2)"); given a real theme so the four lessons cohere — the slot
// NUMBER is kept, only the name deviates. See unit48.js for the block-3 rules.
// Position and place. A1 already has sur / dans / devant / à gauche / à droite /
// loin / près; this unit finishes the set (behind, under, between, outside, in the
// middle) so a learner can put anything anywhere.
export const FR_UNIT51 = {
  id: "fr-u51",
  lang: "fr",
  title: "Où exactement",
  order: 51,
  stage: "a2",
  lessons: [
    {
      id: "fr-u51l1",
      unit: 51,
      lesson: 1,
      title: "Behind, under, between",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Place one thing relative to another: behind it, under it, between two things, against it, beside it or opposite it.",
      items: [
        { id: "fr-u51l1-derriere", type: "vocab", front: "derrière", reading: "derriere", meaning: "behind", example: { jp: "Le jardin est derrière la maison.", en: "The garden is behind the house." }, accept: ["at the back of", "in back of"], hint: "The opposite of devant, which you already know." },
        { id: "fr-u51l1-sous", type: "vocab", front: "sous", reading: "sous", meaning: "under", example: { jp: "Le chat est sous la table.", en: "The cat is under the table." }, accept: ["underneath", "beneath"], hint: "The opposite of sur. One letter apart in French, so listen for the vowel: sur / sous." },
        { id: "fr-u51l1-entre", type: "vocab", front: "entre", reading: "entre", meaning: "between", example: { jp: "La gare est entre l'école et le parc.", en: "The station is between the school and the park." }, accept: ["in between", "among"] },
        { id: "fr-u51l1-contre", type: "vocab", front: "contre", reading: "contre", meaning: "against", example: { jp: "Le vélo est contre le mur.", en: "The bike is against the wall." }, accept: ["up against", "leaning on"], hint: "contre means TOUCHING it. Merely nearby is à côté de, later in this lesson." },
        { id: "fr-u51l1-acotede", type: "vocab", front: "à côté de", reading: "acotede", meaning: "next to", example: { jp: "L'hôtel est à côté de la gare.", en: "The hotel is next to the station." }, accept: ["beside", "alongside", "by"] },
        { id: "fr-u51l1-enfacede", type: "vocab", front: "en face de", reading: "enfacede", meaning: "opposite", example: { jp: "Ma chambre est en face de la mer.", en: "My bedroom is opposite the sea." }, accept: ["across from", "facing"], hint: "Not \"in front of\" — that's devant. en face de means it's on the OTHER side, looking back at you." },
      ],
    },
    {
      id: "fr-u51l2",
      unit: 51,
      lesson: 2,
      title: "Outside, inside, up, down",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say which side or which level something is on: outside, inside, upstairs, downstairs, above or below.",
      items: [
        { id: "fr-u51l2-dehors", type: "vocab", front: "dehors", reading: "dehors", meaning: "outside", example: { jp: "Les enfants sont dehors.", en: "The children are outside." }, accept: ["out", "outdoors"] },
        { id: "fr-u51l2-dedans", type: "vocab", front: "dedans", reading: "dedans", meaning: "inside", example: { jp: "Il y a un stylo dedans.", en: "There's a pen inside." }, accept: ["in it", "indoors", "in there"], hint: "dedans stands alone (\"inside\"); dans needs a noun after it (dans la boîte)." },
        { id: "fr-u51l2-enhaut", type: "vocab", front: "en haut", reading: "enhaut", meaning: "upstairs", example: { jp: "Ma chambre est en haut.", en: "My bedroom is upstairs." }, accept: ["up", "at the top"], hint: "en haut / en bas are about the LEVEL of a building. au-dessus / en dessous compare two things directly." },
        { id: "fr-u51l2-enbas", type: "vocab", front: "en bas", reading: "enbas", meaning: "downstairs", example: { jp: "La cuisine est en bas.", en: "The kitchen is downstairs." }, accept: ["down", "at the bottom"] },
        { id: "fr-u51l2-audessus", type: "vocab", front: "au-dessus", reading: "audessus", meaning: "above", example: { jp: "L'appartement au-dessus est vide.", en: "The flat above is empty." }, accept: ["over", "on top", "overhead"] },
        { id: "fr-u51l2-endessous", type: "vocab", front: "en dessous", reading: "endessous", meaning: "below", example: { jp: "L'étage en dessous est fermé.", en: "The floor below is closed." }, accept: ["beneath", "one level down"] },
      ],
    },
    {
      id: "fr-u51l3",
      unit: 51,
      lesson: 3,
      title: "Everywhere and nowhere",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about place without naming it: everywhere, elsewhere, somewhere, nowhere, around — and how far you go.",
      items: [
        { id: "fr-u51l3-partout", type: "vocab", front: "partout", reading: "partout", meaning: "everywhere", example: { jp: "Il y a des fleurs partout.", en: "There are flowers everywhere." }, accept: ["all over", "all around"] },
        { id: "fr-u51l3-ailleurs", type: "vocab", front: "ailleurs", reading: "ailleurs", meaning: "elsewhere", example: { jp: "Je vais ailleurs.", en: "I'm going elsewhere." }, accept: ["somewhere else", "another place"] },
        { id: "fr-u51l3-quelquepart", type: "vocab", front: "quelque part", reading: "quelquepart", meaning: "somewhere", example: { jp: "Mes clés sont quelque part ici.", en: "My keys are somewhere here." }, accept: ["someplace", "some place"] },
        { id: "fr-u51l3-nullepart", type: "vocab", front: "nulle part", reading: "nullepart", meaning: "nowhere", example: { jp: "Je ne vais nulle part.", en: "I'm not going anywhere." }, accept: ["not anywhere", "no place"], hint: "A negative like rien and personne: it keeps the ne and drops the pas — je ne vais nulle part." },
        { id: "fr-u51l3-autour", type: "vocab", front: "autour", reading: "autour", meaning: "around", example: { jp: "Il y a des arbres tout autour.", en: "There are trees all around." }, accept: ["round about", "all around"], hint: "Natives reach for « tout autour » when it's on every side, and « autour de » before a noun: autour de la table." },
        { id: "fr-u51l3-jusqua", type: "vocab", front: "jusqu'à", reading: "jusqua", meaning: "as far as", example: { jp: "Je marche jusqu'à la gare.", en: "I walk as far as the station." }, accept: ["until", "up to", "till"], hint: "Works for place AND time: jusqu'à la gare, jusqu'à midi." },
      ],
    },
    {
      id: "fr-u51l4",
      unit: 51,
      lesson: 4,
      title: "The corner and the middle",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the part of a space you mean: the corner, the middle, the edge, the spot, the room left, the centre.",
      items: [
        { id: "fr-u51l4-lecoin", type: "vocab", front: "le coin", reading: "lecoin", meaning: "corner", example: { jp: "La lampe est dans le coin.", en: "The lamp is in the corner." }, accept: ["the corner", "nook"] },
        { id: "fr-u51l4-lemilieu", type: "vocab", front: "le milieu", reading: "lemilieu", meaning: "middle", example: { jp: "La lampe est au milieu de la table.", en: "The lamp is in the middle of the table." }, accept: ["the middle", "midpoint"], hint: "au milieu de = in the middle of. That au is just à + le squeezed together. le milieu is a POSITION; le centre is the place itself (le centre de la ville)." },
        { id: "fr-u51l4-lebord", type: "vocab", front: "le bord", reading: "lebord", meaning: "edge", example: { jp: "Je marche au bord de la mer.", en: "I walk along the edge of the sea." }, accept: ["the edge", "side", "rim", "shore"], hint: "au bord de la mer is the everyday way to say \"at the seaside\"." },
        { id: "fr-u51l4-lendroit", type: "vocab", front: "l'endroit", reading: "lendroit", meaning: "place", example: { jp: "C'est un joli endroit.", en: "It's a pretty place." }, accept: ["the place", "spot", "location"] },
        { id: "fr-u51l4-laplace", type: "vocab", front: "la place", reading: "laplace", meaning: "room", example: { jp: "Il n'y a pas de place.", en: "There's no room." }, accept: ["space", "seat", "square"], hint: "Three jobs: room (il n'y a pas de place), a seat, and a town square. It is NOT the general word for a place — that's l'endroit." },
        { id: "fr-u51l4-lecentre", type: "vocab", front: "le centre", reading: "lecentre", meaning: "centre", example: { jp: "Le centre de la ville est loin.", en: "The centre of the town is far." }, accept: ["center", "the centre", "the center"] },
      ],
    },
  ],
};
