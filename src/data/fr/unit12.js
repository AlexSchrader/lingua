// FR Unit 12 — L'heure ("Telling time") — A1
// Clock time, then the frequency words that let a learner describe when things
// happen, then the first reflexive verbs (je me lève) as chunks — the daily
// routine that Unit 24 later builds out. Conventions: see fr/unit1.js.
export const FR_UNIT12 = {
  id: "fr-u12",
  lang: "fr",
  title: "L'heure",
  order: 12,
  stage: "a1",
  lessons: [
    {
      id: "fr-u12l1",
      unit: 12,
      lesson: 1,
      title: "What time is it?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask and tell the time: quelle heure est-il, midi, minuit, et demie, et quart.",
      items: [
        { id: "fr-u12l1-quelleheureestil", type: "vocab", front: "quelle heure est-il", reading: "quelleheureestil", meaning: "what time is it", example: { jp: "Pardon, quelle heure est-il ?", en: "Excuse me, what time is it?" }, accept: ["what's the time", "what is the time"], hint: "Literally \"what hour is it\" — heure is the hour, already met in Unit 7." },
        { id: "fr-u12l1-midi", type: "vocab", front: "midi", reading: "midi", meaning: "noon", example: { jp: "Il est midi. Je mange !", en: "It's noon. I'm eating!" }, accept: ["midday", "12pm"] },
        { id: "fr-u12l1-minuit", type: "vocab", front: "minuit", reading: "minuit", meaning: "midnight", example: { jp: "Il est minuit, bonne nuit !", en: "It's midnight, good night!" }, accept: ["12am"] },
        { id: "fr-u12l1-laminute", type: "vocab", front: "la minute", reading: "laminute", meaning: "minute", example: { jp: "Une minute, s'il vous plaît !", en: "One minute, please!" }, accept: ["the minute"] },
        { id: "fr-u12l1-etdemie", type: "vocab", front: "et demie", reading: "etdemie", meaning: "half past", example: { jp: "Il est six heures et demie.", en: "It's half past six." }, accept: ["half", "thirty"], hint: "Literally \"and half\": six heures et demie = 6:30." },
        { id: "fr-u12l1-etquart", type: "vocab", front: "et quart", reading: "etquart", meaning: "quarter past", example: { jp: "Il est trois heures et quart.", en: "It's a quarter past three." }, accept: ["quarter", "fifteen"] },
        { id: "fr-u12l1-moinslequart", type: "vocab", front: "moins le quart", reading: "moinslequart", meaning: "quarter to", example: { jp: "Il est neuf heures moins le quart.", en: "It's a quarter to nine." }, accept: ["quarter to the hour"], hint: "moins = less (Unit 4), so \"nine hours minus the quarter\" = 8:45." },
      ],
    },
    {
      id: "fr-u12l2",
      unit: 12,
      lesson: 2,
      title: "How often",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how often and in what order: toujours, souvent, parfois, jamais, tôt, tard, d'abord, ensuite.",
      items: [
        { id: "fr-u12l2-toujours", type: "vocab", front: "toujours", reading: "toujours", meaning: "always", example: { jp: "Je bois toujours un café le matin.", en: "I always drink a coffee in the morning." }, accept: ["still"] },
        { id: "fr-u12l2-souvent", type: "vocab", front: "souvent", reading: "souvent", meaning: "often", example: { jp: "Je vais souvent au parc.", en: "I often go to the park." }, accept: ["frequently"] },
        { id: "fr-u12l2-parfois", type: "vocab", front: "parfois", reading: "parfois", meaning: "sometimes", example: { jp: "Parfois, je travaille le samedi.", en: "Sometimes I work on Saturday." }, accept: ["at times", "occasionally"] },
        { id: "fr-u12l2-jamais", type: "vocab", front: "jamais", reading: "jamais", meaning: "never", example: { jp: "Je ne travaille jamais le dimanche.", en: "I never work on Sunday." }, accept: ["ever"], hint: "Pairs with ne, like ne…pas: je ne travaille jamais." },
        { id: "fr-u12l2-tot", type: "vocab", front: "tôt", reading: "tot", meaning: "early", example: { jp: "Je travaille tôt le matin.", en: "I work early in the morning." }, accept: ["soon"] },
        { id: "fr-u12l2-tard", type: "vocab", front: "tard", reading: "tard", meaning: "late", example: { jp: "Il est tard ! Bonne nuit.", en: "It's late! Good night." }, accept: ["later"] },
        { id: "fr-u12l2-dabord", type: "vocab", front: "d'abord", reading: "dabord", meaning: "first", example: { jp: "D'abord le café, ensuite le travail !", en: "First the coffee, then the work!" }, accept: ["first of all", "at first"] },
        { id: "fr-u12l2-ensuite", type: "vocab", front: "ensuite", reading: "ensuite", meaning: "then", example: { jp: "Je mange, ensuite je pars.", en: "I eat, then I leave." }, accept: ["next", "after that"] },
      ],
    },
    {
      id: "fr-u12l3",
      unit: 12,
      lesson: 3,
      title: "My day",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Walk through a day: je me lève, je me couche, je commence, je finis, je pars, j'arrive, je rentre.",
      items: [
        { id: "fr-u12l3-jemeleve", type: "vocab", front: "je me lève", reading: "jemeleve", meaning: "I get up", example: { jp: "Je me lève tôt le matin.", en: "I get up early in the morning." }, accept: ["i wake up", "i rise"], hint: "The \"me\" is the reflexive — literally \"I lift myself\". Unit 24 does the rest of them." },
        { id: "fr-u12l3-jemecouche", type: "vocab", front: "je me couche", reading: "jemecouche", meaning: "I go to bed", example: { jp: "Je me couche tard, à minuit.", en: "I go to bed late, at midnight." }, accept: ["i lie down"] },
        { id: "fr-u12l3-jecommence", type: "vocab", front: "je commence", reading: "jecommence", meaning: "I start", example: { jp: "Je commence à neuf heures.", en: "I start at nine o'clock." }, accept: ["i begin", "i'm starting"] },
        { id: "fr-u12l3-jefinis", type: "vocab", front: "je finis", reading: "jefinis", meaning: "I finish", example: { jp: "Je finis tard le vendredi.", en: "I finish late on Friday." }, accept: ["i end", "i'm finishing"] },
        { id: "fr-u12l3-jepars", type: "vocab", front: "je pars", reading: "jepars", meaning: "I leave", example: { jp: "Je pars maintenant. À bientôt !", en: "I'm leaving now. See you soon!" }, accept: ["i'm leaving", "i go away", "i depart"] },
        { id: "fr-u12l3-jarrive", type: "vocab", front: "j'arrive", reading: "jarrive", meaning: "I arrive", example: { jp: "J'arrive à midi.", en: "I arrive at noon." }, accept: ["i'm arriving", "i'm coming"], hint: "Shouted from another room, \"J'arrive !\" means \"coming!\"" },
        { id: "fr-u12l3-jerentre", type: "vocab", front: "je rentre", reading: "jerentre", meaning: "I come home", example: { jp: "Je rentre à la maison le soir.", en: "I come home in the evening." }, accept: ["i return", "i go home", "i get back"] },
      ],
    },
  ],
};
