// FR Unit 60 — La comparaison et le degré (slot: comparison and degree) — B1
// SCOPE BOUNDARY: A2 owns the core comparative (plus/moins/aussi … que,
// meilleur, le plus, le pire, autant de). This unit is the register above it:
// fine degree (davantage, nettement, d'autant plus), comparison as verbs and
// nouns (comparer→la comparaison, différer, dépasser, l'écart), and relational
// framing (par rapport à, contrairement à). Fronts checked against the live
// 1,287 A1+A2 fronts and the sibling B1 blocks. Conventions: fr/unit1.js.
export const FR_UNIT60 = {
  id: "fr-u60",
  lang: "fr",
  title: "La comparaison et le degré",
  order: 60,
  stage: "b1",
  lessons: [
    {
      id: "fr-u60l1",
      unit: 60,
      lesson: 1,
      title: "Degree and amount",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how much more or less, precisely: davantage, nettement, de moins en moins, la majorité.",
      items: [
        { id: "fr-u60l1-davantage", type: "vocab", front: "davantage", reading: "davantage", meaning: "more", example: { jp: "Cette année, il travaille davantage que l'année dernière.", en: "This year, he works more than last year." }, accept: ["more", "any more", "further"], hint: "A more formal 'more' — replaces plus after a verb: manger davantage." },
        { id: "fr-u60l1-dautantplus", type: "vocab", front: "d'autant plus", reading: "dautantplus", meaning: "all the more", example: { jp: "Ce voyage est d'autant plus agréable qu'il fait beau.", en: "This trip is all the more pleasant because the weather is nice." }, accept: ["all the more", "especially", "even more so"], hint: "d'autant plus … que = all the more … because. Stacks one reason onto another." },
        { id: "fr-u60l1-demoinsenmoins", type: "vocab", front: "de moins en moins", reading: "demoinsenmoins", meaning: "less and less", example: { jp: "Il y a de moins en moins de neige en hiver.", en: "There is less and less snow in winter." }, drill: { jp: "Il y a de moins en moins", en: "There is less and less" }, accept: ["less and less", "fewer and fewer"], hint: "The falling twin of de plus en plus. Followed by de before a noun." },
        { id: "fr-u60l1-nettement", type: "vocab", front: "nettement", reading: "nettement", meaning: "clearly", example: { jp: "Ce restaurant est nettement meilleur que l'autre.", en: "This restaurant is clearly better than the other one." }, accept: ["clearly", "markedly", "by far", "distinctly"], hint: "By a clear margin — nettement plus cher = markedly more expensive. From net, clean/clear." },
        { id: "fr-u60l1-lamajorite", type: "vocab", front: "la majorité", reading: "lamajorite", meaning: "the majority", example: { jp: "La majorité des personnes préfèrent le week-end.", en: "The majority of people prefer the weekend." }, accept: ["majority", "most", "the greater part"], hint: "The greater part — la majorité des gens = most people." },
        { id: "fr-u60l1-ledouble", type: "vocab", front: "le double", reading: "ledouble", meaning: "twice as much", example: { jp: "Ce billet coûte le double du prix normal.", en: "This ticket costs twice the normal price." }, accept: ["double", "twice as much", "the double"], hint: "Twice the amount — le double de. The opposite is la moitié." },
      ],
    },
    {
      id: "fr-u60l2",
      unit: 60,
      lesson: 2,
      title: "Measuring against",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Compare two things directly: comparer, différer, dépasser, un écart.",
      items: [
        { id: "fr-u60l2-lacomparaison", type: "vocab", front: "la comparaison", reading: "lacomparaison", meaning: "the comparison", example: { jp: "La comparaison entre les deux villes est intéressante.", en: "The comparison between the two cities is interesting." }, accept: ["comparison", "the contrast"], hint: "en comparaison = by comparison. From comparer." },
        { id: "fr-u60l2-differer", type: "vocab", front: "différer", reading: "differer", meaning: "to differ", example: { jp: "Les deux prix diffèrent de quelques euros.", en: "The two prices differ by a few euros." }, accept: ["to differ", "to be different", "to vary"], hint: "différer de = to be different from. More formal than être différent." },
        { id: "fr-u60l2-depasser", type: "vocab", front: "dépasser", reading: "depasser", meaning: "to exceed", example: { jp: "Le prix dépasse cent euros sans problème.", en: "The price goes over a hundred euros easily." }, drill: { jp: "Le prix va dépasser cent euros", en: "The price is going to exceed a hundred euros" }, accept: ["to exceed", "to go beyond", "to overtake", "to pass"], hint: "To go beyond — a limit, an amount, or a car: dépasser une voiture = to overtake." },
        { id: "fr-u60l2-surpasser", type: "vocab", front: "surpasser", reading: "surpasser", meaning: "to surpass", example: { jp: "Ce film surpasse tous les autres de l'année.", en: "This film surpasses all the others this year." }, accept: ["to surpass", "to outdo", "to beat"], hint: "To do better than — about quality. se surpasser = to outdo oneself." },
        { id: "fr-u60l2-correspondre", type: "vocab", front: "correspondre", reading: "correspondre", meaning: "to match", example: { jp: "Ce prix ne correspond pas à la qualité.", en: "This price doesn't match the quality." }, accept: ["to match", "to correspond", "to fit"], hint: "correspondre à = to match / fit. Also to exchange letters with someone." },
        { id: "fr-u60l2-lecart", type: "vocab", front: "l'écart", reading: "lecart", meaning: "the gap", example: { jp: "L'écart entre les deux prix est très grand.", en: "The gap between the two prices is very big." }, accept: ["gap", "the difference", "the distance"], hint: "The distance or difference between two things — un écart de prix. Also: à l'écart = apart, aside." },
      ],
    },
    {
      id: "fr-u60l3",
      unit: 60,
      lesson: 3,
      title: "Alike or unlike",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how alike or how different things are: semblable, la différence, équivalent, distinct.",
      items: [
        { id: "fr-u60l3-semblable", type: "vocab", front: "semblable", reading: "semblable", meaning: "similar", example: { jp: "Les deux maisons sont presque semblables.", en: "The two houses are almost alike." }, accept: ["similar", "alike", "comparable"], hint: "semblable à = similar to. A more formal pareil." },
        { id: "fr-u60l3-ladifference", type: "vocab", front: "la différence", reading: "ladifference", meaning: "the difference", example: { jp: "La différence de prix est vraiment importante.", en: "The difference in price is really significant." }, accept: ["difference", "the gap"], hint: "à la différence de = unlike. faire la différence = to make the difference." },
        { id: "fr-u60l3-laressemblance", type: "vocab", front: "la ressemblance", reading: "laressemblance", meaning: "the resemblance", example: { jp: "Il y a une forte ressemblance entre les deux frères.", en: "There's a strong resemblance between the two brothers." }, accept: ["resemblance", "the likeness", "the similarity"], hint: "How alike two things are — from ressembler à. The opposite of la différence." },
        { id: "fr-u60l3-equivalent", type: "vocab", front: "équivalent", reading: "equivalent", meaning: "equivalent", example: { jp: "Un euro est presque équivalent à un dollar.", en: "A euro is almost equivalent to a dollar." }, accept: ["equivalent", "equal", "the same"], hint: "Equal in value or meaning. l'équivalent de = the equivalent of." },
        { id: "fr-u60l3-distinct", type: "vocab", front: "distinct", reading: "distinct", meaning: "distinct", example: { jp: "Ce sont deux problèmes distincts, pas un seul.", en: "These are two distinct problems, not just one." }, accept: ["distinct", "separate", "different"], hint: "Clearly separate — deux idées distinctes. From distinguer." },
        { id: "fr-u60l3-lecontraire", type: "vocab", front: "le contraire", reading: "lecontraire", meaning: "the opposite", example: { jp: "Il dit une chose et fait le contraire.", en: "He says one thing and does the opposite." }, accept: ["opposite", "the contrary", "the reverse"], hint: "au contraire = on the contrary. faire le contraire = to do the opposite." },
      ],
    },
    {
      id: "fr-u60l4",
      unit: 60,
      lesson: 4,
      title: "Framing the comparison",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Set two things side by side: par rapport à, contrairement à, à l'inverse, supérieur.",
      items: [
        { id: "fr-u60l4-parrapporta", type: "vocab", front: "par rapport à", reading: "parrapporta", meaning: "compared to", example: { jp: "Par rapport à l'année dernière, il fait plus froid.", en: "Compared to last year, it's colder now." }, accept: ["compared to", "in relation to", "against"], hint: "The everyday 'compared to'. Also 'in relation to'." },
        { id: "fr-u60l4-contrairementa", type: "vocab", front: "contrairement à", reading: "contrairementa", meaning: "unlike", example: { jp: "Contrairement à son frère, elle aime le sport.", en: "Unlike her brother, she likes sport." }, accept: ["unlike", "contrary to", "in contrast to"], hint: "Marks a contrast with someone or something: contrairement à toi…" },
        { id: "fr-u60l4-alinverse", type: "vocab", front: "à l'inverse", reading: "alinverse", meaning: "conversely", example: { jp: "Il aime la ville ; à l'inverse, elle préfère la campagne.", en: "He likes the city; conversely, she prefers the countryside." }, accept: ["conversely", "the other way round", "on the other hand"], hint: "Flips to the opposite case — like en revanche, pointing the other way." },
        { id: "fr-u60l4-ademe", type: "vocab", front: "de même", reading: "deme", meaning: "likewise", example: { jp: "Il a travaillé tout l'été ; sa sœur a fait de même.", en: "He worked all summer; his sister did likewise." }, accept: ["likewise", "the same", "similarly"], hint: "faire de même = to do likewise. de même que = just as." },
        { id: "fr-u60l4-superieur", type: "vocab", front: "supérieur", reading: "superieur", meaning: "higher", example: { jp: "La température est supérieure à trente degrés.", en: "The temperature is above thirty degrees." }, accept: ["higher", "superior", "above", "upper"], hint: "supérieur à = higher than / above. The opposite is inférieur." },
        { id: "fr-u60l4-inferieur", type: "vocab", front: "inférieur", reading: "inferieur", meaning: "lower", example: { jp: "Un prix inférieur à dix euros, c'est rare ici.", en: "A price below ten euros is rare here." }, drill: { jp: "Le prix est inférieur", en: "The price is lower" }, accept: ["lower", "inferior", "below", "under"], hint: "inférieur à = lower than / below. Also 'inferior' in quality." },
      ],
    },
  ],
};
