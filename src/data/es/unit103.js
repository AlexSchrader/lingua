// ES Unit 103 — El mundo universitario ("Education and research") — B2 (slot: education-research)
// THEME CONTRACT (block 2, u101–u113) — honoured as written: the ACADEMY. Degrees and
// enrolment (l1), teaching and curriculum (l2), research, review and funding (l3),
// academic honesty and merit (l4).
// School at A2 (u18) and the scientific method itself (u94) stay theirs; nothing here
// describes how an experiment is run.
// Rejected as already taught: el grado (u47), la tesis (u51), la asignatura (u24),
// la investigación (u64), la revisión (u67), el rendimiento (u84). Rejected as the same
// lexeme: el profesorado (~u18 el profesor), cursar (~u24 el curso), titularse (~u49 el
// título), el aprendizaje (~u13 aprender), graduarse (~u47 el grado), la excelencia
// (~u81 excelente — dropped in the hand lexeme sweep and replaced by el mérito).
export const ES_UNIT103 = {
  id: "es-u103",
  lang: "es",
  title: "El mundo universitario",
  order: 103,
  stage: "b2",
  lessons: [
    {
      id: "es-u103l1",
      unit: 103,
      lesson: 1,
      title: "Títulos y matrícula",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what you studied and at what level: first degree, master's, doctorate, enrolment and your academic record.",
      items: [
        { id: "es-u103l1-licenciatura", type: "vocab", front: "la licenciatura", reading: "lalicenciatura", meaning: "first degree (undergraduate)", example: { jp: "Terminó la licenciatura en cuatro años.", en: "She finished her first degree in four years." }, accept: ["degree", "first degree", "bachelor's degree", "undergraduate degree"], hint: "The older Spanish name for the first university qualification; el grado (u47) is the newer one. La carrera (u24) is the course of study itself." },
        { id: "es-u103l1-master", type: "vocab", front: "el máster", reading: "elmaster", meaning: "master's degree", example: { jp: "El máster dura un año y cuesta mucho dinero.", en: "The master's lasts a year and costs a lot of money." }, accept: ["master's", "masters", "master's degree", "postgraduate degree"], hint: "Borrowed straight from English and given an accent, because Spanish stress would otherwise fall on the last syllable." },
        { id: "es-u103l1-doctorado", type: "vocab", front: "el doctorado", reading: "eldoctorado", meaning: "doctorate / PhD", example: { jp: "Durante el doctorado escribió tres libros.", en: "During the doctorate he wrote three books." }, accept: ["doctorate", "phd", "doctoral degree"], hint: "The qualification; the person who holds it is un doctor. Hacer el doctorado is the normal way to say you are doing a PhD." },
        { id: "es-u103l1-matricula", type: "vocab", front: "la matrícula", reading: "lamatricula", meaning: "enrolment / tuition fee", example: { jp: "La matrícula de la universidad subió otra vez.", en: "University enrolment fees went up again." }, accept: ["enrolment", "enrollment", "registration", "tuition fee", "tuition"], hint: "Both the act of signing up and what it costs. Matrícula de honor is also the top mark you can get in a subject." },
        { id: "es-u103l1-expediente", type: "vocab", front: "el expediente", reading: "elexpediente", meaning: "academic record / file", example: { jp: "Su expediente es muy bueno, con notas altas.", en: "Her record is very good, with high marks." }, accept: ["record", "academic record", "transcript", "file"], hint: "The file of everything you did, and the number that follows you to every application. Outside the university it is any official case file." },
        { id: "es-u103l1-facultad", type: "vocab", front: "la facultad", reading: "lafacultad", meaning: "faculty (school within a university)", example: { jp: "La facultad de ciencias está lejos del centro.", en: "The science faculty is far from the centre." }, accept: ["faculty", "school", "department", "college"], hint: "The building and the division at once: la facultad de derecho, de medicina. It also means a mental capacity — sus facultades." },
      ],
    },
    {
      id: "es-u103l2",
      unit: 103,
      lesson: 2,
      title: "Docencia y temario",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about teaching as a profession: who teaches, who is taught, what is on the syllabus and how it is taught.",
      items: [
        { id: "es-u103l2-docencia", type: "vocab", front: "la docencia", reading: "ladocencia", meaning: "teaching (as an activity/duty)", example: { jp: "La docencia y la ciencia no son lo mismo.", en: "Teaching and science are not the same thing." }, accept: ["teaching", "instruction", "teaching work"], hint: "The half of an academic's job that is not research. Enseñar (u18) is the act; la docencia is the role." },
        { id: "es-u103l2-alumnado", type: "vocab", front: "el alumnado", reading: "elalumnado", meaning: "the student body", example: { jp: "El alumnado de esta facultad cambió mucho.", en: "This faculty's student body has changed a lot." }, accept: ["student body", "the students", "pupils", "student population"], hint: "A collective singular: el alumnado es, never son. Spanish builds several of these in -ado for a whole group." },
        { id: "es-u103l2-temario", type: "vocab", front: "el temario", reading: "eltemario", meaning: "syllabus", example: { jp: "El temario del curso incluye diez libros.", en: "The course syllabus includes ten books." }, accept: ["syllabus", "curriculum", "course content", "programme"], hint: "The list of topics a course must cover, from el tema. El plan de estudios is the bigger thing: the whole degree." },
        { id: "es-u103l2-pedagogia", type: "vocab", front: "la pedagogía", reading: "lapedagogia", meaning: "pedagogy (how to teach)", example: { jp: "La pedagogía estudia cómo aprende la gente.", en: "Pedagogy studies how people learn." }, accept: ["pedagogy", "teaching method", "educational theory"], hint: "The theory of teaching, as a field. Un cambio pedagógico is a change in method, not in content." },
        { id: "es-u103l2-impartir", type: "vocab", front: "impartir", reading: "impartir", meaning: "to deliver (a course/class)", example: { jp: "Este profesor imparte tres cursos cada año.", en: "This teacher delivers three courses each year." }, accept: ["to deliver", "to teach", "to give", "deliver"], hint: "The formal verb on a timetable or a CV: impartir clases, impartir un curso. In speech you would just say dar clase." },
        { id: "es-u103l2-tutoria", type: "vocab", front: "la tutoría", reading: "latutoria", meaning: "tutorial / office hour", example: { jp: "Pedí una tutoría para hablar con el profesor.", en: "I asked for a tutorial so I could talk to the teacher." }, accept: ["tutorial", "office hour", "tutoring", "supervision"], hint: "The one-to-one slot, and also the duty of supervising a student's work. El tutor is the person doing it." },
      ],
    },
    {
      id: "es-u103l3",
      unit: 103,
      lesson: 3,
      title: "Investigar, evaluar y financiar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how research gets presented, judged and paid for: conference papers, peer assessment, calls and grants.",
      items: [
        { id: "es-u103l3-ponencia", type: "vocab", front: "la ponencia", reading: "laponencia", meaning: "conference paper / talk", example: { jp: "Su ponencia fue la mejor del día.", en: "Her paper was the best of the day." }, accept: ["paper", "conference paper", "talk", "presentation"], hint: "The spoken paper you give at a congreso, and by extension the text of it. The speaker is el ponente." },
        { id: "es-u103l3-congreso", type: "vocab", front: "el congreso", reading: "elcongreso", meaning: "conference (academic)", example: { jp: "Al congreso vienen estudiantes de muchos países.", en: "Students from many countries come to the conference." }, accept: ["conference", "congress", "convention"], hint: "The academic meeting. Capitalised, el Congreso is the lower house of parliament — context does all the work here." },
        { id: "es-u103l3-evaluacion", type: "vocab", front: "la evaluación", reading: "laevaluacion", meaning: "assessment / evaluation", example: { jp: "La evaluación de un trabajo la hacen otros profesores.", en: "The assessment of a piece of work is done by other teachers." }, accept: ["assessment", "evaluation", "appraisal", "review"], hint: "The formal judging of work against criteria. La evaluación por pares is peer review — the academic quality check." },
        { id: "es-u103l3-convocatoria", type: "vocab", front: "la convocatoria", reading: "laconvocatoria", meaning: "call (for applications) / sitting", example: { jp: "La convocatoria de becas se abre en marzo.", en: "The call for grant applications opens in March." }, accept: ["call", "call for applications", "announcement", "sitting"], hint: "An official opening of a process: for money, for jobs, or for an exam session — la convocatoria de junio." },
        { id: "es-u103l3-beca", type: "vocab", front: "la beca", reading: "labeca", meaning: "grant / scholarship", example: { jp: "Sin la beca no podría estudiar aquí.", en: "Without the grant I could not study here." }, accept: ["grant", "scholarship", "bursary", "studentship"], hint: "Money to study or to research, awarded on merit or need. El becario is the person living on one." },
        { id: "es-u103l3-divulgacion", type: "vocab", front: "la divulgación", reading: "ladivulgacion", meaning: "public communication of science", example: { jp: "La divulgación lleva la ciencia a la gente.", en: "Science communication takes science to people." }, accept: ["science communication", "popularisation", "outreach", "dissemination"], hint: "Explaining specialist work to a general audience. Un libro de divulgación is a popular science book, and it is a compliment." },
      ],
    },
    {
      id: "es-u103l4",
      unit: 103,
      lesson: 4,
      title: "Honestidad y mérito",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss academic honesty and standing: plagiarism, accreditation, merit, dropping out, and the top posts.",
      items: [
        { id: "es-u103l4-plagio", type: "vocab", front: "el plagio", reading: "elplagio", meaning: "plagiarism", example: { jp: "El plagio puede terminar con una carrera.", en: "Plagiarism can end a career." }, accept: ["plagiarism", "copying"], hint: "Presenting someone else's words as your own. The verb is plagiar; the accusation is serious enough to be actionable." },
        { id: "es-u103l4-merito", type: "vocab", front: "el mérito", reading: "elmerito", meaning: "merit", example: { jp: "La beca se da por mérito, no por dinero.", en: "The grant is awarded on merit, not on money." }, accept: ["merit", "worth", "credit"], hint: "What you earned, as against what you were given. Hacer méritos = to work at building a case for yourself, usually in front of the right people." },
        { id: "es-u103l4-abandono", type: "vocab", front: "el abandono", reading: "elabandono", meaning: "dropping out / abandonment", example: { jp: "El abandono es más alto en el primer curso.", en: "Dropping out is highest in the first year." }, accept: ["dropping out", "drop-out", "abandonment", "attrition"], hint: "El abandono escolar is the standard phrase for students leaving education early — one of the numbers a system is judged on." },
        { id: "es-u103l4-catedra", type: "vocab", front: "la cátedra", reading: "lacatedra", meaning: "professorial chair", example: { jp: "Consiguió una cátedra después de muchos años.", en: "He got a chair after many years." }, accept: ["chair", "professorship", "professorial chair"], hint: "The most senior academic post; the holder is un catedrático. Sentar cátedra means to lay down the law on a subject." },
        { id: "es-u103l4-rector", type: "vocab", front: "el rector", reading: "elrector", meaning: "vice-chancellor / university head", example: { jp: "El rector presentó el plan para los próximos años.", en: "The vice-chancellor presented the plan for the coming years." }, accept: ["vice-chancellor", "rector", "university head", "president"], hint: "The elected head of a whole university. La rectora in the feminine; el rectorado is the office and the building." },
        { id: "es-u103l4-elfraude", type: "vocab", front: "el fraude", reading: "elfraude", meaning: "fraud", example: { jp: "Descubrieron un fraude en las notas de varios alumnos.", en: "They uncovered a fraud in several students' marks." }, accept: ["fraud", "cheating", "deception"], hint: "Wider than el plagio, the first card here: plagio copies, fraude deceives. Fraudulento is the adjective." },
      ],
    },
  ],
};
