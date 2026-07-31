// FR Unit 23 — Demain et hier ("Tomorrow and yesterday") — A1 GRAMMAR
// The two tenses A1 actually needs: the near future (aller + infinitive) and the
// passé composé with avoir. Both are taught as patterns built from chunks the
// learner already owns — je vais (Unit 6) and j'ai (Unit 9) — so this is
// assembly, not new machinery. Conventions: see fr/unit1.js.
export const FR_UNIT23 = {
  id: "fr-u23",
  lang: "fr",
  title: "Demain et hier",
  order: 24,
  stage: "a1",
  lessons: [
    {
      id: "fr-u23l1",
      unit: 23,
      lesson: 1,
      title: "What I'm going to do",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about the future with aller + verb: je vais manger, je vais partir, on va voir.",
      items: [
        { id: "fr-u23l1-jevaismanger", type: "vocab", front: "je vais manger", reading: "jevaismanger", meaning: "I'm going to eat", example: { jp: "Ce soir, je vais manger au restaurant.", en: "Tonight, I'm going to eat at the restaurant." }, accept: ["i will eat", "i'll eat"], hint: "The near future is exactly like English: je vais + the plain verb. manger, partir, voir — the dictionary form." },
        { id: "fr-u23l1-manger", type: "vocab", front: "manger", reading: "manger", meaning: "to eat", example: { jp: "J'aime manger avec mes amis.", en: "I like eating with my friends." }, accept: ["eating"], hint: "The infinitive — the form in the dictionary. je mange is \"I eat\"; manger is just \"to eat\"." },
        { id: "fr-u23l1-partir", type: "vocab", front: "partir", reading: "partir", meaning: "to leave", example: { jp: "Je vais partir à huit heures.", en: "I'm going to leave at eight." }, accept: ["leaving", "to go"] },
        { id: "fr-u23l1-voir", type: "vocab", front: "voir", reading: "voir", meaning: "to see", example: { jp: "On va voir un film ce soir.", en: "We're going to see a film tonight." }, accept: ["seeing"], hint: "le film = the film — one of the free ones." },
        { id: "fr-u23l1-faire", type: "vocab", front: "faire", reading: "faire", meaning: "to do", example: { jp: "Qu'est-ce que tu vas faire demain ?", en: "What are you going to do tomorrow?" }, accept: ["doing", "to make", "making"] },
        { id: "fr-u23l1-boire", type: "vocab", front: "boire", reading: "boire", meaning: "to drink", example: { jp: "Je vais boire un café.", en: "I'm going to drink a coffee." }, accept: ["drinking"] },
        { id: "fr-u23l1-lefilm", type: "vocab", front: "le film", reading: "lefilm", meaning: "film", example: { jp: "Le film commence à neuf heures.", en: "The film starts at nine." }, accept: ["the movie", "movie", "the film"] },
      ],
    },
    {
      id: "fr-u23l2",
      unit: 23,
      lesson: 2,
      title: "What I did",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about the past with avoir + past participle: j'ai mangé, j'ai fait, j'ai vu.",
      items: [
        { id: "fr-u23l2-jaimange", type: "vocab", front: "j'ai mangé", reading: "jaimange", meaning: "I ate", example: { jp: "Hier, j'ai mangé au restaurant.", en: "Yesterday, I ate at the restaurant." }, accept: ["i have eaten", "i've eaten", "i did eat"], hint: "The past = j'ai + the participle. For -er verbs just swap -er for -é: manger → mangé. Sounds identical, spelled differently." },
        { id: "fr-u23l2-jaiparle", type: "vocab", front: "j'ai parlé", reading: "jaiparle", meaning: "I spoke", example: { jp: "J'ai parlé avec ma mère hier.", en: "I spoke with my mother yesterday." }, accept: ["i have spoken", "i talked", "i've talked"] },
        { id: "fr-u23l2-jaitravaille", type: "vocab", front: "j'ai travaillé", reading: "jaitravaille", meaning: "I worked", example: { jp: "J'ai travaillé toute la semaine.", en: "I worked all week." }, accept: ["i have worked", "i've worked"], hint: "toute = all (feminine) — toute la semaine, all week." },
        { id: "fr-u23l2-jaifait", type: "vocab", front: "j'ai fait", reading: "jaifait", meaning: "I did", example: { jp: "J'ai fait les courses ce matin.", en: "I did the shopping this morning." }, accept: ["i have done", "i made", "i've made"], hint: "Irregular: faire → fait, not \"faié\". The common verbs are the irregular ones, as always." },
        { id: "fr-u23l2-jaivu", type: "vocab", front: "j'ai vu", reading: "jaivu", meaning: "I saw", example: { jp: "J'ai vu un beau film hier.", en: "I saw a good film yesterday." }, accept: ["i have seen", "i've seen"] },
        { id: "fr-u23l2-jaieu", type: "vocab", front: "j'ai eu", reading: "jaieu", meaning: "I had", example: { jp: "J'ai eu froid ce matin.", en: "I was cold this morning." }, accept: ["i have had", "i've had"], hint: "Pronounced just \"ü\" — three letters, one sound. avoir → eu." },
        { id: "fr-u23l2-jaipris", type: "vocab", front: "j'ai pris", reading: "jaipris", meaning: "I took", example: { jp: "J'ai pris le train à midi.", en: "I took the train at noon." }, accept: ["i have taken", "i've taken"] },
      ],
    },
    {
      id: "fr-u23l3",
      unit: 23,
      lesson: 3,
      title: "Going and coming, in the past",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the être verbs of the past: je suis allé, je suis parti, je suis venu, je suis resté.",
      items: [
        { id: "fr-u23l3-jesuisalle", type: "vocab", front: "je suis allé", reading: "jesuisalle", meaning: "I went", example: { jp: "Hier, je suis allé à Paris.", en: "Yesterday, I went to Paris." }, accept: ["i have gone", "i've been", "i did go"], hint: "A small set of verbs — mostly coming and going — use être instead of avoir in the past. Learn them as chunks." },
        { id: "fr-u23l3-jesuisparti", type: "vocab", front: "je suis parti", reading: "jesuisparti", meaning: "I left", example: { jp: "Je suis parti très tôt ce matin.", en: "I left very early this morning." }, accept: ["i have left", "i've left"] },
        { id: "fr-u23l3-jesuisvenu", type: "vocab", front: "je suis venu", reading: "jesuisvenu", meaning: "I came", example: { jp: "Je suis venu avec ma sœur.", en: "I came with my sister." }, accept: ["i have come", "i've come"] },
        { id: "fr-u23l3-jesuisreste", type: "vocab", front: "je suis resté", reading: "jesuisreste", meaning: "I stayed", example: { jp: "Il a plu, donc je suis resté à la maison.", en: "It rained, so I stayed home." }, accept: ["i have stayed", "i've stayed", "i remained"], hint: "donc = so, therefore. il a plu = it rained." },
        { id: "fr-u23l3-donc", type: "vocab", front: "donc", reading: "donc", meaning: "so", example: { jp: "Il fait froid, donc je mets un manteau.", en: "It's cold, so I'm putting on a coat." }, accept: ["therefore", "thus"] },
        { id: "fr-u23l3-deja", type: "vocab", front: "déjà", reading: "deja", meaning: "already", example: { jp: "J'ai déjà mangé, merci.", en: "I've already eaten, thank you." }, accept: ["yet", "before"], hint: "Sits between the two halves: j'ai déjà mangé, je n'ai pas encore mangé." },
        { id: "fr-u23l3-lasemainederniere", type: "vocab", front: "la semaine dernière", reading: "lasemainederniere", meaning: "last week", example: { jp: "La semaine dernière, j'ai travaillé beaucoup.", en: "Last week, I worked a lot." }, accept: ["the last week", "previous week"], hint: "dernier/dernière = last. And prochain = next: la semaine prochaine." },
      ],
    },
  ],
};
