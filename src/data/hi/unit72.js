// HI Unit 72 — योजना और इरादा ("Plan and intention") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 1. Conventions: unit1.js §1–§11, unit31.js §A1–§A8, then unit61.js
// §B1–§B9.
//
// Slot KEPT, measured 10/18. A2 u48 कल क्या होगा carded the FUTURE — योजना,
// लक्ष्य, मियाद, अंदेशा — and u32 the aims: मकसद, इरादा, तैयारी. So the learner
// can say what they are going to do. What they cannot do is the project-planning
// register a B1 reader meets everywhere: a priority, a proposal, an initiative, a
// strategy, an agenda, a staged plan, something long-term against something
// short-term, and the confession that you have been putting it off.
//
// ⚠️ TWO FRONTS REFUSED ON unit67.js's DERIVATIVE RULE:
//   • **इच्छुक** ("keen to") is built on इच्छा, a wish (u27). उत्सुक is carded
//     instead — a different word, same job.
//   • **मंशा** ("an intent") was refused for a different reason: it is a free
//     front, but इरादा (u57) is "an intention" and the two glosses would be one
//     string apart. Named because the word is still available to a later block
//     that can give it a gloss further from इरादा.
//
// ⚠️ MORE FRONTS WANTED AND REFUSED:
//   TAKEN: योजना, लक्ष्य, मियाद (u48) · मकसद, इरादा, तैयारी (u32) · सपना (u24) ·
//     फ़ैसला (u30) · उम्मीद (u27) · इच्छा (u27) · निश्चित (u38) · चुनना (u29) ·
//     इंतज़ाम (u19) · समयसीमा / "a time limit" (u39).
//   GLOSS-REFUSED through normalizeMeaning, and this unit had the worst run of it
//   in the block — **five of its twenty-four glosses moved** (unit61 §B4):
//     **लक्ष्य / उद्देश्य glossed "the aim"** → मकसद (u32) owns it, so उद्देश्य is
//       carded **"an objective"** · **महत्वाकांक्षा glossed "ambition"** → सपना
//       (u24) owns it, so it is **"a drive to get ahead"** · **निश्चय glossed "a
//       resolve"** → इरादा (u57) owns it, so it is **"a settled determination"** ·
//       **अपेक्षा glossed "an expectation"** → उम्मीद (u27) owns it, so it is
//       **"what one counts on"** · **अनुसूची glossed "a schedule"** → it would
//       collide with कार्यसूची in the same unit, so the two are split as **"a
//       timetable"** and **"an agenda"**, which is also what they actually are.
//   DENSITY NOTE: **आकांक्षा was dropped** so महत्वाकांक्षा could stay — the second
//     contains the first, and two cards for one root in one unit is the count
//     problem unit69.js states. आकांक्षा is still free.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4), each named in its own hint:
//   ⚠️ FEMININE: प्राथमिकता, रणनीति, अनुसूची, कार्यसूची, महत्वाकांक्षा, अपेक्षा,
//   **पहल**. पहल is CONSONANT-FINAL, so nothing in the shape says so — पहल अच्छी
//   थी, never अच्छा — and it is the likeliest gender error in the unit.
//   MASCULINE: प्रस्ताव, संकल्प, आयोजन, निश्चय, उद्देश्य, खाका. **खाका is
//   masculine -आ following the rule**, and प्रस्ताव, संकल्प, आयोजन, निश्चय and
//   उद्देश्य are consonant-final or -य, both masculine.
//   INVARIANT (unit53's rule): अग्रिम, दीर्घकालिक, अल्पकालिक, तत्पर, उत्सुक,
//   कटिबद्ध, चरणबद्ध, **आगामी** and **नियत**. ⚠️ **आगामी does NOT agree despite
//   the -ी**: आगामी हफ़्ता, आगामी तारीख. ADVERBS: टालमटोल (also a noun), फ़िलहाल.
// RETROFLEX/DENTAL (unit1.js §1b): **टालमटोल opens with RETROFLEX ट and carries a
// DENTAL त... no — both ट are RETROFLEX** and both merge to t, so taalamtol has
// two t sounds made with the tongue curled back and nothing in the reading shows
// it. तत्पर and नियत are DENTAL त. Checked against all 1,440 readings: 0
// collisions.
// LOANWORD FREE-PASS CHECK (unit1.js §9): no loanwords. Zero free passes.
export const HI_UNIT72 = {
  id: "hi-u72",
  lang: "hi",
  title: "योजना और इरादा",
  order: 72,
  stage: "b1",
  lessons: [
    {
      id: "hi-u72l1",
      unit: 72,
      lesson: 1,
      title: "What comes first",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Set a priority, put a proposal forward, take an initiative, name a strategy, state an objective, and say what you are counting on.",
      items: [
        { id: "hi-u72l1-praathmiktaa", type: "vocab", front: "प्राथमिकता", reading: "praathmiktaa", meaning: "a priority", accept: ["what gets done first", "first claim on attention", "the thing put first"], example: { jp: "इस साल हमारी प्राथमिकता गुणवत्ता है, तादाद नहीं।", en: "This year our priority is quality, not quantity." }, drill: { jp: "पढ़ाई को प्राथमिकता दो", en: "Give priority to study" }, hint: "PRAATH-MIK-TAA — FEMININE, a -ता abstract (unit 61 §B6). Built on प्राथमिक, 'first', which is not taught — so this abstract is cardable (unit 67's rule). ⚠️ The frame is X को प्राथमिकता देना, to give X priority. Not पहले, first (unit 11), which is about order in time." },
        { id: "hi-u72l1-prastaav", type: "vocab", front: "प्रस्ताव", reading: "prastaav", meaning: "a proposal", accept: ["a formal suggestion put forward", "a motion put", "an offer laid out"], example: { jp: "उसका प्रस्ताव अच्छा था, पर बहुमत उसके पक्ष में नहीं था।", en: "His proposal was good, but the majority was not in favour of it." }, drill: { jp: "मीटिंग में एक प्रस्ताव आया", en: "A proposal came up in the meeting" }, hint: "PRA-STAAV, masculine, consonant-final, all DENTAL त. ⚠️ Not सुझाव, a suggestion (unit 57): a सुझाव is offered in conversation, a प्रस्ताव is tabled in a meeting and voted on. प्रस्ताव रखना is to move it, प्रस्ताव पास होना is for it to carry." },
        { id: "hi-u72l1-pahal", type: "vocab", front: "पहल", reading: "pahal", meaning: "an initiative", accept: ["the first move someone makes", "the lead taken", "a first step taken on one's own"], example: { jp: "कोई पहल नहीं कर रहा था, तो उसने खुद चिट्ठी लिख दी।", en: "Nobody was taking an initiative, so he wrote the letter himself." }, drill: { jp: "किसी ने पहल नहीं की", en: "Nobody took an initiative" }, hint: "PA-HAL — ⚠️ FEMININE AND CONSONANT-FINAL, and **the likeliest gender error in this unit**: पहल अच्छी थी, never अच्छा. From पहला, first (unit 11). The frame is पहल करना. Not शुरुआत, a beginning (unit 22): a शुरुआत is when a thing started, a पहल is somebody CHOOSING to move first." },
        { id: "hi-u72l1-rananiiti", type: "vocab", front: "रणनीति", reading: "rananiiti", meaning: "a strategy", accept: ["a worked-out way of winning", "a plan of campaign", "a long game thought out"], example: { jp: "उसकी रणनीति साफ़ थी, पहले छोटे काम, फिर बड़ा।", en: "His strategy was clear — the small jobs first, then the big one." }, drill: { jp: "उसकी रणनीति बहुत साफ़ थी", en: "His strategy was very clear" }, hint: "RA-NA-NII-TI — FEMININE, a -ति abstract. रण is a battlefield and नीति is policy, so literally battle-policy — the ण is RETROFLEX and merges to n (unit 1 §1b). ⚠️ Not तरीका, a method (unit 32): a तरीका is how you do one task, a रणनीति is how you plan to beat a difficulty over time." },
        { id: "hi-u72l1-uddeshya", type: "vocab", front: "उद्देश्य", reading: "uddeshya", meaning: "an objective", accept: ["what a plan is trying to achieve", "the purpose in view", "the end a thing is for"], example: { jp: "इस कार्यक्रम का उद्देश्य बच्चों को सिखाना है, खेल नहीं।", en: "The objective of this programme is to teach children, not play." }, drill: { jp: "हमारा उद्देश्य साफ़ है", en: "Our objective is clear" }, hint: "UD-DESH-YA, masculine. The द्दे is a real doubled d, held, and श्य is श with य stacked. ⚠️ Carded 'an objective' and not 'the aim', because मकसद (unit 32) owns that gloss, and लक्ष्य (unit 48) is already carded too. An उद्देश्य is the stated purpose of a PROGRAMME, which is why it belongs with प्रस्ताव above." },
        { id: "hi-u72l1-apekshaa", type: "vocab", front: "अपेक्षा", reading: "apekshaa", meaning: "what one counts on", accept: ["what is expected of someone", "an expectation held", "what one looks for from someone"], example: { jp: "मुझसे जो अपेक्षा थी, वह मैं पूरी नहीं कर सका।", en: "What was counted on from me, I could not fulfil." }, drill: { jp: "मुझसे जो अपेक्षा थी वह पूरी नहीं हुई", en: "What was counted on from me was not fulfilled" }, hint: "A-PEK-SHAA — FEMININE, with the क्ष conjunct (unit 6). ⚠️ Carded 'what one counts on' because **'an expectation' collides with उम्मीद (unit 27)**, and the difference is real: उम्मीद is YOUR hope, an अपेक्षा is what SOMEONE ELSE requires of you. ⚠️ It also means 'compared with' — उसकी अपेक्षा — which बनिस्बत (unit 63) covers." },
      ],
    },
    {
      id: "hi-u72l2",
      unit: 72,
      lesson: 2,
      title: "Resolve and drive",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Make a vow to yourself, state a settled determination, describe a drive to get ahead, say you are eager or ready and willing, and say you are committed.",
      items: [
        { id: "hi-u72l2-sankalp", type: "vocab", front: "संकल्प", reading: "sankalp", meaning: "a vow to oneself", accept: ["a solemn personal undertaking", "a resolution made", "a pledge to oneself"], example: { jp: "नए साल पर उसने संकल्प लिया कि रोज़ आधा घंटा पढ़ेगा।", en: "At the new year he took a vow that he would study half an hour daily." }, drill: { jp: "उसने संकल्प लिया कि रोज़ पढ़ेगा", en: "He took a vow that he would study daily" }, hint: "SAN-KALP, masculine, consonant-final: ल्प is ल with प stacked. The frame is संकल्प लेना, to take a vow. ⚠️ Not वादा, a promise (unit 30), which you make to someone else; a संकल्प is to yourself, and it carries a religious weight in Hindi — it is what a priest has you say." },
        { id: "hi-u72l2-nishchay", type: "vocab", front: "निश्चय", reading: "nishchay", meaning: "a settled determination", accept: ["a mind made up for good", "firm resolve", "a decision one will not go back on"], example: { jp: "उसका निश्चय पक्का था और किसी दलील से नहीं टूटा।", en: "His determination was firm and did not break under any argument." }, drill: { jp: "उसने निश्चय कर लिया", en: "He made up his mind for good" }, hint: "NISH-CHAY, masculine. ⚠️ Carded 'a settled determination' because **'a resolve' collides with इरादा (unit 57)**, and because निश्चित, definite (unit 38), is already taught from the same root. A निश्चय is the state of having decided and stopped reconsidering." },
        { id: "hi-u72l2-mahatvaakaankshaa", type: "vocab", front: "महत्वाकांक्षा", reading: "mahatvaakaankshaa", meaning: "a drive to get ahead", accept: ["a hunger for a bigger position", "ambition", "the wish to rise high"], example: { jp: "उसकी महत्वाकांक्षा बड़ी थी, इसलिए उसने गाँव छोड़ दिया।", en: "His drive to get ahead was big, so he left the village." }, drill: { jp: "उसकी महत्वाकांक्षा बहुत बड़ी थी", en: "His drive to get ahead was very big" }, hint: "MA-HAT-VAA-KAANK-SHAA — ⚠️ FEMININE, and **THE LONGEST FRONT IN THE BLOCK**, six syllables. महत्व is importance and आकांक्षा is longing. ⚠️ Carded this way because **'ambition' collides with सपना (unit 24)**. **आकांक्षा alone was dropped** so this word could stay — two cards for one root in one unit is the count problem unit 69 names." },
        { id: "hi-u72l2-utsuk", type: "vocab", front: "उत्सुक", reading: "utsuk", meaning: "keen to do something", accept: ["eager", "looking forward to it", "full of eagerness"], example: { jp: "वह नई नौकरी के लिए उत्सुक है, पर अभी जवाब नहीं आया।", en: "He is keen for the new job, but the answer has not come yet." }, drill: { jp: "सब इस खबर के लिए उत्सुक थे", en: "Everyone was keen for this news" }, hint: "UT-SUK, INVARIANT: उत्सुक आदमी, उत्सुक औरत. DENTAL त with स stacked. ⚠️ **इच्छुक was REFUSED** as the derivative of इच्छा, a wish (unit 27) — unit 67's rule — and उत्सुक is the better word anyway: it carries the leaning-forward feeling, not just the wanting." },
        { id: "hi-u72l2-tatpar", type: "vocab", front: "तत्पर", reading: "tatpar", meaning: "ready and willing", accept: ["standing ready to act", "at the ready", "prepared to step in"], example: { jp: "हर आपदा में गाँव के लोग मदद के लिए तत्पर रहते हैं।", en: "In every disaster the village people stay ready and willing to help." }, drill: { jp: "लोग मदद के लिए तत्पर रहते हैं", en: "People stay ready and willing to help" }, hint: "TAT-PAR, INVARIANT, with a doubled DENTAL त — the same cluster as तत्व (unit 68). ⚠️ Not तैयार, ready (unit 23): तैयार means the preparation is done, तत्पर means you are leaning forward waiting to be asked. The word a notice or a speech uses." },
        { id: "hi-u72l2-katibaddh", type: "vocab", front: "कटिबद्ध", reading: "katibaddh", meaning: "committed", accept: ["bound to see a thing through", "pledged to something", "having undertaken to do it"], example: { jp: "सरकार इस काम के लिए कटिबद्ध है, ऐसा हर भाषण में कहा जाता है।", en: "The government is committed to this work, so it is said in every speech." }, drill: { jp: "वह अपने उसूल पर कटिबद्ध है", en: "He is committed to his principles" }, hint: "KA-TI-BADDH, INVARIANT: कटिबद्ध सरकार, कटिबद्ध आदमी. कटि is the waist and बद्ध is 'tied', so literally belted up for work — the RETROFLEX ट merges to t and the द्ध is द with ध stacked. ⚠️ Not बाध्य, bound to (unit 71), which is forced on you; कटिबद्ध is a commitment you declare." },
      ],
    },
    {
      id: "hi-u72l3",
      unit: 72,
      lesson: 3,
      title: "Long and short",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Call a plan long-term or short-term, say work is being done in stages, talk about the forthcoming week, say a time was fixed in advance, and say something is paid in advance.",
      items: [
        { id: "hi-u72l3-diirghkaalik", type: "vocab", front: "दीर्घकालिक", reading: "diirghkaalik", meaning: "long-term", accept: ["running over many years", "stretching far ahead", "meant for the long run"], example: { jp: "यह दीर्घकालिक योजना है, नतीजा दस साल बाद दिखेगा।", en: "This is a long-term plan; the result will show after ten years." }, drill: { jp: "दीर्घकालिक नतीजा अभी नहीं दिखेगा", en: "A long-term result will not show yet" }, hint: "DEERGH-KAA-LIK, INVARIANT: दीर्घकालिक योजना, दीर्घकालिक असर. दीर्घ is long and काल is time. ⚠️ The घ is ASPIRATED gh after र — say the puff. Formal, and the word a report pairs with अल्पकालिक below; speech would just say लंबे समय की." },
        { id: "hi-u72l3-alpkaalik", type: "vocab", front: "अल्पकालिक", reading: "alpkaalik", meaning: "short-term", accept: ["lasting only a little while", "for a short while only", "not meant to last"], example: { jp: "यह अल्पकालिक उपाय है, असली हल बाद में ढूँढना पड़ेगा।", en: "This is a short-term measure; the real solution will have to be found later." }, drill: { jp: "यह नौकरी अल्पकालिक है", en: "This job is short-term" }, hint: "ALP-KAA-LIK, INVARIANT. अल्प is 'few' — the same अल्प in अल्पमत, a minority (unit 63) — and ल्प is ल with प stacked. ⚠️ The pair with दीर्घकालिक above is what makes both worth carding: Hindi reports judge every policy on exactly this axis." },
        { id: "hi-u72l3-charanbaddh", type: "vocab", front: "चरणबद्ध", reading: "charanbaddh", meaning: "done in stages", accept: ["phased", "step by step in phases", "broken into stages"], example: { jp: "काम चरणबद्ध होगा, पहले एक गाँव में, फिर पूरे इलाके में।", en: "The work will be done in stages — first in one village, then in the whole area." }, drill: { jp: "यह काम चरणबद्ध होगा", en: "This work will be done in stages" }, hint: "CHA-RAN-BADDH, INVARIANT. Built on चरण, a step in a process (unit 66), plus बद्ध, 'tied' — the same बद्ध in कटिबद्ध (lesson 2). ⚠️ Not क्रमिक, step-by-step (unit 62): क्रमिक describes a change that HAPPENED gradually, चरणबद्ध describes a plan deliberately cut into phases." },
        { id: "hi-u72l3-aagaamii", type: "vocab", front: "आगामी", reading: "aagaamii", meaning: "forthcoming", accept: ["coming up next", "due to come", "the one just ahead"], example: { jp: "आगामी हफ़्ते इस प्रस्ताव पर चर्चा होगी।", en: "There will be a discussion on this proposal in the forthcoming week." }, drill: { jp: "आगामी हफ़्ते इस पर चर्चा होगी", en: "There will be a discussion on this in the forthcoming week" }, hint: "AA-GAA-MII — ⚠️ INVARIANT DESPITE THE -ी: आगामी हफ़्ता, आगामी तारीख, आगामी साल — never आगामा. From आगे, ahead (unit 14). Formal, and it goes BEFORE its noun, where speech says अगले हफ़्ते (unit 11)." },
        { id: "hi-u72l3-niyat", type: "vocab", front: "नियत", reading: "niyat", meaning: "fixed in advance", accept: ["appointed beforehand", "set in advance", "already settled on"], example: { jp: "मीटिंग का नियत समय चार बजे था, पर कोई पाँच बजे आया।", en: "The fixed time of the meeting was four o'clock, but some came at five." }, drill: { jp: "वह नियत दिन पर आया", en: "He came on the fixed day" }, hint: "NI-YAT, INVARIANT: नियत समय, नियत तारीख. DENTAL त. ⚠️ Not तय, settled (unit 39), which is what the parties agreed; नियत is what an authority APPOINTED. And ⚠️ do not confuse it with नियम, a rule (unit 32) — different root, one letter apart." },
        { id: "hi-u72l3-agrim", type: "vocab", front: "अग्रिम", reading: "agrim", meaning: "paid in advance", accept: ["given before the work", "up front", "handed over beforehand"], example: { jp: "उसने अग्रिम पैसा लिया और उसके बाद काम शुरू किया।", en: "He took money in advance and after that started the work." }, drill: { jp: "हमें अग्रिम पैसा नहीं चाहिए", en: "We do not want money in advance" }, hint: "AG-RIM, INVARIANT: अग्रिम पैसा, अग्रिम किस्त. The ग्रि is ग with र stacked plus the ि mātrā — ⚠️ NOT the ृ mark, so it reads gri with a full i. From अग्र, 'front'. Also a noun: अग्रिम देना is to pay a deposit." },
      ],
    },
    {
      id: "hi-u72l4",
      unit: 72,
      lesson: 4,
      title: "On paper, and put off",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Organise an event, draw up an outline plan, a timetable and an agenda, admit to putting things off, and say what you are doing for the time being.",
      items: [
        { id: "hi-u72l4-aayojan", type: "vocab", front: "आयोजन", reading: "aayojan", meaning: "the organising of an event", accept: ["the putting-on of something", "the arranging of an occasion", "the staging of an event"], example: { jp: "मेले का आयोजन गाँव के लोगों ने मिलकर किया।", en: "The organising of the fair was done by the village people together." }, drill: { jp: "मेले का आयोजन गाँव के लोगों ने किया", en: "The village people did the organising of the fair" }, hint: "AA-YO-JAN, masculine, consonant-final. ⚠️ Not नियोजन, planning of work (unit 66), which is one letter away and a different word: नियोजन lays WORK out, आयोजन puts an EVENT on. And not इंतज़ाम (unit 19), which is one booking. आयोजन करना, and the organiser is an आयोजक." },
        { id: "hi-u72l4-khaakaa", type: "vocab", front: "खाका", reading: "khaakaa", meaning: "an outline plan", accept: ["a rough sketch of what will be done", "a blueprint in rough", "a draft layout"], example: { jp: "पहले एक खाका बनाओ, ब्यौरा बाद में भर लेंगे।", en: "Make an outline plan first; we will fill in the breakdown of details later." }, drill: { jp: "खाका अभी तैयार नहीं है", en: "The outline plan is not ready yet" }, hint: "KHAA-KAA, masculine — the -आ follows the rule. Plain ख (unit 1 §7 keeps ख़ uncarded). Literally a dust-sketch. ⚠️ Not प्रारूप, a template (unit 66), which is a blank form somebody else designed; a खाका is YOUR rough first shape of a thing, and a मसौदा (unit 93's) is a first written draft." },
        { id: "hi-u72l4-anusuuchii", type: "vocab", front: "अनुसूची", reading: "anusuuchii", meaning: "a timetable", accept: ["a list of times", "a schedule", "a printed order of times"], example: { jp: "रेल की अनुसूची बदल गई और हमें स्टेशन पर मालूम हुआ।", en: "The train timetable changed and we found out at the station." }, drill: { jp: "नई अनुसूची दीवार पर लगी है", en: "The new timetable is up on the wall" }, hint: "A-NU-SOO-CHII — FEMININE, with the long oo of ऊ. सूची is a list. ⚠️ Carded 'a timetable' and कार्यसूची below 'an agenda', because the two would otherwise be one gloss — and that is also the real difference: an अनुसूची is WHEN, a कार्यसूची is WHAT. The word also means a constitutional schedule." },
        { id: "hi-u72l4-kaaryasuuchii", type: "vocab", front: "कार्यसूची", reading: "kaaryasuuchii", meaning: "an agenda", accept: ["the list of items to be taken up", "the order of business", "what a meeting will go through"], example: { jp: "मीटिंग की कार्यसूची में छह मुद्दे थे और समय आधा घंटा।", en: "There were six issues on the meeting's agenda and the time was half an hour." }, drill: { jp: "कार्यसूची पहले भेज दो", en: "Send the agenda first" }, hint: "KAAR-YA-SOO-CHII — FEMININE. कार्य is work — the same कार्य in कार्यवाही and कार्यभार (unit 66) — plus सूची, a list. ⚠️ An अनुसूची above is the times; a कार्यसूची is the business. A meeting that has one is a meeting that ends." },
        { id: "hi-u72l4-taalamtol", type: "vocab", front: "टालमटोल", reading: "taalamtol", meaning: "putting things off", accept: ["dragging one's feet", "procrastination", "delay after delay"], example: { jp: "दफ़्तर में टालमटोल इतनी है कि एक कागज़ महीना लेता है।", en: "There is so much putting-off in the office that one paper takes a month." }, drill: { jp: "दफ़्तर में टालमटोल बहुत है", en: "There is a lot of putting-off in the office" }, hint: "TAA-LAM-TOL, and it works as both noun and adverb. ⚠️ **TWO RETROFLEX ट, both merged to t** (unit 1 §1b), and nothing in the reading shows it — the tongue curls back twice. Built on टालना, to put off (unit 22), doubled the way Hindi doubles for emphasis. टालमटोल करना is to stall deliberately." },
        { id: "hi-u72l4-filhaal", type: "vocab", front: "फ़िलहाल", reading: "filhaal", meaning: "for the time being", accept: ["for now", "until something changes", "at the moment"], example: { jp: "फ़िलहाल यही उपाय चलेगा, दीर्घकालिक हल बाद में सोचेंगे।", en: "For the time being this measure will do; we will think about a long-term solution later." }, drill: { jp: "फ़िलहाल कोई हल नहीं है", en: "For the time being there is no solution" }, hint: "FIL-HAAL, an ADVERB — it agrees with nothing. With फ़ (unit 4), never plain फ. Built on हाल, the current state (unit 47). ⚠️ Not अभी, right now (unit 11): अभी is this moment, फ़िलहाल is 'for now, and it will change' — which is why it pairs with अल्पकालिक (lesson 3)." },
      ],
    },
  ],
};
