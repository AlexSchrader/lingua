// ES Unit 57 — Emoción: matices (slot: emotion-finer) — B1
// ─────────────────────────────────────────────────────────────────────────────
// A2 (u22) gave the learner the primary colours of feeling — contento, feliz,
// triste, preocupado, enfadado, nervioso, el miedo. B1 fills in the shades: the
// stronger and subtler feelings (emoción, orgullo, vergüenza, ilusión), the verbs
// of reacting to things (sorprender, asustar, decepcionar), the vocabulary of
// stress and calm, and the words for a mood. Reactions here are built with me/se
// (the free A2 clitics) — me sorprende, me da pena — so no new pronoun is needed.
// Examples avoid the subjunctive (indicative + the A2 conditional only; the subjunctive waits for the block-2 grammar units). Every A2 feeling word is used and re-taught nowhere.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT57 = {
  id: "es-u57",
  lang: "es",
  title: "Emoción: matices",
  order: 57,
  stage: "b1",
  lessons: [
    {
      id: "es-u57l1",
      unit: 57,
      lesson: 1,
      title: "Deeper feelings",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name feelings A2 couldn't — la emoción, emocionar, conmover, el orgullo, la vergüenza, la ilusión.",
      items: [
        { id: "es-u57l1-laemocion", type: "vocab", front: "la emoción", reading: "laemocion", meaning: "emotion", example: { jp: "No pudo hablar por la emoción del momento.", en: "He couldn't speak because of the emotion of the moment." }, accept: ["the excitement", "thrill"], hint: "A strong feeling — and also excitement: ¡qué emoción! = how exciting! From this comes the whole unit." },
        { id: "es-u57l1-emocionar", type: "vocab", front: "emocionar", reading: "emocionar", meaning: "to move", example: { jp: "La película me emocionó mucho al final.", en: "The film moved me a lot at the end." }, accept: ["to thrill", "to touch"], hint: "Works like gustar: la película ME emociona. Emocionarse = to get emotional." },
        { id: "es-u57l1-conmover", type: "vocab", front: "conmover", reading: "conmover", meaning: "to move deeply", example: { jp: "Su historia me conmovió mucho.", en: "His story moved me a lot." }, accept: ["to touch", "to stir"], hint: "Stronger than emocionar — to move someone to tears. The o becomes ue: conmueve." },
        { id: "es-u57l1-elorgullo", type: "vocab", front: "el orgullo", reading: "elorgullo", meaning: "pride", example: { jp: "Habla de sus hijos con mucho orgullo.", en: "She talks about her children with great pride." }, accept: ["the self-esteem"], hint: "The noun behind orgulloso (A2). Good pride, or the stubborn kind — por orgullo, no lo admite." },
        { id: "es-u57l1-laverguenza", type: "vocab", front: "la vergüenza", reading: "laverguenza", meaning: "embarrassment", example: { jp: "Me da vergüenza hablar en público.", en: "I'm embarrassed to speak in public." }, accept: ["the shame", "shyness"], hint: "dar vergüenza = to embarrass (like dar miedo). ¡Qué vergüenza! = How embarrassing!" },
        { id: "es-u57l1-laternura", type: "vocab", front: "la ternura", reading: "laternura", meaning: "tenderness", example: { jp: "Habla de su abuela con mucha ternura.", en: "He talks about his grandmother with great tenderness." }, accept: ["tenderness", "affection", "fondness"], hint: "The soft feeling for someone you love. The adjective is tierno." },
      ],
    },
    {
      id: "es-u57l2",
      unit: 57,
      lesson: 2,
      title: "Reacting",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how something hits you — sorprender, asustar, decepcionar, la decepción, molestar, animar.",
      items: [
        { id: "es-u57l2-sorprender", type: "vocab", front: "sorprender", reading: "sorprender", meaning: "to surprise", example: { jp: "Me sorprende lo mucho que trabajas los fines de semana.", en: "It surprises me how much you work on weekends." }, accept: ["to astonish"], hint: "Works like gustar: me sorprende. From la sorpresa (A2). Sorprenderse = to be surprised." },
        { id: "es-u57l2-asustar", type: "vocab", front: "asustar", reading: "asustar", meaning: "to frighten", example: { jp: "El ruido de la noche me asustó un poco.", en: "The noise in the night frightened me a little." }, accept: ["to scare"], hint: "From el susto, a fright. Me asusta = it scares me. Asustarse = to get scared." },
        { id: "es-u57l2-decepcionar", type: "vocab", front: "decepcionar", reading: "decepcionar", meaning: "to disappoint", example: { jp: "La película me decepcionó bastante.", en: "The film disappointed me quite a bit." }, accept: ["to let down"], hint: "A false friend: decepcionar = to disappoint, NOT \"to deceive\" (that's engañar). Me decepciona = it disappoints me." },
        { id: "es-u57l2-ladecepcion", type: "vocab", front: "la decepción", reading: "ladecepcion", meaning: "disappointment", example: { jp: "El resultado fue una gran decepción para todos.", en: "The result was a big disappointment for everyone." }, accept: ["the letdown"], hint: "The noun from decepcionar. Llevarse una decepción = to be disappointed." },
        { id: "es-u57l2-molestar", type: "vocab", front: "molestar", reading: "molestar", meaning: "to bother", example: { jp: "Me molesta mucho el ruido de los coches.", en: "The noise of the cars bothers me a lot." }, accept: ["to annoy", "to disturb"], hint: "Works like gustar: me molesta. ¿Te molesta si abro la ventana? = Do you mind if…?" },
        { id: "es-u57l2-indignar", type: "vocab", front: "indignar", reading: "indignar", meaning: "to outrage / make angry", example: { jp: "Me indigna que nadie diga nada sobre este tema.", en: "It outrages me that nobody says anything about this." }, accept: ["to outrage", "to anger", "to make indignant"], hint: "Works like gustar: me indigna algo. Much stronger than molestar, the card before it." },
      ],
    },
    {
      id: "es-u57l3",
      unit: 57,
      lesson: 3,
      title: "Stress and calm",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about pressure and relief — el estrés, agobiar, los nervios, relajarse, aguantar, soportar.",
      items: [
        { id: "es-u57l3-agobiar", type: "vocab", front: "agobiar", reading: "agobiar", meaning: "to overwhelm", example: { jp: "Me agobia tener tantas cosas que hacer.", en: "Having so many things to do overwhelms me." }, accept: ["to stress out", "to weigh down"], hint: "Works like gustar: me agobia. Estar agobiado = to feel overwhelmed. Very common in Spain." },
        { id: "es-u57l3-losnervios", type: "vocab", front: "los nervios", reading: "losnervios", meaning: "nerves", example: { jp: "Antes del examen siempre tengo nervios.", en: "Before the exam I always have nerves." }, accept: ["the jitters"], hint: "tener nervios = to feel nervous; the noun behind nervioso (A2). Me pone nervioso = it makes me nervous." },
        { id: "es-u57l3-aguantar", type: "vocab", front: "aguantar", reading: "aguantar", meaning: "to put up with", example: { jp: "No aguanto más este calor tan fuerte.", en: "I can't stand this strong heat any more." }, accept: ["to bear", "to hold"], hint: "To endure or bear. No aguanto más = I can't take it any more. Also to physically hold: aguanta esto." },
        { id: "es-u57l3-latension", type: "vocab", front: "la tensión", reading: "latension", meaning: "tension", example: { jp: "Se nota la tensión entre los dos desde la reunión.", en: "You can feel the tension between the two of them since the meeting." }, accept: ["tension", "stress", "strain"], hint: "Between people or inside you. Also blood pressure: tener la tensión alta." },
        { id: "es-u57l3-desahogarse", type: "vocab", front: "desahogarse", reading: "desahogarse", meaning: "to vent / let it all out", example: { jp: "Llamó a su amiga para desahogarse un rato.", en: "She called her friend to let it all out for a while." }, accept: ["to vent", "to let off steam", "to get it off one's chest"], hint: "Ahogarse is to drown; des-ahogarse is coming up for air by talking to someone." },
        { id: "es-u57l3-tranquilizarse", type: "vocab", front: "tranquilizarse", reading: "tranquilizarse", meaning: "to calm down", example: { jp: "Tranquilízate, todo esto tiene solución.", en: "Calm down, all of this has a solution." }, accept: ["to calm down", "to relax", "to settle down"], hint: "Reflexive of tranquilizar. The imperative tranquilízate is what you say to someone upset." },
      ],
    },
    {
      id: "es-u57l4",
      unit: 57,
      lesson: 4,
      title: "Mood",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a mood, not just a feeling — el estado de ánimo, el humor, avergonzarse, frustrar, dar pena, la lástima.",
      items: [
        { id: "es-u57l4-elestadodeanimo", type: "vocab", front: "el estado de ánimo", reading: "elestadodeanimo", meaning: "mood", example: { jp: "Su estado de ánimo cambia según el tiempo que hace.", en: "Her mood changes depending on the weather." }, accept: ["the state of mind"], hint: "From el estado + el ánimo (A2). The formal term; el humor is the everyday one." },
        { id: "es-u57l4-elhumor", type: "vocab", front: "el humor", reading: "elhumor", meaning: "mood", example: { jp: "Hoy está de muy buen humor, no sé por qué.", en: "He's in a really good mood today, I don't know why." }, accept: ["the temper", "humour"], hint: "estar de buen/mal humor = to be in a good/bad mood. Also humour: tiene sentido del humor." },
        { id: "es-u57l4-avergonzarse", type: "vocab", front: "avergonzarse", reading: "avergonzarse", meaning: "to be ashamed", example: { jp: "Se avergüenza de sus errores del pasado.", en: "He's ashamed of his past mistakes." }, accept: ["to feel embarrassed"], hint: "avergonzarse DE algo. From la vergüenza (l1). The o becomes üe: me avergüenzo." },
        { id: "es-u57l4-frustrar", type: "vocab", front: "frustrar", reading: "frustrar", meaning: "to frustrate", example: { jp: "Me frustra no poder hacer bien este ejercicio.", en: "Not being able to do this exercise well frustrates me." }, accept: ["to thwart"], hint: "Works like gustar: me frustra. Estar frustrado = to feel frustrated." },
        { id: "es-u57l4-darpena", type: "vocab", front: "dar pena", reading: "darpena", meaning: "to make sad", example: { jp: "Me da pena ver la casa vieja tan vacía.", en: "It makes me sad to see the old house so empty." }, accept: ["to feel sorry", "to be a shame"], hint: "la pena = sorrow/pity. Me da pena = it makes me sad / I feel sorry. ¡Qué pena! = What a shame!" },
        { id: "es-u57l4-lalastima", type: "vocab", front: "la lástima", reading: "lalastima", meaning: "pity", example: { jp: "Es una lástima perder una oportunidad así.", en: "It's a pity to miss an opportunity like this." }, accept: ["the shame", "sympathy"], hint: "¡Qué lástima! = What a pity! Near dar pena, but la lástima leans on feeling sorry for someone." },
      ],
    },
  ],
};
