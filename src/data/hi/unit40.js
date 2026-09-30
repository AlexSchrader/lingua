// HI Unit 40 — कपड़े और नाप ("Clothes and measurement") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 1, THE LAST UNIT OF THIS RANGE. Conventions: unit1.js §1–§11, then
// unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT. The scaffold called this "Home and household", and u15 घर के
// अंदर already owns the house — the probe found it **11 of 14** full (रसोई, छत,
// सीढ़ी, बिस्तर, अलमारी, दरवाज़ा, खिड़की, चाबी, ताला, दीवार, फ़र्श, साबुन, झाड़ू,
// चूल्हा, तकिया, तौलिया, चादर, किराया, पड़ोसी, कोना, कचरा, बिजली). Filling it would
// have meant inventing twenty cards for three gaps. The measured holes it was
// rethemed into, both inside the household:
//     clothing      **6 of 18** — u18 बाज़ार sold कमीज़, साड़ी, टोपी, कपड़ा, जूता as
//                   market goods, and the course had no trousers, no socks, no
//                   pocket, no button, no glasses, no ring.
//     measurement   **3 of 14** — only किलो (u18), आधा (u11) and जोड़ा (u19). No
//                   metre, no litre, no dozen, no word for a measurement at all.
// The wardrobe is the household half u15 skipped, and the measuring is how you buy
// what goes in it — so the two halves of this unit are one errand.
//
// ⚠️ ONE FRONT WAS MOVED TO THE SINGULAR TO OBEY §4. मोज़े, socks, is what an Indian
// says; the headword is मोज़ा, because a noun front is the BARE DIRECT SINGULAR and
// carding a plural would make the gender unlearnable. मोज़े appears in the example,
// where the learner meets it.
// ⚠️ AND TWO SPELLINGS WERE CHOSEN DELIBERATELY, after u36 and u38 each lost a card
// to a variant: कुर्ता with the र् (not कुरता) and चश्मा with the श्म conjunct, which
// are the printed forms. Every front in this unit was run through the reading check
// before authoring; 936 → 960 readings, all distinct.
//
// ⚠️ ONE NEAR-COLLISION WORTH THE HINT IT GETS: ऊन uun, wool, against उन un, the
// oblique of वह, which unit1.js declared FREE. Only §1's length-by-doubling
// separates them, which is exactly what that section exists for.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint, and this unit has
// more of them than any other in the block:
//   ⚠️ पतलून, चप्पल, स्कर्ट, जेब, अंगूठी, सिलाई, ऊन are FEMININE — and पतलून,
//   चप्पल, स्कर्ट and जेब all end in a CONSONANT, so nothing in the shape tells you.
//   यह पतलून लंबी है, not लंबा.
//   कुर्ता, मोज़ा, दुपट्टा, धागा, चमड़ा, फ़ीता are MASCULINE -ा, regular.
//   बटन, सूट, रेशम, नाप, मीटर, लीटर, दर्जन, चश्मा are MASCULINE; चश्मा looks -ा and
//   is, दर्जी is MASCULINE despite the -ी, like पानी and हाथी.
//   तंग is INVARIANT; ढीला AGREES (ढीला कुर्ता, ढीली कमीज़).
//
// RETROFLEX/DENTAL: no new pair, checked against all 960 readings. दुपट्टा dupattaa,
// अंगूठी anguuthii, सूट suut, मीटर miitar, लीटर liitar, ढीला dhiilaa and चमड़ा
// chamraa have no counterpart in the corpus — no दुपत्ता, अंगूती, मीतर, लीतर, धीला or
// चमरा — so §1(b)'s hatch fires nowhere new. दुपट्टा and चप्पल carry doubled letters
// because of §1's GEMINATION.
// ⚠️ सूत, raw thread with a DENTAL त, WOULD collide with सूट suut under §1(b)'s
// widened trigger (unit36.js). It is not taught and is not used in any sentence, and
// धागा is carded for "thread" instead — so if a later block wants सूत, **सूट is the
// retroflex member and सूत would take the plain form; it is सूट that would have to
// become suutt**. Named here so the decision is not rediscovered.
//
// LOANWORD FREE-PASS CHECK (§9), measured with checkProduce: स्कर्ट skart ≠ "skirt" ·
// सूट suut ≠ "suit" · बटन batan ≠ "button" · मीटर miitar ≠ "metre" · लीटर liitar ≠
// "litre" · दर्जन darjan ≠ "dozen". Zero free passes. इंच was REJECTED for exactly
// this: it reads `inch`, and a learner typing "inch" off the gloss would pass.
export const HI_UNIT40 = {
  id: "hi-u40",
  lang: "hi",
  title: "कपड़े और नाप",
  order: 40,
  stage: "a2",
  lessons: [
    {
      id: "hi-u40l1",
      unit: 40,
      lesson: 1,
      title: "What you put on",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name what you are wearing, Indian and Western, and get the gender agreement right on each one.",
      items: [
        { id: "hi-u40l1-patluun", type: "vocab", front: "पतलून", reading: "patluun", meaning: "trousers", accept: ["a pair of trousers", "pants", "slacks"], example: { jp: "यह पतलून मेरे लिए बहुत लंबी है।", en: "These trousers are too long for me." }, drill: { jp: "यह पतलून बहुत तंग है", en: "These trousers are very tight" }, hint: "PAT-LUUN, ⚠️ FEMININE and SINGULAR — यह पतलून लंबी है, never लंबा and never 'these are'. Hindi treats one pair as one thing. It ends in a consonant, so §4's warning applies: the shape tells you nothing." },
        { id: "hi-u40l1-kurtaa", type: "vocab", front: "कुर्ता", reading: "kurtaa", meaning: "a kurta", accept: ["a long Indian shirt", "a tunic top"], example: { jp: "उसने त्योहार पर नया कुर्ता पहना।", en: "He wore a new kurta for the festival." }, drill: { jp: "मेरा कुर्ता दर्जी के पास है", en: "My kurta is at the tailor's" }, hint: "KUR-TAA, MASCULINE, plural कुर्ते, spelled with र् on the कु — कुरता without it is a variant you will see and this course does not use. कमीज़ (u18) is a Western shirt; a कुर्ता reaches the knee." },
        { id: "hi-u40l1-mozaa", type: "vocab", front: "मोज़ा", reading: "mozaa", meaning: "a sock", accept: ["socks", "a stocking"], example: { jp: "सर्दी में मोज़े पहनना ज़रूरी है।", en: "Wearing socks in winter is essential." }, drill: { jp: "यह मोज़ा बहुत पुराना है", en: "This sock is very old" }, hint: "MO-ZAA, MASCULINE, ज़ from unit 4, plural मोज़े — and मोज़े is what you will actually hear, because socks come in pairs. The card is the singular because §4 needs a bare singular to hang the gender on." },
        { id: "hi-u40l1-chappal", type: "vocab", front: "चप्पल", reading: "chappal", meaning: "a sandal", accept: ["sandals", "flip-flops", "slippers"], example: { jp: "घर के अंदर चप्पल मत पहनो।", en: "Do not wear sandals inside the house." }, drill: { jp: "मेरी चप्पल दरवाज़े के बाहर है", en: "My sandals are outside the door" }, hint: "CHAP-PAL, ⚠️ FEMININE despite the consonant ending — मेरी चप्पल, never मेरा. Doubled प is §1's gemination. जूता (u18) is a closed shoe; चप्पल is what comes off at the door, which in India is every door." },
        { id: "hi-u40l1-dupattaa", type: "vocab", front: "दुपट्टा", reading: "dupattaa", meaning: "a dupatta", accept: ["a long scarf worn with Indian clothes", "a stole"], example: { jp: "उसका दुपट्टा रेशम का है।", en: "Her dupatta is made of silk." }, drill: { jp: "यह दुपट्टा बहुत हल्का है", en: "This dupatta is very light" }, hint: "DU-PAT-TAA, MASCULINE, plural दुपट्टे, with the doubled RETROFLEX ट of §1's gemination. The long scarf worn over a कुर्ता — दो plus पट्टा, 'two panels', which is how it is cut." },
        { id: "hi-u40l1-skart", type: "vocab", front: "स्कर्ट", reading: "skart", meaning: "a skirt", accept: ["a Western skirt"], example: { jp: "उस लड़की की स्कर्ट नीली है।", en: "That girl's skirt is blue." }, drill: { jp: "यह स्कर्ट मेरी बहन की है", en: "This skirt is my sister's" }, hint: "SKART, FEMININE, opening with the स्क conjunct and closing with र् on the ट. Borrowed whole from English, and it took English's gender-free shape and Hindi's feminine agreement." },
      ],
    },
    {
      id: "hi-u40l2",
      unit: 40,
      lesson: 2,
      title: "What is on them, and what you wear with them",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about the details of clothing — buttons, pockets, laces — and the things you put on besides.",
      items: [
        { id: "hi-u40l2-batan", type: "vocab", front: "बटन", reading: "batan", meaning: "a button", accept: ["a fastener", "a switch button"], example: { jp: "इस कमीज़ में चार बटन हैं।", en: "This shirt has four buttons." }, drill: { jp: "यह बटन बहुत छोटा है", en: "This button is very small" }, hint: "BA-TAN, MASCULINE, plural बटन (unchanged), retroflex ट. It covers a shirt button and a button you press on a machine, exactly as English does." },
        { id: "hi-u40l2-jeb", type: "vocab", front: "जेब", reading: "jeb", meaning: "a pocket", accept: ["a pouch in clothing"], example: { jp: "इस पतलून में दो जेबें हैं।", en: "These trousers have two pockets." }, drill: { jp: "उसने पैसे जेब में रखे", en: "He put the money in his pocket" }, hint: "JEB, ⚠️ FEMININE despite the consonant ending, plural जेबें. जेब कतरा is a pickpocket, and जेब ढीली होना — the pocket being loose — means being short of money, which ties it to u37." },
        { id: "hi-u40l2-fiitaa", type: "vocab", front: "फ़ीता", reading: "fiitaa", meaning: "a shoelace", accept: ["a lace", "a ribbon", "a tape"], example: { jp: "इस जूते का फ़ीता बहुत लंबा है।", en: "This shoe's lace is very long." }, drill: { jp: "जूते का फ़ीता बाँधना सीखो", en: "Learn to tie a shoelace" }, hint: "FII-TAA, MASCULINE, plural फ़ीते, with the फ़ of unit 4. Any narrow strip — a shoelace, a hair ribbon, a measuring tape. बाँधना (u26) is what you do with it." },
        { id: "hi-u40l2-chashmaa", type: "vocab", front: "चश्मा", reading: "chashmaa", meaning: "spectacles", accept: ["glasses", "a pair of glasses", "sunglasses"], example: { jp: "पढ़ने के लिए मुझे चश्मा चाहिए।", en: "I need glasses for reading." }, drill: { jp: "उसका चश्मा मेज़ पर है", en: "His glasses are on the table" }, hint: "CHASH-MAA, MASCULINE and SINGULAR — चश्मा है, not 'they are' — with the श्म conjunct of unit 6. One pair is one चश्मा. धूप का चश्मा is sunglasses, using u16's धूप." },
        { id: "hi-u40l2-anguuthii", type: "vocab", front: "अंगूठी", reading: "anguuthii", meaning: "a ring", accept: ["a finger ring", "a band worn on the finger"], example: { jp: "उसने अपनी माँ की अंगूठी पहनी।", en: "She wore her mother's ring." }, drill: { jp: "यह अंगूठी बहुत पुरानी है", en: "This ring is very old" }, hint: "AN-GUU-THII, FEMININE, plural अंगूठियाँ, retroflex ठ. From अंगूठा, the thumb — a ring is 'the little thumb thing'. The ं before ग is nasal." },
        { id: "hi-u40l2-suut", type: "vocab", front: "सूट", reading: "suut", meaning: "a suit", accept: ["a two-piece suit", "a matching set of clothes"], example: { jp: "इंटरव्यू के लिए उसने सूट पहना।", en: "He wore a suit for the interview." }, drill: { jp: "यह सूट उसके नाप का है", en: "This suit is his size" }, hint: "SUUT, MASCULINE, retroflex ट. In India it also means a woman's matching kurta-and-trousers set — सलवार सूट — which is the commoner sense by far. इंटरव्यू is u34's." },
      ],
    },
    {
      id: "hi-u40l3",
      unit: 40,
      lesson: 3,
      title: "Cloth, thread and the tailor",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what something is made of and get clothes made or altered at an Indian tailor's.",
      items: [
        { id: "hi-u40l3-uun", type: "vocab", front: "ऊन", reading: "uun", meaning: "wool", accept: ["woollen yarn", "fleece"], example: { jp: "सर्दी के कपड़े ऊन के होते हैं।", en: "Winter clothes are made of wool." }, drill: { jp: "यह कंबल ऊन का है", en: "This blanket is made of wool" }, hint: "UUN, FEMININE, uncountable, and ⚠️ the long uu is doing real work: उन un is the oblique of वह, 'those', which you have met since unit 1. ऊन uun with the long vowel is the wool. §1's doubling is all that separates them." },
        { id: "hi-u40l3-resham", type: "vocab", front: "रेशम", reading: "resham", meaning: "silk", accept: ["silk cloth", "silk thread"], example: { jp: "उसकी साड़ी रेशम की है।", en: "Her sari is silk." }, drill: { jp: "रेशम का कपड़ा महँगा होता है", en: "Silk cloth is expensive" }, hint: "RE-SHAM, MASCULINE, uncountable. X का/की is how Hindi says 'made of X', and it agrees with the THING, not the material: रेशम की साड़ी (f), रेशम का कुर्ता (m)." },
        { id: "hi-u40l3-chamraa", type: "vocab", front: "चमड़ा", reading: "chamraa", meaning: "leather", accept: ["hide", "animal skin"], example: { jp: "उसके जूते चमड़े के हैं।", en: "His shoes are leather." }, drill: { jp: "चमड़ा बहुत महँगा होता है", en: "Leather is very expensive" }, hint: "CHAM-RAA, MASCULINE, with §1(c)'s ड़ read as r. Note चमड़े के — the material goes into the OBLIQUE before का, which is u23's rule and worth watching here because every sentence in this lesson needs it." },
        { id: "hi-u40l3-dhaagaa", type: "vocab", front: "धागा", reading: "dhaagaa", meaning: "thread", accept: ["a thread", "cotton", "yarn"], example: { jp: "दर्जी ने सुई में धागा डाला।", en: "The tailor put thread in the needle." }, drill: { jp: "यह धागा बहुत पतला है", en: "This thread is very thin" }, hint: "DHAA-GAA, MASCULINE, plural धागे, aspirated DENTAL ध. सुई (u35) is the needle it goes through — the doctor's needle and the tailor's are the same word." },
        { id: "hi-u40l3-darjii", type: "vocab", front: "दर्जी", reading: "darjii", meaning: "a tailor", accept: ["a dressmaker", "someone who sews clothes"], example: { jp: "दर्जी ने मेरा नाप लिया।", en: "The tailor took my measurements." }, drill: { jp: "गाँव का दर्जी बहुत अच्छा है", en: "The village tailor is very good" }, hint: "DAR-JII, ⚠️ MASCULINE despite the -ी, exactly like पानी, हाथी and नाई (u28) — §4's named exceptions. In India most clothes are still made by one, which is why नाप in lesson 4 matters." },
        { id: "hi-u40l3-silaaii", type: "vocab", front: "सिलाई", reading: "silaaii", meaning: "sewing", accept: ["stitching", "the tailoring charge", "needlework"], example: { jp: "इस कुर्ते की सिलाई बहुत अच्छी है।", en: "The stitching on this kurta is very good." }, drill: { jp: "सिलाई का काम मुश्किल है", en: "Sewing work is difficult" }, hint: "SI-LAA-II, FEMININE, uncountable — the noun of सीना, to sew, which Hindi has not carded. It means both the stitching itself and what the दर्जी charges you for it: सिलाई कितनी है?" },
      ],
    },
    {
      id: "hi-u40l4",
      unit: 40,
      lesson: 4,
      title: "Measuring, and whether it fits",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Give a measurement in metres, litres or dozens, and say whether a garment is too tight or too loose.",
      items: [
        { id: "hi-u40l4-naap", type: "vocab", front: "नाप", reading: "naap", meaning: "a measurement", accept: ["a size", "measurements", "the fit"], example: { jp: "दर्जी ने कुर्ते का नाप लिखा।", en: "The tailor wrote down the kurta's measurements." }, drill: { jp: "यह कमीज़ मेरे नाप की नहीं", en: "This shirt is not my size" }, hint: "NAAP, MASCULINE, DENTAL न and प — the noun of नापना (u31l3), to measure. मेरे नाप का is 'my size'. किलो (u18) weighs, जोड़ा (u19) pairs, and नाप is the general measurement word the course had no word for." },
        { id: "hi-u40l4-tang", type: "vocab", front: "तंग", reading: "tang", meaning: "tight", accept: ["cramped", "narrow", "too small a fit"], example: { jp: "यह जूता मेरे पैर में तंग है।", en: "This shoe is tight on my foot." }, drill: { jp: "यह कुर्ता मुझे तंग लगता है", en: "This kurta feels tight on me" }, hint: "TANG, INVARIANT — तंग कमीज़ and तंग कुर्ता both, unlike ढीला below. The ं before ग is nasal. It also means harassed: तंग करना is to pester someone, which you will hear more often than the clothing sense." },
        { id: "hi-u40l4-dhiilaa", type: "vocab", front: "ढीला", reading: "dhiilaa", meaning: "loose", accept: ["slack", "baggy", "not tight"], example: { jp: "यह पतलून थोड़ी ढीली है।", en: "These trousers are a little loose." }, drill: { jp: "यह कुर्ता बहुत ढीला है", en: "This kurta is very loose" }, hint: "DHII-LAA, with the RETROFLEX ढ, and it AGREES: ढीला कुर्ता, ढीली कमीज़ — so the example says ढीली for the FEMININE पतलून and the drill says ढीला for the MASCULINE कुर्ता. तंग is its opposite and does not agree at all." },
        { id: "hi-u40l4-miitar", type: "vocab", front: "मीटर", reading: "miitar", meaning: "a metre", accept: ["one metre of length", "metres"], example: { jp: "दुकानदार ने दो मीटर कपड़ा दिया।", en: "The shopkeeper gave two metres of cloth." }, drill: { jp: "मुझे तीन मीटर कपड़ा चाहिए", en: "I need three metres of cloth" }, hint: "MII-TAR, MASCULINE, retroflex ट, plural मीटर (unchanged) — a measure word does not pluralise after a number, exactly as किलो (u18) does not. Read it against मीठा miithaa, sweet: long ii in both, different letters after it." },
        { id: "hi-u40l4-liitar", type: "vocab", front: "लीटर", reading: "liitar", meaning: "a litre", accept: ["one litre of liquid", "litres"], example: { jp: "रोज़ दो लीटर पानी पीना अच्छा है।", en: "Drinking two litres of water a day is good." }, drill: { jp: "एक लीटर दूध ले आओ", en: "Bring a litre of milk" }, hint: "LII-TAR, MASCULINE, retroflex ट, plural लीटर. The same no-plural-after-a-number rule as मीटर. ले आओ is 'bring' — लेना's stem plus आना's imperative, two verbs the course has had since u12." },
        { id: "hi-u40l4-darjan", type: "vocab", front: "दर्जन", reading: "darjan", meaning: "a dozen", accept: ["twelve of something", "dozens"], example: { jp: "उसने एक दर्जन अंडे खरीदे।", en: "He bought a dozen eggs." }, drill: { jp: "मुझे आधा दर्जन केले चाहिए", en: "I need half a dozen bananas" }, hint: "DAR-JAN, MASCULINE, plural दर्जन, with र् on the द. ⚠️ Not दर्जी, the tailor in lesson 3 — one letter apart and nothing to do with each other. आधा (u11) plus दर्जन is half a dozen, which is how Indian markets count eggs." },
      ],
    },
  ],
};
