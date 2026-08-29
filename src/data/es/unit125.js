// ES Unit 125 — Connectors of formal Spanish (slot: formal-connectors) — B2
// AUTHORED (block 3, u114-u126). 4 lessons x 6 cards. Every example uses only vocab
// introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 3 (u114–u126). Do not widen it.
//   OWNS: The connector INVENTORY of the high register — adding, restating, conceding,
//         concluding, sequencing.
//   NOT:  B1 connectors (u87: no obstante, por tanto, asimismo, en definitiva) and
//         discourse moves (u108). Check u87 for every candidate.
//
// The densest boundary in the block. Rejected as already taught: es decir (u29), o sea
// (u72), aun así + en cambio + dado que + puesto que + de modo que + por lo que (u36),
// ya que (u29), más bien (u48), en conclusión + en primer lugar (u71), de ahí que (u69),
// por lo demás (u76). Every survivor below was checked against u87's inventory too.
export const ES_UNIT125 = {
  id: "es-u125",
  lang: "es",
  title: "Los conectores del registro culto",
  order: 125,
  stage: "b2",
  lessons: [
    {
      id: "es-u125l1",
      unit: 125,
      lesson: 1,
      title: "Añadir",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Add a further point in formal writing without repeating y or también.",
      items: [
        { id: "es-u125l1-delmismomodo", type: "vocab", front: "del mismo modo", reading: "delmismomodo", meaning: "likewise / in the same way", example: { jp: "El primer informe fue claro; del mismo modo, el segundo no deja dudas.", en: "The first report was clear; likewise, the second leaves no doubt." }, accept: ["likewise", "in the same way", "similarly"], hint: "Adds a parallel case. Where asimismo (u87) merely adds, this one says the two things work alike." },
        { id: "es-u125l1-poranadidura", type: "vocab", front: "por añadidura", reading: "poranadidura", meaning: "what is more / on top of that", example: { jp: "Llegó tarde y, por añadidura, sin los documentos.", en: "He arrived late and, on top of that, without the documents." }, accept: ["what is more", "on top of that", "in addition"], hint: "The extra point usually makes things worse. Written, and slightly weary in tone." },
        { id: "es-u125l1-sumadoaello", type: "vocab", front: "sumado a ello", reading: "sumadoaello", meaning: "added to that", example: { jp: "El precio subió; sumado a ello, bajaron las ventas.", en: "The price went up; added to that, sales fell." }, accept: ["added to that", "on top of that", "in addition to that"], hint: "Very common in journalism, especially in Latin America. Sumado a esto works identically." },
        { id: "es-u125l1-asuvez", type: "vocab", front: "a su vez", reading: "asuvez", meaning: "in turn / for its part", example: { jp: "El tribunal, a su vez, pidió más datos a la fiscalía.", en: "The court, in turn, asked the prosecution service for more data." }, accept: ["in turn", "for its part", "in its turn"], hint: "Adds a second actor doing something of its own. Almost always between commas." },
        { id: "es-u125l1-amende", type: "vocab", front: "amén de", reading: "amende", meaning: "besides / as well as", example: { jp: "Amén de los gastos del juicio, tuvo que pagar a dos peritos.", en: "Besides the costs of the trial, he had to pay two experts." }, accept: ["besides", "as well as", "in addition to"], hint: "Nothing to do with prayer here — it is a formal además de. Takes a noun, not a clause." },
        { id: "es-u125l1-inclusive", type: "vocab", front: "inclusive", reading: "inclusive", meaning: "inclusive / including", example: { jp: "El plazo va del uno al diez, ambos inclusive.", en: "The period runs from the first to the tenth, both inclusive." }, accept: ["inclusive", "including", "and including"], hint: "Ambos inclusive is the set phrase in dates and ranges. Do not confuse it with incluso, meaning even." },
      ],
    },
    {
      id: "es-u125l2",
      unit: 125,
      lesson: 2,
      title: "Reformular",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say the same thing again more precisely: restate, specify, and introduce a list of exactly what you meant.",
      items: [
        { id: "es-u125l2-estoes", type: "vocab", front: "esto es", reading: "estoes", meaning: "that is (to say)", example: { jp: "Se le pide lo mismo que a todos, esto es, cumplir el plazo.", en: "The same is asked of him as of everyone, that is, to meet the deadline." }, accept: ["that is", "that is to say", "namely"], hint: "The written twin of es decir (u29). You would rarely say it out loud." },
        { id: "es-u125l2-asaber", type: "vocab", front: "a saber", reading: "asaber", meaning: "namely", example: { jp: "Faltan tres documentos, a saber: el contrato, la factura y el informe.", en: "Three documents are missing, namely: the contract, the invoice and the report." }, accept: ["namely", "specifically", "as follows"], hint: "Announces a list that will be complete. Usually followed by a colon." },
        { id: "es-u125l2-dichodeotromodo", type: "vocab", front: "dicho de otro modo", reading: "dichodeotromodo", meaning: "put another way", example: { jp: "El plan no se aprobó; dicho de otro modo, hay que empezar de nuevo.", en: "The plan was not approved; put another way, we have to start again." }, accept: ["put another way", "in other words", "to put it differently"], hint: "You are not correcting yourself, only turning the same idea round for a reader who did not follow." },
        { id: "es-u125l2-enotraspalabras", type: "vocab", front: "en otras palabras", reading: "enotraspalabras", meaning: "in other words", example: { jp: "No hubo pruebas claras; en otras palabras, lo absolvieron.", en: "There was no clear evidence; in other words, he was acquitted." }, accept: ["in other words", "put simply", "to put it another way"], hint: "The most neutral of the family, and the one that works in speech as well as in writing." },
        { id: "es-u125l2-enconcreto", type: "vocab", front: "en concreto", reading: "enconcreto", meaning: "specifically", example: { jp: "Habló de varios problemas y, en concreto, del estado del edificio.", en: "He spoke about several problems and, specifically, about the state of the building." }, accept: ["specifically", "in particular", "to be precise"], hint: "Narrows from the general to the one case that matters. En particular is its close neighbour." },
        { id: "es-u125l2-valedecir", type: "vocab", front: "vale decir", reading: "valedecir", meaning: "which is to say", example: { jp: "Se aplicará a todos los casos abiertos, vale decir, también a los antiguos.", en: "It will apply to all open cases, which is to say, to the old ones too." }, accept: ["which is to say", "that is to say", "in other words"], hint: "Standard across Latin America, less usual in Spain. It reads as slightly more formal than es decir." },
      ],
    },
    {
      id: "es-u125l3",
      unit: 125,
      lesson: 3,
      title: "Conceder y contraponer",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Grant a point and then push back on it, correct a wrong impression, or shut a denial firmly.",
      items: [
        { id: "es-u125l3-contodo", type: "vocab", front: "con todo", reading: "contodo", meaning: "even so / nevertheless", example: { jp: "El informe llegó tarde. Con todo, se aprobó.", en: "The report arrived late. Even so, it was approved." }, accept: ["even so", "nevertheless", "all the same"], hint: "Concedes everything just said and keeps going. Con todo y con eso is the emphatic version." },
        { id: "es-u125l3-noporello", type: "vocab", front: "no por ello", reading: "noporello", meaning: "that does not make it / not for that reason", example: { jp: "El informe es largo; no por ello es difícil de leer.", en: "The report is long; that does not make it hard to read." }, accept: ["that does not make it", "not for that reason", "that is no reason to"], hint: "Denies the conclusion a reader was about to draw from what you just said. No por ello menos importante is the standard turn." },
        { id: "es-u125l3-esosi", type: "vocab", front: "eso sí", reading: "esosi", meaning: "mind you / that said", example: { jp: "Te lo presto. Eso sí, lo quiero el lunes.", en: "I will lend it to you. Mind you, I want it back on Monday." }, accept: ["mind you", "that said", "one thing though"], hint: "Adds the condition or reservation that qualifies what you have just granted. Conversational and very frequent." },
        { id: "es-u125l3-antesbien", type: "vocab", front: "antes bien", reading: "antesbien", meaning: "on the contrary / rather", example: { jp: "No rechazó la idea; antes bien, la defendió en público.", en: "He did not reject the idea; rather, he defended it in public." }, accept: ["on the contrary", "rather", "quite the opposite"], hint: "Only after a negative: it replaces what you have just denied with the truth. Formal and literary." },
        { id: "es-u125l3-porcontra", type: "vocab", front: "por contra", reading: "porcontra", meaning: "by contrast", example: { jp: "Aquí tuvimos lluvias; por contra, allí sigue la sequía.", en: "Here we had rain; by contrast, there the drought goes on." }, accept: ["by contrast", "on the other hand", "conversely"], hint: "The terser press version of por el contrario (u87). It sets two facts side by side rather than denying one." },
        { id: "es-u125l3-nimuchomenos", type: "vocab", front: "ni mucho menos", reading: "nimuchomenos", meaning: "far from it / not by a long way", example: { jp: "No es un texto difícil, ni mucho menos.", en: "It is not a difficult text, far from it." }, accept: ["far from it", "not by a long way", "not in the least"], hint: "Goes at the end, after a negative, and slams it shut. Antes bien replaces what you denied; this one just insists on the denial." },
      ],
    },
    {
      id: "es-u125l4",
      unit: 125,
      lesson: 4,
      title: "Ordenar y cerrar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Steer a reader through a long argument: open it, move it on step by step, and close it.",
      items: [
        { id: "es-u125l4-deentrada", type: "vocab", front: "de entrada", reading: "deentrada", meaning: "to begin with / from the outset", example: { jp: "De entrada, hay que decir que el informe no estaba terminado.", en: "To begin with, it must be said that the report was not finished." }, accept: ["to begin with", "from the outset", "for a start"], hint: "Opens with the point that has to be settled before anything else. Also means at first sight." },
        { id: "es-u125l4-ensegundolugar", type: "vocab", front: "en segundo lugar", reading: "ensegundolugar", meaning: "secondly", example: { jp: "En segundo lugar, el precio ha subido mucho este año.", en: "Secondly, the price has risen a lot this year." }, accept: ["secondly", "in the second place", "second"], hint: "The series runs en primer lugar, en segundo lugar, and closes with por último (u87)." },
        { id: "es-u125l4-acontinuacion", type: "vocab", front: "a continuación", reading: "acontinuacion", meaning: "next / below", example: { jp: "A continuación se explican los tres casos.", en: "The three cases are explained below." }, accept: ["next", "below", "then", "following this"], hint: "In a document it means further down the page; in a talk, the next thing said." },
        { id: "es-u125l4-seguidamente", type: "vocab", front: "seguidamente", reading: "seguidamente", meaning: "thereafter / next", example: { jp: "Se leyó el informe y seguidamente se abrió el turno de preguntas.", en: "The report was read out and thereafter questions were invited." }, accept: ["thereafter", "next", "immediately after"], hint: "For a sequence of actions in a written record, where a continuación can also point at a text." },
        { id: "es-u125l4-ensintesis", type: "vocab", front: "en síntesis", reading: "ensintesis", meaning: "in short / to sum up", example: { jp: "En síntesis, el proyecto no se sostiene con estos datos.", en: "In short, the project does not stand up with these figures." }, accept: ["in short", "to sum up", "in summary"], hint: "Gathers the whole argument into one line. En resumen (u87) restates the content; this one states what it all comes to." },
        { id: "es-u125l4-enultimainstancia", type: "vocab", front: "en última instancia", reading: "enultimainstancia", meaning: "ultimately / in the last resort", example: { jp: "En última instancia, la decisión es del tribunal.", en: "Ultimately, the decision is the court's." }, accept: ["ultimately", "in the last resort", "in the final analysis"], hint: "Names who or what decides once everything else is exhausted. The courtroom sense of instancia is the same word." },
      ],
    },
  ],
};
