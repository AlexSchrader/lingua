// HI Unit 97 — उच्च शिक्षा ("Higher study") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 3 (u87–u97), AND THE LAST UNIT OF THE B1 BAND AND OF THE LANGUAGE AS
// SCAFFOLDED. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 14 (B1)"). Theme ASSIGNED CENTRALLY;
// probed at **3 of 16 taken** against all 1,382 non-glyph hi fronts, 2026-10-05.
//
// MEASURED HOLE: A2's u34 दफ़्तर और पढ़ाई taught SCHOOL and the OFFICE — कक्षा, पाठ,
// परीक्षा, अंक, पढ़ाई, मेहनत, होमवर्क, विषय, डिग्री, अर्ज़ी, इंटरव्यू, तरक्की — and
// stopped at the school gate. The corpus had no university, no college, no faculty,
// no hostel, no library, no admission, no scholarship, no fee, no term, no syllabus,
// no lecture, no professor, no thesis and no graduate, so a learner could describe a
// classroom and not the place that follows it.
//
// ⚠️ THE THREE PROBE WORDS ALREADY TAKEN, AND WHAT THAT FORCED:
//   • डिग्री (u34l4) is TAKEN — so उपाधि is glossed "a conferred degree", because
//     `normalizeMeaning` strips a leading a/an/the and "a degree" is already
//     डिग्री's string (unit1.js §9). Same reason for अध्ययन "academic study"
//     (पढ़ाई u34l3 owns "studying") and व्याख्यान "a university lecture" (पाठ u34l2
//     owns "a lesson").
//   • ज्ञान (u57l3, knowledge) and तर्क (u39l3, logic) are TAKEN; संगोष्ठी and
//     संदर्भ took the free slots.
//   • **स्नातकोत्तर WAS REFUSED**: स्नातक is a strict prefix of it with a mātrā in
//     between, so the router would match the shorter card inside the longer one,
//     and both were in the same lesson. **प्रवेश WAS REFUSED** because this unit's
//     own दाखिला is "admission to a course" and the two glosses are too close to
//     be two cards. **फ़ीस WAS REFUSED** and शुल्क carded instead, on the same
//     loanword measurement u93 used on फ़ॉर्म.
//   • **शुल्क IS THIS UNIT'S, NOT u93's.** It stood in both drafts; a fee belongs
//     with the thing you pay it for, so u93 does not card it.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: छात्रवृत्ति, योग्यता, प्रस्तुति, संगोष्ठी, उपाधि.
//   ⚠️ **छात्रवृत्ति, प्रस्तुति AND उपाधि ALL END IN A SHORT ि** — chhaatravritti,
//   prastuti, upaadhi — never -ii. Same shape as समिति (u88l2) and कृति (u91l4).
//   MASCULINE: विश्वविद्यालय, महाविद्यालय, संस्थान, विभाग, छात्रावास, पुस्तकालय,
//   दाखिला, शुल्क, सत्र, पाठ्यक्रम, व्याख्यान, प्रोफ़ेसर, कुलपति, अध्ययन, निबंध,
//   शोधग्रंथ, परिशिष्ट, स्नातक, विशेषज्ञ.
//
// ⚠️ ONE CARD LEFT THIS UNIT IN THE B1 CROSS-BLOCK DEDUPE (2026-10-06): संदर्भ
// → kept at u68 अमूर्त विचार, block 1's earlier slot. Still in scope here, and no
// u97 sentence uses it. परिशिष्ट replaced it and keeps l4's shape — the parts of
// a thesis — rather than its sense. ⚠️ **उद्धरण, a quotation, was the obvious
// replacement and is TAKEN at u65**; ग्रंथसूची, a bibliography, is free and was
// passed over because शोधग्रंथ in the same lesson already carries ग्रंथ, and
// परास्नातक was passed over because स्नातक sits two cards away, which is the
// same-lesson lexeme pair the cross-block check exists to catch.
//   ⚠️ **कुलपति, स्नातक AND विशेषज्ञ DO NOT CHANGE FOR A WOMAN.**
//   ⚠️ **विश्वविद्यालय, महाविद्यालय AND पुस्तकालय ALL END IN -आलय**, a house — the
//   same half as संग्रहालय (u91l4) — and all three are masculine because आलय is.
//   No verb is carded in this unit.
//
// ⚠️ SUBSTRING TRAPS. 🚨 THE छात्र SET IS THE LAST AND BEST OF THIS BLOCK'S
// FIRES/DOES-NOT-FIRE PAIRS, AND BOTH MEMBERS SIT IN ADJACENT LESSONS:
//   • छात्रावास ⊃ छात्र (u6l4, a student) — **FIRES.** The ा after छात्र is a
//     mātrā, and `isLetter` is `/\p{L}/` only.
//   • छात्रवृत्ति ⊃ छात्र — **CANNOT FIRE.** The व after छात्र is a letter.
//   One prefix, two words, opposite answers; both hints say so.
// ONE MORE FIRES:
//   • पाठ्यक्रम ⊃ पाठ (u34l2, a lesson) — the ् after it is a HALANT, \p{M}.
//     Related in meaning, and named in the hint as the hook rather than hidden.
// AND FIVE CANNOT, each checked rather than assumed:
//   • कुलपति ⊃ कुल (u19l4, a total) — प follows · AND ⊃ पति (u10l1, a husband) —
//     ल precedes. TWO taught fronts inside one word, NEITHER matchable.
//   • शोधग्रंथ ⊃ शोध (u87l3) — ग follows · AND ⊃ ग्रंथ (u90l2) — ध precedes. Again
//     two of this block's own fronts inside one word, neither matchable.
//   • विश्वविद्यालय / महाविद्यालय ⊃ विद्यालय — विद्यालय is NOT a front anywhere, so
//     there is nothing to match. · अध्ययन vs अध्याय (u91l1) — NOT a substring (य vs ा).
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): पाठ्यक्रम paathyakram and संगोष्ठी sangoshthii are
// RETROFLEX (ठ, ष्ठ) with no dental twin in the corpus; संस्थान sansthaan, स्नातक
// snaatak, सत्र satra, प्रस्तुति prastuti and उपाधि upaadhi are DENTAL. 24 new
// readings, 24 distinct, zero collisions against all 1,382.
// ⚠️ THREE READING PAIRS ARE CLOSE and each is named in its own hint: सत्र satra
// against सत्य satya (u90l3) and सत्ता sattaa (u88l3) — three different stacks on
// one syllable · अध्ययन adhyayan against अध्याय adhyaay (u91l1) · उपाधि upaadhi
// against उपदेश updesh (u90l2).
// LOANWORD FREE-PASS CHECK (§9): ONE loanword, प्रोफ़ेसर, reading "profesar" against
// the gloss string "university professor" — NOT equal, so no free pass. फ़ीस was
// REFUSED instead of carded: reading "fiis" against "a fee" → "fee" is one sound
// away, and शुल्क is a native word that teaches more.
// 🚨 SCRIPT NOTE: छात्रवृत्ति is the SIXTH word in the course to use the ृ MĀTRĀ,
// after कृपया (u7l2), कृति (u91l4), संस्कृति and मातृभूमि (u92l4) and वृत्त (u95l1).
// Still uncarded per unit1.js §7, still taught in the hint of each word that needs it.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision: स्नातकोत्तर,
// प्रवेश and फ़ीस (all three REFUSED above, with the reason), डिप्लोमा, व्याख्याता,
// अंकपत्र, कुलाधिपति.
export const HI_UNIT97 = {
  id: "hi-u97",
  lang: "hi",
  title: "उच्च शिक्षा",
  order: 97,
  stage: "b1",
  lessons: [
    {
      id: "hi-u97l1",
      unit: 97,
      lesson: 1,
      title: "Where you study after school",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name a university, a degree college, an institute and a faculty, and say that a student lives in the hostel and reads in the library.",
      items: [
        { id: "hi-u97l1-vishvavidyaalay", type: "vocab", front: "विश्वविद्यालय", reading: "vishvavidyaalay", meaning: "a university", accept: ["a degree-granting university", "the highest teaching body", "where degrees are taken"], example: { jp: "यह विश्वविद्यालय सौ साल पुराना है।", en: "This university is a hundred years old." }, drill: { jp: "वह विश्वविद्यालय में पढ़ता है", en: "He studies at the university" }, hint: "VISH-VA-VID-YAA-LAY, masculine — the longest front in the language, and it comes apart cleanly into three: विश्व, the world, plus विद्या, learning, plus आलय, a house. ⚠️ -आलय IS THE SAME HALF AS संग्रहालय, a museum (unit 91), and it is why all three -आलय words here are masculine. श्व and द्य are stacked conjuncts (unit 6)." },
        { id: "hi-u97l1-mahaavidyaalay", type: "vocab", front: "महाविद्यालय", reading: "mahaavidyaalay", meaning: "a degree college", accept: ["a college under a university", "a college teaching for a degree", "where one studies after school"], example: { jp: "गाँव के पास एक छोटा महाविद्यालय खुला।", en: "A small college opened near the village." }, drill: { jp: "यह महाविद्यालय बहुत बड़ा है", en: "This college is very large" }, hint: "MA-HAA-VID-YAA-LAY, masculine. 🚨 THE SAME WORD AS THE LAST CARD WITH ONE HALF SWAPPED: महा, great, in place of विश्व, the world — so a महाविद्यालय sits UNDER a विश्वविद्यालय and takes its degrees from it. The same महा as महानगर (unit 49) and महाद्वीप (unit 92)." },
        { id: "hi-u97l1-sansthaan", type: "vocab", front: "संस्थान", reading: "sansthaan", meaning: "an institute", accept: ["a specialised teaching body", "a body set up for one subject", "an establishment for study and research"], example: { jp: "यह संस्थान सिर्फ़ शोध के लिए बना है।", en: "This institute was made only for research." }, drill: { jp: "यह संस्थान नया है", en: "This institute is new" }, hint: "SANS-THAAN, masculine and consonant-final. स्थ is a stacked conjunct with a DENTAL थ (unit 6) — the same stack as आस्था (unit 90) and स्थायी (unit 92). ⚠️ Narrower than a विश्वविद्यालय: a संस्थान does ONE field, often only शोध (unit 87), and may teach nobody at all." },
        { id: "hi-u97l1-vibhaag", type: "vocab", front: "विभाग", reading: "vibhaag", meaning: "an academic department", accept: ["a faculty", "a division of an organisation", "one branch of a university"], example: { jp: "हिंदी विभाग में बारह शिक्षक हैं।", en: "There are twelve teachers in the Hindi department." }, drill: { jp: "यह विभाग बहुत पुराना है", en: "This department is very old" }, hint: "VI-BHAAG, masculine and consonant-final, भ with a puff of air. ⚠️ Not हिस्सा (unit 19): a हिस्सा is any part of any whole, a विभाग is a named working division with people in it — of a विश्वविद्यालय, of a सरकार (unit 42), of a company." },
        { id: "hi-u97l1-chhaatraavaas", type: "vocab", front: "छात्रावास", reading: "chhaatraavaas", meaning: "a student hostel", accept: ["a residence hall for students", "where students live on campus", "the building students board in"], example: { jp: "दूर के छात्र छात्रावास में रहते हैं।", en: "Students from far away live in the hostel." }, drill: { jp: "दूर के लड़के छात्रावास में रहते हैं", en: "Boys from far away live in the hostel" }, hint: "CHHAA-TRAA-VAAS, masculine. छात्र, a student (unit 6), plus वास, a dwelling — the same वास as प्रवास and दूतावास (unit 92). 🚨 छात्र IS A STRING INSIDE IT AND THE ROUTER **CAN** MATCH IT, because the ा after it is a mātrā. ⚠️ CONTRAST छात्रवृत्ति in the next lesson, where it cannot." },
        { id: "hi-u97l1-pustakaalay", type: "vocab", front: "पुस्तकालय", reading: "pustakaalay", meaning: "a library", accept: ["a reading room full of books", "where books are kept to be borrowed", "a hall of books for study"], example: { jp: "पुस्तकालय में बात करना मना है।", en: "Talking in the library is not allowed." }, drill: { jp: "पुस्तकालय शाम को बंद होता है", en: "The library closes in the evening" }, hint: "PUS-TA-KAA-LAY, masculine. पुस्तक, the formal word for a book, plus आलय, a house — the third -आलय of this lesson after the two above, and the same half as संग्रहालय (unit 91). ⚠️ पुस्तक itself is NOT carded anywhere: किताब (unit 7) is the word a learner actually needs." },
      ],
    },
    {
      id: "hi-u97l2",
      unit: 97,
      lesson: 2,
      title: "Getting in, and paying for it",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that admission is done in July, that a scholarship pays the fee, and talk about the term, the syllabus and the qualification a post needs.",
      items: [
        { id: "hi-u97l2-daakhilaa", type: "vocab", front: "दाखिला", reading: "daakhilaa", meaning: "admission to a course", accept: ["enrolment", "getting a place", "being taken on to a course"], example: { jp: "विश्वविद्यालय में दाखिला जुलाई में होता है।", en: "Admission to the university is done in July." }, drill: { jp: "उसका दाखिला हो गया", en: "His admission went through" }, hint: "DAA-KHI-LAA, masculine and regular -ा, so the oblique is दाखिले. ख carries a puff of air. The frame is दाखिला लेना, to take admission, or दाखिला होना. ⚠️ प्रवेश is the formal synonym and is NOT carded, because its gloss and this one would be a single string to the grader (§9)." },
        { id: "hi-u97l2-chhaatravritti", type: "vocab", front: "छात्रवृत्ति", reading: "chhaatravritti", meaning: "a scholarship", accept: ["money granted to a student to study", "an award that pays a student's costs", "a grant to study on"], example: { jp: "उसे छात्रवृत्ति मिली, इसलिए शुल्क नहीं देना पड़ा।", en: "She got a scholarship, so she did not have to pay the fee." }, drill: { jp: "उसे छात्रवृत्ति मिली इसलिए शुल्क नहीं लगा", en: "She got a scholarship so no fee applied" }, hint: "CHHAA-TRA-VRIT-TI — ⚠️ FEMININE, and ⚠️ THE FINAL ि IS SHORT. 🚨 THE ृ MĀTRĀ, reading **ri** — the sixth word in the course to use it — plus GEMINATION त्त. 🚨 AND छात्र (unit 6) IS INSIDE IT WITH THE ROUTER UNABLE TO MATCH IT, because the व that follows is a LETTER. Contrast छात्रावास (l1), where it can." },
        { id: "hi-u97l2-shulk", type: "vocab", front: "शुल्क", reading: "shulk", meaning: "a fee", accept: ["a charge payable to an institution", "money charged for a service", "what one pays for a service"], example: { jp: "हर सत्र का शुल्क पहले ही जमा करना पड़ता है।", en: "The fee for each term has to be deposited in advance." }, drill: { jp: "हर सत्र का शुल्क पहले जमा होता है", en: "Each term's fee is deposited in advance" }, hint: "SHULK, masculine and consonant-final, one syllable: ल्क is ल stacked on क (unit 6). ⚠️ FOUR WORDS FOR MONEY OWED, AND THEY ARE NOT INTERCHANGEABLE: किराया (unit 15) is rent, कीमत (unit 18) a price, टैक्स (unit 37) tax, शुल्क what an institution charges. फ़ीस is the loanword and is not carded." },
        { id: "hi-u97l2-satra", type: "vocab", front: "सत्र", reading: "satra", meaning: "an academic session", accept: ["a term", "a sitting of a body", "a stretch of the academic year"], example: { jp: "नया सत्र अगस्त में शुरू होगा।", en: "The new session will begin in August." }, drill: { jp: "यह सत्र छह महीने चलेगा", en: "This session will run six months" }, hint: "SA-TRA, masculine, and त्र KEEPS ITS OWN a — satra, like सूत्र suutra (unit 87) and छात्र chhaatra (unit 6). 🚨 THREE WORDS, THREE STACKS ON ONE SYLLABLE: सत्र satra, सत्य satya (unit 90), सत्ता sattaa (unit 88) — त्र, त्य and a doubled त. Of the संसद (unit 88) too: a sitting." },
        { id: "hi-u97l2-paathyakram", type: "vocab", front: "पाठ्यक्रम", reading: "paathyakram", meaning: "a syllabus", accept: ["a course of study", "a curriculum", "the list of what will be taught"], example: { jp: "इस साल पाठ्यक्रम में दो नए विषय आए।", en: "Two new subjects came into the syllabus this year." }, drill: { jp: "यह पाठ्यक्रम बहुत मुश्किल है", en: "This syllabus is very difficult" }, hint: "PAATH-YA-KRAM, masculine. Two halves: पाठ्य, to be read, plus क्रम, an order — the reading, in order. RETROFLEX ठ and the क्र stack (unit 6). 🚨 पाठ, a lesson (unit 34), IS A STRING AT ITS START and the ् after it is a HALANT, not a letter, so the router CAN match it — and here the two really are related." },
        { id: "hi-u97l2-yogyataa", type: "vocab", front: "योग्यता", reading: "yogyataa", meaning: "a qualification", accept: ["fitness for a post", "an ability that fits a job", "what makes somebody eligible"], example: { jp: "इस काम के लिए ज़रूरी योग्यता प्रपत्र पर लिखी है।", en: "The qualification needed for this work is written on the form." }, drill: { jp: "ज़रूरी योग्यता प्रपत्र पर लिखी है", en: "The necessary qualification is written on the form" }, hint: "YOG-YA-TAA — ⚠️ FEMININE, like every -ता abstract noun (नागरिकता, unit 92). ग्य is a stacked conjunct (unit 6). ⚠️ THREE WORDS, THREE THINGS: काबिल (unit 32) is the adjective capable, हुनर (unit 32) a skill in the hands, योग्यता the paper qualification a post asks for." },
      ],
    },
    {
      id: "hi-u97l3",
      unit: 97,
      lesson: 3,
      title: "In the lecture hall",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that a lecture lasted an hour, that a professor and the vice-chancellor were present, and talk about academic study, a presentation and a seminar.",
      items: [
        { id: "hi-u97l3-vyaakhyaan", type: "vocab", front: "व्याख्यान", reading: "vyaakhyaan", meaning: "a university lecture", accept: ["a formal talk to an audience of students", "a talk given to students", "a set address on a subject"], example: { jp: "उसका व्याख्यान पूरे एक घंटे चला।", en: "His lecture went on for a full hour." }, drill: { jp: "आज का व्याख्यान बहुत अच्छा था", en: "Today the lecture was very good" }, hint: "VYAA-KHYAAN, masculine. 🚨 TWO STACKED CONJUNCTS IN ONE WORD: व्या at the start and ख्या in the middle (both unit 6), and ख carries a puff of air. ⚠️ The gloss says \"university\" because पाठ (unit 34) owns \"a lesson\"; and not भाषण (unit 42), which is a speech made to persuade rather than to teach." },
        { id: "hi-u97l3-profesar", type: "vocab", front: "प्रोफ़ेसर", reading: "profesar", meaning: "a university professor", accept: ["the most senior rank of university teacher", "the highest grade of teacher at a university", "a senior university teacher"], example: { jp: "हिंदी के प्रोफ़ेसर ने चार किताबें लिखी हैं।", en: "The professor of Hindi has written four books." }, drill: { jp: "प्रोफ़ेसर आज कक्षा में नहीं आए", en: "The professor did not come to class today" }, hint: "PRO-FE-SAR, masculine, and it does not change for a woman. प्र is a stacked conjunct and फ़ is the f of unit 4 — profesar, never prophesar. ⚠️ A loanword whose reading is NOT its gloss, so no free pass (§9). Senior to a शिक्षक (unit 8), who teaches in a स्कूल." },
        { id: "hi-u97l3-kulapati", type: "vocab", front: "कुलपति", reading: "kulapati", meaning: "a vice-chancellor", accept: ["the head of a university", "the one who heads a university", "the chief officer of a university"], example: { jp: "कुलपति ने नए सत्र की घोषणा की।", en: "The vice-chancellor announced the new session." }, drill: { jp: "कुलपति आज दफ़्तर में हैं", en: "The vice-chancellor is in the office today" }, hint: "KU-LA-PA-TI, masculine, fixed for a woman too, and ⚠️ THE FINAL ि IS SHORT. 🚨 TWO TAUGHT FRONTS SIT INSIDE THIS ONE WORD AND THE ROUTER CAN MATCH NEITHER: कुल, a total (unit 19), is followed by प, and पति, a husband (unit 10), is preceded by ल — both letters. Checked rather than assumed." },
        { id: "hi-u97l3-adhyayan", type: "vocab", front: "अध्ययन", reading: "adhyayan", meaning: "academic study", accept: ["scholarly study of a subject", "close study of a subject", "work put into learning a subject"], example: { jp: "उसने दस साल इस विषय का अध्ययन किया।", en: "He studied this subject for ten years." }, drill: { jp: "अध्ययन करना आसान नहीं है", en: "Studying is not easy" }, hint: "A-DHYA-YAN, masculine. ध्य is a stacked conjunct (unit 6) and ध carries a puff of air, then TWO य's in a row. ⚠️ READ IT AGAINST अध्याय adhyaay, a chapter (unit 91) — the same stack and almost the same letters. ⚠️ The gloss says \"academic\" because पढ़ाई (unit 34) owns \"studying\"." },
        { id: "hi-u97l3-prastuti", type: "vocab", front: "प्रस्तुति", reading: "prastuti", meaning: "a presentation", accept: ["a prepared talk with material shown", "a talk given with slides", "the putting of work before an audience"], example: { jp: "हर छात्र को एक प्रस्तुति देनी पड़ती है।", en: "Every student has to give a presentation." }, drill: { jp: "उसकी प्रस्तुति बहुत अच्छी थी", en: "Her presentation was very good" }, hint: "PRA-STU-TI — ⚠️ FEMININE, and ⚠️ THE FINAL ि IS SHORT: prastuti. स्त is a stacked conjunct with a DENTAL त (unit 6). ⚠️ Read it against प्रति, a copy (unit 93) — the same प्र and a different stack. The frame is प्रस्तुति देना; also a performance on a मंच (unit 58)." },
        { id: "hi-u97l3-sangoshthii", type: "vocab", front: "संगोष्ठी", reading: "sangoshthii", meaning: "a seminar", accept: ["a meeting where papers are read and discussed", "a small meeting for discussing papers", "an academic discussion meeting"], example: { jp: "इस संगोष्ठी में दस शोधकर्ता बोलेंगे।", en: "Ten researchers will speak at this seminar." }, drill: { jp: "यह संगोष्ठी दो दिन चलेगी", en: "This seminar will run two days" }, hint: "SAN-GOSH-THII — ⚠️ FEMININE. ष्ठ is ष stacked on the RETROFLEX ठ (unit 6) — tongue curled back, then a puff — the same stack as अनुष्ठान (unit 90). ⚠️ Not मीटिंग (unit 34): a मीटिंग decides things, a संगोष्ठी is where शोध (unit 87) is read aloud and argued over." },
      ],
    },
    {
      id: "hi-u97l4",
      unit: 97,
      lesson: 4,
      title: "What you write, and what you get",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about an essay, a thesis and the appendix at the end of it, and say that a graduate received a degree and became a specialist in one subject.",
      items: [
        { id: "hi-u97l4-nibandh", type: "vocab", front: "निबंध", reading: "nibandh", meaning: "an essay written to be marked", accept: ["an essay", "a written piece arguing one point", "a short written composition"], example: { jp: "परीक्षा में एक लंबा निबंध लिखना पड़ा।", en: "In the exam a long essay had to be written." }, drill: { jp: "उसका निबंध सबसे अच्छा था", en: "His essay was the best" }, hint: "NI-BANDH, masculine. The ं before ध is the matching dental nasal and ध carries a puff of air. ⚠️ Read it against अनुबंध, a contract (unit 93) — the same बंध half, from बाँधना, to tie (unit 20). ⚠️ Not लेख (unit 44), which a newspaper prints; a निबंध is written to be marked." },
        { id: "hi-u97l4-shodhgranth", type: "vocab", front: "शोधग्रंथ", reading: "shodhgranth", meaning: "a doctoral thesis", accept: ["a long written work of research", "the book one writes for a doctorate", "a long piece of original research"], example: { jp: "उसका शोधग्रंथ चार सौ पन्ने का है।", en: "His thesis is four hundred pages long." }, drill: { jp: "यह शोधग्रंथ बहुत मोटा है", en: "This thesis is very thick" }, hint: "SHODH-GRANTH, masculine. 🚨 TWO OF THIS BLOCK'S OWN FRONTS JOINED, AND THE ROUTER CAN MATCH NEITHER: शोध, research (unit 87), is followed by ग, and ग्रंथ, a scripture (unit 90), is preceded by ध — both letters. So the one word that is literally built from two cards is safe from both of them." },
        { id: "hi-u97l4-parishisht", type: "vocab", front: "परिशिष्ट", reading: "parishisht", meaning: "an appendix", accept: ["the extra material at the end of a book", "a supplement bound at the back", "extra matter put at the end"], example: { jp: "सब आँकड़े परिशिष्ट में दिए गए हैं।", en: "All the data are given in the appendix." }, drill: { jp: "परिशिष्ट किसी ने नहीं पढ़ा", en: "Nobody read the appendix" }, hint: "PA-RI-SHISHT, masculine, consonant-final: दो परिशिष्ट. ⚠️ BOTH sh LETTERS, ONE EACH — श opening the syllable, ष inside ष्ट (§1a) — and the ष्ट is ष with a RETROFLEX ट stacked, said in one breath. परि- (around) plus शिष्ट (what is left over). ⚠️ Not अध्याय (unit 91), a chapter: a परिशिष्ट sits AFTER the last chapter and carries what the argument needed and could not hold — the tables, the questionnaire, the long quotation." },
        { id: "hi-u97l4-upaadhi", type: "vocab", front: "उपाधि", reading: "upaadhi", meaning: "a conferred degree", accept: ["an academic title granted", "the title a university grants", "what one is given on finishing a degree"], example: { jp: "विश्वविद्यालय ने उसे उपाधि दी।", en: "The university conferred a degree on him." }, drill: { jp: "उसे नई उपाधि मिली", en: "He received a new degree" }, hint: "U-PAA-DHI — ⚠️ FEMININE, ⚠️ THE FINAL ि IS SHORT, and ध carries a puff of air. ⚠️ Read it against उपदेश updesh, a sermon (unit 90) — the same उप and a different word. ⚠️ The gloss says \"conferred\" because डिग्री (unit 34) owns \"a degree\": डिग्री is the paper, उपाधि the title it grants." },
        { id: "hi-u97l4-snaatak", type: "vocab", front: "स्नातक", reading: "snaatak", meaning: "a graduate", accept: ["one who has finished a first degree", "one holding a first degree", "somebody who has taken a bachelor's degree"], example: { jp: "वह तीन साल में स्नातक बन गया।", en: "He became a graduate in three years." }, drill: { jp: "वह अब स्नातक है", en: "He is a graduate now" }, hint: "SNAA-TAK, masculine, fixed for a woman too. स्न is a stacked conjunct (unit 6) and the word opens on two consonants together, which Hindi allows and English does not: snaa, never sanaa. ⚠️ स्नातकोत्तर, a postgraduate, is NOT carded: this word is a strict prefix of it with a mātrā between, so the router would match the shorter card inside the longer one." },
        { id: "hi-u97l4-visheshagya", type: "vocab", front: "विशेषज्ञ", reading: "visheshagya", meaning: "a specialist", accept: ["an expert in one field", "one who knows one subject deeply", "somebody consulted for special knowledge"], example: { jp: "इस बीमारी का विशेषज्ञ इस शहर में एक ही है।", en: "There is only one specialist in this illness in this city." }, drill: { jp: "इस बीमारी का विशेषज्ञ शहर में एक है", en: "There is one specialist in this illness in the city" }, hint: "VI-SHE-SHA-GYA, masculine, fixed for a woman too. ⚠️ BOTH sh LETTERS, ONE EACH — श in शे and ष after it (§1a) — and it ENDS in ज्ञ, one of unit 6's three stacked conjuncts, reading **gya**, the same letter as in विज्ञान vigyaan (unit 6) and वैज्ञानिक (unit 87). Built on विशेष, special." },
      ],
    },
  ],
};
