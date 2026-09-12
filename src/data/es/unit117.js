// ES Unit 117 — Thinking and understanding (slot: cognition) — B2
// AUTHORED (block 3, u114-u126). 4 lessons x 6 cards. Every example uses only vocab
// introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 3 (u114–u126). Do not widen it.
//   OWNS: The mind at work — perceive, grasp, ponder, infer, elucidate, misconstrue.
//   NOT:  Concepts and beliefs as objects (u58) and argumentative stance (u111).
//
// Rejected as already taught: deducir (u51), intuir (u54), evocar (u63), sopesar (u62),
// calar (u88). Note the boundary with u111: this unit is the mind working something
// out, not the moves an argument makes with the result.
export const ES_UNIT117 = {
  id: "es-u117",
  lang: "es",
  title: "La mente en marcha",
  order: 117,
  stage: "b2",
  lessons: [
    {
      id: "es-u117l1",
      unit: 117,
      lesson: 1,
      title: "Percibir y captar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how something reached your mind: that you noticed it, half saw it, made it out, or told it apart from something else.",
      items: [
        { id: "es-u117l1-percibir", type: "vocab", front: "percibir", reading: "percibir", meaning: "to perceive", example: { jp: "Percibí cierta tensión entre los dos desde el principio.", en: "I perceived a certain tension between the two of them from the start." }, drill: { jp: "Puedo percibir cierta tensión", en: "I can perceive a certain tension" }, accept: ["to perceive", "to sense", "to detect"], hint: "Wider than ver or oír: it covers anything the mind registers. In money contexts it also means to receive a salary." },
        { id: "es-u117l1-captar", type: "vocab", front: "captar", reading: "captar", meaning: "to grasp / pick up on", example: { jp: "No captó la ironía y contestó muy en serio.", en: "He did not pick up on the irony and answered very seriously." }, accept: ["to grasp", "to pick up on", "to catch", "to get"], hint: "Understanding that arrives quickly, often of something unsaid. A radio also capta a signal." },
        { id: "es-u117l1-discernir", type: "vocab", front: "discernir", reading: "discernir", meaning: "to discern / tell apart", example: { jp: "Cuesta discernir lo importante de lo accesorio en este informe.", en: "It is hard to tell the important from the incidental in this report." }, drill: { jp: "Cuesta discernir lo importante", en: "It is hard to discern what matters" }, accept: ["to discern", "to tell apart", "to distinguish"], hint: "Discernir A DE B. The work is separating, not merely seeing." },
        { id: "es-u117l1-vislumbrar", type: "vocab", front: "vislumbrar", reading: "vislumbrar", meaning: "to glimpse / make out", example: { jp: "Empezamos a vislumbrar una salida al problema.", en: "We are beginning to glimpse a way out of the problem." }, accept: ["to glimpse", "to make out", "to begin to see"], hint: "Half-light, literal or figurative. Very common with solutions and futures." },
        { id: "es-u117l1-entrever", type: "vocab", front: "entrever", reading: "entrever", meaning: "to catch a hint of", example: { jp: "En su respuesta se entreveía que ya lo había decidido.", en: "In his answer you could sense that he had already decided." }, accept: ["to catch a hint of", "to glimpse", "to sense"], hint: "Ver with entre- : seeing between things. Dejar entrever = to let something show without saying it." },
        { id: "es-u117l1-repararen", type: "vocab", front: "reparar en", reading: "repararen", meaning: "to notice / take note of", example: { jp: "Nadie reparó en el detalle hasta el segundo día del juicio.", en: "Nobody noticed the detail until the second day of the trial." }, accept: ["to notice", "to take note of", "to pay attention to"], hint: "Always with en in this sense — reparar alone means to repair. Sin reparar en gastos = sparing no expense." },
      ],
    },
    {
      id: "es-u117l2",
      unit: 117,
      lesson: 2,
      title: "Meditar y darle vueltas",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe thought that takes time: turning a question over, thinking better of something, and getting lost in your own head.",
      items: [
        { id: "es-u117l2-meditar", type: "vocab", front: "meditar", reading: "meditar", meaning: "to ponder / think over", example: { jp: "Meditó la respuesta durante varios días.", en: "He pondered his answer for several days." }, accept: ["to ponder", "to think over", "to meditate on"], hint: "Takes a direct object: meditar una decisión. Broader than the sitting-still sense." },
        { id: "es-u117l2-cavilar", type: "vocab", front: "cavilar", reading: "cavilar", meaning: "to brood / mull over", example: { jp: "Se pasó la noche cavilando sobre lo que había oído.", en: "He spent the night brooding over what he had heard." }, drill: { jp: "No quiero cavilar tanto", en: "I do not want to brood so much" }, accept: ["to brood", "to mull over", "to turn over in ones mind"], hint: "Cavilar SOBRE algo. Thinking that goes round rather than forward — usually worried." },
        { id: "es-u117l2-ponderar", type: "vocab", front: "ponderar", reading: "ponderar", meaning: "to weigh up", example: { jp: "Hay que ponderar las ventajas y los riesgos antes de firmar.", en: "One must weigh up the advantages and the risks before signing." }, accept: ["to weigh up", "to weigh", "to consider carefully"], hint: "From peso, weight: putting two things on the scales. A second sense, to speak highly of, survives in formal prose." },
        { id: "es-u117l2-recapacitar", type: "vocab", front: "recapacitar", reading: "recapacitar", meaning: "to think again / reconsider", example: { jp: "Le pidieron que recapacitara antes de presentar la denuncia.", en: "They asked him to think again before filing the complaint." }, accept: ["to think again", "to reconsider", "to have second thoughts"], hint: "Always about a decision already half taken. Often in the imperative: recapacita." },
        { id: "es-u117l2-ensimismarse", type: "vocab", front: "ensimismarse", reading: "ensimismarse", meaning: "to become lost in thought", example: { jp: "Se ensimismó con sus papeles y no oyó la pregunta.", en: "He became lost in thought over his papers and did not hear the question." }, accept: ["to become lost in thought", "to be absorbed in oneself", "to be miles away"], hint: "Literally en-sí-mismo: to go inside oneself. Always reflexive." },
        { id: "es-u117l2-rememorar", type: "vocab", front: "rememorar", reading: "rememorar", meaning: "to call to mind / recollect", example: { jp: "El libro rememora los años en que la familia vivía en el campo.", en: "The book recalls the years when the family lived in the countryside." }, accept: ["to recollect", "to call to mind", "to look back on"], hint: "Deliberate, unhurried remembering, usually in writing. Plain recordar is what you do in conversation." },
      ],
    },
    {
      id: "es-u117l3",
      unit: 117,
      lesson: 3,
      title: "Inferir y presuponer",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Go from what you know to what follows: infer a conclusion, spin a theory, confirm a fact, and admit an assumption.",
      items: [
        { id: "es-u117l3-elucubrar", type: "vocab", front: "elucubrar", reading: "elucubrar", meaning: "to theorise / speculate at length", example: { jp: "Pasaron horas elucubrando sobre lo que pasó aquella noche.", en: "They spent hours theorising about what happened that night." }, accept: ["to theorise", "to speculate", "to spin theories"], hint: "Elaborate reasoning built on very little, and the word says so: it is faintly mocking." },
        { id: "es-u117l3-presuponer", type: "vocab", front: "presuponer", reading: "presuponer", meaning: "to presuppose", example: { jp: "Tu pregunta presupone que ya hemos aprobado el plan.", en: "Your question presupposes that we have already approved the plan." }, drill: { jp: "Tu pregunta parece presuponer mucho", en: "Your question seems to presuppose a lot" }, accept: ["to presuppose", "to assume", "to take for granted"], hint: "The assumption hidden inside a statement. Conjugates like poner: presupongo, presupuso." },
        { id: "es-u117l3-desentranar", type: "vocab", front: "desentrañar", reading: "desentranar", meaning: "to unravel / get to the bottom of", example: { jp: "Nadie ha conseguido desentrañar el sentido de ese capítulo.", en: "Nobody has managed to unravel the meaning of that chapter." }, drill: { jp: "Nadie ha podido desentrañar eso", en: "Nobody has been able to unravel that" }, accept: ["to unravel", "to get to the bottom of", "to work out"], hint: "Strong image: pulling out the entrails. Used of mysteries, texts and cases." },
        { id: "es-u117l3-concebir", type: "vocab", front: "concebir", reading: "concebir", meaning: "to conceive of / imagine", example: { jp: "No concibo que alguien pueda pensar así.", en: "I cannot conceive of anyone thinking that way." }, accept: ["to conceive of", "to imagine", "to envisage"], hint: "No concibo que + subjunctive is the everyday use. It also means to conceive a child and to devise a plan." },
        { id: "es-u117l3-extrapolar", type: "vocab", front: "extrapolar", reading: "extrapolar", meaning: "to extrapolate", example: { jp: "No se puede extrapolar ese dato a todo el país.", en: "That figure cannot be extrapolated to the whole country." }, accept: ["to extrapolate", "to generalise from", "to project"], hint: "To carry a finding from one case to a wider one. The objection to it is that the cases differ." },
        { id: "es-u117l3-inducir", type: "vocab", front: "inducir", reading: "inducir", meaning: "to infer inductively", example: { jp: "De los hechos se induce una conclusión distinta.", en: "From the facts a different conclusion is inferred." }, drill: { jp: "Podemos inducir otra conclusión", en: "We can infer another conclusion" }, accept: ["to infer inductively", "to induce", "to reason from cases"], hint: "Reasoning from particular cases to a general rule — the opposite direction from deducir. It also means to lead someone into: inducir a error." },
      ],
    },
    {
      id: "es-u117l4",
      unit: 117,
      lesson: 4,
      title: "Esclarecer y malinterpretar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something has been cleared up, settled by argument, taken in properly — or read the wrong way.",
      items: [
        { id: "es-u117l4-esclarecer", type: "vocab", front: "esclarecer", reading: "esclarecer", meaning: "to clear up / shed light on", example: { jp: "La policía no ha esclarecido todavía lo que ocurrió.", en: "The police have not yet cleared up what happened." }, accept: ["to clear up", "to shed light on", "to elucidate"], hint: "Facts, not arguments: crimes, causes, events. Built on claro." },
        { id: "es-u117l4-dilucidar", type: "vocab", front: "dilucidar", reading: "dilucidar", meaning: "to elucidate / settle (a question)", example: { jp: "Queda por dilucidar quién decidió aquello.", en: "It remains to be settled who decided that." }, accept: ["to elucidate", "to settle", "to clarify"], hint: "Questions rather than facts — you dilucidas a doubt by reasoning it through. Queda por dilucidar is the set phrase." },
        { id: "es-u117l4-malinterpretar", type: "vocab", front: "malinterpretar", reading: "malinterpretar", meaning: "to misconstrue", example: { jp: "Malinterpretaron el informe y publicaron lo contrario.", en: "They misconstrued the report and published the opposite." }, accept: ["to misconstrue", "to misinterpret", "to misread"], hint: "One word, no space. The reflexive puts the blame on the text: eso se puede malinterpretar." },
        { id: "es-u117l4-asimilar", type: "vocab", front: "asimilar", reading: "asimilar", meaning: "to take in / absorb", example: { jp: "Necesita tiempo para asimilar todo lo que ha pasado.", en: "She needs time to take in everything that has happened." }, accept: ["to take in", "to absorb", "to assimilate"], hint: "Both information and bad news. What the body does with food, the mind does with facts." },
        { id: "es-u117l4-interiorizar", type: "vocab", front: "interiorizar", reading: "interiorizar", meaning: "to internalise", example: { jp: "Ha interiorizado esas normas hasta el punto de no verlas.", en: "He has internalised those rules to the point of not seeing them." }, drill: { jp: "Ha logrado interiorizar esas normas", en: "He has managed to internalise those rules" }, accept: ["to internalise", "to internalize", "to make ones own"], hint: "One step past asimilar: the idea is now yours and invisible to you." },
        { id: "es-u117l4-descifrar", type: "vocab", front: "descifrar", reading: "descifrar", meaning: "to decipher / work out", example: { jp: "Nadie consiguió descifrar lo que quería decir.", en: "Nobody managed to work out what he meant." }, accept: ["to decipher", "to work out", "to make sense of"], hint: "Of codes, handwriting and intentions. La cifra is a figure or a cipher." },
      ],
    },
  ],
};
