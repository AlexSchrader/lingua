// DE Unit 9 — Tage, Monate und Jahreszeiten (slot: days-months) — A1
// Block 2 (u8–u14). Conventions: see de/unit1.js.
// Block 1's u5 "Zahlen und Zeit" took the GENERIC time nouns — der Tag, die Nacht,
// die Woche, das Jahr — and deliberately left the NAMES to this unit. So this unit
// owns Montag–Sonntag, Januar–Dezember, der Monat, and the four seasons.
// Retitled from the slot's "Days and months" because the unit really carries the
// seasons too, and RUNBOOK §4 says to name a unit after what it actually teaches.
// ⚠️ WHAT THIS UNIT CANNOT SAY, and why: the natural German for a date is am Montag
// and im Januar — but am and im are contractions of an+dem and in+dem, which are
// DATIVE. The dative is u14's, so every example here works around them and the
// pattern is previewed in the hints instead, pointing forward to u14. Once u14
// teaches im, "Im Januar schneit es" becomes sayable; it is not sayable yet.
//
// FREE: Wochen, Monate
//   Block-2 additions to the free list. German plurals are not foldable by
//   check-lang-scope.mjs (see the note in unit1.js): die Woche → Wochen and
//   der Monat → Monate umlaut-or-suffix away from their taught singulars, so both
//   are declared here even though the singulars are taught (u5 and this unit).
export const DE_UNIT9 = {
  id: "de-u9",
  lang: "de",
  title: "Tage, Monate und Jahreszeiten",
  order: 9,
  stage: "a1",
  lessons: [
    {
      id: "de-u9l1",
      unit: 9,
      lesson: 1,
      title: "Die Tage der Woche",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what day it is and what day something happens: Heute ist Montag.",
      items: [
        { id: "de-u9l1-dermontag", type: "vocab", front: "der Montag", reading: "dermontag", meaning: "Monday", example: { jp: "Heute ist Montag.", en: "Today is Monday." }, accept: ["monday"], hint: "Moon-day, exactly like English. Every day of the week is der. Naming the day you drop the article: Heute ist Montag." },
        { id: "de-u9l1-derdienstag", type: "vocab", front: "der Dienstag", reading: "derdienstag", meaning: "Tuesday", example: { jp: "Morgen ist Dienstag.", en: "Tomorrow is Tuesday." }, accept: ["tuesday"], hint: "DEENS-tag. Nothing to do with dienen or Dienst in the learner's German — treat it as one word." },
        { id: "de-u9l1-dermittwoch", type: "vocab", front: "der Mittwoch", reading: "dermittwoch", meaning: "Wednesday", example: { jp: "Heute ist nicht Mittwoch.", en: "Today is not Wednesday." }, accept: ["wednesday"], hint: "The one day that does not end in -tag: it is mid-week, Mitt + Woche (u5). Still der, like all the others." },
        { id: "de-u9l1-derdonnerstag", type: "vocab", front: "der Donnerstag", reading: "derdonnerstag", meaning: "Thursday", example: { jp: "Donnerstag kommt meine Schwester.", en: "Thursday my sister is coming." }, accept: ["thursday"], hint: "Thunder-day, the same god English named it after. Notice the word order: put the day first and the verb still comes second, which is u12's rule." },
        { id: "de-u9l1-derfreitag", type: "vocab", front: "der Freitag", reading: "derfreitag", meaning: "Friday", example: { jp: "Freitag ist das Wetter gut.", en: "Friday the weather is good." }, accept: ["friday"], hint: "FRY-tag. Again the verb sits second — Freitag ist das Wetter…, not Freitag das Wetter ist." },
        { id: "de-u9l1-dersamstag", type: "vocab", front: "der Samstag", reading: "dersamstag", meaning: "Saturday", example: { jp: "Samstag ist der Markt hier.", en: "Saturday the market is here." }, accept: ["saturday"], hint: "The southern and standard word. In the north you will also hear Sonnabend for the same day." },
        { id: "de-u9l1-dersonntag", type: "vocab", front: "der Sonntag", reading: "dersonntag", meaning: "Sunday", example: { jp: "Sonntag arbeite ich nicht.", en: "Sunday I do not work." }, accept: ["sunday"], hint: "Sun-day, built straight from die Sonne (u8). To say on Sunday you need am — an + dem — and that dem is dative, which arrives at u14." },
      ],
    },
    {
      id: "de-u9l2",
      unit: 9,
      lesson: 2,
      title: "Die Monate",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the first five months of the year and say what a month is.",
      items: [
        { id: "de-u9l2-dermonat", type: "vocab", front: "der Monat", reading: "dermonat", meaning: "month", example: { jp: "Der Monat hat vier Wochen.", en: "The month has four weeks." }, accept: ["month", "the month"], hint: "Careful with the plural: der Monat → die Monate, not Monaten. Do not confuse it with der Montag one lesson up — Monat has no g." },
        { id: "de-u9l2-derjanuar", type: "vocab", front: "der Januar", reading: "derjanuar", meaning: "January", example: { jp: "Januar ist kalt.", en: "January is cold." }, accept: ["january"], hint: "YAH-nu-ar — German j is English y. Every month is der. In Austria you will hear Jänner instead." },
        { id: "de-u9l2-derfebruar", type: "vocab", front: "der Februar", reading: "derfebruar", meaning: "February", example: { jp: "Februar ist auch kalt.", en: "February is also cold." }, accept: ["february"], hint: "FAY-bru-ar. Like English it is the short month, and like English almost nobody says every letter of it." },
        { id: "de-u9l2-dermaerz", type: "vocab", front: "der März", reading: "dermarz", meaning: "March", example: { jp: "Der März ist grau.", en: "March is grey." }, accept: ["march"], hint: "MERTS — the ä is the e of Bett, and z is always ts. You may type März or Marz." },
        { id: "de-u9l2-derapril", type: "vocab", front: "der April", reading: "derapril", meaning: "April", example: { jp: "April ist schön.", en: "April is beautiful." }, accept: ["april"], hint: "Stress the second syllable: a-PRIL. Almost the English word once you move the stress." },
        { id: "de-u9l2-dermai", type: "vocab", front: "der Mai", reading: "dermai", meaning: "May", example: { jp: "Der Mai ist warm.", en: "May is warm." }, accept: ["may"], hint: "MY, with the ai said like the ei of nein (u1). The shortest month name in German." },
      ],
    },
    {
      id: "de-u9l3",
      unit: 9,
      lesson: 3,
      title: "Die Monate · 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the middle six months of the year and say what each is like.",
      items: [
        { id: "de-u9l3-derjuni", type: "vocab", front: "der Juni", reading: "derjuni", meaning: "June", example: { jp: "Juni ist sehr warm.", en: "June is very warm." }, accept: ["june"], hint: "YOO-nee. On the phone Germans say Juno for it, to keep it apart from Juli — the two sound almost identical." },
        { id: "de-u9l3-derjuli", type: "vocab", front: "der Juli", reading: "derjuli", meaning: "July", example: { jp: "Juli ist heiß.", en: "July is hot." }, accept: ["july"], hint: "YOO-lee, and Julei when it needs to be unmistakable. The pair Juni/Juli is the one place German spells the difference out loud." },
        { id: "de-u9l3-deraugust", type: "vocab", front: "der August", reading: "deraugust", meaning: "August", example: { jp: "August ist auch heiß.", en: "August is also hot." }, accept: ["august"], hint: "ow-GUST, with the au of blau (u8) and the stress at the end. The first name August is stressed at the front instead." },
        { id: "de-u9l3-derseptember", type: "vocab", front: "der September", reading: "derseptember", meaning: "September", example: { jp: "September ist schön.", en: "September is beautiful." }, accept: ["september"], hint: "zep-TEM-ber — a single s before a vowel is said as z. The last four months are the easiest words in the unit." },
        { id: "de-u9l3-deroktober", type: "vocab", front: "der Oktober", reading: "deroktober", meaning: "October", example: { jp: "Oktober ist grau.", en: "October is grey." }, accept: ["october"], hint: "ok-TOH-ber, written with k where English writes c. German uses k for that sound almost everywhere." },
        { id: "de-u9l3-dernovember", type: "vocab", front: "der November", reading: "dernovember", meaning: "November", example: { jp: "November ist kalt und grau.", en: "November is cold and grey." }, accept: ["november"], hint: "no-VEM-ber. Here the v really is said as an English v — in borrowed words it stays, though in German words like Vater it is an f." },
      ],
    },
    {
      id: "de-u9l4",
      unit: 9,
      lesson: 4,
      title: "Dezember und die Jahreszeiten",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the last month and all four seasons, and say what each one is like.",
      items: [
        { id: "de-u9l4-derdezember", type: "vocab", front: "der Dezember", reading: "derdezember", meaning: "December", example: { jp: "Dezember ist der Winter.", en: "December is winter." }, accept: ["december"], hint: "day-TSEM-ber — z is ts, always. The last of the twelve, and the only one whose German spelling changes the English c to z." },
        { id: "de-u9l4-derfruehling", type: "vocab", front: "der Frühling", reading: "derfruhling", meaning: "spring", example: { jp: "Der Frühling ist schön.", en: "Spring is beautiful." }, accept: ["spring"], hint: "FRÜ-ling, with the ü of grün (u8). All four seasons are der — the one gender rule in this unit you get for free. The word for season itself, die Jahreszeit, is just das Jahr (u5) + die Zeit (u1) stuck together." },
        { id: "de-u9l4-dersommer", type: "vocab", front: "der Sommer", reading: "dersommer", meaning: "summer", example: { jp: "Der Sommer ist heiß.", en: "Summer is hot." }, accept: ["summer"], hint: "ZOM-mer — that leading s is a z again, as in September. Nearly the English word otherwise." },
        { id: "de-u9l4-derherbst", type: "vocab", front: "der Herbst", reading: "derherbst", meaning: "autumn", example: { jp: "Der Herbst kommt jetzt.", en: "Autumn is coming now." }, accept: ["autumn", "fall"], hint: "HERPST — four consonants in a row and all of them said. Related to English harvest, which is what the season was named for." },
        { id: "de-u9l4-derwinter", type: "vocab", front: "der Winter", reading: "derwinter", meaning: "winter", example: { jp: "Der Winter ist sehr kalt.", en: "Winter is very cold." }, accept: ["winter"], hint: "VIN-ter, with the German w. To say in winter you need im — in + dem — and that dative contraction is u14's." },
      ],
    },
  ],
};
