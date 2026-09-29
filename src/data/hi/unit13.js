// HI Unit 13 — खाना-पीना ("Food and drink") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot kept — "Food and drink" is a domain every language has. Retitled in
// Devanagari as lint requires (src/data/lint.js SCAFFOLD_TITLES).
//
// ⚠️ खाना IS NOT CARDED HERE. u12l2 teaches it as the VERB "to eat", and the front
// is unique per language, so the noun sense cannot have a second card. That is the
// right way round: खाना's double life (eat / food) is taught in its own hint, and
// this unit carries भोजन for the formal noun. Do not "fix" this by adding a second
// खाना card — the contract rejects it and mastery would fork.
//
// GENDER IS NAMED IN EVERY HINT (§4). The traps this unit adds to block 1's list:
//   दही is MASCULINE despite -ी, exactly like पानी. So is आलू and so is रस.
//   रोटी, दाल, सब्ज़ी, चाय, चीनी, भूख, प्यास are all FEMININE — and रोटी being
//   feminine is why मुझे रोटी खानी है takes -नी, the agreement trap u12 flags.
// FEMININE-AGREEMENT EXAMPLES ARE WRITTEN OUT IN FULL (अच्छी, तीखी, मीठी, खट्टा),
// so the learner meets agreement in use long before u24 teaches it as a rule.
export const HI_UNIT13 = {
  id: "hi-u13",
  lang: "hi",
  title: "खाना-पीना",
  order: 13,
  stage: "a1",
  lessons: [
    {
      id: "hi-u13l1",
      unit: 13,
      lesson: 1,
      title: "What is on the plate",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the staples of an everyday Indian meal and say there is too much or too little of one.",
      items: [
        { id: "hi-u13l1-rotii", type: "vocab", front: "रोटी", reading: "rotii", meaning: "flatbread", accept: ["bread", "a chapati", "a flatbread"], example: { jp: "मीना रोज़ रोटी बनाती है।", en: "Meena makes flatbread every day." }, drill: { jp: "यह रोटी बहुत अच्छी है", en: "This flatbread is very good" }, hint: "RO-TII, FEMININE, with retroflex ट — tongue curled back. The round flatbread cooked fresh at every meal. ⚠️ Because it is feminine the whole sentence follows it: रोटी अच्छी है, and मुझे रोटी खानी है with -नी, never खाना है." },
        { id: "hi-u13l1-chaaval", type: "vocab", front: "चावल", reading: "chaaval", meaning: "rice", accept: ["a grain of rice", "cooked rice", "boiled rice"], example: { jp: "हम रात को चावल खाते हैं।", en: "We eat rice at night." }, drill: { jp: "यह चावल बहुत सस्ता है", en: "This rice is very cheap" }, hint: "CHAA-VAL, masculine, and Hindi treats it as a mass noun — चावल अच्छा है, never a plural. One word for the raw grain and the cooked dish both." },
        { id: "hi-u13l1-daal", type: "vocab", front: "दाल", reading: "daal", meaning: "lentils", accept: ["a lentil", "pulses", "lentil soup"], example: { jp: "दाल और चावल अच्छा खाना है।", en: "Lentils and rice are good food." }, drill: { jp: "यह दाल बहुत तीखी है", en: "This lentil soup is very spicy" }, hint: "DAAL, FEMININE — dental द and dental ल, tongue forward for both. It is the dry lentil and the cooked soup poured over rice, which is why दाल-चावल is a complete meal in two words." },
        { id: "hi-u13l1-sabzii", type: "vocab", front: "सब्ज़ी", reading: "sabzii", meaning: "a vegetable", accept: ["vegetables", "a vegetable dish", "greens"], example: { jp: "इस दुकान में सब्ज़ी सस्ती है।", en: "Vegetables are cheap in this shop." }, drill: { jp: "मुझे यह सब्ज़ी अच्छी लगती है", en: "I like this vegetable dish" }, hint: "SAB-ZII, FEMININE, with the Persian ज़. It is both the raw vegetable and the cooked vegetable dish — ask for सब्ज़ी in a home and you are handed the dish, not a carrot." },
        { id: "hi-u13l1-namak", type: "vocab", front: "नमक", reading: "namak", meaning: "salt", accept: ["table salt"], example: { jp: "इस दाल में नमक कम है।", en: "There is too little salt in this lentil soup." }, drill: { jp: "इस सब्ज़ी में नमक ज़्यादा है", en: "There is too much salt in this vegetable dish" }, hint: "NA-MAK, masculine — three letters from unit 1. नमक-हलाल, 'true to one's salt', is the Hindi idiom for a loyal person: salt carries the weight that bread carries in English." },
        { id: "hi-u13l1-chiinii", type: "vocab", front: "चीनी", reading: "chiinii", meaning: "sugar", accept: ["white sugar", "granulated sugar"], example: { jp: "मैं चाय में चीनी नहीं लेता।", en: "I do not take sugar in tea." }, drill: { jp: "इस चाय में चीनी ज़्यादा है", en: "There is too much sugar in this tea" }, hint: "CHII-NII, FEMININE — and the identical word means 'Chinese', because the refining method came from China. Context always separates them: चीनी चाय is Chinese tea, चाय में चीनी is sugar in the tea." },
      ],
    },
    {
      id: "hi-u13l2",
      unit: 13,
      lesson: 2,
      title: "Something to drink",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask for tea or milk, and say what you drink at which time of day.",
      items: [
        { id: "hi-u13l2-duudh", type: "vocab", front: "दूध", reading: "duudh", meaning: "milk", accept: ["a glass of milk", "fresh milk"], example: { jp: "बच्चे रोज़ दूध पीते हैं।", en: "The children drink milk every day." }, drill: { jp: "इस दूध में चीनी नहीं है", en: "There is no sugar in this milk" }, hint: "DUUDH, masculine — dental द and dental ध, the second with a puff of air. The दूध वाला, the milkman on his bicycle, is still how most Indian mornings begin." },
        { id: "hi-u13l2-chaay", type: "vocab", front: "चाय", reading: "chaay", meaning: "tea", accept: ["a cup of tea", "chai"], example: { jp: "हम शाम को चाय पीते हैं।", en: "We drink tea in the evening." }, drill: { jp: "यह चाय बहुत मीठी है", en: "This tea is very sweet" }, hint: "CHAAY, FEMININE, and one syllable — not cha-ay. Indian चाय is boiled up WITH milk and sugar, so plain चाय already means milky sweet tea; asking for 'tea with milk' would only puzzle people." },
        { id: "hi-u13l2-dahii", type: "vocab", front: "दही", reading: "dahii", meaning: "yoghurt", accept: ["curd", "curds", "plain yoghurt"], example: { jp: "मैं रोज़ दही खाता हूँ।", en: "I eat yoghurt every day." }, drill: { jp: "यह दही बहुत खट्टा है", en: "This yoghurt is very sour" }, hint: "DA-HII — ⚠️ MASCULINE, despite the -ी ending. It is one of the exceptions unit 1 §4 warns about, in the same class as पानी. Plain set yoghurt, eaten with almost every meal to cool the chilli." },
        { id: "hi-u13l2-ghii", type: "vocab", front: "घी", reading: "ghii", meaning: "clarified butter", accept: ["ghee", "butter fat"], example: { jp: "इस रोटी पर घी है।", en: "There is ghee on this flatbread." }, drill: { jp: "मुझे रोटी पर घी अच्छा लगता है", en: "I like ghee on flatbread" }, hint: "GHII, masculine, one syllable — gh plus a long ii. Butter simmered until the water and the milk solids are gone, which is why it keeps without a fridge and why it, not butter, is the traditional cooking fat." },
        { id: "hi-u13l2-ras", type: "vocab", front: "रस", reading: "ras", meaning: "juice", accept: ["sap", "a fruit juice", "essence"], example: { jp: "मैं फल का रस पीता हूँ।", en: "I drink fruit juice." }, drill: { jp: "यह रस बहुत मीठा है", en: "This juice is very sweet" }, hint: "RAS, masculine, two letters from unit 1. Juice and sap, and by extension the 'flavour' of a poem or a dance — रस is one of the oldest words in Indian aesthetics." },
        { id: "hi-u13l2-bhojan", type: "vocab", front: "भोजन", reading: "bhojan", meaning: "a meal", accept: ["food", "a proper meal", "dining"], example: { jp: "यह भोजन बहुत अच्छा है।", en: "This meal is very good." }, drill: { jp: "हम रात का भोजन आठ बजे करते हैं", en: "We have the evening meal at eight o'clock" }, hint: "BHO-JAN, masculine — the formal, respectful word, where खाना is the everyday one. You read भोजन on a menu board and hear खाना at home. भोजन करना is 'to dine'." },
      ],
    },
    {
      id: "hi-u13l3",
      unit: 13,
      lesson: 3,
      title: "Fruit and vegetables",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name common fruits and vegetables and say which one you like.",
      items: [
        { id: "hi-u13l3-aam", type: "vocab", front: "आम", reading: "aam", meaning: "a mango", accept: ["mango", "mangoes"], example: { jp: "मुझे आम बहुत अच्छा लगता है।", en: "I like mangoes very much." }, drill: { jp: "यह आम बहुत बड़ा है", en: "This mango is very big" }, hint: "AAM, masculine — and the identical word is the adjective 'common, ordinary': आम आदमी is the common man. Mango is the king of Indian fruit, and the whole summer is measured by it." },
        { id: "hi-u13l3-kelaa", type: "vocab", front: "केला", reading: "kelaa", meaning: "a banana", accept: ["banana", "bananas"], example: { jp: "मैं रोज़ एक केला खाता हूँ।", en: "I eat one banana every day." }, drill: { jp: "बच्चा एक केला लेता है", en: "The child takes a banana" }, hint: "KE-LAA, masculine, plural केले with the -ा turning into -े. Sold by the dozen off a cart, and in the south the leaf is the plate your whole meal arrives on." },
        { id: "hi-u13l3-seb", type: "vocab", front: "सेब", reading: "seb", meaning: "an apple", accept: ["apple", "apples"], example: { jp: "मीना रोज़ एक सेब खाती है।", en: "Meena eats one apple every day." }, drill: { jp: "मुझे यह सेब खाना है", en: "I have to eat this apple" }, hint: "SEB, masculine — three letters and no mātrā to worry about. Apples come down from the hills in India, so they are a winter fruit and cost more than a mango does in season." },
        { id: "hi-u13l3-aaluu", type: "vocab", front: "आलू", reading: "aaluu", meaning: "a potato", accept: ["potato", "potatoes"], example: { jp: "आलू की सब्ज़ी बहुत अच्छी है।", en: "Potato curry is very good." }, drill: { jp: "इस दाल में आलू नहीं है", en: "There is no potato in this lentil soup" }, hint: "AA-LUU — masculine, and it does NOT change in the plural: दो आलू, never आलूएँ. India's most-eaten vegetable by a wide margin, so the word turns up in every second dish name." },
        { id: "hi-u13l3-pyaaz", type: "vocab", front: "प्याज़", reading: "pyaaz", meaning: "an onion", accept: ["onion", "onions"], example: { jp: "इस सब्ज़ी में प्याज़ है।", en: "There is onion in this vegetable dish." }, drill: { jp: "मीना प्याज़ नहीं खाती है", en: "Meena does not eat onion" }, hint: "PYAAZ, masculine, with the Persian ज़. ⚠️ THREE WORDS THAT LOOK ALIKE AND ARE NOT: प्याज़ pyaaz (onion), प्यार pyaar (love, unit 6), प्यास pyaas (thirst, lesson 4 of this unit). Read the LAST letter." },
        { id: "hi-u13l3-tamaatar", type: "vocab", front: "टमाटर", reading: "tamaatar", meaning: "a tomato", accept: ["tomato", "tomatoes"], example: { jp: "टमाटर अब सस्ता है।", en: "Tomatoes are cheap now." }, drill: { jp: "इस दाल में टमाटर और प्याज़ हैं", en: "There are tomatoes and onions in this lentil soup" }, hint: "TA-MAA-TAR, masculine — RETROFLEX ट at the front, DENTAL त in the middle, so the two t's are made in different places. An English loan worn into Hindi shape; unchanged in the plural." },
      ],
    },
    {
      id: "hi-u13l4",
      unit: 13,
      lesson: 4,
      title: "How it tastes",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say whether food is sweet, spicy or sour, and say that you are hungry or thirsty.",
      items: [
        { id: "hi-u13l4-miithaa", type: "vocab", front: "मीठा", reading: "miithaa", meaning: "sweet", accept: ["sugary", "a sweet", "a dessert"], example: { jp: "यह आम बहुत मीठा है।", en: "This mango is very sweet." }, drill: { jp: "मुझे मीठा खाना अच्छा लगता है", en: "I like sweet food" }, hint: "MII-THAA, retroflex ठ — curl the tongue back and let the puff out. Used as a noun it is 'a sweet', which is how you ask for dessert. Feminine मीठी: चाय मीठी है." },
        { id: "hi-u13l4-tiikhaa", type: "vocab", front: "तीखा", reading: "tiikhaa", meaning: "spicy", accept: ["hot with chilli", "pungent", "sharp-tasting"], example: { jp: "मीना तीखा खाना नहीं खाती।", en: "Meena does not eat spicy food." }, drill: { jp: "यह खाना बहुत तीखा है", en: "This food is very spicy" }, hint: "TII-KHAA — hot from CHILLI, never hot from temperature. Heat you can burn your hand on is गरम (unit 16), an entirely different word, and swapping the two is how a beginner ends up with a scorched mouth. Feminine तीखी." },
        { id: "hi-u13l4-khattaa", type: "vocab", front: "खट्टा", reading: "khattaa", meaning: "sour", accept: ["tart", "acidic", "sharp"], example: { jp: "खट्टा दही अच्छा नहीं लगता।", en: "Sour yoghurt does not taste good." }, drill: { jp: "यह फल बहुत खट्टा है", en: "This fruit is very sour" }, hint: "KHAT-TAA, with a DOUBLED retroflex ट — hold it, ट-ट, tongue curled back the whole time. खट्टा-मीठा (sour-sweet) is a fixed pair and describes half of Indian street food." },
        { id: "hi-u13l4-bhuukh", type: "vocab", front: "भूख", reading: "bhuukh", meaning: "hunger", accept: ["appetite", "being hungry"], example: { jp: "मुझे बहुत भूख लगती है।", en: "I am very hungry." }, drill: { jp: "इस बच्चे को भूख नहीं है", en: "This child is not hungry" }, hint: "BHUUKH, FEMININE, and it is a NOUN. Hindi never says 'I am hungry'. It says मुझे भूख लगती है — 'hunger attaches to me' — or मुझे भूख है, 'to me there is hunger'. Learn the frame, not the word alone." },
        { id: "hi-u13l4-pyaas", type: "vocab", front: "प्यास", reading: "pyaas", meaning: "thirst", accept: ["being thirsty", "a dry throat"], example: { jp: "मुझे प्यास लगती है।", en: "I am thirsty." }, drill: { jp: "इस काम में बहुत प्यास लगती है", en: "This work makes you very thirsty" }, hint: "PYAAS, FEMININE, and it works exactly like भूख: मुझे प्यास लगती है for 'I am thirsty'. One letter from प्यार pyaar (love) and प्याज़ pyaaz (onion) — the final letter is the entire difference." },
        { id: "hi-u13l4-svaad", type: "vocab", front: "स्वाद", reading: "svaad", meaning: "a flavour", accept: ["taste", "a taste", "relish"], example: { jp: "इस दाल का स्वाद बहुत अच्छा है।", en: "The flavour of this lentil soup is very good." }, drill: { jp: "इस चाय का स्वाद अच्छा नहीं है", en: "The flavour of this tea is not good" }, hint: "SVAAD, masculine — स्व is s glued straight onto v, one push of breath. स्वादिष्ट means delicious; स्वाद itself is just the flavour a thing has, good or bad." },
      ],
    },
  ],
};
