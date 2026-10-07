// HI Unit 127 — बंदरगाह और ढुलाई ("The port and the haulage") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 3 (u124–u136). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, then unit124.js §C1–§C11 — this block's own record.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 7 (B2)"). A **DELIBERATE MERGE**
// (unit124.js §C5): ports measured 13 free of 18 and trade 8 of 18 — trade alone
// is too thin for 24 cards, 21 free combined. **DO NOT RE-SPLIT THEM.**
//
// 🚨 बंदरगाह IS u33's AND IS NOT RE-CARDED. The title names it because the theme
// is the port; the card for the word itself is u33l?. **गोदी (l1) is a DIFFERENT
// thing and the hint says so** — the berth inside the port, not the port.
//
// MEASURED HOLE (committed evidence: `scripts/qa/theme-holes.mjs` +
// `theme-holes-hi.txt`): u33 gave बंदरगाह, जहाज़, नाव and पासपोर्ट; u76 आयात,
// निर्यात and व्यापार; u85 थोक, फुटकर, दलाल, बीमा and नीलामी; u94 गोदाम; u18
// ग्राहक and डिब्बा; u37 सौदा and रसीद. So the corpus could say that goods were
// imported and sold wholesale and **could not name a dock, a quay, an anchor, a
// crane, loading, unloading, a vessel, a fleet, a sailor, a waterway, a tide, a
// container, haulage, a freight charge, a goods train, a truck, a sack, a
// produce market, customs, a toll or clearance**.
//
// ⚠️ TWO CROSS-BLOCK LINES HONOURED, both given centrally:
//   • **मंडी → THIS UNIT ONLY (l4).** Block 1 dropped it from u103.
//   • **चालान → u93's.** Not here, though a freight lesson reaches for it first.
//
// 🚨 ONE READING WAS REPAIRED UNDER §1b's ESCAPE HATCH, AND IT IS THE ONLY SUCH
// REPAIR IN THE BLOCK. **मंडी reads `manddii`, not `mandii`**, because मंदी@u69
// ("a slump") already reads `mandii`: ड is RETROFLEX and द is DENTAL, and §1b
// merges both to d in a word reading. The escape hatch says the RETROFLEX member
// doubles its consonant, which is what this unit did — `reading-taken.mjs` found
// it, by running the candidate list before a card was written.
//
// ⚠️ GENDER, and this unit is unusually trappy because the -आई and -ी nouns are
// all feminine while the loanwords split: FEMININE — गोदी, उतराई, ढुलाई,
// मालगाड़ी, बोरी, मंडी, चुंगी, निकासी, क्रेन. MASCULINE — घाट, लंगर, लदान,
// जलपोत, बेड़ा, नाविक, जलमार्ग, ज्वार, कंटेनर, माल, भाड़ा, ट्रक, व्यापारी,
// सीमाशुल्क, परिवहन.
export const HI_UNIT127 = {
  id: "hi-u127",
  lang: "hi",
  title: "बंदरगाह और ढुलाई",
  order: 127,
  stage: "b2",
  lessons: [
    {
      id: "hi-u127l1",
      unit: 127,
      lesson: 1,
      title: "At the dock",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe a working dock — the berth, the quay, the anchor, the crane — and say that cargo is being loaded and unloaded.",
      items: [
        { id: "hi-u127l1-godii", type: "vocab", front: "गोदी", reading: "godii", meaning: "a berth where a ship is loaded", accept: ["a dock basin", "the water a ship ties up in"], example: { jp: "यह जहाज़ तीन दिन तक गोदी में रुका रहा।", en: "This ship stayed in the dock for three days." }, drill: { jp: "जहाज़ तीन दिन गोदी में रहा", en: "The ship was in the dock for three days" }, hint: "GO-DII — ⚠️ FEMININE. ⚠️ **NOT बंदरगाह (unit 33), AND THE GLOSS IS WHAT KEEPS THE TWO APART:** a बंदरगाह is the whole port — the town, the office, the customs; a गोदी is one berth of water inside it where one जहाज़ ties up. Read it against गोद, a lap." },
        { id: "hi-u127l1-ghaat", type: "vocab", front: "घाट", reading: "ghaat", meaning: "a quay on the water", accept: ["the built stone edge where a boat comes alongside", "steps down to the water"], example: { jp: "नाव घाट पर लगी और सामान उतरने लगा।", en: "The boat came alongside the quay and the goods began coming off." }, drill: { jp: "नाव घाट पर लगी है", en: "The boat is alongside the quay" }, hint: "GHAAT, masculine, consonant-final: दो घाट. घ carries a puff of air and the ट is RETROFLEX, merged to t (§1b). ⚠️ **THE SAME WORD INDIANS USE FOR THE STEPS AT A RIVER** — the card teaches the working sense, and both are the same idea: a made edge where the water is reached." },
        { id: "hi-u127l1-langar", type: "vocab", front: "लंगर", reading: "langar", meaning: "a ship's anchor", accept: ["the iron weight dropped to hold a vessel still"], example: { jp: "तेज़ हवा में कप्तान ने लंगर डाल दिया।", en: "In the strong wind the captain dropped anchor." }, drill: { jp: "कप्तान ने लंगर डाल दिया", en: "The captain dropped anchor" }, hint: "LAN-GAR, masculine, consonant-final, and the ं before ग is the matching velar nasal (§1). The frame is लंगर डालना, to drop anchor, and लंगर उठाना to weigh it. ⚠️ **IT IS A HOMOGRAPH IN LIVE HINDI** — a लंगर is also the free kitchen at a gurdwara; this card takes the sea sense and the hint names the other so a learner is not ambushed." },
        { id: "hi-u127l1-kren", type: "vocab", front: "क्रेन", reading: "kren", meaning: "a crane", accept: ["the lifting arm that swings cargo on and off"], example: { jp: "क्रेन एक बार में पूरा कंटेनर उठा लेती है।", en: "The crane lifts a whole container in one go." }, drill: { jp: "क्रेन पूरा कंटेनर उठा लेती है", en: "The crane lifts a whole container" }, hint: "KREN — ⚠️ FEMININE despite being consonant-final and a loanword: बड़ी क्रेन, क्रेन उठाती है. क्र is a stacked conjunct, so the word opens on two consonants together — kren, never karen. ⚠️ Read it against करें, 'let us do' — same letters in speech, different word." },
        { id: "hi-u127l1-ladaan", type: "vocab", front: "लदान", reading: "ladaan", meaning: "loading of cargo", accept: ["putting goods aboard"], example: { jp: "अनाज का लदान रात भर चलता रहा।", en: "The loading of the grain went on all night." }, drill: { jp: "अनाज का लदान रात भर चला", en: "The grain was loaded all night" }, hint: "LA-DAAN, masculine, consonant-final, with a DENTAL द. From लादना, to load, uncarded. ⚠️ **ITS PARTNER IS THE NEXT CARD AND THEY ARE NOT THE SAME WORD-SHAPE:** लदान is masculine and consonant-final, उतराई is feminine and -आई — so a learner has to hold two patterns for one pair of opposite jobs." },
        { id: "hi-u127l1-utaraaii", type: "vocab", front: "उतराई", reading: "utaraaii", meaning: "unloading", accept: ["taking goods off a ship or a truck"], example: { jp: "उतराई में आठ मज़दूर लगे थे।", en: "Eight labourers were put on the unloading." }, drill: { jp: "उतराई में आठ मज़दूर लगे थे", en: "Eight labourers were on the unloading" }, hint: "U-TA-RAA-II — ⚠️ FEMININE, and the -आई family again: जुताई and मड़ाई (unit 124), सिंचाई (unit 75), कटाई (unit 81), सिलाई (unit 40). From उतरना, to come down (unit 29). ⚠️ In the hills the same word means a DOWNHILL slope — the sense this card takes is the cargo one." },
      ],
    },
    {
      id: "hi-u127l2",
      unit: 127,
      lesson: 2,
      title: "The ship and the sea lane",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name a seagoing vessel, a fleet, a sailor and a waterway, and say that the tide decides when a container ship can come in.",
      items: [
        { id: "hi-u127l2-jalpot", type: "vocab", front: "जलपोत", reading: "jalpot", meaning: "a seagoing vessel", accept: ["a ship in the official register"], example: { jp: "इस गोदी में बड़े जलपोत नहीं आ सकते।", en: "Large vessels cannot come into this dock." }, drill: { jp: "बड़े जलपोत यहाँ नहीं आ सकते", en: "Large vessels cannot come here" }, hint: "JAL-POT, masculine, consonant-final, and the त is DENTAL — jal-pot, with the tongue on the teeth. जल, water, plus पोत, a vessel. ⚠️ **THE REGISTER IS THE DIFFERENCE FROM जहाज़ (unit 33):** जहाज़ is what anyone says, जलपोत is what a port authority writes — so it belongs with सीमाशुल्क (l4) and not with a holiday." },
        { id: "hi-u127l2-beraa", type: "vocab", front: "बेड़ा", reading: "beraa", meaning: "a fleet", accept: ["all the ships of one owner or navy taken together"], example: { jp: "पूरा बेड़ा एक साथ बंदरगाह से निकला।", en: "The whole fleet left the port together." }, drill: { jp: "पूरा बेड़ा बंदरगाह से निकला", en: "The whole fleet left the port" }, hint: "BE-RAA, masculine and regular -ा, so the oblique is बेड़े. ड़ is the curled-back flap written **r** (unit 4) — be-raa, never be-daa. ⚠️ Read it against बेटा, a son (unit 10): one is a RETROFLEX flap and the other a DENTAL stop, and that is the only difference a listener gets." },
        { id: "hi-u127l2-naavik", type: "vocab", front: "नाविक", reading: "naavik", meaning: "a sailor", accept: ["one of a ship's crew"], example: { jp: "हर नाविक को छह महीने समुद्र पर रहना पड़ता है।", en: "Every sailor has to stay at sea for six months." }, drill: { jp: "हर नाविक छह महीने समुद्र पर रहता है", en: "Every sailor stays at sea for six months" }, hint: "NAA-VIK, masculine and FIXED for a woman. Built on नाव, a boat (unit 33) — ⚠️ and the ि that follows is a mātrā, so 🚨 **नाव SITS INSIDE THIS FRONT WITH THE ROUTER ABLE TO MATCH IT**: the छात्रावास shape (unit 97), named here so a drill cannot blank the wrong half unnoticed. ⚠️ Not कप्तान (unit 41), who commands." },
        { id: "hi-u127l2-jalmaarg", type: "vocab", front: "जलमार्ग", reading: "jalmaarg", meaning: "a waterway", accept: ["a river or canal route goods travel by"], example: { jp: "भारी सामान जलमार्ग से भेजना सस्ता पड़ता है।", en: "Sending heavy goods by waterway works out cheaper." }, drill: { jp: "भारी सामान जलमार्ग से भेजा जाता है", en: "Heavy goods are sent by waterway" }, hint: "JAL-MAARG, masculine, consonant-final: दो जलमार्ग. जल, water, plus मार्ग, a route. ⚠️ Not रास्ता (unit 29) and not नहर (unit 54): a नहर is the cut channel itself, a जलमार्ग is the route traffic uses, which may run down a नदी nobody cut." },
        { id: "hi-u127l2-jvaar", type: "vocab", front: "ज्वार", reading: "jvaar", meaning: "the tide", accept: ["the daily rise and fall of the sea"], example: { jp: "ज्वार आने पर ही बड़े जलपोत गोदी तक पहुँच सकते हैं।", en: "Only when the tide comes in can large vessels reach the dock." }, drill: { jp: "ज्वार आने पर जलपोत गोदी तक आता है", en: "When the tide comes in, the vessel reaches the dock" }, hint: "JVAAR, masculine, ONE syllable: ज्व is a stacked conjunct, so the word opens on two consonants — jvaar, never javaar. ⚠️ **A TRUE HOMOGRAPH AND A FARMER'S WORD TOO** — ज्वार is also sorghum, the millet. The card takes the sea sense; after unit 124 a learner has the field sense in reach, so the hint says both." },
        { id: "hi-u127l2-kantenar", type: "vocab", front: "कंटेनर", reading: "kantenar", meaning: "a shipping container", accept: ["the steel box cargo travels in"], example: { jp: "एक जलपोत पर हज़ारों कंटेनर रखे रहते हैं।", en: "Thousands of containers stay loaded on one vessel." }, drill: { jp: "इस जलपोत पर हज़ार कंटेनर रखे हैं", en: "A thousand containers are loaded on this vessel" }, hint: "KAN-TE-NAR, masculine. The ं before ट is the matching retroflex nasal (§1) and the ट is RETROFLEX, merged to t (§1b). ⚠️ Not डिब्बा (unit 18), which is a tin or a railway carriage: a कंटेनर is the standard steel box that moves off the जलपोत onto a ट्रक (l3) without being opened." },
      ],
    },
    {
      id: "hi-u127l3",
      unit: 127,
      lesson: 3,
      title: "Freight and haulage",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about haulage, the goods themselves, the freight charge, and the train, truck and sacks they travel in.",
      items: [
        { id: "hi-u127l3-dhulaaii", type: "vocab", front: "ढुलाई", reading: "dhulaaii", meaning: "haulage", accept: ["the carrying of goods from place to place", "cartage"], example: { jp: "पेट्रोल महँगा होने से ढुलाई भी महँगी हो गई।", en: "With petrol dearer, haulage has got dearer too." }, drill: { jp: "पेट्रोल महँगा होने से ढुलाई महँगी हुई", en: "Haulage got dearer because petrol did" }, hint: "DHU-LAA-II — ⚠️ FEMININE, the -आई family again, and ढ carries a puff of air with the tongue CURLED BACK: dhu, not du. From ढोना, to carry a load, uncarded. ⚠️ Read it against धुलाई, washing, which opens on a DENTAL ध — one is retroflex and one dental, and the merge (§1b) makes both read dh. **AVOID THE PAIR IN ONE SENTENCE.**" },
        { id: "hi-u127l3-maal", type: "vocab", front: "माल", reading: "maal", meaning: "goods carried for sale", accept: ["cargo", "merchandise in transit"], example: { jp: "सब माल एक ही रात में गोदाम पहुँच गया।", en: "All the goods reached the warehouse in a single night." }, drill: { jp: "सब माल एक रात में पहुँच गया", en: "All the goods arrived in one night" }, hint: "MAAL, masculine, consonant-final, and it is a MASS noun: माल पहुँचा, never माल पहुँचे. ⚠️ Not सामान (unit 18), which is a person's own stuff: माल is what somebody is shipping to be sold. 🚨 **IT SITS AT THE START OF मालगाड़ी, TWO CARDS ON, WITH THE ROUTER UNABLE TO MATCH IT**, because the ग that follows is a LETTER — checked." },
        { id: "hi-u127l3-bhaaraa", type: "vocab", front: "भाड़ा", reading: "bhaaraa", meaning: "a freight charge", accept: ["what is paid to have goods carried", "cartage payable on a load"], example: { jp: "माल का भाड़ा वज़न से तय होता है।", en: "The freight on goods is fixed by weight." }, drill: { jp: "माल का भाड़ा वज़न से तय होता है", en: "The freight on goods is fixed by weight" }, hint: "BHAA-RAA, masculine and regular -ा, so the oblique is भाड़े. भ has a puff of air and ड़ is the curled-back flap written r (unit 4). ⚠️ **FOUR WORDS FOR MONEY OWED AND THEY ARE NOT INTERCHANGEABLE:** किराया (unit 15) is rent, शुल्क (unit 97) what an institution charges, चुंगी (l4) what a town gate takes, भाड़ा what a carrier charges to move a load. ⚠️ Read it against भारी, heavy." },
        { id: "hi-u127l3-maalgaarii", type: "vocab", front: "मालगाड़ी", reading: "maalgaarii", meaning: "a goods train", accept: ["a train that carries freight and no passengers"], example: { jp: "रात की मालगाड़ी कोयला लेकर संयंत्र जाती है।", en: "The night goods train takes coal to the plant." }, drill: { jp: "रात की मालगाड़ी कोयला लेकर जाती है", en: "The night goods train carries coal" }, hint: "MAAL-GAA-RII — ⚠️ FEMININE, because गाड़ी (unit 12) is: लंबी मालगाड़ी. Two taught fronts joined — माल (two cards back) plus गाड़ी — ⚠️ **AND THE ROUTER CAN MATCH NEITHER**: माल is followed by ग, a letter, and गाड़ी is preceded by ल, a letter. The one word in the lesson built from two cards is safe from both." },
        { id: "hi-u127l3-trak", type: "vocab", front: "ट्रक", reading: "trak", meaning: "a truck", accept: ["a lorry that carries freight by road"], example: { jp: "कंटेनर क्रेन से सीधे ट्रक पर रखा जाता है।", en: "The container is put straight onto the truck by crane." }, drill: { jp: "कंटेनर सीधे ट्रक पर रखा जाता है", en: "The container is put straight onto the truck" }, hint: "TRAK, masculine, ONE syllable. ट्र is a stacked conjunct — a RETROFLEX ट with र under it (unit 6) — so trak, never tarak. ⚠️ A loanword that does NOT gloss to its reading (§9): `trak` against the English truck. Not गाड़ी (unit 12), which is any vehicle." },
        { id: "hi-u127l3-borii", type: "vocab", front: "बोरी", reading: "borii", meaning: "a jute sack for grain", accept: ["a coarse sack goods are shipped in"], example: { jp: "गेहूँ की चालीस बोरी ट्रक पर चढ़ा दी गईं।", en: "Forty sacks of wheat were loaded onto the truck." }, drill: { jp: "गेहूँ की चालीस बोरी ट्रक पर रखी गईं", en: "Forty sacks of wheat were put on the truck" }, hint: "BO-RII — ⚠️ FEMININE. ⚠️ **THE GLOSS NAMES JUTE AND GRAIN BECAUSE थैला (unit 18) ALREADY OWNS \"a sack\"** — the grader compares strings. The difference is real: a थैला is carried in the hand, a बोरी holds a quintal and needs two men. It is made of जूट (unit 136)." },
      ],
    },
    {
      id: "hi-u127l4",
      unit: 127,
      lesson: 4,
      title: "Trade across the line",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe the produce market and the trader, and say that customs duty, a toll and clearance stand between the goods and the buyer.",
      items: [
        { id: "hi-u127l4-manddii", type: "vocab", front: "मंडी", reading: "manddii", meaning: "a wholesale produce market", accept: ["the yard where farmers sell a crop in bulk"], example: { jp: "किसान अपनी फ़सल सीधे मंडी ले जाता है।", en: "The farmer takes his crop straight to the produce market." }, drill: { jp: "किसान अपनी फ़सल मंडी ले जाता है", en: "The farmer takes his crop to the market" }, hint: "MAN-DDII — ⚠️ FEMININE, and 🚨 **THE DOUBLED d IS NOT A TYPO AND NOT A SOUND.** मंदी, a slump (unit 69), already reads `mandii`, and §1b merges the RETROFLEX ड with the DENTAL द in every word reading — so one of the two had to change, and §1b's escape hatch doubles the RETROFLEX member. मंडी = `manddii`, मंदी = `mandii`. Say it with the tongue curled back. ⚠️ Not बाज़ार (unit 18), where a household shops: a मंडी sells by the बोरी." },
        { id: "hi-u127l4-vyaapaarii", type: "vocab", front: "व्यापारी", reading: "vyaapaarii", meaning: "one who trades in bulk", accept: ["a merchant who buys to sell on", "a wholesale dealer"], example: { jp: "व्यापारी मंडी से अनाज लेकर शहर में बेचता है।", en: "The trader takes grain from the market and sells it in the city." }, drill: { jp: "व्यापारी मंडी से अनाज लेकर बेचता है", en: "The trader buys grain at the market and sells it" }, hint: "VYAA-PAA-RII, masculine and FIXED for a woman. व्या is a stacked conjunct (unit 6). Built on व्यापार, trade (unit 76) — ⚠️ and the ी after it is a mātrā, so 🚨 **व्यापार SITS INSIDE IT AND THE ROUTER CAN MATCH IT.** ⚠️ **THE GLOSS SAYS \"in bulk\" BECAUSE दुकानदार (unit 18) AND विक्रेता (unit 96) BOTH OWN \"a trader\"** — three sellers, three glosses, no overlap." },
        { id: "hi-u127l4-siimaashulk", type: "vocab", front: "सीमाशुल्क", reading: "siimaashulk", meaning: "customs duty", accept: ["the tax paid on goods crossing a border"], example: { jp: "विदेश से आया माल सीमाशुल्क देने के बाद ही छूटता है।", en: "Goods that come from abroad are only released after customs duty is paid." }, drill: { jp: "विदेश से आया माल सीमाशुल्क देता है", en: "Goods from abroad pay customs duty" }, hint: "SII-MAA-SHULK, masculine, consonant-final: दो सीमाशुल्क. Two taught fronts joined — सीमा, a border, plus शुल्क, a fee (unit 97) — and ल्क is ल stacked on क. ⚠️ **THE ROUTER CAN MATCH शुल्क INSIDE IT**, because the ा before it is a mātrā, while सीमा is safe behind the श. Named, not assumed. ⚠️ Not टैक्स (unit 37), which any income pays: this one is only paid at a border." },
        { id: "hi-u127l4-chungii", type: "vocab", front: "चुंगी", reading: "chungii", meaning: "a toll levied at a town boundary", accept: ["octroi", "what a municipality takes on goods entering it"], example: { jp: "पहले हर शहर के बाहर चुंगी देनी पड़ती थी।", en: "Earlier a toll had to be paid outside every city." }, drill: { jp: "पहले हर शहर में चुंगी देनी पड़ती थी", en: "Earlier a toll had to be paid in every city" }, hint: "CHUN-GII — ⚠️ FEMININE, with the ं before ग as the matching velar nasal (§1). ⚠️ **AN OLD WORD A LEARNER STILL MEETS**: the levy itself has mostly been abolished, but the word survives in place names and in talk about the past, which is why the example is in the past habitual (unit 38)." },
        { id: "hi-u127l4-nikaasii", type: "vocab", front: "निकासी", reading: "nikaasii", meaning: "clearance of goods", accept: ["getting a consignment released by the authorities", "drainage of water"], example: { jp: "कागज़ पूरे न हों तो निकासी में हफ़्ते लग जाते हैं।", en: "If the papers are not complete, clearance takes weeks." }, drill: { jp: "कागज़ पूरे न होने से निकासी रुक गई", en: "Clearance stopped because the papers were incomplete" }, hint: "NI-KAA-SII — ⚠️ FEMININE, and ⚠️ THE ि IS SHORT: ni-kaa-sii. From निकलना, to come out (unit 26). ⚠️ **TWO LIVE SENSES AND BOTH ARE IN THE ACCEPT LIST** — the customs one this lesson needs, and the drainage of water, which is what a municipal notice means. One word, two offices." },
        { id: "hi-u127l4-parivahan", type: "vocab", front: "परिवहन", reading: "parivahan", meaning: "transport as a system", accept: ["the moving of people and goods taken as a whole"], example: { jp: "सस्ता परिवहन न हो तो किसान को फ़सल का पूरा पैसा नहीं मिलता।", en: "Without cheap transport the farmer does not get the full price of his crop." }, drill: { jp: "सस्ता परिवहन किसान के लिए ज़रूरी है", en: "Cheap transport is necessary for the farmer" }, hint: "PA-RI-VA-HAN, masculine, and the ह is HEARD. ⚠️ **NOT ढुलाई (l3), AND THE PAIR CLOSES THE UNIT:** ढुलाई is the job somebody is paid for, परिवहन is the whole arrangement a ministry plans — roads, rail, जलमार्ग and all. The widest word in the unit, and the one a newspaper uses." },
      ],
    },
  ],
};
