// HI Unit 96 — पेशे और पद ("Trades and positions") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 3 (u87–u97). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 13 (B1)"). Theme ASSIGNED CENTRALLY;
// probed at **1 of 16 taken** against all 1,382 non-glyph hi fronts, 2026-10-05.
//
// 🚨 THIS SLOT IS THE JOB-TITLE NOUNS, AND THEY WERE RESERVED FOR IT. **BLOCK 1
// COMMITTED THAT ITS u66 "Work and process" WOULD SPEND ZERO JOB TITLES**, taking
// only the process nouns — चरण, प्रक्रिया, व्यवस्था, प्रणाली, ढाँचा, गुणवत्ता,
// उत्पादन, पद, नियोजन. None of those nine appears here, as a front or in a
// sentence. ⚠️ AND पद IS BLOCK 1's, WHICH IS WHY IT IS IN THE TITLE AND NOT A CARD:
// a title is not a front, and the unit needs the word to name itself.
//
// ⚠️ WHAT WAS ALREADY TAKEN, AND WHAT THAT FORCED:
//   • THE TRADES A2 ALREADY HAS, all USED here and none re-taught: मालिक (u34l1),
//     कर्मचारी, अफ़सर (u34l1), क्लर्क, वकील, इंजीनियर, कारीगर (u34l2), डॉक्टर, नर्स
//     (u35l1), किसान, मज़दूर, नाई, माली, डाकिया, धोबी (u28l3), दर्जी (u40l3),
//     दुकानदार (u18l3), मिस्त्री, बढ़ई, लोहार (u60l4).
//   • **ठेकेदार IS u94l4's, NOT THIS UNIT'S.** It stood in both slots' free lists;
//     a ठेकेदार is a BUILDING contractor, so it went with the building, and it is
//     said once, in u94's header and here, so no later seat has to guess.
//   • **THREE GLOSSES HAD TO BE QUALIFIED** because `normalizeMeaning` strips a
//     leading a/an/the, so these would otherwise be ONE string with a taught card
//     (unit1.js §9): अधिकारी "a government official" (अफ़सर u34l1 owns "an
//     officer") · साक्षात्कार "a formal interview" (इंटरव्यू u34l4) · पदोन्नति "a
//     promotion in rank" (तरक्की u34l4). ⚠️ AND रसोइया IS GLOSSED "a household
//     cook" for the reason §9 names out loud: "a cook" and "to cook" both normalise
//     to "cook", and पकाना (u36l3) is already carded.
//   • **निदेशक WAS REFUSED**: निर्देशक, a director, is BLOCK 2's u74, and the two
//     are one character apart. विक्रेता took the free slot.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: भर्ती, पदोन्नति.
//   ⚠️ **पदोन्नति ENDS IN A SHORT ि** — padonnati, never padonnatii.
//   🚨 **FOUR FRONTS END IN -ी AND ARE MASCULINE** — अधिकारी, चपरासी, मोची, and
//   none changes for a woman: the पानी/हाथी class of §4.
//   MASCULINE: प्रबंधक, सचिव, लेखाकार, अध्यक्ष, तकनीशियन, प्लंबर, रसोइया, पायलट,
//   चौकीदार, सलाहकार, निरीक्षक, प्रशिक्षक, शोधकर्ता, अनुवादक, विक्रेता, पेशा,
//   साझेदार, साक्षात्कार, इस्तीफ़ा.
//
// ⚠️ ONE CARD LEFT THIS UNIT IN THE B1 CROSS-BLOCK DEDUPE (2026-10-06): प्रमुख
// → kept at u62 कारण और नतीजा, block 1's earlier slot, where it is the ADJECTIVE
// ("the principal one") rather than the person. Still in scope here, and no u96
// sentence uses it. अध्यक्ष replaced it, and it keeps the l1 slot a JOB TITLE,
// which unit61.js §B9 says this unit owns and u66 spends none of. ⚠️ **अध्यक्ष is
// the ONE title in the unit that DOES have a feminine form**, अध्यक्षा — named on
// its card, because the rule just below it is that the other eighteen do not.
//   ⚠️ **NOT ONE OF THE EIGHTEEN JOB TITLES CHANGES FOR A WOMAN.** -क (प्रबंधक,
//   निरीक्षक, प्रशिक्षक, अनुवादक), -कार (लेखाकार, सलाहकार), -ता (शोधकर्ता, विक्रेता)
//   and -दार (चौकीदार, साझेदार) are all FIXED agent suffixes, exactly like नेता
//   (u42l1) and मतदाता (u88l1). That is one rule covering most of the unit.
//   ⚠️ **रसोइया IS MASCULINE IN -िया**, the तकिया / तौलिया (u15) / पहिया (u29) class.
//   No verb is carded in this unit.
//
// ⚠️ SUBSTRING TRAPS, CHECKED AGAINST `findWholeWord`'s REAL BOUNDARY TEST.
//   THESE FIRE (a mātrā is the neighbour, and `isLetter` is `/\p{L}/` only):
//   • सचिव ⊃ सच (u2l3, truth) — the ि after it is \p{M}. Entirely unrelated, and
//     this one is very easy to miss by eye.
//   • लेखाकार ⊃ लेख (u44l2, an article) — the ा after it is \p{M}. Same trap as
//     अभिलेख (u93l3) from the other side.
//   • रसोइया ⊃ रस (u13l2, juice) — the ो after it is \p{M}. Same trap as रसायन
//     (u87l1); recorded in both.
//   • चौकीदार ⊃ चौक (u50l2, a market square) — the ी after it is \p{M}. Same trap
//     as चौकोर (u95l1).
//   🚨 AND ONE CROSS-BLOCK RISK THAT IS NOT MINE TO RESOLVE: **पदोन्नति ⊃ पद**, and
//   पद is on BLOCK 1's u66 list. If block 1 cards it, the ो after it is a mātrā, so
//   the router WILL match पद inside पदोन्नति. This unit's drill is clean either way;
//   the merge seat should check that u66's पद drill does not contain पदोन्नति.
//   Flagged in the hand-back rather than silently assumed.
//   THESE CANNOT FIRE, each checked rather than assumed:
//   • सलाहकार ⊃ सलाह (u30l1) — क follows. · प्रशिक्षक ⊃ शिक्षक (u8l3) — र precedes.
//   • शोधकर्ता ⊃ शोध (u87l3) — क follows. · अनुवादक ⊃ अनुवाद (u91l3) — क follows.
//   • रसोइया vs रसोई (u15l1, a kitchen) — NOT a substring either way (इ ≠ ई).
//   • तकनीशियन vs तकनीक (u43l4) — NOT a substring. · प्रमुख vs मुख्य (u19l4) — not
//     a substring, and मुख is not a front anywhere.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): निरीक्षक niriikshak and पायलट paayalat are RETROFLEX (ष,
// ट) with no dental twin; सचिव, सलाहकार, शोधकर्ता, विक्रेता and इस्तीफ़ा are DENTAL.
// 24 new readings, 24 distinct, zero collisions against all 1,382.
// ⚠️ ONE READING PAIR IS ONE MĀTRĀ APART and is named in its hint: पेशा peshaa
// against पैसा paisaa, money (u18l1) — ए against ऐ, which unit 2 teaches as the
// closed and the open vowel.
// LOANWORD FREE-PASS CHECK (§9): THREE loanwords, all MEASURED rather than waved
// through. `checkProduce` is an EXACT match after `normalizeReading`, so:
// तकनीशियन reads "takniishiyan" against the gloss string "technician" — NOT equal;
// प्लंबर reads "plambar" against "plumber" — NOT equal; पायलट reads "paayalat"
// against "aeroplane pilot" — NOT equal. Zero free passes. (Contrast u93, where
// फ़ॉर्म reads exactly "form" and WAS refused on that measurement.)
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision: पुजारी, मुनीम
// (लेखाकार owns the field), नियुक्ति, कर्मचारी is TAKEN (u34l1), योग्यता went to
// u97l2, निदेशक REFUSED above.
export const HI_UNIT96 = {
  id: "hi-u96",
  lang: "hi",
  title: "पेशे और पद",
  order: 96,
  stage: "b1",
  lessons: [
    {
      id: "hi-u96l1",
      unit: 96,
      lesson: 1,
      title: "In the office",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name the people in an office — the manager, the secretary, the accountant, a government official, the chairman of a committee and the messenger — and say what each one does.",
      items: [
        { id: "hi-u96l1-prabandhak", type: "vocab", front: "प्रबंधक", reading: "prabandhak", meaning: "a manager", accept: ["one who runs a department", "the one in charge of running a business", "a person who manages staff"], example: { jp: "कंपनी के प्रबंधक ने हर कर्मचारी से बात की।", en: "The company's manager spoke to every employee." }, drill: { jp: "प्रबंधक ने हर कर्मचारी से बात की", en: "The manager spoke to every employee" }, hint: "PRA-BAN-DHAK, masculine, and ⚠️ IT DOES NOT CHANGE FOR A WOMAN — the -क agent suffix is fixed, like आलोचक (unit 91). प्र is a stacked conjunct (unit 6) and ध carries a puff of air. ⚠️ Not मालिक (unit 34), who OWNS the company; a प्रबंधक is paid to run it, so he is a कर्मचारी too." },
        { id: "hi-u96l1-sachiv", type: "vocab", front: "सचिव", reading: "sachiv", meaning: "a secretary", accept: ["an officer who keeps the records of a body", "the officer who writes the minutes", "the official in charge of a body's papers"], example: { jp: "समिति के सचिव ने हर बात लिखकर रखी।", en: "The committee's secretary wrote down and kept every point." }, drill: { jp: "सचिव ने सब कागज़ रखे", en: "The secretary kept all the papers" }, hint: "SA-CHIV, masculine and consonant-final. 🚨 सच, truth (unit 2), IS A STRING AT ITS START and the ि after it is a mātrā, not a letter, so the router CAN match it — two entirely unrelated words, and the easiest trap in this unit to miss by eye. The सचिव of a समिति (unit 88) keeps its papers." },
        { id: "hi-u96l1-lekhaakaar", type: "vocab", front: "लेखाकार", reading: "lekhaakaar", meaning: "an accountant", accept: ["one who keeps the books", "one who prepares accounts", "the person who handles the money records"], example: { jp: "लेखाकार ने पूरे साल का हिसाब तैयार किया।", en: "The accountant prepared the whole year's accounts." }, drill: { jp: "लेखाकार हर महीने हिसाब देखता है", en: "The accountant checks the accounts every month" }, hint: "LE-KHAA-KAAR, masculine, fixed for a woman too. -कार, a maker — the same suffix as कलाकार (unit 58) and वास्तुकार (unit 94). 🚨 लेख, an article (unit 44), IS A STRING AT ITS START and the ा after it is a mātrā, so the router CAN match it; the लेखा half here means an account, not a piece of writing." },
        { id: "hi-u96l1-adhikaarii", type: "vocab", front: "अधिकारी", reading: "adhikaarii", meaning: "a government official", accept: ["an official with authority", "a person holding office in a department", "an officer of the state"], example: { jp: "अदालत के अधिकारी ने हर दस्तावेज़ देखा।", en: "The court official looked at every document." }, drill: { jp: "अधिकारी ने दस्तावेज़ देखकर दस्तखत किए", en: "The official looked at the document and signed" }, hint: "A-DHI-KAA-RII — ⚠️ MASCULINE DESPITE THE -ी, the पानी and हाथी class of §4, and it does not change for a woman. Built on अधिकार, authority — the same root as हक (unit 32) in meaning. ⚠️ The gloss says \"government\" because अफ़सर (unit 34) already owns \"an officer\" and the grader strips a/an/the." },
        { id: "hi-u96l1-adhyaksh", type: "vocab", front: "अध्यक्ष", reading: "adhyaksh", meaning: "a chairman", accept: ["the person who presides over a body", "the chair of a committee", "the one who takes the chair"], example: { jp: "समिति के अध्यक्ष ने मीटिंग शुरू की।", en: "The chairman of the committee opened the meeting." }, drill: { jp: "अध्यक्ष अभी दफ़्तर में नहीं हैं", en: "The chairman is not in the office just now" }, hint: "A-DHYAK-SH, masculine, consonant-final: दो अध्यक्ष. ⚠️ TWO CONJUNCTS IN FOUR LETTERS — ध्य is a DENTAL ध with य stacked under it, and क्ष is one of unit 6's three, said ksh in one breath. अधि (over) plus अक्ष (an eye): the one who oversees. ⚠️ Not प्रमुख (unit 62), the head of an organisation: an अध्यक्ष PRESIDES — over a समिति (unit 88), a meeting or a party — and the post exists only while the body is sitting. The feminine is अध्यक्षा." },
        { id: "hi-u96l1-chapraasii", type: "vocab", front: "चपरासी", reading: "chapraasii", meaning: "an office messenger", accept: ["an office peon", "an errand man", "the man who carries files about"], example: { jp: "चपरासी हर कमरे में चाय और फ़ाइल पहुँचाता है।", en: "The messenger takes tea and files round to every room." }, drill: { jp: "चपरासी हर कमरे में फ़ाइल पहुँचाता है", en: "The messenger takes files round to every room" }, hint: "CHAP-RAA-SII — ⚠️ MASCULINE DESPITE THE -ी, and it does not change for a woman. Built on चपरास, the brass badge such a man once wore on his belt. The one who carries a फ़ाइल (unit 34) from one room to the next; an Indian office cannot be described without him." },
      ],
    },
    {
      id: "hi-u96l2",
      unit: 96,
      lesson: 2,
      title: "Trained hands",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Call a technician, a plumber or a cobbler, and talk about a household cook, a pilot and the night watchman.",
      items: [
        { id: "hi-u96l2-takniishiyan", type: "vocab", front: "तकनीशियन", reading: "takniishiyan", meaning: "a technician", accept: ["one trained to run machines", "a trained hand who looks after equipment", "one skilled with machinery"], example: { jp: "मशीन खराब हुई तो कंपनी ने तकनीशियन भेजा।", en: "When the machine broke the company sent a technician." }, drill: { jp: "तकनीशियन ने मशीन ठीक की", en: "The technician fixed the machine" }, hint: "TAK-NII-SHI-YAN, masculine and consonant-final, fixed for a woman too. Built off तकनीक, technology (unit 43) — ⚠️ but तकनीक is NOT a string inside it, because the क becomes श: the two cards cannot be confused. ⚠️ A loanword whose reading is not its gloss, so no free pass (§9)." },
        { id: "hi-u96l2-plambar", type: "vocab", front: "प्लंबर", reading: "plambar", meaning: "a plumber", accept: ["one who fits and mends water pipes", "one who works on taps and pipes", "the man you call when water leaks"], example: { jp: "नल से पानी टपका तो प्लंबर को बुलाया।", en: "When water dripped from the tap we called the plumber." }, drill: { jp: "प्लंबर कल सुबह आएगा", en: "The plumber will come tomorrow morning" }, hint: "PLAM-BAR, masculine and consonant-final. प्ल is a stacked conjunct (unit 6) and ⚠️ THE ं BEFORE ब READS **m** — plambar, the labial nasal (unit 5). ⚠️ Narrower than मिस्त्री (unit 60), who mends machines, wiring AND pipes; a प्लंबर only does the water." },
        { id: "hi-u96l2-mochii", type: "vocab", front: "मोची", reading: "mochii", meaning: "a cobbler", accept: ["one who mends shoes", "one whose trade is repairing footwear", "the man who stitches shoes"], example: { jp: "मोची ने सड़क के किनारे बैठकर जूता ठीक किया।", en: "The cobbler sat at the roadside and mended the shoe." }, drill: { jp: "मोची ने सड़क के किनारे जूता ठीक किया", en: "The cobbler mended the shoe at the roadside" }, hint: "MO-CHII — ⚠️ MASCULINE DESPITE THE -ी, and it does not change for a woman. ⚠️ He is to a जूता (unit 18) what a दर्जी (unit 40) is to a कमीज़ — and like the दर्जी and the नाई (unit 28), he works on the street, which is why सड़क के किनारे is the natural phrase." },
        { id: "hi-u96l2-rasoiyaa", type: "vocab", front: "रसोइया", reading: "rasoiyaa", meaning: "a household cook", accept: ["a cook employed in a house", "one paid to cook in a house", "the person who makes the family's food"], example: { jp: "बड़े घरों में रसोइया रोज़ सुबह आता है।", en: "In big houses the cook comes every morning." }, drill: { jp: "रसोइया अच्छा खाना बनाता है", en: "The cook makes good food" }, hint: "RA-SO-I-YAA — ⚠️ MASCULINE, the -िया class of तकिया and तौलिया (unit 15) and पहिया (unit 29). The इ is INDEPENDENT because a mātrā cannot follow a mātrā (unit 3). ⚠️ THE GLOSS SAYS \"HOUSEHOLD\" because \"a cook\" and \"to cook\" BOTH normalise to \"cook\", and पकाना (unit 36) is already carded (§9). 🚨 रस (unit 13) sits inside it and the ो is a mātrā, so the router can match it." },
        { id: "hi-u96l2-paayalat", type: "vocab", front: "पायलट", reading: "paayalat", meaning: "an aeroplane pilot", accept: ["one who flies an aircraft", "one who drives an aeroplane", "the person at the controls of a plane"], example: { jp: "पायलट ने उड़ान से पहले हर यंत्र देखा।", en: "The pilot looked at every instrument before the flight." }, drill: { jp: "पायलट बहुत होशियार था", en: "The pilot was very clever" }, hint: "PAA-YA-LAT, masculine and consonant-final, fixed for a woman too. RETROFLEX ट at the end, tongue curled back. ⚠️ A loanword, and its reading, paayalat, is NOT its gloss, so saying the prompt aloud will not answer the card (§9). He flies a हवाई जहाज़ (unit 9) and a ड्राइवर (unit 33) drives." },
        { id: "hi-u96l2-chaukiidaar", type: "vocab", front: "चौकीदार", reading: "chaukiidaar", meaning: "a night watchman", accept: ["a guard at a gate", "one kept to watch a place at night", "the man who keeps watch"], example: { jp: "चौकीदार पूरी रात दरवाज़े के पास रहता है।", en: "The watchman stays by the door all night." }, drill: { jp: "चौकीदार रात भर दरवाज़े के पास बैठता है", en: "The watchman sits by the door all night" }, hint: "CHAU-KII-DAAR, masculine, fixed for a woman too. -दार, one who holds — the same suffix as दुकानदार (unit 18), रिश्तेदार (unit 10) and ठेकेदार (unit 94). 🚨 चौक, a market square (unit 50), IS A STRING AT ITS START and the ी after it is a mātrā, so the router CAN match it — the same trap as चौकोर (unit 95)." },
      ],
    },
    {
      id: "hi-u96l3",
      unit: 96,
      lesson: 3,
      title: "Advising, inspecting, translating",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about an adviser, an inspector who came to the school, a trainer, a researcher, a translator and a vendor.",
      items: [
        { id: "hi-u96l3-salaahkaar", type: "vocab", front: "सलाहकार", reading: "salaahkaar", meaning: "an adviser", accept: ["a consultant", "one paid for advice", "somebody kept on to advise"], example: { jp: "सरकार के सलाहकार ने नीति पर अपनी राय दी।", en: "The government's adviser gave his opinion on the policy." }, drill: { jp: "सलाहकार ने नीति पर अपनी राय दी", en: "The adviser gave his opinion on the policy" }, hint: "SA-LAAH-KAAR, masculine, fixed for a woman too. Built straight on सलाह, advice (unit 30), plus -कार — and ⚠️ सलाह sits inside it but the क that follows is a LETTER, so the router cannot match it. He gives a राय (unit 30); the decision is somebody else's." },
        { id: "hi-u96l3-niriikshak", type: "vocab", front: "निरीक्षक", reading: "niriikshak", meaning: "an inspector", accept: ["one sent to check that rules are kept", "one who comes to inspect", "the officer who checks a place over"], example: { jp: "निरीक्षक स्कूल आया और हर कक्षा देखी।", en: "The inspector came to the school and looked at every class." }, drill: { jp: "निरीक्षक हर साल आता है", en: "The inspector comes every year" }, hint: "NI-RIIK-SHAK, masculine, fixed for a woman too. क्ष is a stacked conjunct (unit 6) reading ksh, and the ष is the RETROFLEX sh letter (§1a). ⚠️ Not परीक्षा (unit 34), an exam, though both come from the same root, to look at: a निरीक्षक inspects a place, an exam inspects a person." },
        { id: "hi-u96l3-prashikshak", type: "vocab", front: "प्रशिक्षक", reading: "prashikshak", meaning: "a trainer", accept: ["one who trains people in a skill", "one who teaches a practical skill", "the person who puts new staff through their paces"], example: { jp: "नए कर्मचारी को प्रशिक्षक ने एक हफ़्ता सिखाया।", en: "The trainer taught the new employee for a week." }, drill: { jp: "प्रशिक्षक रोज़ नया काम सिखाता है", en: "The trainer teaches new work every day" }, hint: "PRA-SHIK-SHAK, masculine, fixed for a woman too. ⚠️ शिक्षक, a teacher (unit 8), IS A STRING INSIDE IT and the router **CANNOT** match it, because the र that precedes is a letter — checked, not assumed. A शिक्षक teaches a subject in a कक्षा; a प्रशिक्षक trains a hand to do a job." },
        { id: "hi-u96l3-shodhkartaa", type: "vocab", front: "शोधकर्ता", reading: "shodhkartaa", meaning: "a researcher", accept: ["one who does academic research", "one who works on a research question", "a person engaged in study and inquiry"], example: { jp: "शोधकर्ता ने दस साल के आँकड़े जुटाए।", en: "The researcher gathered ten years of data." }, drill: { jp: "शोधकर्ता ने नया सिद्धांत बनाया", en: "The researcher made a new theory" }, hint: "SHODH-KAR-TAA, masculine, and the -ता agent suffix is FIXED for a woman, exactly like नेता (unit 42) and मतदाता (unit 88). Built on शोध, research (unit 87), plus कर्ता, a doer — ⚠️ and शोध sits inside it with the क after it being a letter, so the router cannot match it." },
        { id: "hi-u96l3-anuvaadak", type: "vocab", front: "अनुवादक", reading: "anuvaadak", meaning: "a translator", accept: ["one who turns one language into another", "one who renders a text in another tongue", "the person who does translations"], example: { jp: "अनुवादक ने पूरे उपन्यास का अनुवाद किया।", en: "The translator translated the whole novel." }, drill: { jp: "अनुवादक ने पूरा उपन्यास हिंदी में लिखा", en: "The translator wrote the whole novel in Hindi" }, hint: "A-NU-VAA-DAK, masculine, fixed for a woman too. Built on अनुवाद, a translation (unit 91), plus -क — ⚠️ and अनुवाद sits inside it with a LETTER after it, so the router cannot match it. The same noun-to-agent pair as दुकान → दुकानदार (unit 18)." },
        { id: "hi-u96l3-vikretaa", type: "vocab", front: "विक्रेता", reading: "vikretaa", meaning: "one whose trade is selling", accept: ["a vendor", "a trader", "one whose business is selling goods"], example: { jp: "बाज़ार में हर विक्रेता अपना भाव बताता है।", en: "In the market every vendor states his own rate." }, drill: { jp: "यह विक्रेता सस्ता सामान बेचता है", en: "This vendor sells cheap goods" }, hint: "VI-KRE-TAA, masculine, and the -ता agent suffix is fixed. क्र is a stacked conjunct (unit 6). ⚠️ Not दुकानदार (unit 18), who has a दुकान to stand in; a विक्रेता is whoever is selling — in a market, on a cart, on a website. The verb is still बेचना (unit 18)." },
      ],
    },
    {
      id: "hi-u96l4",
      unit: 96,
      lesson: 4,
      title: "Getting the post, and leaving it",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say what trade someone lives by, that two partners opened a shop together, and walk through recruitment, a formal interview, a promotion in rank and a resignation.",
      items: [
        { id: "hi-u96l4-peshaa", type: "vocab", front: "पेशा", reading: "peshaa", meaning: "a trade one lives by", accept: ["a profession", "a calling", "the work one makes a living by"], example: { jp: "उसके परिवार का पेशा तीन पीढ़ी से सिलाई है।", en: "His family's trade has been sewing for three generations." }, drill: { jp: "उसके परिवार का पेशा सिलाई है", en: "His family's trade is sewing" }, hint: "PE-SHAA, masculine and regular -ा, so the oblique is पेशे: पेशे से वकील, a lawyer by profession. ⚠️ READ IT AGAINST पैसा paisaa, money (unit 18) — ए against ऐ, the closed and the open vowel of unit 2. ⚠️ Not नौकरी (unit 8), which is one job with one employer; a पेशा is what you ARE." },
        { id: "hi-u96l4-saajhedaar", type: "vocab", front: "साझेदार", reading: "saajhedaar", meaning: "a business partner", accept: ["one who holds a share in a business", "one who shares a business with another", "a co-owner of a firm"], example: { jp: "दोनों साझेदार मिलकर एक दुकान खोली।", en: "The two partners opened a shop together." }, drill: { jp: "उसका साझेदार अब विदेश में है", en: "His partner is abroad now" }, hint: "SAA-JHE-DAAR, masculine, fixed for a woman too. झ carries a puff of air. Built on साझा, a share, plus -दार, one who holds — the same suffix as चौकीदार (l2) and दुकानदार (unit 18). ⚠️ Not साथी (unit 29), a companion on a journey; a साझेदार shares the मुनाफ़ा and the नुकसान (unit 37)." },
        { id: "hi-u96l4-bhartii", type: "vocab", front: "भर्ती", reading: "bhartii", meaning: "recruitment", accept: ["the taking on of staff", "enrolment", "the hiring of new people"], example: { jp: "इस साल सेना में बीस हज़ार की भर्ती हुई।", en: "This year twenty thousand were recruited into the army." }, drill: { jp: "सेना में बीस हज़ार की भर्ती हुई", en: "Twenty thousand were recruited into the army" }, hint: "BHAR-TII — ⚠️ FEMININE. भ carries a puff of air and the र् is a half र (unit 6). Built on भरना, to fill (unit 18): filling the posts. ⚠️ ALSO USED OF A HOSPITAL — मरीज़ भर्ती हुआ, the patient was admitted (unit 35) — which is the same idea of being taken onto a list." },
        { id: "hi-u96l4-saakshaatkaar", type: "vocab", front: "साक्षात्कार", reading: "saakshaatkaar", meaning: "a formal interview", accept: ["an interview for a post", "a sitting in which one is questioned", "a face-to-face questioning"], example: { jp: "नौकरी का साक्षात्कार आधे घंटे चला।", en: "The job interview went on for half an hour." }, drill: { jp: "उसका साक्षात्कार कल होगा", en: "His interview will be tomorrow" }, hint: "SAAK-SHAAT-KAAR, masculine. क्ष is a stacked conjunct (unit 6) reading ksh, followed by a DENTAL त: saak-shaat-kaar. ⚠️ The gloss says \"formal\" because इंटरव्यू (unit 34) already owns \"an interview\" and the grader strips a/an/the; the register is the difference — इंटरव्यू in speech, साक्षात्कार in print." },
        { id: "hi-u96l4-padonnati", type: "vocab", front: "पदोन्नति", reading: "padonnati", meaning: "a promotion in rank", accept: ["being raised to a higher post", "a move up to a senior post", "being given a higher rank"], example: { jp: "दस साल बाद उसे पदोन्नति मिली।", en: "After ten years he got a promotion." }, drill: { jp: "उसकी पदोन्नति इस साल हुई", en: "His promotion came this year" }, hint: "PA-DON-NA-TI — ⚠️ FEMININE, and ⚠️ THE FINAL ि IS SHORT: padonnati. GEMINATION न्न, so you hear both n's. Two halves: पद, a post, plus उन्नति, a rising. ⚠️ The gloss says \"in rank\" because तरक्की (unit 34) already owns \"a promotion\"; तरक्की is also progress in general, पदोन्नति only the step up a ladder." },
        { id: "hi-u96l4-istiifaa", type: "vocab", front: "इस्तीफ़ा", reading: "istiifaa", meaning: "a resignation", accept: ["a letter giving up a post", "giving up one's post", "the written notice that one is leaving"], example: { jp: "मंत्री ने विरोध के बाद इस्तीफ़ा दे दिया।", en: "The minister resigned after the opposition." }, drill: { jp: "मंत्री ने विरोध के बाद इस्तीफ़ा दिया", en: "The minister resigned after the opposition" }, hint: "IS-TII-FAA, masculine and regular -ा, so the oblique is इस्तीफ़े. स्त is a stacked conjunct with a DENTAL त (unit 6), and फ़ is the f of unit 4 — istiifaa, never istiiphaa. The frame is इस्तीफ़ा देना, to give a resignation, never करना." },
      ],
    },
  ],
};
