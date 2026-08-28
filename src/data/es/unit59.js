// ES Unit 59 — Cambio en el tiempo (slot: change-over-time) — B1
// ─────────────────────────────────────────────────────────────────────────────
// A2 gave the learner "to change" — cambiar, convertirse, volverse, aumentar,
// crecer. B1 adds the vocabulary of change as a PROCESS over time: transforming
// and evolving, rising and falling, old versus new, and the pace and steadiness
// of it all. This pairs naturally with cause/consequence (u52). Every A2 change
// verb is used and re-taught nowhere; examples avoid the subjunctive and lean on the
// A2 time words (antes, después, ya, cada vez más).
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT59 = {
  id: "es-u59",
  lang: "es",
  title: "Cambio en el tiempo",
  order: 59,
  stage: "b1",
  lessons: [
    {
      id: "es-u59l1",
      unit: 59,
      lesson: 1,
      title: "Becoming and changing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe deeper change — transformar, la transformación, evolucionar, la evolución, aparecer, desaparecer.",
      items: [
        { id: "es-u59l1-transformar", type: "vocab", front: "transformar", reading: "transformar", meaning: "to transform", example: { jp: "El centro de la ciudad se transformó por completo en diez años.", en: "The city centre transformed completely in ten years." }, accept: ["to change (deeply)", "to convert"], hint: "A deep, whole change — stronger than cambiar (A1). Transformarse en = to turn into. Stronger than cambiar or convertirse." },
        { id: "es-u59l1-latransformacion", type: "vocab", front: "la transformación", reading: "latransformacion", meaning: "transformation", example: { jp: "La transformación de la ciudad fue enorme.", en: "The city's transformation was enormous." }, accept: ["the change", "shift"], hint: "The noun from transformar — a total change." },
        { id: "es-u59l1-evolucionar", type: "vocab", front: "evolucionar", reading: "evolucionar", meaning: "to evolve", example: { jp: "La tecnología evoluciona muy rápido hoy en día.", en: "Technology evolves very fast nowadays." }, accept: ["to develop", "to progress"], hint: "Gradual change over time, for the better. hoy en día = nowadays." },
        { id: "es-u59l1-laevolucion", type: "vocab", front: "la evolución", reading: "laevolucion", meaning: "evolution", example: { jp: "La evolución del idioma es un proceso muy largo.", en: "The evolution of the language is a very long process." }, accept: ["the development"], hint: "The noun from evolucionar — slow, gradual change. el proceso is u56." },
        { id: "es-u59l1-aparecer", type: "vocab", front: "aparecer", reading: "aparecer", meaning: "to appear", example: { jp: "De repente aparecieron muchos problemas nuevos.", en: "Suddenly a lot of new problems appeared." }, accept: ["to show up", "to turn up"], hint: "To come into view or existence. Aparezco in the yo form. De repente is u28." },
        { id: "es-u59l1-desaparecer", type: "vocab", front: "desaparecer", reading: "desaparecer", meaning: "to disappear", example: { jp: "Muchas costumbres antiguas desaparecen poco a poco.", en: "Many old customs are disappearing bit by bit." }, accept: ["to vanish", "to die out"], hint: "des- + aparecer — its exact opposite. la costumbre is A2." },
      ],
    },
    {
      id: "es-u59l2",
      unit: 59,
      lesson: 2,
      title: "Rising and falling",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Track amounts over time — el aumento, disminuir, reducir, conservar, permanecer, gradual.",
      items: [
        { id: "es-u59l2-elaumento", type: "vocab", front: "el aumento", reading: "elaumento", meaning: "increase", example: { jp: "El aumento de precios este año fue notable.", en: "The increase in prices this year was notable." }, accept: ["the rise", "growth"], hint: "The noun from aumentar (A2). Un aumento de sueldo = a pay rise." },
        { id: "es-u59l2-disminuir", type: "vocab", front: "disminuir", reading: "disminuir", meaning: "to decrease", example: { jp: "El número de clientes disminuyó bastante.", en: "The number of customers decreased quite a bit." }, accept: ["to drop", "to lessen"], hint: "The opposite of aumentar. Like influir (u52) it takes -uir: disminuye." },
        { id: "es-u59l2-reducir", type: "vocab", front: "reducir", reading: "reducir", meaning: "to reduce", example: { jp: "La empresa quiere reducir los gastos.", en: "The company wants to reduce costs." }, accept: ["to cut", "to lower"], hint: "To make smaller on purpose. Reduzco in the yo form, like conducir. los gastos from gastar (A2)." },
        { id: "es-u59l2-conservar", type: "vocab", front: "conservar", reading: "conservar", meaning: "to preserve", example: { jp: "Es importante conservar las viejas tradiciones.", en: "It's important to preserve the old traditions." }, accept: ["to keep", "to conserve"], hint: "To keep something as it is over time. Near mantener (A2) but about protecting from change." },
        { id: "es-u59l2-permanecer", type: "vocab", front: "permanecer", reading: "permanecer", meaning: "to remain", example: { jp: "El precio permaneció igual durante todo el año.", en: "The price remained the same all year." }, accept: ["to stay"], hint: "To stay unchanged — more formal than quedarse (A2). Permanezco in the yo form." },
        { id: "es-u59l2-gradual", type: "vocab", front: "gradual", reading: "gradual", meaning: "gradual", example: { jp: "El cambio fue gradual, no de un día para otro.", en: "The change was gradual, not overnight." }, accept: ["step-by-step"], hint: "Happening slowly, by degrees. The adverb is gradualmente. De un día para otro = overnight." },
      ],
    },
    {
      id: "es-u59l3",
      unit: 59,
      lesson: 3,
      title: "Old and new",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place things in time — antiguo, moderno, tradicional, reciente, anticuado, la moda.",
      items: [
        { id: "es-u59l3-antiguo", type: "vocab", front: "antiguo", reading: "antiguo", meaning: "old", example: { jp: "Vivimos en una casa muy antigua del centro.", en: "We live in a very old house in the centre." }, accept: ["ancient", "former"], hint: "Old as in old-established (a building, a custom) — viejo (A1) is more everyday. Before the noun it can mean \"former\": mi antiguo jefe." },
        { id: "es-u59l3-moderno", type: "vocab", front: "moderno", reading: "moderno", meaning: "modern", example: { jp: "Me gusta el arte moderno más que el clásico.", en: "I like modern art more than classical." }, accept: ["contemporary", "up-to-date"], hint: "The opposite of antiguo. el clásico is a clear cognate." },
        { id: "es-u59l3-tradicional", type: "vocab", front: "tradicional", reading: "tradicional", meaning: "traditional", example: { jp: "La comida tradicional del pueblo es muy buena.", en: "The town's traditional food is very good." }, accept: ["customary"], hint: "From la tradición. Passed down over time — the opposite of moderno in feel." },
        { id: "es-u59l3-reciente", type: "vocab", front: "reciente", reading: "reciente", meaning: "recent", example: { jp: "Es una noticia muy reciente, de esta mañana.", en: "It's very recent news, from this morning." }, accept: ["new", "latest"], hint: "From not long ago. The adverb recientemente = recently; hace poco says the same casually." },
        { id: "es-u59l3-anticuado", type: "vocab", front: "anticuado", reading: "anticuado", meaning: "old-fashioned", example: { jp: "Su forma de pensar es un poco anticuada.", en: "His way of thinking is a bit old-fashioned." }, accept: ["outdated", "dated"], hint: "Old in a bad way — out of date. From antiguo, but never a compliment." },
        { id: "es-u59l3-lamoda", type: "vocab", front: "la moda", reading: "lamoda", meaning: "fashion", example: { jp: "Esa ropa ya está pasada de moda.", en: "Those clothes are already out of fashion." }, accept: ["the trend", "style"], hint: "estar de moda = to be in fashion; pasado de moda = out of fashion. la ropa is A1." },
      ],
    },
    {
      id: "es-u59l4",
      unit: 59,
      lesson: 4,
      title: "Progress and pace",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe the direction and speed of change — el progreso, avanzar, retroceder, el ritmo, estable, constante.",
      items: [
        { id: "es-u59l4-elprogreso", type: "vocab", front: "el progreso", reading: "elprogreso", meaning: "progress", example: { jp: "El progreso de la ciencia cambió nuestra vida.", en: "The progress of science changed our lives." }, accept: ["the advance"], hint: "Movement forward, for the better. Hacer progresos = to make progress." },
        { id: "es-u59l4-avanzar", type: "vocab", front: "avanzar", reading: "avanzar", meaning: "to advance", example: { jp: "El proyecto avanza despacio pero bien.", en: "The project is advancing slowly but well." }, accept: ["to move forward", "to progress"], hint: "To move forward. From avance. Avanzado = advanced (a level, a hour)." },
        { id: "es-u59l4-retroceder", type: "vocab", front: "retroceder", reading: "retroceder", meaning: "to go backwards", example: { jp: "En vez de avanzar, la economía retrocede.", en: "Instead of advancing, the economy is going backwards." }, accept: ["to fall back", "to retreat"], hint: "The opposite of avanzar. En vez de = instead of. la economía is a clear cognate." },
        { id: "es-u59l4-elritmo", type: "vocab", front: "el ritmo", reading: "elritmo", meaning: "pace", example: { jp: "El ritmo de vida en la ciudad es muy rápido.", en: "The pace of life in the city is very fast." }, accept: ["the rhythm", "rate"], hint: "The speed at which something moves — of life, of work, of music (its rhythm)." },
        { id: "es-u59l4-estable", type: "vocab", front: "estable", reading: "estable", meaning: "stable", example: { jp: "La situación por fin es estable y tranquila.", en: "The situation is finally stable and calm." }, accept: ["steady"], hint: "Not changing, in a good way. From estar. Its opposite is inestable, unstable." },
        { id: "es-u59l4-constante", type: "vocab", front: "constante", reading: "constante", meaning: "constant", example: { jp: "Hay un ruido constante en la calle día y noche.", en: "There's a constant noise in the street day and night." }, accept: ["continuous", "steady"], hint: "Non-stop, unchanging. Also a personality trait: ser constante = to be persistent." },
      ],
    },
  ],
};
