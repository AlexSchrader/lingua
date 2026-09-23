// NO Unit 116 — Klokka og døgnet (slot: coverage-b2-6) — B2
// COVERAGE UNIT, block 3. Scaffolded "Vocabulary 6 (B2)"; retitled to what it
// covers, per CLAUDE.md "No front language".
//
// MEASURED. u5l4 is titled "Telling the time" and teaches halv, tidlig, sent,
// nå, å begynne, å slutte. Screened against the closed clock-and-day set, what
// it does NOT teach is: kvart (the other half of halv — kvart over, kvart på),
// et klokkeslett, ei midnatt, en formiddag, en ettermiddag, en hverdag, en
// ukedag. With u114's numerals missing as well, the course could name the clock
// and not read it. That is the hole this unit closes, and it only works because
// u114 lands first.
//
// ⚠️ `en kveld` IS TAUGHT HERE AND THAT IS DELIBERATE — READ THIS BEFORE
// "FIXING" IT. The corpus froze `god kveld` (u2) and `i kveld` (u9) as whole
// formulas under unit1.js §7 and NEVER taught the bare noun. §7 itself flags the
// same trap for `morgen`, which a later block did close (`en morgen`, u77l1).
// `kveld` was left open. This is the mirror image of the §7 licence rather than
// a breach of it: the formula came first and the word never came at all, so a
// learner can say good evening and cannot say "a long evening". The front `en
// kveld` is unique, the lexeme is genuinely distinct from both formulas, and the
// hint names all three so the learner meets the relationship explicitly.
//
// Conventions per no/unit1.js. Readings are hand-written ASCII folds.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT116 = {
  id: "no-u116",
  lang: "no",
  title: "Klokka og døgnet",
  order: 116,
  stage: "b2",
  lessons: [
    {
      id: "no-u116l1",
      unit: 116,
      lesson: 1,
      title: "Å lese klokka",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read a clock out loud — quarter past, quarter to, midday, midnight.",
      items: [
        { id: "no-u116l1-kvart", type: "vocab", front: "kvart", reading: "kvart", meaning: "quarter (on the clock)", example: { jp: "Møtet begynner kvart over ni.", en: "The meeting starts at quarter past nine." }, accept: ["a quarter", "quarter past", "quarter to"], drill: { jp: "Møtet begynner kvart over ni", en: "The meeting starts at quarter past nine" }, hint: "Two frames and that is all: kvart over (past) and kvart på (to). It is the partner of halv from u5 — and beware halv tre, which means half past TWO, not three." },
        { id: "no-u116l1-etklokkeslett", type: "vocab", front: "et klokkeslett", reading: "etklokkeslett", meaning: "time of day (a clock time)", example: { jp: "Send meg et klokkeslett som passer for deg.", en: "Send me a time that suits you." }, accept: ["a time", "the hour", "clock time"], drill: { jp: "Send meg et klokkeslett i dag", en: "Send me a time today" }, hint: "The exact point on the clock, as against tid, which is time in general. Norwegian needs this word where English just says 'a time'." },
        { id: "no-u116l1-eimidnatt", type: "vocab", front: "ei midnatt", reading: "eimidnatt", meaning: "midnight", example: { jp: "Toget kommer like før midnatt.", en: "The train arrives just before midnight." }, accept: ["12 at night", "the middle of the night"], drill: { jp: "Vi kom hjem ei midnatt i mai", en: "We came home one midnight in May" }, hint: "midt + natt, and it inherits natt's feminine gender: midnatta. Usually used bare with a preposition — før midnatt, etter midnatt." },
        { id: "no-u116l1-enformiddag", type: "vocab", front: "en formiddag", reading: "enformiddag", meaning: "late morning", example: { jp: "Legen har ledig time på formiddagen.", en: "The doctor has a free appointment in the late morning." }, accept: ["forenoon", "morning (before noon)", "am"], drill: { jp: "Legen har en formiddag ledig", en: "The doctor has one late morning free" }, hint: "The stretch from roughly nine to noon — after morgen, before middag. English has no single word for it, which is exactly why it has to be learned." },
        { id: "no-u116l1-enettermiddag", type: "vocab", front: "en ettermiddag", reading: "enettermiddag", meaning: "afternoon", example: { jp: "Barna er hjemme hele ettermiddagen.", en: "The children are at home all afternoon." }, accept: ["the afternoon", "pm"], drill: { jp: "Vi møtes en ettermiddag i uka", en: "We meet one afternoon a week" }, hint: "etter + middag, literally after dinner — because middag used to mean midday. The pair formiddag/ettermiddag splits the working day in two." },
        { id: "no-u116l1-presis", type: "vocab", front: "presis", reading: "presis", meaning: "on the dot", example: { jp: "Bussen gikk presis klokka åtte.", en: "The bus left at eight on the dot." }, accept: ["exactly", "punctual", "sharp"], drill: { jp: "Bussen gikk presis klokka åtte", en: "The bus left at eight on the dot" }, hint: "Both an adverb on a time and an adjective about a person: han er presis, he is punctual. Stress the last syllable: pre-SIS." },
      ],
    },
    {
      id: "no-u116l2",
      unit: 116,
      lesson: 2,
      title: "Hverdag og fridag",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say which kind of day it is — a weekday, a working day, a day off — and talk about an evening.",
      items: [
        { id: "no-u116l2-enkveld", type: "vocab", front: "en kveld", reading: "enkveld", meaning: "evening", example: { jp: "Det var en lang kveld på kontoret.", en: "It was a long evening at the office." }, accept: ["an evening", "the evening", "night (early)"], drill: { jp: "Det var en kveld i mai", en: "It was an evening in May" }, hint: "You already have god kveld (u2) and i kveld (u9) as fixed phrases — this is the noun itself, which the course had never taught. Definite kvelden, plural kvelder." },
        { id: "no-u116l2-enhverdag", type: "vocab", front: "en hverdag", reading: "enhverdag", meaning: "ordinary weekday", example: { jp: "Butikken stenger tidligere på en hverdag.", en: "The shop closes earlier on a weekday." }, accept: ["weekday", "everyday life", "workday"], drill: { jp: "Butikken stenger tidlig på en hverdag", en: "The shop closes early on a weekday" }, hint: "hver + dag. Two senses: a non-weekend day, and 'everyday life' in general — i hverdagen, in daily life." },
        { id: "no-u116l2-enukedag", type: "vocab", front: "en ukedag", reading: "enukedag", meaning: "day of the week", example: { jp: "Hvilken ukedag passer best for deg?", en: "Which day of the week suits you best?" }, accept: ["weekday", "a day of the week"], drill: { jp: "Mandag er en ukedag også", en: "Monday is a day of the week too" }, hint: "The neutral name for a slot in the week — mandag is en ukedag, and so is lørdag. Hverdag excludes the weekend; ukedag does not." },
        { id: "no-u116l2-enarbeidsdag", type: "vocab", front: "en arbeidsdag", reading: "enarbeidsdag", meaning: "working day", example: { jp: "En vanlig arbeidsdag varer i sju og en halv time.", en: "An ordinary working day lasts seven and a half hours." }, accept: ["a work day", "shift", "day at work"], drill: { jp: "En arbeidsdag varer sju timer", en: "A working day lasts seven hours" }, hint: "Note the linking -s- in arbeid-s-dag; Norwegian compounds often need it, and leaving it out sounds foreign." },
        { id: "no-u116l2-enfridag", type: "vocab", front: "en fridag", reading: "enfridag", meaning: "day off", example: { jp: "Hun tok en fridag og reiste til fjellet.", en: "She took a day off and travelled to the mountain." }, accept: ["free day", "holiday (a day)", "rest day"], drill: { jp: "Hun tok en fridag i går", en: "She took a day off yesterday" }, hint: "fri + dag. En ferie is a whole holiday; en fridag is a single day, and it is what you ask your boss for." },
        { id: "no-u116l2-dognapen", type: "vocab", front: "døgnåpen", reading: "dognapen", meaning: "open around the clock", example: { jp: "Butikken i gata er døgnåpen hele uka.", en: "The shop in the street is open round the clock all week." }, accept: ["open 24 hours", "always open", "24/7"], drill: { jp: "Butikken er døgnåpen hele uka", en: "The shop is open round the clock all week" }, hint: "From døgn (u47), the 24-hour day. Norwegian has one word for what English needs four for — and the neuter is døgnåpent." },
      ],
    },
    {
      id: "no-u116l3",
      unit: 116,
      lesson: 3,
      title: "Hvor ofte",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how often something happens — daily, weekly, monthly, every other day.",
      items: [
        { id: "no-u116l3-daglig", type: "vocab", front: "daglig", reading: "daglig", meaning: "daily", example: { jp: "Han tar medisinen sin daglig om morgenen.", en: "He takes his medicine daily in the morning." }, accept: ["every day", "day-to-day"], drill: { jp: "Han tar medisinen sin daglig", en: "He takes his medicine daily" }, hint: "dag + -lig, and the whole series below is built the same way. The -ig is silent at the end: DAG-li." },
        { id: "no-u116l3-ukentlig", type: "vocab", front: "ukentlig", reading: "ukentlig", meaning: "weekly", example: { jp: "Vi har et ukentlig møte på tirsdager.", en: "We have a weekly meeting on Tuesdays." }, accept: ["every week", "once a week"], drill: { jp: "Vi har et ukentlig møte", en: "We have a weekly meeting" }, hint: "Note the extra -nt-: uke becomes ukentlig, not 'ukelig'. It is the one irregular member of the series." },
        { id: "no-u116l3-manedlig", type: "vocab", front: "månedlig", reading: "manedlig", meaning: "monthly", example: { jp: "Husleia er en fast månedlig utgift.", en: "The rent is a fixed monthly expense." }, accept: ["every month", "once a month"], drill: { jp: "Husleia er en månedlig utgift", en: "The rent is a monthly expense" }, hint: "måned + -lig, regular. The d is silent: MÅ-ne-li." },
        { id: "no-u116l3-arlig", type: "vocab", front: "årlig", reading: "arlig", meaning: "yearly", example: { jp: "Skolen har en årlig fest i desember.", en: "The school has a yearly party in December." }, accept: ["annual", "every year", "annually"], drill: { jp: "Skolen har en årlig fest", en: "The school has a yearly party" }, hint: "år + -lig. Do not hear ærlig, honest — the vowel is the rounded å, not æ, and they are different words." },
        { id: "no-u116l3-jevnlig", type: "vocab", front: "jevnlig", reading: "jevnlig", meaning: "at regular intervals", example: { jp: "Hun besøker foreldrene sine jevnlig gjennom året.", en: "She visits her parents regularly through the year." }, accept: ["regularly", "steadily", "at intervals"], drill: { jp: "Hun besøker foreldrene sine jevnlig", en: "She visits her parents regularly" }, hint: "From jevn, even. It says the gaps are even without saying how long they are — the honest word when you do not mean exactly weekly." },
        { id: "no-u116l3-annenhver", type: "vocab", front: "annenhver", reading: "annenhver", meaning: "every other", example: { jp: "Bussen går annenhver time på søndager.", en: "The bus runs every other hour on Sundays." }, accept: ["every second", "alternate"], drill: { jp: "Bussen går annenhver time", en: "The bus runs every other hour" }, hint: "annen + hver, written as one word. The neuter is annethvert: annethvert år, every other year." },
      ],
    },
    {
      id: "no-u116l4",
      unit: 116,
      lesson: 4,
      title: "I tide eller for sent",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say whether something happened in time, in advance, at once, or at the last minute.",
      items: [
        { id: "no-u116l4-itide", type: "vocab", front: "i tide", reading: "itide", meaning: "in time", example: { jp: "Vi rakk toget i tide selv om vi gikk sent.", en: "We caught the train in time even though we walked slowly." }, accept: ["in good time", "before it is too late"], drill: { jp: "Vi rakk toget i tide", en: "We caught the train in time" }, hint: "A frozen phrase — tid never takes an article here. Against i tida, which means 'these days'." },
        { id: "no-u116l4-iforveien", type: "vocab", front: "i forveien", reading: "iforveien", meaning: "beforehand", example: { jp: "Du må bestille bord i forveien på lørdager.", en: "You have to book a table beforehand on Saturdays." }, accept: ["in advance", "ahead of time"], drill: { jp: "Du må bestille bord i forveien", en: "You have to book a table beforehand" }, hint: "Literally 'in the way ahead'. Interchangeable with på forhånd (u62) in most sentences." },
        { id: "no-u116l4-medengang", type: "vocab", front: "med en gang", reading: "medengang", meaning: "straight away", example: { jp: "Hun svarte med en gang hun leste meldinga.", en: "She answered straight away when she read the message." }, accept: ["at once", "immediately", "right away"], drill: { jp: "Hun svarte med en gang", en: "She answered straight away" }, hint: "The everyday spoken 'immediately'. Straks (u21) is the tighter, slightly more formal twin." },
        { id: "no-u116l4-isisteliten", type: "vocab", front: "i siste liten", reading: "isisteliten", meaning: "at the last minute", example: { jp: "Han leverte oppgaven i siste liten før fristen.", en: "He handed in the task at the last minute before the deadline." }, accept: ["just in time", "at the eleventh hour"], drill: { jp: "Han leverte oppgaven i siste liten", en: "He handed in the task at the last minute" }, hint: "Liten here is an old noun meaning 'moment', not the adjective 'small' — which is why the phrase is frozen and cannot be taken apart." },
        { id: "no-u116l4-entidsfrist", type: "vocab", front: "en tidsfrist", reading: "entidsfrist", meaning: "time limit", example: { jp: "Vi fikk en tidsfrist på to uker.", en: "We were given a time limit of two weeks." }, accept: ["deadline", "a time limit", "cut-off"], drill: { jp: "Vi fikk en tidsfrist på to uker", en: "We were given a time limit of two weeks" }, hint: "The linking -s- again: tid-s-frist. En frist (u24) alone already means deadline; tidsfrist spells out that it is a period, not a date." },
        { id: "no-u116l4-patimen", type: "vocab", front: "på timen", reading: "patimen", meaning: "on the spot", example: { jp: "Sjefen ga henne svar på timen.", en: "The boss gave her an answer on the spot." }, accept: ["there and then", "instantly", "at once"], drill: { jp: "Sjefen ga henne svar på timen", en: "The boss gave her an answer on the spot" }, hint: "A frozen phrase built on time, hour. It carries a hint of surprise or force — han fikk sparken på timen, he was fired on the spot." },
      ],
    },
  ],
};
