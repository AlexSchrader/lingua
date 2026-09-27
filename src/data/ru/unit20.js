// RU Unit 20 — Тело и здоровье ("Body and health") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Last unit of BLOCK 2. Conventions are declared in ru/unit1.js §1–§10 and bind
// every card here. `врач` (u2) and `сердце` (u6) were spent by the alphabet band
// and are used freely below without being re-carded.
//
// ⚠️ RUSSIAN MERGES THREE PAIRS ENGLISH SPLITS, and that is the real content of
// l1–l2 rather than the vocabulary itself:
//     рука   = hand AND arm      (shoulder to fingertip, one word)
//     нога   = leg AND foot      (hip to toe, one word)
//     палец  = finger AND toe    (disambiguated by на руке / на ноге)
// A learner who assumes a separate word for each will look for four that do not
// exist. Every one of those three hints says so outright.
//
// ⚠️ MOBILE STRESS IS EVERYWHERE IN THIS UNIT and the hints carry it, because
// unit1.js §6 makes stress compulsory and these are the words where it MOVES:
// голова → го́лову, рука → ру́ку, нога → но́гу, спина → спи́ну. All four throw the
// stress from the ending to the front in the accusative. No card asks for the
// inflected form (unit1.js §5); the hint just stops the learner being ambushed.
//
// ⚠️ `простуда` LOST ITS OBVIOUS GLOSS to a collision no tool would catch. It was
// glossed "a cold" — and `normalizeMeaning` strips the article, leaving "cold",
// which is exactly one of u16 `холодно`'s accept entries. It is glossed "a head
// cold" instead, and nothing in its accept list normalises onto холодно.
//
// ⚠️ `боль` (pain) IS DELIBERATELY NOT CARDED beside `болеть`. unit1.js §D's test —
// would a learner who knows one already know the other? — says yes outright: they
// are the same root with the same meaning in two word classes. болеть is the one
// A1 needs (голова болит), and the hint hands боль over for free.
//
// ─────────────────────────────────────────────────────────────────────────────
// NOTE FOR BLOCK 3 — WHAT IS LEFT, AND WHAT IS ALREADY DECIDED
// ─────────────────────────────────────────────────────────────────────────────
// Written by block 2 on handing back, 2026-09-27. It is a MEASUREMENT against
// `src/data/ru/TAUGHT-WORDS.md` on this branch, not a promise — re-probe with
// `node scripts/check-front.mjs ru "<front>"` before you use any of it.
//
// ✅ u21 IS DONE — BLOCK 3 RETHEMED IT TO `Числа и цифры` (the printed NUMBER),
// 2026-09-27, and the argument is in unit21.js's header. The instruction below is
// spent; the reasoning is kept because it is still the reasoning, and because the
// four themes block 2 listed and did NOT spend are still unspent and are now the
// A2 crew's to pick from. Word-formation stays refused for the two reasons block 2
// gave, and block 3 did not revive it.
//
// u21 WAS THE LAST "Characters N" SLOT. Blocks 1 and 2 rethemed
// four of the five (u9 Знакомые слова · u12 Надписи · u15 Дом и вещи · u18 Одежда
// и покупки) — see unit9.js's header for the argument and unit1.js §10 for the
// language-wide decision. `lint.js` hard-errors on /^Characters \d+$/ the moment
// you author it, so this is not optional. Themes block 2 considered and did NOT
// spend, any of which would work:
//   * numerals and signage in print (u12 took the signs; the numerals-in-writing
//     half — число · номер telephone/house/flat conventions — is untouched)
//   * word-formation: the prefixes and suffixes that build Russian words. NOTE
//     THE HAZARD block 2 hit and backed away from: a unit of derived words is a
//     lexeme-duplicate factory (работа vs работать, разговор vs говорить — both
//     already avoided by block 1 for exactly this reason), and a bound suffix
//     cannot be a front at all, because a drill must contain the front verbatim
//     as a WHOLE WORD and `-тель` never appears with its hyphen.
//   * stress shift inside a paradigm. Partly delivered already: u20's hints carry
//     голова→го́лову, рука→ру́ку, нога→но́гу, спина→спи́ну.
//   * the unstressed endings you cannot hear (-ый/-ий/-ой all reduce to the same
//     sound). Genuinely untouched and genuinely hard.
//
// FRONTS BLOCK 2 TOOK — all 240, by unit. Do not re-card any of them.
//   u11 Числа и время   один два три четыре пять шесть · семь восемь девять
//                       десять двадцать сто · час минута секунда время половина
//                       который · утро вечер рано поздно долго всегда
//   u12 Надписи         вход выход открыто закрыто перерыв касса · лифт туалет
//                       номер зал лестница угол · осторожно опасно внимание огонь
//                       курить срочно · цена рубль копейка скидка дорого дёшево
//   u13 Еда и напитки   завтрак обед ужин меню официант заказывать · мясо суп
//                       салат картошка рис вкусно · овощи фрукты яблоко масло
//                       сахар яйцо · кофе сок пиво вино стакан бутылка
//   u14 Город и места   улица магазин вокзал мост центр район · аптека больница
//                       почта полиция рынок церковь · налево направо прямо
//                       остановка далеко поворот · сюда туда внутри идти ехать ждать
//   u15 Дом и вещи      комната кухня спальня ванная стена потолок · стол стул
//                       кровать диван шкаф полка · лампа ключ сумка зеркало
//                       полотенце мыло · убирать класть искать порядок мусор свет
//   u16 Цвета и погода  цвет красный синий зелёный белый чёрный · жёлтый серый
//                       коричневый голубой тёмный яркий · погода дождь снег ветер
//                       тепло холодно · зима весна лето осень мороз жара
//   u17 Дни и месяцы    понедельник вторник среда четверг пятница суббота ·
//                       воскресенье неделя выходной завтра вчера месяц · январь
//                       февраль март апрель май июнь · июль август сентябрь
//                       октябрь ноябрь декабрь
//   u18 Одежда и покупки одежда рубашка платье брюки куртка обувь · носки шапка
//                       шарф перчатки пальто карман · покупать продавать платить
//                       размер выбирать чек · носить стоит примерять модный
//                       удобно подарок
//   u19 Описание и союзы хороший плохой большой маленький новый старый · красивый
//                       молодой трудный лёгкий важный интересный · но или
//                       потому что если поэтому значит · они их каждый какой
//                       такой другой
//   u20 Тело и здоровье голова глаз нос рот ухо лицо · рука нога палец спина
//                       живот зуб · болеть температура здоровье лекарство
//                       таблетка простуда · спать отдыхать дышать помогать
//                       сильный слабый
//
// FRONTS BLOCK 2 CONSIDERED AND LEFT FOR YOU, with the reason:
//   `боль` · `светлый` · `здоровый` · `больной` — each shares a root with a card
//        block 2 taught (болеть · свет · здоровье) and fails unit1.js §D's test.
//        ✅ BLOCK 3 REVERSED NONE OF THEM. All four stay uncarded, and block 3
//        applied the same test to twelve more of its own — see the AVOIDED lines in
//        unit21.js through unit30.js.
//   `станция` — a metro station. NOT carded because it glosses to "a station",
//        which is u14 `вокзал` after normalisation. It is named in two u14 hints.
//   `находиться` (to be located) — cut from u14l4; every A1 sentence needs the
//        conjugated находится, and the drill rule wants the front verbatim.
//   ⚠️ CORRECTED, 2026-09-27: this line listed `много` as free, which CONTRADICTS
//        unit1.js §D — block 1 had already refused it against немного (u7) plus не
//        (u6). §D wins and much is NOT a card in Russian A1; `мало` is (u21l4).
//   RESOLVED BY BLOCK 3 out of what this line offered free: готовить (u29l2) ·
//        голодный (u24l2) · чистый (u29l3) · грязный (u29l3) · близко (u23l2) ·
//        мало (u21l4) · думать (u22l3) · воздух (u26l4).
//   STILL FREE AND UNTOUCHED after A1: балкон · тяжёлый · дешёвый (careful: ё) ·
//        нравиться-as-infinitive · число (block 3 used `цифра` and `дата` instead,
//        because `число` glosses to "a number", which is u12 `номер` after
//        normalisation) · улыбка (refused vs u28 улыбаться) · желудок · грипп.
//   Every A1 verb block 1 taught, plus block 2's: заказывать убирать класть
//        искать покупать продавать платить выбирать носить примерять идти ехать
//        ждать спать отдыхать дышать помогать курить. Conjugate them in your
//        examples; do NOT re-card them.
//
// TWO TOOLING FACTS BLOCK 2 MEASURED AND YOU SHOULD NOT RE-DERIVE:
//   1. `scripts/scope-ru.mjs` is the ONLY scope check for Russian (lint's
//      `exampleScopeWarnings` returns silently — see unit1.js's closing note).
//      Its stemmer CANNOT reach a fleeting vowel or an irregular stem, so these
//      surfaces read as out-of-scope even though their front is taught: дня/дни
//      (день) · чашек (чашка) · рынке (рынок) · мае (май) · одна/одно (один) ·
//      оно (он) · во (в) · идёт/еду (идти/ехать) · нравятся (нравится) ·
//      был/была (быть — TAUGHT at u22l4 since block 3, and now in PARADIGM) · нужен (нужно). Block 2 wrote AROUND all
//      of them rather than extend the shared PARADIGM table mid-flight; block 2's
//      432 sentences report 0 flagged.
//      ⚠️ BLOCK 3 DID EXTEND IT, and says so here as this note asked. Four changes,
//      all in `scripts/scope-ru.mjs` and all documented in unit28.js's header:
//        (a) a REFLEXIVE infinitive now contributes its bare stem (смеяться → сме-).
//            Without it every correct -ся sentence read as a violation, which is the
//            real reason block 2 had to write around them.
//        (b) PARADIGM is now looked up through the ё fold. `ребёнок` folds to
//            "ребенок", which never matched the "ребёнок" key, so дети · детей ·
//            детям were OUTSIDE the table for the whole of block 2 despite being in
//            it. A silent hole, found by measurement.
//        (c) new entries: быть (был/была/было/были/буду/будет…), бояться, петь.
//        (d) completed entries: это gains этим/этими/этих, твой gains
//            твоя/твою/твоей/твоё.
//      Still unreachable and still to be written around: дня/дни · чашек · рынке ·
//      мае · одна/одно · оно · во · идёт/еду · нравятся · нужен.
//   2. `check-front.mjs`'s LEXEME verdict is worthless for Russian (unit1.js §D).
//      TAKEN and SAME are still hard blocks. Every lexeme call in u11–u20 is a
//      hand judgement and each one is recorded in its own unit header.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT20 = {
  id: "ru-u20",
  lang: "ru",
  title: "Тело и здоровье",
  order: 20,
  stage: "a1",
  lessons: [
    {
      id: "ru-u20l1",
      unit: 20,
      lesson: 1,
      title: "Name the parts of a face",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Point at part of your head and say that it hurts.",
      items: [
        { id: "ru-u20l1-golova", type: "vocab", front: "голова", reading: "golova", meaning: "a head", accept: ["the head", "one's head"], example: { jp: "Голова болит, и это очень плохо.", en: "My head hurts, and that is very bad." }, drill: { jp: "Голова болит сегодня", en: "My head hurts today" }, hint: "ga-la-VA, stress right at the end, so both о reduce to a. Feminine (-а). Its accusative throws the stress to the FRONT — го́лову — one of the clearest stress shifts in the language." },
        { id: "ru-u20l1-glaz", type: "vocab", front: "глаз", reading: "glaz", meaning: "an eye", accept: ["the eye", "one's eye"], example: { jp: "Глаз болит, и мне нужно к врачу.", en: "My eye hurts, and I need to see the doctor." }, drill: { jp: "Глаз болит уже долго", en: "My eye has hurt for a long time" }, hint: "GLAS, one syllable, and the з says s at the end of a word. Masculine. Its plural глаза moves the stress to the ending, and два глаза is two eyes. The old word око survives only in poetry." },
        { id: "ru-u20l1-nos", type: "vocab", front: "нос", reading: "nos", meaning: "a nose", accept: ["the nose", "one's nose"], example: { jp: "Нос болит, потому что здесь мороз.", en: "My nose hurts, because there is a hard frost here." }, drill: { jp: "Нос болит и это плохо", en: "My nose hurts and that is bad" }, hint: "NOS, one syllable. Masculine. In the nose is в носу, with the stressed -у. It has NOTHING to do with носить, to wear, or носки, socks, both in unit 18 — three words on one surface." },
        { id: "ru-u20l1-rot", type: "vocab", front: "рот", reading: "rot", meaning: "a mouth", accept: ["the mouth", "one's mouth"], example: { jp: "Вот рот, а вот нос.", en: "Here is the mouth, and here is the nose." }, drill: { jp: "Вот рот и вот нос", en: "Here is the mouth and here the nose" }, hint: "ROT, one syllable. Masculine, with a fleeting о — рот, but рта and во рту, so the vowel disappears entirely when an ending arrives. Do not confuse it with рад, glad, from unit 7." },
        { id: "ru-u20l1-ukho", type: "vocab", front: "ухо", reading: "ukho", meaning: "an ear", accept: ["the ear", "one's ear"], example: { jp: "Ухо болит, и я плохо слышу.", en: "My ear hurts, and I cannot hear well." }, drill: { jp: "Ухо болит сегодня утром", en: "My ear hurts this morning" }, hint: "U-kha, stress first, final о reduced to a. NEUTER (-о). Its plural is irregular and swaps the consonant: уши, ears. На ухо means into somebody's ear." },
        { id: "ru-u20l1-litso", type: "vocab", front: "лицо", reading: "litso", meaning: "a face", accept: ["the face", "one's face", "a person (in official use)"], example: { jp: "Лицо красивое, и это приятно.", en: "The face is beautiful, and that is pleasant." }, drill: { jp: "Лицо у неё очень красивое", en: "Her face is very beautiful" }, hint: "li-TSO, stress at the end. NEUTER (-о). Its plural лица pulls the stress forward. In official Russian it ALSO means a person — физическое лицо, an individual — so a form asking for your лицо is not asking about your face." },
      ],
    },
    {
      id: "ru-u20l2",
      unit: 20,
      lesson: 2,
      title: "Name the rest of the body",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say which limb hurts, and know where Russian uses one word for two of ours.",
      items: [
        { id: "ru-u20l2-ruka", type: "vocab", front: "рука", reading: "ruka", meaning: "a hand", accept: ["an arm", "the hand", "the arm"], example: { jp: "Рука болит, и мне трудно писать.", en: "My hand hurts, and it is hard for me to write." }, drill: { jp: "Рука болит уже неделю", en: "My hand has hurt for a week" }, hint: "ru-KA, stress at the end. Feminine (-а). ONE word for the hand AND the arm — Russian does not split them, so рука runs from shoulder to fingertip. Accusative ру́ку, with the stress jumping forward." },
        { id: "ru-u20l2-noga", type: "vocab", front: "нога", reading: "noga", meaning: "a leg", accept: ["a foot", "the leg", "the foot"], example: { jp: "Нога болит, и мне трудно идти.", en: "My leg hurts, and it is hard for me to walk." }, drill: { jp: "Нога болит и я дома", en: "My leg hurts and I am at home" }, hint: "na-GA, stress at the end. Feminine (-а). Again ONE word for the leg AND the foot, exactly as рука covers hand and arm. Accusative но́гу, stress to the front." },
        { id: "ru-u20l2-palets", type: "vocab", front: "палец", reading: "palets", meaning: "a finger", accept: ["a toe", "the finger", "a digit"], example: { jp: "Палец болит, и я не хочу писать.", en: "My finger hurts, and I do not want to write." }, drill: { jp: "Палец на руке болит", en: "The finger on my hand hurts" }, hint: "PA-lits, stress first. Masculine, with a fleeting е — палец, but пальца. And once more ONE word for two things: a finger and a toe are both палец, told apart by saying на руке or на ноге." },
        { id: "ru-u20l2-spina", type: "vocab", front: "спина", reading: "spina", meaning: "a back", accept: ["the back", "one's back"], example: { jp: "Спина болит, и это очень трудно.", en: "My back hurts, and that is very hard." }, drill: { jp: "У меня болит спина", en: "My back hurts" }, hint: "spi-NA, stress at the end. Feminine (-а). Accusative спи́ну, stress forward again. It is the back of a BODY only — the back of a room is a different phrase entirely." },
        { id: "ru-u20l2-zhivot", type: "vocab", front: "живот", reading: "zhivot", meaning: "a stomach", accept: ["the belly", "the stomach", "a tummy"], example: { jp: "Живот болит, и я не хочу обеда.", en: "My stomach hurts, and I do not want any lunch." }, drill: { jp: "Живот болит сегодня утром", en: "My stomach hurts this morning" }, hint: "zhy-VOT, stress at the end, and the ж hardens the и into ы. Masculine. It shares a root with жить, to live, from unit 4 — the belly was once the seat of life. The organ itself is желудок." },
        { id: "ru-u20l2-zub", type: "vocab", front: "зуб", reading: "zub", meaning: "a tooth", accept: ["the tooth", "a molar"], example: { jp: "Зуб болит, и это очень плохо.", en: "My tooth hurts, and that is very bad." }, drill: { jp: "Этот зуб очень болит", en: "This tooth hurts a lot" }, hint: "ZUP, one syllable, and the final б says p. Masculine. Its plural зубы keeps the stress at the front. Зубной врач is a dentist — literally the tooth doctor." },
      ],
    },
    {
      id: "ru-u20l3",
      unit: 20,
      lesson: 3,
      title: "Say what is wrong",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Tell a doctor or a chemist that you are ill and what you need.",
      items: [
        { id: "ru-u20l3-bolet", type: "vocab", front: "болеть", reading: "bolet", meaning: "to hurt", accept: ["to ache", "to be ill", "to be sore"], example: { jp: "Я не хочу болеть, потому что завтра важный день.", en: "I do not want to be ill, because tomorrow is an important day." }, drill: { jp: "Я не хочу болеть сегодня", en: "I do not want to be ill today" }, hint: "ba-LYET, stress at the end. Imperfective infinitive with TWO senses: to be ill (я болею) and to hurt (голова болит). It is built on боль, pain, which A1 does not card separately — a learner who has болеть has боль for free. Больница (unit 14) is the same root." },
        { id: "ru-u20l3-temperatura", type: "vocab", front: "температура", reading: "temperatura", meaning: "a temperature", accept: ["a fever", "the temperature", "a high temperature"], example: { jp: "У меня температура, и я дома.", en: "I have a temperature, and I am at home." }, drill: { jp: "У меня сегодня температура", en: "I have a temperature today" }, hint: "tim-pi-ra-TU-ra, stress on TU — five syllables, and both е reduce to i. Feminine (-а). On its own it means a FEVER: У меня температура is I have a temperature, not I have a reading." },
        { id: "ru-u20l3-zdorovye", type: "vocab", front: "здоровье", reading: "zdorove", meaning: "health", accept: ["good health", "one's health"], example: { jp: "Здоровье это очень важно, и я это знаю.", en: "Health is very important, and I know it." }, drill: { jp: "Наше здоровье очень важно", en: "Our health is very important" }, hint: "zda-RO-vye, stress on RO. NEUTER (-е). It shares a root with здравствуйте from unit 7 — the formal hello is literally a wish for your health. За ваше здоровье is the Russian toast." },
        { id: "ru-u20l3-lekarstvo", type: "vocab", front: "лекарство", reading: "lekarstvo", meaning: "medicine", accept: ["a medicine", "a drug", "a remedy"], example: { jp: "Лекарство в аптеке, и это очень дорого.", en: "The medicine is at the chemist, and it is very expensive." }, drill: { jp: "Лекарство здесь в аптеке", en: "The medicine is here at the chemist" }, hint: "li-KARST-va, stress on KARST — and the -ство ending stacks four consonants in a row, which Russian does without blinking. NEUTER (-о). Built on лекарь, an old word for a healer." },
        { id: "ru-u20l3-tabletka", type: "vocab", front: "таблетка", reading: "tabletka", meaning: "a tablet", accept: ["a pill", "the tablet", "a capsule"], example: { jp: "Таблетка здесь, и вода тоже.", en: "The tablet is here, and so is the water." }, drill: { jp: "Таблетка и вода здесь", en: "The tablet and the water are here" }, hint: "tab-LYET-ka, stress on LYET. Feminine (-а). The French tablette with a Russian -ка on the end. Две таблетки is two tablets, using the 2-to-4 ending from unit 11." },
        { id: "ru-u20l3-prostuda", type: "vocab", front: "простуда", reading: "prostuda", meaning: "a head cold", accept: ["a chill", "the common cold", "a cold in the head"], example: { jp: "Зимой здесь часто простуда.", en: "In winter people here often have a cold." }, drill: { jp: "Простуда и температура уже здесь", en: "A cold and a temperature already" }, hint: "pras-TU-da, stress on TU. Feminine (-а). Built on простудиться, to catch a chill — and in Russian folk belief a простуда comes from a draught rather than from another person, which is why the windows stay shut." },
      ],
    },
    {
      id: "ru-u20l4",
      unit: 20,
      lesson: 4,
      title: "Get better",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you need to do to recover, and whether you feel strong or weak.",
      items: [
        { id: "ru-u20l4-spat", type: "vocab", front: "спать", reading: "spat", meaning: "to sleep", accept: ["to be asleep", "sleep", "to be sleeping"], example: { jp: "Мне нужно спать, потому что уже поздно.", en: "I need to sleep, because it is late already." }, drill: { jp: "Мне нужно спать сегодня", en: "I need to sleep today" }, hint: "SPAT, one syllable. Imperfective infinitive. Its present tense pushes an л into the first person — я сплю — which is worth hearing once. Спальня, unit 15, is built straight on it." },
        { id: "ru-u20l4-otdykhat", type: "vocab", front: "отдыхать", reading: "otdykhat", meaning: "to rest", accept: ["to relax", "to take a break", "to have a holiday"], example: { jp: "Мне нужно отдыхать, и это очень важно.", en: "I need to rest, and that is very important." }, drill: { jp: "Здесь можно отдыхать и спать", en: "Here you can rest and sleep" }, hint: "ad-dy-KHAT, stress at the end — and the тд in the middle collapses into one long d. Imperfective infinitive. It also covers being ON holiday: Russians отдыхают at the sea. The noun is отдых." },
        { id: "ru-u20l4-dyshat", type: "vocab", front: "дышать", reading: "dyshat", meaning: "to breathe", accept: ["to take a breath", "breathe", "to draw breath"], example: { jp: "Здесь трудно дышать, потому что жара.", en: "It is hard to breathe here, because of the heat." }, drill: { jp: "Здесь трудно дышать сегодня", en: "It is hard to breathe here today" }, hint: "dy-SHAT, stress at the end, with the hard ы. Imperfective infinitive. Дыши — breathe — is what a Russian doctor says with a stethoscope, and воздух is the air you are breathing." },
        { id: "ru-u20l4-pomogat", type: "vocab", front: "помогать", reading: "pomogat", meaning: "to help", accept: ["to assist", "help", "to be of help"], example: { jp: "Здесь нужно помогать, и это правильно.", en: "One should help here, and that is right." }, drill: { jp: "Нужно помогать каждый день", en: "One should help every day" }, hint: "pa-ma-GAT, stress at the end, both о reduced. Imperfective infinitive. It takes its object in the DATIVE, not the accusative — помогать врачу, to help the doctor — one of the fixed dative frames unit1.js §5 allows at A1." },
        { id: "ru-u20l4-silnyy", type: "vocab", front: "сильный", reading: "silnyy", meaning: "strong", accept: ["powerful", "forceful", "a strong one"], example: { jp: "Здесь сильный ветер, и это опасно.", en: "There is a strong wind here, and that is dangerous." }, drill: { jp: "Сильный ветер и сильный дождь", en: "A strong wind and heavy rain" }, hint: "SIL-nyy, stress first, and the ль is soft. The adjective to the adverb сильно from unit 5 — сильно болит, but сильный ветер. Of rain or wind it means heavy rather than strong." },
        { id: "ru-u20l4-slabyy", type: "vocab", front: "слабый", reading: "slabyy", meaning: "weak", accept: ["feeble", "faint", "a weak one"], example: { jp: "Я сегодня слабый, потому что у меня простуда.", en: "I am weak today, because I have a cold." }, drill: { jp: "Сегодня я очень слабый", en: "Today I am very weak" }, hint: "SLA-byy, stress first. The opposite of сильный, and its adverb слабо means weakly. Слабое место is a weak spot, exactly the same metaphor as English." },
      ],
    },
  ],
};
