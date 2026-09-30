// HI Unit 32 — क्या मुमकिन है ("What is possible") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 1. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 THIS IS WHERE सकना IS CLOSED, AND IT IS CLOSED WITH NO FRONT. unit1.js §5
// proved the verb can never be one: it only ever follows another verb's stem
// (कर सकता हूँ, जा सकते हैं), so no natural Hindi sentence of any length contains
// the bare string सकना, so it can carry no legal `drill` under RUNBOOK §4 — and a
// 3rd-person exception to buy it a front is forbidden by §5 and unspent in the
// whole language. So ABILITY IS TAUGHT AS A PARADIGM IN THE HINTS AND EXAMPLES,
// exactly the way §6 handles का/के/की/को, whose fronts u3's mātrā glyph cards
// already own. Every card in lesson 1 carries a सकना sentence; the hints walk the
// four forms; the learner meets the construction twenty-four times in this unit
// and is never asked to type सकना, because there is nothing to type.
//     सकता हूँ  (m, I)      सकती हूँ  (f, I)
//     सकते हैं  (m.pl/आप)   सकती हैं  (f, polite)
// THE STEM NEVER CHANGES: कर सकता, जा सकती, पढ़ सकते — सकना takes all the endings
// and the main verb stays bare. That is the one thing a learner gets wrong.
// ⚠️ AND THE NEGATIVE MOVES: मैं नहीं कर सकता, not मैं कर नहीं सकता.
//
// ⚠️ चाहिए IS USED AND NOT CARDED, AND THAT IS DELIBERATE RATHER THAN AN OVERSIGHT.
// It is a form of चाहना (u12l4) — `scripts/scope-hi.mjs` already generates it from
// that front through the -िए rule — so carding it is the बड़ा/बड़ी defect §6 bans:
// one lexeme, two mastery tracks. Obligation is therefore carded as NOUNS (फ़र्ज़,
// ज़िम्मेदारी, हक, नियम) with चाहिए shown in the examples and explained in the
// hints. ⚠️ AND CARDING IT WOULD HAVE BROKEN SCOPE BACKWARDS: unit31.js §A6's
// precedence rule means a front is licensed by its OWN unit, so a चाहिए card at
// u32 would have retro-flagged every earlier sentence that uses it.
//
// WHY THIS SLOT KEPT ITS THEME (unit31.js §A8). The scaffold called it "Feelings
// and states" and u27 मन और स्वभाव already owns feelings — but the probe found the
// ABSTRACT/REASONING field at **1 of 16** (only सलाह, u30): no word for a method,
// an effect, a result, a difference, an example, an aim, a duty, a right, or
// permission. Possibility and reasoning are the same conversational move — what
// can be done, what may be done, what follows from it — so they share the unit.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   मुमकिन, नामुमकिन, काबिल, मजबूर, सफल and मना are INVARIANT — they never take
//   -ी for a feminine subject. That is the Perso-Arabic and Sanskrit adjective
//   class, and it is a relief after बड़ा/बड़ी.
//   हिम्मत, इजाज़त, आज़ादी, सज़ा, ज़िम्मेदारी, तैयारी are FEMININE.
//   हुनर, नियम, कसूर, फ़र्ज़, हक, मकसद, असर are MASCULINE — हक and असर despite
//   looking like nothing in particular, which is §4's consonant-final warning.
//   तरीका and नतीजा are MASCULINE -ा, regular.
//
// RETROFLEX/DENTAL: no new pair, checked against all 744 readings. नतीजा natiijaa,
// तैयारी taiyaarii and मकसद maksad are all DENTAL and have no retroflex counterpart
// anywhere in the corpus, so §1(b)'s doubling hatch fires nowhere new.
// ⚠️ NO क़/ख़/ग़, per unit31.js §A4: काबिल, मकसद, फ़र्क, हक are written with plain
// क, as the whole language does.
// ─────────────────────────────────────────────────────────────────────────────
// FREE — the ability auxiliary's forms. Closed-class grammar, met in every lesson
// of this unit and never produced alone; the same licence का/के/की/को hold.
// ─────────────────────────────────────────────────────────────────────────────
// FREE: सकता | सकती | सकते | सके | सकें | इसमें
export const HI_UNIT32 = {
  id: "hi-u32",
  lang: "hi",
  title: "क्या मुमकिन है",
  order: 32,
  stage: "a2",
  lessons: [
    {
      id: "hi-u32l1",
      unit: 32,
      lesson: 1,
      title: "Say what you can and cannot do",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say that you can or cannot do something, using a bare verb stem plus सकता / सकती / सकते, and name a skill you have.",
      items: [
        { id: "hi-u32l1-mumkin", type: "vocab", front: "मुमकिन", reading: "mumkin", meaning: "possible", accept: ["doable", "can be done", "feasible"], example: { jp: "यह काम आज मुमकिन नहीं है, पर कल हम कर सकते हैं।", en: "This job is not possible today, but we can do it tomorrow." }, drill: { jp: "आज यह काम मुमकिन नहीं है", en: "Today this job is not possible" }, hint: "MUM-KIN, INVARIANT — never मुमकिनी, whatever the subject's gender. And look at the example: कर सकते हैं. The main verb drops to its bare stem (कर, not करना) and सकना takes all the endings." },
        { id: "hi-u32l1-naamumkin", type: "vocab", front: "नामुमकिन", reading: "naamumkin", meaning: "impossible", accept: ["not possible", "out of the question"], example: { jp: "एक दिन में हिंदी सीखना नामुमकिन है।", en: "Learning Hindi in one day is impossible." }, drill: { jp: "यह काम नामुमकिन नहीं है", en: "This job is not impossible" }, hint: "NAA-MUM-KIN — मुमकिन with ना- on the front, the Persian negative prefix. Also invariant. Hindi has a second way to say it: हो नहीं सकता, it cannot happen." },
        { id: "hi-u32l1-hunar", type: "vocab", front: "हुनर", reading: "hunar", meaning: "a skill", accept: ["a craft", "a knack", "an ability"], example: { jp: "अच्छा खाना बनाना एक बड़ा हुनर है।", en: "Cooking good food is a great skill." }, drill: { jp: "उसके पास यह हुनर है", en: "He has this skill" }, hint: "HU-NAR, MASCULINE. A hands-on skill — cooking, sewing, fixing — not book knowledge. The natural way to say someone HAS one is उसके पास हुनर है." },
        { id: "hi-u32l1-kaabil", type: "vocab", front: "काबिल", reading: "kaabil", meaning: "capable", accept: ["able", "competent", "up to it"], example: { jp: "वह इस काम के काबिल है और इसे कर सकती है।", en: "She is capable of this job and can do it." }, drill: { jp: "मेरा भाई इस काम के काबिल है", en: "My brother is capable of this job" }, hint: "KAA-BIL, invariant, and written with PLAIN क — unit 1 §7 explains why Hindi does not use क़ here. The pattern is X के काबिल, capable OF X. Note कर सकती है for a woman: सकना takes the -ी, the stem does not." },
        { id: "hi-u32l1-himmat", type: "vocab", front: "हिम्मत", reading: "himmat", meaning: "courage", accept: ["nerve", "guts", "the nerve to do something"], example: { jp: "उसने सब के सामने सच बोलने की हिम्मत की।", en: "He had the courage to tell the truth in front of everyone." }, drill: { jp: "उसमें बहुत हिम्मत है", en: "There is a lot of courage in him" }, hint: "HIM-MAT, FEMININE, with the doubled म of §1's gemination. हिम्मत करना is to dare to do something. बहादुर (u27) is what a person IS; हिम्मत is what a moment takes." },
        { id: "hi-u32l1-anubhav", type: "vocab", front: "अनुभव", reading: "anubhav", meaning: "experience", accept: ["having done it before", "know-how from doing"], example: { jp: "इस काम में मेरा अनुभव कम है, पर मैं सीख सकता हूँ।", en: "My experience in this work is small, but I can learn." }, drill: { jp: "उसका अनुभव बहुत ज़्यादा है", en: "He has a great deal of experience" }, hint: "A-NU-BHAV, MASCULINE, Sanskrit. Years of having done a thing — where अभ्यास (u28) is the repeating you do to get better at it. Both are uncountable: no अनुभवें." },
      ],
    },
    {
      id: "hi-u32l2",
      unit: 32,
      lesson: 2,
      title: "Say what you may do, and what is not allowed",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Ask for permission, say that something is not allowed, and name the rule behind it.",
      items: [
        { id: "hi-u32l2-ijaazat", type: "vocab", front: "इजाज़त", reading: "ijaazat", meaning: "permission", accept: ["leave to do something", "the go-ahead"], example: { jp: "क्या मैं अंदर आ सकता हूँ? माँ ने इजाज़त दी।", en: "May I come in? Mum gave permission." }, drill: { jp: "मुझे अंदर आने की इजाज़त है", en: "I have permission to come in" }, hint: "I-JAA-ZAT, FEMININE. इजाज़त देना is to give it, इजाज़त लेना to ask for it. And क्या मैं … सकता हूँ? is how Hindi asks may-I — the same सकना, used as a question." },
        { id: "hi-u32l2-manaa", type: "vocab", front: "मना", reading: "manaa", meaning: "not allowed", accept: ["forbidden", "prohibited", "banned"], example: { jp: "यहाँ गाड़ी रोकना मना है।", en: "Stopping a car here is not allowed." }, drill: { jp: "इस कमरे में खाना मना है", en: "Eating in this room is not allowed" }, hint: "MA-NAA, invariant, and read it against मन man, the mind (u1l2) — one मātrā apart. The pattern is always INFINITIVE + मना है: रोकना मना है, खाना मना है. It is the sign on every wall in India." },
        { id: "hi-u32l2-niyam", type: "vocab", front: "नियम", reading: "niyam", meaning: "a rule", accept: ["a regulation", "a principle"], example: { jp: "हर घर के अपने नियम होते हैं।", en: "Every household has its own rules." }, drill: { jp: "यह नियम सब के लिए है", en: "This rule is for everyone" }, hint: "NI-YAM, MASCULINE, Sanskrit, plural नियम (unchanged). A नियम is a standing rule; a सलाह (u30) is advice you can ignore." },
        { id: "hi-u32l2-aazaadii", type: "vocab", front: "आज़ादी", reading: "aazaadii", meaning: "freedom", accept: ["liberty", "being free to do something"], example: { jp: "बच्चों को बाहर खेलने की आज़ादी चाहिए।", en: "Children need the freedom to play outside." }, drill: { jp: "मुझे यह काम करने की आज़ादी है", en: "I have the freedom to do this work" }, hint: "AA-ZAA-DII, FEMININE, with the ज़ of unit 4. Note चाहिए in the example — it means 'is needed' or 'ought to be had', and it never changes its shape. It belongs to चाहना, u12." },
        { id: "hi-u32l2-sazaa", type: "vocab", front: "सज़ा", reading: "sazaa", meaning: "a punishment", accept: ["a penalty", "being punished"], example: { jp: "उस गलती की सज़ा बहुत बड़ी थी।", en: "The punishment for that mistake was very big." }, drill: { jp: "इस गलती की सज़ा कम है", en: "The punishment for this mistake is small" }, hint: "SA-ZAA, FEMININE despite the -ा — one of §4's real exceptions, like दवा. सज़ा देना is to punish, सज़ा मिलना is to be punished." },
        { id: "hi-u32l2-kasuur", type: "vocab", front: "कसूर", reading: "kasuur", meaning: "the blame", accept: ["the fault", "whose fault it is", "wrongdoing"], example: { jp: "इस बात में मेरा कोई कसूर नहीं है।", en: "None of this is my fault." }, drill: { jp: "यह मेरा कसूर नहीं था", en: "This was not my fault" }, hint: "KA-SUUR, MASCULINE, plain क again. गलती (u22) is a mistake you made; कसूर is the blame that attaches to it. मेरा कसूर नहीं is the everyday 'not my fault'." },
      ],
    },
    {
      id: "hi-u32l3",
      unit: 32,
      lesson: 3,
      title: "Say what you have to do, and whose job it is",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name a duty, a right and a purpose, and say you had no choice in the matter.",
      items: [
        { id: "hi-u32l3-farz", type: "vocab", front: "फ़र्ज़", reading: "farz", meaning: "a duty", accept: ["an obligation", "what one must do"], example: { jp: "अपना काम ठीक करना हमारा फ़र्ज़ है।", en: "Doing our work properly is our duty." }, drill: { jp: "यह काम मेरा फ़र्ज़ है", en: "This work is my duty" }, hint: "FARZ, MASCULINE, one syllable, with both the फ़ and the ज़ of unit 4. A duty you owe someone — to a parent, to a job. काम is the task; फ़र्ज़ is why you cannot walk away from it." },
        { id: "hi-u32l3-zimmedaarii", type: "vocab", front: "ज़िम्मेदारी", reading: "zimmedaarii", meaning: "a responsibility", accept: ["being in charge of something", "accountability"], example: { jp: "घर का यह काम उसकी ज़िम्मेदारी है।", en: "This household job is her responsibility." }, drill: { jp: "यह बहुत बड़ी ज़िम्मेदारी है", en: "This is a very big responsibility" }, hint: "ZIM-ME-DAA-RII, FEMININE, plural ज़िम्मेदारियाँ. फ़र्ज़ is the duty itself; ज़िम्मेदारी is the job being YOURS to answer for. The doubled म is §1's gemination." },
        { id: "hi-u32l3-hak", type: "vocab", front: "हक", reading: "hak", meaning: "an entitlement", accept: ["a rightful claim", "what someone is owed"], example: { jp: "हर बच्चे को पढ़ने का हक है।", en: "Every child is entitled to study." }, drill: { jp: "मुझे यह पूछने का हक है", en: "I am entitled to ask this" }, hint: "HAK, MASCULINE, one syllable, plain क. The pattern is X का हक — the entitlement TO x. Do not confuse it with दाएँ (u14), the right-hand side; Hindi keeps those two completely separate words." },
        { id: "hi-u32l3-majbuur", type: "vocab", front: "मजबूर", reading: "majbuur", meaning: "left with no choice", accept: ["forced", "compelled", "helpless"], example: { jp: "बारिश ने हमें घर में रुकने पर मजबूर किया।", en: "The rain left us with no choice but to stay home." }, drill: { jp: "वह इस काम के लिए मजबूर है", en: "He is forced into this work" }, hint: "MAJ-BUUR, invariant. मजबूर करना is to force someone, मजबूर होना is to have no way out. It is the exact opposite of this unit's आज़ादी." },
        { id: "hi-u32l3-maksad", type: "vocab", front: "मकसद", reading: "maksad", meaning: "the aim", accept: ["the purpose", "the point of it", "the goal"], example: { jp: "मेरा मकसद हिंदी सीखना है।", en: "My aim is to learn Hindi." }, drill: { jp: "उसका मकसद बहुत अच्छा है", en: "His aim is a very good one" }, hint: "MAK-SAD, MASCULINE, plain क. मतलब (u8) is what a word means; मकसद is what a person is trying to do. Both are masculine and both are common — keep them apart." },
        { id: "hi-u32l3-taiyaarii", type: "vocab", front: "तैयारी", reading: "taiyaarii", meaning: "getting ready", accept: ["preparation", "the run-up", "getting set"], example: { jp: "वह परीक्षा की तैयारी कर रहा है।", en: "He is getting ready for the exam." }, drill: { jp: "परीक्षा की तैयारी मुश्किल है", en: "Getting ready for the exam is difficult" }, hint: "TAI-YAA-RII, FEMININE — the noun of तैयार, ready (u12). And note कर रहा है: stem + रहा है is the present continuous, another place the verb goes bare." },
      ],
    },
    {
      id: "hi-u32l4",
      unit: 32,
      lesson: 4,
      title: "Say how it works and how it turned out",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Explain the method, the effect and the result of something, and point out a difference with an example.",
      items: [
        { id: "hi-u32l4-tariikaa", type: "vocab", front: "तरीका", reading: "tariikaa", meaning: "a method", accept: ["a way of doing something", "an approach", "a technique"], example: { jp: "हिंदी सीखने का यह तरीका बहुत अच्छा है।", en: "This method of learning Hindi is very good." }, drill: { jp: "यह तरीका बहुत आसान है", en: "This method is very easy" }, hint: "TA-RII-KAA, MASCULINE, plural तरीके. रास्ता (u14) is a way you walk down; तरीका is a way you do something. Hindi keeps them separate and so must you." },
        { id: "hi-u32l4-asar", type: "vocab", front: "असर", reading: "asar", meaning: "an effect", accept: ["an impact", "influence", "the effect something has"], example: { jp: "इस दवा का असर जल्दी होता है।", en: "This medicine takes effect quickly." }, drill: { jp: "उस बात का असर बड़ा था", en: "The effect of that remark was big" }, hint: "A-SAR, MASCULINE despite ending in a consonant — §4's warning again. असर होना is to take effect; असर पड़ना is to have an impact on something." },
        { id: "hi-u32l4-natiijaa", type: "vocab", front: "नतीजा", reading: "natiijaa", meaning: "a result", accept: ["an outcome", "how it turned out", "the upshot"], example: { jp: "इस काम का नतीजा अच्छा निकला।", en: "The result of this work turned out well." }, drill: { jp: "परीक्षा का नतीजा कल आया", en: "The exam result came yesterday" }, hint: "NA-TII-JAA, MASCULINE, plural नतीजे, both त and ज dental-soft. असर is what a thing does while it acts; नतीजा is where everything ended up." },
        { id: "hi-u32l4-fark", type: "vocab", front: "फ़र्क", reading: "fark", meaning: "a difference", accept: ["a distinction", "the gap between two things"], example: { jp: "इन दोनों किताबों में बहुत फ़र्क है।", en: "There is a big difference between these two books." }, drill: { jp: "इन दोनों में फ़र्क नहीं है", en: "There is no difference between these two" }, hint: "FARK, MASCULINE, one syllable, फ़ from unit 4 and plain क at the end. फ़र्क होना is to differ; कोई फ़र्क नहीं पड़ता is 'it makes no difference', which you will hear constantly." },
        { id: "hi-u32l4-udaaharan", type: "vocab", front: "उदाहरण", reading: "udaaharan", meaning: "an example", accept: ["an instance", "a case in point"], example: { jp: "उसने अपनी बात के लिए एक अच्छा उदाहरण दिया।", en: "She gave a good example for her point." }, drill: { jp: "यह एक अच्छा उदाहरण है", en: "This is a good example" }, hint: "U-DAA-HA-RAN, MASCULINE, Sanskrit, and the last letter is the RETROFLEX ण — tongue curled back, though it sounds close enough to न that no reading can show it. उदाहरण देना is to give one." },
        { id: "hi-u32l4-saphal", type: "vocab", front: "सफल", reading: "saphal", meaning: "successful", accept: ["having succeeded", "it worked out"], example: { jp: "बहुत कोशिश के बाद वह सफल हुआ।", en: "After a lot of trying he was successful." }, drill: { jp: "वह अपने काम में सफल है", en: "He is successful in his work" }, hint: "SA-PHAL, invariant, Sanskrit — literally 'with fruit', from फल (u4). सफल होना is to succeed. And हुआ in the example is होना's past: one of the six irregular pasts this band teaches." },
      ],
    },
  ],
};
