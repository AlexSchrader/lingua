// HI Unit 4 — बाक़ी अक्षर ("The letters that are left") — PRE-A1
// The five consonants and one vowel units 1–3 did not reach, plus the four nukta
// letters — the ones written with a dot underneath, where the dot changes the
// sound outright. ⚠️ क़ ख़ ग़ are deliberately NOT here: Standard Hindi merges them
// with क ख ग, and ग़'s reading would collide with घ's. See unit1.js §7.
// After this lesson every letter a learner needs to type Hindi has been carded.
export const HI_UNIT4 = {
  id: "hi-u4",
  lang: "hi",
  title: "बाक़ी अक्षर",
  order: 4,
  stage: "pre-a1",
  lessons: [
    {
      id: "hi-u4l1",
      unit: 4,
      lesson: 1,
      title: "श ष भ",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the two letters that both say sh, and name the country and the language you are learning.",
      items: [
        { id: "hi-u4l1-lettersha", type: "glyph", front: "श", reading: "sha", meaning: null, example: null, hint: "Says sha, the sh in ship. The ordinary sh of Hindi — शाम, शहर, शब्द all start with it." },
        { id: "hi-u4l1-letterssha", type: "glyph", front: "ष", reading: "ssha", meaning: null, example: null, hint: "The OTHER sh. In Sanskrit it was a retroflex sh; in modern Hindi it is pronounced exactly like श, so this is a SPELLING distinction, not a sound one. Read ssha so the two letters never share one reading. It appears in भाषा and in words borrowed from Sanskrit." },
        { id: "hi-u4l1-letterbha", type: "glyph", front: "भ", reading: "bha", meaning: null, example: null, hint: "ब with a puff of air — voiced and breathy together, like the bh in clubhouse said as one sound. Look for the loop on the left, which ब does not have." },
        { id: "hi-u4l1-shaam", type: "vocab", front: "शाम", reading: "shaam", meaning: "evening", accept: ["the evening", "dusk"], example: { jp: "शाम को हम छत पर बैठते हैं।", en: "In the evening we sit on the roof." }, drill: { jp: "शाम को हम छत पर हैं", en: "In the evening we are on the roof" }, hint: "SHAAM, feminine. शाम को means in the evening — Hindi marks the time with को after the word, not with a word in front of it." },
        { id: "hi-u4l1-bhaarat", type: "vocab", front: "भारत", reading: "bhaarat", meaning: "India", accept: ["Bharat"], example: { jp: "भारत में बहुत भाषाएँ हैं।", en: "There are many languages in India." }, drill: { jp: "भारत में बहुत घर हैं", en: "There are many houses in India" }, hint: "BHAA-rat, masculine, and this is what India calls itself — both names are official, and भारत is the one you will hear inside the country. Breathy भ, then dental र and त." },
        { id: "hi-u4l1-bhaashaa", type: "vocab", front: "भाषा", reading: "bhaashaa", meaning: "a language", accept: ["language", "tongue", "speech"], example: { jp: "भारत में बहुत लोग हिंदी बोलते हैं, और यह एक बड़ी भाषा है।", en: "Many people in India speak Hindi, and it is a big language." }, drill: { jp: "हिंदी एक बड़ी भाषा है", en: "Hindi is a big language" }, hint: "BHAA-shaa, feminine — and it is spelled with ष, not श. That is the one place a learner has to know which sh: the sound gives you no clue, so the spelling has to be learned with the word." },
      ],
    },
    {
      id: "hi-u4l2",
      unit: 4,
      lesson: 2,
      title: "झ फ ऋ",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the last three ordinary letters of the alphabet, including the vowel that only Sanskrit loanwords use.",
      items: [
        { id: "hi-u4l2-letterjha", type: "glyph", front: "झ", reading: "jha", meaning: null, example: null, hint: "ज with a puff — voiced and breathy. It ends समझना, to understand, which is why you will meet it early and often." },
        { id: "hi-u4l2-letterpha", type: "glyph", front: "फ", reading: "pha", meaning: null, example: null, hint: "प with a hard puff of air. ⚠️ It is p-then-breath, NOT the f of fish — that sound is फ़, with a dot, next lesson. Keep the two apart or फल (fruit) turns into a different word." },
        { id: "hi-u4l2-vowelri", type: "glyph", front: "ऋ", reading: "ri", meaning: null, example: null, hint: "A vowel, not a consonant, and the rarest one. In Sanskrit it was a vowel-r; modern Hindi just says ri. You meet it in borrowed words — ऋतु, season — and its mark form appears in कृपया, please." },
        { id: "hi-u4l2-phal", type: "vocab", front: "फल", reading: "phal", meaning: "fruit", accept: ["a fruit", "result"], example: { jp: "यहाँ यह फल सस्ता और बहुत अच्छा है।", en: "Here this fruit is cheap and very good." }, drill: { jp: "यह फल बहुत अच्छा है", en: "This fruit is very good" }, hint: "PHAL, masculine, with the puff: p-hal, not fal. It also means a result or outcome, which is the same metaphor English has in the fruits of your labour." },
        { id: "hi-u4l2-jhuuth", type: "vocab", front: "झूठ", reading: "jhuuth", meaning: "a lie", accept: ["lie", "falsehood", "untruth"], example: { jp: "यह झूठ है, सच नहीं।", en: "This is a lie, not the truth." }, drill: { jp: "यह झूठ है सच नहीं", en: "This is a lie not the truth" }, hint: "JHOOTH, masculine — breathy झ, long ू underneath, then retroflex ठ. The exact opposite of सच, which you met in unit 2." },
        { id: "hi-u4l2-ritu", type: "vocab", front: "ऋतु", reading: "ritu", meaning: "a season", accept: ["season", "time of year"], example: { jp: "हर ऋतु का अपना फल है, और भारत में छह ऋतुएँ हैं।", en: "Each season has its own fruit, and there are six seasons in India." }, drill: { jp: "यह ऋतु बहुत अच्छी है", en: "This season is very nice" }, hint: "RI-tu, feminine, and a good word to meet ऋ in. The Indian calendar counts SIX seasons, not four — so this is not a word that maps onto English one-for-one." },
      ],
    },
    {
      id: "hi-u4l3",
      unit: 4,
      lesson: 3,
      title: "The dot underneath: ज़ फ़ ड़ ढ़",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the four letters whose sound is changed by a dot, and say big and to read.",
      items: [
        { id: "hi-u4l3-letterza", type: "glyph", front: "ज़", reading: "za", meaning: null, example: null, hint: "ज with a dot under it, and the dot turns j into z. It is a real distinction in Hindi: ज़रा (a little) is not जरा. Type the letter, then the nukta — two keystrokes, one letter." },
        { id: "hi-u4l3-letterfa", type: "glyph", front: "फ़", reading: "fa", meaning: null, example: null, hint: "फ with a dot: the f of fish, made with lip and teeth. फ़ोन, फ़िल्म, माफ़ — nearly every word with it came in from Persian, Arabic or English." },
        { id: "hi-u4l3-letterrra", type: "glyph", front: "ड़", reading: "rra", meaning: null, example: null, hint: "ड with a dot, and the sound stops being a d — the tongue FLAPS forward off the roof of the mouth. Read rra. It never starts a word, so you will always meet it in the middle: बड़ा, सड़क, घड़ी, लड़का." },
        { id: "hi-u4l3-letterrrha", type: "glyph", front: "ढ़", reading: "rrha", meaning: null, example: null, hint: "The breathy partner of ड़ — flap the tongue and add a puff. Rare, but it is in पढ़ना, to read, and बूढ़ा, elderly, so you cannot skip it." },
        { id: "hi-u4l3-baraa", type: "vocab", front: "बड़ा", reading: "baraa", meaning: "big", accept: ["large", "great", "elder"], example: { jp: "मेरा बड़ा भाई अब भारत में है।", en: "My elder brother is in India now." }, drill: { jp: "यह घर बहुत बड़ा है", en: "This house is very big" }, hint: "ba-RAA, with the flapped ड़ — the reading is baraa, not badaa. Carded in the masculine; the feminine is बड़ी, and unit 24 does the agreement. It also means elder: बड़ा भाई is big brother." },
        { id: "hi-u4l3-parhnaa", type: "vocab", front: "पढ़ना", reading: "parhnaa", meaning: "to read", accept: ["to study", "read", "to recite"], example: { jp: "मुझे हिंदी पढ़ना अच्छा लगता है।", en: "I like reading Hindi." }, drill: { jp: "मुझे हिंदी पढ़ना है", en: "I have to read Hindi" }, hint: "PARH-naa — breathy flapped ढ़, and the middle a is silent, so parhnaa not padhanaa. It covers both to read and to study, which is why a student is called a पढ़ने वाला." },
      ],
    },
    {
      id: "hi-u4l4",
      unit: 4,
      lesson: 4,
      title: "Every letter now: six words to prove it",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read six ordinary Hindi words cold, using any letter in the alphabet, and describe something as big, small, new or old.",
      items: [
        { id: "hi-u4l4-chhotaa", type: "vocab", front: "छोटा", reading: "chhotaa", meaning: "small", accept: ["little", "young", "younger"], example: { jp: "मेरा छोटा भाई स्कूल में है।", en: "My younger brother is at school." }, drill: { jp: "यह कमरा बहुत छोटा है", en: "This room is very small" }, hint: "CHHO-taa — breathy छ, ओ's mark, retroflex ट. The opposite of बड़ा in every sense, size and age both: छोटी बहन is little sister." },
        { id: "hi-u4l4-kaam", type: "vocab", front: "काम", reading: "kaam", meaning: "work", accept: ["a job", "task", "business"], example: { jp: "कल काम कम था, आज मेरा काम बहुत है।", en: "Yesterday there was less work; today I have a lot of work." }, drill: { jp: "आज मेरा काम बहुत है", en: "I have a lot of work today" }, hint: "KAAM, masculine. ⚠️ Hold the aa: काम is work, कम (unit 1) is less. One mark apart on the page and two different words in the ear." },
        { id: "hi-u4l4-nayaa", type: "vocab", front: "नया", reading: "nayaa", meaning: "new", accept: ["fresh", "brand new"], example: { jp: "पुराना फ़ोन अब बंद है, यह मेरा नया फ़ोन है।", en: "The old phone is switched off now; this is my new phone." }, drill: { jp: "यह मेरा नया फ़ोन है", en: "This is my new phone" }, hint: "na-YAA. Masculine form; feminine नई, which looks nothing like it — that pair is worth noticing now and learning properly in unit 24." },
        { id: "hi-u4l4-puraanaa", type: "vocab", front: "पुराना", reading: "puraanaa", meaning: "old", accept: ["ancient", "former", "worn out"], example: { jp: "यह किताब बहुत पुरानी है।", en: "This book is very old." }, drill: { jp: "यह घर बहुत पुराना है", en: "This house is very old" }, hint: "pu-RAA-naa. ⚠️ Only for THINGS. An old PERSON is बूढ़ा — calling a person पुराना means long-standing, as in an old friend, and nothing about their age." },
        { id: "hi-u4l4-thiik", type: "vocab", front: "ठीक", reading: "thiik", meaning: "fine", accept: ["okay", "correct", "alright", "right"], example: { jp: "सब ठीक है, कोई बात नहीं।", en: "Everything is fine, no problem." }, drill: { jp: "मेरा काम ठीक है", en: "My work is fine" }, hint: "THEEK, with retroflex-and-breathy ठ. The single most useful word in the language: it answers how are you, agrees to a plan, and says that's correct." },
        { id: "hi-u4l4-bahut", type: "vocab", front: "बहुत", reading: "bahut", meaning: "very", accept: ["a lot", "much", "many"], example: { jp: "बच्चे को यह पानी अच्छा लगता है, पर यह बहुत ठंडा है।", en: "The child likes this water, but it is very cold." }, drill: { jp: "यह पानी बहुत ठंडा है", en: "This water is very cold" }, hint: "ba-HUT. It does two jobs: very in front of an adjective (बहुत बड़ा) and a lot in front of a noun (बहुत काम). Same word, no change." },
      ],
    },
  ],
};
