// HI Unit 54 — ज़मीन, पानी और आग ("Earth, water and fire") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 BLOCK 3. Conventions: unit1.js §1–§11, then unit31.js §A1–§A8.
//
// 🚨 RETHEMED SLOT (scaffold: "Vocabulary 5 (A2)"). MEASURED HOLE: **the natural
// world was 12 of 34, and the twelve are all LARGE things seen from far away.**
// u21l3/l4 gave फूल, पत्ता, घास, बीज, ज़मीन, पत्थर, आसमान, तारा, पहाड़, जंगल,
// समुद्र, तूफ़ान, and u16 the weather of a single day (मौसम, बारिश, धूप, बर्फ़,
// बादल, हवा, सूरज, सर्दी, वसंत). Between them the corpus had a sea and a mountain
// and **no lake, no pond, no well, no soil, no sand, no dust, no valley, no cave,
// no fire, no smoke, no ash, no flood and no word for nature itself.** A learner
// could say "the sea's water is blue" and could not say "there is no water in the
// well", which in India is the sentence that actually gets said.
//
// ⚠️ WHY THE TITLE IS NOT "और कुदरत". Three of this unit's own fronts (कुदरत,
// नज़ारा, किनारा) are taught HERE, so titling the unit with one of them names it
// after a word the learner meets inside it. ज़मीन (u21l3), पानी (u3) and आग (this
// unit, l3) are the three things the unit is actually about, and two of the three
// are already known — so the title reads as a sentence on the Ladder rather than as
// a label. u55's title does the same job with जानवर.
//
// ⚠️ FIVE FRONTS WANTED AND REFUSED, each TAKEN by a lower slot. This field is the
// one where the front check earns its keep — five of the first fifteen candidates
// were already taught, in units a nature unit would not think to look in:
//   नदी u14l3 · पेड़ u14l3 · मैदान u14l3 · खेत u14l1 · गाँव u5l2 — ALL of them in
//   TOWN-AND-PLACES units, because a river and a tree are landmarks before they are
//   nature. Also चाँद u5l2, लहर u33l2 (at SEA, in the travel unit), बिजली u15l4 (as
//   HOUSEHOLD electricity), सूखा u24l2 (as the ADJECTIVE "dry"). Every one is used
//   in this unit's sentences instead.
//   And two refused as SYNONYMS: दुनिया (संसार u5l4 is "the world") and धरती
//   (ज़मीन u21l3 is "the earth"). Block 1 refused nine synonyms by name; these are
//   two more, refused the same way.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   ⚠️ FEMININE: झील, रेत, मिट्टी, धूल, गुफा, घाटी, चोटी, राख, गरमी, बूँद, कुदरत,
//   छाया, बाढ़, बरसात, आग, नहर. **SIXTEEN of twenty-four, and आग, राख, रेत, धूल,
//   बाढ़, नहर and कुदरत are CONSONANT-FINAL**, so nothing in the shape says so:
//   आग लगी, not लगा · बाढ़ आई, not आया.
//   MASCULINE: तालाब, कुआँ, झरना, किनारा, धुआँ, कोहरा, नज़ारा, भूकंप. झरना ends
//   -ना like an infinitive and is a NOUN; कुआँ is masculine despite the ँ.
//
// ⚠️ ONE DOUBLING-HATCH DECISION, AND IT IS THE THIRD TIME THE HATCH HAS BEEN
// APPROACHED IN HINDI (after साठ/साथ and आटा/आता): **रेत ret, sand, has a DENTAL
// त, and the corpus has no retroflex रेट.** So रेत keeps the plain form, and if a
// later block wants रेट (a rate), **रेट is the RETROFLEX member and must be
// authored `rett`** — §1(b) puts the doubling on the retroflex, never on the
// dental that got there first. Block 1 named सूट/सूत as the next place the hatch
// would fire; this is the one after it.
// RETROFLEX/DENTAL, the rest: तालाब taalaab, चोटी chotii (RETROFLEX ट, no dental
// चोती), घाटी ghaatii (RETROFLEX ट, no घाती), बूँद buund and भूकंप bhuukamp all
// checked against all 1032 readings — no counterpart, hatch does not fire.
// LOANWORD FREE-PASS CHECK (§9): no loanwords. Zero free passes.
export const HI_UNIT54 = {
  id: "hi-u54",
  lang: "hi",
  title: "ज़मीन, पानी और आग",
  order: 54,
  stage: "a2",
  lessons: [
    {
      id: "hi-u54l1",
      unit: 54,
      lesson: 1,
      title: "Where the water lies",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name the places water sits or runs — a lake, a pond, a well, a canal, a waterfall — and say you are standing on the bank.",
      items: [
        { id: "hi-u54l1-jhiil", type: "vocab", front: "झील", reading: "jhiil", meaning: "a lake", accept: ["a loch"], example: { jp: "पहाड़ के पीछे एक बड़ी झील है और उसका पानी बहुत ठंडा है।", en: "Behind the mountain there is a big lake and its water is very cold." }, drill: { jp: "इस झील का पानी बहुत ठंडा है", en: "The water of this lake is very cold" }, hint: "JHIIL — ⚠️ FEMININE, consonant-final: झील गहरी है, not गहरा. झ with a real puff of air, and a long ii. Bigger than a तालाब and always natural; a made one is a बाँध." },
        { id: "hi-u54l1-taalaab", type: "vocab", front: "तालाब", reading: "taalaab", meaning: "a pond", accept: ["a tank of water", "a village pond"], example: { jp: "गरमी में गाँव का तालाब आधा खाली हो जाता है।", en: "In the heat the village pond becomes half empty." }, drill: { jp: "गाँव का तालाब अब खाली है", en: "The village pond is empty now" }, hint: "TAA-LAAB, masculine, with a DENTAL त — tongue on the teeth. The pond a village digs and everyone uses: buffaloes in it, washing at its edge, and dry by May. Read it against ताला, a lock (unit 15): one letter more and a different word." },
        { id: "hi-u54l1-kuaan", type: "vocab", front: "कुआँ", reading: "kuaan", meaning: "a water well", accept: ["a dug well"], example: { jp: "पहले इस गली में एक कुआँ था और सब वहाँ से पानी लाते थे।", en: "Earlier there was a well in this lane and everyone brought water from there." }, drill: { jp: "इस गाँव का कुआँ अब सूखा है", en: "This village's well is dry now" }, hint: "KU-AAN, ⚠️ MASCULINE despite the ँ — कुआँ गहरा है. Two syllables, and the आ is a separate independent vowel because a mātrā cannot follow a mātrā (unit 3). The ँ nasalises the aa and adds no letter. ⚠️ Its OBLIQUE is कुएँ, not कुआँ — कुएँ में पानी है — so the drill here keeps it in the direct case." },
        { id: "hi-u54l1-nahar", type: "vocab", front: "नहर", reading: "nahar", meaning: "a canal", accept: ["an irrigation channel"], example: { jp: "खेत के पास से एक नहर निकलती है।", en: "A canal runs out past the field." }, drill: { jp: "खेत के पास एक नहर है", en: "There is a canal near the field" }, hint: "NA-HAR — ⚠️ FEMININE, consonant-final, so the shape tells you nothing: नहर सूखी है. The middle a IS pronounced: na-har, two beats. A dug channel carrying river water to fields — not a river, which is नदी (unit 14)." },
        { id: "hi-u54l1-jharnaa", type: "vocab", front: "झरना", reading: "jharnaa", meaning: "a waterfall", accept: ["a spring of water", "a cascade"], example: { jp: "जंगल के अंदर एक छोटा झरना है और उसकी आवाज़ दूर तक जाती है।", en: "Inside the forest there is a small waterfall and its sound carries a long way." }, drill: { jp: "जंगल में एक छोटा झरना है", en: "There is a small waterfall in the forest" }, hint: "JHAR-NAA, masculine. ⚠️ It ends in -ना exactly like a verb infinitive and it is a NOUN — there IS a verb झरना, to trickle, but this card is the waterfall. The same trap as प्रार्थना and भावना." },
        { id: "hi-u54l1-kinaaraa", type: "vocab", front: "किनारा", reading: "kinaaraa", meaning: "a shore", accept: ["a bank of a river", "the water margin"], example: { jp: "हम शाम को समुद्र के किनारे बैठे थे।", en: "In the evening we were sitting on the seashore." }, drill: { jp: "नदी का किनारा बहुत सुंदर है", en: "The river bank is very beautiful" }, hint: "KI-NAA-RAA, masculine and regular -ा. ⚠️ Its commonest form is the OBLIQUE किनारे, because it almost always follows के — समुद्र के किनारे, नदी के किनारे. The card teaches the direct singular, which is what unit 1 §4 requires." },
      ],
    },
    {
      id: "hi-u54l2",
      unit: 54,
      lesson: 2,
      title: "What the ground is made of",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Name soil, sand and dust, and describe the shape of high ground — a valley, a summit, a cave.",
      items: [
        { id: "hi-u54l2-mittii", type: "vocab", front: "मिट्टी", reading: "mittii", meaning: "soil", accept: ["earth to dig", "clay"], example: { jp: "बारिश के बाद मिट्टी गीली और नरम हो जाती है।", en: "After the rain the soil becomes wet and soft." }, drill: { jp: "बारिश के बाद मिट्टी नरम है", en: "After the rain the soil is soft" }, hint: "MIT-TII — ⚠️ FEMININE. RETROFLEX ट, and DOUBLED, so you hear both: mit-tii. Soil, and also the clay a दीया is made of (unit 51). मिट्टी का means made of clay." },
        { id: "hi-u54l2-ret", type: "vocab", front: "रेत", reading: "ret", meaning: "sand", accept: ["grains of sand"], example: { jp: "समुद्र के किनारे की रेत दिन में बहुत गरम होती है।", en: "The sand by the sea gets very hot during the day." }, drill: { jp: "समुद्र की रेत बहुत गरम है", en: "The sand by the sea is very hot" }, hint: "RET — ⚠️ FEMININE, consonant-final: रेत गरम है. DENTAL त, tongue flat on the teeth, NOT the English t. It is also spelled रेता in some places; रेत is the printed form." },
        { id: "hi-u54l2-dhuul", type: "vocab", front: "धूल", reading: "dhuul", meaning: "dust", accept: ["dusty powder"], example: { jp: "गाड़ी के पीछे इतनी धूल उठी कि कुछ दिखा नहीं।", en: "So much dust rose behind the car that nothing was visible." }, drill: { jp: "इस रास्ते पर बहुत धूल है", en: "There is a lot of dust on this road" }, hint: "DHUUL — ⚠️ FEMININE, consonant-final: धूल उठी, not उठा. DENTAL ध with a puff of air, and a long uu. The verb is उठना, to rise (unit 12) — धूल उठती है." },
        { id: "hi-u54l2-guphaa", type: "vocab", front: "गुफा", reading: "guphaa", meaning: "a cave", accept: ["a cavern"], example: { jp: "पहाड़ में एक पुरानी गुफा है और उसके अंदर कोई नहीं जाता।", en: "There is an old cave in the mountain and nobody goes inside it." }, drill: { jp: "उस पहाड़ में एक गुफा है", en: "There is a cave in that mountain" }, hint: "GU-PHAA — ⚠️ FEMININE, and it DOES look it. फ with a real puff of air: gu-phaa, not gu-faa. Also spelled गुफ़ा with the nukta; गुफा with plain फ is the commoner print form." },
        { id: "hi-u54l2-ghaatii", type: "vocab", front: "घाटी", reading: "ghaatii", meaning: "a valley", accept: ["a dale"], example: { jp: "दो पहाड़ों के बीच एक हरी घाटी है।", en: "Between the two mountains there is a green valley." }, drill: { jp: "दो पहाड़ों के बीच घाटी है", en: "There is a valley between the two mountains" }, hint: "GHAA-TII — ⚠️ FEMININE. RETROFLEX ट, tongue curled back. The low ground between hills, and the word Kashmir is usually called by: घाटी on its own means THE valley." },
        { id: "hi-u54l2-chotii", type: "vocab", front: "चोटी", reading: "chotii", meaning: "a summit", accept: ["a mountain top", "a peak"], example: { jp: "पहाड़ की चोटी पर अब भी बर्फ़ है।", en: "There is still snow on the mountain's summit." }, drill: { jp: "पहाड़ की चोटी पर बर्फ़ है", en: "There is snow on the mountain's summit" }, hint: "CHO-TII — ⚠️ FEMININE. RETROFLEX ट. It also means a plaited braid of hair, and the two senses share the idea of something narrowing to a point at the top." },
      ],
    },
    {
      id: "hi-u54l3",
      unit: 54,
      lesson: 3,
      title: "Fire, heat and what hangs in the air",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say that something is on fire, name smoke and ash, and describe heat, fog and a single drop of water.",
      items: [
        { id: "hi-u54l3-aag", type: "vocab", front: "आग", reading: "aag", meaning: "flames", accept: ["a blaze", "burning"], example: { jp: "रसोई में आग लगी और सब लोग बाहर निकल आए।", en: "A fire broke out in the kitchen and everyone came outside." }, drill: { jp: "रसोई में आग लगी थी", en: "There had been a fire in the kitchen" }, hint: "AAG — ⚠️ FEMININE, consonant-final: आग लगी, never लगा. Two letters. The verb is लगना — आग लगना, for a fire to break out; आग लगाना is to set one. ⚠️ Read it against आगे aage, ahead (unit 14): one mātrā apart." },
        { id: "hi-u54l3-dhuaan", type: "vocab", front: "धुआँ", reading: "dhuaan", meaning: "the smoke from a fire", accept: ["fumes"], example: { jp: "चूल्हे से इतना धुआँ निकला कि आँखों में पानी आ गया।", en: "So much smoke came off the stove that my eyes watered." }, drill: { jp: "चूल्हे से बहुत धुआँ निकला", en: "A lot of smoke came off the stove" }, hint: "DHU-AAN, masculine, DENTAL ध. Two syllables and the आ is independent, exactly like कुआँ — a mātrā cannot follow a mātrā. The verb is निकलना, to come out (unit 12)." },
        { id: "hi-u54l3-raakh", type: "vocab", front: "राख", reading: "raakh", meaning: "ash", accept: ["ashes", "cinders"], example: { jp: "आग ठंडी होने के बाद चूल्हे में सिर्फ़ राख बची।", en: "After the fire went cold only ash was left in the stove." }, drill: { jp: "चूल्हे में सिर्फ़ राख बची है", en: "Only ash is left in the stove" }, hint: "RAAKH — ⚠️ FEMININE, consonant-final: राख ठंडी है. ख with a puff of air. What is left of a fire, and also what is scattered in a river after a cremation — so the word carries weight beyond the kitchen." },
        { id: "hi-u54l3-garmii", type: "vocab", front: "गरमी", reading: "garmii", meaning: "heat", accept: ["hot weather", "the hot season"], example: { jp: "इस साल गरमी इतनी थी कि दिन में कोई बाहर नहीं निकला।", en: "This year the heat was so great that nobody went out during the day." }, drill: { jp: "इस साल गरमी बहुत ज़्यादा है", en: "This year the heat is very great" }, hint: "GAR-MII — ⚠️ FEMININE. Built off गरम, hot (unit 16) — the state of being गरम. It is ALSO the name of the season, the way सर्दी (unit 16) is both cold and winter, so गरमी में means 'in summer'." },
        { id: "hi-u54l3-kohraa", type: "vocab", front: "कोहरा", reading: "kohraa", meaning: "fog", accept: ["mist"], example: { jp: "सुबह इतना कोहरा था कि ट्रेन देर से आई।", en: "There was so much fog in the morning that the train came late." }, drill: { jp: "सुबह बहुत कोहरा था", en: "There was a lot of fog in the morning" }, hint: "KOH-RAA, masculine and regular -ा. The middle h is breathed: koh-raa. Winter fog on the northern plains, thick enough to stop trains — which is the sentence it turns up in most." },
        { id: "hi-u54l3-buund", type: "vocab", front: "बूँद", reading: "buund", meaning: "a droplet", accept: ["a single drop"], example: { jp: "आसमान साफ़ था और बारिश की एक बूँद भी नहीं गिरी।", en: "The sky was clear and not a single drop of rain fell." }, drill: { jp: "बारिश की एक बूँद भी नहीं गिरी", en: "Not even one drop of rain fell" }, hint: "BUUND — ⚠️ FEMININE, consonant-final: बूँद गिरी, not गिरा. The ँ nasalises the long uu without adding a letter, and the द is DENTAL. एक बूँद भी नहीं is the idiom for 'not a drop'." },
      ],
    },
    {
      id: "hi-u54l4",
      unit: 54,
      lesson: 4,
      title: "Nature, its views, and when it turns",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Use the word for nature itself, admire a view, sit in the shade, and report a flood, an earthquake or the coming of the rains.",
      items: [
        { id: "hi-u54l4-kudrat", type: "vocab", front: "कुदरत", reading: "kudrat", meaning: "nature", accept: ["the natural world"], example: { jp: "पहाड़ों में कुदरत के पास रहकर मन शांत हो जाता है।", en: "Living close to nature in the mountains, the mind becomes calm." }, drill: { jp: "पहाड़ों में कुदरत बहुत सुंदर है", en: "Nature is very beautiful in the mountains" }, hint: "KUD-RAT — ⚠️ FEMININE, consonant-final: कुदरत सुंदर है. Plain क, not क़ — unit 1 §7 leaves all three Perso-Arabic letters uncarded and unused. You have seen it in unit 21's title जानवर और कुदरत; this is the card for it." },
        { id: "hi-u54l4-nazaaraa", type: "vocab", front: "नज़ारा", reading: "nazaaraa", meaning: "a view", accept: ["a scene before you", "a vista"], example: { jp: "छत से पूरे शहर का नज़ारा बहुत सुंदर लगता है।", en: "The view of the whole city looks very beautiful from the roof." }, drill: { jp: "यहाँ से शहर का नज़ारा सुंदर लगता है", en: "The view of the city looks beautiful from here" }, hint: "NA-ZAA-RAA, masculine and regular -ा, with ज़ — a z. What you can SEE from where you stand, so it needs a viewpoint: छत से, पहाड़ से. A picture of it is a तस्वीर (unit 38)." },
        { id: "hi-u54l4-chhaayaa", type: "vocab", front: "छाया", reading: "chhaayaa", meaning: "shade", accept: ["a shadow", "shelter from sun"], example: { jp: "दिन में हम पेड़ की छाया में बैठे।", en: "During the day we sat in the shade of the tree." }, drill: { jp: "हम पेड़ की छाया में बैठे", en: "We sat in the shade of the tree" }, hint: "CHHAA-YAA — ⚠️ FEMININE, and it looks it. छ is च with a puff of air. Both the cool shade you sit in and the dark shape a thing throws — Hindi does not split them. Also spelled छाँव in speech." },
        { id: "hi-u54l4-baarh", type: "vocab", front: "बाढ़", reading: "baarh", meaning: "a flood", accept: ["flooding", "floodwater"], example: { jp: "बरसात में नदी की बाढ़ से कई गाँव में पानी भर गया।", en: "In the rainy season the river's flood filled several villages with water." }, drill: { jp: "बाढ़ के बाद कई गाँव खाली हो गए", en: "After the flood several villages became empty" }, hint: "BAARH — ⚠️ FEMININE, consonant-final: बाढ़ आई, not आया. ढ़ is the nukta letter of unit 4, written rh: a curled-back flap with breath. The verb is आना — बाढ़ आना, for a flood to come." },
        { id: "hi-u54l4-bhuukamp", type: "vocab", front: "भूकंप", reading: "bhuukamp", meaning: "an earthquake", accept: ["a quake", "a tremor"], example: { jp: "रात को भूकंप आया और सब लोग घर से बाहर निकल आए।", en: "An earthquake came at night and everyone came out of the house." }, drill: { jp: "रात को हल्का भूकंप आया", en: "A light earthquake came at night" }, hint: "BHUU-KAMP, masculine. Built from भू, the earth, plus कंप, a shaking. The ं before प is the matching nasal, so it reads kamp. Like बाढ़, the verb is आना: भूकंप आया." },
        { id: "hi-u54l4-barsaat", type: "vocab", front: "बरसात", reading: "barsaat", meaning: "the rainy season", accept: ["the monsoon"], example: { jp: "बरसात शुरू होने के बाद गरमी कम हो जाती है।", en: "After the rainy season begins the heat goes down." }, drill: { jp: "बरसात में यह रास्ता बंद रहता है", en: "In the rainy season this road stays closed" }, hint: "BAR-SAAT — ⚠️ FEMININE, consonant-final: बरसात आई. Not the same as बारिश (unit 16), which is the rain that is falling now — बरसात is the whole SEASON, the three months of it, and it is a time word: बरसात में." },
      ],
    },
  ],
};
