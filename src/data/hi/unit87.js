// HI Unit 87 — विज्ञान और शोध ("Science and research") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 3 (u87–u97). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
// Those still BIND — transliteration, gender in the hint, -ना infinitives, the
// gloss rules, 4 lessons × exactly 6 cards.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 4 (B1)"). lint's SCAFFOLD_TITLE_PATTERNS
// hard-errors on /^Vocabulary \d+$/, so the title had to change. The THEME was
// ASSIGNED CENTRALLY by the B1 crew lead after it probed all 1,382 non-glyph hi
// fronts (2026-10-05): this slot's eighteen probe words scored **0 of 18 taken**,
// the largest single hole in the language.
//
// MEASURED HOLE: A2 taught विज्ञान (u6) and गणित/भूगोल/इतिहास (u34) as SCHOOL
// SUBJECTS and stopped. The whole corpus had no word for a branch of science, no
// laboratory, no experiment, no scientist, no data, no hypothesis, no conclusion,
// no energy, no planet — so a learner who had finished 60 units could not say what
// anyone does for a living in a lab, or what a theory is.
//
// ⚠️ BOUNDARIES HELD, so nothing here duplicates a slot that merely had not been
// written yet when this unit was authored:
//   • खोज (u43l4, a discovery), आविष्कार (u43l4, an invention), यंत्र (u43l3,
//     a device), मशीन (u43l3), तकनीक (u43l4) are TAKEN — the TECHNOLOGY field is
//     block 2's at A2, and all five are USED in this unit's sentences instead.
//   • तापमान (u45l4) is TAKEN. नापना (u45l4, to measure) is TAKEN, which is why
//     मापना IS NOT CARDED HERE: same gloss, so it would be one card with two right
//     answers. परखना carries the trial-and-test slot instead and its hint says so.
//   • QUANTITY ABSTRACTION (औसत, अनुपात, दर, स्तर, पैमाना, मात्रा) is BLOCK 1's,
//     in u63. Zero of those appear here, which is why this unit says "आँकड़े" and
//     "विश्लेषण" and never names a rate or an average.
//   • ठोस (u57l3) is TAKEN as "concrete" in the argument sense; this unit does not
//     teach states of matter, and तत्व/पदार्थ/द्रव/ऑक्सीजन were DEFERRED for space
//     at 24 (named at the bottom).
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: भौतिकी, कोशिका, प्रयोगशाला, परिकल्पना, ऊर्जा, दूरबीन.
//   🚨 **प्रयोगशाला IS FEMININE DESPITE THE -ा** — the -शाला suffix is feminine,
//   against §4's "-ा is usually masculine", and it is the one gender fact in this
//   unit no rule predicts. ⚠️ **दूरबीन is CONSONANT-FINAL feminine**, so nothing
//   in the shape says so: दूरबीन छोटी है, not छोटा.
//   MASCULINE: रसायन, जीव, अणु, परमाणु, प्रयोग, वैज्ञानिक, नमूना, सूत्र, शोध,
//   सिद्धांत, आँकड़े, विश्लेषण, निष्कर्ष, गुरुत्व, खगोल, ब्रह्मांड, ग्रह.
//   ⚠️ **नमूना ENDS IN -ना AND IS A NOUN**, not a verb — the खिलौना (u41) and
//   कारखाना (u60) class. परखना is the unit's only VERB, headworded -ना per §5.
//   ⚠️ **आँकड़े IS CARDED IN THE PLURAL** on purpose: data comes in sets and the
//   singular आँकड़ा is one figure. Same licence as पतलून (u40) and चश्मा (u40).
//
// ⚠️ SUBSTRING TRAPS, CHECKED AGAINST `findWholeWord`'s REAL BOUNDARY TEST AND NOT
// BY EYE. `isLetter` is `/\p{L}/` ONLY (src/store/cardRouting.js), so a MĀTRĀ, an
// ANUSVĀRA and a HALANT do NOT block a match. FIVE pairs fire; four more look like
// they should and CANNOT:
//   THESE FIRE (the following character is a mātrā, so the match is real):
//   • रसायन ⊃ रस (u13l2, juice) — ा is \p{M}.
//   • परिकल्पना ⊃ कल्पना (u57l2, imagination) — ि is \p{M}. Same root, named in
//     the hint as the hook rather than hidden.
//   • संग्रहालय (u91l4, THIS BLOCK'S OWN) ⊃ ग्रह — the ं is an anusvāra, \p{M}.
//     Both hints say so; neither word's drill contains the other.
//   • सत्यापन (u93l2) ⊃ सत्य (u90l3) and अभिलेख (u93l3) ⊃ लेख (u44l2) are the same
//     class in later units of this block; recorded there.
//   THESE CANNOT FIRE, because the next character IS a letter — checked, not assumed:
//   • प्रयोगशाला ⊃ प्रयोग (श) · खगोल ⊃ गोल (ख PRECEDES it) · दूरबीन ⊃ दूर (ब) ·
//     गुरुत्व ⊃ गुरु (त) · वैज्ञानिक vs विज्ञान (NOT a substring at all: ै ≠ ि) ·
//     परमाणु vs अणु (NOT a substring: the अ becomes the mātrā ा).
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): अणु anu and ब्रह्मांड brahmaand are RETROFLEX (ण, ण्ड)
// with no dental twin in the corpus; सिद्धांत siddhaant and निष्कर्ष are DENTAL.
// 24 new readings, 24 distinct, zero collisions against all 1,382.
// LOANWORD FREE-PASS CHECK (§9): zero loanwords in this unit. Zero free passes.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision: तत्व (an
// element), पदार्थ (matter), द्रव (a liquid state), ऑक्सीजन, सूक्ष्मदर्शी (a
// microscope — refused on DECODING grounds as well: क्ष्म is a three-part stack no
// unit teaches), प्रमाण (evidence — सबूत u57l1 already glosses "proof").
export const HI_UNIT87 = {
  id: "hi-u87",
  lang: "hi",
  title: "विज्ञान और शोध",
  order: 87,
  stage: "b1",
  lessons: [
    {
      id: "hi-u87l1",
      unit: 87,
      lesson: 1,
      title: "The three sciences, and what things are made of",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name physics, chemistry and the study of living things, and say that a body is built of cells and a thing of molecules and atoms.",
      items: [
        { id: "hi-u87l1-bhautikii", type: "vocab", front: "भौतिकी", reading: "bhautikii", meaning: "physics", accept: ["the science of physics"], example: { jp: "भौतिकी में हम देखते हैं कि चीज़ें कैसे चलती हैं और क्यों गिरती हैं।", en: "In physics we look at how things move and why they fall." }, drill: { jp: "भौतिकी मुश्किल विषय है", en: "Physics is a difficult subject" }, hint: "BHAU-TI-KII — ⚠️ FEMININE, like every -ी science name. The भौ is the open ौ of unit 3, so it is bhau and never bho. Built on भौतिक, physical — the science of the stuff you can weigh and push, where विज्ञान (unit 6) is the whole field." },
        { id: "hi-u87l1-rasaayan", type: "vocab", front: "रसायन", reading: "rasaayan", meaning: "chemistry", accept: ["the science of chemistry"], example: { jp: "रसायन की कक्षा में हमने दो चीज़ें मिलाईं और रंग बदल गया।", en: "In the chemistry class we mixed two things and the colour changed." }, drill: { jp: "रसायन की कक्षा आज नहीं है", en: "There is no chemistry class today" }, hint: "RA-SAA-YAN, masculine and consonant-final. ⚠️ रस, juice (unit 13), SITS INSIDE IT as a string — the ा that follows is a mātrā, not a letter, so the router can match it. They are not unrelated: the old sense of रस is essence, and रसायन is the science of what a thing is essentially made of." },
        { id: "hi-u87l1-jiiv", type: "vocab", front: "जीव", reading: "jiiv", meaning: "a living organism", accept: ["a living creature", "a life form"], example: { jp: "पानी की एक बूँद में भी हज़ारों जीव रहते हैं।", en: "Even in one drop of water thousands of organisms live." }, drill: { jp: "पानी में बहुत छोटे जीव रहते हैं", en: "Very small organisms live in water" }, hint: "JIIV, masculine, long ii. Same root as जीना, to be alive (unit 59), and ज़िंदगी (unit 59). ⚠️ WIDER THAN जानवर (unit 55): a जीव is ANY living thing — a plant, a fly, a germ, a person — which is why the science of them is called जीवविज्ञान." },
        { id: "hi-u87l1-anu", type: "vocab", front: "अणु", reading: "anu", meaning: "a molecule", accept: ["a molecule of a substance"], example: { jp: "पानी का हर अणु दो तरह के परमाणु से बनता है।", en: "Every molecule of water is made from two kinds of atom." }, drill: { jp: "हर चीज़ में बहुत छोटे अणु होते हैं", en: "In everything there are very small molecules" }, hint: "A-NU, masculine. It opens with the INDEPENDENT अ because nothing comes before it, and ण is the RETROFLEX n — tongue curled back — which the word reading writes as plain n (§1b). The smallest piece of a substance that is still that substance." },
        { id: "hi-u87l1-parmaanu", type: "vocab", front: "परमाणु", reading: "parmaanu", meaning: "an atom", accept: ["an atom of an element"], example: { jp: "वैज्ञानिकों ने परमाणु के अंदर और छोटे हिस्से देखे।", en: "Scientists saw even smaller parts inside the atom." }, drill: { jp: "परमाणु अणु से भी छोटा होता है", en: "An atom is even smaller than a molecule" }, hint: "PAR-MAA-NU, masculine. Built on अणु with परम, ultimate — the ultimate particle. ⚠️ AND अणु IS **NOT** A STRING INSIDE IT, which is the useful surprise: the independent अ is replaced by the mātrā ा, so परमाणु ends in माणु and the router can never confuse the two cards." },
        { id: "hi-u87l1-koshikaa", type: "vocab", front: "कोशिका", reading: "koshikaa", meaning: "a biological cell", accept: ["a cell of a living body"], example: { jp: "शरीर की हर कोशिका को खून से ताकत मिलती है।", en: "Every cell of the body gets its strength from the blood." }, drill: { jp: "शरीर में हर कोशिका बहुत छोटी है", en: "In the body every cell is very small" }, hint: "KO-SHI-KAA — ⚠️ FEMININE, so कोशिका छोटी है, not छोटा. श is the sh of unit 4. The living counterpart of the अणु: an अणु is the smallest piece of a substance, a कोशिका the smallest piece of a जीव." },
      ],
    },
    {
      id: "hi-u87l2",
      unit: 87,
      lesson: 2,
      title: "In the laboratory",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that a scientist ran an experiment in a laboratory, sent a sample away, tested a result and wrote down the formula.",
      items: [
        { id: "hi-u87l2-prayogshaalaa", type: "vocab", front: "प्रयोगशाला", reading: "prayogshaalaa", meaning: "a laboratory", accept: ["a science lab"], example: { jp: "स्कूल की प्रयोगशाला में काँच के बर्तन और एक बड़ी मेज़ थी।", en: "In the school laboratory there were glass vessels and a big table." }, drill: { jp: "प्रयोगशाला में काँच के बर्तन हैं", en: "There are glass vessels in the laboratory" }, hint: "PRA-YOG-SHAA-LAA — 🚨 FEMININE DESPITE THE -ा, and it is the one gender fact in this unit that no rule predicts: the -शाला half means a hall and is itself feminine, so प्रयोगशाला बड़ी है. Two halves: प्रयोग (next card) + शाला. ⚠️ प्रयोग sits inside it, but the श that follows is a letter, so the router cannot match it." },
        { id: "hi-u87l2-prayog", type: "vocab", front: "प्रयोग", reading: "prayog", meaning: "a scientific experiment", accept: ["an experiment"], example: { jp: "उसने पहले प्रयोग किया और फिर नतीजा लिखा।", en: "He first did the experiment and then wrote down the result." }, drill: { jp: "हमने कल एक नया प्रयोग किया", en: "Yesterday we did a new experiment" }, hint: "PRA-YOG, masculine. प्र is a stacked conjunct of unit 6. ⚠️ IN EVERYDAY HINDI IT ALSO MEANS USE — प्रयोग करना, to make use of a thing — but this card is the SCIENTIFIC sense, the thing you run in a प्रयोगशाला. The frame is प्रयोग करना." },
        { id: "hi-u87l2-vaigyaanik", type: "vocab", front: "वैज्ञानिक", reading: "vaigyaanik", meaning: "a scientist", accept: ["a research scientist", "scientific"], example: { jp: "वह वैज्ञानिक रोज़ सुबह प्रयोगशाला में काम करता है।", en: "That scientist works in the laboratory every morning." }, drill: { jp: "वह वैज्ञानिक बहुत मेहनत करता है", en: "That scientist works very hard" }, hint: "VAI-GYAA-NIK, masculine. ज्ञ is one of unit 6's three stacked conjuncts and reads **gy**, which is why विज्ञान is vigyaan and this is vaigyaanik. Built on विज्ञान (unit 6) with ि → ै, the same shift as भूत → भौतिक. ⚠️ ALSO AN ADJECTIVE: वैज्ञानिक तरीका, a scientific method." },
        { id: "hi-u87l2-namuunaa", type: "vocab", front: "नमूना", reading: "namuunaa", meaning: "a sample", accept: ["a specimen", "a test sample"], example: { jp: "डॉक्टर ने खून का नमूना जाँच के लिए भेजा।", en: "The doctor sent a blood sample off for testing." }, drill: { jp: "उसने मिट्टी का नमूना लिया", en: "He took a sample of the soil" }, hint: "NA-MUU-NAA, masculine and regular -ा, so the oblique is नमूने. ⚠️ IT ENDS IN -ना AND IT IS A NOUN, not a verb — the खिलौना (unit 41) and कारखाना (unit 60) class. Not उदाहरण (unit 32): a नमूना is a physical piece you test, an उदाहरण is a case you cite." },
        { id: "hi-u87l2-parakhnaa", type: "vocab", front: "परखना", reading: "parakhnaa", meaning: "to test by trial", accept: ["to put to the test", "to try out"], example: { jp: "वैज्ञानिक हर नतीजे को दो बार परखते हैं।", en: "Scientists test every result twice." }, drill: { jp: "हर नतीजा परखना ज़रूरी है", en: "Testing every result is necessary" }, hint: "PA-RAKH-NAA, ख with a puff of air. 🚨 THE UNIT'S ONLY VERB, and Hindi splits this field three ways: you नापते हैं (unit 45) to get a NUMBER, a जाँच (unit 35) is a formal test somebody runs on you, and you परखते हैं a claim or a material to see whether it HOLDS. ⚠️ मापना IS NOT TAUGHT ANYWHERE — नापना already owns that gloss." },
        { id: "hi-u87l2-suutra", type: "vocab", front: "सूत्र", reading: "suutra", meaning: "a formula", accept: ["a mathematical formula"], example: { jp: "यह सूत्र याद कर लो, गणित में बहुत काम आएगा।", en: "Learn this formula by heart, it will be very useful in maths." }, drill: { jp: "यह सूत्र याद रखना मुश्किल है", en: "Keeping this formula in mind is difficult" }, hint: "SUU-TRA, masculine. त्र is a stacked conjunct of unit 6 and **KEEPS ITS OWN a AT THE END** — suutra, exactly like छात्र chhaatra (unit 6) and चित्र chitra (unit 58). Its older sense is a thread, which is why a short rule that ties a whole idea together is called one." },
      ],
    },
    {
      id: "hi-u87l3",
      unit: 87,
      lesson: 3,
      title: "From a guess to a conclusion",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Walk through how research actually runs — make a hypothesis, test it, let the data decide the theory, do the analysis and reach a conclusion.",
      items: [
        { id: "hi-u87l3-shodh", type: "vocab", front: "शोध", reading: "shodh", meaning: "academic research", accept: ["research", "scholarly research"], example: { jp: "वह तीन साल से इस सवाल पर शोध कर रहा है।", en: "He has been doing research on this question for three years." }, drill: { jp: "वह इस सवाल पर शोध कर रहा है", en: "He is doing research on this question" }, hint: "SHODH, masculine, DENTAL ध with a puff of air. ⚠️ READ IT AGAINST शोक shok, mourning (unit 59) — the same two letters to start and only ध against क between them. The frame is शोध करना. 🚨 It is the first half of शोधकर्ता, a researcher (unit 96), and of शोधग्रंथ, a thesis (unit 97)." },
        { id: "hi-u87l3-parikalpanaa", type: "vocab", front: "परिकल्पना", reading: "parikalpanaa", meaning: "a hypothesis", accept: ["a working assumption"], example: { jp: "पहले एक परिकल्पना बनाओ, फिर उसे प्रयोग से परखो।", en: "First make a hypothesis, then test it with an experiment." }, drill: { jp: "पहले एक परिकल्पना बनाओ", en: "First make a hypothesis" }, hint: "PA-RI-KAL-PA-NAA — ⚠️ FEMININE. 🚨 कल्पना, imagination (unit 57), SITS INSIDE IT and that is the hook, not a trap to hide: a परिकल्पना is an imagining you have agreed to test. The ि before it is a mātrā, not a letter, so the router really can match कल्पना there — so neither word's drill contains the other." },
        { id: "hi-u87l3-siddhaant", type: "vocab", front: "सिद्धांत", reading: "siddhaant", meaning: "a scientific theory", accept: ["a theory", "a principle"], example: { jp: "एक सिद्धांत ठीक है या नहीं, यह आँकड़े बताते हैं।", en: "Whether a theory is right or not — the data tells you that." }, drill: { jp: "यह सिद्धांत अब पुराना हो गया है", en: "This theory has now become old" }, hint: "SID-DHAANT, masculine. GEMINATION in द्ध: you HEAR both d's and only the second carries the puff — sid-dhaant, the doubling rule of unit 1. ⚠️ BIGGER THAN A नियम (unit 32): a नियम is a rule you follow, a सिद्धांत is an explanation that many प्रयोग have survived." },
        { id: "hi-u87l3-aankre", type: "vocab", front: "आँकड़े", reading: "aankre", meaning: "statistical data", accept: ["data", "figures"], example: { jp: "दस साल के आँकड़े देखने पर एक साफ़ बात दिखती है।", en: "On looking at ten years of data, one clear thing shows up." }, drill: { jp: "दस साल के आँकड़े यहाँ हैं", en: "Ten years of data are here" }, hint: "AAN-KRE, masculine and ⚠️ **CARDED IN THE PLURAL ON PURPOSE** — data comes in sets, and one single figure is an आँकड़ा. Same licence as पतलून and चश्मा (unit 40). It opens with the independent आ, the ँ nasalises it (unit 5), and ड़ is the curled-back flap written r (unit 4)." },
        { id: "hi-u87l3-vishleshan", type: "vocab", front: "विश्लेषण", reading: "vishleshan", meaning: "an analysis", accept: ["analysis", "a breakdown of the parts"], example: { jp: "इस काम में सबसे मुश्किल हिस्सा विश्लेषण है।", en: "In this work the most difficult part is the analysis." }, drill: { jp: "यह विश्लेषण बहुत मुश्किल है", en: "This analysis is very difficult" }, hint: "VISH-LE-SHAN, masculine. ⚠️ IT HAS BOTH sh LETTERS, ONE EACH: श in श्ले and ष in षण. Modern Hindi says both as [ʃ] so the reading writes both sh (§1a) — the spelling is the only difference. Breaking a thing into its parts to see how it works, where a जाँच (unit 35) only asks whether it is all right." },
        { id: "hi-u87l3-nishkarsh", type: "vocab", front: "निष्कर्ष", reading: "nishkarsh", meaning: "a conclusion drawn", accept: ["a conclusion", "an inference"], example: { jp: "सब कुछ देखने के बाद वैज्ञानिक एक ही निष्कर्ष पर पहुँचे।", en: "After looking at everything, the scientists arrived at a single conclusion." }, drill: { jp: "वैज्ञानिक एक ही निष्कर्ष पर पहुँचे", en: "The scientists arrived at a single conclusion" }, hint: "NISH-KARSH, masculine, and both sh letters again — ष in ष्क, श at the end. ⚠️ NOT A नतीजा (unit 32): a नतीजा is what HAPPENED, a निष्कर्ष is what you decide it MEANS, so one प्रयोग gives both. The frame is निष्कर्ष पर पहुँचना, to arrive at a conclusion — never निष्कर्ष करना." },
      ],
    },
    {
      id: "hi-u87l4",
      unit: 87,
      lesson: 4,
      title: "Energy, gravity and the sky",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that plants take energy from the sun, that gravity is why things fall, and name the universe, a planet and the telescope you look at them through.",
      items: [
        { id: "hi-u87l4-uurjaa", type: "vocab", front: "ऊर्जा", reading: "uurjaa", meaning: "physical energy", accept: ["energy", "the quantity a machine runs on"], example: { jp: "पेड़ सूरज से ऊर्जा लेते हैं और बढ़ते हैं।", en: "Trees take energy from the sun and grow." }, drill: { jp: "पेड़ सूरज से ऊर्जा लेते हैं", en: "Trees take energy from the sun" }, hint: "UUR-JAA — ⚠️ FEMININE. It opens with the INDEPENDENT ऊ (unit 1), the long uu, because nothing comes before it. ⚠️ NOT ताकत (unit 20): ताकत is a body's strength, ऊर्जा is the physical quantity a machine or a plant runs on — and ईंधन (unit 43) is what carries it." },
        { id: "hi-u87l4-gurutva", type: "vocab", front: "गुरुत्व", reading: "gurutva", meaning: "gravity", accept: ["the force of gravity"], example: { jp: "गुरुत्व के कारण ही हर चीज़ नीचे गिरती है।", en: "It is because of gravity that everything falls downwards." }, drill: { jp: "गुरुत्व के कारण चीज़ें नीचे गिरती हैं", en: "Because of gravity things fall downwards" }, hint: "GU-RUT-VA, masculine, and the final व **KEEPS ITS OWN a** — gurutva, the same ending as सूत्र suutra (l2). Built on गुरु in its OLDEST sense, heavy — the same word that means a spiritual master in unit 90. ⚠️ गुरु sits inside it, but the त that follows is a letter, so the router cannot match it." },
        { id: "hi-u87l4-khagol", type: "vocab", front: "खगोल", reading: "khagol", meaning: "astronomy", accept: ["the study of the heavens"], example: { jp: "खगोल पढ़ने वाले लोग रात में तारे गिनते हैं।", en: "People who study astronomy count the stars at night." }, drill: { jp: "खगोल पढ़ने वाले रात में तारे देखते हैं", en: "Those who study astronomy watch the stars at night" }, hint: "KHA-GOL, masculine, ख with a puff of air. Two halves: ख, the sky, plus गोल, round (unit 19) — the round vault of the heavens. ⚠️ गोल IS a string inside it and the router CANNOT match it, because ख comes first and ख is a letter; the two words are unrelated in meaning today." },
        { id: "hi-u87l4-brahmaand", type: "vocab", front: "ब्रह्मांड", reading: "brahmaand", meaning: "the physical universe", accept: ["the cosmos", "the universe"], example: { jp: "यह ग्रह इस बड़े ब्रह्मांड का एक छोटा हिस्सा है।", en: "This planet is one small part of this large universe." }, drill: { jp: "यह ग्रह ब्रह्मांड का छोटा हिस्सा है", en: "This planet is a small part of the universe" }, hint: "BRAH-MAAND, masculine. 🚨 THREE READING POINTS IN ONE WORD: ब्र is a stacked conjunct, ह्म is a second one (both unit 6), and the ं before ड is the matching RETROFLEX nasal (unit 5). ⚠️ Not संसार (unit 5): संसार is the world people live in, ब्रह्मांड is everything there is." },
        { id: "hi-u87l4-grah", type: "vocab", front: "ग्रह", reading: "grah", meaning: "a planet", accept: ["a planet of a star"], example: { jp: "सूरज के चारों तरफ़ आठ ग्रह घूमते हैं।", en: "Eight planets go round the sun." }, drill: { jp: "सूरज के चारों तरफ़ आठ ग्रह घूमते हैं", en: "Eight planets go round the sun" }, hint: "GRAH, masculine. ग्र is a stacked conjunct of unit 6. ⚠️ Not तारा (unit 21): a तारा makes its own light, a ग्रह only goes round one. 🚨 AND IT HIDES INSIDE संग्रहालय, a museum (unit 91) — the ं before it is an anusvāra, not a letter, so the router CAN match it there, and the two words have nothing to do with each other." },
        { id: "hi-u87l4-duurbiin", type: "vocab", front: "दूरबीन", reading: "duurbiin", meaning: "a telescope", accept: ["a pair of binoculars"], example: { jp: "दूरबीन से चाँद के पहाड़ भी साफ़ दिखते हैं।", en: "With a telescope even the mountains of the moon show up clearly." }, drill: { jp: "दूरबीन से चाँद साफ़ दिखता है", en: "With a telescope the moon shows up clearly" }, hint: "DUUR-BIIN — ⚠️ FEMININE **AND CONSONANT-FINAL**, so the shape tells you nothing: दूरबीन छोटी है, not छोटा. Two halves you already have: दूर, far (unit 14), and बीन, to look. ⚠️ दूर sits inside it, but the ब that follows is a letter, so the router cannot match it." },
      ],
    },
  ],
};
