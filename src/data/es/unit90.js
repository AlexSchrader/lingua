// ES Unit 90 — Systems and abstraction (slot: systems) — B2
// SCAFFOLD STUB. Replace the locked lessons below with 4 real lessons of
// 5-8 cards each (aim 6). Every lesson needs a canDo. Every example may use only
// vocab introduced at or before this unit. See RUNBOOK-new-language.md §4.
// lang/unit/lesson are stamped in src/data/index.js.
//
// THEME CONTRACT — block 1 (u88–u100). Do not widen it. Retitle this unit in Spanish when
// you author it: the English title above marks the SLOT, the wording is yours.
//   OWNS: Anatomy of a system — components, models, interdependence, emergence, the
//         abstract/concrete distinction at B2.
//   NOT:  Process, method and phase at B1 (u86) and cause-and-effect (u52). If the word
//         names one step of a procedure, it is u86's.
//
// Spanish already teaches 2,094 words across u1–u87. Check src/data/es/TAUGHT-WORDS.md
// before writing EVERY front — a duplicate front is a hard validate:content failure,
// and the es B1 band lost 159 cards to exactly that.
export const ES_UNIT90 = {
  id: "es-u90",
  lang: "es",
  title: "Los sistemas y la abstracción",
  order: 90,
  stage: "b2",
  lessons: [
    {
      id: "es-u90l1",
      unit: 90,
      lesson: 1,
      title: "Anatomía de un sistema",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how something complex is put together: its components, its inner workings, its hierarchy, and how its parts depend on one another.",
      items: [
        { id: "es-u90l1-elcomponente", type: "vocab", front: "el componente", reading: "elcomponente", meaning: "the component", example: { jp: "Cada componente del sistema se puede cambiar por separado.", en: "Each component of the system can be replaced separately." }, accept: ["the component", "the part", "the element"], hint: "A part that does a job inside a whole. B1 taught el elemento (u86); un componente is one that functions." },
        { id: "es-u90l1-elengranaje", type: "vocab", front: "el engranaje", reading: "elengranaje", meaning: "the machinery / cogs", example: { jp: "Es una pieza más del engranaje administrativo.", en: "He is one more cog in the administrative machinery." }, accept: ["the machinery", "the cogs", "the workings"], hint: "Literally the gears of a machine, and almost always used for how an institution grinds along." },
        { id: "es-u90l1-elentramado", type: "vocab", front: "el entramado", reading: "elentramado", meaning: "the framework / web", example: { jp: "Detrás hay un entramado de empresas muy difícil de seguir.", en: "Behind it there is a web of companies that is very hard to follow." }, accept: ["the framework", "the web", "the network"], hint: "A structure of many linked parts, often with something hidden in it: un entramado empresarial." },
        { id: "es-u90l1-laarquitectura", type: "vocab", front: "la arquitectura", reading: "laarquitectura", meaning: "the architecture / overall design", example: { jp: "La arquitectura del sistema no ha cambiado en años.", en: "The architecture of the system hasn't changed in years." }, accept: ["the architecture", "the overall design", "the structure"], hint: "Buildings first, but freely used of systems, laws and software." },
        { id: "es-u90l1-lajerarquia", type: "vocab", front: "la jerarquía", reading: "lajerarquia", meaning: "the hierarchy", example: { jp: "En esa jerarquía nadie decide nada solo.", en: "In that hierarchy nobody decides anything alone." }, accept: ["the hierarchy", "the chain of command", "the pecking order"], hint: "Jerárquico is the adjective. It names ranks, not just an order." },
        { id: "es-u90l1-lainterdependencia", type: "vocab", front: "la interdependencia", reading: "lainterdependencia", meaning: "the interdependence", example: { jp: "La interdependencia entre los dos mercados es total.", en: "The interdependence between the two markets is total." }, accept: ["the interdependence", "the mutual dependence"], hint: "Not just dependence: each side needs the other. Depender is the B1 verb underneath it." },
      ],
    },
    {
      id: "es-u90l2",
      unit: 90,
      lesson: 2,
      title: "De lo abstracto a lo concreto",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Move between the general and the particular: name an abstraction, a generalization, a pattern, and the variables a model depends on.",
      items: [
        { id: "es-u90l2-laabstraccion", type: "vocab", front: "la abstracción", reading: "laabstraccion", meaning: "the abstraction", example: { jp: "Ese modelo es una abstracción útil, no la realidad.", en: "That model is a useful abstraction, not reality." }, accept: ["the abstraction"], hint: "B1 taught the adjective abstracto (u58); this is the thing itself — what you get when detail is stripped away." },
        { id: "es-u90l2-lageneralizacion", type: "vocab", front: "la generalización", reading: "lageneralizacion", meaning: "the generalization", example: { jp: "Es una generalización que no se sostiene con estos datos.", en: "It's a generalization that doesn't hold up with this data." }, accept: ["the generalization", "the sweeping statement"], hint: "Generalizar is the verb. In argument it is usually an accusation." },
        { id: "es-u90l2-laconcrecion", type: "vocab", front: "la concreción", reading: "laconcrecion", meaning: "the specifics / concreteness", example: { jp: "Al plan le falta concreción en casi todo.", en: "The plan lacks specifics on almost everything." }, accept: ["the specifics", "concreteness", "the detail"], hint: "The quality of being concreto (u58). Faltar concreción = to be all talk and no detail." },
        { id: "es-u90l2-elparametro", type: "vocab", front: "el parámetro", reading: "elparametro", meaning: "the parameter", example: { jp: "Si cambias un parámetro, cambia todo el resultado.", en: "If you change one parameter, the whole result changes." }, accept: ["the parameter", "the setting", "the variable"], hint: "A value you set before the system runs. Dentro de los parámetros normales = within normal limits." },
        { id: "es-u90l2-lavariable", type: "vocab", front: "la variable", reading: "lavariable", meaning: "the variable", example: { jp: "Hay demasiadas variables para estar seguros.", en: "There are too many variables to be certain." }, accept: ["the variable", "the factor"], hint: "What changes while everything else is held still. B1's el factor (u52) is a cause; a variable is a measurement." },
        { id: "es-u90l2-elpatron", type: "vocab", front: "el patrón", reading: "elpatron", meaning: "the pattern", example: { jp: "Se repite el mismo patrón cada primavera.", en: "The same pattern repeats every spring." }, accept: ["the pattern", "the model", "the standard"], hint: "Three senses at once: a repeating pattern, a template, and a standard — el patrón oro." },
      ],
    },
    {
      id: "es-u90l3",
      unit: 90,
      lesson: 3,
      title: "Cómo se comporta un sistema",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how a system behaves over time: name feedback, a loop, a threshold, and describe the scale of what you are looking at.",
      items: [
        { id: "es-u90l3-laretroalimentacion", type: "vocab", front: "la retroalimentación", reading: "laretroalimentacion", meaning: "feedback", example: { jp: "El sistema mejora gracias a la retroalimentación de los usuarios.", en: "The system improves thanks to feedback from users." }, accept: ["feedback", "the feedback loop"], hint: "The output coming back as input. In everyday speech Spanish often borrows el feedback instead." },
        { id: "es-u90l3-elbucle", type: "vocab", front: "el bucle", reading: "elbucle", meaning: "the loop", example: { jp: "El proceso entró en un bucle y nunca terminaba.", en: "The process went into a loop and never finished." }, accept: ["the loop", "the cycle"], hint: "A repeat that feeds itself. Un bucle sin fin = an endless loop." },
        { id: "es-u90l3-elumbral", type: "vocab", front: "el umbral", reading: "elumbral", meaning: "the threshold", example: { jp: "Por debajo de ese umbral el efecto desaparece.", en: "Below that threshold the effect disappears." }, accept: ["the threshold", "the cut-off", "the doorstep"], hint: "Literally a doorstep, and the point where behaviour changes: el umbral de pobreza." },
        { id: "es-u90l3-lamagnitud", type: "vocab", front: "la magnitud", reading: "lamagnitud", meaning: "the magnitude / scale", example: { jp: "Nadie entendió la magnitud del problema hasta después.", en: "Nobody understood the magnitude of the problem until afterwards." }, accept: ["the magnitude", "the scale", "the extent"], hint: "How big, measured. De gran magnitud = large-scale." },
        { id: "es-u90l3-lapropiedad", type: "vocab", front: "la propiedad", reading: "lapropiedad", meaning: "the property (of a thing)", example: { jp: "El agua tiene una propiedad que ningún otro líquido tiene.", en: "Water has a property no other liquid has." }, accept: ["the property", "the characteristic", "the ownership"], hint: "Two senses: a property of a substance, and legal ownership — la propiedad privada." },
        { id: "es-u90l3-laenvergadura", type: "vocab", front: "la envergadura", reading: "laenvergadura", meaning: "the scale / scope", example: { jp: "Es un proyecto de una envergadura enorme.", en: "It's a project of enormous scope." }, accept: ["the scale", "the scope", "the magnitude"], hint: "Literally a wingspan. De gran envergadura is the standard phrase for a big undertaking." },
      ],
    },
    {
      id: "es-u90l4",
      unit: 90,
      lesson: 4,
      title: "Verbos del sistema",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the verbs a systems description needs: something emerges, two things converge, an idea is articulated, a boundary is drawn, a rule governs the whole.",
      items: [
        { id: "es-u90l4-emerger", type: "vocab", front: "emerger", reading: "emerger", meaning: "to emerge", example: { jp: "De esa mezcla emergió algo que nadie esperaba.", en: "Out of that mixture emerged something nobody expected." }, accept: ["to emerge", "to arise", "to come out"], hint: "Something that was not there in the parts appears in the whole. B1's surgir (u78) is closer to 'crop up'." },
        { id: "es-u90l4-converger", type: "vocab", front: "converger", reading: "converger", meaning: "to converge", example: { jp: "Las dos investigaciones convergen en la misma conclusión.", en: "The two investigations converge on the same conclusion." }, accept: ["to converge", "to come together", "to meet"], hint: "converger EN algo. Its opposite is divergir." },
        { id: "es-u90l4-articular", type: "vocab", front: "articular", reading: "articular", meaning: "to articulate / put together", example: { jp: "Hay que articular una respuesta común entre todos.", en: "A common response has to be put together by everyone." }, accept: ["to articulate", "to organize", "to piece together"], hint: "To join parts so they work as one: articular un plan, articular un discurso." },
        { id: "es-u90l4-delimitar", type: "vocab", front: "delimitar", reading: "delimitar", meaning: "to define the limits of", example: { jp: "Primero hay que delimitar bien el problema.", en: "First the problem has to be properly defined." }, accept: ["to define the limits of", "to delimit", "to mark out"], hint: "To draw the boundary, not to explain the contents: definir says what it is, delimitar says how far it goes." },
        { id: "es-u90l4-subyacer", type: "vocab", front: "subyacer", reading: "subyacer", meaning: "to underlie", example: { jp: "Bajo esa política subyace una idea muy antigua.", en: "Underneath that policy lies a very old idea." }, accept: ["to underlie", "to lie beneath"], hint: "Almost always in the participle: la idea subyacente = the underlying idea." },
        { id: "es-u90l4-regir", type: "vocab", front: "regir", reading: "regir", meaning: "to govern", example: { jp: "Las mismas reglas rigen para todos los casos.", en: "The same rules govern all cases." }, accept: ["to govern", "to rule", "to apply to"], hint: "Of rules and laws, not people: la norma que rige el proceso. Vigente (u75) is what a rule that rige is." },
      ],
    },
  ],
};
