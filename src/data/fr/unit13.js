// FR Unit 12 — L'heure ("Telling time") — A1
// Clock time, then the frequency words that let a learner describe when things
// happen, then the first reflexive verbs (je me lève / je me couche) as chunks.
// They are taught as fixed chunks on purpose — the reflexive SYSTEM (me/te/se
// across every verb) is A2 material, so nothing here promises more than it gives.
// Conventions: see fr/unit1.js.
export const FR_UNIT13 = {
  id: "fr-u13",
  lang: "fr",
  title: "L'heure",
  order: 13,
  stage: "a1",
  lessons: [
    {
      id: "fr-u13l1",
      unit: 13,
      lesson: 1,
      title: "What time is it?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask and tell the time: quelle heure est-il, midi, minuit, et demie, et quart.",
      items: [
        { id: "fr-u13l1-quelleheureestil", type: "vocab", front: "quelle heure est-il", reading: "quelleheureestil", meaning: "what time is it", example: { jp: "Pardon, quelle heure est-il ?", en: "Excuse me, what time is it?" }, drill: { jp: "Quelle heure est-il maintenant", en: "What time is it now" }, accept: ["what's the time", "what is the time", "how late is it", "got the time"], hint: "Literally \"what hour is it\" — heure is the hour, already met in Unit 7." },
        { id: "fr-u13l1-midi", type: "vocab", front: "midi", reading: "midi", meaning: "noon", example: { jp: "Il est midi. Je mange !", en: "It's noon. I'm eating!" }, drill: { jp: "Je mange à midi", en: "I eat at noon" }, accept: ["midday", "12pm", "noon time"], hint: "\"mee-DEE\" — two clean \"ee\" sounds. It is mi + di, mid-day, and in speech you say il est midi, never \"douze heures\"." },
        { id: "fr-u13l1-minuit", type: "vocab", front: "minuit", reading: "minuit", meaning: "midnight", example: { jp: "Il est minuit, bonne nuit !", en: "It's midnight, good night!" }, drill: { jp: "Il est presque minuit", en: "It's almost midnight" }, accept: ["12am", "midnight hour", "twelve at night"], hint: "\"mee-NWEE\" — ui is one glide and the t is silent. mi + nuit, mid-night: the same build as midi." },
        { id: "fr-u13l1-laminute", type: "vocab", front: "la minute", reading: "laminute", meaning: "minute", example: { jp: "Une minute, s'il vous plaît !", en: "One minute, please!" }, drill: { jp: "La minute passe lentement", en: "The minute passes slowly" }, accept: ["the minute", "minute", "a minute"], hint: "\"mee-NEWT\" — the u is the tight French u, and the final e is what makes the t sound. Feminine: la minute. Une petite minute ! means hang on." },
        { id: "fr-u13l1-etdemie", type: "vocab", front: "et demie", reading: "etdemie", meaning: "half past", example: { jp: "Il est six heures et demie.", en: "It's half past six." }, drill: { jp: "Il est deux heures et demie", en: "It's half past two" }, accept: ["half", "thirty", "half-past"], hint: "Literally \"and half\": six heures et demie = 6:30." },
        { id: "fr-u13l1-etquart", type: "vocab", front: "et quart", reading: "etquart", meaning: "quarter past", example: { jp: "Il est trois heures et quart.", en: "It's a quarter past three." }, drill: { jp: "Il est trois heures et quart", en: "It's quarter past three" }, accept: ["quarter", "fifteen", "fifteen past"], hint: "\"ay KAR\" — the t of quart is silent. It is added after the hour, never before it: trois heures et quart." },
        { id: "fr-u13l1-moinslequart", type: "vocab", front: "moins le quart", reading: "moinslequart", meaning: "quarter to", example: { jp: "Il est neuf heures moins le quart.", en: "It's a quarter to nine." }, drill: { jp: "Il est quatre heures moins le quart", en: "It's quarter to four" }, accept: ["quarter to the hour", "quarter till", "fifteen to"], hint: "moins = less (Unit 4), so \"nine hours minus the quarter\" = 8:45." },
      ],
    },
    {
      id: "fr-u13l2",
      unit: 13,
      lesson: 2,
      title: "How often",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how often and in what order: toujours, souvent, parfois, jamais, tôt, tard, d'abord, ensuite.",
      items: [
        { id: "fr-u13l2-toujours", type: "vocab", front: "toujours", reading: "toujours", meaning: "always", example: { jp: "Je bois toujours un café le matin.", en: "I always drink a coffee in the morning." }, drill: { jp: "Je mange toujours à midi", en: "I always eat at noon" }, accept: ["still", "all the time", "every time"], hint: "\"too-ZHOOR\" — two \"oo\" sounds, a soft zh, and a silent s. It is tous + jours, all days. It also means still: il est toujours là." },
        { id: "fr-u13l2-souvent", type: "vocab", front: "souvent", reading: "souvent", meaning: "often", example: { jp: "Je vais souvent au parc.", en: "I often go to the park." }, drill: { jp: "Je pars souvent tôt le matin", en: "I often leave early in the morning" }, accept: ["frequently", "a lot of the time", "many times"], hint: "\"soo-VON\" — ou is \"oo\" and -ent is nasal with the t silent. It sits between toujours and parfois on the scale." },
        { id: "fr-u13l2-parfois", type: "vocab", front: "parfois", reading: "parfois", meaning: "sometimes", example: { jp: "Parfois, je travaille le samedi.", en: "Sometimes I work on Saturday." }, drill: { jp: "Parfois je rentre tard", en: "Sometimes I come home late" }, accept: ["at times", "occasionally", "now and then"], hint: "\"par-FWAH\" — oi is \"wah\" and the s is silent. It is par + fois, by times, where une fois is an occasion." },
        { id: "fr-u13l2-jamais", type: "vocab", front: "jamais", reading: "jamais", meaning: "never", example: { jp: "Je ne travaille jamais le dimanche.", en: "I never work on Sunday." }, drill: { jp: "Je ne mange jamais tard", en: "I never eat late" }, accept: ["ever", "not ever", "at no time"], hint: "Pairs with ne, like ne…pas: je ne travaille jamais." },
        { id: "fr-u13l2-tot", type: "vocab", front: "tôt", reading: "tot", meaning: "early", example: { jp: "Je travaille tôt le matin.", en: "I work early in the morning." }, drill: { jp: "Je me lève tôt aujourd'hui", en: "I get up early today" }, accept: ["soon", "early on", "ahead of time"], hint: "\"toh\" — the final t is silent, so you hear only the first one. The hat marks a lost s. Its opposite is tard." },
        { id: "fr-u13l2-tard", type: "vocab", front: "tard", reading: "tard", meaning: "late", example: { jp: "Il est tard ! Bonne nuit.", en: "It's late! Good night." }, drill: { jp: "Je rentre tard ce soir", en: "I'm coming home late tonight" }, accept: ["later", "late at night", "not early"], hint: "\"tar\" — the d is silent. Plus tard means later, and à plus tard is the casual see you later." },
        { id: "fr-u13l2-dabord", type: "vocab", front: "d'abord", reading: "dabord", meaning: "first", example: { jp: "D'abord le café, ensuite l'école !", en: "First the coffee, then school!" }, drill: { jp: "D'abord je bois un café", en: "First I drink a coffee" }, accept: ["first of all", "at first", "firstly"], hint: "\"da-BOR\" — the final d is silent. It opens a sequence, and the sequence is worth learning whole: d'abord, ensuite, enfin." },
        { id: "fr-u13l2-ensuite", type: "vocab", front: "ensuite", reading: "ensuite", meaning: "then", example: { jp: "Je mange, ensuite je pars.", en: "I eat, then I leave." }, drill: { jp: "Ensuite je pars au travail", en: "Then I leave for work" }, accept: ["next", "after that", "and then"], hint: "\"on-SWEET\" — nasal en, ui as one glide, final e silent. It is en + suite, in sequence: the step straight after d'abord." },
      ],
    },
    {
      id: "fr-u13l3",
      unit: 13,
      lesson: 3,
      title: "My day",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Walk through a day: je me lève, je me couche, je commence, je finis, je pars, j'arrive, je rentre.",
      items: [
        { id: "fr-u13l3-jemeleve", type: "vocab", front: "je me lève", reading: "jemeleve", meaning: "I get up", example: { jp: "Je me lève tôt le matin.", en: "I get up early in the morning." }, drill: { jp: "Je me lève à six heures", en: "I get up at six" }, accept: ["i wake up", "i rise", "i get out of bed"], hint: "The \"me\" points back at you — literally \"I lift myself\". Learn it as one chunk; the full pattern comes later." },
        { id: "fr-u13l3-jemecouche", type: "vocab", front: "je me couche", reading: "jemecouche", meaning: "I go to bed", example: { jp: "Je me couche tard, à minuit.", en: "I go to bed late, at midnight." }, drill: { jp: "Je me couche tard le samedi", en: "I go to bed late on Saturday" }, accept: ["i lie down", "i go to sleep", "i turn in"], hint: "\"zhuh muh KOOSH\" — ou is \"oo\" and -che is sh. The me points back at you: literally I lay myself down." },
        { id: "fr-u13l3-jecommence", type: "vocab", front: "je commence", reading: "jecommence", meaning: "I start", example: { jp: "Je commence à neuf heures.", en: "I start at nine o'clock." }, drill: { jp: "Je commence à huit heures", en: "I start at eight" }, accept: ["i begin", "i'm starting", "i start off"], hint: "\"zhuh ko-MONSS\" — nasal -en, and the final ce is a clean s. From commencer; what comes next takes à: je commence à neuf heures." },
        { id: "fr-u13l3-jefinis", type: "vocab", front: "je finis", reading: "jefinis", meaning: "I finish", example: { jp: "Je finis tard le vendredi.", en: "I finish late on Friday." }, drill: { jp: "Je finis à cinq heures", en: "I finish at five" }, accept: ["i end", "i'm finishing", "i complete"], hint: "\"zhuh fee-NEE\" — the final s is silent. From finir. Watch the pattern: je finis, but nous finissons, where the s does sound." },
        { id: "fr-u13l3-jepars", type: "vocab", front: "je pars", reading: "jepars", meaning: "I leave", example: { jp: "Je pars maintenant. À bientôt !", en: "I'm leaving now. See you soon!" }, drill: { jp: "Je pars à sept heures", en: "I leave at seven" }, accept: ["i'm leaving", "i go away", "i depart"], hint: "\"zhuh par\" — the s is silent. From partir, to leave a place; its opposite in this lesson is j'arrive. Je pars ! is said on the way out of the door." },
        { id: "fr-u13l3-jarrive", type: "vocab", front: "j'arrive", reading: "jarrive", meaning: "I arrive", example: { jp: "J'arrive à midi.", en: "I arrive at noon." }, drill: { jp: "J'arrive toujours à l'heure", en: "I always arrive on time" }, accept: ["i'm arriving", "i'm coming", "i get there"], hint: "Shouted from another room, \"J'arrive !\" means \"coming!\"" },
        { id: "fr-u13l3-jerentre", type: "vocab", front: "je rentre", reading: "jerentre", meaning: "I come home", example: { jp: "Je rentre à la maison le soir.", en: "I come home in the evening." }, drill: { jp: "Je rentre à six heures", en: "I come home at six" }, accept: ["i return", "i go home", "i get back"], hint: "\"RON-truh\" — nasal, with the final -re barely a breath. It is re + entrer, to go back in, so it means coming home specifically, not just returning." },
      ],
    },
  ],
};
