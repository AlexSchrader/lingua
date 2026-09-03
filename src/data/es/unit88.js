// ES Unit 88 — Rhetoric and persuasion (slot: rhetoric) — B2
// SCAFFOLD STUB. Replace the locked lessons below with 4 real lessons of
// 5-8 cards each (aim 6). Every lesson needs a canDo. Every example may use only
// vocab introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 1 (u88–u100). Do not widen it. Retitle this unit in Spanish when
// you author it: the English title above marks the SLOT, the wording is yours.
//   OWNS: How an argument is BUILT and sold — figures of speech, rhetorical moves,
//         appeals, spin, the vocabulary of persuading a room.
//   NOT:  Holding or conceding an opinion (u51) and weighing evidence (u89). If the
//         word names proof rather than delivery, it is u89's.
//
// Spanish already teaches 2,094 words across u1–u87. Check src/data/es/TAUGHT-WORDS.md
// before writing EVERY front — a duplicate front is a hard validate:content failure,
// and the es B1 band lost 159 cards to exactly that.
export const ES_UNIT88 = {
  id: "es-u88",
  lang: "es",
  title: "La retórica y la persuasión",
  order: 88,
  stage: "b2",
  lessons: [
    {
      id: "es-u88l1",
      unit: 88,
      lesson: 1,
      title: "El arte de persuadir",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about persuasion as a craft: name rhetoric and public speaking, say who won an audience over, and describe an appeal to feeling.",
      items: [
        { id: "es-u88l1-laretorica", type: "vocab", front: "la retórica", reading: "laretorica", meaning: "rhetoric", example: { jp: "Su discurso es pura retórica y no dice nada concreto.", en: "His speech is pure rhetoric and says nothing concrete." }, accept: ["rhetoric", "rhetorical language"], hint: "Both the art of speaking well and, more often in the press, empty words dressed up: pura retórica." },
        { id: "es-u88l1-laoratoria", type: "vocab", front: "la oratoria", reading: "laoratoria", meaning: "oratory / public speaking", example: { jp: "La oratoria era su mayor virtud como político.", en: "Oratory was his greatest strength as a politician." }, accept: ["oratory", "public speaking", "speech-making"], hint: "The skill itself, not a single speech. Un orador is the person; la oratoria is what he does well." },
        { id: "es-u88l1-persuadir", type: "vocab", front: "persuadir", reading: "persuadir", meaning: "to persuade", example: { jp: "No logró persuadir a nadie de que el plan era realista.", en: "He didn't manage to persuade anyone that the plan was realistic." }, accept: ["to persuade", "to talk into", "to win over"], hint: "persuadir A alguien DE algo. Stronger and more deliberate than convencer, which can happen by accident." },
        { id: "es-u88l1-laelocuencia", type: "vocab", front: "la elocuencia", reading: "laelocuencia", meaning: "eloquence", example: { jp: "Habló con una elocuencia que sorprendió a todo el auditorio.", en: "He spoke with an eloquence that surprised the whole audience." }, accept: ["eloquence", "fluency", "command of words"], hint: "Elocuente is the adjective. Also used ironically of silence: su silencio fue elocuente." },
        { id: "es-u88l1-apelar", type: "vocab", front: "apelar", reading: "apelar", meaning: "to appeal (to)", example: { jp: "El anuncio apela al miedo más que a la razón.", en: "The advert appeals to fear rather than to reason." }, accept: ["to appeal to", "to invoke", "to call on"], hint: "apelar A algo: apelar a la emoción, a la lógica. In court it is also to appeal a ruling." },
        { id: "es-u88l1-cautivar", type: "vocab", front: "cautivar", reading: "cautivar", meaning: "to captivate", example: { jp: "La ponente cautivó al público desde la primera frase.", en: "The speaker captivated the audience from the first sentence." }, accept: ["to captivate", "to enthral", "to win over"], hint: "To hold someone's attention completely. Cautivador = captivating." },
      ],
    },
    {
      id: "es-u88l2",
      unit: 88,
      lesson: 2,
      title: "Figuras y recursos",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the devices a speaker or writer uses — metaphor, analogy, euphemism, irony, exaggeration — and say what a word suggests beyond its meaning.",
      items: [
        { id: "es-u88l2-lametafora", type: "vocab", front: "la metáfora", reading: "lametafora", meaning: "the metaphor", example: { jp: "Usó la metáfora del barco para hablar del país.", en: "He used the metaphor of a ship to talk about the country." }, accept: ["the metaphor", "the figure of speech"], hint: "Metafórico is the adjective. A metáfora says one thing IS another; a símil says it is LIKE another." },
        { id: "es-u88l2-laanalogia", type: "vocab", front: "la analogía", reading: "laanalogia", meaning: "the analogy", example: { jp: "La analogía con la crisis anterior no se sostiene.", en: "The analogy with the previous crisis doesn't hold up." }, accept: ["the analogy", "the comparison", "the parallel"], hint: "Por analogía con = by analogy with. It argues from a resemblance, so attacking the resemblance attacks the argument." },
        { id: "es-u88l2-eleufemismo", type: "vocab", front: "el eufemismo", reading: "eleufemismo", meaning: "the euphemism", example: { jp: "Decir 'ajuste' en vez de 'recorte' es un eufemismo.", en: "Saying 'adjustment' instead of 'cut' is a euphemism." }, accept: ["the euphemism", "the softer word"], hint: "The gentle word that hides the hard one. The press calls this lenguaje eufemístico." },
        { id: "es-u88l2-laironia", type: "vocab", front: "la ironía", reading: "laironia", meaning: "irony", example: { jp: "No entendió la ironía y se lo tomó en serio.", en: "He didn't catch the irony and took it seriously." }, accept: ["irony", "the irony"], hint: "Saying the opposite of what you mean, and also the twist of fate sense: la ironía del destino." },
        { id: "es-u88l2-lahiperbole", type: "vocab", front: "la hipérbole", reading: "lahiperbole", meaning: "hyperbole / overstatement", example: { jp: "Hablar de catástrofe es una hipérbole evidente.", en: "Talking about a catastrophe is an obvious overstatement." }, accept: ["hyperbole", "exaggeration", "overstatement"], hint: "The formal name for deliberate exaggeration. Everyday Spanish just says una exageración." },
        { id: "es-u88l2-laconnotacion", type: "vocab", front: "la connotación", reading: "laconnotacion", meaning: "the connotation", example: { jp: "Esa palabra tiene una connotación negativa en este contexto.", en: "That word has a negative connotation in this context." }, accept: ["the connotation", "the overtone", "the association"], hint: "What a word suggests on top of what it means. Its opposite is la denotación." },
      ],
    },
    {
      id: "es-u88l3",
      unit: 88,
      lesson: 3,
      title: "Tácticas y trampas",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what is wrong with a dishonest argument: call something a fallacy, spot demagoguery or propaganda, and say someone twisted your words.",
      items: [
        { id: "es-u88l3-lafalacia", type: "vocab", front: "la falacia", reading: "lafalacia", meaning: "the fallacy", example: { jp: "Su argumento se basa en una falacia muy conocida.", en: "His argument rests on a very well-known fallacy." }, accept: ["the fallacy", "the flawed argument"], hint: "A reasoning error that looks valid. Falaz is the adjective: un razonamiento falaz." },
        { id: "es-u88l3-elsofisma", type: "vocab", front: "el sofisma", reading: "elsofisma", meaning: "the sophism / specious argument", example: { jp: "Eso es un sofisma que suena bien pero no prueba nada.", en: "That's a specious argument that sounds good but proves nothing." }, accept: ["the sophism", "the specious argument", "the fallacy"], hint: "Near neighbour of la falacia, with a sharper accusation in it: the speaker knew and did it anyway." },
        { id: "es-u88l3-lademagogia", type: "vocab", front: "la demagogia", reading: "lademagogia", meaning: "demagoguery", example: { jp: "Prometer eso en plena crisis es pura demagogia.", en: "Promising that in the middle of a crisis is pure demagoguery." }, accept: ["demagoguery", "populist rhetoric"], hint: "Flattering a crowd to win it. El demagogo is the person; demagógico the adjective." },
        { id: "es-u88l3-lapropaganda", type: "vocab", front: "la propaganda", reading: "lapropaganda", meaning: "propaganda", example: { jp: "El periódico publicó propaganda disfrazada de noticia.", en: "The newspaper ran propaganda dressed up as news." }, accept: ["propaganda"], hint: "Careful: in Spanish it also means plain advertising — propaganda del supermercado. Context decides which." },
        { id: "es-u88l3-manipular", type: "vocab", front: "manipular", reading: "manipular", meaning: "to manipulate", example: { jp: "Manipularon los datos para que el resultado saliera mejor.", en: "They manipulated the figures so the result would look better." }, accept: ["to manipulate", "to doctor", "to rig"], hint: "Of people or of data alike. La manipulación is the noun." },
        { id: "es-u88l3-tergiversar", type: "vocab", front: "tergiversar", reading: "tergiversar", meaning: "to twist / misrepresent", example: { jp: "Tergiversó mis palabras para atacarme mejor.", en: "He twisted my words in order to attack me more effectively." }, accept: ["to twist", "to misrepresent", "to distort"], hint: "Specifically of words and facts: tergiversar lo que alguien dijo. Stronger than exagerar." },
      ],
    },
    {
      id: "es-u88l4",
      unit: 88,
      lesson: 4,
      title: "El efecto en el público",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a message landed: name the audience and the slogan, say a message struck home, and talk about the impression it left.",
      items: [
        { id: "es-u88l4-elauditorio", type: "vocab", front: "el auditorio", reading: "elauditorio", meaning: "the audience", example: { jp: "El auditorio escuchó en silencio hasta el final.", en: "The audience listened in silence until the end." }, accept: ["the audience", "the listeners", "the auditorium"], hint: "The people listening, and also the room they sit in. For television, use la audiencia instead." },
        { id: "es-u88l4-eleslogan", type: "vocab", front: "el eslogan", reading: "eleslogan", meaning: "the slogan", example: { jp: "Todo el mundo recuerda el eslogan, nadie el programa.", en: "Everyone remembers the slogan, nobody the programme." }, accept: ["the slogan", "the catchphrase", "the tagline"], hint: "From English, and spelled as it sounds. Plural: los eslóganes." },
        { id: "es-u88l4-calar", type: "vocab", front: "calar", reading: "calar", meaning: "to strike home / sink in", example: { jp: "Su mensaje caló entre los votantes más jóvenes.", en: "His message struck home with younger voters." }, accept: ["to strike home", "to sink in", "to catch on"], hint: "calar EN alguien: the message got through and stayed. Literally, to soak through." },
        { id: "es-u88l4-laresonancia", type: "vocab", front: "la resonancia", reading: "laresonancia", meaning: "the resonance / impact", example: { jp: "El discurso tuvo una resonancia enorme en la prensa.", en: "The speech had an enormous resonance in the press." }, accept: ["the resonance", "the impact", "the echo"], hint: "Tener resonancia = to be widely echoed. The physical sense (sound) is the same word." },
        { id: "es-u88l4-impactar", type: "vocab", front: "impactar", reading: "impactar", meaning: "to make an impact on", example: { jp: "La imagen impactó a todos los que la vieron.", en: "The image made an impact on everyone who saw it." }, accept: ["to make an impact on", "to strike", "to hit hard"], hint: "Emotional rather than physical here. Impactante = striking." },
        { id: "es-u88l4-seducir", type: "vocab", front: "seducir", reading: "seducir", meaning: "to win over / seduce", example: { jp: "La propuesta sedujo incluso a sus críticos.", en: "The proposal won over even his critics." }, accept: ["to win over", "to charm", "to seduce"], hint: "Of ideas as much as of people: una idea seductora. No romantic overtone when the subject is a proposal." },
      ],
    },
  ],
};
