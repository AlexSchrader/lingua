// ES Unit 5 — Numbers and time (slot: numbers-time) — A1
// ─────────────────────────────────────────────────────────────────────────────
// One to twelve, then the clock those twelve numbers unlock, then the parts of
// the day. Twelve is the right stopping point for A1's first pass: it is exactly
// what telling the time needs, and the teens break their own pattern (once, doce,
// then the regular dieci- series) — the rest of the count belongs to the coverage
// units. Conventions: see es/unit1.js.
// NOTE: `por` + a time of day ("por la mañana") is deliberately deferred to the
// grammar block, so this unit uses "de noche" and plain adverbs instead.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT5 = {
  id: "es-u5",
  lang: "es",
  title: "Numbers and time",
  order: 5,
  stage: "a1",
  lessons: [
    // Lesson 1: one to six
    {
      id: "es-u5l1",
      unit: 5,
      lesson: 1,
      title: "One to six",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count from one to six and say how many of something you have: tengo dos hermanos.",
      items: [
        { id: "es-u5l1-uno", type: "vocab", front: "uno", reading: "uno", meaning: "one", example: { jp: "Tengo uno.", en: "I have one." }, accept: ["1", "a single one"], hint: "This is the counting form. Put it in front of a noun and it shortens: un hermano, una hermana." },
        { id: "es-u5l1-dos", type: "vocab", front: "dos", reading: "dos", meaning: "two", example: { jp: "Tengo dos hermanos.", en: "I have two brothers." }, accept: ["2"], hint: "From dos onward the numbers never change for gender — only uno does." },
        { id: "es-u5l1-tres", type: "vocab", front: "tres", reading: "tres", meaning: "three", example: { jp: "Tengo tres gatos.", en: "I have three cats." }, accept: ["3"], hint: "One syllable, rolled a little at the start: TRES." },
        { id: "es-u5l1-cuatro", type: "vocab", front: "cuatro", reading: "cuatro", meaning: "four", example: { jp: "Tengo cuatro amigos en España.", en: "I have four friends in Spain." }, accept: ["4"], hint: "cu is a hard kw: KWA-tro." },
        { id: "es-u5l1-cinco", type: "vocab", front: "cinco", reading: "cinco", meaning: "five", example: { jp: "Mi abuela tiene cinco hijos.", en: "My grandmother has five children." }, accept: ["5"], hint: "Both c's in one word, doing different jobs: soft before i, hard before o — SIN-ko." },
        { id: "es-u5l1-seis", type: "vocab", front: "seis", reading: "seis", meaning: "six", example: { jp: "Tengo seis libros.", en: "I have six books." }, accept: ["6"], hint: "One syllable — SAYS, near enough to the English word \"says\"." },
      ],
    },
    // Lesson 2: seven to twelve
    {
      id: "es-u5l2",
      unit: 5,
      lesson: 2,
      title: "Seven to twelve",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Finish the first twelve — siete, ocho, nueve, diez, once, doce — which is everything the clock needs.",
      items: [
        { id: "es-u5l2-siete", type: "vocab", front: "siete", reading: "siete", meaning: "seven", example: { jp: "En mi casa hay siete sillas.", en: "There are seven chairs in my house." }, accept: ["7"], hint: "SYE-te. Do not confuse it with siempre — the family resemblance is a coincidence." },
        { id: "es-u5l2-ocho", type: "vocab", front: "ocho", reading: "ocho", meaning: "eight", example: { jp: "Mi tío tiene ocho hermanos.", en: "My uncle has eight brothers and sisters." }, accept: ["8"], hint: "O-cho, with the ch of \"church\"." },
        { id: "es-u5l2-nueve", type: "vocab", front: "nueve", reading: "nueve", meaning: "nine", example: { jp: "Hay nueve libros en la mesa.", en: "There are nine books on the table." }, accept: ["9"], hint: "NWE-ve — the ue glides, the same way it does in abuelo." },
        { id: "es-u5l2-diez", type: "vocab", front: "diez", reading: "diez", meaning: "ten", example: { jp: "Tengo diez amigos en México.", en: "I have ten friends in Mexico." }, accept: ["10"], hint: "That final z is the soft one: DYES in Latin America, DYETH in most of Spain." },
        { id: "es-u5l2-once", type: "vocab", front: "once", reading: "once", meaning: "eleven", example: { jp: "Hay once sillas en la casa.", en: "There are eleven chairs in the house." }, accept: ["11"], hint: "Not \"one-ce\" — ON-se. Eleven through fifteen each have their own word; from sixteen on they turn regular." },
        { id: "es-u5l2-doce", type: "vocab", front: "doce", reading: "doce", meaning: "twelve", example: { jp: "Hay doce personas en mi familia.", en: "There are twelve people in my family." }, accept: ["12"], hint: "DO-se. You can hear dos hiding inside it." },
      ],
    },
    // Lesson 3: telling the time
    {
      id: "es-u5l3",
      unit: 5,
      lesson: 3,
      title: "Telling the time",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask the time and answer it — son las tres, son las cuatro y media, son las ocho menos cuarto.",
      items: [
        { id: "es-u5l3-quehoraes", type: "vocab", front: "qué hora es", reading: "quehoraes", meaning: "what time is it", example: { jp: "—¿Qué hora es? —Son las tres.", en: "\"What time is it?\" \"It's three o'clock.\"" }, accept: ["what's the time", "what is the time", "the time?"], hint: "Literally \"what hour is it\" — hora, singular, even though the answer comes back plural." },
        { id: "es-u5l3-sonlas", type: "vocab", front: "son las", reading: "sonlas", meaning: "it is (o'clock)", example: { jp: "Son las diez.", en: "It's ten o'clock." }, accept: ["it's", "they are", "the time is"], hint: "Plural because the hours are plural — son las dos, son las diez. One o'clock is the exception: es la una." },
        { id: "es-u5l3-media", type: "vocab", front: "media", reading: "media", meaning: "half past", example: { jp: "Son las cuatro y media.", en: "It's half past four." }, accept: ["half", "thirty"], hint: "Literally \"and a half\". It is feminine because it agrees with the hidden word hora." },
        { id: "es-u5l3-cuarto", type: "vocab", front: "cuarto", reading: "cuarto", meaning: "quarter past", example: { jp: "Son las seis y cuarto.", en: "It's quarter past six." }, accept: ["quarter", "fifteen", "a quarter"], hint: "A quarter — and also the word for a room, which is a quarter of a house if you squint." },
        { id: "es-u5l3-menos", type: "vocab", front: "menos", reading: "menos", meaning: "minus", example: { jp: "Son las ocho menos cuarto.", en: "It's quarter to eight." }, accept: ["less", "to (the hour)", "fewer"], hint: "Spanish counts backwards from the next hour: las ocho menos cuarto is a quarter before eight." },
        { id: "es-u5l3-elminuto", type: "vocab", front: "el minuto", reading: "elminuto", meaning: "minute", example: { jp: "Un minuto, por favor.", en: "One minute, please." }, accept: ["the minute"], hint: "mee-NOO-to. Un momento does the same job and sounds friendlier." },
      ],
    },
    // Lesson 4: the parts of the day
    {
      id: "es-u5l4",
      unit: 5,
      lesson: 4,
      title: "Times of day",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Place things in the day — el día, la tarde, la noche — and anchor them with hoy, ahora and siempre.",
      items: [
        { id: "es-u5l4-eldia", type: "vocab", front: "el día", reading: "eldia", meaning: "day", example: { jp: "Hoy es un día fantástico.", en: "Today is a fantastic day." }, accept: ["the day", "daytime"], hint: "Ends in -a but it is masculine: el día, un día. A small stubborn group of words does this." },
        { id: "es-u5l4-latarde", type: "vocab", front: "la tarde", reading: "latarde", meaning: "afternoon", example: { jp: "Hoy la tarde es muy tranquila.", en: "The afternoon is very calm today." }, accept: ["the afternoon", "evening"], hint: "Runs from after the midday meal until dark — which is why buenas tardes covers so much of the English evening." },
        { id: "es-u5l4-lanoche", type: "vocab", front: "la noche", reading: "lanoche", meaning: "night", example: { jp: "De noche, la casa es tranquila.", en: "At night, the house is calm." }, accept: ["the night", "evening", "nighttime"], hint: "NO-che. De noche means \"at night\" as a general habit." },
        { id: "es-u5l4-hoy", type: "vocab", front: "hoy", reading: "hoy", meaning: "today", example: { jp: "Hoy trabajo en el museo.", en: "Today I'm working at the museum." }, accept: ["this day", "nowadays"], hint: "Silent h again, and it rhymes with \"boy\". Tomorrow is mañana; yesterday is ayer." },
        { id: "es-u5l4-ahora", type: "vocab", front: "ahora", reading: "ahora", meaning: "now", example: { jp: "Ahora son las diez.", en: "It's ten o'clock now." }, accept: ["right now", "at the moment", "currently"], hint: "The h is silent in the middle of a word too: a-O-ra. Ahora mismo means \"right this second\"." },
        { id: "es-u5l4-siempre", type: "vocab", front: "siempre", reading: "siempre", meaning: "always", example: { jp: "Ana siempre es elegante.", en: "Ana is always elegant." }, accept: ["all the time", "every time", "forever"], hint: "SYEM-pre. Its opposite is nunca, never." },
      ],
    },
  ],
};
