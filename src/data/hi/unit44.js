// HI Unit 44 — खबर और मीडिया ("The news and the media") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 2 (u41–u50). Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT. The scaffold called this "Nature and science", and BOTH halves are
// somebody else's:
//   • NATURE is u21 जानवर और कुदरत's, which spent फूल, पत्ता, घास, बीज, ज़मीन, पत्थर,
//     आसमान, तारा, पहाड़, जंगल, समुद्र, तूफ़ान and eleven animals. unit31.js §A8
//     already rethemed u36 "Nature and animals" away for exactly this reason, and the
//     natural world is block 3's assigned domain in this band.
//   • SCIENCE is one word, विज्ञान, carded at u6l1 as a conjunct-decoding word, and a
//     24-card science unit at A2 would be inventing a syllabus no CEFR A2 descriptor
//     asks for.
// THE MEASURED HOLE IT WAS RETHEMED INTO: **the media, at 5 of 18**. The corpus could
// say खबर, अखबार, चिट्ठी, संदेश and आवाज़ and could not name a magazine, a headline,
// an article, an editor, a journalist, a radio, a channel, a programme, a broadcast,
// an advertisement, a notice, a statement, a rumour, a claim, ink, an envelope, the
// post itself or publicity. A learner at B1 reads a newspaper; this is the vocabulary
// that lets them.
// ⚠️ THIS UNIT TAKES NEWS MEDIA ONLY. Film, music, dance and festivals are "culture
// and leisure" and belong to block 3 — none is carded or used here.
//
// ⚠️ पत्रिका (l1) AND पत्रकार (l3) SHARE THE BOUND ROOT पत्र, AND THAT IS DELIBERATE.
// The precedent is the corpus's own दुकान (u14l4) beside दुकानदार (u18l4), which
// `scripts/scope-hi.mjs`'s header singles out: "दुकान does not generate दुकानदार, and
// those stay separate fronts that must be taught." पत्र itself is not a front anywhere
// (चिट्ठी is the word for a letter), no suffix rule connects the two, their readings
// differ, and they sit in different lessons. Named here rather than left to be found.
// ⚠️ AND लेखक (an author) WAS DROPPED for the opposite reason: with लेख carded in l1,
// the pair would have been root-siblings in ONE unit with adjacent meanings. स्याही
// took the slot. Whoever wants लेखक should card it in a unit that does not hold लेख.
//
// ⚠️ THREE NOUNS HERE END IN -ना AND ARE NOT INFINITIVES: सूचना, घटना and — in the next
// unit — तुलना. `derive()` in scope-hi.mjs cannot tell a noun from a verb, so it
// generates a verb paradigm from each of them; the strings it produces (घटे, सूचे) are
// harmless because no sentence contains them, and the precedence rule block 1 added
// protects any that IS a taught front. The one to know about is घटना, which really is
// also a verb ("to decrease") — this unit cards the NOUN, and the hint says so.
//
// ⚠️ ONE MARK-BOUNDARY PAIR THIS UNIT CREATES: **डाक whole-word-matches INSIDE डाकिया**
// (u28l3, the postman), because the seam is a mātrā and the router's boundary test is
// `\p{L}`. So डाक's example and drill contain no डाकिया, checked mechanically by
// `selfcheck-hi-a2-block2.mjs` and not by eye. Same class as u40's सूट/सूत note.
// ⚠️ AND ताज़ा (l1) IS THE OTHER HALF OF A PAIR WITH ताज (u50l4, a crown): ताज matches
// inside ताज़ा across the NUKTA, which is also `\p{M}`. ताज is taught six units later
// so it is out of scope here anyway, and it never appears in this unit's sentences.
//
// GENDER TRAPS (§4): ⚠️ पत्रिका, सुर्खी, सूचना, घटना, अफ़वाह, जानकारी, छपाई, स्याही,
// डाक and मोहर are FEMININE — and अफ़वाह, डाक and मोहर end in a CONSONANT with nothing
// in the shape to say so: यह मोहर सरकारी है, never सरकारी... मोहर takes की.
// लेख, संपादक, पन्ना, रेडियो, चैनल, कार्यक्रम, प्रसारण, विज्ञापन, पत्रकार, बयान,
// दावा, लिफ़ाफ़ा and प्रचार are MASCULINE. ताज़ा AGREES: ताज़ा खाना, ताज़ी रोटी — the
// headword is the masculine singular under §6, and the drill uses a masculine noun so
// the front can appear verbatim.
// RETROFLEX/DENTAL (§1b): no new colliding pair. घटना ghatnaa and पत्रिका patrikaa are
// checked against all 1032 readings; no ghatanaa, no पत्रिटा. The hatch fires nowhere.
export const HI_UNIT44 = {
  id: "hi-u44",
  lang: "hi",
  title: "खबर और मीडिया",
  order: 44,
  stage: "a2",
  lessons: [
    {
      id: "hi-u44l1",
      unit: 44,
      lesson: 1,
      title: "The newspaper and the magazine",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Find your way round a Hindi newspaper — the headline, the article, the page and the editor who chose them.",
      items: [
        { id: "hi-u44l1-patrikaa", type: "vocab", front: "पत्रिका", reading: "patrikaa", meaning: "a magazine", accept: ["a periodical", "a journal"], example: { jp: "यह पत्रिका हर हफ़्ता आती है।", en: "This magazine comes every week." }, drill: { jp: "यह पत्रिका बहुत सस्ती है", en: "This magazine is very cheap" }, hint: "PAT-RI-KAA, FEMININE — नई पत्रिका, plural पत्रिकाएँ — with the त् halant of unit 6. An अखबार comes daily and reports; a पत्रिका comes weekly or monthly and explains." },
        { id: "hi-u44l1-surkhii", type: "vocab", front: "सुर्खी", reading: "surkhii", meaning: "a headline", accept: ["a banner line in a paper", "a heading in bold"], example: { jp: "आज के अखबार की सुर्खी बहुत बड़ी थी।", en: "Today's newspaper headline was very big." }, drill: { jp: "यह सुर्खी पूरे पन्ने पर है", en: "This headline runs across the whole page" }, hint: "SUR-KHII, FEMININE, plural सुर्खियाँ, with र् on the सु and PLAIN ख. From सुर्ख, crimson — a headline is the red line at the top. सुर्खियों में होना is to be in the news." },
        { id: "hi-u44l1-lekh", type: "vocab", front: "लेख", reading: "lekh", meaning: "an article", accept: ["a written piece", "an essay"], example: { jp: "उसने इस विषय पर लेख लिखा।", en: "He wrote an article on this subject." }, drill: { jp: "यह लेख बहुत लंबा है", en: "This article is very long" }, hint: "LEKH, MASCULINE, plural लेख unchanged, PLAIN ख. From the same root as लिखना, to write — a written piece in a paper or a पत्रिका. लेखक, the author, is not carded in this course." },
        { id: "hi-u44l1-sampaadak", type: "vocab", front: "संपादक", reading: "sampaadak", meaning: "an editor", accept: ["the person who edits a paper", "a chief sub"], example: { jp: "संपादक ने वह लेख नहीं छापा।", en: "The editor did not print that article." }, drill: { jp: "अखबार का संपादक बहुत सख्त है", en: "The newspaper's editor is very strict" }, hint: "SAM-PAA-DAK, MASCULINE, plural संपादक unchanged, with the ं before प read as m. The one who decides what reaches the पन्ना. Not संपर्क, contact, from the technology unit." },
        { id: "hi-u44l1-taazaa", type: "vocab", front: "ताज़ा", reading: "taazaa", meaning: "freshly made", accept: ["newly arrived", "not stale"], example: { jp: "सुबह का दूध सबसे ताज़ा होता है।", en: "Morning milk is the freshest." }, drill: { jp: "ताज़ा खाना बहुत अच्छा लगता है", en: "Freshly made food tastes very good" }, hint: "TAA-ZAA, headworded MASCULINE SINGULAR under §6 and it AGREES — ताज़ा खाना, ताज़ी रोटी — with the ज़ of unit 4. Fresh food, fresh news, fresh air. नया is new in age; ताज़ा is new in condition." },
        { id: "hi-u44l1-pannaa", type: "vocab", front: "पन्ना", reading: "pannaa", meaning: "a page", accept: ["a sheet in a book", "a leaf of paper"], example: { jp: "उसने किताब का पहला पन्ना पढ़ा।", en: "He read the first page of the book." }, drill: { jp: "यह पन्ना बहुत गंदा है", en: "This page is very dirty" }, hint: "PAN-NAA, MASCULINE, plural पन्ने, with the doubled न of §1's gemination. A page of a book or a paper. The same word names the emerald, which is why an Indian jeweller says पन्ना." },
      ],
    },
    {
      id: "hi-u44l2",
      unit: 44,
      lesson: 2,
      title: "Radio, television and the advertisement",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what is on which channel and when, and name an advert and an official notice.",
      items: [
        { id: "hi-u44l2-rediyo", type: "vocab", front: "रेडियो", reading: "rediyo", meaning: "a radio", accept: ["a radio set", "radio broadcasting"], example: { jp: "दादी रोज़ रेडियो सुनती हैं।", en: "Grandmother listens to the radio every day." }, drill: { jp: "यह रेडियो बहुत पुराना है", en: "This radio is very old" }, hint: "RE-DI-YO, MASCULINE, plural रेडियो unchanged. Both the box and the medium. ⚠️ The reading is rediyo and not 'radio' — Hindi says the first vowel as e, which is exactly the kind of gap §1 exists to close." },
        { id: "hi-u44l2-chainal", type: "vocab", front: "चैनल", reading: "chainal", meaning: "a channel", accept: ["a television station", "a broadcast stream"], example: { jp: "इस चैनल पर खबर रात को आती है।", en: "The news comes on this channel at night." }, drill: { jp: "यह चैनल बहुत नया है", en: "This channel is very new" }, hint: "CHAI-NAL, MASCULINE, with the ऐ mātrā read ai. A television channel only — the water sense of the English word is नहर, which this course does not card." },
        { id: "hi-u44l2-kaaryakram", type: "vocab", front: "कार्यक्रम", reading: "kaaryakram", meaning: "a programme", accept: ["a show on air", "a scheduled event"], example: { jp: "यह कार्यक्रम हर शनिवार आता है।", en: "This programme comes on every Saturday." }, drill: { jp: "आज का कार्यक्रम बहुत अच्छा था", en: "Today's programme was very good" }, hint: "KAAR-YAK-RAM, MASCULINE, with र् on the का and the क्र conjunct after it. A television or radio programme, and also the programme of an event — शादी का कार्यक्रम. From कार्य, the formal twin of काम." },
        { id: "hi-u44l2-prasaaran", type: "vocab", front: "प्रसारण", reading: "prasaaran", meaning: "a broadcast", accept: ["putting something on air", "transmission"], example: { jp: "मैच का प्रसारण रेडियो पर भी था।", en: "The match's broadcast was on the radio too." }, drill: { jp: "इस कार्यक्रम का प्रसारण रात को है", en: "This programme's broadcast is at night" }, hint: "PRA-SAA-RAN, MASCULINE, with the प्र conjunct and the RETROFLEX ण read as a plain n under §1(b). प्रसारण करना is to broadcast — formal, the newspaper's word; in speech you say चैनल पर आना." },
        { id: "hi-u44l2-vigyaapan", type: "vocab", front: "विज्ञापन", reading: "vigyaapan", meaning: "an advertisement", accept: ["an advert", "a commercial"], example: { jp: "टीवी पर इस दवा का विज्ञापन आता है।", en: "There is an advert for this medicine on TV." }, drill: { jp: "यह विज्ञापन बहुत लंबा है", en: "This advert is very long" }, hint: "VIG-YAA-PAN, MASCULINE, with the ज्ञ conjunct of unit 6 — ⚠️ it reads gy, not jn, exactly as in विज्ञान, science. An advert in a paper or on air." },
        { id: "hi-u44l2-suuchnaa", type: "vocab", front: "सूचना", reading: "suuchnaa", meaning: "a notification", accept: ["an official notice", "word sent out"], example: { jp: "सरकार ने एक ज़रूरी सूचना दी।", en: "The government gave an important notification." }, drill: { jp: "यह सूचना सब के लिए है", en: "This notification is for everybody" }, hint: "SUU-CHNAA, FEMININE — यह सूचना, plural सूचनाएँ — and ⚠️ it is a NOUN even though it ends in -ना like an infinitive. सूचना देना is to notify. खबर is news that happened; सूचना is notice that was given." },
      ],
    },
    {
      id: "hi-u44l3",
      unit: 44,
      lesson: 3,
      title: "Reporting it, and getting it wrong",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Report what happened and who said what, and tell a statement from a claim and a claim from a rumour.",
      items: [
        { id: "hi-u44l3-patrakaar", type: "vocab", front: "पत्रकार", reading: "patrakaar", meaning: "a journalist", accept: ["a reporter", "a press correspondent"], example: { jp: "एक पत्रकार ने मंत्री से सवाल पूछा।", en: "A journalist asked the minister a question." }, drill: { jp: "वह पत्रकार बहुत होशियार है", en: "That journalist is very shrewd" }, hint: "PAT-RA-KAAR, MASCULINE, plural पत्रकार unchanged, with the same त् halant as पत्रिका in lesson 1. Both come from पत्र, a paper — two separate words sharing a root, like दुकान and दुकानदार." },
        { id: "hi-u44l3-ghatnaa", type: "vocab", front: "घटना", reading: "ghatnaa", meaning: "an incident", accept: ["an occurrence", "a thing that happened"], example: { jp: "कल रात एक बड़ी घटना हुई।", en: "A big incident happened last night." }, drill: { jp: "यह घटना बहुत पुरानी है", en: "This incident is very old" }, hint: "GHAT-NAA, FEMININE, plural घटनाएँ, RETROFLEX ट, and ⚠️ a NOUN despite the -ना ending, like सूचना. There IS also a verb घटना, 'to decrease', which this course does not card — read this one as the noun." },
        { id: "hi-u44l3-bayaan", type: "vocab", front: "बयान", reading: "bayaan", meaning: "a statement", accept: ["a formal declaration", "an account given"], example: { jp: "गवाह ने अदालत में बयान दिया।", en: "The witness gave a statement in court." }, drill: { jp: "मंत्री का बयान बहुत साफ़ था", en: "The minister's statement was very clear" }, hint: "BA-YAAN, MASCULINE, plural बयान unchanged. बयान देना is to give a statement — to a court, to a पत्रकार, to the police. A दावा below is a statement nobody has proved yet." },
        { id: "hi-u44l3-afvaah", type: "vocab", front: "अफ़वाह", reading: "afvaah", meaning: "a rumour", accept: ["hearsay", "a story going round"], example: { jp: "बाज़ार में यह अफ़वाह बहुत चली।", en: "This rumour went round the market a lot." }, drill: { jp: "यह अफ़वाह बिलकुल झूठ है", en: "This rumour is completely false" }, hint: "AF-VAAH, ⚠️ FEMININE despite the consonant ending, plural अफ़वाहें, with the फ़ of unit 4. अफ़वाह फैलना is for one to spread. Note बिलकुल with no halant — that is how this course spells it." },
        { id: "hi-u44l3-daavaa", type: "vocab", front: "दावा", reading: "daavaa", meaning: "a claim", accept: ["an assertion", "what someone insists is true"], example: { jp: "उसका दावा किसी को सच नहीं लगा।", en: "Nobody found his claim true." }, drill: { jp: "यह दावा बहुत बड़ा है", en: "This claim is a very big one" }, hint: "DAA-VAA, MASCULINE, plural दावे. दावा करना is to claim — in a court and in an argument alike. A सबूत, from the connectors unit, is what a दावा needs and an अफ़वाह never has." },
        { id: "hi-u44l3-jaankaarii", type: "vocab", front: "जानकारी", reading: "jaankaarii", meaning: "the details", accept: ["information about something", "what is known"], example: { jp: "मुझे इस मुकदमे की जानकारी नहीं है।", en: "I do not have the details of this case." }, drill: { jp: "इस विषय की जानकारी बहुत कम है", en: "There are very few details on this subject" }, hint: "JAAN-KAA-RII, FEMININE, uncountable, from जानना, to know. खबर is news; जानकारी is what you have been told about a thing. जानकारी देना is to brief somebody." },
      ],
    },
    {
      id: "hi-u44l4",
      unit: 44,
      lesson: 4,
      title: "Print, ink and the post",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Send something on paper and talk about how it was printed, sealed and posted.",
      items: [
        { id: "hi-u44l4-chhapaaii", type: "vocab", front: "छपाई", reading: "chhapaaii", meaning: "printing", accept: ["the print job", "the way something is printed"], example: { jp: "इस किताब की छपाई बहुत साफ़ है।", en: "This book's printing is very clean." }, drill: { jp: "इस पत्रिका की छपाई अच्छी है", en: "This magazine's printing is good" }, hint: "CHHA-PAA-II, FEMININE, uncountable — the noun of छापना, to print, exactly as सिलाई is the noun of sewing. It means both the printing itself and what the printer charges for it." },
        { id: "hi-u44l4-syaahii", type: "vocab", front: "स्याही", reading: "syaahii", meaning: "ink", accept: ["writing fluid", "printer's ink"], example: { jp: "इस पेन की स्याही काली है।", en: "This pen's ink is black." }, drill: { jp: "यह स्याही बहुत गहरी है", en: "This ink is very dark" }, hint: "SYAA-HII, FEMININE, uncountable, with the स्य conjunct — ⚠️ one syllable syaa, not si-yaa. From स्याह, black. Indian voters get स्याही on a finger after they cast a वोट." },
        { id: "hi-u44l4-lifaafaa", type: "vocab", front: "लिफ़ाफ़ा", reading: "lifaafaa", meaning: "an envelope", accept: ["a paper cover for a letter"], example: { jp: "उसने चिट्ठी लिफ़ाफ़े में रखी।", en: "She put the letter in the envelope." }, drill: { jp: "यह लिफ़ाफ़ा बहुत छोटा है", en: "This envelope is very small" }, hint: "LI-FAA-FAA, MASCULINE, plural लिफ़ाफ़े, with the फ़ of unit 4 TWICE. The paper cover a चिट्ठी goes into before it goes into the डाक. Note लिफ़ाफ़े में — the oblique before a postposition." },
        { id: "hi-u44l4-daak", type: "vocab", front: "डाक", reading: "daak", meaning: "the postal service", accept: ["mail", "letters in transit"], example: { jp: "यह चिट्ठी डाक से आई।", en: "This letter came by post." }, drill: { jp: "डाक हर सुबह आती है", en: "The post comes every morning" }, hint: "DAAK, FEMININE, uncountable — डाक से भेजना, to send by post. डाकघर is the post office and डाकिया the postman, both already taught; डाक on its own is the post itself. ⚠️ Its three letters also open डाकिया, so the two never share a sentence here." },
        { id: "hi-u44l4-mohar", type: "vocab", front: "मोहर", reading: "mohar", meaning: "a rubber stamp", accept: ["an official seal", "a stamped mark"], example: { jp: "अफ़सर ने अर्ज़ी पर मोहर लगाई।", en: "The officer put a stamp on the application." }, drill: { jp: "इस लिफ़ाफ़े पर मोहर नहीं है", en: "There is no stamp on this envelope" }, hint: "MO-HAR, ⚠️ FEMININE despite the consonant ending — सरकारी मोहर, plural मोहरें. The seal an office puts on paper, and the name of the old gold coin. टिकट is the stamp you buy and stick on." },
        { id: "hi-u44l4-prachaar", type: "vocab", front: "प्रचार", reading: "prachaar", meaning: "publicity", accept: ["campaigning", "spreading a message"], example: { jp: "नेता ने गाँव में बहुत प्रचार किया।", en: "The leader campaigned a lot in the village." }, drill: { jp: "इस दवा का प्रचार हर जगह है", en: "There is publicity for this medicine everywhere" }, hint: "PRA-CHAAR, MASCULINE, uncountable, with the प्र conjunct. प्रचार करना is to campaign or publicise. A विज्ञापन is one paid advert; प्रचार is the whole push — and it is also the Hindi word for propaganda." },
      ],
    },
  ],
};
