// RU Unit 41 — Учёба и знание ("Study and knowledge") — A2
// ─────────────────────────────────────────────────────────────────────────────
// FIRST UNIT OF BLOCK 2 (u41–u50). Conventions that bind every card here:
// ru/unit1.js §1–§10 and §A–§D (the language), then ru/unit31.js §1–§7 (the A2
// band, settled by block 1, which is the crew lead). This header adds nothing to
// either — it records what block 2 MEASURED and DECIDED inside its own range.
// The block-wide record lives in §B1–§B7 of ru/unit50.js.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Personality and character" AND IT IS BLOCK 3's
// DOMAIN, NOT MINE. Block 3 (u51–u60) was assigned "character and personality"
// by the same kickoff that gave me education, work, technology, money and media
// — and A1 had already written the theme anyway (u28 Чувства и характер:
// характер · честный · умный · глупый · вежливый · ленивый · грустный · злой ·
// спокойный · довольный · гордый · странный). Rethemed to EDUCATION AND STUDY.
// The full retheme table for all ten of block 2's slots is in ru/unit50.js §B2.
//
// THE MEASURED HOLE. A1's study unit is u25 Работа и учёба and it is the school
// desk: урок · экзамен · задание · класс · тетрадь · оценка · бумага · ручка ·
// карандаш · документ · конверт · папка. Plus школа (u2), студент · учитель (u8),
// университет (u9), словарь (u5), книга (u8). Against that a learner could not
// name WHO teaches them past школа, WHICH subject they are studying, or WHAT is
// on the page in front of them. No A1 or block-1 unit teaches a single academic
// subject — not one of maths, physics, chemistry, literature or geography.
//
// FOUR CALLS I MADE AND THE REASONING, so nobody re-litigates them:
//   `правило` "a rule" beside u40 `правильный` "correct" and u6 `правильно`.
//        Russian's прав- family is enormous and A1/block 1 already card three of
//        it (правда u22, правильно u6, правильный u40). §D's test is whether a
//        learner who knows one already knows the other: правильный "correct" does
//        not give you правило "a rule", and a grammar rule is unnameable without
//        it. Gloss "a rule" → normalises "rule"; правильный's normalises to
//        "correct". Measured clear.
//   `пример` "an example" beside u37 `примерно` "roughly" and u18 `примерять`
//        "to try on". Same root, three different senses, no gloss overlap. A
//        learner who knows "roughly" cannot produce "an example".
//   `страница` "a page" beside u8 `страна` "a country". Four shared letters and
//        nothing else — different roots (стран- vs страниц-, both from сторона
//        historically, neither derivable from the other).
//   `практика` glossed "a work placement", NOT "experience", because u25 `опыт`
//        is already "experience" and normalizeMeaning would make them one prompt.
//
// ⚠️ REFUSED IN THIS UNIT, each for a rule already written down:
//   `школьник` — vs u2 `школа`. Derivable; and `ученик` covers the sense.
//   `читатель` — vs u4 `читать`. The §D class (разговор vs говорить).
//   `профессор` — vs u8 `профессия`, which unit1.js §D names explicitly.
//   `студентка` — an inflected/derived form of u8 `студент`; unit1.js §5's rule.
//   `уровень` · `оценка` · `история` · `умный` — all TAKEN (u30, u25, u24, u28).
//   `группа` — TAKEN by block 1 at u32l3.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT41 = {
  id: "ru-u41",
  lang: "ru",
  title: "Учёба и знание",
  order: 41,
  stage: "a2",
  lessons: [
    {
      id: "ru-u41l1",
      unit: 41,
      lesson: 1,
      title: "Who teaches you, and where",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say who teaches your course, which room it is in, and who else is on it with you.",
      items: [
        { id: "ru-u41l1-prepodavatel", type: "vocab", front: "преподаватель", reading: "prepodavatel", meaning: "a lecturer", accept: ["a university teacher", "an instructor", "a tutor"], example: { jp: "Наш преподаватель говорит очень тихо.", en: "Our lecturer speaks very quietly." }, drill: { jp: "Преподаватель уже читает письмо", en: "The lecturer is already reading the letter" }, hint: "pre-pa-da-VA-tel — five syllables, stress on VA, and both о reduce to a. MASCULINE, though it ends in -ь. Not the same word as учитель from unit 8: a учитель teaches at school, a преподаватель at university." },
        { id: "ru-u41l1-uchenik", type: "vocab", front: "ученик", reading: "uchenik", meaning: "a pupil", accept: ["a schoolchild", "a learner", "an apprentice"], example: { jp: "Этот ученик всегда знает ответ.", en: "That pupil always knows the answer." }, drill: { jp: "Ученик пишет в тетради", en: "The pupil is writing in the exercise book" }, hint: "u-che-NIK — stress on the last syllable. MASCULINE. A студент (unit 8) is at university; a ученик is at school, or is someone learning a trade from a master." },
        { id: "ru-u41l1-odnoklassnik", type: "vocab", front: "одноклассник", reading: "odnoklassnik", meaning: "a classmate", accept: ["a school friend", "someone in my class", "a fellow pupil"], example: { jp: "Мой одноклассник живёт рядом с нами.", en: "My classmate lives near us." }, drill: { jp: "Одноклассник тоже живёт в общежитии", en: "A classmate also lives in the hall of residence" }, hint: "ad-na-KLAS-nik — stress on KLAS, and both о before it reduce to a. MASCULINE. It is built from один + класс: literally «a one-class person»." },
        { id: "ru-u41l1-auditoriya", type: "vocab", front: "аудитория", reading: "auditoriya", meaning: "a lecture room", accept: ["a lecture hall", "a teaching room", "an auditorium"], example: { jp: "Наша аудитория на третьем этаже.", en: "Our lecture room is on the third floor." }, drill: { jp: "Аудитория сегодня была пустая", en: "The lecture room was empty today" }, hint: "au-di-TO-ri-ya — five syllables, stress on TO. FEMININE (-я). It also means the audience itself — «вся аудитория смеялась»." },
        { id: "ru-u41l1-kurs", type: "vocab", front: "курс", reading: "kurs", meaning: "a course", accept: ["a course of study", "a year of study", "a programme"], example: { jp: "Мой брат уже на втором курсе.", en: "My brother is already in his second year." }, drill: { jp: "Этот курс очень интересный", en: "This course is very interesting" }, hint: "One syllable, KURS. MASCULINE. Two senses at once: a course of lectures, and the YEAR a Russian student is in — «я на первом курсе» means «I am a first-year»." },
        { id: "ru-u41l1-obshchezhitie", type: "vocab", front: "общежитие", reading: "obshchezhitie", meaning: "a hall of residence", accept: ["student accommodation", "a dormitory", "a students hostel"], example: { jp: "Наше общежитие рядом с университетом.", en: "Our hall of residence is next to the university." }, drill: { jp: "Общежитие стоит около парка", en: "The hall of residence stands near the park" }, hint: "ap-shche-ZHY-ti-ye — five syllables, stress on ZHY. NEUTER (-е). Built from общий (unit 40) + жить: a «shared-living» place. Russian students say общага in speech." },
      ],
    },
    {
      id: "ru-u41l2",
      unit: 41,
      lesson: 2,
      title: "The subjects on the timetable",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the school and university subjects you study, and say which one you are good at.",
      items: [
        { id: "ru-u41l2-nauka", type: "vocab", front: "наука", reading: "nauka", meaning: "a science", accept: ["a field of study", "an academic discipline", "scholarship"], example: { jp: "Это очень трудная наука.", en: "That is a very hard science." }, drill: { jp: "Наука в этом университете сильная", en: "Science at this university is strong" }, hint: "na-U-ka — stress on U. FEMININE. Russian uses it far more widely than English «science»: any organised field of knowledge is a наука, including history and languages." },
        { id: "ru-u41l2-matematika", type: "vocab", front: "математика", reading: "matematika", meaning: "maths", accept: ["mathematics", "the subject of numbers", "arithmetic as a subject"], example: { jp: "Математика в школе была для меня трудной.", en: "Maths at school was hard for me." }, drill: { jp: "Математика мне очень нравится", en: "I really like maths" }, hint: "ma-te-MA-ti-ka — five syllables, stress on the third MA. FEMININE. Russian schoolchildren shorten it to матеша, but the full word is what you write." },
        { id: "ru-u41l2-fizika", type: "vocab", front: "физика", reading: "fizika", meaning: "physics", accept: ["the physics course", "the subject of physics"], example: { jp: "Физика и химия для меня одинаково трудные.", en: "Physics and chemistry are equally hard for me." }, drill: { jp: "Физика сегодня в большой аудитории", en: "Physics is in the big lecture room today" }, hint: "FI-zi-ka — stress on the FIRST syllable. FEMININE. Note the и after ф: Russian has no letter for the English «y» sound here." },
        { id: "ru-u41l2-khimiya", type: "vocab", front: "химия", reading: "khimiya", meaning: "chemistry", accept: ["the chemistry course", "the subject of chemistry"], example: { jp: "Химия — моя любимая наука.", en: "Chemistry is my favourite science." }, drill: { jp: "Химия была вчера утром", en: "Chemistry was yesterday morning" }, hint: "KHI-mi-ya — stress on the first syllable, and х is the rough back-of-the-throat sound from unit 2, not English «h». FEMININE." },
        { id: "ru-u41l2-literatura", type: "vocab", front: "литература", reading: "literatura", meaning: "literature", accept: ["the literature course", "books as a subject", "writing as a subject"], example: { jp: "Русская литература очень интересная.", en: "Russian literature is very interesting." }, drill: { jp: "Литература очень нравится моей сестре", en: "My sister really likes literature" }, hint: "li-te-ra-TU-ra — five syllables, stress on TU. FEMININE. A school subject as well as the books themselves." },
        { id: "ru-u41l2-geografiya", type: "vocab", front: "география", reading: "geografiya", meaning: "geography", accept: ["the geography course", "the subject of maps and places"], example: { jp: "На географии мы смотрели карту мира.", en: "In geography we looked at a map of the world." }, drill: { jp: "География всегда была очень интересной", en: "Geography was always very interesting" }, hint: "ge-a-GRA-fi-ya — five syllables, stress on GRA; the г is hard and the о reduces to a. FEMININE." },
      ],
    },
    {
      id: "ru-u41l3",
      unit: 41,
      lesson: 3,
      title: "What is on the page",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a piece of written work — the text, the page, the exercise, the rule it practises and the example under it.",
      items: [
        { id: "ru-u41l3-tekst", type: "vocab", front: "текст", reading: "tekst", meaning: "a text", accept: ["a passage", "the written words", "a piece of writing"], example: { jp: "Этот текст слишком трудный для меня.", en: "This text is too hard for me." }, drill: { jp: "Текст был слишком трудный для нас", en: "The text was too hard for us" }, hint: "One syllable, TEKST. MASCULINE. Four consonants in a row at the end — Russian is comfortable with that, so do not add a vowel." },
        { id: "ru-u41l3-stranitsa", type: "vocab", front: "страница", reading: "stranitsa", meaning: "a page", accept: ["a page of a book", "a sheet in a book", "a web page"], example: { jp: "На этой странице есть новое правило.", en: "There is a new rule on this page." }, drill: { jp: "Эта страница была совсем пустая", en: "That page was completely empty" }, hint: "stra-NI-tsa — stress on NI. FEMININE. ⚠️ Not страна from unit 8, which is a country: страна — страница differ only in the middle, and a learner who mixes them says «I live in a page»." },
        { id: "ru-u41l3-uprazhnenie", type: "vocab", front: "упражнение", reading: "uprazhnenie", meaning: "an exercise", accept: ["a practice task", "a drill", "a set of practice questions"], example: { jp: "Это упражнение было очень полезное.", en: "That exercise was very useful." }, drill: { jp: "Упражнение уже готово", en: "The exercise is ready" }, hint: "u-prazh-NYE-ni-ye — five syllables, stress on NYE. NEUTER (-е). A задание (unit 25) is the homework you are set; an упражнение is one numbered task inside it." },
        { id: "ru-u41l3-pravilo", type: "vocab", front: "правило", reading: "pravilo", meaning: "a rule", accept: ["a grammar rule", "a regulation", "a principle"], example: { jp: "Это правило очень важное.", en: "That rule is very important." }, drill: { jp: "Правило было очень трудное", en: "The rule was very hard" }, hint: "PRA-vi-lo — stress on the FIRST syllable. NEUTER (-о). The прав- family is large: правда is «the truth» (unit 22), правильный «correct» (unit 40), правильно «correctly» (unit 6). This one is the rule itself." },
        { id: "ru-u41l3-primer", type: "vocab", front: "пример", reading: "primer", meaning: "an example", accept: ["an instance", "a sample case", "a worked case"], example: { jp: "Учитель показывает нам хороший пример.", en: "The teacher is showing us a good example." }, drill: { jp: "Пример был под правилом", en: "The example was under the rule" }, hint: "pri-MYER — stress on the last syllable. MASCULINE. ⚠️ Not примерно from unit 37, which means «roughly», and not примерять from unit 18, «to try on» — same root, three different jobs. «Например» means «for example»." },
        { id: "ru-u41l3-sochinenie", type: "vocab", front: "сочинение", reading: "sochinenie", meaning: "an essay", accept: ["a composition", "a piece of written work", "a school essay"], example: { jp: "Моё сочинение было о моей семье.", en: "My essay was about my family." }, drill: { jp: "Сочинение нужно написать сегодня", en: "The essay has to be written today" }, hint: "sa-chi-NYE-ni-ye — five syllables, stress on NYE, and the first о reduces to a. NEUTER (-е). This is the standard Russian school essay; at university you write a доклад instead." },
      ],
    },
    {
      id: "ru-u41l4",
      unit: 41,
      lesson: 4,
      title: "What you come out with",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the shape of a degree — the terms, the placement, the presentation, the theory behind it and the certificate at the end.",
      items: [
        { id: "ru-u41l4-znanie", type: "vocab", front: "знание", reading: "znanie", meaning: "knowledge", accept: ["what someone knows", "command of a subject", "learning"], example: { jp: "Знание русского языка очень полезное.", en: "Knowledge of Russian is very useful." }, drill: { jp: "Знание всегда помогает нам", en: "Knowledge always helps us" }, hint: "ZNA-ni-ye — three syllables, stress on the first. NEUTER (-е). Built on знать from unit 4. In the plural знания it means the body of things you have learned." },
        { id: "ru-u41l4-diplom", type: "vocab", front: "диплом", reading: "diplom", meaning: "a degree certificate", accept: ["a diploma", "a qualification", "a degree"], example: { jp: "Мой диплом уже в этой папке.", en: "My degree certificate is already in this folder." }, drill: { jp: "Диплом будет готов в июне", en: "The certificate will be ready in June" }, hint: "di-PLOM — stress on the last syllable. MASCULINE. In Russia it also names the long final-year project you write to earn it: «я пишу диплом»." },
        { id: "ru-u41l4-semestr", type: "vocab", front: "семестр", reading: "semestr", meaning: "a term at university", accept: ["a semester", "half of the academic year", "a teaching term"], example: { jp: "Этот семестр был очень трудный.", en: "This term was very hard." }, drill: { jp: "Семестр начинается в сентябре", en: "The term starts in September" }, hint: "se-MYESTR — stress on MYESTR, which ends in three consonants. MASCULINE. A Russian academic year has two of them." },
        { id: "ru-u41l4-doklad", type: "vocab", front: "доклад", reading: "doklad", meaning: "a presentation", accept: ["a talk", "a paper read aloud", "a report to an audience"], example: { jp: "Её доклад был очень интересный.", en: "Her presentation was very interesting." }, drill: { jp: "Доклад будет в большой аудитории", en: "The talk will be in the big lecture room" }, hint: "da-KLAT — stress on the last syllable; the о reduces to a and the final д devoices to t (unit 6). MASCULINE. Spoken out loud to a room, unlike a сочинение, which is handed in." },
        { id: "ru-u41l4-praktika", type: "vocab", front: "практика", reading: "praktika", meaning: "a work placement", accept: ["practical training", "an internship", "hands-on practice"], example: { jp: "Моя практика была в большой фирме.", en: "My work placement was at a big firm." }, drill: { jp: "Практика будет летом в городе", en: "The placement will be in town in the summer" }, hint: "PRAK-ti-ka — stress on the first syllable. FEMININE. ⚠️ Glossed «a work placement», not «experience» — опыт from unit 25 already holds that word. На практике also means «in practice, in the real world»." },
        { id: "ru-u41l4-teoriya", type: "vocab", front: "теория", reading: "teoriya", meaning: "a theory", accept: ["theoretical work", "a set of principles", "the theory side"], example: { jp: "В теории это просто, но не в жизни.", en: "In theory that is simple, but not in real life." }, drill: { jp: "Теория без практики совсем не работает", en: "Theory without practice does not work at all" }, hint: "te-O-ri-ya — four syllables, stress on O. FEMININE. The opposite pole from практика, and Russian pairs them constantly: «теория и практика»." },
      ],
    },
  ],
};
