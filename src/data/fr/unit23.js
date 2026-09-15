// FR Unit 22 — Les verbes · 2 ("Verbs 2") — A1 GRAMMAR
// Full present-tense paradigms for the three verbs everything else hangs off —
// être, avoir, aller — taught as person-by-person chunks (the same modelling as
// the Japanese ～ます units) rather than as a conjugation table.
//
// The subject pronouns vous/nous/ils/elles live HERE, not in Unit 21, because
// this is where their verb forms are: teaching "ils" in a unit whose examples had
// to borrow "ils sont" from a later unit was backwards (content-auditor B1c).
// Conventions: see fr/unit1.js.
export const FR_UNIT23 = {
  id: "fr-u23",
  lang: "fr",
  title: "Les verbes · 2",
  order: 23,
  stage: "a1",
  lessons: [
    {
      id: "fr-u23l1",
      unit: 23,
      lesson: 1,
      title: "Who's who",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use every subject pronoun with être: vous, nous, ils, elles — nous sommes, vous êtes, ils sont, on.",
      items: [
        { id: "fr-u23l1-vous", type: "vocab", front: "vous", reading: "vous", meaning: "you (polite)", example: { jp: "Vous êtes le père de Marie ?", en: "Are you Marie's father?" }, drill: { jp: "Vous avez une grande maison", en: "You have a big house" }, accept: ["you formal", "you plural"], hint: "vous for strangers and groups; tu for friends and family. With a stranger, always start with vous." },
        { id: "fr-u23l1-nous", type: "vocab", front: "nous", reading: "nous", meaning: "we", example: { jp: "Nous sommes à Paris.", en: "We are in Paris." }, drill: { jp: "Nous allons au restaurant ce soir", en: "We're going to the restaurant tonight" }, accept: ["us"] },
        { id: "fr-u23l1-ils", type: "vocab", front: "ils", reading: "ils", meaning: "they", example: { jp: "Ils sont dans le jardin.", en: "They are in the garden." }, drill: { jp: "Ils ont une petite voiture", en: "They have a small car" }, accept: ["they masculine"], hint: "ils for men or a mixed group, elles for an all-female group." },
        { id: "fr-u23l1-elles", type: "vocab", front: "elles", reading: "elles", meaning: "they (feminine)", example: { jp: "Marie et Anne ? Elles sont ici.", en: "Marie and Anne? They're here." }, drill: { jp: "Elles sont dans le jardin", en: "They are in the garden" }, accept: ["they"] },
        { id: "fr-u23l1-noussommes", type: "vocab", front: "nous sommes", reading: "noussommes", meaning: "we are", example: { jp: "Nous sommes très contents.", en: "We are very happy." }, drill: { jp: "Nous sommes à la gare", en: "We are at the station" }, accept: ["we're"] },
        { id: "fr-u23l1-vousetes", type: "vocab", front: "vous êtes", reading: "vousetes", meaning: "you are (polite)", example: { jp: "Vous êtes français ?", en: "Are you French?" }, drill: { jp: "Vous êtes fatigué aujourd'hui", en: "You are tired today" }, accept: ["you're"] },
        { id: "fr-u23l1-ilssont", type: "vocab", front: "ils sont", reading: "ilssont", meaning: "they are", example: { jp: "Ils sont dans le salon.", en: "They are in the living room." }, drill: { jp: "Ils sont à la maison", en: "They are at home" }, accept: ["they're"] },
        { id: "fr-u23l1-on", type: "vocab", front: "on", reading: "on", meaning: "we", example: { jp: "On va au restaurant !", en: "We're going to the restaurant!" }, drill: { jp: "On mange à midi", en: "We eat at noon" }, accept: ["one", "people", "you"], hint: "In real speech, on almost always replaces nous: on va, on mange. It takes the il/elle form." },
      ],
    },
    {
      id: "fr-u23l2",
      unit: 23,
      lesson: 2,
      title: "Having and going",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use avoir, aller and venir: nous avons, vous avez, ils ont — tu vas, il va, je viens, il vient.",
      items: [
        { id: "fr-u23l2-nousavons", type: "vocab", front: "nous avons", reading: "nousavons", meaning: "we have", example: { jp: "Nous avons deux enfants.", en: "We have two children." }, drill: { jp: "Nous avons faim ce soir", en: "We're hungry tonight" }, accept: ["we've"] },
        { id: "fr-u23l2-vousavez", type: "vocab", front: "vous avez", reading: "vousavez", meaning: "you have (polite)", example: { jp: "Vous avez l'heure, s'il vous plaît ?", en: "Do you have the time, please?" }, drill: { jp: "Vous avez un grand jardin", en: "You have a big garden" }, accept: ["you've", "do you have"], hint: "Vous avez l'heure ? is the natural way to ask a stranger the time." },
        { id: "fr-u23l2-ilsont", type: "vocab", front: "ils ont", reading: "ilsont", meaning: "they have", example: { jp: "Ils ont une grande maison.", en: "They have a big house." }, drill: { jp: "Ils ont deux enfants", en: "They have two children" }, accept: ["they've"], hint: "Careful: ils ont (they have) vs ils sont (they are). One letter, opposite verbs." },
        { id: "fr-u23l2-tuvas", type: "vocab", front: "tu vas", reading: "tuvas", meaning: "you go", example: { jp: "Tu vas à l'école aujourd'hui ?", en: "Are you going to school today?" }, drill: { jp: "Tu vas au marché demain", en: "You're going to the market tomorrow" }, accept: ["you're going"], hint: "Ça va ? (Unit 1) is this same verb — literally \"it goes?\"" },
        { id: "fr-u23l2-ilva", type: "vocab", front: "il va", reading: "ilva", meaning: "he goes", example: { jp: "Il va au marché le samedi.", en: "He goes to the market on Saturdays." }, drill: { jp: "Il va à la gare", en: "He's going to the station" }, accept: ["he's going", "she goes"] },
        { id: "fr-u23l2-nousallons", type: "vocab", front: "nous allons", reading: "nousallons", meaning: "we go", example: { jp: "Nous allons à la plage en août.", en: "We go to the beach in August." }, drill: { jp: "Nous allons à la montagne", en: "We're going to the mountains" }, accept: ["we're going"] },
        { id: "fr-u23l2-jeviens", type: "vocab", front: "je viens", reading: "jeviens", meaning: "I come", example: { jp: "Je viens avec toi !", en: "I'm coming with you!" }, drill: { jp: "Je viens demain matin", en: "I'm coming tomorrow morning" }, accept: ["i'm coming"] },
        { id: "fr-u23l2-ilvient", type: "vocab", front: "il vient", reading: "ilvient", meaning: "he comes", example: { jp: "Il vient de Paris.", en: "He comes from Paris." }, drill: { jp: "Il vient avec nous ce soir", en: "He's coming with us tonight" }, accept: ["he's coming", "she comes"], hint: "venir de = to come from — il vient de Lyon." },
      ],
    },
    {
      id: "fr-u23l3",
      unit: 23,
      lesson: 3,
      title: "More everyday verbs",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use more key verbs: je mets, je dors, je sors, je reste, je donne, je vois, j'ouvre, je ferme.",
      items: [
        { id: "fr-u23l3-jemets", type: "vocab", front: "je mets", reading: "jemets", meaning: "I put", example: { jp: "Je mets le pain sur la table.", en: "I put the bread on the table." }, drill: { jp: "Je mets un manteau aujourd'hui", en: "I'm putting on a coat today" }, accept: ["i'm putting", "i place", "i put on"], hint: "Also \"I put on\" for clothes: je mets un manteau." },
        { id: "fr-u23l3-jedors", type: "vocab", front: "je dors", reading: "jedors", meaning: "I sleep", example: { jp: "Je dors huit heures.", en: "I sleep eight hours." }, drill: { jp: "Je dors très bien ici", en: "I sleep very well here" }, accept: ["i'm sleeping"] },
        { id: "fr-u23l3-jesors", type: "vocab", front: "je sors", reading: "jesors", meaning: "I go out", example: { jp: "Le samedi, je sors avec mon frère.", en: "On Saturdays, I go out with my brother." }, drill: { jp: "Je sors ce soir avec Marie", en: "I'm going out tonight with Marie" }, accept: ["i'm going out", "i leave", "i exit"] },
        { id: "fr-u23l3-jereste", type: "vocab", front: "je reste", reading: "jereste", meaning: "I stay", example: { jp: "Il pleut : je reste à la maison.", en: "It's raining: I'm staying home." }, drill: { jp: "Je reste ici ce matin", en: "I'm staying here this morning" }, accept: ["i'm staying", "i remain"] },
        { id: "fr-u23l3-jedonne", type: "vocab", front: "je donne", reading: "jedonne", meaning: "I give", example: { jp: "Je donne la clé à ma mère.", en: "I'm giving the key to my mother." }, drill: { jp: "Je donne le livre à Paul", en: "I give the book to Paul" }, accept: ["i'm giving"] },
        { id: "fr-u23l3-jevois", type: "vocab", front: "je vois", reading: "jevois", meaning: "I see", example: { jp: "Je vois la mer !", en: "I see the sea!" }, drill: { jp: "Je vois la voiture de mon père", en: "I see my father's car" }, accept: ["i'm seeing"], hint: "Je vois. on its own = \"I see.\" — exactly like English." },
        { id: "fr-u23l3-jouvre", type: "vocab", front: "j'ouvre", reading: "jouvre", meaning: "I open", example: { jp: "J'ouvre la porte.", en: "I open the door." }, drill: { jp: "J'ouvre la fenêtre le matin", en: "I open the window in the morning" }, accept: ["i'm opening"] },
        { id: "fr-u23l3-jeferme", type: "vocab", front: "je ferme", reading: "jeferme", meaning: "I close", example: { jp: "Je ferme la fenêtre : il fait froid.", en: "I'm closing the window: it's cold." }, drill: { jp: "Je ferme la porte", en: "I close the door" }, accept: ["i'm closing", "i shut"] },
      ],
    },
  ],
};
