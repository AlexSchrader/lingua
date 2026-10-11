// HI Unit 77 — बीमारी और रोकथाम ("Illness and prevention") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8, then
// unit74.js §B1–§B7.
//
// 🚨 RETHEMED SLOT (scaffold: "Health and wellbeing") — lint hard-errors on that
// title, and the theme had to split as well. Hindi already has TWO health units:
//   A1 u20 शरीर और सेहत  → शरीर, सिर, आँख, कान, नाक, मुँह, दाँत, पेट, हाथ, पैर,
//                           बाल, सेहत, इलाज, थकान, चोट, बुखार, दर्द, मज़बूत
//   A2 u35 डॉक्टर का कमरा → डॉक्टर, मरीज़, बीमारी, दवा, गोली, टीका, सूई, घाव,
//                           सूजन, मरहम, हड्डी, खून, नस, कमज़ोर, जाँच, चक्कर, उल्टी
// So the doctor's room and the parts of the body are both spent. **u84 of this
// block takes the body's remaining 20 fronts**; this unit takes the half neither
// has: the NAMED illness, the mechanism of catching one, and what you do so as
// not to — prevention, diet, exercise, and the habits that undo it. That is the
// B1 move the band asks for: from "my head hurts" to "the infection spread
// because nobody was vaccinated".
//
// ⚠️ SIX FRONTS WANTED AND REFUSED. **Four of the six are GLOSS refusals** —
// `check-front.mjs` reports every one of them FREE, and only reading the taught
// card's `accept[]` catches them. This is the densest gloss-refusal list in the
// block:
//   • स्वास्थ्य — सेहत (u20) is "health" and accepts "wellbeing" AND "fitness".
//     Three of the four words this card would have wanted. DROPPED; there is no
//     second word for health in Hindi worth a mastery track.
//   • उपचार — इलाज (u20) is "treatment". DROPPED.
//   • कीट — कीड़ा is "an insect". DROPPED (u75 refused it for the same reason).
//   • टीकाकरण — would be a second mastery track for टीका (u35), which is already
//     glossed "a vaccination". DROPPED.
//   • TAKEN outright: थकान (u20), चक्कर, उल्टी, सूजन, घाव, मरहम, मरीज़, गोली,
//     बुखार, टीका (u35), जलन (u52), तनाव (u52), सेहत (u20). **Thirteen.**
//     ⚠️ तनाव IS TAKEN — a stress-and-burnout lesson is NOT available to this
//     unit, and block 1's u67 "Emotion, finer shades" owns what is left of it.
//   • NAMED FOR A LATER BLOCK, free and unspent: नब्ज़, दस्त, कब्ज़, मधुमेह,
//     अंगदान, चिकित्सा, बेहोश, एलर्जी.
//
// ⚠️ पोषण IS TAKEN FROM THE SPARE SHELF, AND I AM SAYING SO OUT LOUD. The central
// allocation recorded "restaurant/nutrition is allocated to nobody — spare; don't
// assume it's free for you without telling me". This unit cards **पोषण** (l3) and
// nothing else from that field: no restaurant word, no food word, no cooking word
// (A2 u36 रसोई और खाना owns those). A diet-and-exercise lesson cannot be written
// without a word for nourishment. RESTAURANT IS UNTOUCHED AND STILL SPARE.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: महामारी, खुजली, छींक, नाड़ी, खुराक, मालिश, रोकथाम, कसरत,
//   दिनचर्या, कमज़ोरी. **छींक, खुराक, रोकथाम and कसरत are CONSONANT-FINAL**, so
//   nothing in the shape says so — कसरत ज़रूरी है, not ज़रूरा — and those four are
//   the ones a learner cannot predict. **दिनचर्या is FEMININE IN -आ against the
//   ending rule** (§B6's मात्रा class), which is the fifth unpredictable one.
//   MASCULINE: लक्षण, संक्रमण, दमा, ऑपरेशन, कीटाणु, योग, परहेज़, नशा,
//   धूम्रपान, पोषण. **दमा and नशा look like -ा masculines and ARE**; **कीटाणु is
//   masculine despite the -ु**, the साधु class of §4.
//
// ⚠️ ONE CARD LEFT THIS UNIT IN THE B1 CROSS-BLOCK DEDUPE (2026-10-06): संतुलन
// → kept at u63 तुलना और मात्रा (block 1, earlier slot, and the unit that owns
// quantity abstraction per unit61.js §B9). Still in scope for u77's sentences,
// but no u77 sentence uses it. दिनचर्या replaced it.
//   शराब is FEMININE — शराब बुरी है, not बुरा — and it is the one gender fact in
//   the unit no rule predicts.
//   ADJECTIVES: **तंदुरुस्त, मानसिक and शारीरिक are INVARIANT** (unit53's rule).
//
// ⚠️ TWO NEAR-PAIRS AND ONE MARK:
//   • नाड़ी naarii (the pulse) against नाई naaii (u28l3, a barber) and घड़ी gharii
//     (u9l2, a watch). ड़ reads **r** (§1c), so नाड़ी is naarii — one letter from
//     naaii, and §1's doubling is not involved. Checked against all 1,512
//     readings: naarii is free.
//   • शारीरिक does NOT contain शरीर (u20). Checked mechanically, not by eye: the
//     taught front is श+र+ी+र and this word is श+ा+र+ी+र+ि+क, so the ा after श
//     breaks the string. No substring trap.
//   • ऑपरेशन carries ॉ, the candra-o, which unit31.js §A4 declared live as a
//     READING-ONLY note and which appears in exactly one other front in the
//     language — डॉक्टर (u35l1). It reads **o**, like ो. This card's hint teaches
//     the mark the way डॉक्टर's does.
// SUBSTRING TRAP: **कमज़ोरी ⊃ कमज़ोर (u35)** — ी is \p{M} and does not block the
// match. Checked both directions: no u35 drill contains कमज़ोरी, and this card's
// drill does not contain कमज़ोर.
// RETROFLEX/DENTAL (§1b): no new collision. कीटाणु kiitaanu and तंदुरुस्त
// tandurust carry RETROFLEX ट with no dental कीताणु / तंदुरुस्त-with-त in the
// corpus; दिनचर्या dincharyaa, धूम्रपान dhuumrapaan and परहेज़ parhez are DENTAL with
// no retroflex twin. The doubling hatch fires nowhere in this unit.
// LOANWORD FREE-PASS CHECK (§9), measured with the real `checkProduce`:
//   ऑपरेशन opareshan → glossed "a surgical operation", not "an operation".
//   योग yog → glossed "yoga as a practice", not "yoga" — one letter apart is too
//   close to read the answer off the prompt. Zero free passes.
export const HI_UNIT77 = {
  id: "hi-u77",
  lang: "hi",
  title: "बीमारी और रोकथाम",
  order: 77,
  stage: "b1",
  lessons: [
    {
      id: "hi-u77l1",
      unit: 77,
      lesson: 1,
      title: "Spotting the illness",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name a symptom, an infection and an epidemic — and say that someone has asthma, is itching, or has sneezed.",
      items: [
        { id: "hi-u77l1-lakshan", type: "vocab", front: "लक्षण", reading: "lakshan", meaning: "a symptom", accept: ["a sign of illness", "what shows an illness is there", "an outward sign of disease"], example: { jp: "बुखार इस बीमारी का पहला लक्षण है।", en: "A fever is the first symptom of this illness." }, drill: { jp: "यह लक्षण कल से दिख रहा है", en: "This symptom has been showing since yesterday" }, hint: "LAK-SHAN, masculine, consonant-final: दो लक्षण. The क्ष conjunct is one of unit 6's three, said ksh in one breath; the final ण is RETROFLEX and merges to n (§1b). Also used of a person's character: अच्छे लक्षण." },
        { id: "hi-u77l1-sankraman", type: "vocab", front: "संक्रमण", reading: "sankraman", meaning: "an infection", accept: ["illness passing from one body to another", "a thing catching from person to person", "a catching of disease"], example: { jp: "गंदे हाथों से संक्रमण जल्दी फैलता है।", en: "An infection spreads quickly from dirty hands." }, drill: { jp: "गंदे हाथों से संक्रमण फैलता है", en: "Infection spreads from dirty hands" }, hint: "SAN-KRA-MAN, masculine. Its ं sits before क, a stop, so §1's homorganic rule applies and it is written n. ⚠️ Not बीमारी (unit 35), which is the illness itself — संक्रमण is the illness MOVING from one person to another." },
        { id: "hi-u77l1-mahaamaarii", type: "vocab", front: "महामारी", reading: "mahaamaarii", meaning: "an epidemic", accept: ["an illness that sweeps a whole country", "a plague", "a disease running through a whole population"], example: { jp: "महामारी के समय स्कूल बंद रहे।", en: "The schools stayed shut during the epidemic." }, drill: { jp: "महामारी में सब घर पर रहे", en: "Everyone stayed at home in the epidemic" }, hint: "MA-HAA-MAA-RII — ⚠️ FEMININE. महा (great) plus मारी (a killing). ⚠️ Read it against बीमारी, an illness (unit 35): the two rhyme and are not related — बीमारी is from बीमार, महामारी from मारना. One person has a बीमारी; a country has a महामारी." },
        { id: "hi-u77l1-damaa", type: "vocab", front: "दमा", reading: "damaa", meaning: "asthma", accept: ["the illness that makes breathing hard", "a wheezing illness", "a long illness of the lungs"], example: { jp: "सर्दी में उसका दमा और बढ़ जाता है।", en: "His asthma gets worse in the cold." }, drill: { jp: "सर्दी में उसका दमा बढ़ जाता है", en: "His asthma gets worse in the cold" }, hint: "DA-MAA, masculine, regular -ा, DENTAL द. The commonest named illness in Hindi after बुखार, and the only one this course cards — the rest are named in this file's header as a gap. Its frame is X को दमा है." },
        { id: "hi-u77l1-khujlii", type: "vocab", front: "खुजली", reading: "khujlii", meaning: "itching", accept: ["an itch", "the feeling that makes you scratch", "a prickling on the skin"], example: { jp: "इस दवा से खुजली कम हो जाती है।", en: "The itching goes down with this medicine." }, drill: { jp: "गरमी में खुजली बढ़ जाती है", en: "Itching increases in the heat" }, hint: "KHUJ-LII — ⚠️ FEMININE. Plain ख — unit 1 §7 keeps ख़ uncarded. The medial inherent a is not said (§1): khujlii, not khujalii. The frame is X को खुजली हो रही है." },
        { id: "hi-u77l1-chhiink", type: "vocab", front: "छींक", reading: "chhiink", meaning: "a sneeze", accept: ["sneezing", "the sudden blow out of the nose", "a sudden blast out of the nose"], example: { jp: "सर्दी में उसे बहुत छींक आती है।", en: "In the cold he sneezes a great deal." }, drill: { jp: "सर्दी में उसे छींक आती है", en: "In the cold he sneezes" }, hint: "CHHIINK — ⚠️ FEMININE and CONSONANT-FINAL: छींक आई, not आया. छ is ch with a puff of air, और the ं before क is written n (§1). ⚠️ Hindi uses आना, not करना: छींक आती है, 'a sneeze comes'." },
      ],
    },
    {
      id: "hi-u77l2",
      unit: 77,
      lesson: 2,
      title: "Examining and treating",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about the pulse, a dose of medicine, an operation, germs, a massage and prevention.",
      items: [
        { id: "hi-u77l2-naarii", type: "vocab", front: "नाड़ी", reading: "naarii", meaning: "the pulse", accept: ["the beat felt at the wrist", "the beating a doctor feels for", "the throb of the blood"], example: { jp: "डॉक्टर ने उसकी नाड़ी देखी और कुछ नहीं कहा।", en: "The doctor felt his pulse and said nothing." }, drill: { jp: "उसकी नाड़ी तेज़ चल रही थी", en: "His pulse was running fast" }, hint: "NAA-RII — ⚠️ FEMININE. ड़ reads **r** (§1c), so this is naarii — one letter from नाई naaii, a barber (unit 28), and §1's doubling is not involved. ⚠️ Not नस (unit 35), which is the vein itself: the नाड़ी is the BEAT in it. Hindi says नाड़ी देखना, to look at the pulse." },
        { id: "hi-u77l2-khuraak", type: "vocab", front: "खुराक", reading: "khuraak", meaning: "a prescribed amount of medicine", accept: ["how much to take at one time", "a measured helping", "a dose"], example: { jp: "बच्चों की खुराक बड़ों से कम होती है।", en: "A child's dose is smaller than an adult's." }, drill: { jp: "दिन में दो खुराक लेनी है", en: "Two doses are to be taken in a day" }, hint: "KHU-RAAK — ⚠️ FEMININE and CONSONANT-FINAL: खुराक पूरी है. ⚠️ The gloss is long on purpose: दवा (unit 20) ACCEPTS 'a dose', so this card had to say which dose. Also used of food — दो वक्त की खुराक." },
        { id: "hi-u77l2-opareshan", type: "vocab", front: "ऑपरेशन", reading: "opareshan", meaning: "a surgical operation", accept: ["surgery", "being cut open to be treated", "a cutting done to treat someone"], example: { jp: "हड्डी टूटी थी इसलिए ऑपरेशन करना पड़ा।", en: "The bone was broken, so an operation had to be done." }, drill: { jp: "ऑपरेशन के बाद दर्द कम हुआ", en: "The pain lessened after the operation" }, hint: "O-PA-RE-SHAN, masculine. ⚠️ It opens with ऑ, the CANDRA-O for English loans, which reads **o** exactly like ो — the mark unit 31 §A4 declared live, and this is only its second front in the whole language after डॉक्टर (unit 35). Glossed 'a surgical operation' per §9." },
        { id: "hi-u77l2-kiitaanu", type: "vocab", front: "कीटाणु", reading: "kiitaanu", meaning: "a germ", accept: ["a microbe", "the tiny thing that makes you ill", "a tiny living thing that infects"], example: { jp: "उबले पानी में कीटाणु नहीं रहते।", en: "Germs do not survive in boiled water." }, drill: { jp: "दूध में कीटाणु हो सकते हैं", en: "There can be germs in milk" }, hint: "KII-TAA-NU — ⚠️ MASCULINE despite the -ु, the साधु class of §4: कीटाणु मरे, not मरी. RETROFLEX ट and the retroflex ण, which merges to n. Not कीड़ा (unit 55), an insect you can see — a कीटाणु you cannot." },
        { id: "hi-u77l2-maalish", type: "vocab", front: "मालिश", reading: "maalish", meaning: "a massage", accept: ["rubbing oil into the body", "a rub-down", "a kneading of the body"], example: { jp: "तेल की मालिश से दर्द कम होता है।", en: "An oil massage reduces the pain." }, drill: { jp: "रोज़ मालिश करना अच्छा है", en: "Doing a massage daily is good" }, hint: "MAA-LISH — ⚠️ FEMININE and CONSONANT-FINAL: मालिश अच्छी है. Its verb is करना — मालिश करना — and in India it is done with तेल (unit 29), which is why the example says so." },
        { id: "hi-u77l2-rokthaam", type: "vocab", front: "रोकथाम", reading: "rokthaam", meaning: "prevention", accept: ["stopping a thing before it starts", "measures taken to head something off", "keeping a thing from happening at all"], example: { jp: "बीमारी की रोकथाम इलाज से सस्ती है।", en: "Prevention of illness is cheaper than treatment." }, drill: { jp: "रोकथाम पर कोई ध्यान नहीं देता", en: "Nobody pays attention to prevention" }, hint: "ROK-THAAM — ⚠️ FEMININE and CONSONANT-FINAL: रोकथाम ज़रूरी है. Built on रोकना, to stop (unit 31), plus थाम from थामना — two verbs of holding back, joined. The थ is DENTAL." },
      ],
    },
    {
      id: "hi-u77l3",
      unit: 77,
      lesson: 3,
      title: "Keeping the body fit",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about exercise, yoga, nourishment, a restricted diet and a daily routine — and say that someone is in good physical shape.",
      items: [
        { id: "hi-u77l3-kasrat", type: "vocab", front: "कसरत", reading: "kasrat", meaning: "physical exercise", accept: ["working the body on purpose", "a workout", "bodily exercise taken for health"], example: { jp: "वह हर सुबह आधे घंटे कसरत करता है।", en: "He exercises for half an hour every morning." }, drill: { jp: "वह हर सुबह कसरत करता है", en: "He exercises every morning" }, hint: "KAS-RAT — ⚠️ FEMININE and CONSONANT-FINAL: कसरत ज़रूरी है. DENTAL त. Its verb is करना. Not खेल (unit 41), a game: कसरत has no opponent and no score." },
        { id: "hi-u77l3-yog", type: "vocab", front: "योग", reading: "yog", meaning: "yoga as a practice", accept: ["the discipline of yoga", "yogic exercise and breathing", "the practice of postures and breathing"], example: { jp: "योग करने से मन शांत रहता है।", en: "Doing yoga keeps the mind calm." }, drill: { jp: "वह सुबह योग करता है", en: "He does yoga in the morning" }, hint: "YOG, masculine, consonant-final. ⚠️ Glossed 'yoga as a practice' and not 'yoga': the reading is yog and §9 forbids a gloss a learner can read straight off the prompt. The word also means 'a joining' and 'addition' in Hindi, which is where the practice gets its name." },
        { id: "hi-u77l3-poshan", type: "vocab", front: "पोषण", reading: "poshan", meaning: "nourishment", accept: ["what food gives the body", "being fed well enough", "the feeding the body needs"], example: { jp: "बच्चों के पोषण के लिए दूध ज़रूरी है।", en: "Milk is essential for children's nourishment." }, drill: { jp: "अच्छे पोषण से बच्चा बढ़ता है", en: "A child grows with good nourishment" }, hint: "PO-SHAN, masculine. ष is the second sh (§1a) and ण the retroflex n — both merge in the reading, and the hint is where the letters are taught. Not खाना, food (unit 13): पोषण is what the food DOES once it is eaten." },
        { id: "hi-u77l3-parhez", type: "vocab", front: "परहेज़", reading: "parhez", meaning: "keeping off something on purpose", accept: ["deliberately avoiding a food", "a restriction one keeps to", "staying off a thing on purpose"], example: { jp: "डॉक्टर ने मीठे से परहेज़ करने को कहा।", en: "The doctor said to keep off sweet things." }, drill: { jp: "उसे नमक से परहेज़ है", en: "He keeps off salt" }, hint: "PAR-HEZ, masculine, consonant-final, ending in ज़ — a z (unit 4). Its frame is X से परहेज़ करना, 'to keep off X'. ⚠️ Not मना, not allowed (unit 32): मना is somebody else's rule, परहेज़ is a discipline you hold yourself to." },
        { id: "hi-u77l3-tandurust", type: "vocab", front: "तंदुरुस्त", reading: "tandurust", meaning: "in good physical shape", accept: ["fit and well", "sound in body", "healthy and strong"], example: { jp: "सत्तर साल में भी वह तंदुरुस्त है।", en: "Even at seventy he is in good shape." }, drill: { jp: "रोज़ चलने से आदमी तंदुरुस्त रहता है", en: "A man stays in good shape by walking daily" }, hint: "TAN-DU-RUST — ⚠️ INVARIANT (unit 53's rule): तंदुरुस्त आदमी, तंदुरुस्त औरत. DENTAL त at the front, RETROFLEX nothing — the ुस्त is स and DENTAL त stacked. ⚠️ Glossed 'in good physical shape' because सेहत (unit 20) ACCEPTS 'fitness'." },
        { id: "hi-u77l3-dincharyaa", type: "vocab", front: "दिनचर्या", reading: "dincharyaa", meaning: "a daily routine", accept: ["the way one's day is ordered", "the round of a day's habits", "the settled shape of one's day"], example: { jp: "सुबह जल्दी उठना अच्छी दिनचर्या का हिस्सा है।", en: "Getting up early in the morning is part of a good daily routine." }, drill: { jp: "जल्दी उठना अच्छी दिनचर्या है", en: "Getting up early is a good daily routine" }, hint: "DIN-CHAR-YAA — ⚠️ FEMININE despite the -ा, the मात्रा class of §B6: दिनचर्या पक्की है, not पक्का. दिन, a day (unit 3), plus चर्या (a way of going about), which this course does not card. The र्य is र with a halant drawn as the hook over the य." },
      ],
    },
    {
      id: "hi-u77l4",
      unit: 77,
      lesson: 4,
      title: "The mind, and the habits that undo it",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say whether something is mental or bodily, and talk about intoxication, smoking, liquor and a weakness in the body.",
      items: [
        { id: "hi-u77l4-maansik", type: "vocab", front: "मानसिक", reading: "maansik", meaning: "mental", accept: ["of the mind", "to do with the mind rather than the body", "belonging to the mind"], example: { jp: "यह मानसिक बीमारी है और इलाज भी होता है।", en: "This is a mental illness and there is a treatment too." }, drill: { jp: "यह मानसिक बीमारी है और इलाज होता है", en: "This is a mental illness and there is a treatment" }, hint: "MAAN-SIK — ⚠️ INVARIANT: मानसिक बीमारी, मानसिक काम. Built on मन, the mind (unit 1), with the -इक suffix that turns a noun into an adjective — the same suffix as शारीरिक beside it. `scope-hi.mjs` generates no -इक, so each needs its own card." },
        { id: "hi-u77l4-shaariirik", type: "vocab", front: "शारीरिक", reading: "shaariirik", meaning: "bodily", accept: ["physical", "of the body rather than the mind", "belonging to the body"], example: { jp: "खेत का काम शारीरिक काम है।", en: "Field work is bodily work." }, drill: { jp: "यह शारीरिक बीमारी नहीं है", en: "This is not a bodily illness" }, hint: "SHAA-RII-RIK — ⚠️ INVARIANT. Built the same way as मानसिक, on शरीर, the body (unit 20). ⚠️ It does NOT contain शरीर as a string — checked mechanically: the taught front is श+र+ी+र and this word has a ा after the श, which breaks it. The pair मानसिक/शारीरिक is how Hindi says 'mind and body'." },
        { id: "hi-u77l4-nashaa", type: "vocab", front: "नशा", reading: "nashaa", meaning: "intoxication", accept: ["being under the influence", "the hold a drug has on someone", "the state strong drink puts one in"], example: { jp: "नशा छोड़ना आसान नहीं होता।", en: "Giving up intoxication is not easy." }, drill: { jp: "नशा आदमी को बिगाड़ देता है", en: "Intoxication ruins a man" }, hint: "NA-SHAA, masculine, regular -ा. The frame is X को नशा है or नशा करना. Used of drink, of drugs, and of anything that takes you over — पैसे का नशा is a real Hindi phrase." },
        { id: "hi-u77l4-dhuumrapaan", type: "vocab", front: "धूम्रपान", reading: "dhuumrapaan", meaning: "smoking tobacco", accept: ["the smoking of cigarettes", "taking smoke into the lungs", "the taking of tobacco smoke"], example: { jp: "अस्पताल में धूम्रपान मना है।", en: "Smoking is forbidden in the hospital." }, drill: { jp: "उसने धूम्रपान छोड़ दिया", en: "He gave up smoking" }, hint: "DHUUM-RA-PAAN, masculine, long uu, DENTAL ध with a puff of air. धूम्र (smoke) plus पान (drinking) — Hindi says you DRINK smoke. ⚠️ This is the written, official word; in speech people say सिगरेट पीना, which uses पीना (unit 13) and needs no new card." },
        { id: "hi-u77l4-sharaab", type: "vocab", front: "शराब", reading: "sharaab", meaning: "liquor", accept: ["strong drink", "alcohol you drink", "drink with alcohol in it"], example: { jp: "ज़्यादा शराब पीने से सेहत खराब होती है।", en: "Drinking too much liquor ruins your health." }, drill: { jp: "शराब से सेहत खराब होती है", en: "Liquor ruins your health" }, hint: "SHA-RAAB — ⚠️ FEMININE, and this is the one gender fact in the unit no rule predicts: शराब बुरी है, never बुरा. Consonant-final, so the shape gives nothing away. The verb is पीना (unit 13)." },
        { id: "hi-u77l4-kamzorii", type: "vocab", front: "कमज़ोरी", reading: "kamzorii", meaning: "a weakness in the body", accept: ["feeling with no strength", "a run-down state", "a lack of strength in the body"], example: { jp: "खाना कम खाने से कमज़ोरी आ जाती है।", en: "Eating too little brings on weakness." }, drill: { jp: "बीमारी के बाद कमज़ोरी रहती है", en: "Weakness remains after an illness" }, hint: "KAM-ZO-RII — ⚠️ FEMININE, with ज़ — a z. The noun of कमज़ोर, weak (unit 35), in a different unit — the नाप/नापना precedent. ⚠️ It CONTAINS कमज़ोर, because ी is a mātrā and does not block the match, so neither card's sentence uses the other word." },
      ],
    },
  ],
};
