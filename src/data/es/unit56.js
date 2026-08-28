// ES Unit 56 — Trabajo y proceso (slot: work-process) — B1
// ─────────────────────────────────────────────────────────────────────────────
// A2 (u18, u24) gave the workplace as things — el trabajo, el jefe, la oficina,
// la empresa, el contrato, el sueldo, la reunión, el proyecto, el equipo. B1 adds
// how work actually RUNS: planning and managing a process, meeting deadlines,
// getting results, and the roles and career moves around it. This is the
// vocabulary of a real job, not just its furniture. Every A2 work word is used
// and re-taught nowhere; examples avoid the subjunctive (indicative + A2 conditional; subjunctive waits for u69-71).
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT56 = {
  id: "es-u56",
  lang: "es",
  title: "Trabajo y proceso",
  order: 56,
  stage: "b1",
  lessons: [
    {
      id: "es-u56l1",
      unit: 56,
      lesson: 1,
      title: "Organizing the work",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Plan and run a piece of work — planificar, gestionar, el proceso, la fase, el plazo, encargarse.",
      items: [
        { id: "es-u56l1-planificar", type: "vocab", front: "planificar", reading: "planificar", meaning: "to plan", example: { jp: "Hay que planificar bien el proyecto desde el principio.", en: "You have to plan the project well from the start." }, accept: ["to plan out"], hint: "From el plan (A2). More deliberate than just planear — planning a whole process." },
        { id: "es-u56l1-gestionar", type: "vocab", front: "gestionar", reading: "gestionar", meaning: "to manage", example: { jp: "Ella gestiona el equipo y también el dinero.", en: "She manages the team and the money too." }, accept: ["to handle", "to run"], hint: "To manage or handle — a team, a budget, a problem. La gestión is the noun." },
        { id: "es-u56l1-elproceso", type: "vocab", front: "el proceso", reading: "elproceso", meaning: "process", example: { jp: "El proceso es largo, pero el resultado es bueno.", en: "The process is long, but the result is good." }, accept: ["the procedure"], hint: "A series of steps toward a result. Un proceso lento = a slow process." },
        { id: "es-u56l1-lafase", type: "vocab", front: "la fase", reading: "lafase", meaning: "phase", example: { jp: "Estamos en la primera fase del trabajo.", en: "We're in the first phase of the work." }, accept: ["the stage"], hint: "One step of a process; near la etapa (A2) but more technical. La fase final = the final phase." },
        { id: "es-u56l1-elplazo", type: "vocab", front: "el plazo", reading: "elplazo", meaning: "deadline", example: { jp: "El plazo para entregar el trabajo es el viernes.", en: "The deadline to hand in the work is Friday." }, accept: ["the time limit", "term"], hint: "A time limit. A corto/largo plazo = in the short/long term. entregar (to hand in) is new but common in work." },
        { id: "es-u56l1-encargarse", type: "vocab", front: "encargarse", reading: "encargarse", meaning: "to take charge of", example: { jp: "Yo me encargo de la parte técnica del proyecto.", en: "I'll take care of the technical part of the project." }, accept: ["to be responsible for", "to see to"], hint: "encargarse DE algo. From el encargo, a task you're given. técnica is a clear cognate." },
      ],
    },
    {
      id: "es-u56l2",
      unit: 56,
      lesson: 2,
      title: "Getting results",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say the work got done and how well — cumplir, realizar, desarrollar, el desarrollo, el rendimiento, eficaz.",
      items: [
        { id: "es-u56l2-cumplir", type: "vocab", front: "cumplir", reading: "cumplir", meaning: "to fulfil", example: { jp: "La empresa cumple siempre con sus clientes.", en: "The company always keeps its word with its clients." }, accept: ["to meet", "to keep (a promise)"], hint: "cumplir con algo/alguien = to meet an obligation. Also to turn an age: cumplir años." },
        { id: "es-u56l2-realizar", type: "vocab", front: "realizar", reading: "realizar", meaning: "to carry out", example: { jp: "Realizamos el trabajo en solo dos días.", en: "We carried out the work in just two days." }, accept: ["to do", "to perform"], hint: "A false friend: realizar = to carry out/do, NOT \"to realize\" (that's darse cuenta, u40)." },
        { id: "es-u56l2-desarrollar", type: "vocab", front: "desarrollar", reading: "desarrollar", meaning: "to develop", example: { jp: "La empresa desarrolla productos nuevos cada año.", en: "The company develops new products every year." }, accept: ["to build", "to expand"], hint: "To develop an idea, a product, a skill. Desarrollar un tema = to develop a topic in detail." },
        { id: "es-u56l2-eldesarrollo", type: "vocab", front: "el desarrollo", reading: "eldesarrollo", meaning: "development", example: { jp: "El desarrollo del proyecto va muy bien.", en: "The project's development is going very well." }, accept: ["the growth"], hint: "The noun from desarrollar. Un país en desarrollo = a developing country." },
        { id: "es-u56l2-elrendimiento", type: "vocab", front: "el rendimiento", reading: "elrendimiento", meaning: "performance", example: { jp: "Su rendimiento en el trabajo es muy alto.", en: "His performance at work is very high." }, accept: ["the output", "yield"], hint: "How well someone or something performs. From rendir, to yield/produce." },
        { id: "es-u56l2-eficaz", type: "vocab", front: "eficaz", reading: "eficaz", meaning: "effective", example: { jp: "Es un método muy eficaz para ahorrar tiempo.", en: "It's a very effective method for saving time." }, accept: ["efficient", "effective"], hint: "Gets the result. eficaz = it works; eficiente = it works without waste. el método is a clear cognate." },
      ],
    },
    {
      id: "es-u56l3",
      unit: 56,
      lesson: 3,
      title: "Roles and career",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about jobs and moving up — el cargo, la responsabilidad, el colega, contratar, despedir, el ascenso.",
      items: [
        { id: "es-u56l3-elcargo", type: "vocab", front: "el cargo", reading: "elcargo", meaning: "post", example: { jp: "Tiene un cargo importante en la empresa.", en: "She has an important post at the company." }, accept: ["the position", "role", "charge"], hint: "A position of responsibility. Estar a cargo de = to be in charge of — near encargarse (l1)." },
        { id: "es-u56l3-laresponsabilidad", type: "vocab", front: "la responsabilidad", reading: "laresponsabilidad", meaning: "responsibility", example: { jp: "Tener un equipo es una gran responsabilidad.", en: "Having a team is a big responsibility." }, accept: ["the duty"], hint: "From responsable (A2). What you're answerable for." },
        { id: "es-u56l3-elcolega", type: "vocab", front: "el colega", reading: "elcolega", meaning: "colleague", example: { jp: "Mis colegas del trabajo son muy simpáticos.", en: "My colleagues at work are very nice." }, accept: ["the coworker", "workmate"], hint: "Same form for both genders: el/la colega. In Spain it's also slang for \"mate\". simpáticos from simpático (A2)." },
        { id: "es-u56l3-contratar", type: "vocab", front: "contratar", reading: "contratar", meaning: "to hire", example: { jp: "La empresa va a contratar a diez personas más.", en: "The company is going to hire ten more people." }, accept: ["to take on", "to employ"], hint: "From el contrato (A2). Contratar A alguien — the personal a with people." },
        { id: "es-u56l3-despedir", type: "vocab", front: "despedir", reading: "despedir", meaning: "to fire", example: { jp: "No es fácil despedir a un buen trabajador.", en: "It's not easy to fire a good worker." }, accept: ["to lay off", "to dismiss"], hint: "The opposite of contratar. Despedirse (with -se) is to say goodbye — the same root as la despedida." },
        { id: "es-u56l3-elascenso", type: "vocab", front: "el ascenso", reading: "elascenso", meaning: "promotion", example: { jp: "Después de años de trabajo, por fin tuvo un ascenso.", en: "After years of work, he finally got a promotion." }, accept: ["the rise", "advancement"], hint: "A move up at work. From ascender, to rise. Its opposite is un descenso." },
      ],
    },
    {
      id: "es-u56l4",
      unit: 56,
      lesson: 4,
      title: "The working day",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe conditions and challenges — la jornada, el salario, el ambiente, el reto, el turno, la baja.",
      items: [
        { id: "es-u56l4-lajornada", type: "vocab", front: "la jornada", reading: "lajornada", meaning: "working day", example: { jp: "Mi jornada empieza a las nueve y acaba a las cinco.", en: "My working day starts at nine and ends at five." }, accept: ["the workday", "shift"], hint: "The length of a working day. Jornada completa / media jornada = full-time / part-time." },
        { id: "es-u56l4-elsalario", type: "vocab", front: "el salario", reading: "elsalario", meaning: "salary", example: { jp: "El salario no es alto, pero el trabajo es agradable.", en: "The salary isn't high, but the work is pleasant." }, accept: ["the wage", "pay"], hint: "Near el sueldo (A1); el salario is a touch more formal/legal. agradable from agradar." },
        { id: "es-u56l4-elambiente", type: "vocab", front: "el ambiente", reading: "elambiente", meaning: "atmosphere", example: { jp: "Hay muy buen ambiente en mi oficina.", en: "There's a really good atmosphere in my office." }, accept: ["the environment", "mood"], hint: "The feel of a place — buen/mal ambiente. Also the environment: el medio ambiente (u26)." },
        { id: "es-u56l4-elreto", type: "vocab", front: "el reto", reading: "elreto", meaning: "challenge", example: { jp: "El nuevo puesto es un reto muy grande.", en: "The new position is a big challenge." }, accept: ["the challenge"], hint: "A challenge you take on willingly. el puesto (post/job) is new but common. Near el desafío." },
        { id: "es-u56l4-elturno", type: "vocab", front: "el turno", reading: "elturno", meaning: "shift", example: { jp: "Esta semana trabajo en el turno de noche.", en: "This week I'm working the night shift." }, accept: ["the turn", "rotation"], hint: "A work shift — turno de mañana/noche. Also your turn: es mi turno." },
        { id: "es-u56l4-labaja", type: "vocab", front: "la baja", reading: "labaja", meaning: "sick leave", example: { jp: "Está de baja porque tiene la gripe.", en: "She's on sick leave because she has the flu." }, accept: ["the leave", "absence"], hint: "estar de baja = to be off sick. From bajo/bajar (A1). Dar de baja = to cancel a service." },
      ],
    },
  ],
};
