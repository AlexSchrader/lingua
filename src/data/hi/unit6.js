// HI Unit 6 — संयुक्ताक्षर ("Stacked letters") — PRE-A1
// THE LAST THING BETWEEN A LEARNER AND A PRINTED PAGE. A Devanagari consonant
// always carries an a; the halant ् is the mark that takes it away, and two
// consonants with nothing between them fuse into a single stacked shape.
// स + ् + क = स्क. Without this unit, स्कूल and नमस्ते and क्या are unreadable.
//
// ⚠️ ONLY THREE CONJUNCTS ARE GLYPH CARDS — क्ष, त्र, ज्ञ. Those are the three that
// Indian primers teach as letters in their own right, and the three no learner can
// decompose on sight (ज्ञ is ज + ञ and says gya; nothing about the shape says so).
// Every other cluster IS visibly its parts stacked, so it is taught through words.
// See unit1.js §3. The halant itself gets no glyph card — it has no sound.
export const HI_UNIT6 = {
  id: "hi-u6",
  lang: "hi",
  title: "संयुक्ताक्षर",
  order: 6,
  stage: "pre-a1",
  lessons: [
    {
      id: "hi-u6l1",
      unit: 6,
      lesson: 1,
      title: "क्ष त्र ज्ञ — the three you cannot guess",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the three conjunct letters whose shape does not show their parts, and read a Hindi word containing each.",
      items: [
        { id: "hi-u6l1-conjksha", type: "glyph", front: "क्ष", reading: "ksha", meaning: null, example: null, hint: "क + ष, said ksha. The shape keeps almost nothing of either parent, which is why Indian children learn it as a letter. It is in अक्षर (a letter) and क्षमा (forgiveness)." },
        { id: "hi-u6l1-conjtra", type: "glyph", front: "त्र", reading: "tra", meaning: null, example: null, hint: "त + र, said tra. This is the one conjunct whose logic you can see: the र has shrunk into a stroke under the त. Once you spot that stroke you can read प्र, ग्र, क्र and द्र too." },
        { id: "hi-u6l1-conjgya", type: "glyph", front: "ज्ञ", reading: "gya", meaning: null, example: null, hint: "ज + ञ, and it says GYA — not jnya. The commonest trap in Devanagari: the spelling and the sound have drifted apart completely. It is in विज्ञान (science) and ज्ञान (knowledge)." },
        { id: "hi-u6l1-chhaatra", type: "vocab", front: "छात्र", reading: "chhaatra", meaning: "a student", accept: ["student", "pupil", "schoolboy"], example: { jp: "वह छात्र अच्छे प्रश्न पूछता है और हिंदी पढ़ता है।", en: "That student asks good questions and studies Hindi." }, drill: { jp: "वह छात्र हिंदी पढ़ता है", en: "That student studies Hindi" }, hint: "CHHAA-tra, masculine — the त्र at the end, with the little र-stroke underneath. The feminine is छात्रा. The everyday alternative is विद्यार्थी; छात्र is what a school or form will say." },
        { id: "hi-u6l1-kshamaa", type: "vocab", front: "क्षमा", reading: "kshamaa", meaning: "forgiveness", accept: ["pardon", "mercy"], example: { jp: "किसी से क्षमा माँगना मुश्किल है, पर वह बड़ी चीज़ है।", en: "Asking someone for forgiveness is difficult, but it is a big thing." }, drill: { jp: "क्षमा बड़ी चीज़ है", en: "Forgiveness is a big thing" }, hint: "ksha-MAA, feminine. Begin the word with the k and the sh run together, no vowel between. क्षमा कीजिए is a formal I'm sorry — heavier than माफ़ कीजिए, which is unit 7." },
        { id: "hi-u6l1-vigyaan", type: "vocab", front: "विज्ञान", reading: "vigyaan", meaning: "science", accept: ["the sciences"], example: { jp: "मेरा छोटा भाई विज्ञान पढ़ता है।", en: "My younger brother studies science." }, drill: { jp: "मेरा भाई विज्ञान पढ़ता है", en: "My brother studies science" }, hint: "vi-GYAAN, masculine — and the reading is the proof of the rule above: it is spelled with ज्ञ and said gyaan. Never vijnyaan." },
      ],
    },
    {
      id: "hi-u6l2",
      unit: 6,
      lesson: 2,
      title: "The halant: two consonants, no vowel",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read a word where two consonants are stacked and pronounce them with no vowel in between.",
      items: [
        { id: "hi-u6l2-skuul", type: "vocab", front: "स्कूल", reading: "skuul", meaning: "a school", accept: ["school"], example: { jp: "बच्चे सुबह स्कूल जाते हैं।", en: "The children go to school in the morning." }, drill: { jp: "बच्चा सुबह स्कूल जाता है", en: "The child goes to school in the morning" }, hint: "SKOOL, masculine. स्क is स with its a taken away, then क — you hear sk, not saka. Hindi has पाठशाला too, but स्कूल is what everyone says." },
        { id: "hi-u6l2-pyaar", type: "vocab", front: "प्यार", reading: "pyaar", meaning: "love", accept: ["affection", "fondness"], example: { jp: "मुझे अपने गाँव से बहुत प्यार है।", en: "I love my village very much." }, drill: { jp: "मुझे अपने गाँव से प्यार है", en: "I love my village" }, hint: "PYAAR, masculine — प्य is प + य with no vowel between. Hindi says love with a postposition, not a verb: X से प्यार है, love-with-X exists." },
        { id: "hi-u6l2-kyaa", type: "vocab", front: "क्या", reading: "kyaa", meaning: "what", accept: ["which thing", "huh"], example: { jp: "यह क्या है, एक नया शब्द?", en: "What is this, a new word?" }, drill: { jp: "आपका नाम क्या है", en: "What is your name" }, hint: "KYAA — क्य stacked, so one syllable, never ki-yaa. It has a second job: put क्या at the FRONT of a statement and it turns into a yes-or-no question. क्या यह आपका घर है?" },
        { id: "hi-u6l2-acchaa", type: "vocab", front: "अच्छा", reading: "acchaa", meaning: "good", accept: ["nice", "fine", "well", "I see"], example: { jp: "यह किताब बहुत अच्छी है, पर वह फल अच्छा नहीं है।", en: "This book is very good, but that fruit is not good." }, drill: { jp: "यह पानी बहुत अच्छा है", en: "This water is very good" }, hint: "ach-CHAA — च्छ is च + छ, so you say the ch twice, the second with a puff. Masculine form; feminine अच्छी. Said on its own it means I see or right then — you will hear it constantly." },
        { id: "hi-u6l2-bacchaa", type: "vocab", front: "बच्चा", reading: "bacchaa", meaning: "a child", accept: ["child", "kid", "baby"], example: { jp: "यह बच्चा मेरी बहन का बेटा है।", en: "This child is my sister's son." }, drill: { jp: "यह बच्चा बहुत छोटा है", en: "This child is very small" }, hint: "bach-CHAA, masculine — same च्छ double as अच्छा. A girl child is बच्ची. Note the plural you will hear everywhere: बच्चे." },
        { id: "hi-u6l2-sastaa", type: "vocab", front: "सस्ता", reading: "sastaa", meaning: "cheap", accept: ["inexpensive", "low-priced"], example: { jp: "शहर में फल ज़्यादा महँगा है, यहाँ बहुत सस्ता है।", en: "Fruit is more expensive in the city; here it is very cheap." }, drill: { jp: "यहाँ फल बहुत सस्ता है", en: "Fruit is very cheap here" }, hint: "SAS-taa, masculine — स्त is स + त with no vowel. It means low-priced with no insult in it, unlike English cheap. The opposite is महँगा." },
      ],
    },
    {
      id: "hi-u6l3",
      unit: 6,
      lesson: 3,
      title: "Where the र hides",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Spot a र that has turned into a stroke or a hook, and read the word at full speed.",
      items: [
        { id: "hi-u6l3-prashn", type: "vocab", front: "प्रश्न", reading: "prashn", meaning: "a question", accept: ["question", "query", "problem"], example: { jp: "मेरा एक प्रश्न है, पर उसका जवाब मुश्किल है।", en: "I have a question, but its answer is difficult." }, drill: { jp: "यह प्रश्न बहुत मुश्किल है", en: "This question is very difficult" }, hint: "PRASHN, masculine — TWO hidden things in five letters: प्र is प with र shrunk underneath, and श्न is श + न. Say it as one syllable and a half, not pa-ra-sha-na. सवाल is the everyday word; प्रश्न is the formal one." },
        { id: "hi-u6l3-karm", type: "vocab", front: "कर्म", reading: "karm", meaning: "a deed", accept: ["action", "karma", "work done"], example: { jp: "अच्छा कर्म कभी छोटा नहीं होता।", en: "A good deed is never small." }, drill: { jp: "अच्छा कर्म छोटा नहीं होता", en: "A good deed is not small" }, hint: "KARM, masculine. THE OTHER र: when र comes FIRST in a cluster it becomes a little hook riding on top of the next letter — र्म. English borrowed this word as karma." },
        { id: "hi-u6l3-shuddh", type: "vocab", front: "शुद्ध", reading: "shuddh", meaning: "pure", accept: ["clean", "correct", "unadulterated"], example: { jp: "तुम यह पानी पी सकते हो, यह शुद्ध है।", en: "You can drink this water; it is pure." }, drill: { jp: "यह पानी शुद्ध है", en: "This water is pure" }, hint: "SHUDDH — द्ध is द + ध stacked one above the other, so a d then a breathy dh with nothing between. Used of water, food and language: शुद्ध हिंदी is Hindi without Urdu or English in it." },
        { id: "hi-u6l3-mushkil", type: "vocab", front: "मुश्किल", reading: "mushkil", meaning: "difficult", accept: ["hard", "a difficulty", "tough"], example: { jp: "हिंदी लिखना थोड़ा मुश्किल है, पर पढ़ना मुश्किल नहीं है।", en: "Writing Hindi is a little difficult, but reading it is not difficult." }, drill: { jp: "हिंदी पढ़ना मुश्किल नहीं है", en: "Reading Hindi is not difficult" }, hint: "MUSH-kil — श्क is श + क stacked. It works as an adjective (difficult) and as a noun (a difficulty), with no change. The opposite is आसान." },
        { id: "hi-u6l3-zyaadaa", type: "vocab", front: "ज़्यादा", reading: "zyaadaa", meaning: "more", accept: ["too much", "excessive", "a lot"], example: { jp: "समय कम है और काम ज़्यादा है।", en: "There is less time and more work." }, drill: { jp: "आज काम ज़्यादा है", en: "There is more work today" }, hint: "ZYAA-daa — a dot AND a stack: ज़्य is ज़ + य. The opposite of कम, which you met in unit 1: कम पानी, ज़्यादा पानी." },
        { id: "hi-u6l3-thoraa", type: "vocab", front: "थोड़ा", reading: "thoraa", meaning: "a little bit", accept: ["a little", "some", "slightly"], example: { jp: "ज़्यादा नहीं, मुझे थोड़ा पानी चाहिए।", en: "Not a lot — I want a little water." }, drill: { jp: "मुझे थोड़ा पानी चाहिए", en: "I want a little water" }, hint: "THO-raa — breathy dental थ, then flapped ड़. Doubled up as थोड़ा-थोड़ा it means little by little. Careful against कम, which means less by comparison; थोड़ा is just a small amount." },
      ],
    },
    {
      id: "hi-u6l4",
      unit: 6,
      lesson: 4,
      title: "Read, write, speak, understand",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name in Hindi what you are now able to do with the script, and talk about letters, words and sentences.",
      items: [
        { id: "hi-u6l4-shabd", type: "vocab", front: "शब्द", reading: "shabd", meaning: "a word", accept: ["word", "term", "sound"], example: { jp: "इसका मतलब सब नहीं जानते, यह शब्द हिंदी में नया है।", en: "Not everyone knows its meaning; this word is new in Hindi." }, drill: { jp: "यह शब्द हिंदी में नया है", en: "This word is new in Hindi" }, hint: "SHABD, masculine — ब्द is ब + द stacked, and there is no vowel after the द either, so the word ends on a consonant cluster. One syllable." },
        { id: "hi-u6l4-vaakya", type: "vocab", front: "वाक्य", reading: "vaakya", meaning: "a sentence", accept: ["sentence", "clause"], example: { jp: "इस वाक्य में हर शब्द नया है।", en: "Every word in this sentence is new." }, drill: { jp: "यह वाक्य बहुत छोटा है", en: "This sentence is very short" }, hint: "VAAK-ya, masculine — क्य is क + य, the same stack as क्या. And the example says the rule you have been seeing all along: Hindi puts the verb last." },
        { id: "hi-u6l4-akshar", type: "vocab", front: "अक्षर", reading: "akshar", meaning: "a letter of the alphabet", accept: ["letter", "character", "syllable"], example: { jp: "हर अक्षर अपने साथ अपना स्वर लाता है, और हिंदी में बहुत अक्षर हैं।", en: "Each letter brings its own vowel with it, and Hindi has many letters." }, drill: { jp: "हिंदी में बहुत अक्षर हैं", en: "There are many letters in Hindi" }, hint: "AK-shar, masculine — with क्ष from lesson 1. Strictly it means a syllable-sign, which is exactly what a Devanagari letter is: क is not k, it is ka." },
        { id: "hi-u6l4-likhnaa", type: "vocab", front: "लिखना", reading: "likhnaa", meaning: "to write", accept: ["write", "to spell"], example: { jp: "मुझे हिंदी में अपना नाम लिखना है।", en: "I have to write my name in Hindi." }, drill: { jp: "मुझे अपना नाम लिखना है", en: "I have to write my name" }, hint: "LIKH-naa — aspirated ख, and the middle a is dropped: likhnaa, not likhanaa. The -ना infinitive, like every Hindi verb card." },
        { id: "hi-u6l4-bolnaa", type: "vocab", front: "बोलना", reading: "bolnaa", meaning: "to speak", accept: ["speak", "to say", "to talk"], example: { jp: "अब मैं थोड़ा समझता हूँ और हिंदी बोलना सीखता हूँ।", en: "Now I understand a little and I am learning to speak Hindi." }, drill: { jp: "मैं हिंदी बोलना सीखता हूँ", en: "I am learning to speak Hindi" }, hint: "BOL-naa. Use it for speaking a language (हिंदी बोलना) and for saying something out loud. कहना is closer to to tell someone." },
        { id: "hi-u6l4-samajhnaa", type: "vocab", front: "समझना", reading: "samajhnaa", meaning: "to understand", accept: ["understand", "to realise", "to grasp"], example: { jp: "अब मैं हिंदी पढ़ना और समझना सीख गया।", en: "Now I have learnt to read and understand Hindi." }, drill: { jp: "मैं अब हिंदी समझना सीखता हूँ", en: "Now I am learning to understand Hindi" }, hint: "sa-MAJH-naa, with breathy झ, and the third a dropped. Hindi's polite way of checking you followed something is समझे? — and the answer is समझ गया." },
      ],
    },
  ],
};
