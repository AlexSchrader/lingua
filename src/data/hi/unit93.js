// HI Unit 93 — दस्तावेज़ और रिकॉर्ड ("Documents and records") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 3 (u87–u97). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 10 (B1)"). Theme ASSIGNED CENTRALLY;
// probed at **1 of 16 taken** against all 1,382 non-glyph hi fronts, 2026-10-05.
//
// MEASURED HOLE: A2 taught the OBJECTS of paperwork — फ़ाइल, रजिस्टर, अर्ज़ी,
// दस्तखत (u34), बिल, रसीद (u37), चिट्ठी, पता (u28), लिफ़ाफ़ा, डाक, मोहर, स्याही,
// छपाई (u44) — and left the learner unable to name a document, a certificate, an
// identity card, a form, a copy, a contract, a signature on one, a register, an
// archive or an official order. Every A2 word above is USED here and none re-taught.
//
// 🚨 रिकॉर्ड IS IN THE TITLE AND IS **NOT** A CARD, and the reason is §9, not taste.
// `checkProduce` accepts the romaji READING for any Hindi vocab item (verified in
// src/store/answer.js — an exact match after `normalizeReading`, no fuzziness), so
// a loanword whose gloss IS its own English word hands the learner the answer off
// the prompt. **फ़ॉर्म WAS REFUSED ON EXACTLY THAT TEST AND IT IS THE CLEAN CASE:
// reading "form", gloss "a form" → `normalizeMeaning` gives "form", the strings
// are IDENTICAL, free pass.** प्रपत्र, the official Hindi for a form, is carded
// instead, and it keeps the -पत्र family of l1 consistent. u60 refused प्लास्टिक
// on the same grounds and u9's twenty-four loanwords were each checked this way.
// ⚠️ नोटिस WAS ALSO DROPPED, on the softer version of the same ground — "notice"
// against reading "notis" is one character apart, so it is not a free pass by the
// letter of the test, but आदेश is a native word that teaches more.
//
// ⚠️ FOUR FRONTS WERE PLANNED AND REFUSED BECAUSE THE GRADER WOULD HAVE MERGED
// THEM WITH A TAUGHT CARD. `normalizeMeaning` strips a leading a/an/the AND a
// leading "to ", so these are one string, not two:
//   • तिथि — तारीख (u17l1) is "a date". · ठप्पा — मोहर (u44l4) is "a rubber stamp".
//   • अनुलिपि — this unit's own प्रति is "a copy of a document".
//   • ब्यौरा — this unit's own विवरण is "a written description".
//   THREE MORE SURVIVED ONLY BY QUALIFYING THE GLOSS, and each hint says why:
//   हस्ताक्षर "a formal signature" (दस्तखत u34l4 owns "a signature") · शपथ "a sworn
//   oath" (कसम u48l2 owns "an oath") · अनुबंध "a written contract".
// ⚠️ AND आवेदन IS u92l2's, NOT THIS UNIT'S — one home each. It is used here.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: प्रति, शपथ, बही, सूची, पावती.
//   🚨 **शपथ IS CONSONANT-FINAL FEMININE** — शपथ ली, not लिया — and nothing in the
//   shape says so, which makes it the likeliest in the unit to be got wrong.
//   ⚠️ **प्रति HAS TWO SHORT VOWELS** — prati, never pratii.
//   MASCULINE: दस्तावेज़, प्रमाणपत्र, पहचानपत्र, प्रपत्र, परिपत्र, हस्ताक्षर, अनुबंध,
//   अनुमोदन, सत्यापन, पंजीकरण, अभिलेख, क्रमांक, संशोधन, विवरण, चालान.
//   ⚠️ **हस्ताक्षर IS PLURAL IN FORM EVEN FOR ONE SIGNATURE** — हस्ताक्षर हैं.
//   ⚠️ **FOUR ADJECTIVES, ALL CONSONANT-FINAL, ALL INVARIABLE**: खारिज, दर्ज,
//   सार्वजनिक, संलग्न — सार्वजनिक सूची AND सार्वजनिक कागज़, with no -ी form (§6).
//   खारिज and दर्ज live almost only in the frames खारिज करना and दर्ज करना/होना.
//   No verb is carded in this unit.
//
// ⚠️ FOUR CARDS LEFT THIS UNIT IN THE B1 CROSS-BLOCK DEDUPE (2026-10-06), and
// **all four went to EARLIER block-1 slots, so all four are still in scope here**
// and no u93 sentence needed rewriting — सार्वजनिक's example still uses गोपनीय and
// परिपत्र's hint still points at आदेश:
//   मूल     → u62 कारण और नतीजा ("the root cause", reading mool — a different
//            sense AND a different reading from the muul this unit had, which is
//            why the pair also broke the one-reading-per-front invariant)
//   आदेश    → u71 नियम और पाबंदी   ·  टिप्पणी → u61 राय और सहमति
//   गोपनीय  → u65 खबर कहाँ से आई
//   परिपत्र, पावती, संशोधन and सार्वजनिक replaced them.
// ⚠️ **THIS UNIT IS WHERE SIX OF u83's DOCUMENT NOUNS NOW LIVE ALONE** — दस्तावेज़,
// प्रमाणपत्र, हस्ताक्षर, पंजीकरण, शपथ and अनुबंध. §B9 allocated the documents field
// here, so u83 दफ़्तरी और औपचारिक भाषा gave them up and rebuilt its l3 as the
// register-adjective lesson. **None of the six may appear in a sentence before
// u93 any more**, and u83's and u84's sentences were rewritten off them.
//
// ⚠️ SUBSTRING TRAPS, CHECKED AGAINST `findWholeWord`'s REAL BOUNDARY TEST.
// 🚨 THE दर्ज SET IS THE RICHEST IN THE LANGUAGE — THREE TAUGHT WORDS CONTAIN THIS
// ONE FRONT AND EXACTLY TWO CAN BE MATCHED:
//   • दर्जा (u48l3, a rank) ⊃ दर्ज — **FIRES**, the ा after it is \p{M}.
//   • दर्जी (u40l3, a tailor) ⊃ दर्ज — **FIRES**, the ी after it is \p{M}.
//   • दर्जन (u40l4, a dozen) ⊃ दर्ज — **CANNOT**, the न after it is a letter.
//   And all four readings are distinct: darj · darjaa · darjii · darjan.
// TWO MORE FIRE:
//   • सत्यापन ⊃ सत्य (u90l3) — the ा after it is \p{M}. Recorded in u90 too.
//   • अभिलेख ⊃ लेख (u44l2, an article) — the ि before it is \p{M}. Unrelated words.
// AND FOUR CANNOT, each checked rather than assumed:
//   • आदेश ⊃ देश (u8l2) — आ precedes, and आ IS a letter. Same as उपदेश (u90l2).
//   • प्रतिनिधि (u88l2) ⊃ प्रति — न follows. · क्रमांक vs अंक (u34l2) — NOT a
//     substring, अंक's independent अ has become the mātrā ा.
//   • हस्ताक्षर vs अक्षर (u6l1) — NOT a substring, same reason.
//   • पहचानपत्र vs पहचानना (u26l2) — NOT a substring, the verb's -ना is gone.
//   THE RULE APPLIED: no drill in this unit contains any of the words above.
//
// RETROFLEX/DENTAL (§1b): टिप्पणी tippanii is RETROFLEX (ट and ण) with no dental
// twin; दस्तावेज़, शपथ shapath, अनुबंध, सत्यापन, प्रति and मूल are DENTAL.
// 24 new readings, 24 distinct, zero collisions against all 1,382.
// ⚠️ THREE READING PAIRS ARE ONE MĀTRĀ APART and each is named in its own hint:
// बही bahii vs बहू bahuu (u59l3) · प्रति prati vs प्रतीक pratiik (u68l4) ·
// सूची suuchii vs सूचना suuchnaa (u44l1).
// LOANWORD FREE-PASS CHECK (§9): zero loanwords carded. Zero free passes, and the
// one that was refused is named above with the measurement that refused it.
// DEFERRED FOR SPACE AT 24, named so a later seat finds a decision: वसीयत is TAKEN
// (u59l4), पर्ची is TAKEN (u35l1) · शुल्क went to u97l2 · छाप, नकल, मुहर, परिपत्र.
export const HI_UNIT93 = {
  id: "hi-u93",
  lang: "hi",
  title: "दस्तावेज़ और रिकॉर्ड",
  order: 93,
  stage: "b1",
  lessons: [
    {
      id: "hi-u93l1",
      unit: 93,
      lesson: 1,
      title: "The document itself",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that a lawyer put every document in the file, that a certificate and an identity card were shown, that a form was filled in and submitted, and name a copy and a circular.",
      items: [
        { id: "hi-u93l1-dastaavez", type: "vocab", front: "दस्तावेज़", reading: "dastaavez", meaning: "an official document", accept: ["a document", "an official paper", "a record on paper"], example: { jp: "वकील ने हर दस्तावेज़ फ़ाइल में रखा।", en: "The lawyer put every document in the file." }, drill: { jp: "यह दस्तावेज़ बहुत पुराना है", en: "This document is very old" }, hint: "DAS-TAA-VEZ, masculine and consonant-final, so the plural is the bare form: दो दस्तावेज़. ज़ is the z of unit 4, so vez and never vej. ⚠️ Built on दस्त, a hand — the SAME दस्त as दस्तखत, a signature (unit 34): a दस्तावेज़ is a thing put in writing by hand." },
        { id: "hi-u93l1-pramaanpatra", type: "vocab", front: "प्रमाणपत्र", reading: "pramaanpatra", meaning: "a certificate", accept: ["a paper proving a fact"], example: { jp: "नौकरी के लिए उसने अपना प्रमाणपत्र दिखाया।", en: "He showed his certificate for the job." }, drill: { jp: "नौकरी के लिए उसने प्रमाणपत्र दिखाया", en: "He showed his certificate for the job" }, hint: "PRA-MAAN-PA-TRA, masculine, and the final त्र **KEEPS ITS OWN a** — patra, like छात्र chhaatra (unit 6). Two halves: प्रमाण, proof, plus पत्र, a paper. ⚠️ Not डिग्री (unit 34): a डिग्री is what a university gives, a प्रमाणपत्र any paper that proves a fact — a birth, a school year, a clean bill of health." },
        { id: "hi-u93l1-pahchaanpatra", type: "vocab", front: "पहचानपत्र", reading: "pahchaanpatra", meaning: "an identity card", accept: ["an ID card"], example: { jp: "बैंक में हर काम के लिए पहचानपत्र ज़रूरी है।", en: "At the bank an identity card is necessary for every piece of business." }, drill: { jp: "बैंक में पहचानपत्र ज़रूरी है", en: "An identity card is necessary at the bank" }, hint: "PAH-CHAAN-PA-TRA, masculine. Built on पहचानना, to recognise (unit 26), plus पत्र — the paper that says who you are. ⚠️ पहचानना is NOT a string inside it, because the verb's -ना is gone, so the router cannot confuse the two cards. The second -पत्र of three in this lesson." },
        { id: "hi-u93l1-prapatra", type: "vocab", front: "प्रपत्र", reading: "prapatra", meaning: "a form to fill in", accept: ["a blank official form"], example: { jp: "उसने प्रपत्र भरा और दफ़्तर में जमा किया।", en: "He filled in the form and submitted it at the office." }, drill: { jp: "उसने प्रपत्र भरा और जमा किया", en: "He filled in the form and submitted it" }, hint: "PRA-PA-TRA, masculine, final त्र keeps its a. प्र, forth, plus पत्र, a paper — the third -पत्र in this lesson. 🚨 THIS IS CARDED INSTEAD OF THE LOANWORD फ़ॉर्म for a mechanical reason: फ़ॉर्म's reading IS \"form\", which is its own gloss, so §9 would let a learner answer by reading the prompt aloud." },
        { id: "hi-u93l1-prati", type: "vocab", front: "प्रति", reading: "prati", meaning: "a copy of a document", accept: ["a duplicate", "a photocopy"], example: { jp: "अदालत ने हर गवाह को एक प्रति दी।", en: "The court gave every witness a copy." }, drill: { jp: "उसने एक प्रति माँगी", en: "He asked for a copy" }, hint: "PRA-TI — ⚠️ FEMININE, and ⚠️ BOTH VOWELS ARE SHORT: prati, never pratii. ⚠️ Read it against प्रतीक pratiik, a symbol (unit 68), where the second vowel is LONG — and प्रतिनिधि (unit 88) contains this exact string, but the न that follows there is a letter, so the router cannot match it." },
        { id: "hi-u93l1-paripatra", type: "vocab", front: "परिपत्र", reading: "paripatra", meaning: "a circular sent round an office", accept: ["a notice copied to everybody", "one paper issued to every branch at once"], example: { jp: "यह परिपत्र हर दफ़्तर में भेजा गया।", en: "This circular was sent to every office." }, drill: { jp: "यह परिपत्र हर दफ़्तर में भेजा गया", en: "This circular was sent to every office" }, hint: "PA-RI-PA-TRA, masculine, consonant-final: दो परिपत्र. परि- (around) plus पत्र (a letter), and the त्र is one of unit 6's three conjuncts, said tra in one breath — so this is the FOURTH -पत्र front in the lesson, after प्रमाणपत्र, पहचानपत्र and प्रपत्र. ⚠️ Not आदेश (unit 71), which tells you to DO something: a परिपत्र only tells you that a thing is now the case, and one copy goes to every office at once." },
      ],
    },
    {
      id: "hi-u93l2",
      unit: 93,
      lesson: 2,
      title: "Signing, swearing and approving",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that a signature was on every page, that a minister will take an oath, that two companies made a contract, and that a case was thrown out while a committee's approval came through after verification.",
      items: [
        { id: "hi-u93l2-hastaakshar", type: "vocab", front: "हस्ताक्षर", reading: "hastaakshar", meaning: "a formal signature", accept: ["a signature on an official paper"], example: { jp: "हर पन्ने पर उसके हस्ताक्षर थे।", en: "His signature was on every page." }, drill: { jp: "यहाँ अपने हस्ताक्षर करो", en: "Put your signature here" }, hint: "HAS-TAAK-SHAR, masculine, and ⚠️ PLURAL IN FORM EVEN FOR ONE SIGNATURE: हस्ताक्षर हैं. स्त is a stacked conjunct and क्ष another (both unit 6). ⚠️ The gloss says \"formal\" because the grader strips a/an/the and दस्तखत (unit 34) already owns \"a signature\" — and the register IS the difference: दस्तखत on a parcel, हस्ताक्षर on a contract." },
        { id: "hi-u93l2-shapath", type: "vocab", front: "शपथ", reading: "shapath", meaning: "a sworn oath", accept: ["an oath taken in public", "a formal pledge"], example: { jp: "नया मंत्री आज शपथ लेगा।", en: "The new minister will take the oath today." }, drill: { jp: "उसने अदालत में शपथ ली", en: "He took the oath in court" }, hint: "SHA-PATH — 🚨 FEMININE **AND CONSONANT-FINAL**, so nothing in the shape says so: शपथ ली, not लिया — the likeliest word in this unit to be got wrong. DENTAL थ with a puff of air. ⚠️ A कसम (unit 48) is private, between you and whoever you swear by; a शपथ is public and official, which is why a मंत्री takes one." },
        { id: "hi-u93l2-anubandh", type: "vocab", front: "अनुबंध", reading: "anubandh", meaning: "a written contract", accept: ["a signed agreement"], example: { jp: "दोनों कंपनियों ने दो साल का अनुबंध किया।", en: "The two companies made a two-year contract." }, drill: { jp: "यह अनुबंध दो साल का है", en: "This contract is for two years" }, hint: "A-NU-BANDH, masculine. The ं before ध is the matching dental nasal and ध carries a puff of air — and the बंध half is from बाँधना, to tie (unit 20), the same root as गठबंधन (unit 88). ⚠️ THREE WORDS, THREE THINGS: a सौदा (unit 37) is a deal struck, a समझौता (unit 89) a dispute settled, an अनुबंध the paper both sides sign." },
        { id: "hi-u93l2-khaarij", type: "vocab", front: "खारिज", reading: "khaarij", meaning: "thrown out as invalid", accept: ["rejected by an authority", "dismissed"], example: { jp: "अदालत ने उसका मुकदमा खारिज कर दिया।", en: "The court threw out his case." }, drill: { jp: "अदालत ने उसका मुकदमा खारिज किया", en: "The court threw out his case" }, hint: "KHAA-RIJ, an ADJECTIVE living almost only in the frame खारिज करना, to reject. ख carries a puff of air and the ज is PLAIN, not the ज़ of दस्तावेज़ (l1). ⚠️ Not इनकार (unit 30): इनकार is a person saying no, खारिज is an authority ruling the thing out. Its opposite in this lesson is अनुमोदन." },
        { id: "hi-u93l2-anumodan", type: "vocab", front: "अनुमोदन", reading: "anumodan", meaning: "official approval", accept: ["formal endorsement", "approval by a body"], example: { jp: "समिति के अनुमोदन के बाद ही पैसा मिलेगा।", en: "The money will come only after the committee's approval." }, drill: { jp: "समिति के अनुमोदन के बाद पैसा मिलेगा", en: "The money will come after the committee's approval" }, hint: "A-NU-MO-DAN, masculine and consonant-final. ⚠️ THREE WORDS, THREE THINGS: मंज़ूर (unit 30) is an adjective meaning acceptable, इजाज़त (unit 32) is permission to DO something, अनुमोदन is a body formally agreeing to a paper. Its opposite is खारिज." },
        { id: "hi-u93l2-satyaapan", type: "vocab", front: "सत्यापन", reading: "satyaapan", meaning: "verification", accept: ["checking that a paper is genuine"], example: { jp: "दस्तावेज़ का सत्यापन दो हफ़्ते में हुआ।", en: "Verification of the document took two weeks." }, drill: { jp: "सत्यापन के बाद काम हुआ", en: "The work was done after verification" }, hint: "SAT-YAA-PAN, masculine. 🚨 BUILT ON सत्य, truthfulness (unit 90), AND सत्य IS A STRICT PREFIX OF IT — the ा that follows is a mātrā, not a letter, so the router really can match सत्य inside it; neither word's drill contains the other. ⚠️ Checking that a PAPER says what it claims, where a जाँच (unit 35) is a test of a thing." },
      ],
    },
    {
      id: "hi-u93l3",
      unit: 93,
      lesson: 3,
      title: "The register and the record",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that a car's registration happens every five years, that old archives are kept in a room, that a shopkeeper writes every loan in his ledger, and ask someone to write their serial number on a list or have a complaint entered.",
      items: [
        { id: "hi-u93l3-panjiikaran", type: "vocab", front: "पंजीकरण", reading: "panjiikaran", meaning: "registration", accept: ["being entered in an official register"], example: { jp: "गाड़ी का पंजीकरण हर पाँच साल में होता है।", en: "A car's registration is done every five years." }, drill: { jp: "गाड़ी का पंजीकरण पाँच साल में होता है", en: "A car's registration is done in five years" }, hint: "PAN-JII-KA-RAN, masculine. The ं before ज is the matching nasal, and the final ण is the RETROFLEX n — tongue curled back, written plain n in a word reading (§1b). ⚠️ Not रजिस्टर (unit 34), which is the BOOK; पंजीकरण is the act of getting written into one, and पंजी is the Hindi for that book." },
        { id: "hi-u93l3-abhilekh", type: "vocab", front: "अभिलेख", reading: "abhilekh", meaning: "an archive", accept: ["old records kept on file"], example: { jp: "पुराने अभिलेख इस कमरे में रखे हैं।", en: "The old archives are kept in this room." }, drill: { jp: "ये अभिलेख बहुत पुराने हैं", en: "These archives are very old" }, hint: "A-BHI-LEKH, masculine, भ with a puff of air. ⚠️ लेख, an article (unit 44), IS A STRING INSIDE IT and the ि before it is a mātrā, not a letter, so the router CAN match it — the two words are unrelated in meaning. Records kept because they are OLD, not because anyone still needs them." },
        { id: "hi-u93l3-bahii", type: "vocab", front: "बही", reading: "bahii", meaning: "a hand-written account book", accept: ["a ledger", "an account book"], example: { jp: "दुकानदार अपनी बही में हर उधार लिखता है।", en: "The shopkeeper writes every loan in his ledger." }, drill: { jp: "उसकी बही मेज़ पर है", en: "His ledger is on the table" }, hint: "BA-HII — ⚠️ FEMININE. 🚨 READ IT AGAINST बहू bahuu, a daughter-in-law (unit 59) — the same two letters with only the final mātrā between them, ii against uu — and also against बहन bahan (unit 10) and बहुत bahut. The account book a दुकानदार (unit 18) actually keeps, in his own hand." },
        { id: "hi-u93l3-suuchii", type: "vocab", front: "सूची", reading: "suuchii", meaning: "a list", accept: ["an itemised list", "an index"], example: { jp: "दफ़्तर ने हर नाम की सूची बनाई।", en: "The office made a list of every name." }, drill: { jp: "यह सूची बहुत लंबी है", en: "This list is very long" }, hint: "SUU-CHII — ⚠️ FEMININE. ⚠️ Read it against सूचना suuchnaa, a notification (unit 44) — the same first half, a different ending, and the two ARE related: a सूची tells you what there IS, a सूचना tells you what has HAPPENED." },
        { id: "hi-u93l3-kramaank", type: "vocab", front: "क्रमांक", reading: "kramaank", meaning: "a serial number", accept: ["a reference number", "an item number"], example: { jp: "हर प्रपत्र पर अपना क्रमांक लिखो।", en: "Write your serial number on every form." }, drill: { jp: "उसका क्रमांक दस है", en: "His serial number is ten" }, hint: "KRA-MAANK, masculine. क्र is a stacked conjunct (unit 6) and the ं before क is the matching nasal. Two halves: क्रम, order, plus अंक, a mark (unit 34) — ⚠️ and अंक is **NOT** a string inside it, because its independent अ has become the mātrā ा. Not संख्या (unit 11), which is any number at all." },
        { id: "hi-u93l3-darj", type: "vocab", front: "दर्ज", reading: "darj", meaning: "entered in a register", accept: ["put on record", "logged"], example: { jp: "पुलिस ने उसकी शिकायत दर्ज की।", en: "The police entered his complaint on record." }, drill: { jp: "उसका नाम दर्ज हो गया", en: "His name was entered on record" }, hint: "DARJ, an ADJECTIVE living almost only in दर्ज करना and दर्ज होना. The र् is a half र (unit 6). 🚨 THREE TAUGHT WORDS CONTAIN IT AND EXACTLY TWO CAN BE MATCHED: दर्जा, a rank (unit 48), and दर्जी, a tailor (unit 40), both end in a mātrā so the router CAN — but दर्जन, a dozen (unit 40), ends in a LETTER and cannot." },
      ],
    },
    {
      id: "hi-u93l4",
      unit: 93,
      lesson: 4,
      title: "Orders, comments and what is attached",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say that a full description must go with an application, that a payment slip was issued and two certificates are attached — then take the acknowledgement for a paper you hand in, record a small amendment to a rule, and say that a list is public rather than confidential.",
      items: [
        { id: "hi-u93l4-paavtii", type: "vocab", front: "पावती", reading: "paavtii", meaning: "an acknowledgement an office hands back", accept: ["the slip proving a paper was received", "a receipt for a submission"], example: { jp: "अर्ज़ी जमा करने पर पावती मिलती है।", en: "An acknowledgement is given when the petition is submitted." }, drill: { jp: "अर्ज़ी जमा करने पर पावती मिलती है", en: "An acknowledgement is given when the petition is handed in" }, hint: "PAAV-TII — ⚠️ FEMININE, as -ती nouns are. Built on पाना, to receive, which this course does not card, the way कटौती (unit 86) is built on काटना — and the medial inherent a is not said (§1): paavtii, never paavatii. ⚠️ Not चालान two cards back, which is what you PAY: a पावती is what the clerk hands BACK, and in India it is the only proof that your अर्ज़ी ever arrived." },
        { id: "hi-u93l4-sanshodhan", type: "vocab", front: "संशोधन", reading: "sanshodhan", meaning: "an amendment", accept: ["a correction written into a document", "a change made to a text already issued"], example: { jp: "नियम में एक छोटा संशोधन किया गया।", en: "A small amendment was made to the rule." }, drill: { jp: "नियम में एक छोटा संशोधन किया गया", en: "A small amendment was made to the rule" }, hint: "SAN-SHO-DHAN, masculine, consonant-final: दो संशोधन. सं- (thoroughly) plus शोधन, a putting right — the same root as शोध, research (unit 87). ⚠️ **IT CONTAINS शोध AND THE MATCH CANNOT FIRE**, because the character after it is न, a LETTER, and `findWholeWord` is blocked by a letter rather than by a mark. Checked, not assumed. Its ं sits before श, which is not a stop, so it stays plain n (§1). The verb is करना." },
        { id: "hi-u93l4-vivaran", type: "vocab", front: "विवरण", reading: "vivaran", meaning: "a written description", accept: ["a written account", "particulars set out"], example: { jp: "आवेदन के साथ पूरा विवरण भेजना ज़रूरी है।", en: "It is necessary to send a full description with the application." }, drill: { jp: "उसका विवरण साफ़ नहीं था", en: "His description was not clear" }, hint: "VI-VA-RAN, masculine, final ण the RETROFLEX n (§1b). ⚠️ Read it against विवेक vivek, moral discernment (unit 68) — the same two opening syllables and no relation. Not जानकारी (unit 44): जानकारी is the facts themselves, a विवरण is the written account of them." },
        { id: "hi-u93l4-saarvajanik", type: "vocab", front: "सार्वजनिक", reading: "saarvajanik", meaning: "open for anyone to see", accept: ["public, in the official register", "not kept back from the public"], example: { jp: "यह सूची सार्वजनिक है, गोपनीय नहीं।", en: "This list is public, not confidential." }, drill: { jp: "यह सूची सार्वजनिक है गोपनीय नहीं", en: "This list is public, not confidential" }, hint: "SAAR-VA-JA-NIK — ⚠️ INVARIANT (unit53's rule): सार्वजनिक सूची AND सार्वजनिक कागज़, with no -ी form. The र् is र with a halant, drawn as the hook over the व. सर्व (all) plus जन (people), neither carded on its own — 'belonging to all the people'. ⚠️ **IT IS गोपनीय's EXACT OPPOSITE** (unit 65), and the example puts the two in one sentence because that is how an Indian file is labelled: one stamp or the other." },
        { id: "hi-u93l4-chaalaan", type: "vocab", front: "चालान", reading: "chaalaan", meaning: "an official payment slip", accept: ["a traffic fine slip", "a challan"], example: { jp: "पुलिस ने गाड़ी रोककर चालान बनाया।", en: "The police stopped the car and made out a fine slip." }, drill: { jp: "उसे सौ रुपये का चालान मिला", en: "He got a hundred-rupee fine slip" }, hint: "CHAA-LAAN, masculine and consonant-final. ⚠️ THREE TAUGHT WORDS START THE SAME AND SHARE NOTHING WITH IT: चालू, switched on (unit 43), चालाक, cunning (unit 27), and चलाना, to drive (unit 20). ⚠️ Not बिल or रसीद (unit 37): a चालान is what an AUTHORITY issues — a traffic fine, or the slip you pay money into a बैंक with." },
        { id: "hi-u93l4-sanlagn", type: "vocab", front: "संलग्न", reading: "sanlagn", meaning: "attached to a document", accept: ["enclosed with a letter"], example: { jp: "इस आवेदन के साथ दो प्रमाणपत्र संलग्न हैं।", en: "Two certificates are attached with this application." }, drill: { jp: "ये कागज़ संलग्न हैं", en: "These papers are attached" }, hint: "SAN-LAGN, an ADJECTIVE. ग्न is a stacked conjunct (unit 6) whose final न LOSES its inherent a — sanlagn, not sanlagna, which is the §1 schwa-deletion rule at the end of a word. ⚠️ It does not change for gender. The word printed at the foot of an Indian form where English says \"enclosed\"." },
      ],
    },
  ],
};
