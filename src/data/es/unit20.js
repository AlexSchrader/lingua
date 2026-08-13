// ES Unit 20 — Palabras útiles ("Useful words") — A1 COVERAGE (slot: coverage-6)
// Strand D, unit 6 of 6 — the closer. Not a topic: the high-frequency machinery a
// learner needs to stop speaking in single clauses. Connectors, the amount words,
// the question words, and the six abstract nouns that let you talk about anything
// at all (la cosa, la vez, el lugar, la gente, el mundo, la parte).
//
// ⚠️ OWNERSHIP NOTE ON LESSON 3. The question words are shared ground: block 1's
// greetings/self units almost certainly teach ¿qué?, ¿cómo? and ¿dónde? INSIDE
// chunks (¿cómo te llamas?, ¿de dónde eres?, ¿qué tal?), so those three are
// deliberately left to them and are only used here. This lesson takes the six that
// no chunk covers. If a merge shows block 1 headworded any of these six anyway,
// the earlier unit wins and this lesson backfills from ¿qué?, ¿cómo?, ¿dónde?,
// ¿cuántos?, ¿de quién? and ¿cuál de?
// Conventions and the assumed block 1–2 vocabulary: see es/unit12.js.
export const ES_UNIT20 = {
  id: "es-u20",
  lang: "es",
  title: "Palabras útiles",
  order: 20,
  stage: "a1",
  lessons: [
    {
      id: "es-u20l1",
      unit: 20,
      lesson: 1,
      title: "Unir las frases",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Join two ideas into one sentence: quiero un café, pero no tengo dinero; no trabajo porque estoy en Madrid.",
      items: [
        { id: "es-u20l1-porque", type: "vocab", front: "porque", reading: "porque", meaning: "because", example: { jp: "No trabajo hoy porque estoy en Madrid.", en: "I'm not working today because I'm in Madrid." }, accept: ["since", "as", "because"], hint: "One word, no accent: porque = because. Two words with an accent, ¿por qué?, is the question (Lesson 3)." },
        { id: "es-u20l1-cuando", type: "vocab", front: "cuando", reading: "cuando", meaning: "when (joining two ideas)", example: { jp: "Cuando llueve, voy en autobús.", en: "When it rains, I take the bus." }, accept: ["whenever", "when"], hint: "No accent when it joins two ideas; with an accent, ¿cuándo?, it asks the question (Lesson 3)." },
        { id: "es-u20l1-si", type: "vocab", front: "si", reading: "si", meaning: "if", example: { jp: "Voy al parque si hace sol.", en: "I'll go to the park if it's sunny." }, accept: ["whether", "if"], hint: "si without an accent = if. sí with one = yes. The accent is the only difference, and it matters." },
        { id: "es-u20l1-entonces", type: "vocab", front: "entonces", reading: "entonces", meaning: "then", example: { jp: "¿No hay pan? Entonces compro pan.", en: "There's no bread? Then I'll buy some." }, accept: ["so", "in that case", "then"] },
        { id: "es-u20l1-aunque", type: "vocab", front: "aunque", reading: "aunque", meaning: "although", example: { jp: "Trabajo aunque estoy cansado.", en: "I work although I'm tired." }, accept: ["even though","though"] },
        { id: "es-u20l1-ademas", type: "vocab", front: "además", reading: "ademas", meaning: "besides", example: { jp: "Es tarde y además tengo hambre.", en: "It's late and besides I'm hungry." }, accept: ["moreover","also"] },
      ],
    },
    {
      id: "es-u20l2",
      unit: 20,
      lesson: 2,
      title: "Más o menos",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how much: quiero más café, hay demasiado trabajo, solo tengo cinco euros.",
      items: [
        { id: "es-u20l2-mas", type: "vocab", front: "más", reading: "mas", meaning: "more", example: { jp: "Quiero más café, por favor.", en: "I'd like more coffee, please." }, accept: ["most", "extra", "more"], hint: "It also builds comparisons: más grande que = bigger than." },
        { id: "es-u20l2-nada", type: "vocab", front: "nada", reading: "nada", meaning: "nothing", example: { jp: "No tengo nada en el bolso.", en: "I have nothing in my bag." }, accept: ["anything", "at all", "nothing"], hint: "Spanish doubles the negative and it is correct: no tengo nada, literally \"I don't have nothing\". Dropping the no is the mistake, not keeping it." },
        { id: "es-u20l2-demasiado", type: "vocab", front: "demasiado", reading: "demasiado", meaning: "too much", example: { jp: "Hay demasiado trabajo hoy.", en: "There's too much work today." }, accept: ["too", "too many", "too much"] },
        { id: "es-u20l2-bastante", type: "vocab", front: "bastante", reading: "bastante", meaning: "quite", example: { jp: "El piso es bastante grande.", en: "The flat is quite big." }, accept: ["fairly", "enough", "rather"] },
        { id: "es-u20l2-solo", type: "vocab", front: "solo", reading: "solo", meaning: "only", example: { jp: "Solo tengo cinco euros.", en: "I only have five euros." }, accept: ["just", "merely", "only"], hint: "Written without an accent since the 2010 spelling reform. Older books print sólo when it means \"only\"; both are still read the same way." },
      ],
    },
    {
      id: "es-u20l3",
      unit: 20,
      lesson: 3,
      title: "Preguntas",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask the questions a topic word can't cover: ¿quién?, ¿cuándo?, ¿cuánto?, ¿cuál?, ¿por qué?, ¿adónde?",
      items: [
        { id: "es-u20l3-quien", type: "vocab", front: "quién", reading: "quien", meaning: "who", example: { jp: "¿Quién es? — Es María.", en: "Who is it? — It's María." }, accept: ["whom", "who"], hint: "Question words carry an accent, and a Spanish question opens with an upside-down ¿ as well as closing with ?" },
        { id: "es-u20l3-cuando", type: "vocab", front: "cuándo", reading: "cuando", meaning: "when (asking a question)", example: { jp: "¿Cuándo llega el tren?", en: "When does the train arrive?" }, accept: ["what time", "when"], hint: "Accented, because it's the question word. Unaccented cuando (Lesson 1) is the one that joins two ideas." },
        { id: "es-u20l3-cuanto", type: "vocab", front: "cuánto", reading: "cuanto", meaning: "how much", example: { jp: "¿Cuánto cuesta el billete?", en: "How much does the ticket cost?" }, accept: ["how many", "how much"], hint: "\"¿Cuánto cuesta?\" is the question you'll use most in any shop." },
        { id: "es-u20l3-cual", type: "vocab", front: "cuál", reading: "cual", meaning: "which", example: { jp: "¿Cuál es tu nombre?", en: "What's your name?" }, accept: ["what", "which one"], hint: "Where English says \"what is your name / number / address\", Spanish says cuál — it's picking one out of many." },
        { id: "es-u20l3-porque", type: "vocab", front: "por qué", reading: "porque", meaning: "why", example: { jp: "¿Por qué no trabajas hoy?", en: "Why aren't you working today?" }, accept: ["how come", "what for", "why"], hint: "Two words and an accent for the question; one word, porque, for the answer. ¿Por qué? — Porque sí." },
        { id: "es-u20l3-adonde", type: "vocab", front: "adónde", reading: "adonde", meaning: "where to", example: { jp: "¿Adónde vas?", en: "Where are you going?" }, accept: ["to where", "where"], hint: "¿Dónde? asks where something IS; ¿adónde? asks where it's GOING — the a from Unit 13 stuck on the front." },
      ],
    },
    {
      id: "es-u20l4",
      unit: 20,
      lesson: 4,
      title: "Cosas y personas",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about something in general terms when you don't have the exact word: la cosa, la vez, el lugar, la gente.",
      items: [
        { id: "es-u20l4-lacosa", type: "vocab", front: "la cosa", reading: "lacosa", meaning: "the thing", example: { jp: "Tengo muchas cosas en la maleta.", en: "I have a lot of things in my suitcase." }, accept: ["object", "stuff", "thing"], hint: "The word to reach for when you don't know the word: \"esta cosa\", this thing." },
        { id: "es-u20l4-lavez", type: "vocab", front: "la vez", reading: "lavez", meaning: "the time (occasion)", example: { jp: "Voy dos veces por semana.", en: "I go twice a week." }, accept: ["occasion", "instance", "time"], hint: "la vez counts occasions; la hora tells the clock. dos veces = twice, not \"two hours\"." },
        { id: "es-u20l4-ellugar", type: "vocab", front: "el lugar", reading: "ellugar", meaning: "the place", example: { jp: "Es un lugar muy bonito.", en: "It's a very pretty place." }, accept: ["spot", "location", "place"] },
        { id: "es-u20l4-laparte", type: "vocab", front: "la parte", reading: "laparte", meaning: "the part", example: { jp: "Esta parte de la ciudad es nueva.", en: "This part of the city is new." }, accept: ["section", "piece", "part"] },
        { id: "es-u20l4-persona", type: "vocab", front: "la persona", reading: "lapersona", meaning: "person", example: { jp: "Esta persona es mi amiga.", en: "This person is my friend." }, accept: ["the person"] },
        { id: "es-u20l4-grupo", type: "vocab", front: "el grupo", reading: "elgrupo", meaning: "group", example: { jp: "El grupo está en el museo.", en: "The group is at the museum." }, accept: ["the group"] },
      ],
    },
  ],
};
