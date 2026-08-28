// ES Unit 58 — Ideas abstractas (slot: abstract-ideas) — B1
// ─────────────────────────────────────────────────────────────────────────────
// This is the unit that most marks the jump from A2 to B1: the vocabulary for
// talking about ideas themselves, not just concrete things. A2 could name a
// table; B1 names a concept, a theory, a value, a belief. These words are the
// tools the opinion and argument units (u51-52) actually run on. Examples get
// abstract but avoid the subjunctive, and lean on the concrete A2 vocabulary to stay
// grounded. Nothing A2 taught (el sentido, el pensamiento, la mente, la verdad)
// is re-taught; it's all used in examples.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT58 = {
  id: "es-u58",
  lang: "es",
  title: "Ideas abstractas",
  order: 58,
  stage: "b1",
  lessons: [
    {
      id: "es-u58l1",
      unit: 58,
      lesson: 1,
      title: "Concepts and meaning",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about ideas as things — el concepto, la teoría, el significado, la noción, abstracto, concreto.",
      items: [
        { id: "es-u58l1-elsignificado", type: "vocab", front: "el significado", reading: "elsignificado", meaning: "meaning", example: { jp: "No conozco el significado de esta palabra.", en: "I don't know the meaning of this word." }, accept: ["the sense", "definition"], hint: "The meaning of a word or sign. From significar, to mean. Near el sentido (A2), but el significado is the dictionary meaning." },
        { id: "es-u58l1-lanocion", type: "vocab", front: "la noción", reading: "lanocion", meaning: "notion", example: { jp: "Tengo una noción básica del tema, nada más.", en: "I have a basic notion of the subject, nothing more." }, accept: ["the idea", "grasp"], hint: "A rough idea or basic grasp. No tengo ni noción = I have no clue. básica is a clear cognate." },
        { id: "es-u58l1-abstracto", type: "vocab", front: "abstracto", reading: "abstracto", meaning: "abstract", example: { jp: "Es una idea muy abstracta, difícil de explicar.", en: "It's a very abstract idea, hard to explain." }, accept: ["theoretical"], hint: "The opposite of the next card, concreto. El arte abstracto = abstract art." },
        { id: "es-u58l1-concreto", type: "vocab", front: "concreto", reading: "concreto", meaning: "concrete", example: { jp: "Necesito un ejemplo concreto, no una idea general.", en: "I need a concrete example, not a general idea." }, accept: ["specific", "particular"], hint: "Real and specific — the opposite of abstracto. En concreto = specifically." },
        { id: "es-u58l1-eltermino", type: "vocab", front: "el término", reading: "eltermino", meaning: "the term (word)", example: { jp: "No conozco el significado de ese término técnico.", en: "I don't know the meaning of that technical term." }, accept: ["the term", "the word", "the expression"], hint: "A word used with a precise sense: un término técnico. En términos generales = broadly speaking." },
        { id: "es-u58l1-ladefinicion", type: "vocab", front: "la definición", reading: "ladefinicion", meaning: "the definition", example: { jp: "La definición del diccionario no ayuda mucho en este caso.", en: "The dictionary definition doesn't help much in this case." }, accept: ["the definition"], hint: "Pairs with el significado, the first card here: el significado is what a word means, la definición is how you state it." },
      ],
    },
    {
      id: "es-u58l2",
      unit: 58,
      lesson: 2,
      title: "Truth and logic",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what's real and reasoned — la realidad, la certeza, la lógica, lógico, la esencia, el principio.",
      items: [
        { id: "es-u58l2-larealidad", type: "vocab", front: "la realidad", reading: "larealidad", meaning: "reality", example: { jp: "En realidad, el problema es más simple de lo que parece.", en: "In reality, the problem is simpler than it seems." }, accept: ["the truth", "fact"], hint: "En realidad = actually/in fact — the everyday phrase. From real (A2). simple is a clear cognate." },
        { id: "es-u58l2-lacerteza", type: "vocab", front: "la certeza", reading: "lacerteza", meaning: "certainty", example: { jp: "No tengo ninguna certeza sobre esto todavía.", en: "I don't have any certainty about this yet." }, accept: ["the sureness"], hint: "From cierto (A2). Con certeza = for certain. The opposite of la duda." },
        { id: "es-u58l2-lalogica", type: "vocab", front: "la lógica", reading: "lalogica", meaning: "logic", example: { jp: "Tu argumento no tiene ninguna lógica.", en: "Your argument has no logic at all." }, accept: ["the reasoning"], hint: "No tiene lógica = it makes no sense. Pairs with el argumento (u51)." },
        { id: "es-u58l2-logico", type: "vocab", front: "lógico", reading: "logico", meaning: "logical", example: { jp: "Es lógico estar cansado después de tanto trabajo.", en: "It's logical to be tired after so much work." }, accept: ["reasonable", "natural"], hint: "The adjective from la lógica. Lo lógico sería… = the logical thing would be…" },
        { id: "es-u58l2-laesencia", type: "vocab", front: "la esencia", reading: "laesencia", meaning: "essence", example: { jp: "La esencia del problema es siempre la misma.", en: "The essence of the problem is always the same." }, accept: ["the core", "heart"], hint: "The core of something. En esencia = essentially — a step up from básicamente." },
        { id: "es-u58l2-coherente", type: "vocab", front: "coherente", reading: "coherente", meaning: "coherent / consistent", example: { jp: "Su explicación es coherente con los datos que tenemos.", en: "His explanation is consistent with the data we have." }, accept: ["coherent", "consistent", "logical"], hint: "coherente CON algo = it fits with it. Opposite: incoherente." },
      ],
    },
    {
      id: "es-u58l3",
      unit: 58,
      lesson: 3,
      title: "Values and beliefs",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what people value and believe — el valor, el ideal, la creencia, la fe, la moral, el prejuicio.",
      items: [
        { id: "es-u58l3-elvalor", type: "vocab", front: "el valor", reading: "elvalor", meaning: "value", example: { jp: "El respeto es un valor muy importante para mi familia.", en: "Respect is a very important value for my family." }, accept: ["the courage", "worth"], hint: "A moral value — and also worth (el valor de una casa) and courage (tener valor). el respeto is A2." },
        { id: "es-u58l3-elideal", type: "vocab", front: "el ideal", reading: "elideal", meaning: "ideal", example: { jp: "Lucha por sus ideales sin pensar en el dinero.", en: "She fights for her ideals without thinking about money." }, accept: ["the goal", "model"], hint: "As an adjective, ideal = perfect: el momento ideal. lucha por = fights for is common but new." },
        { id: "es-u58l3-lacreencia", type: "vocab", front: "la creencia", reading: "lacreencia", meaning: "belief", example: { jp: "Cada persona tiene sus propias creencias.", en: "Each person has their own beliefs." }, accept: ["the conviction"], hint: "From creer (u29). What someone holds to be true, often about religion or values." },
        { id: "es-u58l3-lafe", type: "vocab", front: "la fe", reading: "lafe", meaning: "faith", example: { jp: "Tiene mucha fe en que todo va a salir bien.", en: "She has a lot of faith that everything will turn out fine." }, accept: ["the trust", "belief"], hint: "Faith — religious, or trust in general: tener fe en alguien. A short, irregular word: la fe." },
        { id: "es-u58l3-lamoral", type: "vocab", front: "la moral", reading: "lamoral", meaning: "morals", example: { jp: "Es un asunto de moral, no de ley.", en: "It's a matter of morals, not of law." }, accept: ["the morality", "ethics"], hint: "Right and wrong as a system. el asunto (A2) = the matter. Also morale: levantar la moral." },
        { id: "es-u58l3-elprejuicio", type: "vocab", front: "el prejuicio", reading: "elprejuicio", meaning: "prejudice", example: { jp: "Hay que juzgar sin prejuicios a la gente.", en: "You should judge people without prejudice." }, accept: ["the bias"], hint: "pre- + juicio (judgement): a judgement made in advance. juzgar (to judge) is new but from the same root." },
      ],
    },
    {
      id: "es-u58l4",
      unit: 58,
      lesson: 4,
      title: "Reflection",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about thinking itself — razonar, reflexionar, la reflexión, la conciencia, plantear, el enfoque.",
      items: [
        { id: "es-u58l4-razonar", type: "vocab", front: "razonar", reading: "razonar", meaning: "to reason", example: { jp: "Hay que razonar bien antes de decidir.", en: "You have to reason well before deciding." }, accept: ["to think through"], hint: "From la razón (A2). To think logically through a problem." },
        { id: "es-u58l4-reflexionar", type: "vocab", front: "reflexionar", reading: "reflexionar", meaning: "to reflect", example: { jp: "Necesito reflexionar sobre lo que me dijiste.", en: "I need to reflect on what you told me." }, accept: ["to ponder", "to think over"], hint: "reflexionar SOBRE algo. To think something over deeply — slower and deeper than pensar." },
        { id: "es-u58l4-lareflexion", type: "vocab", front: "la reflexión", reading: "lareflexion", meaning: "reflection", example: { jp: "Después de una larga reflexión, cambió de idea.", en: "After a long reflection, he changed his mind." }, accept: ["the thought", "consideration"], hint: "The noun from reflexionar — careful thought. Also a reflection in a mirror (el reflejo is more common for that)." },
        { id: "es-u58l4-laconciencia", type: "vocab", front: "la conciencia", reading: "laconciencia", meaning: "conscience", example: { jp: "Hizo el trabajo con la conciencia tranquila.", en: "He did the work with a clear conscience." }, accept: ["the awareness", "consciousness"], hint: "Both conscience (right/wrong) and awareness. Tener conciencia de algo = to be aware of something." },
        { id: "es-u58l4-cuestionar", type: "vocab", front: "cuestionar", reading: "cuestionar", meaning: "to question / challenge", example: { jp: "Nadie cuestionó la decisión del director en la reunión.", en: "Nobody questioned the director's decision at the meeting." }, accept: ["to question", "to challenge", "to call into question"], hint: "Not asking a question (that is preguntar) — putting something in doubt." },
        { id: "es-u58l4-profundizar", type: "vocab", front: "profundizar", reading: "profundizar", meaning: "to go deeper into", example: { jp: "Vamos a profundizar en este tema la semana que viene.", en: "We're going to go deeper into this topic next week." }, accept: ["to go deeper", "to look into more deeply", "to delve into"], hint: "profundizar EN un tema. From profundo — you go down into it rather than across it." },
      ],
    },
  ],
};
