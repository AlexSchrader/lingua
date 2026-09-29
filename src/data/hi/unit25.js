// HI Unit 25 — और गिनती ("More counting") — A1
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 RETHEMED SLOT. The scaffold called this "Vocabulary 1", which
// `src/data/lint.js` hard-errors on: SCAFFOLD_TITLE_PATTERNS carries
// /^Vocabulary \d+$/ alongside /^Characters \d+$/. **ALL SIX coverage slots
// u25–u30 wear that title and all six are rethemed by this block** — unit1.js §10
// named the five "Characters N" artefacts but not these, so they are recorded
// there now.
//
// WHY COUNTING, MEASURED. u11 owns "पाँच–सौ and the whole clock/calendar" and
// spent its 24 cards on 5–12, 20, 30, 60, 100, the clock, the first three
// ordinals and age. u17 owns the calendar and deliberately carded only FOUR of
// the twelve months, on the argument that a month name is an English loan whose
// meaning is free. What that left, measured against the merged u1–u24 corpus:
//     13 14 15 16 17 18 19 · 40 50 70 80 90 · 1000 · every ordinal from 4th on
//     फ़रवरी अप्रैल मई जून अगस्त सितंबर नवंबर
// That is a learner who can say "sixty rupees" and not "fifty", and who knows
// four months. It is a hole in the same class as u12's missing verbs, and it is
// arithmetic rather than judgement: **13 numbers + 4 ordinals + 6 months = 24.**
//
// ⚠️ नवंबर IS THE ONE MONTH WITH NO CARD, AND THAT IS THE ARITHMETIC, NOT AN
// OVERSIGHT. Seven months were left and a lesson is exactly six. The unit teaches
// six of the seven, bringing the language to **11 of 12 months carded** against
// u17's 4, and सितंबर's hint gives नवंबर its spelling and the reason it is
// regular. u17's own जनवरी hint already lists all twelve, so the learner has had
// the set since u17. A2 may card it if it ever wants a twelfth mastery track.
//
// LEXEME CALLS MADE BY HAND:
//   • पाँचवाँ (l3, "fifth") / पाँच (u11l1, "five"), and छठा / छह. The ORDINAL is
//     a separate dictionary entry from the cardinal, and block 1 already set the
//     precedent by carding पहला, दूसरा and तीसरा against एक, दो and तीन in one
//     unit. No rule in scope-hi.mjs generates one from the other.
//   • आखिरी (l3, "the last") / आखिर — आखिर is NOT taught, so there is no pair to
//     judge; noted only so a later seat does not add it without thinking.
//   • सत्रह satrah (l1) against सत्तर sattar (l2) and सात saat (u11): three
//     distinct readings, three distinct words, and each hint points at the other
//     two, because this is the trio a learner will actually confuse out loud.
export const HI_UNIT25 = {
  id: "hi-u25",
  lang: "hi",
  title: "और गिनती",
  order: 25,
  stage: "a1",
  lessons: [
    {
      id: "hi-u25l1",
      unit: 25,
      lesson: 1,
      title: "Thirteen to eighteen",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say and understand any number from thirteen to eighteen — the six that have to be learnt whole because Hindi does not build them out of ten.",
      items: [
        { id: "hi-u25l1-terah", type: "vocab", front: "तेरह", reading: "terah", meaning: "thirteen", accept: ["13"], example: { jp: "इस गाँव में तेरह घर हैं।", en: "There are thirteen houses in this village." }, drill: { jp: "मेरे पास तेरह रुपये हैं", en: "I have thirteen rupees" }, hint: "TE-RAH. From thirteen to eighteen Hindi does NOT build the number out of ten plus something, the way English does — each is its own word and has to be learnt whole. That is six words, and this lesson is all six." },
        { id: "hi-u25l1-chaudah", type: "vocab", front: "चौदह", reading: "chaudah", meaning: "fourteen", accept: ["14"], example: { jp: "मेरी बहन चौदह साल की है।", en: "My sister is fourteen years old." }, drill: { jp: "यहाँ चौदह दुकानें हैं", en: "There are fourteen shops here" }, hint: "CHAU-DAH, and the औ is the vowel in 'how'. Watch it against चौथा, fourth, and चार, four — the same चौ- family, three different words, all in daily use." },
        { id: "hi-u25l1-pandrah", type: "vocab", front: "पंद्रह", reading: "pandrah", meaning: "fifteen", accept: ["15"], example: { jp: "मैं पंद्रह मिनट में आता हूँ।", en: "I'll come in fifteen minutes." }, drill: { jp: "यह किताब पंद्रह रुपये की है", en: "This book is fifteen rupees" }, hint: "PAN-DRAH — the ं before द is an n, and द्र is a stacked conjunct. पंद्रह दिन is how Hindi says a fortnight, and that phrase comes up constantly when people talk about time." },
        { id: "hi-u25l1-solah", type: "vocab", front: "सोलह", reading: "solah", meaning: "sixteen", accept: ["16"], example: { jp: "इस साल सोलह लड़के यहाँ पढ़ते हैं।", en: "Sixteen boys study here this year." }, drill: { jp: "यहाँ सोलह मेज़ें हैं", en: "There are sixteen tables here" }, hint: "SO-LAH. सोलह is the age Hindi treats as the edge of adulthood, and सोलह आने means 'a hundred per cent' — from the sixteen आने that used to make one rupee." },
        { id: "hi-u25l1-satrah", type: "vocab", front: "सत्रह", reading: "satrah", meaning: "seventeen", accept: ["17"], example: { jp: "इस महीने की सत्रह तारीख को छुट्टी है।", en: "There is a holiday on the seventeenth of this month." }, drill: { jp: "वहाँ सत्रह लोग बैठते हैं", en: "Seventeen people sit there" }, hint: "SAT-RAH, with a doubled dental त — hold the t. Read it against सत्तर sattar, seventy: सत्रह has a र, सत्तर has a second त. Out loud they are easy to swap." },
        { id: "hi-u25l1-athaarah", type: "vocab", front: "अठारह", reading: "athaarah", meaning: "eighteen", accept: ["18"], example: { jp: "मेरी उम्र अठारह साल है।", en: "My age is eighteen years." }, drill: { jp: "यहाँ अठारह बच्चे पढ़ते हैं", en: "Eighteen children study here" }, hint: "A-THAA-RAH with a RETROFLEX ठ — curl the tongue back to the roof of the mouth, then a puff of air. In India अठारह is the legal age for nearly everything, so it turns up in forms and rules." },
      ],
    },
    {
      id: "hi-u25l2",
      unit: 25,
      lesson: 2,
      title: "The round tens, and a nineteen that counts backwards",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say any of the round tens up to ninety, and understand why nineteen is built as one-less-than-twenty.",
      items: [
        { id: "hi-u25l2-unniis", type: "vocab", front: "उन्नीस", reading: "unniis", meaning: "nineteen", accept: ["19"], example: { jp: "उन्नीस के बाद बीस आता है।", en: "After nineteen comes twenty." }, drill: { jp: "इस गली में उन्नीस घर हैं", en: "There are nineteen houses in this lane" }, hint: "UN-NIIS with a genuinely doubled न — hold it. The word is built BACKWARDS: उन means 'one less', so उन्नीस is one less than twenty. Hindi does the same at 29 and 39 — उनतीस, उनतालीस." },
        { id: "hi-u25l2-chaaliis", type: "vocab", front: "चालीस", reading: "chaaliis", meaning: "forty", accept: ["40"], example: { jp: "इस दुकान में चालीस तरह की चाय है।", en: "This shop has forty kinds of tea." }, drill: { jp: "मेरे पिता चालीस साल के हैं", en: "My father is forty years old" }, hint: "CHAA-LIIS. Watch it against चार, four, and चौदह, fourteen — Hindi's tens are irregular and each is learnt as its own word. Note पिता takes the PLURAL हैं: fathers get the honorific." },
        { id: "hi-u25l2-pachaas", type: "vocab", front: "पचास", reading: "pachaas", meaning: "fifty", accept: ["50"], example: { jp: "यह किताब पचास रुपये की है।", en: "This book is fifty rupees." }, drill: { jp: "इस गाँव में पचास लोग हैं", en: "There are fifty people in this village" }, hint: "PA-CHAAS — the inherent a in च is swallowed, so pa-CHAAS, not pa-cha-aas. पाँच is five and पचास is fifty, so this one you can guess, unlike चार and चालीस." },
        { id: "hi-u25l2-sattar", type: "vocab", front: "सत्तर", reading: "sattar", meaning: "seventy", accept: ["70"], example: { jp: "मेरे दादा सत्तर साल के हैं।", en: "My grandfather is seventy years old." }, drill: { jp: "यहाँ सत्तर कुर्सियाँ हैं", en: "There are seventy chairs here" }, hint: "SAT-TAR with a doubled dental त. Read it against सत्रह satrah, seventeen, and सात saat, seven — three words off one root, and all three in constant use, which is why they blur." },
        { id: "hi-u25l2-assii", type: "vocab", front: "अस्सी", reading: "assii", meaning: "eighty", accept: ["80"], example: { jp: "मेरी दादी अस्सी साल की हैं।", en: "My grandmother is eighty years old." }, drill: { jp: "इस पेड़ की उम्र अस्सी साल है", en: "This tree's age is eighty years" }, hint: "AS-SII with a doubled स — hold it. आठ is eight and अस्सी is eighty, so this one is guessable. Keep the final ी long: अस्सी, not अस्सि." },
        { id: "hi-u25l2-nabbe", type: "vocab", front: "नब्बे", reading: "nabbe", meaning: "ninety", accept: ["90"], example: { jp: "इस शहर में नब्बे दुकानें हैं।", en: "There are ninety shops in this city." }, drill: { jp: "यह सामान नब्बे रुपये का है", en: "This merchandise is ninety rupees" }, hint: "NAB-BE with a doubled ब. नौ is nine and नब्बे is ninety. It is the last round ten you need — साठ, sixty, and सौ, a hundred, came earlier." },
      ],
    },
    {
      id: "hi-u25l3",
      unit: 25,
      lesson: 3,
      title: "A thousand, a lakh, and the order things come in",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Give a real Indian price in thousands and lakhs, and say which one in a sequence you mean — the fourth, fifth, sixth or last.",
      items: [
        { id: "hi-u25l3-hazaar", type: "vocab", front: "हज़ार", reading: "hazaar", meaning: "a thousand", accept: ["1000", "one thousand"], example: { jp: "यह साड़ी दो हज़ार रुपये की है।", en: "This sari is two thousand rupees." }, drill: { jp: "मेरे पास एक हज़ार रुपये हैं", en: "I have one thousand rupees" }, hint: "HA-ZAAR with the Persian ज़ — a z. Hindi counts in hundreds and thousands up to here and then switches to its own system: the next step up is लाख, a hundred thousand, and not a million." },
        { id: "hi-u25l3-laakh", type: "vocab", front: "लाख", reading: "laakh", meaning: "a hundred thousand", accept: ["100000", "a lakh", "one lakh"], example: { jp: "इस गाँव की ज़मीन दो लाख की है।", en: "This village's land is two lakh." }, drill: { jp: "यह गाड़ी पाँच लाख रुपये की है", en: "This car is five lakh rupees" }, hint: "LAAKH is 100,000, and it is the unit Indian prices are actually quoted in — a car is पाँच लाख, never five hundred thousand. Above it comes करोड़, ten million. In digits it is written 1,00,000, with the commas in different places." },
        { id: "hi-u25l3-chauthaa", type: "vocab", front: "चौथा", reading: "chauthaa", meaning: "fourth", accept: ["number four in order", "the 4th"], example: { jp: "यह मेरी चौथी किताब है।", en: "This is my fourth book." }, drill: { jp: "यह चौथा हफ़्ता है", en: "This is the fourth week" }, hint: "CHAU-THAA with a DENTAL थ. Hindi's first three ordinals are irregular — पहला, दूसरा, तीसरा — and from four up they are built with -था or -वाँ. All of them agree: चौथी किताब, चौथे दिन." },
        { id: "hi-u25l3-paanchvaan", type: "vocab", front: "पाँचवाँ", reading: "paanchvaan", meaning: "fifth", accept: ["number five in order", "the 5th"], example: { jp: "आज महीने का पाँचवाँ दिन है।", en: "Today is the fifth day of the month." }, drill: { jp: "यह मेरा पाँचवाँ साल है", en: "This is my fifth year" }, hint: "PAANCH-VAAN — पाँच plus -वाँ, and that -वाँ is the regular ordinal ending from five upward. Both ँ hum through their vowels. The feminine is पाँचवीं." },
        { id: "hi-u25l3-chhathaa", type: "vocab", front: "छठा", reading: "chhathaa", meaning: "sixth", accept: ["number six in order", "the 6th"], example: { jp: "यह इस साल का छठा महीना है।", en: "This is the sixth month of this year." }, drill: { jp: "आज छठा दिन है", en: "Today is the sixth day" }, hint: "CHHA-THAA with a RETROFLEX ठ — tongue curled back. It breaks the pattern: छह is six but sixth is छठा, not छहवाँ. Seventh goes straight back to the rule — सातवाँ." },
        { id: "hi-u25l3-aakhirii", type: "vocab", front: "आखिरी", reading: "aakhirii", meaning: "the last", accept: ["final", "the one at the end", "hindmost"], example: { jp: "यह हफ़्ते का आखिरी दिन है।", en: "This is the last day of the week." }, drill: { jp: "यह आखिरी बस है", en: "This is the last bus" }, hint: "AA-KHI-RII ends in -ी and never changes: आखिरी दिन, आखिरी बस. Written with plain ख, the way this course spells every Persian and Arabic word. आखिर on its own means 'after all'." },
      ],
    },
    {
      id: "hi-u25l4",
      unit: 25,
      lesson: 4,
      title: "The rest of the calendar",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name any month of the year in Hindi and say what the weather or your plans are in it.",
      items: [
        { id: "hi-u25l4-farvarii", type: "vocab", front: "फ़रवरी", reading: "farvarii", meaning: "February", accept: ["the second month"], example: { jp: "फ़रवरी साल का सबसे छोटा महीना है।", en: "February is the shortest month of the year." }, drill: { jp: "फ़रवरी में मौसम अच्छा है", en: "In February the weather is good" }, hint: "FAR-VA-RII with the Persian फ़ — an f. Every Hindi month name is the English one written in Devanagari, so the work here is the spelling, never the meaning. It is also written फरवरी without the dot." },
        { id: "hi-u25l4-aprail", type: "vocab", front: "अप्रैल", reading: "aprail", meaning: "April", accept: ["the fourth month"], example: { jp: "अप्रैल में यहाँ बहुत गरम होता है।", en: "In April it gets very hot here." }, drill: { jp: "अप्रैल में मेरा जन्मदिन है", en: "My birthday is in April" }, hint: "A-PRAIL — प्र is a stacked conjunct and ऐ is the vowel in 'pain'. Note it is अप्रैल, not अप्रिल: Hindi follows the English SOUND, not the English spelling." },
        { id: "hi-u25l4-maii", type: "vocab", front: "मई", reading: "maii", meaning: "May", accept: ["the fifth month"], example: { jp: "मई में स्कूल बंद होता है।", en: "In May the school closes." }, drill: { jp: "मई का महीना बहुत गरम है", en: "The month of May is very hot" }, hint: "MA-II, two syllables in two letters. Do not confuse it with मैं main, 'I' — मई uses the letter ई, मैं uses the ऐ mātrā and a nasal dot. Read both slowly until they separate." },
        { id: "hi-u25l4-juun", type: "vocab", front: "जून", reading: "juun", meaning: "June", accept: ["the sixth month"], example: { jp: "जून में यहाँ बहुत बारिश होती है।", en: "In June it rains a lot here." }, drill: { jp: "मेरी छुट्टी जून में है", en: "My holiday is in June" }, hint: "JUUN with a long ू. In most of India जून is when the monsoon arrives, so it is the month the rest of the year gets measured against." },
        { id: "hi-u25l4-agast", type: "vocab", front: "अगस्त", reading: "agast", meaning: "August", accept: ["the eighth month"], example: { jp: "पंद्रह अगस्त भारत का बड़ा दिन है।", en: "The fifteenth of August is a big day for India." }, drill: { jp: "अगस्त में यहाँ छुट्टी है", en: "There is a holiday here in August" }, hint: "A-GAST — the final त carries no vowel, so the word ends in one clipped syllable. पंद्रह अगस्त is Independence Day, the date every Indian knows without being told." },
        { id: "hi-u25l4-sitambar", type: "vocab", front: "सितंबर", reading: "sitambar", meaning: "September", accept: ["the ninth month"], example: { jp: "सितंबर में मौसम बदलता है।", en: "In September the weather changes." }, drill: { jp: "सितंबर का महीना अच्छा है", en: "The month of September is good" }, hint: "SI-TAM-BAR — the ं before ब is an m, not an n, because ब is made with the lips. नवंबर is the one month with no card of its own, and it is spelled the same way, with that same ं as an m." },
      ],
    },
  ],
};
