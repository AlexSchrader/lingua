// FR Unit 41 — Nature and science (slot: science) — A2
// SCOPE BOUNDARY (deliberate): the slot is called "nature and science", but the
// nature half is owned twice over already — A1 Unit 13 taught the weather and
// the landscape (la mer, la montagne, la forêt, l'arbre, la fleur) and A1 Unit 25
// the animals, while block 1's Unit 33 is "nature and animals". So this unit
// takes the SCIENCE reading of the slot: what's above us, how things are found
// out, what we are doing to the planet, and what things are made of. La nature
// itself is left unclaimed for Unit 33.
//
// POST-MERGE (2026-08-05): the boundary held, but not perfectly — block 1's
// Unit 33 also claimed la terre and la lune, which this unit had drafted as
// astronomy. Lower slot wins, so Lesson 1 gave them up and became "the sky and
// space", swapping in le télescope and la fusée. Both words remain available to
// examples here; only the teaching slot moved.
// Conventions: see fr/unit1.js. Examples use A1 vocab plus Units 38–40.
export const FR_UNIT41 = {
  id: "fr-u41",
  lang: "fr",
  title: "Les sciences",
  order: 41,
  stage: "a2",
  lessons: [
    {
      id: "fr-u41l1",
      unit: 41,
      lesson: 1,
      title: "The sky and space",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about what's over your head: une planète, les étoiles, l'espace, l'univers, un télescope.",
      items: [
        { id: "fr-u41l1-laplanete", type: "vocab", front: "la planète", reading: "laplanete", meaning: "the planet", example: { jp: "Cette planète est très loin.", en: "This planet is very far away." }, accept: ["planet", "world", "the planet"] },
        { id: "fr-u41l1-letoile", type: "vocab", front: "l'étoile", reading: "letoile", meaning: "the star", example: { jp: "Il y a beaucoup d'étoiles dans le ciel.", en: "There are a lot of stars in the sky." }, accept: ["star", "the star"] },
        { id: "fr-u41l1-lespace", type: "vocab", front: "l'espace", reading: "lespace", meaning: "space", example: { jp: "Il fait très froid dans l'espace.", en: "It's very cold in space." }, accept: ["space", "room", "outer space"], hint: "Also room in the everyday sense: il n'y a pas assez d'espace." },
        { id: "fr-u41l1-lunivers", type: "vocab", front: "l'univers", reading: "lunivers", meaning: "the universe", example: { jp: "L'univers est très grand.", en: "The universe is very big." }, accept: ["universe", "cosmos", "the universe"] },
        { id: "fr-u41l1-letelescope", type: "vocab", front: "le télescope", reading: "letelescope", meaning: "the telescope", example: { jp: "Je regarde les étoiles avec un télescope.", en: "I look at the stars with a telescope." }, accept: ["telescope", "the telescope"] },
        { id: "fr-u41l1-lafusee", type: "vocab", front: "la fusée", reading: "lafusee", meaning: "the rocket", example: { jp: "La fusée part dans l'espace.", en: "The rocket goes off into space." }, accept: ["rocket", "the rocket", "spacecraft"] },
      ],
    },
    {
      id: "fr-u41l2",
      unit: 41,
      lesson: 2,
      title: "Finding things out",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about science and how it works: la science, la recherche, une expérience, le résultat.",
      items: [
        { id: "fr-u41l2-lascience", type: "vocab", front: "la science", reading: "lascience", meaning: "science", example: { jp: "Mon frère aime la science.", en: "My brother likes science." }, accept: ["the science", "sciences"] },
        { id: "fr-u41l2-larecherche", type: "vocab", front: "la recherche", reading: "larecherche", meaning: "research", example: { jp: "Ce professeur fait de la recherche.", en: "This professor does research." }, accept: ["the research", "search", "study"], hint: "Straight from chercher (Unit 18). Also a search: une recherche sur internet." },
        { id: "fr-u41l2-lexperience", type: "vocab", front: "l'expérience", reading: "lexperience", meaning: "the experiment", example: { jp: "C'est une expérience importante.", en: "It's an important experiment." }, accept: ["experiment", "experience", "the experience"], hint: "Two meanings in one word: an experiment, and experience in the life sense." },
        { id: "fr-u41l2-leresultat", type: "vocab", front: "le résultat", reading: "leresultat", meaning: "the result", example: { jp: "Le résultat n'est pas bon.", en: "The result isn't good." }, accept: ["result", "outcome", "score"] },
        { id: "fr-u41l2-ladecouverte", type: "vocab", front: "la découverte", reading: "ladecouverte", meaning: "the discovery", example: { jp: "C'est une belle découverte.", en: "It's a fine discovery." }, drill: { jp: "La découverte est très belle", en: "The discovery is very beautiful" }, accept: ["discovery", "find", "the discovery"], hint: "belle is the feminine of beau (Unit 8) — un beau jour, une belle découverte. That pair is irregular; most adjectives just add -e." },
        { id: "fr-u41l2-lescientifique", type: "vocab", front: "le scientifique", reading: "lescientifique", meaning: "the scientist", example: { jp: "Ce scientifique travaille à Paris.", en: "This scientist works in Paris." }, accept: ["scientist", "researcher", "the scientist"], hint: "The same word is the adjective: une méthode scientifique." },
      ],
    },
    {
      id: "fr-u41l3",
      unit: 41,
      lesson: 3,
      title: "The environment",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say something about the planet's health: l'environnement, la pollution, l'énergie, le climat, je recycle.",
      items: [
        { id: "fr-u41l3-lenvironnement", type: "vocab", front: "l'environnement", reading: "lenvironnement", meaning: "the environment", example: { jp: "L'environnement est important pour tout le monde.", en: "The environment is important for everyone." }, accept: ["environment", "surroundings"], hint: "Two n's in the middle: environnement. It catches out native writers too." },
        { id: "fr-u41l3-lapollution", type: "vocab", front: "la pollution", reading: "lapollution", meaning: "pollution", example: { jp: "Il y a beaucoup de pollution en ville.", en: "There's a lot of pollution in the city." }, accept: ["the pollution"] },
        { id: "fr-u41l3-lenergie", type: "vocab", front: "l'énergie", reading: "lenergie", meaning: "energy", example: { jp: "Le soleil donne de l'énergie.", en: "The sun gives energy." }, accept: ["energy", "power", "the energy"] },
        { id: "fr-u41l3-leclimat", type: "vocab", front: "le climat", reading: "leclimat", meaning: "the climate", example: { jp: "Le climat de la France est doux.", en: "France's climate is mild." }, accept: ["climate", "the climate"] },
        { id: "fr-u41l3-lesdechets", type: "vocab", front: "les déchets", reading: "lesdechets", meaning: "the waste", example: { jp: "Il y a trop de déchets dans la rue.", en: "There's too much rubbish in the street." }, accept: ["waste", "rubbish", "garbage", "trash"], hint: "Almost always plural — les déchets." },
        { id: "fr-u41l3-jerecycle", type: "vocab", front: "je recycle", reading: "jerecycle", meaning: "I recycle", example: { jp: "Je recycle le papier.", en: "I recycle paper." }, accept: ["i'm recycling", "i recycle"] },
      ],
    },
    {
      id: "fr-u41l4",
      unit: 41,
      lesson: 4,
      title: "What things are made of",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what something is made of with en: en bois, en métal, en plastique.",
      items: [
        { id: "fr-u41l4-lefeu", type: "vocab", front: "le feu", reading: "lefeu", meaning: "the fire", example: { jp: "Il y a un feu dans la forêt.", en: "There's a fire in the forest." }, accept: ["fire", "light", "the fire"], hint: "Also the traffic light: le feu rouge, le feu vert." },
        { id: "fr-u41l4-lair", type: "vocab", front: "l'air", reading: "lair", meaning: "the air", example: { jp: "À la montagne, l'air est frais.", en: "In the mountains the air is fresh." }, accept: ["air", "the air"], hint: "The same air as in avoir l'air (Unit 38) — to have the air of something." },
        { id: "fr-u41l4-lebois", type: "vocab", front: "le bois", reading: "lebois", meaning: "the wood", example: { jp: "Cette table est en bois.", en: "This table is made of wood." }, drill: { jp: "Le bois est très vieux", en: "The wood is very old" }, accept: ["wood", "the wood", "woods"], hint: "en bois = made of wood. en + a material is how French says what a thing is made of." },
        { id: "fr-u41l4-lemetal", type: "vocab", front: "le métal", reading: "lemetal", meaning: "the metal", example: { jp: "Cette chaise est en métal.", en: "This chair is made of metal." }, accept: ["metal", "the metal"] },
        { id: "fr-u41l4-leplastique", type: "vocab", front: "le plastique", reading: "leplastique", meaning: "the plastic", example: { jp: "Cette bouteille est en plastique.", en: "This bottle is made of plastic." }, accept: ["plastic", "the plastic"] },
        { id: "fr-u41l4-lalumiere", type: "vocab", front: "la lumière", reading: "lalumiere", meaning: "the light", example: { jp: "La lumière du soleil est très forte.", en: "The sunlight is very strong." }, accept: ["light", "the light", "brightness"], hint: "La lumière is light itself; la lampe (Unit 17) is the thing that makes it." },
      ],
    },
  ],
};
