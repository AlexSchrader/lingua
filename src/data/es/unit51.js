// ES Unit 51 — Opinión y acuerdo (slot: opinion) — B1
// ─────────────────────────────────────────────────────────────────────────────
// FIRST B1 UNIT. A2 gave the learner an opinion — creer, pensar, la opinión,
// parecer, dudar, estar seguro — but no way to ARGUE one. B1 is where a language
// stops being a phrasebook and starts being usable, and argument is the spine of
// that: stating a position, agreeing and disagreeing precisely, backing a claim
// with evidence, and conceding a point before pushing back.
//
// Two things change from A2 and hold for the whole band:
//   1. Examples get longer — one clause becomes two, joined by the connectors A2
//      taught (pero, aunque, sin embargo, así que, porque). That length is the
//      point; it's where opinion becomes argument.
//   2. Register still waits — these examples avoid the subjunctive (they use the indicative and the A2 conditional). Spanish
//      argument leans hard on the subjunctive (dudo que SEA, no creo que TENGA),
//      but that mood is taught in this block's grammar units (u69–71), so B1
//      block-1 examples are built to need only the indicative the learner owns.
// Every A2 opinion word is USED here and re-taught nowhere.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT51 = {
  id: "es-u51",
  lang: "es",
  title: "Opinión y acuerdo",
  order: 51,
  stage: "b1",
  lessons: [
    // Lesson 1: stating a position
    {
      id: "es-u51l1",
      unit: 51,
      lesson: 1,
      title: "Stating a position",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Put forward and hold a view — opinar, mi punto de vista, la postura, el argumento, afirmar, sostener — not just say creo que.",
      items: [
        { id: "es-u51l1-opinar", type: "vocab", front: "opinar", reading: "opinar", meaning: "to give an opinion", example: { jp: "Opino que deberíamos esperar un poco más antes de decidir.", en: "I think we should wait a bit longer before deciding." }, accept: ["to think", "to have an opinion"], hint: "opinar que + indicative. The noun la opinión is A2; this is the verb. ¿Tú qué opinas? — what do you reckon?" },
        { id: "es-u51l1-elpuntodevista", type: "vocab", front: "el punto de vista", reading: "elpuntodevista", meaning: "point of view", example: { jp: "Desde mi punto de vista, la idea es buena, pero no va a funcionar.", en: "From my point of view, the idea is good, but it's not going to work." }, accept: ["the viewpoint", "perspective"], hint: "el punto (A2) + de vista. Desde mi punto de vista = in my view — the standard way to open an opinion." },
        { id: "es-u51l1-lapostura", type: "vocab", front: "la postura", reading: "lapostura", meaning: "stance", example: { jp: "Su postura sobre el tema no está nada clara.", en: "His stance on the issue isn't at all clear." }, accept: ["the position", "attitude"], hint: "A position on an issue. Tomar una postura = to take a stance. Also literally a body posture." },
        { id: "es-u51l1-elargumento", type: "vocab", front: "el argumento", reading: "elargumento", meaning: "argument", example: { jp: "Tu argumento es bueno, pero necesita un ejemplo claro.", en: "Your argument is good, but it needs a clear example." }, accept: ["the reasoning", "case", "plot"], hint: "A line of reasoning — NOT a quarrel (that's una discusión). Also the plot of a film or book." },
        { id: "es-u51l1-afirmar", type: "vocab", front: "afirmar", reading: "afirmar", meaning: "to assert", example: { jp: "El autor afirma que todo es falso, aunque no da ninguna razón.", en: "The author asserts that it's all false, though he gives no reason." }, accept: ["to state", "to claim", "to affirm"], hint: "To state firmly as true — the opposite of negar. Stronger than decir." },
        { id: "es-u51l1-sostener", type: "vocab", front: "sostener", reading: "sostener", meaning: "to maintain", example: { jp: "Sostengo que es la mejor solución para todos, y no cambio de opinión.", en: "I maintain that it's the best solution for everyone, and I'm not changing my mind." }, accept: ["to hold (a view)", "to sustain", "to hold up"], hint: "To hold a position over time; near mantener (A2) but for arguments. Also to physically hold something up." },
      ],
    },
    // Lesson 2: agreeing and disagreeing
    {
      id: "es-u51l2",
      unit: 51,
      lesson: 2,
      title: "Agreeing and disagreeing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Line up with a view or against it — estar de acuerdo, llegar a un acuerdo, coincidir, el desacuerdo, discutir, negar.",
      items: [
        { id: "es-u51l2-estardeacuerdo", type: "vocab", front: "estar de acuerdo", reading: "estardeacuerdo", meaning: "to agree", example: { jp: "Estoy de acuerdo con tu idea, aunque cambiaría una cosa.", en: "I agree with your idea, though I'd change one thing." }, accept: ["to be in agreement"], hint: "estar de acuerdo CON alguien. On its own, ¡de acuerdo! means \"OK, agreed\"." },
        { id: "es-u51l2-elacuerdo", type: "vocab", front: "el acuerdo", reading: "elacuerdo", meaning: "agreement", example: { jp: "Después de discutir mucho, al final llegamos a un acuerdo.", en: "After arguing a lot, we finally reached an agreement." }, accept: ["the deal", "accord"], hint: "llegar a un acuerdo = to reach an agreement. From acordar, to agree on." },
        { id: "es-u51l2-coincidir", type: "vocab", front: "coincidir", reading: "coincidir", meaning: "to agree", example: { jp: "Coincido con ella en este punto, pero no en todo lo demás.", en: "I agree with her on this point, but not on everything else." }, accept: ["to coincide", "to concur"], hint: "coincidir con = to share a view; also to coincide in time or place — coincidimos en la fiesta." },
        { id: "es-u51l2-eldesacuerdo", type: "vocab", front: "el desacuerdo", reading: "eldesacuerdo", meaning: "disagreement", example: { jp: "Hay un desacuerdo sobre el precio, y nadie cambia de opinión.", en: "There's a disagreement about the price, and nobody changes their mind." }, accept: ["the dispute"], hint: "des- (un-) + acuerdo. Estar en desacuerdo = to disagree, the mirror of estar de acuerdo." },
        { id: "es-u51l2-discutir", type: "vocab", front: "discutir", reading: "discutir", meaning: "to argue", example: { jp: "Discuten mucho, pero al final siempre se entienden.", en: "They argue a lot, but in the end they always understand each other." }, accept: ["to discuss", "to quarrel"], hint: "Both to discuss and to quarrel — the tone decides. Una discusión can be a debate or a row." },
        { id: "es-u51l2-negar", type: "vocab", front: "negar", reading: "negar", meaning: "to deny", example: { jp: "Niega todo lo que dijo la semana pasada.", en: "He denies everything he said last week." }, accept: ["to refuse", "to say no"], hint: "To say something isn't true. Negarse a + verb = to refuse to do something. The e becomes ie: niego, niegas." },
      ],
    },
    // Lesson 3: backing a claim
    {
      id: "es-u51l3",
      unit: 51,
      lesson: 3,
      title: "Backing a claim",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Support what you say with evidence — demostrar, la prueba, el dato, justificar, deducir, la conclusión.",
      items: [
        { id: "es-u51l3-demostrar", type: "vocab", front: "demostrar", reading: "demostrar", meaning: "to prove", example: { jp: "Los datos demuestran que el problema es más grande de lo que parece.", en: "The data proves that the problem is bigger than it seems." }, accept: ["to show", "to demonstrate"], hint: "To prove or clearly show. The o becomes ue: demuestro, demuestras." },
        { id: "es-u51l3-laprueba", type: "vocab", front: "la prueba", reading: "laprueba", meaning: "proof", example: { jp: "Esta foto es la prueba de que estuvo aquí.", en: "This photo is the proof that he was here." }, accept: ["the evidence", "test"], hint: "Proof or evidence — and also a test or a trial. From probar (A1), to try/test." },
        { id: "es-u51l3-eldato", type: "vocab", front: "el dato", reading: "eldato", meaning: "piece of data", example: { jp: "Este dato es importante para entender el resto.", en: "This piece of data is important for understanding the rest." }, accept: ["the fact", "figure", "information"], hint: "A single fact or figure; los datos = data. Not the same as la fecha, a date." },
        { id: "es-u51l3-justificar", type: "vocab", front: "justificar", reading: "justificar", meaning: "to justify", example: { jp: "Tienes que justificar tu decisión con razones claras.", en: "You have to justify your decision with clear reasons." }, accept: ["to back up", "to account for"], hint: "To give reasons for. From justo, fair. La justificación is the noun." },
        { id: "es-u51l3-deducir", type: "vocab", front: "deducir", reading: "deducir", meaning: "to deduce", example: { jp: "De todo esto deducimos que el plan no era bueno.", en: "From all this we deduce that the plan wasn't good." }, accept: ["to infer", "to work out"], hint: "To work something out from the evidence. Deduzco in the yo form, like conozco." },
        { id: "es-u51l3-laconclusion", type: "vocab", front: "la conclusión", reading: "laconclusion", meaning: "conclusion", example: { jp: "Al final llegamos a la conclusión de que teníamos razón.", en: "In the end we came to the conclusion that we were right." }, accept: ["the ending", "finding"], hint: "llegar a una conclusión = to reach a conclusion. En conclusión… opens a summing-up." },
      ],
    },
    // Lesson 4: conceding and objecting
    {
      id: "es-u51l4",
      unit: 51,
      lesson: 4,
      title: "Conceding and objecting",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Give ground, then push back — reconocer, admitir, la objeción, a favor, en contra, poner en duda.",
      items: [
        { id: "es-u51l4-reconocer", type: "vocab", front: "reconocer", reading: "reconocer", meaning: "to admit", example: { jp: "Reconozco que tienes razón, pero sigo pensando lo mismo.", en: "I admit you're right, but I still think the same." }, accept: ["to acknowledge", "to recognize"], hint: "To acknowledge a point — and also to recognize a face or place. Reconozco in the yo form." },
        { id: "es-u51l4-admitir", type: "vocab", front: "admitir", reading: "admitir", meaning: "to admit", example: { jp: "Admite que no tiene razón, pero no quiere pedir perdón.", en: "He admits he's not right, but he won't apologize." }, accept: ["to accept", "to concede"], hint: "To accept something is true, often reluctantly. Near reconocer; admitir leans more on confessing a fault." },
        { id: "es-u51l4-laobjecion", type: "vocab", front: "la objeción", reading: "laobjecion", meaning: "objection", example: { jp: "Su objeción fue el precio, nada más.", en: "His objection was the price, nothing else." }, accept: ["the complaint", "protest"], hint: "A reason against. Poner una objeción = to raise an objection." },
        { id: "es-u51l4-afavor", type: "vocab", front: "a favor", reading: "afavor", meaning: "in favour", example: { jp: "La mayoría está a favor del cambio, aunque algunos dudan.", en: "Most are in favour of the change, though some have doubts." }, accept: ["for", "in support"], hint: "estar a favor de = to be for something. From el favor (A1). Its opposite is the next card." },
        { id: "es-u51l4-encontra", type: "vocab", front: "en contra", reading: "encontra", meaning: "against", example: { jp: "Estoy en contra de esa idea por muchas razones.", en: "I'm against that idea for many reasons." }, accept: ["opposed", "counter"], hint: "estar en contra de = to be against. From contra, against — the mirror of a favor." },
        { id: "es-u51l4-ponerenduda", type: "vocab", front: "poner en duda", reading: "ponerenduda", meaning: "to call into question", example: { jp: "Nadie pone en duda que trabaja mucho, solo cómo trabaja.", en: "Nobody questions that he works hard, only how he works." }, accept: ["to question", "to doubt"], hint: "poner (A2) + en duda (from la duda). To cast doubt on something — stronger than just dudar." },
      ],
    },
  ],
};
