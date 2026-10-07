// HI Unit 129 — पोषण और रेस्तराँ ("Nutrition and the restaurant") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 3 (u124–u136). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, then unit124.js §C1–§C11 — this block's own record.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 9 (B2)"). Theme ASSIGNED CENTRALLY and
// probed at **6 of 18 taken** against the real 2,328-card corpus, 2026-10-06
// (committed evidence: `scripts/qa/theme-holes.mjs` + `theme-holes-hi.txt`).
//
// 🚨 पोषण IS u77's AND IS NOT RE-CARDED. The title names it; **कुपोषण (l2) is a
// different lexeme and IS carded**, and its hint says that पोषण sits inside it
// with a mātrā before it, so the router can match the shorter card — the
// छात्रावास / छात्र shape of unit 97, named rather than discovered later.
//
// MEASURED HOLE: u36 taught COOKING — परोसना, उबालना, तलना, भूनना, थाली,
// मिठाई, नाश्ता, मसाला, चावल — and u13 भोजन, भूख and प्यास; u77 पोषण and
// परहेज़; u56 बासी; u37 बिल; u15 रसोई. So the corpus could cook a meal and
// **could not name a single nutrient**, no diet, no malnutrition, no obesity, no
// digestion, no fast, no restaurant, no menu, no waiter, no dish, no drink and
// no vegetarian.
//
// ⚠️ TWO GLOSSES ARE LONG ON PURPOSE, BECAUSE THE GRADER COMPARES STRINGS:
//   • **रेस्तराँ is "an eating house you sit down in"**, because होटल@u9 already
//     owns "a restaurant" — in Indian Hindi a होटल IS where you eat, which is
//     exactly why the two cards would otherwise be one.
//   • **टिप is "a tip left for service"**, because a loanword must not gloss to
//     its own transliteration (§9): `checkProduce` would take the answer `tip`
//     straight off the prompt.
//
// ⚠️ THE ँ IN रेस्तराँ IS THE ONLY CHANDRABINDU IN A B2 FRONT IN THIS BLOCK, and
// it is word-final, so §1 writes it **n**: `restaraan`. The visarga ः stays
// banned (unit61.js §B1) and is spent nowhere.
//
// ⚠️ GENDER: FEMININE — वसा (-आ, against the rule), कैलोरी, चटनी. MASCULINE —
// प्रोटीन, खनिज, विटामिन, रेशा (-आ, with the rule), आहार, कुपोषण, मोटापा, पाचन,
// उपवास, रेस्तराँ, मेनू, वेटर, टिप, व्यंजन, पेय, सलाद, अचार. संतुलित, स्वादिष्ट,
// शाकाहारी and मांसाहारी are ADJECTIVES; शाकाहारी and मांसाहारी also work as
// nouns and do not change for gender either way.
export const HI_UNIT129 = {
  id: "hi-u129",
  lang: "hi",
  title: "पोषण और रेस्तराँ",
  order: 129,
  stage: "b2",
  lessons: [
    {
      id: "hi-u129l1",
      unit: 129,
      lesson: 1,
      title: "What food is made of",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name protein, fat, minerals, vitamins and fibre, and say how many calories a meal carries.",
      items: [
        { id: "hi-u129l1-protiin", type: "vocab", front: "प्रोटीन", reading: "protiin", meaning: "protein", accept: ["the part of food that builds the body"], example: { jp: "दाल और अंडे में प्रोटीन ज़्यादा होता है।", en: "There is more protein in pulses and eggs." }, drill: { jp: "दाल में प्रोटीन ज़्यादा होता है", en: "There is more protein in pulses" }, hint: "PRO-TIIN, masculine, consonant-final. प्र is a stacked conjunct, so the word opens on two consonants together — pro, never paro. ⚠️ **THE ई IS LONG and that is where the reading parts from the English**: `protiin`, so the typed answer protein is not what the card reads (§9)." },
        { id: "hi-u129l1-vasaa", type: "vocab", front: "वसा", reading: "vasaa", meaning: "fat as a nutrient", accept: ["the oily part of food", "body fat as a substance"], example: { jp: "तली चीज़ों में वसा बहुत होती है।", en: "There is a lot of fat in fried things." }, drill: { jp: "तली चीज़ों में वसा बहुत होती है", en: "There is a lot of fat in fried things" }, hint: "VA-SAA — ⚠️ FEMININE, and ⚠️ **-आ AGAINST THE RULE** (unit1 §4): वसा होती है, ज़्यादा वसा. Both a's, the first SHORT and the second long. ⚠️ Not तेल (unit 36), which is the bottle in the kitchen: वसा is what the तेल becomes in food and in a body, which is why the gloss says \"as a nutrient\"." },
        { id: "hi-u129l1-khanij", type: "vocab", front: "खनिज", reading: "khanij", meaning: "a mineral", accept: ["an element the body needs in a small amount"], example: { jp: "हरी सब्ज़ी से शरीर को ज़रूरी खनिज मिलते हैं।", en: "The body gets the minerals it needs from green vegetables." }, drill: { jp: "हरी सब्ज़ी से ज़रूरी खनिज मिलते हैं", en: "Green vegetables give the necessary minerals" }, hint: "KHA-NIJ, masculine, consonant-final, ख with a puff of air and ⚠️ THE ि SHORT: kha-nij. From खनना, to dig — the same root as खदान (unit 125), so a खनिज is literally what is dug out, and the food sense is the borrowed one. It is also the word in खनिज तेल, mineral oil." },
        { id: "hi-u129l1-vitaamin", type: "vocab", front: "विटामिन", reading: "vitaamin", meaning: "a vitamin", accept: ["one of the substances food must carry for the body to work"], example: { jp: "धूप से शरीर को एक ज़रूरी विटामिन मिलता है।", en: "The body gets one necessary vitamin from sunlight." }, drill: { jp: "धूप से एक ज़रूरी विटामिन मिलता है", en: "One necessary vitamin comes from sunlight" }, hint: "VI-TAA-MIN, masculine. ⚠️ THE ि IS SHORT AND THE ा LONG — vi-taa-min, which is NOT where English puts the stress. The ट is RETROFLEX, merged to t (§1b): the tongue curls back, which is the single most audible difference from the English word." },
        { id: "hi-u129l1-reshaa", type: "vocab", front: "रेशा", reading: "reshaa", meaning: "dietary fibre", accept: ["the part of food the body cannot break down", "a thread of a plant"], example: { jp: "मोटे अनाज और हरी सब्ज़ी में रेशा ज़्यादा रहता है।", en: "There is more fibre in coarse grain and green vegetables." }, drill: { jp: "मोटे अनाज में रेशा ज़्यादा रहता है", en: "Coarse grain has more fibre" }, hint: "RE-SHAA, masculine and regular -ा, so the oblique is रेशे. ⚠️ Read it against रेशम, silk (unit 40) — the same first half, and the two really are related: a रेशा is a thread, and रेशम is cloth made of them. ⚠️ **TWO LIVE SENSES, BOTH IN THE ACCEPT LIST** — the food one this lesson needs, and the plant-thread one u136 lives on." },
        { id: "hi-u129l1-kailorii", type: "vocab", front: "कैलोरी", reading: "kailorii", meaning: "a calorie", accept: ["the unit food energy is counted in"], example: { jp: "एक रोटी में कितनी कैलोरी होती है, यह लिखा रहता है।", en: "How many calories there are in one flatbread is written down." }, drill: { jp: "एक रोटी में कितनी कैलोरी होती है", en: "How many calories are in one flatbread" }, hint: "KAI-LO-RII — ⚠️ FEMININE: कितनी कैलोरी, ज़्यादा कैलोरी. 🚨 THE DIPHTHONG ऐ, which is ONE vowel (unit 3) — kai, never ka-i. ⚠️ Counted in the SINGULAR after a number in ordinary speech: दो सौ कैलोरी, not कैलोरियाँ." },
      ],
    },
    {
      id: "hi-u129l2",
      unit: 129,
      lesson: 2,
      title: "Eating well and eating badly",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say that a diet is balanced and a food nourishing, and talk about obesity, the feeling of having eaten enough, and a fast kept on purpose.",
      items: [
        { id: "hi-u129l2-aahaar", type: "vocab", front: "आहार", reading: "aahaar", meaning: "a diet", accept: ["what a person eats taken as a whole", "the pattern of somebody's eating"], example: { jp: "डॉक्टर ने उसका आहार पूरा बदल दिया।", en: "The doctor changed his diet completely." }, drill: { jp: "डॉक्टर ने उसका आहार बदल दिया", en: "The doctor changed his diet" }, hint: "AA-HAAR, masculine, consonant-final, opening on the independent long आ (unit 1) and the ह is HEARD. ⚠️ Not खाना (unit 13) and not भोजन (unit 13): those are a MEAL, आहार is the whole PATTERN — which is why a डॉक्टर changes an आहार and a cook makes a भोजन." },
        { id: "hi-u129l2-santulit", type: "vocab", front: "संतुलित", reading: "santulit", meaning: "balanced", accept: ["having the right amount of each thing"], example: { jp: "संतुलित आहार में दाल, सब्ज़ी और दूध सब कुछ रहता है।", en: "A balanced diet has pulses, vegetables and milk — everything." }, drill: { jp: "संतुलित आहार में सब कुछ रहता है", en: "A balanced diet has everything in it" }, hint: "SAN-TU-LIT — an ADJECTIVE, so no gender change: संतुलित आहार, संतुलित बात. The ं before त is the matching DENTAL nasal (§1). Built on संतुलन, balance, uncarded. ⚠️ Not बराबर (unit 19), which means equal: संतुलित means each part is in its RIGHT amount, not the same amount." },
        { id: "hi-u129l2-paushtik", type: "vocab", front: "पौष्टिक", reading: "paushtik", meaning: "nourishing", accept: ["giving the body what it actually needs"], example: { jp: "दाल और सब्ज़ी पौष्टिक होती हैं, इसलिए आहार में उन्हें रोज़ रखा जाता है।", en: "Lentils and vegetables are nourishing, which is why they are kept in the diet every day." }, drill: { jp: "दाल और सब्ज़ी पौष्टिक होती हैं", en: "Lentils and vegetables are nourishing" }, hint: "PAUSH-TIK, an INVARIANT adjective — the ौ of unit 3 is one sound and ष is RETROFLEX. From पोषण, nourishment, in this unit's title. ⚠️ **NOT स्वादिष्ट in the next lesson**: a thing can be one without the other, and holding the two apart is this lesson's whole point. 🚨 **कुपोषण WAS REMOVED FROM THIS SLOT**: u114l4 owns it, where it belongs — malnutrition is a development problem before it is a nutrition fact." },
        { id: "hi-u129l2-motaapaa", type: "vocab", front: "मोटापा", reading: "motaapaa", meaning: "obesity", accept: ["carrying far too much weight for health"], example: { jp: "शहरों में मोटापा अब एक बड़ी बीमारी है।", en: "In the cities obesity is now a big illness." }, drill: { jp: "शहरों में मोटापा बड़ी बीमारी है", en: "Obesity is a big illness in the cities" }, hint: "MO-TAA-PAA, masculine and regular -ा, so the oblique is मोटापे. The ट is RETROFLEX, merged to t (§1b). Built on मोटा, fat (unit 16), with -पा making the abstract — the same -पा as बुढ़ापा (unit 59). ⚠️ **AND मोटा IS NOT A MATCHABLE STRING HERE**, because the ा after it belongs to मोटा itself and the प follows: checked." },
        { id: "hi-u129l2-tripti", type: "vocab", front: "तृप्ति", reading: "tripti", meaning: "the feeling of having eaten enough", accept: ["being satisfied rather than merely full"], example: { jp: "थोड़ा कम खाकर उठना ठीक रहता है, क्योंकि तृप्ति पेट से नहीं मन से आती है।", en: "It is better to get up having eaten a little less, because satiety comes from the mind and not the stomach." }, drill: { jp: "तृप्ति पेट से नहीं मन से आती है", en: "Satiety comes from the mind and not the stomach" }, hint: "TRIP-TI, feminine, and ⚠️ **IT ENDS IN A SHORT ि** — tripti, never -ii. 🚨 **ृ, THE MĀTRĀ OF ऋ, IS SPENT A SEVENTH TIME HERE** — the running list is कृपया (u7l2), पृष्ठभूमि (u62l1), वृद्धि and प्रवृत्ति (u69l4), पुनरावृत्ति (u73l4), दृष्टांत (u98l1) — and the mark stays uncarded with no stroke data added (unit 1 §3, §7). It reads ri. 🚨 **पाचन WAS REMOVED FROM THIS SLOT**: u121l2 owns digestion as a process of the body." },
        { id: "hi-u129l2-upvaas", type: "vocab", front: "उपवास", reading: "upvaas", meaning: "a fast kept on purpose", accept: ["going without food as a vow or for health"], example: { jp: "वह हफ़्ते में एक दिन उपवास रखती है।", en: "She keeps a fast one day a week." }, drill: { jp: "वह हफ़्ते में एक दिन उपवास रखती है", en: "She keeps a fast one day a week" }, hint: "UP-VAAS, masculine, consonant-final. उप- (near) plus वास, dwelling — the same वास as प्रवास (unit 92) and छात्रावास (unit 97). The frame is उपवास रखना, to keep a fast. ⚠️ **THE GLOSS SAYS \"on purpose\" BECAUSE परहेज़ (unit 77) IS AVOIDING ONE FOOD ON ADVICE** — an उपवास is going without any, by choice." },
      ],
    },
    {
      id: "hi-u129l3",
      unit: 129,
      lesson: 3,
      title: "At the restaurant",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Order in a restaurant: ask for the menu, call the waiter, name a cooked dish, say it is delicious and leave a tip.",
      items: [
        { id: "hi-u129l3-restaraan", type: "vocab", front: "रेस्तराँ", reading: "restaraan", meaning: "an eating house you sit down in", accept: ["a place with tables where food is ordered and served"], example: { jp: "नए रेस्तराँ में बैठने की जगह बहुत कम है।", en: "There is very little room to sit in the new restaurant." }, drill: { jp: "नए रेस्तराँ में जगह बहुत कम है", en: "There is very little room in the new restaurant" }, hint: "RES-TA-RAAN, masculine. स्त is a stacked conjunct with a DENTAL त (unit 6), and 🚨 **THE ँ IS THE CHANDRABINDU ON A WORD-FINAL VOWEL**, which §1 writes **n**: restaraan. ⚠️ **THE GLOSS IS LONG BECAUSE होटल (unit 9) ALREADY OWNS \"a restaurant\"** — in Indian Hindi a होटल is where you eat and may not have a bed at all." },
        { id: "hi-u129l3-menuu", type: "vocab", front: "मेनू", reading: "menuu", meaning: "a menu", accept: ["the printed list of what can be ordered"], example: { jp: "मेनू देखकर उसने सिर्फ़ दाल और रोटी ली।", en: "After looking at the menu she took only pulses and bread." }, drill: { jp: "मेनू देखकर उसने दाल और रोटी ली", en: "After seeing the menu she took pulses and bread" }, hint: "ME-NUU, masculine, and ⚠️ **THE FINAL ऊ IS LONG**: me-nuu, which is what keeps the reading off the English spelling (§9). A loanword with no Hindi rival in use — सूची exists but nobody says it at a table." },
        { id: "hi-u129l3-vetar", type: "vocab", front: "वेटर", reading: "vetar", meaning: "a waiter", accept: ["the person who takes an order and brings the food"], example: { jp: "वेटर ने पानी पहले ही मेज़ पर रख दिया।", en: "The waiter put the water on the table in advance." }, drill: { jp: "वेटर ने पानी मेज़ पर रख दिया", en: "The waiter put water on the table" }, hint: "VE-TAR, masculine and used for a woman too in practice. The ट is RETROFLEX, merged to t (§1b) — tongue curled back, which is why the reading is `vetar` and not the English waiter. ⚠️ Not रसोइया (unit 96), who cooks: the वेटर only carries." },
        { id: "hi-u129l3-tip", type: "vocab", front: "टिप", reading: "tip", meaning: "a tip left for service", accept: ["small money given on top of the bill"], example: { jp: "बिल देने के बाद उसने मेज़ पर टिप छोड़ दी।", en: "After paying the bill he left a tip on the table." }, drill: { jp: "उसने मेज़ पर टिप छोड़ दी", en: "He left a tip on the table" }, hint: "TIP — ⚠️ FEMININE despite being consonant-final: टिप छोड़ दी, अच्छी टिप. It opens on the RETROFLEX ट, merged to t (§1b). ⚠️ **THE GLOSS SAYS \"left for service\" FOR A MECHANICAL REASON** (§9): `checkProduce` accepts a card's own reading, so a gloss of just \"a tip\" would take the answer `tip` straight off the prompt." },
        { id: "hi-u129l3-pakvaan", type: "vocab", front: "पकवान", reading: "pakvaan", meaning: "a cooked dish served at a meal", accept: ["one named item that has been cooked"], example: { jp: "मेनू पर दस पकवान थे, पर वेटर ने सिर्फ़ तीन की तारीफ़ की।", en: "There were ten dishes on the menu, but the waiter praised only three of them." }, drill: { jp: "मेनू पर दस पकवान लिखे थे", en: "Ten dishes were written on the menu" }, hint: "PAK-VAAN, masculine. From पकना, to be cooked. 🚨 **व्यंजन WAS REMOVED FROM THIS SLOT AND BOTH SENSES SURVIVED**: u113l2 teaches व्यंजन as a CONSONANT, and one front cannot also be the dish — so the dish took the word a Hindi menu prints anyway. This is the जंग precedent: when both senses are genuinely wanted, the resolution that keeps both wins. ⚠️ A पकवान is one named cooked item, not खाना as a whole." },
        { id: "hi-u129l3-svaadisht", type: "vocab", front: "स्वादिष्ट", reading: "svaadisht", meaning: "delicious", accept: ["very good to eat"], example: { jp: "यह व्यंजन देखने में साधारण और खाने में स्वादिष्ट है।", en: "This dish looks ordinary and tastes delicious." }, drill: { jp: "यह व्यंजन बहुत स्वादिष्ट है", en: "This dish is very delicious" }, hint: "SVAA-DISHT — an ADJECTIVE, no gender change: स्वादिष्ट व्यंजन, स्वादिष्ट रोटी. 🚨 **TWO STACKS, ONE AT EACH END**: स्व opens it on two consonants, and ष्ट closes it — ष with a RETROFLEX ट under it (unit 6), the same stack as परिशिष्ट (unit 97). Built on स्वाद, taste (unit 36)." },
      ],
    },
    {
      id: "hi-u129l4",
      unit: 129,
      lesson: 4,
      title: "On the plate",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say whether somebody is vegetarian or eats meat, and name a drink, a salad, a chutney and a pickle.",
      items: [
        { id: "hi-u129l4-shaakaahaarii", type: "vocab", front: "शाकाहारी", reading: "shaakaahaarii", meaning: "vegetarian", accept: ["one who eats no meat", "without meat in it"], example: { jp: "इस रेस्तराँ में सिर्फ़ शाकाहारी व्यंजन मिलते हैं।", en: "Only vegetarian dishes are available in this restaurant." }, drill: { jp: "यहाँ सिर्फ़ शाकाहारी व्यंजन मिलते हैं", en: "Only vegetarian dishes are available here" }, hint: "SHAA-KAA-HAA-RII — works as both an ADJECTIVE and a NOUN, and does not change for gender either way: शाकाहारी आदमी, शाकाहारी औरत. शाक, a green, plus आहार (l2) — ⚠️ **AND आहार IS NOT A MATCHABLE STRING HERE**, because the अ of आहार absorbs into the ा: the word is शाका-हारी, not शाक+आहार. Checked." },
        { id: "hi-u129l4-maansaahaarii", type: "vocab", front: "मांसाहारी", reading: "maansaahaarii", meaning: "meat-eating", accept: ["one who eats meat", "with meat in it"], example: { jp: "उसका परिवार मांसाहारी है और उसकी पत्नी का नहीं।", en: "His family eats meat and his wife's does not." }, drill: { jp: "उसका परिवार मांसाहारी है", en: "His family eats meat" }, hint: "MAAN-SAA-HAA-RII — adjective and noun, no gender change. 🚨 **THE SAME WORD AS THE CARD BEFORE WITH ONE HALF SWAPPED:** मांस, flesh, in place of शाक, a green — which is the pair the whole lesson is built on. ⚠️ The ं here is written on a LONG आ: maan, and the स after it is where §1's homorganic rule gives plain n." },
        { id: "hi-u129l4-pey", type: "vocab", front: "पेय", reading: "pey", meaning: "a beverage", accept: ["anything made to be drunk"], example: { jp: "गरमी में ठंडा पेय हर मेज़ पर रहता है।", en: "In the heat a cold beverage is on every table." }, drill: { jp: "ठंडा पेय हर मेज़ पर रहता है", en: "A cold beverage is on every table" }, hint: "PEY, masculine, ONE syllable, and the य closes it — pey, not pe-ya. From पीना, to drink (unit 13), in its Sanskritic form: a पेय is literally 'to-be-drunk'. ⚠️ Not पानी (unit 5), which is water: a पेय is MADE, which is why a मेनू (l3) lists them separately." },
        { id: "hi-u129l4-salaad", type: "vocab", front: "सलाद", reading: "salaad", meaning: "a salad", accept: ["raw cut vegetables served beside a meal"], example: { jp: "भारत में सलाद खाने के साथ ही आता है, पहले नहीं।", en: "In India a salad comes with the meal itself, not before it." }, drill: { jp: "सलाद खाने के साथ आता है", en: "The salad comes with the meal" }, hint: "SA-LAAD, masculine, consonant-final, and the द is DENTAL. ⚠️ **THE FIRST a IS SHORT AND THE SECOND LONG** — sa-laad, which is what keeps the reading off the English salad (§9). In India it is usually onion, cucumber and lemon rather than leaves, and it comes WITH the food, not before it." },
        { id: "hi-u129l4-chatnii", type: "vocab", front: "चटनी", reading: "chatnii", meaning: "a chutney", accept: ["a ground paste of herbs or fruit eaten in small amounts"], example: { jp: "हरी चटनी के बिना यह व्यंजन कुछ कम लगता है।", en: "Without the green chutney this dish feels lacking." }, drill: { jp: "हरी चटनी के बिना व्यंजन कम लगता है", en: "The dish feels lacking without green chutney" }, hint: "CHAT-NII — ⚠️ FEMININE: हरी चटनी, चटनी बनी. The ट is RETROFLEX, merged to t (§1b). From चाटना, to lick. ⚠️ Not मसाला (unit 36), which goes INTO the cooking: a चटनी is ground fresh and put on the plate beside the food, like the next card." },
        { id: "hi-u129l4-achaar", type: "vocab", front: "अचार", reading: "achaar", meaning: "a pickle", accept: ["fruit or vegetable kept in oil and salt for months"], example: { jp: "गरमी में बना अचार पूरे साल चलता है।", en: "Pickle made in the hot season lasts the whole year." }, drill: { jp: "गरमी में बना अचार पूरे साल चलता है", en: "Pickle made in the hot weather lasts all year" }, hint: "A-CHAAR, masculine, consonant-final: दो तरह के अचार. ⚠️ Read it against आचार, conduct — the SAME letters with a long आ at the front, and a completely different word. 🚨 **THE PAIR IS A REAL TRAP AND THE READINGS DIFFER BY ONE LETTER**: अचार `achaar`, आचार `aachaar`. The second is not carded; the first is in every Indian kitchen." },
      ],
    },
  ],
};
