// ES Unit 60 — Problemas y soluciones (slot: problems-solutions) — B1
// ─────────────────────────────────────────────────────────────────────────────
// A2 named the problem and the solution — el problema, la solución, el error, el
// riesgo, arreglar, evitar, el éxito, el fracaso. B1 fills in the space between:
// the kinds of problem, the ways of solving one, what it means for something to
// break or fail, and the vocabulary of facing difficulty and not giving up.
// Every A2 problem word is used and re-taught nowhere; examples avoid the subjunctive (indicative + A2 conditional; subjunctive waits for u69-71).
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT60 = {
  id: "es-u60",
  lang: "es",
  title: "Problemas y soluciones",
  order: 60,
  stage: "b1",
  lessons: [
    {
      id: "es-u60l1",
      unit: 60,
      lesson: 1,
      title: "Kinds of problem",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a problem more precisely — la dificultad, el fallo, la avería, el inconveniente, complicado, el lío.",
      items: [
        { id: "es-u60l1-ladificultad", type: "vocab", front: "la dificultad", reading: "ladificultad", meaning: "difficulty", example: { jp: "Tuvo muchas dificultades para encontrar trabajo.", en: "He had a lot of difficulty finding work." }, accept: ["the trouble", "hardship"], hint: "From difícil (A1). Con dificultad = with difficulty. A more formal word than problema." },
        { id: "es-u60l1-elfallo", type: "vocab", front: "el fallo", reading: "elfallo", meaning: "flaw", example: { jp: "El plan tiene un fallo importante.", en: "The plan has a significant flaw." }, accept: ["the fault", "mistake", "glitch"], hint: "A fault or error in a plan, a machine, a person. From fallar (l3), to fail." },
        { id: "es-u60l1-laaveria", type: "vocab", front: "la avería", reading: "laaveria", meaning: "breakdown", example: { jp: "El coche tiene una avería en el motor.", en: "The car has a breakdown in the engine." }, accept: ["the fault", "malfunction"], hint: "A mechanical fault — cars, machines. el motor is a clear cognate." },
        { id: "es-u60l1-elinconveniente", type: "vocab", front: "el inconveniente", reading: "elinconveniente", meaning: "drawback", example: { jp: "El único inconveniente es el precio.", en: "The only drawback is the price." }, accept: ["the disadvantage", "snag"], hint: "A minor problem or downside. No hay inconveniente = there's no problem (I don't mind)." },
        { id: "es-u60l1-complicado", type: "vocab", front: "complicado", reading: "complicado", meaning: "complicated", example: { jp: "La situación es más complicada de lo que parece.", en: "The situation is more complicated than it seems." }, accept: ["complex", "tricky"], hint: "From complicar, to complicate. Near difícil (A1) but about tangled, not just hard." },
        { id: "es-u60l1-ellio", type: "vocab", front: "el lío", reading: "ellio", meaning: "mess", example: { jp: "Todo esto es un lío, no entiendo nada.", en: "This whole thing is a mess, I don't understand anything." }, accept: ["the muddle", "trouble"], hint: "A tangle or muddle — very colloquial. Meterse en un lío = to get into trouble. hacerse un lío = to get confused." },
      ],
    },
    {
      id: "es-u60l2",
      unit: 60,
      lesson: 2,
      title: "Solving it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about fixing a problem — resolver, solucionar, aclarar, el remedio, afrontar, sencillo.",
      items: [
        { id: "es-u60l2-aclarar", type: "vocab", front: "aclarar", reading: "aclarar", meaning: "to clarify", example: { jp: "Quiero aclarar una cosa antes de seguir.", en: "I want to clarify one thing before continuing." }, accept: ["to clear up", "to explain"], hint: "To make clear. From claro (A2). Also to rinse, or for the sky to clear up." },
        { id: "es-u60l2-elremedio", type: "vocab", front: "el remedio", reading: "elremedio", meaning: "remedy", example: { jp: "No hay más remedio que esperar.", en: "There's no choice but to wait." }, accept: ["the cure", "solution"], hint: "A cure or fix. No hay remedio = there's nothing to be done; no tener más remedio que = to have no choice but." },
        { id: "es-u60l2-afrontar", type: "vocab", front: "afrontar", reading: "afrontar", meaning: "to face up to", example: { jp: "Hay que afrontar el problema, no evitar la dificultad.", en: "You have to face the problem, not avoid the difficulty." }, accept: ["to confront", "to deal with"], hint: "To meet a problem head-on. From frente, the front. evitar is A2 — the two are opposites here." },
        { id: "es-u60l2-sencillo", type: "vocab", front: "sencillo", reading: "sencillo", meaning: "simple", example: { jp: "La solución es más sencilla de lo que piensas.", en: "The solution is simpler than you think." }, accept: ["easy", "straightforward"], hint: "Near fácil (A1), but sencillo means \"uncomplicated\" — the opposite of complicado (l1)." },
      ],
    },
    {
      id: "es-u60l3",
      unit: 60,
      lesson: 3,
      title: "Breaking and failing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say when things go wrong — fallar, estropear, dañar, el daño, fracasar, la culpa.",
      items: [
        { id: "es-u60l3-estropear", type: "vocab", front: "estropear", reading: "estropear", meaning: "to ruin", example: { jp: "La lluvia estropeó todos nuestros planes.", en: "The rain ruined all our plans." }, accept: ["to spoil", "to break"], hint: "To spoil or break. Estropearse = to break down (a machine) or go off (food)." },
        { id: "es-u60l3-danar", type: "vocab", front: "dañar", reading: "danar", meaning: "to damage", example: { jp: "El sol puede dañar la piel en verano.", en: "The sun can damage the skin in summer." }, accept: ["to harm", "to hurt"], hint: "To cause harm. la piel is u25. Hacer daño is the more everyday way to say it." },
        { id: "es-u60l3-eldano", type: "vocab", front: "el daño", reading: "eldano", meaning: "harm", example: { jp: "La tormenta causó mucho daño en el pueblo.", en: "The storm caused a lot of damage in the town." }, accept: ["the damage", "hurt"], hint: "hacer daño = to hurt; causar daño = to cause damage. causar is u52." },
        { id: "es-u60l3-laculpa", type: "vocab", front: "la culpa", reading: "laculpa", meaning: "fault", example: { jp: "No es culpa mía, yo no hice nada.", en: "It's not my fault, I didn't do anything." }, accept: ["the blame", "guilt"], hint: "tener la culpa = to be to blame; por culpa de = because of (someone's fault). echar la culpa = to blame." },
      ],
    },
    {
      id: "es-u60l4",
      unit: 60,
      lesson: 4,
      title: "Facing it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about getting through difficulty — enfrentarse, rendirse, insistir, la paciencia, salir adelante, el intento.",
      items: [
        { id: "es-u60l4-enfrentarse", type: "vocab", front: "enfrentarse", reading: "enfrentarse", meaning: "to confront", example: { jp: "Tuvo que enfrentarse a muchos problemas solo.", en: "He had to face many problems alone." }, accept: ["to face", "to stand up to"], hint: "enfrentarse A algo/alguien. From frente. Near afrontar (l2), but enfrentarse can also mean to clash with someone." },
        { id: "es-u60l4-rendirse", type: "vocab", front: "rendirse", reading: "rendirse", meaning: "to give up", example: { jp: "Nunca se rinde, aunque todo va mal.", en: "He never gives up, even when everything is going wrong." }, accept: ["to surrender", "to quit"], hint: "¡No te rindas! = Don't give up! The e becomes i: me rindo. Also to surrender in a fight." },
        { id: "es-u60l4-lapaciencia", type: "vocab", front: "la paciencia", reading: "lapaciencia", meaning: "patience", example: { jp: "Con paciencia se resuelve casi todo.", en: "With patience almost anything gets solved." }, accept: ["the forbearance"], hint: "From paciente (A2). Tener paciencia = to be patient; perder la paciencia = to lose it." },
        { id: "es-u60l4-saliradelante", type: "vocab", front: "salir adelante", reading: "saliradelante", meaning: "to get by", example: { jp: "La familia salió adelante a pesar de todo.", en: "The family pulled through in spite of everything." }, accept: ["to pull through", "to make it"], hint: "salir (A1) + adelante (forward). To overcome hard times. a pesar de is u29." },
        { id: "es-u60l4-elintento", type: "vocab", front: "el intento", reading: "elintento", meaning: "attempt", example: { jp: "Aprobó después de dos intentos.", en: "He passed after two attempts." }, accept: ["the try", "effort"], hint: "From intentar (A2). Un intento más = one more try; en el primer intento = on the first try." },
      ],
    },
  ],
};
