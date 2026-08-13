// FR Unit 13 — Le temps ("The weather") — A1
// Weather comes BEFORE months on purpose: "il fait froid" / "il pleut" are how a
// learner actually talks about January, so the months unit that follows can use
// them. `il fait` is taught explicitly here — it's the impersonal verb French uses
// for all weather, and nothing else introduces it. Conventions: see fr/unit1.js.
export const FR_UNIT13 = {
  id: "fr-u13",
  lang: "fr",
  title: "Le temps",
  order: 14,
  stage: "a1",
  lessons: [
    {
      id: "fr-u13l1",
      unit: 13,
      lesson: 1,
      title: "What's the weather?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about the weather: il fait beau, il pleut, il neige — le soleil, la pluie, le vent.",
      items: [
        { id: "fr-u13l1-ilfait", type: "vocab", front: "il fait", reading: "ilfait", meaning: "it is (weather)", example: { jp: "Il fait beau aujourd'hui !", en: "The weather is nice today!" }, accept: ["the weather is", "it's"], hint: "Weather uses faire, not être: il fait beau / il fait chaud / il fait froid. Never \"il est chaud\" for weather." },
        { id: "fr-u13l1-lesoleil", type: "vocab", front: "le soleil", reading: "lesoleil", meaning: "sun", example: { jp: "Le soleil est jaune.", en: "The sun is yellow." }, accept: ["the sun", "sunshine"] },
        { id: "fr-u13l1-lapluie", type: "vocab", front: "la pluie", reading: "lapluie", meaning: "rain", example: { jp: "Je n'aime pas la pluie.", en: "I don't like the rain." }, accept: ["the rain"] },
        { id: "fr-u13l1-ilpleut", type: "vocab", front: "il pleut", reading: "ilpleut", meaning: "it is raining", example: { jp: "Il pleut ! Je rentre à la maison.", en: "It's raining! I'm going home." }, accept: ["it rains", "it's raining"] },
        { id: "fr-u13l1-ilneige", type: "vocab", front: "il neige", reading: "ilneige", meaning: "it is snowing", example: { jp: "Il neige et il fait très froid.", en: "It's snowing and it's very cold." }, accept: ["it snows", "it's snowing"] },
        { id: "fr-u13l1-laneige", type: "vocab", front: "la neige", reading: "laneige", meaning: "snow", example: { jp: "La neige est blanche.", en: "The snow is white." }, accept: ["the snow"] },
        { id: "fr-u13l1-levent", type: "vocab", front: "le vent", reading: "levent", meaning: "wind", example: { jp: "Le vent est froid aujourd'hui.", en: "The wind is cold today." }, accept: ["the wind"] },
        { id: "fr-u13l1-lenuage", type: "vocab", front: "le nuage", reading: "lenuage", meaning: "cloud", example: { jp: "Le nuage est blanc.", en: "The cloud is white." }, accept: ["the cloud"] },
      ],
    },
    {
      id: "fr-u13l2",
      unit: 13,
      lesson: 2,
      title: "Outdoors",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what's outside: le ciel, la mer, la montagne, la plage, la forêt, l'arbre, la fleur.",
      items: [
        { id: "fr-u13l2-leciel", type: "vocab", front: "le ciel", reading: "leciel", meaning: "sky", example: { jp: "Le ciel est bleu.", en: "The sky is blue." }, accept: ["the sky", "heaven"] },
        { id: "fr-u13l2-lamer", type: "vocab", front: "la mer", reading: "lamer", meaning: "sea", example: { jp: "La mer est bleue aujourd'hui.", en: "The sea is blue today." }, accept: ["the sea", "ocean"] },
        { id: "fr-u13l2-lamontagne", type: "vocab", front: "la montagne", reading: "lamontagne", meaning: "mountain", example: { jp: "À la montagne, il neige souvent.", en: "In the mountains, it often snows." }, accept: ["the mountain", "mountains"] },
        { id: "fr-u13l2-laplage", type: "vocab", front: "la plage", reading: "laplage", meaning: "beach", example: { jp: "La plage est très jolie.", en: "The beach is very pretty." }, accept: ["the beach"] },
        { id: "fr-u13l2-laforet", type: "vocab", front: "la forêt", reading: "laforet", meaning: "forest", example: { jp: "La forêt est grande et verte.", en: "The forest is big and green." }, accept: ["the forest", "woods"] },
        { id: "fr-u13l2-larbre", type: "vocab", front: "l'arbre", reading: "larbre", meaning: "tree", example: { jp: "L'arbre est très vieux.", en: "The tree is very old." }, accept: ["the tree"] },
        { id: "fr-u13l2-lafleur", type: "vocab", front: "la fleur", reading: "lafleur", meaning: "flower", example: { jp: "La fleur est rouge.", en: "The flower is red." }, accept: ["the flower"] },
      ],
    },
    {
      id: "fr-u13l3",
      unit: 13,
      lesson: 3,
      title: "Hot, cold and in between",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe conditions: frais, doux, humide, sec, la température, le degré, l'orage.",
      items: [
        { id: "fr-u13l3-frais", type: "vocab", front: "frais", reading: "frais", meaning: "cool", example: { jp: "Ce matin, il fait frais.", en: "This morning, it's cool." }, accept: ["fresh", "chilly"], hint: "Also \"fresh\" for food — le pain frais is fresh bread." },
        { id: "fr-u13l3-doux", type: "vocab", front: "doux", reading: "doux", meaning: "mild", example: { jp: "Il fait doux aujourd'hui.", en: "It's mild today." }, accept: ["soft", "gentle", "sweet"] },
        { id: "fr-u13l3-humide", type: "vocab", front: "humide", reading: "humide", meaning: "damp", example: { jp: "Après la pluie, c'est humide.", en: "After the rain, it's damp." }, accept: ["humid", "wet", "moist"], hint: "après = after — a small word worth keeping." },
        { id: "fr-u13l3-sec", type: "vocab", front: "sec", reading: "sec", meaning: "dry", example: { jp: "Le vent est sec et froid.", en: "The wind is dry and cold." }, accept: ["dried"] },
        { id: "fr-u13l3-latemperature", type: "vocab", front: "la température", reading: "latemperature", meaning: "temperature", example: { jp: "Quelle est la température aujourd'hui ?", en: "What's the temperature today?" }, accept: ["the temperature"] },
        { id: "fr-u13l3-ledegre", type: "vocab", front: "le degré", reading: "ledegre", meaning: "degree", example: { jp: "Il fait vingt degrés.", en: "It's twenty degrees." }, accept: ["the degree", "degrees"] },
        { id: "fr-u13l3-lorage", type: "vocab", front: "l'orage", reading: "lorage", meaning: "storm", example: { jp: "L'orage arrive ! Je rentre à la maison.", en: "The storm is coming! I'm going home." }, accept: ["the storm", "thunderstorm"] },
      ],
    },
  ],
};
