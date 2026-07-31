// FR Unit 22 — Les verbes · 2 ("Verbs 2") — A1 GRAMMAR
// Full present-tense paradigms for the three verbs everything else hangs off —
// être, avoir, aller — taught as person-by-person chunks (the same way ja teaches
// ～ます forms) rather than as a conjugation table. The learner already has the je
// and tu forms from Units 2 and 9; this completes them and adds the key irregular
// verbs. Conventions: see fr/unit1.js.
export const FR_UNIT22 = {
  id: "fr-u22",
  lang: "fr",
  title: "Les verbes · 2",
  order: 22,
  stage: "a1",
  lessons: [
    {
      id: "fr-u22l1",
      unit: 22,
      lesson: 1,
      title: "être and avoir, completed",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use être and avoir with every person: nous sommes, vous êtes, ils sont — nous avons, vous avez, ils ont.",
      items: [
        { id: "fr-u22l1-noussommes", type: "vocab", front: "nous sommes", reading: "noussommes", meaning: "we are", example: { jp: "Nous sommes très contents.", en: "We are very happy." }, accept: ["we're"] },
        { id: "fr-u22l1-vousetes", type: "vocab", front: "vous êtes", reading: "vousetes", meaning: "you are (polite)", example: { jp: "Vous êtes le père de Marie ?", en: "Are you Marie's father?" }, accept: ["you're"] },
        { id: "fr-u22l1-ilssont", type: "vocab", front: "ils sont", reading: "ilssont", meaning: "they are", example: { jp: "Ils sont dans le salon.", en: "They are in the living room." }, accept: ["they're"] },
        { id: "fr-u22l1-nousavons", type: "vocab", front: "nous avons", reading: "nousavons", meaning: "we have", example: { jp: "Nous avons deux enfants.", en: "We have two children." }, accept: ["we've"] },
        { id: "fr-u22l1-vousavez", type: "vocab", front: "vous avez", reading: "vousavez", meaning: "you have (polite)", example: { jp: "Vous avez l'heure, s'il vous plaît ?", en: "Do you have the time, please?" }, accept: ["you've", "do you have"], hint: "Vous avez l'heure ? is the natural way to ask a stranger the time." },
        { id: "fr-u22l1-ilsont", type: "vocab", front: "ils ont", reading: "ilsont", meaning: "they have", example: { jp: "Ils ont une grande maison.", en: "They have a big house." }, accept: ["they've"], hint: "Careful: ils ont (they have) vs ils sont (they are). One letter, opposite verbs." },
        { id: "fr-u22l1-on", type: "vocab", front: "on", reading: "on", meaning: "we", example: { jp: "On va au restaurant ce soir.", en: "We're going to the restaurant tonight." }, accept: ["one", "people", "you"], hint: "In real speech, on almost always replaces nous: on va, on mange. It takes the il/elle form." },
      ],
    },
    {
      id: "fr-u22l2",
      unit: 22,
      lesson: 2,
      title: "Coming and going",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use aller and venir: je vais, tu vas, il va, nous allons — je viens, tu viens, il vient.",
      items: [
        { id: "fr-u22l2-tuvas", type: "vocab", front: "tu vas", reading: "tuvas", meaning: "you go", example: { jp: "Tu vas à l'école aujourd'hui ?", en: "Are you going to school today?" }, accept: ["you're going"], hint: "Ça va ? (Unit 1) is this same verb — literally \"it goes?\"" },
        { id: "fr-u22l2-ilva", type: "vocab", front: "il va", reading: "ilva", meaning: "he goes", example: { jp: "Il va au marché le samedi.", en: "He goes to the market on Saturdays." }, accept: ["he's going", "she goes"] },
        { id: "fr-u22l2-nousallons", type: "vocab", front: "nous allons", reading: "nousallons", meaning: "we go", example: { jp: "Nous allons à la plage en août.", en: "We go to the beach in August." }, accept: ["we're going"] },
        { id: "fr-u22l2-jeviens", type: "vocab", front: "je viens", reading: "jeviens", meaning: "I come", example: { jp: "Je viens avec toi !", en: "I'm coming with you!" }, accept: ["i'm coming"] },
        { id: "fr-u22l2-tuviens", type: "vocab", front: "tu viens", reading: "tuviens", meaning: "you come", example: { jp: "Tu viens au restaurant ce soir ?", en: "Are you coming to the restaurant tonight?" }, accept: ["you're coming"] },
        { id: "fr-u22l2-ilvient", type: "vocab", front: "il vient", reading: "ilvient", meaning: "he comes", example: { jp: "Il vient de Paris.", en: "He comes from Paris." }, accept: ["he's coming", "she comes"], hint: "venir de = to come from — il vient de Lyon." },
        { id: "fr-u22l2-cesoir", type: "vocab", front: "ce soir", reading: "cesoir", meaning: "tonight", example: { jp: "Ce soir, je reste à la maison.", en: "Tonight, I'm staying home." }, accept: ["this evening"], hint: "ce = this (masculine): ce soir, ce matin. cette for feminine: cette semaine." },
      ],
    },
    {
      id: "fr-u22l3",
      unit: 22,
      lesson: 3,
      title: "More everyday verbs",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use more key verbs: je mets, je dors, je sors, je reste, je donne, je vois, j'ouvre.",
      items: [
        { id: "fr-u22l3-jemets", type: "vocab", front: "je mets", reading: "jemets", meaning: "I put", example: { jp: "Je mets le pain sur la table.", en: "I put the bread on the table." }, accept: ["i'm putting", "i place", "i put on"], hint: "Also \"I put on\" for clothes: je mets un manteau." },
        { id: "fr-u22l3-jedors", type: "vocab", front: "je dors", reading: "jedors", meaning: "I sleep", example: { jp: "Je dors huit heures par nuit.", en: "I sleep eight hours a night." }, accept: ["i'm sleeping"], hint: "par = per — huit heures par nuit." },
        { id: "fr-u22l3-jesors", type: "vocab", front: "je sors", reading: "jesors", meaning: "I go out", example: { jp: "Le samedi, je sors avec mes amis.", en: "On Saturdays, I go out with my friends." }, accept: ["i'm going out", "i leave", "i exit"] },
        { id: "fr-u22l3-jereste", type: "vocab", front: "je reste", reading: "jereste", meaning: "I stay", example: { jp: "Il pleut : je reste à la maison.", en: "It's raining: I'm staying home." }, accept: ["i'm staying", "i remain"] },
        { id: "fr-u22l3-jedonne", type: "vocab", front: "je donne", reading: "jedonne", meaning: "I give", example: { jp: "Je donne un livre à mon frère.", en: "I'm giving a book to my brother." }, accept: ["i'm giving"], hint: "le livre = the book, coming in Unit 23." },
        { id: "fr-u22l3-jevois", type: "vocab", front: "je vois", reading: "jevois", meaning: "I see", example: { jp: "Je vois la mer par la fenêtre.", en: "I see the sea through the window." }, accept: ["i'm seeing"], hint: "Je vois. on its own = \"I see.\" — exactly like English." },
        { id: "fr-u22l3-jouvre", type: "vocab", front: "j'ouvre", reading: "jouvre", meaning: "I open", example: { jp: "J'ouvre la porte.", en: "I open the door." }, accept: ["i'm opening"] },
        { id: "fr-u22l3-jeferme", type: "vocab", front: "je ferme", reading: "jeferme", meaning: "I close", example: { jp: "Je ferme la fenêtre : il fait froid.", en: "I'm closing the window: it's cold." }, accept: ["i'm closing", "i shut"] },
      ],
    },
  ],
};
