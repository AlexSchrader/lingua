// HI Unit 110 — प्रशासन और मंत्रालय ("Administration and the ministry") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 1 (u98–u110), THE LAST UNIT OF THE BLOCK. Conventions: unit1.js §1–§11,
// unit31.js §A1–§A8, unit61.js §B1–§B9, unit98.js §C1–§C9.
//
// 🚨 SLOT RETHEMED. The scaffold title was "Career and organisations" (slot
// work-career) and EVERY PART OF THAT IS ALREADY SPENT: u28 काम और पेशा owns the
// job, u96 पेशे और पद owns the titles and the hiring, u83 दफ़्तरी और औपचारिक भाषा
// owns the office register, u103 निगम और प्रतिस्पर्धा owns the firm, u93 दस्तावेज़
// और रिकॉर्ड owns the paperwork a person files. Measured **2 of 24** on the
// original theme, which is a dead slot, not a thin one.
// WHAT u110 OWNS INSTEAD: **THE STATE APPARATUS** — the bodies a government runs
// through, the rung of it a villager actually meets, the papers it governs by, and
// public money. Measured **2 of 24** on that theme too, and the 22 free fronts are
// all live, high-frequency Indian administrative Hindi.
// ⚠️ THE BOUNDARY, WHICH THIS SEAT ISSUED BEFORE AUTHORING AND KEPT:
//   • **IT IS THE APPARATUS, NOT THE JOB AND NOT THE OFFICE LANGUAGE.** No card
//     here is a job title a person applies for (u96) or a connective a letter uses
//     (u83). पटवारी is the one official carded, and only because he IS the bottom
//     rung of the revenue machine rather than a profession anyone chooses.
//   • **जनगणना AND सर्वेक्षण ARE u134's** (unit98.js §C9.4 and §C9.1), not this
//     unit's, and block 3 has authored both. So are घनत्व, पलायन, प्रवासन,
//     शहरीकरण and जनसांख्यिकी (§C9.11). Nothing demographic is carded here.
//   • **राजस्व IS THIS UNIT'S ALONE** (§C9.2) — u103 and u128 both dropped it, and
//     it is carded at l4 below.
//
// ⚠️ **आवंटन WAS ALLOCATED TO u110 BY unit98.js §C9.4 AND BLOCK 3 TOOK IT AT u128.**
// Probed TAKEN against block 3's branch on 2026-10-07. u128 मकान और जायदाद is
// already authored and committed, so this unit does NOT card it and §C9.4 has been
// corrected in place rather than left asserting an allocation that no longer holds.
// A later block proposing आवंटन must read u128 first.
//
// ⚠️ SEVEN CANDIDATES REFUSED, each for a measured reason rather than a guess:
//   • 🚨 **मुहर IS REFUSED BECAUSE मोहर (u44l4) IS THE SAME WORD, SPELLED
//     DIFFERENTLY.** The front probe returned मुहर FREE and it was free —
//     `front-taken.mjs` compares strings and these two differ by one mātrā. They
//     are one lexeme and one meaning, a stamp pressed on paper, and carding both
//     would give the learner two mastery tracks for a word they already have.
//     **This is the third instance of the same failure class in Hindi** — दुगना /
//     दुगुना (unit61.js §B4) and पूर्वग्रह / पूर्वाग्रह (unit109.js) are the other
//     two, and all three were caught by READING THE OWNER, not by any tool. The
//     ground it would have held, the seal that makes a paper official, is held by
//     राजपत्र at l3, which is where that force actually lives.
//   • **वसूली IS REFUSED — it is the generated -ी form of वसूलना (u80l2)**, 'to
//     collect money that is owed', which `scope-hi.mjs`'s own derive() produces, so
//     the tool treats the two as one word. Same action, same gloss space. The
//     collecting side of l4 is carried by राजस्व and उपकर instead.
//   • **विनियमन IS REFUSED — नियमन (u71l3) is the same lexeme**, 'the regulating
//     of something', with वि- on the front.
//   • **अनुपालन IS REFUSED — पालन (u71l4) is already glossed 'compliance'.**
//   • **खसरा DROPPED.** The front is free, but खसरा is also the ordinary Hindi word
//     for measles, so the gloss would be a homograph with two unrelated right
//     answers — the same trap unit98.js §C9.5 records for आरक्षण. चकबंदी holds the
//     land-record ground at l2 instead.
//   • **कर IS REFUSED AND ALWAYS WILL BE** — कर is the stem of करना and the
//     imperative 'do', so one front would carry two unrelated right answers. The
//     tax idea is carded as उपकर, which is blocked from the collision by its उप-.
//   • Probed FREE 2026-10-07 and deliberately LEFT for a later block: महकमा,
//     निदेशालय, कार्यालय, नियुक्ति, प्रभार, पदभार, अनुभाग, अध्यक्षता, कोषागार,
//     निधि, बहीखाता, आमदनी, सरकारी, उपायुक्त, ज़िलाधिकारी, सरपंच, कलेक्टर, भूमि,
//     हुक्म, फ़रमान, लालफ़ीताशाही, घूसखोरी, प्रावधान, क्षेत्र, खंड.
//     ⚠️ **कोषागार IS LEFT FREE ON PURPOSE AND SHOULD STAY THAT WAY** — कोष (l4)
//     whole-word-matches inside it on the mātrā, so the two would be one lexeme
//     carded twice.
//
// ⚠️ GENDER TRAPS THIS UNIT ADDS (unit1.js §4), each named in its own hint:
//   FEMININE: तहसील · चकबंदी · अधिसूचना · संहिता · मद.
//   ⚠️ **तहसील AND मद ARE BOTH FEMININE AND CONSONANT-FINAL**, so nothing in the
//   shape says so: बड़ी तहसील, दूसरी मद.
//   ⚠️ **अधिसूचना'S -ना IS A NOUN ENDING, NOT AN INFINITIVE** — अधिसूचना जारी हुई,
//   never *अधिसूचना करना as a verb the way सूचना देना works.
//   ⚠️ **संहिता IS -आ-FINAL AND FEMININE AND IS NOT A -ता ABSTRACT**, so the ending
//   gives no help at all — the same shape as गरिमा (u109l1).
//   ⚠️ **पटवारी IS MASCULINE DESPITE THE -ी**, the same exception as माली and धोबी
//   (both u28l3): अच्छा पटवारी, never अच्छी.
//   MASCULINE: प्रशासन · मंत्रालय · सचिवालय · आयोग · प्राधिकरण · उपखंड · पटवारी ·
//   लगान · क्षेत्राधिकार · अध्यादेश · अधिनियम · राजपत्र · ज्ञापन · राजस्व · उपकर ·
//   व्यय · कोष · लेखा.
//   नौकरशाही IS FEMININE and is a -ी abstract, which is the one ending here that
//   does tell you.
//   NO VERB IS CARDED. Still ZERO 3rd-person exceptions in the whole language.
//
// 🚨 SUBSTRING TRAPS, and this unit has the WORST ONES IN THE BAND, every verdict
// computed with `findWholeWord`'s real boundary test (`/\p{L}/u`, so a MĀTRĀ AND A
// HALANT ARE BOTH NON-LETTERS and neither blocks a match):
//   🚨 **THREE FRONTS MATCH INSIDE TAUGHT WORDS, SO THOSE WORDS ARE BANNED FROM
//   EVERY SENTENCE IN THIS UNIT** — a cloze would blank the wrong word:
//     • **लगान inside लगाना and लगाने.** No form of लगाना appears anywhere in u110.
//       लगना is safe (लगा, लगता) and is used.
//     • **ज्ञापन inside विज्ञापन** (u44l2). विज्ञापन appears nowhere in u110.
//     • **मद inside जन्मदिन, मद्देनज़र, खुशामद and बरामदा** — all four taught, all
//       four absent from u110. मद is the shortest front in the band at two letters
//       and this is the price of that.
//   ✅ FIRES BUT HARMLESS, because the word found is already taught and no card
//   needs to blank it: सचिव (u96) inside सचिवालय · लय (u106) inside BOTH सचिवालय
//   AND मंत्रालय · आय (u76) inside आयोग · सूचना (u44) inside अधिसूचना · नियम (u32)
//   inside अधिनियम · देश (u8) inside अध्यादेश · लेख (u44) inside लेखा.
//   ✅ BLOCKED, each checked rather than assumed — **शासन (u88) inside प्रशासन, by
//   the र** · योग (u77) inside आयोग, by the आ · खंड inside उपखंड, by the प · बंद
//   (u5) inside चकबंदी, by the क · पत्र inside राजपत्र, by the ज, exactly as in
//   पहचानपत्र (u93l1) · कर inside उपकर, by the प · को inside कोष, by the ष · मद
//   inside मदद, by the second द · नौकरी (u8) is NOT inside नौकरशाही at all.
//
// ⚠️ NO FRONT HERE CARRIES A NUKTA, so unit98.js §C3 does not bite on the fronts —
// but the EXAMPLES do (ज़िला, ज़मीन, फ़ाइल, फ़ैसला, अफ़सर, ज़्यादा), and every one of
// those is written DECOMPOSED, ज + ़ (U+091C U+093C), never ज़ (U+095B).
// ⚠️ NO VISARGA (unit61.js §B1) AND NO HYPHEN OR SPACE (unit98.js §C1) in any front.
// lang/unit/lesson are stamped in src/data/index.js.
export const HI_UNIT110 = {
  id: "hi-u110",
  lang: "hi",
  title: "प्रशासन और मंत्रालय",
  order: 110,
  stage: "b2",
  lessons: [
    {
      id: "hi-u110l1",
      unit: 110,
      lesson: 1,
      title: "The bodies a state runs through",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the bodies a government actually works through: the carrying out of its business as against who rules, a ministry, the building its senior officials sit in, a body set up to look into a matter, a body the law gives powers of its own, and the word for rule by officials.",
      items: [
        { id: "hi-u110l1-prashaasan", type: "vocab", front: "प्रशासन", reading: "prashaasan", meaning: "the carrying out of the state's business", accept: ["the running of a government's day-to-day work"], example: { jp: "नीति संसद में बनती है, पर उसे लागू करना प्रशासन का काम है।", en: "Policy is made in parliament, but putting it in force is the administration's work." }, drill: { jp: "नीति लागू करना प्रशासन का काम है", en: "Putting policy in force is the administration's work" }, hint: "PRA-SHAA-SAN, masculine. प्र- plus शासन, rule (unit 88) — and that pair is what the whole unit stands on: शासन is WHO RULES, प्रशासन is WHO CARRIES IT OUT, and a government can fall while the प्रशासन carries on. ✅ SUBSTRING CHECKED: शासन is BLOCKED inside it by the र before it, so the engine does not find it there. ⚠️ Not प्रबंध, management, nor व्यवस्था (both unit 66): those are a firm's or a household's words, प्रशासन is only ever the state's." },
        { id: "hi-u110l1-mantraalay", type: "vocab", front: "मंत्रालय", reading: "mantraalay", meaning: "a ministry of the government", accept: ["one whole arm of a government, under its own minister"], example: { jp: "यह फ़ैसला मंत्रालय ने लिया, और ज़िले के अफ़सर को मानना पड़ा।", en: "The ministry took this decision, and the district's officer had to go along with it." }, drill: { jp: "यह फ़ैसला मंत्रालय ने लिया", en: "The ministry took this decision" }, hint: "MAN-TRAA-LAY, masculine. मंत्री, a minister (unit 42), plus -आलय, 'a seat or place' — the same -आलय as न्यायालय (unit 102) and विश्वविद्यालय (unit 97). ⚠️ The त्र is त with र stacked beneath it. ⚠️ Not विभाग, which unit 97 teaches as an ACADEMIC department: a मंत्रालय is a whole arm of the state and a विभाग sits inside one. ⚠️ SUBSTRING, AND IT FIRES: लय, tempo (unit 106), is found at its tail, because the ा before it is a mātrā; harmless, and it is the same accident as in सचिवालय below." },
        { id: "hi-u110l1-sachivaalay", type: "vocab", front: "सचिवालय", reading: "sachivaalay", meaning: "the building a government is run from", accept: ["the central offices where a state's senior officials sit"], example: { jp: "फ़ाइल ज़िले से सचिवालय गई, और तीन महीने वहाँ पड़ी रही।", en: "The file went from the district up to the secretariat, and lay there three months." }, drill: { jp: "फ़ाइल ज़िले से सचिवालय गई", en: "The file went from the district to the secretariat" }, hint: "SA-CHI-VAA-LAY, masculine, with the same -आलय as मंत्रालय above. ⚠️ SUBSTRING, AND IT FIRES: सचिव, a secretary (unit 96), IS found inside सचिवालय — the ा that follows it is a MĀTRĀ, and `findWholeWord` counts only letters as boundaries, so a one-mātrā extension can never be screened by eye. Harmless here, because सचिव is already taught. ⚠️ A मंत्रालय is an arm of the state; a सचिवालय is a BUILDING, and in a state capital one building holds them all." },
        { id: "hi-u110l1-aayog", type: "vocab", front: "आयोग", reading: "aayog", meaning: "a body the state sets up to look into a matter", accept: ["a panel appointed to examine something and report"], example: { jp: "सरकार ने एक आयोग बनाया, और उसने दो साल तक छानबीन की।", en: "The government set up a commission, and it carried out a sifting inquiry for two years." }, drill: { jp: "सरकार ने एक आयोग बनाया", en: "The government set up a commission" }, hint: "AA-YOG, masculine. ⚠️ SUBSTRING: आय, which unit 76 glosses 'revenue', IS found at its head — the ो after it is a mātrā — while योग, yoga (unit 77), is BLOCKED at its tail by the आ. The word has nothing to do with either: from आ plus युज्, 'to join', a body JOINED TOGETHER. ⚠️ Not समिति, a committee (unit 88): a समिति sits inside a body and is drawn from it, an आयोग is set up from outside and reports to the state." },
        { id: "hi-u110l1-praadhikaran", type: "vocab", front: "प्राधिकरण", reading: "praadhikaran", meaning: "a body the law gives powers of its own", accept: ["an authority set up by statute, that decides for itself"], example: { jp: "पुल बनाने का काम एक प्राधिकरण को दिया गया, जो सरकार से अलग चलता है।", en: "The work of building the bridge was given to an authority, which runs separately from the government." }, drill: { jp: "यह काम एक प्राधिकरण को दिया गया", en: "This work was given to an authority" }, hint: "PRAA-DHI-KA-RAN, masculine. प्र plus अधिकरण, a seat of authority, from the same अधिकार root as the band's five other compounds — एकाधिकार (unit 103), उत्तराधिकार (unit 105), विवेकाधिकार (unit 107), विशेषाधिकार (unit 109) and क्षेत्राधिकार in lesson 2. 🚨 **अधिकार ITSELF, 'a right', IS CARDED NOWHERE IN HINDI**; unit107.js's header has that finding in full, and this is now the sixth B2 front resting on it. ⚠️ Not आयोग above, and the difference is the point: an आयोग looks into things and REPORTS, a प्राधिकरण DECIDES, and its orders bind." },
        { id: "hi-u110l1-naukarshaahii", type: "vocab", front: "नौकरशाही", reading: "naukarshaahii", meaning: "rule by officials rather than by the elected", accept: ["the layer of permanent officials that actually runs things"], example: { jp: "सरकार बदली पर नौकरशाही अपनी जगह रही और काम एक ही तरह चला।", en: "The government changed, but the bureaucracy stayed in place and the work went on the same way." }, drill: { jp: "सरकार बदली पर नौकरशाही अपनी जगह रही", en: "The government changed, but the bureaucracy stayed in place" }, hint: "NAU-KAR-SHAA-HII — ⚠️ FEMININE, and a -ी abstract, which is the one ending in this unit that does tell you: नौकरशाही बढ़ी, never बढ़ा. From नौकर, a servant, plus -शाही, 'rule by'. ⚠️ नौकर is not carded in Hindi — नौकरी, a job, is (unit 8) — and नौकरी is not inside this word either. ⚠️ AND IT IS A COMPLAINT, NOT A NEUTRAL LABEL. Hindi has no neutral word for the thing, so प्रशासन above is what you use when you do not mean the complaint; that is why the two sit in one lesson." },
      ],
    },
    {
      id: "hi-u110l2",
      unit: 110,
      lesson: 2,
      title: "The district and the land",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Handle the rung of the state a villager actually meets: the sub-division of a district, the slice an area is officially cut into, the man who keeps the land records, what is paid to the state for holding land, the merging of scattered plots, and the ground inside which an office may act.",
      items: [
        { id: "hi-u110l2-tahsiil", type: "vocab", front: "तहसील", reading: "tahsiil", meaning: "a sub-division of a district", accept: ["the office a group of villages goes to for land matters"], example: { jp: "ज़मीन का कोई भी काम हो, लोग पहले तहसील जाते हैं।", en: "Whatever the land matter may be, people go to the tehsil first." }, drill: { jp: "लोग ज़मीन के काम में तहसील जाते हैं", en: "People go to the tehsil for land matters" }, hint: "TAH-SIIL — ⚠️ FEMININE AND CONSONANT-FINAL, so nothing in the shape says so: बड़ी तहसील, तहसील में. Arabic-origin, and in north India it names BOTH the area and the office that administers it. ⚠️ Not ज़िला, a district (unit 50): one ज़िला holds several तहसील. ⚠️ And not पंचायत (unit 50) either — a पंचायत is elected by the village, a तहसील is staffed by the state, and that is the whole difference this lesson turns on." },
        { id: "hi-u110l2-upkhand", type: "vocab", front: "उपखंड", reading: "upkhand", meaning: "a slice a larger area is officially cut into", accept: ["an administrative sub-division of something bigger"], example: { jp: "यह ज़िला चार उपखंड में बाँटा गया, और हर एक का अपना अफ़सर है।", en: "This district was divided into four sub-divisions, and each one has its own officer." }, drill: { jp: "यह ज़िला चार उपखंड में बाँटा गया", en: "This district was divided into four sub-divisions" }, hint: "UP-KHAND, masculine. उप-, 'sub-' — the same उप- as उपक्रम (unit 103), उपतंत्र (unit 100) and उपभोक्ता (unit 103) — plus खंड, a section, which is NOT carded in Hindi. ✅ SUBSTRING CHECKED: खंड is blocked inside it by the प anyway. ⚠️ Not तहसील above: a तहसील is a named rung of the revenue line, an उपखंड is whatever slice an order happens to cut, so a district, a department or even a road can each have one." },
        { id: "hi-u110l2-patvaarii", type: "vocab", front: "पटवारी", reading: "patvaarii", meaning: "the man who keeps a village's land records", accept: ["the lowest state official in the land-record line"], example: { jp: "पटवारी की बही में हर खेत किसान के नाम से दर्ज होता है।", en: "In the patwari's register every field is entered in the farmer's name." }, drill: { jp: "पटवारी की बही में हर खेत दर्ज है", en: "Every field is entered in the patwari's register" }, hint: "PAT-VAA-RII — ⚠️ MASCULINE DESPITE THE -ी, the same exception as माली and धोबी (both unit 28): अच्छा पटवारी, never अच्छी. He is the bottom rung of the whole revenue line and the one official a villager actually sees, which is why he gets a card and a Collector does not. ⚠️ Not निरीक्षक, an inspector (unit 96): a पटवारी does not inspect, he WRITES — and what he writes is what the state then believes." },
        { id: "hi-u110l2-lagaan", type: "vocab", front: "लगान", reading: "lagaan", meaning: "what is paid to the state for holding land", accept: ["the land revenue a cultivator owes"], example: { jp: "बारिश कम हुई, पर लगान उस साल भी पूरा देना पड़ा।", en: "The rain was little, but the land revenue had to be paid in full that year too." }, drill: { jp: "लगान उस साल भी पूरा देना पड़ा", en: "The land revenue had to be paid in full that year too" }, hint: "LA-GAAN, masculine. 🚨 **THE ONE TRAP IN THIS UNIT THE ENGINE CAN REALLY TRIP OVER: लगान WHOLE-WORD-MATCHES INSIDE लगाना AND लगाने**, because the ा or े that follows is a mātrā and not a letter, so a cloze would blank the wrong word. No form of लगाना appears anywhere in unit 110, deliberately; लगना is a different verb and is safe. ⚠️ And लगान is NOT a form of लगाना — it is a noun of its own, what the land is 'set at'. ⚠️ Not किराया, rent (unit 15): किराया is paid to an owner, लगान to the STATE." },
        { id: "hi-u110l2-chakbandii", type: "vocab", front: "चकबंदी", reading: "chakbandii", meaning: "the merging of scattered plots into one holding", accept: ["the official reshuffling of fields so a farmer's land lies together"], example: { jp: "चकबंदी के बाद किसान की ज़मीन एक जगह आ गई।", en: "After consolidation the farmer's land came together in one place." }, drill: { jp: "चकबंदी के बाद ज़मीन एक जगह आई", en: "After consolidation the land came together in one place" }, hint: "CHAK-BAN-DII — ⚠️ FEMININE, a -ी abstract: चकबंदी हुई. चक is a block of fields and बंदी the tying of them together. ✅ SUBSTRING CHECKED: बंद, closed (unit 5), is BLOCKED inside it by the क before it. ⚠️ It is the one word in this unit with no English equal a learner will already carry, because the problem is particular to the Indian land system: generations of inheritance leave one family's land in a dozen scattered pieces, and चकबंदी is the state swapping them back together." },
        { id: "hi-u110l2-kshetraadhikaar", type: "vocab", front: "क्षेत्राधिकार", reading: "kshetraadhikaar", meaning: "the ground inside which an office may act", accept: ["the reach of an office's or a court's power"], example: { jp: "यह काम तहसील के क्षेत्राधिकार से बाहर था, इसलिए फ़ाइल ज़िले गई।", en: "This matter lay outside the tehsil's jurisdiction, so the file went to the district." }, drill: { jp: "यह काम तहसील के क्षेत्राधिकार से बाहर था", en: "This matter lay outside the tehsil's jurisdiction" }, hint: "KSHE-TRAA-DHI-KAAR, masculine. The क्ष is the conjunct of unit 6 and the त्र is त with र beneath. क्षेत्र, a field or zone, is NOT carded in Hindi, so the word must be learnt whole. ⚠️ THE SIXTH B2 FRONT RESTING ON AN UNCARDED अधिकार — see प्राधिकरण in lesson 1. ⚠️ Not परिधि, the bounds of a job (unit 100): a परिधि is where work stops being relevant, a क्षेत्राधिकार is where power stops being LEGAL, and an order given outside one is void." },
      ],
    },
    {
      id: "hi-u110l3",
      unit: 110,
      lesson: 3,
      title: "What the state issues in writing",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Tell apart the papers a state governs by: the notification that makes a rule take effect, the law a government makes while the house is not sitting, the law the house has passed, the paper all of it must be printed in, a written note handed over to an office, and a whole field of rules gathered into one code.",
      items: [
        { id: "hi-u110l3-adhisuuchnaa", type: "vocab", front: "अधिसूचना", reading: "adhisuuchnaa", meaning: "an order the government publishes officially", accept: ["a formal notice that makes something take effect"], example: { jp: "नया नियम अधिसूचना के बाद ही लागू हुआ, घोषणा के बाद नहीं।", en: "The new rule came into force only after the notification, not after the announcement." }, drill: { jp: "नया नियम अधिसूचना के बाद लागू हुआ", en: "The new rule came into force after the notification" }, hint: "A-DHI-SUUCH-NAA — ⚠️ FEMININE, and ⚠️ THE -ना HERE IS A NOUN ENDING, NOT AN INFINITIVE: अधिसूचना जारी हुई, and there is no verb *अधिसूचना करना the way सूचना देना works. ⚠️ SUBSTRING, AND IT FIRES: सूचना, a notification (unit 44), is found inside it, because the ि before it is a mātrā. And the two are NOT interchangeable, which is the whole card: a सूचना TELLS you something, an अधिसूचना MAKES IT LAW — until it is published the rule does not exist. ⚠️ Not घोषणा, a proclamation (unit 88), for the reason the example gives." },
        { id: "hi-u110l3-adhyaadesh", type: "vocab", front: "अध्यादेश", reading: "adhyaadesh", meaning: "a law a government makes while the house is not sitting", accept: ["a temporary law issued without the legislature"], example: { jp: "संसद बंद थी, इसलिए सरकार अध्यादेश लाई और छह महीने का समय मिला।", en: "Parliament was not sitting, so the government brought an ordinance and got six months." }, drill: { jp: "सरकार अध्यादेश लाई और छह महीने मिले", en: "The government brought an ordinance and got six months" }, hint: "A-DHYAA-DESH, masculine. ⚠️ The ध्या is ध with य stacked under it and then the ा — adhyaa, never adhiyaa. ⚠️ Not आदेश, an order given (unit 71), and not विधेयक, a bill (unit 88): an आदेश tells one office what to do, a विधेयक is a law still being argued, an अध्यादेश IS law from the day it is issued and DIES if the house does not confirm it. ✅ SUBSTRING CHECKED: आदेश is not inside it at all, because the word opens with अ and not आ — but देश, a country (unit 8), IS found there on the mātrā, harmlessly." },
        { id: "hi-u110l3-adhiniyam", type: "vocab", front: "अधिनियम", reading: "adhiniyam", meaning: "a law the legislature has passed", accept: ["a statute that is on the books"], example: { jp: "संसद ने विधेयक मंज़ूर किया, और वह अधिनियम बन गया।", en: "Parliament approved the bill, and it became an act." }, drill: { jp: "विधेयक मंज़ूर हुआ और अधिनियम बना", en: "The bill was approved and became an act" }, hint: "A-DHI-NI-YAM, masculine. ⚠️ SUBSTRING, AND IT FIRES: नियम, a rule (unit 32), is found inside it, because the ि before it is a mātrā and not a letter. The pair IS the lesson: a नियम can be made by anyone who runs anything, an अधिनियम only by a legislature, and nothing below it may contradict one. ⚠️ Not कानून, law in general (unit 42): कानून is the whole body, an अधिनियम is one named Act with a year attached to it." },
        { id: "hi-u110l3-raajpatra", type: "vocab", front: "राजपत्र", reading: "raajpatra", meaning: "the paper in which the state prints its orders", accept: ["the official gazette"], example: { jp: "यह आदेश राजपत्र में छापा गया, और उस दिन से लागू हुआ।", en: "This order was printed in the gazette, and came into force from that day." }, drill: { jp: "यह आदेश राजपत्र में छापा गया", en: "This order was printed in the gazette" }, hint: "RAAJ-PA-TRA, masculine. राज, rule, plus पत्र, a paper, with the त्र stack. ✅ SUBSTRING CHECKED: पत्र is BLOCKED inside it by the ज before it, exactly as it is in पहचानपत्र (unit 93). ⚠️ It is a REAL OBJECT, published every week, and the whole of lesson 3 passes through it — an अधिसूचना, an अध्यादेश and an अधिनियम are each only effective once they appear here. ⚠️ Not अभिलेख, an archive (unit 93): an अभिलेख keeps what has happened, a राजपत्र MAKES it happen. 🚨 मुहर is not carded and will not be: मोहर (unit 44) is the same word, and this unit's header has the full refusal." },
        { id: "hi-u110l3-gyaapan", type: "vocab", front: "ज्ञापन", reading: "gyaapan", meaning: "a written note handed over to an office", accept: ["a memorandum setting out a demand or a position"], example: { jp: "किसानों ने ज़िले के अफ़सर को ज्ञापन दिया, और पावती ले ली।", en: "The farmers handed the district officer a memorandum, and took the acknowledgement." }, drill: { jp: "किसानों ने अफ़सर को ज्ञापन दिया", en: "The farmers handed the officer a memorandum" }, hint: "GYAA-PAN, masculine. The ज्ञ is ज with ञ stacked and reads gy, not jñ — the same glyph as ज्ञान, knowledge (unit 57). 🚨 SUBSTRING, AND IT FIRES: ज्ञापन IS FOUND INSIDE विज्ञापन, an advertisement (unit 44), because the ि before it is a mātrā — so विज्ञापन appears nowhere in unit 110, deliberately. ⚠️ And the two are different words: a वि-ज्ञापन makes a thing known TO EVERYONE, a ज्ञापन makes it known TO ONE OFFICE. ⚠️ It runs both ways in Hindi — a crowd hands one UP to the state, and a ministry sends one DOWN to its own offices." },
        { id: "hi-u110l3-sanhitaa", type: "vocab", front: "संहिता", reading: "sanhitaa", meaning: "a whole field of rules gathered into one code", accept: ["a code in which the rules on a subject are collected"], example: { jp: "ये सब नियम एक संहिता में आ गए, और अदालत अब एक ही किताब देखती है।", en: "All these rules came together into one code, and the court now looks at just one book." }, drill: { jp: "ये नियम एक संहिता में आ गए", en: "These rules came together into one code" }, hint: "SAN-HI-TAA — ⚠️ FEMININE and -आ-final, and it is NOT a -ता abstract, so the ending gives no help at all: संहिता बनी. Same shape as गरिमा (unit 109). ⚠️ Not अधिनियम above: an अधिनियम is ONE Act, a संहिता gathers a whole field — the आचार संहिता a candidate must keep to during an election, or the दंड संहिता the courts try crime under. ⚠️ Not सूची, a list (unit 93): a सूची names things, a संहिता BINDS." },
      ],
    },
    {
      id: "hi-u110l4",
      unit: 110,
      lesson: 4,
      title: "Revenue, heads and outlay",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Follow public money in the words the state itself uses: what it takes in from land and tax, a levy raised for one named purpose, the head a budget is cut into, money going out as the books record it, a sum fenced off for a purpose, and the account it is all written in.",
      items: [
        { id: "hi-u110l4-raajasva", type: "vocab", front: "राजस्व", reading: "raajasva", meaning: "what the state takes in from land and tax", accept: ["the money a government collects to run on"], example: { jp: "ज़िले का आधा राजस्व ज़मीन से आता था, अब नहीं आता।", en: "Half the district's revenue used to come from land; now it does not." }, drill: { jp: "ज़िले का आधा राजस्व ज़मीन से आता है", en: "Half the district's revenue comes from land" }, hint: "RAA-JAS-VA, masculine. The स्व is स with व stacked, as in वर्चस्व (unit 109). ⚠️ Not आय, which unit 76 glosses 'revenue' — and that is exactly why this card is worded as it is: आय is what a PERSON or a firm takes in, राजस्व only ever what the STATE takes in, and the two are never swapped. ⚠️ unit98.js §C9.2 allocates राजस्व to unit 110 alone; u103 and u128 both dropped it, so this is its only card in Hindi." },
        { id: "hi-u110l4-upkar", type: "vocab", front: "उपकर", reading: "upkar", meaning: "a tax levied for one named purpose", accept: ["a cess added on top of a tax and earmarked"], example: { jp: "हर चालान पर एक उपकर भी देना पड़ा, और वह पैसा स्कूलों पर खर्च हुआ।", en: "A cess had to be paid on every payment slip too, and that money was spent on schools." }, drill: { jp: "हर चालान पर एक उपकर भी देना पड़ा", en: "A cess had to be paid on every payment slip too" }, hint: "UP-KAR, masculine. उप-, 'sub-', plus कर, a tax — and 🚨 **कर IS NOT CARDED IN HINDI AND NEVER WILL BE**, because कर is also the stem of करना and the imperative 'do': one front would carry two unrelated right answers. ✅ SUBSTRING CHECKED: कर is BLOCKED inside उपकर by the प. ⚠️ The only reason an उपकर is a separate word is that it is EARMARKED — it may be spent on the one thing it was raised for and on nothing else, which is why the example says what the money went on." },
        { id: "hi-u110l4-mad", type: "vocab", front: "मद", reading: "mad", meaning: "a named head a budget is cut into", accept: ["the heading under which a sum is set down"], example: { jp: "पैसा था, पर दूसरी मद का था, इसलिए इस काम पर नहीं लगा।", en: "The money was there, but it was under another head, so it did not go on this work." }, drill: { jp: "यह पैसा दूसरी मद का था", en: "This money was under another head" }, hint: "MAD — ⚠️ FEMININE, and consonant-final, so nothing in the shape says so: दूसरी मद, इस मद में. 🚨 IT IS THE SHORTEST FRONT IN THE WHOLE B2 BAND AT TWO LETTERS, and that is the hazard: it whole-word-matches inside जन्मदिन, मद्देनज़र, खुशामद AND बरामदा, all four taught, because a halant and a mātrā are both non-letters to `findWholeWord`. None of the four appears anywhere in unit 110. ⚠️ मद is BLOCKED inside मदद, help, by the second द. ⚠️ And not the literary masculine मद, 'intoxication': only the accounting sense is carded." },
        { id: "hi-u110l4-vyay", type: "vocab", front: "व्यय", reading: "vyay", meaning: "money going out as the books record it", accept: ["outlay, in the formal language of accounts"], example: { jp: "इस साल व्यय आय से ज़्यादा रहा, और बजट में घाटा हुआ।", en: "This year the outlay stayed higher than the income, and the budget ran a shortfall." }, drill: { jp: "इस साल व्यय आय से ज़्यादा रहा", en: "This year the outlay stayed higher than the income" }, hint: "VYAY, masculine — the व्य is व with य stacked, one syllable. ⚠️ Not खर्च, which unit 37 glosses 'expenditure': the two mean the same thing and the REGISTER does not. खर्च is what you say about your own month; व्यय is what a budget document says, and a learner who writes खर्च in an official sentence is understood but marked at once as an outsider. That register split is most of what unit 83 is about, and this is its one fiscal instance." },
        { id: "hi-u110l4-kosh", type: "vocab", front: "कोष", reading: "kosh", meaning: "a sum of money fenced off for a purpose", accept: ["a fund held against a particular need"], example: { jp: "आपातकाल के लिए एक कोष रखा गया, जो किसी और मद में नहीं जाता।", en: "A fund was kept aside for an emergency, which does not go into any other head." }, drill: { jp: "आपातकाल के लिए एक कोष रखा गया", en: "A fund was kept aside for an emergency" }, hint: "KOSH, masculine. ✅ SUBSTRING CHECKED: को, the postposition, is BLOCKED at its head by the ष. ⚠️ Not पूँजी, capital (unit 76), and not बचत, savings (unit 37): पूँजी is money put to work so it grows, बचत is what a household did not spend, a कोष is money the state has FENCED OFF — and the fence is the whole meaning. ⚠️ कोषागार, a treasury building, is a real word and is deliberately NOT carded, because कोष matches inside it on the mātrā and the two would be one lexeme carded twice." },
        { id: "hi-u110l4-lekhaa", type: "vocab", front: "लेखा", reading: "lekhaa", meaning: "the account in which money in and out is written", accept: ["the formal accounts an office keeps"], example: { jp: "हर महीने का लेखा तैयार होता है, और अंकेक्षण उस पर होता है।", en: "Each month's account is made ready, and the audit is done on it." }, drill: { jp: "हर महीने का लेखा तैयार होता है", en: "Each month's account is made ready" }, hint: "LE-KHAA, masculine. ⚠️ SUBSTRING, AND IT FIRES: लेख, an article (unit 44), is found inside it, because the ा is a mātrā. ⚠️ AND लेखा IS NOT A FORM OF लेख: लेख is consonant-final, so its own forms are लेख and लेखों, and the two are separate words. ⚠️ Not हिसाब, a bill (unit 18), and not बही, a hand-written account book (unit 93): a बही is the physical book, a लेखा is what the book says, and अंकेक्षण (unit 107) is the checking of it. लेखाकार, an accountant, is unit 96's — and लेखा is blocked inside THAT by the क." },
      ],
    },
  ],
};
