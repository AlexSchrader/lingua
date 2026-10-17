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
        { id: "fr-u35l1-avant", type: "vocab", front: "avant", reading: "avant", meaning: "before", example: { jp: "Je me lave avant le petit-déjeuner.", en: "I wash before breakfast." }, accept: ["earlier than", "prior to", "beforehand"], drill: { jp: "Je fais mes devoirs avant le dîner", en: "I do my homework before dinner" }, hint: "\"a-VON\" — nasal, with the t silent. In front of a verb it needs de: avant de manger. Its opposite is après." },
        { id: "fr-u35l1-apres", type: "vocab", front: "après", reading: "apres", meaning: "after", example: { jp: "Après le dîner, je fais la vaisselle.", en: "After dinner I do the dishes." }, accept: ["afterwards", "later than", "following"], drill: { jp: "Je me repose après le travail", en: "I rest after work" }, hint: "\"a-PREH\" — the è is open and the s is silent. In front of a verb it takes the past infinitive: après avoir mangé." },
        { id: "fr-u35l1-pendant", type: "vocab", front: "pendant", reading: "pendant", meaning: "during", example: { jp: "Pendant les vacances, je vais nager.", en: "During the holidays I'm going to swim." }, accept: ["for", "throughout", "while"], drill: { jp: "Je dors pendant le film", en: "I sleep during the film" }, hint: "\"pon-DON\" — nasal at both ends with the t silent. It measures a span: pendant deux heures. Add que and it means while: pendant que je mange." },
        { id: "fr-u35l1-depuis", type: "vocab", front: "depuis", reading: "depuis", meaning: "since", example: { jp: "J'habite ici depuis deux mois.", en: "I've been living here for two months." }, accept: ["for", "from", "ever since"], drill: { jp: "Je travaille ici depuis trois ans", en: "I have worked here for three years" }, hint: "French keeps the present tense with depuis: j'habite ici depuis deux mois — I have been living here." },
        { id: "fr-u35l1-jusqua", type: "vocab", front: "jusqu'à", reading: "jusqua", meaning: "until", example: { jp: "Je travaille jusqu'à six heures.", en: "I work until six o'clock." }, accept: ["up to", "till", "as far as"], drill: { jp: "Je reste à la maison jusqu'à midi", en: "I stay at home until noon" }, hint: "\"zhews-KA\" — soft zh, the tight French u, and que elided to qu'. It marks an end point in time or in space: jusqu'à six heures, jusqu'à Paris." },
        { id: "fr-u35l1-bientot", type: "vocab", front: "bientôt", reading: "bientot", meaning: "soon", example: { jp: "Bientôt, c'est l'été !", en: "Soon it'll be summer!" }, accept: ["shortly", "before long", "in a moment"], drill: { jp: "Les vacances arrivent bientôt", en: "The holidays are coming soon" }, hint: "\"byan-TOH\" — bien is nasal, and the ô is a plain \"oh\" with a silent t after it. It is bien + tôt, well-early. À bientôt ! is see you soon." },
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
        { id: "fr-u35l2-toutdesuite", type: "vocab", front: "tout de suite", reading: "toutdesuite", meaning: "right away", example: { jp: "Je vais faire la vaisselle tout de suite.", en: "I'm going to do the dishes right away." }, accept: ["immediately", "straight away", "at once"], drill: { jp: "Je vais ranger ma chambre tout de suite", en: "I am going to tidy my room right away" }, hint: "\"toot sweet\" — the t of tout links across and the de nearly disappears in speech. Three words doing the work of one adverb: this instant." },
        { id: "fr-u35l2-enretard", type: "vocab", front: "en retard", reading: "enretard", meaning: "running late", example: { jp: "Je suis en retard pour la réunion.", en: "I'm late for the meeting." }, accept: ["late", "delayed", "behind", "late for something"], drill: { jp: "Mon frère est souvent en retard", en: "My brother is often late" }, hint: "en retard is being late; tard is simply a late hour. Je rentre tard is a choice; je suis en retard is a problem." },
        { id: "fr-u35l2-alheure", type: "vocab", front: "à l'heure", reading: "alheure", meaning: "on time", example: { jp: "Le bus est à l'heure.", en: "The bus is on time." }, accept: ["punctual", "in time", "right on time"], drill: { jp: "Le train arrive à l'heure", en: "The train arrives on time" }, hint: "\"a LUR\" — the h is silent and eu before r is the open rounded vowel. Careful: une heure is an hour, but à l'heure means on time." },
        { id: "fr-u35l2-detempsentemps", type: "vocab", front: "de temps en temps", reading: "detempsentemps", meaning: "from time to time", example: { jp: "De temps en temps, je vais au cinéma.", en: "From time to time I go to the cinema." }, accept: ["now and then", "occasionally", "every so often"], drill: { jp: "Je mange au restaurant de temps en temps", en: "I eat at a restaurant from time to time" }, hint: "\"duh ton zon TON\" — the s of temps wakes up as a z before en. Five syllables to say now and then." },
        { id: "fr-u35l2-rarement", type: "vocab", front: "rarement", reading: "rarement", meaning: "rarely", example: { jp: "Je vais rarement au restaurant.", en: "I rarely go to a restaurant." }, accept: ["seldom", "not often", "hardly ever"], drill: { jp: "Mon père regarde rarement la télé", en: "My father rarely watches TV" }, hint: "\"rar-MON\" — the middle e vanishes and -ent is nasal with the t silent. It is rare plus -ment, French's -ly." },
        { id: "fr-u35l2-enfin", type: "vocab", front: "enfin", reading: "enfin", meaning: "finally", example: { jp: "Enfin, je suis en vacances !", en: "Finally, I'm on holiday!" }, accept: ["at last", "in the end", "finally!"], drill: { jp: "Enfin le train arrive", en: "Finally the train arrives" }, hint: "\"on-FAN\" — nasal twice, and the two nasals are different vowels. It is en + fin, in the end; in speech it is also a filler, enfin, bref…" },
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
        { id: "fr-u35l3-lemoment", type: "vocab", front: "le moment", reading: "lemoment", meaning: "moment", example: { jp: "Un moment, s'il vous plaît !", en: "One moment, please!" }, accept: ["a moment", "the moment", "instant", "a very short time"], drill: { jp: "Le moment est difficile pour nous", en: "The moment is hard for us" }, hint: "\"mo-MON\" — a nasal ending with the t silent. Masculine: le moment. En ce moment means right now." },
        { id: "fr-u35l3-prochain", type: "vocab", front: "prochain", reading: "prochain", meaning: "next", example: { jp: "La semaine prochaine, je vais à Paris.", en: "Next week I'm going to Paris." }, accept: ["coming", "following", "the next"], drill: { jp: "Le mois prochain je vais à Lyon", en: "Next month I am going to Lyon" }, hint: "It comes after the noun: la semaine prochaine, le mois prochain." },
        { id: "fr-u35l3-dernier", type: "vocab", front: "dernier", reading: "dernier", meaning: "last", example: { jp: "Le mois dernier, j'ai beaucoup travaillé.", en: "Last month I worked a lot." }, accept: ["previous", "final", "the last"], drill: { jp: "Le dernier bus part à minuit", en: "The last bus leaves at midnight" }, hint: "\"dair-NYAY\" — the -ier ending is the \"yay\" glide; the feminine is dernière. Position matters: la dernière semaine is the final week, la semaine dernière is last week." },
        { id: "fr-u35l3-chaque", type: "vocab", front: "chaque", reading: "chaque", meaning: "each", example: { jp: "Chaque matin, je me réveille à sept heures.", en: "Each morning I wake up at seven." }, accept: ["every", "each one", "every single"], drill: { jp: "Chaque soir je fais la vaisselle", en: "Every evening I do the dishes" }, hint: "\"shak\" — ch is sh and qu a hard k with the e silent. It always takes a SINGULAR noun: chaque matin, never \"chaque matins\"." },
        { id: "fr-u35l3-longtemps", type: "vocab", front: "longtemps", reading: "longtemps", meaning: "a long time", example: { jp: "Je reste longtemps à la plage.", en: "I stay at the beach a long time." }, accept: ["for a long time", "long", "ages"], drill: { jp: "Je travaille longtemps le samedi", en: "I work a long time on Saturday" }, hint: "\"lon-TON\" — nasal twice, with the g and the -ps both silent. It is long + temps; depuis longtemps means for a long time now." },
        { id: "fr-u35l3-toutacoup", type: "vocab", front: "tout à coup", reading: "toutacoup", meaning: "suddenly", example: { jp: "Tout à coup, il pleut !", en: "Suddenly it's raining!" }, accept: ["all of a sudden", "abruptly", "out of nowhere"], drill: { jp: "Tout à coup le chien arrive", en: "Suddenly the dog arrives" }, hint: "\"too ta KOO\" — the t of tout links onto à, and coup's p is silent. Literally all at a blow." },
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
        { id: "fr-u35l4-vraiment", type: "vocab", front: "vraiment", reading: "vraiment", meaning: "really", example: { jp: "C'est vraiment difficile.", en: "It's really difficult." }, accept: ["truly", "genuinely", "for real"], drill: { jp: "Ce cours est vraiment difficile", en: "This class is really difficult" }, hint: "Built from vrai (true) + -ment, which is French's -ly." },
        { id: "fr-u35l4-heureusement", type: "vocab", front: "heureusement", reading: "heureusement", meaning: "luckily", example: { jp: "Heureusement, il fait beau.", en: "Luckily, the weather is nice." }, accept: ["fortunately", "thankfully", "happily"], drill: { jp: "Heureusement le magasin est ouvert", en: "Luckily the shop is open" }, hint: "\"uh-ruhz-MON\" — the h is silent, the s buzzes as a z, and -ent is nasal. Built on heureux, happy. Its opposite is malheureusement." },
        { id: "fr-u35l4-malheureusement", type: "vocab", front: "malheureusement", reading: "malheureusement", meaning: "unfortunately", example: { jp: "Malheureusement, le magasin est fermé.", en: "Unfortunately, the shop is closed." }, accept: ["sadly", "regrettably", "unluckily"], drill: { jp: "Malheureusement le train est en retard", en: "Unfortunately the train is late" }, hint: "heureusement with mal- stuck on the front — the same trick as content and mécontent." },
        { id: "fr-u35l4-presque", type: "vocab", front: "presque", reading: "presque", meaning: "almost", example: { jp: "Il est presque midi.", en: "It's almost midday." }, accept: ["nearly", "just about", "very nearly"], drill: { jp: "Le gâteau est presque fini", en: "The cake is almost finished" }, hint: "\"presk\" — the final e is silent, so it ends on the sk. Despite the look, it has nothing to do with près, near." },
        { id: "fr-u35l4-seulement", type: "vocab", front: "seulement", reading: "seulement", meaning: "only", example: { jp: "J'ai seulement deux euros.", en: "I only have two euros." }, accept: ["just", "merely", "nothing but"], drill: { jp: "J'ai seulement dix minutes", en: "I only have ten minutes" }, hint: "\"suhl-MON\" — eu rounded, the middle e swallowed, -ent nasal. Built on seul, alone, which is a useful hook: only the one." },
        { id: "fr-u35l4-partout", type: "vocab", front: "partout", reading: "partout", meaning: "everywhere", example: { jp: "Il y a des fleurs partout.", en: "There are flowers everywhere." }, accept: ["all over", "all around", "in every place"], drill: { jp: "Il y a du sable partout", en: "There is sand everywhere" }, hint: "\"par-TOO\" — ou is \"oo\" and the final t is silent. It is par + tout, through everything." },
      ],
    },
  ],
};
