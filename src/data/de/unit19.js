// DE Unit 19 — Schule und Arbeit (slot: vocabulary 5) — A1
// Block 3 (u15–u20). Conventions: see de/unit1.js.
//
// THEME CHOSEN BY THIS SEAT. u3 gave the learner der Beruf, arbeiten and
// studieren — how to SAY what you do — and u1 gave die Schule and das Buch for
// their sounds. Nothing since has named a teacher, a lesson, an exam or an
// office. This unit fills the classroom and the workplace, and takes the verbs
// of studying with it, because lernen, lesen and schreiben belong with the room
// they happen in rather than in a general verb list.
//
// Rejected as already taught: die Schule, das Buch, sprechen (u1), der Beruf,
// arbeiten, studieren (u3), die Zeitung (u1) — all used in examples here.
// Rejected as the same lexeme: die Frage and die Antwort. Both are the bare nouns
// of fragen and antworten, taught in this unit's own lesson 2, and a learner with
// the verb does not need a second card for the noun. die Arbeit went the same way
// (~arbeiten u3) — which is why lesson 4 is built round the workplace and the
// people in it instead.
// Kept deliberately: der Schüler despite u1's die Schule. The -er turns an
// institution into a person, which is a different referent, not a shade of the
// same one; a learner who knows Schule cannot produce Schüler from it.
// FREE: Student, Chef, Firma, Text, Test, Universität | Klassen, Prüfungen, Aufgaben, Wörter, Sprachen, Lehrer, Termine, Bücher, Kollegen, Studenten, Schüler
export const DE_UNIT19 = {
  id: "de-u19",
  lang: "de",
  title: "Schule und Arbeit",
  order: 19,
  stage: "a1",
  lessons: [
    {
      id: "de-u19l1",
      unit: 19,
      lesson: 1,
      title: "In der Klasse",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the people and the events of a classroom: who teaches, who learns, and what you have to hand in.",
      items: [
        { id: "de-u19l1-derlehrer", type: "vocab", front: "der Lehrer", reading: "derlehrer", meaning: "the teacher", example: { jp: "Der Lehrer kommt aus Österreich.", en: "The teacher comes from Austria." }, accept: ["the teacher"], hint: "A woman is die Lehrerin — the -in ending makes the feminine, as with der Freund and die Freundin in u4." },
        { id: "de-u19l1-derschuler", type: "vocab", front: "der Schüler", reading: "derschuler", meaning: "the pupil", example: { jp: "Die Schüler sind heute sehr ruhig.", en: "The pupils are very quiet today." }, drill: { jp: "Der Schüler ist sehr jung", en: "The pupil is very young" }, accept: ["the pupil", "the student", "the schoolchild"], hint: "A school pupil. Someone at university is der Student — German keeps the two apart, English does not." },
        { id: "de-u19l1-derstudent", type: "vocab", front: "der Student", reading: "derstudent", meaning: "the university student", example: { jp: "Mein Bruder ist Student in Berlin.", en: "My brother is a student in Berlin." }, drill: { jp: "Der Student kommt aus Berlin", en: "The student comes from Berlin" }, accept: ["the university student", "the student"], hint: "No article after ist for a role: er ist Student, not ein Student. Stress the end: stu-DENT." },
        { id: "de-u19l1-dieklasse", type: "vocab", front: "die Klasse", reading: "dieklasse", meaning: "the class", example: { jp: "In meiner Klasse sind zwanzig Schüler.", en: "There are twenty pupils in my class." }, drill: { jp: "Die Klasse ist sehr groß", en: "The class is very big" }, accept: ["the class", "the year group", "the classroom"], hint: "Both the group of pupils and the room. As an exclamation, Klasse! means great." },
        { id: "de-u19l1-dieprufung", type: "vocab", front: "die Prüfung", reading: "dieprufung", meaning: "the exam", example: { jp: "Die Prüfung ist am Montag.", en: "The exam is on Monday." }, accept: ["the exam", "the test", "the examination"], hint: "From prüfen, to check. Eine Prüfung machen is to sit an exam." },
        { id: "de-u19l1-dieaufgabe", type: "vocab", front: "die Aufgabe", reading: "dieaufgabe", meaning: "the task", example: { jp: "Die Aufgabe ist nicht leicht.", en: "The task is not easy." }, accept: ["the task", "the exercise", "the assignment"], hint: "Homework is die Hausaufgaben, always plural — literally the house-tasks." },
      ],
    },
    {
      id: "de-u19l2",
      unit: 19,
      lesson: 2,
      title: "Fragen und antworten",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask a question, answer one, and say whether the answer was right or wrong.",
      items: [
        { id: "de-u19l2-fragen", type: "vocab", front: "fragen", reading: "fragen", meaning: "to ask", example: { jp: "Der Schüler fragt den Lehrer.", en: "The pupil asks the teacher." }, drill: { jp: "Die Schüler fragen den Lehrer", en: "The pupils ask the teacher" }, accept: ["to ask", "to ask a question"], hint: "The person asked is accusative: er fragt DEN Lehrer. The noun is die Frage, a question." },
        { id: "de-u19l2-antworten", type: "vocab", front: "antworten", reading: "antworten", meaning: "to answer", example: { jp: "Der Lehrer antwortet dem Schüler.", en: "The teacher answers the pupil." }, drill: { jp: "Die Lehrer antworten sehr schnell", en: "The teachers answer very quickly" }, accept: ["to answer", "to reply"], hint: "Mirror image of fragen: this one takes the DATIVE — er antwortet DEM Schüler. The noun is die Antwort." },
        { id: "de-u19l2-richtig", type: "vocab", front: "richtig", reading: "richtig", meaning: "correct", example: { jp: "Die Antwort ist richtig.", en: "The answer is correct." }, accept: ["correct", "right", "true"], hint: "Careful with u7's rechts, which is right as in the direction. Richtig is right as in not wrong." },
        { id: "de-u19l2-falsch", type: "vocab", front: "falsch", reading: "falsch", meaning: "wrong", example: { jp: "Nein, das ist falsch.", en: "No, that is wrong." }, accept: ["wrong", "false", "incorrect"], hint: "Also means fake: ein falscher Pass. English false is the same word." },
        { id: "de-u19l2-daswort", type: "vocab", front: "das Wort", reading: "daswort", meaning: "the word", example: { jp: "Ich verstehe das Wort nicht.", en: "I do not understand the word." }, accept: ["the word"], hint: "Two plurals with different jobs: die Wörter are separate words, die Worte are words in a speech." },
        { id: "de-u19l2-diesprache", type: "vocab", front: "die Sprache", reading: "diesprache", meaning: "the language", example: { jp: "Deutsch ist eine schwere Sprache.", en: "German is a difficult language." }, drill: { jp: "Die Sprache ist sehr schwer", en: "The language is very hard" }, accept: ["the language", "the speech"], hint: "From sprechen, u1 — the thing that is spoken." },
      ],
    },
    {
      id: "de-u19l3",
      unit: 19,
      lesson: 3,
      title: "Lernen",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you do to learn: read, write, practise, understand — and ask someone to explain.",
      items: [
        { id: "de-u19l3-lernen", type: "vocab", front: "lernen", reading: "lernen", meaning: "to learn", example: { jp: "Wir lernen Deutsch zusammen.", en: "We are learning German together." }, accept: ["to learn", "to study"], hint: "Lernen is to learn; studieren (u3) is specifically to be at university. English study covers both." },
        { id: "de-u19l3-lesen", type: "vocab", front: "lesen", reading: "lesen", meaning: "to read", example: { jp: "Mein Vater liest die Zeitung.", en: "My father reads the newspaper." }, drill: { jp: "Wir lesen die Zeitung zusammen", en: "We read the newspaper together" }, accept: ["to read"], hint: "Vowel shift in er/sie: ich lese, but er liest. One of a small group that swaps e for ie." },
        { id: "de-u19l3-schreiben", type: "vocab", front: "schreiben", reading: "schreiben", meaning: "to write", example: { jp: "Die Schüler schreiben die Wörter.", en: "The pupils write the words." }, accept: ["to write"], hint: "Schreiben and English scribe come from the same Latin root. The ei says eye." },
        { id: "de-u19l3-uben", type: "vocab", front: "üben", reading: "uben", meaning: "to practise", example: { jp: "Ich übe jetzt für die Prüfung.", en: "I am practising for the exam now." }, drill: { jp: "Wir üben hier zusammen", en: "We practise here together" }, accept: ["to practise", "to practice", "to rehearse"], hint: "Short and very common. You may type uben or üben — the umlaut folds." },
        { id: "de-u19l3-verstehen", type: "vocab", front: "verstehen", reading: "verstehen", meaning: "to understand", example: { jp: "Verstehen Sie die Aufgabe?", en: "Do you understand the task?" }, accept: ["to understand", "to comprehend"], hint: "ver- plus stehen, to stand — but the meaning is nowhere near standing. Ich verstehe is the single most useful thing to say in a lesson." },
        { id: "de-u19l3-erklaren", type: "vocab", front: "erklären", reading: "erklaren", meaning: "to explain", example: { jp: "Der Lehrer erklärt die Aufgabe.", en: "The teacher explains the task." }, drill: { jp: "Die Lehrer erklären die Aufgabe", en: "The teachers explain the task" }, accept: ["to explain", "to clarify"], hint: "From klar, clear — to make clear. The person you explain TO is dative." },
      ],
    },
    {
      id: "de-u19l4",
      unit: 19,
      lesson: 4,
      title: "Bei der Arbeit",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about a workplace: where you work, who you work with and for, and what you earn.",
      items: [
        { id: "de-u19l4-dasburo", type: "vocab", front: "das Büro", reading: "dasburo", meaning: "the workplace", example: { jp: "Mein Büro ist im Zentrum.", en: "My office is in the centre." }, drill: { jp: "Das Büro ist im Zentrum", en: "The office is in the centre" }, accept: ["the office", "the workplace"], hint: "Borrowed from French bureau, and it kept the stress at the end: bü-RO." },
        { id: "de-u19l4-diefirma", type: "vocab", front: "die Firma", reading: "diefirma", meaning: "the company", example: { jp: "Die Firma ist nicht groß.", en: "The company is not big." }, accept: ["the company", "the firm", "the business"], hint: "Irregular plural, die Firmen. English firm is the same word." },
        { id: "de-u19l4-derchef", type: "vocab", front: "der Chef", reading: "derchef", meaning: "the boss", example: { jp: "Der Chef ist heute nicht hier.", en: "The boss is not here today." }, accept: ["the boss", "the manager", "the head"], hint: "French again, so the ch says sh: SHEF. It means the boss, never a cook — that is der Koch." },
        { id: "de-u19l4-derkollege", type: "vocab", front: "der Kollege", reading: "derkollege", meaning: "the colleague", example: { jp: "Meine Kollegen sind sehr nett.", en: "My colleagues are very nice." }, drill: { jp: "Der Kollege arbeitet hier", en: "The colleague works here" }, accept: ["the colleague", "the co-worker"], hint: "Like der Kunde in u17, it adds -n outside the nominative: der Kollege, den Kollegen." },
        { id: "de-u19l4-verdienen", type: "vocab", front: "verdienen", reading: "verdienen", meaning: "to earn", example: { jp: "Sie verdient genug Geld für die Familie.", en: "She earns enough money for the family." }, drill: { jp: "Wir verdienen hier gut", en: "We earn well here" }, accept: ["to earn", "to deserve"], hint: "Also to deserve: das hast du verdient, you deserved that. From dienen, to serve." },
        { id: "de-u19l4-dertermin", type: "vocab", front: "der Termin", reading: "dertermin", meaning: "the appointment", example: { jp: "Ich habe am Freitag einen Termin.", en: "I have an appointment on Friday." }, drill: { jp: "Der Termin ist am Freitag", en: "The appointment is on Friday" }, accept: ["the appointment", "the date", "the deadline"], hint: "Any fixed time with someone — doctor, bank, boss. Not a romantic date, which is das Date." },
      ],
    },
  ],
};
