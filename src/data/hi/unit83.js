// HI Unit 83 — दफ़्तरी और औपचारिक भाषा ("Official and formal language") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2. Conventions: unit1.js §1–§11, unit31.js §A1–§A8, then §B1–§B7 in
// unit74.js.
//
// 🚨 RETHEMED SLOT (scaffold: "Register 2 — softening and formality"). lint
// hard-errors on that title, and the SOFTENING half had to go, on measurement:
// **block 1's u64 "Hedging and uncertainty" owns softening**, and A2 already
// carded शायद, मुमकिन, लगता, कोशिश, थोड़ा, ज़रा and the polite imperative. A
// second hedging unit three slots from block 1's would have been two seats
// writing the same card.
// WHAT IS LEFT, AND WHAT NO UNIT IN HINDI HAS EVER TOUCHED: **the written and
// official register.** Hindi is diglossic in a way the course had not once
// acknowledged — a newspaper, a court order and a school application use a
// Sanskritic vocabulary that a speaker never says aloud, and a learner who has
// finished 82 units cannot read a government notice. Measured: तथा, अथवा, परंतु,
// किंतु, अतः, यद्यपि, तथापि, अनुसार, विरुद्ध, सहित, अन्यथा, फलस्वरूप — twelve of
// the commonest words in written Hindi, and the corpus had NOT ONE of them.
//
// ═════════════════════════════════════════════════════════════════════════════
// THE DESIGN: l1 AND l2 ARE TWELVE REGISTER TWINS, EACH PAIRED WITH A WORD THE
// LEARNER ALREADY HAS. This is the only way to teach them honestly, because each
// one MEANS the same as a taught word and differs only in register.
// ═════════════════════════════════════════════════════════════════════════════
//     formal        everyday (and where it was taught)
//     तथा           और        (u2l1)
//     अथवा          या        (u22l?)
//     परंतु          लेकिन      (u22l?)
//     किंतु          लेकिन      (u22l?) — the second of the two "but"s
//     अतः           इसलिए      (u22l?)
//     यद्यपि         हालाँकि     (u39l?)
//     अनुसार         मुताबिक     (u79l1, this block)
//     विरुद्ध         खिलाफ      (u79l1, this block)
//     सहित          समेत       (u79l1, this block)
//     अन्यथा         वरना       (u39l?)
//     तथापि          फिर भी     (not carded — named as a gap)
//     फलस्वरूप       नतीजतन     (u79l4, this block)
// 🚨 AND THIS IS WHY unit79.js DELIBERATELY LEFT SIX FRONTS ON THE TABLE. Its
// header records it: taking अनुसार, विरुद्ध, सहित, अन्यथा, तथापि and फलस्वरूप at
// u79 would have left this unit with nothing to contrast. The two units were
// written as a pair and must be read as one.
// ⚠️ EVERY ONE OF THE TWELVE GLOSSES NAMES ITS REGISTER IN WORDS, not in a
// parenthetical, because `normalizeMeaning` (src/store/answer.js) STRIPS
// parentheses: "and (formal)" would normalise to "and" and collide with और's own
// card. unit1.js §9 states the rule and this unit is the largest application of
// it in the language — twelve cards that exist only because the gloss can carry a
// register.
//
// ⚠️ FOUR FRONTS WANTED AND REFUSED:
//   • एवं — a THIRTEENTH formal "and", beside तथा. One formal twin per everyday
//     word is the limit; two would be two prompts a learner cannot tell apart.
//     NAMED FOR A LATER BLOCK.
//   • दस्तावेज़'s obvious gloss, "a document" — कागज़ (u9l4) is "paper" and
//     **ACCEPTS "a document"**. The card is glossed "an official paper that
//     proves something" instead.
//   • अनुरोध — निवेदन holds "a formal submission" and विनती (u82l3) holds "an
//     entreaty". Three request-words is one too many. DROPPED.
//   • TAKEN outright: सूचना (u44, "a notification"), विषय (u34, "a school
//     subject"), क्षमा (u6). **सूचना is the one that hurts** — a notices lesson
//     without the word for a notice.
//   • NAMED FOR A LATER BLOCK, free and unspent: एवं, निर्देश, तत्काल, संबंधित,
//     उपरोक्त, विवरण, शपथ, कार्यालय, प्रेषक, अनुरोध, अनौपचारिक, लंबित, अंततः.
//     ⚠️ **अनौपचारिक is left on purpose**: it is औपचारिक (l4) with unit 81's अन-
//     prefix, so a learner who has both units can build it himself, which is what
//     u81 is for.
//
// GENDER TRAPS THIS UNIT ADDS (§4), and HALF THE UNIT HAS NO GENDER:
//   ⚠️ NO GENDER AT ALL — twelve conjunctions, adverbs and postpositions (तथा,
//   अथवा, परंतु, किंतु, अतः, यद्यपि, अनुसार, विरुद्ध, सहित, अन्यथा, तथापि,
//   फलस्वरूप), plus सादर, which is an ADVERB, and महोदय, which is a form of
//   address. §4 has nothing to attach to; each hint says what the word's class is.
//   ⚠️ FEMININE: अर्जी, स्वीकृति.
//   MASCULINE: आवेदन, दस्तावेज़, हस्ताक्षर, प्रमाणपत्र, पंजीकरण, निवेदन, आदेश.
//   **हस्ताक्षर is MASCULINE and Hindi usually says it in the PLURAL** —
//   हस्ताक्षर किए, "signed" — like होश (unit 57). Named on its card.
//   ADJECTIVE: **औपचारिक is INVARIANT** (unit53's rule).
//
// ⚠️ ONE MARK AND TWO SPELLINGS THAT EARN THEIR HINTS:
//   • **अतः ends in ः, the VISARGA** — the first and only front in Hindi that
//     carries it. It is a light breath after the vowel and the reading writes it
//     **h**: atah. unit1.js §7 names three things deliberately uncarded and the
//     visarga was not among them, because no front had needed it until now.
//   • स्वीकृति carries ृ, ऋ's MĀTRĀ, read **ri** — the fifth sighting in the
//     language after कृपया, दृश्य, प्राकृतिक and समृद्धि.
//   • **तथापि CONTAINS तथा and the match CANNOT FIRE**, because the character
//     after it is प, which IS a letter — `findWholeWord` is blocked by a letter,
//     not by a mātrā. Checked rather than assumed, and the same reason गैरकानूनी
//     ⊃ कानून is safe (unit 81l4). **हस्ताक्षर does NOT contain अक्षर** (u6l4):
//     that front is अ+क+्+ष+र and this word has no अ before its क्षर.
// RETROFLEX/DENTAL (§1b): no new collision. सहित sahit, अन्यथा anyathaa, तथा
// tathaa, तथापि tathaapi, परंतु parantu, किंतु kintu and दस्तावेज़ dastaavez are
// all DENTAL त/थ with no retroflex twin in the corpus. The doubling hatch fires
// nowhere in this unit. GEMINATION: विरुद्ध viruddh doubles the DENTAL द/ध.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT83 = {
  id: "hi-u83",
  lang: "hi",
  title: "दफ़्तरी और औपचारिक भाषा",
  order: 83,
  stage: "b1",
  lessons: [
    {
      id: "hi-u83l1",
      unit: 83,
      lesson: 1,
      title: "The formal twin of a word you already know",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Read a Hindi newspaper sentence: say and, or, but, therefore and although in the written register.",
      items: [
        { id: "hi-u83l1-tathaa", type: "vocab", front: "तथा", reading: "tathaa", meaning: "and, in formal writing", accept: ["and, as a newspaper writes it", "the written-register and"], example: { jp: "आवेदन तथा प्रमाणपत्र दोनों साथ भेजिए।", en: "Send the application and the certificate together." }, drill: { jp: "आवेदन तथा प्रमाणपत्र साथ भेजिए", en: "Send the application and the certificate together" }, hint: "TA-THAA, a CONJUNCTION with no gender, both letters DENTAL. ⚠️ It means exactly what और (unit 2) means, and the gloss says 'in formal writing' IN WORDS because `normalizeMeaning` strips parentheses — 'and (formal)' would normalise to 'and' and answer और's card. Nobody says तथा aloud." },
        { id: "hi-u83l1-athavaa", type: "vocab", front: "अथवा", reading: "athavaa", meaning: "or, in formal writing", accept: ["or, as an official notice writes it", "the written-register or"], example: { jp: "अर्जी अथवा आवेदन दोनों दफ़्तर में जमा होते हैं।", en: "A petition or an application, both are submitted at the office." }, drill: { jp: "अर्जी अथवा आवेदन दफ़्तर में जमा होते हैं", en: "A petition or an application is submitted at the office" }, hint: "A-THA-VAA, a CONJUNCTION, DENTAL थ. The formal twin of या (unit 22). ⚠️ You will meet it on every form in India, offering you two ways to do a thing, and you will never hear it in a shop." },
        { id: "hi-u83l1-parantu", type: "vocab", front: "परंतु", reading: "parantu", meaning: "but, in formal writing", accept: ["but, as a written report puts it", "the written-register but"], example: { jp: "अर्जी समय पर आई परंतु हस्ताक्षर नहीं थे।", en: "The petition came on time but there was no signature." }, drill: { jp: "अर्जी समय पर आई परंतु हस्ताक्षर नहीं थे", en: "The petition came on time but had no signature" }, hint: "PA-RAN-TU, a CONJUNCTION. Its ं sits before DENTAL त, a stop, so §1's homorganic rule still gives n. The formal twin of लेकिन (unit 22) — and किंतु beside it is the SECOND formal 'but', which is why the two glosses had to differ in a word." },
        { id: "hi-u83l1-kintu", type: "vocab", front: "किंतु", reading: "kintu", meaning: "yet, in formal writing", accept: ["and yet, as a written argument puts it", "however, in the written register"], example: { jp: "आदेश आ गया किंतु काम शुरू नहीं हुआ।", en: "The order came, yet the work did not start." }, drill: { jp: "आदेश आ गया किंतु काम शुरू नहीं हुआ", en: "The order came yet the work did not start" }, hint: "KIN-TU, a CONJUNCTION, DENTAL त. ⚠️ परंतु and किंतु are near-identical in use, and they are glossed 'but' and 'yet' so that the two prompts cannot answer each other. In practice किंतु carries a little more contrast — a writer uses it where he is about to object." },
        { id: "hi-u83l1-atah", type: "vocab", front: "अतः", reading: "atah", meaning: "therefore, in formal writing", accept: ["hence, as an official letter concludes", "the written-register therefore"], example: { jp: "दस्तावेज़ पूरे नहीं हैं अतः आवेदन रोका गया।", en: "The documents are not complete, therefore the application has been held up." }, drill: { jp: "दस्तावेज़ पूरे नहीं हैं अतः आवेदन रोका गया", en: "The papers are incomplete, therefore the application was held up" }, hint: "A-TAH, a CONJUNCTION. ⚠️ **IT ENDS IN ः, THE VISARGA — the only front in Hindi that carries it.** It is a light breath after the vowel and the reading writes it **h**: atah. The formal twin of इसलिए (unit 22), and this is the word an official letter uses to reach its point." },
        { id: "hi-u83l1-yadyapi", type: "vocab", front: "यद्यपि", reading: "yadyapi", meaning: "although, in formal writing", accept: ["even though, as a report puts it", "the written-register although"], example: { jp: "यद्यपि पंजीकरण हो गया फिर भी स्वीकृति बाकी है।", en: "Although the registration is done, the approval is still awaited." }, drill: { jp: "यद्यपि पंजीकरण हो गया स्वीकृति बाकी है", en: "Although registration is done, approval is awaited" }, hint: "YAD-YA-PI, a CONJUNCTION. The द्य is DENTAL द and य stacked. The formal twin of हालाँकि (unit 39). ⚠️ Its partner in the second clause is तथापि (l2) in the highest register and फिर भी in ordinary writing." },
      ],
    },
    {
      id: "hi-u83l2",
      unit: 83,
      lesson: 2,
      title: "Six more formal twins",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say according to, against, including, otherwise, nevertheless and as a consequence in the written register.",
      items: [
        { id: "hi-u83l2-anusaar", type: "vocab", front: "अनुसार", reading: "anusaar", meaning: "according to, in formal writing", accept: ["as laid down by, in an official text", "the written-register according to"], example: { jp: "नियम के अनुसार हर आवेदन की जाँच होती है।", en: "According to the rule every application is examined." }, drill: { jp: "नियम के अनुसार हर आवेदन की जाँच होती है", en: "According to the rule every application is examined" }, hint: "A-NU-SAAR, a POSTPOSITION with no gender, and like मुताबिक (unit 79) it takes के. ⚠️ Same meaning, different register: a form says नियम के अनुसार and a shopkeeper says नियम के मुताबिक. Hindi runs two vocabularies side by side and this lesson is twelve pairs of them." },
        { id: "hi-u83l2-viruddh", type: "vocab", front: "विरुद्ध", reading: "viruddh", meaning: "against, in formal writing", accept: ["in opposition to, as a court writes it", "the written-register against"], example: { jp: "यह आदेश कानून के विरुद्ध है।", en: "This order is against the law." }, drill: { jp: "यह आदेश कानून के विरुद्ध है", en: "This order is against the law" }, hint: "VI-RUDDH, a POSTPOSITION taking के, like खिलाफ (unit 79). The द्ध is DENTAL द and ध stacked and doubled — say it as one heavy consonant. ⚠️ A Hindi court writes विरुद्ध and a Hindi speaker says खिलाफ; a newspaper headline will use either." },
        { id: "hi-u83l2-sahit", type: "vocab", front: "सहित", reading: "sahit", meaning: "including, in formal writing", accept: ["together with, as an official list puts it", "the written-register including"], example: { jp: "सभी दस्तावेज़ सहित अर्जी जमा करें।", en: "Submit the petition including all documents." }, drill: { jp: "सभी दस्तावेज़ सहित अर्जी जमा करें", en: "Submit the petition with all documents" }, hint: "SA-HIT, a POSTPOSITION, DENTAL त. ⚠️ Like समेत (unit 79) it takes NOTHING and FOLLOWS its noun: दस्तावेज़ सहित. Same position, same meaning, different register — and this is the pair where the two words are closest in shape as well." },
        { id: "hi-u83l2-anyathaa", type: "vocab", front: "अन्यथा", reading: "anyathaa", meaning: "otherwise, in formal writing", accept: ["failing which, as a notice warns", "the written-register otherwise"], example: { jp: "समय पर आवेदन भेजिए अन्यथा अर्जी वापस होगी।", en: "Send the application on time, otherwise the petition will come back." }, drill: { jp: "समय पर आवेदन भेजिए अन्यथा अर्जी वापस होगी", en: "Send the application on time, otherwise the petition goes back" }, hint: "AN-YA-THAA, a CONJUNCTION, DENTAL थ. The न्य is न and य stacked, as in न्योता (unit 82). The formal twin of वरना (unit 39). ⚠️ This is the word on every Indian official warning: do X अन्यथा Y will happen." },
        { id: "hi-u83l2-tathaapi", type: "vocab", front: "तथापि", reading: "tathaapi", meaning: "nevertheless", accept: ["even so, in the written register", "and in spite of that"], example: { jp: "स्वीकृति मिल गई तथापि काम रुका रहा।", en: "The approval came; nevertheless the work stayed stopped." }, drill: { jp: "स्वीकृति मिल गई तथापि काम रुका रहा", en: "Approval came; nevertheless the work stayed stopped" }, hint: "TA-THAA-PI, a CONJUNCTION, both DENTAL. ⚠️ It CONTAINS तथा (l1) and the match CANNOT fire, because the letter after it is प — `findWholeWord` is blocked by a letter, not by a mātrā. Its everyday twin फिर भी is not carded anywhere in Hindi; that is a named gap." },
        { id: "hi-u83l2-phalsvaruup", type: "vocab", front: "फलस्वरूप", reading: "phalsvaruup", meaning: "as a consequence", accept: ["in consequence, in the written register", "with the result, as a report puts it"], example: { jp: "बारिश कम हुई फलस्वरूप उत्पादन घट गया।", en: "There was less rain; as a consequence production fell." }, drill: { jp: "बारिश कम हुई फलस्वरूप उत्पादन घट गया", en: "There was less rain; as a consequence production fell" }, hint: "PHAL-SVA-RUUP, a CONJUNCTION. ph is one puff of air, not f. फल (a fruit, a result) plus स्वरूप (a form) — 'in the shape of the result'. The formal twin of नतीजतन (unit 79), and the longest connective in the language." },
      ],
    },
    {
      id: "hi-u83l3",
      unit: 83,
      lesson: 3,
      title: "The language of a form",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Fill in an Indian form: name an application, a petition, an official paper, a signature, a certificate and registration.",
      items: [
        { id: "hi-u83l3-aavedan", type: "vocab", front: "आवेदन", reading: "aavedan", meaning: "an application", accept: ["a formal request made on paper", "an applying for something"], example: { jp: "नौकरी के लिए आवेदन भेजना पड़ता है।", en: "An application has to be sent for the job." }, drill: { jp: "नौकरी के लिए आवेदन भेजना पड़ता है", en: "An application has to be sent for the job" }, hint: "AA-VE-DAN, masculine, consonant-final, DENTAL द: दो आवेदन. ⚠️ The word on every Indian form. आवेदन करना is to apply and आवेदक is the applicant, which this course does not card — job-title nouns belong elsewhere." },
        { id: "hi-u83l3-arjii", type: "vocab", front: "अर्जी", reading: "arjii", meaning: "a petition", accept: ["a written plea to an office", "a letter asking for a decision"], example: { jp: "उसने पानी की शिकायत की अर्जी दी।", en: "He put in a petition complaining about the water." }, drill: { jp: "उसने दफ़्तर में अर्जी दी", en: "He put in a petition at the office" }, hint: "AR-JII — ⚠️ FEMININE: अर्जी दी, not दिया. The र् is र with a halant, drawn as the hook over the ज. ⚠️ Not आवेदन, which is the FORM you fill in: an अर्जी is a letter you write yourself, and अर्जी देना is to lodge it." },
        { id: "hi-u83l3-dastaavez", type: "vocab", front: "दस्तावेज़", reading: "dastaavez", meaning: "an official paper that proves something", accept: ["a title deed or record", "papers that establish a claim"], example: { jp: "ज़मीन के दस्तावेज़ बैंक में रखे हैं।", en: "The land papers are kept in the bank." }, drill: { jp: "ज़मीन के दस्तावेज़ बैंक में रखे हैं", en: "The land papers are kept in the bank" }, hint: "DAS-TAA-VEZ, masculine, consonant-final, DENTAL द and त, ending in ज़ — a z. ⚠️ Glossed the long way because कागज़ (unit 9) is 'paper' and **ACCEPTS 'a document'**. A कागज़ is any sheet; a दस्तावेज़ proves a thing." },
        { id: "hi-u83l3-hastaakshar", type: "vocab", front: "हस्ताक्षर", reading: "hastaakshar", meaning: "a signature", accept: ["one's name written to agree", "the signing of a paper"], example: { jp: "हर दस्तावेज़ पर हस्ताक्षर ज़रूरी हैं।", en: "A signature is essential on every document." }, drill: { jp: "हर दस्तावेज़ पर हस्ताक्षर ज़रूरी हैं", en: "A signature is essential on every document" }, hint: "HAS-TAA-KSHAR — ⚠️ MASCULINE, and Hindi usually says it in the PLURAL: हस्ताक्षर ज़रूरी हैं, हस्ताक्षर किए — like होश (unit 57). हस्त (a hand) plus अक्षर (a letter, unit 6); the क्ष conjunct is one of unit 6's three. ⚠️ It does NOT contain the front अक्षर — checked: that word is अ+क+्+ष+र and this has no अ there." },
        { id: "hi-u83l3-pramaanpatra", type: "vocab", front: "प्रमाणपत्र", reading: "pramaanpatra", meaning: "a certificate", accept: ["an official paper that certifies a fact", "a testimonial issued by an authority"], example: { jp: "स्कूल का प्रमाणपत्र साथ लाना है।", en: "The school certificate has to be brought along." }, drill: { jp: "स्कूल का प्रमाणपत्र साथ लाना है", en: "The school certificate must be brought" }, hint: "PRA-MAAN-PA-TRA, masculine, consonant-final. प्रमाण (proof) plus पत्र (a letter) — and the त्र is one of unit 6's three conjuncts, said tra in one breath. The ण is RETROFLEX and merges to n (§1b). You will be asked for one of these constantly in India." },
        { id: "hi-u83l3-panjiikaran", type: "vocab", front: "पंजीकरण", reading: "panjiikaran", meaning: "registration", accept: ["being entered on an official list", "the recording of a thing with an authority"], example: { jp: "ज़मीन का पंजीकरण अदालत में होता है।", en: "Registration of land is done at the court." }, drill: { jp: "ज़मीन का पंजीकरण अदालत में होता है", en: "Land registration is done at the court" }, hint: "PAN-JII-KA-RAN, masculine. Its ं sits before ज, a stop, so §1's homorganic rule gives n; the final ण is retroflex and also n. From पंजी, a register. ⚠️ The spoken word is रजिस्ट्री, which this course does not card — this unit is deliberately the written one." },
      ],
    },
    {
      id: "hi-u83l4",
      unit: 83,
      lesson: 4,
      title: "Writing to the office, and what it writes back",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Open and close a formal Hindi letter, make a formal submission, and talk about an order, an approval, and what counts as formal.",
      items: [
        { id: "hi-u83l4-mahoday", type: "vocab", front: "महोदय", reading: "mahoday", meaning: "the salutation at the top of a formal letter", accept: ["Dear Sir, as a Hindi letter opens", "the formal written address to a man"], example: { jp: "महोदय मेरा निवेदन यह है।", en: "Dear Sir, my submission is as follows." }, drill: { jp: "महोदय मेरा निवेदन यह है", en: "Dear Sir, my submission is as follows" }, hint: "MA-HO-DAY, masculine, a FORM OF ADDRESS rather than an ordinary noun, DENTAL द. ⚠️ Glossed the long way because श्री (unit 7) is 'Mr' and जी accepts 'sir'. महोदय is WRITTEN, at the head of a letter, and never said aloud; महोदया is the feminine." },
        { id: "hi-u83l4-saadar", type: "vocab", front: "सादर", reading: "saadar", meaning: "yours respectfully", accept: ["respectfully, as a letter signs off", "with respect, in writing"], example: { jp: "अर्जी के अंत में सादर लिखा जाता है।", en: "At the end of a petition 'yours respectfully' is written." }, drill: { jp: "अर्जी के अंत में सादर लिखा जाता है", en: "At the end of a petition 'respectfully' is written" }, hint: "SAA-DAR, an ADVERB with no gender, DENTAL द. Built on आदर (unit 82) with the स- prefix: 'with deference'. ⚠️ It is the Hindi bottom-of-the-letter word, exactly where English puts 'Yours sincerely', and the example's लिखा जाता है is unit 80's passive." },
        { id: "hi-u83l4-nivedan", type: "vocab", front: "निवेदन", reading: "nivedan", meaning: "a formal submission", accept: ["a request put in writing to an authority", "what one respectfully puts forward"], example: { jp: "मेरा निवेदन है कि अर्जी फिर से देखी जाए।", en: "My submission is that the petition be looked at again." }, drill: { jp: "मेरा निवेदन है कि अर्जी फिर देखी जाए", en: "My submission is that the petition be looked at again" }, hint: "NI-VE-DAN, masculine, consonant-final, DENTAL द. ⚠️ Not विनती (unit 82), an entreaty made to a person: a निवेदन is made in writing to an office. Its frame is निवेदन है कि…, and the verb after कि goes SUBJUNCTIVE PASSIVE — देखी जाए." },
        { id: "hi-u83l4-aadesh", type: "vocab", front: "आदेश", reading: "aadesh", meaning: "an official order", accept: ["an instruction issued by an authority", "a directive"], example: { jp: "सरकार का आदेश कल अखबार में छापा गया।", en: "The government's order was printed in the paper yesterday." }, drill: { jp: "सरकार का आदेश कल अखबार में छापा गया", en: "The government's order was printed in the paper yesterday" }, hint: "AA-DESH, masculine, consonant-final, DENTAL द: दो आदेश. ⚠️ Not फ़ैसला (unit 30), which is 'a decision' and accepts 'a ruling' — a फ़ैसला is reached, an आदेश is ISSUED and somebody must obey it. आदेश देना, आदेश मानना." },
        { id: "hi-u83l4-sviikriti", type: "vocab", front: "स्वीकृति", reading: "sviikriti", meaning: "approval", accept: ["the official saying-yes", "sanction given by an authority"], example: { jp: "आदेश के बिना स्वीकृति नहीं मिलती।", en: "Approval is not given without an order." }, drill: { jp: "आवेदन की स्वीकृति अभी नहीं मिली", en: "Approval of the application has not yet come" }, hint: "SVII-KRI-TI — ⚠️ FEMININE. It carries ृ, ऋ's MĀTRĀ, read **ri** — the fifth sighting after कृपया, दृश्य, प्राकृतिक and समृद्धि. The स्व is स and व stacked. Not इजाज़त (unit 32), which is personal permission: स्वीकृति is an office's." },
        { id: "hi-u83l4-aupchaarik", type: "vocab", front: "औपचारिक", reading: "aupchaarik", meaning: "formal", accept: ["done according to form", "official in manner"], example: { jp: "उसकी भाषा पूरी तरह औपचारिक थी।", en: "His language was wholly formal." }, drill: { jp: "उसकी भाषा पूरी तरह औपचारिक थी", en: "His language was wholly formal" }, hint: "AUP-CHAA-RIK — ⚠️ INVARIANT (unit53's rule): औपचारिक भाषा, औपचारिक चिट्ठी. The au is औ's open vowel (unit 2), with the INDEPENDENT letter because it starts the word. ⚠️ अनौपचारिक, 'informal', is deliberately NOT carded: it is this word with unit 81's अन- prefix, and building it is the point of that unit." },
      ],
    },
  ],
};
