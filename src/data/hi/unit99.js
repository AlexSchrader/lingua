// HI Unit 99 — सबूत और सत्यता ("Proof and what holds up") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 BLOCK 1 (u98–u110). Conventions: unit1.js §1–§11, unit31.js §A1–§A8,
// unit61.js §B1–§B9, then unit98.js §C1–§C9 for the B2 band.
//
// 🚨 SLOT NARROWED. The scaffold title is "Evidence and sources", and the SOURCE
// half is spent twice over: u65 खबर कहाँ से आई owns स्रोत, हवाला, अपुष्ट, खंडन,
// उद्धरण, संपादकीय, शीर्षक, निष्पक्ष, प्रामाणिक, पड़ताल, पक्षपात, खुलासा, and u44
// खबर और मीडिया owns अफ़वाह, दावा, विज्ञापन, छपाई. **Measured 9/30 on the first
// draft's pool**, and the nine it lost were exactly the source words.
// WHAT u99 OWNS INSTEAD: **the TEST of a claim** — what counts as proof, how you
// check it, how it fails, and how you judge honestly. u65 asks where a claim came
// from; u99 asks whether it survives being checked.
//
// ⚠️ FOUR CANDIDATES REFUSED, each for a different reason, so no later block
// re-proposes them:
//   • **आँकड़ा REFUSED — आँकड़े (u87l1) IS THE SAME LEXEME**, the plural of it.
//     `front-taken.mjs` passed it cleanly because the strings differ, and only
//     the -ा/-े paradigm check unit61.js §B4 demands caught it. This is the
//     fourth hi inflection homograph on record after कड़ी/कड़ा, लड़ी/लड़ना and
//     मानो/मानना.
//   • **सत्यापित REFUSED — सत्यापन (u93l2) is the same lexeme**, its past
//     participle.
//   • **प्रामाणिकता REFUSED — प्रामाणिक (u65) carries the root already** and one
//     card on it is enough (unit61.js §B4's derivative rule).
//   • **खोजबीन REFUSED** — this unit's own छानबीन is the same gloss space, and
//     two cards for one idea in one unit is the defect ship-gate's ambiguous-
//     prompt check exists to catch.
//   • Also drafted and left FREE for a later block: पुष्ट, अभिप्रमाणन.
//     ⚠️ **कसौटी is u68's, शपथ is u93's, प्रत्यक्ष is u62's, तथ्य is u87's,
//     संदिग्ध is u64's, त्रुटि is u70's** — all probed, all taken, none available.
//
// 🚨 पुष्टि (l1) AND प्रतिपुष्टि (u100l3) ARE BOTH CARDED, DELIBERATELY, AND THE
// DECISION IS RECORDED BECAUSE IT LOOKS LIKE A DUPLICATE AND IS NOT.
// प्रतिपुष्टि is प्रति + पुष्टि, "feedback", the systems term — a distinct compound
// noun, the same relation प्रतिवाद (u98l2) has to वाद. ⚠️ AND पुष्टि WHOLE-WORD-
// FIRES INSIDE प्रतिपुष्टि, because the ि before it is a mātrā and
// `findWholeWord`'s boundary test only blocks a \p{L} letter. Both units are in
// block 1, both hints say so, and **neither unit's sentences contain the other
// word** — which is the whole mitigation, since each card searches only its own
// example and drill.
// ⚠️ AND अपुष्ट (u65) IS THE NEGATED ADJECTIVE OF THE SAME ROOT. It is not a
// collision — अपुष्ट is "unconfirmed" and पुष्टि is the confirmation it lacks, so
// l1's hint teaches them as the pair they are. The strings do not overlap.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4):
//   ⚠️ FEMININE: गवाही · पुष्टि · छानबीन · भ्रांति · सत्यता · विश्वसनीयता ·
//     सत्यनिष्ठा.
//   ⚠️ **पुष्टि AND भ्रांति END IN A SHORT ि** — pushti, bhraanti, never -ii. Same
//   class as अतिशयोक्ति and स्वीकारोक्ति (u98), समिति (u88), कृति (u91).
//   ⚠️ **छानबीन IS FEMININE AND CONSONANT-FINAL**, so nothing in the shape says
//   so: पूरी छानबीन, never पूरा. Same class as ज़िद (u61), डींग and ढील (u98).
//   ⚠️ **सत्यता, विश्वसनीयता AND सत्यनिष्ठा ARE ALL -ता/-ष्ठा ABSTRACTS AND ALL
//   FEMININE** (unit61.js §B6) — and all three end in -आ, which reads masculine
//   everywhere else in the course.
//   MASCULINE: प्रमाण · साक्ष्य · परीक्षण · प्रतिदर्श · आकलन · मूल्यांकन ·
//   दोहराव · दुष्प्रचार · मिथक.
//   INVARIANT ADJECTIVES: निर्विवाद · अकाट्य · वस्तुनिष्ठ · आत्मनिष्ठ ·
//   सर्वमान्य · तथ्यपरक.
//   VERBS, both regular -ना (unit1.js §5): गढ़ना · तौलना. Still ZERO 3rd-person
//   exceptions in the whole language.
//
// ⚠️ SUBSTRING TRAPS, computed with `findWholeWord`'s real boundary test:
//   FIRES — पुष्टि (this unit) inside प्रतिपुष्टि (u100l3), see above. ढ़ (u4, a
//   glyph) inside गढ़ना, harmless because `canCloze` requires `type === "vocab"`.
//   BLOCKED — सत्य is not a front (सच is u2l2), so सत्यता and सत्यनिष्ठा collide
//   with nothing. मान is not a front either, so सर्वमान्य is clear.
export const HI_UNIT99 = {
  id: "hi-u99",
  lang: "hi",
  title: "सबूत और सत्यता",
  order: 99,
  stage: "b2",
  lessons: [
    {
      id: "hi-u99l1",
      unit: 99,
      lesson: 1,
      title: "What counts as proof",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say what kind of proof you are being offered: formal evidence, somebody's testimony, a confirmation that has actually come in, and the two words for a claim nobody can knock down.",
      items: [
        { id: "hi-u99l1-pramaan", type: "vocab", front: "प्रमाण", reading: "pramaan", meaning: "proof put forward", accept: ["a piece of formal proof"], example: { jp: "उसने अपनी बात के लिए तीन प्रमाण दिए, और हर प्रमाण अखबार से था।", en: "He gave three pieces of proof for his point, and every proof was from the newspaper." }, drill: { jp: "उसने अपनी बात के लिए प्रमाण दिया", en: "He gave proof for his point" }, hint: "PRA-MAAN, masculine. ⚠️ Not सबूत, proof (unit 39), and the difference is register, not meaning: सबूत is the everyday word a police report uses, प्रमाण is the written one a court or a paper uses. Teaching that split through the FRAME rather than through a second gloss is what unit 98 §C2 means." },
        { id: "hi-u99l1-saakshya", type: "vocab", front: "साक्ष्य", reading: "saakshya", meaning: "evidence in the formal sense", accept: ["evidence on the record"], example: { jp: "अदालत में सिर्फ़ वही साक्ष्य चलता है जो लिखा गया हो, और बाकी बात का कोई मूल्य नहीं।", en: "In court only the evidence that has been written down counts, and the rest has no worth." }, drill: { jp: "अदालत में साक्ष्य लिखा जाता है", en: "In court evidence is written down" }, hint: "SAAK-SHYA, masculine. The क्ष्य is क्ष (unit 6) with य stacked after it — one cluster, saak-shya. Built on the same साक्ष root as गवाह, a witness (unit 42). ⚠️ Narrower than प्रमाण above: a प्रमाण can be anything that proves, साक्ष्य is specifically what a proceeding will accept." },
        { id: "hi-u99l1-gavaahii", type: "vocab", front: "गवाही", reading: "gavaahii", meaning: "testimony given", accept: ["a witness's account"], example: { jp: "उसकी गवाही से पूरा मुकदमा बदल गया, क्योंकि वह उस रात वहीं थी।", en: "Her testimony changed the whole case, because she was there that night." }, drill: { jp: "उसकी गवाही से मुकदमा बदल गया", en: "Her testimony changed the case" }, hint: "GA-VAA-HII — FEMININE, with the -ी ending agreeing with the rule for once. Built straight on गवाह, a witness (unit 42): गवाह is the PERSON, गवाही is what they SAY. The frame is गवाही देना. ⚠️ Not बयान, a statement — that word is not carded in Hindi, so गवाही carries both jobs." },
        { id: "hi-u99l1-pushti", type: "vocab", front: "पुष्टि", reading: "pushti", meaning: "confirmation obtained", accept: ["a confirmation that has come in"], example: { jp: "खबर तब छापी गई जब सरकार से उसकी पुष्टि हो गई, उससे पहले अखबार रुका रहा।", en: "The news was printed once confirmation of it came from the government; before that the paper held back." }, drill: { jp: "सरकार से खबर की पुष्टि हो गई", en: "Confirmation of the news came from the government" }, hint: "PUSH-TI — ⚠️ FEMININE, AND IT ENDS IN A SHORT ि: pushti, never -ii. The frame is X की पुष्टि होना. ⚠️ THIS IS THE WORD अपुष्ट (unit 65) IS MISSING: अपुष्ट means a report has not got its पुष्टि yet. 🚨 And पुष्टि whole-word-FIRES inside प्रतिपुष्टि, feedback (unit 100), because the ि before it is a mātrā — no sentence here contains that word." },
        { id: "hi-u99l1-nirvivaad", type: "vocab", front: "निर्विवाद", reading: "nirvivaad", meaning: "beyond dispute", accept: ["that nobody argues with"], example: { jp: "यह बात निर्विवाद है कि कीमत बढ़ी है, मतभेद सिर्फ़ वजह पर है।", en: "It is beyond dispute that the price has risen; the difference of opinion is only about the reason." }, drill: { jp: "यह बात निर्विवाद है", en: "This is beyond dispute" }, hint: "NIR-VI-VAAD, INVARIANT: निर्विवाद बात, निर्विवाद सच. निर- is the 'without' prefix, as in निराधार (unit 98), and विवाद is a controversy (unit 61) — so literally with no controversy left in it. ⚠️ Not पक्का, definite (unit 38): पक्का is how sure YOU are, निर्विवाद is that nobody else is arguing." },
        { id: "hi-u99l1-akaatya", type: "vocab", front: "अकाट्य", reading: "akaatya", meaning: "that cannot be cut down", accept: ["irrefutable"], example: { jp: "उसका प्रमाण अकाट्य था, इसलिए दूसरे पक्ष ने प्रतिवाद ही नहीं रखा।", en: "His proof could not be cut down, so the other side did not even put a counter-argument." }, drill: { jp: "उसका प्रमाण अकाट्य था", en: "His proof could not be cut down" }, hint: "A-KAA-TYA, INVARIANT: अकाट्य प्रमाण, अकाट्य दलील. From काटना, to cut (unit 36) — अ- negates it, so an argument you cannot cut through. ⚠️ Stronger than निर्विवाद above: निर्विवाद means nobody IS arguing, अकाट्य means nobody CAN. The ट्य is ट with य stacked, and the ट is retroflex (unit 1 §1b)." },
      ],
    },
    {
      id: "hi-u99l2",
      unit: 99,
      lesson: 2,
      title: "Testing a claim",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Describe how a claim gets checked: a sifting inquiry, a trial run, a sample standing for a whole, a worked-out estimate, a formal appraisal, and the repeat that settles it.",
      items: [
        { id: "hi-u99l2-chaanbiin", type: "vocab", front: "छानबीन", reading: "chaanbiin", meaning: "a sifting inquiry", accept: ["a careful looking-into"], example: { jp: "पूरी छानबीन के बाद भी कोई साक्ष्य नहीं मिला, और मुकदमा वहीं रुक गया।", en: "Even after a complete inquiry no evidence was found, and the case stopped there." }, drill: { jp: "पूरी छानबीन के बाद कुछ नहीं मिला", en: "After a complete inquiry nothing was found" }, hint: "CHAAN-BIIN — ⚠️ FEMININE AND CONSONANT-FINAL, so nothing in the shape says so: पूरी छानबीन, never पूरा. From छानना, to sift — going through everything a little at a time. ⚠️ Bigger than जाँच, a check (unit 35): a जाँच tests one thing, a छानबीन goes through all of it looking for what is there." },
        { id: "hi-u99l2-pariikshan", type: "vocab", front: "परीक्षण", reading: "pariikshan", meaning: "a trial run to test something", accept: ["a controlled test"], example: { jp: "नई दवा का परीक्षण दो साल चला, और उसके बाद ही वह बाज़ार में आई।", en: "The trial of the new medicine ran two years, and only after that did it come to market." }, drill: { jp: "नई दवा का परीक्षण दो साल चला", en: "The trial of the new medicine ran two years" }, hint: "PA-RIIK-SHAN, masculine. ⚠️ Same परीक्ष root as परीक्षा, an exam (unit 34), and the two are NOT interchangeable: a परीक्षा tests a PERSON, a परीक्षण tests a THING to find out what it does. The क्ष is the conjunct of unit 6." },
        { id: "hi-u99l2-pratidarsh", type: "vocab", front: "प्रतिदर्श", reading: "pratidarsh", meaning: "a sample drawn to represent a whole", accept: ["a representative sample"], example: { jp: "उन्होंने सौ लोगों का प्रतिदर्श लिया, पर वे सब एक ही शहर के थे।", en: "They took a sample of a hundred people, but all of them were from one city." }, drill: { jp: "उन्होंने सौ लोगों का प्रतिदर्श लिया", en: "They took a sample of a hundred people" }, hint: "PRA-TI-DARSH, masculine. प्रति is 'standing for' and दर्श is 'a showing' — the small group chosen to show what the big one is like. ⚠️ Not नमूना, a sample (unit 87): a नमूना is any specimen you hold up, a प्रतिदर्श is chosen so that it REPRESENTS, which is why the example's second clause matters." },
        { id: "hi-u99l2-aakalan", type: "vocab", front: "आकलन", reading: "aakalan", meaning: "a worked-out estimate", accept: ["a reckoning of how much"], example: { jp: "नुकसान का आकलन अभी चल रहा है, इसलिए कोई पक्की संख्या नहीं दी गई।", en: "The reckoning of the loss is still going on, so no definite number has been given." }, drill: { jp: "नुकसान का आकलन अभी चल रहा है", en: "The reckoning of the loss is still going on" }, hint: "AA-KA-LAN, masculine. ⚠️ Not अंदाज़ा, an estimate (unit 57), and the difference is work: an अंदाज़ा is a guess you make in your head, an आकलन is counted up and written down. The frame is X का आकलन करना. Compare this lesson's मूल्यांकन, which judges rather than counts." },
        { id: "hi-u99l2-muulyaankan", type: "vocab", front: "मूल्यांकन", reading: "muulyaankan", meaning: "a formal appraisal", accept: ["a judging of worth"], example: { jp: "शोध का मूल्यांकन तीन लोगों ने किया, और तीनों की राय अलग थी।", en: "Three people appraised the research, and all three had a different opinion." }, drill: { jp: "शोध का मूल्यांकन तीन लोगों ने किया", en: "Three people appraised the research" }, hint: "MUUL-YAAN-KAN, masculine. Built on मूल्य, worth (unit 61) plus अंकन, a marking — so the putting of a value on something. ⚠️ Not आकलन above: an आकलन answers HOW MUCH, a मूल्यांकन answers HOW GOOD. The ल्यां is ल with य stacked, carrying the ा mātrā and the anusvāra together." },
        { id: "hi-u99l2-dohraav", type: "vocab", front: "दोहराव", reading: "dohraav", meaning: "a repeat that confirms", accept: ["a second run giving the same answer"], example: { jp: "एक परीक्षण कुछ साबित नहीं करता, दोहराव के बाद ही उसकी पुष्टि मानी जाती है।", en: "One trial proves nothing; only after a repeat is its confirmation accepted." }, drill: { jp: "दोहराव के बाद ही पुष्टि मानी जाती है", en: "Only after a repeat is confirmation accepted" }, hint: "DOH-RAAV, masculine. Built on दोहराना, to repeat (unit 26) — the noun for doing it again. ⚠️ Not पुनरावृत्ति, a recurrence (unit 73): a पुनरावृत्ति is something happening again on its own, a दोहराव is somebody deliberately running it a second time to see if the answer holds." },
      ],
    },
    {
      id: "hi-u99l3",
      unit: 99,
      lesson: 3,
      title: "When it does not hold",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Name the ways a claim fails: propaganda put out on purpose, a myth people keep repeating, a settled false belief, making something up, and the two nouns for whether a thing is true and how far it can be trusted.",
      items: [
        { id: "hi-u99l3-dushprachaar", type: "vocab", front: "दुष्प्रचार", reading: "dushprachaar", meaning: "deliberate false propaganda", accept: ["a smear campaign of untruth"], example: { jp: "चुनाव से पहले दुष्प्रचार बहुत फैला, और उसका असर नतीजे पर पड़ा।", en: "A great deal of false propaganda spread before the election, and it had an effect on the result." }, drill: { jp: "चुनाव से पहले दुष्प्रचार बहुत फैला", en: "A great deal of false propaganda spread before the election" }, hint: "DUSH-PRA-CHAAR, masculine. दुष् is the 'bad' prefix — the same sense as कु- in कुतर्क (unit 98) — on प्रचार, publicity (unit 44). ⚠️ Not भ्रामक, misleading (unit 98): something भ्रामक may be an accident of emphasis, दुष्प्रचार is organised and meant to harm." },
        { id: "hi-u99l3-mithak", type: "vocab", front: "मिथक", reading: "mithak", meaning: "a myth people repeat", accept: ["a widely held untrue story"], example: { jp: "यह एक पुराना मिथक है कि ठंडे पानी से बीमारी होती है, पर कोई प्रमाण नहीं है।", en: "It is an old myth that cold water causes illness, but there is no proof." }, drill: { jp: "यह एक पुराना मिथक है", en: "This is an old myth" }, hint: "MI-THAK, masculine. ⚠️ Not लोककथा, a folk tale (unit 61): a लोककथा is told as a story and everyone knows it is one, a मिथक is repeated as a FACT. And not झूठ, a lie (unit 4) — nobody is lying when they repeat a मिथक, which is exactly what makes it hard to kill." },
        { id: "hi-u99l3-bhraanti", type: "vocab", front: "भ्रांति", reading: "bhraanti", meaning: "a settled false belief", accept: ["a mistaken idea one holds firmly"], example: { jp: "उसके मन में यह भ्रांति थी कि मेहनत से सब मिल जाता है, और वह टूट गई।", en: "He held the mistaken belief that hard work gets you everything, and it broke." }, drill: { jp: "उसके मन में यह भ्रांति थी", en: "He held this mistaken belief" }, hint: "BHRAAN-TI — ⚠️ FEMININE, AND A SHORT ि AT THE END: bhraanti, never -ii. The भ्र is भ with र stacked (unit 6), one syllable, as in भ्रामक (unit 98). ⚠️ Not गलतफहमी, a misunderstanding (unit 57): a गलतफहमी clears up with one sentence, a भ्रांति is something a person has built their thinking on." },
        { id: "hi-u99l3-garhnaa", type: "vocab", front: "गढ़ना", reading: "garhnaa", meaning: "to fabricate", accept: ["to make up out of nothing", "to invent a false thing"], example: { jp: "उसने पूरी कहानी गढ़ ली, पर एक भी साक्ष्य नहीं दे सका।", en: "He made the whole story up, but could not give a single piece of evidence." }, drill: { jp: "पूरी कहानी गढ़ना आसान नहीं है", en: "Making a whole story up is not easy" }, hint: "GARH-NAA, a regular -ना verb (unit 1 §5). ⚠️ THE ढ़ IS A NUKTA LETTER (unit 4) AND IT READS rh, not dh — garhnaa. It must be written DECOMPOSED, ढ + ़ (unit 98 §C3). ⚠️ THE DRILL CARRIES THE INFINITIVE, not गढ़ ली, because a drill must contain its front verbatim. The honest sense of गढ़ना is to shape metal; this is the dishonest one." },
        { id: "hi-u99l3-satyataa", type: "vocab", front: "सत्यता", reading: "satyataa", meaning: "whether a thing is true", accept: ["the truth-or-not of something"], example: { jp: "अखबार ने खबर की सत्यता की जाँच की, और उसके बाद ही उसे छापा।", en: "The newspaper checked whether the news was true, and only then printed it." }, drill: { jp: "खबर की सत्यता पर शक था", en: "There was doubt about whether the news was true" }, hint: "SAT-YA-TAA — ⚠️ FEMININE, like every -ता abstract (unit 61 §B6), AND IT ENDS IN -आ, which reads masculine everywhere else in the course: सत्यता साफ़ थी, never साफ़ था. ⚠️ Not सच, truth (unit 2): सच is the true thing itself, सत्यता is the QUESTION of whether something is true — which is why it always appears as X की सत्यता." },
        { id: "hi-u99l3-vishvasaniiyataa", type: "vocab", front: "विश्वसनीयता", reading: "vishvasaniiyataa", meaning: "how far something can be trusted", accept: ["credibility"], example: { jp: "एक ही भ्रामक खबर से उस अखबार की विश्वसनीयता चली गई, और अब कोई उसकी खबर नहीं मानता।", en: "One misleading report alone destroyed that newspaper's credibility, and now nobody accepts its news." }, drill: { jp: "उस अखबार की विश्वसनीयता चली गई", en: "That newspaper's credibility was gone" }, hint: "VISH-VA-SA-NII-YA-TAA — FEMININE, the longest word in the unit, and worth saying in pieces. Built on विश्वास, trust, plus -नीय 'able to be' plus -ता the abstract ending. ⚠️ Not भरोसा, trust (unit 27): भरोसा is what YOU place in someone, विश्वसनीयता is the property THEY have that earns it — and it is the thing lesson 3's other five words destroy." },
      ],
    },
    {
      id: "hi-u99l4",
      unit: 99,
      lesson: 4,
      title: "Judging honestly",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Say how a judgement was reached: on the thing itself or coloured by the judge, held to a standing habit of truth, accepted by everyone, weighed one against another, and resting on fact.",
      items: [
        { id: "hi-u99l4-vastunishth", type: "vocab", front: "वस्तुनिष्ठ", reading: "vastunishth", meaning: "judged on the thing itself", accept: ["judged on its own merits", "not coloured by the judge"], example: { jp: "अच्छा मूल्यांकन वस्तुनिष्ठ होता है, यानी उसमें देखने वाले की पसंद नहीं आती।", en: "A good appraisal is objective, which is to say the judge's own liking does not enter it." }, drill: { jp: "अच्छा मूल्यांकन वस्तुनिष्ठ होता है", en: "A good appraisal is objective" }, hint: "VAS-TU-NISHTH, INVARIANT: वस्तुनिष्ठ परीक्षण, वस्तुनिष्ठ राय. वस्तु is a thing and निष्ठ is 'resting on' — resting on the object, not on you. ⚠️ Not सही: 'right' is not carded in Hindi at all, so this is not a near-synonym. A वस्तुनिष्ठ judgement can still reach the wrong answer; what it cannot do is come from the judge's taste." },
        { id: "hi-u99l4-aatmanishth", type: "vocab", front: "आत्मनिष्ठ", reading: "aatmanishth", meaning: "coloured by the person judging", accept: ["subjective"], example: { jp: "उसकी समीक्षा पूरी तरह आत्मनिष्ठ थी, क्योंकि उसने सिर्फ़ अपनी पसंद लिखी।", en: "His review was entirely subjective, because he wrote only his own liking." }, drill: { jp: "उसकी समीक्षा पूरी तरह आत्मनिष्ठ थी", en: "His review was entirely subjective" }, hint: "AAT-MA-NISHTH, INVARIANT. The exact mirror of वस्तुनिष्ठ above — आत्म is the self, वस्तु the thing, निष्ठ the same 'resting on' in both. Built on आत्मा, the soul (unit 90). ⚠️ AND IT IS NOT AN INSULT: a review is SUPPOSED to be आत्मनिष्ठ and a परीक्षण is not, which is the distinction this lesson exists to make." },
        { id: "hi-u99l4-satyanishthaa", type: "vocab", front: "सत्यनिष्ठा", reading: "satyanishthaa", meaning: "truthfulness as a standing habit", accept: ["integrity about the truth"], example: { jp: "उसकी सत्यनिष्ठा सब जानते थे, इसलिए उसकी गवाही पर किसी ने शक नहीं किया।", en: "Everyone knew his truthfulness, so nobody doubted his testimony." }, drill: { jp: "उसकी सत्यनिष्ठा सब जानते थे", en: "Everyone knew his truthfulness" }, hint: "SAT-YA-NISH-THAA — ⚠️ FEMININE despite the -आ (unit 61 §B6), and the third -ता/-ष्ठा abstract in this unit after सत्यता and विश्वसनीयता. Same सत्य half as सत्यता (lesson 3) and the same निष्ठ half as the two words above it. ⚠️ Not ईमानदारी, honesty (unit 53): ईमानदारी is about not cheating, सत्यनिष्ठा is about not letting an untruth stand even when it costs you." },
        { id: "hi-u99l4-sarvamaanya", type: "vocab", front: "सर्वमान्य", reading: "sarvamaanya", meaning: "accepted by everyone", accept: ["that nobody objects to"], example: { jp: "यह तरीका अब सर्वमान्य है, पर बीस साल पहले इस पर बहुत बहस हुई थी।", en: "This method is now accepted by everyone, but twenty years ago there was a great deal of debate about it." }, drill: { jp: "यह तरीका अब सर्वमान्य है", en: "This method is now accepted by everyone" }, hint: "SAR-VA-MAAN-YA, INVARIANT: सर्वमान्य तरीका, सर्वमान्य राय. सर्व is 'all' — the same half as सर्वसम्मत, unanimous (unit 61) — and मान्य is 'accepted'. ⚠️ THE TWO ARE NOT THE SAME: सर्वसम्मत describes one DECISION everyone voted for, सर्वमान्य describes something the whole field has come to accept over time." },
        { id: "hi-u99l4-taulnaa", type: "vocab", front: "तौलना", reading: "taulnaa", meaning: "to weigh one thing against another", accept: ["to weigh up before deciding"], example: { jp: "दोनों पक्षों की दलील तौलने के बाद ही उसने अपनी राय दी।", en: "Only after weighing up both sides' arguments did he give his opinion." }, drill: { jp: "दोनों दलीलों को तौलना ज़रूरी है", en: "Weighing up both arguments is necessary" }, hint: "TAUL-NAA, a regular -ना verb (unit 1 §5). The ौ is औ's mātrā (unit 3) — taul, one syllable, as in धौंस (unit 98). ⚠️ It is also literally to weigh on a scale, which is where नाप-तोल (unit 45) comes from, so the physical sense is already familiar. Not तुलना, a comparison (unit 57): a तुलना lays two things side by side, तौलना decides which one wins." },
        { id: "hi-u99l4-tathyaparak", type: "vocab", front: "तथ्यपरक", reading: "tathyaparak", meaning: "resting on fact", accept: ["factual rather than opinionated"], example: { jp: "उसका लेख तथ्यपरक था, इसलिए विरोधी भी उसकी बात काट नहीं सके।", en: "His article rested on fact, so even his opponents could not cut down what he said." }, drill: { jp: "उसका लेख तथ्यपरक था", en: "His article rested on fact" }, hint: "TATH-YA-PA-RAK, INVARIANT: तथ्यपरक लेख, तथ्यपरक रिपोर्ट. Built on तथ्य, a fact (unit 87), plus -परक 'oriented toward'. ⚠️ Compare वस्तुनिष्ठ at the top of this lesson: वस्तुनिष्ठ is about the JUDGE not colouring things, तथ्यपरक is about the TEXT containing checkable facts. A piece can be one without the other." },
      ],
    },
  ],
};
