// HI Unit 94 — इमारत और सामग्री ("The building and its materials") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 3 (u87–u97). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 11 (B1)"). Theme ASSIGNED CENTRALLY;
// probed at **2 of 18 taken** against all 1,382 non-glyph hi fronts, 2026-10-05.
//
// 🚨 THE SLOT IS THE BUILDING PROCESS, AND A2's u60 लोहा, लकड़ी और औज़ार OWNS THE
// TOOLS AND THE MATERIALS-AS-SUBSTANCE. That boundary decides most of this unit:
//   ❌ TAKEN BY u60 AND USED HERE, NOT RE-TAUGHT: लोहा · लकड़ी · काँच · चाँदी ·
//      ईंट · कोयला · औज़ार · हथौड़ा · कील · आरी · रस्सी · तार · मिस्त्री · बढ़ई ·
//      लोहार · जंग · छेद · जोड़ना · चिपकाना · ठोकना · खोदना · घिसना · पिघलना ·
//      कारखाना. Plus इमारत, मंज़िल, गुंबद, खंडहर, मीनार (u50), फ़र्श, छत, दीवार,
//      खिड़की, सीढ़ी, आँगन (u15), मिट्टी, रेत, पत्थर (u54/u21) and नक्शा (u29).
//   ✅ MINE: what you DO to put a building up, and the wet, bulk, graded stuff that
//      goes into it — which the corpus had no word for at all.
// 🚨 AND u60 NAMED FIVE FRONTS FOR A LATER BLOCK. FOUR OF THEM LAND HERE, which is
// the hand-off working as intended: **सीमेंट · परत · पेंच · पीतल** (the fifth,
// गाँठ, is rope and not building, and is left named). u60's header is the record.
//
// ⚠️ THE TWO PROBE WORDS ALREADY TAKEN, AND WHAT THAT FORCED:
//   • इमारत (u50l4, a building) is TAKEN — so it is in the TITLE and not a card,
//     and भवन IS NOT CARDED, because `normalizeMeaning` strips a leading a/an/the
//     and "a building" is already इमारत's string (unit1.js §9).
//   • मरम्मत (u43l3, a repair) is TAKEN; दरार carries what-goes-wrong instead.
//   • प्लास्टर AND पलस्तर ARE THE SAME WORD IN TWO SPELLINGS and only one is
//     carded — पलस्तर, the Hindi-adapted form, because its reading "palastar" is
//     further from the English gloss. Two cards would have been one lexeme twice.
// ⚠️ ठेकेदार IS THIS UNIT'S, NOT u96's. It appeared in both slots' free lists; a
// ठेकेदार is a BUILDING contractor, so the building process is its home, and u96
// does not card it. Said once, here, so no later seat has to guess.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: नींव, खुदाई, ढलाई, सामग्री, गिट्टी, टाइल, परत, दरार.
//   🚨 **नींव, टाइल, परत AND दरार ARE CONSONANT-FINAL FEMININE** — नींव गहरी है,
//   परत पतली है — and nothing in the shape says so.
//   MASCULINE: निर्माण, खंभा, मचान, सीमेंट, गारा, चूना, सरिया, पलस्तर, पेंच, पीतल,
//   छज्जा, बरामदा, तहखाना, गोदाम, ठेकेदार, वास्तुकार.
//   ⚠️ **चूना ENDS IN -ना AND IS A NOUN**, the खिलौना (u41) / कारखाना (u60) /
//   नमूना (u87) class. No verb is carded in this unit; खुदाई and ढलाई are the
//   derived NOUNS of खोदना (u60l3) and ढलना — which §4's दुकान → दुकानदार precedent
//   allows and `scope-hi.mjs`'s header states explicitly ("गरम does not generate
//   गरमी … those stay separate fronts that must be taught").
//   ⚠️ **सरिया IS MASCULINE DESPITE THE -ा**… no: it is the तकिया/तौलिया class of
//   u15 — masculine in -िया, same as पहिया (u29l4). Named in its hint.
//
// ⚠️ SUBSTRING TRAPS, CHECKED AGAINST `findWholeWord`'s REAL BOUNDARY TEST.
//   THESE FIRE (a mātrā is the neighbour, and `isLetter` is `/\p{L}/` only):
//   • खुदाई ⊃ खुद (u22l4, oneself) — the ा after it is \p{M}. Completely unrelated
//     words, and this one is easy to miss by eye.
//   • गोदाम ⊃ गोद (u59l1, a lap) — the ा after it is \p{M}. Also unrelated.
//   🚨 AND ONE CROSS-BLOCK RISK THAT IS NOT MINE TO RESOLVE: **दरार ⊃ दर**, and दर
//   is on BLOCK 1's u63 list (quantity abstraction). If block 1 cards दर, the ा
//   after it is a mātrā, so the router WILL match दर inside दरार. This unit's
//   drill for दरार is clean either way; the merge seat should check that u63's दर
//   drill does not contain दरार. Flagged in the hand-back, not silently assumed.
//   THESE CANNOT FIRE, each checked rather than assumed:
//   • तहखाना ⊃ खाना (u13l1, to eat) — ह precedes, and ह IS a letter. Same shape as
//     कारखाना (u60l4), which has the identical half.
//   • परत ⊃ पर (u23l1, on) — त follows. · खुदाई vs खोदना — NOT a substring (ु ≠ ो).
//   • पलस्तर, गारा, चूना, पेंच, पीतल, छज्जा, बरामदा, मचान, खंभा, सरिया, गिट्टी,
//     निर्माण, वास्तुकार, ठेकेदार, सामग्री, सीमेंट, टाइल — contain no taught front
//     and sit inside none.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): निर्माण nirmaan, गिट्टी gittii, टाइल taail and ठेकेदार
// thekedaar are RETROFLEX (ण, ट्ट, ट, ठ) with no dental twin in the corpus; पलस्तर,
// परत, पीतल, तहखाना and दरार are DENTAL. 24 new readings, 24 distinct, zero
// collisions against all 1,382.
// 🚨 TWO READING PAIRS ARE ONE FEATURE APART AND BOTH ARE WORTH THE CARD SPACE:
//   • चूना chuunaa against छूना chhuunaa, to touch (u31l4) — **the puff of air on
//     छ is the only difference**, and this is the closest pair in the whole unit.
//   • गारा gaaraa against गाड़ी gaarii, a car (u14l3) — a PLAIN र against the
//     curled-back ड़, both written r (§1c), separated only by the final mātrā.
//   And नींव niinv against नींद niind, sleep (u20l4) — one letter at the end.
// LOANWORD FREE-PASS CHECK (§9): TWO loanwords, and both were MEASURED rather than
// waved through. `checkProduce` is an EXACT match after `normalizeReading`, with no
// fuzziness (src/store/answer.js), so: सीमेंट reads "siiment" against the gloss
// string "cement" — NOT equal; टाइल reads "taail" against "floor tile" — NOT equal.
// Zero free passes. (Contrast u93, where फ़ॉर्म reads exactly "form" and WAS refused.)
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision: गाँठ (u60's
// fifth hand-off — rope, not building), पाइप, चौखट, मेहराब, भवन (refused above),
// सुरंग is TAKEN (u33l4).
export const HI_UNIT94 = {
  id: "hi-u94",
  lang: "hi",
  title: "इमारत और सामग्री",
  order: 94,
  stage: "b1",
  lessons: [
    {
      id: "hi-u94l1",
      unit: 94,
      lesson: 1,
      title: "Putting a building up",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that construction began, that the foundation is deep, that a pillar and scaffolding went up, and that the digging and the concrete-pouring each took so many days.",
      items: [
        { id: "hi-u94l1-nirmaan", type: "vocab", front: "निर्माण", reading: "nirmaan", meaning: "construction", accept: ["building work", "the putting up of something"], example: { jp: "नए पुल का निर्माण पिछले साल शुरू हुआ।", en: "Construction of the new bridge began last year." }, drill: { jp: "यहाँ निर्माण अभी चल रहा है", en: "Construction is going on here now" }, hint: "NIR-MAAN, masculine. The र् is a half र (unit 6) and the final ण is the RETROFLEX n, tongue curled back, written plain n in a word reading (§1b). ⚠️ Not विकास (unit 43), which is development in the wide sense; निर्माण is the physical act of putting a thing up. The frame is निर्माण करना or निर्माण होना." },
        { id: "hi-u94l1-niinv", type: "vocab", front: "नींव", reading: "niinv", meaning: "the dug base of a building", accept: ["the base dug for a building"], example: { jp: "इमारत की नींव जितनी गहरी हो, वह उतनी मज़बूत है।", en: "The deeper a building's foundation, the stronger it is." }, drill: { jp: "इस इमारत की नींव बहुत गहरी है", en: "This building's foundation is very deep" }, hint: "NIINV — ⚠️ FEMININE **AND CONSONANT-FINAL**: नींव गहरी है, not गहरा. The ं nasalises the long ii (unit 5), and the व at the end is barely a vowel of its own: niinv, one syllable. ⚠️ READ IT AGAINST नींद niind, a night's sleep (unit 20) — one letter apart at the end, and nothing in common." },
        { id: "hi-u94l1-khambhaa", type: "vocab", front: "खंभा", reading: "khambhaa", meaning: "a pillar", accept: ["a post", "a column"], example: { jp: "छत को चार खंभे सँभालते हैं।", en: "Four pillars hold up the roof." }, drill: { jp: "छत को चार खंभा सँभालता है", en: "A pillar holds up the roof" }, hint: "KHAM-BHAA, masculine and regular -ा, so the plural and oblique are खंभे. ⚠️ THE ं BEFORE भ READS **m** — khambhaa, the labial nasal (unit 5) — and भ itself carries a puff of air, so you get m and then bh in a row. Of a building, and of the electricity pole in a street too." },
        { id: "hi-u94l1-machaan", type: "vocab", front: "मचान", reading: "machaan", meaning: "scaffolding", accept: ["a raised wooden platform"], example: { jp: "मज़दूर मचान पर चढ़कर दीवार बनाते हैं।", en: "The labourers climb onto the scaffolding and build the wall." }, drill: { jp: "मचान लकड़ी का बना था", en: "The scaffolding was made of wood" }, hint: "MA-CHAAN, masculine and consonant-final, so the plural is the bare form. ⚠️ Read it against मंच, a stage (unit 58) — the same two letters to start, and the ं makes all the difference: manch against machaan. In a village a मचान is also the platform built in a field to watch for animals." },
        { id: "hi-u94l1-khudaaii", type: "vocab", front: "खुदाई", reading: "khudaaii", meaning: "the digging of a site", accept: ["excavation", "digging work"], example: { jp: "नींव की खुदाई में दस दिन लगे।", en: "The digging of the foundation took ten days." }, drill: { jp: "खुदाई कल सुबह शुरू हुई", en: "The digging began yesterday morning" }, hint: "KHU-DAA-II — ⚠️ FEMININE, and the last ई is INDEPENDENT because a mātrā cannot follow a mātrā (unit 3), as in पढ़ाई (unit 34). The noun of खोदना, to dig (unit 60). 🚨 खुद, oneself (unit 22), IS A STRING INSIDE IT and the ा after it is a mātrā, so the router CAN match it — two completely unrelated words, and easy to miss by eye." },
        { id: "hi-u94l1-dhalaaii", type: "vocab", front: "ढलाई", reading: "dhalaaii", meaning: "the pouring of concrete", accept: ["casting a slab", "casting metal in a mould"], example: { jp: "छत की ढलाई एक ही दिन में पूरी हुई।", en: "The pouring of the roof slab was finished in a single day." }, drill: { jp: "छत की ढलाई एक दिन में पूरी हुई", en: "The pouring of the roof slab was finished in a day" }, hint: "DHA-LAA-II — ⚠️ FEMININE. ढ carries a puff of air, and the final ई is independent, as in खुदाई. The noun of ढलना, to be cast. ⚠️ Of CONCRETE on a site and of METAL in a मिस्त्री's (unit 60) mould — one Hindi word for both, because both are a liquid poured into a shape and left to set." },
      ],
    },
    {
      id: "hi-u94l2",
      unit: 94,
      lesson: 2,
      title: "The bag of materials",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that the material came by lorry, ask for cement, mortar, lime, crushed stone and steel rod by name, and say what each one is for.",
      items: [
        { id: "hi-u94l2-saamagrii", type: "vocab", front: "सामग्री", reading: "saamagrii", meaning: "building material", accept: ["materials", "supplies for a job"], example: { jp: "पूरी सामग्री दो दिन में गाड़ी से आ गई।", en: "All the material arrived by lorry in two days." }, drill: { jp: "पूरी सामग्री दो दिन में आ गई", en: "All the material arrived in two days" }, hint: "SAA-MAG-RII — ⚠️ FEMININE, and it is used in the SINGULAR for the whole lot: पूरी सामग्री आ गई. ग्र is a stacked conjunct (unit 6). ⚠️ Not सामान (unit 18): सामान is goods and luggage, सामग्री is the stuff a job consumes — bricks, cement, sand — and in a recipe, the ingredients." },
        { id: "hi-u94l2-siiment", type: "vocab", front: "सीमेंट", reading: "siiment", meaning: "cement", accept: ["cement powder"], example: { jp: "मिस्त्री ने एक थैला सीमेंट खोला।", en: "The mason opened a sack of cement." }, drill: { jp: "सीमेंट में रेत मिलाकर गारा बनता है", en: "Mixing sand into cement makes mortar" }, hint: "SII-MENT, masculine and consonant-final. The ं before ट is the matching RETROFLEX nasal (unit 5). ⚠️ A LOANWORD, and its reading is NOT its gloss — siiment against \"cement\" — so reading the prompt aloud will not answer the card (§9), which was checked rather than assumed. Mixed with रेत (unit 54) it becomes गारा." },
        { id: "hi-u94l2-gaaraa", type: "vocab", front: "गारा", reading: "gaaraa", meaning: "wet mortar", accept: ["mud mortar", "the wet mix that holds bricks"], example: { jp: "मिस्त्री गारा लगाकर ईंट जोड़ता है।", en: "The mason applies mortar and joins the bricks." }, drill: { jp: "गारा अभी गीला है", en: "The mortar is still wet" }, hint: "GAA-RAA, masculine and regular -ा, so the oblique is गारे. 🚨 READ IT AGAINST गाड़ी gaarii, a car (unit 14): this word has a PLAIN र, that one the CURLED-BACK ड़, and §1(c) writes both as r — so only the final mātrā separates the two readings. The wet stuff that holds ईंट (unit 60) together." },
        { id: "hi-u94l2-chuunaa", type: "vocab", front: "चूना", reading: "chuunaa", meaning: "slaked lime", accept: ["whitewash lime", "limewash"], example: { jp: "हर साल त्योहार से पहले दीवार पर चूना लगाते हैं।", en: "Every year before the festival they put lime on the wall." }, drill: { jp: "त्योहार से पहले दीवार पर चूना लगाते हैं", en: "Before the festival they put lime on the wall" }, hint: "CHUU-NAA, masculine, and ⚠️ IT ENDS IN -ना AND IS A NOUN, the खिलौना (unit 41) and नमूना (unit 87) class. 🚨 READ IT AGAINST छूना chhuunaa, to touch (unit 31) — **the puff of air on छ is the ONLY difference**, and this is the closest pair in the unit. Also against चुनना, to choose (unit 18), which has a short u." },
        { id: "hi-u94l2-gittii", type: "vocab", front: "गिट्टी", reading: "gittii", meaning: "crushed stone", accept: ["gravel", "aggregate"], example: { jp: "सड़क बनाने के लिए पहले गिट्टी डालते हैं।", en: "To make a road they first lay down crushed stone." }, drill: { jp: "गिट्टी पत्थर से बनती है", en: "Crushed stone is made from rock" }, hint: "GIT-TII — ⚠️ FEMININE. GEMINATION ट्ट, and both are RETROFLEX: the tongue curls back and you HEAR both t's, git-tii (unit 1's doubling rule). Broken-up पत्थर (unit 21) — small, graded, and mixed with सीमेंट for a slab or laid under a सड़क." },
        { id: "hi-u94l2-sariyaa", type: "vocab", front: "सरिया", reading: "sariyaa", meaning: "a steel reinforcing rod", accept: ["rebar", "an iron rod for concrete"], example: { jp: "ढलाई से पहले छत में सरिया बाँधते हैं।", en: "Before the pouring they tie steel rods into the roof." }, drill: { jp: "सरिया लोहे का होता है", en: "A steel rod is made of iron" }, hint: "SA-RI-YAA — ⚠️ MASCULINE, the -िया class of तकिया, a pillow, and तौलिया, a towel (unit 15), and पहिया, a wheel (unit 29): all masculine, none of them obviously so. Made of लोहा (unit 60) and tied with तार (unit 60) before the ढलाई, because concrete alone cannot hold a roof." },
      ],
    },
    {
      id: "hi-u94l3",
      unit: 94,
      lesson: 3,
      title: "Surfaces, and what goes wrong",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that plaster went on and tiles were laid, that paint goes on in two coats, that a crack appeared in a wall, and name a screw and the brass a handle is made of.",
      items: [
        { id: "hi-u94l3-palastar", type: "vocab", front: "पलस्तर", reading: "palastar", meaning: "a coat of plaster", accept: ["plaster on a wall", "rendering"], example: { jp: "ईंट की दीवार पर पलस्तर करने के बाद रंग होता है।", en: "After plastering a brick wall, the paint goes on." }, drill: { jp: "ईंट की दीवार पर पलस्तर होता है", en: "Plaster goes on a brick wall" }, hint: "PA-LAS-TAR, masculine and consonant-final. स्त is a stacked conjunct with a DENTAL त (unit 6). ⚠️ THIS IS THE HINDI-ADAPTED SPELLING and the only one carded — प्लास्टर is the same word with the cluster at the front, and carding both would have been one lexeme twice. The frame is पलस्तर करना." },
        { id: "hi-u94l3-taail", type: "vocab", front: "टाइल", reading: "taail", meaning: "a floor tile", accept: ["a wall tile", "a ceramic tile"], example: { jp: "रसोई के फ़र्श पर सफ़ेद टाइल लगी है।", en: "A white tile is laid on the kitchen floor." }, drill: { jp: "यह टाइल बहुत चिकनी है", en: "This tile is very smooth" }, hint: "TAA-IL — ⚠️ FEMININE, consonant-final: टाइल सफ़ेद है. RETROFLEX ट, tongue curled back, and the इ is INDEPENDENT because a mātrā cannot follow a mātrā (unit 3): taa-il, two syllables. ⚠️ A loanword whose reading, taail, is NOT its gloss, so there is no free pass (§9)." },
        { id: "hi-u94l3-parat", type: "vocab", front: "परत", reading: "parat", meaning: "a layer", accept: ["a coat of something spread on", "a stratum"], example: { jp: "रंग की दो परत लगाने पर दीवार साफ़ दिखती है।", en: "With two coats of paint the wall looks clean." }, drill: { jp: "दीवार पर रंग की दो परत लगती है", en: "Two coats of paint go on the wall" }, hint: "PA-RAT — ⚠️ FEMININE **AND CONSONANT-FINAL**: परत पतली है, not पतला. ⚠️ पर, on (unit 23), is a string at its start but the त that follows is a letter, so the router cannot match it. Not हिस्सा (unit 19): a हिस्सा is a part of a whole, a परत is one of several spread one over another." },
        { id: "hi-u94l3-daraar", type: "vocab", front: "दरार", reading: "daraar", meaning: "a crack", accept: ["a split in a surface", "a fissure"], example: { jp: "भूकंप के बाद दीवार में एक लंबी दरार आ गई।", en: "After the earthquake a long crack appeared in the wall." }, drill: { jp: "दीवार में एक लंबी दरार आ गई", en: "A long crack appeared in the wall" }, hint: "DA-RAAR — ⚠️ FEMININE, consonant-final: दरार बड़ी है. Two र's with a short a between: da-raar. ⚠️ Read it against दरवाज़ा, a door (unit 5) — the same two opening letters and no relation. The frame is दरार आना, a crack comes; of a relationship too, रिश्ते में दरार (unit 59)." },
        { id: "hi-u94l3-pench", type: "vocab", front: "पेंच", reading: "pench", meaning: "a screw", accept: ["a bolt", "a twist in a matter"], example: { jp: "बढ़ई ने चार पेंच लगाकर कुर्सी ठीक की।", en: "The carpenter put in four screws and fixed the chair." }, drill: { jp: "यह पेंच ढीला हो गया", en: "This screw has come loose" }, hint: "PENCH, masculine and consonant-final, so the plural is the bare form: चार पेंच. The ं before च is the matching nasal (unit 5). ⚠️ Not कील (unit 60): a कील you ठोकते हैं with a हथौड़ा, a पेंच you turn. 🚨 FIGURATIVELY A COMPLICATION — मामले में पेंच है, there is a catch in the matter." },
        { id: "hi-u94l3-piital", type: "vocab", front: "पीतल", reading: "piital", meaning: "brass", accept: ["the yellow metal brass"], example: { jp: "पुराने दरवाज़ों पर पीतल का ताला लगा था।", en: "Old doors had a brass lock on them." }, drill: { jp: "पुराने दरवाज़े पर पीतल लगा था", en: "There was brass on the old door" }, hint: "PII-TAL, masculine and consonant-final, with a long ii and a DENTAL त. ⚠️ Read it against पीला piilaa, yellow (unit 16) — the same opening and the colour is exactly what the metal looks like, which is the hook. The third metal the course teaches, after लोहा and चाँदी (unit 60)." },
      ],
    },
    {
      id: "hi-u94l4",
      unit: 94,
      lesson: 4,
      title: "The finished building, and who built it",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name a ledge, a veranda, a cellar and a warehouse, and say that the contractor took six months while the architect drew the plan.",
      items: [
        { id: "hi-u94l4-chhajjaa", type: "vocab", front: "छज्जा", reading: "chhajjaa", meaning: "a projecting ledge", accept: ["an awning over a window", "an overhang"], example: { jp: "खिड़की के ऊपर के छज्जे से पानी नीचे गिरता है।", en: "Water falls down from the ledge above the window." }, drill: { jp: "खिड़की के ऊपर छज्जा बना है", en: "A ledge is built above the window" }, hint: "CHHAJ-JAA, masculine and regular -ा, so the oblique is छज्जे. छ is च with a PUFF OF AIR, and ज्ज is GEMINATION — you hear both j's: chhaj-jaa. The slab that sticks out over a खिड़की (unit 15) to keep the बारिश (unit 16) off it." },
        { id: "hi-u94l4-baraamdaa", type: "vocab", front: "बरामदा", reading: "baraamdaa", meaning: "a veranda", accept: ["a covered porch"], example: { jp: "गरमी में सब लोग बरामदे में बैठते हैं।", en: "In the heat everyone sits on the veranda." }, drill: { jp: "गरमी में सब लोग बरामदा साफ़ करते हैं", en: "In the heat everyone cleans the veranda" }, hint: "BA-RAAM-DAA, masculine and regular -ा, so the oblique is बरामदे — the shape you will meet it in most: बरामदे में. ⚠️ Not आँगन (unit 15), which is open to the sky in the middle of a house; a बरामदा has a roof and runs along the outside." },
        { id: "hi-u94l4-tahkhaanaa", type: "vocab", front: "तहखाना", reading: "tahkhaanaa", meaning: "a cellar", accept: ["a basement", "an underground room"], example: { jp: "पुराने घरों में सामान तहखाने में रखा जाता था।", en: "In old houses goods used to be kept in the cellar." }, drill: { jp: "पुराने घर में तहखाना ठंडा रहता है", en: "In an old house the cellar stays cold" }, hint: "TAH-KHAA-NAA, masculine and regular -ा. Built on -खाना, a PLACE, which Hindi uses for a whole family of buildings — the same half as कारखाना, a factory (unit 60), and डाकखाना. ⚠️ खाना, to eat (unit 13), is a string inside it and the router CANNOT match it, because the ह in front is a letter." },
        { id: "hi-u94l4-godaam", type: "vocab", front: "गोदाम", reading: "godaam", meaning: "a warehouse", accept: ["a storehouse", "a godown"], example: { jp: "पूरी सामग्री पहले गोदाम में जाती है।", en: "All the material goes into the warehouse first." }, drill: { jp: "गोदाम शहर के बाहर है", en: "The warehouse is outside the city" }, hint: "GO-DAAM, masculine and consonant-final. 🚨 गोद, a lap (unit 59), IS A STRING AT ITS START and the ा after it is a mātrā, not a letter, so the router CAN match it — two entirely unrelated words. English borrowed this one back as \"godown\"." },
        { id: "hi-u94l4-thekedaar", type: "vocab", front: "ठेकेदार", reading: "thekedaar", meaning: "a building contractor", accept: ["a contractor who takes on a job"], example: { jp: "ठेकेदार ने छह महीने में पूरा काम किया।", en: "The contractor did the whole job in six months." }, drill: { jp: "ठेकेदार कल सुबह आएगा", en: "The contractor will come tomorrow morning" }, hint: "THE-KE-DAAR, masculine, and it does not change for a woman. RETROFLEX ठ — tongue curled back, then a puff. Built on ठेका, a contract taken on, plus -दार, one who holds — the same suffix as दुकानदार (unit 18) and रिश्तेदार (unit 10). He hires the मिस्त्री and the मज़दूर (units 60, 28)." },
        { id: "hi-u94l4-vaastukaar", type: "vocab", front: "वास्तुकार", reading: "vaastukaar", meaning: "an architect", accept: ["one who designs buildings"], example: { jp: "वास्तुकार ने इमारत का नक्शा बनाया।", en: "The architect drew the plan of the building." }, drill: { jp: "वास्तुकार ने नया नक्शा दिखाया", en: "The architect showed a new plan" }, hint: "VAAS-TU-KAAR, masculine, and it does not change for a woman. स्त is a stacked conjunct with a DENTAL त (unit 6). Built on वास्तु, the old science of building, plus -कार, a maker — the same suffix as कलाकार (unit 58) and चित्रकार (unit 91). ⚠️ Not इंजीनियर (unit 34): he draws the नक्शा (unit 29), the ठेकेदार builds it." },
      ],
    },
  ],
};
