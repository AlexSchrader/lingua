// HI Unit 1 — वर्णमाला · १ ("The alphabet, part 1") — PRE-A1
// ─────────────────────────────────────────────────────────────────────────────
// First contact with Hindi, and with Devanagari. Hindi is an OWN-SCRIPT language,
// so Strand A is a six-unit pre-A1 band (u1–u6), not the single sounds unit a
// Latin language gets:
//     u1–u2  the 11 independent vowels and 31 consonants, as `type: "glyph"`
//            cards. Words in these two units use ONLY the inherent vowel a,
//            because no other vowel can be written until the mātrā arrive.
//     u3     मात्रा — the vowel MARKS. This is the unit that unlocks the script:
//            from here any Hindi word is writable.
//     u4     the letters left over — श ष भ झ फ, the vowel ऋ, and the four nukta
//            letters modern Hindi actually needs (ज़ फ़ ड़ ढ़).
//     u5     the two reading rules print does not tell you: nasalisation (ं ँ)
//            and the inherent a you write but never say (घर = ghar, कमरा = kamraa).
//     u6     संयुक्ताक्षर — the halant ् and the stacked conjuncts.
// A learner finishing u6 can decode any printed Hindi word aloud. Grammar is
// u22–u24's job.
//
// PRINT ONLY, AND NO TRACING. There is no stroke data for Devanagari
// (`scripts/fetch-kanjivg.mjs` is kanji-only) and none is coming, so the `trace`
// card does not route for a Devanagari glyph. That is correct, not a gap: a
// learner types Hindi, they do not hand-write it. MEASURED on this branch, on
// hi-u1l1-vowela with no clip: eligibleKinds() returns ["choice", "type:produce"]
// — no trace, no speak, no meaning card. speak and listen:* light up only when
// the merge seat voices the corpus, and `speak` additionally needs a carrier word
// in src/data/speechCarriers.js (see §11).
//
// ─────────────────────────────────────────────────────────────────────────────
// AUTHORING CONVENTIONS FOR HINDI — binding on ALL hi units, every block.
// Settled by block 1 (the crew lead) 2026-09-27. Blocks 2 and 3 read this first.
// ─────────────────────────────────────────────────────────────────────────────
//
// 1. TRANSLITERATION — `reading` IS PLAIN ASCII, AND THIS IS THE ONE SCHEME.
//    The contract requires `reading` to normalise to `[a-z]+`, and every Hindi
//    front is Devanagari, so every card carries a Latin transliteration. An
//    inconsistent scheme cannot be repaired later without changing ids, which
//    wipes mastery. Use exactly these tables and nothing else.
//
//    ⚠️ IAST / ISO-15919 IS NOT AVAILABLE AND DO NOT REACH FOR IT. Diacritics and
//    capitals are both illegal (lint's READING_CHARSET is /^[a-zāēīōū]+$/, and
//    `normalizeReading` NFD-strips combining marks anyway, so ā would fold to a
//    and long/short would collapse). LENGTH IS MARKED BY DOUBLING, which survives:
//        काम kaam ("work")  vs  कम kam ("less")   — two different words, and the
//        doubling is the only thing keeping them apart.
//
//    VOWELS (independent letter → reading; the mātrā form spells the same sound):
//        अ a    आ aa   इ i    ई ii   उ u    ऊ uu
//        ऋ ri   ए e    ऐ ai   ओ o    औ au
//
//    CONSONANTS, word readings:
//        क k    ख kh   ग g    घ gh   ङ  (deferred, §7)
//        च ch   छ chh  ज j    झ jh   ञ  (deferred, §7)
//        ट t    ठ th   ड d    ढ dh   ण n      ← RETROFLEX, merged; see (b) below
//        त t    थ th   द d    ध dh   न n
//        प p    फ ph   ब b    भ bh   म m
//        य y    र r    ल l    व v
//        श sh   ष sh   स s    ह h
//        ज़ z   फ़ f   ड़ r   ढ़ rh              ← the four nukta letters we teach
//
//    NASALISATION: ं before a stop is written as the HOMORGANIC nasal letter —
//        हिंदी hindii · अंदर andar · पंखा pankhaa · कंप्यूटर kampyuutar.
//        Word-final ं and every ँ is written n — हाँ haan · मैं main · नहीं nahiin.
//        (The one that surprises: में is "men", मैं is "main". Different words.)
//
//    THE INHERENT a IS WRITTEN AS IT IS SPOKEN, NOT AS IT IS SPELLED. Hindi
//    deletes the final schwa and syncopates many medial ones, so the reading is a
//    PRONUNCIATION, not a letter-by-letter transcription:
//        घर ghar (not ghara) · नाम naam · कमरा kamraa (not kamaraa) ·
//        लड़का larkaa (not larakaa) · आदमी aadmii (not aadamii)
//    Gemination IS doubled: अच्छा acchaa · बच्चा bacchaa · जानना jaannaa.
//
//    ⚠️ MEASURED, do not re-derive from memory: `normalizeReading(r, "hi")` is a
//    NO-OP on every reading this scheme produces (checked on 83 candidates
//    2026-09-27, including aa/ii/uu/tta/shcha). It lowercases, strips whitespace,
//    folds œ/æ/ø/ß, NFD-strips combining marks and drops apostrophes/hyphens —
//    none of which this scheme produces. So the reading you author is the reading
//    the grader compares. The ja-only "ou/oo/uu → macron" lint error
//    (src/data/lint.js:440) is scoped to `unit.lang === "ja"` and never fires here.
//
//    THREE PLACES THE SCHEME IS LOSSY. Each is deliberate; none is avoidable in
//    26 letters. AVOID THE COLLIDING PAIR rather than inventing notation:
//      (a) श and ष both → sh. Modern Hindi pronounces both [ʃ], so this loses
//          nothing a learner can hear. It is a spelling distinction only, and the
//          hint on every ष word says which letter is written.
//      (b) 🚨 RETROFLEX AND DENTAL MERGE IN WORD READINGS. ट/त → t, ठ/थ → th,
//          ड/द → d, ढ/ध → dh, ण/न → n. This is how Hindi speakers actually
//          romanise (tamatar, kitab) and it is what keeps every reading typeable.
//          The contrast is phonemic and is taught elsewhere: in the HINT of every
//          retroflex word, and in the GLYPH readings, which do not merge (§2).
//          ⚠️ IT CREATES REAL COLLISIONS AND YOU MUST CHECK FOR THEM. THE ESCAPE
//          HATCH: when a retroflex/dental pair would collide, the RETROFLEX member
//          DOUBLES its consonant, matching the glyph convention.
//              साथ saath ("with", block 1, u7l3) — DENTAL, keeps the short form.
//              साठ ("sixty") MUST therefore be authored `saatth`. It belongs to
//              u11 (block 2) and block 2 must use `saatth` or the two words are
//              one dictation card with two right answers.
//          No other block-1 pair collides; the full list of readings block 1 spent
//          is at the bottom of this header.
//      (c) ड़ → r merges with र, and ढ़ → rh. बड़ा baraa, पढ़ना parhnaa,
//          घड़ी gharii. Near-complementary in practice (ड़ is never word-initial),
//          so no block-1 pair collides — check before you add one.
//
// 2. A GLYPH'S READING IS ITS SOUND, IT IS UNIQUE ACROSS ALL HINDI GLYPHS, AND
//    IT DOES NOT MERGE THE RETROFLEXES. The glyph `choice` card offers READING
//    options and `type:produce` PROMPTS with the reading (`TypeCard.jsx` glyph
//    branch), so two glyphs sharing one reading is one card with two right
//    answers — the gloss-collision defect, for letters. So:
//      • a consonant glyph's reading is its word value PLUS its inherent a:
//        क ka · ख kha · ग ga · घ gha · च cha · छ chha · ज ja · झ jha …
//      • THE RETROFLEXES DOUBLE THE CONSONANT. A doubled letter means the tongue
//        curls back — it is the mnemonic as well as the disambiguator:
//            ट tta · ठ ttha · ड dda · ढ ddha · ण nna
//            त ta  · थ tha  · द da  · ध dha  · न na
//      • ष is ssha, against श sha. Same [ʃ] sound, different letter.
//      • the nukta glyphs are ज़ za · फ़ fa · ड़ rra · ढ़ rrha.
//      • an independent VOWEL glyph reads as its plain value: अ a … औ au.
//      • a MĀTRĀ SYLLABLE glyph (§3) reads as the whole syllable: का kaa · कि ki
//        · की kii · कु ku · कू kuu · के ke · कै kai · को ko · कौ kau.
//      • a CONJUNCT glyph reads as it is said: क्ष ksha · त्र tra · ज्ञ gya.
//    58 glyph cards, 58 distinct readings. Verified mechanically, not by eye.
//
// 3. WHAT A DEVANAGARI "LETTER CARD" IS — THE DECISION, AND WHY.
//    Devanagari is an ABUGIDA, not an alphabet: a bare consonant already carries
//    the vowel a, and the other vowels attach as mātrā (ा ि ी ु ू े ै ो ौ). That
//    gives four candidate things to card, and only two of them are cardable:
//      ✅ THE BARE CONSONANT (क, reading "ka"). It is what the varṇamālā chart
//         shows, what a keyboard key produces, and a pronounceable syllable.
//      ✅ THE INDEPENDENT VOWEL LETTER (अ आ इ …). Used word-initially, and it is
//         the shape the mātrā are derived from.
//      ❌ THE BARE MĀTRĀ (ा, ि, ं, ँ, ्). NOT a glyph card, in any unit. A mātrā
//         is not pronounceable in isolation, renders as a floating mark on a
//         dotted circle, and its "reading" would duplicate its parent vowel's
//         (ा would be "aa", which is आ's). Three of the engine's five glyph cards
//         (listen:type, speak, choice) ask for a SOUND, and a mark has none.
//      ✅ INSTEAD, THE MĀTRĀ ARE CARDED AS SYLLABLES ON ONE FAMILIAR CONSONANT —
//         का कि की कु कू के कै को कौ, all built on क, all in u3. That teaches the
//         abugida MECHANISM (consonant + mark = syllable) in the exact medium the
//         learner will read, and every reading is unique and pronounceable.
//      ✅ CONJUNCTS: only the three that Indian primers teach as letters in their
//         own right and that no learner can decompose on sight — क्ष त्र ज्ञ (u6).
//         Every other cluster is taught through words, because it IS just its
//         parts stacked.
//
// 4. NOUNS CARRY NO ARTICLE, AND GENDER GOES IN THE `hint`.
//    Hindi has no articles, so the house rule "nouns are taught with their gender
//    marker" has nothing to attach to — inventing one would be an error, not a
//    convention. The front is the BARE DIRECT SINGULAR. Gender is NAMED IN THE
//    HINT on every noun, because Hindi agreement runs off it and it is only
//    mostly predictable:
//        -आ / -ा ending        → usually MASCULINE (कमरा, लड़का, दरवाज़ा, बेटा)
//        -ई / -ी ending        → usually FEMININE  (लड़की, घड़ी, कुर्सी, बेटी)
//        consonant ending      → EITHER, and unpredictable: घर m, शहर m, किताब f,
//                                रात f, बात f, चीज़ f, दुकान f, नाम m
//    ⚠️ AND THE EXCEPTIONS THAT MATTER MOST ARE THE COMMONEST WORDS: पानी is
//    MASCULINE despite -ी; पिता, दादा, नाना, चाचा, मामा, राजा are MASCULINE
//    despite -ा. ALWAYS name the gender. Never make the learner guess it off the
//    ending.
//
// 5. VERBS ARE HEADWORDED IN THE -ना INFINITIVE, ALWAYS, WITH NO EXCEPTIONS.
//    करना, रहना, सीखना, जानना, लिखना, बोलना, समझना, देखना, मिलना, पढ़ना.
//    ⚠️ BLOCK 1 SPENT ZERO 3rd-PERSON EXCEPTIONS and none is authorised. Russian
//    allowed exactly two in its whole language and spent both deliberately; Hindi
//    has needed none, because the -ना infinitive is a natural free-standing word
//    in Hindi ("मुझे हिंदी सीखना है") and always carries a legal drill. If a later
//    block believes it needs one, the test is: the infinitive has no natural short
//    sentence a learner will ever say. Apply it, record it here, and expect the
//    answer to be no.
//    THE COPULA IS THE ONE PLACE FORMS ARE CARDED SEPARATELY, and that is not an
//    exception to the rule above — होना has no usable infinitive card at A1, so
//    its PRESENT FORMS are the cards: है (is, u3l3) · हूँ (am, u8l1) · हैं (are,
//    u8l1). Three forms, three glosses, and the infinitive होना is DEFERRED so it
//    never becomes a fourth mastery track for the same word.
//
// 6. GENDER AGREEMENT, CASE AND ASPECT — WHAT A1 TEACHES AND WHAT IS DEFERRED.
//    Hindi is SOV, uses POSTPOSITIONS (never prepositions), marks two genders and
//    three politeness levels. This is the split; u22–u24 (block 3) implement it
//    and must not exceed it:
//        DIRECT case      every noun card, always. The citation form.
//        POSTPOSITIONS    से (from) and में (in) are carded by block 1 (u8l2) as
//                         plain vocabulary, because "Where are you from" cannot be
//                         taught without them. का/के/की (of), को (to), पर (on),
//                         तक (until) belong to u23.
//        OBLIQUE case     the -ा → -े shift a postposition forces (कमरा → कमरे
//                         में). Appears in examples from u8 on; taught as a
//                         PARADIGM in u23, never before.
//        POLITENESS       तू / तुम / आप, all three carded in u8l1 with the social
//                         rule in each hint. This is not grammar to defer — get
//                         it wrong and you are rude in your first sentence.
//        GENDER AGREEMENT adjectives and verbs agreeing with the subject: u24.
//                         Adjective cards are headworded in the MASCULINE SINGULAR
//                         (बड़ा, छोटा, नया, पुराना, अच्छा) and the hint says the
//                         feminine is -ी. NEVER card both बड़ा and बड़ी — same
//                         lexeme, two mastery tracks, one gloss.
//        TENSE            present habitual and the copula only, in u1–u21.
//                         Past/perfective and the ने-ergative: u24.
//    DEFERRED PAST A1 ENTIRELY, and named here so the A2 crew finds the decision
//    rather than the gap: the ने ergative construction, the subjunctive, the
//    passive, compound verbs (कर लेना, खा जाना), और the -ता था imperfect.
//
// 7. THREE THINGS IN THE ALPHABET ARE DELIBERATELY NOT CARDED. All three are real
//    decisions, not gaps, and no later block should "fix" them:
//      • ङ and ञ. They occur in modern Hindi only inside conjuncts, and even
//        there the anusvāra has replaced them in ordinary spelling (अंक, not
//        अङ्क; पंच, not पञ्च). A learner never needs to type one. Nasalisation is
//        taught as ं in u5, which is the job these two letters would have had.
//      • क़, ख़, ग़. Perso-Arabic letters that Standard Hindi merges with क, ख, ग
//        in pronunciation, and whose glyph readings would collide with क ख घ
//        (ग़ would be "gha", which is घ). ज़ फ़ ड़ ढ़ ARE carded, because those
//        four are NOT merged — ज़ vs ज and फ़ vs फ are live distinctions.
//        A2 may teach क़ ख़ ग़ as a reading-only note.
//      • ॉ and ऑ (the candra-o, for English loans: डॉक्टर). A2's call. Every
//        u9 loanword was chosen to avoid it, which is why u9 has टिकट and मेज़
//        and no डॉक्टर. ृ (ऋ's mātrā) is likewise uncarded; it appears once, in
//        कृपया (u7l2), with the hook explained in that card's hint.
//
// 8. THE GLYPH BAND IS CUMULATIVE FOR WORD CARDS ONLY (u1–u6). A lesson's word
//    cards use only letters introduced at or before that lesson — that is the
//    whole point of teaching a script in order, and it is why u1's only words are
//    कम, मन, हम, अगर, अब and बस: the mātrā do not exist yet, so nothing but the
//    inherent a can be spelled.
//    ⚠️ `example` and `drill` SENTENCES ARE NOT LETTER-RESTRICTED AND NOT
//    VOCAB-RESTRICTED IN u1–u6. A unit that has taught six words cannot produce a
//    sentence out of six words, so the script band's sentences draw on the whole
//    A1 vocabulary the way Russian's u1 does. They are read TO the learner and met
//    again in review long after the band is done. From u7 the ordinary RUNBOOK §4
//    rule applies in full: an example uses only vocab taught at or before its unit.
//
// 9. GLOSSES ARE PROMPTS AND MUST BE UNIQUE IN HINDI.
//    ⚠️ AND THE TWO CHECKS DISAGREE, SO SATISFY BOTH. `glossCollisionWarnings`
//    (src/data/lint.js) compares the EXACT lowercased gloss, so a parenthetical
//    separates two glosses and lint goes quiet. `normalizeMeaning`
//    (src/store/answer.js:156) does NOT — it strips `(...)`, a leading a/an/the,
//    and a leading "to ". So "you (formal)" and "you (informal)" pass lint and
//    still both accept the typed answer "you".
//    THE RULE BLOCK 1 FOLLOWED AND BLOCKS 2 AND 3 MUST FOLLOW: make the glosses
//    differ in a WORD, not only in a parenthetical. Hindi's three second-person
//    pronouns are carded "you, speaking intimately" / "you, speaking casually" /
//    "you, speaking politely" for exactly this reason.
//    • A gloss must never be ONLY a parenthetical — "(the anusvāra)" normalises to
//      the empty string and the card is unanswerable. 11 Japanese particle cards
//      shipped like that for months.
//    • Watch the noun/verb pairs: "a cook" and "to cook" both normalise to "cook".
//    • ⚠️ AND A LOANWORD MUST NOT GLOSS TO ITS OWN TRANSLITERATION.
//      `checkProduce` accepts the romaji reading for any Hindi vocab item, so पेन
//      glossed "a pen" (reading "pen") would accept the answer read straight off
//      the prompt. It is carded "a ballpoint pen". Verified across all 24 u9
//      loanwords: zero free passes.
//
// 10. UNIT TITLES ARE IN HINDI (Devanagari). `src/data/lint.js` hard-errors on an
//    authored unit still wearing a scaffold working title, and THREE of Hindi's
//    stub patterns are on that list — /^Script \d+$/, /^Characters \d+$/ and the
//    plain English theme names. Lesson titles stay in English, matching ru/ · no/
//    · es/ · de/ house style.
//    ⚠️ "Characters N" IS A JAPANESE SLOT — the interleaved kanji strand — AND
//    HINDI HAS NO SUCH THING: the whole alphabet is finished by u6. There are FIVE
//    of them in the hi scaffold (u9, u12, u15, u18, u21) and every one must be
//    rethemed. Block 1 owns u9 and rethemed it to `विदेशी शब्द` — English and
//    Perso-Arabic loanwords, where the MEANING is nearly free so the lesson is
//    pure Devanagari decoding. That is the pattern for the other four.
//    ⚠️ AND A SECOND ARTEFACT: u23's scaffold title is "Grammar 2 — verbs and
//    PARTICLES". A particle is a Japanese word class (は・が・を・に・で). Hindi has
//    POSTPOSITIONS, which follow their noun and force the oblique case — a
//    different mechanism with a different name. Block 3 must retheme u23; §6 says
//    what belongs in it.
//    ⚠️ AND A THIRD: "Grammar 3 — past tense and AGREEMENT" does apply to Hindi,
//    but the agreement it names is gender agreement, which Hindi has and the
//    scaffold's source language does not. Keep the slot, write it for Hindi.
//
// 11. AUDIO AND THE SPEAK CARD — WHAT THE MERGE SEAT MUST KNOW.
//    Karan is wired (`server/companions.js`, hi → v4vv5Cuj1q4fFFkQdBm4). Block 1
//    ran NO audio: 240 new ids need clips, in one run, once the language is
//    settled.
//    ⚠️ AND A FINDING THE MERGE SEAT MUST NOT SKIP. It is written in more than one
//    place that `alignScore.js`'s NON_LATIN guard excludes Devanagari. IT DOES
//    NOT. Measured 2026-09-27: the guard's ranges are U+3040–U+30FF, U+4E00–
//    U+9FAF, U+AC00–U+D7AF, U+0400–U+04FF and U+0590–U+08FF. Devanagari is
//    U+0900–U+097F — just past the last range. `isScorableText("नमस्ते", "hi")`
//    returns **true**. So the moment the corpus is voiced,
//    `generate-speech-carriers.mjs` WILL generate Hindi carriers (it needs only a
//    clip and a 4-character front), every glyph card WILL route `speak`, and it
//    will be graded by an aligner that has never been measured on Devanagari —
//    the exact situation the Cyrillic exclusion exists to prevent. This is a
//    Feature-lane call, not a content one: it is filed in BUILD-CHECKLIST.md →
//    "Feature CC backlog" and must be decided before or with the audio run.
//
// ─────────────────────────────────────────────────────────────────────────────
// THEMES SPENT BY BLOCK 1 (u1–u10) — do not re-author these.
// ─────────────────────────────────────────────────────────────────────────────
//   the 11 vowels and 31 consonants · the mātrā · the four nukta letters ·
//   nasalisation · the silent inherent a · the halant and conjuncts ·
//   greetings, thanks and forms of address · pronouns and the politeness split ·
//   where you are from, what you do · the question words · loanwords · the family
//
// ⚠️ FOUR WORD-GROUPS BLOCK 1 SPENT THAT A LATER SLOT WOULD ALSO WANT. Lower slot
// wins, so these are decided — use them in examples, do not re-teach them:
//   • एक, दो, तीन, चार (u2l1/u3l4) — the only real words spellable with those
//     letters at that point in the band. u11 "Numbers and time" still owns
//     पाँच–सौ and the whole clock/calendar system, which is the bulk of it.
//   • शाम (u4l1), सुबह (u5l3), रात (u5l4), कल (u2l4) — four times-of-day that a
//     letter lesson needed. u11 and u17 own the rest.
//   • स्टेशन, होटल, बैंक, पार्क, अस्पताल, दुकान (u9l1/u9l3) — loanword decoding
//     practice. u14 "Town and places" owns the non-loan places (बाज़ार, सड़क is
//     already u5l3, मस्जिद, गली, पुल…).
//   • मेज़, कुर्सी, पंखा, टीवी, फ़ोन, लाइट, घड़ी (u9l2/u9l4). u15 owns the rest of
//     the house.
// ─────────────────────────────────────────────────────────────────────────────
// FREE — words every hi unit may USE in a sentence and no unit TEACHES.
// ─────────────────────────────────────────────────────────────────────────────
// Read by scripts/scope-hi.mjs, which is the only scope check Hindi has (lint's
// exampleScopeWarnings is silent for a non-Latin script — see that file's header).
// A FREE word is in scope from this unit onward, exactly like a taught front.
// Declaring one is a CLAIM: a learner MEETS it in a sentence and is NEVER asked
// to produce it.
//
// Everything here is closed-class grammar or a proper name, never vocabulary:
//   • the postpositions and their oblique forms — का/के/की (of), को (to), पर (on),
//     तक (until), ने (the ergative). §6 assigns these to u23 as a PARADIGM; they
//     are unavoidable in any natural Hindi sentence from u1, so the learner
//     acquires them by exposure first and is taught them once, properly, later.
//   • the demonstrative obliques इस/इन/उस/उन and the possessives built on the
//     pronouns (आपका, उनकी, उसके…). These ARE inflections of taught fronts
//     (यह, वह, आप, वह), just ones no suffix rule generates.
//   • करन — a proper name, free by RUNBOOK §4.
// ⚠️ ADD TO THIS LINE ONLY FOR SOMETHING THAT MEETS THE TEST ABOVE. A content word
// that belongs in the list is a content word you should be teaching instead.
// FREE: का | के | की | को | पर | तक | ने | तो | इस | इन | उस | उन | कोई
// FREE: आपका | आपकी | आपके | उनका | उनकी | उनके | उसका | उसकी | उसके | उसमें
// FREE: किसकी | किसके | अपने | अपनी | करन
// ⚠️ AND ONE READING RESERVED: `saath` is साथ (u7l3). साठ ("sixty") must be
// authored `saatth` — see §1(b).
export const HI_UNIT1 = {
  id: "hi-u1",
  lang: "hi",
  title: "वर्णमाला · १",
  order: 1,
  stage: "pre-a1",
  lessons: [
    {
      id: "hi-u1l1",
      unit: 1,
      lesson: 1,
      title: "The six vowels Hindi starts with",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Hear, say and type the six basic Devanagari vowel letters, and tell each short vowel from its long partner.",
      items: [
        { id: "hi-u1l1-vowela", type: "glyph", front: "अ", reading: "a", meaning: null, example: null, hint: "The first letter of the alphabet, and the vowel every consonant already carries. A short, flat uh — the a in about, never the a in father." },
        { id: "hi-u1l1-vowelaa", type: "glyph", front: "आ", reading: "aa", meaning: null, example: null, hint: "अ with a vertical stroke added in front. Hold it twice as long: the a in father. Length is the whole difference between कम kam and काम kaam." },
        { id: "hi-u1l1-voweli", type: "glyph", front: "इ", reading: "i", meaning: null, example: null, hint: "A short i, like the i in sit. Look for the little hook curling back over the top." },
        { id: "hi-u1l1-vowelii", type: "glyph", front: "ई", reading: "ii", meaning: null, example: null, hint: "The long partner of इ — the ee in see. The hook reaches further and closes. Written ii here so the long and the short never share one reading." },
        { id: "hi-u1l1-vowelu", type: "glyph", front: "उ", reading: "u", meaning: null, example: null, hint: "A short u, like the oo in book. The tail curls down and to the right." },
        { id: "hi-u1l1-voweluu", type: "glyph", front: "ऊ", reading: "uu", meaning: null, example: null, hint: "The long partner of उ — the oo in food. The tail drops straight down instead of curling. Written uu, matching aa and ii." },
      ],
    },
    {
      id: "hi-u1l2",
      unit: 1,
      lesson: 2,
      title: "क ग म न — and your first Hindi word",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read four Devanagari consonants and read two whole Hindi words built only from them.",
      items: [
        { id: "hi-u1l2-letterka", type: "glyph", front: "क", reading: "ka", meaning: null, example: null, hint: "Says ka — and that a is already in the letter. This is the abugida: a bare consonant is a whole syllable. No puff of air after the k." },
        { id: "hi-u1l2-letterga", type: "glyph", front: "ग", reading: "ga", meaning: null, example: null, hint: "Says ga, the g in go. Same vertical spine on the right as क — almost every Devanagari letter hangs off that line." },
        { id: "hi-u1l2-letterma", type: "glyph", front: "म", reading: "ma", meaning: null, example: null, hint: "Says ma. Two loops on the left, then the spine — like a written m that lost its way." },
        { id: "hi-u1l2-letterna", type: "glyph", front: "न", reading: "na", meaning: null, example: null, hint: "Says na, with the tongue against the TEETH, further forward than English n. Hindi has a second n (ण) made with the tongue curled back — that is unit 2." },
        { id: "hi-u1l2-kam", type: "vocab", front: "कम", reading: "kam", meaning: "less", accept: ["little", "fewer", "not much"], example: { jp: "आज काम कम है।", en: "There is less work today." }, drill: { jp: "आज पानी कम है", en: "There is less water today" }, hint: "KAM, one syllable — क and म with nothing added, so both keep their built-in a. Compare काम kaam, work: the long aa is the only difference." },
        { id: "hi-u1l2-man", type: "vocab", front: "मन", reading: "man", meaning: "the mind", accept: ["mind", "heart", "inner self"], example: { jp: "मेरा मन आज खुश है।", en: "My mind is happy today." }, drill: { jp: "मेरा मन खुश है", en: "My mind is happy" }, hint: "MAN — the mind and the feelings together, closer to heart than to brain. Masculine. Two letters, both from this lesson." },
      ],
    },
    {
      id: "hi-u1l3",
      unit: 1,
      lesson: 3,
      title: "ह र त द",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read four more consonants, including the dental t and d that English does not have, and say we and if in Hindi.",
      items: [
        { id: "hi-u1l3-letterha", type: "glyph", front: "ह", reading: "ha", meaning: null, example: null, hint: "Says ha, a real breathy h — Hindi never drops it. It is also the letter that makes है (is) and हूँ (am)." },
        { id: "hi-u1l3-letterra", type: "glyph", front: "र", reading: "ra", meaning: null, example: null, hint: "Says ra with one flick of the tongue, like the r in Spanish pero. Note it has no spine of its own — the only common letter that does not." },
        { id: "hi-u1l3-letterta", type: "glyph", front: "त", reading: "ta", meaning: null, example: null, hint: "Says ta with the tongue flat against the TEETH and no puff of air. This is NOT the English t. Unit 2's ट is the one closer to English, made with the tongue curled back." },
        { id: "hi-u1l3-letterda", type: "glyph", front: "द", reading: "da", meaning: null, example: null, hint: "Says da, the voiced partner of त — tongue on the teeth again. Unit 2's ड is its curled-back twin." },
        { id: "hi-u1l3-ham", type: "vocab", front: "हम", reading: "ham", meaning: "we", accept: ["us"], example: { jp: "हम घर पर हिंदी सीखते हैं।", en: "We learn Hindi at home." }, drill: { jp: "हम हिंदी बोलते हैं", en: "We speak Hindi" }, hint: "HAM — ह and म, both letters you now know. Hindi also uses हम for I when someone is being grand or regional, but we is the one to learn." },
        { id: "hi-u1l3-agar", type: "vocab", front: "अगर", reading: "agar", meaning: "if", accept: ["in case", "supposing"], example: { jp: "अगर काम कम है तो हम घर जाते हैं।", en: "If there is less work, we go home." }, drill: { jp: "अगर तुम यहाँ हो तो अच्छा है", en: "If you are here then it is good" }, hint: "A-GAR. Three letters, three you already know, and it starts with the independent vowel अ because nothing comes before it." },
      ],
    },
    {
      id: "hi-u1l4",
      unit: 1,
      lesson: 4,
      title: "प ब ल स",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read four more consonants and read Hindi words for now and a bus off the page.",
      items: [
        { id: "hi-u1l4-letterpa", type: "glyph", front: "प", reading: "pa", meaning: null, example: null, hint: "Says pa, dry, with no puff of air. Its aspirated partner फ (pha) comes in unit 4 — the puff is what makes them two different letters." },
        { id: "hi-u1l4-letterba", type: "glyph", front: "ब", reading: "ba", meaning: null, example: null, hint: "Says ba. Very close in shape to व (va) — ब has the crossbar joined all the way, व does not. Look at the left side." },
        { id: "hi-u1l4-letterla", type: "glyph", front: "ल", reading: "la", meaning: null, example: null, hint: "Says la, a light l, tongue forward — closer to the l in leaf than the l in full." },
        { id: "hi-u1l4-lettersa", type: "glyph", front: "स", reading: "sa", meaning: null, example: null, hint: "Says sa, always s and never z or sh. Hindi has two sh letters as well (श and ष, unit 4) but स is only ever s." },
        { id: "hi-u1l4-ab", type: "vocab", front: "अब", reading: "ab", meaning: "now", accept: ["at present", "nowadays"], example: { jp: "अब हम हिंदी पढ़ सकते हैं।", en: "Now we can read Hindi." }, drill: { jp: "अब हम घर जाते हैं", en: "Now we go home" }, hint: "AB — two letters. Pair it with तब (then), coming in unit 2 shape by shape: अब and जब and तब all rhyme, and all three are joining words." },
        { id: "hi-u1l4-bas", type: "vocab", front: "बस", reading: "bas", meaning: "a bus", accept: ["bus", "coach"], example: { jp: "बस अब स्टेशन पर है।", en: "The bus is at the station now." }, drill: { jp: "बस अब यहाँ है", en: "The bus is here now" }, hint: "BAS, feminine. The same two letters also spell बस meaning enough or that's it, said with a flat hand — one of the first things you will hear in a shop." },
      ],
    },
  ],
};
