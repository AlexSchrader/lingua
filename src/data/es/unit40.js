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
        { id: "es-u40l1-saber", type: "vocab", front: "saber", reading: "saber", meaning: "to know (a fact)", example: { jp: "No sé dónde está.", en: "I don't know where he is." }, drill: { jp: "Quiero saber el precio", en: "I want to know the price" }, accept: ["to know how to", "to know"], hint: "saber a fact or how to do something (sé nadar). conocer (next) is to know a person or place. The yo form is irregular: sé." },
        { id: "es-u40l1-conocer", type: "vocab", front: "conocer", reading: "conocer", meaning: "to know (a person)", example: { jp: "Conozco a tu hermano.", en: "I know your brother." }, drill: { jp: "Quiero conocer a tu hermana", en: "I want to meet your sister" }, accept: ["to meet", "to be familiar with"], hint: "To know a person or place — and to meet for the first time. Conozco Madrid. The yo form: conozco." },
        { id: "es-u40l1-laidea", type: "vocab", front: "la idea", reading: "laidea", meaning: "idea", example: { jp: "Tengo una buena idea.", en: "I have a good idea." }, drill: { jp: "La idea de mi jefe es buena", en: "My boss has a good idea" }, accept: ["the idea"], hint: "A straight cognate. ¡Buena idea! — good idea!" },
        { id: "es-u40l1-larazon", type: "vocab", front: "la razón", reading: "larazon", meaning: "reason", example: { jp: "Tienes razón.", en: "You're right." }, drill: { jp: "La razón del retraso es la lluvia", en: "The reason for the delay is the rain" }, accept: ["the reason", "right"], hint: "Tener razón = to be right (literally \"to have reason\"). Also the reason why: la razón por la que…" },
        { id: "es-u40l1-darsecuenta", type: "vocab", front: "darse cuenta", reading: "darsecuenta", meaning: "to realize", example: { jp: "Me doy cuenta de mi error.", en: "I realize my mistake." }, drill: { jp: "Darse cuenta del error es importante", en: "Realizing the mistake is important" }, accept: ["to notice", "to become aware"], hint: "darse cuenta DE something: me doy cuenta de que… Uses dar (A1) reflexively — the moment of noticing, not knowing (saber)." },
        { id: "es-u40l1-lamente", type: "vocab", front: "la mente", reading: "lamente", meaning: "mind", example: { jp: "Tengo la mente tranquila hoy.", en: "My mind is calm today." }, drill: { jp: "La mente humana es fantástica", en: "The human mind is fantastic" }, accept: ["the mind"], hint: "The mind as the seat of thought. Tener algo en mente — to have something in mind." },
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
        { id: "es-u40l2-pasar", type: "vocab", front: "pasar", reading: "pasar", meaning: "to happen", example: { jp: "¿Qué pasa aquí?", en: "What's happening here?" }, drill: { jp: "Algo puede pasar mañana", en: "Something can happen tomorrow" }, accept: ["to pass", "to spend (time)", "to go on"], hint: "One verb, many jobs: what happens (¿qué pasa?), to pass by, and to spend time — pasar el día." },
        { id: "es-u40l2-cambiar", type: "vocab", front: "cambiar", reading: "cambiar", meaning: "to change", example: { jp: "Quiero cambiar de trabajo.", en: "I want to change jobs." }, drill: { jp: "Quiero cambiar de trabajo", en: "I want to change jobs" }, accept: ["to swap", "to exchange"], hint: "cambiar de + noun = to change your (job, house…). El cambio (A1) is the change or coins." },
        { id: "es-u40l2-recordar", type: "vocab", front: "recordar", reading: "recordar", meaning: "to remember", example: { jp: "No recuerdo su nombre.", en: "I don't remember his name." }, drill: { jp: "Quiero recordar este día", en: "I want to remember this day" }, accept: ["to recall", "to remind"], hint: "The o becomes ue: recuerdo. Recuérdame = remind me." },
        { id: "es-u40l2-mostrar", type: "vocab", front: "mostrar", reading: "mostrar", meaning: "to show", example: { jp: "Te muestro las fotos.", en: "I'll show you the photos." }, drill: { jp: "Quiero mostrar la foto a mi madre", en: "I want to show the photo to my mother" }, accept: ["to display", "to point out"], hint: "o → ue again: muestro. Close to enseñar (A1), which also means to show." },
        { id: "es-u40l2-traer", type: "vocab", front: "traer", reading: "traer", meaning: "to bring", example: { jp: "¿Puedes traer el pan?", en: "Can you bring the bread?" }, drill: { jp: "Quiero traer el pan mañana", en: "I want to bring the bread tomorrow" }, accept: ["to bring along", "to carry"], hint: "The opposite of llevar (A1, to take): traer brings it here, llevar takes it there. Irregular yo: traigo." },
        { id: "es-u40l2-quedar", type: "vocab", front: "quedar", reading: "quedar", meaning: "to arrange to meet / to be left", example: { jp: "Quedamos el sábado por la tarde.", en: "We're meeting on Saturday afternoon." }, accept: ["to arrange to meet", "to meet up", "to be left"], hint: "Two everyday senses: quedar CON alguien = to arrange to meet, and quedar = to be left over (queda poco tiempo)." },
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
        { id: "es-u40l3-pronto", type: "vocab", front: "pronto", reading: "pronto", meaning: "soon", example: { jp: "Vuelvo pronto.", en: "I'll be back soon." }, drill: { jp: "El tren llega pronto", en: "The train arrives soon" }, accept: ["quickly", "early"], hint: "¡Hasta pronto! — see you soon! Lo más pronto posible — as soon as possible." },
        { id: "es-u40l3-quizas", type: "vocab", front: "quizás", reading: "quizas", meaning: "maybe", example: { jp: "Quizás llueve mañana.", en: "Maybe it'll rain tomorrow." }, drill: { jp: "Quizás llueve por la tarde", en: "Maybe it will rain in the afternoon" }, accept: ["perhaps", "possibly"], hint: "Also written quizá, no s. A guess about what might be." },
        { id: "es-u40l3-talvez", type: "vocab", front: "tal vez", reading: "talvez", meaning: "perhaps", example: { jp: "Tal vez viene más tarde.", en: "Perhaps he'll come later." }, drill: { jp: "Tal vez viene mañana", en: "Perhaps he's coming tomorrow" }, accept: ["maybe", "possibly"], hint: "The same idea as quizás — literally \"such a time\", i.e. maybe." },
        { id: "es-u40l3-devezencuando", type: "vocab", front: "de vez en cuando", reading: "devezencuando", meaning: "from time to time", example: { jp: "De vez en cuando voy al cine.", en: "From time to time I go to the cinema." }, drill: { jp: "Voy al cine de vez en cuando", en: "I go to the cinema from time to time" }, accept: ["now and then", "occasionally"], hint: "Built on la vez (A1), the occasion: literally \"from time to time\". A step rarer than a menudo (u28)." },
        { id: "es-u40l3-pocoapoco", type: "vocab", front: "poco a poco", reading: "pocoapoco", meaning: "little by little", example: { jp: "Aprendo español poco a poco.", en: "I'm learning Spanish little by little." }, drill: { jp: "Aprendo español poco a poco", en: "I'm learning Spanish little by little" }, accept: ["gradually", "bit by bit"], hint: "From poco (A1). The gentlest way to describe progress — and the honest one." },
        { id: "es-u40l3-casisiempre", type: "vocab", front: "casi siempre", reading: "casisiempre", meaning: "almost always", example: { jp: "Casi siempre desayuno en casa.", en: "I almost always have breakfast at home." }, drill: { jp: "Casi siempre desayuno en casa", en: "I almost always have breakfast at home" }, accept: ["nearly always", "usually"], hint: "casi (A1) + siempre (A1): almost always. Its mirror is casi nunca, almost never." },
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
        { id: "es-u40l4-cada", type: "vocab", front: "cada", reading: "cada", meaning: "each", example: { jp: "Cada día aprendo algo nuevo.", en: "Each day I learn something new." }, drill: { jp: "Cada día bebo un café", en: "Each day I drink a coffee" }, accept: ["every"], hint: "cada + a singular noun: cada día, each day; cada persona, each person. It never changes shape." },
        { id: "es-u40l4-alguien", type: "vocab", front: "alguien", reading: "alguien", meaning: "someone", example: { jp: "Alguien llama a la puerta.", en: "Someone's knocking at the door." }, drill: { jp: "Alguien está en la puerta", en: "Someone is at the door" }, accept: ["somebody", "anyone"], hint: "The person version of algo (A1, something). ¿Hay alguien? — is anyone there?" },
        { id: "es-u40l4-nadie", type: "vocab", front: "nadie", reading: "nadie", meaning: "nobody", example: { jp: "No hay nadie en casa.", en: "There's nobody at home." }, drill: { jp: "Nadie está en la oficina hoy", en: "Nobody is in the office today" }, accept: ["no one", "anybody"], hint: "The opposite of alguien, and the person version of nada (A1). No … nadie — the double negative is correct in Spanish." },
        { id: "es-u40l4-juntos", type: "vocab", front: "juntos", reading: "juntos", meaning: "together", example: { jp: "Vamos juntos al cine.", en: "We're going to the cinema together." }, drill: { jp: "Vamos juntos al mercado", en: "We're going to the market together" }, accept: ["together (plural)"], hint: "Agrees in gender: juntos (with men) / juntas (all women). Estamos juntos — we're together." },
        { id: "es-u40l4-claro", type: "vocab", front: "claro", reading: "claro", meaning: "of course", example: { jp: "¡Claro que sí!", en: "Of course!" }, drill: { jp: "Claro que voy a la fiesta", en: "Of course I'm going to the party" }, accept: ["clear", "sure", "obviously"], hint: "Literally \"clear\" — but ¡Claro! on its own is \"Of course!\". Also a clear sky: un cielo claro." },
        { id: "es-u40l4-cierto", type: "vocab", front: "cierto", reading: "cierto", meaning: "true", example: { jp: "Eso no es cierto.", en: "That's not true." }, drill: { jp: "Es cierto que hace frío", en: "It's true that it's cold" }, accept: ["certain", "sure", "right"], hint: "Es cierto = it's true. Also \"a certain…\": cierto día, one particular day." },
      ],
    },
    {
      id: "es-u40l5",
      unit: 40,
      lesson: 5,
      title: "Mayor, menor, grave",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Judge size, seriousness and privacy: say something is bigger or lesser, complete, serious, pure or private.",
      items: [
        { id: "es-u40l5-mayor", type: "vocab", front: "mayor", reading: "mayor", meaning: "greater / older", example: { jp: "Mi hermana mayor vive en Madrid.", en: "My older sister lives in Madrid." }, accept: ["greater", "bigger", "older", "elder"], hint: "The comparative of grande, and the normal word for an older sibling. La mayoría (u32) comes from it." },
        { id: "es-u40l5-menor", type: "vocab", front: "menor", reading: "menor", meaning: "lesser / younger", example: { jp: "El problema es menor de lo que parecía.", en: "The problem is smaller than it seemed." }, accept: ["lesser", "smaller", "younger", "minor"], hint: "The mirror of mayor. Un menor is also a minor in the legal sense." },
        { id: "es-u40l5-completo", type: "vocab", front: "completo", reading: "completo", meaning: "complete / full", example: { jp: "El informe todavía no está completo.", en: "The report isn't complete yet." }, accept: ["complete", "full", "whole"], hint: "Nothing missing — where entero (u43) means not divided. Por completo = completely." },
        { id: "es-u40l5-grave", type: "vocab", front: "grave", reading: "grave", meaning: "serious / grave", example: { jp: "Es un error grave, no una tontería.", en: "It's a serious mistake, not a silly one." }, accept: ["serious", "grave", "severe"], hint: "Of illnesses, mistakes and situations. Serio (u31) describes a person's manner; grave measures how bad something is." },
        { id: "es-u40l5-puro", type: "vocab", front: "puro", reading: "puro", meaning: "pure / sheer", example: { jp: "Fue pura suerte que llegara a tiempo.", en: "It was pure luck that he arrived on time." }, accept: ["pure", "sheer", "clean"], hint: "Before the noun it means sheer: pura suerte. After it, literally pure: agua pura." },
        { id: "es-u40l5-privado", type: "vocab", front: "privado", reading: "privado", meaning: "private", example: { jp: "Es un asunto privado, no quiere hablar.", en: "It's a private matter; he doesn't want to talk." }, accept: ["private", "personal"], hint: "Of matters and of the sector: la sanidad privada. En privado = in private." },
      ],
    },
    {
      id: "es-u40l6",
      unit: 40,
      lesson: 6,
      title: "Delante, encima, tercero",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Place things in space and in order: in front, on top, facing something — and say first, second, third, daily or initial.",
      items: [
        { id: "es-u40l6-delante", type: "vocab", front: "delante", reading: "delante", meaning: "in front", example: { jp: "El coche está delante de la casa.", en: "The car is in front of the house." }, accept: ["in front", "ahead", "before"], hint: "delante DE algo. Its opposite is detrás; for time, use antes instead." },
        { id: "es-u40l6-encima", type: "vocab", front: "encima", reading: "encima", meaning: "on top / above", example: { jp: "Puso el libro encima de la mesa.", en: "He put the book on top of the table." }, accept: ["on top", "above", "over"], hint: "encima DE algo. Also 'on top of that' when you pile on a complaint: y encima llegó tarde." },
        { id: "es-u40l6-frentea", type: "vocab", front: "frente a", reading: "frentea", meaning: "facing / as opposed to", example: { jp: "El museo está frente a la estación.", en: "The museum is opposite the station." }, accept: ["facing", "opposite", "as opposed to"], hint: "Taught as the phrase, because bare frente splits three ways: la frente is a forehead, el frente is a front line." },
        { id: "es-u40l6-segundo", type: "vocab", front: "segundo", reading: "segundo", meaning: "second", example: { jp: "Vive en el segundo piso.", en: "He lives on the second floor." }, accept: ["second", "2nd"], hint: "Follows primero (u21). Un segundo is also a second of time." },
        { id: "es-u40l6-tercero", type: "vocab", front: "tercero", reading: "tercero", meaning: "third", example: { jp: "Es la tercera vez que lo intento.", en: "It's the third time I've tried it." }, accept: ["third", "3rd"], hint: "Drops its o before a masculine noun: el tercer piso, like primero → primer." },
        { id: "es-u40l6-diario", type: "vocab", front: "diario", reading: "diario", meaning: "daily", example: { jp: "Escribe un informe diario.", en: "He writes a daily report." }, accept: ["daily", "everyday", "the newspaper"], hint: "As a noun it is a newspaper or a diary. Cotidiano (u75) is the same idea one register up." },
        { id: "es-u40l6-inicial", type: "vocab", front: "inicial", reading: "inicial", meaning: "initial", example: { jp: "La idea inicial era mucho más simple.", en: "The initial idea was much simpler." }, accept: ["initial", "first", "opening"], hint: "From el inicio. Inicialmente is the adverb." },
      ],
    },
  ],
};
