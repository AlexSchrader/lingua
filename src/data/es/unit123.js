// ES Unit 123 — Time and pace (slot: time-rhythm) — B2
// AUTHORED (block 3, u114-u126). 4 lessons x 6 cards. Every example uses only vocab
// introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 3 (u114–u126). Do not widen it.
//   OWNS: Placing and pacing events in formal Spanish — immediacy, anteriority,
//         recurrence, interim, duration.
//   NOT:  Change over time (u59) and the everyday time words of A1/A2 (u21, u28).
//
// Rejected as already taught: de inmediato + entretanto (u76), el plazo (u56), en breve
// (u62), duradero (u75), el periódico (u32). Rejected as a relative of a taught word:
// previamente (previo, u75).
export const ES_UNIT123 = {
  id: "es-u123",
  lang: "es",
  title: "El tiempo y su ritmo",
  order: 123,
  stage: "b2",
  lessons: [
    {
      id: "es-u123l1",
      unit: 123,
      lesson: 1,
      title: "Lo inmediato",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something happened on the spot, followed straight after, or is about to happen at any moment.",
      items: [
        { id: "es-u123l1-alinstante", type: "vocab", front: "al instante", reading: "alinstante", meaning: "instantly", example: { jp: "Reconoció a su hermana al instante.", en: "He recognised his sister instantly." }, accept: ["instantly", "at once", "immediately"], hint: "About speed of reaction. It answers how fast, not how soon." },
        { id: "es-u123l1-enelacto", type: "vocab", front: "en el acto", reading: "enelacto", meaning: "there and then / on the spot", example: { jp: "Lo detuvieron en el acto, delante de todos.", en: "They arrested him on the spot, in front of everyone." }, accept: ["on the spot", "there and then", "immediately"], hint: "No gap at all — it happened as the other thing happened. Contrast acto seguido, two cards down, which is the NEXT thing rather than the same moment. Shop signs use it for while-you-wait service: reparaciones en el acto." },
        { id: "es-u123l1-actoseguido", type: "vocab", front: "acto seguido", reading: "actoseguido", meaning: "immediately afterwards", example: { jp: "Leyó la sentencia y, acto seguido, salió de la sala.", en: "He read out the ruling and, immediately afterwards, left the room." }, accept: ["immediately afterwards", "straight after", "thereupon"], hint: "The next thing in the account, not the same moment — that is en el acto, two cards up. Narrative rather than conversational: it links two actions in a written record." },
        { id: "es-u123l1-deunmomentoaotro", type: "vocab", front: "de un momento a otro", reading: "deunmomentoaotro", meaning: "any moment now", example: { jp: "La decisión del tribunal puede llegar de un momento a otro.", en: "The court's decision may come any moment now." }, accept: ["any moment now", "at any moment", "any minute"], hint: "Waiting for something already on its way. It carries the tension that a plain pronto does not." },
        { id: "es-u123l1-sindilacion", type: "vocab", front: "sin dilación", reading: "sindilacion", meaning: "without delay", example: { jp: "El juez ordenó que se entregaran los documentos sin dilación.", en: "The judge ordered the documents to be handed over without delay." }, accept: ["without delay", "forthwith", "promptly"], hint: "The register of orders and rulings. In speech you would say enseguida." },
        { id: "es-u123l1-desubito", type: "vocab", front: "de súbito", reading: "desubito", meaning: "all of a sudden", example: { jp: "De súbito se quedó callado y no dijo nada más.", en: "All of a sudden he fell silent and said nothing more." }, accept: ["all of a sudden", "suddenly", "abruptly"], hint: "The literary twin of de repente. You meet it in novels far more often than in conversation." },
      ],
    },
    {
      id: "es-u123l2",
      unit: 123,
      lesson: 2,
      title: "Antes y después",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Order events in formal writing: say something was known in advance, arranged with notice, or dealt with at a later stage.",
      items: [
        { id: "es-u123l2-deantemano", type: "vocab", front: "de antemano", reading: "deantemano", meaning: "beforehand / in advance", example: { jp: "Sabía de antemano lo que iban a contestar.", en: "He knew beforehand what they were going to answer." }, accept: ["beforehand", "in advance", "ahead of time"], hint: "About knowledge held before the event. Gracias de antemano is the standard sign-off of a request." },
        { id: "es-u123l2-conantelacion", type: "vocab", front: "con antelación", reading: "conantelacion", meaning: "with advance notice", example: { jp: "Hay que avisar con al menos dos días de antelación.", en: "You have to give at least two days' notice." }, accept: ["with advance notice", "in advance", "ahead of time"], hint: "This one takes a measure: con dos semanas de antelación. De antemano never does." },
        { id: "es-u123l2-anteriormente", type: "vocab", front: "anteriormente", reading: "anteriormente", meaning: "previously", example: { jp: "Anteriormente había trabajado en dos empresas del sector.", en: "He had previously worked at two companies in the sector." }, accept: ["previously", "earlier", "formerly"], hint: "Points back to an earlier moment in the same account. The written alternative to antes." },
        { id: "es-u123l2-posteriormente", type: "vocab", front: "posteriormente", reading: "posteriormente", meaning: "subsequently", example: { jp: "El acuerdo se firmó en marzo y posteriormente se modificó dos veces.", en: "The agreement was signed in March and was subsequently amended twice." }, accept: ["subsequently", "later", "afterwards"], hint: "The mirror of anteriormente, and just as much a written word." },
        { id: "es-u123l2-ulterior", type: "vocab", front: "ulterior", reading: "ulterior", meaning: "later / subsequent", example: { jp: "Eso se tratará en una reunión ulterior.", en: "That will be dealt with at a subsequent meeting." }, accept: ["subsequent", "later", "further"], hint: "An adjective, not an adverb: una fase ulterior. Con ulterioridad exists but is heavy even for officials." },
        { id: "es-u123l2-lavispera", type: "vocab", front: "la víspera", reading: "lavispera", meaning: "the day before / eve", example: { jp: "La víspera del juicio no durmió nada.", en: "The day before the trial he did not sleep at all." }, accept: ["the day before", "the eve", "the previous day"], hint: "La víspera DE algo. En vísperas de means on the eve of, and can stretch to weeks." },
      ],
    },
    {
      id: "es-u123l3",
      unit: 123,
      lesson: 3,
      title: "El intervalo y la duración",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about spans of time: the gap between two events, what happened in the meantime, and how long it all ran.",
      items: [
        { id: "es-u123l3-elinterin", type: "vocab", front: "el ínterin", reading: "elinterin", meaning: "the interim / meantime", example: { jp: "En el ínterin, nadie quiso decidir nada.", en: "In the interim, nobody was willing to decide anything." }, accept: ["the interim", "the meantime", "the interval"], hint: "Almost always in the frame en el ínterin. Latin, and it keeps its Latin stress: ÍN-te-rin." },
        { id: "es-u123l3-ellapso", type: "vocab", front: "el lapso", reading: "ellapso", meaning: "the span of time", example: { jp: "En el lapso de un año cambió tres veces de trabajo.", en: "In the space of a year he changed jobs three times." }, accept: ["the span", "the space of time", "the period"], hint: "En el lapso de + a measure. It is the time that passes, not the gap between two things." },
        { id: "es-u123l3-elintervalo", type: "vocab", front: "el intervalo", reading: "elintervalo", meaning: "the interval / spacing", example: { jp: "Los trenes salen a intervalos de diez minutos.", en: "The trains leave at ten-minute intervals." }, accept: ["the interval", "the spacing", "the gap between"], hint: "The empty space between two events, and so it repeats: a intervalos regulares." },
        { id: "es-u123l3-eltranscurso", type: "vocab", front: "el transcurso", reading: "eltranscurso", meaning: "the course (of time)", example: { jp: "En el transcurso de la reunión cambiaron de opinión.", en: "In the course of the meeting they changed their minds." }, accept: ["the course", "the passing", "the passage"], hint: "En el transcurso de is the frame — the time during which something unfolds." },
        { id: "es-u123l3-prolongarse", type: "vocab", front: "prolongarse", reading: "prolongarse", meaning: "to drag on / go on longer", example: { jp: "El juicio se prolongó durante casi dos años.", en: "The trial dragged on for almost two years." }, accept: ["to drag on", "to go on", "to be extended", "to last"], hint: "Reflexive when time stretches by itself; prolongar algo when somebody extends it deliberately." },
        { id: "es-u123l3-mediar", type: "vocab", front: "mediar", reading: "mediar", meaning: "to elapse in between", example: { jp: "Entre los dos hechos mediaron casi tres años.", en: "Almost three years elapsed between the two events." }, accept: ["to elapse in between", "to come between", "to intervene"], hint: "Mediar ENTRE dos cosas — time, or distance, sitting between them. It also means to mediate a dispute." },
      ],
    },
    {
      id: "es-u123l4",
      unit: 123,
      lesson: 4,
      title: "La repetición y el paso",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how often and how fast something happens: recurring, occasional, repeated, gradual, unceasing or short-lived.",
      items: [
        { id: "es-u123l4-recurrente", type: "vocab", front: "recurrente", reading: "recurrente", meaning: "recurring", example: { jp: "Es un problema recurrente que vuelve cada verano.", en: "It is a recurring problem that comes back every summer." }, accept: ["recurring", "recurrent", "repeated"], hint: "It comes back on its own, without anyone bringing it. Un tema recurrente is a subject someone always returns to." },
        { id: "es-u123l4-esporadico", type: "vocab", front: "esporádico", reading: "esporadico", meaning: "sporadic / occasional", example: { jp: "Solo hubo contactos esporádicos entre las dos partes.", en: "There were only sporadic contacts between the two sides." }, accept: ["sporadic", "occasional", "intermittent"], hint: "Irregular and few. Recurrente has a pattern; esporádico has none." },
        { id: "es-u123l4-reiteradamente", type: "vocab", front: "reiteradamente", reading: "reiteradamente", meaning: "repeatedly", example: { jp: "Se le pidió reiteradamente que entregara el informe.", en: "He was repeatedly asked to hand in the report." }, accept: ["repeatedly", "time and again", "on repeated occasions"], hint: "Formal and faintly accusing: the repetition is somebody's fault. Common in complaints and rulings." },
        { id: "es-u123l4-paulatino", type: "vocab", front: "paulatino", reading: "paulatino", meaning: "gradual", example: { jp: "Hubo una mejora paulatina a lo largo del año.", en: "There was a gradual improvement over the year." }, accept: ["gradual", "slow and steady", "step by step"], hint: "Slow but continuous, and never dramatic. The adverb paulatinamente is just as common." },
        { id: "es-u123l4-incesante", type: "vocab", front: "incesante", reading: "incesante", meaning: "unceasing", example: { jp: "El ruido incesante de la obra no dejaba trabajar a nadie.", en: "The unceasing noise from the building work let nobody work." }, accept: ["unceasing", "incessant", "relentless"], hint: "From cesar, to cease. Rain, noise and criticism are its usual subjects." },
        { id: "es-u123l4-efimero", type: "vocab", front: "efímero", reading: "efimero", meaning: "short-lived / ephemeral", example: { jp: "El acuerdo resultó efímero: duró tres meses.", en: "The agreement proved short-lived: it lasted three months." }, accept: ["short-lived", "ephemeral", "fleeting"], hint: "Greek for lasting a day. Said of fashions, fame and agreements — and it always sounds a little sad." },
      ],
    },
  ],
};
