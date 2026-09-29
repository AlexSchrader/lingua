// HI Unit 15 — घर के अंदर ("Inside the house") — A1
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 RETHEMED SLOT. The scaffold called this "Characters 3" — the Japanese
// interleaved-kanji strand, which Hindi finishes at u6 (unit1.js §10). lint
// hard-errors on the stub title, so the retheme was compulsory.
//
// WHY THE HOUSE. Block 1 reserved it: "मेज़, कुर्सी, पंखा, टीवी, फ़ोन, लाइट, घड़ी
// (u9l2/u9l4). u15 owns the rest of the house" (unit1.js, FOUR WORD-GROUPS). And
// the hole is real when you measure it — the merged u1–u10 corpus taught घर, कमरा,
// दरवाज़ा, छत and seven loan appliances, and NOT ONE word for a kitchen, a window,
// a bed, a wall, a key or a staircase. Russian's seat found the identical shape of
// gap in its own corpus: a learner who could describe a town but not name the room
// they were standing in. So this slot is the room, and u18 is the shopping hole.
//
// GENDER TRAPS THIS UNIT ADDS (§4). दीवार and चादर are FEMININE despite ending in
// a consonant; झाड़ू is FEMININE despite -ू; तकिया and तौलिया are MASCULINE
// despite looking like -या feminines. Every one is named in its hint.
//
// ⚠️ AND ONE THING THIS UNIT TEACHES ON PURPOSE: दीवार's hint names the plural
// दीवारें. A consonant-final feminine noun pluralises with the MĀTRĀ ें, not the
// independent letter एँ — किताबें, चीज़ें, चादरें, दीवारें. `scripts/scope-hi.mjs`
// generated the impossible किताबएँ and flagged the real form as out of scope; block
// 2 fixed the rule there (see that file's header) rather than writing around it.
export const HI_UNIT15 = {
  id: "hi-u15",
  lang: "hi",
  title: "घर के अंदर",
  order: 15,
  stage: "a1",
  lessons: [
    {
      id: "hi-u15l1",
      unit: 15,
      lesson: 1,
      title: "The parts of a house",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the rooms and surfaces of a house and say which one you are in.",
      items: [
        { id: "hi-u15l1-rasoii", type: "vocab", front: "रसोई", reading: "rasoii", meaning: "a kitchen", accept: ["the kitchen", "a cookhouse"], example: { jp: "मीना रसोई में खाना बनाती है।", en: "Meena cooks food in the kitchen." }, drill: { jp: "यह रसोई बहुत साफ़ है", en: "This kitchen is very clean" }, hint: "RA-SO-II, feminine, three syllables — and the final ई is a FULL VOWEL LETTER, not a mātrā, because nothing precedes it in that syllable. रसोई करना means 'to do the cooking'." },
        { id: "hi-u15l1-khirkii", type: "vocab", front: "खिड़की", reading: "khirkii", meaning: "a window", accept: ["window", "windows"], example: { jp: "इस कमरे में दो खिड़कियाँ हैं।", en: "There are two windows in this room." }, drill: { jp: "यह खिड़की बंद है", en: "This window is shut" }, hint: "KHIR-KII, feminine, plural खिड़कियाँ. The ड़ is the curled-back flap, so it lands as khir, never khid. खिड़की खोलिए is 'open the window'." },
        { id: "hi-u15l1-diivaar", type: "vocab", front: "दीवार", reading: "diivaar", meaning: "a wall", accept: ["wall", "walls"], example: { jp: "इस कमरे की दीवार साफ़ है।", en: "This room's wall is clean." }, drill: { jp: "इस दीवार पर एक घड़ी है", en: "There is a clock on this wall" }, hint: "DII-VAAR — ⚠️ FEMININE despite the consonant ending, unit 1 §4's unpredictable class. And note the plural: दीवारें, with the MĀTRĀ ें. A consonant-final feminine noun always takes ें, never the separate letter एँ." },
        { id: "hi-u15l1-farsh", type: "vocab", front: "फ़र्श", reading: "farsh", meaning: "a floor", accept: ["the floor", "flooring"], example: { jp: "बच्चे फ़र्श पर बैठते हैं।", en: "The children sit on the floor." }, drill: { jp: "इस रसोई का फ़र्श गंदा है", en: "This kitchen's floor is dirty" }, hint: "FARSH, masculine, with फ़ — an f, not a ph. The floor as a surface; a STOREY of a building is मंज़िल, a different word. र्श is र riding above श as a little hook." },
        { id: "hi-u15l1-siirhii", type: "vocab", front: "सीढ़ी", reading: "siirhii", meaning: "a staircase", accept: ["stairs", "a ladder", "a step"], example: { jp: "यह सीढ़ी बहुत पुरानी है।", en: "This staircase is very old." }, drill: { jp: "इस घर की सीढ़ी बाहर है", en: "This house's staircase is outside" }, hint: "SII-RHII, feminine, with ढ़ — the curled-back flap WITH a puff of air, which is why it reads rh and not just r. Staircase and ladder are one word. Plural सीढ़ियाँ, which is also how you say 'the stairs'." },
        { id: "hi-u15l1-aangan", type: "vocab", front: "आँगन", reading: "aangan", meaning: "a courtyard", accept: ["a yard", "an inner court"], example: { jp: "इस घर का आँगन बड़ा है।", en: "This house's courtyard is big." }, drill: { jp: "आँगन में एक पेड़ है", en: "There is a tree in the courtyard" }, hint: "AAN-GAN, masculine — the open courtyard inside a traditional house, with all the rooms opening onto it. Almost every older Indian home is built around one. The ँ nasalises the आ." },
      ],
    },
    {
      id: "hi-u15l2",
      unit: 15,
      lesson: 2,
      title: "Furniture and fittings",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what is in your bedroom, and ask where the key is.",
      items: [
        { id: "hi-u15l2-bistar", type: "vocab", front: "बिस्तर", reading: "bistar", meaning: "a bed", accept: ["bedding", "a bed roll"], example: { jp: "मेरा बिस्तर इस कमरे में है।", en: "My bed is in this room." }, drill: { jp: "बच्चा बिस्तर पर सोता है", en: "The child sleeps on the bed" }, hint: "BIS-TAR, masculine. Strictly it is the BEDDING — the mattress and quilt you spread out — which is why बिस्तर लगाना means 'to make up a bed'. The wooden frame itself is पलंग." },
        { id: "hi-u15l2-almaarii", type: "vocab", front: "अलमारी", reading: "almaarii", meaning: "a cupboard", accept: ["a wardrobe", "a cabinet", "a bookcase"], example: { jp: "मेरी किताबें अलमारी में हैं।", en: "My books are in the cupboard." }, drill: { jp: "इस अलमारी में मेरी चीज़ें हैं", en: "My things are in this cupboard" }, hint: "AL-MAA-RII, feminine — from Portuguese armário, one of a handful of Portuguese words that entered Hindi through Goa. Any tall closed cupboard: wardrobe, bookcase, kitchen cabinet." },
        { id: "hi-u15l2-takiyaa", type: "vocab", front: "तकिया", reading: "takiyaa", meaning: "a pillow", accept: ["a cushion", "a bolster"], example: { jp: "इस बिस्तर पर दो तकिये हैं।", en: "There are two pillows on this bed." }, drill: { jp: "मुझे यह तकिया अच्छा लगता है", en: "I like this pillow" }, hint: "TA-KI-YAA — ⚠️ MASCULINE, even though -या looks feminine. Plural तकिये. Pillow and cushion are the same word; Hindi does not separate them." },
        { id: "hi-u15l2-chaadar", type: "vocab", front: "चादर", reading: "chaadar", meaning: "a sheet", accept: ["a bedsheet", "a shawl", "a cover"], example: { jp: "इस बिस्तर पर एक चादर है।", en: "There is a sheet on this bed." }, drill: { jp: "यह चादर आँगन में है", en: "This sheet is in the courtyard" }, hint: "CHAA-DAR — ⚠️ FEMININE despite the consonant ending, plural चादरें. A bedsheet, and also the length of cloth a woman draws over her head; one word does both. Keep it apart from चाँद chaand (the moon)." },
        { id: "hi-u15l2-chaabii", type: "vocab", front: "चाबी", reading: "chaabii", meaning: "a key", accept: ["key", "keys"], example: { jp: "मेरी चाबी कहाँ है?", en: "Where is my key?" }, drill: { jp: "इस अलमारी की चाबी मेरे पास है", en: "I have the key to this cupboard" }, hint: "CHAA-BII, feminine, plural चाबियाँ. चाबी लगाना is to put the key in, चाबी से खोलना to unlock. It is also the winding key of a clock: घड़ी में चाबी देना." },
        { id: "hi-u15l2-taalaa", type: "vocab", front: "ताला", reading: "taalaa", meaning: "a lock", accept: ["a padlock", "a bolt"], example: { jp: "इस दरवाज़े पर ताला है।", en: "There is a lock on this door." }, drill: { jp: "यह ताला बहुत पुराना है", en: "This lock is very old" }, hint: "TAA-LAA, masculine, with DENTAL त — tongue flat on the teeth, not curled back. Indian doors mostly use a padlock through a hasp, which is exactly the picture ताला carries. ताला लगाना is 'to lock up'." },
      ],
    },
    {
      id: "hi-u15l3",
      unit: 15,
      lesson: 3,
      title: "The kitchen and the chores",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the things you clean with, and say who does which household chore.",
      items: [
        { id: "hi-u15l3-bartan", type: "vocab", front: "बर्तन", reading: "bartan", meaning: "a dish", accept: ["a pot", "utensils", "the washing-up"], example: { jp: "मीना रसोई में बर्तन साफ़ करती है।", en: "Meena cleans the dishes in the kitchen." }, drill: { jp: "इस रसोई में बहुत बर्तन हैं", en: "There are many dishes in this kitchen" }, hint: "BAR-TAN, masculine, unchanged in the plural. Any vessel at all — pot, pan, plate, tumbler. बर्तन धोना is 'to do the washing-up'." },
        { id: "hi-u15l3-chuulhaa", type: "vocab", front: "चूल्हा", reading: "chuulhaa", meaning: "a stove", accept: ["a hearth", "a cooker", "a fire"], example: { jp: "रसोई में एक चूल्हा है।", en: "There is a stove in the kitchen." }, drill: { jp: "मीना चूल्हा साफ़ करती है", en: "Meena cleans the stove" }, hint: "CHUUL-HAA, masculine, plural चूल्हे. Originally the mud hearth burning wood or dung, and now any gas burner too — the word simply moved with the technology. ल्ह is ल glued onto ह." },
        { id: "hi-u15l3-saabun", type: "vocab", front: "साबुन", reading: "saabun", meaning: "soap", accept: ["a bar of soap", "detergent"], example: { jp: "इस दुकान में साबुन सस्ता है।", en: "Soap is cheap in this shop." }, drill: { jp: "मीना साबुन से बर्तन साफ़ करती है", en: "Meena cleans the dishes with soap" }, hint: "SAA-BUN, masculine — from Arabic, and the same distant root as English 'soap'. It covers bath soap and washing powder alike, so ask which kind you mean." },
        { id: "hi-u15l3-kachraa", type: "vocab", front: "कचरा", reading: "kachraa", meaning: "rubbish", accept: ["garbage", "litter", "waste"], example: { jp: "आँगन में कचरा है।", en: "There is rubbish in the courtyard." }, drill: { jp: "यह कचरा बाहर है", en: "This rubbish is outside" }, hint: "KACH-RAA, masculine. Household rubbish; कचरा फेंकना is to throw it out. कूड़ा means exactly the same thing in a slightly more northern register and you will hear both." },
        { id: "hi-u15l3-jhaaruu", type: "vocab", front: "झाड़ू", reading: "jhaaruu", meaning: "a broom", accept: ["a brush", "sweeping"], example: { jp: "मीना झाड़ू से फ़र्श साफ़ करती है।", en: "Meena cleans the floor with a broom." }, drill: { jp: "यह झाड़ू रसोई में है", en: "This broom is in the kitchen" }, hint: "JHAA-RUU — ⚠️ FEMININE, even though it ends in -ू. With ड़, the curled flap. The Indian broom is a bundle of grass stalks used bent double, not a long-handled brush. झाड़ू लगाना is 'to sweep'." },
        { id: "hi-u15l3-tauliyaa", type: "vocab", front: "तौलिया", reading: "tauliyaa", meaning: "a towel", accept: ["a hand towel", "a bath towel"], example: { jp: "मेरा तौलिया खिड़की पर है।", en: "My towel is on the window." }, drill: { jp: "यह तौलिया बहुत गंदा है", en: "This towel is very dirty" }, hint: "TAU-LI-YAA, MASCULINE, plural तौलिये — English 'towel' with a Hindi ending. औ is one glide, as in नौ. Keep it apart from तकिया takiyaa (a pillow): same ending, same rhythm, different thing." },
      ],
    },
    {
      id: "hi-u15l4",
      unit: 15,
      lesson: 4,
      title: "Living in it",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about your neighbours, the rent, and whether the water and power are on.",
      items: [
        { id: "hi-u15l4-parosii", type: "vocab", front: "पड़ोसी", reading: "parosii", meaning: "a neighbour", accept: ["neighbours", "the people next door"], example: { jp: "मेरे पड़ोसी बहुत अच्छे हैं।", en: "My neighbours are very good." }, drill: { jp: "इस गली के पड़ोसी शांत हैं", en: "The neighbours in this lane are quiet" }, hint: "PA-RO-SII, masculine, with ड़. The plural is identical to the singular, so मेरे पड़ोसी can mean one man or the whole street. पड़ोसन is the word for a woman next door." },
        { id: "hi-u15l4-kiraayaa", type: "vocab", front: "किराया", reading: "kiraayaa", meaning: "rent", accept: ["a fare", "hire", "a rental"], example: { jp: "इस कमरे का किराया बहुत ज़्यादा है।", en: "The rent for this room is very high." }, drill: { jp: "मैं रोज़ बस का किराया देता हूँ", en: "I pay the bus fare every day" }, hint: "KI-RAA-YAA, masculine — rent for a room AND the fare on a bus, because both are money paid for temporary use. किराये पर is 'for rent'. Watch it against किताब kitaab (a book)." },
        { id: "hi-u15l4-bijlii", type: "vocab", front: "बिजली", reading: "bijlii", meaning: "electricity", accept: ["power", "lightning", "the mains"], example: { jp: "मेरे कमरे में बिजली नहीं है।", en: "There is no electricity in my room." }, drill: { jp: "इस गाँव में बिजली बहुत कम है", en: "There is very little electricity in this village" }, hint: "BIJ-LII, feminine. Electricity and lightning are the same word, which tells you where the name came from. बिजली गई — 'the power has gone' — is a sentence you will hear daily." },
        { id: "hi-u15l4-nal", type: "vocab", front: "नल", reading: "nal", meaning: "a tap", accept: ["a faucet", "a water pipe", "a standpipe"], example: { jp: "रसोई में नल है।", en: "There is a tap in the kitchen." }, drill: { jp: "इस नल का पानी साफ़ है", en: "The water from this tap is clean" }, hint: "NAL, masculine, two letters. The tap, and by extension the public standpipe a whole lane shares. नल में पानी नहीं है is the other half of the daily pair with बिजली गई." },
        { id: "hi-u15l4-konaa", type: "vocab", front: "कोना", reading: "konaa", meaning: "a corner", accept: ["a nook", "an angle", "an edge"], example: { jp: "यह कमरा कोने में है।", en: "This room is in the corner." }, drill: { jp: "इस कमरे का कोना बहुत गंदा है", en: "This room's corner is very dirty" }, hint: "KO-NAA, masculine, oblique कोने — and the oblique is the form you will actually use, because a corner is nearly always somewhere you are IN: कोने में. The plural is कोने too." },
        { id: "hi-u15l4-aaraam", type: "vocab", front: "आराम", reading: "aaraam", meaning: "rest", accept: ["comfort", "ease", "relaxation"], example: { jp: "मैं कमरे में आराम करता हूँ।", en: "I rest in the room." }, drill: { jp: "काम के बाद आराम अच्छा लगता है", en: "Rest feels good after work" }, hint: "AA-RAAM, masculine — rest and comfort in one word. आराम करना is 'to rest'; आराम से means 'comfortably' and also 'slowly, take your time', which is one of the most-used phrases in India. आरामकुर्सी is an armchair." },
      ],
    },
  ],
};
