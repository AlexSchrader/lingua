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
        { id: "fr-u132l2-toutcomptefait", type: "vocab", front: "tout compte fait", reading: "toutcomptefait", meaning: "all things considered", example: { jp: "Tout compte fait, c'est à toi de décider.", en: "All things considered, it's up to you to decide." }, accept: ["all things considered", "all in all", "when all is said and done", "in the end"], hint: "After weighing everything up. A fixed phrase — literally 'all accounting done'." },
        { id: "fr-u132l2-quiplusest", type: "vocab", front: "qui plus est", reading: "quiplusest", meaning: "what's more", example: { jp: "Ce détail n'a aucune importance ; qui plus est, personne ne l'a remarqué.", en: "This detail is of no importance; what's more, no one noticed it." }, accept: ["what's more", "moreover", "furthermore", "on top of that"], hint: "Adds a clinching extra point. A fixed phrase, always in this word order." },
        { id: "fr-u132l2-celadit", type: "vocab", front: "cela dit", reading: "celadit", meaning: "that said", example: { jp: "Ce roman est un peu long ; cela dit, il est très bien écrit.", en: "This novel is a little long; that said, it's very well written." }, accept: ["that said", "having said that", "even so", "all the same"], hint: "Grants what came before, then qualifies it. Also ceci dit." },
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
        { id: "fr-u132l3-pourautantque", type: "vocab", front: "pour autant que", reading: "pourautantque", meaning: "as far as", example: { jp: "Pour autant que je sache, la réunion est maintenue.", en: "As far as I know, the meeting is still on." }, accept: ["as far as", "insofar as", "to the extent that"], hint: "Limits a claim to what you actually know. Takes the subjunctive: pour autant que je sache." },
        { id: "fr-u132l3-quoiquilensoit", type: "vocab", front: "quoi qu'il en soit", reading: "quoiquilensoit", meaning: "in any case", example: { jp: "Quoi qu'il en soit, il faudra bien prendre une décision.", en: "In any case, a decision will have to be made." }, accept: ["in any case", "be that as it may", "whatever the case", "anyway"], hint: "Sets aside what was just said to move on. A fixed phrase, subjunctive soit." },
        { id: "fr-u132l3-sicenestque", type: "vocab", front: "si ce n'est que", reading: "sicenestque", meaning: "except that", example: { jp: "C'est le même modèle, si ce n'est qu'il est plus léger.", en: "It's the same model, except that it's lighter." }, accept: ["except that", "apart from the fact that", "save that", "other than that"], hint: "Introduces the one exception. si ce n'est = if not, except." },
        { id: "fr-u132l3-souspretexteque", type: "vocab", front: "sous prétexte que", reading: "souspretexteque", meaning: "on the pretext that", example: { jp: "Il est parti sous prétexte qu'il était fatigué.", en: "He left on the pretext that he was tired." }, accept: ["on the pretext that", "under the pretext that", "on the excuse that"], hint: "Marks a reason you doubt is the real one. From le prétexte." },
        { id: "fr-u132l3-deslinstantque", type: "vocab", front: "dès l'instant que", reading: "deslinstantque", meaning: "the moment that", example: { jp: "Dès l'instant qu'il a accepté, tout est devenu plus simple.", en: "The moment he agreed, everything became simpler." }, accept: ["the moment that", "as soon as", "once", "from the moment"], hint: "Marks the point something becomes true. Close to dès que, a touch more emphatic." },
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
        { id: "fr-u132l4-parsuite", type: "vocab", front: "par suite", reading: "parsuite", meaning: "consequently", example: { jp: "La route était fermée ; par suite, nous sommes arrivés en retard.", en: "The road was closed; consequently, we arrived late." }, accept: ["consequently", "as a result", "therefore", "accordingly"], hint: "Marks a result. par suite de = owing to, as a result of." },
        { id: "fr-u132l4-dautantque", type: "vocab", front: "d'autant que", reading: "dautantque", meaning: "especially as", example: { jp: "Il faut partir tôt, d'autant que la route est longue.", en: "We should leave early, especially as the road is long." }, accept: ["especially as", "all the more so as", "particularly since"], hint: "Adds a reinforcing reason. d'autant plus que is even stronger." },
        { id: "fr-u132l4-amesureque", type: "vocab", front: "à mesure que", reading: "amesureque", meaning: "as", example: { jp: "À mesure que le temps passe, on oublie les détails.", en: "As time goes by, you forget the details." }, accept: ["as", "the more... the more", "in step with", "as gradually"], hint: "Two things changing together, step by step. Also au fur et à mesure que." },
        { id: "fr-u132l4-dememeque", type: "vocab", front: "de même que", reading: "dememeque", meaning: "just as", example: { jp: "De même que l'été suit le printemps, la nuit suit le jour.", en: "Just as summer follows spring, night follows day." }, accept: ["just as", "in the same way as", "like"], hint: "Draws a parallel between two cases. Opens the sentence." },
        { id: "fr-u132l4-tantetsibienque", type: "vocab", front: "tant et si bien que", reading: "tantetsibienque", meaning: "so much so that", example: { jp: "Il a insisté, tant et si bien que j'ai fini par accepter.", en: "He insisted, so much so that I ended up agreeing." }, accept: ["so much so that", "with the result that", "to the point that"], hint: "Piles up an effort until it produces a result. A fixed phrase." },
      ],
    },
  ],
};
