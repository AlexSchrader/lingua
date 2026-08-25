// ES Unit 32 — La sociedad (slot: society) — A2
// A1 taught the learner's own small world — familia, casa, ciudad, trabajo. This
// unit steps out to the shared one: the community, the rules that hold it, how
// people learn what's happening, and the words for talking about society in
// general rather than one's own day. Nothing here is more than A2 needs — it is
// the vocabulary to read a headline and have an opinion about it, not to write
// the law. Every noun keeps its article; examples lean on A1 vocab plus this unit.
//   FREE: importante
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT32 = {
  id: "es-u32",
  lang: "es",
  title: "La sociedad",
  order: 32,
  stage: "a2",
  lessons: [
    {
      id: "es-u32l1",
      unit: 32,
      lesson: 1,
      title: "The wider community",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the community around you — la sociedad, la comunidad, el gobierno, público, el pueblo, el vecino.",
      items: [
        { id: "es-u32l1-lasociedad", type: "vocab", front: "la sociedad", reading: "lasociedad", meaning: "society", example: { jp: "La sociedad tiene muchos problemas.", en: "Society has many problems." }, accept: ["the society", "community"], hint: "Same -dad = -ty ending as ciudad, universidad. Also the word for a business \"company\" on a sign." },
        { id: "es-u32l1-lacomunidad", type: "vocab", front: "la comunidad", reading: "lacomunidad", meaning: "community", example: { jp: "Vivo en una comunidad pequeña.", en: "I live in a small community." }, accept: ["the community"], hint: "The people you share a place with. In Spain a región is also una comunidad." },
        { id: "es-u32l1-elgobierno", type: "vocab", front: "el gobierno", reading: "elgobierno", meaning: "government", example: { jp: "El gobierno abre una escuela nueva.", en: "The government is opening a new school." }, accept: ["the government"], hint: "From gobernar, to govern. The b is soft — \"go-BYER-no\"." },
        { id: "es-u32l1-publico", type: "vocab", front: "público", reading: "publico", meaning: "public", example: { jp: "El autobús público es barato aquí.", en: "The public bus is cheap here." }, accept: ["state", "open to all"], hint: "The opposite is privado. El público is also \"the audience\"." },
        { id: "es-u32l1-elciudadano", type: "vocab", front: "el ciudadano", reading: "elciudadano", meaning: "citizen", example: { jp: "Todo ciudadano tiene los mismos derechos.", en: "Every citizen has the same rights." }, accept: ["the citizen", "national"], hint: "The person of a ciudad — a city-dweller became the word for a citizen of the whole country." },
      ],
    },
    {
      id: "es-u32l2",
      unit: 32,
      lesson: 2,
      title: "Rights and rules",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Discuss rights and rules simply — la ley, el derecho, libre, la libertad, la política, votar.",
      items: [
        { id: "es-u32l2-laley", type: "vocab", front: "la ley", reading: "laley", meaning: "law", example: { jp: "La ley es la misma para todos.", en: "The law is the same for everyone." }, accept: ["the law", "rule"], hint: "Plural adds -es: una ley, dos leyes." },
        { id: "es-u32l2-elderecho", type: "vocab", front: "el derecho", reading: "elderecho", meaning: "right", example: { jp: "Todos tienen derecho a un trabajo.", en: "Everyone has a right to a job." }, accept: ["the right", "law (as a subject)"], hint: "A right you hold — and, confusingly, also \"straight\" and \"the right side\" (block 1, u23). Same word, three jobs." },
        { id: "es-u32l2-libre", type: "vocab", front: "libre", reading: "libre", meaning: "free", example: { jp: "Soy libre de hacer lo que quiero.", en: "I'm free to do what I want." }, accept: ["available", "at liberty"], hint: "Free as in not tied down — not free of charge (that's gratis). A table with no one at it is also libre." },
        { id: "es-u32l2-lalibertad", type: "vocab", front: "la libertad", reading: "lalibertad", meaning: "freedom", example: { jp: "La libertad es muy importante.", en: "Freedom is very important." }, accept: ["the freedom", "liberty"], hint: "The noun from libre. The New York statue is la Estatua de la Libertad." },
        { id: "es-u32l2-lapolitica", type: "vocab", front: "la política", reading: "lapolitica", meaning: "politics", example: { jp: "No me gusta hablar de política.", en: "I don't like talking about politics." }, accept: ["the politics", "policy"], hint: "Both \"politics\" and \"a policy\" — and, with an -o, el político is a politician." },
        { id: "es-u32l2-votar", type: "vocab", front: "votar", reading: "votar", meaning: "to vote", example: { jp: "Mis padres siempre votan.", en: "My parents always vote." }, accept: ["to cast a vote"], hint: "The noun is el voto. A near-twin of the English word, easy to keep." },
      ],
    },
    {
      id: "es-u32l3",
      unit: 32,
      lesson: 3,
      title: "News and what's happening",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Follow the news at a basic level — la noticia, el periódico, la revista, el tema, informar, ocurrir.",
      items: [
        { id: "es-u32l3-lanoticia", type: "vocab", front: "la noticia", reading: "lanoticia", meaning: "news item", example: { jp: "Es una buena noticia para la ciudad.", en: "It's good news for the city." }, accept: ["the news", "piece of news", "news"], hint: "One piece of news. \"The news\" on TV is the plural: las noticias." },
        { id: "es-u32l3-elperiodico", type: "vocab", front: "el periódico", reading: "elperiodico", meaning: "newspaper", example: { jp: "Leo el periódico por la mañana.", en: "I read the newspaper in the morning." }, accept: ["the newspaper", "paper"], hint: "Something that comes out periódicamente — periodically. Also called el diario, the daily." },
        { id: "es-u32l3-larevista", type: "vocab", front: "la revista", reading: "larevista", meaning: "magazine", example: { jp: "Compro una revista para el tren.", en: "I buy a magazine for the train." }, accept: ["the magazine", "journal"], hint: "Literally a \"re-view\" — you look again. Nothing to do with the English \"revisit\" in meaning." },
        { id: "es-u32l3-eltema", type: "vocab", front: "el tema", reading: "eltema", meaning: "topic", example: { jp: "Es un tema muy importante hoy.", en: "It's a very important topic today." }, accept: ["the topic", "subject", "theme", "issue"], hint: "Masculine despite the -a: el tema, este tema — one of a small Greek-rooted group (el problema, el mapa)." },
        { id: "es-u32l3-informar", type: "vocab", front: "informar", reading: "informar", meaning: "to inform", example: { jp: "El periódico informa sobre el gobierno.", en: "The newspaper reports on the government." }, accept: ["to report", "to tell"], hint: "Reflexive it means to find out: me informo, I get informed. La información is the news itself." },
        { id: "es-u32l3-ocurrir", type: "vocab", front: "ocurrir", reading: "ocurrir", meaning: "to happen", example: { jp: "¿Qué ocurre en la plaza?", en: "What's happening in the square?" }, accept: ["to occur", "to take place", "to go on"], hint: "A close twin of pasar (what's going on) — ocurrir leans a touch more formal, the word a news report uses." },
      ],
    },
    {
      id: "es-u32l4",
      unit: 32,
      lesson: 4,
      title: "How things usually go",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Generalise about everyday life — normal, la mayoría, soler, tratar de, depender, sobre.",
      items: [
        { id: "es-u32l4-normal", type: "vocab", front: "normal", reading: "normal", meaning: "normal", example: { jp: "Es normal estar cansado el lunes.", en: "It's normal to be tired on Monday." }, accept: ["usual", "ordinary"], hint: "Es normal que… is how Spanish shrugs off the everyday. Plural: normales." },
        { id: "es-u32l4-lamayoria", type: "vocab", front: "la mayoría", reading: "lamayoria", meaning: "the majority", example: { jp: "La mayoría de la gente trabaja aquí.", en: "Most people work here." }, accept: ["most", "the most of", "the majority of"], hint: "La mayoría de + a noun = \"most of\". Built on mayor, bigger/older." },
        { id: "es-u32l4-soler", type: "vocab", front: "soler", reading: "soler", meaning: "to usually do", example: { jp: "Suelo desayunar a las siete.", en: "I usually have breakfast at seven." }, accept: ["to tend to", "to be used to doing", "usually"], hint: "There's no English verb for it: suelo + verb = \"I usually…\". Only used in the present and the imperfect." },
        { id: "es-u32l4-tratarde", type: "vocab", front: "tratar de", reading: "tratarde", meaning: "to try to", example: { jp: "Trato de comer bien todos los días.", en: "I try to eat well every day." }, accept: ["to attempt to", "to try", "to deal with"], hint: "tratar de + verb = try to. On its own, ¿De qué trata? = What's it about?" },
        { id: "es-u32l4-depender", type: "vocab", front: "depender", reading: "depender", meaning: "to depend", example: { jp: "Depende del día y del tiempo.", en: "It depends on the day and the weather." }, accept: ["to rely", "to be up to"], hint: "Depender DE something. Depende. on its own is a whole answer — \"it depends\"." },
        { id: "es-u32l4-sobre", type: "vocab", front: "sobre", reading: "sobre", meaning: "about", example: { jp: "Es un libro sobre la vida de un hombre.", en: "It's a book about a man's life." }, accept: ["on", "over", "regarding"], hint: "\"About\" a topic, and also physically \"on top of\". Block 1's sobre todo (u22) is \"above all\" — same word." },
      ],
    },
  ],
};
