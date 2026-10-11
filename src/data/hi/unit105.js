// HI Unit 105 — इतिहास और सभ्यता ("History and civilisation") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 1 (u98–u110). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, unit98.js §C1–§C9.
//
// 🚨 SLOT NARROWED. The scaffold title is "History and culture", and CULTURE is
// spent three times over — u51 धर्म और त्योहार, u58 संगीत और कला, u91 साहित्य और
// समीक्षा — while the local past is u50 इलाका और इतिहास's (इतिहास, खंडहर, दरबार,
// पंचायत, ज़िला, बस्ती) and the recent past is u73 याद की परतें's (प्राचीन, गाथा,
// विरासत). u89 युद्ध और शांति owns संधि, विद्रोह, विजय, क्रांति, हथियार, कैदी.
// WHAT u105 OWNS: **THE DEEP PAST AS A SUBJECT OF STUDY** — how it is dug up and
// read, how an age is named, how a line of rulers passes power, and what happens
// when one land takes another. Measured **1 of 24** (विरासत, u59, dropped).
//
// ⚠️ FIVE CANDIDATES REFUSED:
//   • **संधि, विद्रोह and विजय are u89's**, all three probed TAKEN. पराजय, defeat,
//     came back FREE and was still left out — u89 owns the war field and one
//     half of a pair does not belong in another unit.
//   • **प्राचीन (u73l1) and गाथा (u73l2) are TAKEN**, which is why पुरातन and
//     इतिवृत्त were drafted; पुरातन ships, इतिवृत्त was dropped as bookish.
//   • **राजगद्दी dropped** — सिंहासन is the same seat and the better-known word.
//   • Also drafted and left FREE for a later block: पराजय, राजगद्दी, इतिवृत्त,
//     पुरावशेष, स्मृतिशेष, युगांतर.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4):
//   ⚠️ FEMININE: सभ्यता · वंशावली · स्वतंत्रता.
//   ⚠️ **सभ्यता AND स्वतंत्रता ARE -ता ABSTRACTS, SO FEMININE** (unit 61 §B6), and
//   both end in -आ, which reads masculine everywhere else. ⚠️ AND THE CONTRAST
//   WITH u103's उपभोक्ता IS THE ONE TO HOLD: a -ता ABSTRACT is feminine, a -ता
//   AGENT is masculine, and the ending is identical.
//   MASCULINE: पुरातत्व · उत्खनन · शिलालेख · पुरालेख · अभिलेखागार · युग ·
//   कालक्रम · कालखंड · कालांतर · राजवंश · साम्राज्य · सिंहासन · सामंत ·
//   उत्तराधिकार · आक्रमण · उपनिवेश · साम्राज्यवाद · विभाजन · ध्वंस.
//   ⚠️ **साम्राज्य IS MASCULINE DESPITE ENDING IN -य**, and so is औचित्य (u107).
//   INVARIANT ADJECTIVES: मध्यकालीन · पुरातन.
//   NO VERB IS CARDED. Still ZERO 3rd-person exceptions in the whole language.
//
// ⚠️ SUBSTRING TRAPS, computed with `findWholeWord`'s real boundary test:
//   FIRES, and the first two are also near-lexemes worth a hint:
//     • **अभिलेख (u93l1) inside अभिलेखागार** — the ा after it is a mātrā. The
//       derivative rule (unit61.js §B4) permits it: अभिलेख carries one card, and
//       an अभिलेखागार is the BUILDING, not the record.
//     • **वंश (u78l3) inside वंशावली** — the ा after it is a mātrā. Same
//       permission: वंश is the line, वंशावली is the written chart of it. ✅ And
//       वंश inside राजवंश is BLOCKED by the ज.
//     • **तत्व (u68l4) inside पुरातत्व** — a genuine accident: पुरा + तत्व is
//       literally "the elements of the old", and the ा before तत्व is a mātrā.
//     • **लेख (u42l4) inside BOTH शिलालेख AND पुरालेख** — mātrā before each.
//       ✅ Blocked inside कूटलेखन (u104) by the ट.
//     • **एक (u2l1) inside उपनिवेश**? No — checked, and there is no एक in it.
//       What does fire is **काल** nowhere, because काल is not a front at all.
//   ✅ BLOCKED — साम्राज्य inside साम्राज्यवाद, by the व; मध्य is not a front;
//     आदेश (u61) is not inside अध्यादेश, which belongs to u110 anyway.
export const HI_UNIT105 = {
  id: "hi-u105",
  lang: "hi",
  title: "इतिहास और सभ्यता",
  order: 105,
  stage: "b2",
  lessons: [
    {
      id: "hi-u105l1",
      unit: 105,
      lesson: 1,
      title: "Reading the deep past",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about how the past is found and read: the study itself, a dig, writing cut in stone, an old record, the building that keeps records, and a civilisation taken whole.",
      items: [
        { id: "hi-u105l1-puraatatva", type: "vocab", front: "पुरातत्व", reading: "puraatatva", meaning: "the study of the past through what it left behind", accept: ["the digging-up study of old things", "archaeology", "the study of the past through its remains"], example: { jp: "पुरातत्व में सबूत ज़मीन के नीचे से आता है, किसी किताब से नहीं।", en: "In the study of the ancient past the proof comes from under the ground, not from any book." }, drill: { jp: "पुरातत्व में सबूत ज़मीन के नीचे होता है", en: "In archaeology the proof is under the ground" }, hint: "PU-RAA-TAT-VA, masculine. पुरा is 'of old' and तत्व is an element (unit 68) — literally the elements of the old. 🚨 SUBSTRING NOTE: तत्व whole-word-FIRES inside it, because the ा before it is a mātrā, and here the match is not even an accident — the word really is built on it. ⚠️ Not इतिहास, history (unit 50): इतिहास is written down, पुरातत्व is what you dig up when nothing was written." },
        { id: "hi-u105l1-utkhanan", type: "vocab", front: "उत्खनन", reading: "utkhanan", meaning: "a dig to uncover what is buried", accept: ["an organised excavation", "a dig at an old site", "the uncovering of what is buried"], example: { jp: "उत्खनन में एक पुराना शहर निकला, और उसके नीचे एक और शहर था।", en: "An older city came out in the dig, and under it there was one more city." }, drill: { jp: "उत्खनन पिछले साल शुरू हुआ", en: "The dig began last year" }, hint: "UT-KHA-NAN, masculine. Plain ख, because unit 1 §7 keeps ख़ uncarded. From खनना, to dig. ⚠️ Not खुदाई: that word is not carded in Hindi, so उत्खनन carries both the everyday and the technical job. The second clause is what an उत्खनन actually produces — layers, not objects." },
        { id: "hi-u105l1-shilaalekh", type: "vocab", front: "शिलालेख", reading: "shilaalekh", meaning: "writing cut into stone", accept: ["an inscription on rock", "words cut into stone", "an old record carved in stone"], example: { jp: "उस शिलालेख से राजा का नाम और साल दोनों मिले, और तब कालक्रम तय हुआ।", en: "Both the king's name and the year were got from that inscription, and then the order of events was settled." }, drill: { jp: "उस शिलालेख से राजा का नाम मिला", en: "The king's name was got from that inscription" }, hint: "SHI-LAA-LEKH, masculine. शिला is a rock and लेख is writing (unit 42). 🚨 SUBSTRING NOTE: लेख whole-word-FIRES inside it, because the ा before it is a mātrā — and it fires inside पुरालेख below for the same reason. ⚠️ A शिलालेख is the single most reliable kind of प्रमाण (unit 99) the deep past leaves, because stone cannot be rewritten." },
        { id: "hi-u105l1-puraalekh", type: "vocab", front: "पुरालेख", reading: "puraalekh", meaning: "an old written record", accept: ["a document surviving from the past", "an old paper record", "a manuscript left from an earlier time"], example: { jp: "पुरालेख पढ़ने के लिए पुराने अक्षर सीखने पड़ते हैं, और वह काम आसान नहीं।", en: "To read an old record one has to learn the old letters, and that work is not easy." }, drill: { jp: "पुरालेख पढ़ने के लिए पुराने अक्षर चाहिए", en: "Reading an old record needs the old letters" }, hint: "PU-RAA-LEKH, masculine. Same पुरा half as पुरातत्व above and the same लेख half as शिलालेख, so the word is readable the moment both pieces are known — which is the point of putting the three together. 🚨 लेख (unit 42) FIRES inside it. ⚠️ लिपि, a script, is u113's and is NOT carded yet, so this example says अक्षर (unit 6) instead." },
        { id: "hi-u105l1-abhilekhaagaar", type: "vocab", front: "अभिलेखागार", reading: "abhilekhaagaar", meaning: "a building where records are kept", accept: ["a public archive", "a record office", "where old documents are stored"], example: { jp: "सरकार के अभिलेखागार में सौ साल के कागज़ रखे हैं, पर उन्हें कोई नहीं पढ़ता।", en: "A hundred years of papers are kept in the government archive, but nobody reads them." }, drill: { jp: "अभिलेखागार में सौ साल के कागज़ रखे हैं", en: "A hundred years of papers are kept in the archive" }, hint: "A-BHI-LE-KHAA-GAAR, masculine, the longest word in the unit. अभिलेख is a record (unit 93) plus आगार, a store. 🚨 SUBSTRING NOTE: अभिलेख whole-word-FIRES inside it, because the ा after it is a mātrā, and so does लेख. ⚠️ The derivative rule (unit 61 §B4) allows both cards: अभिलेख is the PAPER, अभिलेखागार is the BUILDING, which is a different thing and not a second form of one word." },
        { id: "hi-u105l1-sabhyataa", type: "vocab", front: "सभ्यता", reading: "sabhyataa", meaning: "a civilisation taken as a whole", accept: ["a whole settled way of life", "a civilisation", "a people with its own order of living"], example: { jp: "वह सभ्यता नदी के किनारे बसी थी, और नदी के बदलने पर उसका ध्वंस हो गया।", en: "That civilisation settled on the bank of a river, and was destroyed when the river changed." }, drill: { jp: "वह सभ्यता बहुत पुरानी थी", en: "That civilisation was very old" }, hint: "SABH-YA-TAA — ⚠️ FEMININE, a -ता abstract (unit 61 §B6), and it ends in -आ which reads masculine everywhere else: सभ्यता बसी, never बसा. ⚠️ Not समाज, society (unit 42): a समाज is the people living now, a सभ्यता is the whole thing — its cities, its writing, its gods — taken as one object a historian can name." },
      ],
    },
    {
      id: "hi-u105l2",
      unit: 105,
      lesson: 2,
      title: "Naming an age",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Divide the past up: an age with a character, the order of events, a stretch treated as one, the passing of a long while, and the two adjectives for middle-aged and far-off time.",
      items: [
        { id: "hi-u105l2-yug", type: "vocab", front: "युग", reading: "yug", meaning: "an age with a character of its own", accept: ["an era people give a name to", "an age of history", "a long stretch with its own stamp"], example: { jp: "वह लोहे का युग था, और उससे पहले लोग सिर्फ़ पत्थर से काम चलाते थे।", en: "That was the iron age, and before it people managed with stone alone." }, drill: { jp: "यह नया युग है", en: "This is a new age" }, hint: "YUG, masculine, one syllable. ⚠️ Not समय, time (unit 11), and not दौर, a phase (unit 61): a दौर is a passing period inside a life or a government, a युग is long enough that the way people live changes. The word is also used loosely — कंप्यूटर का युग — and that use is fine." },
        { id: "hi-u105l2-kaalkram", type: "vocab", front: "कालक्रम", reading: "kaalkram", meaning: "the order of events in time", accept: ["the sequence in which things happened", "the order of dates", "a timeline of events"], example: { jp: "शिलालेख मिलने से पहले कालक्रम साफ़ नहीं था, और हर किताब अलग साल देती थी।", en: "Before the inscription was found the order of events was not clear, and every book gave a different year." }, drill: { jp: "शिलालेख से कालक्रम साफ़ हुआ", en: "The order of events became clear from the inscription" }, hint: "KAAL-KRAM, masculine. काल is time and क्रम a sequence — and **काल is not a front anywhere in Hindi**, which is why this unit cards three compounds on it rather than the bare word. The क्र is क with र stacked (unit 6). ⚠️ Not इतिहास (unit 50): इतिहास is the story, कालक्रम is only the running order the story has to obey." },
        { id: "hi-u105l2-kaalkhand", type: "vocab", front: "कालखंड", reading: "kaalkhand", meaning: "a stretch of time treated as one", accept: ["a period cut out for study", "a block of time", "a defined stretch of years"], example: { jp: "यह शोध एक ही कालखंड पर है, पचास साल पर, और उससे आगे कुछ नहीं कहता।", en: "This research is on one single period, on fifty years, and says nothing beyond it." }, drill: { jp: "इस कालखंड पर कम लिखा गया", en: "Little has been written on this period" }, hint: "KAAL-KHAND, masculine. खंड is a section, and the ड is retroflex (unit 1 §1b). ⚠️ Not युग above, and the difference is who decides: a युग has a character people recognised, a कालखंड is a slice a researcher has CHOSEN — which is why the example says the research says nothing beyond it." },
        { id: "hi-u105l2-kaalaantar", type: "vocab", front: "कालांतर", reading: "kaalaantar", meaning: "the passing of a long while", accept: ["the course of a long time", "the passing of years", "over a long stretch of time"], example: { jp: "कालांतर में वह भाषा बदल गई, और पुरालेख पढ़ना मुश्किल हो गया।", en: "Over the course of a long time that language changed, and reading the old records became difficult." }, drill: { jp: "कालांतर में सब बदल जाता है", en: "Over a long time everything changes" }, hint: "KAA-LAAN-TAR, masculine, and it almost always appears in the frame कालांतर में, 'in the course of time'. काल plus अंतर, a gap (unit 63's neighbour) — the ा and the अं fuse into ां. ⚠️ Not बाद में, afterwards: बाद में is a point, कालांतर में is a slow change nobody watched happen, which is the example." },
        { id: "hi-u105l2-madhyakaaliin", type: "vocab", front: "मध्यकालीन", reading: "madhyakaaliin", meaning: "belonging to the middle ages", accept: ["of the medieval period", "from the middle ages", "belonging to the centuries between"], example: { jp: "यह इमारत मध्यकालीन है, इसलिए उसकी दीवारें इतनी मोटी हैं।", en: "This building is medieval, which is why its walls are so thick." }, drill: { jp: "मध्यकालीन किले अब खाली हैं", en: "The medieval forts are empty now" }, hint: "MADH-YA-KAA-LIIN, INVARIANT: मध्यकालीन इमारत, मध्यकालीन शहर. मध्य is 'middle' plus काल plus -ईन, 'belonging to'. ⚠️ **मध्य is not a front in Hindi either**, so this is the third compound in the lesson whose parts are both uncarded — which is exactly why the hints spell them out." },
        { id: "hi-u105l2-puraatan", type: "vocab", front: "पुरातन", reading: "puraatan", meaning: "of the far-off past", accept: ["ancient in the written register", "from very long ago", "of remote antiquity"], example: { jp: "पुरातन किताबें अब अभिलेखागार में हैं, और उन्हें कोई छू नहीं सकता।", en: "Ancient books are in the archive now, and nobody can touch them." }, drill: { jp: "पुरातन मंदिर वहाँ अब भी है", en: "The ancient temple is still there" }, hint: "PU-RAA-TAN, INVARIANT: पुरातन किताब, पुरातन शहर. Same पुरा half as पुरातत्व and पुरालेख (lesson 1). ⚠️ प्राचीन, ancient, IS TAKEN at unit 73, and the two are not quite the same: प्राचीन is the neutral word a textbook uses, पुरातन leans reverent and belongs with पुरातत्व. That is a register difference, taught in the frame — unit 98 §C2." },
      ],
    },
    {
      id: "hi-u105l3",
      unit: 105,
      lesson: 3,
      title: "Rulers and succession",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe who ruled and how power passed: a ruling line, an empire, the seat itself, a lord holding land under a king, the right to follow, and a traced line of descent.",
      items: [
        { id: "hi-u105l3-raajvansh", type: "vocab", front: "राजवंश", reading: "raajvansh", meaning: "a ruling line of kings", accept: ["a dynasty on a throne", "a line of kings", "a royal house"], example: { jp: "वह राजवंश तीन सौ साल चला, और उसके बाद कोई उत्तराधिकार साफ़ नहीं रहा।", en: "That dynasty ran three hundred years, and after it no succession stayed clear." }, drill: { jp: "राजवंश का अंत हो गया", en: "The dynasty came to an end" }, hint: "RAAJ-VANSH, masculine. राज is rule and वंश is a line (unit 78). ✅ SUBSTRING CHECKED: वंश CANNOT fire inside it, because the ज before it is a \\p{L} letter — but it DOES fire inside वंशावली later in this lesson, which is the fires / does-not-fire split again, inside one lesson." },
        { id: "hi-u105l3-saamraajya", type: "vocab", front: "साम्राज्य", reading: "saamraajya", meaning: "an empire ruling many lands", accept: ["a state holding many peoples", "an empire", "a realm of many lands under one ruler"], example: { jp: "वह साम्राज्य इतना बड़ा था कि एक शहर से दूसरे शहर तक खबर महीनों में पहुँचती थी।", en: "That empire was so large that news reached from one city to another in months." }, drill: { jp: "वह साम्राज्य बहुत बड़ा था", en: "That empire was very large" }, hint: "SAAM-RAAJ-YA — ⚠️ MASCULINE DESPITE ENDING IN -य: बड़ा साम्राज्य, never बड़ी. The ज्य is ज with य stacked. ⚠️ Not देश, a country (unit 8): a देश has one people, a साम्राज्य rules several who did not choose it — which is what makes साम्राज्यवाद (lesson 4) a word with a charge on it." },
        { id: "hi-u105l3-sinhaasan", type: "vocab", front: "सिंहासन", reading: "sinhaasan", meaning: "the seat a ruler sits on", accept: ["a throne", "the seat of a ruler", "the royal chair and the office it stands for"], example: { jp: "सिंहासन खाली रहा, क्योंकि राजा का कोई बेटा नहीं था।", en: "The throne stayed empty, because the king had no son." }, drill: { jp: "सिंहासन अब संग्रहालय में है", en: "The throne is in a museum now" }, hint: "SIN-HAA-SAN, masculine. सिंह is a lion and आसन a seat — the lion-seat. ⚠️ The ं before ह is written n (unit 1 §1). ⚠️ It stands for the POSITION as well as the furniture, exactly as 'the throne' does in English, so सिंहासन खाली है means there is no ruler, which is the example." },
        { id: "hi-u105l3-saamant", type: "vocab", front: "सामंत", reading: "saamant", meaning: "a lord holding land under a king", accept: ["a vassal noble with land", "a lord under a king", "a landholder owing service to a ruler"], example: { jp: "हर सामंत अपनी ज़मीन से कर लेता था और उसका हिस्सा राजा को भेजता था।", en: "Every lord took tax from his own land and sent his share to the king." }, drill: { jp: "सामंत राजा के नीचे था", en: "The lord was under the king" }, hint: "SAA-MANT, masculine. ⚠️ Not मालिक, an owner (unit 78), and not नेता, a leader (unit 42): a सामंत holds land only because a king let him, and owes the king a share for it — which is the whole system the example describes in one sentence." },
        { id: "hi-u105l3-uttaraadhikaar", type: "vocab", front: "उत्तराधिकार", reading: "uttaraadhikaar", meaning: "the right to follow someone in a position", accept: ["succession to a place", "the right to follow in a post", "who comes next by right"], example: { jp: "उत्तराधिकार पर झगड़ा हुआ और साम्राज्य के दो हिस्से हो गए।", en: "A quarrel arose over the succession and the empire was divided into two parts." }, drill: { jp: "उत्तराधिकार का नियम साफ़ नहीं था", en: "The rule of succession was not clear" }, hint: "UT-TA-RAA-DHI-KAAR, masculine, with a real doubled t held between the two त. उत्तर here means 'coming after', not 'north' or 'an answer'. Plus अधिकार, a right — ⚠️ WHICH IS NOT CARDED ANYWHERE IN HINDI, see unit 107's header. The two do not share a string either way, because the अ has become the mātrā ा. ⚠️ Not वसीयत, a will (unit 59): a वसीयत is a document, उत्तराधिकार is the right itself, which exists whether anything was written or not." },
        { id: "hi-u105l3-vanshaavalii", type: "vocab", front: "वंशावली", reading: "vanshaavalii", meaning: "a traced line of descent", accept: ["a written chart of who came from whom", "a family tree", "a traced record of descent"], example: { jp: "उसकी वंशावली दस पीढ़ी तक लिखी है, पर उससे आगे कुछ नहीं मिलता।", en: "His line of descent is written to ten generations, but nothing is found beyond that." }, drill: { jp: "वंशावली किसी ने नहीं रखी", en: "Nobody kept the line of descent" }, hint: "VAN-SHAA-VA-LII — FEMININE, -ी agreeing with the rule. वंश, a line (unit 78), plus आवली, a row. 🚨 SUBSTRING NOTE, AND IT FIRES: वंश whole-word-matches inside this word, because the ा after it is a mātrā — the opposite answer to राजवंश at the top of this lesson, where the ज blocks it. ⚠️ A वंश is the line itself; a वंशावली is the CHART, which somebody wrote and can have got wrong." },
      ],
    },
    {
      id: "hi-u105l4",
      unit: 105,
      lesson: 4,
      title: "Conquest, colony, freedom",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe one land taking another and the undoing of it: an attack, destruction, a colony, holding other lands as a policy, freedom from outside rule, and partition.",
      items: [
        { id: "hi-u105l4-aakraman", type: "vocab", front: "आक्रमण", reading: "aakraman", meaning: "an attack on another land", accept: ["an invasion from outside", "an armed attack on a land", "a march into another country"], example: { jp: "आक्रमण के बाद वह शहर कई साल खाली रहा, और फिर दूसरे लोग वहाँ बसे।", en: "After the invasion that city stayed empty several years, and then other people settled there." }, drill: { jp: "आक्रमण के बाद वह शहर खाली रहा", en: "After the invasion that city stayed empty" }, hint: "AA-KRA-MAN, masculine. The क्र is क with र stacked (unit 6) and the ण is retroflex, merged to n in the reading (unit 1 §1b). ⚠️ Not हमला: that word is not carded in Hindi, so आक्रमण carries both the everyday and the historical sense. ⚠️ युद्ध, war, and विजय, victory, are u89's and are deliberately not re-taught here." },
        { id: "hi-u105l4-dhvans", type: "vocab", front: "ध्वंस", reading: "dhvans", meaning: "the destruction of what was built", accept: ["the pulling-down of a built thing", "the wrecking of a structure", "the razing of what stood"], example: { jp: "मंदिर का ध्वंस हुआ, पर उसका शिलालेख बच गया और उसी से तारीख मिली।", en: "The temple was destroyed, but its inscription survived and the date was got from it." }, drill: { jp: "किले का ध्वंस सदियों पहले हुआ", en: "The fort was destroyed centuries ago" }, hint: "DHVANS, masculine, one syllable, and the ध्व is ध with व stacked (unit 6). The ं before स is written n (unit 1 §1). ⚠️ Not टूटना, to break: a ध्वंस is DONE to a thing by people, and the word carries the sense of a deliberate erasing, which is why the example makes the surviving शिलालेख the point." },
        { id: "hi-u105l4-upanivesh", type: "vocab", front: "उपनिवेश", reading: "upanivesh", meaning: "a land held and run by another country", accept: ["a possession ruled from abroad", "a colony", "a land governed by another country"], example: { jp: "उपनिवेश में कानून बाहर से आता था, और यहाँ के लोगों से कोई नहीं पूछता था।", en: "In a colony the law came from outside, and nobody asked the people here." }, drill: { jp: "यह देश पहले उपनिवेश था", en: "This country was once a colony" }, hint: "U-PA-NI-VESH, masculine. उप- is 'under' and निवेश here is 'a settling' — ⚠️ NOT the निवेश that means investment (unit 76), which is a different word spelled the same way inside a compound. ⚠️ Not विदेश, abroad (unit 92): a विदेश is simply another country, an उपनिवेश is one that is not allowed to run itself." },
        { id: "hi-u105l4-saamraajyavaad", type: "vocab", front: "साम्राज्यवाद", reading: "saamraajyavaad", meaning: "the holding of other lands as a deliberate policy", accept: ["empire-building as a doctrine", "the policy of holding other lands", "a creed of ruling other peoples"], example: { jp: "साम्राज्यवाद सिर्फ़ ज़मीन के लिए नहीं था, लोहे और बाज़ार के लिए भी था।", en: "Empire-building was not only for land; it was also for iron and for markets." }, drill: { jp: "साम्राज्यवाद का अंत धीरे हुआ", en: "Empire-building ended slowly" }, hint: "SAAM-RAAJ-YA-VAAD, masculine. साम्राज्य (lesson 3) plus -वाद, the '-ism' ending — the same -वाद as संरक्षणवाद (unit 103) and जातिवाद (unit 109). ✅ SUBSTRING CHECKED: साम्राज्य CANNOT fire inside it, because the व that follows is a \\p{L} letter, which is why the two can sit in one unit at all." },
        { id: "hi-u105l4-svatantrataa", type: "vocab", front: "स्वतंत्रता", reading: "svatantrataa", meaning: "freedom from outside rule", accept: ["the condition of governing oneself", "independence", "freedom from another's rule"], example: { jp: "स्वतंत्रता के बाद पहला काम अपना कानून लिखना था, और वह काम सालों चला।", en: "After independence the first task was to write one's own law, and that task ran for years." }, drill: { jp: "स्वतंत्रता के बाद अपना कानून लिखा गया", en: "After independence one's own law was written" }, hint: "SVA-TAN-TRA-TAA — ⚠️ FEMININE, a -ता abstract (unit 61 §B6) ending in -आ: स्वतंत्रता मिली, never मिला. स्व is 'self' — the same स्व as स्वचालित (unit 100) — plus तंत्र, a system (unit 100), plus -ता. So literally the state of running one's own machinery, which is exactly what the example says. ⚠️ Not आज़ादी: that word is not carded in Hindi." },
        { id: "hi-u105l4-vibhaajan", type: "vocab", front: "विभाजन", reading: "vibhaajan", meaning: "the splitting of one land into two", accept: ["the cutting of a country in parts", "a partition", "the dividing of one land into two"], example: { jp: "विभाजन में लाखों लोगों को अपना घर छोड़ना पड़ा, और बहुत कभी नहीं लौटे।", en: "In the partition hundreds of thousands of people had to leave their homes, and many never returned." }, drill: { jp: "विभाजन में लाखों लोगों को घर छोड़ना पड़ा", en: "In the partition hundreds of thousands had to leave home" }, hint: "VI-BHAA-JAN, masculine. ⚠️ Not विखंडन, a breaking-apart (unit 100): a विखंडन splits a system into working pieces, a विभाजन draws a line through a land and through the people on it. For a Hindi speaker the word has one referent above all others, and the example is written to carry that weight rather than to define it." },
      ],
    },
  ],
};
