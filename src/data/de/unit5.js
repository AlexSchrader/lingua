// DE Unit 5 — Numbers and time (slot: numbers-time) — A1
// Conventions and the FREE list live in de/unit1.js — read that header first.
// Everything here is nominative. `ein` is taught in its NOMINATIVE forms only
// (ein Kind, eine Stunde) — einen/einem belong to u13–u14.
// NOTE FOR BLOCKS 2 AND 3: this unit teaches the generic time nouns der Tag,
// die Nacht, das Jahr and die Woche because "Numbers and time" owns them.
// u9 "Days and months" still owns the NAMES — Montag…Sonntag, Januar…Dezember —
// and der Monat, which are deliberately left for it.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT5 = {
  id: "de-u5",
  lang: "de",
  title: "Zahlen und Zeit",
  order: 5,
  stage: "a1",
  lessons: [
    {
      id: "de-u5l1",
      unit: 5,
      lesson: 1,
      title: "Eins bis sechs",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count to six and say how many of something there are: Wir haben zwei Kinder.",
      items: [
        { id: "de-u5l1-ein", type: "vocab", front: "ein", reading: "ein", meaning: "a / one", example: { jp: "Ein Kind ist hier.", en: "A child is here." }, drill: { jp: "Ein Kind hat zwei Eltern", en: "A child has two parents" }, accept: ["a", "an", "one"], hint: "Both \"a\" and the number one. ein before der- and das-words, eine before die-words: ein Kind, eine Stunde. Counting out loud on its own, one is eins." },
        { id: "de-u5l1-zwei", type: "vocab", front: "zwei", reading: "zwei", meaning: "two", example: { jp: "Wir haben zwei Kinder.", en: "We have two children." }, drill: { jp: "Zwei Häuser sind sehr groß", en: "Two houses are very big" }, accept: ["two", "2"], hint: "TSVY, with the ts of zusammen and the ei of Zeit. On the phone Germans say zwo instead, to keep it clear of drei." },
        { id: "de-u5l1-drei", type: "vocab", front: "drei", reading: "drei", meaning: "three", example: { jp: "Die Familie hat drei Kinder.", en: "The family has three children." }, drill: { jp: "Ich arbeite drei Tage", en: "I work three days" }, accept: ["three", "3"], hint: "DRY. Do not let English \"dry\" mislead you on the r — German rolls or scrapes it at the back." },
        { id: "de-u5l1-vier", type: "vocab", front: "vier", reading: "vier", meaning: "four", example: { jp: "Vier Bücher sind hier.", en: "Four books are here." }, drill: { jp: "Vier Türen sind hier", en: "Four doors are here" }, accept: ["four", "4"], hint: "FEER — v as f, ie as \"ee\". It sounds nothing like English \"four\"." },
        { id: "de-u5l1-funf", type: "vocab", front: "fünf", reading: "funf", meaning: "five", example: { jp: "Fünf Minuten, bitte!", en: "Five minutes, please!" }, drill: { jp: "Wir haben fünf Bücher", en: "We have five books" }, accept: ["five", "5"], hint: "FÜNF, with the ü of Tür. You may type funf or fünf." },
        { id: "de-u5l1-sechs", type: "vocab", front: "sechs", reading: "sechs", meaning: "six", example: { jp: "Ich arbeite sechs Stunden.", en: "I work six hours." }, drill: { jp: "Die Familie hat sechs Kinder", en: "The family has six children" }, accept: ["six", "6"], hint: "ZEKS — here chs is said like English x, not like the ch of Buch. One of German's few spelling surprises." },
      ],
    },
    {
      id: "de-u5l2",
      unit: 5,
      lesson: 2,
      title: "Sieben bis zwölf",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Count to twelve — enough for a clock face and the days of a week.",
      items: [
        { id: "de-u5l2-sieben", type: "vocab", front: "sieben", reading: "sieben", meaning: "seven", example: { jp: "Die Woche hat sieben Tage.", en: "The week has seven days." }, drill: { jp: "Ich habe sieben Bücher", en: "I have seven books" }, accept: ["seven", "7"], hint: "ZEE-ben, two syllables. The only number under twelve with more than one syllable in its stem." },
        { id: "de-u5l2-acht", type: "vocab", front: "acht", reading: "acht", meaning: "eight", example: { jp: "Ich arbeite acht Stunden.", en: "I work eight hours." }, drill: { jp: "Acht Häuser sind hier", en: "Eight houses are here" }, accept: ["eight", "8"], hint: "AKHT, with the throaty ch of Buch. Watch the pair: acht (eight) and die Nacht (night) rhyme." },
        { id: "de-u5l2-neun", type: "vocab", front: "neun", reading: "neun", meaning: "nine", example: { jp: "Neun Kinder sind hier.", en: "Nine children are here." }, drill: { jp: "Der Vater hat neun Bücher", en: "The father has nine books" }, accept: ["nine", "9"], hint: "NOYN — eu is \"oy\", as in der Freund. Not \"noon\"." },
        { id: "de-u5l2-zehn", type: "vocab", front: "zehn", reading: "zehn", meaning: "ten", example: { jp: "Wir haben zehn Minuten.", en: "We have ten minutes." }, drill: { jp: "Zehn Kinder sind sehr laut", en: "Ten children are very loud" }, accept: ["ten", "10"], hint: "TSAYN. The h is silent and simply makes the e long, as in sehr." },
        { id: "de-u5l2-elf", type: "vocab", front: "elf", reading: "elf", meaning: "eleven", example: { jp: "Die Schule hat elf Türen.", en: "The school has eleven doors." }, drill: { jp: "Elf Kinder wohnen hier", en: "Eleven children live here" }, accept: ["eleven", "11"], hint: "Short and irregular, like English \"eleven\" — the counting pattern only becomes regular again at dreizehn." },
        { id: "de-u5l2-zwolf", type: "vocab", front: "zwölf", reading: "zwolf", meaning: "twelve", example: { jp: "Die Uhr hat zwölf Stunden.", en: "The clock has twelve hours." }, drill: { jp: "Zwölf Bücher sind hier", en: "Twelve books are here" }, accept: ["twelve", "12"], hint: "TSVÖLF, with the ö of schön. You may type zwolf or zwölf." },
      ],
    },
    {
      id: "de-u5l3",
      unit: 5,
      lesson: 3,
      title: "Die Uhrzeit",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what time it is, including half past, and say that something is happening now.",
      items: [
        { id: "de-u5l3-dieuhr", type: "vocab", front: "die Uhr", reading: "dieuhr", meaning: "clock / o'clock", example: { jp: "Die Uhr ist alt und schön.", en: "The clock is old and beautiful." }, drill: { jp: "Die Uhr ist sehr klein", en: "The clock is very small" }, accept: ["clock", "the clock", "watch", "o'clock"], hint: "OOR — the initial u is a full \"oo\". Also the word for o'clock: drei Uhr, three o'clock." },
        { id: "de-u5l3-diestunde", type: "vocab", front: "die Stunde", reading: "diestunde", meaning: "hour", example: { jp: "Wir haben eine Stunde Zeit.", en: "We have an hour." }, drill: { jp: "Die Stunde ist heute", en: "The lesson is today" }, accept: ["hour", "the hour", "lesson"], hint: "SHTOON-de — st- at the start of a word is \"sht\". In a school it also means a class period." },
        { id: "de-u5l3-dieminute", type: "vocab", front: "die Minute", reading: "dieminute", meaning: "minute", example: { jp: "Eine Minute, bitte!", en: "One minute, please!" }, drill: { jp: "Die Minute ist wie eine Stunde", en: "The minute feels like an hour" }, accept: ["minute", "the minute"], hint: "mi-NOO-te, three syllables with the final -e said. Not the English two-syllable \"minute\"." },
        { id: "de-u5l3-halb", type: "vocab", front: "halb", reading: "halb", meaning: "half", example: { jp: "Es ist halb zwei.", en: "It is half past one." }, drill: { jp: "Jetzt ist es halb drei", en: "It is half past two now" }, accept: ["half", "half past"], hint: "⚠️ halb zwei is HALF PAST ONE, not half past two — German counts toward the coming hour. The commonest mistake English speakers make with German time." },
        { id: "de-u5l3-es", type: "vocab", front: "es", reading: "es", meaning: "it", example: { jp: "Es ist spät.", en: "It is late." }, drill: { jp: "Es ist jetzt sehr spät", en: "It is very late now" }, accept: ["it"], hint: "Also the empty subject for time and weather, where English says \"it\": Es ist halb drei. Es ist spät." },
        { id: "de-u5l3-jetzt", type: "vocab", front: "jetzt", reading: "jetzt", meaning: "now", example: { jp: "Jetzt haben wir Zeit.", en: "Now we have time." }, drill: { jp: "Wir arbeiten jetzt zusammen", en: "We are working together now" }, accept: ["now", "right now"], hint: "YETST — j is the English y. Put it first for emphasis and the verb still comes second: Jetzt haben wir…" },
      ],
    },
    {
      id: "de-u5l4",
      unit: 5,
      lesson: 4,
      title: "Tag und Nacht",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say when something happens — today, tomorrow, this week, this year.",
      items: [
        { id: "de-u5l4-dertag", type: "vocab", front: "der Tag", reading: "dertag", meaning: "day", example: { jp: "Der Tag ist schön.", en: "The day is beautiful." }, drill: { jp: "Der Tag ist heute sehr schön", en: "The day is very beautiful today" }, accept: ["day", "the day"], hint: "TAHK — the final g hardens to k. You already met it inside guten Tag." },
        { id: "de-u5l4-dienacht", type: "vocab", front: "die Nacht", reading: "dienacht", meaning: "night", example: { jp: "Die Nacht ist schön.", en: "The night is beautiful." }, drill: { jp: "Die Nacht ist hier sehr laut", en: "The night is very loud here" }, accept: ["night", "the night"], hint: "NAKHT, rhyming with acht. Already familiar from gute Nacht in u2." },
        { id: "de-u5l4-heute", type: "vocab", front: "heute", reading: "heute", meaning: "today", example: { jp: "Heute arbeite ich nicht.", en: "Today I am not working." }, drill: { jp: "Heute ist die Familie hier", en: "Today the family is here" }, accept: ["today"], hint: "HOY-te. Start a sentence with it and the verb still comes second, so ich moves behind it: Heute arbeite ich." },
        { id: "de-u5l4-morgen", type: "vocab", front: "morgen", reading: "morgen", meaning: "tomorrow", example: { jp: "Morgen kommt die Familie.", en: "Tomorrow the family is coming." }, drill: { jp: "Morgen kommen die Großeltern", en: "Tomorrow the grandparents are coming" }, accept: ["tomorrow"], hint: "Lowercase morgen is tomorrow; capital der Morgen is the morning. Same sound, and only the capital tells them apart." },
        { id: "de-u5l4-dasjahr", type: "vocab", front: "das Jahr", reading: "dasjahr", meaning: "year", example: { jp: "Wir sind ein Jahr hier.", en: "We have been here a year." }, drill: { jp: "Das Jahr ist sehr schön", en: "It has been a very good year" }, accept: ["year", "the year"], hint: "YAHR — j is y again, as in jetzt. Ages use it: Ich bin zwölf Jahre alt." },
        { id: "de-u5l4-diewoche", type: "vocab", front: "die Woche", reading: "diewoche", meaning: "week", example: { jp: "Wir haben eine Woche Zeit.", en: "We have a week." }, drill: { jp: "Die Woche hat sieben Tage", en: "The week has seven days" }, accept: ["week", "the week"], hint: "VO-khe, with the throaty ch. Its days get their names in a later unit." },
      ],
    },
  ],
};
