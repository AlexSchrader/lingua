// HI Unit 28 — काम और पढ़ाई ("Work and study") — A1
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 RETHEMED SLOT — the scaffold's "Vocabulary 4", a title lint hard-errors on.
//
// WHY WORK AND SCHOOL, MEASURED. Probed the merged u1–u27 corpus: **0 of 13** on
// the office-and-school list. What the language had was नौकरी (a job, u8),
// काम (work, u4), शिक्षक (a teacher, u8), छात्र (a student, u6), स्कूल (u6) and
// दुकानदार (u18) — and nothing for an office, a company, a boss, a salary, an
// employee, a class, a lesson, an exam, a school subject, or any job except
// shopkeeper, teacher and police. A learner could say "I have a job" and not say
// where, with whom, for how much, or what they studied.
// It also fills the communication hole beside it: no word for a letter, the news,
// an address, a voice, a message or a newspaper.
//
// GENDER TRAPS THIS UNIT ADDS (§4), every one named in its own hint. This unit is
// unusually full of them, because the職 job words all end in -ी or -या and are
// nonetheless MASCULINE:
//   कर्मचारी · माली · धोबी · नाई · डाकिया — all MASCULINE, like हाथी and पानी.
//   डाकिया is the तकिया / तौलिया trap again (u15): it looks like a -या feminine.
//   कक्षा, परीक्षा, चिट्ठी, खबर, आवाज़, कंपनी — all FEMININE.
//   पता and वेतन and अखबार and संदेश and गणित and भूगोल and पाठ — MASCULINE.
//
// RETROFLEX/DENTAL: NO NEW COLLISION, MEASURED. This unit adds पाठ paath
// (RETROFLEX ठ) and चिट्ठी chitthii (retroflex geminate ट्ठ) and गणित ganit
// (retroflex ण → n). unit11.js's rule is that the retroflex member DOUBLES only
// when a dental counterpart already exists in the corpus. Checked against all 648
// readings: there is no पाथ, no चित्थी and no गनित, and साथ saath (u8l4) is a
// different word from पाठ paath, not a colliding reading. So nothing doubles and
// the साठ/साथ hatch is still the only place it has ever fired.
//
// LEXEME CALLS MADE BY HAND:
//   • कर्मचारी (l1) / कर्म (u6l4, "a deed") — a compound, a separate entry, and
//     the router cannot mis-blank कर्म inside it: the next character च is a LETTER.
//   • डाकिया (l3) / डाकघर (u14l4, "a post office") — two compounds of डाक, and
//     डाक itself is NOT taught, so neither generates the other. Block 2 reasoned
//     दुकान/दुकानदार the same way.
//   • धोबी (l3) / धोना (u26l4, "to wash") — derivation. derive("धोना") gives
//     धोता/धोती/धोते/धोकर/धोने, never धोबी.
//   • भूगोल (l2) / गोल (u19l1, "round") — a transparent compound (भू + गोल, "the
//     round earth") and still its own dictionary entry: geography. ⚠️ MECHANICAL
//     NOTE: गोल sits at the END of भूगोल, so findWholeWord's \p{L} boundary test
//     does NOT block it — u19l1's गोल drill must never contain भूगोल. It does not.
//   • अखबार (l4) / खबर (l4) — the same Arabic root and in fact its plural there,
//     which is why they look alike. Two Hindi words, two entries, and both hints
//     say so, because the resemblance is the memory hook.
//   • माली (l3) / मालिक (l1) — unrelated words that look alike (Sanskrit माला
//     versus Arabic malik). Different lessons on purpose, and each hint points at
//     the other, because this is a pair a learner WILL confuse.
export const HI_UNIT28 = {
  id: "hi-u28",
  lang: "hi",
  title: "काम और पढ़ाई",
  order: 28,
  stage: "a1",
  lessons: [
    {
      id: "hi-u28l1",
      unit: 28,
      lesson: 1,
      title: "At the office",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where you work, who you work for, who your boss is and what you are paid.",
      items: [
        { id: "hi-u28l1-daftar", type: "vocab", front: "दफ़्तर", reading: "daftar", meaning: "an office", accept: ["a workplace", "a bureau"], example: { jp: "मेरा दफ़्तर स्टेशन के पास है।", en: "My office is near the station." }, drill: { jp: "मैं रोज़ दफ़्तर जाता हूँ", en: "I go to the office every day" }, hint: "DAF-TAR with the Persian फ़ — an f — and the फ़् carries no vowel, so it is two clipped syllables. MASCULINE. ऑफ़िस is also said in speech, but दफ़्तर is the word on the sign." },
        { id: "hi-u28l1-kampanii", type: "vocab", front: "कंपनी", reading: "kampanii", meaning: "a company", accept: ["a firm", "a business"], example: { jp: "यह कंपनी बहुत पुरानी है।", en: "This company is very old." }, drill: { jp: "मेरी कंपनी इस शहर में है", en: "My company is in this city" }, hint: "KAM-PA-NII, FEMININE, straight from English. The ं before प is an m, not an n, because प is made with the lips. Plural कंपनियाँ." },
        { id: "hi-u28l1-maalik", type: "vocab", front: "मालिक", reading: "maalik", meaning: "an owner", accept: ["a proprietor", "a boss", "a master"], example: { jp: "इस दुकान का मालिक बहुत अच्छा है।", en: "This shop's owner is very good." }, drill: { jp: "वह इस कंपनी का मालिक है", en: "He is the owner of this company" }, hint: "MAA-LIK, MASCULINE. It is the owner of a thing and also your boss at work. Arabic. The feminine is मालकिन. Do NOT confuse it with माली, a gardener." },
        { id: "hi-u28l1-vetan", type: "vocab", front: "वेतन", reading: "vetan", meaning: "a salary", accept: ["pay", "wages", "one's monthly pay"], example: { jp: "इस काम का वेतन बहुत कम है।", en: "The salary for this job is very low." }, drill: { jp: "मेरा वेतन हर महीने आता है", en: "My salary comes every month" }, hint: "VE-TAN, MASCULINE, and the final न takes no vowel. Sanskrit, and the word printed on a payslip; तनख़्वाह is its Persian twin in speech. पैसा is money in general, वेतन is what you are paid." },
        { id: "hi-u28l1-karmchaarii", type: "vocab", front: "कर्मचारी", reading: "karmchaarii", meaning: "an employee", accept: ["a member of staff", "a worker in an office"], example: { jp: "इस दफ़्तर में बहुत कर्मचारी हैं।", en: "There are a lot of employees in this office." }, drill: { jp: "यह कर्मचारी रोज़ जल्दी आता है", en: "This employee comes early every day" }, hint: "KARM-CHAA-RII, MASCULINE despite the -ी, and built on कर्म, a deed — someone who does the work. It is the formal word you see in a notice; in speech people say स्टाफ़." },
        { id: "hi-u28l1-afsar", type: "vocab", front: "अफ़सर", reading: "afsar", meaning: "an officer", accept: ["an official", "a senior person at work"], example: { jp: "बड़ा अफ़सर आज दफ़्तर में नहीं है।", en: "The senior officer is not in the office today." }, drill: { jp: "यह अफ़सर बहुत सख्त है", en: "This officer is very strict" }, hint: "AF-SAR, MASCULINE, from English 'officer' by way of Persian. In India it carries real weight: an अफ़सर is someone with authority, not merely someone with a title." },
      ],
    },
    {
      id: "hi-u28l2",
      unit: 28,
      lesson: 2,
      title: "At school",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about school — which class you are in, which lesson you are on, when the exam is and which subjects you study.",
      items: [
        { id: "hi-u28l2-kakshaa", type: "vocab", front: "कक्षा", reading: "kakshaa", meaning: "a class", accept: ["a classroom", "a year at school", "a grade"], example: { jp: "मेरी कक्षा में तीस बच्चे हैं।", en: "There are thirty children in my class." }, drill: { jp: "यह कक्षा बहुत बड़ी है", en: "This classroom is very big" }, hint: "KAK-SHAA, FEMININE, with the क्ष conjunct you learnt back in the alphabet. It is both the room and the school year: कक्षा पाँच is fifth grade. क्लास is common in speech." },
        { id: "hi-u28l2-paath", type: "vocab", front: "पाठ", reading: "paath", meaning: "a lesson", accept: ["a chapter", "a reading", "what is taught at one time"], example: { jp: "आज हमारा तीसरा पाठ है।", en: "Today is our third lesson." }, drill: { jp: "यह पाठ बहुत आसान है", en: "This lesson is very easy" }, hint: "PAATH, MASCULINE, with a RETROFLEX ठ — curl the tongue back. It is a lesson in a book and a chapter of one. Read it against साथ saath, 'with': थ there is dental, ठ here is retroflex." },
        { id: "hi-u28l2-pariikshaa", type: "vocab", front: "परीक्षा", reading: "pariikshaa", meaning: "an exam", accept: ["a test", "an examination"], example: { jp: "अगले महीने मेरी परीक्षा है।", en: "My exam is next month." }, drill: { jp: "यह परीक्षा बहुत मुश्किल है", en: "This exam is very difficult" }, hint: "PA-RIIK-SHAA, FEMININE, with the same क्ष as कक्षा. ⚠️ परीक्षा देना is to SIT an exam — Hindi GIVES it where English takes it, and reversing that is the classic beginner's slip." },
        { id: "hi-u28l2-ganit", type: "vocab", front: "गणित", reading: "ganit", meaning: "mathematics", accept: ["maths", "arithmetic", "the subject of numbers"], example: { jp: "मुझे गणित बहुत पसंद है।", en: "I like mathematics a lot." }, drill: { jp: "गणित पढ़ना मुश्किल नहीं है", en: "Studying mathematics is not difficult" }, hint: "GA-NIT, MASCULINE, with a RETROFLEX ण — the tongue curls back for the n — and a final त with no vowel. Sanskrit, from the same root as गिनना, to count." },
        { id: "hi-u28l2-bhuugol", type: "vocab", front: "भूगोल", reading: "bhuugol", meaning: "geography", accept: ["the study of the earth", "the subject of places"], example: { jp: "इस किताब में भारत का भूगोल है।", en: "This book has the geography of India in it." }, drill: { jp: "मैं भूगोल भी पढ़ता हूँ", en: "I study geography too" }, hint: "BHUU-GOL, MASCULINE: भू is the earth and गोल is round, so 'the round earth' — which is what geography is. You already know गोल from the shapes lesson." },
        { id: "hi-u28l2-abhyaas", type: "vocab", front: "अभ्यास", reading: "abhyaas", meaning: "practice", accept: ["an exercise", "drill work", "repeated training"], example: { jp: "रोज़ का अभ्यास बहुत ज़रूरी है।", en: "Daily practice is very important." }, drill: { jp: "यह अभ्यास बहुत आसान है", en: "This exercise is very easy" }, hint: "ABH-YAAS, MASCULINE, with the भ्य conjunct. It is both the practising and the exercise itself: अभ्यास करना, to practise. In speech people often just say प्रैक्टिस." },
      ],
    },
    {
      id: "hi-u28l3",
      unit: 28,
      lesson: 3,
      title: "Jobs people do",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the trades you meet every day in an Indian town and say what each of them does.",
      items: [
        { id: "hi-u28l3-kisaan", type: "vocab", front: "किसान", reading: "kisaan", meaning: "a farmer", accept: ["a cultivator", "someone who farms"], example: { jp: "किसान खेत में काम करता है।", en: "The farmer works in the field." }, drill: { jp: "यह किसान हमारे गाँव में रहता है", en: "This farmer lives in our village" }, hint: "KI-SAAN, MASCULINE. In India किसान is a political word as much as a job — किसान आंदोलन is the farmers' movement. किसानी is farming itself." },
        { id: "hi-u28l3-mazduur", type: "vocab", front: "मज़दूर", reading: "mazduur", meaning: "a labourer", accept: ["a workman", "a manual worker", "a hired hand"], example: { jp: "मज़दूर सुबह से शाम तक काम करते हैं।", en: "The labourers work from morning until evening." }, drill: { jp: "यहाँ बहुत मज़दूर काम करते हैं", en: "A lot of labourers work here" }, hint: "MAZ-DUUR, MASCULINE, with the Persian ज़. It means manual or daily-wage work specifically — a कर्मचारी sits in an office. मज़दूरी is both the work and the wage for it." },
        { id: "hi-u28l3-naaii", type: "vocab", front: "नाई", reading: "naaii", meaning: "a barber", accept: ["a hairdresser", "someone who cuts hair"], example: { jp: "नाई हमारे बाल काटता है।", en: "The barber cuts our hair." }, drill: { jp: "यह नाई बहुत अच्छा काम करता है", en: "This barber does very good work" }, hint: "NAA-II, MASCULINE despite the -ई. In a small town the नाई's shop is a social place as much as a service. Read it against भाई bhaaii, brother — one letter apart." },
        { id: "hi-u28l3-maalii", type: "vocab", front: "माली", reading: "maalii", meaning: "a gardener", accept: ["someone who looks after a garden"], example: { jp: "माली रोज़ बगीचे में पानी डालता है।", en: "The gardener waters the garden every day." }, drill: { jp: "हमारा माली बहुत बूढ़ा है", en: "Our gardener is very old" }, hint: "MAA-LII, MASCULINE despite the -ी, like हाथी and पानी. From माला, a garland — someone who works with flowers. Keep it clear of मालिक, an owner: one letter longer, a completely different job." },
        { id: "hi-u28l3-daakiyaa", type: "vocab", front: "डाकिया", reading: "daakiyaa", meaning: "a postman", accept: ["a letter carrier", "someone who brings the post"], example: { jp: "डाकिया रोज़ सुबह हमारे घर आता है।", en: "The postman comes to our house every morning." }, drill: { jp: "यह डाकिया बहुत जल्दी आता है", en: "This postman comes very early" }, hint: "DAA-KI-YAA, MASCULINE despite looking like a -या feminine — the same trap as तकिया and तौलिया. डाक is the post, and you already know डाकघर, the post office." },
        { id: "hi-u28l3-dhobii", type: "vocab", front: "धोबी", reading: "dhobii", meaning: "a washerman", accept: ["a laundryman", "someone who washes clothes"], example: { jp: "धोबी हमारे कपड़े धोता है।", en: "The washerman washes our clothes." }, drill: { jp: "धोबी हर हफ़्ते यहाँ आता है", en: "The washerman comes here every week" }, hint: "DHO-BII, MASCULINE despite the -ी, and built on धोना, to wash. The धोबी is a fixture of Indian household life; धोबी घाट is the open-air laundry you may have seen photographed." },
      ],
    },
    {
      id: "hi-u28l4",
      unit: 28,
      lesson: 4,
      title: "Letters, news and the telephone",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Send word to someone — a letter, a message or your address — and say what the news is.",
      items: [
        { id: "hi-u28l4-chitthii", type: "vocab", front: "चिट्ठी", reading: "chitthii", meaning: "a letter you post", accept: ["a written letter", "a note sent by post"], example: { jp: "मैं अपनी माँ को चिट्ठी भेजता हूँ।", en: "I send my mother a letter." }, drill: { jp: "यह चिट्ठी बहुत पुरानी है", en: "This letter is very old" }, hint: "CHIT-THII, FEMININE, plural चिट्ठियाँ, with a doubled RETROFLEX ट्ठ — curl the tongue back and hold it. पत्र is the formal Sanskrit word. Read it against छुट्टी chhuttii, a holiday." },
        { id: "hi-u28l4-khabar", type: "vocab", front: "खबर", reading: "khabar", meaning: "news", accept: ["information", "a piece of news", "word of something"], example: { jp: "आज कोई अच्छी खबर नहीं है।", en: "There is no good news today." }, drill: { jp: "मुझे इस काम की खबर है", en: "I have word of this work" }, hint: "KHA-BAR, FEMININE, plural खबरें, written with plain ख. It is the news and also simply 'word' of something: मुझे खबर है, I know about it. खबरदार! is 'beware'." },
        { id: "hi-u28l4-pataa", type: "vocab", front: "पता", reading: "pataa", meaning: "an address", accept: ["where someone lives", "a location written down", "knowledge of something"], example: { jp: "यह मेरे घर का पता है।", en: "This is my house's address." }, drill: { jp: "मुझे इस दुकान का पता है", en: "I know this shop" }, hint: "PA-TAA, MASCULINE. It is an address AND knowledge: मुझे पता है means 'I know', and it is one of the commonest sentences in the language. Read it against पत्ता, a leaf — one त there, two here." },
        { id: "hi-u28l4-aavaaz", type: "vocab", front: "आवाज़", reading: "aavaaz", meaning: "a voice", accept: ["a sound", "a noise", "a call"], example: { jp: "बाहर से बच्चों की आवाज़ आती है।", en: "The children's voices come from outside." }, drill: { jp: "उसकी आवाज़ बहुत अच्छी है", en: "His voice is very good" }, hint: "AA-VAAZ, FEMININE, with the Persian ज़. It is a voice, a sound and a shout at once: आवाज़ देना is to call out to someone. Plural आवाज़ें." },
        { id: "hi-u28l4-sandesh", type: "vocab", front: "संदेश", reading: "sandesh", meaning: "a message", accept: ["a communication", "word that someone sends"], example: { jp: "मैं उसे रोज़ एक संदेश भेजता हूँ।", en: "I send him a message every day." }, drill: { jp: "यह संदेश बहुत ज़रूरी है", en: "This message is very important" }, hint: "SAN-DESH, MASCULINE, and the ं before द is an n. Sanskrit सम् plus देश — a thing carried across. On a phone people just say मेसेज." },
        { id: "hi-u28l4-akhbaar", type: "vocab", front: "अखबार", reading: "akhbaar", meaning: "a newspaper", accept: ["a news sheet", "a daily paper"], example: { jp: "मैं रोज़ सुबह अखबार पढ़ता हूँ।", en: "I read the newspaper every morning." }, drill: { jp: "आज का अखबार कहाँ है", en: "Where is today's newspaper" }, hint: "AKH-BAAR, MASCULINE, plain ख. Arabic, and in Arabic it is literally the PLURAL of खबर — which is exactly why the two words look related. Knowing that makes both easier to keep." },
      ],
    },
  ],
};
