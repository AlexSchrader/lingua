// ES Unit 110 — La voz institucional ("The institutional voice") — B2 (slot: institutional-voice)
// THEME CONTRACT (block 2, u101–u113) — honoured as written: how an institution SPEAKS.
// The written piece and its parts (l1), notifying and resolving (l2), force and effect
// (l3), the fixed formulas of a file (l4).
// Written syntax in general is u107's — this unit took only the candidates u107 held back
// for it — and law-MAKING is u92's, so no decreto, no derogar, nothing about how a statute
// is passed. Boundary call on l4: the four formulas here are administrative collocations
// from forms and rulings, which this contract names; the rhetorical set phrases of the
// high register remain u126's.
// Rejected as already taught: el trámite (u76), vigente (u75), el aviso (u49). Rejected as
// the same lexeme: la vigencia (~u75 vigente). Also unavailable: proceder, since u107
// already teaches procede in this block.
export const ES_UNIT110 = {
  id: "es-u110",
  lang: "es",
  title: "La voz institucional",
  order: 110,
  stage: "b2",
  lessons: [
    {
      id: "es-u110l1",
      unit: 110,
      lesson: 1,
      title: "El escrito y sus partes",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the parts of an official document: the submission, the minutes, the annex, the clause and the section.",
      items: [
        { id: "es-u110l1-escrito", type: "vocab", front: "el escrito", reading: "elescrito", meaning: "written submission / document", example: { jp: "El escrito llegó fuera de plazo.", en: "The submission arrived after the deadline." }, accept: ["written submission", "document", "brief", "written statement"], hint: "Any formal text handed in to an institution. Presentar un escrito is the act; el documento is the neutral word this one replaces." },
        { id: "es-u110l1-instancia", type: "vocab", front: "la instancia", reading: "lainstancia", meaning: "formal application", example: { jp: "Hay que presentar una instancia para pedir la beca.", en: "You have to submit an application to ask for the grant." }, accept: ["application", "formal application", "petition", "request form"], hint: "The standard form for asking an institution for something. In a different sense, en última instancia means ultimately." },
        { id: "es-u110l1-acta", type: "vocab", front: "el acta", reading: "elacta", meaning: "minutes / official record", example: { jp: "El acta de la reunión no dice nada de eso.", en: "The minutes of the meeting say nothing about that." }, accept: ["minutes", "official record", "record", "report"], hint: "Feminine, but takes el in the singular because it starts with a stressed a — las actas in the plural. It is the written proof that something happened." },
        { id: "es-u110l1-anexo", type: "vocab", front: "el anexo", reading: "elanexo", meaning: "annex / appendix", example: { jp: "Los datos figuran en el anexo dos.", en: "The data appears in annex two." }, accept: ["annex", "appendix", "attachment", "schedule"], hint: "The part of a document kept outside the main text. Ver anexo is the standard cross-reference." },
        { id: "es-u110l1-apartado", type: "vocab", front: "el apartado", reading: "elapartado", meaning: "section / subsection", example: { jp: "Lea el apartado tres antes de decir que sí.", en: "Read section three before agreeing to anything." }, accept: ["section", "subsection", "paragraph", "part"], hint: "A numbered division inside an article or a form. It is also a PO box: apartado de correos." },
        { id: "es-u110l1-elpreambulo", type: "vocab", front: "el preámbulo", reading: "elpreambulo", meaning: "the preamble", example: { jp: "El preámbulo de la ley explica por qué se aprobó.", en: "The preamble to the law explains why it was passed." }, accept: ["the preamble", "the introduction", "the recitals"], hint: "The part before the numbered articles, saying what the text is for. Sin más preámbulos = without further ado." },
      ],
    },
    {
      id: "es-u110l2",
      unit: 110,
      lesson: 2,
      title: "Notificar, requerir, resolver",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow an official process end to end: being notified, being required to act, fixing a defect, and the decision that closes it.",
      items: [
        { id: "es-u110l2-notificar", type: "vocab", front: "notificar", reading: "notificar", meaning: "to notify officially", example: { jp: "Le van a notificar la decisión por carta.", en: "They are going to notify you of the decision by letter." }, accept: ["to notify", "to serve notice", "to inform officially", "notify"], hint: "Not just telling: notificar starts a clock, because your deadline runs from the day you were notified." },
        { id: "es-u110l2-requerimiento", type: "vocab", front: "el requerimiento", reading: "elrequerimiento", meaning: "formal demand / notice to act", example: { jp: "Le llegó un requerimiento para pagar en diez días.", en: "A formal demand reached him to pay within ten days." }, accept: ["formal demand", "notice", "demand", "summons"], hint: "An order to do something, with a deadline attached. Softer than a sanction and much harder than a reminder." },
        { id: "es-u110l2-resolucion", type: "vocab", front: "la resolución", reading: "laresolucion", meaning: "ruling / official decision", example: { jp: "La resolución no da ningún motivo.", en: "The ruling gives no reason at all." }, accept: ["ruling", "decision", "resolution", "determination"], hint: "The decision that closes a file, and the document that carries it. Distinct from una decisión, which need not be written or official." },
        { id: "es-u110l2-comparecer", type: "vocab", front: "comparecer", reading: "comparecer", meaning: "to appear (before an authority)", example: { jp: "Tuvo que comparecer ante el juez el martes.", en: "He had to appear before the judge on Tuesday." }, accept: ["to appear", "to appear before", "to attend", "appear"], hint: "Always ante someone with authority. Not comparar — one letter apart and completely unrelated." },
        { id: "es-u110l2-subsanar", type: "vocab", front: "subsanar", reading: "subsanar", meaning: "to remedy / put right (a defect)", example: { jp: "Tiene diez días para subsanar el error.", en: "You have ten days to put the mistake right." }, accept: ["to remedy", "to put right", "to correct", "to rectify"], hint: "The verb of the second chance: a form is not rejected, it is returned para subsanar. From sanar, to heal." },
        { id: "es-u110l2-interesado", type: "vocab", front: "el interesado", reading: "elinteresado", meaning: "the party concerned / applicant", example: { jp: "El interesado puede ver el escrito cuando quiera.", en: "The party concerned may see the document whenever they wish." }, accept: ["the party concerned", "the applicant", "the interested party", "the person concerned"], hint: "How a form refers to you: not the person who is interested, but the person the matter concerns. A los interesados = to those concerned." },
      ],
    },
    {
      id: "es-u110l3",
      unit: 110,
      lesson: 3,
      title: "Vigor y efectos",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say when a rule starts to bite, what a text lays down, where something is recorded, and what is required beforehand.",
      items: [
        { id: "es-u110l3-entrarenvigor", type: "vocab", front: "entrar en vigor", reading: "entrarenvigor", meaning: "to come into force", example: { jp: "La norma entra en vigor el uno de enero.", en: "The rule comes into force on the first of January." }, accept: ["to come into force", "to take effect", "to enter into force", "come into force"], hint: "The moment a rule stops being paper. En vigor on its own means currently in force." },
        { id: "es-u110l3-surtirefecto", type: "vocab", front: "surtir efecto", reading: "surtirefecto", meaning: "to take effect", example: { jp: "El cambio surte efecto desde el día uno.", en: "The change takes effect from the first of the month." }, accept: ["to take effect", "to become effective", "to have effect", "take effect"], hint: "Surtir appears almost nowhere else in modern Spanish — it survives inside this phrase, which is why it is learned whole." },
        { id: "es-u110l3-estipular", type: "vocab", front: "estipular", reading: "estipular", meaning: "to stipulate / lay down", example: { jp: "El contrato estipula que el pago es cada mes.", en: "The contract stipulates that payment is monthly." }, accept: ["to stipulate", "to lay down", "to specify", "stipulate"], hint: "What a document does rather than what a person does: el contrato estipula. Lo estipulado = what was agreed in writing." },
        { id: "es-u110l3-figurar", type: "vocab", front: "figurar", reading: "figurar", meaning: "to appear (be listed)", example: { jp: "Su nombre no figura en la lista.", en: "His name does not appear on the list." }, accept: ["to appear", "to be listed", "to be recorded", "appear"], hint: "For being written somewhere official, never for showing up in person. Hacer figurar algo = to have something put on the record." },
        { id: "es-u110l3-serobjetode", type: "vocab", front: "ser objeto de", reading: "serobjetode", meaning: "to be subject to / undergo", example: { jp: "El caso fue objeto de un largo estudio.", en: "The case was the subject of a long study." }, accept: ["to be subject to", "to be the subject of", "to undergo", "be subject to"], hint: "The administrative passive: it names what happened to someone without naming who did it. Ser objeto de una sanción, de una revisión." },
        { id: "es-u110l3-previa", type: "vocab", front: "previa", reading: "previa", meaning: "subject to prior (something)", example: { jp: "Se puede entrar previa solicitud.", en: "Entry is possible subject to prior application." }, accept: ["subject to prior", "following prior", "after prior", "upon"], hint: "Placed before a noun with no verb at all: previa solicitud, previo pago, previa cita. It compresses a whole condition into two words." },
      ],
    },
    {
      id: "es-u110l4",
      unit: 110,
      lesson: 4,
      title: "Fórmulas del expediente",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Recognise the four formulas that hold an official text together, and name the counter and the step in the file.",
      items: [
        { id: "es-u110l4-porlapresente", type: "vocab", front: "por la presente", reading: "porlapresente", meaning: "hereby / by this letter", example: { jp: "Por la presente le comunico mi decisión.", en: "I hereby notify you of my decision." }, accept: ["hereby", "by this letter", "by the present letter"], hint: "La presente means this letter, so the phrase is literally by this one. It opens the sentence that does the official act." },
        { id: "es-u110l4-deconformidadcon", type: "vocab", front: "de conformidad con", reading: "deconformidadcon", meaning: "in accordance with", example: { jp: "De conformidad con la norma, el plazo es de un mes.", en: "In accordance with the rule, the deadline is one month." }, accept: ["in accordance with", "pursuant to", "in line with", "under"], hint: "Names the rule an act is based on. Conforme a is the short version, and de acuerdo con is what you would say out loud." },
        { id: "es-u110l4-sinperjuiciode", type: "vocab", front: "sin perjuicio de", reading: "sinperjuiciode", meaning: "without prejudice to", example: { jp: "Se paga la ayuda sin perjuicio de lo que diga el juez.", en: "The support is paid without prejudice to what the judge may say." }, accept: ["without prejudice to", "notwithstanding", "without affecting"], hint: "Says this decision does not close off that other thing. El perjuicio is harm — nothing here is harmed by what follows." },
        { id: "es-u110l4-envirtudde", type: "vocab", front: "en virtud de", reading: "envirtudde", meaning: "by virtue of / under", example: { jp: "En virtud de esa cláusula, no hay que pagar nada.", en: "By virtue of that clause, nothing has to be paid." }, accept: ["by virtue of", "under", "pursuant to", "on the strength of"], hint: "Points at the source of an authority. De conformidad con says a rule was followed; en virtud de says a rule gave the power." },
        { id: "es-u110l4-diligencia", type: "vocab", front: "la diligencia", reading: "ladiligencia", meaning: "official step / formality", example: { jp: "Falta una diligencia para cerrar el expediente.", en: "One formality is missing to close the file." }, accept: ["formality", "official step", "procedure", "proceeding"], hint: "One recorded action inside a file. In the plural, las diligencias are the whole set of steps in an investigation." },
        { id: "es-u110l4-ventanilla", type: "vocab", front: "la ventanilla", reading: "laventanilla", meaning: "counter / service window", example: { jp: "Le dijeron que fuera a otra ventanilla.", en: "They told him to go to a different counter." }, accept: ["counter", "window", "service window", "desk"], hint: "The little window you queue at, and by extension the whole experience of dealing with an office: la ventanilla única is the one-stop shop." },
      ],
    },
  ],
};
