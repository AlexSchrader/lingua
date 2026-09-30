// HI Unit 34 — दफ़्तर और कक्षा ("The office and the classroom") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 1. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// WHY THIS SLOT KEPT ITS THEME. u28 काम और पढ़ाई owns the IDEA of work and study —
// दफ़्तर, मालिक, कंपनी, कर्मचारी, वेतन, नौकरी, कक्षा, परीक्षा, पाठ, अभ्यास, गणित,
// भूगोल, मज़दूर, किसान. The probe still found the office-and-school field at
// **4 of 18**: the course could name a class and an exam and could not name an
// exercise book, a school bag, a bell, a mark, homework, a meeting, a file, a
// signature or a degree. This unit is the STUFF on the desk, not the idea.
//
// ⚠️ THREE WORDS WERE DROPPED FOR BEING SYNONYMS OF A TAUGHT FRONT. Named here so
// nobody re-adds them:
//   • अध्यापक — शिक्षक (u8l3) is already "a teacher". A pure doublet.
//   • कलम — पेन (u9l4) is already "a ballpoint pen".
//   • पेंसिल — ALREADY TAUGHT, at u9l4. Caught by check, not by eye; it was on the
//     draft list for this lesson until the front check refused it.
// ⚠️ AND ONE DOUBLET WAS KEPT ON PURPOSE. सवाल is taught here even though प्रश्न
// (u6l3) glosses "a question", because the two are a real register pair in Hindi —
// प्रश्न is what a printed exam paper says, सवाल is what a person says, and a
// learner needs the spoken one more. The glosses are kept apart in a WORD and not
// only in a parenthetical, which §9 requires: "a question someone asks" does not
// normalise onto "a question", and neither gloss appears in the other's accept[].
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   कापी, घंटी, हाज़िरी, पढ़ाई, मेहनत, मीटिंग, फ़ाइल, अर्ज़ी, डिग्री, तरक्की are
//   FEMININE — मेहनत ends in a consonant and is feminine anyway, which is §4's
//   unpredictable class.
//   बस्ता, बोर्ड, सवाल, विषय, होमवर्क, अंक, रजिस्टर, इंटरव्यू, दस्तखत, वकील,
//   इंजीनियर, क्लर्क, कारीगर are MASCULINE.
//   ⚠️ घंटी (a bell) is NOT घंटा (u11l3, an hour). Same root, two different words,
//   and this unit deliberately puts the bell next to the hour the learner knows.
//
// RETROFLEX/DENTAL: no new pair, checked against all 816 readings. बस्ता bastaa,
// घंटी ghantii, रजिस्टर rajistar, कापी kaapii and दस्तखत dastkhat have no
// counterpart — no बस्था, घंथी, रजिस्तर, काथी or दस्तखथ — so §1(b)'s hatch fires
// nowhere new. दस्तखत is written with PLAIN ख per unit31.js §A4; the ख़ spelling
// दस्तख़त exists and this language does not use it anywhere.
//
// LOANWORD FREE-PASS CHECK (§9), measured with checkProduce on every one:
//   कापी kaapii ≠ "copy" · बोर्ड bord ≠ "board" · होमवर्क homvark ≠ "homework" ·
//   मीटिंग miiting ≠ "meeting" · फ़ाइल faail ≠ "file" · रजिस्टर rajistar ≠
//   "register" · इंटरव्यू intarvyuu ≠ "interview" · डिग्री digrii ≠ "degree" ·
//   इंजीनियर injiniyar ≠ "engineer" · क्लर्क klark ≠ "clerk". Zero free passes.
export const HI_UNIT34 = {
  id: "hi-u34",
  lang: "hi",
  title: "दफ़्तर और कक्षा",
  order: 34,
  stage: "a2",
  lessons: [
    {
      id: "hi-u34l1",
      unit: 34,
      lesson: 1,
      title: "What is on the desk at school",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name the things in an Indian classroom and say what you have and have not brought.",
      items: [
        { id: "hi-u34l1-kaapii", type: "vocab", front: "कापी", reading: "kaapii", meaning: "an exercise book", accept: ["a notebook", "a school jotter", "a writing book"], example: { jp: "मेरी कापी बस्ते में है।", en: "My exercise book is in my school bag." }, drill: { jp: "यह कापी मेरी बहन की है", en: "This exercise book is my sister's" }, hint: "KAA-PII, FEMININE, plural कापियाँ. Not a copy of anything — in Indian English and in Hindi a कापी IS the exercise book you write in. किताब (u3) is the one you read." },
        { id: "hi-u34l1-bastaa", type: "vocab", front: "बस्ता", reading: "bastaa", meaning: "a school bag", accept: ["a satchel", "a backpack for school"], example: { jp: "बच्चे का बस्ता बहुत भारी है।", en: "The child's school bag is very heavy." }, drill: { jp: "मेरा बस्ता कुर्सी पर है", en: "My school bag is on the chair" }, hint: "BAS-TAA, MASCULINE, plural बस्ते, and note the स्त conjunct of unit 6. थैला (u18) is any bag; बैग (u9) is the loanword; a बस्ता is specifically the one a schoolchild carries." },
        { id: "hi-u34l1-ghantii", type: "vocab", front: "घंटी", reading: "ghantii", meaning: "a bell", accept: ["a doorbell", "the school bell", "a ring"], example: { jp: "छुट्टी की घंटी के बाद बच्चे बाहर निकले।", en: "After the break bell the children came out." }, drill: { jp: "स्कूल की घंटी बहुत तेज़ है", en: "The school bell is very loud" }, hint: "GHAN-TII, FEMININE, retroflex ट. ⚠️ Do not read it as घंटा (u11), an hour — same root, two different words, and the difference is only the last mātrā. घंटी बजना is for a bell to ring." },
        { id: "hi-u34l1-bord", type: "vocab", front: "बोर्ड", reading: "bord", meaning: "a blackboard", accept: ["a board", "a whiteboard", "the board at the front"], example: { jp: "शिक्षक ने बोर्ड पर सवाल लिखा।", en: "The teacher wrote a question on the board." }, drill: { jp: "बोर्ड पर कुछ नहीं लिखा है", en: "Nothing is written on the board" }, hint: "BORD, MASCULINE, and the र् rides on top of the ड as a hook — the same conjunct shape as पासपोर्ट in u33. चाक and डस्टर stay untaught; this is the one that matters." },
        { id: "hi-u34l1-haazirii", type: "vocab", front: "हाज़िरी", reading: "haazirii", meaning: "attendance", accept: ["the register call", "being present", "roll call"], example: { jp: "सुबह कक्षा में हाज़िरी होती है।", en: "Attendance is taken in class in the morning." }, drill: { jp: "आज मेरी हाज़िरी नहीं हुई", en: "My attendance was not taken today" }, hint: "HAA-ZI-RII, FEMININE, with the ज़ of unit 4. हाज़िरी लेना is for a teacher to take the roll; हाज़िर होना is to be present. Uncountable — no हाज़िरियाँ." },
        { id: "hi-u34l1-rabar", type: "vocab", front: "रबर", reading: "rabar", meaning: "an eraser", accept: ["a rubber", "something to rub out pencil"], example: { jp: "मेरा रबर कापी के नीचे था।", en: "My eraser was under the exercise book." }, drill: { jp: "मुझे एक नया रबर चाहिए", en: "I need a new eraser" }, hint: "RA-BAR, MASCULINE. From English 'rubber', and in Hindi as in Indian English it means the eraser, never the material on a tyre. Useful the moment you make a गलती (u22)." },
      ],
    },
    {
      id: "hi-u34l2",
      unit: 34,
      lesson: 2,
      title: "Questions, homework and marks",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Ask a question in class, say which subject you are studying and talk about your marks.",
      items: [
        { id: "hi-u34l2-savaal", type: "vocab", front: "सवाल", reading: "savaal", meaning: "a question someone asks", accept: ["something you ask", "a query put to someone", "what you want to know"], example: { jp: "मेरा एक सवाल है, क्या मैं पूछ सकता हूँ?", en: "I have a question — may I ask it?" }, drill: { jp: "उसका सवाल बहुत अच्छा था", en: "His question was a very good one" }, hint: "SA-VAAL, MASCULINE, plural सवाल (unchanged). प्रश्न (u6) is the word a printed exam paper uses; सवाल is the word a person uses out loud. सवाल करना and सवाल पूछना both mean to ask." },
        { id: "hi-u34l2-vishay", type: "vocab", front: "विषय", reading: "vishay", meaning: "a school subject", accept: ["a topic", "a field of study", "a matter under discussion"], example: { jp: "गणित मेरा सब से अच्छा विषय है।", en: "Maths is my best subject." }, drill: { jp: "यह विषय बहुत मुश्किल है", en: "This subject is very difficult" }, hint: "VI-SHAY, MASCULINE, Sanskrit, and the ष is the second sh of §1(a) — it sounds exactly like श. गणित, भूगोल and विज्ञान are all विषय; this is the umbrella word for them." },
        { id: "hi-u34l2-homvark", type: "vocab", front: "होमवर्क", reading: "homvark", meaning: "homework", accept: ["schoolwork to do at home", "prep"], example: { jp: "मैंने अपना होमवर्क शाम को किया।", en: "I did my homework in the evening." }, drill: { jp: "आज होमवर्क बहुत ज़्यादा है", en: "There is a lot of homework today" }, hint: "HOM-VARK, MASCULINE, uncountable. Hindi borrowed the word whole; a more formal option is गृहकार्य, which nobody says. And note मैंने … किया — u31's ergative, with किया as करना's irregular past." },
        { id: "hi-u34l2-ank", type: "vocab", front: "अंक", reading: "ank", meaning: "a mark", accept: ["marks", "a score", "points in an exam"], example: { jp: "परीक्षा में उसके अंक बहुत अच्छे थे।", en: "Her marks in the exam were very good." }, drill: { jp: "मेरे अंक इस बार कम थे", en: "My marks were low this time" }, hint: "ANK, MASCULINE, usually used in the plural — अंक for both one mark and many. The ं before क is nasal, said with the back of the tongue. अंक also means a digit, which is why u25's counting unit and this one are cousins." },
        { id: "hi-u34l2-parhaaii", type: "vocab", front: "पढ़ाई", reading: "parhaaii", meaning: "studying", accept: ["one's studies", "schooling", "study as an activity"], example: { jp: "उसकी पढ़ाई अभी पूरी नहीं हुई।", en: "His studies are not finished yet." }, drill: { jp: "मेरी पढ़ाई अच्छी चल रही है", en: "My studies are going well" }, hint: "PAR-HAA-II, FEMININE, uncountable, with the ढ़ of §1(c) — read as rh, not dh. पढ़ना (u4) is the act of reading; पढ़ाई is the whole business of being a student." },
        { id: "hi-u34l2-mehnat", type: "vocab", front: "मेहनत", reading: "mehnat", meaning: "hard work", accept: ["effort", "toil", "putting the work in"], example: { jp: "अच्छे अंक के लिए मेहनत ज़रूरी है।", en: "Hard work is essential for good marks." }, drill: { jp: "उसने इस काम में बहुत मेहनत की", en: "He put a lot of hard work into this job" }, hint: "MEH-NAT, FEMININE despite the consonant ending — §4's unpredictable class again, so मेहनत की, never मेहनत किया. मेहनत करना is to work hard; मेहनती is the adjective." },
      ],
    },
    {
      id: "hi-u34l3",
      unit: 34,
      lesson: 3,
      title: "In the office",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Handle an Indian office: a meeting, a file, an application form and a signature.",
      items: [
        { id: "hi-u34l3-miiting", type: "vocab", front: "मीटिंग", reading: "miiting", meaning: "a meeting", accept: ["a work meeting", "a get-together at work"], example: { jp: "दफ़्तर में आज एक बड़ी मीटिंग है।", en: "There is a big meeting in the office today." }, drill: { jp: "मीटिंग दो घंटे चली", en: "The meeting ran for two hours" }, hint: "MII-TING, FEMININE, plural मीटिंगें. The Hindi word बैठक also exists and is used in writing; मीटिंग is what an office actually says. Note मिलना (u12) is meeting a PERSON — different thing." },
        { id: "hi-u34l3-faail", type: "vocab", front: "फ़ाइल", reading: "faail", meaning: "a file", accept: ["a folder", "a set of papers", "a case file"], example: { jp: "यह फ़ाइल मालिक की मेज़ पर रखो।", en: "Put this file on the boss's desk." }, drill: { jp: "उस फ़ाइल में सब कागज़ हैं", en: "All the papers are in that file" }, hint: "FAA-IL, FEMININE, with the फ़ of unit 4 and the same इ-as-a-letter spelling as लाइन in u33. An Indian office runs on फ़ाइलें, and the phrase फ़ाइल आगे बढ़ना — the file moving on — is half the language of bureaucracy." },
        { id: "hi-u34l3-rajistar", type: "vocab", front: "रजिस्टर", reading: "rajistar", meaning: "a register", accept: ["a record book", "a ledger", "the book names are entered in"], example: { jp: "उसने नाम रजिस्टर में लिखा।", en: "He wrote the name in the register." }, drill: { jp: "रजिस्टर मेज़ के ऊपर है", en: "The register is on top of the desk" }, hint: "RA-JIS-TAR, MASCULINE, with the स्ट conjunct. A कापी is for schoolwork; a रजिस्टर is the official book — attendance, visitors, complaints. And हाज़िरी from lesson 1 is what gets written in it." },
        { id: "hi-u34l3-arzii", type: "vocab", front: "अर्ज़ी", reading: "arzii", meaning: "an application", accept: ["a written request", "a petition", "a form you fill in"], example: { jp: "उसने नौकरी के लिए अर्ज़ी दी।", en: "She put in an application for the job." }, drill: { jp: "मेरी अर्ज़ी अभी दफ़्तर में है", en: "My application is still in the office" }, hint: "AR-ZII, FEMININE, plural अर्ज़ियाँ, with the र् riding on top of the ज़. अर्ज़ी देना is to submit one. Plain क/ख/ग everywhere in this language — so अर्ज़ी, never the Perso-Arabic spelling you may see elsewhere." },
        { id: "hi-u34l3-intarvyuu", type: "vocab", front: "इंटरव्यू", reading: "intarvyuu", meaning: "an interview", accept: ["a job interview", "being interviewed"], example: { jp: "कल मेरा इंटरव्यू है और मैं तैयार हूँ।", en: "My interview is tomorrow and I am ready." }, drill: { jp: "उसका इंटरव्यू बहुत अच्छा गया", en: "His interview went very well" }, hint: "IN-TAR-VYUU, MASCULINE — four syllables, and the व्य in the middle is a conjunct. साक्षात्कार is the Hindi word and it is far too long for daily speech, so everyone says इंटरव्यू." },
        { id: "hi-u34l3-dastkhat", type: "vocab", front: "दस्तखत", reading: "dastkhat", meaning: "a signature", accept: ["signing", "one's name written to approve something"], example: { jp: "अर्ज़ी पर अपने दस्तखत करो।", en: "Put your signature on the application." }, drill: { jp: "इस कागज़ पर दस्तखत ज़रूरी हैं", en: "A signature is essential on this paper" }, hint: "DAST-KHAT, MASCULINE and always PLURAL in use — दस्तखत हैं, not है, even for one person's signature. दस्तखत करना is to sign. Written with plain ख, as the whole of this language is." },
      ],
    },
    {
      id: "hi-u34l4",
      unit: 34,
      lesson: 4,
      title: "Qualifications, and the people who do the work",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what you have qualified in, and name four kinds of worker beyond the ones you already know.",
      items: [
        { id: "hi-u34l4-digrii", type: "vocab", front: "डिग्री", reading: "digrii", meaning: "a degree", accept: ["a university qualification", "a diploma"], example: { jp: "उसके पास गणित की डिग्री है।", en: "He has a degree in maths." }, drill: { jp: "यह डिग्री बहुत काम की है", en: "This degree is very useful" }, hint: "DI-GRII, FEMININE, retroflex ड and the ग्र conjunct. उसके पास … है is the Hindi 'has'. डिग्री also means a degree of temperature, the same double meaning English has." },
        { id: "hi-u34l4-tarakkii", type: "vocab", front: "तरक्की", reading: "tarakkii", meaning: "a promotion", accept: ["advancement", "progress", "moving up at work"], example: { jp: "मेहनत के बाद उसे तरक्की मिली।", en: "After hard work she got a promotion." }, drill: { jp: "उसकी तरक्की पिछले साल हुई", en: "Her promotion happened last year" }, hint: "TA-RAK-KII, FEMININE, doubled क (§1's gemination). तरक्की मिलना is to be promoted — Hindi says the promotion 'is got', not that you get it. It also means progress in general: देश की तरक्की." },
        { id: "hi-u34l4-vakiil", type: "vocab", front: "वकील", reading: "vakiil", meaning: "a lawyer", accept: ["an advocate", "a solicitor", "someone who argues cases"], example: { jp: "उसका भाई शहर में वकील है।", en: "Her brother is a lawyer in the city." }, drill: { jp: "इस काम के लिए वकील चाहिए", en: "A lawyer is needed for this job" }, hint: "VA-KIIL, MASCULINE, plain क. A वकील argues your case; the word covers every kind of lawyer, since Hindi does not split solicitor from barrister." },
        { id: "hi-u34l4-injiniyar", type: "vocab", front: "इंजीनियर", reading: "injiniyar", meaning: "an engineer", accept: ["someone who builds or designs machines"], example: { jp: "वह कंपनी में इंजीनियर का काम करता है।", en: "He works as an engineer at the company." }, drill: { jp: "मेरी बहन एक अच्छी इंजीनियर है", en: "My sister is a good engineer" }, hint: "IN-JII-NI-YAR, MASCULINE as a noun even for a woman — like डॉक्टर in u35, the job word does not change, but the adjective does: अच्छी इंजीनियर. अभियंता is the Hindi word and nobody uses it." },
        { id: "hi-u34l4-klark", type: "vocab", front: "क्लर्क", reading: "klark", meaning: "a clerk", accept: ["an office worker who keeps records", "a desk official"], example: { jp: "बैंक का क्लर्क रजिस्टर भर रहा था।", en: "The bank clerk was filling in the register." }, drill: { jp: "वह दफ़्तर में क्लर्क है", en: "He is a clerk in the office" }, hint: "KLARK, MASCULINE, one syllable with a क्ल conjunct at the front and a र् on the क at the back — a good test of unit 6. कर्मचारी (u28) is any employee; a क्लर्क is the one at the desk with the रजिस्टर." },
        { id: "hi-u34l4-kaariigar", type: "vocab", front: "कारीगर", reading: "kaariigar", meaning: "a craftsman", accept: ["a skilled worker", "an artisan", "someone good with their hands"], example: { jp: "यह कुर्सी एक अच्छे कारीगर ने बनाई।", en: "A good craftsman made this chair." }, drill: { jp: "गाँव का कारीगर बहुत काबिल है", en: "The village craftsman is very capable" }, hint: "KAA-RII-GAR, MASCULINE. मज़दूर (u28) sells labour; a कारीगर sells हुनर (u32) — the skill word from two units back. The -गर ending is Persian for 'doer', as in बंदरगाह's -गाह for 'place'." },
      ],
    },
  ],
};
