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
        { id: "es-u51l1-lapostura", type: "vocab", front: "la postura", reading: "lapostura", meaning: "stance", example: { jp: "Su postura sobre el tema no está nada clara.", en: "His stance on the issue isn't at all clear." }, drill: { jp: "La postura del gobierno es clara", en: "The government's stance is clear" }, accept: ["the position", "attitude"], hint: "A position on an issue. Tomar una postura = to take a stance. Also literally a body posture." },
        { id: "es-u51l1-elargumento", type: "vocab", front: "el argumento", reading: "elargumento", meaning: "argument", example: { jp: "Tu argumento es bueno, pero necesita un ejemplo claro.", en: "Your argument is good, but it needs a clear example." }, drill: { jp: "El argumento del autor es débil", en: "The author's argument is weak" }, accept: ["the reasoning", "case", "plot"], hint: "A line of reasoning — NOT a quarrel (that's una discusión). Also the plot of a film or book." },
        { id: "es-u51l1-afirmar", type: "vocab", front: "afirmar", reading: "afirmar", meaning: "to assert", example: { jp: "El autor afirma que todo es falso, aunque no da ninguna razón.", en: "The author asserts that it's all false, though he gives no reason." }, drill: { jp: "Afirmar algo sin pruebas es peligroso", en: "Asserting something without proof is dangerous" }, accept: ["to state", "to claim", "to affirm"], hint: "To state firmly as true — the opposite of negar. Stronger than decir." },
        { id: "es-u51l1-sostener", type: "vocab", front: "sostener", reading: "sostener", meaning: "to maintain", example: { jp: "Sostengo que es la mejor solución para todos, y no cambio de opinión.", en: "I maintain that it's the best solution for everyone, and I'm not changing my mind." }, drill: { jp: "Quiero sostener mi opinión", en: "I want to maintain my opinion" }, accept: ["to hold (a view)", "to sustain", "to hold up"], hint: "To hold a position over time; near mantener (A2) but for arguments. Also to physically hold something up." },
        { id: "es-u51l1-manifestar", type: "vocab", front: "manifestar", reading: "manifestar", meaning: "to state / express", example: { jp: "El director manifestó que no iba a cambiar de opinión.", en: "The director stated that he was not going to change his mind." }, drill: { jp: "Quiero manifestar mi desacuerdo", en: "I want to express my disagreement" }, accept: ["to express", "to declare", "to state publicly"], hint: "More formal than decir: manifestar una idea, una duda, el apoyo. Common in the press: el ministro manifestó que…" },
        { id: "es-u51l1-latesis", type: "vocab", front: "la tesis", reading: "latesis", meaning: "the thesis / main claim", example: { jp: "Su tesis es que el problema no es económico sino social.", en: "His main claim is that the problem is not economic but social." }, drill: { jp: "La tesis del libro es simple", en: "The book's thesis is simple" }, accept: ["the thesis", "the main claim", "the argument"], hint: "The one sentence a whole argument defends. Invariable in the plural: las tesis." },
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
        { id: "es-u51l2-estardeacuerdo", type: "vocab", front: "estar de acuerdo", reading: "estardeacuerdo", meaning: "to agree", example: { jp: "Estoy de acuerdo con tu idea, aunque cambiaría una cosa.", en: "I agree with your idea, though I'd change one thing." }, drill: { jp: "Quiero estar de acuerdo con todos", en: "I want to agree with everyone" }, accept: ["to be in agreement"], hint: "estar de acuerdo CON alguien. On its own, ¡de acuerdo! means \"OK, agreed\"." },
        { id: "es-u51l2-elacuerdo", type: "vocab", front: "el acuerdo", reading: "elacuerdo", meaning: "agreement", example: { jp: "Después de discutir mucho, al final llegamos a un acuerdo.", en: "After arguing a lot, we finally reached an agreement." }, drill: { jp: "El acuerdo entre los dos es claro", en: "The agreement between the two is clear" }, accept: ["the deal", "accord"], hint: "llegar a un acuerdo = to reach an agreement. From acordar, to agree on." },
        { id: "es-u51l2-coincidir", type: "vocab", front: "coincidir", reading: "coincidir", meaning: "to agree", example: { jp: "Coincido con ella en este punto, pero no en todo lo demás.", en: "I agree with her on this point, but not on everything else." }, drill: { jp: "Coincidir con el jefe es raro", en: "Agreeing with the boss is rare" }, accept: ["to coincide", "to concur"], hint: "coincidir con = to share a view; also to coincide in time or place — coincidimos en la fiesta." },
        { id: "es-u51l2-eldesacuerdo", type: "vocab", front: "el desacuerdo", reading: "eldesacuerdo", meaning: "disagreement", example: { jp: "Hay un desacuerdo sobre el precio, y nadie cambia de opinión.", en: "There's a disagreement about the price, and nobody changes their mind." }, drill: { jp: "El desacuerdo es sobre el sueldo", en: "The disagreement is about the salary" }, accept: ["the dispute"], hint: "des- (un-) + acuerdo. Estar en desacuerdo = to disagree, the mirror of estar de acuerdo." },
        { id: "es-u51l2-oponerse", type: "vocab", front: "oponerse", reading: "oponerse", meaning: "to oppose / be against", example: { jp: "Muchos vecinos se oponen al nuevo plan del gobierno.", en: "Many neighbours are opposed to the government's new plan." }, drill: { jp: "Oponerse al plan es difícil", en: "Opposing the plan is difficult" }, accept: ["to be against", "to object to", "to be opposed to"], hint: "Always reflexive and always with a: oponerse A algo. Me opongo, se opone." },
        { id: "es-u51l2-conforme", type: "vocab", front: "conforme", reading: "conforme", meaning: "in agreement / happy with", example: { jp: "No estoy conforme con el resultado de la reunión.", en: "I'm not happy with the outcome of the meeting." }, drill: { jp: "Estoy conforme con el resultado", en: "I'm happy with the result" }, accept: ["satisfied", "in agreement", "agreed"], hint: "estar conforme CON algo = to accept it. Softer than estar de acuerdo: it is about accepting, not sharing the view." },
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
        { id: "es-u51l3-demostrar", type: "vocab", front: "demostrar", reading: "demostrar", meaning: "to prove", example: { jp: "Los datos demuestran que el problema es más grande de lo que parece.", en: "The data proves that the problem is bigger than it seems." }, drill: { jp: "Quiero demostrar mi tesis", en: "I want to prove my thesis" }, accept: ["to show", "to demonstrate"], hint: "To prove or clearly show. The o becomes ue: demuestro, demuestras." },
        { id: "es-u51l3-laprueba", type: "vocab", front: "la prueba", reading: "laprueba", meaning: "proof", example: { jp: "Esta foto es la prueba de que estuvo aquí.", en: "This photo is the proof that he was here." }, drill: { jp: "La prueba del error es clara", en: "The proof of the mistake is clear" }, accept: ["the evidence", "test"], hint: "Proof or evidence — and also a test or a trial. From probar (A1), to try/test." },
        { id: "es-u51l3-eldato", type: "vocab", front: "el dato", reading: "eldato", meaning: "piece of data", example: { jp: "Este dato es importante para entender el resto.", en: "This piece of data is important for understanding the rest." }, drill: { jp: "El dato del periódico es falso", en: "The figure in the paper is false" }, accept: ["the fact", "figure", "information"], hint: "A single fact or figure; los datos = data. Not the same as la fecha, a date." },
        { id: "es-u51l3-justificar", type: "vocab", front: "justificar", reading: "justificar", meaning: "to justify", example: { jp: "Tienes que justificar tu decisión con razones claras.", en: "You have to justify your decision with clear reasons." }, drill: { jp: "Quiero justificar mi postura", en: "I want to justify my stance" }, accept: ["to back up", "to account for"], hint: "To give reasons for. From justo, fair. La justificación is the noun." },
        { id: "es-u51l3-deducir", type: "vocab", front: "deducir", reading: "deducir", meaning: "to deduce", example: { jp: "De todo esto deducimos que el plan no era bueno.", en: "From all this we deduce that the plan wasn't good." }, drill: { jp: "Deducir la causa es difícil", en: "Deducing the cause is difficult" }, accept: ["to infer", "to work out"], hint: "To work something out from the evidence. Deduzco in the yo form, like conozco." },
        { id: "es-u51l3-laconclusion", type: "vocab", front: "la conclusión", reading: "laconclusion", meaning: "conclusion", example: { jp: "Al final llegamos a la conclusión de que teníamos razón.", en: "In the end we came to the conclusion that we were right." }, drill: { jp: "La conclusión del libro es clara", en: "The book's conclusion is clear" }, accept: ["the ending", "finding"], hint: "llegar a una conclusión = to reach a conclusion. En conclusión… opens a summing-up." },
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
        { id: "es-u51l4-laobjecion", type: "vocab", front: "la objeción", reading: "laobjecion", meaning: "objection", example: { jp: "Su objeción fue el precio, nada más.", en: "His objection was the price, nothing else." }, drill: { jp: "La objeción del jefe es seria", en: "The boss's objection is serious" }, accept: ["the complaint", "protest"], hint: "A reason against. Poner una objeción = to raise an objection." },
        { id: "es-u51l4-afavor", type: "vocab", front: "a favor", reading: "afavor", meaning: "in favour", example: { jp: "La mayoría está a favor del cambio, aunque algunos dudan.", en: "Most are in favour of the change, though some have doubts." }, drill: { jp: "Estoy a favor del cambio", en: "I'm in favour of the change" }, accept: ["for", "in support"], hint: "estar a favor de = to be for something. From el favor (A1). Its opposite is the next card." },
        { id: "es-u51l4-encontra", type: "vocab", front: "en contra", reading: "encontra", meaning: "against", example: { jp: "Estoy en contra de esa idea por muchas razones.", en: "I'm against that idea for many reasons." }, drill: { jp: "Estoy en contra del plan", en: "I'm against the plan" }, accept: ["opposed", "counter"], hint: "estar en contra de = to be against. From contra, against — the mirror of a favor." },
        { id: "es-u51l4-ponerenduda", type: "vocab", front: "poner en duda", reading: "ponerenduda", meaning: "to call into question", example: { jp: "Nadie pone en duda que trabaja mucho, solo cómo trabaja.", en: "Nobody questions that he works hard, only how he works." }, drill: { jp: "Poner en duda el dato es normal", en: "Calling the figure into question is normal" }, accept: ["to question", "to doubt"], hint: "poner (A2) + en duda (from la duda). To cast doubt on something — stronger than just dudar." },
        { id: "es-u51l4-objetar", type: "vocab", front: "objetar", reading: "objetar", meaning: "to object", example: { jp: "Nadie objetó nada durante la reunión.", en: "Nobody objected to anything during the meeting." }, drill: { jp: "Objetar sin argumento es inútil", en: "Objecting without an argument is useless" }, accept: ["to raise an objection", "to protest", "to argue against"], hint: "The verb behind la objeción in this lesson. Objetar que… = to object that…" },
        { id: "es-u51l4-ceder", type: "vocab", front: "ceder", reading: "ceder", meaning: "to give in / give way", example: { jp: "Al final cedió y aceptó la propuesta de su jefe.", en: "In the end he gave in and accepted his boss's proposal." }, drill: { jp: "Ceder ante el jefe es normal", en: "Giving in to the boss is normal" }, accept: ["to give in", "to yield", "to back down"], hint: "To stop resisting: ceder ante la presión. On the road, ceder el paso = to give way." },
      ],
    },
  ],
};
