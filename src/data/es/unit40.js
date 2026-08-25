// ES Unit 40 — Palabras esenciales · 1 (slot: coverage-a2-1) — A2
// The first coverage unit: not a new theme, but the high-frequency words A1 left
// out and the A2 thematic units kept needing. These are among the commonest words
// in Spanish — pensar, creer, saber, cada, alguien — and their absence is felt on
// every page. Coverage units are a mixed bag by design; they thicken the language
// toward its frequency target rather than name one domain. Blocks 2 and 3 (u40–50)
// carry the rest of the A2 coverage; this is the first slice.
// Examples use A1 vocab plus this block.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT40 = {
  id: "es-u40",
  lang: "es",
  title: "Palabras esenciales · 1",
  order: 40,
  stage: "a2",
  lessons: [
    {
      id: "es-u40l1",
      unit: 40,
      lesson: 1,
      title: "Thinking and knowing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you think and know — pensar, creer, saber, conocer, la idea, la razón.",
      items: [
        { id: "es-u40l1-pensar", type: "vocab", front: "pensar", reading: "pensar", meaning: "to think", example: { jp: "Pienso mucho en mi familia.", en: "I think about my family a lot." }, accept: ["to think about", "to plan"], hint: "pensar en = to think about. The e becomes ie in the present: pienso, piensas, piensa." },
        { id: "es-u40l1-creer", type: "vocab", front: "creer", reading: "creer", meaning: "to believe", example: { jp: "Creo que es una buena idea.", en: "I think it's a good idea." }, accept: ["to think", "to reckon"], hint: "Creo que… = I think that… — the everyday \"I think\". No creo = I don't think so." },
        { id: "es-u40l1-saber", type: "vocab", front: "saber", reading: "saber", meaning: "to know (a fact)", example: { jp: "No sé dónde está.", en: "I don't know where he is." }, accept: ["to know how to", "to know"], hint: "saber a fact or how to do something (sé nadar). conocer (next) is to know a person or place. The yo form is irregular: sé." },
        { id: "es-u40l1-conocer", type: "vocab", front: "conocer", reading: "conocer", meaning: "to know (a person)", example: { jp: "Conozco a tu hermano.", en: "I know your brother." }, accept: ["to meet", "to be familiar with"], hint: "To know a person or place — and to meet for the first time. Conozco Madrid. The yo form: conozco." },
        { id: "es-u40l1-laidea", type: "vocab", front: "la idea", reading: "laidea", meaning: "idea", example: { jp: "Tengo una buena idea.", en: "I have a good idea." }, accept: ["the idea"], hint: "A straight cognate. ¡Buena idea! — good idea!" },
        { id: "es-u40l1-larazon", type: "vocab", front: "la razón", reading: "larazon", meaning: "reason", example: { jp: "Tienes razón.", en: "You're right." }, accept: ["the reason", "right"], hint: "Tener razón = to be right (literally \"to have reason\"). Also the reason why: la razón por la que…" },
      ],
    },
    {
      id: "es-u40l2",
      unit: 40,
      lesson: 2,
      title: "Everyday verbs",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle common actions — pasar, cambiar, recordar, mostrar, traer, ganar.",
      items: [
        { id: "es-u40l2-pasar", type: "vocab", front: "pasar", reading: "pasar", meaning: "to happen", example: { jp: "¿Qué pasa aquí?", en: "What's happening here?" }, accept: ["to pass", "to spend (time)", "to go on"], hint: "One verb, many jobs: what happens (¿qué pasa?), to pass by, and to spend time — pasar el día." },
        { id: "es-u40l2-cambiar", type: "vocab", front: "cambiar", reading: "cambiar", meaning: "to change", example: { jp: "Quiero cambiar de trabajo.", en: "I want to change jobs." }, accept: ["to swap", "to exchange"], hint: "cambiar de + noun = to change your (job, house…). El cambio (A1) is the change or coins." },
        { id: "es-u40l2-recordar", type: "vocab", front: "recordar", reading: "recordar", meaning: "to remember", example: { jp: "No recuerdo su nombre.", en: "I don't remember his name." }, accept: ["to recall", "to remind"], hint: "The o becomes ue: recuerdo. Recuérdame = remind me." },
        { id: "es-u40l2-mostrar", type: "vocab", front: "mostrar", reading: "mostrar", meaning: "to show", example: { jp: "Te muestro las fotos.", en: "I'll show you the photos." }, accept: ["to display", "to point out"], hint: "o → ue again: muestro. Close to enseñar (A1), which also means to show." },
        { id: "es-u40l2-traer", type: "vocab", front: "traer", reading: "traer", meaning: "to bring", example: { jp: "¿Puedes traer el pan?", en: "Can you bring the bread?" }, accept: ["to bring along", "to carry"], hint: "The opposite of llevar (A1, to take): traer brings it here, llevar takes it there. Irregular yo: traigo." },
        { id: "es-u40l2-ganar", type: "vocab", front: "ganar", reading: "ganar", meaning: "to earn", example: { jp: "Quiero ganar más dinero.", en: "I want to earn more money." }, accept: ["to win", "to gain"], hint: "To earn money and to win a game — the same verb. Ganar dinero, ganar el partido." },
      ],
    },
    {
      id: "es-u40l3",
      unit: 40,
      lesson: 3,
      title: "When and how",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say when and how — temprano, pronto, despacio, quizás, tal vez, de repente.",
      items: [
        { id: "es-u40l3-temprano", type: "vocab", front: "temprano", reading: "temprano", meaning: "early", example: { jp: "Salgo de casa muy temprano.", en: "I leave home very early." }, accept: ["early on"], hint: "The opposite of tarde (A1). Temprano por la mañana — early in the morning." },
        { id: "es-u40l3-pronto", type: "vocab", front: "pronto", reading: "pronto", meaning: "soon", example: { jp: "Vuelvo pronto.", en: "I'll be back soon." }, accept: ["quickly", "early"], hint: "¡Hasta pronto! — see you soon! Lo más pronto posible — as soon as possible." },
        { id: "es-u40l3-despacio", type: "vocab", front: "despacio", reading: "despacio", meaning: "slowly", example: { jp: "Habla despacio, por favor.", en: "Speak slowly, please." }, accept: ["slow", "gently"], hint: "The opposite of rápido. Más despacio, por favor — slower, please." },
        { id: "es-u40l3-quizas", type: "vocab", front: "quizás", reading: "quizas", meaning: "maybe", example: { jp: "Quizás llueve mañana.", en: "Maybe it'll rain tomorrow." }, accept: ["perhaps", "possibly"], hint: "Also written quizá, no s. A guess about what might be." },
        { id: "es-u40l3-talvez", type: "vocab", front: "tal vez", reading: "talvez", meaning: "perhaps", example: { jp: "Tal vez viene más tarde.", en: "Perhaps he'll come later." }, accept: ["maybe", "possibly"], hint: "The same idea as quizás — literally \"such a time\", i.e. maybe." },
        { id: "es-u40l3-derepente", type: "vocab", front: "de repente", reading: "derepente", meaning: "suddenly", example: { jp: "De repente, todo cambia.", en: "Suddenly, everything changes." }, accept: ["all of a sudden", "out of nowhere"], hint: "A sudden change — de repente, with no warning." },
      ],
    },
    {
      id: "es-u40l4",
      unit: 40,
      lesson: 4,
      title: "Small words that do a lot",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the everyday grammar words — cada, alguien, nadie, juntos, claro, cierto.",
      items: [
        { id: "es-u40l4-cada", type: "vocab", front: "cada", reading: "cada", meaning: "each", example: { jp: "Cada día aprendo algo nuevo.", en: "Each day I learn something new." }, accept: ["every"], hint: "cada + a singular noun: cada día, each day; cada persona, each person. It never changes shape." },
        { id: "es-u40l4-alguien", type: "vocab", front: "alguien", reading: "alguien", meaning: "someone", example: { jp: "Alguien llama a la puerta.", en: "Someone's knocking at the door." }, accept: ["somebody", "anyone"], hint: "The person version of algo (A1, something). ¿Hay alguien? — is anyone there?" },
        { id: "es-u40l4-nadie", type: "vocab", front: "nadie", reading: "nadie", meaning: "nobody", example: { jp: "No hay nadie en casa.", en: "There's nobody at home." }, accept: ["no one", "anybody"], hint: "The opposite of alguien, and the person version of nada (A1). No … nadie — the double negative is correct in Spanish." },
        { id: "es-u40l4-juntos", type: "vocab", front: "juntos", reading: "juntos", meaning: "together", example: { jp: "Vamos juntos al cine.", en: "We're going to the cinema together." }, accept: ["together (plural)"], hint: "Agrees in gender: juntos (with men) / juntas (all women). Estamos juntos — we're together." },
        { id: "es-u40l4-claro", type: "vocab", front: "claro", reading: "claro", meaning: "of course", example: { jp: "¡Claro que sí!", en: "Of course!" }, accept: ["clear", "sure", "obviously"], hint: "Literally \"clear\" — but ¡Claro! on its own is \"Of course!\". Also a clear sky: un cielo claro." },
        { id: "es-u40l4-cierto", type: "vocab", front: "cierto", reading: "cierto", meaning: "true", example: { jp: "Eso no es cierto.", en: "That's not true." }, accept: ["certain", "sure", "right"], hint: "Es cierto = it's true. Also \"a certain…\": cierto día, one particular day." },
      ],
    },
  ],
};
