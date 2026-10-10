// HI Unit 71 — नियम और पाबंदी ("Rules and restrictions") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 1. Conventions: unit1.js §1–§11, unit31.js §A1–§A8, then unit61.js
// §B1–§B9.
//
// Slot KEPT, measured 9/18. A2 u32 क्या मुमकिन है carded the MODAL side of
// obligation — नियम, इजाज़त, मना, ज़रूरी, फ़र्ज़, ज़िम्मेदारी, हक, मजबूर, सज़ा,
// कसूर, आज़ादी — so the learner can already say they are allowed or obliged.
// What they cannot do is the INSTITUTIONAL side: name a restriction, an order, a
// ban, a violation, a fine, an exception, a criterion, accountability, and the
// difference between what is legal and what is legitimate. That is this unit.
//
// 🚨 THREE FRONTS REFUSED ON unit67.js's DERIVATIVE RULE, and all three are the
// obvious word for their slot, so a later block will reach for them too:
//   • **सख्ती** is the bare abstract of सख्त, strict (u27). अनुशासन is carded
//     instead — a different word, and a better one for a B1 learner.
//   • **मनाही** is the bare abstract of मना, not allowed (u32). प्रतिबंध and
//     पाबंदी and वर्जित already cover the ground three ways.
//   • **ढील** ("a relaxing of rules") is built on ढीला, loose (u40). माफ़ी is
//     carded instead, and रियायत carries the leniency.
//   ✅ **नियमन PASSES, and it is worth saying why**: it is a -न derived noun off
//     नियम, a rule (u32), not a bare stem — the same class unit69.js cleared for
//     -आव/-आवट (गिरावट, ठहराव, बदलाव) and unit69 itself cleared for चलन ← चलना.
//
// ⚠️ MORE FRONTS WANTED AND REFUSED:
//   TAKEN: नियम, इजाज़त, मना, फ़र्ज़, ज़िम्मेदारी, हक, मजबूर, सज़ा, कसूर, आज़ादी
//     (u32) · कानून, अदालत, मुकदमा, गवाह, वकील, पुलिस, इंसाफ़ (u42) · शर्त (u39) ·
//     छूट (u37) · सख्त (u27) · ढीला (u40) · शपथ (u51) · क्षमा (u6).
//   GLOSS-REFUSED through normalizeMeaning: **अधिकार** (हक u32 is "an
//     entitlement") · **दंड** (सज़ा u32 is "a punishment") · **अनुमति** (इजाज़त
//     u32 is "permission") · **दायित्व** and **जवाबदेही glossed
//     "accountability"** — ज़िम्मेदारी (u32) owns it, so जवाबदेही is carded
//     **"having to answer for one's acts"**, which is what it actually describes ·
//     **निषेध** (it would be a fourth prohibition word in one unit) ·
//     **कानूनी / गैरकानूनी** (they would duplicate वैध / अवैध in the same lesson).
//   ⚠️ माफ़ी IS CARDED AND IT IS A NEAR-SYNONYM OF क्षमा, forgiveness (u6).
//     They are genuinely two words — Arabic माफ़ी against Sanskrit क्षमा — and the
//     glosses separate ("a pardon granted" against "forgiveness"), but the hint
//     has to say so out loud or a learner will think it is a second spelling.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4), each named in its own hint:
//   ⚠️ FEMININE: पाबंदी, जवाबदेही, माफ़ी, रियायत, निगरानी, **हिदायत**. हिदायत and
//   रियायत are CONSONANT-FINAL, so nothing in the shape says so — हिदायत साफ़ थी,
//   and रियायत बड़ी थी, never बड़ा.
//   MASCULINE: आदेश, उल्लंघन, प्रतिबंध, अनुशासन, जुर्माना, नियमन, अपवाद, पालन,
//   मानदंड, कर्तव्य. **जुर्माना is masculine -आ following the rule**, and
//   उल्लंघन, प्रतिबंध, अनुशासन, अपवाद, पालन and मानदंड are consonant-final.
//   INVARIANT (unit53's rule): अनिवार्य, वैध, अवैध, बाध्य, जायज़, नाजायज़, वर्जित,
//   **लागू**. ⚠️ **लागू does NOT agree despite the -ू**: नियम लागू है, पाबंदी लागू
//   है — never लागी.
// RETROFLEX/DENTAL (unit1.js §1b): **मानदंड maandand has a RETROFLEX ड twice over
// in ंड**, both merged to d, and a DENTAL न before them — three alveolar-ish
// sounds that all flatten in the reading. आदेश, अपवाद and कर्तव्य are dental.
// Checked against all 1,440 readings: 0 collisions.
// LOANWORD FREE-PASS CHECK (unit1.js §9): no loanwords. Zero free passes.
export const HI_UNIT71 = {
  id: "hi-u71",
  lang: "hi",
  title: "नियम और पाबंदी",
  order: 71,
  stage: "b1",
  lessons: [
    {
      id: "hi-u71l1",
      unit: 71,
      lesson: 1,
      title: "What is laid down",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name a restriction, an order given and a ban, say something is compulsory or that you are bound to do it, and pass on an instruction.",
      items: [
        { id: "hi-u71l1-paabandii", type: "vocab", front: "पाबंदी", reading: "paabandii", meaning: "a restriction", accept: ["a limit placed on what one may do", "a curb", "a bar on doing something"], example: { jp: "शाम छह बजे के बाद गाड़ी पर पाबंदी है, और उसका पालन सख्त है।", en: "There is a restriction on vehicles after six in the evening, and compliance with it is strict." }, drill: { jp: "छह बजे के बाद गाड़ी पर पाबंदी है", en: "There is a restriction on vehicles after six" }, hint: "PAA-BAN-DII — FEMININE, -ी and predictable. The ं before द reads n (unit 1 §1). पाबंद is not taught, so this noun is cardable. ⚠️ Narrower than प्रतिबंध below: a पाबंदी limits WHEN or HOW MUCH, a प्रतिबंध stops the thing entirely." },
        { id: "hi-u71l1-aadesh", type: "vocab", front: "आदेश", reading: "aadesh", meaning: "an order given", accept: ["a directive from above", "a command issued", "an order from a higher authority"], example: { jp: "अफ़सर का आदेश आया और सब काम उसी दिन रुक गया।", en: "The officer's order came and all work stopped the same day." }, drill: { jp: "अफ़सर का आदेश उसी दिन आया", en: "The officer's order came the same day" }, hint: "AA-DESH, masculine, with DENTAL द. ⚠️ Not सुझाव, a suggestion (unit 57), and not हिदायत below: an आदेश has authority behind it and is not negotiable. The verb is देना — आदेश देना — and आदेश का पालन करना is to obey it." },
        { id: "hi-u71l1-pratibandh", type: "vocab", front: "प्रतिबंध", reading: "pratibandh", meaning: "a ban", accept: ["a complete stopping of something", "a prohibition", "an outright block on something"], example: { jp: "उस किताब पर प्रतिबंध लगा था, पर वह हर दुकान पर मिल जाती थी।", en: "There was a ban on that book, but it was available at every shop." }, drill: { jp: "इस काम पर अब प्रतिबंध है", en: "There is now a ban on this act" }, hint: "PRA-TI-BANDH, masculine. The frame is X पर प्रतिबंध लगाना, to impose a ban on X. ⚠️ **मनाही was REFUSED** as the bare abstract of मना, not allowed (unit 32). A प्रतिबंध is official and total; मना is simply 'not allowed' and can come from anyone." },
        { id: "hi-u71l1-anivaary", type: "vocab", front: "अनिवार्य", reading: "anivaary", meaning: "compulsory", accept: ["required with no choice", "mandatory", "not optional"], example: { jp: "हर बच्चे के लिए पढ़ाई अनिवार्य है और यह कानून में लिखा है।", en: "Study is compulsory for every child and this is written in the law." }, drill: { jp: "यह कागज़ सबके लिए अनिवार्य है", en: "This document is compulsory for everyone" }, hint: "A-NI-VAARY, INVARIANT: अनिवार्य पढ़ाई, अनिवार्य नियम. ⚠️ Not ज़रूरी, necessary (unit 8): a thing is ज़रूरी because you need it, अनिवार्य because a rule says you have no option. The word a form or a syllabus uses." },
        { id: "hi-u71l1-baadhya", type: "vocab", front: "बाध्य", reading: "baadhya", meaning: "bound to do something", accept: ["under an obligation", "obliged", "having no choice but to do it"], example: { jp: "वह बाध्य था कि पूरा ब्यौरा दे, वरना अर्ज़ी अवैध हो जाती।", en: "He was bound to give the full breakdown of details, or else the application would become invalid." }, drill: { jp: "वह पूरा ब्यौरा देने को बाध्य था", en: "He was bound to give the full breakdown" }, hint: "BAADH-YA, INVARIANT: बाध्य आदमी, बाध्य औरत. DENTAL ध with य stacked on it. Same root as बाधा, an obstacle (unit 70) — a thing pressing on you. ⚠️ Not मजबूर, left with no choice (unit 32), which is circumstance; बाध्य is a DUTY that binds you, and it is the formal word." },
        { id: "hi-u71l1-hidaayat", type: "vocab", front: "हिदायत", reading: "hidaayat", meaning: "an instruction", accept: ["a direction on how to do a thing", "a piece of guidance", "a word of direction"], example: { jp: "कागज़ पर सब हिदायत लिखी थी, पर किसी ने पढ़ी नहीं।", en: "Every instruction was written on the paper, but nobody read them." }, drill: { jp: "अफ़सर ने एक हिदायत दी", en: "The officer gave an instruction" }, hint: "HI-DAA-YAT — ⚠️ FEMININE AND CONSONANT-FINAL: हिदायत साफ़ थी, never साफ़ा. ⚠️ Softer than आदेश above: an आदेश commands, a हिदायत tells you HOW. Often used in the plural — हिदायतें — and that is what a packet or a form carries." },
      ],
    },
    {
      id: "hi-u71l2",
      unit: 71,
      lesson: 2,
      title: "Legal and legitimate",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say a document is valid or invalid, tell what is legitimate from what is not, call something off limits, and name a violation and the fine it carries.",
      items: [
        { id: "hi-u71l2-vaidh", type: "vocab", front: "वैध", reading: "vaidh", meaning: "valid", accept: ["good in law", "legally in order", "holding good"], example: { jp: "आपका कागज़ अगले साल तक वैध है, उसके बाद नया लेना पड़ेगा।", en: "Your document is valid until next year; after that a new one will have to be got." }, drill: { jp: "यह टिकट आज तक वैध है", en: "This ticket is valid until today" }, hint: "VAIDH, INVARIANT, one syllable, opening with ऐ (unit 2) and closing with DENTAL ध: वैध कागज़, वैध शादी. ⚠️ **कानूनी was REFUSED** as a duplicate of this in the same lesson. वैध is about a DOCUMENT or an act holding up; जायज़ below is about it being fair." },
        { id: "hi-u71l2-avaidh", type: "vocab", front: "अवैध", reading: "avaidh", meaning: "invalid", accept: ["without legal standing", "illegal", "not good in law"], example: { jp: "बिना दस्तखत की अर्ज़ी अवैध मानी जाती है।", en: "An application without a signature is considered invalid." }, drill: { jp: "बिना दस्तखत की अर्ज़ी अवैध है", en: "An application without a signature is invalid" }, hint: "A-VAIDH, INVARIANT. The अ- prefix negates वैध above — the same prefix in असहमत (unit 61), अनिश्चित (unit 64), अपुष्ट (unit 65) and अमूर्त (unit 68). ⚠️ It covers BOTH 'expired' and 'illegal' in Hindi, which English splits; the hint is what tells the learner which one a sentence means." },
        { id: "hi-u71l2-jaayaz", type: "vocab", front: "जायज़", reading: "jaayaz", meaning: "legitimate", accept: ["fair enough to be allowed", "justified", "within reason"], example: { jp: "उसकी शिकायत जायज़ थी, नियम सबके लिए एक जैसा नहीं था।", en: "His complaint was legitimate; the rule was not the same for everyone." }, drill: { jp: "उसका ऐतराज़ जायज़ लगा", en: "His objection seemed legitimate" }, hint: "JAA-YAZ, INVARIANT, with ज़ (unit 4) at the end and plain ज at the start — both in one word, so say it slowly. ⚠️ Not वैध above: a demand can be जायज़ (fair) without being वैध (legally provided for), and that difference is the whole argument in most disputes." },
        { id: "hi-u71l2-naajaayaz", type: "vocab", front: "नाजायज़", reading: "naajaayaz", meaning: "illegitimate", accept: ["unfair and not to be allowed", "not justified", "wrongful"], example: { jp: "किसी से नाजायज़ पैसा माँगना अपराध है।", en: "Asking anyone for illegitimate money is a crime." }, drill: { jp: "नाजायज़ पैसा माँगना अपराध है", en: "Asking for illegitimate money is a crime" }, hint: "NAA-JAA-YAZ, INVARIANT. The ना- prefix negates जायज़ above — the same ना- that makes नामुमकिन from मुमकिन (unit 32), and NOT the अ- of अवैध. **Hindi has two negative prefixes and which one a word takes is simply fixed**: वैध takes अ-, जायज़ takes ना-." },
        { id: "hi-u71l2-varjit", type: "vocab", front: "वर्जित", reading: "varjit", meaning: "off limits", accept: ["forbidden on these premises", "not permitted here", "barred"], example: { jp: "यहाँ यह काम वर्जित है और यह हर दीवार पर लिखा है।", en: "This act is off limits here and this is written on every wall." }, drill: { jp: "अंदर जाना वर्जित है", en: "Going inside is off limits" }, hint: "VAR-JIT, INVARIANT: वर्जित क्षेत्र, वर्जित काम. ⚠️ Carded 'off limits' and not 'forbidden', because मना (unit 32) owns that gloss. वर्जित is the SIGN-BOARD word — it appears on walls and gates, never in speech, where Hindi says मना है." },
        { id: "hi-u71l2-ullanghan", type: "vocab", front: "उल्लंघन", reading: "ullanghan", meaning: "a violation", accept: ["a breaking of a rule", "a breach", "a going against the rule"], example: { jp: "यह नियम का उल्लंघन है और इसका जुर्माना पाँच सौ रुपये है।", en: "This is a violation of the rule and its penalty is five hundred rupees." }, drill: { jp: "उल्लंघन पर जुर्माना लगेगा", en: "A penalty will be imposed for a violation" }, hint: "UL-LAN-GHAN, masculine. The ल्ल is a real doubled l, held, and the ं before घ reads n (unit 1 §1). ⚠️ Not अपराध, a crime (unit 42): an अपराध is against the law, an उल्लंघन is against a RULE — a traffic rule, a condition, an agreement — and it earns a जुर्माना, not a सज़ा." },
      ],
    },
    {
      id: "hi-u71l3",
      unit: 71,
      lesson: 3,
      title: "Strictness and slack",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Talk about discipline and the regulating of something, name an exception, ask for a special allowance or a pardon, and name the fine someone had to pay.",
      items: [
        { id: "hi-u71l3-anushaasan", type: "vocab", front: "अनुशासन", reading: "anushaasan", meaning: "discipline", accept: ["keeping to a rule as a habit", "orderly self-control", "holding oneself to the rules"], example: { jp: "उस कक्षा में अनुशासन अच्छा है, शिक्षक को चिल्लाना नहीं पड़ता।", en: "Discipline is good in that class; the teacher does not have to shout." }, drill: { jp: "घर में भी अनुशासन चाहिए", en: "Discipline is needed at home too" }, hint: "A-NU-SHAA-SAN, masculine. शासन is rule or governance, so literally following the rule. ⚠️ **सख्ती was REFUSED** as the bare abstract of सख्त, strict (unit 27). The two are not the same anyway: सख्ती is force from outside, अनुशासन is order the group keeps itself." },
        { id: "hi-u71l3-niyaman", type: "vocab", front: "नियमन", reading: "niyaman", meaning: "the regulating of something", accept: ["bringing a thing under rules", "regulation of a field", "the setting of rules over something"], example: { jp: "बाज़ार का नियमन ज़रूरी है, वरना कीमत में उछाल आता रहेगा।", en: "Regulating the market is necessary, or else jumps in price will keep coming." }, drill: { jp: "कीमतों का नियमन मुश्किल है", en: "Regulating prices is difficult" }, hint: "NI-YA-MAN, masculine. A -न derived noun off नियम, a rule (unit 32) — cardable because it is a derivation and not the bare stem, the same clearance unit 69 gave चलन ← चलना. ⚠️ Not नियमित, regular (unit 66), which is an adjective about timing; नियमन is the ACT of putting rules around something." },
        { id: "hi-u71l3-apvaad", type: "vocab", front: "अपवाद", reading: "apvaad", meaning: "an exception", accept: ["the one case a rule does not cover", "a case outside the rule", "something that does not follow the rule"], example: { jp: "हर नियम का कोई अपवाद होता है, और यही बात भाषा में सबसे ज़्यादा सच है।", en: "Every rule has some exception, and this is most true of all in language." }, drill: { jp: "इस बार कोई अपवाद नहीं होगा", en: "There will be no exception this time" }, hint: "AP-VAAD, masculine, consonant-final, with DENTAL द. ⚠️ Not फ़र्क, a difference (unit 32): an अपवाद is a case the rule itself admits it does not reach. अपवाद स्वरूप means 'by way of exception', using स्वरूप from unit 68." },
        { id: "hi-u71l3-riyaayat", type: "vocab", front: "रियायत", reading: "riyaayat", meaning: "a special allowance", accept: ["a concession made to someone", "a relaxation of the rule for someone", "a break given to someone"], example: { jp: "बच्चों और बूढ़े लोगों को कीमत में रियायत मिलती है।", en: "Children and old people get a special allowance on the price." }, drill: { jp: "बच्चों को कीमत में रियायत मिलती है", en: "Children get a special allowance on the price" }, hint: "RI-YAA-YAT — ⚠️ FEMININE AND CONSONANT-FINAL: रियायत बड़ी थी, never बड़ा. ⚠️ Carded 'a special allowance' and not 'a concession', because छूट (unit 37) owns that gloss — and छूट in this course is a shop DISCOUNT, so रियायत is the official one a rule grants." },
        { id: "hi-u71l3-maafii", type: "vocab", front: "माफ़ी", reading: "maafii", meaning: "a pardon granted", accept: ["being let off", "forgiveness granted", "a remission of a penalty"], example: { jp: "पहली गलती पर माफ़ी मिल गई, दूसरी बार जुर्माना लगा।", en: "On the first mistake a pardon was granted; the second time a penalty was imposed." }, drill: { jp: "उसने अपनी गलती पर माफ़ी माँगी", en: "He asked pardon for his mistake" }, hint: "MAA-FII — FEMININE, with फ़ (unit 4) and never plain फ. ⚠️ **IT IS A NEAR-SYNONYM OF क्षमा, forgiveness (unit 6)** — Arabic माफ़ी beside Sanskrit क्षमा — so say the difference: क्षमा is the feeling you grant, माफ़ी is the formal letting-off. माफ़ी माँगना is to apologise, माफ़ करना is to forgive." },
        { id: "hi-u71l3-jurmaanaa", type: "vocab", front: "जुर्माना", reading: "jurmaanaa", meaning: "a monetary penalty", accept: ["money you pay for breaking a rule", "a sum you are made to pay", "a sum levied as punishment"], example: { jp: "बिना टिकट पकड़े जाने पर जुर्माना भरना पड़ता है।", en: "On being caught without a ticket one has to pay a penalty." }, drill: { jp: "बिना टिकट जुर्माना भरना पड़ता है", en: "Without a ticket one has to pay a penalty" }, hint: "JUR-MAA-NAA, masculine — the -आ follows the rule. Built on जुर्म, which is NOT itself taught (अपराध u42 is the taught front for a crime). ⚠️ Carded 'a monetary penalty' because **'a fine' collides with BOTH ठीक (unit 4) and अच्छा (unit 6)** once normalised — one of the odder catches of unit 61 §B4's probe. Not सज़ा, a punishment (unit 32), which can be prison." },
      ],
    },
    {
      id: "hi-u71l4",
      unit: 71,
      lesson: 4,
      title: "Who answers for it",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say who has to answer for an act, name a moral duty, talk about compliance and the criterion applied, say a rule is in force, and describe surveillance.",
      items: [
        { id: "hi-u71l4-javaabdehii", type: "vocab", front: "जवाबदेही", reading: "javaabdehii", meaning: "having to answer for one's acts", accept: ["answerability", "accountability", "being answerable for what one does"], example: { jp: "नियम तो हैं, पर जवाबदेही किसी की नहीं है, और इसलिए कुछ नहीं बदलता।", en: "There are rules, but nobody has to answer for anything, and so nothing changes." }, drill: { jp: "यहाँ किसी की जवाबदेही नहीं है", en: "Nobody here has to answer for anything" }, hint: "JA-VAAB-DE-HII — FEMININE. A compound of जवाब, an answer (unit 8), and देही, 'giving' — so the shape teaches the meaning. ⚠️ Carded this long way because **'accountability' collides with ज़िम्मेदारी (unit 32)**. The difference is real: ज़िम्मेदारी is the duty you hold, जवाबदेही is having to explain yourself afterwards." },
        { id: "hi-u71l4-kartavya", type: "vocab", front: "कर्तव्य", reading: "kartavya", meaning: "a moral duty", accept: ["what one ought to do", "a duty one owes", "an obligation of conscience"], example: { jp: "वोट देना हर नागरिक का कर्तव्य है, न कि सिर्फ़ उसका हक।", en: "Voting is every citizen's moral duty, not only their right." }, drill: { jp: "यह हमारा कर्तव्य है", en: "This is our moral duty" }, hint: "KAR-TAV-YA, masculine. Built on करना, to do — literally 'what is to be done'. ⚠️ Not फ़र्ज़, a duty (unit 32), and the register is the whole difference: फ़र्ज़ is what you owe your family and your job, कर्तव्य is what a constitution or a moral argument says you owe. हक और कर्तव्य is the fixed pair." },
        { id: "hi-u71l4-paalan", type: "vocab", front: "पालन", reading: "paalan", meaning: "compliance", accept: ["the keeping of a rule", "obedience to a rule", "doing as the rule says"], example: { jp: "नियम का पालन सब पर लागू है, अफ़सर पर भी।", en: "Compliance with the rule applies to everyone, to the officer too." }, drill: { jp: "हिदायत का पालन करो", en: "Comply with the instruction" }, hint: "PAA-LAN, masculine, consonant-final. The frame is X का पालन करना, to comply with X. ⚠️ It has a SECOND sense the learner will meet: पालना is to raise a child, and पालन-पोषण is upbringing. Same root, and the common thread is 'keeping' — keeping a rule, keeping a child." },
        { id: "hi-u71l4-maandand", type: "vocab", front: "मानदंड", reading: "maandand", meaning: "a criterion", accept: ["the test a case is judged against", "a yardstick for judging", "the standard applied in deciding"], example: { jp: "चुनने का मानदंड साफ़ नहीं था, इसलिए लोगों ने पक्षपात का इलज़ाम लगाया।", en: "The criterion for selection was not clear, so people made an accusation of bias." }, drill: { jp: "हर मानदंड पहले बताओ", en: "State every criterion first" }, hint: "MAAN-DAND, masculine. ⚠️ **THE TRICKIEST READING IN THE UNIT**: मान is DENTAL न, then दंड carries a ं reading n and a RETROFLEX ड — three places the tongue is in a different spot and the reading flattens all of them (unit 1 §1b). ⚠️ Not मानक, a standard to meet (unit 66): a मानक is the level a PRODUCT must reach, a मानदंड is the test you judge a CASE by." },
        { id: "hi-u71l4-laaguu", type: "vocab", front: "लागू", reading: "laaguu", meaning: "in force", accept: ["applying to someone", "in effect", "having come into operation"], example: { jp: "नया नियम कल से लागू होगा और किसी को रियायत नहीं मिलेगी।", en: "The new rule will be in force from tomorrow and nobody will get a special allowance." }, drill: { jp: "यह पाबंदी अब लागू है", en: "This restriction is now in force" }, hint: "LAA-GOO — ⚠️ INVARIANT DESPITE THE -ू: नियम लागू है, पाबंदी लागू है, कानून लागू हुआ — never लागी. The frames are X लागू होना, to come into force, and X पर लागू होना, to apply to X. Both are everywhere in official Hindi." },
        { id: "hi-u71l4-nigraanii", type: "vocab", front: "निगरानी", reading: "nigraanii", meaning: "surveillance", accept: ["a keeping of watch over something", "close watch", "being watched over"], example: { jp: "बाज़ार में निगरानी बढ़ी, इसलिए अब कोई नाजायज़ कीमत नहीं लेता।", en: "Surveillance in the market increased, so now nobody charges an illegitimate price." }, drill: { jp: "बाज़ार में निगरानी बढ़ गई है", en: "Surveillance in the market has increased" }, hint: "NIG-RAA-NII — FEMININE, -ी and predictable. From निगाह, a look, with plain ग (unit 1 §7 keeps ग़ uncarded). ⚠️ Not निरीक्षण, a checking-over (unit 66), which happens once and ends; निगरानी is CONTINUOUS watching, and the hint is the only thing that separates them." },
      ],
    },
  ],
};
