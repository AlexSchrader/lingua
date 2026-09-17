// NO Unit 59 — Endring over tid ("Change over time") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Change over time"; retitled per CLAUDE.md → "No front
// language". Conventions: unit1.js §1–§9 (language) + unit51.js B1–B8 (band).
//
// ⚠ A2 SPENT THE CHANGE VERBS: å forandre, ei endring, ei utvikling, å utvikle,
// å vokse, en vekst, å øke, å minke, å skifte, å bytte, å flytte — plus the whole
// time-adverb layer (allerede, ennå, fortsatt, etterpå, deretter, snart,
// plutselig, straks, underveis, en periode, et tidspunkt). u59 takes the DIRECTION
// of a change (l1 — up, down, easing off, gone), the HISTORICAL frame (l2), the
// MOMENT it turns (l3), and whether it LASTS (l4).
//
// ⚠ `å holde` IS TAUGHT HERE ON PURPOSE, and it is one of the two borderline calls
// unit51.js B2 records. A2 teaches `ei holdning`, an attitude — the noun that grew
// out of this verb — but a learner who owns "holdning" still cannot say "hold
// døra". å holde is among the ten busiest verbs in Norwegian and the band would be
// wrong to leave it out. Named here so a later seat does not delete it as a
// duplicate.
//
// ⚠ THE i → a → u VOWEL LADDER runs through this unit and the next two: forsvinne
// / forsvant / forsvunnet (l1), and later overvinne (u60), tvinge and binde (u61,
// u62). It is a whole Norwegian verb class and the hints name it every time, so
// the learner meets the pattern five times rather than five unrelated verbs.
//
// FIRST FEMININE of the unit is `ei krise` (l3) and it carries the en-/ei-
// recognition note unit51.js B4 requires. `en framgang` (l1) is marked MASCULINE
// for the reason unit58.js records: the -en form is what is actually written.
//
// ø IN `reading` IS HAND-FOLDED TO o (unit1.js §3): this unit has none.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT59 = {
  id: "no-u59",
  lang: "no",
  title: "Endring over tid",
  order: 59,
  stage: "b1",
  lessons: [
    // Lesson 1: direction of travel. å stige and å synke are a pair and are taught
    // as one; å avta is the gentler third option English has no single word for.
    {
      id: "no-u59l1",
      unit: 59,
      lesson: 1,
      title: "Gradvis endring",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a change by its direction — say prices rise, temperatures fall, wind eases off, something disappears — and call the rate of it steady, or call it progress.",
      items: [
        { id: "no-u59l1-astige", type: "vocab", front: "å stige", reading: "astige", meaning: "to rise", example: { jp: "Prisene stiger hvert år i Norge.", en: "Prices rise every year in Norway." }, drill: { jp: "Prisene pleier å stige om vinteren", en: "Prices tend to rise in the winter" }, accept: ["rise", "to go up", "go up", "to climb", "to increase"], hint: "STI-ge. Present stiger, past steg, perfect har steget. ⚠ The past tense steg is spelled exactly like et steg, a step, which you met in u56. Å stige is what prices, temperatures and the sun do; å klatre is what a person does on a mountain." },
        { id: "no-u59l1-asynke", type: "vocab", front: "å synke", reading: "asynke", meaning: "to fall", example: { jp: "Temperaturen synker fort om kvelden.", en: "The temperature falls quickly in the evening." }, drill: { jp: "Prisene pleier å synke om sommeren", en: "Prices tend to fall in the summer" }, accept: ["sink", "to drop", "drop", "to go down", "to decline"], hint: "SUEN-ke. Present synker, past sank, perfect har sunket. The exact partner of å stige. It is also what a boat does, and Norwegian does not soften that: båten sank." },
        { id: "no-u59l1-aavta", type: "vocab", front: "å avta", reading: "aavta", meaning: "to ease off", example: { jp: "Vinden avtar om kvelden.", en: "The wind eases off in the evening." }, drill: { jp: "Det pleier å avta om kvelden", en: "It tends to ease off in the evening" }, accept: ["decrease", "to diminish", "diminish", "to subside", "to let up"], hint: "AV-ta. Av plus ta — to take away from itself. Present avtar, past avtok. ⚠ Gentler than å synke: something that avtar is easing off, not dropping. Its opposite is å tilta, to intensify." },
        { id: "no-u59l1-aforsvinne", type: "vocab", front: "å forsvinne", reading: "aforsvinne", meaning: "to disappear", example: { jp: "Problemet forsvinner ikke i dag.", en: "The problem is not going to disappear today." }, drill: { jp: "Det pleier å forsvinne om våren", en: "It tends to disappear in the spring" }, accept: ["disappear", "to vanish", "vanish", "to go away"], hint: "for-SVIN-ne. Present forsvinner, past forsvant, perfect har forsvunnet. ⚠ Note the vowel ladder i → a → u: the same pattern as å finne, fant, funnet. A whole class of Norwegian verbs moves this way, and you will meet four more of them in this band." },
        { id: "no-u59l1-jevn", type: "vocab", front: "jevn", reading: "jevn", meaning: "steady", example: { jp: "En jevn vekst er bedre enn en rask.", en: "Steady growth is better than fast growth." }, drill: { jp: "Det er en jevn vekst her", en: "There is steady growth here" }, accept: ["even", "smooth", "consistent", "level"], hint: "YEVN — the j is a y. Neuter jevnt, plural jevne. Even in every sense: a level floor, a steady pace, an equal match. Jevnt og trutt is the Norwegian \"slow and steady\"." },
        { id: "no-u59l1-enframgang", type: "vocab", front: "en framgang", reading: "enframgang", meaning: "progress", example: { jp: "Framgangen i norsk er tydelig nå.", en: "The progress in Norwegian is clear now." }, drill: { jp: "En framgang er tydelig her", en: "Progress is clear here" }, accept: ["advancement", "headway", "improvement", "progress"], hint: "FRAM-gang. Masculine: definite framgangen, plural framganger. Fram plus gang, a going forward. ⚠ In a doctor's mouth it means recovery: det er framgang." },
      ],
    },
    // Lesson 2: the historical frame. moderne and gammeldags open as a pair, and
    // the hint on gammeldags carries a real cultural point — in Norwegian it is not
    // reliably an insult.
    {
      id: "no-u59l2",
      unit: 59,
      lesson: 2,
      title: "Før og nå",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place something in time — call it modern or old-fashioned, speak about a century and a generation, say what it originally was, and say what should be preserved.",
      items: [
        { id: "no-u59l2-moderne", type: "vocab", front: "moderne", reading: "moderne", meaning: "modern", example: { jp: "Et moderne hus bruker mindre energi.", en: "A modern house uses less energy." }, drill: { jp: "Dette er et moderne hus", en: "This is a modern house" }, accept: ["contemporary", "up to date", "current", "new-style"], hint: "mo-DER-ne. It never changes its ending — et moderne hus, ei moderne bok, moderne hus. The stress falls on the middle syllable, not the first." },
        { id: "no-u59l2-gammeldags", type: "vocab", front: "gammeldags", reading: "gammeldags", meaning: "old-fashioned", example: { jp: "Metoden er gammeldags, men den virker.", en: "The method is old-fashioned, but it works." }, drill: { jp: "Denne metoden er gammeldags nå", en: "This method is old-fashioned now" }, accept: ["outdated", "dated", "quaint", "behind the times"], hint: "GAM-mel-daks. Gammel plus dags, \"of the old day\". No endings, ever. ⚠ Not reliably an insult in Norwegian — gammeldags jul is a compliment about Christmas, and gammeldags service is one about a shop." },
        { id: "no-u59l2-etarhundre", type: "vocab", front: "et århundre", reading: "etarhundre", meaning: "century", example: { jp: "Kirka her er fra et gammelt århundre.", en: "The church here is from an old century." }, drill: { jp: "Dette varte i et århundre", en: "This lasted for a century" }, accept: ["a hundred years", "a century"], hint: "AWR-hun-dre. Neuter: definite århundret, plural århundrer. År plus hundre. ⚠ Norwegian names centuries with an ordinal — det nittende århundre — but in speech says 1800-tallet far more often." },
        { id: "no-u59l2-opprinnelig", type: "vocab", front: "opprinnelig", reading: "opprinnelig", meaning: "originally", example: { jp: "Huset var opprinnelig mye mindre.", en: "The house was originally much smaller." }, drill: { jp: "Planen var opprinnelig en annen", en: "The plan was originally a different one" }, accept: ["original", "initially", "to begin with", "at first"], hint: "opp-RIN-ne-li — silent g. Opp plus rinne, to run or well up: where the stream first comes out of the ground. Adjective and adverb at once — en opprinnelig plan, and opprinnelig var det annerledes." },
        { id: "no-u59l2-engenerasjon", type: "vocab", front: "en generasjon", reading: "engenerasjon", meaning: "generation", example: { jp: "En generasjon før oss hadde det hardere.", en: "A generation before us had it harder." }, drill: { jp: "En generasjon før oss jobbet hardt", en: "A generation before us worked hard" }, accept: ["an age group", "a cohort", "a generation"], hint: "ge-ne-ra-SHON — the g is hard and -sjon is a hush, as it is in every -sjon word. Masculine: definite generasjonen, plural generasjoner." },
        { id: "no-u59l2-abevare", type: "vocab", front: "å bevare", reading: "abevare", meaning: "to preserve", example: { jp: "Vi må bevare naturen for barna.", en: "We must preserve nature for the children." }, drill: { jp: "Det er viktig å bevare naturen", en: "It is important to preserve nature" }, accept: ["preserve", "to conserve", "conserve", "to keep", "to protect"], hint: "be-VA-re. Be- plus vare, to last — to make something last. Present bevarer, past bevarte. Gud bevare meg vel! is a common Norwegian exclamation, roughly \"good heavens\"." },
      ],
    },
    // Lesson 3: the moment it turns. et vendepunkt and ei krise open it because a
    // turning point and a crisis are the same moment described by an optimist and
    // a pessimist.
    {
      id: "no-u59l3",
      unit: 59,
      lesson: 3,
      title: "Vendepunkt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the moment things turned — name a turning point and a crisis, say something turned around, describe a transition, and say what was replaced or abolished.",
      items: [
        { id: "no-u59l3-etvendepunkt", type: "vocab", front: "et vendepunkt", reading: "etvendepunkt", meaning: "turning point", example: { jp: "Et vendepunkt kom da han fikk stillinga.", en: "A turning point came when he got the post." }, drill: { jp: "Et vendepunkt kom den dagen", en: "A turning point came that day" }, accept: ["a watershed", "a decisive moment", "a turning point"], hint: "VEN-ne-punkt. Neuter: definite vendepunktet, plural vendepunkter. Å vende, to turn, plus punkt — the moment the road bends and everything after it is different." },
        { id: "no-u59l3-eikrise", type: "vocab", front: "ei krise", reading: "eikrise", meaning: "crisis", example: { jp: "Ei krise i banken skapte et stort problem.", en: "A crisis at the bank created a big problem." }, drill: { jp: "Ei krise kan komme fort", en: "A crisis can come quickly" }, accept: ["an emergency", "a critical moment", "a crisis"], hint: "KRI-se. Feminine: definite krisa, plural kriser. You will also meet krisen in print — Bokmål allows both, and this course writes ei because ei is what tells you the definite ends in -a. Norwegian builds compounds freely on it: krisemøte, krisehjelp." },
        { id: "no-u59l3-asnu", type: "vocab", front: "å snu", reading: "asnu", meaning: "to turn around", example: { jp: "Han snudde i døra og gikk hjem.", en: "He turned around in the doorway and went home." }, drill: { jp: "Det er lett å snu en båt", en: "It is easy to turn a boat around" }, accept: ["turn around", "to reverse", "reverse", "to turn back", "to flip"], hint: "SNU. Present snur, past snudde, perfect har snudd. Physical and figurative alike: snu bilen, and snu en dårlig sak. Å snu seg is to turn round and look." },
        { id: "no-u59l3-enovergang", type: "vocab", front: "en overgang", reading: "enovergang", meaning: "transition", example: { jp: "En overgang fra skole til arbeid er hard.", en: "A transition from school to work is hard." }, drill: { jp: "En overgang til noe nytt er hard", en: "A transition to something new is hard" }, accept: ["a changeover", "a crossing", "a shift", "a transition"], hint: "O-ver-gang. Masculine: definite overgangen, plural overganger. Over plus gang, a going across. ⚠ Concrete too: en overgang is a pedestrian crossing, the stripes painted on the road." },
        { id: "no-u59l3-aerstatte", type: "vocab", front: "å erstatte", reading: "aerstatte", meaning: "to replace", example: { jp: "En ny metode erstatter to gamle.", en: "One new method replaces two old ones." }, drill: { jp: "Det er lett å erstatte en penn", en: "It is easy to replace a pen" }, accept: ["replace", "to substitute", "substitute", "to take the place of"], hint: "er-STAT-te. Present erstatter, past erstattet. ⚠ Second sense in law and insurance: å erstatte also means to compensate, and en erstatning is the payout." },
        { id: "no-u59l3-aavskaffe", type: "vocab", front: "å avskaffe", reading: "aavskaffe", meaning: "to abolish", example: { jp: "Kommunen avskaffet regelen i går.", en: "The municipality abolished the rule yesterday." }, drill: { jp: "Det er lett å avskaffe en regel", en: "It is easy to abolish a rule" }, accept: ["abolish", "to do away with", "do away with", "to scrap"], hint: "AV-ska-fe. Av plus skaffe, to procure — to un-procure, to get rid of for good. Present avskaffer, past avskaffet. ⚠ Used for laws, rules and institutions, never for objects: you avskaffer a rule and kaster a chair." },
      ],
    },
    // Lesson 4: does it last? å holde is the big one — see the header note on why
    // it is taught despite ei holdning being in A2.
    {
      id: "no-u59l4",
      unit: 59,
      lesson: 4,
      title: "Varig eller forbigående",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say whether something will last — call it temporary, eternal or stable, hold on to it, remain where you are, and adapt when it changes anyway.",
      items: [
        { id: "no-u59l4-midlertidig", type: "vocab", front: "midlertidig", reading: "midlertidig", meaning: "temporary", example: { jp: "Han har en midlertidig stilling i kommunen.", en: "He has a temporary post in the municipality." }, drill: { jp: "Dette er en midlertidig plan", en: "This is a temporary plan" }, accept: ["provisional", "for the time being", "interim", "short-term"], hint: "MID-ler-ti-di — silent g. Midler, means, plus tid: a stopgap. Neuter midlertidig, plural midlertidige. A Norwegian job ad always says fast eller midlertidig — permanent or temporary." },
        { id: "no-u59l4-evig", type: "vocab", front: "evig", reading: "evig", meaning: "eternal", example: { jp: "Ingenting er evig, heller ikke en vinter.", en: "Nothing is eternal, not even a winter." }, drill: { jp: "Ingenting er evig her", en: "Nothing is eternal here" }, accept: ["everlasting", "perpetual", "forever", "endless"], hint: "E-vi — silent g. Neuter evig, plural evige. Evig og alltid is the Norwegian \"for ever and ever\", and i evigheter means \"for ages\", said about a bus that has not come." },
        { id: "no-u59l4-stabil", type: "vocab", front: "stabil", reading: "stabil", meaning: "stable", example: { jp: "Været har vært stabilt hele uka.", en: "The weather has been stable all week." }, drill: { jp: "Prisen er stabil denne uka", en: "The price is stable this week" }, accept: ["steady", "settled", "unchanging", "reliable"], hint: "sta-BIL. Neuter stabilt, plural stabile. ⚠ Ustabil is the opposite, with the u- you already know. Norwegian uses it about weather, prices, health and people alike." },
        { id: "no-u59l4-aholde", type: "vocab", front: "å holde", reading: "aholde", meaning: "to hold", example: { jp: "Kan du holde denne posen litt?", en: "Can you hold this bag for a moment?" }, drill: { jp: "Det er lett å holde en kopp", en: "It is easy to hold a cup" }, accept: ["hold", "to keep", "keep", "to hold on to"], hint: "HOL-le. Present holder, past holdt, perfect har holdt. ⚠ A2 taught you ei holdning, an attitude — this is the verb it grew out of, and it is one of the busiest verbs in the language. Å holde på med noe is to be busy doing it, and hold opp! means stop it." },
        { id: "no-u59l4-aforbli", type: "vocab", front: "å forbli", reading: "aforbli", meaning: "to remain", example: { jp: "Han forble i Bergen hele livet.", en: "He remained in Bergen his whole life." }, drill: { jp: "Det er lett å forbli her", en: "It is easy to remain here" }, accept: ["remain", "to stay", "stay", "to continue to be"], hint: "for-BLI. For plus bli, to become — to go on being. Present forblir, past forble, perfect har forblitt. More formal than å bli: du blir her, but saken forblir uklar." },
        { id: "no-u59l4-atilpasse", type: "vocab", front: "å tilpasse", reading: "atilpasse", meaning: "to adapt", example: { jp: "Vi tilpasser planen etter været.", en: "We adapt the plan to the weather." }, drill: { jp: "Det er lett å tilpasse en plan", en: "It is easy to adapt a plan" }, accept: ["adapt", "to adjust", "adjust", "to tailor", "to fit"], hint: "TIL-pas-se. Til plus passe, to fit — to make it fit. Present tilpasser, past tilpasset. Å tilpasse seg is to adapt YOURSELF, which is what a newcomer to a country spends a year doing." },
      ],
    },
  ],
};
