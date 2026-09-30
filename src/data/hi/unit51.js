// HI Unit 51 — धर्म और त्योहार ("Faith and festivals") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 3 (u51–u60), THE LAST BLOCK OF THE A2 BAND. Conventions: unit1.js
// §1–§11, then unit31.js §A1–§A8. Both BIND and neither is restated here.
//
// 🚨 RETHEMED SLOT, and every one of block 3's ten is. The scaffold called u51–u60
// "Vocabulary 2 (A2)"–"Vocabulary 11 (A2)" — `src/data/lint.js`'s
// SCAFFOLD_TITLE_PATTERNS hard-errors on /^Vocabulary \d+( \(A2\))?$/, so a title
// in Devanagari is compulsory and the THEME is entirely block 3's to choose. A
// coverage slot names no subject, so each of the ten was chosen against a MEASURED
// hole in the 960-card corpus rather than invented. unit60.js §B1 lists all ten
// with their numbers; this unit's is below.
//
// MEASURED HOLE THIS SLOT FILLS: **religion was 2 of 20**. The whole corpus had
// मंदिर (u5l1) and मस्जिद (u14l1) — two buildings — and nothing else: no word for
// religion, God, worship, prayer, a priest, a fast, a festival practice or the
// word "holy". u17l4 owns त्योहार, छुट्टी and जन्मदिन (the CALENDAR of festivals)
// and u38l3 owns रिवाज़, परंपरा and किस्सा (custom AS the past), so this unit takes
// what neither has: the faith itself and what people DO at a festival.
//
// ⚠️ THREE FRONTS WERE WANTED AND REFUSED, each for a named reason:
//   • त्योहार — TAKEN at u17l4. The lower slot wins, so it is used in sentences here.
//   • रिवाज — 🚨 **THE बर्तन/बिलकुल TRAP, AND IT FIRED.** `check-front.mjs` reports
//     रिवाज FREE, because the corpus spells it रिवाज़ WITH THE NUKTA (u38l3). Two
//     strings, ONE WORD, and the readings differ (rivaaj vs rivaaz) so the
//     distinct-readings check stays green too. Only reading the gloss caught it:
//     both are "a custom". DROPPED.
//   • आतिशबाज़ी — kept out beside पटाखा, which is the word a child says. One
//     festival needs one word for a firework, not two.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: पूजा, प्रार्थना, मूर्ति, मेहँदी, दावत. मूर्ति and दावत end in a
//   CONSONANT or -ि, so nothing in the shape tells you — मूर्ति पुरानी है, not पुराना.
//   MASCULINE: धर्म, भगवान, व्रत, रोज़ा, भजन, प्रसाद, तिलक, गिरजाघर, गुरुद्वारा,
//   पंडित, साधु, मेला, जुलूस, पटाखा, दीया. गुरुद्वारा and पटाखा look -ा and are;
//   साधु is MASCULINE despite the -ु.
//   नमाज़ is FEMININE — नमाज़ पढ़ना is the verb it takes, never बोलना.
//   शुभ is INVARIANT (शुभ दिन, शुभ घड़ी).
//
// ⚠️ TWO NEAR-PAIRS THAT EARN THEIR HINTS:
//   • दीया diiyaa (an oil lamp) against दिया diyaa, the perfective of देना, which
//     unit31.js §A6 put in IRREGULAR. One mātrā apart, and §1's length-by-doubling
//     is the only thing keeping the readings apart.
//   • मनाना manaanaa (to celebrate) against मानना maannaa (to accept, u26l1).
//     Same four letters rearranged; the readings differ only in WHERE the doubling
//     falls, which is exactly what §1 exists to carry.
// RETROFLEX/DENTAL (§1b): no new pair. तिलक tilak, पटाखा pataakhaa, पंडित pandit
// and दावत daavat have no dental/retroflex counterpart in the corpus (no तिलक with
// ट, no पण्डित spelled पंदित), so the doubling hatch fires nowhere here.
// LOANWORD FREE-PASS CHECK (§9), measured with checkProduce: no front in this unit
// glosses to its own transliteration. नमाज़ namaaz is glossed "Muslim prayer" and
// accepts "salah", never "namaz"; मेहँदी mehandii accepts "mehndi", which is a
// DIFFERENT string from the reading and was checked — checkProduce("mehndi") is false.
export const HI_UNIT51 = {
  id: "hi-u51",
  lang: "hi",
  title: "धर्म और त्योहार",
  order: 51,
  stage: "a2",
  lessons: [
    {
      id: "hi-u51l1",
      unit: 51,
      lesson: 1,
      title: "Faith, and the words for it",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name a religion, talk about God and worship, and say that a place or a day is holy.",
      items: [
        { id: "hi-u51l1-dharm", type: "vocab", front: "धर्म", reading: "dharm", meaning: "a religion", accept: ["faith", "a creed"], example: { jp: "इस देश में हर धर्म के लोग साथ रहते हैं।", en: "People of every religion live together in this country." }, drill: { jp: "हर धर्म के अपने नियम हैं", en: "Every religion has its own rules" }, hint: "DHARM, masculine, with a DENTAL ध — tongue on the teeth, then a puff of air. र्म is र riding above म as the little hook on the line. It means a religion, and also the duty that religion asks of you." },
        { id: "hi-u51l1-bhagvaan", type: "vocab", front: "भगवान", reading: "bhagvaan", meaning: "God", accept: ["a deity", "the Lord"], example: { jp: "मेरी दादी हर सुबह भगवान को याद करती हैं।", en: "My grandmother remembers God every morning." }, drill: { jp: "भगवान सब कुछ देखता है", en: "God sees everything" }, hint: "BHAG-VAAN, masculine. The middle a is swallowed: bhag-vaan, not bha-ga-vaan. Said of any god, and used the way English says 'oh God' — भगवान! on its own is a whole sentence." },
        { id: "hi-u51l1-puujaa", type: "vocab", front: "पूजा", reading: "puujaa", meaning: "worship", accept: ["an act of worship", "devotions"], example: { jp: "वे रोज़ शाम को घर में पूजा करते हैं।", en: "They perform worship at home every evening." }, drill: { jp: "शाम की पूजा अभी शुरू हुई", en: "The evening worship has just begun" }, hint: "PUU-JAA — ⚠️ FEMININE, and it looks it. The whole act, not a prayer: पूजा करना is what you do, with a lamp, flowers and water. Long uu, so hold it: puu, not pu." },
        { id: "hi-u51l1-praarthnaa", type: "vocab", front: "प्रार्थना", reading: "praarthnaa", meaning: "a prayer", accept: ["praying", "a plea to God"], example: { jp: "बीमारी के दौरान हमने उसके लिए प्रार्थना की।", en: "During the illness we said a prayer for him." }, drill: { jp: "बच्चों ने स्कूल में प्रार्थना की", en: "The children said a prayer at school" }, hint: "PRAARTH-NAA — ⚠️ FEMININE, and the ending is -ना like an infinitive but this is a NOUN: प्रार्थना करना, to pray. Two conjuncts in five letters — प्र at the front, र्थ in the middle." },
        { id: "hi-u51l1-pavitra", type: "vocab", front: "पवित्र", reading: "pavitra", meaning: "holy", accept: ["sacred", "hallowed"], example: { jp: "इस नदी का पानी लोग पवित्र मानते हैं।", en: "People consider this river's water holy." }, drill: { jp: "यह जगह हमारे लिए पवित्र है", en: "This place is holy for us" }, hint: "PA-VI-TRA, INVARIANT — पवित्र नदी, पवित्र दिन, no -ी form. The त्र conjunct is त and र stacked, one of u6's three. The final a IS pronounced, like समुद्र." },
        { id: "hi-u51l1-muurti", type: "vocab", front: "मूर्ति", reading: "muurti", meaning: "an idol", accept: ["a carved image", "a statue of a god"], example: { jp: "मंदिर के अंदर पत्थर की एक पुरानी मूर्ति है।", en: "Inside the temple there is an old stone idol." }, drill: { jp: "यह मूर्ति बहुत पुरानी है", en: "This idol is very old" }, hint: "MUUR-TI — ⚠️ FEMININE, and the -ि ending tells you nothing, so learn it: यह मूर्ति पुरानी है. र्ति is र above त. The image a god is worshipped through, in stone, metal or clay." },
      ],
    },
    {
      id: "hi-u51l2",
      unit: 51,
      lesson: 2,
      title: "Fasting, prayer and what is offered",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say that someone is fasting or praying, and name what is offered and worn at a religious occasion.",
      items: [
        { id: "hi-u51l2-vrat", type: "vocab", front: "व्रत", reading: "vrat", meaning: "a religious fast", accept: ["a vow to fast", "fasting for religion"], example: { jp: "मेरी माँ सोमवार को व्रत रखती हैं और उस दिन कुछ नहीं खाती।", en: "My mother keeps a fast on Monday and eats nothing." }, drill: { jp: "वह हर सोमवार व्रत रखती है", en: "She keeps a fast every Monday" }, hint: "VRAT, masculine, with the व्र conjunct — व and र stacked, so one syllable and not va-rat. The verb is रखना, to keep: व्रत रखना. A fast taken as a promise, not because there is no food." },
        { id: "hi-u51l2-rozaa", type: "vocab", front: "रोज़ा", reading: "rozaa", meaning: "the Ramadan fast", accept: ["a Muslim daytime fast"], example: { jp: "इस महीने में लोग पूरे दिन रोज़ा रखते हैं और शाम को खाते हैं।", en: "In this month people keep the fast all day and eat in the evening." }, drill: { jp: "मेरे दोस्त ने आज रोज़ा रखा", en: "My friend kept the fast today" }, hint: "RO-ZAA, masculine, with ज़ — a z. ⚠️ Read it against रोज़ roz, every day (unit 12): the ा is the whole difference, and §1's doubling is what keeps roz and rozaa apart. Same verb as व्रत: रोज़ा रखना." },
        { id: "hi-u51l2-namaaz", type: "vocab", front: "नमाज़", reading: "namaaz", meaning: "Muslim prayer", accept: ["the five daily prayers", "salah"], example: { jp: "वे मस्जिद जाकर शाम की नमाज़ पढ़ते हैं।", en: "They go to the mosque and say the evening prayer." }, drill: { jp: "वह दिन में पाँच बार नमाज़ पढ़ता है", en: "He says the prayer five times a day" }, hint: "NA-MAAZ — ⚠️ FEMININE, consonant-final, so nothing in the shape says so: नमाज़ पूरी हुई. And the verb is पढ़ना, to read — नमाज़ पढ़ना — never बोलना or करना." },
        { id: "hi-u51l2-bhajan", type: "vocab", front: "भजन", reading: "bhajan", meaning: "a devotional song", accept: ["a hymn", "a temple song"], example: { jp: "शाम को मंदिर में सब मिलकर भजन गाते हैं।", en: "In the evening everyone sings devotional songs together at the temple." }, drill: { jp: "दादी रोज़ एक भजन गाती हैं", en: "Grandmother sings one devotional song every day" }, hint: "BHA-JAN, masculine. From the same root as भगवान. It is SUNG, so the verb is गाना — भजन गाना. A whole evening of them is a भजन-संध्या." },
        { id: "hi-u51l2-prasaad", type: "vocab", front: "प्रसाद", reading: "prasaad", meaning: "blessed food", accept: ["food offered to a god", "temple food"], example: { jp: "पूजा के बाद पंडित ने सब बच्चों को प्रसाद दिया।", en: "After the worship the priest gave all the children blessed food." }, drill: { jp: "उसने मुझे थोड़ा प्रसाद दिया", en: "He gave me a little blessed food" }, hint: "PRA-SAAD, masculine, with the प्र conjunct. Food offered to a god and then handed back to everyone present — so it is always SHARED, and refusing it is rude. Usually something sweet." },
        { id: "hi-u51l2-tilak", type: "vocab", front: "तिलक", reading: "tilak", meaning: "a forehead mark", accept: ["a mark of blessing"], example: { jp: "जाने से पहले माँ ने मुझे तिलक लगाया और भगवान को याद किया।", en: "Before I left, mother put the mark on me and remembered God." }, drill: { jp: "पंडित ने सब बच्चों को तिलक लगाया", en: "The priest put the mark on all the children" }, hint: "TI-LAK, masculine, with a DENTAL त — tongue on the teeth. The verb is लगाना, to apply (unit 35). Put on before a journey, an exam or a wedding, for luck as much as for religion." },
      ],
    },
    {
      id: "hi-u51l3",
      unit: 51,
      lesson: 3,
      title: "Where people worship, and who leads it",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name three more places of worship, say who leads the worship there, and call a day or an occasion auspicious.",
      items: [
        { id: "hi-u51l3-girjaaghar", type: "vocab", front: "गिरजाघर", reading: "girjaaghar", meaning: "a church", accept: ["a Christian place of worship"], example: { jp: "हमारे शहर में एक पुराना गिरजाघर है।", en: "There is an old church in our city." }, drill: { jp: "यह गिरजाघर सौ साल पुराना है", en: "This church is a hundred years old" }, hint: "GIR-JAA-GHAR, masculine — and you already know the second half: घर, a house. Literally the house of the गिरजा. Four syllables, and the middle aa is long." },
        { id: "hi-u51l3-gurudvaaraa", type: "vocab", front: "गुरुद्वारा", reading: "gurudvaaraa", meaning: "a Sikh place of worship", accept: ["a gurdwara"], example: { jp: "गुरुद्वारा में सब लोग एक साथ बैठकर खाना खाते हैं।", en: "At the gurdwara everyone sits together and eats." }, drill: { jp: "गुरुद्वारा हमारे घर के पास है", en: "The gurdwara is near our house" }, hint: "GU-RU-DVAA-RAA, masculine and regular -ा. द्वा is द and व stacked plus the ा. Literally the guru's door. Its kitchen feeds anyone who walks in, which is the thing to know about it." },
        { id: "hi-u51l3-pandit", type: "vocab", front: "पंडित", reading: "pandit", meaning: "a Hindu priest", accept: ["a learned brahmin"], example: { jp: "शादी के दिन पंडित ने मंदिर में पूरी पूजा की।", en: "On the wedding day the priest performed the whole worship at the temple." }, drill: { jp: "पंडित ने पूजा शुरू की", en: "The priest began the worship" }, hint: "PAN-DIT, masculine, RETROFLEX ड — tongue curled back. The ं before ड is the matching retroflex nasal. It also means a scholar of anything, which is where the English word pundit comes from." },
        { id: "hi-u51l3-saadhu", type: "vocab", front: "साधु", reading: "saadhu", meaning: "a wandering holy man", accept: ["an ascetic", "a renouncer"], example: { jp: "पहाड़ के रास्ते पर हमें एक साधु मिला।", en: "On the mountain road we met a holy man." }, drill: { jp: "एक साधु पेड़ के नीचे बैठा था", en: "A holy man was sitting under a tree" }, hint: "SAA-DHU — ⚠️ MASCULINE despite the -ु, and with a DENTAL ध. A man who has given up house, money and family; he owns what he carries. Never used of a priest with a temple — that is a पंडित." },
        { id: "hi-u51l3-shubh", type: "vocab", front: "शुभ", reading: "shubh", meaning: "auspicious", accept: ["favourable", "blessed"], example: { jp: "पंडित ने कहा कि यह दिन शादी के लिए शुभ है।", en: "The priest said this day is auspicious for a wedding." }, drill: { jp: "आज का दिन बहुत शुभ है", en: "Today is a very auspicious day" }, hint: "SHUBH, INVARIANT — शुभ दिन, शुभ घड़ी, no -ी form. You have already met it inside शुभ रात्रि, good night (unit 7). It marks a time as the RIGHT one to begin something, which is why nothing in India starts without it." },
        { id: "hi-u51l3-mehandii", type: "vocab", front: "मेहँदी", reading: "mehandii", meaning: "henna", accept: ["henna patterns", "mehndi"], example: { jp: "शादी से पहले सब लड़कियों ने हाथों पर मेहँदी लगाई।", en: "Before the wedding all the girls put henna on their hands." }, drill: { jp: "उसके हाथ पर मेहँदी बहुत सुंदर है", en: "The henna on her hand is very beautiful" }, hint: "ME-HAN-DII — ⚠️ FEMININE. The ँ is the moon-and-dot of unit 5: it nasalises but does not add a letter, so it reads han, not hand. A dark red paste painted on hands and feet for a wedding; the verb is लगाना." },
      ],
    },
    {
      id: "hi-u51l4",
      unit: 51,
      lesson: 4,
      title: "The festival itself",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say how a festival is celebrated — the fair, the procession, the lamps and the fireworks — and invite people to a feast.",
      items: [
        { id: "hi-u51l4-melaa", type: "vocab", front: "मेला", reading: "melaa", meaning: "a fair", accept: ["a village fair", "a funfair"], example: { jp: "त्योहार के दिन गाँव के मैदान में बड़ा मेला लगता है।", en: "On the festival day a big fair is held in the village field." }, drill: { jp: "गाँव में हर साल मेला लगता है", en: "A fair is held in the village every year" }, hint: "ME-LAA, masculine and regular. The verb is लगना, to be set up — मेला लगता है, never होता है. Stalls, a wheel, sweets and far too many people: the crowd IS the मेला." },
        { id: "hi-u51l4-juluus", type: "vocab", front: "जुलूस", reading: "juluus", meaning: "a procession", accept: ["a parade", "a march through streets"], example: { jp: "जुलूस पूरे बाज़ार से निकला और शाम तक चला।", en: "The procession came out through the whole market and went on until evening." }, drill: { jp: "जुलूस इस गली से निकला", en: "The procession came out through this lane" }, hint: "JU-LUUS, masculine, long uu. The verb is निकलना, to come out (unit 12) — जुलूस निकलता है. Used for a religious procession and for a political march alike; both block the road." },
        { id: "hi-u51l4-pataakhaa", type: "vocab", front: "पटाखा", reading: "pataakhaa", meaning: "a firecracker", accept: ["a banger", "fireworks"], example: { jp: "बच्चों ने रात को छत पर पटाखा जलाया।", en: "The children lit a firecracker on the roof at night." }, drill: { jp: "बच्चों ने एक पटाखा जलाया", en: "The children lit a firecracker" }, hint: "PA-TAA-KHAA, masculine, with a RETROFLEX ट — tongue curled back, closer to the English t than त is. The verb is जलाना, to light (unit 31). The noise is the point; the light is a bonus." },
        { id: "hi-u51l4-diiyaa", type: "vocab", front: "दीया", reading: "diiyaa", meaning: "an oil lamp", accept: ["a clay lamp", "a wick lamp"], example: { jp: "माँ ने दरवाज़े के पास एक छोटा दीया रखा।", en: "Mother put a small lamp by the door." }, drill: { jp: "उसने खिड़की पर एक दीया रखा", en: "She put a lamp on the windowsill" }, hint: "DII-YAA, masculine. ⚠️ Read it against दिया diyaa, gave — the perfective of देना. One mātrā apart, and only the long ii keeps the two readings from being one card. A small clay saucer with oil and a cotton wick." },
        { id: "hi-u51l4-manaanaa", type: "vocab", front: "मनाना", reading: "manaanaa", meaning: "to celebrate", accept: ["celebrate", "to mark an occasion"], example: { jp: "उन्होंने अपने बेटे का जन्मदिन घर पर ही मनाया।", en: "They celebrated their son's birthday at home." }, drill: { jp: "त्योहार साथ मनाना अच्छा लगता है", en: "Celebrating a festival together feels good" }, hint: "MA-NAA-NAA. ⚠️ Read it against मानना maannaa, to accept (unit 26): the same four letters, and only WHERE the doubling falls tells them apart. Its stem ends in a vowel, so the past is मनाया, मनाई, मनाए. It also means to talk someone round when they are sulking." },
        { id: "hi-u51l4-daavat", type: "vocab", front: "दावत", reading: "daavat", meaning: "a feast", accept: ["a banquet", "a big meal for guests"], example: { jp: "उन्होंने पूरे परिवार को शादी की दावत पर बुलाया।", en: "They invited the whole family to the wedding feast." }, drill: { jp: "कल रात हमारे घर दावत थी", en: "There was a feast at our house last night" }, hint: "DAA-VAT — ⚠️ FEMININE, consonant-final, so the shape tells you nothing: दावत अच्छी थी. A meal you are invited to, not one you buy. दावत देना is to throw one; दावत पर बुलाना is to invite someone." },
      ],
    },
  ],
};
