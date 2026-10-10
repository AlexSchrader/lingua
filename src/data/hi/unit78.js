// HI Unit 78 — समाज में अपनी जगह ("One's place in society") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8, then
// unit74.js §B1–§B7.
//
// 🚨 RETHEMED SLOT (scaffold: "Relationships and society") — lint hard-errors on
// that title, and BOTH halves of it are half-spent, which is why the slot had to
// be re-aimed rather than kept:
//   A1 u10 परिवार      → परिवार, रिश्तेदार, बेटा, बेटी, भाई, बहन, पति, पत्नी,
//                         शादी, जवान, बूढ़ा, अकेला
//   A2 u59 (relations)  → रिश्ता, दोस्ती, तलाक, बहू, दामाद, ससुराल, गोद, मौत
//   A2 u42 (the state)  → समाज, जनता, नागरिक, सरकार, कानून, अदालत
// The FAMILY TREE is complete and SOCIETY-AS-THE-STATE is complete. What is
// missing is the rung between them: how a person is PLACED among other people —
// caste, class, discrimination, equality, standing, the circle one moves in — and
// the life events the family unit skipped. That is the B1 step: the learner stops
// naming relatives and starts saying why two people are not treated the same.
//
// ⚠️ FIVE FRONTS WANTED AND REFUSED, three of them on GLOSS and not on the front:
//   • अधिकार ("a right") — हक (u32) is "an entitlement" and ACCEPTS "a rightful
//     claim". DROPPED. Hindi's two words for a right cannot both be carded.
//   • सम्मान — refused in u82 of this block for colliding with आदर/इज़्ज़त, and
//     refused here for the same reason. NAMED FOR A LATER BLOCK.
//   • बिरादरी — would gloss "the community one belongs to", which is what
//     समुदाय carries here. DROPPED.
//   • TAKEN outright: तलाक, बहू, दामाद, ससुराल, गोद, दोस्ती, मौत, जन्म, रिश्ता,
//     पीढ़ी, झगड़ा, लगाव, पड़ोसी, मेहमान, दर्जा. **Fifteen.**
//   • NAMED FOR A LATER BLOCK, free and unspent: सौतेला, मेलजोल, तहज़ीब,
//     गोत्र, कुटुंब.
//
// ⚠️ GLOSSES DELIBERATELY NARROWED, because the obvious word collides through
// `normalizeMeaning` (unit1.js §9). Do not "tidy" these:
//   समुदाय     "a group of people with the same faith or origin" — समाज (u42)
//              ACCEPTS "the community".
//   बुज़ुर्ग     "an elder of a family"                            — बूढ़ा (u10) IS
//              "elderly".
//   सहेली      "a girl's close friend"                           — दोस्त (u7)
//              accepts "mate" and "pal".
//   प्रतिष्ठा    "prestige"                                        — इज़्ज़त, carded
//              in u82 of THIS BLOCK, is "the respect a person is owed". The two
//              had to be split inside one seat's range, which is exactly why the
//              allocation put the adjacent themes in one block.
//
// 🚨 ONE SUBSTRING TRAP AND TWO NON-TRAPS, checked with `findWholeWord`'s real
// boundary test (`isLetter` is /\p{L}/ only, so a MĀTRĀ does NOT block a match):
//   • **पड़ोसी (u15l2) ⊃ पड़ोस** — ी is \p{M}. FIRES. Checked both directions: no
//     u15 drill contains पड़ोस on its own, and this card's drill does not contain
//     पड़ोसी.
//   • **सामाजिक does NOT contain समाज** (u42). The taught front is स+म+ा+ज and
//     this word is स+ा+म+ा+ज+ि+क — the ा after the स breaks the string. Same
//     shape as शारीरिक/शरीर in u77, and the same reason it is safe.
//   • **प्रजाति (u75, this block) ⊃ जाति is BLOCKED**, because the character
//     before it is र, which IS a letter. u75's hint says so from the other side.
//   • अपनापन ⊃ अपना fires and is harmless: अपना is a FREE word (unit1.js), not a
//     card, so there is no second item for a cloze to confuse it with.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: सगाई, विधवा, सहेली, जाति, बराबरी, छुआछूत, प्रतिष्ठा, सुलह.
//   **छुआछूत and सुलह are CONSONANT-FINAL**, so nothing in the shape says so —
//   सुलह हुई, not हुआ. **विधवा is feminine and ends in -ा**, which is the reverse
//   of §4's rule and is predictable only from the meaning.
//   MASCULINE: दहेज, खानदान, मेज़बान, पड़ोस, अपनापन, दायरा, वंश, वर्ग, भेदभाव,
//   समुदाय, बुज़ुर्ग, अनाथ. **प्रेमी is MASCULINE despite the -ी**, the पानी/हाथी
//   class of §4, and its feminine is प्रेमिका — named here, used in no sentence.
//   ADJECTIVES: **कुँवारा AGREES** (कुँवारा भाई, कुँवारी बहन), because it ends in
//   -आ. **सामाजिक, मिलनसार and अनाथ are INVARIANT** (unit53's rule); अनाथ is both
//   a noun and an invariant adjective.
// RETROFLEX/DENTAL (§1b): one word carries both and needs no hatch. प्रतिष्ठा
// pratishthaa has the RETROFLEX ष्ठ with no dental प्रतिस्था in the corpus;
// छुआछूत chhuaachhuut and अनाथ anaath are DENTAL with no retroflex twin; दायरा
// daayraa is DENTAL द. Checked against all 1,536 readings: 24 new readings, 24
// distinct, zero collisions.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT78 = {
  id: "hi-u78",
  lang: "hi",
  title: "समाज में अपनी जगह",
  order: 78,
  stage: "b1",
  lessons: [
    {
      id: "hi-u78l1",
      unit: 78,
      lesson: 1,
      title: "Before and after the wedding",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about an engagement, a dowry, being unmarried, a widow, a lover and the family somebody comes from.",
      items: [
        { id: "hi-u78l1-sagaaii", type: "vocab", front: "सगाई", reading: "sagaaii", meaning: "an engagement to marry", accept: ["being promised in marriage", "the promise made before a wedding", "a betrothal"], example: { jp: "शादी से छह महीने पहले उनकी सगाई हुई।", en: "Their engagement took place six months before the wedding." }, drill: { jp: "शादी से पहले उनकी सगाई हुई", en: "Their engagement took place before the wedding" }, hint: "SA-GAA-II — ⚠️ FEMININE: सगाई हुई, not हुआ. Built off सगा, one's own blood relation, which this course does not card. Not शादी (unit 10), the marriage itself — the सगाई is the promise, months or years earlier." },
        { id: "hi-u78l1-dahej", type: "vocab", front: "दहेज", reading: "dahej", meaning: "a dowry", accept: ["what a bride's family is made to give", "money and goods demanded at a marriage", "the goods a bride is made to bring"], example: { jp: "दहेज माँगना अब कानून में मना है।", en: "Demanding a dowry is now forbidden in law." }, drill: { jp: "दहेज माँगना कानून में मना है", en: "Demanding a dowry is forbidden in law" }, hint: "DA-HEJ, masculine, consonant-final, DENTAL द: दो दहेज. ⚠️ The word carries its argument with it — दहेज प्रथा is what Hindi calls the custom, and it has been illegal in India since 1961, which is why the example says so." },
        { id: "hi-u78l1-kunvaaraa", type: "vocab", front: "कुँवारा", reading: "kunvaaraa", meaning: "unmarried", accept: ["not married at all", "who has never married", "still single"], example: { jp: "वह चालीस साल का है और अब भी कुँवारा है।", en: "He is forty and still unmarried." }, drill: { jp: "वह चालीस साल का है और कुँवारा है", en: "He is forty and unmarried" }, hint: "KUN-VAA-RAA — ⚠️ IT AGREES, because it ends in -आ: कुँवारा भाई, कुँवारी बहन. The ँ is written n (§1). Of a person who has never married, never of a divorce — that is तलाकशुदा, which this course does not card." },
        { id: "hi-u78l1-vidhvaa", type: "vocab", front: "विधवा", reading: "vidhvaa", meaning: "a widow", accept: ["a woman whose husband has died", "a woman left by her husband's death", "a wife whose husband is dead"], example: { jp: "पति की मौत के बाद वह विधवा हो गई।", en: "After her husband's death she became a widow." }, drill: { jp: "वह कई साल से विधवा है", en: "She has been a widow for several years" }, hint: "VIDH-VAA — ⚠️ FEMININE AND IT ENDS IN -ा, which is the reverse of §4's rule: you can only know this one from the meaning. DENTAL ध with a puff of air. The masculine is विधुर, which Hindi barely uses and this course does not card." },
        { id: "hi-u78l1-premii", type: "vocab", front: "प्रेमी", reading: "premii", meaning: "a lover", accept: ["a man in love with somebody", "a sweetheart", "a man who is in love"], example: { jp: "कहानी में दोनों प्रेमी गाँव छोड़ देते हैं।", en: "In the story the two lovers leave the village." }, drill: { jp: "दोनों प्रेमी शहर चले गए", en: "The two lovers went off to the city" }, hint: "PRE-MII — ⚠️ MASCULINE despite the -ी, the पानी/हाथी class of §4: प्रेमी आया, not आई. The feminine is प्रेमिका. Built on प्रेम, love, which this course does not card — प्यार (unit 6) holds that slot, so the noun for the PERSON had to be taught on its own." },
        { id: "hi-u78l1-khaandaan", type: "vocab", front: "खानदान", reading: "khaandaan", meaning: "the family one comes from", accept: ["one's house and its forebears", "a family taken over generations", "the house one belongs to"], example: { jp: "उनका खानदान इस शहर में सौ साल से रहता है।", en: "Their family has lived in this city for a hundred years." }, drill: { jp: "उनका खानदान इस शहर में पुराना है", en: "Their family is an old one in this city" }, hint: "KHAAN-DAAN, masculine, consonant-final, DENTAL द. Plain ख — unit 1 §7 keeps ख़ uncarded. ⚠️ Not परिवार (unit 10), which is the people under one roof now: a खानदान is the whole line, living and dead." },
      ],
    },
    {
      id: "hi-u78l2",
      unit: 78,
      lesson: 2,
      title: "One's own people",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about a close friend, a host, the neighbourhood, a sense of belonging, the circle one moves in, and a line of descent.",
      items: [
        { id: "hi-u78l2-sahelii", type: "vocab", front: "सहेली", reading: "sahelii", meaning: "a girl's close friend", accept: ["a woman's woman friend", "a confidante", "a close woman friend"], example: { jp: "वह अपनी सहेली के साथ बाज़ार गई।", en: "She went to the market with her close friend." }, drill: { jp: "उसकी सहेली रोज़ आती है", en: "Her close friend comes every day" }, hint: "SA-HE-LII — ⚠️ FEMININE, and the word itself is only used of a woman's friend who is also a woman. ⚠️ Glossed narrowly on purpose: दोस्त (unit 7) accepts 'mate' and 'pal'. A man's close friend is यार, which this course does not card." },
        { id: "hi-u78l2-mezbaan", type: "vocab", front: "मेज़बान", reading: "mezbaan", meaning: "a host", accept: ["the one who receives guests", "the person whose house it is", "the one who puts guests up"], example: { jp: "अच्छा मेज़बान मेहमान को पहले खाना खिलाता है।", en: "A good host feeds a guest first." }, drill: { jp: "अच्छा मेज़बान मेहमान को खाना खिलाता है", en: "A good host feeds a guest" }, hint: "MEZ-BAAN, masculine, consonant-final, with ज़ — a z. ⚠️ Read it against मेज़, a table (unit 9): the two look alike and are unrelated — मेज़बान is from Persian mez-baan, 'the keeper of the table'. The opposite of मेहमान (unit 7)." },
        { id: "hi-u78l2-paros", type: "vocab", front: "पड़ोस", reading: "paros", meaning: "the people living round about", accept: ["the houses nearby taken together", "those who live on one's own lane", "the neighbourhood round one's house"], example: { jp: "पूरे पड़ोस में सब एक दूसरे को जानते हैं।", en: "In the whole neighbourhood everyone knows everyone else." }, drill: { jp: "हमारा पड़ोस बहुत पुराना है", en: "Our neighbourhood is very old" }, hint: "PA-ROS, masculine, consonant-final. ड़ reads **r** (§1c). ⚠️ पड़ोसी, a neighbour (unit 15), is this word plus -ी — so the longer word CONTAINS this one, and neither card's sentence uses the other. पड़ोस is the place, पड़ोसी the person." },
        { id: "hi-u78l2-apnaapan", type: "vocab", front: "अपनापन", reading: "apnaapan", meaning: "a sense of belonging", accept: ["the warmth of being treated as one's own", "a feeling of closeness", "being treated as one of the family"], example: { jp: "गाँव के लोगों में अपनापन ज़्यादा होता है।", en: "There is more of a sense of belonging among village people." }, drill: { jp: "इस घर में अपनापन दिखता है", en: "A sense of belonging shows in this house" }, hint: "AP-NAA-PAN, masculine. Built on अपना, one's own, with -पन — the same suffix as अकेलापन, loneliness (unit 52), and बचपन, childhood (unit 24). Unit 81 teaches -पन as a class; here it is one word that no suffix rule generates." },
        { id: "hi-u78l2-daayraa", type: "vocab", front: "दायरा", reading: "daayraa", meaning: "the circle one moves in", accept: ["the range of people somebody deals with", "a sphere", "the circle somebody keeps to"], example: { jp: "शहर में आकर उसका दायरा बड़ा हो गया।", en: "After coming to the city his circle grew large." }, drill: { jp: "शहर आकर उसका दायरा बड़ा हो गया", en: "After coming to the city his circle grew" }, hint: "DAAY-RAA, masculine, regular -ा, DENTAL द. Originally a drawn circle, and it is still used that way in geometry. Also of the limits of a thing: इस दायरे में, 'within this scope'." },
        { id: "hi-u78l2-vansh", type: "vocab", front: "वंश", reading: "vansh", meaning: "a line of descent", accept: ["a lineage", "the descendants of one forebear", "a family line"], example: { jp: "यह मंदिर उनके वंश ने बनाया था।", en: "This temple was built by their line." }, drill: { jp: "उनका वंश बहुत पुराना है", en: "Their line is very old" }, hint: "VANSH, masculine, consonant-final: दो वंश. Its ं sits before श, which is not a stop, so §1's homorganic rule does not fire and it is plain n — like इंसान (unit 53). Narrower than खानदान (l1): a वंश is the blood line only." },
      ],
    },
    {
      id: "hi-u78l3",
      unit: 78,
      lesson: 3,
      title: "High and low",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about caste, social class, discrimination, equality, untouchability and prestige.",
      items: [
        { id: "hi-u78l3-jaati", type: "vocab", front: "जाति", reading: "jaati", meaning: "a caste", accept: ["the social group one is born into", "a birth community", "the community of one's birth"], example: { jp: "नौकरी में जाति नहीं देखी जाती।", en: "Caste is not looked at in a job." }, drill: { jp: "जाति का सवाल अब भी है", en: "The question of caste is still there" }, hint: "JAA-TI — ⚠️ FEMININE. DENTAL त. ⚠️ Read it against प्रजाति, a species (unit 75): same word with a प्र- prefix, and that one is only ever of plants and animals. A जाति is of PEOPLE, and the two are in different units for exactly that reason." },
        { id: "hi-u78l3-varg", type: "vocab", front: "वर्ग", reading: "varg", meaning: "a social class", accept: ["a layer of society", "a group of people with the same means", "a stratum of society"], example: { jp: "शहर में हर वर्ग के लोग रहते हैं।", en: "People of every class live in the city." }, drill: { jp: "यह काम हर वर्ग करता है", en: "Every class does this work" }, hint: "VARG, masculine, consonant-final: दो वर्ग. The र् is र with the halant, drawn as the hook over the ग. ⚠️ Not जाति (l3), which you are born into and cannot leave — a वर्ग is about money and work, and people move between them." },
        { id: "hi-u78l3-bhedbhaav", type: "vocab", front: "भेदभाव", reading: "bhedbhaav", meaning: "discrimination", accept: ["treating people unequally", "making a difference between people", "unequal treatment of people"], example: { jp: "स्कूल में किसी तरह का भेदभाव नहीं होना चाहिए।", en: "There should be no discrimination of any kind in a school." }, drill: { jp: "स्कूल में भेदभाव नहीं होना चाहिए", en: "There should be no discrimination in a school" }, hint: "BHED-BHAAV, masculine, consonant-final. भेद (a difference) plus भाव (a feeling) — a feeling of difference. Both भ are bh with a puff of air. ⚠️ Not फ़र्क (unit 32), which is a neutral difference: भेदभाव is a difference ACTED on." },
        { id: "hi-u78l3-baraabarii", type: "vocab", front: "बराबरी", reading: "baraabarii", meaning: "equality", accept: ["being treated the same as others", "parity", "equal standing"], example: { jp: "औरत और आदमी की बराबरी अब कानून में है।", en: "Equality between women and men is now in the law." }, drill: { jp: "औरत और आदमी की बराबरी कानून में है", en: "Equality of women and men is in the law" }, hint: "BA-RAA-BA-RII — ⚠️ FEMININE. The noun of बराबर, equal (unit 19), in a different unit — the नाप/नापना precedent. बराबर is a comparison between two things; बराबरी is a principle." },
        { id: "hi-u78l3-chhuaachhuut", type: "vocab", front: "छुआछूत", reading: "chhuaachhuut", meaning: "untouchability", accept: ["the practice of refusing to touch certain people", "caste pollution", "the barring of touch between castes"], example: { jp: "गाँवों में छुआछूत आज भी दिखती है।", en: "Untouchability is still visible in the villages today." }, drill: { jp: "छुआछूत कानून से मना है", en: "Untouchability is forbidden by law" }, hint: "CHHU-AA-CHHUUT — ⚠️ FEMININE and CONSONANT-FINAL: छुआछूत खत्म हुई, not हुआ. Built twice off छूना, to touch (unit 31) — छुआ is its perfective, which unit 31 put in IRREGULAR. The practice has been illegal in India since 1950." },
        { id: "hi-u78l3-pratishthaa", type: "vocab", front: "प्रतिष्ठा", reading: "pratishthaa", meaning: "prestige", accept: ["high standing won by achievement", "the regard a name carries", "standing in people's eyes"], example: { jp: "इस स्कूल की प्रतिष्ठा पूरे इलाके में है।", en: "This school's prestige extends over the whole area." }, drill: { jp: "उसकी प्रतिष्ठा कम नहीं हुई", en: "His prestige did not lessen" }, hint: "PRA-TISH-THAA — ⚠️ FEMININE. The ष्ठ is ष and RETROFLEX ठ stacked, said in one breath. ⚠️ Not इज़्ज़त (unit 82), which is the respect a person is OWED: प्रतिष्ठा is standing a person or a place has EARNED, and the two are deliberately glossed apart." },
      ],
    },
    {
      id: "hi-u78l4",
      unit: 78,
      lesson: 4,
      title: "Living alongside each other",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that something is social, name a community, an elder and an orphan, and talk about a reconciliation and a sociable person.",
      items: [
        { id: "hi-u78l4-saamaajik", type: "vocab", front: "सामाजिक", reading: "saamaajik", meaning: "social", accept: ["to do with society", "of people living together", "belonging to society"], example: { jp: "दहेज एक सामाजिक मुद्दा है।", en: "Dowry is a social issue." }, drill: { jp: "दहेज एक बड़ा सामाजिक मुद्दा है", en: "Dowry is a big social issue" }, hint: "SAA-MAA-JIK — ⚠️ INVARIANT: सामाजिक काम, सामाजिक बात. Built on समाज, society (unit 42), with the -इक suffix — the same shape as मानसिक and शारीरिक (unit 77). ⚠️ It does NOT contain समाज as a string: the ा after the स breaks it, checked mechanically." },
        { id: "hi-u78l4-samudaay", type: "vocab", front: "समुदाय", reading: "samudaay", meaning: "a group of people with the same faith or origin", accept: ["a body of people who belong together", "a section of the population", "a community of people"], example: { jp: "इस शहर में कई समुदाय साथ रहते हैं।", en: "Several communities live together in this city." }, drill: { jp: "हर समुदाय की अपनी भाषा है", en: "Every community has its own language" }, hint: "SA-MU-DAAY, masculine, consonant-final: दो समुदाय. DENTAL द. ⚠️ The gloss is long on purpose: समाज (unit 42) ACCEPTS 'the community'. समाज is everybody; a समुदाय is one group inside it." },
        { id: "hi-u78l4-buzurg", type: "vocab", front: "बुज़ुर्ग", reading: "buzurg", meaning: "an elder of a family", accept: ["an old person spoken of with respect", "a senior of the house", "an elderly person of the family"], example: { jp: "घर के बुज़ुर्ग की राय सब मानते हैं।", en: "Everyone accepts the opinion of the elder of the house." }, drill: { jp: "घर में एक बुज़ुर्ग रहते हैं", en: "One elder lives in the house" }, hint: "BU-ZURG, masculine, consonant-final, with ज़ — a z. The र् is the hook over the ग. ⚠️ Not बूढ़ा (unit 10), which simply means 'elderly' and can be unkind: बुज़ुर्ग is the respectful word, and that is the whole difference." },
        { id: "hi-u78l4-anaath", type: "vocab", front: "अनाथ", reading: "anaath", meaning: "an orphan", accept: ["a child with no parents", "parentless", "a child left without parents"], example: { jp: "वह बचपन से अनाथ है और चाचा के घर रहता है।", en: "He has been an orphan since childhood and lives at his uncle's house." }, drill: { jp: "अनाथ बच्चों का स्कूल यहाँ है", en: "The school for orphan children is here" }, hint: "A-NAATH — both a noun and an INVARIANT adjective: अनाथ बच्चा, अनाथ लड़की. DENTAL थ. अ- is the prefix that reverses (unit 81 teaches it as a class) on नाथ, a protector — so the word says 'with nobody over him'." },
        { id: "hi-u78l4-sulah", type: "vocab", front: "सुलह", reading: "sulah", meaning: "a making-up after a quarrel", accept: ["a reconciliation", "peace made between two sides", "a settlement after a falling-out"], example: { jp: "दो साल बाद उन दोनों में सुलह हो गई।", en: "After two years the two of them were reconciled." }, drill: { jp: "दो साल बाद उन दोनों में सुलह हुई", en: "After two years the two of them made up" }, hint: "SU-LAH — ⚠️ FEMININE and CONSONANT-FINAL: सुलह हुई, not हुआ. The frame is X और Y में सुलह होना. Not फ़ैसला (unit 30), a decision: a सुलह is two sides agreeing to stop, with nobody deciding anything." },
        { id: "hi-u78l4-milansaar", type: "vocab", front: "मिलनसार", reading: "milansaar", meaning: "sociable", accept: ["easy with people", "that mixes readily with others", "friendly with everybody"], example: { jp: "नया पड़ोसी बहुत मिलनसार आदमी है।", en: "The new neighbour is a very sociable man." }, drill: { jp: "वह बहुत मिलनसार लड़की है", en: "She is a very sociable girl" }, hint: "MI-LAN-SAAR — ⚠️ INVARIANT: मिलनसार आदमी, मिलनसार औरत. Built on मिलना, to meet (unit 12), plus -सार. Not प्यारा, dear (unit 27), which is how others feel about you — मिलनसार is how easily you go towards them." },
      ],
    },
  ],
};
