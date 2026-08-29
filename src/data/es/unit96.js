// ES Unit 96 — Art criticism (slot: criticism) — B2
// Authored: block 1, group 1. 4 lessons x 6 cards.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 1 (u88–u100). Do not widen it.
//   OWNS: Judging a work — movements, style, influence, canon, the critic's vocabulary.
//   NOT:  MAKING a work (u121) and enjoying the arts at A2 (u35). If it names a tool or
//         a craft, it is u121's.
export const ES_UNIT96 = {
  id: "es-u96",
  lang: "es",
  title: "La crítica de arte",
  order: 96,
  stage: "b2",
  lessons: [
    {
      id: "es-u96l1",
      unit: 96,
      lesson: 1,
      title: "Corrientes y escuelas",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Situate an artist in art history: name a movement and the canon, point to a forerunner, and describe the arc of someone's career.",
      items: [
        { id: "es-u96l1-lacorriente", type: "vocab", front: "la corriente", reading: "lacorriente", meaning: "the movement / current", example: { jp: "Su obra no pertenece a ninguna corriente conocida.", en: "His work does not belong to any known movement." }, accept: ["the movement", "the current", "the trend", "the school"], hint: "A current of thought or style. The word also means an electric current and a river current." },
        { id: "es-u96l1-elromanticismo", type: "vocab", front: "el romanticismo", reading: "elromanticismo", meaning: "Romanticism", example: { jp: "El romanticismo puso el sentimiento por encima de la razón.", en: "Romanticism put feeling above reason." }, accept: ["romanticism", "the romantic movement"], hint: "The historical movement, capitalised in English but not in Spanish. Romántico covers both this and the everyday sense." },
        { id: "es-u96l1-elclasicismo", type: "vocab", front: "el clasicismo", reading: "elclasicismo", meaning: "classicism", example: { jp: "Su obra vuelve al clasicismo después de años de ruptura.", en: "His work returns to classicism after years of breaking with tradition." }, accept: ["classicism", "the classical style"], hint: "The taste for order, balance and the models of antiquity. Clásico is the adjective." },
        { id: "es-u96l1-elcanon", type: "vocab", front: "el canon", reading: "elcanon", meaning: "the canon", example: { jp: "Durante años el canon dejó fuera a las mujeres artistas.", en: "For years the canon left women artists out." }, accept: ["the canon", "the accepted list", "the standard"], hint: "The set of works a culture treats as essential. Canónico = canonical." },
        { id: "es-u96l1-elprecursor", type: "vocab", front: "el precursor", reading: "elprecursor", meaning: "the forerunner", example: { jp: "Hoy se le considera un precursor del cine moderno.", en: "Today he is considered a forerunner of modern cinema." }, accept: ["the forerunner", "the precursor", "the pioneer"], hint: "Someone whose work pointed the way before the movement had a name." },
        { id: "es-u96l1-laimpronta", type: "vocab", front: "la impronta", reading: "laimpronta", meaning: "the imprint", example: { jp: "La impronta de sus profesores se nota en cada cuadro.", en: "The mark of his teachers shows in every painting." }, accept: ["the mark", "the imprint", "the stamp", "the influence"], hint: "The trace one artist leaves on another's work. La huella is a physical trace or footprint; una impronta is a stamp on how someone works." },
      ],
    },
    {
      id: "es-u96l2",
      unit: 96,
      lesson: 2,
      title: "El ojo del crítico",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the reviewer's basic tools: write a review, talk about aesthetics and composition, offer a reading of a work, and name a point of reference.",
      items: [
        { id: "es-u96l2-laresena", type: "vocab", front: "la reseña", reading: "laresena", meaning: "the write-up", example: { jp: "La reseña del periódico fue dura pero justa.", en: "The newspaper review was harsh but fair." }, accept: ["the review", "the write-up", "the notice"], hint: "One published piece on a book, film or show. La crítica is the criticism as a body, or the critics collectively; una reseña is a single write-up. Reseñar is the verb." },
        { id: "es-u96l2-laestetica", type: "vocab", front: "la estética", reading: "laestetica", meaning: "the aesthetic", example: { jp: "Toda la película comparte una estética muy fría.", en: "The whole film shares a very cold aesthetic." }, accept: ["the aesthetic", "aesthetics", "the look"], hint: "Both the look of a work and the branch of philosophy. Estético is the adjective." },
        { id: "es-u96l2-lainterpretacion", type: "vocab", front: "la interpretación", reading: "lainterpretacion", meaning: "the reading / interpretation", example: { jp: "Cada crítico ofrece una interpretación distinta del final.", en: "Each critic offers a different interpretation of the ending." }, accept: ["the interpretation", "the reading", "the performance"], hint: "What a critic makes of a work, and also an actor's or musician's performance of it." },
        { id: "es-u96l2-elreferente", type: "vocab", front: "el referente", reading: "elreferente", meaning: "the point of reference", example: { jp: "Sus referentes están en los cuadros del pasado.", en: "His points of reference lie in the paintings of the past." }, accept: ["the point of reference", "the reference point", "the model", "the touchstone"], hint: "The earlier work an artist looks back to. Ser un referente = to be a benchmark for others." },
        { id: "es-u96l2-lacomposicion", type: "vocab", front: "la composición", reading: "lacomposicion", meaning: "the composition", example: { jp: "La composición del cuadro lleva la vista hacia la ventana.", en: "The composition of the painting leads the eye towards the window." }, accept: ["the composition", "the arrangement", "the layout"], hint: "How the parts are arranged within the frame. In music, the piece itself." },
        { id: "es-u96l2-elvirtuosismo", type: "vocab", front: "el virtuosismo", reading: "elvirtuosismo", meaning: "virtuosity", example: { jp: "Admiran su virtuosismo, pero echan de menos la emoción.", en: "They admire his virtuosity, but they miss the emotion." }, accept: ["virtuosity", "technical brilliance", "mastery"], hint: "Dazzling technique. Often faint praise: brilliant hands, cold heart." },
      ],
    },
    {
      id: "es-u96l3",
      unit: 96,
      lesson: 3,
      title: "El elogio",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Praise a work in a critic's register: call it masterly, bold or fresh, say it was acclaimed, and describe an artist being established or raised to the top.",
      items: [
        { id: "es-u96l3-magistral", type: "vocab", front: "magistral", reading: "magistral", meaning: "masterly", example: { jp: "El actor firma una interpretación magistral.", en: "The actor delivers a masterly performance." }, accept: ["masterly", "masterful", "superb"], hint: "The highest ordinary praise a reviewer gives. Una obra maestra is the masterpiece itself." },
        { id: "es-u96l3-audaz", type: "vocab", front: "audaz", reading: "audaz", meaning: "audacious", example: { jp: "Es una obra audaz que incomoda a mucha gente.", en: "It is a bold work that makes many people uncomfortable." }, accept: ["bold", "daring", "audacious"], hint: "Praise for taking a risk. More formal than atrevido, which is everyday and can mean cheeky. Plural audaces; la audacia is the quality." },
        { id: "es-u96l3-novedoso", type: "vocab", front: "novedoso", reading: "novedoso", meaning: "fresh / novel", example: { jp: "El planteamiento es novedoso, aunque el tema no lo sea.", en: "The approach is fresh, even if the subject is not." }, accept: ["fresh", "novel", "new", "original"], hint: "New in an interesting way, not merely recent. La novedad is the novelty." },
        { id: "es-u96l3-aclamar", type: "vocab", front: "aclamar", reading: "aclamar", meaning: "to acclaim", example: { jp: "La crítica aclamó la película desde el primer día.", en: "The critics acclaimed the film from day one." }, accept: ["to acclaim", "to hail", "to applaud"], hint: "Public, loud approval. Aclamado por la crítica = critically acclaimed." },
        { id: "es-u96l3-consagrar", type: "vocab", front: "consagrar", reading: "consagrar", meaning: "to establish / make a name", example: { jp: "Aquella obra la consagró como artista.", en: "That work established her as an artist." }, accept: ["to establish", "to make a name for", "to confirm", "to consecrate"], hint: "Un artista consagrado is one whose reputation is settled. Also religious: to consecrate." },
        { id: "es-u96l3-encumbrar", type: "vocab", front: "encumbrar", reading: "encumbrar", meaning: "to raise to the top", example: { jp: "Un solo premio lo encumbró en pocos meses.", en: "A single prize raised him to the top in a matter of months." }, accept: ["to raise to the top", "to elevate", "to catapult to fame"], hint: "From la cumbre, the summit. Stronger and more sudden than consagrar." },
      ],
    },
    {
      id: "es-u96l4",
      unit: 96,
      lesson: 4,
      title: "El reparo y la transgresión",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Criticise a work: call it overdone, safe, dispensable or overrated, say it was panned, and describe an artist breaking the rules on purpose.",
      items: [
        { id: "es-u96l4-recargado", type: "vocab", front: "recargado", reading: "recargado", meaning: "overdone / fussy", example: { jp: "El cuadro resulta recargado y no deja ver lo importante.", en: "The painting is overdone and does not let the important thing show." }, accept: ["overdone", "fussy", "cluttered", "overloaded"], hint: "Too much of everything. Its opposite in reviews is sobrio, understated." },
        { id: "es-u96l4-convencional", type: "vocab", front: "convencional", reading: "convencional", meaning: "conventional / safe", example: { jp: "Es un cuadro correcto pero demasiado convencional.", en: "It is a competent painting but too conventional." }, accept: ["conventional", "safe", "unadventurous", "orthodox"], hint: "In a review this is never a compliment: it means the artist took no risk." },
        { id: "es-u96l4-prescindible", type: "vocab", front: "prescindible", reading: "prescindible", meaning: "dispensable", example: { jp: "La segunda parte del libro es del todo prescindible.", en: "The second half of the book is entirely dispensable." }, accept: ["dispensable", "expendable", "unnecessary"], hint: "From prescindir de, to do without. Imprescindible, the opposite, is high praise." },
        { id: "es-u96l4-sobrevalorado", type: "vocab", front: "sobrevalorado", reading: "sobrevalorado", meaning: "overrated", example: { jp: "Para muchos críticos es un autor sobrevalorado.", en: "For many critics he is an overrated author." }, accept: ["overrated", "overvalued"], hint: "The counterpart is infravalorado, underrated. Both are common in arts pages." },
        { id: "es-u96l4-denostar", type: "vocab", front: "denostar", reading: "denostar", meaning: "to pan / revile", example: { jp: "La misma película que hoy admiran fue denostada en su día.", en: "The very film they admire today was panned in its time." }, accept: ["to pan", "to revile", "to slate", "to run down"], hint: "Formal and strong: to attack publicly and with contempt. The opposite of aclamar." },
        { id: "es-u96l4-transgredir", type: "vocab", front: "transgredir", reading: "transgredir", meaning: "to break (a rule) / transgress", example: { jp: "Su obra transgrede todas las normas del teatro.", en: "Her work breaks every rule of the theatre." }, accept: ["to break", "to transgress", "to flout", "to violate"], hint: "In art criticism this is usually praise. La transgresión is the act." },
      ],
    },
  ],
};
