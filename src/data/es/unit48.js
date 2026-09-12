// ES Unit 48 — Adverbios y expresiones ("Adverbs and expressions") — A2 COVERAGE (slot: coverage-a2-9)
// The -mente adverbs (built on adjectives this block already taught: rápido→
// rápidamente, real→realmente) plus the degree words and set expressions that make
// speech sound native. Conventions and BLOCK-3 SCOPE: see es/unit13.js.
//
// DE-COLLIDED: authored after blocks 1–2 (u21–u40) were final, so every front here
// was checked against the whole u1–u40 corpus and any collision swapped out
// (normalmente/fácilmente/tampoco/de nuevo/por fin → posiblemente/simplemente/aparte/
// en fin/por ahora). Zero duplicate-front reds expected at merge. See §6 hand-back.
export const ES_UNIT48 = {
  id: "es-u48",
  lang: "es",
  title: "Adverbios y expresiones",
  order: 48,
  stage: "a2",
  lessons: [
    {
      id: "es-u48l1",
      unit: 48,
      lesson: 1,
      title: "Rápidamente, claramente",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say HOW something is done with -mente: hablar rápidamente, comer lentamente, entender perfectamente.",
      items: [
        { id: "es-u48l1-rapidamente", type: "vocab", front: "rápidamente", reading: "rapidamente", meaning: "quickly", example: { jp: "Habla muy rápidamente.", en: "He speaks very quickly." }, drill: { jp: "El tren llega rápidamente", en: "The train arrives quickly" }, accept: ["fast", "rapidly", "quick"], hint: "Spanish makes -ly adverbs by adding -mente to the FEMININE adjective: rápida → rápidamente. (You can also just say rápido.)" },
        { id: "es-u48l1-lentamente", type: "vocab", front: "lentamente", reading: "lentamente", meaning: "slowly", example: { jp: "Come muy lentamente.", en: "He eats very slowly." }, drill: { jp: "Mi abuelo anda lentamente", en: "My grandfather walks slowly" }, accept: ["slow"], hint: "lenta → lentamente. The opposite of rápidamente. The adjective lento = slow." },
        { id: "es-u48l1-simplemente", type: "vocab", front: "simplemente", reading: "simplemente", meaning: "simply / just", example: { jp: "Simplemente no quiero ir.", en: "I simply don't want to go." }, drill: { jp: "Simplemente quiero un café", en: "I simply want a coffee" }, accept: ["just", "merely"], hint: "From simple (u42). Simplemente = simply / just. Es simplemente perfecto = it's simply perfect." },
        { id: "es-u48l1-claramente", type: "vocab", front: "claramente", reading: "claramente", meaning: "clearly", example: { jp: "Habla claramente, por favor.", en: "Speak clearly, please." }, drill: { jp: "El profesor habla claramente", en: "The teacher speaks clearly" }, accept: ["plainly", "obviously"], hint: "clara → claramente. From claro (u42). Also \"obviously\": claramente, tienes razón." },
        { id: "es-u48l1-perfectamente", type: "vocab", front: "perfectamente", reading: "perfectamente", meaning: "perfectly", example: { jp: "Entiendo perfectamente.", en: "I understand perfectly." }, drill: { jp: "La lavadora funciona perfectamente", en: "The washing machine works perfectly" }, accept: ["completely", "just fine"], hint: "From perfecto = perfect. Often just means \"completely/just fine\": está perfectamente bien." },
        { id: "es-u48l1-directamente", type: "vocab", front: "directamente", reading: "directamente", meaning: "directly / straight", example: { jp: "Voy directamente a casa.", en: "I'm going straight home." }, drill: { jp: "Voy directamente a la oficina", en: "I'm going straight to the office" }, accept: ["straight", "right away"], hint: "From directo = direct. Straight to a place, or straight/frankly in manner." },
      ],
    },
    {
      id: "es-u48l2",
      unit: 48,
      lesson: 2,
      title: "Seguramente, posiblemente",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how likely something is: generalmente trabajo, probablemente va a llover, posiblemente es verdad.",
      items: [
        { id: "es-u48l2-posiblemente", type: "vocab", front: "posiblemente", reading: "posiblemente", meaning: "possibly", example: { jp: "Posiblemente es verdad.", en: "It's possibly true." }, drill: { jp: "Posiblemente llueve mañana", en: "It will possibly rain tomorrow" }, accept: ["maybe", "perhaps"], hint: "From posible (u42). A close friend of a lo mejor (u48) and quizá." },
        { id: "es-u48l2-generalmente", type: "vocab", front: "generalmente", reading: "generalmente", meaning: "generally", example: { jp: "Generalmente trabajo por la mañana.", en: "I generally work in the morning." }, drill: { jp: "Generalmente ceno a las nueve", en: "I generally have dinner at nine" }, accept: ["as a rule", "usually"], hint: "From general (u42). A close friend of normalmente. Por lo general means the same." },
        { id: "es-u48l2-seguramente", type: "vocab", front: "seguramente", reading: "seguramente", meaning: "probably / surely", example: { jp: "Seguramente llega tarde.", en: "He'll probably arrive late." }, drill: { jp: "Seguramente llega tarde otra vez", en: "He'll surely arrive late again" }, accept: ["most likely", "surely", "no doubt"], hint: "From seguro (u42). Careful: it usually means \"probably\", not \"for sure\"." },
        { id: "es-u48l2-probablemente", type: "vocab", front: "probablemente", reading: "probablemente", meaning: "probably", example: { jp: "Probablemente va a llover mañana.", en: "It'll probably rain tomorrow." }, drill: { jp: "Probablemente hace frío mañana", en: "It will probably be cold tomorrow" }, accept: ["likely", "most likely"], hint: "From probable. A touch more formal than seguramente." },
        { id: "es-u48l2-realmente", type: "vocab", front: "realmente", reading: "realmente", meaning: "really / actually", example: { jp: "Realmente no lo sé.", en: "I really don't know." }, drill: { jp: "Realmente es un problema grande", en: "It really is a big problem" }, accept: ["actually", "truly", "in fact"], hint: "From real (u42). For emphasis or to correct: realmente es fácil = it's actually easy." },
        { id: "es-u48l2-exactamente", type: "vocab", front: "exactamente", reading: "exactamente", meaning: "exactly", example: { jp: "Es exactamente lo que quiero.", en: "It's exactly what I want." }, drill: { jp: "Es exactamente el mismo tren", en: "It's exactly the same train" }, accept: ["precisely", "just"], hint: "From exacto (u50). ¡Exactamente! = Exactly! (agreeing)." },
      ],
    },
    {
      id: "es-u48l3",
      unit: 48,
      lesson: 3,
      title: "Apenas, incluso, al menos",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Sharpen a statement: apenas tengo tiempo, incluso los niños, al menos, ni siquiera, un problema aparte.",
      items: [
        { id: "es-u48l3-apenas", type: "vocab", front: "apenas", reading: "apenas", meaning: "barely / hardly", example: { jp: "Apenas tengo tiempo.", en: "I barely have time." }, drill: { jp: "Apenas tengo tiempo hoy", en: "I barely have time today" }, accept: ["hardly", "scarcely", "only just"], hint: "Almost none: apenas hay gente = there's hardly anyone. Also \"only just\" of time: apenas llegó = he'd only just arrived." },
        { id: "es-u48l3-incluso", type: "vocab", front: "incluso", reading: "incluso", meaning: "even", example: { jp: "Incluso los niños lo entienden.", en: "Even the children understand it." }, drill: { jp: "Trabajo incluso el domingo", en: "I work even on Sunday" }, accept: ["including", "even"], hint: "Adds a surprising case: incluso yo = even me. Stronger than también (u3)." },
        { id: "es-u48l3-almenos", type: "vocab", front: "al menos", reading: "almenos", meaning: "at least", example: { jp: "Al menos tenemos comida.", en: "At least we have food." }, drill: { jp: "Al menos hace sol hoy", en: "At least it's sunny today" }, accept: ["at least"], hint: "menos (u5) inside a set phrase. Por lo menos means the same. The opposite of \"at most\" (como mucho)." },
        { id: "es-u48l3-nisiquiera", type: "vocab", front: "ni siquiera", reading: "nisiquiera", meaning: "not even", example: { jp: "Ni siquiera tengo dinero.", en: "I don't even have money." }, drill: { jp: "Ni siquiera tengo un euro", en: "I don't even have one euro" }, accept: ["not even"], hint: "The strong negative of incluso: ni siquiera me habló = he didn't even speak to me." },
        { id: "es-u48l3-masbien", type: "vocab", front: "más bien", reading: "masbien", meaning: "rather", example: { jp: "No es caro, más bien barato.", en: "It's not expensive, rather cheap." }, drill: { jp: "Más bien prefiero el tren", en: "I'd rather take the train" }, accept: ["more like", "if anything"], hint: "Corrects toward a better word: no es difícil, más bien largo = not hard, more like long." },
        { id: "es-u48l3-aparte", type: "vocab", front: "aparte", reading: "aparte", meaning: "apart / aside / separately", example: { jp: "Eso es un problema aparte.", en: "That's a separate problem." }, drill: { jp: "El pan va aparte", en: "The bread goes separately" }, accept: ["separate", "aside", "besides"], hint: "Aside or separate: eso es aparte. Aparte de = apart from / besides." },
      ],
    },
    {
      id: "es-u48l4",
      unit: 48,
      lesson: 4,
      title: "Por supuesto, por cierto",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use set expressions: por supuesto, sin duda, en fin, por cierto, por ahora, a lo mejor.",
      items: [
        { id: "es-u48l4-porsupuesto", type: "vocab", front: "por supuesto", reading: "porsupuesto", meaning: "of course", example: { jp: "Por supuesto que sí.", en: "Of course." }, drill: { jp: "Por supuesto voy a la fiesta", en: "Of course I'm going to the party" }, accept: ["certainly", "naturally", "sure"], hint: "The emphatic \"of course\". Por supuesto que no = of course not." },
        { id: "es-u48l4-sinduda", type: "vocab", front: "sin duda", reading: "sinduda", meaning: "without a doubt", example: { jp: "Sin duda es el mejor.", en: "It's without a doubt the best." }, drill: { jp: "Sin duda es el mejor hotel", en: "Without a doubt it's the best hotel" }, accept: ["no doubt", "definitely", "surely"], hint: "sin (u13) + duda (from dudar). The confident version of seguramente." },
        { id: "es-u48l4-enfin", type: "vocab", front: "en fin", reading: "enfin", meaning: "anyway / well", example: { jp: "En fin, no hay problema.", en: "Anyway, there's no problem." }, drill: { jp: "En fin mañana es otro día", en: "Anyway tomorrow is another day" }, accept: ["in short", "oh well", "so"], hint: "A sigh-and-move-on filler: En fin… = Anyway… / Oh well… From el fin (end)." },
        { id: "es-u48l4-porcierto", type: "vocab", front: "por cierto", reading: "porcierto", meaning: "by the way", example: { jp: "Por cierto, ¿dónde está María?", en: "By the way, where's María?" }, drill: { jp: "Por cierto mañana no trabajo", en: "By the way tomorrow I'm not working" }, accept: ["incidentally", "speaking of which"], hint: "cierto in a set phrase. Drops in a new topic: por cierto, … Not the same as \"of course\"." },
        { id: "es-u48l4-porahora", type: "vocab", front: "por ahora", reading: "porahora", meaning: "for now", example: { jp: "Por ahora estoy bien.", en: "For now I'm fine." }, drill: { jp: "Por ahora estoy en Madrid", en: "For now I'm in Madrid" }, accept: ["for the moment", "so far"], hint: "From ahora (now): por ahora = for the time being." },
        { id: "es-u48l4-alomejor", type: "vocab", front: "a lo mejor", reading: "alomejor", meaning: "maybe / perhaps", example: { jp: "A lo mejor llueve mañana.", en: "Maybe it'll rain tomorrow." }, drill: { jp: "A lo mejor viene mi hermano", en: "Maybe my brother is coming" }, accept: ["perhaps", "possibly"], hint: "An everyday \"maybe\", oddly built from mejor (better). Followed by the normal present: a lo mejor llueve." },
      ],
    },
  ],
};
