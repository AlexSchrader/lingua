// ES Unit 126 — Set phrases of the high register (slot: formal-idiom) — B2
// AUTHORED (block 3, u114-u126). 4 lessons x 6 cards. Every example uses only vocab
// introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 3 (u114–u126). Do not widen it.
//   OWNS: Fixed multi-word locutions — aim and means, condition and concession, risk
//         and reservation, as SET PHRASES.
//   NOT:  Single-word connectors (u125) and the everyday fixed phrases of B1 (u76l4,
//         u87).
//
// Rejected as already taught: en caso de que + a menos que + aun cuando + por más que
// (u69), por si acaso (u29). Every item here is a locution of three words or more, so
// nothing collides with u125's inventory: "mediante" was dropped for being a single
// word and therefore u125's kind of item, not this unit's.
export const ES_UNIT126 = {
  id: "es-u126",
  lang: "es",
  title: "Locuciones del registro culto",
  order: 126,
  stage: "b2",
  lessons: [
    {
      id: "es-u126l1",
      unit: 126,
      lesson: 1,
      title: "La finalidad",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State the purpose of a measure in formal Spanish, in the register of a report or a ruling.",
      items: [
        { id: "es-u126l1-afinde", type: "vocab", front: "a fin de", reading: "afinde", meaning: "in order to", example: { jp: "Se reforzó la seguridad a fin de evitar cualquier incidente.", en: "Security was reinforced in order to avoid any incident." }, accept: ["in order to", "so as to", "with the aim of"], hint: "A fin de + infinitive; a fin de que + subjunctive when the subject changes. The written para." },
        { id: "es-u126l1-conmirasa", type: "vocab", front: "con miras a", reading: "conmirasa", meaning: "with a view to", example: { jp: "Se abrió una investigación con miras a esclarecer los hechos.", en: "An investigation was opened with a view to clearing up the facts." }, accept: ["with a view to", "with an eye to", "aiming at"], hint: "The goal is further off and less certain than with a fin de. Frequent in Latin American officialese; in Spain you will hear con vistas a for the same thing." },
        { id: "es-u126l1-enposde", type: "vocab", front: "en pos de", reading: "enposde", meaning: "in pursuit of", example: { jp: "Renunció a todo en pos de un objetivo que nadie entendía.", en: "He gave up everything in pursuit of a goal nobody understood." }, accept: ["in pursuit of", "after", "in search of"], hint: "Pursuit, not intention: you are already moving towards it. Higher and more literary than the rest of this lesson." },
        { id: "es-u126l1-enarasde", type: "vocab", front: "en aras de", reading: "enarasde", meaning: "for the sake of", example: { jp: "Prefirió no hablar en aras del acuerdo.", en: "He chose to say nothing for the sake of the agreement." }, accept: ["for the sake of", "in the interests of", "in pursuit of"], hint: "Something is given up for a higher good. Un ara is an altar — the image is of sacrifice." },
        { id: "es-u126l1-decaraa", type: "vocab", front: "de cara a", reading: "decaraa", meaning: "with an eye to / ahead of", example: { jp: "De cara al próximo curso, habrá más plazas.", en: "Ahead of the coming academic year, there will be more places." }, accept: ["with an eye to", "ahead of", "in view of"], hint: "Facing towards a coming event. More conversational than the rest of this lesson, and very common in Spain." },
        { id: "es-u126l1-aefectosde", type: "vocab", front: "a efectos de", reading: "aefectosde", meaning: "for the purposes of", example: { jp: "A efectos de la ley, los dos casos son iguales.", en: "For the purposes of the law, the two cases are the same." }, accept: ["for the purposes of", "as regards", "for the purpose of"], hint: "The lawyer's phrase: within this rule, treat it as if. It says nothing about the world outside the rule." },
      ],
    },
    {
      id: "es-u126l2",
      unit: 126,
      lesson: 2,
      title: "El medio",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say by what means something was achieved: through a channel, by dint of effort, or on the basis of something.",
      items: [
        { id: "es-u126l2-pormediode", type: "vocab", front: "por medio de", reading: "pormediode", meaning: "by means of", example: { jp: "Se comunicaron por medio de un abogado.", en: "They communicated by means of a lawyer." }, accept: ["by means of", "through", "via"], hint: "The neutral one: a person, a tool or a procedure used as the channel." },
        { id: "es-u126l2-atravesde", type: "vocab", front: "a través de", reading: "atravesde", meaning: "through / via", example: { jp: "La noticia se difundió a través de las redes.", en: "The news spread through the networks." }, accept: ["through", "via", "by way of"], hint: "Something passes across or along it. Where por medio de is an instrument, this is more often a path." },
        { id: "es-u126l2-abasede", type: "vocab", front: "a base de", reading: "abasede", meaning: "by dint of / on the basis of", example: { jp: "Aprendió el oficio a base de repetir el mismo trabajo.", en: "He learned the trade by dint of repeating the same job." }, accept: ["by dint of", "through sheer", "on the basis of"], hint: "Repetition is the method. It also lists an ingredient: una crema a base de aceite." },
        { id: "es-u126l2-afuerzade", type: "vocab", front: "a fuerza de", reading: "afuerzade", meaning: "by sheer force of", example: { jp: "A fuerza de insistir, consiguió que lo escucharan.", en: "By sheer insistence, he got them to listen to him." }, accept: ["by sheer force of", "by dint of", "through sheer"], hint: "Close to a base de, but the effort costs more and the speaker says so." },
        { id: "es-u126l2-valersede", type: "vocab", front: "valerse de", reading: "valersede", meaning: "to make use of / avail oneself of", example: { jp: "Se valió de sus contactos para conseguir la información.", en: "He made use of his contacts to get the information." }, accept: ["to make use of", "to avail oneself of", "to use"], hint: "A verb rather than a phrase, and it hints that the means were convenient rather than honourable." },
        { id: "es-u126l2-porconductode", type: "vocab", front: "por conducto de", reading: "porconductode", meaning: "through the offices of", example: { jp: "La solicitud se presentó por conducto de la embajada.", en: "The application was submitted through the embassy." }, accept: ["through the offices of", "through the intermediary of", "via"], hint: "Strictly official, and always about the proper channel. Anything else sounds absurd with it." },
      ],
    },
    {
      id: "es-u126l3",
      unit: 126,
      lesson: 3,
      title: "La condición y la concesión",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Attach a condition to an agreement, and concede a point without giving up your position.",
      items: [
        { id: "es-u126l3-denoserasi", type: "vocab", front: "de no ser así", reading: "denoserasi", meaning: "failing that / otherwise", example: { jp: "El plazo termina el viernes; de no ser así, habrá que empezar de nuevo.", en: "The deadline ends on Friday; failing that, we shall have to start again." }, accept: ["failing that", "otherwise", "if not"], hint: "De no + infinitive is a formal way to build a condition. It looks back at what was just said and names the alternative." },
        { id: "es-u126l3-peseaque", type: "vocab", front: "pese a que", reading: "peseaque", meaning: "despite the fact that", example: { jp: "Pese a que todos lo sabían, nadie dijo nada.", en: "Despite the fact that everyone knew, nobody said anything." }, accept: ["despite the fact that", "even though", "although"], hint: "Indicative when the fact is real. Pese a + noun is the shorter form: pese al riesgo." },
        { id: "es-u126l3-asabiendasde", type: "vocab", front: "a sabiendas de", reading: "asabiendasde", meaning: "knowing full well", example: { jp: "Firmó a sabiendas de que el plazo ya había pasado.", en: "He signed knowing full well that the deadline had passed." }, accept: ["knowing full well", "knowingly", "in full knowledge that"], hint: "It makes the person responsible: they knew, and did it anyway. Common in judgements." },
        { id: "es-u126l3-acambiodeque", type: "vocab", front: "a cambio de que", reading: "acambiodeque", meaning: "in exchange for", example: { jp: "Aprobaron el plan a cambio de que la empresa pagara los daños.", en: "They approved the plan on condition that the company pay the damages." }, accept: ["on condition that", "in exchange for", "provided that"], hint: "A bargain, not a mere proviso: each side gives something. Takes the subjunctive. A cambio de + noun." },
        { id: "es-u126l3-conindependenciade", type: "vocab", front: "con independencia de", reading: "conindependenciade", meaning: "regardless of", example: { jp: "Con independencia de lo que diga el informe, la decisión no cambiará.", en: "Regardless of what the report says, the decision will not change." }, accept: ["regardless of", "irrespective of", "whatever"], hint: "Sets a factor aside as not affecting the outcome. Con independencia de que + subjunctive when a clause follows." },
        { id: "es-u126l3-adespechode", type: "vocab", front: "a despecho de", reading: "adespechode", meaning: "in defiance of", example: { jp: "Mantuvo su decisión a despecho de todas las críticas.", en: "He held to his decision in defiance of all the criticism." }, accept: ["in defiance of", "in spite of", "regardless of"], hint: "Literary and stronger than a pesar de: it adds that the obstacle was known and disregarded." },
      ],
    },
    {
      id: "es-u126l4",
      unit: 126,
      lesson: 4,
      title: "El riesgo y la reserva",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Enter a reservation: name what is being risked, what is being kept in reserve, and who pays the cost.",
      items: [
        { id: "es-u126l4-ariesgode", type: "vocab", front: "a riesgo de", reading: "ariesgode", meaning: "at the risk of", example: { jp: "A riesgo de repetirme, insisto en que faltan datos.", en: "At the risk of repeating myself, I insist that data are missing." }, accept: ["at the risk of", "running the risk of"], hint: "A riesgo de + infinitive. The speaker sees the danger and goes ahead — often a polite formula." },
        { id: "es-u126l4-sopenade", type: "vocab", front: "so pena de", reading: "sopenade", meaning: "on pain of", example: { jp: "Debe entregar los documentos, so pena de una sanción.", en: "He must hand over the documents, on pain of a penalty." }, accept: ["on pain of", "under penalty of", "at the risk of"], hint: "So is an old preposition surviving only here and in so pretexto de. Pure legal register." },
        { id: "es-u126l4-areservade", type: "vocab", front: "a reserva de", reading: "areservade", meaning: "subject to", example: { jp: "Se aprueba el texto a reserva de lo que diga el informe final.", en: "The text is approved subject to whatever the final report says." }, accept: ["subject to", "pending", "conditional on"], hint: "The decision stands, but something may still change it. A la espera de merely waits; this one reserves." },
        { id: "es-u126l4-aexpensasde", type: "vocab", front: "a expensas de", reading: "aexpensasde", meaning: "at the expense of", example: { jp: "Creció a expensas de las empresas pequeñas.", en: "It grew at the expense of the small companies." }, accept: ["at the expense of", "at the cost of", "off the back of"], hint: "Someone else pays. The original sense is literal — living a expensas de your parents." },
        { id: "es-u126l4-endetrimentode", type: "vocab", front: "en detrimento de", reading: "endetrimentode", meaning: "to the disadvantage of", example: { jp: "Se amplió el plazo en detrimento de los que ya habían pagado.", en: "The deadline was extended to the detriment of those who had already paid." }, accept: ["to the detriment of", "at the cost of", "to the disadvantage of"], hint: "Harm rather than payment: a expensas de takes from you, en detrimento de damages you." },
      ],
    },
  ],
};
