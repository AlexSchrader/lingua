// HI Unit 50 — इलाका और इतिहास ("The region and its history") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 2 (u41–u50), LAST UNIT OF THE RANGE. Conventions: unit1.js §1–§11, then
// unit31.js §A1–§A8.
//
// 🚨 RETHEMING THIS SLOT WAS NOT OPTIONAL. The scaffold called it "Vocabulary 1 (A2)",
// and `src/data/lint.js`'s SCAFFOLD_TITLE_PATTERNS carries /^Vocabulary \d+$/ as a
// HARD ERROR — unit1.js §10 records six of these in A1 (u25–u30) that block 3 had to
// retitle for the same reason. "Vocabulary 1" names no theme at all, so the theme had
// to be measured rather than inherited.
//
// THE TWO MEASURED HOLES IT WAS GIVEN, re-derived immediately before authoring and not
// taken from any earlier note. ⚠️ MEASURED ON BLOCK 2's OWN TREE, 1176 cards, WHERE
// BLOCK 3's u51–u60 WERE STILL STUBS — this line called that "the merged corpus" until
// the real merge corrected it. Both holes still hold on the merged 1440, with ONE
// exception the merge itself found: the brick was block 3's (u60l1, the materials
// lesson), which is why ईंट left this unit. Everything else below is still absent from
// the whole language except where this unit teaches it.
//   • THERE IS NOTHING BETWEEN A VILLAGE AND A COUNTRY. The corpus could say गाँव
//     (u5l2), शहर and देश (u8l1), जगह (u14l1), बाज़ार, सड़क, गली, पुल, खेत, मोड़ and
//     नक्शा — and had NO word for a state, a district, a small town, a border, an
//     area, a metropolis, the countryside, a settlement, a hut, a village council, a
//     neighbourhood or a town square. An Indian address has four levels and the
//     learner had two of them.
//   • THERE IS NOTHING THAT OUTLASTS A PERSON. मस्जिद (u14l1) is a place of worship,
//     not a monument; the corpus had no palace, fort, tower, dome, building or ruin,
//     and no king, queen, court, crown, war or slavery — while इतिहास ITSELF HAS BEEN
//     A FRONT SINCE u24l4 and नक्शा since u29l1. A learner could say the word
//     "history" and could not name one thing in it.
// Both halves are one topic in India, because the monuments ARE the administrative
// map's landmarks, so they share the slot rather than splitting it.
//
// ⚠️ THIS UNIT IS A VOCABULARY UNIT AND OWES NO NEW GRAMMAR. It is the last slot of
// the block and its job is to USE what u41–u49 built: the sentences here carry the
// ergative (u31), the imperfect (u38), the compounds (u46), the conditional (u47),
// the future (u48) and the continuous (u49), which is deliberate — a coverage slot at
// the end of a band is the natural place to meet all of them together.
//
// ⚠️ THREE FRONTS WENT TO BLOCK 3 — see u47's header for why this measurement exists.
// One was caught by screening a candidate list; TWO SURVIVED THAT AND WERE ONLY CAUGHT
// ON THE MERGED TREE, by `validate:content` itself, which is the point worth recording:
// a front-list screen sees the fronts a sibling block HAS ALREADY WRITTEN, and block 3
// wrote u60 after the screen was run. **The merge is the only complete check.**
//     कुआँ ("a water well") → block 3's u54 ज़मीन, पानी और आग, where a well is water
//        rather than village administration. Caught by the screen.        l2
//     ईंट ("a brick") → block 3's u60l1, the MATERIALS lesson (लोहा · लकड़ी · काँच ·
//        चाँदी · ईंट · कोयला). A brick belongs with the materials; in a unit about the
//        map and its monuments it was incidental. Caught by the merge.    l3
//     जंग → block 3's u60l4 meaning RUST, and this one is A REAL HOMOGRAPH rather than
//        a duplicate: mine was "a war". Both senses are common, both units are the
//        natural home for their own sense, and lower-slot-wins would have cost Hindi
//        the word for rust entirely. Caught by the merge.                 l4
// झोपड़ी, गुंबद ("a dome") and युद्ध ("a war") took the three slots.
// 🚨 युद्ध IS THE RESOLUTION WORTH READING: it is free across all 1440 merged fronts,
// so replacing जंग with युद्ध keeps this unit's SENSE and its slot while letting block 3
// keep जंग = rust. **Both concepts are taught and the collision is gone** — no card had
// to die. ⚠️ THE GENDER FLIPS WITH THE WORD, though: जंग is FEMININE (जंग हुई) and युद्ध
// is MASCULINE (युद्ध हुआ), so the card's hint, this unit's gender-trap list, and TWO
// OTHER SENTENCES OF MINE THAT USED जंग — किला's drill and खंडहर's example — all changed
// with it. A swap like this is never one line.
// गुंबद pairs with मीनार in its own lesson the way a dome pairs with a minaret, which is
// a better l3 card than a brick was. All three replacements screened on the MERGED tree:
// zero front, reading or gloss collisions.
//
// GENDER TRAPS (§4), and this unit is unusually full of them:
//   ⚠️ सरहद, मीनार and इमारत are FEMININE AND ALL THREE END IN A CONSONANT, so nothing
//   whatever in the shape tells you: यह सरहद लंबी है, यह मीनार ऊँची है — never लंबा or
//   ऊँचा. बस्ती, झोपड़ी, पंचायत, रानी and गुलामी are FEMININE too and at least say so
//   with their -ी.
//   राज्य, ज़िला, कस्बा, इलाका, महानगर, देहात, मुहल्ला, चौक, महल, किला, गुंबद, खंडहर, युद्ध, दरबार and
//   ताज are MASCULINE — and ⚠️ राजा IS MASCULINE DESPITE THE -ा, which unit1.js §4
//   already names alongside पिता, दादा and चाचा. Regular, but it is the one an
//   English speaker guesses wrong.
//
// ⚠️ THE OBLIQUE BITES HARD IN THIS UNIT AND §A2's SPLIT IS WHY THE DRILLS LOOK AS
// THEY DO. Five fronts end in -ा (ज़िला, कस्बा, इलाका, मुहल्ला, किला) and a
// postposition forces them to -े — इस ज़िले में, never इस ज़िला में (unit1.js §6). But a
// drill must contain its front VERBATIM (src/data/lint.js and `findWholeWord` in
// src/store/cardRouting.js), so every one of those five is the SUBJECT of its drill
// and never the object of a postposition. The examples show the oblique instead;
// each hint names it.
//
// ⚠️ MARK-BOUNDARY PAIRS THIS UNIT CREATES, measured with the router's own `\p{L}`
// boundary test and not by eye. Both seams below are `\p{M}` characters, so
// `canCloze` would blank the wrong span:
//     ताज (l4) whole-word-matches INSIDE ताज़ा (u44l1, freshly made) — across the NUKTA
//     बस (u1l4, a bus) whole-word-matches INSIDE बस्ती (l2) — across the HALANT
// So ताज's sentences contain no ताज़ा, and बस्ती's contain no बस.
// ⚠️ A THIRD PAIR WAS HERE AND IS GONE WITH THE CARD THAT MADE IT: जंग inside जंगल. This
// unit no longer teaches जंग — see the homograph note below.
// ⚠️ u44's OWN HEADER PREDICTED THE ताज/ताज़ा PAIR AND NAMED THIS UNIT AND LESSON
// BEFORE THIS FILE EXISTED — "ताज (u50l4, a crown)" — and it is correct.
// `selfcheck-hi-a2-block2.mjs` checks all three mechanically.
// ⚠️ AND FOUR THAT LOOK LIKE PAIRS AND ARE NOT, measured rather than assumed, because
// the character before the shorter word is a REAL LETTER in every case:
//     हद  (u23l2) inside सरहद   — preceded by र
//     चाय (u13l2) inside पंचायत — followed by त
//     हर  (u22l4) inside खंडहर  — preceded by ड
//     बार (u11l4) inside दरबार  — preceded by र
//
// ⚠️ TWO SHARED ROOTS THAT ARE TWO LEXEMES EACH, named so nobody "fixes" them:
//   • राज्य (l1) and राजा (l4) share the Sanskrit राज-. A state and a king are two
//     lexemes with different readings in different lessons; the same shape as u44's
//     पत्रिका beside पत्रकार. Each hint points at the other.
//   • सरहद (l1) is सर plus हद, u23l2's front. A noun there and a compound noun here.
//
// ⚠️ THREE PARENT WORDS ARE DELIBERATELY NOT CARDED and each hint says so rather than
// leaving the learner to infer a word that has no card: गुलाम (a slave, behind
// गुलामी), बसना (to settle, behind बस्ती) and नगर (a city, behind महानगर). All three
// would be a second mastery track for a form the learner only ever needs to READ.
//
// RETROFLEX/DENTAL (§1b): no new colliding pair, re-checked against all 1440 readings on
// the MERGED tree (block 2 + block 3), not the 1176 this line said when block 3 was still
// stubs. ज़िला zilaa is nukta with no counterpart in the corpus (no ज़ीला), and महल mahal,
// ताज taaj, युद्ध yuddh, दरबार darbaar and देहात dehaat are all DENTAL with no retroflex
// counterpart. §1(b)'s doubling hatch fires NOWHERE.
// ⚠️ TWO READING NEIGHBOURS WORTH THEIR HINTS: किला **kilaa** against ताला **taalaa**
// (u15l2, a lock) — different first letter and §1's length-by-doubling on the second
// vowel are the only things separating them; and महल **mahal** has NO long vowel at
// all, so it is mahal and never mahaal, which is the mistake an English speaker makes
// on sight of the ह.
// GEMINATION (§1): मुहल्ला muhallaa and कस्बा kasbaa — the first doubles its ल as the
// spelling requires, the second has a plain स् halant before ब and doubles nothing.
export const HI_UNIT50 = {
  id: "hi-u50",
  lang: "hi",
  title: "इलाका और इतिहास",
  order: 50,
  stage: "a2",
  lessons: [
    {
      id: "hi-u50l1",
      unit: 50,
      lesson: 1,
      title: "Between a village and a country",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the levels of the map between a village and a country — a state, a district, a small town, a border, an area and a great city.",
      items: [
        { id: "hi-u50l1-raajya", type: "vocab", front: "राज्य", reading: "raajya", meaning: "a province of a country", accept: ["a state within a country", "one unit of a federation"], example: { jp: "भारत में कई राज्य हैं।", en: "There are several states in India." }, drill: { jp: "हर राज्य की अपनी सरकार होती है", en: "Every state has its own government" }, hint: "RAAJ-YA, MASCULINE, with the ज्य conjunct — ज with य stacked under it. One province of a country, with its own सरकार and its own कानून. देश is the whole country; a राज्य is one piece of it. ⚠️ Same Sanskrit root as राजा, a king, in lesson 4 — two different words." },
        { id: "hi-u50l1-zilaa", type: "vocab", front: "ज़िला", reading: "zilaa", meaning: "a district", accept: ["an administrative division of a state", "the unit below a state"], example: { jp: "यह कस्बा हमारे ज़िले में है।", en: "This small town is in our district." }, drill: { jp: "यह ज़िला बहुत बड़ा है", en: "This district is very big" }, hint: "ZI-LAA, MASCULINE, plural ज़िले, with the nukta ज़ read z. The unit below a राज्य and above a कस्बा, and the level an Indian address actually names. ⚠️ NOTE THE OBLIQUE in the example: इस ज़िले में, never इस ज़िला में — a postposition turns -ा into -े." },
        { id: "hi-u50l1-kasbaa", type: "vocab", front: "कस्बा", reading: "kasbaa", meaning: "a small town", accept: ["a market town", "a place bigger than a village"], example: { jp: "यह गाँव नहीं है, एक छोटा कस्बा है।", en: "This is not a village, it is a small town." }, drill: { jp: "यह कस्बा शहर से दूर है", en: "This town is far from the city" }, hint: "KAS-BAA, MASCULINE, plural कस्बे, with a plain स् halant before the ब and no doubling. Bigger than a गाँव and smaller than a शहर — a market town with a बाज़ार and a few streets. It is the word for most of the places a train stops at." },
        { id: "hi-u50l1-sarhad", type: "vocab", front: "सरहद", reading: "sarhad", meaning: "a border between countries", accept: ["a national frontier", "the line where one country ends"], example: { jp: "दो देशों की सरहद पहाड़ों से होकर जाती है।", en: "The border of the two countries runs through the mountains." }, drill: { jp: "सरहद पर फ़ौज रहती है", en: "The army stays at the border" }, hint: "SAR-HAD, ⚠️ FEMININE despite the consonant ending — यह सरहद लंबी है, never लंबा. The line between two countries, where a फ़ौज stands. It is सर, chief or outermost, plus हद, a limit, from the postposition unit: literally the last limit. ⚠️ हद sits inside it but not as a whole word — the letter before it is र." },
        { id: "hi-u50l1-ilaakaa", type: "vocab", front: "इलाका", reading: "ilaakaa", meaning: "an area", accept: ["a stretch of country", "the part of a place somebody knows"], example: { jp: "यह इलाका बहुत गरीब है।", en: "This area is very poor." }, drill: { jp: "पूरा इलाका पानी में है", en: "The whole area is under water" }, hint: "I-LAA-KAA, MASCULINE, plural इलाके, oblique इलाके. A stretch of land taken as one thing — पहाड़ी इलाका; and in a city, the part of town you know. जगह is a single spot you can stand on; an इलाका has an extent." },
        { id: "hi-u50l1-mahaanagar", type: "vocab", front: "महानगर", reading: "mahaanagar", meaning: "a metropolis", accept: ["one of the very largest cities", "a city of millions"], example: { jp: "महानगर में हमेशा भीड़ रहती है।", en: "There is always a crowd in a metropolis." }, drill: { jp: "यह शहर अब महानगर बन गया है", en: "This city has now become a metropolis" }, hint: "MA-HAA-NA-GAR, MASCULINE, and it is two Sanskrit words joined: महा, great, plus नगर, a city. Reserved for the very biggest — Delhi, Mumbai, Kolkata, Chennai — where शहर covers any city at all. ⚠️ नगर on its own is NOT carded in this course; you only ever need to read it." },
      ],
    },
    {
      id: "hi-u50l2",
      unit: 50,
      lesson: 2,
      title: "The village and the neighbourhood",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about the countryside, a settlement, a hut, the village council, your own few streets and the square where roads meet.",
      items: [
        { id: "hi-u50l2-dehaat", type: "vocab", front: "देहात", reading: "dehaat", meaning: "the villages as a whole", accept: ["rural districts", "the land outside the towns"], example: { jp: "देहात में अब भी बिजली की दिक्कत है।", en: "There is still an electricity problem in the countryside." }, drill: { jp: "देहात में काम कम मिलता है", en: "Less work is available in the countryside" }, hint: "DE-HAAT, MASCULINE, all DENTAL, and plural in sense even when it looks singular. The countryside as a whole, set against the शहर — देहात के लोग, country people. A single गाँव is one village; देहात is all of them at once, and it is the word in a news report." },
        { id: "hi-u50l2-bastii", type: "vocab", front: "बस्ती", reading: "bastii", meaning: "a settlement", accept: ["a cluster of dwellings", "a poor quarter of a town"], example: { jp: "शहर के बाहर एक नई बस्ती बन रही है।", en: "A new settlement is being built outside the city." }, drill: { jp: "इस बस्ती में बहुत लोग रहते हैं", en: "A great many people live in this settlement" }, hint: "BAS-TII, FEMININE, plural बस्तियाँ, with the स्त of बिस्तर. A cluster of houses that grew up on its own, and in a city usually a poor quarter. ⚠️ बस, a bus, WHOLE-WORD-MATCHES inside it across the halant, so the two never share a sentence here. Built on बसना, to settle, which is not carded." },
        { id: "hi-u50l2-jhoprii", type: "vocab", front: "झोपड़ी", reading: "jhoprii", meaning: "a hut", accept: ["a one-room shack", "a dwelling of mud and thatch"], example: { jp: "बस्ती की हर झोपड़ी छोटी है।", en: "Every hut in the settlement is small." }, drill: { jp: "गाँव में अब भी झोपड़ी दिखती है", en: "Huts are still to be seen in the village" }, hint: "JHOP-RII, FEMININE, plural झोपड़ियाँ, with ड़ read r under §1(c). A one-room hut of mud, thatch or tin — what a बस्ती is mostly made of. घर is any home at all; a झोपड़ी tells you what it is built of." },
        { id: "hi-u50l2-panchaayat", type: "vocab", front: "पंचायत", reading: "panchaayat", meaning: "a village council", accept: ["the elected body that runs a village", "a council of five"], example: { jp: "गाँव की पंचायत ने यह फ़ैसला किया।", en: "The village council made this decision." }, drill: { jp: "पंचायत में सब लोग बैठते हैं", en: "Everybody sits together in the council" }, hint: "PAN-CHAA-YAT, FEMININE, ं before च read n. The elected council that runs an Indian village, and literally a body of पाँच, five. It settles local matters the way an अदालत settles legal ones, and it is a level of सरकार below the ज़िला. ⚠️ चाय is inside it but not as a whole word — a त follows." },
        { id: "hi-u50l2-muhallaa", type: "vocab", front: "मुहल्ला", reading: "muhallaa", meaning: "a neighbourhood", accept: ["the few streets around your house", "a quarter of a town"], example: { jp: "हमारे मुहल्ले में सब एक दूसरे को जानते हैं।", en: "Everybody knows everybody in our neighbourhood." }, drill: { jp: "यह मुहल्ला बहुत पुराना है", en: "This neighbourhood is very old" }, hint: "MU-HAL-LAA, MASCULINE, plural and oblique मुहल्ले, with the doubled ल्ल of §1's gemination. The handful of streets around where you live, where everybody knows everybody. An इलाका is a whole stretch of a city; a मुहल्ला is walking distance. A बस्ती is defined by how it was built, a मुहल्ला by who lives there." },
        { id: "hi-u50l2-chauk", type: "vocab", front: "चौक", reading: "chauk", meaning: "a market square", accept: ["an open crossing in a town", "the square where four roads meet"], example: { jp: "चौक पर हर शाम बाज़ार लगता है।", en: "A market is held in the square every evening." }, drill: { jp: "इस चौक पर चार सड़कें मिलती हैं", en: "Four roads meet at this square" }, hint: "CHAUK, MASCULINE, with the औ mātrā. The open square where roads meet in an Indian town, usually with a market in it — चाँदनी चौक in Delhi is the famous one. It is built on चार, four, because four roads meet there. A मोड़ is a bend; a चौक is a named crossing." },
      ],
    },
    {
      id: "hi-u50l3",
      unit: 50,
      lesson: 3,
      title: "Buildings that outlast people",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name a palace, a fort, a tower, a building, a brick and a ruin — the things a history book is about.",
      items: [
        { id: "hi-u50l3-mahal", type: "vocab", front: "महल", reading: "mahal", meaning: "a palace", accept: ["a royal residence", "the house a ruler lived in"], example: { jp: "पुराने राजा का महल अब खाली है।", en: "The old king's palace is empty now." }, drill: { jp: "यह महल बहुत पुराना और बड़ा है", en: "This palace is very old and very big" }, hint: "MA-HAL, MASCULINE, plural महल unchanged, all DENTAL. The house a राजा lived in, and in India usually now a museum or a hotel. ⚠️ THERE IS NO LONG VOWEL IN IT: mahal, never mahaal — the ह makes an English reader want to stretch the second a, and §1's length-by-doubling says not to." },
        { id: "hi-u50l3-kilaa", type: "vocab", front: "किला", reading: "kilaa", meaning: "a fort", accept: ["a walled stronghold", "a fortified building"], example: { jp: "पहाड़ पर एक पुराना किला है।", en: "There is an old fort on the mountain." }, drill: { jp: "यह किला युद्ध में टूटा था", en: "This fort was broken in the war" }, hint: "KI-LAA, MASCULINE, plural and oblique किले. A walled stronghold built to be held — लाल किला, the Red Fort. A महल is for living in; a किला is for defending. ⚠️ NOT ताला taalaa, a lock, from the house unit: different first letter, and the long aa is the other half of the difference." },
        { id: "hi-u50l3-miinaar", type: "vocab", front: "मीनार", reading: "miinaar", meaning: "a tower", accept: ["a tall column standing alone", "a minaret"], example: { jp: "इस मस्जिद की मीनार बहुत ऊँची है।", en: "The tower of this mosque is very tall." }, drill: { jp: "यह मीनार दूर से दिखती है", en: "This tower is visible from far off" }, hint: "MII-NAAR, ⚠️ FEMININE despite the consonant ending — यह मीनार ऊँची है, never ऊँचा. A tall column standing on its own, and the minaret of a मस्जिद. ⚠️ BOTH VOWELS ARE LONG: mii-naar, which §1 writes with doubling in both syllables." },
        { id: "hi-u50l3-imaarat", type: "vocab", front: "इमारत", reading: "imaarat", meaning: "a building", accept: ["a built structure", "a block of a town"], example: { jp: "यह इमारत सौ साल पुरानी है।", en: "This building is a hundred years old." }, drill: { jp: "शहर में नई इमारत बन रही है", en: "A new building is going up in the city" }, hint: "I-MAA-RAT, ⚠️ FEMININE despite the consonant ending, plural इमारतें. Any built structure, and the everyday word for an office block: सरकारी इमारत. घर is a home; an इमारत is a building thought of as a thing that was built." },
        { id: "hi-u50l3-gumbad", type: "vocab", front: "गुंबद", reading: "gumbad", meaning: "a dome", accept: ["the rounded top of a building", "a cupola"], example: { jp: "मस्जिद का सफ़ेद गुंबद बहुत बड़ा है।", en: "The mosque's white dome is very big." }, drill: { jp: "इस महल का गुंबद बहुत ऊँचा है", en: "The dome of this palace is very high" }, hint: "GUM-BAD, MASCULINE, plural गुंबद unchanged, with the ं before ब read as **m** under §1 — gumbad, not gunbad. The rounded top of a mosque, a tomb or a palace, and the shape every Mughal monument in India is known by. A मीनार is the tall thin one standing beside it; a गुंबद is the round one sitting on top." },
        { id: "hi-u50l3-khandahar", type: "vocab", front: "खंडहर", reading: "khandahar", meaning: "ruins of an old building", accept: ["what is left of a fallen building", "a wrecked and roofless structure"], example: { jp: "युद्ध के बाद शहर खंडहर बन गया।", en: "After the war the city became a ruin." }, drill: { jp: "इस खंडहर में कोई नहीं रहता", en: "Nobody lives in this ruin" }, hint: "KHAN-DA-HAR, MASCULINE, ं read n, PLAIN ख, and plural in sense even when singular — खंडहर हो जाना, to fall into ruin. What is left of an इमारत or a किला once the roof has gone. ⚠️ हर, every, sits inside it but not as a whole word: the letter before it is ड." },
      ],
    },
    {
      id: "hi-u50l4",
      unit: 50,
      lesson: 4,
      title: "Kings, courts and what came after",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Talk about a king, a queen, a royal court, slavery, a war and a crown — enough to read a page of history.",
      items: [
        { id: "hi-u50l4-raajaa", type: "vocab", front: "राजा", reading: "raajaa", meaning: "a king", accept: ["a ruler by birth", "a monarch"], example: { jp: "पुराने ज़माने में हर राज्य का एक राजा होता था।", en: "In the old days every state had a king." }, drill: { jp: "इस किले में एक राजा रहता था", en: "A king used to live in this fort" }, hint: "RAA-JAA, ⚠️ MASCULINE despite the -ा — unit1.js §4 names it alongside पिता, दादा and चाचा as one of the -ा words that ARE masculine. A ruler by birth, where a नेता is a leader who was chosen. Same root as राज्य, lesson 1. Note होता था, the imperfect: it USED to be so." },
        { id: "hi-u50l4-raanii", type: "vocab", front: "रानी", reading: "raanii", meaning: "a queen", accept: ["a king's wife", "a woman who rules"], example: { jp: "रानी अपने महल में रहती थी।", en: "The queen used to live in her palace." }, drill: { jp: "इस देश की कोई रानी नहीं है", en: "This country has no queen" }, hint: "RAA-NII, FEMININE, plural रानियाँ, with a plain DENTAL न and no retroflex in it. The wife of a राजा, and also a woman who rules in her own right — झाँसी की रानी. राजा to रानी is the same -ा to -ी pairing as बेटा to बेटी." },
        { id: "hi-u50l4-darbaar", type: "vocab", front: "दरबार", reading: "darbaar", meaning: "a royal court", accept: ["the hall where a ruler sat", "a ruler's assembly"], example: { jp: "राजा का दरबार हर सुबह लगता था।", en: "The king's court was held every morning." }, drill: { jp: "पुराना दरबार अब खाली है", en: "The old court hall is empty now" }, hint: "DAR-BAAR, MASCULINE, with the र् halant. The hall where a राजा sat and the assembly that met in it — दरबार लगना, for a court to be held. ⚠️ NOT अदालत, which is a court of LAW: English uses one word for both and Hindi keeps them apart. बार is inside it but not as a whole word." },
        { id: "hi-u50l4-gulaamii", type: "vocab", front: "गुलामी", reading: "gulaamii", meaning: "slavery", accept: ["being owned by somebody", "life under another country's rule"], example: { jp: "गुलामी के दिन बहुत बुरे थे।", en: "The days of slavery were very bad." }, drill: { jp: "किसी की गुलामी अच्छी नहीं होती", en: "Being in anybody's servitude is not a good thing" }, hint: "GU-LAA-MII, FEMININE, PLAIN ग — §A4 keeps क़ ख़ ग़ out of every Hindi front. Being owned, and by extension a whole country living under another's rule: गुलामी के दिन. ⚠️ Built on गुलाम, a slave, which is NOT carded — you only ever need to read it. आज़ादी is its opposite." },
        { id: "hi-u50l4-yuddh", type: "vocab", front: "युद्ध", reading: "yuddh", meaning: "a war", accept: ["armed fighting between countries", "a military campaign"], example: { jp: "उस साल दो देशों के बीच युद्ध हुआ।", en: "There was a war between two countries that year." }, drill: { jp: "युद्ध में बहुत लोग मरते हैं", en: "Many people die in a war" }, hint: "YUDDH, MASCULINE, with the द्ध conjunct of unit 6 — द with ध stacked under it, read **ddh**. War between countries, where लड़ना is the fighting itself and फ़ौज does it. ⚠️ THE OTHER HINDI WORD FOR WAR IS जंग, AND THIS COURSE DOES NOT TEACH THAT SENSE: जंग is carded in the workshop unit at the very end of the language meaning RUST on metal, which is its other and unrelated sense. You will meet जंग for war in a newspaper, so know both — and note the gender flips with the word: युद्ध हुआ, but जंग हुई." },
        { id: "hi-u50l4-taaj", type: "vocab", front: "ताज", reading: "taaj", meaning: "a crown", accept: ["the headpiece a ruler wears", "the symbol of a throne"], example: { jp: "राजा का ताज बहुत भारी था।", en: "The king's crown was very heavy." }, drill: { jp: "इस ताज की कीमत बहुत है", en: "This crown is worth a great deal" }, hint: "TAAJ, MASCULINE, all DENTAL त. The crown a राजा or रानी wears, and by extension the throne itself — ताज छोड़ना, to give up the crown. ⚠️ IT WHOLE-WORD-MATCHES INSIDE ताज़ा, freshly made, across the NUKTA, which the router does not read as a word break — so the two never share a sentence. खिताब is a title you are awarded; a ताज you inherit." },
      ],
    },
  ],
};
