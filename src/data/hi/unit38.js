// HI Unit 38 — पहले ऐसा होता था ("That is how it used to be") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 1. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT, AND IT CARRIES A2's SECOND TENSE. The scaffold called this
// "Time and adverbs". TIME itself is nearly spent — the probe found it **12 of
// 16**, because u11 गिनती और समय owns the clock and u17 दिन और महीने owns the
// calendar. But DEGREE AND MANNER adverbs were **5 of 16** — धीरे, तेज़, अक्सर and
// शायद, plus बिलकुल (u22l1), which the first probe missed and the reading check
// later caught (see the spelling-variant note below). And the -ता था IMPERFECT was
// on unit1.js §6's deferred list with no A2 slot naming it. Those are one topic: "how often, how completely, and how it used
// to be." So the slot keeps its number and changes its job.
//
// THE IMPERFECT, WHICH THIS UNIT TEACHES IN ITS HINTS AND EXAMPLES:
//     -ता था / -ती थी / -ते थे  — what USED TO happen, habitually, in the past.
//       बचपन में हम रोज़ खेलते थे.   We used to play every day as children.
//       दादा हमें किस्सा कहते थे.    Grandad used to tell us a story.
// It is built from two things the learner already has: the habitual -ता/-ती/-ते
// from u12, and the past copula था/थी/थे/थीं from u24l1. Nothing new to memorise —
// which is exactly why A1 could defer it and A2 can close it cheaply.
// ⚠️ AND THE CONTRAST THAT MAKES IT WORTH A UNIT: u31's perfective says a thing
// HAPPENED ONCE (उसने कहा, he said); the imperfect says it USED TO HAPPEN (वह कहता
// था, he used to say). Hindi marks that difference and English mostly does not, so
// a learner will reach for the perfective for both unless a unit stops them.
// ⚠️ WHAT IS SHOWN AND NOT DRILLED: the -ता + रहना pattern for "kept on doing",
// twice, in लगातार's example (होती रही) and its drill (करता रहा). It is the sister
// of -ता था and it costs nothing to meet here. The full PAST CONTINUOUS
// (वह काम कर रहा था) is NOT in this unit — the learner has कर रहा है from u32l3 and
// swapping है for था is a one-line note for whoever wants it, not a lesson.
//
// ⚠️ ONE GLOSS AVOIDS A COLLISION: दोबारा is "a second time", NOT "again" — फिर
// (u7l2) is already "again".
// ⚠️ AND TWO REDUPLICATIONS WERE DELIBERATELY NOT CARDED: धीरे-धीरे (gradually) and
// कभी-कभी (sometimes). Both are real adverbs and both are reduplications of a
// TAUGHT front (धीरे u8l3, कभी u30l3), which puts them close to the बड़ा/बड़ी defect
// §6 bans — one lexeme, two mastery tracks. They are also a mechanical hazard:
// `scripts/scope-hi.mjs` tokenises on `[^\p{L}\p{M}-]+`, so the hyphen does NOT
// split them and धीरे-धीरे is one unknown token in any sentence that uses it. They
// are explained in हरगिज़'s and ज़्यादातर's hints instead.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   पीढ़ी, तस्वीर, परंपरा are FEMININE — तस्वीर ends in a consonant, §4's
//   unpredictable class.
//   रिवाज़, किस्सा, हाल are MASCULINE, and हाल is another consonant-final one.
//   लगभग, ज़रूर, बेशक, सचमुच, हरगिज़, अचानक, फ़ौरन, दोबारा, ज़्यादातर, लगातार,
//   आजकल, आखिर, खासकर are ADVERBS and never change shape at all — the one part of
//   Hindi with no agreement to learn, which is most of this unit's point.
//   यादगार and मौजूद are INVARIANT adjectives.
//   ⚠️ पक्का is the ONE word in this unit that DOES agree — पक्का सौदा, पक्की बात —
//   and it sits in lesson 1 next to five adverbs on purpose, so the contrast is
//   visible rather than asserted.
//
// RETROFLEX/DENTAL: no new pair, checked against all 912 readings. पीढ़ी piirhii
// uses §1(c)'s ढ़ → rh; किस्सा kissaa and पक्का pakkaa carry §1's GEMINATION and not
// §1(b)'s hatch; बीतना biitnaa, लगातार lagaataar and सचमुच sachmuch are DENTAL and
// have no retroflex counterpart in the corpus. Nothing doubles.
//
// ⚠️ AND THE SECOND SPELLING-VARIANT CATCH OF THIS BLOCK, after u36's बरतन/बर्तन.
// l1 opened with बिल्कुल in draft and the front check said FREE, because the corpus
// spells it बिलकुल — WITHOUT the conjunct — at u22l1. Same word, different string,
// same reading `bilkul`, and only the 912-distinct-readings check saw it. पक्का took
// its place. unit36.js's warning stands: check a candidate by its READING.
// ⚠️ NO क़/ख़/ग़ per unit31.js §A4 — आखिर and खासकर are written with plain ख, and
// हरगिज़ with plain ग.
export const HI_UNIT38 = {
  id: "hi-u38",
  lang: "hi",
  title: "पहले ऐसा होता था",
  order: 38,
  stage: "a2",
  lessons: [
    {
      id: "hi-u38l1",
      unit: 38,
      lesson: 1,
      title: "How completely, how certainly",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Strengthen or soften what you say with five adverbs of degree plus one adjective, and deny something flatly.",
      items: [
        { id: "hi-u38l1-pakkaa", type: "vocab", front: "पक्का", reading: "pakkaa", meaning: "definite", accept: ["settled", "firm", "for certain", "ripe"], example: { jp: "यह सौदा अब पक्का है।", en: "This deal is definite now." }, drill: { jp: "मेरा यह फ़ैसला पक्का है", en: "This decision of mine is firm" }, hint: "PAK-KAA, doubled क (§1's gemination), and unlike the adverbs beside it this one AGREES: पक्का सौदा, पक्की बात. Literally 'ripe' or 'cooked', so it means settled and permanent — a पक्का घर is a brick house and a पक्का दोस्त a firm friend. On its own, पक्का! is 'definitely'. ⚠️ बिलकुल, absolutely, is ALREADY TAUGHT at u22l1 — spelled WITHOUT the conjunct; this card was बिल्कुल in draft until the reading check refused it." },
        { id: "hi-u38l1-lagbhag", type: "vocab", front: "लगभग", reading: "lagbhag", meaning: "roughly", accept: ["approximately", "about", "nearly"], example: { jp: "गाँव से शहर लगभग दो घंटे दूर है।", en: "The city is roughly two hours away from the village." }, drill: { jp: "यहाँ लगभग सौ लोग थे", en: "There were roughly a hundred people here" }, hint: "LAG-BHAG, adverb, aspirated भ in the middle. Always goes in front of the number it softens. करीब means the same thing and is more spoken; लगभग is the one you will read." },
        { id: "hi-u38l1-zaruur", type: "vocab", front: "ज़रूर", reading: "zaruur", meaning: "definitely", accept: ["certainly", "for sure", "without fail"], example: { jp: "बचपन में हम रोज़ ज़रूर खेलते थे।", en: "As children we definitely used to play every day." }, drill: { jp: "मैं यह काम ज़रूर करता हूँ", en: "I definitely do this job" }, hint: "ZA-RUUR, adverb, with the ज़ of unit 4. ⚠️ Not ज़रूरी (u19), which is the ADJECTIVE 'essential' — ज़रूर says how sure you are, ज़रूरी says how necessary the thing is. And look at खेलते थे: that is the IMPERFECT, 'used to play'." },
        { id: "hi-u38l1-beshak", type: "vocab", front: "बेशक", reading: "beshak", meaning: "no doubt", accept: ["undoubtedly", "granted", "admittedly"], example: { jp: "वह बेशक अच्छा कारीगर है।", en: "He is no doubt a good craftsman." }, drill: { jp: "यह किताब बेशक पुरानी है", en: "This book is admittedly old" }, hint: "BE-SHAK, adverb — बे- is the Persian 'without' and शक (u30) is doubt, so literally 'without doubt'. It often concedes a point before you object to it: बेशक … लेकिन." },
        { id: "hi-u38l1-sachmuch", type: "vocab", front: "सचमुच", reading: "sachmuch", meaning: "really", accept: ["truly", "genuinely", "actually"], example: { jp: "क्या तुम सचमुच वहाँ गए थे?", en: "Did you really go there?" }, drill: { jp: "यह सचमुच बहुत मुश्किल है", en: "This really is very difficult" }, hint: "SACH-MUCH, adverb, built on सच (u2), the truth. Used exactly as English uses 'really' — for emphasis, and as a one-word question of disbelief: सचमुच?" },
        { id: "hi-u38l1-hargiz", type: "vocab", front: "हरगिज़", reading: "hargiz", meaning: "not at all", accept: ["under no circumstances", "on no account", "never ever"], example: { jp: "मैं वहाँ हरगिज़ नहीं जाता।", en: "I do not go there at all." }, drill: { jp: "यह काम हरगिज़ मत करो", en: "Do not do this on any account" }, hint: "HAR-GIZ, adverb, plain ग, and it ONLY works with a negative — हरगिज़ नहीं or हरगिज़ मत. It is the strongest 'no' in ordinary Hindi. (Hindi also reduplicates for emphasis — कभी-कभी, धीरे-धीरे — but those are just the u8 and u30 words said twice, not new ones.)" },
      ],
    },
    {
      id: "hi-u38l2",
      unit: 38,
      lesson: 2,
      title: "How often, how suddenly",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say when and how often something happens — suddenly, at once, mostly, or all the time.",
      items: [
        { id: "hi-u38l2-achaanak", type: "vocab", front: "अचानक", reading: "achaanak", meaning: "suddenly", accept: ["all at once", "out of the blue", "unexpectedly"], example: { jp: "अचानक बारिश शुरू हुई।", en: "It suddenly started to rain." }, drill: { jp: "वह अचानक घर आया", en: "He suddenly came home" }, hint: "A-CHAA-NAK, adverb, plain क. It usually sits at the FRONT of the clause, before the thing that surprised you. अचानक से means the same and adds nothing." },
        { id: "hi-u38l2-fauran", type: "vocab", front: "फ़ौरन", reading: "fauran", meaning: "at once", accept: ["immediately", "straight away", "right now"], example: { jp: "डॉक्टर ने फ़ौरन दवा दी।", en: "The doctor gave medicine at once." }, drill: { jp: "तुम फ़ौरन यहाँ आओ", en: "Come here at once" }, hint: "FAU-RAN, adverb, with the फ़ of unit 4 and the au of और. अभी (u30) is 'right now' as a time; फ़ौरन is 'without delay' as a manner, which is why a doctor uses it and a clock does not." },
        { id: "hi-u38l2-dobaaraa", type: "vocab", front: "दोबारा", reading: "dobaaraa", meaning: "a second time", accept: ["once more", "over again", "afresh"], example: { jp: "उसने वह किताब दोबारा पढ़ी।", en: "She read that book a second time." }, drill: { jp: "मुझे यह काम दोबारा करना है", en: "I have to do this job over again" }, hint: "DO-BAA-RAA, adverb, and you can see it: दो (u3) two plus बार (u11) a time. ⚠️ फिर (u7) is already 'again' — फिर is any repeat, दोबारा is specifically the SECOND go at the same thing." },
        { id: "hi-u38l2-zyaadaatar", type: "vocab", front: "ज़्यादातर", reading: "zyaadaatar", meaning: "mostly", accept: ["for the most part", "most of them", "usually"], example: { jp: "गाँव के ज़्यादातर लोग किसान हैं।", en: "Most of the village's people are farmers." }, drill: { jp: "ज़्यादातर बच्चे स्कूल जाते हैं", en: "Most children go to school" }, hint: "ZYAA-DAA-TAR — ज़्यादा (u6) plus the comparative -तर, so literally 'more-ish'. It works on nouns (ज़्यादातर लोग, most people) and on verbs (ज़्यादातर मैं घर रहता हूँ, mostly I stay home). अक्सर (u30) is 'often', which is about frequency rather than proportion." },
        { id: "hi-u38l2-lagaataar", type: "vocab", front: "लगातार", reading: "lagaataar", meaning: "continuously", accept: ["non-stop", "on end", "without a break"], example: { jp: "तीन दिन लगातार बारिश होती रही।", en: "It rained continuously for three days." }, drill: { jp: "वह लगातार काम करता रहा", en: "He kept working non-stop" }, hint: "LA-GAA-TAAR, adverb, from लगना (u12). Note करता रहा — the -ता plus रहना pattern for 'kept on doing'. It is the sister of this unit's करता था." },
        { id: "hi-u38l2-aajkal", type: "vocab", front: "आजकल", reading: "aajkal", meaning: "these days", accept: ["nowadays", "currently", "at the moment"], example: { jp: "आजकल शहर में बहुत भीड़ होती है।", en: "These days there are big crowds in the city." }, drill: { jp: "आजकल मौसम ठंडा रहता है", en: "The weather stays cold these days" }, hint: "AAJ-KAL, adverb — आज (u16) today plus कल (u2) tomorrow-or-yesterday, so 'today and the day either side of it'. It is the exact counterweight to this unit's imperfect: आजकल for now, -ता था for then." },
      ],
    },
    {
      id: "hi-u38l3",
      unit: 38,
      lesson: 3,
      title: "The way it used to be",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say what used to happen habitually in the past, using -ता था, and talk about customs handed down.",
      items: [
        { id: "hi-u38l3-guzarnaa", type: "vocab", front: "गुज़रना", reading: "guzarnaa", meaning: "to go by", accept: ["to pass", "to elapse", "to get through"], example: { jp: "बचपन का समय बहुत जल्दी गुज़रा।", en: "Childhood went by very fast." }, drill: { jp: "यहाँ समय गुज़रना मुश्किल है", en: "Passing the time here is difficult" }, hint: "GU-ZAR-NAA, with the ज़ of unit 4. Intransitive — time गुज़रना does by itself, so no ने on anything. It also covers passing THROUGH a place: वह गली से गुज़रा." },
        { id: "hi-u38l3-biitnaa", type: "vocab", front: "बीतना", reading: "biitnaa", meaning: "to elapse", accept: ["to be over", "to run out", "to go past"], example: { jp: "उस घर में दस साल बीते।", en: "Ten years passed in that house." }, drill: { jp: "समय बीतना कोई नहीं रोक सकता", en: "Nobody can stop time passing" }, hint: "BIIT-NAA, DENTAL त, intransitive. Very close to गुज़रना, and the difference is small: गुज़रना is time moving, बीतना is time being USED UP. बीता समय is 'time gone by' — which is u24's title." },
        { id: "hi-u38l3-piirhii", type: "vocab", front: "पीढ़ी", reading: "piirhii", meaning: "a generation", accept: ["a generation of a family", "an age group"], example: { jp: "यह रिवाज़ हमारी पीढ़ी तक आया।", en: "This custom came down as far as our generation." }, drill: { jp: "नई पीढ़ी हिंदी कम बोलती है", en: "The new generation speaks less Hindi" }, hint: "PII-RHII, FEMININE, plural पीढ़ियाँ, and the ढ़ is §1(c)'s — read RH, not DH. नई पीढ़ी and पुरानी पीढ़ी are set phrases. Nothing to do with पीढ़ा, a low wooden stool." },
        { id: "hi-u38l3-rivaaz", type: "vocab", front: "रिवाज़", reading: "rivaaz", meaning: "a custom", accept: ["a usual practice", "the done thing", "custom"], example: { jp: "गाँव में यह पुराना रिवाज़ चलता था।", en: "This old custom used to go on in the village." }, drill: { jp: "हमारे घर में यह रिवाज़ है", en: "This is the custom in our house" }, hint: "RI-VAAZ, MASCULINE, ज़ from unit 4. And look at चलता था — the IMPERFECT: it used to go on, habitually, over years. That is -ता plus था, both of which you already had." },
        { id: "hi-u38l3-paramparaa", type: "vocab", front: "परंपरा", reading: "parampraa", meaning: "a tradition", accept: ["an inherited practice", "heritage"], example: { jp: "हमारे परिवार की परंपरा बहुत पुरानी है।", en: "Our family's tradition is very old." }, drill: { jp: "यह परंपरा आज भी चलती है", en: "This tradition continues even today" }, hint: "PA-RAM-PRAA, FEMININE, Sanskrit, and the ं before प is said as an m — §1's homorganic rule. A रिवाज़ is what people usually do; a परंपरा is what has been handed down and is meant to be kept." },
        { id: "hi-u38l3-kissaa", type: "vocab", front: "किस्सा", reading: "kissaa", meaning: "an anecdote", accept: ["a tale", "a yarn", "a story someone tells"], example: { jp: "दादा हमें रोज़ एक किस्सा कहते थे।", en: "Grandad used to tell us a story every day." }, drill: { jp: "यह किस्सा बहुत पुराना है", en: "This tale is very old" }, hint: "KIS-SAA, MASCULINE, plural किस्से, doubled स (§1's gemination). कहानी (u24) is a story with a shape — a written one; a किस्सा is the thing that happened and gets retold. कहते थे is the imperfect again." },
      ],
    },
    {
      id: "hi-u38l4",
      unit: 38,
      lesson: 4,
      title: "Telling how things stand now",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Set then against now: ask how things are, single something out, and say a day was memorable.",
      items: [
        { id: "hi-u38l4-aakhir", type: "vocab", front: "आखिर", reading: "aakhir", meaning: "in the end", accept: ["finally", "after all", "eventually"], example: { jp: "आखिर में उसने सच कहा।", en: "In the end he told the truth." }, drill: { jp: "आखिर वह काम पूरा हुआ", en: "The work was finally finished" }, hint: "AA-KHIR, plain ख per this band's rule. आखिर में is 'in the end'; आखिर on its own can also press a question — आखिर तुम क्यों गए? 'why on earth did you go?'. अंत (u5) is the end as a place in a book." },
        { id: "hi-u38l4-khaaskar", type: "vocab", front: "खासकर", reading: "khaaskar", meaning: "especially", accept: ["particularly", "above all", "in particular"], example: { jp: "मुझे फल पसंद हैं, खासकर केला।", en: "I like fruit, especially bananas." }, drill: { jp: "खासकर सर्दी में यह अच्छा है", en: "This is good especially in winter" }, hint: "KHAAS-KAR, adverb, plain ख — खास means special and -कर turns it into the adverb. It singles one thing out of a group you have just named, exactly as English does." },
        { id: "hi-u38l4-tasviir", type: "vocab", front: "तस्वीर", reading: "tasviir", meaning: "a picture", accept: ["a photo", "a photograph", "an image"], example: { jp: "दीवार पर दादा की पुरानी तस्वीर है।", en: "There is an old picture of Grandad on the wall." }, drill: { jp: "यह तस्वीर बहुत पुरानी है", en: "This picture is very old" }, hint: "TAS-VIIR, FEMININE despite the consonant ending, plural तस्वीरें, with the स्व conjunct. It covers a photo, a painting and a drawing alike. नक्शा (u29) is a map and never this." },
        { id: "hi-u38l4-haal", type: "vocab", front: "हाल", reading: "haal", meaning: "the current state", accept: ["condition", "how things are", "someone's state"], example: { jp: "आपका हाल कैसा है?", en: "How are things with you?" }, drill: { jp: "गाँव का हाल अब अच्छा है", en: "The village's condition is good now" }, hint: "HAAL, MASCULINE despite the consonant ending. क्या हाल है? is the commonest informal 'how are you' in India — more used than कैसे हैं आप. सेहत (u20) is health specifically; हाल is the state of anything." },
        { id: "hi-u38l4-yaadgaar", type: "vocab", front: "यादगार", reading: "yaadgaar", meaning: "memorable", accept: ["worth remembering", "unforgettable"], example: { jp: "वह दिन मेरे लिए यादगार था।", en: "That day was memorable for me." }, drill: { jp: "यह सफ़र बहुत यादगार रहा", en: "This journey was very memorable" }, hint: "YAAD-GAAR, INVARIANT adjective — याद (u24) memory plus the Persian -गार, as in कारीगर's -गर (u34). Never यादगारी, whatever the gender of what you are describing." },
        { id: "hi-u38l4-maujuud", type: "vocab", front: "मौजूद", reading: "maujuud", meaning: "present", accept: ["there in person", "on hand", "available"], example: { jp: "उस मीटिंग में सब लोग मौजूद थे।", en: "Everybody was present at that meeting." }, drill: { jp: "वह आज दफ़्तर में मौजूद है", en: "He is present at the office today" }, hint: "MAU-JUUD, INVARIANT. Being physically there — a person at a meeting, a thing in stock. हाज़िरी (u34) is the roll call that records it, and हाज़िर is its close cousin." },
      ],
    },
  ],
};
