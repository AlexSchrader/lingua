// ES Unit 119 — The qualities of good work (slot: craft-quality) — B2
// AUTHORED (block 3, u114-u126). 4 lessons x 6 cards. Every example uses only vocab
// introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 3 (u114–u126). Do not widen it.
//   OWNS: What makes a piece of work good — rigour, coherence, subtlety, robustness,
//         elegance, polish.
//   NOT:  General evaluation adjectives (u81) and appraisal of evidence (u112).
//
// DEVIATION, per RUNBOOK §7. Two of the six words the contract names are already owned:
// el rigor and la solidez are u89's, and coherente is u58's, so la coherencia would be
// the same lexeme one register up. This unit therefore takes the nearest honest
// neighbours — la trabazón and la consistencia for coherence, la solvencia for
// robustness — and keeps subtlety, elegance and polish as written.
export const ES_UNIT119 = {
  id: "es-u119",
  lang: "es",
  title: "El oficio bien hecho",
  order: 119,
  stage: "b2",
  lessons: [
    {
      id: "es-u119l1",
      unit: 119,
      lesson: 1,
      title: "El esmero",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Praise work done with care: say it is painstaking, thorough down to the last detail, and without a single flaw.",
      items: [
        { id: "es-u119l1-elesmero", type: "vocab", front: "el esmero", reading: "elesmero", meaning: "the care / painstaking effort", example: { jp: "Preparó el informe con un esmero que se nota en cada página.", en: "She prepared the report with a care you can see on every page." }, accept: ["the care", "the painstaking effort", "the diligence"], hint: "Con esmero is almost the only frame. Care put into the making, visible in the result." },
        { id: "es-u119l1-lapulcritud", type: "vocab", front: "la pulcritud", reading: "lapulcritud", meaning: "the neatness / tidiness of execution", example: { jp: "Trabaja con una pulcritud poco común.", en: "He works with an uncommon neatness." }, accept: ["the neatness", "the tidiness", "the fastidiousness"], hint: "Cleanliness raised to a standard of work: nothing left over, nothing out of place." },
        { id: "es-u119l1-laminuciosidad", type: "vocab", front: "la minuciosidad", reading: "laminuciosidad", meaning: "the thoroughness", example: { jp: "La minuciosidad del estudio sorprendió incluso a los expertos.", en: "The thoroughness of the study surprised even the experts." }, accept: ["the thoroughness", "the meticulousness", "the attention to detail"], hint: "From minucia, a tiny thing. It describes the work; meticuloso (u115) describes the person." },
        { id: "es-u119l1-elpormenor", type: "vocab", front: "el pormenor", reading: "elpormenor", meaning: "the fine detail", example: { jp: "El libro explica el proceso con todos los pormenores.", en: "The book explains the process down to the last detail." }, accept: ["the fine detail", "the particular", "the detail"], hint: "Usually plural. Formal where el detalle is neutral — the small points a careful reader wants." },
        { id: "es-u119l1-exhaustivo", type: "vocab", front: "exhaustivo", reading: "exhaustivo", meaning: "exhaustive", example: { jp: "Hizo un análisis exhaustivo de todas las sentencias del año.", en: "He made an exhaustive analysis of every ruling of the year." }, accept: ["exhaustive", "comprehensive", "thorough"], hint: "Nothing left out, by design. Praise for a study or a search, not for a description." },
        { id: "es-u119l1-impecable", type: "vocab", front: "impecable", reading: "impecable", meaning: "impeccable / flawless", example: { jp: "Su trabajo es impecable, aunque tarde el doble que los demás.", en: "His work is impeccable, even if he takes twice as long as the others." }, accept: ["impeccable", "flawless", "faultless"], hint: "Literally without sin. The highest ordinary praise, and it covers manners and clothes too." },
      ],
    },
    {
      id: "es-u119l2",
      unit: 119,
      lesson: 2,
      title: "La sutileza y la sobriedad",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Praise work for what it leaves out: call it subtle, spare, clean-lined and free of ornament.",
      items: [
        { id: "es-u119l2-lasutileza", type: "vocab", front: "la sutileza", reading: "lasutileza", meaning: "the subtlety", example: { jp: "La sutileza del retrato se aprecia solo de cerca.", en: "The subtlety of the portrait can only be appreciated close up." }, accept: ["the subtlety", "the delicacy", "the fine distinction"], hint: "Also countable: las sutilezas del texto are its fine distinctions." },
        { id: "es-u119l2-lanitidez", type: "vocab", front: "la nitidez", reading: "lanitidez", meaning: "the sharpness / crispness", example: { jp: "Explica ideas difíciles con una nitidez admirable.", en: "He explains difficult ideas with admirable sharpness." }, accept: ["the sharpness", "the crispness", "the clarity"], hint: "The adjective is nítido. Used of images, sound and reasoning alike — edges you can see." },
        { id: "es-u119l2-lasobriedad", type: "vocab", front: "la sobriedad", reading: "lasobriedad", meaning: "the restraint / spareness", example: { jp: "La sobriedad del edificio contrasta con los que tiene al lado.", en: "The spareness of the building contrasts with the ones beside it." }, accept: ["the restraint", "the spareness", "the austerity", "the sobriety"], hint: "A style with nothing added for show. High praise in Spanish criticism of design and prose." },
        { id: "es-u119l2-laconcision", type: "vocab", front: "la concisión", reading: "laconcision", meaning: "the concision", example: { jp: "Escribe con una concisión que muchos periodistas envidian.", en: "She writes with a concision many journalists envy." }, accept: ["the concision", "the conciseness", "the brevity"], hint: "Saying it in fewer words without saying less. La brevedad only measures length." },
        { id: "es-u119l2-escueto", type: "vocab", front: "escueto", reading: "escueto", meaning: "terse / bare", example: { jp: "Contestó con un mensaje escueto de dos líneas.", en: "He answered with a terse two-line message." }, accept: ["terse", "bare", "succinct", "brief"], hint: "Short to the point of coldness. Un comunicado escueto is the standard phrase when an institution says as little as possible." },
        { id: "es-u119l2-depurado", type: "vocab", front: "depurado", reading: "depurado", meaning: "refined / honed", example: { jp: "Tiene un estilo muy depurado, sin una palabra de más.", en: "He has a very refined style, without one word too many." }, accept: ["refined", "honed", "polished"], hint: "From depurar, to purify: what is left after everything unnecessary has been removed over time." },
      ],
    },
    {
      id: "es-u119l3",
      unit: 119,
      lesson: 3,
      title: "La destreza y el oficio",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Praise the hand behind the work: name skill, expertise, mastery, ease, and the trade itself.",
      items: [
        { id: "es-u119l3-ladestreza", type: "vocab", front: "la destreza", reading: "ladestreza", meaning: "the skill / dexterity", example: { jp: "Maneja la cámara con una destreza sorprendente.", en: "He handles the camera with surprising skill." }, accept: ["the skill", "the dexterity", "the deftness"], hint: "Skill in the hands and in the movement — closer to how than to how much." },
        { id: "es-u119l3-lapericia", type: "vocab", front: "la pericia", reading: "lapericia", meaning: "the expertise", example: { jp: "Salvó la situación por su pericia y por su calma.", en: "He saved the situation through his expertise and his calm." }, accept: ["the expertise", "the proficiency", "the know-how"], hint: "Knowledge plus practice, of the kind that shows in an emergency. El perito, the expert witness, is its relative." },
        { id: "es-u119l3-lamaestria", type: "vocab", front: "la maestría", reading: "lamaestria", meaning: "the mastery", example: { jp: "Toca con una maestría que no se aprende en dos años.", en: "He plays with a mastery you do not learn in two years." }, accept: ["the mastery", "the command", "the virtuosity"], hint: "The top of the scale, and the word implies a lifetime. Con maestría is the usual frame." },
        { id: "es-u119l3-eloficio", type: "vocab", front: "el oficio", reading: "eloficio", meaning: "the craft / trade", example: { jp: "Aprendió el oficio de su padre, viéndolo trabajar.", en: "He learned the trade from his father, watching him work." }, accept: ["the craft", "the trade", "the profession"], hint: "Both the trade itself and the accumulated skill: tiene mucho oficio means he knows what he is doing." },
        { id: "es-u119l3-lasoltura", type: "vocab", front: "la soltura", reading: "lasoltura", meaning: "the ease / fluency", example: { jp: "Habla en público con mucha soltura.", en: "He speaks in public with great ease." }, accept: ["the ease", "the fluency", "the confidence"], hint: "From suelto, loose: nothing is stiff. The standard word for how well someone handles a language." },
        { id: "es-u119l3-certero", type: "vocab", front: "certero", reading: "certero", meaning: "unerring / well-aimed", example: { jp: "Hizo un comentario certero que cambió toda la discusión.", en: "He made a well-aimed remark that changed the whole discussion." }, accept: ["unerring", "well-aimed", "on target", "apt"], hint: "From the marksman: it hits exactly what it was aimed at. Applied to remarks, diagnoses and decisions." },
      ],
    },
    {
      id: "es-u119l4",
      unit: 119,
      lesson: 4,
      title: "La hechura y el acabado",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Judge a work as a whole: say the parts agree, that it has substance, that it is well made and well finished, and that the result comes off.",
      items: [
        { id: "es-u119l4-laarmonia", type: "vocab", front: "la armonía", reading: "laarmonia", meaning: "the harmony (of the parts)", example: { jp: "Al relato le falta armonía: cada capítulo va por su lado.", en: "The story lacks harmony: each chapter goes its own way." }, accept: ["the harmony", "the balance", "the proportion"], hint: "The parts agreeing with one another, in a building or an argument as much as in music. Its opposite here is not noise but disorder." },
        { id: "es-u119l4-laconsistencia", type: "vocab", front: "la consistencia", reading: "laconsistencia", meaning: "the substance / firmness", example: { jp: "Es una idea bonita, pero sin ninguna consistencia.", en: "It is a nice idea, but with no substance at all." }, accept: ["the substance", "the firmness", "the solidity"], hint: "In Spanish it is mostly about substance, not about being the same each time. Sin consistencia = it does not hold up." },
        { id: "es-u119l4-lahechura", type: "vocab", front: "la hechura", reading: "lahechura", meaning: "the workmanship / make", example: { jp: "Es una mesa de muy buena hechura, aunque nadie se fije.", en: "It is a table of very fine workmanship, even if nobody notices." }, accept: ["the workmanship", "the make", "the craftsmanship"], hint: "From hacer: how the thing was made, judged from the thing itself. Said of clothes, furniture and prose alike." },
        { id: "es-u119l4-elacabado", type: "vocab", front: "el acabado", reading: "elacabado", meaning: "the finish", example: { jp: "El acabado es lo que justifica el precio.", en: "The finish is what justifies the price." }, accept: ["the finish", "the finishing", "the final touch"], hint: "The last layer of work, and the first thing a buyer sees. Un acabado impecable is the sales phrase." },
        { id: "es-u119l4-laelegancia", type: "vocab", front: "la elegancia", reading: "laelegancia", meaning: "the elegance", example: { jp: "Resolvió el problema con una elegancia que nadie había visto.", en: "He solved the problem with an elegance nobody had seen." }, accept: ["the elegance", "the gracefulness"], hint: "Not only clothes: a proof, a solution and a sentence can all have it — economy that looks effortless." },
        { id: "es-u119l4-logrado", type: "vocab", front: "logrado", reading: "logrado", meaning: "well-achieved / successful (as a work)", example: { jp: "El segundo capítulo es el más logrado del libro.", en: "The second chapter is the most successful part of the book." }, accept: ["well-achieved", "successful", "accomplished"], hint: "From lograr: the thing came off as intended. Muy logrado is what a critic says instead of good." },
      ],
    },
  ],
};
