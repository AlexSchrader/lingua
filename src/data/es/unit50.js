// ES Unit 50 — Verbos y palabras finales ("Final verbs and words") — A2 COVERAGE (slot: coverage-a2-11)
// The last coverage unit closes the A2 frequency gap: a set of very common verbs
// (existir, resultar, servir), the "become" verbs Spanish splits three ways
// (volverse / ponerse / convertirse), a few precise adjectives, and the planning
// nouns (nivel, plan, proyecto, meta). Conventions and BLOCK-3 SCOPE: see
// es/unit40.js. FREE: María, Pablo, Madrid.
export const ES_UNIT50 = {
  id: "es-u50",
  lang: "es",
  title: "Verbos y palabras finales",
  order: 50,
  stage: "a2",
  lessons: [
    {
      id: "es-u50l1",
      unit: 50,
      lesson: 1,
      title: "Existir, servir, importar",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use high-frequency verbs: no existe, resultó caro, esto no sirve, ¿cuánto vale?, no me importa.",
      items: [
        { id: "es-u50l1-existir", type: "vocab", front: "existir", reading: "existir", meaning: "to exist", example: { jp: "No existe una solución fácil.", en: "There's no easy solution (lit. none exists)." }, accept: ["to be", "to be real"], hint: "Regular -ir. No existe = there's no such thing. A step up from hay (u7) in register." },
        { id: "es-u50l1-resultar", type: "vocab", front: "resultar", reading: "resultar", meaning: "to turn out", example: { jp: "El viaje resultó muy caro.", en: "The trip turned out very expensive." }, accept: ["to prove to be", "to end up"], hint: "How something ends up being. The noun is el resultado (u45). Resulta que… = it turns out that…" },
        { id: "es-u50l1-tratar", type: "vocab", front: "tratar", reading: "tratar", meaning: "to be about / to try", example: { jp: "El libro trata de la vida en Madrid.", en: "The book is about life in Madrid." }, accept: ["to deal with", "to treat", "to try"], hint: "Two key uses: tratar de + a noun = to be about; tratar de + a plain verb = to try to (like intentar, u40)." },
        { id: "es-u50l1-servir", type: "vocab", front: "servir", reading: "servir", meaning: "to be useful / to serve", example: { jp: "Esto no sirve para nada.", en: "This is no use at all." }, accept: ["to work", "to be good for", "to serve"], hint: "sirvo, sirves, sirve (e→i). ¿Para qué sirve? = what's it for? Also to serve food/people." },
        { id: "es-u50l1-valer", type: "vocab", front: "valer", reading: "valer", meaning: "to be worth / to cost", example: { jp: "¿Cuánto vale esto?", en: "How much is this worth?" }, accept: ["to be worth", "to cost"], hint: "valgo, vales, vale. In Spain ¡vale! on its own = OK! Vale la pena = it's worth it." },
        { id: "es-u50l1-importar", type: "vocab", front: "importar", reading: "importar", meaning: "to matter", example: { jp: "No me importa el precio.", en: "I don't care about the price." }, accept: ["to care about", "to mind", "to be important"], hint: "Works like gustar: no me importa = I don't mind / it doesn't matter to me. ¿Te importa? = do you mind?" },
      ],
    },
    {
      id: "es-u50l2",
      unit: 50,
      lesson: 2,
      title: "Volverse, ponerse, mejorar",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about becoming and changing: se volvió difícil, se puso enfermo, mantener la casa, va a mejorar.",
      items: [
        { id: "es-u50l2-volverse", type: "vocab", front: "volverse", reading: "volverse", meaning: "to become (a lasting change)", example: { jp: "Todo se volvió más difícil.", en: "Everything became more difficult." }, accept: ["to turn", "to get"], hint: "One of three \"become\" verbs. Volverse is a big, lasting change: se volvió serio. Built on volver (u19)." },
        { id: "es-u50l2-ponerse", type: "vocab", front: "ponerse", reading: "ponerse", meaning: "to become / get (a mood or state)", example: { jp: "Se puso enfermo.", en: "He got sick." }, accept: ["to get", "to turn"], hint: "Ponerse = a passing change of mood or state: se puso contento, me pongo nervioso. Also \"to put on\" clothes: me pongo la chaqueta." },
        { id: "es-u50l2-convertirse", type: "vocab", front: "convertirse", reading: "convertirse", meaning: "to turn into", example: { jp: "La ciudad se convirtió en un lugar caro.", en: "The city turned into an expensive place." }, accept: ["to become", "to change into"], hint: "convertirse EN + a noun = to turn into something. The most dramatic \"become\": one thing becomes another." },
        { id: "es-u50l2-mantener", type: "vocab", front: "mantener", reading: "mantener", meaning: "to keep / maintain", example: { jp: "Es difícil mantener la casa limpia.", en: "It's hard to keep the house clean." }, accept: ["to maintain", "to support", "to hold"], hint: "mantengo, mantienes (built on tener, u13). Keep something in a state, or support a family financially." },
        { id: "es-u50l2-mejorar", type: "vocab", front: "mejorar", reading: "mejorar", meaning: "to improve / get better", example: { jp: "El tiempo va a mejorar mañana.", en: "The weather is going to improve tomorrow." }, accept: ["to get better", "to make better"], hint: "From mejor (u37). ¡Que te mejores! = get well soon!" },
        { id: "es-u50l2-empeorar", type: "vocab", front: "empeorar", reading: "empeorar", meaning: "to get worse", example: { jp: "La situación va a empeorar.", en: "The situation is going to get worse." }, accept: ["to worsen", "to make worse"], hint: "From peor (u37), the mirror of mejorar. Las cosas empeoran = things are getting worse." },
      ],
    },
    {
      id: "es-u50l3",
      unit: 50,
      lesson: 3,
      title: "Justo, correcto, distinto",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Be precise: no es justo, la respuesta correcta, la hora exacta, un problema distinto, coches parecidos.",
      items: [
        { id: "es-u50l3-justo", type: "vocab", front: "justo", reading: "justo", meaning: "fair / just / exactly", example: { jp: "No es justo.", en: "It's not fair." }, accept: ["fair", "just", "right", "exactly"], hint: "Fair/just as an adjective; as an adverb, \"exactly/right\": justo a tiempo = just in time, justo aquí = right here." },
        { id: "es-u50l3-correcto", type: "vocab", front: "correcto", reading: "correcto", meaning: "correct", example: { jp: "La respuesta es correcta.", en: "The answer is correct." }, accept: ["right", "proper"], hint: "The opposite is incorrecto or falso (u42). ¡Correcto! = Correct!" },
        { id: "es-u50l3-exacto", type: "vocab", front: "exacto", reading: "exacto", meaning: "exact", example: { jp: "Es la hora exacta.", en: "It's the exact time." }, accept: ["precise", "right"], hint: "The adverb is exactamente (u48). On its own, ¡Exacto! = Exactly! (agreeing)." },
        { id: "es-u50l3-distinto", type: "vocab", front: "distinto", reading: "distinto", meaning: "different", example: { jp: "Es un problema distinto.", en: "It's a different problem." }, accept: ["different", "distinct", "various"], hint: "A close friend of diferente. Distinto de / a = different from." },
        { id: "es-u50l3-parecido", type: "vocab", front: "parecido", reading: "parecido", meaning: "similar / alike", example: { jp: "Los dos coches son parecidos.", en: "The two cars are similar." }, accept: ["similar", "alike", "like"], hint: "From parecer (u36). Parecido a = similar to. The opposite of distinto." },
        { id: "es-u50l3-adecuado", type: "vocab", front: "adecuado", reading: "adecuado", meaning: "suitable / appropriate", example: { jp: "No es la respuesta adecuada.", en: "It's not the right answer." }, accept: ["appropriate", "right", "fitting"], hint: "The right one for the situation: el lugar adecuado, la ropa adecuada." },
      ],
    },
    {
      id: "es-u50l4",
      unit: 50,
      lesson: 4,
      title: "El nivel, el plan, la meta",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about plans and progress: un buen nivel, en orden, paso a paso, el plan de hoy, mi meta.",
      items: [
        { id: "es-u50l4-elnivel", type: "vocab", front: "el nivel", reading: "elnivel", meaning: "the level", example: { jp: "Tengo un buen nivel de español.", en: "I have a good level of Spanish." }, accept: ["level", "standard"], hint: "A level or standard. El nivel del mar = sea level. Plural niveles." },
        { id: "es-u50l4-elorden", type: "vocab", front: "el orden", reading: "elorden", meaning: "the order (arrangement)", example: { jp: "Todo está en orden.", en: "Everything is in order." }, accept: ["order", "sequence", "tidiness"], hint: "Beware the gender: EL orden = arrangement/tidiness; LA orden = a command or a restaurant order. En orden = tidy / in order." },
        { id: "es-u50l4-elpaso", type: "vocab", front: "el paso", reading: "elpaso", meaning: "the step", example: { jp: "Vamos paso a paso.", en: "Let's go step by step." }, accept: ["step", "pace", "way through"], hint: "From pasar (u40). Paso a paso = step by step. Also a way through: paso de peatones = pedestrian crossing." },
        { id: "es-u50l4-elplan", type: "vocab", front: "el plan", reading: "elplan", meaning: "the plan", example: { jp: "¿Cuál es el plan para hoy?", en: "What's the plan for today?" }, accept: ["plan", "scheme"], hint: "¿Tienes planes? = do you have plans? Plural planes." },
        { id: "es-u50l4-elproyecto", type: "vocab", front: "el proyecto", reading: "elproyecto", meaning: "the project", example: { jp: "Es un proyecto importante.", en: "It's an important project." }, accept: ["project", "plan", "scheme"], hint: "A bigger, longer-term plan than un plan. Un proyecto de trabajo = a work project." },
        { id: "es-u50l4-lameta", type: "vocab", front: "la meta", reading: "lameta", meaning: "the goal", example: { jp: "Mi meta es hablar bien.", en: "My goal is to speak well." }, accept: ["goal", "aim", "finish line"], hint: "A goal to reach — a close friend of el objetivo (u45). Also the finish line in a race." },
      ],
    },
  ],
};
