// FR Unit 81 — Vocabulary 1 (B1) (slot: coverage-b1-1) — B1
// First of block 2's three coverage units (Strand D). Not a theme — a frequency
// pass. The blueprint is explicit that this is where a language "stops being a
// phrasebook and starts being usable", and at B1 the gap is verbs: A1 and A2
// taught them almost entirely as je-forms tied to a topic, so the learner has
// no stock of neutral, topic-free verbs to build a sentence around.
//
// This unit is therefore all VERBS, given in the infinitive, grouped by what
// they do rather than by where you'd use them. Every front checked against the
// live corpus. Conventions: see fr/unit1.js.
export const FR_UNIT81 = {
  id: "fr-u81",
  lang: "fr",
  title: "Les verbes · 5",
  order: 81,
  stage: "b1",
  lessons: [
    {
      id: "fr-u81l1",
      unit: 81,
      lesson: 1,
      title: "Verbs of thinking",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how you reached a view: considérer, supposer, juger, prouver, signifier.",
      items: [
        { id: "fr-u81l1-considerer", type: "vocab", front: "considérer", reading: "considerer", meaning: "to consider", example: { jp: "Je considère que c'est une bonne décision, bien que tout le monde ne soit pas d'accord.", en: "I consider it a good decision, although not everyone agrees." }, accept: ["to regard", "to deem", "to view"] },
        { id: "fr-u81l1-supposer", type: "vocab", front: "supposer", reading: "supposer", meaning: "to assume", example: { jp: "Je suppose qu'il a oublié, parce qu'il répond toujours vite.", en: "I assume he forgot, because he always replies quickly." }, accept: ["to suppose", "to presume", "to guess"] },
        { id: "fr-u81l1-juger", type: "vocab", front: "juger", reading: "juger", meaning: "to judge", example: { jp: "Il ne faut pas juger trop vite, surtout quand on ne connaît pas toute l'histoire.", en: "You shouldn't judge too quickly, especially when you don't know the whole story." }, accept: ["to assess", "to rate", "to try (in court)"] },
        { id: "fr-u81l1-definir", type: "vocab", front: "définir", reading: "definir", meaning: "to define", example: { jp: "Il est difficile de définir cette notion en une phrase.", en: "It's difficult to define this notion in one sentence." }, accept: ["to set out", "to specify"] },
        { id: "fr-u81l1-prouver", type: "vocab", front: "prouver", reading: "prouver", meaning: "to prove", example: { jp: "Rien ne prouve qu'il ait raison, et rien ne prouve qu'il ait tort.", en: "Nothing proves he's right, and nothing proves he's wrong." }, accept: ["to demonstrate", "to show"] },
        { id: "fr-u81l1-signifier", type: "vocab", front: "signifier", reading: "signifier", meaning: "to mean", example: { jp: "Ce mot signifie autre chose dans ce domaine, ce qui explique le problème.", en: "This word means something else in this field, which explains the problem." }, accept: ["to signify", "to denote"], hint: "The written word for it — in speech people say vouloir dire." },
      ],
    },
    {
      id: "fr-u81l2",
      unit: 81,
      lesson: 2,
      title: "Verbs of achieving",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe getting something done: obtenir, atteindre, produire, organiser.",
      items: [
        { id: "fr-u81l2-obtenir", type: "vocab", front: "obtenir", reading: "obtenir", meaning: "to obtain", example: { jp: "Elle a obtenu un prêt, si bien qu'elle peut enfin acheter son appartement.", en: "She obtained a loan, so she can finally buy her flat." }, accept: ["to get", "to secure", "to gain"] },
        { id: "fr-u81l2-atteindre", type: "vocab", front: "atteindre", reading: "atteindre", meaning: "to reach", example: { jp: "Nous avons atteint notre objectif, pourtant c'était difficile au début.", en: "We reached our target, yet it was difficult at the start." }, accept: ["to attain", "to achieve", "to hit"] },
        { id: "fr-u81l2-produire", type: "vocab", front: "produire", reading: "produire", meaning: "to produce", example: { jp: "Cette région produit surtout du vin, tandis que l'autre produit des fruits.", en: "This region mainly produces wine, whereas the other produces fruit." }, accept: ["to make", "to yield", "to generate"] },
        { id: "fr-u81l2-organiser", type: "vocab", front: "organiser", reading: "organiser", meaning: "to organise", example: { jp: "Ils organisent un festival chaque été, à condition qu'il y ait assez d'argent.", en: "They organise a festival every summer, provided there's enough money." }, accept: ["to organize", "to arrange", "to set up"] },
        { id: "fr-u81l2-installer", type: "vocab", front: "installer", reading: "installer", meaning: "to install", example: { jp: "J'ai installé l'application, mais elle ne marche pas sur mon vieux portable.", en: "I installed the app, but it doesn't work on my old phone." }, accept: ["to set up", "to fit", "to put in"], hint: "s'installer = to settle in somewhere: ils se sont installés en banlieue." },
        { id: "fr-u81l2-developper", type: "vocab", front: "développer", reading: "developper", meaning: "to develop", example: { jp: "L'entreprise développe un nouveau produit, dont personne ne sait encore rien.", en: "The company is developing a new product, about which nobody yet knows anything." }, accept: ["to expand", "to grow", "to build up"] },
      ],
    },
    {
      id: "fr-u81l3",
      unit: 81,
      lesson: 3,
      title: "Verbs of change and trouble",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about fixing and failing: transformer, réduire, résoudre, éviter, échouer.",
      items: [
        { id: "fr-u81l3-transformer", type: "vocab", front: "transformer", reading: "transformer", meaning: "to transform", example: { jp: "Ils ont transformé cette gare en musée, ce qui a beaucoup plu aux habitants.", en: "They transformed this station into a museum, which pleased residents a lot." }, accept: ["to change", "to convert", "to turn into"] },
        { id: "fr-u81l3-reduire", type: "vocab", front: "réduire", reading: "reduire", meaning: "to reduce", example: { jp: "Il faut réduire le gaspillage, parce que la situation est déjà difficile.", en: "Waste must be reduced, because the situation is already difficult." }, accept: ["to cut", "to lower", "to bring down"] },
        { id: "fr-u81l3-resoudre", type: "vocab", front: "résoudre", reading: "resoudre", meaning: "to solve", example: { jp: "Personne n'a réussi à résoudre ce problème, bien que beaucoup aient essayé.", en: "Nobody has managed to solve this problem, although many have tried." }, accept: ["to resolve", "to sort out", "to fix"] },
        { id: "fr-u81l3-eviter", type: "vocab", front: "éviter", reading: "eviter", meaning: "to avoid", example: { jp: "J'évite de prendre la voiture en ville, parce qu'il n'y a jamais de place.", en: "I avoid taking the car in town, because there's never any space." }, accept: ["to dodge", "to steer clear of", "to prevent"], hint: "éviter DE + verb: éviter de parler." },
        { id: "fr-u81l3-echouer", type: "vocab", front: "échouer", reading: "echouer", meaning: "to fail", example: { jp: "Ce travail a échoué, mais on a beaucoup appris de cet échec.", en: "This work failed, but we learned a lot from that failure." }, accept: ["to flop", "to fall through", "to be unsuccessful"], hint: "The verb behind l'échec (Unit 71)." },
        { id: "fr-u81l3-terminer", type: "vocab", front: "terminer", reading: "terminer", meaning: "to finish", example: { jp: "Je termine ce travail ce soir, à moins qu'il y ait un problème.", en: "I'm finishing this work this evening, unless there's a problem." }, accept: ["to end", "to complete", "to wrap up"] },
      ],
    },
    {
      id: "fr-u81l4",
      unit: 81,
      lesson: 4,
      title: "Verbs of dealing with people",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle other people: participer, discuter, conseiller, comparer, oser.",
      items: [
        { id: "fr-u81l4-participer", type: "vocab", front: "participer", reading: "participer", meaning: "to take part", example: { jp: "Tout le monde peut participer, à condition de répondre avant vendredi.", en: "Anyone can take part, provided they reply before Friday." }, accept: ["to participate", "to join in", "to contribute"], hint: "participer À something — the à is never optional." },
        { id: "fr-u81l4-discuter", type: "vocab", front: "discuter", reading: "discuter", meaning: "to discuss", example: { jp: "Nous avons discuté pendant deux heures sans trouver de solution.", en: "We discussed it for two hours without finding a solution." }, accept: ["to talk over", "to argue", "to chat"], hint: "Milder than English \"discuss\" — it often just means to chat." },
        { id: "fr-u81l4-conseiller", type: "vocab", front: "conseiller", reading: "conseiller", meaning: "to advise", example: { jp: "Je vous conseille de réserver tôt, parce qu'il y a beaucoup de monde.", en: "I advise you to book early, because there are a lot of people." }, accept: ["to recommend", "to suggest"], hint: "Also the noun un conseiller, an adviser." },
        { id: "fr-u81l4-comparer", type: "vocab", front: "comparer", reading: "comparer", meaning: "to compare", example: { jp: "Si on compare les deux régions, la différence est très importante.", en: "If you compare the two regions, the difference is very large." }, accept: ["to contrast", "to liken"], hint: "comparer À or AVEC — both are accepted." },
        { id: "fr-u81l4-oser", type: "vocab", front: "oser", reading: "oser", meaning: "to dare", example: { jp: "Il n'ose pas lui parler, bien qu'il sache qu'il devrait.", en: "He doesn't dare speak to her, although he knows he should." }, accept: ["to venture", "to have the nerve"], hint: "Takes the plain verb with no preposition: je n'ose pas demander." },
        { id: "fr-u81l4-servir", type: "vocab", front: "servir", reading: "servir", meaning: "to serve", example: { jp: "À quoi sert cette application ? Je n'ose pas l'ouvrir.", en: "What's this app for? I don't dare open it." }, accept: ["to be used for", "to wait on", "to be useful"], hint: "servir à = to be used for. ça ne sert à rien = it's no use." },
      ],
    },
  ],
};
