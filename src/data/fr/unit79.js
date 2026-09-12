// FR Unit 79 — Register 1 — polite vs plain (slot: register-1) — B1
// THE NEW B1 STRAND. The blueprint is blunt about it: "the same sentence said to
// a friend, a stranger, and a boss is three different sentences, and choosing
// wrong is the mistake that marks a speaker as foreign far more than vocabulary
// does… the strand most likely to be skipped and most worth keeping."
//
// So this unit is built as a CONTRAST, not a word list. Every lesson teaches one
// side of the tu/vous divide against the other, and the examples deliberately
// show the SAME act performed twice at different heights. Modelled like grammar:
// function-phrase vocab whose examples carry the pattern.
//
// A1 taught the neutral middle (bonjour, s'il vous plaît, merci, excusez-moi) and
// A2 the polite conditional (je voudrais, pourriez-vous is new here). This unit
// adds the two ends A1 could not risk: the formal register a learner needs for
// an email to an administration, and the casual one they will actually hear.
// Every front checked against the live corpus. Conventions: see fr/unit1.js.
export const FR_UNIT79 = {
  id: "fr-u79",
  lang: "fr",
  title: "Tu ou vous",
  order: 79,
  stage: "b1",
  lessons: [
    {
      id: "fr-u79l1",
      unit: 79,
      lesson: 1,
      title: "The tu/vous decision",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Choose and negotiate the right pronoun: tutoyer, vouvoyer, on se tutoie ?",
      items: [
        { id: "fr-u79l1-tutoyer", type: "vocab", front: "tutoyer", reading: "tutoyer", meaning: "to use tu with someone", example: { jp: "On peut tutoyer un collègue, mais rarement un client.", en: "You can use tu with a colleague, but rarely with a customer." }, drill: { jp: "On peut tutoyer un collègue", en: "You can use tu with a colleague" }, accept: ["to say tu", "to be informal with"], hint: "French has a verb for it, because it's a real decision. English has to explain the whole thing." },
        { id: "fr-u79l1-vouvoyer", type: "vocab", front: "vouvoyer", reading: "vouvoyer", meaning: "to use vous with someone", example: { jp: "Je vouvoie mes professeurs, même ceux que je connais bien.", en: "I use vous with my teachers, even the ones I know well." }, accept: ["to say vous", "to be formal with"], hint: "The safe default with any adult you don't know. Getting this wrong is more noticeable than a grammar mistake." },
        { id: "fr-u79l1-onsetutoie", type: "vocab", front: "on se tutoie", reading: "onsetutoie", meaning: "shall we use tu?", example: { jp: "On se tutoie ? Ce sera plus simple pour travailler ensemble.", en: "Shall we use tu? It'll be easier for working together." }, drill: { jp: "On se tutoie maintenant", en: "We use tu with each other now" }, accept: ["let's use tu", "we can say tu"], hint: "The standard way to propose the switch. Traditionally the older or senior person offers it." },
        { id: "fr-u79l1-steplait", type: "vocab", front: "s'il te plaît", reading: "silteplait", meaning: "please (to a friend)", example: { jp: "Tu peux me donner le sel, s'il te plaît ?", en: "Can you give me the salt, please?" }, drill: { jp: "Donne-moi le sel s'il te plaît", en: "Pass me the salt please" }, accept: ["please", "please (informal)"], hint: "The tu form of s'il vous plaît (Unit 1). Same phrase, one pronoun swapped — that's the whole system." },
        { id: "fr-u79l1-pourriezvous", type: "vocab", front: "pourriez-vous", reading: "pourriezvous", meaning: "could you", example: { jp: "Pourriez-vous répéter, s'il vous plaît ? Je n'ai pas bien entendu.", en: "Could you repeat that, please? I didn't hear properly." }, accept: ["would you be able to", "can you (polite)"], hint: "Inverted and conditional — two politeness moves at once. Est-ce que vous pouvez is a step below." },
        { id: "fr-u79l1-puisje", type: "vocab", front: "puis-je", reading: "puisje", meaning: "may I", example: { jp: "Puis-je vous poser une question ?", en: "May I ask you a question?" }, accept: ["can i (formal)", "might i"], hint: "A special form: je peux inverts to puis-je, never \"peux-je\". Formal, and very common in writing." },
      ],
    },
    {
      id: "fr-u79l2",
      unit: 79,
      lesson: 2,
      title: "Writing to someone official",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Open and close a formal email: Madame, Monsieur… cordialement, je vous remercie.",
      items: [
        { id: "fr-u79l2-madamemonsieur", type: "vocab", front: "Madame, Monsieur", reading: "madamemonsieur", meaning: "Dear Sir or Madam", example: { jp: "Madame, Monsieur, je vous écris parce que j'ai une question.", en: "Dear Sir or Madam, I am writing because I have a question." }, accept: ["dear sir or madam", "to whom it may concern"], hint: "The standard opening when you don't know the name. No \"cher\" — that's for people you know." },
        { id: "fr-u79l2-cordialement", type: "vocab", front: "cordialement", reading: "cordialement", meaning: "kind regards", example: { jp: "Cordialement, et merci encore pour votre aide.", en: "Kind regards, and thank you again for your help." }, accept: ["regards", "best regards", "sincerely"], hint: "The safe sign-off for almost any professional email. Bien cordialement is one notch warmer." },
        { id: "fr-u79l2-bienavous", type: "vocab", front: "bien à vous", reading: "bienavous", meaning: "yours", example: { jp: "Bien à vous, et à bientôt j'espère.", en: "Yours, and I hope to see you soon." }, accept: ["yours sincerely", "best wishes", "all the best"], hint: "Warmer than cordialement, for someone you've dealt with before." },
        { id: "fr-u79l2-jevousremercie", type: "vocab", front: "je vous remercie", reading: "jevousremercie", meaning: "thank you (formal)", example: { jp: "Je vous remercie de votre réponse rapide.", en: "Thank you for your quick reply." }, accept: ["i thank you", "many thanks"], hint: "The written form of merci. In a letter, merci alone can look abrupt." },
        { id: "fr-u79l2-jeresteavotredisposition", type: "vocab", front: "je reste à votre disposition", reading: "jeresteavotredisposition", meaning: "I remain at your disposal", example: { jp: "Je reste à votre disposition si vous avez des questions.", en: "I remain at your disposal if you have any questions." }, drill: { jp: "Je reste à votre disposition aujourd'hui", en: "I remain at your disposal today" }, accept: ["please let me know", "i'm available", "at your service"], hint: "A fixed formula. It sounds grand in English; in French it's simply what you write." },
        { id: "fr-u79l2-danslattente", type: "vocab", front: "dans l'attente de votre réponse", reading: "danslattentedevotrereponse", meaning: "looking forward to your reply", example: { jp: "Dans l'attente de votre réponse, je vous remercie de votre patience.", en: "Looking forward to your reply, thank you for your patience." }, accept: ["awaiting your reply", "i look forward to hearing"], hint: "Pairs with the sign-off. French formal letters are built from blocks like this — learn them whole." },
      ],
    },
    {
      id: "fr-u79l3",
      unit: 79,
      lesson: 3,
      title: "How people actually talk",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Understand casual speech: ouais, un truc, le mec, carrément, ça craint.",
      items: [
        { id: "fr-u79l3-ouais", type: "vocab", front: "ouais", reading: "ouais", meaning: "yeah", example: { jp: "Ouais, ça me va, on se voit demain.", en: "Yeah, that works for me, see you tomorrow." }, accept: ["yeah", "yep", "uh-huh"], hint: "Fine with friends, wrong in an interview. Understanding it matters more than saying it." },
        { id: "fr-u79l3-untruc", type: "vocab", front: "un truc", reading: "untruc", meaning: "a thing", example: { jp: "J'ai un truc à te dire, mais pas ici.", en: "I've got something to tell you, but not here." }, accept: ["a thingy", "stuff", "something"], hint: "The casual la chose (Unit 47). Natives use it constantly when the exact word won't come." },
        { id: "fr-u79l3-lemec", type: "vocab", front: "le mec", reading: "lemec", meaning: "the guy", example: { jp: "Le mec au téléphone n'a rien compris à ma question.", en: "The guy on the phone didn't understand my question at all." }, accept: ["guy", "bloke", "the fellow"], hint: "Casual for un homme. The female equivalent is une meuf, which is one degree more casual again." },
        { id: "fr-u79l3-carrement", type: "vocab", front: "carrément", reading: "carrement", meaning: "totally", example: { jp: "— Tu es fatigué ? — Carrément, je n'ai pas dormi.", en: "— Are you tired? — Totally, I didn't sleep." }, accept: ["absolutely", "completely", "downright"], hint: "As a one-word answer it means \"absolutely\"; inside a sentence it means \"downright\"." },
        { id: "fr-u79l3-cacraint", type: "vocab", front: "ça craint", reading: "cacraint", meaning: "that sucks", example: { jp: "Il n'y a plus de concert ce soir ? Ça craint.", en: "There's no concert tonight? That sucks." }, accept: ["that's rubbish", "that's bad", "it's dodgy"], hint: "Also \"this place is dodgy\" — ce quartier craint. Never write it in anything official." },
        { id: "fr-u79l3-hein", type: "vocab", front: "hein", reading: "hein", meaning: "eh?", example: { jp: "C'est joli, hein ?", en: "It's pretty, isn't it?" }, accept: ["right?", "huh", "isn't it"], hint: "Tags a question onto a statement, like n'est-ce pas (Unit 21) but spoken and much more common." },
      ],
    },
    {
      id: "fr-u79l4",
      unit: 79,
      lesson: 4,
      title: "The same invitation, twice",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Pitch the same request at two heights: ça te dit ? vs ça vous dirait ? — and sign off to match.",
      items: [
        { id: "fr-u79l4-catedit", type: "vocab", front: "ça te dit", reading: "catedit", meaning: "do you fancy it?", example: { jp: "On va au théâtre ce soir, ça te dit ?", en: "We're going to the theatre tonight, do you fancy it?" }, accept: ["are you up for it", "how about it", "do you feel like it"], hint: "The friend version. Literally \"does it say to you?\"" },
        { id: "fr-u79l4-cavousdirait", type: "vocab", front: "ça vous dirait", reading: "cavousdirait", meaning: "would you be interested?", example: { jp: "Ça vous dirait de venir déjeuner avec nous la semaine prochaine ?", en: "Would you be interested in coming to lunch with us next week?" }, accept: ["would you like to", "would you fancy"], hint: "Same idea as ça te dit, moved up twice: vous instead of tu, and the conditional instead of the present." },
        { id: "fr-u79l4-aplus", type: "vocab", front: "à plus", reading: "aplus", meaning: "see you later", example: { jp: "Bon, j'y vais. À plus !", en: "Right, I'm off. See you later!" }, accept: ["see you", "later", "catch you later"], hint: "Short for à plus tard. In writing friends shorten it further, to A+." },
        { id: "fr-u79l4-coucou", type: "vocab", front: "coucou", reading: "coucou", meaning: "hi there", example: { jp: "Coucou, c'est moi ! Tu es à la maison ?", en: "Hi there, it's me! Are you home?" }, drill: { jp: "Coucou c'est moi", en: "Hi there it's me" }, accept: ["hey", "hiya", "hello there"], hint: "Very warm and very informal — family and close friends. Never to a stranger." },
        { id: "fr-u79l4-veuillez", type: "vocab", front: "veuillez", reading: "veuillez", meaning: "please (formal command)", example: { jp: "Veuillez répondre à ce message avant vendredi.", en: "Please reply to this message before Friday." }, accept: ["kindly", "be so good as to"], hint: "The formal imperative of vouloir, used on signs and in official letters — veuillez patienter." },
        { id: "fr-u79l4-jevousprie", type: "vocab", front: "je vous prie", reading: "jevousprie", meaning: "I beg you", example: { jp: "Je vous prie de m'excuser pour ce retard.", en: "Please accept my apologies for this delay." }, accept: ["please", "kindly", "i request"], hint: "je vous prie de m'excuser is the formal \"sorry\". A notch above excusez-moi (Unit 1)." },
      ],
    },
  ],
};
