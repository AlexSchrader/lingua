// ES Unit 48 — Adverbios y expresiones ("Adverbs and expressions") — A2 COVERAGE (slot: coverage-a2-9)
// The -mente adverbs (built on adjectives this block already taught: rápido→
// rápidamente, real→realmente) plus the degree words and set expressions that make
// speech sound native. Conventions and BLOCK-3 SCOPE: see es/unit40.js.
//
// MERGE NOTE: this is the block's highest-collision unit. u28 (Time and adverbs) is
// a thematic block that may independently teach some certainty/manner adverbs. The
// -mente manner adverbs (L1) are unlikely to clash; the certainty ones (L2,
// seguramente/probablemente) are the most exposed. Ownership rule decides: lower
// unit order wins, merge seat deletes the copy here. Flagged in §6.
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
        { id: "es-u48l1-rapidamente", type: "vocab", front: "rápidamente", reading: "rapidamente", meaning: "quickly", example: { jp: "Habla muy rápidamente.", en: "He speaks very quickly." }, accept: ["fast", "rapidly", "quick"], hint: "Spanish makes -ly adverbs by adding -mente to the FEMININE adjective: rápida → rápidamente. (You can also just say rápido.)" },
        { id: "es-u48l1-lentamente", type: "vocab", front: "lentamente", reading: "lentamente", meaning: "slowly", example: { jp: "Come muy lentamente.", en: "He eats very slowly." }, accept: ["slow"], hint: "lenta → lentamente. The opposite of rápidamente. The adjective lento = slow." },
        { id: "es-u48l1-facilmente", type: "vocab", front: "fácilmente", reading: "facilmente", meaning: "easily", example: { jp: "Lo hago fácilmente.", en: "I do it easily." }, accept: ["with ease"], hint: "fácil → fácilmente. The adjective keeps its accent under the new ending." },
        { id: "es-u48l1-claramente", type: "vocab", front: "claramente", reading: "claramente", meaning: "clearly", example: { jp: "Habla claramente, por favor.", en: "Speak clearly, please." }, accept: ["plainly", "obviously"], hint: "clara → claramente. From claro (u42). Also \"obviously\": claramente, tienes razón." },
        { id: "es-u48l1-perfectamente", type: "vocab", front: "perfectamente", reading: "perfectamente", meaning: "perfectly", example: { jp: "Entiendo perfectamente.", en: "I understand perfectly." }, accept: ["completely", "just fine"], hint: "From perfecto = perfect. Often just means \"completely/just fine\": está perfectamente bien." },
        { id: "es-u48l1-directamente", type: "vocab", front: "directamente", reading: "directamente", meaning: "directly / straight", example: { jp: "Voy directamente a casa.", en: "I'm going straight home." }, accept: ["straight", "right away"], hint: "From directo = direct. Straight to a place, or straight/frankly in manner." },
      ],
    },
    {
      id: "es-u48l2",
      unit: 48,
      lesson: 2,
      title: "Normalmente, seguramente",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how usual or likely: normalmente como en casa, probablemente llueve, realmente no lo sé.",
      items: [
        { id: "es-u48l2-normalmente", type: "vocab", front: "normalmente", reading: "normalmente", meaning: "normally / usually", example: { jp: "Normalmente como en casa.", en: "I usually eat at home." }, accept: ["usually", "as a rule"], hint: "From normal (u42). A very common sentence-opener for habits." },
        { id: "es-u48l2-generalmente", type: "vocab", front: "generalmente", reading: "generalmente", meaning: "generally", example: { jp: "Generalmente trabajo por la mañana.", en: "I generally work in the morning." }, accept: ["as a rule", "usually"], hint: "From general (u42). A close friend of normalmente. Por lo general means the same." },
        { id: "es-u48l2-seguramente", type: "vocab", front: "seguramente", reading: "seguramente", meaning: "probably / surely", example: { jp: "Seguramente llega tarde.", en: "He'll probably arrive late." }, accept: ["most likely", "surely", "no doubt"], hint: "From seguro (u42). Careful: it usually means \"probably\", not \"for sure\"." },
        { id: "es-u48l2-probablemente", type: "vocab", front: "probablemente", reading: "probablemente", meaning: "probably", example: { jp: "Probablemente llueve mañana.", en: "It'll probably rain tomorrow." }, accept: ["likely", "most likely"], hint: "From probable. A touch more formal than seguramente." },
        { id: "es-u48l2-realmente", type: "vocab", front: "realmente", reading: "realmente", meaning: "really / actually", example: { jp: "Realmente no lo sé.", en: "I really don't know." }, accept: ["actually", "truly", "in fact"], hint: "From real (u42). For emphasis or to correct: realmente es fácil = it's actually easy." },
        { id: "es-u48l2-exactamente", type: "vocab", front: "exactamente", reading: "exactamente", meaning: "exactly", example: { jp: "Es exactamente lo que quiero.", en: "It's exactly what I want." }, accept: ["precisely", "just"], hint: "From exacto (u50). ¡Exactamente! = Exactly! (agreeing)." },
      ],
    },
    {
      id: "es-u48l3",
      unit: 48,
      lesson: 3,
      title: "Apenas, incluso, tampoco",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Sharpen a statement: apenas tengo tiempo, incluso los niños, al menos, ni siquiera, yo tampoco.",
      items: [
        { id: "es-u48l3-apenas", type: "vocab", front: "apenas", reading: "apenas", meaning: "barely / hardly", example: { jp: "Apenas tengo tiempo.", en: "I barely have time." }, accept: ["hardly", "scarcely", "only just"], hint: "Almost none: apenas hay gente = there's hardly anyone. Also \"only just\" of time: apenas llegó = he'd only just arrived." },
        { id: "es-u48l3-incluso", type: "vocab", front: "incluso", reading: "incluso", meaning: "even", example: { jp: "Incluso los niños lo saben.", en: "Even the children know it." }, accept: ["including", "even"], hint: "Adds a surprising case: incluso yo = even me. Stronger than también (u3)." },
        { id: "es-u48l3-almenos", type: "vocab", front: "al menos", reading: "almenos", meaning: "at least", example: { jp: "Al menos tenemos comida.", en: "At least we have food." }, accept: ["at least"], hint: "menos (u5) inside a set phrase. Por lo menos means the same. The opposite of \"at most\" (como mucho)." },
        { id: "es-u48l3-nisiquiera", type: "vocab", front: "ni siquiera", reading: "nisiquiera", meaning: "not even", example: { jp: "Ni siquiera tengo dinero.", en: "I don't even have money." }, accept: ["not even"], hint: "The strong negative of incluso: ni siquiera me habló = he didn't even speak to me." },
        { id: "es-u48l3-masbien", type: "vocab", front: "más bien", reading: "masbien", meaning: "rather", example: { jp: "No es caro, más bien barato.", en: "It's not expensive, rather cheap." }, accept: ["more like", "if anything"], hint: "Corrects toward a better word: no es difícil, más bien largo = not hard, more like long." },
        { id: "es-u48l3-tampoco", type: "vocab", front: "tampoco", reading: "tampoco", meaning: "neither / not either", example: { jp: "Yo tampoco quiero ir.", en: "I don't want to go either." }, accept: ["me neither", "not either", "nor"], hint: "The negative of también (u3): —No voy. —Yo tampoco = \"I'm not going.\" \"Me neither.\"" },
      ],
    },
    {
      id: "es-u48l4",
      unit: 48,
      lesson: 4,
      title: "Por supuesto, por fin",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use set expressions: por supuesto, sin duda, de nuevo, por cierto, ¡por fin!, a lo mejor.",
      items: [
        { id: "es-u48l4-porsupuesto", type: "vocab", front: "por supuesto", reading: "porsupuesto", meaning: "of course", example: { jp: "Por supuesto que sí.", en: "Of course." }, accept: ["certainly", "naturally", "sure"], hint: "The emphatic \"of course\", warmer than claro. Por supuesto que no = of course not." },
        { id: "es-u48l4-sinduda", type: "vocab", front: "sin duda", reading: "sinduda", meaning: "without a doubt", example: { jp: "Sin duda es el mejor.", en: "It's without a doubt the best." }, accept: ["no doubt", "definitely", "surely"], hint: "sin (u13) + duda (from dudar, u44). The confident version of seguramente." },
        { id: "es-u48l4-denuevo", type: "vocab", front: "de nuevo", reading: "denuevo", meaning: "again", example: { jp: "Lo hago de nuevo.", en: "I'm doing it again." }, accept: ["once more", "anew"], hint: "nuevo (u6) in a set phrase = again. A close friend of otra vez (u19)." },
        { id: "es-u48l4-porcierto", type: "vocab", front: "por cierto", reading: "porcierto", meaning: "by the way", example: { jp: "Por cierto, ¿dónde está María?", en: "By the way, where's María?" }, accept: ["incidentally", "speaking of which"], hint: "cierto (u42) in a set phrase. Drops in a new topic: por cierto, … Not the same as \"of course\"." },
        { id: "es-u48l4-porfin", type: "vocab", front: "por fin", reading: "porfin", meaning: "finally / at last", example: { jp: "¡Por fin es viernes!", en: "It's finally Friday!" }, accept: ["at last", "finally"], hint: "After a long wait: ¡por fin! = at last! From el fin (end). Al fin means the same." },
        { id: "es-u48l4-alomejor", type: "vocab", front: "a lo mejor", reading: "alomejor", meaning: "maybe / perhaps", example: { jp: "A lo mejor llueve mañana.", en: "Maybe it'll rain tomorrow." }, accept: ["perhaps", "possibly"], hint: "An everyday \"maybe\", oddly built from mejor (u37). Followed by the normal present: a lo mejor viene." },
      ],
    },
  ],
};
