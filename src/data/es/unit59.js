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
        { id: "es-u59l1-latransformacion", type: "vocab", front: "la transformación", reading: "latransformacion", meaning: "transformation", example: { jp: "La transformación de la ciudad fue enorme.", en: "The city's transformation was enormous." }, drill: { jp: "La transformación del barrio es enorme", en: "The transformation of the neighbourhood is enormous" }, accept: ["the change", "shift"], hint: "The noun from transformar — a total change." },
        { id: "es-u59l1-evolucionar", type: "vocab", front: "evolucionar", reading: "evolucionar", meaning: "to evolve", example: { jp: "La tecnología evoluciona muy rápido hoy en día.", en: "Technology evolves very fast nowadays." }, drill: { jp: "La ciudad va a evolucionar mucho", en: "The city is going to evolve a lot" }, accept: ["to develop", "to progress"], hint: "Gradual change over time, for the better. hoy en día = nowadays." },
        { id: "es-u59l1-laevolucion", type: "vocab", front: "la evolución", reading: "laevolucion", meaning: "evolution", example: { jp: "La evolución del idioma es un proceso muy largo.", en: "The evolution of the language is a very long process." }, drill: { jp: "La evolución del precio es lenta", en: "The change in the price is slow" }, accept: ["the development"], hint: "The noun from evolucionar — slow, gradual change. el proceso is u56." },
        { id: "es-u59l1-aparecer", type: "vocab", front: "aparecer", reading: "aparecer", meaning: "to appear", example: { jp: "De repente aparecieron muchos problemas nuevos.", en: "Suddenly a lot of new problems appeared." }, drill: { jp: "Un problema nuevo puede aparecer mañana", en: "A new problem can appear tomorrow" }, accept: ["to show up", "to turn up"], hint: "To come into view or existence. Aparezco in the yo form. De repente is u28." },
        { id: "es-u59l1-desaparecer", type: "vocab", front: "desaparecer", reading: "desaparecer", meaning: "to disappear", example: { jp: "Muchas costumbres antiguas desaparecen poco a poco.", en: "Many old customs are disappearing bit by bit." }, drill: { jp: "El dolor puede desaparecer con la pastilla", en: "The pain can disappear with the pill" }, accept: ["to vanish", "to die out"], hint: "des- + aparecer — its exact opposite. la costumbre is A2." },
        { id: "es-u59l1-consolidarse", type: "vocab", front: "consolidarse", reading: "consolidarse", meaning: "to become established", example: { jp: "La empresa se consolidó después de diez años difíciles.", en: "The company became established after ten difficult years." }, drill: { jp: "Consolidarse en el trabajo es lento", en: "Becoming established at work is slow" }, accept: ["to become established", "to take hold", "to consolidate"], hint: "Reflexive: change that has finished and now holds firm. From sólido." },
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
        { id: "es-u59l2-elaumento", type: "vocab", front: "el aumento", reading: "elaumento", meaning: "increase", example: { jp: "El aumento de precios este año fue notable.", en: "The increase in prices this year was notable." }, drill: { jp: "El aumento del precio es enorme", en: "The increase in the price is enormous" }, accept: ["the rise", "growth"], hint: "The noun from aumentar (A2). Un aumento de sueldo = a pay rise." },
        { id: "es-u59l2-permanecer", type: "vocab", front: "permanecer", reading: "permanecer", meaning: "to remain", example: { jp: "El precio permaneció igual durante todo el año.", en: "The price remained the same all year." }, drill: { jp: "Quiero permanecer en Madrid", en: "I want to remain in Madrid" }, accept: ["to stay"], hint: "To stay unchanged — more formal than quedarse (A2). Permanezco in the yo form." },
        { id: "es-u59l2-gradual", type: "vocab", front: "gradual", reading: "gradual", meaning: "gradual", example: { jp: "El cambio fue gradual, no de un día para otro.", en: "The change was gradual, not overnight." }, drill: { jp: "El cambio es lento y gradual", en: "The change is slow and gradual" }, accept: ["step-by-step"], hint: "Happening slowly, by degrees. The adverb is gradualmente. De un día para otro = overnight." },
        { id: "es-u59l2-eldescenso", type: "vocab", front: "el descenso", reading: "eldescenso", meaning: "the fall / drop", example: { jp: "Este año hubo un descenso claro de los precios.", en: "This year there was a clear drop in prices." }, drill: { jp: "El descenso del precio es bueno", en: "The drop in the price is good" }, accept: ["the fall", "the drop", "the decrease"], hint: "The opposite of el aumento, the first card here. Un descenso DE algo." },
        { id: "es-u59l2-elincremento", type: "vocab", front: "el incremento", reading: "elincremento", meaning: "the increase", example: { jp: "El incremento de los precios preocupa a muchas familias.", en: "The increase in prices worries many families." }, drill: { jp: "El incremento del sueldo es pequeño", en: "The increase in salary is small" }, accept: ["the increase", "the rise", "the growth"], hint: "More formal than el aumento; the word reports and the news reach for." },
        { id: "es-u59l2-duplicarse", type: "vocab", front: "duplicarse", reading: "duplicarse", meaning: "to double", example: { jp: "El número de estudiantes se duplicó en cinco años.", en: "The number of students doubled in five years." }, drill: { jp: "El precio puede duplicarse este año", en: "The price can double this year" }, accept: ["to double", "to be doubled"], hint: "Reflexive when it is the amount doing the doubling: se duplicó. From el doble." },
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
        { id: "es-u59l3-antiguo", type: "vocab", front: "antiguo", reading: "antiguo", meaning: "old", example: { jp: "Vivimos en una casa muy antigua del centro.", en: "We live in a very old house in the centre." }, drill: { jp: "El edificio es muy antiguo", en: "The building is very old" }, accept: ["ancient", "former"], hint: "Old as in old-established (a building, a custom) — viejo (A1) is more everyday. Before the noun it can mean \"former\": mi antiguo jefe." },
        { id: "es-u59l3-moderno", type: "vocab", front: "moderno", reading: "moderno", meaning: "modern", example: { jp: "Me gusta el arte moderno más que el clásico.", en: "I like modern art more than classical." }, drill: { jp: "El hotel es bastante moderno", en: "The hotel is quite modern" }, accept: ["contemporary", "up-to-date"], hint: "The opposite of antiguo. el clásico is a clear cognate." },
        { id: "es-u59l3-tradicional", type: "vocab", front: "tradicional", reading: "tradicional", meaning: "traditional", example: { jp: "La comida tradicional del pueblo es muy buena.", en: "The town's traditional food is very good." }, drill: { jp: "La fiesta del pueblo es tradicional", en: "The town festival is traditional" }, accept: ["customary"], hint: "From la tradición. Passed down over time — the opposite of moderno in feel." },
        { id: "es-u59l3-reciente", type: "vocab", front: "reciente", reading: "reciente", meaning: "recent", example: { jp: "Es una noticia muy reciente, de esta mañana.", en: "It's very recent news, from this morning." }, drill: { jp: "El cambio es muy reciente", en: "The change is very recent" }, accept: ["new", "latest"], hint: "From not long ago. The adverb recientemente = recently; hace poco says the same casually." },
        { id: "es-u59l3-anticuado", type: "vocab", front: "anticuado", reading: "anticuado", meaning: "old-fashioned", example: { jp: "Su forma de pensar es un poco anticuada.", en: "His way of thinking is a bit old-fashioned." }, drill: { jp: "El ordenador está anticuado", en: "The computer is out of date" }, accept: ["outdated", "dated"], hint: "Old in a bad way — out of date. From antiguo, but never a compliment." },
        { id: "es-u59l3-lamoda", type: "vocab", front: "la moda", reading: "lamoda", meaning: "fashion", example: { jp: "Esa ropa ya está pasada de moda.", en: "Those clothes are already out of fashion." }, drill: { jp: "La moda de este año es rara", en: "This year's fashion is strange" }, accept: ["the trend", "style"], hint: "estar de moda = to be in fashion; pasado de moda = out of fashion. la ropa is A1." },
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
        { id: "es-u59l4-avanzar", type: "vocab", front: "avanzar", reading: "avanzar", meaning: "to advance", example: { jp: "El proyecto avanza despacio pero bien.", en: "The project is advancing slowly but well." }, drill: { jp: "El proyecto va a avanzar despacio", en: "The project is going to advance slowly" }, accept: ["to move forward", "to progress"], hint: "To move forward. From avance. Avanzado = advanced (a level, a hour)." },
        { id: "es-u59l4-retroceder", type: "vocab", front: "retroceder", reading: "retroceder", meaning: "to go backwards", example: { jp: "En vez de avanzar, la economía retrocede.", en: "Instead of advancing, the economy is going backwards." }, drill: { jp: "El coche puede retroceder un poco", en: "The car can go back a little" }, accept: ["to fall back", "to retreat"], hint: "The opposite of avanzar. En vez de = instead of. la economía is a clear cognate." },
        { id: "es-u59l4-estable", type: "vocab", front: "estable", reading: "estable", meaning: "stable", example: { jp: "La situación por fin es estable y tranquila.", en: "The situation is finally stable and calm." }, drill: { jp: "El precio es estable este mes", en: "The price is stable this month" }, accept: ["steady"], hint: "Not changing, in a good way. From estar. Its opposite is inestable, unstable." },
        { id: "es-u59l4-constante", type: "vocab", front: "constante", reading: "constante", meaning: "constant", example: { jp: "Hay un ruido constante en la calle día y noche.", en: "There's a constant noise in the street day and night." }, drill: { jp: "El ruido de la calle es constante", en: "The street noise is constant" }, accept: ["continuous", "steady"], hint: "Non-stop, unchanging. Also a personality trait: ser constante = to be persistent." },
        { id: "es-u59l4-elretroceso", type: "vocab", front: "el retroceso", reading: "elretroceso", meaning: "the setback / step backwards", example: { jp: "La crisis supuso un retroceso de varios años.", en: "The crisis meant a setback of several years." }, drill: { jp: "El retroceso del proyecto es grave", en: "The setback to the project is serious" }, accept: ["the setback", "the decline", "the step backwards"], hint: "The noun of retroceder, the card before it." },
        { id: "es-u59l4-acelerar", type: "vocab", front: "acelerar", reading: "acelerar", meaning: "to speed up", example: { jp: "La empresa quiere acelerar el proceso de cambio.", en: "The company wants to speed up the process of change." }, drill: { jp: "Quiero acelerar el proceso", en: "I want to speed up the process" }, accept: ["to speed up", "to accelerate", "to hasten"], hint: "Also what you do in a car. Its opposite is frenar." },
      ],
    },
  ],
};
