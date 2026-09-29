// HI Unit 29 — सफ़र ("The journey") — A1
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 RETHEMED SLOT — the scaffold's "Vocabulary 5", a title lint hard-errors on.
//
// WHY TRAVEL, MEASURED. u9 spent its loanword-decoding slot on the VEHICLES and
// the buildings — ट्रेन, टिकट, स्टेशन, हवाई जहाज़, टैक्सी, साइकिल, होटल — and u14
// gave the learner a town to walk around in. What neither gave them was the
// JOURNEY: probed against the merged u1–u28 corpus, there was no word for a
// journey, a ride, a map, a distance, a depot, a destination, a traveller, getting
// on, getting off, waiting, getting lost, driving, staying the night, wandering,
// coming back, going on foot, a wheel, fuel, a bend, a crossroads, speed or
// danger. A learner could name a train and could not board one.
// The order inside the unit is the order of a real trip: l1 before you go, l2
// boarding and alighting, l3 being away and coming home, l4 the road itself.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   यात्री and पहिया are MASCULINE — पहिया is the तकिया / तौलिया / डाकिया trap a
//   fourth time, and it is worth the repetition, because -या looks feminine and
//   never is in this corpus.
//   सवारी, दूरी, मंज़िल, सैर and गति are FEMININE; मंज़िल and गति end in a
//   consonant and an इ, so neither ending tells you.
//
// RETROFLEX/DENTAL: NO NEW COLLISION, MEASURED. This unit adds अड्डा addaa
// (doubled retroflex ड्ड) and ठहरना thaharnaa (retroflex ठ). Checked against all
// 672 readings: no अद्दा, no थहरना. So the retroflex member doubles nowhere new
// and unit11.js's साठ/साथ remains the only place §1(b)'s hatch has ever fired.
// ⚠️ ONE NOTATION NOTE FOR A LATER SEAT: अड्डा's reading "addaa" and u2's GLYPH
// ड "dda" both use the doubled d, and that is consistent — §2 doubles the glyph
// and §1(b) doubles the word — but the two strings are distinct, so there is no
// collision, only a resemblance.
//
// LEXEME CALLS MADE BY HAND:
//   • दूरी (l1, "distance") / दूर (u14l2, "far") — derivation: the adjective
//     versus the measured amount. `derive("दूर")` gives दूरें and दूरों, never
//     दूरी. ⚠️ MECHANICAL NOTE: दूरी DOES satisfy a whole-word search for दूर,
//     because the trailing ी is a MĀTRĀ and findWholeWord's boundary test uses
//     \p{L}. Harmless as authored — u14l2's drill has no दूरी — but a later seat
//     must not put one there.
//   • साथी (l3, "a companion") / साथ (u8l4, "with") — same derivation, same
//     mechanical note, same clean state today.
//   • चलाना (l2, "to drive") / चलना (u12l1, "to walk") — the -आ- causative, the
//     third and last of this block's three (see unit26.js's header for the call).
//   • यात्री (l2) / यात्रा — यात्रा is deliberately NOT taught. It is a true
//     synonym of सफ़र (l1) and carding both would be two mastery tracks for one
//     meaning; यात्रा is named in सफ़र's hint as the formal register instead.
//   • अड्डा (l1) / हवाई जहाज़ (u9l1) — unrelated; noted only because हवाई अड्डा,
//     an airport, is in अड्डा's hint and a reader may wonder.
export const HI_UNIT29 = {
  id: "hi-u29",
  lang: "hi",
  title: "सफ़र",
  order: 29,
  stage: "a1",
  lessons: [
    {
      id: "hi-u29l1",
      unit: 29,
      lesson: 1,
      title: "Before you set off",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Plan a journey — say how long it is, how far away it is, where you catch it and where you are heading.",
      items: [
        { id: "hi-u29l1-safar", type: "vocab", front: "सफ़र", reading: "safar", meaning: "a journey", accept: ["a trip", "travel", "a voyage"], example: { jp: "गाँव का सफ़र आठ घंटे का है।", en: "The journey to the village is eight hours." }, drill: { jp: "यह सफ़र बहुत मुश्किल है", en: "This journey is very difficult" }, hint: "SA-FAR, MASCULINE, with the Persian फ़ — an f. यात्रा is its Sanskrit twin and sounds formal; this course teaches only this one. शुभ सफ़र is what you say to someone leaving." },
        { id: "hi-u29l1-savaarii", type: "vocab", front: "सवारी", reading: "savaarii", meaning: "a ride", accept: ["a lift", "a ride on a vehicle", "transport you sit on"], example: { jp: "इस सड़क पर सवारी मिलती है।", en: "You can get a ride on this road." }, drill: { jp: "यहाँ सवारी बहुत कम है", en: "There is very little transport here" }, hint: "SA-VAA-RII, FEMININE. It is the ride, the vehicle and the person riding, all at once: सवारी करना is to ride. A rickshaw driver looking for custom is looking for सवारी." },
        { id: "hi-u29l1-nakshaa", type: "vocab", front: "नक्शा", reading: "nakshaa", meaning: "a map", accept: ["a plan", "a chart", "a drawing of a place"], example: { jp: "मेरे पास इस शहर का नक्शा है।", en: "I have a map of this city." }, drill: { jp: "यह नक्शा बहुत पुराना है", en: "This map is very old" }, hint: "NAK-SHAA, MASCULINE, plural नक्शे. Arabic, and it covers both a map and a building plan. मैप is common in speech now, but नक्शा is what is printed on the document." },
        { id: "hi-u29l1-duurii", type: "vocab", front: "दूरी", reading: "duurii", meaning: "distance", accept: ["how far it is", "the gap between two places"], example: { jp: "दोनों गाँवों के बीच दूरी बहुत कम है।", en: "The distance between the two villages is very small." }, drill: { jp: "इस रास्ते की दूरी बहुत ज़्यादा है", en: "This road's distance is very great" }, hint: "DUU-RII, FEMININE, built on दूर, far. दूर is the ADJECTIVE — far away — and दूरी is the measured amount: दो घंटे की दूरी, a two-hour distance. Keep the two jobs apart." },
        { id: "hi-u29l1-addaa", type: "vocab", front: "अड्डा", reading: "addaa", meaning: "a depot", accept: ["a stand", "a terminus", "a place people gather"], example: { jp: "बस अड्डा स्टेशन के सामने है।", en: "The bus depot is in front of the station." }, drill: { jp: "यह अड्डा बहुत बड़ा है", en: "This depot is very big" }, hint: "AD-DAA, MASCULINE, with a doubled RETROFLEX ड्ड — curl the tongue back and hold it. बस अड्डा is a bus station, हवाई अड्डा an airport. Informally an अड्डा is also someone's regular hangout." },
        { id: "hi-u29l1-manzil", type: "vocab", front: "मंज़िल", reading: "manzil", meaning: "a destination", accept: ["a goal", "where you are heading", "a floor of a building"], example: { jp: "मेरी मंज़िल यहाँ से बहुत दूर है।", en: "My destination is very far from here." }, drill: { jp: "यह मेरी आखिरी मंज़िल है", en: "This is my final destination" }, hint: "MAN-ZIL, FEMININE, with the Persian ज़. Two senses, both from 'a stage of a journey': your destination, and a floor of a building — तीसरी मंज़िल, the third floor." },
      ],
    },
    {
      id: "hi-u29l2",
      unit: 29,
      lesson: 2,
      title: "Getting on and getting off",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Board a vehicle, get off at the right stop, wait for one, drive one, and say what to do when you get lost.",
      items: [
        { id: "hi-u29l2-charhnaa", type: "vocab", front: "चढ़ना", reading: "charhnaa", meaning: "to climb on", accept: ["to get on", "to go up", "to mount"], example: { jp: "हम स्टेशन पर ट्रेन में चढ़ते हैं।", en: "We get on the train at the station." }, drill: { jp: "पहाड़ पर चढ़ना मुश्किल है", en: "Climbing the mountain is difficult" }, hint: "CHARH-NAA with ढ़ — a flapped r with a puff after it. It is getting onto a vehicle and climbing a hill alike. What you get onto takes पर or में: बस में चढ़ो." },
        { id: "hi-u29l2-utarnaa", type: "vocab", front: "उतरना", reading: "utarnaa", meaning: "to get down", accept: ["to get off", "to descend", "to come down"], example: { jp: "मैं अगले अड्डे पर उतरता हूँ।", en: "I get off at the next depot." }, drill: { jp: "यहाँ बस से उतरना है", en: "One has to get off the bus here" }, hint: "U-TAR-NAA is चढ़ना's mirror: getting off a vehicle, coming downstairs, a fever coming down. What you get off takes से, never पर: बस से उतरो." },
        { id: "hi-u29l2-intazaar", type: "vocab", front: "इंतज़ार", reading: "intazaar", meaning: "waiting", accept: ["a wait", "expectation of someone", "the act of waiting"], example: { jp: "मैं स्टेशन पर ट्रेन का इंतज़ार करता हूँ।", en: "I wait for the train at the station." }, drill: { jp: "यहाँ इंतज़ार करना मुश्किल है", en: "Waiting here is difficult" }, hint: "IN-TA-ZAAR, MASCULINE, with the Persian ज़. The frame is X का इंतज़ार करना — literally 'to do the waiting OF X', never 'for'. इंतज़ार में means 'in wait'." },
        { id: "hi-u29l2-khonaa", type: "vocab", front: "खोना", reading: "khonaa", meaning: "to lose", accept: ["to mislay", "to be lost", "to lose your way"], example: { jp: "मैं रोज़ अपनी चाबी खोता हूँ।", en: "I lose my key every day." }, drill: { jp: "इस शहर में खोना आसान है", en: "Getting lost in this city is easy" }, hint: "KHO-NAA is both losing a thing and getting lost yourself: मैं रास्ता खो गया. खोया-पाया is the lost-property desk. Read it against होना, सोना, रोना and धोना — five verbs, one letter apart each." },
        { id: "hi-u29l2-chalaanaa", type: "vocab", front: "चलाना", reading: "chalaanaa", meaning: "to drive", accept: ["to operate", "to run a machine", "to make something go"], example: { jp: "वह बहुत तेज़ गाड़ी चलाता है।", en: "He drives the car very fast." }, drill: { jp: "गाड़ी चलाना मुश्किल नहीं है", en: "Driving a car is not difficult" }, hint: "CHA-LAA-NAA is चलना with the causative आ pushed in: चलना is for a thing to go, चलाना is to MAKE it go. So it covers driving a car, running a shop and operating a machine alike." },
        { id: "hi-u29l2-yaatrii", type: "vocab", front: "यात्री", reading: "yaatrii", meaning: "a traveller", accept: ["a pilgrim", "someone on a journey"], example: { jp: "इस ट्रेन में बहुत यात्री हैं।", en: "There are a lot of travellers on this train." }, drill: { jp: "हर यात्री का टिकट ज़रूरी है", en: "Every traveller's ticket is necessary" }, hint: "YAA-TRII, MASCULINE despite the -ी, with the त्र conjunct. From यात्रा, the Sanskrit side of सफ़र. It covers someone on a train and someone on a religious journey equally." },
      ],
    },
    {
      id: "hi-u29l3",
      unit: 29,
      lesson: 3,
      title: "Being away, and coming back",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where you are staying, that you are going out to look around, who is with you, and when you come back.",
      items: [
        { id: "hi-u29l3-thaharnaa", type: "vocab", front: "ठहरना", reading: "thaharnaa", meaning: "to stay the night", accept: ["to put up somewhere", "to lodge", "to halt"], example: { jp: "हम होटल में दो रात ठहरते हैं।", en: "We stay two nights in the hotel." }, drill: { jp: "यहाँ ठहरना बहुत सस्ता है", en: "Staying here is very cheap" }, hint: "THA-HAR-NAA with a RETROFLEX ठ — curl the tongue back, then a puff. It is staying somewhere TEMPORARILY, where रहना is living somewhere. ठहरिए! also means 'hold on a moment'." },
        { id: "hi-u29l3-ghuumnaa", type: "vocab", front: "घूमना", reading: "ghuumnaa", meaning: "to wander", accept: ["to go around", "to sightsee", "to stroll about"], example: { jp: "हम रोज़ शाम को बाज़ार में घूमते हैं।", en: "We wander around the market every evening." }, drill: { jp: "नए शहर में घूमना अच्छा है", en: "Wandering around a new city is good" }, hint: "GHUUM-NAA with a long ू. It is going about with no fixed goal, and it is THE word for sightseeing: घूमने जाना, to go out and look around. घूमना-फिरना together means travelling for pleasure." },
        { id: "hi-u29l3-vaapas", type: "vocab", front: "वापस", reading: "vaapas", meaning: "back again", accept: ["returned", "the way one came", "back"], example: { jp: "मैं शाम को वापस घर आता हूँ।", en: "I come back home in the evening." }, drill: { jp: "वह कल वापस गाँव जाता है", en: "He goes back to the village tomorrow" }, hint: "VAA-PAS never changes. It is an ADVERB, not a verb, so it always needs one beside it: वापस आना, to come back; वापस देना, to give back. लौटना says the same thing in one word." },
        { id: "hi-u29l3-saathii", type: "vocab", front: "साथी", reading: "saathii", meaning: "a companion", accept: ["a fellow traveller", "a mate", "someone who goes with you"], example: { jp: "सफ़र में एक अच्छा साथी बहुत ज़रूरी है।", en: "A good companion is very important on a journey." }, drill: { jp: "वह मेरा पुराना साथी है", en: "He is an old companion of mine" }, hint: "SAA-THII, MASCULINE, with a DENTAL थ, built straight on साथ, 'with'. It is a companion rather than a friend — जीवन साथी is a spouse. दोस्त is the word for a friend proper." },
        { id: "hi-u29l3-paidal", type: "vocab", front: "पैदल", reading: "paidal", meaning: "on foot", accept: ["walking", "by walking", "afoot"], example: { jp: "मैं रोज़ पैदल दफ़्तर जाता हूँ।", en: "I go to the office on foot every day." }, drill: { jp: "यहाँ से पैदल जाना आसान है", en: "Going on foot from here is easy" }, hint: "PAI-DAL never changes and always needs a verb: पैदल जाना, to go on foot; पैदल चलना, to walk. Sanskrit पद, a foot — the same root that gave English 'pedal'." },
        { id: "hi-u29l3-sair", type: "vocab", front: "सैर", reading: "sair", meaning: "an outing", accept: ["a stroll", "a jaunt", "a walk for pleasure"], example: { jp: "हम सुबह बगीचे की सैर करते हैं।", en: "We take a stroll in the garden in the morning." }, drill: { jp: "रोज़ सुबह सैर अच्छी होती है", en: "A morning stroll every day is good" }, hint: "SAIR, FEMININE, with the ऐ of 'pain'. सैर करना is to take a stroll or go on an outing. It is leisurely by definition — nobody is in a hurry on a सैर." },
      ],
    },
    {
      id: "hi-u29l4",
      unit: 29,
      lesson: 4,
      title: "The road and the vehicle",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe the road you are on — the bend, the crossroads, the speed, and where the danger is — and say what the vehicle needs.",
      items: [
        { id: "hi-u29l4-pahiyaa", type: "vocab", front: "पहिया", reading: "pahiyaa", meaning: "a wheel", accept: ["a tyre", "the round part that turns"], example: { jp: "इस गाड़ी का पहिया बहुत बड़ा है।", en: "This vehicle's wheel is very big." }, drill: { jp: "यह पहिया बहुत भारी है", en: "This wheel is very heavy" }, hint: "PA-HI-YAA, MASCULINE despite the -या ending — the तकिया, तौलिया and डाकिया trap a fourth time, and in this corpus -या is NEVER feminine. Plural पहिये. दो पहिया is a two-wheeler." },
        { id: "hi-u29l4-tel", type: "vocab", front: "तेल", reading: "tel", meaning: "oil", accept: ["cooking oil", "fuel", "hair oil"], example: { jp: "मैं गाड़ी में तेल डालता हूँ।", en: "I put oil in the car." }, drill: { jp: "यहाँ तेल बहुत महँगा है", en: "Oil is very expensive here" }, hint: "TEL, MASCULINE, with a DENTAL त. One word covers all of it: cooking oil, engine oil, and the hair oil Indian households run on. तेल लगाना is to oil something." },
        { id: "hi-u29l4-mor", type: "vocab", front: "मोड़", reading: "mor", meaning: "a turning", accept: ["a bend", "a corner in a road", "a turn"], example: { jp: "अगले मोड़ पर एक दुकान है।", en: "There is a shop at the next turning." }, drill: { jp: "इस मोड़ पर गाड़ी धीरे चलती है", en: "The car goes slowly at this bend" }, hint: "MOR, MASCULINE, with ड़ — a flapped r. It is a bend in a road and also a turning point in a life: ज़िंदगी का मोड़. मोड़ना is the verb, to turn something." },
        { id: "hi-u29l4-chauraahaa", type: "vocab", front: "चौराहा", reading: "chauraahaa", meaning: "a crossroads", accept: ["a junction", "where four roads meet", "an intersection"], example: { jp: "बाज़ार उस चौराहे के पास है।", en: "The market is near that crossroads." }, drill: { jp: "यहाँ एक बड़ा चौराहा है", en: "There is a big crossroads here" }, hint: "CHAU-RAA-HAA, MASCULINE: चार, four, plus राह, a road — literally 'four roads'. In an Indian town the चौराहा is the landmark everything else gets described from." },
        { id: "hi-u29l4-gati", type: "vocab", front: "गति", reading: "gati", meaning: "speed", accept: ["pace", "velocity", "how fast something moves"], example: { jp: "इस सड़क पर गाड़ी की गति कम है।", en: "The speed of the car is low on this road." }, drill: { jp: "ट्रेन की गति बहुत तेज़ है", en: "The train's speed is very fast" }, hint: "GA-TI, FEMININE, and the final इ IS pronounced. Sanskrit, and the word on a road sign; रफ़्तार is its Persian twin in speech. तेज़ is the adjective, fast." },
        { id: "hi-u29l4-khatraa", type: "vocab", front: "खतरा", reading: "khatraa", meaning: "danger", accept: ["a risk", "a hazard", "a threat"], example: { jp: "इस रास्ते पर बहुत खतरा है।", en: "There is a lot of danger on this road." }, drill: { jp: "इस मोड़ पर खतरा है", en: "There is danger at this bend" }, hint: "KHAT-RAA, MASCULINE, plain ख, with the त्र conjunct. खतरे में means 'in danger'. खतरनाक is the adjective, dangerous — the word on every warning sign in India." },
      ],
    },
  ],
};
