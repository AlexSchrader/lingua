// HI Unit 98 — बहस के पैंतरे ("The moves of a debate") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 1 (u98–u110), AND THE LEAD FILE FOR THE B2 BAND — THE LAST BAND OF
// HINDI. Authored 2026-10-06. Everything already settled still BINDS and is not
// restated here: unit1.js §1–§11 (transliteration, gender in the hint, -ना
// infinitives, the glyph decisions, the gloss rules, Hindi titles), unit11.js and
// unit21.js for A1's later blocks, unit31.js §A1–§A8 for the whole of A2, and
// unit61.js §B1–§B9 for the whole of B1.
// BLOCKS 2 (u111–u123) AND 3 (u124–u136) READ §C1–§C9 BELOW FIRST.
//
// ═════════════════════════════════════════════════════════════════════════════
// B2 CONVENTIONS — settled by block 1 as B2 crew lead. Numbered so a later block
// can cite one.
// ═════════════════════════════════════════════════════════════════════════════
//
// C1. 🚨 NO HYPHEN AND NO SPACE IN A B2 FRONT, AND THIS IS THE RULE THAT WILL
//     BITE EVERY LATER BLOCK, because a B2 theme list written in English reaches
//     for a compound on every third line.
//     MEASURED on this tree 2026-10-06: **zero of 2,270 non-glyph hi fronts
//     contain a hyphen.** Five contain a space — शुभ रात्रि, माफ़ कीजिए, कोई बात
//     नहीं (u7l1/u7l3), हवाई जहाज़ (u9l1), जैसे ही (u79l3) — and all five are
//     fixed A1 phrases, not compounds a B2 author would coin.
//     unit61.js §B5 already bans a TWO-WORD front, because `findWholeWord` in
//     src/store/cardRouting.js needs the front contiguous. §C1 extends it to the
//     hyphen, for a different reason: **a hyphen in a Hindi front is a coinage
//     smell.** लेखा-परीक्षा, आपात-कोष, हितों-का-टकराव and सुरक्षित-दायरा were all
//     in this block's first candidate lists and all four are English thinking in
//     Devanagari letters. They were replaced with real single words — अंकेक्षण,
//     आपात, दायित्व, भेद्यता.
//     THE PRACTICAL TEST: if you cannot find the compound in a Hindi newspaper
//     without the hyphen, it is not a word. Use the single word, or re-theme the
//     card.
//
// C2. THE VISARGA ः IS STILL BANNED (unit61.js §B1) AND THE OBVIOUS B2 WORKAROUND
//     IS ALSO REFUSED. §B1 closed the -तः adverb class for the whole course —
//     अतः, संभवतः, मुख्यतः, क्रमशः — and B2 adds अंततः and पूर्णतः to the refused
//     list, both wanted by this block's first draft of u101 and both replaced
//     (आखिर u30 and पूरा u19 already carry those jobs).
//     🚨 AND THE REGISTER-DOUBLET UNIT IS REFUSED, MEASURED, NOT ON TASTE.
//     The scaffold's u119 is a Japanese keigo slot (§C8), and the natural Hindi
//     replacement looked obvious: teach the तत्सम/उर्दू register pairs, जल/पानी,
//     नेत्र/आँख, मृत्यु/मौत, which is Hindi's REAL register axis. **It cannot be
//     built.** `normalizeMeaning` (src/store/answer.js) strips `(...)`, so जल
//     glossed "water (literary)" normalises to `water`, which is पानी's string
//     (u13), and the grader would accept one typed answer for two cards —
//     unit1.js §9's defect, exactly. Every doublet fails the same way, because a
//     doublet's whole point is that the two words mean the same thing.
//     Recorded here so no later block re-opens it: **the gloss normalizer makes
//     synonym-pair teaching impossible in this engine.** Teach register through
//     the FRAME in the hint, as u82 and u83 already do.
//
// C3. THE NUKTA IS DECOMPOSED, ALWAYS — ज + ़ (U+091C U+093C), NEVER ज़ (U+095B).
//     Restated at the top of the band because it is invisible on screen and
//     because it already cost Hindi once: one precomposed word made `scope-hi`
//     report it untaught in six sentences while `validate:content` stayed green.
//     Applies to क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़. **`scripts/qa/theme-holes.mjs` flags a
//     precomposed candidate; `scripts/qa/front-taken.mjs` does not** — it compares
//     strings and a precomposed word is simply a different string, so it comes
//     back "free" when it is not.
//     ⚠️ AND क़/ख़/ग़ ARE STILL UNCARDED AND UNUSED (unit1.js §7, unit31.js §A4).
//     B2 writes तारीख, आखिर, फ़र्क, मकसद with PLAIN क/ख/ग. ज़ and फ़ are taught
//     (u4) and used freely — this unit alone spends them seven times.
//
// C4. WHAT B2 IS, AND WHAT IT IS NOT. A1 NAMES, A2 NARRATES, B1 RELATES, B2
//     FRAMES. §B3 said B1 is the band where the learner stops naming things and
//     starts relating them. B2 is the band where the learner stops asserting a
//     relation and starts QUALIFYING, SOURCING AND ATTRIBUTING it — hedging a
//     claim, naming where it came from, saying how sure they are, and describing
//     the move someone else just made rather than making one.
//     THE PRACTICAL CONSEQUENCE, and it is the same split §B3 named: the
//     vocabulary is meta, so the `example` is a two-clause sentence in which the
//     word frames a claim, while the `drill` is 3–8 words (RUNBOOK §4) carrying
//     the front in a plain frame. **The drill usually cannot carry the frame** and
//     is not supposed to.
//     ⚠️ A B2 WORD IS OFTEN ABOUT LANGUAGE ITSELF, which makes the example easy to
//     write badly: a sentence that DEFINES the word instead of USING it. Every
//     example in this unit shows someone doing the thing, with a consequence
//     attached in the second clause.
//
// C5. EVERY B2 UNIT IS 4 LESSONS × EXACTLY 6 CARDS — 24 per unit, no exceptions,
//     matching all 388 A1+A2+B1 lessons. `cefr: "B2"` on every lesson, `stage:
//     "b2"` on the unit, and `title` in Devanagari (unit1.js §10).
//
// C6. 🚨 SIXTEEN OF THE 39 B2 SLOTS ARRIVED TITLED "Vocabulary 1 (B2)" … "16",
//     AND THE ALLOCATION IS ALREADY DECIDED — DO NOT INVENT ONE. At A2 this exact
//     scaffold shape cost **104 re-authored cards across three languages**; at B1,
//     where the lead issued per-slot word lists first, it cost **41**. §C7 is the
//     table and §C9 the boundaries. **Each number is `taken/probed` against all
//     2,270 non-glyph hi fronts on 2026-10-06**, re-derivable with
//     `node scripts/qa/theme-holes.mjs`, which reads the committed evidence
//     file `scripts/qa/theme-holes-hi.txt` — all 53 probed themes — and prints
//     taken/probed, the
//     owning unit of each taken word, and the free remainder.
//     ⚠️ A SLOT'S LIST IS 18–24 WORDS, NOT 24 PROVED. It proves the FIELD is open.
//     Each seat probes its own final four to six with `front-taken.mjs`,
//     `gloss-taken.mjs` and `reading-taken.mjs` before writing a card — §B4 — and
//     this unit is the demonstration: its first 24-card draft lost दावा (u44l3)
//     and तर्कसंगत (u68l1) to the front probe after both had passed the theme
//     probe, because the theme probe never contained them.
//
// C7. THE WHOLE B2 BAND, WITH THE MEASUREMENT.
//     ─── u98–u110, BLOCK 1 (mine). Seven of the thirteen pre-titled slots sit on
//     territory B1 already spent, so seven are NARROWED or RETHEMED:
//       u98  बहस के पैंतरे          6/24  narrowed — u61 राय और सहमति owns the
//                                        OPINION field; u98 owns only the MOVE
//       u99  सबूत और सत्यता         5/24  narrowed — u65 खबर कहाँ से आई owns the
//                                        SOURCE; u99 owns the TEST of a claim
//       u100 तंत्र और संरचना        0/24  kept — u68 took the abstract nouns, the
//                                        SYSTEM vocabulary is untouched
//       u101 मात्रा के बारीक दर्जे   4/24  narrowed — u63 owns quantity, u101 degree
//       u102 अदालत की कार्यवाही     0/24  narrowed — u42+u88 are 11/18 on the base
//                                        law field; the PROCEDURE layer is open
//       u103 कंपनी और बाज़ार        0/24  RETHEMED from "Business and negotiation"
//                                        — u85 owns the contract and the haggle
//       u104 कंप्यूटर और डेटा       0/24  RETHEMED from "Science and technology" —
//                                        u87 owns science; biology/chemistry/
//                                        astronomy released to u121–u123
//       u105 इतिहास और सभ्यता       1/24  narrowed — u50 is the local past, u105
//                                        the deep past
//       u106 संगीत और मंच           1/24  RETHEMED from "Arts and criticism" —
//                                        u91 owns criticism, u74 screen and stage
//       u107 जवाबदेही और हक़         0/24  RETHEMED from "Ethics and responsibility"
//                                        — u90 owns the moral/spiritual field
//       u108 जोखिम और अनिश्चितता    3/24  narrowed above u64 हो सकता है
//       u109 अस्मिता और समावेश      1/24  narrowed — u78 owns one's place in society
//       u110 प्रशासन और मंत्रालय    2/24  RETHEMED from "Career and organisations"
//                                        — u96 owns job titles, u83 office language
//     ─── u111–u123, BLOCK 2. **FIVE OF THE TEN PRE-TITLED SLOTS ARE DEAD AS
//     TITLED** and are rethemed onto measured holes; three grammar slots are kept
//     and narrowed; three Vocabulary slots take the sciences.
//       u111 भूगोल और धरती के रूप   5/18  RETHEMED — u75 owns environment, u92 the
//                                        global
//       u112 अस्पताल और इलाज        6/18  narrowed — u35+u77+u84 own body and
//                                        illness; u112 is the HOSPITAL
//       u113 भाषा और अनुवाद         2/18  RETHEMED — "Education and research" is
//                                        DEAD: u97 उच्च शिक्षा + u87 विज्ञान और शोध
//       u114 विकास और जनसेवा        3/18  RETHEMED — "Media and narrative" is DEAD:
//                                        u44 + u65 + u74 + u91
//       u115 मन का स्वास्थ्य        2/18  RETHEMED — "Emotion subtle and mixed" is
//                                        DEAD: u52 दिल का हाल + u67 मन के बारीक रंग
//       u116 Grammar 9  — counterfactual and concessive conditionals, above u47
//       u117 Grammar 10 — participial and relative chains, कृदंत, above u79+u80+u83
//       u118 Grammar 11 — discourse, cohesion, hedging AS CONSTRUCTION; see §C9.11
//       u119 दर्शन और तर्कशास्त्र    5/18  RETHEMED — the keigo slot; see §C8
//       u120 गणित और आँकड़ों की भाषा 4/18  RETHEMED — u83 already spent the formal
//                                        institutional register
//       u121 जीवविज्ञान और कोशिका   3/18     u122 रसायन और पदार्थ   3/18
//       u123 अंतरिक्ष और खगोल       6/18
//     ─── u124–u136, BLOCK 3. Thirteen Vocabulary slots, all on measured holes.
//       u124 खेती और फ़सल        7/18     u131 खेल का मैदान        1/18
//       u125 कारख़ाना और मज़दूर  8+10/18   u132 पर्यटन और मेज़बानी   2/18
//       u126 ऊर्जा और बिजली     8/18     u133 रोशनी और रंग        2/18
//       u127 बंदरगाह और ढुलाई   5+10/18   u134 आबादी और आँकड़े      2/18
//       u128 मकान और जायदाद     6/18     u135 झगड़ा और सुलह        4/18
//       u129 पोषण और रेस्तराँ    6/18     u136 हस्तशिल्प और बुनाई   6/18
//       u130 जुर्म और पुलिस     7/18
//     ⚠️ TWO SLOTS ARE MERGES AND MUST NOT BE RE-SPLIT. Labour measured 8 free of
//     18 and trade 8 free of 18 — **neither can carry 24 cards alone.** Labour is
//     folded into u125 (18 free combined) and trade into u127 (21 free combined).
//     ─── ALLOCATED TO NOBODY, named so no seat adopts one thinking it found a
//     hole:
//       • **BANKING AND INVESTMENT IS 15/18 SPENT** (u37 पैसे का हिसाब + u76
//         अर्थव्यवस्था + u85). Only खाता, ऋण and किश्त are free. **DEAD.**
//       • Journalism and publishing craft 6/18 — spare, u44+u65+u91 took the field.
//       • Disaster and relief 12/18 — spare; its five free words (मलबा, निकासी,
//         पुनर्वास, क्षति, अकाल) go to u108.
//       • Marriage and ceremony 12/18 — spare, u59+u78 took it.
//
// C8. 🚨 u119 IS A JAPANESE SLOT IN THE HINDI SCAFFOLD, AND IT IS RETHEMED.
//     Its scaffold title is `Register 3 — 敬語: humble and honorific` — Japanese
//     characters, naming a Japanese grammatical system, inside a Hindi file. This
//     is the same artefact unit1.js §10 found five times in A1 ("Characters N"),
//     once in u23 ("particles") and four times in A2, and CLAUDE.md's "no front
//     language" rule says to retitle and retheme it as ordinary authoring.
//     **Hindi has no keigo.** Its respect system is the आप/तुम/तू split plus
//     lexical register, and it is ALREADY TAUGHT — u8l1 cards all three pronouns
//     with the social rule, u82 आदर और अदब is the whole respect unit, and u83
//     दफ़्तरी और औपचारिक भाषा is the formal register. There is nothing left in the
//     slot. The doublet replacement is refused for the measured reason in §C2.
//     **u119 → दर्शन और तर्कशास्त्र**, philosophy and formal logic — 5/18, and the
//     most formal register Hindi has, which keeps the slot's intent.
//     ⚠️ AND u120 "Register 4 — written, public and institutional voice" IS AT
//     RISK FOR THE SAME REASON — u83 owns exactly that voice, and u110 (mine)
//     takes the administrative vocabulary. **u120 → गणित और आँकड़ों की भाषा.**
//
// C9. ⚠️ ELEVEN CROSS-BLOCK BOUNDARIES. A SEAT CAN SEE ITS OWN DUPLICATE; IT
//     CANNOT SEE A SIBLING'S, AND `validate:content` PASSES EACH BRANCH ALONE.
//     Both halves of every line below must read it.
//      1. **सर्वेक्षण → u134 ONLY.** It was in u103's field and u134's. u103 drops
//         it and cards no survey.
//      2. **राजस्व → u110 ONLY.** It was in u103's field and u128's. Both drop it.
//      3. **मंडी → u127 ONLY.** It was in u103's field. u103 drops it.
//      4. **जनगणना → u134 ONLY**, not u110. u110 cards मंत्रालय आयोग अधिसूचना
//         तहसील राजस्व सचिवालय अध्यादेश पटवारी मद — ⚠️ **आवंटन WAS ON THIS LIST
//         AND IS NOT u110's: BLOCK 3 CARDED IT AT u128** (मकान और जायदाद), probed
//         TAKEN 2026-10-07, and u110 did not card it. Corrected here rather than
//         left asserting an allocation that no longer holds. सर्वेक्षण is u134's
//         too (line 1), and nothing demographic is u110's.
//      5. 🚨 **आरक्षण → u109 ONLY, AND IN THE CASTE-RESERVATION SENSE.** It is a
//         homograph and **u112 and u132 will both want it as "a booking"**.
//         Neither may card it — the gloss would collide through
//         `normalizeMeaning` and the learner would get one front with two right
//         answers.
//      6. **प्रतिरक्षा → u112 ONLY**, not u121. u121 takes ऊतक गुणसूत्र जीन चयापचय.
//      7. **अनुकूलन → u121 ONLY** (adaptation). u100 wanted it and drops it.
//      8. 🚨 **u102 OWNS THE COURT, u130 OWNS THE STREET. Without this line both
//         seats card हिरासत.** Mine: न्यायाधीश ज़मानत अपील अभियुक्त वादी प्रतिवादी
//         जिरह सम्मन हिरासत याचिका अवमानना. u130's: चोरी हत्या जुर्म दंगा अपहरण
//         रिश्वत गश्त छापा फ़रार जालसाज़ी.
//      9. **u103 OWNS THE FIRM, u125 OWNS THE WORKER.** Mine: निगम विलय अधिग्रहण
//         हिस्सेदार दिवालिया एकाधिकार परिचालन. u125's: कामगार श्रमिक संघ पुर्ज़ा
//         संयंत्र उत्पादकता शोषण छँटनी पेंशन बोनस.
//     10. **u122 OWNS THE REACTION, u126 THE SOURCE, u133 THE LIGHT.** All three
//         are physics-adjacent and two of them are in different blocks.
//         अभिक्रिया/उत्प्रेरक/विलयन → u122. सौर/पवन/टरबाइन/भाप/विद्युत → u126.
//         किरण/लेंस/अपवर्तन/वर्णक्रम → u133.
//     11. **u134 OWNS THE MOVEMENT OF PEOPLE, u114 THE INTERVENTION. Both seats
//         will reach for ग्रामीण — it is u114's.** पलायन प्रवासन शहरीकरण घनत्व
//         जनसांख्यिकी → u134. ग्रामीण कल्याण स्वच्छता सशक्तिकरण जागरूकता लाभार्थी
//         → u114.
//     ⚠️ TWO COLLISIONS ALREADY MEASURED, so no seat re-discovers them:
//       • **अल्पसंख्या IS REFUSED** — अल्पसंख्यक (u92) is the same lexeme. Dropped
//         from u109.
//       • **बहुसंख्यक (u134)**: the front is free, but बहुमत is u63's, so the gloss
//         "the majority" collides. Gloss it as the PEOPLE, not the share.
//
// ─────────────────────────────────────────────────────────────────────────────
// THIS UNIT (u98) — बहस के पैंतरे
// ─────────────────────────────────────────────────────────────────────────────
// Slot NARROWED, not rethemed. The scaffold title is "Argument and persuasion",
// and u61 राय और सहमति already carded the whole OPINION field — समर्थन, विरोधी,
// गुट, असहमत, तटस्थ, राज़ी, ऐतराज़, आलोचना, टिप्पणी, पूर्वाग्रह, कायल, नकारना,
// पहलू, मतभेद, विवाद, रुख, चर्चा, ज़ोर, निष्कर्ष, प्रतिक्रिया, जताना, कबूलना, ज़िद,
// सर्वसम्मत — with दलील, तर्क, सबूत and मुद्दा at u39 and बहस, राय, वादा, तारीफ़,
// इनकार, शक at u30. **Measured 6/24 on the B2 layer**, and what that layer is:
// u61 teaches the POSITION a person holds; u98 teaches the MOVE they make with
// it. Nothing in u61 lets a learner say "that was a tactical jibe dressed up as
// an argument", and that is B2's job (§C4).
//
// ⚠️ TWO CARDS WERE REFUSED BY THE FRONT PROBE AFTER PASSING THE THEME PROBE, and
// this is why §C6 says a theme list is not a card list:
//   • **दावा WAS REFUSED** — u44l3 (खबर और मीडिया) owns it. The role it would have
//     played, the claim staked, is covered by दलील (u39) plus this unit's पैंतरा.
//   • **तर्कसंगत WAS REFUSED** — u68l1 (अमूर्त विचार) owns it. सुसंगत took the slot,
//     and the two are not the same word: तर्कसंगत is reasoned, सुसंगत only free of
//     self-contradiction. l1's hint says so.
//   • Also drafted and NOT used, left free for a later block: उपालंभ (a reproach)
//     and मनुहार (coaxing). Both probed FREE 2026-10-06. ⚠️ **ताना and फटकार are
//     u135's** (§C7) — do not take them here.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4), each named in its own hint:
//   ⚠️ FEMININE: वाक्पटुता · अतिशयोक्ति · डींग · लफ़्फ़ाज़ी · स्वीकारोक्ति · ढील ·
//     धौंस.
//   ⚠️ **डींग, ढील AND धौंस ARE ALL FEMININE AND ALL CONSONANT-FINAL**, so nothing
//   in the shape says so — the §B6 class that gets agreement wrong (ज़िद, छाप,
//   पहल, दर, उपज, बढ़त, घुटन). बड़ी डींग, थोड़ी ढील, खाली धौंस — never बड़ा.
//   ⚠️ **अतिशयोक्ति AND स्वीकारोक्ति BOTH END IN A SHORT ि** — atishayokti,
//   sviikaarokti, never -ii. Same shape as समिति (u88l2), कृति (u91l4),
//   छात्रवृत्ति, प्रस्तुति and उपाधि (u97). They share the -उक्ति half, which is
//   why they are in different lessons.
//   MASCULINE: पैंतरा · दृष्टांत · अनुनय · आश्वासन · प्रतिवाद · प्रत्युत्तर ·
//   कुतर्क · कटाक्ष · शब्दजाल · प्रलोभन.
//   INVARIANT ADJECTIVES: सुसंगत · निराधार · भ्रामक · गोलमोल · दोटूक.
//   VERBS, both regular -ना (unit1.js §5): मुकरना · डटना. **No 3rd-person
//   exception is spent, and the whole-language count is still ZERO.**
//
// ⚠️ SUBSTRING TRAPS, COMPUTED WITH `findWholeWord`'s REAL BOUNDARY TEST, NOT BY
// EYE. The test is `/\p{L}/u`, and every Devanagari mātrā, anusvāra, halant and
// nukta is `\p{M}` — so a mātrā next to the match does NOT block it and a letter
// does. Four FIRE and six are BLOCKED, and the pairs are deliberately split:
//   🚨 FIRES, and the one that matters is in lesson 4:
//     • **ढील whole-word-matches inside ढीला, loose (u40l4)** — the ा that
//       follows is a mātrā. **NO SENTENCE IN THIS UNIT CONTAINS ढीला**, which is
//       the whole mitigation: every card searches only its OWN example and drill
//       (`findFrontInExample`, src/store/cardRouting.js), so u40's card is
//       untouched and ढील's own cloze is unambiguous.
//     • तर्क, logic (u39l3), fires inside कुतर्क (l2) — the ु before it is a mātrā.
//     • करना, to do (u8l2), fires inside मुकरना (l3) — same ु.
//     • ज़ and फ़ (u4) fire inside लफ़्फ़ाज़ी (l3), and क्ष (u6) inside कटाक्ष (l2).
//       **Harmless by construction**: both are `glyph` items and `canCloze`
//       requires `type === "vocab"`, so a letter card never blanks a word.
//   ✅ BLOCKED, each by a \p{L} letter on one side — checked, not assumed:
//     शब्द (u6l4) and जाल (u43l2) inside शब्दजाल · गोल (u19l1) and मोल (u37l4)
//     inside गोलमोल · लोभ (u90l4) inside प्रलोभन · का (u3, a glyph) inside
//     स्वीकारोक्ति · दो (u3) inside दोटूक · प्रति (u93) inside प्रतिवाद.
//
// ृ (ऋ's MĀTRĀ) IS SPENT A SIXTH TIME, in दृष्टांत (l1), with the hint §B2
// requires. The running list is कृपया (u7l2) · पृष्ठभूमि (u62l1) · वृद्धि and
// प्रवृत्ति (u69l4) · पुनरावृत्ति (u73l4) · दृष्टांत (u98l1). The mark stays
// uncarded and no stroke data is added (unit1.js §3, §7).
//
// SENTENCE SCOPE — five words this block wanted in examples and could not use,
// because they are not carded anywhere in Hindi: तुरंत, खत्म, आरोप, अटकना, जमाना.
// Each draft sentence that used one was rewritten (फिर, रुक गया, बात, रुकना, and
// धौंस's frame moved into the hint). Checked with `node scripts/scope-hi.mjs`,
// not by eye — RUNBOOK §4's rule is that an example uses only vocab taught at or
// before its unit, and at u98 that is all of u1–u97 plus this unit.
export const HI_UNIT98 = {
  id: "hi-u98",
  lang: "hi",
  title: "बहस के पैंतरे",
  order: 98,
  stage: "b2",
  lessons: [
    {
      id: "hi-u98l1",
      unit: 98,
      lesson: 1,
      title: "Making the case",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Lay out a case rather than just hold an opinion: name the tactic behind a move, tell a short story to make a point, say a case hangs together, win someone over by appeal instead of pressure, describe someone who speaks well, and give an assurance that stops short of a promise.",
      items: [
        { id: "hi-u98l1-paintaraa", type: "vocab", front: "पैंतरा", reading: "paintaraa", meaning: "a tactical move", accept: ["a calculated move", "a manoeuvre"], example: { jp: "उसका पहला पैंतरा यह था कि उसने सबूत माँगा, और उसी से पूरी बहस उसके हाथ में आ गई।", en: "His first tactical move was that he asked for proof, and with that the whole debate came into his hands." }, drill: { jp: "उसका पहला पैंतरा सबूत माँगना था", en: "His first tactical move was to ask for proof" }, hint: "PAIN-TA-RAA, masculine like most -ा nouns (unit 1 §4). The ैं is ऐ's mātrā with nasalisation, so it reads ain. Originally a wrestler's footwork, now any calculated step inside an argument. ⚠️ Not दलील, an argument (unit 39): a दलील is what you SAY, a पैंतरा is how you place it. And not तरीका, a method (unit 32), which has no opponent in it." },
        { id: "hi-u98l1-drishtaant", type: "vocab", front: "दृष्टांत", reading: "drishtaant", meaning: "an illustrative example", accept: ["an illustration told to make a point", "a parable"], example: { jp: "अपनी बात समझाने के लिए उसने एक छोटा दृष्टांत दिया, और तब सबको मुद्दा साफ़ दिखा।", en: "To explain his point he gave one short illustration, and then the issue looked clear to everyone." }, drill: { jp: "उसने एक छोटा दृष्टांत दिया", en: "He gave one short illustration" }, hint: "DRISH-TAANT, masculine. ⚠️ THE ृ IS ऋ's MĀTRĀ AND IT READS ri — unit 61 §B2 keeps the mark uncarded deliberately, and this is the SIXTH Hindi word to spend it, after कृपया (unit 7), पृष्ठभूमि (unit 62), वृद्धि and प्रवृत्ति (unit 69) and पुनरावृत्ति (unit 73). ⚠️ Not उदाहरण, an example (unit 32): an उदाहरण is any instance you point at, a दृष्टांत is a small story told so the point lands." },
        { id: "hi-u98l1-susangat", type: "vocab", front: "सुसंगत", reading: "susangat", meaning: "internally consistent", accept: ["coherent", "free of contradiction"], example: { jp: "उसकी पूरी दलील सुसंगत थी, इसलिए किसी को उसमें कोई खामी नहीं मिली।", en: "His whole argument was internally consistent, so nobody found any shortcoming in it." }, drill: { jp: "उसकी पूरी दलील सुसंगत थी", en: "His whole argument was internally consistent" }, hint: "SU-SAN-GAT, INVARIANT: सुसंगत दलील, सुसंगत जवाब. सु- is the 'good' prefix, the mirror of कु- in lesson 2's कुतर्क, and संगत is 'fitting together' — a case whose parts do not fight each other. ⚠️ तर्कसंगत, reasoned, is NOT AVAILABLE: it is already carded at unit 68. The two are not the same word — a सुसंगत दलील can be perfectly consistent and still be wrong. Not ठीक, right (unit 4)." },
        { id: "hi-u98l1-anunay", type: "vocab", front: "अनुनय", reading: "anunay", meaning: "persuasion by appeal", accept: ["winning someone over by asking", "asking rather than forcing"], example: { jp: "उसने धमकी नहीं दी, सिर्फ़ अनुनय से काम लिया, और आखिर में सब राज़ी हो गए।", en: "He gave no threat, he worked only by appeal, and in the end everyone came round." }, drill: { jp: "उसने अनुनय से काम लिया", en: "He worked by appeal" }, hint: "A-NU-NAY, masculine, consonant-final. Winning someone over by asking and appealing, never by force. The frame is अनुनय करना. ⚠️ Not दबाव, pressure on someone (unit 70), and not धमकी, a threat of harm (unit 48): अनुनय is the opposite of both, because it leaves the other person free to say no. Lesson 4's प्रलोभन and धौंस are what it is not." },
        { id: "hi-u98l1-vaakpatutaa", type: "vocab", front: "वाक्पटुता", reading: "vaakpatutaa", meaning: "eloquence", accept: ["skill in speaking", "fluency in speech"], example: { jp: "उसकी वाक्पटुता से पूरी कक्षा खुश हुई, पर उसकी दलील में सबूत एक भी नहीं था।", en: "The whole class was pleased by his eloquence, but there was not a single proof in his argument." }, drill: { jp: "उसकी वाक्पटुता से सब खुश हुए", en: "Everyone was pleased by his eloquence" }, hint: "VAAK-PA-TU-TAA — ⚠️ FEMININE, like every -ता abstract noun (unit 61 §B6): उसकी वाक्पटुता मशहूर थी, never मशहूर था. वाक् is speech and पटु is skilled. ⚠️ The क् is a bare क with the halant (unit 6), so no vowel comes between it and प — say vaak, then patutaa. It is a SKILL, not a virtue: lesson 3 is what वाक्पटुता sounds like when there is nothing behind it." },
        { id: "hi-u98l1-aashvaasan", type: "vocab", front: "आश्वासन", reading: "aashvaasan", meaning: "an assurance given", accept: ["a formal word of comfort", "a solemn assurance"], example: { jp: "सरकार ने जनता को आश्वासन दिया कि नियम बदलेगा, पर कब, यह किसी ने नहीं बताया।", en: "The government gave the public an assurance that the rule would change, but when, nobody said." }, drill: { jp: "सरकार ने जनता को आश्वासन दिया", en: "The government gave the public an assurance" }, hint: "AASH-VAA-SAN, masculine. The श्व is श with व stacked (unit 6) — aash-vaa, not aasha-vaa. The frame is X को आश्वासन देना. ⚠️ WEAKER THAN वादा, a promise (unit 30), and the gap is the point: a वादा names what will be done, an आश्वासन only says do not worry. Lesson 3's लफ़्फ़ाज़ी is a speech made entirely of them." },
      ],
    },
    {
      id: "hi-u98l2",
      unit: 98,
      lesson: 2,
      title: "Hitting back",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Answer someone else's case instead of restating your own: put a full counter-argument, come straight back with a rejoinder, name an argument made in bad faith and one with nothing under it, call a true-sounding thing misleading, and recognise a jibe for what it is.",
      items: [
        { id: "hi-u98l2-prativaad", type: "vocab", front: "प्रतिवाद", reading: "prativaad", meaning: "a counter-argument", accept: ["a case made on the other side", "a reply to a case"], example: { jp: "उसकी दलील के बाद दूसरे पक्ष ने लंबा प्रतिवाद रखा, और बहस फिर शुरू हो गई।", en: "After his argument the other side put a long counter-argument, and the debate started again." }, drill: { jp: "दूसरे पक्ष ने प्रतिवाद रखा", en: "The other side put a counter-argument" }, hint: "PRA-TI-VAAD, masculine. प्रति is 'against' and वाद is 'a saying', so the complete case made on the other side. ⚠️ BIGGER THAN खंडन, a rebuttal (unit 65): a खंडन knocks down one point, a प्रतिवाद is a whole case of its own. ✅ SUBSTRING CHECKED: प्रति is carded at unit 93, and it CANNOT fire inside this word, because the व that follows it is a \\p{L} letter." },
        { id: "hi-u98l2-pratyuttar", type: "vocab", front: "प्रत्युत्तर", reading: "pratyuttar", meaning: "a rejoinder", accept: ["an answer back", "a comeback"], example: { jp: "उसने मेरी टिप्पणी पर जो प्रत्युत्तर दिया, उसमें कटुता साफ़ थी।", en: "The rejoinder he gave to my comment had acrimony plain in it." }, drill: { jp: "उसने मेरी टिप्पणी पर प्रत्युत्तर दिया", en: "He gave a rejoinder to my comment" }, hint: "PRA-TYUT-TAR, masculine. It is प्रति + उत्तर, and the i of प्रति turns into य् before the vowel — which is why it reads pratyuttar and not pratiuttar. The त्त is a real doubled t, held. ⚠️ Not जवाब, an answer (unit 8): a जवाब answers a QUESTION, a प्रत्युत्तर answers BACK, and it always has something of कटुता (unit 67) in it." },
        { id: "hi-u98l2-kutark", type: "vocab", front: "कुतर्क", reading: "kutark", meaning: "a bad-faith argument", accept: ["a false argument", "sophistry"], example: { jp: "जब सबूत नहीं होता तो लोग कुतर्क पर उतर आते हैं, और बहस कहीं नहीं पहुँचती।", en: "When there is no proof people come down to bad-faith arguments, and the debate gets nowhere." }, drill: { jp: "वह कुतर्क पर उतर आया", en: "He came down to a bad-faith argument" }, hint: "KU-TARK, masculine. कु- is the 'bad' prefix, the mirror of सु- in lesson 1's सुसंगत, and तर्क is logic (unit 39). 🚨 SUBSTRING NOTE, AND IT FIRES: तर्क whole-word-matches inside कुतर्क, because the ु before it is a MĀTRĀ and `findWholeWord`'s boundary test only blocks a \\p{L} letter. ⚠️ Not गलतफहमी, a misunderstanding (unit 57): a गलतफहमी is honest, a कुतर्क is not." },
        { id: "hi-u98l2-niraadhaar", type: "vocab", front: "निराधार", reading: "niraadhaar", meaning: "without any basis", accept: ["groundless", "baseless"], example: { jp: "उसकी बात पूरी तरह निराधार थी, क्योंकि उसके पास एक भी सबूत नहीं था।", en: "What he said was entirely without basis, because he had not a single proof." }, drill: { jp: "उसकी बात निराधार थी", en: "What he said was without basis" }, hint: "NI-RAA-DHAAR, INVARIANT: निराधार बात, निराधार शक. निर- is the 'without' prefix and आधार is a basis (unit 62). ⚠️ AND THE TWO WORDS DO NOT SHARE A STRING: आधार's आ is the independent LETTER, while here the same sound is written as the mātrā ा, so no substring match is possible either way. Not झूठ, a lie (unit 4): a झूठ is known to be false, a निराधार बात simply has nothing holding it up." },
        { id: "hi-u98l2-bhraamak", type: "vocab", front: "भ्रामक", reading: "bhraamak", meaning: "misleading", accept: ["sending one the wrong way"], example: { jp: "उसका विज्ञापन भ्रामक था, क्योंकि उसमें सिर्फ़ एक पहलू दिखाया गया।", en: "His advertisement was misleading, because only one aspect was shown in it." }, drill: { jp: "उसका विज्ञापन भ्रामक था", en: "His advertisement was misleading" }, hint: "BHRAA-MAK, INVARIANT: भ्रामक खबर, भ्रामक विज्ञापन. ⚠️ The भ्र is भ with र stacked (unit 6) and it is ONE syllable — bhraa, never bha-raa. ⚠️ This is the sharpest distinction in the lesson: something भ्रामक can be true word for word and still send you the wrong way, which is exactly what a झूठ (unit 4) is not. A भ्रामक विज्ञापन never lies; it shows one पहलू (unit 61)." },
        { id: "hi-u98l2-kataaksh", type: "vocab", front: "कटाक्ष", reading: "kataaksh", meaning: "a barbed jibe", accept: ["a cutting remark", "a sly dig"], example: { jp: "उसने सीधी आलोचना नहीं की, बस एक कटाक्ष किया, और सब उसका मतलब समझ गए।", en: "He did not criticise straight out, he only made one jibe, and everyone understood what he meant." }, drill: { jp: "उसने एक कटाक्ष किया", en: "He made one jibe" }, hint: "KA-TAAKSH, masculine. ⚠️ It ENDS in the conjunct क्ष (unit 6) and that conjunct is the whole last syllable — ka-taaksh, with no vowel after it. ⚠️ Not व्यंग्य, satire (unit 91): व्यंग्य is a whole piece written that way, a कटाक्ष is one sharp remark aimed at a person. Same कट root as कटुता, acrimony (unit 67) — कटुता is the bitterness, a कटाक्ष is one use of it." },
      ],
    },
    {
      id: "hi-u98l3",
      unit: 98,
      lesson: 3,
      title: "Bluster and evasion",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name what an argument does when it has nothing behind it: stretch a true thing past belief, boast, bury a point under long words, talk big, answer in deliberate circles, and go back on what you said.",
      items: [
        { id: "hi-u98l3-atishayokti", type: "vocab", front: "अतिशयोक्ति", reading: "atishayokti", meaning: "hyperbole", accept: ["overstatement", "stretching a thing past belief"], example: { jp: "उसकी हर बात में अतिशयोक्ति थी, इसलिए सच भी झूठ जैसा लगने लगा।", en: "There was hyperbole in everything he said, so even the truth began to seem like a lie." }, drill: { jp: "उसकी बात में अतिशयोक्ति थी", en: "There was hyperbole in what he said" }, hint: "A-TI-SHA-YOK-TI — ⚠️ FEMININE, AND IT ENDS IN A SHORT ि: atishayokti, never -ii. Same shape as समिति (unit 88) and कृति (unit 91). अति is 'excess' and उक्ति is 'a saying'; the यो is य with the ो mātrā, where अति's i meets उक्ति's u. ⚠️ Stretching a REAL thing until nobody believes it — which is what separates it from lesson 3's लफ़्फ़ाज़ी, where there is no real thing at all." },
        { id: "hi-u98l3-diing", type: "vocab", front: "डींग", reading: "diing", meaning: "a boast", accept: ["bragging", "big talk about oneself"], example: { jp: "वह अपने काम की डींग मारता रहा, पर उसका काम किसी ने देखा ही नहीं।", en: "He kept boasting about his work, but nobody had actually seen his work." }, drill: { jp: "वह अपने काम की डींग मारता है", en: "He boasts about his work" }, hint: "DIING — ⚠️ FEMININE AND CONSONANT-FINAL, so nothing in the shape tells you: बड़ी डींग, never बड़ा. ⚠️ The ड is RETROFLEX, tongue curled back, and the reading merges it to d (unit 1 §1b); the ीं is the long ii mātrā with nasalisation, written n — diing. The verb is मारना (unit 31) — डींग मारना. Not घमंड, arrogance (unit 82): घमंड is how someone feels, a डींग is what they say out loud." },
        { id: "hi-u98l3-shabdjaal", type: "vocab", front: "शब्दजाल", reading: "shabdjaal", meaning: "a web of jargon", accept: ["jargon thrown up to hide a point", "verbiage"], example: { jp: "उसका जवाब सिर्फ़ शब्दजाल था, और उसमें से एक भी साफ़ बात नहीं निकली।", en: "His answer was only a web of jargon, and not one clear point came out of it." }, drill: { jp: "उसका जवाब सिर्फ़ शब्दजाल था", en: "His answer was only a web of jargon" }, hint: "SHABD-JAAL, masculine. शब्द is a word (unit 6) and जाल is a web (unit 43) — long words thrown up so nobody can see there is nothing inside. ✅ SUBSTRING CHECKED, AND NEITHER PIECE FIRES: the ज after शब्द and the द before जाल are both \\p{L} letters, so `findWholeWord` blocks both matches. ⚠️ The opposite of lesson 1's वाक्पटुता: वाक्पटुता makes a real point beautifully, शब्दजाल hides that there is no point." },
        { id: "hi-u98l3-laffaazii", type: "vocab", front: "लफ़्फ़ाज़ी", reading: "laffaazii", meaning: "empty bluster", accept: ["big talk with nothing behind it", "hot air"], example: { jp: "चुनाव से पहले बहुत लफ़्फ़ाज़ी होती है, और बाद में कोई वादा याद नहीं रहता।", en: "There is a lot of empty bluster before an election, and afterwards no promise is remembered." }, drill: { jp: "चुनाव से पहले बहुत लफ़्फ़ाज़ी होती है", en: "There is a lot of empty bluster before an election" }, hint: "LAF-FAA-ZII — FEMININE, with the -ी ending this time agreeing with the rule. 🚨 THREE NUKTA MARKS IN ONE WORD AND EVERY ONE IS NEEDED: फ़ twice (the second stacked under the halant, unit 6) and ज़ once, all from unit 4 — लफ़्फ़ाज़ी, never लफ्फाजी. ⚠️ Heavier than अतिशयोक्ति above: अतिशयोक्ति stretches something real, लफ़्फ़ाज़ी has nothing real to stretch. Lesson 1's आश्वासन is its raw material." },
        { id: "hi-u98l3-golmol", type: "vocab", front: "गोलमोल", reading: "golmol", meaning: "deliberately vague", accept: ["evasive", "going round and round"], example: { jp: "उसने सीधा जवाब नहीं दिया, गोलमोल बात की, और मुद्दा वहीं रुक गया।", en: "He did not give a straight answer, he talked in circles, and the issue stopped right there." }, drill: { jp: "उसने गोलमोल जवाब दिया", en: "He gave an evasive answer" }, hint: "GOL-MOL, INVARIANT: गोलमोल जवाब, गोलमोल बात. A rhyming pair built on गोल, round (unit 19) — talk that goes round and round and lands nowhere. ✅ SUBSTRING CHECKED: गोल cannot fire inside it because the म that follows is a letter, and मोल, the asking price (unit 37), cannot either because the ल before it is one. ⚠️ Not चुप, silent (unit 56): staying चुप says nothing, गोलमोल says a great deal and still nothing." },
        { id: "hi-u98l3-mukarnaa", type: "vocab", front: "मुकरना", reading: "mukarnaa", meaning: "to go back on one's word", accept: ["to back out of what one said", "to deny having said it"], example: { jp: "उसने पहले हाँ कहा और फिर मुकर गया, इसलिए अब किसी को उस पर भरोसा नहीं है।", en: "He said yes first and then went back on it, so now nobody trusts him." }, drill: { jp: "अपनी बात से मुकरना बुरा है", en: "Going back on your word is bad" }, hint: "MU-KAR-NAA, a regular -ना verb (unit 1 §5), used with से — X से मुकरना. ⚠️ THE DRILL CARRIES THE INFINITIVE, NOT मुकर गया, because a drill must contain its front VERBATIM (unit 31 §A2 is the same split for the perfective). 🚨 SUBSTRING NOTE, AND IT FIRES: करना, to do (unit 8), whole-word-matches inside मुकरना, because the mark before it is the ु mātrā. ⚠️ Not नकारना, to turn down flat (unit 61): नकारना rejects someone else's proposal, मुकरना walks away from your own word." },
      ],
    },
    {
      id: "hi-u98l4",
      unit: 98,
      lesson: 4,
      title: "Conceding and holding firm",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Close an argument honestly or hold it: quote someone's own admission, allow a rule to be bent, answer bluntly and finally, recognise an inducement and an empty show of force, and stand your ground when everyone is against you.",
      items: [
        { id: "hi-u98l4-sviikaarokti", type: "vocab", front: "स्वीकारोक्ति", reading: "sviikaarokti", meaning: "an admission made openly", accept: ["an open confession", "an admission on the record"], example: { jp: "उसकी स्वीकारोक्ति के बाद किसी को और सबूत नहीं चाहिए था, और बहस वहीं रुक गई।", en: "After his open admission nobody needed any more proof, and the debate stopped right there." }, drill: { jp: "उसकी स्वीकारोक्ति के बाद बहस रुक गई", en: "After his open admission the debate stopped" }, hint: "SVII-KAA-ROK-TI — ⚠️ FEMININE, AND A SHORT ि AT THE END like अतिशयोक्ति (lesson 3): the -उक्ति half is the same word in both, which is why they are in different lessons. स्वीकार is acceptance and उक्ति a saying; the रो is where स्वीकार's र meets उक्ति's उ. ⚠️ Not कबूलना, to own up (unit 61): कबूलना is the ACT, a स्वीकारोक्ति is the STATEMENT — the thing a newspaper quotes." },
        { id: "hi-u98l4-dhiil", type: "vocab", front: "ढील", reading: "dhiil", meaning: "slack allowed to someone", accept: ["leeway", "a rule not enforced"], example: { jp: "नियम कड़ा है, पर पहली बार में थोड़ी ढील दी जाती है।", en: "The rule is stiff, but a little slack is allowed the first time." }, drill: { jp: "पहली बार में थोड़ी ढील दी गई", en: "A little slack was allowed the first time" }, hint: "DHIIL — ⚠️ FEMININE AND CONSONANT-FINAL: थोड़ी ढील, never थोड़ा. The ढ is RETROFLEX and the reading merges it to dh (unit 1 §1b). The frame is ढील देना. 🚨 SUBSTRING TRAP, AND THIS ONE FIRES: ढील whole-word-matches inside ढीला, loose (unit 40), because the ा that follows is a MĀTRĀ. No sentence in this unit contains ढीला, and each card searches only its own sentence, so neither card is harmed. ⚠️ Not रियायत, a special allowance (unit 71): a रियायत is granted on paper, ढील is a rule quietly not enforced." },
        { id: "hi-u98l4-dotuuk", type: "vocab", front: "दोटूक", reading: "dotuuk", meaning: "blunt and final", accept: ["flat and final", "leaving no room"], example: { jp: "उसने गोलमोल जवाब नहीं दिया, दोटूक कहा कि वह नहीं मानेगा।", en: "He did not give an evasive answer; he said bluntly that he would not accept it." }, drill: { jp: "उसने दोटूक जवाब दिया", en: "He gave a blunt and final answer" }, hint: "DO-TUUK, INVARIANT: दोटूक जवाब, दोटूक बात. Literally 'in two pieces' — दो (unit 3) plus टूक, a piece — an answer cut clean through with nothing left hanging. ✅ SUBSTRING CHECKED: दो cannot fire inside it, because the ट that follows is a \\p{L} letter. ⚠️ The exact opposite of lesson 3's गोलमोल, and that pairing is why both are in this unit." },
        { id: "hi-u98l4-pralobhan", type: "vocab", front: "प्रलोभन", reading: "pralobhan", meaning: "an inducement held out", accept: ["a lure", "a sweetener offered"], example: { jp: "उसने पैसे का प्रलोभन दिया, पर मैंने साफ़ इनकार कर दिया।", en: "He held out an inducement of money, but I refused flatly." }, drill: { jp: "उसने पैसे का प्रलोभन दिया", en: "He held out an inducement of money" }, hint: "PRA-LO-BHAN, masculine. Built on लोभ, greed (unit 90) — an offer aimed at the other person's greed instead of at their reason. ✅ SUBSTRING CHECKED: लोभ cannot fire inside it, because the र before it is a \\p{L} letter. ⚠️ THE MIRROR OF धमकी, a threat of harm (unit 48): a धमकी says what you will lose, a प्रलोभन says what you will gain, and lesson 1's अनुनय uses neither." },
        { id: "hi-u98l4-datnaa", type: "vocab", front: "डटना", reading: "datnaa", meaning: "to stand one's ground", accept: ["to hold a position", "to dig in and defend"], example: { jp: "सब उसके विरोध में थे, पर वह अपनी बात पर डटा रहा और सबूत देता रहा।", en: "Everyone was against him, but he stood his ground and kept giving proof." }, drill: { jp: "अपनी बात पर डटना आसान नहीं है", en: "Standing your ground is not easy" }, hint: "DAT-NAA, a regular -ना verb (unit 1 §5). The ड is RETROFLEX and the reading merges it to d (unit 1 §1b). The frame is X पर डटना, and डटे रहना is to keep standing there. ⚠️ Not ज़िद, an insistence (unit 61): ज़िद is refusing to move because you will not, डटना is holding a position you can actually defend — which is why it sits in this lesson and not in lesson 3." },
        { id: "hi-u98l4-dhauns", type: "vocab", front: "धौंस", reading: "dhauns", meaning: "a bullying show of force", accept: ["an empty show of strength", "swagger meant to frighten"], example: { jp: "उसकी धौंस का किसी पर असर नहीं हुआ, क्योंकि सब जानते थे उसके पास ताकत नहीं है।", en: "His bullying show of force had no effect on anyone, because everyone knew he had no strength." }, drill: { jp: "उसकी धौंस का कोई असर नहीं हुआ", en: "His bullying show of force had no effect" }, hint: "DHAUNS — ⚠️ FEMININE AND CONSONANT-FINAL, the third in this unit after डींग and ढील: खाली धौंस, never खाला. The ौ is औ's mātrā (unit 3) and the ं before स is written n (unit 1 §1) — dhauns, one syllable. ⚠️ Not दबाव, pressure on someone (unit 70): दबाव can be perfectly real, while धौंस is a show put on by someone with no ताकत (unit 20) behind it — which is the whole point of the example." },
      ],
    },
  ],
};
