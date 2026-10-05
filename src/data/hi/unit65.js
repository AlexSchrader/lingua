// HI Unit 65 — खबर कहाँ से आई ("Where the news came from") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 1. Conventions: unit1.js §1–§11, unit31.js §A1–§A8, then unit61.js
// §B1–§B9. This unit adds nothing to them.
//
// 🚨 NARROWED SLOT, AND unit61.js §B9 FLAG 1 IS THE RECORD OF WHY. The scaffold
// called it "News and society" and that noun field is **16 of 18 SPENT** — A2 u44
// खबर और मीडिया carded खबर, अखबार, पत्रकार, संपादक, सुर्खी, प्रसारण, चैनल,
// विज्ञापन, लेख, साक्षात्कार, अफ़वाह, दावा and जानकारी, and A2 u42 समाज और सरकार
// carded समाज, सरकार, नेता, कानून, जनता and नागरिक. A learner reaching u65 can
// already name a newspaper, a journalist, an editor and a headline.
// What they cannot do is **ask where a claim came from and whether it holds** —
// cite a source, attribute a statement, mark something as alleged, tell a
// fact-check from a rumour, name bias and a rebuttal. Measured on that B1 layer:
// **3 of 18.** Same domain, one level up, which is what B1 is (unit61 §B3).
// ⚠️ **THE SLOT IS NOT DELETED AND ITS THEME IS NOT CHANGED.** A later seat
// re-measuring "News and society" will get 16/18 and may conclude the slot was
// wrongly kept. It was not: the measurement that governs is the one on the layer
// the unit actually teaches. unit61 §B9 flag 2 records the time block 1 made
// exactly that mistake on u67 and caught it.
//
// ⚠️ FRONTS WANTED AND REFUSED:
//   TAKEN: खबर, अखबार, पत्रकार, संपादक, सुर्खी, प्रसारण, चैनल, विज्ञापन, लेख,
//     साक्षात्कार, अफ़वाह, दावा, जानकारी (all u44) · समाज, सरकार, नेता, कानून,
//     जनता, नागरिक (u42) · सबूत, ऐलान, ज़िक्र (u39) · गवाह (u42).
//   DERIVATIVE-REFUSED on unit57.js's rule: **पत्रकारिता** beside पत्रकार (u44) ·
//     **गवाही** beside गवाह (u42). प्रत्यक्षदर्शी is carded for the eyewitness
//     instead, which is a different word and not a second track for गवाह.
//   GLOSS-REFUSED through normalizeMeaning: **प्रतिवेदन** (it would be a second
//     "a report" beside the one u44 owns) · **शीर्षक glossed "a title"** — "a
//     title" is taken, so it is carded **"a heading"**, which is also the more
//     accurate word for what sits above a news column.
//
// ⚠️ TWO LOANWORD FRONTS, AND unit1.js §9's FREE-PASS CHECK WAS RUN ON BOTH.
//   `checkProduce` accepts the Latin reading for any Hindi vocab item, so a
//   loanword glossed as its own transliteration would accept the answer read
//   straight off the prompt. **कवरेज** reads kavrej and is glossed "news
//   coverage"; **सेंसर** reads sensar and is glossed "censorship". Neither gloss
//   normalises to its reading. Zero free passes, same as u9's twenty-four.
//   ⚠️ सेंसर's hint has to do one extra job: English "sensor" is the same string
//   in Devanagari and Hindi does not use it, so the hint says so.
//
// GENDER TRAPS THIS UNIT ADDS (unit1.js §4), each named in its own hint:
//   ⚠️ FEMININE: **पड़ताल** and **सनसनी**. पड़ताल is CONSONANT-FINAL so nothing
//   says so — पड़ताल पूरी हुई, not पूरा. सनसनी is -ी, which is the predictable one.
//   MASCULINE: स्रोत, हवाला, उद्धरण, पक्षपात, संपादकीय, संवाददाता, शीर्षक, कवरेज,
//   प्रकाशन, प्रसार, खुलासा, खंडन, सेंसर, ब्यौरा, प्रत्यक्षदर्शी. ⚠️ **संवाददाता is
//   MASCULINE despite the -ा AND despite being an agent noun** — the same class as
//   पिता and नेता (unit 10, unit 42), where -ा is masculine against the rule for
//   PEOPLE. And ब्यौरा and खुलासा are masculine -आ, which for once is predictable.
//   INVARIANT (unit53's rule): कथित, प्रामाणिक, विश्वसनीय, अपुष्ट, निष्पक्ष,
//   गोपनीय. मुताबिक behaves as a POSTPOSITION — X के मुताबिक — and agrees with
//   nothing.
// RETROFLEX/DENTAL (unit1.js §1b): **पड़ताल has ड़, which reads r** (unit 1 §1c),
// so partaal — compare पड़ना and घड़ी. उद्धरण has DENTAL द्ध (द with ध stacked) and
// a RETROFLEX ण, both merged. कथित is dental थ. Checked against all 1,440
// readings: 0 collisions.
export const HI_UNIT65 = {
  id: "hi-u65",
  lang: "hi",
  title: "खबर कहाँ से आई",
  order: 65,
  stage: "b1",
  lessons: [
    {
      id: "hi-u65l1",
      unit: 65,
      lesson: 1,
      title: "Where the news came from",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name the source of a claim, give a reference and a direct quotation, attribute a statement with 'according to', mark something as merely alleged, and cite an eyewitness.",
      items: [
        { id: "hi-u65l1-srot", type: "vocab", front: "स्रोत", reading: "srot", meaning: "a source of information", accept: ["where a thing came from"], example: { jp: "खबर पढ़ते समय पहला सवाल यह है कि उसका स्रोत कौन है।", en: "When reading news the first question is who its source is." }, drill: { jp: "इस खबर का स्रोत कौन है", en: "Who is the source of this news" }, hint: "SROT, masculine, one syllable: स with र stacked, then ओ and त. ⚠️ Not मूल, the root cause (unit 62): a मूल is where a thing BEGAN, a स्रोत is who or what it reached you THROUGH. A river has a स्रोत too — the spring it rises from." },
        { id: "hi-u65l1-havaalaa", type: "vocab", front: "हवाला", reading: "havaalaa", meaning: "a reference to a source", accept: ["a citation"], example: { jp: "उसने अपनी दलील में एक पुरानी किताब का हवाला दिया, पर पन्ना नहीं बताया।", en: "In his argument he gave a reference to an old book, but did not say which page." }, drill: { jp: "उसने एक पुरानी किताब का हवाला दिया", en: "He gave a reference to an old book" }, hint: "HA-VAA-LAA, masculine — the -आ is honest here. The frame is X का हवाला देना, to cite X. ⚠️ A हवाला points at the source; an उद्धरण below is the actual words. Hindi also uses हवाला for handing someone over, which is a different sense of the same word." },
        { id: "hi-u65l1-uddharan", type: "vocab", front: "उद्धरण", reading: "uddharan", meaning: "a quotation", accept: ["the words as spoken"], example: { jp: "अखबार ने नेता का पूरा उद्धरण छापा, इसलिए कोई खंडन नहीं हुआ।", en: "The newspaper printed the leader's full quotation, so no rebuttal followed." }, drill: { jp: "अखबार ने पूरा उद्धरण छापा", en: "The newspaper printed the full quotation" }, hint: "UD-DHA-RAN, masculine. ⚠️ TWO HARD BITS: the द्ध is द with ध stacked, two voiced sounds in one breath, and the ण is RETROFLEX n, merged to n in the reading (unit 1 §1b). An उद्धरण is the exact words; a हवाला above is only the pointer to where they came from." },
        { id: "hi-u65l1-mutaabik", type: "vocab", front: "मुताबिक", reading: "mutaabik", meaning: "according to", accept: ["as stated by"], example: { jp: "संवाददाता के मुताबिक बारिश के आसार हैं, पर सरकार ने कुछ नहीं कहा।", en: "According to the correspondent there are signs of rain, but the government has said nothing." }, drill: { jp: "संवाददाता के मुताबिक बारिश होगी", en: "According to the correspondent it will rain" }, hint: "MU-TAA-BIK, used as a POSTPOSITION and agreeing with nothing: **X के मुताबिक**, always with के. ⚠️ This is the single most useful word in the unit — it is how Hindi hands a claim to somebody else instead of asserting it. Plain क (unit 1 §7 keeps क़ uncarded)." },
        { id: "hi-u65l1-kathit", type: "vocab", front: "कथित", reading: "kathit", meaning: "so-called", accept: ["alleged", "said to be"], example: { jp: "कथित सबूत किसी ने नहीं देखा, और पड़ताल के बाद वह कागज़ भी नहीं मिला।", en: "Nobody has seen the so-called proof, and after a fact-check that paper was not found either." }, drill: { jp: "कथित सबूत किसी ने नहीं देखा", en: "Nobody has seen the so-called proof" }, hint: "KA-THIT, INVARIANT: कथित सबूत, कथित खबर. DENTAL थ. ⚠️ It puts the claim at arm's length without calling it a lie — the written equivalent of what अप्रत्यक्ष (unit 62) does for a cause. A Hindi news bulletin uses it in almost every crime report." },
        { id: "hi-u65l1-pratyakshdarshii", type: "vocab", front: "प्रत्यक्षदर्शी", reading: "pratyakshdarshii", meaning: "an eyewitness", accept: ["someone who saw it happen"], example: { jp: "दो प्रत्यक्षदर्शी थे, और दोनों ने एक जैसी बात बताई।", en: "There were two eyewitnesses, and both told the same thing." }, drill: { jp: "वहाँ दो प्रत्यक्षदर्शी थे", en: "There were two eyewitnesses there" }, hint: "PRA-TYAKSH-DAR-SHII, masculine — a person, so the feminine is प्रत्यक्षदर्शिनी. Built from प्रत्यक्ष, witnessed first-hand (unit 62), plus दर्शी, 'one who sees'. ⚠️ **गवाही was REFUSED here** as the bare derivative of गवाह, a witness (unit 42). A गवाह testifies in court; a प्रत्यक्षदर्शी simply saw it." },
      ],
    },
    {
      id: "hi-u65l2",
      unit: 65,
      lesson: 2,
      title: "Fit to trust?",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Say a document is backed by evidence or a person worth believing, call a report unconfirmed, describe coverage as impartial or accuse it of bias, and run a fact-check.",
      items: [
        { id: "hi-u65l2-praamaanik", type: "vocab", front: "प्रामाणिक", reading: "praamaanik", meaning: "backed by evidence", accept: ["authoritative"], example: { jp: "यह किताब प्रामाणिक है, क्योंकि लेखक ने हर बात का हवाला दिया है।", en: "This book is backed by evidence, because the writer has given a reference for everything." }, drill: { jp: "यह किताब प्रामाणिक है", en: "This book is backed by evidence" }, hint: "PRAA-MAA-NIK, INVARIANT: प्रामाणिक किताब, प्रामाणिक खबर. Built on प्रमाण, 'proof' — the RETROFLEX ण merges to n. ⚠️ Not असली, genuine (unit 19): असली says it is not a fake, प्रामाणिक says its claims can be checked." },
        { id: "hi-u65l2-vishvasniiya", type: "vocab", front: "विश्वसनीय", reading: "vishvasniiya", meaning: "worth believing", accept: ["credible"], example: { jp: "वह स्रोत विश्वसनीय है, उसने कभी अपुष्ट खबर नहीं दी।", en: "That source is worth believing; it has never given unconfirmed news." }, drill: { jp: "वह स्रोत विश्वसनीय है", en: "That source is worth believing" }, hint: "VISH-VAS-NII-YA, INVARIANT. Built on विश्वास, trust, which this course teaches as भरोसा (unit 27) — so the ROOT is new even though the idea is not. श्व is श with व stacked. ⚠️ Not ईमानदार, honest (unit 27): a person is ईमानदार, a source is विश्वसनीय." },
        { id: "hi-u65l2-apusht", type: "vocab", front: "अपुष्ट", reading: "apusht", meaning: "unconfirmed", accept: ["not yet verified"], example: { jp: "अभी सब खबर अपुष्ट है, इसलिए निष्कर्ष पर पहुँचना जल्दी होगा।", en: "All the news is unconfirmed right now, so reaching a conclusion would be too early." }, drill: { jp: "अभी यह खबर अपुष्ट है", en: "This news is unconfirmed right now" }, hint: "A-PUSHT, INVARIANT. The अ- prefix again (असहमत unit 61, अनिश्चित unit 64), on पुष्ट, 'confirmed'. ष्ट is ष with ट stacked, read sht. ⚠️ Not अफ़वाह, a rumour (unit 44): a rumour has no source at all, अपुष्ट news has a source that has not been checked yet." },
        { id: "hi-u65l2-nishpaksh", type: "vocab", front: "निष्पक्ष", reading: "nishpaksh", meaning: "impartial", accept: ["without favouring a side"], example: { jp: "अखबार का काम निष्पक्ष रहना है, पर उस पर नेता का प्रभाव साफ़ है।", en: "A newspaper's job is to stay impartial, but a leader's sway over it is clear." }, drill: { jp: "अखबार का काम निष्पक्ष रहना है", en: "A newspaper's job is to stay impartial" }, hint: "NISH-PAKSH, INVARIANT. निः- is a 'without' prefix and पक्ष is a side in an argument (unit 57) — literally sideless. Both ष read sh (unit 1 §1a). ⚠️ Close to तटस्थ, neutral (unit 61), and the difference is who it describes: a person stays तटस्थ in a quarrel, an institution is निष्पक्ष by duty." },
        { id: "hi-u65l2-pakshpaat", type: "vocab", front: "पक्षपात", reading: "pakshpaat", meaning: "bias", accept: ["favouring one side"], example: { jp: "उसकी खबर में पक्षपात दिखता है, उसने एक गुट का उद्धरण ही छापा।", en: "Bias is visible in his news report; he printed only one faction's quotation." }, drill: { jp: "उसकी बात में पक्षपात दिखता है", en: "Bias is visible in what he says" }, hint: "PAKSH-PAAT, masculine. पक्ष (a side, unit 57) plus पात, 'a falling' — literally falling towards one side. ⚠️ Not पूर्वाग्रह, a prejudice (unit 61): a पूर्वाग्रह is in your head before you start, पक्षपात is what you actually DO when you favour someone." },
        { id: "hi-u65l2-partaal", type: "vocab", front: "पड़ताल", reading: "partaal", meaning: "a fact-check", accept: ["a going-over of the facts"], example: { jp: "पड़ताल के बाद पता चला कि आधी खबर सच नहीं थी।", en: "After the fact-check it emerged that half the news was not true." }, drill: { jp: "पड़ताल के बाद सब साफ़ हो गया", en: "After the fact-check everything became clear" }, hint: "PAR-TAAL — ⚠️ FEMININE AND CONSONANT-FINAL, so nothing in the shape tells you: पड़ताल पूरी हुई, never पूरा. The ड़ reads r (unit 1 §1c), the same letter as in पड़ना and घड़ी. ⚠️ Not जाँच, a medical test or inspection (unit 35): a जाँच examines a thing, a पड़ताल checks whether a STATEMENT is true." },
      ],
    },
    {
      id: "hi-u65l3",
      unit: 65,
      lesson: 3,
      title: "Inside the newspaper",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name the editorial, the correspondent who filed the story and the heading above it, talk about the coverage a story got, and describe a publication and its circulation.",
      items: [
        { id: "hi-u65l3-sampaadkiiya", type: "vocab", front: "संपादकीय", reading: "sampaadkiiya", meaning: "an editorial", accept: ["the paper's own opinion column"], example: { jp: "आज का संपादकीय सरकार के रुख की आलोचना कर रहा था।", en: "Today's editorial was criticising the government's stance." }, drill: { jp: "आज का संपादकीय बहुत अच्छा था", en: "Today's editorial was very good" }, hint: "SAM-PAAD-KII-YA, masculine. Built on संपादक, an editor (unit 44) — the paper's own voice, where every other column reports. The ं reads m before प (unit 1 §1). ⚠️ The one place in a newspaper where पक्षपात (lesson 2) is allowed, because the opinion is declared." },
        { id: "hi-u65l3-samvaaddaataa", type: "vocab", front: "संवाददाता", reading: "samvaaddaataa", meaning: "a correspondent", accept: ["a reporter on the spot"], example: { jp: "हमारे संवाददाता के मुताबिक गाँव में अब बिजली आ गई है।", en: "According to our correspondent, electricity has now reached the village." }, drill: { jp: "हमारे संवाददाता ने यह खबर दी", en: "Our correspondent gave this news" }, hint: "SAM-VAAD-DAA-TAA — ⚠️ MASCULINE DESPITE THE -ा, the same class as पिता (unit 10) and नेता (unit 42), where -ा is masculine for PEOPLE. संवाद is a dialogue and दाता is a giver. The द्दा is a real doubled d, held. Narrower than पत्रकार, a journalist (unit 44): a संवाददाता files from a place." },
        { id: "hi-u65l3-shiirshak", type: "vocab", front: "शीर्षक", reading: "shiirshak", meaning: "a heading", accept: ["the line above a piece of writing"], example: { jp: "शीर्षक पढ़कर मत सोचो कि तुमने पूरी खबर समझ ली।", en: "Do not think from reading the heading that you have understood the whole news." }, drill: { jp: "शीर्षक पढ़कर पूरी खबर मत समझो", en: "Do not take the heading for the whole news" }, hint: "SHIIR-SHAK, masculine. BOTH श AND ष read sh (unit 1 §1a) and this word has one of each — श at the front, ष in the middle. शीर्ष is a head or summit. ⚠️ Not सुर्खी, a headline (unit 44): a सुर्खी is the big front-page shout, a शीर्षक is the plain heading over any piece of writing, including a chapter." },
        { id: "hi-u65l3-kavrej", type: "vocab", front: "कवरेज", reading: "kavrej", meaning: "news coverage", accept: ["how much a story was reported"], example: { jp: "इस विवाद को इतनी कवरेज मिली कि हर चैनल पर वही बात थी।", en: "This controversy got so much coverage that the same thing was on every channel." }, drill: { jp: "इस विवाद को बहुत कवरेज मिली", en: "This controversy got a lot of coverage" }, hint: "KAV-REJ, masculine, and an ENGLISH LOANWORD that Hindi newsrooms use constantly — there is no native word doing this job. ⚠️ unit 1 §9: the gloss is 'news coverage' and not 'coverage', so typing the reading off the prompt does not pass. Compare चैनल and प्रसारण (unit 44), which are the same borrowing." },
        { id: "hi-u65l3-prakaashan", type: "vocab", front: "प्रकाशन", reading: "prakaashan", meaning: "publication", accept: ["the bringing out of a book or paper"], example: { jp: "इस किताब का प्रकाशन अगले महीने होगा, और उसके बाद सब पढ़ेंगे।", en: "This book's publication will be next month, and after that everyone will read it." }, drill: { jp: "इस किताब का प्रकाशन अगले महीने होगा", en: "This book's publication will be next month" }, hint: "PRA-KAA-SHAN, masculine. प्रकाश is light, so literally a bringing into the light. ⚠️ The ACT of publishing and also the HOUSE that does it — both senses, one word, which is why the hint matters. छापना, to print (unit 31), is the physical job." },
        { id: "hi-u65l3-prasaar", type: "vocab", front: "प्रसार", reading: "prasaar", meaning: "circulation", accept: ["how widely a thing spreads"], example: { jp: "शहर में इस अखबार का प्रसार सबसे ज़्यादा है, पर गाँव में कोई नहीं पढ़ता।", en: "This newspaper's circulation is the highest in the city, but in the village nobody reads it." }, drill: { jp: "इस अखबार का प्रसार सबसे ज़्यादा है", en: "This newspaper's circulation is the highest" }, hint: "PRA-SAAR, masculine. ⚠️ ONE LETTER FROM प्रसारण, a broadcast (unit 44), and they are the same root: प्रसारण is the act of broadcasting, प्रसार is the REACH a thing has. Also used for the spread of a language or a disease." },
      ],
    },
    {
      id: "hi-u65l4",
      unit: 65,
      lesson: 4,
      title: "Printed and buried",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Report a disclosure and the rebuttal that followed, call a story a mere sensation, mark a document confidential, name censorship, and ask for the full breakdown of details.",
      items: [
        { id: "hi-u65l4-khulaasaa", type: "vocab", front: "खुलासा", reading: "khulaasaa", meaning: "a disclosure", accept: ["something brought out into the open"], example: { jp: "संवाददाता के खुलासे के बाद सरकार को जवाब देना पड़ा।", en: "After the correspondent's disclosure the government had to answer." }, drill: { jp: "खुलासा होने के बाद सब बदल गया", en: "After the disclosure happened everything changed" }, hint: "KHU-LAA-SAA, masculine — the -आ is honest. Built on खुलना, to come open (unit 26), and plain ख (unit 1 §7). The frame is खुलासा करना, to disclose. ⚠️ Not राज़, a secret (unit 39): a राज़ is the thing hidden, a खुलासा is the act of opening it up." },
        { id: "hi-u65l4-khandan", type: "vocab", front: "खंडन", reading: "khandan", meaning: "a rebuttal", accept: ["a formal denial"], example: { jp: "नेता ने उस खबर का खंडन किया, पर अखबार ने अपना उद्धरण नहीं बदला।", en: "The leader issued a rebuttal of that news, but the newspaper did not change its quotation." }, drill: { jp: "नेता ने उस खबर का खंडन किया", en: "The leader issued a rebuttal of that news" }, hint: "KHAN-DAN, masculine. The ं before ड reads n, and the ड is RETROFLEX d merged to d (unit 1 §1b). ⚠️ Not इनकार, a refusal (unit 30): an इनकार says no to a request, a खंडन says a published statement is false. The word a press release uses." },
        { id: "hi-u65l4-sansanii", type: "vocab", front: "सनसनी", reading: "sansanii", meaning: "a sensation", accept: ["a stir got up for its own sake"], example: { jp: "उसमें कोई खबर नहीं थी, सिर्फ़ सनसनी थी, और दो दिन बाद कोई याद नहीं कर रहा था।", en: "There was no news in it, only a sensation, and two days later nobody was remembering it." }, drill: { jp: "उसमें खबर नहीं सिर्फ़ सनसनी थी", en: "There was no news in it only a sensation" }, hint: "SAN-SA-NII — FEMININE, and -ी makes it predictable for once. The frame is सनसनी फैलाना, to whip up a sensation. ⚠️ Always slightly disapproving in Hindi: a सनसनी is excitement manufactured where there was no story, which is why it sits next to खुलासा above — the real thing and its imitation." },
        { id: "hi-u65l4-gopniiya", type: "vocab", front: "गोपनीय", reading: "gopniiya", meaning: "confidential", accept: ["not to be made public"], example: { jp: "यह कागज़ गोपनीय है, इसका ब्यौरा किसी संवाददाता को नहीं दिया जा सकता।", en: "This paper is confidential; its breakdown of details cannot be given to any correspondent." }, drill: { jp: "यह कागज़ गोपनीय है", en: "This paper is confidential" }, hint: "GOP-NII-YA, INVARIANT: गोपनीय कागज़, गोपनीय बात. Plain ग (unit 1 §7 keeps ग़ uncarded). ⚠️ Not राज़, a secret (unit 39), which is personal; गोपनीय is a CLASSIFICATION stamped on a document, and it is the word an office actually uses." },
        { id: "hi-u65l4-sensar", type: "vocab", front: "सेंसर", reading: "sensar", meaning: "censorship", accept: ["the cutting of what may not be published"], example: { jp: "उस समय हर अखबार पर सेंसर था और खबर आधी ही आती थी।", en: "At that time there was censorship on every newspaper and only half the news came out." }, drill: { jp: "उस समय अखबार पर सेंसर था", en: "At that time there was censorship on the newspaper" }, hint: "SEN-SAR, masculine, an ENGLISH LOANWORD, and the ं before स reads n (unit 1 §1). ⚠️ **It means CENSORSHIP in Hindi and never 'sensor'** — that English word is simply not borrowed, so do not reach for it. unit 1 §9: the gloss is 'censorship', which does not normalise to the reading sensar, so there is no free pass." },
        { id: "hi-u65l4-byauraa", type: "vocab", front: "ब्यौरा", reading: "byauraa", meaning: "a breakdown of details", accept: ["an itemised account"], example: { jp: "मुझे पूरा ब्यौरा चाहिए, सिर्फ़ शीर्षक से काम नहीं चलेगा।", en: "I need the full breakdown of details; the heading alone will not do." }, drill: { jp: "मुझे पूरा ब्यौरा चाहिए", en: "I need the full breakdown of details" }, hint: "BYAU-RAA, masculine. The ब्यौ is ब with य stacked plus the औ mātrā (unit 3) — an unusual cluster, and the only word in the unit with it. ⚠️ A ब्यौरा is itemised, line by line; तफ़सील and 'the details' (unit 32) are the general word. An office asks for a ब्यौरा of expenses." },
      ],
    },
  ],
};
