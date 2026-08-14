// FR Unit 39 — Society and daily life (slot: society) — A2
// SCOPE BOUNDARY (deliberate): the "daily life" half of this slot is deliberately
// thin, because block 1 owns the domestic detail — activities/routine (Unit 28),
// work and school (31), shopping and money (34), home (37). What is left, and
// what A1 never touched, is the PUBLIC side of life: how a country is organised,
// where people live, how they hear about things, and the rules they live under.
// Conventions: see fr/unit1.js. Examples use A1 vocab (Units 1–27) plus Unit 38.
export const FR_UNIT39 = {
  id: "fr-u39",
  lang: "fr",
  title: "La vie en société",
  order: 39,
  stage: "a2",
  lessons: [
    {
      id: "fr-u39l1",
      unit: 39,
      lesson: 1,
      title: "How a country works",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a country's public life: la société, le gouvernement, la loi, le président.",
      items: [
        { id: "fr-u39l1-lasociete", type: "vocab", front: "la société", reading: "lasociete", meaning: "society", example: { jp: "Dans notre société, tout le monde travaille.", en: "In our society, everybody works." }, accept: ["the society", "community", "company"], hint: "Also a company in the business sense — une société française." },
        { id: "fr-u39l1-legouvernement", type: "vocab", front: "le gouvernement", reading: "legouvernement", meaning: "the government", example: { jp: "Le gouvernement est à Paris.", en: "The government is in Paris." }, accept: ["government", "the state"] },
        { id: "fr-u39l1-laloi", type: "vocab", front: "la loi", reading: "laloi", meaning: "the law", example: { jp: "Il y a une nouvelle loi en France.", en: "There's a new law in France." }, accept: ["law", "rule", "the law"] },
        { id: "fr-u39l1-lecitoyen", type: "vocab", front: "le citoyen", reading: "lecitoyen", meaning: "the citizen", example: { jp: "Les citoyens ne sont pas contents.", en: "The citizens aren't happy." }, accept: ["citizen", "the citizen"], hint: "La citoyenne for a woman." },
        { id: "fr-u39l1-lapolitique", type: "vocab", front: "la politique", reading: "lapolitique", meaning: "politics", example: { jp: "Mon père parle beaucoup de politique.", en: "My father talks about politics a lot." }, accept: ["policy", "the politics", "the policy"], hint: "One word for both: la politique = politics, and also a policy." },
        { id: "fr-u39l1-lepresident", type: "vocab", front: "le président", reading: "lepresident", meaning: "the president", example: { jp: "Le président habite à Paris.", en: "The president lives in Paris." }, accept: ["president", "chairman", "the president"] },
      ],
    },
    {
      id: "fr-u39l2",
      unit: 39,
      lesson: 2,
      title: "Where people live",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say where someone lives beyond the street address: un quartier agréable, un petit village, en banlieue.",
      items: [
        { id: "fr-u39l2-lequartier", type: "vocab", front: "le quartier", reading: "lequartier", meaning: "the neighbourhood", example: { jp: "J'habite dans un quartier très agréable.", en: "I live in a very pleasant neighbourhood." }, accept: ["neighborhood", "district", "area", "the neighborhood"] },
        { id: "fr-u39l2-levillage", type: "vocab", front: "le village", reading: "levillage", meaning: "the village", example: { jp: "Mes parents habitent dans un petit village.", en: "My parents live in a small village." }, accept: ["village", "the village"] },
        { id: "fr-u39l2-labanlieue", type: "vocab", front: "la banlieue", reading: "labanlieue", meaning: "the suburbs", example: { jp: "Ma sœur habite en banlieue.", en: "My sister lives in the suburbs." }, accept: ["suburb", "the suburbs", "outskirts"], hint: "en banlieue, no article — the ring of towns around a city." },
        { id: "fr-u39l2-lecentreville", type: "vocab", front: "le centre-ville", reading: "lecentreville", meaning: "the town centre", example: { jp: "La gare est au centre-ville.", en: "The station is in the town centre." }, accept: ["town center", "city centre", "city center", "downtown"] },
        { id: "fr-u39l2-lhabitant", type: "vocab", front: "l'habitant", reading: "lhabitant", meaning: "the inhabitant", example: { jp: "Ce village a cent habitants.", en: "This village has a hundred inhabitants." }, accept: ["inhabitant", "resident", "the resident"], hint: "Straight from habiter (Unit 9) — someone who lives there." },
        { id: "fr-u39l2-lapopulation", type: "vocab", front: "la population", reading: "lapopulation", meaning: "the population", example: { jp: "La population de Paris est très importante.", en: "The population of Paris is very large." }, accept: ["population", "the people"] },
      ],
    },
    {
      id: "fr-u39l3",
      unit: 39,
      lesson: 3,
      title: "News and information",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about following the news: je lis le journal, je regarde les informations, j'ai une bonne nouvelle.",
      items: [
        { id: "fr-u39l3-lejournal", type: "vocab", front: "le journal", reading: "lejournal", meaning: "the newspaper", example: { jp: "Je lis le journal le matin.", en: "I read the newspaper in the morning." }, accept: ["newspaper", "paper", "the paper", "diary"], hint: "Also the TV news — le journal de vingt heures, the eight o'clock news." },
        { id: "fr-u39l3-lesinformations", type: "vocab", front: "les informations", reading: "lesinformations", meaning: "the news", example: { jp: "Mes parents regardent les informations à huit heures.", en: "My parents watch the news at eight." }, accept: ["news", "the information", "information"], hint: "In speech everyone shortens it: les infos." },
        { id: "fr-u39l3-lanouvelle", type: "vocab", front: "la nouvelle", reading: "lanouvelle", meaning: "the piece of news", example: { jp: "J'ai une bonne nouvelle !", en: "I have good news!" }, accept: ["piece of news", "a piece of news", "item of news"], hint: "Careful: la nouvelle (an item of news) is spelled like nouvelle (new, feminine). Same word, two jobs." },
        { id: "fr-u39l3-laradio", type: "vocab", front: "la radio", reading: "laradio", meaning: "the radio", example: { jp: "J'écoute la radio dans la voiture.", en: "I listen to the radio in the car." }, accept: ["radio", "the radio"] },
        { id: "fr-u39l3-larticle", type: "vocab", front: "l'article", reading: "larticle", meaning: "the article", example: { jp: "Il y a un article sur Paris dans le journal.", en: "There's an article about Paris in the newspaper." }, accept: ["article", "piece", "the article"] },
        { id: "fr-u39l3-levenement", type: "vocab", front: "l'événement", reading: "levenement", meaning: "the event", example: { jp: "C'est un grand événement pour la ville.", en: "It's a big event for the town." }, accept: ["event", "occasion", "the event"] },
      ],
    },
    {
      id: "fr-u39l4",
      unit: 39,
      lesson: 4,
      title: "Problems and rules",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Raise a problem and its solution: il y a un problème, j'ai trouvé une solution, c'est la règle.",
      items: [
        { id: "fr-u39l4-lavie", type: "vocab", front: "la vie", reading: "lavie", meaning: "life", example: { jp: "La vie à Paris est chère.", en: "Life in Paris is expensive." }, accept: ["the life", "living"] },
        { id: "fr-u39l4-leprobleme", type: "vocab", front: "le problème", reading: "leprobleme", meaning: "the problem", example: { jp: "Il y a un problème avec ma carte.", en: "There's a problem with my card." }, accept: ["problem", "issue", "trouble"] },
        { id: "fr-u39l4-lasolution", type: "vocab", front: "la solution", reading: "lasolution", meaning: "the solution", example: { jp: "J'ai trouvé une solution.", en: "I've found a solution." }, accept: ["solution", "answer", "the answer"] },
        { id: "fr-u39l4-laregle", type: "vocab", front: "la règle", reading: "laregle", meaning: "the rule", example: { jp: "Il y a une règle très importante ici.", en: "There's a very important rule here." }, accept: ["rule", "regulation", "ruler"], hint: "Also the ruler you draw a line with — same object, same word." },
        { id: "fr-u39l4-leservice", type: "vocab", front: "le service", reading: "leservice", meaning: "the service", example: { jp: "Dans ce restaurant, le service est très bon.", en: "In this restaurant the service is very good." }, accept: ["service", "favour", "favor"] },
        { id: "fr-u39l4-ledroit", type: "vocab", front: "le droit", reading: "ledroit", meaning: "the right", example: { jp: "Tout le monde a le droit de parler.", en: "Everyone has the right to speak." }, accept: ["right", "law", "entitlement"], hint: "Careful: le droit = a right (and law as a subject). à droite (Unit 6) = to the right. Same root, different word." },
      ],
    },
  ],
};
