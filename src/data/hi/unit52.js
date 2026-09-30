// HI Unit 52 — दिल का हाल ("How the heart is") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 3. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 3 (A2)"). MEASURED HOLE: **the inner
// life was 18 of 40, and every one of the 18 is a BASIC feeling.** u27 मन और
// स्वभाव taught दुखी, गुस्सा, डर, चिंता, उम्मीद, मज़ा, पसंद, शौक, इच्छा, भरोसा,
// प्यारा, नफ़रत, परेशान, हैरान, नाराज़, गर्व, शर्म, दया — sad, angry, afraid,
// hopeful. What the corpus could NOT say is everything a learner actually needs at
// A2: grief, loneliness, panic, relief, stress, jealousy, sympathy, hesitation,
// patience, contentment, gratitude. u30 बातचीत owns the SPOKEN side (राय, सलाह,
// शक, तारीफ़) and u39 the REASONED side (विचार, खयाल); this unit takes the felt one.
//
// ⚠️ THREE FRONTS WANTED AND REFUSED:
//   • तरस — gloss "pity" is दया's (u27l3) through normalizeMeaning. A synonym with
//     no discriminator worth carding; हमदर्दी carries the field instead.
//   • मायूसी — dropped beside गम and उदास. Three words for low spirits in one
//     lesson is a vocabulary list, not a lesson.
//   • बोझ — "a burden" is only figurative here, and the corpus has no literal
//     weight-carrying word to hang it on. Left for B1.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE and consonant- or -ी-final, so the shape tells you NOTHING:
//   भावना, घबराहट, बेचैनी, राहत, तसल्ली, जलन, हमदर्दी, ठेस, चिढ़, झिझक, मुसकान.
//   ठेस लगी, not लगा.
//   MASCULINE: गम, आँसू, अफ़सोस, अकेलापन, तनाव, सुकून, लगाव, हौसला, सब्र, जोश,
//   संतोष. हौसला looks -ा and is; सब्र and सुकून are consonant-final masculine.
//   उदास and शुक्रगुज़ार are ADJECTIVES and INVARIANT — उदास लड़की, not उदासी.
//
// ⚠️ ONE FRONT IS A PLURAL-LOOKING SINGULAR AND SAYS SO: आँसू, a tear. The plural
// is also आँसू (a vowel-final masculine takes no -े), so आँसू आए covers both, and
// the hint says which one the card is asking for.
// ⚠️ जलन jalan is FEMININE and its first sense is a physical burning — the gloss is
// "jealousy" because that is the sense the corpus lacks, and the hint carries the
// other. It is NOT a doubling-hatch pair with जलना (u60l3): jalan vs jalnaa.
// RETROFLEX/DENTAL (§1b): one near-pair checked and CLEAR. ठेस thes has a RETROFLEX
// ठ, and the corpus has no dental थेस, so the hatch does not fire — but if a later
// block wants one, **ठेस is the retroflex member and would become `tthes`.** Named
// here so it is a decision and not a rediscovery. तनाव tanaav, सब्र sabr, संतोष
// santosh and तसल्ली tasallii have no counterpart either.
// LOANWORD FREE-PASS CHECK (§9): no loanwords in this unit; zero free passes.
export const HI_UNIT52 = {
  id: "hi-u52",
  lang: "hi",
  title: "दिल का हाल",
  order: 52,
  stage: "a2",
  lessons: [
    {
      id: "hi-u52l1",
      unit: 52,
      lesson: 1,
      title: "Grief, and the shades of being low",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say that someone is grieving, gloomy, lonely or sorry about something — and name the feeling itself, not just the mood.",
      items: [
        { id: "hi-u52l1-bhaavnaa", type: "vocab", front: "भावना", reading: "bhaavnaa", meaning: "an emotion", accept: ["a sentiment", "what one feels"], example: { jp: "उसने अपनी भावना किसी को नहीं बताई।", en: "She told nobody what she was feeling." }, drill: { jp: "उसकी भावना मैं समझ सकता हूँ", en: "I can understand her feeling" }, hint: "BHAAV-NAA — ⚠️ FEMININE, and the -ना ending looks like an infinitive but this is a NOUN, exactly like प्रार्थना (unit 51). The word for a feeling as a THING; the feeling itself is मन or दिल." },
        { id: "hi-u52l1-gam", type: "vocab", front: "गम", reading: "gam", meaning: "grief", accept: ["sorrow", "deep sadness"], example: { jp: "पिता के जाने का गम अब भी उसके दिल में है।", en: "The grief of his father's going is still in his heart." }, drill: { jp: "उसका गम कोई नहीं समझता", en: "Nobody understands his grief" }, hint: "GAM, masculine, two letters. ⚠️ Read it against कम kam, less (unit 1): one letter apart, ग against क. Deeper and longer than दुखी — गम is what stays after the crying stops." },
        { id: "hi-u52l1-udaas", type: "vocab", front: "उदास", reading: "udaas", meaning: "gloomy", accept: ["downcast", "low in spirits"], example: { jp: "आज वह सुबह से उदास बैठी है और कुछ नहीं बोल रही।", en: "She has been sitting gloomily since morning and is not saying anything." }, drill: { jp: "आज तुम बहुत उदास लगते हो", en: "You look very gloomy today" }, hint: "U-DAAS, INVARIANT — उदास लड़का, उदास लड़की, no -ी form. Quieter than दुखी (unit 27): दुखी is hurt by something, उदास is simply flat." },
        { id: "hi-u52l1-aansuu", type: "vocab", front: "आँसू", reading: "aansuu", meaning: "a tear", accept: ["tears", "a teardrop"], example: { jp: "कहानी सुनकर दादी की आँखों में आँसू आ गए।", en: "Hearing the story, tears came into grandmother's eyes." }, drill: { jp: "उसकी आँख में आँसू थे", en: "There were tears in her eye" }, hint: "AAN-SUU, masculine. ⚠️ The PLURAL is also आँसू — a vowel-final masculine noun takes no -े — so आँसू आए can be one tear or many, and this card asks for the word, not the number. The ँ nasalises without adding a letter (unit 5)." },
        { id: "hi-u52l1-afsos", type: "vocab", front: "अफ़सोस", reading: "afsos", meaning: "regret", accept: ["being sorry", "rueful feeling"], example: { jp: "मुझे अफ़सोस है कि मैं उस दिन तुम्हारे साथ नहीं गया।", en: "I regret that I did not go with you that day." }, drill: { jp: "मुझे अपनी गलती का अफ़सोस है", en: "I regret my mistake" }, hint: "AF-SOS, masculine, with फ़ — an f. It arrives in one frame: X का अफ़सोस है, or अफ़सोस है कि… Said of someone else's bad news it means 'I am sorry to hear it', which is its commonest use." },
        { id: "hi-u52l1-akelaapan", type: "vocab", front: "अकेलापन", reading: "akelaapan", meaning: "loneliness", accept: ["being lonely", "solitude that hurts"], example: { jp: "शहर में उसे सबसे ज़्यादा अकेलापन लगता है।", en: "In the city it is loneliness he feels most of all." }, drill: { jp: "बड़े शहर में अकेलापन बहुत लगता है", en: "In a big city one feels a lot of loneliness" }, hint: "A-KE-LAA-PAN, masculine. Built straight off अकेला, alone (unit 10), by adding -पन — the suffix that turns an adjective into the state of being it, like English -ness. Four syllables; the stress sits on -laa-." },
      ],
    },
    {
      id: "hi-u52l2",
      unit: 52,
      lesson: 2,
      title: "Panic, stress, and the calm afterwards",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say that you are panicking, restless or under stress, and that something brought you relief, calm or reassurance.",
      items: [
        { id: "hi-u52l2-ghabraahat", type: "vocab", front: "घबराहट", reading: "ghabraahat", meaning: "panic", accept: ["a flustered state", "the jitters"], example: { jp: "परीक्षा से पहले उसे इतनी घबराहट हुई कि उसने कुछ नहीं खाया।", en: "Before the exam he panicked so much that he ate nothing." }, drill: { jp: "मुझे कल रात बहुत घबराहट हुई", en: "I panicked a great deal last night" }, hint: "GHA-BRAA-HAT — ⚠️ FEMININE, consonant-final, so nothing in the shape says so: घबराहट हुई, not हुआ. Physical as much as mental: a racing heart and wet hands. It takes होना, never करना." },
        { id: "hi-u52l2-bechainii", type: "vocab", front: "बेचैनी", reading: "bechainii", meaning: "restlessness", accept: ["unease", "being unsettled"], example: { jp: "खबर सुनने के बाद पूरी रात बेचैनी रही।", en: "After hearing the news there was restlessness all night." }, drill: { jp: "उस रात मुझे बहुत बेचैनी रही", en: "That night I felt very restless" }, hint: "BE-CHAI-NII — ⚠️ FEMININE. बे- is the Persian 'without' prefix you have already met in बेशक (unit 38); चैन is peace, so बेचैनी is peacelessness. The ai of चै is the open vowel of ऐ." },
        { id: "hi-u52l2-tanaav", type: "vocab", front: "तनाव", reading: "tanaav", meaning: "stress", accept: ["tension", "strain"], example: { jp: "दफ़्तर में इतना काम है कि तनाव रोज़ बढ़ता है।", en: "There is so much work at the office that the stress grows every day." }, drill: { jp: "काम का तनाव मुझे सोने नहीं देता", en: "The stress of work does not let me sleep" }, hint: "TA-NAAV, masculine, with a DENTAL त. Used of a person's stress AND of tension between two countries — the same word does both jobs. तनाव में होना is to be under strain." },
        { id: "hi-u52l2-raahat", type: "vocab", front: "राहत", reading: "raahat", meaning: "relief", accept: ["respite", "being relieved"], example: { jp: "दवा लेने के बाद उसे थोड़ी राहत मिली।", en: "After taking the medicine he got a little relief." }, drill: { jp: "इस दवा से मुझे राहत मिली", en: "This medicine gave me relief" }, hint: "RAA-HAT — ⚠️ FEMININE, consonant-final: राहत मिली, not मिला. The verb is मिलना, to be got — राहत मिलना. Used of pain easing and of bad news turning out to be untrue." },
        { id: "hi-u52l2-sukuun", type: "vocab", front: "सुकून", reading: "sukuun", meaning: "peace of mind", accept: ["inner quiet", "serenity"], example: { jp: "समुद्र के पास बैठकर मुझे बहुत सुकून मिलता है।", en: "Sitting by the sea gives me great peace of mind." }, drill: { jp: "इस जगह में बहुत सुकून है", en: "There is great peace in this place" }, hint: "SU-KUUN, masculine, long uu. Not the same as शांत (unit 14), which is a quiet PLACE — सुकून is the quiet INSIDE you, and a noisy room can still have it." },
        { id: "hi-u52l2-tasallii", type: "vocab", front: "तसल्ली", reading: "tasallii", meaning: "reassurance", accept: ["consolation", "comfort given"], example: { jp: "माँ ने उसका हाथ पकड़कर तसल्ली दी।", en: "Mother took his hand and gave him reassurance." }, drill: { jp: "उसकी बात से मुझे तसल्ली हुई", en: "His words reassured me" }, hint: "TA-SAL-LII — ⚠️ FEMININE, with GEMINATION: the ल is doubled and you hear both, ta-sal-lii. Given BY someone (तसल्ली देना) or felt (तसल्ली होना). The comfort of being told it will be all right." },
      ],
    },
    {
      id: "hi-u52l3",
      unit: 52,
      lesson: 3,
      title: "What one heart does to another",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Talk about jealousy, sympathy, attachment, hurt feelings, irritation and holding back — the feelings that exist between two people.",
      items: [
        { id: "hi-u52l3-jalan", type: "vocab", front: "जलन", reading: "jalan", meaning: "jealousy", accept: ["envy", "a burning resentment"], example: { jp: "उसकी तरक्की से कुछ लोगों को जलन हुई।", en: "His promotion made some people jealous." }, drill: { jp: "उसे मेरी खुशी से जलन है", en: "She is jealous of my happiness" }, hint: "JA-LAN — ⚠️ FEMININE. Its first sense is a physical BURNING — पेट में जलन is heartburn — and the feeling is named after it. Not to be confused with जलना (unit 60), to be on fire: jalan against jalnaa." },
        { id: "hi-u52l3-hamdardii", type: "vocab", front: "हमदर्दी", reading: "hamdardii", meaning: "sympathy", accept: ["fellow feeling", "compassion for another"], example: { jp: "उस मरीज़ के लिए सब नर्सों के दिल में हमदर्दी थी।", en: "All the nurses felt sympathy for that patient." }, drill: { jp: "मुझे उन लोगों से हमदर्दी है", en: "I feel sympathy for those people" }, hint: "HAM-DAR-DII — ⚠️ FEMININE, and you know both halves: हम, we (unit 1), plus दर्द, pain (unit 20). Sharing someone's pain, literally. Wider than दया (unit 27), which looks DOWN on the person it pities." },
        { id: "hi-u52l3-lagaav", type: "vocab", front: "लगाव", reading: "lagaav", meaning: "attachment", accept: ["a leaning towards", "a bond of feeling"], example: { jp: "उसे अपने गाँव से बहुत लगाव है और वह हर साल जाता है।", en: "He has a strong attachment to his village and goes every year." }, drill: { jp: "मुझे इस पुराने घर से लगाव है", en: "I have an attachment to this old house" }, hint: "LA-GAAV, masculine. Built off लगना, to seem or to be attached (unit 12). The frame is X से लगाव है — the thing you are attached TO takes से, never को." },
        { id: "hi-u52l3-thes", type: "vocab", front: "ठेस", reading: "thes", meaning: "a hurt feeling", accept: ["being wounded in feeling", "a slight"], example: { jp: "उसकी बात से मेरे दिल को ठेस लगी।", en: "His remark wounded my feelings." }, drill: { jp: "उस बात से मुझे ठेस लगी", en: "That remark hurt my feelings" }, hint: "THES — ⚠️ FEMININE, and RETROFLEX ठ: tongue curled back, then a puff of air. The verb is लगना — ठेस लगी, not हुई. Also a physical knock against something, which is the image the feeling borrows." },
        { id: "hi-u52l3-chirh", type: "vocab", front: "चिढ़", reading: "chirh", meaning: "irritation", accept: ["annoyance", "being nettled"], example: { jp: "रोज़ के इस शोर से मुझे चिढ़ होने लगी है।", en: "This daily noise has started to irritate me." }, drill: { jp: "मुझे इस आवाज़ से चिढ़ है", en: "This sound irritates me" }, hint: "CHIRH — ⚠️ FEMININE, and the ढ़ is the nukta letter of unit 4: a curled-back flap with breath, written rh. Read it against चिड़िया chiriyaa, a small bird (unit 21): ढ़ against ड़. Milder than गुस्सा — the thing that makes you sigh, not shout." },
        { id: "hi-u52l3-jhijhak", type: "vocab", front: "झिझक", reading: "jhijhak", meaning: "hesitation", accept: ["reluctance", "holding back"], example: { jp: "उसने बिना झिझक अपनी गलती मान ली।", en: "He admitted his mistake without hesitation." }, drill: { jp: "उसने बिना झिझक सब बता दिया", en: "He told everything without hesitation" }, hint: "JHI-JHAK — ⚠️ FEMININE, and both letters are झ, so it is the same puff twice: jhi-jhak. Its commonest shape is बिना झिझक, without hesitating. The pause before you ask for something you are not sure you may have." },
      ],
    },
    {
      id: "hi-u52l4",
      unit: 52,
      lesson: 4,
      title: "Spirit, patience and being glad",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Encourage someone, say you are being patient, and say that you are in high spirits, content or grateful.",
      items: [
        { id: "hi-u52l4-hauslaa", type: "vocab", front: "हौसला", reading: "hauslaa", meaning: "morale", accept: ["spirit to carry on", "pluck"], example: { jp: "इतनी मुश्किल के बाद भी उसका हौसला कम नहीं हुआ।", en: "Even after so much difficulty his morale did not drop." }, drill: { jp: "उसका हौसला आज भी ऊँचा है", en: "His morale is high even today" }, hint: "HAUS-LAA, masculine and regular -ा. The au of हौ is the open vowel of औ. Different from हिम्मत (unit 32), which is the courage to START — हौसला is what keeps you going once it is hard. हौसला बढ़ाना is to encourage." },
        { id: "hi-u52l4-sabr", type: "vocab", front: "सब्र", reading: "sabr", meaning: "patience", accept: ["forbearance", "putting up with"], example: { jp: "इतनी लंबी लाइन में सब्र रखना मुश्किल है।", en: "It is hard to keep one's patience in such a long queue." }, drill: { jp: "इस काम में सब्र बहुत चाहिए", en: "This work needs a lot of patience" }, hint: "SABR, masculine, with the ब्र conjunct — ब and र stacked, so one syllable: sabr, not sa-bar. The verb is रखना, to keep. It is the patience of ENDURING, not of waiting quietly." },
        { id: "hi-u52l4-josh", type: "vocab", front: "जोश", reading: "josh", meaning: "high spirits", accept: ["zeal", "fervour"], example: { jp: "छुट्टी की खबर सुनकर सब बच्चों में जोश आ गया।", en: "Hearing the news of the holiday, all the children were filled with high spirits." }, drill: { jp: "उसकी बात से लोगों में जोश आया", en: "His words filled people with high spirits" }, hint: "JOSH, masculine. Hotter than शौक (unit 27), which is a steady interest — जोश is the rush, and it cools. जोश में आना is to get carried away, and जोश में आकर is how people explain what they did afterwards." },
        { id: "hi-u52l4-santosh", type: "vocab", front: "संतोष", reading: "santosh", meaning: "contentment", accept: ["being satisfied", "quiet satisfaction"], example: { jp: "उसे अपनी छोटी नौकरी में भी संतोष है।", en: "He is content even in his small job." }, drill: { jp: "मुझे इतने में ही संतोष है", en: "I am content with just this much" }, hint: "SAN-TOSH, masculine, DENTAL त. The ं before त is the matching dental nasal. Being satisfied with what there IS, which is why it is a virtue in Hindi and not merely a mood. It is also a common man's name." },
        { id: "hi-u52l4-shukraguzaar", type: "vocab", front: "शुक्रगुज़ार", reading: "shukraguzaar", meaning: "grateful", accept: ["thankful", "obliged"], example: { jp: "मदद के लिए मैं आपका शुक्रगुज़ार हूँ।", en: "I am grateful to you for the help." }, drill: { jp: "मैं आपका शुक्रगुज़ार हूँ", en: "I am grateful to you" }, hint: "SHUK-RA-GU-ZAAR, INVARIANT — शुक्रगुज़ार आदमी, शुक्रगुज़ार लड़की, no -ी form. You know the first half from शुक्रिया, thanks (unit 7). Warmer and more formal than धन्यवाद; the person you are grateful to takes का/की." },
        { id: "hi-u52l4-muskaan", type: "vocab", front: "मुसकान", reading: "muskaan", meaning: "a smile", accept: ["a smiling face"], example: { jp: "बच्चे को देखकर उसके मुँह पर मुसकान आ गई।", en: "Seeing the child, a smile came to her face." }, drill: { jp: "उसके मुँह पर हल्की मुसकान थी", en: "There was a faint smile on her face" }, hint: "MUS-KAAN — ⚠️ FEMININE, consonant-final: मुसकान अच्छी लगी. It is also spelled मुस्कान with the halant, and both are current. The verb is आना — मुसकान आना, a smile comes; you do not 'do' one." },
      ],
    },
  ],
};
