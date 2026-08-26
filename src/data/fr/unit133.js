// FR Unit 133 — Locutions du registre soutenu ("Phrases of the formal register") — B2
// Strand D, coverage unit 13 of 13 — the LAST unit of French B2 (block 3, units
// 121-133). Generic slot "Vocabulary 16 (B2)"; given a real theme — DEVIATION
// FROM THE SLOT NAME ONLY.
//
// ONE LEVEL ABOVE THE SLOT: A2+B1 teach the everyday prepositional phrases (à
// cause de, grâce à, au lieu de, afin de, malgré, sans, pour, avant de) and B1
// unit 94 the idioms (avoir beau was NOT among them — checked). This closing unit
// authors the FIXED FORMAL LOCUTIONS a B2 reader meets constantly in written and
// administrative French — en vue de, à condition de, en vertu de, au détriment de.
// GRAMMAR-AS-VOCAB: each locution is a vocab item whose example carries the
// pattern. Every front checked against the 2,168 fronts and the sibling B2 blocks.
// Conventions: see fr/unit1.js.
export const FR_UNIT133 = {
  id: "fr-u133",
  lang: "fr",
  title: "Locutions du registre soutenu",
  order: 133,
  stage: "b2",
  lessons: [
    {
      id: "fr-u133l1",
      unit: 133,
      lesson: 1,
      title: "Aim and means",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State a purpose formally: de manière à, en vue de, dans le but de, histoire de, à même de, moyennant.",
      items: [
        { id: "fr-u133l1-demaniera", type: "vocab", front: "de manière à", reading: "demanierea", meaning: "so as to", example: { jp: "Parle lentement, de manière à ce que tout le monde comprenne.", en: "Speak slowly, so that everyone understands." }, accept: ["so as to", "in order to", "in such a way as to"], hint: "States the intended effect. Also de façon à. From la manière." },
        { id: "fr-u133l1-envuede", type: "vocab", front: "en vue de", reading: "envuede", meaning: "with a view to", example: { jp: "Il économise en vue de l'achat d'une maison.", en: "He's saving up with a view to buying a house." }, accept: ["with a view to", "in order to", "for the purpose of"], hint: "Working towards a future goal. Followed by a noun or an infinitive." },
        { id: "fr-u133l1-danslebutde", type: "vocab", front: "dans le but de", reading: "danslebutde", meaning: "with the aim of", example: { jp: "Elle a écrit ce livre dans le but d'aider les débutants.", en: "She wrote this book with the aim of helping beginners." }, accept: ["with the aim of", "in order to", "with the goal of"], hint: "States the goal directly. From le but, the aim." },
        { id: "fr-u133l1-histoirede", type: "vocab", front: "histoire de", reading: "histoirede", meaning: "just to", example: { jp: "On est sortis marcher, histoire de prendre l'air.", en: "We went out for a walk, just to get some fresh air." }, accept: ["just to", "so as to", "in order to"], hint: "A casual 'just to'. Softer and more spoken than dans le but de." },
        { id: "fr-u133l1-amemede", type: "vocab", front: "à même de", reading: "amemede", meaning: "able to", example: { jp: "Après cette formation, il est à même de gérer une équipe.", en: "After this training, he is able to manage a team." }, accept: ["able to", "in a position to", "capable of"], hint: "être à même de faire = to be in a position to do. Distinct from même." },
        { id: "fr-u133l1-moyennant", type: "vocab", front: "moyennant", reading: "moyennant", meaning: "in exchange for", example: { jp: "Il vous aidera, moyennant une petite somme.", en: "He'll help you, in exchange for a small sum." }, accept: ["in exchange for", "for", "in return for"], hint: "In return for something given. moyennant finance = for a fee. From moyen." },
      ],
    },
    {
      id: "fr-u133l2",
      unit: 133,
      lesson: 2,
      title: "Condition and concession",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Set a condition or grant a point: à condition de, à défaut de, faute de, avoir beau, quitte à, sans compter que.",
      items: [
        { id: "fr-u133l2-aconditionde", type: "vocab", front: "à condition de", reading: "aconditionde", meaning: "provided that", example: { jp: "Tu peux sortir, à condition de rentrer avant minuit.", en: "You can go out, provided that you come back before midnight." }, accept: ["provided that", "on condition that", "as long as", "so long as"], hint: "States the one thing that must hold. à condition que + subjunctive with a new subject." },
        { id: "fr-u133l2-adefautde", type: "vocab", front: "à défaut de", reading: "adefautde", meaning: "for lack of", example: { jp: "À défaut de café, on a bu du thé.", en: "For lack of coffee, we drank tea." }, accept: ["for lack of", "failing", "in the absence of", "if there's no"], hint: "Turning to a second choice because the first is missing. From le défaut, lack." },
        { id: "fr-u133l2-fautede", type: "vocab", front: "faute de", reading: "fautede", meaning: "for want of", example: { jp: "Faute de temps, il n'a pas pu tout finir.", en: "For want of time, he couldn't finish everything." }, accept: ["for want of", "for lack of", "due to a lack of"], hint: "Because something was missing. faute de mieux = for want of anything better." },
        { id: "fr-u133l2-avoirbeau", type: "vocab", front: "avoir beau", reading: "avoirbeau", meaning: "however much", example: { jp: "Il a beau essayer, il n'y arrive pas.", en: "However much he tries, he can't manage it." }, accept: ["however much", "no matter how", "try as one might", "in vain"], hint: "avoir beau + infinitive = to do something in vain. A very common concession." },
        { id: "fr-u133l2-quittea", type: "vocab", front: "quitte à", reading: "quittea", meaning: "even if it means", example: { jp: "Je dirai la vérité, quitte à le fâcher.", en: "I'll tell the truth, even if it means angering him." }, accept: ["even if it means", "at the risk of", "even at the cost of"], hint: "Accepting an unwelcome consequence. quitte à + infinitive." },
        { id: "fr-u133l2-sanscompterque", type: "vocab", front: "sans compter que", reading: "sanscompterque", meaning: "not to mention that", example: { jp: "Le trajet est long, sans compter qu'il faut changer deux fois.", en: "The journey is long, not to mention that you have to change twice." }, accept: ["not to mention that", "besides which", "and that's without counting that"], hint: "Adds a further weighty point. From compter, to count." },
      ],
    },
    {
      id: "fr-u133l3",
      unit: 133,
      lesson: 3,
      title: "Risk and caution",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Weigh risk and cost: au risque de, sous peine de, de crainte de, en dépit de, en contrepartie, sous couvert de.",
      items: [
        { id: "fr-u133l3-aurisquede", type: "vocab", front: "au risque de", reading: "aurisquede", meaning: "at the risk of", example: { jp: "Au risque de te déplaire, je ne suis pas d'accord.", en: "At the risk of displeasing you, I don't agree." }, accept: ["at the risk of", "even if it means", "running the risk of"], hint: "Accepting a possible bad outcome. From le risque." },
        { id: "fr-u133l3-souspeinede", type: "vocab", front: "sous peine de", reading: "souspeinede", meaning: "under penalty of", example: { jp: "Il faut payer avant lundi, sous peine d'une amende.", en: "You must pay before Monday, under penalty of a fine." }, accept: ["under penalty of", "on pain of", "or else face"], hint: "States the punishment for not complying. From la peine, the penalty." },
        { id: "fr-u133l3-decraintede", type: "vocab", front: "de crainte de", reading: "decraintede", meaning: "for fear of", example: { jp: "Il a parlé bas, de crainte de réveiller le bébé.", en: "He spoke quietly, for fear of waking the baby." }, accept: ["for fear of", "lest", "afraid of", "so as not to"], hint: "Acting to avoid a feared outcome. From la crainte. Also de peur de." },
        { id: "fr-u133l3-endepitde", type: "vocab", front: "en dépit de", reading: "endepitde", meaning: "in spite of", example: { jp: "En dépit de ses efforts, rien n'a changé.", en: "In spite of his efforts, nothing changed." }, accept: ["in spite of", "despite", "notwithstanding"], hint: "A formal malgré. From le dépit, spite/vexation." },
        { id: "fr-u133l3-encontrepartie", type: "vocab", front: "en contrepartie", reading: "encontrepartie", meaning: "in return", example: { jp: "Il fait le ménage ; en contrepartie, il ne paie pas de loyer.", en: "He does the cleaning; in return, he doesn't pay rent." }, accept: ["in return", "in exchange", "as a counterpart", "on the other hand"], hint: "The thing given back in a fair trade. From la contrepartie." },
        { id: "fr-u133l3-souscouvertde", type: "vocab", front: "sous couvert de", reading: "souscouvertde", meaning: "under the guise of", example: { jp: "Sous couvert d'humour, il dit des choses méchantes.", en: "Under the guise of humour, he says cruel things." }, accept: ["under the guise of", "under cover of", "in the name of"], hint: "Using one thing as a cover for another. From le couvert, cover." },
      ],
    },
    {
      id: "fr-u133l4",
      unit: 133,
      lesson: 4,
      title: "Regarding and within",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Frame scope and reference: à l'égard de, vis-à-vis de, au sein de, en vertu de, au détriment de, hormis.",
      items: [
        { id: "fr-u133l4-alegardde", type: "vocab", front: "à l'égard de", reading: "alegardde", meaning: "towards", example: { jp: "Il est très patient à l'égard des enfants.", en: "He is very patient towards children." }, accept: ["towards", "with regard to", "in respect of", "concerning"], hint: "How one behaves towards someone. From l'égard, regard/consideration." },
        { id: "fr-u133l4-visavisde", type: "vocab", front: "vis-à-vis de", reading: "visavisde", meaning: "in relation to", example: { jp: "Quelle est ta position vis-à-vis de ce projet ?", en: "What is your position in relation to this project?" }, accept: ["in relation to", "towards", "with respect to", "as regards"], hint: "Face to face with, figuratively. Written with two hyphens. From the old vis, face." },
        { id: "fr-u133l4-auseinde", type: "vocab", front: "au sein de", reading: "auseinde", meaning: "within", example: { jp: "Il y a des tensions au sein de l'équipe.", en: "There are tensions within the team." }, accept: ["within", "inside", "in the midst of", "at the heart of"], hint: "Inside a group or an organisation. From le sein, the bosom." },
        { id: "fr-u133l4-envertude", type: "vocab", front: "en vertu de", reading: "envertude", meaning: "under", example: { jp: "En vertu de la loi, chacun a droit à un avocat.", en: "Under the law, everyone has the right to a lawyer." }, accept: ["under", "by virtue of", "in accordance with", "pursuant to"], hint: "On the authority of a law or rule. From la vertu, here 'power/authority'." },
        { id: "fr-u133l4-audetrimentde", type: "vocab", front: "au détriment de", reading: "audetrimentde", meaning: "to the detriment of", example: { jp: "Il travaille beaucoup, au détriment de sa santé.", en: "He works a lot, to the detriment of his health." }, accept: ["to the detriment of", "at the expense of", "to the disadvantage of"], hint: "Harming one thing for the sake of another. From le détriment, harm." },
        { id: "fr-u133l4-hormis", type: "vocab", front: "hormis", reading: "hormis", meaning: "apart from", example: { jp: "Hormis quelques détails, tout est prêt.", en: "Apart from a few details, everything is ready." }, accept: ["apart from", "except for", "but for", "save"], hint: "A formal sauf or excepté. The 's' is pronounced: 'or-mi(ss)'." },
      ],
    },
  ],
};
