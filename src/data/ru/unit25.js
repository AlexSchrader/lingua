// RU Unit 25 — Работа и учёба ("Work and study") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Conventions are declared in ru/unit1.js §1–§10 and bind every card here.
// The slot was "Vocabulary 1", a scaffold counter title, so the THEME was block
// 3's to choose. It is the biggest remaining CEFR A1 domain: u8 taught the JOB
// TITLES (студент · учитель · инженер · повар · водитель · профессия) and u2
// taught `школа`, and then nothing — no office, no boss, no salary, no lesson, no
// exam, no pen, no paper. A learner could say what they were and not one thing
// about doing it. Measured against `src/data/ru/TAUGHT-WORDS.md` on this branch.
//
// ⚠️ LEXEME CALLS RECORDED (unit1.js §D — judgements, the tool is blind to
// Cyrillic):
//   `начальник` beside u24 `начало` and `сначала` — one root, нач-, and "the one
//        who begins" is not a route an English speaker travels to "boss". Allowed.
//   `зарплата` beside u18 `платить` — it is заработная плата contracted, and no
//        learner unpacks that. Allowed.
//   `задание` beside u23 `давать` — за+да+ние, the thing given to you. Opaque.
//   `оценка` beside u12 `цена` — a mark is what a thing is valued at; invisible.
//   `ручка` beside u20 `рука` — a literal diminutive, hand → little hand → pen
//        AND handle AND door knob. The semantic jump is total. Allowed, and the
//        hint names all three senses.
//   `тетрадь` · `цель` · both -ь nouns, both feminine, both named as such in
//        their hints as §3 requires.
//   AVOIDED on the same test: `работа` (vs u4 работать — block 1 refused it and
//        that stands) · `подпись` (vs u4 писать — chose `конверт` instead) ·
//        `уставать` (vs u7 устал) · `успевать` (vs `успех` in l4 — one of the two,
//        not both) · `учить`/`учиться`/`изучать` (vs u8 учитель) · `встреча`
//        (vs u23 встречать — chose `отпуск`) · `трудиться` (vs u19 трудный).
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT — hand-checked against `normalizeMeaning`:
//     `сложный` takes "complicated", NOT "difficult" — u19 `трудный` glosses
//             "hard" with "difficult" in its accept[], and the two Russian words
//             are genuinely different (трудный is hard work, сложный is made of
//             parts). The hint on сложный teaches that difference.
//     `отпуск` takes "annual leave" — u17 `выходной` owns "a day off" and u10
//             `праздник` owns "a holiday". Three Russian words, three glosses.
//     `класс` takes "a classroom" so it never lands on u15 `комната`.
//     `фирма` takes "a firm"; `компания` (u27) takes "a group of friends", which
//             is what it actually means in Russian.
//     `оценка` "a mark" — nothing else normalises onto it.
//     ⚠️ TWO SAME-LESSON SENSE OVERLAPS FOUND BY MEASUREMENT AND CORRECTED:
//             `класс` had "a class" in accept[], which `meaningVariants` shared
//             with `урок`, and "a grade", which it shared with `оценка` — in ONE
//             lesson. класс now accepts only "a year group" and "a schoolroom".
//             `документ` had "a paper", shared with `бумага` in l3; it now says
//             "an official paper".
//     Every internationalism was checked for the §9 free pass: офис · фирма ·
//     экзамен · класс · документ · конверт all carry an article or a distinct
//     word in the gloss, so `checkProduce(meaning)` fails on all six.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT25 = {
  id: "ru-u25",
  lang: "ru",
  title: "Работа и учёба",
  order: 25,
  stage: "a1",
  lessons: [
    {
      id: "ru-u25l1",
      unit: 25,
      lesson: 1,
      title: "Say where you work and who with",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe your workplace: the office, the boss, a colleague, the pay and the leave.",
      items: [
        { id: "ru-u25l1-ofis", type: "vocab", front: "офис", reading: "ofis", meaning: "an office", accept: ["office", "a workplace"], example: { jp: "Наш офис на пятом этаже, и там всегда тихо.", en: "Our office is on the fifth floor, and it is always quiet there." }, drill: { jp: "Наш новый офис очень большой", en: "Our new office is very big" }, hint: "O-fis, stress FIRST. Masculine (consonant ending). An internationalism, so the meaning is free. ⚠️ Russian says на работе for at work, from unit 4's работать — офис is the building, работа the activity, and Russians use the second far more." },
        { id: "ru-u25l1-nachalnik", type: "vocab", front: "начальник", reading: "nachalnik", meaning: "a boss", accept: ["boss", "a chief", "a head", "a manager"], example: { jp: "Наш начальник очень занят, и он редко здесь.", en: "Our boss is very busy, and he is rarely here." }, drill: { jp: "Наш начальник сегодня очень занят", en: "Our boss is very busy today" }, hint: "na-CHAL-nik, stress on CHAL. Masculine. It is built on начало (unit 24) — the one who starts things — which is not a link an English speaker would ever make, and is why both are cards. A woman boss is начальница." },
        { id: "ru-u25l1-kollega", type: "vocab", front: "коллега", reading: "kollega", meaning: "a colleague", accept: ["colleague", "a workmate", "a co-worker"], example: { jp: "Мой коллега очень хороший человек.", en: "My colleague is a very good person." }, drill: { jp: "Мой коллега сегодня очень занят", en: "My colleague is very busy today" }, hint: "ka-LE-ga, stress on LE, and only one л is actually said. ⚠️ A TRAP: it ends in -а but is MASCULINE for a man — мой коллега, never моя — exactly like папа and дядя in unit 10. For a woman: моя коллега. The word itself never changes shape." },
        { id: "ru-u25l1-zarplata", type: "vocab", front: "зарплата", reading: "zarplata", meaning: "a salary", accept: ["salary", "wages", "pay"], example: { jp: "Моя зарплата не очень большая, но это нормально.", en: "My salary is not very big, but that is all right." }, drill: { jp: "Моя новая зарплата очень маленькая", en: "My new salary is very small" }, hint: "zar-PLA-ta, stress on PLA. Feminine (-а). It is заработная плата — earned payment — squeezed into one word, and that contraction is how every Russian says it. Unit 18's платить sits inside it." },
        { id: "ru-u25l1-otpusk", type: "vocab", front: "отпуск", reading: "otpusk", meaning: "annual leave", accept: ["leave from work", "time off work", "vacation"], example: { jp: "В августе у меня отпуск, и мы будем дома.", en: "In August I am on leave, and we will be at home." }, drill: { jp: "В августе у меня будет отпуск", en: "In August I will be on leave" }, hint: "OT-pusk, stress first. Masculine. ⚠️ THREE RUSSIAN WORDS FOR WHAT ENGLISH CALLS A HOLIDAY: отпуск is leave from work, unit 17's выходной is a day off, unit 10's праздник is a public holiday. В отпуске means away on leave." },
        { id: "ru-u25l1-firma", type: "vocab", front: "фирма", reading: "firma", meaning: "a firm", accept: ["firm", "a business", "a company"], example: { jp: "Эта фирма очень большая, и там работает тысяча человек.", en: "This firm is very big, and a thousand people work there." }, drill: { jp: "Эта фирма очень большая и старая", en: "This firm is very big and old" }, hint: "FIR-ma, stress first. Feminine (-а). From German Firma, so the meaning is free. ⚠️ Do NOT reach for компания instead: in Russian компания usually means a group of friends, which unit 27 teaches." },
      ],
    },
    {
      id: "ru-u25l2",
      unit: 25,
      lesson: 2,
      title: "Talk about a lesson and an exam",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what the lesson was like, what the homework is, and what mark you got.",
      items: [
        { id: "ru-u25l2-urok", type: "vocab", front: "урок", reading: "urok", meaning: "a lesson", accept: ["lesson", "a class", "a period"], example: { jp: "Этот урок очень трудный, но интересный.", en: "This lesson is very hard, but interesting." }, drill: { jp: "Этот урок сегодня очень трудный", en: "This lesson is very hard today" }, hint: "u-ROK, stress at the end. Masculine. ⚠️ It has nothing to do with unit 8's учитель, whatever it looks like. It also means a lesson learnt the hard way — это был урок. At university a lesson is a пара, unit 21's word for a pair." },
        { id: "ru-u25l2-ekzamen", type: "vocab", front: "экзамен", reading: "ekzamen", meaning: "an exam", accept: ["exam", "an examination", "a test"], example: { jp: "Этот экзамен был очень трудный, и я не был готов.", en: "That exam was very hard, and I was not ready." }, drill: { jp: "Этот экзамен будет очень трудный", en: "This exam will be very hard" }, hint: "ek-ZA-min, stress on ZA. Masculine. An internationalism. Russian says сдавать экзамен for to sit one and сдать for to pass it — one verb in two aspects, which is exactly why unit1.js §4 holds aspect back to A2." },
        { id: "ru-u25l2-zadanie", type: "vocab", front: "задание", reading: "zadanie", meaning: "an assignment", accept: ["a task", "homework", "an exercise"], example: { jp: "Это задание было очень трудное, и я решал его долго.", en: "That assignment was very hard, and I was a long time working on it." }, drill: { jp: "Наше задание на сегодня сложное", en: "Our assignment for today is complicated" }, hint: "za-DA-ni-ye, stress on DA. Neuter (-е). Домашнее задание is homework, which Russian children shorten to домашка. It is built on unit 23's давать with за- in front — the thing given to you to do." },
        { id: "ru-u25l2-klass", type: "vocab", front: "класс", reading: "klass", meaning: "a classroom", accept: ["a year group", "a schoolroom"], example: { jp: "Наш класс на втором этаже, и там большое окно.", en: "Our classroom is on the second floor, and there is a big window there." }, drill: { jp: "Этот класс очень большой и новый", en: "This classroom is very big and new" }, hint: "KLAS, one syllable. Masculine. ⚠️ THREE senses and Russian uses all of them: the room, the year group (он в пятом классе), and Класс! as slang for Brilliant! An internationalism, so only the senses are work." },
        { id: "ru-u25l2-tetrad", type: "vocab", front: "тетрадь", reading: "tetrad", meaning: "an exercise book", accept: ["a notebook", "a workbook", "a jotter"], example: { jp: "Моя тетрадь в сумке, а ручка на столе.", en: "My exercise book is in my bag, and the pen is on the table." }, drill: { jp: "Моя тетрадь сегодня в сумке", en: "My exercise book is in my bag today" }, hint: "ti-TRAD, stress at the end. ⚠️ FEMININE, and a -ь noun, so the ending tells you nothing (unit1.js §3): моя тетрадь. From Greek tetra, four — a sheet folded twice. Every Russian schoolchild carries several." },
        { id: "ru-u25l2-otsenka", type: "vocab", front: "оценка", reading: "otsenka", meaning: "a mark", accept: ["a grade", "an assessment", "a score"], example: { jp: "Это очень хорошая оценка, и я рад.", en: "That is a very good mark, and I am glad." }, drill: { jp: "Это наша очень хорошая оценка", en: "That is our very good mark" }, hint: "a-TSEN-ka, stress on TSEN. Feminine (-а). Russian marks run from 1 to 5, so пять is top and два is a fail — which is why unit 21's пара is also slang for a bad mark. Built on unit 12's цена: a mark is what a thing is valued at." },
      ],
    },
    {
      id: "ru-u25l3",
      unit: 25,
      lesson: 3,
      title: "Paper, pens and documents",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what is on the desk and ask for the pen, the paper or the folder you need.",
      items: [
        { id: "ru-u25l3-bumaga", type: "vocab", front: "бумага", reading: "bumaga", meaning: "paper", accept: ["a sheet of paper", "writing paper"], example: { jp: "На столе только бумага и ручка.", en: "There is only paper and a pen on the table." }, drill: { jp: "На столе бумага и карандаш", en: "There is paper and a pencil on the table" }, hint: "bu-MA-ga, stress on MA. Feminine (-а). It is the MATERIAL and has no plural in that sense — but бумаги in the plural means documents, the paperwork sense English has too." },
        { id: "ru-u25l3-ruchka", type: "vocab", front: "ручка", reading: "ruchka", meaning: "a pen", accept: ["a biro", "a handle", "a door knob"], example: { jp: "Моя ручка не работает, и это плохо.", en: "My pen does not work, and that is bad." }, drill: { jp: "Эта новая ручка не работает", en: "This new pen does not work" }, hint: "RUCH-ka, stress first. Feminine (-а). ⚠️ It is рука, a hand (unit 20), with a small-thing ending — so it means a pen AND a handle AND a door knob. Russian uses the one word for all three and lets context decide." },
        { id: "ru-u25l3-karandash", type: "vocab", front: "карандаш", reading: "karandash", meaning: "a pencil", accept: ["pencil", "a lead pencil"], example: { jp: "Этот карандаш очень старый, но хороший.", en: "This pencil is very old, but good." }, drill: { jp: "Мой карандаш сегодня в сумке", en: "My pencil is in my bag today" }, hint: "ka-ran-DASH, stress at the end. Masculine, and the ш is always hard. From Turkic kara taş, black stone — a loan from the east rather than from Europe, which is rare in this unit." },
        { id: "ru-u25l3-dokument", type: "vocab", front: "документ", reading: "dokument", meaning: "a document", accept: ["document", "an official paper", "a record"], example: { jp: "Этот документ очень важный, и я его не теряю.", en: "This document is very important, and I do not lose it." }, drill: { jp: "Этот документ очень важный и старый", en: "This document is very important and old" }, hint: "da-ku-MENT, stress at the end. Masculine. An internationalism, so ⚠️ THE STRESS IS THE WORK: not DOC-ument but da-ku-MENT. Russians say документы in the plural for your identity papers, of which unit 9's паспорт is the chief." },
        { id: "ru-u25l3-konvert", type: "vocab", front: "конверт", reading: "konvert", meaning: "an envelope", accept: ["envelope", "a paper envelope"], example: { jp: "В конверте письмо и фотография.", en: "There is a letter and a photograph in the envelope." }, drill: { jp: "Этот конверт очень большой и белый", en: "This envelope is very big and white" }, hint: "kan-VERT, stress at the end. Masculine, and the в says f before the т — kan-FYERT. Unit 5's письмо goes inside it and unit 14's почта carries it." },
        { id: "ru-u25l3-papka", type: "vocab", front: "папка", reading: "papka", meaning: "a folder", accept: ["folder", "a file", "a binder"], example: { jp: "Наши документы в этой папке, и она на полке.", en: "Our documents are in this folder, and it is on the shelf." }, drill: { jp: "Эта папка на нашей полке", en: "This folder is on our shelf" }, hint: "PAP-ka, stress first. Feminine (-а). ⚠️ It is also a folder on a computer, exactly as in English — the cardboard object and the icon share the word. Nothing to do with папа (unit 10)." },
      ],
    },
    {
      id: "ru-u25l4",
      unit: 25,
      lesson: 4,
      title: "Say how the work is going",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Judge a piece of work: a success, useful, complicated, serious — and name your goal.",
      items: [
        { id: "ru-u25l4-uspekh", type: "vocab", front: "успех", reading: "uspekh", meaning: "success", accept: ["a success", "an achievement"], example: { jp: "Это был очень большой успех, и мы рады.", en: "That was a very big success, and we are glad." }, drill: { jp: "Это наш очень большой успех", en: "That is our very big success" }, hint: "us-PEKH, stress at the end. Masculine. Желаю успеха! is the standard Good luck with it. ⚠️ Unit 7's удача is luck that happens TO you; успех is what you bring about, and Russians keep them apart." },
        { id: "ru-u25l4-opyt", type: "vocab", front: "опыт", reading: "opyt", meaning: "experience", accept: ["an experiment", "practical knowledge"], example: { jp: "У него большой опыт, и он очень хороший повар.", en: "He has a lot of experience, and he is a very good cook." }, drill: { jp: "У него очень большой опыт", en: "He has very great experience" }, hint: "O-pyt, stress first. Masculine. TWO senses in one word: life experience, and an experiment in a laboratory. Опытный means experienced. It is connected to no verb you have met." },
        { id: "ru-u25l4-tsel", type: "vocab", front: "цель", reading: "tsel", meaning: "a goal", accept: ["an aim", "a target", "a purpose"], example: { jp: "Наша цель — это хороший экзамен в июне.", en: "Our goal is a good exam in June." }, drill: { jp: "Это очень важная цель сегодня", en: "That is a very important goal today" }, hint: "TSEL, one syllable. ⚠️ FEMININE, and a -ь noun so the ending tells you nothing (unit1.js §3): наша цель. Two senses: an aim, and a target you shoot at. ⚠️ Not unit 24's целый, whole — the readings differ, tsel and tselyy." },
        { id: "ru-u25l4-poleznyy", type: "vocab", front: "полезный", reading: "poleznyy", meaning: "useful", accept: ["helpful", "of use", "worthwhile"], example: { jp: "Этот урок очень полезный, и я всё помню.", en: "This lesson is very useful, and I remember everything." }, drill: { jp: "Этот новый урок очень полезный", en: "This new lesson is very useful" }, hint: "pa-LEZ-nyy, stress on LEZ. Built on польза, benefit, which is not taught — so it arrives on its own. ⚠️ Полезная еда means HEALTHY food, not useful food, and that is the one place the English word misleads you." },
        { id: "ru-u25l4-slozhnyy", type: "vocab", front: "сложный", reading: "slozhnyy", meaning: "complicated", accept: ["complex", "involved", "intricate"], example: { jp: "Это очень сложный вопрос, и я не знаю ответа.", en: "That is a very complicated question, and I do not know the answer." }, drill: { jp: "Это был очень сложный экзамен", en: "That was a very complicated exam" }, hint: "SLOZH-nyy, stress first. ⚠️ NOT the same as unit 19's трудный: трудный is HARD WORK, сложный is MADE OF MANY PARTS. A сложный вопрос has several sides; a трудный вопрос simply hurts to answer. Russians distinguish them carefully and so should you." },
        { id: "ru-u25l4-seryoznyy", type: "vocab", front: "серьёзный", reading: "seryoznyy", meaning: "serious", accept: ["earnest", "grave", "not joking"], example: { jp: "Это очень серьёзный вопрос, и нужно решать сегодня.", en: "That is a very serious question, and it must be decided today." }, drill: { jp: "Это очень серьёзный человек", en: "That is a very serious person" }, hint: "si-RYOZ-nyy, stress on the ё, which is always the stressed vowel (unit1.js §7). A loan from French sérieux. ⚠️ Серьёзно? on its own is the English Seriously? — and that is what you will actually say with this word." },
      ],
    },
  ],
};
