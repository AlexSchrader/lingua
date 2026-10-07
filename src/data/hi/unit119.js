// HI Unit 119 — दर्शन और तर्कशास्त्र ("Philosophy and formal logic") — B2
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 THIS UNIT WAS AUTHORED BY NOBODY UNTIL 2026-10-07, AND THE REASON IS WORTH
// RECORDING. It sits in block 2's range (u111–u123), but block 2's brief told it
// that u119 and u120 were block 1's, which was a misreading of the crew lead's
// allocation table. Block 2 skipped both on that instruction and block 1
// correctly left them alone as out of range, so both sat at their scaffold
// titles — one of them in Japanese — through the whole B2 build. Written here by
// the B2 merge seat, against the allocation the crew lead had already measured.
//
// RETHEMED, AND THE DECISION IS NOT MINE — see unit98.js §C8. The scaffold title
// was `Register 3 — 敬語: humble and honorific`: Japanese characters naming a
// Japanese grammatical system inside a Hindi file, the artefact CLAUDE.md's "no
// front language" rule says to retitle and retheme as ordinary authoring.
// **Hindi has no keigo.** Its respect system is आप/तुम/तू plus lexical register,
// and both are already spent — u8l1 cards all three pronouns with the social
// rule, u82 आदर और अदब is the whole respect unit, u83 दफ़्तरी और औपचारिक भाषा is
// the formal register. The slot is empty as titled.
//
// ⚠️ AND THE OBVIOUS HINDI REPLACEMENT STAYS REFUSED. §C2 already refused a
// तत्सम/उर्दू register-doublet unit (जल/पानी, नेत्र/आँख, मृत्यु/मौत) for a
// GRADER reason, not a taste one: `normalizeMeaning` (src/store/answer.js) strips
// `(...)`, so जल glossed "water (literary)" normalises to `water`, which is
// पानी's string at u13, and one typed answer would pass two cards. Nothing in
// this unit revives it. **The same rule cost this unit a card while it was being
// written**: अस्तित्व probed FREE as a front but its gloss "existence" collides
// with वजूद@u57, and अस्तित्व/वजूद is exactly the Sanskritic/Perso-Arabic doublet
// §C2 closed. It was dropped rather than glossed around.
//
// WHY PHILOSOPHY AND NOT SOMETHING ELSE: measured 5 taken of 18 probed when the
// lead ran `scripts/qa/theme-holes.mjs` (line 31 of the committed evidence file
// `scripts/qa/theme-holes-hi.txt`), and re-probed 6 of 18 on 2026-10-07 against
// the fully merged B2 corpus — प्रमाण had gone to u99 in between, which is §C6's
// point about a theme list not being a card list. It is also the most formal
// register Hindi has, so it keeps the slot's original intent.
//
// ⚠️ WORDS REFUSED BY A PROBE AFTER PASSING THE THEME PROBE (§C6), named so no
// later pass re-adopts one:
//   • **अस्तित्व** — gloss collides with वजूद@u57, and it is a §C2 doublet. Dropped.
//   • **तर्कशास्त्र KEPT BUT RE-GLOSSED** — "logic" is तर्क's at u39. It is glossed
//     as the DISCIPLINE, which is what the word actually names.
//   • **वितर्क** — gloss collides with प्रतिवाद@u98 (a counter-argument), and the
//     two words are close enough to be a doublet. Dropped; ऊहापोह took the slot.
//   • **प्रमेय** released to a maths slot, not carded here.
//   • Probed FREE 2026-10-07 and deliberately LEFT FREE: मीमांसा, आस्तिक,
//     अवलोकन, विवेचन, युक्ति, मान्यता, तात्त्विक, प्रमेय.
//   • ALREADY TAKEN, so not in the running: दर्शन(u90) सत्य(u90) नास्तिक(u90)
//     अनुमान(u64) धारणा(u64) संदेह(u64) आभास(u64) परिकल्पना(u87) सिद्धांत(u87)
//     खंडन(u65) प्रमाण(u99) भ्रांति(u99) विवेक(u68) अवधारणा(u68) बोध(u68)
//     सापेक्ष(u68) निरपेक्ष(u68) आदर्श(u68) प्रत्यक्ष(u62) सत्ता(u88)
//     व्याख्या(u118) निरूपण(u118).
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4), each named in its own hint:
//   ⚠️ FEMININE: तत्त्वमीमांसा · ज्ञानमीमांसा · परिभाषा · पूर्वधारणा · उपपत्ति ·
//     व्याप्ति.
//   ⚠️ **उपपत्ति AND व्याप्ति BOTH END IN A SHORT ि** — upapatti, vyaapti, never
//   -ii. The same shape as समिति (u88l2), कृति (u91l4), प्रस्तुति and उपाधि (u97),
//   अतिशयोक्ति and स्वीकारोक्ति (u98). They are in the SAME lesson here on
//   purpose — l3 is the Nyāya proof-frame and the pair is the frame's two halves.
//   ⚠️ **तत्त्वमीमांसा (l1) AND ज्ञानमीमांसा (l4) SHARE THEIR SECOND HALF** and are
//   three lessons apart for exactly that reason. One asks what EXISTS, the other
//   asks how we KNOW — the hint on each says so.
//   MASCULINE: द्वैत · अद्वैत · भौतिकवाद · आदर्शवाद · चिंतन · तर्कशास्त्र ·
//     निगमन · आगमन · हेतु · साध्य · तर्कदोष · विरोधाभास · आत्मज्ञान ·
//     अनुभववाद · संदेहवाद · ऊहापोह.
//   INVARIANT ADJECTIVES, used as nouns too: स्वयंसिद्ध · मिथ्या.
//   NO VERBS. **No 3rd-person exception is spent and the whole-language count is
//   still ZERO.**
//
// ⚠️ SUBSTRING TRAPS, COMPUTED WITH `findWholeWord`'s REAL BOUNDARY TEST (`/\p{L}/u`,
// so every mātrā, anusvāra, halant and nukta is `\p{M}` and does NOT block a
// match), NOT BY EYE. Glyph fronts are excluded — `canCloze` requires
// `type === "vocab"`, so a letter card never blanks a word.
//   🚨 FIRES — a taught vocab front whole-word-matches inside one of mine:
//     • **आदर, respect (u82l1), fires inside आदर्शवाद** — the ् after it is a
//       halant, a mark. Harmless by construction: आदर is not carded in this unit
//       and every card searches only its OWN example and drill
//       (`findFrontInExample`, src/store/cardRouting.js).
//     • **भाषा (u4) and पर (u23) BOTH fire inside परिभाषा** — the ि on either
//       side of them is a mātrā. Same mitigation; neither is carded here.
//     • **विरोध, opposition (u42), fires inside विरोधाभास** — the ा after it is a
//       mātrā. ⚠️ AND THIS ONE IS LOAD-BEARING: three of my examples use the
//       phrase इसके ठीक विरोध में, so विरोध appears as its own word in this unit's
//       sentences. It is still harmless, because no card in this unit has विरोध
//       as its front — but a later pass must not add one.
//     • **या, or (u22), fires inside मिथ्या** — the ् before it is a halant. या is
//       used as its own word in three examples here and is not carded.
//   ✅ BLOCKED, each by a \p{L} letter on one side — checked, not assumed:
//     तर्क (u39l3) inside तर्कशास्त्र (followed by श) and inside तर्कदोष (by द) ·
//     दोष (u70) inside तर्कदोष (preceded by क) · धारणा (u64) inside पूर्वधारणा
//     (preceded by व) · ज्ञान (u57) inside ज्ञानमीमांसा (followed by म) and inside
//     आत्मज्ञान (preceded by म) · अनुभव (u32) inside अनुभववाद (followed by व) ·
//     संदेह (u64) inside संदेहवाद (by व) · आदर्श (u68) inside आदर्शवाद (by व) ·
//     हवा (u9) inside संदेहवाद (preceded by े… and followed by द) · निगम (u103)
//     inside निगमन (followed by न) · **द्वैत inside अद्वैत (preceded by the letter
//     अ)** — the two sit in the same lesson and the block holds.
//   ✅ NOT EVEN A SUBSTRING, so no rule is needed: आभास (u64) is NOT inside
//     विरोधाभास — that ा is a mātrā, not the independent आ the front starts with.
//     आत्मा (u90) is NOT inside आत्मज्ञान — आत्मा needs a ा after the म and this
//     word has ज.
//
// SENTENCE SCOPE — seven words this unit's first draft wanted and could not use,
// because they are carded nowhere in Hindi: असल, उलटा, गलत, जाँचना, निकालना,
// सही, भारतीय. Each sentence was rewritten (सच में, इसके ठीक विरोध में, टूटा,
// देखना, निकलना, ठीक, पुराने दर्शन में). Checked with `node scripts/scope-hi.mjs
// 119`, not by eye.
// lang/unit/lesson are stamped in src/data/index.js.
export const HI_UNIT119 = {
  id: "hi-u119",
  lang: "hi",
  title: "दर्शन और तर्कशास्त्र",
  order: 119,
  stage: "b2",
  lessons: [
    {
      id: "hi-u119l1",
      unit: 119,
      lesson: 1,
      title: "What philosophy is actually asking",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the big positions a philosopher can take: metaphysics itself, dualism and non-dualism, materialism and idealism, and the long reflection that separates philosophy from an opinion.",
      items: [
        { id: "hi-u119l1-tattvamiimaansaa", type: "vocab", front: "तत्त्वमीमांसा", reading: "tattvamiimaansaa", meaning: "metaphysics", accept: ["the study of what really exists"], example: { jp: "तत्त्वमीमांसा यह पूछती है कि कोई चीज़ सच में है या नहीं, और यही सवाल पूरे दर्शन के नीचे रहता है।", en: "Metaphysics asks whether a thing truly is or not, and that same question lies under the whole of philosophy." }, drill: { jp: "तत्त्वमीमांसा वजूद पर सवाल उठाती है", en: "Metaphysics raises the question of existence" }, hint: "TAT-TVA-MII-MAAN-SAA, feminine — मीमांसा, a systematic enquiry, is feminine and the compound follows it. त्त्व is a THREE-LETTER STACK: त with a halant, त with a halant, व. ⚠️ **SHARES ITS SECOND HALF WITH ज्ञानमीमांसा IN LESSON 4** and the two are three lessons apart on purpose: this one asks what EXISTS, that one asks how we KNOW." },
        { id: "hi-u119l1-dvait", type: "vocab", front: "द्वैत", reading: "dvait", meaning: "dualism", accept: ["the view that mind and body are two different things"], example: { jp: "द्वैत मानता है कि आत्मा और शरीर दो अलग चीज़ें हैं, और इसी से पूरी बहस शुरू होती है।", en: "Dualism holds that the soul and the body are two separate things, and the whole debate starts from that." }, drill: { jp: "द्वैत आत्मा और शरीर को अलग मानता है", en: "Dualism holds the soul and the body to be separate" }, hint: "DVAIT, masculine. द्व is द with a halant then व, and the ै is the ai of unit 3 — one sound, so dvait and never dva-it. 🚨 **IT SITS INSIDE अद्वैत, THE VERY NEXT CARD, AND CANNOT BE MATCHED THERE** because the अ before it is a letter — `findWholeWord` needs both sides clear. The two are deliberately adjacent: they are Hindi philosophy's central quarrel." },
        { id: "hi-u119l1-advait", type: "vocab", front: "अद्वैत", reading: "advait", meaning: "non-dualism", accept: ["the view that everything is finally one"], example: { jp: "अद्वैत इसके ठीक विरोध में कहता है कि सब कुछ एक ही है, और फ़र्क सिर्फ़ दिखता है।", en: "Non-dualism says exactly the opposite — that everything is finally one, and the difference only appears to be there." }, drill: { jp: "अद्वैत के अनुसार सब कुछ एक है", en: "According to non-dualism everything is one" }, hint: "AD-VAIT, masculine — just अ-, not, in front of the previous card. ⚠️ The spelling hides the join: अ + द्वैत writes as अद्वैत with the द् stacked, so the अ looks like part of the stack and is not. The whole of Shankara's school is this one word, and it is the reason Hindi philosophy has two names and not one." },
        { id: "hi-u119l1-bhautikvaad", type: "vocab", front: "भौतिकवाद", reading: "bhautikvaad", meaning: "materialism", accept: ["the view that only solid matter is real"], example: { jp: "भौतिकवाद कहता है कि जो कुछ है वह शरीर जैसी ठोस चीज़ है, और मन उसी का एक काम है।", en: "Materialism says that whatever exists is a solid thing like a body, and the mind is just one of its workings." }, drill: { jp: "भौतिकवाद के लिए मन शरीर का काम है", en: "For materialism the mind is a working of the body" }, hint: "BHAU-TIK-VAAD, masculine. भ carries a puff of air and the ौ is the au of unit 3. The suffix -वाद marks an -ism and runs through this unit four times — भौतिकवाद, आदर्शवाद, अनुभववाद, संदेहवाद — so learn the suffix once and the four come cheap." },
        { id: "hi-u119l1-aadarshvaad", type: "vocab", front: "आदर्शवाद", reading: "aadarshvaad", meaning: "idealism", accept: ["the view that thought comes first and matter after"], example: { jp: "आदर्शवाद इसके ठीक विरोध में चलता है — उसके लिए पहले विचार है, और जो हम छूते हैं वह बाद में आता है।", en: "Idealism runs exactly the other way — for it thought comes first, and what we touch comes after." }, drill: { jp: "आदर्शवाद विचार को पहले मानता है", en: "Idealism holds that thought comes first" }, hint: "AA-DARSH-VAAD, masculine. From आदर्श, an ideal (unit 68), which is BLOCKED inside it by the letter व. 🚨 **आदर, respect (unit 82), FIRES inside it** — the ् that follows is a halant, a mark, not a letter — which is harmless here only because आदर is not carded in this unit." },
        { id: "hi-u119l1-chintan", type: "vocab", front: "चिंतन", reading: "chintan", meaning: "sustained reflection", accept: ["thinking a thing through over a long time"], example: { jp: "एक ही सवाल पर सालों का चिंतन दर्शन बनाता है, वरना बात सिर्फ़ राय रह जाती है।", en: "Years of reflection on a single question is what makes philosophy; otherwise the thing stays a mere opinion." }, drill: { jp: "इस सवाल पर उसका चिंतन लंबा रहा", en: "His reflection on this question was a long one" }, hint: "CHIN-TAN, masculine, the ं written n before the stop त (unit 1 §1). ⚠️ **NOT चिंता, worry (unit 27)**, although the root is the same one: चिंता is what a worry does to you, चिंतन is what you deliberately do to a question. The string चिंता is not inside चिंतन — it ends in न, not ा." },
      ],
    },
    {
      id: "hi-u119l2",
      unit: 119,
      lesson: 2,
      title: "The tools of formal logic",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name logic as a discipline and the moves inside it: deduction down from a rule, induction up to one, a definition, an axiom and a paradox.",
      items: [
        { id: "hi-u119l2-tarkshaastra", type: "vocab", front: "तर्कशास्त्र", reading: "tarkshaastra", meaning: "the formal study of valid reasoning", accept: ["the subject that tests whether an argument holds"], example: { jp: "तर्कशास्त्र यह नहीं बताता कि क्या सच है — वह सिर्फ़ यह देखता है कि दलील ठीक तरीके से बनी है या नहीं।", en: "Logic does not tell you what is true — it only looks at whether the argument has been put together properly." }, drill: { jp: "तर्कशास्त्र दलील का तरीका देखता है", en: "Logic looks at the method of an argument" }, hint: "TARK-SHAAS-TRA, masculine. तर्क, logic (unit 39), plus शास्त्र, a formal discipline — and तर्क is BLOCKED inside it by the letter श. 🚨 **THE GLOSS IS DELIBERATELY NOT 'LOGIC'**: that string is तर्क's already, and `normalizeMeaning` would have made the two cards one (unit 1 §9). तर्क is the reasoning; तर्कशास्त्र is the subject that studies it." },
        { id: "hi-u119l2-nigaman", type: "vocab", front: "निगमन", reading: "nigaman", meaning: "deduction", accept: ["going down from a rule to one case"], example: { jp: "निगमन में बड़े नियम से छोटी बात निकलती है — सब आदमी मरते हैं, इसलिए यह आदमी भी मरेगा।", en: "In deduction the small statement comes out of the big rule — all men die, therefore this man will die too." }, drill: { jp: "निगमन में नियम से नतीजा निकलता है", en: "In deduction the conclusion comes out of the rule" }, hint: "NI-GA-MAN, masculine. ⚠️ निगम, a corporation (unit 103), is BLOCKED inside it by the final न — one letter saves it. The classic Hindi textbook example is the one in the example sentence, and it is worth memorising because the next card is its mirror." },
        { id: "hi-u119l2-aagaman", type: "vocab", front: "आगमन", reading: "aagaman", meaning: "induction", accept: ["coming up from many cases to a rule"], example: { jp: "आगमन इसके ठीक विरोध में चलता है — बहुत से उदाहरण देखकर नियम बनाया जाता है, और वह नियम कभी पक्का नहीं होता।", en: "Induction runs the other way — a rule is made after seeing many examples, and that rule is never certain." }, drill: { jp: "आगमन उदाहरणों से नियम बनाता है", en: "Induction makes a rule out of examples" }, hint: "AA-GA-MAN, masculine. 🚨 **IN ORDINARY HINDI आगमन MEANS AN ARRIVAL** — a station board uses it — and the logical sense is the technical one a textbook uses. The hook is the prefix: नि- goes DOWN from the rule, आ- comes UP to it, and the two cards are next to each other so the pair is learnt as a pair." },
        { id: "hi-u119l2-paribhaashaa", type: "vocab", front: "परिभाषा", reading: "paribhaashaa", meaning: "a definition", accept: ["saying exactly what a word covers"], example: { jp: "बहस से पहले हर शब्द की परिभाषा तय कर लेनी चाहिए, वरना दोनों अलग चीज़ों पर लड़ते रहते हैं।", en: "The definition of every word should be settled before the debate, or the two of them go on fighting about different things." }, drill: { jp: "हर शब्द की परिभाषा पहले तय करो", en: "Settle the definition of every word first" }, hint: "PA-RI-BHAA-SHAA, feminine — a vowel-final Sanskritic noun, so feminine by unit 1 §4. परि-, around, plus भाषा, language (unit 4) — the speech you draw around a word. 🚨 **TWO TAUGHT FRONTS FIRE INSIDE IT**: भाषा, with a mātrā ि in front, and पर, with a mātrā ि behind. Neither is carded in this unit, which is the whole mitigation." },
        { id: "hi-u119l2-svayansiddh", type: "vocab", front: "स्वयंसिद्ध", reading: "svayansiddh", meaning: "an axiom", accept: ["something taken as true because it cannot be proved"], example: { jp: "कुछ बातें स्वयंसिद्ध मानी जाती हैं, क्योंकि उन्हें साबित करने का कोई तरीका ही नहीं है।", en: "Some statements are taken as axioms, because there is simply no way of proving them." }, drill: { jp: "यह बात स्वयंसिद्ध मानी जाती है", en: "This statement is taken as an axiom" }, hint: "SVA-YAN-SIDDH, an INVARIANT adjective used as a noun too, so it never agrees. स्व is स with a halant then व; स्वयं, oneself, plus सिद्ध, proved — proved by itself. द्ध is a DOUBLED stack with a puff of air on the second half." },
        { id: "hi-u119l2-virodhaabhaas", type: "vocab", front: "विरोधाभास", reading: "virodhaabhaas", meaning: "a paradox", accept: ["a statement that cuts against itself"], example: { jp: "विरोधाभास वह बात है जो खुद अपने को काट देती है, और फिर भी उसे छोड़ा नहीं जा सकता।", en: "A paradox is a statement that cuts against itself, and still cannot be set aside." }, drill: { jp: "यह विरोधाभास खुद अपने को काटता है", en: "This paradox cuts against itself" }, hint: "VI-RO-DHAA-BHAAS, masculine. विरोध, opposition (unit 42), plus आभास, a seeming (unit 64) — the look of a contradiction. 🚨 **विरोध FIRES INSIDE IT** (the ा after it is a mātrā) and this unit uses विरोध as a word of its own three times, so no later pass may card विरोध here. ✅ आभास is NOT a substring at all — that ा is a mātrā, not the independent आ the front needs." },
      ],
    },
    {
      id: "hi-u119l3",
      unit: 119,
      lesson: 3,
      title: "The parts an argument is made of",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Take an argument apart the way Indian logic does: the presupposition under it, the ground it rests on, the thing to be proved, the justification offered, the universal link, and the fallacy that breaks it.",
      items: [
        { id: "hi-u119l3-puurvadhaarnaa", type: "vocab", front: "पूर्वधारणा", reading: "puurvadhaarnaa", meaning: "a presupposition", accept: ["something an argument takes for granted before it starts"], example: { jp: "हर दलील के नीचे कोई पूर्वधारणा छिपी रहती है, और बहस उसी पर होनी चाहिए।", en: "Under every argument some presupposition lies hidden, and the debate ought to be about that." }, drill: { jp: "इस दलील के नीचे एक पूर्वधारणा है", en: "Under this argument there is a presupposition" }, hint: "PUUR-VA-DHAAR-NAA, feminine, with a LONG ू. पूर्व, prior, plus धारणा, a belief (unit 64) — the belief held before the argument opens. ✅ धारणा CANNOT be matched inside it: the व before it is a letter." },
        { id: "hi-u119l3-hetu", type: "vocab", front: "हेतु", reading: "hetu", meaning: "the ground of an argument", accept: ["the reason a conclusion rests on"], example: { jp: "पुराने दर्शन में हेतु वह कारण है, और उसके आधार पर नतीजा निकलता है।", en: "In the old philosophy the hetu is the reason, and a conclusion follows on the strength of it." }, drill: { jp: "हेतु के बिना कोई नतीजा नहीं निकलता", en: "Without a ground no conclusion follows" }, hint: "HE-TU, masculine, and ⚠️ **IT ENDS IN A SHORT ु** — hetu, never hetuu. 🚨 In everyday Hindi हेतु is a POSTPOSITION meaning for the sake of — शिक्षा हेतु, for education — and a learner will meet that use far more often. The card teaches the Nyāya NOUN: the middle term that carries a proof." },
        { id: "hi-u119l3-saadhya", type: "vocab", front: "साध्य", reading: "saadhya", meaning: "what is to be proved", accept: ["the thing an argument is trying to establish"], example: { jp: "दलील शुरू करने से पहले साध्य साफ़ होना चाहिए, वरना हेतु किसी और चीज़ को साबित कर देगा।", en: "Before an argument begins the thing to be proved should be clear, or the ground will end up proving something else." }, drill: { jp: "पहले साध्य साफ़ करो फिर हेतु चुनो", en: "Make the claim clear first then choose the ground" }, hint: "SAADH-YA, masculine — an adjective, achievable, used as a noun. ध्य is ध with a halant then य, and the ध carries a puff of air. ⚠️ **साध्य AND हेतु ARE A PAIR AND THIS LESSON TEACHES THEM TOGETHER**: the हेतु is what you argue FROM, the साध्य is what you argue TO, and naming the second one wrong is the commonest way a debate goes nowhere." },
        { id: "hi-u119l3-upapatti", type: "vocab", front: "उपपत्ति", reading: "upapatti", meaning: "a justification", accept: ["the working that shows why a conclusion follows"], example: { jp: "नतीजा मान लेना काफ़ी नहीं है — उसके पीछे की उपपत्ति भी दिखानी पड़ती है।", en: "Accepting the conclusion is not enough — the justification behind it has to be shown as well." }, drill: { jp: "नतीजे के पीछे की उपपत्ति दिखाओ", en: "Show the justification behind the conclusion" }, hint: "U-PA-PAT-TI, feminine, and ⚠️ **IT ENDS IN A SHORT ि** — upapatti, never -ii. The same shape as समिति (u88l2), कृति (u91l4), प्रस्तुति and उपाधि (u97), अतिशयोक्ति (u98l3). त्ति is a DOUBLED stack, doubled in the reading too. ⚠️ Its lesson-mate व्याप्ति has the same trap two cards down." },
        { id: "hi-u119l3-vyaapti", type: "vocab", front: "व्याप्ति", reading: "vyaapti", meaning: "the universal link", accept: ["a tie that holds in every single case"], example: { jp: "व्याप्ति का मतलब है कि जहाँ धुआँ है वहाँ आग है, और यह हर जगह ठीक होना चाहिए।", en: "Vyaapti means that wherever there is smoke there is fire, and that has to hold everywhere." }, drill: { jp: "व्याप्ति हर जगह ठीक होनी चाहिए", en: "The universal link has to hold everywhere" }, hint: "VYAAP-TI, feminine, SHORT ि again. व्य is व with a halant then य, and प्ति is प with a halant then त then ि. ⚠️ The smoke-and-fire example in the example sentence is THE standard illustration in Indian logic, not an invention — a learner who meets व्याप्ति in a text will meet धुआँ in the same paragraph. ✅ या (unit 22) is BLOCKED inside it by the letter प." },
        { id: "hi-u119l3-tarkdosh", type: "vocab", front: "तर्कदोष", reading: "tarkdosh", meaning: "a fallacy", accept: ["a break in the reasoning even when the answer looks right"], example: { jp: "तर्कदोष में नतीजा ठीक लग सकता है, पर दलील का रास्ता टूटा होता है।", en: "In a fallacy the conclusion can look right, but the road the argument took is broken." }, drill: { jp: "इस दलील में एक तर्कदोष है", en: "There is a fallacy in this argument" }, hint: "TARK-DOSH, masculine. तर्क (unit 39) plus दोष, a flaw (unit 70) — and ✅ BOTH are BLOCKED inside it, तर्क by the letter द and दोष by the letter क. ⚠️ Not कुतर्क (u98l2), which is a bad argument made on purpose: a तर्कदोष can be entirely honest, and that is what makes it worth a name." },
      ],
    },
    {
      id: "hi-u119l4",
      unit: 119,
      lesson: 4,
      title: "Knowing, and the look of knowing",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Ask how knowledge is possible at all: epistemology, what is called illusory, self-knowledge, empiricism, scepticism, and the weighing that comes before a decision.",
      items: [
        { id: "hi-u119l4-gyaanmiimaansaa", type: "vocab", front: "ज्ञानमीमांसा", reading: "gyaanmiimaansaa", meaning: "epistemology", accept: ["the study of how we can know anything"], example: { jp: "ज्ञानमीमांसा यह नहीं पूछती कि क्या है, बल्कि यह कि हम कैसे जान सकते हैं कि वह है।", en: "Epistemology does not ask what exists, but how we can know that it exists." }, drill: { jp: "ज्ञानमीमांसा जानने के तरीके पर सवाल उठाती है", en: "Epistemology questions the way of knowing" }, hint: "GYAAN-MII-MAAN-SAA, feminine, following मीमांसा. ज्ञ reads gya (unit 1 §2) and ✅ ज्ञान, knowledge (unit 57), is BLOCKED inside it by the letter म. ⚠️ **PAIRS WITH तत्त्वमीमांसा IN LESSON 1 AND IS THREE LESSONS AWAY ON PURPOSE**: that one asks what there IS, this one asks how we could ever find out." },
        { id: "hi-u119l4-mithyaa", type: "vocab", front: "मिथ्या", reading: "mithyaa", meaning: "illusory", accept: ["looking real without being real"], example: { jp: "अद्वैत में दिखने वाला संसार मिथ्या कहा जाता है — झूठ नहीं, बस उतना सच नहीं।", en: "In non-dualism the world that appears is called illusory — not a lie, just not real to that degree." }, drill: { jp: "यह संसार मिथ्या कहा जाता है", en: "This world is called illusory" }, hint: "MITH-YAA, an INVARIANT adjective — it looks feminine and never changes. थ carries a puff of air. 🚨 **NOT झूठा (unit 4's झूठ)**: a झूठ is told on purpose by somebody, while something मिथ्या simply is not as real as it looks — the difference the example sentence is built to make. ⚠️ या, or (unit 22), FIRES inside it, the ् before it being a halant; या is used as a word of its own in this unit and is not carded." },
        { id: "hi-u119l4-aatmgyaan", type: "vocab", front: "आत्मज्ञान", reading: "aatmgyaan", meaning: "self-knowledge", accept: ["knowing what one really is"], example: { jp: "पुराने दर्शन में सबसे बड़ा ज्ञान आत्मज्ञान माना गया है, क्योंकि बाकी सब उसके बाद आता है।", en: "In the old philosophy self-knowledge is held to be the greatest knowledge, because everything else comes after it." }, drill: { jp: "आत्मज्ञान सबसे बड़ा माना गया है", en: "Self-knowledge is held to be the greatest" }, hint: "AATM-GYAAN, masculine. आत्म-, self, plus ज्ञान (unit 57), which is ✅ BLOCKED inside it by the letter म. ✅ And आत्मा, the soul (unit 90), is NOT a substring at all — आत्मा needs a ा after the म and this word has ज, so the two never collide even though they share a root." },
        { id: "hi-u119l4-anubhavvaad", type: "vocab", front: "अनुभववाद", reading: "anubhavvaad", meaning: "empiricism", accept: ["the view that only what the senses bring counts as knowledge"], example: { jp: "अनुभववाद कहता है कि जो आँख या कान से नहीं आया, वह ज्ञान नहीं है।", en: "Empiricism says that whatever has not come through the eye or the ear is not knowledge." }, drill: { jp: "अनुभववाद अनुभव को ही ज्ञान मानता है", en: "Empiricism counts only experience as knowledge" }, hint: "A-NU-BHAV-VAAD, masculine. अनुभव, experience (unit 32), plus -वाद — and ✅ अनुभव is BLOCKED inside it by the second व. ⚠️ **THE DOUBLED व IS WRITTEN AND READ**: व + व, anubhav-vaad, and dropping one is the commonest misspelling of this word." },
        { id: "hi-u119l4-sandehvaad", type: "vocab", front: "संदेहवाद", reading: "sandehvaad", meaning: "scepticism", accept: ["refusing to take anything as certain"], example: { jp: "संदेहवाद किसी बात को पक्का नहीं मानता, और इसी से वह ज्ञानमीमांसा का सबसे तेज़ औज़ार बन जाता है।", en: "Scepticism takes nothing as certain, and that is exactly what makes it epistemology's sharpest tool." }, drill: { jp: "संदेहवाद किसी बात को पक्का नहीं मानता", en: "Scepticism takes nothing as certain" }, hint: "SAN-DEH-VAAD, masculine, the ं written n before the stop द. संदेह, a doubt (unit 64), plus -वाद, and ✅ संदेह is BLOCKED by the letter व. ⚠️ Not शक (unit 30), which is a doubt you happen to have: संदेहवाद is doubt turned into a method and used on purpose." },
        { id: "hi-u119l4-uuhaapoh", type: "vocab", front: "ऊहापोह", reading: "uuhaapoh", meaning: "weighing a thing both ways", accept: ["turning a question over and over before deciding"], example: { jp: "फ़ैसले से पहले का ऊहापोह दर्शन का असली काम है — दोनों तरफ़ की दलील को बराबर तौलना।", en: "The weighing that comes before a decision is philosophy's real work — holding the arguments on both sides in the same balance." }, drill: { jp: "फ़ैसले से पहले ऊहापोह ज़रूरी है", en: "Weighing both ways is necessary before a decision" }, hint: "UU-HAA-POH, masculine. ⚠️ **IT OPENS WITH THE INDEPENDENT ऊ AND IT IS LONG** — uuhaapoh, never uhaapoh. ऊह, a conjecture, plus अपोह, its removal: putting a thought up and taking it down again. A written word — a speaker would say सोच विचार — and it is this unit's last card because it is what the other twenty-three are for." },
      ],
    },
  ],
};
