// HI Unit 104 — डेटा और नेटवर्क ("Data and the network") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 1 (u98–u110). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, unit98.js §C1–§C9.
//
// 🚨 SLOT RETHEMED, AND THE RETHEME RELEASED THREE WHOLE SLOTS TO BLOCK 2. The
// scaffold title is "Science and technology". **SCIENCE IS SPENT**: u87 विज्ञान
// और शोध owns विज्ञान, शोध, वैज्ञानिक, प्रयोग, कोशिका, अणु, रसायन, परमाणु, ऊर्जा,
// ग्रह, तारा, ब्रह्मांड, दूरबीन, खगोल, परिकल्पना, नमूना, तथ्य, आँकड़े, सूत्र. So
// u104 takes **COMPUTING ONLY** (measured 0/24), and biology, chemistry and
// astronomy — which would otherwise have been crammed in here — are released as
// u121, u122 and u123 (unit98.js §C7). One retheme, three better units.
// ⚠️ AND CONSUMER TECHNOLOGY IS ALSO ALREADY TAUGHT: u43 तकनीक और संपर्क owns
// कंप्यूटर (u9l1 in fact), मोबाइल, इंटरनेट, ऐप, पासवर्ड, स्क्रीन, बैटरी, मशीन,
// जाल, ईंधन, दबाना. u104 is the layer BENEATH the app: the machine's parts, the
// network, what is done with a file, and what makes a machine appear to think.
//
// 🚨 TWENTY OF THIS UNIT'S TWENTY-FOUR FRONTS ARE LOANWORDS, AND unit1.js §9 IS
// THE RULE THAT GOVERNS THE WHOLE UNIT: **a loanword must not gloss to its own
// transliteration.** `checkProduce` accepts the Latin reading as an answer for any
// Hindi vocab item, so चिप glossed "a chip" (reading `chip`) would accept the
// answer read straight off the prompt — and लिंक, डेटा, ब्रांड, रोबोट and वायरस
// would all do the same. So **every loanword here is glossed by what it DOES**:
// चिप is "a small piece of silicon doing one job", लिंक is "a word one presses to
// go elsewhere", डेटा is "collected figures a machine holds". Verified across all
// twenty with `scripts/probe-hi-b2.mjs screen`: **zero PRODUCE-FREE-PASS**.
// ⚠️ THIS IS NOT A STYLE CHOICE AND A LATER BLOCK MUST NOT "TIDY" THESE GLOSSES
// into the short English word. Doing so silently makes twenty cards unanswerable-
// wrongly — the card still passes `validate:content` and the learner still types
// the prompt back.
//
// ⚠️ ॉ (THE CANDRA-O) IS SPENT A SECOND TIME, in सॉफ़्टवेयर (l1). unit31.js §A4
// made it live as a READING-ONLY note at u35l1 (डॉक्टर) and said it reads **o**,
// like ो — so सॉफ़्टवेयर is `softveyar`. Second and last word in the language to
// carry it; the mark stays uncarded, as §A4 decided. क़/ख़/ग़ remain uncarded AND
// unused (unit1.js §7).
//
// ⚠️ SIX CANDIDATES REFUSED, and the purist ones are the pattern:
//   • **संगणक, जालस्थल, संचिका and कुंजीपटल REFUSED as purist coinages for words
//     Hindi speakers do not use.** कंप्यूटर is already carded at u9l1, वेबसाइट and
//     कीबोर्ड are what people say, and **संचिका would collide outright with फ़ाइल
//     (u34l2)** through `normalizeMeaning`. unit98.js §C1's newspaper test applies
//     to a purist coinage exactly as it does to a hyphen.
//   • 🚨 **स्वचालन REFUSED — स्वचालित IS ALREADY CARDED, BY ME, AT u100l3.** The
//     adjective and its abstract noun in adjacent units of one block is the
//     derivative problem unit61.js §B4 names, and I am the seat that would have
//     shipped both. डिजिटल took the slot.
//   • **अंकीय REFUSED FOR A READING REASON, and it is worth recording**: it ends
//     in a plain य after the ी mātrā, so the reading is genuinely ambiguous
//     between `ankiiy` and `ankiiya`, and unit1.js §1 gives no rule that settles
//     it. ⚠️ **THE SAME AMBIGUITY KILLED सहनीय in u101l4.** The rule a later block
//     should follow: **avoid a front ending in a vowel-mātrā plus bare य** rather
//     than invent notation.
//   • Also drafted and left FREE: संकेतक, अभिकलन, स्मृतिकोश, दूरसंवेदी, क्लाउड, बग.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4) — and the loanwords are the trap:
//   ⚠️ FEMININE: चिप · बुद्धि · कोडिंग.
//   ⚠️ **चिप IS FEMININE AND CONSONANT-FINAL** — छोटी चिप, never छोटा. There is
//   nothing in an English loanword's shape to tell a learner its Hindi gender,
//   and it is assigned by analogy, not by rule: चिप is feminine like ईंट.
//   ⚠️ **बुद्धि ENDS IN A SHORT ि** — buddhi, never -ii. Same class as पुष्टि
//   (u99l1), दोषसिद्धि (u102l4), प्रतिपुष्टि and परिधि (u100l3).
//   ⚠️ **कोडिंग IS FEMININE**, like every -इंग loanword noun in Hindi
//   (मार्केटिंग, पार्किंग): कोडिंग मुश्किल है, never मुश्किल था.
//   MASCULINE: हार्डवेयर · सॉफ़्टवेयर · प्रोसेसर · कीबोर्ड · माउस · सर्वर ·
//   नेटवर्क · ब्राउज़र · लिंक · डेटा · डाउनलोड · अपलोड · बैकअप · कूटलेखन ·
//   वायरस · एल्गोरिदम · रोबोट.
//   ⚠️ **वेबसाइट IS FEMININE** — वेबसाइट खुली, never खुला — while सर्वर, लिंक and
//   ब्राउज़र beside it are masculine. The -इट ending is doing the work, as in
//   यूनिट.
//   INVARIANT ADJECTIVES: कृत्रिम · डिजिटल.
//   ONE VERB, a regular -ना (unit1.js §5): सहेजना. Still ZERO 3rd-person
//   exceptions in the whole language.
//
// ृ (ऋ's MĀTRĀ) IS SPENT AN EIGHTH TIME, in कृत्रिम (l4), with the hint
// unit61.js §B2 requires. Running list: कृपया (u7l2) · पृष्ठभूमि (u62l1) · वृद्धि
// and प्रवृत्ति (u69l4) · पुनरावृत्ति (u73l4) · दृष्टांत (u98l1) · अपेक्षाकृत
// (u101l1) · कृत्रिम (u104l4). Still uncarded; no stroke data. ⚠️ A NINTH FOLLOWS: मातृभाषा at u109l1. This line said "eighth and last" when it was written and that was an overreach, corrected 2026-10-07 — u106's header records where the decision to stop adding more was actually taken.
//
// ⚠️ SUBSTRING TRAPS, computed with `findWholeWord`'s real boundary test:
//   FIRES — बोर्ड(u34l3) inside कीबोर्ड · बस(u1l3) inside वेबसाइट ·
//     फ़(u4, a glyph) inside सॉफ़्टवेयर · ज़(u4, a glyph) inside ब्राउज़र ·
//     त्र(u6, a glyph) inside कृत्रिम · से(u8l2) inside प्रोसेसर.
//     The three glyph hits are harmless: `canCloze` requires `type === "vocab"`.
//   ✅ BLOCKED — की(u3, a glyph) inside कीबोर्ड · नल(u15l2) inside डाउनलोड,
//     because the उ before it is a LETTER · रस(u13l4) inside वायरस, by the य ·
//     को(u3, a glyph) inside कोडिंग, by the ड · कू(u3) and लेख(u42l4) inside
//     कूटलेखन, both by letters · चिप inside चिपकाना(u60l2), by the क.
//   **NO u104 FRONT MATCHES INSIDE ANOTHER WORD** — the `traps` probe returned
//   nothing, so every entry above is the other direction.
export const HI_UNIT104 = {
  id: "hi-u104",
  lang: "hi",
  title: "डेटा और नेटवर्क",
  order: 104,
  stage: "b2",
  lessons: [
    {
      id: "hi-u104l1",
      unit: 104,
      lesson: 1,
      title: "The machine itself",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Separate the parts of a computer from the programs on it: hardware, software, the processor, a chip, the keyboard and the mouse.",
      items: [
        { id: "hi-u104l1-haardveyar", type: "vocab", front: "हार्डवेयर", reading: "haardveyar", meaning: "the physical parts of a computer", accept: ["the machine you can touch"], example: { jp: "हार्डवेयर ठीक था, पर सॉफ़्टवेयर पुराना था, इसलिए कंप्यूटर धीरे चलता था।", en: "The physical machine was fine, but the programs were old, so the computer ran slowly." }, drill: { jp: "हार्डवेयर ठीक था, पर सॉफ़्टवेयर पुराना था", en: "The physical machine was fine, but the programs were old" }, hint: "HAARD-VE-YAR, masculine, an English loanword. The र् is a bare र with the halant, so there is no vowel after it. ⚠️ GLOSSED BY WHAT IT IS, not as 'hardware', because unit 1 §9 forbids a loanword glossing to its own reading — twenty of this unit's twenty-four cards are glossed that way and none may be shortened." },
        { id: "hi-u104l1-softveyar", type: "vocab", front: "सॉफ़्टवेयर", reading: "softveyar", meaning: "the programs a computer runs", accept: ["what is loaded onto a machine"], example: { jp: "नया सॉफ़्टवेयर मुफ़्त था, पर उसे सीखने में दो हफ़्ते लगे।", en: "The new program was free, but it took two weeks to learn." }, drill: { jp: "नया सॉफ़्टवेयर मुफ़्त था", en: "The new program was free" }, hint: "SOFT-VE-YAR, masculine. ⚠️ THE ॉ IS THE CANDRA-O, FOR ENGLISH LOANS, AND IT READS o — unit 31 §A4 made it a reading-only note at डॉक्टर (unit 35) and this is the only other Hindi word to carry it. ⚠️ AND THE फ़ IS A NUKTA LETTER (unit 4), written DECOMPOSED, फ + ़: सॉफ़्टवेयर, never सॉफ्टवेयर." },
        { id: "hi-u104l1-prosesar", type: "vocab", front: "प्रोसेसर", reading: "prosesar", meaning: "the part that carries out the instructions", accept: ["the piece that does the actual work"], example: { jp: "तेज़ प्रोसेसर से काम जल्दी होता है, पर बिजली ज़्यादा लगती है।", en: "Work gets done faster with a fast processor, but it takes more electricity." }, drill: { jp: "तेज़ प्रोसेसर से काम जल्दी होता है", en: "Work gets done faster with a fast processor" }, hint: "PRO-SE-SAR, masculine. The प्रो is प with र stacked carrying the ो mātrā. 🚨 SUBSTRING NOTE: से, from (unit 8), whole-word-FIRES inside it, because the ो before it is a mātrā — one of several accidental matches in a unit full of loanwords. ⚠️ Not चिप below: a प्रोसेसर IS a chip, but चिप is any one of them and this is the one in charge." },
        { id: "hi-u104l1-chip", type: "vocab", front: "चिप", reading: "chip", meaning: "a small piece of silicon doing one job", accept: ["a tiny part with a circuit on it"], example: { jp: "एक छोटी चिप खराब हुई और पूरा तंत्र रुक गया।", en: "One small chip went bad and the whole system stopped." }, drill: { jp: "एक छोटी चिप खराब हुई", en: "One small chip went bad" }, hint: "CHIP — ⚠️ FEMININE AND CONSONANT-FINAL: छोटी चिप, never छोटा. There is nothing in an English loanword's shape to tell you its Hindi gender; it is assigned by analogy, and चिप went feminine like ईंट. ⚠️ GLOSSED DESCRIPTIVELY ON PURPOSE: 'a chip' would normalise to `chip`, which is this card's own reading, and the grader would accept the prompt as the answer (unit 1 §9). ✅ चिप is blocked inside चिपकाना (unit 60) by the क." },
        { id: "hi-u104l1-kiibord", type: "vocab", front: "कीबोर्ड", reading: "kiibord", meaning: "the keys one types on", accept: ["the part with the letters on it"], example: { jp: "हिंदी कीबोर्ड पर हर अक्षर ढूँढना पहले मुश्किल लगता है।", en: "Finding every letter on a Hindi keyboard seems difficult at first." }, drill: { jp: "हिंदी कीबोर्ड पर हर अक्षर ढूँढना मुश्किल है", en: "Finding every letter on a Hindi keyboard is difficult" }, hint: "KII-BORD, masculine. 🚨 SUBSTRING NOTE, ONE FIRES AND ONE DOES NOT: बोर्ड, a board (unit 34), whole-word-FIRES inside it, because the ी before it is a mātrā — but the glyph card की (unit 3) CANNOT, because the ब that follows is a \\p{L} letter. One word, two opposite answers, and unit 97's छात्रावास / छात्रवृत्ति pair is the same split." },
        { id: "hi-u104l1-maaus", type: "vocab", front: "माउस", reading: "maaus", meaning: "the thing one moves to point at the screen", accept: ["the hand device that moves the pointer"], example: { jp: "माउस के बिना भी काम चलता है, पर कीबोर्ड सीखना पड़ता है।", en: "Work gets done without a mouse too, but then one has to learn the keyboard." }, drill: { jp: "माउस के बिना भी काम चलता है", en: "Work gets done without a mouse too" }, hint: "MAA-US, masculine. ⚠️ The आ and the उ are two separate vowels, not a diphthong — maa-us, never maus. ⚠️ Hindi keeps the English word rather than translating the animal, so it does NOT collide with चूहा, a mouse — and that is exactly the kind of thing unit 9 taught the learner to expect of a loanword." },
      ],
    },
    {
      id: "hi-u104l2",
      unit: 104,
      lesson: 2,
      title: "Where it all lives",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe the network side: a server, the network itself, a website, the browser you look at it with, a link, and the data being held.",
      items: [
        { id: "hi-u104l2-sarvar", type: "vocab", front: "सर्वर", reading: "sarvar", meaning: "a machine that holds things for other machines", accept: ["the central machine others ask"], example: { jp: "सर्वर बंद था, इसलिए वेबसाइट किसी को नहीं खुली।", en: "The server was down, so the website opened for nobody." }, drill: { jp: "सर्वर बंद था, इसलिए वेबसाइट नहीं खुली", en: "The server was down, so the website did not open" }, hint: "SAR-VAR, masculine. The र् is a bare र with the halant — sar, then var. ⚠️ GLOSSED BY ITS JOB, not as 'a server', per unit 1 §9. Not कंप्यूटर (unit 9): a सर्वर IS a कंप्यूटर, but one nobody sits in front of, which is why the example says it was बंद and nobody noticed until the वेबसाइट failed." },
        { id: "hi-u104l2-netvark", type: "vocab", front: "नेटवर्क", reading: "netvark", meaning: "machines joined so they can pass things to each other", accept: ["machines linked together"], example: { jp: "दफ़्तर का पूरा नेटवर्क एक ही सर्वर पर टिका था, और यही उसकी सबसे बड़ी खामी थी।", en: "The office's whole network rested on a single server, and that was its biggest shortcoming." }, drill: { jp: "दफ़्तर का पूरा नेटवर्क एक सर्वर पर टिका था", en: "The office's whole network rested on one server" }, hint: "NET-VARK, masculine. ⚠️ Not जाल, a web (unit 43): a जाल is the metaphor and is also what शब्दजाल (unit 98) is built on, while a नेटवर्क is the actual wired thing. ⚠️ THE EXAMPLE IS A SYSTEMS SENTENCE ON PURPOSE — निर्भरता (unit 100) is what it describes, and B2 is the band where vocabulary from two units starts doing one job." },
        { id: "hi-u104l2-vebsaait", type: "vocab", front: "वेबसाइट", reading: "vebsaait", meaning: "a place on the internet one visits", accept: ["a set of pages at one address"], example: { jp: "सरकार की वेबसाइट पर हर नियम लिखा है, पर उसे ढूँढना आसान नहीं।", en: "Every rule is written on the government's site, but finding it is not easy." }, drill: { jp: "सरकार की वेबसाइट पर हर नियम लिखा है", en: "Every rule is written on the government's site" }, hint: "VEB-SAAIT — ⚠️ FEMININE, while सर्वर, लिंक and ब्राउज़र beside it are masculine: वेबसाइट खुली, never खुला. The -इट ending is doing the work, as in यूनिट. 🚨 SUBSTRING NOTE: बस, a bus (unit 1), whole-word-FIRES inside it, because the े before it is a mātrā. ⚠️ जालस्थल, the purist word, is deliberately NOT carded — nobody says it." },
        { id: "hi-u104l2-braauzar", type: "vocab", front: "ब्राउज़र", reading: "braauzar", meaning: "the program one looks at the internet with", accept: ["the window the internet is read in"], example: { jp: "ब्राउज़र में तीन वेबसाइट खुली थीं और कंप्यूटर धीरे चलने लगा।", en: "Three sites were open in the browser and the computer began to run slowly." }, drill: { jp: "ब्राउज़र में तीन वेबसाइट खुली थीं", en: "Three sites were open in the browser" }, hint: "BRAA-U-ZAR, masculine, with ज़ (unit 4) and never plain ज. The ब्रा is ब with र stacked carrying the ा mātrā — one syllable, as in भ्रामक (unit 98). ⚠️ Not ऐप, an app (unit 43): an ऐप does one thing, a ब्राउज़र is the one program through which every वेबसाइट is reached." },
        { id: "hi-u104l2-link", type: "vocab", front: "लिंक", reading: "link", meaning: "a word one presses to go somewhere else", accept: ["a pressable word that takes you elsewhere"], example: { jp: "ईमेल में आया लिंक मत दबाओ, क्योंकि वह वायरस भी हो सकता है।", en: "Do not press a link that has come in an email, because it may well be a virus." }, drill: { jp: "ईमेल में आया लिंक मत दबाओ", en: "Do not press a link that came in an email" }, hint: "LINK, masculine. ⚠️ GLOSSED DESCRIPTIVELY BECAUSE IT HAS TO BE: 'a link' normalises to `link`, which is this card's own reading, and `checkProduce` would accept the prompt as the answer (unit 1 §9). The verb is दबाना, to press (unit 43). ⚠️ Not अंतर्संबंध, an interconnection (unit 100): that is a relation between parts, this is a thing you press." },
        { id: "hi-u104l2-detaa", type: "vocab", front: "डेटा", reading: "detaa", meaning: "collected figures a machine holds", accept: ["the recorded facts a machine keeps"], example: { jp: "शोध का पूरा डेटा एक ही फ़ाइल में था, और उसका बैकअप किसी ने नहीं रखा।", en: "The research's whole set of recorded figures was in a single file, and nobody kept a backup of it." }, drill: { jp: "शोध का पूरा डेटा एक फ़ाइल में था", en: "The research's whole set of figures was in one file" }, hint: "DE-TAA, masculine despite the -ा being long, and the ड is retroflex (unit 1 §1b). ⚠️ Not आँकड़े, statistics (unit 87): आँकड़े are figures somebody has already worked up for an argument, डेटा is the raw pile before anybody has done anything with it. ⚠️ Glossed descriptively per unit 1 §9 — 'data' would be one letter from its own reading." },
      ],
    },
    {
      id: "hi-u104l3",
      unit: 104,
      lesson: 3,
      title: "Moving it and keeping it",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say what is being done with a file: brought down, sent up, saved, kept as a second copy, written in code, or eaten by something that spreads.",
      items: [
        { id: "hi-u104l3-daaunlod", type: "vocab", front: "डाउनलोड", reading: "daaunlod", meaning: "the bringing of a file down to one's own machine", accept: ["the fetching of a file to one's machine"], example: { jp: "फ़ाइल का डाउनलोड आधे में रुक गया, और दोबारा शुरू करना पड़ा।", en: "The file's download stopped halfway, and it had to be started again." }, drill: { jp: "फ़ाइल का डाउनलोड आधे में रुक गया", en: "The file's download stopped halfway" }, hint: "DAA-UN-LOD, masculine, and like माउस the आ and उ are separate vowels. ✅ SUBSTRING CHECKED: नल, a tap (unit 15), CANNOT fire inside it, because the उ before it is a \\p{L} LETTER and not a mātrā — which is exactly the test that lets बोर्ड fire inside कीबोर्ड and की not. ⚠️ Glossed by what it is, per unit 1 §9." },
        { id: "hi-u104l3-aplod", type: "vocab", front: "अपलोड", reading: "aplod", meaning: "the sending of a file away from one's machine", accept: ["the putting of a file onto a server"], example: { jp: "अपलोड पूरा होने तक कंप्यूटर बंद मत करो, वरना फ़ाइल आधी रह जाएगी।", en: "Do not shut the computer until the upload is complete, or the file will be left half-done." }, drill: { jp: "अपलोड पूरा होने तक कंप्यूटर बंद मत करो", en: "Do not shut the computer until the upload is complete" }, hint: "AP-LOD, masculine. The exact mirror of डाउनलोड above, and the two are carded side by side so the direction is learnt as a pair. ⚠️ A learner will reach for भेजना, to send (unit 12) — and भेजना is right for an ईमेल, but an अपलोड goes to a सर्वर and nobody receives it, which is why it has its own word." },
        { id: "hi-u104l3-sahejnaa", type: "vocab", front: "सहेजना", reading: "sahejnaa", meaning: "to save a file so it is not lost", accept: ["to keep a file by writing it down"], example: { jp: "हर दस मिनट में अपना काम सहेजना चाहिए, क्योंकि बिजली कभी भी जा सकती है।", en: "One should save one's work every ten minutes, because the electricity can go at any time." }, drill: { jp: "हर दस मिनट में अपना काम सहेजना चाहिए", en: "One should save one's work every ten minutes" }, hint: "SA-HEJ-NAA, a regular -ना verb (unit 1 §5), and the ONE verb in this unit. ⚠️ It is a real Hindi word, not a loan — its older sense is to put something away carefully — which is why Hindi did NOT borrow 'save' here even though it borrowed डाउनलोड. ⚠️ Not रखना, to put (unit 26): you रखना a thing anywhere, you सहेजना it so it survives." },
        { id: "hi-u104l3-baikap", type: "vocab", front: "बैकअप", reading: "baikap", meaning: "a second copy kept in case the first is lost", accept: ["a spare copy held somewhere else"], example: { jp: "बैकअप दूसरी जगह रखना चाहिए, क्योंकि एक ही सर्वर पर दोनों रखने से कोई फ़ायदा नहीं।", en: "A spare copy should be kept in another place, because keeping both on one server is no use at all." }, drill: { jp: "बैकअप दूसरी जगह रखना चाहिए", en: "A spare copy should be kept in another place" }, hint: "BAI-KAP, masculine. The ै is ऐ's mātrā (unit 3). ⚠️ THE SECOND CLAUSE IS THE WHOLE WORD: a copy on the same सर्वर is not a बैकअप, and that is a निर्भरता point (unit 100) rather than a technical one. Not नकल, a copy — that word is not carded in Hindi, so बैकअप carries the job." },
        { id: "hi-u104l3-kuutlekhan", type: "vocab", front: "कूटलेखन", reading: "kuutlekhan", meaning: "the writing of something in code so others cannot read it", accept: ["the putting of a message into cipher"], example: { jp: "कूटलेखन के बाद वह फ़ाइल किसी के काम की नहीं रहती, चाबी के बिना।", en: "After encryption that file is no use to anybody, without the key." }, drill: { jp: "कूटलेखन के बाद वह फ़ाइल किसी के काम की नहीं", en: "After encryption that file is no use to anybody" }, hint: "KUUT-LE-KHAN, masculine, and one of the four NON-loanwords in this unit. कूट is a cipher and लेखन a writing. ✅ SUBSTRING CHECKED: neither the glyph कू (unit 3) nor लेख, an article (unit 42), can fire inside it — the letter after each blocks the match. ⚠️ Plain ख, because unit 1 §7 keeps ख़ uncarded." },
        { id: "hi-u104l3-vaayras", type: "vocab", front: "वायरस", reading: "vaayras", meaning: "a program that spreads itself and does damage", accept: ["a self-spreading program that harms"], example: { jp: "एक लिंक दबाने से वायरस पूरे नेटवर्क में फैल गया।", en: "From pressing one link the virus spread through the whole network." }, drill: { jp: "एक लिंक दबाने से वायरस नेटवर्क में फैल गया", en: "From pressing one link the virus spread through the network" }, hint: "VAA-Y-RAS, masculine. ✅ SUBSTRING CHECKED: रस, juice (unit 13), cannot fire inside it, because the य before it is a \\p{L} letter. ⚠️ THE SAME WORD IS USED FOR THE BIOLOGICAL ONE, and विषाणु, the purist term, belongs to u121 — so this card is glossed strictly as the program, which is what keeps the two apart." },
      ],
    },
    {
      id: "hi-u104l4",
      unit: 104,
      lesson: 4,
      title: "Making a machine appear to think",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk about what makes a machine seem intelligent: coding, an algorithm, the word for man-made, the faculty of understanding, a robot, and what it means for a thing to be digital.",
      items: [
        { id: "hi-u104l4-koding", type: "vocab", front: "कोडिंग", reading: "koding", meaning: "the writing of instructions for a machine", accept: ["the work of telling a machine what to do"], example: { jp: "कोडिंग सीखने के लिए अंग्रेज़ी ज़रूरी नहीं है, पर उससे काम आसान होता है।", en: "English is not necessary for learning to code, but it makes the work easier." }, drill: { jp: "कोडिंग सीखने के लिए अंग्रेज़ी ज़रूरी नहीं है", en: "English is not necessary for learning to code" }, hint: "KO-DING — ⚠️ FEMININE, like every -इंग loanword noun in Hindi (मार्केटिंग, पार्किंग): कोडिंग मुश्किल है, never मुश्किल था. ✅ SUBSTRING CHECKED: the glyph को (unit 3) cannot fire inside it, because the ड that follows is a letter. ⚠️ Not लिखना, to write (unit 6): कोडिंग is the whole occupation, and Hindi uses the English word for it rather than a translation." },
        { id: "hi-u104l4-elgoridam", type: "vocab", front: "एल्गोरिदम", reading: "elgoridam", meaning: "a fixed set of steps a machine follows every time", accept: ["a settled procedure a machine repeats"], example: { jp: "एल्गोरिदम तय करता है कि आपको क्या दिखेगा, और वह फ़ैसला कोई आदमी नहीं लेता।", en: "The algorithm settles what you will see, and no person takes that decision." }, drill: { jp: "एल्गोरिदम तय करता है कि क्या दिखेगा", en: "The algorithm settles what you will see" }, hint: "EL-GO-RI-DAM, masculine. ⚠️ Not क्रियाविधि, a mechanism (unit 100), and not प्रणाली, a procedure (unit 66): an एल्गोरिदम is a procedure written so a MACHINE can follow it without judgement — which is the point the example's second clause makes, and the reason the word matters outside computing at all." },
        { id: "hi-u104l4-kritrim", type: "vocab", front: "कृत्रिम", reading: "kritrim", meaning: "made by people rather than found in nature", accept: ["man-made as against natural"], example: { jp: "कृत्रिम बुद्धि अब हर दफ़्तर में है, पर उसका एल्गोरिदम कोई नहीं देख सकता।", en: "Artificial intelligence is in every office now, but nobody can see its algorithm." }, drill: { jp: "कृत्रिम बुद्धि अब हर दफ़्तर में है", en: "Artificial intelligence is in every office now" }, hint: "KRIT-RIM, INVARIANT: कृत्रिम बुद्धि, कृत्रिम तालाब. ⚠️ THE ृ IS ऋ's MĀTRĀ AND READS ri (unit 61 §B2) — the eighth Hindi word to spend the mark, after कृपया (unit 7), पृष्ठभूमि (unit 62), वृद्धि and प्रवृत्ति (unit 69), पुनरावृत्ति (unit 73), दृष्टांत (unit 98) and अपेक्षाकृत (unit 101). 🚨 The glyph त्र (unit 6) fires inside it — harmless, since a glyph never clozes." },
        { id: "hi-u104l4-buddhi", type: "vocab", front: "बुद्धि", reading: "buddhi", meaning: "the faculty of understanding", accept: ["the power to work things out"], example: { jp: "बुद्धि और ज्ञान एक चीज़ नहीं हैं, और यह फ़र्क कृत्रिम बुद्धि पर भी लागू होता है।", en: "Understanding and knowledge are not one thing, and that difference applies to artificial intelligence too." }, drill: { jp: "बुद्धि और ज्ञान एक चीज़ नहीं हैं", en: "Understanding and knowledge are not one thing" }, hint: "BUD-DHI — ⚠️ FEMININE, AND IT ENDS IN A SHORT ि: buddhi, never -ii. Same class as पुष्टि (unit 99), दोषसिद्धि (unit 102), परिधि (unit 100). The द्धि is द with ध stacked. ⚠️ Not ज्ञान, knowledge (unit 57): ज्ञान is what you HAVE, बुद्धि is what works on it — and the example makes that the card's whole content." },
        { id: "hi-u104l4-robot", type: "vocab", front: "रोबोट", reading: "robot", meaning: "a machine built to do a person's work", accept: ["a machine that acts in a person's place"], example: { jp: "कारखाने में रोबोट आने से उत्पादन बढ़ा, पर कुछ लोगों का काम चला गया।", en: "Production rose when robots came into the factory, but some people's jobs went." }, drill: { jp: "कारखाने में रोबोट आने से उत्पादन बढ़ा", en: "Production rose when robots came into the factory" }, hint: "RO-BOT, masculine. ⚠️ Glossed by what it DOES, per unit 1 §9 — 'a robot' would normalise to within one letter of its own reading. ⚠️ Not मशीन, a machine (unit 43): every रोबोट is a मशीन, but a रोबोट replaces a PERSON, which is the whole weight of the example's second clause. ⚠️ कामगार, a worker, is NOT carded anywhere in Hindi — unit 98 §C9.9 gives that field to u125 — so this example says लोग instead." },
        { id: "hi-u104l4-dijital", type: "vocab", front: "डिजिटल", reading: "dijital", meaning: "stored as numbers rather than as a physical thing", accept: ["kept as figures a machine can read"], example: { jp: "सब पुराने कागज़ अब डिजिटल हैं, इसलिए उन्हें ढूँढना आसान हो गया।", en: "All the old papers are digital now, so finding them has become easy." }, drill: { jp: "सब पुराने कागज़ अब डिजिटल हैं", en: "All the old papers are digital now" }, hint: "DI-JI-TAL, INVARIANT: डिजिटल फ़ाइल, डिजिटल कागज़. ⚠️ अंकीय, the purist word, IS DELIBERATELY NOT CARDED, and the reason is mechanical rather than stylistic: it ends in a plain य after the ी mātrā, so its reading is genuinely ambiguous between `ankiiy` and `ankiiya` and unit 1 §1 settles neither. **The same ambiguity cost u101 the word सहनीय.** Avoid a front ending in a vowel-mātrā plus bare य." },
      ],
    },
  ],
};
