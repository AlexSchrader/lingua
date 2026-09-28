// HI Unit 5 — बिंदु और चुप अ ("The dot, and the silent a") — PRE-A1
// THE TWO READING RULES PRINT DOES NOT TELL YOU. Every letter is taught by now, so
// a learner can already sound out any word — badly, in two specific ways:
//   1. NASALISATION. ं and ँ carry no sound of their own; they change the vowel or
//      supply a nasal consonant, and which one depends on what follows.
//   2. THE INHERENT a YOU NEVER SAY. घर is ghar, not ghara. कमरा is kamraa, not
//      kamaraa. Hindi deletes the final schwa and syncopates many medial ones, and
//      NOTHING ON THE PAGE MARKS IT.
// ⚠️ NO GLYPH CARDS IN THIS UNIT, BY DESIGN — a bare ं or ँ has no sound to hear,
// say or choose between, so it is not cardable. See unit1.js §3. Both rules are
// taught through real words, which is where the learner will actually meet them.
export const HI_UNIT5 = {
  id: "hi-u5",
  lang: "hi",
  title: "बिंदु और चुप अ",
  order: 5,
  stage: "pre-a1",
  lessons: [
    {
      id: "hi-u5l1",
      unit: 5,
      lesson: 1,
      title: "The dot on top: ं",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read a word with the anusvāra dot and know which nasal consonant it is standing in for.",
      items: [
        { id: "hi-u5l1-hindii", type: "vocab", front: "हिंदी", reading: "hindii", meaning: "Hindi", accept: ["the Hindi language"], example: { jp: "हिंदी भारत की एक बड़ी भाषा है।", en: "Hindi is one of India's big languages." }, drill: { jp: "हम घर पर हिंदी बोलते हैं", en: "We speak Hindi at home" }, hint: "HIN-dee, feminine. The dot over हि is doing the n. THE RULE: a dot before द (a dental) becomes a dental n; before क it becomes ng; before प it becomes m. Same dot, sound borrowed from the next letter." },
        { id: "hi-u5l1-nahiin", type: "vocab", front: "नहीं", reading: "nahiin", meaning: "no", accept: ["not", "there is no", "none"], example: { jp: "नहीं, यह मेरा घर नहीं है।", en: "No, this is not my house." }, drill: { jp: "यह मेरा घर नहीं है", en: "This is not my house" }, hint: "na-HEEN. Here the dot is at the END of the word, so there is no following consonant to borrow from — the vowel itself just goes nasal. It does both jobs English splits: no and not." },
        { id: "hi-u5l1-andar", type: "vocab", front: "अंदर", reading: "andar", meaning: "inside", accept: ["in", "within", "indoors"], example: { jp: "उसकी माँ बाहर है और बच्चा घर के अंदर है।", en: "His mother is outside and the child is inside the house." }, drill: { jp: "बच्चा घर के अंदर है", en: "The child is inside the house" }, hint: "AN-dar. Dot before द, so dental n. Hindi puts it AFTER what it describes: घर के अंदर, of-the-house inside — the opposite order from English." },
        { id: "hi-u5l1-band", type: "vocab", front: "बंद", reading: "band", meaning: "closed", accept: ["shut", "off", "switched off"], example: { jp: "सुबह दुकान फिर खुलेगी, अब वह बंद है।", en: "The shop will open again in the morning; now it is closed." }, drill: { jp: "दुकान अब बंद है", en: "The shop is closed now" }, hint: "BAND. Not just doors: a बंद फ़ोन is a phone that is switched off, and बंद करना is to turn something off or to shut it." },
        { id: "hi-u5l1-mandir", type: "vocab", front: "मंदिर", reading: "mandir", meaning: "a temple", accept: ["temple", "shrine"], example: { jp: "शाम को यहाँ बहुत लोग आते हैं, यह मंदिर बहुत पुराना है।", en: "Many people come here in the evening; this temple is very old." }, drill: { jp: "यह मंदिर बहुत पुराना है", en: "This temple is very old" }, hint: "MAN-dir, masculine. A Hindu temple specifically — a mosque is मस्जिद and a church गिरजाघर, both later. The dot again borrows its n from द." },
        { id: "hi-u5l1-ant", type: "vocab", front: "अंत", reading: "ant", meaning: "the end", accept: ["end", "finish", "conclusion"], example: { jp: "किताब का अंत बहुत अच्छा है।", en: "The end of the book is very good." }, drill: { jp: "किताब का अंत अच्छा है", en: "The end of the book is good" }, hint: "ANT, masculine. Dot before dental त, so a dental n — tongue on the teeth for both. Compare अंदर: same dot, same job, one letter different." },
      ],
    },
    {
      id: "hi-u5l2",
      unit: 5,
      lesson: 2,
      title: "The moon and the dot: ँ",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read a word with the candrabindu and nasalise the vowel instead of adding a consonant.",
      items: [
        { id: "hi-u5l2-haan", type: "vocab", front: "हाँ", reading: "haan", meaning: "yes", accept: ["yeah", "indeed"], example: { jp: "हाँ, मैं हिंदी समझता हूँ।", en: "Yes, I understand Hindi." }, drill: { jp: "हाँ यह मेरा घर है", en: "Yes this is my house" }, hint: "HAAN, and this is the crucial difference from unit 5 lesson 1: ँ is a MOON with a dot, and there is NO n consonant — the aa itself is spoken through the nose. Say haa and let it buzz; do not tap your tongue." },
        { id: "hi-u5l2-kahaan", type: "vocab", front: "कहाँ", reading: "kahaan", meaning: "where", accept: ["what place", "whereabouts"], example: { jp: "इस शहर में या गाँव में, आपका घर कहाँ है?", en: "In this city or in the village — where is your house?" }, drill: { jp: "आपका घर कहाँ है", en: "Where is your house" }, hint: "ka-HAAN. Like कौन, it sits where the answer would sit, not at the front: घर कहाँ है, house where is." },
        { id: "hi-u5l2-yahaan", type: "vocab", front: "यहाँ", reading: "yahaan", meaning: "here", accept: ["in this place", "over here"], example: { jp: "वहाँ कोई नहीं है, यहाँ बहुत लोग हैं।", en: "There is nobody there; there are a lot of people here." }, drill: { jp: "यहाँ बहुत लोग हैं", en: "There are a lot of people here" }, hint: "ya-HAAN. Built on यह (this) the same way वहाँ is built on वह — one pointing system, three shapes: यह/यहाँ, वह/वहाँ, कौन/कहाँ." },
        { id: "hi-u5l2-vahaan", type: "vocab", front: "वहाँ", reading: "vahaan", meaning: "there", accept: ["in that place", "over there"], example: { jp: "उस मंदिर के अंदर बहुत शांति है, और वहाँ रोज़ लोग आते हैं।", en: "There is a lot of peace inside that temple, and people come there every day." }, drill: { jp: "वहाँ एक बड़ा मंदिर है", en: "There is a big temple there" }, hint: "va-HAAN — over there, away from both of you. Pair it with यहाँ in one breath, the way Hindi speakers do: यहाँ नहीं, वहाँ." },
        { id: "hi-u5l2-gaanv", type: "vocab", front: "गाँव", reading: "gaanv", meaning: "a village", accept: ["village", "countryside"], example: { jp: "मेरा गाँव यहाँ से बहुत दूर है।", en: "My village is very far from here." }, drill: { jp: "मेरा गाँव यहाँ से दूर है", en: "My village is far from here" }, hint: "GAANV, masculine — nasal aa, then a व you barely say. Most Indians will ask which गाँव your family is from even if you have never lived there; it means ancestral place as much as village." },
        { id: "hi-u5l2-chaand", type: "vocab", front: "चाँद", reading: "chaand", meaning: "the moon", accept: ["moon"], example: { jp: "रात को छत पर देखो, आज चाँद बहुत बड़ा है।", en: "Look from the roof at night; the moon is very big today." }, drill: { jp: "आज चाँद बहुत बड़ा है", en: "The moon is very big today" }, hint: "CHAAND, masculine — and the mark is literally named after it: चंद्रबिंदु is moon-dot, because the curve IS a crescent moon." },
      ],
    },
    {
      id: "hi-u5l3",
      unit: 5,
      lesson: 3,
      title: "The a you write but never say",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read a Hindi word aloud with the right number of syllables, dropping the inherent a that is written but not spoken.",
      items: [
        { id: "hi-u5l3-kamraa", type: "vocab", front: "कमरा", reading: "kamraa", meaning: "a room", accept: ["room", "bedroom", "chamber"], example: { jp: "मेरा कमरा घर के अंदर है।", en: "My room is inside the house." }, drill: { jp: "मेरा कमरा बहुत छोटा है", en: "My room is very small" }, hint: "KAM-raa, TWO syllables — not ka-ma-raa. The म has a written a that Hindi simply does not say. Masculine (-आ ending). This is the rule no page ever prints." },
        { id: "hi-u5l3-sarak", type: "vocab", front: "सड़क", reading: "sarak", meaning: "a road", accept: ["road", "street"], example: { jp: "यह सड़क स्टेशन तक जाती है।", en: "This road goes to the station." }, drill: { jp: "यह सड़क बहुत बड़ी है", en: "This road is very big" }, hint: "sa-RAK, two syllables — the क at the end keeps no a, so it is sarak and never saraka. Feminine, despite the consonant ending. Note the flapped ड़." },
        { id: "hi-u5l3-darvaazaa", type: "vocab", front: "दरवाज़ा", reading: "darvaazaa", meaning: "a door", accept: ["door", "gate", "doorway"], example: { jp: "कमरे का दरवाज़ा अब बंद है।", en: "The room's door is closed now." }, drill: { jp: "कमरे का दरवाज़ा बंद है", en: "The room's door is closed" }, hint: "dar-VAA-zaa, three syllables — the र's a is dropped, so not da-ra-vaa-zaa. Masculine. And note ज़ with the dot: a z, not a j." },
        { id: "hi-u5l3-subah", type: "vocab", front: "सुबह", reading: "subah", meaning: "morning", accept: ["the morning", "dawn"], example: { jp: "सुबह मैं हिंदी पढ़ता हूँ।", en: "In the morning I read Hindi." }, drill: { jp: "सुबह हम हिंदी पढ़ते हैं", en: "In the morning we read Hindi" }, hint: "SU-bah, feminine — and the ह at the end keeps a faint a you can hear if you listen, which is why this word is written सुबह and not सुब. ह is the one letter that holds onto it." },
        { id: "hi-u5l3-larkaa", type: "vocab", front: "लड़का", reading: "larkaa", meaning: "a boy", accept: ["boy", "lad", "young man"], example: { jp: "हम एक ही स्कूल में हैं, और वह लड़का मेरा दोस्त है।", en: "We are at the same school, and that boy is my friend." }, drill: { jp: "वह लड़का मेरा दोस्त है", en: "That boy is my friend" }, hint: "LAR-kaa, two syllables, not la-ra-kaa. Masculine. Flapped ड़ in the middle — the tongue flicks forward off the roof of the mouth." },
        { id: "hi-u5l3-larkii", type: "vocab", front: "लड़की", reading: "larkii", meaning: "a girl", accept: ["girl", "young woman"], example: { jp: "वह लड़की अंग्रेज़ी समझती है और हिंदी भी बोलती है।", en: "That girl understands English and also speaks Hindi." }, drill: { jp: "वह लड़की हिंदी बोलती है", en: "That girl speaks Hindi" }, hint: "LAR-kee, feminine (-ी ending). The pair लड़का / लड़की is the cleanest example in the language of how Hindi makes a word feminine: swap the final -आ for -ी." },
      ],
    },
    {
      id: "hi-u5l4",
      unit: 5,
      lesson: 4,
      title: "Six words, read cold",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read an unfamiliar Hindi word aloud correctly, applying the nasal and the silent-a rules without being told which applies.",
      items: [
        { id: "hi-u5l4-aurat", type: "vocab", front: "औरत", reading: "aurat", meaning: "a woman", accept: ["woman", "lady"], example: { jp: "वह औरत इस गाँव में रहती हैं और मेरी माँ हैं।", en: "That woman lives in this village and is my mother." }, drill: { jp: "वह औरत मेरी माँ हैं", en: "That woman is my mother" }, hint: "AU-rat, feminine, opening with the independent vowel औ. The final त has no a: aurat, not aurata. The polite word in most company is महिला; औरत is the ordinary one." },
        { id: "hi-u5l4-baahar", type: "vocab", front: "बाहर", reading: "baahar", meaning: "outside", accept: ["out", "outdoors", "away"], example: { jp: "लड़के घर के बाहर हैं।", en: "The boys are outside the house." }, drill: { jp: "लड़का घर के बाहर है", en: "The boy is outside the house" }, hint: "BAA-har, the exact opposite of अंदर, and used the same way: घर के बाहर, of-the-house outside. Two syllables — the र takes no a." },
        { id: "hi-u5l4-chiiz", type: "vocab", front: "चीज़", reading: "chiiz", meaning: "a thing", accept: ["thing", "object", "item"], example: { jp: "आज भी यह चीज़ काम करती है, पर बहुत पुरानी है।", en: "This thing still works today, but it is very old." }, drill: { jp: "यह चीज़ बहुत पुरानी है", en: "This thing is very old" }, hint: "CHEEZ, feminine — unaspirated च, long ी, and ज़ with the dot, so it ends in z. One syllable, no trailing a." },
        { id: "hi-u5l4-raat", type: "vocab", front: "रात", reading: "raat", meaning: "night", accept: ["the night", "nighttime"], example: { jp: "रात को चाँद बहुत बड़ा था।", en: "At night the moon was very big." }, drill: { jp: "रात को चाँद बड़ा है", en: "At night the moon is big" }, hint: "RAAT, feminine. रात को is at night, the same को that made शाम को in the evening. Hold the aa: रात is night, रत is not a word." },
        { id: "hi-u5l4-aadmii", type: "vocab", front: "आदमी", reading: "aadmii", meaning: "a man", accept: ["man", "person", "fellow"], example: { jp: "वह आदमी मेरे पिता को जानता है और मेरे गाँव से है।", en: "That man knows my father and is from my village." }, drill: { jp: "वह आदमी मेरे गाँव से है", en: "That man is from my village" }, hint: "AAD-mee, THREE letters but the द's a is dropped: aadmii, not aadamii. Masculine — and note it ends in -ी and is still masculine, like पानी." },
        { id: "hi-u5l4-sansaar", type: "vocab", front: "संसार", reading: "sansaar", meaning: "the world", accept: ["world", "universe", "everything there is"], example: { jp: "हम एक ही बात कहते हैं, पर संसार में बहुत भाषाएँ हैं।", en: "We say the same thing, but there are many languages in the world." }, drill: { jp: "संसार बहुत बड़ा है", en: "The world is very big" }, hint: "san-SAAR, masculine — dot before स, so a dental n. Both rules in one word: the dot, and a final र with no a. दुनिया is the everyday word for world; संसार is the weightier one." },
      ],
    },
  ],
};
