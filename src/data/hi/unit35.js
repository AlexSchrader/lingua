// HI Unit 35 — डॉक्टर के पास ("At the doctor's") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 1. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// WHY THIS SLOT KEPT ITS THEME. u20 शरीर और सेहत owns the BODY and the feeling of
// being unwell — शरीर, सिर, पेट, दिल, दाँत, बुखार, दर्द, चोट, खाँसी, दवा, इलाज,
// नींद, थकान, सेहत, ताकत, बीमार. The probe found health at **5 of 17** all the
// same, and the gap was the CLINIC: the course had a hospital since u9 and an
// इलाज since u20 and **no word for a doctor**. This unit is the visit — the people
// in the room, what you tell them, what they give you.
//
// 🚨 ॉ GOES LIVE HERE, IN ONE FRONT, AND unit1.js §7 LEFT THAT CALL TO A2 BY NAME.
// डॉक्टर is the word, and डाक्टर is a variant spelling no printed Hindi uses for it.
// The candra-o ॉ is not a glyph card — u3 cards the nine mātrā syllables on क and
// this is not one of them — so it is taught as a READING NOTE in डॉक्टर's own hint,
// which is exactly the route §7 sanctioned for क़ ख़ ग़. It reads as **o**, like ो:
// डॉक्टर doktar. No Hindi word pair is told apart by ो vs ॉ, so nothing collides.
// unit31.js §A4 records the decision for the whole band; blocks 2 and 3 may use it
// for लैपटॉप, हॉस्पिटल and the rest, and should copy this hint's wording.
//
// ⚠️ TWO GLOSSES ARE DELIBERATELY AWKWARD, TO CLEAR AN A1 accept[] ENTRY. §9's rule
// is that two items must never sit under one prompt, and `normalizeMeaning` strips
// parentheses, so a discriminator has to be a WORD:
//   • मरीज़ is "a doctor's patient", NOT "a patient" — बीमार (u20l3, "ill") already
//     carries "a patient" in its accept[].
//   • घाव is "an open sore", NOT "a wound" — चोट (u20l3, "an injury") already
//     carries "a wound".
// AND ONE WORD WAS DROPPED OUTRIGHT: खुराक, because दवा (u20l4) already accepts
// "a dose". सुई took its place, which the इंजेक्शन card needed anyway.
//
// ⚠️ AND ONE CARD WAS SWAPPED OUT MID-AUTHORING, WHICH IS WORTH RECORDING. The draft
// l4 ended with आरामदार, "restful" — pleasant, and not load-bearing. Then
// `scripts/scope-hi.mjs` flagged लगाई and लगाओ in three sentences, because लगाना
// IS NOT TAUGHT ANYWHERE IN HINDI: only लगना (u12l4, "to seem") is a front. But
// लगाना is the verb this entire unit runs on — मरहम लगाना, सुई लगाना,
// टीका लगाना, पट्टी लगाना — so it took आरामदार's place rather than the
// sentences being written around it. It is the seventh -आ- causative twin of the
// band, after u31l2's six.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   डॉक्टर, नर्स, मरीज़, क्लर्क-style job words do NOT change for a woman — मेरी
//   बहन डॉक्टर है, with the ADJECTIVE feminine and the noun unmoved.
//   हड्डी, साँस, पर्ची, जाँच, उल्टी, सूजन, गोली, पट्टी, सुई, बीमारी, नस are
//   FEMININE — and साँस, सूजन and नस end in consonants, §4's unpredictable class.
//   खून, वज़न, ज़ुकाम, चक्कर, घाव, इंजेक्शन, मरहम are MASCULINE.
//   टीका is MASCULINE -ा, regular. कमज़ोर is an INVARIANT adjective.
//
// RETROFLEX/DENTAL: no new pair, checked against all 840 readings. हड्डी haddii,
// गोली golii, पट्टी pattii, टीका tiikaa, पर्ची parchii, चक्कर chakkar and उल्टी
// ultii have no dental counterpart in the corpus — no हद्दी, पत्ती, तीका, or
// उल्ती — so §1(b)'s doubling hatch fires nowhere new. हड्डी and पट्टी and चक्कर
// carry doubled letters because of §1's GEMINATION, which is a different rule with
// the same notation: unit11.js already records that distinction.
export const HI_UNIT35 = {
  id: "hi-u35",
  lang: "hi",
  title: "डॉक्टर के पास",
  order: 35,
  stage: "a2",
  lessons: [
    {
      id: "hi-u35l1",
      unit: 35,
      lesson: 1,
      title: "The people in the room",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Get yourself seen at an Indian clinic: ask for the doctor, name the illness and take the prescription.",
      items: [
        { id: "hi-u35l1-doktar", type: "vocab", front: "डॉक्टर", reading: "doktar", meaning: "a doctor", accept: ["a physician", "a medic", "someone who treats the sick"], example: { jp: "डॉक्टर ने मुझे तीन दिन आराम के लिए कहा।", en: "The doctor told me to rest for three days." }, drill: { jp: "मेरी बहन शहर में डॉक्टर है", en: "My sister is a doctor in the city" }, hint: "DOK-TAR, MASCULINE as a word even for a woman — मेरी बहन डॉक्टर है, with the ADJECTIVE feminine and the noun unchanged. ⚠️ AND A NEW MARK: the little hook ॉ over the ड is the candra-o, used only in words Hindi borrowed. It reads as a slightly open o, so डॉ- is said dok-. This is the only word in Hindi A1–A2 that carries it." },
        { id: "hi-u35l1-nars", type: "vocab", front: "नर्स", reading: "nars", meaning: "a nurse", accept: ["someone who looks after patients", "a ward sister"], example: { jp: "नर्स ने मेरा वज़न लिया।", en: "The nurse took my weight." }, drill: { jp: "नर्स अस्पताल में काम करती है", en: "The nurse works at the hospital" }, hint: "NARS, and like डॉक्टर the noun does not change for gender — but the VERB does: करती है for a woman. The र् sits on the न as a slanted stroke, unit 6's conjunct." },
        { id: "hi-u35l1-mariiz", type: "vocab", front: "मरीज़", reading: "mariiz", meaning: "a doctor's patient", accept: ["someone being treated", "a person under a doctor's care"], example: { jp: "अस्पताल में आज बहुत मरीज़ थे।", en: "There were a lot of patients at the hospital today." }, drill: { jp: "यह मरीज़ अब ठीक है", en: "This patient is all right now" }, hint: "MA-RIIZ, MASCULINE, plural मरीज़ (unchanged), with the ज़ of unit 4. बीमार (u20) is the adjective — a person who IS ill; a मरीज़ is that person once a डॉक्टर is involved." },
        { id: "hi-u35l1-biimaarii", type: "vocab", front: "बीमारी", reading: "biimaarii", meaning: "an illness", accept: ["a disease", "a sickness", "an ailment"], example: { jp: "यह बीमारी बच्चों में ज़्यादा होती है।", en: "This illness is more common in children." }, drill: { jp: "उसकी बीमारी बहुत पुरानी है", en: "His illness is a very old one" }, hint: "BII-MAA-RII, FEMININE, plural बीमारियाँ — the noun of बीमार, ill (u20), exactly as तैयारी is the noun of तैयार. सेहत (u20) is its opposite." },
        { id: "hi-u35l1-parchii", type: "vocab", front: "पर्ची", reading: "parchii", meaning: "a prescription", accept: ["a slip of paper", "a chit", "a doctor's note"], example: { jp: "डॉक्टर ने दवा की पर्ची दी।", en: "The doctor gave a prescription for medicine." }, drill: { jp: "यह पर्ची दुकान पर दिखाओ", en: "Show this slip at the shop" }, hint: "PAR-CHII, FEMININE, plural पर्चियाँ, with र् riding on the च. Any small slip of paper is a पर्ची — a queue number, a receipt, a note — and the doctor's is the commonest kind." },
        { id: "hi-u35l1-jaanch", type: "vocab", front: "जाँच", reading: "jaanch", meaning: "a medical test", accept: ["a check-up", "an examination of something", "an inspection"], example: { jp: "खून की जाँच कल सुबह है।", en: "The blood test is tomorrow morning." }, drill: { jp: "इस जाँच में बहुत देर लगी", en: "This test took a long time" }, hint: "JAANCH, FEMININE, plural जाँचें, nasalised aa. जाँच करना is to check anything — a bag, an account, a body. परीक्षा (u28) is the school kind and never this one." },
      ],
    },
    {
      id: "hi-u35l2",
      unit: 35,
      lesson: 2,
      title: "Say what is wrong",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Describe six symptoms to a doctor, beyond the fever and the ache you already know.",
      items: [
        { id: "hi-u35l2-zukaam", type: "vocab", front: "ज़ुकाम", reading: "zukaam", meaning: "a head cold", accept: ["a cold", "a blocked nose", "the sniffles"], example: { jp: "सर्दी में मुझे हर साल ज़ुकाम होता है।", en: "I get a cold every year in winter." }, drill: { jp: "उसे आज ज़ुकाम और बुखार है", en: "He has a cold and a fever today" }, hint: "ZU-KAAM, MASCULINE, uncountable, with the ज़ of unit 4. सर्दी (u16) is the season AND, confusingly, also a cold — ज़ुकाम is the word that can only mean the illness. खाँसी (u20) is the cough that comes with it." },
        { id: "hi-u35l2-ultii", type: "vocab", front: "उल्टी", reading: "ultii", meaning: "vomiting", accept: ["being sick", "throwing up", "nausea"], example: { jp: "रास्ते में बच्चे को उल्टी हुई।", en: "The child was sick on the way." }, drill: { jp: "मुझे उल्टी हो रही है", en: "I am being sick" }, hint: "UL-TII, FEMININE, retroflex ट, and the halant under the ल is unit 6's. उल्टी होना is the whole verb — Hindi says the vomiting 'happens to' you. उल्टा also means upside down; same root, different word." },
        { id: "hi-u35l2-chakkar", type: "vocab", front: "चक्कर", reading: "chakkar", meaning: "dizziness", accept: ["giddiness", "feeling faint", "a spin"], example: { jp: "धूप में बहुत देर रहने से मुझे चक्कर आया।", en: "Being in the sun a long time made me dizzy." }, drill: { jp: "उसे सुबह से चक्कर आ रहे हैं", en: "She has been dizzy since morning" }, hint: "CHAK-KAR, MASCULINE, doubled क (§1's gemination). चक्कर आना is to feel dizzy — the dizziness 'comes'. A चक्कर is also a round or a lap, which is why the word means a spinning head." },
        { id: "hi-u35l2-suujan", type: "vocab", front: "सूजन", reading: "suujan", meaning: "swelling", accept: ["puffiness", "a swollen place"], example: { jp: "चोट के बाद पैर में सूजन थी।", en: "There was swelling in the leg after the injury." }, drill: { jp: "हाथ की सूजन अब कम है", en: "The swelling in the hand is less now" }, hint: "SUU-JAN, FEMININE despite the consonant ending — §4's unpredictable class. Uncountable. It goes with चोट (u20): first the injury, then the सूजन." },
        { id: "hi-u35l2-ghaav", type: "vocab", front: "घाव", reading: "ghaav", meaning: "an open sore", accept: ["a gash", "a cut that has not healed", "a lesion"], example: { jp: "उसके पैर का घाव अभी भरा नहीं है।", en: "The sore on his foot has not closed yet." }, drill: { jp: "इस घाव पर पट्टी ज़रूरी है", en: "A bandage is essential on this sore" }, hint: "GHAAV, MASCULINE, aspirated घ. चोट (u20) is the injury as an event; a घाव is the broken skin it leaves and that has to close. घाव भरना is for it to heal." },
        { id: "hi-u35l2-kamzor", type: "vocab", front: "कमज़ोर", reading: "kamzor", meaning: "weak", accept: ["feeble", "run down", "not strong"], example: { jp: "बीमारी के बाद वह बहुत कमज़ोर था।", en: "He was very weak after the illness." }, drill: { jp: "मेरी माँ इन दिनों कमज़ोर हैं", en: "My mother is weak these days" }, hint: "KAM-ZOR, INVARIANT — never कमज़ोरी as an adjective, so कमज़ोर माँ and कमज़ोर बेटा both. Built from कम (u1l2), less, plus the Persian -ज़ोर, force. ताकत (u20) is what it lacks. And note माँ takes the honorific plural हैं." },
      ],
    },
    {
      id: "hi-u35l3",
      unit: 35,
      lesson: 3,
      title: "Inside the body",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name what a doctor measures and looks at under the skin, and read a test result out loud.",
      items: [
        { id: "hi-u35l3-khuun", type: "vocab", front: "खून", reading: "khuun", meaning: "blood", accept: ["one's blood", "gore"], example: { jp: "घाव से थोड़ा खून निकला।", en: "A little blood came out of the sore." }, drill: { jp: "खून की जाँच बहुत ज़रूरी है", en: "A blood test is very important" }, hint: "KHUUN, MASCULINE, uncountable, and written with PLAIN ख — unit 1 §7 explains why Hindi does not use ख़ here. खून की जाँच is a blood test, the phrase from lesson 1." },
        { id: "hi-u35l3-haddii", type: "vocab", front: "हड्डी", reading: "haddii", meaning: "a bone", accept: ["bone", "one of the bones"], example: { jp: "गिरने के बाद उसके हाथ की हड्डी में दर्द था।", en: "After the fall there was pain in the bone of his arm." }, drill: { jp: "यह हड्डी अब ठीक हो गई", en: "This bone is fine now" }, hint: "HAD-DII, FEMININE, plural हड्डियाँ, with the doubled retroflex ड of §1's gemination. It is FEMININE, so दर्द agreement never shows on it — but हड्डी टूटी, the bone broke, is the phrase you will hear, and तोड़ना (u26) is its transitive twin." },
        { id: "hi-u35l3-saans", type: "vocab", front: "साँस", reading: "saans", meaning: "breath", accept: ["breathing", "a breath"], example: { jp: "दौड़ने के बाद मेरी साँस तेज़ थी।", en: "My breathing was fast after running." }, drill: { jp: "गहरी साँस लो और बैठो", en: "Take a deep breath and sit down" }, hint: "SAANS, FEMININE despite the consonant ending, nasalised aa. साँस लेना is to breathe — literally to take a breath. Read it against सास, a mother-in-law, which has no nasal and is a different word." },
        { id: "hi-u35l3-vazan", type: "vocab", front: "वज़न", reading: "vazan", meaning: "weight", accept: ["how heavy something is", "one's bodyweight"], example: { jp: "बीमारी में उसका वज़न कम हुआ।", en: "He lost weight during the illness." }, drill: { jp: "इस डिब्बे का वज़न ज़्यादा है", en: "This box's weight is too much" }, hint: "VA-ZAN, MASCULINE, with the ज़ of unit 4. भारी (u19) is the adjective heavy; वज़न is the number. वज़न लेना is to weigh someone, which is what the नर्स did in lesson 1." },
        { id: "hi-u35l3-nas", type: "vocab", front: "नस", reading: "nas", meaning: "a vein", accept: ["a nerve", "a blood vessel", "a tendon"], example: { jp: "नर्स ने हाथ की नस में सुई लगाई।", en: "The nurse put the needle into the vein in his arm." }, drill: { jp: "उसके हाथ की नस बहुत पतली है", en: "The vein in his hand is very thin" }, hint: "NAS, FEMININE despite the consonant ending, one syllable, plural नसें. Hindi does not split vein from nerve from tendon the way English does — नस covers all three, and context decides." },
        { id: "hi-u35l3-tiikaa", type: "vocab", front: "टीका", reading: "tiikaa", meaning: "a vaccination", accept: ["a jab", "an immunisation", "a vaccine"], example: { jp: "बच्चों को यह टीका हर साल लगता है।", en: "Children get this vaccination every year." }, drill: { jp: "उसका टीका कल हुआ", en: "His vaccination was yesterday" }, hint: "TII-KAA, MASCULINE, plural टीके, retroflex ट. टीका लगना is to be vaccinated — the jab 'attaches'. The same word also means the mark on the forehead, from the same idea of something applied to the skin." },
      ],
    },
    {
      id: "hi-u35l4",
      unit: 35,
      lesson: 4,
      title: "What the doctor gives you",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Understand what you have been given and how to use it — a tablet, an injection, a bandage or an ointment.",
      items: [
        { id: "hi-u35l4-golii", type: "vocab", front: "गोली", reading: "golii", meaning: "a tablet", accept: ["a pill", "a capsule", "a bullet"], example: { jp: "यह गोली खाने के बाद लो।", en: "Take this tablet after food." }, drill: { jp: "मुझे रोज़ एक गोली लेनी है", en: "I have to take one tablet a day" }, hint: "GO-LII, FEMININE, plural गोलियाँ — anything small and round, which is why it also means a bullet. दवा (u20) is medicine in general; a गोली is the specific solid one. गोल (u28) is the shape it is named after." },
        { id: "hi-u35l4-injekshan", type: "vocab", front: "इंजेक्शन", reading: "injekshan", meaning: "an injection", accept: ["a jab in the arm", "a shot of medicine"], example: { jp: "डॉक्टर ने उसे एक इंजेक्शन दिया।", en: "The doctor gave him an injection." }, drill: { jp: "इंजेक्शन में बहुत दर्द नहीं होता", en: "An injection does not hurt much" }, hint: "IN-JEK-SHAN, MASCULINE, with the क्श conjunct. टीका is specifically a vaccination; an इंजेक्शन is any injected medicine. The Hindi word सूई लगाना says the same thing with lesson 3's needle." },
        { id: "hi-u35l4-suii", type: "vocab", front: "सुई", reading: "suii", meaning: "a needle", accept: ["a syringe needle", "a sewing needle"], example: { jp: "बच्चे को सुई से डर लगता है।", en: "The child is afraid of the needle." }, drill: { jp: "यह सुई बहुत पतली है", en: "This needle is very thin" }, hint: "SU-II, FEMININE, plural सुइयाँ, two syllables — su-ii, not one. The same word serves the doctor and the tailor, which u40 will need. डर (u27) is the fear, and डर लगना is how Hindi says someone is afraid." },
        { id: "hi-u35l4-pattii", type: "vocab", front: "पट्टी", reading: "pattii", meaning: "a bandage", accept: ["a dressing", "a strip of cloth for a wound", "a plaster"], example: { jp: "नर्स ने घाव पर पट्टी बाँधी।", en: "The nurse tied a bandage on the sore." }, drill: { jp: "इस पट्टी को रोज़ बदलो", en: "Change this bandage every day" }, hint: "PAT-TII, FEMININE, plural पट्टियाँ, with the doubled retroflex ट of §1's gemination. पट्टी बाँधना is to bandage, using u26's बाँधना. A पट्टी is also any strip — of cloth, of land, of paper." },
        { id: "hi-u35l4-marham", type: "vocab", front: "मरहम", reading: "marham", meaning: "an ointment", accept: ["a cream", "a salve", "a healing paste"], example: { jp: "सूजन पर यह मरहम लगाओ।", en: "Put this ointment on the swelling." }, drill: { jp: "मरहम दिन में दो बार लगाओ", en: "Apply the ointment twice a day" }, hint: "MAR-HAM, MASCULINE. मरहम लगाना is to apply it. The word is Persian and it carries a second, gentler sense: मरहम लगाना also means to comfort someone who is hurt." },
        { id: "hi-u35l4-lagaanaa", type: "vocab", front: "लगाना", reading: "lagaanaa", meaning: "to apply", accept: ["to put on", "to attach", "to fix in place", "to switch on"], example: { jp: "डॉक्टर ने घाव पर मरहम लगाया।", en: "The doctor put ointment on the sore." }, drill: { jp: "चोट पर पट्टी लगाना ज़रूरी है", en: "Putting a bandage on an injury is essential" }, hint: "LA-GAA-NAA — the transitive twin of लगना (u12), exactly the -आ- pattern of u31 lesson 2. It is one of the busiest verbs in Hindi and it covers this whole unit: मरहम लगाना to apply ointment, सुई लगाना to give an injection, टीका लगाना to vaccinate, पट्टी लगाना to bandage. Outside the clinic it also switches on a fan and plants a tree." },
      ],
    },
  ],
};
