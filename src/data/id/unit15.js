// ID Unit 15 — Orang, urutan, dan kebiasaan ("People, order and habits") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u15–u20), authored 2026-09-27. The 12 conventions in unit1.js BIND
// this file. Block 3 is the CLOSING block: u20 takes Indonesian to 20/20.
//
// 🚨 THIS UNIT EXISTS TO CLOSE A HOLE, NOT TO ADD A THEME. The scaffold stubbed
// it "Vocabulary 1" — a slot with no subject, which is what a Strand D coverage
// unit is for. Retitled to what it actually teaches.
//
// **INDONESIAN HAD NO WORD FOR "WE", AND NO WORD FOR "THEY".** Measured against
// TAUGHT-WORDS.md at 336 words / u1–u14: u3 owns pronouns and teaches `saya`,
// `Anda`, `kamu`, `dia` — and stops. So through u14 the course had:
//   • no first-person plural at all (`kita` AND `kami`, and Indonesian forces a
//     choice between them that English never makes)
//   • no third-person plural (`mereka`)
//   • no second-person plural (`kalian`)
// Block 2 had to rewrite an example around the first of those. u3 is merged, so
// as the closing seat it is this block's to fix — and l1 does it. This is the
// German `die Frage` failure exactly: a course that uses a concept constantly
// and never teaches it.
//
// THE INCLUSIVE/EXCLUSIVE LINE IS THE LESSON, so it is drawn three ways and the
// glosses carry it rather than a parenthetical:
//   `kita` = "we including you"   `kami` = "we excluding you"
// ⚠️ **A PARENTHETICAL WOULD NOT HAVE WORKED HERE, and that is measured.**
// `normalizeMeaning` (src/store/answer.js) STRIPS `(...)` before comparing, so
// "we (inclusive)" and "we (exclusive)" both normalise to **"we"** — one prompt
// with two right answers, which is the exact defect the gloss rule exists to
// stop. Block 1's house style (`sangat` = "very (before the word)") is fine where
// the two words are not a forced choice; here the distinction IS the card, so it
// has to survive normalisation. Neither card carries a bare "we" or "us" in its
// `accept[]`, for the same reason.
//
// THE OTHER THREE LESSONS ARE THE REST OF THE COVERAGE PASS, and every one of
// them is a measured gap, not a top-up:
//   l2  **no `sebelum` / `setelah`** — the course could say `dulu`, `nanti`,
//       `lalu`, `tadi` and `kemarin`, and could not order two events. Plus
//       `awal` against u9's `akhir`, and `terakhir` against u14's `pertama`.
//   l3  **frequency had a hole in the middle.** u9 taught `sering` and `jarang`;
//       `selalu`, `biasanya` and `kadang-kadang` were missing, so the ladder ran
//       often → rarely with nothing at the top, the middle or the default.
//   l4  **no gender words and no `laki-laki`/`perempuan` at all**, in a language
//       that marks no gender grammatically and therefore has to say it lexically.
//
// AFFIX ROOTS CHECKED BY HAND (the LEXEME probe fails open for Indonesian — see
// unit1.js convention 3; a `free` verdict on a PREFIXED form is worth nothing):
//   sebelum → belum   ⚠️ `belum` IS taught ("not yet"). Carded anyway: knowing
//     "not yet" does not give you "before". Drill-safe both ways —
//     findWholeWord("belum") does not match inside "sebelum" (preceded by e).
//   selalu → lalu     ⚠️ `lalu` IS taught ("ago"), and u14 already derived
//     `terlalu` from it. Third card off one root, and the same test passes: "ago"
//     does not give you "always". Drill-safe (preceded by e).
//   terakhir → akhir  ⚠️ `akhir` IS taught ("end"), and **u14 explicitly declined
//     the ter- superlative and named `terakhir` as the example it was declining.**
//     Carded here on purpose, and the difference is what is being taught: u14 was
//     declining ter- as a PATTERN card competing with `paling` (which it should
//     have — `paling` covers that ground and is always correct). `terakhir` is
//     carded as a LEXICAL word, glossed "final", because "kereta terakhir" is
//     daily vocabulary and not a superlative construction a learner assembles.
//     Block 1's reserved list put ter- superlatives in u15+; this is that slot.
//   sementara → mentara · sebentar → bentar · biasanya → biasa · berikut → ikut
//   masing-masing → masing · tetangga → tangga
//     NONE of those six roots is taught, and `masing` and `bentar` are not
//     independent words at all.
//   kita · kami · mereka · kalian · saling · awal · setelah · langsung · segera ·
//   laki-laki · perempuan · bayi · tamu · pacar — all roots.
//
// ⚠️ `kedua` WAS PLANNED FOR l2 AND IS DELIBERATELY NOT HERE. It fails
// convention 3's own test: ke- plus a number is a fully transparent ordinal, and
// u14's `pertama` hint already states the rule ("kedua, ketiga, kesepuluh"). A
// learner who knows `dua` and has read that hint already knows `kedua`, so a card
// would teach nothing. `sementara` took the slot.
//
// REDUPLICATIONS CARDED (convention 5 — non-plural doublings only):
//   `masing-masing`, `kadang-kadang`, `laki-laki`. All three build a new word;
//   none is the plural of anything. `masing`, `kadang` and `laki` are not carded.
//
// TWO NEAR-MISS PAIRS THE LEARNER WILL MIX UP, flagged in the hints rather than
// avoided, because avoiding them does not stop the confusion:
//   `setelah` (after) vs u7's `sebelah` (next to) — one letter
//   `sebentar` (briefly) vs `sementara` (meanwhile) — same se-, opposite jobs
//   `pacar` (sweetheart) vs u7's `pasar` (a market) — one letter
//
// ⚠️ `orang tua` (parents) IS NOT CARDED. It is `orang` + `tua`, both carded
// (u1 and u20 l1), and the compound is transparent from the parts. Carding it
// here would also put a phrase in u15 whose component is first taught in u20.
// Named in `tua`'s hint in u20 instead.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT15 = {
  id: "id-u15",
  lang: "id",
  title: "Orang, urutan, dan kebiasaan",
  order: 15,
  stage: "a1",
  lessons: [
    {
      id: "id-u15l1",
      unit: 15,
      lesson: 1,
      title: "Kita, kami, dan mereka",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say who is in the group you are talking about, and choose correctly between the we that includes your listener and the we that leaves them out.",
      items: [
        { id: "id-u15l1-kita", type: "vocab", front: "kita", reading: "kita", meaning: "we including you", example: { jp: "Kita semua bisa belajar bahasa Indonesia.", en: "All of us can learn Indonesian — you included." }, accept: ["we and you", "us including you", "all of us"], drill: { jp: "Kita semua belajar bahasa Indonesia", en: "All of us are learning Indonesian" }, hint: "KEE-ta. Indonesian has TWO words for we and you must pick one every single time. Kita INCLUDES the person you are talking to, so Kita makan? means shall we eat, you and me. English cannot make this distinction, which is exactly why it is easy to get wrong." },
        { id: "id-u15l1-kami", type: "vocab", front: "kami", reading: "kami", meaning: "we excluding you", example: { jp: "Kami tinggal di Jakarta dan Anda tinggal di Bali.", en: "We live in Jakarta and you live in Bali." }, accept: ["we not you", "us but not you", "we without you"], drill: { jp: "Kami tinggal di kota besar", en: "We live in a big city" }, hint: "KAH-mee. The other we: kami LEAVES OUT the person you are talking to. A family speaking to a guest says Kami sudah makan — we have eaten, you have not. Say kami where you meant kita and you have shut your listener out; say kita where you meant kami and you have volunteered them." },
        { id: "id-u15l1-mereka", type: "vocab", front: "mereka", reading: "mereka", meaning: "they", example: { jp: "Mereka datang ke rumah saya hari Minggu.", en: "They came to my house on Sunday." }, accept: ["them", "their", "those people"], drill: { jp: "Mereka datang ke rumah saya", en: "They come to my house" }, hint: "muh-REH-ka. One word for they, them and their, with no change of form anywhere: Mereka melihat saya, Saya melihat mereka, rumah mereka. Dia covers one person only, so the moment there are two you need this word." },
        { id: "id-u15l1-kalian", type: "vocab", front: "kalian", reading: "kalian", meaning: "you all", example: { jp: "Kalian semua sudah makan atau belum?", en: "Have all of you eaten yet?" }, accept: ["all of you", "you plural", "you guys", "you people"], drill: { jp: "Kalian semua sudah makan nasi", en: "All of you have eaten rice" }, hint: "kah-lee-AHN. The plural of kamu, so it carries kamu's informality — friends, classmates, children. To a room of people you do not know, Anda works for one or many and is always safe." },
        { id: "id-u15l1-masingmasing", type: "vocab", front: "masing-masing", reading: "masingmasing", meaning: "each one", example: { jp: "Kami masing-masing punya kamar sendiri di rumah itu.", en: "We each have our own room in that house." }, accept: ["each of them", "individually", "respectively", "each person"], drill: { jp: "Kami masing-masing punya kamar sendiri", en: "We each have our own room" }, hint: "MAH-sing MAH-sing. Another doubling that builds a new word rather than a plural — masing on its own is not used. It follows the people it splits up: Kami masing-masing. Setiap counts things one by one; masing-masing hands one to everybody." },
        { id: "id-u15l1-saling", type: "vocab", front: "saling", reading: "saling", meaning: "one another", example: { jp: "Teman saya dan teman Budi saling membantu setiap hari.", en: "My friend and Budi's friend help one another every day." }, accept: ["each other", "mutually", "both ways"], drill: { jp: "Mereka saling membantu setiap hari", en: "They help one another every day" }, hint: "SAH-ling. It goes straight in front of the verb and makes the action run both ways: saling membantu, saling melihat, saling memberi. Without it, Mereka membantu leaves open who is being helped." },
      ],
    },
    {
      id: "id-u15l2",
      unit: 15,
      lesson: 2,
      title: "Sebelum dan setelah",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Put two events in order — say which comes before, which comes after, which is first and which is last.",
      items: [
        { id: "id-u15l2-sebelum", type: "vocab", front: "sebelum", reading: "sebelum", meaning: "before", example: { jp: "Saya minum kopi sebelum saya pergi ke kantor.", en: "I drink coffee before I go to the office." }, accept: ["prior to", "earlier than", "ahead of"], drill: { jp: "Saya minum kopi sebelum pergi", en: "I drink coffee before going" }, hint: "suh-buh-LOOM, two swallowed e's. Look inside and you find belum, not yet — what is sebelum something has not happened yet. It takes either a time or a whole clause: sebelum jam tujuh, sebelum saya pergi." },
        { id: "id-u15l2-setelah", type: "vocab", front: "setelah", reading: "setelah", meaning: "after", example: { jp: "Setelah makan, kami selalu minum teh di dapur.", en: "After eating, we always drink tea in the kitchen." }, accept: ["afterwards", "once", "then"], drill: { jp: "Setelah makan kami minum teh", en: "After eating we drink tea" }, hint: "suh-tuh-LAH. The mirror of sebelum, and together they cover most of what English does with then. Sesudah means exactly the same and you will hear both. ⚠️ Do not confuse it with sebelah, next to — one letter apart and a completely different job." },
        { id: "id-u15l2-awal", type: "vocab", front: "awal", reading: "awal", meaning: "beginning", example: { jp: "Awal bulan Maret selalu sibuk di kantor saya.", en: "The beginning of March is always busy at my office." }, accept: ["the start", "early part", "outset"], drill: { jp: "Awal bulan selalu sibuk di kantor", en: "The beginning of the month is always busy at the office" }, hint: "AH-wahl. The opposite of akhir, the end, and used the same way: awal bulan, akhir bulan. As an adjective it means early — Saya datang awal, I arrived early." },
        { id: "id-u15l2-terakhir", type: "vocab", front: "terakhir", reading: "terakhir", meaning: "final", example: { jp: "Kereta terakhir pergi jam sepuluh malam.", en: "The last train leaves at ten at night." }, accept: ["the last one", "last of all", "at the end", "ultimate"], drill: { jp: "Kereta terakhir pergi jam sepuluh", en: "The last train leaves at ten" }, hint: "tuh-RAH-kheer — ter- built on akhir, the end, so it is the one at the end: hari terakhir, kereta terakhir. It is the partner of pertama. Ter- is also one way Indonesian says the most of something, but paling is the safe choice for that and terakhir is simply a word you will use daily." },
        { id: "id-u15l2-berikut", type: "vocab", front: "berikut", reading: "berikut", meaning: "next", example: { jp: "Kami akan pergi ke pasar minggu berikut.", en: "We will go to the market next week." }, accept: ["the next one", "following", "coming up"], drill: { jp: "Kami pergi ke pasar minggu berikut", en: "We go to the market next week" }, hint: "buh-REE-koot. From ikut, to follow, so it is the one that follows: minggu berikut, hari berikut. Berikutnya is the same word with a tail on it and is just as common. For times, depan does this job too — minggu depan is equally correct." },
        { id: "id-u15l2-sementara", type: "vocab", front: "sementara", reading: "sementara", meaning: "meanwhile", example: { jp: "Saya belajar di kamar, sementara ibu bekerja di dapur.", en: "I study in my room while my mother works in the kitchen." }, accept: ["in the meantime", "whereas", "for the time being"], drill: { jp: "Saya belajar sementara ibu bekerja", en: "I study while my mother works" }, hint: "suh-muhn-TAH-ra. It sets two things side by side, where sambil joins two things ONE person does at once: Saya makan sambil melihat langit, but Saya makan sementara Budi bekerja. On its own it also means temporary." },
      ],
    },
    {
      id: "id-u15l3",
      unit: 15,
      lesson: 3,
      title: "Selalu, biasanya, kadang-kadang",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how often you do something, and whether it happens straight away, urgently, or after a short wait.",
      items: [
        { id: "id-u15l3-selalu", type: "vocab", front: "selalu", reading: "selalu", meaning: "always", example: { jp: "Saya selalu minum kopi setiap pagi.", en: "I always drink coffee every morning." }, accept: ["every time", "at all times", "without fail"], drill: { jp: "Saya selalu minum kopi setiap pagi", en: "I always drink coffee every morning" }, hint: "suh-LAH-loo. Inside it is lalu, gone past — what has always gone by. It sits in front of the verb: selalu makan, selalu pergi. It is the top rung of the ladder selalu, sering, kadang-kadang, jarang, tidak pernah." },
        { id: "id-u15l3-biasanya", type: "vocab", front: "biasanya", reading: "biasanya", meaning: "usually", example: { jp: "Biasanya kami makan nasi goreng di warung dekat rumah.", en: "We usually eat fried rice at the food stall near our house." }, accept: ["normally", "as a rule", "most of the time"], drill: { jp: "Biasanya kami makan nasi goreng", en: "We usually eat fried rice" }, hint: "bee-ah-sah-NYA, ny as one sound. Biasa alone means ordinary, and the -nya tail turns it into an adverb. It can open the sentence or sit before the verb, and Indonesians reach for it constantly to soften a claim." },
        { id: "id-u15l3-kadangkadang", type: "vocab", front: "kadang-kadang", reading: "kadangkadang", meaning: "sometimes", example: { jp: "Kadang-kadang saya pergi ke pasar dengan sepeda.", en: "Sometimes I go to the market by bicycle." }, accept: ["now and then", "occasionally", "from time to time"], drill: { jp: "Kadang-kadang saya pergi dengan sepeda", en: "Sometimes I go by bicycle" }, hint: "KAH-dahng KAH-dahng, hum at the end of each half. A doubling that builds a new word, not a plural — kadang alone is rare. It sits between sering and jarang on the frequency ladder." },
        { id: "id-u15l3-langsung", type: "vocab", front: "langsung", reading: "langsung", meaning: "straight away", example: { jp: "Setelah bekerja saya langsung pergi ke rumah.", en: "After work I go straight home." }, accept: ["directly", "right away", "without stopping"], drill: { jp: "Saya langsung pergi ke rumah", en: "I go straight home" }, hint: "LAHNG-soong, a hum in the middle. Two jobs: right away in time, and direct with no stop in between — a kereta langsung runs without a change. Langsung saja! means just get on with it." },
        { id: "id-u15l3-segera", type: "vocab", front: "segera", reading: "segera", meaning: "immediately", example: { jp: "Saya harus segera minum obat ini karena saya sakit.", en: "I must take this medicine immediately because I am ill." }, accept: ["at once", "as soon as possible", "promptly"], drill: { jp: "Saya harus segera minum obat ini", en: "I must take this medicine immediately" }, hint: "suh-GUH-ra, hard g. Where langsung means with nothing in between, segera means soon and with urgency — it is what a doctor or a boss says. Secepatnya, as fast as possible, is the everyday spoken version." },
        { id: "id-u15l3-sebentar", type: "vocab", front: "sebentar", reading: "sebentar", meaning: "briefly", example: { jp: "Tunggu sebentar, saya mau bertemu dokter dulu.", en: "Wait a moment — I want to see the doctor first." }, accept: ["for a short while", "just a second", "a little while"], drill: { jp: "Tunggu sebentar saya mau bertemu dokter", en: "Wait a moment I want to see the doctor" }, hint: "suh-buhn-TAHR. The most useful word in an Indonesian queue: Sebentar! on its own means hold on, one moment. ⚠️ Keep it apart from sementara, meanwhile — they share the se-, but sebentar is about length and sementara is about two things at once." },
      ],
    },
    {
      id: "id-u15l4",
      unit: 15,
      lesson: 4,
      title: "Orang di sekitar kita",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Name the people around you by gender and by role, and say who lives next door and who is visiting.",
      items: [
        { id: "id-u15l4-lakilaki", type: "vocab", front: "laki-laki", reading: "lakilaki", meaning: "man", example: { jp: "Anak laki-laki itu tinggal di rumah sebelah.", en: "That boy lives in the house next door." }, accept: ["male", "a man", "boy"], drill: { jp: "Anak laki-laki itu tinggal di sini", en: "That boy lives here" }, hint: "LAH-kee LAH-kee. A doubling that is not a plural: laki on its own is an old word for husband, and the doubled form is the ordinary word for male. Anak laki-laki is a boy, orang laki-laki a man. Pria is the formal word you meet on signs and forms." },
        { id: "id-u15l4-perempuan", type: "vocab", front: "perempuan", reading: "perempuan", meaning: "woman", example: { jp: "Dokter perempuan itu sangat baik dan cepat.", en: "That woman doctor is very kind and quick." }, accept: ["female", "a woman", "girl", "lady"], drill: { jp: "Dokter perempuan itu sangat baik", en: "That woman doctor is very kind" }, hint: "puh-ruhm-POO-ahn, four syllables. The everyday word for female, used of people and animals alike. Anak perempuan is a girl. Wanita is the more formal and more flattering choice in writing." },
        { id: "id-u15l4-bayi", type: "vocab", front: "bayi", reading: "bayi", meaning: "baby", example: { jp: "Bayi itu tidur di kamar ibu setiap malam.", en: "That baby sleeps in his mother's room every night." }, accept: ["infant", "a baby", "newborn"], drill: { jp: "Bayi itu tidur di kamar ibu", en: "That baby sleeps in his mother's room" }, hint: "BAH-yee, y as the y of yes. Indonesian marks no number on nouns, so bayi is one baby or several as the situation decides — add dua or banyak when you need to be exact. Anak is a child of any age." },
        { id: "id-u15l4-tetangga", type: "vocab", front: "tetangga", reading: "tetangga", meaning: "neighbour", example: { jp: "Tetangga saya bekerja di sekolah dekat pasar.", en: "My neighbour works at the school near the market." }, accept: ["the neighbour", "next-door neighbour", "person next door"], drill: { jp: "Tetangga saya bekerja di sekolah", en: "My neighbour works at the school" }, hint: "tuh-TAHNG-ga — swallowed e, a hum, then a hard g. In Indonesia a tetangga is close family in practice: the word carries an expectation of help, so Tetangga saya baik is real praise. A whole neighbourhood is a kampung." },
        { id: "id-u15l4-tamu", type: "vocab", front: "tamu", reading: "tamu", meaning: "guest", example: { jp: "Kami punya tamu dari Jakarta hari Sabtu.", en: "We have a guest from Jakarta on Saturday." }, accept: ["a guest", "visitor", "company"], drill: { jp: "Kami punya tamu dari Jakarta", en: "We have a guest from Jakarta" }, hint: "TAH-moo. A tamu is an honour, and the room a house keeps for one is the ruang tamu. On a sign or a form it also means a visitor who has to sign in. Silakan is what you say to one." },
        { id: "id-u15l4-pacar", type: "vocab", front: "pacar", reading: "pacar", meaning: "sweetheart", example: { jp: "Pacar kakak saya tinggal di kota lain.", en: "My older sibling's sweetheart lives in another city." }, accept: ["girlfriend", "boyfriend", "partner"], drill: { jp: "Pacar kakak saya tinggal di Bali", en: "My older sibling's sweetheart lives in Bali" }, hint: "PAH-char — c is always CH in Indonesian. One word for boyfriend and girlfriend, because the language marks no gender. It means an unmarried partner; once you marry, the words are suami and istri. ⚠️ One letter from pasar, a market." },
      ],
    },
  ],
};
