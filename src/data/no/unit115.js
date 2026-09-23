// NO Unit 115 — Rekkefølge, brøk og prosent (slot: coverage-b2-5) — B2
// COVERAGE UNIT, block 3. Scaffolded "Vocabulary 5 (B2)"; retitled to what it
// covers, per CLAUDE.md "No front language".
//
// MEASURED, NOT CHOSEN. The ordinal series is a closed class and the corpus had
// 1 of 19 of it: `andre` — and that item is glossed "other" (u14l3), i.e. it is
// taught as the DETERMINER, not as the ordinal. Nothing else: no første, tredje,
// fjerde, femte, sjette, sjuende, åttende, niende, tiende, ellevte, tolvte,
// trettende, tjuende, siste. `først` (adverb, u29) exists and `halvparten` (u53)
// exists, so the course can say "first of all" and "half" and cannot say "the
// third floor" or "the last bus".
//
// This is the unit that makes u117's dates sayable: a Norwegian date IS an
// ordinal (tjuende mai), so months without ordinals buy the learner nothing.
// u114 → u115 → u116 → u117 is one dependency chain and they are authored in
// that order on purpose.
//
// ⚠️ `andre` IS ALREADY TAKEN and that is a real constraint, not a nuisance.
// Fronts are unique per language, so the ordinal "second" cannot have its own
// card while u14l3-andre owns the string. It is not re-taught here; instead
// `nest` is taught (the nest-siste / nest best series) and every ordinal hint
// points back at andre so the learner meets the double duty explicitly. Routed
// to block 1 in the hand-back: the honest fix is a discriminator on u14l3's
// gloss, which is an edit to another block's unit and therefore not mine.
//
// Conventions per no/unit1.js. Ordinals are adjectives and are taught bare (no
// article). Readings are hand-written ASCII folds (ø→o, æ→ae, å→a).
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT115 = {
  id: "no-u115",
  lang: "no",
  title: "Rekkefølge, brøk og prosent",
  order: 115,
  stage: "b2",
  lessons: [
    {
      id: "no-u115l1",
      unit: 115,
      lesson: 1,
      title: "Den første og den tredje",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Put things in order — the first floor, the third time, the fifth of the month.",
      items: [
        { id: "no-u115l1-forste", type: "vocab", front: "første", reading: "forste", meaning: "first (in order)", example: { jp: "Det er den første bussen som går om morgenen.", en: "That is the first bus that leaves in the morning." }, accept: ["1st", "the first"], drill: { jp: "Det er den første bussen", en: "That is the first bus" }, hint: "Ordinals behave like adjectives and almost always follow den, det or di: den første dagen. Note først (u29) is the ADVERB, 'first of all'." },
        { id: "no-u115l1-tredje", type: "vocab", front: "tredje", reading: "tredje", meaning: "third", example: { jp: "Han bor i det tredje huset i gata.", en: "He lives in the third house in the street." }, accept: ["3rd", "the third"], drill: { jp: "Han bor i det tredje huset", en: "He lives in the third house" }, hint: "The ordinal for two is andre, which you already know as 'other' (u14) — one word doing both jobs. Norwegian floors count from the ground as first." },
        { id: "no-u115l1-fjerde", type: "vocab", front: "fjerde", reading: "fjerde", meaning: "fourth", example: { jp: "Dette er fjerde gangen hun spør om det samme.", en: "This is the fourth time she has asked the same thing." }, accept: ["4th", "the fourth"], drill: { jp: "Dette er fjerde gangen hun spør", en: "This is the fourth time she asks" }, hint: "fire loses its r-vowel: FYAR-de. From fjerde on, the ordinals are the plain numeral plus -de or -ende, with few surprises." },
        { id: "no-u115l1-femte", type: "vocab", front: "femte", reading: "femte", meaning: "fifth", example: { jp: "Hun er den femte i familien som lærer norsk.", en: "She is the fifth in the family to learn Norwegian." }, accept: ["5th", "the fifth"], drill: { jp: "Hun er den femte i familien", en: "She is the fifth in the family" }, hint: "fem + -te. The -te ending runs from femte through tolvte; after that it is -ende." },
        { id: "no-u115l1-sjette", type: "vocab", front: "sjette", reading: "sjette", meaning: "sixth", example: { jp: "Det sjette huset i gata er grønt.", en: "The sixth house in the street is green." }, accept: ["6th", "the sixth"], drill: { jp: "Det sjette huset er grønt", en: "The sixth house is green" }, hint: "SHET-te, with the broad sh of skj — and note the ks of seks disappears completely, exactly as it does in seksten." },
        { id: "no-u115l1-nest", type: "vocab", front: "nest", reading: "nest", meaning: "second most", example: { jp: "Bergen er den nest største byen i Norge.", en: "Bergen is the second largest city in Norway." }, accept: ["next to", "second-", "runner-up"], drill: { jp: "Bergen er den nest største byen", en: "Bergen is the second largest city" }, hint: "Put nest in front of a superlative to get the runner-up: nest best, nest siste, nest størst. Do not confuse it with neste (u9), which means 'the next one'." },
      ],
    },
    {
      id: "no-u115l2",
      unit: 115,
      lesson: 2,
      title: "Sjuende til den siste",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Finish the ordinal series and name the last one in a row.",
      items: [
        { id: "no-u115l2-sjuende", type: "vocab", front: "sjuende", reading: "sjuende", meaning: "seventh", example: { jp: "Den sjuende dagen i uka er søndag.", en: "The seventh day of the week is Sunday." }, accept: ["7th", "the seventh"], drill: { jp: "Den sjuende dagen er søndag", en: "The seventh day is Sunday" }, hint: "From here the ending is -ende. You will also see syvende, built on the older syv — both are correct Bokmål and both are common." },
        { id: "no-u115l2-attende", type: "vocab", front: "åttende", reading: "attende", meaning: "eighth", example: { jp: "Han kom på åttende plass i år.", en: "He came eighth this year." }, accept: ["8th", "the eighth"], drill: { jp: "Han kom på åttende plass", en: "He came in eighth place" }, hint: "Keeps the å of åtte. Watch the spelling against atten, eighteen — one å and one a, and they are different words." },
        { id: "no-u115l2-niende", type: "vocab", front: "niende", reading: "niende", meaning: "ninth", example: { jp: "Hun går i niende klasse på skolen.", en: "She is in the ninth grade at school." }, accept: ["9th", "the ninth"], drill: { jp: "Hun går i niende klasse", en: "She is in the ninth grade" }, hint: "ni + -ende, perfectly regular. Norwegian school runs first to tiende klasse before upper secondary." },
        { id: "no-u115l2-tiende", type: "vocab", front: "tiende", reading: "tiende", meaning: "tenth", example: { jp: "Dette er tiende gangen jeg leser boka.", en: "This is the tenth time I am reading the book." }, accept: ["10th", "the tenth"], drill: { jp: "Dette er tiende gangen", en: "This is the tenth time" }, hint: "ti + -ende. Say the whole series out loud once — sjuende, åttende, niende, tiende — and the ending stops needing thought." },
        { id: "no-u115l2-tjuende", type: "vocab", front: "tjuende", reading: "tjuende", meaning: "twentieth", example: { jp: "Vi møtes den tjuende i neste måned.", en: "We are meeting on the twentieth of next month." }, accept: ["20th", "the twentieth"], drill: { jp: "Vi møtes den tjuende i mai", en: "We are meeting on the twentieth of May" }, hint: "A date in Norwegian is an ordinal with den: den tjuende mai. That is the pattern unit 117 builds on." },
        { id: "no-u115l2-siste", type: "vocab", front: "siste", reading: "siste", meaning: "last (final)", example: { jp: "Den siste bussen går klokka elleve på søndag.", en: "The last bus leaves at eleven on Sunday." }, accept: ["final", "the last", "most recent"], drill: { jp: "Den siste bussen går nå", en: "The last bus is leaving now" }, hint: "Not a number, but the end of every ordinal series. It also means 'most recent': den siste uka, the past week." },
      ],
    },
    {
      id: "no-u115l3",
      unit: 115,
      lesson: 3,
      title: "Deler av det hele",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Give a proportion — a percentage, a third, a share, an average.",
      items: [
        { id: "no-u115l3-enprosent", type: "vocab", front: "en prosent", reading: "enprosent", meaning: "per cent", example: { jp: "Nesten femti prosent av elevene svarte feil.", en: "Almost fifty per cent of the pupils answered wrongly." }, accept: ["percent", "percentage", "%"], drill: { jp: "Bare en prosent svarte feil", en: "Only one per cent answered wrongly" }, hint: "Said pro-SENT. The plural is unchanged after a number — femti prosent, never prosenter, and the verb agrees with what the percentage is OF." },
        { id: "no-u115l3-entredel", type: "vocab", front: "en tredel", reading: "entredel", meaning: "a third (fraction)", example: { jp: "En tredel av klassen var borte i dag.", en: "A third of the class was away today." }, accept: ["one third", "1/3"], drill: { jp: "En tredel av klassen var borte", en: "A third of the class was away" }, hint: "Fractions are the numeral plus -del: tredel, firedel, femdel. Also written tredjedel, which is equally correct and slightly more formal." },
        { id: "no-u115l3-enfiredel", type: "vocab", front: "en firedel", reading: "enfiredel", meaning: "a quarter (fraction)", example: { jp: "Bare en firedel av pengene er igjen.", en: "Only a quarter of the money is left." }, accept: ["one fourth", "1/4", "one quarter"], drill: { jp: "En firedel av pengene er igjen", en: "A quarter of the money is left" }, hint: "The fraction. For a quarter of an HOUR on the clock, Norwegian uses kvart instead — that is unit 116." },
        { id: "no-u115l3-enandel", type: "vocab", front: "en andel", reading: "enandel", meaning: "share (proportion)", example: { jp: "Andelen av unge som leser aviser blir mindre.", en: "The proportion of young people who read newspapers is getting smaller." }, accept: ["proportion", "portion", "stake"], drill: { jp: "Vi eier en andel sammen", en: "We own a share together" }, hint: "The abstract share, not a specific fraction. In money it is also a stake: en andel i firmaet." },
        { id: "no-u115l3-etgjennomsnitt", type: "vocab", front: "et gjennomsnitt", reading: "etgjennomsnitt", meaning: "average", example: { jp: "Gjennomsnittet i klassen var ganske høyt i år.", en: "The average in the class was quite high this year." }, accept: ["mean", "the average"], drill: { jp: "Klassen har et gjennomsnitt på fire", en: "The class has an average of four" }, hint: "gjennom + snitt, literally a cut through the middle. The adjective is gjennomsnittlig, and i gjennomsnitt means 'on average'." },
        { id: "no-u115l3-enbrokdel", type: "vocab", front: "en brøkdel", reading: "enbrokdel", meaning: "fraction (a tiny part)", example: { jp: "Det tok bare en brøkdel av tida vi hadde regnet med.", en: "It took only a fraction of the time we had counted on." }, accept: ["a tiny part", "sliver"], drill: { jp: "Det tok en brøkdel av tida", en: "It took a fraction of the time" }, hint: "en brøk is a fraction in arithmetic; en brøkdel is the everyday 'only a fraction of', always about how small something is." },
      ],
    },
    {
      id: "no-u115l4",
      unit: 115,
      lesson: 4,
      title: "Plass i rekka",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say where something sits in a ranking — top, bottom, middle, which step.",
      items: [
        { id: "no-u115l4-overst", type: "vocab", front: "øverst", reading: "overst", meaning: "at the top", example: { jp: "Navnet hennes står øverst på lista.", en: "Her name is at the top of the list." }, accept: ["topmost", "uppermost", "highest up"], drill: { jp: "Navnet står øverst på lista", en: "The name is at the top of the list" }, hint: "From over. It is a position, not a direction — you are øverst, you go opp." },
        { id: "no-u115l4-nederst", type: "vocab", front: "nederst", reading: "nederst", meaning: "at the bottom", example: { jp: "Prisen står nederst på regninga.", en: "The price is at the bottom of the bill." }, accept: ["lowest", "bottommost", "at the foot of"], drill: { jp: "Prisen står nederst på regninga", en: "The price is at the bottom of the bill" }, hint: "The pair to øverst, built the same way from ned. Øverst og nederst is the ordinary way to say 'top and bottom'." },
        { id: "no-u115l4-ettrinn", type: "vocab", front: "et trinn", reading: "ettrinn", meaning: "step (stage)", example: { jp: "Første trinn er å lese hele oppgaven.", en: "The first step is to read the whole task." }, accept: ["stage", "rung", "level"], drill: { jp: "Det er et trinn til", en: "There is one more step" }, hint: "Both a stair tread and a stage in a process. Neuter with an unchanged plural: et trinn, tre trinn, trinnene." },
        { id: "no-u115l4-eirangering", type: "vocab", front: "ei rangering", reading: "eirangering", meaning: "ranking", example: { jp: "Universitetet kom høyt opp i rangeringen i år.", en: "The university came high up in the ranking this year." }, accept: ["a ranking", "rating", "league table"], drill: { jp: "Dette er ei rangering av skolene", en: "This is a ranking of the schools" }, hint: "A -ing noun, so ei and definite -a or -en — this course writes ei rangering, rangeringa. The verb is å rangere." },
        { id: "no-u115l4-enplassering", type: "vocab", front: "en plassering", reading: "enplassering", meaning: "placing (result)", example: { jp: "Plasseringen hans var bedre enn før.", en: "His placing was better than before." }, accept: ["position", "place", "finish"], drill: { jp: "Vi venter på en plassering", en: "We are waiting for a placing" }, hint: "⚠️ A -ing noun that this course marks masculine, because it names a RESULT belonging to a person and Bokmål handles it that way in sport: en plassering, plasseringen." },
        { id: "no-u115l4-midt", type: "vocab", front: "midt", reading: "midt", meaning: "right in the middle", example: { jp: "Bordet står midt i rommet.", en: "The table is right in the middle of the room." }, accept: ["in the middle", "slap in", "mid-"], drill: { jp: "Bordet står midt i rommet", en: "The table is in the middle of the room" }, hint: "Always leans on a preposition: midt i, midt på, midt mellom. Alone it is not a word — midten is the noun, the middle." },
      ],
    },
  ],
};
