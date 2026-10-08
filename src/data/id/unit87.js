// ID Unit 87 — Pakaian dan dandanan ("Clothing and grooming") — B1
// THE LAST UNIT OF THE INDONESIAN B1 BAND, and the last of block 3 (u77–u87).
// ─────────────────────────────────────────────────────────────────────────────
// The 12 conventions in unit1.js and the 10 A2 conventions in unit21.js BIND
// this file. Read both before editing.
//
// THE HOLE THIS FILLS, measured against all 1200 A1+A2 cards. A2 taught six
// garments and taught them as SHOPPING ITEMS, in the clothes-buying unit:
// `baju` · `celana` · `jaket` · `topi` · `sepatu` · `tas` — plus `ukuran`,
// `memakai` and `melepas`. Nothing since, in thirty-four units. No shirt, skirt,
// t-shirt, sandal, sock, uniform, glasses, ring, necklace, bracelet, tie,
// headscarf, sarong, collar, sleeve, pocket, button; no word for sewing, a
// tailor, a comb, a mirror, face powder, or getting dressed up. A learner could
// buy a baju in the right ukuran and could not describe what anyone was wearing.
//
// ⚠️ `kaki` IS TAKEN at u11 (foot), SO `kaus kaki` IS CARDED ONLY AS A COMPOUND
// FRONT, exactly as the kickoff brief required. Checked mechanically, not by eye:
//   • FOLD (unit1.js §9): `kaus kaki` folds to "kauskaki". Unique in the corpus —
//     `reading-taken.mjs` reports 0 duplicated readings across all 1440 id items.
//   • WHOLE WORD (the `findWholeWord` rule): a drill containing "kaus kaki" DOES
//     whole-word-match the taught front `kaki`, because a space is not a letter.
//     That is harmless in this direction — u11's `kaki` has its own drill and
//     this unit never writes "kaus kaki" into it — but it is why this unit's
//     `kaus kaki` drill carries the COMPOUND and never the bare noun.
//   • And the spelling: this unit cards `kaos` (t-shirt) and `kaus kaki` (socks)
//     with DIFFERENT vowels, which is what Indonesians actually write. The hint
//     says so rather than silently picking one.
//
// WORDS DECLINED, EACH FOR A NAMED REASON:
//   `parfum`  one letter from "perfume" — the copy-task rule (A10, the `skor`
//             rejection). `kerah` (a collar) took the slot and it fits the
//             garment-parts lesson better anyway.
//   `topi` · `sepatu`  TAKEN at u16. `kaki` TAKEN at u11 (see above).
//   `selendang`  free, cut for space; `sarung`, `batik` and `jilbab` already
//             carry the Indonesian-garment strand.
//
// GLOSSES REWRITTEN BECAUSE THE GRADER COLLIDED THEM. `normalizeMeaning` strips a
// leading "to " and "a/an/the", and `lint:curriculum` compares exact lowercased
// strings, so all three of these were invisible to lint:
//   `kemeja`  "a shirt"  -> `baju` accepts "a shirt".    Now "a buttoned shirt".
//   `kancing` "a button" -> `tombol` accepts "a button". Now "a button on clothing".
//   `saku`    "a pocket" -> `kantong` owns "a pocket".   Now "a pocket sewn into clothing".
// `tombol` is a button on a MACHINE and `kancing` is one on a shirt; Indonesian
// keeps them apart and so must the glosses.
//
// THREE PROBE FLAGS AND ALL THREE ARE WRONG, recorded so nobody re-checks them:
//   `kemeja` flagged against `meja` (a table) — ke- plus meja is not where this
//            word comes from; it is Portuguese camisa. CLEAN.
//   `dasi`   flagged against `pedas` (spicy). Letters only. CLEAN.
//   `kerah`  flagged against `merah` (red) and `menyerah` (to surrender).
//            Letters only. CLEAN.
// ONE REAL DERIVATION: `menjahit` + `penjahit`, two cards off root `jahit`, which
// is not itself taught. Under A6's ceiling, and the hint names the pair.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT87 = {
  id: "id-u87",
  lang: "id",
  title: "Pakaian dan dandanan",
  order: 87,
  stage: "b1",
  lessons: [
    {
      id: "id-u87l1",
      unit: 87,
      lesson: 1,
      title: "Kemeja, kaos, dan rok",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say what someone is wearing, garment by garment, instead of calling everything baju.",
      items: [
        { id: "id-u87l1-kemeja", type: "vocab", front: "kemeja", reading: "kemeja", meaning: "a buttoned shirt", example: { jp: "Dia memakai kemeja putih ke kantor setiap hari.", en: "He wears a white shirt to the office every day." }, accept: ["a formal shirt", "a collared shirt"], drill: { jp: "Dia memakai kemeja putih ke kantor setiap hari", en: "He wears a white shirt to the office every day" }, hint: "kuh-MEH-ja, from Portuguese camisa — nothing to do with meja, a table, which it only resembles. The formal buttoned shirt. baju, which you know, is clothing in general and already accepts \"a shirt\" from the grader, which is why this card says buttoned." },
        { id: "id-u87l1-kaos", type: "vocab", front: "kaos", reading: "kaos", meaning: "a t-shirt", example: { jp: "Saya lebih suka kaos daripada kemeja.", en: "I prefer a t-shirt to a buttoned shirt." }, accept: ["a tee", "a soft cotton top"], drill: { jp: "Saya lebih suka kaos daripada kemeja", en: "I prefer a t-shirt to a buttoned shirt" }, hint: "KA-os, two syllables. The soft collarless top. NOTE THE SPELLING: Indonesians write kaos for a t-shirt but kaus kaki for socks, two lessons along in this unit — the same Dutch word, two settled spellings, and both are normal." },
        { id: "id-u87l1-rok", type: "vocab", front: "rok", reading: "rok", meaning: "a skirt", example: { jp: "Rok itu terlalu panjang untuk anak kecil.", en: "That skirt is too long for a small child." }, accept: ["a woman's skirt", "a skirt garment"], drill: { jp: "Rok itu terlalu panjang untuk anak kecil", en: "That skirt is too long for a small child" }, hint: "ROK, one syllable, from Dutch rok. A skirt, never a dress — a dress is a gaun. Part of nearly every Indonesian girl's school seragam, which is the last card in this lesson." },
        { id: "id-u87l1-kauskaki", type: "vocab", front: "kaus kaki", reading: "kauskaki", meaning: "socks", example: { jp: "Kaus kaki saya hilang satu lagi.", en: "I have lost another one of my socks." }, accept: ["a pair of socks", "stockings"], drill: { jp: "Kaus kaki saya hilang satu lagi", en: "Another one of my socks is lost" }, hint: "KA-oos KA-kee. Literally \"foot sock\", and you have known kaki, a foot, since the body unit. Two words, always — the bare noun kaus would be the shirt sense, so this garment only ever appears as the compound. Compulsory with school shoes in Indonesia." },
        { id: "id-u87l1-sandal", type: "vocab", front: "sandal", reading: "sandal", meaning: "a sandal", example: { jp: "Di rumah kami semua memakai sandal.", en: "At home we all wear sandals." }, accept: ["a flip-flop", "an open shoe"], drill: { jp: "Di rumah kami semua memakai sandal", en: "At home we all wear sandals" }, hint: "SAHN-dahl. Includes the rubber flip-flop, sandal jepit, which is what most of Indonesia wears most of the time. Shoes come off at the door; sandal go on." },
        { id: "id-u87l1-seragam", type: "vocab", front: "seragam", reading: "seragam", meaning: "a uniform", example: { jp: "Seragam sekolah di Indonesia putih dan merah.", en: "School uniform in Indonesia is white and red." }, accept: ["uniform clothing", "a prescribed outfit"], drill: { jp: "Seragam sekolah di Indonesia putih dan merah", en: "School uniform in Indonesia is white and red" }, hint: "suh-ra-GAHM. Literally \"of one kind\", from se- plus ragam. Indonesian school uniform is colour-coded by level — red and white for primary, blue and white for junior, grey and white for senior — so every Indonesian knows what a child's age is from across the street." },
      ],
    },
    {
      id: "id-u87l2",
      unit: 87,
      lesson: 2,
      title: "Batik, sarung, dan jilbab",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Name the clothing that is specifically Indonesian, and describe the parts of a garment — the collar and the sleeve.",
      items: [
        { id: "id-u87l2-batik", type: "vocab", front: "batik", reading: "batik", meaning: "batik cloth", example: { jp: "Kemeja batik boleh untuk acara resmi di Indonesia.", en: "A batik shirt is acceptable for a formal occasion in Indonesia." }, accept: ["wax-dyed patterned cloth", "patterned Javanese cloth"], drill: { jp: "Kemeja batik boleh untuk acara resmi", en: "A batik shirt is acceptable for a formal occasion" }, hint: "BA-teek. Cloth patterned by covering parts in wax before dyeing — a Javanese craft, and a UNESCO-listed one. It matters practically: a batik kemeja counts as formal wear in Indonesia where a plain shirt would not be enough. It shares no root with mematikan, \"to switch off\"." },
        { id: "id-u87l2-sarung", type: "vocab", front: "sarung", reading: "sarung", meaning: "a sarong", example: { jp: "Bapak saya memakai sarung waktu berdoa.", en: "My father wears a sarong when he prays." }, accept: ["a wrapped tube of cloth", "a sewn cloth wrap"], drill: { jp: "Bapak saya memakai sarung waktu berdoa", en: "My father wears a sarong when he prays" }, hint: "SA-roong. A tube of kain sewn into a loop and worn round the waist — for prayer, for sleeping, for being at home. The word also means a cover or a case: sarung tangan is a glove, literally a hand-sarong." },
        { id: "id-u87l2-jilbab", type: "vocab", front: "jilbab", reading: "jilbab", meaning: "a headscarf", example: { jp: "Banyak perempuan di kantor itu memakai jilbab.", en: "Many women in that office wear a headscarf." }, accept: ["a hijab", "a Muslim woman's head covering"], drill: { jp: "Banyak perempuan di kantor itu memakai jilbab", en: "Many women in that office wear a headscarf" }, hint: "JEEL-bahb. The headscarf worn by Muslim women, and the ordinary Indonesian word — hijab is also used but jilbab is what you will hear. Unavoidable vocabulary in the world's largest Muslim-majority country." },
        { id: "id-u87l2-dasi", type: "vocab", front: "dasi", reading: "dasi", meaning: "a necktie", example: { jp: "Dia memakai dasi hitam untuk acara itu.", en: "He wore a black tie for that occasion." }, accept: ["a tie worn at the neck", "a cravat"], drill: { jp: "Dia memakai dasi hitam untuk acara itu", en: "He wore a black tie for that occasion" }, hint: "DA-see, from Dutch das. Nothing to do with pedas, \"spicy\" — the probe matched letters, not sense. Part of the senior-school seragam for boys, so Indonesians put one on long before they have an office job." },
        { id: "id-u87l2-kerah", type: "vocab", front: "kerah", reading: "kerah", meaning: "a collar", example: { jp: "Kerah kemeja itu sudah kotor dan tua.", en: "That shirt's collar is already dirty and old." }, accept: ["the neckband of a shirt", "a shirt collar"], drill: { jp: "Kerah kemeja itu sudah kotor dan tua", en: "That shirt's collar is dirty and old" }, hint: "kuh-RAH. The band round the neck of a kemeja, and what a dasi goes under. It shares no root with merah (red) or menyerah (to surrender), which it only resembles." },
        { id: "id-u87l2-lengan", type: "vocab", front: "lengan", reading: "lengan", meaning: "a sleeve", example: { jp: "Kaos dengan lengan pendek lebih baik waktu panas.", en: "A t-shirt with short sleeves is better when it is hot." }, accept: ["the arm of a garment", "the part covering the arm"], drill: { jp: "Kaos dengan lengan pendek lebih baik waktu panas", en: "A t-shirt with short sleeves is better when it is hot" }, hint: "LUH-ngahn. Both the SLEEVE and the ARM. This card is glossed as the SLEEVE because tangan, which you know, already accepts \"arm\" from the grader — Indonesian stretches tangan from the hand up the whole limb, and lengan is the upper part of it. lengan panjang and lengan pendek are how Indonesian labels long- and short-sleeved." },
      ],
    },
    {
      id: "id-u87l3",
      unit: 87,
      lesson: 3,
      title: "Kancing, saku, dan menjahit",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get clothes altered or mended: name the button and the pocket, say you are sewing, and find a tailor.",
      items: [
        { id: "id-u87l3-kancing", type: "vocab", front: "kancing", reading: "kancing", meaning: "a button on clothing", example: { jp: "Kancing kemeja itu hilang satu di bawah.", en: "One button at the bottom of that shirt is missing." }, accept: ["a shirt button", "a fastener on a garment"], drill: { jp: "Kancing kemeja itu hilang satu di bawah", en: "One button at the bottom of that shirt is missing" }, hint: "KAHN-ching. The one on a shirt. You already know tombol, which is the one you PRESS on a machine — Indonesian keeps them firmly apart, and the grader already gives \"a button\" to tombol, which is why this card says on clothing." },
        { id: "id-u87l3-saku", type: "vocab", front: "saku", reading: "saku", meaning: "a pocket sewn into clothing", example: { jp: "Ponsel saya ada di saku celana.", en: "My phone is in my trouser pocket." }, accept: ["a garment pocket", "a sewn-in pouch"], drill: { jp: "Ponsel saya ada di saku celana", en: "My phone is in my trouser pocket" }, hint: "SA-koo. The pocket IN a garment. kantong, which you know, is a bag or pouch of any kind and owns the plain gloss \"a pocket\" with the grader — so this card has to be specific. uang saku, pocket money, is built on this word." },
        { id: "id-u87l3-menjahit", type: "vocab", front: "menjahit", reading: "menjahit", meaning: "to sew", example: { jp: "Ibu saya menjahit sendiri semua rok anak.", en: "My mother sews all the children's skirts herself." }, accept: ["to stitch", "to work with needle and thread"], drill: { jp: "Ibu saya menjahit sendiri semua rok anak", en: "My mother sews all the children's skirts herself" }, hint: "mun-JA-heet. Root jahit. You already have jarum and benang from the tools unit — this is what you do with them." },
        { id: "id-u87l3-penjahit", type: "vocab", front: "penjahit", reading: "penjahit", meaning: "a tailor", example: { jp: "Penjahit di pasar itu cepat dan murah.", en: "The tailor at that market is quick and cheap." }, accept: ["a dressmaker", "someone who sews for a living"], drill: { jp: "Penjahit di pasar itu cepat dan murah", en: "The tailor at that market is quick and cheap" }, hint: "pun-JA-heet. The pe- doer frame on menjahit, the same frame that gave you pemain, pembaca and penjual. Having clothes made or altered by a penjahit is ordinary in Indonesia, not a luxury." },
        { id: "id-u87l3-kacamata", type: "vocab", front: "kacamata", reading: "kacamata", meaning: "glasses", example: { jp: "Kacamata saya rusak, jadi tidak bisa membaca.", en: "My glasses are broken, so I cannot read." }, accept: ["spectacles", "eyeglasses"], drill: { jp: "Kacamata saya rusak jadi tidak bisa membaca", en: "My glasses are broken so I cannot read" }, hint: "KA-cha-MA-ta. Literally glass-eye, from kaca — which you met in the materials unit — and mata, which you have known since the body unit. Written solid as one word; you will also see kaca mata spaced, but kacamata is the standard form." },
        { id: "id-u87l3-cermin", type: "vocab", front: "cermin", reading: "cermin", meaning: "a mirror", example: { jp: "Ada cermin besar di kamar mandi itu.", en: "There is a big mirror in that bathroom." }, accept: ["a looking glass", "a reflecting glass"], drill: { jp: "Ada cermin besar di kamar mandi itu", en: "There is a big mirror in that bathroom" }, hint: "CHUR-meen — c is CH. Also used figuratively: cermin masyarakat, a mirror of society. A pantulan, from the senses unit, is what you see in it." },
      ],
    },
    {
      id: "id-u87l4",
      unit: 87,
      lesson: 4,
      title: "Cincin, kalung, dan berdandan",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Describe jewellery and getting ready: a ring, a necklace, a bracelet, a comb, face powder, and the act of doing yourself up.",
      items: [
        { id: "id-u87l4-cincin", type: "vocab", front: "cincin", reading: "cincin", meaning: "a ring", example: { jp: "Cincin itu dari emas dan sangat mahal.", en: "That ring is of gold and very expensive." }, accept: ["a finger ring", "a band worn on a finger"], drill: { jp: "Cincin itu dari emas dan sangat mahal", en: "That ring is of gold and very expensive" }, hint: "CHEEN-cheen — both c are CH. Worn on a jari, which you know. emas, gold, you also already have. cincin kawin is a wedding ring." },
        { id: "id-u87l4-kalung", type: "vocab", front: "kalung", reading: "kalung", meaning: "a necklace", example: { jp: "Kalung itu panjang sampai ke dada.", en: "That necklace is long, down to the chest." }, accept: ["a chain worn round the neck", "a pendant chain"], drill: { jp: "Kalung itu panjang sampai ke dada", en: "That necklace is long down to the chest" }, hint: "KA-loong. Worn round the leher, which you know from the body unit. The same word covers a medal on a ribbon and a lanyard at a conference." },
        { id: "id-u87l4-gelang", type: "vocab", front: "gelang", reading: "gelang", meaning: "a bracelet", example: { jp: "Gelang di tangan anak itu dari karet.", en: "The bracelet on that child's wrist is of rubber." }, accept: ["a bangle", "a band worn on the wrist"], drill: { jp: "Gelang di tangan anak itu dari karet", en: "The bracelet on that child's wrist is of rubber" }, hint: "GUH-lahng. Worn on the tangan. It is the root inside karet gelang, a rubber band — literally a rubber bracelet, which is exactly what one is." },
        { id: "id-u87l4-sisir", type: "vocab", front: "sisir", reading: "sisir", meaning: "a comb", example: { jp: "Sisir itu ada di dekat cermin di kamar.", en: "The comb is near the mirror in the bedroom." }, accept: ["a hair comb", "a toothed hair tool"], drill: { jp: "Sisir itu ada di dekat cermin di kamar", en: "The comb is near the mirror in the bedroom" }, hint: "SEE-seer. The comb, and the verb menyisir, to comb. Indonesian also uses menyisir for a police sweep of an area, and a sisir of bananas is a hand of them on the stalk." },
        { id: "id-u87l4-bedak", type: "vocab", front: "bedak", reading: "bedak", meaning: "face powder", example: { jp: "Dia memakai bedak supaya wajah tidak basah.", en: "She uses powder so her face does not get damp." }, accept: ["cosmetic powder", "talc for the face"], drill: { jp: "Dia memakai bedak supaya wajah tidak basah", en: "She uses powder so her face does not get damp" }, hint: "BUH-dahk. Loose or compact powder for the face, and baby powder too — bedak bayi. In a lembap climate it is less about looks than about staying dry, and lembap you met in the senses unit." },
        { id: "id-u87l4-berdandan", type: "vocab", front: "berdandan", reading: "berdandan", meaning: "to do oneself up", example: { jp: "Dia berdandan dulu sebelum pergi ke pesta.", en: "She does herself up before going to the party." }, accept: ["to get dressed up", "to put on make-up and smart clothes"], drill: { jp: "Dia berdandan dulu sebelum pergi ke pesta", en: "She does herself up before going to the party" }, hint: "bur-DAHN-dahn. Root dandan. Getting ready to be SEEN: clothes, hair and bedak together, not any one of them. It is the word in this unit's title, and the last new word of the Indonesian B1 band." },
      ],
    },
  ],
};
