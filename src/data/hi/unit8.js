// HI Unit 8 — अपना परिचय ("Introducing yourself") — A1
// Where you are from, what you do, and how to ask. The two postpositions से and
// में are carded here, as plain vocabulary, because "where are you from" cannot be
// taught without them — unit1.js §6 records that and reserves का/के/की, को, पर and
// तक for u23. The OBLIQUE case they force (कमरा → कमरे में) appears in examples
// from here on and is taught as a paradigm only in u23.
export const HI_UNIT8 = {
  id: "hi-u8",
  lang: "hi",
  title: "अपना परिचय",
  order: 8,
  stage: "a1",
  lessons: [
    {
      id: "hi-u8l1",
      unit: 8,
      lesson: 1,
      title: "Where you are from",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say which country and city you are from and ask someone else where they live.",
      items: [
        { id: "hi-u8l1-desh", type: "vocab", front: "देश", reading: "desh", meaning: "a country", accept: ["country", "nation", "homeland"], example: { jp: "यहाँ बहुत भाषाएँ हैं, भारत एक बड़ा देश है।", en: "There are many languages here; India is a big country." }, drill: { jp: "भारत एक बड़ा देश है", en: "India is a big country" }, hint: "DESH, masculine — ए's mark on top of द, then श. अपना देश means one's own country and carries the weight English puts in homeland." },
        { id: "hi-u8l1-shahar", type: "vocab", front: "शहर", reading: "shahar", meaning: "a city", accept: ["city", "town"], example: { jp: "मेरा गाँव छोटा है, पर यह शहर बहुत बड़ा है।", en: "My village is small, but this city is very big." }, drill: { jp: "यह शहर बहुत बड़ा है", en: "This city is very big" }, hint: "sha-HAR, masculine, from Persian. It covers city and town both — Hindi does not split them the way English does. The word for village is गाँव, from unit 5." },
        { id: "hi-u8l1-rahnaa", type: "vocab", front: "रहना", reading: "rahnaa", meaning: "to live", accept: ["to stay", "to remain", "to dwell"], example: { jp: "मुझे इस शहर में रहना है, मेरा काम यहाँ है।", en: "I have to live in this city; my work is here." }, drill: { jp: "मुझे यहाँ रहना अच्छा है", en: "Living here is good for me" }, hint: "REH-naa — the middle a is dropped. It means to live somewhere AND to stay or remain, so ठीक रहना is to keep well. The -ना infinitive, like every Hindi verb card." },
        { id: "hi-u8l1-se", type: "vocab", front: "से", reading: "se", meaning: "from", accept: ["with", "by", "than", "since"], example: { jp: "मेरे दोस्त इस शहर से हैं और मैं भारत से हूँ।", en: "My friends are from this city and I am from India." }, drill: { jp: "मैं भारत से हूँ", en: "I am from India" }, hint: "SE, and it comes AFTER the word, not before: भारत से, India-from. That is what a postposition is. It also means with (an instrument), by, and than in comparisons — one small word doing four English prepositions' work." },
        { id: "hi-u8l1-men", type: "vocab", front: "में", reading: "men", meaning: "in", accept: ["inside", "into", "among", "at"], example: { jp: "मेरे कमरे में एक बड़ी किताब है।", en: "There is a big book in my room." }, drill: { jp: "मेरे कमरे में किताब है", en: "There is a book in my room" }, hint: "MEN — म with ए's stroke and the nasal dot. ⚠️ Not मैं (I), which has ऐ's two strokes: main is a person, men is a place. And look at the example: कमरा becomes कमरे in front of में. That shift is unit 23's lesson." },
        { id: "hi-u8l1-bhii", type: "vocab", front: "भी", reading: "bhii", meaning: "also", accept: ["too", "even", "as well"], example: { jp: "मैं भी हिंदी बोलना सीखता हूँ।", en: "I am also learning to speak Hindi." }, drill: { jp: "मैं भी हिंदी सीखता हूँ", en: "I am also learning Hindi" }, hint: "BHEE, breathy भ. ⚠️ POSITION IS MEANING: भी goes straight after the thing it adds. मैं भी आया is I too came; मैं भी is me as well as him — move it and you change who is being included." },
      ],
    },
    {
      id: "hi-u8l2",
      unit: 8,
      lesson: 2,
      title: "What you do",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what your work is, what language you speak and what you are learning.",
      items: [
        { id: "hi-u8l2-karnaa", type: "vocab", front: "करना", reading: "karnaa", meaning: "to do", accept: ["to make", "do", "to perform"], example: { jp: "मुझे यह काम अब करना है, कल नहीं।", en: "I have to do this work now, not tomorrow." }, drill: { jp: "मुझे यह काम करना है", en: "I have to do this work" }, hint: "KAR-naa, the busiest verb in Hindi. It turns nouns into verbs wholesale: काम करना (to work), प्यार करना (to love), बंद करना (to close). Learn it and you have hundreds of verbs." },
        { id: "hi-u8l2-siikhnaa", type: "vocab", front: "सीखना", reading: "siikhnaa", meaning: "to learn", accept: ["learn", "to pick up", "to acquire"], example: { jp: "मुझे हिंदी और अंग्रेज़ी सीखना है।", en: "I have to learn Hindi and English." }, drill: { jp: "मुझे हिंदी सीखना है", en: "I have to learn Hindi" }, hint: "SEEKH-naa — long ी, aspirated ख, middle a dropped. To learn by doing or by being taught. सिखाना, one vowel shorter in the first syllable, is to TEACH — a pair worth keeping apart." },
        { id: "hi-u8l2-jaannaa", type: "vocab", front: "जानना", reading: "jaannaa", meaning: "to know", accept: ["know", "to be aware of"], example: { jp: "मुझे इस शब्द का मतलब जानना है।", en: "I want to know the meaning of this word." }, drill: { jp: "मुझे यह सब जानना है", en: "I want to know all this" }, hint: "JAAN-naa, with a doubled न you must actually say twice — jaan-naa. ⚠️ It is knowing a FACT. Knowing a person or a place is पहचानना, and being able to do something is आना." },
        { id: "hi-u8l2-angrezii", type: "vocab", front: "अंग्रेज़ी", reading: "angrezii", meaning: "English", accept: ["the English language"], example: { jp: "वह अंग्रेज़ी बोलता है और हिंदी भी समझता है।", en: "He speaks English and understands Hindi too." }, drill: { jp: "वह अंग्रेज़ी और हिंदी बोलता है", en: "He speaks English and Hindi" }, hint: "an-gre-ZEE, feminine like हिंदी and every language name. Two things from the script band in one word: the dot before ग grows an ng sound, and ज़ has the nukta, so it is z not j." },
        { id: "hi-u8l2-shikshak", type: "vocab", front: "शिक्षक", reading: "shikshak", meaning: "a teacher", accept: ["teacher", "instructor"], example: { jp: "मेरे शिक्षक हिंदी और अंग्रेज़ी जानते हैं।", en: "My teacher knows Hindi and English." }, drill: { jp: "मेरे शिक्षक हिंदी जानते हैं", en: "My teacher knows Hindi" }, hint: "SHIK-shak, masculine — with क्ष from unit 6. The feminine is शिक्षिका. In school a learner would say टीचर or सर or मैडम; शिक्षक is the proper Hindi word." },
        { id: "hi-u8l2-naukrii", type: "vocab", front: "नौकरी", reading: "naukrii", meaning: "a job", accept: ["employment", "a post", "service"], example: { jp: "उसकी नौकरी इस शहर में है।", en: "His job is in this city." }, drill: { jp: "मेरी नौकरी इस शहर में है", en: "My job is in this city" }, hint: "NAUK-ree, feminine — औ's open aw, then the ौ dropped a syllable: naukrii, not naukarii. ⚠️ It means a SALARIED post, narrower than काम, which is work of any kind." },
      ],
    },
    {
      id: "hi-u8l3",
      unit: 8,
      lesson: 3,
      title: "The question words",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask why, when, how much and whose in Hindi, putting the question word where the answer would go.",
      items: [
        { id: "hi-u8l3-kyon", type: "vocab", front: "क्यों", reading: "kyon", meaning: "why", accept: ["what for", "how come"], example: { jp: "आपका काम कहाँ है, और आप यहाँ क्यों हैं?", en: "Where is your work, and why are you here?" }, drill: { jp: "आप यहाँ क्यों हैं", en: "Why are you here" }, hint: "KYON — क्य stacked, then ओ's mark and the nasal dot. ⚠️ IT DOES NOT GO FIRST. Hindi puts a question word where the answer would sit: आप यहाँ क्यों हैं, you here why are." },
        { id: "hi-u8l3-kab", type: "vocab", front: "कब", reading: "kab", meaning: "when, as a question", accept: ["when", "at what time", "what day"], example: { jp: "आपका काम कल कब है?", en: "When is your work tomorrow?" }, drill: { jp: "आप कब यहाँ हैं", en: "When are you here" }, hint: "KAB, the QUESTION when. ⚠️ Not जब, from unit 2, which is the joining when: जब मैं आया, when I came. कब asks, जब connects — one letter apart and two different jobs." },
        { id: "hi-u8l3-kitnaa", type: "vocab", front: "कितना", reading: "kitnaa", meaning: "how much", accept: ["how many", "how", "to what extent"], example: { jp: "यह किताब कितनी है, और यह फल कितना सस्ता है?", en: "How much is this book, and how cheap is this fruit?" }, drill: { jp: "यह फल कितना सस्ता है", en: "How cheap is this fruit" }, hint: "KIT-naa, and the middle a is dropped. Masculine form; feminine कितनी, and with a plural कितने. It is also how you ask a price: यह कितना है — how much is this." },
        { id: "hi-u8l3-kiskaa", type: "vocab", front: "किसका", reading: "kiskaa", meaning: "whose", accept: ["of whom", "belonging to whom"], example: { jp: "यह किताब किसकी है?", en: "Whose book is this?" }, drill: { jp: "यह घर किसका है", en: "Whose house is this" }, hint: "KIS-kaa — built from कौन plus का (of). ⚠️ It agrees with the THING owned, not the owner: किसका घर but किसकी किताब, exactly like मेरा and मेरी from unit 3." },
        { id: "hi-u8l3-matlab", type: "vocab", front: "मतलब", reading: "matlab", meaning: "a meaning", accept: ["meaning", "sense", "point"], example: { jp: "इस शब्द का मतलब सब जानते हैं।", en: "Everyone knows the meaning of this word." }, drill: { jp: "इस शब्द का मतलब क्या है", en: "What is the meaning of this word" }, hint: "MAT-lab, masculine, from Arabic. The single most useful question a learner has: X का मतलब क्या है. Said alone, मतलब? means what do you mean?" },
        { id: "hi-u8l3-javaab", type: "vocab", front: "जवाब", reading: "javaab", meaning: "an answer", accept: ["answer", "reply", "response"], example: { jp: "वह जवाब ठीक है, और मेरे प्रश्न का जवाब यह है।", en: "That answer is correct, and the answer to my question is this." }, drill: { jp: "मेरे प्रश्न का जवाब यह है", en: "The answer to my question is this" }, hint: "ja-VAAB, masculine, from Arabic — the everyday partner to unit 6's प्रश्न. जवाब देना is to answer; the noun is the card, and करना/देना build the verb." },
      ],
    },
    {
      id: "hi-u8l4",
      unit: 8,
      lesson: 4,
      title: "Meeting people, and how it is going",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask how someone is, say you are happy to meet them, and tell someone to slow down or hurry up.",
      items: [
        { id: "hi-u8l4-kaise", type: "vocab", front: "कैसे", reading: "kaise", meaning: "how", accept: ["in what way", "by what means"], example: { jp: "आप कैसे हैं?", en: "How are you?" }, drill: { jp: "आप अब कैसे हैं", en: "How are you now" }, hint: "KAI-se — ऐ's two strokes, then ए's one. This is the adverb HOW: आप कैसे हैं. The adjective what kind of is कैसा, and it agrees: कैसा घर, कैसी किताब." },
        { id: "hi-u8l4-milnaa", type: "vocab", front: "मिलना", reading: "milnaa", meaning: "to meet", accept: ["meet", "to be found", "to be available"], example: { jp: "आप से मिलना बहुत अच्छा है।", en: "It is very good to meet you." }, drill: { jp: "आप से मिलना अच्छा है", en: "It is good to meet you" }, hint: "MIL-naa, and it takes से: आप से मिलना, to meet WITH you. ⚠️ Second sense, very common: यहाँ पानी मिलता है means water is available here — the same verb, from the thing's point of view." },
        { id: "hi-u8l4-khush", type: "vocab", front: "खुश", reading: "khush", meaning: "happy", accept: ["glad", "pleased", "content"], example: { jp: "मैं आप से मिलकर बहुत खुश हूँ।", en: "I am very happy to meet you." }, drill: { jp: "मैं अब बहुत खुश हूँ", en: "I am very happy now" }, hint: "KHUSH, aspirated ख. ⚠️ It does NOT change for gender — मैं खुश हूँ whether you are a man or a woman, unlike बड़ा/बड़ी. Words borrowed from Persian mostly behave this way." },
        { id: "hi-u8l4-saath", type: "vocab", front: "साथ", reading: "saath", meaning: "with", accept: ["together", "along with", "company"], example: { jp: "मेरे साथ यहाँ मेरा दोस्त है।", en: "My friend is here with me." }, drill: { jp: "मेरे साथ मेरा दोस्त है", en: "My friend is with me" }, hint: "SAATH, with breathy DENTAL थ — tongue on the teeth. ⚠️ Two withs in Hindi: साथ is in company with a person, से is with a tool. And hold the aa: साठ, with the retroflex ठ, is sixty." },
        { id: "hi-u8l4-dhiire", type: "vocab", front: "धीरे", reading: "dhiire", meaning: "slowly", accept: ["gently", "quietly", "softly"], example: { jp: "कृपया धीरे बोलिए।", en: "Please speak slowly." }, drill: { jp: "वह धीरे हिंदी बोलता है", en: "He speaks Hindi slowly" }, hint: "DHEE-re, breathy dental ध. The learner's lifeline: धीरे बोलिए, please speak slowly. Doubled as धीरे-धीरे it means little by little, and it also means softly." },
        { id: "hi-u8l4-jaldii", type: "vocab", front: "जल्दी", reading: "jaldii", meaning: "quickly", accept: ["soon", "early", "hurry"], example: { jp: "मेरा दोस्त जल्दी काम करता है और जल्दी घर पर है।", en: "My friend works quickly and is home early." }, drill: { jp: "वह जल्दी काम करता है", en: "He works quickly" }, hint: "JAL-dee — ल्द stacked. Three jobs in one word: quickly, soon, and early. जल्दी करो is hurry up, and जल्दी आइए is come soon. The opposite of धीरे." },
      ],
    },
  ],
};
