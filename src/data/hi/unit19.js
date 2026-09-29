// HI Unit 19 — कैसा और कितना ("What kind and how much") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot kept, retitled in Devanagari. Block 1 taught sixteen adjectives already
// (बड़ा, छोटा, नया, पुराना, ठीक, अच्छा, सस्ता, मुश्किल, शुद्ध, खुश, जवान, बूढ़ा,
// अकेला, बहुत, ज़्यादा, थोड़ा), so this unit is not "adjectives" in general — it is
// the PHYSICAL ones a learner needs to pick a thing out of a shop: size, weight,
// texture, and the words for same, different and genuine.
//
// §6: EVERY ADJECTIVE IS HEADWORDED MASCULINE SINGULAR AND NEVER PAIRED WITH ITS
// FEMININE. No बड़ा/बड़ी twins anywhere here. Feminine and plural forms appear only
// inside examples, which is where a learner should meet them first.
//
// ⚠️ EVERY ADJECTIVE DRILL CARRIES THE MASCULINE FORM, DELIBERATELY. The router
// matches the front as an exact string, so a drill written "यह कमीज़ बहुत हल्की है"
// contains no हल्का and the card silently loses cloze and sentence:build. Three
// drafts in this block hit exactly that (मोटा, ऊँचा, हल्का) and were caught by
// running the REAL router rather than lint, whose .includes() check is not the same
// test. So: example shows agreement, drill shows the headword.
//
// THE TWO ADJECTIVE CLASSES, sorted for this unit's twelve:
//   -ा, AGREES        लंबा · चौड़ा · पतला · मोटा · ऊँचा · हल्का · कड़ा · ऐसा · पूरा
//   NEVER CHANGES     गोल · सुंदर · नरम · बराबर · अलग · साधारण · मुख्य
//   -ी BUT FIXED      भारी · असली · ज़रूरी · खाली — already derived, so no agreement
export const HI_UNIT19 = {
  id: "hi-u19",
  lang: "hi",
  title: "कैसा और कितना",
  order: 19,
  stage: "a1",
  lessons: [
    {
      id: "hi-u19l1",
      unit: 19,
      lesson: 1,
      title: "Size and shape",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe how tall, wide, thick or round a thing is.",
      items: [
        { id: "hi-u19l1-lambaa", type: "vocab", front: "लंबा", reading: "lambaa", meaning: "tall", accept: ["long", "lengthy", "extended"], example: { jp: "यह रास्ता बहुत लंबा है।", en: "This road is very long." }, drill: { jp: "मेरा भाई बहुत लंबा है", en: "My brother is very tall" }, hint: "LAM-BAA, masculine — लंबी, लंबे. Tall of a PERSON and long of a THING, both: लंबा आदमी, लंबा रास्ता. The ं before ब is the LABIAL nasal, so it reads m, not n." },
        { id: "hi-u19l1-chauraa", type: "vocab", front: "चौड़ा", reading: "chauraa", meaning: "wide", accept: ["broad", "spacious"], example: { jp: "यह सड़क बहुत चौड़ी है।", en: "This road is very wide." }, drill: { jp: "इस घर का आँगन चौड़ा है", en: "This house's courtyard is wide" }, hint: "CHAU-RAA, masculine — चौड़ी, चौड़े, with ड़ and औ as one glide. चौड़ाई is 'width'. The example shows the feminine, agreeing with सड़क." },
        { id: "hi-u19l1-patlaa", type: "vocab", front: "पतला", reading: "patlaa", meaning: "thin", accept: ["slim", "slender", "watery"], example: { jp: "यह दाल बहुत पतली है।", en: "This lentil soup is very watery." }, drill: { jp: "यह कपड़ा बहुत पतला है", en: "This cloth is very thin" }, hint: "PAT-LAA, masculine — पतली, पतले, with DENTAL त. Thin of a person or a thing, and WATERY of a liquid: पतली दाल is runny lentils. Its opposite is मोटा." },
        { id: "hi-u19l1-motaa", type: "vocab", front: "मोटा", reading: "motaa", meaning: "thick", accept: ["fat", "stout", "coarse"], example: { jp: "यह किताब बहुत मोटी है।", en: "This book is very thick." }, drill: { jp: "इस अलमारी का दरवाज़ा मोटा है", en: "This cupboard's door is thick" }, hint: "MO-TAA, masculine — मोटी, मोटे, with RETROFLEX ट. Thick of an object and FAT of a person, so use it about people with care. मोटी किताब is a fat book." },
        { id: "hi-u19l1-gol", type: "vocab", front: "गोल", reading: "gol", meaning: "round", accept: ["circular", "spherical"], example: { jp: "यह मेज़ गोल है।", en: "This table is round." }, drill: { jp: "इस बगीचे में एक गोल मैदान है", en: "There is a round open space in this garden" }, hint: "GOL, consonant-final, so it never changes: गोल मेज़, गोल डिब्बा. Round and spherical both. Delhi's गोल मार्केट is named for exactly this shape." },
        { id: "hi-u19l1-uunchaa", type: "vocab", front: "ऊँचा", reading: "uunchaa", meaning: "high", accept: ["tall", "lofty", "elevated"], example: { jp: "यह दीवार बहुत ऊँची है।", en: "This wall is very high." }, drill: { jp: "यह पेड़ बहुत ऊँचा है", en: "This tree is very tall" }, hint: "UUN-CHAA, masculine — ऊँची, ऊँचे, and the ँ nasalises the ऊ. High up: a wall, a tree, a mountain. ⚠️ For a PERSON's height Hindi uses लंबा, not ऊँचा." },
      ],
    },
    {
      id: "hi-u19l2",
      unit: 19,
      lesson: 2,
      title: "Weight and feel",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say whether a thing is beautiful, heavy, soft or empty.",
      items: [
        { id: "hi-u19l2-sundar", type: "vocab", front: "सुंदर", reading: "sundar", meaning: "beautiful", accept: ["pretty", "handsome", "lovely"], example: { jp: "यह बगीचा बहुत सुंदर है।", en: "This garden is very beautiful." }, drill: { jp: "इस गाँव की नदी सुंदर है", en: "This village's river is beautiful" }, hint: "SUN-DAR — consonant-final, so it never changes: सुंदर लड़का, सुंदर लड़की, identical. It works for people, places and objects alike. सुंदरता is 'beauty'." },
        { id: "hi-u19l2-bhaarii", type: "vocab", front: "भारी", reading: "bhaarii", meaning: "heavy", accept: ["weighty", "burdensome", "serious"], example: { jp: "यह डिब्बा बहुत भारी है।", en: "This box is very heavy." }, drill: { jp: "मेरा थैला बहुत भारी है", en: "My sack is very heavy" }, hint: "BHAA-RII — it ends in -ी and does NOT change, like गुलाबी: भारी बैग, भारी किताब. ⚠️ Read it against भारत bhaarat (India, unit 4) and भरना bharnaa (to fill, unit 18): three words, three different middles." },
        { id: "hi-u19l2-halkaa", type: "vocab", front: "हल्का", reading: "halkaa", meaning: "light in weight", accept: ["lightweight", "faint", "mild"], example: { jp: "यह तकिया बहुत हल्का है।", en: "This pillow is very light." }, drill: { jp: "यह डिब्बा हल्का और छोटा है", en: "This box is light and small" }, hint: "HAL-KAA, masculine — हल्की, हल्के. Light in WEIGHT, and also faint of a colour or mild of a fever: हल्का बुखार. So it is the opposite of भारी and of गहरा both, depending on what you are describing. ल्क is ल glued onto क." },
        { id: "hi-u19l2-naram", type: "vocab", front: "नरम", reading: "naram", meaning: "soft", accept: ["tender", "gentle", "supple"], example: { jp: "यह बिस्तर बहुत नरम है।", en: "This bed is very soft." }, drill: { jp: "यह रोटी बहुत नरम है", en: "This flatbread is very soft" }, hint: "NA-RAM, consonant-final, never changes. Soft to the touch and gentle of a manner: नरम आदमी, a mild man. नरमी is 'softness' and also 'leniency'." },
        { id: "hi-u19l2-karaa", type: "vocab", front: "कड़ा", reading: "karaa", meaning: "stiff", accept: ["firm", "rigid", "hard to the touch"], example: { jp: "यह रोटी बहुत कड़ी है।", en: "This flatbread is very stiff." }, drill: { jp: "यह कपड़ा बहुत कड़ा है", en: "This cloth is very stiff" }, hint: "KA-RAA, masculine — कड़ी, कड़े, with ड़. Stiff or rigid to the touch. ⚠️ For 'hard' meaning DIFFICULT Hindi uses मुश्किल (unit 6), never कड़ा. And do not read it as करना karnaa (to do)." },
        { id: "hi-u19l2-khaalii", type: "vocab", front: "खाली", reading: "khaalii", meaning: "empty", accept: ["vacant", "blank", "unoccupied"], example: { jp: "यह बोतल खाली है।", en: "This bottle is empty." }, drill: { jp: "इस कमरे की अलमारी खाली है", en: "This room's cupboard is empty" }, hint: "KHAA-LII — ends in -ी and does not change: खाली बोतल, खाली कमरा. Empty, and also 'free' of TIME: मैं आज खाली हूँ, I'm free today. ⚠️ One letter from खाना khaanaa (to eat, unit 12)." },
      ],
    },
    {
      id: "hi-u19l3",
      unit: 19,
      lesson: 3,
      title: "Same, different, genuine",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that two things are the same or different, and that something is genuine or necessary.",
      items: [
        { id: "hi-u19l3-baraabar", type: "vocab", front: "बराबर", reading: "baraabar", meaning: "equal", accept: ["level", "the same", "alike"], example: { jp: "ये दो कमरे बराबर हैं।", en: "These two rooms are equal." }, drill: { jp: "इन दोनों की कीमत बराबर है", en: "The price of these two is the same" }, hint: "BA-RAA-BAR, consonant-final, never changes. Equal and level, and as an adverb 'steadily': बराबर काम करना, to work without a break. बराबरी is 'equality'." },
        { id: "hi-u19l3-alag", type: "vocab", front: "अलग", reading: "alag", meaning: "different", accept: ["separate", "apart", "distinct"], example: { jp: "यह रंग बहुत अलग है।", en: "This colour is very different." }, drill: { jp: "इन दोनों का स्वाद अलग है", en: "The flavour of these two is different" }, hint: "A-LAG, unchanging. Different, and also separate: अलग करना is 'to separate'. Doubled as अलग-अलग it means 'each one separately' — Hindi doubles words for emphasis constantly." },
        { id: "hi-u19l3-aslii", type: "vocab", front: "असली", reading: "aslii", meaning: "genuine", accept: ["real", "authentic", "original"], example: { jp: "यह साड़ी असली है।", en: "This sari is genuine." }, drill: { jp: "इस दुकान का सामान असली है", en: "This shop's goods are genuine" }, hint: "AS-LII — from असल, the root or origin, so 'genuine'. It ends in -ी and does not change. Its opposite नकली (fake) is the word you will actually reach for in a market." },
        { id: "hi-u19l3-zaruurii", type: "vocab", front: "ज़रूरी", reading: "zaruurii", meaning: "important", accept: ["necessary", "essential", "required"], example: { jp: "यह काम बहुत ज़रूरी है।", en: "This job is very important." }, drill: { jp: "इस त्योहार पर छुट्टी ज़रूरी है", en: "A holiday is necessary at this festival" }, hint: "ZA-RUU-RII, with ज़ — a z. Necessary and important both, and it does not change form. ज़रूरत is the noun, 'a need': मुझे ज़रूरत है." },
        { id: "hi-u19l3-aisaa", type: "vocab", front: "ऐसा", reading: "aisaa", meaning: "like this", accept: ["such", "this kind", "of this sort"], example: { jp: "मुझे ऐसा कपड़ा अच्छा लगता है।", en: "I like cloth like this." }, drill: { jp: "ऐसा काम बहुत मुश्किल है", en: "Work like this is very difficult" }, hint: "AI-SAA, masculine — ऐसी, ऐसे. 'Of this kind', so ऐसा कपड़ा is 'cloth like this'. वैसा is the same thing for 'like that'. ⚠️ Read it against पैसा paisaa (money, unit 18): one letter apart." },
        { id: "hi-u19l3-saadhaaran", type: "vocab", front: "साधारण", reading: "saadhaaran", meaning: "ordinary", accept: ["common", "plain", "average"], example: { jp: "यह एक साधारण दिन है।", en: "This is an ordinary day." }, drill: { jp: "यह कमरा बहुत साधारण है", en: "This room is very ordinary" }, hint: "SAA-DHAA-RAN, consonant-final and unchanging — a Sanskrit word, which is why it runs long. The final ण is the RETROFLEX n: curl the tongue back. असाधारण, with the अ- prefix, means 'extraordinary'." },
      ],
    },
    {
      id: "hi-u19l4",
      unit: 19,
      lesson: 4,
      title: "Parts and wholes",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about a kind of thing, a part of it, a total and a matching pair.",
      items: [
        { id: "hi-u19l4-tarah", type: "vocab", front: "तरह", reading: "tarah", meaning: "a kind", accept: ["a sort", "a type", "a manner"], example: { jp: "इस तरह का काम मुश्किल है।", en: "This kind of work is difficult." }, drill: { jp: "इस तरह का कपड़ा महँगा है", en: "This kind of cloth is expensive" }, hint: "TA-RAH, feminine. A kind or sort, and also a manner: इस तरह means 'in this way'. की तरह means 'like': मेरी तरह, like me. Very high frequency — learn the frames, not just the word." },
        { id: "hi-u19l4-hissaa", type: "vocab", front: "हिस्सा", reading: "hissaa", meaning: "a part", accept: ["a share", "a portion", "a piece"], example: { jp: "यह मेरा हिस्सा है।", en: "This is my share." }, drill: { jp: "इस शहर का यह हिस्सा शांत है", en: "This part of the city is quiet" }, hint: "HIS-SAA, masculine, plural हिस्से — with a doubled स, so hold it. A part and also a share: हिस्सा लेना is 'to take part'. ⚠️ Read it against हिसाब hisaab (a bill, unit 18)." },
        { id: "hi-u19l4-kul", type: "vocab", front: "कुल", reading: "kul", meaning: "a total", accept: ["altogether", "the sum", "in all"], example: { jp: "इस काम का कुल समय दो घंटे है।", en: "The total time for this job is two hours." }, drill: { jp: "इस दुकान में कुल दस ग्राहक हैं", en: "There are ten customers in this shop altogether" }, hint: "KUL, masculine — the total, and as an adverb 'in all': कुल दस, ten in all. ⚠️ Do not read it as the कूल inside स्कूल skuul (a school): different vowel length, different word." },
        { id: "hi-u19l4-mukhya", type: "vocab", front: "मुख्य", reading: "mukhya", meaning: "main", accept: ["chief", "principal", "central"], example: { jp: "यह इस शहर का मुख्य बाज़ार है।", en: "This is the city's main market." }, drill: { jp: "यह मुख्य रास्ता बहुत चौड़ा है", en: "This main road is very wide" }, hint: "MUKH-YA, unchanging — from मुख, the face or mouth, so 'the one at the front'. ख्य is ख glued onto य. मुख्यमंत्री is a Chief Minister, a phrase in every Indian newspaper." },
        { id: "hi-u19l4-puuraa", type: "vocab", front: "पूरा", reading: "puuraa", meaning: "whole", accept: ["complete", "entire", "full"], example: { jp: "मैं पूरा दिन काम करता हूँ।", en: "I work the whole day." }, drill: { jp: "यह पूरा शहर बहुत साफ़ है", en: "This whole city is very clean" }, hint: "PUU-RAA, masculine — पूरी, पूरे. Whole and complete: पूरा दिन, the whole day. ⚠️ Read it against पुराना puraanaa (old, unit 4): पूरा has a long ū and two beats, पुराना a short u and three." },
        { id: "hi-u19l4-joraa", type: "vocab", front: "जोड़ा", reading: "joraa", meaning: "a matching pair", accept: ["a pair", "a couple", "a set of two"], example: { jp: "यह जूतों का जोड़ा महँगा है।", en: "This pair of shoes is expensive." }, drill: { jp: "मुझे जूतों का एक जोड़ा लेना है", en: "I have to take a pair of shoes" }, hint: "JO-RAA, masculine, with ड़. A MATCHING pair — of shoes, of socks, of oxen. Not the same as दोनों (both, unit 10), which points at two things already named. जोड़ना is 'to join'." },
      ],
    },
  ],
};
