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
// Verbs here are tagged with conjForm, so the conjugate card produces the form.
// Conventions: see fr/unit1.js. Examples use A1 vocab plus Units 38–45.
export const FR_UNIT46 = {
  id: "fr-u46",
  lang: "fr",
  title: "Les verbes · 4",
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
        { id: "fr-u46l1-etreimperf1s", type: "vocab", front: "être", reading: "etre", meaning: "I was", conjForm: "imperf-1s", example: { jp: "Hier, j'étais fatigué.", en: "Yesterday I was tired." }, accept: ["i used to be", "i was being"], hint: "This is the imparfait — the \"was / used to\" past. Its endings never vary: -ais, -ais, -ait, -ions, -iez, -aient." },
        { id: "fr-u46l1-etreimperf3s", type: "vocab", front: "être", reading: "etre", meaning: "it was", conjForm: "imperf-3s", example: { jp: "C'était une belle journée.", en: "It was a lovely day." }, accept: ["that was", "it used to be", "this was"], hint: "The past of c'est, and just as common. C'était bien ! = It was good!" },
        { id: "fr-u46l1-avoirimperf3s", type: "vocab", front: "avoir", reading: "avoir", meaning: "there was", conjForm: "imperf-3s", example: { jp: "Il y avait beaucoup de monde au marché.", en: "There were a lot of people at the market." }, accept: ["there were", "there used to be"], hint: "The past of il y a. beaucoup de monde = a lot of people — monde does double duty (Unit 25)." },
        { id: "fr-u46l1-avoirimperf1s", type: "vocab", front: "avoir", reading: "avoir", meaning: "I used to have", conjForm: "imperf-1s", example: { jp: "J'avais un vélo rouge.", en: "I had a red bike." }, accept: ["i had", "i was having"], hint: "j'avais is the having-it-for-a-while past; j'ai eu (Unit 23) is the got-it-once past." },
        { id: "fr-u46l1-etreimperf2s", type: "vocab", front: "être", reading: "etre", meaning: "you were", conjForm: "imperf-2s", example: { jp: "Tu étais où hier ?", en: "Where were you yesterday?" }, accept: ["you used to be"] },
        { id: "fr-u46l1-etreimperf1p", type: "vocab", front: "être", reading: "etre", meaning: "we were", conjForm: "imperf-1p", example: { jp: "Nous étions à Paris en juin.", en: "We were in Paris in June." }, accept: ["we used to be"] },
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
        { id: "fr-u46l2-faireimperf1s", type: "vocab", front: "faire", reading: "faire", meaning: "I used to do", conjForm: "imperf-1s", example: { jp: "Je faisais les courses le samedi.", en: "I used to do the shopping on Saturdays." }, accept: ["i was doing", "i used to make", "i did"], hint: "faire → fais-. The ai here is barely there: it comes out as \"fuh-zay\"." },
        { id: "fr-u46l2-allerimperf1s", type: "vocab", front: "aller", reading: "aller", meaning: "I used to go", conjForm: "imperf-1s", example: { jp: "J'allais souvent au cinéma.", en: "I used to go to the cinema often." }, accept: ["i was going", "i went"] },
        { id: "fr-u46l2-parlerimperf1s", type: "vocab", front: "parler", reading: "parler", meaning: "I used to speak", conjForm: "imperf-1s", example: { jp: "Je parlais anglais avec mes amis.", en: "I used to speak English with my friends." }, accept: ["i was speaking", "i used to talk", "i spoke"] },
        { id: "fr-u46l2-habiterimperf1s", type: "vocab", front: "habiter", reading: "habiter", meaning: "I used to live", conjForm: "imperf-1s", example: { jp: "J'habitais dans un petit village.", en: "I used to live in a small village." }, accept: ["i was living", "i lived"] },
        { id: "fr-u46l2-travaillerimperf1s", type: "vocab", front: "travailler", reading: "travailler", meaning: "I used to work", conjForm: "imperf-1s", example: { jp: "Je travaillais dans un magasin.", en: "I used to work in a shop." }, accept: ["i was working", "i worked"] },
        { id: "fr-u46l2-regarderimperf1s", type: "vocab", front: "regarder", reading: "regarder", meaning: "I used to watch", conjForm: "imperf-1s", example: { jp: "Je regardais souvent cette émission.", en: "I used to watch that programme often." }, accept: ["i was watching", "i watched"] },
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
        { id: "fr-u46l3-vouloirimperf1s", type: "vocab", front: "vouloir", reading: "vouloir", meaning: "I wanted", conjForm: "imperf-1s", example: { jp: "Je voulais voir ce film.", en: "I wanted to see that film." }, accept: ["i used to want", "i did want"], hint: "These four — vouloir, pouvoir, savoir, être — are almost always in the imparfait, because they describe a state, not an event." },
        { id: "fr-u46l3-pouvoirimperf1s", type: "vocab", front: "pouvoir", reading: "pouvoir", meaning: "I was able to", conjForm: "imperf-1s", example: { jp: "Je ne pouvais pas travailler.", en: "I couldn't work." }, accept: ["i could", "i used to be able to"], hint: "Three shapes, one letter apart: je pouvais (could, then), je pourrai (will be able), je pourrais (would be able)." },
        { id: "fr-u46l3-savoirimperf1s", type: "vocab", front: "savoir", reading: "savoir", meaning: "I knew", conjForm: "imperf-1s", example: { jp: "Je ne savais pas ! Pardon.", en: "I didn't know! Sorry." }, accept: ["i used to know", "i did know"], hint: "Je ne savais pas is the everyday \"I didn't know\" — worth owning as one whole phrase." },
        { id: "fr-u46l3-prendreimperf1s", type: "vocab", front: "prendre", reading: "prendre", meaning: "I used to take", conjForm: "imperf-1s", example: { jp: "Je prenais le bus tous les jours.", en: "I used to take the bus every day." }, accept: ["i was taking", "i took"] },
        { id: "fr-u46l3-lireimperf1s", type: "vocab", front: "lire", reading: "lire", meaning: "I used to read", conjForm: "imperf-1s", example: { jp: "Je lisais beaucoup quand j'étais petit.", en: "I used to read a lot when I was little." }, accept: ["i was reading", "i read"] },
        { id: "fr-u46l3-ecouterimperf1s", type: "vocab", front: "écouter", reading: "ecouter", meaning: "I used to listen", conjForm: "imperf-1s", example: { jp: "J'écoutais la radio le matin.", en: "I used to listen to the radio in the morning." }, accept: ["i was listening", "i listened"] },
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
        { id: "fr-u46l4-mangerpres1p", type: "vocab", front: "manger", reading: "manger", meaning: "we eat", conjForm: "pres-1p", example: { jp: "Nous mangeons à midi.", en: "We eat at noon." }, accept: ["we're eating", "we are eating"], hint: "The e is kept to hold the soft g: mangeons, never \"mangons\"." },
        { id: "fr-u46l4-parlerpres2p", type: "vocab", front: "parler", reading: "parler", meaning: "you speak (plural)", conjForm: "pres-2p", example: { jp: "Vous parlez très bien français.", en: "You speak French very well." }, accept: ["you speak", "you talk", "you're speaking", "you all speak"], hint: "-er verbs in the present: -e, -es, -e, -ons, -ez, -ent. Four of those six sound identical out loud." },
        { id: "fr-u46l4-habiterpres3p", type: "vocab", front: "habiter", reading: "habiter", meaning: "they live", conjForm: "pres-3p", example: { jp: "Mes parents habitent à Lyon.", en: "My parents live in Lyon." }, accept: ["they're living", "they are living"], hint: "The -ent is completely silent — ils habitent ends on the t of habite. The plural is still audible here, because the s of ils links onto the vowel: \"il-za-bit\" vs \"il-a-bit\"." },
        { id: "fr-u46l4-finirpres1p", type: "vocab", front: "finir", reading: "finir", meaning: "we finish", conjForm: "pres-1p", example: { jp: "Nous finissons à six heures.", en: "We finish at six." }, accept: ["we're finishing", "we end", "we are finishing"], hint: "-ir verbs grow an -iss- in the plural: je finis, but nous finissons." },
        { id: "fr-u46l4-prendrepres3p", type: "vocab", front: "prendre", reading: "prendre", meaning: "they take", conjForm: "pres-3p", example: { jp: "Ils prennent le train tous les jours.", en: "They take the train every day." }, accept: ["they're taking", "they are taking"], hint: "Double n in the plural: il prend (silent), ils prennent (the n is heard)." },
        { id: "fr-u46l4-fairepres2p", type: "vocab", front: "faire", reading: "faire", meaning: "you do", conjForm: "pres-2p", example: { jp: "Qu'est-ce que vous faites ce soir ?", en: "What are you doing this evening?" }, accept: ["you make", "you're doing", "you are making"], hint: "One of only three verbs ending -tes here: vous faites, vous êtes, vous dites." },
      ],
    },
  ],
};
