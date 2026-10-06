// RU Unit 66 — Порядок действий ("The order of actions") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 1 (u61–u73). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, and THIS BAND's conventions in ru/unit61.js §1–§8.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Work and process` AND THE WORK HALF IS SPENT TWICE
// OVER. A1's u25 Работа и учёба (офис · начальник · коллега · зарплата · отпуск ·
// фирма …) and A2's u42 Работа и карьера (служба · отдел · должность · карьера ·
// смена · проект · клиент · заказ · договор · премия · командировка · резюме ·
// вакансия · навык · обязанность · нанимать · увольнять · управлять …) are 48
// cards of the workplace between them. u32 also carded способ · средство ·
// инструмент · качество · форма.
//
// SO THIS UNIT TAKES THE PROCESS HALF AND ONLY THAT: how an undertaking is
// divided into stages, how you set about it and finish it, where in the sequence
// a thing sits, and how it runs. The measured hole is real — a learner could
// name a проект (u42), a задача and a метод (u52), and had no word for a stage,
// a phase, the course of the thing, an outcome, or for setting about it at all.
//
// ⚠️ NINE REFUSED, and most on unit1.js §D's derivation test:
//   `очередной` and `поочерёдно` (очередь u30) · `последовательность` and
//   `последовательно` (последний u21 AND после u33) · `постепенный` (постепенно
//   u38) · `срочный` (срочно u12) · `начальный` (начало u24) · `конечный`
//   (конечно u6) · `повторный` (повторять u34) · `подготовка` and
//   `готовность` (готовить u29 · приготовить u31 · готов u24 — the готов- root is
//   at three already) · `итоговый` (итог u37).
//   `немедленно` — NOT §D: it is не + медленно (u36), and unit 61 §5(d) bars the
//        не+X shape outright. Its sense is carried by сразу (u22), already taught.
//   `сперва` — refused on the GLOSS, the same ground as приблизительно at u64:
//        `сначала` (u24) is glossed "at first" and means the same thing, so the
//        produce card would prompt for one synonym and reject the other.
//   `текущий` and `предстоящий` — PARTICIPLES, which are Grammar 6–8's subject
//        and therefore block 2's to spend. Also inflected forms of течь/
//        предстоять under unit1.js §5.
//   `исполнять` — a near-synonym of `выполнять`, which this unit cards. One sense
//        does not get two prompts.
//
// ⚠️ THREE ALLOWED ON PREFIX GROUNDS (unit31.js §3), with the reasoning:
//   `осуществлять` vs `существовать` (u52) — three derivational steps, and
//        nothing about "to exist" hands a learner "to put into effect".
//   `затягивать` vs `тянуть` (u57) — the prefix shifts the sense from physical
//        pulling to dragging something out in TIME, which is the lesson's job.
//   `отменять` vs `менять` (u24) — "to change" does not give "to call off".
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT66 = {
  id: "ru-u66",
  lang: "ru",
  title: "Порядок действий",
  order: 66,
  stage: "b1",
  lessons: [
    {
      id: "ru-u66l1",
      unit: 66,
      lesson: 1,
      title: "Naming the stages",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Divide an undertaking into its parts — a process, a stage, a phase, the course it is taking, the outcome it reaches, and the pause in the middle.",
      items: [
        { id: "ru-u66l1-protsess", type: "vocab", front: "процесс", reading: "protsess", meaning: "a process", accept: ["an unfolding sequence", "the way something develops", "a course of change"], example: { jp: "Это долгий процесс, и приступать к нему нужно заранее, потому что времени мало.", en: "That is a long process, and one must set about it in advance, because there is little time." }, drill: { jp: "Это очень долгий процесс", en: "That is a very long process" }, hint: "pra-TSESS — stress on TSESS, and the сс is held a beat longer. MASCULINE. ⚠️ In legal Russian it also means a court case, which is why «судебный процесс» is a trial." },
        { id: "ru-u66l1-etap", type: "vocab", front: "этап", reading: "etap", meaning: "a stage in a plan", accept: ["a step of a bigger job", "one leg of something", "a planned stage"], example: { jp: "Первый этап мы уже завершили, но второй будет гораздо труднее.", en: "We have already completed the first stage, but the second will be far harder." }, drill: { jp: "Это был первый этап", en: "That was the first stage" }, hint: "e-TAP — stress on the last syllable, and the э is э, not е. MASCULINE. ⚠️ An этап is a PLANNED division of work — the word a project manager uses. A стадия is what the thing is going through whether you planned it or not." },
        { id: "ru-u66l1-stadiya", type: "vocab", front: "стадия", reading: "stadiya", meaning: "a period a thing passes through", accept: ["one point in a development", "a state something has reached", "a stage of a disease"], example: { jp: "Болезнь была уже в поздней стадии, поэтому лечиться пришлось долго.", en: "The illness was already at a late phase, so the treatment had to go on for a long time." }, drill: { jp: "Это уже поздняя стадия", en: "That is already a late phase" }, hint: "STA-di-ya — stress on the first syllable. FEMININE (-я). ⚠️ The contrast with этап is the card: an этап is planned by somebody, a стадия is simply reached. Medicine and science use стадия almost always." },
        { id: "ru-u66l1-khod", type: "vocab", front: "ход", reading: "khod", meaning: "the course of something", accept: ["the way a thing is going", "progress through something", "a move in a game"], example: { jp: "Ход работы мне не нравится, но менять что-то уже поздно.", en: "I do not like the course the work is taking, but it is already too late to change anything." }, drill: { jp: "Ход дела мне не нравится", en: "I do not like the course of the matter" }, hint: "KHOD — one syllable, opening with the scraping х. MASCULINE. It is the noun behind ходить from unit 36. ⚠️ TWO IDIOMS A LEARNER MEETS AT ONCE: «в ходе работы» means during the work, and «ваш ход» means it is your move." },
        { id: "ru-u66l1-iskhod", type: "vocab", front: "исход", reading: "iskhod", meaning: "how a thing turns out", accept: ["the end result of events", "the way it all ended", "the upshot of the affair"], example: { jp: "Исход этого спора зависел не от доводов, а от того, кто говорил громко.", en: "The outcome of that argument depended not on the arguments but on who spoke loudly." }, drill: { jp: "Исход был совсем другой", en: "The outcome was completely different" }, hint: "is-KHOD — stress on the last syllable. MASCULINE. ⚠️ Результат from unit 30 is what you measured at the end; исход is how the whole affair turned out, and it carries a sense of something that could have gone either way." },
        { id: "ru-u66l1-pauza", type: "vocab", front: "пауза", reading: "pauza", meaning: "a pause", accept: ["a gap in the middle", "a break in speech", "a lull"], example: { jp: "После его слов была долгая пауза, и никто не хотел говорить первым.", en: "After his words there was a long pause, and nobody wanted to speak first." }, drill: { jp: "Была очень долгая пауза", en: "There was a very long pause" }, hint: "PA-u-za — three syllables, stress on the first, and ау is two separate vowels. FEMININE (-а). ⚠️ Перерыв from unit 12 is a scheduled break with a sign on the door; a пауза is a silence that just happens." },
      ],
    },
    {
      id: "ru-u66l2",
      unit: 66,
      lesson: 2,
      title: "Setting about it and finishing it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Run a job from start to finish — set about it, carry it out, put it into effect, bring it to completion, put a stop to it, and resume it.",
      items: [
        { id: "ru-u66l2-pristupat", type: "vocab", front: "приступать", reading: "pristupat", meaning: "to set about", accept: ["to get down to", "to begin work on", "to start in on something"], example: { jp: "Приступать к работе без плана было бы ошибкой, которую потом трудно исправлять.", en: "To set about the work without a plan would be a mistake which is hard to put right afterwards." }, drill: { jp: "Пора приступать к работе", en: "It is time to set about the work" }, hint: "pris-tu-PAT — stress on the last syllable. IMPERFECTIVE; the perfective is приступить. It takes к + the DATIVE: приступать к работе. ⚠️ It is the formal start-work verb; for an ordinary beginning Russian says «начинать»." },
        { id: "ru-u66l2-vypolnyat", type: "vocab", front: "выполнять", reading: "vypolnyat", meaning: "to carry out", accept: ["to perform a task", "to fulfil", "to do what was asked"], example: { jp: "Он выполняет любое задание быстро, но качество не всегда хорошее.", en: "He carries out any assignment quickly, but the quality is not always good." }, drill: { jp: "Нужно выполнять эту работу", en: "This work must be carried out" }, hint: "vy-pal-NYAT — stress on the last syllable. IMPERFECTIVE; the perfective is выполнить. It sits on полный from unit 23 — literally to make full — and it goes with задание · работа · план · обязанность." },
        { id: "ru-u66l2-osushchestvlyat", type: "vocab", front: "осуществлять", reading: "osushchestvlyat", meaning: "to put into effect", accept: ["to implement", "to bring about in practice", "to realise a plan"], example: { jp: "Осуществлять такой проект без денег государства вряд ли можно.", en: "Putting such a project into effect without the money of the state is hardly possible." }, drill: { jp: "Трудно осуществлять такой план", en: "It is hard to implement such a plan" }, hint: "a-su-shchist-VLYAT — five syllables, stress on the last, with the long щ from unit 3. IMPERFECTIVE; the perfective is осуществить. ⚠️ FORMAL and almost always written. It is three steps from существовать at unit 52 — see this unit's header." },
        { id: "ru-u66l2-zavershat", type: "vocab", front: "завершать", reading: "zavershat", meaning: "to bring to completion", accept: ["to finish off", "to wind up", "to conclude a piece of work"], example: { jp: "Завершать работу приходится всегда в спешке, потому что срока уже нет.", en: "The work always has to be brought to completion in a hurry, because there is no time left." }, drill: { jp: "Пора завершать эту работу", en: "It is time to bring this work to completion" }, hint: "za-vir-SHAT — stress on the last syllable. IMPERFECTIVE; the perfective is завершить. ⚠️ Заканчиваться from unit 35 is a thing coming to an end by itself; завершать is a person deliberately finishing it, and it is the formal one." },
        { id: "ru-u66l2-prekrashchat", type: "vocab", front: "прекращать", reading: "prekrashchat", meaning: "to put a stop to", accept: ["to cease", "to break something off", "to discontinue"], example: { jp: "Прекращать работу на этой стадии было бы ошибкой, хотя денег почти нет.", en: "To put a stop to the work at this phase would be a mistake, although there is almost no money." }, drill: { jp: "Нужно прекращать этот спор", en: "This argument must be stopped" }, hint: "pri-kra-SHCHAT — stress on the last syllable. IMPERFECTIVE; the perfective is прекратить. ⚠️ Завершать finishes something properly; прекращать stops it, finished or not. Останавливаться from unit 35 is physical." },
        { id: "ru-u66l2-vozobnovlyat", type: "vocab", front: "возобновлять", reading: "vozobnovlyat", meaning: "to resume", accept: ["to start again after a break", "to renew", "to pick something up again"], example: { jp: "Работу будут возобновлять только весной, когда станет теплее.", en: "The work will be resumed only in the spring, when it gets warmer." }, drill: { jp: "Работу будут возобновлять весной", en: "The work will be resumed in the spring" }, hint: "va-zab-nav-LYAT — four syllables, stress on the last. IMPERFECTIVE; the perfective is возобновить. It is built on новый from unit 19 — to make new again — and it is the partner of прекращать: you resume what was stopped." },
      ],
    },
    {
      id: "ru-u66l3",
      unit: 66,
      lesson: 3,
      title: "Where in the sequence",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place a step in the sequence — preliminary, intermediate, final and settled — and say on the eve of, subsequently, and from now on.",
      items: [
        { id: "ru-u66l3-predvaritelnyy", type: "vocab", front: "предварительный", reading: "predvaritelnyy", meaning: "preliminary", accept: ["done beforehand", "provisional", "coming before the real one"], example: { jp: "Это предварительный план, и он вполне может меняться после собрания.", en: "That is a preliminary plan, and it may perfectly well change after the meeting." }, drill: { jp: "Это только предварительный план", en: "That is only a preliminary plan" }, hint: "prid-va-RI-til-nyy — five syllables, stress on RI. ⚠️ The set phrase «предварительный заказ» is an advance booking, and «предварительно» as an adverb means in advance — the job заранее from unit 38 also does, but предварительно is the official one." },
        { id: "ru-u66l3-promezhutochnyy", type: "vocab", front: "промежуточный", reading: "promezhutochnyy", meaning: "intermediate", accept: ["in between two stages", "halfway", "neither first nor last"], example: { jp: "Промежуточный результат был хороший, но окончательный оказался гораздо хуже.", en: "The intermediate result was good, but the final one turned out far worse." }, drill: { jp: "Это промежуточный результат", en: "That is an intermediate result" }, hint: "pra-mi-ZHU-tach-nyy — five syllables, stress on ZHU. It is built on между from unit 32. ⚠️ An «промежуточный экзамен» is a mid-course exam, which is how a Russian student meets the word first." },
        { id: "ru-u66l3-okonchatelnyy", type: "vocab", front: "окончательный", reading: "okonchatelnyy", meaning: "final and settled", accept: ["definitive", "not to be changed", "the one that stands"], example: { jp: "Это окончательный ответ, и оспаривать его уже никто не будет.", en: "That is the final answer, and nobody will contest it now." }, drill: { jp: "Это был окончательный ответ", en: "That was the final answer" }, hint: "a-kan-CHA-til-nyy — five syllables, stress on CHA. ⚠️ Последний from unit 21 means last in a row; окончательный means settled and not open to change. A decision is окончательное, a bus is последний." },
        { id: "ru-u66l3-nakanune", type: "vocab", front: "накануне", reading: "nakanune", meaning: "on the eve of", accept: ["the day before", "just before a big day", "on the night before"], example: { jp: "Накануне экзамена он не спал почти всю ночь и утром ничего не помнил.", en: "On the eve of the exam he hardly slept all night and in the morning remembered nothing." }, drill: { jp: "Накануне праздника все отдыхали", en: "On the eve of the holiday everyone rested" }, hint: "na-ka-NU-ni — four syllables, stress on NU. It takes the GENITIVE: накануне праздника. ⚠️ Вчера from unit 17 is yesterday counted from today; накануне is the day before SOME OTHER day, which is why a story uses it and a conversation uses вчера." },
        { id: "ru-u66l3-vposledstvii", type: "vocab", front: "впоследствии", reading: "vposledstvii", meaning: "later on as it turned out", accept: ["afterwards in the event", "in the time that followed", "as things later went"], example: { jp: "Впоследствии оказалось, что он был прав, но тогда никто его не поддержал.", en: "Subsequently it turned out that he had been right, but at the time nobody backed him." }, drill: { jp: "Впоследствии он стал начальником", en: "Subsequently he became the boss" }, hint: "vpa-SLED-stvi-i — stress on SLED, and it ends in a double и. ⚠️ Потом from unit 4 and затем from unit 38 both mean next; впоследствии looks back from a later point at what came after, and it belongs to a written account." },
        { id: "ru-u66l3-vpred", type: "vocab", front: "впредь", reading: "vpred", meaning: "from now on", accept: ["henceforth", "in future", "starting from today"], example: { jp: "Впредь все документы нужно отправлять заранее, и без этого их не будут принимать.", en: "From now on all documents must be sent in advance, and without that they will not be accepted." }, drill: { jp: "Впредь нужно делать это заранее", en: "From now on this must be done in advance" }, hint: "VPRED — one syllable, and the ь is dropped from the reading. ⚠️ It is a WARNING word: a Russian who says впредь is telling you the old way has stopped. Теперь from unit 38 simply means nowadays." },
      ],
    },
    {
      id: "ru-u66l4",
      unit: 66,
      lesson: 4,
      title: "How it runs, and when it stops",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how a job is being run — at the same time, alongside each other, at regular intervals, thoroughly — and when it is being dragged out or called off.",
      items: [
        { id: "ru-u66l4-odnovremenno", type: "vocab", front: "одновременно", reading: "odnovremenno", meaning: "at the same time", accept: ["simultaneously", "both at once", "in the same moment"], example: { jp: "Он не может одновременно выполнять два проекта, поэтому один придётся отменять.", en: "He cannot carry out two projects at the same time, so one will have to be called off." }, drill: { jp: "Нельзя делать два дела одновременно", en: "One cannot do two things at the same time" }, hint: "ad-na-vri-MEN-na — five syllables, stress on MEN. Built from один and время, both unit 11. ⚠️ Вместе from unit 7 means together in one place; одновременно means in the same moment, which is a different claim." },
        { id: "ru-u66l4-parallelno", type: "vocab", front: "параллельно", reading: "parallelno", meaning: "alongside each other", accept: ["in parallel", "side by side as two tracks", "running together"], example: { jp: "Эти две группы работали параллельно и узнали об этом только потом.", en: "Those two groups worked alongside each other and only found out about it afterwards." }, drill: { jp: "Они работают параллельно весь год", en: "They work alongside each other all year" }, hint: "pa-ra-LEL-na — four syllables, stress on LEL, and the лл is held longer. ⚠️ Одновременно is about TIME; параллельно is about two separate tracks that do not meet — which is exactly the sense the example teaches." },
        { id: "ru-u66l4-regulyarno", type: "vocab", front: "регулярно", reading: "regulyarno", meaning: "at regular intervals", accept: ["regularly", "on a fixed schedule", "with nothing skipped"], example: { jp: "Если проверять документы регулярно, такой ошибки больше не будет.", en: "If the documents are checked at regular intervals, there will be no more mistake of that kind." }, drill: { jp: "Нужно проверять документы регулярно", en: "The documents must be checked regularly" }, hint: "ri-gu-LYAR-na — four syllables, stress on LYAR. ⚠️ Часто from unit 2 counts how MANY times; регулярно says the times are evenly spaced, and постоянно from unit 38 says there is no gap at all." },
        { id: "ru-u66l4-tshchatelno", type: "vocab", front: "тщательно", reading: "tshchatelno", meaning: "thoroughly", accept: ["painstakingly", "with great care", "leaving nothing out"], example: { jp: "Он тщательно проверил каждую строку, поэтому ошибки почти не осталось.", en: "He checked every line thoroughly, so almost no mistake was left." }, drill: { jp: "Нужно тщательно проверять документы", en: "The documents must be checked thoroughly" }, hint: "TSHCHA-til-na — stress on the first syllable, and ⚠️ THE OPENING тщ IS THE HARDEST CLUSTER IN THIS BAND: t + the long щ, with no vowel between. Внимательно would be attentively; тщательно is thorough to the point of fussiness." },
        { id: "ru-u66l4-zatyagivat", type: "vocab", front: "затягивать", reading: "zatyagivat", meaning: "to spin out", accept: ["to let a thing run on too long", "to delay by stretching", "to make something last"], example: { jp: "Не надо затягивать этот разговор, сегодня мы ничего не решим.", en: "There is no need to drag this conversation out; today we will decide nothing." }, drill: { jp: "Нельзя затягивать эту работу", en: "This work must not be dragged out" }, hint: "za-TYA-gi-vat — stress on TYA. IMPERFECTIVE; the perfective is затянуть. ⚠️ Its physical sense is to pull a knot tight — тянуть from unit 57 with за-. The time sense is the one this lesson teaches, and «дело затянулось» means the matter dragged on." },
        { id: "ru-u66l4-otmenyat", type: "vocab", front: "отменять", reading: "otmenyat", meaning: "to call off", accept: ["to cancel", "to revoke", "to declare something will not happen"], example: { jp: "Собрание будут отменять в последний момент, и об этом узнают не все.", en: "The meeting will be called off at the last moment, and not everyone will find out about it." }, drill: { jp: "Собрание придётся отменять", en: "The meeting will have to be called off" }, hint: "at-mi-NYAT — stress on the last syllable. IMPERFECTIVE; the perfective is отменить. ⚠️ Менять from unit 24 swaps one thing for another; отменять makes the thing not happen at all. A law, a train and a meeting are all отменяются." },
      ],
    },
  ],
};
