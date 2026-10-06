// HI Unit 84 — शरीर के अंदर और बाहर ("The body, inside and out") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2. Conventions: unit1.js §1–§11, unit31.js §A1–§A8, then §B1–§B7 in
// unit74.js.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 1 (B1)"). lint's SCAFFOLD_TITLE_PATTERNS
// matches /^Vocabulary \d+ \(B1\)$/, so a Devanagari title is compulsory and the
// theme was entirely free to choose. It was chosen against **the single largest
// measured hole in the language: 0 of 20.**
//
// THE MEASUREMENT. The whole 1,440-card corpus taught FOURTEEN body words, all of
// them in A1 u20 शरीर और सेहत or A2 u35: शरीर, सिर, आँख, कान, नाक, मुँह, दाँत,
// पेट, हाथ, पैर, बाल, माथा, हड्डी, खून, नस. Those are the parts a child points at.
// NOT ONE of the next twenty existed — कंधा, घुटना, कोहनी, उँगली, त्वचा, गला,
// छाती, पीठ, कमर, जीभ, होंठ, ठुड्डी, गाल, भौंह, नाखून, एड़ी, कलाई, हथेली, जाँघ,
// फेफड़ा — which means a learner who had finished 83 units could not say that his
// back hurt, point to his own knee, or tell a doctor where it was sore. u77
// बीमारी और रोकथाम of this block gives him the illness; this unit gives him the
// place.
//
// ⚠️ THE ALLOCATION WAS FOLLOWED EXACTLY and all twenty of the words named in it
// are carded, plus four more to reach 24: **पसली, गुर्दा, कलेजा, अँगूठा** — one
// bone and two organs, which the corpus also lacked entirely, and the thumb,
// without which the finger lesson has five items.
//   NAMED FOR A LATER BLOCK, free and unspent: धड़कन, तलवा, बगल, कनपटी, नाभि,
//   पलक, मुट्ठी, पंजा.
//
// ⚠️ ONE GLOSS NARROWED, and it is the trap in this unit:
//   **जीभ "the tongue in the mouth"** — भाषा, a language (u4l?), **ACCEPTS
//   "tongue"**, so the one-word gloss would have made one typed answer right for
//   two cards. The long gloss is deliberate.
//   त्वचा is glossed "the skin" and that IS safe: चमड़ा (u40l3) is "leather" and
//   accepts "animal skin", which `normalizeMeaning` keeps distinct from "skin".
//   Checked, not assumed.
//
// 🚨 ONE SUBSTRING TRAP, AND IT IS A BAD ONE: **कमरा (u1l1, "a room") ⊃ कमर.**
// `isLetter` is /\p{L}/ only (src/store/cardRouting.js), so the final ा is \p{M}
// and does NOT block a `findWholeWord` match — the word for a ROOM contains the
// word for a WAIST. कमरा is one of the first nouns in the language and appears in
// A1 drills. Checked in both directions:
//   • no u1–u83 drill containing कमरा is this card's, so कमर's own cloze is safe;
//   • कमर's drill does not contain कमरा, and no drill in this unit does.
//   A later seat editing either card must re-run that check.
// THREE MORE CHECKED AND **NOT** FIRING, because the character beside them is a
// LETTER and not a mātrā:
//   • कलाई does NOT yield कला (u58l?, "art"): the ई after it is an INDEPENDENT
//     VOWEL LETTER, \p{L}, which blocks the match. This is the one case in the
//     block where the independent-vs-mātrā distinction decides it.
//   • अँगूठा is not अंगूठी (u40l?, "a ring") — different strings, and ँ is not ं.
//   • हथेली does not contain हाथ (u20l?): the base is ह+ा+थ and this word is
//     ह+थ+े, so the string breaks.
//
// GENDER TRAPS THIS UNIT ADDS (§4), and the body is where gender matters most,
// because you point at it and say "this one hurts":
//   ⚠️ FEMININE: ठुड्डी, भौंह, जीभ, छाती, पीठ, कमर, पसली, त्वचा, कोहनी, कलाई,
//   हथेली, उँगली, जाँघ, एड़ी. **FOURTEEN of the twenty-four, and भौंह, जीभ, पीठ,
//   कमर and जाँघ are CONSONANT-FINAL or odd-shaped**, so nothing tells you —
//   पीठ दुखती है, not दुखता; कमर टूट गई, not टूट गया. Those five are the ones a
//   learner will get wrong.
//   MASCULINE: गाल, होंठ, गला, कंधा, अँगूठा, नाखून, घुटना, फेफड़ा, गुर्दा, कलेजा.
//   **होंठ, नाखून and गाल are consonant-final masculine and their plural is the
//   bare form** — दो होंठ, दस नाखून, and Hindi says दोनों गाल.
//
// ⚠️ TWO NEAR-PAIRS AND ONE -ना NOUN:
//   • **घुटना is a NOUN that looks exactly like a verb infinitive** — the झरना
//     (u54l1) / भावना (u52l1) / प्रार्थना (u51l1) / बहाना (u57l2) / कल्पना (u57l4)
//     class, and the sixth one Hindi cards. There IS a verb घुटना, to be stifled,
//     and **this course teaches it nowhere** — checked with `npm run taught -- hi`,
//     not assumed. The card is the KNEE and its hint says so.
//   • गला galaa (the throat) against गाल gaal (a cheek). Three letters each, the
//     same three consonants, and §1's length-by-doubling is the ONLY thing keeping
//     the readings apart. Both hints say so; they are in different lessons.
//   • एड़ी erii against घड़ी gharii (u9l2) and सीढ़ी siirhii (u15l?). ड़ reads **r**
//     (§1c), so all three rhyme in the reading and differ in their first syllable.
// RETROFLEX/DENTAL (§1b): four RETROFLEX words and no collision. पीठ piith,
// ठुड्डी thuddii, होंठ honth and अँगूठा anguuthaa carry ट/ठ/ड with no dental पीथ /
// तुड्डी / होंत / अँगूता anywhere in the corpus; त्वचा tvachaa, दाँत-adjacent
// nothing, and कंधा kandhaa are DENTAL with no retroflex twin. The doubling hatch
// fires nowhere in this unit. ड़ READS r: एड़ी erii, फेफड़ा phephraa.
// GEMINATION: ठुड्डी thuddii doubles, as the spelling requires.
// ⚠️ ONE GAP THIS UNIT COULD NOT WORK AROUND AND IS NAMING: **दुखना, "to hurt", is
// taught NOWHERE in Hindi** — checked with `npm run taught -- hi`, not assumed. A
// unit of twenty-four body parts cannot say "my knee hurts" with a verb, so all
// four pain sentences here are built on दर्द होना (दर्द is u20l?), which is the
// commoner Hindi frame anyway — X में दर्द होता है. NAMED FOR A LATER BLOCK beside
// सूचना-class gaps: दुखना, छिलना, फटना, सूखना.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT84 = {
  id: "hi-u84",
  lang: "hi",
  title: "शरीर के अंदर और बाहर",
  order: 84,
  stage: "b1",
  lessons: [
    {
      id: "hi-u84l1",
      unit: 84,
      lesson: 1,
      title: "The head and the face",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name the cheek, the chin, the eyebrow, the lip, the tongue and the throat.",
      items: [
        { id: "hi-u84l1-gaal", type: "vocab", front: "गाल", reading: "gaal", meaning: "a cheek", accept: ["the side of the face", "cheeks"], example: { jp: "सर्दी में बच्चों के गाल लाल हो जाते हैं।", en: "In the cold the children's cheeks go red." }, drill: { jp: "सर्दी में बच्चों के गाल लाल होते हैं", en: "In the cold children's cheeks are red" }, hint: "GAAL, masculine, consonant-final, so the plural is the bare form: दोनों गाल. ⚠️ Read it against गला galaa, the throat (l1): the same three consonants, and §1's length-by-doubling is the only thing keeping the two readings apart. Plain ग." },
        { id: "hi-u84l1-thuddii", type: "vocab", front: "ठुड्डी", reading: "thuddii", meaning: "the chin", accept: ["the point of the jaw", "the bottom of the face"], example: { jp: "उसने ठुड्डी हाथ पर रखकर सोचा।", en: "He put his chin on his hand and thought." }, drill: { jp: "उसने ठुड्डी हाथ पर रखकर सोचा", en: "He put his chin on his hand and thought" }, hint: "THUD-DII — ⚠️ FEMININE. BOTH consonants are RETROFLEX: ठ is th with the tongue curled back and a puff, ड्ड is a doubled retroflex d. Say it with the tongue high and back throughout. Not माथा (unit 20), the forehead." },
        { id: "hi-u84l1-bhaunh", type: "vocab", front: "भौंह", reading: "bhaunh", meaning: "an eyebrow", accept: ["the hair above the eye", "eyebrows"], example: { jp: "उसने भौंह उठाई और कुछ नहीं कहा।", en: "He raised an eyebrow and said nothing." }, drill: { jp: "उसने भौंह उठाई और कुछ नहीं कहा", en: "He raised an eyebrow and said nothing" }, hint: "BHAUNH — ⚠️ FEMININE and CONSONANT-FINAL: भौंह उठाई, not उठाया. भ is bh with a puff of air, the au is औ's open vowel (unit 2), and the ं before ह is written **n** (§1). भौंह चढ़ाना is to frown." },
        { id: "hi-u84l1-honth", type: "vocab", front: "होंठ", reading: "honth", meaning: "a lip", accept: ["the edge of the mouth", "lips"], example: { jp: "सर्दी में होंठ खराब हो जाते हैं।", en: "In the cold the lips go bad." }, drill: { jp: "सर्दी में होंठ खराब हो जाते हैं", en: "In the cold the lips go bad" }, hint: "HONTH, masculine, consonant-final, so the plural is the bare form: दो होंठ. ⚠️ RETROFLEX ठ — tongue curled back, then a puff — against DENTAL थ, which would be a different letter. The ं before it is written n (§1). Not मुँह (unit 20), the whole mouth." },
        { id: "hi-u84l1-jiibh", type: "vocab", front: "जीभ", reading: "jiibh", meaning: "the tongue in the mouth", accept: ["the organ you taste with", "the thing that moves when you speak"], example: { jp: "गरम चाय से जीभ जल गई।", en: "The tongue got burnt by the hot tea." }, drill: { jp: "गरम चाय से जीभ जल गई", en: "The tongue got burnt by the hot tea" }, hint: "JIIBH — ⚠️ FEMININE and CONSONANT-FINAL: जीभ जल गई, not गया. भ is bh with a puff of air. ⚠️ Glossed 'the tongue IN THE MOUTH' because भाषा, a language (unit 4), **ACCEPTS 'tongue'** — the one-word gloss would have been right for two cards." },
        { id: "hi-u84l1-galaa", type: "vocab", front: "गला", reading: "galaa", meaning: "the throat", accept: ["the front of the neck", "where you swallow"], example: { jp: "सर्दी में उसका गला खराब हो गया।", en: "In the cold his throat went bad." }, drill: { jp: "सर्दी में उसका गला खराब हो गया", en: "In the cold his throat went bad" }, hint: "GA-LAA, masculine, regular -ा. ⚠️ Read it against गाल gaal, a cheek (l1): same consonants, and only the vowel length tells them apart. गला बैठ जाना is to lose your voice; गला दबाना is to throttle." },
      ],
    },
    {
      id: "hi-u84l2",
      unit: 84,
      lesson: 2,
      title: "The trunk of the body",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name the chest, the back, the waist, the shoulder, a rib and the skin.",
      items: [
        { id: "hi-u84l2-chhaatii", type: "vocab", front: "छाती", reading: "chhaatii", meaning: "the chest", accept: ["the front of the upper body", "the breast"], example: { jp: "दौड़ने के बाद उसकी छाती तेज़ चल रही थी।", en: "After running his chest was going fast." }, drill: { jp: "दौड़ने के बाद उसकी छाती तेज़ चली", en: "After running his chest went fast" }, hint: "CHHAA-TII — ⚠️ FEMININE. छ is ch with a puff of air; the त is DENTAL. ⚠️ छाती ठोकना, to beat the chest, is Hindi for boasting, and छाती पर पत्थर रखना is to bear something without showing it." },
        { id: "hi-u84l2-piith", type: "vocab", front: "पीठ", reading: "piith", meaning: "the back of the body", accept: ["the side the spine is on", "where a load is carried"], example: { jp: "खेत में काम करने से उसकी पीठ में दर्द होता है।", en: "Working in the field gives him pain in the back." }, drill: { jp: "काम करने से उसकी पीठ में दर्द है", en: "Working gives him pain in the back" }, hint: "PIITH — ⚠️ FEMININE and CONSONANT-FINAL, so nothing in the shape says so: पीठ दुखती है, not दुखता. RETROFLEX ठ. ⚠️ पीठ पीछे is 'behind one's back' and पीठ थपथपाना is to pat somebody on the back — the same two idioms English has." },
        { id: "hi-u84l2-kamar", type: "vocab", front: "कमर", reading: "kamar", meaning: "the waist", accept: ["the middle of the body", "the small of the back"], example: { jp: "भारी सामान उठाने से कमर में दर्द हुआ।", en: "Lifting the heavy load gave him pain in the waist." }, drill: { jp: "भारी सामान उठाने से कमर में दर्द हुआ", en: "Lifting the heavy load hurt his waist" }, hint: "KA-MAR — ⚠️ FEMININE and CONSONANT-FINAL: कमर टूट गई, not गया. 🚨 AND THE WORD FOR A ROOM CONTAINS IT: कमरा (unit 1) is this word plus ा, and a mātrā does not block a whole-word match — so no sentence on this card uses कमरा, and none of कमरा's uses this. कमर कसना is to gird yourself for something." },
        { id: "hi-u84l2-kandhaa", type: "vocab", front: "कंधा", reading: "kandhaa", meaning: "a shoulder", accept: ["the top of the arm where it joins", "shoulders"], example: { jp: "उसने बच्चे को कंधे पर बैठाया।", en: "He seated the child on his shoulder." }, drill: { jp: "इस काम में कंधा लगाना पड़ता है", en: "This job needs a shoulder put to it" }, hint: "KAN-DHAA, masculine, regular -ा, DENTAL ध with a puff of air. The ं before it is written n (§1). ⚠️ The oblique is कंधे, which the example uses: a postposition forces it (unit 23's paradigm). कंधा देना is to carry a bier — a heavy phrase, used carefully." },
        { id: "hi-u84l2-paslii", type: "vocab", front: "पसली", reading: "paslii", meaning: "a rib", accept: ["one of the bones round the chest", "ribs"], example: { jp: "गिरने से उसकी एक पसली टूट गई।", en: "One of his ribs broke in the fall." }, drill: { jp: "गिरने से उसकी एक पसली टूट गई", en: "One of his ribs broke in the fall" }, hint: "PAS-LII — ⚠️ FEMININE. The medial inherent a is not said (§1): paslii, not pasalii. ⚠️ Not हड्डी (unit 35), which is 'a bone' and accepts 'one of the bones' — a पसली is the particular one, and it is the bone a Hindi speaker names most often after हड्डी itself." },
        { id: "hi-u84l2-tvachaa", type: "vocab", front: "त्वचा", reading: "tvachaa", meaning: "the skin of the body", accept: ["the living covering of a person", "what a cream is put on"], example: { jp: "धूप से त्वचा काली पड़ जाती है।", en: "The skin darkens in the sun." }, drill: { jp: "धूप से त्वचा काली पड़ जाती है", en: "The skin darkens in the sun" }, hint: "TVA-CHAA — ⚠️ FEMININE despite looking like a -ा masculine, the आपदा class (unit 75). It opens with the त्व conjunct — DENTAL त and व stacked, said in one breath. ⚠️ Glossed 'the skin OF THE BODY' for two reasons: चमड़ा (unit 40) accepts 'animal skin', and छीलना (unit 36), to peel, ACCEPTS 'to skin', which `normalizeMeaning` folds to the same string as 'the skin'. त्वचा is living skin and the word a doctor uses." },
      ],
    },
    {
      id: "hi-u84l3",
      unit: 84,
      lesson: 3,
      title: "From the elbow to the nail",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name the elbow, the wrist, the palm, a finger, the thumb and a nail.",
      items: [
        { id: "hi-u84l3-kohnii", type: "vocab", front: "कोहनी", reading: "kohnii", meaning: "an elbow", accept: ["the middle joint of the arm", "elbows"], example: { jp: "मेज़ पर कोहनी रखकर बैठना ठीक नहीं।", en: "Sitting with your elbows on the table is not right." }, drill: { jp: "मेज़ पर कोहनी रखकर बैठना ठीक नहीं", en: "Sitting with elbows on the table is not right" }, hint: "KOH-NII — ⚠️ FEMININE. Say the ह: koh-nii, not ko-nii. The medial inherent a is not said (§1). Hindi counts the हाथ (unit 20) as the whole arm, so the elbow needed its own word." },
        { id: "hi-u84l3-kalaaii", type: "vocab", front: "कलाई", reading: "kalaaii", meaning: "the wrist", accept: ["the joint between hand and arm", "where a watch sits"], example: { jp: "उसने कलाई पर नई घड़ी बाँधी।", en: "He fastened a new watch on his wrist." }, drill: { jp: "उसने कलाई पर नई घड़ी बाँधी", en: "He fastened a new watch on his wrist" }, hint: "KA-LAA-II — ⚠️ FEMININE, like every -आई noun (unit 81's rule). ⚠️ It CONTAINS the letters of कला, art (unit 58), and the match CANNOT fire: the ई after it is an INDEPENDENT VOWEL LETTER, \\p{L}, which blocks a whole-word match where a mātrā would not. The one case in this block where that distinction decides it." },
        { id: "hi-u84l3-hathelii", type: "vocab", front: "हथेली", reading: "hathelii", meaning: "the palm of the hand", accept: ["the inside of the hand", "where you hold coins"], example: { jp: "उसने हथेली खोलकर पैसे दिखाए।", en: "He opened his palm and showed the money." }, drill: { jp: "उसने हथेली खोलकर पैसे दिखाए", en: "He opened his palm and showed the money" }, hint: "HA-THE-LII — ⚠️ FEMININE. DENTAL थ. ⚠️ It does NOT contain हाथ (unit 20): that front is ह+ा+थ and this word is ह+थ+े, so the string breaks — checked mechanically. हथेली पर सरसों उगाना, 'to grow mustard on your palm', is Hindi for expecting the impossible overnight." },
        { id: "hi-u84l3-unglii", type: "vocab", front: "उँगली", reading: "unglii", meaning: "a finger", accept: ["one of the digits of the hand", "fingers"], example: { jp: "उसने उँगली से रास्ता दिखाया।", en: "He pointed out the way with his finger." }, drill: { jp: "उसने उँगली से रास्ता दिखाया", en: "He pointed out the way with his finger" }, hint: "UN-GLII — ⚠️ FEMININE. The ँ is written **n** (§1) and the medial inherent a is not said: unglii, not ungalii. ⚠️ उँगली उठाना, to raise a finger, means to accuse somebody — not to volunteer. The toes are पैर की उँगली, with no separate word." },
        { id: "hi-u84l3-anguuthaa", type: "vocab", front: "अँगूठा", reading: "anguuthaa", meaning: "the thumb", accept: ["the short thick digit", "what an illiterate man signs with"], example: { jp: "अनपढ़ लोग दस्तावेज़ पर अँगूठा लगाते हैं।", en: "Unlettered people put a thumbprint on a document." }, drill: { jp: "अनपढ़ लोग दस्तावेज़ पर अँगूठा लगाते हैं", en: "Unlettered people put a thumbprint on a document" }, hint: "AN-GUU-THAA, masculine, regular -ा, RETROFLEX ठ and the ँ written n (§1). ⚠️ Read it against अंगूठी, a ring (unit 40) — the same root, a different word, and ँ is not ं. अँगूठा लगाना is the Indian signature for somebody who cannot write, which is why the example pairs it with अनपढ़ (unit 81)." },
        { id: "hi-u84l3-naakhuun", type: "vocab", front: "नाखून", reading: "naakhuun", meaning: "a nail on the finger", accept: ["a fingernail or toenail", "nails"], example: { jp: "बच्चों के नाखून हर हफ़्ते काटने पड़ते हैं।", en: "Children's nails have to be cut every week." }, drill: { jp: "बच्चों के नाखून हर हफ़्ते काटने पड़ते हैं", en: "Children's nails have to be cut every week" }, hint: "NAA-KHUUN, masculine, consonant-final, so the plural is the bare form: दस नाखून. Plain ख — unit 1 §7 keeps ख़ uncarded — and a long uu. Not कील (unit 60), which is a nail you hammer: that one is feminine and made of iron." },
      ],
    },
    {
      id: "hi-u84l4",
      unit: 84,
      lesson: 4,
      title: "Below the knee, and inside",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Name the knee, the thigh and the heel — and the lung, the kidney and the liver.",
      items: [
        { id: "hi-u84l4-ghutnaa", type: "vocab", front: "घुटना", reading: "ghutnaa", meaning: "a knee", accept: ["the joint in the middle of the leg", "knees"], example: { jp: "बुज़ुर्गों के घुटनों में सर्दी में दर्द होता है।", en: "Old people get pain in the knees in the cold." }, drill: { jp: "सर्दी में उसका घुटना ठीक नहीं रहता", en: "In the cold his knee is not right" }, hint: "GHUT-NAA, masculine, RETROFLEX ट, घ with a puff of air. ⚠️ **IT LOOKS EXACTLY LIKE A VERB INFINITIVE AND IS A NOUN** — the झरना / भावना / प्रार्थना / बहाना / कल्पना class, and the sixth one Hindi cards. There IS a verb घुटना, to be stifled, and **this course teaches it nowhere**. The oblique plural is घुटने, which the example uses." },
        { id: "hi-u84l4-jaangh", type: "vocab", front: "जाँघ", reading: "jaangh", meaning: "the thigh", accept: ["the upper part of the leg", "thighs"], example: { jp: "घोड़े से गिरकर उसकी जाँघ पर चोट लगी।", en: "He fell off the horse and hurt his thigh." }, drill: { jp: "घोड़े से गिरकर उसकी जाँघ पर चोट लगी", en: "He fell off the horse and hurt his thigh" }, hint: "JAANGH — ⚠️ FEMININE and CONSONANT-FINAL: जाँघ दुखती है, not दुखता. The ँ is written n (§1) and the घ is gh with a puff of air. Hindi counts the पैर (unit 20) as the whole leg AND the foot, so the thigh needed naming separately." },
        { id: "hi-u84l4-erii", type: "vocab", front: "एड़ी", reading: "erii", meaning: "the heel", accept: ["the back of the foot", "heels"], example: { jp: "नए जूते से उसकी एड़ी में दर्द हुआ।", en: "The new shoe gave him pain in the heel." }, drill: { jp: "नए जूते से उसकी एड़ी में दर्द हुआ", en: "The new shoe gave him pain in the heel" }, hint: "E-RII — ⚠️ FEMININE. ड़ reads **r** (§1c), so erii — which rhymes with घड़ी gharii (unit 9) and सीढ़ी siirhii (unit 15) and differs in the first syllable. एड़ी उठाकर चलना is to walk on tiptoe." },
        { id: "hi-u84l4-phephraa", type: "vocab", front: "फेफड़ा", reading: "phephraa", meaning: "a lung", accept: ["the organ you breathe with", "lungs"], example: { jp: "धूम्रपान से फेफड़े खराब होते हैं।", en: "Smoking ruins the lungs." }, drill: { jp: "धूम्रपान से फेफड़ा खराब होता है", en: "Smoking ruins the lung" }, hint: "PHE-PHRAA, masculine, regular -ा. BOTH letters are फ — ph, one puff of air, not f — and ड़ reads **r** (§1c). The oblique plural is फेफड़े, which the example uses. Hindi usually says it in the plural, like English." },
        { id: "hi-u84l4-gurdaa", type: "vocab", front: "गुर्दा", reading: "gurdaa", meaning: "a kidney", accept: ["the organ that cleans the blood", "kidneys"], example: { jp: "कम पानी पीने से गुर्दे पर असर पड़ता है।", en: "Drinking too little water affects the kidneys." }, drill: { jp: "कम पानी से गुर्दा खराब होता है", en: "Too little water ruins the kidney" }, hint: "GUR-DAA, masculine, regular -ा, DENTAL द. The र् is र with a halant, drawn as the hook over the द. Plain ग. The oblique plural is गुर्दे. The formal word is वृक्क, which nobody says and this course does not card." },
        { id: "hi-u84l4-kalejaa", type: "vocab", front: "कलेजा", reading: "kalejaa", meaning: "the liver", accept: ["the organ under the right ribs", "what alcohol damages"], example: { jp: "शराब से कलेजा खराब होता है।", en: "Liquor ruins the liver." }, drill: { jp: "शराब से कलेजा खराब होता है", en: "Liquor ruins the liver" }, hint: "KA-LE-JAA, masculine, regular -ा. ⚠️ In Hindi the कलेजा is also the seat of courage and of grief, where English uses the heart: कलेजा फट गया is 'his heart broke', and कलेजे का टुकड़ा is what you call a beloved child. The medical word जिगर is not carded." },
      ],
    },
  ],
};
