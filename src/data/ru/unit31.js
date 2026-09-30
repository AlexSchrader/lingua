// RU Unit 31 — Вид глагола ("Verbal aspect") — A2
// ─────────────────────────────────────────────────────────────────────────────
// FIRST UNIT OF THE A2 BAND, and the first unit of BLOCK 1 (u31–u40), which is
// the CREW LEAD for this band. Everything in ru/unit1.js §1–§10 and §A–§D still
// binds every card here; this header adds only what A2 needs on top, and blocks
// 2 (u41–u50) and 3 (u51–u60) read §1–§7 below before authoring.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Activities and routine" AND IT NAMED A UNIT RUSSIAN
// A1 HAD ALREADY WRITTEN — u29 Обычный день is the routine unit (просыпаться ·
// вставать · умываться · чистить · душ · ложиться · готовить · стирать ·
// привычка · расписание · будильник). That was true of ALL TEN of block 1's A2
// slots, not one or two; the table in §6 below lists every one and what it was
// rethemed to. The A2 scaffold's slot titles were generated without reading what
// Russian A1 spent, so they are placeholders in the strongest sense.
//
// ─────────────────────────────────────────────────────────────────────────────
// A2 CONVENTIONS FOR RUSSIAN — binding on ALL ru units in u31–u60, every block.
// Settled by block 1 (the crew lead) 2026-09-29. Blocks 2 and 3 read this first,
// and unit1.js §1–§10 BEFORE it — nothing here replaces any of that.
// ─────────────────────────────────────────────────────────────────────────────
//
// 1. ⚠️ HOW A PERFECTIVE IS GLOSSED — AND WHY unit1.js §4's OWN ANSWER DOES NOT
//    WORK. §4 says the gloss "MUST carry the discriminator": делать → "to do
//    (imperfective)", сделать → "to do (perfective)". MEASURED ON THIS BRANCH,
//    that does not do what §4 wanted: `normalizeMeaning` strips `\(.*?\)` AND a
//    leading "to ", so BOTH of those normalise to the single string "do" and the
//    pair is exactly the gloss collision §4 was written to prevent. It is the
//    same trap unit1.js §B recorded for лёгкий/легко — "a parenthetical does NOT
//    fix it" — and §4 was written before §B found that out.
//    ✅ THE RULE THAT DOES WORK, and it is what all 24 cards here follow:
//      (a) PREFER A DIFFERENT ENGLISH VERB. English very often has one, and the
//          pair then needs no marking at all: говорить "to speak" / сказать "to
//          say" · понимать "to understand" / понять "to realise" · вставать "to
//          get up" / встать "to stand up" · готовить "to do the cooking" /
//          приготовить "to cook a meal".
//      (b) WHERE ENGLISH HAS ONLY ONE VERB, name the COMPLETION in plain English,
//          OUTSIDE any parentheses, so it survives normalisation: купить "to make
//          a purchase" · заплатить "to settle the bill" · получить "to get hold
//          of" · прочитать "to read right through" · убрать "to clear away".
//      (c) IF NEITHER IS AVAILABLE, DO NOT CARD THAT PERFECTIVE. Use it in
//          examples and hand it on. Block 1 refused `забыть` on exactly this test
//          (забывать is already "to forget" and no second natural English verb
//          exists) and `лечь` (ложиться is already "to lie down").
//    The aspect label still belongs in the HINT, which is not normalised and is
//    where the teaching goes. Every card below says which partner is which.
//
// 2. WHICH CASES THIS BAND TEACHES. unit1.js §5 left four things to A2 and all
//    four are closed inside u31–u40 — see §6. The band's case coverage:
//        INSTRUMENTAL   u32, as a paradigm. New at A2.
//        GENITIVE       u33 — the six prepositions A1 refused, as a set.
//        GENITIVE PL.   u37, as a paradigm, with counting and measure.
//        DATIVE         u34, as a paradigm. A1 had FIXED FRAMES only.
//        PREPOSITIONAL  u39 widens it past в/на to о · про · при.
//    STILL DEFERRED TO B1, unchanged from unit1.js §5: participles, verbal
//    adverbs, and VERBS OF MOTION WITH PREFIXES. ⚠️ The unprefixed directional
//    pairs (идти/ходить, ехать/ездить) are NOT the deferred ones and are taught
//    at u36 — the B1 line is the PREFIX (приходить, уезжать), not the pair.
//    LEFT TO BLOCK 2 AND NOT TOUCHED HERE: subordination and linked clauses
//    (u46), and conditionals, ability and comparison (u47). Block 1 deliberately
//    did not card `чем` · `более` · `менее` · `самый` · `мочь` · `уметь` ·
//    `хотя` · `чтобы` — they are u46/u47's content and taking them would have
//    gutted those slots.
//
// 3. AN INFLECTED FORM IS STILL NEVER ITS OWN CARD, AND A2 IS WHERE THAT BITES.
//    unit1.js §5's last rule costs more at A2 than at A1, so here is what block 1
//    refused and why, so nobody re-litigates it:
//      * `буду` / `будет` are conjugated forms of `быть` (carded u22). The FUTURE
//        TENSE is taught at u31l4 through canDo, hints and examples, and has NO
//        card of its own. There was no legal way to give it one.
//      * `утром` · `вечером` · `днём` · `ночью` · `летом` · `зимой` · `весной` ·
//        `осенью` all read as free fronts and ALL EIGHT WERE REFUSED. Every one is
//        the bare instrumental of a noun A1 already taught (утро u11, вечер u11,
//        день u3, ночь u5, лето u16, зима u16, весна u16, осень u16). They are
//        lexicalised adverbs in any dictionary, which is the argument FOR carding
//        them — but they are also the single clearest illustration of the case
//        u32 teaches, so u32 teaches them in examples and hints instead, where
//        no rule has to bend. They are in scope from u32 on (`утром` starts with
//        утро's stem), so later blocks may use them freely in sentences.
//
// 4. THE PERFECTIVE'S CONJUGATION IS NOT REACHABLE FROM ITS INFINITIVE, so
//    `scripts/scope-ru.mjs` needed feeding. Eleven perfectives here mutate their
//    stem outright (сказать → скажу, взять → возьму, дать → дам, стать → стану,
//    сесть → сяду, помочь → помогу …) and the suffix-stripper reaches none of
//    them. Block 1 added their PARADIGM entries — GENERATED INFLECTIONS ONLY, in
//    the standard paradigm, never a lexical guess — exactly as A1's blocks 2 and
//    3 did. §7 records the measurement that proves it is a fix and not a
//    loosening.
//
// 5. `много` IS NOW CARDED, reversing unit1.js §D's avoidance. §D listed it among
//    the lexeme duplicates it avoided ("много vs немного") and asked A2 to form
//    its own view. Block 1's view, and the reasoning rather than the verdict:
//      * §D's test is "would a learner who knows one already know the other?"
//        Knowing немного "a little" gives you the OPPOSITE of много, not много.
//        The derivation runs one way only — не+много → немного — and the learner
//        was taught the derived form first, so there is no path from it back.
//      * много is not a synonym of anything taught. It is the SYNTACTIC HEAD the
//        genitive plural hangs off (много книг, много денег), which is u37's
//        whole subject. A quantity unit without it is not possible.
//      * Its antonym `мало` IS carded (u21l4, "few"), so the gap was asymmetric.
//      * No gloss collision: немного normalises to "little", мало to "few",
//        много to "a lot". Measured, not assumed.
//    It is carded at u37l1.
//
// ─────────────────────────────────────────────────────────────────────────────
// 6. EVERY SLOT BLOCK 1 RETHEMED, AND THE HOLE EACH ONE FILLS.
//    All ten. Each "A1 unit that already owned it" was checked against
//    src/data/ru/TAUGHT-WORDS.md (720 words / 30 units) on this branch.
// ─────────────────────────────────────────────────────────────────────────────
//   u31 Activities and routine → Вид глагола           A1 u29 Обычный день is the
//        routine unit. Rethemed to ASPECT — which is what "activities" means once
//        a learner has verbs: routine vs one completed act. Closes unit1.js §4.
//   u32 Feelings and states    → Творительный падеж    A1 u28 Чувства и характер
//        is the feelings unit. Rethemed to the INSTRUMENTAL — and it keeps the
//        slot honest, because the case IS how Russian says a state you are
//        pleased/proud/interested WITH something. Closes unit1.js §5.
//   u33 Travel and transport   → Родительный падеж     A1 u30 Путешествие + u9 own
//        travel. Rethemed to the SIX GENITIVE PREPOSITIONS A1 refused (из · для ·
//        без · до · от · около) — which are the source/goal/proximity words, so
//        travel stays the carrier. Closes unit1.js §5's named gap.
//   u34 Work and school        → Дательный падеж       A1 u25 Работа и учёба is
//        the work unit. Rethemed to the DATIVE as a paradigm; the workplace is
//        the carrier (звонить начальнику, объяснить коллеге). Closes §5's
//        "FIXED FRAMES ONLY".
//   u35 Health and the body    → Возвратные глаголы    A1 u20 Тело и здоровье is
//        the body unit. Rethemed to REFLEXIVE -ся VERBS as a class — A1 taught
//        eight of them one at a time and never the class or its case government;
//        health supplies лечиться · простудиться · чувствовать себя.
//   u36 Nature and animals     → Глаголы движения      A1 u26 Природа и животные
//        is the nature unit, AND block 2's u44 is "Nature and science", so the
//        theme was doubly spoken for. Rethemed to the DIRECTIONAL MOTION PAIRS
//        (идти/ходить, ехать/ездить) — untaught, and A2 not B1 because the pair
//        is unprefixed.
//   u37 Shopping and money     → Много и мало          A1 u18 + u12 own shopping
//        and prices. Rethemed to the GENITIVE PLURAL as a paradigm plus counting
//        and measure — and counting money IS the genitive plural (пять рублей,
//        много денег), so the slot's domain survives. Closes unit1.js §5.
//   u38 Time and adverbs       → Время и сроки         A1 u11 + u17 + u22 own
//        clock, calendar and frequency. Rethemed to TIME EXPRESSED THROUGH CASE
//        (в понедельник, в январе, на неделю, через час) — the measured hole: a
//        learner had every time WORD and no way to say WHEN.
//   u39 Connecting words       → Мнение и речь         A1 u19l3 owns the
//        connectors (но · или · если · поэтому · значит), and block 2's u46 is
//        "compound and linked clauses". Rethemed to о · про · при + opinion and
//        speech nouns: the measured hole was that a learner could not say what a
//        conversation was ABOUT.
//   u40 Home and household     → Качества и признаки   A1 u15 Дом и вещи is the
//        home unit. Rethemed to the A2 QUALITY ADJECTIVES — the measured hole:
//        A1's adjective set (u19) is the basic six, and nothing let a learner say
//        accurate, ordinary, general, identical, the main one.
//
// ─────────────────────────────────────────────────────────────────────────────
// 7. TOOLING BLOCK 1 EXTENDED, WITH THE MEASUREMENT THAT SHOWS IT IS A FIX.
// ─────────────────────────────────────────────────────────────────────────────
// `scripts/scope-ru.mjs` PARADIGM gained entries for the mutating perfectives and
// short-form adjectives this band uses. Every entry is a GENERATED INFLECTION of
// a front carded in this band or in A1 — no lexical guesses. The proof it is not
// a loosening is the u1–u30 figure, which the entries must NOT move: A1's
// documented baseline is **107 of 1374 sentences flagged, every one in u1–u6**,
// and it is still 107 with the entries in. See §7 of unit40.js for the final
// measurement across the whole band.
//
// `scripts/selfcheck-ru-a2-block1.mjs` is block 3's `selfcheck-ru-block3.mjs`
// with its range moved to u31+. It imports the REAL answer.js and cardRouting.js
// and runs the same 29 checks, because the two defect classes block 3 documented
// are invisible to `lint:curriculum` and `validate:content` in exactly the same
// way at A2: a drill that contains the front but does not CLOZE (lint uses
// `.includes()`, the router uses whole-word matching), and a gloss collision
// across units through `normalizeMeaning`.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT31 = {
  id: "ru-u31",
  lang: "ru",
  title: "Вид глагола",
  order: 31,
  stage: "a2",
  lessons: [
    {
      id: "ru-u31l1",
      unit: 31,
      lesson: 1,
      title: "Two verbs for one action",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the perfective partner of a verb you already know, and say that you intend to finish a job rather than just do it.",
      items: [
        { id: "ru-u31l1-sdelat", type: "vocab", front: "сделать", reading: "sdelat", meaning: "to get done", accept: ["to get it done", "to finish doing", "to complete"], example: { jp: "Я хочу сделать эту работу сегодня.", en: "I want to get this piece of work done today." }, drill: { jp: "Можно сделать это сейчас", en: "It can be got done now" }, hint: "SDYE-lat — stress on the first syllable. The perfective partner of делать: делать is the doing, сделать is the getting it done. Use it when the job reaches an end." },
        { id: "ru-u31l1-prochitat", type: "vocab", front: "прочитать", reading: "prochitat", meaning: "to read right through", accept: ["to read to the end", "to finish reading", "to read all of"], example: { jp: "Она хочет прочитать эту книгу сегодня.", en: "She wants to read this book right through today." }, drill: { jp: "Он хочет прочитать письмо", en: "He wants to read the letter right through" }, hint: "pro-chi-TAT — stress on the last syllable, and both о reduce to a. читать is reading; прочитать is reading to the last page. The про- prefix is what closes it." },
        { id: "ru-u31l1-napisat", type: "vocab", front: "написать", reading: "napisat", meaning: "to finish writing", accept: ["to write out", "to get written", "to write and finish"], example: { jp: "Мне нужно написать письмо бабушке сегодня.", en: "I need to finish writing a letter to my grandmother today." }, drill: { jp: "Я хочу написать письмо", en: "I want to finish writing a letter" }, hint: "na-pi-SAT — stress at the end. писать is the writing; написать is the finished letter. Exactly the same pair as читать / прочитать." },
        { id: "ru-u31l1-skazat", type: "vocab", front: "сказать", reading: "skazat", meaning: "to say", accept: ["to tell", "to say once", "to utter"], example: { jp: "Она хочет сказать тебе спасибо.", en: "She wants to say thank you to you." }, drill: { jp: "Что он хочет сказать", en: "What does he want to say" }, hint: "ska-ZAT — stress at the end. говорить is to speak, to be talking; сказать is to say one thing, once. Russian says «он говорит по-русски» but «он сказал спасибо»." },
        { id: "ru-u31l1-ponyat", type: "vocab", front: "понять", reading: "ponyat", meaning: "to realise", accept: ["to grasp", "to work out", "to get it"], example: { jp: "Она хочет понять каждое слово в книге.", en: "She wants to grasp every word in the book." }, drill: { jp: "Я хочу понять этот вопрос", en: "I want to grasp this question" }, hint: "pa-NYAT — stress at the end, and the о reduces to a. понимать is the understanding you have; понять is the moment it clicks. «Я понимаю» = I follow you; «я понял» = I have got it." },
        { id: "ru-u31l1-uznat", type: "vocab", front: "узнать", reading: "uznat", meaning: "to find out", accept: ["to learn a fact", "to come to know", "to recognise"], example: { jp: "Я хочу узнать, где живёт твоя сестра.", en: "I want to find out where your sister lives." }, drill: { jp: "Я хочу узнать твой адрес", en: "I want to find out your address" }, hint: "uz-NAT — stress at the end. Not «to know» (знать) but the moment you come to know it: узнать = to find out. It also means to recognise someone in the street." },
      ],
    },
    {
      id: "ru-u31l2",
      unit: 31,
      lesson: 2,
      title: "The one completed act",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a single purchase, payment or handover as one finished event instead of a habit.",
      items: [
        { id: "ru-u31l2-kupit", type: "vocab", front: "купить", reading: "kupit", meaning: "to make a purchase", accept: ["to buy something", "to go and buy", "to get bought"], example: { jp: "Мама хочет купить хлеб и молоко.", en: "Mum wants to buy bread and milk." }, drill: { jp: "Мы хотим купить эту машину", en: "We want to buy this car" }, hint: "ku-PIT — stress at the end. покупать is shopping as an activity; купить is walking out with the thing. For one purchase Russian nearly always picks купить." },
        { id: "ru-u31l2-zaplatit", type: "vocab", front: "заплатить", reading: "zaplatit", meaning: "to settle the bill", accept: ["to pay up", "to pay once", "to finish paying"], example: { jp: "Мой отец хочет заплатить сейчас.", en: "My father wants to settle the bill now." }, drill: { jp: "Кто хочет заплатить сегодня", en: "Who wants to settle the bill today" }, hint: "za-pla-TIT — stress on the last syllable. платить is paying as a habit; заплатить is the bill actually settled. The за- prefix closes the action." },
        { id: "ru-u31l2-vzyat", type: "vocab", front: "взять", reading: "vzyat", meaning: "to take", accept: ["to pick up", "to take once", "to grab"], example: { jp: "Можно взять эту книгу домой?", en: "May I take this book home?" }, drill: { jp: "Можно взять твою ручку", en: "May I take your pen" }, hint: "One syllable — VZYAT, with no vowel at all after the в. Its imperfective partner брать is not taught in this course; взять is the form you want nine times out of ten." },
        { id: "ru-u31l2-dat", type: "vocab", front: "дать", reading: "dat", meaning: "to hand over", accept: ["to hand", "to let someone have", "to pass"], example: { jp: "Учитель хочет дать нам новое задание.", en: "The teacher wants to hand us a new assignment." }, drill: { jp: "Можно дать мне воды", en: "Could you give me some water" }, hint: "One syllable, DAT. давать is giving in general; дать is the one handover. Watch what follows it: дать КОМУ (dative) ЧТО (accusative) — unit 34 teaches that case in full." },
        { id: "ru-u31l2-poluchit", type: "vocab", front: "получить", reading: "poluchit", meaning: "to get hold of", accept: ["to obtain", "to come by", "to end up with"], example: { jp: "Я хочу получить ответ на этот вопрос.", en: "I want to get an answer to this question." }, drill: { jp: "Она хочет получить новый паспорт", en: "She wants to get a new passport" }, hint: "pa-lu-CHIT — stress on the last syllable, and both о reduce to a. получать is receiving as a habit — a salary every month; получить is the one thing landing in your hands." },
        { id: "ru-u31l2-posmotret", type: "vocab", front: "посмотреть", reading: "posmotret", meaning: "to take a look", accept: ["to have a look", "to watch to the end", "to glance"], example: { jp: "Я хочу посмотреть этот фильм вечером.", en: "I want to watch this film in the evening." }, drill: { jp: "Можно посмотреть твою фотографию", en: "May I take a look at your photo" }, hint: "pa-sma-TRET — stress on the last syllable. смотреть is watching, in progress; посмотреть is one look, or one film watched to the end. «Посмотри!» is how you say Look!" },
      ],
    },
    {
      id: "ru-u31l3",
      unit: 31,
      lesson: 3,
      title: "Saying what happened",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Report a finished event in the past — a decision made, a thing found or lost, a person met — with the perfective rather than the imperfective.",
      items: [
        { id: "ru-u31l3-reshit", type: "vocab", front: "решить", reading: "reshit", meaning: "to make up your mind", accept: ["to settle it", "to solve", "to reach a decision"], example: { jp: "Я хочу решить этот вопрос сегодня.", en: "I want to settle this question today." }, drill: { jp: "Мы хотим решить эту проблему", en: "We want to solve this problem" }, hint: "re-SHIT — stress at the end. решать is working on it; решить is the decision made or the problem solved. Russian keeps both senses in one verb." },
        { id: "ru-u31l3-nayti", type: "vocab", front: "найти", reading: "nayti", meaning: "to track down", accept: ["to find at last", "to locate", "to turn up"], example: { jp: "Она хочет найти работу в центре города.", en: "She wants to find a job in the centre of town." }, drill: { jp: "Я хочу найти твой ключ", en: "I want to find your key" }, hint: "nay-TI — stress on the last syllable. находить is searching and finding as a process; найти is the moment you have it. Its past is нашёл / нашла, which looks nothing like the infinitive." },
        { id: "ru-u31l3-poteryat", type: "vocab", front: "потерять", reading: "poteryat", meaning: "to lose for good", accept: ["to mislay", "to lose once", "to end up without"], example: { jp: "Я боюсь потерять этот адрес.", en: "I am afraid of losing this address for good." }, drill: { jp: "Можно потерять важный документ", en: "An important document can get lost" }, hint: "pa-te-RYAT — stress at the end. терять is losing things generally; потерять is the one thing gone. It is what Russian uses for «I have lost my keys»." },
        { id: "ru-u31l3-vstretit", type: "vocab", front: "встретить", reading: "vstretit", meaning: "to run into", accept: ["to meet once", "to come across someone", "to go and meet"], example: { jp: "Я хочу встретить сестру на вокзале.", en: "I want to meet my sister at the station." }, drill: { jp: "Мы хотим встретить их сегодня", en: "We want to meet them today" }, hint: "VSTRE-tit — stress on the FIRST syllable, unlike most verbs in this unit. встречать is meeting people as a habit; встретить is the one encounter — running into someone, or going to meet their train." },
        { id: "ru-u31l3-pomoch", type: "vocab", front: "помочь", reading: "pomoch", meaning: "to give a hand", accept: ["to lend a hand", "to help out once", "to come to the rescue"], example: { jp: "Я хочу помочь маме на кухне.", en: "I want to give my mum a hand in the kitchen." }, drill: { jp: "Я хочу помочь тебе сегодня", en: "I want to give you a hand today" }, hint: "pa-MOCH — stress on the last syllable. помогать is helping as a habit; помочь is one hand given. Both take the DATIVE — помочь МАМЕ, never маму — and unit 34 is that case in full." },
        { id: "ru-u31l3-pokazat", type: "vocab", front: "показать", reading: "pokazat", meaning: "to point out", accept: ["to show once", "to let someone see", "to display"], example: { jp: "Можно показать тебе мою фотографию?", en: "May I show you my photo?" }, drill: { jp: "Я хочу показать тебе город", en: "I want to show you the town" }, hint: "pa-ka-ZAT — stress at the end. показывать is showing repeatedly; показать is the one thing shown. Like дать it takes КОМУ (dative) plus ЧТО (accusative)." },
      ],
    },
    {
      id: "ru-u31l4",
      unit: 31,
      lesson: 4,
      title: "Saying what you will do",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the future two ways — буду plus an imperfective for something you will be doing, and a perfective on its own for something you will get done.",
      items: [
        { id: "ru-u31l4-sprosit", type: "vocab", front: "спросить", reading: "sprosit", meaning: "to ask a question", accept: ["to put a question", "to ask once", "to enquire of"], example: { jp: "Я хочу спросить учителя, где мой класс.", en: "I want to ask the teacher where my classroom is." }, drill: { jp: "Я хочу спросить тебя сейчас", en: "I want to ask you now" }, hint: "spra-SIT — stress at the end. спрашивать is asking repeatedly; спросить is one question put. Careful: you ask a PERSON in the accusative — спросить учителя, not учителю." },
        { id: "ru-u31l4-prigotovit", type: "vocab", front: "приготовить", reading: "prigotovit", meaning: "to cook a meal", accept: ["to get a meal ready", "to prepare", "to finish cooking"], example: { jp: "Сегодня я хочу приготовить суп и салат.", en: "Today I want to cook soup and salad." }, drill: { jp: "Она хочет приготовить вкусный обед", en: "She wants to cook a tasty lunch" }, hint: "pri-ga-TO-vit — stress on the third syllable, TO. готовить is cooking as an activity; приготовить is the meal on the table. It also means to get anything else ready." },
        { id: "ru-u31l4-ubrat", type: "vocab", front: "убрать", reading: "ubrat", meaning: "to clear away", accept: ["to tidy it up", "to put away", "to get cleared"], example: { jp: "Я хочу убрать комнату сегодня вечером.", en: "I want to tidy the room up this evening." }, drill: { jp: "Кто хочет убрать этот мусор", en: "Who wants to clear away this rubbish" }, hint: "ub-RAT — stress at the end. убирать is tidying as a routine; убрать is the room actually clear. Also «убрать со стола» — to clear the table." },
        { id: "ru-u31l4-stat", type: "vocab", front: "стать", reading: "stat", meaning: "to become", accept: ["to turn into", "to end up as", "to get to be"], example: { jp: "Моя сестра хочет стать врачом.", en: "My sister wants to become a doctor." }, drill: { jp: "Он хочет стать учителем", en: "He wants to become a teacher" }, hint: "One syllable, STAT. стать takes the INSTRUMENTAL of whatever you become — стать врачОМ, never врач. That case is unit 32's whole job; for now just notice the ending." },
        { id: "ru-u31l4-vstat", type: "vocab", front: "встать", reading: "vstat", meaning: "to stand up", accept: ["to get to your feet", "to rise once", "to get out of bed"], example: { jp: "Мне нужно встать рано утром.", en: "I need to get up early in the morning." }, drill: { jp: "Я должен встать рано", en: "I have to get up early" }, hint: "One syllable, VSTAT. вставать is the daily getting-up; встать is the one movement — out of a chair, or out of bed on one particular morning. Note утром in the example: that is the instrumental doing the work of «in the»." },
        { id: "ru-u31l4-sest", type: "vocab", front: "сесть", reading: "sest", meaning: "to sit down", accept: ["to take a seat", "to sit oneself down", "to get seated"], example: { jp: "Он хочет сесть на этот стул.", en: "He wants to sit down on this chair." }, drill: { jp: "Можно сесть на этот диван", en: "May I sit down on this sofa" }, hint: "One syllable, SEST. The act of sitting DOWN, not of being seated. Its future is я сяду / он сядет — a д appears out of nowhere, so learn сесть / сяду as one pair." },
      ],
    },
  ],
};
