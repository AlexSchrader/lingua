// HI Unit 7 — नमस्ते ("Hello") — A1
// THE FIRST A1 UNIT, and the script band is behind us: from here every example
// uses only vocabulary taught at or before its unit (unit1.js §8).
//
// ⚠️ THE POLITENESS SPLIT IS TAUGHT HERE, NOT IN A GRAMMAR UNIT. Hindi has three
// second-person pronouns and choosing wrong is not a grammar slip, it is rudeness
// — so तू / तुम / आप and their three copula forms are lesson 2, before the learner
// says anything to anybody. unit1.js §6 records the decision.
// ⚠️ THE COPULA IS CARDED BY FORM, not by infinitive: है (u3l3), हूँ, हो, हैं. See
// unit1.js §5 — this is the only verb in Hindi that gets that treatment.
export const HI_UNIT7 = {
  id: "hi-u7",
  lang: "hi",
  title: "नमस्ते",
  order: 7,
  stage: "a1",
  lessons: [
    {
      id: "hi-u7l1",
      unit: 7,
      lesson: 1,
      title: "Hello and goodbye",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Greet someone in Hindi at any time of day and take your leave of them.",
      items: [
        { id: "hi-u7l1-namaste", type: "vocab", front: "नमस्ते", reading: "namaste", meaning: "hello", accept: ["hi", "greetings", "goodbye"], example: { jp: "नमस्ते, मेरा नाम करन है।", en: "Hello, my name is Karan." }, drill: { jp: "नमस्ते मेरा नाम करन है", en: "Hello my name is Karan" }, hint: "na-ma-STE, with the halant stack स्त from unit 6. It works on arrival AND on leaving, and at any hour — the one greeting you can never get wrong. Palms together is optional but never unwelcome." },
        { id: "hi-u7l1-namaskaar", type: "vocab", front: "नमस्कार", reading: "namaskaar", meaning: "a respectful greeting", accept: ["respectful hello", "formal greetings"], example: { jp: "नमस्कार, यह मेरा घर है।", en: "Greetings, this is my house." }, drill: { jp: "नमस्कार यह मेरा घर है", en: "Greetings this is my house" }, hint: "na-mas-KAAR — the heavier, more formal cousin of नमस्ते. Use it with an older person, on stage, or in writing. Same root, one degree more ceremony." },
        { id: "hi-u7l1-alvidaa", type: "vocab", front: "अलविदा", reading: "alvidaa", meaning: "goodbye", accept: ["farewell", "adieu"], example: { jp: "अलविदा, कल फिर।", en: "Goodbye, again tomorrow." }, drill: { jp: "अलविदा कल फिर", en: "Goodbye again tomorrow" }, hint: "al-vi-DAA, from Arabic. ⚠️ HEAVY: it carries a sense of a long or final parting, so Hindi speakers mostly say नमस्ते or फिर मिलेंगे instead. Learn to recognise it; reach for नमस्ते." },
        { id: "hi-u7l1-suprabhaat", type: "vocab", front: "सुप्रभात", reading: "suprabhaat", meaning: "good morning", accept: ["morning", "a good dawn"], example: { jp: "सुप्रभात, यह सुबह बहुत अच्छी है।", en: "Good morning, this morning is very nice." }, drill: { jp: "सुप्रभात यह सुबह अच्छी है", en: "Good morning this morning is nice" }, hint: "su-pra-BHAAT — सु (good) + प्रभात (dawn), with the प्र stack from unit 6. Formal and slightly literary; in speech most people just say नमस्ते in the morning too." },
        { id: "hi-u7l1-shubhraatri", type: "vocab", front: "शुभ रात्रि", reading: "shubhraatri", meaning: "good night", accept: ["goodnight", "a blessed night"], example: { jp: "शुभ रात्रि, अब रात बहुत अच्छी है।", en: "Good night, the night is very fine now." }, drill: { jp: "शुभ रात्रि अब रात अच्छी है", en: "Good night the night is fine now" }, hint: "shubh RAA-tri — शुभ (auspicious) + रात्रि, the formal word for night beside the everyday रात you met in unit 5. Said on parting at night, never as a greeting." },
        { id: "hi-u7l1-phir", type: "vocab", front: "फिर", reading: "phir", meaning: "again", accept: ["then", "afterwards", "once more"], example: { jp: "कल फिर मेरा काम यहाँ है।", en: "My work is here again tomorrow." }, drill: { jp: "हम कल फिर यहाँ हैं", en: "We are here again tomorrow" }, hint: "PHIR, with the puff on फ. Two jobs: again (फिर कहिए, say it again) and then (फिर क्या हुआ, then what happened). फिर मिलेंगे — we'll meet again — is the everyday goodbye." },
      ],
    },
    {
      id: "hi-u7l2",
      unit: 7,
      lesson: 2,
      title: "Three ways to say you",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Choose the right word for you for the person in front of you, and say I am and you are.",
      items: [
        { id: "hi-u7l2-main", type: "vocab", front: "मैं", reading: "main", meaning: "I", accept: ["me"], example: { jp: "मैं यहाँ हूँ और यह मेरा घर है।", en: "I am here and this is my house." }, drill: { jp: "मैं अब यहाँ हूँ", en: "I am here now" }, hint: "MAIN, with ऐ's two strokes and the nasal dot. ⚠️ Do not confuse it with में (in), which is मे plus the dot: मैं is main, में is men. One is a person, the other a postposition." },
        { id: "hi-u7l2-tum", type: "vocab", front: "तुम", reading: "tum", meaning: "you, speaking casually", accept: ["you"], example: { jp: "तुम मेरे अच्छे दोस्त हो।", en: "You are my good friend." }, drill: { jp: "तुम मेरे दोस्त हो", en: "You are my friend" }, hint: "TUM — friends, cousins, someone younger, someone your own age you know. The everyday middle setting. Takes हो, never है." },
        { id: "hi-u7l2-aap", type: "vocab", front: "आप", reading: "aap", meaning: "you, speaking politely", accept: ["you", "you all"], example: { jp: "आपका घर कहाँ है, और आप कहाँ हैं?", en: "Where is your house, and where are you?" }, drill: { jp: "आप कहाँ हैं", en: "Where are you" }, hint: "AAP. Anyone you have just met, anyone older, anyone senior — and also more than one person. THE SAFE DEFAULT: if you are unsure, आप is never rude and तुम can be. Takes हैं." },
        { id: "hi-u7l2-huun", type: "vocab", front: "हूँ", reading: "huun", meaning: "am", accept: ["I am"], example: { jp: "मैं ठीक हूँ, धन्यवाद।", en: "I am fine, thank you." }, drill: { jp: "मैं यहाँ ठीक हूँ", en: "I am fine here" }, hint: "HOON — nasal ऊ, and it belongs to मैं and nothing else. Hindi picks the copula from the subject: मैं हूँ, तुम हो, आप हैं, यह है." },
        { id: "hi-u7l2-ho", type: "vocab", front: "हो", reading: "ho", meaning: "are, speaking casually", accept: ["you are"], example: { jp: "मेरे दोस्त, तुम अब कहाँ हो?", en: "My friend, where are you now?" }, drill: { jp: "तुम कहाँ हो", en: "Where are you" }, hint: "HO, and it goes with तुम only. Using है with तुम is the single commonest learner slip in Hindi — तुम कहाँ है is wrong, तुम कहाँ हो is right." },
        { id: "hi-u7l2-hain", type: "vocab", front: "हैं", reading: "hain", meaning: "are, speaking politely", accept: ["they are", "you are", "are"], example: { jp: "मेरे तीन दोस्त अब यहाँ हैं।", en: "My three friends are here now." }, drill: { jp: "मेरे दोस्त यहाँ हैं", en: "My friends are here" }, hint: "HAIN — है with the nasal dot, and that dot is the whole difference. It serves आप, plural things, and anyone being spoken of respectfully: मेरे पिता यहाँ हैं." },
      ],
    },
    {
      id: "hi-u7l3",
      unit: 7,
      lesson: 3,
      title: "Please, thank you, sorry",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask for something politely, thank someone, and apologise in Hindi.",
      items: [
        { id: "hi-u7l3-dhanyavaad", type: "vocab", front: "धन्यवाद", reading: "dhanyavaad", meaning: "thank you", accept: ["thanks a lot", "much obliged"], example: { jp: "आपका धन्यवाद, यह किताब बहुत अच्छी है।", en: "Thank you, this book is very good." }, drill: { jp: "धन्यवाद यह किताब अच्छी है", en: "Thank you this book is good" }, hint: "DHAN-ya-vaad — breathy ध, then the न्य stack. The Sanskritic, more formal thank you: shops, offices, writing. Note that Hindi thanks far less often than English does; overusing it sounds stiff." },
        { id: "hi-u7l3-shukriyaa", type: "vocab", front: "शुक्रिया", reading: "shukriyaa", meaning: "thanks", accept: ["cheers", "ta"], example: { jp: "शुक्रिया, मैं ठीक हूँ।", en: "Thanks, I am fine." }, drill: { jp: "शुक्रिया मैं ठीक हूँ", en: "Thanks I am fine" }, hint: "shuk-ri-YAA, from Arabic, with the क्र stack. The warmer, more everyday thanks — friends, a rickshaw driver, a neighbour. Same job as धन्यवाद, one degree less formal." },
        { id: "hi-u7l3-kripayaa", type: "vocab", front: "कृपया", reading: "kripayaa", meaning: "please", accept: ["kindly", "if you would"], example: { jp: "कृपया यह किताब पढ़िए, यह बहुत अच्छी है।", en: "Please read this book; it is very good." }, drill: { jp: "कृपया यहाँ मेरा नाम लिखिए", en: "Please write my name here" }, hint: "KRI-pa-yaa. ⚠️ The little hook under the क is ऋ's mark — the only place in this course you meet it, which is why it is spelled out here (unit1.js §7). Formal and written; in speech politeness usually lives in the verb ending instead." },
        { id: "hi-u7l3-maafkiijie", type: "vocab", front: "माफ़ कीजिए", reading: "maafkiijie", meaning: "excuse me", accept: ["sorry", "pardon me", "forgive me"], example: { jp: "माफ़ कीजिए, यह मेरा कमरा नहीं है।", en: "Excuse me, this is not my room." }, drill: { jp: "माफ़ कीजिए यह मेरा कमरा नहीं है", en: "Excuse me this is not my room" }, hint: "MAAF kee-ji-ye — माफ़ (pardon, with the dotted फ़) plus a polite command. It both apologises and stops a stranger to ask something. Heavier than this is क्षमा कीजिए, from unit 6's क्षमा." },
        { id: "hi-u7l3-koiibaatnahiin", type: "vocab", front: "कोई बात नहीं", reading: "koiibaatnahiin", meaning: "no problem", accept: ["it's nothing", "never mind", "that's alright"], example: { jp: "कोई बात नहीं, कल फिर।", en: "No problem, again tomorrow." }, drill: { jp: "कोई बात नहीं कल फिर", en: "No problem again tomorrow" }, hint: "ko-ii BAAT na-HEEN — literally no matter at all. THE reply to माफ़ कीजिए and to धन्यवाद both, which is why Hindi needs no separate you're welcome." },
        { id: "hi-u7l3-svaagat", type: "vocab", front: "स्वागत", reading: "svaagat", meaning: "a welcome", accept: ["welcome", "reception"], example: { jp: "मेरे घर पर आपका स्वागत है।", en: "You are welcome at my house." }, drill: { jp: "यहाँ आपका स्वागत है", en: "You are welcome here" }, hint: "SVAA-gat, masculine, with the स्व stack. Hindi says it as a noun, not a verb: आपका स्वागत है, your welcome exists. You will read it on every gate and doorway in India." },
      ],
    },
    {
      id: "hi-u7l4",
      unit: 7,
      lesson: 4,
      title: "How to address someone",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Address a stranger, an elder, a friend and a guest with the right word in Hindi.",
      items: [
        { id: "hi-u7l4-tuu", type: "vocab", front: "तू", reading: "tuu", meaning: "you, speaking intimately", accept: ["thou", "you"], example: { jp: "तू अब बड़ा बच्चा है।", en: "You are a big child now." }, drill: { jp: "तू मेरा बच्चा है", en: "You are my child" }, hint: "TOO — the third and lowest setting, below तुम. Only for a small child, a very close friend, or God in a prayer. ⚠️ To anyone else it is an insult. Recognise it; do not use it. It takes है." },
        { id: "hi-u7l4-jii", type: "vocab", front: "जी", reading: "jii", meaning: "a respectful sir or madam", accept: ["sir", "madam", "yes"], example: { jp: "जी, मैं यहाँ हूँ।", en: "Yes sir, I am here." }, drill: { jp: "जी मैं यहाँ हूँ", en: "Yes I am here" }, hint: "JEE, and it is everywhere. Stuck onto a name it shows respect (करन जी); on its own it means yes, I'm listening; with हाँ or नहीं it makes them polite — जी हाँ, जी नहीं. It has no gender." },
        { id: "hi-u7l4-shrii", type: "vocab", front: "श्री", reading: "shrii", meaning: "Mr", accept: ["mister", "the honourable"], example: { jp: "श्री करन मेरे अच्छे दोस्त हैं।", en: "Mr Karan is a good friend of mine." }, drill: { jp: "श्री करन यहाँ हैं", en: "Mr Karan is here" }, hint: "SHREE, with the श्र stack. Written before a man's name on letters, forms and signs — rarely said aloud, where जी after the name does the same job." },
        { id: "hi-u7l4-shriimatii", type: "vocab", front: "श्रीमती", reading: "shriimatii", meaning: "Mrs", accept: ["missus", "madam"], example: { jp: "सड़क के अंत पर श्रीमती जी का घर है।", en: "Madam's house is at the end of the road." }, drill: { jp: "श्रीमती जी का घर वहाँ है", en: "Madam's house is over there" }, hint: "shree-ma-TEE — श्री with a feminine ending. Same use as श्री: written, formal, on the envelope rather than in the mouth." },
        { id: "hi-u7l4-dost", type: "vocab", front: "दोस्त", reading: "dost", meaning: "a friend", accept: ["friend", "mate", "pal"], example: { jp: "मेरे तीन दोस्त हिंदी बोलते हैं।", en: "Three of my friends speak Hindi." }, drill: { jp: "मेरे तीन दोस्त यहाँ हैं", en: "Three of my friends are here" }, hint: "DOST, from Persian, with the स्त stack. ⚠️ No gender change: a woman friend is also मेरी दोस्त, so it is the adjective in front that tells you — मेरा दोस्त or मेरी दोस्त." },
        { id: "hi-u7l4-mehmaan", type: "vocab", front: "मेहमान", reading: "mehmaan", meaning: "a guest", accept: ["guest", "visitor"], example: { jp: "एक मेहमान अब हमारे घर पर है।", en: "A guest is at our house now." }, drill: { jp: "एक मेहमान अब यहाँ है", en: "A guest is here now" }, hint: "meh-MAAN, masculine, from Persian. It carries real weight in India — मेहमान भगवान होता है, a guest is a god — which is why स्वागत and मेहमान turn up together so often." },
      ],
    },
  ],
};
