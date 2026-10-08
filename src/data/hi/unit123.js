// HI Unit 123 — अंतरिक्ष और खगोल ("Space and astronomy") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 2 (u111–u123) — **AND THE LAST UNIT OF THIS BLOCK.** Conventions:
// unit1.js §1–§11, unit31.js §A1–§A8, unit61.js §B1–§B9, unit111.js §C1–§C6.
//
// 🚨 GENERIC SLOT, THEME ASSIGNED CENTRALLY (scaffold: "Vocabulary 3 (B2)") —
// see u121's header for why all sixteen B2 `Vocabulary N` slots were allocated
// before any block wrote a card. This one is **space and astronomy, probed at
// 6 of 18 taken** against all 2,270 non-glyph hi fronts, 2026-10-06 — the
// loosest of this block's three generic slots, and still twelve words clear.
//
// MEASURED HOLE. u87 विज्ञान और शोध carded the six objects a learner can point
// at or name in school — **ग्रह, खगोल, दूरबीन, ब्रह्मांड** — and u5/u16/u21 carded
// **चाँद, सूरज, तारा, आसमान**. Nothing else. No outer space, no atmosphere, no
// vacuum, no gravitation, no weightlessness, no light year, no galaxy, no
// constellation, no nebula, no comet, no meteor, no heavenly body, no orbit, no
// rotation, no axis, no pole, no eclipse, no asteroid, no launch, no craft, no
// satellite, no astronaut, no observatory and no exploration. A learner could name
// the moon and not say it goes round anything.
//
// ⚠️ THE SIX PROBE WORDS ALREADY TAKEN, AND WHAT THAT FORCED:
//   • **खगोल (u87) IS TAKEN AND IS IN THIS UNIT'S TITLE** — §C4, and the slot
//     arrived titled. **DO NOT re-card it, and खगोलशास्त्र WAS REFUSED** because
//     its gloss "astronomy" is what खगोल already carries.
//   • **ग्रह (u87) IS TAKEN**, so the unit cards the things that are NOT planets:
//     उपग्रह, क्षुद्रग्रह, पिंड, निहारिका, धूमकेतु, उल्का.
//   • **तारा (u21) IS TAKEN, AND तारामंडल WAS REFUSED** on the gloss — नक्षत्र in
//     l2 carries "a constellation" and only one of the two could.
//   • **चाँद (u5) AND सूरज (u16) ARE TAKEN, SO चंद्रमा AND सूर्य WERE REFUSED**:
//     both would normalise to "the moon" and "the sun" through `normalizeMeaning`
//     and be one answer on two cards (unit 1 §9). Those two cards are the reason
//     l3 teaches the eclipse through ग्रहण rather than through the bodies.
//   • **दूरबीन (u87) IS TAKEN**, so l4 cards वेधशाला, the building, instead.
//   • **ब्रह्मांड (u87) IS TAKEN**, so l2 opens on आकाशगंगा, one level down.
//   • **आकाश WAS REFUSED**: आसमान (u21) is glossed "the sky", and आकाश is the
//     same thing in a higher register — the register-doublet idea the lead
//     **REFUSED band-wide**, because `normalizeMeaning` strips parentheses and
//     "sky (literary)" normalises to plain "sky". आकाश survives only INSIDE
//     आकाशगंगा, where it is not a card.
//
// ⚠️ CROSS-BLOCK BOUNDARIES THAT LAND ON THIS FILE:
//   • **u126 (block 3) OWNS THE ENERGY SOURCE: सौर · पवन · टरबाइन · भाप ·
//     विद्युत.** That is why **सौरमंडल WAS NOT CARDED** although a space unit
//     obviously wants it: सौर is theirs. l2 uses आकाशगंगा and l3 परिक्रमा to do
//     the same work.
//   • **u133 (block 3) OWNS LIGHT: किरण · लेंस · अपवर्तन · वर्णक्रम.** None here —
//     which is why प्रकाशवर्ष (l1) is glossed as a DISTANCE and its hint says so.
//   • **u122 (mine) OWNS THE REACTION.** No chemistry word appears here.
//
// GENDER (§4), named in every hint:
//   ⚠️ FEMININE: आकाशगंगा, निहारिका, उल्का, परिक्रमा, धुरी, भारहीनता, वेधशाला.
//   ⚠️ **भारहीनता IS A -ता ABSTRACT, SO FEMININE BY §B6's RULE.** ⚠️ **आकाशगंगा,
//   निहारिका, उल्का, परिक्रमा AND वेधशाला ARE ALL FEMININE IN -आ**, against the
//   -आ rule (§B6) — five of them in one unit, which is unusual and worth noticing:
//   गंगा, -इका, -का, -मा and शाला are all feminine endings. धुरी is feminine with
//   a long ी, which the rule gets right.
//   MASCULINE: अंतरिक्ष, वायुमंडल, निर्वात, गुरुत्वाकर्षण, प्रकाशवर्ष, नक्षत्र,
//   धूमकेतु, पिंड, घूर्णन, ध्रुव, ग्रहण, क्षुद्रग्रह, प्रक्षेपण, यान, उपग्रह,
//   अंतरिक्षयात्री, अन्वेषण.
//   ⚠️ **धूमकेतु IS MASCULINE DESPITE ENDING IN ु**, which is the opposite call
//   from धातु (u122l2, mine, FEMININE in ु) — two units apart, same ending,
//   different genders, and nothing in the course predicts either. Both hints say so.
//   ⚠️ **अंतरिक्षयात्री IS MASCULINE DESPITE THE -ी** (the पानी class, unit 1 §4)
//   and DOES NOT CHANGE FOR A WOMAN.
//
// ⚠️ SUBSTRING TRAPS — SIX TAUGHT FRONTS SIT INSIDE THIS UNIT'S WORDS AND ONLY
// ONE OF THEM CAN BE MATCHED. Each was measured (`isLetter` is `/\p{L}/`):
//   • परिक्रमा ⊃ क्रम (u66l?, an order) — **FIRES.** The ि before it is a MĀTRĀ
//     and the ा after it is a mātrā too, so BOTH sides are clear. Named in the
//     hint as the hook: an orbit IS a going round in order. **No drill in this
//     unit contains क्रम on its own.**
//   • क्षुद्रग्रह ⊃ ग्रह (u87) — CANNOT FIRE, the र before it is a letter.
//   • उपग्रह ⊃ ग्रह — CANNOT FIRE, the प before it is a letter.
//   • ग्रहण ⊃ ग्रह — CANNOT FIRE, the ण after it is a letter. THREE words in one
//     unit holding one taught front, and none of the three routes it.
//   • गुरुत्वाकर्षण ⊃ गुरु (u90l?, a spiritual teacher) — CANNOT FIRE, the त after
//     it is a letter. Named in the hint because the two are genuinely the same
//     word: गुरु also means heavy, and gravitation is heaviness.
//   • अंतरिक्षयात्री ⊃ यात्री (u29l?, a traveller) — CANNOT FIRE, the ष before it
//     is a letter · AND ⊃ अंतरिक्ष (l1 of this unit) — CANNOT FIRE, the य after it
//     is a letter. TWO fronts inside one word, NEITHER matchable.
//   • भारहीनता ⊃ भार? **भार IS NOT A FRONT ANYWHERE** — वज़न (u35) is the word the
//     course teaches, and u122 refused भार on that gloss — so nothing to match.
//   • प्रकाशवर्ष ⊃ प्रकाश / वर्ष? **NEITHER IS A FRONT** — रोशनी (u56) and साल
//     (u17) are what the course teaches.
//   • वायुमंडल ⊃ वायु / मंडल? **NEITHER IS A FRONT** — हवा (u16) is the word.
//   • आकाशगंगा ⊃ आकाश / गंगा? **NEITHER IS A FRONT** — आसमान (u21) is the word,
//     and आकाश was refused as a register doublet, above.
//
// 🚨 TWO READING NEAR-COLLISIONS, BOTH AGAINST MY OWN u117, and both named in
// their hints because no tool catches them:
//   • घूर्णन **ghuurnan** against घूरना **ghuurnaa** (u117l2, "to stare") — three
//     letters shared and one syllable apart. Not a collision (`reading-taken.mjs`
//     reports both free) but a learner will mix them.
//   • निहारिका **nihaarikaa** against निहारना **nihaarnaa** (u117l4, "to gaze") —
//     the same, and the coincidence is almost too good: a nebula is a thing you
//     gaze at. The words are unrelated.
//   Also checked and clear: धुरी dhurii against दूरी duurii (u29) — different
//   vowels, different first consonants.
//
// RETROFLEX/DENTAL (§1b): पिंड pind and ग्रहण grahan carry RETROFLEX ड and ण;
// निर्वात nirvaat, नक्षत्र nakshatra and ध्रुव dhruv are DENTAL. गुरुत्वाकर्षण
// gurutvaakarshan ends in RETROFLEX ण. No pair in the corpus needs the doubling
// escape hatch — measured, not assumed. 24 new readings, 24 distinct, zero
// collisions against all 2,270.
// LOANWORD FREE-PASS CHECK (§9): **zero loanwords.** रॉकेट was the obvious card
// and was **REFUSED**: it opens with ऑ… in fact with ॉ on र, which unit1.js §7
// leaves uncarded and which no Hindi unit has taught a learner to decode, and its
// reading would in any case read almost exactly as its English gloss. निर्वात
// took the l1 slot instead and is a native word that teaches more.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision rather than a
// gap: चंद्रमा / सूर्य / आकाश / तारामंडल / खगोलशास्त्र / रॉकेट (ALL SIX REFUSED
// above, each with the reason), सौरमंडल (u126's सौर), कक्ष (passed over — कक्षा
// u34 is "a classroom" and the two are one lexeme with two genders, the पर्चा/पर्ची
// case from u112), दीर्घवृत्त, प्रकाशपुंज, अंतरिक्षयान (passed over — अंतरिक्ष and
// यान are both carded here and the compound adds nothing).
export const HI_UNIT123 = {
  id: "hi-u123",
  lang: "hi",
  title: "अंतरिक्ष और खगोल",
  order: 123,
  stage: "b2",
  lessons: [
    {
      id: "hi-u123l1",
      unit: 123,
      lesson: 1,
      title: "Beyond the air",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe what is outside the atmosphere: outer space, the air envelope itself, a vacuum, gravitation, weightlessness and the light year.",
      items: [
        { id: "hi-u123l1-antariksh", type: "vocab", front: "अंतरिक्ष", reading: "antariksh", meaning: "outer space", accept: ["everything beyond a planet's air"], example: { jp: "अंतरिक्ष में कोई हवा नहीं है, इसलिए वहाँ आवाज़ एक जगह से दूसरी जगह नहीं जाती।", en: "There is no air in outer space, which is why sound does not travel from one place to another there." }, drill: { jp: "अंतरिक्ष में कोई हवा नहीं है", en: "There is no air in outer space" }, hint: "AN-TA-RIKSH, masculine. अंतर, a gap, plus इक्ष — and क्ष is one of unit 6's three letter-conjuncts. The ं is before त, a stop, so unit 1 §1 writes it as the homorganic n. ⚠️ Not आसमान (unit 21), which is the sky you can see FROM the ground: अंतरिक्ष begins where the वायुमंडल of the next card ends." },
        { id: "hi-u123l1-vaayumandal", type: "vocab", front: "वायुमंडल", reading: "vaayumandal", meaning: "the envelope of air round a planet", accept: ["the layer of air a world holds on to"], example: { jp: "वायुमंडल के बिना दिन में बहुत गरमी और रात में बहुत ठंडा हो जाता।", en: "Without the atmosphere it would get very hot in the day and very cold at night." }, drill: { jp: "वायुमंडल के बिना रात बहुत ठंडी होती", en: "Without the atmosphere the night would be very cold" }, hint: "VAA-YU-MAN-DAL, masculine. वायु, air in the literary register, plus मंडल, a ring. 🚨 THE GLOSS IS DELIBERATELY LONG: हवा (unit 16) is glossed 'wind' and ACCEPTS 'the atmosphere', so a short gloss would have been one answer on two cards (unit 1 §9). ⚠️ वायु is not carded anywhere; हवा is the word a learner needs." },
        { id: "hi-u123l1-nirvaat", type: "vocab", front: "निर्वात", reading: "nirvaat", meaning: "a vacuum", accept: ["a space with nothing at all in it"], example: { jp: "निर्वात में कुछ भी गिरता नहीं रुकता, क्योंकि उसे रोकने के लिए हवा ही नहीं होती।", en: "In a vacuum nothing falling slows down, because there is no air at all to stop it." }, drill: { jp: "निर्वात में गिरती चीज़ नहीं रुकती", en: "In a vacuum a falling thing does not stop" }, hint: "NIR-VAAT, masculine and consonant-final, त DENTAL. निर्-, without, plus वात, air — the same निर्- as निर्धन (u114l1, mine). 🚨 **IT TOOK रॉकेट's PLACE IN THIS LESSON**: that word opens with a ॉ, which unit1.js §7 leaves uncarded and no unit has taught, and its reading would read straight off its own gloss (§9)." },
        { id: "hi-u123l1-gurutvaakarshan", type: "vocab", front: "गुरुत्वाकर्षण", reading: "gurutvaakarshan", meaning: "gravitation", accept: ["the pull every heavy thing has on every other"], example: { jp: "गुरुत्वाकर्षण के कारण चाँद हमारे ग्रह के पास ही रहता है और दूर नहीं चला जाता।", en: "Because of gravitation the moon stays right near our planet and does not go away." }, drill: { jp: "गुरुत्वाकर्षण चाँद को पास ही रखता है", en: "Gravitation keeps the moon right near" }, hint: "GU-RUT-VAA-KAR-SHAN, masculine — the longest front in this unit. गुरुत्व, heaviness, plus आकर्षण, an attraction. 🚨 गुरु (unit 90) IS A STRING INSIDE IT AND CANNOT BE MATCHED, the त after it being a letter — but the two ARE the same word: गुरु also means HEAVY, which is why this is 'heaviness-attraction'. The ण is RETROFLEX." },
        { id: "hi-u123l1-bhaarhiinataa", type: "vocab", front: "भारहीनता", reading: "bhaarhiinataa", meaning: "weightlessness", accept: ["the state of nothing pressing down on you"], example: { jp: "भारहीनता में चलना नहीं पड़ता — बस हल्का धक्का देकर आदमी एक दीवार से दूसरी तक चला जाता है।", en: "In weightlessness you do not have to walk — with a light push a person goes from one wall to the other." }, drill: { jp: "भारहीनता में चलना नहीं पड़ता", en: "In weightlessness you do not have to walk" }, hint: "BHAAR-HII-NA-TAA, feminine — a -ता abstract, so feminine by §B6's rule. भार, weight, plus हीन, lacking, plus -ता. ⚠️ **भार IS NOT A FRONT ANYWHERE**: वज़न (unit 35) is what the course teaches, and u122 (mine) refused भार on that very gloss — so there is nothing here for the router to match." },
        { id: "hi-u123l1-prakaashvarsh", type: "vocab", front: "प्रकाशवर्ष", reading: "prakaashvarsh", meaning: "a light year", accept: ["the distance light covers in one year"], example: { jp: "सबसे पास का तारा चार प्रकाशवर्ष दूर है, इसलिए हम उसे चार साल पुराना देखते हैं।", en: "The nearest star is four light years away, which is why we see it four years old." }, drill: { jp: "सबसे पास का तारा चार प्रकाशवर्ष दूर है", en: "The nearest star is four light years away" }, hint: "PRA-KAASH-VARSH, masculine. 🚨 **A MEASURE OF DISTANCE, NOT OF TIME**, which the gloss says on purpose because the word looks like a year. प्रकाश, light, plus वर्ष, a year — ⚠️ **NEITHER IS A FRONT**: रोशनी (unit 56) and साल (unit 17) are what the course teaches. र्ष is र with its halant above the ष." },
      ],
    },
    {
      id: "hi-u123l2",
      unit: 123,
      lesson: 2,
      title: "What is out there",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name what the sky actually holds: a galaxy, a constellation, a nebula, a comet, a meteor and a heavenly body in general.",
      items: [
        { id: "hi-u123l2-aakaashgangaa", type: "vocab", front: "आकाशगंगा", reading: "aakaashgangaa", meaning: "a galaxy", accept: ["one of the great wheels of stars"], example: { jp: "हमारी आकाशगंगा में हज़ारों लाख तारे हैं, और ब्रह्मांड में ऐसी बहुत आकाशगंगा हैं।", en: "There are countless stars in our galaxy, and in the universe there are many such galaxies." }, drill: { jp: "हमारी आकाशगंगा में बहुत तारे हैं", en: "There are many stars in our galaxy" }, hint: "AA-KAASH-GAN-GAA. ⚠️ FEMININE IN -आ, against the rule (§B6), because गंगा is — and the word is literally 'the sky's Ganges', which is what Indians have always called the Milky Way. 🚨 आकाश IS NOT A FRONT and was REFUSED: आसमान (unit 21) is glossed 'the sky' and the two would be one answer (unit 1 §9)." },
        { id: "hi-u123l2-nakshatra", type: "vocab", front: "नक्षत्र", reading: "nakshatra", meaning: "a constellation", accept: ["a named group of stars seen as one shape"], example: { jp: "किसान आज भी नक्षत्र देखकर बताते हैं कि बारिश कब आएगी, और वे अक्सर ठीक होते हैं।", en: "Farmers still tell from the constellations when the rain will come, and they are often right." }, drill: { jp: "किसान नक्षत्र देखकर बारिश का समय बताते हैं", en: "Farmers tell the time of rain from the constellations" }, hint: "NAK-SHA-TRA, masculine. Both क्ष and त्र are unit 6 letter-conjuncts — two of the three in one four-letter word. ⚠️ तारामंडल WAS REFUSED for this slot because its gloss would have been the same, and तारा (unit 21) is already taught. In India नक्षत्र is also an astrological unit, which is why farmers appear in the example." },
        { id: "hi-u123l2-nihaarikaa", type: "vocab", front: "निहारिका", reading: "nihaarikaa", meaning: "a nebula", accept: ["a cloud of dust and gas between the stars"], example: { jp: "जो हल्का बादल दूरबीन में दिखता है, वह निहारिका है, और उसी से नए तारे बनते हैं।", en: "The faint cloud visible in the telescope is a nebula, and new stars are formed out of it." }, drill: { jp: "दूरबीन में दिखने वाला बादल निहारिका है", en: "The cloud visible in the telescope is a nebula" }, hint: "NI-HAA-RI-KAA. ⚠️ FEMININE IN -आ, against the rule. 🚨 **ONE SYLLABLE FROM निहारना (u117l4, MINE, 'to gaze')** — nihaarikaa against nihaarnaa — and the coincidence is almost too neat, because a nebula is exactly a thing you gaze at. **THE WORDS ARE UNRELATED** and no tool catches the pair, so check which one you mean." },
        { id: "hi-u123l2-dhuumketu", type: "vocab", front: "धूमकेतु", reading: "dhuumketu", meaning: "a comet", accept: ["an icy body that grows a tail near the sun"], example: { jp: "धूमकेतु हर कुछ साल में लौट आता है, और सूरज के पास आने पर उसकी पूँछ दिखने लगती है।", en: "A comet comes back every few years, and its tail begins to show when it comes near the sun." }, drill: { jp: "सूरज के पास आने पर धूमकेतु दिखता है", en: "A comet shows when it comes near the sun" }, hint: "DHUUM-KE-TU. 🚨 **MASCULINE DESPITE ENDING IN ु**, and that is the OPPOSITE call from धातु (u122l2, mine), which is FEMININE in the same ending — two of my units, same shape, different gender, and nothing in the course predicts either. धूम, smoke, plus केतु, a banner: a smoke-flag." },
        { id: "hi-u123l2-ulkaa", type: "vocab", front: "उल्का", reading: "ulkaa", meaning: "a meteor", accept: ["a bit of rock that burns up on the way down"], example: { jp: "रात में जो तारा गिरता दिखता है, वह तारा नहीं — वह एक उल्का है जो वायुमंडल में जल जाती है।", en: "What looks like a falling star at night is not a star — it is a meteor burning up in the atmosphere." }, drill: { jp: "गिरता तारा सच में एक उल्का है", en: "A falling star is really a meteor" }, hint: "UL-KAA. ⚠️ FEMININE IN -आ, against the rule — उल्का जल जाती है, never जाता. ल्क is ल with a halant then क. 🚨 THE EXAMPLE CORRECTS A THING EVERY LEARNER BELIEVES, which is the reason to card it: the 'falling star' is not a star, and the giveaway is that it burns in the वायुमंडल of lesson 1." },
        { id: "hi-u123l2-pind", type: "vocab", front: "पिंड", reading: "pind", meaning: "a heavenly body", accept: ["any single lump of matter out in space"], example: { jp: "ग्रह, उपग्रह और क्षुद्रग्रह — ये सब पिंड हैं, और हर एक किसी न किसी का चक्कर लगाता है।", en: "Planets, satellites and asteroids — all of these are bodies, and each one goes round something or other." }, drill: { jp: "ग्रह और उपग्रह दोनों पिंड हैं", en: "A planet and a satellite are both bodies" }, hint: "PIND, masculine and one syllable, with a RETROFLEX ड and the ं before it written as the homorganic n. ⚠️ The umbrella word for the whole of lesson 2 and half of lesson 3: anything out there with a shape of its own is a पिंड, and Hindi also uses it of a lump of dough." },
      ],
    },
    {
      id: "hi-u123l3",
      unit: 123,
      lesson: 3,
      title: "Turning, and crossing in front",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe motion in the sky: an orbit, rotation, an axis, a pole, an eclipse and an asteroid.",
      items: [
        { id: "hi-u123l3-parikramaa", type: "vocab", front: "परिक्रमा", reading: "parikramaa", meaning: "an orbit", accept: ["the going-round one body does about another"], example: { jp: "चाँद हमारे ग्रह की परिक्रमा लगभग एक महीने में पूरी करता है।", en: "The moon completes its orbit about our planet in roughly a month." }, drill: { jp: "चाँद एक महीने में परिक्रमा पूरी करता है", en: "The moon completes its orbit in a month" }, hint: "PA-RI-KRA-MAA. ⚠️ FEMININE IN -आ, against the rule. 🚨 क्रम, an order (unit 66), IS A STRING INSIDE IT AND THE ROUTER **CAN** MATCH IT — the ि before it and the ा after it are both MĀTRĀ, so both sides are clear. That is the hook: an orbit IS a going round in order. ⚠️ In India परिक्रमा also means walking round a temple." },
        { id: "hi-u123l3-ghuurnan", type: "vocab", front: "घूर्णन", reading: "ghuurnan", meaning: "rotation", accept: ["a body turning on itself"], example: { jp: "परिक्रमा और घूर्णन एक चीज़ नहीं हैं — एक किसी और के चारों तरफ़ है और दूसरा अपने ही ऊपर।", en: "An orbit and rotation are not the same thing — one is about something else and the other on itself." }, drill: { jp: "परिक्रमा और घूर्णन एक चीज़ नहीं हैं", en: "An orbit and rotation are not the same thing" }, hint: "GHUUR-NAN, masculine, घ with a puff of air, a LONG ू and a RETROFLEX ण. 🚨 **ONE SYLLABLE FROM घूरना (u117l2, MINE, 'to stare')** — ghuurnan against ghuurnaa — and both are in this block. **THE WORDS ARE UNRELATED**; no tool catches the pair. The example is the definition, against परिक्रमा one card above." },
        { id: "hi-u123l3-dhurii", type: "vocab", front: "धुरी", reading: "dhurii", meaning: "an axis", accept: ["the line a turning thing turns about"], example: { jp: "हमारा ग्रह अपनी धुरी पर थोड़ा टेढ़ा है, और उसी से मौसम बदलते हैं।", en: "Our planet is slightly tilted on its axis, and that is what makes the seasons change." }, drill: { jp: "हमारा ग्रह अपनी धुरी पर टेढ़ा है", en: "Our planet is tilted on its axis" }, hint: "DHU-RII, feminine with a long ी, which the rule gets right. ⚠️ **CHECKED AGAINST दूरी, a distance (unit 29)** — dhurii against duurii, different first consonant and different vowel, so no collision. 🚨 THE EXAMPLE EXPLAINS THE SEASONS IN ONE CLAUSE, which is why the word is worth a card: the tilt, not the distance, is what causes them." },
        { id: "hi-u123l3-dhruv", type: "vocab", front: "ध्रुव", reading: "dhruv", meaning: "a pole", accept: ["either end of the axis a world turns on"], example: { jp: "दोनों ध्रुव पर छह महीने दिन और छह महीने रात रहती है, क्योंकि वे धुरी के सिरे हैं।", en: "At both poles there are six months of day and six months of night, because they are the ends of the axis." }, drill: { jp: "ध्रुव पर छह महीने रात रहती है", en: "At the pole there are six months of night" }, hint: "DHRUV, masculine and one syllable. ध्र is a stacked conjunct with a puff of air — ध with a halant, then र — and the whole word is four letters. ⚠️ It is also a common man's name in India, and in old Hindi ध्रुव तारा is the Pole Star, the one that does not move." },
        { id: "hi-u123l3-grahan", type: "vocab", front: "ग्रहण", reading: "grahan", meaning: "an eclipse", accept: ["one body's shadow falling across another"], example: { jp: "ग्रहण उसी दिन होता है जब तीनों पिंड एक सीधी लाइन में आ जाते हैं।", en: "An eclipse happens on the day when all three bodies come into one straight line." }, drill: { jp: "एक लाइन में आने पर ग्रहण होता है", en: "When they line up an eclipse happens" }, hint: "GRA-HAN, masculine, with a RETROFLEX ण. ⚠️ ग्रह, a planet (unit 87), IS A STRING INSIDE IT AND **CANNOT** BE MATCHED, the ण after it being a letter — the third word in this unit holding ग्रह and the third that cannot route it. ⚠️ ग्रहण also means a taking or accepting, which is the older sense: the shadow 'takes' the light." },
        { id: "hi-u123l3-kshudragrah", type: "vocab", front: "क्षुद्रग्रह", reading: "kshudragrah", meaning: "an asteroid", accept: ["a small rocky body going round the sun"], example: { jp: "दो ग्रहों के बीच हज़ारों क्षुद्रग्रह घूमते हैं, और कोई इतना बड़ा नहीं कि ग्रह कहा जाए।", en: "Thousands of asteroids go round between two planets, and none is large enough to be called a planet." }, drill: { jp: "दो ग्रहों के बीच हज़ारों क्षुद्रग्रह घूमते हैं", en: "Thousands of asteroids go round between two planets" }, hint: "KSHUD-RA-GRAH, masculine. क्षुद्र, petty or small, plus ग्रह, a planet (unit 87) — literally a lesser planet, which is exactly what an asteroid was called for two centuries. 🚨 ग्रह CANNOT be matched here either: the र before it is a letter. क्ष is one of unit 6's letter-conjuncts." },
      ],
    },
    {
      id: "hi-u123l4",
      unit: 123,
      lesson: 4,
      title: "Going to look",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about going there and looking from here: a launch, a craft, a satellite, an astronaut, an observatory and exploration itself.",
      items: [
        { id: "hi-u123l4-prakshepan", type: "vocab", front: "प्रक्षेपण", reading: "prakshepan", meaning: "a launch", accept: ["the sending of a craft up off the ground"], example: { jp: "प्रक्षेपण सुबह चार बजे हुआ, और दस मिनट में यान वायुमंडल के बाहर था।", en: "The launch happened at four in the morning, and in ten minutes the craft was outside the atmosphere." }, drill: { jp: "प्रक्षेपण सुबह चार बजे हुआ", en: "The launch happened at four in the morning" }, hint: "PRA-KSHE-PAN, masculine, क्ष again and a RETROFLEX ण. From क्षेप, a throwing — the same क्षेप as अवक्षेप (u122l3, mine) and हस्तक्षेप (u114l3, mine). ⚠️ Three of my units teach a -क्षेप word; the root is worth learning once." },
        { id: "hi-u123l4-yaan", type: "vocab", front: "यान", reading: "yaan", meaning: "a vessel built to travel", accept: ["a made thing that carries people or machines"], example: { jp: "यह यान बिना आदमी के भेजा गया था, और उसने दो साल बाद तस्वीरें भेजीं।", en: "This craft was sent without a person on board, and it sent pictures two years later." }, drill: { jp: "यह यान बिना आदमी के भेजा गया", en: "This craft was sent without a person" }, hint: "YAAN, masculine and consonant-final, न DENTAL. 🚨 THE GLOSS IS DELIBERATELY NOT 'A CRAFT': हुनर (unit 32) is glossed 'a skill' and ACCEPTS 'a craft', so `normalizeMeaning` would have made the two one answer (unit 1 §9). ⚠️ Hindi uses यान of any built vehicle — वायुयान is an aeroplane — so it is not a space word by itself." },
        { id: "hi-u123l4-upgrah", type: "vocab", front: "उपग्रह", reading: "upgrah", meaning: "a satellite", accept: ["a smaller body going round a larger one"], example: { jp: "चाँद हमारा अपना उपग्रह है, और उसके अलावा आदमी के बनाए बहुत उपग्रह ऊपर घूम रहे हैं।", en: "The moon is our own satellite, and besides it many man-made satellites are going round above." }, drill: { jp: "चाँद हमारा अपना उपग्रह है", en: "The moon is our own satellite" }, hint: "UP-GRAH, masculine. उप-, under or lesser, plus ग्रह, a planet (unit 87) — the same उप- as उपमहाद्वीप (u111l3, mine) and उपशीर्षक (u118l1, mine). 🚨 ग्रह CANNOT be matched: the प before it is a letter. ⚠️ ONE WORD FOR BOTH the moon and a machine, which the example makes explicit." },
        { id: "hi-u123l4-antarikshyaatrii", type: "vocab", front: "अंतरिक्षयात्री", reading: "antarikshyaatrii", meaning: "an astronaut", accept: ["a person who goes up out of the atmosphere"], example: { jp: "हर अंतरिक्षयात्री को जाने से पहले सालों तक भारहीनता में काम करने का प्रशिक्षण दिया जाता है।", en: "Every astronaut is given years of training in working in weightlessness before going." }, drill: { jp: "हर अंतरिक्षयात्री को लंबा प्रशिक्षण दिया जाता है", en: "Every astronaut is given long training" }, hint: "AN-TA-RIKSH-YAA-TRII. ⚠️ MASCULINE DESPITE THE -ी (the पानी class, unit 1 §4) and it DOES NOT CHANGE FOR A WOMAN. अंतरिक्ष (lesson 1) plus यात्री, a traveller (unit 29). 🚨 **TWO TAUGHT FRONTS INSIDE ONE WORD AND NEITHER CAN BE MATCHED**: अंतरिक्ष is followed by the letter य, and यात्री is preceded by the letter ष." },
        { id: "hi-u123l4-vedhshaalaa", type: "vocab", front: "वेधशाला", reading: "vedhshaalaa", meaning: "an observatory", accept: ["the building a big telescope sits in"], example: { jp: "वेधशाला पहाड़ पर बनाई जाती है, क्योंकि ऊपर हवा साफ़ होती है और शहर की रोशनी दूर रहती है।", en: "An observatory is built on a mountain, because the air is clear up there and the city's light stays far away." }, drill: { jp: "वेधशाला पहाड़ पर बनाई जाती है", en: "An observatory is built on a mountain" }, hint: "VEDH-SHAA-LAA. ⚠️ FEMININE IN -आ, against the rule, because शाला, a hall, is feminine — the fifth -आ feminine in this unit. वेध, a piercing, plus शाला: the hall where you pierce the distance. ⚠️ दूरबीन, a telescope, is unit 87's and is used here, not taught — which is why this slot cards the BUILDING." },
        { id: "hi-u123l4-anveshan", type: "vocab", front: "अन्वेषण", reading: "anveshan", meaning: "exploration", accept: ["going out to find what is not known yet"], example: { jp: "अंतरिक्ष का अन्वेषण महँगा है, पर उससे जो मिलता है उसका हिसाब पहले से लगाया नहीं जा सकता।", en: "The exploration of space is expensive, but what comes out of it cannot be reckoned in advance." }, drill: { jp: "अंतरिक्ष का अन्वेषण बहुत महँगा है", en: "The exploration of space is very expensive" }, hint: "AN-VE-SHAN, masculine, न्व a stacked conjunct and a RETROFLEX ष. ⚠️ Not खोज (unit 43), which is looking for a particular thing you know you want: अन्वेषण is going out without knowing what you will find, which is why it closes this unit and this block." },
      ],
    },
  ],
};
