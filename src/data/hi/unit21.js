// HI Unit 21 — जानवर और कुदरत ("Animals and nature") — A1
// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 3 (u21–u30), the closing block. All conventions are set in unit1.js
// §1–§11 and BIND this block; unit11.js carries block 2's additions. What
// follows is only what is new or decided here.
//
// 🚨 RETHEMED SLOT — THE LAST OF THE FIVE. The scaffold called this
// "Characters 5", the fifth and final Japanese interleaved-kanji slot. Hindi
// finishes its script at u6, so the name pointed at nothing and
// `src/data/lint.js` hard-errors on /^Characters \d+$/. Blocks 1 and 2 cleared
// u9, u12, u15 and u18; this closes the set.
//
// WHY ANIMALS AND NATURE, MEASURED. Probed the merged u1–u20 corpus (480 cards)
// for a CEFR A1 domain with NOTHING in it. Animals scored **0 of 15** — no dog,
// cat, cow, bird, fish, goat, hen, mouse, elephant, monkey, lion or snake, and
// no word for "animal" at all. Nature scored **0 of 13**: block 1 and 2 taught
// पेड़, बगीचा, नदी, खेत, चाँद, सूरज, बादल, हवा, बर्फ़, धूप and बारिश, and not one
// word for a flower, a leaf, grass, a seed, the ground, a stone, the sky, a
// star, a mountain, a forest or the sea. Two empty domains next to each other,
// which is why they share the slot: l1–l2 are the creatures, l3–l4 the ground
// and the sky above it.
//
// ⚠️ तूफ़ान IS TAUGHT HERE, AND unit16.js's NOTE THAT IT WAS "DROPPED" IS NOW
// STALE — fixed in place in that file. u16 cut it to make room for आज; this
// slot is where it lands, beside the sky and the sea it belongs to.
//
// GENDER TRAPS THIS UNIT ADDS (§4), each named in its own hint:
//   हाथी is MASCULINE despite -ी, exactly like पानी and दही.
//   घास and ज़मीन are FEMININE despite ending in a consonant.
//   चिड़िया is FEMININE and looks it; तकिया and तौलिया (u15) are MASCULINE and
//   look the same — so this unit deliberately re-raises that contrast.
//   मुर्गी/मुर्गा and बकरी/बकरा are the clean -ी/-ा female/male pairs; only the
//   FEMALE is carded, because carding both is the बड़ा/बड़ी defect §6 bans.
//
// RETROFLEX/DENTAL: NO NEW COLLISION, MEASURED. unit11.js records that
// साठ/साथ is the only word pair in the language that needed §1(b)'s doubling
// hatch, and that a second member of any listed pair must double. This unit
// adds पत्ता pattaa (DENTAL geminate त्त) and पत्थर patthar (DENTAL त्थ) — the
// doubling there is GEMINATION under §1, not the hatch — plus पहाड़ pahaar and
// चिड़िया chiriyaa on §1(c)'s ड़ → r. Checked against all 480 existing readings:
// no dental counterpart exists for any of them (no पटा, पठर, पहार or चिरिया in
// the corpus), so the hatch fires nowhere new and nothing here doubles for it.
export const HI_UNIT21 = {
  id: "hi-u21",
  lang: "hi",
  title: "जानवर और कुदरत",
  order: 21,
  stage: "a1",
  lessons: [
    {
      id: "hi-u21l1",
      unit: 21,
      lesson: 1,
      title: "Animals around the house",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the animals you would actually see in an Indian house or yard, and say what each one does.",
      items: [
        { id: "hi-u21l1-kuttaa", type: "vocab", front: "कुत्ता", reading: "kuttaa", meaning: "a dog", accept: ["dog"], example: { jp: "मेरे घर में एक कुत्ता रहता है।", en: "A dog lives in my house." }, drill: { jp: "यह कुत्ता बहुत बड़ा है", en: "This dog is very big" }, hint: "KUT-TAA, with a doubled DENTAL त — hold the t with your tongue on your teeth. MASCULINE, plural कुत्ते. A female dog is कुतिया, not कुत्ती." },
        { id: "hi-u21l1-billii", type: "vocab", front: "बिल्ली", reading: "billii", meaning: "a cat", accept: ["cat"], example: { jp: "बिल्ली कुर्सी पर सोती है।", en: "The cat sleeps on the chair." }, drill: { jp: "यह बिल्ली दूध पीती है", en: "This cat drinks milk" }, hint: "BIL-LII with a doubled ल — hold the l. FEMININE, and here the -ी ending tells the truth. The male is बिल्ला, and the plural is बिल्लियाँ." },
        { id: "hi-u21l1-gaay", type: "vocab", front: "गाय", reading: "gaay", meaning: "a cow", accept: ["cow"], example: { jp: "गाँव में गाय का दूध बहुत अच्छा है।", en: "In the village the cow's milk is very good." }, drill: { jp: "खेत में एक गाय है", en: "There is a cow in the field" }, hint: "GAAY, one syllable, FEMININE. Its plural takes the mātrā ें — गायें — because the word ends in a consonant. You will meet cows on a city road, not only on a farm." },
        { id: "hi-u21l1-murgii", type: "vocab", front: "मुर्गी", reading: "murgii", meaning: "a hen", accept: ["chicken", "a fowl"], example: { jp: "मुर्गी सुबह जल्दी बोलती है।", en: "The hen calls early in the morning." }, drill: { jp: "यह मुर्गी बहुत छोटी है", en: "This hen is very small" }, hint: "MUR-GII, FEMININE; the rooster is मुर्गा. Only the female is taught, because one word cannot be two cards. On a menu मुर्गी means chicken the food." },
        { id: "hi-u21l1-bakrii", type: "vocab", front: "बकरी", reading: "bakrii", meaning: "a goat", accept: ["a she-goat", "nanny goat"], example: { jp: "हमारी बकरी रोज़ दूध देती है।", en: "Our goat gives milk every day." }, drill: { jp: "बकरी पेड़ के पास बैठी है", en: "The goat is sitting near the tree" }, hint: "BAK-RII — the inherent a in क is swallowed, so bak-RII, not ba-ka-rii. FEMININE; the male is बकरा. Goats are ordinary village animals and the word is everywhere." },
        { id: "hi-u21l1-chuuhaa", type: "vocab", front: "चूहा", reading: "chuuhaa", meaning: "a mouse", accept: ["a rat", "rodent"], example: { jp: "बिल्ली चूहे को देखती है।", en: "The cat looks at the mouse." }, drill: { jp: "हमारे घर में चूहा है", en: "There is a mouse in our house" }, hint: "CHUU-HAA, MASCULINE, plural चूहे. Hindi does not split mouse from rat — चूहा is both, and size comes from the rest of the sentence. Keep the ू long." },
      ],
    },
    {
      id: "hi-u21l2",
      unit: 21,
      lesson: 2,
      title: "Wild animals, birds and fish",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the big animals, a bird and a fish, and say where each of them lives.",
      items: [
        { id: "hi-u21l2-haathii", type: "vocab", front: "हाथी", reading: "haathii", meaning: "an elephant", accept: ["elephant"], example: { jp: "हाथी पानी में नहाता है।", en: "The elephant bathes in the water." }, drill: { jp: "हाथी बहुत धीरे चलता है", en: "The elephant walks very slowly" }, hint: "HAA-THII with a DENTAL थ — tongue on the teeth, then a puff of air. MASCULINE despite the -ी ending, exactly like पानी. Read it against हाथ, a hand." },
        { id: "hi-u21l2-bandar", type: "vocab", front: "बंदर", reading: "bandar", meaning: "a monkey", accept: ["monkey", "an ape"], example: { jp: "बंदर पेड़ पर बैठता है।", en: "The monkey sits in the tree." }, drill: { jp: "यह बंदर मेरा फल लेता है", en: "This monkey takes my fruit" }, hint: "BAN-DAR, MASCULINE. The ं before द is said as an n. Compare अंदर andar, inside: same shape, one letter different at the front, and both are said with the same rhythm." },
        { id: "hi-u21l2-sher", type: "vocab", front: "शेर", reading: "sher", meaning: "a lion", accept: ["a tiger", "a big cat"], example: { jp: "शेर बहुत मज़बूत है।", en: "The lion is very strong." }, drill: { jp: "यह शेर बहुत बूढ़ा है", en: "This lion is very old" }, hint: "SHER, MASCULINE. In everyday Hindi शेर covers both a lion and a tiger; when it matters, बाघ is specifically the tiger. The same three letters also mean a couplet of poetry." },
        { id: "hi-u21l2-saanp", type: "vocab", front: "साँप", reading: "saanp", meaning: "a snake", accept: ["snake", "a serpent"], example: { jp: "खेत में साँप रहते हैं।", en: "Snakes live in the field." }, drill: { jp: "यह साँप बहुत लंबा है", en: "This snake is very long" }, hint: "SAANP, MASCULINE. The ँ hums right through the aa — do not add a separate n before the प. Snakes are an ordinary rural fact in India, so this is a word you meet in warnings." },
        { id: "hi-u21l2-chiriyaa", type: "vocab", front: "चिड़िया", reading: "chiriyaa", meaning: "a small bird", accept: ["a bird", "sparrow"], example: { jp: "चिड़िया छत पर बैठती है।", en: "The bird sits on the roof." }, drill: { jp: "एक चिड़िया खिड़की पर है", en: "A bird is at the window" }, hint: "CHI-RI-YAA, FEMININE, plural चिड़ियाँ. The ड़ is a flapped r: the tongue flicks down off the roof of the mouth. चिड़िया is the small everyday bird; पक्षी is the formal word for birds in general." },
        { id: "hi-u21l2-machhlii", type: "vocab", front: "मछली", reading: "machhlii", meaning: "a fish", accept: ["fish"], example: { jp: "नदी में मछलियाँ रहती हैं।", en: "Fish live in the river." }, drill: { jp: "मैं रोज़ मछली खाता हूँ", en: "I eat fish every day" }, hint: "MACH-LII, FEMININE, plural मछलियाँ. The छ is breathy — mach with a puff. In most of India मछली on a menu means river fish rather than sea fish." },
      ],
    },
    {
      id: "hi-u21l3",
      unit: 21,
      lesson: 3,
      title: "What grows out of the ground",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe a garden or a field — the flowers, the leaves, the grass and the stones on the ground.",
      items: [
        { id: "hi-u21l3-phuul", type: "vocab", front: "फूल", reading: "phuul", meaning: "a flower", accept: ["flower", "a blossom"], example: { jp: "बगीचे में लाल फूल हैं।", en: "There are red flowers in the garden." }, drill: { jp: "यह फूल बहुत सुंदर है", en: "This flower is very beautiful" }, hint: "PHUUL with the aspirated फ — a real puff of air, never an English f. MASCULINE, and the plural is the same word: एक फूल, दस फूल. Keep it apart from फल phal, fruit: the ू is the whole difference." },
        { id: "hi-u21l3-pattaa", type: "vocab", front: "पत्ता", reading: "pattaa", meaning: "a leaf", accept: ["leaf", "a leaf of a plant"], example: { jp: "इस पेड़ का पत्ता बहुत बड़ा है।", en: "This tree's leaf is very big." }, drill: { jp: "यह पत्ता हरा और नरम है", en: "This leaf is green and soft" }, hint: "PAT-TAA, MASCULINE, plural पत्ते, with a doubled DENTAL त — hold the t on your teeth. It also means a playing card. Watch it against पता, an address: one त there, two here." },
        { id: "hi-u21l3-ghaas", type: "vocab", front: "घास", reading: "ghaas", meaning: "grass", accept: ["the grass", "a lawn"], example: { jp: "गाय घास खाती है।", en: "The cow eats grass." }, drill: { jp: "बगीचे में घास बहुत हरी है", en: "The grass in the garden is very green" }, hint: "GHAAS, FEMININE — a consonant ending, so nothing in the word tells you the gender and you simply learn it. It is a mass word: हरी घास, and never a plural." },
        { id: "hi-u21l3-biij", type: "vocab", front: "बीज", reading: "biij", meaning: "a seed", accept: ["seed", "a grain"], example: { jp: "इस फल में बहुत बीज हैं।", en: "There are a lot of seeds in this fruit." }, drill: { jp: "यह बीज बहुत छोटा है", en: "This seed is very small" }, hint: "BIIJ, MASCULINE, long ी, and the plural is the same word. Read it slowly against बीस biis, twenty — ज against स, and they blur when you read fast." },
        { id: "hi-u21l3-zamiin", type: "vocab", front: "ज़मीन", reading: "zamiin", meaning: "the ground", accept: ["ground", "land", "the earth"], example: { jp: "बच्चे ज़मीन पर बैठते हैं।", en: "The children sit on the ground." }, drill: { jp: "यहाँ ज़मीन बहुत गंदी है", en: "The ground here is very dirty" }, hint: "ZA-MIIN with the Persian ज़ — a z, not a j. FEMININE, despite the consonant ending. It is both the ground under your feet and land you own: ज़मीन बेचना is to sell land." },
        { id: "hi-u21l3-patthar", type: "vocab", front: "पत्थर", reading: "patthar", meaning: "a stone", accept: ["stone", "a rock"], example: { jp: "रास्ते में बहुत पत्थर हैं।", en: "There are a lot of stones on the way." }, drill: { jp: "यह पत्थर बहुत भारी है", en: "This stone is very heavy" }, hint: "PAT-THAR, MASCULINE, plural the same. The त्थ is a dental t held and then released with a puff — say the t, then थ, both on the teeth. पत्थर also describes someone hard-hearted." },
      ],
    },
    {
      id: "hi-u21l4",
      unit: 21,
      lesson: 4,
      title: "The sky, the hills and the sea",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what is above you and what is around you — the sky, a star, the hills, the forest and the sea.",
      items: [
        { id: "hi-u21l4-aasmaan", type: "vocab", front: "आसमान", reading: "aasmaan", meaning: "the sky", accept: ["sky", "the heavens"], example: { jp: "आज आसमान बहुत साफ़ है।", en: "The sky is very clear today." }, drill: { jp: "आसमान में बादल हैं", en: "There are clouds in the sky" }, hint: "AAS-MAAN, MASCULINE. The middle inherent a is swallowed — aas-MAAN, not a-sa-maan. आकाश is the Sanskrit word for the same thing and turns up in writing; आसमान is what people say." },
        { id: "hi-u21l4-taaraa", type: "vocab", front: "तारा", reading: "taaraa", meaning: "a star", accept: ["star"], example: { jp: "रात में तारे बहुत सुंदर लगते हैं।", en: "At night the stars look very beautiful." }, drill: { jp: "यह तारा बहुत दूर है", en: "This star is very far away" }, hint: "TAA-RAA with a DENTAL त, MASCULINE, plural तारे. Both a star in the sky and a film star, exactly as in English. Keep both ा long." },
        { id: "hi-u21l4-pahaar", type: "vocab", front: "पहाड़", reading: "pahaar", meaning: "a mountain", accept: ["mountain", "a hill"], example: { jp: "हमारा गाँव पहाड़ के पास है।", en: "Our village is near the mountain." }, drill: { jp: "यह पहाड़ बहुत ऊँचा है", en: "This mountain is very high" }, hint: "PA-HAAR, MASCULINE. The final ड़ is a flapped r — flick the tongue down off the roof of the mouth, not an English r. Hindi does not separate hill from mountain; पहाड़ is both." },
        { id: "hi-u21l4-jangal", type: "vocab", front: "जंगल", reading: "jangal", meaning: "a forest", accept: ["forest", "jungle", "the wild"], example: { jp: "जंगल में बहुत पेड़ हैं।", en: "There are a lot of trees in the forest." }, drill: { jp: "यह जंगल बहुत बड़ा है", en: "This forest is very big" }, hint: "JAN-GAL, MASCULINE — and the English word jungle was borrowed from this one. In Hindi it means any wild uncultivated land, not only a tropical forest." },
        { id: "hi-u21l4-samudra", type: "vocab", front: "समुद्र", reading: "samudra", meaning: "the sea", accept: ["sea", "the ocean"], example: { jp: "समुद्र का पानी नीला लगता है।", en: "The sea's water looks blue." }, drill: { jp: "समुद्र यहाँ से बहुत दूर है", en: "The sea is very far from here" }, hint: "SA-MUD-RA, MASCULINE, with the द्र conjunct — द and र stacked. The final a IS pronounced here, unlike most words: samudra, not samudr. In speech you will also hear समुंदर." },
        { id: "hi-u21l4-tuufaan", type: "vocab", front: "तूफ़ान", reading: "tuufaan", meaning: "a storm", accept: ["storm", "a gale", "a hurricane"], example: { jp: "तूफ़ान में बहुत हवा चलती है।", en: "In a storm a lot of wind blows." }, drill: { jp: "इस शहर में तूफ़ान आता है", en: "A storm comes to this city" }, hint: "TUU-FAAN with the Persian फ़ — an f, not an aspirated p. MASCULINE. It covers a storm, a gale and a cyclone; the news says चक्रवाती तूफ़ान when it means a cyclone." },
      ],
    },
  ],
};
