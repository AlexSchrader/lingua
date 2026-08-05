// FR Unit 35 — Le temps qui passe ("Time and adverbs") — A2
// A1 could say WHEN on a clock and a calendar (u7, u12) but had almost nothing
// for the shape of time around an event: before, after, during, since, until.
// That is lesson 1, and it is the most load-bearing lesson in this block —
// everything downstream leans on avant / après.
// One collision worth recording: il y a is already taught as "there is" (u6l2),
// so its second life as "ago" cannot be taught as a second front. It is left for
// a grammar unit to gloss in context; this unit says depuis instead, which covers
// most of the same ground for a learner at A2.
// Conventions + the A2 infinitive decision: see the header of fr/unit28.js.
export const FR_UNIT35 = {
  id: "fr-u35",
  lang: "fr",
  title: "Le temps qui passe",
  order: 35,
  stage: "a2",
  lessons: [
    {
      id: "fr-u35l1",
      unit: 35,
      lesson: 1,
      title: "Before and after",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put events in order around each other: before, after, during, since, until — and say something is happening soon.",
      items: [
        { id: "fr-u35l1-avant", type: "vocab", front: "avant", reading: "avant", meaning: "before", example: { jp: "Je me lave avant le petit-déjeuner.", en: "I wash before breakfast." }, accept: ["earlier than", "prior to", "beforehand"] },
        { id: "fr-u35l1-apres", type: "vocab", front: "après", reading: "apres", meaning: "after", example: { jp: "Après le dîner, je fais la vaisselle.", en: "After dinner I do the dishes." }, accept: ["afterwards", "later than", "following"] },
        { id: "fr-u35l1-pendant", type: "vocab", front: "pendant", reading: "pendant", meaning: "during", example: { jp: "Pendant les vacances, je vais nager.", en: "During the holidays I'm going to swim." }, accept: ["for", "throughout", "while"] },
        { id: "fr-u35l1-depuis", type: "vocab", front: "depuis", reading: "depuis", meaning: "since", example: { jp: "J'habite ici depuis deux mois.", en: "I've been living here for two months." }, accept: ["for", "from"], hint: "French keeps the present tense with depuis: j'habite ici depuis deux mois — I have been living here." },
        { id: "fr-u35l1-jusqua", type: "vocab", front: "jusqu'à", reading: "jusqua", meaning: "until", example: { jp: "Je travaille jusqu'à six heures.", en: "I work until six o'clock." }, accept: ["up to", "till", "as far as"] },
        { id: "fr-u35l1-bientot", type: "vocab", front: "bientôt", reading: "bientot", meaning: "soon", example: { jp: "Bientôt, c'est l'été !", en: "Soon it'll be summer!" }, accept: ["shortly", "before long"] },
      ],
    },
    {
      id: "fr-u35l2",
      unit: 35,
      lesson: 2,
      title: "Right now, or not",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how punctual you are and how often something happens: right away, late, on time, now and then, rarely, finally.",
      items: [
        { id: "fr-u35l2-toutdesuite", type: "vocab", front: "tout de suite", reading: "toutdesuite", meaning: "right away", example: { jp: "Je vais faire la vaisselle tout de suite.", en: "I'm going to do the dishes right away." }, accept: ["immediately", "straight away", "at once"] },
        { id: "fr-u35l2-enretard", type: "vocab", front: "en retard", reading: "enretard", meaning: "late (for something)", example: { jp: "Je suis en retard pour la réunion.", en: "I'm late for the meeting." }, accept: ["running late", "delayed", "behind", "late"], hint: "en retard is being late; tard is simply a late hour. Je rentre tard is a choice; je suis en retard is a problem." },
        { id: "fr-u35l2-alheure", type: "vocab", front: "à l'heure", reading: "alheure", meaning: "on time", example: { jp: "Le bus est à l'heure.", en: "The bus is on time." }, accept: ["punctual", "in time"] },
        { id: "fr-u35l2-detempsentemps", type: "vocab", front: "de temps en temps", reading: "detempsentemps", meaning: "from time to time", example: { jp: "De temps en temps, je vais au cinéma.", en: "From time to time I go to the cinema." }, accept: ["now and then", "occasionally"] },
        { id: "fr-u35l2-rarement", type: "vocab", front: "rarement", reading: "rarement", meaning: "rarely", example: { jp: "Je vais rarement au restaurant.", en: "I rarely go to a restaurant." }, accept: ["seldom", "not often"] },
        { id: "fr-u35l2-enfin", type: "vocab", front: "enfin", reading: "enfin", meaning: "finally", example: { jp: "Enfin, je suis en vacances !", en: "Finally, I'm on holiday!" }, accept: ["at last", "in the end"] },
      ],
    },
    {
      id: "fr-u35l3",
      unit: 35,
      lesson: 3,
      title: "This one and the next",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Point at a moment: next week, last month, each morning, a long time, and something that happens all of a sudden.",
      items: [
        { id: "fr-u35l3-lemoment", type: "vocab", front: "le moment", reading: "lemoment", meaning: "moment", example: { jp: "Un moment, s'il vous plaît !", en: "One moment, please!" }, accept: ["a moment", "the moment", "instant"] },
        { id: "fr-u35l3-prochain", type: "vocab", front: "prochain", reading: "prochain", meaning: "next", example: { jp: "La semaine prochaine, je vais à Paris.", en: "Next week I'm going to Paris." }, accept: ["coming", "following", "the next"], hint: "It comes after the noun: la semaine prochaine, le mois prochain." },
        { id: "fr-u35l3-dernier", type: "vocab", front: "dernier", reading: "dernier", meaning: "last", example: { jp: "Le mois dernier, j'ai beaucoup travaillé.", en: "Last month I worked a lot." }, accept: ["previous", "final", "the last"] },
        { id: "fr-u35l3-chaque", type: "vocab", front: "chaque", reading: "chaque", meaning: "each", example: { jp: "Chaque matin, je me réveille à sept heures.", en: "Each morning I wake up at seven." }, accept: ["every", "each one"] },
        { id: "fr-u35l3-longtemps", type: "vocab", front: "longtemps", reading: "longtemps", meaning: "a long time", example: { jp: "Je reste longtemps à la plage.", en: "I stay at the beach a long time." }, accept: ["for a long time", "long", "ages"] },
        { id: "fr-u35l3-toutacoup", type: "vocab", front: "tout à coup", reading: "toutacoup", meaning: "suddenly", example: { jp: "Tout à coup, il pleut !", en: "Suddenly it's raining!" }, accept: ["all of a sudden", "abruptly", "out of nowhere"] },
      ],
    },
    {
      id: "fr-u35l4",
      unit: 35,
      lesson: 4,
      title: "How much, how truly",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Colour a statement instead of just making it: really, luckily, unfortunately, almost, only, everywhere.",
      items: [
        { id: "fr-u35l4-vraiment", type: "vocab", front: "vraiment", reading: "vraiment", meaning: "really", example: { jp: "C'est vraiment difficile.", en: "It's really difficult." }, accept: ["truly", "genuinely"], hint: "Built from vrai (true) + -ment, which is French's -ly." },
        { id: "fr-u35l4-heureusement", type: "vocab", front: "heureusement", reading: "heureusement", meaning: "luckily", example: { jp: "Heureusement, il fait beau.", en: "Luckily, the weather is nice." }, accept: ["fortunately", "thankfully"] },
        { id: "fr-u35l4-malheureusement", type: "vocab", front: "malheureusement", reading: "malheureusement", meaning: "unfortunately", example: { jp: "Malheureusement, le magasin est fermé.", en: "Unfortunately, the shop is closed." }, accept: ["sadly", "regrettably", "unluckily"], hint: "heureusement with mal- stuck on the front — the same trick as content and mécontent." },
        { id: "fr-u35l4-presque", type: "vocab", front: "presque", reading: "presque", meaning: "almost", example: { jp: "Il est presque midi.", en: "It's almost midday." }, accept: ["nearly", "just about"] },
        { id: "fr-u35l4-seulement", type: "vocab", front: "seulement", reading: "seulement", meaning: "only", example: { jp: "J'ai seulement deux euros.", en: "I only have two euros." }, accept: ["just", "merely"] },
        { id: "fr-u35l4-partout", type: "vocab", front: "partout", reading: "partout", meaning: "everywhere", example: { jp: "Il y a des fleurs partout.", en: "There are flowers everywhere." }, accept: ["all over", "all around"] },
      ],
    },
  ],
};
