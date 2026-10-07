// HI Unit 121 — जीवविज्ञान और कोशिका ("Biology and the cell") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 2 (u111–u123). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, unit111.js §C1–§C6.
//
// 🚨 GENERIC SLOT, THEME ASSIGNED CENTRALLY (scaffold: "Vocabulary 1 (B2)").
// `lint:curriculum`'s SCAFFOLD_TITLE_PATTERNS hard-errors on that title, and at
// A2 exactly this shape cost **104 re-authored cards across three languages**,
// because two blocks rethemed generic slots into the same territory
// independently — in the worst case shipping the identical title and 16 shared
// words (RUNBOOK §0). So all sixteen B2 `Vocabulary N` slots were allocated
// BEFORE any block authored a card. This one is **biology and the cell, probed at
// 3 of 18 taken** against all 2,270 non-glyph hi fronts, 2026-10-06.
//
// MEASURED HOLE. u87 विज्ञान और शोध took science as a PRACTICE — शोध, नमूना,
// प्रयोगशाला, परिकल्पना, सूत्र, रसायन, ऊर्जा — plus four bare objects (कोशिका,
// अणु, परमाणु, जीव) and the astronomy nouns (ग्रह, खगोल, दूरबीन, ब्रह्मांड).
// u55 and u75 took the living world you can see (जानवर, पौधा, जड़, प्रजाति,
// अंकुर, कीड़ा). **What the corpus had no word for is the INSIDE of a living
// thing**: no nucleus, no membrane, no tissue, no chromosome, no gene, no
// metabolism, no respiration, no digestion, no excretion, no photosynthesis, no
// circulation, no heredity, no mutation, no adaptation, no evolution, no embryo,
// no cell division, no bacterium, no virus, no parasite, no fungus, no algae and
// no classification. A learner could name a plant and not say it breathes.
//
// ⚠️ THE THREE PROBE WORDS ALREADY TAKEN, AND WHAT THAT FORCED:
//   • **कोशिका (u87) IS TAKEN AND IS IN THIS UNIT'S TITLE.** §C4 allows that — a
//     title is not a front — and the slot was assigned with the title already
//     written. **DO NOT "FIX" IT BY RE-CARDING कोशिका.** What this unit cards is
//     what is INSIDE one: केंद्रक, झिल्ली, and the ऊतक one level up.
//   • **जीव (u87) and प्रजाति (u75) ARE TAKEN**, which is why l4 is built on the
//     organisms the corpus lacks (जीवाणु, विषाणु, परजीवी, कवक, शैवाल) rather than
//     on the word for an organism.
//   • **संचरण SURVIVES ONLY BECAUSE IT WAS RE-GLOSSED.** "Circulation" belongs to
//     प्रसार (u65), glossed exactly that. It is carded as "the circulation of
//     blood", which is distinct through `normalizeMeaning` and is the sense a
//     biology unit needs anyway.
//
// ⚠️ CROSS-BLOCK BOUNDARIES THAT LAND ON THIS FILE — read every one:
//   • **अनुकूलन IS THIS UNIT'S (adaptation).** Block 1's u100 wanted it and
//     dropped it. It is carded here in l3, in the biological sense only.
//   • **प्रतिरक्षा IS u112's (mine), NOT THIS UNIT'S.** Immunity is the clinic's
//     word; this unit takes ऊतक, गुणसूत्र, जीन and चयापचय in its place, which is
//     the trade the lead set and which this file honours.
//   • **u122 (mine) OWNS THE CHEMICAL REACTION, u126 (block 3) THE ENERGY SOURCE,
//     u133 (block 3) LIGHT.** This unit's प्रकाशसंश्लेषण touches all three and
//     cards none of their words: no सौर, no किरण, no अभिक्रिया.
//
// GENDER (§4), named in every hint:
//   ⚠️ FEMININE: झिल्ली, आनुवंशिकता.
//   ⚠️ **आनुवंशिकता IS A -ता ABSTRACT, SO FEMININE BY §B6's RULE**, and झिल्ली is
//   feminine with a long ी, which for once the ending gets right. **ONLY TWO
//   FEMININE NOUNS IN 24 CARDS** — a Sanskritic science vocabulary is almost
//   entirely masculine, which is itself worth knowing.
//   MASCULINE: जीवविज्ञान, केंद्रक, ऊतक, गुणसूत्र, जीन, चयापचय, श्वसन, पाचन,
//   उत्सर्जन, प्रकाशसंश्लेषण, संचरण, उत्परिवर्तन, अनुकूलन, क्रमविकास, भ्रूण,
//   विभाजन, जीवाणु, विषाणु, परजीवी, कवक, शैवाल, वर्गीकरण.
//   ⚠️ **परजीवी IS MASCULINE DESPITE THE -ी** — the पानी exception class (unit 1
//   §4) — and it does not change for a female parasite either.
//   ⚠️ **जीवाणु AND विषाणु BOTH END IN A SHORT ु** — jiivaanu, vishaanu, never
//   -uu — and both are masculine.
//
// ⚠️ SUBSTRING TRAPS, each checked (`isLetter` is `/\p{L}/`; a MĀTRĀ does not
// block a match, a LETTER does). THIS UNIT HAS A THREE-WAY FIRES/DOES-NOT-FIRE
// SET ON ONE TAUGHT FRONT:
//   • जीवाणु ⊃ जीव (u87l?, a living thing) — **FIRES.** The ा after जीव is a mātrā.
//   • जीवविज्ञान ⊃ जीव — **CANNOT FIRE.** The व after it is a letter.
//   • परजीवी ⊃ जीव — **CANNOT FIRE.** The र BEFORE it is a letter, and
//     `findWholeWord` needs BOTH sides clear.
//   One front, three words in one unit, three different answers. All three hints
//   say which, and **no drill in this unit contains जीव on its own.**
//   • जीवविज्ञान ⊃ विज्ञान (u6l?, science) — **CANNOT FIRE**, the व before it is a
//     letter. ⚠️ CONTRAST मनोविज्ञान (u115l3, mine), where it **CAN**, because a
//     mātrā precedes it instead.
//   • क्रमविकास ⊃ विकास (u43l?, development) — **CANNOT FIRE**, the म before it is
//     a letter · AND ⊃ क्रम (u66l?, an order) — **CANNOT FIRE**, the व after it is
//     a letter. TWO taught fronts inside one word, NEITHER matchable.
//   • विषाणु ⊃ अणु (u87l?, a molecule)? **NOT A SUBSTRING** — विषाणु has ा + ण,
//     and अणु needs the independent अ. Checked rather than assumed, because the
//     -आणु ending makes it look like one. Same for जीवाणु.
//   • प्रकाशसंश्लेषण ⊃ प्रकाश? **प्रकाश IS NOT A FRONT ANYWHERE** — रोशनी (u56) is
//     the word the course teaches — so there is nothing to match.
//
// RETROFLEX/DENTAL (§1b): ऊतक uutak, उत्सर्जन utsarjan, उत्परिवर्तन utparivartan
// and गुणसूत्र gunsuutra are DENTAL throughout; केंद्रक kendrak and वर्गीकरण
// vargiikaran end in RETROFLEX क and ण, and प्रकाशसंश्लेषण prakaashsanshleshan
// carries RETROFLEX ष. No pair in the corpus needs the doubling escape hatch —
// measured, not assumed. 24 new readings, 24 distinct, zero collisions against
// all 2,270.
// ⚠️ ONE READING PAIR IS CLOSE and is named in its hint: जीवाणु jiivaanu against
// विषाणु vishaanu — the same ending, and the two words sit two cards apart on
// purpose, because a learner who cannot tell a bacterium from a virus cannot
// read a health notice.
// LOANWORD FREE-PASS CHECK (§9): **ONE loanword, जीन**, reading "jiin" against
// the normalised gloss "gene". `checkProduce` accepts the Latin reading for any
// hi vocab item, so "jiin" would pass if the gloss normalised to it — it does
// not (jiin ≠ gene), so **no free pass**. एंज़ाइम and प्रोटीन were passed over for
// the opposite reason: both read almost exactly as their English gloss.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision rather than a
// gap: एंज़ाइम and प्रोटीन (REFUSED — §9 free-pass risk, above), पारिस्थितिकी
// (u75's field — environment), तंत्र (free, and the natural next card), जीवद्रव्य,
// शुक्राणु, जननकोशिका (REFUSED — कोशिका u87 is inside it and the gloss would
// collide), वंशानुगत (the adjective of आनुवंशिकता in l3 — one lexeme, one card).
export const HI_UNIT121 = {
  id: "hi-u121",
  lang: "hi",
  title: "जीवविज्ञान और कोशिका",
  order: 121,
  stage: "b2",
  lessons: [
    {
      id: "hi-u121l1",
      unit: 121,
      lesson: 1,
      title: "Biology, and what is inside one cell",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the field of biology and the parts of a cell: the nucleus, the membrane, the tissue above it, the chromosome and the gene.",
      items: [
        { id: "hi-u121l1-jiivvigyaan", type: "vocab", front: "जीवविज्ञान", reading: "jiivvigyaan", meaning: "biology", accept: ["the study of living things"], example: { jp: "जीवविज्ञान में सबसे पहले कोशिका पढ़ाई जाती है, क्योंकि उसके बिना बाकी कुछ समझ नहीं आता।", en: "In biology the cell is taught first of all, because without it nothing else makes sense." }, drill: { jp: "जीवविज्ञान में सबसे पहले कोशिका पढ़ाई जाती है", en: "In biology the cell is taught first of all" }, hint: "JIIV-VIG-YAAN, masculine. जीव, a living thing (unit 87), plus विज्ञान, science (unit 6) — and ज्ञ reads gya (unit 1 §2). 🚨 **BOTH TAUGHT FRONTS ARE INSIDE IT AND NEITHER CAN BE MATCHED**: जीव is followed by the letter व, and विज्ञान is preceded by the letter व. ⚠️ CONTRAST जीवाणु in lesson 4, where जीव CAN be matched." },
        { id: "hi-u121l1-kendrak", type: "vocab", front: "केंद्रक", reading: "kendrak", meaning: "the nucleus of a cell", accept: ["the middle part that holds the instructions"], example: { jp: "हर कोशिका के बीच एक केंद्रक होता है, और उसी में पूरे शरीर की जानकारी रखी रहती है।", en: "In the middle of every cell there is a nucleus, and the information for the whole body is kept in it." }, drill: { jp: "हर कोशिका के बीच एक केंद्रक होता है", en: "In the middle of every cell there is a nucleus" }, hint: "KEN-DRAK, masculine. The ं is before द, a stop, so unit 1 §1 writes it as the homorganic n, and द्र is द with a halant then र. From केंद्र, a centre — so a केंद्रक is 'the little centre', which is exactly where it sits." },
        { id: "hi-u121l1-jhillii", type: "vocab", front: "झिल्ली", reading: "jhillii", meaning: "a membrane", accept: ["a very thin skin holding something in"], example: { jp: "कोशिका के बाहर एक पतली झिल्ली होती है, जो तय करती है कि अंदर क्या जाएगा और क्या नहीं।", en: "Outside the cell there is a thin membrane, which decides what will go in and what will not." }, drill: { jp: "कोशिका के बाहर एक पतली झिल्ली होती है", en: "Outside the cell there is a thin membrane" }, hint: "JHIL-LII, feminine, which the long ी gets right. झ carries a puff of air and ल्ल is a DOUBLED consonant, doubled in the reading too (unit 1 §1). ⚠️ One of only TWO feminine nouns in this whole unit — a Sanskritic science vocabulary is almost all masculine." },
        { id: "hi-u121l1-uutak", type: "vocab", front: "ऊतक", reading: "uutak", meaning: "a tissue", accept: ["many like cells working together as one layer"], example: { jp: "एक जैसी कोशिकाएँ मिलकर ऊतक बनाती हैं, और कई ऊतक मिलकर एक पूरा हिस्सा।", en: "Alike cells together make a tissue, and several tissues together make a whole part." }, drill: { jp: "एक जैसी कोशिकाएँ मिलकर ऊतक बनाती हैं", en: "Alike cells together make a tissue" }, hint: "UU-TAK, masculine. ⚠️ THE FIRST VOWEL IS THE INDEPENDENT ऊ AND IT IS LONG — uutak, never utak — and both consonants are DENTAL. 🚨 THE WHOLE LADDER IS IN THIS LESSON: कोशिका → ऊतक → the part, and this unit cards the middle rung because the other two were already there." },
        { id: "hi-u121l1-gunsuutra", type: "vocab", front: "गुणसूत्र", reading: "gunsuutra", meaning: "a chromosome", accept: ["one of the threads a nucleus keeps its instructions on"], example: { jp: "आदमी के हर केंद्रक में कई गुणसूत्र होते हैं, और आधे माँ से आते हैं।", en: "In every human nucleus there are many chromosomes, and half come from the mother." }, drill: { jp: "हर केंद्रक में कई गुणसूत्र होते हैं", en: "In every nucleus there are many chromosomes" }, hint: "GUN-SUU-TRA, masculine. गुण, a quality, plus सूत्र, a thread (unit 87) — literally a quality-thread, which is a better name than 'chromosome'. The ण is RETROFLEX and त्र is one of unit 6's three letter-conjuncts. ⚠️ सूत्र is a taught front and CANNOT be matched here: the स is preceded by the letter ण." },
        { id: "hi-u121l1-jiin", type: "vocab", front: "जीन", reading: "jiin", meaning: "a gene", accept: ["one instruction carried on a chromosome"], example: { jp: "एक गुणसूत्र पर हज़ारों जीन होते हैं, और हर एक शरीर को कोई एक काम बताता है।", en: "There are thousands of genes on one chromosome, and each tells the body one particular job." }, drill: { jp: "एक गुणसूत्र पर हज़ारों जीन होते हैं", en: "There are thousands of genes on one chromosome" }, hint: "JIIN, masculine, with a LONG ी. ⚠️ **THE ONE LOANWORD IN THIS UNIT**, so the §9 free-pass check matters: the reading jiin and the normalised gloss 'gene' are NOT the same string, so typing the prompt back does not pass. एंज़ाइम and प्रोटीन were refused because theirs would." },
      ],
    },
    {
      id: "hi-u121l2",
      unit: 121,
      lesson: 2,
      title: "What a living thing does to stay alive",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the processes of staying alive: metabolism, respiration, digestion, excretion, photosynthesis and the circulation of the blood.",
      items: [
        { id: "hi-u121l2-chayaapachay", type: "vocab", front: "चयापचय", reading: "chayaapachay", meaning: "metabolism", accept: ["everything a body does to turn food into work"], example: { jp: "सोते समय भी चयापचय चलता रहता है, इसलिए शरीर रात में भी ऊर्जा खर्च करता है।", en: "Metabolism keeps running even while you sleep, which is why the body spends energy at night too." }, drill: { jp: "सोते समय भी चयापचय चलता रहता है", en: "Metabolism keeps running even while you sleep" }, hint: "CHA-YAA-PA-CHAY, masculine. ⚠️ The word repeats its own second half — चय … चय — which is the hook: it is built from the two opposite processes, building up and breaking down. Hindi uses it exactly as English uses 'metabolism', and it is the umbrella over the next three cards." },
        { id: "hi-u121l2-shvasan", type: "vocab", front: "श्वसन", reading: "shvasan", meaning: "respiration", accept: ["taking in air and using it inside the body"], example: { jp: "श्वसन में फेफड़ा हवा लेता है और खून उसे पूरे शरीर तक पहुँचाता है।", en: "In respiration the lung takes in air and the blood carries it to the whole body." }, drill: { jp: "श्वसन में फेफड़ा हवा लेता है", en: "In respiration the lung takes in air" }, hint: "SHVA-SAN, masculine. श्व is a stacked conjunct — श with a halant, then व — the same stack as in विश्वविद्यालय (unit 97) and आत्मविश्वास (u115l4). ⚠️ Not साँस (unit 35), which is one breath you can feel: श्वसन is the whole process, including what the blood does afterwards." },
        { id: "hi-u121l2-paachan", type: "vocab", front: "पाचन", reading: "paachan", meaning: "digestion", accept: ["breaking food down so the body can use it"], example: { jp: "पाचन पेट में शुरू नहीं होता — वह मुँह में ही शुरू हो जाता है, जब खाना चबाया जाता है।", en: "Digestion does not begin in the stomach — it begins right in the mouth, when food is chewed." }, drill: { jp: "पाचन मुँह में ही शुरू हो जाता है", en: "Digestion begins right in the mouth" }, hint: "PAA-CHAN, masculine, both consonants plain. ⚠️ The example uses चबाया, from चबाना (u117l1, mine) — the two units were authored together and this is deliberate, because digestion is where that verb earns its keep. Hindi says पाचन ठीक नहीं है of an upset stomach." },
        { id: "hi-u121l2-utsarjan", type: "vocab", front: "उत्सर्जन", reading: "utsarjan", meaning: "excretion", accept: ["putting out of the body what it cannot use"], example: { jp: "जो चीज़ शरीर काम में नहीं ला सकता, वह उत्सर्जन से बाहर चली जाती है।", en: "Whatever the body cannot put to use is sent out by excretion." }, drill: { jp: "वह चीज़ उत्सर्जन से बाहर जाती है", en: "That thing goes out by excretion" }, hint: "UT-SAR-JAN, masculine, त्स a stacked conjunct and both त and स DENTAL. ⚠️ A clinical, written word — a doctor or a textbook, never a conversation — and it covers everything the body puts out, not only one thing. The fourth of the four processes चयापचय covers." },
        { id: "hi-u121l2-prakaashsanshleshan", type: "vocab", front: "प्रकाशसंश्लेषण", reading: "prakaashsanshleshan", meaning: "photosynthesis", accept: ["a plant making food out of light"], example: { jp: "प्रकाशसंश्लेषण में पत्ता रोशनी और हवा से खाना बना लेता है, और उसी से पूरा पौधा चलता है।", en: "In photosynthesis the leaf makes food out of light and air, and the whole plant runs on that." }, drill: { jp: "पत्ता प्रकाशसंश्लेषण से खाना बना लेता है", en: "The leaf makes food by photosynthesis" }, hint: "PRA-KAASH-SAN-SHLE-SHAN, masculine — the longest front in this block at fourteen letters. प्रकाश, light, plus संश्लेषण, a putting-together. ⚠️ **प्रकाश IS NOT A FRONT ANYWHERE**: रोशनी (unit 56) is the word the course teaches, which is why the example uses रोशनी and not प्रकाश. श्ले is श with a halant then ल." },
        { id: "hi-u121l2-sancharan", type: "vocab", front: "संचरण", reading: "sancharan", meaning: "the circulation of blood", accept: ["the going round and round of blood in the body"], example: { jp: "दिल रुकने पर संचरण रुक जाता है, और कुछ मिनट में ही केंद्रक तक नुकसान पहुँचने लगता है।", en: "When the heart stops the circulation stops, and within minutes damage begins to reach as far as the nucleus." }, drill: { jp: "दिल रुकने पर संचरण रुक जाता है", en: "When the heart stops the circulation stops" }, hint: "SAN-CHA-RAN, masculine, with a RETROFLEX ण and the ं written n before च. 🚨 THE GLOSS IS DELIBERATELY NOT 'CIRCULATION': प्रसार (unit 65) is glossed exactly that, and `normalizeMeaning` would have made the two cards one (unit 1 §9). The blood sense is what a biology unit needs anyway." },
      ],
    },
    {
      id: "hi-u121l3",
      unit: 121,
      lesson: 3,
      title: "Passed on, and changed",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about inheritance and change over time: heredity, a mutation, adaptation, evolution, an embryo and the splitting of a cell.",
      items: [
        { id: "hi-u121l3-aanuvanshikataa", type: "vocab", front: "आनुवंशिकता", reading: "aanuvanshikataa", meaning: "heredity", accept: ["traits coming down from parents to children"], example: { jp: "आँखों का रंग आनुवंशिकता से तय होता है, और उसमें बच्चे की कोई मर्ज़ी नहीं चलती।", en: "The colour of the eyes is settled by heredity, and the child's own wish has no say in it." }, drill: { jp: "आँखों का रंग आनुवंशिकता से तय होता है", en: "Eye colour is settled by heredity" }, hint: "AA-NU-VAN-SHI-KA-TAA, feminine — a -ता abstract, so feminine by §B6's rule, and one of only two feminine nouns in this unit. From वंश, a lineage (unit 78). 🚨 वंश IS A STRING INSIDE IT AND THE ROUTER **CAN** MATCH IT: the ि that follows वंश is a MĀTRĀ, not a letter. Named as the hook — heredity is what a वंश passes down — and no drill in this unit contains वंश on its own." },
        { id: "hi-u121l3-utparivartan", type: "vocab", front: "उत्परिवर्तन", reading: "utparivartan", meaning: "a mutation", accept: ["a change in a gene that was not there before"], example: { jp: "एक छोटे उत्परिवर्तन से पूरा जीन बदल सकता है, और वह बदलाव अगली पीढ़ी तक चला जाता है।", en: "A small mutation can change a whole gene, and that change passes on to the next generation." }, drill: { jp: "छोटे उत्परिवर्तन से जीन बदल सकता है", en: "A small mutation can change a gene" }, hint: "UT-PA-RI-VAR-TAN, masculine. उत्-, out, plus परिवर्तन, a change — and both त are DENTAL. ⚠️ Not बदलाव (unit 69), which is any change at all: an उत्परिवर्तन is specifically in the instructions, which is why it reaches the next पीढ़ी and an ordinary बदलाव does not." },
        { id: "hi-u121l3-anukuulan", type: "vocab", front: "अनुकूलन", reading: "anukuulan", meaning: "adaptation", accept: ["a living thing fitting itself to where it lives"], example: { jp: "रेगिस्तान के पौधों में पानी बचाने का अनुकूलन लाखों साल में बना, एक पीढ़ी में नहीं।", en: "The adaptation for saving water in desert plants came about over millions of years, not in one generation." }, drill: { jp: "पौधों में पानी बचाने का अनुकूलन है", en: "Plants have an adaptation for saving water" }, hint: "A-NU-KUU-LAN, masculine, with a LONG ू. From अनुकूल, favourable — fitting yourself to what is there. 🚨 **THIS WORD IS u121's AND NOBODY ELSE'S**: block 1's u100 wanted it and dropped it, and the biological sense is the only one carded. The adjective अनुकूल is deliberately NOT carded — one lexeme, one card." },
        { id: "hi-u121l3-kramvikaas", type: "vocab", front: "क्रमविकास", reading: "kramvikaas", meaning: "evolution", accept: ["species changing step by step over very long time"], example: { jp: "क्रमविकास कोई योजना नहीं है — जो अनुकूलन काम कर जाता है, वही अगली पीढ़ी तक पहुँचता है।", en: "Evolution is no plan — whichever adaptation happens to work is the one that reaches the next generation." }, drill: { jp: "क्रमविकास कोई योजना नहीं है", en: "Evolution is no plan" }, hint: "KRAM-VI-KAAS, masculine. क्रम, an order (unit 66), plus विकास, development (unit 43) — change in a sequence. 🚨 **TWO TAUGHT FRONTS INSIDE ONE WORD AND NEITHER CAN BE MATCHED**: क्रम is followed by the letter व, and विकास is preceded by the letter म. ⚠️ Not विकास alone, which is what a country does." },
        { id: "hi-u121l3-bhruun", type: "vocab", front: "भ्रूण", reading: "bhruun", meaning: "an embryo", accept: ["a living thing in its first weeks, before it has parts"], example: { jp: "शुरू के हफ़्तों में भ्रूण में कोई हिस्सा साफ़ नहीं दिखता, सिर्फ़ कोशिकाएँ बढ़ती रहती हैं।", en: "In the first weeks no part is clearly visible in the embryo; only cells go on growing." }, drill: { jp: "शुरू में भ्रूण बहुत छोटा होता है", en: "At first the embryo is very small" }, hint: "BHRUUN, masculine — four letters and one syllable. भ्र is a stacked conjunct with a puff of air, the ू is LONG, and the ण is RETROFLEX. ⚠️ A clinical word in Hindi and a legally loaded one, because भ्रूण परीक्षण, testing an embryo, is illegal in India — worth knowing before you meet it in a headline." },
        { id: "hi-u121l3-vibhaajan", type: "vocab", front: "विभाजन", reading: "vibhaajan", meaning: "the splitting of a cell", accept: ["one cell becoming two"], example: { jp: "एक कोशिका के विभाजन से दो बनती हैं, और दोनों में वही गुणसूत्र होते हैं।", en: "From the division of one cell two are made, and both have the same chromosomes." }, drill: { jp: "एक कोशिका के विभाजन से दो बनती हैं", en: "From the division of one cell two are made" }, hint: "VI-BHAA-JAN, masculine, भ with a puff of air. From विभाग, a department (unit 97) — the same root, a dividing. 🚨 THE GLOSS NAMES THE CELL ON PURPOSE: in India विभाजन on its own means the Partition of 1947, and that is what a newspaper means by it, so the biological sense has to be said." },
      ],
    },
    {
      id: "hi-u121l4",
      unit: 121,
      lesson: 4,
      title: "The very small living things",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Tell a bacterium from a virus, name a parasite, a fungus and algae, and say how living things are classified.",
      items: [
        { id: "hi-u121l4-jiivaanu", type: "vocab", front: "जीवाणु", reading: "jiivaanu", meaning: "a bacterium", accept: ["a tiny living thing of a single cell"], example: { jp: "जीवाणु खुद एक पूरी कोशिका होता है, और दवा उसे मार सकती है।", en: "A bacterium is itself a whole cell, and medicine can kill it." }, drill: { jp: "जीवाणु खुद एक पूरी कोशिका होता है", en: "A bacterium is itself a whole cell" }, hint: "JII-VAA-NU, masculine, and ⚠️ **IT ENDS IN A SHORT ु** — jiivaanu, never jiivaanuu. The ण is RETROFLEX. 🚨 जीव (unit 87) IS A STRING INSIDE IT AND THE ROUTER **CAN** MATCH IT, because the ा after it is a MĀTRĀ — the opposite answer to जीवविज्ञान in lesson 1 and to परजीवी two cards below. ⚠️ Not अणु (unit 87): that string is not in here at all." },
        { id: "hi-u121l4-vishaanu", type: "vocab", front: "विषाणु", reading: "vishaanu", meaning: "a virus", accept: ["a thing too small to be a cell, that can only live inside one"], example: { jp: "विषाणु अपने आप कुछ नहीं कर सकता — उसे किसी कोशिका के अंदर जाना ही पड़ता है।", en: "A virus can do nothing by itself — it simply has to get inside some cell." }, drill: { jp: "विषाणु अपने आप कुछ नहीं कर सकता", en: "A virus can do nothing by itself" }, hint: "VI-SHAA-NU, masculine, short ु again and a RETROFLEX ण. 🚨 **TWO CARDS APART FROM जीवाणु ON PURPOSE AND THE READINGS RHYME** — jiivaanu against vishaanu — because a learner who cannot tell them apart cannot read a health notice: a जीवाणु is alive and दवा kills it, a विषाणु is not and दवा does not." },
        { id: "hi-u121l4-parjiivii", type: "vocab", front: "परजीवी", reading: "parjiivii", meaning: "a parasite", accept: ["a living thing that lives off another one"], example: { jp: "परजीवी अपने शरीर में कुछ नहीं बनाता, और दूसरे जीव से सब कुछ लेता है।", en: "A parasite makes nothing in its own body, and takes everything from another creature." }, drill: { jp: "परजीवी अपने शरीर में कुछ नहीं बनाता", en: "A parasite makes nothing in its own body" }, hint: "PAR-JII-VII. ⚠️ MASCULINE DESPITE THE -ी — the पानी exception class (unit 1 §4) — and it does not change for a female one. पर, another, plus जीवी, a liver-off. 🚨 जीव IS A STRING INSIDE IT AND THE ROUTER **CANNOT** MATCH IT, because the र BEFORE it is a letter: `findWholeWord` needs both sides clear." },
        { id: "hi-u121l4-kavak", type: "vocab", front: "कवक", reading: "kavak", meaning: "a fungus", accept: ["a living thing that neither moves nor makes its own food"], example: { jp: "कवक रोशनी से खाना नहीं बनाता, इसलिए वह अंधेरी और गीली जगह में भी बढ़ जाता है।", en: "A fungus does not make food from light, which is why it grows even in a dark, wet place." }, drill: { jp: "कवक अंधेरी गीली जगह में बढ़ता है", en: "A fungus grows in a dark wet place" }, hint: "KA-VAK, masculine — three letters and the simplest front in this unit. ⚠️ It covers everything from the mushroom you eat to the mould on a wall, so Hindi uses it much more widely than English uses 'fungus'. The contrast with lesson 2's प्रकाशसंश्लेषण is the point of the example." },
        { id: "hi-u121l4-shaivaal", type: "vocab", front: "शैवाल", reading: "shaivaal", meaning: "algae", accept: ["the green growth on still water"], example: { jp: "तालाब के ऊपर जो हरा शैवाल दिखता है, वह भी प्रकाशसंश्लेषण करता है।", en: "The green algae visible on top of a pond also does photosynthesis." }, drill: { jp: "तालाब के ऊपर हरा शैवाल दिखता है", en: "Green algae is visible on top of the pond" }, hint: "SHAI-VAAL, masculine. The ै is the ai of unit 3 — one sound, so shai and never sha-i. ⚠️ Hindi treats it as a MASS: एक शैवाल is odd, the way 'one algae' is in English. It makes its own food, which puts it on the opposite side of the line from कवक one card above." },
        { id: "hi-u121l4-vargiikaran", type: "vocab", front: "वर्गीकरण", reading: "vargiikaran", meaning: "classification", accept: ["sorting living things into named groups"], example: { jp: "वर्गीकरण के बिना कोई नई प्रजाति दर्ज नहीं की जा सकती, क्योंकि उसे कहीं रखना ही पड़ता है।", en: "Without classification no new species can be recorded, because it has to be put somewhere." }, drill: { jp: "वर्गीकरण के बिना नई प्रजाति दर्ज नहीं होती", en: "Without classification a new species is not recorded" }, hint: "VAR-GII-KA-RAN, masculine. वर्ग, a class, plus -ीकरण, a making-into — the same -करण as in सशक्तिकरण (u114l2) and स्पष्टीकरण (u118l2), three of my units in one suffix. The ण is RETROFLEX. ⚠️ प्रजाति, a species, is unit 75's and is used here, not taught." },
      ],
    },
  ],
};
