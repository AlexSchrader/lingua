// HI Unit 9 — विदेशी शब्द ("Words from elsewhere") — A1
// ⚠️ THIS SLOT'S SCAFFOLD TITLE WAS "Characters 1" AND THAT IS A JAPANESE SLOT.
// It names the interleaved kanji strand — a band of character units spread through
// A1 because Japanese cannot finish its script in six units. HINDI CAN, and does:
// the whole alphabet is carded by u6. There are FIVE of these stubs in the hi
// scaffold (u9, u12, u15, u18, u21) and every one has to be rethemed; lint
// hard-errors on /^Characters \d+$/, so it is compulsory as well as correct.
// unit1.js §10 has the rule and the reasoning.
//
// THE RETHEME, and why this one: LOANWORDS. Hindi has absorbed English, Persian
// and Arabic wholesale, so a whole unit exists where the MEANING is nearly free
// and the only work is decoding Devanagari — which is exactly what the slot was
// for in Japanese, translated into Hindi's terms. Russian's u9 does the same with
// internationalisms.
//
// ⚠️ EVERY WORD HERE WAS CHOSEN TO AVOID ॉ (the candra-o of डॉक्टर), which this
// course defers to A2 — see unit1.js §7. That is why the unit has टिकट and मेज़ and
// no डॉक्टर.
// ⚠️ AND EVERY GLOSS WAS CHECKED AGAINST ITS OWN READING. `checkProduce` accepts
// the romaji reading for a Hindi vocab item, so a loanword glossed with the English
// word it came from can be answered by reading the prompt aloud. पेन is carded "a
// ballpoint pen" for exactly that reason: gloss "a pen" normalises to "pen", which
// IS its reading. Zero free passes in this unit — see unit1.js §9.
export const HI_UNIT9 = {
  id: "hi-u9",
  lang: "hi",
  title: "विदेशी शब्द",
  order: 9,
  stage: "a1",
  lessons: [
    {
      id: "hi-u9l1",
      unit: 9,
      lesson: 1,
      title: "Getting around",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the Devanagari spelling of a travel word you already know in English and say it the Hindi way.",
      items: [
        { id: "hi-u9l1-tren", type: "vocab", front: "ट्रेन", reading: "tren", meaning: "a railway train", accept: ["train", "the railway"], example: { jp: "स्टेशन पर एक बड़ी ट्रेन है।", en: "There is a big train at the station." }, drill: { jp: "ट्रेन अब स्टेशन पर है", en: "The train is at the station now" }, hint: "TREN, feminine — ट्र is retroflex ट with the र-stroke under it, so the t is curled back and much closer to English than a dental त would be. Hindi has रेलगाड़ी too, but ट्रेन is what you will hear." },
        { id: "hi-u9l1-tikat", type: "vocab", front: "टिकट", reading: "tikat", meaning: "a ticket", accept: ["ticket", "a stamp"], example: { jp: "बैग के अंदर मेरा टिकट और मेरा पेन है।", en: "My ticket and my pen are inside the bag." }, drill: { jp: "मेरा टिकट कहाँ है", en: "Where is my ticket" }, hint: "TI-kat, masculine — and note the reading: two syllables, not three, because the final ट has no a. It also means a postage stamp." },
        { id: "hi-u9l1-steshan", type: "vocab", front: "स्टेशन", reading: "steshan", meaning: "a station", accept: ["railway station", "the station"], example: { jp: "यह स्टेशन इस शहर में बहुत बड़ा है।", en: "This station is very big in this city." }, drill: { jp: "स्टेशन इस सड़क पर है", en: "The station is on this road" }, hint: "STE-shan, masculine — स्ट is the स्+ट halant stack from unit 6, and the whole word starts on a consonant cluster, which Hindi is perfectly happy with." },
        { id: "hi-u9l1-havaaiijahaaz", type: "vocab", front: "हवाई जहाज़", reading: "havaaiijahaaz", meaning: "an aeroplane", accept: ["plane", "aircraft", "airplane"], example: { jp: "हवाई जहाज़ इस ट्रेन से बहुत जल्दी है।", en: "An aeroplane is much quicker than this train." }, drill: { jp: "हवाई जहाज़ ट्रेन से जल्दी है", en: "An aeroplane is quicker than a train" }, hint: "ha-vaa-ii ja-HAAZ, masculine — literally air ship, and NOT a loan from English: हवा is Persian for air and जहाज़ is Arabic for vessel. The ज़ has a nukta, so it ends in z." },
        { id: "hi-u9l1-taiksii", type: "vocab", front: "टैक्सी", reading: "taiksii", meaning: "a taxi", accept: ["cab", "taxicab"], example: { jp: "एक टैक्सी दरवाज़े के बाहर है।", en: "A taxi is outside the door." }, drill: { jp: "एक टैक्सी घर के बाहर है", en: "A taxi is outside the house" }, hint: "TAIK-see, feminine — retroflex ट with ऐ's two strokes, then क्स. Hindi makes almost every borrowed noun ending in -ी feminine, which is why it takes बड़ी and पुरानी rather than बड़ा and पुराना." },
        { id: "hi-u9l1-saaikil", type: "vocab", front: "साइकिल", reading: "saaikil", meaning: "a bicycle", accept: ["bike", "cycle", "pushbike"], example: { jp: "मेरे दोस्त की साइकिल नई है।", en: "My friend's bicycle is new." }, drill: { jp: "यह साइकिल बहुत पुरानी है", en: "This bicycle is very old" }, hint: "SAA-i-kil, feminine — and look at how Hindi wrote the English diphthong: सा + इ, using the INDEPENDENT vowel इ in the middle of a word because there is no consonant for its mark to hang on." },
      ],
    },
    {
      id: "hi-u9l2",
      unit: 9,
      lesson: 2,
      title: "Things in a room",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name the furniture and the devices in a room in Hindi.",
      items: [
        { id: "hi-u9l2-mez", type: "vocab", front: "मेज़", reading: "mez", meaning: "a table", accept: ["desk", "the table"], example: { jp: "मेरे कमरे में एक मेज़ और दो कुर्सियाँ हैं।", en: "There are a table and two chairs in my room." }, drill: { jp: "कमरे में एक मेज़ है", en: "There is a table in the room" }, hint: "MEZ, feminine, from Persian — ज़ with the nukta, so z and not j. One syllable: the ज़ takes no a. A desk is also मेज़; Hindi does not split the two." },
        { id: "hi-u9l2-kursii", type: "vocab", front: "कुर्सी", reading: "kursii", meaning: "a chair", accept: ["seat", "the chair"], example: { jp: "मेरे कमरे की यह कुर्सी बहुत पुरानी है।", en: "This chair in my room is very old." }, drill: { jp: "यह कुर्सी बहुत पुरानी है", en: "This chair is very old" }, hint: "KUR-see, feminine, from Arabic — and there is the र-hook from unit 6 riding on top of the स. Used figuratively too: कुर्सी means political office, exactly as English says the chair." },
        { id: "hi-u9l2-pankhaa", type: "vocab", front: "पंखा", reading: "pankhaa", meaning: "a fan", accept: ["ceiling fan", "the fan"], example: { jp: "इस कमरे का पंखा अब बंद है।", en: "The fan in this room is off now." }, drill: { jp: "छत का पंखा बंद है", en: "The ceiling fan is off" }, hint: "PAN-khaa, masculine — and here is the anusvāra rule from unit 5 doing real work: the dot sits before ख, a velar, so it is said ng, not n. A Hindi house lives under its पंखा." },
        { id: "hi-u9l2-tiivii", type: "vocab", front: "टीवी", reading: "tiivii", meaning: "a television", accept: ["TV", "telly", "the television"], example: { jp: "टीवी अब बंद है।", en: "The television is off now." }, drill: { jp: "कमरे में टीवी बंद है", en: "The television in the room is off" }, hint: "TEE-vee, masculine — the two English letters written as two Hindi syllables. Retroflex ट at the start, because English T is closer to ट than to त." },
        { id: "hi-u9l2-fon", type: "vocab", front: "फ़ोन", reading: "fon", meaning: "a telephone", accept: ["phone", "mobile", "the phone"], example: { jp: "बैग के अंदर नहीं, मेरा फ़ोन मेज़ पर है।", en: "Not inside the bag — my phone is on the table." }, drill: { jp: "मेरा फ़ोन मेज़ पर है", en: "My phone is on the table" }, hint: "FON, masculine — फ़ with the nukta, so f and not the aspirated ph of फल. This is where that dot earns its keep: फ़ोन is phone, फोन would be p-hone." },
        { id: "hi-u9l2-laait", type: "vocab", front: "लाइट", reading: "laait", meaning: "an electric light", accept: ["light", "the light", "a lamp"], example: { jp: "कमरे की लाइट अब बंद है।", en: "The light in the room is off now." }, drill: { jp: "कमरे की लाइट बंद है", en: "The light in the room is off" }, hint: "LAA-it, feminine — the independent vowel इ in the middle again, exactly as in साइकिल. The Hindi word is रोशनी, but for a switch on a wall everyone says लाइट." },
      ],
    },
    {
      id: "hi-u9l3",
      unit: 9,
      lesson: 3,
      title: "Out in the city",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read a Hindi sign or address and work out which kind of place it names.",
      items: [
        { id: "hi-u9l3-baink", type: "vocab", front: "बैंक", reading: "baink", meaning: "a bank", accept: ["the bank"], example: { jp: "स्टेशन के बाहर इस सड़क पर बैंक है।", en: "The bank is on this road, outside the station." }, drill: { jp: "बैंक इस सड़क पर है", en: "The bank is on this road" }, hint: "BAINK, masculine — बै with ऐ's two strokes, then the nasal dot before क, so it is said ng. Read it and you have read the rule from unit 5 lesson 1 in the wild." },
        { id: "hi-u9l3-hotal", type: "vocab", front: "होटल", reading: "hotal", meaning: "a hotel", accept: ["a restaurant", "inn", "eatery"], example: { jp: "यहाँ का पानी शुद्ध है और यह होटल बहुत सस्ता है।", en: "The water here is pure and this hotel is very cheap." }, drill: { jp: "यह होटल बहुत सस्ता है", en: "This hotel is very cheap" }, hint: "HO-tal, masculine, retroflex ट. ⚠️ IT DOES NOT MEAN WHAT YOU THINK: in India a होटल is very often just a small restaurant with no rooms at all. A place to sleep is usually called a होटल too, so ask." },
        { id: "hi-u9l3-pulis", type: "vocab", front: "पुलिस", reading: "pulis", meaning: "the police", accept: ["police force", "a policeman"], example: { jp: "सड़क अब बंद है, और पुलिस स्टेशन के बाहर है।", en: "The road is closed now, and the police are outside the station." }, drill: { jp: "पुलिस स्टेशन के बाहर है", en: "The police are outside the station" }, hint: "PU-lis, feminine, and grammatically SINGULAR in Hindi: पुलिस आई है, the police has come. Two syllables — the final स takes no a." },
        { id: "hi-u9l3-paark", type: "vocab", front: "पार्क", reading: "paark", meaning: "a public park", accept: ["park", "gardens"], example: { jp: "बच्चे शाम को पार्क में हैं।", en: "The children are in the park in the evening." }, drill: { jp: "बच्चा शाम को पार्क में है", en: "The child is in the park in the evening" }, hint: "PAARK, masculine — and the र has become the little hook riding on top of the क, the र्क shape from unit 6. The Hindi word is उद्यान, which you will see on the gate and never hear in the street." },
        { id: "hi-u9l3-aspataal", type: "vocab", front: "अस्पताल", reading: "aspataal", meaning: "a hospital", accept: ["the hospital", "clinic"], example: { jp: "शहर के अंदर एक बड़ा और नया अस्पताल है।", en: "There is a big new hospital inside the city." }, drill: { jp: "अस्पताल शहर के अंदर है", en: "The hospital is inside the city" }, hint: "as-pa-TAAL, masculine — English hospital reshaped by Hindi: it lost its h and grew an अ in front, because Hindi does not like a word starting sp-. The स्प stack is from unit 6." },
        { id: "hi-u9l3-dukaan", type: "vocab", front: "दुकान", reading: "dukaan", meaning: "a shop", accept: ["store", "the shop", "stall"], example: { jp: "इस सड़क की दुकान शाम को बंद है।", en: "The shop on this road is closed in the evening." }, drill: { jp: "यह दुकान शाम को बंद है", en: "This shop is closed in the evening" }, hint: "du-KAAN, feminine, from Arabic — the one word in this lesson that came from the west rather than from English. The shopkeeper is a दुकानदार." },
      ],
    },
    {
      id: "hi-u9l4",
      unit: 9,
      lesson: 4,
      title: "On the desk",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name the things you write and work with in Hindi and ask where one of them is.",
      items: [
        { id: "hi-u9l4-pen", type: "vocab", front: "पेन", reading: "pen", meaning: "a ballpoint pen", accept: ["biro", "ballpoint"], example: { jp: "मेरा पेन मेज़ पर नहीं है।", en: "My pen is not on the table." }, drill: { jp: "मेरा पेन मेज़ पर है", en: "My pen is on the table" }, hint: "PEN, masculine, unaspirated प — no puff. ⚠️ Carded as a ballpoint pen on purpose: glossed just a pen, the answer would be readable straight off the prompt, because the gloss and the reading would be the same word. The Hindi word is क़लम." },
        { id: "hi-u9l4-pensil", type: "vocab", front: "पेंसिल", reading: "pensil", meaning: "a pencil", accept: ["lead pencil"], example: { jp: "बच्चे की पेंसिल छोटी है।", en: "The child's pencil is small." }, drill: { jp: "यह पेंसिल बहुत छोटी है", en: "This pencil is very small" }, hint: "PEN-sil, feminine — the nasal dot before स, a dental, so it is said n. Note the gender difference from पेन, which is masculine: borrowed words take their gender by feel, not by rule." },
        { id: "hi-u9l4-kaagaz", type: "vocab", front: "कागज़", reading: "kaagaz", meaning: "paper", accept: ["a sheet of paper", "a document"], example: { jp: "इस कागज़ पर मेरा नाम और मेरा शहर है।", en: "My name and my city are on this paper." }, drill: { jp: "इस कागज़ पर मेरा नाम है", en: "My name is on this paper" }, hint: "KAA-gaz, masculine, from Persian — ज़ with the nukta. In the plural कागज़ात it means official documents, which is the form you will meet at any counter in India." },
        { id: "hi-u9l4-kampyuutar", type: "vocab", front: "कंप्यूटर", reading: "kampyuutar", meaning: "a computer", accept: ["PC", "the computer"], example: { jp: "मेरा कंप्यूटर पुराना है, पर अब भी ठीक है।", en: "My computer is old, but it is still fine." }, drill: { jp: "मेरा कंप्यूटर बहुत पुराना है", en: "My computer is very old" }, hint: "kam-PYOO-tar, masculine — and this word is a tour of the whole script band: the dot before प says m, प्य is a halant stack, ू is the long under-mark, and the final र takes no a." },
        { id: "hi-u9l4-baig", type: "vocab", front: "बैग", reading: "baig", meaning: "a bag", accept: ["a rucksack", "holdall", "satchel"], example: { jp: "मेज़ पर नहीं, किताब मेरे बैग के अंदर है।", en: "Not on the table — the book is inside my bag." }, drill: { jp: "किताब मेरे बैग के अंदर है", en: "The book is inside my bag" }, hint: "BAIG, masculine — बै with ऐ's two strokes, said closer to English bag than to beg. The Hindi word is थैला, which is specifically a cloth one." },
        { id: "hi-u9l4-gharii", type: "vocab", front: "घड़ी", reading: "gharii", meaning: "a clock", accept: ["watch", "a wristwatch", "timepiece"], example: { jp: "यह घड़ी मेरे दोस्त की है।", en: "This watch is my friend's." }, drill: { jp: "यह घड़ी बहुत पुरानी है", en: "This watch is very old" }, hint: "gha-REE, feminine — breathy घ then the flapped ड़, so the reading is gharii and not ghadii. ⚠️ Hold the distinction from घर (house): घर is ghar, घड़ी is gharii. One word covers both a clock and a wristwatch." },
      ],
    },
  ],
};
