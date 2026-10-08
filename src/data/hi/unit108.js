// HI Unit 108 — अनिश्चितता और एहतियात ("Uncertainty and precaution") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 1 (u98–u110). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, unit98.js §C1–§C9.
//
// 🚨 SLOT NARROWED, AND IT ABSORBS A SPARE. The scaffold title is "Risk and
// uncertainty", and the POSSIBILITY field is spent: u64 हो सकता है owns संदेह,
// संदिग्ध, आशंका, मुमकिन's neighbours, प्रतीत, मालूम, कतई, अनुमान, तकरीबन; u32
// क्या मुमकिन है owns मुमकिन, नामुमकिन, काबिल, हुनर, इजाज़त, मना; u47 owns जोखिम,
// गुंजाइश, काश, दर्जा, बेहद, मर्ज़ी; u70 दिक्कत और हल owns आपदा, संकट, हिचक,
// खामी, दबाव, उपाय; u48 owns चेतावनी, अंदेशा, धमकी.
// **जोखिम ITSELF IS TAKEN at u47l3**, which is why the title names अनिश्चितता —
// a word this unit teaches — and not the obvious one.
// ⚠️ AND unit98.js §C7 ALLOCATES THE DISASTER-RELIEF SPARE TO THIS UNIT. That
// theme measured **12 of 18 taken** (भूकंप, बाढ़, सूखा, तूफ़ान, राहत, बचाव,
// शरणार्थी, आपदा, चेतावनी, महामारी, भूस्खलन, ज्वालामुखी all gone) and was too
// thin to carry a slot of its own. Its five free words — मलबा, निकासी, पुनर्वास,
// क्षति, अकाल — ship here, in lessons 3 and 4, where the risk vocabulary gives
// them a frame. **A later block must not re-theme a disaster slot: there is not
// enough left in it.**
//
// ⚠️ ONE RULE THIS UNIT DELIBERATELY BREAKS, AND THE EXCEPTION IS NARROW.
// unit101.js's header refused मंदतर, तीव्रतर, अल्पतम and न्यूनतर as coinages,
// because **Hindi does not form comparatives with -तर productively**. This unit
// cards **बदतर** anyway, and the distinction is that बदतर is a BORROWED FIXED
// FORM, not a Hindi formation — Persian बद + तर, arrived whole, and the only
// -तर word in ordinary Hindi speech. The test unit98.js §C1 gives still applies
// and बदतर passes it: a newspaper prints it. ⚠️ Do not read this as licence to
// coin another one.
//
// ⚠️ SIX CANDIDATES REFUSED:
//   • **जोखिम, आशंका, अंदेशा, हिचक, गुंजाइश, संकट, आपदा, चेतावनी, बचाव and राहत
//     are ALL TAKEN** — probed, not assumed, across u47, u64, u48, u70, u89, u52.
//     A risk unit at B2 has almost no common word left, which is exactly why it
//     is built on the abstractions instead.
//   • 🚨 **आपात REFUSED because this unit cards आपातकाल.** आपात is the shorter
//     word and आपातकाल the concrete one; carding both is two cards on one root.
//     ✅ आपात is BLOCKED inside आपातकाल by the क, so routing was never the issue —
//     only the duplication.
//   • **प्रतिरोधकता dropped** — प्रतिरोध is the same root and the word people use;
//     the -कता form is a translator's word.
//   • Also drafted and left FREE for a later block: आपात, प्रतिरोधकता, जोखिम-
//     भरा (⚠️ hyphenated, so refused by unit98.js §C1 on sight).
//
// ⚠️ TWO SAME-ROOT PAIRS SPLIT ACROSS LESSONS ON PURPOSE:
//   • **प्रत्याशा (l1) and अप्रत्याशित (l3).** The अ- negation of one root, and
//     unit61.js's असहमत precedent allows it — but u61 had सहमत in a DIFFERENT
//     unit, and the same lesson would have been too close. ✅ The strings do not
//     overlap either (ा against ि), so nothing fires.
//   • **क्षति (l4) and u107l4's क्षतिपूर्ति**, in adjacent units of my own block.
//     ✅ क्षति is BLOCKED inside क्षतिपूर्ति by the प, which is the only reason
//     both could ship. u107's header carries the same note.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4):
//   ⚠️ FEMININE: अनिश्चितता · प्रत्याशा · भेद्यता · सावधानी · दूरंदेशी · सुरक्षा ·
//     विपत्ति · निकासी · क्षति · हानि · संवेदनशीलता.
//   ⚠️ **ELEVEN OF THE TWENTY-FOUR ARE FEMININE, WHICH IS THE HIGHEST SHARE IN MY
//   RANGE** — the abstraction endings -ता, -ी and -ि are all feminine and this
//   unit is built out of abstractions.
//   ⚠️ **विपत्ति AND क्षति END IN A SHORT ि** — vipatti, kshati, never -ii. Same
//   class as पुष्टि (u99l1), अनुमति (u107l2), बुद्धि (u104l4), रूढ़ि (u109l2).
//   ⚠️ **हानि ALSO ENDS IN A SHORT ि** and is the shortest of the three.
//   ⚠️ **प्रत्याशा AND सुरक्षा ARE FEMININE DESPITE THE -आ** and are NOT -ता
//   abstracts: सुरक्षा कड़ी है, never कड़ा.
//   ⚠️ **अनिश्चितता, भेद्यता AND संवेदनशीलता ARE -ता ABSTRACTS**, so feminine, all
//   three ending in -आ.
//   ⚠️ **दूरंदेशी IS FEMININE AND -ी** and is a NOUN, not an adjective: उसकी
//   दूरंदेशी, never दूरंदेशी आदमी.
//   MASCULINE: पूर्वानुमान · दाँव · जुआ · एहतियात · कवच · प्रतिरोध · आपातकाल ·
//   मलबा · पुनर्वास · अकाल.
//   ⚠️ **जुआ AND मलबा ARE MASCULINE AND -आ**, following the rule; प्रत्याशा and
//   सुरक्षा two lines up are feminine and -आ. Same ending, opposite answers.
//   ⚠️ **दाँव CARRIES THE ँ, WRITTEN n** (unit1.js §1) — daanv, one syllable.
//   INVARIANT ADJECTIVES: अप्रत्याशित · बदतर. ⚠️ **बदतर IS INVARIANT**: काम बदतर
//   हुआ, खबर बदतर हुई.
//   ⚠️ दुर्घटना IS FEMININE — बड़ी दुर्घटना — and is the twelfth feminine, which
//   the list above left out because it sits in l3 with the masculines.
//   NO VERB IS CARDED. Still ZERO 3rd-person exceptions in the whole language.
//
// ⚠️ SUBSTRING TRAPS, computed with `findWholeWord`'s real boundary test:
//   FIRES — **घटना (u44l3) inside दुर्घटना** (the halant before it is \p{M}, not a
//     letter). The two are a दुर्- pair like कुतर्क / तर्क (u98l2), and the hint
//     says so. · क्ष (u6, a glyph) inside क्षति and सुरक्षा — harmless, since
//     `canCloze` requires a vocab item.
//   ✅ BLOCKED — आपात inside आपातकाल, by the क · क्षति inside u107's क्षतिपूर्ति,
//     by the प · काल is not a front at all, so अकाल and आपातकाल are clear ·
//     वास is not a front, so पुनर्वास is clear · संवेदनशील is not a front, so
//     संवेदनशीलता is clear.
//   **NO u108 FRONT MATCHES INSIDE ANOTHER WORD** — the `traps` probe returned
//   nothing for this unit.
export const HI_UNIT108 = {
  id: "hi-u108",
  lang: "hi",
  title: "अनिश्चितता और एहतियात",
  order: 108,
  stage: "b2",
  lessons: [
    {
      id: "hi-u108l1",
      unit: 108,
      lesson: 1,
      title: "Not knowing what will happen",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about an outcome nobody can fix yet: the state of not knowing, what one is braced for, a forecast made in advance, a stake placed on an outcome, gambling itself, and how open something is to being harmed.",
      items: [
        { id: "hi-u108l1-anishchittaa", type: "vocab", front: "अनिश्चितता", reading: "anishchittaa", meaning: "the state of not knowing what will happen", accept: ["the condition of nothing being settled"], example: { jp: "अनिश्चितता में कोई निवेशक पैसा नहीं लगाता, चाहे मुनाफ़ा कितना भी हो।", en: "No investor puts money in amid uncertainty, however large the profit may be." }, drill: { jp: "अनिश्चितता में कोई निवेशक पैसा नहीं लगाता", en: "No investor puts money in amid uncertainty" }, hint: "A-NISH-CHIT-TAA — ⚠️ FEMININE, a -ता abstract (unit 61 §B6) ending in -आ: अनिश्चितता बढ़ी, never बढ़ा. ⚠️ THE त्त IS A REAL DOUBLED t, HELD, because अनिश्चित plus -ता puts two त together — anishchittaa, not anishchitataa. ⚠️ Not शक, a doubt (unit 30): a शक is about whether something IS so, अनिश्चितता is about not yet knowing what WILL be." },
        { id: "hi-u108l1-pratyaashaa", type: "vocab", front: "प्रत्याशा", reading: "pratyaashaa", meaning: "what one is braced for", accept: ["the outcome one has prepared oneself for"], example: { jp: "सबकी प्रत्याशा यही थी कि कीमत बढ़ेगी, और वही हुआ।", en: "Everyone's expectation was that the price would rise, and that is what happened." }, drill: { jp: "सबकी प्रत्याशा यही थी कि कीमत बढ़ेगी", en: "Everyone's expectation was that the price would rise" }, hint: "PRA-TYAA-SHAA — ⚠️ FEMININE DESPITE THE -आ, and it is NOT a -ता abstract, so the ending gives no help. ⚠️ Not उम्मीद, hope (unit 27), and not अपेक्षा, what one counts on (unit 72): an उम्मीद is wanted, an अपेक्षा is owed to you, a प्रत्याशा is simply what you have made yourself ready for, good or bad. ⚠️ अप्रत्याशित in lesson 3 is its negation; the two are split across lessons on purpose." },
        { id: "hi-u108l1-puurvaanumaan", type: "vocab", front: "पूर्वानुमान", reading: "puurvaanumaan", meaning: "a forecast made in advance", accept: ["a prediction set out before the event"], example: { jp: "मौसम का पूर्वानुमान ठीक नहीं निकला और पूरी योजना बदलनी पड़ी।", en: "The weather forecast did not turn out right and the whole plan had to be changed." }, drill: { jp: "मौसम का पूर्वानुमान ठीक नहीं निकला", en: "The weather forecast did not turn out right" }, hint: "PUUR-VAA-NU-MAAN, masculine. पूर्व is 'before' — the same पूर्व as पूर्वाग्रह, prejudice (unit 61) — plus अनुमान, an inference (unit 64), whose अ has become the mātrā ा. ⚠️ Not अंदाज़ा, an estimate (unit 57): an अंदाज़ा is about how much, a पूर्वानुमान is about WHAT WILL HAPPEN, and it is on the record before the event, which is what makes it checkable." },
        { id: "hi-u108l1-daanv", type: "vocab", front: "दाँव", reading: "daanv", meaning: "a stake placed on an outcome", accept: ["what one has riding on a result"], example: { jp: "उसने पूरी पूँजी एक ही उपक्रम पर दाँव लगा दी, और वह दिवालिया हो गया।", en: "He staked his whole capital on one single venture, and he went bust." }, drill: { jp: "उसने पूरी पूँजी एक दाँव पर रख दी", en: "He put his whole capital on one bet" }, hint: "DAANV, masculine, one syllable. ⚠️ THE ँ IS NASALISATION AND IS WRITTEN n (unit 1 §1) — daanv, never daav. The frame is X पर दाँव लगाना. ⚠️ It is also a wrestler's hold, which is where पैंतरा (unit 98) comes from — the two words share that world, and a learner will meet दाँव in both senses." },
        { id: "hi-u108l1-juaa", type: "vocab", front: "जुआ", reading: "juaa", meaning: "gambling on pure chance", accept: ["the playing of games for money"], example: { jp: "बिना पूर्वानुमान के निवेश जुआ ही है, और उसे निवेश कहना ठीक नहीं।", en: "Investment without a forecast is gambling, and calling it investment is not right." }, drill: { jp: "बिना पूर्वानुमान के निवेश जुआ ही है", en: "Investment without a forecast is gambling" }, hint: "JU-AA, masculine, -आ following the rule, and the उ and आ are two separate vowels — ju-aa, never jvaa. ⚠️ Not दाँव above: a दाँव is any stake, including a calculated one, जुआ is specifically staking on something you cannot read at all. The example is the distinction the whole unit turns on." },
        { id: "hi-u108l1-bhedyataa", type: "vocab", front: "भेद्यता", reading: "bhedyataa", meaning: "how open something is to being harmed", accept: ["the weakness through which harm can enter"], example: { jp: "एक ही सर्वर पर सब रखने से भेद्यता बढ़ जाती है, और यही सबसे बड़ी खामी थी।", en: "Keeping everything on one server increases the vulnerability, and that was the biggest shortcoming." }, drill: { jp: "एक ही सर्वर पर सब रखना भेद्यता है", en: "Keeping everything on one server is a vulnerability" }, hint: "BHED-YA-TAA — ⚠️ FEMININE, a -ता abstract ending in -आ. Built on भेदना, to pierce, so literally pierce-ability. The द्य is द with य stacked (unit 6), as in वाद्य (unit 106). ⚠️ Not कमज़ोरी: that word is not carded in Hindi. And not निर्भरता, dependence (unit 100): निर्भरता is needing something, भेद्यता is the hole through which harm comes in — the example has both at once." },
      ],
    },
    {
      id: "hi-u108l2",
      unit: 108,
      lesson: 2,
      title: "Taking care first",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe the care taken before anything happens: a precaution, watchfulness while doing a thing, seeing trouble while it is far off, a shield, the keeping of people safe, and standing against a force.",
      items: [
        { id: "hi-u108l2-ehtiyaat", type: "vocab", front: "एहतियात", reading: "ehtiyaat", meaning: "care taken before anything goes wrong", accept: ["a precaution taken in advance"], example: { jp: "एहतियात में पूरे डेटा का बैकअप रखा गया, और वह काम आया।", en: "A backup of all the data was kept out of precaution, and it proved useful." }, drill: { jp: "एहतियात में बैकअप रखा गया", en: "A backup was kept out of precaution" }, hint: "EH-TI-YAAT, masculine, a Perso-Arabic word. The frame worth learning is एहतियात के तौर पर, 'by way of precaution' — ⚠️ but तौर is NOT CARDED anywhere in Hindi, so this unit's sentences say एहतियात में instead. ⚠️ Not सावधानी below, and the split is TIME: एहतियात is taken BEFORE, when nothing is wrong yet; सावधानी is kept DURING, while you are doing the thing." },
        { id: "hi-u108l2-saavdhaanii", type: "vocab", front: "सावधानी", reading: "saavdhaanii", meaning: "watchfulness while doing a thing", accept: ["the care one keeps up during a task"], example: { jp: "डॉक्टर ने पूरी सावधानी से काम किया, फिर भी एक खामी रह गई।", en: "The doctor worked with complete care, and even then one shortcoming was left." }, drill: { jp: "डॉक्टर ने पूरी सावधानी से काम किया", en: "The doctor worked with complete care" }, hint: "SAAV-DHAA-NII — FEMININE, -ी agreeing with the rule: पूरी सावधानी, never पूरा. The frame is सावधानी से, 'carefully'. ⚠️ AND IT IS THE OPPOSITE OF u107l4's लापरवाही: लापरवाही is the failure of exactly this, which is why one is a legal word and the other is not. See एहतियात above for the time split." },
        { id: "hi-u108l2-duurandeshii", type: "vocab", front: "दूरंदेशी", reading: "duurandeshii", meaning: "the seeing of trouble while it is still far off", accept: ["far-sightedness about what may come"], example: { jp: "उसकी दूरंदेशी से कंपनी बच गई, क्योंकि उसने मंदी से पहले ही पैसा रख लिया था।", en: "The company was saved by his foresight, because he had put money aside even before the downturn." }, drill: { jp: "उसकी दूरंदेशी से कंपनी बच गई", en: "The company was saved by his foresight" }, hint: "DUU-RAN-DE-SHII — ⚠️ FEMININE AND -ी, AND IT IS A NOUN, NOT AN ADJECTIVE: उसकी दूरंदेशी, never दूरंदेशी आदमी. Built on दूर, far (unit 14), plus the Persian -अंदेशी, 'thinking'. ⚠️ Not अंदेशा, a foreboding (unit 48): the two share that Persian root, but an अंदेशा is a FEELING that something is wrong and दूरंदेशी is a SKILL." },
        { id: "hi-u108l2-kavach", type: "vocab", front: "कवच", reading: "kavach", meaning: "a shield against harm", accept: ["armour that takes the blow instead of you"], example: { jp: "बीमा एक तरह का कवच है, वह दुर्घटना नहीं रोकता पर हानि कम कर देता है।", en: "Insurance is a kind of shield; it does not stop an accident but it reduces the loss." }, drill: { jp: "बीमा एक तरह का कवच है", en: "Insurance is a kind of shield" }, hint: "KA-VACH, masculine. Literally body armour, and in modern Hindi it is used for anything that absorbs a blow on your behalf. ⚠️ THE EXAMPLE IS WHY IT IS IN A RISK UNIT: a कवच does not reduce the chance of harm, only the damage — which is the single most useful idea in the whole field, and the reason बीमा (unit 85) is not the same thing as एहतियात." },
        { id: "hi-u108l2-surakshaa", type: "vocab", front: "सुरक्षा", reading: "surakshaa", meaning: "the keeping of people and things from harm", accept: ["safety as something arranged"], example: { jp: "दफ़्तर की सुरक्षा के लिए हर दरवाज़े पर पासवर्ड लगाया गया।", en: "A password was put on every door for the office's security." }, drill: { jp: "दफ़्तर की सुरक्षा के लिए पासवर्ड लगाया गया", en: "A password was put in for the office's security" }, hint: "SU-RAK-SHAA — ⚠️ FEMININE DESPITE THE -आ, and NOT a -ता abstract: सुरक्षा कड़ी है, never कड़ा. सु- is the 'good' prefix — the same सु- as सुसंगत (unit 98) and सुशासन (unit 107) — on रक्षा, protection, which is not itself a front. The क्ष is the conjunct of unit 6. ⚠️ Not बचाव, rescue (unit 89): बचाव happens after, सुरक्षा is arranged before." },
        { id: "hi-u108l2-pratirodh", type: "vocab", front: "प्रतिरोध", reading: "pratirodh", meaning: "the standing against a force", accept: ["resistance put up against something"], example: { jp: "शरीर का प्रतिरोध कमज़ोर हो तो हर बीमारी लग जाती है।", en: "If the body's resistance is weak then every illness takes hold." }, drill: { jp: "शरीर का प्रतिरोध कमज़ोर हो गया", en: "The body's resistance became weak" }, hint: "PRA-TI-RODH, masculine. प्रति is 'against' — the same प्रति as प्रतिवाद (unit 98), प्रतिदर्श (unit 99) and प्रतिरूप (unit 100) — plus रोध, a blocking. ⚠️ Not विरोध, opposition (unit 42): विरोध is a POSITION somebody takes against an idea, प्रतिरोध is a physical or structural standing-against, which is why a body has one. ⚠️ प्रतिरोधकता was drafted and dropped as a translator's word." },
      ],
    },
    {
      id: "hi-u108l3",
      unit: 108,
      lesson: 3,
      title: "When it hits",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe the event itself: a declared emergency, an accident, a calamity that falls on many, something nobody was braced for, the rubble left behind, and the clearing of people out.",
      items: [
        { id: "hi-u108l3-aapaatkaal", type: "vocab", front: "आपातकाल", reading: "aapaatkaal", meaning: "a declared time of emergency", accept: ["a period in which normal rules are suspended"], example: { jp: "आपातकाल में कुछ नियम रोक दिए जाते हैं, और यही उसका सबसे बड़ा खतरा है।", en: "Some rules are held back in an emergency, and that is its greatest danger." }, drill: { jp: "आपातकाल में कुछ नियम रोक दिए जाते हैं", en: "Some rules are held back in an emergency" }, hint: "AA-PAAT-KAAL, masculine. आपात is a sudden befalling and काल is time — ⚠️ **neither is a front in Hindi**, and आपात was drafted and dropped because carding both would be two cards on one root. ✅ आपात is BLOCKED inside this word by the क. ⚠️ Not आपदा, a disaster (unit 70): an आपदा happens, an आपातकाल is DECLARED, by a government, which is the difference the example turns on." },
        { id: "hi-u108l3-durghatnaa", type: "vocab", front: "दुर्घटना", reading: "durghatnaa", meaning: "an accident that injures", accept: ["a mishap in which someone is hurt"], example: { jp: "सड़क पर हुई दुर्घटना में कोई नहीं मरा, पर दोनों गाड़ियाँ टूट गईं।", en: "Nobody died in the accident on the road, but both cars were wrecked." }, drill: { jp: "सड़क पर हुई दुर्घटना में कोई नहीं मरा", en: "Nobody died in the accident on the road" }, hint: "DUR-GHAT-NAA — ⚠️ FEMININE despite the -आ: बड़ी दुर्घटना, never बड़ा. दुर् is the 'bad' prefix — the same as in दुरुपयोग (unit 107) — on घटना, an incident (unit 44). 🚨 SUBSTRING NOTE, AND IT FIRES: घटना whole-word-matches inside it, because the halant before it is a \\p{M} mark and not a letter. Same shape as कुतर्क against तर्क (unit 98)." },
        { id: "hi-u108l3-vipatti", type: "vocab", front: "विपत्ति", reading: "vipatti", meaning: "a calamity that falls on many at once", accept: ["a disaster striking a whole people"], example: { jp: "ऐसी विपत्ति में हर आदमी अकेले कुछ नहीं कर सकता, और सरकार को आना पड़ता है।", en: "In such a calamity no single person can do anything alone, and the government has to come in." }, drill: { jp: "विपत्ति में कोई अकेले कुछ नहीं कर सकता", en: "In a calamity nobody can do anything alone" }, hint: "VI-PAT-TI — ⚠️ FEMININE, AND IT ENDS IN A SHORT ि: vipatti, never -ii. The त्त is a real doubled t, held. ⚠️ Not दुर्घटना above: a दुर्घटना hits a few people, a विपत्ति hits a region — and that scale is why the example brings in the सरकार. आपदा, the everyday word, is u70's." },
        { id: "hi-u108l3-apratyaashit", type: "vocab", front: "अप्रत्याशित", reading: "apratyaashit", meaning: "not braced for at all", accept: ["coming with no warning of any kind"], example: { jp: "यह नुकसान पूरी तरह अप्रत्याशित था, क्योंकि किसी पूर्वानुमान में इसका नाम नहीं था।", en: "This loss was entirely unlooked-for, because its name was in no forecast." }, drill: { jp: "यह नुकसान पूरी तरह अप्रत्याशित था", en: "This loss was entirely unlooked-for" }, hint: "A-PRA-TYAA-SHIT, INVARIANT: अप्रत्याशित नुकसान, अप्रत्याशित खबर. The अ- negation of lesson 1's प्रत्याशा. ⚠️ THE TWO ARE IN DIFFERENT LESSONS ON PURPOSE — unit 61's असहमत had सहमत in another unit, and the same lesson would have put one lexeme's two cards side by side. ✅ The strings do not overlap either: प्रत्याशा ends in ा and this in ि." },
        { id: "hi-u108l3-malbaa", type: "vocab", front: "मलबा", reading: "malbaa", meaning: "the rubble left after a collapse", accept: ["the broken material a fallen building leaves"], example: { jp: "मलबा हटाने में तीन दिन लगे, और उसके नीचे से दो लोग बच कर निकले।", en: "Three days went into removing the rubble, and two people came out saved from under it." }, drill: { jp: "मलबा हटाने में तीन दिन लगे", en: "Three days went into removing the rubble" }, hint: "MAL-BAA, masculine, -आ following the rule — unlike प्रत्याशा and सुरक्षा in this unit, which are feminine and -आ. ⚠️ Not कचरा, rubbish: मलबा is specifically what a BUILT thing leaves when it comes down, which is why it goes with ध्वंस (unit 105) and with भूकंप (unit 54). One of the five disaster-relief words unit 98 §C7 allocated to this unit." },
        { id: "hi-u108l3-nikaasii", type: "vocab", front: "निकासी", reading: "nikaasii", meaning: "the clearing of people out of a place", accept: ["the moving of people away from danger"], example: { jp: "बाढ़ से पहले पूरे गाँव की निकासी हुई, इसलिए कोई नहीं मरा।", en: "The whole village was cleared out before the flood, so nobody died." }, drill: { jp: "बाढ़ से पहले पूरे गाँव की निकासी हुई", en: "The whole village was cleared out before the flood" }, hint: "NI-KAA-SII — FEMININE, -ी agreeing with the rule: निकासी हुई, never हुआ. Built on निकलना, to set out (unit 12). ⚠️ Not सफ़र, a journey (unit 29): a निकासी is organised, compulsory and away from something, and the word is used of water draining too. ⚠️ THE EXAMPLE IS THE POINT OF THE WHOLE UNIT: a निकासी before the event is why there is no विपत्ति after it." },
      ],
    },
    {
      id: "hi-u108l4",
      unit: 108,
      lesson: 4,
      title: "Counting the damage",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Reckon up what happened and what it means for next time: the harm suffered, the loss counted, the resettling of people, a famine over a whole region, how easily a thing is affected, and the word for worse than before.",
      items: [
        { id: "hi-u108l4-kshati", type: "vocab", front: "क्षति", reading: "kshati", meaning: "the harm actually suffered", accept: ["the damage done, as a fact"], example: { jp: "भूकंप से हुई क्षति का आकलन महीनों चला, और आँकड़े बार बार बदले।", en: "The reckoning of the harm done by the earthquake ran for months, and the figures changed again and again." }, drill: { jp: "भूकंप से हुई क्षति का आकलन महीनों चला", en: "The reckoning of the earthquake's harm ran for months" }, hint: "KSHA-TI — ⚠️ FEMININE, AND IT ENDS IN A SHORT ि: kshati, never -ii. It opens with the conjunct क्ष (unit 6). ✅ SUBSTRING CHECKED: क्षति is BLOCKED inside u107l4's क्षतिपूर्ति by the प, which is the only reason both could ship in one block. ⚠️ Not नुकसान, a loss (unit 37): नुकसान is what YOU are out of pocket, क्षति is the harm done to the thing itself." },
        { id: "hi-u108l4-haani", type: "vocab", front: "हानि", reading: "haani", meaning: "a loss counted up", accept: ["a loss set down as a figure"], example: { jp: "कंपनी को इतनी हानि हुई कि उसे अपनी एक शाखा बंद करनी पड़ी।", en: "The company suffered such a loss that it had to close one of its branches." }, drill: { jp: "कंपनी को हानि हुई और शाखा बंद हुई", en: "The company took a loss and the branch closed" }, hint: "HAA-NI — ⚠️ FEMININE, AND IT ENDS IN A SHORT ि: haani, never -ii. It is the shortest of this unit's three short-ि feminines, with क्षति and विपत्ति. ⚠️ Not घाटा, a loss (unit 76), and not नुकसान (unit 37): घाटा is an accounting figure for a period, नुकसान is the everyday word, हानि is the formal written one — three registers for one idea, which unit 98 §C2 says must be taught in the frame." },
        { id: "hi-u108l4-punarvaas", type: "vocab", front: "पुनर्वास", reading: "punarvaas", meaning: "the resettling of people who lost a home", accept: ["the putting of displaced people somewhere to live"], example: { jp: "निकासी आसान थी, पुनर्वास मुश्किल, क्योंकि लौटने के लिए कुछ बचा ही नहीं था।", en: "The clearing-out was easy, the resettling difficult, because there was nothing left to return to." }, drill: { jp: "निकासी आसान थी पर पुनर्वास मुश्किल था", en: "The clearing-out was easy, the resettling difficult" }, hint: "PU-NAR-VAAS, masculine. पुनः-without-the-visarga plus वास, a dwelling — ⚠️ AND THE VISARGA IS WHY THE WORD IS SPELLED THIS WAY: unit 61 §B1 bans ः from every front, and in real Hindi this compound is written पुनर्वास with the र् anyway, so nothing was bent. ⚠️ Not घर, a home (unit 5): पुनर्वास is the PROCESS, and the example is why it is the hard half." },
        { id: "hi-u108l4-akaal", type: "vocab", front: "अकाल", reading: "akaal", meaning: "a famine over a whole region", accept: ["a long failure of food across a region"], example: { jp: "अकाल बारिश न होने से आता है, पर उसे विपत्ति सरकार की लापरवाही बनाती है।", en: "A famine comes from the rain not falling, but it is the government's carelessness that makes it a calamity." }, drill: { jp: "अकाल बारिश न होने से आता है", en: "A famine comes from the rain not falling" }, hint: "A-KAAL, masculine. अ- plus काल, 'time' — literally an untimeliness, and ⚠️ **काल is not a front anywhere in Hindi**, which is why unit 105 carded three compounds on it and never the word. ⚠️ Not सूखा, a drought (unit 24): a सूखा is the weather, an अकाल is people having nothing to eat — and the example says the step from one to the other is political, which is the B2 layer." },
        { id: "hi-u108l4-sanvedanshiiltaa", type: "vocab", front: "संवेदनशीलता", reading: "sanvedanshiiltaa", meaning: "how easily a thing is affected by a change", accept: ["the degree to which something reacts"], example: { jp: "इस उपज की संवेदनशीलता बहुत है, दो दिन की बारिश कम हो तो नुकसान दिख जाता है।", en: "This crop's sensitivity is great; if two days of rain are short the damage shows." }, drill: { jp: "इस उपज की संवेदनशीलता बहुत है", en: "This crop's sensitivity is great" }, hint: "SAN-VE-DAN-SHIIL-TAA — ⚠️ FEMININE, a -ता abstract (unit 61 §B6) ending in -आ, and the longest word in the unit. संवेदन is 'feeling' plus शील 'disposed to' plus -ता. ⚠️ Not भेद्यता (lesson 1): भेद्यता is how easily harm GETS IN, संवेदनशीलता is how much the thing MOVES when something changes — and a thing can be very sensitive and not vulnerable at all." },
        { id: "hi-u108l4-badtar", type: "vocab", front: "बदतर", reading: "badtar", meaning: "worse than it already was", accept: ["in a worse state than before"], example: { jp: "पुनर्वास के बाद भी उनका काम बदतर ही रहा, और कोई उनका हिसाब नहीं रखता।", en: "Even after the resettling their work stayed worse than before, and nobody keeps a reckoning of them." }, drill: { jp: "पुनर्वास के बाद भी उनका काम बदतर रहा", en: "Even after the resettling their work stayed worse" }, hint: "BAD-TAR, INVARIANT: काम बदतर हुआ, खबर बदतर हुई. (⚠️ हालत, a condition, is the word a Hindi speaker reaches for here and it is NOT CARDED anywhere in Hindi.) 🚨 AND IT IS THE ONE -तर COMPARATIVE THIS COURSE CARDS. unit 101's header refused मंदतर, तीव्रतर and न्यूनतर because **Hindi does not form -तर comparatives productively** — बदतर is different because it is a BORROWED FIXED FORM, Persian बद + तर, which arrived whole and which a newspaper prints. ⚠️ Do not read it as licence to coin another." },
      ],
    },
  ],
};
