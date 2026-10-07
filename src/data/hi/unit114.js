// HI Unit 114 — विकास और जनसेवा ("Development and public service") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 2 (u111–u123). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, unit111.js §C1–§C6.
//
// 🚨 RETHEMED SLOT (scaffold: "Media and narrative"). THE SCAFFOLD THEME IS DEAD
// FOUR TIMES OVER: u44 खबर और मीडिया (खबर, अखबार, पत्रकार, संपादक, सुर्खी,
// प्रसारण, चैनल, विज्ञापन, लेख, पन्ना, बयान, दावा), u65 खबर कहाँ से आई (the
// source of a claim — हवाला, उद्धरण, कथित, शीर्षक, खंडन, संवाददाता), u74 (screen
// and stage — फ़िल्म, सिनेमा, धारावाहिक, अभिनेता, निर्देशक, पटकथा, रंगमंच, नाटक,
// संवाद) and u91 साहित्य और समीक्षा (the written work — अध्याय, कथानक, पात्र,
// समीक्षा, शैली, रूपक, अनुवाद, सारांश). A fifth media unit would have been the
// identical-title failure RUNBOOK §0 measured at 104 re-authored cards.
// Probed at **3 of 18 taken** on the theme it was moved to, 2026-10-06.
//
// MEASURED HOLE. The course has the STATE (u42 समाज और सरकार: सरकार, नेता,
// कानून, जनता, नागरिक, सेवा) and it has POVERTY as a condition (u76: गरीबी,
// रोज़गार, संसाधन; u86: झुग्गी, शौचालय; u77: पोषण), and nothing at all in
// between — no word for the INTERVENTION. No welfare, no empowerment, no
// awareness-raising, no sanitation as a public programme, no training given, no
// resettlement, no volunteer, no beneficiary, no grant, no subscription, no camp,
// no intervention, no project, no implementation, no durability, no uplift, no
// malnutrition, no self-reliance, no literacy, no livelihood as a thing a
// programme creates, and no word for rural or for destitute.
// So: u42 is THE GOVERNMENT, u76/u86 are THE CONDITION, and **u114 is WHAT
// SOMEBODY DOES ABOUT IT.** That is the relation the B1 band organised itself
// around (§B3) and it is why this slot is worth a unit rather than a merge.
//
// ⚠️ CROSS-BLOCK BOUNDARY THAT WILL BE CROSSED IF THIS LINE IS NOT READ:
//   • **u134 (block 3) OWNS THE MOVEMENT OF PEOPLE; u114 OWNS THE INTERVENTION.**
//     Theirs: पलायन · प्रवासन · शहरीकरण · घनत्व · जनसांख्यिकी · सर्वेक्षण ·
//     जनगणना. Mine: ग्रामीण · कल्याण · स्वच्छता · सशक्तिकरण · जागरूकता ·
//     लाभार्थी. **BOTH SEATS WILL REACH FOR ग्रामीण AND IT IS THIS UNIT'S.**
//   • राजस्व is u110's (block 1) and मंडी is u127's (block 3). Neither appears here.
//   • **आरक्षION — आरक्षण — IS BLOCK 1's (u109), IN THE CASTE-RESERVATION SENSE
//     ONLY.** It is the obvious word for a development unit and it is NOT mine.
//
// ⚠️ TWO CARDS REFUSED, WITH THE REASON, so a later seat does not "restore" them:
//   • **पहुँच WAS REFUSED.** Glossed "reach" it collides through
//     `normalizeMeaning` with पहुँचना (u12l?, "to arrive", accepts "reach") — and
//     worse, it IS that verb's stem, so the two are one lexeme. हस्तक्षेप took
//     the l3 slot. Only `gloss-taken.mjs` saw it; `front-taken.mjs` passed it.
//   • **दान WAS REFUSED, AND NOT BECAUSE IT COLLIDED.** It is free. It was
//     dropped so that रक्तदान and अंगदान (u112l4, mine) stand as whole compounds
//     with nothing matchable inside them — a deliberate trade of one card for a
//     clean routing story in another unit. अनुदान here is a different word
//     (अनु + दान) and both it and चंदा carry the giving.
//   • **आजीविका SURVIVES ONLY BECAUSE IT WAS RE-GLOSSED.** "A livelihood" belongs
//     to रोज़गार (u76). It is carded as "the means one lives by", which is both
//     distinct through the grader and closer to what the word actually says.
//
// GENDER (§4), named in every hint:
//   ⚠️ FEMININE: आजीविका, साक्षरता, जागरूकता, स्वच्छता, परियोजना.
//   ⚠️ **साक्षरता, जागरूकता AND स्वच्छता ARE -ता ABSTRACTS AND THEREFORE ALWAYS
//   FEMININE** (§B6's rule, and B1 had nine of them). ⚠️ **आजीविका AND परियोजना
//   ARE FEMININE IN -आ**, against the -आ rule, which is the class §B6 says gets
//   agreement wrong most often.
//   MASCULINE: कल्याण, सशक्तिकरण, प्रशिक्षण, पुनर्वास, स्वयंसेवक, लाभार्थी,
//   अनुदान, चंदा, शिविर, हस्तक्षेप, क्रियान्वयन, उत्थान, कुपोषण, स्वावलंबन.
//   ⚠️ **लाभार्थी IS MASCULINE DESPITE THE -ी** — the पानी exception class (unit 1
//   §4) — and like स्वयंसेवक it **DOES NOT CHANGE FOR A WOMAN.**
//   ग्रामीण, वंचित, निर्धन, बुनियादी and टिकाऊ are ADJECTIVES. ⚠️ **बुनियादी AND
//   टिकाऊ DO NOT CHANGE AT ALL** — one ends in ी and one in ऊ, and neither takes
//   the -ी feminine, so बुनियादी ज़रूरत and टिकाऊ काम are both already right.
//
// ⚠️ SUBSTRING TRAPS, each checked (`isLetter` is `/\p{L}/`; a MĀTRĀ or HALANT
// does not block a match, a LETTER does):
//   • कुपोषण ⊃ पोषण (u77l?, nutrition) — **CANNOT FIRE**: the कु before it ends in
//     a ु mātrā on क, so the character immediately before प is a MĀTRĀ… and that
//     means it **CAN** fire. **MEASURED, NOT ASSUMED — IT FIRES.** Named in the
//     hint as the hook: कु- is the reversing prefix, so कुपोषण is पोषण gone wrong,
//     which is exactly what the word means. No drill in this unit contains पोषण.
//   • क्रियान्वयन ⊃ क्रिया (u113l1, mine, "a verb") — **CANNOT FIRE**: the न after
//     it is a letter. Contrast अभिक्रिया (u122l3, also mine), where the same front
//     CAN be matched because a mātrā precedes it. Three of my units touch क्रिया
//     and only one of them can route it.
//   • अनुदान and स्वावलंबन ⊃ दान / अवलंबन? **NEITHER IS A FRONT ANYWHERE**, so
//     there is nothing to match — see the दान note above.
//   • स्वयंसेवक ⊃ सेवक? Not a front. ⊃ सेवा (u42)? NOT a substring — सेवक, with no
//     ा, is a different string. Checked rather than assumed.
//   • निर्धन ⊃ धन? Not a front anywhere; पैसा (u18) is the word the course teaches.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): कल्याण kalyaan, प्रशिक्षण prashikshan, कुपोषण kuposhan
// and शिविर shivir — the first three end in RETROFLEX ण, merged with न in the
// reading, and none has a dental twin in the corpus, so the doubling escape hatch
// is not needed. ⚠️ टिकाऊ tikaauu is RETROFLEX ट and was checked against
// टिकना (u48, "to hold up"), which reads tiknaa — different string, no collision,
// and the two ARE related, which the hint says. 24 new readings, 24 distinct,
// zero collisions against all 2,270.
// ⚠️ ONE NASAL DECISION, recorded because the corpus is inconsistent: स्वयंसेवक is
// read **svayansevak**. unit1.js §1 writes ं as the homorganic nasal before a
// STOP, and स is not a stop — so the fallback is n, which is what the corpus does
// for every other ंस word it has (संसार sansaar, इंसान insaan, संसद sansad,
// संस्मरण sansmaran). The ंव words disagree with each other (सन्वाद sanvaad vs
// संविधान samvidhaan) and that disagreement is pre-existing, not this unit's.
// LOANWORD FREE-PASS CHECK (§9): zero loanwords in this unit.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision rather than a
// gap: सहकारी (a cooperative society), संस्था, दान (REFUSED above, with the
// reason), पहुँच (REFUSED above), निगरानी (TAKEN, u71), स्वयं (free, and the
// natural next card if this slot ever grows), शिविरार्थी.
export const HI_UNIT114 = {
  id: "hi-u114",
  lang: "hi",
  title: "विकास और जनसेवा",
  order: 114,
  stage: "b2",
  lessons: [
    {
      id: "hi-u114l1",
      unit: 114,
      lesson: 1,
      title: "The people a programme is for",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say who a scheme is meant to reach: rural people, those left out, the destitute — and name their basic needs, their livelihood and their literacy.",
      items: [
        { id: "hi-u114l1-graamiin", type: "vocab", front: "ग्रामीण", reading: "graamiin", meaning: "rural", accept: ["of the villages rather than the towns"], example: { jp: "यह योजना सिर्फ़ ग्रामीण इलाकों के लिए है, इसलिए शहर में रहने वाले लोग इसमें नहीं आते।", en: "This scheme is only for rural areas, so people living in the city do not come under it." }, drill: { jp: "यह योजना ग्रामीण इलाकों के लिए है", en: "This scheme is for rural areas" }, hint: "GRAA-MIIN, an ADJECTIVE, so it agrees — but it is consonant-final, which means it does not change form at all. ग्र is ग with a halant then र. ⚠️ From ग्राम, the formal word for a village, which is NOT carded: गाँव (unit 5) is the word a learner needs. The ण is RETROFLEX, merged with न in the reading." },
        { id: "hi-u114l1-vanchit", type: "vocab", front: "वंचित", reading: "vanchit", meaning: "deprived", accept: ["left out of what others get"], example: { jp: "जो लोग सबसे वंचित हैं, उन्हीं तक मदद सबसे देर में पहुँचती है।", en: "The people who are most deprived are the very ones the help reaches last." }, drill: { jp: "सबसे वंचित लोगों तक मदद नहीं पहुँची", en: "The help has not reached the most deprived" }, hint: "VAN-CHIT, an ADJECTIVE and consonant-final, so it does not change. The ं is before च, a stop, so unit 1 §1 writes it as the homorganic n. ⚠️ Not गरीब (unit 42): गरीब is about money, वंचित is about being CUT OFF from something others have — a school, a road, a hospital." },
        { id: "hi-u114l1-nirdhan", type: "vocab", front: "निर्धन", reading: "nirdhan", meaning: "destitute", accept: ["having nothing at all"], example: { jp: "सरकार के कागज़ों में निर्धन शब्द चलता है, पर बोलने में लोग गरीब ही कहते हैं।", en: "The word निर्धन is used in the government's papers, but when speaking people just say गरीब." }, drill: { jp: "सरकार के कागज़ों में निर्धन शब्द चलता है", en: "The word निर्धन is used in the government's papers" }, hint: "NIR-DHAN, an ADJECTIVE, consonant-final and unchanging. निर्-, without, plus धन, wealth — and **धन IS NOT CARDED ANYWHERE**: पैसा (unit 18) is the word the course teaches. ⚠️ निर्धन is a REGISTER word: it belongs on a form, the way u83's whole lesson 3 does, and गरीब belongs in a conversation." },
        { id: "hi-u114l1-buniyaadii", type: "vocab", front: "बुनियादी", reading: "buniyaadii", meaning: "foundational", accept: ["that everything else is built on"], example: { jp: "पानी, बिजली और सड़क बुनियादी ज़रूरत हैं, और उनके बिना कोई और योजना चल ही नहीं सकती।", en: "Water, electricity and a road are foundational needs, and without them no other scheme can run at all." }, drill: { jp: "पानी और बिजली बुनियादी ज़रूरत हैं", en: "Water and electricity are foundational needs" }, hint: "BU-NI-YAA-DII, an ADJECTIVE that ⚠️ DOES NOT CHANGE AT ALL — it already ends in ी, so there is no feminine to form: बुनियादी ज़रूरत and बुनियादी काम are both right as they stand. From बुनियाद, a foundation. Not ज़रूरी (unit 19), which means merely necessary." },
        { id: "hi-u114l1-aajiivikaa", type: "vocab", front: "आजीविका", reading: "aajiivikaa", meaning: "the means one lives by", accept: ["whatever a household actually lives on"], example: { jp: "खेत बिकने के बाद उस परिवार की आजीविका ही चली गई, और दोनों बेटे शहर चले गए।", en: "After the field was sold that family's means of living simply went, and both sons left for the city." }, drill: { jp: "उस परिवार की आजीविका खेत से चलती है", en: "That family lives by the field" }, hint: "AA-JII-VI-KAA. ⚠️ FEMININE IN -आ, against the rule (§B6). 🚨 THE GLOSS IS DELIBERATELY NOT 'A LIVELIHOOD': रोज़गार (unit 76) already owns that, and `normalizeMeaning` would have made the two cards one. आजीविका is closer to what a household LIVES ON — a field, a cart, a cow — and need not be a job at all." },
        { id: "hi-u114l1-saaksharataa", type: "vocab", front: "साक्षरता", reading: "saaksharataa", meaning: "literacy", accept: ["how many people can read and write"], example: { jp: "इस ज़िले में साक्षरता दस साल में बहुत बढ़ी, और सबसे ज़्यादा लड़कियों के बीच।", en: "Literacy in this district rose a great deal in ten years, and most of all among girls." }, drill: { jp: "इस ज़िले में साक्षरता बहुत बढ़ी है", en: "Literacy has risen a lot in this district" }, hint: "SAA-KSHA-RA-TAA, feminine — a -ता abstract, and §B6's rule is that those are ALWAYS feminine. क्ष is one of unit 6's three letter-conjuncts. ⚠️ Not पढ़ाई (unit 34), which is one person studying: साक्षरता is a NUMBER about a whole population, which is why it rises and falls." },
      ],
    },
    {
      id: "hi-u114l2",
      unit: 114,
      lesson: 2,
      title: "What the programme actually does",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the work itself: welfare, empowerment, raising awareness, sanitation, the training given and the resettling of people.",
      items: [
        { id: "hi-u114l2-kalyaan", type: "vocab", front: "कल्याण", reading: "kalyaan", meaning: "public welfare", accept: ["the state looking after people's wellbeing"], example: { jp: "हर राज्य में एक कल्याण विभाग होता है, पर उसका पैसा गाँव तक पहुँचने में साल लग जाते हैं।", en: "Every state has a welfare department, but its money takes years to reach the village." }, drill: { jp: "हर राज्य में एक कल्याण विभाग होता है", en: "Every state has a welfare department" }, hint: "KAL-YAAN, masculine. ल्य is a stacked conjunct — ल with a halant, then य — and the ण is RETROFLEX. ⚠️ Not सेवा (unit 42), which is service as an act: कल्याण is the GOAL, so it names departments, schemes and funds rather than anything anybody does on a given afternoon." },
        { id: "hi-u114l2-sashaktiikaran", type: "vocab", front: "सशक्तिकरण", reading: "sashaktiikaran", meaning: "empowerment", accept: ["making people able to act for themselves"], example: { jp: "सशक्तिकरण का मतलब मदद देना नहीं है — मतलब यह है कि लोग अपना काम खुद कर सकें।", en: "Empowerment does not mean giving help — it means that people can do their own work themselves." }, drill: { jp: "सशक्तिकरण का मतलब मदद देना नहीं है", en: "Empowerment does not mean giving help" }, hint: "SA-SHAK-TII-KA-RAN, masculine — the longest front in this unit. स-, with, plus शक्ति, power, plus -करण, a making-into. ⚠️ -करण is the suffix that turns anything into a process and you will meet it again in टीकाकरण and वर्गीकरण (u121l4). The ण is RETROFLEX. ⚠️ A WORD THE SECTOR USES ABOUT ITSELF, so the example says what it is NOT." },
        { id: "hi-u114l2-jaagaruukataa", type: "vocab", front: "जागरूकता", reading: "jaagaruukataa", meaning: "awareness", accept: ["people knowing a thing exists at all"], example: { jp: "टीके के बारे में जागरूकता कम थी, इसलिए पहले महीने सिर्फ़ बीस लोग आए।", en: "Awareness about the vaccine was low, so only twenty people came in the first month." }, drill: { jp: "टीके के बारे में जागरूकता कम थी", en: "Awareness about the vaccine was low" }, hint: "JAA-GA-RUU-KA-TAA, feminine — another -ता abstract, so feminine by §B6's rule. From जागना, to be awake, through जागरूक, wide awake to something. ⚠️ The ू is LONG: jaagaruukataa, never jaagarukataa, and that length is the commonest mistake in the word." },
        { id: "hi-u114l2-svachchhataa", type: "vocab", front: "स्वच्छता", reading: "svachchhataa", meaning: "cleanliness", accept: ["keeping a public place clean as a programme"], example: { jp: "स्वच्छता पर इतना पैसा खर्च हुआ, पर जब तक कचरा उठाने वाला न आए, गली वैसी ही रहती है।", en: "So much money was spent on cleanliness, but until somebody comes to lift the rubbish the lane stays as it was." }, drill: { jp: "स्वच्छता पर बहुत पैसा खर्च हुआ", en: "A lot of money was spent on cleanliness" }, hint: "SVACH-CHHA-TAA, feminine — a third -ता abstract in one lesson, and all three are feminine for the same reason. स्व is a stacked conjunct and च्छ is a DOUBLED consonant, so unit 1 §1 doubles it in the reading: svachchhataa. ⚠️ Not साफ़ (unit 14), which is an adjective about one thing: स्वच्छता is the public condition." },
        { id: "hi-u114l2-prashikshan", type: "vocab", front: "प्रशिक्षण", reading: "prashikshan", meaning: "training", accept: ["being taught to do a particular job"], example: { jp: "तीन हफ़्ते का प्रशिक्षण मिला, और उसके बाद वे औरतें खुद सिलाई का काम करने लगीं।", en: "Three weeks of training were given, and after that those women took up sewing work themselves." }, drill: { jp: "तीन हफ़्ते का प्रशिक्षण मिला", en: "Three weeks of training were given" }, hint: "PRA-SHIK-SHAN, masculine. ⚠️ TWO DIFFERENT SH LETTERS: श, then the conjunct क्ष — and unit 1 §1a merges both to sh, so the reading cannot tell you which is written. The ण is RETROFLEX. Same root as शिक्षक, a teacher (unit 8), and शिक्षा. Not पढ़ाई, which is study in general." },
        { id: "hi-u114l2-punarvaas", type: "vocab", front: "पुनर्वास", reading: "punarvaas", meaning: "resettlement", accept: ["putting people somewhere to live again"], example: { jp: "बाँध बनने पर जो गाँव पानी में चले गए, उनके लोगों का पुनर्वास दूसरी जगह किया गया।", en: "When the dam was built, the people of the villages that went under water were resettled elsewhere." }, drill: { jp: "उन लोगों का पुनर्वास दूसरी जगह किया गया", en: "Those people were resettled somewhere else" }, hint: "PU-NAR-VAAS, masculine. पुनर्-, again, plus वास, a dwelling — the same वास as छात्रावास (unit 97) and दूतावास (unit 92), and the same पुनर् as पुनरावृत्ति (unit 73). ⚠️ In India पुनर्वास is almost always about a dam, a road or a disaster, which is why the example names a बाँध (u111l4)." },
      ],
    },
    {
      id: "hi-u114l3",
      unit: 114,
      lesson: 3,
      title: "Who runs it, who pays, who gets it",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the volunteer, the beneficiary, the grant, the subscription raised locally, the camp set up for a day, and the intervention itself.",
      items: [
        { id: "hi-u114l3-svayansevak", type: "vocab", front: "स्वयंसेवक", reading: "svayansevak", meaning: "a volunteer", accept: ["one who works without being paid"], example: { jp: "बारिश के दिनों में बीस स्वयंसेवक गाँव में रुके, और किसी ने एक पैसा नहीं लिया।", en: "Twenty volunteers stayed in the village during the rains, and not one of them took a paisa." }, drill: { jp: "बीस स्वयंसेवक गाँव में रुके", en: "Twenty volunteers stayed in the village" }, hint: "SVA-YAN-SE-VAK, masculine, and ⚠️ IT DOES NOT CHANGE FOR A WOMAN. स्वयं, oneself, plus सेवक, a servant. ⚠️ **सेवा (unit 42) IS NOT A SUBSTRING** — सेवक has no ा — so the router cannot match it, checked rather than assumed. The ं before स is written n, like संसार and इंसान." },
        { id: "hi-u114l3-laabhaarthii", type: "vocab", front: "लाभार्थी", reading: "laabhaarthii", meaning: "a beneficiary", accept: ["the person a scheme is supposed to help"], example: { jp: "वह इस योजना का लाभार्थी है, पर पैसा किसी और को मिला।", en: "He is a beneficiary of this scheme, but the money went to somebody else." }, drill: { jp: "वह इस योजना का लाभार्थी है", en: "He is a beneficiary of this scheme" }, hint: "LAA-BHAAR-THII. ⚠️ MASCULINE DESPITE THE -ी — the पानी exception class (unit 1 §4) — and it DOES NOT CHANGE FOR A WOMAN. लाभ, a gain, plus अर्थी, one who seeks. र्थ is र with its halant above a DENTAL थ. ⚠️ A file word, not a conversation word: nobody calls themselves a लाभार्थी." },
        { id: "hi-u114l3-anudaan", type: "vocab", front: "अनुदान", reading: "anudaan", meaning: "a grant", accept: ["money given for a stated purpose and not returned"], example: { jp: "स्कूल को किताबों के लिए अनुदान मिला, पर शर्त यह थी कि हिसाब हर महीने भेजा जाए।", en: "The school received a grant for books, but the condition was that accounts be sent every month." }, drill: { jp: "स्कूल को किताबों के लिए अनुदान मिला", en: "The school received a grant for books" }, hint: "A-NU-DAAN, masculine. अनु-, along with, plus दान, a giving — and ⚠️ **दान IS NOT A FRONT ANYWHERE IN THE COURSE**, dropped on purpose so that रक्तदान and अंगदान (u112l4) have nothing matchable inside them. ⚠️ Not ऋण (a loan): an अनुदान is never paid back, which is the whole difference." },
        { id: "hi-u114l3-chandaa", type: "vocab", front: "चंदा", reading: "chandaa", meaning: "a subscription collected", accept: ["money gathered a little from each person"], example: { jp: "गली के लोगों ने मिलकर चंदा किया और अपने पैसे से बिजली का काम करवाया।", en: "The people of the lane did a subscription between them and had the electricity work done with their own money." }, drill: { jp: "गली के लोगों ने मिलकर चंदा किया", en: "The people of the lane did a subscription between them" }, hint: "CHAN-DAA, masculine in -आ, which is the rule. The ं is before द, a stop, so it is written as the homorganic n. ⚠️ The opposite direction from अनुदान: a चंदा comes UP from the people who will use the thing, which is why Hindi says चंदा करना — one DOES a subscription — and never चंदा देना." },
        { id: "hi-u114l3-shivir", type: "vocab", front: "शिविर", reading: "shivir", meaning: "a camp", accept: ["a service set up in one place for a short time"], example: { jp: "महीने में एक दिन गाँव में सेहत का शिविर लगता है, और उस दिन सौ से ज़्यादा लोग जाँच करवाते हैं।", en: "A health camp is held in the village one day a month, and on that day more than a hundred people get themselves checked." }, drill: { jp: "गाँव में सेहत का शिविर लगता है", en: "A health camp is held in the village" }, hint: "SHI-VIR, masculine and consonant-final. ⚠️ Hindi uses लगना for it — शिविर लगता है, the camp 'is set up' — and the same verb for a market, a fair and a queue. A शिविर is temporary by definition: a permanent one would be a दवाखाना (u112l1)." },
        { id: "hi-u114l3-hastakshep", type: "vocab", front: "हस्तक्षेप", reading: "hastakshep", meaning: "an intervention", accept: ["stepping in where one was not asked"], example: { jp: "जब तक ज़िले से हस्तक्षेप नहीं हुआ, पंचायत ने उस मामले को छुआ ही नहीं।", en: "Until there was an intervention from the district, the village council did not touch the matter at all." }, drill: { jp: "ज़िले से हस्तक्षेप नहीं हुआ", en: "There was no intervention from the district" }, hint: "HAS-TA-KSHEP, masculine. हस्त, a hand in the literary register, plus क्षेप, a throwing — a hand thrown in. क्ष is one of unit 6's letter-conjuncts. ⚠️ हस्त IS NOT CARDED: हाथ (unit 20) is the word a learner needs. ⚠️ Usually faintly UNWELCOME in Hindi, which is why पहुँच, 'reach', could not be its neighbour here — that word is पहुँचना's own." },
      ],
    },
    {
      id: "hi-u114l4",
      unit: 114,
      lesson: 4,
      title: "Does it last?",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Judge a programme rather than describe it: the project, its implementation, whether it is built to last, the uplift claimed, malnutrition, and standing on one's own feet.",
      items: [
        { id: "hi-u114l4-pariyojnaa", type: "vocab", front: "परियोजना", reading: "pariyojnaa", meaning: "a project", accept: ["one planned piece of work with a start and an end"], example: { jp: "यह परियोजना पाँच साल की थी, पर आठ साल बाद भी आधा काम बाकी था।", en: "This project was meant to take five years, but even eight years later half the work was left." }, drill: { jp: "यह परियोजना पाँच साल की थी", en: "This project was meant to take five years" }, hint: "PA-RI-YOJ-NAA. ⚠️ FEMININE IN -आ, against the rule (§B6), because योजना is — and योजना, a scheme, is already taught at unit 48. परि-, around, plus योजना: a scheme with everything arranged round it. ⚠️ **योजना IS A STRING INSIDE IT AND THE ROUTER CAN MATCH IT**, because the ि before it is a mātrā. No drill here contains योजना on its own." },
        { id: "hi-u114l4-kriyaanvayan", type: "vocab", front: "क्रियान्वयन", reading: "kriyaanvayan", meaning: "implementation", accept: ["actually carrying a plan out on the ground"], example: { jp: "कागज़ पर योजना बहुत अच्छी थी, पर क्रियान्वयन गाँव के एक कर्मचारी के हाथ में था।", en: "On paper the scheme was very good, but its implementation was in the hands of a single village employee." }, drill: { jp: "कागज़ पर योजना अच्छी थी पर क्रियान्वयन कमज़ोर", en: "On paper the scheme was good but the implementation weak" }, hint: "KRI-YAAN-VA-YAN, masculine. क्रिया, an action — and the GRAMMAR word this block cards at u113l1 — plus अन्वयन, a carrying through. 🚨 क्रिया IS A STRING INSIDE IT AND THE ROUTER **CANNOT** MATCH IT, because the न after it is a letter. ⚠️ CONTRAST अभिक्रिया (u122l3), where the same front CAN be matched, because a mātrā precedes it instead." },
        { id: "hi-u114l4-tikaauu", type: "vocab", front: "टिकाऊ", reading: "tikaauu", meaning: "durable", accept: ["built so that it goes on working"], example: { jp: "सस्ता हैंडपंप दो बरसात में टूट गया, और लोगों ने कहा कि टिकाऊ चीज़ पहले से महँगी होती है।", en: "The cheap handpump broke in two monsoons, and people said that a durable thing costs more up front." }, drill: { jp: "टिकाऊ चीज़ पहले से महँगी होती है", en: "A durable thing costs more up front" }, hint: "TI-KAA-UU, an ADJECTIVE that ⚠️ DOES NOT CHANGE AT ALL, because it ends in ऊ and there is no feminine to form: टिकाऊ चीज़ and टिकाऊ काम are both already right. ट is RETROFLEX. ⚠️ From टिकना, to hold up (unit 48), which reads tiknaa — related, and a different string, so no reading collision." },
        { id: "hi-u114l4-utthaan", type: "vocab", front: "उत्थान", reading: "utthaan", meaning: "an uplift", accept: ["a whole group's condition rising"], example: { jp: "हर नेता भाषण में उत्थान का नाम लेता है, पर जनता पूछती है कि दस साल में बदला क्या।", en: "Every leader names uplift in a speech, but the people ask what has changed in ten years." }, drill: { jp: "हर नेता उत्थान का नाम लेता है", en: "Every leader names uplift" }, hint: "UT-THAAN, masculine. त्थ is a DOUBLED DENTAL written with a halant, and unit 1 §1 doubles it in the reading: utthaan. ⚠️ A big, slightly political word — of a caste, a region, a nation, never of one person — which is exactly why the example puts it in a नेता's speech and the doubt in the जनता's mouth." },
        { id: "hi-u114l4-kuposhan", type: "vocab", front: "कुपोषण", reading: "kuposhan", meaning: "malnutrition", accept: ["not getting enough of the right food over years"], example: { jp: "भूख और कुपोषण एक ही चीज़ नहीं हैं — पेट भरा हो सकता है और फिर भी बच्चा कमज़ोर रहे।", en: "Hunger and malnutrition are not the same thing — a stomach can be full and the child still stay weak." }, drill: { jp: "भूख और कुपोषण एक ही चीज़ नहीं हैं", en: "Hunger and malnutrition are not the same thing" }, hint: "KU-PO-SHAN, masculine. कु-, the prefix that spoils a word, plus पोषण, nutrition (unit 77) — so कुपोषण is nutrition gone wrong, which is exactly what it means. 🚨 पोषण IS A STRING INSIDE IT AND THE ROUTER **CAN** MATCH IT, because the character before it is the ु mātrā on क, not a letter. The ण is RETROFLEX." },
        { id: "hi-u114l4-svaavalamban", type: "vocab", front: "स्वावलंबन", reading: "svaavalamban", meaning: "self-reliance", accept: ["standing without anybody holding you up"], example: { jp: "असली सवाल यह है कि मदद बंद होने के बाद भी काम चलता रहे — उसी को स्वावलंबन कहते हैं।", en: "The real question is whether the work keeps going even after the help stops — that is what self-reliance means." }, drill: { jp: "मदद के बाद भी काम चले तो स्वावलंबन", en: "If the work goes on after the help that is self-reliance" }, hint: "SVAA-VA-LAM-BAN, masculine. स्व, self, plus अवलंबन, a leaning on. The ं is before ब, a stop, so unit 1 §1 writes it as the homorganic m: svaavalamban. ⚠️ The end point l4 is really about: सशक्तिकरण (lesson 2) is what somebody DOES to you, स्वावलंबन is what is left when they go." },
      ],
    },
  ],
};
