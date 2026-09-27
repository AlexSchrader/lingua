// RU Unit 17 — Дни и месяцы ("Days and months") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Conventions are declared in ru/unit1.js §1–§10 and bind every card here.
//
// TWELVE OF THESE 24 CARDS ARE MONTH NAMES, AND THAT IS A DELIBERATE CHOICE.
// The meaning of `сентябрь` is nearly free to an English speaker, so on the face
// of it twelve such cards look thin. Three reasons they stay:
//   1. CEFR A1 wants the whole calendar, and no other slot in u1–u30 has it.
//      Teaching six months would leave the learner unable to read half the dates
//      they meet.
//   2. They are exactly the u9 exercise — meaning free, DECODING is the work —
//      and the decoding here is real: сентябрь · октябрь · ноябрь · декабрь are
//      four words that differ in two letters and all stress the final -брь.
//   3. Every one of them is MASCULINE in -ь, which makes them the cheapest
//      possible drill of the rule unit1.js §3 cares most about.
// The hints therefore carry the load: stress, the -брь group, and where the name
// came from. They are not filler cards with a gloss and nothing else.
//
// ⚠️ `май` IS THE FREE-PASS TRAP FROM unit1.js §9, and it is the reason its gloss
// reads "the month of May" rather than "May". `produceIsFreePass` fires when
// checkProduce(meaning) passes, and май's reading IS "may" — so the bare gloss
// would have accepted the prompt as its own answer. Measured on all 24 items here:
// 0 produce free passes, 0 meaning free passes.
//
// ⚠️ `выходной` LOST AN ACCEPT ENTRY to a gloss collision no tool would catch.
// It was "a holiday (from work)" — and `normalizeMeaning` strips the parenthetical
// and the article, leaving exactly "holiday", which is u10's `праздник`. It now
// accepts "a rest day", "a weekend day", "a non-working day" and nothing that
// normalises onto праздник.
//
// ⚠️ NO PAST TENSE IN ANY SENTENCE HERE, even though `вчера` (yesterday) invites
// one. The past is u24's (unit1.js §5 defers the whole paradigm), and был/была are
// taught nowhere yet — so вчера's example and drill pair it with сегодня and an
// adverb instead of reaching for a verb form the learner has never seen.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT17 = {
  id: "ru-u17",
  lang: "ru",
  title: "Дни и месяцы",
  order: 17,
  stage: "a1",
  lessons: [
    {
      id: "ru-u17l1",
      unit: 17,
      lesson: 1,
      title: "Monday to Saturday",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the working days of the week and say what you do on one of them.",
      items: [
        { id: "ru-u17l1-ponedelnik", type: "vocab", front: "понедельник", reading: "ponedelnik", meaning: "Monday", accept: ["a Monday", "on Monday"], example: { jp: "В понедельник я всегда работаю.", en: "On Monday I always work." }, drill: { jp: "В понедельник мы уже дома", en: "On Monday we are home again" }, hint: "pa-ni-DYEL-nik, stress on DYEL — four syllables. Masculine. Built on по- + неделя, where неделя once meant the day of REST, so Monday is the day after the rest day. Russian day names are lower case." },
        { id: "ru-u17l1-vtornik", type: "vocab", front: "вторник", reading: "vtornik", meaning: "Tuesday", accept: ["a Tuesday", "on Tuesday"], example: { jp: "В понедельник и вторник я работаю.", en: "On Monday and Tuesday I work." }, drill: { jp: "Вторник это наш выходной", en: "Tuesday is our day off" }, hint: "FTOR-nik, stress first, and the в says f in front of the т. Masculine. Built on второй, second — Tuesday is simply the second day, wearing the same -ник ending as понедельник." },
        { id: "ru-u17l1-sreda", type: "vocab", front: "среда", reading: "sreda", meaning: "Wednesday", accept: ["a Wednesday", "on Wednesday"], example: { jp: "Среда это уже половина недели.", en: "Wednesday is already half the week." }, drill: { jp: "Среда это половина недели", en: "Wednesday is half the week" }, hint: "sri-DA, stress at the end, and the е reduces to i. FEMININE (-а) — one of only two days that is. It means the MIDDLE, so Wednesday is the middle of the week; the same word also means environment." },
        { id: "ru-u17l1-chetverg", type: "vocab", front: "четверг", reading: "chetverg", meaning: "Thursday", accept: ["a Thursday", "on Thursday"], example: { jp: "В четверг у нас всегда обед вместе.", en: "On Thursday we always have lunch together." }, drill: { jp: "В четверг мы всегда работаем", en: "On Thursday we always work" }, hint: "chit-VYERK, stress at the end, and the final г says k. Masculine. Built on четыре, four — the fourth day. После дождичка в четверг is the Russian for when pigs fly." },
        { id: "ru-u17l1-pyatnitsa", type: "vocab", front: "пятница", reading: "pyatnitsa", meaning: "Friday", accept: ["a Friday", "on Friday"], example: { jp: "В пятницу у нас уже выходной.", en: "On Friday we already have the day off." }, drill: { jp: "В пятницу мы уже дома", en: "On Friday we are home already" }, hint: "PYAT-ni-tsa, stress first. FEMININE (-а), like среда. Built on пять, five — the fifth day. Notice the pattern: Tuesday, Thursday and Friday are all just their own numbers." },
        { id: "ru-u17l1-subbota", type: "vocab", front: "суббота", reading: "subbota", meaning: "Saturday", accept: ["a Saturday", "on Saturday"], example: { jp: "В субботу мы всегда дома.", en: "On Saturday we are always at home." }, drill: { jp: "В субботу у нас обед", en: "On Saturday we have lunch" }, hint: "su-BO-ta, stress on BO, and the double б really is held long. Feminine (-а). It is the Hebrew sabbath borrowed through Greek — the only Russian day name that is not Slavic." },
      ],
    },
    {
      id: "ru-u17l2",
      unit: 17,
      lesson: 2,
      title: "Sunday, and the week around it",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say which day is your day off, and place something yesterday, today or tomorrow.",
      items: [
        { id: "ru-u17l2-voskresenye", type: "vocab", front: "воскресенье", reading: "voskresene", meaning: "Sunday", accept: ["a Sunday", "on Sunday"], example: { jp: "В воскресенье мы всегда дома вместе.", en: "On Sunday we are always at home together." }, drill: { jp: "Воскресенье это наш выходной", en: "Sunday is our day off" }, hint: "vas-kri-SYEN-ye, stress on SYEN — four syllables, the longest day name. NEUTER (-е). It means resurrection: воскресенье is Easter's own word, applied to every Sunday of the year." },
        { id: "ru-u17l2-nedelya", type: "vocab", front: "неделя", reading: "nedelya", meaning: "a week", accept: ["week", "the week", "seven days"], example: { jp: "Неделя здесь всегда очень долго.", en: "A week here always lasts a very long time." }, drill: { jp: "Неделя это уже долго", en: "A week is a long time already" }, hint: "ni-DYE-lya, stress on DYE. Feminine (-я). Built on не + делать, not-doing: the word originally meant the day OFF, which is exactly why понедельник is the day after it. This week is на этой неделе." },
        { id: "ru-u17l2-vykhodnoy", type: "vocab", front: "выходной", reading: "vykhodnoy", meaning: "a day off", accept: ["a rest day", "a weekend day", "a non-working day"], example: { jp: "Сегодня выходной, и я не работаю.", en: "Today is a day off, and I am not working." }, drill: { jp: "У нас сегодня выходной", en: "We have a day off today" }, hint: "vy-khad-NOY, stress right at the end. It is an ADJECTIVE doing a noun's job — выходной день with день dropped — so it takes adjective endings. Masculine. Built on выход, the exit from unit 12: the day you go out of work." },
        { id: "ru-u17l2-zavtra", type: "vocab", front: "завтра", reading: "zavtra", meaning: "tomorrow", accept: ["the next day", "on the following day"], example: { jp: "Завтра суббота, и это уже выходной.", en: "Tomorrow is Saturday, and that is a day off." }, drill: { jp: "Завтра у нас выходной", en: "Tomorrow we have a day off" }, hint: "ZAF-tra, stress first, and the в says f. An adverb, so it never changes its ending. Do not confuse it with завтрак, breakfast, in unit 13 — one letter longer, and the breakfast is named after the tomorrow." },
        { id: "ru-u17l2-vchera", type: "vocab", front: "вчера", reading: "vchera", meaning: "yesterday", accept: ["the day before", "on the previous day"], example: { jp: "Вчера и сегодня здесь дождь.", en: "Yesterday and today it is raining here." }, drill: { jp: "Вчера и сегодня очень холодно", en: "Yesterday and today it is very cold" }, hint: "fchi-RA, stress at the end — the в says f and the е reduces to i, so it sounds nothing like it looks. An adverb. The day before yesterday is позавчера, built straight on this word." },
        { id: "ru-u17l2-mesyats", type: "vocab", front: "месяц", reading: "mesyats", meaning: "a month", accept: ["month", "the month", "a moon"], example: { jp: "Этот месяц очень долго, и это трудно.", en: "This month is going on a very long time, and that is hard." }, drill: { jp: "Один месяц это немного", en: "One month is not long" }, hint: "MYE-syats, stress first. Masculine. It is ALSO the moon — a crescent is месяц and the full moon луна. After два, три, четыре it is месяца; after пять and up, месяцев." },
      ],
    },
    {
      id: "ru-u17l3",
      unit: 17,
      lesson: 3,
      title: "January to June",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the first six month names off a Russian date and say what the weather does in each.",
      items: [
        { id: "ru-u17l3-yanvar", type: "vocab", front: "январь", reading: "yanvar", meaning: "January", accept: ["the month of January"], example: { jp: "В январе здесь всегда мороз.", en: "In January there is always a hard frost here." }, drill: { jp: "Январь это зима и мороз", en: "January is winter and frost" }, hint: "yan-VAR, stress at the end. MASCULINE (-ь) — and so is every Russian month name, which is the one easy thing about them. Month names are lower case unless they open a sentence." },
        { id: "ru-u17l3-fevral", type: "vocab", front: "февраль", reading: "fevral", meaning: "February", accept: ["the month of February"], example: { jp: "В феврале здесь ещё зима.", en: "In February it is still winter here." }, drill: { jp: "Февраль это ещё зима", en: "February is still winter" }, hint: "fiv-RAL, stress at the end, and the first е reduces to i. MASCULINE (-ь). Note the в where English writes b: Russian took the name through Greek, which had lost its b sound." },
        { id: "ru-u17l3-mart", type: "vocab", front: "март", reading: "mart", meaning: "March", accept: ["the month of March"], example: { jp: "В марте здесь уже весна.", en: "In March it is spring here already." }, drill: { jp: "Март это уже весна", en: "March is already spring" }, hint: "MART, one syllable. Masculine, and one of only four month names that does NOT end in -ь. Международный женский день, the eighth of March, is one of the biggest days in the Russian year." },
        { id: "ru-u17l3-aprel", type: "vocab", front: "апрель", reading: "aprel", meaning: "April", accept: ["the month of April"], example: { jp: "В апреле здесь часто дождь.", en: "In April it often rains here." }, drill: { jp: "Апрель это весна и дождь", en: "April is spring and rain" }, hint: "ap-RYEL, stress at the end. MASCULINE (-ь). The р is softened by the е after it, so it comes out closer to ap-RYEL than to ap-REL." },
        { id: "ru-u17l3-may", type: "vocab", front: "май", reading: "may", meaning: "the month of May", accept: ["May"], example: { jp: "Май это уже весна и тепло.", en: "May is spring and warmth already." }, drill: { jp: "Май это уже тепло", en: "May is warm already" }, hint: "MAY, one syllable. Masculine, and the shortest month name. The gloss says the month of May on purpose: May on its own IS the reading, and a card whose prompt spells its own answer teaches nothing (unit1.js §9). Первое мая is still a public holiday." },
        { id: "ru-u17l3-iyun", type: "vocab", front: "июнь", reading: "iyun", meaning: "June", accept: ["the month of June"], example: { jp: "В июне здесь уже лето.", en: "In June it is summer here already." }, drill: { jp: "Июнь это уже лето", en: "June is summer already" }, hint: "i-YUN, stress at the end — two syllables, и then юнь. MASCULINE (-ь). It differs from июль by ONE letter, which is why Russians themselves add месяц — июнь месяц — when it matters which they mean." },
      ],
    },
    {
      id: "ru-u17l4",
      unit: 17,
      lesson: 4,
      title: "July to December",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the second half of the year off a Russian date, and hear the -брь group as one pattern.",
      items: [
        { id: "ru-u17l4-iyul", type: "vocab", front: "июль", reading: "iyul", meaning: "July", accept: ["the month of July"], example: { jp: "В июле здесь всегда жара.", en: "In July it is always baking here." }, drill: { jp: "Июль это лето и жара", en: "July is summer and heat" }, hint: "i-YUL, stress at the end. MASCULINE (-ь). One letter from июнь — which is why both get месяц tacked on in speech whenever the difference matters." },
        { id: "ru-u17l4-avgust", type: "vocab", front: "август", reading: "avgust", meaning: "August", accept: ["the month of August"], example: { jp: "В августе здесь ещё тепло.", en: "In August it is still warm here." }, drill: { jp: "Август это уже не жара", en: "August is not the heat any more" }, hint: "AV-gust, stress first — and here the в keeps its v, in front of the г. Masculine, and the third of the four months with no -ь. Named for the emperor Augustus, exactly as in English." },
        { id: "ru-u17l4-sentyabr", type: "vocab", front: "сентябрь", reading: "sentyabr", meaning: "September", accept: ["the month of September"], example: { jp: "В сентябре здесь уже осень.", en: "In September it is autumn here already." }, drill: { jp: "Сентябрь это уже осень", en: "September is autumn already" }, hint: "sin-TYABR, stress at the end, and the брь at the end is one soft cluster with no vowel. MASCULINE (-ь). Named seventh, from a Roman year that began in March — which is why it now sits ninth." },
        { id: "ru-u17l4-oktyabr", type: "vocab", front: "октябрь", reading: "oktyabr", meaning: "October", accept: ["the month of October"], example: { jp: "В октябре здесь уже очень холодно.", en: "In October it is very cold here already." }, drill: { jp: "Октябрь это осень и дождь", en: "October is autumn and rain" }, hint: "ak-TYABR, stress at the end. MASCULINE (-ь). The last four months ALL end in -брь and ALL put the stress on it — learn them as one group of four, not as four separate words." },
        { id: "ru-u17l4-noyabr", type: "vocab", front: "ноябрь", reading: "noyabr", meaning: "November", accept: ["the month of November"], example: { jp: "В ноябре здесь уже снег.", en: "In November there is snow here already." }, drill: { jp: "Ноябрь это уже снег", en: "November means snow already" }, hint: "na-YABR, stress at the end, and the о reduces to a. MASCULINE (-ь). Named ninth from that old March start and now the eleventh — the arithmetic is two out on every one of this group." },
        { id: "ru-u17l4-dekabr", type: "vocab", front: "декабрь", reading: "dekabr", meaning: "December", accept: ["the month of December"], example: { jp: "В декабре здесь зима и мороз.", en: "In December there is winter and frost here." }, drill: { jp: "Декабрь это зима и снег", en: "December is winter and snow" }, hint: "di-KABR, stress at the end, first е reduced to i. MASCULINE (-ь). Russian New Year rather than Christmas is the big night of the year — тридцать первое декабря." },
      ],
    },
  ],
};
