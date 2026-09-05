// NO Unit 5 — Tall og tid ("Numbers and time") — A1
// One to ten, the words for counting, the units of time, and telling the clock.
// Conventions are declared in no/unit1.js and bind every unit.
//
// ONE IS TAUGHT AS `én`, NOT `en`. The numeral and the masculine indefinite
// article are the same word, and the front `en` would be a card whose prompt is
// its own answer everywhere else in the corpus. Written Bokmål marks the numeral
// with an acute — én bror, "one brother" — so the card teaches the orthography
// that actually disambiguates it. The reading folds to "en" (é decomposes under
// NFD), which is correct: the acute is a stress mark, not a new sound.
//
// `ei klokke` IS THE CARD, NOT `klokka`. Telling the time uses the definite —
// klokka er ti — but the front stays indefinite per unit1.js §1, and the definite
// does its work in the hint and in lesson 4's examples. A card fronted klokka
// would teach the learner a form they cannot derive the gender from.
//
// TODAY/TOMORROW/YESTERDAY ARE NOT HERE. i dag, i morgen and i går belong with the
// days and months (slot u9, block 2) — and i morgen would collide with u2's frozen
// greeting god morgen if both landed in one block. Left deliberately.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT5 = {
  id: "no-u5",
  lang: "no",
  title: "Tall og tid",
  order: 5,
  stage: "a1",
  lessons: [
    {
      id: "no-u5l1",
      unit: 5,
      lesson: 1,
      title: "One to six",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Count from one to six and say how many of something you have: Vi har to barn.",
      items: [
        { id: "no-u5l1-en", type: "vocab", front: "én", reading: "en", meaning: "one", example: { jp: "Jeg har én bror.", en: "I have one brother." }, accept: ["1", "a single one"], drill: { jp: "Vi har én katt", en: "We have one cat" }, hint: "The numeral is written with an acute — én — to keep it apart from en, the masculine article. Before a neuter noun it becomes ett: ett barn." },
        { id: "no-u5l1-to", type: "vocab", front: "to", reading: "to", meaning: "two", example: { jp: "Vi har to barn.", en: "We have two children." }, accept: ["2"], drill: { jp: "Jeg har to søstre", en: "I have two sisters" }, hint: "TOO. Notice barn does not change — neuter one-syllable nouns keep the same form in the plural." },
        { id: "no-u5l1-tre", type: "vocab", front: "tre", reading: "tre", meaning: "three", example: { jp: "Erling har tre venner.", en: "Erling has three friends." }, accept: ["3"], drill: { jp: "Vi møter tre elever", en: "We are meeting three pupils" }, hint: "TREH. It is also the word for a tree, and for wood — et tre." },
        { id: "no-u5l1-fire", type: "vocab", front: "fire", reading: "fire", meaning: "four", example: { jp: "Et hus har fire rom.", en: "A house has four rooms." }, accept: ["4"], drill: { jp: "Jeg jobber fire timer", en: "I work four hours" }, hint: "FEE-re, two syllables. Nothing to do with the English word it looks like." },
        { id: "no-u5l1-fem", type: "vocab", front: "fem", reading: "fem", meaning: "five", example: { jp: "Familien min har fem barn.", en: "My family has five children." }, accept: ["5"], drill: { jp: "Kari har fem barn", en: "Kari has five children" }, hint: "FEM, short and flat. Femten is fifteen and femti is fifty — the stem is doing all the work." },
        { id: "no-u5l1-seks", type: "vocab", front: "seks", reading: "seks", meaning: "six", example: { jp: "Seks elever snakker norsk.", en: "Six pupils speak Norwegian." }, accept: ["6"], drill: { jp: "Jeg har seks venner", en: "I have six friends" }, hint: "SEKS, said exactly as written — and yes, it is a homophone of the other seks. Norwegians are entirely used to it." },
      ],
    },
    {
      id: "no-u5l2",
      unit: 5,
      lesson: 2,
      title: "Seven to ten, and how many",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Finish the count to ten, and ask how many there are: hvor mange?",
      items: [
        { id: "no-u5l2-sju", type: "vocab", front: "sju", reading: "sju", meaning: "seven", example: { jp: "Han har sju katter.", en: "He has seven cats." }, accept: ["7"], drill: { jp: "Vi har sju barn", en: "We have seven children" }, hint: "SHUE — sj is the broad sh from unit 1. There is an older spelling, syv, still used by plenty of people; sju is the standard one to learn." },
        { id: "no-u5l2-atte", type: "vocab", front: "åtte", reading: "atte", meaning: "eight", example: { jp: "Åtte elever er her.", en: "Eight pupils are here." }, accept: ["8"], drill: { jp: "Klokka er åtte nå", en: "It is eight o'clock now" }, hint: "OT-te, with the rounded å and a double t. Åtti is eighty — the same stem doing the same job as femten and femti." },
        { id: "no-u5l2-ni", type: "vocab", front: "ni", reading: "ni", meaning: "nine", example: { jp: "Vi møter ni venner.", en: "We are meeting nine friends." }, accept: ["9"], drill: { jp: "Ni barn bor her", en: "Nine children live here" }, hint: "NEE. Nineteen is nitten and ninety is nitti — close enough to trip over, so listen for the ending." },
        { id: "no-u5l2-ti", type: "vocab", front: "ti", reading: "ti", meaning: "ten", example: { jp: "Erling har ti venner.", en: "Erling has ten friends." }, accept: ["10"], drill: { jp: "Kari er ti år", en: "Kari is ten years old" }, hint: "TEE. From here the pattern is regular: elleve, tolv, tretten, fjorten…" },
        { id: "no-u5l2-ettall", type: "vocab", front: "et tall", reading: "ettall", meaning: "number", example: { jp: "Ti er et tall.", en: "Ten is a number." }, accept: ["a number", "figure", "digit"], drill: { jp: "Fem er et tall", en: "Five is a number" }, hint: "Neuter: definite tallet, plural tall — unchanged. For a phone number Norwegians say et nummer instead." },
        { id: "no-u5l2-mange", type: "vocab", front: "mange", reading: "mange", meaning: "many", example: { jp: "Erling har mange venner.", en: "Erling has many friends." }, accept: ["a lot of", "lots of", "numerous"], drill: { jp: "Vi har mange barn", en: "We have many children" }, hint: "MANG-e. Pair it with hvor to ask the count: hvor mange barn har du? Use mange for countable things, mye for uncountable." },
      ],
    },
    {
      id: "no-u5l3",
      unit: 5,
      lesson: 3,
      title: "Days, nights, hours, years",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the units of time — dag, natt, time, år — say how old someone is, and ask when: Når begynner du?",
      items: [
        { id: "no-u5l3-endag", type: "vocab", front: "en dag", reading: "endag", meaning: "day", example: { jp: "En dag har mange timer.", en: "A day has many hours." }, accept: ["a day", "daytime"], drill: { jp: "Erling jobber en dag i Oslo", en: "Erling works one day in Oslo" }, hint: "DAHG. Masculine: definite dagen, plural dager. God dag is the formal daytime greeting, one notch stiffer than hei." },
        { id: "no-u5l3-einatt", type: "vocab", front: "ei natt", reading: "einatt", meaning: "night", example: { jp: "Jeg jobber ei natt.", en: "I am working one night." }, accept: ["a night", "nighttime"], drill: { jp: "Jeg jobber ei natt i Oslo", en: "I work one night in Oslo" }, hint: "Feminine: definite natta, plural netter — the vowel shifts. God natt is what you say on the way to bed, never on arrival." },
        { id: "no-u5l3-entime", type: "vocab", front: "en time", reading: "entime", meaning: "hour", example: { jp: "Erling jobber en time.", en: "Erling works for an hour." }, accept: ["an hour", "lesson", "class", "a class"], drill: { jp: "Jeg lærer norsk en time", en: "I learn Norwegian for an hour" }, hint: "TEE-me. It also means a school lesson — en norsktime is a Norwegian class." },
        { id: "no-u5l3-etar", type: "vocab", front: "et år", reading: "etar", meaning: "year", example: { jp: "Erling er ti år.", en: "Erling is ten years old." }, accept: ["a year"], drill: { jp: "Et år har mange dager", en: "A year has many days" }, hint: "OR, with the rounded å. Age drops the \"old\" altogether — jeg er ti år, not \"ti år gammel\", though both are correct. Plural år, unchanged." },
        { id: "no-u5l3-eiklokke", type: "vocab", front: "ei klokke", reading: "eiklokke", meaning: "clock", example: { jp: "Jeg har ei klokke.", en: "I have a watch." }, accept: ["a clock", "watch", "a watch", "bell"], drill: { jp: "Kari kjøper ei klokke", en: "Kari is buying a clock" }, hint: "Feminine: definite klokka — and that is the form you tell time with. Klokka er ti means \"it is ten o'clock\", literally \"the clock is ten\". In print you will also see klokken; both are correct Bokmål." },
        { id: "no-u5l3-nar", type: "vocab", front: "når", reading: "nar", meaning: "when", example: { jp: "Når jobber du?", en: "When do you work?" }, accept: ["at what time", "when?"], drill: { jp: "Når begynner vi", en: "When do we begin" }, hint: "NOR — one letter away from nå, \"now\", but a long å and an r. når asks the question; nå answers it." },
      ],
    },
    {
      id: "no-u5l4",
      unit: 5,
      lesson: 4,
      title: "Telling the time",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what time something happens, whether it is early or late, and open a sentence with nå — sending the verb ahead of the subject.",
      items: [
        { id: "no-u5l4-halv", type: "vocab", front: "halv", reading: "halv", meaning: "half", example: { jp: "Klokka er halv ti.", en: "It is half past nine." }, accept: ["a half", "half of"], drill: { jp: "Vi begynner halv ni", en: "We begin at half past eight" }, hint: "The l is silent: HAL. Careful — halv ti is half an hour BEFORE ten, so it means half past nine. Norwegian counts toward the coming hour, not away from the last one." },
        { id: "no-u5l4-tidlig", type: "vocab", front: "tidlig", reading: "tidlig", meaning: "early", example: { jp: "Erling begynner tidlig.", en: "Erling starts early." }, accept: ["in good time", "at an early hour"], drill: { jp: "Kari slutter tidlig", en: "Kari finishes early" }, hint: "TEE-li — silent d AND silent -ig g, two of unit 1's rules in one short word." },
        { id: "no-u5l4-sent", type: "vocab", front: "sent", reading: "sent", meaning: "late", example: { jp: "Det er sent nå.", en: "It is late now." }, accept: ["at a late hour", "late in the day"], drill: { jp: "Jeg slutter sent", en: "I finish late" }, hint: "SAYNT. The opposite of tidlig. For a person who IS late, Norwegians say forsinket." },
        { id: "no-u5l4-na", type: "vocab", front: "nå", reading: "na", meaning: "now", example: { jp: "Nå begynner vi.", en: "Now we begin." }, accept: ["right now", "at present", "currently"], drill: { jp: "Nå slutter jeg", en: "Now I am finishing" }, hint: "V2 again: nå takes slot one, begynner comes second, vi is pushed behind it. And keep it apart from når — nå is now, når is when." },
        { id: "no-u5l4-abegynne", type: "vocab", front: "å begynne", reading: "abegynne", meaning: "to begin", example: { jp: "Vi begynner klokka ti.", en: "We begin at ten o'clock." }, accept: ["begin", "to start", "start"], drill: { jp: "Det er viktig å begynne tidlig", en: "It is important to begin early" }, hint: "be-YUEN-ne — the g before y is a y sound, as in å gi. Note that \"at ten o'clock\" needs no preposition at all: klokka ti." },
        { id: "no-u5l4-aslutte", type: "vocab", front: "å slutte", reading: "aslutte", meaning: "to finish", example: { jp: "Jeg slutter sent.", en: "I finish late." }, accept: ["finish", "to stop", "stop", "to end", "end"], drill: { jp: "Det er bra å slutte tidlig", en: "It is good to finish early" }, hint: "SLUET-te. The opposite of å begynne, and the noun slutt means \"the end\"." },
      ],
    },
  ],
};
