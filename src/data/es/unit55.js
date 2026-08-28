// ES Unit 55 — Noticias y sociedad (slot: news-society) — B1
// ─────────────────────────────────────────────────────────────────────────────
// A2 (u32) gave the learner society at the level of nouns — la sociedad, el
// gobierno, la ley, el ciudadano, votar, la política. B1 is where they can follow
// and talk about what's happening: the media that reports it, the events
// themselves, and the politics and protest that move a society. This is also the
// first unit whose examples read like real sentences off a news page — longer,
// with a clause of context. Every A2 society word is used and re-taught nowhere;
// examples avoid the subjunctive (indicative + A2 conditional; subjunctive waits for u69-71).
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT55 = {
  id: "es-u55",
  lang: "es",
  title: "Noticias y sociedad",
  order: 55,
  stage: "b1",
  lessons: [
    {
      id: "es-u55l1",
      unit: 55,
      lesson: 1,
      title: "The media",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about where news comes from — la prensa, el periodista, el titular, el reportaje, los medios, publicar.",
      items: [
        { id: "es-u55l1-laprensa", type: "vocab", front: "la prensa", reading: "laprensa", meaning: "the press", example: { jp: "La prensa habló mucho del tema esta semana.", en: "The press talked about the issue a lot this week." }, accept: ["the newspapers", "media"], hint: "Newspapers as a whole, and the journalists in them. La libertad de prensa = freedom of the press." },
        { id: "es-u55l1-elperiodista", type: "vocab", front: "el periodista", reading: "elperiodista", meaning: "journalist", example: { jp: "El periodista hizo muchas preguntas difíciles.", en: "The journalist asked a lot of hard questions." }, accept: ["the reporter"], hint: "From el periódico (A1). Same form for a man or a woman: el/la periodista." },
        { id: "es-u55l1-eltitular", type: "vocab", front: "el titular", reading: "eltitular", meaning: "headline", example: { jp: "El titular del periódico era muy grande hoy.", en: "The newspaper's headline was very big today." }, accept: ["the header"], hint: "The big line at the top of a story. From el título (A2), the title." },
        { id: "es-u55l1-elreportaje", type: "vocab", front: "el reportaje", reading: "elreportaje", meaning: "report", example: { jp: "Vi un reportaje muy interesante sobre el mar.", en: "I saw a very interesting report about the sea." }, accept: ["the feature", "story"], hint: "An in-depth news story on TV or in print — longer than una noticia (A2)." },
        { id: "es-u55l1-losmedios", type: "vocab", front: "los medios", reading: "losmedios", meaning: "the media", example: { jp: "Los medios dan mucha importancia a esa historia.", en: "The media give a lot of importance to that story." }, accept: ["the mass media"], hint: "Short for los medios de comunicación. la importancia is from importante (A2)." },
        { id: "es-u55l1-publicar", type: "vocab", front: "publicar", reading: "publicar", meaning: "to publish", example: { jp: "El periódico publicó la noticia esta mañana.", en: "The newspaper published the news this morning." }, accept: ["to post", "to release"], hint: "To put a story or a book out. From público (A2)." },
      ],
    },
    {
      id: "es-u55l2",
      unit: 55,
      lesson: 2,
      title: "Keeping up",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow what's going on — el suceso, el acontecimiento, la fuente, enterarse, actual, la actualidad.",
      items: [
        { id: "es-u55l2-elsuceso", type: "vocab", front: "el suceso", reading: "elsuceso", meaning: "event", example: { jp: "El suceso ocurrió cerca de mi casa anoche.", en: "The event happened near my house last night." }, accept: ["the incident", "occurrence"], hint: "An event, often a bad one (an accident, a crime). From suceder, to happen. A false friend: NOT \"success\" (that's el éxito)." },
        { id: "es-u55l2-elacontecimiento", type: "vocab", front: "el acontecimiento", reading: "elacontecimiento", meaning: "major event", example: { jp: "El concierto fue el gran acontecimiento del año.", en: "The concert was the big event of the year." }, accept: ["the happening", "occasion"], hint: "A big, notable event — grander than un suceso. el concierto is A2 (u32)." },
        { id: "es-u55l2-lafuente", type: "vocab", front: "la fuente", reading: "lafuente", meaning: "source", example: { jp: "El periodista no quiso decir su fuente.", en: "The journalist wouldn't say his source." }, accept: ["the fountain", "spring"], hint: "The source of information — and also a fountain, or a serving dish. Según fuentes oficiales = according to official sources." },
        { id: "es-u55l2-actual", type: "vocab", front: "actual", reading: "actual", meaning: "current", example: { jp: "La situación actual del país es complicada.", en: "The country's current situation is complicated." }, accept: ["present", "present-day"], hint: "A false friend: actual = current/present, NOT \"actual\" (that's real, u43). la situación, complicada — clear cognates." },
        { id: "es-u55l2-laactualidad", type: "vocab", front: "la actualidad", reading: "laactualidad", meaning: "current affairs", example: { jp: "En la actualidad, mucha gente lee las noticias en el móvil.", en: "Nowadays, a lot of people read the news on their phone." }, accept: ["the present", "the news"], hint: "En la actualidad = nowadays. Also the news of the day as a whole." },
      ],
    },
    {
      id: "es-u55l3",
      unit: 55,
      lesson: 3,
      title: "Politics and society",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the state of a society — el político, las elecciones, la crisis, la pobreza, la igualdad, el conflicto.",
      items: [
        { id: "es-u55l3-elpolitico", type: "vocab", front: "el político", reading: "elpolitico", meaning: "politician", example: { jp: "El político habló de bajar los precios.", en: "The politician talked about lowering prices." }, accept: ["the politician"], hint: "From la política (A2). As an adjective it means \"political\": un problema político." },
        { id: "es-u55l3-laselecciones", type: "vocab", front: "las elecciones", reading: "laselecciones", meaning: "election", example: { jp: "Las elecciones son el próximo mes.", en: "The election is next month." }, accept: ["the elections", "the vote"], hint: "Usually plural in Spanish. From elegir (A2), to choose. Ganar las elecciones = to win the election." },
        { id: "es-u55l3-lacrisis", type: "vocab", front: "la crisis", reading: "lacrisis", meaning: "crisis", example: { jp: "La crisis afectó a muchas familias del pueblo.", en: "The crisis affected many families in the town." }, accept: ["the emergency"], hint: "Same form singular and plural: la crisis, las crisis. afectó is from afectar (u52)." },
        { id: "es-u55l3-laigualdad", type: "vocab", front: "la igualdad", reading: "laigualdad", meaning: "equality", example: { jp: "Mucha gente pide igualdad de derechos para todos.", en: "Many people ask for equal rights for everyone." }, accept: ["the equality"], hint: "From igual (A2), equal. Its opposite is la desigualdad." },
        { id: "es-u55l3-elconflicto", type: "vocab", front: "el conflicto", reading: "elconflicto", meaning: "conflict", example: { jp: "El conflicto de los dos países duró muchos años.", en: "The conflict of the two countries lasted many years." }, accept: ["the dispute", "clash"], hint: "A serious clash — between countries, groups, or ideas. duró is from durar (A2). Un conflicto armado = an armed conflict." },
      ],
    },
    {
      id: "es-u55l4",
      unit: 55,
      lesson: 4,
      title: "Protest and reform",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about people pushing for change — la manifestación, la huelga, protestar, exigir, la reforma, la injusticia.",
      items: [
        { id: "es-u55l4-protestar", type: "vocab", front: "protestar", reading: "protestar", meaning: "to protest", example: { jp: "La gente salió a la calle a protestar por los precios.", en: "People took to the streets to protest about prices." }, accept: ["to complain", "to object"], hint: "protestar POR algo = to protest about. La protesta is the noun." },
        { id: "es-u55l4-lareforma", type: "vocab", front: "la reforma", reading: "lareforma", meaning: "reform", example: { jp: "La nueva reforma cambia muchas leyes.", en: "The new reform changes many laws." }, accept: ["the overhaul", "renovation"], hint: "A change to a system — and also a renovation of a building. Reformar la casa = to do up the house." },
        { id: "es-u55l4-lainjusticia", type: "vocab", front: "la injusticia", reading: "lainjusticia", meaning: "injustice", example: { jp: "Mucha gente protesta contra la injusticia.", en: "Many people protest against injustice." }, accept: ["the unfairness"], hint: "in- (un-) + justicia (justice, from justo, A2). Something deeply unfair." },
      ],
    },
  ],
};
