// NO Unit 45 — Retning og geografi ("Direction and geography") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 6 (A2)"; retitled per CLAUDE.md → "No front
// language". A1 u7 taught høyre, venstre and nær, and A1 u20 taught en vei, et
// kart and å svinge's neighbours — enough to cross a town. This unit takes the
// scale above that: the compass, the landscape Norway is actually made of, how
// the country is divided, and the verbs for following a route.
//
// Conventions are unit1.js §1–§8 and bind every unit. Bokmål, not Nynorsk.
//
// FIRST FEMININE OF THE UNIT is `ei bygd` (l3), and it carries the en-/ei-
// recognition note §1 requires. (`hovedstad` was corrected en-masculine per the
// content-auditor — stad is masculine — so it is no longer the unit's feminine.)
// l1 is four bare compass words plus two
// masculines, and l2 has no feminine at all once `ei slette` was surrendered to
// block 2 — `en kyst`, `en fjord` and its replacement `en topp` are all
// masculine in Bokmål and are NOT marked ei. The note moved with the card.
//
// ø IS WRITTEN o IN `reading` (§3): `sør` → "sor", `øst` → "ost", `en innsjø` →
// "eninnsjo", `å følge` → "afolge", `et hjørne` → "ethjorne". Note that `øst`
// folds to "ost" and A1's `en ost` folds to "enost" — different strings, so no
// reading collision, but they are one letter apart and the hint says so.
//
// ⚠ `rett` IS NOT TAUGHT HERE, deliberately. It would have been the natural
// sixth card in l1 ("straight on"), but `en rett` — a dish — is taught in this
// block's own u41, and a bare `rett` beside it is a homograph pair inside one
// block rather than across the corpus. `rundt` took the slot and does more work.
//
// ⚠ RESERVE LIST — screened against A1's 480, this block's 240, and the sibling
// A2 branches. Every collision resolves against this block; swap, don't rebuild.
//   l1 retning:    en kompass · framover · bakover
//   l2 landskap:   ei vik · en topp · ei myr
//   l3 verden:     et rike · en landsdel · ei grend
//   l4 finne fram: å vende · å møtes · en omvei
//
// SCOPE: examples and drills use A1's 480 plus u41–u44 plus this unit's earlier
// cards. Nothing leans on u21–u40, and nothing uses `som`, `om`, `hele`, `hver`,
// `ute`, `ved`, `der`, `mens` or `tid` — all confirmed untaught by
// scripts/scope-strict.mjs, which does not use lint's isInflection exemption.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT45 = {
  id: "no-u45",
  lang: "no",
  title: "Retning og geografi",
  order: 45,
  stage: "a2",
  lessons: [
    // Lesson 1: the compass. Four bare adverbs — they take no article and no
    // inflection, which is why they can open the unit.
    {
      id: "no-u45l1",
      unit: 45,
      lesson: 1,
      title: "Himmelretninger",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Use the compass — nord, sør, øst, vest — say which direction something lies in, and say you are going around.",
      items: [
        { id: "no-u45l1-nord", type: "vocab", front: "nord", reading: "nord", meaning: "north", example: { jp: "Vi kjører nord fordi vi skal se et fjell.", en: "We drive north because we are going to see a mountain." }, drill: { jp: "Erling bor nord i Norge", en: "Erling lives in the north of Norway" }, accept: ["northward", "the north"], hint: "NOOR — the d is silent. A bare adverb: no article, no ending. Nord-Norge is the north of the country, and it is a third of it." },
        { id: "no-u45l1-sor", type: "vocab", front: "sør", reading: "sor", meaning: "south", example: { jp: "Fuglene drar sør når det blir kaldt.", en: "The birds go south when it gets cold." }, drill: { jp: "Vi kjører sør til Bergen", en: "We drive south to Bergen" }, accept: ["southward", "the south"], hint: "SURR, with the ø of unit 1 — hand-folded to sor. Sørlandet is the southern coast, where Norwegians go in July for the one warm month." },
        { id: "no-u45l1-ost", type: "vocab", front: "øst", reading: "ost", meaning: "east", example: { jp: "Sola kommer opp i øst, og derfor blir det lyst tidlig.", en: "The sun comes up in the east, and that is why it gets light early." }, drill: { jp: "Oslo ligger øst i Norge", en: "Oslo lies east in Norway" }, accept: ["eastward", "the east"], hint: "URST, hand-folded to ost. ⚠ One letter from A1's en ost, a cheese — and their readings are ost and enost, close enough that the article is what saves you." },
        { id: "no-u45l1-vest", type: "vocab", front: "vest", reading: "vest", meaning: "west", example: { jp: "Det regner mye vest i Norge, men mange bor i Bergen.", en: "It rains a lot in the west of Norway, but many live in Bergen." }, drill: { jp: "Bergen ligger vest i Norge", en: "Bergen lies west in Norway" }, accept: ["westward", "the west"], hint: "VEST. Vestlandet is the fjord country — the wettest part of Norway and, most Norwegians will tell you, the most beautiful." },
        { id: "no-u45l1-framover", type: "vocab", front: "framover", reading: "framover", meaning: "forwards", example: { jp: "Vi kjører framover, men vi vet ikke hvor veien slutter.", en: "We drive forwards, but we do not know where the road ends." }, drill: { jp: "Vi går framover på veien", en: "We walk forwards on the road" }, accept: ["ahead", "onwards", "forward"], hint: "FRAM-ov-er. A bare adverb: no article, no ending. Fram plus over. Bakover is backwards, and both also work in time — framover means \"from now on\". ⚠ `en retning` would have been the natural card here; block 1 teaches it at u23 and the lower slot owns it." },
        { id: "no-u45l1-rundt", type: "vocab", front: "rundt", reading: "rundt", meaning: "around", example: { jp: "Vi kjører rundt et fjell fordi veien er stengt.", en: "We drive around a mountain because the road is closed." }, drill: { jp: "Vi går rundt en innsjø", en: "We walk around a lake" }, accept: ["round", "about", "approximately"], hint: "RUNT — the d is silent. Both around a thing and roughly a number: rundt ti grader, about ten degrees. It is also the adjective rund, round, in its neuter form, which is why it looks like an adjective and behaves like a preposition." },
      ],
    },
    // Lesson 2: the landscape. `ei slette` is the unit's first feminine.
    {
      id: "no-u45l2",
      unit: 45,
      lesson: 2,
      title: "Landskap",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the landscape Norway is made of — kyst, dal, hav, fjord, slette, innsjø — and say where a place lies.",
      items: [
        { id: "no-u45l2-enkyst", type: "vocab", front: "en kyst", reading: "enkyst", meaning: "coast", example: { jp: "En kyst er lang i Norge, og derfor er det mange båter.", en: "A coast is long in Norway, and that is why there are many boats." }, drill: { jp: "Vi bor på en kyst", en: "We live on a coast" }, accept: ["a shore", "a coastline", "a seaboard"], hint: "KUEST. Masculine — definite kysten, plural kyster — so this one is NOT marked ei. Norway's is around 25,000 km once you count the islands, which is why so much of the vocabulary in this unit is about water." },
        { id: "no-u45l2-endal", type: "vocab", front: "en dal", reading: "endal", meaning: "valley", example: { jp: "En dal ligger under et fjell, og en elv går i den.", en: "A valley lies below a mountain, and a river runs in it." }, drill: { jp: "Det ligger et hus i en dal", en: "There is a house lying in a valley" }, accept: ["a dale", "a glen"], hint: "DAHL. Masculine: definite dalen, plural daler. It ends half the place names in the country — Gudbrandsdalen, Hallingdal — and English \"dale\" is the same old word." },
        { id: "no-u45l2-ethav", type: "vocab", front: "et hav", reading: "ethav", meaning: "sea", example: { jp: "Et hav er stort, men en innsjø er det ikke.", en: "A sea is big, but a lake is not." }, drill: { jp: "Det er et hav vest i Norge", en: "There is a sea west in Norway" }, accept: ["an ocean", "the sea"], hint: "HAHV. Neuter: definite havet, plural hav. The open sea, where en sjø from A1 unit 1 is a lake inland and the sea near shore — Norwegian splits the water three ways and English does not." },
        { id: "no-u45l2-enfjord", type: "vocab", front: "en fjord", reading: "enfjord", meaning: "fjord", example: { jp: "En fjord går inn i landet, og det er mange fjell.", en: "A fjord goes into the land, and there are many mountains." }, drill: { jp: "Vi ser en fjord fra båten", en: "We see a fjord from the boat" }, accept: ["an inlet", "a firth"], hint: "FYOOR — fj is f plus a y sound, and the d is silent. Masculine: definite fjorden, plural fjorder. English borrowed the word from Norwegian and kept the spelling; it is one of very few that went that direction." },
        { id: "no-u45l2-entopp", type: "vocab", front: "en topp", reading: "entopp", meaning: "summit", example: { jp: "En topp er høy, og vi ser en fjord fra den.", en: "A summit is high, and we see a fjord from it." }, drill: { jp: "Vi går til en topp i dag", en: "We walk to a summit today" }, accept: ["a peak", "a top", "a mountain top"], hint: "TOPP. Masculine: definite toppen, plural topper. The summit of a fjell, and the top of anything else. Å nå toppen is to reach the top. ⚠ `ei slette`, a plain, was the card here until block 2 turned out to teach å slette, to delete, at u33 — a noun and a verb sharing a headword. Those normally both stand (tre/et tre, dyr/et dyr in A1), but a cloze blanks by STRING, so when one side is already in a merged band the unmerged side moves. That is this block, on the lower-slot rule." },
        { id: "no-u45l2-eninnsjo", type: "vocab", front: "en innsjø", reading: "eninnsjo", meaning: "lake", example: { jp: "En innsjø ligger i en dal, og vi svømmer i den når det er varmt.", en: "A lake lies in a valley, and we swim in it when it is warm." }, drill: { jp: "Det ligger en innsjø i dalen", en: "There is a lake lying in the valley" }, accept: ["an inland lake", "a lake"], hint: "INN-shur, hand-folded to eninnsjo. Masculine: definite innsjøen. Inn plus sjø: an inland sjø, welded together to say precisely the thing that plain sjø leaves ambiguous." },
      ],
    },
    // Lesson 3: how a country is divided.
    {
      id: "no-u45l3",
      unit: 45,
      lesson: 3,
      title: "Land og folk",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a country — verden, hovedstad, fylke, område, bygd, innbygger — and say where people live.",
      items: [
        { id: "no-u45l3-enverden", type: "vocab", front: "en verden", reading: "enverden", meaning: "world", example: { jp: "En verden er stor, men Norge er et lite land.", en: "A world is big, but Norway is a small country." }, drill: { jp: "Vi ser en verden på et kart", en: "We see a world on a map" }, accept: ["the world", "a world"], hint: "VÆR-den. Masculine: definite verden — note that the definite is the SAME as the indefinite, with no ending, which is rare and worth remembering. I hele verden means \"in the whole world\"." },
        { id: "no-u45l3-enhovedstad", type: "vocab", front: "en hovedstad", reading: "enhovedstad", meaning: "capital", example: { jp: "Oslo er en hovedstad, og mange bor i byen.", en: "Oslo is a capital, and many live in the city." }, drill: { jp: "Oslo er en hovedstad i Norge", en: "Oslo is a capital in Norway" }, accept: ["a capital city", "a capital"], hint: "HOO-ved-stad — the d of hoved is silent. Masculine: definite hovedstaden (stad is masculine, so the compound is too). Hoved means head or main, and it builds a long line of compounds: hovedvei, hovedperson, hovedgrunn." },
        { id: "no-u45l3-etfylke", type: "vocab", front: "et fylke", reading: "etfylke", meaning: "county", example: { jp: "Et fylke er et område i et land, og Norge har mange fylker.", en: "A county is an area in a country, and Norway has many counties." }, drill: { jp: "Vi bor i et fylke", en: "We live in a county" }, accept: ["a province", "a region", "a county"], hint: "FUEL-ke. Neuter: definite fylket, plural fylker. The administrative division between the country and the kommune — an old word, from the same root as folk." },
        { id: "no-u45l3-etomrade", type: "vocab", front: "et område", reading: "etomrade", meaning: "area", example: { jp: "Et område nord i Norge er kaldt, men mange bor i nord.", en: "An area in the north of Norway is cold, but many live in the north." }, drill: { jp: "Det er et område nord i landet", en: "There is an area in the north of the country" }, accept: ["a region", "a zone", "a field"], hint: "OM-raw-de. Neuter: definite området, plural områder. Geographic, and also abstract — et fagområde is a field of study, the fag of A1 unit 18 plus this." },
        { id: "no-u45l3-eibygd", type: "vocab", front: "ei bygd", reading: "eibygd", meaning: "village", example: { jp: "Ei bygd er liten, og alle kjenner alle.", en: "A village is small, and everyone knows everyone." }, drill: { jp: "Det ligger ei bygd i dalen", en: "There is a village lying in the valley" }, accept: ["a rural community", "a hamlet", "a settlement"], hint: "BUEGD. Feminine: definite bygda, plural bygder. Bokmål lets many feminines take en too, but this course marks them ei — ei is what tells you the definite ends in -a. Not quite a village and not quite a parish — a rural community, and the word carries a whole Norwegian argument about bygd versus by, country versus city." },
        { id: "no-u45l3-enlandsdel", type: "vocab", front: "en landsdel", reading: "enlandsdel", meaning: "region", example: { jp: "En landsdel nord i Norge er stor, men det bor ikke mange i nord.", en: "A region in the north of Norway is big, but not many live in the north." }, drill: { jp: "En landsdel kan være stor", en: "A region can be big" }, accept: ["a part of the country", "a province"], hint: "LANNS-dehl. Masculine: definite landsdelen, plural landsdeler. Land plus del, a part of the country — Norway has five of them, and Nord-Norge is the one this card is about. ⚠ `en innbygger` would have been the natural card here; block 2 teaches it at u32." },
      ],
    },
    // Lesson 4: finding the way. Five å-verbs, so their drills use å-frames.
    {
      id: "no-u45l4",
      unit: 45,
      lesson: 4,
      title: "Å finne fram",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Follow a route — turn, cross, follow, point, search — and name a corner.",
      items: [
        { id: "no-u45l4-avende", type: "vocab", front: "å vende", reading: "avende", meaning: "to turn", example: { jp: "Vi vender til høyre når vi kommer til et hjørne.", en: "We turn right when we come to a corner." }, drill: { jp: "Det er lett å vende til venstre", en: "It is easy to turn left" }, accept: ["turn", "to turn round", "to face", "to reverse"], hint: "VEN-ne, present vender. To turn something round, or to turn in a direction. Å vende tilbake is to return. ⚠ `å svinge` would have been the natural card here; block 1 teaches it at u23." },
        { id: "no-u45l4-akrysse", type: "vocab", front: "å krysse", reading: "akrysse", meaning: "to cross", example: { jp: "Vi krysser ei bru fordi elva er stor.", en: "We cross a bridge because the river is big." }, drill: { jp: "Det er lett å krysse ei gate", en: "It is easy to cross a street" }, accept: ["cross", "to go across", "go across"], hint: "KRUES-se, present krysser. A road, a river, a border. Et kryss is a crossroads, and å krysse av is to tick a box." },
        { id: "no-u45l4-afolge", type: "vocab", front: "å følge", reading: "afolge", meaning: "to follow", example: { jp: "Vi følger en vei nord fordi vi vil se en fjord.", en: "We follow a road north because we want to see a fjord." }, drill: { jp: "Det er lett å følge et kart", en: "It is easy to follow a map" }, accept: ["follow", "to accompany", "accompany", "to go with"], hint: "FURL-ge, present følger, hand-folded to afolge. To follow a road or a person, and to accompany somebody — jeg følger deg hjem, I will walk you home, which is an ordinary courtesy rather than a grand offer." },
        { id: "no-u45l4-apeke", type: "vocab", front: "å peke", reading: "apeke", meaning: "to point", example: { jp: "Han peker på et fjell, men vi ser det ikke.", en: "He points at a mountain, but we do not see it." }, drill: { jp: "Det er lett å peke på et kart", en: "It is easy to point at a map" }, accept: ["point", "to indicate", "indicate", "to point out"], hint: "PEH-ke, present peker. Å peke på is to point at. En pekefinger is the index finger — the pointing finger, which is exactly what English means by \"index\" too." },
        { id: "no-u45l4-ethjorne", type: "vocab", front: "et hjørne", reading: "ethjorne", meaning: "corner", example: { jp: "Et hjørne er et sted hvor to gater kommer sammen.", en: "A corner is a place where two streets come together." }, drill: { jp: "Det står en stol i et hjørne", en: "There is a chair standing in a corner" }, accept: ["a corner", "an angle"], hint: "YURR-ne — hj is a silent h plus a y sound, the same trick as in hjelpe, and the reading folds ø to o: ethjorne. Neuter: definite hjørnet, plural hjørner." },
        { id: "no-u45l4-alete", type: "vocab", front: "å lete", reading: "alete", meaning: "to search", example: { jp: "Vi leter etter et hus, men vi finner det ikke.", en: "We are looking for a house, but we do not find it." }, drill: { jp: "Det er tungt å lete etter en nøkkel", en: "It is hard to search for a key" }, accept: ["search", "to look for", "look for", "to hunt for"], hint: "LEH-te, present leter. Always with etter: å lete ETTER noe is to look for something. Å finne from A1 unit 7 is what happens if the leting works." },
      ],
    },
  ],
};
