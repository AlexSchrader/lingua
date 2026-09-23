// NO Unit 122 — Slekta · 2 (slot: coverage-b2-12) — B2
// COVERAGE UNIT, block 3. Scaffolded "Vocabulary 12 (B2)"; retitled per
// CLAUDE.md "No front language". Continues u4 Familie og hjem.
//
// MEASURED, with the same caveat as u121: the inventory is enumerable and
// canonical, but I wrote the list. Of a 30-term kinship inventory the corpus
// teaches 11 — ei mor, en far, en bror, ei søster, et barn, en sønn, ei datter,
// en mann, ei kvinne, en bestefar, ei bestemor (u4), plus foreldre (u85). Every
// one of those is the NUCLEAR family. Absent: tante, onkel, fetter, kusine,
// nevø, niese, the whole sviger- series, barnebarn, ste- series, ektefelle,
// enke, slektning, tvilling.
//
// Why it matters more than a word count suggests: u68 Forhold og fellesskap and
// u86 Høytider og tradisjoner both talk about families gathering, and a learner
// at that point cannot name a single person at the table who is not a parent,
// sibling or child. Kinship terms are also the ones a learner is asked about in
// the first five minutes of any real conversation in Norway.
//
// ⚠️ A GENDER CARVE-OUT, DECIDED HERE AND ROUTED TO BLOCK 1. unit1.js §1 says
// -ing/-ning nouns take `ei`. That rule was derived from the corpus's DEVERBAL
// ABSTRACT nouns (ei melding, ei løsning, ei utvikling — 59 of them, all
// abstract) and it is correct for those. It is NOT correct for PERSON nouns in
// -ing/-ling: Bokmål has en slektning, en tvilling, en flyktning, en lærling,
// all masculine, and writing "ei slektning" would be bad Norwegian in service of
// a rule about a different kind of word. Taught here as `en`, flagged in the
// hand-back so block 1 can put the carve-out in unit1.js's header where later
// seats will read it.
//
// Conventions per no/unit1.js otherwise. Readings are hand-written ASCII folds.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT122 = {
  id: "no-u122",
  lang: "no",
  title: "Slekta · 2",
  order: 122,
  stage: "b2",
  lessons: [
    {
      id: "no-u122l1",
      unit: 122,
      lesson: 1,
      title: "Tante og onkel",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the relatives outside your own household — aunt, uncle, cousin, nephew, niece.",
      items: [
        { id: "no-u122l1-eitante", type: "vocab", front: "ei tante", reading: "eitante", meaning: "aunt", example: { jp: "Tanta mi bor i Bergen med familien sin.", en: "My aunt lives in Bergen with her family." }, accept: ["an aunt"], drill: { jp: "Jeg har ei tante i Bergen", en: "I have an aunt in Bergen" }, hint: "Feminine: tanta. One word for both sides of the family, unlike the grandparents, where Norwegian often says morfar and farfar." },
        { id: "no-u122l1-enonkel", type: "vocab", front: "en onkel", reading: "enonkel", meaning: "uncle", example: { jp: "Onkelen min lærte meg å fiske.", en: "My uncle taught me to fish." }, accept: ["an uncle"], drill: { jp: "En onkel lærte meg å fiske", en: "An uncle taught me to fish" }, hint: "Plural onkler. The partner of tante, and like it it covers both sides." },
        { id: "no-u122l1-enfetter", type: "vocab", front: "en fetter", reading: "enfetter", meaning: "male cousin", example: { jp: "Fetteren min kommer på besøk i juli.", en: "My cousin is coming to visit in July." }, accept: ["a cousin (male)", "boy cousin"], drill: { jp: "En fetter kommer på besøk i juli", en: "A cousin is coming to visit in July" }, hint: "⚠️ Norwegian splits cousins by gender where English does not: fetter is male, kusine female. There is no neutral word, so you must know which." },
        { id: "no-u122l1-eikusine", type: "vocab", front: "ei kusine", reading: "eikusine", meaning: "female cousin", example: { jp: "Kusina mi studerer i Oslo nå.", en: "My cousin is studying in Oslo now." }, accept: ["a cousin (female)", "girl cousin"], drill: { jp: "Jeg har ei kusine i Oslo", en: "I have a cousin in Oslo" }, hint: "Feminine: kusina. ku-SI-ne, three syllables, stress in the middle." },
        { id: "no-u122l1-ennevo", type: "vocab", front: "en nevø", reading: "ennevo", meaning: "nephew", example: { jp: "Nevøen min fyller fem år i mars.", en: "My nephew turns five in March." }, accept: ["a nephew"], drill: { jp: "En nevø fyller fem år i mars", en: "A nephew turns five in March" }, hint: "From French, and it keeps the French stress: ne-VØ. The ø is folded to o in the answer key." },
        { id: "no-u122l1-einiese", type: "vocab", front: "ei niese", reading: "einiese", meaning: "niece", example: { jp: "Niesa mi går i niende klasse.", en: "My niece is in the ninth grade." }, accept: ["a niece"], drill: { jp: "Jeg har ei niese på skolen", en: "I have a niece at school" }, hint: "Feminine: niesa. ni-E-se. The pair nevø/niese works exactly like fetter/kusine — gender is built into the word." },
      ],
    },
    {
      id: "no-u122l2",
      unit: 122,
      lesson: 2,
      title: "Svigerfamilien",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name everyone you gained by marriage — the whole sviger- series.",
      items: [
        { id: "no-u122l2-eisvigermor", type: "vocab", front: "ei svigermor", reading: "eisvigermor", meaning: "mother-in-law", example: { jp: "Svigermora mi lager den beste kaka.", en: "My mother-in-law makes the best cake." }, accept: ["a mother-in-law"], drill: { jp: "Jeg har ei svigermor i Oslo", en: "I have a mother-in-law in Oslo" }, hint: "sviger- is the whole system: put it in front of the plain term and you have the in-law. It inherits mor's gender, so ei svigermor, svigermora." },
        { id: "no-u122l2-ensvigerfar", type: "vocab", front: "en svigerfar", reading: "ensvigerfar", meaning: "father-in-law", example: { jp: "Svigerfaren min var snekker hele livet.", en: "My father-in-law was a carpenter all his life." }, accept: ["a father-in-law"], drill: { jp: "En svigerfar var snekker før", en: "A father-in-law was a carpenter before" }, hint: "The same prefix on far. Together, svigerforeldre are the in-laws as a pair." },
        { id: "no-u122l2-ensvoger", type: "vocab", front: "en svoger", reading: "ensvoger", meaning: "brother-in-law", example: { jp: "Svogeren min jobber på samme sted som meg.", en: "My brother-in-law works at the same place as me." }, accept: ["a brother-in-law"], drill: { jp: "En svoger jobber samme sted", en: "A brother-in-law works at the same place" }, hint: "⚠️ Breaks the pattern — NOT svigerbror. Svoger and svigerinne are their own words, and they are the two most learners get wrong." },
        { id: "no-u122l2-eisvigerinne", type: "vocab", front: "ei svigerinne", reading: "eisvigerinne", meaning: "sister-in-law", example: { jp: "Svigerinna mi er lege i Bergen.", en: "My sister-in-law is a doctor in Bergen." }, accept: ["a sister-in-law"], drill: { jp: "Jeg har ei svigerinne som er lege", en: "I have a sister-in-law who is a doctor" }, hint: "Feminine: svigerinna. The partner of svoger, and like it it is a word in its own right, not a compound of søster." },
        { id: "no-u122l2-ensvigerson", type: "vocab", front: "en svigersønn", reading: "ensvigerson", meaning: "son-in-law", example: { jp: "Svigersønnen deres hjelper dem med huset.", en: "Their son-in-law helps them with the house." }, accept: ["a son-in-law"], drill: { jp: "En svigersønn hjelper dem med huset", en: "A son-in-law helps them with the house" }, hint: "Back to the regular pattern: sviger- plus sønn. Note ø folds to o twice in the answer key — svigerson." },
        { id: "no-u122l2-eisvigerdatter", type: "vocab", front: "ei svigerdatter", reading: "eisvigerdatter", meaning: "daughter-in-law", example: { jp: "Svigerdattera deres kommer fra Bergen.", en: "Their daughter-in-law comes from Bergen." }, accept: ["a daughter-in-law"], drill: { jp: "Ei svigerdatter kommer fra Bergen", en: "A daughter-in-law comes from Bergen" }, hint: "sviger- plus datter, feminine like datter: svigerdattera. Five of the six in this lesson are regular; svoger and svigerinne are the exceptions." },
      ],
    },
    {
      id: "no-u122l3",
      unit: 122,
      lesson: 3,
      title: "Generasjoner",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about grandchildren, great-grandparents and step-relations.",
      items: [
        { id: "no-u122l3-etbarnebarn", type: "vocab", front: "et barnebarn", reading: "etbarnebarn", meaning: "grandchild", example: { jp: "De har fire barnebarn og ett til på vei.", en: "They have four grandchildren and one more on the way." }, accept: ["a grandchild", "grandchildren"], drill: { jp: "De har et barnebarn i Bergen", en: "They have a grandchild in Bergen" }, hint: "barn + e + barn — a child's child. Neuter with an unchanged plural: et barnebarn, fire barnebarn." },
        { id: "no-u122l3-eioldemor", type: "vocab", front: "ei oldemor", reading: "eioldemor", meaning: "great-grandmother", example: { jp: "Oldemor levde til hun ble nittisju år.", en: "Great-grandmother lived until she was ninety-seven." }, accept: ["a great-grandmother"], drill: { jp: "Ei oldemor levde svært lenge", en: "A great-grandmother lived a very long time" }, hint: "olde- is the great- prefix, from an old word for age. One generation further back is tippoldemor." },
        { id: "no-u122l3-enoldefar", type: "vocab", front: "en oldefar", reading: "enoldefar", meaning: "great-grandfather", example: { jp: "Oldefaren min kom fra en by i nord.", en: "My great-grandfather came from a town in the north." }, accept: ["a great-grandfather"], drill: { jp: "En oldefar kom fra nord", en: "A great-grandfather came from the north" }, hint: "The pair to oldemor, and built identically. Norwegians often say it without an article at all: oldefar sa alltid det." },
        { id: "no-u122l3-enstefar", type: "vocab", front: "en stefar", reading: "enstefar", meaning: "stepfather", example: { jp: "Stefaren hennes lærte henne å kjøre bil.", en: "Her stepfather taught her to drive." }, accept: ["a stepfather", "step-dad"], drill: { jp: "En stefar lærte henne å kjøre", en: "A stepfather taught her to drive" }, hint: "ste- is the step- prefix and it works on every term: stefar, stemor, stebarn, stesøster. Said STEH-, one syllable." },
        { id: "no-u122l3-eistemor", type: "vocab", front: "ei stemor", reading: "eistemor", meaning: "stepmother", example: { jp: "Stemora hennes bor i samme gate.", en: "Her stepmother lives in the same street." }, accept: ["a stepmother", "step-mum"], drill: { jp: "Ei stemor bor i samme gate", en: "A stepmother lives in the same street" }, hint: "Feminine: stemora. ⚠️ Et stemorsblomst — a pansy — is named after this word, which is a useful hook and a strange one." },
        { id: "no-u122l3-etstebarn", type: "vocab", front: "et stebarn", reading: "etstebarn", meaning: "stepchild", example: { jp: "De to stebarna bor hos dem annenhver uke.", en: "The two stepchildren live with them every other week." }, accept: ["a stepchild", "stepchildren"], drill: { jp: "De har et stebarn hos seg", en: "They have a stepchild with them" }, hint: "Neuter with an unchanged plural, exactly like barn. Norway's shared-custody arrangements make annenhver uke (u116) the standard phrase around this word." },
      ],
    },
    {
      id: "no-u122l4",
      unit: 122,
      lesson: 4,
      title: "Slekt og sivilstand",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name your extended family as a whole, and state a marital status on a form.",
      items: [
        { id: "no-u122l4-eislekt", type: "vocab", front: "ei slekt", reading: "eislekt", meaning: "extended family", example: { jp: "Hele slekta samles til jul hvert år.", en: "The whole extended family gathers at Christmas every year." }, accept: ["kin", "lineage", "relatives"], drill: { jp: "Vi har ei slekt i Bergen", en: "We have family in Bergen" }, hint: "Feminine: slekta. En familie (u4) is the household; ei slekt is everyone who shares the blood, across generations." },
        { id: "no-u122l4-enslektning", type: "vocab", front: "en slektning", reading: "enslektning", meaning: "relative (a person)", example: { jp: "Hun møtte en slektning hun aldri hadde sett.", en: "She met a relative she had never seen." }, accept: ["a relation", "kinsman", "family member"], drill: { jp: "Hun møtte en slektning i Bergen", en: "She met a relative in Bergen" }, hint: "⚠️ MASCULINE, not ei — a -ning noun naming a PERSON takes en in Bokmål, unlike the abstract -ning nouns (ei melding, ei løsning) this course marks feminine." },
        { id: "no-u122l4-entvilling", type: "vocab", front: "en tvilling", reading: "entvilling", meaning: "twin", example: { jp: "De to barna er tvillinger og fyller fem i mars.", en: "The two children are twins and turn five in March." }, accept: ["a twin"], drill: { jp: "Han har en tvilling i Oslo", en: "He has a twin in Oslo" }, hint: "From to, two. Masculine for the same reason as slektning: it names a person. Plural tvillinger." },
        { id: "no-u122l4-enektefelle", type: "vocab", front: "en ektefelle", reading: "enektefelle", meaning: "spouse", example: { jp: "Begge ektefeller må skrive under på skjemaet.", en: "Both spouses have to sign the form." }, accept: ["a spouse", "husband or wife", "married partner"], drill: { jp: "Hun har en ektefelle i Norge", en: "She has a spouse in Norway" }, hint: "ekte + felle, a lawful companion. The genderless official word — this is what a Norwegian form asks for, never mann or kone." },
        { id: "no-u122l4-eienke", type: "vocab", front: "ei enke", reading: "eienke", meaning: "widow", example: { jp: "Hun har vært enke i mange år nå.", en: "She has been a widow for many years now." }, accept: ["a widow"], drill: { jp: "Hun har vært ei enke lenge", en: "She has been a widow a long time" }, hint: "Feminine: enka. ⚠️ Do not hear en enke as 'one ankle' — enkel (simple) and ankel (u121) are both near neighbours in sound." },
        { id: "no-u122l4-enenkemann", type: "vocab", front: "en enkemann", reading: "enenkemann", meaning: "widower", example: { jp: "Naboen vår ble enkemann i fjor.", en: "Our neighbour became a widower last year." }, accept: ["a widower"], drill: { jp: "Naboen er en enkemann nå", en: "The neighbour is a widower now" }, hint: "enke + mann. The male term is the marked one here, which is the reverse of the usual pattern and worth noticing." },
      ],
    },
  ],
};
