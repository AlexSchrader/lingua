// NO Unit 41 — Mat og drikke · 2 ("Food and drink · 2") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 2 (A2)"; retitled per CLAUDE.md → "No front
// language". A1 u6 taught the table and the six foods a beginner names first
// (et brød, en ost, ei pølse, en fisk, ei kake, et eple, å spise, å drikke,
// å lage, å smake, sulten, tørst). This unit takes what a learner still cannot
// do: name raw ingredients, order a course, cook, and say how a thing tastes.
// The `· 2` continues the A1 title, which is the house convention for a unit
// that extends an earlier one.
//
// Conventions are unit1.js §1–§8 and bind every unit. Bokmål, not Nynorsk.
//
// MASS NOUNS, taught bare under §1(b): `kjøtt` (l1), `salt` (l1), `sukker` (l1).
// Gender in the hint. This is the same class as block 1's vann and melk, and it
// is why l1 carries three article-less fronts in a row.
//
// FIRST FEMININE OF THE UNIT is `ei gulrot` (l1) and it carries the en-/ei-
// recognition note §1 requires.
//
// ø IS WRITTEN o IN `reading` (§3): `en løk` → "enlok", `å skjære` → "askjaere"
// (æ folds on its own). The engine folds ø now, so both spellings pass, but the
// corpus keeps authoring the o.
//
// ⚠ RESERVE LIST — screened, in scope at u41, and NOT taught anywhere in A1 or
// in the sibling A2 branches as of this writing. This block holds the highest
// slots, so every collision resolves against it; if a merge seat has to drop a
// front here, swap a reserve in rather than re-authoring the lesson.
//   l1 råvarer:   et smør · ei ert · et krydder
//   l2 måltider:  en forrett · ei skive · en porsjon
//   l3 å lage:    å helle · å røre · å skrelle
//   l4 smak:      salig? no — `sterk` is A1 u10 · reserves: rå · mør · syrlig
//
// SCOPE: every example and drill here is built from A1's 480 plus this unit's
// own earlier cards. Nothing leans on u21–u40, which are unauthored stubs in
// this tree — so nothing here can rot if a sibling block changes.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT41 = {
  id: "no-u41",
  lang: "no",
  title: "Mat og drikke · 2",
  order: 41,
  stage: "a2",
  lessons: [
    // Lesson 1: what food is made of, before lesson 3 cooks it.
    {
      id: "no-u41l1",
      unit: 41,
      lesson: 1,
      title: "Råvarer",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the raw ingredients a Norwegian kitchen starts from — kjøtt, potet, gulrot, løk, salt, sukker — and say what you buy and what you put in.",
      items: [
        { id: "no-u41l1-kjott", type: "vocab", front: "kjøtt", reading: "kjott", meaning: "meat", example: { jp: "Erling spiser kjøtt når han er sulten.", en: "Erling eats meat when he is hungry." }, drill: { jp: "Vi kjøper kjøtt i butikken", en: "We buy meat in the shop" }, accept: ["the meat"], hint: "HYUTT — the thin kj of unit 1, the same sound as in kjøpe and kjøkken. A mass noun, so the front carries no article, like vann and melk. Neuter: definite kjøttet." },
        { id: "no-u41l1-enpotet", type: "vocab", front: "en potet", reading: "enpotet", meaning: "potato", example: { jp: "Anna spiser poteter fordi hun er sulten.", en: "Anna eats potatoes because she is hungry." }, drill: { jp: "Det ligger en potet på bordet", en: "There is a potato on the table" }, accept: ["a potato"], hint: "po-TEHT, stress at the end. Masculine: definite poteten, plural poteter. The Norwegian staple — a middag without poteter is barely a middag." },
        { id: "no-u41l1-eigulrot", type: "vocab", front: "ei gulrot", reading: "eigulrot", meaning: "carrot", example: { jp: "Kari spiser ei gulrot når hun er sulten.", en: "Kari eats a carrot when she is hungry." }, drill: { jp: "Barna liker ei gulrot", en: "The children like a carrot" }, accept: ["a carrot"], hint: "GUEL-root — gul, yellow, plus rot, root, welded together, though the thing is orange. Feminine: definite gulrota, plural gulrøtter. You will also see ei gulrot written en gulrot / gulroten; Bokmål allows both and print uses the en form freely. This course writes ei, because ei is what tells you the definite ends in -a." },
        { id: "no-u41l1-enlok", type: "vocab", front: "en løk", reading: "enlok", meaning: "onion", example: { jp: "En løk er billig, men den er veldig sterk.", en: "An onion is cheap, but it is very strong." }, drill: { jp: "Det ligger en løk i skapet", en: "There is an onion in the cupboard" }, accept: ["an onion"], hint: "LURK, with the ø of unit 1 — and a hand-folded reading, enlok. Masculine: definite løken, plural løker. En hvitløk is garlic: hvit plus løk, a white onion." },
        { id: "no-u41l1-salt", type: "vocab", front: "salt", reading: "salt", meaning: "salt", example: { jp: "Jeg bruker salt når jeg lager middag.", en: "I use salt when I make dinner." }, drill: { jp: "Vi bruker mye salt", en: "We use a lot of salt" }, accept: ["the salt"], hint: "SALT. A mass noun, so no article on the front. Neuter: definite saltet. The same word is an adjective meaning salty — en salt fisk — so context does the work, as it does with dyr in unit 7." },
        { id: "no-u41l1-sukker", type: "vocab", front: "sukker", reading: "sukker", meaning: "sugar", example: { jp: "Kari liker sukker i kaffen, men jeg gjør ikke det.", en: "Kari likes sugar in her coffee, but I do not." }, drill: { jp: "Det er sukker i kaka", en: "There is sugar in the cake" }, accept: ["the sugar"], hint: "SUEK-ker. A mass noun: no article. Neuter: definite sukkeret. Note i kaffen and i kaka — Norwegian uses the definite where English says \"her coffee\"." },
      ],
    },
    // Lesson 2: the shape of a meal out. `en rett` is the homograph flagged
    // in the header of u45, where `rett` also means "straight".
    {
      id: "no-u41l2",
      unit: 41,
      lesson: 2,
      title: "Måltider og retter",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Order and describe a meal — lunsj, suppe, salat, dessert — say what dish you want and read a menu.",
      items: [
        { id: "no-u41l2-enlunsj", type: "vocab", front: "en lunsj", reading: "enlunsj", meaning: "lunch", example: { jp: "Vi spiser en lunsj på kontoret når vi jobber.", en: "We eat lunch at the office when we are working." }, drill: { jp: "Vi spiser en lunsj sammen", en: "We eat lunch together" }, accept: ["a lunch", "luncheon"], hint: "LUENSH — sj is the broad sh of sjø. Masculine: definite lunsjen. A Norwegian lunsj is famously small and famously early: bread, at eleven." },
        { id: "no-u41l2-eisuppe", type: "vocab", front: "ei suppe", reading: "eisuppe", meaning: "soup", example: { jp: "Jeg lager ei suppe fordi barna er sultne.", en: "I am making a soup because the children are hungry." }, drill: { jp: "Vi lager ei suppe sammen", en: "We make a soup together" }, accept: ["a soup", "broth"], hint: "SUEP-pe. Feminine: definite suppa, plural supper. Ei fiskesuppe is the one you meet on the coast — fisk plus suppe." },
        { id: "no-u41l2-ensalat", type: "vocab", front: "en salat", reading: "ensalat", meaning: "salad", example: { jp: "Erling spiser en salat, men han er sulten.", en: "Erling eats a salad, but he is hungry." }, drill: { jp: "Erling lager en salat til middag", en: "Erling makes a salad for dinner" }, accept: ["a salad", "lettuce"], hint: "sa-LAHT, stress at the end. Masculine: definite salaten. It is both the dish and the leaf, exactly as in English." },
        { id: "no-u41l2-endessert", type: "vocab", front: "en dessert", reading: "endessert", meaning: "dessert", example: { jp: "Vi spiser en dessert etter middagen hvis barna vil ha det.", en: "We eat a dessert after dinner if the children want it." }, drill: { jp: "Kari lager en dessert med sukker", en: "Kari makes a dessert with sugar" }, accept: ["a dessert", "pudding", "sweet"], hint: "de-SÆR, French at the end and the t is silent. Masculine: definite desserten. Ei kake counts as one; so, at a Norwegian table, does a bowl of berries." },
        { id: "no-u41l2-enrett", type: "vocab", front: "en rett", reading: "enrett", meaning: "dish", example: { jp: "Dette er en rett, og barna liker den.", en: "This is a dish, and the children like it." }, drill: { jp: "Vi lager en rett med kjøtt", en: "We make a dish with meat" }, accept: ["a course", "a dish", "meal"], hint: "RETT. Masculine: definite retten, plural retter. A dish in the sense of a prepared course, never the plate — that is en tallerken from unit 16. The same spelling is also an adjective, \"straight\", and a noun meaning a right or a law court." },
        { id: "no-u41l2-enmeny", type: "vocab", front: "en meny", reading: "enmeny", meaning: "menu", example: { jp: "Jeg leser en meny før vi spiser.", en: "I read a menu before we eat." }, drill: { jp: "Det ligger en meny på bordet", en: "There is a menu on the table" }, accept: ["a menu", "bill of fare"], hint: "me-NUE, stress at the end. Masculine: definite menyen, plural menyer. Also the menu on a screen — Norwegian borrowed the word twice for the same reason English did." },
      ],
    },
    // Lesson 3: the six verbs a recipe is written in.
    {
      id: "no-u41l3",
      unit: 41,
      lesson: 3,
      title: "Å lage mat",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Follow a recipe — boil, fry, bake, cut, mix and serve — and say what you are doing to the food.",
      items: [
        { id: "no-u41l3-akoke", type: "vocab", front: "å koke", reading: "akoke", meaning: "to boil", example: { jp: "Jeg koker poteter når jeg lager middag.", en: "I boil potatoes when I make dinner." }, accept: ["boil", "to cook", "cook"], drill: { jp: "Det er lett å koke en potet", en: "It is easy to boil a potato" }, hint: "KOO-ke, present koker. In water, over heat. En kokk from unit 18 is the person who does it — the job is named from this verb." },
        { id: "no-u41l3-asteke", type: "vocab", front: "å steke", reading: "asteke", meaning: "to fry", example: { jp: "Erling steker en fisk fordi han er sulten.", en: "Erling fries a fish because he is hungry." }, accept: ["fry", "to roast", "roast", "to bake"], drill: { jp: "Vi liker å steke kjøtt", en: "We like to fry meat" }, hint: "STEH-ke, present steker. In a pan with fat, where koke is in water. Ei stekepanne is the frying pan." },
        { id: "no-u41l3-abake", type: "vocab", front: "å bake", reading: "abake", meaning: "to bake", example: { jp: "Anna baker et brød når barna kommer.", en: "Anna bakes bread when the children come." }, accept: ["bake", "to do baking"], drill: { jp: "Det er hyggelig å bake ei kake", en: "It is nice to bake a cake" }, hint: "BAH-ke, present baker. Bread and cakes, in an ovn — the word you met in unit 16. En baker is the baker, built the way en lærer was built from å lære." },
        { id: "no-u41l3-askjaere", type: "vocab", front: "å skjære", reading: "askjaere", meaning: "to cut", example: { jp: "Jeg skjærer en løk når jeg lager ei suppe.", en: "I cut an onion when I make a soup." }, accept: ["cut", "to slice", "slice", "to carve"], drill: { jp: "Det er lett å skjære ei gulrot", en: "It is easy to cut a carrot" }, hint: "SHÆ-re — skj is the broad sh of skje and skjorte, and the reading folds æ to ae on its own. Present skjærer. Å klippe is to cut with scissors; skjære is with a blade." },
        { id: "no-u41l3-ablande", type: "vocab", front: "å blande", reading: "ablande", meaning: "to mix", example: { jp: "Vi blander salt og sukker før vi baker.", en: "We mix salt and sugar before we bake." }, accept: ["mix", "to blend", "blend", "to stir together"], drill: { jp: "Det er lett å blande salt og sukker", en: "It is easy to mix salt and sugar" }, hint: "BLAN-ne — the d is barely there. Present blander. En blanding is a mixture." },
        { id: "no-u41l3-aservere", type: "vocab", front: "å servere", reading: "aservere", meaning: "to serve", example: { jp: "De serverer en dessert hvis vi vil ha det.", en: "They serve a dessert if we want it." }, accept: ["serve", "to wait on", "to dish up"], drill: { jp: "Vi liker å servere en dessert", en: "We like to serve a dessert" }, hint: "ser-VEH-re, stress in the middle. Present serverer. What a restaurant does to a rett; also what you do to guests at home." },
      ],
    },
    // Lesson 4: how it tastes. Every adjective here is given in the base
    // (masculine/feminine) form and every example keeps a non-neuter subject,
    // so no card asks the learner to build a -t ending — u14 owns that.
    {
      id: "no-u41l4",
      unit: 41,
      lesson: 4,
      title: "Smak",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how food tastes — søt, sur, bitter, fersk — and say whether you are full and whether something is delicious.",
      items: [
        { id: "no-u41l4-sot", type: "vocab", front: "søt", reading: "sot", meaning: "sweet", example: { jp: "Denne kaka er søt fordi det er mye sukker i den.", en: "This cake is sweet because there is a lot of sugar in it." }, accept: ["sugary", "cute"], drill: { jp: "En dessert er ofte søt", en: "A dessert is often sweet" }, hint: "SURT, with the ø of unit 1 — hand-folded to sot. Of food it is sweet; of a person or an animal it is \"cute\", and Norwegians use it that way constantly." },
        { id: "no-u41l4-sur", type: "vocab", front: "sur", reading: "sur", meaning: "sour", example: { jp: "Melka er sur, og jeg vil ikke drikke den.", en: "The milk is sour, and I do not want to drink it." }, accept: ["acidic", "off", "grumpy"], drill: { jp: "Ei gulrot er ikke sur", en: "A carrot is not sour" }, hint: "SUER, tight u. Of food, sour or gone off; of a person, in a bad mood — å være sur is to be grumpy, and it is the everyday word for it." },
        { id: "no-u41l4-bitter", type: "vocab", front: "bitter", reading: "bitter", meaning: "bitter", example: { jp: "Kaffe er bitter, men mange liker den.", en: "Coffee is bitter, but many people like it." }, accept: ["sharp", "acrid"], drill: { jp: "Denne kaffen er bitter", en: "This coffee is bitter" }, hint: "BIT-ter. Of taste, and of a person who has not forgiven something — the same reach as English." },
        { id: "no-u41l4-fersk", type: "vocab", front: "fersk", reading: "fersk", meaning: "fresh", example: { jp: "Denne fisken er fersk, fordi bonden kom med den i dag.", en: "This fish is fresh, because the farmer came with it today." }, accept: ["new", "newly made"], drill: { jp: "Vi kjøper en fersk fisk", en: "We buy a fresh fish" }, hint: "FÆRSK. Of food, freshly made or freshly caught — fersk fisk is the phrase on every counter. Of a person it means new at something: han er fersk i jobben." },
        { id: "no-u41l4-mett", type: "vocab", front: "mett", reading: "mett", meaning: "full", example: { jp: "Jeg er mett, og jeg vil ikke ha en dessert.", en: "I am full, and I do not want a dessert." }, accept: ["satisfied", "full up", "sated"], drill: { jp: "Erling er mett etter middagen", en: "Erling is full after dinner" }, hint: "METT. The exact opposite of sulten from unit 6, and the pair is worth learning together: sulten before the meal, mett after it. English has no single word for it." },
        { id: "no-u41l4-deilig", type: "vocab", front: "deilig", reading: "deilig", meaning: "delicious", example: { jp: "Denne suppa er deilig, og alle liker den.", en: "This soup is delicious, and everyone likes it." }, accept: ["lovely", "wonderful", "gorgeous"], drill: { jp: "En fersk fisk er deilig", en: "A fresh fish is delicious" }, hint: "DAY-li — the g of -ig is silent, as in hyggelig and viktig from unit 1. Food, weather, a hot bath, a day off: deilig covers all of them, and it is one of the most-used words in the language." },
      ],
    },
  ],
};
