// FR Unit 29 — Il faut ("You have to") — A1 GRAMMAR
// Second of the three A1-exam-completion units. Two gaps, both scoring zero in the
// corpus probe and both squarely A1:
//   1. OBLIGATION — il faut and devoir. A1 asks a learner to say what they must do
//      and to read a sign or an instruction; without these there is no way to.
//   2. The IMPERATIVE — giving and following instructions. Every A1 syllabus has it,
//      and the corpus had not one imperative form.
//
// The imperative is taught as two lessons on purpose, because in French the two
// forms are a REGISTER choice, not a grammar drill: `regarde` to a friend, `regardez`
// to a stranger, and using the wrong one is the mistake a beginner is most likely to
// make out loud. L2 is the tu form, L3 the vous form, taught as the polite default.
//
// Formation is deliberately left implicit — the imperative is just the present tense
// with the pronoun dropped (tu regardes → regarde, minus the -s for -er verbs), and
// the hints say so, but A1 needs the phrases, not the derivation.
// Conventions: see fr/unit1.js.
export const FR_UNIT29 = {
  id: "fr-u29",
  lang: "fr",
  title: "Il faut",
  order: 29,
  stage: "a1",
  lessons: [
    {
      id: "fr-u29l1",
      unit: 29,
      lesson: 1,
      title: "You have to",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what must be done: il faut, je dois, tu dois, on doit — and il ne faut pas.",
      items: [
        { id: "fr-u29l1-ilfaut", type: "vocab", front: "il faut", reading: "ilfaut", meaning: "you have to", example: { jp: "Il faut manger à midi.", en: "You have to eat at noon." }, accept: ["it is necessary", "one must", "we must", "you must"], hint: "No real subject — il faut is nobody in particular, like English \"one must\". In the present it never changes form, which makes it the easiest way to say must." },
        { id: "fr-u29l1-ilnefautpas", type: "vocab", front: "il ne faut pas", reading: "ilnefautpas", meaning: "you must not", example: { jp: "Il ne faut pas partir maintenant.", en: "You must not leave now." }, accept: ["one must not", "you mustn't"], hint: "Careful — this is a prohibition, not an absence. \"You don't have to\" is a different idea entirely." },
        { id: "fr-u29l1-jedois", type: "vocab", front: "je dois", reading: "jedois", meaning: "I must", example: { jp: "Je dois partir, il est tard.", en: "I have to leave, it's late." }, accept: ["i have to", "i've got to"], hint: "devoir is the personal version: il faut is \"one must\", je dois is \"*I* must\"." },
        { id: "fr-u29l1-tudois", type: "vocab", front: "tu dois", reading: "tudois", meaning: "you must", example: { jp: "Tu dois manger, tu as faim !", en: "You have to eat, you're hungry!" }, accept: ["you have to", "you've got to"] },
        { id: "fr-u29l1-ondoit", type: "vocab", front: "on doit", reading: "ondoit", meaning: "we must (spoken)", example: { jp: "On doit faire les courses.", en: "We have to do the shopping." }, accept: ["we have to", "one must"] },
        { id: "fr-u29l1-nousdevons", type: "vocab", front: "nous devons", reading: "nousdevons", meaning: "we must (formal)", example: { jp: "Nous devons voir le médecin.", en: "We have to see the doctor." }, accept: ["we have to"] },
        { id: "fr-u29l1-vousdevez", type: "vocab", front: "vous devez", reading: "vousdevez", meaning: "you must (polite/plural)", example: { jp: "Vous devez boire de l'eau, madame.", en: "You have to drink water, ma'am." }, accept: ["you have to"] },
      ],
    },
    {
      id: "fr-u29l2",
      unit: 29,
      lesson: 2,
      title: "Do this",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Give an instruction to a friend: regarde, écoute, attends, viens, prends, va — allons-y !",
      items: [
        { id: "fr-u29l2-regarde", type: "vocab", front: "regarde", reading: "regarde", meaning: "look!", example: { jp: "Regarde, il neige !", en: "Look, it's snowing!" }, accept: ["watch", "look at"], hint: "Take tu regardes, drop the tu, drop the -s: regarde. That's the whole rule for -er verbs." },
        { id: "fr-u29l2-ecoute", type: "vocab", front: "écoute", reading: "ecoute", meaning: "listen!", example: { jp: "Écoute bien, c'est important.", en: "Listen carefully, it's important." }, accept: ["listen to", "hear me"] },
        { id: "fr-u29l2-attends", type: "vocab", front: "attends", reading: "attends", meaning: "wait!", example: { jp: "Attends, je ne comprends pas !", en: "Wait, I don't understand!" }, accept: ["hold on", "hang on"], hint: "Not an -er verb, so it KEEPS its -s: attends, prends. The -er verbs drop it — and so does aller, which you meet in this same lesson as va." },
        { id: "fr-u29l2-viens", type: "vocab", front: "viens", reading: "viens", meaning: "come!", example: { jp: "Viens avec moi !", en: "Come with me!" }, accept: ["come on", "come here"] },
        { id: "fr-u29l2-prends", type: "vocab", front: "prends", reading: "prends", meaning: "take!", example: { jp: "Prends le train, c'est rapide.", en: "Take the train, it's fast." }, accept: ["have", "get"] },
        { id: "fr-u29l2-va", type: "vocab", front: "va", reading: "va", meaning: "go!", example: { jp: "Va à la pharmacie, elle est ouverte.", en: "Go to the pharmacy, it's open." }, accept: ["go on"], hint: "aller loses its -s here too: tu vas → va. But it comes back before y — vas-y ! (go on!)." },
        { id: "fr-u29l2-allonsy", type: "vocab", front: "allons-y", reading: "allonsy", meaning: "let's go!", example: { jp: "Le taxi est là — allons-y !", en: "The taxi is here — let's go!" }, accept: ["lets go", "come on"], hint: "The nous form of the imperative is how French says \"let's\": allons-y, mangeons, regardons." },
      ],
    },
    {
      id: "fr-u29l3",
      unit: 29,
      lesson: 3,
      title: "Politely, please",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say the same to a stranger: regardez, écoutez, attendez, venez, prenez, allez, asseyez-vous.",
      items: [
        { id: "fr-u29l3-regardez", type: "vocab", front: "regardez", reading: "regardez", meaning: "look! (polite)", example: { jp: "Regardez, madame, c'est très joli.", en: "Look, ma'am, it's very pretty." }, accept: ["watch", "look at"], hint: "Use this one with anyone you'd call monsieur or madame. Getting it wrong sounds abrupt, not friendly — when unsure, use vous." },
        { id: "fr-u29l3-ecoutez", type: "vocab", front: "écoutez", reading: "ecoutez", meaning: "listen! (polite)", example: { jp: "Écoutez bien, s'il vous plaît.", en: "Listen carefully, please." }, accept: ["listen to", "hear me"] },
        { id: "fr-u29l3-attendez", type: "vocab", front: "attendez", reading: "attendez", meaning: "wait! (polite)", example: { jp: "Attendez une minute, s'il vous plaît.", en: "Wait a minute, please." }, accept: ["hold on", "one moment"] },
        { id: "fr-u29l3-venez", type: "vocab", front: "venez", reading: "venez", meaning: "come! (polite)", example: { jp: "Venez avec moi, monsieur.", en: "Come with me, sir." }, accept: ["come along", "come here"] },
        { id: "fr-u29l3-prenez", type: "vocab", front: "prenez", reading: "prenez", meaning: "take! (polite)", example: { jp: "Prenez le métro, c'est facile.", en: "Take the metro, it's easy." }, accept: ["have", "get"] },
        { id: "fr-u29l3-allez", type: "vocab", front: "allez", reading: "allez", meaning: "go! (polite)", example: { jp: "Pour la gare ? Allez tout droit.", en: "For the station? Go straight on." }, accept: ["go on", "come on"], hint: "Also a warm all-purpose nudge — allez ! is \"come on!\", \"off you go\", or \"cheer up\", depending on the voice." },
        { id: "fr-u29l3-asseyezvous", type: "vocab", front: "asseyez-vous", reading: "asseyezvous", meaning: "sit down (polite)", example: { jp: "Bonjour ! Asseyez-vous, s'il vous plaît.", en: "Hello! Please sit down." }, accept: ["take a seat", "have a seat"], hint: "You'll hear this the moment you walk into any French office or waiting room." },
      ],
    },
  ],
};
