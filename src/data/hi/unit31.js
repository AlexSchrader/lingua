// HI Unit 31 — किसने क्या किया ("Who did what") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 1 (u31–u40), AND THE LEAD FILE FOR THE A2 BAND. Authored 2026-09-29.
// Everything in unit1.js §1–§11 still BINDS — transliteration, gender in the hint,
// -ना infinitives, the glyph decisions, the gloss rules. unit11.js carries A1
// block 2's additions and unit21.js block 3's. What follows is only what A2 adds
// or decides. BLOCKS 2 (u41–u50) AND 3 (u51–u60) READ §A1–§A8 BELOW FIRST.
//
// ═════════════════════════════════════════════════════════════════════════════
// A2 CONVENTIONS — settled by block 1 as A2 crew lead. Numbered so a later block
// can cite one.
// ═════════════════════════════════════════════════════════════════════════════
//
// A1. THE ने-ERGATIVE IS TAUGHT HERE, AND unit1.js §6's "DEFERRED" LINE IS NOW
//     CLOSED — the entry there has been rewritten in place, not appended to.
//     A1 stopped at the past COPULA (था/थी/थे/थीं, u24l1) and the INTRANSITIVE
//     perfective (u24l3's six verbs, intransitive on purpose). That left the
//     learner unable to say "I ate", which is why this is A2's first unit: every
//     unit from u32 to u60 may narrate the transitive past freely.
//     THE THREE RULES, in the order this unit teaches them:
//       1. The DOER of a completed transitive action takes ने — मैंने, उसने,
//          हमने, तुमने, आपने, उन्होंने, किसने. (l1)
//       2. The verb then agrees with the OBJECT, not the doer:
//          पिता ने मछली पकड़ी (f) · पिता ने फल बाँटे (m.pl). (l3)
//       3. With को on the object, or no object at all, the verb sits in the
//          default masculine singular: माँ ने बच्चों को बुलाया. (l1, l4)
//     WHAT STAYS OUT OF u31 ON PURPOSE: the -ता था imperfect (u38), compound
//     verbs (deferred, §A5), the subjunctive and the passive (§A5).
//
// A2. 🚨 A PAST-TENSE UNIT CANNOT PUT THE PERFECTIVE IN THE DRILL, AND THE SPLIT
//     BELOW IS THE FIX. A drill must contain its item's `front` verbatim
//     (src/data/lint.js, and `findWholeWord` in src/store/cardRouting.js), and
//     every verb front is the -ना infinitive under §5 — but a past-tense sentence
//     contains पकड़ी, not पकड़ना. Only the DRILL is constrained; `example` is not
//     read by the router at all when a drill is present (`practice()` returns
//     `drill ?? example`). SO, ON EVERY VERB CARD IN THIS UNIT:
//       • `example` carries the PERFECTIVE with ने — that is the teaching.
//       • `drill`   carries the INFINITIVE in its verbal-noun use — "X करना
//         मुश्किल है", which §5 already records as a natural free-standing Hindi
//         sentence, and which cloze and sentence:build can both take apart.
//     Verified with the real router, not by eye: 24/24 items route canCloze AND
//     canSentence. Any later block writing a tense unit uses this split.
//
// A3. ABILITY (सकना) IS CLOSED IN u32 AS A CONSTRUCTION WITH NO FRONT, AND THAT
//     IS THE SAME MECHANISM §6 USED FOR का/के/की/को. unit1.js §5 proves सकना can
//     never be a front: it only ever follows another verb's stem, so no natural
//     Hindi sentence contains the bare string सकना, so it can carry no legal
//     drill. The answer is not a 3rd-person exception — it is to teach the
//     PARADIGM in hints and examples and card the vocabulary of possibility
//     instead (मुमकिन, नामुमकिन, काबिल, हुनर, इजाज़त, मना…). See unit32.js.
//     ⚠️ CONSEQUENCE FOR SCOPE: सकता/सकती/सकते/सके/सकें are declared FREE by
//     unit32.js, exactly like का/के/की/को. They are met, never produced alone.
//     ZERO 3rd-PERSON EXCEPTIONS ARE SPENT IN HINDI AND A2 SPENDS NONE.
//
// A4. ॉ IS NOW LIVE, AS A READING-ONLY NOTE, AND unit1.js §7 EXPLICITLY LEFT THAT
//     CALL TO A2. The candra-o appears in exactly one A2 block-1 front — डॉक्टर
//     (u35l1) — and its hint teaches the mark. It reads as **o**, like ो:
//     डॉक्टर doktar. No word pair in Hindi is distinguished by ो vs ॉ, so the
//     merge costs nothing and no reading collides. क़/ख़/ग़ STAY UNCARDED AND
//     UNUSED: zero fronts in the whole language carry them and three A1 hints say
//     so out loud, so A2 writes काबिल, यकीन, मकसद, फ़र्क, आखिर, खासकर, नुकसान with
//     PLAIN क/ख/ग. ज़ and फ़ are taught (u4) and used freely.
//
// A5. WHAT A2 BLOCK 1 DELIBERATELY DID NOT TEACH, AND WHO OWNS IT NOW. Named here
//     so blocks 2 and 3 find a decision instead of a hole:
//       • COMPOUND (VECTOR) VERBS — खा लेना, कर देना, खो जाना, सो जाना. → u46,
//         whose scaffold slot is literally "compound and linked clauses". They
//         need the perfective (this unit) as a prerequisite and they are a
//         construction, not vocabulary — the same shape as §A3. खो जाना is the
//         one unit1.js named; खोना itself is already a front (u29l3).
//       • CONDITIONALS AND THE SUBJUNCTIVE — अगर…तो with होता, करूँ/करें. → u47,
//         whose slot names conditionals. अगर is a front since u1l3.
//       • COMPARISON — से ज़्यादा, सबसे. → u47, whose slot names comparison.
//       • THE PASSIVE (किया जाता है) → B1. Three interacting rules on top of the
//         ergative; no A2 syllabus needs it.
//       • उतना IS CLOSED, at u39l2, with जितना (u23l4) — see unit39.js.
//
// A6. scripts/scope-hi.mjs WAS EXTENDED, AND THE EXTENSION IS PARADIGM-ONLY.
//     A perfective-past unit is unwritable without it: derive() generated the
//     habitual -ता/-ती/-ते and the consonant-stem perfective (via ा/ी/े) but
//     NOTHING for a vowel stem, so खाया, बुलाया, उठाई and सजाए all read as out of
//     scope while देखा read as in scope — the same asymmetry block 2 fixed for
//     the consonant-final plural. FOUR additions, each a GENERATED form in the
//     standard paradigm and never a lexical guess:
//       • VOWEL-STEM PERFECTIVE — st + या / ई / ए / ईं, added only when the stem
//         ends in a vowel (बुला → बुलाया/बुलाई/बुलाए). A consonant stem is
//         untouched and keeps using ा/ी/े.
//       • FEMININE-PLURAL PERFECTIVE ीं on a consonant stem — उसने दो किताबें
//         पढ़ीं. Same class as the ी already there.
//       • THE VOWEL-STEM FAMILIAR IMPERATIVE st + ओ — जाओ, दिखाओ, लगाओ. A mātrā
//         cannot follow a mātrā, so बोलो is st + ो and a vowel stem needs the
//         INDEPENDENT ओ. A1 block 3 measured that only consonant-stem imperatives
//         generated and left the gap named; u35's instruction sentences are where it
//         came due. लो and दो (लेना, देना) are irregular and went to IRREGULAR.
//       • THE BARE STEM (कर, खा, पी, बोल) — the familiar imperative and the base
//         of every compound and of the ability construction §A3 teaches. Without
//         it "कर सकता हूँ" is out of scope in its first token.
//     IRREGULAR gained the six perfectives generation cannot reach — करना→किया,
//     होना→हुआ, जाना→गया, लेना→लिया, देना→दिया, पीना→पिया — plus छूना→छुआ, which
//     is this unit's own. Same class as नया→नई: one lexeme, forms no suffix rule
//     produces.
//     🚨 AND A FIFTH CHANGE, WHICH IS A TIGHTENING, FOUND BY AUDITING THE OTHER
//     FOUR RATHER THAN TRUSTING THEM. The widened rules licensed two REAL WORDS
//     early, because derive() cannot tell a verb from a noun ending in -ना:
//     कहना (u22) generated कहीं, whose own card is u23l3, and नाना (u10) generated
//     नाई, whose own card is u28l3 — eighteen units early. The fix is a precedence
//     rule, not an exception list: **a string that is itself a taught front is
//     licensed by its own unit and by nothing earlier.** It also caught one that
//     predates A2 entirely — the single-consonant GLYPH म (u1l2) was licensing
//     में through the consonant-final plural ें, while में's own card is u8l2.
//     MEASURED BOTH WAYS on the merged corpus, all four changes together:
//         u1–u6 band   135 → 136   (+1: the में catch above, in band sentences
//                                  that are exempt anyway — a tightening)
//         A1 u7+         0 →   0   ← the number that must be zero, unmoved
//         u31–u40       14 →   0   (the 14 were every vowel-stem perfective)
//         checked     1324 → 1372  (+48 = this unit's own sentences)
//     So it overturns no existing verdict, it flags one thing MORE rather than
//     less, and it licenses nothing but generated forms of fronts the course
//     already teaches.
//
// A7. EVERY A2 UNIT IS 4 LESSONS × EXACTLY 6 CARDS, matching all 120 A1 lessons.
//     Slot titles arrive in English from the scaffold and lint hard-errors on
//     /^Vocabulary \d+$/ — retitle in Devanagari, and RETHEME when the slot names
//     something the language or the band does not have. §A8 below lists what
//     block 1 rethemed and why.
//
// ═════════════════════════════════════════════════════════════════════════════
// A8. RETHEMED SLOTS — block 1 checked all ten and rethemed FOUR. The A2 scaffold
// repeats A1's themes almost exactly, so a slot is only worth keeping where the
// A1 corpus was MEASURED to have a hole left in it (probe: 662 vocab fronts).
// ═════════════════════════════════════════════════════════════════════════════
//   u31  "Activities and routine"  → किसने क्या किया. DUPLICATE of u12 रोज़ के काम
//        AND u26 और रोज़ के काम — the routine is taught twice already. The measured
//        hole it replaces: the corpus had **2 of 27** common transitive verbs
//        (only भरना and लिखना), because A1 deferred the ergative and u24 therefore
//        chose six INTRANSITIVE verbs on purpose. So the grammar and the
//        vocabulary hole are the same hole, and this unit closes both.
//   u36  "Nature and animals"      → रसोई और खाना. DUPLICATE of u21 जानवर और कुदरत,
//        and A2 already has a nature slot at u44 ("Nature and science", block 2).
//        Measured holes it replaces instead: **1 of 12** cooking verbs (काटना
//        only) and **2 of 14** kitchen objects (चूल्हा, बोतल) — the course could
//        name food since u13 and could not name a spoon, a plate or boiling.
//   u38  "Time and adverbs"        → पहले ऐसा होता था. Time itself is nearly full
//        (**12 of 16**: u11 owns the clock, u17 the calendar), but degree and
//        manner adverbs were **4 of 16**, and the -ता था imperfect was on A1's
//        deferred list with no A2 slot naming it. The habitual past and "how
//        often / how completely" are one topic, so they share the slot.
//   u40  "Home and household"      → कपड़े और नाप. The house is **11 of 14** full
//        (u15 owns it). Clothing was **6 of 18** and measurement **3 of 14** —
//        the wardrobe half of the household, plus how you measure what goes in it.
//   KEPT, because each was measured to have a real remainder: u32 (abstract talk
//   1/16 — u27 taught feelings, not reasoning), u33 (travel 8/18), u34 (office and
//   school 4/18), u35 (health 5/17), u37 (money 4/16), u39 (connectors 8/18).
//
// ═════════════════════════════════════════════════════════════════════════════
// THEMES SPENT BY A2 BLOCK 1 (u31–u40) — do not re-author these.
// ═════════════════════════════════════════════════════════════════════════════
//   the ने-ergative and the transitive perfective · 24 transitive verbs incl. the
//   six -आना causative twins · possibility, permission, obligation and the सकना
//   construction · reasoning words (तरीका, असर, नतीजा, फ़र्क, उदाहरण, मकसद) ·
//   rail, air and sea travel · the office and the classroom · the doctor's room ·
//   the kitchen, its tools and its verbs · bills, credit, saving and spending ·
//   degree and manner adverbs, and the -ता था imperfect · the joining words and
//   the correlative pairs · clothes, cloth and measurement
//
// ⚠️ WORD-GROUPS LEFT FOR LATER SLOTS ON PURPOSE, measured and named:
//   • ABSTRACT/OPINION is only half spent. u32 takes तरीका, असर, नतीजा, फ़र्क,
//     उदाहरण, मकसद; सबूत, दलील, विचार, खयाल, मुद्दा, राज़, हाल go to u39 and the
//     rest (तर्क, पक्ष, मिसाल…) are free for u45 or block 3's coverage slots.
//   • WINNING AND LOSING — जीतना, हारना, खेल, टीम, इनाम, मैच. **None is taught**,
//     and u45 "Culture and leisure" is the natural owner. u31 wanted जीतना and
//     dropped it because the corpus has no object to win: no खेल, no मैच, no
//     इनाम. Teach the nouns and the verbs together there.
//   • TECHNOLOGY is **5 of 13** (मोबाइल, इंटरनेट, ईमेल, तस्वीर, कैमरा all absent)
//     and belongs to u43, whose slot names it.
//   • SOCIETY/STATE is **6 of 12** (सरकार, नेता, कानून, समाज, जनता absent) → u42.
//   • WEATHER-AS-EVENT idioms that u17 and u20 recorded as lost: होना is a front
//     since u22l1, so बारिश होती है is writable now. Whoever needs it, take it.
// ─────────────────────────────────────────────────────────────────────────────
// FREE — what A2 block 1 adds to unit1.js's and unit11.js's lists. Same test:
// closed-class grammar or a proper name, met in a sentence, never produced alone.
// ─────────────────────────────────────────────────────────────────────────────
//   • THE ERGATIVE PRONOUNS — मैंने, उसने, हमने, तुमने, आपने, उन्होंने, इन्होंने,
//     इसने, किसने, जिसने. ने is already FREE; these are the same closed class as
//     इस/इन/उस/उन and मुझे/उसे/उन्हें, which unit1.js and unit11.js already
//     declared. No suffix rule generates them and no unit teaches them: this unit
//     teaches the RULE, in the hint on every card.
//   • किसी | किसे — the obliques of कोई, which is FREE since unit1.js.
//   • अपनी is already FREE; अपने too. No addition needed.
// FREE: मैंने | उसने | हमने | तुमने | आपने | उन्होंने | इन्होंने | इसने | किसने | जिसने
// FREE: किसी | किसे
export const HI_UNIT31 = {
  id: "hi-u31",
  lang: "hi",
  title: "किसने क्या किया",
  order: 31,
  stage: "a2",
  lessons: [
    {
      id: "hi-u31l1",
      unit: 31,
      lesson: 1,
      title: "Mark the doer with ने",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say who did a completed action, putting ने on the doer — मैंने, उसने, किसने — with six new verbs that take an object.",
      items: [
        { id: "hi-u31l1-pakarnaa", type: "vocab", front: "पकड़ना", reading: "pakarnaa", meaning: "to catch", accept: ["to grab", "to hold", "to seize"], example: { jp: "मेरे पिता ने कल एक बड़ी मछली पकड़ी।", en: "My father caught a big fish yesterday." }, drill: { jp: "मछली पकड़ना आसान नहीं है", en: "Catching fish is not easy" }, hint: "PA-KAR-NAA, with the curled-back ड़ of §1(c). This verb takes an object, so its past puts ने on the doer: पिता ने मछली पकड़ी. And look at the verb — मछली is feminine, so it is पकड़ी, not पकड़ा." },
        { id: "hi-u31l1-phenknaa", type: "vocab", front: "फेंकना", reading: "phenknaa", meaning: "to throw", accept: ["to toss", "to fling", "to throw away"], example: { jp: "उस बच्चे ने पत्थर नदी में फेंका।", en: "That child threw a stone into the river." }, drill: { jp: "पत्थर फेंकना अच्छी बात नहीं", en: "Throwing stones is not a good thing" }, hint: "PHENK-NAA — फ with a real puff of air, and the ं before क says it through the nose. पत्थर is masculine, so the past is फेंका." },
        { id: "hi-u31l1-khiinchnaa", type: "vocab", front: "खींचना", reading: "khiinchnaa", meaning: "to pull", accept: ["to drag", "to tug", "to draw"], example: { jp: "मैंने अपनी कुर्सी मेज़ के पास खींची।", en: "I pulled my chair over next to the table." }, drill: { jp: "यह मेज़ खींचना मुश्किल है", en: "Pulling this table is difficult" }, hint: "KHIINCH-NAA, long ii through the nose. मैंने is मैं plus ने — the I-form of the doer, and it only ever appears in a sentence like this one. कुर्सी is feminine: खींची." },
        { id: "hi-u31l1-chhuunaa", type: "vocab", front: "छूना", reading: "chhuunaa", meaning: "to touch", accept: ["to feel", "to put a hand on"], example: { jp: "बच्चे ने गरम चूल्हा छुआ और रोया।", en: "The child touched the hot stove and cried." }, drill: { jp: "गरम चूल्हा छूना ठीक नहीं", en: "Touching a hot stove is not OK" }, hint: "CHHUU-NAA. Its past is छुआ, not छूआ — the long ū shortens. One of the handful of verbs whose past you learn as a word rather than a rule." },
        { id: "hi-u31l1-maarnaa", type: "vocab", front: "मारना", reading: "maarnaa", meaning: "to hit", accept: ["to strike", "to beat", "to kill"], example: { jp: "बिल्ली ने चूहे को मारा।", en: "The cat killed the mouse." }, drill: { jp: "किसी को मारना बुरी बात है", en: "Hitting someone is a bad thing" }, hint: "MAAR-NAA. Note the object here takes को (चूहे को), and when it does the verb stops agreeing and sits in the plain masculine form: मारा. That is rule 3 of this unit." },
        { id: "hi-u31l1-bulaanaa", type: "vocab", front: "बुलाना", reading: "bulaanaa", meaning: "to call over", accept: ["to summon", "to invite", "to send for"], example: { jp: "माँ ने बच्चों को खाने के लिए बुलाया।", en: "Mum called the children over to eat." }, drill: { jp: "मुझे अपने दोस्त को बुलाना है", en: "I have to call my friend over" }, hint: "BU-LAA-NAA — calling someone TO you, not calling on a phone. Its stem ends in a vowel (बुला), so the past adds य: बुलाया, बुलाई, बुलाए." },
      ],
    },
    {
      id: "hi-u31l2",
      unit: 31,
      lesson: 2,
      title: "The transitive twin: -आना turns it around",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Turn six verbs you already know into the version where YOU do it to something else, and use them in the past with ने.",
      items: [
        { id: "hi-u31l2-uthaanaa", type: "vocab", front: "उठाना", reading: "uthaanaa", meaning: "to lift something up", accept: ["to pick up", "to raise", "to lift"], example: { jp: "उसने ज़मीन से किताब उठाई।", en: "She picked the book up off the ground." }, drill: { jp: "मेज़ से डिब्बा उठाना आसान है", en: "Lifting the box off the table is easy" }, hint: "U-THAA-NAA, retroflex ठ. You already know उठना, to get up — that is you rising. Add -आ- and it becomes something you lift: उठना → उठाना. Six verbs in this lesson work that way." },
        { id: "hi-u31l2-roknaa", type: "vocab", front: "रोकना", reading: "roknaa", meaning: "to stop something", accept: ["to halt", "to bring to a stop", "to block"], example: { jp: "पुलिस ने गाड़ी रोकी।", en: "The police stopped the car." }, drill: { jp: "बच्चों को रोकना मुश्किल होता है", en: "Stopping children is difficult" }, hint: "ROK-NAA. रुकना is the car stopping by itself; रोकना is somebody stopping it. गाड़ी is feminine, so रोकी." },
        { id: "hi-u31l2-bachaanaa", type: "vocab", front: "बचाना", reading: "bachaanaa", meaning: "to rescue", accept: ["to save", "to protect", "to save from harm"], example: { jp: "उस आदमी ने मेरे भाई को बचाया।", en: "That man saved my brother." }, drill: { jp: "अपने दोस्त को बचाना ज़रूरी है", en: "Saving your friend is essential" }, hint: "BA-CHAA-NAA. बचना (u24) is surviving; बचाना is pulling someone else out of it. The object has को here, so the verb stays बचाया." },
        { id: "hi-u31l2-giraanaa", type: "vocab", front: "गिराना", reading: "giraanaa", meaning: "to knock something down", accept: ["to drop", "to make fall", "to knock over"], example: { jp: "बच्चे ने मेज़ से किताब गिराई।", en: "The child knocked the book off the table." }, drill: { jp: "पानी गिराना अच्छा नहीं है", en: "Spilling water is not good" }, hint: "GI-RAA-NAA. गिरना (u24) is the book falling; गिराना is the child making it fall. किताब is feminine — गिराई." },
        { id: "hi-u31l2-milaanaa", type: "vocab", front: "मिलाना", reading: "milaanaa", meaning: "to mix", accept: ["to stir in", "to blend", "to add and mix"], example: { jp: "माँ ने दूध में चीनी मिलाई।", en: "Mum stirred sugar into the milk." }, drill: { jp: "चाय में चीनी मिलाना मत भूलो", en: "Do not forget to stir sugar into the tea" }, hint: "MI-LAA-NAA. मिलना (u12) is meeting; मिलाना is bringing two things together — which in a kitchen means mixing. चीनी is feminine: मिलाई." },
        { id: "hi-u31l2-sulaanaa", type: "vocab", front: "सुलाना", reading: "sulaanaa", meaning: "to put to sleep", accept: ["to send to bed", "to lay down to sleep"], example: { jp: "उसने बच्चे को बिस्तर पर सुलाया।", en: "She put the child to bed." }, drill: { jp: "बच्चे को सुलाना आसान काम नहीं", en: "Putting a child to sleep is not an easy job" }, hint: "SU-LAA-NAA, and the vowel shortens from सोना: सोना → सुलाना. You sleep; you put someone else to sleep. The last of the six twins." },
      ],
    },
    {
      id: "hi-u31l3",
      unit: 31,
      lesson: 3,
      title: "The past verb agrees with what was done",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Choose the right ending on a past verb by looking at the object — feminine, masculine or plural — not at who did it.",
      items: [
        { id: "hi-u31l3-sajaanaa", type: "vocab", front: "सजाना", reading: "sajaanaa", meaning: "to decorate", accept: ["to do up", "to dress up", "to arrange nicely"], example: { jp: "हमने अपना कमरा फूलों से सजाया।", en: "We decorated our room with flowers." }, drill: { jp: "कमरा फूलों से सजाना अच्छा लगता है", en: "Decorating a room with flowers feels nice" }, hint: "SA-JAA-NAA. कमरा is masculine singular, so सजाया. Change the object and the verb changes with it — सजाई for a feminine one, सजाए for a plural." },
        { id: "hi-u31l3-baantnaa", type: "vocab", front: "बाँटना", reading: "baantnaa", meaning: "to hand out", accept: ["to distribute", "to share out", "to divide up"], example: { jp: "माँ ने सब बच्चों को फल बाँटे।", en: "Mum handed out fruit to all the children." }, drill: { jp: "बच्चों में फल बाँटना अच्छा है", en: "Handing out fruit among the children is good" }, hint: "BAANT-NAA, nasal aa and retroflex ट. फल here is plural, so the verb is बाँटे — the -े that plural masculine objects pull. Watch it: बच्चों को is not what the verb is agreeing with." },
        { id: "hi-u31l3-naapnaa", type: "vocab", front: "नापना", reading: "naapnaa", meaning: "to measure", accept: ["to take the measure of", "to gauge"], example: { jp: "दुकानदार ने मेरे लिए कपड़ा नापा।", en: "The shopkeeper measured out cloth for me." }, drill: { jp: "यह कपड़ा नापना ज़रूरी है", en: "Measuring this cloth is essential" }, hint: "NAAP-NAA, dental न. कपड़ा is masculine singular: नापा. The noun नाप, a measurement, comes in u40." },
        { id: "hi-u31l3-sudhaarnaa", type: "vocab", front: "सुधारना", reading: "sudhaarnaa", meaning: "to correct", accept: ["to fix", "to put right", "to improve"], example: { jp: "मेरे भाई ने मेरी गलती सुधारी।", en: "My brother corrected my mistake." }, drill: { jp: "अपनी गलती सुधारना अच्छी बात है", en: "Correcting your own mistake is a good thing" }, hint: "SU-DHAAR-NAA, dental ध. गलती is feminine, so सुधारी. Compare सुधरना, to get better by itself — this is the one where somebody does the fixing." },
        { id: "hi-u31l3-bigaarnaa", type: "vocab", front: "बिगाड़ना", reading: "bigaarnaa", meaning: "to spoil", accept: ["to ruin", "to wreck", "to mess up"], example: { jp: "बारिश ने हमारा काम बिगाड़ा।", en: "The rain ruined our work." }, drill: { jp: "अच्छा खाना बिगाड़ना बुरी बात है", en: "Ruining good food is a bad thing" }, hint: "BI-GAAR-NAA, with the ड़ of §1(c). Note that बारिश — a thing, not a person — still takes ने. Any doer of a completed transitive action takes it." },
        { id: "hi-u31l3-chhaapnaa", type: "vocab", front: "छापना", reading: "chhaapnaa", meaning: "to print", accept: ["to publish", "to run off copies of"], example: { jp: "उन्होंने यह किताब पिछले साल छापी।", en: "They printed this book last year." }, drill: { jp: "यह किताब छापना महँगा काम है", en: "Printing this book is expensive work" }, hint: "CHHAAP-NAA. उन्होंने is the they-form of the doer — वे plus ने, and it is irregular enough to learn whole. किताब is feminine: छापी." },
      ],
    },
    {
      id: "hi-u31l4",
      unit: 31,
      lesson: 4,
      title: "Ask what happened, and say it never did",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Ask किसने? — who did it — and deny a completed action, where the verb drops back to its plain form.",
      items: [
        { id: "hi-u31l4-churaanaa", type: "vocab", front: "चुराना", reading: "churaanaa", meaning: "to steal", accept: ["to pinch", "to take without asking"], example: { jp: "किसने मेरा थैला चुराया?", en: "Who stole my bag?" }, drill: { jp: "किसी का पैसा चुराना बुरा काम है", en: "Stealing someone's money is a bad deed" }, hint: "CHU-RAA-NAA. किसने is the question word for the doer — कौन plus ने. You cannot ask कौन चुराया; a completed transitive action needs किसने." },
        { id: "hi-u31l4-chhipaanaa", type: "vocab", front: "छिपाना", reading: "chhipaanaa", meaning: "to hide something", accept: ["to conceal", "to put out of sight", "to keep hidden"], example: { jp: "उसने चाबी अलमारी में छिपाई।", en: "She hid the key in the cupboard." }, drill: { jp: "सच छिपाना ठीक नहीं होता", en: "Hiding the truth is never right" }, hint: "CHHI-PAA-NAA. चाबी is feminine: छिपाई. The self-version is छिपना, to be hidden — same -आ- pattern as unit 31 lesson 2." },
        { id: "hi-u31l4-kamaanaa", type: "vocab", front: "कमाना", reading: "kamaanaa", meaning: "to earn", accept: ["to make money", "to bring in"], example: { jp: "उसने पिछले साल बहुत पैसा कमाया।", en: "He earned a lot of money last year." }, drill: { jp: "काम से पैसा कमाना आसान नहीं", en: "Earning money by working is not easy" }, hint: "KA-MAA-NAA. पैसा is masculine: कमाया. The noun कमाई, the earnings, is in u37." },
        { id: "hi-u31l4-jalaanaa", type: "vocab", front: "जलाना", reading: "jalaanaa", meaning: "to light", accept: ["to set alight", "to switch on", "to burn"], example: { jp: "माँ ने रसोई में चूल्हा जलाया।", en: "Mum lit the stove in the kitchen." }, drill: { jp: "रात में चूल्हा जलाना मुश्किल है", en: "Lighting the stove at night is difficult" }, hint: "JA-LAA-NAA — used both for lighting a fire and for switching on a light. जलना is the thing burning; जलाना is you lighting it." },
        { id: "hi-u31l4-bujhaanaa", type: "vocab", front: "बुझाना", reading: "bujhaanaa", meaning: "to put out", accept: ["to extinguish", "to switch off", "to quench"], example: { jp: "ठंडे पानी ने मेरी प्यास बुझाई।", en: "The cold water quenched my thirst." }, drill: { jp: "पानी से चूल्हा बुझाना ठीक नहीं", en: "Putting the stove out with water is not right" }, hint: "BU-JHAA-NAA, aspirated झ. The opposite of जलाना, and Hindi also uses it for thirst: प्यास बुझाना. प्यास is feminine, so बुझाई." },
        { id: "hi-u31l4-pahunchaanaa", type: "vocab", front: "पहुँचाना", reading: "pahunchaanaa", meaning: "to deliver", accept: ["to drop off", "to get something there", "to take to"], example: { jp: "डाकिया ने हमारी चिट्ठी घर नहीं पहुँचाई।", en: "The postman did not deliver our letter to the house." }, drill: { jp: "चिट्ठी घर पहुँचाना उसका काम है", en: "Delivering the letter to the house is his job" }, hint: "PA-HUN-CHAA-NAA. पहुँचना (u12) is you arriving; पहुँचाना is you getting something there. And note नहीं — a denial keeps ने and keeps the agreement; only the action never happened." },
      ],
    },
  ],
};
