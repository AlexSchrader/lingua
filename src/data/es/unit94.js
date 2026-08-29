// ES Unit 94 — Science and technology (slot: science) — B2
// Authored: block 1, group 1. 4 lessons x 6 cards.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 1 (u88–u100). Do not widen it.
//   OWNS: How knowledge is produced and applied — hypothesis, experiment, rigour,
//         innovation, engineering.
//   NOT:  Devices and being online (u33) and the academy as an institution (u103). If
//         it names a gadget, it is u33's.
export const ES_UNIT94 = {
  id: "es-u94",
  lang: "es",
  title: "La ciencia y la tecnología",
  order: 94,
  stage: "b2",
  lessons: [
    {
      id: "es-u94l1",
      unit: 94,
      lesson: 1,
      title: "El método científico",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a study is set up: state a hypothesis, call a claim guesswork, say the work rests on observation, and talk about running a trial again.",
      items: [
        { id: "es-u94l1-lahipotesis", type: "vocab", front: "la hipótesis", reading: "lahipotesis", meaning: "the hypothesis", example: { jp: "La hipótesis inicial no se confirmó con los datos.", en: "The initial hypothesis was not confirmed by the data." }, accept: ["the hypothesis", "hypothesis", "the working assumption"], hint: "Invariable in the plural: una hipótesis, dos hipótesis. Weaker than una teoría, which has already survived testing." },
        { id: "es-u94l1-laconjetura", type: "vocab", front: "la conjetura", reading: "laconjetura", meaning: "the conjecture / guesswork", example: { jp: "Sin más datos, todo lo que decimos es pura conjetura.", en: "Without more data, everything we are saying is pure guesswork." }, accept: ["the conjecture", "guesswork", "the guess", "speculation"], hint: "A hipótesis is meant to be tested; a conjetura is a guess nobody has tested yet. Often dismissive." },
        { id: "es-u94l1-empirico", type: "vocab", front: "empírico", reading: "empirico", meaning: "empirical", example: { jp: "No hay ningún estudio empírico que respalde esa idea.", en: "There is no empirical study that backs up that idea." }, accept: ["empirical", "evidence-based", "observation-based"], hint: "Based on what was observed, not on reasoning alone. It contrasts with teórico." },
        { id: "es-u94l1-elensayo", type: "vocab", front: "el ensayo", reading: "elensayo", meaning: "the trial / test", example: { jp: "El nuevo tratamiento está todavía en fase de ensayo.", en: "The new treatment is still in the trial phase." }, accept: ["the trial", "the test", "the experiment"], hint: "In science a controlled trial; in writing, an essay; in theatre, a rehearsal. Ensayo y error = trial and error." },
        { id: "es-u94l1-indagar", type: "vocab", front: "indagar", reading: "indagar", meaning: "to look into / inquire", example: { jp: "El equipo indagó en las causas del fallo durante meses.", en: "The team looked into the causes of the failure for months." }, accept: ["to look into", "to inquire", "to investigate", "to probe"], hint: "indagar EN algo. More deliberate and more formal than buscar: you are after an explanation, not an object." },
        { id: "es-u94l1-replicar", type: "vocab", front: "replicar", reading: "replicar", meaning: "to replicate", example: { jp: "Nadie ha logrado replicar ese resultado en otro centro.", en: "Nobody has managed to replicate that result at another centre." }, accept: ["to replicate", "to reproduce", "to repeat"], hint: "To run the same study again and get the same answer. It also means to answer back, so context decides." },
      ],
    },
    {
      id: "es-u94l2",
      unit: 94,
      lesson: 2,
      title: "La medida y la observación",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about taking readings: name a measurement and a sample, apply a formula, check a calculation, and say an instrument needs adjusting.",
      items: [
        { id: "es-u94l2-lamedicion", type: "vocab", front: "la medición", reading: "lamedicion", meaning: "the measurement", example: { jp: "Repitieron la medición tres veces para estar seguros.", en: "They repeated the measurement three times to be sure." }, accept: ["the measurement", "the reading", "measuring"], hint: "The act of measuring and the number it gives. La medida is the size itself; la medición is how you got it." },
        { id: "es-u94l2-laobservacion", type: "vocab", front: "la observación", reading: "laobservacion", meaning: "the observation", example: { jp: "Sus conclusiones parten de la observación directa del fenómeno.", en: "His conclusions start from direct observation of the phenomenon." }, accept: ["the observation", "the remark", "watching"], hint: "The scientific sense, and also a remark someone makes: hacer una observación = to make a point." },
        { id: "es-u94l2-elcalculo", type: "vocab", front: "el cálculo", reading: "elcalculo", meaning: "the calculation", example: { jp: "Un error en el cálculo cambió por completo el resultado.", en: "An error in the calculation completely changed the result." }, accept: ["the calculation", "the sum", "the reckoning"], hint: "Also the branch of maths. Según mis cálculos = by my reckoning." },
        { id: "es-u94l2-laformula", type: "vocab", front: "la fórmula", reading: "laformula", meaning: "the formula", example: { jp: "Aplicaron la misma fórmula a todos los casos del estudio.", en: "They applied the same formula to every case in the study." }, accept: ["the formula", "the equation"], hint: "Mathematical, chemical, or figurative: la fórmula del éxito. Note the stress: FÓR-mu-la." },
        { id: "es-u94l2-calibrar", type: "vocab", front: "calibrar", reading: "calibrar", meaning: "to calibrate / gauge", example: { jp: "Hay que calibrar el instrumento antes de cada sesión.", en: "The instrument has to be calibrated before each session." }, accept: ["to calibrate", "to gauge", "to adjust"], hint: "Of instruments, literally. Of situations, to weigh up: calibrar las consecuencias." },
        { id: "es-u94l2-lamuestra", type: "vocab", front: "la muestra", reading: "lamuestra", meaning: "the sample", example: { jp: "La muestra era demasiado pequeña para sacar conclusiones.", en: "The sample was too small to draw conclusions from." }, accept: ["the sample", "the specimen", "the showing"], hint: "The portion you study in order to speak about the whole. Also a sign of something: una muestra de apoyo." },
      ],
    },
    {
      id: "es-u94l3",
      unit: 94,
      lesson: 3,
      title: "La ingeniería y la aplicación",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe turning an idea into a product: build a prototype, put a design together, register a patent, and judge whether a plan is workable.",
      items: [
        { id: "es-u94l3-elprototipo", type: "vocab", front: "el prototipo", reading: "elprototipo", meaning: "the prototype", example: { jp: "El primer prototipo funcionaba, pero era demasiado caro.", en: "The first prototype worked, but it was too expensive." }, accept: ["the prototype", "the first model", "the mock-up"], hint: "The first working version, built to be tested rather than sold." },
        { id: "es-u94l3-eldiseno", type: "vocab", front: "el diseño", reading: "eldiseno", meaning: "the design", example: { jp: "El diseño del puente tuvo que cambiarse por completo.", en: "The design of the bridge had to be changed completely." }, accept: ["the design", "the layout", "the plan"], hint: "Both the drawing and the discipline. Diseñar is the verb, el diseñador the person." },
        { id: "es-u94l3-ensamblar", type: "vocab", front: "ensamblar", reading: "ensamblar", meaning: "to assemble", example: { jp: "Las piezas se ensamblan a mano en la última fase.", en: "The parts are assembled by hand in the final stage." }, accept: ["to assemble", "to put together", "to fit together"], hint: "Of parts that lock into one another. For people gathering, use reunirse instead." },
        { id: "es-u94l3-lapatente", type: "vocab", front: "la patente", reading: "lapatente", meaning: "the patent", example: { jp: "La empresa registró la patente en varios países a la vez.", en: "The company registered the patent in several countries at once." }, accept: ["the patent", "the licence"], hint: "As an adjective it means obvious: quedó patente que no funcionaba." },
        { id: "es-u94l3-optimizar", type: "vocab", front: "optimizar", reading: "optimizar", meaning: "to optimise", example: { jp: "Han optimizado el proceso para gastar menos agua.", en: "They have optimised the process to use less water." }, accept: ["to optimise", "to optimize", "to fine-tune", "to streamline"], hint: "To get more out of the same resources. Common in engineering and in management alike." },
        { id: "es-u94l3-laviabilidad", type: "vocab", front: "la viabilidad", reading: "laviabilidad", meaning: "the feasibility", example: { jp: "Un estudio previo evaluó la viabilidad del proyecto.", en: "A preliminary study assessed the feasibility of the project." }, accept: ["the feasibility", "the viability", "workability"], hint: "Whether it can actually be done, not whether it is a good idea. Viable is the adjective." },
      ],
    },
    {
      id: "es-u94l4",
      unit: 94,
      lesson: 4,
      title: "El hallazgo y la vanguardia",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what research produces: report a finding, name an invention, say a technique changed a whole field, and mark work as leading-edge or out of date.",
      items: [
        { id: "es-u94l4-elhallazgo", type: "vocab", front: "el hallazgo", reading: "elhallazgo", meaning: "the finding", example: { jp: "El hallazgo se publicó en una revista muy conocida.", en: "The finding was published in a very well-known journal." }, accept: ["the finding", "the discovery", "the find"], hint: "From hallar, to find. A single result you turned up, not the whole body of work." },
        { id: "es-u94l4-elinvento", type: "vocab", front: "el invento", reading: "elinvento", meaning: "the invention", example: { jp: "Ese invento cambió la vida diaria de millones de personas.", en: "That invention changed the daily life of millions of people." }, accept: ["the invention", "the gadget", "the contraption"], hint: "La invención is the act of inventing; el invento is the thing itself. Also used of a made-up story." },
        { id: "es-u94l4-revolucionar", type: "vocab", front: "revolucionar", reading: "revolucionar", meaning: "to revolutionise", example: { jp: "Esa técnica revolucionó la medicina en pocos años.", en: "That technique revolutionised medicine in just a few years." }, accept: ["to revolutionise", "to revolutionize", "to transform"], hint: "To change a whole field, not one thing. Also, more casually, to stir people up." },
        { id: "es-u94l4-pionero", type: "vocab", front: "pionero", reading: "pionero", meaning: "pioneering / pioneer", example: { jp: "Su trabajo fue pionero en un campo que nadie estudiaba.", en: "Their work was pioneering in a field nobody was studying." }, accept: ["pioneering", "pioneer", "groundbreaking"], hint: "Works as both noun and adjective: un estudio pionero, una pionera de la física." },
        { id: "es-u94l4-obsoleto", type: "vocab", front: "obsoleto", reading: "obsoleto", meaning: "obsolete", example: { jp: "El equipo quedó obsoleto en menos de cinco años.", en: "The equipment became obsolete in under five years." }, accept: ["obsolete", "outdated", "out of date"], hint: "Quedarse obsoleto = to become obsolete. Stronger and more technical than antiguo or viejo." },
        { id: "es-u94l4-lavanguardia", type: "vocab", front: "la vanguardia", reading: "lavanguardia", meaning: "the cutting edge", example: { jp: "El país está a la vanguardia de la investigación sobre el clima.", en: "The country is at the cutting edge of climate research." }, accept: ["the cutting edge", "the forefront", "the avant-garde"], hint: "Estar a la vanguardia DE algo. In art it is the avant-garde; in science, the leading edge." },
      ],
    },
  ],
};
