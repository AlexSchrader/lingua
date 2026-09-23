// NO Unit 117 — Månedene og datoen (slot: coverage-b2-7) — B2
// COVERAGE UNIT, block 3. Scaffolded "Vocabulary 7 (B2)"; retitled to what it
// covers, per CLAUDE.md "No front language".
//
// MEASURED. u9 is the days-and-months unit. It teaches all SEVEN weekdays and
// exactly FOUR months: januar, mai, august, desember. Screened against the
// closed twelve-month set, februar, mars, april, juni, juli, september, oktober
// and november are fronts nowhere in the corpus. A calendar with a third of its
// months is not a partial vocabulary list, it is a broken closed class: the
// learner can say when they were born only if they were lucky.
//
// This unit also finishes the apparatus around a date — en dato, en kalender, et
// årstall — and the longer spans (kvartal, termin, halvår, tiår, hundreår).
// It depends on u115's ordinals, because a Norwegian date IS an ordinal:
// den tjuende mai, never "tjue mai".
//
// ⚠️ ROUTED TO BLOCK 1, NOT FIXED HERE: the right home for eight missing months
// is u9, beside the four that shipped, and the right home for u114's numerals is
// u5. Both are other blocks' units and an id move wipes mastery (RUNBOOK §4), so
// this unit closes the hole where the coverage pass can reach it and the
// hand-back names the retrofit. Filing it at B2 is late; leaving it open is
// permanent.
//
// Conventions per no/unit1.js. Month names are bare fronts and lowercase in
// Norwegian — mai, never Mai. Readings are hand-written ASCII folds.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT117 = {
  id: "no-u117",
  lang: "no",
  title: "Månedene og datoen",
  order: 117,
  stage: "b2",
  lessons: [
    {
      id: "no-u117l1",
      unit: 117,
      lesson: 1,
      title: "Månedene som manglet · 1",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the months from February to September that the course had skipped.",
      items: [
        { id: "no-u117l1-februar", type: "vocab", front: "februar", reading: "februar", meaning: "February", example: { jp: "Det er kaldt og mørkt i februar.", en: "It is cold and dark in February." }, accept: ["feb"], drill: { jp: "Det er kaldt i februar", en: "It is cold in February" }, hint: "Months are lowercase in Norwegian — februar, never Februar. Said FEB-ru-ar, with the r's clearly heard." },
        { id: "no-u117l1-mars", type: "vocab", front: "mars", reading: "mars", meaning: "March", example: { jp: "Det blir lysere og varmere i mars.", en: "It gets lighter and warmer in March." }, accept: ["mar"], drill: { jp: "Det blir varmere i mars", en: "It gets warmer in March" }, hint: "One syllable: MASH, with the r swallowed into the s. Also the planet and the Roman god, spelt the same." },
        { id: "no-u117l1-april", type: "vocab", front: "april", reading: "april", meaning: "April", example: { jp: "Været er svært usikkert i april.", en: "The weather is very unpredictable in April." }, accept: ["apr"], drill: { jp: "Været er usikkert i april", en: "The weather is unpredictable in April" }, hint: "Stress on the last syllable: a-PRIL. Aprilsnarr is the Norwegian April fool." },
        { id: "no-u117l1-juni", type: "vocab", front: "juni", reading: "juni", meaning: "June", example: { jp: "Skolen slutter i juni hvert år.", en: "School finishes in June every year." }, accept: ["jun"], drill: { jp: "Skolen slutter i juni", en: "School finishes in June" }, hint: "YU-ni — the j is a y. Juni and juli differ by one letter and Norwegians disambiguate by saying juni måned when it matters." },
        { id: "no-u117l1-juli", type: "vocab", front: "juli", reading: "juli", meaning: "July", example: { jp: "Nesten hele landet tar ferie i juli.", en: "Almost the whole country takes holiday in July." }, accept: ["jul"], drill: { jp: "Hele landet tar ferie i juli", en: "The whole country takes holiday in July" }, hint: "YU-li. ⚠️ Not to be confused with ei jul (u9), Christmas — one l and an i against a plain jul." },
        { id: "no-u117l1-september", type: "vocab", front: "september", reading: "september", meaning: "September", example: { jp: "Kurset begynner den første september.", en: "The course begins on the first of September." }, accept: ["sep", "sept"], drill: { jp: "Kurset begynner i september", en: "The course begins in September" }, hint: "sep-TEM-ber. The last four months keep their Latin numbers — september was the seventh month in the old Roman year." },
      ],
    },
    {
      id: "no-u117l2",
      unit: 117,
      lesson: 2,
      title: "Månedene som manglet · 2",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Finish the calendar year and write a date the Norwegian way.",
      items: [
        { id: "no-u117l2-oktober", type: "vocab", front: "oktober", reading: "oktober", meaning: "October", example: { jp: "Det blir kaldere og mørkere i oktober.", en: "It gets colder and darker in October." }, accept: ["oct", "okt"], drill: { jp: "Det blir kaldere i oktober", en: "It gets colder in October" }, hint: "ok-TO-ber. Note the k where English writes c — Norwegian avoids c in native spelling almost everywhere." },
        { id: "no-u117l2-november", type: "vocab", front: "november", reading: "november", meaning: "November", example: { jp: "Det blir mørkt tidlig i november.", en: "It gets dark early in November." }, accept: ["nov"], drill: { jp: "Det blir mørkt tidlig i november", en: "It gets dark early in November" }, hint: "no-VEM-ber. With this the twelve months are complete — say them through once in order." },
        { id: "no-u117l2-endato", type: "vocab", front: "en dato", reading: "endato", meaning: "date (calendar day)", example: { jp: "Vi må bli enige om en dato for møtet.", en: "We have to agree on a date for the meeting." }, accept: ["a date", "calendar date"], drill: { jp: "Vi må velge en dato for møtet", en: "We have to choose a date for the meeting" }, hint: "Plural datoer. Written short, Norwegian puts the day first: 20.05.2026 is the twentieth of May." },
        { id: "no-u117l2-enkalender", type: "vocab", front: "en kalender", reading: "enkalender", meaning: "calendar", example: { jp: "Jeg skriver alle avtaler inn i en kalender.", en: "I write all appointments into a calendar." }, accept: ["a calendar", "diary", "planner"], drill: { jp: "Jeg skriver avtalen i en kalender", en: "I write the appointment in a calendar" }, hint: "ka-LEN-der. Also the Advent calendar Norwegians take very seriously: en julekalender." },
        { id: "no-u117l2-etarstall", type: "vocab", front: "et årstall", reading: "etarstall", meaning: "year number", example: { jp: "Han husket hendelsen men ikke årstallet.", en: "He remembered the event but not the year." }, accept: ["the year", "a year date", "year figure"], drill: { jp: "Han husket ikke et årstall", en: "He did not remember a single year" }, hint: "år + s + tall — the YEAR as a figure, against et år, a year as a span. Norwegians read 1994 as nittenhundreognittifire." },
        { id: "no-u117l2-enmerkedag", type: "vocab", front: "en merkedag", reading: "enmerkedag", meaning: "red-letter day", example: { jp: "Den første mai er en merkedag for hele landet.", en: "The first of May is a red-letter day for the whole country." }, accept: ["special day", "notable day", "anniversary"], drill: { jp: "Det er en merkedag for landet", en: "It is a red-letter day for the country" }, hint: "merke + dag, a day marked in the calendar. Not necessarily a day off — that is en fridag (u116)." },
      ],
    },
    {
      id: "no-u117l3",
      unit: 117,
      lesson: 3,
      title: "Kortere og lengre perioder",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the spans an institution works in — quarter, term, half-year, decade, century.",
      items: [
        { id: "no-u117l3-etkvartal", type: "vocab", front: "et kvartal", reading: "etkvartal", meaning: "quarter (of a year)", example: { jp: "Butikken tjente mer i første kvartal i år.", en: "The shop earned more in the first quarter this year." }, accept: ["a quarter", "three months", "Q1"], drill: { jp: "Butikken tjente mer i et kvartal", en: "The shop earned more in one quarter" }, hint: "Three months of a business year. ⚠️ In Oslo speech it ALSO means a city block — et kvartal unna, a block away." },
        { id: "no-u117l3-entermin", type: "vocab", front: "en termin", reading: "entermin", meaning: "term (period)", example: { jp: "Skatten betales i fire terminer i året.", en: "The tax is paid in four instalments a year." }, accept: ["instalment", "period", "due period"], drill: { jp: "Skatten betales i en termin", en: "The tax is paid in one period" }, hint: "A fixed period with a payment or a due date at its end. In school it is a term; at the doctor's, terminen is the due date of a birth." },
        { id: "no-u117l3-ethalvar", type: "vocab", front: "et halvår", reading: "ethalvar", meaning: "six-month period", example: { jp: "Hun bodde i Bergen et halvår før hun flyttet.", en: "She lived in Bergen for six months before she moved." }, accept: ["half a year", "six months"], drill: { jp: "Hun bodde i Bergen et halvår", en: "She lived in Bergen for half a year" }, hint: "halv + år, written as one word. The adjective is halvårlig, twice yearly." },
        { id: "no-u117l3-ettiar", type: "vocab", front: "et tiår", reading: "ettiar", meaning: "decade", example: { jp: "Byen har forandret seg mye det siste tiåret.", en: "The town has changed a lot in the last decade." }, accept: ["ten years", "a decade"], drill: { jp: "Byen forandret seg på et tiår", en: "The town changed in a decade" }, hint: "ti + år, exactly as it looks. Neuter with an unchanged plural: et tiår, to tiår, tiårene." },
        { id: "no-u117l3-ethundrear", type: "vocab", front: "et hundreår", reading: "ethundrear", meaning: "century (a hundred years)", example: { jp: "Kirka er mer enn et hundreår gammel.", en: "The church is more than a hundred years old." }, accept: ["hundred years", "a century"], drill: { jp: "Kirka er et hundreår gammel", en: "The church is a hundred years old" }, hint: "The plain native word beside et århundre (u59), which names a NUMBERED century — det tjuende århundre, the twentieth century." },
        { id: "no-u117l3-eiarstid", type: "vocab", front: "ei årstid", reading: "eiarstid", meaning: "season of the year", example: { jp: "Høsten er den fineste årstida i Norge.", en: "Autumn is the loveliest season in Norway." }, accept: ["a season", "time of year"], drill: { jp: "Høsten er ei årstid i Norge", en: "Autumn is a season in Norway" }, hint: "år + s + tid, feminine like tid: årstida. The four themselves — vår, sommer, høst, vinter — you already have from u9." },
      ],
    },
    {
      id: "no-u117l4",
      unit: 117,
      lesson: 4,
      title: "Å datere og å markere",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Put a date on something, mark an occasion, and talk about an age of history.",
      items: [
        { id: "no-u117l4-adatere", type: "vocab", front: "å datere", reading: "adatere", meaning: "to put a date on", example: { jp: "Husk å datere søknaden før du sender den.", en: "Remember to date the application before you send it." }, accept: ["to date", "date"], drill: { jp: "Det er viktig å datere søknaden", en: "It is important to date the application" }, hint: "Regular -te verb: daterer, daterte, datert. Datert 20. mai is what stands at the top of a formal letter." },
        { id: "no-u117l4-eimarkering", type: "vocab", front: "ei markering", reading: "eimarkering", meaning: "commemoration", example: { jp: "Det blir ei markering utenfor kirka på lørdag.", en: "There will be a commemoration outside the church on Saturday." }, accept: ["a marking", "observance", "ceremony"], drill: { jp: "Det blir ei markering på lørdag", en: "There will be a commemoration on Saturday" }, hint: "A -ing noun, so ei and markeringa. Smaller and more sober than ei feiring (u86), a celebration — a markering can be for something sad." },
        { id: "no-u117l4-etskuddar", type: "vocab", front: "et skuddår", reading: "etskuddar", meaning: "leap year", example: { jp: "Februar har tjueni dager i et skuddår.", en: "February has twenty-nine days in a leap year." }, accept: ["leap-year"], drill: { jp: "Februar har flere dager i et skuddår", en: "February has more days in a leap year" }, hint: "skudd + år — the extra day is 'shot in'. The day itself is skuddårsdagen, the twenty-ninth of February." },
        { id: "no-u117l4-entidsalder", type: "vocab", front: "en tidsalder", reading: "entidsalder", meaning: "age (era)", example: { jp: "Vi lever i en tidsalder med rask utvikling.", en: "We live in an age of rapid development." }, accept: ["an era", "an epoch", "age"], drill: { jp: "Vi lever i en tidsalder med utvikling", en: "We live in an age of development" }, hint: "tid + s + alder, a long stretch of history with a character of its own. En alder (u28) alone is a person's age." },
        { id: "no-u117l4-enepoke", type: "vocab", front: "en epoke", reading: "enepoke", meaning: "epoch", example: { jp: "Denne perioden var en viktig epoke for landet.", en: "This period was an important epoch for the country." }, accept: ["an epoch", "period", "era"], drill: { jp: "Dette var en epoke i Norge", en: "This was an epoch in Norway" }, hint: "e-PO-ke. Slightly more bookish than tidsalder and more usual about art and history than about daily life." },
        { id: "no-u117l4-eitidsregning", type: "vocab", front: "ei tidsregning", reading: "eitidsregning", meaning: "system of dating years", example: { jp: "Året null finnes ikke i vår tidsregning.", en: "The year zero does not exist in our system of dating." }, accept: ["calendar era", "chronology", "reckoning of time"], drill: { jp: "Året null finnes ikke i ei tidsregning", en: "The year zero does not exist in a dating system" }, hint: "tid + s + regning, literally the reckoning of time. Før vår tidsregning, abbreviated f.Kr., is what Norwegian writes where English writes BC." },
      ],
    },
  ],
};
