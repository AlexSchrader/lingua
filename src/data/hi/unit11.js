// HI Unit 11 — गिनती और समय ("Counting and time") — A1
// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 2 (u11–u20). Authored 2026-09-28. All conventions are set in unit1.js
// §1–§11 and BIND this block; what follows is only what is new or decided here.
//
// WHAT THIS UNIT OWNS. Block 1 spent एक दो तीन चार on letter lessons and reserved
// "पाँच–सौ and the whole clock/calendar" for this slot (unit1.js, THEMES SPENT).
// So: 5–10 (l1), the round numbers a price needs (l2), the clock (l3), ordinals
// and age (l4). The CALENDAR — days, months, seasons — is u17, not here; u11 is
// the clock and u17 is the date, and neither re-teaches the other's words.
//
// ⚠️ साठ IS AUTHORED `saatth`, AS §1(b) REQUIRES. See hi-u11l2-saatth. साथ, in
// src/data/hi/unit8.js lesson 4, is DENTAL थ and keeps `saath`; साठ is RETROFLEX ठ
// and doubles.
// THE OTHER RETROFLEX/DENTAL WORDS BLOCK 2 SPENT, AND WHY NONE OF THEM DOUBLES:
// the escape hatch fires only on a COLLISION, and each of these is the only member
// of its pair in the corpus.
//     आठ aath · उठना uthnaa · बैठना baithnaa · मीठा miithaa · रोटी rotii ·
//     लौटना lautnaa · मोटा motaa · टोपी topii · जूता juutaa (dental!) ·
//     ठंडा thandaa · पेट pet · चोट chot · खट्टा khattaa · छुट्टी chhuttii ·
//     डिब्बा dibbaa · घंटा ghantaa
// MEASURED, not eyeballed: the hi corpus now carries 480 readings and 480 DISTINCT
// readings. Collapsing the doubling (tt→t, dd→d) to simulate the merge produces
// exactly five clashes — ta/tta, da/dda, tha/ttha, dha/ddha, which are block 1's
// four deliberate GLYPH pairs under §2, and saath/saatth, which is this one. So
// साठ/साथ is the only WORD pair in the language that needed the hatch. If block 3
// adds a second member of any pair above, THE RETROFLEX ONE DOUBLES — that is the
// rule, not a one-off.
//
// ─────────────────────────────────────────────────────────────────────────────
// FREE — the seven words block 2 adds to unit1.js's list. Same test: closed-class
// grammar or a proper name, met in a sentence and never asked for as production.
// ─────────────────────────────────────────────────────────────────────────────
//   • लिए — half of the compound postposition के लिए ("for"). के is already FREE
//     for exactly this reason; लिए never occurs without it and is not a word a
//     learner produces alone. §6 gives the postposition paradigm to u23.
//   • कि — the complementiser ("...that..."). ⚠️ AND DECLARING IT FIXES A REAL
//     ARTEFACT: the token कि is ALREADY in scope from u3, because कि is a u3l1
//     MĀTRĀ GLYPH card (front "कि", reading "ki"). That is the syllable का-कि-की,
//     not the conjunction — two different things that happen to be spelled alike,
//     and scope-hi.mjs cannot tell them apart. Declaring it here makes the licence
//     explicit instead of accidental.
//   • उसे | उन्हें | इसे | इन्हें — the dative/accusative obliques of यह and वह,
//     the same class unit1.js already declared for इस/इन/उस/उन. No suffix rule
//     generates them and no unit teaches them; the paradigm is u23's.
//   • मीना — a proper name, free by RUNBOOK §4. Block 1 declared करन, which is
//     masculine; feminine agreement (-ती, -ी) cannot be shown in an example
//     without a feminine subject, so block 2 adds one.
// FREE: लिए | कि | उसे | उन्हें | इसे | इन्हें | मीना
export const HI_UNIT11 = {
  id: "hi-u11",
  lang: "hi",
  title: "गिनती और समय",
  order: 11,
  stage: "a1",
  lessons: [
    {
      id: "hi-u11l1",
      unit: 11,
      lesson: 1,
      title: "Five to ten",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Count from five to ten, and say how many people or things are in a room.",
      items: [
        { id: "hi-u11l1-paanch", type: "vocab", front: "पाँच", reading: "paanch", meaning: "five", accept: ["5"], example: { jp: "इस स्कूल में पाँच शिक्षक हैं।", en: "There are five teachers in this school." }, drill: { jp: "मेरे घर में पाँच कमरे हैं", en: "There are five rooms in my house" }, hint: "PAANCH. The ँ is nasal — hum the आ through your nose, then च. Hindi numbers take no gender and no plural: पाँच लड़के and पाँच लड़कियाँ use the same पाँच." },
        { id: "hi-u11l1-chhah", type: "vocab", front: "छह", reading: "chhah", meaning: "six", accept: ["6"], example: { jp: "इस कमरे में छह आदमी हैं।", en: "There are six men in this room." }, drill: { jp: "मेरे परिवार में छह बच्चे हैं", en: "There are six children in my family" }, hint: "CHHAH — छ with its puff of air, then ह. In fast speech you will hear it worn down to chhe; the written form keeps both letters." },
        { id: "hi-u11l1-saat", type: "vocab", front: "सात", reading: "saat", meaning: "seven", accept: ["7"], example: { jp: "इस दुकान में सात कुर्सियाँ हैं।", en: "There are seven chairs in this shop." }, drill: { jp: "मैं सात नए शब्द सीखता हूँ", en: "I learn seven new words" }, hint: "SAAT, with the DENTAL त — tongue flat on the teeth, no puff. Watch it against साथ saath (with, unit 8): same first two letters, and थ adds the puff त refuses." },
        { id: "hi-u11l1-aath", type: "vocab", front: "आठ", reading: "aath", meaning: "eight", accept: ["8"], example: { jp: "इस शब्द में आठ अक्षर हैं।", en: "There are eight letters in this word." }, drill: { jp: "उस मंदिर में आठ दरवाज़े हैं", en: "There are eight doors in that temple" }, hint: "AATH, and the ठ is RETROFLEX — curl the tongue back to the roof of the mouth and let the puff out. साठ (sixty), next lesson, is written with this same ठ." },
        { id: "hi-u11l1-nau", type: "vocab", front: "नौ", reading: "nau", meaning: "nine", accept: ["9"], example: { jp: "मेरे शहर में नौ स्कूल हैं।", en: "There are nine schools in my city." }, drill: { jp: "इस गाँव में नौ मंदिर हैं", en: "There are nine temples in this village" }, hint: "NAU — औ is one glide, the ow of now, not two separate vowels. नौ also means 'boat' in older Hindi; as a number it is only ever nine." },
        { id: "hi-u11l1-das", type: "vocab", front: "दस", reading: "das", meaning: "ten", accept: ["10"], example: { jp: "मैं दस भाषाएँ नहीं जानता।", en: "I do not know ten languages." }, drill: { jp: "वह दस किताबें पढ़ता है", en: "He reads ten books" }, hint: "DAS — द and स, both from unit 1. Ten is where the pattern restarts: the teens ग्यारह to उन्नीस are all worn-down compounds of a number plus दस, which is why none of them looks regular." },
      ],
    },
    {
      id: "hi-u11l2",
      unit: 11,
      lesson: 2,
      title: "Eleven, twenty, sixty, a hundred",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read and say a quantity or a price anywhere up to one hundred.",
      items: [
        { id: "hi-u11l2-gyaarah", type: "vocab", front: "ग्यारह", reading: "gyaarah", meaning: "eleven", accept: ["11"], example: { jp: "इस गाँव में ग्यारह घर हैं।", en: "There are eleven houses in this village." }, drill: { jp: "मेरे स्कूल में ग्यारह शिक्षक हैं", en: "There are eleven teachers in my school" }, hint: "GYAA-RAH. It began as एक + दस and has worn down so far that neither is visible — learn it whole. The ग्य cluster is one sound: g glued straight onto y." },
        { id: "hi-u11l2-baarah", type: "vocab", front: "बारह", reading: "baarah", meaning: "twelve", accept: ["12"], example: { jp: "इस किताब में बारह वाक्य हैं।", en: "There are twelve sentences in this book." }, drill: { jp: "उस दुकान में बारह कुर्सियाँ हैं", en: "There are twelve chairs in that shop" }, hint: "BAA-RAH, from दो + दस. The -रह ending runs through ग्यारह, बारह, तेरह, चौदह — once you spot it the teens stop looking random." },
        { id: "hi-u11l2-biis", type: "vocab", front: "बीस", reading: "biis", meaning: "twenty", accept: ["20"], example: { jp: "मेरे शहर में बीस स्कूल हैं।", en: "There are twenty schools in my city." }, drill: { jp: "मैं बीस नए शब्द जानता हूँ", en: "I know twenty new words" }, hint: "BIIS, long ii. Twenty is the first round number, and from here each ten is its own word — बीस, तीस, चालीस, पचास — none of them built on दस." },
        { id: "hi-u11l2-tiis", type: "vocab", front: "तीस", reading: "tiis", meaning: "thirty", accept: ["30"], example: { jp: "उस गाँव में तीस परिवार हैं।", en: "There are thirty families in that village." }, drill: { jp: "इस स्कूल में तीस बच्चे हैं", en: "There are thirty children in this school" }, hint: "TIIS. This is the one ten that gives itself away — तीन (three) is sitting in it. Mind the last letter: तीन is tiin with an n, तीस is tiis with an s." },
        { id: "hi-u11l2-saatth", type: "vocab", front: "साठ", reading: "saatth", meaning: "sixty", accept: ["60"], example: { jp: "उस शहर में साठ मंदिर हैं।", en: "There are sixty temples in that city." }, drill: { jp: "इस किताब में साठ वाक्य हैं", en: "There are sixty sentences in this book" }, hint: "Read SAATTH, with a doubled t, and the doubling is doing real work. ठ here is RETROFLEX — tongue curled back. साथ saath (with, unit 8) has the DENTAL थ, tongue on the teeth. Same-sounding to an English ear, two different letters, and the doubled t is what keeps the two words apart on a typing card." },
        { id: "hi-u11l2-sau", type: "vocab", front: "सौ", reading: "sau", meaning: "a hundred", accept: ["100", "hundred"], example: { jp: "इस शहर में सौ दुकानें हैं।", en: "There are a hundred shops in this city." }, drill: { jp: "मैं सौ शब्द नहीं जानता", en: "I do not know a hundred words" }, hint: "SAU, one syllable, औ as in नौ. Masculine. Hundreds simply stack: दो सौ is two hundred, पाँच सौ five hundred — सौ itself never changes." },
      ],
    },
    {
      id: "hi-u11l3",
      unit: 11,
      lesson: 3,
      title: "Telling the time",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask what time it is, answer with the hour, and say how long something takes.",
      items: [
        { id: "hi-u11l3-samay", type: "vocab", front: "समय", reading: "samay", meaning: "time", accept: ["the time", "a moment"], example: { jp: "अब क्या समय है?", en: "What time is it now?" }, drill: { jp: "मुझे इस समय काम है", en: "I have work at this time" }, hint: "SA-MAY, masculine. This is time in the abstract and time on the clock. For 'three times' Hindi uses बार instead — a different word for a different sense." },
        { id: "hi-u11l3-ghantaa", type: "vocab", front: "घंटा", reading: "ghantaa", meaning: "an hour", accept: ["hour", "sixty minutes"], example: { jp: "मैं एक घंटा हिंदी पढ़ता हूँ।", en: "I study Hindi for one hour." }, drill: { jp: "एक घंटा बहुत ज़्यादा समय है", en: "One hour is a lot of time" }, hint: "GHAN-TAA, masculine. The ं before ट is the nasal that matches it — hum it, do not add a separate n. Plural drops -ा for -े: दो घंटे. घंटा is also a bell, which is where the sense of an 'hour struck' comes from." },
        { id: "hi-u11l3-minat", type: "vocab", front: "मिनट", reading: "minat", meaning: "a minute", accept: ["minute"], example: { jp: "यह काम दस मिनट का है।", en: "This job is ten minutes' work." }, drill: { jp: "मैं पाँच मिनट यहाँ रहता हूँ", en: "I stay here for five minutes" }, hint: "MI-NAT, masculine — an English loan, so the meaning costs you nothing and only the spelling is new. One retroflex ट at the end, said short and dry." },
        { id: "hi-u11l3-baje", type: "vocab", front: "बजे", reading: "baje", meaning: "o'clock", accept: ["on the hour", "in the hour of the clock"], example: { jp: "अब दो बजे हैं।", en: "It is two o'clock now." }, drill: { jp: "वह आठ बजे काम करता है", en: "He works at eight o'clock" }, hint: "BA-JE literally means 'struck', so दो बजे हैं is 'two have struck'. It only ever follows a number, and the number stays plain: तीन बजे, दस बजे. There is no way to say बजे on its own." },
        { id: "hi-u11l3-aadhaa", type: "vocab", front: "आधा", reading: "aadhaa", meaning: "half", accept: ["a half", "one half"], example: { jp: "आधा घंटा बहुत कम समय है।", en: "Half an hour is very little time." }, drill: { jp: "आधा शहर बहुत पुराना है", en: "Half the city is very old" }, hint: "AA-DHAA, masculine — आधी before a feminine noun. Keep आधा for half OF something. Half PAST an hour is a different word in Hindi (साढ़े), which comes later." },
        { id: "hi-u11l3-der", type: "vocab", front: "देर", reading: "der", meaning: "lateness", accept: ["a delay", "a long while"], example: { jp: "अब बहुत देर है।", en: "It is very late now." }, drill: { jp: "मैं देर से काम करता हूँ", en: "I work late" }, hint: "DER, feminine, and it is a NOUN — lateness, not 'late'. The everyday use is देर से, literally 'from lateness', which is how Hindi says late: मैं देर से आता हूँ." },
      ],
    },
    {
      id: "hi-u11l4",
      unit: 11,
      lesson: 4,
      title: "First, second, and how old",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say which one is first or second, how many times something happens, and how old someone is.",
      items: [
        { id: "hi-u11l4-pahlaa", type: "vocab", front: "पहला", reading: "pahlaa", meaning: "first", accept: ["the first", "first one"], example: { jp: "यह मेरा पहला काम है।", en: "This is my first job." }, drill: { jp: "पहला लड़का बहुत अच्छा है", en: "The first boy is very good" }, hint: "PAH-LAA. First, and it is not built on एक at all — its own word entirely. Masculine singular; पहली before a feminine noun, पहले in the plural or after a postposition." },
        { id: "hi-u11l4-duusraa", type: "vocab", front: "दूसरा", reading: "duusraa", meaning: "second", accept: ["the second", "another", "the other"], example: { jp: "दूसरा कमरा बड़ा है।", en: "The second room is big." }, drill: { jp: "मेरा दूसरा बेटा बहुत छोटा है", en: "My second son is very small" }, hint: "DUUS-RAA — दो is audible in it. It carries both senses at once, 'second' and 'the other one', and that second sense is how Hindi says 'another': दूसरा कमरा." },
        { id: "hi-u11l4-tiisraa", type: "vocab", front: "तीसरा", reading: "tiisraa", meaning: "third", accept: ["the third", "third one"], example: { jp: "तीसरा प्रश्न मुश्किल है।", en: "The third question is difficult." }, drill: { jp: "यह मेरा तीसरा स्कूल है", en: "This is my third school" }, hint: "TIIS-RAA, from तीन. पहला, दूसरा, तीसरा are the only irregular ordinals; from चौथा (fourth) onward Hindi just adds -वाँ to the number, so these three are the whole job." },
        { id: "hi-u11l4-baar", type: "vocab", front: "बार", reading: "baar", meaning: "an occasion", accept: ["a time", "once", "a turn"], example: { jp: "मैं यह किताब दो बार पढ़ता हूँ।", en: "I read this book twice." }, drill: { jp: "मैं यह वाक्य तीन बार लिखता हूँ", en: "I write this sentence three times" }, hint: "BAAR, feminine — a time in the sense of an occurrence. एक बार is once, दो बार twice. Clock time is समय, never बार, and do not confuse it with बाहर baahar (outside)." },
        { id: "hi-u11l4-umr", type: "vocab", front: "उम्र", reading: "umr", meaning: "age", accept: ["someone's age", "years of age"], example: { jp: "आपकी उम्र क्या है?", en: "How old are you?" }, drill: { jp: "मेरी उम्र बहुत कम है", en: "My age is very low" }, hint: "UMR, feminine, two beats — um-r, with no vowel between म and र because the halant kills it. 'How old are you?' is आपकी उम्र क्या है, literally 'what is your age'." },
        { id: "hi-u11l4-sankhyaa", type: "vocab", front: "संख्या", reading: "sankhyaa", meaning: "a number", accept: ["a figure", "a count", "a quantity"], example: { jp: "दस एक बड़ी संख्या नहीं है।", en: "Ten is not a big number." }, drill: { jp: "यह संख्या बहुत बड़ी है", en: "This number is very big" }, hint: "SAN-KHYAA, feminine — the written figure and the mathematical quantity. A phone number is not this word: for that Hindi borrows नंबर." },
      ],
    },
  ],
};
