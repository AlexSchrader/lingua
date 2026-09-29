// HI Unit 26 — और रोज़ के काम ("More things you do every day") — A1
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 RETHEMED SLOT — the scaffold's "Vocabulary 2", a title lint hard-errors on.
//
// WHY MORE VERBS, MEASURED. u12 filled the biggest verb hole in the language (21
// verbs of movement and daily routine) and said so in its own header. Probing the
// merged u1–u25 corpus for what a learner STILL cannot do: **0 of 14** on a list
// of the commonest remaining verbs — no word for open, put, leave, pour, search,
// break, play, sing, run, bring, send, wear, wash or cut. u22 took the two most
// urgent (कहना, सोचना) because reported speech is sentence grammar; these
// twenty-four are the rest, grouped by what the hands and body are doing.
//
// ⚠️ EVERY VERB DRILL CARRIES THE BARE -ना INFINITIVE, AND THIS IS NOT OPTIONAL.
// §5 headwords every verb in the infinitive and the router matches the front as an
// EXACT STRING, so a drill written "बच्चा रास्ते पर गिरता है" contains no गिरना and
// the card silently loses cloze:choice and sentence:build. lint's `.includes()`
// check is NOT the same test. Six drafts in unit24.js failed exactly this way and
// were caught by running the real router (`canCloze`/`canSentence`) rather than
// lint. The frames that work, all inherited from unit12.js: `<V-ना> मुश्किल है`,
// `मुझे <masc. object> <V-ना> है`, `<V-ना> अच्छा है`, `<V-ना> ज़रूरी है`.
//
// THE CAUSATIVE IN -आ- IS TREATED AS DERIVATION, NOT INFLECTION, AND THAT IS A
// DELIBERATE CALL. समझाना (l1) sits beside समझना (u6l4), दिखाना (l1) beside देखना
// (u3l2), and चलाना (unit29.js l2) beside चलना (u12l1). RUNBOOK §4's clarified
// rule is the test — "would a learner who knows one already know the other?" — and
// the answer is no: the -आ- causative changes who is doing what to whom and takes
// a different object. They are separate dictionary entries, `scope-hi.mjs`
// generates neither from the other, and the router cannot mis-blank either inside
// the other (समझना is not a substring of समझाना). Three pairs, deliberately, not
// by accident.
//
// ⚠️ THE TRANSITIVE / INTRANSITIVE TWINS ARE NAMED IN HINTS AND NOT CARDED.
// Hindi pairs खोलना/खुलना, तोड़ना/टूटना, छोड़ना/छूटना, काटना/कटना — you do it
// versus it happens. Only the TRANSITIVE member is carded; its twin lives in the
// hint. Carding both would double the unit and teach one idea twice, and the
// intransitive halves mostly need the ergative-free past this band defers anyway.
//
// ─────────────────────────────────────────────────────────────────────────────
// FREE — one word block 3 adds here, and it closes an asymmetry.
// ─────────────────────────────────────────────────────────────────────────────
//   • इसमें — unit1.js declared उसमें FREE and not इसमें, which was an oversight
//     rather than a decision: they are the same form of यह and वह, the two
//     demonstratives block 1 taught together in u3. Same test, same class.
// FREE: इसमें
export const HI_UNIT26 = {
  id: "hi-u26",
  lang: "hi",
  title: "और रोज़ के काम",
  order: 26,
  stage: "a1",
  lessons: [
    {
      id: "hi-u26l1",
      unit: 26,
      lesson: 1,
      title: "Remembering, explaining and showing",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say you have forgotten something, ask someone to explain or show you, and say whether you accept what you are told.",
      items: [
        { id: "hi-u26l1-bhuulnaa", type: "vocab", front: "भूलना", reading: "bhuulnaa", meaning: "to forget", accept: ["forget", "to lose track of", "to slip one's mind"], example: { jp: "मैं रोज़ अपनी चाबी भूलता हूँ।", en: "I forget my key every day." }, drill: { jp: "नाम भूलना बहुत बुरा है", en: "Forgetting a name is very bad" }, hint: "BHUUL-NAA. मैं भूल गया is the everyday 'I forgot'. It also works with no object at all — भूल जाओ, forget it. भूल on its own is a noun, an error." },
        { id: "hi-u26l1-maannaa", type: "vocab", front: "मानना", reading: "maannaa", meaning: "to accept", accept: ["to agree to", "to believe", "to obey"], example: { jp: "मैं यह सच मानता हूँ।", en: "I accept that this is true." }, drill: { jp: "सब कुछ मानना मुश्किल है", en: "Accepting everything is difficult" }, hint: "MAAN-NAA with a genuinely doubled न — hold the n. It covers accepting, believing and obeying, and the sentence decides which: मैं मानता हूँ, I believe; वह नहीं मानता, he won't listen." },
        { id: "hi-u26l1-pahchaannaa", type: "vocab", front: "पहचानना", reading: "pahchaannaa", meaning: "to recognise", accept: ["to identify", "to know by sight", "to tell who it is"], example: { jp: "मैं इस आदमी को नहीं पहचानता।", en: "I do not recognise this man." }, drill: { jp: "किसी को पहचानना आसान नहीं है", en: "Recognising someone is not easy" }, hint: "PAH-CHAAN-NAA, with a doubled न at the end. The person recognised takes को: मैं उसे पहचानता हूँ. पहचान is the noun — recognition, and also your identity." },
        { id: "hi-u26l1-samjhaanaa", type: "vocab", front: "समझाना", reading: "samjhaanaa", meaning: "to explain", accept: ["to make clear", "to get someone to understand", "to talk someone round"], example: { jp: "शिक्षक हमें यह काम समझाते हैं।", en: "The teacher explains this work to us." }, drill: { jp: "बच्चों को समझाना मुश्किल है", en: "Explaining to children is difficult" }, hint: "SAM-JHAA-NAA is समझना with an extra आ pushed into the middle, and that आ is Hindi's causative: समझना is to understand, समझाना is to MAKE someone understand. The person taught takes को." },
        { id: "hi-u26l1-dikhaanaa", type: "vocab", front: "दिखाना", reading: "dikhaanaa", meaning: "to show", accept: ["to point out", "to let someone see", "to display"], example: { jp: "वह मुझे अपना नया फ़ोन दिखाता है।", en: "He shows me his new telephone." }, drill: { jp: "बच्चों को रास्ता दिखाना ज़रूरी है", en: "It is important to show children the way" }, hint: "DI-KHAA-NAA is that same causative आ on देखना: देखना is to see, दिखाना is to make someone see. The person shown takes को — मुझे दिखाओ, show me." },
        { id: "hi-u26l1-dohraanaa", type: "vocab", front: "दोहराना", reading: "dohraanaa", meaning: "to repeat", accept: ["to say again", "to do over", "to revise"], example: { jp: "शिक्षक हर नया शब्द दोहराते हैं।", en: "The teacher repeats every new word." }, drill: { jp: "हर दिन दोहराना बहुत ज़रूरी है", en: "Repeating every day is very important" }, hint: "DOH-RAA-NAA is built on दो, two — to do a thing a second time. It covers repeating a word and revising a lesson alike, which is why a Hindi teacher says दोहराओ at the end of class." },
      ],
    },
    {
      id: "hi-u26l2",
      unit: 26,
      lesson: 2,
      title: "Handling things",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Open something, put it down, leave it behind, pour into it, look for it, or break it.",
      items: [
        { id: "hi-u26l2-kholnaa", type: "vocab", front: "खोलना", reading: "kholnaa", meaning: "to open", accept: ["to undo", "to unlock", "to turn on"], example: { jp: "दुकानदार सुबह आठ बजे दुकान खोलता है।", en: "The shopkeeper opens the shop at eight in the morning." }, drill: { jp: "यह दरवाज़ा खोलना मुश्किल है", en: "Opening this door is difficult" }, hint: "KHOL-NAA covers much more than English 'open': a door, a bottle, a knot, a tap, a shop. खुलना is its intransitive twin — दुकान खुलती है, the shop opens by itself." },
        { id: "hi-u26l2-rakhnaa", type: "vocab", front: "रखना", reading: "rakhnaa", meaning: "to put", accept: ["to stow", "to keep", "to set down"], example: { jp: "मैं अपनी किताब मेज़ पर रखता हूँ।", en: "I put my book on the table." }, drill: { jp: "यह सामान कहाँ रखना है", en: "Where is this merchandise to be put" }, hint: "RAKH-NAA is both to put down and to keep: किताब मेज़ पर रखो, put the book on the table; इसे अपने पास रखो, keep it with you. ध्यान रखना is to look after something." },
        { id: "hi-u26l2-chhornaa", type: "vocab", front: "छोड़ना", reading: "chhornaa", meaning: "to leave behind", accept: ["to abandon", "to give up", "to drop off"], example: { jp: "मैं रोज़ अपना बैग घर पर छोड़ता हूँ।", en: "I leave my bag at home every day." }, drill: { jp: "यह आदत छोड़ना मुश्किल है", en: "Giving up this habit is difficult" }, hint: "CHHOR-NAA with ड़, a flapped r. It stretches a long way — leaving a place, leaving a thing behind, giving up a habit, dropping someone off. छूटना is what happens by itself: ट्रेन छूट गई, the train left." },
        { id: "hi-u26l2-daalnaa", type: "vocab", front: "डालना", reading: "daalnaa", meaning: "to pour", accept: ["to put in", "to throw in", "to insert"], example: { jp: "मैं चाय में चीनी डालता हूँ।", en: "I put sugar in the tea." }, drill: { jp: "इसमें थोड़ा पानी डालना है", en: "A little water is to be poured into this" }, hint: "DAAL-NAA with a retroflex ड — curl the tongue back. It is the general 'put in' verb for anything liquid or loose: चीनी डालो, पानी डालो. For a solid object on a surface you want रखना instead." },
        { id: "hi-u26l2-dhuundhnaa", type: "vocab", front: "ढूँढना", reading: "dhuundhnaa", meaning: "to search for", accept: ["to look for", "to hunt for", "to seek"], example: { jp: "मैं सुबह से अपनी चाबी ढूँढता हूँ।", en: "I have been looking for my key since morning." }, drill: { jp: "नया घर ढूँढना मुश्किल है", en: "Searching for a new house is difficult" }, hint: "DHUUNDH-NAA — two ढ sounds with a hum between them, and the ँ nasalises the ू. It is looking FOR something; FINDING it is मिलना, with a different frame: मुझे चाबी मिली, I found the key." },
        { id: "hi-u26l2-tornaa", type: "vocab", front: "तोड़ना", reading: "tornaa", meaning: "to break", accept: ["to smash", "to snap", "to break off"], example: { jp: "बच्चा रोज़ कोई चीज़ तोड़ता है।", en: "The child breaks something every day." }, drill: { jp: "यह पत्थर तोड़ना मुश्किल है", en: "Breaking this stone is difficult" }, hint: "TOR-NAA with ड़, a flapped r. This is the transitive one — YOU break it. टूटना is when a thing breaks by itself: गिलास टूट गया. Hindi keeps that pair apart where English uses one word." },
      ],
    },
    {
      id: "hi-u26l3",
      unit: 26,
      lesson: 3,
      title: "Playing and moving your body",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you do for fun and exercise — play, sing, dance, run, jump or swim.",
      items: [
        { id: "hi-u26l3-khelnaa", type: "vocab", front: "खेलना", reading: "khelnaa", meaning: "to play", accept: ["play", "to take part in a game"], example: { jp: "बच्चे रोज़ शाम को बाहर खेलते हैं।", en: "The children play outside every evening." }, drill: { jp: "बच्चों के साथ खेलना अच्छा है", en: "Playing with children is good" }, hint: "KHEL-NAA. The game takes no postposition: क्रिकेट खेलना, to play cricket. खेल is the noun, a game or a sport. It is NOT used for playing an instrument — that is बजाना." },
        { id: "hi-u26l3-gaanaa", type: "vocab", front: "गाना", reading: "gaanaa", meaning: "to sing", accept: ["sing", "to perform a song"], example: { jp: "मीना बहुत अच्छा गाती है।", en: "Meena sings very well." }, drill: { jp: "अच्छा गाना बहुत मुश्किल है", en: "Singing well is very difficult" }, hint: "GAA-NAA is ALSO the noun, a song — one spelling doing two jobs, exactly like खाना (eat / food). So गाना गाना means 'to sing a song' and nobody finds that strange. As a noun its plural is गाने." },
        { id: "hi-u26l3-naachnaa", type: "vocab", front: "नाचना", reading: "naachnaa", meaning: "to dance", accept: ["dance", "to move to music"], example: { jp: "त्योहार में सब लोग नाचते हैं।", en: "At the festival everybody dances." }, drill: { jp: "लोगों के सामने नाचना मुश्किल है", en: "Dancing in front of people is difficult" }, hint: "NAACH-NAA, with a plain ch. नाच is the noun, a dance. Hindi says नाच-गाना as one phrase for singing and dancing together, which is how a festival gets described." },
        { id: "hi-u26l3-daurnaa", type: "vocab", front: "दौड़ना", reading: "daurnaa", meaning: "to run", accept: ["run", "to sprint", "to rush"], example: { jp: "कुत्ता बच्चों के पीछे दौड़ता है।", en: "The dog runs behind the children." }, drill: { jp: "रोज़ सुबह दौड़ना अच्छा है", en: "Running every morning is good" }, hint: "DAUR-NAA with औ and a flapped ड़. It is running on your own feet and also a thing rushing along — गाड़ी दौड़ती है, the car races. दौड़ is the noun, a race." },
        { id: "hi-u26l3-kuudnaa", type: "vocab", front: "कूदना", reading: "kuudnaa", meaning: "to jump", accept: ["jump", "to leap", "to bound"], example: { jp: "बंदर पेड़ से पेड़ पर कूदता है।", en: "The monkey jumps from tree to tree." }, drill: { jp: "इतना ऊपर कूदना मुश्किल है", en: "Jumping this high is difficult" }, hint: "KUUD-NAA with a long ू. It is jumping and also skipping ahead — लाइन में कूदना, to jump the queue. कूद is the noun, a leap." },
        { id: "hi-u26l3-tairnaa", type: "vocab", front: "तैरना", reading: "tairnaa", meaning: "to swim", accept: ["swim", "to float", "to bathe in water"], example: { jp: "मछली नदी में तैरती है।", en: "The fish swims in the river." }, drill: { jp: "इस नदी में तैरना मुश्किल है", en: "Swimming in this river is difficult" }, hint: "TAIR-NAA, with the ऐ of 'pain'. It covers both swimming and floating: नाव तैरती है, the boat floats. तैराकी is the sport itself." },
      ],
    },
    {
      id: "hi-u26l4",
      unit: 26,
      lesson: 4,
      title: "Bringing, wearing and washing",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you bring, what you send, what you are wearing, and what needs washing or cutting.",
      items: [
        { id: "hi-u26l4-laanaa", type: "vocab", front: "लाना", reading: "laanaa", meaning: "to bring", accept: ["bring", "to fetch", "to bring along"], example: { jp: "मैं बाज़ार से सब्ज़ी लाता हूँ।", en: "I bring vegetables from the market." }, drill: { jp: "यहाँ पानी लाना बहुत मुश्किल है", en: "Bringing water here is very difficult" }, hint: "LAA-NAA is ले plus आना squeezed into one verb, which is exactly what it means: take and come. Hindi has no separate word for 'fetch'. Its mirror is ले जाना, to take away." },
        { id: "hi-u26l4-bhejnaa", type: "vocab", front: "भेजना", reading: "bhejnaa", meaning: "to send", accept: ["send", "to dispatch", "to post"], example: { jp: "मैं रोज़ अपने घर पैसा भेजता हूँ।", en: "I send money home every day." }, drill: { jp: "यह सामान कल भेजना है", en: "This merchandise is to be sent tomorrow" }, hint: "BHEJ-NAA. The person sent to takes को: मुझे भेजो. It covers a letter, money, a person and a message alike, with no change of verb." },
        { id: "hi-u26l4-pahannaa", type: "vocab", front: "पहनना", reading: "pahannaa", meaning: "to wear", accept: ["to put on", "to dress in", "to have on"], example: { jp: "वह रोज़ सफ़ेद कमीज़ पहनता है।", en: "He wears a white shirt every day." }, drill: { jp: "नए कपड़े पहनना अच्छा लगता है", en: "Wearing new clothes feels good" }, hint: "PA-HAN-NAA with a doubled न. It is both putting on and having on — Hindi does not split those. Shoes and spectacles take पहनना too: जूते पहनो, चश्मा पहनो." },
        { id: "hi-u26l4-dhonaa", type: "vocab", front: "धोना", reading: "dhonaa", meaning: "to wash", accept: ["wash", "to rinse", "to launder"], example: { jp: "मैं रोज़ अपने कपड़े धोता हूँ।", en: "I wash my clothes every day." }, drill: { jp: "हाथ धोना बहुत ज़रूरी है", en: "Washing your hands is very important" }, hint: "DHO-NAA is washing a THING — clothes, hands, dishes. Washing YOURSELF is नहाना, and Hindi keeps the two strictly apart. Read it against होना, सोना and रोना: one letter each." },
        { id: "hi-u26l4-kaatnaa", type: "vocab", front: "काटना", reading: "kaatnaa", meaning: "to cut", accept: ["cut", "to chop", "to slice"], example: { jp: "मीना रसोई में सब्ज़ी काटती है।", en: "Meena cuts vegetables in the kitchen." }, drill: { jp: "यह फल काटना बहुत आसान है", en: "Cutting this fruit is very easy" }, hint: "KAAT-NAA with a RETROFLEX ट — curl the tongue back. It covers cutting, chopping, a dog biting, and even passing time. कटना is what happens by itself." },
        { id: "hi-u26l4-baandhnaa", type: "vocab", front: "बाँधना", reading: "baandhnaa", meaning: "to tie", accept: ["to fasten", "to bind", "to do up"], example: { jp: "वह हर सुबह अपना सामान बाँधता है।", en: "He ties up his things every morning." }, drill: { jp: "बाल बाँधना बहुत आसान है", en: "Tying your hair is very easy" }, hint: "BAANDH-NAA — the ँ hums right through the aa, and ध is dental with a puff. It is tying a knot, a parcel, hair or a turban. बंद is its relative: बंद करना is to close, बाँधना is to tie shut." },
      ],
    },
  ],
};
