// ES Unit 9 — Days and months (slot: days-months) — A1
// Block 2. Conventions: see the header of src/data/es/unit7.js.
// DELIBERATE SHAPE: lesson 1 carries seven cards, not six — a week has seven days
// and splitting them across two lessons would leave a fragment. Seven is inside the
// 5-8 band the lint enforces, so the unit runs 7/6/6/6 = 25 cards.
// Days and months are lowercase in Spanish; that is not a typo.
// Days are taught WITH el, because el lunes is both "Monday" and "on Monday" —
// the article is where the meaning lives.
// DEFERRED to block 3 (Strand D coverage): ayer and the seasons. Ayer belongs
// next to unit 14's past tense, not here.
// TWO EXAMPLES LEAN ON BLOCK 1's numbers unit (slot 5): siete and doce. Both sit
// well inside any A1 numbers unit, and unit 5 comes before unit 9, so the
// vocab-order rule holds. Flagged in the hand-back.
// OWNERSHIP — LESSON 4, RESOLVED 2026-08-05. The risk flagged here was real:
// block 1 teaches el día and hoy in its slot-5 time unit, and el año in its
// slot-1 sounds unit. Lower slot wins, so all three were removed from this
// lesson and replaced with el fin de semana, el calendario and la fecha, which
// block 1 does not teach. Verified against content/es-a1-block1 at 567a4a3, not
// assumed. la semana, el mes and mañana were checked and are clear — block 1
// teaches la mañana (the morning), a different front from bare mañana.
// Examples here still use día / días / hoy freely: block 1 teaches them at units
// 1 and 5, both before this one, so the vocab-order rule is satisfied.
export const ES_UNIT9 = {
  id: "es-u9",
  lang: "es",
  title: "Los días y los meses",
  order: 9,
  stage: "a1",
  lessons: [
    {
      id: "es-u9l1",
      unit: 9,
      lesson: 1,
      title: "The days of the week",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say which day something happens on: el lunes, el martes, el miércoles, el jueves, el viernes, el sábado, el domingo.",
      items: [
        { id: "es-u9l1-lunes", type: "vocab", front: "el lunes", reading: "ellunes", meaning: "Monday", example: { jp: "El lunes hay mercado en la plaza.", en: "On Monday there's a market in the square." }, accept: ["monday", "on monday"], hint: "El lunes means both \"Monday\" and \"on Monday\" — the article does the work of the English \"on\". Named for la luna, the moon." },
        { id: "es-u9l1-martes", type: "vocab", front: "el martes", reading: "elmartes", meaning: "Tuesday", example: { jp: "El martes hay clase en la escuela.", en: "On Tuesday there's a class at the school." }, accept: ["tuesday", "on tuesday"], hint: "Mars's day — martes, like the planet Marte." },
        { id: "es-u9l1-miercoles", type: "vocab", front: "el miércoles", reading: "elmiercoles", meaning: "Wednesday", example: { jp: "El miércoles hay un tren a Madrid.", en: "On Wednesday there's a train to Madrid." }, accept: ["wednesday", "on wednesday"], hint: "Mercury's day. The accent marks the stress: mi-ÉR-co-les." },
        { id: "es-u9l1-jueves", type: "vocab", front: "el jueves", reading: "eljueves", meaning: "Thursday", example: { jp: "El jueves hay un concierto en el parque.", en: "On Thursday there's a concert in the park." }, accept: ["thursday", "on thursday"], hint: "Jupiter's day — and like lunes and martes it ends in -s already, singular or plural." },
        { id: "es-u9l1-viernes", type: "vocab", front: "el viernes", reading: "elviernes", meaning: "Friday", example: { jp: "El viernes hay fiesta en el pueblo.", en: "On Friday there's a party in the town." }, accept: ["friday", "on friday"], hint: "Venus's day — viernes, from Venus." },
        { id: "es-u9l1-sabado", type: "vocab", front: "el sábado", reading: "elsabado", meaning: "Saturday", example: { jp: "El sábado el mercado está en el centro.", en: "On Saturday the market is in the centre." }, accept: ["saturday", "on saturday"], hint: "From \"sabbath\" — the two weekend days are the ones that don't come from planets." },
        { id: "es-u9l1-domingo", type: "vocab", front: "el domingo", reading: "eldomingo", meaning: "Sunday", example: { jp: "El domingo no hay autobús.", en: "On Sunday there's no bus." }, accept: ["sunday", "on sunday"], hint: "From dominus, \"the Lord's day\". Note the Spanish week starts on lunes, so domingo comes last." },
      ],
    },
    {
      id: "es-u9l2",
      unit: 9,
      lesson: 2,
      title: "Months: January to June",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the first half of the year — enero, febrero, marzo, abril, mayo, junio — and say what the weather does in each.",
      items: [
        { id: "es-u9l2-enero", type: "vocab", front: "enero", reading: "enero", meaning: "January", example: { jp: "En enero hace frío en Madrid.", en: "In January it's cold in Madrid." }, accept: ["january", "in january"], hint: "Months take no article and no capital letter: en enero, not en Enero." },
        { id: "es-u9l2-febrero", type: "vocab", front: "febrero", reading: "febrero", meaning: "February", example: { jp: "En febrero llueve en Barcelona.", en: "In February it rains in Barcelona." }, accept: ["february", "in february"] },
        { id: "es-u9l2-marzo", type: "vocab", front: "marzo", reading: "marzo", meaning: "March", example: { jp: "En marzo hay viento.", en: "In March it's windy." }, accept: ["march", "in march"], hint: "Mars again — the same root as martes." },
        { id: "es-u9l2-abril", type: "vocab", front: "abril", reading: "abril", meaning: "April", example: { jp: "En abril hay lluvia en el pueblo.", en: "In April there's rain in the town." }, accept: ["april", "in april"] },
        { id: "es-u9l2-mayo", type: "vocab", front: "mayo", reading: "mayo", meaning: "May", example: { jp: "En mayo hace sol en Sevilla.", en: "In May it's sunny in Seville." }, accept: ["may", "in may"] },
        { id: "es-u9l2-junio", type: "vocab", front: "junio", reading: "junio", meaning: "June", example: { jp: "En junio hace calor en la ciudad.", en: "In June it's hot in the city." }, accept: ["june", "in june"], hint: "The j is a throaty h sound: HU-nio." },
      ],
    },
    {
      id: "es-u9l3",
      unit: 9,
      lesson: 3,
      title: "Months: July to December",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the second half of the year: julio, agosto, septiembre, octubre, noviembre, diciembre.",
      items: [
        { id: "es-u9l3-julio", type: "vocab", front: "julio", reading: "julio", meaning: "July", example: { jp: "El festival es en julio.", en: "The festival is in July." }, accept: ["july", "in july"], hint: "Julius Caesar's month, and a common first name too: Julio." },
        { id: "es-u9l3-agosto", type: "vocab", front: "agosto", reading: "agosto", meaning: "August", example: { jp: "En agosto la ciudad está tranquila.", en: "In August the city is quiet." }, accept: ["august", "in august"], hint: "The month Spain goes on holiday — cities empty out and the coast fills up." },
        { id: "es-u9l3-septiembre", type: "vocab", front: "septiembre", reading: "septiembre", meaning: "September", example: { jp: "En septiembre hay clase en la universidad.", en: "In September there's class at the university." }, accept: ["september", "in september"] },
        { id: "es-u9l3-octubre", type: "vocab", front: "octubre", reading: "octubre", meaning: "October", example: { jp: "En octubre el parque está amarillo.", en: "In October the park is yellow." }, accept: ["october", "in october"] },
        { id: "es-u9l3-noviembre", type: "vocab", front: "noviembre", reading: "noviembre", meaning: "November", example: { jp: "En noviembre hay viento y llueve.", en: "In November it's windy and it rains." }, accept: ["november", "in november"] },
        { id: "es-u9l3-diciembre", type: "vocab", front: "diciembre", reading: "diciembre", meaning: "December", example: { jp: "En diciembre hay nieve en el pueblo.", en: "In December there's snow in the town." }, accept: ["december", "in december"], hint: "The last four months are numbered from an older calendar: septiembre, octubre, noviembre, diciembre = 7, 8, 9, 10." },
      ],
    },
    {
      id: "es-u9l4",
      unit: 9,
      lesson: 4,
      title: "The calendar",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Place things on the calendar: la semana, el fin de semana, el mes, el calendario, la fecha — and say what happens mañana.",
      items: [
        { id: "es-u9l4-semana", type: "vocab", front: "la semana", reading: "lasemana", meaning: "week", example: { jp: "En una semana hay siete días.", en: "There are seven days in a week." }, accept: ["the week"], hint: "From septimana, \"seven\" — the number is hiding inside the word." },
        { id: "es-u9l4-findesemana", type: "vocab", front: "el fin de semana", reading: "elfindesemana", meaning: "weekend", example: { jp: "El fin de semana hay mercado en la plaza.", en: "At the weekend there's a market in the square." }, accept: ["the weekend", "week end"], hint: "Literally \"end of week\". The plural pluralises the front, not the back: los fines de semana." },
        { id: "es-u9l4-mes", type: "vocab", front: "el mes", reading: "elmes", meaning: "month", example: { jp: "Agosto es un mes de calor.", en: "August is a hot month." }, accept: ["the month"], hint: "Same root as \"menstrual\" and as English \"month\" — all of them measure la luna's cycle." },
        { id: "es-u9l4-calendario", type: "vocab", front: "el calendario", reading: "elcalendario", meaning: "calendar", example: { jp: "En el calendario hay doce meses.", en: "There are twelve months in the calendar." }, accept: ["the calendar"], hint: "Where every day and month name you've just learned lives." },
        { id: "es-u9l4-fecha", type: "vocab", front: "la fecha", reading: "lafecha", meaning: "date", example: { jp: "La fecha del concierto es el jueves.", en: "The date of the concert is Thursday." }, accept: ["the date", "calendar date"], hint: "The calendar date, never the fruit and never a romantic date — ¿Qué fecha es? asks what the date is." },
        { id: "es-u9l4-manana", type: "vocab", front: "mañana", reading: "manana", meaning: "tomorrow", example: { jp: "Mañana es martes.", en: "Tomorrow is Tuesday." }, accept: ["the next day"], hint: "Two jobs: on its own, mañana is tomorrow. With an article, la mañana is the morning — this card wants the bare word, so: tomorrow." },
      ],
    },
  ],
};
