// FR Unit 83 — Vocabulary 3 (B1) (slot: coverage-b1-3) — B1
// Last unit of block 2. Closes the frequency gaps the first two coverage units
// left: the vocabulary of strain and of talk (both of which A2 could only gesture
// at), a set of general-purpose adjectives, and the money words Unit 73 could not
// fit. Every front checked against the live corpus.
//
// SCOPE BOUNDARY: block 1's Unit 64 is "emotion, finer shades", so Lesson 1 takes
// PRESSURE and RELIEF as situations rather than feelings — la pression, le délai,
// le malentendu — and leaves the emotion words themselves to 64.
// Conventions: see fr/unit1.js.
export const FR_UNIT83 = {
  id: "fr-u83",
  lang: "fr",
  title: "Encore des mots",
  order: 83,
  stage: "b1",
  lessons: [
    {
      id: "fr-u83l1",
      unit: 83,
      lesson: 1,
      title: "Under pressure",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe strain and the release of it: la pression, un souci, la tension, le soulagement.",
      items: [
        { id: "fr-u83l1-lapression", type: "vocab", front: "la pression", reading: "lapression", meaning: "the pressure", example: { jp: "Il y a beaucoup de pression au travail en ce moment, si bien que tout le monde est fatigué.", en: "There's a lot of pressure at work at the moment, so everyone is tired." }, accept: ["pressure", "the stress", "strain"], hint: "Also a draught beer: une pression, s'il vous plaît." },
        { id: "fr-u83l1-lesouci", type: "vocab", front: "le souci", reading: "lesouci", meaning: "the worry", example: { jp: "Ce n'est pas un gros souci, on peut le régler en deux minutes.", en: "It isn't a big worry, we can sort it out in two minutes." }, accept: ["worry", "the concern", "problem"], hint: "Pas de souci ! is the everyday \"no problem\" — you'll hear it constantly." },
        { id: "fr-u83l1-linquietude", type: "vocab", front: "l'inquiétude", reading: "linquietude", meaning: "the anxiety", example: { jp: "Son inquiétude est compréhensible, étant donné qu'il attend les résultats.", en: "His anxiety is understandable, given that he's waiting for the results." }, accept: ["anxiety", "worry", "the concern"] },
        { id: "fr-u83l1-latension", type: "vocab", front: "la tension", reading: "latension", meaning: "the tension", example: { jp: "La tension est montée pendant la réunion, puis tout le monde s'est calmé.", en: "Tension rose during the meeting, then everyone calmed down." }, accept: ["tension", "the strain", "blood pressure"], hint: "Also blood pressure at the doctor's: prendre la tension." },
        { id: "fr-u83l1-lesoulagement", type: "vocab", front: "le soulagement", reading: "lesoulagement", meaning: "the relief", example: { jp: "Quel soulagement ! Je croyais avoir perdu tous mes documents.", en: "What a relief! I thought I'd lost all my documents." }, accept: ["relief", "the comfort"] },
        { id: "fr-u83l1-lemalentendu", type: "vocab", front: "le malentendu", reading: "lemalentendu", meaning: "the misunderstanding", example: { jp: "C'était un malentendu, personne n'avait l'intention de vexer qui que ce soit.", en: "It was a misunderstanding, nobody meant to offend anyone." }, accept: ["misunderstanding", "the mix-up"], hint: "Literally \"badly heard\" — mal + entendu. The structure tells you the meaning." },
      ],
    },
    {
      id: "fr-u83l2",
      unit: 83,
      lesson: 2,
      title: "Speech and silence",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about talking: la parole, le silence, un geste, l'écoute, un désaccord.",
      items: [
        { id: "fr-u83l2-laparole", type: "vocab", front: "la parole", reading: "laparole", meaning: "the spoken word", example: { jp: "Il a pris la parole en dernier, et tout le monde l'a écouté.", en: "He spoke last, and everybody listened to him." }, accept: ["speech", "the floor", "word"], hint: "prendre la parole = to take the floor. Les paroles, plural, are song lyrics." },
        { id: "fr-u83l2-lesilence", type: "vocab", front: "le silence", reading: "lesilence", meaning: "the silence", example: { jp: "Après cette question, il y a eu un long silence dans la salle.", en: "After that question, there was a long silence in the room." }, accept: ["silence", "the quiet", "hush"] },
        { id: "fr-u83l2-legeste", type: "vocab", front: "le geste", reading: "legeste", meaning: "the gesture", example: { jp: "C'était un beau geste de sa part, surtout qu'il ne nous connaissait pas.", en: "It was a kind gesture on his part, especially as he didn't know us." }, accept: ["gesture", "the movement", "act"], hint: "Both a movement of the hand and a kind act — exactly like English." },
        { id: "fr-u83l2-lecoute", type: "vocab", front: "l'écoute", reading: "lecoute", meaning: "listening", example: { jp: "L'écoute est la qualité la plus importante chez un ami.", en: "Listening is the most important quality in a friend." }, accept: ["the listening", "attention"], hint: "être à l'écoute = to be attentive to someone. From écouter (Unit 9)." },
        { id: "fr-u83l2-ledesaccord", type: "vocab", front: "le désaccord", reading: "ledesaccord", meaning: "the disagreement", example: { jp: "Il y a un désaccord entre les deux équipes, mais rien de grave.", en: "There's a disagreement between the two teams, but nothing serious." }, accept: ["disagreement", "the dispute", "difference"], hint: "The opposite of d'accord (Unit 2) — dés- reverses it, as in English dis-." },
        { id: "fr-u83l2-ladispute", type: "vocab", front: "la dispute", reading: "ladispute", meaning: "the argument", example: { jp: "La dispute a duré dix minutes, puis ils se sont réconciliés.", en: "The argument lasted ten minutes, then they made up." }, accept: ["argument", "the quarrel", "row"], hint: "The noun of se disputer (Unit 75). Careful: it's a row, not a debate." },
      ],
    },
    {
      id: "fr-u83l3",
      unit: 83,
      lesson: 3,
      title: "Judging things",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Assess something in one word: efficace, essentiel, complexe, correct, récent, actuel.",
      items: [
        { id: "fr-u83l3-efficace", type: "vocab", front: "efficace", reading: "efficace", meaning: "effective", example: { jp: "Cette méthode est efficace, bien qu'elle demande beaucoup de temps.", en: "This method is effective, although it takes a lot of time." }, accept: ["efficient", "successful"] },
        { id: "fr-u83l3-essentiel", type: "vocab", front: "essentiel", reading: "essentiel", meaning: "essential", example: { jp: "L'essentiel est de commencer, le reste viendra tout seul.", en: "The essential thing is to start, the rest will come by itself." }, accept: ["key", "crucial", "the main thing"], hint: "As a noun, l'essentiel = the main point." },
        { id: "fr-u83l3-complexe", type: "vocab", front: "complexe", reading: "complexe", meaning: "complex", example: { jp: "La procédure est complexe, si bien que beaucoup de gens abandonnent.", en: "The procedure is complex, so a lot of people give up." }, accept: ["complicated", "intricate"] },
        { id: "fr-u83l3-correct", type: "vocab", front: "correct", reading: "correct", meaning: "correct", example: { jp: "Sa réponse est correcte, mais elle n'est pas complète.", en: "His answer is correct, but it isn't complete." }, accept: ["right", "accurate", "decent"], hint: "Of a person, correct means decent or fair rather than \"right\"." },
        { id: "fr-u83l3-recent", type: "vocab", front: "récent", reading: "recent", meaning: "recent", example: { jp: "D'après une étude récente, le chômage baisse dans toute la région.", en: "According to a recent study, unemployment is falling across the whole region." }, accept: ["new", "latest"] },
        { id: "fr-u83l3-actuel", type: "vocab", front: "actuel", reading: "actuel", meaning: "current", example: { jp: "La situation actuelle est difficile, mais elle va s'améliorer.", en: "The current situation is difficult, but it's going to improve." }, accept: ["present", "present-day", "today's"], hint: "False friend: actuel means CURRENT, not \"actual\". actuellement = currently, not \"actually\"." },
      ],
    },
    {
      id: "fr-u83l4",
      unit: 83,
      lesson: 4,
      title: "Costs and totals",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read a bill or a balance sheet: le coût, la taxe, la dette, le bénéfice, la perte.",
      items: [
        { id: "fr-u83l4-lecout", type: "vocab", front: "le coût", reading: "lecout", meaning: "the cost", example: { jp: "Le coût de la vie a beaucoup augmenté, ce qui explique les manifestations.", en: "The cost of living has risen a lot, which explains the protests." }, accept: ["cost", "the expense"], hint: "The noun of coûter (Unit 34). le coût de la vie = the cost of living." },
        { id: "fr-u83l4-lataxe", type: "vocab", front: "la taxe", reading: "lataxe", meaning: "the tax", example: { jp: "Il y a une taxe sur ce produit, donc le prix affiché n'est pas le prix final.", en: "There's a tax on this product, so the displayed price isn't the final price." }, accept: ["tax", "the duty", "levy"], hint: "A tax on a THING; l'impôt (Unit 73) is a tax on a person's income." },
        { id: "fr-u83l4-ladette", type: "vocab", front: "la dette", reading: "ladette", meaning: "the debt", example: { jp: "Il a remboursé toutes ses dettes, si bien qu'il peut enfin épargner.", en: "He paid off all his debts, so he can finally save." }, accept: ["debt", "the borrowing"] },
        { id: "fr-u83l4-lebenefice", type: "vocab", front: "le bénéfice", reading: "lebenefice", meaning: "the profit", example: { jp: "L'entreprise a fait un bénéfice cette année, pour la première fois depuis longtemps.", en: "The company made a profit this year, for the first time in a long while." }, accept: ["profit", "the gain", "benefit"] },
        { id: "fr-u83l4-laperte", type: "vocab", front: "la perte", reading: "laperte", meaning: "the loss", example: { jp: "La perte a été énorme, mais l'assurance a payé une partie.", en: "The loss was enormous, but the insurance paid part of it." }, accept: ["loss", "the waste"], hint: "From perdre. une perte de temps = a waste of time." },
        { id: "fr-u83l4-leclassement", type: "vocab", front: "le classement", reading: "leclassement", meaning: "the ranking", example: { jp: "Cette université est première au classement, pourtant elle reste peu connue.", en: "This university is first in the ranking, yet it remains little known." }, accept: ["ranking", "the league table", "filing"], hint: "Also the act of filing papers away — le classement des dossiers." },
      ],
    },
  ],
};
