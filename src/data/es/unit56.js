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
        { id: "es-u56l1-planificar", type: "vocab", front: "planificar", reading: "planificar", meaning: "to plan", example: { jp: "Hay que planificar bien el proyecto desde el principio.", en: "You have to plan the project well from the start." }, drill: { jp: "Quiero planificar el viaje", en: "I want to plan the trip" }, accept: ["to plan out"], hint: "From el plan (A2). More deliberate than just planear — planning a whole process." },
        { id: "es-u56l1-gestionar", type: "vocab", front: "gestionar", reading: "gestionar", meaning: "to manage", example: { jp: "Ella gestiona el equipo y también el dinero.", en: "She manages the team and the money too." }, drill: { jp: "Quiero gestionar mi tiempo mejor", en: "I want to manage my time better" }, accept: ["to handle", "to run"], hint: "To manage or handle — a team, a budget, a problem. La gestión is the noun." },
        { id: "es-u56l1-elproceso", type: "vocab", front: "el proceso", reading: "elproceso", meaning: "process", example: { jp: "El proceso es largo, pero el resultado es bueno.", en: "The process is long, but the result is good." }, drill: { jp: "El proceso del cambio es lento", en: "The process of change is slow" }, accept: ["the procedure"], hint: "A series of steps toward a result. Un proceso lento = a slow process." },
        { id: "es-u56l1-lafase", type: "vocab", front: "la fase", reading: "lafase", meaning: "phase", example: { jp: "Estamos en la primera fase del trabajo.", en: "We're in the first phase of the work." }, drill: { jp: "La fase final del proyecto es dura", en: "The final phase of the project is hard" }, accept: ["the stage"], hint: "One step of a process; near la etapa (A2) but more technical. La fase final = the final phase." },
        { id: "es-u56l1-elplazo", type: "vocab", front: "el plazo", reading: "elplazo", meaning: "deadline", example: { jp: "El plazo para entregar el trabajo es el viernes.", en: "The deadline to hand in the work is Friday." }, drill: { jp: "El plazo del proyecto es corto", en: "The project deadline is short" }, accept: ["the time limit", "term"], hint: "A time limit. A corto/largo plazo = in the short/long term. entregar (to hand in) is new but common in work." },
        { id: "es-u56l1-encargarse", type: "vocab", front: "encargarse", reading: "encargarse", meaning: "to take charge of", example: { jp: "Yo me encargo de la parte técnica del proyecto.", en: "I'll take care of the technical part of the project." }, drill: { jp: "Encargarse de todo es imposible", en: "Taking charge of everything is impossible" }, accept: ["to be responsible for", "to see to"], hint: "encargarse DE algo. From el encargo, a task you're given. técnica is a clear cognate." },
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
        { id: "es-u56l2-cumplir", type: "vocab", front: "cumplir", reading: "cumplir", meaning: "to fulfil", example: { jp: "La empresa cumple siempre con sus clientes.", en: "The company always keeps its word with its clients." }, drill: { jp: "Quiero cumplir con el plazo", en: "I want to meet the deadline" }, accept: ["to meet", "to keep (a promise)"], hint: "cumplir con algo/alguien = to meet an obligation. Also to turn an age: cumplir años." },
        { id: "es-u56l2-realizar", type: "vocab", front: "realizar", reading: "realizar", meaning: "to carry out", example: { jp: "Realizamos el trabajo en solo dos días.", en: "We carried out the work in just two days." }, drill: { jp: "Quiero realizar el proyecto este año", en: "I want to carry out the project this year" }, accept: ["to do", "to perform"], hint: "A false friend: realizar = to carry out/do, NOT \"to realize\" (that's darse cuenta, u40)." },
        { id: "es-u56l2-desarrollar", type: "vocab", front: "desarrollar", reading: "desarrollar", meaning: "to develop", example: { jp: "La empresa desarrolla productos nuevos cada año.", en: "The company develops new products every year." }, drill: { jp: "Quiero desarrollar una idea nueva", en: "I want to develop a new idea" }, accept: ["to build", "to expand"], hint: "To develop an idea, a product, a skill. Desarrollar un tema = to develop a topic in detail." },
        { id: "es-u56l2-eficaz", type: "vocab", front: "eficaz", reading: "eficaz", meaning: "effective", example: { jp: "Es un método muy eficaz para ahorrar tiempo.", en: "It's a very effective method for saving time." }, drill: { jp: "El plan del jefe es eficaz", en: "The boss's plan is effective" }, accept: ["efficient", "effective"], hint: "Gets the result. eficaz = it works; eficiente = it works without waste. el método is a clear cognate." },
        { id: "es-u56l2-eficiente", type: "vocab", front: "eficiente", reading: "eficiente", meaning: "efficient", example: { jp: "Es un equipo pequeño pero muy eficiente.", en: "It's a small team but a very efficient one." }, drill: { jp: "La máquina nueva es muy eficiente", en: "The new machine is very efficient" }, accept: ["efficient", "effective"], hint: "Careful with eficaz in this lesson: eficaz gets the result; eficiente gets it with less time and money." },
        { id: "es-u56l2-productivo", type: "vocab", front: "productivo", reading: "productivo", meaning: "productive", example: { jp: "La reunión fue corta pero muy productiva.", en: "The meeting was short but very productive." }, drill: { jp: "El lunes es un día productivo", en: "Monday is a productive day" }, accept: ["productive", "fruitful"], hint: "Of a day, a meeting or a person that actually produced something. La productividad is the noun." },
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
        { id: "es-u56l3-laresponsabilidad", type: "vocab", front: "la responsabilidad", reading: "laresponsabilidad", meaning: "responsibility", example: { jp: "Tener un equipo es una gran responsabilidad.", en: "Having a team is a big responsibility." }, drill: { jp: "La responsabilidad del jefe es enorme", en: "The boss's responsibility is enormous" }, accept: ["the duty"], hint: "From responsable (A2). What you're answerable for." },
        { id: "es-u56l3-elcolega", type: "vocab", front: "el colega", reading: "elcolega", meaning: "colleague", example: { jp: "Mis colegas del trabajo son muy simpáticos.", en: "My colleagues at work are very nice." }, drill: { jp: "El colega de la oficina es amable", en: "The colleague at the office is kind" }, accept: ["the coworker", "workmate"], hint: "Same form for both genders: el/la colega. In Spain it's also slang for \"mate\". simpáticos from simpático (A2)." },
        { id: "es-u56l3-contratar", type: "vocab", front: "contratar", reading: "contratar", meaning: "to hire", example: { jp: "La empresa va a contratar a diez personas más.", en: "The company is going to hire ten more people." }, drill: { jp: "La empresa va a contratar a dos", en: "The company is going to hire two people" }, accept: ["to take on", "to employ"], hint: "From el contrato (A2). Contratar A alguien — the personal a with people." },
        { id: "es-u56l3-laplantilla", type: "vocab", front: "la plantilla", reading: "laplantilla", meaning: "the staff / workforce", example: { jp: "La empresa ha aumentado la plantilla este año.", en: "The company has increased its workforce this year." }, drill: { jp: "La plantilla de la fábrica es joven", en: "The factory's workforce is young" }, accept: ["the staff", "the workforce", "the payroll"], hint: "Everyone on the books, as a group. It also means a template — context decides." },
        { id: "es-u56l3-laformacion", type: "vocab", front: "la formación", reading: "laformacion", meaning: "training / education", example: { jp: "La empresa da formación a todos los empleados nuevos.", en: "The company gives training to all new employees." }, drill: { jp: "La formación del personal es importante", en: "Staff training is important" }, accept: ["training", "education", "background"], hint: "On a CV it is your education; at work it is the training you are given." },
        { id: "es-u56l3-jubilarse", type: "vocab", front: "jubilarse", reading: "jubilarse", meaning: "to retire", example: { jp: "Mi tío se jubiló el año pasado después de mucho tiempo.", en: "My uncle retired last year after a long time." }, drill: { jp: "Jubilarse a los sesenta es difícil", en: "Retiring at sixty is difficult" }, accept: ["to retire"], hint: "Always reflexive: me jubilo, se jubila. La jubilación = retirement." },
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
        { id: "es-u56l4-lajornada", type: "vocab", front: "la jornada", reading: "lajornada", meaning: "working day", example: { jp: "Mi jornada empieza a las nueve y acaba a las cinco.", en: "My working day starts at nine and ends at five." }, drill: { jp: "La jornada de trabajo es larga", en: "The working day is long" }, accept: ["the workday", "shift"], hint: "The length of a working day. Jornada completa / media jornada = full-time / part-time." },
        { id: "es-u56l4-elambiente", type: "vocab", front: "el ambiente", reading: "elambiente", meaning: "atmosphere", example: { jp: "Hay muy buen ambiente en mi oficina.", en: "There's a really good atmosphere in my office." }, drill: { jp: "El ambiente de la oficina es bueno", en: "The atmosphere at the office is good" }, accept: ["the environment", "mood"], hint: "The feel of a place — buen/mal ambiente. Also the environment: el medio ambiente (u26)." },
        { id: "es-u56l4-elreto", type: "vocab", front: "el reto", reading: "elreto", meaning: "challenge", example: { jp: "El nuevo puesto es un reto muy grande.", en: "The new position is a big challenge." }, drill: { jp: "El reto del año es enorme", en: "The challenge of the year is enormous" }, accept: ["the challenge"], hint: "A challenge you take on willingly. el puesto (post/job) is new but common. Near el desafío." },
        { id: "es-u56l4-elturno", type: "vocab", front: "el turno", reading: "elturno", meaning: "shift", example: { jp: "Esta semana trabajo en el turno de noche.", en: "This week I'm working the night shift." }, drill: { jp: "El turno de noche es duro", en: "The night shift is hard" }, accept: ["the turn", "rotation"], hint: "A work shift — turno de mañana/noche. Also your turn: es mi turno." },
        { id: "es-u56l4-labaja", type: "vocab", front: "la baja", reading: "labaja", meaning: "sick leave", example: { jp: "Está de baja porque tiene la gripe.", en: "She's on sick leave because she has the flu." }, drill: { jp: "La baja de mi colega es larga", en: "My colleague's sick leave is long" }, accept: ["the leave", "absence"], hint: "estar de baja = to be off sick. From bajo/bajar (A1). Dar de baja = to cancel a service." },
        { id: "es-u56l4-lacargadetrabajo", type: "vocab", front: "la carga de trabajo", reading: "lacargadetrabajo", meaning: "the workload", example: { jp: "La carga de trabajo aumenta cada mes y nadie dice nada.", en: "The workload grows every month and nobody says anything." }, drill: { jp: "La carga de trabajo es enorme", en: "The workload is enormous" }, accept: ["the workload", "the amount of work"], hint: "La carga = the load. Often with repartir: repartir la carga de trabajo entre el equipo." },
      ],
    },
  ],
};
