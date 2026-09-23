// NO Unit 114 — Tall over ti (slot: coverage-b2-4) — B2
// COVERAGE UNIT, block 3. Scaffolded "Vocabulary 4 (B2)", which is the scaffold
// saying it does not know what is missing. Retitled per CLAUDE.md ("No front
// language") to what it actually covers.
//
// WHY THIS UNIT EXISTS — MEASURED, NOT CHOSEN. Screened every one of the 2025
// taught `no` fronts against the closed numeral set. Result: the course teaches
// én, to, tre, fire, fem, seks, sju, åtte, ni, ti at u5 AND STOPS THERE. Not one
// of elleve, tolv, tretten, fjorten, femten, seksten, sytten, atten, nitten,
// tjue, tretti, førti, femti, seksti, sytti, åtti, nitti, hundre, tusen, million
// or null is a front anywhere in the corpus — 0 of 22, after 87 units and 2032
// cards. A numeral system is a CLOSED CLASS, so an absence screen is genuinely
// discriminating here: there is no judgement call about whether "tretti" belongs
// in a Norwegian course.
//
// The hole is worse than a vocabulary gap because of what already ships around
// it: u5 teaches `et tall` (number), `ei klokke` (clock) and `halv`, and u5l4 is
// titled "Telling the time" — so the course builds the frame for saying a time,
// a price, an age, a year or a phone number, and then withholds every numeral
// above ten that would fill it. u47 "Mengde og mål" teaches meter, kilo, gram,
// liter and mil; the learner can name the unit and not the quantity.
//
// ⚠️ IT IS A1 CONTENT IN A B2 SLOT AND THAT IS CORRECT, NOT A MISTAKE. The
// coverage pass exists to close what the band above it left open. Filing this at
// u114 is late; leaving it open would be permanent. Flagged to block 1 in the
// hand-back: if a future re-cut moves numerals down to u5, this unit is the
// content to move, and the ids move with their audio (see RUNBOOK §4).
//
// Conventions per no/unit1.js: numerals are BARE fronts (they are numerals, not
// nouns, so §1's article rule does not apply); `en million`/`en milliard` ARE
// nouns and take their article. Readings are ASCII folds written by hand
// (ø→o, æ→ae, å→a). Every vocab item carries a drill.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT114 = {
  id: "no-u114",
  lang: "no",
  title: "Tall over ti",
  order: 114,
  stage: "b2",
  lessons: [
    {
      id: "no-u114l1",
      unit: 114,
      lesson: 1,
      title: "Elleve til seksten",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say any number from eleven to sixteen — an age, a time, a count of days.",
      items: [
        { id: "no-u114l1-elleve", type: "vocab", front: "elleve", reading: "elleve", meaning: "eleven", example: { jp: "Bussen går klokka elleve hver morgen.", en: "The bus leaves at eleven every morning." }, accept: ["11"], drill: { jp: "Bussen går klokka elleve", en: "The bus leaves at eleven" }, hint: "EL-ve — the double l is long and the e's are short. Elleve and tolv are the two irregular ones; from tretten on the pattern is regular." },
        { id: "no-u114l1-tolv", type: "vocab", front: "tolv", reading: "tolv", meaning: "twelve", example: { jp: "Et år har tolv måneder og mange uker.", en: "A year has twelve months and many weeks." }, accept: ["12"], drill: { jp: "Et år har tolv måneder", en: "A year has twelve months" }, hint: "The l is silent: TOL sounds closer to TOL with a dark o. Last of the two irregular teens." },
        { id: "no-u114l1-tretten", type: "vocab", front: "tretten", reading: "tretten", meaning: "thirteen", example: { jp: "Sønnen min er tretten år gammel nå.", en: "My son is thirteen years old now." }, accept: ["13"], drill: { jp: "Han er tretten år gammel", en: "He is thirteen years old" }, hint: "tre + -ten. From here the teens are just the small number plus -ten, exactly like English." },
        { id: "no-u114l1-fjorten", type: "vocab", front: "fjorten", reading: "fjorten", meaning: "fourteen", example: { jp: "Kurset varer i fjorten dager.", en: "The course lasts fourteen days." }, accept: ["14"], drill: { jp: "Kurset varer i fjorten dager", en: "The course lasts fourteen days" }, hint: "fire becomes fjor- here, the way four becomes four-teen. Fjorten dager is also the ordinary Norwegian for a fortnight." },
        { id: "no-u114l1-femten", type: "vocab", front: "femten", reading: "femten", meaning: "fifteen", example: { jp: "Toget kommer om femten minutter.", en: "The train arrives in fifteen minutes." }, accept: ["15"], drill: { jp: "Toget kommer om femten minutter", en: "The train arrives in fifteen minutes" }, hint: "fem + -ten, with no change to the stem. Om femten minutter — om is the 'in' of future time." },
        { id: "no-u114l1-seksten", type: "vocab", front: "seksten", reading: "seksten", meaning: "sixteen", example: { jp: "Hun er seksten år og går fortsatt på skolen.", en: "She is sixteen and still goes to school." }, accept: ["16"], drill: { jp: "Hun er seksten år gammel", en: "She is sixteen years old" }, hint: "Said SEYS-ten — the ks is NOT pronounced, unlike seks. This is the one teen whose sound surprises people." },
      ],
    },
    {
      id: "no-u114l2",
      unit: 114,
      lesson: 2,
      title: "Sytten til tjue, og null",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Finish the teens, say twenty, and say zero — enough for a price, a temperature or a code.",
      items: [
        { id: "no-u114l2-sytten", type: "vocab", front: "sytten", reading: "sytten", meaning: "seventeen", example: { jp: "Han har sytten bøker om Norge i hylla.", en: "He has seventeen books about Norway on the shelf." }, accept: ["17"], drill: { jp: "Han har sytten bøker hjemme", en: "He has seventeen books at home" }, hint: "SØT-ten — the y is said like ø here, not like sju. Syttende mai, the seventeenth of May, is the national day." },
        { id: "no-u114l2-atten", type: "vocab", front: "atten", reading: "atten", meaning: "eighteen", example: { jp: "Hun er atten år gammel og bor i Bergen.", en: "She is eighteen years old and lives in Bergen." }, accept: ["18"], drill: { jp: "Hun er atten år nå", en: "She is eighteen now" }, hint: "From åtte, but the å flattens to a short a: AT-ten. Eighteen is the age of majority in Norway." },
        { id: "no-u114l2-nitten", type: "vocab", front: "nitten", reading: "nitten", meaning: "nineteen", example: { jp: "Vi ventet i nitten minutter på bussen.", en: "We waited nineteen minutes for the bus." }, accept: ["19"], drill: { jp: "Vi ventet i nitten minutter", en: "We waited nineteen minutes" }, hint: "ni + -ten, regular. Careful against nitti, ninety — one t and -ten, against two t's and -ti." },
        { id: "no-u114l2-tjue", type: "vocab", front: "tjue", reading: "tjue", meaning: "twenty", example: { jp: "Kaffen koster tjue kroner på det stedet.", en: "The coffee costs twenty kroner at that place." }, accept: ["20"], drill: { jp: "Kaffen koster tjue kroner", en: "The coffee costs twenty kroner" }, hint: "KHYU-e, with the thin kj-hiss you learned in unit 1. You will also see the older tyve in print and hear it from older speakers." },
        { id: "no-u114l2-null", type: "vocab", front: "null", reading: "null", meaning: "zero", example: { jp: "Det er null grader ute i dag.", en: "It is zero degrees outside today." }, accept: ["0", "nil", "nought"], drill: { jp: "Det er null grader ute", en: "It is zero degrees outside" }, hint: "Also the everyday word for 'none at all': null problem. In a phone number Norwegians say null, never 'o'." },
        { id: "no-u114l2-etsiffer", type: "vocab", front: "et siffer", reading: "etsiffer", meaning: "digit", example: { jp: "Tallet ti har to siffer og tallet fem har ett.", en: "The number ten has two digits and the number five has one." }, accept: ["a digit", "figure", "numeral"], drill: { jp: "Null er et siffer", en: "Zero is a digit" }, hint: "Neuter, and the plural is unchanged: et siffer, to siffer, sifrene. Et tall is the whole number; et siffer is one of the characters it is written with." },
      ],
    },
    {
      id: "no-u114l3",
      unit: 114,
      lesson: 3,
      title: "Tiere",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Count in tens from thirty to eighty, and build any number in between.",
      items: [
        { id: "no-u114l3-tretti", type: "vocab", front: "tretti", reading: "tretti", meaning: "thirty", example: { jp: "Det tar tretti minutter å kjøre til flyplassen.", en: "It takes thirty minutes to drive to the airport." }, accept: ["30"], drill: { jp: "Det tar tretti minutter", en: "It takes thirty minutes" }, hint: "Every ten from tretti up ends in -ti. Build the numbers between by putting the ten first: trettién, trettito, trettitre." },
        { id: "no-u114l3-forti", type: "vocab", front: "førti", reading: "forti", meaning: "forty", example: { jp: "Sjefen er førti år og har jobbet her lenge.", en: "The boss is forty and has worked here a long time." }, accept: ["40"], drill: { jp: "Sjefen er førti år gammel", en: "The boss is forty years old" }, hint: "FØR-ti, with the ø of hør. Do not let the spelling pull you toward fire — the vowel changes." },
        { id: "no-u114l3-femti", type: "vocab", front: "femti", reading: "femti", meaning: "fifty", example: { jp: "Billetten koster femti kroner for barn.", en: "The ticket costs fifty kroner for children." }, accept: ["50"], drill: { jp: "Billetten koster femti kroner", en: "The ticket costs fifty kroner" }, hint: "fem + -ti, regular. Against femten: -ti is the ten, -ten is the teen." },
        { id: "no-u114l3-seksti", type: "vocab", front: "seksti", reading: "seksti", meaning: "sixty", example: { jp: "Ei klokke har seksti minutter i timen.", en: "A clock has sixty minutes to the hour." }, accept: ["60"], drill: { jp: "En time har seksti minutter", en: "An hour has sixty minutes" }, hint: "Here the ks IS said: SEKS-ti. Compare seksten, where it is not — the pair is worth saying out loud together." },
        { id: "no-u114l3-sytti", type: "vocab", front: "sytti", reading: "sytti", meaning: "seventy", example: { jp: "Bestemora mi er sytti år og fortsatt frisk.", en: "My grandmother is seventy and still healthy." }, accept: ["70"], drill: { jp: "Hun er sytti år gammel", en: "She is seventy years old" }, hint: "SØT-ti, same ø as sytten. The pair sytten/sytti is the one Norwegians themselves repeat on the phone to be sure." },
        { id: "no-u114l3-atti", type: "vocab", front: "åtti", reading: "atti", meaning: "eighty", example: { jp: "Bilen kan kjøre åtti i timen her.", en: "The car can drive eighty an hour here." }, accept: ["80"], drill: { jp: "Bilen kjører åtti i timen", en: "The car drives eighty an hour" }, hint: "Keeps the å of åtte, unlike atten which flattens it. Å-tti against at-ten." },
      ],
    },
    {
      id: "no-u114l4",
      unit: 114,
      lesson: 4,
      title: "Nitti og oppover",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say a hundred, a thousand, a million — a price, a population, a year.",
      items: [
        { id: "no-u114l4-nitti", type: "vocab", front: "nitti", reading: "nitti", meaning: "ninety", example: { jp: "Oppgaven tok nitti minutter å gjennomføre.", en: "The task took ninety minutes to complete." }, accept: ["90"], drill: { jp: "Oppgaven tok nitti minutter", en: "The task took ninety minutes" }, hint: "Last of the tens. Nitti against nitten: two t's and -ti is the ninety." },
        { id: "no-u114l4-hundre", type: "vocab", front: "hundre", reading: "hundre", meaning: "hundred", example: { jp: "Hotellet har hundre rom og mange gjester.", en: "The hotel has a hundred rooms and many guests." }, accept: ["100", "one hundred", "a hundred"], drill: { jp: "Hotellet har hundre rom", en: "The hotel has a hundred rooms" }, hint: "No article: Norwegian says hundre kroner where English needs 'a hundred'. To be emphatic you may say ett hundre." },
        { id: "no-u114l4-tusen", type: "vocab", front: "tusen", reading: "tusen", meaning: "thousand", example: { jp: "Det bor over tusen mennesker i den lille byen.", en: "Over a thousand people live in that small town." }, accept: ["1000", "one thousand", "a thousand"], drill: { jp: "Det bor tusen mennesker her", en: "A thousand people live here" }, hint: "Also the ordinary way to say 'thanks a lot': tusen takk. Like hundre it takes no article." },
        { id: "no-u114l4-enmillion", type: "vocab", front: "en million", reading: "enmillion", meaning: "million", example: { jp: "Leiligheten kostet nesten to millioner kroner.", en: "The flat cost almost two million kroner." }, accept: ["a million", "1000000"], drill: { jp: "Det koster en million kroner", en: "It costs a million kroner" }, hint: "This one IS a noun, so it takes en and a plural: to millioner. Said mil-YON, with the stress on the last part." },
        { id: "no-u114l4-enmilliard", type: "vocab", front: "en milliard", reading: "enmilliard", meaning: "billion", example: { jp: "Staten brukte en milliard kroner på prosjektet.", en: "The state spent a billion kroner on the project." }, accept: ["a billion", "thousand million", "milliard"], drill: { jp: "Staten brukte en milliard kroner", en: "The state spent a billion kroner" }, hint: "A thousand millions — the same value as the modern English billion, but note the false friend: Norwegian billion means a MILLION millions." },
        { id: "no-u114l4-etdusin", type: "vocab", front: "et dusin", reading: "etdusin", meaning: "dozen", example: { jp: "Hun kjøpte et dusin egg på butikken.", en: "She bought a dozen eggs at the shop." }, accept: ["a dozen", "twelve of something"], drill: { jp: "Hun kjøpte et dusin egg", en: "She bought a dozen eggs" }, hint: "⚠️ NEUTER — et dusin, dusinet — which is the exception in a unit where million and milliard are masculine. Unchanged in the plural: to dusin. Far less common than in English; tolv is the ordinary word." },
      ],
    },
  ],
};
