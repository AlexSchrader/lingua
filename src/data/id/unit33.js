// ID Unit 33 — Menyampaikan kabar ("Getting the word out") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 2. unit1.js's 12 conventions and unit21.js's A1–A10 BIND this file.
//
// ⚠️ RETHEMED — HALF THIS SLOT BELONGS TO ANOTHER BLOCK, AND IT IS NOT MINE.
// The scaffold called it "Technology and communication". **Technology is A2 block
// 3's assigned domain** (it owns tech, devices, the internet), so this unit takes
// the COMMUNICATION half only and takes it completely: no komputer, no internet,
// no aplikasi, no handphone. If block 3 wants a technology unit it still has one.
//   THE HOLE IT FILLS: block 1's u26 gave the abstract nouns of LANGUAGE (kata ·
//   kalimat · arti · huruf · cerita · berita · surat · koran · judul) and u22 gave
//   the speech ACTS. Measured against all 720 live cards, what nobody had taught
//   is how a message TRAVELS: **no word for to phone, to contact, to reply, to
//   pass on, an announcement, a magazine, a writer, a journalist, an
//   advertisement, to print, a voice, a song, a screen, a broadcast, to record, a
//   source, information, a misunderstanding.** A learner could read a newspaper's
//   name and not say "I'll ring you".
//
// ⚠️ THE COGNATE TRAP DECIDED THREE OMISSIONS, and each is a decision, not a gap
// (unit21.js §A10 — a card whose gloss equals its own front is a copy task):
//   `film`   NOT CARDED — front "film", gloss "a film"; identical string.
//   `radio`  NOT CARDED — front "radio", gloss "the radio"; identical string.
//   `televisi` stays uncarded for the reason A1 already recorded.
//   The cognates that DO differ in spelling are carded and are fine: `majalah` is
//   not a cognate at all, and `informasi` · `foto` · `musik` · `iklan` all differ
//   from their glosses. `siaran` is the native word that covers broadcasting, so
//   the radio/TV field is taught — just not through the three copy-task fronts.
//
// ⚠️ ONE CARD, NOT TWO, FOR THE TELEPHONE. `menelepon` is carded; `telepon` the
// NOUN is not. Convention 3's test: me- on a borrowed device noun means "to use
// it", and a learner who has `menelepon` reads `nomor telepon` without help. The
// noun is named in the hint. (Contrast `jalan`/`berjalan`, which A1 DID split,
// because `jalan` has an independent meaning the verb does not reveal.)
//
// AFFIX ROOTS CHECKED BY HAND (unit1.js §3 — LEXEME fails open for Indonesian):
//   menghubungi → hubung      root not taught. ⚠️ `hubungan` (a relationship) is
//     this block's u40 card off the same root — two words, one root, different
//     lessons and units (unit21.js §A6). Neither whole-word-contains the other.
//   membalas → balas          root not taught.
//   menyampaikan → sampai     ⚠️ `sampai` IS taught (u18, to arrive). Carded: to
//     arrive does not give you "to pass a message on". Drill-safe —
//     findWholeWord("menyampaikan", "sampai") fails (the k after it is a letter),
//     and this card's drill carries no bare `sampai`.
//   pengumuman → umum         ⚠️ `umum` IS taught (u28, general). Carded: "general"
//     does not give you "an announcement" — the route runs through mengumumkan,
//     which the learner does not have. Drill-safe (the ng before it is a letter).
//   penulis → tulis           ⚠️ `menulis` IS taught (u18). Same shape as A1's
//     `belajar`→`pelajar`, which A1 carded deliberately; the pe- AGENT noun is a
//     different word from the verb. Drill-safe both ways.
//   mencetak → cetak          root not taught.
//   merekam → rekam           root not taught.
//   menegaskan → tegas        root not taught. ⚠️ `tegas` alone is NOT carded and
//     must not be: A1's `kuat` accepts "firm", which would collide.
//   siaran → siar             root not taught; no verb carded off it.
//   salah paham               a multi-word front (convention 8). `salah` IS taught
//     and is a whole word inside it — safe in both directions: this card's cloze
//     blanks the two-word span, and `salah`'s own drill is in a merged A1 unit.
//   kabar · majalah · kertas · wartawan · iklan · suara · lagu · foto · layar ·
//   jelas · informasi · istilah · sumber — roots.
//
// ⚠️ `kabar` is a WHOLE WORD inside the taught front `apa kabar` (unit21.js §A7).
// Checked: this card's drill carries bare `kabar` and no `apa kabar`.
//
// GLOSSES REGLOSSED TO CLEAR A LIVE `accept[]` (unit21.js §A4):
//   `membalas` is NOT "to reply" — u18's `menjawab` accepts it. → "to write back".
//   `kertas` is NOT "paper" — u26's `koran` accepts "the paper". → "a sheet of paper".
//   `suara` is NOT "voice" — u22's `mengucapkan` accepts "to voice". → "someone's voice".
//   `jelas` is NOT "clear" — u8's `terang` accepts it. → "plain to understand".
//   `kabar` does not accept "tidings" — u26's `berita` does.
//   `pengumuman` does not accept bare "a notice" — u21's `sadar` accepts "to notice".
//   `menegaskan` does not accept "to make clear" — u18's `menjelaskan` does.
//   `singkat` (brief) was DROPPED, not reglossed: u10's `pendek` accepts "brief"
//   and every honest alternative gloss split on a comma back into "short", which
//   `pendek` owns too. `menegaskan` took the slot.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT33 = {
  id: "id-u33",
  lang: "id",
  title: "Menyampaikan kabar",
  order: 33,
  stage: "a2",
  lessons: [
    {
      id: "id-u33l1",
      unit: 33,
      lesson: 1,
      title: "Menelepon dan membalas",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Get a message to somebody and answer one back — ringing them, reaching them, passing word on, or putting a notice up.",
      items: [
        { id: "id-u33l1-kabar", type: "vocab", front: "kabar", reading: "kabar", meaning: "word of how someone is", example: { jp: "Saya belum mendapat kabar dari teman saya.", en: "I have not had word from my friend yet." }, accept: ["how someone is getting on", "how things stand with someone"], drill: { jp: "Kabar dari desa itu belum datang", en: "Word from that village has not come yet" }, hint: "KAH-bar. You already say it in Apa kabar? — literally what news, meaning how are you. On its own it is news OF SOMEBODY: ada kabar dari dia? ⚠️ Berita, which you already have, is news as an event reported publicly; kabar is personal. Mengabari is to let somebody know." },
        { id: "id-u33l1-menghubungi", type: "vocab", front: "menghubungi", reading: "menghubungi", meaning: "to get in touch with", example: { jp: "Dia menghubungi saya karena ada masalah di kantor.", en: "He got in touch with me because there was a problem at the office." }, accept: ["to contact", "to reach someone"], drill: { jp: "Saya akan menghubungi atasan besok pagi", en: "I will get in touch with my boss tomorrow morning" }, hint: "muhng-hoo-BOONG-ee. Takes the person straight. Hubungi, the bare stem, is what an imperative uses — Hubungi saya! — exactly as tunggu does. From hubung, to link: hubungan is a relationship or a connection, and you meet it later in this band. It covers any channel: phone, letter, in person." },
        { id: "id-u33l1-menelepon", type: "vocab", front: "menelepon", reading: "menelepon", meaning: "to phone", example: { jp: "Ibu menelepon saya setiap malam.", en: "Mother phones me every evening." }, accept: ["to ring someone", "to call someone up"], drill: { jp: "Dia menelepon dokter karena adiknya sakit", en: "He phoned the doctor because his little brother was ill" }, hint: "muh-nuh-luh-POHN, four syllables, every e swallowed. The noun is telepon — nomor telepon is a phone number — and it is not a separate card because me- on a device simply means to use it. In speech you will constantly hear telepon used as the verb too, and the colloquial nelpon." },
        { id: "id-u33l1-membalas", type: "vocab", front: "membalas", reading: "membalas", meaning: "to write back", example: { jp: "Dia belum membalas surat saya.", en: "He has not written back to my letter yet." }, accept: ["to return a message", "to come back with an answer"], drill: { jp: "Saya membalas surat itu kemarin malam", en: "I wrote back to that letter last night" }, hint: "muhm-BAH-las. ⚠️ Not the same as menjawab, which you already have: menjawab answers a QUESTION, membalas returns a MESSAGE — a letter, a text, a greeting. It also means to repay or to get even, which is the same idea of sending something back. Balasan is a reply." },
        { id: "id-u33l1-menyampaikan", type: "vocab", front: "menyampaikan", reading: "menyampaikan", meaning: "to pass a message on", example: { jp: "Dia menyampaikan kabar itu untuk keluarga saya.", en: "He passed that news on for my family." }, accept: ["to convey", "to get word to someone"], drill: { jp: "Guru menyampaikan aturan baru di kelas", en: "The teacher passed the new rule on to the class" }, hint: "muh-nyam-PIE-kan — ny is one sound and the ai is the English eye. Built on sampai, to arrive, which you already have: you are making the message arrive. Very common in polite formulas: Sampaikan salam saya, pass on my regards. Memberitahu, which you already have, is telling someone directly; menyampaikan is relaying." },
        { id: "id-u33l1-pengumuman", type: "vocab", front: "pengumuman", reading: "pengumuman", meaning: "an announcement", example: { jp: "Pengumuman itu ada di depan kantor sekolah.", en: "That announcement is in front of the school office." }, accept: ["a notice posted up", "a public statement"], drill: { jp: "Pengumuman baru itu penting untuk semua warga", en: "That new announcement is important for all the residents" }, hint: "puh-ngoo-MOO-man, five syllables. Built on umum, general, which you already have — something made general, made public. Covers both the spoken announcement and the printed notice on a wall. Mengumumkan is the verb, to announce." },
      ],
    },
    {
      id: "id-u33l2",
      unit: 33,
      lesson: 2,
      title: "Koran dan majalah",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about who wrote something and where it was printed — a writer, a journalist, a magazine, an advert — rather than only naming the paper.",
      items: [
        { id: "id-u33l2-majalah", type: "vocab", front: "majalah", reading: "majalah", meaning: "a magazine", example: { jp: "Ibu membeli majalah baru di pasar.", en: "Mother bought a new magazine at the market." }, accept: ["a weekly", "a glossy"], drill: { jp: "Majalah itu ada di meja kamar saya", en: "That magazine is on the table in my room" }, hint: "ma-JAH-lah, three syllables with the final h sounded. Alongside koran, which you already have for a newspaper: a koran comes out daily, a majalah weekly or monthly. Not a borrowing from English — it comes through Arabic, which is why it looks nothing like magazine." },
        { id: "id-u33l2-kertas", type: "vocab", front: "kertas", reading: "kertas", meaning: "a sheet of paper", example: { jp: "Saya menulis alasan itu di kertas kecil.", en: "I wrote that reason on a small piece of paper." }, accept: ["writing paper", "a blank sheet"], drill: { jp: "Guru memberi kertas untuk setiap pelajar", en: "The teacher gave paper to every pupil" }, hint: "kuhr-TAHS. The material and a single sheet of it alike — Indonesian does not mark the difference, so selembar kertas is one sheet if you need to be exact. ⚠️ Koran, which you already have, accepts the paper meaning a newspaper; kertas is the stuff you write on. Kertas kerja is a working document." },
        { id: "id-u33l2-penulis", type: "vocab", front: "penulis", reading: "penulis", meaning: "a writer", example: { jp: "Penulis cerita itu masih sangat muda.", en: "The writer of that story is still very young." }, accept: ["an author", "the person who wrote it"], drill: { jp: "Penulis itu bekerja di majalah besar", en: "That writer works at a big magazine" }, hint: "puh-NOO-lees. Built off menulis, to write, which you already have, exactly as pelajar is built off belajar: pe- makes the PERSON who does it. That pattern is worth holding onto — you will now recognise penjual, pembeli, pembaca and pekerja without being taught them. Tulisan is a piece of writing." },
        { id: "id-u33l2-wartawan", type: "vocab", front: "wartawan", reading: "wartawan", meaning: "a journalist", example: { jp: "Wartawan itu menulis tentang masalah di kota.", en: "That journalist writes about problems in the city." }, accept: ["a reporter", "a press correspondent"], drill: { jp: "Wartawan itu datang ke kantor pagi ini", en: "That journalist came to the office this morning" }, hint: "war-ta-WAHN. The -wan ending marks a male practitioner of a field and turns up in several jobs; the female form is wartawati, though wartawan is used for anybody in practice. Warta on its own is news in formal writing. Jurnalis is the borrowed alternative and is equally understood." },
        { id: "id-u33l2-iklan", type: "vocab", front: "iklan", reading: "iklan", meaning: "an advertisement", example: { jp: "Iklan di majalah itu tentang mobil baru.", en: "The advert in that magazine is about a new car." }, accept: ["an advert", "a commercial"], drill: { jp: "Iklan itu ada di setiap koran pagi", en: "That advert is in every morning paper" }, hint: "EEK-lan, two syllables. Covers the printed advert, the TV commercial and the small ad alike. Beriklan is to advertise; mengiklankan is to advertise a specific thing. Also an Arabic borrowing, like majalah — a lot of Indonesian's public-life vocabulary arrived that way." },
        { id: "id-u33l2-mencetak", type: "vocab", front: "mencetak", reading: "mencetak", meaning: "to print", example: { jp: "Kami mencetak laporan itu di kantor.", en: "We printed that report at the office." }, accept: ["to run off copies", "to put into print"], drill: { jp: "Dia mencetak foto keluarga di toko itu", en: "He printed the family photos at that shop" }, hint: "muhn-chuh-TAK, the c is CH. Printing on paper, and by extension stamping or moulding anything. It is also the sports word for scoring — mencetak gol — which is the same image of stamping a mark. Cetakan is a printed edition or a mould." },
      ],
    },
    {
      id: "id-u33l3",
      unit: 33,
      lesson: 3,
      title: "Suara dan gambar",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe what you heard or watched rather than only read — a voice, a song, a broadcast, a photo on a screen — and say you recorded it.",
      items: [
        { id: "id-u33l3-suara", type: "vocab", front: "suara", reading: "suara", meaning: "someone's voice", example: { jp: "Suara ibu saya tenang dan lembut.", en: "My mother's voice is calm and soft." }, accept: ["the sound a person makes", "a vote"], drill: { jp: "Suara anak itu keras di kelas", en: "That child's voice is loud in class" }, hint: "soo-AH-ra, three syllables. The voice, and by extension any sound something makes — suara mobil, the noise of a car. ⚠️ It is also a VOTE, which is why you see it in election news: satu orang satu suara. Bersuara is to speak up. Mengucapkan, which you already have, is about the words; suara is the sound." },
        { id: "id-u33l3-lagu", type: "vocab", front: "lagu", reading: "lagu", meaning: "a song", example: { jp: "Kami menyanyi lagu itu bersama.", en: "We sang that song together." }, accept: ["a tune", "a melody"], drill: { jp: "Lagu itu terkenal di seluruh Indonesia", en: "That song is famous throughout Indonesia" }, hint: "LAH-goo. Sits with menyanyi, to sing, which you already have. Lagu daerah is a regional folk song and Lagu Indonesia Raya is the national anthem. It also means a tune in the sense of a melody with no words, so you can say lagu tanpa kata." },
        { id: "id-u33l3-foto", type: "vocab", front: "foto", reading: "foto", meaning: "a photograph", example: { jp: "Foto keluarga itu ada di dinding kamar.", en: "That family photograph is on the bedroom wall." }, accept: ["a photo", "a snap"], drill: { jp: "Saya menyimpan foto lama itu di lemari", en: "I keep that old photograph in the cupboard" }, hint: "FOH-toh, both o's full. You already have berfoto, to have your picture taken; this is the picture itself. ⚠️ Gambar, which you already have, is any image including a drawing; a foto is specifically photographic. Memfoto and memotret both mean to photograph something." },
        { id: "id-u33l3-layar", type: "vocab", front: "layar", reading: "layar", meaning: "a screen", example: { jp: "Layar itu terlalu terang untuk mata saya.", en: "That screen is too bright for my eyes." }, accept: ["a display", "a sail"], drill: { jp: "Gambar di layar itu kurang jelas", en: "The picture on that screen is not clear enough" }, hint: "LAH-yar, y a consonant. ⚠️ Its original meaning is a SAIL, and that is not a curiosity — it is why a cinema screen is layar and a boat is a perahu layar. Layar lebar, wide screen, is how Indonesians say the big screen. Berlayar is to sail." },
        { id: "id-u33l3-siaran", type: "vocab", front: "siaran", reading: "siaran", meaning: "a broadcast", example: { jp: "Siaran berita itu mulai jam tujuh malam.", en: "That news broadcast starts at seven in the evening." }, accept: ["a programme going out", "what is on air"], drill: { jp: "Siaran itu berhenti karena hujan besar", en: "That broadcast stopped because of heavy rain" }, hint: "see-AH-ran, three syllables. The native word that covers radio and television alike, which is why neither of those borrowed nouns needs to be taught to talk about them: siaran radio, siaran televisi. Siaran langsung is a live broadcast, using the langsung you already have for straight away." },
        { id: "id-u33l3-merekam", type: "vocab", front: "merekam", reading: "merekam", meaning: "to record", example: { jp: "Dia merekam suara guru di kelas.", en: "She recorded the teacher's voice in class." }, accept: ["to tape", "to capture on a recording"], drill: { jp: "Kami merekam lagu itu di kamar saya", en: "We recorded that song in my room" }, hint: "muh-RAY-kam. Sound and pictures alike. Rekaman is the recording itself, and perekam is the device. Not to be confused with mencatat, which you already have for writing something down — merekam captures it as it happens." },
      ],
    },
    {
      id: "id-u33l4",
      unit: 33,
      lesson: 4,
      title: "Jelas atau salah paham",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say whether a message actually landed — calling it clear, naming your source, spelling it out again, or admitting there has been a misunderstanding.",
      items: [
        { id: "id-u33l4-jelas", type: "vocab", front: "jelas", reading: "jelas", meaning: "plain to understand", example: { jp: "Alasan dia belum jelas untuk saya.", en: "His reason is not yet plain to me." }, accept: ["unmistakable", "obvious", "easy to follow"], drill: { jp: "Aturan baru itu sudah jelas sekarang", en: "That new rule is plain now" }, hint: "JUH-las. ⚠️ Terang, which you already have, is clear meaning BRIGHT — light and weather. Jelas is clear meaning UNDERSTANDABLE — a sentence, a rule, a reason. Belum jelas is the everyday it's still not clear, and Jelas! on its own means obviously. Menjelaskan, to explain, is built on it and you already have it." },
        { id: "id-u33l4-informasi", type: "vocab", front: "informasi", reading: "informasi", meaning: "information", example: { jp: "Informasi tentang acara itu ada di koran.", en: "Information about that event is in the paper." }, accept: ["the details", "what is known about it"], drill: { jp: "Informasi itu datang dari wartawan majalah", en: "That information came from a magazine journalist" }, hint: "in-for-MAH-see, four syllables — note the -si ending, which is where a great many English -tion words land in Indonesian. Once you see that, stasiun, tradisi, kondisi and situasi all become readable. Keterangan is the more native alternative." },
        { id: "id-u33l4-istilah", type: "vocab", front: "istilah", reading: "istilah", meaning: "a technical term", example: { jp: "Istilah itu susah untuk pelajar baru.", en: "That term is difficult for a new pupil." }, accept: ["a specialist word", "what a field calls it"], drill: { jp: "Istilah baru itu belum ada di kamus", en: "That new term is not in the dictionary yet" }, hint: "is-tee-LAH. ⚠️ Not kata, which you already have for any word — an istilah is a word belonging to a particular field, the way a doctor's or a lawyer's vocabulary does. Very useful for asking: apa istilahnya dalam bahasa Indonesia? Peristilahan is terminology." },
        { id: "id-u33l4-sumber", type: "vocab", front: "sumber", reading: "sumber", meaning: "a source", example: { jp: "Wartawan itu tidak menyebut sumber berita.", en: "That journalist did not name the source of the news." }, accept: ["where it came from", "the origin of a claim"], drill: { jp: "Sumber informasi itu belum jelas untuk kami", en: "The source of that information is not clear to us" }, hint: "SOOM-buhr. Where something comes from: a spring of water, a source of income, or the person a reporter got it from. Sumber air is a water source and sumber daya is a resource. Its close cousin in meaning is asal, origin, which you will meet in dari mana asal kamu." },
        { id: "id-u33l4-menegaskan", type: "vocab", front: "menegaskan", reading: "menegaskan", meaning: "to spell it out", example: { jp: "Atasan menegaskan bahwa laporan itu penting.", en: "The boss spelled out that the report matters." }, accept: ["to put it beyond doubt", "to emphasise", "to state firmly"], drill: { jp: "Guru menegaskan aturan itu di depan kelas", en: "The teacher spelled out that rule in front of the class" }, hint: "muh-nuh-GAHS-kan. ⚠️ Not menjelaskan, which you already have — that EXPLAINS something the learner did not follow. Menegaskan restates something firmly so nobody can claim doubt about it, which is why you see it constantly in reported news: dia menegaskan bahwa… Tegas is the adjective, firm and unambiguous." },
        { id: "id-u33l4-salahpaham", type: "vocab", front: "salah paham", reading: "salahpaham", meaning: "a misunderstanding", example: { jp: "Ini hanya salah paham dengan rekan saya.", en: "This is only a misunderstanding with my colleague." }, accept: ["to get the wrong end of the stick", "crossed wires"], drill: { jp: "Ada salah paham tentang jadwal rapat itu", en: "There is a misunderstanding about that meeting's schedule" }, hint: "sa-lah PAH-ham, two words. Literally wrong-understanding, built on the salah you already have for wrong. It works as a noun and as a verb: terjadi salah paham, a misunderstanding arose, and saya salah paham, I got it wrong. Paham on its own means to understand, but mengerti is the word you already have and the one to use." },
      ],
    },
  ],
};
