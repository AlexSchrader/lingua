// RU Unit 50 — Документы и порядок ("Documents and procedure") — A2
// ─────────────────────────────────────────────────────────────────────────────
// LAST UNIT OF BLOCK 2 (u41–u50). Conventions: ru/unit1.js §1–§10 and §A–§D, plus
// ru/unit31.js §1–§7 for the A2 band. Block 2 adds NOTHING to either — §1–§7 were
// closed by block 1, the crew lead, and bind blocks 2 and 3 as written. What
// follows §B7 below is block 2's RECORD, not a new standard.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Vocabulary 1 (A2)" — a coverage slot with no theme at
// all, and `src/data/lint.js` hard-errors on /^Vocabulary \d+$/ once a unit is
// authored, so it had to be retitled whatever it was filled with. It is themed
// here rather than left as a grab-bag, and themed INSIDE MY OWN DOMAINS, because
// u51–u60 are eleven more coverage slots and they are block 3's. Rethemed to
// PAPERWORK AND PROCEDURE, which sits under "the workplace beyond A1".
//
// THE MEASURED HOLE. Being able to fill in a form is a CEFR A2 descriptor and the
// language had almost nothing for it. u25 Работа и учёба gives the physical objects
// — бумага · ручка · карандаш · документ · конверт · папка — and block 1 added
// u34's условие · требование · возможность and u38's срок. Against that, a learner
// could not name a form, a certificate, an application, a receipt for a payment,
// a clause, a line, a list, or a draft. Nothing in 49 units.
//
// THREE CALLS I MADE, with the reasoning:
//   `подпись` "a signature" WAS REFUSED, and it is the one refusal in this unit I
//        would defend hardest, because the word is obviously wanted here. There
//        are already TWO cards on подпис- inside my own block: `подписка`
//        "a subscription" (u45l3) and `подписывать` "to sign" (u49l1). A third on
//        one root is a mastery track for one lexeme in three places, which is
//        exactly what unit1.js §5's lexeme rule exists to stop. The verb carries
//        the sense a learner needs, and its example sentence uses the noun.
//   `квитанция` is glossed "a payment slip", not "a receipt" — u18 `чек` is
//        already "a receipt" and `normalizeMeaning` would make them one prompt.
//        Measured with the block's probe, like every gloss in the block.
//   `справка` and `свидетельство` and `удостоверение` are THREE separate cards for
//        what English calls a certificate, because Russian bureaucracy genuinely
//        distinguishes them and a learner meets all three. They are glossed "an
//        official note", "a certificate" and "an identity document", which is what
//        each actually is, and each hint says which office issues it.
//
// ⚠️ ALSO REFUSED HERE:
//   `копия` — vs `копировать`, carded at u48l4 in my own block, AND `экземпляр`
//        "a copy" at u45l4. `оригинал` and `черновик` cover the ground instead.
//   `печать` — vs `печатать` (u49l2). `регистрация` — vs `регистрировать` (u49l1).
//   `уведомление` — vs `свидетельство` in this same unit; both are вед- roots.
//   `раздел` — vs `отдел`, carded at u42l1. One prefix apart on one root.
//   `порядок` · `номер` · `форма` · `очередь` · `срок` — all TAKEN (u15, u12, u32,
//        u30, u38), and every one is used freely in sentences here.
//   `государственный` — measured free, but the state is society, which is block
//        3's assigned domain. Left for them, and named here so it reads as a
//        decision rather than an oversight.
//
// ═════════════════════════════════════════════════════════════════════════════
// §B1 — BLOCK 2 IS COMPLETE. u41–u50 AUTHORED 2026-09-29. WHAT THAT TOOK.
// Referenced from the header of every other unit in u41–u50.
// ═════════════════════════════════════════════════════════════════════════════
// 240 cards · 40 lessons · 10 units · SIX cards in every lesson, no exceptions.
// Every card has example + drill + accept[] + hint. ⚠️ Block 3 (u51–u60) was
// authoring CONCURRENTLY and neither block could see the other's fronts, so the
// merge seat dedupes against the list in §B3 below. That list is the deliverable.
//
// ─────────────────────────────────────────────────────────────────────────────
// §B2 — EVERY SLOT BLOCK 2 RETHEMED, AND THE HOLE EACH ONE FILLS.
// Nine of the ten. Block 1 had to retheme ALL TEN of its slots (ru/unit31.js §6)
// and it warned by name that two of mine were double-booked — u44 and u46 — which
// both were. Checked against src/data/ru/TAUGHT-WORDS.md (960 words / 40 units).
// ─────────────────────────────────────────────────────────────────────────────
//   u41 Personality and character → Учёба и знание        A1 u28 Чувства и характер
//        IS the personality unit, and "character and personality" is block 3's
//        assigned domain. Rethemed to education: no unit in the language named a
//        single academic subject, or the person who lectures you.
//   u42 Society and daily life    → Работа и карьера       "Society" is block 3's
//        domain; "daily life" is A1 u29. Rethemed to the workplace past u25/u32/u34,
//        which give the room, the boss and the pay and nothing about the POST, the
//        contract, the client, or getting hired.
//   u43 Technology and communication → Техника и связь     ✅ THE ONE SLOT WHOSE
//        THEME SURVIVED. Block 1 stocked it deliberately (ru/unit40.js's header).
//        Only the TITLE changed, per unit1.js §10.
//   u44 Nature and science        → Деньги и услуги        Double-booked, and block 1
//        SAID SO in ru/unit31.js §6's u36 row. A1 u26 is nature; science is block
//        3's. Rethemed to money as a FLOW — u12/u18/u37 already own prices,
//        shopping, counting and measure.
//   u45 Culture and leisure       → Пресса и передачи      A1 u27 is the leisure
//        unit; "culture and leisure" is block 3's. Rethemed to media: u27 gives the
//        four OBJECTS (журнал/газета/радио/телевизор) and nothing on them.
//   u46 Grammar 4 — compound and linked clauses → Сложное предложение
//        Also flagged by block 1 (§6's u39 row), which rethemed its OWN unit to
//        avoid it. ⚠️ AND THE SLOT NAME IS WRONG FOR RUSSIAN in the way unit1.js
//        §10 records for u23's "particles": A1's u19l3 already taught the COMPOUND
//        sentence (но · или · поэтому are coordinating). SUBORDINATION was the hole.
//   u47 Grammar 5 — conditionals, ability, comparison → Сравнение и возможность
//        ✅ Theme intact and RESERVED for it: ru/unit31.js §2 records block 1
//        refusing eight fronts so u46/u47 would have content. Title only.
//   u48 Conjugation drill 1       → Спряжение глаголов     The slot is real but
//        "drill" is a Japanese idea — ja verbs take a closed generable set. Russian
//        has six present forms across two classes, and unit1.js §5 bans carding an
//        inflected form. So it cards 24 NEW VERBS BY CLASS instead.
//   u49 Conjugation drill 2       → Повелительное наклонение  u48 states the whole
//        present tense in four lessons; there is no second half. Rethemed to THE
//        IMPERATIVE, taught nowhere in 48 units — grep finds it in two hints.
//   u50 Vocabulary 1 (A2)         → Документы и порядок    A themeless coverage slot,
//        themed inside my own domains because u51–u60 are block 3's eleven.
//        "Can fill in a form" is a CEFR A2 descriptor the language could not do.
//
// ─────────────────────────────────────────────────────────────────────────────
// §B3 — EVERY FRONT BLOCK 2 TOOK, BY UNIT. This is the dedupe list for the merge
// seat, and it is the measurement, not a plan.
// ─────────────────────────────────────────────────────────────────────────────
//   u41 Учёба и знание       преподаватель ученик одноклассник аудитория курс
//        общежитие · наука математика физика химия литература география · текст
//        страница упражнение правило пример сочинение · знание диплом семестр
//        доклад практика теория
//   u42 Работа и карьера     служба отдел должность карьера смена проект · клиент
//        заказ договор премия командировка бухгалтер · собеседование резюме
//        вакансия стаж навык обязанность · пенсия конкурс мастер нанимать
//        увольнять управлять
//   u43 Техника и связь      экран клавиатура кнопка устройство техника принтер ·
//        сайт сеть файл пароль программа приложение · сообщение связь трубка
//        мобильный наушники микрофон · версия вирус ссылка поиск запрос включать
//   u44 Деньги и услуги      доход расход бюджет налог кредит взнос · услуга
//        аренда товар обмен валюта банкомат · монета купюра кошелёк оплата
//        торговля выгодный · богатый бедный дешёвый бесплатный зарабатывать считать
//   u45 Пресса и передачи    статья заголовок обложка издание редакция автор ·
//        канал передача выпуск эфир зритель пресса · сериал сюжет реклама
//        подписка публика интервью · объявление обзор репортаж тираж экземпляр съёмка
//   u46 Сложное предложение  чтобы хотя зато однако наоборот против · ли будто
//        именно вообще ведь кстати · итак впрочем причём также едва чуть ·
//        зависеть касаться выяснять уточнять утверждать обсуждать
//   u47 Сравнение и возможность  чем более менее самый сравнение степень ·
//        высокий низкий крупный мелкий огромный тяжёлый · мочь уметь способность
//        талант справляться добиваться · бы вероятно зря редкий громкий плотный
//   u48 Спряжение глаголов   изучать проверять исправлять запоминать отмечать
//        добавлять · записывать сдавать создавать откладывать обеспечивать
//        увеличивать · хранить тратить копить делить ставить звучать · копировать
//        редактировать публиковать организовать участвовать комментировать
//   u49 Повелительное наклонение  заполнять подписывать оформлять назначать
//        поручать регистрировать · нажимать печатать скачивать сохранять удалять
//        набирать · слушать напоминать убеждать предупреждать признавать молчать ·
//        вешать тянуть трогать выбрасывать подбирать заменять
//   u50 Документы и порядок  справка анкета бланк образец оригинал черновик ·
//        заявление отчёт доверенность квитанция удостоверение свидетельство ·
//        пункт строка абзац список содержание сноска · штамп приём график
//        инструкция официальный личный
//
// ⚠️ ALL SIX OF BLOCK 1'S RESERVED EIGHT THAT WERE MINE WERE USED, all re-probed on
// this branch first as ru/unit40.js's header instructs: `чем` · `более` · `менее` ·
// `самый` (u47l1), `мочь` · `уметь` (u47l3). The other two, `хотя` and `чтобы`, are
// at u46l1. NOTHING WAS TAKEN FROM BLOCK 3'S DOMAINS — `экономика` and
// `государственный` were both measured free and deliberately left, and are named
// in u44's and this unit's headers so the omission reads as a decision.
//
// ─────────────────────────────────────────────────────────────────────────────
// §B4 — THE MEASUREMENTS. Take your own before trusting any of these.
// ─────────────────────────────────────────────────────────────────────────────
//   scope-ru.mjs, MY RANGE (41–50):  480 sentences checked, **0 out of scope**
//   scope-ru.mjs, u1–u30:            1374 checked, **107 flagged — UNCHANGED**,
//        every one still in u1–u6. That is block 1's documented baseline and it is
//        the proof the PARADIGM entries in §B5 are a fix and not a loosening.
//   scope-ru.mjs, u31–u40:           480 checked, **0 — UNCHANGED**.
//   selfcheck-ru-a2-block2.mjs: **0 findings in u41–u50** on all 29 checks.
//        ⚠️ The 12 it reports are CORPUS-WIDE and every one is in u1–u10, where
//        unit1.js documents each as a deliberate non-defect. Block 1's header
//        already warns about this and it is worth repeating: "every check is 0
//        across the corpus" IS NOT TRUE and never was. THE CLAIM IS THAT A BLOCK
//        ADDS ZERO. Verified before authoring (12) and after (12).
//
// ─────────────────────────────────────────────────────────────────────────────
// §B5 — TOOLING BLOCK 2 ADDED OR EXTENDED.
// ─────────────────────────────────────────────────────────────────────────────
// `scripts/selfcheck-ru-a2-block2.mjs` is block 1's script with its range moved to
// u41–u50. Unchanged otherwise, because its 29 checks are exactly right: it caught
// SIXTEEN real defects in this block that `lint:curriculum`, `validate:content`,
// `test:unit`, `audit` and `build` ALL PASS. See §B6.
//
// `scripts/scope-ru.mjs` PARADIGM gained NINE entries, grouped (i)–(l) in that file
// with the reason for each. Every one is a GENERATED INFLECTION in the standard
// paradigm of a front that IS carded — no lexical guesses, same discipline as block
// 1's (a)–(h). Three classes:
//   (i) the -давать family DROPS -ава- in the present tense (даю, сдаю, создаю),
//       which u48l2 teaches as its whole lesson and therefore cannot write around
//   (j)–(k) `дать` and `мочь` mutate their stem outright (дам, могу)
//   (l) four nouns whose last-syllable vowel VANISHES outside the nominative —
//       кошелёк → кошелькА, образец → образцА, список → спискА, заголовок →
//       заголовкА. Same class as block 1's день and цветок in (e), and all four
//       have the drop stated in their own hint, so writing around them would have
//       contradicted the card.
// The proof they are a fix and not a loosening is in §B4: both documented figures
// are identical before the first entry and after the last.
//
// ─────────────────────────────────────────────────────────────────────────────
// §B6 — SIXTEEN DEFECTS THE COMMAND-LINE GATE CANNOT SEE, and the classes they
// fall into. Every one was found by the self-check, not by reading.
// ─────────────────────────────────────────────────────────────────────────────
//   1. A LATIN LETTER INSIDE A CYRILLIC WORD. "технику" was written "техникy"
//      with a Latin y (u48l3). Invisible to every gate and to the eye. A1 hit the
//      identical defect with `возraст`. RUN mixedScript ON EVERY BAND.
//   2. FIVE CROSS-UNIT GLOSS COLLISIONS through `normalizeMeaning`, which strips a
//      leading a/an/the AND a leading "to ". Every one would have shipped a produce
//      prompt with two right answers:
//        `заказ` "an order"    vs u13 `заказывать` "to order"   → "a customer order"
//        `служба` "a service"  vs `услуга` "a service" (u44)     → "a public service"
//        `эфир` "the air"      vs u26 `воздух` "air"             → "the airwaves"
//        `отмечать` "to mark"  vs u25 `оценка` "a mark"          → "to tick off"
//        `копировать` "to copy" vs `экземпляр` "a copy" (u45)    → "to duplicate"
//      ⚠️ AND FOUR MORE WERE CAUGHT BEFORE THE CARD WAS WRITTEN, by running the
//      block's probe in --gloss mode first: `более`/`менее` against u5
//      `больше`/`меньше`, `вероятно` against u22 `наверное`, `именно` against u22
//      `точно`, `исправлять` against u40 `правильный`. THE PATTERN IS THAT AN A2
//      GLOSS COLLIDES WITH AN A1 WORD, because A1 owns all the plain English.
//   3. TEN DRILLS THAT LINT PASSES AND THE ROUTER REFUSES, or that were not drills
//      at all. Two shapes, and block 1 warned about the first by name:
//        * `бедный` and `касаться` used an INFLECTED form of their own front
//          ("бедная", "касается"). lint checks front-presence with `.includes()`;
//          `canCloze`/`canSentence` use WHOLE-WORD matching, so both failed
//          drillFront, noCloze and noSentence at once — three cards' worth of
//          in-context practice silently gone.
//        * EIGHT drills were identical to, or a prefix of, their own example, which
//          makes the cloze card show the sentence it is quizzing.
// ⚠️ ALL SIXTEEN WERE IN THE FIRST DRAFT OF CARDS THAT ALSO PASSED lint:curriculum
// (0 errors), validate:content (0 errors, 0 warnings), test:unit (476 pass) AND
// build. A green command-line gate is not evidence about any of these classes.
//
// ─────────────────────────────────────────────────────────────────────────────
// §B7 — WHAT BLOCK 2 DELIBERATELY DID NOT DO, so nobody looks for it.
// ─────────────────────────────────────────────────────────────────────────────
//   * NO AUDIO. Dmitri is wired (ru → BqX6uCgfrfQwqR6qpRrD) and A1's 720 clips
//     exist, but block 1's 240 and these 240 are unvoiced. One `generate:audio`
//     run once block 3 closes the band, not three.
//   * NO PERFECTIVES. Every verb in u41–u50 is an imperfective infinitive
//     (unit1.js §4), which means ru/unit31.js §1's gloss problem never arose here
//     and aspect stays u31's subject entirely.
//   * NO THIRD 3rd-PERSON EXCEPTION. unit1.js §4 says the count is final at two
//     (`нравится`, `стоит`) and block 2 did not add one — `мочь` was the candidate,
//     because its bare infinitive is rare in speech, and it was solved with a
//     proverb drill instead («Хотеть — не значит мочь»).
//   * NO COMPARATIVE CARDS AND NO IMPERATIVE CARDS. Both are inflected forms
//     (unit1.js §5), taught through analytic `более` and through canDo/hint/example
//     respectively. Nine free comparatives were refused; see u47's header.
//   * NOTHING FROM BLOCK 3'S DOMAINS, and no Playwright, no `generate:audio`, and
//     no gate subagents — the main session gates block 2 centrally.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT50 = {
  id: "ru-u50",
  lang: "ru",
  title: "Документы и порядок",
  order: 50,
  stage: "a2",
  lessons: [
    {
      id: "ru-u50l1",
      unit: 50,
      lesson: 1,
      title: "The form in front of you",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the piece of paper you have been handed — an official note, a questionnaire, a blank form, a sample, the original or a rough draft.",
      items: [
        { id: "ru-u50l1-spravka", type: "vocab", front: "справка", reading: "spravka", meaning: "an official note", accept: ["a written confirmation", "a doctor's note", "a reference letter"], example: { jp: "Мне нужна справка из университета.", en: "I need an official note from the university." }, drill: { jp: "Справка была только на русском языке", en: "The official note was only in Russian" }, hint: "SPRAV-ka — stress on the first syllable. FEMININE. ⚠️ The word Russian bureaucracy runs on: a справка confirms ONE fact — that you study somewhere, that you were ill, that you earn what you say. Not свидетельство, three cards on, which records an EVENT." },
        { id: "ru-u50l1-anketa", type: "vocab", front: "анкета", reading: "anketa", meaning: "a questionnaire", accept: ["a form with questions", "an application form", "a survey form"], example: { jp: "Эта анкета была слишком длинная.", en: "That questionnaire was too long." }, drill: { jp: "Анкета была на второй странице", en: "The questionnaire was on the second page" }, hint: "an-KYE-ta — stress on KYE. FEMININE. A French loan. It is the form with questions ON it, as against a бланк, the next card but one, which is the empty printed sheet." },
        { id: "ru-u50l1-blank", type: "vocab", front: "бланк", reading: "blank", meaning: "a blank form", accept: ["a printed form", "an empty form to fill in", "a letterhead"], example: { jp: "Бланк нужно взять в этом отделе.", en: "The blank form has to be collected in that department." }, drill: { jp: "Бланк был уже в этой папке", en: "The blank form was already in that folder" }, hint: "One syllable, BLANK. MASCULINE. ⚠️ A FALSE FRIEND: it does NOT mean «blank» as an adjective — it is the PRINTED SHEET you write on. Russian for «blank» in the empty sense is пустой (unit 23)." },
        { id: "ru-u50l1-obrazets", type: "vocab", front: "образец", reading: "obrazets", meaning: "a sample", accept: ["a specimen to copy", "a worked example", "a model to follow"], example: { jp: "Смотрите образец на этой странице.", en: "Look at the sample on that page." }, drill: { jp: "Образец был на первой странице", en: "The sample was on the first page" }, hint: "ab-ra-ZETS — stress on the LAST syllable, and both о reduce to a. MASCULINE. ⚠️ The е DROPS when it inflects: образец but образцА, образцУ. «По образцу» means «following the sample»." },
        { id: "ru-u50l1-original", type: "vocab", front: "оригинал", reading: "original", meaning: "an original", accept: ["the original document", "not a copy", "the authentic one"], example: { jp: "Оригинал этого договора в нашей редакции.", en: "The original of that contract is at our editorial office." }, drill: { jp: "Оригинал был в этой папке", en: "The original was in that folder" }, hint: "a-ri-gi-NAL — four syllables, stress on the last, and the о reduces to a. MASCULINE. ⚠️ It is a NOUN in Russian, not an adjective: «дайте оригинал» — give me the original. The adjective is оригинальный." },
        { id: "ru-u50l1-chernovik", type: "vocab", front: "черновик", reading: "chernovik", meaning: "a rough draft", accept: ["a first version", "a working draft", "rough work"], example: { jp: "Это был только черновик этого сочинения.", en: "That was only a rough draft of that essay." }, drill: { jp: "Черновик уже готов", en: "The rough draft is ready" }, hint: "cher-na-VIK — stress on the LAST syllable, and the о reduces to a. MASCULINE. From чёрный, black — historically the messy, ink-blotted version. Its opposite is чистовик, the fair copy." },
      ],
    },
    {
      id: "ru-u50l2",
      unit: 50,
      lesson: 2,
      title: "What you hand in, and what you get back",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Submit an application or a report, and name the certificate, identity document, payment slip or power of attorney an office asks you for.",
      items: [
        { id: "ru-u50l2-zayavlenie", type: "vocab", front: "заявление", reading: "zayavlenie", meaning: "an application", accept: ["a written request", "a formal statement", "a letter of application"], example: { jp: "Моё заявление было в этой папке.", en: "My application was in that folder." }, drill: { jp: "Заявление было для этого отдела", en: "The application was for that department" }, hint: "za-yav-LYE-ni-ye — five syllables, stress on LYE. NEUTER (-е). Same root as объявление (unit 45) but a different prefix: an объявление is announced to everybody, a заявление is submitted to one office. «Написать заявление» is how every Russian process starts." },
        { id: "ru-u50l2-otchyot", type: "vocab", front: "отчёт", reading: "otchyot", meaning: "a written report", accept: ["an account of work done", "a formal report", "a return"], example: { jp: "Наш отчёт будет готов в январе.", en: "Our report will be ready in January." }, drill: { jp: "Отчёт будет готов завтра утром", en: "The report will be ready tomorrow morning" }, hint: "at-CHOT — stress on the last syllable, where the ё always is, and the о reduces to a. MASCULINE. ⚠️ Glossed «a written report» because репортаж at unit 45 is the one filed from the scene. From считать (unit 44) — to account for." },
        { id: "ru-u50l2-doverennost", type: "vocab", front: "доверенность", reading: "doverennost", meaning: "a power of attorney", accept: ["written authority to act", "a letter of authority", "a proxy document"], example: { jp: "Без доверенности здесь ничего нельзя.", en: "Without a power of attorney nothing is possible here." }, drill: { jp: "Доверенность была уже очень старая", en: "The power of attorney was already very old" }, hint: "da-VYE-ren-nast — four syllables, stress on VYE, and the о reduces to a. FEMININE, ending in -ь. Built on верить (unit 22) with до-: the paper that says someone is trusted to act for you." },
        { id: "ru-u50l2-kvitantsiya", type: "vocab", front: "квитанция", reading: "kvitantsiya", meaning: "a payment slip", accept: ["a paying-in slip", "a utility bill", "a stub for a payment"], example: { jp: "Эта квитанция была в кошельке.", en: "That payment slip was in the purse." }, drill: { jp: "Квитанция была в кошельке", en: "The payment slip was in the purse" }, hint: "kvi-TAN-tsi-ya — stress on TAN. FEMININE. ⚠️ Glossed «a payment slip», not «a receipt» — чек at unit 18 is the till receipt. A квитанция is the printed slip for rent, gas or a fine, which you take to the bank." },
        { id: "ru-u50l2-udostoverenie", type: "vocab", front: "удостоверение", reading: "udostoverenie", meaning: "an identity document", accept: ["an ID card", "a warrant card", "a pass proving who you are"], example: { jp: "Покажите удостоверение на этом приёме.", en: "Show your identity document at that reception." }, drill: { jp: "Удостоверение было в этой сумке", en: "The identity document was in that bag" }, hint: "u-da-sta-ve-RYE-ni-ye — SEVEN syllables, stress on RYE, and both о reduce to a. The longest word in this band. NEUTER (-е). Also built on верить: the paper that makes you certain who somebody is. A passport is a паспорт (unit 9); this is any other ID." },
        { id: "ru-u50l2-svidetelstvo", type: "vocab", front: "свидетельство", reading: "svidetelstvo", meaning: "a certificate", accept: ["an official record of an event", "a birth or marriage certificate", "evidence"], example: { jp: "Свидетельство было в этом конверте.", en: "The certificate was in that envelope." }, drill: { jp: "Свидетельство было очень старое", en: "The certificate was very old" }, hint: "svi-DYE-tel-stva — four syllables, stress on DYE. NEUTER (-о). ⚠️ It records an EVENT — свидетельство о рождении is a birth certificate, о браке a marriage one — where a справка (l1) confirms a fact and a удостоверение proves who you are. Russian keeps all three apart." },
      ],
    },
    {
      id: "ru-u50l3",
      unit: 50,
      lesson: 3,
      title: "The parts of a document",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Point at a particular place in a text — this clause, that line, the second paragraph, the list, the contents page, the footnote.",
      items: [
        { id: "ru-u50l3-punkt", type: "vocab", front: "пункт", reading: "punkt", meaning: "a clause", accept: ["a numbered point", "an item in a document", "a station or post"], example: { jp: "Этот пункт в договоре совсем не выгодный.", en: "That clause in the contract is not favourable at all." }, drill: { jp: "Этот пункт совсем не выгодный", en: "That clause is not favourable at all" }, hint: "One syllable, PUNKT. MASCULINE. A numbered point in any document — «пункт первый». ⚠️ Its other sense is a place where something is done: «обмен валюты» happens at an обменный пункт." },
        { id: "ru-u50l3-stroka", type: "vocab", front: "строка", reading: "stroka", meaning: "a line of text", accept: ["a written line", "a row of words", "a line on a screen"], example: { jp: "В этой строке есть одна ошибка.", en: "There is one mistake in that line." }, drill: { jp: "Первая строка была пустая", en: "The first line was empty" }, hint: "stra-KA — stress on the LAST syllable, and the о reduces to a. FEMININE. ⚠️ Glossed «a line of text» because линия at unit 36 is a line you draw. A строка is a row of writing. «С новой строки» means «on a new line»." },
        { id: "ru-u50l3-abzats", type: "vocab", front: "абзац", reading: "abzats", meaning: "a paragraph", accept: ["a block of text", "a section of writing"], example: { jp: "Первый абзац этой статьи был слишком длинный.", en: "The first paragraph of that article was too long." }, drill: { jp: "Первый абзац был слишком длинный", en: "The first paragraph was too long" }, hint: "ab-ZATS — stress on the last syllable. MASCULINE. A German loan (Absatz). It is both the block of text and the indent that starts it: «с абзаца» means «indented»." },
        { id: "ru-u50l3-spisok", type: "vocab", front: "список", reading: "spisok", meaning: "a list", accept: ["a written list", "a roll of names", "an inventory"], example: { jp: "Ваше имя уже в этом списке.", en: "Your name is already on that list." }, drill: { jp: "Список уже был на этой странице", en: "The list was already on that page" }, hint: "SPI-sak — stress on the first syllable. MASCULINE. ⚠️ The о DROPS when it inflects: список but спискА, в спискЕ. Same root as писать (unit 4) — a thing written out." },
        { id: "ru-u50l3-soderzhanie", type: "vocab", front: "содержание", reading: "soderzhanie", meaning: "the contents", accept: ["a table of contents", "what is inside", "the substance of something"], example: { jp: "Содержание этой книги на второй странице.", en: "The contents of that book are on the second page." }, drill: { jp: "Содержание было на второй странице", en: "The contents were on the second page" }, hint: "sa-der-ZHA-ni-ye — five syllables, stress on ZHA, and the о reduces to a. NEUTER (-е). From держать, to hold — what a text holds. It is both the contents PAGE and the substance of an argument." },
        { id: "ru-u50l3-snoska", type: "vocab", front: "сноска", reading: "snoska", meaning: "a footnote", accept: ["a note at the foot of a page", "a reference note"], example: { jp: "В этой сноске была очень важная цифра.", en: "There was a very important figure in that footnote." }, drill: { jp: "Сноска была внизу страницы", en: "The footnote was at the bottom of the page" }, hint: "SNOS-ka — stress on the first syllable. FEMININE. From сносить, to carry down — the note carried down to the bottom of the page. A ссылка (unit 43) points somewhere; a сноска explains something." },
      ],
    },
    {
      id: "ru-u50l4",
      unit: 50,
      lesson: 4,
      title: "Stamps, appointments and the rules",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Deal with an office: the stamp it puts on things, the hours it sees people, its schedule, its written instructions, and whether a matter is official or personal.",
      items: [
        { id: "ru-u50l4-shtamp", type: "vocab", front: "штамп", reading: "shtamp", meaning: "a stamp", accept: ["an official mark", "a rubber stamp", "a cliché"], example: { jp: "Без штампа эта справка не работает.", en: "Without a stamp that official note does not work." }, drill: { jp: "Штамп был уже очень старый", en: "The stamp was already very old" }, hint: "One syllable, SHTAMP. MASCULINE. A German loan. ⚠️ Not the postage kind — that is марка. A штамп is the rubber stamp an office bangs onto your paper, and by extension a tired phrase: «это штамп»." },
        { id: "ru-u50l4-priyom", type: "vocab", front: "приём", reading: "priyom", meaning: "a reception", accept: ["consulting hours", "an appointment slot", "a way of doing something"], example: { jp: "Приём в этом отделе только утром.", en: "Reception in that department is only in the morning." }, drill: { jp: "Приём был только утром", en: "Reception was only in the morning" }, hint: "pri-YOM — stress on the last syllable, where the ё always is. MASCULINE. Three senses: the hours an office or doctor sees people («часы приёма»), a formal reception, and a technique — «этот приём работает»." },
        { id: "ru-u50l4-grafik", type: "vocab", front: "график", reading: "grafik", meaning: "a schedule", accept: ["a work schedule", "a chart or graph", "a planned sequence"], example: { jp: "Наш график работы очень плотный.", en: "Our work schedule is very packed." }, drill: { jp: "График был очень плотный", en: "The schedule was very packed" }, hint: "GRA-fik — stress on the first syllable. MASCULINE. ⚠️ Not расписание (unit 29), which is a fixed TIMETABLE of times: a график is the planned sequence of work, and it is also a graph on a page." },
        { id: "ru-u50l4-instruktsiya", type: "vocab", front: "инструкция", reading: "instruktsiya", meaning: "a set of instructions", accept: ["instructions", "a manual", "written directions"], example: { jp: "Инструкция была только на этом сайте.", en: "The instructions were only on that website." }, drill: { jp: "Инструкция была только на сайте", en: "The instructions were only on the website" }, hint: "in-STRUK-tsi-ya — stress on STRUK. FEMININE, and SINGULAR where English is plural: «прочитайте инструкцию» = read the instructions. Not инструмент (unit 32), a tool." },
        { id: "ru-u50l4-ofitsialnyy", type: "vocab", front: "официальный", reading: "ofitsialnyy", meaning: "official", accept: ["formal", "issued by an authority", "on the record"], example: { jp: "Это был официальный отчёт нашего отдела.", en: "That was our department's official report." }, drill: { jp: "Это был официальный ответ", en: "That was an official answer" }, hint: "a-fi-tsi-AL-nyy — five syllables, stress on AL, and the first о reduces to a. An ADJECTIVE: официальная справка, официальное заявление. Not официант (unit 13), a waiter — same Latin root, very different job." },
        { id: "ru-u50l4-lichnyy", type: "vocab", front: "личный", reading: "lichnyy", meaning: "personal", accept: ["private to one person", "of one's own", "individual"], example: { jp: "Это мой личный вопрос, а не общий.", en: "That is a personal matter of mine, not a shared one." }, drill: { jp: "Это был личный вопрос", en: "That was a personal matter" }, hint: "LICH-nyy — stress on the first syllable. An ADJECTIVE: личная жизнь, личное дело. Built on лицо (unit 20), a face — what belongs to one face. «Личное дело» is a personnel file, and the opposite pole from официальный." },
      ],
    },
  ],
};
