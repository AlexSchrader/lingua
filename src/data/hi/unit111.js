// HI Unit 111 — भूगोल और धरती के रूप ("Geography and the shapes of the land") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 2 (u111–u123, minus u119–u120 which are block 1's). Everything in
// unit1.js §1–§11 binds (transliteration, gender in the hint, -ना infinitives,
// the glyph decisions, the gloss rules); unit11.js / unit21.js / unit31.js
// §A1–§A8 carry A1 and A2; unit61.js §B1–§B9 carry B1 and ALSO BIND HERE —
// in particular §B1 (the visarga ः is banned from every front), §B2 (ृ stays
// uncarded and is taught in the hint), §B4 (gloss space is the tightest resource
// and `lint:curriculum` will not save you) and §B5 (no two-word fronts).
// This file is block 2's lead file for the band; §C1–§C6 below are what block 2
// adds or decides.
//
// ═════════════════════════════════════════════════════════════════════════════
// BLOCK 2's B2 CONVENTIONS
// ═════════════════════════════════════════════════════════════════════════════
//
// C1. 🚨 NO HYPHEN AND NO SPACE IN A B2 FRONT. Settled band-wide by the B2 lead
//     and measured: **zero of 2,270 hi fronts contain a hyphen**, and the only
//     five containing a space are A1 fixed phrases. §B5 already bans a two-word
//     front because it breaks `findWholeWord` in src/store/cardRouting.js, so the
//     drill would not route. A HYPHEN IS A COINAGE SMELL, NOT A WORD. Fronts
//     already struck band-wide under this rule: दंड-विधान · संधि-पत्र ·
//     कलाकार-मंडली · मंदी-काल · अनुमति-पत्र · सुरक्षित-दायरा · प्रकाशित-स्रोत ·
//     छल-कपट · शायद-ही. Block 2 added none.
//
// C2. EVERY B2 UNIT IS 4 LESSONS × EXACTLY 6 CARDS (§B7 unchanged), `cefr: "B2"`
//     on every lesson, `stage: "b2"` on the unit. 24 cards, no exceptions.
//
// C3. 🚨 FIVE OF BLOCK 2's TEN PRE-TITLED SLOTS WERE DEAD AS TITLED, AND THE
//     LEAD RE-ASSIGNED THEM BEFORE A CARD WAS WRITTEN. Recorded here so no later
//     seat "restores" a scaffold title into a field B1 already spent. Each number
//     is `taken/probed` against the real 2,270-word corpus:
//       u111 भूगोल और धरती के रूप   5/18  ← RETHEMED off "Environment and the
//            global": u75 पर्यावरण और जलवायु owns environment, u92 owns the global.
//       u112 अस्पताल और इलाज        6/18  ← NARROWED: u35 + u77 + u84 own the body
//            and illness. This slot is the CLINIC — the building and the procedure.
//       u113 भाषा और अनुवाद         2/18  ← RETHEMED: "Education and research" is
//            DEAD (u97 उच्च शिक्षा + u87 विज्ञान और शोध).
//       u114 विकास और जनसेवा        3/18  ← RETHEMED: "Media and narrative" is
//            DEAD (u44 + u65 + u74 + u91).
//       u115 मन का स्वास्थ्य         2/18  ← RETHEMED: "Emotion, subtle and mixed"
//            is DEAD (u52 दिल का हाल + u67 मन के बारीक रंग).
//       u116/u117/u118 KEPT as grammar slots, each narrowed above the B1 unit that
//            already owns its base layer (u47 · u79+u80+u83 · u39+u64+u81).
//       u121 जीवविज्ञान और कोशिका    3/18 · u122 रसायन और पदार्थ 3/18 ·
//       u123 अंतरिक्ष और खगोल        6/18  ← the three generic `Vocabulary N (B2)`
//            slots, allocated centrally so two blocks could not invent one theme
//            twice. RUNBOOK §0 measured that failure at 104 re-authored cards.
//
// C4. ⚠️ A UNIT TITLE MAY NAME A WORD THE UNIT DOES NOT TEACH, AND THREE OF
//     BLOCK 2's DO. भूगोल is taught at u28 (a school subject), अनुवाद at u91,
//     कोशिका at u87 and खगोल at u87. The titles were assigned centrally and are
//     binding; a title is not a front, and `lint:curriculum` checks only that it
//     is not a scaffold placeholder. Do not "fix" them by re-carding the word.
//
// C5. 🚨 THE NUKTA MUST BE DECOMPOSED — ज + ़ (U+091C U+093C), never the
//     precomposed ज़ (U+095B). Identical on screen, different strings. One
//     precomposed word made `scope-hi.mjs` report it untaught in six sentences
//     while `validate:content` stayed green. Applies to क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़.
//     ⚠️ AND IT IS WHY गुफ़ा WAS REFUSED IN THIS UNIT: गुफा (u54, "a cave") is the
//     SAME WORD spelled without the nukta, so `front-taken.mjs` passed it and
//     `gloss-taken.mjs` caught it. Same class as दुगना/दुगुना (§B4) and as
//     जाहिर/ज़ाहिर, which cost u118 a card. **Probe the gloss, not just the front.**
//
// C6. INFLECTION HOMOGRAPHS NO TOOL CATCHES, and this unit lost a card to one.
//     `front-taken.mjs` compares STRINGS, so it cannot see that a candidate is
//     already the inflected form of a taught verb or adjective. **खाई, "a ravine",
//     WAS REFUSED**: it is the feminine perfective of खाना, u13's verb ("she ate"),
//     so the card would have graded one Hindi word two ways. संगम replaced it.
//     The standing list is कड़ी (fem. of कड़ा u19) · लड़ी (fem. perf. of लड़ना u48) ·
//     मानो (imperative of मानना u26) · खाई. Check every candidate against the
//     -ा/-ी/-े/-ो paradigm of every taught verb and -आ adjective BY HAND.
//
// ─────────────────────────────────────────────────────────────────────────────
// THIS UNIT (u111) — भूगोल और धरती के रूप
// ─────────────────────────────────────────────────────────────────────────────
// MEASURED HOLE. A1 and A2 taught the landscape a learner can point at — पहाड़,
// नदी, समुद्र, झील, जंगल, खेत, ज़मीन, मिट्टी, रेत, पत्थर — and B1's u54 (इतिहास
// की ज़मीन) and u75 (पर्यावरण और जलवायु) added घाटी, चोटी, झरना, किनारा, नहर,
// दर्रा, चट्टान, तट, रेगिस्तान, दलदल, ज्वालामुखी, भूस्खलन, उपजाऊ, बंजर. What the
// corpus had NO word for is the SHAPE of ground and the MAP that records it: no
// plateau, no peak as a named form, no range, no foothills, no terrain, no source,
// no gulf, no peninsula, no island, no river-mouth, no coastline, no tide, no
// latitude, no longitude, no horizon, no area, no subcontinent, no boundary line,
// no glacier, no mound, no dam, no reservoir, no confluence, no archipelago.
// 5 of 18 probe words taken; the 24 below are the remainder, every one probed.
//
// ⚠️ A1-LEVEL HOLE THIS UNIT FOUND AND DELIBERATELY DID NOT FILL — NAMED FOR THE
// MERGE SEAT. **उत्तर, दक्षिण, पूर्व and पश्चिम are free across the whole
// language**: u48 taught दिशा, the abstract noun, and not one of the four
// directions. They are A1 vocabulary and do not belong in a B2 unit, and this
// unit cannot USE them in a sentence either — which is why l3's अक्षांश and
// देशांतर examples are written with ऊपर/नीचे on the map instead of north/south.
// Not a defect in this file; a gap for whoever owns A1 next. Do not quietly card
// them here.
//
// GENDER (§4), named in every hint:
//   ⚠️ FEMININE: तराई, खाड़ी, तटरेखा, सीमा, पर्वतमाला.
//   ⚠️ **तराई, खाड़ी AND तटरेखा ALL END IN A LONG ी** and all three are feminine,
//   which for once follows the rule — but पर्वतमाला is feminine in -आ, against it
//   (§B6's class), because माला, a garland, is feminine, and सीमा likewise.
//   MASCULINE: पठार, शिखर, भूभाग, उद्गम, प्रायद्वीप, द्वीप, मुहाना, ज्वार,
//   अक्षांश, देशांतर, क्षितिज, क्षेत्रफल, उपमहाद्वीप, हिमनद, टीला, बाँध, जलाशय,
//   संगम, द्वीपसमूह.
//   ⚠️ **मुहाना AND टीला ARE MASCULINE IN -आ**, which is the rule, and they are the
//   only two nouns in the unit a learner can get right from the ending alone.
//
// ⚠️ SUBSTRING TRAPS, each checked rather than assumed (`isLetter` is `/\p{L}/`,
// so a MĀTRĀ or a HALANT does not block a match but a LETTER does):
//   • द्वीपसमूह ⊃ द्वीप (l2 of this unit) — **CANNOT FIRE**: the स after it is a
//     letter. The two sit in different lessons anyway, and the compound is a
//     separate lexeme (island + group), the same call u97 made on छात्रावास ⊃ छात्र.
//   • प्रायद्वीप ⊃ द्वीप — **CANNOT FIRE**: the य before it is a letter.
//   • उपमहाद्वीप ⊃ महाद्वीप (u92l4, a continent) — **CANNOT FIRE**: the प before it
//     is a letter. Named in the hint as the hook, not hidden.
//   • तटरेखा ⊃ तट (u75) — ट is followed by र, a letter → cannot fire. ⊃ रेखा (u95)
//     — preceded by ट, a letter → cannot fire. TWO taught fronts inside one word,
//     NEITHER matchable.
//   • भूभाग ⊃ भाग? भाग is not a front anywhere, so there is nothing to match.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): पठार pathaar, टीला tiilaa, तटरेखा tatrekhaa and
// क्षितिज kshitij carry RETROFLEX ठ/ट with no dental twin in the corpus, so none
// needs the doubling escape hatch — checked, not assumed. 24 new readings, 24
// distinct, zero collisions against all 2,270 (`reading-taken.mjs`).
// LOANWORD FREE-PASS CHECK (§9): zero loanwords in this unit, so no card can
// accept its own prompt read aloud.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision rather than a
// gap: मरुद्यान (an oasis), कंदरा (REFUSED — गुफा's gloss, see §C5), जलडमरूमध्य,
// भूगर्भ, घाट, कटाव (REFUSED — u81l1 already teaches कटाई off the same root and
// u81l2 the whole -आव class, so कटाव would be a third card on कटना), शुष्क
// (REFUSED — सूखा u24 owns "arid"), ढलान (REFUSED — ढाल u95 owns "a slope" and is
// the same lexeme).
export const HI_UNIT111 = {
  id: "hi-u111",
  lang: "hi",
  title: "भूगोल और धरती के रूप",
  order: 111,
  stage: "b2",
  lessons: [
    {
      id: "hi-u111l1",
      unit: 111,
      lesson: 1,
      title: "The shape of high ground",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe high ground as a form rather than a place: call it a plateau, a peak, a range or the foothills, and say where a river rises.",
      items: [
        { id: "hi-u111l1-pathaar", type: "vocab", front: "पठार", reading: "pathaar", meaning: "a plateau", accept: ["high flat land"], example: { jp: "यह पूरा इलाका एक ऊँचा पठार है, जहाँ ज़मीन सीधी है और कोई पहाड़ नहीं दिखता।", en: "This whole area is a high plateau, where the ground is flat and no mountain is visible." }, drill: { jp: "यह इलाका एक ऊँचा पठार है", en: "This area is a high plateau" }, hint: "PA-THAAR, masculine and consonant-final. ठ is RETROFLEX — the tongue curls back — and the reading merges it with dental थ (unit 1 §1b), so pathaar is spelled with ठ and read like th. ⚠️ A पठार is not a पहाड़: it is high ground that is FLAT on top, which is why a learner can stand on one and see no mountain." },
        { id: "hi-u111l1-shikhar", type: "vocab", front: "शिखर", reading: "shikhar", meaning: "a mountain peak", accept: ["the highest point of a mountain"], example: { jp: "बर्फ़ से ढका शिखर गाँव से साफ़ दिखता है, पर वहाँ तक चढ़ाई बहुत मुश्किल है।", en: "The snow-covered peak is clearly visible from the village, but the climb up to it is very hard." }, drill: { jp: "बर्फ़ से ढका शिखर दूर से दिखता है", en: "The snow-covered peak is visible from far away" }, hint: "SHI-KHAR, masculine and consonant-final. ⚠️ Not चोटी (unit 54), which is feminine and everyday — any top of anything. शिखर is the formal, geographic word for the highest point of a named mountain, and it is the one a map or a news report uses." },
        { id: "hi-u111l1-parvatmaalaa", type: "vocab", front: "पर्वतमाला", reading: "parvatmaalaa", meaning: "a mountain range", accept: ["a chain of mountains"], example: { jp: "यह पर्वतमाला दो देशों के बीच फैली है, और उसकी हर चोटी साल भर बर्फ़ से ढकी रहती है।", en: "This mountain range runs between two countries, and every one of its peaks stays snow-covered all year." }, drill: { jp: "यह पर्वतमाला दो देशों के बीच फैली है", en: "This range runs between two countries" }, hint: "PAR-VAT-MAA-LAA. ⚠️ FEMININE DESPITE THE -आ ENDING, which usually reads masculine (unit 1 §4): it comes apart as पर्वत, a mountain, plus माला, a garland — and माला is feminine, so the whole word is. A range really is mountains strung on a thread, which is the hook. र्व is र with a halant written above the व." },
        { id: "hi-u111l1-taraaii", type: "vocab", front: "तराई", reading: "taraaii", meaning: "the foothills", accept: ["the low wet land below a range"], example: { jp: "पहाड़ के नीचे की तराई बहुत उपजाऊ है, इसलिए वहाँ के खेत साल भर हरे रहते हैं।", en: "The foothills below the mountains are very fertile, so the fields there stay green all year." }, drill: { jp: "पहाड़ के नीचे की तराई उपजाऊ है", en: "The foothills below the mountains are fertile" }, hint: "TA-RAA-II, feminine. Not a slope and not a valley: the तराई is the flat, wet, often marshy strip where a range finally ends — which is why it is the farmland of the whole region. ⚠️ The ending is two long sounds, -aa-ii, the same shape as चढ़ाई (unit 81) and कटाई." },
        { id: "hi-u111l1-bhuubhaag", type: "vocab", front: "भूभाग", reading: "bhuubhaag", meaning: "terrain", accept: ["a stretch of land taken as a whole"], example: { jp: "नक्शे पर यह भूभाग हरा दिखता है, पर यहाँ पत्थर और रेत ज़्यादा है और खेत कम।", en: "On the map this terrain looks green, but here there is more stone and sand than field." }, drill: { jp: "यह भूभाग बहुत बड़ा और सूखा है", en: "This terrain is very large and dry" }, hint: "BHUU-BHAAG, masculine, both syllables with a puff of air. भू, the earth, plus भाग, a part — the same भू as भूकंप (unit 54) and भूस्खलन (unit 75). ⚠️ Use it for the KIND of ground over a whole stretch, not for one spot: an इलाका (unit 50) is where people live, a भूभाग is what the ground itself is like." },
        { id: "hi-u111l1-udgam", type: "vocab", front: "उद्गम", reading: "udgam", meaning: "the source of a river", accept: ["the point where a river rises"], example: { jp: "इस नदी का उद्गम बर्फ़ के बीच है, और वहाँ से पानी धीरे नीचे की तरफ़ बहता है।", en: "This river's source lies up among the snow, and from there the water flows slowly downward." }, drill: { jp: "इस नदी का उद्गम पहाड़ में है", en: "This river's source is in the mountains" }, hint: "UD-GAM, masculine. द्ग is a stacked conjunct (unit 6) — द with a halant, then ग written below it. ⚠️ Only the START of a river: the other end is the मुहाना, in the next lesson. The pair is worth learning together, because Hindi geography writing uses them as opposites." },
      ],
    },
    {
      id: "hi-u111l2",
      unit: 111,
      lesson: 2,
      title: "Where water meets land",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the forms the coast takes — a gulf, a peninsula, an island, a river mouth, a coastline — and say what the tide does.",
      items: [
        { id: "hi-u111l2-khaarii", type: "vocab", front: "खाड़ी", reading: "khaarii", meaning: "a gulf of sea", accept: ["a bay"], example: { jp: "शहर एक छोटी खाड़ी के किनारे है, इसलिए यहाँ का बंदरगाह साल भर काम करता रहता है।", en: "The city sits on a small gulf, which is why its port works all year round." }, drill: { jp: "यह शहर एक छोटी खाड़ी के किनारे है", en: "This city is on the edge of a small gulf" }, hint: "KHAA-RII, feminine. ड़ is the flapped r of unit 4, read r (unit 1 §1c), so the reading is khaarii and never khaadii. ⚠️ A खाड़ी is sea reaching INTO the land, which is why ships shelter there — the opposite shape to the प्रायद्वीप in the next card." },
        { id: "hi-u111l2-praaydviip", type: "vocab", front: "प्रायद्वीप", reading: "praaydviip", meaning: "a peninsula", accept: ["land with sea on three sides"], example: { jp: "यह प्रायद्वीप तीन तरफ़ समुद्र के बीच है और सिर्फ़ एक तरफ़ से ज़मीन से मिलता है।", en: "This peninsula lies amid the sea on three sides and meets land on one side only." }, drill: { jp: "यह प्रायद्वीप तीन तरफ़ समुद्र में है", en: "This peninsula is in the sea on three sides" }, hint: "PRAAY-DVIIP, masculine. प्राय, nearly, plus द्वीप, an island — a peninsula is an ALMOST-island, which is exactly what the Hindi says. 🚨 द्वीप IS A STRING INSIDE IT AND THE ROUTER CANNOT MATCH IT, because the य before it is a letter. Contrast द्वीपसमूह in lesson 4, where the same pair also cannot fire." },
        { id: "hi-u111l2-dviip", type: "vocab", front: "द्वीप", reading: "dviip", meaning: "an island", accept: ["land with water all round it"], example: { jp: "नाव से उस द्वीप तक पहुँचने में दो घंटे लगते हैं, और वहाँ सिर्फ़ मछली पकड़ने वाले लोग रहते हैं।", en: "It takes two hours to reach that island by boat, and only fishing people live there." }, drill: { jp: "उस द्वीप तक दो घंटे लगते हैं", en: "It takes two hours to that island" }, hint: "DVIIP, masculine. द्व is a stacked conjunct (unit 6): द with a halant, then व. ⚠️ The vowel is LONG — dviip, not dvip — and the length is all that keeps it apart from nothing else in the corpus, but it is also how the word is actually said. The whole family in this unit is built on it: प्रायद्वीप, उपमहाद्वीप, द्वीपसमूह." },
        { id: "hi-u111l2-muhaanaa", type: "vocab", front: "मुहाना", reading: "muhaanaa", meaning: "the mouth of a river", accept: ["where a river meets the sea"], example: { jp: "जहाँ नदी का मुहाना समुद्र से मिलता है, वहाँ पानी धीरे बहता है और मिट्टी बहुत उपजाऊ होती है।", en: "Where the river's mouth meets the sea, the water runs slowly and the soil is very fertile." }, drill: { jp: "नदी का मुहाना समुद्र से मिलता है", en: "The river's mouth meets the sea" }, hint: "MU-HAA-NAA, masculine in -आ, which for once is the rule (unit 1 §4). From मुँह, a mouth (unit 35), so the image is the river's own mouth opening into the sea. ⚠️ The opposite end from the उद्गम in lesson 1 — Hindi uses the two as a pair." },
        { id: "hi-u111l2-tatrekhaa", type: "vocab", front: "तटरेखा", reading: "tatrekhaa", meaning: "a coastline", accept: ["the line where land meets the sea"], example: { jp: "इस देश की तटरेखा बहुत लंबी है, इसलिए यहाँ कई बड़े बंदरगाह बने हैं।", en: "This country's coastline is very long, which is why several big ports have been built here." }, drill: { jp: "इस देश की तटरेखा बहुत लंबी है", en: "This country's coastline is very long" }, hint: "TAT-RE-KHAA, feminine, because रेखा is. तट, the shore (unit 75), plus रेखा, a line (unit 95) — 🚨 TWO TAUGHT FRONTS INSIDE ONE WORD AND NEITHER CAN BE MATCHED: तट is followed by the letter र, and रेखा is preceded by the letter ट. ⚠️ A तट is where you stand; a तटरेखा is the shape the whole coast draws on a map." },
        { id: "hi-u111l2-jvaar", type: "vocab", front: "ज्वार", reading: "jvaar", meaning: "a tide", accept: ["the daily rise of the sea"], example: { jp: "ज्वार के समय पानी किनारे तक आ जाता है, और कुछ घंटों बाद वापस चला जाता है।", en: "At high tide the water comes right up to the edge, and a few hours later it goes back out." }, drill: { jp: "ज्वार के समय पानी किनारे तक आता है", en: "At tide time the water comes up to the edge" }, hint: "JVAAR, masculine. ज्व is a stacked conjunct: ज with a halant, then व. ⚠️ Not a लहर (unit 33): a लहर is one wave you can watch, ज्वार is the whole sea rising and falling twice a day, which is why it is the word a fisherman plans his morning around." },
      ],
    },
    {
      id: "hi-u111l3",
      unit: 111,
      lesson: 3,
      title: "Reading a map",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Use the vocabulary a map itself uses: latitude, longitude, the horizon, the area of a surface, a subcontinent and a boundary line.",
      items: [
        { id: "hi-u111l3-akshaansh", type: "vocab", front: "अक्षांश", reading: "akshaansh", meaning: "latitude", accept: ["the measure that says how far up or down a place lies"], example: { jp: "नक्शे पर हर जगह का अपना अक्षांश होता है, जिससे पता चलता है कि वह जगह कितनी ऊपर है या नीचे।", en: "On a map every place has its own latitude, which tells you how far up or down it lies." }, drill: { jp: "हर जगह का अपना अक्षांश होता है", en: "Every place has its own latitude" }, hint: "AK-SHAANSH, masculine. क्ष is one of the three conjuncts carded as letters in unit 6, read ksha. ⚠️ The ं before श is word-FINAL nasalisation and is written n (unit 1 §1). ⚠️ The gloss avoids 'north' on purpose: उत्तर and दक्षिण are not taught anywhere in this course yet, so this unit describes the map with ऊपर and नीचे instead." },
        { id: "hi-u111l3-deshaantar", type: "vocab", front: "देशांतर", reading: "deshaantar", meaning: "longitude", accept: ["the measure that says how far across a place lies"], example: { jp: "अक्षांश और देशांतर दोनों मिलकर नक्शे पर किसी भी जगह को ठीक से बता देते हैं।", en: "Latitude and longitude together pin down any place on the map exactly." }, drill: { jp: "अक्षांश और देशांतर नक्शे पर जगह बताते हैं", en: "Latitude and longitude give a place on the map" }, hint: "DE-SHAAN-TAR, masculine. देश, a country (unit 8), plus अंतर, a difference — literally the gap between countries, which is what a line of longitude measures. ⚠️ The ं here is before त, a stop, so unit 1 §1 writes it as the homorganic n: deshaantar." },
        { id: "hi-u111l3-kshitij", type: "vocab", front: "क्षितिज", reading: "kshitij", meaning: "the horizon", accept: ["the line where sky and land seem to meet"], example: { jp: "समुद्र पर शाम को क्षितिज साफ़ दिखता है, और सूरज उसके पीछे धीरे चला जाता है।", en: "Out on the sea the horizon is clearly visible in the evening, and the sun slips slowly behind it." }, drill: { jp: "समुद्र पर क्षितिज साफ़ दिखता है", en: "At sea the horizon is clearly visible" }, hint: "KSHI-TIJ, masculine and consonant-final. क्ष again (unit 6), here with the short ि. ⚠️ A क्षितिज is not a thing in the world — it is where the earth stops being visible, so it MOVES when you move. That is why Hindi writing reaches for it whenever it wants a limit you can never arrive at." },
        { id: "hi-u111l3-kshetraphal", type: "vocab", front: "क्षेत्रफल", reading: "kshetraphal", meaning: "the area of a surface", accept: ["how much ground a thing covers"], example: { jp: "इस झील का क्षेत्रफल हर साल कम होता जा रहा है, क्योंकि बारिश पहले जितनी नहीं होती।", en: "This lake's area is shrinking every year, because the rain is not what it used to be." }, drill: { jp: "इस झील का क्षेत्रफल बहुत बड़ा है", en: "This lake's area is very large" }, hint: "KSHE-TRA-PHAL, masculine. Two of unit 6's three letter-conjuncts in one word: क्ष and त्र. ⚠️ Not ऊँचाई or गहराई (units 45 and 95), which measure one line — क्षेत्रफल is how much FLAT ground something covers, the number a map or a land record actually prints." },
        { id: "hi-u111l3-upmahaadviip", type: "vocab", front: "उपमहाद्वीप", reading: "upmahaadviip", meaning: "a subcontinent", accept: ["a large distinct part of a continent"], example: { jp: "यह पूरा उपमहाद्वीप एक ही पर्वतमाला के नीचे है, और उसी से यहाँ की हर बड़ी नदी निकलती है।", en: "This whole subcontinent lies below a single mountain range, and every big river here rises from it." }, drill: { jp: "यह उपमहाद्वीप बहुत बड़ा है", en: "This subcontinent is very large" }, hint: "UP-MA-HAA-DVIIP, masculine — the longest front in this unit, and it comes apart cleanly into three: उप, under, plus महा, great, plus द्वीप, an island. 🚨 महाद्वीप, a continent (unit 92), IS A STRING INSIDE IT AND CANNOT BE MATCHED, because the प of उप before it is a letter. Same महा as महानगर (unit 49)." },
        { id: "hi-u111l3-siimaa", type: "vocab", front: "सीमा", reading: "siimaa", meaning: "a boundary line", accept: ["the edge of a country or a field"], example: { jp: "नक्शे पर दो देशों की सीमा एक नदी के साथ चलती है, पर ज़मीन पर वहाँ कुछ नहीं दिखता।", en: "On the map the boundary between the two countries follows a river, but on the ground nothing marks it." }, drill: { jp: "दो देशों की सीमा यहाँ से जाती है", en: "The boundary of the two countries runs from here" }, hint: "SII-MAA. ⚠️ FEMININE DESPITE THE -आ ENDING (unit 1 §4), like पर्वतमाला in lesson 1 — so it is मेरी सीमा, never मेरा. ⚠️ It is the line itself, not the land inside it: Hindi uses सीमा for a field boundary, a national border AND the limit of what somebody will put up with." },
      ],
    },
    {
      id: "hi-u111l4",
      unit: 111,
      lesson: 4,
      title: "Ice, stone and water held back",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about a glacier, a mound, a dam, a reservoir, a confluence and an archipelago — the forms water and ice leave behind or are held in.",
      items: [
        { id: "hi-u111l4-himnad", type: "vocab", front: "हिमनद", reading: "himnad", meaning: "a glacier", accept: ["a slow river of ice"], example: { jp: "यह हिमनद गरम मौसम में थोड़ा पिघलता है, और उसी पानी से नीचे की नदी भरती रहती है।", en: "This glacier melts a little in warm weather, and that same water keeps the river below it full." }, drill: { jp: "यह हिमनद गरम मौसम में पिघलता है", en: "This glacier melts in warm weather" }, hint: "HIM-NAD, masculine. हिम, snow in the literary register, plus नद, a river — a glacier is a river made of snow, which is both the etymology and the physics. ⚠️ हिम is not the everyday word: बर्फ़ (unit 16) is what a learner says, and हिम only lives inside compounds like this one." },
        { id: "hi-u111l4-tiilaa", type: "vocab", front: "टीला", reading: "tiilaa", meaning: "a mound of earth", accept: ["a small hill of sand or soil"], example: { jp: "रेगिस्तान में हवा रेत का टीला एक जगह से दूसरी जगह ले जाती है, इसलिए रास्ता हर साल बदलता है।", en: "In the desert the wind carries a sand mound from one place to another, so the route changes every year." }, drill: { jp: "रेगिस्तान में रेत का टीला बनता है", en: "In the desert a mound of sand forms" }, hint: "TII-LAA, masculine in -आ, which is the rule. ट is RETROFLEX — curl the tongue back — and the reading merges it with dental त (unit 1 §1b), so tiilaa is written with ट. ⚠️ Much smaller than a पहाड़: a टीला is something you walk over without noticing you climbed." },
        { id: "hi-u111l4-baandh", type: "vocab", front: "बाँध", reading: "baandh", meaning: "a dam", accept: ["a wall built to hold water back"], example: { jp: "नदी पर बाँध बनने के बाद नीचे के गाँवों में पानी कम पहुँचने लगा।", en: "After the dam was built on the river, less water began reaching the villages below." }, drill: { jp: "नदी पर एक बड़ा बाँध बना है", en: "A big dam has been built on the river" }, hint: "BAANDH, masculine. The ँ is the candrabindu of unit 5 and is written n (unit 1 §1), and the final ध carries a puff of air. ⚠️ Same root as बाँधना, to tie (unit 26) — a dam TIES the river up, which is the hook. Not a नहर (unit 54), which carries water away rather than stopping it." },
        { id: "hi-u111l4-jalaashay", type: "vocab", front: "जलाशय", reading: "jalaashay", meaning: "a reservoir", accept: ["a body of water held for use"], example: { jp: "बाँध के पीछे जो जलाशय बना है, उससे पूरे शहर को साल भर पानी मिलता है।", en: "The reservoir that has formed behind the dam supplies the whole city with water all year." }, drill: { jp: "बाँध के पीछे एक बड़ा जलाशय है", en: "There is a large reservoir behind the dam" }, hint: "JA-LAA-SHAY, masculine. जल, water in the literary register, plus आशय, a holding place. ⚠️ जल IS NOT CARDED ANYWHERE and will not be: पानी (unit 3) is the word a learner needs, and glossing जल as 'water (literary)' would normalise to plain 'water' and collide with it (unit 1 §9). It lives in compounds only — this one, and ज्वालामुखी's neighbours in unit 75." },
        { id: "hi-u111l4-sangam", type: "vocab", front: "संगम", reading: "sangam", meaning: "a confluence", accept: ["the place two rivers join"], example: { jp: "दो नदियों का संगम इस शहर के बीच में है, और लोग दूर से वहाँ नहाने आते हैं।", en: "The confluence of two rivers is in the middle of this city, and people come from far away to bathe there." }, drill: { jp: "दो नदियों का संगम यहाँ है", en: "The confluence of two rivers is here" }, hint: "SAN-GAM, masculine. The ं is before ग, a stop, so unit 1 §1 writes it as the homorganic n. ⚠️ Hindi uses संगम well beyond rivers — of two roads, two cultures, two lives — and in India a river संगम is usually also a place people travel to, which is why this example has them coming from far away." },
        { id: "hi-u111l4-dviipsamuuh", type: "vocab", front: "द्वीपसमूह", reading: "dviipsamuuh", meaning: "an archipelago", accept: ["a group of islands together"], example: { jp: "यह द्वीपसमूह सौ से ज़्यादा छोटे द्वीपों से बना है, और बहुत से द्वीपों पर कोई नहीं रहता।", en: "This archipelago is made up of more than a hundred small islands, and nobody lives on many of those islands." }, drill: { jp: "यह द्वीपसमूह सौ द्वीपों से बना है", en: "This archipelago is made of a hundred islands" }, hint: "DVIIP-SA-MUUH, masculine. द्वीप, an island (lesson 2), plus समूह, a group. 🚨 द्वीप IS A STRING INSIDE IT AND THE ROUTER CANNOT MATCH IT, because the स after it is a letter — the opposite answer to छात्रावास ⊃ छात्र in unit 97, where a mātrā followed and the match DID fire. One prefix, two words, and the deciding character is the next one." },
      ],
    },
  ],
};
