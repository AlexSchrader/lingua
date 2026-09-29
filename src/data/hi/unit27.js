// HI Unit 27 — मन और स्वभाव ("Feelings and character") — A1
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 RETHEMED SLOT — the scaffold's "Vocabulary 3", a title lint hard-errors on.
//
// WHY FEELINGS, MEASURED. Probed the merged u1–u26 corpus: **0 of 10** on the
// commonest emotion words. The whole language taught exactly three feelings —
// खुश (u8), प्यार (u6) and अकेला (u10) — plus u20's physical sensations (भूख,
// प्यास, दर्द, थकान). A learner reaching u26 could say they were hungry and could
// not say they were sad, angry, afraid, worried, hopeful, or that they liked
// anything. Character words were emptier still: sixteen adjectives across u4, u6,
// u10 and u19 and not one of them about a PERSON's nature.
//
// THE PATTERN THIS UNIT IS REALLY TEACHING, and u20 set it up: **HINDI PUTS A
// FEELING IN A NOUN, NOT AN ADJECTIVE, AND THE PERSON FEELING IT TAKES मुझे.**
//     मुझे गुस्सा आता है      I get angry     (anger comes to me)
//     मुझे डर लगता है         I am afraid     (fear attaches to me)
//     मुझे शर्म आती है         I am embarrassed
//     मुझे यह पसंद है          I like this     (this is liked by me)
//     मुझे उम्मीद है            I hope
//     मुझे उस पर भरोसा है      I trust him
// Every hint in l1 and l2 names the FRAME and not only the word, because the word
// alone is useless — a learner who knows डर and not मुझे डर लगता है cannot say
// anything with it. u20's header made the same argument for बुखार and थकान; this
// unit finishes the job for the emotions.
//
// THE INVARIANT -ी ADJECTIVES ARE THE POINT OF l4. §6 headwords every adjective
// masculine singular, and unit16.js and unit19.js already noted that a -ी
// adjective DERIVED from a noun does not agree (गुलाबी, नारंगी, भारी, असली,
// ज़रूरी, खाली). This unit adds दुखी and आलसी to that class and says so in both
// hints, because a learner who has learnt "-ी means feminine" from the noun rules
// will otherwise try to make आलसी agree.
//
// LEXEME CALLS MADE BY HAND. Each is a DERIVATION, which RUNBOOK §4's clarified
// rule allows (fragen / die Frage), and `scope-hi.mjs` generates none of them:
//   • प्यारा (l2, "dear") / प्यार (u6l2, "love"). ⚠️ AND A MECHANICAL NOTE:
//     findWholeWord's boundary test uses \p{L}, and the ा in प्यारा is a MĀTRĀ,
//     not a letter — so "प्यारा" DOES satisfy a whole-word search for "प्यार".
//     Harmless here (u6l2's drill does not contain प्यारा and each card clozes
//     only its own front), but a later seat must not put प्यारा in प्यार's drill.
//   • दुखी (l1) / दुख — दुख is NOT taught, so there is no pair to judge.
//   • आलसी (l4) / आलस, ईमानदार (l4) / ईमान, नफ़रत / — none of the bases is
//     taught either.
//   • ईमानदार (l4) joins दुकानदार (u18l4) and रिश्तेदार (u10l3) on the -दार
//     agent suffix. Three separate entries, one suffix; block 2 already reasoned
//     that pattern through.
//   • डर (l1, "fear") and डरना — डरना is deliberately NOT carded. The noun
//     carries the everyday frame (मुझे डर लगता है) and the verb would be a second
//     mastery track for the same idea; डरना is named in डर's hint instead.
//   • हँसी is deliberately NOT carded: `derive("हँसना")` generates हँसी from
//     unit24.js's front, so it is an INFLECTION and a hard block, not a choice.
export const HI_UNIT27 = {
  id: "hi-u27",
  lang: "hi",
  title: "मन और स्वभाव",
  order: 27,
  stage: "a1",
  lessons: [
    {
      id: "hi-u27l1",
      unit: 27,
      lesson: 1,
      title: "Sad, angry, afraid and hopeful",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how you feel — sad, angry, afraid, worried, hopeful or enjoying yourself — using the मुझे frame Hindi puts feelings in.",
      items: [
        { id: "hi-u27l1-dukhii", type: "vocab", front: "दुखी", reading: "dukhii", meaning: "sad", accept: ["unhappy", "sorrowful", "miserable"], example: { jp: "वह लड़की आज बहुत दुखी है।", en: "That girl is very sad today." }, drill: { jp: "मेरा दोस्त आज दुखी है", en: "My friend is sad today" }, hint: "DU-KHII ends in -ी and does NOT change for gender, because it is built off the noun दुख, sorrow — the same invariant class as ज़रूरी and भारी. खुश is its opposite and is also invariant." },
        { id: "hi-u27l1-gussaa", type: "vocab", front: "गुस्सा", reading: "gussaa", meaning: "anger", accept: ["rage", "temper", "being angry"], example: { jp: "मुझे उस पर बहुत गुस्सा आता है।", en: "I get very angry at him." }, drill: { jp: "उसका गुस्सा बहुत बुरा है", en: "His temper is very bad" }, hint: "GUS-SAA, MASCULINE, with a doubled स. Hindi puts anger in a NOUN the way it does hunger: मुझे गुस्सा आता है, anger comes to me. गुस्से में means 'in a temper'." },
        { id: "hi-u27l1-dar", type: "vocab", front: "डर", reading: "dar", meaning: "fear", accept: ["fright", "dread", "being afraid"], example: { jp: "बच्चे को कुत्ते से डर लगता है।", en: "The child is afraid of the dog." }, drill: { jp: "मुझे इस रास्ते से डर लगता है", en: "I am afraid of this road" }, hint: "DAR, MASCULINE, with a RETROFLEX ड — curl the tongue back. The frame is X से डर लगता है, 'fear attaches from X', and that is how Hindi says afraid OF something. डरना is the verb from it." },
        { id: "hi-u27l1-chintaa", type: "vocab", front: "चिंता", reading: "chintaa", meaning: "worry", accept: ["anxiety", "concern", "being worried"], example: { jp: "माँ को हमारी चिंता होती है।", en: "Mother worries about us." }, drill: { jp: "इस काम की चिंता मत करो", en: "Don't worry about this work" }, hint: "CHIN-TAA, FEMININE. चिंता करना is to worry, and चिंता मत करो — don't worry — is one of the most useful things you can say. Read it against चीनी, sugar: they look alike and are not related." },
        { id: "hi-u27l1-ummiid", type: "vocab", front: "उम्मीद", reading: "ummiid", meaning: "hope", accept: ["expectation", "what one hopes for", "trust in the future"], example: { jp: "मुझे अच्छे मौसम की उम्मीद है।", en: "I am hoping for good weather." }, drill: { jp: "मुझे इस काम से उम्मीद है", en: "I have hope from this work" }, hint: "UM-MIID, FEMININE, with a doubled म. The frame is मुझे उम्मीद है कि… , 'I have hope that…'. आशा is its Sanskrit twin and is the more formal of the two." },
        { id: "hi-u27l1-mazaa", type: "vocab", front: "मज़ा", reading: "mazaa", meaning: "enjoyment", accept: ["fun", "pleasure", "a good time"], example: { jp: "बच्चों को बारिश में बहुत मज़ा आता है।", en: "Children enjoy the rain a lot." }, drill: { jp: "यहाँ रहने में बहुत मज़ा है", en: "There is a lot of fun in living here" }, hint: "MA-ZAA, MASCULINE, with the Persian ज़. The frame is मज़ा आता है, 'enjoyment comes': मुझे मज़ा आया, I enjoyed it. मज़े में is having a good time, and मज़ाक is a joke." },
      ],
    },
    {
      id: "hi-u27l2",
      unit: 27,
      lesson: 2,
      title: "Liking, wanting and trusting",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you like, what your interests are, what you wish for, who you trust and what you cannot stand.",
      items: [
        { id: "hi-u27l2-pasand", type: "vocab", front: "पसंद", reading: "pasand", meaning: "liking", accept: ["a preference", "what one likes", "approval"], example: { jp: "मुझे यह शहर बहुत पसंद है।", en: "I like this city a lot." }, drill: { jp: "मुझे मीठी चाय पसंद है", en: "I like sweet tea" }, hint: "PA-SAND, FEMININE, and it works as a whole frame: मुझे X पसंद है, 'X is liked by me' — the thing liked is the SUBJECT, not the object. पसंद करना is the deliberate version, to choose or approve." },
        { id: "hi-u27l2-shauk", type: "vocab", front: "शौक", reading: "shauk", meaning: "a keen interest", accept: ["a hobby", "a passion for something", "enthusiasm"], example: { jp: "मुझे किताबें पढ़ने का शौक है।", en: "I have a taste for reading books." }, drill: { jp: "उसे गाने का शौक है", en: "He has a taste for singing" }, hint: "SHAUK, MASCULINE. The frame is X का शौक है, and the verb goes into its -ने form: पढ़ने का शौक, a taste for reading. शौकीन is the person who has one." },
        { id: "hi-u27l2-ichchhaa", type: "vocab", front: "इच्छा", reading: "ichchhaa", meaning: "a wish", accept: ["a desire", "what one would like", "one's will"], example: { jp: "हिंदी सीखने की मेरी इच्छा बहुत पुरानी है।", en: "My wish to learn Hindi is a very old one." }, drill: { jp: "यह मेरी अपनी इच्छा है", en: "This is my own wish" }, hint: "ICH-CHHAA, FEMININE, with the च्छ conjunct — च and छ stacked. It is more formal than चाहना and reads as a considered wish rather than a passing want. इच्छा से means willingly." },
        { id: "hi-u27l2-bharosaa", type: "vocab", front: "भरोसा", reading: "bharosaa", meaning: "trust", accept: ["reliance", "confidence in someone", "faith in a person"], example: { jp: "मुझे अपने दोस्त पर भरोसा है।", en: "I trust my friend." }, drill: { jp: "मुझे इस दुकान पर भरोसा है", en: "I trust this shop" }, hint: "BHA-RO-SAA, MASCULINE. The person or thing trusted takes पर: मुझे आप पर भरोसा है. It is trust that something will work or someone will come through, not religious faith — that is विश्वास." },
        { id: "hi-u27l2-pyaaraa", type: "vocab", front: "प्यारा", reading: "pyaaraa", meaning: "dear", accept: ["lovely", "endearing", "beloved"], example: { jp: "यह बच्चा बहुत प्यारा है।", en: "This child is very sweet." }, drill: { jp: "मेरा प्यारा कुत्ता यहाँ है", en: "My dear dog is here" }, hint: "PYAA-RAA is an -ा word and AGREES: प्यारा बच्चा, प्यारी बहन, प्यारे दोस्त. It is built on प्यार, love, and it means both 'dear to me' and 'lovely to look at'." },
        { id: "hi-u27l2-nafrat", type: "vocab", front: "नफ़रत", reading: "nafrat", meaning: "hatred", accept: ["loathing", "disgust", "hate"], example: { jp: "मुझे झूठ से नफ़रत है।", en: "I hate lying." }, drill: { jp: "मुझे इस काम से नफ़रत है", en: "I hate this work" }, hint: "NAF-RAT, FEMININE, with the Persian फ़ — an f. The frame is X से नफ़रत है. It is a strong word; for an ordinary dislike Hindi just says पसंद नहीं." },
      ],
    },
    {
      id: "hi-u27l3",
      unit: 27,
      lesson: 3,
      title: "Troubled, surprised and ashamed",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that something has worn you down, surprised you or embarrassed you, and that you are proud of someone.",
      items: [
        { id: "hi-u27l3-pareshaan", type: "vocab", front: "परेशान", reading: "pareshaan", meaning: "troubled", accept: ["worried and harassed", "bothered", "in a fix"], example: { jp: "वह अपने काम से बहुत परेशान है।", en: "He is very troubled by his work." }, drill: { jp: "मैं इस भीड़ से परेशान हूँ", en: "I am troubled by this crowd" }, hint: "PA-RE-SHAAN ends in a consonant, so it never changes: परेशान आदमी, परेशान औरत. It is stronger than चिंता — worry that has begun to wear you down. परेशानी is the noun, a trouble." },
        { id: "hi-u27l3-hairaan", type: "vocab", front: "हैरान", reading: "hairaan", meaning: "astonished", accept: ["amazed", "taken aback", "surprised"], example: { jp: "यह सुनकर मैं बहुत हैरान हूँ।", en: "Hearing this I am very astonished." }, drill: { jp: "वह यह देखकर हैरान है", en: "He is astonished on seeing this" }, hint: "HAI-RAAN, invariant like परेशान. It is surprise of either kind, good or bad. In some regions it also means worn out, so हैरान-परेशान together means thoroughly harassed." },
        { id: "hi-u27l3-naaraaz", type: "vocab", front: "नाराज़", reading: "naaraaz", meaning: "displeased", accept: ["annoyed", "cross with someone", "offended"], example: { jp: "वह अपने बेटे से नाराज़ है।", en: "He is displeased with his son." }, drill: { jp: "शिक्षक आज बच्चों से नाराज़ हैं", en: "The teacher is cross with the children today" }, hint: "NAA-RAAZ with the Persian ज़, and it never changes its ending. The person you are cross with takes से, never पर or को. नाराज़गी is the noun." },
        { id: "hi-u27l3-garv", type: "vocab", front: "गर्व", reading: "garv", meaning: "pride", accept: ["a sense of pride", "self-respect", "being proud"], example: { jp: "मुझे अपने देश पर गर्व है।", en: "I am proud of my country." }, drill: { jp: "मुझे अपनी बहन पर गर्व है", en: "I am proud of my sister" }, hint: "GARV, MASCULINE, and the र sits above the ग as a small hook — that is the र्व cluster. The frame is X पर गर्व है. This is the good kind of pride; the bad kind is घमंड." },
        { id: "hi-u27l3-sharm", type: "vocab", front: "शर्म", reading: "sharm", meaning: "shame", accept: ["embarrassment", "modesty", "shyness"], example: { jp: "उसे लोगों के सामने बोलने में शर्म आती है।", en: "He is embarrassed about speaking in front of people." }, drill: { jp: "मुझे इस काम में शर्म आती है", en: "I feel ashamed about this work" }, hint: "SHARM, FEMININE, with the र्म cluster. The frame is शर्म आती है, 'shame comes'. It covers embarrassment AND the approving kind of modesty; शर्म करो! is 'shame on you'." },
        { id: "hi-u27l3-dayaa", type: "vocab", front: "दया", reading: "dayaa", meaning: "compassion", accept: ["mercy", "kindness", "pity"], example: { jp: "उस आदमी के मन में बहुत दया है।", en: "There is a lot of compassion in that man's heart." }, drill: { jp: "बच्चों पर दया करो", en: "Have compassion for the children" }, hint: "DA-YAA, FEMININE. दया करना is to show mercy, दया आना is to feel pity. Read it against दवा davaa, medicine — व against य, one letter, two completely different words." },
      ],
    },
    {
      id: "hi-u27l4",
      unit: 27,
      lesson: 4,
      title: "What a person is like",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe someone's character — clever, lazy, honest, brave, strict or cunning — with adjectives that never change their ending.",
      items: [
        { id: "hi-u27l4-hoshiyaar", type: "vocab", front: "होशियार", reading: "hoshiyaar", meaning: "clever", accept: ["intelligent", "sharp-witted", "bright"], example: { jp: "वह लड़की बहुत होशियार है।", en: "That girl is very clever." }, drill: { jp: "यह बच्चा बहुत होशियार है", en: "This child is very clever" }, hint: "HO-SHI-YAAR, invariant. From the Persian होश, your senses — so literally 'in possession of your wits'. Shouted on its own, होशियार! means watch out." },
        { id: "hi-u27l4-aalsii", type: "vocab", front: "आलसी", reading: "aalsii", meaning: "lazy", accept: ["idle", "slothful", "work-shy"], example: { jp: "वह आदमी बहुत आलसी है।", en: "That man is very lazy." }, drill: { jp: "आलसी लोग जल्दी नहीं उठते", en: "Lazy people do not get up early" }, hint: "AAL-SII ends in -ी and does NOT change, because it is built off आलस, laziness — the same invariant class as दुखी and ज़रूरी. It describes a person's nature, not one day of it." },
        { id: "hi-u27l4-iimaandaar", type: "vocab", front: "ईमानदार", reading: "iimaandaar", meaning: "honest", accept: ["truthful", "upright", "trustworthy"], example: { jp: "वह दुकानदार बहुत ईमानदार है।", en: "That shopkeeper is very honest." }, drill: { jp: "ईमानदार आदमी सच बोलता है", en: "An honest man speaks the truth" }, hint: "II-MAAN-DAAR, invariant. The -दार ending means 'holding', and you have met it in दुकानदार and रिश्तेदार: ईमान is integrity, so this is someone who holds it. बेईमान is its opposite." },
        { id: "hi-u27l4-bahaadur", type: "vocab", front: "बहादुर", reading: "bahaadur", meaning: "brave", accept: ["courageous", "bold", "valiant"], example: { jp: "वह लड़का बहुत बहादुर है।", en: "That boy is very brave." }, drill: { jp: "बहादुर आदमी को डर नहीं लगता", en: "A brave man does not feel fear" }, hint: "BA-HAA-DUR, invariant, and Persian — the same word behind the surname Bahadur. Hindi also uses it lightly: बहादुर बच्चा, to a child who did not cry at the doctor." },
        { id: "hi-u27l4-sakht", type: "vocab", front: "सख्त", reading: "sakht", meaning: "strict", accept: ["harsh", "stern", "hard to the touch"], example: { jp: "हमारे शिक्षक बहुत सख्त हैं।", en: "Our teacher is very strict." }, drill: { jp: "इस स्कूल का शिक्षक सख्त है", en: "This school's teacher is strict" }, hint: "SAKHT, invariant, written with plain ख the way this course spells every Persian word. It covers strict, harsh and physically hard: सख्त आदमी, सख्त ज़मीन. सख्ती is the noun." },
        { id: "hi-u27l4-chaalaak", type: "vocab", front: "चालाक", reading: "chaalaak", meaning: "cunning", accept: ["crafty", "sly", "shrewd"], example: { jp: "बिल्ली कुत्ते से ज़्यादा चालाक है।", en: "A cat is more cunning than a dog." }, drill: { jp: "चालाक लोग हर जगह मिलते हैं", en: "Cunning people are found everywhere" }, hint: "CHAA-LAAK, invariant. It is NOT a compliment in Hindi the way 'shrewd' can be in English — चालाक is someone working an angle. For admirable cleverness say होशियार." },
      ],
    },
  ],
};
