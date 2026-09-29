// HI Unit 16 — रंग और मौसम ("Colours and weather") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Slot kept, retitled in Devanagari. Block 1 taught ZERO colour words, so all
// twelve here are new ground; weather had only चाँद and ऋतु to build on.
//
// TWO ADJECTIVE CLASSES, AND THIS UNIT IS WHERE THE LEARNER FIRST MEETS BOTH SIDE
// BY SIDE, which is why every hint names which class its word is in:
//   -ा CLASS, AGREES     काला/काली/काले · हरा · नीला · पीला · भूरा · फीका · गहरा ·
//                        ठंडा
//   CONSONANT-FINAL, NEVER CHANGES     लाल · सफ़ेद · गरम · गुलाबी · नारंगी
// गुलाबी and नारंगी end in -ी and still do not change, because they are already
// derived from a noun (गुलाब, नारंगी) — the one wrinkle worth naming.
// §6 headwords every adjective in the MASCULINE SINGULAR and forbids carding both
// बड़ा and बड़ी; the feminine appears only inside examples, never as a second front.
//
// ⚠️ गरमी IS DELIBERATELY NOT CARDED. गरम (hot) is here in l3, and गरमी (heat /
// the hot season) is the abstract noun built straight off it. Two cards would be
// two mastery tracks for one root — the thing §6 bans for बड़ा/बड़ी. l4 teaches
// वसंत (spring) instead, which is a separate lexeme and the ऋतु Indian poetry
// actually names. A2 may take गरमी once it has a reason to.
//
// ⚠️ हल्का IS NOT HERE EITHER. It means light-in-WEIGHT and light-in-COLOUR, and
// the front can only be carded once. It goes to u19l2 with the other physical
// adjectives, where its core sense lives; this unit uses फीका for a pale shade.
//
// ⚠️ आज IS CARDED IN l3, AND IT IS A HOLE BLOCK 1 LEFT, NOT A THEME GRAB. Block 1
// USES आज in an example as early as u1l2 ("आज काम कम है") under the §8 script-band
// exemption, and then never cards it — so the corpus reached u15 with a learner who
// had met "today" four times and could not produce it. It belongs to the weather
// lesson because that is the first unit whose sentences genuinely cannot be written
// without it (आज मौसम अच्छा है), and scope is measured per UNIT, so a u17 card would
// have made eight u15–u16 sentences forward-referencing. Measured against
// `node scripts/scope-hi.mjs`, which flagged exactly those eight. तूफ़ान (a storm)
// was dropped to make room — the least A1-essential word in the slot.
// ✅ AND तूफ़ान IS NOT LOST: block 3 teaches it in unit21.js lesson 4, beside the
// sky and the sea. This paragraph read as though the word were untaught in the
// language until 2026-09-28; it is not.
export const HI_UNIT16 = {
  id: "hi-u16",
  lang: "hi",
  title: "रंग और मौसम",
  order: 16,
  stage: "a1",
  lessons: [
    {
      id: "hi-u16l1",
      unit: 16,
      lesson: 1,
      title: "The first colours",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the basic colours and say what colour a thing is.",
      items: [
        { id: "hi-u16l1-rang", type: "vocab", front: "रंग", reading: "rang", meaning: "a colour", accept: ["colour", "paint", "dye"], example: { jp: "इस दीवार का रंग अच्छा है।", en: "This wall's colour is good." }, drill: { jp: "इस गाड़ी का रंग बहुत अच्छा है", en: "This car's colour is very good" }, hint: "RANG, masculine — the colour, and also the paint or dye itself: रंग लगाना is to paint. The ं before ग is the matching velar nasal, hummed at the back of the mouth. होली is the festival of रंग." },
        { id: "hi-u16l1-laal", type: "vocab", front: "लाल", reading: "laal", meaning: "red", accept: ["scarlet", "crimson"], example: { jp: "यह टमाटर लाल है।", en: "This tomato is red." }, drill: { jp: "इस बगीचे में लाल फल हैं", en: "There is red fruit in this garden" }, hint: "LAAL never changes form: लाल कमरा, लाल चादर, लाल पेड़, all identical. Every consonant-final adjective behaves this way, and it is the easier of the two classes. लाल also means 'dear child' in older poetry." },
        { id: "hi-u16l1-kaalaa", type: "vocab", front: "काला", reading: "kaalaa", meaning: "black", accept: ["dark", "jet black"], example: { jp: "यह ताला काला है।", en: "This lock is black." }, drill: { jp: "मेरा बैग काला है", en: "My bag is black" }, hint: "KAA-LAA, masculine — काली before a feminine noun, काले in the plural. This is the -ा class that DOES agree, the opposite of लाल. Careful with कल kal (yesterday/tomorrow): one mātrā shorter and a different word entirely." },
        { id: "hi-u16l1-safed", type: "vocab", front: "सफ़ेद", reading: "safed", meaning: "white", accept: ["pale white", "snow white"], example: { jp: "यह चादर सफ़ेद है।", en: "This sheet is white." }, drill: { jp: "इस कमरे की दीवार सफ़ेद है", en: "This room's wall is white" }, hint: "SA-FED, with फ़ — an f, not a ph — and it never changes form. It is Persian in origin, which is why it sits outside the -ा pattern. Do not mix it up with साफ़ saaf (clean): both carry फ़ and they are unrelated." },
        { id: "hi-u16l1-haraa", type: "vocab", front: "हरा", reading: "haraa", meaning: "green", accept: ["verdant", "fresh green"], example: { jp: "यह पेड़ बहुत हरा है।", en: "This tree is very green." }, drill: { jp: "इस खेत का रंग हरा है", en: "This field's colour is green" }, hint: "HA-RAA, masculine — हरी, हरे for the rest. It also means 'fresh' of vegetables: हरी सब्ज़ी is greens. Two letters plus one mātrā, the shortest colour word you will meet." },
        { id: "hi-u16l1-niilaa", type: "vocab", front: "नीला", reading: "niilaa", meaning: "blue", accept: ["dark blue", "navy"], example: { jp: "यह तौलिया नीला है।", en: "This towel is blue." }, drill: { jp: "इस दुकान में नीला तौलिया है", en: "There is a blue towel in this shop" }, hint: "NII-LAA, masculine — नीली, नीले. The blue of the sky and of indigo, which is नील. ⚠️ Read it against पीला piilaa (yellow, next lesson) and पीना piinaa (to drink, unit 12): three words, one letter apart each time." },
      ],
    },
    {
      id: "hi-u16l2",
      unit: 16,
      lesson: 2,
      title: "More colours, and shades",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name more colours and say whether a shade is pale or deep.",
      items: [
        { id: "hi-u16l2-piilaa", type: "vocab", front: "पीला", reading: "piilaa", meaning: "yellow", accept: ["golden yellow", "amber"], example: { jp: "यह केला पीला है।", en: "This banana is yellow." }, drill: { jp: "मेरा तकिया पीला है", en: "My pillow is yellow" }, hint: "PII-LAA, masculine — पीली, पीले. ⚠️ THE THREE-WAY TRAP: पीला piilaa (yellow), नीला niilaa (blue), पीना piinaa (to drink). Each differs from the next by exactly one letter, so read all the way to the end." },
        { id: "hi-u16l2-bhuuraa", type: "vocab", front: "भूरा", reading: "bhuuraa", meaning: "brown", accept: ["tan", "dun"], example: { jp: "यह अलमारी भूरी है।", en: "This cupboard is brown." }, drill: { jp: "इस पेड़ का रंग भूरा है", en: "This tree's colour is brown" }, hint: "BHUU-RAA, masculine — भूरी, भूरे, and the example above shows the feminine in use. From भू, the earth, so it is literally 'earth-coloured'. In some regions it also does duty for grey hair." },
        { id: "hi-u16l2-gulaabii", type: "vocab", front: "गुलाबी", reading: "gulaabii", meaning: "pink", accept: ["rose pink", "rosy"], example: { jp: "मीना की चादर गुलाबी है।", en: "Meena's sheet is pink." }, drill: { jp: "इस दुकान में गुलाबी साबुन है", en: "There is pink soap in this shop" }, hint: "GU-LAA-BII — from गुलाब, the rose, so literally 'rose-coloured'. ⚠️ It ends in -ी and still does NOT change form, because it is already a derived adjective: गुलाबी कमरा, गुलाबी चादर. Jaipur is the गुलाबी शहर." },
        { id: "hi-u16l2-naarangii", type: "vocab", front: "नारंगी", reading: "naarangii", meaning: "orange", accept: ["orange-coloured", "tangerine"], example: { jp: "यह आम नारंगी है।", en: "This mango is orange." }, drill: { jp: "मेरा तौलिया नारंगी है", en: "My towel is orange" }, hint: "NAA-RAN-GII — from नारंगी, the orange fruit, and the distant ancestor of the English word 'orange' itself by way of Arabic and Spanish. Unchanging, like गुलाबी. The ं before ग is the velar nasal." },
        { id: "hi-u16l2-phiikaa", type: "vocab", front: "फीका", reading: "phiikaa", meaning: "pale", accept: ["faded", "bland", "washed out"], example: { jp: "इस चादर का रंग फीका है।", en: "This sheet's colour is pale." }, drill: { jp: "यह रंग बहुत फीका है", en: "This colour is very pale" }, hint: "PHII-KAA, masculine — फीकी, फीके. Pale or faded of a colour, and BLAND of food: फीकी दाल is under-salted lentils. So it is the opposite of गहरा or of तीखा, depending on what you are describing." },
        { id: "hi-u16l2-gaharaa", type: "vocab", front: "गहरा", reading: "gaharaa", meaning: "deep", accept: ["dark", "intense", "profound"], example: { jp: "इस नदी का पानी गहरा है।", en: "This river's water is deep." }, drill: { jp: "इस कमरे का रंग गहरा है", en: "This room's colour is dark" }, hint: "GA-HA-RAA, masculine — गहरी, गहरे. The middle a IS pronounced here: ga-ha-raa, three beats, not 'gah-raa'. Deep of water, dark of a colour, profound of a thought — गहरी बात, a deep remark." },
      ],
    },
    {
      id: "hi-u16l3",
      unit: 16,
      lesson: 3,
      title: "The weather today",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what the weather is doing today.",
      items: [
        { id: "hi-u16l3-mausam", type: "vocab", front: "मौसम", reading: "mausam", meaning: "weather", accept: ["the season", "a climate"], example: { jp: "आज मौसम बहुत अच्छा है।", en: "The weather is very good today." }, drill: { jp: "इस शहर का मौसम अच्छा है", en: "This city's weather is good" }, hint: "MAU-SAM, masculine — the weather today AND the season of the year, one word for both. मौसमी means 'seasonal'. From the same Arabic root that gave English 'monsoon'." },
        { id: "hi-u16l3-garam", type: "vocab", front: "गरम", reading: "garam", meaning: "hot", accept: ["warm", "heated"], example: { jp: "यह चाय बहुत गरम है।", en: "This tea is very hot." }, drill: { jp: "आज मौसम बहुत गरम है", en: "The weather is very hot today" }, hint: "GA-RAM, consonant-final, so it never changes: गरम चाय, गरम पानी, गरम दिन. ⚠️ This is hot in TEMPERATURE. Hot with chilli is तीखा (unit 13), a completely separate word, and the two are never interchangeable." },
        { id: "hi-u16l3-thandaa", type: "vocab", front: "ठंडा", reading: "thandaa", meaning: "cold", accept: ["cool", "chilled", "a cold drink"], example: { jp: "यह दूध बहुत ठंडा है।", en: "This milk is very cold." }, drill: { jp: "सर्दी में मौसम ठंडा रहता है", en: "In winter the weather stays cold" }, hint: "THAN-DAA, masculine — ठंडी, ठंडे. RETROFLEX ठ with a puff of air, and the ं before ड is the matching retroflex nasal. Used as a noun it means a cold drink: एक ठंडा दीजिए." },
        { id: "hi-u16l3-baarish", type: "vocab", front: "बारिश", reading: "baarish", meaning: "rain", accept: ["rainfall", "a shower", "the rains"], example: { jp: "आज बारिश है।", en: "There is rain today." }, drill: { jp: "इस गाँव में बारिश बहुत कम है", en: "There is very little rain in this village" }, hint: "BAA-RISH, feminine. बारिश होती है is how Hindi says 'it rains' — a noun plus होना, not a weather verb. ⚠️ It OPENS with the letters of बार baar (an occasion, unit 11), which is a different word: read to the end." },
        { id: "hi-u16l3-dhuup", type: "vocab", front: "धूप", reading: "dhuup", meaning: "sunshine", accept: ["sunlight", "the sun's heat"], example: { jp: "आज बहुत धूप है।", en: "There is a lot of sunshine today." }, drill: { jp: "इस आँगन में धूप आती है", en: "Sunshine comes into this courtyard" }, hint: "DHUUP, feminine — sunshine as something you stand in or shade yourself from, not the sun itself, which is सूरज. धूप में is 'in the sun'. The same spelling also names the incense burned in a temple." },
        { id: "hi-u16l3-aaj", type: "vocab", front: "आज", reading: "aaj", meaning: "today", accept: ["this day", "nowadays"], example: { jp: "आज मैं घर पर हूँ।", en: "Today I am at home." }, drill: { jp: "आज मैं जल्दी उठता हूँ", en: "Today I get up early" }, hint: "AAJ is already an adverb — it needs no postposition: आज मैं जाता हूँ. It is the one FIXED point in the Hindi calendar, because कल (unit 2) does double duty as both yesterday AND tomorrow. It is carded here, in the weather lesson, because this is where you first need it." },
      ],
    },
    {
      id: "hi-u16l4",
      unit: 16,
      lesson: 4,
      title: "Seasons and the sky",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the seasons and describe what is in the sky.",
      items: [
        { id: "hi-u16l4-sardii", type: "vocab", front: "सर्दी", reading: "sardii", meaning: "winter", accept: ["the cold season", "a cold", "a chill"], example: { jp: "मुझे सर्दी अच्छी लगती है।", en: "I like winter." }, drill: { jp: "इस शहर में सर्दी बहुत कम है", en: "There is very little winter in this city" }, hint: "SAR-DII, feminine — the cold season, and ALSO a head cold: मुझे सर्दी है means 'I have a cold'. Two senses in one word, and only context separates them. र्द is र riding above द." },
        { id: "hi-u16l4-vasant", type: "vocab", front: "वसंत", reading: "vasant", meaning: "spring", accept: ["the spring season", "springtime"], example: { jp: "वसंत में मौसम अच्छा रहता है।", en: "In spring the weather stays good." }, drill: { jp: "इस गाँव में वसंत बहुत अच्छा है", en: "Spring is very good in this village" }, hint: "VA-SANT, masculine — the spring, and the ऋतु Indian poetry writes about more than any other. वसंत पंचमी is its festival. The ं before त is the matching dental nasal." },
        { id: "hi-u16l4-barf", type: "vocab", front: "बर्फ़", reading: "barf", meaning: "snow", accept: ["ice", "hail"], example: { jp: "इस शहर में बर्फ़ नहीं है।", en: "There is no snow in this city." }, drill: { jp: "इस पानी में बर्फ़ है", en: "There is ice in this water" }, hint: "BARF, feminine, with फ़ — an f. Snow AND ice are the same word: बर्फ़ का पानी is iced water. र्फ़ is र riding above फ़ as a hook on the line above." },
        { id: "hi-u16l4-baadal", type: "vocab", front: "बादल", reading: "baadal", meaning: "a cloud", accept: ["clouds", "cloud cover"], example: { jp: "आज बहुत बादल हैं।", en: "There are many clouds today." }, drill: { jp: "इस मौसम में बादल आते हैं", en: "Clouds come in this season" }, hint: "BAA-DAL, masculine, unchanged in the plural. ⚠️ Read it against बदलना badalnaa (to change, unit 18): the same three consonants in the same order, different vowels, and no relation at all between them." },
        { id: "hi-u16l4-havaa", type: "vocab", front: "हवा", reading: "havaa", meaning: "wind", accept: ["air", "a breeze", "the atmosphere"], example: { jp: "आज हवा ठंडी है।", en: "The wind is cold today." }, drill: { jp: "इस खिड़की से हवा आती है", en: "Wind comes in through this window" }, hint: "HA-VAA, feminine — wind and air in one word. हवा चलती है is 'the wind is blowing'. You have already met it inside हवाई जहाज़ (unit 9), which is literally 'air-vehicle'." },
        { id: "hi-u16l4-suuraj", type: "vocab", front: "सूरज", reading: "suuraj", meaning: "the sun", accept: ["a sun", "the solar disc"], example: { jp: "सुबह सूरज निकलता है।", en: "The sun rises in the morning." }, drill: { jp: "आज सूरज बहुत गरम है", en: "The sun is very hot today" }, hint: "SUU-RAJ, masculine — the sun as the object in the sky, where धूप is its light and heat reaching you. सूरज निकलता है is 'the sun rises', literally 'comes out', using निकलना from unit 12. Also a common boy's name." },
      ],
    },
  ],
};
