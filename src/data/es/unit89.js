// ES Unit 89 — Evidence and sources (slot: evidence) — B2
// SCAFFOLD STUB. Replace the locked lessons below with 4 real lessons of
// 5-8 cards each (aim 6). Every lesson needs a canDo. Every example may use only
// vocab introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 1 (u88–u100). Do not widen it. Retitle this unit in Spanish when
// you author it: the English title above marks the SLOT, the wording is yours.
//   OWNS: Where a claim gets its authority — sources, corroboration, citation,
//         refutation, the kinds and quality of proof.
//   NOT:  The craft of persuading (u88) and backing a claim at B1 level (u51 taught
//         demostrar, la prueba, el dato). If the word names a technique of delivery, it
//         is u88's.
//
// Spanish already teaches 2,094 words across u1–u87. Check src/data/es/TAUGHT-WORDS.md
// before writing EVERY front — a duplicate front is a hard validate:content failure,
// and the es B1 band lost 159 cards to exactly that.
export const ES_UNIT89 = {
  id: "es-u89",
  lang: "es",
  title: "Las pruebas y las fuentes",
  order: 89,
  stage: "b2",
  lessons: [
    {
      id: "es-u89l1",
      unit: 89,
      lesson: 1,
      title: "De dónde viene el dato",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Ask where a claim comes from: name its origin, judge how reliable a source is, and say something is documented or officially backed.",
      items: [
        { id: "es-u89l1-laprocedencia", type: "vocab", front: "la procedencia", reading: "laprocedencia", meaning: "the origin / provenance", example: { jp: "Nadie preguntó por la procedencia de esos datos.", en: "Nobody asked about the origin of that data." }, accept: ["the origin", "the provenance", "the source"], hint: "Where something comes FROM, said formally. De procedencia desconocida = of unknown origin." },
        { id: "es-u89l1-lafiabilidad", type: "vocab", front: "la fiabilidad", reading: "lafiabilidad", meaning: "the reliability", example: { jp: "La fiabilidad de esa fuente es más que dudosa.", en: "The reliability of that source is more than doubtful." }, drill: { jp: "La fiabilidad es muy dudosa", en: "The reliability is very doubtful" }, accept: ["the reliability", "the trustworthiness", "the dependability"], hint: "From fiable (reliable). Of sources, machines and people alike." },
        { id: "es-u89l1-laveracidad", type: "vocab", front: "la veracidad", reading: "laveracidad", meaning: "the truthfulness / accuracy", example: { jp: "Nadie ha comprobado la veracidad de la noticia.", en: "Nobody has checked the truthfulness of the story." }, accept: ["the truthfulness", "the accuracy", "the veracity"], hint: "Whether a statement is TRUE, where fiabilidad is whether a source can be trusted in general." },
        { id: "es-u89l1-elrespaldo", type: "vocab", front: "el respaldo", reading: "elrespaldo", meaning: "the backing / support", example: { jp: "La teoría no tiene ningún respaldo científico.", en: "The theory has no scientific backing at all." }, accept: ["the backing", "the support", "the endorsement"], hint: "From respaldar, to back. Con el respaldo de = backed by." },
        { id: "es-u89l1-documentar", type: "vocab", front: "documentar", reading: "documentar", meaning: "to document", example: { jp: "El informe documenta cada caso con fotografías.", en: "The report documents every case with photographs." }, accept: ["to document", "to evidence", "to record"], hint: "To prove with material, not argument. Bien documentado = well-researched." },
        { id: "es-u89l1-acreditar", type: "vocab", front: "acreditar", reading: "acreditar", meaning: "to prove / certify", example: { jp: "Tuvo que acreditar que vivía en la ciudad.", en: "He had to prove that he lived in the city." }, accept: ["to prove", "to certify", "to vouch for"], hint: "Official proof: acreditar la identidad. Un periodista acreditado is one with press credentials." },
      ],
    },
    {
      id: "es-u89l2",
      unit: 89,
      lesson: 2,
      title: "Tipos de prueba",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Tell the kinds of evidence apart: hard evidence, a clue, a witness account, and the premise or assumption an argument starts from.",
      items: [
        { id: "es-u89l2-laevidencia", type: "vocab", front: "la evidencia", reading: "laevidencia", meaning: "the evidence", example: { jp: "No hay evidencia de que el cambio funcione.", en: "There is no evidence that the change works." }, accept: ["the evidence", "the proof"], hint: "Careful: la evidencia is also 'the obvious fact' — negar la evidencia = to deny the obvious." },
        { id: "es-u89l2-elindicio", type: "vocab", front: "el indicio", reading: "elindicio", meaning: "the sign / clue", example: { jp: "Hay indicios de que la situación mejora.", en: "There are signs that the situation is improving." }, accept: ["the sign", "the clue", "the indication"], hint: "Weaker than una prueba: it points, it does not prove. Common in police reporting." },
        { id: "es-u89l2-eltestimonio", type: "vocab", front: "el testimonio", reading: "eltestimonio", meaning: "the testimony / account", example: { jp: "Su testimonio cambió por completo el caso.", en: "His testimony completely changed the case." }, accept: ["the testimony", "the account", "the statement"], hint: "In court or in journalism. Dar testimonio de = to bear witness to." },
        { id: "es-u89l2-lapremisa", type: "vocab", front: "la premisa", reading: "lapremisa", meaning: "the premise", example: { jp: "Si la premisa es falsa, la conclusión no vale.", en: "If the premise is false, the conclusion is worthless." }, accept: ["the premise", "the starting assumption"], hint: "What an argument starts from, before any reasoning. Partir de la premisa de que…" },
        { id: "es-u89l2-elsupuesto", type: "vocab", front: "el supuesto", reading: "elsupuesto", meaning: "the assumption", example: { jp: "Todo el plan descansa sobre un supuesto muy frágil.", en: "The whole plan rests on a very fragile assumption." }, drill: { jp: "El supuesto es muy frágil", en: "The assumption is very fragile" }, accept: ["the assumption", "the supposition", "the given"], hint: "As an adjective it means 'alleged': el supuesto responsable. En el supuesto de que = in the event that." },
        { id: "es-u89l2-lainferencia", type: "vocab", front: "la inferencia", reading: "lainferencia", meaning: "the inference", example: { jp: "Esa inferencia no se sigue de los datos.", en: "That inference doesn't follow from the data." }, accept: ["the inference", "the conclusion drawn"], hint: "The step from evidence to conclusion. Inferir is the verb." },
      ],
    },
    {
      id: "es-u89l3",
      unit: 89,
      lesson: 3,
      title: "Poner en duda",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Attack a claim properly: refute it, rebut a point, deny a report, set two versions against each other, and name a bias or a caveat.",
      items: [
        { id: "es-u89l3-refutar", type: "vocab", front: "refutar", reading: "refutar", meaning: "to refute / disprove", example: { jp: "Nadie ha conseguido refutar esa teoría todavía.", en: "Nobody has managed to refute that theory yet." }, accept: ["to refute", "to disprove", "to rebut"], hint: "To show something is false, with evidence. Weaker cousins: negar (deny), dudar (doubt)." },
        { id: "es-u89l3-rebatir", type: "vocab", front: "rebatir", reading: "rebatir", meaning: "to rebut / argue back", example: { jp: "Rebatió todos los argumentos uno por uno.", en: "He rebutted every argument one by one." }, drill: { jp: "Quiero rebatir todos los argumentos", en: "I want to rebut all the arguments" }, accept: ["to rebut", "to counter", "to argue back against"], hint: "Aimed at an argument rather than at a fact. Refutar proves false; rebatir answers back." },
        { id: "es-u89l3-desmentir", type: "vocab", front: "desmentir", reading: "desmentir", meaning: "to deny / rebut publicly", example: { jp: "El ministro desmintió la noticia esa misma tarde.", en: "The minister denied the story that same afternoon." }, accept: ["to deny", "to refute publicly", "to issue a denial"], hint: "Specifically of published claims: un desmentido is an official denial." },
        { id: "es-u89l3-contrastar", type: "vocab", front: "contrastar", reading: "contrastar", meaning: "to cross-check / set against", example: { jp: "Hay que contrastar la información con otra fuente.", en: "The information has to be cross-checked against another source." }, accept: ["to cross-check", "to verify against", "to compare"], hint: "contrastar CON algo. Also the plain 'to contrast': los dos casos contrastan mucho." },
        { id: "es-u89l3-elsesgo", type: "vocab", front: "el sesgo", reading: "elsesgo", meaning: "the bias", example: { jp: "El estudio tiene un sesgo evidente a favor de la empresa.", en: "The study has an obvious bias in favour of the company." }, drill: { jp: "El sesgo es muy evidente", en: "The bias is very obvious" }, accept: ["the bias", "the slant", "the skew"], hint: "Sesgado = biased. It names a lean in the method, not a lie." },
        { id: "es-u89l3-lasalvedad", type: "vocab", front: "la salvedad", reading: "lasalvedad", meaning: "the caveat / proviso", example: { jp: "Aceptó el informe con una salvedad importante.", en: "He accepted the report with one important caveat." }, accept: ["the caveat", "the proviso", "the reservation"], hint: "Con la salvedad de que… = with the proviso that… . It saves you from over-claiming." },
      ],
    },
    {
      id: "es-u89l4",
      unit: 89,
      lesson: 4,
      title: "Sostener una afirmación",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Support a claim to a high standard: corroborate it, ground it in something, check one document against another, and talk about rigour.",
      items: [
        { id: "es-u89l4-corroborar", type: "vocab", front: "corroborar", reading: "corroborar", meaning: "to corroborate", example: { jp: "Dos testigos corroboraron la misma versión.", en: "Two witnesses corroborated the same version." }, accept: ["to corroborate", "to confirm", "to back up"], hint: "A second independent source agreeing. One source alone cannot corroborar anything." },
        { id: "es-u89l4-fundamentar", type: "vocab", front: "fundamentar", reading: "fundamentar", meaning: "to ground / substantiate", example: { jp: "El autor fundamenta cada conclusión en datos reales.", en: "The author grounds every conclusion in real data." }, accept: ["to ground", "to substantiate", "to base"], hint: "fundamentar algo EN algo. Bien fundamentado = well-founded; sin fundamento = baseless." },
        { id: "es-u89l4-sustentar", type: "vocab", front: "sustentar", reading: "sustentar", meaning: "to uphold / sustain (a claim)", example: { jp: "Nada en el informe sustenta esa afirmación.", en: "Nothing in the report supports that claim." }, drill: { jp: "Nada puede sustentar esa afirmación", en: "Nothing can uphold that claim" }, accept: ["to uphold", "to sustain", "to support"], hint: "To hold a claim up, as a column holds a roof. Insostenible = untenable." },
        { id: "es-u89l4-cotejar", type: "vocab", front: "cotejar", reading: "cotejar", meaning: "to collate / check one against another", example: { jp: "Cotejaron las dos versiones del documento.", en: "They collated the two versions of the document." }, accept: ["to collate", "to cross-check", "to compare"], hint: "Two texts side by side, looking for differences. Narrower than comparar." },
        { id: "es-u89l4-elrigor", type: "vocab", front: "el rigor", reading: "elrigor", meaning: "rigour", example: { jp: "El trabajo está hecho con mucho rigor.", en: "The work is done with great rigour." }, accept: ["rigour", "thoroughness", "strictness"], hint: "Riguroso is the adjective. En rigor = strictly speaking." },
        { id: "es-u89l4-lasolidez", type: "vocab", front: "la solidez", reading: "lasolidez", meaning: "the soundness / solidity", example: { jp: "Nadie duda de la solidez de sus argumentos.", en: "Nobody doubts the soundness of his arguments." }, accept: ["the soundness", "the solidity", "the strength"], hint: "From sólido. Of arguments, buildings and companies alike." },
      ],
    },
  ],
};
