// ID Unit 43 — Komputer dan jaringan ("Computers and networks") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 3 (u41–u50). unit1.js's 12 conventions and unit21.js's 10 A2
// conventions BIND this file. RETITLED AND RETHEMED from "Vocabulary 4 (A2)".
//
// THE HOLE: the digital half of the technology domain, and it is a total blank.
// Measured against all 720 merged cards, Indonesian had **no word for a computer,
// a screen, a network, a website, an app, a password, a user, typing, copying,
// deleting, downloading or uploading.** u42 took the electrical half; this unit
// takes the rest.
//
// ⚠️ SCOPE BOUNDARY WITH BLOCK 2, STATED EXPLICITLY. Block 2 (u31–u40) owns MEDIA
// AND COMMUNICATION. So this unit deliberately stops at the DEVICE and the
// NETWORK and does not touch telephony, messaging, news, television or email:
// `telepon` · `menelepon` · `pesan singkat` · `surel` · `berita` as a medium are
// all left to block 2 even though they are technology-adjacent. `menghubungkan`
// here is wiring two things together, not ringing a person up — `menghubungi`,
// the "get in touch with" one, is carded in u50 and the two hints cross-reference.
//
// ⛔ FIVE COGNATES ARE **NOT CARDED**, AND THE REASON IS MEASURED, NOT AESTHETIC.
// `normalizeMeaning` strips a leading a/an/the, so for each of these the front and
// its only honest English gloss reduce to the SAME STRING and the card becomes a
// copy task — block 1's `hotel` / `bus` rule (A10):
//     `internet` ("the internet" → "internet")   `data` ("data" → "data")
//     `video`    ("a video" → "video")           `robot` ("a robot" → "robot")
//     `digital`  ("digital" → "digital")
// `internet` is the painful one, and it is genuinely nothing to learn: identical
// spelling, near-identical pronunciation, same meaning. It is named in `jaringan`'s
// and `daring`'s hints so no learner is left unable to read it. What IS carded is
// the half a learner cannot guess: `daring` and `luring`, the Indonesian words for
// online and offline.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (convention 3):
//   mengetik      → ketik    root not taught.
//   menyalin      → salin    root not taught.
//   menghapus     → hapus    root not taught.
//   jaringan      → jaring   root not taught. ⚠️ `daring` and `luring` are BLENDS of
//     dalam/luar + jaringan, not affixed forms — the hints say so, because a
//     learner who sees the -ring inside them and guesses at a suffix will be wrong.
//   pengguna      → guna     root not taught. ⚠️ `menggunakan` (to use) is
//     PERMANENTLY BLOCKED by block 1 because `memakai` (u16l4) carries "to use" in
//     its accept[]. That block is about the GLOSS, not the root, so a pe- agent
//     noun off the same root with a completely different gloss is unaffected.
//   memasukkan    → masuk    ⚠️ `masuk` IS taught ("to enter"). This is the
//     me-…-kan valency pair A6 requires to be carded twice: `masuk` is you going
//     in, `memasukkan` is you putting something in. Drill-safe — "memasukkan"
//     contains "masuk" at index 3, preceded by `m`, so no whole-word match.
//   menghubungkan → hubung   root not taught; `menghubungi` (u50l1) is the other
//     card off it — the -kan/-i pair, in a different unit.
//   mengunduh     → unduh    root not taught.
//   mengunggah    → unggah   root not taught.
//   merekam       → rekam    root not taught; `rekaman` is the -an noun off it,
//     same lesson. Neither whole-word-contains the other, and the root itself is
//     not carded, so no lexeme is taught twice.
//   mencetak      → cetak    root not taught.
//   menemukan     → temu     ⚠️ `bertemu` IS taught ("to meet"). Carded anyway:
//     meeting a person is not discovering a thing, and convention 3's test passes.
//     Neither form whole-word-contains the other.
//   komputer · layar · teknologi · situs · aplikasi · sinyal · sandi · kamera ·
//   foto — all roots.
//
// ⚠️ `foto` IS ON BLOCK 1's RESERVED LIST and is taken here. Note `berfoto`
// (u23l4, to have your photo taken) already exists; neither whole-word-contains
// the other, and "a photograph" does not collide with any of berfoto's accept[]
// entries — checked through the real `checkMeaning`, not by eye.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT43 = {
  id: "id-u43",
  lang: "id",
  title: "Komputer dan jaringan",
  order: 43,
  stage: "a2",
  lessons: [
    {
      id: "id-u43l1",
      unit: 43,
      lesson: 1,
      title: "Komputer dan perangkat",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about a computer and the kit it belongs to, and say what you are doing on it — typing, copying, deleting.",
      items: [
        { id: "id-u43l1-komputer", type: "vocab", front: "komputer", reading: "komputer", meaning: "a computer", example: { jp: "Komputer di kantor itu sudah kuno.", en: "The computer in that office is already old-fashioned." }, accept: ["a PC", "a desktop machine", "a computing device"], drill: { jp: "Komputer baru itu sangat cepat", en: "That new computer is very fast" }, hint: "kom-POO-tuhr. Spelled with a k and a u where English has c and u — the Indonesian spelling follows the sound, so write what you hear. Komputer is the machine; the field of study is ilmu komputer." },
        { id: "id-u43l1-perangkat", type: "vocab", front: "perangkat", reading: "perangkat", meaning: "a device", example: { jp: "Perangkat baru itu lebih canggih dari komputer lama.", en: "That new device is more high-tech than the old computer." }, accept: ["a set of kit", "a unit of hardware", "an assembled device"], drill: { jp: "Perangkat itu ada di atas meja di kantor", en: "That device is on the table in the office" }, hint: "puh-RAHNG-kat. A device or a set of equipment taken as one unit — perangkat keras is hardware and perangkat lunak is software, literally hard-kit and soft-kit. An alat, which you know, is a single tool you hold; a perangkat is the assembled thing." },
        { id: "id-u43l1-teknologi", type: "vocab", front: "teknologi", reading: "teknologi", meaning: "technology", example: { jp: "Teknologi baru itu canggih sekali.", en: "That new technology is very high-tech." }, accept: ["technical know-how", "the technical side of things", "applied science"], drill: { jp: "Teknologi ini masih baru di desa", en: "This technology is still new in the village" }, hint: "tehk-noh-LOH-ghee — four syllables, hard g, and note the k where English has ch. Indonesian regularly turns an English ch-for-k into a plain k: teknologi, teknik, teknis. The short form in speech is often just teknologi tinggi, high tech." },
        { id: "id-u43l1-mengetik", type: "vocab", front: "mengetik", reading: "mengetik", meaning: "to type", example: { jp: "Saya mengetik surat itu di komputer.", en: "I typed that letter on the computer." }, accept: ["to key in", "to tap out", "to write on a keyboard"], drill: { jp: "Dia mengetik nama saya dengan cepat", en: "He types my name quickly" }, hint: "muh-NGUH-teek, opening with the ng hum. Menulis, which you know, is writing by any means; mengetik is specifically on a keyboard. The root ketik is what you see on a sign: jasa ketik, typing services." },
        { id: "id-u43l1-menyalin", type: "vocab", front: "menyalin", reading: "menyalin", meaning: "to copy", example: { jp: "Saya menyalin nama guru ke buku saya.", en: "I copied the teacher's name into my book." }, accept: ["to duplicate", "to transcribe", "to make a copy of"], drill: { jp: "Dia menyalin nomor itu ke buku lain", en: "He copies that number into another book" }, hint: "muh-nya-LEEN — ny one sound. Copying text or a file from one place to another. The noun is salinan, a copy. ⚠️ Do not confuse it with mencatat, which you know as writing something DOWN for the first time; menyalin reproduces something that already exists." },
        { id: "id-u43l1-menghapus", type: "vocab", front: "menghapus", reading: "menghapus", meaning: "to delete", example: { jp: "Jangan menghapus berkas itu.", en: "Do not delete that file." }, accept: ["to erase", "to wipe out", "to rub out"], drill: { jp: "Saya menghapus nama itu dari layar", en: "I delete that name from the screen" }, hint: "muh-NGAH-poos. It covers both the digital delete and the physical rub-out with an eraser, which is a penghapus. Menghapus papan is to clean the board. The opposite of menyimpan, to save, which you already know." },
      ],
    },
    {
      id: "id-u43l2",
      unit: 43,
      lesson: 2,
      title: "Jaringan dan situs",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say whether you are connected — the network, the signal, the site or app you are using, and whether you are online or off.",
      items: [
        { id: "id-u43l2-jaringan", type: "vocab", front: "jaringan", reading: "jaringan", meaning: "a network", example: { jp: "Jaringan di kantor itu tidak berfungsi.", en: "The network in that office is not working." }, accept: ["a web of connections", "a grid", "a connected system"], drill: { jp: "Jaringan di desa ini masih lambat", en: "The network in this village is still slow" }, hint: "jah-ree-NGAH-an. From jaring, a fishing net — a network is literally a net. It covers a phone network, a computer network and a network of people. ⚠️ The word for the internet itself is simply internet, spelled and said almost as in English, so it is not given its own card: there would be nothing to learn." },
        { id: "id-u43l2-situs", type: "vocab", front: "situs", reading: "situs", meaning: "a website", example: { jp: "Situs itu punya banyak gambar.", en: "That website has a lot of pictures." }, accept: ["a web page", "an online address", "a site on the web"], drill: { jp: "Situs baru itu mudah dan cepat", en: "That new website is easy and fast" }, hint: "SEE-toos. Borrowed from site, and it keeps the older sense too — situs sejarah is a historical site. For a web page most Indonesians say situs or the full situs web. Note there is no -e: the singular already ends in s." },
        { id: "id-u43l2-aplikasi", type: "vocab", front: "aplikasi", reading: "aplikasi", meaning: "an app", example: { jp: "Aplikasi itu gratis di komputer saya.", en: "That app is free on my computer." }, accept: ["an application program", "a piece of software", "a program you install"], drill: { jp: "Aplikasi ini berfungsi tanpa jaringan", en: "This app works without a network" }, hint: "ah-plee-KAH-see. The full word where English shortens to app — Indonesians say the whole thing, or write apl. It also keeps the older sense of an application in the sense of applying something, so aplikasi teori is the application of a theory." },
        { id: "id-u43l2-sinyal", type: "vocab", front: "sinyal", reading: "sinyal", meaning: "a signal", example: { jp: "Di gunung itu tidak ada sinyal.", en: "There is no signal on that mountain." }, accept: ["reception", "the strength of a connection", "a transmitted signal"], drill: { jp: "Sinyal di desa itu kurang bagus", en: "The signal in that village is not good enough" }, hint: "SEE-nyal — ny one sound, so it is two syllables, not three. Tidak ada sinyal is the everyday no reception, and you will hear it whenever the road leaves town. The spelling with ny is how Indonesian writes the sound English spells gn." },
        { id: "id-u43l2-daring", type: "vocab", front: "daring", reading: "daring", meaning: "online", example: { jp: "Kelas kami daring sejak bulan lalu.", en: "Our class has been online since last month." }, accept: ["connected to the network", "over the internet", "on the net"], drill: { jp: "Ujian itu daring dan sangat susah", en: "That exam is online and very hard" }, hint: "DAH-reeng. ⚠️ A BLEND, NOT AN AFFIXED WORD: dalam jaringan, in-network, squeezed into one word — so do not look for a prefix in it. This is the official and school word; in everyday speech most people simply say online. Its pair is luring, the next card." },
        { id: "id-u43l2-luring", type: "vocab", front: "luring", reading: "luring", meaning: "offline", example: { jp: "Aplikasi ini masih berfungsi luring.", en: "This app still works offline." }, accept: ["not connected", "off the network", "without a connection"], drill: { jp: "Kami belajar luring di kelas besar", en: "We study offline in a big classroom" }, hint: "LOO-reeng. Built the same way as daring but from luar jaringan, out-of-network — so daring and luring are dalam and luar wearing coats. Spoken Indonesian usually borrows offline instead. Learn the pair together or neither will stick." },
      ],
    },
    {
      id: "id-u43l3",
      unit: 43,
      lesson: 3,
      title: "Sandi dan pengguna",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Get into an account — name the user and the password, put the details in, wire things together, and move a file up or down.",
      items: [
        { id: "id-u43l3-sandi", type: "vocab", front: "sandi", reading: "sandi", meaning: "a password", example: { jp: "Saya lupa sandi komputer saya.", en: "I forgot my computer password." }, accept: ["a pass code", "a secret code", "a cipher"], drill: { jp: "Sandi baru itu susah dan panjang", en: "That new password is hard and long" }, hint: "SAHN-dee. Its old meaning is a cipher or a secret code, which is why kata sandi — literally a secret word — is the full term for a password. In practice people shorten it to sandi, or borrow password outright." },
        { id: "id-u43l3-pengguna", type: "vocab", front: "pengguna", reading: "pengguna", meaning: "a user", example: { jp: "Pengguna aplikasi itu sangat banyak.", en: "That app has a great many users." }, accept: ["the person using it", "an account holder", "someone who uses a thing"], drill: { jp: "Pengguna baru harus menulis nama dulu", en: "A new user must write a name first" }, hint: "puhng-GOO-na. Built on guna, a use, with the peng- that makes a doer — the same shape as pelajar, a pupil, off ajar. Pengguna jalan is a road user, so it is not only a digital word." },
        { id: "id-u43l3-memasukkan", type: "vocab", front: "memasukkan", reading: "memasukkan", meaning: "to put data in", example: { jp: "Saya memasukkan nama dan sandi saya.", en: "I entered my name and my password." }, accept: ["to enter something", "to insert", "to feed in"], drill: { jp: "Dia memasukkan uang ke dalam dompet", en: "He puts money into the wallet" }, hint: "muh-mah-SOOK-kan — the double k is real, hold it a beat. Built straight on masuk, to go in, which you know: masuk is YOU going in, memasukkan is you putting SOMETHING in. That me-…-kan shift from going to putting is one of the most useful patterns in the language." },
        { id: "id-u43l3-menghubungkan", type: "vocab", front: "menghubungkan", reading: "menghubungkan", meaning: "to connect two things", example: { jp: "Kabel itu menghubungkan komputer dan layar.", en: "That cable connects the computer and the screen." }, accept: ["to link up", "to join together", "to hook up"], drill: { jp: "Jalan baru itu menghubungkan dua kota", en: "That new road connects two cities" }, hint: "muhng-hoo-BOONG-kan. Joining two THINGS — cables, roads, ideas. Hubungan is the connection or relationship itself. ⚠️ There is a very close relative with -i instead of -kan, menghubungi, which means to get in touch with a PERSON; you meet it later in this band and the two are not interchangeable." },
        { id: "id-u43l3-mengunduh", type: "vocab", front: "mengunduh", reading: "mengunduh", meaning: "to download", example: { jp: "Saya mengunduh aplikasi baru itu.", en: "I downloaded that new app." }, accept: ["to pull a file down", "to fetch from the network", "to save from a site"], drill: { jp: "Dia mengunduh gambar itu dari situs", en: "He downloads that picture from a website" }, hint: "muh-NGOON-dooh. From unduh, an old word for picking fruit from a tree — you pluck the file down. It is the official term and increasingly the normal one; download is still widely borrowed. Its pair is mengunggah." },
        { id: "id-u43l3-mengunggah", type: "vocab", front: "mengunggah", reading: "mengunggah", meaning: "to upload", example: { jp: "Kami mengunggah foto ke situs sekolah.", en: "We uploaded a photo to the school website." }, accept: ["to send a file up", "to put onto the network", "to post a file"], drill: { jp: "Saya mengunggah foto itu pagi ini", en: "I upload that photograph this morning" }, hint: "muh-NGOONG-gah — ngg is the hum plus a hard g. From unggah, to raise up, and it is the exact mirror of mengunduh. The two are easy to swap by accident: unduh takes DOWN, unggah sends UP." },
      ],
    },
    {
      id: "id-u43l4",
      unit: 43,
      lesson: 4,
      title: "Ponsel dan berbagi",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Capture something on a phone — take a photo of it, get into your account, and share it.",
      items: [
        { id: "id-u43l4-kamera", type: "vocab", front: "kamera", reading: "kamera", meaning: "a camera", example: { jp: "Kamera di komputer saya sangat kecil.", en: "The camera on my computer is very small." }, accept: ["a photographic device", "a recording lens", "the camera unit"], drill: { jp: "Kamera baru itu mahal dan canggih", en: "That new camera is expensive and high-tech" }, hint: "KAH-muh-ra, three syllables with the middle one swallowed. The final -a is the Indonesian spelling of the Dutch -a, so it does not sound like the English camera's ending. Kamera depan is a front-facing camera." },
        { id: "id-u43l4-memotret", type: "vocab", front: "memotret", reading: "memotret", meaning: "to take a photograph", example: { jp: "Saya memotret layar komputer itu.", en: "I photographed that computer screen." }, accept: ["to take a picture of", "to snap a picture", "to take a photo of"], drill: { jp: "Dia memotret semua teman di pesta itu", en: "She photographed all her friends at that party" }, hint: "muh-moh-TRET. Off potret, a portrait — so it is the ACT, where foto, which you already know, is the picture itself. It takes a direct object: memotret layar, memotret teman. In casual speech people also just say ambil foto, to take a photo." },
        { id: "id-u43l4-ponsel", type: "vocab", front: "ponsel", reading: "ponsel", meaning: "a mobile phone", example: { jp: "Ponsel saya tidak berfungsi karena baterai mati.", en: "My mobile phone does not work because the battery is dead." }, accept: ["a mobile", "a cellphone", "a handset"], drill: { jp: "Ada dua ponsel di dalam tas itu", en: "There are two mobile phones in that bag" }, hint: "PON-sel. A squeeze of telepon seluler, cellular telephone, into one word — the same trick that made pemilu out of pemilihan umum. In speech most people say HP, pronounced hah-peh, from handphone; ponsel is the written and news word, and it is the one you will read." },
        { id: "id-u43l4-rekaman", type: "vocab", front: "rekaman", reading: "rekaman", meaning: "a recording", example: { jp: "Rekaman itu pendek tetapi bagus sekali.", en: "That recording is short but very good." }, accept: ["a taped copy", "the recorded version", "what was captured"], drill: { jp: "Rekaman itu ada di komputer kantor", en: "That recording is on the office computer" }, hint: "ruh-KAH-man. The -an ending turns the act into the THING produced, the same shape as pelajaran off ajar or makanan off makan. Rekaman suara is an audio recording; hasil rekaman is the finished result." },
        { id: "id-u43l4-akun", type: "vocab", front: "akun", reading: "akun", meaning: "an account", example: { jp: "Saya tidak bisa masuk ke akun saya karena sandi saya salah.", en: "I cannot get into my account because my password is wrong." }, accept: ["a user account", "a login", "a registered profile"], drill: { jp: "Akun baru itu butuh sandi yang kuat", en: "That new account needs a strong password" }, hint: "AH-koon. From account, and the spelling has shifted far enough to be worth learning as its own word — no c, no t. Masuk ke akun is to log in and keluar dari akun is to log out, using the masuk and keluar you learned in unit 7. A pengguna is the person; an akun is what they sign into." },
        { id: "id-u43l4-berbagi", type: "vocab", front: "berbagi", reading: "berbagi", meaning: "to share in something", example: { jp: "Dia berbagi foto itu melalui aplikasi baru.", en: "He shared that photo through a new app." }, accept: ["to let others have it", "to pass it on to others", "to share with someone"], drill: { jp: "Kami berbagi rekaman itu dengan teman", en: "We shared that recording with a friend" }, hint: "ber-BAH-ghee, hard g. This is the ber- half of the pair whose me- half you already know: membagi is to DIVIDE a thing up, berbagi is to share in it. Same root, opposite direction — membagi kue cuts the cake, berbagi kue means everybody gets some. It takes dengan for the person." },
      ],
    },
  ],
};
