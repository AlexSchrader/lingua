// FR Unit 66 — Le changement dans le temps (slot: change over time) — B1
// SCOPE BOUNDARY: A2 already teaches changer, le changement, le progrès,
// augmenter, diminuer, devenir, peu à peu; the sibling blocks own disparaître, la
// croissance, le développement. This unit is the register above: verbs of
// gradual change (évoluer, se transformer, s'améliorer, empirer), sudden
// appearance/cessation (apparaître, surgir, survenir, cesser), literary time
// markers (désormais, autrefois, jadis, dorénavant) and the nouns of change
// (l'évolution, la hausse, le déclin, le processus). Fronts checked against the
// live 1,287 and the sibling B1 blocks. Conventions: fr/unit1.js.
export const FR_UNIT66 = {
  id: "fr-u66",
  lang: "fr",
  title: "Le changement dans le temps",
  order: 66,
  stage: "b1",
  lessons: [
    {
      id: "fr-u66l1",
      unit: 66,
      lesson: 1,
      title: "Growing and changing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe gradual change: évoluer, se transformer, se développer, s'améliorer.",
      items: [
        { id: "fr-u66l1-evoluer", type: "vocab", front: "évoluer", reading: "evoluer", meaning: "to evolve", example: { jp: "La langue évolue avec le temps, comme la société.", en: "Language evolves over time, like society." }, accept: ["to evolve", "to change", "to develop"], hint: "To evolve, change gradually — from l'évolution. La technologie évolue vite." },
        { id: "fr-u66l1-setransformer", type: "vocab", front: "se transformer", reading: "setransformer", meaning: "to transform", example: { jp: "Avec le temps, tout se transforme peu à peu.", en: "With time, everything gradually transforms." }, accept: ["to transform", "to change", "to turn into"], hint: "To change form — se transformer en = to turn into. Also transformer, to transform something." },
        { id: "fr-u66l1-sedevelopper", type: "vocab", front: "se développer", reading: "sedevelopper", meaning: "to develop", example: { jp: "Cette entreprise s'est beaucoup développée en dix ans.", en: "This company has grown a lot in ten years." }, accept: ["to develop", "to grow", "to expand"], hint: "To grow, expand — un pays qui se développe. From développer." },
        { id: "fr-u66l1-progresser", type: "vocab", front: "progresser", reading: "progresser", meaning: "to progress", example: { jp: "Elle progresse vite en français depuis une année.", en: "She's been progressing fast in French for a year." }, accept: ["to progress", "to improve", "to advance"], hint: "To make progress, improve — from le progrès. progresser en maths." },
        { id: "fr-u66l1-sameliorer", type: "vocab", front: "s'améliorer", reading: "sameliorer", meaning: "to improve", example: { jp: "Le temps va s'améliorer demain.", en: "The weather is going to improve tomorrow." }, accept: ["to improve", "to get better"], hint: "To get better — le temps s'améliore. From améliorer, to improve something." },
        { id: "fr-u66l1-empirer", type: "vocab", front: "empirer", reading: "empirer", meaning: "to get worse", example: { jp: "Si on ne fait rien, tout va empirer.", en: "If we do nothing, everything will get worse." }, accept: ["to get worse", "to worsen", "to deteriorate"], hint: "To get worse — the opposite of s'améliorer. La situation empire." },
      ],
    },
    {
      id: "fr-u66l2",
      unit: 66,
      lesson: 2,
      title: "Appearing and stopping",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say when things start or stop: apparaître, surgir, survenir, cesser.",
      items: [
        { id: "fr-u66l2-apparaitre", type: "vocab", front: "apparaître", reading: "apparaitre", meaning: "to appear", example: { jp: "Le soleil apparaît enfin après la pluie.", en: "The sun finally appears after the rain." }, accept: ["to appear", "to come into view", "to show up"], hint: "To appear, come into view — from paraître. The opposite is disparaître." },
        { id: "fr-u66l2-surgir", type: "vocab", front: "surgir", reading: "surgir", meaning: "to spring up", example: { jp: "Un problème peut surgir à tout moment.", en: "A problem can spring up at any moment." }, accept: ["to spring up", "to appear suddenly", "to arise"], hint: "To appear suddenly — from nowhere, or a problem out of the blue." },
        { id: "fr-u66l2-survenir", type: "vocab", front: "survenir", reading: "survenir", meaning: "to occur", example: { jp: "Un accident est survenu pendant la nuit.", en: "An accident occurred during the night." }, drill: { jp: "Un accident peut survenir ici", en: "An accident can occur here" }, accept: ["to occur", "to happen", "to arise"], hint: "To happen unexpectedly — an event or an accident. More formal than arriver." },
        { id: "fr-u66l2-cesser", type: "vocab", front: "cesser", reading: "cesser", meaning: "to stop", example: { jp: "La pluie a enfin cessé après trois jours.", en: "The rain finally stopped after three days." }, accept: ["to stop", "to cease", "to end"], hint: "To stop, cease — cesser de faire = to stop doing. sans cesse = ceaselessly." },
        { id: "fr-u66l2-subsister", type: "vocab", front: "subsister", reading: "subsister", meaning: "to remain", example: { jp: "Après plusieurs années, quelques problèmes subsistent encore.", en: "After several years, a few problems still remain." }, accept: ["to remain", "to persist", "to linger", "to survive"], hint: "To remain, still exist — a doubt or a problem that lingers on." },
        { id: "fr-u66l2-sepoursuivre", type: "vocab", front: "se poursuivre", reading: "sepoursuivre", meaning: "to continue", example: { jp: "La discussion s'est poursuivie tard dans la nuit.", en: "The discussion continued late into the night." }, accept: ["to continue", "to carry on", "to go on"], hint: "To carry on, continue — from poursuivre, to pursue. Le débat se poursuit." },
      ],
    },
    {
      id: "fr-u66l3",
      unit: 66,
      lesson: 3,
      title: "Then and now",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place change in time: désormais, autrefois, progressivement, de nos jours.",
      items: [
        { id: "fr-u66l3-desormais", type: "vocab", front: "désormais", reading: "desormais", meaning: "from now on", example: { jp: "Désormais, le magasin sera fermé le dimanche.", en: "From now on, the shop will be closed on Sundays." }, accept: ["from now on", "henceforth", "now"], hint: "From now on / henceforth — marks a lasting change from this point." },
        { id: "fr-u66l3-autrefois", type: "vocab", front: "autrefois", reading: "autrefois", meaning: "in the past", example: { jp: "Autrefois, la vie était plus simple.", en: "In the past, life was simpler." }, accept: ["in the past", "formerly", "in the old days"], hint: "In the old days, formerly — points back to a distant past. Opposite: aujourd'hui." },
        { id: "fr-u66l3-progressivement", type: "vocab", front: "progressivement", reading: "progressivement", meaning: "gradually", example: { jp: "Il faut changer ses habitudes progressivement.", en: "You have to change your habits gradually." }, accept: ["gradually", "step by step", "progressively"], hint: "Gradually, step by step — from progressif. Opposite: d'un coup." },
        { id: "fr-u66l3-denosjours", type: "vocab", front: "de nos jours", reading: "denosjours", meaning: "nowadays", example: { jp: "De nos jours, presque tout le monde a un téléphone.", en: "Nowadays, almost everyone has a phone." }, accept: ["nowadays", "these days", "today"], hint: "Nowadays, these days — de nos jours, tout va plus vite." },
        { id: "fr-u66l3-jadis", type: "vocab", front: "jadis", reading: "jadis", meaning: "long ago", example: { jp: "Jadis, cette maison était une école.", en: "Long ago, this house was a school." }, accept: ["long ago", "once", "in times past"], hint: "Long ago — even older and more literary than autrefois." },
        { id: "fr-u66l3-dorenavant", type: "vocab", front: "dorénavant", reading: "dorenavant", meaning: "from now on", example: { jp: "Dorénavant, nous mangerons plus tôt le soir.", en: "From now on, we'll eat earlier in the evening." }, accept: ["from now on", "henceforth", "in future"], hint: "From now on — a close, slightly formal twin of désormais." },
      ],
    },
    {
      id: "fr-u66l4",
      unit: 66,
      lesson: 4,
      title: "Naming the change",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name kinds of change: l'évolution, la transformation, la hausse, le déclin.",
      items: [
        { id: "fr-u66l4-levolution", type: "vocab", front: "l'évolution", reading: "levolution", meaning: "the change", example: { jp: "L'évolution du climat est un vrai problème.", en: "The change in the climate is a real problem." }, accept: ["the change", "evolution", "the development"], hint: "A gradual change or development — l'évolution des prix. From évoluer." },
        { id: "fr-u66l4-latransformation", type: "vocab", front: "la transformation", reading: "latransformation", meaning: "the transformation", example: { jp: "Cette transformation a changé toute sa vie.", en: "This transformation changed his whole life." }, drill: { jp: "La transformation est très grande", en: "The transformation is very great" }, accept: ["transformation", "the change", "the makeover"], hint: "A transformation, major change — from transformer." },
        { id: "fr-u66l4-lahausse", type: "vocab", front: "la hausse", reading: "lahausse", meaning: "the rise", example: { jp: "Avec la hausse des prix, tout coûte plus cher.", en: "With the rise in prices, everything costs more." }, accept: ["the rise", "the increase"], hint: "A rise, especially in prices — à la hausse = rising. The opposite is la baisse." },
        { id: "fr-u66l4-ledeclin", type: "vocab", front: "le déclin", reading: "ledeclin", meaning: "the decline", example: { jp: "L'entreprise est en déclin depuis plusieurs années.", en: "The company has been in decline for several years." }, drill: { jp: "Le déclin est très grand", en: "The decline is very great" }, accept: ["decline", "the downturn", "the fall"], hint: "Decline, downturn — en déclin = in decline. From décliner." },
        { id: "fr-u66l4-laphase", type: "vocab", front: "la phase", reading: "laphase", meaning: "the phase", example: { jp: "Chaque phase du projet demande du temps.", en: "Each phase of the project takes time." }, accept: ["phase", "the stage"], hint: "A phase or stage — la première phase. Also a phase of the moon." },
        { id: "fr-u66l4-leprocessus", type: "vocab", front: "le processus", reading: "leprocessus", meaning: "the process", example: { jp: "Apprendre une langue est un long processus.", en: "Learning a language is a long process." }, accept: ["process", "the procedure"], hint: "A process — a set of steps over time. le processus de paix = the peace process." },
      ],
    },
  ],
};
