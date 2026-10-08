// HI Unit 120 — गणित और आँकड़ों की भाषा ("The language of maths and data") — B2
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 AUTHORED BY NOBODY UNTIL 2026-10-07, for the same reason as u119 — block 2's
// brief wrongly told it that u119 and u120 were block 1's, so neither seat took
// them and both sat at their scaffold titles through the whole B2 build. Written
// by the B2 merge seat against the allocation unit98.js §C7/§C8 had already
// measured.
//
// RETHEMED, AND NOT BY ME — unit98.js §C8. The scaffold title was
// `Register 4 — written, public and institutional voice`, which is **u83
// दफ़्तरी और औपचारिक भाषा's territory restated**, and block 1 took the
// administrative vocabulary at u110 प्रशासन और मंत्रालय. The slot is empty as
// titled. **u120 → गणित और आँकड़ों की भाषा**, measured 4 taken of 18 probed
// (`scripts/qa/theme-holes-hi.txt` line 22), re-probed 5 of 18 on 2026-10-07
// against the merged corpus — गणना had gone to u134 in between. It keeps the
// slot's written-formal intent on a field nothing has spent.
//
// 🚨 WHAT u120 OWNS AND WHAT IT MUST NOT TOUCH. **u95 आकार और बनावट IS THE SHAPES
// UNIT** — आकार, वृत्त, चौकोर, त्रिकोण, रेखा, बिंदु, घेरा, व्यास, आयतन, सतह,
// चौड़ाई, गहराई are all already carded there — and **u63 तुलना और मात्रा IS THE
// QUANTITY UNIT** — गुना, औसत, अनुपात, पैमाना, सम, विषम, इकाई, अंश, घटाना,
// न्यूनतम, अधिकतम. So this unit is NOT a shapes unit and NOT a quantity unit. It
// owns exactly two things: **the NAMES OF THE OPERATIONS AND THEIR RESULTS**, and
// **the language a statistics page is written in.** Geometry gets two cards —
// the field's name and the one measurement u95 left — and that is deliberate.
//
// ⚠️ FIVE OBVIOUS CANDIDATES WERE REFUSED, EVERY ONE BY A MEASUREMENT (§C6's
// point that a theme list is not a card list). Named here so no later pass
// re-adopts one:
//   • 🚨 **जोड़ IS REFUSED — IT IS THE IMPERATIVE OF जोड़ना, to add (u60l2)**, so
//     the front would be an inflection homograph: the कड़ी/लड़ी/मानो class that
//     `front-taken.mjs` passes clean because it compares strings (unit 61 §B4).
//     The unit teaches गुणनफल/भागफल/शेषफल, the RESULTS, instead.
//   • 🚨 **भाग IS REFUSED FOR THE SAME REASON** — the imperative of भागना, to run
//     (u48l1). भागफल and भाजक carry the job.
//   • 🚨 **गुणा IS REFUSED, AND THIS IS THE मुहर/मोहर CLASS** — u63l1 already
//     teaches **गुना**, and unit 1 §1b folds ण and न together in a word reading,
//     so गुणा and गुना BOTH read `gunaa`. One lexeme, two spellings, and only the
//     reading probe sees it. The fourth instance of that class in Hindi.
//   • 🚨 **घात IS REFUSED: it reads `ghaat` and so does घाट**, a riverside step
//     already carded later in B2 — §1b folds ट and त too. **घातांक** reads
//     `ghaataank` and is free, so the exponent is taught in that form.
//   • **त्रिभुज IS REFUSED** — its gloss "a triangle" is त्रिकोण's at u95, and two
//     words for one shape is the §C2 doublet the gloss normalizer cannot carry.
//     Same verdict on **अंकगणित** ("arithmetic" is गणित's at u28) and **भिन्न**
//     ("a fraction" is अंश's at u63) and **माध्य** ("the mean" is औसत's at u63 —
//     माध्यिका is carded instead, and its gloss names the SORTING for that reason).
//   • Probed FREE 2026-10-07 and deliberately LEFT FREE for a later language or
//     pass: परिमाप, समानांतर, लंबवत, चतुर्भुज, त्रिज्या, घनमूल, स्थिरांक, प्रमेय,
//     समानुपात, सारणी, आवृत्ति, निदर्श, संभाव्यता, धनात्मक.
//
// ✅ A NOUN FROM A TAUGHT VERB IS A SECOND LEXEME AND MAY BE CARDED (CLAUDE.md's
// cross-block rule — "NOT a noun and a verb derived from it, which are two
// lexemes and may both be taught"). **घटाव is carded although घटाना, to subtract,
// is u63l4's**, and the glosses are different strings to the grader
// ("subtraction" against "subtract", since `normalizeMeaning` drops a leading
// "to "). This is NOT the जोड़/भाग case above: जोड़ is an INFLECTED FORM of the
// taught verb, घटाव is a derived noun.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4), each named in its own hint:
//   ⚠️ FEMININE: ज्यामिति · सांख्यिकी · माध्यिका · प्रायिकता.
//   ⚠️ **ज्यामिति ENDS IN A SHORT ि AND सांख्यिकी IN A LONG ी** — jyaamiti against
//   saankhyikii — and they are in different lessons for exactly that reason. The
//   short-ि class is समिति (u88l2), कृति (u91l4), उपपत्ति and व्याप्ति (u119l3).
//   MASCULINE: घटाव · गुणनफल · भागफल · भाजक · शेषफल · शून्य · पूर्णांक ·
//     दशमलव · वर्गमूल · गुणक · बीजगणित · समीकरण · चर · घातांक · कोण ·
//     बहुलक · विचलन · आरेख.
//   INVARIANT ADJECTIVES: अभाज्य · ऋणात्मक.
//   NO VERBS. **No 3rd-person exception is spent and the whole-language count is
//   still ZERO.**
//
// ⚠️ SUBSTRING TRAPS, COMPUTED WITH `findWholeWord`'s REAL BOUNDARY TEST (`/\p{L}/u`
// — a mātrā, anusvāra, halant or nukta is `\p{M}` and does NOT block a match),
// NOT BY EYE. Glyph fronts excluded: `canCloze` requires `type === "vocab"`.
//   🚨 FIRES — a taught vocab front whole-word-matches inside one of mine, and
//   every one of these is harmless ONLY because that front is not carded in this
//   unit (a card searches only its own example and drill — `findFrontInExample`,
//   src/store/cardRouting.js):
//     • **सम, even (u63l3), fires inside समीकरण** — the ी after it is a mātrā.
//     • **गम, grief (u52l2), fires inside वर्गमूल** — the ् before and ू after are
//       both marks. ✅ वर्ग and मूल themselves are BLOCKED, by म and by ग.
//     • **राय, an opinion (u30l2), fires inside प्रायिकता** — ् before, ि after.
//     • **चलन, a practice (u69l2), fires inside विचलन** — ि before, word-end after.
//     • **या, or (u22), fires inside… nothing here** — it is BLOCKED inside
//       ज्यामिति by the letter म. Noted because u119l4's मिथ्या is the opposite answer.
//   🚨 AND THE ONE THAT RUNS THE OTHER WAY — **कोण FIRES INSIDE TWO TAUGHT
//   WORDS**, त्रिकोण, a triangle (u95l1), and दृष्टिकोण, a point of view (u118l1),
//   because a mātrā stands in front of it in both. This one IS load-bearing:
//   **neither word may appear in any example or drill in this unit**, or कोण's own
//   cloze would blank the tail of the longer word and leave त्रि___ on screen.
//   Checked: neither appears. It is why कोण's example says दो रेखा.
//     • Same shape, same rule: **चर fires inside चर्चा (u61l1) and स्ट्रेचर
//       (u112l2)** — ् after it in one, े before it in the other. Neither appears
//       in this unit. चरागाह is a later unit's front and cannot appear either.
//   ✅ BLOCKED, each by a \p{L} letter on one side — checked, not assumed:
//     फल, a fruit (u4l3), inside गुणनफल (preceded by न), भागफल (by ग) and शेषफल
//     (by ष) · गुण (u68l4) inside गुणनफल (followed by न) and गुणक (by क) ·
//     गणित (u28l2) inside बीजगणित (preceded by ज) · बीज inside बीजगणित (followed
//     by ग) · वर्ग (u78l2) and मूल (u62l1) inside वर्गमूल · रेखा (u95l1) inside
//     आरेख — ✅ in fact NOT EVEN A SUBSTRING, since रेखा needs the final ा.
//   ✅ NOT A SUBSTRING, so no rule is needed: **अंक, a digit (u34l4), is NOT inside
//     पूर्णांक or घातांक.** Both join as …ा + ं + क, so the independent अ that the
//     front अंक begins with is simply not in the string. Easy to get wrong by eye.
//
// SENTENCE SCOPE — six words this unit's first draft wanted and could not use,
// because they are carded nowhere in Hindi: मान, समूह, नज़र, इकट्ठा, सारा,
// गिनती. Each sentence was rewritten (संख्या, दो जगह, एक बार देखने में, जमा,
// पूरा, गिनना). Checked with `node scripts/scope-hi.mjs 120`, not by eye.
// lang/unit/lesson are stamped in src/data/index.js.
export const HI_UNIT120 = {
  id: "hi-u120",
  lang: "hi",
  title: "गणित और आँकड़ों की भाषा",
  order: 120,
  stage: "b2",
  lessons: [
    {
      id: "hi-u120l1",
      unit: 120,
      lesson: 1,
      title: "Each operation, and what it leaves behind",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name subtraction and the three results arithmetic hands back — the product, the quotient and what will not divide — plus the divisor and zero itself.",
      items: [
        { id: "hi-u120l1-ghataav", type: "vocab", front: "घटाव", reading: "ghataav", meaning: "subtraction", accept: ["taking one number away from another"], example: { jp: "घटाव में बड़ी संख्या से छोटी संख्या कम की जाती है, और जो बचता है वही जवाब है।", en: "In subtraction the smaller number is taken off the bigger one, and whatever is left is the answer." }, drill: { jp: "घटाव में एक संख्या कम की जाती है", en: "In subtraction one number is taken away" }, hint: "GHA-TAAV, masculine, घ with a puff of air. ✅ **IT IS CARDED ALTHOUGH घटाना, to subtract, IS u63l4's** — a derived noun is a second lexeme and both may be taught, and to the grader \"subtraction\" and \"subtract\" are different strings. ⚠️ Not घटना, an event, which is a different word with the same two letters at the front." },
        { id: "hi-u120l1-gunanphal", type: "vocab", front: "गुणनफल", reading: "gunanphal", meaning: "the product", accept: ["the number multiplication gives you"], example: { jp: "पाँच और चार का गुणनफल बीस होता है, और क्रम बदलने से भी वही रहता है।", en: "The product of five and four is twenty, and it stays the same even if you swap the order." }, drill: { jp: "क्रम बदलने से गुणनफल नहीं बदलता", en: "Changing the order does not change the product" }, hint: "GU-NAN-PHAL, masculine, with a RETROFLEX ण. 🚨 **-फल IS THIS LESSON'S WHOLE HOOK**: फल is a fruit at u4l3 and here it means the result, so गुणनफल, भागफल and शेषफल are simply the three fruits of the three operations. ✅ फल is BLOCKED inside all three by the letter in front of it, and गुण (u68l4) is BLOCKED here by the न." },
        { id: "hi-u120l1-bhaagphal", type: "vocab", front: "भागफल", reading: "bhaagphal", meaning: "the quotient", accept: ["the number division gives you"], example: { jp: "बीस को चार से बाँटने पर भागफल पाँच आता है, और कुछ नहीं बचता।", en: "Dividing twenty by four the quotient comes to five, and nothing is left over." }, drill: { jp: "चार से बाँटने पर भागफल पाँच है", en: "Dividing by four the quotient is five" }, hint: "BHAAG-PHAL, masculine, भ with a puff of air. 🚨 **भाग ON ITS OWN IS REFUSED AND ALWAYS WILL BE**: it is the imperative of भागना, to run (u48l1), so the front would be an inflection homograph no string probe can catch. The unit teaches the result and the divisor instead, which is why there is no card for division itself." },
        { id: "hi-u120l1-bhaajak", type: "vocab", front: "भाजक", reading: "bhaajak", meaning: "the divisor", accept: ["the number you are dividing by"], example: { jp: "भाजक बड़ा हो तो भागफल छोटा निकलता है, क्योंकि एक ही संख्या को ज़्यादा हिस्सों में बाँटा जाता है।", en: "If the divisor is big the quotient comes out small, because the same number is being split into more parts." }, drill: { jp: "भाजक बड़ा हो तो भागफल छोटा होता है", en: "If the divisor is big the quotient is small" }, hint: "BHAA-JAK, masculine. **-अक MAKES A DOER** and this unit spends it three times — भाजक, गुणक (l2), बहुलक (l4) — so it is worth learning once as a suffix. भाज- is the same root as भागफल one card up, with the ग softened to ज." },
        { id: "hi-u120l1-sheshphal", type: "vocab", front: "शेषफल", reading: "sheshphal", meaning: "what is left over after dividing", accept: ["the part that will not divide evenly"], example: { jp: "सात को दो से बाँटने पर तीन पूरे आते हैं और शेषफल एक बचता है।", en: "Dividing seven by two, three whole ones come out and one is left over." }, drill: { jp: "दो से बाँटने पर शेषफल एक बचता है", en: "Dividing by two one is left over" }, hint: "SHESH-PHAL, masculine. 🚨 **THE GLOSS IS DELIBERATELY NOT 'THE REMAINDER'**: बाकी (u22l1) is glossed exactly that, and `normalizeMeaning` would have made the two cards one, so the grader would accept one typed answer for both (unit 1 §9). शेष means the remaining part, and in maths Hindi puts -फल on it." },
        { id: "hi-u120l1-shuunya", type: "vocab", front: "शून्य", reading: "shuunya", meaning: "zero", accept: ["the number that counts nothing"], example: { jp: "शून्य भारत से निकला, और उसके बिना आज का पूरा हिसाब रुक जाता।", en: "Zero came out of India, and without it the whole of today's reckoning would come to a stop." }, drill: { jp: "शून्य के बिना हिसाब नहीं हो सकता", en: "There can be no reckoning without zero" }, hint: "SHUU-NYA, masculine, with a LONG ू. ण्य is ण with a halant then य and the ण is RETROFLEX. ⚠️ **IT IS THE WRITTEN AND MATHEMATICAL WORD**; in speech a shopkeeper says सिफ़र, which this course does not card. The digit itself is ० and Hindi still writes it that way on an exam paper." },
      ],
    },
    {
      id: "hi-u120l2",
      unit: 120,
      lesson: 2,
      title: "The kinds a number can be",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Sort numbers by kind: a whole number, a prime, a decimal point, anything below zero, a square root, and the multiplier that scales one.",
      items: [
        { id: "hi-u120l2-puurnaank", type: "vocab", front: "पूर्णांक", reading: "puurnaank", meaning: "an integer", accept: ["a whole number with no part after the point"], example: { jp: "पूर्णांक में कोई टुकड़ा नहीं होता — तीन पूर्णांक है और तीन और आधा नहीं।", en: "An integer has no piece to it — three is an integer and three and a half is not." }, drill: { jp: "तीन पूर्णांक है और आधा नहीं", en: "Three is an integer and a half is not" }, hint: "PUUR-NAANK, masculine, LONG ू and a RETROFLEX ण. पूर्ण, complete, plus अंक, a digit (u34l4) — but ⚠️ **THE STRING अंक IS NOT INSIDE IT**: the join writes णा + ं + क, so the independent अ that अंक begins with is gone and the router cannot match it. Same answer for घातांक in lesson 3." },
        { id: "hi-u120l2-abhaajya", type: "vocab", front: "अभाज्य", reading: "abhaajya", meaning: "prime", accept: ["a number nothing but one and itself divides"], example: { jp: "सात अभाज्य है, क्योंकि उसे दो तीन या चार से बाँटा नहीं जा सकता।", en: "Seven is prime, because it cannot be divided by two, three or four." }, drill: { jp: "सात अभाज्य है और छह नहीं", en: "Seven is prime and six is not" }, hint: "A-BHAAJ-YA, an INVARIANT adjective, so it never agrees. अ-, not, plus भाज्य, divisible — the same भाज- root as भाजक and भागफल in lesson 1, which makes the whole family one piece of learning. ज्य is ज with a halant then य." },
        { id: "hi-u120l2-dashamlav", type: "vocab", front: "दशमलव", reading: "dashamlav", meaning: "a decimal point", accept: ["the dot that separates the whole from the part"], example: { jp: "दशमलव के बाद जो अंक आते हैं वे पूरे हिस्से से छोटे होते हैं।", en: "The digits that come after the decimal point are smaller than the whole part." }, drill: { jp: "दशमलव के बाद के अंक छोटे होते हैं", en: "The digits after the decimal point are small" }, hint: "DA-SHAM-LAV, masculine, all three consonants plain. ⚠️ **HINDI SAYS THE WORD WHERE ENGLISH SAYS 'POINT'** — 3.5 is read तीन दशमलव पाँच, not तीन पॉइंट पाँच — so a learner who cannot say this word cannot read a price or a score out loud." },
        { id: "hi-u120l2-rinaatmak", type: "vocab", front: "ऋणात्मक", reading: "rinaatmak", meaning: "negative", accept: ["less than zero"], example: { jp: "शून्य से नीचे की हर संख्या ऋणात्मक होती है, और उसके पहले एक छोटी रेखा लिखी जाती है।", en: "Every number below zero is negative, and a small line is written in front of it." }, drill: { jp: "शून्य से नीचे की संख्या ऋणात्मक है", en: "A number below zero is negative" }, hint: "RI-NAAT-MAK, an INVARIANT adjective. 🚨 **IT OPENS WITH THE INDEPENDENT ऋ, WHICH IS A CARDED GLYPH (u4)** — the letter, not the mātrā ृ that unit 1 §3 leaves uncarded and hinted. It reads ri, so rinaatmak and never runaatmak. ऋण is a debt, so an ऋणात्मक number is one the count owes." },
        { id: "hi-u120l2-vargmuul", type: "vocab", front: "वर्गमूल", reading: "vargmuul", meaning: "a square root", accept: ["the number that gives this one when multiplied by itself"], example: { jp: "नौ का वर्गमूल तीन है, क्योंकि तीन को तीन से गुना करने पर नौ आता है।", en: "The square root of nine is three, because multiplying three by three gives nine." }, drill: { jp: "नौ का वर्गमूल तीन होता है", en: "The square root of nine is three" }, hint: "VARG-MUUL, masculine, LONG ू. वर्ग, a class (u78l2), here a square, plus मूल, a root (u62l1) — ✅ and BOTH are BLOCKED inside it, वर्ग by the letter म and मूल by the letter ग. 🚨 But गम, grief (u52l2), FIRES inside it, because the ् in front and the ू behind are both marks — harmless only because गम is not carded in this unit." },
        { id: "hi-u120l2-gunak", type: "vocab", front: "गुणक", reading: "gunak", meaning: "a multiplier", accept: ["the number you multiply by"], example: { jp: "किसी संख्या को बड़ा करना हो तो गुणक बड़ा चुनना पड़ता है।", en: "If a number is to be made bigger, a bigger multiplier has to be chosen." }, drill: { jp: "गुणक बड़ा हो तो गुणनफल बड़ा होता है", en: "If the multiplier is big the product is big" }, hint: "GU-NAK, masculine, RETROFLEX ण, and the -अक doer-suffix again (भाजक in l1). ✅ गुण (u68l4) is BLOCKED by the letter क. 🚨 **AND गुणा IS NOT A FRONT AND CANNOT BE**: u63l1's गुना reads `gunaa` and so would गुणा, because unit 1 §1b folds ण and न in a reading — the मुहर/मोहर class. गुणक reads `gunak` and is clear of it." },
      ],
    },
    {
      id: "hi-u120l3",
      unit: 120,
      lesson: 3,
      title: "When letters stand in for numbers",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Read an equation aloud: algebra and geometry as fields, the equation itself, the unknown letter in it, the exponent above it, and the angle geometry measures.",
      items: [
        { id: "hi-u120l3-biijganit", type: "vocab", front: "बीजगणित", reading: "biijganit", meaning: "algebra", accept: ["the maths where letters stand for numbers"], example: { jp: "बीजगणित में अक्षर संख्या की जगह आ जाते हैं, और फिर उन पर भी हिसाब होता है।", en: "In algebra letters take the place of numbers, and then the reckoning is done on those too." }, drill: { jp: "बीजगणित में अक्षर संख्या की जगह आते हैं", en: "In algebra letters take the place of numbers" }, hint: "BIIJ-GA-NIT, masculine, LONG ी. बीज, a seed, plus गणित, maths (u28l2) — the maths of seeds, because a letter is a number not yet grown. ✅ Both halves are BLOCKED inside it: गणित is preceded by the letter ज and बीज is followed by the letter ग." },
        { id: "hi-u120l3-samiikaran", type: "vocab", front: "समीकरण", reading: "samiikaran", meaning: "an equation", accept: ["two sides written as equal"], example: { jp: "समीकरण के दोनों तरफ़ बराबर होना चाहिए, इसलिए एक तरफ़ कुछ जोड़ने पर दूसरी तरफ़ भी वही जोड़ना पड़ता है।", en: "Both sides of an equation have to be equal, so adding something to one side means adding the same to the other." }, drill: { jp: "समीकरण के दोनों तरफ़ बराबर होते हैं", en: "Both sides of an equation are equal" }, hint: "SA-MII-KA-RAN, masculine, RETROFLEX ण. From सम, equal (u63l3), plus the -ीकरण making-into of सशक्तिकरण and स्पष्टीकरण — literally an equalising. 🚨 सम FIRES inside it, because the ी after it is a mātrā; harmless because सम is not carded in this unit." },
        { id: "hi-u120l3-char", type: "vocab", front: "चर", reading: "char", meaning: "a variable", accept: ["the letter whose number is not yet known"], example: { jp: "समीकरण में चर वह अक्षर है, और उसकी संख्या अभी पता नहीं होती।", en: "In an equation the variable is that letter, and its number is not yet known." }, drill: { jp: "चर की संख्या अभी पता नहीं है", en: "The variable's number is not yet known" }, hint: "CHAR, masculine — TWO LETTERS, this unit's shortest front, from चलना, to move: the thing that moves while the rest stays put. 🚨 **IT FIRES INSIDE TWO TAUGHT WORDS — चर्चा (u61l1) and स्ट्रेचर (u112l2)** — the ् behind it in one and the े in front in the other are both marks. **Neither word appears anywhere in this unit**, which is the whole mitigation. ⚠️ And not चार, four — char against chaar." },
        { id: "hi-u120l3-ghaataank", type: "vocab", front: "घातांक", reading: "ghaataank", meaning: "an exponent", accept: ["the small number saying how many times to multiply"], example: { jp: "घातांक बताता है कि संख्या को अपने आप से कितनी बार गुना करना है।", en: "The exponent tells you how many times the number is to be multiplied by itself." }, drill: { jp: "घातांक बताता है कितनी बार गुना करना है", en: "The exponent tells how many times to multiply" }, hint: "GHAA-TAANK, masculine, घ with a puff of air. 🚨 **घात ALONE WAS REFUSED**: it reads `ghaat` and so does घाट, a riverside step carded later in B2, because unit 1 §1b folds ट and त in a reading. घातांक reads `ghaataank` and is clear. ⚠️ And the string अंक is NOT inside it — the join writes ता + ं + क, same as पूर्णांक in lesson 2." },
        { id: "hi-u120l3-jyaamiti", type: "vocab", front: "ज्यामिति", reading: "jyaamiti", meaning: "geometry", accept: ["the maths of shapes and the space between them"], example: { jp: "ज्यामिति में संख्या से ज़्यादा काम रेखा और आकार से पड़ता है।", en: "In geometry you deal with lines and shapes more than with numbers." }, drill: { jp: "ज्यामिति रेखा और आकार का हिसाब है", en: "Geometry is the reckoning of lines and shapes" }, hint: "JYAA-MI-TI, feminine, and ⚠️ **IT ENDS IN A SHORT ि** — jyaamiti, never -ii. The short-ि class is समिति (u88l2), कृति (u91l4), उपपत्ति and व्याप्ति (u119l3). ज्य is ज with a halant then य. ✅ या (u22l1) is BLOCKED inside it by the letter म — the opposite answer to मिथ्या at u119l4. ⚠️ The SHAPES are u95's, not this unit's." },
        { id: "hi-u120l3-kon", type: "vocab", front: "कोण", reading: "kon", meaning: "the angle between two lines", accept: ["how far one line has turned from another"], example: { jp: "दो रेखा जहाँ मिलती हैं वहाँ एक कोण बनता है, और उसे नापा जा सकता है।", en: "Where two lines meet an angle is formed, and it can be measured." }, drill: { jp: "दो रेखा के बीच एक कोण बनता है", en: "An angle is formed between two lines" }, hint: "KON, masculine, with a RETROFLEX ण. 🚨 **IT FIRES INSIDE त्रिकोण, a triangle (u95l1), AND दृष्टिकोण, a point of view (u118l1)** — a mātrā stands in front of it in both — so **neither word may appear in this unit's sentences**, and that is why the example says दो रेखा and not त्रिकोण. ⚠️ Also not कोना, a corner (u15l1), whose gloss is already \"an angle\" — which is why this card's gloss names the two lines instead." },
      ],
    },
    {
      id: "hi-u120l4",
      unit: 120,
      lesson: 4,
      title: "What a pile of figures is saying",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Read a statistics page: statistics as a subject, the middle value, the commonest value, probability, how spread out the numbers are, and the diagram that shows all of it.",
      items: [
        { id: "hi-u120l4-saankhyikii", type: "vocab", front: "सांख्यिकी", reading: "saankhyikii", meaning: "statistics", accept: ["the subject that reads what a pile of figures says"], example: { jp: "सांख्यिकी आँकड़े जमा करने का नाम नहीं है — वह उन्हें पढ़ने का तरीका है।", en: "Statistics is not the name for collecting figures — it is the method of reading them." }, drill: { jp: "सांख्यिकी आँकड़े पढ़ने का तरीका है", en: "Statistics is the method of reading figures" }, hint: "SAAN-KHYI-KII, feminine, and ⚠️ **IT ENDS IN A LONG ी** — the opposite of ज्यामिति in lesson 3, which is why the two are in different lessons. ख्य is ख with a halant then य and the ख carries a puff of air. ⚠️ Not आँकड़े (u87l3), which are the figures themselves: सांख्यिकी is what you do to them." },
        { id: "hi-u120l4-maadhyikaa", type: "vocab", front: "माध्यिका", reading: "maadhyikaa", meaning: "the middle value when numbers are in order", accept: ["the number standing exactly in the middle of a sorted list"], example: { jp: "माध्यिका के लिए पहले सब संख्या को क्रम में रखना पड़ता है, और फिर बीच वाली चुननी होती है।", en: "For the median you first have to put all the numbers in order, and then pick the middle one." }, drill: { jp: "माध्यिका क्रम में बीच वाली संख्या है", en: "The median is the middle number in order" }, hint: "MAA-DHYI-KAA, feminine. 🚨 **THE GLOSS NAMES THE SORTING ON PURPOSE**: औसत (u63l1) is already glossed \"the average\", and `normalizeMeaning` would have merged the two cards (unit 1 §9). The distinction is also the point of the word — one very large number drags the औसत and leaves the माध्यिका exactly where it was." },
        { id: "hi-u120l4-bahulak", type: "vocab", front: "बहुलक", reading: "bahulak", meaning: "the mode", accept: ["the value that turns up most often"], example: { jp: "बहुलक वह संख्या है जो सबसे ज़्यादा बार आती है, और कभी वह एक से ज़्यादा भी हो सकती है।", en: "The mode is the number that turns up most often, and sometimes there is more than one of them." }, drill: { jp: "बहुलक सबसे ज़्यादा बार आने वाली संख्या है", en: "The mode is the number that turns up most often" }, hint: "BA-HU-LAK, masculine, the -अक doer-suffix a third time (भाजक, गुणक). From बहुल, abundant. ⚠️ **THE THREE MIDDLES ARE NOW ALL TAUGHT** — औसत (u63l1), माध्यिका and बहुलक — and a Hindi statistics page names all three in one line, so a learner missing one cannot read the line." },
        { id: "hi-u120l4-praayiktaa", type: "vocab", front: "प्रायिकता", reading: "praayiktaa", meaning: "probability", accept: ["how likely a thing is, put as a number"], example: { jp: "प्रायिकता किसी बात को पक्का नहीं बताती — वह सिर्फ़ यह बताती है कि मौका कितना है।", en: "Probability does not tell you anything for certain — it only tells you how much of a chance there is." }, drill: { jp: "प्रायिकता मौके को संख्या में बदलती है", en: "Probability turns a chance into a number" }, hint: "PRAA-YIK-TAA, feminine — a -ता abstract, feminine by rule. 🚨 राय, an opinion (u30l2), FIRES inside it: the ् in front and the ि behind are both marks, so `findWholeWord` matches. Harmless because राय is not carded in this unit. ⚠️ Not संभावना (u47l2), a possibility — a प्रायिकता is a possibility with a number put on it." },
        { id: "hi-u120l4-vichalan", type: "vocab", front: "विचलन", reading: "vichalan", meaning: "deviation", accept: ["how far the numbers sit from their middle"], example: { jp: "दो जगह का औसत एक ही हो सकता है, पर विचलन बताता है कि दोनों में कितना फ़र्क है।", en: "Two places can have the same average, but the deviation tells you how much difference there is between them." }, drill: { jp: "विचलन औसत से दूरी बताता है", en: "Deviation tells the distance from the average" }, hint: "VI-CHA-LAN, masculine. वि-, aside, plus the चल- of चलना — a moving away from the middle. 🚨 चलन, a practice (u69l2), FIRES inside it, the ि in front being a mātrā and the word ending right after; चलन is not carded in this unit. ⚠️ **IT IS THE NUMBER THAT MAKES AN औसत HONEST** — the example is built to show why a mean on its own can mislead." },
        { id: "hi-u120l4-aarekh", type: "vocab", front: "आरेख", reading: "aarekh", meaning: "a diagram", accept: ["a picture that shows numbers as shapes"], example: { jp: "आरेख में आँकड़े एक बार देखने में समझ आ जाते हैं, और यही उसका पूरा काम है।", en: "In a diagram the figures are understood at a single look, and that is its whole job." }, drill: { jp: "आरेख आँकड़े को एक बार में दिखाता है", en: "A diagram shows the figures in one go" }, hint: "AA-REKH, masculine. आ- plus रेख, a line — the same root as रेखा (u95l1), which ✅ is not even a substring here, since रेखा needs its final ा. 🚨 **THE GLOSS IS NOT 'A GRAPH'**: ग्राफ़ is already a front elsewhere in Hindi and `normalizeMeaning` would have made the two cards one. This unit's last card, and the one a newspaper uses most." },
      ],
    },
  ],
};
