// HI Unit 132 — पर्यटन और मेज़बानी ("Tourism and hosting") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 3 (u124–u136). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, then unit124.js §C1–§C11 — this block's own record.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 12 (B2)"). Theme ASSIGNED CENTRALLY at
// **2 of 18 taken** — and like u131, the slot number understates the field. This
// unit's own probe of 26 travel candidates found **13 already carded**: u29 gave
// सफ़र, यात्री, ठहरना, सैर and नक्शा; u9 होटल, टिकट and लाइट; u7 मेहमान and
// स्वागत; u78 मेज़बान; u33 पासपोर्ट; u92 वीज़ा; u50 किला, महल and मेला; u54
// झरना and नज़ारा; u74 दृश्य; u90 तीर्थ and स्मारक; u75 तट; u69 पड़ाव.
//
// 🚨 TWO CROSS-BLOCK / CROSS-UNIT LINES, BOTH HONOURED:
//   • **आरक्षण IS BLOCK 1's (u109), IN THE CASTE-RESERVATION SENSE ONLY.** It is a
//     homograph, and both this unit AND block 2's u112 would have wanted it as
//     "a booking". **NEITHER MAY CARD IT.** This unit cards **बुकिंग** instead —
//     the loanword, which is what a hotel desk actually says.
//   • **स्मारक and तीर्थ are u90's**, so this unit's sights lesson names the
//     SANCTUARY and the CAVE country rather than the monument.
//
// ⚠️ TWO REFUSALS:
//   • **गुफ़ा ("a cave") WAS REFUSED** — गुफा is already carded without the nukta,
//     and the nukta-and-anusvāra fold caught it where `front-taken.mjs` passed
//     (unit124.js §C3). सफ़ारी took the slot.
//   • **शयनकक्ष ("a bedroom") WAS REFUSED** — कमरा@u5 owns the string, and no
//     honest gloss separated them. अतिथिगृह took the slot.
//
// ⚠️ **मेज़बानी IS CARDED THOUGH मेज़बान@u78 IS TOO, AND THE PRECEDENT IS EXACT:**
// a noun and the abstract noun built from it are two lexemes, which is why the
// course already carries मज़दूर@u28 beside मज़दूरी@u76. ⚠️ The ROUTER CAN match
// मेज़बान inside मेज़बानी, because the ी after it is a mātrā — the छात्रावास
// shape (unit 97) — so the hint says so on the card.
//
// ⚠️ GENDER: FEMININE — मेज़बानी, सराय, बुकिंग, निशानी. MASCULINE — पर्यटन,
// पर्यटक, भ्रमण, दौरा, सत्कार, आवास, रिसॉर्ट, रिसेप्शन, कुली, अतिथिगृह, विश्राम,
// ठिकाना, गाइड, अभयारण्य, पर्वतारोहण, नौकायन, डेरा. धर्मशाला and सफ़ारी are
// FEMININE despite looking otherwise — ⚠️ **सफ़ारी is -ी and FEMININE, while
// धर्मशाला is -आ and FEMININE AGAINST THE RULE** (unit1 §4). दर्शनीय is an
// ADJECTIVE. पर्यटक, कुली and गाइड are FIXED for a woman.
export const HI_UNIT132 = {
  id: "hi-u132",
  lang: "hi",
  title: "पर्यटन और मेज़बानी",
  order: 132,
  stage: "b2",
  lessons: [
    {
      id: "hi-u132l1",
      unit: 132,
      lesson: 1,
      title: "Going to look at things",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about tourism and a tourist, a sightseeing round and a tour, say a place is worth seeing, and bring a keepsake back.",
      items: [
        { id: "hi-u132l1-paryatan", type: "vocab", front: "पर्यटन", reading: "paryatan", meaning: "tourism", accept: ["travel for pleasure taken as a trade"], example: { jp: "पहाड़ के इस राज्य की पूरी कमाई पर्यटन से होती है।", en: "This hill state's whole earning comes from tourism." }, drill: { jp: "इस राज्य की कमाई पर्यटन से होती है", en: "This state's earning comes from tourism" }, hint: "PAR-YA-TAN, masculine. र्य writes the र as a hook over the य (unit 6), so the first syllable closes on र and the second opens on य — par-ya, never pa-rya. ⚠️ Not सफ़र (unit 29), which is one journey: पर्यटन is the whole business, which is why a राज्य earns from it." },
        { id: "hi-u132l1-paryatak", type: "vocab", front: "पर्यटक", reading: "paryatak", meaning: "a tourist", accept: ["somebody travelling to see places"], example: { jp: "सर्दी में यहाँ विदेश से भी पर्यटक आते हैं।", en: "In winter tourists come here even from abroad." }, drill: { jp: "सर्दी में यहाँ विदेश से पर्यटक आते हैं", en: "In winter tourists come here from abroad" }, hint: "PAR-YA-TAK, masculine and FIXED for a woman. 🚨 **THE CARD BEFORE WITH ONE LETTER CHANGED** — न to क, which is Hindi's ordinary -क agent ending (पाठक, लेखक). ⚠️ AND पर्यटन is NOT a matchable string here, because only the shared पर्यट is common and the final letters differ. ⚠️ Not यात्री (unit 29), who may be going to work." },
        { id: "hi-u132l1-bhraman", type: "vocab", front: "भ्रमण", reading: "bhraman", meaning: "a round made to see places", accept: ["going round from sight to sight"], example: { jp: "सुबह के भ्रमण में पूरा पुराना शहर दिख गया।", en: "On the morning round the whole old city was seen." }, drill: { jp: "सुबह के भ्रमण में पुराना शहर दिख गया", en: "The old city was seen on the morning round" }, hint: "BHRA-MAN, masculine. 🚨 **भ्र IS A THREE-PIECE OPENING** — भ with a puff of air, then र under a halant, then the vowel: bhra, one syllable. The final ण is the RETROFLEX n. ⚠️ **THE GLOSS IS LONG BECAUSE सैर (unit 29) OWNS \"an outing\"** — a सैर is for the walk's own sake, a भ्रमण goes from sight to sight." },
        { id: "hi-u132l1-dauraa", type: "vocab", front: "दौरा", reading: "dauraa", meaning: "a tour of several places", accept: ["a trip covering a number of stops in order"], example: { jp: "मंत्री का दौरा तीन शहरों में होगा।", en: "The minister's tour will cover three cities." }, drill: { jp: "मंत्री का दौरा तीन शहरों में होगा", en: "The minister's tour will cover three cities" }, hint: "DAU-RAA, masculine and regular -ा, so the oblique is दौरे. 🚨 THE DIPHTHONG औ, ONE vowel (unit 3) — dau, never da-u. ⚠️ **A HOMOGRAPH A LEARNER WILL MEET IN A HOSPITAL**: दिल का दौरा is a heart attack, and दौरा alone can mean a fit. This card takes the travel sense; the hint names the other so nobody is ambushed." },
        { id: "hi-u132l1-darshaniiy", type: "vocab", front: "दर्शनीय", reading: "darshaniiy", meaning: "worth going to see", accept: ["worth a visit"], example: { jp: "इस शहर में कई दर्शनीय जगहें हैं।", en: "There are several places worth seeing in this city." }, drill: { jp: "इस शहर में कई दर्शनीय जगहें हैं", en: "There are several sights in this city" }, hint: "DAR-SHA-NIIY — an ADJECTIVE, so no gender change: दर्शनीय जगह, दर्शनीय मंदिर. र्श writes the र as a hook over the श (unit 6), and ⚠️ **THE ई IS LONG WITH A य AFTER IT**: nii-y, closing on a consonant. Built on दर्शन, a viewing — the same -ीय ending as नवीकरणीय (unit 126)." },
        { id: "hi-u132l1-nishaanii", type: "vocab", front: "निशानी", reading: "nishaanii", meaning: "a keepsake brought back from a trip", accept: ["a small thing kept to remember something by", "a token"], example: { jp: "वह हर दौरे से एक छोटी निशानी लेकर आती है।", en: "She brings back one small keepsake from every tour." }, drill: { jp: "वह हर दौरे से एक निशानी लाती है", en: "She brings a keepsake from every tour" }, hint: "NI-SHAA-NII — ⚠️ FEMININE, and ⚠️ THE ि IS SHORT while the final ी is long: ni-shaa-nii. Built on निशान, a mark (unit 73) — ⚠️ **AND निशान SITS INSIDE IT WITH THE ROUTER ABLE TO MATCH IT**, because the ी after it is a mātrā. A mark and a keepsake are two lexemes; the hint is here so a drill cannot blank the shorter one unnoticed." },
      ],
    },
    {
      id: "hi-u132l2",
      unit: 132,
      lesson: 2,
      title: "Being a host",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about hosting and the courtesy owed to a guest, and name four kinds of place to stay — from a pilgrims' rest house to a resort.",
      items: [
        { id: "hi-u132l2-mezbaanii", type: "vocab", front: "मेज़बानी", reading: "mezbaanii", meaning: "hosting a guest", accept: ["putting someone up and looking after them"], example: { jp: "गाँव की मेज़बानी शहर से बहुत अलग होती है।", en: "A village's hosting is very different from a city's." }, drill: { jp: "गाँव की मेज़बानी शहर से अलग होती है", en: "A village's hosting is different from a city's" }, hint: "MEZ-BAA-NII — ⚠️ FEMININE. ज़ is the z of unit 4. Built on मेज़बान, a host (unit 78) — 🚨 **AND THE ROUTER CAN MATCH मेज़बान INSIDE IT**, because the ी after it is a mātrā. A noun plus its abstract are two lexemes and both may be carded, exactly as मज़दूर (unit 28) and मज़दूरी (unit 76) already are." },
        { id: "hi-u132l2-satkaar", type: "vocab", front: "सत्कार", reading: "satkaar", meaning: "the courtesy shown to a guest", accept: ["the honour and attention a visitor is given"], example: { jp: "मेहमान का सत्कार करना यहाँ सबसे बड़ी बात मानी जाती है।", en: "Showing courtesy to a guest is reckoned the biggest thing here." }, drill: { jp: "मेहमान का सत्कार करना बड़ी बात है", en: "Showing a guest courtesy is a big thing" }, hint: "SAT-KAAR, masculine, consonant-final, and त्क is a DENTAL त stacked under a halant with क (unit 6). ⚠️ Not स्वागत (unit 7), which is the moment of WELCOME at the door: सत्कार is everything that comes after it — the tea, the room, the refusal to let you pay." },
        { id: "hi-u132l2-aavaas", type: "vocab", front: "आवास", reading: "aavaas", meaning: "accommodation", accept: ["somewhere arranged for people to stay"], example: { jp: "पर्यटकों के आवास का इंतज़ाम सरकार करती है।", en: "The government arranges the tourists' accommodation." }, drill: { jp: "पर्यटकों के आवास का इंतज़ाम होता है", en: "Accommodation is arranged for the tourists" }, hint: "AA-VAAS, masculine, opening on the independent long आ. -वास is a dwelling, the same half as छात्रावास (unit 97), प्रवास (unit 92) and उपवास (unit 129) — ⚠️ **FOUR -वास WORDS IN THE COURSE AND THE FIRST HALF DECIDES EVERYTHING**. ⚠️ Not मकान (unit 86): an आवास is arranged for somebody, not owned." },
        { id: "hi-u132l2-dharmshaalaa", type: "vocab", front: "धर्मशाला", reading: "dharmshaalaa", meaning: "free lodging at a place of pilgrimage", accept: ["a rest house kept for pilgrims at no charge"], example: { jp: "तीर्थ के पास की धर्मशाला में पैसा नहीं लगता।", en: "At the rest house near the pilgrimage place there is no charge." }, drill: { jp: "तीर्थ के पास धर्मशाला में पैसा नहीं लगता", en: "There is no charge at the rest house near the shrine" }, hint: "DHARM-SHAA-LAA — ⚠️ **FEMININE AND -आ, AGAINST THE RULE** (unit1 §4): पुरानी धर्मशाला. धर्म, religion, plus शाला, a hall — and ध carries a puff of air. ⚠️ Not होटल (unit 9): a धर्मशाला charges nothing, which is the whole institution, and it stands beside a तीर्थ (unit 90)." },
        { id: "hi-u132l2-saraay", type: "vocab", front: "सराय", reading: "saraay", meaning: "an old roadside lodging for travellers", accept: ["a caravanserai", "an inn on an old trade road"], example: { jp: "पुरानी सड़क पर अब भी एक सराय बची है।", en: "An old inn still survives on the old road." }, drill: { jp: "पुरानी सड़क पर एक सराय बची है", en: "An inn survives on the old road" }, hint: "SA-RAAY — ⚠️ FEMININE, and it closes on the य, so sa-raay and not sa-raa-ya. ⚠️ **THE GLOSS IS LONG BECAUSE होटल (unit 9) OWNS \"an inn\"**, and the difference is historical: a सराय is Mughal-road furniture, and the word survives mostly in place names. A learner meets it on a signboard before a menu." },
        { id: "hi-u132l2-risort", type: "vocab", front: "रिसॉर्ट", reading: "risort", meaning: "a resort", accept: ["a place built to be stayed in for its own sake"], example: { jp: "झील के किनारे नया रिसॉर्ट बन गया है।", en: "A new resort has been built on the lake shore." }, drill: { jp: "झील के किनारे नया रिसॉर्ट बना है", en: "A new resort has been built by the lake" }, hint: "RI-SORT, masculine. ⚠️ THE ि IS SHORT, र्ट writes the र as a hook over a RETROFLEX ट, and 🚨 **ॉ IS THE CANDRA-O** again, reading **o** — the mark of डॉक्टर (unit 35), हॉकी and ट्रॉफ़ी (unit 131). ⚠️ The opposite of a धर्मशाला in every way: you go there for the place, not past it." },
      ],
    },
    {
      id: "hi-u132l3",
      unit: 132,
      lesson: 3,
      title: "Checking in",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Make a booking, find the front desk, call a porter, and say where you are putting up and that you need to rest.",
      items: [
        { id: "hi-u132l3-risepshan", type: "vocab", front: "रिसेप्शन", reading: "risepshan", meaning: "a hotel front desk", accept: ["the counter where a guest is received", "a reception party"], example: { jp: "सामान रिसेप्शन पर छोड़कर वह कमरा देखने गया।", en: "Leaving the luggage at the front desk, he went to see the room." }, drill: { jp: "सामान रिसेप्शन पर छोड़कर वह कमरा देखने गया", en: "He left the luggage at the desk and went to see the room" }, hint: "RI-SEP-SHAN, masculine. प्श is प stacked under a halant with श (unit 6) — two consonants with no vowel between, said in one breath. ⚠️ **TWO LIVE SENSES AND BOTH ARE IN THE ACCEPT LIST** — the hotel counter this lesson needs, and a wedding reception, which in India is the commoner of the two." },
        { id: "hi-u132l3-buking", type: "vocab", front: "बुकिंग", reading: "buking", meaning: "a booking", accept: ["a place or seat held in advance"], example: { jp: "सर्दी में कमरे की बुकिंग पहले ही करनी पड़ती है।", en: "In winter the room's booking has to be made in advance." }, drill: { jp: "सर्दी में कमरे की बुकिंग पहले करनी पड़ती है", en: "In winter the room's booking has to be made in advance" }, hint: "BU-KING — ⚠️ FEMININE: बुकिंग हुई, पूरी बुकिंग. The ं before ग is the matching velar nasal (§1). 🚨 **आरक्षण, THE HINDI WORD, IS DELIBERATELY NOT CARDED HERE** — it belongs to another unit in the caste-reservation sense, a cross-block line recorded in unit124.js §C8, and it is a homograph two units would both have claimed. The loanword is what a desk says anyway." },
        { id: "hi-u132l3-kulii", type: "vocab", front: "कुली", reading: "kulii", meaning: "a porter", accept: ["one paid to carry a traveller's luggage"], example: { jp: "रेल पर कुली ने पूरा सामान एक बार में उठा लिया।", en: "At the railway the porter picked up the whole luggage in one go." }, drill: { jp: "कुली ने पूरा सामान एक बार में उठाया", en: "The porter picked up the whole luggage at once" }, hint: "KU-LII, masculine and FIXED for a woman, with a SHORT ु and a LONG ी. ⚠️ Not मज़दूर (unit 28), who works on a site: a कुली waits at a station and is paid per load, and the word is also a job title printed on a numbered badge." },
        { id: "hi-u132l3-atithigrih", type: "vocab", front: "अतिथिगृह", reading: "atithigrih", meaning: "a guest house kept by an institution", accept: ["lodging a university or a company keeps for its own visitors"], example: { jp: "विश्वविद्यालय के अतिथिगृह में बाहर का आदमी नहीं रुक सकता।", en: "An outsider cannot stay in the university's guest house." }, drill: { jp: "अतिथिगृह में बाहर का आदमी नहीं रुक सकता", en: "An outsider cannot stay in the guest house" }, hint: "A-TI-THI-GRIH, masculine, and ⚠️ **BOTH ि's ARE SHORT**: a-ti-thi. अतिथि, a guest, plus गृह, a house — and 🚨 **गृह CARRIES THE ृ MĀTRĀ, WHICH READS ri AND IS ऋ's** (unit 1 §7; unit61.js §B2). ⚠️ **शयनकक्ष WAS REFUSED FOR THIS SLOT** because कमरा (unit 5) owns \"a bedroom\"." },
        { id: "hi-u132l3-vishraam", type: "vocab", front: "विश्राम", reading: "vishraam", meaning: "rest taken on a journey", accept: ["a break to sit down and do nothing"], example: { jp: "आठ घंटे चलने के बाद सबको विश्राम चाहिए था।", en: "After walking eight hours everybody needed a rest." }, drill: { jp: "आठ घंटे चलने के बाद विश्राम चाहिए था", en: "A rest was needed after eight hours of walking" }, hint: "VISH-RAAM, masculine. श्र is a stacked conjunct — श with र under it (unit 6), the same stack as श्रमिक (unit 125) and आश्रय (unit 128). ⚠️ Not आराम (unit 20), which is comfort or ease in general: विश्राम is a BREAK in something, which is why a railway waiting room is a विश्राम गृह." },
        { id: "hi-u132l3-thikaanaa", type: "vocab", front: "ठिकाना", reading: "thikaanaa", meaning: "a place to put up", accept: ["somewhere definite to stay or be found", "whereabouts"], example: { jp: "शहर में उसका कोई पक्का ठिकाना नहीं था।", en: "He had no settled place to stay in the city." }, drill: { jp: "शहर में उसका कोई पक्का ठिकाना नहीं था", en: "He had no settled place in the city" }, hint: "THI-KAA-NAA, masculine and regular -ा, so the oblique is ठिकाने. It opens on the RETROFLEX ठ with a puff of air — tongue curled back, merged to th (§1b), so `thikaanaa` and ⚠️ **NOT ठीक, which is `thiik`** (unit 4): the ि here is SHORT. Also means somebody's whereabouts, which is in the accept list." },
      ],
    },
    {
      id: "hi-u132l4",
      unit: 132,
      lesson: 4,
      title: "What there is to do",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Hire a guide, visit a wildlife sanctuary, and talk about a safari, mountaineering, boating and camping.",
      items: [
        { id: "hi-u132l4-gaaid", type: "vocab", front: "गाइड", reading: "gaaid", meaning: "a tour guide", accept: ["one paid to show visitors round and explain"], example: { jp: "गाइड के बिना इस किले का आधा हिस्सा समझ नहीं आता।", en: "Without a guide half of this fort is not understood." }, drill: { jp: "गाइड के बिना यह किला समझ नहीं आता", en: "This fort is not understood without a guide" }, hint: "GAA-ID, masculine and FIXED for a woman, and ⚠️ **गाइ IS गा + इ, TWO SOUNDS**: gaa-id, two syllables. The ड is RETROFLEX, merged to d (§1b). ⚠️ Also means a crib book for an exam, which is the sense an Indian student meets first; this card takes the travel one." },
        { id: "hi-u132l4-abhayaarany", type: "vocab", front: "अभयारण्य", reading: "abhayaarany", meaning: "a wildlife sanctuary", accept: ["ground where animals are protected by law"], example: { jp: "अभयारण्य में गाड़ी से उतरना मना है।", en: "Getting out of the vehicle is forbidden in the sanctuary." }, drill: { jp: "अभयारण्य में गाड़ी से उतरना मना है", en: "Getting out of the vehicle is forbidden in the sanctuary" }, hint: "A-BHA-YAA-RAN-Y, masculine, five syllables and ⚠️ **THE HARDEST FRONT IN THIS UNIT**. अभय, without fear, plus अरण्य, a forest — the अ absorbs, so the word reads अभयारण्य. ण्य is the RETROFLEX ण with य stacked under it (unit 6), and the word CLOSES on that stack: -ran-y, not -ra-nya." },
        { id: "hi-u132l4-safaarii", type: "vocab", front: "सफ़ारी", reading: "safaarii", meaning: "a safari", accept: ["a drive through a sanctuary to look at animals"], example: { jp: "सुबह की सफ़ारी में दो हाथी दिख गए।", en: "Two elephants were seen on the morning safari." }, drill: { jp: "सुबह की सफ़ारी में दो हाथी दिख गए", en: "Two elephants were seen on the morning safari" }, hint: "SA-FAA-RII — ⚠️ FEMININE. फ़ is the f of unit 4, a nukta on फ — safaarii, never saphaarii. ⚠️ **गुफ़ा WAS REFUSED FOR THIS SLOT AND सफ़ारी TOOK IT**: गुफा is already carded without the nukta, so the two spellings are one lexeme (unit124.js §C3). ⚠️ The word also names a kind of jacket in India." },
        { id: "hi-u132l4-parvataarohan", type: "vocab", front: "पर्वतारोहण", reading: "parvataarohan", meaning: "mountaineering", accept: ["climbing high mountains as a sport"], example: { jp: "पर्वतारोहण के लिए हर साल सौ लोग यहाँ आते हैं।", en: "A hundred people come here every year for mountaineering." }, drill: { jp: "पर्वतारोहण के लिए सौ लोग यहाँ आते हैं", en: "A hundred people come here for mountaineering" }, hint: "PAR-VA-TAA-RO-HAN, masculine, five syllables. पर्वत, a mountain, plus आरोहण, climbing — ⚠️ **AND पर्वत IS NOT A MATCHABLE STRING HERE**, because the अ of आरोहण absorbs into a ा: the word reads पर्वता-, not पर्वत+आ. Checked. The final ण is the RETROFLEX n." },
        { id: "hi-u132l4-naukaayan", type: "vocab", front: "नौकायन", reading: "naukaayan", meaning: "boating", accept: ["going out on the water in a boat for pleasure"], example: { jp: "झील पर नौकायन शाम तक चलता है।", en: "Boating on the lake goes on until evening." }, drill: { jp: "झील पर नौकायन शाम तक चलता है", en: "Boating on the lake goes on until evening" }, hint: "NAU-KAA-YAN, masculine. 🚨 THE DIPHTHONG औ, ONE vowel (unit 3) — nau, never na-u. नौका, a boat, plus अयन, going — and ⚠️ **नौका ITSELF IS NOT CARDED**, because नाव (unit 33) owns the boat; so this compound is the only place the Sanskritic word appears, and the hint has to carry it." },
        { id: "hi-u132l4-deraa", type: "vocab", front: "डेरा", reading: "deraa", meaning: "a camp pitched for a stay", accept: ["a temporary camp somebody settles into"], example: { jp: "पर्यटकों ने नदी के किनारे डेरा डाल दिया।", en: "The tourists pitched camp on the river bank." }, drill: { jp: "पर्यटकों ने नदी के किनारे डेरा डाला", en: "The tourists pitched camp by the river" }, hint: "DE-RAA, masculine and regular -ा, so the oblique is डेरे. It opens on the RETROFLEX ड, merged to d (§1b) — tongue curled back, which is the only thing separating it from देरा and from देर, delay (unit 11). ⚠️ **THE FRAME IS डेरा डालना, NEVER डेरा करना**, and it implies staying a while rather than a night." },
      ],
    },
  ],
};
