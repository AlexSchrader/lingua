// HI Unit 101 — मात्रा के बारीक दर्जे ("The fine grades of degree") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 1 (u98–u110). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, unit98.js §C1–§C9.
//
// 🚨 SLOT NARROWED. The scaffold title is "Nuance and degree", and QUANTITY is
// spent: u63 तुलना और मात्रा owns औसत, अनुपात, स्तर, पैमाना, मात्रा, बहुमत, अल्पमत,
// इकाई, न्यूनतम, अधिकतम, अंश — unit61.js §B9 allocated quantity abstraction to
// u63 explicitly and told later slots to stay off it. u45 नाप-तोल owns the
// measures and u19 कैसा और कितना the plain adjectives.
// WHAT u101 OWNS INSTEAD: **DEGREE, not amount.** Not how much there is, but how
// far along a scale it sits and how firmly the speaker will commit to that. This
// is unit98.js §C4's definition of B2 applied to quantity: the learner already
// has the number; u101 gives them the grade and the hedge.
//
// ⚠️ TWO WORDS THIS BLOCK WANTED AND THE VISARGA BAN REFUSED. unit61.js §B1
// closed the -तः adverb class for the whole course, and a degree unit walks
// straight into it: **अंततः (ultimately) and पूर्णतः (entirely) were both in the
// first draft of lesson 3 and both are REFUSED.** आखिर (u30) and पूरा (u19)
// already carry those jobs, and नितांत took पूर्णतः's slot. ⚠️ अनुमानतः was
// likewise refused in lesson 4 — the visarga is taught NOWHERE in u1–u6, so a
// learner reaching u101 has never been shown how to decode it. Do not re-open it.
//
// ⚠️ FOUR CANDIDATES REFUSED BY PROBE, AND THE FIRST IS THE INSTRUCTIVE ONE:
//   • 🚨 **करीबन IS REFUSED BECAUSE तकरीबन (u64l1) IS THE SAME LEXEME** — both
//     from the same Arabic root, तकरीबन being the standard Hindi form and करीबन
//     the variant. `front-taken.mjs` passed it, and the gloss probe passed it
//     too, because तकरीबन is glossed "roughly speaking" while करीबन wanted
//     "roughly, about". **Only reading the owner's gloss caught it.** This is
//     the दुगना/दुगुना failure unit61.js §B4 records, one band later. ⚠️ AND
//     HINDI ALREADY HAS TWO WORDS HERE: लगभग (u38l1, "roughly") and तकरीबन
//     (u64l1). A third was never needed. कमोबेश took the slot, and it means
//     something genuinely different — give or take, in BOTH directions.
//   • **अधिक IS REFUSED, and for unit98.js §C2's reason.** It is the तत्सम
//     register of ज़्यादा (u6l3), so its only honest gloss is "more", which is
//     ज़्यादा's string. The gloss normalizer makes register doublets unbuildable;
//     this is the second one the band has hit.
//   • **अपर्याप्त REFUSED** — this unit cards पर्याप्त, and both at once is two
//     mastery tracks for one lexeme (unit1.js §6's बड़ा/बड़ी rule). The अ-
//     negation is taught in the hint instead, as u61 did for असहमत.
//   • **मंदतर, तीव्रतर, अल्पतम and न्यूनतर REFUSED as coinages.** Hindi does not
//     form comparatives with -तर productively, and unit98.js §C1's test applies:
//     if a newspaper would not print it, it is not a word.
//   • Also drafted and left FREE: मामूली, विरले, सन्निकट, न्यूनाधिक, गिनेचुने.
//     ⚠️ **संभव IS ALSO FREE** and is worth knowing about — u116's conditional
//     slot will want it. This unit does not take it.
//     ⚠️ सापेक्ष and निरपेक्ष are u68's, बेहद and दर्जा are u47's, हद is u23's,
//     मोटा is u19's, ज़रा is u30's, काफ़ी and इतना are u22's, अंश is u63's.
//
// ⚠️ SUBSTRING TRAPS, computed with `findWholeWord`'s real boundary test. The
// `traps` probe found NO u101 front matching inside another word, so every trap
// here runs the other way — a taught front sitting inside one of mine:
//   FIRES, each noted in its own hint:
//     • **बहुत (u4l4) inside बहुतायत (l3)** — the ा after it is a mātrā.
//     • **कम (u1l2) inside कमोबेश (l4)** — the ो after it is a mātrā.
//     • क्ष (u6) inside अपेक्षाकृत and क्षीण, and ज़ (u4) inside अंदाज़न. Harmless:
//       both are `glyph` items and `canCloze` requires `type === "vocab"`.
//   ✅ BLOCKED, and these are the two that matter because they are near-lexemes:
//     • **अपेक्षा (u72l1) inside अपेक्षाकृत** — blocked by the क, a \p{L} letter.
//     • **तुलना (u57l2) inside तुलनात्मक** — blocked by the त.
//     • करीबन would have been blocked inside तकरीबन by the त — which is exactly
//       why the front probe passed it and the LEXEME check had to catch it. A
//       blocked substring is not a licence; it only means the router is safe.
//     • Also blocked: संभव inside यथासंभव is irrelevant (संभव is not carded);
//       था (u24l1) inside यथासंभव and थे (u24l1) inside यथेष्ट are blocked by the
//       letters on both sides.
//
// ृ (ऋ's MĀTRĀ) IS SPENT A SEVENTH TIME, in अपेक्षाकृत (l1), with the hint
// unit61.js §B2 requires. The running list: कृपया (u7l2) · पृष्ठभूमि (u62l1) ·
// वृद्धि and प्रवृत्ति (u69l4) · पुनरावृत्ति (u73l4) · दृष्टांत (u98l1) ·
// अपेक्षाकृत (u101l1). The mark stays uncarded; no stroke data (unit1.js §3, §7).
//
// GENDER NOTE — THIS UNIT IS ALMOST ALL ADJECTIVES AND ADVERBS, so unit1.js §4
// barely applies, and that is itself worth stating:
//   ⚠️ ONLY ONE NOUN IS CARDED: **बहुतायत, and it is FEMININE AND CONSONANT-
//   FINAL** — बहुतायत थी, never था. Same unmarked class as ज़िद (u61), डींग, ढील
//   and धौंस (u98), छानबीन (u99).
//   INVARIANT ADJECTIVES — all of them, and the hints say so one by one:
//   अपेक्षाकृत · तुलनात्मक · आंशिक · अधिकांश · पर्याप्त · यथेष्ट · प्रबल · क्षीण ·
//   गहन · सघन · विरल · प्रचुर · चरम · अत्यल्प · नगण्य.
//   ⚠️ **NOT ONE OF THESE FIFTEEN TAKES -ी FOR THE FEMININE.** That is the single
//   most useful fact in the unit: the learner has spent 100 units on -आ/-ी
//   agreement (बड़ा/बड़ी, unit1.js §6) and every adjective here is a Sanskrit or
//   Perso-Arabic loan that does not inflect at all. प्रबल आवाज़, प्रबल असर.
//   ADVERBS, which never agree with anything: अत्यंत · नितांत · निहायत ·
//   अंदाज़न · कमोबेश · कदाचित · किंचित · यथासंभव.
//   NO VERB IS CARDED. Still ZERO 3rd-person exceptions in the whole language.
export const HI_UNIT101 = {
  id: "hi-u101",
  lang: "hi",
  title: "मात्रा के बारीक दर्जे",
  order: 101,
  stage: "b2",
  lessons: [
    {
      id: "hi-u101l1",
      unit: 101,
      lesson: 1,
      title: "Degrees set against each other",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Grade something against something else rather than on its own: comparatively, by comparison, in part only, for the greater part, enough for the purpose, and as much as anyone wanted.",
      items: [
        { id: "hi-u101l1-apekshaakrit", type: "vocab", front: "अपेक्षाकृत", reading: "apekshaakrit", meaning: "comparatively, set against something else", accept: ["relatively, by contrast with"], example: { jp: "इस साल बारिश अपेक्षाकृत कम हुई, पर उपज पिछले साल से बेहतर रही।", en: "This year the rain was comparatively less, but the yield stayed better than last year's." }, drill: { jp: "इस साल बारिश अपेक्षाकृत कम हुई", en: "This year the rain was comparatively less" }, hint: "A-PEK-SHAA-KRIT, INVARIANT: अपेक्षाकृत कम, अपेक्षाकृत बड़ा. ⚠️ THE ृ IS ऋ's MĀTRĀ AND READS ri (unit 61 §B2) — the seventh Hindi word to spend the mark, after कृपया (unit 7), पृष्ठभूमि (unit 62), वृद्धि and प्रवृत्ति (unit 69), पुनरावृत्ति (unit 73) and दृष्टांत (unit 98). ✅ अपेक्षा, what one counts on (unit 72), CANNOT fire inside it — the क after it is a \\p{L} letter. ⚠️ It never stands alone: it always grades another word." },
        { id: "hi-u101l1-tulnaatmak", type: "vocab", front: "तुलनात्मक", reading: "tulnaatmak", meaning: "arrived at by comparison", accept: ["comparative in method"], example: { jp: "दोनों शहरों का तुलनात्मक शोध हुआ, और उससे एक ही फ़र्क साफ़ निकला।", en: "A comparative study of the two cities was done, and one single difference came out clearly from it." }, drill: { jp: "दोनों शहरों का तुलनात्मक शोध हुआ", en: "A comparative study of the two cities was done" }, hint: "TUL-NAAT-MAK, INVARIANT: तुलनात्मक शोध, तुलनात्मक राय. Built on तुलना, a comparison (unit 57), plus -आत्मक 'of the nature of'. ✅ तुलना CANNOT fire inside it — the त after it is a letter. ⚠️ Not अपेक्षाकृत above: अपेक्षाकृत grades ONE thing against another, तुलनात्मक describes a METHOD that looks at both." },
        { id: "hi-u101l1-aanshik", type: "vocab", front: "आंशिक", reading: "aanshik", meaning: "only in part", accept: ["partial, not complete"], example: { jp: "सरकार ने आंशिक जवाब दिया, इसलिए आधे सवाल वहीं रह गए।", en: "The government gave a partial answer, so half the questions stayed where they were." }, drill: { jp: "सरकार ने आंशिक जवाब दिया", en: "The government gave a partial answer" }, hint: "AAN-SHIK, INVARIANT: आंशिक जवाब, आंशिक सफलता. Built on अंश, a portion (unit 63) — the अं becomes आं in the derived adjective. ⚠️ Not आधा, half (unit 11): आधा is an exact fraction, आंशिक only says some of it and refuses to say how much, which is why it belongs in a degree unit and not a quantity one." },
        { id: "hi-u101l1-adhikaansh", type: "vocab", front: "अधिकांश", reading: "adhikaansh", meaning: "the greater part of something", accept: ["most of it, by weight of numbers"], example: { jp: "अधिकांश लोग इस नियम के बारे में जानते ही नहीं थे, और वही सबसे बड़ी खामी थी।", en: "Most people did not even know about this rule, and that was the biggest shortcoming of all." }, drill: { jp: "अधिकांश लोग इस नियम को नहीं जानते थे", en: "Most people did not know this rule" }, hint: "A-DHI-KAANSH, INVARIANT: अधिकांश लोग, अधिकांश काम. It is अधिक, 'more', on अंश, a portion (unit 63). ⚠️ अधिक ITSELF IS NOT CARDED AND WILL NOT BE: it is the तत्सम register of ज़्यादा (unit 6), so its only honest gloss is 'more', which is ज़्यादा's — the register-doublet problem unit 98 §C2 measures. Not बहुमत, a majority (unit 63): a बहुमत is a counted vote, अधिकांश is just most of them." },
        { id: "hi-u101l1-paryaapt", type: "vocab", front: "पर्याप्त", reading: "paryaapt", meaning: "enough for the purpose", accept: ["sufficient for what is needed"], example: { jp: "पैसा पर्याप्त था पर समय नहीं था, इसलिए काम आधा ही हुआ।", en: "The money was enough, but the time was not, so only half the work got done." }, drill: { jp: "पैसा पर्याप्त था पर समय नहीं", en: "The money was enough, but the time was not" }, hint: "PAR-YAAPT, INVARIANT: पर्याप्त पैसा, पर्याप्त जगह. The र्या is a bare र् with या after it. ⚠️ अपर्याप्त, insufficient, IS NOT CARDED — it is the same lexeme with the अ- prefix, and unit 1 §6 forbids two mastery tracks for one word. Say अपर्याप्त freely; it is formed the way असहमत is formed from सहमत (unit 61). Not काफ़ी, quite enough (unit 22): काफ़ी is a feeling, पर्याप्त is measured against a requirement." },
        { id: "hi-u101l1-yatheshth", type: "vocab", front: "यथेष्ट", reading: "yatheshth", meaning: "as much as one wanted", accept: ["as much as could be wished"], example: { jp: "उसे यथेष्ट समय दिया गया, फिर भी उसने कुछ नहीं लिखा।", en: "He was given as much time as he wanted, and even then he wrote nothing." }, drill: { jp: "उसे यथेष्ट समय दिया गया", en: "He was given as much time as he wanted" }, hint: "YA-THESHTH, INVARIANT. यथा is 'as' and इष्ट is 'wished for' — so as much as was wished, which is MORE than merely enough. ⚠️ THE CONTRAST WITH पर्याप्त ABOVE IS THE WHOLE POINT: पर्याप्त is enough for the job, यथेष्ट is all anyone could ask for, and the example's 'even then' only works with the second one. The ष्ट is ष with ट stacked (unit 6), both retroflex." },
      ],
    },
    {
      id: "hi-u101l2",
      unit: 101,
      lesson: 2,
      title: "Strong, faint, dense, sparse",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Grade intensity and density in the written register: strong and prevailing, faint and fading, intense and thorough, packed close, thinly scattered, and plentiful.",
      items: [
        { id: "hi-u101l2-prabal", type: "vocab", front: "प्रबल", reading: "prabal", meaning: "strong and prevailing", accept: ["powerful enough to carry the day"], example: { jp: "इस बात के प्रबल प्रमाण हैं, इसलिए कोई प्रतिवाद नहीं टिका।", en: "There is strong proof of this, so no counter-argument stood." }, drill: { jp: "इस बात के प्रबल प्रमाण हैं", en: "There is strong proof of this" }, hint: "PRA-BAL, INVARIANT: प्रबल प्रमाण, प्रबल आवाज़ — it does NOT become प्रबली. Built on बल, force. ⚠️ Not ताकतवर or मज़बूत: प्रबल is not about physical strength at all, it is about one thing being stronger than the others in play, which is why it goes with प्रमाण and राय rather than with a body." },
        { id: "hi-u101l2-kshiin", type: "vocab", front: "क्षीण", reading: "kshiin", meaning: "faint and weakening", accept: ["grown thin and fading"], example: { jp: "उम्मीद अब क्षीण है, पर छानबीन अभी बंद नहीं हुई।", en: "Hope is faint now, but the inquiry has not yet been closed." }, drill: { jp: "उम्मीद अब क्षीण है", en: "Hope is faint now" }, hint: "KSHIIN, INVARIANT, one syllable. ⚠️ It opens with the conjunct क्ष (unit 6) and the ी makes it long — kshiin, never kshin. ⚠️ Not कमज़ोर, weak (unit 35): something कमज़ोर was never strong, something क्षीण WAS and is now wearing away. That is why it goes with उम्मीद, रोशनी and आवाज़ and not with a person." },
        { id: "hi-u101l2-gahan", type: "vocab", front: "गहन", reading: "gahan", meaning: "intense and thorough", accept: ["gone into deeply"], example: { jp: "गहन छानबीन के बाद ही वह प्रमाण मिला, जो पहले किसी को नहीं दिखा था।", en: "Only after an intense inquiry was that proof found, which nobody had seen before." }, drill: { jp: "गहन छानबीन के बाद प्रमाण मिला", en: "The proof was found after an intense inquiry" }, hint: "GA-HAN, INVARIANT: गहन छानबीन, गहन शोध. ⚠️ Not गहरा, deep (unit 16), and the difference matters because they look like the same word: गहरा measures DEPTH and takes -ी for the feminine (गहरी नदी), गहन measures EFFORT and never changes. A नदी is गहरी; a शोध is गहन." },
        { id: "hi-u101l2-saghan", type: "vocab", front: "सघन", reading: "saghan", meaning: "packed close together", accept: ["thick and closely spaced"], example: { jp: "सघन जंगल में रोशनी नहीं पहुँचती, इसलिए वहाँ दिन में भी अंधेरा रहता है।", en: "Light does not reach inside a dense forest, so it stays dark there even in the daytime." }, drill: { jp: "सघन जंगल में रोशनी नहीं पहुँचती", en: "Light does not reach inside a dense forest" }, hint: "SA-GHAN, INVARIANT: सघन जंगल, सघन आबादी. Rhymes with गहन above and the two are easy to swap, so: गहन is about how DEEPLY something was done, सघन is about how CLOSELY things sit. ⚠️ Not भारी, heavy (unit 19): a सघन thing is not heavy, it has no gaps." },
        { id: "hi-u101l2-viral", type: "vocab", front: "विरल", reading: "viral", meaning: "thinly scattered", accept: ["spread thin, with gaps"], example: { jp: "पहाड़ पर आबादी विरल है, इसलिए एक गाँव से दूसरे तक पहुँचने में घंटे लगते हैं।", en: "The population on the mountain is thinly scattered, so it takes hours to get from one village to the next." }, drill: { jp: "पहाड़ पर आबादी विरल है", en: "The population on the mountain is thinly scattered" }, hint: "VI-RAL, INVARIANT: विरल आबादी, विरल पेड़. The exact opposite of सघन above, and the pair is carded side by side on purpose. ⚠️ Not कम, less (unit 1): कम is about the TOTAL being small, विरल is about the SPACING being wide — a विरल आबादी can be large and still be विरल, which is the example's point." },
        { id: "hi-u101l2-prachur", type: "vocab", front: "प्रचुर", reading: "prachur", meaning: "plentiful", accept: ["there in large supply"], example: { jp: "इस इलाके में पानी प्रचुर है, पर उसे खेत तक लाने का कोई तंत्र नहीं है।", en: "Water is plentiful in this area, but there is no system to bring it to the fields." }, drill: { jp: "इस इलाके में पानी प्रचुर है", en: "Water is plentiful in this area" }, hint: "PRA-CHUR, INVARIANT: प्रचुर पानी, प्रचुर उपज. ⚠️ Not ज़्यादा, more (unit 6): ज़्यादा is comparative and needs something to be more THAN, प्रचुर is absolute — there is simply a lot. Lesson 3's बहुतायत is the noun for the same idea, and the two are deliberately split so the pair is met twice." },
      ],
    },
    {
      id: "hi-u101l3",
      unit: 101,
      lesson: 3,
      title: "The far ends of the scale",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Push a statement to the end of its scale, and pick the right register for doing it: at the furthest point, to the highest degree, utterly, exceedingly, very little indeed, and sheer abundance.",
      items: [
        { id: "hi-u101l3-charam", type: "vocab", front: "चरम", reading: "charam", meaning: "at the furthest point of its scale", accept: ["at its height, going no further"], example: { jp: "मंदी अपने चरम पर थी, और उस हफ़्ते किसी को काम नहीं मिला।", en: "The downturn was at its height, and that week nobody got work." }, drill: { jp: "मंदी अपने चरम पर थी", en: "The downturn was at its height" }, hint: "CHA-RAM, INVARIANT. The frame a learner needs is X अपने चरम पर होना, to be at its height. ⚠️ Not अंत, the end (unit 5): the अंत is where a thing STOPS, the चरम is where it is MOST itself — a मंदी at its चरम is not over, it is at its worst." },
        { id: "hi-u101l3-atyant", type: "vocab", front: "अत्यंत", reading: "atyant", meaning: "to the highest degree", accept: ["in the highest measure"], example: { jp: "यह शोध अत्यंत ज़रूरी है, क्योंकि इसके बिना दवा का परीक्षण शुरू नहीं हो सकता।", en: "This research is necessary to the highest degree, because without it the medicine's trial cannot begin." }, drill: { jp: "यह शोध अत्यंत ज़रूरी है", en: "This research is necessary to the highest degree" }, hint: "AT-YANT, an adverb, so it never agrees with anything. ⚠️ THIS IS THE WRITTEN-तत्सम ONE of the three intensifiers in this lesson, and register is the whole distinction: अत्यंत belongs in a report or a book, निहायत below is Perso-Arabic and belongs in speech, नितांत is literary and rare. Hindi grades its intensifiers by REGISTER, not by strength — unit 98 §C2 explains why that cannot be taught as a gloss and must live in the hint." },
        { id: "hi-u101l3-nitaant", type: "vocab", front: "नितांत", reading: "nitaant", meaning: "utterly, with nothing held back", accept: ["absolutely and without qualification"], example: { jp: "यह दलील नितांत निराधार है, इसलिए उसे अखबार में नहीं जाना चाहिए।", en: "This argument is utterly baseless, so it should not go into the newspaper." }, drill: { jp: "यह दलील नितांत निराधार है", en: "This argument is utterly baseless" }, hint: "NI-TAANT, an adverb. The literary one of the three: a novel or an editorial uses नितांत, ordinary speech does not. ⚠️ पूर्णतः, 'entirely', WAS THE OBVIOUS CANDIDATE HERE AND IS REFUSED: the visarga ः is banned from every B2 front (unit 61 §B1), because it is taught nowhere in units 1–6. नितांत took the slot and पूरा (unit 19) already covers the plain sense." },
        { id: "hi-u101l3-nihaayat", type: "vocab", front: "निहायत", reading: "nihaayat", meaning: "exceedingly", accept: ["to an extreme degree, in speech"], example: { jp: "उसका जवाब निहायत बुरा था, और उसके बाद किसी ने कुछ नहीं पूछा।", en: "His answer was exceedingly bad, and after that nobody asked anything." }, drill: { jp: "उसका जवाब निहायत बुरा था", en: "His answer was exceedingly bad" }, hint: "NI-HAA-YAT, an adverb, and the SPOKEN one of this lesson's three — Perso-Arabic, like बेहद (unit 47) and ज़रा (unit 30). ⚠️ It leans NEGATIVE in ordinary use: निहायत बुरा, निहायत बेवकूफ़ी. You would not say निहायत अच्छा and be heard as sincere. अत्यंत above is register-neutral and takes either side." },
        { id: "hi-u101l3-atyalp", type: "vocab", front: "अत्यल्प", reading: "atyalp", meaning: "very little indeed", accept: ["in a vanishingly small amount"], example: { jp: "इस दवा का असर अत्यल्प था, इसलिए परीक्षण आगे नहीं बढ़ा।", en: "This medicine's effect was very little indeed, so the trial did not go forward." }, drill: { jp: "इस दवा का असर अत्यल्प था", en: "This medicine's effect was very little indeed" }, hint: "AT-YALP, INVARIANT: अत्यल्प असर, अत्यल्प संख्या. Same अति- half as अत्यंत above, here on अल्प, 'little' — so the bottom of the scale, where अत्यंत is the top. ⚠️ Not कम, less (unit 1), and not नगण्य (lesson 4): कम is relative, अत्यल्प is 'startlingly little', and नगण्य goes one step further and says it can be ignored." },
        { id: "hi-u101l3-bahutaayat", type: "vocab", front: "बहुतायत", reading: "bahutaayat", meaning: "sheer abundance", accept: ["a great plenty of something"], example: { jp: "इस साल आम की बहुतायत थी, इसलिए कीमत आधी रह गई।", en: "There was an abundance of mangoes this year, so the price stayed at half." }, drill: { jp: "इस साल आम की बहुतायत थी", en: "There was an abundance of mangoes this year" }, hint: "BA-HU-TAA-YAT — ⚠️ THE ONLY NOUN IN THIS UNIT, AND IT IS FEMININE AND CONSONANT-FINAL, so nothing in the shape says so: बहुतायत थी, never था. Same unmarked class as ज़िद (unit 61), डींग and ढील (unit 98), छानबीन (unit 99). 🚨 SUBSTRING NOTE, AND IT FIRES: बहुत (unit 4) whole-word-matches inside it, because the ा that follows is a mātrā. The noun for lesson 2's प्रचुर." },
      ],
    },
    {
      id: "hi-u101l4",
      unit: 101,
      lesson: 4,
      title: "Hedging the figure",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Refuse to commit to an exact figure, in six different ways: by estimate, give or take, on rare occasions, the slightest bit, too small to count, and as far as possible.",
      items: [
        { id: "hi-u101l4-andaazan", type: "vocab", front: "अंदाज़न", reading: "andaazan", meaning: "by estimate rather than by count", accept: ["at a guess, not measured"], example: { jp: "भीड़ में अंदाज़न दो सौ लोग थे, पर किसी ने गिना नहीं।", en: "There were two hundred people in the crowd by estimate, but nobody counted." }, drill: { jp: "भीड़ में अंदाज़न दो सौ लोग थे", en: "There were two hundred people in the crowd by estimate" }, hint: "AN-DAA-ZAN, an adverb, with ज़ (unit 4), never plain ज. ⚠️ Built on the same root as अंदाज़ा, an estimate (unit 57) — the -न ending is the Perso-Arabic adverb maker, exactly as in कमोबेश's neighbour तकरीबन (unit 64). So: an अंदाज़ा is the NOUN you form, अंदाज़न is HOW you are speaking. ⚠️ Not आकलन (unit 99): an आकलन is counted up and written down, which is the opposite of अंदाज़न." },
        { id: "hi-u101l4-kamobesh", type: "vocab", front: "कमोबेश", reading: "kamobesh", meaning: "give or take, in either direction", accept: ["a bit more or a bit less"], example: { jp: "कमोबेश सब लोग इस नियम से असहमत थे, सिर्फ़ दो तटस्थ रहे।", en: "Give or take, all the people disagreed with this rule; only two stayed neutral." }, drill: { jp: "कमोबेश सब लोग इस नियम से असहमत थे", en: "Give or take, all the people disagreed with this rule" }, hint: "KA-MO-BESH, an adverb. कम is 'less' (unit 1) and बेश is 'more', so literally less-or-more — and that is what makes it DIFFERENT from लगभग (unit 38) and तकरीबन (unit 64): those two round in one direction, कमोबेश admits the error runs both ways. 🚨 SUBSTRING NOTE, AND IT FIRES: कम matches inside it, because the ो that follows is a mātrā. ⚠️ करीबन was wanted here and REFUSED — तकरीबन is the same lexeme." },
        { id: "hi-u101l4-kadaachit", type: "vocab", front: "कदाचित", reading: "kadaachit", meaning: "on rare occasions", accept: ["once in a long while"], example: { jp: "ऐसी गलती कदाचित ही होती है, इसलिए इस बार किसी को भरोसा नहीं हुआ।", en: "Such a mistake happens only on rare occasions, which is why nobody believed it this time." }, drill: { jp: "ऐसी गलती कदाचित ही होती है", en: "Such a mistake happens only on rare occasions" }, hint: "KA-DAA-CHIT, an adverb, and it almost always carries ही — कदाचित ही, 'only rarely'. ⚠️ Not शायद, perhaps (unit 22): शायद hedges WHETHER something is true, कदाचित hedges HOW OFTEN it happens. The two are not interchangeable and a learner will try to use this one for 'maybe'." },
        { id: "hi-u101l4-kinchit", type: "vocab", front: "किंचित", reading: "kinchit", meaning: "the slightest bit", accept: ["even a little, in the written register"], example: { jp: "उसकी बात में किंचित खुशी थी, पर उसने कुछ कहा नहीं।", en: "There was the slightest bit of happiness in what he said, but he said nothing more." }, drill: { jp: "उसकी बात में किंचित खुशी थी", en: "There was the slightest bit of happiness in what he said" }, hint: "KIN-CHIT, an adverb. The written-तत्सम partner of ज़रा (unit 30) and थोड़ा (unit 6), and the register is the whole difference: ज़रा in speech, किंचित in a book. ⚠️ It is often used in the NEGATIVE — किंचित भी नहीं, 'not in the slightest' — which is the frame worth remembering, because that is where a learner will meet it first." },
        { id: "hi-u101l4-naganya", type: "vocab", front: "नगण्य", reading: "naganya", meaning: "too small to count", accept: ["small enough to be ignored"], example: { jp: "इतने बड़े तंत्र में यह नुकसान नगण्य है, पर एक छोटी कंपनी के लिए नहीं होता।", en: "In so large a system this loss is too small to count, but for a small company it would not be." }, drill: { jp: "इतने बड़े तंत्र में यह नुकसान नगण्य है", en: "In so large a system this loss is too small to count" }, hint: "NA-GAN-YA, INVARIANT: नगण्य नुकसान, नगण्य संख्या. From गिनना, to count (unit 18) — न- negates it, so literally not-to-be-counted. The ण्य is retroflex ण with य stacked. ⚠️ Stronger than अत्यल्प (lesson 3): something अत्यल्प is startlingly little and still real, something नगण्य you are entitled to leave out — and the example says that is a judgement about CONTEXT, not about size." },
        { id: "hi-u101l4-yathaasambhav", type: "vocab", front: "यथासंभव", reading: "yathaasambhav", meaning: "as far as it can be managed", accept: ["to the extent possible"], example: { jp: "यथासंभव सब सवालों का जवाब दिया गया, पर दो का जवाब किसी के पास नहीं था।", en: "As far as it could be managed every question was answered, but nobody had an answer to two of them." }, drill: { jp: "यथासंभव सब सवालों का जवाब दिया गया", en: "As far as it could be managed every question was answered" }, hint: "YA-THAA-SAM-BHAV, an adverb. Same यथा 'as' half as यथेष्ट (lesson 1), here on संभव, 'possible'. ⚠️ संभव IS NOT CARDED ANYWHERE IN HINDI and this unit deliberately leaves it free — unit 116's conditional slot will want it. ⚠️ It is the honest hedge of an official notice: यथासंभव promises effort and refuses to promise the result, which is exactly what the example's second clause shows." },
      ],
    },
  ],
};
