// HI Unit 122 — रसायन और पदार्थ ("Chemistry and matter") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 2 (u111–u123). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, unit111.js §C1–§C6.
//
// 🚨 GENERIC SLOT, THEME ASSIGNED CENTRALLY (scaffold: "Vocabulary 2 (B2)") —
// see u121's header for why all sixteen B2 `Vocabulary N` slots were allocated
// before any block wrote a card. This one is **chemistry and matter, probed at
// 3 of 18 taken** against all 2,270 non-glyph hi fronts, 2026-10-06.
//
// MEASURED HOLE. u87 विज्ञान और शोध carded रसायन, अणु and परमाणु and stopped
// there; u60 लोहा, लकड़ी और औज़ार took materials AS SUBSTANCES you can pick up
// (लोहा, लकड़ी, चाँदी, कोयला, ईंट, जंग); u49 took the everyday verbs of change
// (घुलना, जलना, उबलना, पिघलना) and u80 the kitchen ones (घोलना, छानना, पीसना).
// **What the corpus had no word for is matter BEHAVING**: no substance as a
// category, no state of matter, no gas, no liquid as a noun, no particle, no
// mixture, no solution, no dilution, no impurity, no chemical salt, no metal as a
// class, no acid, no alkali, no reaction, no catalyst, no compound, no
// precipitate, no evaporation, no condensation, no boiling point, no melting
// point, no decomposition, nothing for inflammable and nothing for chemical.
// A learner could say water boils and not that it evaporates.
//
// ⚠️ CROSS-BLOCK BOUNDARIES THAT LAND ON THIS FILE — all three physics-adjacent
// fields are SPLIT ACROSS BLOCKS and the lead drew the lines before authoring:
//   • **u122 (this unit) OWNS THE REACTION: अभिक्रिया · उत्प्रेरक · विलयन.**
//   • **u126 (block 3) OWNS THE ENERGY SOURCE: सौर · पवन · टरबाइन · भाप ·
//     विद्युत.** None of the five appears here — which is why l4's evaporation
//     example says पानी and not भाप, although भाप is the obvious word for it.
//   • **u133 (block 3) OWNS LIGHT: किरण · लेंस · अपवर्तन · वर्णक्रम.** None here.
//   • **घनत्व IS u134's (block 3)**, in the demographic sense, so this unit does
//     not card density although a chemistry unit plainly wants it.
//
// ⚠️ ONE FRONT KEPT ACROSS A KNOWN SUBSTRING MATCH, and it is the reciprocal of
// the note in u113's header: **अभिक्रिया (l3) ⊃ क्रिया (u113l1, MINE, "a verb")**
// — the ि of अभि before it is a MĀTRĀ, not a letter, so `findWholeWord` CAN fire.
// अभिक्रिया was assigned to this unit centrally and क्रिया is the only possible
// front for "a verb", so both ship: different units, unrelated meanings, named in
// both hints, and **no drill in either unit contains the other's front.** Same
// call u97 made on छात्रावास ⊃ छात्र. ⚠️ क्रियान्वयन (u114l4, also mine) ⊃ क्रिया
// CANNOT fire, because the न after it is a letter — three of my units touch that
// front and only this one routes it.
//
// ⚠️ FOUR GLOSSES ARE DELIBERATELY NOT THE OBVIOUS ENGLISH WORD, because the
// obvious one is already accepted by a card the learner has (unit 1 §9, §B4):
//     पदार्थ  → "physical substance", NOT "matter"    (बात u30 accepts "a matter")
//     द्रव    → "a substance that flows", NOT "a liquid" (तरल u95 accepts "liquid")
//     विलयन  → "a dissolved mixture", NOT "a solution"  (हल u57 is "a solution")
//     लवण    → "a chemical salt", NOT "salt"            (नमक u13)
// **AND विषैला WAS REFUSED OUTRIGHT**: ज़हरीला (u75) is glossed "poisonous" and
// accepts "toxic", and the two words are exact synonyms, so no re-gloss would
// have saved it (the u112 शल्यक्रिया lesson). रासायनिक took the l4 slot.
//
// GENDER (§4), named in every hint:
//   ⚠️ FEMININE: अवस्था, गैस, अशुद्धि, अभिक्रिया, धातु.
//   ⚠️ **धातु IS FEMININE DESPITE ENDING IN ु**, which nothing in the course
//   predicts — यह धातु भारी है, never भारा — and it is the single hardest
//   agreement in this unit. ⚠️ **गैस IS FEMININE AND CONSONANT-FINAL** (§B6's
//   worst class) and **अशुद्धि ENDS IN A SHORT ि** — ashuddhi, never -ii.
//   ⚠️ **अवस्था AND अभिक्रिया ARE FEMININE IN -आ**, against the rule.
//   MASCULINE: पदार्थ, द्रव, कण, मिश्रण, विलयन, तनुकरण, लवण, अम्ल, क्षार,
//   उत्प्रेरक, यौगिक, अवक्षेप, वाष्पीकरण, संघनन, क्वथनांक, गलनांक, अपघटन.
//   ज्वलनशील and रासायनिक are ADJECTIVES, both consonant-final, so neither changes.
//
// ⚠️ SUBSTRING TRAPS, each checked (`isLetter` is `/\p{L}/`):
//   • अभिक्रिया ⊃ क्रिया (u113l1, mine) — **FIRES.** See the note above.
//   • अशुद्धि ⊃ शुद्ध (u6l3, pure) — **CANNOT FIRE**: the अ before it is a letter.
//     Named in the hint as the hook — अशुद्धि is शुद्ध negated — rather than hidden.
//   • क्वथनांक and गलनांक ⊃ अंक (u34l1, a mark)? **NOT A SUBSTRING** — the string
//     is नांक, with a mātrā and an anusvāra, and अंक needs the independent अ.
//     Checked rather than assumed, because the -अंक ending makes it look like one.
//   • रासायनिक ⊃ रसायन (u87l?, chemistry)? **NOT A SUBSTRING** — रासाय has two
//     long vowels where रसाय has none. The two ARE the same root and the hint
//     says so; the router cannot see it.
//   • अपघटन ⊃ घटना? **NOT A SUBSTRING** — घटन has no final ा. And घटना is in any
//     case not a front.
//   • लवण ⊃ नमक? Different words entirely; नमक (u13) is the everyday one and is
//     used in l2's example to define this card against it.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): कण kan, मिश्रण mishran, तनुकरण tanukaran, लवण lavan and
// वाष्पीकरण vaashpiikaran all end in RETROFLEX ण, merged with न in the reading;
// पदार्थ padaarth, अवस्था avasthaa, द्रव drav and क्वथनांक kvathanaank are DENTAL.
// ⚠️ **कण kan WAS CHECKED AGAINST कान kaan (unit 20, an ear) AND AGAINST कम kam
// (unit 1)** — three different strings, three different readings, no collision,
// so the §1b doubling escape hatch is not needed. 24 new readings, 24 distinct,
// zero collisions against all 2,270.
// ⚠️ ONE READING PAIR IS CLOSE and is named in both hints: क्वथनांक kvathanaank
// against गलनांक galanaank — the same -ाांक ending, and the two cards sit side by
// side in l4 on purpose, because they are the two ends of one scale.
// LOANWORD FREE-PASS CHECK (§9): **ONE loanword, गैस**, reading "gais" against
// the normalised gloss "gas" — NOT the same string, so no free pass. ऑक्सीजन,
// हाइड्रोजन and कार्बन were all passed over: each would read almost exactly as its
// English gloss, and ऑक्सीजन additionally opens with ऑ, which unit1.js §7 leaves
// uncarded and which no Hindi unit has ever taught a learner to decode.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision rather than a
// gap: विषैला (REFUSED above, with the reason), आयन, संयोजकता, मिश्रधातु (passed
// over — मिश्रण is in the same unit and the two share मिश्र, which is the
// same-lesson lexeme pair the cross-block check exists to catch), ऑक्सीजन /
// हाइड्रोजन / कार्बन (REFUSED above), ठोस (TAKEN, u57), भार (REFUSED — वज़न u35
// owns "weight"), घनत्व (u134's), भाप (u126's).
export const HI_UNIT122 = {
  id: "hi-u122",
  lang: "hi",
  title: "रसायन और पदार्थ",
  order: 122,
  stage: "b2",
  lessons: [
    {
      id: "hi-u122l1",
      unit: 122,
      lesson: 1,
      title: "Matter, and the states it comes in",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about substance itself: its state, gas, something that flows, a particle — and say that a thing will catch fire.",
      items: [
        { id: "hi-u122l1-padaarth", type: "vocab", front: "पदार्थ", reading: "padaarth", meaning: "physical substance", accept: ["anything that takes up space and has weight"], example: { jp: "हर पदार्थ तीन में से किसी एक अवस्था में होता है, और गरम करने पर वह अवस्था बदल जाती है।", en: "Every substance is in one of three states, and on heating that state changes." }, drill: { jp: "हर पदार्थ किसी एक अवस्था में होता है", en: "Every substance is in one state or another" }, hint: "PA-DAARTH, masculine, र्थ being र with its halant above a DENTAL थ. 🚨 THE GLOSS IS DELIBERATELY NOT 'MATTER': बात (unit 30) accepts 'a matter', and `normalizeMeaning` strips the article, so the two cards would have become one (unit 1 §9). This is matter in the physics sense." },
        { id: "hi-u122l1-avasthaa", type: "vocab", front: "अवस्था", reading: "avasthaa", meaning: "a state of matter", accept: ["which of solid, liquid or gas a thing is in"], example: { jp: "पानी तीनों अवस्था में मिलता है — बर्फ़, पानी और हवा जैसी गैस।", en: "Water is found in all three states — ice, water, and an air-like gas." }, drill: { jp: "पानी तीनों अवस्था में मिलता है", en: "Water is found in all three states" }, hint: "A-VAS-THAA. ⚠️ FEMININE IN -आ, against the rule (§B6) — यह अवस्था, never यह अवस्था का. स्थ is a stacked conjunct with a DENTAL थ, the same stack as संस्थान (unit 97). ⚠️ Hindi also uses अवस्था of a person's age or condition, which is why the gloss names matter." },
        { id: "hi-u122l1-gais", type: "vocab", front: "गैस", reading: "gais", meaning: "a gas", accept: ["a substance with no shape of its own at all"], example: { jp: "गैस अपने बर्तन का पूरा आकार ले लेती है, इसलिए उसे खुले में रखा नहीं जा सकता।", en: "A gas takes the entire shape of its vessel, which is why it cannot be kept in the open." }, drill: { jp: "गैस बर्तन का पूरा आकार ले लेती है", en: "A gas takes the vessel's entire shape" }, hint: "GAIS. ⚠️ **FEMININE AND CONSONANT-FINAL** (§B6's worst class) — गैस भारी है, never भारा. The ै is the ai of unit 3, one sound: gais, never ga-is. ⚠️ A LOANWORD, so the §9 check matters: gais and the normalised gloss 'gas' are different strings, so typing the prompt back does not pass." },
        { id: "hi-u122l1-drav", type: "vocab", front: "द्रव", reading: "drav", meaning: "a substance that flows", accept: ["a thing with a fixed amount and no fixed shape"], example: { jp: "कोई भी द्रव बर्तन के नीचे बैठ जाता है, पर उसका आकार बर्तन से तय होता है।", en: "Any flowing substance settles at the bottom of a vessel, but its shape is settled by the vessel." }, drill: { jp: "द्रव बर्तन के नीचे बैठ जाता है", en: "A flowing substance settles at the bottom" }, hint: "DRAV, masculine and three letters. द्र is द with a halant then र, both DENTAL. 🚨 THE GLOSS IS DELIBERATELY NOT 'A LIQUID': तरल (unit 95) is glossed 'in liquid form' and ACCEPTS 'liquid', so the two cards would have been one answer (unit 1 §9). द्रव is the noun, तरल the adjective." },
        { id: "hi-u122l1-kan", type: "vocab", front: "कण", reading: "kan", meaning: "a particle", accept: ["the smallest bit a substance comes in"], example: { jp: "हवा में धूल का हर कण इतना छोटा होता है कि वह घंटों नीचे नहीं आता।", en: "Every particle of dust in the air is so small that it does not come down for hours." }, drill: { jp: "धूल का हर कण बहुत छोटा है", en: "Every particle of dust is very small" }, hint: "KAN, masculine, and the ण is RETROFLEX — merged with न in the reading (unit 1 §1b). ⚠️ **CHECKED AGAINST कान, an ear (unit 20), AND कम, less (unit 1)**: kan, kaan and kam are three different readings, so no doubling is needed. Hindi uses कण of dust, of rice, of light." },
        { id: "hi-u122l1-jvalansheel", type: "vocab", front: "ज्वलनशील", reading: "jvalansheel", meaning: "inflammable", accept: ["that catches fire easily"], example: { jp: "यह पदार्थ ज्वलनशील है, इसलिए उसे आग के पास रखना मना है।", en: "This substance is inflammable, which is why keeping it near a fire is forbidden." }, drill: { jp: "यह पदार्थ ज्वलनशील है", en: "This substance is inflammable" }, hint: "JVA-LAN-SHEEL, an ADJECTIVE, consonant-final, so it does not change form at all. ज्व is a stacked conjunct — the same stack as ज्वार (u111l2) and ज्वालामुखी (unit 75). From जलना, to burn (unit 49), plus शील, a disposition — the same शील as सहनशीलता (u115l4)." },
      ],
    },
    {
      id: "hi-u122l2",
      unit: 122,
      lesson: 2,
      title: "Mixed, dissolved, impure",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe what happens when substances are put together: a mixture, a dissolved mixture, dilution, an impurity, a chemical salt and a metal.",
      items: [
        { id: "hi-u122l2-mishran", type: "vocab", front: "मिश्रण", reading: "mishran", meaning: "a mixture", accept: ["two things together, each still itself"], example: { jp: "हवा एक मिश्रण है, क्योंकि उसमें कई गैस साथ हैं पर कोई दूसरी बन नहीं जाती।", en: "Air is a mixture, because several gases are together in it but none becomes another." }, drill: { jp: "हवा कई गैस का एक मिश्रण है", en: "Air is a mixture of several gases" }, hint: "MISH-RAN, masculine, श्र a stacked conjunct and the ण RETROFLEX. 🚨 THE DEFINITION IS IN THE EXAMPLE and it is the line of this whole lesson: in a मिश्रण nothing changes into anything, and in the यौगिक of lesson 3 everything does. ⚠️ मिश्रधातु, an alloy, was passed over because it shares मिश्र with this card." },
        { id: "hi-u122l2-vilayan", type: "vocab", front: "विलयन", reading: "vilayan", meaning: "a dissolved mixture", accept: ["one substance gone evenly into another"], example: { jp: "नमक को पानी में घोलने पर जो बनता है, वह विलयन है — और उसमें नमक आँख से दिखता भी नहीं।", en: "What forms when salt is dissolved in water is a solution — and the salt is not even visible in it." }, drill: { jp: "पानी में घोलने पर विलयन बनता है", en: "A solution forms on dissolving it in water" }, hint: "VI-LA-YAN, masculine, both न DENTAL. 🚨 THE GLOSS IS DELIBERATELY NOT 'A SOLUTION': हल (unit 57) is glossed exactly that, and the grader would have accepted one typed word for two cards (unit 1 §9). ⚠️ The example uses घोलना, unit 80's verb, which is where this noun comes from." },
        { id: "hi-u122l2-tanukaran", type: "vocab", front: "तनुकरण", reading: "tanukaran", meaning: "dilution", accept: ["adding more liquid so the mixture gets weaker"], example: { jp: "दवा तेज़ थी, इसलिए तनुकरण के बाद ही बच्चे को दी गई।", en: "The medicine was strong, so it was given to the child only after dilution." }, drill: { jp: "तनुकरण के बाद ही दवा दी गई", en: "The medicine was given only after dilution" }, hint: "TA-NU-KA-RAN, masculine, त DENTAL and the ण RETROFLEX. तनु, thin, plus -करण, a making-into — the same -करण as सशक्तिकरण (u114l2), स्पष्टीकरण (u118l2) and वर्गीकरण (u121l4). ⚠️ Four of my units teach a -करण word; the suffix is worth learning once." },
        { id: "hi-u122l2-ashuddhi", type: "vocab", front: "अशुद्धि", reading: "ashuddhi", meaning: "an impurity", accept: ["something in a substance that should not be there"], example: { jp: "सोने में थोड़ी अशुद्धि हमेशा रहती है, और उसी से तय होता है कि वह कितना शुद्ध है।", en: "There is always a little impurity in gold, and that is what settles how pure it is." }, drill: { jp: "सोने में थोड़ी अशुद्धि हमेशा रहती है", en: "There is always a little impurity in gold" }, hint: "A-SHUD-DHI, feminine, and ⚠️ **IT ENDS IN A SHORT ि** — ashuddhi, never ashuddhii — the same shape as लिपि (u113l2) and उक्ति (u118l3). द्ध is a DOUBLED DENTAL, doubled in the reading. ⚠️ अ-, not, plus शुद्ध, pure (unit 6) — and शुद्ध CANNOT be matched here, because the अ before it is a letter." },
        { id: "hi-u122l2-lavan", type: "vocab", front: "लवण", reading: "lavan", meaning: "a chemical salt", accept: ["what an acid and an alkali make together"], example: { jp: "रसोई का नमक एक लवण है, पर हर लवण खाया नहीं जा सकता।", en: "Kitchen salt is a chemical salt, but not every chemical salt can be eaten." }, drill: { jp: "रसोई का नमक एक लवण है", en: "Kitchen salt is a chemical salt" }, hint: "LA-VAN, masculine, with a RETROFLEX ण. 🚨 THE GLOSS IS DELIBERATELY NOT 'SALT': नमक (unit 13) owns that, and the example exists to draw the line — a लवण is a CLASS of compound, and only one member of it goes on your food." },
        { id: "hi-u122l2-dhaatu", type: "vocab", front: "धातु", reading: "dhaatu", meaning: "a metal", accept: ["a shiny substance that carries heat and bends"], example: { jp: "लोहा और चाँदी दोनों धातु हैं, पर एक पर जंग लगता है और दूसरी पर नहीं।", en: "Iron and silver are both metals, but one rusts and the other does not." }, drill: { jp: "लोहा और चाँदी दोनों धातु हैं", en: "Iron and silver are both metals" }, hint: "DHAA-TU. 🚨 **FEMININE DESPITE ENDING IN ु** — यह धातु भारी है, never भारा — and nothing in this course predicts it, which makes it the hardest agreement in the unit. ⚠️ In grammar धातु also means a verb root, and u113 (mine) deliberately did NOT card it in that sense: one front, one meaning." },
      ],
    },
    {
      id: "hi-u122l3",
      unit: 122,
      lesson: 3,
      title: "Acid, alkali, and the reaction",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe a chemical reaction: an acid, an alkali, the reaction itself, a catalyst, the compound that results and what settles out of it.",
      items: [
        { id: "hi-u122l3-amla", type: "vocab", front: "अम्ल", reading: "amla", meaning: "an acid", accept: ["a sour substance that eats into things"], example: { jp: "कुछ फलों में हल्का अम्ल होता है, और वही उन्हें खट्टा बनाता है।", en: "There is a mild acid in some fruits, and that is what makes them sour." }, drill: { jp: "कुछ फलों में हल्का अम्ल होता है", en: "There is a mild acid in some fruits" }, hint: "AM-LA, masculine. म्ल is a stacked conjunct — म with a halant, then ल — and ⚠️ **THE FINAL a IS SAID HERE**: amla, not aml, because a word cannot end on a consonant cluster in Hindi. Compare मर्म marm (u118l3), where it is dropped. ⚠️ Not तेज़ाब, which is not carded: अम्ल is the chemistry word." },
        { id: "hi-u122l3-kshaar", type: "vocab", front: "क्षार", reading: "kshaar", meaning: "an alkali", accept: ["the opposite of an acid, that feels soapy"], example: { jp: "अम्ल और क्षार मिलाने पर दोनों बदल जाते हैं और एक लवण बन जाता है।", en: "When an acid and an alkali are put together both change and a salt is formed." }, drill: { jp: "अम्ल और क्षार मिलाने पर लवण बनता है", en: "When acid and alkali are put together a salt forms" }, hint: "KSHAAR, masculine. क्ष is one of unit 6's three letter-conjuncts. 🚨 THE EXAMPLE CLOSES LESSON 2's LOOP: लवण was glossed 'what an acid and an alkali make together', and this is the card that makes good on it. The pair अम्ल/क्षार is the oldest opposition in chemistry." },
        { id: "hi-u122l3-abhikriyaa", type: "vocab", front: "अभिक्रिया", reading: "abhikriyaa", meaning: "a chemical reaction", accept: ["substances changing into different ones"], example: { jp: "अभिक्रिया के बाद जो बचता है, वह पहले वाली चीज़ नहीं होती — यही उसे मिश्रण से अलग करता है।", en: "What is left after a reaction is not the earlier thing — that is what separates it from a mixture." }, drill: { jp: "अभिक्रिया के बाद पदार्थ बदल जाता है", en: "After a reaction the substance has changed" }, hint: "A-BHI-KRI-YAA. ⚠️ FEMININE IN -आ, against the rule. 🚨 क्रिया, a verb (u113l1), IS A STRING INSIDE IT AND THE ROUTER **CAN** MATCH IT, because the ि of अभि before it is a MĀTRĀ. The two are different words in different units and no drill mixes them. ⚠️ CONTRAST क्रियान्वयन (u114l4), where the same front CANNOT be matched." },
        { id: "hi-u122l3-utprerak", type: "vocab", front: "उत्प्रेरक", reading: "utprerak", meaning: "a catalyst", accept: ["something that speeds a reaction and is left over"], example: { jp: "उत्प्रेरक अभिक्रिया तेज़ कर देता है, पर खुद उसमें खर्च नहीं होता।", en: "A catalyst speeds a reaction up, but is not itself used up in it." }, drill: { jp: "उत्प्रेरक अभिक्रिया तेज़ कर देता है", en: "A catalyst speeds a reaction up" }, hint: "UT-PRE-RAK, masculine, with a DENTAL त्प stack and र. From प्रेरणा, inspiration — a catalyst 'inspires' the reaction, which is a surprisingly exact metaphor. ⚠️ Hindi uses it outside chemistry too, of a person who sets something off without taking part." },
        { id: "hi-u122l3-yaugik", type: "vocab", front: "यौगिक", reading: "yaugik", meaning: "a compound", accept: ["one new substance made of two joined for good"], example: { jp: "पानी एक यौगिक है — उसमें दो गैस हैं, पर उसे देखकर कोई गैस नहीं पहचान सकता।", en: "Water is a compound — there are two gases in it, but nobody can recognise a gas by looking at it." }, drill: { jp: "पानी दो गैस का एक यौगिक है", en: "Water is a compound of two gases" }, hint: "YAU-GIK, masculine. The ौ is the au of unit 3 — one sound. From योग, a joining. 🚨 THE PAIR WITH मिश्रण (lesson 2) IS THE POINT OF THE UNIT: in a मिश्रण you can still see both things, in a यौगिक you cannot, and this example and that one were written as a pair." },
        { id: "hi-u122l3-avakshep", type: "vocab", front: "अवक्षेप", reading: "avakshep", meaning: "a precipitate", accept: ["the solid that settles out of a reaction"], example: { jp: "दो विलयन मिलाने पर नीचे सफ़ेद अवक्षेप बैठ गया, और उसे छानकर अलग किया गया।", en: "When the two solutions were put together a white precipitate settled at the bottom, and it was separated by straining." }, drill: { jp: "दो विलयन मिलाने पर सफ़ेद अवक्षेप बैठा", en: "A white precipitate settled when the two solutions were mixed" }, hint: "A-VAK-SHEP, masculine, क्ष again. From क्षेप, a throwing — thrown down out of the liquid, which is what the word describes. ⚠️ The example uses छानकर, from छानना (unit 80), and the -कर form u117l1 (mine) teaches — the laboratory step and the grammar in one clause." },
      ],
    },
    {
      id: "hi-u122l4",
      unit: 122,
      lesson: 4,
      title: "Heat, and the change it makes",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name what heat does to matter: evaporation, condensation, the boiling point, the melting point, breaking down — and call a process chemical.",
      items: [
        { id: "hi-u122l4-vaashpiikaran", type: "vocab", front: "वाष्पीकरण", reading: "vaashpiikaran", meaning: "evaporation", accept: ["a liquid turning into air without boiling"], example: { jp: "गीले कपड़े का पानी धूप में हवा बन जाता है, और यह वाष्पीकरण है — उबलने की ज़रूरत ही नहीं।", en: "The water in a wet cloth becomes air in the sun, and this is evaporation — there is no need to boil at all." }, drill: { jp: "धूप में यह वाष्पीकरण होता रहता है", en: "In the sun this evaporation goes on" }, hint: "VAASH-PII-KA-RAN, masculine, ष्प RETROFLEX and the ण too. वाष्प, vapour, plus -ीकरण — a fourth -करण word in my units. ⚠️ **वाष्प IS NOT CARDED AND भाप IS NOT EITHER**: भाप is u126's (block 3, energy), so this example says धूप and सूखना instead and never names the steam." },
        { id: "hi-u122l4-sanghanan", type: "vocab", front: "संघनन", reading: "sanghanan", meaning: "condensation", accept: ["air turning back into drops on a cold surface"], example: { jp: "ठंडे गिलास के बाहर जो पानी दिखता है, वह संघनन से आता है और गिलास में से नहीं।", en: "The water that appears on the outside of a cold glass comes from condensation and not from inside the glass." }, drill: { jp: "गिलास के बाहर पानी संघनन से आता है", en: "The water outside the glass comes from condensation" }, hint: "SAN-GHA-NAN, masculine, घ with a puff of air and the ं before it written as the homorganic n. 🚨 THE EXAMPLE ANSWERS A REAL QUESTION a learner has asked since childhood, which is the point of teaching the word at all: the water is from the air, not through the glass." },
        { id: "hi-u122l4-kvathanaank", type: "vocab", front: "क्वथनांक", reading: "kvathanaank", meaning: "a boiling point", accept: ["the heat at which a liquid turns to gas"], example: { jp: "पहाड़ पर पानी का क्वथनांक नीचे गिर जाता है, इसलिए वहाँ दाल देर में पकती है।", en: "On a mountain water's boiling point falls, which is why lentils take longer to cook there." }, drill: { jp: "पहाड़ पर पानी का क्वथनांक गिर जाता है", en: "On a mountain water's boiling point falls" }, hint: "KVA-THA-NAANK, masculine, क्व a stacked conjunct and थ DENTAL with a puff of air. क्वथन, boiling, plus अंक, a number. ⚠️ **अंक (unit 34) IS NOT A SUBSTRING** — the string here is नांक, with a mātrā and an anusvāra, not the independent अ. Checked, because it looks like one." },
        { id: "hi-u122l4-galanaank", type: "vocab", front: "गलनांक", reading: "galanaank", meaning: "a melting point", accept: ["the heat at which a solid turns to liquid"], example: { jp: "लोहे का गलनांक इतना ऊँचा है कि वह कोयले की आग में नहीं पिघलता।", en: "Iron's melting point is so high that it does not melt in a coal fire." }, drill: { jp: "लोहे का गलनांक बहुत ऊँचा है", en: "Iron's melting point is very high" }, hint: "GA-LA-NAANK, masculine. 🚨 **THE SAME ENDING AS क्वथनांक ONE CARD ABOVE** — kvathanaank against galanaank — and the two sit side by side on purpose, because they are the two ends of one scale: a गलनांक is where a solid gives way, a क्वथनांक where a liquid does. From गलना, to melt." },
        { id: "hi-u122l4-apaghatan", type: "vocab", front: "अपघटन", reading: "apaghatan", meaning: "decomposition", accept: ["one substance breaking into two or more"], example: { jp: "गरमी में खाना खराब हो जाता है, और उसकी वजह अपघटन है — बड़े अणु टूटकर छोटे बन जाते हैं।", en: "Food spoils in the heat, and the cause of it is decomposition — large molecules break and become small ones." }, drill: { jp: "गरमी में खाना अपघटन से खराब होता है", en: "In the heat food spoils through decomposition" }, hint: "A-PA-GHA-TAN, masculine, घ with a puff of air and a RETROFLEX ट. अप-, away, plus घटन, a happening. ⚠️ **घटना IS NOT A SUBSTRING** — घटन has no final ा — and घटना is not a front anyway. The opposite of the यौगिक-making in lesson 3: this is a compound coming apart." },
        { id: "hi-u122l4-raasaayanik", type: "vocab", front: "रासायनिक", reading: "raasaayanik", meaning: "chemical", accept: ["having to do with substances changing"], example: { jp: "खाना पकाना एक रासायनिक काम है, चाहे रसोई में कोई उसे ऐसा न कहे।", en: "Cooking is a chemical business, even if nobody in the kitchen calls it that." }, drill: { jp: "खाना पकाना एक रासायनिक काम है", en: "Cooking is a chemical business" }, hint: "RAA-SAA-YA-NIK, an ADJECTIVE, consonant-final, so it does not change form at all. From रसायन, chemistry (unit 87), with both vowels lengthened — the same pattern as विकल्प → वैकल्पिक (u116l3). ⚠️ **रसायन IS NOT A SUBSTRING** — रासाय has two long vowels where रसाय has none — so the router cannot see the relation the hint names. 🚨 विषैला WAS REFUSED for this slot: ज़हरीला (unit 75) is glossed 'poisonous' and accepts 'toxic', an exact synonym no re-gloss could save." },
      ],
    },
  ],
};
