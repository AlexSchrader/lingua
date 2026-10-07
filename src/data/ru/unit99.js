// RU Unit 99 — Достоверность и подлог ("Reliability and forgery") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 1 (u98–u110). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit61.js §1–§8, and
// ru/unit98.js §1–§7c for this band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Evidence and sources" AND THREE EARLIER UNITS HAVE
// ALREADY TAKEN THE OBVIOUS HALF OF IT. u39 Мнение и речь owns `факт` and
// `доказательство`; u52 Причина и вывод owns `источник`; u73 Опыт и
// воспоминание owns the KEEPING of a record (архив · летопись · мемуары ·
// дневник · предание · наследие); u50 Документы и порядок owns the FORM
// (справка · анкета · бланк · оригинал · свидетельство · сноска · список).
// So u99 takes the layer none of them has: WHETHER A CLAIM HOLDS — judging a
// source, the figures a claim rests on, the paper trail that can be audited,
// and the four ways a record is faked.
//
// ⚠️ THE TITLE DOES NOT NAME `ссылка`, WHICH WOULD BE THE NATURAL WORD, BECAUSE
// `ссылка` IS TAKEN (u43, "a link") AND `ссылаться` IS THE SAME LEXEME. The
// unit says "подлог" instead, which is lesson 4's own subject. The same split as
// u92's `прошлое` and u90's `край`.
//
// ⚠️ FIVE CANDIDATES REFUSED, each for a stated reason:
//   `цитата` — `цитировать` is TAKEN (u79). Same lexeme, so the quotation itself
//        cannot be a front; `дословно` carries the job instead.
//   `данные` — THE SUBSTANTIVISED PLURAL of `данный`, and `давать` is u23.
//        unit98.js §4. `статистика` is the card that fills the slot.
//   `первичный` — `первый` (u21) hands it over. `первоисточник` is a compound
//        and opaque ("first-source"), which is why that one stands.
//   `проверка` · `показание` · `очевидец` — `проверять` (u59), `показывать`
//        (u23) and `очевидный` (u64) hand all three over. `сверка` · `ревизия` ·
//        `экспертиза` are what a checking unit can legally card.
//   `хроника` — legal, but it would have to be glossed "a chronicle", which is
//        already `летопись`'s gloss (u73): one prompt, two right answers through
//        `normalizeMeaning`. Dropped rather than reglossed into vagueness.
//   `фальшивка` · `подшивка` · `библиография` · `огласка` · `вымысел` ·
//        `подтверждение` — all legal, all dropped for count at 24.
//
// ⚠️ `досье` HAS NO STRESS CAPS IN THE USUAL PLACE because it is INDECLINABLE
// and French-stressed on the last syllable; the hint says so. It is the first
// indeclinable noun in this block and the class (пальто · метро · такси) is
// already familiar from A1.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT99 = {
  id: "ru-u99",
  lang: "ru",
  title: "Достоверность и подлог",
  order: 99,
  stage: "b2",
  lessons: [
    {
      id: "ru-u99l1",
      unit: 99,
      lesson: 1,
      title: "Judging a source",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say whether a source can be relied on — reliable, genuine, the original record, unsigned — and name the two formal ways a claim gets checked.",
      items: [
        { id: "ru-u99l1-dostovernyy", type: "vocab", front: "достоверный", reading: "dostovernyy", meaning: "that can be relied on as true", accept: ["known to be accurate", "trustworthy as a report", "borne out by checking"], example: { jp: "Пока у нас нет достоверных сведений, говорить об этом рано.", en: "As long as we have no reliable information, it is too early to speak about it." }, drill: { jp: "Достоверный источник найти очень трудно", en: "A reliable source is very hard to find" }, hint: "das-ta-VER-nyy — stress on VER, and both о before it reduce to a. ADJECTIVE. Built on `верить` from unit 22 with досто- and the е-grade, which makes it a two-step derivation rather than a giveaway. ⚠️ Of information and records, never of people: a trustworthy person is надёжный, from unit 56." },
        { id: "ru-u99l1-podlinnyy", type: "vocab", front: "подлинный", reading: "podlinnyy", meaning: "genuine and not a copy", accept: ["the real thing and not an imitation", "authentic in origin", "not faked at all"], example: { jp: "Специалисты признали, что это письмо подлинное, хотя бумага оказалась новой.", en: "The specialists accepted that this letter was genuine, although the paper turned out to be new." }, drill: { jp: "Подлинный оригинал хранится в архиве", en: "The genuine original is kept in the archive" }, hint: "POD-lin-nyy — stress on the first syllable. ADJECTIVE. ⚠️ ALSO means true in the deepest sense, of feelings and motives: подлинная причина, the real reason underneath. The noun подлинник is the original document itself, beside `оригинал` from unit 50." },
        { id: "ru-u99l1-pervoistochnik", type: "vocab", front: "первоисточник", reading: "pervoistochnik", meaning: "the original record a claim comes from", accept: ["the first place something was written down", "the document everything else quotes", "the earliest surviving account"], example: { jp: "Проверить этот факт можно только по первоисточнику, которого у нас нет.", en: "This fact can only be checked against the original record, which we do not have." }, drill: { jp: "Первоисточник этой цифры никто не знает", en: "Nobody knows the original record this figure comes from" }, hint: "per-va-is-TOCH-nik — five syllables, stress on TOCH, and the о reduces to a. MASCULINE. A compound of первый from unit 21 and `источник` from unit 52 — first-source. ⚠️ Narrower than источник: a источник is any source, a первоисточник is the one at the bottom of the chain." },
        { id: "ru-u99l1-anonimnyy", type: "vocab", front: "анонимный", reading: "anonimnyy", meaning: "with no name attached to it", accept: ["made without naming the author", "coming from an unnamed hand", "left unsigned on purpose"], example: { jp: "Анонимное письмо пришло в редакцию, однако проверять его никто не стал.", en: "An anonymous letter arrived at the editorial office, yet nobody set about checking it." }, drill: { jp: "Анонимный упрёк всегда остаётся голословным", en: "An anonymous reproach always stays unsupported" }, hint: "a-na-NIM-nyy — stress on NIM, and both о reduce to a. ADJECTIVE. ⚠️ The noun is аноним, the anonymous writer, and анонимность is the state. Bureaucratic Russian loves анонимный опрос, an anonymous survey — see lesson 2." },
        { id: "ru-u99l1-ekspertiza", type: "vocab", front: "экспертиза", reading: "ekspertiza", meaning: "an expert examination ordered to settle a question", accept: ["a formal assessment by specialists", "an official technical examination", "a specialist ruling on a thing"], example: { jp: "Без экспертизы суд не станет решать этот спор.", en: "Without an expert examination the court will not set about settling this dispute." }, drill: { jp: "Экспертиза показала совсем другое", en: "The expert examination showed something quite different" }, hint: "eks-per-TI-za — stress on TI. FEMININE (-а). ⚠️ NOT the English expertise, which is a person's skill — Russian экспертиза is the PROCEDURE, something a court or a ministry orders. Every Russian criminal case has one: судебная экспертиза." },
        { id: "ru-u99l1-verifikatsiya", type: "vocab", front: "верификация", reading: "verifikatsiya", meaning: "the checking of a claim against the facts", accept: ["the step of confirming something is so", "a formal check for truth", "the testing of a statement against evidence"], example: { jp: "Верификация этих цифр шла целый месяц, зато теперь им можно верить.", en: "The checking of these figures went on a whole month, but now they can be trusted." }, drill: { jp: "Верификация этих цифр очень важна", en: "The checking of these figures is very important" }, hint: "ve-ri-fi-KA-tsi-ya — stress on KA. FEMININE (-я). A recent loan, and the word Russian journalism uses for fact-checking. ⚠️ Distinguish it from `сверка` in lesson 3: a сверка compares two RECORDS, a верификация tests a CLAIM against the world." },
      ],
    },
    {
      id: "ru-u99l2",
      unit: 99,
      lesson: 2,
      title: "The figures behind a claim",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the numbers a claim rests on — the collected figures, the sample, the poll, the digest — and set something out either in your own words or word for word.",
      items: [
        { id: "ru-u99l2-statistika", type: "vocab", front: "статистика", reading: "statistika", meaning: "the figures collected about something", accept: ["the numbers gathered on a question", "a body of collected figures", "the quantitative record of something"], example: { jp: "Статистика показывает одно, а чиновники говорят совсем другое.", en: "The figures show one thing, and the officials say something quite different." }, drill: { jp: "Эта статистика никому не нравится", en: "Nobody likes these figures" }, hint: "sta-TIS-ti-ka — stress on TIS. FEMININE (-а). ⚠️ Both the collected numbers and the academic subject, like the English word — but Russian also uses it loosely of any one figure: «такая статистика». The specialist is a статистик." },
        { id: "ru-u99l2-vyborka", type: "vocab", front: "выборка", reading: "vyborka", meaning: "the part of a whole that is studied to stand for it", accept: ["a sample drawn from a larger group", "the slice measured to represent everything", "a selected subset for study"], example: { jp: "Если выборка слишком маленькая, доверять такому проценту нельзя.", en: "If the sample is too small, such a percentage cannot be trusted." }, drill: { jp: "Выборка оказалась слишком малой", en: "The sample turned out to be too small" }, hint: "VY-bar-ka — stress on the first syllable, and the о reduces to a. FEMININE (-а). From выбирать, to choose, from unit 18 — but the plain noun выбор is NOT taught in this course, so this is the first word of that family you meet. ⚠️ The key question about any выборка is its size: выборка из тысячи человек." },
        { id: "ru-u99l2-opros", type: "vocab", front: "опрос", reading: "opros", meaning: "a round of questions put to many people", accept: ["a poll of what people think", "a survey of opinion", "questioning put to a sample of people"], example: { jp: "Опрос шёл в двух городах, однако публике показали только один вывод.", en: "The poll ran in two cities, yet the public was shown only one conclusion." }, drill: { jp: "Опрос шёл почти целый месяц", en: "The poll ran for nearly a whole month" }, hint: "ap-ROS — stress on the last syllable, and the о reduces to a. MASCULINE. From спрашивать, to ask, from unit 23, by way of the о- prefix. ⚠️ Also what a police investigator does to a group of people, so context matters: опрос свидетелей. The verb is опрашивать." },
        { id: "ru-u99l2-svodka", type: "vocab", front: "сводка", reading: "svodka", meaning: "a short digest of figures or events", accept: ["a brief roundup of the day", "a condensed report of what came in", "a summary bulletin"], example: { jp: "Сводка за неделю была готова, но читать её никто не хотел.", en: "The weekly digest was ready, but nobody wanted to read it." }, drill: { jp: "Сводка за неделю уже готова", en: "The weekly digest is already ready" }, hint: "SVOD-ka — stress on the first syllable. FEMININE (-а). From `сводиться` in unit 62 — things brought together into one. ⚠️ Standard in two fixed phrases every Russian knows: сводка погоды, the weather summary, and сводка новостей, the news roundup." },
        { id: "ru-u99l2-izlozhenie", type: "vocab", front: "изложение", reading: "izlozhenie", meaning: "a setting out of something in one's own words", accept: ["a retelling in full and in order", "an account laid out step by step", "a written restatement of a text"], example: { jp: "Его изложение было точным, хотя часть подробностей в нём потеряна.", en: "His account was accurate, although part of the detail is lost in it." }, drill: { jp: "Его изложение было очень точным", en: "His account was very accurate" }, hint: "iz-la-ZHE-ni-ye — stress on ZHE, and the о reduces to a. NEUTER (-ие). ⚠️ ALSO THE NAME OF A SCHOOL EXERCISE every Russian child does: an изложение is a text read aloud twice and then written out from memory. From the same лож- root as `ложиться`, unit 29 — laying something out." },
        { id: "ru-u99l2-doslovno", type: "vocab", front: "дословно", reading: "doslovno", meaning: "word for word with nothing changed", accept: ["exactly as it was said", "without altering a syllable", "repeating the wording precisely"], example: { jp: "Он привёл эти слова дословно, и спорить здесь было не о чем.", en: "He produced these words verbatim, and there was nothing to argue about here." }, drill: { jp: "Переводить это надо дословно", en: "This has to be translated word for word" }, hint: "da-SLOV-na — stress on SLOV, and both о around it reduce to a. ADVERB. From до + слово, unit 6 — right down to the word. ⚠️ A дословный перевод is a literal translation, and in Russian that is usually a criticism: it is the opposite of a good one." },
      ],
    },
    {
      id: "ru-u99l3",
      unit: 99,
      lesson: 3,
      title: "The paper trail",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what an auditor works with — an official register, a file on a person, an extract, a cross-check, an audit and a stocktake.",
      items: [
        { id: "ru-u99l3-reestr", type: "vocab", front: "реестр", reading: "reestr", meaning: "an official list kept up to date", accept: ["a maintained register of entries", "a formal roll of records", "a standing official index"], example: { jp: "Все эти фирмы есть в реестре, а значит проверить их можно.", en: "All these firms are in the register, which means they can be checked." }, drill: { jp: "Реестр фирм есть в интернете", en: "The register of firms is on the internet" }, hint: "ri-YESTR — stress on the last syllable, and the first е reduces to i while the second is said ye. MASCULINE. ⚠️ The ее is TWO vowels, not a long one — ре-естр. A state word: единый государственный реестр is where every Russian company is recorded." },
        { id: "ru-u99l3-dosye", type: "vocab", front: "досье", reading: "dose", meaning: "a file collected on one person or case", accept: ["a gathered folder on somebody", "the papers held about a case", "an assembled personal file"], example: { jp: "На каждого сотрудника здесь давно собрано досье, о котором он сам не знает.", en: "A file has long been assembled here on every employee, which he himself knows nothing about." }, drill: { jp: "На него собрано целое досье", en: "A whole file has been assembled on him" }, hint: "da-SYE — stress on the last syllable, French fashion. ⚠️ ITS READING IS WRITTEN `dose`, NOT `dosye`: unit 1 §1's table DROPS ь from every reading, so досье folds to d-o-s-e. The scheme is the scheme even where it looks odd. NEUTER and ⚠️ INDECLINABLE: досье never changes its ending, exactly like метро from unit 9 and такси. So «в досье», «из досье», «два досье» — the word itself stays put." },
        { id: "ru-u99l3-vypiska", type: "vocab", front: "выписка", reading: "vypiska", meaning: "an extract copied out of a record", accept: ["a certified copy of part of a document", "a pulled-out section of a register", "an official excerpt"], example: { jp: "Выписку из реестра можно получить за один день, если заплатить пошлину.", en: "An extract from the register can be obtained in one day if you pay the fee." }, drill: { jp: "Выписка из реестра уже готова", en: "The extract from the register is already ready" }, hint: "VY-pis-ka — stress on the first syllable. FEMININE (-а). From писать, unit 4, with вы- — written out. ⚠️ ALSO a hospital discharge: выписка из больницы is the day they let you go home, and the verb выписать covers both senses." },
        { id: "ru-u99l3-sverka", type: "vocab", front: "сверка", reading: "sverka", meaning: "the putting of two records side by side", accept: ["a check of one copy against another", "a reconciliation of two lists", "a cross-check between records"], example: { jp: "После сверки стало ясно, что в двух отчётах цифры разные.", en: "After the cross-check it became clear that the figures differ in the two reports." }, drill: { jp: "Сверка списков шла весь день", en: "The cross-check of the lists went on all day" }, hint: "SVER-ka — stress on the first syllable. FEMININE (-а). From `верить` in unit 22 by way of сверять, to compare — the с- prefix of bringing two things together. ⚠️ An accountant's word: сверка с банком, акт сверки. Distinguish it from `верификация` in lesson 1, which tests a claim rather than a copy." },
        { id: "ru-u99l3-reviziya", type: "vocab", front: "ревизия", reading: "reviziya", meaning: "an inspection of accounts or stock", accept: ["an official audit of the books", "a formal going-over of the accounts", "a check that nothing has gone missing"], example: { jp: "Ревизия нашла нехватку, хотя бухгалтер считал, что всё в порядке.", en: "The audit found a shortfall, although the accountant thought everything was in order." }, drill: { jp: "Ревизия нашла большую нехватку", en: "The audit found a large shortfall" }, hint: "ri-VI-zi-ya — stress on VI, and the first е reduces to i. FEMININE (-я). ⚠️ ALSO used of ideas: ревизия взглядов is a reconsidering of one's views, and in politics ревизия is almost always a reproach. The person is a ревизор, the title of Gogol's most famous play." },
        { id: "ru-u99l3-inventarizatsiya", type: "vocab", front: "инвентаризация", reading: "inventarizatsiya", meaning: "a counting of everything on hand", accept: ["a stocktake of what is physically there", "an item-by-item tally of holdings", "a full count of goods in store"], example: { jp: "Во время инвентаризации склад закрывают, и работа стоит целый день.", en: "During the stocktake the warehouse is closed, and work stands still for a whole day." }, drill: { jp: "Инвентаризация идёт на складе", en: "The stocktake is going on at the warehouse" }, hint: "in-ven-ta-ri-ZA-tsi-ya — seven syllables, stress on ZA. FEMININE (-я). ⚠️ One of the longest words in this course, and worth it: every Russian shop and warehouse shuts for one once a year. Built on инвентарь, the stock itself, which is not carded." },
      ],
    },
    {
      id: "ru-u99l4",
      unit: 99,
      lesson: 4,
      title: "Faked and rumoured",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the ways a record is faked — the doctoring of a result, a counterfeit, a swapped document, a damaging lie — and the two things people pass round in place of evidence.",
      items: [
        { id: "ru-u99l4-falsifikatsiya", type: "vocab", front: "фальсификация", reading: "falsifikatsiya", meaning: "the faking of a result or a record", accept: ["the deliberate corrupting of evidence", "a doctoring of figures", "the rigging of a finding"], example: { jp: "Фальсификация результатов это преступление, даже если никто не потерял денег.", en: "Doctoring the results is a crime, even if nobody lost any money." }, drill: { jp: "Эта фальсификация была очень грубой", en: "This doctoring of figures was very crude" }, hint: "fal-si-fi-KA-tsi-ya — stress on KA. FEMININE (-я). ⚠️ Of PROCESSES and RESULTS — фальсификация выборов, the rigging of a vote; фальсификация истории. For a faked OBJECT the word is `подделка`, next card. The verb is фальсифицировать." },
        { id: "ru-u99l4-poddelka", type: "vocab", front: "подделка", reading: "poddelka", meaning: "a fake object made to pass as real", accept: ["a counterfeit made to deceive", "an imitation passed off as genuine", "a forged copy of a thing"], example: { jp: "Подделка оказалась такой хорошей, что даже специалисты сначала молчали.", en: "The fake turned out to be so good that even the specialists were silent at first." }, drill: { jp: "Эта подделка оказалась очень хорошей", en: "This fake turned out to be very good" }, hint: "pad-DEL-ka — stress on DEL, the о reduces to a, and the дд is held a beat longer. FEMININE (-а). From `делать`, unit 4, with под- — made underhand. ⚠️ It only LOOKS like поддерживать from unit 61, which is под+держать: two different roots, дел- and держ-." },
        { id: "ru-u99l4-podlog", type: "vocab", front: "подлог", reading: "podlog", meaning: "the swapping in of a false document", accept: ["a fraudulent substitution of papers", "the planting of a false record", "fraud committed with documents"], example: { jp: "Подлог нашли только через год, когда сверка показала две разные подписи.", en: "The document fraud was found only a year later, when the cross-check showed two different signatures." }, drill: { jp: "Этот подлог стоил ему работы", en: "This document fraud cost him his job" }, hint: "pad-LOG — stress on the last syllable, and the о reduces to a. MASCULINE. From the same лож- root as `изложение` in lesson 2 — something laid in underneath. ⚠️ Narrower than подделка: a подлог is specifically about DOCUMENTS, and in the criminal code it is its own offence." },
        { id: "ru-u99l4-kleveta", type: "vocab", front: "клевета", reading: "kleveta", meaning: "a damaging lie told about a person", accept: ["a false charge spread to ruin a name", "an untrue accusation put about publicly", "defamation of somebody"], example: { jp: "Это была клевета, потому что никакого факта за этими словами не стояло.", en: "It was defamation, because there was not a single fact behind these words." }, drill: { jp: "Такая клевета дорого ему стоила", en: "Such defamation cost him dearly" }, hint: "kli-vi-TA — stress on the last syllable, and both е before it reduce to i. FEMININE (-а). ⚠️ A LEGAL term in Russia, not just a reproach: клевета is an offence in the criminal code, so the word belongs with `суд` from unit 51. The verb is клеветать and the person a клеветник." },
        { id: "ru-u99l4-molva", type: "vocab", front: "молва", reading: "molva", meaning: "what people are generally saying about something", accept: ["common talk going round", "word of mouth among people", "the talk of a whole town"], example: { jp: "Молва шла впереди новостей, и верить ей было нельзя.", en: "Word of mouth ran ahead of the news, and it could not be trusted." }, drill: { jp: "Молва шла по всему городу", en: "Word of mouth went all round the town" }, hint: "mal-VA — stress on the last syllable, and the о reduces to a. FEMININE (-а). ⚠️ A LITERARY and slightly old-fashioned word, which is exactly why it is worth having: народная молва is the voice of the people in a novel. The everyday word is слухи, the plural of `слух` from unit 86." },
        { id: "ru-u99l4-domysel", type: "vocab", front: "домысел", reading: "domysel", meaning: "a guess presented as if it were known", accept: ["something filled in by supposition", "an inference nothing supports", "speculation passed off as fact"], example: { jp: "Это не факт, а домысел, и печатать его в газете не стоит.", en: "That is not a fact but a supposition, and it is not worth printing in the newspaper." }, drill: { jp: "Это не факт а домысел", en: "That is not a fact but a supposition" }, hint: "DO-my-sel — stress on the first syllable. MASCULINE, and ⚠️ the е DROPS in every other form: домыслА, домыслЫ — the same class as `отец` from unit 10. Built on `мысль` from unit 39 with до- — thought added on past where the evidence stops." },
      ],
    },
  ],
};
