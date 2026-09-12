// FR Unit 80 — Register 2 — softening and formality (slot: register-2) — B1
// The second half of the register strand. Unit 79 was WHICH register; this one is
// how to soften inside it — the moves that make a request askable, a refusal
// survivable, and bad news deliverable. This is the part of politeness that is
// not vocabulary but padding: French says the same thing as English, at greater
// length, and a learner who is too direct reads as rude without knowing why.
//
// Modelled as function-phrase vocab, examples carrying the contrast (CLAUDE.md).
// Every front checked against the live corpus. Conventions: see fr/unit1.js.
export const FR_UNIT80 = {
  id: "fr-u80",
  lang: "fr",
  title: "La politesse",
  order: 80,
  stage: "b1",
  lessons: [
    {
      id: "fr-u80l1",
      unit: 80,
      lesson: 1,
      title: "Asking without imposing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Make a request easy to refuse: je me permets de, je me demandais si, ce serait possible de.",
      items: [
        { id: "fr-u80l1-jemepermetsde", type: "vocab", front: "je me permets de", reading: "jemepermetsde", meaning: "I'm taking the liberty of", example: { jp: "Je me permets de vous écrire parce que j'ai vu votre site.", en: "I'm taking the liberty of writing to you because I saw your website." }, drill: { jp: "Je me permets de vous écrire", en: "I am taking the liberty of writing to you" }, accept: ["may i", "if i may", "i take the liberty"], hint: "The standard opening of a cold email in French. From permettre (Unit 77)." },
        { id: "fr-u80l1-jemedemandaissi", type: "vocab", front: "je me demandais si", reading: "jemedemandaissi", meaning: "I was wondering whether", example: { jp: "Je me demandais si vous étiez libre cette semaine.", en: "I was wondering whether you were free this week." }, accept: ["i wondered if", "i was wondering if"], hint: "The imperfect does the softening — je me demande si is a real question, je me demandais si is a polite approach." },
        { id: "fr-u80l1-ceseraitpossiblede", type: "vocab", front: "ce serait possible de", reading: "ceseraitpossiblede", meaning: "would it be possible to", example: { jp: "Ce serait possible de changer la date ? Je comprends si ce n'est pas simple.", en: "Would it be possible to change the date? I understand if it isn't easy." }, accept: ["could we", "is there any chance"], hint: "Note the trailing « Je comprends si ce n'est pas simple » — softening the ask by acknowledging it might not be easy is the French politeness move." },
        { id: "fr-u80l1-auriezvous", type: "vocab", front: "auriez-vous", reading: "auriezvous", meaning: "would you have", example: { jp: "Auriez-vous cinq minutes cette semaine ?", en: "Would you have five minutes this week?" }, accept: ["do you have (polite)", "might you have"], hint: "The conditional of avoir, inverted — the same two moves as pourriez-vous (Unit 79)." },
        { id: "fr-u80l1-nhesitezpasa", type: "vocab", front: "n'hésitez pas à", reading: "nhesitezpasa", meaning: "feel free to", example: { jp: "N'hésitez pas à m'écrire si vous avez une question.", en: "Feel free to write to me if you have a question." }, drill: { jp: "N'hésitez pas à m'écrire", en: "Feel free to write to me" }, accept: ["don't hesitate to", "do feel free to"], hint: "Closes almost every professional French email. Literally \"don't hesitate to\"." },
        { id: "fr-u80l1-jevousseraisreconnaissant", type: "vocab", front: "je vous serais reconnaissant", reading: "jevousseraisreconnaissant", meaning: "I would be grateful", example: { jp: "Je vous serais reconnaissant de me répondre avant vendredi.", en: "I would be grateful if you would reply to me before Friday." }, accept: ["i'd be grateful", "i would appreciate"], hint: "The heaviest polite request in normal use. de bien vouloir adds another cushion on top." },
      ],
    },
    {
      id: "fr-u80l2",
      unit: 80,
      lesson: 2,
      title: "Bad news, gently",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Deliver a refusal or a correction without offence: je crains que, il me semble que, sauf erreur.",
      items: [
        { id: "fr-u80l2-jecrainsque", type: "vocab", front: "je crains que", reading: "jecrainsque", meaning: "I'm afraid that", example: { jp: "Je crains que ce ne soit pas possible cette semaine.", en: "I'm afraid that isn't possible this week." }, accept: ["i fear that", "unfortunately", "i'm afraid"], hint: "Takes the subjunctive, and often a ne that means nothing at all — the famous ne explétif." },
        { id: "fr-u80l2-ilmesembleque", type: "vocab", front: "il me semble que", reading: "ilmesembleque", meaning: "it seems to me that", example: { jp: "Il me semble que la date n'est pas bonne, mais je peux avoir tort.", en: "It seems to me that the date isn't right, but I may be wrong." }, accept: ["i think that", "i believe", "to my mind"], hint: "How you correct someone without saying they're wrong. The trailing « mais je peux avoir tort » is part of the move." },
        { id: "fr-u80l2-sauferreur", type: "vocab", front: "sauf erreur", reading: "sauferreur", meaning: "unless I'm mistaken", example: { jp: "Sauf erreur de ma part, votre réponse n'est pas encore arrivée.", en: "Unless I'm mistaken, your reply hasn't arrived yet." }, accept: ["if i'm not mistaken", "correct me if i'm wrong"], hint: "Full form: sauf erreur de ma part. Lets you raise a problem while leaving the other person a way out." },
        { id: "fr-u80l2-malheureusement2", type: "vocab", front: "je suis au regret de", reading: "jesuisauregretde", meaning: "I regret to", example: { jp: "Je suis au regret de vous dire que ce n'est pas possible.", en: "I regret to tell you that it isn't possible." }, drill: { jp: "Je suis au regret de vous dire non", en: "I regret to tell you no" }, accept: ["it is with regret", "i must regretfully"], hint: "The formal refusal. If a French letter opens like this, the answer is no." },
        { id: "fr-u80l2-jetiensa", type: "vocab", front: "je tiens à", reading: "jetiensa", meaning: "I'd like to (insist)", example: { jp: "Je tiens à vous remercier pour votre patience.", en: "I'd particularly like to thank you for your patience." }, accept: ["i want to", "i insist on", "i'm keen to"], hint: "Stronger than je voudrais — it signals that saying this matters to you." },
        { id: "fr-u80l2-cestdommage", type: "vocab", front: "c'est dommage", reading: "cestdommage", meaning: "that's a shame", example: { jp: "C'est dommage que tu ne puisses pas venir, tout le monde voulait te voir.", en: "It's a shame you can't come, everybody wanted to see you." }, accept: ["that's a pity", "too bad", "what a shame"], hint: "c'est dommage QUE takes the subjunctive — puisses, not peux." },
      ],
    },
    {
      id: "fr-u80l3",
      unit: 80,
      lesson: 3,
      title: "Saying yes warmly",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Accept an offer with the right warmth: volontiers, avec plaisir, ravi de vous rencontrer.",
      items: [
        { id: "fr-u80l3-volontiers", type: "vocab", front: "volontiers", reading: "volontiers", meaning: "gladly", example: { jp: "— Un café ? — Volontiers, merci.", en: "— A coffee? — Gladly, thank you." }, accept: ["i'd love to", "willingly", "happy to"], hint: "The natural one-word yes to an offer. Oui alone can sound flat." },
        { id: "fr-u80l3-avecplaisir", type: "vocab", front: "avec plaisir", reading: "avecplaisir", meaning: "with pleasure", example: { jp: "Je viendrai avec plaisir, à condition que je finisse mon travail à temps.", en: "I'll come with pleasure, provided I finish my work in time." }, accept: ["my pleasure", "happily", "delighted to"] },
        { id: "fr-u80l3-ravidevousrencontrer", type: "vocab", front: "ravi de vous rencontrer", reading: "ravidevousrencontrer", meaning: "delighted to meet you", example: { jp: "Ravi de vous rencontrer, on m'a beaucoup parlé de vous.", en: "Delighted to meet you, I've heard a lot about you." }, accept: ["pleased to meet you", "nice to meet you"], hint: "A step up from enchanté (Unit 10), and safer in a professional setting." },
        { id: "fr-u80l3-bonnereception", type: "vocab", front: "bonne réception", reading: "bonnereception", meaning: "hope this reaches you well", example: { jp: "Vous trouverez le fichier avec ce message. Bonne réception.", en: "You'll find the file with this message. Hope it reaches you safely." }, drill: { jp: "Je vous souhaite bonne réception", en: "I hope this reaches you well" }, accept: ["hope it arrives safely", "hope you receive it"], hint: "Email-only, and untranslatable — it just means \"I hope this arrives\". French email has dozens of these." },
        { id: "fr-u80l3-cherscollegues", type: "vocab", front: "chers collègues", reading: "cherscollegues", meaning: "dear colleagues", example: { jp: "Chers collègues, je vous écris pour la réunion de jeudi.", en: "Dear colleagues, I'm writing to you about Thursday's meeting." }, accept: ["dear all", "dear team"], hint: "cher + the group. Unlike Madame, Monsieur (Unit 79), cher assumes you already know them." },
        { id: "fr-u80l3-jevousenprie", type: "vocab", front: "je vous en prie", reading: "jevousenprie", meaning: "you're welcome", example: { jp: "— Merci beaucoup. — Je vous en prie, avec plaisir.", en: "— Thank you very much. — You're welcome, my pleasure." }, accept: ["not at all", "please do", "don't mention it"], hint: "Two jobs: the formal de rien (Unit 1), and \"please, go ahead\" when you hold a door." },
      ],
    },
    {
      id: "fr-u80l4",
      unit: 80,
      lesson: 4,
      title: "Interrupting and apologising",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Interrupt someone properly: excusez-moi de vous déranger, je suis désolé de, bref.",
      items: [
        { id: "fr-u80l4-excusezmoidevousderanger", type: "vocab", front: "excusez-moi de vous déranger", reading: "excusezmoidevousderanger", meaning: "sorry to bother you", example: { jp: "Excusez-moi de vous déranger, auriez-vous deux minutes ?", en: "Sorry to bother you, would you have two minutes?" }, accept: ["sorry to disturb you", "pardon the interruption"], hint: "The full opening. Dropping the de vous déranger makes it a plain excuse-me for squeezing past." },
        { id: "fr-u80l4-jesuisdesolede", type: "vocab", front: "je suis désolé de", reading: "jesuisdesolede", meaning: "I'm sorry to", example: { jp: "Je suis désolé de répondre si tard, j'étais en congé.", en: "I'm sorry to reply so late, I was on leave." }, accept: ["sorry for", "i apologise for", "i'm sorry about"], hint: "désolé DE + verb, désolé POUR + noun: désolé pour le retard." },
        { id: "fr-u80l4-bref", type: "vocab", front: "bref", reading: "bref", meaning: "anyway", example: { jp: "Bref, on a pris le bus et on est rentrés très tard.", en: "Anyway, we took the bus and got home very late." }, accept: ["in short", "to cut it short", "so anyway"], hint: "Cuts your own story short. Extremely common in speech, and fine in a casual email." },
        { id: "fr-u80l4-ben", type: "vocab", front: "ben", reading: "ben", meaning: "well…", example: { jp: "— Tu viens ? — Ben, je ne sais pas encore.", en: "— Are you coming? — Well, I don't know yet." }, accept: ["well", "um", "er"], hint: "A spoken filler, spelled ben and pronounced like bain. You'll hear it constantly; never write it formally." },
        { id: "fr-u80l4-genre", type: "vocab", front: "genre", reading: "genre", meaning: "like", example: { jp: "Il est arrivé genre deux heures plus tard, sans rien dire.", en: "He turned up like two hours later, without saying anything." }, accept: ["sort of", "kind of", "about"], hint: "The casual filler, same job as English \"like\". As a noun le genre means kind or gender." },
        { id: "fr-u80l4-jevousecoute", type: "vocab", front: "je vous écoute", reading: "jevousecoute", meaning: "I'm listening", example: { jp: "Asseyez-vous, je vous écoute.", en: "Have a seat, I'm listening." }, accept: ["go ahead", "i'm all ears", "tell me"], hint: "What a professional says to open a meeting — and what a shopkeeper says instead of \"can I help you\"." },
      ],
    },
  ],
};
