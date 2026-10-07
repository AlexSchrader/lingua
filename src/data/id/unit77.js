// ID Unit 77 — Jiwa, iman, dan moral ("Soul, faith and morality") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u77–u87). The 12 conventions in unit1.js and the 10 A2 conventions
// in unit21.js BIND this file. Read both before editing.
//
// THE HOLE THIS FILLS, measured against all 1200 A1+A2 cards. The A2 band taught
// the EXTERNALS of belief and stopped there: `agama` · `berdoa` · `masjid` ·
// `gereja` · `puasa` · `hari raya` · `upacara`. Zero words for a soul, a spirit,
// faith, sin, scripture, a prophet, heaven, hell, or moral conduct. A learner who
// can name a mosque and cannot say "faith" has the German `die Frage` shape: the
// building, and not the thing it is for. In Indonesia, where religion is a field
// on the national ID card, that is not an advanced topic.
//
// WHAT IS DELIBERATELY NOT HERE, each for a named reason:
//   `moral`   front and English gloss differ by two letters, so the produce card
//             is a copy task. Same rejection A2 made for `skor`. `akhlak` is
//             carded instead and carries the meaning. THE UNIT TITLE KEEPS THE
//             WORD because `moral` is ordinary Indonesian and the title names the
//             theme, not the card list.
//   `keimanan` second card off root `iman` whose gloss would sit on top of it.
//   `dewa`    a Hindu deity. `pura` and `wihara` carry the non-Muslim strand
//             without naming individual gods, which is a content call, not a
//             vocabulary one.
//   `doa`     root of `berdoa`, which is already taught, and the noun adds
//             nothing a learner cannot read off the verb.
//
// GLOSSES THAT WERE REWRITTEN BECAUSE THE GRADER COLLIDED THEM. `normalizeMeaning`
// strips a leading "to " and "a/an/the", so the obvious gloss was already owned:
//   `roh`    "a spirit" -> `semangat` owns "spirit". Carded as "a spirit being".
//   `batin`  "the inner self" -> `hati` owns it. Carded as "the innermost feelings".
//   `iman`   "faith" -> `agama` accepts "faith". Carded as "belief in God".
// None of those three is visible to `lint:curriculum`, which compares exact
// lowercased strings.
//
// ROOT NOTE: `menyembah` is NOT a derivation of anything taught — root `sembah`
// appears nowhere in the 1200. `berkah` is NOT `berkat` (taught, "thanks to");
// one letter apart, two different words, and the hint says so.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT77 = {
  id: "id-u77",
  lang: "id",
  title: "Jiwa, iman, dan moral",
  order: 77,
  stage: "b1",
  lessons: [
    {
      id: "id-u77l1",
      unit: 77,
      lesson: 1,
      title: "Jiwa, roh, dan iman",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Talk about the inner, non-physical side of a person — soul, spirit, faith — and say that something is a matter of belief rather than of the body.",
      items: [
        { id: "id-u77l1-jiwa", type: "vocab", front: "jiwa", reading: "jiwa", meaning: "the soul", example: { jp: "Agama berbicara tentang jiwa, bukan tentang badan.", en: "Religion speaks about the soul, not about the body." }, accept: ["a person's soul", "the human soul"], drill: { jp: "Agama berbicara tentang jiwa", en: "Religion speaks about the soul" }, hint: "JEE-wa. The non-physical part of a person, set against badan, the body. Indonesian also counts people in jiwa on official forms, the way English says \"souls\" in a census." },
        { id: "id-u77l1-roh", type: "vocab", front: "roh", reading: "roh", meaning: "a spirit being", example: { jp: "Cerita lama desa itu tentang roh di hutan.", en: "That village's old story is about a spirit in the forest." }, accept: ["an unseen spirit", "a spirit of the dead"], drill: { jp: "Ada roh di hutan itu", en: "There is a spirit in that forest" }, hint: "One syllable, ROH, with a breathy h at the end. A spirit as a BEING, where jiwa is the soul inside a living person. Careful: semangat is already the \"spirit\" of enthusiasm, which is why this card is glossed a spirit BEING." },
        { id: "id-u77l1-rohani", type: "vocab", front: "rohani", reading: "rohani", meaning: "spiritual", example: { jp: "Dia mencari sesuatu yang rohani, bukan uang.", en: "He is looking for something spiritual, not money." }, accept: ["of the spirit", "non-material"], drill: { jp: "Dia mencari sesuatu yang rohani", en: "He is looking for something spiritual" }, hint: "roh plus -ani, a borrowed Arabic adjective ending: roh-HA-nee. It describes the whole inner domain — books, music or needs can all be rohani." },
        { id: "id-u77l1-batin", type: "vocab", front: "batin", reading: "batin", meaning: "the innermost feelings", example: { jp: "Wajah dia tenang tetapi batin dia kesal.", en: "His face is calm but inwardly he is upset." }, accept: ["one's inner life", "what is felt deep inside"], drill: { jp: "Batin dia kesal sejak kemarin", en: "He has been upset inside since yesterday" }, hint: "BA-tin. The hidden half of the pair lahir (outward) and batin — what is really going on behind a calm face. Indonesians apologise at hari raya with \"mohon maaf lahir dan batin\": forgive me outwardly and inwardly." },
        { id: "id-u77l1-iman", type: "vocab", front: "iman", reading: "iman", meaning: "belief in God", example: { jp: "Tidak ada orang yang bisa mengukur iman.", en: "Nobody can measure faith." }, accept: ["religious conviction", "the faith a believer holds"], drill: { jp: "Tidak ada yang bisa mengukur iman", en: "Nobody can measure faith" }, hint: "EE-mahn. The CONVICTION, where agama is the religion you belong to — a person can have agama on a form and little iman in their heart, and Indonesians say exactly that. Do not confuse it with imam, the man who leads the prayer." },
        { id: "id-u77l1-takdir", type: "vocab", front: "takdir", reading: "takdir", meaning: "fate", example: { jp: "Nenek saya percaya pada takdir.", en: "My grandmother believes in fate." }, accept: ["destiny", "what is decreed"], drill: { jp: "Nenek saya percaya pada takdir", en: "My grandmother believes in fate" }, hint: "tahk-DEER. What has been decided in advance and cannot be argued with. It is a comfort word as often as a hard one: Indonesians say sudah takdirnya about a loss the way English says \"it was meant to be\"." },
      ],
    },
    {
      id: "id-u77l2",
      unit: 77,
      lesson: 2,
      title: "Kitab, nabi, dan umat",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Name the book, the founder-figure, the clergy and the congregation of a religion, and do it for more than one of the religions practised in Indonesia.",
      items: [
        { id: "id-u77l2-kitab", type: "vocab", front: "kitab", reading: "kitab", meaning: "a scripture", example: { jp: "Setiap agama punya kitab sendiri.", en: "Every religion has its own scripture." }, accept: ["a holy book", "a sacred text"], drill: { jp: "Setiap agama punya kitab sendiri", en: "Every religion has its own scripture" }, hint: "KEE-tahb. Not any book — buku is the ordinary word. kitab is the SACRED one, so a maths textbook is a buku and never a kitab." },
        { id: "id-u77l2-nabi", type: "vocab", front: "nabi", reading: "nabi", meaning: "a prophet", example: { jp: "Cerita tentang nabi itu ada di dalam kitab.", en: "The story about that prophet is in the scripture." }, accept: ["a messenger of God", "one who brings God's word"], drill: { jp: "Cerita tentang nabi ada di kitab", en: "The story about the prophet is in the scripture" }, hint: "NA-bee. A figure who carries a message from God. Indonesians put Nabi before the name as a title, the way English says \"the Prophet\"." },
        { id: "id-u77l2-imam", type: "vocab", front: "imam", reading: "imam", meaning: "a prayer leader", example: { jp: "Imam di masjid itu masih muda.", en: "The prayer leader at that mosque is still young." }, accept: ["the man who leads the prayer", "a mosque's prayer leader"], drill: { jp: "Imam di masjid itu masih muda", en: "The prayer leader at that mosque is still young" }, hint: "EE-mahm, and you have just met iman — one letter apart, and the two are constantly mixed up by learners. iman is the belief; imam is the person standing at the front." },
        { id: "id-u77l2-pendeta", type: "vocab", front: "pendeta", reading: "pendeta", meaning: "a pastor", example: { jp: "Pendeta itu bekerja di gereja kecil di desa.", en: "That pastor works at a small church in the village." }, accept: ["a Protestant minister", "a church minister"], drill: { jp: "Pendeta itu bekerja di gereja kecil", en: "That pastor works at a small church" }, hint: "pen-DEH-ta. The Protestant minister of a gereja. Indonesia has six officially recognised religions, so a course that can only staff the masjid is only a sixth finished." },
        { id: "id-u77l2-biksu", type: "vocab", front: "biksu", reading: "biksu", meaning: "a Buddhist monk", example: { jp: "Biksu itu makan sayur saja.", en: "That monk eats only vegetables." }, accept: ["a monk", "a Buddhist religious"], drill: { jp: "Biksu itu makan sayur saja", en: "That monk eats only vegetables" }, hint: "BEEK-soo. The shaven-headed, robed monk of Buddhism, who lives in a wihara. A biksu keeps rules about food and money that a pendeta or an imam does not." },
        { id: "id-u77l2-umat", type: "vocab", front: "umat", reading: "umat", meaning: "a religious community", example: { jp: "Umat di kota itu merayakan hari raya bersama.", en: "The religious community in that city celebrates the holy day together." }, accept: ["the followers of a religion", "a congregation"], drill: { jp: "Umat di kota itu merayakan hari raya", en: "The community in that city celebrates the holy day" }, hint: "OO-maht. Everyone who follows one religion, taken together — umat Islam, umat Kristen. masyarakat is society in general; umat is society sorted by faith." },
      ],
    },
    {
      id: "id-u77l3",
      unit: 77,
      lesson: 3,
      title: "Ibadah dan tempat suci",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what an act of worship is, call a place sacred, and name a temple belonging to a religion other than your own.",
      items: [
        { id: "id-u77l3-ibadah", type: "vocab", front: "ibadah", reading: "ibadah", meaning: "religious worship", example: { jp: "Puasa dan berdoa adalah bentuk ibadah.", en: "Fasting and praying are forms of worship." }, accept: ["an act of devotion", "religious observance"], drill: { jp: "Puasa adalah bentuk ibadah", en: "Fasting is a form of worship" }, hint: "ee-BA-dah. The umbrella word for everything done FOR God: praying, fasting, giving. upacara is a ceremony of any kind, including a flag-raising at school; ibadah is specifically religious." },
        { id: "id-u77l3-menyembah", type: "vocab", front: "menyembah", reading: "menyembah", meaning: "to bow down in worship", example: { jp: "Mereka menyembah di tempat yang sangat tua.", en: "They worship at a very old place." }, accept: ["to venerate", "to prostrate oneself before"], drill: { jp: "Mereka menyembah di tempat itu", en: "They worship at that place" }, hint: "muh-nyum-BAH, with the single ny hum. The root sembah is a deep bow with the palms together, so the verb carries the physical gesture, not just the feeling." },
        { id: "id-u77l3-suci", type: "vocab", front: "suci", reading: "suci", meaning: "sacred", example: { jp: "Tempat ini suci, jadi kita harus melepas sepatu.", en: "This place is sacred, so we have to take off our shoes." }, accept: ["holy", "set apart as holy"], drill: { jp: "Tempat ini suci dan sangat tenang", en: "This place is sacred and very calm" }, hint: "SOO-chee — remember c is CH. Set it against murni, which is \"pure\" in the chemical or honest sense: water is murni, a mosque is suci." },
        { id: "id-u77l3-kuil", type: "vocab", front: "kuil", reading: "kuil", meaning: "a temple", example: { jp: "Kuil itu ada di dekat pasar lama.", en: "The temple is near the old market." }, accept: ["a place of worship for Hindus or Chinese Indonesians", "a shrine building"], drill: { jp: "Kuil itu ada dekat pasar lama", en: "That temple is near the old market" }, hint: "KOO-eel, two syllables. The general word for a temple. For the Balinese Hindu one Indonesians say pura, and for the Buddhist monastery, wihara — both of which are the next two cards." },
        { id: "id-u77l3-pura", type: "vocab", front: "pura", reading: "pura", meaning: "a Balinese temple", example: { jp: "Di Bali ada pura di hampir setiap desa.", en: "In Bali there is a temple in almost every village." }, accept: ["a Hindu temple in Bali", "a Balinese Hindu shrine"], drill: { jp: "Di Bali ada pura setiap desa", en: "In Bali there is a temple in every village" }, hint: "POO-ra. Specifically the open-walled Balinese Hindu temple, and you will see the word on half the road signs on the island. It is NOT pura-pura, the reduplication you already know for \"to pretend\" — same spelling doubled, unrelated meaning." },
        { id: "id-u77l3-wihara", type: "vocab", front: "wihara", reading: "wihara", meaning: "a Buddhist monastery", example: { jp: "Biksu itu tinggal di wihara di atas gunung.", en: "That monk lives in a monastery up on the mountain." }, accept: ["a vihara", "a Buddhist temple complex"], drill: { jp: "Biksu itu tinggal di wihara", en: "That monk lives in a monastery" }, hint: "wee-HA-ra. Where a biksu lives. The w is an English w, not a v." },
      ],
    },
    {
      id: "id-u77l4",
      unit: 77,
      lesson: 4,
      title: "Dosa, pahala, dan akhlak",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Describe an act as a sin or as earning merit, name heaven and hell, and say that someone's moral conduct is good or bad.",
      items: [
        { id: "id-u77l4-dosa", type: "vocab", front: "dosa", reading: "dosa", meaning: "a sin", example: { jp: "Bohong itu dosa kecil, tetapi tetap dosa.", en: "Lying is a small sin, but it is still a sin." }, accept: ["a wrongdoing against God", "transgression"], drill: { jp: "Bohong itu dosa kecil tetapi tetap dosa", en: "Lying is a small sin but still a sin" }, hint: "DOH-sa. A wrong measured against God, where salah is just a mistake and bersalah is legal guilt. Indonesians use it lightly too: makan kue itu dosa, \"eating that cake is a sin\"." },
        { id: "id-u77l4-surga", type: "vocab", front: "surga", reading: "surga", meaning: "heaven", example: { jp: "Semua agama punya cerita tentang surga.", en: "Every religion has a story about heaven." }, accept: ["paradise", "the afterlife of the blessed"], drill: { jp: "Setiap agama punya cerita tentang surga", en: "Every religion has a story about heaven" }, hint: "SOOR-ga, with the r tapped. Also used the way English uses \"paradise\" about a beach — Bali itu surga." },
        { id: "id-u77l4-neraka", type: "vocab", front: "neraka", reading: "neraka", meaning: "hell", example: { jp: "Dia takut pada neraka sejak kecil.", en: "He has been afraid of hell since he was small." }, accept: ["the place of punishment after death", "perdition"], drill: { jp: "Dia takut pada neraka sejak kecil", en: "He has been afraid of hell since childhood" }, hint: "nuh-RA-ka. The opposite number to surga. Indonesians also stretch it to anything unbearable: macet di Jakarta itu neraka." },
        { id: "id-u77l4-pahala", type: "vocab", front: "pahala", reading: "pahala", meaning: "spiritual merit", example: { jp: "Membantu tetangga juga mendapat pahala.", en: "Helping a neighbour also earns merit." }, accept: ["credit earned by a good deed", "reward from God"], drill: { jp: "Membantu tetangga juga mendapat pahala", en: "Helping a neighbour also earns merit" }, hint: "pa-HA-la. The credit side of the ledger that dosa is the debit side of. hadiah is a prize a person gives you; pahala is not handed over by anyone you can see." },
        { id: "id-u77l4-berkah", type: "vocab", front: "berkah", reading: "berkah", meaning: "a blessing", example: { jp: "Anak itu berkah untuk keluarga kami.", en: "That child is a blessing for our family." }, accept: ["divine favour", "grace received"], drill: { jp: "Anak itu berkah untuk keluarga kami", en: "That child is a blessing for our family" }, hint: "BUR-kah. One letter from berkat, which you already know as \"thanks to\" — berkat bantuanmu, thanks to your help. Two different words that happen to share a root: berkah is the blessing itself, berkat points at the cause of something good." },
        { id: "id-u77l4-akhlak", type: "vocab", front: "akhlak", reading: "akhlak", meaning: "moral conduct", example: { jp: "Sekolah itu mengajar ilmu dan juga akhlak.", en: "That school teaches knowledge and also moral conduct." }, accept: ["ethics as practised", "good moral behaviour"], drill: { jp: "Sekolah itu mengajar ilmu dan akhlak", en: "That school teaches knowledge and moral conduct" }, hint: "AHK-lahk — the kh is one breathy sound at the back of the mouth, not k plus h. How a person actually BEHAVES towards others, judged morally. It shows up constantly in Indonesian school and sermon language." },
      ],
    },
  ],
};
