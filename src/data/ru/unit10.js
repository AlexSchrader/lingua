// RU Unit 10 — Семья ("The family") — A1
// The last unit of block 1. The learner can greet, introduce themselves and read
// a street sign; this unit gives them the people to talk about.
// Conventions are declared in ru/unit1.js §1–§10 and bind every unit.
//
// FOUR RUSSIAN-SPECIFIC HAZARDS THIS UNIT WALKS THROUGH ON PURPOSE:
//
//   1. GENDER DOES NOT FOLLOW THE ENDING HERE. папа, дедушка and дядя all end in
//      -а/-я and are all MASCULINE; мать and дочь end in -ь and are both
//      FEMININE. That is five of twenty-four cards where the rule of thumb from
//      unit1.js §3 fails, so every one of them names its gender in CAPS.
//
//   2. WARM WORD vs NEUTRAL WORD. Russian has two words for each parent and they
//      are not synonyms: мама/папа are what you call them, мать/отец are what a
//      form calls them. The alphabet band already taught мама, so this unit adds
//      the other three and each gloss says which register it is:
//      "mum" · "dad" · "a mother" · "a father".
//
//   3. THE LEXEME PAIRS THAT LOOK LIKE DUPLICATES AND ARE NOT. муж (a husband)
//      shares a root with мужчина (a man, already taught), and жена (a wife) with
//      женщина (a woman, already taught). `scripts/check-front.mjs` reports both
//      as free — its lexeme probe strips GERMAN suffixes and is blind to Cyrillic,
//      so this was a judgement, not a measurement. The judgement: a learner who
//      knows мужчина means a man would NOT guess that муж means a husband, and
//      both pairs are core A1 vocabulary. Each hint names its relative explicitly
//      so the learner sees the family resemblance rather than tripping on it.
//
//   4. THE PLURAL THAT IS A DIFFERENT WORD. ребёнок → дети. unit1.js §5 forbids
//      an inflected form from being its own card, and this is the case it was
//      written for: only ребёнок is a front, and дети lives in the hint.
//
// ⚠️ Example scope is NOT gated for Russian — see unit7.js's header. Run
// `node scripts/scope-ru.mjs 7,8,9,10`; it must report 0.
//
// ⚠️ `они` AND `их` ARE NOT TAUGHT ANYWHERE IN u1–u10, so no example or drill in
// this unit uses them, however natural "their family" would be. The pronoun set
// the band teaches is я · ты · он · она · мы · вы and nothing more; the third
// person plural belongs to whichever unit block 2 or 3 gives it. Checked by hand
// 2026-09-27 — zero uses across u7–u10.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT10 = {
  id: "ru-u10",
  lang: "ru",
  title: "Семья",
  order: 10,
  stage: "a1",
  lessons: [
    {
      id: "ru-u10l1",
      unit: 10,
      lesson: 1,
      title: "The people you live with",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name your parents and your children, and say which of them does what.",
      items: [
        { id: "ru-u10l1-semya", type: "vocab", front: "семья", reading: "semya", meaning: "a family", accept: ["family", "the family", "a household"], example: { jp: "Моя семья живёт здесь.", en: "My family lives here." }, drill: { jp: "Это очень большая семья", en: "That is a very big family" }, hint: "si-MYA, stress at the end. Feminine (-я), and the ь between м and я is what makes it si-MYA rather than SEM-ya. ⚠️ Not фамилия, which is a surname — the two are a classic pair to confuse." },
        { id: "ru-u10l1-papa", type: "vocab", front: "папа", reading: "papa", meaning: "dad", accept: ["daddy", "pa", "father (informal)"], example: { jp: "Мой папа врач, а мама учитель.", en: "My dad is a doctor, and my mum is a teacher." }, drill: { jp: "Мой папа работает здесь", en: "My dad works here" }, hint: "PA-pa, stress first. ⚠️ MASCULINE even though it ends in -а — the same exception as мужчина and дядя. Warm and informal, like English dad; the neutral word is отец." },
        { id: "ru-u10l1-otets", type: "vocab", front: "отец", reading: "otets", meaning: "a father", accept: ["father", "the father"], example: { jp: "Его отец тоже инженер.", en: "His father is also an engineer." }, drill: { jp: "Её отец наш учитель", en: "Her father is our teacher" }, hint: "a-TYETS, stress at the end. Masculine. Neutral and a little formal where папа is warm — a document always says отец. ⚠️ The е vanishes when the word changes: отца, not отеца." },
        { id: "ru-u10l1-mat", type: "vocab", front: "мать", reading: "mat", meaning: "a mother", accept: ["mother", "the mother"], example: { jp: "Его мать тоже учитель.", en: "His mother is also a teacher." }, drill: { jp: "Моя мать хорошо знает язык", en: "My mother knows the language well" }, hint: "MAT, one syllable, ending soft. FEMININE (-ь). Neutral like отец; the warm everyday word is мама. ⚠️ It grows a syllable when it changes: матери, not мати." },
        { id: "ru-u10l1-syn", type: "vocab", front: "сын", reading: "syn", meaning: "a son", accept: ["son", "the son", "a boy of the family"], example: { jp: "Наш сын уже студент.", en: "Our son is already a student." }, drill: { jp: "Её сын очень хорошо читает", en: "Her son reads very well" }, hint: "SYN, one syllable, with that ы vowel English has no letter for. Masculine. Its plural сыновья is an odd one and comes later in the course." },
        { id: "ru-u10l1-doch", type: "vocab", front: "дочь", reading: "doch", meaning: "a daughter", accept: ["daughter", "the daughter", "a girl of the family"], example: { jp: "Наша дочь уже врач.", en: "Our daughter is already a doctor." }, drill: { jp: "Моя дочь очень хорошо пишет", en: "My daughter writes very well" }, hint: "DOCH, one syllable, ending soft. FEMININE (-ь). ⚠️ Like мать it grows a syllable when it changes: дочери. In speech Russians often say дочка instead — warmer, and easier to say." },
      ],
    },
    {
      id: "ru-u10l2",
      unit: 10,
      lesson: 2,
      title: "Brothers, sisters and the generation above",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say who your brothers and sisters are and name both generations above you.",
      items: [
        { id: "ru-u10l2-brat", type: "vocab", front: "брат", reading: "brat", meaning: "a brother", accept: ["brother", "the brother", "a male sibling"], example: { jp: "Мой брат живёт в Москве.", en: "My brother lives in Moscow." }, drill: { jp: "Мой брат тоже студент", en: "My brother is a student too" }, hint: "BRAT, one syllable — the бр goes straight together with no vowel between. Masculine. Its plural братья takes ь and я, which the grammar units explain." },
        { id: "ru-u10l2-sestra", type: "vocab", front: "сестра", reading: "sestra", meaning: "a sister", accept: ["sister", "the sister", "a female sibling"], example: { jp: "Моя сестра работает в банке.", en: "My sister works at the bank." }, drill: { jp: "Её сестра тоже врач", en: "Her sister is a doctor too" }, hint: "sis-TRA, stress at the end, and the unstressed е flattens towards i. Feminine (-а). ⚠️ The stress jumps in the plural: сёстры, SYO-stry, and the ё shows you where." },
        { id: "ru-u10l2-babushka", type: "vocab", front: "бабушка", reading: "babushka", meaning: "a grandmother", accept: ["grandmother", "grandma", "granny", "the grandmother"], example: { jp: "Моя бабушка уже дома, и она очень рада.", en: "My grandmother is home already, and she is very glad." }, drill: { jp: "Наша бабушка живёт здесь", en: "Our grandmother lives here" }, hint: "BA-bush-ka, stress FIRST — not ba-BOOSH-ka, which is how English says it and how no Russian ever does. Feminine (-а)." },
        { id: "ru-u10l2-dedushka", type: "vocab", front: "дедушка", reading: "dedushka", meaning: "a grandfather", accept: ["grandfather", "grandpa", "granddad", "the grandfather"], example: { jp: "Мой дедушка ещё работает.", en: "My grandfather still works." }, drill: { jp: "Наш дедушка живёт в Москве", en: "Our grandfather lives in Moscow" }, hint: "DYE-dush-ka, stress first. ⚠️ MASCULINE despite the -а, like папа and дядя. Built from дед plus the same warm -ушка ending that makes бабушка." },
        { id: "ru-u10l2-dyadya", type: "vocab", front: "дядя", reading: "dyadya", meaning: "an uncle", accept: ["uncle", "the uncle"], example: { jp: "Мой дядя инженер, и он живёт в Москве.", en: "My uncle is an engineer, and he lives in Moscow." }, drill: { jp: "Мой дядя тоже инженер", en: "My uncle is an engineer too" }, hint: "DYA-dya, stress first. ⚠️ MASCULINE despite the -я. One word for an uncle on either side — Russian does not split them the way some languages do." },
        { id: "ru-u10l2-tyotya", type: "vocab", front: "тётя", reading: "tyotya", meaning: "an aunt", accept: ["aunt", "auntie", "the aunt"], example: { jp: "Моя тётя учитель, и она очень хорошо знает язык.", en: "My aunt is a teacher, and she knows the language very well." }, drill: { jp: "Моя тётя живёт в Москве", en: "My aunt lives in Moscow" }, hint: "TYO-tya — the ё carries the stress, as ё always does, so you never have to guess. Feminine (-я). Russian children also use it for any grown woman." },
      ],
    },
    {
      id: "ru-u10l3",
      unit: 10,
      lesson: 3,
      title: "Saying who you have",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that you have someone in your family, and say who resembles whom.",
      items: [
        { id: "ru-u10l3-est", type: "vocab", front: "есть", reading: "est", meaning: "there is, have", accept: ["there are", "have", "has", "is present"], example: { jp: "У меня есть брат и сестра.", en: "I have a brother and a sister." }, drill: { jp: "У нас есть дочь", en: "We have a daughter" }, hint: "YEST, one syllable, ending soft. Russian has NO verb to have: у меня есть — literally at me there is. ⚠️ The soft sign is load-bearing: ест without it means he eats, and this course teaches only есть." },
        { id: "ru-u10l3-rebyonok", type: "vocab", front: "ребёнок", reading: "rebyonok", meaning: "a child", accept: ["child", "a kid", "the child", "a baby"], example: { jp: "Наш ребёнок уже читает.", en: "Our child can already read." }, drill: { jp: "Это очень хороший ребёнок", en: "That is a very good child" }, hint: "ri-BYO-nak — the ё is stressed, as always. Masculine. ⚠️ Its plural is a DIFFERENT word, дети, and this course teaches only the singular front." },
        { id: "ru-u10l3-muzh", type: "vocab", front: "муж", reading: "muzh", meaning: "a husband", accept: ["husband", "the husband", "a male spouse"], example: { jp: "Её муж инженер.", en: "Her husband is an engineer." }, drill: { jp: "Мой муж тоже врач", en: "My husband is a doctor too" }, hint: "MUSH, one syllable — the ж goes quiet at the end and says sh. Masculine. ⚠️ Related to мужчина, a man, but not the same word: муж is specifically a married one." },
        { id: "ru-u10l3-zhena", type: "vocab", front: "жена", reading: "zhena", meaning: "a wife", accept: ["wife", "the wife", "a female spouse"], example: { jp: "Его жена врач, и она работает здесь.", en: "His wife is a doctor, and she works here." }, drill: { jp: "Моя жена тоже учитель", en: "My wife is a teacher too" }, hint: "zhi-NA, stress at the end, and the unstressed е flattens towards i. Feminine (-а). ⚠️ Related to женщина, a woman, but жена is specifically a married one. The stress jumps in the plural: жёны, ZHO-ny." },
        { id: "ru-u10l3-vnuk", type: "vocab", front: "внук", reading: "vnuk", meaning: "a grandson", accept: ["grandson", "the grandson", "a grandchild"], example: { jp: "Мой внук ещё ребёнок.", en: "My grandson is still a child." }, drill: { jp: "Наш внук уже читает", en: "Our grandson can already read" }, hint: "VNUK, one syllable — вн at the start with no vowel, which English never does. Masculine. A granddaughter is внучка." },
        { id: "ru-u10l3-pokhozh", type: "vocab", front: "похож", reading: "pokhozh", meaning: "similar (masculine form)", accept: ["alike", "resembling", "similar", "like someone"], example: { jp: "Мой сын похож на папу.", en: "My son looks like his dad." }, drill: { jp: "Он похож на брата", en: "He looks like his brother" }, hint: "pa-KHOSH, stress at the end, and the ж goes quiet. A man is похож, a woman похожа, several people похожи. It takes на plus the object form: похож на папу." },
      ],
    },
    {
      id: "ru-u10l4",
      unit: 10,
      lesson: 4,
      title: "Your family's life",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where your family lives, who has grown up, and what you celebrate together.",
      items: [
        { id: "ru-u10l4-fotografiya", type: "vocab", front: "фотография", reading: "fotografiya", meaning: "a photograph", accept: ["photograph", "photo", "a picture", "the photo"], example: { jp: "Вот фотография моей семьи.", en: "Here is a photograph of my family." }, drill: { jp: "Вот наша фотография", en: "Here is our photograph" }, hint: "fa-ta-GRA-fi-ya, stress on GRA — five syllables. Feminine (-я). In speech Russians cut it down to фото, which never changes its ending at all." },
        { id: "ru-u10l4-kvartira", type: "vocab", front: "квартира", reading: "kvartira", meaning: "a flat", accept: ["apartment", "an apartment", "flat", "the flat"], example: { jp: "Наша квартира очень хорошая, и здесь тихо.", en: "Our flat is very nice, and it is quiet here." }, drill: { jp: "Вот наша квартира", en: "Here is our flat" }, hint: "kvar-TI-ra, stress on TI. Feminine (-а). A квартира is a flat in a block, which is how most Russian families live; дом is the whole building, or a house." },
        { id: "ru-u10l4-vzroslyy", type: "vocab", front: "взрослый", reading: "vzroslyy", meaning: "an adult", accept: ["adult", "grown-up", "a grown-up", "grown"], example: { jp: "Наш сын уже взрослый.", en: "Our son is already an adult." }, drill: { jp: "Мой брат уже взрослый", en: "My brother is already an adult" }, hint: "VZROS-lyy, stress first — three consonants before the first vowel. It is an adjective used as a noun: взрослый человек, an adult person, or just взрослый. A child is ребёнок." },
        { id: "ru-u10l4-ryadom", type: "vocab", front: "рядом", reading: "ryadom", meaning: "nearby", accept: ["next to", "close by", "alongside", "near"], example: { jp: "Моя сестра живёт рядом.", en: "My sister lives nearby." }, drill: { jp: "Наш дедушка живёт рядом", en: "Our grandfather lives nearby" }, hint: "RYA-dam, stress first. It answers where: он рядом, he is right here. For next to a THING Russian adds с — рядом с домом." },
        { id: "ru-u10l4-svadba", type: "vocab", front: "свадьба", reading: "svadba", meaning: "a wedding", accept: ["wedding", "the wedding", "a marriage ceremony"], example: { jp: "Свадьба — это очень большой день.", en: "A wedding is a very big day." }, drill: { jp: "Это очень красивая свадьба", en: "That is a very beautiful wedding" }, hint: "SVAD-ba, stress first. Feminine (-а). The ь softens the д, and the whole дьб cluster takes no vowel. A Russian свадьба traditionally runs for two days." },
        { id: "ru-u10l4-prazdnik", type: "vocab", front: "праздник", reading: "prazdnik", meaning: "a holiday", accept: ["a celebration", "a festival", "holiday", "a feast day"], example: { jp: "Сегодня праздник, и мы дома вместе.", en: "Today is a holiday, and we are at home together." }, drill: { jp: "Это наш большой праздник", en: "This is our big holiday" }, hint: "PRAZ-nik, stress first — and the д is SILENT, one of the silent-letter words from the alphabet band. Masculine. Any celebration counts, not only a day off work." },
      ],
    },
  ],
};
