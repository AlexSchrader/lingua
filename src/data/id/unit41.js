// ID Unit 41 — Di atas, di bawah, di antara ("Above, below, between") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 3 (u41–u50), authored 2026-09-29. The 12 conventions in unit1.js and
// the 10 A2 conventions in unit21.js BIND this file. Read both before editing.
//
// RETITLED AND RETHEMED from the scaffold's "Vocabulary 2 (A2)". That title names
// no subject at all — `lint.js` SCAFFOLD_TITLE_PATTERNS hard-errors on
// /^Vocabulary \d+( \((?:A2|B1|B2)\))?$/ the moment a lesson unlocks — so the
// theme was chosen by measurement, not by the slot.
//
// THE HOLE THIS FILLS, and it is the one block 1 explicitly asked for. A1's u7l2
// taught `depan` · `belakang` · `sebelah` · `dekat` · `jauh`. Nothing in the 720
// authored cards teaches ABOVE, BELOW, BETWEEN or OUTSIDE, and nothing teaches the
// prepositions `kepada` · `pada` · `tanpa` · `melalui`. unit21.js's reserved list
// names all of them and says of one:
//     "⚠️ `antara` is the worst of them: u30's own `perbedaan` card wants
//      'perbedaan antara A dan B' and cannot say it. **Card it early.**"
// It is carded here, in l2, and this unit is the earliest slot block 3 owns.
//
// ⚠️ TAKEN FROM BLOCK 1's RESERVED LIST, DELIBERATELY: atas · bawah · antara ·
// luar · kepada · pada · ketika. Block 2 (u31–u40) is authoring concurrently and
// may have taken some of the same words — the merge seat dedupes. Flagged in the
// hand-back rather than taken silently.
//
// ⛔ `oleh` IS ON THAT LIST AND IS **DECLINED HERE, WITH A REASON**. It marks the
// AGENT of a passive, and every natural example needs one — "Surat itu dibaca oleh
// ibu". A2 convention A6 pushed `di-` passives to B1, so carding `oleh` now would
// either teach the passive a band early or ship an unnatural example. Both are
// worse than the gap. It belongs in the B1 unit that teaches `di-`, alongside it.
// (`oleh karena itu` is already taught as a fixed connector, so nothing is
// unreadable in the meantime.)
//
// ⚠️ WHOLE-WORD DRILL HAZARDS CHECKED BY HAND (A2 convention A7 — lint uses
// `.includes()`, the router uses `findWholeWord`, and a hyphen is not a letter):
//   `atas`  — `atasan` (u24l1) contains it at index 0 but is followed by a LETTER,
//             so findWholeWord does not match. Safe both ways.
//   `luar`  — same shape inside `keluar` (u12l3) and `keluarga` (u3l1): preceded by
//             a letter, no match.
//   `tengah`— inside `setengah` (u15l1), preceded by `e`. No match.
//   `hingga`— inside `sehingga` (u26l3), preceded by `e`. No match.
//   `melalui`— contains `lalu` (u15l2) at index 2, preceded by `e`. No match.
//   `pada`  — `kepada` contains it at index 2, preceded by `e`, so no match. The
//             two cards sit in the SAME lesson and each drill carries only its own
//             form; checked through the real router, not by eye.
//   `bagi`  — `membagi` (u25l2) contains it at index 3, preceded by `m`. No match.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (`check-front.mjs`'s LEXEME verdict
// fails open for Indonesian — unit1.js convention 3):
//   permukaan → muka    root not taught.
//   melalui   → lalu    ⚠️ `lalu` IS taught ("then"). Carded anyway: "then" does
//     not give you "by way of". Different word, convention 3's test passes.
//   menuju    → tuju    root not taught; `tujuan` (u23l3, a purpose) is the other
//     card off it. Neither whole-word-contains the other. See A6.
//   bagi      → bagi    ⚠️ the root IS the front. `membagi` (u25l2, to divide) is
//     already a card off it, and `sebagian` (u49l4, some of it) is a third. Three
//     genuinely different words off one root — A6 permits it, and the three sit in
//     three different units.
//   sesuai    → suai    root not taught, and not itself a word in use.
//   kemudian · menjelang · ketika · sejak · saat · dasar · turun · ujung ·
//   pinggir · lewat · tanpa · antara · atas · bawah · tengah · luar ·
//   kepada · pada — all roots.
//
// ⚠️ ONE SAME-LESSON COMPONENT PAIR IS DELIBERATE: `pada` and `kepada` sit
// adjacent in l3, and `kepada` contains `pada` as a substring. It is NOT a router
// hazard — measured through the real `findWholeWord`, the `e` before `pada` inside
// `kepada` blocks a whole-word match in both directions, so neither cloze can steal
// the other's blank. And teaching them adjacent IS the point: the ke- is the whole
// difference between a place and a person, the same way block 1 put `tahu` and
// `kenal` side by side. A choice card offering one against the other tests exactly
// the distinction the lesson is for.
//
// ⛔ NO ter- FORM IS CARDED IN THIS UNIT. `terhadap` (toward) was the obvious
// candidate and A2 convention A5 forbids it: ter- on a root the learner does not
// have is deferred to B1, and `hadap` is untaught.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT41 = {
  id: "id-u41",
  lang: "id",
  title: "Di atas, di bawah, di antara",
  order: 41,
  stage: "a2",
  lessons: [
    {
      id: "id-u41l1",
      unit: 41,
      lesson: 1,
      title: "Atas dan bawah",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Place a thing in the vertical — on top of, underneath, in the middle, at the base — and say that something has come down.",
      items: [
        { id: "id-u41l1-atas", type: "vocab", front: "atas", reading: "atas", meaning: "above", example: { jp: "Buku saya ada di atas meja.", en: "My book is on top of the table." }, accept: ["on top of", "the upper part", "overhead"], drill: { jp: "Kucing itu tidur di atas kursi", en: "That cat is sleeping on top of the chair" }, hint: "AH-tas. It almost never stands alone — you want di atas for where a thing IS and ke atas for movement upward. ⚠️ Do not read it inside atasan, your boss at work: that word is built on it but means the person above you, not a position." },
        { id: "id-u41l1-bawah", type: "vocab", front: "bawah", reading: "bawah", meaning: "underneath", example: { jp: "Sepatu saya ada di bawah tempat tidur.", en: "My shoes are underneath the bed." }, accept: ["below", "the lower part", "under"], drill: { jp: "Anjing itu duduk di bawah meja", en: "That dog is sitting under the table" }, hint: "BAH-wah, both a's open. The exact pair to atas, and the same rule: di bawah for position, ke bawah for going down. Bawah tanah, literally under-ground, is how Indonesian says a basement." },
        { id: "id-u41l1-tengah", type: "vocab", front: "tengah", reading: "tengah", meaning: "the middle", example: { jp: "Meja besar itu ada di tengah kamar.", en: "That big table is in the middle of the room." }, accept: ["the centre", "halfway along", "the midst"], drill: { jp: "Ada pohon tinggi di tengah jalan", en: "There is a tall tree in the middle of the road" }, hint: "TUH-ngah, first e swallowed, ng one hum. You already know setengah for half — the same word with se- in front, because half is what the middle divides. Tengah hari is midday; tengah malam is midnight." },
        { id: "id-u41l1-turun", type: "vocab", front: "turun", reading: "turun", meaning: "to go down", example: { jp: "Harga mobil itu turun tahun ini.", en: "The price of that car went down this year." }, accept: ["to come down", "to drop", "to get off a vehicle"], drill: { jp: "Kami turun dari kereta di kota", en: "We got off the train in the city" }, hint: "TOO-roon. The mirror of naik, which you learned as to ride: naik is to go UP or to board, turun is to go DOWN or to get off. It works for prices, rain and fever alike — hujan turun, demam turun." },
        { id: "id-u41l1-dasar", type: "vocab", front: "dasar", reading: "dasar", meaning: "the base", example: { jp: "Ada gula di dasar gelas saya.", en: "There is sugar at the base of my glass." }, accept: ["the bottom", "the foundation", "the floor of something"], drill: { jp: "Ada air dingin di dasar botol", en: "There is cold water at the bottom of the bottle" }, hint: "DAH-sar. The inside bottom of a container or of water — bawah is the space UNDER a thing, dasar is the thing's own floor. It is also basis in the abstract sense: dasar yang kuat, a strong foundation." },
        { id: "id-u41l1-permukaan", type: "vocab", front: "permukaan", reading: "permukaan", meaning: "the surface", example: { jp: "Permukaan jalan ini keras dan panas.", en: "The surface of this road is hard and hot." }, accept: ["the outer face", "the top face", "the exposed side"], drill: { jp: "Permukaan meja itu halus sekali", en: "The surface of that table is very smooth" }, hint: "puhr-moo-KAH-an — four syllables, and the last two split apart. Built on muka, a face, so it is literally the face of a thing. It pairs with dasar: permukaan air is the water's surface, dasar is its bottom." },
      ],
    },
    {
      id: "id-u41l2",
      unit: 41,
      lesson: 2,
      title: "Antara dan ujung",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Locate a thing relative to two others, name the outside and the ends of it, and say which way something is heading.",
      items: [
        { id: "id-u41l2-antara", type: "vocab", front: "antara", reading: "antara", meaning: "between", example: { jp: "Ada pasar antara sekolah dan kantor.", en: "There is a market between the school and the office." }, accept: ["in between", "amid", "among"], drill: { jp: "Ada jalan kecil antara dua rumah", en: "There is a small road between two houses" }, hint: "an-TAH-ra. The two things go either side of dan: antara pagi dan siang, antara saya dan kamu. ⚠️ THIS IS THE WORD THE COURSE HAS BEEN MISSING — you cannot say perbedaan antara dua kota, the difference between two cities, without it. Sementara looks similar and is unrelated." },
        { id: "id-u41l2-luar", type: "vocab", front: "luar", reading: "luar", meaning: "the outside", example: { jp: "Anak kecil itu bermain di luar rumah.", en: "That small child is playing outside the house." }, accept: ["outdoors", "beyond", "the exterior"], drill: { jp: "Teman saya ada di luar kelas", en: "My friend is outside the classroom" }, hint: "LOO-ar, two syllables. Di luar is outside and di dalam is inside — you met dalam as deep, and this is its other job. Luar negeri, literally outside-the-country, is the everyday word for abroad. It hides inside keluar, to go out, which you already know." },
        { id: "id-u41l2-pinggir", type: "vocab", front: "pinggir", reading: "pinggir", meaning: "the edge", example: { jp: "Kami duduk di pinggir sungai.", en: "We sat at the edge of the river." }, accept: ["the side of something", "the rim", "the margin"], drill: { jp: "Ada warung di pinggir jalan besar", en: "There is a food stall at the edge of the big road" }, hint: "PEENG-gheer — ngg is the hum plus a hard g, the trap from unit 1. The border of a flat thing: pinggir jalan is the roadside, pinggir kota the outskirts. Minggir! is the shout for get out of the way." },
        { id: "id-u41l2-ujung", type: "vocab", front: "ujung", reading: "ujung", meaning: "the tip", example: { jp: "Ada toko kecil di ujung jalan ini.", en: "There is a small shop at the end of this road." }, accept: ["the far end", "the point of something", "the extremity"], drill: { jp: "Nama saya ada di ujung surat itu", en: "My name is at the end of that letter" }, hint: "OO-joong, one ng hum. The END of something long — a road, a queue, a finger, a story. Keep it apart from akhir, which is the end in TIME, and from pinggir, which is the edge running along the side." },
        { id: "id-u41l2-menuju", type: "vocab", front: "menuju", reading: "menuju", meaning: "to head for", example: { jp: "Kereta ini menuju pantai.", en: "This train is heading for the beach." }, accept: ["bound for", "to make for", "in the direction of"], drill: { jp: "Kami menuju rumah nenek pagi ini", en: "We are heading for grandmother's house this morning" }, hint: "muh-NOO-joo. Built on the same root as tujuan, a purpose — you head TOWARD your aim. It is what a station board and a bus front say: menuju Jakarta. In speech ke plus a place is far commoner; menuju is the written and announced form." },
        { id: "id-u41l2-lewat", type: "vocab", front: "lewat", reading: "lewat", meaning: "to go past", example: { jp: "Kami lewat pasar setiap pagi.", en: "We go past the market every morning." }, accept: ["to pass by", "via a route", "gone by"], drill: { jp: "Mobil itu lewat depan rumah saya", en: "That car goes past in front of my house" }, hint: "LEH-wat. Three everyday jobs: going past a place, going BY a route (lewat jalan kecil), and time being past (jam tujuh lewat, gone seven). Melewati is the formal transitive twin. Do not confuse it with melalui in the next lesson, which is by MEANS of something." },
      ],
    },
    {
      id: "id-u41l3",
      unit: 41,
      lesson: 3,
      title: "Kepada dan pada",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Use the written prepositions A1 never taught — mark a recipient, an abstract point in time, the absence of a thing, and the channel something came through.",
      items: [
        { id: "id-u41l3-kepada", type: "vocab", front: "kepada", reading: "kepada", meaning: "addressed to", example: { jp: "Saya menulis surat kepada guru saya.", en: "I wrote a letter to my teacher." }, accept: ["to a person", "toward someone", "for the attention of"], drill: { jp: "Dia memberi uang kepada anak itu", en: "He gave money to that child" }, hint: "kuh-pah-DAH. The ke you know points at PLACES; kepada points at PEOPLE. Saya pergi ke pasar, but saya berbicara kepada ibu. In relaxed speech people simply say sama or ke, so treat kepada as the careful and written choice — which is where you will read it." },
        { id: "id-u41l3-pada", type: "vocab", front: "pada", reading: "pada", meaning: "at a point in time", example: { jp: "Kami bertemu pada hari Jumat.", en: "We met on Friday." }, accept: ["on a date", "at a moment", "upon"], drill: { jp: "Rapat itu mulai pada jam delapan", en: "That meeting starts at eight o'clock" }, hint: "PAH-da. Where di marks a PLACE, pada marks a time or an abstract point: pada tahun ini, pada awalnya. It also carries on or upon for something abstract — tergantung pada cuaca. Everyday speech drops it before a day or a clock time; writing keeps it." },
        { id: "id-u41l3-tanpa", type: "vocab", front: "tanpa", reading: "tanpa", meaning: "without", example: { jp: "Saya minum kopi tanpa gula.", en: "I drink coffee without sugar." }, accept: ["with none of", "in the absence of", "free of"], drill: { jp: "Dia pergi ke pasar tanpa uang", en: "He went to the market without money" }, hint: "TAHN-pa. The exact opposite of dengan, with — and it works in front of a verb too: tanpa berpikir, without thinking. This is the piece that lets you say no rather than only tidak: tanpa alasan, for no reason at all." },
        { id: "id-u41l3-melalui", type: "vocab", front: "melalui", reading: "melalui", meaning: "by way of", example: { jp: "Saya tahu berita itu melalui teman saya.", en: "I learned that news through my friend." }, accept: ["by means of", "through a channel", "across something"], drill: { jp: "Kami masuk kota melalui jalan lama", en: "We entered the city by way of an old road" }, hint: "muh-lah-LOO-ee, four syllables. It is the MEANS or the channel, not merely the route: melalui telepon, melalui surat. Its root is lalu, the word you know for then and for past. Lewat is the everyday spoken cousin when the route is physical." },
        { id: "id-u41l3-bagi", type: "vocab", front: "bagi", reading: "bagi", meaning: "for a recipient", example: { jp: "Berita itu penting bagi semua orang.", en: "That news is important for everyone." }, accept: ["as regards someone", "from the point of view of", "where someone is concerned"], drill: { jp: "Pekerjaan ini susah bagi anak kecil", en: "This work is hard for a small child" }, hint: "BAH-ghee, hard g. Untuk is for a PURPOSE; bagi is for a PERSON's sake or viewpoint — bagi saya is close to as far as I am concerned. ⚠️ The same root gives membagi, to divide, which you already know: sharing something out is what dividing it does." },
        { id: "id-u41l3-sesuai", type: "vocab", front: "sesuai", reading: "sesuai", meaning: "in line with", example: { jp: "Harga itu sesuai dengan kontrak kami.", en: "That price is in line with our contract." }, accept: ["matching", "as agreed", "consistent with"], drill: { jp: "Jadwal baru sesuai dengan rencana kami", en: "The new schedule is in line with our plan" }, hint: "suh-SOO-ai, the last two vowels sliding into one. It nearly always takes dengan after it. Cocok, which you know, is the everyday it fits or it suits; sesuai is the formal matches what was agreed — the word on a form, a contract or a sign." },
      ],
    },
    {
      id: "id-u41l4",
      unit: 41,
      lesson: 4,
      title: "Ketika dan sejak",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Pin an event to a moment — when it happened, the instant itself, how long since, and how far it ran.",
      items: [
        { id: "id-u41l4-ketika", type: "vocab", front: "ketika", reading: "ketika", meaning: "at the moment when", example: { jp: "Ketika saya kecil, saya tinggal di desa.", en: "When I was small, I lived in a village." }, accept: ["at the time that", "just as", "back when"], drill: { jp: "Hujan datang ketika kami tidur", en: "The rain came while we were sleeping" }, hint: "kuh-TEE-ka. The clause-opening when, for something that HAPPENED — kalau is the when of a condition and kapan is the question. Waktu does this job in speech; ketika is the neutral written one, and is the form you will read." },
        { id: "id-u41l4-saat", type: "vocab", front: "saat", reading: "saat", meaning: "the instant", example: { jp: "Saat itu saya sangat lelah.", en: "At that instant I was very tired." }, accept: ["the very moment", "the point in time", "just then"], drill: { jp: "Saat guru masuk semua anak diam", en: "The moment the teacher came in every child went quiet" }, hint: "SAH-at, two syllables with a tiny break between the a's. A NOUN, where ketika is a connector — saat ini is right now, pada saat itu at that moment. Waktu is a stretch of time; saat is a single point inside it." },
        { id: "id-u41l4-sejak", type: "vocab", front: "sejak", reading: "sejak", meaning: "ever since", example: { jp: "Saya belajar bahasa ini sejak tahun lalu.", en: "I have been studying this language since last year." }, accept: ["starting from", "as of", "from a point onward"], drill: { jp: "Dia bekerja di sini sejak bulan Mei", en: "He has worked here since May" }, hint: "suh-JAHK, final k a glottal catch. Indonesian has no perfect tense, so sejak plus a starting point IS how you say have been doing: sejak pagi, since this morning. Its natural partner is sampai or hingga for the far end." },
        { id: "id-u41l4-hingga", type: "vocab", front: "hingga", reading: "hingga", meaning: "right up until", example: { jp: "Kami bekerja hingga malam.", en: "We worked right up until night." }, accept: ["all the way to", "through to", "up to the point of"], drill: { jp: "Toko itu buka hingga jam sepuluh", en: "That shop is open until ten o'clock" }, hint: "HEENG-ga, ngg the hum plus a hard g. The written twin of sampai, which you already know — sampai in speech, hingga in writing and on signs. ⚠️ You have also met sehingga, so that: the same word with se- in front, and it marks a RESULT, not a limit." },
        { id: "id-u41l4-kemudian", type: "vocab", front: "kemudian", reading: "kemudian", meaning: "next in order", example: { jp: "Kami makan, kemudian kami pergi.", en: "We ate, and next we left." }, accept: ["thereupon", "the next thing", "then in a sequence"], drill: { jp: "Dia menulis surat kemudian pergi ke kantor", en: "He wrote a letter and then went to the office" }, hint: "kuh-moo-DEE-an. It steps through a SEQUENCE, so it sits between two whole clauses: A, kemudian B. Lalu does the same job in speech and is shorter; kemudian is the written, more formal step. Keep it apart from nanti, which is later on, not next." },
        { id: "id-u41l4-menjelang", type: "vocab", front: "menjelang", reading: "menjelang", meaning: "as it approaches", example: { jp: "Menjelang malam, cuaca menjadi dingin.", en: "As night approached, the weather turned cold." }, accept: ["shortly before", "in the run-up to", "coming up to"], drill: { jp: "Jalan menjadi macet menjelang hari Sabtu", en: "The road gets jammed in the run-up to Saturday" }, hint: "muhn-juh-LAHNG. Sebelum is simply before; menjelang is the narrowing stretch just before a thing arrives, so it carries anticipation — menjelang ujian, menjelang pagi. Newspapers use it constantly for the days before an event." },
      ],
    },
  ],
};
