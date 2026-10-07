// HI Unit 131 — खेल का मैदान ("The playing field") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 3 (u124–u136). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, then unit124.js §C1–§C11 — this block's own record.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 11 (B2)"). Theme ASSIGNED CENTRALLY at
// **1 of 18 taken**, the thinnest-looking slot in the block.
// ⚠️ **AND THE SLOT NUMBER IS MISLEADING HERE, WHICH IS WORTH RECORDING:** this
// unit's own wider probe of 32 sport candidates found **13 already carded**,
// because **u41 IS ALREADY A SPORTS UNIT** — खेल, खिलाड़ी, टीम, गेंद, बल्ला,
// क्रिकेट, पारी, कप्तान, मुकाबला and खिताब are all u41's, जीतना and हारना too,
// plus मैदान@u14, अभ्यास@u28, कसरत@u77 and चोट@u20. A seat authoring from "1/18"
// and memory would have collided on half a list.
//
// 🚨 BOTH TITLE WORDS ARE ALREADY CARDED AND NEITHER IS RE-CARDED: **खेल is
// u41's and मैदान is u14's.** This unit takes the four things u41 left out —
// GETTING FIT, THE OFFICIAL, THE SPORTS IT DID NOT NAME, AND THE PRIZE.
//
// ⚠️ TWO REFUSALS, BOTH ON A GLOSS THE GRADER ALREADY OWNS:
//   • **जीत and हार WERE REFUSED.** The fronts are free, but जीतना@u41 is glossed
//     "to win" and हारना@u41 "to be defeated" with "to lose a game" accepted, and
//     `normalizeMeaning` strips a leading "to " — so "win" and "lose" are already
//     strings. The whole win/lose field is u41's; this unit takes the PRIZE
//     instead (l4), which u41 never had.
//   • **व्यायाम WAS REFUSED** — कसरत@u77 is glossed "physical exercise" and
//     accepts "a workout". जिम is carded instead: the PLACE, not the activity.
//
// 🚨 THE CANDRA-O ॉ IS SPENT TWICE HERE AND NOWHERE ELSE IN THIS BLOCK —
// **हॉकी (l3) and ट्रॉफ़ी (l4)** — and unit124.js §C7 is the record. unit1.js §7
// left the mark uncarded and called it "A2's call"; A2 and B1 made it, three
// times (डॉक्टर@u35, ऑपरेशन@u77, कॉलोनी@u86), all reading **o**. Both hints here
// name the mark, because it is still taught on no card of its own.
//
// ⚠️ GENDER: FEMININE — सीटी, फुर्ती, सहनशक्ति (-ति, like every such abstract,
// unit61 §B6), तैराकी, कुश्ती, मुक्केबाज़ी, तीरंदाज़ी, हॉकी, ट्रॉफ़ी. MASCULINE —
// कोच, प्रशिक्षण, जिम, लचीलापन, रेफ़री, अंपायर, स्कोर, विकेट, स्टेडियम,
// बैडमिंटन, टूर्नामेंट, फ़ाइनल, पदक, चैंपियन, उपविजेता. ⚠️ **कोच, रेफ़री,
// अंपायर, चैंपियन and उपविजेता are FIXED for a woman**, like नेता (unit 42).
export const HI_UNIT131 = {
  id: "hi-u131",
  lang: "hi",
  title: "खेल का मैदान",
  order: 131,
  stage: "b2",
  lessons: [
    {
      id: "hi-u131l1",
      unit: 131,
      lesson: 1,
      title: "Getting into shape",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about a coach, a gym and a yoga posture, and about stamina, quickness and suppleness as things that can be built.",
      items: [
        { id: "hi-u131l1-koch", type: "vocab", front: "कोच", reading: "koch", meaning: "a sports coach", accept: ["the person who trains a team or a player"], example: { jp: "नए कोच ने पूरी टीम का अभ्यास बदल दिया।", en: "The new coach changed the whole team's practice." }, drill: { jp: "नए कोच ने टीम का अभ्यास बदला", en: "The new coach changed the team's practice" }, hint: "KOCH, masculine, ONE syllable, FIXED for a woman, and the च is a plain unaspirated ch — koch, never kochh. ⚠️ A loanword that also means a railway carriage; this card takes the sports sense, which is the one in every Indian sports page. ⚠️ Not शिक्षक (unit 8), who teaches a subject." },
        { id: "hi-u131l1-yogaasan", type: "vocab", front: "योगासन", reading: "yogaasan", meaning: "a yoga posture", accept: ["one held position of the body in yoga"], example: { jp: "रोज़ के कुछ योगासन से लचीलापन बढ़ता है, और जिम जाने की ज़रूरत भी कम पड़ती है।", en: "A few yoga postures a day increase suppleness, and the need to go to a gym drops too." }, drill: { jp: "रोज़ के योगासन से लचीलापन बढ़ता है", en: "Daily yoga postures increase suppleness" }, hint: "YO-GAA-SAN, masculine. योग, yoga (unit 77), plus आसन, a seat — a seat the body is held in. 🚨 योग FIRES inside it, because the ा that follows is a mātrā and not a letter; harmless because योग is not carded in this unit. 🚨 **प्रशिक्षण WAS REMOVED FROM THIS SLOT**: u114l2 owns it, and a कोच in this very lesson is already the person who gives it." },
        { id: "hi-u131l1-jim", type: "vocab", front: "जिम", reading: "jim", meaning: "a gym", accept: ["a room kept with machines for building the body"], example: { jp: "मोहल्ले का जिम सुबह छह बजे खुल जाता है।", en: "The neighbourhood gym opens at six in the morning." }, drill: { jp: "मोहल्ले का जिम सुबह खुल जाता है", en: "The neighbourhood gym opens in the morning" }, hint: "JIM, masculine, ONE syllable, and ⚠️ THE ि IS SHORT: jim. ⚠️ **व्यायाम WAS REFUSED FOR THIS SLOT AND जिम TOOK IT**, because कसरत (unit 77) already owns \"physical exercise\" and \"a workout\" — a जिम is the PLACE, which nothing in the course had named." },
        { id: "hi-u131l1-sahanshakti", type: "vocab", front: "सहनशक्ति", reading: "sahanshakti", meaning: "stamina", accept: ["the power to keep going after everybody else stops"], example: { jp: "लंबी दौड़ में सहनशक्ति ताकत से ज़्यादा काम आती है।", en: "In a long race stamina is more use than strength." }, drill: { jp: "लंबी दौड़ में सहनशक्ति ज़्यादा काम आती है", en: "Stamina is more use in a long race" }, hint: "SA-HAN-SHAK-TI — ⚠️ FEMININE, like every -ति abstract (unit61 §B6), and ⚠️ **THE FINAL ि IS SHORT**: shak-ti, never shak-tii. सहन, bearing, plus शक्ति, power — and शक्ति is not carded, so neither half is a matchable string. ⚠️ Not ताकत (unit 20), which lifts a weight: सहनशक्ति lasts." },
        { id: "hi-u131l1-phurtii", type: "vocab", front: "फुर्ती", reading: "phurtii", meaning: "quickness of the body", accept: ["being quick on one's feet", "nimbleness"], example: { jp: "उसकी फुर्ती देखकर कोच ने उसे टीम में रख लिया।", en: "Seeing his quickness, the coach kept him in the team." }, drill: { jp: "उसकी फुर्ती देखकर कोच ने उसे रखा", en: "Seeing his quickness the coach kept him" }, hint: "PHUR-TII — ⚠️ FEMININE. फ carries a puff of air and is NOT the nukta फ़ — phur, never fur, and that one dot is the whole difference from फ़रार (unit 130). र्त writes the र as a hook over a DENTAL त (unit 6). ⚠️ Not तेज़ (unit 16), which is an adjective: फुर्ती is the quality itself." },
        { id: "hi-u131l1-lachiilaapan", type: "vocab", front: "लचीलापन", reading: "lachiilaapan", meaning: "suppleness", accept: ["how far a body can bend without tearing", "flexibility"], example: { jp: "रोज़ के अभ्यास से शरीर का लचीलापन बढ़ता है।", en: "Daily practice increases the body's suppleness." }, drill: { jp: "अभ्यास से शरीर का लचीलापन बढ़ता है", en: "Practice increases the body's suppleness" }, hint: "LA-CHII-LAA-PAN, masculine, four syllables. Built on लचीला, supple, with -पन making the abstract — the same -पन as बचपन and अपनापन, and ⚠️ **-पन IS MASCULINE while -ता and -ति are FEMININE** (see the two cards above). ⚠️ The word also carries the figurative sense English gives flexibility, which is in the accept list." },
      ],
    },
    {
      id: "hi-u131l2",
      unit: 131,
      lesson: 2,
      title: "The game and the official",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the referee, the umpire and the whistle, read the score, and talk about a wicket and the stadium it falls in.",
      items: [
        { id: "hi-u131l2-refrii", type: "vocab", front: "रेफ़री", reading: "refrii", meaning: "a referee", accept: ["the official who runs a match from inside the field"], example: { jp: "रेफ़री ने खेल रोककर दोनों खिलाड़ियों को बुलाया।", en: "The referee stopped the game and called both players." }, drill: { jp: "रेफ़री ने खेल रोककर खिलाड़ियों को बुलाया", en: "The referee stopped the game and called the players" }, hint: "REF-RII, masculine and FIXED for a woman. फ़ is the f of unit 4, a nukta on फ — ⚠️ **AND IT IS THE OPPOSITE DOT FROM फुर्ती (l1)**: रेफ़री has the nukta and फुर्ती does not. ⚠️ Not अंपायर, the next card: a रेफ़री moves with the play, which is why hockey and football have one." },
        { id: "hi-u131l2-ampaayar", type: "vocab", front: "अंपायर", reading: "ampaayar", meaning: "an umpire", accept: ["the official who stands still and gives decisions"], example: { jp: "अंपायर ने उँगली उठाई और खिलाड़ी बाहर चला गया।", en: "The umpire raised a finger and the player walked off." }, drill: { jp: "अंपायर ने उँगली उठाई", en: "The umpire raised a finger" }, hint: "AM-PAA-YAR, masculine and fixed for a woman, opening on the independent अ with a ं on it (unit 5). ⚠️ **THE SAME JOB IN TWO DIFFERENT SPORTS AND SO TWO CARDS:** cricket and badminton have an अंपायर who stands at a fixed point; hockey and football have a रेफ़री who runs. English keeps both words and so does Hindi." },
        { id: "hi-u131l2-siitii", type: "vocab", front: "सीटी", reading: "siitii", meaning: "a whistle", accept: ["the small pipe an official blows to stop play"], example: { jp: "रेफ़री की सीटी सुनकर सब खिलाड़ी रुक गए।", en: "Hearing the referee's whistle, all the players stopped." }, drill: { jp: "सीटी सुनकर सब खिलाड़ी रुक गए", en: "All the players stopped on hearing the whistle" }, hint: "SII-TII — ⚠️ FEMININE, with a LONG ई and a RETROFLEX ट merged to t (§1b). ⚠️ **THE FRAME IS सीटी बजाना OR सीटी बजना, NEVER सीटी करना** — the same बजना as a bell or a clock (unit 11). Also the word for whistling with the lips." },
        { id: "hi-u131l2-skor", type: "vocab", front: "स्कोर", reading: "skor", meaning: "the running total in a match", accept: ["how many runs or points each side has so far"], example: { jp: "आधे खेल के बाद स्कोर बराबर था।", en: "After half the game the score was level." }, drill: { jp: "आधे खेल के बाद स्कोर बराबर था", en: "The score was level after half the game" }, hint: "SKOR, masculine, ONE syllable: स्क is a stacked conjunct, so the word opens on two consonants — skor, never sakor. ⚠️ **THE GLOSS SAYS \"running total\" BECAUSE अंक (unit 34) ALREADY OWNS \"a score\"** — an अंक is one mark in an exam, a स्कोर is the whole state of a match at a moment." },
        { id: "hi-u131l2-viket", type: "vocab", front: "विकेट", reading: "viket", meaning: "a wicket", accept: ["the three stumps a bowler aims at", "one batsman's dismissal"], example: { jp: "पहली पारी में उसने चार विकेट लिए।", en: "In the first innings he took four wickets." }, drill: { jp: "पहली पारी में उसने चार विकेट लिए", en: "He took four wickets in the first innings" }, hint: "VI-KET, masculine, ⚠️ THE ि SHORT, and the ट RETROFLEX, merged to t (§1b). ⚠️ **TWO SENSES AND BOTH ARE IN THE ACCEPT LIST**, because Hindi uses both exactly as English does: the stumps themselves, and the dismissal counted against them — विकेट लेना is the second. It goes with पारी and बल्ला (both unit 41)." },
        { id: "hi-u131l2-stediyam", type: "vocab", front: "स्टेडियम", reading: "stediyam", meaning: "a stadium", accept: ["the built ground with seats all round it"], example: { jp: "पूरा स्टेडियम भर गया और टिकट मिलना बंद हो गया।", en: "The whole stadium filled up and tickets stopped being available." }, drill: { jp: "पूरा स्टेडियम भर गया", en: "The whole stadium filled up" }, hint: "STE-DI-YAM, masculine. स्ट is a stacked conjunct with a RETROFLEX ट (unit 6), so the word opens on two consonants. ⚠️ Not मैदान (unit 14), which is any open ground: a स्टेडियम has seats, a gate and a ticket — which is why the example has one." },
      ],
    },
    {
      id: "hi-u131l3",
      unit: 131,
      lesson: 3,
      title: "Sports the course has not named",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name swimming, wrestling, boxing, archery, hockey and badminton, and say which one somebody plays.",
      items: [
        { id: "hi-u131l3-tairaakii", type: "vocab", front: "तैराकी", reading: "tairaakii", meaning: "swimming as a sport", accept: ["racing in water"], example: { jp: "तैराकी में भारत के पदक अब तक बहुत कम हैं।", en: "India's medals in swimming are very few so far." }, drill: { jp: "तैराकी में भारत के पदक कम हैं", en: "India has few medals in swimming" }, hint: "TAI-RAA-KII — ⚠️ FEMININE. 🚨 THE DIPHTHONG ऐ, ONE vowel (unit 3) — tai, never ta-i. From तैरना, to swim (unit 21), through तैराक, a swimmer. ⚠️ **THE GLOSS SAYS \"as a sport\" BECAUSE तैरना ALREADY OWNS THE ACT** — the grader strips a leading \"to\", so \"swim\" was taken." },
        { id: "hi-u131l3-kushtii", type: "vocab", front: "कुश्ती", reading: "kushtii", meaning: "wrestling", accept: ["the sport of throwing an opponent to the ground"], example: { jp: "गाँव के मेले में कुश्ती आज भी होती है।", en: "Wrestling still takes place at the village fair today." }, drill: { jp: "गाँव के मेले में कुश्ती होती है", en: "There is wrestling at the village fair" }, hint: "KUSH-TII — ⚠️ FEMININE. श्त is श stacked on a DENTAL त (unit 6) — the same stack as गश्त (unit 130). ⚠️ The frame is कुश्ती लड़ना, to wrestle, using लड़ना (unit 48) — never कुश्ती खेलना. India's oldest sport and the one with the most Olympic medals, which is why it is in the course at all." },
        { id: "hi-u131l3-mukkebaazii", type: "vocab", front: "मुक्केबाज़ी", reading: "mukkebaazii", meaning: "boxing", accept: ["the sport of fighting with gloved fists"], example: { jp: "मुक्केबाज़ी में हाथ पर दस्ताना पहनना ज़रूरी है।", en: "In boxing it is necessary to wear a glove on the hand." }, drill: { jp: "मुक्केबाज़ी में दस्ताना पहनना ज़रूरी है", en: "A glove must be worn in boxing" }, hint: "MUK-KE-BAA-ZII — ⚠️ FEMININE. GEMINATION in क्क — you hear both k's — and ज़ is the z of unit 4. मुक्का, a fist, in its oblique मुक्के, plus -बाज़ी, the playing of. ⚠️ **THE -बाज़ी SUFFIX IS LIVE AND WORTH KNOWING**: it makes a sport or a habit out of a thing, and तीरंदाज़ी two cards on uses its cousin -अंदाज़ी." },
        { id: "hi-u131l3-tiirandaazii", type: "vocab", front: "तीरंदाज़ी", reading: "tiirandaazii", meaning: "archery", accept: ["shooting at a mark with a bow"], example: { jp: "तीरंदाज़ी में हाथ और आँख दोनों का साथ ज़रूरी है।", en: "In archery the hand and the eye must work together." }, drill: { jp: "तीरंदाज़ी में हाथ और आँख ज़रूरी हैं", en: "Hand and eye are both needed in archery" }, hint: "TII-RAN-DAA-ZII — ⚠️ FEMININE, four syllables. तीर, an arrow, plus -अंदाज़ी, the throwing of — ⚠️ **AND तीर IS NOT A MATCHABLE STRING HERE**, because the अ of अंदाज़ी absorbs into the र: the word reads तीरं, not तीर+अं. ज़ is the z of unit 4. Cousin of -बाज़ी, the card before." },
        { id: "hi-u131l3-hokii", type: "vocab", front: "हॉकी", reading: "hokii", meaning: "hockey", accept: ["the stick-and-ball game played eleven a side"], example: { jp: "हॉकी भारत का पुराना खेल है और क्रिकेट नया।", en: "Hockey is India's old game and cricket the new one." }, drill: { jp: "हॉकी भारत का पुराना खेल है", en: "Hockey is India's old game" }, hint: "HO-KII — ⚠️ FEMININE. 🚨 **THE ॉ IS THE CANDRA-O**, the mark Hindi uses for the English o of 'hockey' and 'doctor' — the same mark as डॉक्टर (unit 35), ऑपरेशन (unit 77) and कॉलोनी (unit 86), and it reads **o**. unit1.js §3 forbids carding a bare mātrā, so the mark is taught here in the hint, as it is on those three." },
        { id: "hi-u131l3-baidmintan", type: "vocab", front: "बैडमिंटन", reading: "baidmintan", meaning: "badminton", accept: ["the racquet game played with a shuttle"], example: { jp: "बैडमिंटन घर के अंदर भी खेला जा सकता है।", en: "Badminton can be played indoors too." }, drill: { jp: "बैडमिंटन घर के अंदर खेला जा सकता है", en: "Badminton can be played indoors" }, hint: "BAID-MIN-TAN, masculine. ⚠️ **THE ऐ IS ONE VOWEL AND THE ड IS RETROFLEX**, merged to d (§1b) — baid, with the tongue curled back. The ं before ट is the matching retroflex nasal (§1). The one sport in the lesson played with an अंपायर (l2) rather than a रेफ़री." },
      ],
    },
    {
      id: "hi-u131l4",
      unit: 131,
      lesson: 4,
      title: "The contest and the prize",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about a tournament and its final, and name the medal, the trophy, the champion and the runner-up.",
      items: [
        { id: "hi-u131l4-tuurnaament", type: "vocab", front: "टूर्नामेंट", reading: "tuurnaament", meaning: "a tournament", accept: ["a series of matches ending in one winner"], example: { jp: "यह टूर्नामेंट दो हफ़्ते चलेगा।", en: "This tournament will run for two weeks." }, drill: { jp: "यह टूर्नामेंट दो हफ़्ते चलेगा", en: "This tournament will run two weeks" }, hint: "TUUR-NAA-MENT, masculine, and ⚠️ **THE ऊ IS LONG**: tuur. It opens on the RETROFLEX ट, merged to t (§1b), and र्ना writes the र as a hook (unit 6). ⚠️ Not मुकाबला (unit 41), which is ONE contest: a टूर्नामेंट is many, arranged so that only one side is left." },
        { id: "hi-u131l4-faainal", type: "vocab", front: "फ़ाइनल", reading: "faainal", meaning: "the final round", accept: ["the last match, which decides the whole thing"], example: { jp: "फ़ाइनल में पहुँचकर भी टीम हार गई।", en: "Even after reaching the final the team lost." }, drill: { jp: "फ़ाइनल में पहुँचकर भी टीम हार गई", en: "The team lost even after reaching the final" }, hint: "FAA-I-NAL, masculine. फ़ is the f of unit 4 and ⚠️ **फ़ाइ IS फ़ा + इ, TWO SOUNDS** — faa-i-nal, three syllables, not the English two. ⚠️ Used as a noun here; as an adjective Hindi says आख़िरी or अंतिम instead, so the card takes the noun." },
        { id: "hi-u131l4-padak", type: "vocab", front: "पदक", reading: "padak", meaning: "a medal", accept: ["the disc hung round the neck of a winner"], example: { jp: "तीनों खिलाड़ियों को गले में पदक पहनाया गया।", en: "All three players had a medal put round their necks." }, drill: { jp: "खिलाड़ियों को गले में पदक पहनाया गया", en: "The players had medals put round their necks" }, hint: "PA-DAK, masculine, consonant-final, with a DENTAL द and both vowels SHORT: pa-dak. ⚠️ Not इनाम and not खिताब (unit 41): a खिताब is a TITLE you hold, a पदक is a metal object you are given, and three are given at once — which is why the next two cards exist." },
        { id: "hi-u131l4-trofii", type: "vocab", front: "ट्रॉफ़ी", reading: "trofii", meaning: "a trophy", accept: ["the cup a winning side is handed and keeps"], example: { jp: "ट्रॉफ़ी जीतने वाली टीम उसे एक साल रखती है।", en: "The team that wins the trophy keeps it for a year." }, drill: { jp: "ट्रॉफ़ी जीतने वाली टीम उसे रखती है", en: "The team that wins the trophy keeps it" }, hint: "TRO-FII — ⚠️ FEMININE. 🚨 **THREE HARD THINGS IN FOUR LETTERS:** ट्र is a stacked conjunct with a RETROFLEX ट, फ़ is the f of unit 4, and **ॉ is the CANDRA-O** reading o — the second and last time this block spends that mark, after हॉकी (l3). ⚠️ Not पदक: one ट्रॉफ़ी goes to a side, a पदक to each player." },
        { id: "hi-u131l4-chaimpiyan", type: "vocab", front: "चैंपियन", reading: "chaimpiyan", meaning: "a champion", accept: ["the side or player that won the whole tournament"], example: { jp: "पिछले साल का चैंपियन इस बार पहले ही दौर में हार गया।", en: "Last year's champion lost in the very first round this time." }, drill: { jp: "पिछले साल का चैंपियन पहले दौर में हारा", en: "Last year's champion lost in the first round" }, hint: "CHAIM-PI-YAN, masculine and FIXED for a woman, with the ऐ as ONE vowel and a ं on it (unit 5). ⚠️ The दौर in the example is unit 69's. Not विजेता, which this course does not card — and which is why उपविजेता, the next card, needed its own hint." },
        { id: "hi-u131l4-upvijetaa", type: "vocab", front: "उपविजेता", reading: "upvijetaa", meaning: "a runner-up", accept: ["the side that reached the final and lost it"], example: { jp: "उपविजेता को भी पदक मिलता है।", en: "The runner-up gets a medal too." }, drill: { jp: "उपविजेता को भी पदक मिलता है", en: "The runner-up also gets a medal" }, hint: "UP-VI-JE-TAA, masculine and FIXED for a woman — the -ता of an AGENT is masculine, unlike the -ता of an abstract (see सहनशक्ति's sibling rule in l1). उप- (under) plus विजेता, a winner. ⚠️ **विजेता ITSELF IS NOT CARDED ANYWHERE**, because जीतना (unit 41) owns the winning; so this compound is the only place in the course the word appears, and the hint has to carry it." },
      ],
    },
  ],
};
