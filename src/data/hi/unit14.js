// HI Unit 14 — शहर में ("In the town") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot kept, retitled in Devanagari. THE DIVISION OF LABOUR WITH u9 IS BLOCK 1'S
// AND IT IS RESPECTED: u9 spent स्टेशन, होटल, बैंक, पार्क, अस्पताल, दुकान as
// LOANWORD-DECODING practice, and reserved "the non-loan places" for this slot
// (unit1.js, FOUR WORD-GROUPS BLOCK 1 SPENT). So nothing here is an English loan
// except टमाटर's cousins, and बाज़ार, मस्जिद, गली, पुल, खेत, जगह, मैदान, नदी are
// all native or Persian. सड़क is already u5l3 and is NOT re-taught.
//
// ⚠️ बाज़ार IS TAUGHT HERE, NOT IN u18. u18 is the TRANSACTION unit (money, buying,
// prices) and it needs the word for the place in its own examples, so the place
// belongs to the lower slot. Lower-slot-wins, exactly as unit1.js applies it.
//
// THE ONE THING IN THIS UNIT THAT IS REALLY GRAMMAR: पास. मेरे पास एक किताब है is
// how Hindi says "I have a book" — there is no verb "to have" in the language at
// all. It is carded as ordinary vocabulary with the frame in its hint, because a
// learner cannot say a single sentence about possession without it, and §6 gives
// the postposition PARADIGM to u23 rather than the individual words.
export const HI_UNIT14 = {
  id: "hi-u14",
  lang: "hi",
  title: "शहर में",
  order: 14,
  stage: "a1",
  lessons: [
    {
      id: "hi-u14l1",
      unit: 14,
      lesson: 1,
      title: "Places in a town",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the places in an Indian town and say which one you are going to.",
      items: [
        { id: "hi-u14l1-baazaar", type: "vocab", front: "बाज़ार", reading: "baazaar", meaning: "a market", accept: ["market", "a bazaar", "the shops"], example: { jp: "मैं रोज़ बाज़ार जाता हूँ।", en: "I go to the market every day." }, drill: { jp: "इस शहर का बाज़ार बहुत बड़ा है", en: "This city's market is very big" }, hint: "BAA-ZAAR, masculine, with the Persian ज़. It is a whole street of shops rather than one building, so you go to the बाज़ार the way English goes 'to the shops'." },
        { id: "hi-u14l1-masjid", type: "vocab", front: "मस्जिद", reading: "masjid", meaning: "a mosque", accept: ["mosque", "a masjid"], example: { jp: "इस गली में एक मस्जिद है।", en: "There is a mosque in this lane." }, drill: { jp: "मस्जिद और मंदिर पास हैं", en: "The mosque and the temple are close by" }, hint: "MAS-JID — ⚠️ FEMININE, one of the consonant-ending words whose gender you simply have to learn (unit 1 §4). मंदिर is masculine, मस्जिद feminine, and the two stand side by side in most Indian towns." },
        { id: "hi-u14l1-galii", type: "vocab", front: "गली", reading: "galii", meaning: "a lane", accept: ["an alley", "a narrow street", "a side street"], example: { jp: "यह गली बहुत छोटी है।", en: "This lane is very narrow." }, drill: { jp: "इस गली में बहुत दुकानें हैं", en: "There are many shops in this lane" }, hint: "GA-LII, feminine, plural गलियाँ. Narrower than a सड़क — the kind of lane two people can barely pass in. The old quarter of any Indian city is nothing but गलियाँ." },
        { id: "hi-u14l1-pul", type: "vocab", front: "पुल", reading: "pul", meaning: "a bridge", accept: ["bridge", "a flyover"], example: { jp: "इस नदी पर एक पुल है।", en: "There is a bridge over this river." }, drill: { jp: "यह पुल बहुत पुराना है", en: "This bridge is very old" }, hint: "PUL, masculine, two letters. A river bridge and a city flyover are the same word. Keep it apart from फल phal (fruit, unit 4): प and फ differ only by a puff of air." },
        { id: "hi-u14l1-khet", type: "vocab", front: "खेत", reading: "khet", meaning: "a field", accept: ["a farm", "farmland", "a paddy field"], example: { jp: "गाँव के पास खेत हैं।", en: "There are fields near the village." }, drill: { jp: "यह खेत बहुत बड़ा है", en: "This field is very big" }, hint: "KHET, masculine, unchanged in the plural. A CULTIVATED field — open ground is मैदान, lesson 3. Most of India still works in खेत, which is why the word is everywhere." },
        { id: "hi-u14l1-jagah", type: "vocab", front: "जगह", reading: "jagah", meaning: "a place", accept: ["a spot", "space", "somewhere"], example: { jp: "यह जगह बहुत शांत है।", en: "This place is very quiet." }, drill: { jp: "मुझे यह जगह अच्छी लगती है", en: "I like this place" }, hint: "JA-GAH, feminine. A place or a spot, and also room in the sense of space: जगह नहीं है, there is no room. Never use it for a room in a house — that is कमरा." },
      ],
    },
    {
      id: "hi-u14l2",
      unit: 14,
      lesson: 2,
      title: "Finding your way",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask the way, and follow directions left, right and straight on.",
      items: [
        { id: "hi-u14l2-raastaa", type: "vocab", front: "रास्ता", reading: "raastaa", meaning: "a way", accept: ["a road", "a route", "a path"], example: { jp: "यह रास्ता स्कूल जाता है।", en: "This road goes to the school." }, drill: { jp: "मैं आपको रास्ता बताता हूँ", en: "I will tell you the way" }, hint: "RAAS-TAA, masculine. The ROUTE to somewhere, where सड़क is the tarmac itself. रास्ता पूछना is 'to ask the way' — and remember from u12 that the person asked takes से." },
        { id: "hi-u14l2-duur", type: "vocab", front: "दूर", reading: "duur", meaning: "far", accept: ["distant", "a long way off", "far away"], example: { jp: "स्टेशन यहाँ से दूर है।", en: "The station is far from here." }, drill: { jp: "मेरा घर बाज़ार से दूर नहीं है", en: "My house is not far from the market" }, hint: "DUUR is an adjective and an adverb at once, and it never changes form for gender or number. The thing you are far FROM takes से: घर से दूर." },
        { id: "hi-u14l2-paas", type: "vocab", front: "पास", reading: "paas", meaning: "near", accept: ["nearby", "close by", "beside"], example: { jp: "मेरा घर स्कूल के पास है।", en: "My house is near the school." }, drill: { jp: "यह दुकान मेरे घर के पास है", en: "This shop is near my house" }, hint: "PAAS is the opposite of दूर and it takes के: घर के पास. ⚠️ AND IT HAS A SECOND, BIGGER JOB — मेरे पास is how Hindi says 'I have': मेरे पास एक किताब है, literally 'near me there is a book'. HINDI HAS NO VERB FOR 'TO HAVE', so this frame is the only way to say it." },
        { id: "hi-u14l2-siidhaa", type: "vocab", front: "सीधा", reading: "siidhaa", meaning: "straight", accept: ["straight on", "direct", "upright"], example: { jp: "यह रास्ता सीधा जाता है।", en: "This road goes straight." }, drill: { jp: "बाज़ार का रास्ता सीधा है", en: "The road to the market is straight" }, hint: "SIID-HAA, masculine singular — सीधी, सीधे for the rest. Straight ahead, and also 'straightforward' of a person. सीधे चलिए is 'go straight on'." },
        { id: "hi-u14l2-baaen", type: "vocab", front: "बाएँ", reading: "baaen", meaning: "the left-hand side", accept: ["left", "on the left", "to the left"], example: { jp: "बाएँ एक मस्जिद है।", en: "There is a mosque on the left." }, drill: { jp: "इस गली के बाएँ एक दुकान है", en: "There is a shop to the left of this lane" }, hint: "BAA-EN, with the final ँ nasalised — let it hum through the nose, do not land on a hard n. It already carries its plural-oblique shape, which is why it needs no postposition of its own: बाएँ चलिए, go left." },
        { id: "hi-u14l2-daaen", type: "vocab", front: "दाएँ", reading: "daaen", meaning: "the right-hand side", accept: ["right", "on the right", "to the right"], example: { jp: "दाएँ एक बड़ी दुकान है।", en: "There is a big shop on the right." }, drill: { jp: "मंदिर इस सड़क के दाएँ है", en: "The temple is to the right of this road" }, hint: "DAA-EN, the mirror of बाएँ. ⚠️ English 'right' is two words in Hindi and they never overlap: ठीक (unit 4) is right meaning correct, दाएँ is right meaning the direction." },
      ],
    },
    {
      id: "hi-u14l3",
      unit: 14,
      lesson: 3,
      title: "Around the town",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe what is around your town — the river, the trees, the open ground.",
      items: [
        { id: "hi-u14l3-gaarii", type: "vocab", front: "गाड़ी", reading: "gaarii", meaning: "a car", accept: ["a vehicle", "a train", "a cart"], example: { jp: "मेरी गाड़ी बाहर है।", en: "My car is outside." }, drill: { jp: "यह गाड़ी बहुत पुरानी है", en: "This car is very old" }, hint: "GAA-RII, feminine, with ड़ — curl the tongue back and let it snap forward. It covers any wheeled thing: car, train, bullock cart. ⚠️ Read it against घड़ी gharii (a clock, unit 9): ga against gha, one puff of air apart, and everything else identical." },
        { id: "hi-u14l3-daakghar", type: "vocab", front: "डाकघर", reading: "daakghar", meaning: "a post office", accept: ["the post office"], example: { jp: "डाकघर बाज़ार के पास है।", en: "The post office is near the market." }, drill: { jp: "यह डाकघर रोज़ बंद रहता है", en: "This post office stays closed every day" }, hint: "DAAK-GHAR, masculine — डाक (post) plus घर (house), so literally 'post-house'. You already know घर, which makes this a compound you can take apart on sight. Retroflex ड at the front." },
        { id: "hi-u14l3-maidaan", type: "vocab", front: "मैदान", reading: "maidaan", meaning: "open ground", accept: ["a playing field", "open space", "a maidan"], example: { jp: "बच्चे मैदान में बैठते हैं।", en: "The children sit on the open ground." }, drill: { jp: "इस शहर में एक बड़ा मैदान है", en: "There is a big open ground in this city" }, hint: "MAI-DAAN, masculine — the flat open ground a town keeps for cricket, fairs and rallies. Not a खेत, which is farmed, and not a पार्क, which is planted." },
        { id: "hi-u14l3-nadii", type: "vocab", front: "नदी", reading: "nadii", meaning: "a river", accept: ["river", "a stream"], example: { jp: "यह नदी बहुत बड़ी है।", en: "This river is very big." }, drill: { jp: "इस गाँव के पास एक नदी है", en: "There is a river near this village" }, hint: "NA-DII, feminine, plural नदियाँ — and every Indian river is feminine and addressed as a mother. Two letters plus one mātrā." },
        { id: "hi-u14l3-per", type: "vocab", front: "पेड़", reading: "per", meaning: "a tree", accept: ["tree", "trees"], example: { jp: "सड़क पर बहुत पेड़ हैं।", en: "There are many trees along the road." }, drill: { jp: "इस मैदान में एक पेड़ है", en: "There is a tree on this open ground" }, hint: "PER, masculine, unchanged in the plural (दो पेड़). The ड़ is the curled-back flap, so it lands closer to 'per' than to 'ped'. ⚠️ Three near-twins: पेन pen (a pen, unit 9), पेड़ per (a tree), पेट pet (the stomach, unit 20)." },
        { id: "hi-u14l3-bagiichaa", type: "vocab", front: "बगीचा", reading: "bagiichaa", meaning: "a garden", accept: ["a small park", "a plot of garden", "an orchard"], example: { jp: "मेरे घर के पास एक बगीचा है।", en: "There is a garden near my house." }, drill: { jp: "यह बगीचा बहुत शांत है", en: "This garden is very quiet" }, hint: "BA-GII-CHAA, masculine — a garden or a small planted park, bigger than a windowbox and smaller than a पार्क. Plural बगीचे." },
      ],
    },
    {
      id: "hi-u14l4",
      unit: 14,
      lesson: 4,
      title: "How a place feels",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how many people are somewhere and whether a place is clean, quiet or crowded.",
      items: [
        { id: "hi-u14l4-log", type: "vocab", front: "लोग", reading: "log", meaning: "people", accept: ["persons", "folk", "the public"], example: { jp: "इस बाज़ार में बहुत लोग हैं।", en: "There are many people in this market." }, drill: { jp: "यहाँ के लोग बहुत अच्छे हैं", en: "The people here are very good" }, hint: "LOG, masculine and ALWAYS PLURAL — there is no singular. For one person you reach for आदमी, औरत or आप instead. लोगों is the oblique: लोगों के लिए, for people." },
        { id: "hi-u14l4-bhiir", type: "vocab", front: "भीड़", reading: "bhiir", meaning: "a crowd", accept: ["a throng", "a crush", "crowding"], example: { jp: "बाज़ार में बहुत भीड़ है।", en: "There is a big crowd in the market." }, drill: { jp: "इस गली में भीड़ नहीं है", en: "There is no crowd in this lane" }, hint: "BHIIR, feminine, ending in ड़. भीड़ है is how Hindi says 'it is crowded' — the noun where English wants an adjective, exactly as it does with भूख and प्यास." },
        { id: "hi-u14l4-shaant", type: "vocab", front: "शांत", reading: "shaant", meaning: "quiet", accept: ["calm", "peaceful", "still"], example: { jp: "यह गाँव बहुत शांत है।", en: "This village is very quiet." }, drill: { jp: "रात को यह सड़क शांत रहती है", en: "At night this road stays quiet" }, hint: "SHAANT never changes form, like तैयार — every consonant-final adjective behaves this way. The ं before त is the matching nasal, hummed rather than spoken. It describes places and people alike: शांत आदमी." },
        { id: "hi-u14l4-saaf", type: "vocab", front: "साफ़", reading: "saaf", meaning: "clean", accept: ["neat", "tidy", "clear"], example: { jp: "यह कमरा बहुत साफ़ है।", en: "This room is very clean." }, drill: { jp: "इस गाँव की सड़क साफ़ है", en: "This village's road is clean" }, hint: "SAAF, with फ़ — an f, not a ph, and no change for gender. It also means 'clear': साफ़ बोलिए, speak clearly. साफ़ करना is 'to clean'." },
        { id: "hi-u14l4-gandaa", type: "vocab", front: "गंदा", reading: "gandaa", meaning: "dirty", accept: ["filthy", "unclean", "messy"], example: { jp: "यह पानी गंदा है।", en: "This water is dirty." }, drill: { jp: "इस गली का पानी गंदा है", en: "The water in this lane is dirty" }, hint: "GAN-DAA, masculine singular — गंदी before a feminine noun. The ं before ड is the matching retroflex nasal. It is stronger than English 'dirty' and becomes a real insult when used of a person." },
        { id: "hi-u14l4-aage", type: "vocab", front: "आगे", reading: "aage", meaning: "ahead", accept: ["in front", "forward", "onward"], example: { jp: "मेरा घर आगे है।", en: "My house is ahead." }, drill: { jp: "इस पुल के आगे एक मंदिर है", en: "There is a temple beyond this bridge" }, hint: "AA-GE — ahead in space and also later in time: आगे चलिए (go on ahead), आगे देखते हैं (we'll see later). After a noun it takes के: घर के आगे." },
      ],
    },
  ],
};
