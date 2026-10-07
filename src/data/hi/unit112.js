// HI Unit 112 — अस्पताल और इलाज ("The hospital and the treatment") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 2 (u111–u123). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, and unit111.js §C1–§C6 (this block's own).
//
// 🚨 NARROWED SLOT (scaffold: "Health systems and care"). Probed at **6 of 18
// taken** against all 2,270 non-glyph hi fronts, 2026-10-06.
//
// MEASURED HOLE, AND WHY THE SLOT HAD TO BE NARROWED RATHER THAN RETHEMED.
// Three units already own the body and being ill: u35 डॉक्टर के पास (डॉक्टर,
// मरीज़, नर्स, बीमारी, घाव, सुई, गोली, इंजेक्शन, पट्टी, मरहम, टीका, जाँच, पर्ची,
// खून, हड्डी, साँस), u77 (ऑपरेशन, संक्रमण, लक्षण, महामारी, नाड़ी, खुराक, कीटाणु,
// नशा, पोषण, दिनचर्या, कमज़ोरी) and u84 शरीर के अंदर और बाहर (the whole of the
// body). What the corpus had NO word for is the INSTITUTION and the PROCEDURE:
// no ambulance, no stretcher, no ward, no dispensary, no practitioner as a
// profession, no diagnosis, no blood pressure, no scan, no medical report, no
// written formula, no course of treatment, no anaesthesia, no incision, no
// surgical stitch, no tube, no crutch, no nursing care, no blood donation, no
// organ donation, no donor, no immunity, no contagion, no emergency.
// So: u35 is BEING ILL, u77 is THE ILLNESS, u84 is THE BODY, and **u112 is THE
// BUILDING AND WHAT HAPPENS INSIDE IT.** Do not re-open it as a health slot.
//
// ⚠️ TWO CARDS THIS UNIT LOST TO A NEAR-SYNONYM ALREADY IN THE CORPUS, and both
// passed `front-taken.mjs` cleanly — this is §B4's warning landing twice:
//   • **पर्चा WAS REFUSED.** पर्ची (u35l?) is the SAME LEXEME in its feminine
//     form — one word, two genders, two mastery tracks — and its gloss is "a
//     prescription" with the accept "a doctor's note". Only `gloss-taken.mjs`
//     saw it. नुस्खा survives in l2 ONLY because it was re-glossed to the thing
//     it actually is: the written FORMULA for making a medicine, not the chit the
//     doctor hands over.
//   • **शल्यक्रिया WAS REFUSED**, although its gloss "an operation" probed free.
//     ऑपरेशन (u77) is glossed "a surgical operation" and ACCEPTS "surgery", so
//     the two cards would have been one concept with two right answers and a
//     learner typing "operation" at the ऑपरेशन card would have been marked wrong.
//     A gloss that merely differs by a word is not enough when the CONCEPT is
//     identical. टाँका, a surgical stitch, replaced it and keeps l3's shape — the
//     steps of a procedure — rather than its sense.
//   • **टीकाकरण WAS REFUSED** for the same class of reason: टीका (u35) is glossed
//     "a vaccination" and accepts "an immunisation", and टीकाकरण is its process
//     noun. प्रतिरक्षा, immunity, carries the l4 idea instead and is a different
//     concept rather than a second name for one.
//
// ⚠️ CROSS-BLOCK BOUNDARIES THAT LAND ON THIS FILE — read before adding a card:
//   • **आरक्षण IS BLOCK 1's (u109), IN THE CASTE-RESERVATION SENSE ONLY.** It is a
//     homograph and this unit wanted it as "a booking"; block 3's u132 wants the
//     same. **NEITHER MAY CARD IT.** This unit says बुकिंग nowhere and books
//     nothing: a bed here is मिलना, not आरक्षण.
//   • **प्रतिरक्षा IS THIS UNIT's, NOT u121's.** u121 (biology, mine) takes ऊतक,
//     गुणसूत्र, जीन and चयापचय instead, and does not card immunity.
//
// GENDER (§4), named in every hint:
//   ⚠️ FEMININE: बेहोशी, नली, बैसाखी, देखभाल, प्रतिरक्षा, रिपोर्ट.
//   ⚠️ **देखभाल AND रिपोर्ट ARE FEMININE AND CONSONANT-FINAL**, so nothing in the
//   shape says so — §B6's worst class, and the one that gets agreement wrong.
//   ⚠️ **प्रतिरक्षा IS FEMININE IN -आ**, against the -आ rule, because रक्षा is.
//   MASCULINE: एम्बुलेंस, स्ट्रेचर, वार्ड, चिकित्सक, वैद्य, दवाखाना, निदान,
//   रक्तचाप, स्कैन, नुस्खा, उपचार, चीरा, टाँका, रक्तदान, अंगदान, दाता,
//   आपातकाल. संक्रामक is an ADJECTIVE and agrees like बड़ा.
//   ⚠️ **चिकित्सक, वैद्य AND दाता DO NOT CHANGE FOR A WOMAN.**
//
// ⚠️ SUBSTRING TRAPS, each checked (`isLetter` is `/\p{L}/`; a MĀTRĀ or HALANT
// does not block a match, a LETTER does):
//   • रक्तदान and अंगदान ⊃ दान? **दान IS NOT A FRONT ANYWHERE** — u114 was going
//     to card it and dropped it precisely so these two compounds stand alone —
//     so there is nothing to match. ⊃ खून? No: रक्त is the Sanskritic word and is
//     not carded either.
//   • दवाखाना ⊃ दवा (u20, a medicine) — the ख after it is a LETTER, so this
//     **CANNOT FIRE**. Named in the hint as the hook rather than hidden.
//   • चिकित्सक ⊃ nothing taught. ⚠️ BUT **मनोचिकित्सक (u115l3, mine) ⊃ चिकित्सक
//     AND THAT ONE *CAN* FIRE**, because the ो before it is a mātrā. The two sit
//     in different units and the pair is named in u115's hint; the compound is a
//     separate lexeme, the same call u97 made on छात्रावास ⊃ छात्र.
//   • आपातकाल ⊃ काल? काल is not a front — u113l1 (mine) cards it as the GRAMMAR
//     term, and काल there is preceded by nothing, so no drill in this unit may
//     contain आपातकाल beside काल. It does not.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): वार्ड vaard, स्ट्रेचर strechar, रिपोर्ट riport and
// टाँका taankaa are RETROFLEX (ड, ट) with no dental twin in the corpus; निदान
// nidaan, दाता daataa, उपचार upchaar and प्रतिरक्षा pratirakshaa are DENTAL. No
// pair needs the doubling escape hatch — checked, not assumed. 24 new readings,
// 24 distinct, zero collisions against all 2,270.
// LOANWORD FREE-PASS CHECK (§9) — FIVE loanwords here, the most of any unit in
// this block, so each was measured against `checkProduce` reading the prompt:
//   एम्बुलेंस embulens vs "ambulance" · स्ट्रेचर strechar vs "stretcher" ·
//   वार्ड vaard vs "hospital ward" · स्कैन skain vs "scan of the body" ·
//   रिपोर्ट riport vs "written medical report". **ZERO free passes** — every
//   reading differs from its normalised gloss by at least one sound, and three of
//   the five carry a qualifier in the gloss for exactly that reason.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision rather than a
// gap: सर्जन (a job title — u96 owns those), प्रसूति, कैप्सूल, औषधि (REFUSED —
// दवा u20 owns "a medicine"), स्वास्थ्य (u77's field), रोग (REFUSED — बीमारी u35
// accepts "a disease" AND "an ailment"), रोगाणु, शैया.
export const HI_UNIT112 = {
  id: "hi-u112",
  lang: "hi",
  title: "अस्पताल और इलाज",
  order: 112,
  stage: "b2",
  lessons: [
    {
      id: "hi-u112l1",
      unit: 112,
      lesson: 1,
      title: "Getting through the door",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe arriving at a hospital: the ambulance, the stretcher, the ward, and the three different kinds of person who may treat you.",
      items: [
        { id: "hi-u112l1-embulens", type: "vocab", front: "एम्बुलेंस", reading: "embulens", meaning: "an ambulance", accept: ["the vehicle that carries the sick"], example: { jp: "एम्बुलेंस आधे घंटे में आ गई, पर सड़क पर इतनी भीड़ थी कि अस्पताल तक देर हो गई।", en: "The ambulance came within half an hour, but there was such a crowd on the road that it was late reaching the hospital." }, drill: { jp: "एम्बुलेंस आधे घंटे में आ गई", en: "The ambulance came within half an hour" }, hint: "EM-BU-LENS, masculine. म्ब is a stacked conjunct (unit 6) — म with a halant, then ब. ⚠️ A LOANWORD, so check the §9 trap: the reading embulens and the gloss 'ambulance' are NOT the same string, so typing the prompt back does not pass. Hindi says it with an e at the front, never an a." },
        { id: "hi-u112l1-strechar", type: "vocab", front: "स्ट्रेचर", reading: "strechar", meaning: "a stretcher", accept: ["the frame a patient is carried on"], example: { jp: "उसे स्ट्रेचर पर अंदर ले जाया गया, क्योंकि वह अपने पैरों पर चल नहीं सकता था।", en: "He was taken inside on a stretcher, because he could not walk on his own feet." }, drill: { jp: "उसे स्ट्रेचर पर अंदर ले गए", en: "They took him inside on a stretcher" }, hint: "STRE-CHAR, masculine. Three letters stacked at the front — स्ट्र is स + ट + र with two halants — and the ट is RETROFLEX, which is why the reading is strechar rather than the English 'stretcher'. ⚠️ A LOANWORD whose reading and gloss differ, so no free pass (§9)." },
        { id: "hi-u112l1-vaard", type: "vocab", front: "वार्ड", reading: "vaard", meaning: "a hospital ward", accept: ["the room where many patients lie together"], example: { jp: "बच्चों का वार्ड ऊपर की मंज़िल पर है, और वहाँ एक नर्स हर रात रुकती है।", en: "The children's ward is on the upper floor, and a nurse stays there every night." }, drill: { jp: "बच्चों का वार्ड ऊपर की मंज़िल पर है", en: "The children's ward is on the upper floor" }, hint: "VAARD, masculine and consonant-final. र्ड is र with its halant written above the ड, and ड is RETROFLEX — the reading merges it with dental द (unit 1 §1b). ⚠️ A LOANWORD, and the gloss carries 'hospital' on purpose: without it the reading vaard and the gloss 'ward' would be one sound apart and §9's free pass would open." },
        { id: "hi-u112l1-chikitsak", type: "vocab", front: "चिकित्सक", reading: "chikitsak", meaning: "a medical practitioner", accept: ["one who treats the sick as a profession"], example: { jp: "इस अस्पताल में बीस चिकित्सक काम करते हैं, और आधे शहर के बाहर से आते हैं।", en: "Twenty practitioners work in this hospital, and half of them come from outside the city." }, drill: { jp: "इस अस्पताल में बीस चिकित्सक काम करते हैं", en: "Twenty practitioners work in this hospital" }, hint: "CHI-KIT-SAK, masculine, and it DOES NOT CHANGE FOR A WOMAN. त्स is a stacked conjunct. ⚠️ Not डॉक्टर (unit 35), which is what you call the person in front of you — चिकित्सक is the PROFESSION as a register word, the one a notice board or a government order uses. Hindi has both and uses them in different rooms." },
        { id: "hi-u112l1-vaidya", type: "vocab", front: "वैद्य", reading: "vaidya", meaning: "a practitioner of ayurvedic medicine", accept: ["a traditional Indian physician"], example: { jp: "गाँव का वैद्य अब भी पेड़ों से दवा बनाता है, और लोग उसके पास तब आते हैं जब शहर बहुत दूर हो।", en: "The village's traditional physician still makes medicine from trees, and people come to him when the city is too far." }, drill: { jp: "गाँव का वैद्य पेड़ों से दवा बनाता है", en: "The village physician makes medicine from trees" }, hint: "VAID-YA, masculine, and it does not change for a woman. द्य is a stacked conjunct — द with a halant, then य — the same stack as विद्या inside विश्वविद्यालय (unit 97). ⚠️ A वैद्य is NOT a lesser डॉक्टर: it is a different system of medicine with its own training, and calling one the other is a real mistake in India." },
        { id: "hi-u112l1-davaakhaanaa", type: "vocab", front: "दवाखाना", reading: "davaakhaanaa", meaning: "a dispensary", accept: ["the small clinic where medicine is handed out"], example: { jp: "हर बड़े गाँव में एक छोटा दवाखाना होता है, जहाँ से लोग बुखार की गोली ले आते हैं।", en: "Every large village has a small dispensary, where people get a fever tablet." }, drill: { jp: "हर गाँव में एक छोटा दवाखाना होता है", en: "Every village has a small dispensary" }, hint: "DA-VAA-KHAA-NAA, masculine in -आ, which is the rule. दवा, a medicine (unit 20), plus खाना in its OTHER sense, a place — the same खाना as in कारखाना, not the खाना that means food. 🚨 दवा IS A STRING INSIDE IT AND THE ROUTER CANNOT MATCH IT, because the ख after it is a letter." },
      ],
    },
    {
      id: "hi-u112l2",
      unit: 112,
      lesson: 2,
      title: "What the tests say",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Follow a diagnosis through: the blood pressure, the scan, the written report, the formula for the medicine and the course of treatment.",
      items: [
        { id: "hi-u112l2-nidaan", type: "vocab", front: "निदान", reading: "nidaan", meaning: "a diagnosis", accept: ["naming what the illness actually is"], example: { jp: "तीन जाँच के बाद निदान हुआ, और तब तक मरीज़ दो हफ़्ते अस्पताल में रह चुका था।", en: "The diagnosis came after three tests, and by then the patient had already spent two weeks in hospital." }, drill: { jp: "तीन जाँच के बाद निदान हुआ", en: "The diagnosis came after three tests" }, hint: "NI-DAAN, masculine and consonant-final, both consonants DENTAL. ⚠️ Not जाँच (unit 35), which is the test you undergo — निदान is the ANSWER the tests add up to, so in Hindi the जाँच comes first and the निदान follows. It is the word a hospital file prints at the top." },
        { id: "hi-u112l2-raktchaap", type: "vocab", front: "रक्तचाप", reading: "raktchaap", meaning: "blood pressure", accept: ["how hard the blood pushes in the body"], example: { jp: "नर्स हर सुबह उसका रक्तचाप देखती है और उसे एक कागज़ पर लिख देती है।", en: "The nurse checks his blood pressure every morning and writes it down on a sheet." }, drill: { jp: "नर्स हर सुबह उसका रक्तचाप देखती है", en: "The nurse checks his blood pressure every morning" }, hint: "RAKT-CHAAP, masculine. रक्त, blood in the Sanskritic register, plus चाप, pressure. ⚠️ रक्त IS NOT CARDED and will not be: खून (unit 35) is the word a learner needs, and a second card glossing 'blood' would collide with it (unit 1 §9). रक्त lives in compounds — this one and रक्तदान in lesson 4." },
        { id: "hi-u112l2-skain", type: "vocab", front: "स्कैन", reading: "skain", meaning: "a scan of the body", accept: ["a picture taken of the inside of a person"], example: { jp: "डॉक्टर ने सिर का स्कैन करवाया, क्योंकि गिरने के बाद दर्द कम ही नहीं हो रहा था।", en: "The doctor had a scan of the head done, because the pain was simply not easing after the fall." }, drill: { jp: "डॉक्टर ने सिर का स्कैन करवाया", en: "The doctor had a scan of the head done" }, hint: "SKAIN, masculine. ⚠️ A LOANWORD and the §9 check matters: the gloss carries 'of the body' so that the reading skain and the normalised gloss are not the same string. ⚠️ The ै is the ai of unit 3 — one sound, not two — so it is skain, never ska-in." },
        { id: "hi-u112l2-riport", type: "vocab", front: "रिपोर्ट", reading: "riport", meaning: "a written medical report", accept: ["the paper the test results come back on"], example: { jp: "रिपोर्ट शाम तक आ जाएगी, और उसके बाद ही यह तय होगा कि इलाज कहाँ होगा।", en: "The report will come by evening, and only after that will it be settled where the treatment happens." }, drill: { jp: "रिपोर्ट शाम तक आ जाएगी", en: "The report will come by evening" }, hint: "RI-PORT, and ⚠️ FEMININE DESPITE BEING CONSONANT-FINAL (§B6) — रिपोर्ट आ गई, never आ गया. र्ट is र with its halant above the ट, and ट is RETROFLEX. ⚠️ A LOANWORD; the gloss says 'medical' so that reading and gloss differ (§9)." },
        { id: "hi-u112l2-nuskhaa", type: "vocab", front: "नुस्खा", reading: "nuskhaa", meaning: "a written formula for making a medicine", accept: ["a recipe for a remedy"], example: { jp: "वैद्य का नुस्खा उसकी अपनी किताब में लिखा है, और वह उसे किसी को नहीं दिखाता।", en: "The physician's formula is written in his own book, and he shows it to nobody." }, drill: { jp: "वैद्य का नुस्खा उसकी किताब में लिखा है", en: "The physician's formula is written in his book" }, hint: "NUS-KHAA, masculine in -आ. 🚨 NOT A PRESCRIPTION — पर्ची (unit 35) already owns that, and पर्चा, its masculine twin, was refused from this unit for being the same lexeme. A नुस्खा is the FORMULA itself: what goes in, in what amount, the thing a वैद्य keeps and a cook would call a recipe." },
        { id: "hi-u112l2-upchaar", type: "vocab", front: "उपचार", reading: "upchaar", meaning: "a course of treatment", accept: ["everything done over time to cure somebody"], example: { jp: "यह उपचार छह महीने चलेगा, और बीच में एक बार फिर जाँच होगी।", en: "This course of treatment will run for six months, and a test will happen again partway through." }, drill: { jp: "यह उपचार छह महीने चलेगा", en: "This course of treatment will run six months" }, hint: "UP-CHAAR, masculine and consonant-final. ⚠️ Not इलाज (unit 20), which is treatment as a single idea — उपचार is the WHOLE PLAN over time, with a length and stages, which is why it takes चलना in Hindi: an उपचार runs, an इलाज happens." },
      ],
    },
    {
      id: "hi-u112l3",
      unit: 112,
      lesson: 3,
      title: "Under the knife, and after",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe a procedure and the recovery from it: being put under, the incision, the stitch, the tube, the crutch and the nursing that follows.",
      items: [
        { id: "hi-u112l3-behoshii", type: "vocab", front: "बेहोशी", reading: "behoshii", meaning: "anaesthesia", accept: ["being put to sleep for an operation"], example: { jp: "बेहोशी के बाद उसे कुछ याद नहीं रहा, और वह दो घंटे बाद ही होश में आया।", en: "After the anaesthesia he remembered nothing, and he came to his senses only two hours later." }, drill: { jp: "बेहोशी के बाद उसे कुछ याद नहीं रहा", en: "After the anaesthesia he remembered nothing" }, hint: "BE-HO-SHII, feminine, which the -ी ending gets right for once. बे-, the reversing prefix u81l4 teaches, plus होश, one's senses (unit 57) — so बेहोशी is senselessness, used both for a faint and for the drug that causes one on purpose. ⚠️ The ending is a LONG ी: behoshii, not behoshi." },
        { id: "hi-u112l3-chiiraa", type: "vocab", front: "चीरा", reading: "chiiraa", meaning: "an incision", accept: ["the cut a surgeon makes"], example: { jp: "चीरा बहुत छोटा था, इसलिए घाव जल्दी भर गया और वह चार दिन में घर चला गया।", en: "The incision was very small, so the wound healed quickly and he went home in four days." }, drill: { jp: "चीरा बहुत छोटा था", en: "The incision was very small" }, hint: "CHII-RAA, masculine in -आ, which is the rule. From चीरना, to slit open — a चीरा is one deliberate cut, not a घाव (unit 35), which is damage that happened to you. ⚠️ The vowel is LONG: chiiraa. चिरा with a short ि would be a different word." },
        { id: "hi-u112l3-taankaa", type: "vocab", front: "टाँका", reading: "taankaa", meaning: "a surgical stitch", accept: ["one stitch closing a wound"], example: { jp: "डॉक्टर ने घाव पर छह टाँका लगाए, और कहा कि हफ़्ते भर पानी न लगे।", en: "The doctor put six stitches in the wound, and said no water should touch it for a week." }, drill: { jp: "डॉक्टर ने घाव पर छह टाँका लगाए", en: "The doctor put six stitches in the wound" }, hint: "TAAN-KAA, masculine in -आ. ट is RETROFLEX and the ँ is the candrabindu of unit 5, written n. ⚠️ Not सिलाई (unit 40), which is sewing cloth: a टाँका closes skin, and Hindi uses लगाना for it — टाँका लगाना — never करना." },
        { id: "hi-u112l3-nalii", type: "vocab", front: "नली", reading: "nalii", meaning: "a tube", accept: ["a thin pipe put into the body"], example: { jp: "जब तक वह खुद खा नहीं सकता था, खाना एक नली से दिया जाता था।", en: "As long as he could not eat himself, food was given through a tube." }, drill: { jp: "खाना एक नली से दिया जाता था", en: "Food was being given through a tube" }, hint: "NA-LII, feminine, which the -ी gets right. ⚠️ The ending is a LONG ी — nalii — and both consonants are DENTAL. Hindi uses नली for any thin pipe, in a body or in a wall, so the gloss says 'a thin pipe' rather than naming a part." },
        { id: "hi-u112l3-baisaakhii", type: "vocab", front: "बैसाखी", reading: "baisaakhii", meaning: "a crutch", accept: ["the stick you lean under your arm to walk"], example: { jp: "हड्डी ठीक होने तक उसे बैसाखी से चलना पड़ा, और वह दो महीने काम पर नहीं गया।", en: "He had to walk with a crutch until the bone was right again, and he did not go to work for two months." }, drill: { jp: "उसे बैसाखी से चलना पड़ा", en: "He had to walk with a crutch" }, hint: "BAI-SAA-KHII, feminine. The ै is the ai of unit 3 — one sound. ⚠️ Hindi uses the singular for a pair, the way English says 'on a crutch', and बैसाखी is also the name of a festival: same spelling, a different word, and context is the only thing that separates them." },
        { id: "hi-u112l3-dekhbhaal", type: "vocab", front: "देखभाल", reading: "dekhbhaal", meaning: "nursing care", accept: ["the day-to-day looking after of a sick person"], example: { jp: "अस्पताल से छुट्टी के बाद भी देखभाल चलती रही, और उसकी बहन हर दिन आती थी।", en: "The care continued even after discharge from hospital, and his sister came every day." }, drill: { jp: "छुट्टी के बाद भी देखभाल चलती रही", en: "The care continued even after discharge" }, hint: "DEKH-BHAAL, and ⚠️ FEMININE DESPITE BEING CONSONANT-FINAL (§B6) — देखभाल चलती रही, never चलता. Built from देखना, to look (unit 3), plus भाल, which is not a word on its own: Hindi makes a pair like this to mean the whole of an activity. ⚠️ Not ध्यान (unit 22), which is attention — देखभाल is the daily WORK." },
      ],
    },
    {
      id: "hi-u112l4",
      unit: 112,
      lesson: 4,
      title: "Blood, organs and keeping it out",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about donating blood and organs, about who the donor is, about immunity, about what is contagious, and about an emergency.",
      items: [
        { id: "hi-u112l4-raktdaan", type: "vocab", front: "रक्तदान", reading: "raktdaan", meaning: "blood donation", accept: ["giving your blood for somebody else"], example: { jp: "हर साल एक दिन अस्पताल में रक्तदान होता है, और इस बार तीन सौ लोग आए।", en: "Blood donation is held at the hospital one day every year, and three hundred people came this time." }, drill: { jp: "हर साल अस्पताल में रक्तदान होता है", en: "Blood donation is held at the hospital every year" }, hint: "RAKT-DAAN, masculine. रक्त, blood in the Sanskritic register — the same half as रक्तचाप in lesson 2 — plus दान, a giving. ⚠️ दान IS NOT A FRONT ANYWHERE in the course: u114 was going to card it and dropped it precisely so this compound and अंगदान stand alone. Hindi says रक्तदान करना, never देना." },
        { id: "hi-u112l4-angdaan", type: "vocab", front: "अंगदान", reading: "angdaan", meaning: "organ donation", accept: ["giving a part of your body after death"], example: { jp: "अंगदान पर अब भी बहुत लोग तैयार नहीं होते, क्योंकि परिवार में इस पर बात ही नहीं होती।", en: "Many people are still not willing about organ donation, because the subject simply does not come up in the family." }, drill: { jp: "अंगदान पर बहुत लोग तैयार नहीं होते", en: "Many people are not willing about organ donation" }, hint: "ANG-DAAN, masculine. अंग, a part of the body (unit 84), plus दान — so the pattern of lesson 4 is one word, two compounds: रक्तदान and अंगदान. ⚠️ The ं is before ग, a stop, so unit 1 §1 writes it as the homorganic n." },
        { id: "hi-u112l4-daataa", type: "vocab", front: "दाता", reading: "daataa", meaning: "a donor", accept: ["the person who gives the blood or the organ"], example: { jp: "दाता का नाम कभी नहीं बताया जाता, इसलिए मरीज़ को पता ही नहीं चलता कि खून किसका था।", en: "A donor's name is never given out, so the patient never learns whose blood it was." }, drill: { jp: "दाता का नाम कभी नहीं बताया जाता", en: "A donor's name is never given out" }, hint: "DAA-TAA, masculine in -आ, and ⚠️ IT DOES NOT CHANGE FOR A WOMAN — the same shape as पिता and दादा (unit 10), which are masculine against the -आ rule's exceptions list. Both consonants are DENTAL. From the same root as दान in the two cards above." },
        { id: "hi-u112l4-pratirakshaa", type: "vocab", front: "प्रतिरक्षा", reading: "pratirakshaa", meaning: "immunity", accept: ["the body's own defence against infection"], example: { jp: "टीका लगने के बाद शरीर में प्रतिरक्षा बनती है, और उसके बाद वही संक्रमण फिर नहीं पकड़ता।", en: "Immunity builds in the body after a vaccination, and after that the same infection does not take hold again." }, drill: { jp: "टीके के बाद शरीर में प्रतिरक्षा बनती है", en: "Immunity builds in the body after the vaccination" }, hint: "PRA-TI-RAK-SHAA. ⚠️ FEMININE IN -आ, against the rule (§B6), because रक्षा, protection, is feminine. प्रति-, back or against, plus रक्षा — the body defending itself. क्ष is one of unit 6's three letter-conjuncts. 🚨 THIS WORD IS u112's, NOT u121's: the biology unit takes ऊतक, गुणसूत्र, जीन and चयापचय instead." },
        { id: "hi-u112l4-sankraamak", type: "vocab", front: "संक्रामक", reading: "sankraamak", meaning: "contagious", accept: ["catching, passing from one person to another"], example: { jp: "यह बीमारी संक्रामक है, इसलिए मरीज़ को अलग वार्ड में रखा गया।", en: "This illness is contagious, so the patient was put in a separate ward." }, drill: { jp: "यह बीमारी संक्रामक है", en: "This illness is contagious" }, hint: "SAN-KRAA-MAK, an ADJECTIVE, so it agrees like बड़ा — संक्रामक is consonant-final and therefore does not change form at all, which is the easy half. The ं is before क, a stop, written n. ⚠️ Same root as संक्रमण, an infection (unit 77): the infection is the thing, संक्रामक is what it does." },
        { id: "hi-u112l4-aapaatkaal", type: "vocab", front: "आपातकाल", reading: "aapaatkaal", meaning: "an emergency", accept: ["the time when something must be done at once"], example: { jp: "आपातकाल में कोई कागज़ नहीं माँगा जाता, और इलाज पहले शुरू हो जाता है।", en: "In an emergency no paperwork is asked for, and treatment begins first." }, drill: { jp: "आपातकाल में कोई कागज़ नहीं माँगा जाता", en: "In an emergency no paperwork is asked for" }, hint: "AA-PAAT-KAAL, masculine. आपात, a sudden fall, plus काल, a time — the same काल that u113l1 cards as the GRAMMAR word for tense. ⚠️ In India आपातकाल also names one specific political period, so a newspaper may use it where a hospital would not; in a hospital corridor it is simply the emergency." },
      ],
    },
  ],
};
