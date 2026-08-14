// FR Unit 33 — La nature ("Nature and animals") — A2
// A1 gave seven outdoor nouns (u13l2: ciel, mer, montagne, plage, forêt, arbre,
// fleur) and seven animals (u25l2). This unit widens both: the landscape between
// the mountain and the sea, the farm, the wild animals a child names first, and
// what's underfoot.
// Environment and science words (la pollution, l'énergie…) are deliberately left
// to u41 "Nature and science" — this unit stays concrete and nameable.
// Conventions + the A2 infinitive decision: see the header of fr/unit28.js.
export const FR_UNIT33 = {
  id: "fr-u33",
  lang: "fr",
  title: "La nature",
  order: 33,
  stage: "a2",
  lessons: [
    {
      id: "fr-u33l1",
      unit: 33,
      lesson: 1,
      title: "The landscape",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe where a place is: a river, a lake, an island, the countryside, a field, the ground.",
      items: [
        { id: "fr-u33l1-lariviere", type: "vocab", front: "la rivière", reading: "lariviere", meaning: "river", example: { jp: "La rivière est près de la forêt.", en: "The river is near the forest." }, accept: ["the river", "stream"] },
        { id: "fr-u33l1-lelac", type: "vocab", front: "le lac", reading: "lelac", meaning: "lake", example: { jp: "Le lac est très beau en été.", en: "The lake is very beautiful in summer." }, accept: ["the lake"] },
        { id: "fr-u33l1-lile", type: "vocab", front: "l'île", reading: "lile", meaning: "island", example: { jp: "L'île est loin.", en: "The island is far away." }, accept: ["the island", "isle"], hint: "That accent is a missing s — île was isle, which is why the English word still has one." },
        { id: "fr-u33l1-lacampagne", type: "vocab", front: "la campagne", reading: "lacampagne", meaning: "countryside", example: { jp: "J'habite à la campagne.", en: "I live in the countryside." }, accept: ["rural areas", "the countryside"] },
        { id: "fr-u33l1-lechamp", type: "vocab", front: "le champ", reading: "lechamp", meaning: "field", example: { jp: "Dans le champ, il y a des vaches.", en: "There are cows in the field." }, accept: ["the field", "meadow"] },
        { id: "fr-u33l1-laterre", type: "vocab", front: "la terre", reading: "laterre", meaning: "the ground", example: { jp: "La terre est humide.", en: "The ground is damp." }, accept: ["earth", "soil", "land"], hint: "With a capital letter, la Terre is the planet." },
      ],
    },
    {
      id: "fr-u33l2",
      unit: 33,
      lesson: 2,
      title: "On the farm",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the farm animals: rabbit, pig, sheep, hen, duck — and say what's at the farm.",
      items: [
        { id: "fr-u33l2-laferme", type: "vocab", front: "la ferme", reading: "laferme", meaning: "farm", example: { jp: "À la ferme, il y a un cheval.", en: "There's a horse at the farm." }, accept: ["the farm", "farmhouse"] },
        { id: "fr-u33l2-lelapin", type: "vocab", front: "le lapin", reading: "lelapin", meaning: "rabbit", example: { jp: "Le lapin est petit et blanc.", en: "The rabbit is small and white." }, accept: ["the rabbit", "bunny"] },
        { id: "fr-u33l2-lecochon", type: "vocab", front: "le cochon", reading: "lecochon", meaning: "pig", example: { jp: "Le cochon est dans le champ.", en: "The pig is in the field." }, accept: ["the pig", "hog"] },
        { id: "fr-u33l2-lemouton", type: "vocab", front: "le mouton", reading: "lemouton", meaning: "sheep", example: { jp: "Il y a beaucoup de moutons à la campagne.", en: "There are a lot of sheep in the countryside." }, accept: ["the sheep", "lamb"] },
        { id: "fr-u33l2-lapoule", type: "vocab", front: "la poule", reading: "lapoule", meaning: "hen", example: { jp: "L'œuf de poule est très bon.", en: "The hen's egg is very good." }, accept: ["the hen", "a hen"], hint: "The bird is la poule; the meat on your plate is le poulet." },
        { id: "fr-u33l2-lecanard", type: "vocab", front: "le canard", reading: "lecanard", meaning: "duck", example: { jp: "Le canard est sur le lac.", en: "The duck is on the lake." }, accept: ["the duck"] },
      ],
    },
    {
      id: "fr-u33l3",
      unit: 33,
      lesson: 3,
      title: "Wild animals",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name wild animals — bear, lion, monkey, wolf, insect — and say an animal is wild.",
      items: [
        { id: "fr-u33l3-sauvage", type: "vocab", front: "sauvage", reading: "sauvage", meaning: "wild", example: { jp: "C'est un animal sauvage.", en: "It's a wild animal." }, accept: ["untamed", "savage"] },
        { id: "fr-u33l3-lours", type: "vocab", front: "l'ours", reading: "lours", meaning: "bear", example: { jp: "L'ours est très fort.", en: "The bear is very strong." }, accept: ["the bear"] },
        { id: "fr-u33l3-lelion", type: "vocab", front: "le lion", reading: "lelion", meaning: "lion", example: { jp: "Le lion n'est pas un animal de ferme.", en: "The lion is not a farm animal." }, accept: ["the lion"] },
        { id: "fr-u33l3-lesinge", type: "vocab", front: "le singe", reading: "lesinge", meaning: "monkey", example: { jp: "Le singe est dans l'arbre.", en: "The monkey is in the tree." }, accept: ["the monkey", "ape"] },
        { id: "fr-u33l3-leloup", type: "vocab", front: "le loup", reading: "leloup", meaning: "wolf", example: { jp: "Dans la forêt, il y a un loup.", en: "There's a wolf in the forest." }, accept: ["the wolf"] },
        { id: "fr-u33l3-linsecte", type: "vocab", front: "l'insecte", reading: "linsecte", meaning: "insect", example: { jp: "Il y a un insecte sur la fleur.", en: "There's an insect on the flower." }, accept: ["a bug", "the insect"] },
      ],
    },
    {
      id: "fr-u33l4",
      unit: 33,
      lesson: 4,
      title: "Underfoot and overhead",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe the detail of a place outdoors: grass, a stone, the path, sand, leaves and the moon.",
      items: [
        { id: "fr-u33l4-lherbe", type: "vocab", front: "l'herbe", reading: "lherbe", meaning: "grass", example: { jp: "L'herbe est verte.", en: "The grass is green." }, accept: ["the grass", "herb"] },
        { id: "fr-u33l4-lapierre", type: "vocab", front: "la pierre", reading: "lapierre", meaning: "stone", example: { jp: "Il y a une pierre sur le chemin.", en: "There's a stone on the path." }, accept: ["a rock", "the stone"] },
        { id: "fr-u33l4-lechemin", type: "vocab", front: "le chemin", reading: "lechemin", meaning: "path", example: { jp: "Le chemin va à la mer.", en: "The path goes to the sea." }, accept: ["the way", "track", "the path"] },
        { id: "fr-u33l4-lesable", type: "vocab", front: "le sable", reading: "lesable", meaning: "sand", example: { jp: "Sur la plage, il y a du sable.", en: "There's sand on the beach." }, accept: ["the sand"] },
        { id: "fr-u33l4-lafeuille", type: "vocab", front: "la feuille", reading: "lafeuille", meaning: "leaf", example: { jp: "En automne, les feuilles sont jaunes.", en: "In autumn the leaves are yellow." }, accept: ["the leaf", "sheet", "a sheet of paper"], hint: "A leaf on a tree and a sheet of paper are the same word." },
        { id: "fr-u33l4-lalune", type: "vocab", front: "la lune", reading: "lalune", meaning: "moon", example: { jp: "La nuit, la lune est dans le ciel.", en: "At night the moon is in the sky." }, accept: ["the moon"] },
      ],
    },
  ],
};
