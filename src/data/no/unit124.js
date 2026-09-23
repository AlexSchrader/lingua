// NO Unit 124 — Farger og materialer · 2 (slot: coverage-b2-14) — B2
// COVERAGE UNIT, block 3. Scaffolded "Vocabulary 14 (B2)"; retitled per
// CLAUDE.md "No front language". Continues u8 Farger og vær and u46 Form og
// materiale.
//
// MEASURED. Two enumerable inventories, screened separately:
//   • COLOUR. The basic colour terms are a genuinely closed set in any language
//     (Berlin & Kay's eleven, plus the two Norwegian brightness words). The
//     corpus has rød, blå, grønn, gul, svart, hvit, brun, grå, lys, mørk — ten,
//     all at u8 — and is missing rosa, oransje and lilla, which are three of the
//     eleven basic terms, not decoration. A learner cannot describe a jacket.
//   • MATERIAL. u46 teaches tre, metall, plast, glass, papir, stål, gummi,
//     betong, ull, bomull, silke, leire. Absent: jern, gull, sølv, kobber,
//     stein, sand, lær, skinn. The precious and the structural metals are the
//     whole missing half, and gull and sølv are also how Norwegian talks about
//     medals, weddings and prices.
//
// Lesson 2's shape words are the smaller find: u46 teaches en sirkel, ei kule
// and ei flate; en trekant, rund, firkantet and spiss were absent, so a learner
// had the nouns for shapes and no adjectives to apply them with.
//
// ⚠️ MASS NOUNS ARE TAUGHT BARE (unit1.js §1b), which is most of this unit:
// gull, sølv, jern, kobber, sand, lær and skinn are all mass here, matching how
// u46 already teaches stål, gummi and betong bare. `en stein` IS countable and
// takes its article.
//
// Conventions per no/unit1.js. Readings are hand-written ASCII folds.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT124 = {
  id: "no-u124",
  lang: "no",
  title: "Farger og materialer · 2",
  order: 124,
  stage: "b2",
  lessons: [
    {
      id: "no-u124l1",
      unit: 124,
      lesson: 1,
      title: "Flere farger",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the colours the course had left out, and describe clothes properly.",
      items: [
        { id: "no-u124l1-rosa", type: "vocab", front: "rosa", reading: "rosa", meaning: "pink", example: { jp: "Hun kjøpte ei rosa skjorte i går.", en: "She bought a pink shirt yesterday." }, accept: ["rose-coloured"], drill: { jp: "Hun kjøpte ei rosa skjorte", en: "She bought a pink shirt" }, hint: "⚠️ Never changes form — no -t, no -e. Et rosa hus, rosa sko. The colour adjectives borrowed from other languages all behave this way." },
        { id: "no-u124l1-oransje", type: "vocab", front: "oransje", reading: "oransje", meaning: "orange (colour)", example: { jp: "Himmelen ble oransje like før sola gikk ned.", en: "The sky turned orange just before the sun went down." }, accept: ["orange-coloured"], drill: { jp: "Himmelen ble oransje om kvelden", en: "The sky turned orange in the evening" }, hint: "Said o-RAN-sje, with the broad sh of sj. Invariable like rosa. The fruit is en appelsin, a completely different word." },
        { id: "no-u124l1-lilla", type: "vocab", front: "lilla", reading: "lilla", meaning: "purple", example: { jp: "Blomstene i hagen er lilla og hvite.", en: "The flowers in the garden are purple and white." }, accept: ["violet", "lilac"], drill: { jp: "Blomstene i hagen er lilla", en: "The flowers in the garden are purple" }, hint: "Invariable, like rosa and oransje. Covers everything English splits into purple, violet and lilac." },
        { id: "no-u124l1-beige", type: "vocab", front: "beige", reading: "beige", meaning: "sandy off-white", example: { jp: "Veggene i stua er beige og litt kjedelige.", en: "The walls in the living room are beige and a little dull." }, accept: ["beige", "off-white", "sand-coloured"], drill: { jp: "Veggene i stua er beige", en: "The walls in the living room are beige" }, hint: "Kept its French sound: BESJ, one syllable. Invariable, like the rest of this lesson." },
        { id: "no-u124l1-turkis", type: "vocab", front: "turkis", reading: "turkis", meaning: "turquoise", example: { jp: "Vannet var turkis og helt klart den dagen.", en: "The water was turquoise and completely clear that day." }, accept: ["teal", "aqua"], drill: { jp: "Vannet var turkis og klart", en: "The water was turquoise and clear" }, hint: "tur-KIS. Unlike the others it CAN take -e in the plural — turkise sko — but leaving it unchanged is also accepted." },
        { id: "no-u124l1-gyllen", type: "vocab", front: "gyllen", reading: "gyllen", meaning: "golden", example: { jp: "Håret hennes var gyllent i lyset fra sola.", en: "Her hair was golden in the light from the sun." }, accept: ["gold-coloured", "gilded"], drill: { jp: "Sola var gyllen i dag", en: "The sun was golden today" }, hint: "⚠️ A REAL adjective, unlike the rest of the lesson: neuter gyllent, plural gylne. It describes the colour; gull (lesson 3) is the metal." },
      ],
    },
    {
      id: "no-u124l2",
      unit: 124,
      lesson: 2,
      title: "Former og kanter",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the shape of a thing — round, square, pointed — and name its edge.",
      items: [
        { id: "no-u124l2-entrekant", type: "vocab", front: "en trekant", reading: "entrekant", meaning: "triangle", example: { jp: "Skiltet har form som en trekant.", en: "The sign has the shape of a triangle." }, accept: ["a triangle", "three-corner"], drill: { jp: "Skiltet har form som en trekant", en: "The sign has the shape of a triangle" }, hint: "tre + kant, three-corner — transparent in a way the Greek-derived English word is not. En firkant is the same idea with four." },
        { id: "no-u124l2-rund", type: "vocab", front: "rund", reading: "rund", meaning: "round (shape)", example: { jp: "Bordet på kjøkkenet er rundt og lite.", en: "The table in the kitchen is round and small." }, accept: ["circular", "rounded"], drill: { jp: "Denne kaka er rund og fin", en: "This cake is round and lovely" }, hint: "Neuter rundt, plural runde. ⚠️ Do not confuse it with the preposition rundt (u45), around — same spelling in the neuter, different word." },
        { id: "no-u124l2-firkantet", type: "vocab", front: "firkantet", reading: "firkantet", meaning: "square-shaped", example: { jp: "Vinduet er firkantet og ganske stort.", en: "The window is square and quite large." }, accept: ["square", "rectangular", "four-cornered"], drill: { jp: "Vinduet er firkantet og stort", en: "The window is square and large" }, hint: "The adjective from en firkant. It covers both squares and rectangles — Norwegian does not insist on the difference in ordinary speech." },
        { id: "no-u124l2-spiss", type: "vocab", front: "spiss", reading: "spiss", meaning: "pointed", example: { jp: "Kniven er altfor spiss for barn.", en: "The knife is far too pointed for children." }, accept: ["sharp (tip)", "pointy", "tapered"], drill: { jp: "Kniven er altfor spiss her", en: "The knife is far too pointed here" }, hint: "⚠️ Sharp at the TIP. For a sharp EDGE Norwegian says skarp — a knife can be spiss without being skarp. En spiss is also the noun, the point itself." },
        { id: "no-u124l2-enkant", type: "vocab", front: "en kant", reading: "enkant", meaning: "edge", example: { jp: "Ikke sett glasset på kanten av bordet.", en: "Do not put the glass on the edge of the table." }, accept: ["an edge", "border", "rim"], drill: { jp: "Ikke sett glasset på en kant", en: "Do not put the glass on an edge" }, hint: "The word inside trekant and firkant. På kanten also means 'borderline' about behaviour — det var litt på kanten." },
        { id: "no-u124l2-bred", type: "vocab", front: "bred", reading: "bred", meaning: "wide", example: { jp: "Elva er bred og rolig på dette stedet.", en: "The river is wide and calm at this spot." }, accept: ["broad", "wide across"], drill: { jp: "Elva er bred og rolig her", en: "The river is wide and calm here" }, hint: "Neuter breit or bredt, plural breie or brede — both spellings are correct Bokmål. Its opposite smal, narrow, is not taught; use ikke bred or trang." },
      ],
    },
    {
      id: "no-u124l3",
      unit: 124,
      lesson: 3,
      title: "Metall og stein",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what a thing is made of — iron, gold, silver, copper, stone.",
      items: [
        { id: "no-u124l3-jern", type: "vocab", front: "jern", reading: "jern", meaning: "iron (metal)", example: { jp: "Senga er laget av jern og veier mye.", en: "The bed is made of iron and weighs a lot." }, accept: ["the iron"], drill: { jp: "Senga er laget av jern", en: "The bed is made of iron" }, hint: "A MASS noun, taught bare like stål and betong in u46. The j is a y: YAERN. Also the mineral in your blood — jern i maten." },
        { id: "no-u124l3-gull", type: "vocab", front: "gull", reading: "gull", meaning: "gold (metal)", example: { jp: "Klokka er av gull og var svært dyr.", en: "The watch is made of gold and was very expensive." }, accept: ["the gold"], drill: { jp: "Klokka er av gull", en: "The watch is made of gold" }, hint: "Mass noun, definite gullet. Also the medal — hun tok gull — and a term of affection for a child: gullet mitt." },
        { id: "no-u124l3-solv", type: "vocab", front: "sølv", reading: "solv", meaning: "silver (metal)", example: { jp: "Bestemor har skjeer av sølv i skapet.", en: "Grandmother has spoons made of silver in the cupboard." }, accept: ["the silver"], drill: { jp: "Bestemor har skjeer av sølv", en: "Grandmother has spoons made of silver" }, hint: "Mass noun, definite sølvet. The ø folds to o by hand in the answer key — solv. The second-place medal, as in English." },
        { id: "no-u124l3-kobber", type: "vocab", front: "kobber", reading: "kobber", meaning: "copper", example: { jp: "Taket på kirka er av kobber og har blitt grønt.", en: "The roof of the church is copper and has turned green." }, accept: ["the copper"], drill: { jp: "Taket på kirka er av kobber", en: "The roof of the church is copper" }, hint: "Mass noun, definite kobberet. Norwegian church and public roofs are copper and go green with age — the standard example of the word." },
        { id: "no-u124l3-enstein", type: "vocab", front: "en stein", reading: "enstein", meaning: "stone", example: { jp: "Han satte seg på en stein ved vannet.", en: "He sat down on a stone by the water." }, accept: ["a rock", "a stone", "pebble"], drill: { jp: "Han satte seg på en stein", en: "He sat down on a stone" }, hint: "⚠️ COUNTABLE, so unlike the rest of the lesson it takes its article. Also the material — et hus av stein — where it goes bare." },
        { id: "no-u124l3-sand", type: "vocab", front: "sand", reading: "sand", meaning: "sand", example: { jp: "Det er fin sand på stranda her.", en: "There is fine sand on the beach here." }, accept: ["the sand"], drill: { jp: "Det er fin sand på stranda", en: "There is fine sand on the beach" }, hint: "Mass noun, definite sanden. The d is silent: SANN, exactly like the d in god and med." },
      ],
    },
    {
      id: "no-u124l4",
      unit: 124,
      lesson: 4,
      title: "Andre materialer",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name leather, hide, wax and the rest of the everyday materials.",
      items: [
        { id: "no-u124l4-laer", type: "vocab", front: "lær", reading: "laer", meaning: "leather", example: { jp: "Jakka er av lær og tåler regn godt.", en: "The jacket is leather and stands up to rain well." }, accept: ["the leather"], drill: { jp: "Jakka er av lær", en: "The jacket is made of leather" }, hint: "Mass noun, definite læret. æ is the long a of \"cat\": LAER. ⚠️ One letter from å lære (u1) — the verb has an e on the end." },
        { id: "no-u124l4-etskinn", type: "vocab", front: "et skinn", reading: "etskinn", meaning: "hide (animal skin)", example: { jp: "Det lå et skinn på gulvet.", en: "There was a hide lying on the floor." }, accept: ["a skin", "pelt", "fur"], drill: { jp: "Det lå et skinn på gulvet", en: "There was a hide lying on the floor" }, hint: "The untanned skin, where lær is what it becomes. ⚠️ Also a verb meaning to shine — sola skinner — and the two are unrelated." },
        { id: "no-u124l4-envoks", type: "vocab", front: "en voks", reading: "envoks", meaning: "wax", example: { jp: "Han brukte en voks på skiene før turen.", en: "He used a wax on the skis before the trip." }, accept: ["ski wax", "a wax"], drill: { jp: "Han brukte en voks på skiene", en: "He used a wax on the skis" }, hint: "⚠️ Two different words: this countable one is ski wax, of which Norwegians own many; the mass noun voks is what a candle is made of." },
        { id: "no-u124l4-eipapp", type: "vocab", front: "ei papp", reading: "eipapp", meaning: "cardboard", example: { jp: "Vi pakket bøkene i papp.", en: "We packed the books in cardboard." }, accept: ["card", "carton", "the cardboard"], drill: { jp: "Vi pakket bøkene i ei papp", en: "We packed the books in a piece of cardboard" }, hint: "The heavy cousin of et papir (u23). Feminine here: pappa — ⚠️ which is also the word for dad, and only context separates them." },
        { id: "no-u124l4-eifilt", type: "vocab", front: "ei filt", reading: "eifilt", meaning: "felt (fabric)", example: { jp: "Hun sydde ei lue av filt til barnet.", en: "She sewed a hat out of felt for the child." }, accept: ["the felt"], drill: { jp: "Lua er laget av ei filt", en: "The hat is made of a felt" }, hint: "Made by pressing ull (u15) rather than weaving it. Feminine: filta." },
        { id: "no-u124l4-etlerret", type: "vocab", front: "et lerret", reading: "etlerret", meaning: "canvas", example: { jp: "Bildet er malt på et stort lerret.", en: "The picture is painted on a large canvas." }, accept: ["a canvas", "linen", "screen"], drill: { jp: "Bildet er malt på et lerret", en: "The picture is painted on a canvas" }, hint: "Both the painter's canvas and a cinema screen — på det store lerretet means on the big screen." },
      ],
    },
  ],
};
