// HI Unit 128 — मकान और जायदाद ("The house and the property") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 3 (u124–u136). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, then unit124.js §C1–§C11 — this block's own record.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 8 (B2)"). Theme ASSIGNED CENTRALLY and
// probed at **6 of 18 taken** against the real 2,328-card corpus, 2026-10-06
// (committed evidence: `scripts/qa/theme-holes.mjs` + `theme-holes-hi.txt`).
// ⚠️ THE FIELD AROUND IT IS MUCH MORE SPENT THAN THE SLOT NUMBER SUGGESTS, and
// this unit's own wider probe is the record: of 32 housing candidates, **21 were
// already taken** — u85 took संपत्ति, पट्टा, गिरवी, बयाना and हस्तांतरण; u86
// मकान, फ़्लैट, झुग्गी, कॉलोनी, लिफ़्ट and बहुमंज़िला; u94 बरामदा, नींव and
// ठेकेदार; u59 वसीयत and विरासत; u50 खंडहर; u15 किराया, आँगन and दीवार.
// A later seat looking at "6/18" and authoring from memory would have collided
// on half its list.
//
// 🚨 मकान IS u86's ("a house as a building") AND IS NOT RE-CARDED. The title
// names it; this unit is about the HOLDING, not the building.
//
// ⚠️ CROSS-BLOCK LINE: **राजस्व → BLOCK 1's u110 ONLY.** This unit dropped it,
// although a property unit reaches for "revenue record" immediately.
//
// ⚠️ THREE REFUSALS, ALL THREE FROM A LEXEME ALREADY TAUGHT UNDER A DIFFERENT
// SPELLING, AND `front-taken.mjs` PASSED ALL THREE (unit124.js §C3):
//   • **किरायेदार** ← किराएदार@u86 "a tenant" (ये vs ए). So this unit teaches the
//     OTHER side of the relation, ज़मींदार, and leaves the tenant to u86.
//   • **तहख़ाना** ← तहखाना@u94 "a basement" (nukta).
//   • **किश्त** ← किस्त@u37 "an instalment" (स vs श). ⚠️ **THE BRIEF THIS BLOCK
//     WAS GIVEN LISTED किश्त AS FREE.** It is not. Corrected here rather than
//     passed on.
//
// 🚨 बेदखली IS AUTHORED WITHOUT THE NUKTA, on purpose — unit124.js §C2. क़ ख़ ग़
// appear in **zero of 2,328 hi fronts** and are carded nowhere, so a learner
// reaching u128 has never been shown one. कारखाना@u60, तहखाना@u94 and
// खरीदना@u18 all spell plain, and this card follows them.
//
// ⚠️ GENDER: FEMININE — जायदाद (consonant-final, unmarked), कोठी, चारदीवारी,
// रजिस्ट्री, बेदखली. MASCULINE — भूखंड, परिसर, अहाता, भूस्वामी, ज़मींदार,
// नामांतरण, आवंटन, बंधक, स्वामित्व, खरीदार, बटवारा, अतिक्रमण, आश्रय, मोहल्ला.
// पैतृक, निजी, बिकाऊ and जर्जर are ADJECTIVES and take no gender of their own.
export const HI_UNIT128 = {
  id: "hi-u128",
  lang: "hi",
  title: "मकान और जायदाद",
  order: 128,
  stage: "b2",
  lessons: [
    {
      id: "hi-u128l1",
      unit: 128,
      lesson: 1,
      title: "The property itself",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name landed property, a plot, a big house, a premises, the boundary wall and the compound inside it.",
      items: [
        { id: "hi-u128l1-jaaydaad", type: "vocab", front: "जायदाद", reading: "jaaydaad", meaning: "a family's landed property", accept: ["land and houses held by a family", "immovable holdings"], example: { jp: "पिता की जायदाद अब तीन बेटों के नाम है।", en: "The father's property is now in three sons' names." }, drill: { jp: "जायदाद अब तीन बेटों के नाम है", en: "The property is now in three sons' names" }, hint: "JAAY-DAAD — ⚠️ FEMININE and consonant-final, so nothing in the shape says so: पूरी जायदाद, जायदाद तीन बेटों के नाम है. ⚠️ **THE GLOSS NAMES THE FAMILY BECAUSE संपत्ति (unit 85) ALREADY OWNS \"property\"** — the grader compares strings. The difference is real: संपत्ति is the legal word on a form, जायदाद the one a family argues over." },
        { id: "hi-u128l1-bhuukhand", type: "vocab", front: "भूखंड", reading: "bhuukhand", meaning: "a plot of land", accept: ["a marked-off piece of ground for building"], example: { jp: "शहर के बाहर एक छोटा भूखंड खरीदा गया।", en: "A small plot was bought outside the city." }, drill: { jp: "शहर के बाहर छोटा भूखंड खरीदा", en: "A small plot was bought outside the city" }, hint: "BHUU-KHAND, masculine, consonant-final: दो भूखंड. भ carries a puff of air and ⚠️ THE ऊ IS LONG. भू, earth, plus खंड, a section — the same भू as भूस्वामी (l2). ⚠️ Not ज़मीन (unit 21), which is any ground: a भूखंड has a number and a boundary." },
        { id: "hi-u128l1-kothii", type: "vocab", front: "कोठी", reading: "kothii", meaning: "a large detached house", accept: ["a bungalow standing in its own ground"], example: { jp: "उस कोठी में अब कोई नहीं रहता।", en: "Nobody lives in that big house now." }, drill: { jp: "उस कोठी में अब कोई नहीं रहता", en: "Nobody lives in that big house now" }, hint: "KO-THII — ⚠️ FEMININE. The ठ is RETROFLEX with a puff of air — tongue curled back, merged to th in the reading (§1b). ⚠️ **THREE WORDS FOR WHERE PEOPLE LIVE AND THEY ARE NOT INTERCHANGEABLE:** घर (unit 2) is a home, मकान (unit 86) a built dwelling, कोठी a big one standing alone in its own ground." },
        { id: "hi-u128l1-parisar", type: "vocab", front: "परिसर", reading: "parisar", meaning: "a premises", accept: ["the whole site a building and its grounds occupy", "a campus"], example: { jp: "संयंत्र के परिसर में बाहर का आदमी नहीं जा सकता।", en: "An outsider cannot go inside the plant's premises." }, drill: { jp: "संयंत्र के परिसर में कोई नहीं जा सकता", en: "Nobody can go inside the plant's premises" }, hint: "PA-RI-SAR, masculine, consonant-final, and both vowels are SHORT: pa-ri-sar. ⚠️ Not इमारत and not परिवार (unit 10) — read those two against it, because परिसर looks like the second and means something near the first. A परिसर is the GROUND plus everything standing on it." },
        { id: "hi-u128l1-chaardiivaarii", type: "vocab", front: "चारदीवारी", reading: "chaardiivaarii", meaning: "a boundary wall", accept: ["the wall drawn right round a plot"], example: { jp: "भूखंड के चारों तरफ़ चारदीवारी बन गई।", en: "A boundary wall was built right round the plot." }, drill: { jp: "भूखंड के चारों तरफ़ चारदीवारी बनी", en: "A boundary wall was built round the plot" }, hint: "CHAAR-DII-VAA-RII — ⚠️ FEMININE, because दीवार (unit 15) is. Two taught fronts joined — चार, four (unit 3), plus दीवार — ⚠️ **AND THE ROUTER CAN MATCH दीवार INSIDE IT**, because the र before it is... a LETTER, so in fact it CANNOT; चार is followed by द, also a letter. Checked both ways: this compound is safe from both its parts." },
        { id: "hi-u128l1-ahaataa", type: "vocab", front: "अहाता", reading: "ahaataa", meaning: "a walled compound", accept: ["the open yard enclosed by a boundary wall"], example: { jp: "चारदीवारी के अंदर का अहाता खाली पड़ा है।", en: "The compound inside the boundary wall is lying empty." }, drill: { jp: "चारदीवारी के अंदर अहाता खाली है", en: "The compound inside the wall is empty" }, hint: "A-HAA-TAA, masculine and regular -ा, so the oblique is अहाते. The ह is HEARD and the त is DENTAL. ⚠️ **NOT THE SAME CARD AS चारदीवारी, AND THE PAIR IS THE POINT:** the चारदीवारी is the wall, the अहाता is the SPACE it encloses. Not आँगन (unit 15), which is a house's inner yard." },
      ],
    },
    {
      id: "hi-u128l2",
      unit: 128,
      lesson: 2,
      title: "Who holds it, and on what paper",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the landowner and the landlord, and talk about registration, transfer of the record, an allotment and ancestral land.",
      items: [
        { id: "hi-u128l2-bhuusvaamii", type: "vocab", front: "भूस्वामी", reading: "bhuusvaamii", meaning: "a landowner", accept: ["one in whose name the land stands"], example: { jp: "कागज़ में भूस्वामी का नाम अभी पुराना ही है।", en: "In the papers the landowner's name is still the old one." }, drill: { jp: "कागज़ में भूस्वामी का नाम पुराना है", en: "The landowner's name in the papers is the old one" }, hint: "BHUU-SVAA-MII, masculine and FIXED for a woman. भू, earth, plus स्वामी, an owner — and स्व is a stacked conjunct, so the second half opens on two consonants together. ⚠️ Not मालिक (unit 28), which is any owner of anything: a भूस्वामी is specifically whose name is on the LAND." },
        { id: "hi-u128l2-zamiindaar", type: "vocab", front: "ज़मींदार", reading: "zamiindaar", meaning: "a landlord", accept: ["one who holds land and takes rent from it"], example: { jp: "पहले गाँव की पूरी ज़मीन एक ज़मींदार के पास रहती थी।", en: "Earlier the whole village's land stayed with one landlord." }, drill: { jp: "गाँव की ज़मीन एक ज़मींदार के पास थी", en: "The village's land was with one landlord" }, hint: "ZA-MIIN-DAAR, masculine and fixed for a woman. ज़ is the z of unit 4, and ⚠️ **THE ं SITS ON A LONG ई**: za-miin. Built on ज़मीन, land (unit 21) — ⚠️ **AND THE ROUTER CANNOT MATCH ज़मीन INSIDE IT**, because the spelling changes: ज़मीन ends in न, this word writes ं instead. ⚠️ A historical office as well as a live word, which is why the example is past habitual." },
        { id: "hi-u128l2-rajistrii", type: "vocab", front: "रजिस्ट्री", reading: "rajistrii", meaning: "registration of a sale deed", accept: ["getting a sale entered in the government record"], example: { jp: "रजिस्ट्री हो जाने के बाद ही मकान खरीदार का होता है।", en: "Only after the registration is done is the house the buyer's." }, drill: { jp: "रजिस्ट्री के बाद मकान खरीदार का होता है", en: "After registration the house is the buyer's" }, hint: "RA-JIS-TRII — ⚠️ FEMININE. स्ट्र is a THREE-CONSONANT STACK — स, a RETROFLEX ट and र, all under halants (unit 6), the heaviest cluster in this block. ⚠️ A loanword that does NOT gloss to its reading (§9). Also means registered post; this card takes the property sense." },
        { id: "hi-u128l2-naamaantaran", type: "vocab", front: "नामांतरण", reading: "naamaantaran", meaning: "transfer of a name in the record", accept: ["getting the owner's name changed in the official register"], example: { jp: "पिता के बाद बेटे के नाम नामांतरण करना पड़ता है।", en: "After the father, the transfer of the name to the son has to be got done." }, drill: { jp: "बेटे के नाम नामांतरण करना पड़ता है", en: "The name has to be transferred to the son" }, hint: "NAA-MAAN-TA-RAN, masculine, and the final ण is the RETROFLEX n. नाम, a name (unit 1), plus अंतरण, transfer — the अ of अंतरण absorbs into the ा, which is why ⚠️ **नाम IS NOT A MATCHABLE STRING HERE**: the word reads नामां, not नाम+अं. ⚠️ Not रजिस्ट्री, the card before: the रजिस्ट्री records a SALE, नामांतरण only changes whose name is against it." },
        { id: "hi-u128l2-aavantan", type: "vocab", front: "आवंटन", reading: "aavantan", meaning: "allotment", accept: ["the giving out of a plot or house by an authority"], example: { jp: "सरकार ने तीन सौ भूखंडों का आवंटन किया।", en: "The government made an allotment of three hundred plots." }, drill: { jp: "सरकार ने तीन सौ भूखंडों का आवंटन किया", en: "The government allotted three hundred plots" }, hint: "AA-VAN-TAN, masculine, opening on the independent long आ (unit 1). The ं before ट is the matching retroflex nasal (§1) and the ट is RETROFLEX, merged to t. ⚠️ **आरक्षण, a reservation, IS ANOTHER UNIT'S WORD** and is not used anywhere in this block — a cross-block line recorded in unit124.js §C8. आवंटन is what happens AFTER one." },
        { id: "hi-u128l2-paitrik", type: "vocab", front: "पैतृक", reading: "paitrik", meaning: "ancestral", accept: ["come down from the father's side"], example: { jp: "यह पैतृक मकान सौ साल पुराना है।", en: "This ancestral house is a hundred years old." }, drill: { jp: "यह पैतृक मकान सौ साल पुराना है", en: "This ancestral house is a hundred years old" }, hint: "PAI-TRIK — an ADJECTIVE, so no gender change: पैतृक मकान, पैतृक जायदाद. 🚨 **THE ृ MĀTRĀ, WHICH READS ri AND IS ऋ's** — the sixth word in the whole course to use it, after कृपया (unit 7), पृष्ठभूमि, वृद्धि, प्रवृत्ति and पुनरावृत्ति (all B1). unit1.js §3 forbids carding the bare mark, so it is hinted instead. Built on पिता (unit 10), whose Sanskritic stem is पितृ." },
      ],
    },
    {
      id: "hi-u128l3",
      unit: 128,
      lesson: 3,
      title: "Buying it, splitting it",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about a mortgage, ownership, the buyer, a partition among heirs, and whether a property is private or up for sale.",
      items: [
        { id: "hi-u128l3-bandhak", type: "vocab", front: "बंधक", reading: "bandhak", meaning: "a mortgage", accept: ["property pledged to a bank against a loan"], example: { jp: "मकान बैंक के पास बंधक रखा गया है।", en: "The house has been put in mortgage with the bank." }, drill: { jp: "मकान बैंक के पास बंधक है", en: "The house is mortgaged with the bank" }, hint: "BAN-DHAK, masculine, consonant-final, and the ं before ध is the matching DENTAL nasal (§1), ध with a puff of air. From बाँधना, to tie (unit 20) — the property is tied to the loan. ⚠️ Not गिरवी (unit 85), which is a moveable thing left with a lender: a बंधक is land or a house, and it stays where it is." },
        { id: "hi-u128l3-svaamitva", type: "vocab", front: "स्वामित्व", reading: "svaamitva", meaning: "ownership", accept: ["the right of being the owner"], example: { jp: "कागज़ पूरे न हों तो स्वामित्व साबित करना मुश्किल है।", en: "If the papers are incomplete it is hard to prove ownership." }, drill: { jp: "कागज़ के बिना स्वामित्व साबित नहीं होता", en: "Ownership is not proved without papers" }, hint: "SVAA-MI-TVA, masculine. 🚨 **TWO STACKS AND IT OPENS ON ONE**: स्व at the front and त्व at the end, and त्व KEEPS ITS OWN a — svaamitva, like सत्व. Built on स्वामी, the owner, which is inside भूस्वामी (l2). The -त्व suffix makes an abstract, and ⚠️ unlike -ता it is MASCULINE." },
        { id: "hi-u128l3-khariidaar", type: "vocab", front: "खरीदार", reading: "khariidaar", meaning: "the party buying a property", accept: ["a purchaser in a sale deed"], example: { jp: "खरीदार ने आधा पैसा पहले ही दे दिया।", en: "The buyer paid half the money in advance." }, drill: { jp: "खरीदार ने आधा पैसा पहले दिया", en: "The buyer paid half the money in advance" }, hint: "KHA-RII-DAAR, masculine and FIXED for a woman. Built on खरीदना, to buy (unit 18) — ⚠️ **AND THE ROUTER CANNOT MATCH IT**, because खरीद is followed by ा and then र, and खरीदना is not a string here. ⚠️ **THE GLOSS NAMES PROPERTY BECAUSE ग्राहक (unit 18) OWNS \"a buyer\"** — a ग्राहक walks into a shop, a खरीदार signs a deed." },
        { id: "hi-u128l3-batvaaraa", type: "vocab", front: "बटवारा", reading: "batvaaraa", meaning: "partition among heirs", accept: ["the splitting of a joint holding between those entitled"], example: { jp: "बटवारा हो जाने के बाद बेटों की बात बंद हो गई।", en: "After the partition the brothers stopped speaking." }, drill: { jp: "यह बटवारा दस साल पहले हुआ", en: "This partition happened ten years ago" }, hint: "BAT-VAA-RAA, masculine and regular -ा, so the oblique is बटवारे. The ट is RETROFLEX, merged to t (§1b). From बाँटना, to divide. ⚠️ Not हिस्सा (unit 19), which is one share: बटवारा is the EVENT that makes the shares, and it is the word Indian family law turns on." },
        { id: "hi-u128l3-nijii", type: "vocab", front: "निजी", reading: "nijii", meaning: "privately owned", accept: ["belonging to a person and not to the state"], example: { jp: "यह रास्ता निजी है, इसलिए यहाँ ट्रक नहीं जा सकता।", en: "This road is private, so a truck cannot go here." }, drill: { jp: "यह रास्ता निजी है", en: "This road is private" }, hint: "NI-JII — an ADJECTIVE that does not change for gender, even though it ends in -ी: निजी मकान, निजी जायदाद. ⚠️ THE ि IS SHORT and the ी LONG: ni-jii. 🚨 **THE EXACT OPPOSITE OF सार्वजनिक (unit 93)**, and the two are the pair every Indian signboard uses." },
        { id: "hi-u128l3-bikaauu", type: "vocab", front: "बिकाऊ", reading: "bikaauu", meaning: "up for sale", accept: ["offered to be sold"], example: { jp: "इस गली में एक बिकाऊ मकान है।", en: "There is a house for sale at the end of the street." }, drill: { jp: "गली में एक बिकाऊ मकान है", en: "There is a house for sale in the street" }, hint: "BI-KAA-UU — an ADJECTIVE, no gender change, and ⚠️ **THE FINAL ऊ IS LONG and is not a noun ending**: bi-kaa-uu. From बिकना, to be sold. ⚠️ It is what a board on the चारदीवारी (l1) says, and the आख़िर in the example is unit 29's." },
      ],
    },
    {
      id: "hi-u128l4",
      unit: 128,
      lesson: 4,
      title: "Losing it, and living without it",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about eviction, encroachment and a dilapidated building, and about homeless people, a shelter and the neighbourhood around it.",
      items: [
        { id: "hi-u128l4-bedakhlii", type: "vocab", front: "बेदखली", reading: "bedakhlii", meaning: "eviction", accept: ["being put out of a property by order"], example: { jp: "किराया न देने पर बेदखली का आदेश आ गया।", en: "On not paying the rent, an eviction order came." }, drill: { jp: "किराया न देने पर बेदखली हुई", en: "There was an eviction for not paying the rent" }, hint: "BE-DAKH-LII — ⚠️ FEMININE. बे- (without) plus दखल, possession. 🚨 **AUTHORED WITHOUT THE NUKTA ON ख, ON PURPOSE** — क़ ख़ ग़ appear in zero of the language's 2,328 fronts and are carded nowhere (unit1.js §7), so a learner has never been shown one; कारखाना (unit 60) and तहखाना (unit 94) spell plain for the same reason. ⚠️ Not कब्ज़ा (unit 89), which is taking possession: बेदखली is losing it." },
        { id: "hi-u128l4-atikraman", type: "vocab", front: "अतिक्रमण", reading: "atikraman", meaning: "encroachment", accept: ["building or spreading onto land that is not yours"], example: { jp: "सड़क पर अतिक्रमण हटाने के लिए सरकार आई।", en: "The government came to remove the encroachment on the road." }, drill: { jp: "सड़क पर अतिक्रमण हटाया गया", en: "The encroachment on the road was removed" }, hint: "A-TI-KRA-MAN, masculine, and the final ण is the RETROFLEX n. क्र is a stacked conjunct (unit 6). अति-, beyond, plus क्रमण, stepping — stepping beyond the line. ⚠️ Not चोरी (unit 130): an अतिक्रमण takes SPACE rather than a thing, and the thing taken cannot be carried away." },
        { id: "hi-u128l4-jarjar", type: "vocab", front: "जर्जर", reading: "jarjar", meaning: "dilapidated", accept: ["so old and worn that it is ready to fall"], example: { jp: "वह जर्जर मकान किसी दिन गिर जाएगा।", en: "That dilapidated house will fall down some day." }, drill: { jp: "वह जर्जर मकान किसी दिन गिरेगा", en: "That dilapidated house will fall some day" }, hint: "JAR-JAR — an ADJECTIVE, no gender change, and ⚠️ **THE SAME SYLLABLE TWICE**: jar-jar, with a र closing the first and opening the second. ⚠️ Stronger than पुराना (unit 6): a पुराना मकान is merely old, a जर्जर one is unsafe — and once it is a खंडहर (unit 50) it has already fallen." },
        { id: "hi-u128l4-beghar", type: "vocab", front: "बेघर", reading: "beghar", meaning: "homeless", accept: ["left with nowhere to live"], example: { jp: "बेदखली के बाद पूरा परिवार बेघर हो गया।", en: "After the eviction the whole family became homeless." }, drill: { jp: "बेदखली के बाद परिवार बेघर हो गया", en: "After the eviction the family became homeless" }, hint: "BE-GHAR — an ADJECTIVE, no gender change: बेघर आदमी, बेघर औरत. बे- (without) plus घर, a home (unit 2) — ⚠️ **AND घर SITS INSIDE IT WITH THE ROUTER UNABLE TO MATCH IT**, because the े before it belongs to बे and the ब before that is a letter. The same बे- as बेईमान (unit 81) and बेदखली, two cards back." },
        { id: "hi-u128l4-aashray", type: "vocab", front: "आश्रय", reading: "aashray", meaning: "a shelter", accept: ["somewhere to take cover or be taken in", "refuge given to someone"], example: { jp: "सर्दी में बेघर लोगों को आश्रय दिया जाता है।", en: "In the cold, homeless people are given shelter." }, drill: { jp: "सर्दी में बेघर लोगों को आश्रय मिलता है", en: "Homeless people get shelter in the cold" }, hint: "AASH-RAY, masculine, opening on the independent long आ. श्र is a stacked conjunct (unit 6) — श with र under it, said in one breath, the same stack as श्रमिक (unit 125). ⚠️ The frame is आश्रय देना or आश्रय मिलना. Not मकान (unit 86): an आश्रय is temporary by definition." },
        { id: "hi-u128l4-mohallaa", type: "vocab", front: "मोहल्ला", reading: "mohallaa", meaning: "a city neighbourhood", accept: ["the few streets a person is known in"], example: { jp: "पूरे मोहल्ले को पता था कि मकान बिकाऊ है।", en: "The whole neighbourhood knew the house was for sale." }, drill: { jp: "यह मोहल्ला बहुत पुराना है", en: "This neighbourhood is very old" }, hint: "MO-HAL-LAA, masculine and regular -ा, so the oblique is मोहल्ले — which is the form in BOTH sentences here. GEMINATION in ल्ल: you hear both l's. ⚠️ The EXAMPLE uses the oblique मोहल्ले and the DRILL the direct मोहल्ला, so a learner meets both. ⚠️ **THREE WORDS FOR WHERE PEOPLE LIVE TOGETHER:** कॉलोनी (unit 86) is laid out to one plan, बस्ती (unit 50) is a settlement that grew, मोहल्ला is the handful of streets inside a city where everybody knows you." },
      ],
    },
  ],
};
