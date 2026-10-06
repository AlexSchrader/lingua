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
// किंतु, अपितु, यद्यपि, तथापि, अनुसार, विरुद्ध, सहित, अन्यथा, तत्पश्चात — twelve of
// the commonest words in written Hindi, and the corpus had NOT ONE of them.
// *(That list read अतः and फलस्वरूप until 2026-10-06; both are gone — see the
// dedupe and visarga notes below.)*
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
//     अपितु          बल्कि      (u39l?)
//     यद्यपि         हालाँकि     (u39l?)
//     अनुसार         मुताबिक     (u65l1, block 1)
//     विरुद्ध         खिलाफ      (u79l1, this block)
//     सहित          समेत       (u79l1, this block)
//     अन्यथा         वरना       (u39l?)
//     तथापि          फिर भी     (not carded — named as a gap)
//     तत्पश्चात       उसके बाद    (बाद is u12l?)
// 🚨 AND THIS IS WHY unit79.js DELIBERATELY LEFT FIVE FRONTS ON THE TABLE. Its
// header records it: taking अनुसार, विरुद्ध, सहित, अन्यथा and तथापि at
// u79 would have left this unit with nothing to contrast. The two units were
// written as a pair and must be read as one.
//
// 🚨 NINE CARDS LEFT THIS UNIT IN THE B1 CROSS-BLOCK DEDUPE (2026-10-06), and the
// shape of the loss is the point: **u83 KEEPS THE REGISTER AND GIVES UP THE
// PAPERWORK NOUNS.** u93 दस्तावेज़ और रिकॉर्ड was centrally allocated the documents
// field (unit61.js §B9), so all six of l3's document nouns went to it or to block
// 1's earlier slots, and l3 was rebuilt as the REGISTER ADJECTIVE lesson — six
// more twins, which is what the rest of the unit already is.
//   l1  अतः      → see the visarga note below; this one was NOT a duplicate
//                  → अपितु    (formal twin of बल्कि)
//   l2  फलस्वरूप  → u62 कारण और नतीजा (block 1, earlier slot; u62 now holds BOTH
//                  फलस्वरूप and नतीजतन, so the twin pair is inside one unit there)
//                  → तत्पश्चात (formal twin of उसके बाद)
//   l3  आवेदन    → u92 विदेश और प्रवास   → आवश्यक   (register twin of ज़रूरी)
//       शपथ      → u93                 → प्राप्त     (register twin of मिलना)
//       दस्तावेज़  → u93                 → उपलब्ध    (register twin of मिलता है)
//       हस्ताक्षर  → u93                 → तत्काल    (register twin of फ़ौरन)
//       प्रमाणपत्र → u93                 → निर्धारित  (register twin of तय)
//       पंजीकरण  → u93                 → उल्लेख     (the one noun left)
//   l4  आदेश     → u71 नियम और पाबंदी (block 1, earlier slot — still in scope, and
//                  l1's किंतु, l2's विरुद्ध and l3's तत्काल and उल्लेख all use it)
//                  → खेद
// ⚠️ SEVEN SURVIVING CARDS HAD THEIR SENTENCES REWRITTEN, because their examples
// leaned on the paperwork nouns that are now taught LATER than u83: तथा, अथवा,
// परंतु, यद्यपि (l1), अनुसार, सहित, अन्यथा (l2) and स्वीकृति's drill (l4). They now
// use अर्ज़ी (u34), दस्तखत (u34), कागज़ (u9), जाँच (u35), नाम and पता (u28) instead.
// **u84l3's अँगूठा card was rewritten for the same reason** — it used दस्तावेज़.
//
// 🚨 NEW TRAP, FOUND WHILE WRITING THOSE SENTENCES AND WORTH COPYING: **THE NUKTA
// MUST BE WRITTEN DECOMPOSED — ज + ़ (U+091C U+093C), NEVER THE PRECOMPOSED ज़
// (U+095B).** Unicode has both and they render identically. The whole hi corpus
// uses the DECOMPOSED form (measured: zero occurrences of U+0958–U+095F in any
// other hi unit file), so a precomposed अर्ज़ी is a DIFFERENT STRING from u34's
// अर्ज़ी and `scope-hi.mjs` reports the word as never taught. Six sentences in this
// unit's rebuilt l3 flagged exactly that way, and the only thing that caught it
// was `node scripts/scope-hi.mjs` — `validate:content` stayed green, the two
// strings look the same in an editor, and `front-taken.mjs` cannot see it either.
// The same hazard exists for क़ ख़ ग़ ड़ ढ़ फ़ य़. **If scope-hi flags a word you know
// is taught, dump its code points before you doubt the script.**
//
// 🚨 AND THE अतः CARD WAS NOT A DUPLICATE: IT WAS A CONVENTION VIOLATION, caught
// in the same pass. **unit61.js §B1 BANS THE VISARGA ः FROM EVERY B1 FRONT BY
// NAME** — अतः, संभवतः, मुख्यतः, क्रमशः — on the measured ground that the mark is
// taught NOWHERE in u1–u6, so a learner reaching u83 has never been shown how to
// decode it, and §B1 closes the whole -तः adverb class for the course. §B1 also
// asserts that zero B1 examples and zero B1 drills contain ः, which this card made
// false. The paragraph below used to argue the other way, from unit1.js §7 alone,
// and §7 is not where the rule lives: §B1 is the B1 crew lead's decision and it
// binds blocks 2 and 3. अपितु took the slot; "therefore" is already covered by
// इसलिए (u22) and नतीजतन (u62), as §B1 says.
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
//   • 🚨 **अर्जी ("a petition") — REFUSED, AND IT WAS AUTHORED AND DELETED.** The
//     corpus spells it **अर्ज़ी, WITH THE NUKTA, at u34l3** — two strings, ONE WORD,
//     and `check-front.mjs` reported mine FREE. The बर्तन/बिलकुल trap (unit51.js),
//     and the second of the two it caught in this block; u75's गुफ़ा was the other.
//     **RE-READ THIS ONE: the slot it freed went to शपथ, which has since gone to
//     u93, and l3 is now the register-adjective lesson. The refusal still stands —
//     अर्जी must never be carded in Hindi — and अर्ज़ी is now the word SEVEN of this
//     unit's sentences lean on.**
//   🚨 AND u34l3 दफ़्तर और कक्षा "In the office" IS THIS UNIT'S REAL NEIGHBOUR,
//   which the measurement above did not see. It cards मीटिंग, फ़ाइल, रजिस्टर,
//   अर्ज़ी, इंटरव्यू and दस्तखत — all six of them the SPOKEN, loanword-and-Perso-
//   Arabic office vocabulary, and they are what this unit's examples are built out
//   of. *(Until the 2026-10-06 dedupe this paragraph went further and said आवेदन
//   was the register twin of अर्ज़ी and हस्ताक्षर the register twin of दस्तखत, with
//   both glossed "…, in the official register" because `lint:curriculum` caught the
//   plain glosses. **Both cards have gone — आवेदन to u92, हस्ताक्षर to u93** — so
//   the two register twins are no longer this unit's. The PATTERN is, though, and
//   l3's six replacements are built on exactly it: आवश्यक/ज़रूरी, प्राप्त/मिलना,
//   उपलब्ध/मिलता है, तत्काल/फ़ौरन, निर्धारित/तय.)*
//   • अनुरोध — निवेदन holds "a formal submission" and विनती (u82l3) holds "an
//     entreaty". Three request-words is one too many. DROPPED.
//   • TAKEN outright: सूचना (u44, "a notification"), विषय (u34, "a school
//     subject"), क्षमा (u6). **सूचना is the one that hurts** — a notices lesson
//     without the word for a notice.
//   • NAMED FOR A LATER BLOCK, free and unspent: एवं, निर्देश, संबंधित,
//     उपरोक्त, कार्यालय, प्रेषक, अनुरोध, अनौपचारिक, लंबित.
//     *(तत्काल is now carded HERE, in l3. विवरण and प्रपत्र went to u93. **अंततः is
//     REFUSED outright, not merely unspent** — it carries the visarga, which
//     unit61.js §B1 bans from every B1 front; it was on this list because the
//     deleted अतः card made the ban look negotiable.)*
//     ⚠️ **अनौपचारिक is left on purpose**: it is औपचारिक (l4) with unit 81's अन-
//     prefix, so a learner who has both units can build it himself, which is what
//     u81 is for.
//
// GENDER TRAPS THIS UNIT ADDS (§4), and HALF THE UNIT HAS NO GENDER:
//   ⚠️ NO GENDER AT ALL — twelve conjunctions and postpositions (तथा,
//   अथवा, परंतु, किंतु, अपितु, यद्यपि, अनुसार, विरुद्ध, सहित, अन्यथा, तथापि,
//   तत्पश्चात), plus तत्काल and सादर, which are ADVERBS, and महोदय, which is a form
//   of address. §4 has nothing to attach to; each hint says what the word's class is.
//   ⚠️ FEMININE: स्वीकृति, and nothing else in the unit. **After the dedupe this
//   unit has only ONE feminine noun** — शपथ was the other and it went to u93.
//   MASCULINE: उल्लेख, निवेदन, खेद. All three are consonant-final and their plural
//   is the bare form: दो उल्लेख, दो खेद.
//   ADJECTIVES: **औपचारिक, आवश्यक, प्राप्त, उपलब्ध and निर्धारित are all INVARIANT**
//   (unit53's rule) — आवश्यक कागज़ and आवश्यक जाँच, निर्धारित समय and निर्धारित जगह.
//   That is five of the six l3/l4 adjectives following one rule with no exception,
//   which is the half of the unit a learner can stop worrying about.
//
// ⚠️ ONE MARK AND TWO SPELLINGS THAT EARN THEIR HINTS:
//   • **ZERO FRONTS IN THIS UNIT CARRY THE VISARGA ः.** अतः did, and was replaced
//     by अपितु on 2026-10-06 — unit61.js §B1 bans the mark outright and the
//     argument from unit1.js §7 that used to stand here was wrong. See the dedupe
//     note at the top of this file.
//   • स्वीकृति carries ृ, ऋ's MĀTRĀ, read **ri** — the fifth sighting in the
//     language after कृपया, दृश्य, प्राकृतिक and समृद्धि.
//   • **तथापि CONTAINS तथा and the match CANNOT FIRE**, because the character
//     after it is प, which IS a letter — `findWholeWord` is blocked by a letter,
//     not by a mātrā. Checked rather than assumed, and the same reason गैरकानूनी
//     ⊃ कानून is safe (unit 81l4). *(This line also recorded that हस्ताक्षर does
//     NOT contain अक्षर (u6l4). हस्ताक्षर went to u93 in the dedupe and the check
//     goes with it; **तत्पश्चात ⊃ nothing, and तत्काल ⊃ nothing — काल is not a
//     front** — both re-checked 2026-10-06.)*
// RETROFLEX/DENTAL (§1b): no new collision. सहित sahit, अन्यथा anyathaa, तथा
// tathaa, तथापि tathaapi, परंतु parantu, किंतु kintu, अपितु apitu, तत्पश्चात
// tatpashchaat, तत्काल tatkaal, प्राप्त praapt, निर्धारित nirdhaarit and खेद khed are
// all DENTAL त/थ/द with no retroflex twin in the corpus. The doubling hatch fires
// nowhere in this unit. GEMINATION: विरुद्ध viruddh doubles the DENTAL द/ध, and
// उल्लेख ullekh doubles the ल.
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
        { id: "hi-u83l1-tathaa", type: "vocab", front: "तथा", reading: "tathaa", meaning: "and, in formal writing", accept: ["and, as a newspaper writes it", "the written-register and"], example: { jp: "अर्ज़ी में नाम तथा पता दोनों साफ़ लिखिए।", en: "Write both the name and the address clearly on the petition." }, drill: { jp: "नाम तथा पता साफ़ लिखिए", en: "Write the name and the address clearly" }, hint: "TA-THAA, a CONJUNCTION with no gender, both letters DENTAL. ⚠️ It means exactly what और (unit 2) means, and the gloss says 'in formal writing' IN WORDS because `normalizeMeaning` strips parentheses — 'and (formal)' would normalise to 'and' and answer और's card. Nobody says तथा aloud." },
        { id: "hi-u83l1-athavaa", type: "vocab", front: "अथवा", reading: "athavaa", meaning: "or, in formal writing", accept: ["or, as an official notice writes it", "the written-register or"], example: { jp: "यह काम आज अथवा कल पूरा होगा।", en: "This work will be completed today or tomorrow." }, drill: { jp: "यह काम आज अथवा कल पूरा होगा", en: "This work will be completed today or tomorrow" }, hint: "A-THA-VAA, a CONJUNCTION, DENTAL थ. The formal twin of या (unit 22). ⚠️ You will meet it on every form in India, offering you two ways to do a thing, and you will never hear it in a shop." },
        { id: "hi-u83l1-parantu", type: "vocab", front: "परंतु", reading: "parantu", meaning: "but, in formal writing", accept: ["but, as a written report puts it", "the written-register but"], example: { jp: "अर्ज़ी समय पर आई परंतु दस्तखत नहीं थे।", en: "The petition came on time but there was no signature." }, drill: { jp: "अर्ज़ी समय पर आई परंतु दस्तखत नहीं थे", en: "The petition came on time but had no signature" }, hint: "PA-RAN-TU, a CONJUNCTION. Its ं sits before DENTAL त, a stop, so §1's homorganic rule still gives n. The formal twin of लेकिन (unit 22) — and किंतु beside it is the SECOND formal 'but', which is why the two glosses had to differ in a word." },
        { id: "hi-u83l1-kintu", type: "vocab", front: "किंतु", reading: "kintu", meaning: "yet, in formal writing", accept: ["and yet, as a written argument puts it", "however, in the written register"], example: { jp: "आदेश आ गया किंतु काम शुरू नहीं हुआ।", en: "The order came, yet the work did not start." }, drill: { jp: "आदेश आ गया किंतु काम शुरू नहीं हुआ", en: "The order came yet the work did not start" }, hint: "KIN-TU, a CONJUNCTION, DENTAL त. ⚠️ परंतु and किंतु are near-identical in use, and they are glossed 'but' and 'yet' so that the two prompts cannot answer each other. In practice किंतु carries a little more contrast — a writer uses it where he is about to object." },
        { id: "hi-u83l1-apitu", type: "vocab", front: "अपितु", reading: "apitu", meaning: "but rather, in formal writing", accept: ["on the contrary, as a written argument puts it", "the written-register but rather"], example: { jp: "यह अर्ज़ी शिकायत नहीं अपितु एक सुझाव है।", en: "This petition is not a complaint but rather a suggestion." }, drill: { jp: "यह अर्ज़ी शिकायत नहीं अपितु सुझाव है", en: "This petition is not a complaint but rather a suggestion" }, hint: "A-PI-TU, a CONJUNCTION with no gender, DENTAL त. The formal twin of बल्कि (unit 39). ⚠️ It is a CORRECTING 'but', not a contrasting one: the clause before it says what a thing is NOT, and अपितु says what it IS — so it never stands where परंतु or किंतु would. That is the one thing about it a learner has to be told." },
        { id: "hi-u83l1-yadyapi", type: "vocab", front: "यद्यपि", reading: "yadyapi", meaning: "although, in formal writing", accept: ["even though, as a report puts it", "the written-register although"], example: { jp: "यद्यपि जाँच हो गई फिर भी स्वीकृति बाकी है।", en: "Although the examination is done, the approval is still awaited." }, drill: { jp: "यद्यपि जाँच हो गई स्वीकृति बाकी है", en: "Although the examination is done, approval is awaited" }, hint: "YAD-YA-PI, a CONJUNCTION. The द्य is DENTAL द and य stacked. The formal twin of हालाँकि (unit 39). ⚠️ Its partner in the second clause is तथापि (l2) in the highest register and फिर भी in ordinary writing." },
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
        { id: "hi-u83l2-anusaar", type: "vocab", front: "अनुसार", reading: "anusaar", meaning: "according to, in formal writing", accept: ["as laid down by, in an official text", "the written-register according to"], example: { jp: "नियम के अनुसार हर अर्ज़ी की जाँच होती है।", en: "According to the rule every petition is examined." }, drill: { jp: "नियम के अनुसार हर अर्ज़ी की जाँच होगी", en: "According to the rule every petition will be examined" }, hint: "A-NU-SAAR, a POSTPOSITION with no gender, and like मुताबिक (unit 65) it takes के. ⚠️ Same meaning, different register: a form says नियम के अनुसार and a shopkeeper says नियम के मुताबिक. Hindi runs two vocabularies side by side and this lesson is twelve pairs of them." },
        { id: "hi-u83l2-viruddh", type: "vocab", front: "विरुद्ध", reading: "viruddh", meaning: "against, in formal writing", accept: ["in opposition to, as a court writes it", "the written-register against"], example: { jp: "यह आदेश कानून के विरुद्ध है।", en: "This order is against the law." }, drill: { jp: "यह आदेश कानून के विरुद्ध है", en: "This order is against the law" }, hint: "VI-RUDDH, a POSTPOSITION taking के, like खिलाफ (unit 79). The द्ध is DENTAL द and ध stacked and doubled — say it as one heavy consonant. ⚠️ A Hindi court writes विरुद्ध and a Hindi speaker says खिलाफ; a newspaper headline will use either." },
        { id: "hi-u83l2-sahit", type: "vocab", front: "सहित", reading: "sahit", meaning: "including, in formal writing", accept: ["together with, as an official list puts it", "the written-register including"], example: { jp: "सभी कागज़ सहित अर्ज़ी जमा करें।", en: "Submit the petition including all the papers." }, drill: { jp: "सभी कागज़ सहित अर्ज़ी जमा करें", en: "Submit the petition with all the papers" }, hint: "SA-HIT, a POSTPOSITION, DENTAL त. ⚠️ Like समेत (unit 79) it takes NOTHING and FOLLOWS its noun: कागज़ सहित. Same position, same meaning, different register — and this is the pair where the two words are closest in shape as well." },
        { id: "hi-u83l2-anyathaa", type: "vocab", front: "अन्यथा", reading: "anyathaa", meaning: "otherwise, in formal writing", accept: ["failing which, as a notice warns", "the written-register otherwise"], example: { jp: "समय पर अर्ज़ी भेजिए अन्यथा वह वापस होगी।", en: "Send the petition on time, otherwise it will come back." }, drill: { jp: "समय पर अर्ज़ी भेजिए अन्यथा वह वापस होगी", en: "Send the petition on time, otherwise it goes back" }, hint: "AN-YA-THAA, a CONJUNCTION, DENTAL थ. The न्य is न and य stacked, as in न्योता (unit 82). The formal twin of वरना (unit 39). ⚠️ This is the word on every Indian official warning: do X अन्यथा Y will happen." },
        { id: "hi-u83l2-tathaapi", type: "vocab", front: "तथापि", reading: "tathaapi", meaning: "nevertheless", accept: ["even so, in the written register", "and in spite of that"], example: { jp: "स्वीकृति मिल गई तथापि काम रुका रहा।", en: "The approval came; nevertheless the work stayed stopped." }, drill: { jp: "स्वीकृति मिल गई तथापि काम रुका रहा", en: "Approval came; nevertheless the work stayed stopped" }, hint: "TA-THAA-PI, a CONJUNCTION, both DENTAL. ⚠️ It CONTAINS तथा (l1) and the match CANNOT fire, because the letter after it is प — `findWholeWord` is blocked by a letter, not by a mātrā. Its everyday twin फिर भी is not carded anywhere in Hindi; that is a named gap." },
        { id: "hi-u83l2-tatpashchaat", type: "vocab", front: "तत्पश्चात", reading: "tatpashchaat", meaning: "after that, in formal writing", accept: ["thereafter, as an official account puts it", "the written-register after that"], example: { jp: "जाँच पूरी हुई तत्पश्चात स्वीकृति दी गई।", en: "The examination was completed; after that approval was given." }, drill: { jp: "जाँच पूरी हुई तत्पश्चात स्वीकृति दी गई", en: "The examination finished; after that approval was given" }, hint: "TAT-PASH-CHAA-T, a CONJUNCTION, DENTAL त at both ends. तत् (that) plus पश्चात (after). ⚠️ The formal twin of उसके बाद, which the course teaches as बाद (unit 12) with a postposition: a report writes तत्पश्चात where a speaker says उसके बाद, and it is the word that carries an official narrative from one step to the next." },
      ],
    },
    {
      id: "hi-u83l3",
      unit: 83,
      lesson: 3,
      title: "The register word for an everyday one",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Read an official sentence: say necessary, received, available and at once in the written register, call a thing laid down in advance, and make a mention of it.",
      items: [
        { id: "hi-u83l3-aavashyak", type: "vocab", front: "आवश्यक", reading: "aavashyak", meaning: "necessary, in the official register", accept: ["required, as an official text puts it", "the written-register necessary"], example: { jp: "अर्ज़ी पर दस्तखत आवश्यक हैं अन्यथा वह वापस होगी।", en: "A signature is necessary on the petition, otherwise it will come back." }, drill: { jp: "अर्ज़ी पर दस्तखत आवश्यक हैं", en: "A signature is necessary on the petition" }, hint: "AA-VASH-YAK — ⚠️ INVARIANT (unit53 rule): आवश्यक कागज़, आवश्यक जाँच. The श्य is श and य stacked. ⚠️ **IT IS THE REGISTER TWIN OF ज़रूरी (unit 19)**, which is why the gloss names the register: a plain ‘necessary’ would answer ज़रूरी’s card through `normalizeMeaning`. A notice says आवश्यक and nobody says it in a shop." },
        { id: "hi-u83l3-praapt", type: "vocab", front: "प्राप्त", reading: "praapt", meaning: "received, in the official register", accept: ["duly received, as a receipt puts it", "the written-register received"], example: { jp: "आपकी अर्ज़ी हमें समय पर प्राप्त हुई है।", en: "Your petition has been received by us on time." }, drill: { jp: "आपकी अर्ज़ी हमें प्राप्त हुई है", en: "Your petition has been received by us" }, hint: "PRAAPT — ⚠️ INVARIANT, and it lives in TWO FRAMES and no others: प्राप्त होना, to be received, and प्राप्त करना, to obtain. The प्र is प with र stacked under it and the प्त is प with a DENTAL त. ⚠️ **IT IS THE REGISTER TWIN OF मिलना (unit 8)**: an office writes अर्ज़ी प्राप्त हुई where a person says अर्ज़ी मिल गई." },
        { id: "hi-u83l3-uplabdh", type: "vocab", front: "उपलब्ध", reading: "uplabdh", meaning: "to be had, in the official register", accept: ["available, as an official notice puts it", "there to be got, in the written register"], example: { jp: "यह सुविधा सब नागरिकों के लिए उपलब्ध है।", en: "This facility is available for all citizens." }, drill: { jp: "यह सुविधा सब के लिए उपलब्ध है", en: "This facility is available for everybody" }, hint: "UP-LABDH — ⚠️ INVARIANT: उपलब्ध कागज़, उपलब्ध सुविधा. The ब्ध is ब and ध stacked and said as one heavy breathy consonant. ⚠️ Its everyday twin is the plain मिलता है — यह दवा मिलती है — and a notice writes यह दवा उपलब्ध है. The frame is X उपलब्ध है, never X को उपलब्ध है." },
        { id: "hi-u83l3-tatkaal", type: "vocab", front: "तत्काल", reading: "tatkaal", meaning: "at once, in the official register", accept: ["with immediate effect, as an order puts it", "the written-register at once"], example: { jp: "यह आदेश तत्काल लागू होगा।", en: "This order will take effect at once." }, drill: { jp: "यह आदेश तत्काल लागू होगा", en: "This order will take effect at once" }, hint: "TAT-KAAL, an ADVERB with no gender, DENTAL त twice over — तत् (that) plus काल (time), ‘at that very time’. ⚠️ **IT IS THE REGISTER TWIN OF फ़ौरन (unit 38)**, which is why the gloss names the register, and in India a railway booking window is literally labelled तत्काल. ⚠️ Not अभी (unit 30), ‘right now’, which is about the clock rather than about an order taking effect." },
        { id: "hi-u83l3-nirdhaarit", type: "vocab", front: "निर्धारित", reading: "nirdhaarit", meaning: "laid down in advance", accept: ["fixed beforehand by an authority", "prescribed"], example: { jp: "अर्ज़ी निर्धारित समय में भेजनी पड़ती है।", en: "The petition has to be sent within the laid-down time." }, drill: { jp: "अर्ज़ी निर्धारित समय में भेजनी पड़ती है", en: "The petition must be sent within the set time" }, hint: "NIR-DHAA-RIT — ⚠️ INVARIANT: निर्धारित समय, निर्धारित जगह. The र् is र with a halant, drawn as the hook over the ध, which is DENTAL and breathy. ⚠️ Its everyday twin is तय (unit 39), settled, and the difference is WHO settled it: a तय is agreed between people, a निर्धारित is laid down by an office before anybody arrives." },
        { id: "hi-u83l3-ullekh", type: "vocab", front: "उल्लेख", reading: "ullekh", meaning: "a mention made in writing", accept: ["a reference made in a text", "the naming of a thing in a document"], example: { jp: "इस आदेश में मेरे नाम का उल्लेख नहीं है।", en: "There is no mention of my name in this order." }, drill: { jp: "इस आदेश में मेरे नाम का उल्लेख नहीं है", en: "There is no mention of my name in this order" }, hint: "UL-LEKH, masculine, consonant-final: दो उल्लेख. The ल्ल is a doubled l with a halant — one l held long. ⚠️ It is the ONE NOUN in this lesson, and the one register word of the six that names a thing rather than describing one: उल्लेख करना, to make mention of. Not बताना (unit 8), to tell — an उल्लेख is in WRITING, and it is most often what a complaint says is missing." },
      ],
    },
    {
      id: "hi-u83l4",
      unit: 83,
      lesson: 4,
      title: "Writing to the office, and what it writes back",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Open and close a formal Hindi letter, make a formal submission, express regret in writing, and talk about an approval and what counts as formal.",
      items: [
        { id: "hi-u83l4-mahoday", type: "vocab", front: "महोदय", reading: "mahoday", meaning: "the salutation at the top of a formal letter", accept: ["Dear Sir, as a Hindi letter opens", "the formal written address to a man"], example: { jp: "महोदय मेरा निवेदन यह है।", en: "Dear Sir, my submission is as follows." }, drill: { jp: "महोदय मेरा निवेदन यह है", en: "Dear Sir, my submission is as follows" }, hint: "MA-HO-DAY, masculine, a FORM OF ADDRESS rather than an ordinary noun, DENTAL द. ⚠️ Glossed the long way because श्री (unit 7) is 'Mr' and जी accepts 'sir'. महोदय is WRITTEN, at the head of a letter, and never said aloud; महोदया is the feminine." },
        { id: "hi-u83l4-saadar", type: "vocab", front: "सादर", reading: "saadar", meaning: "yours respectfully", accept: ["respectfully, as a letter signs off", "with respect, in writing"], example: { jp: "अर्ज़ी के अंत में सादर लिखा जाता है।", en: "At the end of a petition 'yours respectfully' is written." }, drill: { jp: "अर्ज़ी के अंत में सादर लिखा जाता है", en: "At the end of a petition 'respectfully' is written" }, hint: "SAA-DAR, an ADVERB with no gender, DENTAL द. Built on आदर (unit 82) with the स- prefix: 'with deference'. ⚠️ It is the Hindi bottom-of-the-letter word, exactly where English puts 'Yours sincerely', and the example's लिखा जाता है is unit 80's passive." },
        { id: "hi-u83l4-nivedan", type: "vocab", front: "निवेदन", reading: "nivedan", meaning: "a formal submission", accept: ["a request put in writing to an authority", "what one respectfully puts forward"], example: { jp: "मेरा निवेदन है कि अर्ज़ी फिर से देखी जाए।", en: "My submission is that the petition be looked at again." }, drill: { jp: "मेरा निवेदन है कि अर्ज़ी फिर देखी जाए", en: "My submission is that the petition be looked at again" }, hint: "NI-VE-DAN, masculine, consonant-final, DENTAL द. ⚠️ Not विनती (unit 82), an entreaty made to a person: a निवेदन is made in writing to an office. Its frame is निवेदन है कि…, and the verb after कि goes SUBJUNCTIVE PASSIVE — देखी जाए." },
        { id: "hi-u83l4-khed", type: "vocab", front: "खेद", reading: "khed", meaning: "regret stated in a formal letter", accept: ["the formal written expression of being sorry", "regret an office puts on paper"], example: { jp: "हमें खेद है कि आपको इतनी तकलीफ़ हुई।", en: "We regret that you were put to so much discomfort." }, drill: { jp: "हमें खेद है कि आपको तकलीफ़ हुई", en: "We regret that you were put to discomfort" }, hint: "KHED, masculine, consonant-final: दो खेद. Plain ख — unit 1 §7 keeps ख़ uncarded — and DENTAL द. ⚠️ It lives in ONE FRAME: खेद है कि…, 'it is regretted that', which is how an Indian office says sorry without anybody being sorry. Not क्षमा (unit 6), which a PERSON asks for: a खेद is EXPRESSED, in writing, by an institution." },
        { id: "hi-u83l4-sviikriti", type: "vocab", front: "स्वीकृति", reading: "sviikriti", meaning: "official approval", accept: ["the office saying yes", "sanction given by an authority"], example: { jp: "आदेश के बिना स्वीकृति नहीं मिलती।", en: "Approval is not given without an order." }, drill: { jp: "अर्ज़ी की स्वीकृति अभी नहीं मिली", en: "Approval of the petition has not yet come" }, hint: "SVII-KRI-TI — ⚠️ FEMININE. It carries ृ, ऋ's MĀTRĀ, read **ri** — the fifth sighting after कृपया, दृश्य, प्राकृतिक and समृद्धि. The स्व is स and व stacked. Not इजाज़त (unit 32), which is personal permission: स्वीकृति is an office's." },
        { id: "hi-u83l4-aupchaarik", type: "vocab", front: "औपचारिक", reading: "aupchaarik", meaning: "formal", accept: ["done according to form", "official in manner"], example: { jp: "उसकी भाषा पूरी तरह औपचारिक थी।", en: "His language was wholly formal." }, drill: { jp: "उसकी भाषा पूरी तरह औपचारिक थी", en: "His language was wholly formal" }, hint: "AUP-CHAA-RIK — ⚠️ INVARIANT (unit53's rule): औपचारिक भाषा, औपचारिक चिट्ठी. The au is औ's open vowel (unit 2), with the INDEPENDENT letter because it starts the word. ⚠️ अनौपचारिक, 'informal', is deliberately NOT carded: it is this word with unit 81's अन- prefix, and building it is the point of that unit." },
      ],
    },
  ],
};
