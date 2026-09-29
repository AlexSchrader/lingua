// HI Unit 36 — रसोई और खाना ("The kitchen and the meal") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 1. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT. The scaffold called this "Nature and animals" — which u21
// जानवर और कुदरत already IS, and A2 has a second nature slot at u44 ("Nature and
// science", block 2). So the name pointed at a domain that is spoken for twice
// over. The hole it was rethemed into was MEASURED on the 662-card A1 corpus:
//     cooking verbs   **1 of 12** — only काटना (u26). No word for cooking,
//                     boiling, frying, roasting, peeling or serving.
//     kitchen objects **2 of 14** — only चूल्हा (u15) and बोतल (u18). The course
//                     had named twenty foods since u13 and could not name a
//                     spoon, a plate, a bowl, a knife, a pan or a lid.
// u13 खाना-पीना owns the FOOD; u15 घर के अंदर owns the room. This unit is the
// EQUIPMENT and the COOKING, which neither of them touched.
//
// ⚠️ TWO GLOSSES ARE DELIBERATELY LONGER THAN THE OBVIOUS ONE, TO CLEAR AN A1
// accept[] ENTRY (§9 — and `normalizeMeaning` strips parentheses, so the
// discriminator has to be a WORD):
//   • पकाना is "to cook on a fire", NOT "to cook" — बनाना (u12l3, "to prepare")
//     already carries "to cook" in its accept[].
//   • मिठाई is "an Indian sweet", NOT "a sweet" — मीठा (u13l4, "sweet") already
//     carries "a sweet".
// AND ONE DOUBLET WAS DROPPED: प्लेट, because थाली is the plate an Indian meal is
// actually served on and one plate word is enough. मांस is deliberately left for a
// later slot — it is worth a card and this unit had no room after the equipment.
//
// ⚠️ AND ONE CARD WAS CAUGHT BY A SPELLING VARIANT, WHICH IS WORTH A WARNING TO THE
// LATER BLOCKS. l1 opened with बरतन ("cooking pots") in draft, and the front check
// said FREE — because the corpus spells it बर्तन, WITH the र्, at u15l3. Both
// spellings are real Hindi and they are DIFFERENT STRINGS, so front-uniqueness and
// `lint:curriculum` would both have stayed green and the language would have taught
// one word twice. What caught it was the READING check: बरतन and बर्तन both read
// `bartan`, and 864 fronts must produce 864 distinct readings. चिमटा took its
// place. **CHECK A CANDIDATE BY ITS READING, NOT ONLY BY ITS SPELLING** — Hindi has
// plenty of these pairs (मौका/मौक़ा, दस्तखत/दस्तख़त, बरतन/बर्तन).
//
// 🚨 §1(b)'s DOUBLING HATCH FIRES FOR THE SECOND TIME IN THE LANGUAGE, ON आटा,
// AND THE TRIGGER IS WIDER THAN unit11.js's WORDING. That file records साठ/साथ as
// "the only WORD pair in the language that needed the hatch", and measured the
// trigger as a collision between two FRONTS. आटा is not that case and needs the
// hatch anyway:
//     आटा  ("flour", RETROFLEX ट) would read `aataa`
//     आता  (the habitual of आना, u12l1, DENTAL त) also reads `aataa`
// आता is not a front — it is a generated form — so the 720-fronts-to-720-distinct
// -readings check would have stayed green and a dictation card for आटा would have
// had two right answers, one of them the commonest verb form in the language. So
// **आटा is authored `aattaa`**, which is also exactly how §2 reads the ट glyph
// (tta), and the doubling is the mnemonic as well as the fix.
// ⚠️ THE RULE IS THEREFORE WIDENED, and later blocks should apply the wider one:
// the hatch fires when a retroflex word collides with any form a learner MEETS,
// front or inflection — not only with another card.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   कड़ाही, केतली, थाली, कटोरी, मिठाई, मिर्च are FEMININE — मिर्च ends in a
//   consonant, §4's unpredictable class.
//   चिमटा, ढक्कन, चाकू, गिलास, चम्मच, कप, जग, नाश्ता, मसाला, अंडा, आटा are
//   MASCULINE. ⚠️ तवा is MASCULINE despite the -ा looking like कड़ाही's -ी pair,
//   and चाकू is MASCULINE despite the -ू; both are named in their hints.
//
// RETROFLEX/DENTAL BEYOND आटा: checked against all 864 readings. कड़ाही karaahii
// (ड़ → r), ढक्कन dhakkan, कटोरी katorii, तवा tavaa, मिठाई mithaaii, थाली thaalii,
// नाश्ता naashtaa and अंडा andaa have no counterpart in the corpus and none
// doubles. मिठाई mithaaii is not मीठा miithaa (u13l4) — one is a long ii, the
// other short, and §1's length-by-doubling is the only thing keeping them apart.
export const HI_UNIT36 = {
  id: "hi-u36",
  lang: "hi",
  title: "रसोई और खाना",
  order: 36,
  stage: "a2",
  lessons: [
    {
      id: "hi-u36l1",
      unit: 36,
      lesson: 1,
      title: "The things on the stove",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the pans and tools in an Indian kitchen and tell someone what to put where.",
      items: [
        { id: "hi-u36l1-chimtaa", type: "vocab", front: "चिमटा", reading: "chimtaa", meaning: "kitchen tongs", accept: ["tongs", "a pair of tongs", "a roti lifter"], example: { jp: "माँ ने चिमटे से गरम तवा उठाया।", en: "Mum lifted the hot griddle with the tongs." }, drill: { jp: "चिमटा चूल्हे के पास रखो", en: "Keep the tongs near the stove" }, hint: "CHIM-TAA, MASCULINE, plural चिमटे, retroflex ट. The flat iron tongs every Indian kitchen keeps by the तवा for turning रोटी and lifting a hot pan. ⚠️ बर्तन, a dish, is ALREADY TAUGHT at u15l3 — this card was बरतन in draft until the reading check refused it." },
        { id: "hi-u36l1-karaahii", type: "vocab", front: "कड़ाही", reading: "karaahii", meaning: "a deep frying pan", accept: ["a wok", "a karahi", "a deep pan"], example: { jp: "कड़ाही में तेल गरम करो।", en: "Heat the oil in the deep pan." }, drill: { jp: "कड़ाही चूल्हे पर रखो", en: "Put the deep pan on the stove" }, hint: "KA-RAA-HII, FEMININE, plural कड़ाहियाँ, and the ड़ is §1(c)'s curled-back r — so ka-RAA-hii, never ka-DAA-hii. Round-bottomed and deep: it is what तलना in lesson 3 needs." },
        { id: "hi-u36l1-tavaa", type: "vocab", front: "तवा", reading: "tavaa", meaning: "a flat griddle", accept: ["a tawa", "a flat pan", "a hotplate for bread"], example: { jp: "माँ तवे पर रोटी बनाती हैं।", en: "Mum makes flatbread on the griddle." }, drill: { jp: "यह तवा बहुत गरम है", en: "This griddle is very hot" }, hint: "TA-VAA, MASCULINE despite the -ा sitting next to कड़ाही's -ी — the two are a pair in the kitchen and not a gender pair. Flat and shallow, for रोटी (u13); the कड़ाही is the deep one." },
        { id: "hi-u36l1-dhakkan", type: "vocab", front: "ढक्कन", reading: "dhakkan", meaning: "a lid", accept: ["a cover", "a cap", "a top"], example: { jp: "डिब्बे का ढक्कन बंद करो।", en: "Close the box's lid." }, drill: { jp: "कड़ाही पर ढक्कन रखो", en: "Put the lid on the deep pan" }, hint: "DHAK-KAN, MASCULINE, with the RETROFLEX ढ at the front and the doubled क of §1's gemination. It fits a pan, a bottle or a pen — any lid at all." },
        { id: "hi-u36l1-chaakuu", type: "vocab", front: "चाकू", reading: "chaakuu", meaning: "a knife", accept: ["a kitchen knife", "a blade"], example: { jp: "इस चाकू से सब्ज़ी काटो।", en: "Cut the vegetables with this knife." }, drill: { jp: "यह चाकू बहुत तेज़ है", en: "This knife is very sharp" }, hint: "CHAA-KUU, MASCULINE despite the -ू ending, plural चाकू (unchanged). तेज़ (u24) does double duty here: fast for a train, sharp for a knife, strong for tea." },
        { id: "hi-u36l1-ketlii", type: "vocab", front: "केतली", reading: "ketlii", meaning: "a kettle", accept: ["a teapot", "a water boiler"], example: { jp: "केतली में पानी उबालो।", en: "Boil the water in the kettle." }, drill: { jp: "चाय की केतली मेज़ पर है", en: "The tea kettle is on the table" }, hint: "KET-LII, FEMININE, plural केतलियाँ, DENTAL त. In India it is as often the pot the tea is brewed and carried in as an electric boiler." },
      ],
    },
    {
      id: "hi-u36l2",
      unit: 36,
      lesson: 2,
      title: "What you eat off, and drink from",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Lay a place at an Indian table and ask for what is missing.",
      items: [
        { id: "hi-u36l2-thaalii", type: "vocab", front: "थाली", reading: "thaalii", meaning: "a steel dinner plate", accept: ["a thali", "a large round plate", "a platter"], example: { jp: "उसकी थाली में चावल और दाल थे।", en: "There was rice and lentils on her plate." }, drill: { jp: "यह थाली बहुत बड़ी है", en: "This plate is very big" }, hint: "THAA-LII, FEMININE, plural थालियाँ, DENTAL थ. The round steel plate an Indian meal comes on, with small bowls set into it — and by extension the meal itself: एक थाली means one set meal." },
        { id: "hi-u36l2-katorii", type: "vocab", front: "कटोरी", reading: "katorii", meaning: "a small bowl", accept: ["a little dish", "a katori", "a bowl for dal"], example: { jp: "दही एक छोटी कटोरी में था।", en: "The yoghurt was in a small bowl." }, drill: { jp: "कटोरी में थोड़ी दाल डालो", en: "Put a little lentil soup in the bowl" }, hint: "KA-TO-RII, FEMININE, plural कटोरियाँ, retroflex ट. The small bowl that sits on the थाली for दाल or दही. डालो is u26's डालना — to pour." },
        { id: "hi-u36l2-gilaas", type: "vocab", front: "गिलास", reading: "gilaas", meaning: "a tumbler", accept: ["a drinking glass", "a steel cup", "a glass of water"], example: { jp: "मुझे एक गिलास ठंडा पानी दो।", en: "Give me a glass of cold water." }, drill: { jp: "यह गिलास साफ़ नहीं है", en: "This tumbler is not clean" }, hint: "GI-LAAS, MASCULINE, plural गिलास (unchanged). From English 'glass', but in India it is usually steel, not glass. दो here is देना's irregular imperative — not दो, two (u3)." },
        { id: "hi-u36l2-chammach", type: "vocab", front: "चम्मच", reading: "chammach", meaning: "a spoon", accept: ["a teaspoon", "a spoonful"], example: { jp: "चाय में एक चम्मच चीनी मिलाओ।", en: "Stir a spoonful of sugar into the tea." }, drill: { jp: "मुझे एक चम्मच चाहिए", en: "I need a spoon" }, hint: "CHAM-MACH, MASCULINE, doubled म (§1's gemination), plural चम्मच (unchanged). It is also the measure: एक चम्मच चीनी. मिलाओ is u31's मिलाना in the imperative." },
        { id: "hi-u36l2-kap", type: "vocab", front: "कप", reading: "kap", meaning: "a teacup", accept: ["a cup", "a mug", "a cupful"], example: { jp: "सुबह मैं एक कप चाय पीता हूँ।", en: "I drink a cup of tea in the morning." }, drill: { jp: "यह कप बहुत छोटा है", en: "This cup is very small" }, hint: "KAP, MASCULINE, one syllable, plural कप. A गिलास is for cold water, a कप for hot tea — Hindi keeps them as firmly apart as English does." },
        { id: "hi-u36l2-jag", type: "vocab", front: "जग", reading: "jag", meaning: "a jug", accept: ["a water jug", "a pitcher", "a carafe"], example: { jp: "जग में पानी भरो।", en: "Fill the jug with water." }, drill: { jp: "मेज़ पर पानी का जग है", en: "There is a water jug on the table" }, hint: "JAG, MASCULINE, one syllable. भरो is u18's भरना. And do not read it as the poetic जग meaning 'the world' — that word exists and you will never need it." },
      ],
    },
    {
      id: "hi-u36l3",
      unit: 36,
      lesson: 3,
      title: "Six things you do to food",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Give and follow a cooking instruction: boil, fry, roast, peel, cook and serve.",
      items: [
        { id: "hi-u36l3-pakaanaa", type: "vocab", front: "पकाना", reading: "pakaanaa", meaning: "to cook on a fire", accept: ["to cook over heat", "to stew", "to put on to cook"], example: { jp: "उसने रात का खाना पकाया।", en: "She cooked the evening meal." }, drill: { jp: "सब्ज़ी पकाना बहुत आसान है", en: "Cooking vegetables is very easy" }, hint: "PA-KAA-NAA. बनाना (u12) is preparing a dish in general — you can बनाना a salad. पकाना is the heat: something goes on the चूल्हा. पकना is the food cooking by itself, the -आ- pair again." },
        { id: "hi-u36l3-ubaalnaa", type: "vocab", front: "उबालना", reading: "ubaalnaa", meaning: "to boil", accept: ["to bring to the boil", "to boil up"], example: { jp: "माँ ने अंडे उबाले।", en: "Mum boiled the eggs." }, drill: { jp: "पीने का पानी उबालना ज़रूरी है", en: "Boiling drinking water is essential" }, hint: "U-BAAL-NAA. उबलना is the water boiling; उबालना is you boiling it — u31 lesson 2's pattern one more time. Boiled drinking water is the single most useful sentence in this unit." },
        { id: "hi-u36l3-talnaa", type: "vocab", front: "तलना", reading: "talnaa", meaning: "to deep-fry", accept: ["to fry", "to fry in oil"], example: { jp: "उसने आलू तेल में तले।", en: "He fried the potatoes in oil." }, drill: { jp: "आलू तलना मुश्किल नहीं है", en: "Frying potatoes is not difficult" }, hint: "TAL-NAA, DENTAL त. Frying in deep oil, in the कड़ाही from lesson 1 — the Indian default. भूनना below is the dry kind." },
        { id: "hi-u36l3-bhuunnaa", type: "vocab", front: "भूनना", reading: "bhuunnaa", meaning: "to roast", accept: ["to dry-fry", "to toast in a pan", "to brown"], example: { jp: "मसाला धीरे भूनो।", en: "Roast the spice mix slowly." }, drill: { jp: "मसाला भूनना एक हुनर है", en: "Roasting spices is a skill" }, hint: "BHUUN-NAA, aspirated भ and a doubled न across the syllable break. Dry heat, little or no oil — what you do to मसाला before the water goes in. हुनर is u32's word for exactly this kind of skill." },
        { id: "hi-u36l3-chhiilnaa", type: "vocab", front: "छीलना", reading: "chhiilnaa", meaning: "to peel", accept: ["to skin", "to pare", "to take the skin off"], example: { jp: "उसने आलू छीले और काटे।", en: "She peeled the potatoes and cut them." }, drill: { jp: "प्याज़ छीलना आसान काम नहीं", en: "Peeling onions is not an easy job" }, hint: "CHHIIL-NAA, aspirated छ and a long ii. काटना (u26) is the cutting that follows. Notice छीले and काटे agreeing with आलू, which is masculine plural here — u31's rule at work." },
        { id: "hi-u36l3-parosnaa", type: "vocab", front: "परोसना", reading: "parosnaa", meaning: "to serve food", accept: ["to dish up", "to serve a meal", "to put food out"], example: { jp: "उसने सब को खाना परोसा।", en: "She served food to everybody." }, drill: { jp: "गरम खाना परोसना अच्छा है", en: "Serving hot food is good" }, hint: "PA-ROS-NAA, DENTAL स and no aspiration. Only ever about food — you परोसना a meal, never a drink or a customer. And सब को takes को, so the verb stays परोसा." },
      ],
    },
    {
      id: "hi-u36l4",
      unit: 36,
      lesson: 4,
      title: "Breakfast, spice and sweets",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about the first meal of the day and about how spicy or sweet something is.",
      items: [
        { id: "hi-u36l4-naashtaa", type: "vocab", front: "नाश्ता", reading: "naashtaa", meaning: "breakfast", accept: ["a morning meal", "a light snack"], example: { jp: "मैं रोज़ सुबह नाश्ता करता हूँ।", en: "I have breakfast every morning." }, drill: { jp: "आज का नाश्ता बहुत अच्छा था", en: "Today's breakfast was very good" }, hint: "NAASH-TAA, MASCULINE, plural नाश्ते. नाश्ता करना is to have breakfast — Hindi 'does' the meal. It also covers any light snack at any hour, which is how most of India actually uses it." },
        { id: "hi-u36l4-mithaaii", type: "vocab", front: "मिठाई", reading: "mithaaii", meaning: "an Indian sweet", accept: ["a box of sweets", "a confection", "sweetmeats"], example: { jp: "दुकान से मिठाई लाओ।", en: "Bring sweets from the shop." }, drill: { jp: "यह मिठाई बहुत मीठी है", en: "This sweet is very sweet" }, hint: "MI-THAA-II, FEMININE, plural मिठाइयाँ, retroflex ठ. ⚠️ Read it against मीठा miithaa, sweet (u13): this word has a SHORT i and that one a long ii, and §1's doubling is the only thing keeping them apart on the page." },
        { id: "hi-u36l4-masaalaa", type: "vocab", front: "मसाला", reading: "masaalaa", meaning: "a spice mix", accept: ["spices", "seasoning", "masala"], example: { jp: "इस दाल में ज़्यादा मसाला नहीं है।", en: "There is not much spice in this lentil soup." }, drill: { jp: "मसाला डालने से खाना तीखा होता है", en: "Adding spice makes food hot" }, hint: "MA-SAA-LAA, MASCULINE, plural मसाले. Not one spice but the blend — गरम मसाला is a fixed name and not a hot spice. तीखा (u13) is the taste it produces." },
        { id: "hi-u36l4-mirch", type: "vocab", front: "मिर्च", reading: "mirch", meaning: "a chilli", accept: ["chilli", "chilli pepper", "hot pepper"], example: { jp: "इस सब्ज़ी में बहुत मिर्च है।", en: "There is a lot of chilli in this vegetable dish." }, drill: { jp: "हरी मिर्च बहुत तीखी होती है", en: "Green chilli is very hot" }, hint: "MIRCH, FEMININE despite the consonant ending, plural मिर्चें, with र् riding on the च. काली मिर्च is black pepper and हरी मिर्च is a green chilli — the word covers both." },
        { id: "hi-u36l4-andaa", type: "vocab", front: "अंडा", reading: "andaa", meaning: "an egg", accept: ["eggs", "a hen's egg"], example: { jp: "नाश्ते में उसने दो अंडे खाए।", en: "He ate two eggs for breakfast." }, drill: { jp: "यह अंडा अभी गरम है", en: "This egg is still hot" }, hint: "AN-DAA, MASCULINE, plural अंडे, with a RETROFLEX ड — so the tongue curls back, even though §1(b) writes it as a plain d. The ं before it is nasal. मुर्गी (u21) lays it." },
        { id: "hi-u36l4-aattaa", type: "vocab", front: "आटा", reading: "aattaa", meaning: "flour", accept: ["wheat flour", "atta", "dough flour"], example: { jp: "रोटी के लिए आटा चाहिए।", en: "You need flour for flatbread." }, drill: { jp: "आटा डिब्बे में रखो", en: "Keep the flour in the tin" }, hint: "MASCULINE, uncountable — and ⚠️ READ THE DOUBLED tt. The ट here is RETROFLEX, and the word would otherwise read exactly like आता, the everyday 'comes' from आना (u12). §1(b)'s rule is that the retroflex member doubles, so आटा is aattaa — the same doubling §2 uses for the ट letter itself." },
      ],
    },
  ],
};
