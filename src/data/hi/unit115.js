// HI Unit 115 — मन का स्वास्थ्य ("The health of the mind") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 2 (u111–u123). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, unit111.js §C1–§C6.
//
// 🚨 RETHEMED SLOT (scaffold: "Emotion, subtle and mixed"). THE SCAFFOLD THEME IS
// DEAD. u52 दिल का हाल took the base emotions and their physical signs (तनाव,
// घबराहट, बेचैनी, सुकून, अकेलापन, हौसला, अफ़सोस, भावना, सब्र) and u67 मन के
// बारीक रंग took the fine shades on top of them (निराशा, अपराधबोध, and the whole
// subtle layer u61 §B9 re-probed at 3/18 and authored). u27 and u30 took डर,
// चिंता, गुस्सा, गर्व, खुशी, उम्मीद, भरोसा. Probed at **2 of 18 taken** on the
// theme it was moved to — the joint-tightest in the block with u113.
//
// MEASURED HOLE. Hindi's whole emotional vocabulary in this course is about
// FEELING, and there is nothing at all about the mind being ILL or being treated:
// no depression, no mental illness, no disorder, no mania, no sleeplessness, no
// irritability as a named state, no trauma, no shock, no addiction, no stigma, no
// state of mind, no psychiatrist, no counselling, no psychology, no support to
// lean on, no rest-as-treatment, no concentration, no self-worth, no
// self-assurance, no tolerance, no endurance, no word for sensitive and none for
// emotional. A learner could say they were sad (u52) and not that they were
// unwell.
// So: u52 is HOW I FEEL, u67 is THE SHADE OF IT, and **u115 is THE MIND AS
// SOMETHING THAT CAN BE ILL AND CAN BE LOOKED AFTER.** That is a different
// relation (§B3), which is why the slot is worth a unit rather than a merge.
//
// ⚠️ ND NOTE, WRITTEN IN ON PURPOSE. This app is built for neurodivergent
// learners and this is the one unit whose subject is them. So: no example in this
// file treats a mental illness as a weakness, a choice or a thing to be got over
// by trying harder. कलंक (l2) exists precisely to name the stigma as the problem
// it is. If a later seat rewrites these examples, keep that.
//
// GENDER (§4), named in every hint:
//   ⚠️ FEMININE: अनिद्रा, उदासी, लत, मनोदशा, एकाग्रता, सहनशीलता.
//   ⚠️ **लत IS FEMININE AND CONSONANT-FINAL AND ONLY THREE LETTERS LONG** —
//   nothing in the shape says so, and it is §B6's worst class. **बुरी लत**, never
//   बुरा. ⚠️ **एकाग्रता AND सहनशीलता ARE -ता ABSTRACTS, SO ALWAYS FEMININE**
//   (§B6). ⚠️ **अनिद्रा AND मनोदशा ARE FEMININE IN -आ**, against the rule.
//   MASCULINE: अवसाद, मनोरोग, विकार, उन्माद, चिड़चिड़ापन, आघात, सदमा, कलंक,
//   मनोचिकित्सक, परामर्श, मनोविज्ञान, सहारा, विश्राम, आत्मसम्मान, आत्मविश्वास,
//   धैर्य.
//   ⚠️ **सदमा AND सहारा ARE MASCULINE IN -आ**, which is the rule, and they are the
//   only two nouns here a learner can get right from the ending alone.
//   ⚠️ **मनोचिकित्सक DOES NOT CHANGE FOR A WOMAN.**
//   संवेदनशील and भावनात्मक are ADJECTIVES; both are consonant-final and so do
//   not change form at all.
//
// 🚨 SUBSTRING TRAPS — THIS IS THE DENSEST SET IN THE BLOCK, because मन is a
// front at unit 1 and FOUR of this unit's words are built on it. Each one was
// measured, not assumed (`isLetter` is `/\p{L}/`, so a MĀTRĀ does not block a
// match but a LETTER does):
//   • मनोरोग · मनोदशा · मनोविज्ञान · मनोचिकित्सक ALL ⊃ मन (u1l1, the mind) —
//     **ALL FOUR FIRE**, because what follows मन is the ो MĀTRĀ. That is not a
//     defect: मन IS the hook, and every one of the four hints says so. **No drill
//     in this unit contains मन on its own.**
//   • मनोविज्ञान ⊃ विज्ञान (u6l?, science) — **FIRES**, the ो before it is a
//     mātrā · AND ⊃ ज्ञान (u57l4, knowledge) — **ALSO FIRES**, the ि before it is
//     a mātrā. **THREE TAUGHT FRONTS INSIDE ONE WORD, ALL THREE MATCHABLE**, and
//     that is the most in any Hindi word in the course.
//   • मनोचिकित्सक ⊃ चिकित्सक (u112l1, MINE, a medical practitioner) — **FIRES**,
//     the ो before it is a mātrā. The two sit in different units and the compound
//     is a separate lexeme — the same call u97 made on छात्रावास ⊃ छात्र.
//   • आत्मसम्मान and आत्मविश्वास ⊃ आत्मा (u90l?, the soul)? **NOT A SUBSTRING** —
//     आत्मा needs म followed by ा, and here म is followed by स and व. Checked
//     rather than assumed, because it looks like one.
//   • अवसाद ⊃ साद? not a front. उदासी ⊃ उदास? not a front — the course cards the
//     noun and not the adjective here, deliberately, because दुख is also free and
//     a later A1 pass may want it.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): चिड़चिड़ापन chirchiraapan carries ड़ TWICE, read r
// (unit 1 §1c), and was checked against चिड़िया (u21) — a different string. आघात
// aaghaat, उन्माद unmaad, अवसाद avsaad, सदमा sadmaa and धैर्य dhairya are all
// DENTAL. No pair needs the doubling escape hatch. 24 new readings, 24 distinct,
// zero collisions against all 2,270.
// LOANWORD FREE-PASS CHECK (§9): zero loanwords in this unit.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision rather than a
// gap: मनोवैज्ञानिक (REFUSED — वैज्ञानिक u87 is the same derivational pair and
// मनोविज्ञान in l3 already carries the field), मनोबल (REFUSED — हौसला u52 is
// glossed "morale" and accepts "spirit to carry on"; the concept is already
// taught), आशा (REFUSED — उम्मीद u27 owns "hope"), धीरज (REFUSED — the same
// concept as धैर्य in l4, and only one of a synonym pair can be carded), लचीलापन,
// आत्मचिंतन, स्वीकार, मनन, आत्महत्या.
export const HI_UNIT115 = {
  id: "hi-u115",
  lang: "hi",
  title: "मन का स्वास्थ्य",
  order: 115,
  stage: "b2",
  lessons: [
    {
      id: "hi-u115l1",
      unit: 115,
      lesson: 1,
      title: "When the mind is unwell",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name an illness of the mind rather than a mood: depression, mental illness, a disorder, mania, sleeplessness and irritability.",
      items: [
        { id: "hi-u115l1-avsaad", type: "vocab", front: "अवसाद", reading: "avsaad", meaning: "depression", accept: ["an illness in which nothing feels worth doing"], example: { jp: "अवसाद उदासी से अलग चीज़ है — उदासी किसी वजह से आती है और चली जाती है, अवसाद महीनों रहता है।", en: "Depression is a different thing from low spirits — low spirits come for a reason and go, depression stays for months." }, drill: { jp: "अवसाद महीनों तक रह सकता है", en: "Depression can stay for months" }, hint: "AV-SAAD, masculine and consonant-final, both consonants DENTAL. ⚠️ The inherent a in the middle is NOT said — unit 1 §1 writes the reading as it is spoken, so avsaad and never avasaad. 🚨 NOT a mood. The whole point of the card is the contrast in its own example: उदासी has a cause and an end, अवसाद has neither." },
        { id: "hi-u115l1-manorog", type: "vocab", front: "मनोरोग", reading: "manorog", meaning: "a mental illness", accept: ["an illness of the mind rather than the body"], example: { jp: "लोग शरीर की बीमारी के लिए फ़ौरन डॉक्टर के पास जाते हैं, पर मनोरोग के लिए साल लगा देते हैं।", en: "People go to a doctor at once for an illness of the body, but for a mental illness they take years." }, drill: { jp: "मनोरोग के लिए लोग साल लगा देते हैं", en: "For a mental illness people take years" }, hint: "MA-NO-ROG, masculine. मन, the mind (unit 1), plus रोग, an illness in the Sanskritic register. 🚨 मन IS A STRING INSIDE IT AND THE ROUTER **CAN** MATCH IT, because the ो after मन is a MĀTRĀ. ⚠️ रोग IS NOT CARDED: बीमारी (unit 35) is the word a learner needs, and it accepts 'a disease' and 'an ailment' already." },
        { id: "hi-u115l1-vikaar", type: "vocab", front: "विकार", reading: "vikaar", meaning: "a disorder", accept: ["a working part of a person that has gone wrong"], example: { jp: "डॉक्टर ने इसे एक विकार कहा, न कोई कमज़ोरी और न किसी की गलती।", en: "The doctor called it a disorder, not a weakness and not anybody's fault." }, drill: { jp: "डॉक्टर ने इसे एक विकार कहा", en: "The doctor called it a disorder" }, hint: "VI-KAAR, masculine and consonant-final. ⚠️ Broader than मनोरोग: a विकार is anything in a system that no longer works as it should, so Hindi uses it of the body too. 🚨 THE EXAMPLE IS THE CARD: this unit never calls an illness of the mind a कमज़ोरी or a गलती, and that is deliberate." },
        { id: "hi-u115l1-unmaad", type: "vocab", front: "उन्माद", reading: "unmaad", meaning: "mania", accept: ["a state of being carried away beyond reason"], example: { jp: "उन्माद में नींद की ज़रूरत ही नहीं लगती, और उसी वजह से वह तीन रात लगातार काम करता रहा।", en: "In mania one does not even feel the need for sleep, which is why he worked three nights on end." }, drill: { jp: "उन्माद में नींद की ज़रूरत नहीं लगती", en: "In mania one does not feel the need for sleep" }, hint: "UN-MAAD, masculine. न्म is a stacked conjunct — न with a halant, then म — and both are DENTAL. ⚠️ Hindi also uses उन्माद of a crowd, politically, so a newspaper may mean something quite different by it; the clinical sense is the one this card teaches, and the example makes that plain." },
        { id: "hi-u115l1-anidraa", type: "vocab", front: "अनिद्रा", reading: "anidraa", meaning: "sleeplessness", accept: ["not being able to sleep over a long stretch"], example: { jp: "अनिद्रा कई हफ़्तों तक चली, और उसके बाद दिन में काम करना भी मुश्किल हो गया।", en: "The sleeplessness went on for several weeks, and after that even working in the day became hard." }, drill: { jp: "अनिद्रा कई हफ़्तों तक चली", en: "The sleeplessness went on for several weeks" }, hint: "A-NI-DRAA. ⚠️ FEMININE IN -आ, against the rule (§B6) — अनिद्रा चली, never चला. अ-, not, plus निद्रा, sleep in the literary register. ⚠️ निद्रा IS NOT CARDED: नींद (unit 20) is the word a learner needs. द्र is द with a halant then र." },
        { id: "hi-u115l1-chirchiraapan", type: "vocab", front: "चिड़चिड़ापन", reading: "chirchiraapan", meaning: "irritability", accept: ["snapping at everything over a long stretch"], example: { jp: "नींद पूरी न होने पर चिड़चिड़ापन बढ़ जाता है, और घर के लोग उसे गुस्सा समझ लेते हैं।", en: "When sleep is short, irritability grows, and the people at home take it for anger." }, drill: { jp: "नींद पूरी न होने पर चिड़चिड़ापन बढ़ता है", en: "When sleep is short irritability grows" }, hint: "CHIR-CHI-RAA-PAN, masculine. ड़ TWICE, and unit 1 §1c reads it r — so chirchiraapan, never chidchidaapan. -पन is the suffix that makes a noun of a quality, the same one in अकेलापन (unit 52). ⚠️ Not गुस्सा (unit 27), which is one outburst with a cause — and the example names exactly that mistake." },
      ],
    },
    {
      id: "hi-u115l2",
      unit: 115,
      lesson: 2,
      title: "What knocked it over",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about causes and consequences: a trauma, a shock, low spirits, an addiction, the stigma around it all, and the state of mind you are left in.",
      items: [
        { id: "hi-u115l2-aaghaat", type: "vocab", front: "आघात", reading: "aaghaat", meaning: "a trauma", accept: ["a blow that goes on doing damage afterwards"], example: { jp: "बचपन का आघात बहुत साल बाद भी काम करता रहता है, चाहे उसकी याद साफ़ न हो।", en: "A childhood trauma goes on working many years later, even if the memory of it is not clear." }, drill: { jp: "बचपन का आघात बाद में भी रहता है", en: "A childhood trauma stays later too" }, hint: "AA-GHAAT, masculine, घ with a puff of air and a DENTAL त. ⚠️ Not चोट, a hurt you can point at: an आघात is the blow AND everything it leaves behind, which is why Hindi can say मन पर आघात. The literal sense — a physical blow — still exists and is why the word feels heavy." },
        { id: "hi-u115l2-sadmaa", type: "vocab", front: "सदमा", reading: "sadmaa", meaning: "a shock", accept: ["the sudden hit of bad news"], example: { jp: "माँ की मौत का सदमा इतना बड़ा था कि वह दो दिन किसी से बोला ही नहीं।", en: "The shock of his mother's death was so great that he did not speak to anybody for two days." }, drill: { jp: "माँ की मौत का सदमा बहुत बड़ा था", en: "The shock of his mother's death was very great" }, hint: "SAD-MAA, masculine in -आ, which is the rule. ⚠️ The difference from आघात is TIME: a सदमा is the moment the news lands, an आघात is the years afterwards. Hindi says सदमा लगना — a shock 'attaches' — never आना, and the word is from Arabic." },
        { id: "hi-u115l2-udaasii", type: "vocab", front: "उदासी", reading: "udaasii", meaning: "low spirits", accept: ["feeling flat for a while and then not"], example: { jp: "बारिश के दिनों में थोड़ी उदासी सबको लगती है, और वह मौसम बदलने पर चली जाती है।", en: "Everybody feels a little low in the rainy days, and it goes when the weather changes." }, drill: { jp: "बारिश में थोड़ी उदासी सबको लगती है", en: "Everybody feels a little low in the rain" }, hint: "U-DAA-SII, feminine with a long ी, which the rule gets right. 🚨 THE WHOLE REASON THIS CARD EXISTS IS THE CONTRAST WITH अवसाद in lesson 1: उदासी has a cause and an end. Carding both is how the unit teaches that they are not the same illness — because in English 'depressed' is used for both." },
        { id: "hi-u115l2-lat", type: "vocab", front: "लत", reading: "lat", meaning: "an addiction", accept: ["a habit that has stopped being a choice"], example: { jp: "शराब की लत छोड़ना अकेले बहुत मुश्किल है, इसलिए लोग किसी और का सहारा ढूँढते हैं।", en: "Giving up a drink addiction alone is very hard, which is why people look for somebody else's support." }, drill: { jp: "शराब की लत छोड़ना बहुत मुश्किल है", en: "Giving up a drink addiction is very hard" }, hint: "LAT. 🚨 FEMININE AND CONSONANT-FINAL AND ONLY THREE LETTERS — nothing in the shape tells you, and it is §B6's worst class: **बुरी लत**, never बुरा. Both consonants are DENTAL. ⚠️ Not आदत, a habit: a habit is something you do, a लत is something that does you — which is the distinction the gloss carries." },
        { id: "hi-u115l2-kalank", type: "vocab", front: "कलंक", reading: "kalank", meaning: "a stigma", accept: ["a mark other people put on you for a thing you have"], example: { jp: "सबसे बड़ी दिक्कत बीमारी नहीं, उसके साथ चलने वाला कलंक है — उसी डर से लोग मदद नहीं माँगते।", en: "The biggest difficulty is not the illness but the stigma that travels with it — it is that fear that keeps people from asking for help." }, drill: { jp: "बीमारी के साथ चलने वाला कलंक बड़ा है", en: "The stigma travelling with the illness is big" }, hint: "KA-LANK, masculine. The ं is before क, a stop, so unit 1 §1 writes it as the homorganic n. 🚨 THE CARD THIS UNIT WAS BUILT AROUND: a कलंक is placed by OTHER people, which is why Hindi says कलंक लगना, 'a stigma gets attached', with nobody doing it. The example names it as the real obstacle." },
        { id: "hi-u115l2-manodashaa", type: "vocab", front: "मनोदशा", reading: "manodashaa", meaning: "a state of mind", accept: ["what shape somebody's mind is in just now"], example: { jp: "ऐसी मनोदशा में कोई बड़ा फ़ैसला नहीं लेना चाहिए, और डॉक्टर ने यही कहा था।", en: "No big decision should be taken in such a state of mind, and that is exactly what the doctor had said." }, drill: { jp: "ऐसी मनोदशा में बड़ा फ़ैसला नहीं लेना चाहिए", en: "No big decision should be taken in such a state of mind" }, hint: "MA-NO-DA-SHAA. ⚠️ FEMININE IN -आ, against the rule — ऐसी मनोदशा, never ऐसा. मन (unit 1) plus दशा, a condition. 🚨 मन IS A STRING INSIDE IT AND THE ROUTER **CAN** MATCH IT, because the ो is a mātrā — the second of four मन-compounds in this unit that can." },
      ],
    },
    {
      id: "hi-u115l3",
      unit: 115,
      lesson: 3,
      title: "Who helps, and how",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Ask for and describe help: the psychiatrist, the counselling, the field of psychology, somebody to lean on, rest as treatment, and getting your attention back.",
      items: [
        { id: "hi-u115l3-manochikitsak", type: "vocab", front: "मनोचिकित्सक", reading: "manochikitsak", meaning: "a psychiatrist", accept: ["a doctor who treats illnesses of the mind"], example: { jp: "ज़िले में सिर्फ़ एक मनोचिकित्सक है, और उसके पास पहुँचने में तीन महीने लग जाते हैं।", en: "There is only one psychiatrist in the district, and getting to him takes three months." }, drill: { jp: "ज़िले में सिर्फ़ एक मनोचिकित्सक है", en: "There is only one psychiatrist in the district" }, hint: "MA-NO-CHI-KIT-SAK, masculine, and ⚠️ IT DOES NOT CHANGE FOR A WOMAN — the longest front in this unit. मन (unit 1) plus चिकित्सक, a medical practitioner (unit 112, this same block). 🚨 BOTH ARE MATCHABLE STRINGS INSIDE IT, because the ो before चिकित्सक is a mātrā and so is the ो after मन." },
        { id: "hi-u115l3-paraamarsh", type: "vocab", front: "परामर्श", reading: "paraamarsh", meaning: "counselling", accept: ["sitting and talking it through with somebody trained"], example: { jp: "हर हफ़्ते एक घंटे का परामर्श चला, और छह महीने बाद उसे नींद की दवा की ज़रूरत नहीं रही।", en: "An hour of counselling ran every week, and six months later he no longer needed sleeping medicine." }, drill: { jp: "हर हफ़्ते एक घंटे का परामर्श चला", en: "An hour of counselling ran every week" }, hint: "PA-RAA-MARSH, masculine and consonant-final. र्श is र with its halant written above the श. ⚠️ Not सलाह (unit 30), which is advice anybody can give: परामर्श is a SESSION, with a time and a trained person, which is why it takes चलना in Hindi — it runs." },
        { id: "hi-u115l3-manovigyaan", type: "vocab", front: "मनोविज्ञान", reading: "manovigyaan", meaning: "psychology", accept: ["the study of how the mind works"], example: { jp: "उसने मनोविज्ञान पढ़ा है, इसलिए वह जानता है कि कहाँ सुनना है और कहाँ कुछ कहना है।", en: "He has studied psychology, so he knows where to listen and where to say something." }, drill: { jp: "उसने मनोविज्ञान पढ़ा है", en: "He has studied psychology" }, hint: "MA-NO-VIG-YAAN, masculine. मन plus विज्ञान, science (unit 6) — and ज्ञ reads gya (unit 1 §2), so it is manovigyaan. 🚨 THREE TAUGHT FRONTS ARE MATCHABLE INSIDE THIS ONE WORD — मन, विज्ञान AND ज्ञान (unit 57) — because each is preceded by a mātrā. That is the most in any word in the course." },
        { id: "hi-u115l3-sahaaraa", type: "vocab", front: "सहारा", reading: "sahaaraa", meaning: "something to lean on", accept: ["whoever or whatever holds you up"], example: { jp: "उस साल उसका सहारा सिर्फ़ उसकी बहन थी, और उसी ने उसे डॉक्टर तक पहुँचाया।", en: "That year his only support was his sister, and it was she who got him to a doctor." }, drill: { jp: "उस साल उसका सहारा उसकी बहन थी", en: "That year his support was his sister" }, hint: "SA-HAA-RAA, masculine in -आ, which is the rule — and it stays masculine even when the सहारा is a woman, as in the example: उसका सहारा उसकी बहन थी. ⚠️ Not मदद (unit 22), which is a single act of help: a सहारा is what you LEAN on, so it can be a person, a job, a wall or a habit." },
        { id: "hi-u115l3-vishraam", type: "vocab", front: "विश्राम", reading: "vishraam", meaning: "repose", accept: ["rest given as part of a treatment"], example: { jp: "डॉक्टर ने दो हफ़्ते का विश्राम लिखा, और कहा कि दफ़्तर के बारे में सोचना भी नहीं है।", en: "The doctor wrote down two weeks of rest, and said he was not even to think about the office." }, drill: { jp: "डॉक्टर ने दो हफ़्ते का विश्राम लिखा", en: "The doctor wrote down two weeks of rest" }, hint: "VISH-RAAM, masculine. श्र is a stacked conjunct — श with a halant, then र. ⚠️ Not आराम (unit 15), which is rest you take because you want it: विश्राम is PRESCRIBED, which is why a doctor writes it and why Hindi uses it on a hospital sign and not in a living room." },
        { id: "hi-u115l3-ekaagrataa", type: "vocab", front: "एकाग्रता", reading: "ekaagrataa", meaning: "fixed attention on one thing", accept: ["being able to stay on one task"], example: { jp: "दवा शुरू होने के बाद एकाग्रता धीरे वापस आई, और वह फिर किताब पढ़ सका।", en: "After the medicine started his attention came back slowly, and he could read a book again." }, drill: { jp: "दवा के बाद एकाग्रता वापस आई", en: "After the medicine the concentration came back" }, hint: "E-KAA-GRA-TAA, feminine — a -ता abstract, so feminine by §B6's rule. एक, one, plus अग्र, a point, plus -ता. 🚨 THE GLOSS IS DELIBERATELY NOT 'CONCENTRATION': ध्यान (unit 22) already accepts that word, and `normalizeMeaning` would have made the two cards one (unit 1 §9)." },
      ],
    },
    {
      id: "hi-u115l4",
      unit: 115,
      lesson: 4,
      title: "Holding steady",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe what holds a person up: a sense of their own worth, self-assurance, tolerance, patient endurance — and say that somebody is sensitive, or that a matter is emotional.",
      items: [
        { id: "hi-u115l4-aatmasammaan", type: "vocab", front: "आत्मसम्मान", reading: "aatmasammaan", meaning: "a sense of one's own worth", accept: ["holding yourself to be worth something"], example: { jp: "नौकरी जाने पर पैसा तो बाद में मिल गया, पर आत्मसम्मान वापस आने में साल लगे।", en: "When the job went the money came back later, but his sense of his own worth took years to return." }, drill: { jp: "आत्मसम्मान वापस आने में साल लगे", en: "His sense of his own worth took years to return" }, hint: "AAT-MA-SAM-MAAN, masculine. आत्म, self, plus सम्मान, respect — and म्म is a DOUBLED consonant, so unit 1 §1 doubles it in the reading: sammaan. 🚨 THE GLOSS IS NOT 'SELF-RESPECT': गर्व (unit 27) already accepts that string. ⚠️ **आत्मा (unit 90) IS NOT A SUBSTRING HERE** — it needs म followed by ा, and here स follows." },
        { id: "hi-u115l4-aatmavishvaas", type: "vocab", front: "आत्मविश्वास", reading: "aatmavishvaas", meaning: "self-assurance", accept: ["trusting that you can do the thing"], example: { jp: "उसका काम हमेशा अच्छा था, पर आत्मविश्वास इतना कम था कि वह कभी अपना नाम नहीं लेता था।", en: "His work was always good, but his self-assurance was so low that he never put his own name forward." }, drill: { jp: "उसका आत्मविश्वास इतना कम था", en: "His self-assurance was so low" }, hint: "AAT-MA-VISH-VAAS, masculine. आत्म plus विश्वास, trust — so it is trust aimed at yourself, which is why Hindi can say किसी पर विश्वास but only अपने आत्मविश्वास. ⚠️ Not भरोसा (unit 27), which is trust in somebody else. श्व is a stacked conjunct, the same as in विश्वविद्यालय (unit 97)." },
        { id: "hi-u115l4-sahansheelataa", type: "vocab", front: "सहनशीलता", reading: "sahansheelataa", meaning: "tolerance", accept: ["being able to put up with a thing without breaking"], example: { jp: "दर्द की सहनशीलता हर आदमी में अलग होती है, इसलिए एक ही दवा सबके लिए काफ़ी नहीं होती।", en: "Tolerance of pain differs in every person, which is why one medicine is not enough for everybody." }, drill: { jp: "दर्द की सहनशीलता हर आदमी में अलग है", en: "Tolerance of pain differs in every person" }, hint: "SA-HAN-SHEE-LA-TAA, feminine — a -ता abstract (§B6). सहन, bearing, plus शील, a disposition, plus -ता. ⚠️ Not सब्र (unit 52), which is waiting without complaining: सहनशीलता is how MUCH you can take, so it has an amount and can run out." },
        { id: "hi-u115l4-dhairya", type: "vocab", front: "धैर्य", reading: "dhairya", meaning: "patient endurance", accept: ["staying steady through a long bad stretch"], example: { jp: "इलाज में सबसे ज़्यादा धैर्य उसके परिवार को रखना पड़ा, क्योंकि सुधार महीनों में दिखा।", en: "It was his family that had to keep the most patience through the treatment, because improvement showed only over months." }, drill: { jp: "इलाज में परिवार को धैर्य रखना पड़ा", en: "The family had to keep patience through the treatment" }, hint: "DHAIR-YA, masculine, ध with a puff of air and र्य is र with its halant above the य. The ै is the ai of unit 3 — one sound. ⚠️ Hindi says धैर्य रखना, 'to keep patience', never करना. ⚠️ धीरज means the same thing and is NOT carded: only one of a true synonym pair can be, or the two glosses become one (unit 1 §9)." },
        { id: "hi-u115l4-samvedansheel", type: "vocab", front: "संवेदनशील", reading: "samvedansheel", meaning: "sensitive", accept: ["feeling things more than most people do"], example: { jp: "वह बच्चा बहुत संवेदनशील है, इसलिए कक्षा में ज़ोर से बोलने पर भी वह चुप हो जाता है।", en: "That child is very sensitive, so he goes quiet even when somebody speaks loudly in class." }, drill: { jp: "वह बच्चा बहुत संवेदनशील है", en: "That child is very sensitive" }, hint: "SAM-VE-DAN-SHEEL, an ADJECTIVE, consonant-final, so it does not change form at all. From संवेदना, fellow-feeling (unit 67), plus शील — the same शील as in सहनशीलता two cards above. ⚠️ In Hindi it is a NEUTRAL word, often a compliment, and this app is built for learners it describes." },
        { id: "hi-u115l4-bhaavnaatmak", type: "vocab", front: "भावनात्मक", reading: "bhaavnaatmak", meaning: "emotional", accept: ["having to do with how a person feels"], example: { jp: "यह सिर्फ़ पैसे का मामला नहीं है — इसमें भावनात्मक नुकसान भी हुआ, और वह किसी कागज़ में नहीं दिखता।", en: "This is not only a money matter — there was emotional damage too, and that shows in no document." }, drill: { jp: "इसमें भावनात्मक नुकसान भी हुआ", en: "There was emotional damage in it too" }, hint: "BHAAV-NAAT-MAK, an ADJECTIVE, consonant-final and unchanging. From भावना, a feeling (unit 52), plus -आत्मक, the suffix that makes 'of the nature of' — the same आत्म as in आत्मसम्मान at the top of this lesson. ⚠️ The inherent a drops: bhaavnaatmak, not bhaavanaatmak (unit 1 §1)." },
      ],
    },
  ],
};
