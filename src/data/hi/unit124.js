// HI Unit 124 — खेती और फ़सल ("Farming and the crop") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 3 (u124–u136), AND THE LEAD FILE FOR THIS BLOCK. Blocks 1 (u98–u110)
// and 2 (u111–u123) ran in parallel; the B2 band lead is block 1.
// Everything already binding still binds: unit1.js §1–§11 (transliteration,
// gender in the hint, -ना infinitives, the glyph decisions, the gloss rules),
// unit31.js §A1–§A8 (the whole of A2) and unit61.js §B1–§B9 (the whole of B1).
// What follows is only what THIS BLOCK decided or measured.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 4 (B2)"). Theme ASSIGNED CENTRALLY and
// probed at **7 of 18 taken** against the real 2,328-card corpus, 2026-10-06.
//
// ═════════════════════════════════════════════════════════════════════════════
// §C1. THE BAND-WIDE RULES THIS BLOCK WAS GIVEN, AND KEPT.
//   • NO HYPHEN AND NO SPACE IN A B2 FRONT. Measured: zero of 2,270 non-glyph hi
//     fronts contain a hyphen, and the only five with a space are A1 fixed
//     phrases. A two-word front breaks `findWholeWord` (unit61.js §B5). This
//     block spent **zero** of either.
//   • THE VISARGA ः IS BANNED FROM EVERY B2 FRONT (unit61.js §B1). Zero spent.
//   • THE NUKTA IS DECOMPOSED — ज + ़ (U+091C U+093C), never the precomposed
//     U+095B. Verified mechanically on all 13 files: zero precomposed.
//   • 4 LESSONS × EXACTLY 6 ITEMS = 24 cards per unit (unit61.js §B7).
//
// §C2. 🚨 क़ ख़ ग़ ARE NOT SPELLED WITH THE NUKTA ANYWHERE IN THIS LANGUAGE, AND
//   THIS BLOCK KEPT IT THAT WAY. unit1.js §7 declines to CARD those three glyphs
//   (Standard Hindi merges them with क ख ग and their glyph readings would collide
//   with क ख घ). MEASURED on the 2,328-card corpus 2026-10-06: **zero fronts
//   contain any of the three**, while ज़ फ़ ड़ ढ़ — the four that ARE taught, u4 —
//   appear freely. So a learner reaching u124 has never been shown क़ ख़ ग़ at all.
//   TWO FRONTS IN THIS BLOCK WOULD CONVENTIONALLY CARRY ONE AND ARE AUTHORED
//   PLAIN: **बेदखली (u128l4)** and **सुराग (u130l4)**, matching कारखाना (u60),
//   तहखाना (u94) and खरीदना (u18), which the course already spells plain.
//
// §C3. 🚨 FOUR CANDIDATES WERE REFUSED BECAUSE THE SAME LEXEME IS ALREADY TAUGHT
//   UNDER A DIFFERENT SPELLING, AND `front-taken.mjs` PASSED ALL FOUR. It
//   compares strings; a nukta or a श/स swap makes two strings of one word. The
//   probe that caught them is a NUKTA-AND-ANUSVĀRA FOLD over every front, and
//   the `gloss-taken.mjs` run caught the rest:
//       कारख़ाना  ← कारखाना@u60 "a factory"      (nukta)   — u125's TITLE word
//       तहख़ाना   ← तहखाना@u94 "a basement"       (nukta)
//       धुँधला    ← धुंधला@u56 "blurred"          (ँ vs ं)
//       गलतफ़हमी  ← गलतफहमी@u57                   (nukta)
//       गुफ़ा     ← गुफा "a cave"                  (nukta)
//       किरायेदार ← किराएदार@u86 "a tenant"       (ये vs ए)
//       किस्त/किश्त ← किस्त@u37 "an instalment"    (स vs श)
//   ⚠️ THE BRIEF THIS BLOCK WAS GIVEN LISTED किश्त AS FREE. It is not: किस्त is
//   carded at u37. Recorded here rather than left for the next reader.
//
// §C4. ⚠️ THREE READING COLLISIONS, ALL FROM §1b's RETROFLEX/DENTAL MERGE, AND
//   ONLY ONE WAS REPAIRABLE:
//       मंडी  "manddii" — मंदी@u69 already reads `mandii`. §1b's escape hatch
//               applies and मंडी is the RETROFLEX member, so it DOUBLES: carded
//               at u127l4 as `manddii`.
//       सूत   REFUSED — सूट@u40 (a suit) reads `suut`, and सूट is the retroflex
//               member, so the repair belongs to an A2 file this block may not
//               touch. u136l2 cards **सूती** instead.
//       कातना REFUSED — काटना@u26 reads `kaatnaa`, same shape. u136l2 cards
//               **बुनावट** instead.
//
// §C5. TWO SLOTS ARE DELIBERATE MERGES AND MUST NOT BE RE-SPLIT. Labour measured
//   8 free of 18 and trade 8 of 18 — each too thin for 24 cards. Labour is folded
//   into industry (u125, 18 free combined) and trade into ports (u127, 21 free).
//
// §C6. THE ृ MĀTRĀ (unit61.js §B2) STAYS UNCARDED AND THIS BLOCK SPENDS IT TWICE,
//   each hinted: **पैतृक (u128l2)** and **मृत्युदर (u134l4)**. Running total for
//   the language: कृपया (u7) + four in B1 + these two = seven.
//
// §C7. ⚠️ THE CANDRA-O ॉ IS IN PLAY AND unit1.js §7's "A2's call" HAS BEEN MADE.
//   MEASURED: डॉक्टर@u35, ऑपरेशन@u77 and कॉलोनी@u86 already card it, reading `o`.
//   This block spends it twice more — **हॉकी (u131l3)** and **ट्रॉफ़ी (u131l4)** —
//   with the mark named in both hints, because it is still carded nowhere.
//
// §C8. CROSS-BLOCK BOUNDARIES THIS BLOCK WAS GIVEN AND HONOURED, each recorded so
//   a reviewer can check rather than trust:
//       u130 owns the STREET, block 1's u102 the COURT — so न्यायाधीश, ज़मानत,
//         अपील, अभियुक्त, वादी, प्रतिवादी, जिरह, सम्मन, हिरासत, याचिका and
//         अवमानना appear in NO u124–u136 card. **हवालात (u130l4) is the physical
//         police lock-up, not हिरासत the legal state.**
//       u125 owns the WORKER, block 1's u103 the FIRM — निगम, विलय, अधिग्रहण,
//         हिस्सेदार, दिवालिया, एकाधिकार, परिचालन are not here.
//       u126 owns the SOURCE, block 2's u122 the REACTION — अभिक्रिया, उत्प्रेरक
//         and विलयन are not here. u133 owns LIGHT.
//       u134 owns the MOVEMENT OF PEOPLE, block 2's u114 the INTERVENTION —
//         **ग्रामीण is THEIRS** and appears in no card of mine, nor do कल्याण,
//         स्वच्छता, सशक्तिकरण, जागरूकता, लाभार्थी.
//       सर्वेक्षण and जनगणना → u134l1 only.   मंडी → u127l4 only.
//       राजस्व → block 1's u110 only; **u128 dropped it.**
//       आरक्षण → block 1's u109 only, caste-reservation sense. **u132 cards
//         बुकिंग instead and does not touch it.**
//       प्रतिरक्षा → block 2's u112 only.
//       बहुसंख्यक (u134l2) is glossed as THE PEOPLE, never the share, because
//         बहुमत@u63 owns "a majority".
//   ⚠️ **प्रवासन WAS REFUSED** on top of the given list: प्रवास@u92 is glossed
//   "migration" and the two are one lexeme. u134l3 cards प्रवासी (the person,
//   a separate lexeme on the same precedent as मज़दूर@u28 / मज़दूरी@u76).
//
// §C10. ⚠️ ONE TEST IS EXPECTED RED FOR THE WHOLE B2 BAND AND MUST NOT BE
//   "FIXED". `tests/unit/card-variety.test.mjs` — *hi: items with only ONE card
//   kind must not increase (target 0)*. `listen:choice`, `listen:type` and
//   `speak` all gate on `hasAudio`, and `choice:reverse` / `cloze:choice` are
//   hash-gated, so an UNVOICED card routes to `type:produce` and nothing else.
//   Block 1 measured **16 of its 24 u98 cards** failing it, and 16 → 0 the moment
//   the ids were simulated in `AUDIO_IDS`. hi sat at **400** on this test for the
//   whole of B1 and fell to **0** when B1 was voiced on 2026-10-06; ru did the
//   same from 391. Expect ~600 across all 39 B2 units, then 0 on the merge seat's
//   single audio run. 🚨 **DO NOT RAISE `SINGLE_KIND_CEILING` for hi** — that is
//   weakening a test to force green, the file is Feature CC's, and the number is
//   the only signal left that the band still needs voicing.
//
// §C11. THE ALLOCATION EVIDENCE IS COMMITTED, NOT A SCRATCH FILE. The 53-theme
//   hole measurement behind every B2 slot assignment lives in
//   `scripts/qa/theme-holes.mjs` + `theme-holes-hi.txt` on block 1's branch —
//   all 39 slots tagged with their unit, plus SPARE and DEAD. Cite that.
//   ⚠️ And `scripts/qa/hint-unit-refs.mjs` reports **112** possible stale unit
//   citations in hi against a **102** baseline: it pairs a word with the NEAREST
//   number, so "the ै is ऐ's mātrā (unit 3)" reads as a claim about an
//   unrelated front. Block 1 hand-checked ten and all ten were false positives.
//   It is a triage list, not a defect count.
//
// §C9. THIS UNIT'S MEASUREMENT. A2's u14 taught खेत and u28 किसान; u75 took
//   सिंचाई, उपजाऊ, बंजर, नहर, कुआँ and हरियाली; u81 कटाई; u21 बीज; u54 मिट्टी;
//   u55 बैल and भैंस. So the corpus could name a field, a farmer and irrigation
//   and had **no word for farming itself**, no ploughing, no sowing, no
//   transplanting, no weeding, no threshing, no crop, no yield, no grain, no
//   wheat, no paddy, no cane, no fertiliser, no pest and no fodder.
//   ⚠️ **बोना WAS NOT USED** — बुआई carries the same ground as a noun and keeps
//   this lesson's five -आई nouns in one family; and पाला was refused outright,
//   being the feminine perfective of पालना@u59.
//   ⚠️ **GENDER TRAP IN THIS UNIT:** every -आई noun here is FEMININE (जुताई,
//   बुआई, रोपाई, निराई, मड़ाई), and so is फ़सल and खाद despite being
//   consonant-final. पैदावार is FEMININE too. The masculines are अनाज, गेहूँ,
//   धान, गन्ना, गोबर, कीट, कीटनाशक, छिड़काव, भंडारण, पशुपालन, चारा, चरागाह,
//   खलिहान and भूसा.
// ═════════════════════════════════════════════════════════════════════════════
export const HI_UNIT124 = {
  id: "hi-u124",
  lang: "hi",
  title: "खेती और फ़सल",
  order: 124,
  stage: "b2",
  lessons: [
    {
      id: "hi-u124l1",
      unit: 124,
      lesson: 1,
      title: "The year's work in the field",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name farming as a living, and walk through a season in order — ploughing, sowing, transplanting, weeding and threshing.",
      items: [
        { id: "hi-u124l1-khetii", type: "vocab", front: "खेती", reading: "khetii", meaning: "farming as a livelihood", accept: ["cultivation", "working the land for a living"], example: { jp: "इस गाँव में सब लोग खेती करते हैं और अनाज बाज़ार में बेचते हैं।", en: "In this village everybody farms, and sells the grain in the market." }, drill: { jp: "इस गाँव में सब खेती करते हैं", en: "In this village everybody farms" }, hint: "KHE-TII — ⚠️ FEMININE, like every -ी abstract. Built on खेत, a field (unit 14), where -ी turns the PLACE into the ACTIVITY. 🚨 AND खेत SITS INSIDE IT WITH THE ROUTER ABLE TO MATCH IT, because the ी after it is a mātrā, not a letter — the same shape as छात्रावास and छात्र (unit 97). ⚠️ Not किसान (unit 28), who is the person: खेती is what he does all year." },
        { id: "hi-u124l1-jutaaii", type: "vocab", front: "जुताई", reading: "jutaaii", meaning: "ploughing", accept: ["the turning over of a field before sowing"], example: { jp: "बुआई से पहले खेत की जुताई होती है।", en: "Before the sowing, the field is ploughed." }, drill: { jp: "खेत की जुताई हो गई", en: "The field has been ploughed" }, hint: "JU-TAA-II — ⚠️ FEMININE, and the double ii is TWO syllables: ju-taa-ii. 🚨 FIVE -आई NOUNS IN THIS ONE LESSON, all feminine, all naming a job rather than a thing — and the course already taught three more of the family: सिंचाई (unit 75), कटाई (unit 81), सिलाई (unit 40). From जोतना, to plough, which this course does not card." },
        { id: "hi-u124l1-buaaii", type: "vocab", front: "बुआई", reading: "buaaii", meaning: "sowing", accept: ["the putting of seed into the ground"], example: { jp: "बारिश आने के बाद ही बुआई शुरू होती है।", en: "Only after the rain comes does the sowing begin." }, drill: { jp: "इस हफ़्ते बुआई शुरू होगी", en: "The sowing will start this week" }, hint: "BU-AA-II — ⚠️ FEMININE, and ⚠️ THREE VOWELS IN A ROW with no consonant between them: u-aa-ii. From बोना, to sow. ⚠️ **बोना IS NOT CARDED** and that is deliberate: this noun covers the same ground, and बोना also means 'a dwarf', which would make one front carry two unrelated glosses." },
        { id: "hi-u124l1-ropaaii", type: "vocab", front: "रोपाई", reading: "ropaaii", meaning: "transplanting of seedlings", accept: ["moving young plants into the field by hand"], example: { jp: "धान की रोपाई पानी भरे खेत में हाथ से होती है।", en: "Paddy is transplanted by hand into a flooded field." }, drill: { jp: "धान की रोपाई आज होगी", en: "The paddy will be transplanted today" }, hint: "RO-PAA-II — ⚠️ FEMININE. From रोपना, to plant out, uncarded. ⚠️ **NOT THE SAME STEP AS बुआई**, and the difference is the whole reason both are cards: बुआई puts SEED into the soil, रोपाई moves an already-grown seedling — which is why धान gets रोपाई and गेहूँ only ever gets बुआई." },
        { id: "hi-u124l1-niraaii", type: "vocab", front: "निराई", reading: "niraaii", meaning: "weeding", accept: ["pulling out the plants nobody sowed"], example: { jp: "फ़सल छोटी हो तो निराई हाथ से करनी पड़ती है।", en: "While the crop is small the weeding has to be done by hand." }, drill: { jp: "निराई हाथ से की जाती है", en: "The weeding is done by hand" }, hint: "NI-RAA-II — ⚠️ FEMININE. From निराना, uncarded. ⚠️ Read it against नाली (unit 54) — the ि here is SHORT and the आ that follows is long, so ni-raa, never nii-ra. The one job in the lesson that removes something instead of adding it." },
        { id: "hi-u124l1-maraaii", type: "vocab", front: "मड़ाई", reading: "maraaii", meaning: "threshing", accept: ["beating the grain loose from the cut crop"], example: { jp: "कटाई के बाद खलिहान में मड़ाई होती है।", en: "After the reaping, the threshing is done on the threshing floor." }, drill: { jp: "खलिहान में मड़ाई हो रही है", en: "The threshing is going on at the threshing floor" }, hint: "MA-RAA-II — ⚠️ FEMININE, and ड़ is the curled-back flap written **r** (unit 4), so ma-raa-ii and never ma-daa-ii. ⚠️ LAST STEP OF THE YEAR, and it needs two more cards from this unit to make sense: it happens in the खलिहान (l4) and what it leaves behind is भूसा (l4)." },
      ],
    },
    {
      id: "hi-u124l2",
      unit: 124,
      lesson: 2,
      title: "What the field gives",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say that this year's crop and yield were good, and name grain, wheat, paddy and sugarcane.",
      items: [
        { id: "hi-u124l2-fasal", type: "vocab", front: "फ़सल", reading: "fasal", meaning: "a crop", accept: ["a standing crop", "what one season's field yields"], example: { jp: "इस साल गेहूँ की फ़सल बहुत अच्छी हुई।", en: "This year the wheat crop was very good." }, drill: { jp: "इस साल फ़सल अच्छी हुई", en: "This year the crop was good" }, hint: "FA-SAL — ⚠️ FEMININE and consonant-final, so nothing in its shape says so: अच्छी फ़सल, not अच्छा. फ़ is the f of unit 4, a nukta on फ — fasal, never phasal. ⚠️ Not पैदावार, the next card: a फ़सल is the crop STANDING in the field, पैदावार is HOW MUCH of it came off." },
        { id: "hi-u124l2-paidaavaar", type: "vocab", front: "पैदावार", reading: "paidaavaar", meaning: "a yield from the land", accept: ["how much a field produces", "output of a crop"], example: { jp: "अच्छी खाद से पैदावार बढ़ जाती है।", en: "With good fertiliser the yield goes up." }, drill: { jp: "खाद से पैदावार बढ़ती है", en: "Fertiliser increases the yield" }, hint: "PAI-DAA-VAAR — ⚠️ FEMININE and consonant-final again: ज़्यादा पैदावार होती है. Built on पैदा, produced (unit 59). ⚠️ Not उपज (unit 62), which is what ANY process yields — a factory, an argument, a mind; पैदावार is only ever what comes off the ground." },
        { id: "hi-u124l2-anaaj", type: "vocab", front: "अनाज", reading: "anaaj", meaning: "grain as a foodstuff", accept: ["foodgrain", "wheat and rice taken together"], example: { jp: "गाँव का अनाज बाज़ार में बेचा जाता है।", en: "The village's grain is sold in the market." }, drill: { jp: "यह अनाज बाज़ार में बेचा जाएगा", en: "This grain will be sold in the market" }, hint: "A-NAAJ, masculine, consonant-final: दो बोरी अनाज. ⚠️ Not बीज (unit 21): a बीज is sown, अनाज is eaten. The whole lesson pivots on that — गेहूँ and धान are the two kinds of अनाज this course names." },
        { id: "hi-u124l2-gehuun", type: "vocab", front: "गेहूँ", reading: "gehuun", meaning: "wheat", accept: ["the wheat crop"], example: { jp: "इस खेत में हर साल गेहूँ लगाया जाता है।", en: "Wheat is planted in this field every year." }, drill: { jp: "इस खेत में गेहूँ होता है", en: "Wheat grows in this field" }, hint: "GE-HUUN, masculine. 🚨 THE ँ ON ऊ, nasalising a LONG vowel — the chandrabindu of unit 5, written n at the end of a word: gehuun. ⚠️ हूँ, 'am' (unit 7), IS THE LAST TWO LETTERS AND THE ROUTER CAN MATCH IT, because the े before it is a mātrā — pure coincidence of spelling, and worth knowing before a drill blanks the wrong half. ⚠️ The आटा a learner met in unit 36 is ground from this. Pairs against धान: गेहूँ is the dry-season crop, धान the wet one." },
        { id: "hi-u124l2-dhaan", type: "vocab", front: "धान", reading: "dhaan", meaning: "paddy", accept: ["rice still in its husk", "the rice crop in the field"], example: { jp: "धान को बहुत पानी चाहिए, गेहूँ को कम।", en: "Paddy needs a lot of water; wheat needs less." }, drill: { jp: "धान को बहुत पानी चाहिए", en: "Paddy needs a lot of water" }, hint: "DHAAN, masculine, consonant-final, with a DENTAL ध carrying a puff of air. 🚨 **NOT चावल (unit 36), AND THE DIFFERENCE IS THE CARD:** धान is the plant standing in the water with the husk still on; चावल is what is left after the husk comes off and what goes in the pot." },
        { id: "hi-u124l2-gannaa", type: "vocab", front: "गन्ना", reading: "gannaa", meaning: "sugarcane", accept: ["cane grown for sugar"], example: { jp: "गन्ना काटने में बहुत मेहनत लगती है।", en: "Cutting sugarcane takes a lot of hard work." }, drill: { jp: "गन्ना काटना भारी काम है", en: "Cutting cane is heavy work" }, hint: "GAN-NAA, masculine and regular -ा, so the oblique is गन्ने. GEMINATION in न्न — you hear both n's, the doubling rule of unit 1. ⚠️ Read it against चीनी (unit 36), which is made from it, and against गाना (unit 30), which is one n and a long aa." },
      ],
    },
    {
      id: "hi-u124l3",
      unit: 124,
      lesson: 3,
      title: "Feeding the soil, fighting the pest",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say that a field needs fertiliser, that dung makes it, and that a pest is sprayed — and name where the harvest is stored.",
      items: [
        { id: "hi-u124l3-khaad", type: "vocab", front: "खाद", reading: "khaad", meaning: "fertiliser", accept: ["manure put into the soil", "what is mixed into a field to feed it"], example: { jp: "हर साल खेत में खाद देनी पड़ती है।", en: "Fertiliser has to be put into the field every year." }, drill: { jp: "खेत में खाद देनी पड़ती है", en: "Fertiliser has to be put into the field" }, hint: "KHAAD — ⚠️ FEMININE and consonant-final: अच्छी खाद, खाद देनी पड़ती है. ख carries a puff of air. ⚠️ Read it against खाना (unit 13) and खादी (unit 136): one is food for people, this is food for the soil, and the third is cloth. Three words, one ख, three glosses." },
        { id: "hi-u124l3-gobar", type: "vocab", front: "गोबर", reading: "gobar", meaning: "cow dung", accept: ["cattle dung used as manure or fuel"], example: { jp: "गाँव में गाय के गोबर से ही खाद बनती है।", en: "In the village the fertiliser is made from cow dung itself." }, drill: { jp: "गाय के गोबर से खाद बनती है", en: "Fertiliser is made from cow dung" }, hint: "GO-BAR, masculine, consonant-final. ⚠️ Not a rude word in Hindi and not treated as one: गोबर is a resource — it is खाद, it is fuel, and it plasters a floor. The गाय of unit 55 is where it comes from." },
        { id: "hi-u124l3-kiit", type: "vocab", front: "कीट", reading: "kiit", meaning: "an insect pest", accept: ["a crop-eating insect"], example: { jp: "एक छोटा कीट पूरी फ़सल खा सकता है।", en: "One small pest can eat a whole crop." }, drill: { jp: "यह कीट फ़सल को खाता है", en: "This pest eats the crop" }, hint: "KIIT, masculine, consonant-final, and ⚠️ THE ई IS LONG: kiit, not kit. RETROFLEX ट — tongue curled back — merged to t in the reading (§1b). ⚠️ Narrower than कीड़ा (unit 21), any crawling creature: a कीट is specifically the one eating a crop, which is why the next card exists." },
        { id: "hi-u124l3-kiitnaashak", type: "vocab", front: "कीटनाशक", reading: "kiitnaashak", meaning: "a pesticide", accept: ["a spray that kills crop insects"], example: { jp: "कीट बढ़ जाएँ तो किसान कीटनाशक लाता है।", en: "If the pests increase, the farmer brings a pesticide." }, drill: { jp: "किसान कीटनाशक बाज़ार से लाता है", en: "The farmer brings the pesticide from the market" }, hint: "KIIT-NAA-SHAK, masculine. Two halves: कीट, the card before, plus नाशक, destroying. ⚠️ AND कीट SITS AT ITS START WITH THE ROUTER UNABLE TO MATCH IT, because the न that follows is a LETTER — checked, not assumed, the same way u97 checked शोधग्रंथ. ⚠️ **शक (unit 30) IS INSIDE IT AND THE ROUTER CAN MATCH THAT ONE**, because the ा before it is a mātrā — an unrelated word sharing three letters, nothing more. The -नाशक pattern is live Hindi: anything that kills X is Xनाशक." },
        { id: "hi-u124l3-chhirkaav", type: "vocab", front: "छिड़काव", reading: "chhirkaav", meaning: "spraying", accept: ["the sprinkling of a liquid over a field"], example: { jp: "दवा का छिड़काव शाम को किया जाता है।", en: "The spraying of the chemical is done in the evening." }, drill: { jp: "छिड़काव शाम को किया जाता है", en: "The spraying is done in the evening" }, hint: "CHHIR-KAAV, masculine. छ is an aspirated ch — chh, a puff of air — and ड़ is the curled-back flap written r (unit 4). From छिड़कना, to sprinkle, uncarded. ⚠️ The frame is छिड़काव करना, never छिड़काव देना." },
        { id: "hi-u124l3-bhandaaran", type: "vocab", front: "भंडारण", reading: "bhandaaran", meaning: "storage of a harvest", accept: ["keeping grain safe until it is sold"], example: { jp: "अनाज का भंडारण सूखी जगह में होना चाहिए।", en: "Grain has to be stored in a dry place." }, drill: { jp: "अनाज का भंडारण यहाँ होता है", en: "The grain is stored here" }, hint: "BHAN-DAA-RAN, masculine. भ carries a puff of air, the ं before ड is the matching retroflex nasal (§1), and the final ण is the RETROFLEX n — merged to n in the reading. ⚠️ Not गोदाम (unit 94), which is the BUILDING: भंडारण is the act of keeping it there." },
      ],
    },
    {
      id: "hi-u124l4",
      unit: 124,
      lesson: 4,
      title: "The animals and the yard",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say that a village keeps animals as well as crops, that a milch cow is worth more, and name fodder, pasture, the threshing floor and chaff.",
      items: [
        { id: "hi-u124l4-pashupaalan", type: "vocab", front: "पशुपालन", reading: "pashupaalan", meaning: "animal husbandry", accept: ["keeping livestock as a living"], example: { jp: "खेती के साथ पशुपालन भी इस गाँव का काम है।", en: "Alongside farming, keeping livestock is also this village's work." }, drill: { jp: "यह गाँव पशुपालन भी करता है", en: "This village also keeps livestock" }, hint: "PA-SHU-PAA-LAN, masculine. पशु, a beast, plus पालन, upbringing (unit 71) — 🚨 AND पालन IS A CARD, SITTING INSIDE THIS ONE WITH THE ROUTER ABLE TO MATCH IT, because the ु before it is a mātrā. Same root as पालना, to bring up (unit 59). ⚠️ AND पालना IS WHY पाली WAS REFUSED as a front in u125: पाली is its FEMININE PERFECTIVE, and a front that is another card's inflection is one card with two answers." },
        { id: "hi-u124l4-chaaraa", type: "vocab", front: "चारा", reading: "chaaraa", meaning: "fodder", accept: ["cut feed given to cattle"], example: { jp: "जानवरों को रोज़ हरा चारा देना पड़ता है।", en: "The animals have to be given green fodder every day." }, drill: { jp: "गाय को चारा देना पड़ता है", en: "The cow has to be given fodder" }, hint: "CHAA-RAA, masculine and regular -ा, so the oblique is चारे. 🚨 चार, four (unit 3), IS THIS WORD WITHOUT ITS LAST LETTER AND THE ROUTER CAN MATCH IT, because the ा after it is a mātrā — one long aa is the whole difference. ⚠️ And read it against चाय (unit 13). ⚠️ Not खाना (unit 13): खाना is what people eat, चारा is cut and carried to an animal." },
        { id: "hi-u124l4-charaagaah", type: "vocab", front: "चरागाह", reading: "charaagaah", meaning: "a pasture", accept: ["open ground kept for animals to graze"], example: { jp: "गाँव के पीछे एक बड़ा चरागाह है।", en: "There is a big pasture behind the village." }, drill: { jp: "चरागाह गाँव के पीछे है", en: "The pasture is behind the village" }, hint: "CHA-RAA-GAAH, masculine, and the final ह is HEARD — gaah, with the breath. From चरना, to graze, plus -गाह, a place: the same Persian -गाह as in दरगाह. ⚠️ Not मैदान (unit 14), which is any open ground: a चरागाह is kept for animals on purpose." },
        { id: "hi-u124l4-dudhaaruu", type: "vocab", front: "दुधारू", reading: "dudhaaruu", meaning: "kept for its milk", accept: ["milch", "that gives milk"], example: { jp: "दुधारू गाय की कीमत ज़्यादा होती है।", en: "A milch cow costs more." }, drill: { jp: "यह दुधारू गाय बहुत दूध देती है", en: "This milch cow gives a lot of milk" }, hint: "DU-DHAA-RUU — an ADJECTIVE, so it does NOT change for gender: दुधारू गाय, दुधारू भैंस. ⚠️ THE FINAL ऊ IS LONG and it is not a -ू noun ending. Built on दूध, milk (unit 13), whose ऊ SHORTENS to u when the word grows — du-dhaa-ruu, never duudh-aaruu." },
        { id: "hi-u124l4-khalihaan", type: "vocab", front: "खलिहान", reading: "khalihaan", meaning: "a threshing floor", accept: ["the swept yard where a cut crop is beaten and heaped"], example: { jp: "काटी हुई फ़सल खलिहान में रखी जाती है।", en: "The reaped crop is kept on the threshing floor." }, drill: { jp: "फ़सल खलिहान में रखी जाती है", en: "The crop is kept on the threshing floor" }, hint: "KHA-LI-HAAN, masculine, consonant-final, ख with a puff of air and ⚠️ THE ि SHORT: kha-li, not kha-lii. ⚠️ Not खेत (unit 14) and not आँगन (unit 15): a खलिहान is neither the growing field nor the house's yard, but the flat swept patch between them where मड़ाई (l1) happens." },
        { id: "hi-u124l4-bhuusaa", type: "vocab", front: "भूसा", reading: "bhuusaa", meaning: "chaff", accept: ["the dry husk left after threshing", "straw fed to cattle"], example: { jp: "मड़ाई के बाद अनाज और भूसा अलग हो जाते हैं।", en: "After the threshing, the grain and the chaff come apart." }, drill: { jp: "अनाज और भूसा अलग हो गए", en: "The grain and the chaff came apart" }, hint: "BHUU-SAA, masculine and regular -ा, भ with a puff of air and ⚠️ THE ऊ LONG: bhuu, not bhu. ⚠️ **IT CLOSES THE UNIT'S CIRCLE:** मड़ाई (l1) separates अनाज (l2) from भूसा, and the भूसा then becomes चारा — so nothing the field grows is thrown away." },
      ],
    },
  ],
};
