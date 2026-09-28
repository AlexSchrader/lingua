// HI Unit 3 — मात्रा ("The vowel marks") — PRE-A1
// THE UNIT THAT UNLOCKS THE SCRIPT. Units 1 and 2 could only spell the inherent
// a, so the whole vocabulary was कम, मन, हम, अब, बस, घर, सच, जब, छत, कल, सब. From
// here every Hindi word is writable.
//
// WHY THE MĀTRĀ ARE CARDED AS SYLLABLES, NOT AS BARE MARKS: see unit1.js §3. In
// short, a bare ा has no sound, renders on a dotted circle, and its reading would
// duplicate आ's. Every mātrā here is carded on ONE familiar consonant, क, so the
// only thing changing from card to card is the mark. Conventions: unit1.js.
export const HI_UNIT3 = {
  id: "hi-u3",
  lang: "hi",
  title: "मात्रा",
  order: 3,
  stage: "pre-a1",
  lessons: [
    {
      id: "hi-u3l1",
      unit: 3,
      lesson: 1,
      title: "ा ि ी — the marks that hang off the letter",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read a consonant with a vowel mark attached, and read the Hindi words for name, water and a book.",
      items: [
        { id: "hi-u3l1-syllkaa", type: "glyph", front: "का", reading: "kaa", meaning: null, example: null, hint: "क with आ's mark — one vertical stroke after the letter. The built-in a is now a long aa. This one stroke is the commonest mark in Hindi." },
        { id: "hi-u3l1-syllki", type: "glyph", front: "कि", reading: "ki", meaning: null, example: null, hint: "क with इ's mark, and here is the trap: the mark is written BEFORE the letter but SAID AFTER it. You read कि as ki, never as ik." },
        { id: "hi-u3l1-syllkii", type: "glyph", front: "की", reading: "kii", meaning: null, example: null, hint: "The long partner: the hook leans the other way and sits AFTER the letter. कि is ki, की is kii — the side the hook falls on is the whole difference." },
        { id: "hi-u3l1-naam", type: "vocab", front: "नाम", reading: "naam", meaning: "a name", accept: ["name"], example: { jp: "नमस्ते, मेरा नाम करन है और मैं भारत से हूँ।", en: "Hello, my name is Karan and I am from India." }, drill: { jp: "मेरा नाम करन है", en: "My name is Karan" }, hint: "NAAM, masculine. न + आ's stroke + म. Hindi says मेरा नाम … है, my name … is — the है goes last, because Hindi puts the verb at the end." },
        { id: "hi-u3l1-paanii", type: "vocab", front: "पानी", reading: "paanii", meaning: "water", accept: ["drinking water"], example: { jp: "एक गिलास पानी दीजिए।", en: "Please give me a glass of water." }, drill: { jp: "पानी यहाँ ठंडा है", en: "The water here is cold" }, hint: "PAA-nii — both marks in one word. ⚠️ MASCULINE, even though it ends in -ी. That ending usually means feminine, so this is one to memorise: ठंडा पानी, not ठंडी।" },
        { id: "hi-u3l1-kitaab", type: "vocab", front: "किताब", reading: "kitaab", meaning: "a book", accept: ["book"], example: { jp: "हिंदी की यह किताब बहुत मुश्किल नहीं है।", en: "This Hindi book is not very difficult." }, drill: { jp: "यह किताब हिंदी में है", en: "This book is in Hindi" }, hint: "ki-TAAB, feminine — and look at कि: the hook is printed first and read second. The word came into Hindi from Arabic, which is why it does not sound Sanskritic." },
      ],
    },
    {
      id: "hi-u3l2",
      unit: 3,
      lesson: 2,
      title: "ु ू े — marks above and below",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the marks that sit under and over the letter, and say something, my and to see.",
      items: [
        { id: "hi-u3l2-syllku", type: "glyph", front: "कु", reading: "ku", meaning: null, example: null, hint: "उ's mark, and it goes UNDERNEATH — a little hook below the letter. Short u, as in book." },
        { id: "hi-u3l2-syllkuu", type: "glyph", front: "कू", reading: "kuu", meaning: null, example: null, hint: "ऊ's mark, also underneath, but it drops and curls further. Long uu, as in food. Under-the-letter marks are easy to miss when you first read — slow down and look down." },
        { id: "hi-u3l2-syllke", type: "glyph", front: "के", reading: "ke", meaning: null, example: null, hint: "ए's mark, and this one goes ON TOP — a single stroke above the headline. Says ke, the e of they." },
        { id: "hi-u3l2-kuchh", type: "vocab", front: "कुछ", reading: "kuchh", meaning: "something", accept: ["some", "anything", "a little"], example: { jp: "मेज़ के ऊपर कुछ है, पर वह क्या है?", en: "There is something on top of the table, but what is it?" }, drill: { jp: "मेज़ पर कुछ है", en: "There is something on the table" }, hint: "KUCHH — the under-mark on क, then breathy छ. कुछ नहीं is nothing, and सब कुछ is everything: it is the word Hindi builds both out of." },
        { id: "hi-u3l2-meraa", type: "vocab", front: "मेरा", reading: "meraa", meaning: "my", accept: ["mine"], example: { jp: "इस शहर में मेरा घर और मेरा काम दोनों हैं।", en: "Both my house and my work are in this city." }, drill: { jp: "मेरा घर यहाँ है", en: "My house is here" }, hint: "MAY-raa, with the over-mark on म. ⚠️ It AGREES with what is owned, not with you: मेरा घर but मेरी किताब (feminine) and मेरे भाई (plural). Learn मेरा and let unit 24 do the agreement." },
        { id: "hi-u3l2-dekhnaa", type: "vocab", front: "देखना", reading: "dekhnaa", meaning: "to see", accept: ["to look", "to watch", "see"], example: { jp: "मुझे यह घर देखना है।", en: "I want to see this house." }, drill: { jp: "मुझे यह शहर देखना है", en: "I want to see this city" }, hint: "DEKH-naa. Every Hindi verb is carded in this -ना form, the infinitive, which doubles as the noun the seeing. Note the reading: the middle a of दे-ख-ना is not said, so it is dekhnaa and never dekhanaa." },
      ],
    },
    {
      id: "hi-u3l3",
      unit: 3,
      lesson: 3,
      title: "ै ो ौ — and the verb is",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the last three vowel marks and build a complete Hindi sentence ending in है.",
      items: [
        { id: "hi-u3l3-syllkai", type: "glyph", front: "कै", reading: "kai", meaning: null, example: null, hint: "ऐ's mark: TWO strokes on top, against ए's one. Says kai, with the open a of cat. Count the strokes — that is the whole difference." },
        { id: "hi-u3l3-syllko", type: "glyph", front: "को", reading: "ko", meaning: null, example: null, hint: "ओ's mark: the vertical stroke of आ plus one over the top. Says ko." },
        { id: "hi-u3l3-syllkau", type: "glyph", front: "कौ", reading: "kau", meaning: null, example: null, hint: "औ's mark: the vertical stroke plus TWO over the top. Says kau, the aw of law. Same one-stroke-or-two rule as ए and ऐ." },
        { id: "hi-u3l3-hai", type: "vocab", front: "है", reading: "hai", meaning: "is", accept: ["it is", "there is", "are (one thing)"], example: { jp: "वह मेरे भाई का घर है और यह मेरा घर है।", en: "That is my brother's house and this is my house." }, drill: { jp: "यह मेरा घर है", en: "This is my house" }, hint: "HAI — ह with ऐ's two strokes. THE most common word in Hindi, and it always goes LAST: Hindi says this my house is. For I it is हूँ and for plural or polite हैं, both in unit 8." },
        { id: "hi-u3l3-kaun", type: "vocab", front: "कौन", reading: "kaun", meaning: "who", accept: ["whom", "which person"], example: { jp: "तुम्हारे साथ वह लड़का कौन है?", en: "Who is that boy with you?" }, drill: { jp: "वह लड़का कौन है", en: "Who is that boy" }, hint: "KAUN, with the open aw. Word order: कौन goes where the answer goes, not at the front — वह कौन है, that who is." },
        { id: "hi-u3l3-do", type: "vocab", front: "दो", reading: "do", meaning: "two", accept: ["a couple", "a pair"], example: { jp: "इस शहर में मेरे दो भाई रहते हैं।", en: "My two brothers live in this city." }, drill: { jp: "मेरे दो भाई हैं", en: "I have two brothers" }, hint: "DO — dental द with ओ's mark. It is also the command give, said to a friend, so दो पानी can be two waters or give water depending on where it sits." },
      ],
    },
    {
      id: "hi-u3l4",
      unit: 3,
      lesson: 4,
      title: "य व — this, that, three, four",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Point at something near you and something far from you, and count to four.",
      items: [
        { id: "hi-u3l4-letterya", type: "glyph", front: "य", reading: "ya", meaning: null, example: null, hint: "Says ya, the y in yes. Watch it against प (pa) — य has the extra loop on the left." },
        { id: "hi-u3l4-letterva", type: "glyph", front: "व", reading: "va", meaning: null, example: null, hint: "Says va, halfway between English v and w — put your teeth loosely near your lip and do not bite. Compare ब (ba): व's crossbar does not close on the left." },
        { id: "hi-u3l4-yah", type: "vocab", front: "यह", reading: "yah", meaning: "this", accept: ["it", "he", "she", "this one"], example: { jp: "वह किताब तुम्हारी है और यह मेरी किताब है।", en: "That book is yours and this is my book." }, drill: { jp: "यह मेरी किताब है", en: "This is my book" }, hint: "Spelled यह, but almost always SAID yeh. Near things and near people: it is also he and she when the person is right there. Hindi does not have separate words for he and she." },
        { id: "hi-u3l4-vah", type: "vocab", front: "वह", reading: "vah", meaning: "that", accept: ["he", "she", "that one", "it (far)"], example: { jp: "उसमें कोई नहीं रहता, पर वह घर बड़ा है।", en: "Nobody lives in it, but that house is big." }, drill: { jp: "वह घर बड़ा है", en: "That house is big" }, hint: "Spelled वह, said voh. The far partner of यह, and the ordinary word for he and she about someone not present. यह and वह are the whole pointing system." },
        { id: "hi-u3l4-tiin", type: "vocab", front: "तीन", reading: "tiin", meaning: "three", accept: ["3"], example: { jp: "हिंदी बोलने वाले मेरे तीन दोस्त हैं।", en: "I have three friends who speak Hindi." }, drill: { jp: "मेरे तीन दोस्त हैं", en: "I have three friends" }, hint: "TEEN — dental त with the long ी. Say the t with the tongue on the teeth; an English t here sounds like a different word." },
        { id: "hi-u3l4-chaar", type: "vocab", front: "चार", reading: "chaar", meaning: "four", accept: ["4"], example: { jp: "एक हाथ में चार उँगलियाँ हैं।", en: "There are four fingers on a hand." }, drill: { jp: "यहाँ चार कुर्सियाँ हैं", en: "There are four chairs here" }, hint: "CHAAR, with unaspirated च — no puff. Numbers five and up are unit 11's; एक, दो, तीन and चार are here because they are the only numbers spellable with the letters you have." },
      ],
    },
  ],
};
