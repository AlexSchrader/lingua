// ID Unit 14 — Tata bahasa 3 — perbandingan dan jumlah ("Grammar 3 — comparison and quantity") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u8–u14), authored 2026-09-27. The 12 conventions in unit1.js BIND
// this file. This is the last unit of block 2.
//
// 🚨 THIS SLOT WAS RETHEMED TOO — AND IT IS A SECOND ARTEFACT, NOT THE ONE
// CONVENTION 12 NAMED. The scaffold stubbed it **"Grammar 3 — past tense and
// agreement"**. BOTH halves of that title name things Indonesian does not have:
//   • **No past tense.** Indonesian verbs never inflect for time. u13 is the
//     unit that teaches this, and it teaches it with free-standing markers —
//     `sudah`, `tadi`, `kemarin`, `lalu`. There is no second, past-tense unit to
//     build, because there is no past tense to conjugate.
//   • **No agreement.** No gender, no number, no person, nowhere in the language.
//     An adjective does not change for its noun and a verb does not change for
//     its subject. There is literally nothing in the slot.
// Convention 12 flagged u13 and told block 2 to "check your other six slots for
// the same class of artefact". This is the one it did not name, found by doing
// exactly that. Retitled and rethemed as ordinary authoring (CLAUDE.md "No front
// language"), same as u13.
//
// THE HONEST CONTENT: **comparison, degree and quantity** — which is what block 1
// independently reserved for this slot (`lebih` · `paling` · `daripada` · the
// `sangat`/`sekali` contrasts). It is the right fit for a third grammar unit
// because comparison is the one place Indonesian DOES modify meaning
// systematically, and it does it the same way it does aspect: with a free word in
// front of an adjective that never itself changes.
//   l1  lebih … daripada · kurang · terlalu · agak · seperti
//   l2  paling · pertama · nomor · tepat · kira-kira · setengah
//   l3  benar/salah · mirip · cocok · pilih · coba
//   l4  jumlah · ukuran · jarak · kali · tambah · bagian
//
// TWO GLOSSES CARRY A DISAMBIGUATOR, in block 1's own house style (`sangat` =
// "very (before the word)", `kenyang` = "full (after eating)"):
//   `terlalu` = "too (excessively)" — because English "too" also means "also",
//     and `juga` (u1) already carries "too" in its accept[]. terlalu panas is
//     coffee you cannot drink; sangat panas is a good hot coffee, and mixing them
//     up insults a cook.
//   `seperti` = "like (similar to)" — because `suka` (u3) is "to like", and a
//     bare "like" prompt would pull a learner toward the wrong word entirely.
//
// AFFIX ROOTS CHECKED BY HAND (the LEXEME probe fails open for Indonesian —
// see unit1.js convention 3):
//   terlalu → lalu   ⚠️ `lalu` IS taught (u9, "ago"). Both are carded anyway, and
//     convention 3's test is why: would a learner who knows `lalu` ("minggu lalu",
//     last week) already know `terlalu` ("too hot")? No — the derivation is
//     semantically opaque. Drill-safe in both directions: `findWholeWord("lalu")`
//     does not match inside "terlalu" (preceded by r), and vice versa.
//   kali → sekali    ⚠️ `sekali` IS taught (u2, "very"). `kali` ("times") is the
//     ROOT, and withholding a base word because a derivative exists is exactly the
//     German failure convention 3 names. Knowing "enak sekali" tells you nothing
//     about "dua kali". Carded. Drill-safe: "kali" is not a whole word in "sekali".
//   setengah → tengah · ukuran → ukur · bagian → bagi · kira-kira → kira
//     NONE of those four roots is taught. No root is taught twice.
//   tepat, agak, mirip, cocok, benar, salah, jarak, nomor, paling, pertama,
//     jumlah, tambah, coba, pilih, kurang, lebih, daripada — all roots.
//
// `kira-kira` is carded as a NON-PLURAL reduplication (convention 5) — `kira`
// alone is "to guess", and doubling it makes the estimate. It is the second such
// card in block 2, after `abu-abu` in u8.
//
// SEEN AND LEFT ALONE: `terbesar`/`terbaik`/`terakhir` — the ter- superlative.
// It IS the systematic alternative to `paling`, but it is closer to inflection
// than derivation (the superlative of the same adjective), and `terakhir` would
// derive from `akhir`, which u9 teaches. `paling` covers the ground and is always
// correct, so ter- is named in `paling`'s hint and carded nowhere.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT14 = {
  id: "id-u14",
  lang: "id",
  title: "Tata bahasa 3 — perbandingan dan jumlah",
  order: 14,
  stage: "a1",
  lessons: [
    {
      id: "id-u14l1",
      unit: 14,
      lesson: 1,
      title: "Lebih dan daripada — membandingkan dua hal",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Compare two things directly with lebih … daripada, and soften or sharpen the adjective with agak or terlalu.",
      items: [
        { id: "id-u14l1-lebih", type: "vocab", front: "lebih", reading: "lebih", meaning: "more", example: { jp: "Rumah saya lebih besar daripada rumah Budi.", en: "My house is bigger than Budi's house." }, accept: ["more than", "-er", "greater"], drill: { jp: "Kota Bali lebih ramai daripada kota saya", en: "Bali is livelier than my city" }, hint: "luh-BIH — swallowed first e, breathed h. Indonesian has NO comparative ending like English \"-er\": you put lebih in front of the plain adjective and the adjective itself never changes. lebih besar, lebih cepat, lebih bagus." },
        { id: "id-u14l1-daripada", type: "vocab", front: "daripada", reading: "daripada", meaning: "than", example: { jp: "Kereta lebih cepat daripada sepeda.", en: "A train is faster than a bicycle." }, accept: ["compared to", "rather than", "in comparison with"], drill: { jp: "Kereta lebih cepat daripada mobil kecil", en: "A train is faster than a small car" }, hint: "dah-ree-PAH-da — four syllables. Look inside and you find dari (from) plus pada, literally \"from at\". In speech people often just use dari, so lebih besar dari rumah Budi is what you will hear; daripada is the careful written form." },
        { id: "id-u14l1-kurang", type: "vocab", front: "kurang", reading: "kurang", meaning: "less", example: { jp: "Obat ini kurang bagus untuk anak kecil.", en: "This medicine is less good for a small child." }, accept: ["not enough", "insufficient", "fewer", "lacking"], drill: { jp: "Obat itu kurang bagus untuk anak", en: "That medicine is less good for a child" }, hint: "KOO-rahng, hum at the end. The opposite of lebih and placed the same way. Alone it means \"not enough\": Uang saya kurang. Kurang lebih — \"less more\" — is the ordinary way to say \"more or less\"." },
        { id: "id-u14l1-terlalu", type: "vocab", front: "terlalu", reading: "terlalu", meaning: "too (excessively)", example: { jp: "Kopi ini terlalu panas untuk saya.", en: "This coffee is too hot for me." }, accept: ["excessively", "too much", "overly", "too"], drill: { jp: "Kopi itu terlalu panas untuk anak", en: "That coffee is too hot for a child" }, hint: "tuhr-LAH-loo — ter- built on lalu, \"gone past\", so it means gone past what is acceptable rather than simply \"very\". Sangat panas is a good hot coffee; terlalu panas is one you cannot drink. Mix them up and you will insult a cook." },
        { id: "id-u14l1-agak", type: "vocab", front: "agak", reading: "agak", meaning: "somewhat", example: { jp: "Cuaca hari ini agak dingin dan kering.", en: "Today's weather is somewhat cold and dry." }, accept: ["rather", "a bit", "slightly", "kind of"], drill: { jp: "Cuaca hari ini agak dingin sekarang", en: "Today's weather is somewhat cold now" }, hint: "AH-gahk, hard g. It SOFTENS the adjective after it where sangat strengthens it: agak panas is \"a bit hot\", sangat panas is \"very hot\". Indonesians reach for it constantly to avoid sounding blunt." },
        { id: "id-u14l1-seperti", type: "vocab", front: "seperti", reading: "seperti", meaning: "like (similar to)", example: { jp: "Wajah anak saya seperti wajah ibu saya.", en: "My child's face is like my mother's face." }, accept: ["such as", "similar to", "as", "resembling"], drill: { jp: "Wajah anak Budi seperti wajah ibu", en: "Budi's child's face is like his mother's" }, hint: "suh-PUHR-tee — two swallowed e's. It compares by RESEMBLANCE where lebih compares by degree. It also introduces an example, exactly like English \"such as\". Do not confuse it with suka, to like — they are unrelated words that English happens to spell with one word." },
      ],
    },
    {
      id: "id-u14l2",
      unit: 14,
      lesson: 2,
      title: "Paling dan urutan — yang nomor satu",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say which one is the most, put things in order, and give a number you are not sure of.",
      items: [
        { id: "id-u14l2-paling", type: "vocab", front: "paling", reading: "paling", meaning: "most", example: { jp: "Pasar ini paling ramai di kota saya.", en: "This market is the busiest in my city." }, accept: ["the most", "-est", "the very"], drill: { jp: "Pasar itu paling ramai di kota", en: "That market is the busiest in the city" }, hint: "PAH-ling, hum at the end. There is no \"-est\" ending either: paling in front of the plain adjective does the whole job. paling besar, paling cepat, paling bagus. A ter- prefix does the same thing — terbesar, terbaik — but paling is the safe choice and is always correct." },
        { id: "id-u14l2-pertama", type: "vocab", front: "pertama", reading: "pertama", meaning: "first", example: { jp: "Hari pertama di sekolah baru sangat susah.", en: "The first day at a new school is very difficult." }, accept: ["the first", "first of all", "initial"], drill: { jp: "Hari pertama di sekolah baru susah", en: "The first day at a new school is difficult" }, hint: "puhr-TAH-ma — and it is the irregular one: it does not come from satu at all. Every other ordinal is just ke- plus the number — kedua, ketiga, kesepuluh — so learn this word and the pattern handles the rest." },
        { id: "id-u14l2-nomor", type: "vocab", front: "nomor", reading: "nomor", meaning: "number", example: { jp: "Nomor rumah saya tujuh dan nomor Budi delapan.", en: "My house number is seven and Budi's is eight." }, accept: ["a number", "no.", "numeral"], drill: { jp: "Nomor rumah Budi tujuh dan saya delapan", en: "Budi's house number is seven and mine eight" }, hint: "NOH-mor — both o's closed as in \"go\", and no English -er on the end. Nomor satu is \"number one\" and also \"the best\". Keep it apart from jumlah, which is a total rather than a label." },
        { id: "id-u14l2-tepat", type: "vocab", front: "tepat", reading: "tepat", meaning: "exact", example: { jp: "Jam tujuh tepat dan kereta datang.", en: "Seven o'clock exactly and the train comes." }, accept: ["exactly", "precise", "right on", "accurate"], drill: { jp: "Jam delapan tepat Budi mulai bekerja", en: "At eight exactly Budi starts work" }, hint: "tuh-PAHT — swallowed e. After a time it means \"on the dot\": jam tujuh tepat. It also means correct, which puts it next to benar. Do NOT confuse it with tempat, a place — tepat has no m." },
        { id: "id-u14l2-kirakira", type: "vocab", front: "kira-kira", reading: "kirakira", meaning: "roughly", example: { jp: "Kira-kira sepuluh orang datang ke acara.", en: "Roughly ten people came to the event." }, accept: ["approximately", "about", "around", "give or take"], drill: { jp: "Kira-kira lima orang datang hari Minggu", en: "Roughly five people came on Sunday" }, hint: "KEE-ra KEE-ra. Kira on its own is to guess, and doubling it makes the estimate — another doubling that builds a new word rather than a plural. Put it in front of the number: kira-kira sepuluh." },
        { id: "id-u14l2-setengah", type: "vocab", front: "setengah", reading: "setengah", meaning: "half", example: { jp: "Saya mau setengah gula di kopi saya.", en: "I want half the sugar in my coffee." }, accept: ["a half", "one half", "50 percent"], drill: { jp: "Budi mau setengah gula di kopi", en: "Budi wants half the sugar in his coffee" }, hint: "suh-tuh-NGAH — three syllables, hum before the last, breathed h. It is se- (one) plus tengah (middle). ⚠️ For half past an hour Indonesian counts FORWARD: setengah tujuh is half past SIX, \"halfway to seven\". That one catches absolutely everybody." },
      ],
    },
    {
      id: "id-u14l3",
      unit: 14,
      lesson: 3,
      title: "Benar atau salah — pilih yang cocok",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say whether something is right or wrong, and choose the one that matches.",
      items: [
        { id: "id-u14l3-benar", type: "vocab", front: "benar", reading: "benar", meaning: "correct", example: { jp: "Nomor rumah itu benar dan tidak salah.", en: "That house number is correct and not wrong." }, accept: ["right", "true", "accurate"], drill: { jp: "Nomor rumah itu benar dan tepat", en: "That house number is correct and exact" }, hint: "buh-NAR — swallowed e. Benar? asks \"is that right?\" and Benar! confirms it. Betul is the everyday twin and you will hear Betul! far more often. Benar also intensifies: panas benar is \"really hot\"." },
        { id: "id-u14l3-salah", type: "vocab", front: "salah", reading: "salah", meaning: "wrong", example: { jp: "Jadwal kereta ini salah dan saya terlalu lambat.", en: "This train timetable is wrong and I am too slow." }, accept: ["incorrect", "a mistake", "at fault", "error"], drill: { jp: "Jadwal kereta itu salah dan lama", en: "That train timetable is wrong and old" }, hint: "SAH-lah, breathed h — the opposite of benar. It is also blame: Salah saya, \"my fault\". Watch out for salah satu, which means \"one of them\" and not \"the wrong one\"." },
        { id: "id-u14l3-mirip", type: "vocab", front: "mirip", reading: "mirip", meaning: "similar", example: { jp: "Wajah Budi mirip dengan wajah ayah.", en: "Budi's face is similar to his father's face." }, accept: ["resembling", "looks like", "close to", "a lookalike"], drill: { jp: "Wajah Budi mirip dengan wajah kakak", en: "Budi's face is similar to his sibling's" }, hint: "MEE-rip. It takes dengan, the way sama and berbeda do. Mirip is about LOOKS specifically — two faces, two shirts, two buildings — where seperti compares anything at all. Mirip is the narrower word." },
        { id: "id-u14l3-cocok", type: "vocab", front: "cocok", reading: "cocok", meaning: "to match", example: { jp: "Warna biru cocok dengan warna putih.", en: "Blue goes well with white." }, accept: ["to suit", "fit", "go well with", "suitable"], drill: { jp: "Warna hijau cocok dengan warna kuning", en: "Green goes well with yellow" }, hint: "CHOH-chok — BOTH c's are CH. It takes dengan and stretches across matching, suiting and agreeing: a colour going with another, a shoe fitting, two people getting on. Cocok! alone is \"deal, that works\"." },
        { id: "id-u14l3-pilih", type: "vocab", front: "pilih", reading: "pilih", meaning: "to choose", example: { jp: "Saya pilih yang merah karena lebih bagus.", en: "I choose the red one because it is better." }, accept: ["choose", "to pick", "pick", "select"], drill: { jp: "Budi pilih yang merah karena bagus", en: "Budi chooses the red one because it is good" }, hint: "PEE-lih, breathed h. Standard Indonesian also writes memilih with the prefix and both are correct — the bare form is what you say while choosing out loud, like tunggu and tanya. Pair it with yang: pilih yang merah, \"pick the red one\"." },
        { id: "id-u14l3-coba", type: "vocab", front: "coba", reading: "coba", meaning: "to try", example: { jp: "Coba obat ini dan Anda akan sembuh.", en: "Try this medicine and you will recover." }, accept: ["try", "to attempt", "attempt", "have a go"], drill: { jp: "Coba obat itu dan Anda sembuh", en: "Try that medicine and you recover" }, hint: "CHOH-ba — c is CH. In front of another verb it turns an order into a suggestion: coba lihat, \"have a look\". Mencoba is the fuller written form, and coba-coba doubled is trying something casually without committing." },
      ],
    },
    {
      id: "id-u14l4",
      unit: 14,
      lesson: 4,
      title: "Jumlah, ukuran, dan jarak",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say how many altogether, how far away, and how many times — and ask for one more.",
      items: [
        { id: "id-u14l4-jumlah", type: "vocab", front: "jumlah", reading: "jumlah", meaning: "total", example: { jp: "Jumlah orang di acara kira-kira sepuluh.", en: "The total number of people at the event is roughly ten." }, accept: ["amount", "the total", "sum", "quantity"], drill: { jp: "Jumlah orang di acara kira-kira lima", en: "The total at the event is roughly five" }, hint: "JOOM-lah, breathed h. It is a TOTAL where nomor is a label: jumlah anak is how many children, nomor anak would be a child's assigned number. Jumlahnya berapa? is \"how many altogether?\"." },
        { id: "id-u14l4-ukuran", type: "vocab", front: "ukuran", reading: "ukuran", meaning: "size", example: { jp: "Ukuran kamar ini lebih kecil daripada kamar Budi.", en: "This room's size is smaller than Budi's room." }, accept: ["the size", "measurement", "dimension"], drill: { jp: "Ukuran kamar itu lebih kecil sekarang", en: "That room's size is smaller now" }, hint: "oo-KOO-rahn. Built from ukur, to measure, plus -an — the ending that turns a verb into the thing it produces, exactly as pekerjaan comes from bekerja. Ukuran apa? is \"what size?\" when you are buying clothes." },
        { id: "id-u14l4-jarak", type: "vocab", front: "jarak", reading: "jarak", meaning: "distance", example: { jp: "Jarak dari rumah saya ke pasar pendek.", en: "The distance from my house to the market is short." }, accept: ["the distance", "a gap", "range"], drill: { jp: "Jarak dari rumah Budi ke pasar pendek", en: "The distance from Budi's house to the market is short" }, hint: "JAH-rahk — J of judge, and a final k you barely release. It pairs with dari … ke: jarak dari A ke B. Keep it apart from jarang, rarely — jarak ends in k, jarang in the hum." },
        { id: "id-u14l4-kali", type: "vocab", front: "kali", reading: "kali", meaning: "times", example: { jp: "Saya minum obat dua kali setiap hari.", en: "I take medicine twice every day." }, accept: ["occasions", "a time", "multiplied by"], drill: { jp: "Budi minum obat dua kali setiap hari", en: "Budi takes medicine twice every day" }, hint: "KAH-lee — it counts OCCASIONS: dua kali (twice), tiga kali (three times). This is the root that sekali (very) is built on, and knowing sekali tells you nothing whatsoever about dua kali — which is exactly why it earns its own card. In arithmetic it is also \"multiplied by\"." },
        { id: "id-u14l4-tambah", type: "vocab", front: "tambah", reading: "tambah", meaning: "to add", example: { jp: "Tolong tambah gula di teh saya.", en: "Please add sugar to my tea." }, accept: ["add", "to increase", "plus", "put in more"], drill: { jp: "Tolong tambah gula di teh panas", en: "Please add sugar to the hot tea" }, hint: "TAHM-bah, breathed h. In a warung, Tambah! means \"another one please\" — it is how you order a second helping. Menambah is the fuller written form, and tambah is the plus sign in arithmetic." },
        { id: "id-u14l4-bagian", type: "vocab", front: "bagian", reading: "bagian", meaning: "part", example: { jp: "Bagian pertama pekerjaan saya selesai.", en: "The first part of my work is finished." }, accept: ["a part", "section", "portion", "share"], drill: { jp: "Bagian pertama pekerjaan Budi sudah selesai", en: "The first part of Budi's work is already finished" }, hint: "bah-GEE-ahn — hard g, and the -an ending again, this time on bagi, to divide. Bagian tubuh is a body part, bagian pertama the first section. At work it also means a department." },
      ],
    },
  ],
};
