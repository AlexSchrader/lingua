// HI Unit 2 — वर्णमाला · २ ("The alphabet, part 2") — PRE-A1
// The four remaining independent vowels, then the aspirated and retroflex
// consonants — the two contrasts English does not have and Hindi cannot do
// without. Words in this unit still carry the inherent a only; the vowel marks
// arrive in u3. Conventions: see unit1.js's header, which is binding.
export const HI_UNIT2 = {
  id: "hi-u2",
  lang: "hi",
  title: "वर्णमाला · २",
  order: 2,
  stage: "pre-a1",
  lessons: [
    {
      id: "hi-u2l1",
      unit: 2,
      lesson: 1,
      title: "ए ऐ ओ औ — the last four vowels",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the four remaining Devanagari vowel letters and count to one and say and.",
      items: [
        { id: "hi-u2l1-vowele", type: "glyph", front: "ए", reading: "e", meaning: null, example: null, hint: "Says ay, the e in they — one steady sound, never the ei of eight. Hindi has no short partner for it, so e is always long." },
        { id: "hi-u2l1-vowelai", type: "glyph", front: "ऐ", reading: "ai", meaning: null, example: null, hint: "ए with one extra stroke on top, and the sound opens right up: the a in cat, held. है (is) and मैं (I) both use it." },
        { id: "hi-u2l1-vowelo", type: "glyph", front: "ओ", reading: "o", meaning: null, example: null, hint: "Says oh, the o in go, lips rounded and held. Built on आ with a stroke over the top." },
        { id: "hi-u2l1-vowelau", type: "glyph", front: "औ", reading: "au", meaning: null, example: null, hint: "ओ with a second stroke, and the sound opens like ऐ did: the aw in law. कौन (who) and और (and) both use it." },
        { id: "hi-u2l1-ek", type: "vocab", front: "एक", reading: "ek", meaning: "one", accept: ["a", "an", "a single"], example: { jp: "मेरे परिवार में एक भाई और एक बहन हैं।", en: "In my family there are one brother and one sister." }, drill: { jp: "मेरा एक भाई है", en: "I have one brother" }, hint: "EK. It is the number one AND the nearest thing Hindi has to a or an — एक किताब is a book. Two letters, both from this lesson." },
        { id: "hi-u2l1-aur", type: "vocab", front: "और", reading: "aur", meaning: "and", accept: ["also", "plus", "more"], example: { jp: "हम घर पर हिंदी और अंग्रेज़ी दोनों बोलते हैं।", en: "At home we speak both Hindi and English." }, drill: { jp: "हम हिंदी और अंग्रेज़ी बोलते हैं", en: "We speak Hindi and English" }, hint: "AUR, with the open aw of औ. It also means more — और पानी is more water — so listen for which job it is doing." },
      ],
    },
    {
      id: "hi-u2l2",
      unit: 2,
      lesson: 2,
      title: "The puff of air: ख घ च छ",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Hear and produce the aspirated consonants, and read the Hindi words for a house and truth.",
      items: [
        { id: "hi-u2l2-letterkha", type: "glyph", front: "ख", reading: "kha", meaning: null, example: null, hint: "क plus a hard puff of air — hold a hand in front of your mouth and feel it. In Hindi the puff is not decoration: क and ख are two different letters and change the word." },
        { id: "hi-u2l2-lettergha", type: "glyph", front: "घ", reading: "gha", meaning: null, example: null, hint: "ग with breath behind it — voiced and breathy at once, like the gh in doghouse said as one sound. It opens घर, house." },
        { id: "hi-u2l2-lettercha", type: "glyph", front: "च", reading: "cha", meaning: null, example: null, hint: "Says cha, the ch in cheese, with NO puff of air. Its breathy partner छ is next." },
        { id: "hi-u2l2-letterchha", type: "glyph", front: "छ", reading: "chha", meaning: null, example: null, hint: "च with the puff. Written chha here so it never shares a reading with च. The shape is a circle with a tail — nothing like च, which is the one mercy in this pair." },
        { id: "hi-u2l2-ghar", type: "vocab", front: "घर", reading: "ghar", meaning: "a house", accept: ["house", "home", "a home"], example: { jp: "मेरा कमरा बहुत छोटा है, पर हमारा घर बड़ा है।", en: "My room is very small, but our house is big." }, drill: { jp: "हमारा घर बड़ा है", en: "Our house is big" }, hint: "GHAR, masculine, and one syllable — the r ends the word, so घ's built-in a is the only vowel. Hindi uses घर for both house and home." },
        { id: "hi-u2l2-sach", type: "vocab", front: "सच", reading: "sach", meaning: "truth", accept: ["the truth", "true"], example: { jp: "मेरी बात सच है, झूठ नहीं।", en: "What I say is true, not a lie." }, drill: { jp: "यह बात सच है", en: "This thing is true" }, hint: "SACH, masculine, with the unaspirated च — no puff. सच है is how you say that's true; सच में means really." },
      ],
    },
    {
      id: "hi-u2l3",
      unit: 2,
      lesson: 3,
      title: "Tongue curled back: ज ट ठ ड",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Tell a retroflex ट from a dental त by ear, and read the words for when and a roof.",
      items: [
        { id: "hi-u2l3-letterja", type: "glyph", front: "ज", reading: "ja", meaning: null, example: null, hint: "Says ja, the j in jam. With a dot underneath (ज़) it becomes z — that letter is unit 4." },
        { id: "hi-u2l3-letterta", type: "glyph", front: "ट", reading: "tta", meaning: null, example: null, hint: "THE RETROFLEX t: curl the tongue tip up and back and strike the roof of the mouth. It is much closer to the English t than unit 1's त is. Read tta here, with the doubled letter meaning curled back." },
        { id: "hi-u2l3-letterttha", type: "glyph", front: "ठ", reading: "ttha", meaning: null, example: null, hint: "ट with a puff of air — curled back AND breathy. ठीक (fine) starts with it." },
        { id: "hi-u2l3-letterdda", type: "glyph", front: "ड", reading: "dda", meaning: null, example: null, hint: "The retroflex d, tongue curled back. Compare unit 1's द, tongue on the teeth. With a dot under it (ड़) the sound flaps instead — unit 4." },
        { id: "hi-u2l3-jab", type: "vocab", front: "जब", reading: "jab", meaning: "when", accept: ["at the time when", "whenever"], example: { jp: "जब काम कम है तब हम घर जाते हैं।", en: "When there is less work, we go home." }, drill: { jp: "जब तुम यहाँ हो तब अच्छा है", en: "When you are here then it is good" }, hint: "JAB — the joining when, not the question one (that is कब, unit 8). Hindi pairs it with तब: जब … तब …, when … then …" },
        { id: "hi-u2l3-chhat", type: "vocab", front: "छत", reading: "chhat", meaning: "a roof", accept: ["roof", "terrace", "rooftop"], example: { jp: "शाम को छत पर हवा अच्छी है और वहाँ एक पंखा भी है।", en: "The air on the roof is nice in the evening, and there is a fan there too." }, drill: { jp: "छत पर एक पंखा है", en: "There is a fan on the roof" }, hint: "CHHAT, feminine — breathy छ then the dental त. In India the छत is also the flat rooftop people sit on in the evening." },
      ],
    },
    {
      id: "hi-u2l4",
      unit: 2,
      lesson: 4,
      title: "ढ ण थ ध — and the alphabet is half done",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the last of the retroflex and dental series and say yesterday and all in Hindi.",
      items: [
        { id: "hi-u2l4-letterddha", type: "glyph", front: "ढ", reading: "ddha", meaning: null, example: null, hint: "ड with a puff of air: retroflex AND breathy. Rare on its own — you will meet it most often with a dot under it (ढ़), in पढ़ना, to read." },
        { id: "hi-u2l4-letternna", type: "glyph", front: "ण", reading: "nna", meaning: null, example: null, hint: "The retroflex n — tongue curled back. It NEVER starts a Hindi word, so you will only ever read it in the middle of one (प्रमाण, कारण). Read nna to keep it apart from न." },
        { id: "hi-u2l4-lettertha", type: "glyph", front: "थ", reading: "tha", meaning: null, example: null, hint: "त with a puff: tongue on the TEETH and breathy. Not the th of think — Hindi has no such sound. साथ (with) ends with it." },
        { id: "hi-u2l4-letterdha", type: "glyph", front: "ध", reading: "dha", meaning: null, example: null, hint: "द with a puff: teeth and breathy, voiced. It opens धन्यवाद, thank you. Watch the shape against घ (gha) — ध has the loop on the left, घ on the right." },
        { id: "hi-u2l4-kal", type: "vocab", front: "कल", reading: "kal", meaning: "yesterday", accept: ["tomorrow", "the other day"], example: { jp: "आज हम काम पर हैं, कल हम घर पर थे।", en: "Today we are at work; yesterday we were at home." }, drill: { jp: "कल हम घर पर थे", en: "Yesterday we were at home" }, hint: "KAL, and this is the famous one: कल means BOTH yesterday and tomorrow. The verb tense tells you which — कल था was yesterday, कल होगा is tomorrow." },
        { id: "hi-u2l4-sab", type: "vocab", front: "सब", reading: "sab", meaning: "all", accept: ["everyone", "everything", "every"], example: { jp: "कोई बाहर नहीं है, सब लोग यहाँ हैं।", en: "Nobody is outside; all the people are here." }, drill: { jp: "सब लोग यहाँ हैं", en: "All the people are here" }, hint: "SAB — all of them, people or things. सब कुछ is everything; सब लोग is everyone. Rhymes with अब, जब and कब, all short joining words." },
      ],
    },
  ],
};
