// HI Unit 30 — बातचीत ("Talking with people") — A1 · THE LAST UNIT OF HINDI A1
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 RETHEMED SLOT — the scaffold's "Vocabulary 6", a title lint hard-errors on.
// It is the sixth and last of block 3's six coverage rethemes, and the last unit
// of the band: after this, Hindi A1 is 30/30.
//
// WHY CONVERSATION, AND WHY LAST. Block 1's u7 taught the GREETINGS — नमस्ते,
// धन्यवाद, कृपया, माफ़ कीजिए — the fixed formulas you say at the door. Nothing in
// the twenty-two units since taught the words a conversation is actually MADE of.
// Measured against the merged u1–u29 corpus: no word for a matter, an opinion,
// advice, a promise, a quarrel, praise, agreement, refusal, an argument, a
// decision, a doubt, a beginning, congratulations, a blessing, a gift, happiness
// or an opportunity — and none of the discourse adverbs (दरअसल, यानी, ज़रा, अभी,
// अक्सर, कभी) that make Hindi speech sound like speech rather than a textbook.
// It is last on purpose: l1 and l2 need पसंद and राय and सहमत to rest on the
// feelings of u27, and l3's ज़रा only makes sense once the learner has imperatives
// to soften.
//
// THE FRAME AGAIN, AND l4 IS BUILT ON IT. u20 and u27 established that Hindi puts
// a state in a NOUN with मुझे. This unit finishes the pattern for the social
// emotions: मुझे खुशी है, मुझे शक है, मुझे मंज़ूर है, मुझे मौका मिलता है. Every one
// of those hints names the frame, not just the word.
//
// ⚠️ A CLOZE HAZARD THIS UNIT CAUGHT AND EVERY LATER SEAT SHOULD KNOW ABOUT.
// `blankExample` replaces the FIRST occurrence of the front and leaves the rest of
// the sentence intact, so a drill containing the front TWICE shows the learner the
// answer further along the line. A खुशी draft here read "आपकी खुशी मेरी खुशी है"
// and would have blanked to "＿＿ मेरी खुशी है" — a free card. It was rewritten.
// The check is now part of block 3's self-check script: front count in drill == 1.
//
// REGISTER PAIRS ARE TAUGHT ONE SIDE ONLY, AND THE HINT NAMES THE OTHER. Hindi
// doubles almost every abstract noun — one Perso-Arabic, one Sanskrit — and
// carding both would be two mastery tracks for one meaning. So: फ़ैसला is carded
// and निर्णय named in its hint; दुआ carded, आशीर्वाद named; तोहफ़ा carded, उपहार
// named; सलाह carded, मशवरा named. unit23.js made the OPPOSITE call once, for
// वजह / कारण, and said why: there the two belong to visibly different registers
// the learner meets in different places. One deliberate exception, recorded.
//
// LEXEME CALLS MADE BY HAND:
//   • खुशी (l4) / खुश (u8l4, "happy") — derivation, allowed by RUNBOOK §4's
//     clarified rule. `derive("खुश")` gives खुशें and खुशों, never खुशी. ⚠️ AND THE
//     MECHANICAL NOTE ONE MORE TIME: खुशी DOES satisfy a whole-word search for
//     खुश, because the trailing ी is a MĀTRĀ and findWholeWord's boundary test
//     uses \p{L}. Harmless as authored; u8l4's drill has no खुशी in it.
//   • बात (l1) / कोई बात नहीं (u7l3) — the multi-word front is a fixed formula,
//     not an inflection, and the router treats it as one string. Both stand.
//   • तारीफ़ (l1, "praise") / तारीख (u17l1, "a date") — unrelated words that look
//     nearly identical in print, which is exactly why the hint pairs them.
//   • अक्सर (l3, "often") / अफ़सर (u28l1, "an officer") — same: one letter apart,
//     both common, and named in both hints.
//   • अभी (l3) / अब (u1l4, "now") — a fossilised अब + ही. Hindi feels it as its
//     own word and no rule generates it; the same call unit22.js made for सभी.
export const HI_UNIT30 = {
  id: "hi-u30",
  lang: "hi",
  title: "बातचीत",
  order: 30,
  stage: "a1",
  lessons: [
    {
      id: "hi-u30l1",
      unit: 30,
      lesson: 1,
      title: "What people say to each other",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Take part in a real conversation — give your opinion, offer advice, make a promise, praise someone, and name a quarrel for what it is.",
      items: [
        { id: "hi-u30l1-baat", type: "vocab", front: "बात", reading: "baat", meaning: "a spoken matter", accept: ["a matter", "talk", "what was said"], example: { jp: "यह बात मुझे पसंद नहीं है।", en: "I do not like this." }, drill: { jp: "यह बात बहुत ज़रूरी है", en: "This matter is very important" }, hint: "BAAT, FEMININE, plural बातें, and one of the busiest words in the language: a thing said, a matter, a point, a topic. बात करना is to talk. कोई बात नहीं, from unit 7, is literally 'no matter'." },
        { id: "hi-u30l1-raay", type: "vocab", front: "राय", reading: "raay", meaning: "an opinion", accept: ["advice given", "one's view", "a judgement"], example: { jp: "इस काम पर आपकी राय क्या है?", en: "What is your opinion on this work?" }, drill: { jp: "मेरी राय बिलकुल अलग है", en: "My opinion is completely different" }, hint: "RAAY, FEMININE, and its ending never changes. राय देना is to give an opinion, राय लेना to ask for one. मेरी राय में is 'in my opinion' — the phrase you want before disagreeing." },
        { id: "hi-u30l1-salaah", type: "vocab", front: "सलाह", reading: "salaah", meaning: "advice", accept: ["counsel", "a recommendation", "what someone suggests"], example: { jp: "मैं आपको एक सलाह देता हूँ।", en: "I'll give you one piece of advice." }, drill: { jp: "यह सलाह बहुत अच्छी है", en: "This advice is very good" }, hint: "SA-LAAH, FEMININE. सलाह देना is to advise, सलाह लेना to take advice. It is practical — what to DO — where राय is what you think. मशवरा is its Persian twin." },
        { id: "hi-u30l1-vaadaa", type: "vocab", front: "वादा", reading: "vaadaa", meaning: "a promise", accept: ["a pledge", "one's word", "an undertaking"], example: { jp: "वह अपना वादा हमेशा पूरा करता है।", en: "He always keeps his promise." }, drill: { jp: "यह मेरा आखिरी वादा है", en: "This is my last promise" }, hint: "VAA-DAA, MASCULINE, plural वादे. वादा करना is to promise and वादा पूरा करना is to keep one — Hindi COMPLETES a promise where English keeps it." },
        { id: "hi-u30l1-jhagraa", type: "vocab", front: "झगड़ा", reading: "jhagraa", meaning: "a quarrel", accept: ["a row", "a dispute", "a fight in words"], example: { jp: "उस घर में रोज़ झगड़ा होता है।", en: "There is a quarrel in that house every day." }, drill: { jp: "इस बात पर झगड़ा मत करो", en: "Don't quarrel about this" }, hint: "JHAG-RAA, MASCULINE, with ड़ — a flapped r. It is a row in WORDS, not a physical fight (that is लड़ाई). झगड़ा करना is to quarrel; झगड़ालू is the person who always does." },
        { id: "hi-u30l1-taariif", type: "vocab", front: "तारीफ़", reading: "taariif", meaning: "praise", accept: ["a compliment", "commendation", "saying good of someone"], example: { jp: "शिक्षक बच्चों की तारीफ़ करते हैं।", en: "The teacher praises the children." }, drill: { jp: "आपकी तारीफ़ सुनकर अच्छा लगता है", en: "It feels good to hear your praise" }, hint: "TAA-RIIF, FEMININE, with the Persian फ़ — an f. तारीफ़ करना is to praise. ⚠️ Read it carefully against तारीख taariikh, a date: फ़ against ख, and in print they look almost the same." },
      ],
    },
    {
      id: "hi-u30l2",
      unit: 30,
      lesson: 2,
      title: "Agreeing and disagreeing",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say you agree, say you refuse, name a decision, and admit you have your doubts.",
      items: [
        { id: "hi-u30l2-sahmat", type: "vocab", front: "सहमत", reading: "sahmat", meaning: "in agreement", accept: ["agreed", "of the same mind", "in accord"], example: { jp: "मैं आपकी राय से सहमत हूँ।", en: "I agree with your opinion." }, drill: { jp: "हम सब इस बात से सहमत हैं", en: "We all agree about this" }, hint: "SAH-MAT never changes its ending. The frame is X से सहमत होना, 'to be in agreement FROM X'. It is formal — in ordinary speech people just say मैं मानता हूँ or ठीक है." },
        { id: "hi-u30l2-inkaar", type: "vocab", front: "इनकार", reading: "inkaar", meaning: "a refusal", accept: ["a denial", "saying no", "a rejection"], example: { jp: "वह हर काम से इनकार करता है।", en: "He refuses every job." }, drill: { jp: "यह इनकार बहुत साफ़ है", en: "This refusal is very clear" }, hint: "IN-KAAR, MASCULINE. इनकार करना is to refuse and also to deny, and what is refused takes से. It is written इंकार as well; both spellings are current." },
        { id: "hi-u30l2-bahas", type: "vocab", front: "बहस", reading: "bahas", meaning: "a heated argument", accept: ["a debate", "an argument over ideas", "wrangling"], example: { jp: "इस बात पर बहुत बहस होती है।", en: "There is a lot of argument about this." }, drill: { jp: "यह बहस बहुत लंबी है", en: "This argument is very long" }, hint: "BA-HAS, FEMININE. बहस करना is to argue, and it is about IDEAS — झगड़ा is the personal row. A courtroom and a family dinner can both contain बहस." },
        { id: "hi-u30l2-faislaa", type: "vocab", front: "फ़ैसला", reading: "faislaa", meaning: "a decision", accept: ["a verdict", "a ruling", "what was decided"], example: { jp: "यह फ़ैसला बहुत मुश्किल था।", en: "This decision was very difficult." }, drill: { jp: "मेरा फ़ैसला बिलकुल साफ़ है", en: "My decision is completely clear" }, hint: "FAIS-LAA, MASCULINE, plural फ़ैसले, with the Persian फ़. फ़ैसला करना is to decide, and it is also a court's verdict. निर्णय is its Sanskrit twin and the formal written one." },
        { id: "hi-u30l2-shak", type: "vocab", front: "शक", reading: "shak", meaning: "a doubt", accept: ["suspicion", "a misgiving", "being unsure"], example: { jp: "मुझे इस आदमी पर शक है।", en: "I have my doubts about this man." }, drill: { jp: "मुझे इस काम पर शक है", en: "I have doubts about this work" }, hint: "SHAK, MASCULINE. What is doubted takes पर: मुझे उस पर शक है, I suspect him. It covers suspicion of a person and uncertainty about a thing. बेशक means 'without a doubt'." },
        { id: "hi-u30l2-manzuur", type: "vocab", front: "मंज़ूर", reading: "manzuur", meaning: "acceptable", accept: ["approved", "agreed to", "granted"], example: { jp: "मुझे आपकी हर सलाह मंज़ूर है।", en: "Every piece of your advice is acceptable to me." }, drill: { jp: "यह फ़ैसला मुझे मंज़ूर है", en: "This decision is acceptable to me" }, hint: "MAN-ZUUR never changes its ending and comes with होना: मुझे मंज़ूर है, it is acceptable to me. मंज़ूर करना is to approve something officially. Read it against मंज़िल, a destination." },
      ],
    },
    {
      id: "hi-u30l3",
      unit: 30,
      lesson: 3,
      title: "The little words that carry a conversation",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Sound like a speaker rather than a textbook — correct someone gently, restate a point, soften a request, and say how often something happens.",
      items: [
        { id: "hi-u30l3-darasal", type: "vocab", front: "दरअसल", reading: "darasal", meaning: "in actual fact", accept: ["actually", "the truth is", "in reality"], example: { jp: "दरअसल मुझे यह काम पसंद नहीं है।", en: "Actually, I do not like this work." }, drill: { jp: "दरअसल मैं कल यहाँ था", en: "Actually I was here yesterday" }, hint: "DAR-A-SAL goes at the FRONT of the sentence and softens a correction — 'actually…'. Persian दर plus असल, 'in the root of it'. असल में means exactly the same." },
        { id: "hi-u30l3-yaanii", type: "vocab", front: "यानी", reading: "yaanii", meaning: "that is to say", accept: ["in other words", "namely", "which is to say"], example: { jp: "वह मेरा साथी है, यानी मेरा दोस्त।", en: "He is my companion, that is, my friend." }, drill: { jp: "यानी यह काम आसान नहीं है", en: "In other words this work is not easy" }, hint: "YAA-NII introduces a restatement, exactly like English 'that is': it warns the listener you are about to say the same thing more plainly. मतलब gets used the same way in speech." },
        { id: "hi-u30l3-zaraa", type: "vocab", front: "ज़रा", reading: "zaraa", meaning: "just, in a softened request", accept: ["kindly", "for a moment", "a touch"], example: { jp: "ज़रा मेरी बात सुनिए।", en: "Just listen to me a moment." }, drill: { jp: "ज़रा यह किताब मुझे दो", en: "Just give me this book" }, hint: "ZA-RAA softens whatever follows it: ज़रा सुनिए is 'just listen a moment', and without the ज़रा the same words land as an order. It also means a tiny amount — ज़रा सा नमक, a touch of salt." },
        { id: "hi-u30l3-abhii", type: "vocab", front: "अभी", reading: "abhii", meaning: "right now", accept: ["just now", "at this very moment", "immediately"], example: { jp: "मैं अभी दफ़्तर से आता हूँ।", en: "I am coming from the office right now." }, drill: { jp: "वह अभी घर पर नहीं है", en: "He is not at home right now" }, hint: "A-BHII is अब with an emphatic ही fused on, and Hindi feels it as its own word: अब is 'now', अभी is 'right now' or 'just now'. अभी तक is 'up to now' and अभी नहीं is 'not yet'." },
        { id: "hi-u30l3-aksar", type: "vocab", front: "अक्सर", reading: "aksar", meaning: "often", accept: ["frequently", "usually", "most of the time"], example: { jp: "मैं अक्सर शाम को सैर करता हूँ।", en: "I often take a stroll in the evening." }, drill: { jp: "वह अक्सर देर से आता है", en: "He often comes late" }, hint: "AK-SAR goes before the verb rather than at the end: मैं अक्सर जाता हूँ. Arabic, literally 'the greater part'. ⚠️ Read it against अफ़सर afsar, an officer — one letter, two very different words." },
        { id: "hi-u30l3-kabhii", type: "vocab", front: "कभी", reading: "kabhii", meaning: "ever", accept: ["at any time", "sometimes", "once in a while"], example: { jp: "वह कभी हमारे घर नहीं आता।", en: "He never comes to our house." }, drill: { jp: "मैं यहाँ कभी नहीं रहता", en: "I never stay here" }, hint: "KA-BHII is the indefinite partner of कब, exactly as कहीं is of कहाँ: कब? asks when, कभी means 'at some time or other'. कभी नहीं is never, and कभी-कभी is sometimes." },
      ],
    },
    {
      id: "hi-u30l4",
      unit: 30,
      lesson: 4,
      title: "Beginnings, endings and good wishes",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Mark an occasion in Hindi — say when something starts, congratulate someone, give a gift, and say you are glad of the chance.",
      items: [
        { id: "hi-u30l4-shuruu", type: "vocab", front: "शुरू", reading: "shuruu", meaning: "a beginning", accept: ["the start", "commencement", "the outset"], example: { jp: "कक्षा नौ बजे शुरू होती है।", en: "The class begins at nine o'clock." }, drill: { jp: "यह काम अभी शुरू होता है", en: "This work begins right now" }, hint: "SHU-RUU, MASCULINE, and its ending never changes. शुरू करना is to begin something, शुरू होना is for it to begin by itself. शुरू में means 'at first'. अंत is its opposite." },
        { id: "hi-u30l4-badhaaii", type: "vocab", front: "बधाई", reading: "badhaaii", meaning: "congratulations", accept: ["good wishes on an occasion", "felicitations"], example: { jp: "आपको जन्मदिन की बधाई।", en: "Congratulations to you on your birthday." }, drill: { jp: "मैं आपको बधाई देता हूँ", en: "I offer you congratulations" }, hint: "BA-DHAA-II, FEMININE. बधाई देना is to congratulate, and बधाई हो! is what you actually shout. Read it against भाई bhaaii, brother — the ध in the middle is the whole difference." },
        { id: "hi-u30l4-duaa", type: "vocab", front: "दुआ", reading: "duaa", meaning: "a blessing", accept: ["a prayer for someone", "good wishes said aloud"], example: { jp: "माँ की दुआ हमेशा साथ रहती है।", en: "A mother's blessing is always with you." }, drill: { jp: "आपकी दुआ मेरे साथ है", en: "Your blessing is with me" }, hint: "DU-AA, FEMININE, plural दुआएँ. It is a blessing you ask FOR someone: दुआ देना is to bless, दुआ करना to pray for. आशीर्वाद is its Sanskrit twin." },
        { id: "hi-u30l4-tohfaa", type: "vocab", front: "तोहफ़ा", reading: "tohfaa", meaning: "a gift", accept: ["a present", "something given"], example: { jp: "यह तोहफ़ा मेरी बहन के लिए है।", en: "This gift is for my sister." }, drill: { jp: "यह तोहफ़ा बहुत महँगा है", en: "This gift is very expensive" }, hint: "TOH-FAA, MASCULINE, plural तोहफ़े, with the Persian फ़. उपहार is its Sanskrit twin and what a formal invitation prints. गिफ़्ट is what people mostly say now." },
        { id: "hi-u30l4-khushii", type: "vocab", front: "खुशी", reading: "khushii", meaning: "happiness", accept: ["gladness", "joy", "pleasure at something"], example: { jp: "यह खबर सुनकर मुझे बहुत खुशी है।", en: "Hearing this news I am very glad." }, drill: { jp: "मुझे इस काम से खुशी है", en: "This work makes me glad" }, hint: "KHU-SHII, FEMININE, built on खुश, happy. The frame is मुझे खुशी है, 'there is happiness to me'. खुशी से means gladly, and the plural खुशियाँ means good times." },
        { id: "hi-u30l4-maukaa", type: "vocab", front: "मौका", reading: "maukaa", meaning: "an opportunity", accept: ["a chance", "the right moment", "an opening"], example: { jp: "मुझे हिंदी बोलने का मौका कम मिलता है।", en: "I get little opportunity to speak Hindi." }, drill: { jp: "यह बहुत अच्छा मौका है", en: "This is a very good opportunity" }, hint: "MAU-KAA, MASCULINE, plural मौके. मौका मिलना is to get a chance; मौके पर means both 'at the right moment' and 'on the spot'. Arabic, from a root meaning a place." },
      ],
    },
  ],
};
