// ID Unit 18 — Kegiatan sehari-hari ("Everyday activities") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u15–u20), authored 2026-09-27. The 12 conventions in unit1.js BIND
// this file. Scaffold slot was "Vocabulary 4" — retitled to what it teaches.
// "Routines" is one of the three themes block 1 left for this range, and this is
// that unit; `menulis`, `membaca`, `pelajaran` and `nyanyi` are four of the fronts
// it reserved.
//
// WHAT THE UNIT IS: a day, from the first meal to the last thing you watch, plus
// the two lessons of school language the course had no words for at all.
//   l1  the shape of a day: sarapan → berangkat → sampai → pulang, and terlambat
//   l2  free time: menonton · bermain · menyanyi · berolahraga · tertawa · berenang
//   l3  school: membaca · menulis · buku · pelajaran · kelas · ujian
//   l4  asking and answering: pertanyaan · menjawab · menjelaskan · mengulang ·
//       mencatat · contoh
//
// 🚨 l4 CLOSES A THIRD HOLE OF THE SAME CLASS AS "WE". u1 teaches `tanya`, to ask,
// and through u14 the course had **no noun for a question and no verb for
// answering** — the exact shape of the German failure convention 3 names, where a
// course teaches *survey* and *enquiry* and never teaches **question**. `tanya`'s
// own hint in u1 already names `pertanyaan` as existing; this is where it becomes
// a card.
//
// AFFIX ROOTS CHECKED BY HAND (the LEXEME probe fails open for Indonesian — see
// unit1.js convention 3; a `free` verdict on a PREFIXED form is worth nothing):
//   pertanyaan → tanya   ⚠️ `tanya` IS taught (u1, "to ask"). Carded anyway, and
//     the test passes cleanly: knowing the verb "ask" does not give you the noun,
//     and Indonesian builds it with a per-…-an frame a beginner cannot predict.
//     Drill-safe — findWholeWord("tanya") does not match inside "pertanyaan"
//     (preceded by r), so neither card can blank part of the other.
//   pelajaran → ajar     ⚠️ the root's family IS taught — `belajar`, `mengajar`
//     and `pelajar` are all in u3. This is the FIFTH word off one root, which
//     unit1.js convention 3 names as the worked example of why Indonesian affixes
//     are derivations: "ajar → belajar → mengajar → pelajar → pelajaran is five
//     words, not one." Drill-safe: findWholeWord("pelajar") does not match inside
//     "pelajaran" (followed by a). Block 1 reserved `pelajaran` for this range.
//   terlambat → lambat   ⚠️ `lambat` IS taught (u10, "slow"). Carded: late is not
//     slow, and the hint says so because the slip is common. Drill-safe (preceded
//     by r).
//   menonton → tonton · bermain → main · menyanyi → nyanyi · berolahraga →
//   olahraga · tertawa → tawa · berenang → renang · membaca → baca · menulis →
//   tulis · menjawab → jawab · menjelaskan → jelas · mengulang → ulang ·
//   mencatat → catat · berangkat → angkat · mengantar → antar
//     NONE of those fourteen roots is taught anywhere in u1–u20.
//   sarapan · pulang · sampai · buku · kelas · ujian · contoh — all roots.
//
// ⚠️ `tertawa` CARRIES ter- AND IS NOT A SUPERLATIVE. u15 teaches `terakhir` and
// u14 `terlalu`, both built on ter-; on a verb the prefix does something else
// entirely (it marks an event that simply happens), and the hint says so rather
// than leaving the learner to over-generalise the superlative reading.
//
// ⚠️ `sampai` IS GLOSSED "until", NOT "to arrive", AND THAT IS MEASURED. u13's
// `datang` ("to come") already carries "to arrive" in its accept[], so the obvious
// gloss would have normalised to "arrive" and made one typed answer right for two
// cards. "until" is also the sense the learner has already met twice without being
// told — `sampai jumpa` and `sampai nanti` in u2 are literally "until we meet" and
// "until later" — so the card retro-explains two phrases it already owns.
// Convention 8 covers carding the bare word beside those phrases.
//
// ⚠️ `menonton` IS GLOSSED "to watch a show", NOT "to watch". Two merged cards
// already accept a bare "watch": u5's `jam` (a wristwatch) and u13's `melihat`.
// The longer gloss is not padding — it is the difference between menonton and
// melihat, which do not substitute for one another in Indonesian.
//
// ONE CONFUSABLE PAIR NAMED IN ITS HINT: `kelas` (class) against u17's `gelas`
// (drinking glass). One letter, and the g/k contrast is the whole word.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT18 = {
  id: "id-u18",
  lang: "id",
  title: "Kegiatan sehari-hari",
  order: 18,
  stage: "a1",
  lessons: [
    {
      id: "id-u18l1",
      unit: 18,
      lesson: 1,
      title: "Berangkat dan pulang",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Walk through your day out loud: eat breakfast, set off, say how long you work, get home — or explain that you were late.",
      items: [
        { id: "id-u18l1-sarapan", type: "vocab", front: "sarapan", reading: "sarapan", meaning: "breakfast", example: { jp: "Saya sarapan nasi goreng dan teh setiap pagi.", en: "I have fried rice and tea for breakfast every morning." }, accept: ["morning meal", "to eat breakfast", "the first meal"], drill: { jp: "Budi sarapan telur dan kopi", en: "Budi has eggs and coffee for breakfast" }, hint: "sah-RAH-pahn. Both the meal and the verb — Sudah sarapan? means have you had breakfast. An Indonesian sarapan is usually rice rather than bread, and it happens early. Makan pagi means the same and is a shade more formal." },
        { id: "id-u18l1-berangkat", type: "vocab", front: "berangkat", reading: "berangkat", meaning: "to set off", example: { jp: "Kereta berangkat jam tujuh pagi setiap hari.", en: "The train departs at seven in the morning every day." }, accept: ["to leave on a journey", "to leave for somewhere", "to start out"], drill: { jp: "Kami berangkat ke Bali besok", en: "We set off for Bali tomorrow" }, hint: "buh-RAHNG-kaht, a hum in the middle. It means leaving FOR somewhere, which is why a timetable, a station announcement and an airport board all use it. Pergi is simply to go; berangkat is to set out on a journey." },
        { id: "id-u18l1-pulang", type: "vocab", front: "pulang", reading: "pulang", meaning: "to go home", example: { jp: "Ayah saya pulang dari kantor jam enam sore.", en: "My father comes home from the office at six in the evening." }, accept: ["to return home", "to head home", "homeward"], drill: { jp: "Siti pulang dari sekolah sekarang", en: "Siti is coming home from school now" }, hint: "POO-lahng, hum at the end. Specifically going back where you belong — your house, your home town, your country. Kembali is to return anywhere; pulang is to return HOME. Pulang kampung, going back to the village, is the great annual migration." },
        { id: "id-u18l1-sampai", type: "vocab", front: "sampai", reading: "sampai", meaning: "until", example: { jp: "Saya bekerja dari pagi sampai malam setiap hari.", en: "I work from morning until night every day." }, accept: ["up to", "as far as", "to reach", "till"], drill: { jp: "Kami tunggu sampai jam delapan", en: "We wait until eight o'clock" }, hint: "SAHM-pai, the ai as in EYE. It marks the far end of a stretch of time or distance: dari pagi sampai malam, dari Jakarta sampai Bali. It is also the verb to arrive — Saya sampai jam tujuh. You have met it twice already: sampai jumpa and sampai nanti are literally until we meet and until later." },
        { id: "id-u18l1-terlambat", type: "vocab", front: "terlambat", reading: "terlambat", meaning: "late", example: { jp: "Kami terlambat karena kereta pagi tidak datang.", en: "We were late because the morning train did not come." }, accept: ["delayed", "behind time", "too late"], drill: { jp: "Budi terlambat ke sekolah lagi", en: "Budi is late for school again" }, hint: "tuhr-LAHM-baht. Ter- built on lambat, slow — but it does NOT mean slow: it means late, past the time you were due. A slow train is lambat, a late one is terlambat, and swapping them is one of the commonest beginner slips." },
        { id: "id-u18l1-mengantar", type: "vocab", front: "mengantar", reading: "mengantar", meaning: "to drop off", example: { jp: "Ibu mengantar anak ke sekolah setiap pagi.", en: "Mother takes the children to school every morning." }, accept: ["to take someone somewhere", "to deliver", "to escort"], drill: { jp: "Ayah mengantar tamu ke pasar", en: "Father takes the guest to the market" }, hint: "muh-NGAHN-tahr, the ng as one hum. Root antar. It covers taking a PERSON somewhere and delivering a THING — a courier also mengantar. The opposite errand, going to fetch someone, is menjemput." },
      ],
    },
    {
      id: "id-u18l2",
      unit: 18,
      lesson: 2,
      title: "Bermain dan menonton",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you do with your free time — watch, play, sing, swim — and describe something that made everyone laugh.",
      items: [
        { id: "id-u18l2-menonton", type: "vocab", front: "menonton", reading: "menonton", meaning: "to watch a show", example: { jp: "Kami menonton acara itu di rumah setiap malam.", en: "We watch that programme at home every night." }, accept: ["to watch television", "to watch a match", "to watch a film"], drill: { jp: "Budi menonton acara di kantor", en: "Budi watches a programme at the office" }, hint: "muh-NOHN-tohn. Root tonton, and nonton bare is what everybody says: Mau nonton? It is watching a SHOW — a film, a match, television. Melihat is simply to see, and the two do not substitute for each other." },
        { id: "id-u18l2-bermain", type: "vocab", front: "bermain", reading: "bermain", meaning: "to play", example: { jp: "Anak tetangga saya bermain di halaman sampai sore.", en: "My neighbour's children play in the yard until the afternoon." }, accept: ["play", "to have fun", "to play a game"], drill: { jp: "Siti bermain dengan anak kecil", en: "Siti plays with a small child" }, hint: "buhr-MAIN, the ai as in EYE. Root main, and main bare is the everyday form: Ayo main! It covers playing games, playing an instrument and children playing outside. A toy is a mainan." },
        { id: "id-u18l2-menyanyi", type: "vocab", front: "menyanyi", reading: "menyanyi", meaning: "to sing", example: { jp: "Anak kecil itu menyanyi dengan ibu di kamar.", en: "That small child sings with his mother in the room." }, accept: ["sing", "to sing a song", "to break into song"], drill: { jp: "Tamu itu menyanyi di halaman", en: "That guest sings in the yard" }, hint: "muh-NYAH-nyee — two ny sounds, each of them one sound. Root nyanyi. A song is a lagu and a singer a penyanyi. Singing together is an ordinary part of an Indonesian gathering rather than a performance, so expect to be handed a microphone." },
        { id: "id-u18l2-berolahraga", type: "vocab", front: "berolahraga", reading: "berolahraga", meaning: "to exercise", example: { jp: "Kakak saya berolahraga di halaman setiap pagi.", en: "My older sibling exercises in the yard every morning." }, accept: ["to do sport", "to work out", "to keep fit"], drill: { jp: "Budi berolahraga dengan teman kemarin", en: "Budi exercised with a friend yesterday" }, hint: "buhr-oh-lah-RAH-ga, five syllables and a hard g. Root olahraga, which on its own is the noun sport — literally the training of the body. Olahraga apa? asks which sport you do, and bulu tangkis, badminton, is the one everybody plays." },
        { id: "id-u18l2-tertawa", type: "vocab", front: "tertawa", reading: "tertawa", meaning: "to laugh", example: { jp: "Semua tamu tertawa karena acara itu bagus.", en: "All the guests laughed because that show was good." }, accept: ["laugh", "to burst out laughing", "to have a laugh"], drill: { jp: "Budi dan Siti tertawa bersama", en: "Budi and Siti laugh together" }, hint: "tuhr-TAH-wa. Root tawa, which is laughter itself. ⚠️ The ter- here is NOT the one in terakhir: on a verb it marks something that simply happens to you, and laughing is a good example. Ketawa is the everyday spoken form." },
        { id: "id-u18l2-berenang", type: "vocab", front: "berenang", reading: "berenang", meaning: "to swim", example: { jp: "Kami berenang setiap hari Minggu dengan teman.", en: "We swim every Sunday with friends." }, accept: ["swim", "to go swimming", "to have a swim"], drill: { jp: "Anak kecil itu bisa berenang", en: "That small child can swim" }, hint: "buh-ruh-NAHNG, hum at the end. Root renang. A swimming pool is a kolam renang, and Bisa berenang? — can you swim — is a real and frequent question in a country of islands." },
      ],
    },
    {
      id: "id-u18l3",
      unit: 18,
      lesson: 3,
      title: "Di sekolah",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Talk about a lesson: say what you read, what you write, where your class is and when the exam is.",
      items: [
        { id: "id-u18l3-membaca", type: "vocab", front: "membaca", reading: "membaca", meaning: "to read", example: { jp: "Saya membaca buku baru di kamar setiap malam.", en: "I read a new book in my room every night." }, accept: ["read", "to read out", "to go through a text"], drill: { jp: "Budi membaca buku di halaman", en: "Budi reads a book in the yard" }, hint: "muhm-BAH-cha — the c is CH. Root baca, and Baca ini! is the command. Bacaan is a reading or a text. Indonesian spelling is nearly phonemic, so reading aloud is far easier here than in English once the sound rules are yours." },
        { id: "id-u18l3-menulis", type: "vocab", front: "menulis", reading: "menulis", meaning: "to write", example: { jp: "Pelajar itu menulis nama dan tanggal di buku.", en: "That pupil writes his name and the date in the book." }, accept: ["write", "to write out", "to put in writing"], drill: { jp: "Siti menulis nama saya di meja", en: "Siti writes my name on the table" }, hint: "muh-NOO-lees. Root tulis, and Tulis nama Anda is what a form tells you to do. Tulisan is handwriting or a piece of writing, and a penulis is a writer." },
        { id: "id-u18l3-buku", type: "vocab", front: "buku", reading: "buku", meaning: "book", example: { jp: "Buku ini lebih mahal daripada buku itu.", en: "This book is more expensive than that book." }, accept: ["a book", "notebook", "volume"], drill: { jp: "Saya membeli buku baru kemarin", en: "I bought a new book yesterday" }, hint: "BOO-koo. Any book, and a school exercise book too — buku tulis is a writing book. From the Dutch boek. A bookshop is a toko buku, built exactly like every other toko." },
        { id: "id-u18l3-pelajaran", type: "vocab", front: "pelajaran", reading: "pelajaran", meaning: "lesson", example: { jp: "Pelajaran bahasa Indonesia mulai jam delapan pagi.", en: "The Indonesian lesson starts at eight in the morning." }, accept: ["a lesson", "school subject", "a class session"], drill: { jp: "Pelajaran hari ini sangat susah", en: "Today's lesson is very difficult" }, hint: "puh-lah-JAH-rahn. The fifth word off the root ajar, after belajar, mengajar and pelajar — one root, five words, and not one of them guessable from another. A pelajaran is the lesson itself or a school subject, and also a lesson learned the hard way." },
        { id: "id-u18l3-kelas", type: "vocab", front: "kelas", reading: "kelas", meaning: "class", example: { jp: "Kelas kami ada di lantai dua sekolah.", en: "Our class is on the second floor of the school." }, accept: ["a classroom", "a year group", "grade"], drill: { jp: "Ada dua puluh pelajar di kelas", en: "There are twenty pupils in the class" }, hint: "KUH-lahs, swallowed e. The room, the group of pupils and the school year all at once — kelas satu is year one. ⚠️ One letter from gelas, a drinking glass, and the g/k contrast is the whole difference." },
        { id: "id-u18l3-ujian", type: "vocab", front: "ujian", reading: "ujian", meaning: "exam", example: { jp: "Ujian bahasa Indonesia hari Kamis sangat susah.", en: "Thursday's Indonesian exam was very difficult." }, accept: ["a test", "an examination", "assessment"], drill: { jp: "Saya belajar untuk ujian besok", en: "I am studying for tomorrow's exam" }, hint: "oo-JEE-ahn. Root uji, to test. Any exam or test, at school or for a driving licence. Lulus ujian is to pass one, and the national school exams dominate an Indonesian teenager's year." },
      ],
    },
    {
      id: "id-u18l4",
      unit: 18,
      lesson: 4,
      title: "Bertanya dan menjawab",
      cefr: "A1",
      dominantMode: "produce",
      canDo: "Answer a question, and ask someone to explain it again or give you an example.",
      items: [
        { id: "id-u18l4-pertanyaan", type: "vocab", front: "pertanyaan", reading: "pertanyaan", meaning: "question", example: { jp: "Pertanyaan itu sangat susah untuk semua pelajar.", en: "That question was very difficult for all the pupils." }, accept: ["a question", "query", "the thing asked"], drill: { jp: "Saya punya satu pertanyaan untuk guru", en: "I have one question for the teacher" }, hint: "puhr-tah-NYAH-ahn. Built from tanya, to ask, with a per-…-an frame around it — the noun for the thing itself. ⚠️ Knowing this noun does not build you a question: Indonesian makes one with a question word, with a rise in the voice, or by adding ya on the end." },
        { id: "id-u18l4-menjawab", type: "vocab", front: "menjawab", reading: "menjawab", meaning: "to answer", example: { jp: "Pelajar itu menjawab pertanyaan guru dengan benar.", en: "That pupil answered the teacher's question correctly." }, accept: ["answer", "to reply", "to respond"], drill: { jp: "Budi menjawab dengan cepat sekali", en: "Budi answers very quickly" }, hint: "muhn-JAH-wahb, with the final b sounded almost as a p. Root jawab, which is itself the noun an answer; jawaban is the commoner noun. Jawab! is the command." },
        { id: "id-u18l4-menjelaskan", type: "vocab", front: "menjelaskan", reading: "menjelaskan", meaning: "to explain", example: { jp: "Guru menjelaskan pelajaran itu dengan contoh baru.", en: "The teacher explains that lesson with a new example." }, accept: ["explain", "to make clear", "to spell out"], drill: { jp: "Ibu menjelaskan jadwal kereta itu", en: "Mother explains that train schedule" }, hint: "muhn-juh-LAHS-kahn. Built on jelas, clear, with a me- in front and a -kan behind — literally to make clear. Tidak jelas, not clear, is the polite way to say you did not follow, and it invites exactly this verb in reply." },
        { id: "id-u18l4-mengulang", type: "vocab", front: "mengulang", reading: "mengulang", meaning: "to repeat", example: { jp: "Guru mengulang pertanyaan itu karena saya tidak mengerti.", en: "The teacher repeats the question because I do not understand." }, accept: ["repeat", "to do again", "to say again"], drill: { jp: "Siti mengulang pelajaran setiap malam", en: "Siti repeats the lesson every night" }, hint: "muh-NGOO-lahng, the ng as one hum. Root ulang. Ulangi! with the -i on the end is the command you will actually hear. Ulang tahun — literally a repeated year — is a birthday, which is worth knowing for its own sake." },
        { id: "id-u18l4-mencatat", type: "vocab", front: "mencatat", reading: "mencatat", meaning: "to write down", example: { jp: "Saya mencatat nomor dan tanggal di buku kecil.", en: "I write down the number and the date in a small book." }, accept: ["to note down", "to make a note", "to jot down"], drill: { jp: "Guru mencatat nama semua pelajar", en: "The teacher notes down every pupil's name" }, hint: "muhn-CHAH-taht — the c is CH. Root catat. It is writing something down to keep, where menulis is writing in general: you menulis a letter and mencatat a phone number. The note itself is a catatan." },
        { id: "id-u18l4-contoh", type: "vocab", front: "contoh", reading: "contoh", meaning: "example", example: { jp: "Guru memberi contoh yang mudah untuk semua pelajar.", en: "The teacher gives an easy example for all the pupils." }, accept: ["an example", "a sample", "an instance"], drill: { jp: "Ini contoh yang sangat bagus", en: "This is a very good example" }, hint: "CHOHN-toh — c is CH, and the h on the end is breathed. Contohnya and misalnya both mean for example and open a sentence; contoh alone is the example itself. Contohnya? is what you say to ask someone to be concrete." },
      ],
    },
  ],
};
