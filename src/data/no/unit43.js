// NO Unit 43 — Vær og årstider ("Weather and seasons") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 4 (A2)"; retitled per CLAUDE.md → "No front
// language". A1 u8 taught the everyday weather words (vær, ei sol, ei sky, en
// vind, å regne, å snø, kald, varm, våt, tørr, å blåse, å fryse) and u9 the four
// seasons. This unit takes the weather a learner meets on the news rather than
// out of the window: the storm, the forecast, what a temperature is, and what
// the seasons actually do to a landscape.
//
// Conventions are unit1.js §1–§8 and bind every unit. Bokmål, not Nynorsk.
//
// MASS NOUN, taught bare under §1(b): `is` (l3). The §1 test is whether the
// indefinite singular is idiomatic FOR THE SENSE TAUGHT, and it is not: `en is`
// is an ice CREAM, which is a different word doing different work. Ice on a road
// is bare `is`. Gender in the hint (isen). Same call as `ull` in A1 u15 and
// `såpe` in A1 u16.
//
// FIRST FEMININE OF THE UNIT is `ei tåke` (l1) and it carries the en-/ei-
// recognition note §1 requires.
//
// ø IS WRITTEN o IN `reading` (§3): `ei bølge` → "eibolge", `kjølig` → "kjolig".
//
// THE DEFINITENESS EFFECT does most of the work in this unit, because weather is
// exactly the domain that wants existential sentences. "Ei tåke ligger over
// byen" is wrong; "Det ligger ei tåke over byen" is right AND keeps the front
// intact for the drill. Eleven of the 24 examples and drills here use the det-
// frame for that reason, and every one of them keeps the indefinite noun after
// the verb where the routing needs it.
//
// ⚠ RESERVE LIST — screened against A1's 480, this block's 240, and the sibling
// A2 branches. Every collision resolves against this block; swap, don't rebuild.
//   l1 uvær:        et skred · ei kule? NO — my u46 · reserves: en orkan · ei flom
//   l2 temperatur:  et minus · lunken · skyfri
//   l3 årstider:    ei knopp · et frø · å visne
//   l4 sol/varsel:  ei stråle · et varsel · en skodde
//
// SCOPE: examples and drills use A1's 480 plus u41–u42 plus this unit's earlier
// cards. Nothing leans on u21–u40, and nothing uses `som`, `om`, `hele`, `hver`,
// `ute`, `ved` or `mens` — all untaught in A1 and confirmed so by
// scripts/scope-strict.mjs, which does not use lint's isInflection exemption.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT43 = {
  id: "no-u43",
  lang: "no",
  title: "Vær og årstider",
  order: 43,
  stage: "a2",
  lessons: [
    // Lesson 1: weather that makes the news.
    {
      id: "no-u43l1",
      unit: 43,
      lesson: 1,
      title: "Uvær",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about rough weather — storm, tåke, lyn, torden, uvær, bølge — and say what is coming and what you can no longer see.",
      items: [
        { id: "no-u43l1-enstorm", type: "vocab", front: "en storm", reading: "enstorm", meaning: "storm", example: { jp: "Det kommer en storm når vinden blir sterk.", en: "A storm comes when the wind gets strong." }, drill: { jp: "Det kommer en storm i kveld", en: "A storm is coming tonight" }, accept: ["a gale", "a tempest"], hint: "STORM. Masculine: definite stormen, plural stormer. On the coast it is a technical word before it is a dramatic one — the forecast grades wind, and storm sits near the top." },
        { id: "no-u43l1-eitake", type: "vocab", front: "ei tåke", reading: "eitake", meaning: "fog", example: { jp: "Det ligger ei tåke over byen, og vi kan ikke se fjellet.", en: "There is a fog over the town, and we cannot see the mountain." }, drill: { jp: "Det er ei tåke i dag", en: "There is a fog today" }, accept: ["mist", "a fog", "a mist"], hint: "TAW-ke, with the rounded å. Feminine: definite tåka. You will also see ei tåke written en tåke / tåken; Bokmål allows both. This course writes ei, because ei is what tells you the definite ends in -a. Note the sentence frame: Norwegian will not front an indefinite subject in a locative clause, so it is Det ligger ei tåke, never \"Ei tåke ligger\"." },
        { id: "no-u43l1-etlyn", type: "vocab", front: "et lyn", reading: "etlyn", meaning: "lightning", example: { jp: "Barnet blir redd når et lyn kommer.", en: "The child gets frightened when lightning comes." }, drill: { jp: "Barnet ser et lyn", en: "The child sees lightning" }, accept: ["a flash of lightning", "a bolt of lightning"], hint: "LUEN. Neuter: definite lynet, and the plural is lyn, unchanged. Norwegian counts them — et lyn is one flash, where English needs \"a bolt of\"." },
        { id: "no-u43l1-torden", type: "vocab", front: "torden", reading: "torden", meaning: "thunder", example: { jp: "Erling hører torden når det regner mye.", en: "Erling hears thunder when it rains a lot." }, drill: { jp: "Det er mye torden i dag", en: "There is a lot of thunder today" }, accept: ["the thunder"], hint: "TOR-den. A mass noun, normally used bare: no article. Masculine for the definite: tordenen. Thunder and lightning together are torden og lyn, in that order — the reverse of the English pairing." },
        { id: "no-u43l1-etuvaer", type: "vocab", front: "et uvær", reading: "etuvaer", meaning: "bad weather", example: { jp: "Vi går ikke ut hvis det er et uvær.", en: "We do not go out if there is bad weather." }, drill: { jp: "Det er et uvær i kveld", en: "There is bad weather tonight" }, accept: ["a storm", "rough weather", "foul weather"], hint: "UE-vær — u- plus vær, the weather word from unit 8, and the u- prefix negates, exactly as it does in English \"unkind\". Neuter: definite uværet. The reading folds æ to ae on its own." },
        { id: "no-u43l1-eibolge", type: "vocab", front: "ei bølge", reading: "eibolge", meaning: "wave", example: { jp: "Ei bølge kan bli veldig stor når det blåser.", en: "A wave can get very big when it is windy." }, drill: { jp: "Vi ser ei bølge fra båten", en: "We see a wave from the boat" }, accept: ["a wave", "a swell", "a breaker"], hint: "BURL-ge, hand-folded to eibolge. Feminine: definite bølga, plural bølger. Also a wave of anything — ei bølge av kulde, a cold snap." },
      ],
    },
    // Lesson 2: the sky and how warm it is. `en himmel` comes first because
    // lessons 2 and 4 both stand things in it.
    {
      id: "no-u43l2",
      unit: 43,
      lesson: 2,
      title: "Himmel og temperatur",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what the sky is doing and how warm it is — himmel, grad, temperatur, mild, kjølig, klar.",
      items: [
        { id: "no-u43l2-enhimmel", type: "vocab", front: "en himmel", reading: "enhimmel", meaning: "sky", example: { jp: "Himmelen er blå når det er fint vær.", en: "The sky is blue when the weather is nice." }, drill: { jp: "En himmel kan være blå eller grå", en: "A sky can be blue or grey" }, accept: ["heaven", "the sky"], hint: "HIM-mel. Masculine: definite himmelen. Both the sky you look at and heaven — Norwegian does not separate them, which is why the word turns up in so many hymns." },
        { id: "no-u43l2-engrad", type: "vocab", front: "en grad", reading: "engrad", meaning: "degree", example: { jp: "Det er ti grader i dag, og derfor bruker jeg en frakk.", en: "It is ten degrees today, and that is why I am wearing a coat." }, drill: { jp: "En grad er ikke mye", en: "One degree is not much" }, accept: ["a degree"], hint: "GRAHD. Masculine: definite graden, plural grader. Norway reads temperature in Celsius and says minus for below zero: minus ti grader." },
        { id: "no-u43l2-entemperatur", type: "vocab", front: "en temperatur", reading: "entemperatur", meaning: "temperature", example: { jp: "En temperatur kan være høy eller lav, men i Norge er den ofte lav.", en: "A temperature can be high or low, but in Norway it is often low." }, drill: { jp: "Det er en temperatur på ti grader", en: "There is a temperature of ten degrees" }, accept: ["a temperature"], hint: "tem-pe-ra-TUER, stress right at the end. Masculine: definite temperaturen. A long word that behaves itself — no irregular anything." },
        { id: "no-u43l2-mild", type: "vocab", front: "mild", reading: "mild", meaning: "mild", example: { jp: "Denne vinteren er mild, fordi det ikke snør mye.", en: "This winter is mild, because it does not snow much." }, drill: { jp: "En mild vinter er fin", en: "A mild winter is nice" }, accept: ["gentle", "temperate"], hint: "MILL — the d is silent. Of weather, mild; of a person, gentle. Neuter mildt, where the d comes back into view but still is not said." },
        { id: "no-u43l2-kjolig", type: "vocab", front: "kjølig", reading: "kjolig", meaning: "cool", example: { jp: "Det er kjølig i dag, men det er ikke kaldt.", en: "It is cool today, but it is not cold." }, drill: { jp: "En kjølig dag er fin", en: "A cool day is nice" }, accept: ["chilly", "cool"], hint: "HYUR-li — the thin kj of unit 1, and the g of -ig is silent, as in hyggelig. Hand-folded to kjolig. It sits between varm and kald, and Norwegians use it about people too: en kjølig tone." },
        { id: "no-u43l2-klar", type: "vocab", front: "klar", reading: "klar", meaning: "clear", example: { jp: "Himmelen er klar i kveld, og derfor blir det kaldt.", en: "The sky is clear tonight, and that is why it will be cold." }, drill: { jp: "En klar himmel er blå", en: "A clear sky is blue" }, accept: ["ready", "bright", "obvious"], hint: "KLAHR. Of the sky, clear; of a person, ready — er du klar? is \"are you ready?\", and it is one of the most-used words in the language. Neuter klart." },
      ],
    },
    // Lesson 3: what the seasons do. `is` is the mass-noun exception.
    {
      id: "no-u43l3",
      unit: 43,
      lesson: 3,
      title: "Det årstidene gjør",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe what the seasons do — a flower, a leaf, ice — and say that things are growing, melting or thawing.",
      items: [
        { id: "no-u43l3-enblomst", type: "vocab", front: "en blomst", reading: "enblomst", meaning: "flower", example: { jp: "Kari kjøper en blomst fordi bestemor kommer på besøk.", en: "Kari buys a flower because grandmother is coming to visit." }, drill: { jp: "Det står en blomst på bordet", en: "There is a flower on the table" }, accept: ["a flower", "a bloom", "a blossom"], hint: "BLOMST. Masculine: definite blomsten, plural blomster — and blomster is what you will hear far more often than the singular. A Norwegian arriving for middag brings them." },
        { id: "no-u43l3-etblad", type: "vocab", front: "et blad", reading: "etblad", meaning: "leaf", example: { jp: "Et blad blir gult når det blir høst.", en: "A leaf turns yellow when autumn comes." }, drill: { jp: "Det ligger et blad på gulvet", en: "There is a leaf lying on the floor" }, accept: ["a leaf", "a magazine", "a blade", "a sheet"], hint: "BLAHD. Neuter: definite bladet, plural blad or blader. Three senses on one short word: a leaf, the blade of a kniv, and a magazine — ukeblad is the weekly you read at the hairdresser's." },
        { id: "no-u43l3-is", type: "vocab", front: "is", reading: "is", meaning: "ice", example: { jp: "Det er is på veien, og derfor kjører vi sakte.", en: "There is ice on the road, and that is why we drive slowly." }, drill: { jp: "Det er is på gulvet", en: "There is ice on the floor" }, accept: ["the ice"], hint: "EES. A mass noun, so the front carries no article. Masculine: definite isen. ⚠ `en is`, WITH an article, is an ice cream — a different word doing different work, which is exactly why this one is taught bare (unit1.js §1b)." },
        { id: "no-u43l3-agro", type: "vocab", front: "å gro", reading: "agro", meaning: "to grow (of plants)", example: { jp: "Blomster gror når det er varmt og vått.", en: "Flowers grow when it is warm and wet." }, drill: { jp: "Blomster begynner å gro", en: "Flowers start to grow" }, accept: ["to grow", "to sprout"], hint: "GROO, present gror — a one-syllable verb, so the present is the infinitive plus -r. Of plants and of a wound healing. Å dyrke is to grow something on purpose." },
        { id: "no-u43l3-asmelte", type: "vocab", front: "å smelte", reading: "asmelte", meaning: "to melt", example: { jp: "Isen smelter når sola kommer, men isen er tykk.", en: "The ice melts when the sun comes, but the ice is thick." }, drill: { jp: "Isen begynner å smelte", en: "The ice starts to melt" }, accept: ["melt", "to thaw", "to dissolve"], hint: "SMEL-te, present smelter. Ice, snow, butter, metal. Both ways round, like å henge: isen smelter, and sola smelter isen." },
        { id: "no-u43l3-atine", type: "vocab", front: "å tine", reading: "atine", meaning: "to thaw", example: { jp: "Vi må tine kjøttet før vi lager middag.", en: "We have to thaw the meat before we make dinner." }, drill: { jp: "Vi begynner å tine kjøtt", en: "We start to thaw meat" }, accept: ["thaw", "to defrost", "defrost"], hint: "TEE-ne, present tiner. What you do to food from the freezer, and what the ground does in April. Å smelte is for ice turning to water; å tine is for something frozen coming back to itself." },
      ],
    },
    // Lesson 4: the sun, the shadow, and the forecast.
    {
      id: "no-u43l4",
      unit: 43,
      lesson: 4,
      title: "Sol og varsel",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about sun and shade — skygge, stjerne, å skinne — say what the forecast says, and take an umbrella.",
      items: [
        { id: "no-u43l4-eiskygge", type: "vocab", front: "ei skygge", reading: "eiskygge", meaning: "shadow", example: { jp: "Vi sitter i skyggen fordi sola er veldig sterk.", en: "We sit in the shade because the sun is very strong." }, drill: { jp: "Det er ei skygge på gulvet", en: "There is a shadow on the floor" }, accept: ["shade", "a shadow", "a shade"], hint: "SHUEG-ge — sk before y is the broad sh, as in ski. Feminine: definite skygga, plural skygger. One word for both the shadow a thing casts and the shade you sit in." },
        { id: "no-u43l4-enmane", type: "vocab", front: "en måne", reading: "enmane", meaning: "moon", example: { jp: "Månen er stor og gul i kveld.", en: "The moon is big and yellow tonight." }, accept: ["a moon", "the moon"], drill: { jp: "Vi ser en måne i kveld", en: "We can see a moon tonight" }, hint: "MOH-ne — å written a in the reading. Masculine: definite månen, plural måner. Same root as en måned, a month: watch the d." },
        { id: "no-u43l4-askinne", type: "vocab", front: "å skinne", reading: "askinne", meaning: "to shine", example: { jp: "Sola skinner i dag, men det er kjølig.", en: "The sun is shining today, but it is cool." }, drill: { jp: "Sola begynner å skinne", en: "The sun starts to shine" }, accept: ["shine", "to gleam", "gleam"], hint: "SHIN-ne — sk before i is the broad sh again. Present skinner. The sun, a lamp, a polished shoe. Keep it apart from et skinn, a hide or leather, which is a different word with the same letters." },
        { id: "no-u43l4-avarsle", type: "vocab", front: "å varsle", reading: "avarsle", meaning: "to forecast", example: { jp: "De varsler et uvær hvis vinden blir sterk.", en: "They forecast bad weather if the wind gets strong." }, drill: { jp: "Det er lett å varsle et uvær", en: "It is easy to forecast bad weather" }, accept: ["forecast", "to warn", "warn", "to give notice"], hint: "VARSH-le, present varsler. To forecast, and to warn — et varsel is both a forecast and a warning, and Norwegians check værvarselet the way the British check the sky." },
        { id: "no-u43l4-enparaply", type: "vocab", front: "en paraply", reading: "enparaply", meaning: "umbrella", example: { jp: "Jeg bruker en paraply når det regner, men ikke når det blåser.", en: "I use an umbrella when it rains, but not when it is windy." }, drill: { jp: "Jeg har en paraply i veska", en: "I have an umbrella in the bag" }, accept: ["an umbrella", "a brolly"], hint: "pa-ra-PLUE, stress at the end. Masculine: definite paraplyen. From French parapluie, \"against the rain\". In Bergen, where it rains 200 days a year, people mostly wear a hood instead." },
        { id: "no-u43l4-etklima", type: "vocab", front: "et klima", reading: "etklima", meaning: "climate", example: { jp: "Et klima kan være kaldt eller varmt, og i Norge er det kaldt.", en: "A climate can be cold or warm, and in Norway it is cold." }, drill: { jp: "Et klima kan bli varmere", en: "A climate can get warmer" }, accept: ["a climate"], hint: "KLEE-ma. Neuter: definite klimaet, plural klimaer. Note varmere in the drill — the comparative of varm, built the ordinary way with -ere." },
      ],
    },
  ],
};
