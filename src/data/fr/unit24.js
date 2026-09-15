// FR Unit 23 — Demain et hier ("Tomorrow and yesterday") — A1 GRAMMAR
// The two tenses A1 actually needs: the near future (aller + infinitive) and the
// passé composé with avoir. Both are taught as patterns built from chunks the
// learner already owns — je vais (Unit 6) and j'ai (Unit 9) — so this is
// assembly, not new machinery. Conventions: see fr/unit1.js.
export const FR_UNIT24 = {
  id: "fr-u24",
  lang: "fr",
  title: "Demain et hier",
  order: 24,
  stage: "a1",
  lessons: [
    {
      id: "fr-u24l1",
      unit: 24,
      lesson: 1,
      title: "What I'm going to do",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about the future with aller + verb: je vais manger, je vais partir, on va voir.",
      items: [
        { id: "fr-u24l1-jevaismanger", type: "vocab", front: "je vais manger", reading: "jevaismanger", meaning: "I'm going to eat", example: { jp: "Ce soir, je vais manger au restaurant.", en: "Tonight, I'm going to eat at the restaurant." }, drill: { jp: "Demain je vais manger à midi", en: "Tomorrow I'm going to eat at noon" }, accept: ["i will eat", "i'll eat"], hint: "The near future is exactly like English: je vais + the plain verb. manger, partir, voir — the dictionary form." },
        { id: "fr-u24l1-manger", type: "vocab", front: "manger", reading: "manger", meaning: "to eat", example: { jp: "J'aime manger avec ma famille.", en: "I like eating with my family." }, drill: { jp: "Je veux manger un gâteau", en: "I want to eat a cake" }, accept: ["eating"], hint: "The infinitive — the form in the dictionary. je mange is \"I eat\"; manger is just \"to eat\"." },
        { id: "fr-u24l1-partir", type: "vocab", front: "partir", reading: "partir", meaning: "to leave", example: { jp: "Je vais partir à huit heures.", en: "I'm going to leave at eight." }, drill: { jp: "On va partir demain matin", en: "We're going to leave tomorrow morning" }, accept: ["leaving", "to go"] },
        { id: "fr-u24l1-voir", type: "vocab", front: "voir", reading: "voir", meaning: "to see", example: { jp: "On va voir un film ce soir.", en: "We're going to see a film tonight." }, drill: { jp: "Je veux voir la mer", en: "I want to see the sea" }, accept: ["seeing"], hint: "le film = the film — one of the free ones." },
        { id: "fr-u24l1-faire", type: "vocab", front: "faire", reading: "faire", meaning: "to do", example: { jp: "Qu'est-ce que tu vas faire demain ?", en: "What are you going to do tomorrow?" }, drill: { jp: "Je vais faire les courses", en: "I'm going to do the shopping" }, accept: ["doing", "to make", "making"] },
        { id: "fr-u24l1-boire", type: "vocab", front: "boire", reading: "boire", meaning: "to drink", example: { jp: "Je vais boire un café.", en: "I'm going to drink a coffee." }, drill: { jp: "On va boire un thé", en: "We're going to drink a tea" }, accept: ["drinking"] },
        { id: "fr-u24l1-lefilm", type: "vocab", front: "le film", reading: "lefilm", meaning: "film", example: { jp: "Le film commence à neuf heures.", en: "The film starts at nine." }, drill: { jp: "Le film est très bon", en: "The film is very good" }, accept: ["the movie", "movie", "the film"] },
      ],
    },
    {
      id: "fr-u24l2",
      unit: 24,
      lesson: 2,
      title: "What I did",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about the past with avoir + past participle: j'ai mangé, j'ai fait, j'ai vu.",
      items: [
        { id: "fr-u24l2-jaimange", type: "vocab", front: "j'ai mangé", reading: "jaimange", meaning: "I ate", example: { jp: "Hier, j'ai mangé au restaurant.", en: "Yesterday, I ate at the restaurant." }, drill: { jp: "Ce matin j'ai mangé du pain", en: "This morning I ate some bread" }, accept: ["i have eaten", "i've eaten", "i did eat"], hint: "The past = j'ai + the participle. For -er verbs just swap -er for -é: manger → mangé. Sounds identical, spelled differently." },
        { id: "fr-u24l2-jaiparle", type: "vocab", front: "j'ai parlé", reading: "jaiparle", meaning: "I spoke", example: { jp: "J'ai parlé avec ma mère hier.", en: "I spoke with my mother yesterday." }, drill: { jp: "Hier j'ai parlé avec Paul", en: "Yesterday I spoke with Paul" }, accept: ["i have spoken", "i talked", "i've talked"] },
        { id: "fr-u24l2-jaitravaille", type: "vocab", front: "j'ai travaillé", reading: "jaitravaille", meaning: "I worked", example: { jp: "J'ai travaillé toute la semaine.", en: "I worked all week." }, drill: { jp: "J'ai travaillé tous les jours", en: "I worked every day" }, accept: ["i have worked", "i've worked"], hint: "toute = all (feminine) — toute la semaine, all week." },
        { id: "fr-u24l2-jaifait", type: "vocab", front: "j'ai fait", reading: "jaifait", meaning: "I did", example: { jp: "J'ai fait les courses ce matin.", en: "I did the shopping this morning." }, drill: { jp: "J'ai fait le dîner hier soir", en: "I made dinner last night" }, accept: ["i have done", "i made", "i've made"], hint: "Irregular: faire → fait, not \"faié\". The common verbs are the irregular ones, as always." },
        { id: "fr-u24l2-jaivu", type: "vocab", front: "j'ai vu", reading: "jaivu", meaning: "I saw", example: { jp: "J'ai vu un beau film hier.", en: "I saw a good film yesterday." }, drill: { jp: "J'ai vu la mer en août", en: "I saw the sea in August" }, accept: ["i have seen", "i've seen"] },
        { id: "fr-u24l2-jaieu", type: "vocab", front: "j'ai eu", reading: "jaieu", meaning: "I had", example: { jp: "J'ai eu froid ce matin.", en: "I was cold this morning." }, drill: { jp: "J'ai eu faim à midi", en: "I was hungry at noon" }, accept: ["i have had", "i've had"], hint: "Pronounced just \"ü\" — three letters, one sound. avoir → eu." },
        { id: "fr-u24l2-jaipris", type: "vocab", front: "j'ai pris", reading: "jaipris", meaning: "I took", example: { jp: "J'ai pris le train à midi.", en: "I took the train at noon." }, drill: { jp: "Hier j'ai pris le bus", en: "Yesterday I took the bus" }, accept: ["i have taken", "i've taken"] },
      ],
    },
    {
      id: "fr-u24l3",
      unit: 24,
      lesson: 3,
      title: "Going and coming, in the past",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the être verbs of the past: je suis allé, je suis parti, je suis venu, je suis resté.",
      items: [
        { id: "fr-u24l3-jesuisalle", type: "vocab", front: "je suis allé", reading: "jesuisalle", meaning: "I went", example: { jp: "Hier, je suis allé à Paris.", en: "Yesterday, I went to Paris." }, drill: { jp: "Je suis allé au marché ce matin", en: "I went to the market this morning" }, accept: ["i have gone", "i've been", "i did go"], hint: "A small set of verbs — mostly coming and going — use être instead of avoir in the past. Learn them as chunks." },
        { id: "fr-u24l3-jesuisparti", type: "vocab", front: "je suis parti", reading: "jesuisparti", meaning: "I left", example: { jp: "Je suis parti très tôt ce matin.", en: "I left very early this morning." }, drill: { jp: "Je suis parti à huit heures", en: "I left at eight o'clock" }, accept: ["i have left", "i've left"] },
        { id: "fr-u24l3-jesuisvenu", type: "vocab", front: "je suis venu", reading: "jesuisvenu", meaning: "I came", example: { jp: "Je suis venu avec ma sœur.", en: "I came with my sister." }, drill: { jp: "Je suis venu en train", en: "I came by train" }, accept: ["i have come", "i've come"] },
        { id: "fr-u24l3-jesuisreste", type: "vocab", front: "je suis resté", reading: "jesuisreste", meaning: "I stayed", example: { jp: "Il a plu, donc je suis resté à la maison.", en: "It rained, so I stayed home." }, drill: { jp: "Je suis resté au lit hier", en: "I stayed in bed yesterday" }, accept: ["i have stayed", "i've stayed", "i remained"], hint: "donc = so, therefore. il a plu = it rained." },
        { id: "fr-u24l3-donc", type: "vocab", front: "donc", reading: "donc", meaning: "so", example: { jp: "Il fait froid, donc je mets un manteau.", en: "It's cold, so I'm putting on a coat." }, drill: { jp: "Il pleut donc je reste ici", en: "It's raining so I'm staying here" }, accept: ["therefore", "thus"] },
        { id: "fr-u24l3-deja", type: "vocab", front: "déjà", reading: "deja", meaning: "already", example: { jp: "J'ai déjà mangé, merci.", en: "I've already eaten, thank you." }, drill: { jp: "J'ai déjà vu ce film", en: "I've already seen this film" }, accept: ["yet", "before"], hint: "Sits between the two halves: j'ai déjà mangé, je n'ai pas encore mangé." },
        { id: "fr-u24l3-lasemainederniere", type: "vocab", front: "la semaine dernière", reading: "lasemainederniere", meaning: "last week", example: { jp: "La semaine dernière, j'ai travaillé beaucoup.", en: "Last week, I worked a lot." }, drill: { jp: "La semaine dernière j'ai vu Paul", en: "Last week I saw Paul" }, accept: ["the last week", "previous week"], hint: "dernier/dernière = last. And prochain = next: la semaine prochaine." },
      ],
    },
  ],
};
