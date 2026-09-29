// HI Unit 20 — शरीर और सेहत ("The body and health") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot kept, retitled in Devanagari. Block 1 taught ZERO body parts and ZERO health
// words, so all twenty-four cards here are new ground.
//
// THE ONE GRAMMATICAL PATTERN THIS UNIT IS REALLY TEACHING, and it is worth more
// than any single word in it: HINDI PUTS SENSATIONS IN A NOUN, NOT AN ADJECTIVE.
//     मुझे भूख है          I am hungry      (to me there is hunger)
//     मुझे बुखार है         I have a fever
//     मुझे थकान है          I am tired
//     सिर में दर्द है        I have a headache
//     मुझे नींद आती है       I am sleepy      (sleep comes to me)
//     मुझे चोट लगती है       I get hurt
// Block 1 set this up with भूख and प्यास in u13; this unit completes the set, and
// every hint names the frame rather than only the word, because the word alone is
// useless — a learner who knows बुखार and not मुझे बुखार है cannot say anything.
//
// ✅ THE LOSS THIS UNIT TOOK FROM §5's DEFERRAL OF होना IS NOW CLOSED, AND THIS
// PARAGRAPH RECORDED IT AS OPEN UNTIL 2026-09-28. It read: "I had a fever" and
// "the pain went" both need past forms of होना or जाना, deferred to u24 — so every
// example here is in the present and none describes recovery. Block 3 carded होना
// at u22l1 and the past copula था/थी/थे/थीं at u24l1, and declared हुआ/हुई/हुए FREE
// in unit24.js. So मुझे बुखार था and क्या हुआ? are both writable from u24 on.
// The examples in THIS unit stay in the present, deliberately: they are natural as
// they stand and rewriting a merged unit would re-voice its audio for no gain.
//
// ⚠️ SPELLING: बुखार with PLAIN ख, not ख़, exactly as u18 spells खरीदना — §7's
// decision not to card क़/ख़/ग़ (Standard Hindi merges them) applied consistently.
// डॉक्टर IS NOT CARDED: §7 defers ॉ, the candra-o, to A2, and every u9 loanword
// was chosen to avoid it. इलाज (treatment) carries the sense instead.
//
// GENDER: nearly every health noun here is FEMININE and none of them looks it —
// नाक, आँख, खाँसी, दवा, सेहत, ताकत, थकान, नींद, चोट. Each is named in its hint.
export const HI_UNIT20 = {
  id: "hi-u20",
  lang: "hi",
  title: "शरीर और सेहत",
  order: 20,
  stage: "a1",
  lessons: [
    {
      id: "hi-u20l1",
      unit: 20,
      lesson: 1,
      title: "The head and face",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the parts of your head and face and say which one hurts.",
      items: [
        { id: "hi-u20l1-shariir", type: "vocab", front: "शरीर", reading: "shariir", meaning: "the body", accept: ["a body", "physique"], example: { jp: "मेरा शरीर आज ठीक है।", en: "My body is fine today." }, drill: { jp: "मेरा शरीर आज भारी लगता है", en: "My body feels heavy today" }, hint: "SHA-RIIR, masculine — the body as a whole. देह is the more literary word for it. शारीरिक means 'physical', and you will see it on any medical form." },
        { id: "hi-u20l1-sir", type: "vocab", front: "सिर", reading: "sir", meaning: "the head", accept: ["a head", "the top of the head"], example: { jp: "मेरा सिर बहुत भारी है।", en: "My head is very heavy." }, drill: { jp: "आज मेरे सिर में दर्द है", en: "I have a headache today" }, hint: "SIR, masculine, two letters — and सिर दर्द is a headache. ⚠️ This is NOT the English 'sir'. Indians do say that, but it is written सर and used only as a form of address, never for the body part." },
        { id: "hi-u20l1-aankh", type: "vocab", front: "आँख", reading: "aankh", meaning: "an eye", accept: ["eye", "eyes"], example: { jp: "मीना की आँखें बहुत सुंदर हैं।", en: "Meena's eyes are very beautiful." }, drill: { jp: "इस बच्चे की आँख लाल है", en: "This child's eye is red" }, hint: "AANKH — ⚠️ FEMININE, and the plural is आँखें, with the MĀTRĀ ें, because it ends in a consonant. The ँ nasalises the आ. आँख बंद करना is 'to close your eyes'." },
        { id: "hi-u20l1-kaan", type: "vocab", front: "कान", reading: "kaan", meaning: "an ear", accept: ["ear", "ears"], example: { jp: "मेरे कान ठीक हैं।", en: "My ears are fine." }, drill: { jp: "इस बच्चे के कान बहुत छोटे हैं", en: "This child's ears are very small" }, hint: "KAAN, masculine, unchanged in the plural. ⚠️ FOUR NEAR-TWINS: कान kaan (an ear), काम kaam (work, unit 4), काला kaalaa (black, unit 16) — and कान sits INSIDE दुकान dukaan (a shop). Same letters, different word: read the whole thing." },
        { id: "hi-u20l1-naak", type: "vocab", front: "नाक", reading: "naak", meaning: "a nose", accept: ["nose", "noses"], example: { jp: "इस बच्चे की नाक छोटी है।", en: "This child's nose is small." }, drill: { jp: "मेरी नाक आज बंद है", en: "My nose is blocked today" }, hint: "NAAK — ⚠️ FEMININE. नाक बंद है is 'my nose is blocked', the sentence you need the moment you have a cold. Read it against नाम naam (a name) and नाना naanaa (a grandfather)." },
        { id: "hi-u20l1-munh", type: "vocab", front: "मुँह", reading: "munh", meaning: "a mouth", accept: ["mouth", "the face"], example: { jp: "मुँह में स्वाद अच्छा नहीं है।", en: "The taste in my mouth is not good." }, drill: { jp: "मेरे मुँह में दर्द है", en: "I have pain in my mouth" }, hint: "MUNH, masculine — the ँ nasalises the उ mātrā and the final ह is barely breathed out. It is the mouth AND, loosely, the whole face: मुँह धोना is 'to wash your face'." },
      ],
    },
    {
      id: "hi-u20l2",
      unit: 20,
      lesson: 2,
      title: "Hands, feet and the rest",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name your hands, feet, teeth and stomach, and say where the pain is.",
      items: [
        { id: "hi-u20l2-haath", type: "vocab", front: "हाथ", reading: "haath", meaning: "a hand", accept: ["hand", "an arm", "hands"], example: { jp: "मेरे हाथ साफ़ हैं।", en: "My hands are clean." }, drill: { jp: "इस काम में दोनों हाथ लगते हैं", en: "This job takes both hands" }, hint: "HAATH, masculine, unchanged in the plural, with DENTAL थ. It covers the hand and often the whole arm, since Hindi does not split them. ⚠️ Its reading is one letter from साथ saath (with, unit 8) — same थ, different first letter." },
        { id: "hi-u20l2-pair", type: "vocab", front: "पैर", reading: "pair", meaning: "a foot", accept: ["a leg", "feet", "legs"], example: { jp: "मेरे पैर आज ठीक नहीं हैं।", en: "My feet are not well today." }, drill: { jp: "मेरे पैर में दर्द है", en: "I have pain in my foot" }, hint: "PAIR, masculine, unchanged in the plural. Foot AND leg in one word, so पैर में दर्द could be either and the context decides. ⚠️ Read it against पैसा paisaa (money, unit 18) and पेड़ per (a tree, unit 14)." },
        { id: "hi-u20l2-pet", type: "vocab", front: "पेट", reading: "pet", meaning: "the stomach", accept: ["a belly", "the abdomen", "a tummy"], example: { jp: "मेरा पेट ठीक नहीं है।", en: "My stomach is not well." }, drill: { jp: "इस बच्चे के पेट में दर्द है", en: "This child has a stomach ache" }, hint: "PET, masculine, with RETROFLEX ट — curl the tongue back. The stomach and the belly. पेट भरना is 'to eat one's fill'. ⚠️ पेन pen, पेड़ per, पेट pet: three words, three different final letters." },
        { id: "hi-u20l2-daant", type: "vocab", front: "दाँत", reading: "daant", meaning: "a tooth", accept: ["teeth", "a tusk"], example: { jp: "इस बच्चे के दाँत छोटे हैं।", en: "This child's teeth are small." }, drill: { jp: "आज मेरे दाँत ठीक हैं", en: "My teeth are fine today" }, hint: "DAANT, masculine, unchanged in the plural, with DENTAL त — which is apt, since that is exactly where the tongue goes. दाँत साफ़ करना is 'to brush your teeth'. The ँ nasalises the आ." },
        { id: "hi-u20l2-baal", type: "vocab", front: "बाल", reading: "baal", meaning: "hair", accept: ["a hair", "locks"], example: { jp: "मीना के बाल बहुत लंबे हैं।", en: "Meena's hair is very long." }, drill: { jp: "इस बच्चे के बाल काले हैं", en: "This child's hair is black" }, hint: "BAAL, masculine and usually PLURAL — बाल लंबे हैं, 'hair are long', because Hindi counts hairs where English counts hair. ⚠️ Read it against लाल laal (red, unit 16) and बादल baadal (a cloud)." },
        { id: "hi-u20l2-dil", type: "vocab", front: "दिल", reading: "dil", meaning: "the heart", accept: ["a heart", "courage"], example: { jp: "मेरा दिल ठीक है।", en: "My heart is fine." }, drill: { jp: "इस बच्चे का दिल बहुत अच्छा है", en: "This child's heart is very good" }, hint: "DIL, masculine — the organ, and the seat of love and courage: दिल लगाना is 'to give your heart to'. ⚠️ मन (unit 1) is the heart as MIND and feeling; दिल is the heart as ORGAN and as love. And दिन din (a day) is one letter away." },
      ],
    },
    {
      id: "hi-u20l3",
      unit: 20,
      lesson: 3,
      title: "When you are ill",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that you are ill, say where the pain is, and ask for medicine.",
      items: [
        { id: "hi-u20l3-biimaar", type: "vocab", front: "बीमार", reading: "biimaar", meaning: "ill", accept: ["sick", "unwell", "a patient"], example: { jp: "मीना आज बीमार है।", en: "Meena is ill today." }, drill: { jp: "यह बच्चा बहुत बीमार है", en: "This child is very ill" }, hint: "BII-MAAR, consonant-final, so it never changes: बीमार लड़का, बीमार लड़की. Used as a noun it means 'a patient'. बीमारी is 'an illness'." },
        { id: "hi-u20l3-dard", type: "vocab", front: "दर्द", reading: "dard", meaning: "pain", accept: ["an ache", "a pain", "soreness"], example: { jp: "मुझे बहुत दर्द है।", en: "I am in a lot of pain." }, drill: { jp: "इस दवा से दर्द कम है", en: "The pain is less with this medicine" }, hint: "DARD, masculine, from Persian. ⚠️ THE FRAME IS THE LESSON: X में दर्द है. सिर में दर्द है is a headache, पेट में दर्द है a stomach ache. र्द is र riding above द." },
        { id: "hi-u20l3-bukhaar", type: "vocab", front: "बुखार", reading: "bukhaar", meaning: "a fever", accept: ["a temperature", "being feverish"], example: { jp: "मुझे आज बुखार है।", en: "I have a fever today." }, drill: { jp: "इस बच्चे को बुखार है", en: "This child has a fever" }, hint: "BU-KHAAR, masculine, and Standard Hindi writes it with a PLAIN ख. You will also see बुख़ार with a nukta; both are said the same way (unit 1 §7). ⚠️ Never 'I am fever' — it is मुझे बुखार है, 'to me there is fever'." },
        { id: "hi-u20l3-khaansii", type: "vocab", front: "खाँसी", reading: "khaansii", meaning: "a cough", accept: ["coughing", "a tickly throat"], example: { jp: "मुझे खाँसी है।", en: "I have a cough." }, drill: { jp: "इस बच्चे को खाँसी और बुखार है", en: "This child has a cough and a fever" }, hint: "KHAAN-SII — ⚠️ FEMININE, and the ँ nasalises the आ. Like भूख and दर्द it is a NOUN in a है frame: मुझे खाँसी है, 'to me there is a cough'. खाँसना is the verb." },
        { id: "hi-u20l3-davaa", type: "vocab", front: "दवा", reading: "davaa", meaning: "medicine", accept: ["a drug", "a remedy", "a dose"], example: { jp: "यह दवा बहुत महँगी है।", en: "This medicine is very expensive." }, drill: { jp: "इस दुकान में दवा सस्ती है", en: "Medicine is cheap in this shop" }, hint: "DA-VAA — ⚠️ FEMININE, plural दवाएँ with the independent एँ because it ends in a VOWEL. दवा लेना is 'to take medicine'. Read it against हवा havaa (wind, unit 16): one letter apart." },
        { id: "hi-u20l3-ilaaj", type: "vocab", front: "इलाज", reading: "ilaaj", meaning: "treatment", accept: ["a cure", "therapy", "medical care"], example: { jp: "इस बीमार का इलाज मुश्किल है।", en: "This patient's treatment is difficult." }, drill: { jp: "इस अस्पताल में इलाज अच्छा है", en: "The treatment is good in this hospital" }, hint: "I-LAAJ, masculine — the treatment or the cure, where दवा is the medicine itself. इलाज करना is 'to treat'. Like दवा and बुखार it is Arabic: Indian medical vocabulary is heavily Perso-Arabic." },
      ],
    },
    {
      id: "hi-u20l4",
      unit: 20,
      lesson: 4,
      title: "Health and strength",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how your health is, whether you are tired, and whether you slept.",
      items: [
        { id: "hi-u20l4-sehat", type: "vocab", front: "सेहत", reading: "sehat", meaning: "health", accept: ["wellbeing", "condition", "fitness"], example: { jp: "आपकी सेहत कैसी है?", en: "How is your health?" }, drill: { jp: "इस गाँव में लोगों की सेहत अच्छी है", en: "The people's health is good in this village" }, hint: "SE-HAT — ⚠️ FEMININE. Health in general, and आपकी सेहत कैसी है is the warm 'how are you' between people who already know each other. सेहतमंद means 'healthy'." },
        { id: "hi-u20l4-taakat", type: "vocab", front: "ताकत", reading: "taakat", meaning: "strength", accept: ["power", "force", "energy"], example: { jp: "इस बच्चे में बहुत ताकत है।", en: "This child has a lot of strength." }, drill: { jp: "इस दवा से ताकत आती है", en: "Strength comes from this medicine" }, hint: "TAA-KAT — ⚠️ FEMININE, and BOTH त's are DENTAL, tongue on the teeth. Physical strength and power in general. Read it against टिकट tikat (a ticket, unit 9), which opens with a RETROFLEX ट." },
        { id: "hi-u20l4-thakaan", type: "vocab", front: "थकान", reading: "thakaan", meaning: "tiredness", accept: ["fatigue", "exhaustion", "weariness"], example: { jp: "आज मुझे बहुत थकान है।", en: "I am very tired today." }, drill: { jp: "इस काम में बहुत थकान है", en: "There is a lot of tiredness in this work" }, hint: "THA-KAAN — ⚠️ FEMININE, with DENTAL थ. A NOUN, in the same है frame as भूख and दर्द: मुझे थकान है, 'to me there is tiredness'. थकना is the verb, 'to get tired'." },
        { id: "hi-u20l4-niind", type: "vocab", front: "नींद", reading: "niind", meaning: "a night's sleep", accept: ["sleep", "slumber", "sleepiness"], example: { jp: "मुझे नींद आती है।", en: "I am sleepy." }, drill: { jp: "रात को नींद बहुत ज़रूरी है", en: "Sleep is very necessary at night" }, hint: "NIIND — ⚠️ FEMININE, and mind the pairing: सोना (unit 12) is the VERB 'to sleep', नींद is the NOUN, the sleep you get. नींद आती है is 'I'm sleepy', literally 'sleep comes'. The ं before द is the dental nasal, so niind." },
        { id: "hi-u20l4-chot", type: "vocab", front: "चोट", reading: "chot", meaning: "an injury", accept: ["a wound", "a bruise", "a hurt"], example: { jp: "मेरे पैर में चोट है।", en: "I have an injury on my foot." }, drill: { jp: "इस बच्चे को चोट लगती है", en: "This child gets hurt" }, hint: "CHOT — ⚠️ FEMININE, with RETROFLEX ट. चोट लगना is 'to get hurt': मुझे चोट लगती है. Read it against छोटा chhotaa (small, unit 4) — छ carries a puff of air that च does not." },
        { id: "hi-u20l4-mazbuut", type: "vocab", front: "मज़बूत", reading: "mazbuut", meaning: "strong", accept: ["sturdy", "firm", "robust"], example: { jp: "यह दीवार बहुत मज़बूत है।", en: "This wall is very strong." }, drill: { jp: "इस गाड़ी का ताला मज़बूत है", en: "This car's lock is strong" }, hint: "MAZ-BUUT, with ज़ — a z — and it never changes form. Strong of a thing or a person, firm of a decision. Keep the pair straight: ताकत is the NOUN 'strength', मज़बूत the ADJECTIVE 'strong'." },
      ],
    },
  ],
};
