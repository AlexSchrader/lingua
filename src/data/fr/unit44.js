// FR Unit 44 — Grammar 5 — conditionals, ability, comparison (slot: grammar-5) — A2
// The three things A1 could not say: what you WOULD do, what you HAVE to do, and
// how two things compare. As in Unit 43, grammar is authored as function-word
// vocab whose examples carry the pattern — no grammar item type.
//
// The conditional is taught as chunks (j'aimerais, je pourrais, ce serait) rather
// than as a paradigm on purpose: the learner already owns je voudrais from A1
// Unit 5, so these land as "more words that end -rais" and the rule can be seen
// before it is stated. Unit 45 then drills the future, which shares the stem.
//
// Ellipsis fronts (plus … que) follow the A1 Unit 21 convention for ne … pas.
// Conventions: see fr/unit1.js. Examples use A1 vocab plus Units 38–43.
export const FR_UNIT44 = {
  id: "fr-u44",
  lang: "fr",
  title: "Un peu de grammaire · 3",
  order: 44,
  stage: "a2",
  lessons: [
    {
      id: "fr-u44l1",
      unit: 44,
      lesson: 1,
      title: "What I would do",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you would like or could do: j'aimerais habiter à Paris, on pourrait aller au cinéma, ce serait bien.",
      items: [
        { id: "fr-u44l1-jaimerais", type: "vocab", front: "j'aimerais", reading: "jaimerais", meaning: "I would like", example: { jp: "J'aimerais habiter à Paris.", en: "I would like to live in Paris." }, accept: ["i'd like", "i would love", "i would like to"], hint: "The polite cousin of j'aime. Same -rais ending as je voudrais (Unit 5) — that ending IS the conditional." },
        { id: "fr-u44l1-jepourrais", type: "vocab", front: "je pourrais", reading: "jepourrais", meaning: "I could", example: { jp: "Je pourrais travailler demain.", en: "I could work tomorrow." }, accept: ["i would be able to", "i might", "i could"] },
        { id: "fr-u44l1-ceserait", type: "vocab", front: "ce serait", reading: "ceserait", meaning: "it would be", example: { jp: "Ce serait très agréable.", en: "That would be very pleasant." }, accept: ["that would be", "it'd be", "this would be"] },
        { id: "fr-u44l1-ilfaudrait", type: "vocab", front: "il faudrait", reading: "ilfaudrait", meaning: "we should", example: { jp: "Il faudrait partir tôt.", en: "We should leave early." }, accept: ["it would be necessary", "one should", "we ought to"], hint: "The soft way to tell someone what to do — il faudrait partir lands far gentler than il faut partir." },
        { id: "fr-u44l1-onpourrait", type: "vocab", front: "on pourrait", reading: "onpourrait", meaning: "we could", example: { jp: "On pourrait aller au cinéma.", en: "We could go to the cinema." }, accept: ["one could", "we might", "we could"], hint: "on pourrait … ? is how a French speaker suggests something." },
        { id: "fr-u44l1-jedevrais", type: "vocab", front: "je devrais", reading: "jedevrais", meaning: "I should", example: { jp: "Je devrais travailler ce soir.", en: "I should work this evening." }, accept: ["i ought to", "i'd better", "i should"] },
      ],
    },
    {
      id: "fr-u44l2",
      unit: 44,
      lesson: 2,
      title: "Have to, need to, manage to",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what's necessary and what you manage: je dois partir, il vaut mieux attendre, je suis capable de le faire.",
      items: [
        { id: "fr-u44l2-jedois", type: "vocab", front: "je dois", reading: "jedois", meaning: "I must", example: { jp: "Je dois partir maintenant.", en: "I must leave now." }, accept: ["i need to", "i've got to"], hint: "The personal version of il faut (Unit 36): il faut partir says it in general, je dois partir says it about me." },
        { id: "fr-u44l2-ilnefautpas", type: "vocab", front: "il ne faut pas", reading: "ilnefautpas", meaning: "you mustn't", example: { jp: "Il ne faut pas arriver tard.", en: "You mustn't arrive late." }, accept: ["one must not", "you must not", "don't"], hint: "Careful: il ne faut pas = you MUSTN'T. It never means \"you don't have to\"." },
        { id: "fr-u44l2-ilvautmieux", type: "vocab", front: "il vaut mieux", reading: "ilvautmieux", meaning: "it's better to", example: { jp: "Il vaut mieux partir tôt.", en: "It's better to leave early." }, accept: ["better to", "you'd better", "it is best to"], hint: "Advice rather than obligation — softer than il faut. il vaut mieux partir = we'd be better off leaving." },
        { id: "fr-u44l2-jereussisa", type: "vocab", front: "je réussis à", reading: "jereussisa", meaning: "I manage to", example: { jp: "Je réussis à comprendre le film.", en: "I manage to understand the film." }, accept: ["i succeed in", "i manage", "i get to"], hint: "réussir À + verb. Without the à it means to pass: je réussis mon examen." },
        { id: "fr-u44l2-jesuisobligede", type: "vocab", front: "je suis obligé de", reading: "jesuisobligede", meaning: "I have to", example: { jp: "Je suis obligé de travailler ce week-end.", en: "I have to work this weekend." }, accept: ["i'm obliged to", "i am forced to", "i'm forced to"], hint: "Stronger than je dois — it says someone else decided." },
        { id: "fr-u44l2-jesuiscapablede", type: "vocab", front: "je suis capable de", reading: "jesuiscapablede", meaning: "I'm able to", example: { jp: "Je suis capable de lire ce livre.", en: "I'm able to read this book." }, accept: ["i am capable of", "i'm capable of"], hint: "About ability, not permission — je peux (Unit 9) covers both, this one only the first." },
      ],
    },
    {
      id: "fr-u44l3",
      unit: 44,
      lesson: 3,
      title: "Comparing two things",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Compare two things: plus grand que, moins cher que, aussi grande que moi — and get meilleur vs mieux right.",
      // mieux itself is taught by block 1's Unit 29; this lesson teaches the
      // adjective meilleur against it and hints the contrast.
      items: [
        { id: "fr-u44l3-plusque", type: "vocab", front: "plus … que", reading: "plusque", meaning: "more … than", example: { jp: "Paris est plus grand que ma ville.", en: "Paris is bigger than my town." }, accept: ["more than", "bigger than", "-er than"], hint: "One pattern for every adjective: plus grand que, plus cher que. French has no \"-er\" ending." },
        { id: "fr-u44l3-moinsque", type: "vocab", front: "moins … que", reading: "moinsque", meaning: "less … than", example: { jp: "Le train est moins cher que l'avion.", en: "The train is less expensive than the plane." }, accept: ["not as as", "fewer than", "less than"] },
        { id: "fr-u44l3-aussique", type: "vocab", front: "aussi … que", reading: "aussique", meaning: "as … as", example: { jp: "Ma sœur est aussi grande que moi.", en: "My sister is as tall as me." }, accept: ["just as as", "equally", "as as"] },
        { id: "fr-u44l3-meilleur", type: "vocab", front: "meilleur", reading: "meilleur", meaning: "better (adjective)", example: { jp: "Ce restaurant est meilleur que le café.", en: "This restaurant is better than the café." }, accept: ["better"], hint: "meilleur describes a NOUN (un meilleur pain); mieux (Unit 29) describes a VERB (je parle mieux). French keeps them apart — English uses \"better\" for both." },
        { id: "fr-u44l3-aussibienque", type: "vocab", front: "aussi bien que", reading: "aussibienque", meaning: "as well as", example: { jp: "Elle parle français aussi bien que moi.", en: "She speaks French as well as I do." }, accept: ["just as well as", "equally well"], hint: "The verb-flavoured twin of aussi … que: that one compares adjectives, this one compares how well something is done." },
        { id: "fr-u44l3-lememe", type: "vocab", front: "le même", reading: "lememe", meaning: "the same", example: { jp: "Nous avons le même professeur.", en: "We have the same teacher." }, accept: ["same", "the same one"], hint: "It agrees like an adjective: la même, les mêmes." },
      ],
    },
    {
      id: "fr-u44l4",
      unit: 44,
      lesson: 4,
      title: "The most and the least",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Pick out the top and the bottom: le plus grand magasin, le meilleur restaurant, le pire jour.",
      items: [
        { id: "fr-u44l4-leplus", type: "vocab", front: "le plus", reading: "leplus", meaning: "the most", example: { jp: "C'est le plus grand magasin de la ville.", en: "It's the biggest shop in town." }, accept: ["most", "the most"], hint: "The superlative is just le/la/les + plus. And it's de la ville, not \"dans la ville\" — French says \"of\"." },
        { id: "fr-u44l4-lemoins", type: "vocab", front: "le moins", reading: "lemoins", meaning: "the least", example: { jp: "C'est le moins cher.", en: "It's the least expensive." }, accept: ["least", "the least"] },
        { id: "fr-u44l4-lemeilleur", type: "vocab", front: "le meilleur", reading: "lemeilleur", meaning: "the best", example: { jp: "C'est le meilleur restaurant de Paris.", en: "It's the best restaurant in Paris." }, accept: ["best", "the best"], hint: "Never \"le plus bon\" — bon has its own superlative, exactly like good → best." },
        { id: "fr-u44l4-lepire", type: "vocab", front: "le pire", reading: "lepire", meaning: "the worst", example: { jp: "C'est le pire jour de la semaine.", en: "It's the worst day of the week." }, accept: ["worst", "the worst"] },
        { id: "fr-u44l4-autantde", type: "vocab", front: "autant de", reading: "autantde", meaning: "as much", example: { jp: "J'ai autant de travail que toi.", en: "I have as much work as you." }, accept: ["as many", "the same amount of", "as much as"], hint: "autant DE + a noun; aussi + an adjective. autant de travail, aussi fatigué." },
        { id: "fr-u44l4-deplusenplus", type: "vocab", front: "de plus en plus", reading: "deplusenplus", meaning: "more and more", example: { jp: "Il y a de plus en plus de voitures.", en: "There are more and more cars." }, accept: ["increasingly", "more and more"], hint: "And its mirror image: de moins en moins, less and less." },
      ],
    },
  ],
};
