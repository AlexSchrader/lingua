// HI Unit 57 — सोचना और मानना ("Thinking and accepting") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 3. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 8 (A2)"). MEASURED HOLE — AND THIS ONE
// HAS MOVED SINCE THE BLOCK WAS BRIEFED, so the number is re-derived here rather
// than quoted. unit31.js §A8 recorded the abstract field at **1 of 16** and said
// "the rest (तर्क, पक्ष, मिसाल…) are free for u45 or block 3's coverage slots".
// ⚠️ THAT IS NO LONGER THE STATE: block 1 then spent **48 cards** on it — u32 all
// four lessons (मुमकिन, हुनर, काबिल, हिम्मत, अनुभव, इजाज़त, नियम, आज़ादी, सज़ा,
// कसूर, फ़र्ज़, ज़िम्मेदारी, हक, मजबूर, मकसद, तैयारी, तरीका, असर, नतीजा, फ़र्क,
// उदाहरण, सफल) and u39l3/l4 (विचार, खयाल, दलील, सबूत, मुद्दा, **तर्क**, ऐलान,
// इशारा, राज़, ज़िक्र, शिकायत, तय). तर्क is TAKEN, not free. So the hole this unit
// fills is what is LEFT: **judgement was 5 of 24** — the corpus had शक (u30l2),
// फ़ैसला (u30l2), राय (u30l1), सहमत (u30l2) and भरोसा (u27l2), and could not say
// **reality, a point of view, a side in an argument, a claim, a misunderstanding,
// confusion, knowledge, a guess, common sense, imagination, an intention, a
// solution, a benefit, existence, proven or evident.** Reasoning is spent;
// JUDGING what you have reasoned is not.
//
// ⚠️ NINE FRONTS WANTED AND REFUSED. This is the densest refusal list in the block
// and every one is worth naming, because a later seat will want the same words:
//   TAKEN: सच (u2l2) · झूठ (u4l2) · वजह (u23l4) · जाँच (u35l1) · मतलब (u8l3) ·
//   सपना (u24l4) · जवाब (u8l3) · तर्क (u39l3).
//   SYNONYM-REFUSED, and each collides through normalizeMeaning: सही (ठीक u4l4 and
//   शुद्ध u6l3 both gloss "correct") · मिसाल (उदाहरण u32l4 is "an example") ·
//   सिद्धांत (नियम u32l2 is "a rule") · खास (खासकर u38l4 is its own derivative).
//   BASE/DERIVATIVE-REFUSED, and this is the judgement RUNBOOK §4 warns cuts too
//   deep — but here it is the right call because the derivative is what a learner
//   would reach for first: **सोच** beside सोचना (u22l1) and **समझ** beside समझना
//   (u6l4). A learner who knows सोचना does already know सोच. **भूल was refused the
//   same way** (भूलना u26l1) and गलतफहमी carded instead, which is a genuinely new
//   word rather than a second mastery track.
//   NAMED FOR A LATER BLOCK: सोच, समझ, नज़र, विश्वास, भरम, तजुर्बा — and the one a
//   B1 seat should take first is **सोच**, once enough units separate it from u22.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: हकीकत, उलझन, जानकारी, खोज, अक्ल, कल्पना. **हकीकत, उलझन and अक्ल
//   are CONSONANT-FINAL**, so nothing in the shape says so — हकीकत कड़वी है, not कड़वा.
//   MASCULINE: पक्ष, दावा, बहाना, ज्ञान, अंदाज़ा, गौर, इरादा, सबक, हल, फ़ायदा,
//   वजूद, नज़रिया. **नज़रिया is masculine despite the -या** — नज़रिया बदला, not बदली
//   — and it is the one in the unit most likely to be got wrong. हल is consonant-final
//   masculine.
//   ADJECTIVES: **झूठा AGREES** (झूठा आदमी, झूठी बात), because it ends in -आ.
//   INVARIANT (unit 53's rule): साबित, ज़ाहिर, ठोस. यकीन is a NOUN, used in the
//   frame मुझे यकीन है.
//
// ⚠️ ONE NEAR-PAIR: बहाना bahaanaa, an excuse, is spelled and read EXACTLY like a
// verb infinitive, and there IS a verb बहाना (to cause to flow) built off बहना
// (u60l2). The card is the NOUN, its hint says so, and the two are kept in
// different units. The same trap as झरना (u54l1), भावना (u52l1) and प्रार्थना (u51l1)
// — Hindi has a whole class of -ना nouns and this is the fourth one block 3 cards.
// RETROFLEX/DENTAL (§1b): no new pair. ठोस thos is RETROFLEX ठ with no dental थोस
// in the corpus; हकीकत hakiikat, इरादा iraadaa and साबित saabit are dental with no
// retroflex twin. Checked against all 1104 readings.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT57 = {
  id: "hi-u57",
  lang: "hi",
  title: "सोचना और मानना",
  order: 57,
  stage: "a2",
  lessons: [
    {
      id: "hi-u57l1",
      unit: 57,
      lesson: 1,
      title: "True, real, proven",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say that something is the reality rather than the story, that it has been proven, that it is plainly evident — and that a person is lying.",
      items: [
        { id: "hi-u57l1-hakiikat", type: "vocab", front: "हकीकत", reading: "hakiikat", meaning: "reality", accept: ["the real state of things", "actuality"], example: { jp: "लोग जो कहते हैं वह एक बात है और हकीकत कुछ और है।", en: "What people say is one thing and the reality is something else." }, drill: { jp: "इस गाँव की हकीकत कुछ और है", en: "The reality of this village is something else" }, hint: "HA-KII-KAT — ⚠️ FEMININE, consonant-final, so the shape tells you nothing: हकीकत कड़वी है. Plain क, not क़ — unit 1 §7 keeps all three Perso-Arabic letters uncarded. Deeper than सच (unit 2): सच is a true statement, हकीकत is how things actually are." },
        { id: "hi-u57l1-jhuuthaa", type: "vocab", front: "झूठा", reading: "jhuuthaa", meaning: "untrue", accept: ["false", "lying"], example: { jp: "उसने जो कहानी बताई वह पूरी झूठी थी।", en: "The story he told was entirely untrue." }, drill: { jp: "यह आदमी बहुत झूठा है", en: "This man is a great liar" }, hint: "JHUU-THAA — ⚠️ IT AGREES, because it ends in -आ: झूठा आदमी, झूठी बात. DENTAL थ, tongue on the teeth then a puff. Built off झूठ, a lie (unit 4). Of a statement AND of the person who makes them." },
        { id: "hi-u57l1-saabit", type: "vocab", front: "साबित", reading: "saabit", meaning: "proven", accept: ["established as true", "borne out"], example: { jp: "सबूत के बिना कोई बात साबित नहीं होती।", en: "Without proof nothing is proven." }, drill: { jp: "यह बात अभी साबित नहीं हुई", en: "This matter is not yet proven" }, hint: "SAA-BIT, INVARIANT, DENTAL त. It comes in one frame: साबित होना, to be proven, or साबित करना, to prove. सबूत, proof (unit 39), is the noun from the same root — and the two turn up in one sentence constantly." },
        { id: "hi-u57l1-zaahir", type: "vocab", front: "ज़ाहिर", reading: "zaahir", meaning: "evident", accept: ["plain to see", "manifest"], example: { jp: "उसके मुँह से ज़ाहिर था कि उसे खबर पसंद नहीं आई।", en: "It was evident from his face that he had not liked the news." }, drill: { jp: "उसके मुँह से सब ज़ाहिर था", en: "Everything was evident from his face" }, hint: "ZAA-HIR, INVARIANT, with ज़ — a z. Its commonest shape is ज़ाहिर है कि…, 'it is obvious that…', which is how a Hindi speaker opens an argument. Not the same as साफ़ (unit 14), which is clean or clear to the eye." },
        { id: "hi-u57l1-thos", type: "vocab", front: "ठोस", reading: "thos", meaning: "concrete", accept: ["solid", "firm and real"], example: { jp: "हमें ठोस सबूत चाहिए और सिर्फ़ बातें नहीं।", en: "We need concrete proof and not just talk." }, drill: { jp: "हमें कोई ठोस सबूत चाहिए", en: "We need some concrete proof" }, hint: "THOS, INVARIANT, RETROFLEX ठ — tongue curled back, then a puff of air. It also means physically solid, as against liquid. ठोस बात is a point with something behind it." },
        { id: "hi-u57l1-yakiin", type: "vocab", front: "यकीन", reading: "yakiin", meaning: "conviction", accept: ["certainty", "being sure"], example: { jp: "मुझे यकीन है कि वह वादा पूरा करेगा।", en: "I am certain that he will keep his promise." }, drill: { jp: "मुझे इस बात का यकीन है", en: "I am certain of this matter" }, hint: "YA-KIIN, masculine. Plain क. Stronger than भरोसा (unit 27), which is trust in a PERSON — यकीन is being sure of a FACT. Its frame is मुझे यकीन है कि…, and यकीन मानो is 'believe me'." },
      ],
    },
    {
      id: "hi-u57l2",
      unit: 57,
      lesson: 2,
      title: "How it looks from where you stand",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "State a point of view, take a side, make a claim, and admit to a misunderstanding, confusion or an excuse.",
      items: [
        { id: "hi-u57l2-nazariyaa", type: "vocab", front: "नज़रिया", reading: "nazariyaa", meaning: "a point of view", accept: ["an outlook", "a way of seeing it"], example: { jp: "उम्र के साथ उसका नज़रिया पूरी तरह बदल गया।", en: "With age his point of view changed completely." }, drill: { jp: "उसका नज़रिया अब बदल गया है", en: "His point of view has changed now" }, hint: "NA-ZA-RI-YAA — ⚠️ MASCULINE despite the -या, and this is the one in the unit most often got wrong: नज़रिया बदला, not बदली. With ज़ — a z. Wider than राय, an opinion (unit 30): a राय is about one thing, a नज़रिया is about everything." },
        { id: "hi-u57l2-paksh", type: "vocab", front: "पक्ष", reading: "paksh", meaning: "a side in an argument", accept: ["one party's case"], example: { jp: "बहस में दोनों पक्ष अपनी दलील रख रहे थे।", en: "In the argument both sides were putting their case." }, drill: { jp: "बहस में दोनों पक्ष मौजूद थे", en: "Both sides were present in the argument" }, hint: "PAKSH, masculine, with the क्ष conjunct — one of unit 6's three, and said ksh in one breath. Of an argument, and also of a political party. Note the drill's दोनों पक्ष: a consonant-final masculine takes no plural ending." },
        { id: "hi-u57l2-daavaa", type: "vocab", front: "दावा", reading: "daavaa", meaning: "a claim", accept: ["an assertion", "a contention"], example: { jp: "कंपनी का दावा है कि यह दवा सबसे अच्छी है।", en: "The company's claim is that this medicine is the best." }, drill: { jp: "कंपनी का दावा सच नहीं निकला", en: "The company's claim did not turn out to be true" }, hint: "DAA-VAA, masculine and regular -ा, DENTAL द. ⚠️ Read it against दावत daavat, a feast (unit 51): two letters shared and nothing else. दावा करना is to claim; दावे से कहना is to say with confidence." },
        { id: "hi-u57l2-galatfahmii", type: "vocab", front: "गलतफहमी", reading: "galatfahmii", meaning: "a misunderstanding", accept: ["a wrong impression"], example: { jp: "यह सिर्फ़ एक गलतफहमी थी और अब सब ठीक है।", en: "It was only a misunderstanding and now everything is fine." }, drill: { jp: "उन दोनों के बीच एक गलतफहमी थी", en: "There was a misunderstanding between the two of them" }, hint: "GA-LAT-FAH-MII — ⚠️ FEMININE. Built out of two words you nearly know: गलत, wrong, plus फ़हम, understanding — and note it is spelled with plain फ here, not फ़. The frame is X को गलतफहमी हुई." },
        { id: "hi-u57l2-uljhan", type: "vocab", front: "उलझन", reading: "uljhan", meaning: "confusion", accept: ["a muddle", "being tangled up"], example: { jp: "इतने नियम सुनकर मेरे मन में उलझन हो गई।", en: "Hearing so many rules I became confused." }, drill: { jp: "इतने नियम सुनकर मुझे उलझन हुई", en: "Hearing so many rules I became confused" }, hint: "UL-JHAN — ⚠️ FEMININE, consonant-final: उलझन हुई, not हुआ. From the image of thread getting tangled, which is what the verb उलझना means. Of the mind, not of a situation — a confusing situation is a मुश्किल." },
        { id: "hi-u57l2-bahaanaa", type: "vocab", front: "बहाना", reading: "bahaanaa", meaning: "an excuse", accept: ["a pretext", "a made-up reason"], example: { jp: "उसने काम से बचने के लिए बीमारी का बहाना बनाया।", en: "He made an excuse of illness to get out of the work." }, drill: { jp: "उसने बीमारी का बहाना बनाया", en: "He made an excuse of illness" }, hint: "BA-HAA-NAA, masculine. ⚠️ It is spelled and read exactly like a VERB INFINITIVE and this card is the NOUN — the same class as झरना (unit 54) and भावना (unit 52). The verb is बनाना: बहाना बनाना, to make an excuse." },
      ],
    },
    {
      id: "hi-u57l3",
      unit: 57,
      lesson: 3,
      title: "Knowing, guessing, finding out",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Talk about knowledge and information, make a rough guess, report a discovery, ask someone to pay attention, and say whether a person has any common sense.",
      items: [
        { id: "hi-u57l3-gyaan", type: "vocab", front: "ज्ञान", reading: "gyaan", meaning: "knowledge", accept: ["learning", "what is known"], example: { jp: "किताबों से मिला ज्ञान काम के अनुभव से अलग होता है।", en: "Knowledge got from books is different from experience of work." }, drill: { jp: "किताबों से बहुत ज्ञान मिलता है", en: "A lot of knowledge is got from books" }, hint: "GYAAN, masculine, opening with the ज्ञ conjunct — one of unit 6's three, and said gya, not ja-nya. Book knowledge and spiritual knowledge both; जानकारी (next card) is the everyday, practical kind." },
        { id: "hi-u57l3-jaankaarii", type: "vocab", front: "जानकारी", reading: "jaankaarii", meaning: "details you have been given", accept: ["particulars", "briefing"], example: { jp: "टिकटघर से मुझे ट्रेन की पूरी जानकारी मिल गई।", en: "I got the full details of the train from the ticket office." }, drill: { jp: "इस बारे में मुझे पूरी जानकारी है", en: "I have the full details about this" }, hint: "JAAN-KAA-RII — ⚠️ FEMININE. Built off जानना, to know (unit 8). Different from खबर, news (unit 28), which is what happened, and from ज्ञान, which is what you have learned: जानकारी is what you were TOLD." },
        { id: "hi-u57l3-andaazaa", type: "vocab", front: "अंदाज़ा", reading: "andaazaa", meaning: "a guess", accept: ["an estimate", "a rough idea"], example: { jp: "भीड़ देखकर मैंने दो सौ लोगों का अंदाज़ा लगाया।", en: "Looking at the crowd I made a guess of two hundred people." }, drill: { jp: "मैंने कीमत का अंदाज़ा लगाया", en: "I made a guess at the price" }, hint: "AN-DAA-ZAA, masculine and regular -ा, with ज़ — a z. The verb is लगाना, to apply (unit 35) — अंदाज़ा लगाना, never करना. The ं before द is the matching dental nasal." },
        { id: "hi-u57l3-khoj", type: "vocab", front: "खोज", reading: "khoj", meaning: "a discovery", accept: ["a search that found something", "a find"], example: { jp: "उस दवा की खोज ने कई लोगों की जान बचाई।", en: "The discovery of that medicine saved many lives." }, drill: { jp: "इस दवा की खोज बहुत पुरानी है", en: "The discovery of this medicine is very old" }, hint: "KHOJ — ⚠️ FEMININE, consonant-final: खोज पुरानी है. ख with a puff of air. Both the searching and the thing found, so खोज करना is to research and खोज हुई is a discovery was made. ढूँढना (unit 26) is the everyday looking-for." },
        { id: "hi-u57l3-gaur", type: "vocab", front: "गौर", reading: "gaur", meaning: "careful notice", accept: ["heed", "close attention"], example: { jp: "उसने मेरी बात पर गौर नहीं किया इसलिए गलती हुई।", en: "He did not pay careful attention to what I said, so the mistake happened." }, drill: { jp: "इस बात पर गौर करना ज़रूरी है", en: "Paying careful attention to this matter is essential" }, hint: "GAUR, masculine. The au is the open vowel of औ (unit 2). Sharper than ध्यान, attention (unit 22): ध्यान is where your mind is, गौर is deliberately looking closely. गौर करना, and गौर से देखना." },
        { id: "hi-u57l3-akl", type: "vocab", front: "अक्ल", reading: "akl", meaning: "common sense", accept: ["wits", "good sense"], example: { jp: "पढ़ाई से डिग्री मिलती है लेकिन अक्ल अनुभव से आती है।", en: "Studying gets you a degree, but common sense comes from experience." }, drill: { jp: "इस काम में थोड़ी अक्ल चाहिए", en: "This job needs a little common sense" }, hint: "AKL — ⚠️ FEMININE, consonant-final: अक्ल अच्छी है. The क्ल conjunct is क and ल stacked, said in one breath: akl, not a-kal. ⚠️ अक्ल नहीं है is one of the commonest put-downs in Hindi." },
      ],
    },
    {
      id: "hi-u57l4",
      unit: 57,
      lesson: 4,
      title: "What the mind makes of it",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Talk about imagination and intention, draw a lesson from something, propose a solution, weigh up the benefit, and talk about a thing's existence.",
      items: [
        { id: "hi-u57l4-kalpanaa", type: "vocab", front: "कल्पना", reading: "kalpanaa", meaning: "imagination", accept: ["a thing imagined", "picturing in the mind"], example: { jp: "बच्चों की कल्पना बड़ों से बहुत आगे जाती है।", en: "Children's imagination goes much further than that of grown-ups." }, drill: { jp: "बच्चों की कल्पना बहुत आगे जाती है", en: "Children's imagination goes very far" }, hint: "KAL-PA-NAA — ⚠️ FEMININE, and the fourth -ना NOUN in this block after प्रार्थना, भावना and झरना. The ल्प conjunct is ल and प stacked. कल्पना करना is to imagine." },
        { id: "hi-u57l4-iraadaa", type: "vocab", front: "इरादा", reading: "iraadaa", meaning: "an intention", accept: ["a plan in mind", "resolve"], example: { jp: "मेरा इरादा अगले साल गाँव जाने का है।", en: "My intention is to go to the village next year." }, drill: { jp: "मेरा इरादा अगले साल जाने का है", en: "My intention is to go next year" }, hint: "I-RAA-DAA, masculine and regular -ा, DENTAL द. Not the same as मकसद, the aim (unit 32), which is what you want to achieve: इरादा is what you have decided to DO. Its frame is X का इरादा है, with the plan in the oblique infinitive: जाने का इरादा." },
        { id: "hi-u57l4-sabak", type: "vocab", front: "सबक", reading: "sabak", meaning: "a lesson learned", accept: ["a moral", "what one learns from it"], example: { jp: "उस गलती से मुझे अच्छा सबक मिला।", en: "I got a good lesson from that mistake." }, drill: { jp: "उस गलती से मुझे सबक मिला", en: "I got a lesson from that mistake" }, hint: "SA-BAK, masculine. ⚠️ NOT पाठ (unit 28), which is a lesson in a textbook — सबक is what life teaches you, and सबक सिखाना means to teach someone a lesson in the threatening sense. Plain क." },
        { id: "hi-u57l4-hal", type: "vocab", front: "हल", reading: "hal", meaning: "a solution", accept: ["a way out", "a resolution"], example: { jp: "इस मुद्दे का हल बात करने से ही निकलेगा।", en: "The solution to this issue will come only from talking." }, drill: { jp: "इस मुद्दे का हल अभी नहीं मिला", en: "The solution to this issue has not been found yet" }, hint: "HAL, masculine, two letters. ⚠️ Read it against हाल haal, the current state (unit 38): only §1's length-by-doubling separates hal from haal. हल निकालना is to find a way out, and a sum in maths is also हल किया." },
        { id: "hi-u57l4-faaydaa", type: "vocab", front: "फ़ायदा", reading: "faaydaa", meaning: "a benefit", accept: ["an advantage", "use it brings"], example: { jp: "रोज़ चलने का फ़ायदा कुछ महीनों में मिलता है।", en: "The benefit of walking every day is felt within a few months." }, drill: { jp: "रोज़ चलने का फ़ायदा बहुत है", en: "There is a great benefit in walking every day" }, hint: "FAAY-DAA, masculine and regular -ा, with फ़ — an f. DENTAL द. Not मुनाफ़ा (unit 37), which is money made in trade: फ़ायदा is any advantage, and its opposite नुकसान (unit 37) covers both." },
        { id: "hi-u57l4-vajuud", type: "vocab", front: "वजूद", reading: "vajuud", meaning: "existence", accept: ["being", "having existence"], example: { jp: "उस पुराने गाँव का वजूद अब सिर्फ़ किस्सों में है।", en: "That old village's existence is now only in stories." }, drill: { jp: "उस गाँव का वजूद अब नहीं है", en: "That village no longer exists" }, hint: "VA-JUUD, masculine, long uu, DENTAL द. More abstract than the rest of the unit and it is here because the corpus has no way to say a thing exists or has stopped existing: वजूद में आना, to come into being." },
      ],
    },
  ],
};
