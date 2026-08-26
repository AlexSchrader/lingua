// FR Unit 132 — Les connecteurs du français soutenu ("Connectors of formal French") — B2
// Strand D, coverage unit 12 of 13 (block 3, units 121-133). Generic slot
// "Vocabulary 15 (B2)"; given a real theme — DEVIATION FROM THE SLOT NAME ONLY.
//
// ONE LEVEL ABOVE THE SLOT: B1 units 58/59 already teach the everyday connectors
// (néanmoins, cependant, toutefois, en revanche, par conséquent, certes, pourtant,
// donc, en effet). This unit authors the FORMAL / WRITTEN connectors a B2 speaker
// meets in essays, news, and speeches — par ailleurs, en outre, or, dès lors.
// GRAMMAR-AS-VOCAB: there is no grammar item type, so each connector is a vocab
// item whose two-clause example carries the pattern. Every front checked against
// the 2,168 fronts and the sibling B2 blocks. Conventions: see fr/unit1.js.
export const FR_UNIT132 = {
  id: "fr-u132",
  lang: "fr",
  title: "Les connecteurs du français soutenu",
  order: 132,
  stage: "b2",
  lessons: [
    {
      id: "fr-u132l1",
      unit: 132,
      lesson: 1,
      title: "Adding a point",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Add to what you said: par ailleurs, en outre, de surcroît, d'ailleurs, non seulement, ainsi que.",
      items: [
        { id: "fr-u132l1-parailleurs", type: "vocab", front: "par ailleurs", reading: "parailleurs", meaning: "moreover", example: { jp: "Le projet coûte cher ; par ailleurs, il prendra des années.", en: "The project is expensive; moreover, it will take years." }, accept: ["moreover", "furthermore", "besides", "in addition", "also"], hint: "Adds a separate point on the same topic. Common in writing." },
        { id: "fr-u132l1-enoutre", type: "vocab", front: "en outre", reading: "enoutre", meaning: "furthermore", example: { jp: "Il parle trois langues ; en outre, il a vécu sur trois continents.", en: "He speaks three languages; furthermore, he has lived on three continents." }, accept: ["furthermore", "moreover", "in addition", "besides"], hint: "A formal 'in addition'. From outre, beyond." },
        { id: "fr-u132l1-desurcroit", type: "vocab", front: "de surcroît", reading: "desurcroit", meaning: "on top of that", example: { jp: "La chambre est petite et, de surcroît, elle donne sur la rue.", en: "The room is small and, on top of that, it faces the street." }, accept: ["on top of that", "moreover", "what's more", "into the bargain"], hint: "Adds a final, often unwelcome, extra. From le surcroît, an excess." },
        { id: "fr-u132l1-dailleurs", type: "vocab", front: "d'ailleurs", reading: "dailleurs", meaning: "besides", example: { jp: "Je n'ai pas faim ; d'ailleurs, j'ai déjà mangé.", en: "I'm not hungry; besides, I've already eaten." }, accept: ["besides", "moreover", "and anyway", "incidentally"], hint: "Adds a confirming aside, often clinching the point. Not ailleurs (elsewhere)." },
        { id: "fr-u132l1-nonseulement", type: "vocab", front: "non seulement", reading: "nonseulement", meaning: "not only", example: { jp: "Non seulement il est venu, mais il a aidé toute la journée.", en: "Not only did he come, but he helped all day." }, accept: ["not only", "not just"], hint: "Pairs with mais (aussi): non seulement… mais aussi…" },
        { id: "fr-u132l1-ainsique", type: "vocab", front: "ainsi que", reading: "ainsique", meaning: "as well as", example: { jp: "Les parents, ainsi que les enfants, sont invités à la fête.", en: "The parents, as well as the children, are invited to the party." }, accept: ["as well as", "along with", "just as", "and"], hint: "Links two things on equal footing. Also 'just as': ainsi que je le disais." },
      ],
    },
    {
      id: "fr-u132l2",
      unit: 132,
      lesson: 2,
      title: "Restating and summing up",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Rephrase or conclude: à savoir, autrement dit, en somme, en définitive, du reste, au demeurant.",
      items: [
        { id: "fr-u132l2-asavoir", type: "vocab", front: "à savoir", reading: "asavoir", meaning: "namely", example: { jp: "Il manque une chose, à savoir une vraie preuve.", en: "One thing is missing, namely a real piece of evidence." }, accept: ["namely", "that is", "specifically", "i.e."], hint: "Introduces the exact thing you mean. Precedes a precise item." },
        { id: "fr-u132l2-autrementdit", type: "vocab", front: "autrement dit", reading: "autrementdit", meaning: "in other words", example: { jp: "Il n'a pas répondu ; autrement dit, c'est non.", en: "He didn't answer; in other words, it's a no." }, accept: ["in other words", "put another way", "that is to say"], hint: "Rephrases what came before more plainly." },
        { id: "fr-u132l2-ensomme", type: "vocab", front: "en somme", reading: "ensomme", meaning: "in short", example: { jp: "En somme, tout s'est bien passé malgré la pluie.", en: "In short, everything went well despite the rain." }, accept: ["in short", "all in all", "to sum up", "basically"], hint: "Wraps up a list or a story into one line. From la somme, the sum." },
        { id: "fr-u132l2-endefinitive", type: "vocab", front: "en définitive", reading: "endefinitive", meaning: "ultimately", example: { jp: "En définitive, c'est à toi de décider.", en: "Ultimately, it's up to you to decide." }, accept: ["ultimately", "in the end", "when all is said and done", "after all"], hint: "States the final upshot after weighing things up." },
        { id: "fr-u132l2-dureste", type: "vocab", front: "du reste", reading: "dureste", meaning: "for that matter", example: { jp: "Ce détail n'a, du reste, aucune importance.", en: "This detail is, besides, of no importance." }, accept: ["besides", "moreover", "for that matter", "incidentally"], hint: "Adds an aside, close to d'ailleurs but more literary. From le reste." },
        { id: "fr-u132l2-audemeurant", type: "vocab", front: "au demeurant", reading: "audemeurant", meaning: "for all that", example: { jp: "Ce roman, au demeurant très bien écrit, m'a paru trop long.", en: "This novel, very well written for all that, seemed too long to me." }, accept: ["for all that", "moreover", "incidentally", "all the same"], hint: "Adds a fair-minded qualification. Quite formal." },
      ],
    },
    {
      id: "fr-u132l3",
      unit: 132,
      lesson: 3,
      title: "Conceding and supposing",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Grant or condition a point: encore que, pour peu que, quoi qu'il en soit, à ceci près que, sous prétexte que, faute de quoi.",
      items: [
        { id: "fr-u132l3-encoreque", type: "vocab", front: "encore que", reading: "encoreque", meaning: "although", example: { jp: "Le plan est bon, encore qu'il coûte un peu cher.", en: "The plan is good, although it's a little expensive." }, accept: ["although", "even though", "and yet", "mind you"], hint: "Adds an afterthought reservation. Often takes the subjunctive." },
        { id: "fr-u132l3-pourpeuque", type: "vocab", front: "pour peu que", reading: "pourpeuque", meaning: "if only", example: { jp: "Pour peu qu'il fasse beau, la fête sera réussie.", en: "As long as the weather's nice, the party will be a success." }, accept: ["if only", "as long as", "provided that", "given the slightest"], hint: "'If even a little…'. Takes the subjunctive: pour peu qu'il vienne." },
        { id: "fr-u132l3-quoiquilensoit", type: "vocab", front: "quoi qu'il en soit", reading: "quoiquilensoit", meaning: "in any case", example: { jp: "Quoi qu'il en soit, il faudra bien prendre une décision.", en: "In any case, a decision will have to be made." }, accept: ["in any case", "be that as it may", "whatever the case", "anyway"], hint: "Sets aside what was just said to move on. A fixed phrase, subjunctive soit." },
        { id: "fr-u132l3-acecipresque", type: "vocab", front: "à ceci près que", reading: "acecipresque", meaning: "except that", example: { jp: "C'est le même modèle, à ceci près qu'il est plus léger.", en: "It's the same model, except that it's lighter." }, accept: ["except that", "with the difference that", "save that"], hint: "Introduces the one small difference. From près, near/close." },
        { id: "fr-u132l3-souspretexteque", type: "vocab", front: "sous prétexte que", reading: "souspretexteque", meaning: "on the pretext that", example: { jp: "Il est parti sous prétexte qu'il était fatigué.", en: "He left on the pretext that he was tired." }, accept: ["on the pretext that", "under the pretext that", "on the excuse that"], hint: "Marks a reason you doubt is the real one. From le prétexte." },
        { id: "fr-u132l3-fautedequoi", type: "vocab", front: "faute de quoi", reading: "fautedequoi", meaning: "failing which", example: { jp: "Il faut réserver aujourd'hui, faute de quoi les places seront prises.", en: "You must book today, failing which the seats will be taken." }, accept: ["failing which", "otherwise", "or else"], hint: "States what happens if the condition isn't met. From la faute, lack." },
      ],
    },
    {
      id: "fr-u132l4",
      unit: 132,
      lesson: 4,
      title: "Cause, consequence, degree",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Link reason and result: or, dès lors, d'autant que, à mesure que, de même que, tant et si bien que.",
      items: [
        { id: "fr-u132l4-or", type: "vocab", front: "or", reading: "or", meaning: "now", example: { jp: "Il pensait avoir raison ; or, les faits lui ont donné tort.", en: "He thought he was right; now, the facts proved him wrong." }, accept: ["now", "yet", "and yet", "but"], hint: "Introduces a decisive new fact that turns the argument. Not l'or, gold." },
        { id: "fr-u132l4-deslors", type: "vocab", front: "dès lors", reading: "deslors", meaning: "from then on", example: { jp: "Il a compris son erreur ; dès lors, il a tout changé.", en: "He understood his mistake; from then on, he changed everything." }, accept: ["from then on", "consequently", "therefore", "thereafter"], hint: "'From that point'. dès lors que = given that, once." },
        { id: "fr-u132l4-dautantque", type: "vocab", front: "d'autant que", reading: "dautantque", meaning: "especially as", example: { jp: "Il faut partir tôt, d'autant que la route est longue.", en: "We should leave early, especially as the road is long." }, accept: ["especially as", "all the more so as", "particularly since"], hint: "Adds a reinforcing reason. d'autant plus que is even stronger." },
        { id: "fr-u132l4-amesureque", type: "vocab", front: "à mesure que", reading: "amesureque", meaning: "as", example: { jp: "À mesure que le temps passe, on oublie les détails.", en: "As time goes by, you forget the details." }, accept: ["as", "the more... the more", "in step with", "as gradually"], hint: "Two things changing together, step by step. Also au fur et à mesure que." },
        { id: "fr-u132l4-dememeque", type: "vocab", front: "de même que", reading: "dememeque", meaning: "just as", example: { jp: "De même que l'été suit le printemps, la nuit suit le jour.", en: "Just as summer follows spring, night follows day." }, accept: ["just as", "in the same way as", "like"], hint: "Draws a parallel between two cases. Opens the sentence." },
        { id: "fr-u132l4-tantetsibienque", type: "vocab", front: "tant et si bien que", reading: "tantetsibienque", meaning: "so much so that", example: { jp: "Il a insisté, tant et si bien que j'ai fini par accepter.", en: "He insisted, so much so that I ended up agreeing." }, accept: ["so much so that", "with the result that", "to the point that"], hint: "Piles up an effort until it produces a result. A fixed phrase." },
      ],
    },
  ],
};
