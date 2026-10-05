// HI Unit 61 — राय और सहमति ("Opinion and agreement") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 1 (u61–u73), AND THE LEAD FILE FOR THE B1 BAND. Authored 2026-10-05.
// Everything in unit1.js §1–§11 still BINDS — transliteration, gender in the
// hint, -ना infinitives, the glyph decisions, the gloss rules. unit11.js carries
// A1 block 2's additions, unit21.js block 3's, and unit31.js §A1–§A8 the whole of
// A2. What follows is only what B1 adds or decides.
// BLOCKS 2 (u74–u86) AND 3 (u87–u97) READ §B1–§B9 BELOW FIRST.
//
// ═════════════════════════════════════════════════════════════════════════════
// B1 CONVENTIONS — settled by block 1 as B1 crew lead. Numbered so a later block
// can cite one.
// ═════════════════════════════════════════════════════════════════════════════
//
// B1. 🚨 THE VISARGA ः IS BANNED FROM EVERY B1 FRONT, AND THIS IS THE RULE MOST
//     LIKELY TO BITE A LATER BLOCK, because the words it forbids are exactly the
//     ones a B1 connective lesson reaches for first.
//     unit1.js §7 names three things the alphabet band deliberately does not
//     card — ङ/ञ, क़/ख़/ग़, and ॉ/ऑ. **ः IS A FOURTH AND §7 NEVER NAMED IT**, so
//     it is recorded here: the visarga is taught NOWHERE in u1–u6, which means a
//     learner reaching u61 has never been shown how to decode it.
//     BANNED FRONTS, each one wanted and refused by this block:
//         अतः (hence) · संभवतः (possibly) · मुख्यतः (chiefly) · क्रमशः (gradually)
//     All four were in this block's first draft of u62, u64 and u69, and all four
//     were replaced — by नतीजतन, by मालूम and कतई, by अवधि. **The -तः adverb class
//     is closed to Hindi for the whole course** unless some later band cards the
//     mark itself, which no slot does. A later block wanting "therefore" has
//     इसलिए (u22) and नतीजतन (u62l2) and needs nothing else.
//     ⚠️ ः IS NOT MET IN A SENTENCE EITHER. Zero B1 examples and zero B1 drills
//     contain it. If you need one, card the mark first — and you have no slot to.
//
// B2. ृ (ऋ's MĀTRĀ) STAYS UNCARDED AND B1 SPENDS IT FOUR TIMES, EACH WITH A HINT.
//     unit1.js §7 left it uncarded and recorded that it "appears once, in कृपया
//     (u7l2)". That is now five times in the language: this block adds
//     **पृष्ठभूमि (u62l1) · वृद्धि (u69l4) · प्रवृत्ति (u69l4) · पुनरावृत्ति (u73l4)**.
//     Each of those four hints says the mark is ऋ's and that it reads ri.
//     The decision, so no later block re-opens it: at u61 the learner has sixty
//     units of reading behind them, and a hinted mark inside a hinted word is
//     cheaper than a glyph card in a band with no slot for one. **DO NOT add
//     Devanagari stroke data and do not card the mātrā** — unit1.js §3 forbids a
//     bare mātrā card for a reason that has not changed.
//
// B3. WHAT B1 IS, AND WHAT IT IS NOT. B1 is not A2 with longer words. It is the
//     band where the learner stops NAMING things and starts RELATING them, so
//     every one of block 1's thirteen units is organised around a RELATION rather
//     than a domain: a side taken (u61), a cause chained to an effect (u62), a
//     quantity set against another (u63), a claim held at arm's length (u64), an
//     assertion traced to a source (u65), a step inside a process (u66).
//     THE PRACTICAL CONSEQUENCE FOR AUTHORING: the vocabulary is abstract, so the
//     `example` is where the relation is actually taught and it should be a
//     two-clause sentence. The drill is still 3–8 words (RUNBOOK §4) and still
//     carries the front verbatim, which means **the drill usually cannot carry
//     the relation** — it carries the word in a frame. That split is deliberate
//     and is the same shape unit31.js §A2 used for the perfective.
//
// B4. 🚨 THE ABSTRACT GLOSS SPACE IS THE TIGHTEST RESOURCE IN THE LANGUAGE, AND
//     `lint:curriculum` WILL NOT SAVE YOU. A2 spent the obvious abstract nouns
//     (u30 बातचीत, u32 क्या मुमकिन है, u39 जोड़ने वाले शब्द, u57 सोचना और मानना), so a
//     B1 unit is authored into a half-full gloss space where every third candidate
//     collides. MEASURED on this block's first draft: **39 of 312 glosses
//     collided** through `normalizeMeaning`, and `glossCollisionWarnings` flagged
//     NONE of them — it compares the exact lowercased string, while the GRADER
//     strips `(...)`, a leading a/an/the and a leading "to ".
//     Examples this block had to re-gloss, every one of which read fine by eye:
//         निष्कर्ष "a conclusion"   → अंत (u5) already owns it
//         परिणाम  "an outcome"     → नतीजा (u32)
//         प्रभाव   "an influence"   → असर (u32); "an impact" collides too
//         औसत    "an average"     → साधारण (u19)
//         स्तर     "a level"        → बराबर (u19)
//         मात्रा    "a quantity"     → संख्या (u11)
//         जुर्माना  "a fine"          → ठीक (u4) AND अच्छा (u6)
//         महत्वाकांक्षा "ambition"     → सपना (u24)
//         निश्चय   "a resolve"      → इरादा (u57)
//         अपेक्षा   "an expectation" → उम्मीद (u27)
//         दुगना   — REFUSED OUTRIGHT: दुगुना (u45) is the SAME LEXEME, and only the
//                   gloss probe caught it, because the two spellings differ.
//     THE TOOL: `node scripts/tmp/gloss.mjs "<gloss>" ...` reimplements
//     `normalizeMeaning` and names the owner. Run it on every gloss BEFORE you
//     write the card, not after the gate. Same for fronts:
//     `node scripts/tmp/chk2.mjs <front> ...`, and readings `readchk.mjs`.
//
// B5. NO 3rd-PERSON VERB EXCEPTIONS; STILL ZERO IN THE WHOLE LANGUAGE, AND B1
//     SPENDS NONE. unit1.js §5's test was applied to five B1 candidates and
//     answered no every time: नकारना, जताना, कबूलना, सुलझाना and सँजोना all carry a
//     natural short sentence in the -ना infinitive ("इसे कबूलना मुश्किल है"), so all
//     five are headworded as infinitives like every other Hindi verb.
//     ⚠️ ONE CLASS OF B1 WORD IS ONLY EVER USED WITH होना, and it is worth naming
//     because a later block will want it: प्रतीत (u64l1) and मालूम (u64l4). They
//     ARE carded, as the BARE word, with the होना frame in the hint and in the
//     drill. **प्रतीत होना cannot be the front** — a two-word front breaks
//     `findWholeWord` in src/store/cardRouting.js, so the drill would not route.
//
// B6. GENDER IS STILL NAMED IN EVERY NOUN HINT (unit1.js §4), AND B1'S SANSKRIT
//     LOANS BREAK THE ENDING RULE MORE OFTEN THAN A2'S DID. The traps, named so a
//     later block does not guess:
//       MASCULINE DESPITE THE SHAPE: पहलू and **काफ़ी many -ऊ and -ओ nouns** —
//         पहलू, रुख, ज़ोर, गुट, निष्कर्ष, आधार, मूल, परिणाम, प्रभाव, दौर, पतन, क्षय,
//         दोष, आदेश, प्रस्ताव, खाका, अतीत, स्मारक, अवशेष, तत्व, सार, मूल्य, बोध,
//         विवेक, प्रतीक, स्तर, अनुपात, अंश, पड़ाव, दशक.
//       FEMININE AND CONSONANT-FINAL, so NOTHING in the shape says so — this is
//         the class that gets agreement wrong: **ज़िद, छाप, पहल, दर, उपज, बढ़त,
//         मात्रा is -आ (see below), घुटन, मंदी is -ी**. The genuinely unmarked ones
//         are ज़िद · छाप · पहल · दर · उपज · बढ़त · घुटन.
//       FEMININE IN -आ AGAINST THE RULE: मात्रा, अवधारणा, आलोचना, चर्चा, प्रेरणा,
//         लोककथा, किंवदंती is -ी. **मात्रा and अवधारणा are the two most likely to be
//         got wrong**, because -आ reads masculine everywhere else in the course.
//       -ति / -ती / -ता ABSTRACTS ARE ALWAYS FEMININE and B1 has nine: उत्पत्ति,
//         प्रगति, प्रवृत्ति, पुनरावृत्ति, निरंतरता, प्राथमिकता, स्थिरता, वृद्धि, सख्ती.
//
// B7. EVERY B1 UNIT IS 4 LESSONS × EXACTLY 6 CARDS, matching all 240 A1+A2
//     lessons. 24 cards per unit, no exceptions, `cefr: "B1"` on every lesson and
//     `stage: "b1"` on the unit.
//
// B8. THE THEME ALLOCATION FOR u84–u97 IS ALREADY DECIDED — DO NOT INVENT ONE.
//     Fourteen scaffold slots arrived titled "Vocabulary 1 (B1)" … "Vocabulary 14
//     (B1)", which `lint:curriculum`'s SCAFFOLD_TITLE_PATTERNS hard-errors on. At
//     A2 exactly this shape cost **104 re-authored cards across three languages**,
//     because two blocks independently rethemed generic slots into the same
//     territory and in the worst case two units shipped the identical title and 16
//     shared words. So block 1 measured the holes FIRST and allocated all fourteen
//     before authoring a single card. §B9 is the table. **Each number is
//     `taken/probed` against the real 1,440-word corpus on 2026-10-05** — not a
//     guess, and re-derivable with `scripts/tmp/chk2.mjs`.
//
// B9. RETHEMED, NARROWED AND KEPT SLOTS — the whole band, with the measurement.
//     ─── u84–u86, BLOCK 2. Deliberately the three holes ADJACENT to block 2's own
//     units, so the overlap risk sits inside one seat instead of crossing a block
//     line. A seat can see its own duplicate; it cannot see a sibling's.
//       u84 शरीर के अंदर और बाहर  0/20  ← next to its own u77 health
//       u85 अनुबंध और मोलभाव       3/16  ← next to its own u76 money
//       u86 शहर की सुविधाएँ        3/16  ← next to its own u75 environment
//     u84 IS THE LARGEST HOLE IN THE LANGUAGE: कंधा घुटना कोहनी उँगली त्वचा गला
//     छाती पीठ कमर जीभ होंठ ठुड्डी गाल भौंह नाखून एड़ी कलाई हथेली जाँघ फेफड़ा —
//     **zero of twenty**. A1+A2 taught only हाथ पैर आँख कान नाक मुँह दाँत सिर पेट
//     हड्डी खून नस बाल माथा.
//     ─── u87–u97, BLOCK 3. Eleven, none adjacent to block 1's or block 2's themes.
//       u87 विज्ञान और शोध     0/18      u93 दस्तावेज़ और रिकॉर्ड  1/16
//       u88 चुनाव और दल        2/18      u94 इमारत और सामग्री     2/18
//       u89 युद्ध और शांति      1/18      u95 आकार और बनावट      3/18
//       u90 आत्मा और नैतिकता   2/18      u96 पेशे और पद          1/16
//       u91 साहित्य और समीक्षा  3/18      u97 उच्च शिक्षा          3/16
//       u92 विदेश और प्रवास     3/16
//     ⚠️ THREE BOUNDARIES THAT MUST BE READ, OR TWO SEATS WILL CARD THE SAME WORD:
//       • u74 (block 2) owns SCREEN AND STAGE — फ़िल्म सिनेमा धारावाहिक अभिनेता
//         निर्देशक पटकथा रंगमंच नाटक मनोरंजन. **u91 owns THE WRITTEN WORK AND THE
//         GALLERY** — साहित्य अध्याय कथानक पात्र समीक्षा शैली रूपक प्रदर्शनी
//         मूर्तिकला चित्रकला संग्रहालय. Without this line both seats card अभिनेता.
//       • A2 u60 लोहा, लकड़ी और औज़ार owns the TOOLS and the materials-as-substance
//         (लोहा लकड़ी हथौड़ा आरी कील ईंट). **u94 owns the BUILDING PROCESS** —
//         निर्माण नींव खंभा छज्जा प्लास्टर ठेकेदार मचान वास्तुकार सरिया गारा टाइल.
//       • **u96 owns the JOB-TITLE NOUNS, and u66 (mine) SPENDS ZERO JOB TITLES.**
//         That is a commitment this file makes on block 1's behalf, not a
//         preference: प्रबंधक सचिव लेखाकार शोधकर्ता तकनीशियन ठेकेदार विक्रेता रसोइया
//         पायलट प्लंबर अनुवादक सलाहकार साझेदार प्रशिक्षक निरीक्षक are all u96's and
//         all still free. u66 cards प्रबंध, the abstract noun, never प्रबंधक, the
//         person.
//     ─── PRE-TITLED SLOTS u61–u83 — five flags, no deletions.
//       1. **u65 NARROWED and retitled खबर कहाँ से आई.** The scaffold's "News and
//          society" noun field is **16/18 SPENT** by A2 u44 खबर और मीडिया and u42
//          समाज और सरकार — खबर अखबार पत्रकार संपादक सुर्खी प्रसारण चैनल विज्ञापन
//          समाज सरकार नेता कानून जनता नागरिक लेख साक्षात्कार are all gone. The B1
//          layer is **3/18** and that is what the slot now teaches: where a claim
//          came from and whether it holds. Domain unchanged; cards one level up.
//       2. **u67 KEPT AS TITLED — and this is a correction of block 1's OWN probe,
//          recorded because a later seat will measure the same slot.** The first
//          measurement used A2's BASE emotion set and returned **14/18**, which
//          would have justified a retheme WRONGLY. Re-probed on the actual B1
//          fine-shade set: **3/18**. The scaffold title was right and the probe was
//          wrong. A domain is not spent because its common words are spent.
//       3. **u73 NARROWED.** Base experience/memory **13/18** (A2 u50 इलाका और
//          इतिहास, u59 जन्म से बुढ़ापे तक). The fine layer is **4/17** and the unit
//          is authored on it — the faculty of memory, the trace, the precedent.
//       4. **u68 KEPT, WITH A HARD WARNING FOR u81 (block 2).** The abstract NOUNS
//          are open (**6/18**). But **the mental VERBS are 16/18 SPENT** — A2 u57,
//          u32 and u39 took सोचना जानना समझना भूलना मानना याद अंदाज़ा तुलना उम्मीद
//          इरादा पसंद शक भरोसा ध्यान गौर कल्पना. u81 "nuance, evidentiality,
//          nominalization" will reach for exactly those and they are gone. **u81
//          must teach them as CONSTRUCTIONS with no front** — the mechanism
//          unit1.js §6 used for का/के/की/को and unit31.js §A3 used for सकना.
//       5. **u74 TIGHT at 9/18** (A2 u44 + u58 संगीत और कला). Keepable on the
//          screen/stage half; see the boundary above.
//     ─── HEALTHY, measured, no action: u61 12/18 · u62 10/18 · u63 9/18 ·
//     u64 8/18 · u66 5/18 · u69 9/18 · u70 9/18 · u71 9/18 · u72 10/18 ·
//     u75 8/18 · u76 5/18 · u77 2/18 · u78 6/18 · u82+u83 5/17.
//     ─── ALSO DECIDED: **quantity abstraction is u63's** (औसत अनुपात दर स्तर
//     पैमाना मात्रा बहुमत अल्पमत, 4/16) so no coverage slot takes it. And
//     **restaurant/nutrition (5/16) is allocated to NOBODY** — the 16th candidate
//     for 14 slots and the weakest. Spare, if a slot ever comes free.
//
// ─────────────────────────────────────────────────────────────────────────────
// THIS UNIT (u61) — राय और सहमति
// ─────────────────────────────────────────────────────────────────────────────
// Slot KEPT. Measured 12/18 on the noun field, but the field is not the point:
// A2 u30 बातचीत and u39 जोड़ने वाले शब्द carded the NOUNS of opinion (राय, सहमत,
// सलाह, वादा, तारीफ़, इनकार, मंजूर, बहस, झगड़ा, फ़ैसला, विचार, खयाल, दलील, सबूत,
// मुद्दा, तर्क) and left the MOVES untaught — coming out in favour, standing aside,
// conceding, holding out, turning a thing down flat. That is this unit.
//
// ⚠️ NINE FRONTS WANTED AND REFUSED, each named because a later block will want the
// same word:
//   TAKEN: विरोध (u42) · राय (u30) · सहमत (u30) · तर्क (u39) · दलील (u39) ·
//     मुद्दा (u39) · बहस (u30) · दावा (u44) · झगड़ा (u30).
//   DERIVATIVE-REFUSED on unit57.js's rule (the bare derivative of a taught front
//   is not a second mastery track): **सहमति** beside सहमत (u30) and **मंज़ूरी**
//   beside मंज़ूर (u30). A learner who knows सहमत already knows सहमति.
//   GLOSS-REFUSED through normalizeMeaning: **आरोप** (इलज़ाम u57 is "an
//   accusation") · **आपत्ति** (it would be a second "an objection" beside ऐतराज़
//   in the same lesson) · **दृष्टिकोण** (नज़रिया u57 is "a point of view").
//   NAMED FOR A LATER BLOCK: आपत्ति, आरोप, प्रत्युत्तर, हिमायत — all still free,
//   all blocked here only by a neighbour in THIS unit.
//
// ⚠️ ONE DERIVATIONAL PAIR SPENT ON PURPOSE, RECORDED SO THE CROSS-BLOCK CHECK
// DOES NOT READ IT AS A DEFECT. **विरोधी (l1) stands beside विरोध (u42).**
// CLAUDE.md's crew-lead rule bars a lexeme duplicate — "the SAME word in another
// form" — and explicitly does NOT bar two lexemes derived from one another.
// विरोध is the ACT (opposition) and विरोधी is the PERSON (an opponent), as
// distinct as English opposition/opponent, and no rule in scripts/scope-hi.mjs
// generates either from the other. **समर्थन and समर्थक are the same shape and were
// NOT both taken** — समर्थक was dropped and गुट carded instead, because those two
// would have sat in ONE LESSON, which is the case the check is actually for.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4), each named in its own hint:
//   ⚠️ FEMININE: आलोचना, टिप्पणी, चर्चा, प्रतिक्रिया, **ज़िद**. ज़िद is
//   CONSONANT-FINAL, so nothing in the shape says so — उसकी ज़िद पक्की थी, not पक्का.
//   And आलोचना and चर्चा are FEMININE IN -आ, against the ending rule.
//   MASCULINE: समर्थन, विरोधी, गुट, ऐतराज़, पूर्वाग्रह, पहलू, मतभेद, विवाद, रुख,
//   ज़ोर, निष्कर्ष. **पहलू is masculine despite the -ू**, and रुख, ज़ोर and गुट are
//   consonant-final masculine.
//   INVARIANT (unit53's rule): असहमत, तटस्थ, कायल, सर्वसम्मत, **राज़ी** — राज़ी does
//   NOT agree despite the -ी: राज़ी लड़का, राज़ी लड़की.
// RETROFLEX/DENTAL (unit1.js §1b): **तटस्थ tatasth is the hardest reading in the
// unit** — त DENTAL, ट RETROFLEX, स्थ dental, and all three merge to t/th. No
// dental twin exists in the corpus, so nothing collides. टिप्पणी has RETROFLEX ट
// and ण, both merged. Checked against all 1,440 readings: 0 collisions.
// LOANWORD FREE-PASS CHECK (unit1.js §9): no loanwords. Zero free passes.
export const HI_UNIT61 = {
  id: "hi-u61",
  lang: "hi",
  title: "राय और सहमति",
  order: 61,
  stage: "b1",
  lessons: [
    {
      id: "hi-u61l1",
      unit: 61,
      lesson: 1,
      title: "Taking a side",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Come out in favour of a position, say you disagree with it, name the opponent and the faction, and say you have come round — or that you are staying out of it.",
      items: [
        { id: "hi-u61l1-samarthan", type: "vocab", front: "समर्थन", reading: "samarthan", meaning: "support for a position", accept: ["backing"], example: { jp: "उसकी राय का समर्थन पूरी कक्षा ने किया, इसलिए फ़ैसला आसान हो गया।", en: "The whole class supported his opinion, so the decision became easy." }, drill: { jp: "पूरी कक्षा ने उसका समर्थन किया", en: "The whole class supported him" }, hint: "SA-MAR-THAN, masculine. The verb is करना — समर्थन करना, to come out in favour. ⚠️ Not मदद, help (unit 7): you give मदद to a PERSON and समर्थन to an IDEA. विरोध, opposition (unit 42), is its exact opposite." },
        { id: "hi-u61l1-virodhii", type: "vocab", front: "विरोधी", reading: "virodhii", meaning: "an opponent", accept: ["someone on the other side"], example: { jp: "उसके विरोधी ने इस मुद्दे पर दूसरी दलील दी, पर कोई सबूत नहीं दिया।", en: "His opponent gave a different argument on the same issue, but gave no proof." }, drill: { jp: "उसके विरोधी ने दलील दी", en: "His opponent gave an argument" }, hint: "VI-RO-DHII, masculine — a person, so the feminine is विरोधिनी. ⚠️ Built on विरोध, opposition (unit 42): विरोध is the ACT, विरोधी is the PERSON doing it. Two words, not two forms of one word." },
        { id: "hi-u61l1-gut", type: "vocab", front: "गुट", reading: "gut", meaning: "a faction", accept: ["a camp of people", "a bloc"], example: { jp: "इस मुद्दे पर दफ़्तर के लोग दो गुटों में हैं, और दोनों की दलील अलग है।", en: "On this issue the office people are in two factions, and each one's argument is different." }, drill: { jp: "दफ़्तर में दो गुट बन गए", en: "Two factions formed in the office" }, hint: "GUT, masculine, one short syllable, consonant-final. A group of people who have taken the same side inside a bigger body. ⚠️ Not टीम (unit 41), which plays together, and not भीड़ (unit 29), which is only a crowd. The oblique plural is गुटों." },
        { id: "hi-u61l1-asahmat", type: "vocab", front: "असहमत", reading: "asahmat", meaning: "not in agreement", accept: ["disagreeing"], example: { jp: "मैं इस बात से असहमत हूँ, पर आपकी दलील समझता हूँ और उसका समर्थन कर सकता हूँ।", en: "I disagree with this, but I understand your argument and could support it." }, drill: { jp: "मैं इस बात से असहमत हूँ", en: "I disagree with this" }, hint: "A-SAH-MAT, INVARIANT: असहमत आदमी, असहमत औरत. The अ- prefix negates सहमत, in agreement (unit 30) — exactly as ना- negates मुमकिन to give नामुमकिन (unit 32). The frame is X से असहमत होना, with से and never का." },
        { id: "hi-u61l1-tatasth", type: "vocab", front: "तटस्थ", reading: "tatasth", meaning: "neutral", accept: ["taking neither side"], example: { jp: "अखबार को इस झगड़े में तटस्थ रहना चाहिए और किसी एक पक्ष का नहीं होना चाहिए।", en: "A newspaper should stay neutral in this quarrel and should not belong to one side." }, drill: { jp: "अखबार को तटस्थ रहना चाहिए", en: "A newspaper should stay neutral" }, hint: "TA-TASTH, INVARIANT. ⚠️ THREE t-SOUNDS AND NO TWO ARE THE SAME LETTER: the first त is DENTAL, the ट is RETROFLEX (tongue curled back), and स्थ is स with थ stacked, dental again. All three merge to t or th in the reading — unit 1 §1b. Literally 'standing on the bank', taking neither side." },
        { id: "hi-u61l1-raazii", type: "vocab", front: "राज़ी", reading: "raazii", meaning: "willing to go along", accept: ["agreeable", "having come round"], example: { jp: "वह पहले राज़ी नहीं था, पर मेरी दलील सुनकर आखिर में राज़ी हो गया।", en: "He was not willing at first, but after hearing my argument he came round in the end." }, drill: { jp: "वह आखिर में राज़ी हो गया", en: "In the end he came round" }, hint: "RAA-ZII, INVARIANT despite the -ी: राज़ी लड़का, राज़ी लड़की. With ज़ (unit 4), never plain ज. राज़ी होना is to come round; मंज़ूर (unit 30) is to grant a request. ⚠️ Nothing to do with राज़, a secret (unit 39) — the vowel length is the whole difference." },
      ],
    },
    {
      id: "hi-u61l2",
      unit: 61,
      lesson: 2,
      title: "Objection and criticism",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Raise an objection, criticise something, offer a passing comment, name a prejudice, say you have been convinced — and turn a proposal down flat.",
      items: [
        { id: "hi-u61l2-aitraaz", type: "vocab", front: "ऐतराज़", reading: "aitraaz", meaning: "an objection raised", accept: ["an exception taken"], example: { jp: "मुझे आपकी बात से ऐतराज़ नहीं है, ऐतराज़ उस तरीके से है जो आपने चुना।", en: "I have no objection to what you say; my objection is to the method you chose." }, drill: { jp: "मुझे इस नियम पर ऐतराज़ है", en: "I have an objection to this rule" }, hint: "AI-TRAAZ, masculine, opening with the ऐ of unit 2 and closing with ज़ (unit 4). The frame is X पर ऐतराज़ होना, and the verb is करना. ⚠️ Narrower than विरोध (unit 42): an ऐतराज़ is one specific point you want changed, विरोध is opposition to the whole thing." },
        { id: "hi-u61l2-aalochnaa", type: "vocab", front: "आलोचना", reading: "aalochnaa", meaning: "criticism", accept: ["fault-finding"], example: { jp: "अच्छी आलोचना बताती है कि कहाँ गलती है और क्यों, और उसमें हमेशा कोई सुझाव होता है।", en: "Good criticism says what is wrong and why, and it always has some suggestion in it." }, drill: { jp: "उसकी आलोचना सब लोगों ने सुनी", en: "Everyone listened to his criticism carefully" }, hint: "AA-LOCH-NAA — ⚠️ FEMININE despite the -ा, one of the -ना nouns unit 57 warns about (भावना, प्रार्थना, बहाना): आलोचना कड़ी थी, not कड़ा. The reading drops the schwa after च — aalochnaa, not aalochanaa. The opposite is तारीफ़, praise (unit 30)." },
        { id: "hi-u61l2-tippanii", type: "vocab", front: "टिप्पणी", reading: "tippanii", meaning: "a comment made", accept: ["a passing observation"], example: { jp: "उसने मेरे काम पर एक छोटी टिप्पणी की, जो आलोचना नहीं थी पर सोचने को मजबूर किया।", en: "He made one small comment on my work, which was not criticism but forced me to think." }, drill: { jp: "उसने मेरे काम पर टिप्पणी की", en: "He made a comment on my work" }, hint: "TIP-PA-NII — FEMININE. ⚠️ TWO RETROFLEX LETTERS AND BOTH MERGE IN THE READING: the ट is retroflex t and the ण is retroflex n (unit 1 §1b). The प्प is a real doubled p, held. Lighter than आलोचना: a टिप्पणी is one remark, आलोचना is a judgement." },
        { id: "hi-u61l2-puurvaagrah", type: "vocab", front: "पूर्वाग्रह", reading: "puurvaagrah", meaning: "a prejudice", accept: ["a mind made up beforehand"], example: { jp: "अगर आप किसी के बारे में पूर्वाग्रह लेकर सुनेंगे तो उसकी दलील कभी नहीं समझेंगे।", en: "If you listen about someone carrying a prejudice, you will never be able to understand their argument." }, drill: { jp: "उसके मन में पूरा पूर्वाग्रह था", en: "His mind was full of prejudice" }, hint: "PUUR-VAA-GRAH, masculine, and worth saying slowly. पूर्व is 'before' and आग्रह is 'a holding', so literally a holding formed in advance. ⚠️ Not गलतफहमी, a misunderstanding (unit 57) — a गलतफहमी clears up with one sentence, a पूर्वाग्रह does not." },
        { id: "hi-u61l2-kaayal", type: "vocab", front: "कायल", reading: "kaayal", meaning: "convinced by an argument", accept: ["won over"], example: { jp: "पहले मुझे शक था, पर उसके सबूत देखकर मैं कायल हो गया।", en: "At first I had a doubt, but after seeing his proof I was convinced." }, drill: { jp: "उसके सबूत से मैं कायल हुआ", en: "His proof convinced me" }, hint: "KAA-YAL, INVARIANT: कायल आदमी, कायल औरत. The frame is कायल होना, and X का कायल होना is to be a convert to X. ⚠️ Stronger than राज़ी (lesson 1): राज़ी is agreeing to go along, कायल is actually believing it now." },
        { id: "hi-u61l2-nakaarnaa", type: "vocab", front: "नकारना", reading: "nakaarnaa", meaning: "to turn down flat", accept: ["to reject outright"], example: { jp: "उसने मेरा सुझाव बिना वजह बताए नकार दिया, और वह बात मुझे बुरी लगी।", en: "He rejected my suggestion without giving a reason, and that is the thing that felt bad to me." }, drill: { jp: "इस सुझाव को नकारना बुरा होगा", en: "Rejecting this suggestion would be wrong" }, hint: "NA-KAAR-NAA, a regular -ना verb (unit 1 §5). ⚠️ Stronger than इनकार करना, to refuse (unit 30): इनकार is saying no to a request, नकारना is throwing the whole thing out. Usually with the vector दे — नकार दिया — which unit 46 teaches as a rule." },
      ],
    },
    {
      id: "hi-u61l3",
      unit: 61,
      lesson: 3,
      title: "The shape of an argument",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Separate the aspects of a question, name a difference of opinion and a full controversy, describe someone's stance, open a discussion, and put emphasis where it belongs.",
      items: [
        { id: "hi-u61l3-pahluu", type: "vocab", front: "पहलू", reading: "pahluu", meaning: "an aspect", accept: ["one side of a question", "a facet"], example: { jp: "इस मुद्दे के दो पहलू हैं, और अखबार ने सिर्फ़ एक पहलू पर लिखा।", en: "This issue has two aspects, and the newspaper wrote about only one aspect." }, drill: { jp: "इस मुद्दे के दो पहलू हैं", en: "This issue has two aspects" }, hint: "PAH-LUU — ⚠️ MASCULINE despite the -ू, and the plural is पहलू unchanged, never पहलुएँ. One of the several faces of a single question. Not पक्ष, a side in an argument (unit 57): a पक्ष is a party that WANTS something, a पहलू is only an angle on the thing." },
        { id: "hi-u61l3-matbhed", type: "vocab", front: "मतभेद", reading: "matbhed", meaning: "a difference of opinion", accept: ["a disagreement on a point"], example: { jp: "हमारे बीच इस नियम पर मतभेद है, पर हमारी दोस्ती पर कोई असर नहीं पड़ा।", en: "There is a difference of opinion between us on this rule, but it has had no effect on our friendship." }, drill: { jp: "हमारे बीच इस पर मतभेद है", en: "There is a difference of opinion between us on this" }, hint: "MAT-BHED, masculine. मत is an opinion and भेद is a split, so literally a split of opinion. ⚠️ Milder than झगड़ा, a quarrel (unit 30), and much milder than विवाद below: a मतभेद can sit between two friends for years without anything happening." },
        { id: "hi-u61l3-vivaad", type: "vocab", front: "विवाद", reading: "vivaad", meaning: "a controversy", accept: ["a dispute in the open"], example: { jp: "छोटा मतभेद बड़ा विवाद बन गया जब अखबार ने उस पर लिखना शुरू किया।", en: "A small difference of opinion became a big controversy when the newspaper started writing about it." }, drill: { jp: "यह बात बड़ा विवाद बन गई", en: "This matter became a big controversy" }, hint: "VI-VAAD, masculine. A disagreement that has gone public and taken sides — the step above मतभेद. ⚠️ Not झगड़ा (unit 30), which is two people shouting, and not मुकदमा, a court case (unit 42), which is a विवाद that reached a judge." },
        { id: "hi-u61l3-rukh", type: "vocab", front: "रुख", reading: "rukh", meaning: "a stance", accept: ["the line someone takes", "an attitude taken"], example: { jp: "सरकार का रुख इस हफ़्ते बदल गया, और उस वजह से पूरी बहस नई हो गई।", en: "The government's stance changed this week, and for that very reason the whole debate became new." }, drill: { jp: "सरकार का रुख इस हफ़्ते बदला", en: "The government's stance changed this week" }, hint: "RUKH, masculine, consonant-final and one syllable. Plain ख, because unit 1 §7 keeps ख़ uncarded. The position someone has taken and will defend. ⚠️ Not नज़रिया, a point of view (unit 57): a नज़रिया is how you see, a रुख is what you have committed to." },
        { id: "hi-u61l3-charchaa", type: "vocab", front: "चर्चा", reading: "charchaa", meaning: "a discussion", accept: ["talk going around"], example: { jp: "कक्षा में इस किताब की चर्चा आधे घंटे चली और हर किसी ने कुछ कहा।", en: "The discussion of this book in class ran half an hour and everyone said something." }, drill: { jp: "कक्षा में इस किताब की चर्चा हुई", en: "There was a discussion of this book in class" }, hint: "CHAR-CHAA — ⚠️ FEMININE despite the -ा: चर्चा लंबी थी, not लंबा. The frame is X की चर्चा. Calmer than बहस, a heated argument (unit 30): a चर्चा is people working something out, a बहस is people trying to win. चर्चा में होना is to be the talk of the town." },
        { id: "hi-u61l3-zor", type: "vocab", front: "ज़ोर", reading: "zor", meaning: "emphasis", accept: ["stress laid on something", "force behind something"], example: { jp: "उसने अपनी पूरी दलील में एक ही बात पर ज़ोर दिया, कि सबूत नहीं है।", en: "In his whole argument he laid emphasis on one single thing, that there is no proof." }, drill: { jp: "उसने एक बात पर ज़ोर दिया", en: "He laid emphasis on this very thing" }, hint: "ZOR, masculine, with ज़ (unit 4) and never plain ज. The frame is X पर ज़ोर देना, to stress X. ⚠️ It is also physical force — ज़ोर से बोलो is 'speak up' — so: ज़ोर is pressure of any kind, and ताकत (unit 27) is only bodily strength." },
      ],
    },
    {
      id: "hi-u61l4",
      unit: 61,
      lesson: 4,
      title: "Reaching a conclusion",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "State the conclusion you drew, report someone's reaction, make a feeling known without words, own up to being wrong, name an insistence that will not shift, and say a decision was unanimous.",
      items: [
        { id: "hi-u61l4-nishkarsh", type: "vocab", front: "निष्कर्ष", reading: "nishkarsh", meaning: "a conclusion drawn", accept: ["the upshot of an argument"], example: { jp: "पूरी चर्चा के बाद हम इस निष्कर्ष पर पहुँचे कि नियम बदलना ज़रूरी है।", en: "After the whole discussion we reached the conclusion that changing the rule is necessary." }, drill: { jp: "हम इस निष्कर्ष पर पहुँचे", en: "We reached this conclusion" }, hint: "NISH-KARSH, masculine. ⚠️ TWO ष LETTERS AND BOTH READ sh (unit 1 §1a): ष्क is ष with क stacked, and the word ends in ष again. The frame is निष्कर्ष पर पहुँचना, to reach it. ⚠️ Not फ़ैसला, a decision (unit 30): a फ़ैसला is chosen, a निष्कर्ष is forced on you by the argument." },
        { id: "hi-u61l4-pratikriyaa", type: "vocab", front: "प्रतिक्रिया", reading: "pratikriyaa", meaning: "a reaction", accept: ["a response to something"], example: { jp: "सरकार के नए नियम पर जनता की प्रतिक्रिया अखबार में आई, और वह अच्छी नहीं थी।", en: "The public's reaction to the government's new rule was printed in the newspaper, and it was not good." }, drill: { jp: "जनता की प्रतिक्रिया अच्छी नहीं थी", en: "The public's reaction was not good" }, hint: "PRA-TI-KRI-YAA — FEMININE, like every -या noun in Hindi except नज़रिया (unit 57). ⚠️ The क्रि is क with the ि mātrā, NOT the ृ mark: pratikriyaa, with a full i. Not जवाब, an answer (unit 8): a जवाब answers a question, a प्रतिक्रिया is what you do when something happens to you." },
        { id: "hi-u61l4-jataanaa", type: "vocab", front: "जताना", reading: "jataanaa", meaning: "to make a feeling known", accept: ["to signal what one feels", "to convey"], example: { jp: "उसने कुछ नहीं कहा, पर अपना ऐतराज़ आँखों से जता दिया।", en: "He said nothing, but made his objection known with his face." }, drill: { jp: "अपना ऐतराज़ जताना भी ज़रूरी है", en: "Making your objection known is necessary too" }, hint: "JA-TAA-NAA, a regular -ना verb, and it always takes an object that is a FEELING: ऐतराज़ जताना, खुशी जताना, दुख जताना. ⚠️ Not बताना, to tell (unit 8): you बताना a FACT and जताना a FEELING, often without words at all." },
        { id: "hi-u61l4-kabuulnaa", type: "vocab", front: "कबूलना", reading: "kabuulnaa", meaning: "to own up to something", accept: ["to admit", "to concede a point"], example: { jp: "उसने आखिर में कबूल किया कि गलती उसकी थी और मेरी दलील ठीक थी।", en: "In the end he admitted that his estimate was wrong and my argument was right." }, drill: { jp: "अपनी गलती कबूलना आसान नहीं है", en: "Owning up to your mistake is not easy" }, hint: "KA-BUUL-NAA, a regular -ना verb with the long uu of ऊ. Plain क, because unit 1 §7 keeps क़ uncarded. ⚠️ Not मानना, to accept (unit 26), which is accepting what someone SAYS; कबूलना is admitting something about YOURSELF that you would rather not." },
        { id: "hi-u61l4-zid", type: "vocab", front: "ज़िद", reading: "zid", meaning: "an insistence", accept: ["stubborn digging-in"], example: { jp: "उसकी ज़िद के आगे कोई दलील नहीं चली, और चर्चा वहाँ रुक गई।", en: "No argument worked against his insistence, and the discussion stopped right there." }, drill: { jp: "उसकी ज़िद के आगे दलील नहीं चली", en: "No argument worked against his insistence" }, hint: "ZID — ⚠️ FEMININE AND CONSONANT-FINAL, so nothing in the shape tells you: उसकी ज़िद पक्की थी, never पक्का. With ज़ (unit 4). ज़िद करना is to keep insisting; अड़ियल, stubborn (unit 27), is the person who does it." },
        { id: "hi-u61l4-sarvasammat", type: "vocab", front: "सर्वसम्मत", reading: "sarvasammat", meaning: "agreed by everyone", accept: ["unanimous"], example: { jp: "कोई असहमत नहीं था, इसलिए फ़ैसला सर्वसम्मत था और किसी ने ऐतराज़ नहीं किया।", en: "Nobody disagreed, so the decision was unanimous and no one raised an objection." }, drill: { jp: "यह फ़ैसला सर्वसम्मत था", en: "This decision was unanimous" }, hint: "SAR-VA-SAM-MAT, INVARIANT: सर्वसम्मत फ़ैसला, सर्वसम्मत राय. सर्व is 'all' and सम्मत is 'of one mind' — the म्म is a real doubled m, held. The opposite of मतभेद (lesson 3), and the word a formal announcement uses." },
      ],
    },
  ],
};
