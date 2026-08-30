// ES Unit 114 — Crime, justice and procedure (slot: justice) — B2
// AUTHORED (block 3, u114-u126). 4 lessons x 6 cards. Every example uses only vocab
// introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 3 (u114–u126). Do not widen it.
//   OWNS: The courtroom and what leads to it — offence, investigation, charge, defence,
//         verdict, sentence, appeal.
//   NOT:  How law is made (u92) and ethics (u97). B1 already taught el delito, la
//         víctima, el juez, la cárcel (u83) — go past them.
//
// Rejected as already taught: el abogado (u24), la prueba (u51), el fallo (u60),
// la multa (u61), el recurso (u65), el cargo (u84), apelar + el indicio (u88/u89).
// "procesar" dropped as a relative of el proceso (u56).
export const ES_UNIT114 = {
  id: "es-u114",
  lang: "es",
  title: "El proceso penal",
  order: 114,
  stage: "b2",
  lessons: [
    {
      id: "es-u114l1",
      unit: 114,
      lesson: 1,
      title: "El delito y la investigación",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Report a crime and follow an investigation: file a complaint, name a suspect, and say that someone has been arrested.",
      items: [
        { id: "es-u114l1-ladenuncia", type: "vocab", front: "la denuncia", reading: "ladenuncia", meaning: "the (criminal) complaint", example: { jp: "La víctima presentó una denuncia esa misma noche.", en: "The victim filed a complaint that same night." }, accept: ["the complaint", "the report", "the criminal complaint"], hint: "Presentar or poner una denuncia. It starts the machinery; it is not yet an accusation by the state." },
        { id: "es-u114l1-elsospechoso", type: "vocab", front: "el sospechoso", reading: "elsospechoso", meaning: "the suspect", example: { jp: "La policía busca a dos sospechosos desde el martes.", en: "The police have been looking for two suspects since Tuesday." }, accept: ["the suspect", "the suspected person"], hint: "Also an adjective: una actitud sospechosa. A sospechoso is not yet acusado — that comes later." },
        { id: "es-u114l1-lapesquisa", type: "vocab", front: "la pesquisa", reading: "lapesquisa", meaning: "the line of inquiry", example: { jp: "Las pesquisas siguen abiertas y nadie quiere hablar.", en: "The inquiries are still open and nobody wants to talk." }, accept: ["the inquiry", "the line of inquiry", "the investigation"], hint: "Nearly always plural, and formal — the newspaper word for what the police are quietly doing." },
        { id: "es-u114l1-elregistro", type: "vocab", front: "el registro", reading: "elregistro", meaning: "the search (of a place)", example: { jp: "Durante el registro aparecieron los documentos falsos.", en: "During the search the false documents turned up." }, accept: ["the search", "the raid", "the search of premises"], hint: "Un registro domiciliario needs a judge's order. The same noun also means a record or a register — context decides." },
        { id: "es-u114l1-elforense", type: "vocab", front: "el forense", reading: "elforense", meaning: "the forensic examiner", example: { jp: "El forense todavía no ha entregado su informe.", en: "The forensic examiner has not yet handed in his report." }, accept: ["the forensic examiner", "the coroner", "the medical examiner"], hint: "Short for médico forense. As an adjective, forense means anything belonging to the courts." },
        { id: "es-u114l1-detener", type: "vocab", front: "detener", reading: "detener", meaning: "to arrest / detain", example: { jp: "Lo detuvieron esa misma noche, sin violencia ninguna.", en: "They arrested him that same night, without any violence." }, accept: ["to arrest", "to detain", "to hold"], hint: "The everyday sense is to stop something; with a person as object it is the police sense. La detención is the arrest itself. Conjugates like tener." },
      ],
    },
    {
      id: "es-u114l2",
      unit: 114,
      lesson: 2,
      title: "La acusación",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say who brings a case and what they bring: name the prosecutor, state the charge, and say someone was released on bail.",
      items: [
        { id: "es-u114l2-elfiscal", type: "vocab", front: "el fiscal", reading: "elfiscal", meaning: "the prosecutor", example: { jp: "El fiscal pidió diez años de cárcel.", en: "The prosecutor asked for ten years in prison." }, accept: ["the prosecutor", "the public prosecutor", "the state attorney"], hint: "The state's lawyer, never the judge. La fiscal for a woman — the form does not change." },
        { id: "es-u114l2-acusar", type: "vocab", front: "acusar", reading: "acusar", meaning: "to charge / accuse", example: { jp: "Lo acusan de un delito contra el dinero público.", en: "They are charging him with an offence against public money." }, accept: ["to accuse", "to charge", "to accuse of"], hint: "Acusar a alguien DE algo. The person becomes el acusado, and la acusación is both the charge and the prosecuting side." },
        { id: "es-u114l2-imputar", type: "vocab", front: "imputar", reading: "imputar", meaning: "to formally name as a suspect", example: { jp: "El juez imputó a tres personas de la misma empresa.", en: "The judge formally named three people from the same company as suspects." }, accept: ["to indict", "to charge formally", "to name as a suspect"], hint: "A judge's act, long before any trial. Spanish courts now often prefer investigado — imputado sounded too much like a verdict." },
        { id: "es-u114l2-laquerella", type: "vocab", front: "la querella", reading: "laquerella", meaning: "the private criminal suit", example: { jp: "La familia presentó una querella contra la empresa.", en: "The family brought a private criminal suit against the company." }, accept: ["the private criminal suit", "the lawsuit", "the criminal complaint"], hint: "Heavier than una denuncia: the person filing it becomes a party to the case and pays a lawyer." },
        { id: "es-u114l2-elsumario", type: "vocab", front: "el sumario", reading: "elsumario", meaning: "the case file / pre-trial proceedings", example: { jp: "El sumario es enorme y todavía no es público.", en: "The case file is enormous and is still not public." }, accept: ["the case file", "the pre-trial proceedings", "the dossier"], hint: "Everything the judge gathers before deciding whether there will be a trial. Sumario secreto is the phrase in the news." },
        { id: "es-u114l2-lafianza", type: "vocab", front: "la fianza", reading: "lafianza", meaning: "the bail", example: { jp: "Salió en libertad con una fianza muy alta.", en: "He was released on very high bail." }, accept: ["the bail", "the bond", "the security"], hint: "Bajo fianza = on bail. The same word is the deposit you leave on a flat." },
      ],
    },
    {
      id: "es-u114l3",
      unit: 114,
      lesson: 3,
      title: "La vista y la defensa",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a trial as it happens: who appears before the court, who gives evidence, and who decides.",
      items: [
        { id: "es-u114l3-eljuicio", type: "vocab", front: "el juicio", reading: "eljuicio", meaning: "the trial", example: { jp: "El juicio empezó en mayo y duró tres semanas.", en: "The trial began in May and lasted three weeks." }, accept: ["the trial", "the court case", "the hearing"], hint: "Ir a juicio = to go to trial. The same noun also means judgement in the sense of good sense." },
        { id: "es-u114l3-eltribunal", type: "vocab", front: "el tribunal", reading: "eltribunal", meaning: "the court", example: { jp: "El tribunal escuchó a los dos testigos.", en: "The court heard the two witnesses." }, accept: ["the court", "the tribunal", "the bench"], hint: "The institution, or the panel of judges sitting. El juez is one person; el tribunal is the body." },
        { id: "es-u114l3-declarar", type: "vocab", front: "declarar", reading: "declarar", meaning: "to state / give evidence", example: { jp: "El testigo declaró durante más de dos horas.", en: "The witness gave evidence for more than two hours." }, accept: ["to testify", "to give evidence", "to make a statement"], hint: "The broad verb: the accused and the witnesses all declaran. Testificar (u122) is narrower — only a witness does that. The noun is la declaración." },
        { id: "es-u114l3-ladefensa", type: "vocab", front: "la defensa", reading: "ladefensa", meaning: "the defence", example: { jp: "La defensa dijo que no había ninguna relación entre los dos hechos.", en: "The defence said there was no connection between the two facts." }, accept: ["the defence", "the defense", "the defence team"], hint: "The side, and by extension its lawyer — it mirrors la acusación exactly." },
        { id: "es-u114l3-eljurado", type: "vocab", front: "el jurado", reading: "eljurado", meaning: "the jury", example: { jp: "El jurado salió a decidir por la tarde.", en: "The jury withdrew to decide in the afternoon." }, accept: ["the jury", "the panel"], hint: "In Spain only for certain crimes — el jurado popular. The same word names the panel of a competition." },
      ],
    },
    {
      id: "es-u114l4",
      unit: 114,
      lesson: 4,
      title: "La sentencia y su revisión",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Report how a case ended: give the verdict, say someone was convicted or acquitted, and say the ruling is being appealed.",
      items: [
        { id: "es-u114l4-elveredicto", type: "vocab", front: "el veredicto", reading: "elveredicto", meaning: "the verdict", example: { jp: "El veredicto sorprendió a casi todo el mundo.", en: "The verdict surprised almost everybody." }, accept: ["the verdict", "the finding", "the jurys decision"], hint: "What the jurado returns — guilty or not. The judge then writes la sentencia around it." },
        { id: "es-u114l4-lasentencia", type: "vocab", front: "la sentencia", reading: "lasentencia", meaning: "the ruling / sentence", example: { jp: "La sentencia es muy larga y muy clara.", en: "The ruling is very long and very clear." }, accept: ["the ruling", "the sentence", "the judgement"], hint: "The written decision, reasons and all — wider than English sentence. Dictar sentencia = to hand down a ruling." },
        { id: "es-u114l4-condenar", type: "vocab", front: "condenar", reading: "condenar", meaning: "to convict / sentence", example: { jp: "Lo condenaron a cinco años por un delito muy serio.", en: "They sentenced him to five years for a very serious crime." }, accept: ["to convict", "to sentence", "to condemn"], hint: "Condenar a alguien A algo. La condena is the punishment that follows." },
        { id: "es-u114l4-absolver", type: "vocab", front: "absolver", reading: "absolver", meaning: "to acquit", example: { jp: "El tribunal absolvió a la acusada porque la acusación no demostró nada.", en: "The court acquitted the defendant because the prosecution proved nothing." }, accept: ["to acquit", "to clear", "to find not guilty"], hint: "The exact opposite of condenar. Irregular like volver: absuelvo, absolvió, absuelto." },
        { id: "es-u114l4-recurrir", type: "vocab", front: "recurrir", reading: "recurrir", meaning: "to appeal (a ruling)", example: { jp: "La defensa recurrió la sentencia al día siguiente.", en: "The defence appealed the ruling the next day." }, accept: ["to appeal", "to appeal against", "to lodge an appeal"], hint: "Recurrir una sentencia — the verb takes the ruling directly. Nothing to do with el recurso, the resource, and outside court recurrir A algo means to resort to it." },
        { id: "es-u114l4-elindulto", type: "vocab", front: "el indulto", reading: "elindulto", meaning: "the pardon", example: { jp: "El gobierno concedió el indulto tres años después.", en: "The government granted the pardon three years later." }, accept: ["the pardon", "the clemency", "the reprieve"], hint: "Forgives the punishment without erasing the conviction — a political act, not a judicial one." },
      ],
    },
  ],
};
