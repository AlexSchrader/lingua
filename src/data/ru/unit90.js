// RU Unit 90 — География и края ("Geography and regions") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u87–u97). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, and ru/unit87.js §1–§7 for this block.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 7 (B1)` — no subject named. See
// unit87.js §1 and §6.
//
// THE MEASURED HOLE, and it is the one that reads worst out loud: OF THE FOUR
// COMPASS POINTS, ONLY `юг` IS TAUGHT — at u3l1, as a letter-exemplar for ю.
// север, запад and восток are all free, so a learner who has had 1,440 words
// can say "the south" and cannot say "the north". u26 owns the natural features
// a walker meets (гора · река · море · лес · остров · песок · камень), u30 owns
// the traveller's words (берег · карта · граница), u54 owns the scientist's
// (природа · климат · планета · лёд · волна) — and nothing owns the MAP.
//
// ⚠️ `район` IS TAKEN (u14l1, "a district"), so the administrative word this
// unit teaches is `область`, the larger unit, with its hint stating the
// relationship. `край` is also TAKEN (u33l4, "an edge") — the unit TITLE uses it
// in its second sense, a region, and no card does. The same title/card split
// unit87.js §4 describes for u92 and unit88.js for `хозяйство`.
//
// ⚠️ THREE CANDIDATES REFUSED, each for a stated reason:
//   `континент` — a gloss collision with `материк`, which is carded and is what
//        a Russian school actually teaches. The hint on материк names the loan.
//   `регион` — same, against `область`.
//   `побережье` — allowed by the rule (a prefixed derivation of берег, u30l3,
//        which unit31.js §3 permits) and dropped only because the unit was full
//        at 24. Named here so the next seat knows it is free and legal.
//   `широта`/`долгота` — latitude and longitude. Free, legal, and left out as
//        too technical for a B1 vocabulary unit; `полюс` and `горизонт` carry
//        the globe instead.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT90 = {
  id: "ru-u90",
  lang: "ru",
  title: "География и края",
  order: 90,
  stage: "b1",
  lessons: [
    {
      id: "ru-u90l1",
      unit: 90,
      lesson: 1,
      title: "The points of the compass",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say where in a country something is — north, west or east — and name the pole, the horizon and the continent.",
      items: [
        { id: "ru-u90l1-sever", type: "vocab", front: "север", reading: "sever", meaning: "the north", accept: ["the northern direction", "the north of a country", "the cold end of the map"], example: { jp: "На севере этой страны очень холодно.", en: "It is very cold in the north of this country." }, drill: { jp: "Север этой страны очень холодный", en: "The north of this country is very cold" }, hint: "SE-ver — stress on the first syllable. MASCULINE. ⚠️ `юг`, the south, has been yours since unit 3 — this lesson adds the other three points. На севере means in the north; на север means towards it." },
        { id: "ru-u90l1-zapad", type: "vocab", front: "запад", reading: "zapad", meaning: "the west", accept: ["the western direction", "the west of a country", "where the sun goes down"], example: { jp: "Вечером солнце всегда на западе.", en: "In the evening the sun is always in the west." }, drill: { jp: "Запад этой страны очень тёплый", en: "The west of this country is very warm" }, hint: "ZA-pad — stress on the first syllable, and the д at the end is said as a t. MASCULINE. ⚠️ Capitalised, Запад means the West as a political bloc, which is how you will most often meet it in the news." },
        { id: "ru-u90l1-vostok", type: "vocab", front: "восток", reading: "vostok", meaning: "the east", accept: ["the eastern direction", "the east of a country", "where the sun comes up"], example: { jp: "Утром солнце всегда на востоке.", en: "In the morning the sun is always in the east." }, drill: { jp: "Восток этой страны очень большой", en: "The east of this country is very large" }, hint: "vas-TOK — stress on the last syllable, and the о before it reduces to a. MASCULINE. ⚠️ Дальний Восток is the Russian Far East and Ближний Восток is the Middle East — both capitalised." },
        { id: "ru-u90l1-polyus", type: "vocab", front: "полюс", reading: "polyus", meaning: "a pole of the earth", accept: ["an end of the earth's axis", "the top or the bottom of the globe", "the farthest cold point on the globe"], example: { jp: "На полюсе всегда очень холодно.", en: "At the pole it is always very cold." }, drill: { jp: "Северный полюс очень далеко", en: "The North Pole is very far away" }, hint: "PO-lyus — stress on the first syllable, and the ю keeps the л soft. MASCULINE. ⚠️ Also used of opposites, полные полюса, poles apart. Not to be confused with плюс, a plus sign." },
        { id: "ru-u90l1-gorizont", type: "vocab", front: "горизонт", reading: "gorizont", meaning: "the horizon", accept: ["the line where sky meets land", "the far edge of what you can see", "the skyline"], example: { jp: "На горизонте видно только море.", en: "On the horizon only the sea can be seen." }, drill: { jp: "Горизонт здесь очень далеко", en: "The horizon here is very far away" }, hint: "ga-ri-ZONT — stress on ZONT, and both о before it reduce to a. MASCULINE. ⚠️ Also figurative and very common: расширить горизонты, to broaden your horizons." },
        { id: "ru-u90l1-materik", type: "vocab", front: "материк", reading: "materik", meaning: "a continent", accept: ["a great landmass", "one of the earth's land blocks", "a continental land mass"], example: { jp: "Этот материк очень большой и сухой.", en: "This continent is very large and very dry." }, drill: { jp: "Этот материк совсем сухой", en: "This continent is completely dry" }, hint: "ma-ti-RIK — stress on the last syllable, and the е before it reduces to i. MASCULINE. From мать, mother: the mother-land as against the islands. The loan word континент exists, but материк is what a Russian school teaches." },
      ],
    },
    {
      id: "ru-u90l2",
      unit: 90,
      lesson: 2,
      title: "Water on the map",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the water on a map — ocean, lake, bay, strait — and the land that runs out into it, a cape or a peninsula.",
      items: [
        { id: "ru-u90l2-okean", type: "vocab", front: "океан", reading: "okean", meaning: "an ocean", accept: ["the great sea", "one of the earth's oceans", "the open sea at its largest"], example: { jp: "Этот океан очень глубокий и холодный.", en: "This ocean is very deep and very cold." }, drill: { jp: "Океан здесь очень глубокий", en: "The ocean here is very deep" }, hint: "a-ki-AN — stress on the last syllable, the о reduces to a and the е to i. MASCULINE. ⚠️ Russian keeps море and океан apart more strictly than English does: call the Pacific a море and you will be corrected." },
        { id: "ru-u90l2-ozero", type: "vocab", front: "озеро", reading: "ozero", meaning: "a lake", accept: ["a body of fresh water", "standing water inland", "an inland water"], example: { jp: "Это озеро очень чистое и тихое.", en: "This lake is very clean and very quiet." }, drill: { jp: "Это озеро очень глубокое", en: "This lake is very deep" }, hint: "O-ze-ra — stress on the first syllable, and the final о reduces to a. NEUTER (-о). ⚠️ Its plural takes ё and moves the stress: озёра. A plain gap until now — unit 26 taught река, море, гора and лес and no lake." },
        { id: "ru-u90l2-zaliv", type: "vocab", front: "залив", reading: "zaliv", meaning: "a bay", accept: ["a gulf", "water that reaches into the land", "an inlet of the sea"], example: { jp: "В этом заливе вода очень тёплая.", en: "The water in this bay is very warm." }, drill: { jp: "Этот залив очень широкий", en: "This bay is very wide" }, hint: "za-LIV — stress on the last syllable. MASCULINE. From заливать, to flood: the sea poured into the land. A big one is still залив — Персидский залив is the Persian Gulf." },
        { id: "ru-u90l2-proliv", type: "vocab", front: "пролив", reading: "proliv", meaning: "a strait", accept: ["a narrow water between two lands", "a channel between seas", "a sound"], example: { jp: "Этот пролив очень узкий и опасный.", en: "This strait is very narrow and very dangerous." }, drill: { jp: "Этот пролив совсем узкий", en: "This strait is very narrow" }, hint: "pra-LIV — stress on the last syllable, and the о reduces to a. MASCULINE. The same root as залив with a different prefix: water poured THROUGH rather than INTO." },
        { id: "ru-u90l2-mys", type: "vocab", front: "мыс", reading: "mys", meaning: "a cape", accept: ["a headland", "land running out into the sea", "a point of land"], example: { jp: "На этом мысе стоит старый дом.", en: "An old house stands on this cape." }, drill: { jp: "Этот мыс очень высокий", en: "This cape is very high" }, hint: "MYS — one syllable, with the ы from unit 5. MASCULINE. ⚠️ Checked against `мы` from unit 2 and `мысль` from unit 39: all three take different readings under this course's scheme, so none blocks the others." },
        { id: "ru-u90l2-poluostrov", type: "vocab", front: "полуостров", reading: "poluostrov", meaning: "a peninsula", accept: ["land almost surrounded by water", "a half-island", "a long point of land in the sea"], example: { jp: "Этот полуостров очень далеко на севере.", en: "This peninsula is a very long way north." }, drill: { jp: "Этот полуостров совсем маленький", en: "This peninsula is very small" }, hint: "pa-lu-OS-trav — stress on OS, and both о before it reduce to a. MASCULINE. Literally half-island: полу- plus остров from unit 26. ⚠️ A prefixed derivation, which unit 31 allows — knowing остров is not enough, you still need полу-." },
      ],
    },
    {
      id: "ru-u90l3",
      unit: 90,
      lesson: 3,
      title: "The shape of the land",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe the shape of a country — a plain, a hill, a valley, a mountain range, a summit and a gorge.",
      items: [
        { id: "ru-u90l3-ravnina", type: "vocab", front: "равнина", reading: "ravnina", meaning: "wide flat country", accept: ["a plain", "level land", "a flat open area"], example: { jp: "Эта равнина очень большая и пустая.", en: "This plain is very large and very empty." }, drill: { jp: "Эта равнина совсем пустая", en: "This plain is completely empty" }, hint: "rav-NI-na — stress on NI. FEMININE (-а). From ровно, evenly, which unit 37 taught. Most of European Russia is one, the Русская равнина." },
        { id: "ru-u90l3-kholm", type: "vocab", front: "холм", reading: "kholm", meaning: "a hill", accept: ["a low rise of land", "a small height", "a mound"], example: { jp: "На этом холме стоит церковь.", en: "A church stands on this hill." }, drill: { jp: "Этот холм не очень высокий", en: "This hill is not very high" }, hint: "KHOLM — one syllable, opening with the scraping х. MASCULINE. ⚠️ Its plural moves the stress onto the ending: холмЫ. Smaller than a гора from unit 26, and the line between them is feel, not metres." },
        { id: "ru-u90l3-dolina", type: "vocab", front: "долина", reading: "dolina", meaning: "a valley", accept: ["low ground between hills", "a dale", "the land along a river between heights"], example: { jp: "Эта долина лежит между горами.", en: "This valley lies between the mountains." }, drill: { jp: "Эта долина очень тихая", en: "This valley is very quiet" }, hint: "da-LI-na — stress on LI, and the о reduces to a. FEMININE (-а). From дол, an old word for the bottom of something: the bottom of a landscape." },
        { id: "ru-u90l3-khrebet", type: "vocab", front: "хребет", reading: "khrebet", meaning: "a mountain range", accept: ["a chain of mountains", "a ridge of high ground", "a line of peaks"], example: { jp: "Этот хребет очень высокий и длинный.", en: "This range is very high and very long." }, drill: { jp: "Этот хребет идёт очень далеко", en: "This range runs a very long way" }, hint: "khri-BET — stress on the last syllable, and the first е reduces to i. MASCULINE. ⚠️ The same word is an animal's or a person's spine — a хребет is literally a backbone, which is exactly the picture." },
        { id: "ru-u90l3-vershina", type: "vocab", front: "вершина", reading: "vershina", meaning: "a summit", accept: ["the top of a mountain", "a peak", "the highest point of something"], example: { jp: "На вершине этой горы всегда лежит снег.", en: "There is always snow lying on the summit of this mountain." }, drill: { jp: "Вершина этой горы очень высокая", en: "The summit of this mountain is very high" }, hint: "vir-SHI-na — stress on SHI, and the е reduces to i. FEMININE (-а). From верх, the top. ⚠️ Also figurative: вершина карьеры, the peak of a career, with карьера from unit 42." },
        { id: "ru-u90l3-ushchele", type: "vocab", front: "ущелье", reading: "ushchele", meaning: "a gorge", accept: ["a narrow deep valley", "a ravine between cliffs", "a steep cut in the land"], example: { jp: "В этом ущелье очень темно и холодно.", en: "It is very dark and very cold in this gorge." }, drill: { jp: "Это ущелье очень узкое", en: "This gorge is very narrow" }, hint: "u-SHCHE-lye — stress on SHCHE, with the long soft щ from unit 3. NEUTER (-е). From щель, a crack: a crack in a mountain, narrower and deeper than a долина." },
      ],
    },
    {
      id: "ru-u90l4",
      unit: 90,
      lesson: 4,
      title: "Kinds of country, and how it is divided",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the four kinds of open country Russia actually has — desert, steppe, taiga and tundra — and say which province and what sort of terrain you are in.",
      items: [
        { id: "ru-u90l4-pustynya", type: "vocab", front: "пустыня", reading: "pustynya", meaning: "a desert", accept: ["dry empty country", "a land with no water", "sand country"], example: { jp: "В пустыне днём жарко, а ночью холодно.", en: "In the desert it is hot by day and cold by night." }, drill: { jp: "Эта пустыня очень большая", en: "This desert is very large" }, hint: "pus-TY-nya — stress on TY, with the ы from unit 5. FEMININE (-я). Built on пустой from unit 23, empty. ⚠️ A cold desert is still a пустыня: the word is about having nothing, not about heat." },
        { id: "ru-u90l4-step", type: "vocab", front: "степь", reading: "step", meaning: "a steppe", accept: ["flat grassland", "treeless open plain", "the grass country of the south"], example: { jp: "В степи растёт только трава.", en: "Only grass grows on the steppe." }, drill: { jp: "Эта степь совсем пустая", en: "This steppe is completely empty" }, hint: "STEP — one syllable, and the ь keeps the п soft. FEMININE despite the -ь. ⚠️ Its prepositional after в is степИ, stress on the ending. Flat grass with no trees, and the English word steppe is borrowed from this one." },
        { id: "ru-u90l4-tayga", type: "vocab", front: "тайга", reading: "tayga", meaning: "the taiga", accept: ["the northern pine forest", "the great conifer forest", "endless northern woodland"], example: { jp: "Тайга идёт на восток очень далеко.", en: "The taiga runs a very long way east." }, drill: { jp: "Эта тайга очень большая", en: "This taiga is very large" }, hint: "tay-GA — stress on the ending. FEMININE (-а). The belt of pine forest across northern Russia, bigger than any `лес` from unit 26 — and another word English took from Russian unchanged." },
        { id: "ru-u90l4-tundra", type: "vocab", front: "тундра", reading: "tundra", meaning: "the tundra", accept: ["frozen treeless plain", "the cold ground north of the forest", "arctic open country"], example: { jp: "В тундре не растут деревья.", en: "Trees do not grow in the tundra." }, drill: { jp: "Тундра здесь совсем пустая", en: "The tundra here is completely empty" }, hint: "TUN-dra — stress on the first syllable. FEMININE (-а). North of the тайга, where the ground stays frozen and nothing tall grows." },
        { id: "ru-u90l4-oblast", type: "vocab", front: "область", reading: "oblast", meaning: "a province", accept: ["an administrative region", "a large division of a country", "a county"], example: { jp: "Эта область очень большая и богатая.", en: "This province is very large and very rich." }, drill: { jp: "Эта область на севере страны", en: "This province is in the north of the country" }, hint: "OB-last — stress on the first syllable. FEMININE despite the -ь. ⚠️ `район` from unit 14 is the smaller unit inside it, a district. It also means a field of knowledge: область науки." },
        { id: "ru-u90l4-mestnost", type: "vocab", front: "местность", reading: "mestnost", meaning: "the terrain", accept: ["the lie of the land", "the country around a place", "the ground of an area"], example: { jp: "Эта местность очень красивая, но пустая.", en: "This terrain is very beautiful, but empty." }, drill: { jp: "Местность здесь очень красивая", en: "The terrain here is very beautiful" }, hint: "MES-nast — stress on the first syllable, and ⚠️ the т of стн is SILENT: MES-nast, not MEST-nast. FEMININE despite the -ь. Built on место from unit 4, but it is not a place — it is the CHARACTER of the ground: hilly, wooded, open." },
      ],
    },
  ],
};
