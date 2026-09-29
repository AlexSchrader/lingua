// HI Unit 18 — बाज़ार और पैसा ("The market and money") — A1
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 RETHEMED SLOT. The scaffold called this "Characters 4" — the fourth of five
// Japanese interleaved-kanji slots Hindi has no use for (unit1.js §10). lint
// hard-errors on the stub title once the unit is authored.
//
// WHY SHOPPING. Measured against the merged u1–u17 corpus: money had exactly ONE
// word in it, सस्ता (cheap, u6l2) — and सस्ता shipped without its own antonym, so
// a learner could say a thing was cheap and had no way to say it was expensive.
// Nothing for money, a price, a rupee, buying, selling, a shopkeeper or a customer.
// Russian's seat filled its two equivalent slots the same way, with a missing CEFR
// A1 DOMAIN rather than a third variation on script practice, and found the same
// shopping hole. So: money and prices (l1), the transaction verbs (l2), clothes
// (l3), the shop itself (l4).
//
// IT IS PLACED LAST OF THE THREE RETHEMES AND THAT ORDERING IS THE POINT. Shopping
// cannot produce one natural sentence without the numbers in unit11.js, the verbs in
// unit12.js, the food in unit13.js and the market as a PLACE in unit14.js. बाज़ार
// itself is taught in unit14.js lesson 1 — lower slot wins — and this unit uses it
// without re-teaching it.
//
// ⚠️ TWO SPELLINGS DECIDED HERE, BOTH FOLLOWING §7. खरीदना is written with plain ख,
// not ख़, and बुखार likewise in u20: Standard Hindi merges क़/ख़/ग़ into क/ख/ग in
// pronunciation, block 1 declined to card the nukta forms as glyphs for exactly that
// reason, and spelling them plain is the consistent consequence. Not a shortcut.
//
// LEXEME CALL MADE BY HAND: दुकान (u9l3, "a shop") and दुकानदार (l4, "a shopkeeper")
// are two cards. The -दार agent suffix makes a separate dictionary entry, block 1
// already ships रिश्तेदार on the same suffix, and block 1's own चाचा/चाची,
// मामा/मामी, दादा/दादी, नाना/नानी are four precedents for a derivationally-related
// pair being two fronts. No rule in scope-hi.mjs generates one from the other, and
// the router cannot mis-blank दुकान inside दुकानदार — the next character द is a
// LETTER, so the whole-word boundary check blocks it. Verified mechanically.
export const HI_UNIT18 = {
  id: "hi-u18",
  lang: "hi",
  title: "बाज़ार और पैसा",
  order: 18,
  stage: "a1",
  lessons: [
    {
      id: "hi-u18l1",
      unit: 18,
      lesson: 1,
      title: "Money and prices",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask what something costs and say whether it is cheap, expensive or free.",
      items: [
        { id: "hi-u18l1-paisaa", type: "vocab", front: "पैसा", reading: "paisaa", meaning: "money", accept: ["a coin", "cash", "a paisa"], example: { jp: "मेरे पास पैसा नहीं है।", en: "I have no money." }, drill: { jp: "इस काम में बहुत पैसा लगता है", en: "This job takes a lot of money" }, hint: "PAI-SAA, masculine. In the singular it is a COIN — a hundredth of a rupee — and unmarked it is money in general. The plural पैसे is what you actually hear for 'money': पैसे दीजिए, give me the money." },
        { id: "hi-u18l1-rupayaa", type: "vocab", front: "रुपया", reading: "rupayaa", meaning: "a rupee", accept: ["rupees", "the rupee"], example: { jp: "यह किताब सौ रुपये की है।", en: "This book costs a hundred rupees." }, drill: { jp: "एक रुपया बहुत कम पैसा है", en: "One rupee is very little money" }, hint: "RU-PA-YAA, masculine, and the plural-oblique रुपये is the form on every price tag: सौ रुपये. From रूप, form — a coin was a stamped shape. The example above shows the oblique in use." },
        { id: "hi-u18l1-kiimat", type: "vocab", front: "कीमत", reading: "kiimat", meaning: "a price", accept: ["cost", "a value", "worth"], example: { jp: "इस सब्ज़ी की कीमत क्या है?", en: "What is the price of these vegetables?" }, drill: { jp: "इस गाड़ी की कीमत बहुत ज़्यादा है", en: "This car's price is very high" }, hint: "KII-MAT, FEMININE, from Arabic. कीमत क्या है is 'what does it cost'. दाम is the shorter everyday alternative you will also hear shouted across a market." },
        { id: "hi-u18l1-mahangaa", type: "vocab", front: "महँगा", reading: "mahangaa", meaning: "expensive", accept: ["dear", "costly", "pricey"], example: { jp: "यह अलमारी बहुत महँगी है।", en: "This cupboard is very expensive." }, drill: { jp: "इस बाज़ार में सब कुछ महँगा है", en: "Everything is expensive in this market" }, hint: "MA-HAN-GAA, masculine — महँगी, महँगे, and the ँ nasalises the ह. It is the exact opposite of सस्ता (cheap, unit 6), and the pair is the first thing you need in a market. महँगाई is 'the cost of living'." },
        { id: "hi-u18l1-muft", type: "vocab", front: "मुफ़्त", reading: "muft", meaning: "free of charge", accept: ["gratis", "for nothing", "costing nothing"], example: { jp: "यह पानी मुफ़्त है।", en: "This water is free." }, drill: { jp: "इस स्कूल में किताबें मुफ़्त हैं", en: "Books are free in this school" }, hint: "MUFT, with फ़ — an f — and unchanging. Free as in COSTING NOTHING, never free as in unrestricted, which is a different word entirely. मुफ़्त में means 'for free'." },
        { id: "hi-u18l1-hisaab", type: "vocab", front: "हिसाब", reading: "hisaab", meaning: "a bill", accept: ["an account", "a reckoning", "arithmetic"], example: { jp: "इस भोजन का हिसाब बहुत ज़्यादा है।", en: "The bill for this meal is very high." }, drill: { jp: "मैं दुकान का हिसाब करता हूँ", en: "I settle the shop's account" }, hint: "HI-SAAB, masculine — the bill, the account, and arithmetic itself: हिसाब करना is both 'to do the sums' and 'to settle up'. ⚠️ Keep it apart from किताब kitaab (a book): ह against क, and everything else the same." },
      ],
    },
    {
      id: "hi-u18l2",
      unit: 18,
      lesson: 2,
      title: "Buying and selling",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Buy and sell something, count out the money, and swap one thing for another.",
      items: [
        { id: "hi-u18l2-khariidnaa", type: "vocab", front: "खरीदना", reading: "khariidnaa", meaning: "to buy", accept: ["buy", "to purchase", "to shop for"], example: { jp: "मैं बाज़ार से सब्ज़ी खरीदता हूँ।", en: "I buy vegetables from the market." }, drill: { jp: "मुझे एक नया तकिया खरीदना है", en: "I have to buy a new pillow" }, hint: "KHA-RIID-NAA, with PLAIN ख, not ख़ — unit 1 §7 explains why this course spells the merged letters plain. The thing bought takes no postposition; the place you buy FROM takes से: दुकान से खरीदना." },
        { id: "hi-u18l2-bechnaa", type: "vocab", front: "बेचना", reading: "bechnaa", meaning: "to sell", accept: ["sell", "to trade", "to deal in"], example: { jp: "वह दुकान में फल बेचता है।", en: "He sells fruit in the shop." }, drill: { jp: "यह सामान बेचना मुश्किल है", en: "Selling these goods is difficult" }, hint: "BECH-NAA, the mirror of खरीदना. The person you sell TO takes को: मैं उसे किताब बेचता हूँ. बिकना is its intransitive twin, 'to be sold'." },
        { id: "hi-u18l2-ginnaa", type: "vocab", front: "गिनना", reading: "ginnaa", meaning: "to count", accept: ["count", "to tally", "to reckon up"], example: { jp: "मैं पैसे गिनता हूँ।", en: "I count the money." }, drill: { jp: "सौ तक गिनना मुश्किल नहीं है", en: "Counting up to a hundred is not difficult" }, hint: "GIN-NAA, with a doubled न — hold the n. गिनती is the noun, 'counting', and the name of a Hindi child's first arithmetic book. ⚠️ Keep it apart from जानना jaannaa (to know), which also has the doubled न." },
        { id: "hi-u18l2-chunnaa", type: "vocab", front: "चुनना", reading: "chunnaa", meaning: "to choose", accept: ["choose", "to select", "to pick", "to elect"], example: { jp: "मैं यह रंग चुनता हूँ।", en: "I choose this colour." }, drill: { jp: "एक अच्छा तौलिया चुनना मुश्किल है", en: "Choosing a good towel is difficult" }, hint: "CHUN-NAA, also with a doubled न. Choosing in a shop and electing a government are the same verb — चुनाव is an election. ⚠️ One letter from सुनना sunnaa (to hear, unit 12): च against स." },
        { id: "hi-u18l2-bharnaa", type: "vocab", front: "भरना", reading: "bharnaa", meaning: "to fill", accept: ["fill", "to fill in", "to be full"], example: { jp: "मैं बोतल में पानी भरता हूँ।", en: "I fill water into the bottle." }, drill: { jp: "यह बैग भरना बहुत मुश्किल है", en: "Filling this bag is very difficult" }, hint: "BHAR-NAA — to fill something, and also to fill IN a form: फ़ॉर्म भरना. It doubles as intransitive: बस भर गई, the bus filled up. भारी (heavy, unit 19) is a different word despite the resemblance." },
        { id: "hi-u18l2-badalnaa", type: "vocab", front: "बदलना", reading: "badalnaa", meaning: "to change", accept: ["to exchange", "to swap", "change"], example: { jp: "मैं यह कमीज़ बदलता हूँ।", en: "I am changing this shirt." }, drill: { jp: "यह पैसा बदलना बहुत मुश्किल है", en: "Changing this money is very difficult" }, hint: "BA-DAL-NAA — to change one thing for another, and to change in the sense of becoming different: मौसम बदलता है. ⚠️ Read it against बादल baadal (a cloud, unit 16): the same three consonants in the same order, different vowels, no relation at all." },
      ],
    },
    {
      id: "hi-u18l3",
      unit: 18,
      lesson: 3,
      title: "Cloth and clothes",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what you are wearing and ask for a different size or colour.",
      items: [
        { id: "hi-u18l3-kapraa", type: "vocab", front: "कपड़ा", reading: "kapraa", meaning: "cloth", accept: ["fabric", "clothes", "a garment"], example: { jp: "इस दुकान में कपड़ा सस्ता है।", en: "Cloth is cheap in this shop." }, drill: { jp: "यह कपड़ा बहुत महँगा है", en: "This cloth is very expensive" }, hint: "KAP-RAA, masculine, with ड़. The singular is the MATERIAL; the plural कपड़े is 'clothes', and that is how you will usually meet it: कपड़े बदलना, to change clothes. ⚠️ Read it against कमरा kamraa (a room, unit 5)." },
        { id: "hi-u18l3-kamiiz", type: "vocab", front: "कमीज़", reading: "kamiiz", meaning: "a shirt", accept: ["a blouse", "a top", "a tunic"], example: { jp: "मेरी कमीज़ सफ़ेद है।", en: "My shirt is white." }, drill: { jp: "यह कमीज़ मुझे बड़ी लगती है", en: "This shirt seems big to me" }, hint: "KA-MIIZ, FEMININE, with ज़. A man's shirt and the long tunic of a सलवार-कमीज़ both. English 'chemise' is the same word arriving by a different road." },
        { id: "hi-u18l3-juutaa", type: "vocab", front: "जूता", reading: "juutaa", meaning: "a shoe", accept: ["shoes", "a pair of shoes", "footwear"], example: { jp: "मेरे जूते बाहर हैं।", en: "My shoes are outside." }, drill: { jp: "यह जूता मुझे छोटा लगता है", en: "This shoe seems small to me" }, hint: "JUU-TAA, masculine, with DENTAL त — tongue on the teeth, NOT the retroflex an English ear expects from 'joota'. The plural जूते means a pair, because shoes come in twos: जूते पहनना." },
        { id: "hi-u18l3-topii", type: "vocab", front: "टोपी", reading: "topii", meaning: "a cap", accept: ["a hat", "headgear"], example: { jp: "यह टोपी बहुत पुरानी है।", en: "This cap is very old." }, drill: { jp: "इस दुकान में लाल टोपी है", en: "There is a red cap in this shop" }, hint: "TO-PII, feminine, plural टोपियाँ — RETROFLEX ट at the front. Any cap or hat. The Gandhi टोपी packs a piece of Indian political history into one word." },
        { id: "hi-u18l3-saarii", type: "vocab", front: "साड़ी", reading: "saarii", meaning: "a sari", accept: ["a saree", "a sari cloth"], example: { jp: "मीना की साड़ी नीली है।", en: "Meena's sari is blue." }, drill: { jp: "यह साड़ी बहुत महँगी है", en: "This sari is very expensive" }, hint: "SAA-RII, feminine, with ड़. Six yards of unstitched cloth, wrapped rather than tailored. ⚠️ Its READING is one letter from सर्दी sardii (winter, unit 16) and its SPELLING one from सड़क sarak (a road)." },
        { id: "hi-u18l3-thailaa", type: "vocab", front: "थैला", reading: "thailaa", meaning: "a sack", accept: ["a cloth bag", "a shopping bag", "a holdall"], example: { jp: "यह थैला बहुत बड़ा है।", en: "This sack is very big." }, drill: { jp: "मैं बाज़ार में थैला लेता हूँ", en: "I take a cloth bag to the market" }, hint: "THAI-LAA, masculine, with DENTAL थ — a puff of air, tongue on the teeth. The cloth or jute bag you carry to market, as against a बैग (unit 9), the English loan for a rucksack or suitcase." },
      ],
    },
    {
      id: "hi-u18l4",
      unit: 18,
      lesson: 4,
      title: "In the shop",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask a shopkeeper for a kilo of something, in a bottle or a box.",
      items: [
        { id: "hi-u18l4-dukaandaar", type: "vocab", front: "दुकानदार", reading: "dukaandaar", meaning: "a shopkeeper", accept: ["a storekeeper", "a trader", "a vendor"], example: { jp: "यह दुकानदार बहुत अच्छा है।", en: "This shopkeeper is very good." }, drill: { jp: "मैं दुकानदार से कीमत पूछता हूँ", en: "I ask the shopkeeper the price" }, hint: "DU-KAAN-DAAR, masculine, unchanged in the plural — दुकान (a shop, unit 9) plus -दार, the Persian suffix for 'the one who holds'. You have met that suffix already in रिश्तेदार, a relative." },
        { id: "hi-u18l4-graahak", type: "vocab", front: "ग्राहक", reading: "graahak", meaning: "a customer", accept: ["a client", "a buyer", "a patron"], example: { jp: "इस दुकान में बहुत ग्राहक हैं।", en: "There are many customers in this shop." }, drill: { jp: "यह ग्राहक रोज़ यहाँ आता है", en: "This customer comes here every day" }, hint: "GRAA-HAK, masculine, unchanged in the plural. ग्र is ग glued straight onto र. From the root of ग्रहण, taking — a customer is 'the one who takes'." },
        { id: "hi-u18l4-saamaan", type: "vocab", front: "सामान", reading: "saamaan", meaning: "goods", accept: ["luggage", "stuff", "belongings"], example: { jp: "मेरा सामान गाड़ी में है।", en: "My luggage is in the car." }, drill: { jp: "इस दुकान का सामान बहुत महँगा है", en: "This shop's goods are very expensive" }, hint: "SAA-MAAN, masculine, and it never goes plural — it is already collective. Goods in a shop, luggage on a train, the stuff in your room: one word for all three. ⚠️ Read it against समझना samajhnaa (to understand, unit 6)." },
        { id: "hi-u18l4-kilo", type: "vocab", front: "किलो", reading: "kilo", meaning: "one kilogram of weight", accept: ["a kilogram", "kilos", "a kilo"], example: { jp: "एक किलो प्याज़ सस्ता है।", en: "One kilo of onions is cheap." }, drill: { jp: "मैं दो किलो चावल खरीदता हूँ", en: "I buy two kilos of rice" }, hint: "KI-LO, masculine, unchanged in the plural: दो किलो, never किलोएँ. It is glossed \"one kilogram of weight\" and not \"a kilo\", because the produce card would otherwise accept the answer read straight off its own prompt. Two syllables — the short i mātrā on क, the o mātrā on ल. It is the unit everything loose in an Indian market is sold by." },
        { id: "hi-u18l4-botal", type: "vocab", front: "बोतल", reading: "botal", meaning: "a bottle", accept: ["a flask", "a jar"], example: { jp: "इस बोतल में पानी है।", en: "There is water in this bottle." }, drill: { jp: "यह बोतल बहुत बड़ी है", en: "This bottle is very big" }, hint: "BO-TAL — ⚠️ FEMININE. An English loan, so the meaning is free, but the gender is not and you have to learn it: बोतल बड़ी है, not बड़ा. Read it against होटल hotal (a hotel, unit 9): ब against ह." },
        { id: "hi-u18l4-dibbaa", type: "vocab", front: "डिब्बा", reading: "dibbaa", meaning: "a box", accept: ["a tin", "a carton", "a container"], example: { jp: "इस डिब्बे में चीनी है।", en: "There is sugar in this box." }, drill: { jp: "यह डिब्बा बहुत छोटा है", en: "This box is very small" }, hint: "DIB-BAA, masculine, plural डिब्बे — RETROFLEX ड at the front and a DOUBLED ब in the middle, so hold the b. A tin, a box, a lunch box, and also a railway carriage." },
      ],
    },
  ],
};
