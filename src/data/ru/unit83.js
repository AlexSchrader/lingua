// RU Unit 83 — Книжный язык ("Bookish Russian") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u74–u86). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, ru/unit74.js §1–§5, and ru/unit82.js's header for
// why both Register slots were rethemed.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Register 2 — softening and formality". Softening in
// Japanese is a VERB-FORM system; in Russian it is `бы` (u47l3) plus a longer
// sentence, and u47 has it. What Russian has instead — and what no unit in
// u1–u82 teaches — is a sharp split between РАЗГОВОРНЫЙ and КНИЖНЫЙ register.
// u82 took the spoken half. This unit is the bookish half, including
// КАНЦЕЛЯРИТ, the officialese that Russian documents are written in and that a
// learner must READ long before they would ever write it.
//
// ⚠️ WHY THIS UNIT MATTERS MORE THAN IT LOOKS. A B1 learner of Russian meets
// канцелярит the first time they fill in a form, see a notice in a подъезд or
// read a contract — all of which happen in week one of living there. The
// vocabulary is not optional, and it is almost disjoint from the spoken
// vocabulary the course has taught so far. Every hint in this unit says PLAINLY
// which register the word belongs to, because a learner who says «ибо» in
// conversation has said something strange, and one who writes «короче» in an
// application has done worse.
//
// ⚠️ REFUSED on unit1.js §D (and this unit lost more candidates to the rule than
// any other in the block, because officialese is built almost entirely out of
// prefixed derivations of ordinary words):
//   `данные` (the participle-noun of `дать` u31 — an inflected form, so §5 bars
//        it outright) · `настоящим` «hereby» (the bare instrumental of
//        `настоящий` u40, same reason) · `постановление` and `устав` (ставить
//        u57) · `распоряжение` (порядок u15) · `приказ` and `указ` (сказать
//        u31) · `полномочие` (мочь u47) · `соответствие` (ответ u7) ·
//        `исполнение` (исполнять u74) · `согласно` (соглашаться u35) ·
//        `посредством` (средство u32) · `вследствие` (следствие u52) ·
//        `нежели` (a GLOSS collision — it means «than», which is `чем` u47) ·
//        `зачастую` (часто u2) · `непременно` (менять u24) · `исключительно`
//        (ключ u15) · `незамедлительно` (медленно u36) · `учреждение` (it is
//        NOT from the уч- of учить, but it is spelled as if it were, and the
//        уч- root is already at four taught words — refused as a reading trap
//        rather than a derivation).
// ⚠️ `присутствовать` and `отсутствовать` are carded as a PAIR, exactly as
//   прибыль/убыток are in u76: they are the two halves of one teaching point
//   and neither is reachable from `сутки` (u38l4), which only looks related.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT83 = {
  id: "ru-u83",
  lang: "ru",
  title: "Книжный язык",
  order: 83,
  stage: "b1",
  lessons: [
    {
      id: "ru-u83l1",
      unit: 83,
      lesson: 1,
      title: "The nouns a document is made of",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read an official notice: particulars held on record, the presence of documents, an organised event, the rules of procedure, a written record and which body to apply to.",
      items: [
        { id: "ru-u83l1-svedeniya", type: "vocab", front: "сведения", reading: "svedeniya", meaning: "information held on record", accept: ["particulars", "data", "official information"], example: { jp: "Сведения о доходах фирма даёт государству каждый год.", en: "The firm gives the state information about its income every year." }, drill: { jp: "Сведения о доходах нужны всем", en: "Information about income is needed by everyone" }, hint: "SVE-de-ni-ya — stress on the first syllable. NEUTER, and ⚠️ taught in the PLURAL because the singular сведение is almost never used. ⚠️ OFFICIAL REGISTER: in conversation a Russian says информация. From ведать, to know, which is not taught." },
        { id: "ru-u83l1-nalichie", type: "vocab", front: "наличие", reading: "nalichie", meaning: "the presence of something", accept: ["availability", "being present", "having in stock"], example: { jp: "Наличие документов проверяют у входа, поэтому паспорт нужен всем.", en: "The presence of documents is checked at the entrance, so everybody needs a passport." }, drill: { jp: "Наличие документов проверяют у входа", en: "The presence of documents is checked at the entrance" }, hint: "na-LI-chi-ye — stress on LI. NEUTER (-ие). ⚠️ PURE OFFICIALESE and unavoidable: «при наличии» means «if there is any», «в наличии» means «in stock». From лицо (unit 20) by a path nobody would follow — на+лиц+ие, what is there to be faced." },
        { id: "ru-u83l1-meropriyatie", type: "vocab", front: "мероприятие", reading: "meropriyatie", meaning: "an organised event", accept: ["a function", "a measure taken", "an official occasion"], example: { jp: "Мероприятие назначено на январь, хотя зал ещё совсем не готов.", en: "The event is scheduled for January, although the hall is not at all ready." }, drill: { jp: "Мероприятие назначено на январь", en: "The event is scheduled for January" }, hint: "me-ra-pri-YA-ti-ye — six syllables, stress on YA. NEUTER (-ие). ⚠️ A COMPOUND OF мера «a measure» AND принять «to take», and the officialese sense is exactly that: a measure taken. A праздник from unit 10 is a celebration; a мероприятие is something an organisation holds." },
        { id: "ru-u83l1-reglament", type: "vocab", front: "регламент", reading: "reglament", meaning: "the rules of procedure", accept: ["standing orders", "the regulations", "a time limit for speaking"], example: { jp: "Регламент не разрешает говорить больше пяти минут, даже начальнику.", en: "The rules of procedure do not allow anyone to speak for more than five minutes, not even the boss." }, drill: { jp: "Регламент этого не разрешает", en: "The rules of procedure do not allow that" }, hint: "reg-la-MENT — stress on the last syllable. MASCULINE. ⚠️ TWO SENSES AND BOTH ARE LIVE: the written rules of a body, and — at a meeting — the clock: «регламент пять минут». инструкция from unit 50 tells you how; регламент tells you what is permitted." },
        { id: "ru-u83l1-protokol", type: "vocab", front: "протокол", reading: "protokol", meaning: "a written record", accept: ["the minutes", "a police report", "an official report"], example: { jp: "Протокол подписали все, кто присутствовал на собрании.", en: "The record was signed by everyone who was present at the meeting." }, drill: { jp: "Протокол подписали все", en: "Everyone signed the record" }, hint: "pra-ta-KOL — stress on the last syllable, and both о before it reduce to a. MASCULINE. ⚠️ THE WORD YOU MEET FROM A POLICEMAN: «составить протокол» is to write someone up. Also the minutes of a meeting, and the diplomatic sense English has too." },
        { id: "ru-u83l1-instantsiya", type: "vocab", front: "инстанция", reading: "instantsiya", meaning: "an official body", accept: ["an authority", "a level of authority", "a tier of a court"], example: { jp: "В первой инстанции суд ему не помог, поэтому он написал в другую.", en: "In the court of first instance he got no help, so he wrote to another body." }, drill: { jp: "Это была первая инстанция", en: "That was the first instance" }, hint: "in-STAN-tsi-ya — stress on STAN. FEMININE (-я). ⚠️ The word for a RUNG of officialdom, and the phrase every Russian knows is «по всем инстанциям» — through every office in turn, which is what getting anything done feels like." },
      ],
    },
    {
      id: "ru-u83l2",
      unit: 83,
      lesson: 2,
      title: "The verbs a document uses",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say formally that someone is present or absent, that a party must be notified, that something is regulated or put on record, and that an activity will cease.",
      items: [
        { id: "ru-u83l2-prisutstvovat", type: "vocab", front: "присутствовать", reading: "prisutstvovat", meaning: "to be present", accept: ["to attend", "to be in attendance", "to be there officially"], example: { jp: "Присутствовать на собрании должны все сотрудники отдела.", en: "All the staff of the department must be present at the meeting." }, drill: { jp: "Присутствовать должны все сотрудники", en: "All the staff must be present" }, hint: "pri-SUT-stvo-vat — stress on SUT, and the тств is four consonants in a row. Imperfective infinitive, and ⚠️ it has no perfective. Takes на + the PREPOSITIONAL for the event. ⚠️ Nothing to do with сутки from unit 38, which is a 24-hour day — the roots only look alike." },
        { id: "ru-u83l2-otsutstvovat", type: "vocab", front: "отсутствовать", reading: "otsutstvovat", meaning: "to be absent", accept: ["to be missing", "to be away", "not to be present"], example: { jp: "Отсутствовать можно только по болезни, и об этом нужно уведомлять заранее.", en: "One may be absent only through illness, and notice of it must be given in advance." }, drill: { jp: "Отсутствовать можно только по болезни", en: "One may be absent only through illness" }, hint: "at-SUT-stvo-vat — stress on SUT, and the о reduces to a. Imperfective infinitive, no perfective. ⚠️ The exact mirror of the card above, and Russian officialese uses it of THINGS as much as people: «данные отсутствуют», the data is missing." },
        { id: "ru-u83l2-uvedomlyat", type: "vocab", front: "уведомлять", reading: "uvedomlyat", meaning: "to notify", accept: ["to give notice to", "to inform officially", "to advise formally"], example: { jp: "Уведомлять о ремонте нужно за месяц, иначе соседи будут возражать.", en: "Notice of repairs must be given a month in advance, otherwise the neighbours will object." }, drill: { jp: "Уведомлять нужно за месяц", en: "Notice must be given a month in advance" }, hint: "u-ve-dam-LYAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is уведомить. ⚠️ Takes о + the PREPOSITIONAL for the subject (unit 39). рассказывать from unit 34 is telling someone; уведомлять is putting them on notice, and the noun уведомление is what arrives in the post." },
        { id: "ru-u83l2-regulirovat", type: "vocab", front: "регулировать", reading: "regulirovat", meaning: "to regulate", accept: ["to govern by rules", "to adjust", "to bring under control"], example: { jp: "Регулировать такие тарифы может только государство, и это знают все.", en: "Only the state can regulate rates like that, and everyone knows it." }, drill: { jp: "Регулировать тарифы может государство", en: "The state can regulate rates" }, hint: "re-gu-LI-ra-vat — stress on LI, and the о reduces to a. Imperfective infinitive; the perfective is отрегулировать. ⚠️ Both the legal sense (to govern by rules) and the mechanical one (to adjust a machine). Same stem as регламент in lesson 1 and the two support each other." },
        { id: "ru-u83l2-fiksirovat", type: "vocab", front: "фиксировать", reading: "fiksirovat", meaning: "to record formally", accept: ["to register", "to put on record", "to fix in place"], example: { jp: "Фиксировать каждый случай нужно в протоколе, даже самый мелкий.", en: "Every case has to be recorded in the report, even the smallest." }, drill: { jp: "Фиксировать нужно каждый случай", en: "Every case has to be recorded" }, hint: "fik-SI-ra-vat — stress on SI, and the о reduces to a. Imperfective infinitive; the perfective is зафиксировать. ⚠️ записывать from unit 48 is writing something down; фиксировать is making it official — and in the physical sense it means to hold a thing still." },
        { id: "ru-u83l2-prekrashchat", type: "vocab", front: "прекращать", reading: "prekrashchat", meaning: "to cease", accept: ["to stop doing", "to discontinue", "to break off"], example: { jp: "Прекращать работу до января не будут, хотя денег почти нет.", en: "They will not cease work before January, although there is almost no money." }, drill: { jp: "Прекращать работу они не будут", en: "They will not cease work" }, hint: "pre-kra-SHCHAT — stress on the last syllable, and щ is the long soft sh. Imperfective infinitive; the perfective is прекратить. ⚠️ FORMAL: заканчиваться from unit 35 is what a thing does by itself, останавливаться (u35) is coming to a halt, and прекращать is a decision somebody took. «Прекратите!» is what a policeman says." },
      ],
    },
    {
      id: "ru-u83l3",
      unit: 83,
      lesson: 3,
      title: "Bookish words for ordinary ideas",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Recognise the bookish twin of a word you already know — ибо for потому что, весьма for очень, ныне for теперь — and know not to say it aloud.",
      items: [
        { id: "ru-u83l3-ibo", type: "vocab", front: "ибо", reading: "ibo", meaning: "for the reason that", accept: ["since in bookish style", "inasmuch as it is so", "because in writing"], example: { jp: "Решение было быстрым, ибо времени на спор уже не было.", en: "The decision was a quick one, for there was no longer time to argue." }, drill: { jp: "Решение было быстрым, ибо времени не было", en: "The decision was a quick one, for there was no time" }, hint: "I-ba — stress on the first syllable, and the final о reduces to a. ⚠️ THE BOOKISH потому что (unit 19), and it is three centuries old. You will read it in a classic and in a sermon; said in conversation it is a deliberate joke. `поскольку` from unit 79 is the neutral written option." },
        { id: "ru-u83l3-otnyud", type: "vocab", front: "отнюдь", reading: "otnyud", meaning: "not at all", accept: ["by no means", "far from it", "in no way"], example: { jp: "Это отнюдь не ошибка: цифры проверяли три раза.", en: "That is by no means a mistake: the figures were checked three times." }, drill: { jp: "Это отнюдь не ошибка", en: "That is by no means a mistake" }, hint: "at-NYUD — stress on the last syllable, the о reduces to a, and the final дь is soft and quiet. ⚠️ ALMOST ALWAYS WITH не FOLLOWING IT — «отнюдь не» is the whole phrase, and it is a flat, formal contradiction. Alone, «отнюдь!» is a complete bookish «certainly not»." },
        { id: "ru-u83l3-vesma", type: "vocab", front: "весьма", reading: "vesma", meaning: "exceedingly", accept: ["very in bookish style", "highly", "extremely"], example: { jp: "Доклад был весьма подробным, хотя читать его было очень скучно.", en: "The report was exceedingly detailed, although reading it was very dull." }, drill: { jp: "Доклад был весьма подробным", en: "The report was exceedingly detailed" }, hint: "ves-MA — stress on the last syllable, with the ь keeping the с soft. ⚠️ THE BOOKISH очень (unit 3), and the difference is purely register: identical meaning, and a Russian uses весьма in a report and очень everywhere else. Often ironic in speech: «весьма интересно»." },
        { id: "ru-u83l3-nyne", type: "vocab", front: "ныне", reading: "nyne", meaning: "nowadays", accept: ["at the present time", "in our day", "currently"], example: { jp: "Ныне этот завод принадлежит государству, а раньше принадлежал фирме.", en: "Nowadays that factory belongs to the state, and before it belonged to a firm." }, drill: { jp: "Ныне завод принадлежит государству", en: "Nowadays the factory belongs to the state" }, hint: "NY-ne — stress on the first syllable, with the hard ы from unit 5. ⚠️ THE BOOKISH теперь (unit 38). Also in the fixed «ныне и всегда» of church language, and in «ныне действующий» — currently in force — which is where a learner meets it in a document." },
        { id: "ru-u83l3-vpred", type: "vocab", front: "впредь", reading: "vpred", meaning: "henceforth", accept: ["from now on", "in future", "hereafter"], example: { jp: "Впредь такие документы нужно подписывать у начальника отдела.", en: "Henceforth documents like these must be signed by the head of department." }, drill: { jp: "Впредь нужно подписывать документы", en: "Henceforth the documents must be signed" }, hint: "VPRED — one syllable, and ⚠️ it opens with впр and ends with a soft дь; the whole word is consonants around one е. ⚠️ ALWAYS ABOUT A RULE CHANGING, and it carries a warning: «впредь будьте внимательнее» is what a boss writes. Not a synonym of потом (unit 4)." },
        { id: "ru-u83l3-tshchatelno", type: "vocab", front: "тщательно", reading: "tshchatelno", meaning: "thoroughly", accept: ["painstakingly", "carefully and in detail", "meticulously"], example: { jp: "Тщательно проверяя каждую цифру, он всё-таки нашёл ошибку.", en: "Checking every figure thoroughly, he did find the mistake." }, drill: { jp: "Он тщательно проверяет каждую цифру", en: "He checks every figure thoroughly" }, hint: "TSHCHA-tel-na — stress on the first syllable, and ⚠️ it OPENS WITH тщ, which is т followed immediately by the long soft sh and is one of the hardest clusters in the language. The final о reduces to a. ⚠️ The example is also unit 80's -я verbal adverb at work: проверяя, «checking»." },
      ],
    },
    {
      id: "ru-u83l4",
      unit: 83,
      lesson: 4,
      title: "The abstract nouns a report runs on",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the Latinate register a Russian report is written in: a norm, a facility, an aspect, a criterion, a status and a procedure.",
      items: [
        { id: "ru-u83l4-norma", type: "vocab", front: "норма", reading: "norma", meaning: "a norm", accept: ["the normal level", "a quota", "an accepted level"], example: { jp: "Норма для этого возраста другая, и врач об этом сказал сразу.", en: "The norm for that age is different, and the doctor said so at once." }, drill: { jp: "Норма для этого возраста другая", en: "The norm for that age is different" }, hint: "NOR-ma — stress on the first syllable. FEMININE (-а). ⚠️ Also the Soviet-era work quota — «выполнить норму» — and in the plural «нормы» it means standards or regulations. правило from unit 41 is a rule you follow; a норма is a level you measure against." },
        { id: "ru-u83l4-obekt", type: "vocab", front: "объект", reading: "obekt", meaning: "an object", accept: ["a facility", "a site", "the target of something"], example: { jp: "Объект начали строить в январе, хотя денег ещё почти не было.", en: "They began building the facility in January, although there was almost no money yet." }, drill: { jp: "Объект начали строить в январе", en: "They began building the facility in January" }, hint: "ab-YEKT — stress on the last syllable, the о reduces to a, and the ъ keeps б and е apart (unit 3). MASCULINE. ⚠️ IN OFFICIAL RUSSIAN IT USUALLY MEANS A BUILDING SITE, not an object on a table: «строительный объект». вещь from unit 3 is a thing you can pick up." },
        { id: "ru-u83l4-aspekt", type: "vocab", front: "аспект", reading: "aspekt", meaning: "an aspect", accept: ["a facet", "a side of a question", "an angle on something"], example: { jp: "Этот аспект в докладе не обсуждали, и зря: он был самым важным.", en: "That aspect was not discussed in the report, and that was a pity: it was the most important one." }, drill: { jp: "Этот аспект не обсуждали", en: "That aspect was not discussed" }, hint: "as-PEKT — stress on the last syllable. MASCULINE. ⚠️ Nothing to do with `вид`, which is the GRAMMATICAL aspect of unit 31's title — Russian uses two different words where English uses one. сторона from unit 33 is a side in the physical sense." },
        { id: "ru-u83l4-kriteriy", type: "vocab", front: "критерий", reading: "kriteriy", meaning: "a criterion", accept: ["a yardstick", "a test for judging", "the basis for a decision"], example: { jp: "Критерий здесь один: сколько стоит и сколько работает.", en: "There is one criterion here: what it costs and how long it works." }, drill: { jp: "Критерий здесь только один", en: "There is only one criterion here" }, hint: "kri-TE-ri-y — stress on TE. MASCULINE (-й). ⚠️ Its plural is критЕрии, with two и in a row, and that is the form a report uses. условие from unit 34 is a condition that must be met; a критерий is how you judge between options." },
        { id: "ru-u83l4-status", type: "vocab", front: "статус", reading: "status", meaning: "a status", accept: ["standing", "official position", "legal status"], example: { jp: "Статус этого документа никто не знает, поэтому его никто и не подписывает.", en: "Nobody knows the status of that document, so nobody signs it either." }, drill: { jp: "Статус документа никто не знает", en: "Nobody knows the status of the document" }, hint: "STA-tus — stress on the first syllable. MASCULINE. ⚠️ Official and legal — «статус беженца», refugee status — and in modern speech also social standing. должность from unit 42 is the post you hold; статус is what you are entitled to." },
        { id: "ru-u83l4-protsedura", type: "vocab", front: "процедура", reading: "protsedura", meaning: "a procedure", accept: ["a set process", "the formal steps", "a routine treatment"], example: { jp: "Процедура занимает месяц, даже если все документы готовы заранее.", en: "The procedure takes a month, even if all the documents are ready in advance." }, drill: { jp: "Процедура занимает месяц", en: "The procedure takes a month" }, hint: "pra-tse-DU-ra — stress on DU, and the о reduces to a. FEMININE (-а). ⚠️ TWO WORLDS, SAME WORD: the bureaucratic steps, and a medical treatment — «процедуры в больнице» is what a Russian doctor prescribes. способ from unit 32 is a way of doing something; процедура is the official order of it." },
      ],
    },
  ],
};
