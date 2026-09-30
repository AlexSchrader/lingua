// HI Unit 45 — नाप-तोल ("Measuring and weighing") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 2 (u41–u50). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT. The scaffold called this "Culture and leisure", which is block 3's
// assigned domain in this band — and its leisure half is spent besides: u26l3 carded
// खेलना, गाना, नाचना, दौड़ना, कूदना and तैरना, u41 has just taken the whole contest,
// and u17 owns त्योहार and छुट्टी. A second leisure unit here would have collided with
// a sibling block that cannot see this file.
// THE MEASURED HOLE IT WAS RETHEMED INTO, and unit31.js §A8 is the reason it is still
// open: u40 कपड़े और नाप measured MEASUREMENT at **3 of 14** and closed six of them
// (नाप, मीटर, लीटर, दर्जन, plus u18's किलो and u11's आधा). That leaves the half of the
// system a learner actually trips on:
//   • THE FRACTIONAL NUMBERS. **A1 taught आधा and nothing else**, and Hindi cannot tell
//     the time or buy a kilo of flour without डेढ़, ढाई, साढ़े and सवा. These are not
//     derivable and not optional: साढ़े तीन बजे is half past three and there is no other
//     way to say it. Four words that unlock every clock reading past 2:30.
//   • THE PARTITIVES. No word for a piece, a swallow, a fistful, a pinch, a heap or a
//     bunch — so no Indian recipe and no market exchange was writable.
//     ⚠️ बूँद ("a droplet") WAS IN l3 AND HAS BEEN REMOVED, 2026-09-30, because its home
//     is BLOCK 3's u54 ज़मीन, पानी और आग: a drop is water, not measuring, and block 3 had
//     already authored it there. घूँट ("a single swallow") took the slot — still a liquid
//     partitive, still 4×6, NEW id, so no other item's mastery moved. The two blocks run
//     in parallel and cannot see each other's trees, so this was found by measuring block
//     2's fronts against block 3's front list, not by either file noticing.
//     ⚠️ AND THE FIRST REPLACEMENT TRIED WAS जोड़ी, WHICH WAS WRONG AND IS RECORDED HERE
//     RATHER THAN QUIETLY DROPPED: जोड़ा is ALREADY A FRONT, at u19l4 ("a matching pair"),
//     so जोड़ी would have been one lexeme on two mastery tracks in two genders — exactly
//     the बड़ा/बड़ी defect unit1.js §6 bans. `probe-hi-b2.mjs screen` passed it, because
//     the two glosses differ as strings ("a matched pair" against "a matching pair"); what
//     caught it was `selfcheck-hi-a2-block2.mjs`'s variantCollision check, which compares
//     through `meaningVariants` and across accept[] and found both cards accepting "a set
//     of two". THE LESSON: screening a candidate front is not enough on its own — the
//     gender twin of a taught noun is invisible to a front-uniqueness test.
//   • THE DIMENSION NOUNS and the तराज़ू everything is weighed on.
//
// ⚠️ FOUR DERIVED NOUNS, EACH ON THE PRECEDENT THE CORPUS ALREADY SET (u40l4's नाप
// from नापना, u32l3's तैयारी from तैयार, u24l1's बचपन from बच्चा, u40l3's सिलाई):
//   चौथाई ← चौथा (u25l3)  ·  तिहाई ← तीन (u3l4)
//   लंबाई ← लंबा (u19l1)  ·  ऊँचाई ← ऊँचा (u19l1)
// `derive()` generates no -आई suffix, so none of them was in scope before this unit
// and none shadows its parent's card. ⚠️ AND THE COUNT WAS HELD TO FOUR ON PURPOSE:
// गहराई and चौड़ाई were dropped, because six -आई nouns in one lesson would have been
// six of the same pattern rather than a lesson. तापमान and बोझ took those slots.
// ⚠️ मात्रा (a quantity) WAS SCREENED AND DROPPED for a different reason: मात्रा is
// what u3 calls the vowel MARKS and is that unit's title, so a card glossed "a
// quantity" would fight the learner's own first month of Devanagari.
//
// ⚠️ SYNONYMS REFUSED BY NAME, extending unit31.js's list and u42's:
//     फ़ीसदी  = प्रतिशत (this unit) — one word for per cent is enough
//     तादाद   = संख्या (u11l4, "a number")
//     पौना / पौने (a quarter less) — NOT a synonym and NOT refused on those grounds:
//             it is the fourth member of the सवा family and genuinely useful, and it is
//             left out only because this lesson already spends four cards on fractions.
//             Named in सवा's hint. A later block may card it.
//
// GENDER (§4): ⚠️ EVERY -आई NOUN IS FEMININE — चौथाई, तिहाई, लंबाई, ऊँचाई — and so are
// मुट्ठी and चुटकी, both -ी and both regular — so this unit no longer has a
// consonant-final FEMININE to warn about, because बूँद was the only one and it has gone to
// block 3's u54 (see the partitives note above). किलोमीटर, ग्राम, मील, प्रतिशत, टुकड़ा,
// ढेर, गुच्छा, तापमान, बोझ, अंदाज़ा, तराज़ू and ⚠️ घूँट — which ends in a CONSONANT and is
// MASCULINE, so nothing in its shape tells you either way — are MASCULINE.
// डेढ़, ढाई, साढ़े and सवा are INVARIANT and take no gender at all.
// दुगुना and तिगुना AGREE — दुगुना किराया, दुगुनी कीमत.
// ⚠️ A MEASURE WORD DOES NOT PLURALISE AFTER A NUMBER: दस किलोमीटर, सौ ग्राम, दो मील —
// the same rule u40l4 recorded for मीटर and लीटर, and u18's for किलो.
//
// RETROFLEX/DENTAL (§1b), checked against all 1056 readings: तराज़ू taraazuu, टुकड़ा
// tukraa, मुट्ठी mutthii, चुटकी chutkii, ढेर dher and तापमान taapmaan have no
// counterpart in the corpus, so the doubling hatch fires nowhere here.
// ⚠️ ONE READING TRIPLE WORTH ITS HINT: साढ़े saarhe against साथ saath (u7l3) and साठ
// saatth (u11) — unit1.js §1(b) reserved saatth for exactly this kind of neighbourhood,
// and साढ़े's ढ़ reads rh under §1(c), so all three stay distinct.
// ⚠️ AND ONE COMPOUND OF TWO TAUGHT FRONTS: किलोमीटर is किलो (u18) plus मीटर (u40l4).
// मीटर whole-word-matches inside it across the ो mātrā, which is `\p{M}` — so मीटर and
// किलोमीटर never share a sentence here, and `selfcheck-hi-a2-block2.mjs` checks it.
export const HI_UNIT45 = {
  id: "hi-u45",
  lang: "hi",
  title: "नाप-तोल",
  order: 45,
  stage: "a2",
  lessons: [
    {
      id: "hi-u45l1",
      unit: 45,
      lesson: 1,
      title: "One and a half, two and a half, half past",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Tell the time and buy by weight in Hindi's own fraction words — which A1 could not do past आधा.",
      items: [
        { id: "hi-u45l1-derh", type: "vocab", front: "डेढ़", reading: "derh", meaning: "one and a half", accept: ["one and a half of something", "a unit and a half"], example: { jp: "मुझे डेढ़ किलो आटा चाहिए।", en: "I need one and a half kilos of flour." }, drill: { jp: "यह रास्ता डेढ़ घंटा लंबा है", en: "This road is an hour and a half long" }, hint: "DERH, INVARIANT, with ड़ plus the ढ़ of unit 4 read as rh. ⚠️ ONE WORD for one and a half — Hindi does not say 'one and a half', it says डेढ़: डेढ़ किलो, डेढ़ घंटा, डेढ़ सौ for 150. आधा was the only fraction A1 gave you." },
        { id: "hi-u45l1-dhaaii", type: "vocab", front: "ढाई", reading: "dhaaii", meaning: "two and a half", accept: ["two and a half of something"], example: { jp: "दुकानदार ने ढाई किलो चावल दिए।", en: "The shopkeeper gave two and a half kilos of rice." }, drill: { jp: "मैच ढाई घंटा चला", en: "The match went on for two and a half hours" }, hint: "DHAA-II, INVARIANT, with the RETROFLEX ढ. Two and a half, again one indivisible word — ढाई बजे is half past two. From three upwards Hindi switches to साढ़े below, so डेढ़ and ढाई are the only two you must simply know." },
        { id: "hi-u45l1-saarhe", type: "vocab", front: "साढ़े", reading: "saarhe", meaning: "and a half", accept: ["plus a half", "half past the hour"], example: { jp: "हम साढ़े तीन बजे निकले।", en: "We left at half past three." }, drill: { jp: "यह काम साढ़े चार घंटा चला", en: "This job took four and a half hours" }, hint: "SAA-RHE, INVARIANT, ढ़ read rh — ⚠️ saarhe against साथ saath, with, and साठ saatth, sixty: three words, three readings, and §1's doubling is what keeps them apart. It goes BEFORE the number and only from THREE up: साढ़े तीन is 3½." },
        { id: "hi-u45l1-savaa", type: "vocab", front: "सवा", reading: "savaa", meaning: "and a quarter", accept: ["plus a quarter", "a quarter past the hour"], example: { jp: "गाड़ी सवा पाँच बजे आती है।", en: "The train comes at a quarter past five." }, drill: { jp: "मुझे सवा किलो चीनी चाहिए", en: "I need a kilo and a quarter of sugar" }, hint: "SA-VAA, INVARIANT, and like साढ़े it goes before the number: सवा तीन is 3¼, सवा किलो is a kilo and a quarter. Its mirror पौने, a quarter LESS — पौने चार is 3¾ — is the fourth member of this family and this course does not card it." },
        { id: "hi-u45l1-chauthaaii", type: "vocab", front: "चौथाई", reading: "chauthaaii", meaning: "a quarter", accept: ["one fourth", "a quarter part"], example: { jp: "रोटी का चौथाई हिस्सा बच गया।", en: "A quarter of the bread was left over." }, drill: { jp: "यह चौथाई बहुत छोटी है", en: "This quarter is very small" }, hint: "CHAU-THAA-II, ⚠️ FEMININE, as every -आई noun is — एक चौथाई रोटी. From चौथा, fourth, with the औ mātrā. It is the fraction you can hold; सवा and साढ़े are the ones that ride on a number." },
        { id: "hi-u45l1-tihaaii", type: "vocab", front: "तिहाई", reading: "tihaaii", meaning: "one third", accept: ["a third part", "one in three"], example: { jp: "जनता का तिहाई हिस्सा गरीब है।", en: "A third of the public is poor." }, drill: { jp: "यह तिहाई बहुत कम है", en: "This third is very little" }, hint: "TI-HAA-II, FEMININE like चौथाई, built on तीन. दो तिहाई is two thirds — the number stays whole and तिहाई never changes. तीसरा is the ORDINAL, third in a queue, and a different card." },
      ],
    },
    {
      id: "hi-u45l2",
      unit: 45,
      lesson: 2,
      title: "Kilometres, grams and per cent",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Give a distance, a weight and a percentage, and say something has doubled or tripled.",
      items: [
        { id: "hi-u45l2-kilomiitar", type: "vocab", front: "किलोमीटर", reading: "kilomiitar", meaning: "a kilometre", accept: ["a thousand metres", "one km of distance"], example: { jp: "स्टेशन यहाँ से दस किलोमीटर दूर है।", en: "The station is ten kilometres from here." }, drill: { jp: "यह रास्ता पाँच किलोमीटर लंबा है", en: "This road is five kilometres long" }, hint: "KI-LO-MII-TAR, MASCULINE, retroflex ट, and plural किलोमीटर unchanged after a number — दस किलोमीटर, never किलोमीटरें. It is built from किलो and मीटर, two words the course already taught separately." },
        { id: "hi-u45l2-graam", type: "vocab", front: "ग्राम", reading: "graam", meaning: "a gram", accept: ["a gramme of weight", "one thousandth of a kilo"], example: { jp: "दवा में सौ ग्राम चीनी थी।", en: "There were a hundred grams of sugar in the medicine." }, drill: { jp: "मुझे पाँच सौ ग्राम दाल चाहिए", en: "I need five hundred grams of lentils" }, hint: "GRAAM, MASCULINE, plural ग्राम unchanged, with the ग्र conjunct. ⚠️ The SAME word means a village in formal Hindi — ग्रामीण, rural, is built on it — so context decides; गाँव is the everyday word for a village and the one this course teaches." },
        { id: "hi-u45l2-miil", type: "vocab", front: "मील", reading: "miil", meaning: "a mile", accept: ["a British mile", "an old road measure"], example: { jp: "पहले दूरी मील में नापते थे।", en: "Distances used to be measured in miles." }, drill: { jp: "यह गाँव दो मील दूर है", en: "This village is two miles away" }, hint: "MIIL, MASCULINE, plural मील unchanged. Old Indian roads still carry मील stones. Read the long ii against मीठा miithaa, sweet, and मीटर miitar, a metre — three words that open the same way." },
        { id: "hi-u45l2-pratishat", type: "vocab", front: "प्रतिशत", reading: "pratishat", meaning: "per cent", accept: ["percentage", "out of every hundred"], example: { jp: "दस प्रतिशत लोग पढ़ नहीं सकते।", en: "Ten per cent of people cannot read." }, drill: { jp: "इस साल विकास दस प्रतिशत रहा", en: "Development was ten per cent this year" }, hint: "PRA-TI-SHAT, MASCULINE, with the प्र conjunct. प्रति, 'per', plus शत, 'hundred' — the शत is the old Sanskrit hundred, not सौ. फ़ीसदी means exactly the same and this course does not teach it." },
        { id: "hi-u45l2-dugunaa", type: "vocab", front: "दुगुना", reading: "dugunaa", meaning: "double", accept: ["twice as much", "twofold"], example: { jp: "इस साल किराया दुगुना हुआ।", en: "The rent doubled this year." }, drill: { jp: "यह बोझ दुगुना भारी है", en: "This load is twice as heavy" }, hint: "DU-GU-NAA, headworded MASCULINE SINGULAR under §6 and it AGREES — दुगुना किराया, दुगुनी कीमत. From दो plus -गुना, 'times'. दुगुना करना is to double something." },
        { id: "hi-u45l2-tigunaa", type: "vocab", front: "तिगुना", reading: "tigunaa", meaning: "triple", accept: ["three times as much", "threefold"], example: { jp: "गाँव की आबादी तिगुनी हो गई।", en: "The village's population tripled." }, drill: { jp: "यह काम तिगुना मुश्किल है", en: "This work is three times as difficult" }, hint: "TI-GU-NAA, AGREES exactly like दुगुना — तिगुना काम, तिगुनी आबादी — built on तीन with the same -गुना. The pattern keeps going: चौगुना is fourfold, and this course leaves it to you." },
      ],
    },
    {
      id: "hi-u45l3",
      unit: 45,
      lesson: 3,
      title: "A piece, a swallow, a fistful",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Measure without a number — the partitives an Indian recipe and an Indian market are built on.",
      items: [
        { id: "hi-u45l3-tukraa", type: "vocab", front: "टुकड़ा", reading: "tukraa", meaning: "a broken-off bit", accept: ["a fragment", "a bit of something"], example: { jp: "उसने रोटी का टुकड़ा तोड़ा।", en: "He broke off a bit of bread." }, drill: { jp: "यह टुकड़ा बहुत छोटा है", en: "This bit is very small" }, hint: "TUK-RAA, MASCULINE, plural टुकड़े, RETROFLEX ट with ड़ read r. हिस्सा is a share of something whole; a टुकड़ा has been broken off it. ⚠️ Its last letters spell कड़ा, hard, from the shapes unit — a different word." },
        { id: "hi-u45l3-ghuunt", type: "vocab", front: "घूँट", reading: "ghuunt", meaning: "a single swallow", accept: ["a mouthful of liquid", "as much as goes down at once"], example: { jp: "उसने पानी का एक घूँट लिया।", en: "He took one swallow of water." }, drill: { jp: "एक घूँट पानी काफ़ी है", en: "One mouthful of water is enough" }, hint: "GHUUNT, MASCULINE, RETROFLEX ट, with the ँ of unit 5 read as n. As much liquid as goes down in one swallow — पानी का एक घूँट, दो घूँट चाय. ⚠️ A measure word does not pluralise after a number, so it is दो घूँट and never दो घूँटें. मुट्ठी measures what a fist holds; a घूँट measures what a mouth does." },
        { id: "hi-u45l3-mutthii", type: "vocab", front: "मुट्ठी", reading: "mutthii", meaning: "a fistful", accept: ["a handful", "a closed fist"], example: { jp: "उसने मुट्ठी में नमक लिया।", en: "He took salt in his fist." }, drill: { jp: "एक मुट्ठी चावल काफ़ी है", en: "A fistful of rice is enough" }, hint: "MUT-THII, FEMININE, plural मुट्ठियाँ, with the RETROFLEX ट्ठ doubled under §1's gemination. The fist itself and how much it holds. मुट्ठी में होना, to be in somebody's fist, is to be under their control." },
        { id: "hi-u45l3-chutkii", type: "vocab", front: "चुटकी", reading: "chutkii", meaning: "a pinch of something", accept: ["a small pinch", "what two fingers hold"], example: { jp: "दाल में एक चुटकी नमक डालो।", en: "Put a pinch of salt in the lentils." }, drill: { jp: "एक चुटकी चीनी काफ़ी है", en: "A pinch of sugar is enough" }, hint: "CHUT-KII, FEMININE, plural चुटकियाँ, retroflex ट. What two fingers pick up — a चुटकी of salt against a मुट्ठी of rice. चुटकी लेना is to tease somebody." },
        { id: "hi-u45l3-dher", type: "vocab", front: "ढेर", reading: "dher", meaning: "a heap", accept: ["a pile", "a mound of things"], example: { jp: "आँगन में कचरे का ढेर था।", en: "There was a heap of rubbish in the courtyard." }, drill: { jp: "यहाँ कागज़ का ढेर है", en: "There is a heap of paper here" }, hint: "DHER, MASCULINE, plural ढेर unchanged, RETROFLEX ढ. A heap of anything, and in speech it means 'loads' — ढेर सारा काम, heaps of work. Not देर der, lateness, which has the short e." },
        { id: "hi-u45l3-gucchaa", type: "vocab", front: "गुच्छा", reading: "gucchaa", meaning: "a bunch", accept: ["a cluster", "a bundle held together"], example: { jp: "उसके हाथ में चाबियों का गुच्छा था।", en: "He had a bunch of keys in his hand." }, drill: { jp: "यह गुच्छा बहुत भारी है", en: "This bunch is very heavy" }, hint: "GUCH-CHAA, MASCULINE, plural गुच्छे, with the doubled च्छ of §1's gemination. A bunch of keys, of flowers, of grapes. A जोड़ा is a pair; a गुच्छा is many held together." },
      ],
    },
    {
      id: "hi-u45l4",
      unit: 45,
      lesson: 4,
      title: "How long, how high, how heavy",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Ask and give a dimension or a temperature, guess a quantity, and name the scales it gets weighed on.",
      items: [
        { id: "hi-u45l4-lambaaii", type: "vocab", front: "लंबाई", reading: "lambaaii", meaning: "length", accept: ["how long something is", "the long measurement"], example: { jp: "इस कपड़े की लंबाई दो मीटर है।", en: "This cloth's length is two metres." }, drill: { jp: "मेज़ की लंबाई बहुत ज़्यादा है", en: "The table's length is a great deal" }, hint: "LAM-BAA-II, FEMININE, as every -आई noun is, from लंबा, long — the same build as चौथाई from चौथा. Both the length of a thing and how tall a person is: उसकी लंबाई कितनी है." },
        { id: "hi-u45l4-uunchaaii", type: "vocab", front: "ऊँचाई", reading: "uunchaaii", meaning: "height", accept: ["how high something is", "altitude"], example: { jp: "उस पहाड़ की ऊँचाई बहुत ज़्यादा है।", en: "That mountain's height is very great." }, drill: { jp: "इस दीवार की ऊँचाई कम है", en: "This wall's height is low" }, hint: "UUN-CHAA-II, FEMININE, from ऊँचा, high, with the ँ nasal inside it. Read the long uu against ऊन uun, wool, from the clothes unit — and against उन un, 'those', which unit 1 declared a free word." },
        { id: "hi-u45l4-taapmaan", type: "vocab", front: "तापमान", reading: "taapmaan", meaning: "the temperature reading", accept: ["how hot or cold it is", "degrees of heat"], example: { jp: "आज तापमान बहुत ऊँचा है।", en: "The temperature is very high today." }, drill: { jp: "सर्दी में तापमान बहुत कम रहता है", en: "In winter the temperature stays very low" }, hint: "TAAP-MAAN, MASCULINE, all DENTAL letters, from ताप, heat, plus मान, a measure. The weather's temperature and a patient's alike; बुखार is the fever itself rather than the number." },
        { id: "hi-u45l4-bojh", type: "vocab", front: "बोझ", reading: "bojh", meaning: "a load", accept: ["a burden", "a weight being carried"], example: { jp: "मज़दूर के सिर पर भारी बोझ था।", en: "The labourer had a heavy load on his head." }, drill: { jp: "यह बोझ बहुत भारी है", en: "This load is very heavy" }, hint: "BOJH, MASCULINE, plural बोझ unchanged. What is physically carried, and what weighs on you — कर्ज़ का बोझ, the burden of a debt. वज़न, from the doctor's unit, is the number on the तराज़ू." },
        { id: "hi-u45l4-andaazaa", type: "vocab", front: "अंदाज़ा", reading: "andaazaa", meaning: "an estimate", accept: ["a rough guess", "a ballpark figure"], example: { jp: "मेरा अंदाज़ा ठीक नहीं था।", en: "My estimate was not right." }, drill: { jp: "उसका अंदाज़ा बहुत ठीक था", en: "His estimate was very accurate" }, hint: "AN-DAA-ZAA, MASCULINE, plural अंदाज़े, with the ज़ of unit 4 and the ं before द read as a DENTAL n. अंदाज़ा लगाना is to guess. हिसाब is a reckoning you can show the working for; an अंदाज़ा is the one you cannot." },
        { id: "hi-u45l4-taraazuu", type: "vocab", front: "तराज़ू", reading: "taraazuu", meaning: "a pair of scales", accept: ["a weighing balance", "weighing scales"], example: { jp: "दुकानदार का तराज़ू बहुत पुराना है।", en: "The shopkeeper's scales are very old." }, drill: { jp: "यह तराज़ू ठीक नहीं है", en: "These scales are not accurate" }, hint: "TA-RAA-ZUU, MASCULINE and SINGULAR — यह तराज़ू है, not 'these are' — plural तराज़ू unchanged, with the ज़ of unit 4. The two-pan balance still used in every Indian market. नाप measures length; a तराज़ू measures वज़न." },
      ],
    },
  ],
};
