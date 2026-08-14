// FR Unit 85 — Les sens ("The senses") — B1
// Strand D, coverage unit 5 of 14 (block 3). Slot: coverage-b1-5 (generic
// "Vocabulary 5 (B1)"); given a real theme so the lessons cohere — slot number kept.
// Perception: sight, light, sound, and the taste/smell/touch words A1 skipped.
// See unit84.js for the block-3 strategy and the front-checking rule.
export const FR_UNIT85 = {
  id: "fr-u85",
  lang: "fr",
  title: "Les sens",
  order: 85,
  stage: "b1",
  lessons: [
    {
      id: "fr-u85l1",
      unit: 85,
      lesson: 1,
      title: "Catching sight of things",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Be precise about seeing: catch sight of, watch closely, stare, tell two things apart — and name a shadow.",
      items: [
        { id: "fr-u85l1-apercevoir", type: "vocab", front: "apercevoir", reading: "apercevoir", meaning: "to catch sight of", example: { jp: "Je viens d'apercevoir le train.", en: "I've just caught sight of the train." }, accept: ["glimpse", "spot", "make out"], hint: "voir is simply to see; apercevoir is to catch a brief glimpse of." },
        { id: "fr-u85l1-observer", type: "vocab", front: "observer", reading: "observer", meaning: "to watch closely", example: { jp: "J'aime observer les oiseaux.", en: "I like watching birds closely." }, accept: ["observe", "study", "watch"] },
        { id: "fr-u85l1-fixer", type: "vocab", front: "fixer", reading: "fixer", meaning: "to stare at", example: { jp: "Il ne faut pas fixer les autres.", en: "You mustn't stare at other people." }, accept: ["gaze at", "stare", "fix on"], hint: "Also \"to set\": fixer une date, fixer un prix." },
        { id: "fr-u85l1-distinguer", type: "vocab", front: "distinguer", reading: "distinguer", meaning: "to tell apart", example: { jp: "Je ne peux pas distinguer les deux couleurs.", en: "I can't tell the two colours apart." }, accept: ["distinguish", "make out", "tell the difference"] },
        { id: "fr-u85l1-lombre", type: "vocab", front: "l'ombre", reading: "lombre", meaning: "shade", example: { jp: "Je préfère rester à l'ombre.", en: "I prefer to stay in the shade." }, accept: ["shadow", "the shade"], hint: "Feminine — une ombre. Covers both the shade you sit in and the shadow you cast." },
        { id: "fr-u85l1-briller", type: "vocab", front: "briller", reading: "briller", meaning: "to shine", example: { jp: "Le soleil brille aujourd'hui.", en: "The sun is shining today." }, accept: ["gleam", "sparkle", "shine out"] },
      ],
    },
    {
      id: "fr-u85l2",
      unit: 85,
      lesson: 2,
      title: "Light and dark",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how bright a place is: a glow, a reflection, light it up — and call it bright, dark or pale.",
      items: [
        { id: "fr-u85l2-lalueur", type: "vocab", front: "la lueur", reading: "lalueur", meaning: "glow", example: { jp: "Il y a une lueur à la fenêtre.", en: "There's a glow at the window." }, accept: ["gleam", "glimmer", "faint light"] },
        { id: "fr-u85l2-lereflet", type: "vocab", front: "le reflet", reading: "lereflet", meaning: "reflection", example: { jp: "Je vois mon reflet dans le miroir.", en: "I see my reflection in the mirror." }, accept: ["the reflection", "image"] },
        { id: "fr-u85l2-eclairer", type: "vocab", front: "éclairer", reading: "eclairer", meaning: "to light up", example: { jp: "Cette lampe éclaire bien la pièce.", en: "This lamp lights the room well." }, accept: ["illuminate", "brighten", "shine on"] },
        { id: "fr-u85l2-lumineux", type: "vocab", front: "lumineux", reading: "lumineux", meaning: "bright", example: { jp: "L'appartement est très lumineux.", en: "The flat is very bright." }, accept: ["light", "well-lit", "luminous"], hint: "Of a room or a place full of daylight — the estate-agent word for a flat with big windows." },
        { id: "fr-u85l2-sombre", type: "vocab", front: "sombre", reading: "sombre", meaning: "dark", example: { jp: "Le couloir est un peu sombre.", en: "The corridor is a little dark." }, accept: ["gloomy", "dim", "dingy"] },
        { id: "fr-u85l2-pale", type: "vocab", front: "pâle", reading: "pale", meaning: "washed out", example: { jp: "Tu es pâle, tu es malade ?", en: "You're pale, are you ill?" }, accept: ["pale", "pallid", "light"], hint: "The circumflex is the ghost of a lost s — English kept it in \"pallid\"." },
      ],
    },
    {
      id: "fr-u85l3",
      unit: 85,
      lesson: 3,
      title: "Sound and silence",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what you can hear: an echo, silence, a sound that carries — and call a noise deaf-making or shrill.",
      items: [
        { id: "fr-u85l3-lecho", type: "vocab", front: "l'écho", reading: "lecho", meaning: "echo", example: { jp: "Il y a de l'écho dans cette pièce.", en: "There's an echo in this room." }, accept: ["the echo"], hint: "Masculine — un écho. The ch says /k/, as in English." },
        { id: "fr-u85l3-lesilence", type: "vocab", front: "le silence", reading: "lesilence", meaning: "silence", example: { jp: "J'aime le silence du matin.", en: "I like the silence of the morning." }, accept: ["the silence", "quiet"] },
        { id: "fr-u85l3-resonner", type: "vocab", front: "résonner", reading: "resonner", meaning: "to reverberate", example: { jp: "Sa voix résonne dans l'escalier.", en: "Their voice echoes in the stairwell." }, accept: ["echo", "resound", "ring out"] },
        { id: "fr-u85l3-sourd", type: "vocab", front: "sourd", reading: "sourd", meaning: "deaf", example: { jp: "Mon grand-père est un peu sourd.", en: "My grandfather is a little deaf." }, accept: ["hard of hearing", "muffled", "dull"], hint: "Also of a sound: un bruit sourd is a dull, muffled thud." },
        { id: "fr-u85l3-aigu", type: "vocab", front: "aigu", reading: "aigu", meaning: "shrill", example: { jp: "Ce bruit est trop aigu.", en: "This noise is too shrill." }, accept: ["high-pitched", "sharp", "piercing"], hint: "The same word as in l'accent aigu — sharp, whether it's a sound or a line." },
        { id: "fr-u85l3-lavoix", type: "vocab", front: "la voix", reading: "lavoix", meaning: "voice", example: { jp: "Je reconnais sa voix.", en: "I recognize their voice." }, accept: ["the voice"], hint: "The x is silent, and it's the same in the singular and plural: une voix, des voix." },
      ],
    },
    {
      id: "fr-u85l4",
      unit: 85,
      lesson: 4,
      title: "Taste, smell, touch",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the other three senses: a smell, a taste, smell something, taste it, touch it — and say it's bitter.",
      items: [
        { id: "fr-u85l4-lodeur", type: "vocab", front: "l'odeur", reading: "lodeur", meaning: "smell", example: { jp: "J'aime l'odeur du pain chaud.", en: "I love the smell of warm bread." }, accept: ["the smell", "scent", "odour"], hint: "Feminine — une bonne odeur." },
        { id: "fr-u85l4-legout", type: "vocab", front: "le goût", reading: "legout", meaning: "taste", example: { jp: "Ce fromage a un goût fort.", en: "This cheese has a strong taste." }, accept: ["the taste", "flavour"], hint: "Also taste in the sense of style: elle a bon goût." },
        { id: "fr-u85l4-sentir", type: "vocab", front: "sentir", reading: "sentir", meaning: "to smell of", example: { jp: "Ça sent très bon ici.", en: "It smells very good here." }, accept: ["feel", "smell of", "sense"], hint: "Does both jobs: sentir une odeur (to smell something) and « ça sent bon » (it smells good)." },
        { id: "fr-u85l4-gouter", type: "vocab", front: "goûter", reading: "gouter", meaning: "to sample", example: { jp: "Tu veux goûter le gâteau ?", en: "Do you want to taste the cake?" }, accept: ["taste", "try", "have a taste"] },
        { id: "fr-u85l4-toucher", type: "vocab", front: "toucher", reading: "toucher", meaning: "to touch", example: { jp: "Il ne faut pas toucher les tableaux.", en: "You mustn't touch the paintings." }, accept: ["feel", "handle"] },
        { id: "fr-u85l4-amer", type: "vocab", front: "amer", reading: "amer", meaning: "bitter", example: { jp: "Ce café est trop amer.", en: "This coffee is too bitter." }, accept: ["sharp", "acrid"] },
      ],
    },
  ],
};
