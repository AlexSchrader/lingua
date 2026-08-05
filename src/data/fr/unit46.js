// FR Unit 46 — Conjugation drill 2 (slot: conjugation-2) — A2
// THE IMPERFECT (l1–l3) + THE PRESENT-TENSE PLURALS (l4).
//
// Two gaps, one unit. A1 gave the learner exactly one past — the passé composé
// (Unit 23) — which cannot say "I used to" or "it was". Lessons 1–3 fill that in
// with the imparfait, whose endings never vary. Lesson 4 closes a quieter gap:
// A1 taught almost every lexical verb in the je-form ONLY (je mange, je parle,
// je finis…), so a learner could not yet say nous mangeons or ils prennent. The
// earlier A2 units used those plural forms in examples naturally; this lesson is
// where they are actually taught.
// See fr/unit45.js for why no group/conjForm tags appear here.
// Conventions: see fr/unit1.js. Examples use A1 vocab plus Units 38–45.
export const FR_UNIT46 = {
  id: "fr-u46",
  lang: "fr",
  title: "Conjugation drill 2",
  order: 46,
  stage: "a2",
  lessons: [
    {
      id: "fr-u46l1",
      unit: 46,
      lesson: 1,
      title: "How things used to be",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe the past as a state, not an event: j'étais fatigué, c'était une belle journée, il y avait beaucoup de monde.",
      items: [
        { id: "fr-u46l1-jetais", type: "vocab", front: "j'étais", reading: "jetais", meaning: "I was", example: { jp: "Hier, j'étais fatigué.", en: "Yesterday I was tired." }, accept: ["i used to be", "i was being"], hint: "This is the imparfait — the \"was / used to\" past. Its endings never vary: -ais, -ais, -ait, -ions, -iez, -aient." },
        { id: "fr-u46l1-cetait", type: "vocab", front: "c'était", reading: "cetait", meaning: "it was", example: { jp: "C'était une belle journée.", en: "It was a lovely day." }, accept: ["that was", "it used to be", "this was"], hint: "The past of c'est, and just as common. C'était bien ! = It was good!" },
        { id: "fr-u46l1-ilyavait", type: "vocab", front: "il y avait", reading: "ilyavait", meaning: "there was", example: { jp: "Il y avait beaucoup de monde au marché.", en: "There were a lot of people at the market." }, accept: ["there were", "there used to be"], hint: "The past of il y a. beaucoup de monde = a lot of people — monde does double duty (Unit 25)." },
        { id: "fr-u46l1-javais", type: "vocab", front: "j'avais", reading: "javais", meaning: "I used to have", example: { jp: "J'avais un vélo rouge.", en: "I had a red bike." }, accept: ["i had", "i was having"], hint: "j'avais is the having-it-for-a-while past; j'ai eu (Unit 23) is the got-it-once past." },
        { id: "fr-u46l1-tuetais", type: "vocab", front: "tu étais", reading: "tuetais", meaning: "you were", example: { jp: "Tu étais où hier ?", en: "Where were you yesterday?" }, accept: ["you used to be"] },
        { id: "fr-u46l1-nousetions", type: "vocab", front: "nous étions", reading: "nousetions", meaning: "we were", example: { jp: "Nous étions à Paris en juin.", en: "We were in Paris in June." }, accept: ["we used to be"] },
      ],
    },
    {
      id: "fr-u46l2",
      unit: 46,
      lesson: 2,
      title: "What I used to do",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a habit you no longer have: je faisais les courses le samedi, j'allais souvent au cinéma.",
      items: [
        { id: "fr-u46l2-jefaisais", type: "vocab", front: "je faisais", reading: "jefaisais", meaning: "I used to do", example: { jp: "Je faisais les courses le samedi.", en: "I used to do the shopping on Saturdays." }, accept: ["i was doing", "i used to make", "i did"], hint: "faire → fais-. The ai here is barely there: it comes out as \"fuh-zay\"." },
        { id: "fr-u46l2-jallais", type: "vocab", front: "j'allais", reading: "jallais", meaning: "I used to go", example: { jp: "J'allais souvent au cinéma.", en: "I used to go to the cinema often." }, accept: ["i was going", "i went"] },
        { id: "fr-u46l2-jeparlais", type: "vocab", front: "je parlais", reading: "jeparlais", meaning: "I used to speak", example: { jp: "Je parlais anglais avec mes amis.", en: "I used to speak English with my friends." }, accept: ["i was speaking", "i used to talk", "i spoke"] },
        { id: "fr-u46l2-jhabitais", type: "vocab", front: "j'habitais", reading: "jhabitais", meaning: "I used to live", example: { jp: "J'habitais dans un petit village.", en: "I used to live in a small village." }, accept: ["i was living", "i lived"] },
        { id: "fr-u46l2-jetravaillais", type: "vocab", front: "je travaillais", reading: "jetravaillais", meaning: "I used to work", example: { jp: "Je travaillais dans un magasin.", en: "I used to work in a shop." }, accept: ["i was working", "i worked"] },
        { id: "fr-u46l2-jeregardais", type: "vocab", front: "je regardais", reading: "jeregardais", meaning: "I used to watch", example: { jp: "Je regardais souvent cette émission.", en: "I used to watch that programme often." }, accept: ["i was watching", "i watched"] },
      ],
    },
    {
      id: "fr-u46l3",
      unit: 46,
      lesson: 3,
      title: "I wanted, I could, I knew",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the past of the head-verbs: je voulais voir ce film, je ne pouvais pas, je ne savais pas.",
      items: [
        { id: "fr-u46l3-jevoulais", type: "vocab", front: "je voulais", reading: "jevoulais", meaning: "I wanted", example: { jp: "Je voulais voir ce film.", en: "I wanted to see that film." }, accept: ["i used to want", "i did want"], hint: "These four — vouloir, pouvoir, savoir, être — are almost always in the imparfait, because they describe a state, not an event." },
        { id: "fr-u46l3-jepouvais", type: "vocab", front: "je pouvais", reading: "jepouvais", meaning: "I was able to", example: { jp: "Je ne pouvais pas travailler.", en: "I couldn't work." }, accept: ["i could", "i used to be able to"], hint: "Three shapes, one letter apart: je pouvais (could, then), je pourrai (will be able), je pourrais (would be able)." },
        { id: "fr-u46l3-jesavais", type: "vocab", front: "je savais", reading: "jesavais", meaning: "I knew", example: { jp: "Je ne savais pas ! Pardon.", en: "I didn't know! Sorry." }, accept: ["i used to know", "i did know"], hint: "Je ne savais pas is the everyday \"I didn't know\" — worth owning as one whole phrase." },
        { id: "fr-u46l3-jeprenais", type: "vocab", front: "je prenais", reading: "jeprenais", meaning: "I used to take", example: { jp: "Je prenais le bus tous les jours.", en: "I used to take the bus every day." }, accept: ["i was taking", "i took"] },
        { id: "fr-u46l3-jelisais", type: "vocab", front: "je lisais", reading: "jelisais", meaning: "I used to read", example: { jp: "Je lisais beaucoup quand j'étais petit.", en: "I used to read a lot when I was little." }, accept: ["i was reading", "i read"] },
        { id: "fr-u46l3-jecoutais", type: "vocab", front: "j'écoutais", reading: "jecoutais", meaning: "I used to listen", example: { jp: "J'écoutais la radio le matin.", en: "I used to listen to the radio in the morning." }, accept: ["i was listening", "i listened"] },
      ],
    },
    {
      id: "fr-u46l4",
      unit: 46,
      lesson: 4,
      title: "All of us, in the present",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Take an everyday verb beyond je: nous mangeons, vous parlez, ils habitent, nous finissons, ils prennent.",
      items: [
        { id: "fr-u46l4-nousmangeons", type: "vocab", front: "nous mangeons", reading: "nousmangeons", meaning: "we eat", example: { jp: "Nous mangeons à midi.", en: "We eat at noon." }, accept: ["we're eating", "we are eating"], hint: "The e is kept to hold the soft g: mangeons, never \"mangons\"." },
        { id: "fr-u46l4-vousparlez", type: "vocab", front: "vous parlez", reading: "vousparlez", meaning: "you speak (plural)", example: { jp: "Vous parlez très bien français.", en: "You speak French very well." }, accept: ["you speak", "you talk", "you're speaking", "you all speak"], hint: "-er verbs in the present: -e, -es, -e, -ons, -ez, -ent. Four of those six sound identical out loud." },
        { id: "fr-u46l4-ilshabitent", type: "vocab", front: "ils habitent", reading: "ilshabitent", meaning: "they live", example: { jp: "Mes parents habitent à Lyon.", en: "My parents live in Lyon." }, accept: ["they're living", "they are living"], hint: "The -ent is completely silent — ils habitent ends on the t of habite. The plural is still audible here, because the s of ils links onto the vowel: \"il-za-bit\" vs \"il-a-bit\"." },
        { id: "fr-u46l4-nousfinissons", type: "vocab", front: "nous finissons", reading: "nousfinissons", meaning: "we finish", example: { jp: "Nous finissons à six heures.", en: "We finish at six." }, accept: ["we're finishing", "we end", "we are finishing"], hint: "-ir verbs grow an -iss- in the plural: je finis, but nous finissons." },
        { id: "fr-u46l4-ilsprennent", type: "vocab", front: "ils prennent", reading: "ilsprennent", meaning: "they take", example: { jp: "Ils prennent le train tous les jours.", en: "They take the train every day." }, accept: ["they're taking", "they are taking"], hint: "Double n in the plural: il prend (silent), ils prennent (the n is heard)." },
        { id: "fr-u46l4-vousfaites", type: "vocab", front: "vous faites", reading: "vousfaites", meaning: "you do", example: { jp: "Qu'est-ce que vous faites ce soir ?", en: "What are you doing this evening?" }, accept: ["you make", "you're doing", "you are making"], hint: "One of only three verbs ending -tes here: vous faites, vous êtes, vous dites." },
      ],
    },
  ],
};
