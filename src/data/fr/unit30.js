// FR Unit 30 — Comparer ("Comparing") — A1 GRAMMAR, and the last A1 unit
// Third and final unit of the A1-exam completion set. Three gaps from the probe:
//   1. COMPARATIVES — plus/moins/aussi ... que, and the two irregulars (meilleur,
//      mieux). The corpus taught bare `plus` and `moins` as quantities in fr-u4 but
//      never the comparison frame, so a learner could say "more" and not "bigger
//      than". A1 asks for simple comparison of people, places and prices.
//   2. QUANTITY + de — beaucoup de, trop de, peu de, assez de. fr-u26 taught
//      `un peu de` and stated the rule ("quantities take plain de, never du"), but
//      only that one instance; these are the rest of the set.
//   3. TIME AND SEQUENCE — avant, pendant, bientôt, plus tard, tout de suite. A1
//      wants a learner to place events relative to each other, not just name a clock
//      time (fr-u12) or a day (fr-u7).
//
// The comparative irregulars get their own hints because they are the classic
// beginner error: meilleur is the adjective (a better CAKE), mieux is the adverb
// (you speak BETTER). English uses "better" for both and gives no warning.
//
// NOTE `si`, `donc`, `déjà` and `encore` were candidates for L3 but are already
// taught (fr-u21, fr-u23, fr-u10) — fronts are globally unique, so this unit adds
// only genuinely new words. Conventions: see fr/unit1.js.
export const FR_UNIT30 = {
  id: "fr-u30",
  lang: "fr",
  title: "Comparer",
  order: 30,
  stage: "a1",
  lessons: [
    {
      id: "fr-u30l1",
      unit: 30,
      lesson: 1,
      title: "More and less",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Compare two things: plus que, moins que, aussi que — le plus, le moins, meilleur, mieux.",
      items: [
        { id: "fr-u30l1-plusque", type: "vocab", front: "plus que", reading: "plusque", meaning: "more than", example: { jp: "Le train est plus rapide que le bus.", en: "The train is faster than the bus." }, accept: ["more", "-er than"], hint: "The adjective sits INSIDE the frame: plus [rapide] que. French has no \"-er\" ending — everything is built this way." },
        { id: "fr-u30l1-moinsque", type: "vocab", front: "moins que", reading: "moinsque", meaning: "less than", example: { jp: "Le métro est moins cher que le taxi.", en: "The metro is less expensive than the taxi." }, accept: ["less", "not as"] },
        { id: "fr-u30l1-aussique", type: "vocab", front: "aussi que", reading: "aussique", meaning: "as ... as", example: { jp: "Ma sœur est aussi grande que moi.", en: "My sister is as tall as me." }, accept: ["as as", "just as"] },
        { id: "fr-u30l1-leplus", type: "vocab", front: "le plus", reading: "leplus", meaning: "the most", example: { jp: "C'est le plus joli jardin de la ville.", en: "It's the prettiest garden in the city." }, accept: ["the -est", "most"], hint: "Add the article and you have the superlative: plus grand = bigger, le plus grand = the biggest." },
        { id: "fr-u30l1-lemoins", type: "vocab", front: "le moins", reading: "lemoins", meaning: "the least", example: { jp: "C'est le moins cher, madame.", en: "It's the cheapest, ma'am." }, accept: ["the least"] },
        { id: "fr-u30l1-meilleur", type: "vocab", front: "meilleur", reading: "meilleur", meaning: "better (adjective)", example: { jp: "Ce gâteau est meilleur que le pain.", en: "This cake is better than the bread." }, accept: ["best"], hint: "The one adjective that refuses the frame: never \"plus bon\", always meilleur. Describes a THING." },
        { id: "fr-u30l1-mieux", type: "vocab", front: "mieux", reading: "mieux", meaning: "better (adverb)", example: { jp: "Aujourd'hui, je vais mieux !", en: "Today, I'm feeling better!" }, accept: ["best"], hint: "The trap English sets: meilleur describes a NOUN (un meilleur café), mieux describes an ACTION (tu parles mieux). English says \"better\" for both." },
      ],
    },
    {
      id: "fr-u30l2",
      unit: 30,
      lesson: 2,
      title: "How much of it",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Measure things out: beaucoup de, trop de, peu de, assez de, plusieurs, quelques, chaque.",
      items: [
        { id: "fr-u30l2-beaucoupde", type: "vocab", front: "beaucoup de", reading: "beaucoupde", meaning: "a lot of", example: { jp: "Il y a beaucoup de fleurs dans le jardin.", en: "There are a lot of flowers in the garden." }, accept: ["lots of", "many", "much"], hint: "Quantity words take plain de — never du, de la or des. beaucoup de pain, never \"beaucoup du pain\"." },
        { id: "fr-u30l2-tropde", type: "vocab", front: "trop de", reading: "tropde", meaning: "too much of", example: { jp: "Il y a trop de sucre dans mon café.", en: "There's too much sugar in my coffee." }, accept: ["too many", "too much"] },
        { id: "fr-u30l2-peude", type: "vocab", front: "peu de", reading: "peude", meaning: "few / little", example: { jp: "Il y a peu de voitures dans la rue.", en: "There are few cars in the street." }, accept: ["not much", "not many"], hint: "Careful — un peu de is positive (\"a little\"), peu de is negative (\"hardly any\"). One small word changes the mood entirely." },
        { id: "fr-u30l2-assezde", type: "vocab", front: "assez de", reading: "assezde", meaning: "enough of", example: { jp: "Nous avons assez d'argent.", en: "We have enough money." }, accept: ["enough"] },
        { id: "fr-u30l2-plusieurs", type: "vocab", front: "plusieurs", reading: "plusieurs", meaning: "several", example: { jp: "J'ai plusieurs amis à Paris.", en: "I have several friends in Paris." }, accept: ["a few", "many"], hint: "No de after this one — it sits straight on the noun: plusieurs amis." },
        { id: "fr-u30l2-quelques", type: "vocab", front: "quelques", reading: "quelques", meaning: "a few", example: { jp: "Quelques minutes, s'il vous plaît.", en: "A few minutes, please." }, accept: ["some", "several"] },
        { id: "fr-u30l2-chaque", type: "vocab", front: "chaque", reading: "chaque", meaning: "each", example: { jp: "Chaque matin, je bois un café.", en: "Each morning, I drink a coffee." }, accept: ["every"], hint: "Always singular, even when English goes plural: chaque jour = every day, never \"chaque jours\"." },
      ],
    },
    {
      id: "fr-u30l3",
      unit: 30,
      lesson: 3,
      title: "Before, during, soon",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Place events in time: avant, après, pendant, bientôt, plus tard, tout de suite, longtemps, enfin.",
      items: [
        { id: "fr-u30l3-avant", type: "vocab", front: "avant", reading: "avant", meaning: "before", example: { jp: "Je mange avant le travail.", en: "I eat before work." }, accept: ["prior to", "earlier"], hint: "Learn it with its mirror image below: avant le dîner, après le dîner." },
        { id: "fr-u30l3-apres", type: "vocab", front: "après", reading: "apres", meaning: "after", example: { jp: "Après le dîner, on va au parc.", en: "After dinner, we go to the park." }, accept: ["afterwards", "then", "later"], hint: "Used constantly in directions and plans — et après ? = \"and then?\"." },
        { id: "fr-u30l3-pendant", type: "vocab", front: "pendant", reading: "pendant", meaning: "during", example: { jp: "Pendant l'été, il fait très chaud.", en: "During the summer, it's very hot." }, accept: ["for", "while"], hint: "Also \"for\" with a length of time: pendant deux heures = for two hours." },
        { id: "fr-u30l3-bientot", type: "vocab", front: "bientôt", reading: "bientot", meaning: "soon", example: { jp: "Le dîner est bientôt prêt.", en: "Dinner is ready soon." }, accept: ["shortly", "before long"], hint: "You've been saying it since Unit 10 — à bientôt is literally \"until soon\"." },
        { id: "fr-u30l3-plustard", type: "vocab", front: "plus tard", reading: "plustard", meaning: "later", example: { jp: "On peut manger plus tard ?", en: "Can we eat later?" }, accept: ["afterwards", "later on"] },
        { id: "fr-u30l3-toutdesuite", type: "vocab", front: "tout de suite", reading: "toutdesuite", meaning: "right away", example: { jp: "J'arrive tout de suite !", en: "I'm coming right away!" }, accept: ["immediately", "at once", "straight away"], hint: "Said fast, it collapses to \"toot-SWEET\" — which is where the English biscuit joke comes from." },
        { id: "fr-u30l3-longtemps", type: "vocab", front: "longtemps", reading: "longtemps", meaning: "a long time", example: { jp: "Il pleut depuis longtemps.", en: "It has been raining a long time." }, accept: ["long", "for ages"], hint: "depuis = since / for — depuis longtemps is the everyday \"for ages\"." },
        { id: "fr-u30l3-enfin", type: "vocab", front: "enfin", reading: "enfin", meaning: "finally", example: { jp: "Enfin ! Le bus est là.", en: "Finally! The bus is here." }, accept: ["at last", "well"], hint: "Also a verbal shrug that starts half of French sentences — enfin… = \"well…\", \"anyway…\"." },
      ],
    },
  ],
};
