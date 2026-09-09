// DE Unit 24 — Work and school (slot: work) — A2
// Conventions and the FREE list live in de/unit1.js — read that header first.
// The CROSS-BLOCK COLLISION LEDGER is in de/unit21.js — read that before authoring.
//
// A1 u19 already owns the classroom and the office: Lehrer, Schüler, Student,
// Klasse, Prüfung, Aufgabe, Wort, Sprache, Büro, Firma, Chef, Kollege, Termin,
// fragen, antworten, lernen, lesen, schreiben, üben, verstehen, erklären,
// verdienen, richtig, falsch. ALL OF THAT IS BLOCKED. u3 also holds der Beruf,
// which the screen caught, and arbeiten and studieren.
//
// So this unit is the layer above: getting the job, holding the job, training
// for it, and being graded. It is the first unit where the learner can describe
// a career rather than a classroom.
//
// Three same-lexeme candidates were screened out rather than authored: das
// Studium beside u3's studieren, der Arbeitsplatz beside arbeiten, and die
// Sitzung beside die Besprechung — the last two glossed "the meeting" identically,
// which is the collision that normalizeMeaning cannot see past.
//
// Verb fronts are modal-framed, as in u21-u23. The exception is wiederholen,
// which is INSEPARABLE — the stress falls on -hol-, so the prefix never breaks
// off and the verb stands whole even conjugated. Its example uses that.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT24 = {
  id: "de-u24",
  lang: "de",
  title: "Arbeit und Ausbildung",
  order: 24,
  stage: "a2",
  lessons: [
    {
      id: "de-u24l1",
      unit: 24,
      lesson: 1,
      title: "Die Bewerbung",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Apply for a job: name the position, send the application and the CV, and talk about the interview and your experience.",
      items: [
        { id: "de-u24l1-diestelle", type: "vocab", front: "die Stelle", reading: "diestelle", meaning: "the position", example: { jp: "Die Stelle in der Firma ist frei.", en: "The position at the company is open." }, drill: { jp: "Die Stelle in der Firma ist frei", en: "The position at the company is open" }, accept: ["the position", "position", "the job", "the post", "the vacancy"], hint: "Also simply a place or spot — an der Stelle means at that spot. For work it is the neutral word; der Job is borrowed and more casual." },
        { id: "de-u24l1-sichbewerben", type: "vocab", front: "sich bewerben", reading: "sichbewerben", meaning: "to apply", example: { jp: "Ich bewerbe mich bei der Firma.", en: "I am applying to the company." }, drill: { jp: "Der Student will sich bewerben", en: "The student wants to apply" }, accept: ["to apply", "apply", "to apply for a job"], hint: "Reflexive, and it takes different prepositions for different things: sich bewerben BEI a company, but UM a position." },
        { id: "de-u24l1-diebewerbung", type: "vocab", front: "die Bewerbung", reading: "diebewerbung", meaning: "the application", example: { jp: "Die Bewerbung für die Stelle kommt heute.", en: "The application for the position arrives today." }, drill: { jp: "Die Bewerbung für die Stelle kommt heute", en: "The application for the position arrives today" }, accept: ["the application", "application", "the job application"], hint: "The noun from sich bewerben. Die Bewerbungsunterlagen are the whole pack of documents Germans expect you to send with it." },
        { id: "de-u24l1-derlebenslauf", type: "vocab", front: "der Lebenslauf", reading: "derlebenslauf", meaning: "the CV", example: { jp: "Der Lebenslauf ist kurz und gut.", en: "The CV is short and good." }, drill: { jp: "Der Lebenslauf ist kurz und gut", en: "The CV is short and good" }, accept: ["the CV", "CV", "the resume", "resume", "the curriculum vitae"], hint: "Leben + Lauf, the run of a life — a calque of curriculum vitae. German CVs are traditionally in table form and dated." },
        { id: "de-u24l1-dasvorstellungsgesprach", type: "vocab", front: "das Vorstellungsgespräch", reading: "dasvorstellungsgesprach", meaning: "the job interview", example: { jp: "Das Vorstellungsgespräch ist am Montag.", en: "The job interview is on Monday." }, drill: { jp: "Das Vorstellungsgespräch ist am Montag", en: "The job interview is on Monday" }, accept: ["the job interview", "job interview", "the interview", "interview"], hint: "Vorstellung, an introducing of yourself, plus Gespräch, a conversation — the conversation where you introduce yourself. Long, but both halves are transparent." },
        { id: "de-u24l1-dieerfahrung", type: "vocab", front: "die Erfahrung", reading: "dieerfahrung", meaning: "the experience", example: { jp: "Der Chef fragt nach der Erfahrung.", en: "The boss asks about the experience." }, drill: { jp: "Die Erfahrung von dem Kollegen ist groß", en: "The colleague's experience is considerable" }, accept: ["the experience", "experience"], hint: "Hiding u7's fahren — an experience is something you have travelled through. Erfahrung is what you have gained; das Erlebnis is a single thing that happened to you." },
      ],
    },
    {
      id: "de-u24l2",
      unit: 24,
      lesson: 2,
      title: "Im Betrieb",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the workplace: your department, meetings, the contract and the salary, and say you are leaving.",
      items: [
        { id: "de-u24l2-dieabteilung", type: "vocab", front: "die Abteilung", reading: "dieabteilung", meaning: "the department", example: { jp: "Die Abteilung in der Firma ist klein.", en: "The department at the company is small." }, drill: { jp: "Die Abteilung in der Firma ist klein", en: "The department at the company is small" }, accept: ["the department", "department", "the division"], hint: "From abteilen, to divide off — a department is a part cut out of the whole. The same -ung ending that made Bewerbung and Erfahrung, and always feminine." },
        { id: "de-u24l2-diebesprechung", type: "vocab", front: "die Besprechung", reading: "diebesprechung", meaning: "the meeting", example: { jp: "Die Besprechung dauert eine Stunde.", en: "The meeting lasts an hour." }, drill: { jp: "Die Besprechung dauert eine Stunde", en: "The meeting lasts an hour" }, accept: ["the meeting", "meeting", "the discussion"], hint: "Built on u1's sprechen — the thing where people speak something through. Note it is not u19's Termin, which is any appointment in the diary." },
        { id: "de-u24l2-dasgehalt", type: "vocab", front: "das Gehalt", reading: "dasgehalt", meaning: "the salary", example: { jp: "Das Gehalt kommt am Montag.", en: "The salary comes on Monday." }, drill: { jp: "Das Gehalt kommt am Montag", en: "The salary comes on Monday" }, accept: ["the salary", "salary", "the pay", "the wage"], hint: "Neuter, and monthly. Der Lohn is the older word for pay by the hour. The verb you already have is u19's verdienen, to earn it." },
        { id: "de-u24l2-dervertrag", type: "vocab", front: "der Vertrag", reading: "dervertrag", meaning: "the contract", example: { jp: "Der Vertrag für die Stelle ist neu.", en: "The contract for the position is new." }, drill: { jp: "Der Vertrag für die Stelle ist neu", en: "The contract for the position is new" }, accept: ["the contract", "contract", "the agreement"], hint: "From vertragen, to come to terms. Einen Vertrag schließen is to sign one — German closes a contract where English signs it." },
        { id: "de-u24l2-leiten", type: "vocab", front: "leiten", reading: "leiten", meaning: "to lead", example: { jp: "Der Chef leitet die Abteilung.", en: "The boss leads the department." }, drill: { jp: "Der Chef will die Abteilung leiten", en: "The boss wants to lead the department" }, accept: ["to lead", "lead", "to run", "to manage", "to head"], hint: "Used of running a thing — a department, a project, a discussion — not of leading people somewhere. Die Leitung is both the management and, oddly, a pipe or cable." },
        { id: "de-u24l2-kundigen", type: "vocab", front: "kündigen", reading: "kundigen", meaning: "to hand in notice", example: { jp: "Ich kündige im Sommer.", en: "I am handing in my notice in the summer." }, drill: { jp: "Der Kollege will im Sommer kündigen", en: "The colleague wants to hand in notice in the summer" }, accept: ["to hand in notice", "to resign", "to quit", "to give notice", "to terminate"], hint: "It works both ways: the employee kündigt and so does the employer, which is why die Kündigung on a letter is bad news either way." },
      ],
    },
    {
      id: "de-u24l3",
      unit: 24,
      lesson: 3,
      title: "Die Ausbildung",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe training and study: an apprenticeship, an internship, a course, a lecture, a degree, and passing the exam.",
      items: [
        { id: "de-u24l3-dieausbildung", type: "vocab", front: "die Ausbildung", reading: "dieausbildung", meaning: "the training", example: { jp: "Die Ausbildung dauert drei Jahre.", en: "The training lasts three years." }, drill: { jp: "Die Ausbildung dauert drei Jahre", en: "The training lasts three years" }, accept: ["the training", "training", "the apprenticeship", "the vocational training"], hint: "Not a small word in Germany — die Ausbildung is the formal apprenticeship that runs alongside the university route, and it is the normal path into a trade." },
        { id: "de-u24l3-daspraktikum", type: "vocab", front: "das Praktikum", reading: "daspraktikum", meaning: "the internship", example: { jp: "Das Praktikum in der Firma dauert lange.", en: "The internship at the company lasts a long time." }, drill: { jp: "Das Praktikum in der Firma dauert lange", en: "The internship at the company lasts a long time" }, accept: ["the internship", "internship", "the work placement", "the placement"], hint: "A Latin word keeping its Latin plural: ein Praktikum, zwei Praktika. Several German nouns in -um do this, so it is worth meeting once." },
        { id: "de-u24l3-derkurs", type: "vocab", front: "der Kurs", reading: "derkurs", meaning: "the course", example: { jp: "Der Kurs für Deutsch ist heute voll.", en: "The German course is full today." }, drill: { jp: "Der Kurs für Deutsch ist heute voll", en: "The German course is full today" }, accept: ["the course", "course", "the class"], hint: "A course of lessons, and also an exchange rate — der Kurs des Euro. Both senses come from the idea of a running or a rate." },
        { id: "de-u24l3-dievorlesung", type: "vocab", front: "die Vorlesung", reading: "dievorlesung", meaning: "the lecture", example: { jp: "Die Vorlesung ist heute sehr langweilig.", en: "The lecture is very boring today." }, drill: { jp: "Die Vorlesung ist heute sehr langweilig", en: "The lecture is very boring today" }, accept: ["the lecture", "lecture"], hint: "Vor + lesen, a reading-aloud-before — which is exactly what a lecture once was. University only; a school lesson is die Stunde." },
        { id: "de-u24l3-derabschluss", type: "vocab", front: "der Abschluss", reading: "derabschluss", meaning: "the degree", example: { jp: "Der Abschluss an der Universität ist schwer.", en: "The degree at the university is hard." }, drill: { jp: "Der Abschluss an der Universität ist schwer", en: "The degree at the university is hard" }, accept: ["the degree", "degree", "the qualification", "the completion"], hint: "From abschließen, to close off — the thing that finishes the course. It covers a school leaving certificate as well as a university degree." },
        { id: "de-u24l3-bestehen", type: "vocab", front: "bestehen", reading: "bestehen", meaning: "to pass", example: { jp: "Ich bestehe die Prüfung im Juli.", en: "I pass the exam in July." }, drill: { jp: "Die Schüler wollen die Prüfung bestehen", en: "The students want to pass the exam" }, accept: ["to pass", "pass", "to pass an exam"], hint: "Only of exams and tests — you cannot bestehen a ball or a shop. It also means to consist of: aus etwas bestehen." },
      ],
    },
    {
      id: "de-u24l4",
      unit: 24,
      lesson: 4,
      title: "In der Schule",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about school life: subjects, grades, homework, the report, break time, and going over something again.",
      items: [
        { id: "de-u24l4-dasfach", type: "vocab", front: "das Fach", reading: "dasfach", meaning: "the subject", example: { jp: "Das Fach in der Schule ist neu.", en: "The subject at school is new." }, drill: { jp: "Das Fach in der Schule ist neu", en: "The subject at school is new" }, accept: ["the subject", "subject", "the school subject", "the field"], hint: "Originally a compartment or pigeonhole, and it still means that. A specialist is a Fachmann — someone who lives in one compartment." },
        { id: "de-u24l4-dienote", type: "vocab", front: "die Note", reading: "dienote", meaning: "the grade", example: { jp: "Die Note für die Prüfung ist gut.", en: "The grade for the exam is good." }, drill: { jp: "Die Note für die Prüfung ist gut", en: "The grade for the exam is good" }, accept: ["the grade", "grade", "the mark", "mark"], hint: "German grades run from 1 to 6 and 1 is the BEST — the opposite of what most systems do. The same word is a musical note." },
        { id: "de-u24l4-diehausaufgabe", type: "vocab", front: "die Hausaufgabe", reading: "diehausaufgabe", meaning: "the homework", example: { jp: "Die Hausaufgabe für morgen ist leicht.", en: "The homework for tomorrow is easy." }, drill: { jp: "Die Hausaufgabe für morgen ist leicht", en: "The homework for tomorrow is easy" }, accept: ["the homework", "homework", "the assignment"], hint: "Haus + u19's Aufgabe. Usually said in the plural — die Hausaufgaben machen — where English keeps it singular." },
        { id: "de-u24l4-daszeugnis", type: "vocab", front: "das Zeugnis", reading: "daszeugnis", meaning: "the report card", example: { jp: "Das Zeugnis kommt im Juli.", en: "The report card comes in July." }, drill: { jp: "Das Zeugnis kommt im Juli", en: "The report card comes in July" }, accept: ["the report card", "report card", "the report", "the certificate", "the reference"], hint: "From Zeuge, a witness — the paper that testifies to what you did. An employer gives you one too, and in Germany it is legally required." },
        { id: "de-u24l4-diepause", type: "vocab", front: "die Pause", reading: "diepause", meaning: "the break", example: { jp: "Die Pause dauert zwanzig Minuten.", en: "The break lasts twenty minutes." }, drill: { jp: "Die Pause dauert zwanzig Minuten", en: "The break lasts twenty minutes" }, accept: ["the break", "break", "the pause", "the interval"], hint: "School break, work break and the interval at the theatre, all one word. Eine Pause machen is to take a break." },
        { id: "de-u24l4-wiederholen", type: "vocab", front: "wiederholen", reading: "wiederholen", meaning: "to repeat", example: { jp: "Der Lehrer wiederholt das Wort.", en: "The teacher repeats the word." }, drill: { jp: "Wir müssen das Wort wiederholen", en: "We have to repeat the word" }, accept: ["to repeat", "repeat", "to revise", "to go over again"], hint: "INSEPARABLE, unlike u23's abholen — the stress sits on -hol-, so the prefix never breaks off and you say ich wiederhole, not ich hole wieder. Also what you do before an exam: revise." },
      ],
    },
  ],
};
