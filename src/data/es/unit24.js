// ES Unit 24 — Trabajo y estudios (slot: work-school) — A2
// ─────────────────────────────────────────────────────────────────────────────
// A1 already owns the PLACES and the bare nouns — el trabajo, el jefe, la
// oficina, la empresa, la reunión, el sueldo, la escuela, la clase, el profesor,
// el estudiante, el examen, la lección, la universidad, los deberes — and the
// verbs trabajar, estudiar, enseñar, aprender. A learner can name the classroom
// but cannot say what anyone DOES for a living, name a single school subject, or
// say whether they passed. So A2 goes there: the professions, the transactions
// of a working life (earning, an interview, a contract, a client), the subjects
// on a timetable, and the words for how it went — la nota, aprobar, suspender.
// Every A1 work/school noun is used in the examples and re-taught nowhere.
//   Professions after ser drop the article — "es ingeniero", not "es un
//   ingeniero" — the one place Spanish leaves it out; the hints say so.
// lang/unit/lesson are stamped in src/data/index.js.
export const ES_UNIT24 = {
  id: "es-u24",
  lang: "es",
  title: "Trabajo y estudios",
  order: 24,
  stage: "a2",
  lessons: [
    // Lesson 1: what people do for a living
    {
      id: "es-u24l1",
      unit: 24,
      lesson: 1,
      title: "Jobs and professions",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what people do for a living — es ingeniero, es abogada, trabaja de camarero — beyond the médico and profesor A1 gave you.",
      items: [
        { id: "es-u24l1-laprofesion", type: "vocab", front: "la profesión", reading: "laprofesion", meaning: "profession", example: { jp: "¿Cuál es tu profesión?", en: "What's your profession?" }, accept: ["the profession", "job", "occupation"], hint: "The question a form asks. In speech ¿a qué te dedicas? — \"what do you do?\" — is more common." },
        { id: "es-u24l1-elingeniero", type: "vocab", front: "el ingeniero", reading: "elingeniero", meaning: "engineer", example: { jp: "Mi hermano es ingeniero.", en: "My brother is an engineer." }, accept: ["the engineer"], hint: "After ser, no article: es ingeniero, not es un ingeniero. The feminine is la ingeniera." },
        { id: "es-u24l1-elabogado", type: "vocab", front: "el abogado", reading: "elabogado", meaning: "lawyer", example: { jp: "Mi tía es abogada en Madrid.", en: "My aunt is a lawyer in Madrid." }, accept: ["the lawyer", "attorney"], hint: "la abogada for a woman — the -o becomes -a for most professions." },
        { id: "es-u24l1-elenfermero", type: "vocab", front: "el enfermero", reading: "elenfermero", meaning: "nurse", example: { jp: "La enfermera trabaja en el hospital.", en: "The nurse works at the hospital." }, accept: ["the nurse"], hint: "Straight from enfermo, ill (A1): the enfermero is who looks after the enfermos." },
        { id: "es-u24l1-elcamarero", type: "vocab", front: "el camarero", reading: "elcamarero", meaning: "waiter", example: { jp: "El camarero trabaja mucho los sábados.", en: "The waiter works a lot on Saturdays." }, accept: ["the waiter", "waitress", "server"], hint: "Trabajar DE says the job: trabaja de camarero, works as a waiter. Latin America says mesero." },
        { id: "es-u24l1-eldependiente", type: "vocab", front: "el dependiente", reading: "eldependiente", meaning: "shop assistant", example: { jp: "El dependiente de la tienda trabaja mucho.", en: "The shop assistant works a lot." }, accept: ["the shop assistant", "salesperson", "clerk"], hint: "The one who serves you in a shop. La dependienta for a woman; el vendedor is the seller more broadly." },
      ],
    },
    // Lesson 2: the transactions of a working life
    {
      id: "es-u24l2",
      unit: 24,
      lesson: 2,
      title: "At work",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the working world beyond the office — ganar, una entrevista, un contrato, un cliente, un negocio.",
      items: [
        { id: "es-u24l2-ganar", type: "vocab", front: "ganar", reading: "ganar", meaning: "to earn", example: { jp: "Gano poco dinero en este trabajo.", en: "I earn little money in this job." }, accept: ["to win", "make (money)"], hint: "One verb for both earning and winning: ganar dinero, ganar un partido." },
        { id: "es-u24l2-laentrevista", type: "vocab", front: "la entrevista", reading: "laentrevista", meaning: "interview", example: { jp: "Tengo una entrevista de trabajo mañana.", en: "I have a job interview tomorrow." }, accept: ["the interview"], hint: "Both a job interview and a journalist's interview — same word." },
        { id: "es-u24l2-elcontrato", type: "vocab", front: "el contrato", reading: "elcontrato", meaning: "contract", example: { jp: "El contrato es de un año.", en: "The contract is for a year." }, accept: ["the contract"], hint: "From contratar, to hire. Un contrato fijo is a permanent one." },
        { id: "es-u24l2-elcliente", type: "vocab", front: "el cliente", reading: "elcliente", meaning: "client", example: { jp: "El cliente espera en la oficina.", en: "The client is waiting in the office." }, accept: ["the client", "customer"], hint: "In a shop it's the customer, in an office the client — Spanish uses cliente for both. Feminine la clienta." },
        { id: "es-u24l2-elnegocio", type: "vocab", front: "el negocio", reading: "elnegocio", meaning: "business", example: { jp: "Mi padre tiene un negocio pequeño.", en: "My father has a small business." }, accept: ["the business", "deal"], hint: "A single business or shop. Los negocios, plural, is business in general — un viaje de negocios." },
        { id: "es-u24l2-lafabrica", type: "vocab", front: "la fábrica", reading: "lafabrica", meaning: "factory", example: { jp: "Mi tío trabaja en una fábrica de coches.", en: "My uncle works in a car factory." }, accept: ["the factory", "plant"], hint: "A false friend: la fábrica is a factory, not fabric. Fabric is la tela." },
      ],
    },
    // Lesson 3: the subjects on a timetable
    {
      id: "es-u24l3",
      unit: 24,
      lesson: 3,
      title: "School subjects",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you study — la asignatura, las matemáticas, la historia, la ciencia, el idioma — not just that you have clase.",
      items: [
        { id: "es-u24l3-laasignatura", type: "vocab", front: "la asignatura", reading: "laasignatura", meaning: "subject", example: { jp: "Estudio muchas asignaturas este año.", en: "I study many subjects this year." }, accept: ["the subject", "course", "class"], hint: "A subject of study, not the topic of a conversation — that's el tema." },
        { id: "es-u24l3-lasmatematicas", type: "vocab", front: "las matemáticas", reading: "lasmatematicas", meaning: "maths", example: { jp: "Las matemáticas no son fáciles.", en: "Maths isn't easy." }, accept: ["mathematics", "math"], hint: "Always plural in Spanish, and often shortened to las mates in class." },
        { id: "es-u24l3-lahistoria", type: "vocab", front: "la historia", reading: "lahistoria", meaning: "history", example: { jp: "La historia de España es muy larga.", en: "Spain's history is very long." }, accept: ["the history", "story"], hint: "Also a story: me gusta la historia can mean \"I like the story\" — the sentence decides." },
        { id: "es-u24l3-laciencia", type: "vocab", front: "la ciencia", reading: "laciencia", meaning: "science", example: { jp: "La ciencia me gusta mucho.", en: "I like science a lot." }, accept: ["the science"], hint: "Las ciencias, plural, is the science side of a timetable, against las letras, the arts." },
        { id: "es-u24l3-elidioma", type: "vocab", front: "el idioma", reading: "elidioma", meaning: "language", example: { jp: "El español es un idioma bonito.", en: "Spanish is a beautiful language." }, accept: ["the language", "tongue"], hint: "Masculine despite the -a: EL idioma. La lengua means the same thing (and is also the tongue in your mouth)." },
        { id: "es-u24l3-elarte", type: "vocab", front: "el arte", reading: "elarte", meaning: "art", example: { jp: "Estudio arte en la universidad.", en: "I study art at university." }, accept: ["the art"], hint: "Odd one: el arte in the singular, but las artes in the plural." },
      ],
    },
    // Lesson 4: how it went
    {
      id: "es-u24l4",
      unit: 24,
      lesson: 4,
      title: "Marks and progress",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how the studying went — tener buenas notas, aprobar, suspender, un curso, una carrera.",
      items: [
        { id: "es-u24l4-lanota", type: "vocab", front: "la nota", reading: "lanota", meaning: "mark", example: { jp: "Tengo buenas notas este año.", en: "I have good marks this year." }, accept: ["the grade", "mark", "note"], hint: "A school mark, and also a short note you leave someone — te dejo una nota." },
        { id: "es-u24l4-aprobar", type: "vocab", front: "aprobar", reading: "aprobar", meaning: "to pass", example: { jp: "Quiero aprobar el examen de español.", en: "I want to pass the Spanish exam." }, accept: ["pass (an exam)", "approve"], hint: "Pass an exam. Its opposite is the next card, suspender." },
        { id: "es-u24l4-suspender", type: "vocab", front: "suspender", reading: "suspender", meaning: "to fail", example: { jp: "No quiero suspender la asignatura.", en: "I don't want to fail the subject." }, accept: ["fail (an exam)"], hint: "To fail an exam — the opposite of aprobar. Latin America says reprobar." },
        { id: "es-u24l4-elcurso", type: "vocab", front: "el curso", reading: "elcurso", meaning: "course", example: { jp: "Este curso empieza en septiembre.", en: "This course starts in September." }, accept: ["the course", "school year"], hint: "Both a course and the whole school year: el curso 2025." },
        { id: "es-u24l4-lacarrera", type: "vocab", front: "la carrera", reading: "lacarrera", meaning: "degree", example: { jp: "Estudio la carrera de historia.", en: "I'm studying a history degree." }, accept: ["the degree", "career", "race"], hint: "A university degree, a working career, and a running race — one word for all three." },
        { id: "es-u24l4-repasar", type: "vocab", front: "repasar", reading: "repasar", meaning: "to revise", example: { jp: "Repaso las notas antes del examen.", en: "I revise my notes before the exam." }, accept: ["review", "go over"], hint: "From pasar, to pass: to pass over the material again." },
      ],
    },
  ],
};
