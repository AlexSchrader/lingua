// NO Unit 4 — Familie og hjem ("Family") — A1
// SLOT DEVIATION, noted per RUNBOOK §7: the scaffold slot is "Family", and this
// unit widens it to family AND home. Norwegian family talk is inseparable from
// the possessive, and the possessive is inseparable from the DEFINITE noun
// (broren min, not "min bror"), so the unit needs household nouns to drill it on.
// The slot number is unchanged and the theme is the nearest honest equivalent.
//
// THIS IS WHERE THE SUFFIXED ARTICLE BECOMES VISIBLE. unit1.js §1 fixes the card
// front as the INDEFINITE form (ei mor, en bror, et hus) because that is what
// carries the gender. Lesson 4's examples are then written in the DEFINITE, on
// purpose, because the normal Norwegian possessive requires it:
//     ei mor  → mora mi          en bror → broren min        et hus → huset mitt
// The learner meets the suffix as a live pattern in a sentence, having learned the
// gender from the front. Inflected forms of a taught word are the taught word
// (unit1.js §6), so this costs no vocabulary.
//
// FEMININE IS MARKED ei THROUGHOUT — ei mor, ei søster, ei datter, ei kvinne,
// ei bestemor. Moderate Bokmål would tolerate "en mor", but then the definite is
// unpredictable; ei is what makes mora derivable. See unit1.js §1.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT4 = {
  id: "no-u4",
  lang: "no",
  title: "Familie og hjem",
  order: 4,
  stage: "a1",
  lessons: [
    {
      id: "no-u4l1",
      unit: 4,
      lesson: 1,
      title: "Parents and siblings",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the people you grew up with — mor, far, bror, søster, barn — and say who you have.",
      items: [
        { id: "no-u4l1-enfamilie", type: "vocab", front: "en familie", reading: "enfamilie", meaning: "family", example: { jp: "Erling har en familie i Bergen.", en: "Erling has a family in Bergen." }, accept: ["a family", "relatives"], drill: { jp: "Erling har en familie", en: "Erling has a family" }, hint: "fa-MEE-li-e, four syllables, stress on the second. Masculine: definite familien." },
        { id: "no-u4l1-eimor", type: "vocab", front: "ei mor", reading: "eimor", meaning: "mother", example: { jp: "Kari er ei god mor.", en: "Kari is a good mother." }, accept: ["a mother", "mom", "mum", "a mum"], drill: { jp: "Kari er ei mor", en: "Kari is a mother" }, hint: "Feminine, so the definite is mora — the mother. On its own, without any article, mor is what you call her: hei, mor." },
        { id: "no-u4l1-enfar", type: "vocab", front: "en far", reading: "enfar", meaning: "father", example: { jp: "Han er en god far.", en: "He is a good father." }, accept: ["a father", "dad", "a dad"], drill: { jp: "Han er en far", en: "He is a father" }, hint: "Masculine: definite faren. Same trick as mor — far alone is what you call him." },
        { id: "no-u4l1-enbror", type: "vocab", front: "en bror", reading: "enbror", meaning: "brother", example: { jp: "Jeg har en bror.", en: "I have a brother." }, accept: ["a brother", "sibling"], drill: { jp: "Jeg har en bror", en: "I have a brother" }, hint: "Definite broren, but the plural is irregular: brødre. Do not say \"brorer\"." },
        { id: "no-u4l1-eisoster", type: "vocab", front: "ei søster", reading: "eisoster", meaning: "sister", example: { jp: "Jeg har ei søster i Bergen.", en: "I have a sister in Bergen." }, accept: ["a sister"], drill: { jp: "Jeg har ei søster", en: "I have a sister" }, hint: "SURS-ter. Feminine: definite søstera. Plural is irregular too — søstre. Note the reading is hand-written eisoster, because ø will not fold on its own." },
        { id: "no-u4l1-etbarn", type: "vocab", front: "et barn", reading: "etbarn", meaning: "child", example: { jp: "De har et barn.", en: "They have a child." }, accept: ["a child", "kid", "a kid"], drill: { jp: "De har et barn", en: "They have a child" }, hint: "Neuter: definite barnet, and the plural is barn — unchanged, like navn and land. Barna is \"the children\"." },
      ],
    },
    {
      id: "no-u4l2",
      unit: 4,
      lesson: 2,
      title: "More of the family",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the rest of the household — sønn, datter, mann, kvinne, bestefar, bestemor — and hear the masculine/feminine contrast six times over.",
      items: [
        { id: "no-u4l2-enson", type: "vocab", front: "en sønn", reading: "ensonn", meaning: "son", example: { jp: "De har en sønn og ei datter.", en: "They have a son and a daughter." }, accept: ["a son", "boy"], drill: { jp: "De har en sønn", en: "They have a son" }, hint: "SURN. Masculine: definite sønnen, plural sønner." },
        { id: "no-u4l2-eidatter", type: "vocab", front: "ei datter", reading: "eidatter", meaning: "daughter", example: { jp: "Jeg har ei datter i Oslo.", en: "I have a daughter in Oslo." }, accept: ["a daughter", "girl"], drill: { jp: "Jeg har ei datter", en: "I have a daughter" }, hint: "Feminine: definite dattera. Plural døtre — irregular, like brødre and søstre." },
        { id: "no-u4l2-enmann", type: "vocab", front: "en mann", reading: "enmann", meaning: "man", example: { jp: "Han er en hyggelig mann.", en: "He is a nice man." }, accept: ["a man", "husband", "a husband"], drill: { jp: "Han er en mann", en: "He is a man" }, hint: "It also means husband — mannen min is my husband. Plural menn, definite plural mennene." },
        { id: "no-u4l2-eikvinne", type: "vocab", front: "ei kvinne", reading: "eikvinne", meaning: "woman", example: { jp: "Kari er ei kvinne fra Bergen.", en: "Kari is a woman from Bergen." }, accept: ["a woman", "lady"], drill: { jp: "Kari er ei kvinne", en: "Kari is a woman" }, hint: "KVIN-ne — the kv- cluster is said as written, both letters. Feminine: definite kvinna. For \"wife\" Norwegians say kona." },
        { id: "no-u4l2-enbestefar", type: "vocab", front: "en bestefar", reading: "enbestefar", meaning: "grandfather", example: { jp: "Jeg har en bestefar i Norge.", en: "I have a grandfather in Norway." }, accept: ["a grandfather", "grandpa", "granddad"], drill: { jp: "Jeg har en bestefar", en: "I have a grandfather" }, hint: "beste- (best) plus far. Norwegians often go finer: farfar is your father's father, morfar your mother's father." },
        { id: "no-u4l2-eibestemor", type: "vocab", front: "ei bestemor", reading: "eibestemor", meaning: "grandmother", example: { jp: "Han har ei bestemor i Bergen.", en: "He has a grandmother in Bergen." }, accept: ["a grandmother", "grandma", "granny"], drill: { jp: "Han har ei bestemor", en: "He has a grandmother" }, hint: "Same build, and it keeps mor's feminine gender: definite bestemora. Farmor and mormor split it the same way as farfar and morfar." },
      ],
    },
    {
      id: "no-u4l3",
      unit: 4,
      lesson: 3,
      title: "The home",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe where you live — hus, hjem, rom, hage — and name the animals living there with you.",
      items: [
        { id: "no-u4l3-ethus", type: "vocab", front: "et hus", reading: "ethus", meaning: "house", example: { jp: "Vi har et hus i Bergen.", en: "We have a house in Bergen." }, accept: ["a house", "building"], drill: { jp: "Vi har et hus", en: "We have a house" }, hint: "HUES. Neuter: definite huset, plural hus — unchanged. Most Norwegians in a city live in en leilighet, a flat." },
        { id: "no-u4l3-ethjem", type: "vocab", front: "et hjem", reading: "ethjem", meaning: "home", example: { jp: "Erling har et hjem i Oslo.", en: "Erling has a home in Oslo." }, accept: ["a home", "household"], drill: { jp: "Erling har et hjem", en: "Erling has a home" }, hint: "The h is silent before j: YEM. A hus is a building, a hjem is the life inside it — the same split as English." },
        { id: "no-u4l3-enhund", type: "vocab", front: "en hund", reading: "enhund", meaning: "dog", example: { jp: "Vi har en hund.", en: "We have a dog." }, accept: ["a dog", "hound"], drill: { jp: "Vi har en hund", en: "We have a dog" }, hint: "HUNN — the d is silent here too. Definite hunden, plural hunder." },
        { id: "no-u4l3-enkatt", type: "vocab", front: "en katt", reading: "enkatt", meaning: "cat", example: { jp: "Jeg har en katt og en hund.", en: "I have a cat and a dog." }, accept: ["a cat", "kitty"], drill: { jp: "Jeg har en katt", en: "I have a cat" }, hint: "Definite katten, plural katter. A kitten is en kattunge — literally a cat-young." },
        { id: "no-u4l3-etrom", type: "vocab", front: "et rom", reading: "etrom", meaning: "room", example: { jp: "Her er et rom.", en: "Here is a room." }, accept: ["a room", "space"], drill: { jp: "Her er et rom", en: "Here is a room" }, hint: "ROOM. Neuter: definite rommet — the m doubles when the ending goes on. Plural rom, unchanged." },
        { id: "no-u4l3-enhage", type: "vocab", front: "en hage", reading: "enhage", meaning: "garden", example: { jp: "Erling har en hage i Bergen.", en: "Erling has a garden in Bergen." }, accept: ["a garden", "yard", "orchard"], drill: { jp: "De har en hage", en: "They have a garden" }, hint: "HAH-ge, with a hard g. Masculine: definite hagen." },
      ],
    },
    {
      id: "no-u4l4",
      unit: 4,
      lesson: 4,
      title: "Whose? — and where the article goes",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say whose something is the way Norwegians actually say it — broren min, faren din — with the possessive AFTER a noun that already carries its article.",
      items: [
        { id: "no-u4l4-min", type: "vocab", front: "min", reading: "min", meaning: "my", example: { jp: "Broren min bor i Oslo.", en: "My brother lives in Oslo." }, accept: ["mine", "my own"], drill: { jp: "Broren min bor i Oslo", en: "My brother lives in Oslo" }, hint: "The possessive comes AFTER the noun, and the noun takes its definite ending: en bror → broren min. min matches masculine and feminine, mitt neuter (huset mitt), mine plural." },
        { id: "no-u4l4-din", type: "vocab", front: "din", reading: "din", meaning: "your", example: { jp: "Hva heter faren din?", en: "What is your father's name?" }, accept: ["yours", "thy"], drill: { jp: "Hva heter faren din", en: "What is your father called" }, hint: "Same shape as min: din, ditt for neuter, dine for plural. Ditt navn works too, in front — but that is the formal, written order." },
        { id: "no-u4l4-hans", type: "vocab", front: "hans", reading: "hans", meaning: "his", example: { jp: "Hunden hans er ung.", en: "His dog is young." }, accept: ["his own", "of his"], drill: { jp: "Hunden hans er ung", en: "His dog is young" }, hint: "hans never changes for gender — hunden hans, huset hans, barna hans. Only min and din do the mitt/mine dance." },
        { id: "no-u4l4-hennes", type: "vocab", front: "hennes", reading: "hennes", meaning: "her", example: { jp: "Søstera hennes bor i Bergen.", en: "Her sister lives in Bergen." }, accept: ["hers", "her own"], drill: { jp: "Søstera hennes bor i Bergen", en: "Her sister lives in Bergen" }, hint: "Also unchanging. And there it is again — ei søster becomes søstera before the possessive lands." },
        { id: "no-u4l4-aelske", type: "vocab", front: "å elske", reading: "aelske", meaning: "to love", example: { jp: "Jeg elsker familien min.", en: "I love my family." }, accept: ["love", "to adore", "adore"], drill: { jp: "Det er hyggelig å elske", en: "It is nice to love" }, hint: "EL-ske, present elsker. Norwegians use it sparingly — jeg er glad i deg is the warmer, more everyday way of saying it to family." },
        { id: "no-u4l4-sammen", type: "vocab", front: "sammen", reading: "sammen", meaning: "together", example: { jp: "Vi bor sammen i et hus.", en: "We live together in a house." }, accept: ["with each other", "jointly"], drill: { jp: "Vi bor sammen", en: "We live together" }, hint: "SAM-men. Sammen med means \"together with\": jeg jobber sammen med Erling." },
      ],
    },
  ],
};
