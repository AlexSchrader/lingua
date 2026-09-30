// HI Unit 56 — देखो, सुनो, सूँघो ("Look, listen, smell") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 3. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 7 (A2)"). MEASURED HOLE: **the senses
// were 9 of 30, and the nine are all TASTE and TOUCH.** u13l4 gave मीठा, तीखा,
// खट्टा, स्वाद; u19l2 नरम, कड़ा, भारी, हल्का; u24l2 गीला and सूखा. So the corpus
// could describe a mango and could not describe a room: **no light, no darkness, no
// shine, no silence, no echo, no smell of any kind — good or bad — no verb for
// sniffing or tasting, and no word for blurred, pointed, smooth, rough, crisp or
// stale.** Three of the five senses had no vocabulary at all.
//
// ⚠️ WHY THE TITLE IS THREE IMPERATIVES. देखो (देखना u3), सुनो (सुनना u12) and
// सूँघो (this unit, l3) — the familiar imperative in -ो, which unit31.js §A6 added
// to the scope tool. A sense unit named with a noun ("इंद्रियाँ") would be a word
// no A2 learner needs; named with three commands it says what the unit does and
// every word in it is already decodable.
//
// ⚠️ SIX FRONTS WANTED AND REFUSED, and this field is dense with TAKEN strings:
//   आवाज़ (u28l4, as a VOICE) · शोर (u33l2, as travel noise) · साफ़ and गंदा
//   (u14l4, of a PLACE) · तेज़ (u24l2, as "fast") · मीठा (u13l4). All are used in
//   this unit's sentences instead. ताज़ा was refused as a SYNONYM: "fresh" is नया's
//   accept list (u4l4) through normalizeMeaning, so बासी carries the pair alone.
//   NAMED FOR A LATER BLOCK: नज़र (eyesight), सुगंध, अंधा (blind — and see the
//   warning below about why it is NOT in this unit), ठंड, कड़क.
//
// ⚠️ अंधा WAS DELIBERATELY LEFT OUT, AND THE REASON IS A LESSON-SHAPE ONE, not a
// collision. अंधा (blind) and अंधेरा (darkness) are one root, so carding both in the
// same UNIT — l1 and l2, three cards apart — is the "same-lesson pair" the
// cross-block sweep exists to catch. बहरा (deaf) has no such twin and carries the
// sense-loss idea by itself. अंधा is named above for a later block.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: रोशनी, चमक, झलक, खुशबू, बदबू. चमक and झलक are CONSONANT-FINAL —
//   चमक कम है, not कम था.
//   ⚠️ AND गूँज IS FEMININE TOO — गूँज साफ़ थी, not था. It is the one in this unit
//   most likely to be got wrong (an -ूँज noun looks like nothing), so its hint says
//   so twice.
//   MASCULINE: अंधेरा, सन्नाटा. Both are regular -ा.
//   ADJECTIVES THAT AGREE (they end in -आ): धुंधला, चिकना, खुरदरा, नुकीला, कड़वा,
//   कुरकुरा, बहरा → धुंधली तस्वीर, कड़वी दवा, बहरी औरत. Seven of them.
//   ADJECTIVES THAT DO NOT (unit 53's rule): रंगीन, नमकीन, बासी, चुप.
//
// ⚠️ TWO NEAR-PAIRS THAT EARN THEIR HINTS:
//   • चमक chamak (a gleam) against चमकना (u60l3, to shine) — base and derivative,
//     legal under RUNBOOK §4's lexeme rule, and put NINE UNITS APART on purpose so
//     they are not one lesson's two cards. ⚠️ MĀTRĀ-PREFIX TRAP: चमक is a strict
//     prefix of चमकना, and `findWholeWord`'s boundary test is \p{L} while ा/े are
//     \p{M} — so a drill for चमक containing चमकता WOULD mis-blank. Checked
//     mechanically: neither drill contains the other's forms.
//   • गूँज (an echo) against गूँजना — the SAME shape, and the verb was DROPPED from
//     u60 for exactly this reason rather than shipping both.
// RETROFLEX/DENTAL (§1b): no new pair. खुरदरा khurdaraa and कड़वा karvaa are DENTAL
// द / the ड़ flap with no counterpart; नुकीला nukiilaa and कुरकुरा kurkuraa are
// plain; चुभना chubhnaa has no twin. Checked against all 1080 readings.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT56 = {
  id: "hi-u56",
  lang: "hi",
  title: "देखो, सुनो, सूँघो",
  order: 56,
  stage: "a2",
  lessons: [
    {
      id: "hi-u56l1",
      unit: 56,
      lesson: 1,
      title: "Light, dark, and a glimpse of something",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say a place is bright or dark, describe something as shining, colourful or blurred, and say you caught a glimpse of it.",
      items: [
        { id: "hi-u56l1-roshnii", type: "vocab", front: "रोशनी", reading: "roshnii", meaning: "brightness", accept: ["glow", "illumination"], example: { jp: "खिड़की से सुबह की रोशनी पूरे कमरे में आती है।", en: "The morning brightness comes into the whole room through the window." }, drill: { jp: "इस कमरे में रोशनी बहुत कम है", en: "There is very little brightness in this room" }, hint: "RO-SH-NII — ⚠️ FEMININE. Not लाइट (unit 9), which is the electric fitting on the wall: रोशनी is the light itself, from a lamp, a window or a fire. दीवाली को घर में रोशनी होती है." },
        { id: "hi-u56l1-andheraa", type: "vocab", front: "अंधेरा", reading: "andheraa", meaning: "darkness", accept: ["no light at all", "gloom"], example: { jp: "बिजली जाने के बाद पूरे घर में अंधेरा हो गया।", en: "After the electricity went, the whole house went dark." }, drill: { jp: "इस कमरे में बहुत अंधेरा है", en: "It is very dark in this room" }, hint: "AN-DHE-RAA, masculine and regular -ा, with a DENTAL ध. The ं before ध is the matching dental nasal. Used as a NOUN where English uses an adjective: अंधेरा है, 'there is darkness', for 'it is dark'." },
        { id: "hi-u56l1-chamak", type: "vocab", front: "चमक", reading: "chamak", meaning: "a gleam", accept: ["a sparkle", "shininess"], example: { jp: "नए बर्तन की चमक दूर से भी अच्छी लगती है।", en: "The gleam of a new pot looks good even from far away." }, drill: { jp: "नए बर्तन की चमक बहुत अच्छी है", en: "The gleam of the new pot is very good" }, hint: "CHA-MAK — ⚠️ FEMININE, consonant-final: चमक कम है, not कम था. The verb from it, चमकना, comes in unit 60 — nine units later on purpose, so the noun and the verb are not one lesson's two cards." },
        { id: "hi-u56l1-dhundhlaa", type: "vocab", front: "धुंधला", reading: "dhundhlaa", meaning: "blurred", accept: ["hazy", "indistinct"], example: { jp: "बिना चश्मे के मुझे हर अक्षर धुंधला लगता है।", en: "Without my spectacles every letter looks blurred to me." }, drill: { jp: "यह अक्षर बहुत धुंधला है", en: "This letter is very blurred" }, hint: "DHUNDH-LAA — ⚠️ IT AGREES, because it ends in -आ: धुंधला अक्षर, धुंधली तस्वीर. Two DENTAL ध, and the ं between them is the matching nasal. Of eyesight, of a photograph and of a memory alike." },
        { id: "hi-u56l1-rangiin", type: "vocab", front: "रंगीन", reading: "rangiin", meaning: "colourful", accept: ["brightly coloured", "in colour"], example: { jp: "मेले में बच्चों ने रंगीन कपड़े पहने थे।", en: "At the fair the children were wearing colourful clothes." }, drill: { jp: "बच्चों ने रंगीन कपड़े पहने हैं", en: "The children are wearing colourful clothes" }, hint: "RAN-GIIN, INVARIANT — रंगीन कपड़ा AND रंगीन साड़ी, because -ी and -ीन adjectives do not agree (unit 53). Built off रंग, a colour (unit 16). रंगीन तस्वीर is a colour photograph, as against a black-and-white one." },
        { id: "hi-u56l1-jhalak", type: "vocab", front: "झलक", reading: "jhalak", meaning: "a glimpse", accept: ["a fleeting sight"], example: { jp: "भीड़ में मुझे उसकी एक झलक मिली।", en: "In the crowd I got one glimpse of her." }, drill: { jp: "भीड़ में उसकी एक झलक मिली", en: "One glimpse of her was caught in the crowd" }, hint: "JHA-LAK — ⚠️ FEMININE, consonant-final: झलक मिली, not मिला. The verb is मिलना, to be got. A sight so short you are not sure of it — which is why it is the word used of film stars and of processions." },
      ],
    },
    {
      id: "hi-u56l2",
      unit: 56,
      lesson: 2,
      title: "Sound, silence and the ears",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Describe total silence, an echo, a shriek and a whisper — and say that someone is deaf or has gone quiet.",
      items: [
        { id: "hi-u56l2-sannaataa", type: "vocab", front: "सन्नाटा", reading: "sannaataa", meaning: "total silence", accept: ["dead stillness", "hush"], example: { jp: "रात के बारह बजे पूरी गली में सन्नाटा था।", en: "At twelve at night there was total silence in the whole lane." }, drill: { jp: "पूरी गली में सन्नाटा था", en: "There was total silence in the whole lane" }, hint: "SAN-NAA-TAA, masculine and regular -ा. GEMINATION: न्न is doubled and you hear both, san-naa-taa. Stronger than शांत (unit 14), which is merely quiet — सन्नाटा is the silence that feels wrong." },
        { id: "hi-u56l2-guunj", type: "vocab", front: "गूँज", reading: "guunj", meaning: "an echo", accept: ["a resonance", "a reverberation"], example: { jp: "मंदिर के अंदर घंटी की गूँज बहुत देर तक रही।", en: "Inside the temple the echo of the bell lasted a long time." }, drill: { jp: "खाली कमरे में गूँज साफ़ थी", en: "The echo was clear in the empty room" }, hint: "GUUNJ — ⚠️ FEMININE, and this is the one in the unit most often got wrong: गूँज साफ़ थी, not था. Long uu with the ँ over it. ⚠️ FEMININE. The verb गूँजना exists and is deliberately NOT carded, so that the noun and the verb are not two mastery tracks for one word." },
        { id: "hi-u56l2-chiikhnaa", type: "vocab", front: "चीखना", reading: "chiikhnaa", meaning: "to shriek", accept: ["shriek", "to scream"], example: { jp: "साँप देखकर बच्चा चीखा और माँ ने उसे उठा लिया।", en: "On seeing the snake the child shrieked and mother picked him up." }, drill: { jp: "अंधेरे में चीखना ठीक नहीं है", en: "Shrieking in the dark is not right" }, hint: "CHIIKH-NAA, long ii, ख with a puff of air. Its stem ends in a CONSONANT, so the past just adds ा: चीखा, चीखी, चीखे (unit 31 §A6). Louder than रोना (unit 24) and not about sadness — you चीख from fear or pain." },
        { id: "hi-u56l2-phusphusaanaa", type: "vocab", front: "फुसफुसाना", reading: "phusphusaanaa", meaning: "to whisper", accept: ["whisper", "to murmur under the breath"], example: { jp: "कक्षा में दो लड़कियाँ पीछे बैठकर फुसफुसा रही थीं।", en: "In the class two girls were sitting at the back whispering." }, drill: { jp: "कक्षा में फुसफुसाना ठीक नहीं है", en: "Whispering in class is not right" }, hint: "PHUS-PHU-SAA-NAA — the same syllable twice, with फ and a real puff each time, which is the sound of the thing it names. Its stem ends in a VOWEL (फुसफुसा), so the past adds य: फुसफुसाया." },
        { id: "hi-u56l2-bahraa", type: "vocab", front: "बहरा", reading: "bahraa", meaning: "deaf", accept: ["hard of hearing"], example: { jp: "दादा जी अब थोड़े बहरे हो गए हैं इसलिए तेज़ बोलिए।", en: "Grandfather has gone a little deaf now, so please speak loudly." }, drill: { jp: "मेरा दादा अब थोड़ा बहरा है", en: "My grandfather is a little deaf now" }, hint: "BAH-RAA — ⚠️ IT AGREES, because it ends in -आ: बहरा आदमी, बहरी औरत, बहरे लोग. The middle h is breathed: bah-raa, two beats. Not an insult in Hindi, simply a description." },
        { id: "hi-u56l2-chup", type: "vocab", front: "चुप", reading: "chup", meaning: "silent", accept: ["saying nothing", "hushed"], example: { jp: "शिक्षक के आने पर पूरी कक्षा चुप हो गई।", en: "When the teacher came in the whole class went silent." }, drill: { jp: "सब लोग अचानक चुप हो गए", en: "Everyone suddenly went silent" }, hint: "CHUP, INVARIANT, three letters — चुप लड़का, चुप लड़की. Of a person who has stopped talking, not of a quiet place (शांत, unit 14) and not of a shy nature (शर्मीला, unit 53). चुप! on its own means be quiet, and it is sharp." },
      ],
    },
    {
      id: "hi-u56l3",
      unit: 56,
      lesson: 3,
      title: "What it smells and tastes like",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name a good smell and a bad one, sniff something, have a taste of it, and say it is bitter or salty.",
      items: [
        { id: "hi-u56l3-khushbuu", type: "vocab", front: "खुशबू", reading: "khushbuu", meaning: "a pleasant smell", accept: ["fragrance", "a scent"], example: { jp: "रसोई से मसाले की खुशबू पूरे घर में आ रही थी।", en: "The smell of spices was coming from the kitchen through the whole house." }, drill: { jp: "रसोई से मसाले की खुशबू आ रही है", en: "The smell of spices is coming from the kitchen" }, hint: "KHUSH-BUU — ⚠️ FEMININE. You know the first half: खुश, happy (unit 8), plus बू, a smell — so literally a happy smell. Long uu at the end. The verb is आना: खुशबू आ रही है." },
        { id: "hi-u56l3-badbuu", type: "vocab", front: "बदबू", reading: "badbuu", meaning: "a stink", accept: ["a foul smell", "a stench"], example: { jp: "कचरे की बदबू से कोई उस गली में नहीं जाता।", en: "Because of the stink of the rubbish nobody goes into that lane." }, drill: { jp: "कचरे की बदबू बहुत तेज़ है", en: "The stink of the rubbish is very strong" }, hint: "BAD-BUU — ⚠️ FEMININE, and the exact mirror of खुशबू: बद- is the Persian 'bad' prefix you met in बदतमीज़ (unit 53), on the same बू. DENTAL द." },
        { id: "hi-u56l3-suunghnaa", type: "vocab", front: "सूँघना", reading: "suunghnaa", meaning: "to sniff", accept: ["sniff", "to smell something"], example: { jp: "कुत्ते ने खाना सूँघा और फिर खाया।", en: "The dog sniffed the food and then ate it." }, drill: { jp: "कुत्ता हर चीज़ सूँघना चाहता है", en: "The dog wants to sniff everything" }, hint: "SUUNGH-NAA. The ँ nasalises the long uu and adds no letter, then घ with a puff of air. Its stem ends in a CONSONANT, so the past adds ा: सूँघा. The unit's title uses its imperative: सूँघो." },
        { id: "hi-u56l3-chakhnaa", type: "vocab", front: "चखना", reading: "chakhnaa", meaning: "to have a taste of", accept: ["sample by tasting"], example: { jp: "माँ ने दाल चखी और उसमें थोड़ा नमक डाला।", en: "Mother tasted the lentils and put a little salt in them." }, drill: { jp: "पहले दाल चखना अच्छी बात है", en: "Tasting the lentils first is a good thing" }, hint: "CHAKH-NAA, ख with a puff of air. Only a LITTLE — चखना is the cook's spoonful, where खाना (unit 12) is the meal. The noun स्वाद, a flavour, is unit 13." },
        { id: "hi-u56l3-karvaa", type: "vocab", front: "कड़वा", reading: "karvaa", meaning: "bitter", accept: ["bitter-tasting"], example: { jp: "यह दवा इतनी कड़वी है कि बच्चे पीते नहीं।", en: "This medicine is so bitter that children will not drink it." }, drill: { jp: "इस दवा का स्वाद बहुत कड़वा है", en: "The taste of this medicine is very bitter" }, hint: "KAR-VAA — ⚠️ IT AGREES, because it ends in -आ: कड़वा स्वाद, कड़वी दवा. ड़ is the curled-back flap, written r. Also of words: कड़वी बात is a remark that stings." },
        { id: "hi-u56l3-namkiin", type: "vocab", front: "नमकीन", reading: "namkiin", meaning: "salty", accept: ["savoury", "salted"], example: { jp: "चाय के साथ कुछ नमकीन खाने का मन है।", en: "I feel like eating something savoury with the tea." }, drill: { jp: "यह दाल आज बहुत नमकीन है", en: "This lentil dish is very salty today" }, hint: "NAM-KIIN, INVARIANT — नमकीन दाल AND नमकीन खाना. Built off नमक, salt (unit 13). As a NOUN it means savoury snacks in general, which is how the example uses it: कुछ नमकीन." },
      ],
    },
    {
      id: "hi-u56l4",
      unit: 56,
      lesson: 4,
      title: "How it feels in the hand, and whether it is fresh",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Describe a surface as smooth, rough or pointed, say something pricked you, and call food crisp or stale.",
      items: [
        { id: "hi-u56l4-chiknaa", type: "vocab", front: "चिकना", reading: "chiknaa", meaning: "smooth", accept: ["slippery", "sleek"], example: { jp: "बारिश के बाद फ़र्श इतना चिकना था कि मैं गिर गया।", en: "After the rain the floor was so smooth that I fell." }, drill: { jp: "बारिश के बाद फ़र्श बहुत चिकना है", en: "After the rain the floor is very smooth" }, hint: "CHIK-NAA — ⚠️ IT AGREES: चिकना फ़र्श, चिकनी दीवार. ⚠️ It ends in -ना exactly like an infinitive and it is an ADJECTIVE — the same trap as झरना (unit 54), read from the other side. Smooth AND slippery, one word." },
        { id: "hi-u56l4-khurdaraa", type: "vocab", front: "खुरदरा", reading: "khurdaraa", meaning: "rough to the touch", accept: ["coarse to the touch", "scratchy"], example: { jp: "यह कपड़ा खुरदरा है इसलिए बच्चे को चुभता है।", en: "This cloth is rough, so it scratches the child." }, drill: { jp: "यह कपड़ा बहुत खुरदरा है", en: "This cloth is very rough" }, hint: "KHUR-DA-RAA — ⚠️ IT AGREES: खुरदरा कपड़ा, खुरदरी दीवार. DENTAL द, and the middle a IS pronounced: khur-da-raa, three beats. The opposite of चिकना, and never of नरम (unit 19), which is about give rather than surface." },
        { id: "hi-u56l4-nukiilaa", type: "vocab", front: "नुकीला", reading: "nukiilaa", meaning: "pointed", accept: ["having a point", "tapering to a tip"], example: { jp: "उसने नुकीले पत्थर से ज़मीन पर कुछ लिखा।", en: "He wrote something on the ground with a pointed stone." }, drill: { jp: "यह पत्थर बहुत नुकीला है", en: "This stone is very pointed" }, hint: "NU-KII-LAA — ⚠️ IT AGREES: नुकीला पत्थर, नुकीली सुई. The -ीला suffix of फुर्तीला and शर्मीला (unit 53), which is -आ underneath and therefore always agrees. Of a needle, a thorn or a knife's tip." },
        { id: "hi-u56l4-chubhnaa", type: "vocab", front: "चुभना", reading: "chubhnaa", meaning: "to prick", accept: ["prick", "to jab into the skin"], example: { jp: "जूते में एक काँटा था और वह पूरे दिन चुभता रहा।", en: "There was a thorn in the shoe and it kept pricking all day." }, drill: { jp: "पैर में कुछ चुभना अच्छा नहीं", en: "Having something prick your foot is not good" }, hint: "CHUBH-NAA, भ with a puff of air. It is INTRANSITIVE: the thorn चुभता है, you do not चुभना it — which is why the thing pricked takes को or में. Also of a remark that stings: बात चुभी." },
        { id: "hi-u56l4-kurkuraa", type: "vocab", front: "कुरकुरा", reading: "kurkuraa", meaning: "crisp", accept: ["crunchy", "crispy"], example: { jp: "तला हुआ खाना गरम रहे तो कुरकुरा रहता है।", en: "Fried food stays crisp if it stays hot." }, drill: { jp: "यह नमकीन बहुत कुरकुरा है", en: "This savoury snack is very crisp" }, hint: "KUR-KU-RAA — ⚠️ IT AGREES: कुरकुरा नमकीन, कुरकुरी रोटी. Like फुसफुसाना (l2), the word is built out of its own sound repeated. Of anything fried or roasted that makes a noise when it breaks." },
        { id: "hi-u56l4-baasii", type: "vocab", front: "बासी", reading: "baasii", meaning: "stale", accept: ["not fresh", "left over from before"], example: { jp: "कल की बासी रोटी सुबह चाय के साथ खा ली।", en: "Yesterday's stale flatbread was eaten with tea in the morning." }, drill: { jp: "कल की बासी रोटी अभी रखी है", en: "Yesterday's stale flatbread is still lying there" }, hint: "BAA-SII, INVARIANT — बासी रोटी AND बासी खाना, because -ी adjectives do not agree (unit 53). Of food kept from the day before, and also of news everyone has already heard: बासी खबर." },
      ],
    },
  ],
};
