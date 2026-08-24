// ES Unit 28 — El tiempo y los adverbios (slot: time-adverbs) — A2
// ─────────────────────────────────────────────────────────────────────────────
// A1 can tell the clock (la hora, y media, y cuarto, son las, qué hora es), name
// the days and months, and reach for a handful of time words — hoy, mañana,
// ayer, ahora, siempre, nunca, a veces, todos los días, ya, casi. What it cannot
// do is place an event relative to now (last night, the day before yesterday,
// next month), say how LONG something takes, or say HOW something is done. So A2
// adds the relative-time words, the vocabulary of duration, the -mente adverbs of
// manner, and the words that organise a story in time. Every A1 time word is used
// in the examples and re-taught nowhere.
//   -mente is Spanish's -ly: it attaches to an adjective (to its feminine form
//   where there is one) and the hints make the rule visible on each one.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT28 = {
  id: "es-u28",
  lang: "es",
  title: "El tiempo y los adverbios",
  order: 28,
  stage: "a2",
  lessons: [
    // Lesson 1: placing an event relative to now
    {
      id: "es-u28l1",
      unit: 28,
      lesson: 1,
      title: "When, exactly",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Place an event in time — anoche, anteayer, la semana pasada, el próximo mes, temprano.",
      items: [
        { id: "es-u28l1-anoche", type: "vocab", front: "anoche", reading: "anoche", meaning: "last night", example: { jp: "Anoche dormí muy bien.", en: "Last night I slept very well." }, accept: ["yesterday night"], hint: "One word for the whole idea: a- + noche (A1). Not \"la noche pasada\" — natives just say anoche." },
        { id: "es-u28l1-anteayer", type: "vocab", front: "anteayer", reading: "anteayer", meaning: "the day before yesterday", example: { jp: "Anteayer fui al médico.", en: "The day before yesterday I went to the doctor." }, accept: ["day before yesterday"], hint: "ante- (before) + ayer (A1): the day before yesterday, in one word English needs five for." },
        { id: "es-u28l1-pasado", type: "vocab", front: "pasado", reading: "pasado", meaning: "last", example: { jp: "La semana pasada trabajé mucho.", en: "Last week I worked a lot." }, accept: ["past", "gone by", "previous"], hint: "Goes after the noun and agrees: la semana pasada, el mes pasado, el año pasado. Also \"the past\", el pasado." },
        { id: "es-u28l1-proximo", type: "vocab", front: "próximo", reading: "proximo", meaning: "next", example: { jp: "El próximo mes voy a España.", en: "Next month I'm going to Spain." }, accept: ["upcoming", "following", "close"], hint: "Before the noun: el próximo mes. In speech que viene does the same job — el mes que viene." },
        { id: "es-u28l1-temprano", type: "vocab", front: "temprano", reading: "temprano", meaning: "early", example: { jp: "Me levanto temprano por la mañana.", en: "I get up early in the morning." }, accept: ["soon"], hint: "The opposite of tarde, late. Pronto also means early/soon and is often interchangeable." },
        { id: "es-u28l1-elrato", type: "vocab", front: "el rato", reading: "elrato", meaning: "a while", example: { jp: "Descanso un rato después de comer.", en: "I rest for a while after eating." }, accept: ["a short while", "a bit"], hint: "A short while. Pasar un buen rato is to have a good time — literally to spend a good while." },
      ],
    },
    // Lesson 2: how long
    {
      id: "es-u28l2",
      unit: 28,
      lesson: 2,
      title: "How long",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about duration — durar, tardar, durante, desde, hasta — not just when.",
      items: [
        { id: "es-u28l2-durar", type: "vocab", front: "durar", reading: "durar", meaning: "to last", example: { jp: "La clase dura una hora.", en: "The class lasts an hour." }, accept: ["go on for", "take (time)"], hint: "How long something goes on: ¿cuánto dura? — how long does it last?" },
        { id: "es-u28l2-tardar", type: "vocab", front: "tardar", reading: "tardar", meaning: "to take (time)", example: { jp: "El tren tarda una hora en llegar.", en: "The train takes an hour to arrive." }, accept: ["be late", "take a while"], hint: "tardar EN + verb — take time TO do something. From tarde, late: to be slow at it." },
        { id: "es-u28l2-durante", type: "vocab", front: "durante", reading: "durante", meaning: "during", example: { jp: "Estudio durante la mañana.", en: "I study during the morning." }, accept: ["for", "throughout"], hint: "durante + a noun (during the day); mientras (u21) + a verb (while I work). Don't swap them." },
        { id: "es-u28l2-desde", type: "vocab", front: "desde", reading: "desde", meaning: "since", example: { jp: "Vivo aquí desde enero.", en: "I've lived here since January." }, accept: ["from", "ever since"], hint: "The starting point in time or space: desde enero, desde Madrid. desde hace un año — for a year now." },
        { id: "es-u28l2-hasta", type: "vocab", front: "hasta", reading: "hasta", meaning: "until", example: { jp: "Trabajo hasta las seis.", en: "I work until six." }, accept: ["up to", "till", "as far as"], hint: "The end point — the mirror of desde. The same hasta you already say in hasta luego (A1)." },
        { id: "es-u28l2-todavia", type: "vocab", front: "todavía", reading: "todavia", meaning: "still", example: { jp: "Todavía no está en casa.", en: "He's still not home." }, accept: ["yet", "even now"], hint: "todavía no = not yet; todavía sí = still. Aún means exactly the same." },
      ],
    },
    // Lesson 3: how, and how often
    {
      id: "es-u28l3",
      unit: 28,
      lesson: 3,
      title: "How it's done",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how and how often — normalmente, a menudo, fácilmente, despacio, de repente.",
      items: [
        { id: "es-u28l3-normalmente", type: "vocab", front: "normalmente", reading: "normalmente", meaning: "normally", example: { jp: "Normalmente como en casa.", en: "I normally eat at home." }, accept: ["usually", "as a rule"], hint: "normal + -mente, the Spanish -ly. Attach -mente to an adjective and you get an adverb." },
        { id: "es-u28l3-amenudo", type: "vocab", front: "a menudo", reading: "amenudo", meaning: "often", example: { jp: "Voy al cine a menudo.", en: "I often go to the cinema." }, accept: ["frequently", "many times"], hint: "Two words, one adverb. Muchas veces — many times — says the same thing." },
        { id: "es-u28l3-facilmente", type: "vocab", front: "fácilmente", reading: "facilmente", meaning: "easily", example: { jp: "Aprendo español fácilmente.", en: "I learn Spanish easily." }, accept: ["with ease", "readily"], hint: "fácil (A1) + -mente. When the adjective has a feminine, -mente joins that: rápida → rápidamente." },
        { id: "es-u28l3-despacio", type: "vocab", front: "despacio", reading: "despacio", meaning: "slowly", example: { jp: "El profesor habla despacio.", en: "The teacher speaks slowly." }, accept: ["slow", "gently"], hint: "The one you'll beg for: ¿puede hablar más despacio? Not \"lentamente\" in everyday speech." },
        { id: "es-u28l3-derepente", type: "vocab", front: "de repente", reading: "derepente", meaning: "suddenly", example: { jp: "De repente empieza la tormenta.", en: "Suddenly the storm begins." }, accept: ["all of a sudden", "out of nowhere"], hint: "The turn a story takes. De pronto means exactly the same." },
        { id: "es-u28l3-enseguida", type: "vocab", front: "enseguida", reading: "enseguida", meaning: "right away", example: { jp: "Enseguida termino el trabajo.", en: "I'll finish the work right away." }, accept: ["straight away", "at once", "immediately"], hint: "en + seguida, from seguir (u23): the next thing, at once. Also written en seguida." },
      ],
    },
    // Lesson 4: organising a story in time
    {
      id: "es-u28l4",
      unit: 28,
      lesson: 4,
      title: "Ordering events",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Frame time in a story — la época, el futuro, mientras tanto, a tiempo, en punto.",
      items: [
        { id: "es-u28l4-laepoca", type: "vocab", front: "la época", reading: "laepoca", meaning: "period", example: { jp: "En esta época del año hace calor.", en: "At this time of year it's hot." }, accept: ["the time (of year)", "era", "season"], hint: "A period or a time of year — not a clock time. La época de exámenes, exam season." },
        { id: "es-u28l4-elfuturo", type: "vocab", front: "el futuro", reading: "elfuturo", meaning: "future", example: { jp: "En el futuro quiero vivir en España.", en: "In the future I want to live in Spain." }, accept: ["the future"], hint: "One of a set: el pasado, el presente, el futuro. En el futuro — in the future." },
        { id: "es-u28l4-mientrastanto", type: "vocab", front: "mientras tanto", reading: "mientrastanto", meaning: "meanwhile", example: { jp: "Tú cocinas; mientras tanto, yo pongo la mesa.", en: "You cook; meanwhile, I set the table." }, accept: ["in the meantime"], hint: "Extends mientras (u21, while) into \"in the meantime\" — the gap between two actions." },
        { id: "es-u28l4-atiempo", type: "vocab", front: "a tiempo", reading: "atiempo", meaning: "on time", example: { jp: "Llego a tiempo al trabajo.", en: "I arrive at work on time." }, accept: ["in time", "punctually"], hint: "a tiempo = on time; a la vez = at the same time. Both build on el tiempo (A1)." },
        { id: "es-u28l4-denuevo", type: "vocab", front: "de nuevo", reading: "denuevo", meaning: "again", example: { jp: "Empiezo de nuevo.", en: "I'm starting again." }, accept: ["once more", "anew"], hint: "From nuevo (A1), new: to do it \"newly\". Otra vez (A1) is the everyday version." },
        { id: "es-u28l4-enpunto", type: "vocab", front: "en punto", reading: "enpunto", meaning: "on the dot", example: { jp: "Son las tres en punto.", en: "It's three o'clock on the dot." }, accept: ["sharp", "exactly (of time)"], hint: "Pins the A1 clock exactly: las tres en punto, three o'clock sharp. El punto is the dot itself." },
      ],
    },
  ],
};
