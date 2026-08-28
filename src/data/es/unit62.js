// ES Unit 62 — Planes e intenciones (slot: plans-intentions) — B1
// ─────────────────────────────────────────────────────────────────────────────
// A2 gave the learner intention as ir a + infinitive, querer, el plan, el
// objetivo, decidir. B1 makes it precise: intending and setting out to do
// something, deciding between options, committing to it, and timing it. As
// everywhere in this block the examples route around the subjunctive with
// INFINITIVE frames (se propone estudiar, se compromete a pagar, está a punto de
// salir) — no "que + subjunctive". Every A2 intention word is used and re-taught
// nowhere.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT62 = {
  id: "es-u62",
  lang: "es",
  title: "Planes e intenciones",
  order: 62,
  stage: "b1",
  lessons: [
    {
      id: "es-u62l1",
      unit: 62,
      lesson: 1,
      title: "Intending",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you mean to do — pretender, proponerse, planear, aspirar, contar con, disponerse.",
      items: [
        { id: "es-u62l1-pretender", type: "vocab", front: "pretender", reading: "pretender", meaning: "to intend", example: { jp: "¿Qué pretendes hacer con todo ese dinero?", en: "What do you intend to do with all that money?" }, accept: ["to aim to", "to try to"], hint: "A false friend: pretender = to intend/aim, NOT \"to pretend\" (that's fingir). pretender + infinitive." },
        { id: "es-u62l1-proponerse", type: "vocab", front: "proponerse", reading: "proponerse", meaning: "to set out to", example: { jp: "Se propuso aprender español en un año.", en: "She set out to learn Spanish in a year." }, accept: ["to resolve to", "to aim"], hint: "proponerse + infinitive = to set yourself a goal. From poner (A2). Plantear (u58) proposes to others; proponerse, to yourself." },
        { id: "es-u62l1-planear", type: "vocab", front: "planear", reading: "planear", meaning: "to plan", example: { jp: "Planeamos ir a la playa el domingo.", en: "We're planning to go to the beach on Sunday." }, accept: ["to plan on"], hint: "From el plan (A2). Everyday planning; planificar (u56) is for whole projects. la playa is u26." },
        { id: "es-u62l1-aspirar", type: "vocab", front: "aspirar", reading: "aspirar", meaning: "to aspire", example: { jp: "Aspira a ser médico algún día.", en: "He aspires to be a doctor some day." }, accept: ["to aim for", "to hope for"], hint: "aspirar A algo/A + infinitive = to aim high for. Also to breathe in. algún día = some day." },
        { id: "es-u62l1-contarcon", type: "vocab", front: "contar con", reading: "contarcon", meaning: "to count on", example: { jp: "Cuento con tu ayuda para el proyecto.", en: "I'm counting on your help for the project." }, accept: ["to rely on", "to have"], hint: "contar (A2, to count/tell) + con: to rely on someone or something being there. Cuenta conmigo = count on me." },
        { id: "es-u62l1-disponerse", type: "vocab", front: "disponerse", reading: "disponerse", meaning: "to get ready to", example: { jp: "Se disponía a salir cuando empezó a llover.", en: "He was getting ready to leave when it started to rain." }, accept: ["to be about to", "to prepare to"], hint: "disponerse A + infinitive = to be on the point of doing. From poner. Near a punto de (l4)." },
      ],
    },
    {
      id: "es-u62l2",
      unit: 62,
      lesson: 2,
      title: "Deciding",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Weigh options and choose — decidirse, optar por, arrepentirse, atreverse, arriesgarse, vacilar.",
      items: [
        { id: "es-u62l2-decidirse", type: "vocab", front: "decidirse", reading: "decidirse", meaning: "to make up your mind", example: { jp: "Al final me decidí por el coche rojo.", en: "In the end I made up my mind on the red car." }, accept: ["to decide", "to settle on"], hint: "decidirse POR algo = to settle on. Decidir (A2) is to decide a thing; decidirse is to finally choose after hesitating." },
        { id: "es-u62l2-optarpor", type: "vocab", front: "optar por", reading: "optarpor", meaning: "to opt for", example: { jp: "Optamos por quedarnos en casa esa noche.", en: "We opted to stay home that night." }, accept: ["to choose", "to go for"], hint: "optar por + noun/infinitive = to choose. More formal than elegir (A2). From it comes la opción." },
        { id: "es-u62l2-arriesgarse", type: "vocab", front: "arriesgarse", reading: "arriesgarse", meaning: "to take a risk", example: { jp: "Prefiere no arriesgarse con su dinero.", en: "He prefers not to take risks with his money." }, accept: ["to risk it", "to chance it"], hint: "From el riesgo (A2). arriesgarse A + infinitive. Preferir (A2) is used here." },
        { id: "es-u62l2-vacilar", type: "vocab", front: "vacilar", reading: "vacilar", meaning: "to hesitate", example: { jp: "No vaciló ni un momento en ayudar.", en: "He didn't hesitate for a moment to help." }, accept: ["to waver", "to falter"], hint: "To pause out of doubt. Sin vacilar = without hesitation. In Spain it also means to tease someone." },
        { id: "es-u62l2-sopesar", type: "vocab", front: "sopesar", reading: "sopesar", meaning: "to weigh up", example: { jp: "Sopesó todo con calma antes de decidirse por el segundo plan.", en: "He weighed everything up calmly before deciding on the second plan." }, accept: ["to weigh up", "to consider carefully", "to weigh"], hint: "Literally to feel the weight of something. Sopesar los pros y los contras." },
        { id: "es-u62l2-laalternativa", type: "vocab", front: "la alternativa", reading: "laalternativa", meaning: "the alternative", example: { jp: "No nos queda otra alternativa que esperar.", en: "We have no alternative but to wait." }, accept: ["the alternative", "the option", "the choice"], hint: "No tener más alternativa que + infinitive = to have no choice but to." },
      ],
    },
    {
      id: "es-u62l3",
      unit: 62,
      lesson: 3,
      title: "Committing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Bind yourself to something — comprometerse, el compromiso, la promesa, prometer, dispuesto, renunciar.",
      items: [
        { id: "es-u62l3-comprometerse", type: "vocab", front: "comprometerse", reading: "comprometerse", meaning: "to commit", example: { jp: "Se comprometió a terminar el trabajo a tiempo.", en: "He committed to finishing the work on time." }, accept: ["to pledge", "to undertake"], hint: "comprometerse A + infinitive. A firm promise. Also to get engaged: comprometerse con alguien. a tiempo is u28." },
        { id: "es-u62l3-lapromesa", type: "vocab", front: "la promesa", reading: "lapromesa", meaning: "promise", example: { jp: "Cumplió su promesa de ayudar a la familia.", en: "He kept his promise to help the family." }, accept: ["the pledge"], hint: "cumplir una promesa = to keep a promise; romper una promesa = to break one. cumplir is u56." },
        { id: "es-u62l3-prometer", type: "vocab", front: "prometer", reading: "prometer", meaning: "to promise", example: { jp: "Te prometo que voy a cambiar.", en: "I promise you I'm going to change." }, accept: ["to pledge", "to vow"], hint: "prometer que + indicative (a plain future). This student also shows promise: promete mucho." },
        { id: "es-u62l3-renunciar", type: "vocab", front: "renunciar", reading: "renunciar", meaning: "to give up", example: { jp: "No pienso renunciar a mis ideales.", en: "I don't intend to give up my ideals." }, accept: ["to renounce", "to resign"], hint: "renunciar A algo = to give something up. Also to resign a job: renunciar al puesto. los ideales is u58." },
        { id: "es-u62l3-responsabilizarse", type: "vocab", front: "responsabilizarse", reading: "responsabilizarse", meaning: "to take responsibility", example: { jp: "Se responsabilizó del error delante de todo el equipo.", en: "He took responsibility for the mistake in front of the whole team." }, accept: ["to take responsibility", "to take charge", "to answer for"], hint: "responsabilizarse DE algo. Built on la responsabilidad." },
        { id: "es-u62l3-asumir", type: "vocab", front: "asumir", reading: "asumir", meaning: "to take on / accept", example: { jp: "Tuvo que asumir la responsabilidad de todo el equipo.", en: "He had to take on responsibility for the whole team." }, accept: ["to take on", "to assume", "to accept"], hint: "To take something onto yourself: asumir un riesgo, asumir la culpa, asumir un puesto." },
      ],
    },
    {
      id: "es-u62l4",
      unit: 62,
      lesson: 4,
      title: "Timing it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place an intention in time — a punto de, tener pensado, de momento, en breve, próximamente, cuanto antes.",
      items: [
        { id: "es-u62l4-apuntode", type: "vocab", front: "a punto de", reading: "apuntode", meaning: "about to", example: { jp: "Estaba a punto de salir cuando llamaste.", en: "I was about to leave when you called." }, accept: ["on the verge of"], hint: "estar a punto de + infinitive = to be about to. From el punto (A2)." },
        { id: "es-u62l4-tenerpensado", type: "vocab", front: "tener pensado", reading: "tenerpensado", meaning: "to be planning to", example: { jp: "Tengo pensado viajar a México este verano.", en: "I'm planning to travel to Mexico this summer." }, accept: ["to plan to", "to have in mind"], hint: "tener pensado + infinitive = to have it in mind to do. From pensar (u29). el verano is u22." },
        { id: "es-u62l4-demomento", type: "vocab", front: "de momento", reading: "demomento", meaning: "for now", example: { jp: "De momento no tengo pensado cambiar de trabajo.", en: "For now I'm not planning to change jobs." }, accept: ["for the moment", "so far"], hint: "From el momento. Near por ahora (A2). Marks something true only for now." },
        { id: "es-u62l4-enbreve", type: "vocab", front: "en breve", reading: "enbreve", meaning: "shortly", example: { jp: "El tren sale en breve; es mejor no llegar tarde.", en: "The train leaves shortly; better not to be late." }, accept: ["soon", "in a moment"], hint: "A slightly formal \"very soon\". breve = brief. date prisa = hurry up is common." },
        { id: "es-u62l4-proximamente", type: "vocab", front: "próximamente", reading: "proximamente", meaning: "coming soon", example: { jp: "Próximamente van a abrir una tienda nueva aquí.", en: "They're going to open a new shop here soon." }, accept: ["shortly", "in the near future"], hint: "From próximo (u28). The word on posters and trailers — próximamente en cines." },
        { id: "es-u62l4-cuantoantes", type: "vocab", front: "cuanto antes", reading: "cuantoantes", meaning: "as soon as possible", example: { jp: "Termina el trabajo cuanto antes, por favor.", en: "Finish the work as soon as possible, please." }, accept: ["asap", "right away"], hint: "cuanto + antes (u21): the sooner the better. Lo antes posible says the same thing." },
      ],
    },
  ],
};
