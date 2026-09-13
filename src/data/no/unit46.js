// NO Unit 46 — Form og materiale ("Shape and material") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 7 (A2)"; retitled per CLAUDE.md → "No front
// language". A1 u10 (block 2) taught the dimension adjectives — stor, liten,
// lang, kort, høy, lav, tung, lett — which describe how BIG a thing is. Nothing
// in A1 describes what SHAPE it is, what it is MADE of, or what it feels like to
// touch. That is this unit, plus the six verbs for changing a thing's shape.
//
// Conventions are unit1.js §1–§8 and bind every unit. Bokmål, not Nynorsk.
//
// SIX MASS NOUNS IN ONE LESSON, taught bare under §1(b): metall, plast, gummi,
// stål, betong, leire (l2). This is the largest run of article-less fronts in
// the block, and it is correct rather than lazy — a material is exactly the case
// §1(b) exists for, the same class as vann, melk, ull, såpe and is. Gender for
// each is in its hint, because the definite is where the gender finally shows.
//
// FIRST FEMININE OF THE UNIT is `ei kule` (l1) and it carries the en-/ei-
// recognition note §1 requires.
//
// ø IS WRITTEN o IN `reading` (§3): `å bøye` → "aboye". `stål` folds å to a on
// its own: "stal".
//
// ⚠ ADJECTIVE AGREEMENT IS NOT DERIVED (§8b; u14 owns it). The six adjectives in
// l3 are given in the base form and every example keeps a masculine or feminine
// subject. Where a neuter subject was the natural sentence, the sentence was
// rewritten rather than the adjective inflected — `et glass er hardt` would have
// forced a -t the learner has not been taught to build.
//
// ⚠ RESERVE LIST — screened against A1's 480, this block's 240, and the sibling
// A2 branches. Every collision resolves against this block; swap, don't rebuild.
//   l1 former:      en trekant · ei ramme · et punkt
//   l2 materialer:  et papp · ei tekstil · et sement
//   l3 overflate:   ru · stiv · seig
//   l4 å forme:     å presse · å strekke · å file
//
// SCOPE: examples and drills use A1's 480 plus u41–u45 plus this unit's earlier
// cards. Nothing leans on u21–u40, and nothing uses `som`, `om`, `hele`, `hver`,
// `ute`, `ved`, `der`, `for`, `mot`, `gjennom`, `mens` or `tid`.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT46 = {
  id: "no-u46",
  lang: "no",
  title: "Form og materiale",
  order: 46,
  stage: "a2",
  lessons: [
    // Lesson 1: shapes.
    {
      id: "no-u46l1",
      unit: 46,
      lesson: 1,
      title: "Shapes",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name a shape — form, kule, firkant, sirkel, linje, flate — and say what shape a thing has.",
      items: [
        { id: "no-u46l1-enform", type: "vocab", front: "en form", reading: "enform", meaning: "shape", example: { jp: "En form kan være stor eller liten.", en: "A shape can be big or small." }, drill: { jp: "Et brød har en form", en: "A loaf has a shape" }, accept: ["a form", "a mould", "a shape"], hint: "FORM. Masculine: definite formen, plural former. The shape a thing has, and also the tin you bake it in — ei kakeform. Å være i form is to be fit, which is the sense you meet in unit 44's world." },
        { id: "no-u46l1-eikule", type: "vocab", front: "ei kule", reading: "eikule", meaning: "ball (a sphere)", example: { jp: "Ei kule er lett å kaste, og barna liker den.", en: "A ball is easy to throw, and the children like it." }, drill: { jp: "Det ligger ei kule på gulvet", en: "There is a ball lying on the floor" }, accept: ["a sphere", "a ball", "bullet"], hint: "KUE-le. Feminine: definite kula, plural kuler. You will also see ei kule written en kule / kulen; Bokmål allows both, and this course writes ei because ei predicts the -a definite. A geometric sphere, a marble, and a bullet — all the same word. En ball from A1 unit 19 is the one you play with." },
        { id: "no-u46l1-enfirkant", type: "vocab", front: "en firkant", reading: "enfirkant", meaning: "square (the shape)", example: { jp: "En firkant har fire hjørner, og et vindu har ofte en firkant.", en: "A square has four corners, and a window often has a square." }, drill: { jp: "Et vindu har en firkant", en: "A window has a square" }, accept: ["a square", "rectangle"], hint: "FEER-kant. Masculine: definite firkanten, plural firkanter. Fire plus kant, four-edge — Norwegian builds its geometry out of ordinary words, where English reaches for Latin." },
        { id: "no-u46l1-ensirkel", type: "vocab", front: "en sirkel", reading: "ensirkel", meaning: "circle", example: { jp: "Vi står i en sirkel når vi synger sammen.", en: "We stand in a circle when we sing together." }, drill: { jp: "Barna går i en sirkel", en: "The children walk in a circle" }, accept: ["a ring", "a circle"], hint: "SEER-kel. Masculine: definite sirkelen, and the plural drops the e: sirkler. One of the few shape words Norwegian did borrow from Latin." },
        { id: "no-u46l1-eilinje", type: "vocab", front: "ei linje", reading: "eilinje", meaning: "line", example: { jp: "Vi skriver ei linje på et papir før vi begynner.", en: "We write a line on a piece of paper before we begin." }, drill: { jp: "Det er ei linje på kartet", en: "There is a line on the map" }, accept: ["a row", "a route", "a line"], hint: "LIN-je — lj is an l plus a y sound, as in medalje. Feminine: definite linja, plural linjer. A drawn line, a bus route, and a school stream are all ei linje." },
        { id: "no-u46l1-eiflate", type: "vocab", front: "ei flate", reading: "eiflate", meaning: "surface", example: { jp: "Ei flate er glatt hvis vi vasker den godt.", en: "A surface is smooth if we wash it well." }, drill: { jp: "Det er vann på ei flate", en: "There is water on a surface" }, accept: ["an area", "a plane", "a face"], hint: "FLAH-te. Feminine: definite flata, plural flater. The outside of a thing — the surface you touch, where ei slette from unit 45 is flat ground you walk on." },
      ],
    },
    // Lesson 2: materials. Six bare mass nouns; the gender lives in the hint.
    {
      id: "no-u46l2",
      unit: 46,
      lesson: 2,
      title: "Materials",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what a thing is made of — metall, plast, gummi, stål, betong, leire — using av.",
      items: [
        { id: "no-u46l2-metall", type: "vocab", front: "metall", reading: "metall", meaning: "metal", example: { jp: "En kniv er av metall, og derfor er den hard.", en: "A knife is of metal, and that is why it is hard." }, drill: { jp: "En sykkel er av metall", en: "A bicycle is of metal" }, accept: ["the metal"], hint: "me-TALL, stress at the end. A mass noun, so no article on the front. Neuter: definite metallet. Note av — Norwegian says what a thing is made OF with av, exactly as unit 42 did with bomull and silke." },
        { id: "no-u46l2-plast", type: "vocab", front: "plast", reading: "plast", meaning: "plastic", example: { jp: "En stol av plast er lett, men den er ikke fin.", en: "A chair of plastic is light, but it is not nice." }, drill: { jp: "Ei kule av plast er lett", en: "A ball of plastic is light" }, accept: ["the plastic"], hint: "PLAST. A mass noun: no article. Masculine: definite plasten. Norway recycles it obsessively — you will meet the word on every bin." },
        { id: "no-u46l2-gummi", type: "vocab", front: "gummi", reading: "gummi", meaning: "rubber", example: { jp: "En støvel er av gummi fordi den skal være tørr.", en: "A boot is of rubber because it has to be dry." }, drill: { jp: "En støvel av gummi er våt", en: "A boot of rubber is wet" }, accept: ["the rubber"], hint: "GUM-mi, hard g. A mass noun: no article. Masculine: definite gummien. En gummistøvel (støvel is masculine, u42) is the wellington every Norwegian child owns." },
        { id: "no-u46l2-stal", type: "vocab", front: "stål", reading: "stal", meaning: "steel", example: { jp: "Ei gryte av stål er tung, men den er god å bruke.", en: "A pot of steel is heavy, but it is good to use." }, drill: { jp: "En kniv av stål er skarp", en: "A knife of steel is sharp" }, accept: ["the steel"], hint: "STAWL, with the rounded å — and the å folds to a on its own, so the reading is stal. A mass noun: no article. Neuter: definite stålet." },
        { id: "no-u46l2-betong", type: "vocab", front: "betong", reading: "betong", meaning: "concrete", example: { jp: "Ei bru er av betong, og derfor er den tung.", en: "A bridge is of concrete, and that is why it is heavy." }, drill: { jp: "Ei bru av betong er hard", en: "A bridge of concrete is hard" }, accept: ["the concrete"], hint: "be-TONG, stress at the end and the g barely sounded. A mass noun: no article. Masculine: definite betongen. From French béton, like so much building vocabulary." },
        { id: "no-u46l2-leire", type: "vocab", front: "leire", reading: "leire", meaning: "clay", example: { jp: "Vi lager ei skål av leire fordi det er hyggelig.", en: "We make a bowl of clay because it is nice." }, drill: { jp: "Ei skål av leire er fin", en: "A bowl of clay is nice" }, accept: ["the clay"], hint: "LAY-re. A mass noun: no article. Feminine: definite leira. Norwegian clay is famous for the wrong reason — kvikkleire, quick clay, is what occasionally takes a hillside with it." },
      ],
    },
    // Lesson 3: what a thing feels like. Base-form adjectives, non-neuter
    // subjects throughout — see the header note on §8b.
    {
      id: "no-u46l3",
      unit: 46,
      lesson: 3,
      title: "Surfaces",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what a thing feels like — glatt, myk, hard, skarp, hul, fast — and warn somebody about it.",
      items: [
        { id: "no-u46l3-glatt", type: "vocab", front: "glatt", reading: "glatt", meaning: "slippery", example: { jp: "En vei blir glatt når det er is på den.", en: "A road gets slippery when there is ice on it." }, drill: { jp: "Ei flate av stål er glatt", en: "A surface of steel is slippery" }, accept: ["smooth", "slick"], hint: "GLATT, hard g. Both smooth to the touch and dangerously slippery — Norwegian does not separate them, and on a January pavement the two senses are the same thing." },
        { id: "no-u46l3-myk", type: "vocab", front: "myk", reading: "myk", meaning: "soft", example: { jp: "Ei seng er myk, og derfor sover barna godt.", en: "A bed is soft, and that is why the children sleep well." }, drill: { jp: "En genser av ull er myk", en: "A jumper of wool is soft" }, accept: ["tender", "gentle", "supple"], hint: "MUEK. Soft to touch, and of a person, gentle. Neuter mykt. The opposite is hard, the next card but one." },
        { id: "no-u46l3-hard", type: "vocab", front: "hard", reading: "hard", meaning: "hard", example: { jp: "En stol av tre er hard, men den er billig.", en: "A chair of wood is hard, but it is cheap." }, drill: { jp: "Ei kule av metall er hard", en: "A ball of metal is hard" }, accept: ["tough", "harsh", "firm"], hint: "HAHR — the d is silent. Hard to the touch, and hard on a person: en hard vinter. Neuter hardt, where the d finally gets said." },
        { id: "no-u46l3-skarp", type: "vocab", front: "skarp", reading: "skarp", meaning: "sharp", example: { jp: "En kniv er skarp, og derfor må barna være klare.", en: "A knife is sharp, and that is why the children have to be careful." }, drill: { jp: "Ei skøyte er skarp", en: "A skate is sharp" }, accept: ["keen", "acute", "shrill"], hint: "SKARP, hard sk before a. An edge, a corner, a sound, a mind — all skarp. Neuter skarpt." },
        { id: "no-u46l3-hul", type: "vocab", front: "hul", reading: "hul", meaning: "hollow", example: { jp: "Ei kule av plast er hul, men ei kule av metall er det ikke.", en: "A ball of plastic is hollow, but a ball of metal is not." }, drill: { jp: "En ball er ofte hul", en: "A ball is often hollow" }, accept: ["empty inside", "concave"], hint: "HUEL. Empty inside. Et hull, with two l's, is the HOLE itself — one letter apart, and Norwegians hear the difference in the vowel length rather than the consonant." },
        { id: "no-u46l3-fast", type: "vocab", front: "fast", reading: "fast", meaning: "firm", example: { jp: "En knapp må være fast, eller den blir borte.", en: "A button has to be firm, or it will be lost." }, drill: { jp: "En knapp er fast på skjorta", en: "A button is firm on the shirt" }, accept: ["solid", "fixed", "steady", "permanent"], hint: "FAST. Firm, fixed, and permanent all at once: en fast jobb is a permanent job, and å bo fast et sted is to live somewhere for good. Neuter fast, unchanged, because it already ends in -t." },
      ],
    },
    // Lesson 4: changing a thing's shape. Six å-verbs, six å-frames.
    {
      id: "no-u46l4",
      unit: 46,
      lesson: 4,
      title: "Shaping things",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you do to a material — bend, break, cut, glue, build, cover.",
      items: [
        { id: "no-u46l4-aboye", type: "vocab", front: "å bøye", reading: "aboye", meaning: "to bend", example: { jp: "Vi bøyer et metall hvis det er tynt.", en: "We bend a metal if it is thin." }, drill: { jp: "Det er lett å bøye plast", en: "It is easy to bend plastic" }, accept: ["bend", "to bow", "bow", "to inflect"], hint: "BOY-e, present bøyer, hand-folded to aboye. To bend a physical thing — and, in a grammar book, to inflect a word: å bøye et verb is exactly what these units keep asking you to do." },
        { id: "no-u46l4-abrekke", type: "vocab", front: "å brekke", reading: "abrekke", meaning: "to break", example: { jp: "Barnet brekker en penn fordi den er tynn.", en: "The child breaks a pen because it is thin." }, drill: { jp: "Det er lett å brekke et bein", en: "It is easy to break a leg" }, accept: ["break", "to snap", "snap", "to fracture"], hint: "BREK-ke, present brekker. Of a long thing that snaps — a bone, a stick, a board. Å knuse is what glass does instead, and Norwegian keeps the two apart." },
        { id: "no-u46l4-aklippe", type: "vocab", front: "å klippe", reading: "aklippe", meaning: "to cut (with scissors)", example: { jp: "Vi klipper et stoff når vi skal sy ei bluse.", en: "We cut a fabric when we are going to sew a blouse." }, drill: { jp: "Det er lett å klippe et papir", en: "It is easy to cut a piece of paper" }, accept: ["to cut", "to clip", "to trim"], hint: "KLIP-pe, present klipper. Specifically with scissors, where å skjære from unit 41 is with a blade. En frisør from A1 unit 18 klipper hair." },
        { id: "no-u46l4-alime", type: "vocab", front: "å lime", reading: "alime", meaning: "to glue", example: { jp: "Vi limer to bilder sammen når vi pynter et rom.", en: "We glue two pictures together when we decorate a room." }, drill: { jp: "Det er lett å lime et papir", en: "It is easy to glue a piece of paper" }, accept: ["glue", "to stick", "stick", "to paste"], hint: "LEE-me, present limer. Et lim is the glue itself. Å lime sammen is to glue together, and it is the ordinary word a child uses at school." },
        { id: "no-u46l4-abygge", type: "vocab", front: "å bygge", reading: "abygge", meaning: "to build", example: { jp: "De bygger ei bru av betong fordi elva er stor.", en: "They build a bridge of concrete because the river is big." }, drill: { jp: "Det er tungt å bygge et hus", en: "It is hard to build a house" }, accept: ["build", "to construct", "construct", "to erect"], hint: "BUEG-ge, present bygger. En bygning is a building, and ei bygd from unit 45 is built on the same root — a place that has been built in." },
        { id: "no-u46l4-adekke", type: "vocab", front: "å dekke", reading: "adekke", meaning: "to cover", example: { jp: "Vi dekker et bord før gjestene kommer.", en: "We set a table before the guests come." }, drill: { jp: "Det er lett å dekke ei flate", en: "It is easy to cover a surface" }, accept: ["cover", "to set a table", "to lay", "to spread over"], hint: "DEK-ke, present dekker. To cover something — and å dekke bordet is to lay the table, which is the sense you will hear most often at home. Et dekke is a covering or a road surface." },
      ],
    },
  ],
};
