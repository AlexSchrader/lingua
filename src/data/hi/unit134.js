// HI Unit 134 — आबादी और आँकड़े ("Population and figures") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 3 (u124–u136). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, then unit124.js §C1–§C11 — this block's own record.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 14 (B2)"). Theme ASSIGNED CENTRALLY at
// **2 of 18 taken** against the real 2,328-card corpus, 2026-10-06 (committed
// evidence: `scripts/qa/theme-holes.mjs` + `theme-holes-hi.txt`).
//
// 🚨 BOTH TITLE WORDS ARE ALREADY CARDED AND NEITHER IS RE-CARDED: **आबादी is
// u42's ("the population") and आँकड़े is u87's ("statistical data", carded in the
// PLURAL on purpose)**. The title is readable; the theme is everything the corpus
// had no word for around them.
//
// 🚨🚨 FIVE CROSS-BLOCK / CROSS-UNIT LINES, ALL GIVEN CENTRALLY AND ALL CHECKED
// HERE RATHER THAN TRUSTED:
//   • **THIS UNIT OWNS THE MOVEMENT OF PEOPLE; BLOCK 2's u114 OWNS THE
//     INTERVENTION.** MINE: पलायन · प्रवासी · शहरीकरण · घनत्व · जनसांख्यिकी.
//     **THEIRS, AND IN NO CARD HERE: ग्रामीण · कल्याण · स्वच्छता · सशक्तिकरण ·
//     जागरूकता · लाभार्थी.** ⚠️ The lead's warning was that *both* seats would
//     reach for ग्रामीण; it appears in no front, example, drill or hint of
//     u124–u136, which is a checkable claim and was checked.
//   • **सर्वेक्षण → THIS UNIT ONLY (l1).** Block 1 dropped it from u103.
//   • **जनगणना → THIS UNIT ONLY (l1)**, not u110.
//   • **बहुसंख्यक (l2) IS GLOSSED AS THE PEOPLE, NEVER THE SHARE**, because
//     बहुमत@u63 owns "a majority" and the grader compares strings. The card is
//     "the people who are in the majority" — a group of persons, not a fraction.
//   • **अल्पसंख्या WAS REFUSED CENTRALLY** — अल्पसंख्यक@u92 is the same lexeme.
//     This unit does not reach for it.
//
// ⚠️ TWO REFUSALS THIS UNIT ADDED ON ITS OWN MEASUREMENT:
//   • **प्रवासन ("migration") WAS REFUSED**, although the brief listed it.
//     प्रवास@u92 is glossed "migration" and the two are one lexeme;
//     `gloss-taken.mjs` caught it. **प्रवासी, the PERSON, IS carded** — a
//     separate lexeme on the same precedent as मज़दूर@u28 / मज़दूरी@u76 — and
//     its hint names the router match, because प्रवास sits inside it after a
//     mātrā (the छात्रावास shape, unit 97).
//   • **वृद्ध ("aged") WAS REFUSED** on a mechanical ground worth recording:
//     वृद्ध is a STRICT PREFIX of वृद्धि@u69 with only a ि after it, which is
//     exactly the स्नातक / स्नातकोत्तर shape u97 refused. **आयुवर्ग was also
//     refused** — पीढ़ी@u38 owns "an age group". वयस्क (l4) took the slot, and
//     शिशु · किशोर · वयस्क now make a clean three-step age series.
//   • **जनसंख्या WAS REFUSED** — आबादी@u42 owns "the population", and no honest
//     gloss separated the two. जनगणना carries the counting instead.
//
// §C6 UPDATE: **मृत्युदर (l4) IS THIS BLOCK'S SECOND AND LAST ृ**, after पैतृक
// (u128l2). The mark stays uncarded (unit1.js §3, §7) and is hinted on the card.
//
// ⚠️ GENDER: FEMININE — जनगणना, गणना, तालिका, जनसांख्यिकी, बसावट
// (consonant-final and unmarked), जन्मदर, मृत्युदर (both -दर, feminine).
// MASCULINE — सर्वेक्षण, ग्राफ़, घनत्व, क्षेत्रफल, निवासी (despite the -ी),
// वितरण, पलायन, प्रवासी (despite the -ी), विस्थापन, स्थानांतरण, शहरीकरण, उपनगर,
// लिंगानुपात, शिशु, किशोर. बहुसंख्यक and वयस्क work as both noun and adjective.
export const HI_UNIT134 = {
  id: "hi-u134",
  lang: "hi",
  title: "आबादी और आँकड़े",
  order: 134,
  stage: "b2",
  lessons: [
    {
      id: "hi-u134l1",
      unit: 134,
      lesson: 1,
      title: "Counting the people",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about a census and a survey, the count they produce, and the table, graph and science that make sense of it.",
      items: [
        { id: "hi-u134l1-jangananaa", type: "vocab", front: "जनगणना", reading: "jangananaa", meaning: "a census", accept: ["the counting of everybody in a country"], example: { jp: "जनगणना हर दस साल में एक बार होती है।", en: "A census takes place once every ten years." }, drill: { jp: "जनगणना हर दस साल में होती है", en: "A census happens every ten years" }, hint: "JAN-GA-NA-NAA — ⚠️ FEMININE and -आ, against the rule. जन, people, plus गणना, the next card but one — ⚠️ **AND गणना SITS INSIDE IT WITH THE ROUTER UNABLE TO MATCH IT**, because the न before it is a LETTER: checked, not assumed, the same proof u97 used for शोधग्रंथ. The ण and the न are a RETROFLEX and a DENTAL n, both read n (§1b)." },
        { id: "hi-u134l1-sarvekshan", type: "vocab", front: "सर्वेक्षण", reading: "sarvekshan", meaning: "a survey", accept: ["asking a chosen set of people in order to learn about everybody"], example: { jp: "सर्वेक्षण में सिर्फ़ हज़ार घर देखे गए।", en: "In the survey only a thousand households were looked at." }, drill: { jp: "सर्वेक्षण में हज़ार घर देखे गए", en: "A thousand households were looked at in the survey" }, hint: "SAR-VEK-SHAN, masculine. र्वे writes the र as a hook (unit 6), क्ष is one of unit 6's three stacked conjuncts read **ksha**, and the final ण is the RETROFLEX n. 🚨 **NOT THE SAME THING AS A जनगणना, AND THE EXAMPLES SAY WHY:** a जनगणना counts EVERYBODY, a सर्वेक्षण asks a नमूना (unit 87) and works the rest out." },
        { id: "hi-u134l1-gananaa", type: "vocab", front: "गणना", reading: "gananaa", meaning: "a count made for a purpose", accept: ["working out a number by counting or calculating"], example: { jp: "पेड़ों की गणना इस साल पहली बार हुई।", en: "The trees were counted for the first time this year." }, drill: { jp: "पेड़ों की गणना इस साल हुई", en: "The trees were counted this year" }, hint: "GA-NA-NAA — ⚠️ FEMININE and -आ, against the rule. ⚠️ **THE FIRST n IS RETROFLEX ण AND THE SECOND DENTAL न, AND §1b READS BOTH AS n** — so the spelling has to be learnt from the hint, not from the reading. ⚠️ Not संख्या (unit 11), which is the number itself: गणना is the WORK of arriving at it." },
        { id: "hi-u134l1-taalikaa", type: "vocab", front: "तालिका", reading: "taalikaa", meaning: "a table of figures", accept: ["numbers set out in rows and columns"], example: { jp: "सब आँकड़े एक तालिका में रख दिए गए।", en: "All the data were put into one table." }, drill: { jp: "सब आँकड़े एक तालिका में रखे गए", en: "All the data were put in one table" }, hint: "TAA-LI-KAA — ⚠️ FEMININE and -आ, with the rule for once. ⚠️ THE ि IS SHORT: taa-li-kaa. ⚠️ Not मेज़ (unit 9), which is the furniture — English uses one word for both and Hindi does not, so a learner who says मेज़ here will be understood to mean a table with legs." },
        { id: "hi-u134l1-graaf", type: "vocab", front: "ग्राफ़", reading: "graaf", meaning: "a graph", accept: ["a drawn line that shows how a number moved"], example: { jp: "ग्राफ़ देखने पर आबादी का बढ़ना साफ़ दिखता है।", en: "On looking at the graph the growth of the population shows clearly." }, drill: { jp: "ग्राफ़ में आबादी का बढ़ना साफ़ दिखता है", en: "The population's growth shows clearly in the graph" }, hint: "GRAAF, masculine, ONE syllable: ग्र is a stacked conjunct, so the word opens on two consonants, and फ़ is the f of unit 4 — graaf, never graaph. ⚠️ A loanword that does NOT gloss to its reading (§9): `graaf` against the English graph." },
        { id: "hi-u134l1-jansaankhyikii", type: "vocab", front: "जनसांख्यिकी", reading: "jansaankhyikii", meaning: "demography", accept: ["the study of how a population is made up and how it changes"], example: { jp: "जनसांख्यिकी पढ़ने वाले लोग सरकार के लिए काम करते हैं।", en: "People who study demography work for the government." }, drill: { jp: "जनसांख्यिकी सरकार के लिए ज़रूरी है", en: "Demography is necessary for the government" }, hint: "JAN-SAAN-KHYI-KII — ⚠️ FEMININE, five syllables, and ⚠️ **THE LONGEST FRONT IN THIS UNIT**. जन, people, plus सांख्यिकी, statistics — and ख्य is a stacked conjunct with ख carrying a puff of air (unit 6). ⚠️ The ं sits on a LONG आ: saan. It is the word for the SUBJECT, and the rest of this unit is its vocabulary." },
      ],
    },
    {
      id: "hi-u134l2",
      unit: 134,
      lesson: 2,
      title: "How thick on the ground",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about density, name a resident and the surveyor who counts them, describe how a population is settled and spread, and name the people who are in the majority.",
      items: [
        { id: "hi-u134l2-ghanatva", type: "vocab", front: "घनत्व", reading: "ghanatva", meaning: "density", accept: ["how many there are in each piece of space"], example: { jp: "शहर का घनत्व गाँव से दस गुना ज़्यादा है।", en: "The city's density is ten times the village's." }, drill: { jp: "शहर का घनत्व गाँव से ज़्यादा है", en: "The city's density is higher than the village's" }, hint: "GHA-NAT-VA, masculine, घ with a puff of air, and त्व KEEPS ITS OWN a — ghanatva, the same -त्व as स्वामित्व (unit 128) and ⚠️ **-त्व IS MASCULINE while -ता and -ति are FEMININE**. Built on घन, solid. Works for a metal as well as for people." },
        { id: "hi-u134l2-sarvekshak", type: "vocab", front: "सर्वेक्षक", reading: "sarvekshak", meaning: "a surveyor who counts people", accept: ["the person sent house to house to record everybody"], example: { jp: "सर्वेक्षक घर घर जाकर गिनता है, और उसी से घनत्व के आँकड़े बनते हैं।", en: "The surveyor goes house to house counting, and it is from that that the density figures are made." }, drill: { jp: "सर्वेक्षक घर घर जाकर लोगों को गिनता है", en: "The surveyor goes house to house counting people" }, hint: "SAR-VEK-SHAK, masculine, the -अक doer-suffix, and क्ष is one of unit 6's letter-conjuncts. From सर्वेक्षण, a survey, in this very unit — ✅ and neither word is a substring of the other, since one ends in ण and the other in क. 🚨 **क्षेत्रफल WAS REMOVED FROM THIS SLOT**: u111l3 owns the area of a surface, which is a geography fact, and unit98.js §C9.11 gives u134 the MOVEMENT and COUNTING of people." },
        { id: "hi-u134l2-nivaasii", type: "vocab", front: "निवासी", reading: "nivaasii", meaning: "a resident", accept: ["one who lives in a named place"], example: { jp: "इस मोहल्ले के निवासी सब एक दूसरे को जानते हैं।", en: "The residents of this neighbourhood all know one another." }, drill: { jp: "यहाँ के निवासी एक दूसरे को जानते हैं", en: "The residents here know one another" }, hint: "NI-VAA-SII — ⚠️ **MASCULINE DESPITE THE -ी** and fixed for a woman: पुराना निवासी, not पुरानी. -वास is a dwelling, the fifth such word in the course after प्रवास (unit 92), छात्रावास (unit 97), उपवास (unit 129) and आवास (unit 132). ⚠️ The gloss avoids \"inhabitants\", which आबादी@u42 accepts." },
        { id: "hi-u134l2-basaavat", type: "vocab", front: "बसावट", reading: "basaavat", meaning: "the way people are settled over an area", accept: ["the pattern in which a population sits on the land"], example: { jp: "पहाड़ की बसावट मैदान से बहुत अलग होती है।", en: "Settlement in the hills is very different from the plains." }, drill: { jp: "पहाड़ की बसावट मैदान से अलग होती है", en: "Hill settlement is different from the plains" }, hint: "BA-SAA-VAT — ⚠️ FEMININE and consonant-final, so nothing in the shape says so: पुरानी बसावट. From बसना, to settle. The ट is RETROFLEX, merged to t (§1b). ⚠️ Not बस्ती (unit 50), which is ONE settlement: बसावट is the PATTERN of all of them together." },
        { id: "hi-u134l2-vitaran", type: "vocab", front: "वितरण", reading: "vitaran", meaning: "distribution", accept: ["how a total is spread across places or groups", "the handing out of something"], example: { jp: "आबादी का वितरण देश भर में बराबर नहीं है।", en: "The distribution of population is not even across the country." }, drill: { jp: "आबादी का वितरण बराबर नहीं है", en: "The distribution of population is not even" }, hint: "VI-TA-RAN, masculine, ⚠️ THE ि SHORT, and the final ण the RETROFLEX n. ⚠️ **TWO LIVE SENSES AND BOTH ARE IN THE ACCEPT LIST** — the statistical spread this lesson needs, and the plain handing-out of things, which is what a government notice means by अनाज का वितरण." },
        { id: "hi-u134l2-bahusankhyak", type: "vocab", front: "बहुसंख्यक", reading: "bahusankhyak", meaning: "the people who are in the majority", accept: ["the larger group of people in a place"], example: { jp: "इस राज्य में बहुसंख्यक लोग दो भाषाएँ बोलते हैं।", en: "In this state the majority of people speak two languages." }, drill: { jp: "बहुसंख्यक लोग दो भाषाएँ बोलते हैं", en: "Most people speak two languages" }, hint: "BA-HU-SAN-KHYAK, masculine, and works as both noun and adjective. बहु, many, plus संख्या, a number (unit 11) — ख्य is a stacked conjunct with ख carrying a puff of air. 🚨 **THE GLOSS NAMES THE PEOPLE AND NOT THE SHARE, ON PURPOSE:** बहुमत (unit 63) already owns \"a majority\" as a string, so this card is a GROUP OF PERSONS. ⚠️ Its opposite अल्पसंख्यक is unit 92's." },
      ],
    },
    {
      id: "hi-u134l3",
      unit: 134,
      lesson: 3,
      title: "People on the move",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about people leaving a place, a migrant, being displaced, relocating, and the growth of cities and suburbs.",
      items: [
        { id: "hi-u134l3-palaayan", type: "vocab", front: "पलायन", reading: "palaayan", meaning: "flight of people from a place", accept: ["a population leaving an area because it cannot live there"], example: { jp: "काम न मिलने से गाँवों से पलायन बढ़ गया।", en: "With no work to be had, flight from the villages increased." }, drill: { jp: "काम न मिलने से गाँवों से पलायन बढ़ा", en: "Flight from the villages increased for want of work" }, hint: "PA-LAA-YAN, masculine. ⚠️ **IT CARRIES A JUDGEMENT AND THAT IS THE POINT OF THE CARD:** a पलायन is leaving because staying is impossible — it is also the word for running away from a duty. Not सफ़र (unit 29), and not the next card: a प्रवासी may have chosen to go." },
        { id: "hi-u134l3-pravaasii", type: "vocab", front: "प्रवासी", reading: "pravaasii", meaning: "a migrant", accept: ["one living away from the place they belong to"], example: { jp: "शहर के आधे मज़दूर दूसरे राज्यों के प्रवासी हैं।", en: "Half the city's labourers are migrants from other states." }, drill: { jp: "शहर के आधे मज़दूर प्रवासी हैं", en: "Half the city's labourers are migrants" }, hint: "PRA-VAA-SII — ⚠️ **MASCULINE DESPITE THE -ी** and fixed for a woman. Built on प्रवास, migration (unit 92) — 🚨 **AND प्रवास SITS INSIDE IT WITH THE ROUTER ABLE TO MATCH IT**, because the ी after it is a mātrā. ⚠️ **प्रवासन WAS REFUSED FOR THIS LESSON**: प्रवास already owns the gloss \"migration\", and the two are one lexeme. The PERSON is a second lexeme, like मज़दूरी (unit 76) beside मज़दूर (unit 28)." },
        { id: "hi-u134l3-visthaapan", type: "vocab", front: "विस्थापन", reading: "visthaapan", meaning: "displacement", accept: ["people being moved off their land by something bigger than them"], example: { jp: "नए संयंत्र से सौ परिवारों का विस्थापन हुआ।", en: "The new plant displaced a hundred families." }, drill: { jp: "नए संयंत्र से सौ परिवारों का विस्थापन हुआ", en: "The new plant displaced a hundred families" }, hint: "VIS-THAA-PAN, masculine. स्था is a stacked conjunct with a DENTAL थ carrying a puff of air (unit 6) — the same stack as संस्थान (unit 97) and स्थायी (unit 92). ⚠️ **THE WORD CARRIES NO CHOICE AT ALL, WHICH IS WHAT SEPARATES IT FROM THE NEXT CARD:** a विस्थापन is done TO people." },
        { id: "hi-u134l3-sthaanaantaran", type: "vocab", front: "स्थानांतरण", reading: "sthaanaantaran", meaning: "relocation to another place", accept: ["being moved or moving to a different posting or site"], example: { jp: "उसका स्थानांतरण दूसरे ज़िले में हो गया।", en: "His relocation to another district went through." }, drill: { jp: "उसका स्थानांतरण दूसरे ज़िले में हुआ", en: "He was relocated to another district" }, hint: "STHAA-NAAN-TA-RAN, masculine. It opens on स्था, two consonants together, and the final ण is the RETROFLEX n. स्थान, a place, plus अंतरण, transfer — the अ absorbs, so ⚠️ **स्थान IS NOT A MATCHABLE STRING HERE**, the same way नाम is not inside नामांतरण (unit 128). ⚠️ The ordinary word for a government transfer, and that is the sense a learner meets." },
        { id: "hi-u134l3-shahariikaran", type: "vocab", front: "शहरीकरण", reading: "shahariikaran", meaning: "urbanisation", accept: ["more and more of a country's people coming to live in cities"], example: { jp: "शहरीकरण तेज़ हुआ और गाँव खाली होने लगे।", en: "Urbanisation sped up and the villages began to empty." }, drill: { jp: "शहरीकरण तेज़ हुआ और गाँव खाली होने लगे", en: "Urbanisation sped up and villages began to empty" }, hint: "SHA-HA-RII-KA-RAN, masculine, five syllables. Built on शहर, a city (unit 8), with -ीकरण making the process — 🚨 **AND शहर SITS AT ITS START WITH THE ROUTER ABLE TO MATCH IT**, because the ी after it is a mātrā. ⚠️ **-ीकरण IS A LIVE AND USEFUL PATTERN**: it turns any noun into the process of becoming that, and this is the course's one example." },
        { id: "hi-u134l3-upanagar", type: "vocab", front: "उपनगर", reading: "upanagar", meaning: "a suburb", accept: ["a town that has grown onto the edge of a city"], example: { jp: "काम शहर में है और घर किसी उपनगर में।", en: "The work is in the city and the home in some suburb." }, drill: { jp: "काम शहर में है और घर उपनगर में", en: "The work is in the city and the home in a suburb" }, hint: "U-PA-NA-GAR, masculine, consonant-final. उप- (under, beside) plus नगर, a city — ⚠️ **AND नगर IS NOT CARDED ANYWHERE**, so neither half is a matchable string; महानगर (unit 49) is built on the same नगर and is the OPPOSITE end of the scale. उप- is the same prefix as उपविजेता (unit 131)." },
      ],
    },
    {
      id: "hi-u134l4",
      unit: 134,
      lesson: 4,
      title: "The shape of a population",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about the birth rate, the death rate and the sex ratio, and name an infant, an adolescent and an adult.",
      items: [
        { id: "hi-u134l4-janmadar", type: "vocab", front: "जन्मदर", reading: "janmadar", meaning: "the birth rate", accept: ["how many are born for every thousand people in a year"], example: { jp: "पढ़ाई बढ़ने पर जन्मदर कम हो जाती है।", en: "When education increases, the birth rate falls." }, drill: { jp: "पढ़ाई बढ़ने पर जन्मदर कम हो जाती है", en: "The birth rate falls as education increases" }, hint: "JAN-MA-DAR — ⚠️ FEMININE and consonant-final: जन्मदर कम होती है. न्म is न stacked under a halant with म (unit 6). जन्म, a birth, plus दर, a rate — ⚠️ **दर IS NOT CARDED ANYWHERE** and the reason is on record: B1 found that दर reads `dar` and so does डर, fear (unit 27), so दर was dropped. It survives only inside compounds like this one." },
        { id: "hi-u134l4-mrityudar", type: "vocab", front: "मृत्युदर", reading: "mrityudar", meaning: "the death rate", accept: ["how many die for every thousand people in a year"], example: { jp: "अस्पताल पास होने से बच्चों की मृत्युदर गिरी।", en: "With a hospital nearby, the children's death rate fell." }, drill: { jp: "अस्पताल पास होने से बच्चों की मृत्युदर गिरी", en: "The children's death rate fell with a hospital nearby" }, hint: "MRI-TYU-DAR — ⚠️ FEMININE and consonant-final. 🚨 **THE ृ MĀTRĀ, WHICH READS ri AND IS ऋ's** (unit 1 §7) — the seventh word in the whole course to carry it, after कृपया (unit 7), four in B1, and पैतृक (unit 128). त्यु is a DENTAL त with य stacked and a SHORT ु. ⚠️ Not मौत (unit 20), which is one death: this is the rate." },
        { id: "hi-u134l4-linganupaat", type: "vocab", front: "लिंगानुपात", reading: "linganupaat", meaning: "the sex ratio", accept: ["how many women there are for every thousand men"], example: { jp: "कुछ ज़िलों का लिंगानुपात अब भी ठीक नहीं है।", en: "Some districts' sex ratio is still not right." }, drill: { jp: "कुछ ज़िलों का लिंगानुपात ठीक नहीं है", en: "Some districts' sex ratio is not right" }, hint: "LIN-GAA-NU-PAAT, masculine. लिंग, sex or gender, plus अनुपात, a ratio (unit 63) — ⚠️ **AND अनुपात IS NOT A MATCHABLE STRING HERE**, because its opening अ absorbs into the ा: the word reads लिंगा-नुपात. Checked, not assumed, which matters because u63's card is live." },
        { id: "hi-u134l4-shishu", type: "vocab", front: "शिशु", reading: "shishu", meaning: "an infant", accept: ["a child in its first year or two"], example: { jp: "हर शिशु को पहले साल में कई टीके लगते हैं।", en: "Every infant gets several vaccinations in the first year." }, drill: { jp: "हर शिशु को टीके लगते हैं", en: "Every infant gets vaccinations" }, hint: "SHI-SHU, masculine and fixed for a girl, and ⚠️ **BOTH VOWELS ARE SHORT AND BOTH CONSONANTS ARE श**: shi-shu, the same letter twice (§1a). ⚠️ Not बच्चा (unit 10), which is any child up to ten: a शिशु is a baby, and it is the word a hospital and a government form use." },
        { id: "hi-u134l4-kishor", type: "vocab", front: "किशोर", reading: "kishor", meaning: "an adolescent", accept: ["somebody between a child and an adult"], example: { jp: "इस देश की आधी आबादी किशोर और जवान है।", en: "Half this country's population is adolescent and young." }, drill: { jp: "इस देश की आधी आबादी किशोर है", en: "Half this country's population is adolescent" }, hint: "KI-SHOR, masculine, consonant-final, and ⚠️ THE ि IS SHORT: ki-shor. The feminine is किशोरी, which this course does not card. ⚠️ Also a common given name. The middle step of this lesson's three-part series: शिशु, किशोर, वयस्क." },
        { id: "hi-u134l4-vayask", type: "vocab", front: "वयस्क", reading: "vayask", meaning: "an adult", accept: ["one who has reached the age the law counts as grown"], example: { jp: "अठारह साल के बाद हर आदमी वयस्क माना जाता है।", en: "After eighteen years every person is reckoned an adult." }, drill: { jp: "हर आदमी अठारह साल में वयस्क होता है", en: "Every person becomes an adult at eighteen" }, hint: "VA-YASK, masculine, and works as noun and adjective: वयस्क आदमी, एक वयस्क. स्क closes it on two consonants. ⚠️ **वृद्ध WAS REFUSED FROM THIS SERIES AND वयस्क IS WHY IT DID NOT MATTER**: वृद्ध is a strict prefix of वृद्धि (unit 69) with only a ि after it, which is the स्नातक shape u97 refused. आयुवर्ग was refused too — पीढ़ी (unit 38) owns \"an age group\"." },
      ],
    },
  ],
};
