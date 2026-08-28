// FR Unit 59 — La cause et la conséquence (slot: cause and consequence) — B1
// SCOPE BOUNDARY: A2 already teaches the everyday causal links (à cause de,
// grâce à, car, en raison de, du coup, si bien que, la raison). This unit is one
// level up: the register of ANALYSIS — naming a factor, tracing a consequence,
// and the formal logical connectives (étant donné que, dans la mesure où, par
// conséquent). Every front checked against the live 1,287 A1+A2 fronts and the
// sibling B1 blocks before writing. Two-clause examples. Conventions: fr/unit1.js.
export const FR_UNIT59 = {
  id: "fr-u59",
  lang: "fr",
  title: "La cause et la conséquence",
  order: 59,
  stage: "b1",
  lessons: [
    {
      id: "fr-u59l1",
      unit: 59,
      lesson: 1,
      title: "Naming a cause",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Point to what brings something about: un facteur, l'origine, causer, provoquer.",
      items: [
        { id: "fr-u59l1-lefacteur", type: "vocab", front: "le facteur", reading: "lefacteur", meaning: "the factor", example: { jp: "Le prix est un facteur important quand on choisit une voiture.", en: "Price is an important factor when you choose a car." }, accept: ["factor", "the element", "the postman"], hint: "An element that plays a part. Also le facteur = the postman — same word, two lives." },
        { id: "fr-u59l1-lorigine", type: "vocab", front: "l'origine", reading: "lorigine", meaning: "the origin", example: { jp: "On ne connaît pas encore l'origine de ce problème.", en: "We don't yet know the origin of this problem." }, accept: ["origin", "the source", "the cause"], hint: "Where something comes from. à l'origine = originally, at the start." },
        { id: "fr-u59l1-causer", type: "vocab", front: "causer", reading: "causer", meaning: "to cause", example: { jp: "La pluie a causé beaucoup de problèmes sur les routes.", en: "The rain caused a lot of problems on the roads." }, accept: ["to cause", "to bring about"], hint: "The plain verb from la cause. In speech it can also mean to chat." },
        { id: "fr-u59l1-provoquer", type: "vocab", front: "provoquer", reading: "provoquer", meaning: "to trigger", example: { jp: "Cette nouvelle a provoqué beaucoup de réactions.", en: "This piece of news triggered a lot of reactions." }, accept: ["to trigger", "to provoke", "to bring on", "to spark"], hint: "Stronger than causer — to set off a strong or sudden reaction." },
        { id: "fr-u59l1-entrainer", type: "vocab", front: "entraîner", reading: "entrainer", meaning: "to lead to", example: { jp: "Cette habitude entraîne des problèmes de santé.", en: "This habit leads to health problems." }, accept: ["to lead to", "to bring about", "to cause"], hint: "Also to train (a team, or oneself: s'entraîner). Here: to bring about as a result." },
        { id: "fr-u59l1-declencher", type: "vocab", front: "déclencher", reading: "declencher", meaning: "to set off", example: { jp: "Un simple mot a déclenché une longue discussion.", en: "A single word set off a long discussion." }, accept: ["to set off", "to trigger", "to spark"], hint: "To be the exact thing that starts a chain of events — like pressing a button." },
      ],
    },
    {
      id: "fr-u59l2",
      unit: 59,
      lesson: 2,
      title: "The consequence",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the effect something has: une conséquence, un impact, résulter, aboutir.",
      items: [
        { id: "fr-u59l2-laconsequence", type: "vocab", front: "la conséquence", reading: "laconsequence", meaning: "the consequence", example: { jp: "Il n'a pas pensé à la conséquence de son choix.", en: "He didn't think about the consequence of his choice." }, accept: ["consequence", "the result", "the outcome"], hint: "The result that follows, often a serious one. en conséquence = accordingly." },
        { id: "fr-u59l2-limpact", type: "vocab", front: "l'impact", reading: "limpact", meaning: "the impact", example: { jp: "Internet a un impact très grand sur notre vie de tous les jours.", en: "The internet has a very big impact on our everyday life." }, accept: ["impact", "the effect"], hint: "The force of an effect. avoir un impact sur = to have an impact on." },
        { id: "fr-u59l2-lephenomene", type: "vocab", front: "le phénomène", reading: "lephenomene", meaning: "the phenomenon", example: { jp: "C'est un phénomène nouveau, difficile à expliquer.", en: "It's a new phenomenon, hard to explain." }, accept: ["phenomenon", "the trend", "the occurrence"], hint: "Something that happens and can be observed — social, natural, or scientific." },
        { id: "fr-u59l2-resulter", type: "vocab", front: "résulter", reading: "resulter", meaning: "to result from", example: { jp: "Ses problèmes de santé résultent de trop de travail.", en: "His health problems result from too much work." }, accept: ["to result from", "to come from", "to stem from"], hint: "résulter de = to be the result of. Always with de." },
        { id: "fr-u59l2-aboutir", type: "vocab", front: "aboutir", reading: "aboutir", meaning: "to lead to", example: { jp: "Après des heures de discussion, ils ont abouti à un accord.", en: "After hours of discussion, they reached an agreement." }, accept: ["to lead to", "to result in", "to end up at", "to succeed"], hint: "aboutir à = to end up at / result in. Un projet qui aboutit is one that succeeds." },
        { id: "fr-u59l2-mener", type: "vocab", front: "mener", reading: "mener", meaning: "to lead to", example: { jp: "Ce choix peut mener à de vrais problèmes.", en: "This choice can lead to real problems." }, accept: ["to lead", "to lead to", "to take"], hint: "To lead — a road, or an action: mener à un résultat. Also to lead a life: mener une vie calme." },
      ],
    },
    {
      id: "fr-u59l3",
      unit: 59,
      lesson: 3,
      title: "Linking cause to effect",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Join a cause to its effect formally: par conséquent, de ce fait, étant donné que, d'où.",
      items: [
        { id: "fr-u59l3-parconsequent", type: "vocab", front: "par conséquent", reading: "parconsequent", meaning: "consequently", example: { jp: "Il pleut beaucoup ; par conséquent, nous restons à la maison.", en: "It's raining a lot; consequently, we're staying home." }, accept: ["consequently", "therefore", "as a result"], hint: "The formal 'therefore'. Opens the clause that states the effect." },
        { id: "fr-u59l3-decefait", type: "vocab", front: "de ce fait", reading: "decefait", meaning: "as a result", example: { jp: "Elle est malade ; de ce fait, elle ne viendra pas ce soir.", en: "She's ill; as a result, she won't come this evening." }, accept: ["as a result", "consequently", "for this reason"], hint: "Literally 'by this fact'. A slightly softer par conséquent." },
        { id: "fr-u59l3-etantdonneque", type: "vocab", front: "étant donné que", reading: "etantdonneque", meaning: "given that", example: { jp: "Étant donné qu'il est tard, nous allons rentrer.", en: "Given that it's late, we're going to head home." }, accept: ["given that", "seeing that", "since"], hint: "Introduces a known fact as the reason. Sits at the front of the sentence." },
        { id: "fr-u59l3-danslamesureou", type: "vocab", front: "dans la mesure où", reading: "danslamesureou", meaning: "insofar as", example: { jp: "Je veux bien vous aider, dans la mesure où j'ai le temps.", en: "I'm happy to help you, insofar as I have the time." }, accept: ["insofar as", "to the extent that", "as long as"], hint: "Sets a condition or a limit on what follows — 'to the degree that'." },
        { id: "fr-u59l3-dou", type: "vocab", front: "d'où", reading: "dou", meaning: "hence", example: { jp: "Il n'a pas dormi de la nuit, d'où ses yeux rouges ce matin.", en: "He didn't sleep all night, hence his red eyes this morning." }, accept: ["hence", "which is why", "from which"], hint: "Points from a cause straight to its visible effect: …, d'où + a noun." },
        { id: "fr-u59l3-ainsi", type: "vocab", front: "ainsi", reading: "ainsi", meaning: "thus", example: { jp: "Il a beaucoup travaillé ; ainsi, il a réussi son examen.", en: "He worked hard; thus, he passed his exam." }, accept: ["thus", "in this way", "so"], hint: "'In this way' or 'thus'. Also means 'like this': fais-le ainsi." },
      ],
    },
    {
      id: "fr-u59l4",
      unit: 59,
      lesson: 4,
      title: "Influence and dependence",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what shapes or depends on what: influencer, contribuer, dépendre, provenir.",
      items: [
        { id: "fr-u59l4-influencer", type: "vocab", front: "influencer", reading: "influencer", meaning: "to influence", example: { jp: "Ses amis l'influencent beaucoup dans ses choix.", en: "His friends influence him a lot in his choices." }, accept: ["to influence", "to sway"], hint: "influencer quelqu'un. The noun is l'influence." },
        { id: "fr-u59l4-contribuer", type: "vocab", front: "contribuer", reading: "contribuer", meaning: "to contribute", example: { jp: "Chacun peut contribuer à un monde meilleur.", en: "Everyone can contribute to a better world." }, accept: ["to contribute", "to help", "to play a part"], hint: "contribuer à quelque chose = to help bring it about." },
        { id: "fr-u59l4-dependre", type: "vocab", front: "dépendre", reading: "dependre", meaning: "to depend", example: { jp: "Tout dépend du temps qu'il fera demain.", en: "Everything depends on the weather tomorrow." }, accept: ["to depend", "to rely on"], hint: "dépendre de = to depend on. Ça dépend = it depends." },
        { id: "fr-u59l4-provenir", type: "vocab", front: "provenir", reading: "provenir", meaning: "to come from", example: { jp: "Ce mot provient du latin, comme beaucoup de mots français.", en: "This word comes from Latin, like many French words." }, accept: ["to come from", "to originate from", "to stem from"], hint: "provenir de = to originate from — used for things, not people." },
        { id: "fr-u59l4-favoriser", type: "vocab", front: "favoriser", reading: "favoriser", meaning: "to promote", example: { jp: "Le sport favorise une bonne santé.", en: "Sport promotes good health." }, accept: ["to promote", "to favour", "to encourage", "to help"], hint: "To help something along — favoriser le progrès. Also to favour one person over another." },
        { id: "fr-u59l4-lareaction", type: "vocab", front: "la réaction", reading: "lareaction", meaning: "the reaction", example: { jp: "Sa réaction a été très rapide et très calme.", en: "His reaction was very quick and very calm." }, accept: ["reaction", "the response"], hint: "How someone responds — the verb is réagir." },
      ],
    },
  ],
};
