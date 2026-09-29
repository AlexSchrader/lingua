// ID Unit 26 — Kata, cerita, dan arti ("Words, stories and meaning") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 1 (u21–u30). unit1.js's 12 conventions and unit21.js's A1–A10 BIND
// this file.
//
// 🚨 RETHEMED FROM "Nature and animals", because **A1's u19 IS animals and nature,
// all 24 cards of it** — anjing · sapi · kuda · kambing · bebek · binatang ·
// burung · ular · monyet · gajah · nyamuk · semut · pohon · bunga · daun · buah ·
// gunung · sungai · pantai · laut · hutan · matahari · bintang · desa. A second
// pass would have been a zoo with no new animals in it.
//
// THE HOLE IT FILLS INSTEAD, AND IT IS THE ONE THAT MOST LIMITS AN A2 LEARNER:
// **A1 taught no abstract nouns at all.** Measured against all 480 A1 cards, there
// was no word for *a word*, *a sentence*, *a letter of the alphabet*, *a list*, *a
// story*, *the news*, *a newspaper*, *a letter you post*, *a title*, *a meaning*,
// *a problem*, *a result*, *a cause*, *a consequence*, *a method*, *a situation*,
// *a sign*, *a picture*, *a shape*, *the contents*, *a note*, or *a dictionary* —
// and no preposition *concerning*. A learner could describe a cow and could not
// say "the meaning of that word" or "the reason for the problem". Naming things is
// A1's job; talking ABOUT them needs these.
//   l1  the pieces of language — kata · kalimat · arti · huruf · angka · daftar
//   l2  what you read          — cerita · berita · surat · koran · tentang · judul
//   l3  cause and effect       — masalah · hasil · sebab · akibat · cara · keadaan
//   l4  marks on paper         — tanda · gambar · bentuk · isi · catatan · kamus
//
// ⚠️ `tentang` (concerning) IS THE MOST USEFUL CARD IN THIS UNIT and it is not a
// noun. It is here because A1 never taught it and the gap bites every single unit
// of this band: without it no example anywhere in u21–u25 can say "a report ABOUT
// the project" or "a story ABOUT the journey", and all five of those units had to
// route around it with `dan`, `untuk` or a bare object. Those workarounds are in
// their headers. From this unit on, examples may use it. ⚠️ It is glossed
// "concerning" and NOT "about", because A1's `kira-kira` (roughly) already carries
// **"about"** in its accept[] — the *approximately* sense. Verified against the
// live array; unit21.js A4.
//
// ⚠️ `angka` IS GLOSSED "a digit", NOT "a numeral", because A1's `nomor` (number)
// carries **"numeral"** in its accept[]. And `nomor` itself already owns *number*,
// so the distinction this card actually teaches is the real Indonesian one: `angka`
// is the written FIGURE, `nomor` is the number something IS. Both in the hints.
//
// ⚠️ `huruf` (a letter of the alphabet) and `surat` (a letter you post) ARE IN
// DIFFERENT LESSONS ON PURPOSE. English has one word for two unrelated things and
// learners conflate them in both directions; Indonesian keeps them apart and so
// does this unit, with each hint naming the other.
//
// ⚠️ **`halaman` CANNOT BE CARDED FOR *page*, AND THAT IS NOT AN OMISSION.** A1's
// u17 teaches `halaman` as *yard*, and Indonesian uses the identical front for a
// page of a book. Front-uniqueness forbids a second card and the validator is
// right to. The page sense is named in `buku`-adjacent hints here instead. Same
// shape as A1's `bulan` (month, blocking *moon*); see unit21.js A10.
//
// AFFIX ROOTS CHECKED BY HAND (the LEXEME probe fails open for Indonesian —
// unit1.js convention 3; each root stripped off and grepped in TAUGHT-WORDS.md,
// because a `free` verdict on a prefixed form means nothing here):
//   catatan → catat     ⚠️ `mencatat` (to write down) IS taught. Carded anyway:
//     the ACT of noting does not give you the noun for the note. Drill-safe in
//     both directions — "catatan" does not contain "mencatat", and "mencatat" does
//     not contain "catatan", so neither drill can steal the other's blank.
//   keadaan → ada       ⚠️ `ada` (there is) IS taught. Carded: *there is* does not
//     give you *a situation*. Drill-safe — "keadaan" holds "ada" at index 2
//     between "e" and "a", both letters, so findWholeWord("ada") does NOT match
//     inside it and `ada`'s own drill is untouched.
//   akibat · sebab · cara · masalah · hasil ⚠️ (`berhasil`, to succeed, is this
//     block's other card off `hasil`, deliberately in an earlier unit — see that
//     file; drill-safe, since "berhasil" has "hasil" at index 3 preceded by "r") ·
//   arti · kata · kalimat · huruf · angka · daftar · cerita · berita · surat ·
//   koran · judul · tanda · gambar · bentuk · isi · kamus · tentang
//     — NONE of those roots is taught, and none is a derived form.
//
// ⚠️ `isi` IS A NOUN AND A VERB AND ONLY THE NOUN IS CARDED. `isi` is the contents
// of a thing; it is also the imperative *fill it in* every Indonesian form uses
// (isi nama, isi bensin). The noun takes the card because it is the one a learner
// must recognise cold; the verb use is in its hint.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT26 = {
  id: "id-u26",
  lang: "id",
  title: "Kata, cerita, dan arti",
  order: 26,
  stage: "a2",
  lessons: [
    {
      id: "id-u26l1",
      unit: 26,
      lesson: 1,
      title: "Kata dan kalimat",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about language itself — ask what a word means, and name the letters, figures and lists it is written with.",
      items: [
        { id: "id-u26l1-kata", type: "vocab", front: "kata", reading: "kata", meaning: "a word", example: { jp: "Saya tidak tahu arti kata itu.", en: "I do not know the meaning of that word." }, accept: ["a term", "a single word", "what somebody says"], drill: { jp: "Kata itu susah untuk saya", en: "That word is difficult for me" }, hint: "KAH-ta. ⚠️ It is also a VERB — kata dia means he said, literally his word, and you will hear it constantly in reported speech where English needs *said*. Kata-kata, doubled, is words in the plural or a person's remarks." },
        { id: "id-u26l1-kalimat", type: "vocab", front: "kalimat", reading: "kalimat", meaning: "a sentence", example: { jp: "Guru menulis kalimat panjang di kelas.", en: "The teacher wrote a long sentence in class." }, accept: ["a clause", "a full sentence", "a line of writing"], drill: { jp: "Kalimat itu panjang dan tidak mudah", en: "That sentence is long and not easy" }, hint: "kah-LEE-mat. From Arabic, like a good deal of Indonesian's vocabulary for writing and religion. ⚠️ Nothing to do with a prison sentence — that is hukuman. Sekalimat means in a single sentence." },
        { id: "id-u26l1-arti", type: "vocab", front: "arti", reading: "arti", meaning: "a meaning", example: { jp: "Apa arti kata ini dan kata itu?", en: "What do this word and that word mean?" }, accept: ["the sense of a word", "what something signifies", "a definition"], drill: { jp: "Arti kata itu masih susah untuk saya", en: "The meaning of that word is still difficult for me" }, hint: "AR-tee. Apa artinya? — what does it mean? — is the single most useful question a learner has, so learn it as a unit. Berarti means *it means* and also *so, therefore*: berarti kamu setuju, so you agree. Mengerti, to understand, is a relative." },
        { id: "id-u26l1-huruf", type: "vocab", front: "huruf", reading: "huruf", meaning: "a letter of the alphabet", example: { jp: "Anak itu belajar huruf besar dan kecil.", en: "That child is learning capital and small letters." }, accept: ["a character", "an alphabet letter", "a written symbol"], drill: { jp: "Kata itu punya enam huruf saja", en: "That word has only six letters" }, hint: "HOO-roof. ⚠️ NOT the letter you post — that is surat, in the next lesson, and English having one word for both is a trap in both directions. Huruf besar is a capital; huruf kecil lower case. Indonesian uses the same Latin alphabet you already know, with no extra letters at all." },
        { id: "id-u26l1-angka", type: "vocab", front: "angka", reading: "angka", meaning: "a digit", example: { jp: "Angka di tiket itu sangat kecil.", en: "The figures on that ticket are very small." }, accept: ["a figure", "a written number", "a numeral character"], drill: { jp: "Angka di daftar itu sangat kecil", en: "The figures on that list are very small" }, hint: "ANG-ka, opening on the ng hum. ⚠️ The pair to keep straight: angka is the written FIGURE, nomor is the number a thing IS — nomor rumah, house number, written with angka. Angka is also a school mark: dapat angka bagus, to get a good mark." },
        { id: "id-u26l1-daftar", type: "vocab", front: "daftar", reading: "daftar", meaning: "a list", example: { jp: "Ibu membuat daftar untuk belanja.", en: "Mother made a list for the shopping." }, accept: ["a register", "a written listing", "a roster"], drill: { jp: "Daftar harga ada di dinding", en: "The price list is on the wall" }, hint: "DAHF-tar. Daftar harga is a price list and daftar menu is what a warung hands you. ⚠️ Mendaftar means to REGISTER or sign up — pendaftaran, registration, is a word you will meet at every counter in Indonesia." },
      ],
    },
    {
      id: "id-u26l2",
      unit: 26,
      lesson: 2,
      title: "Cerita dan berita",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what a piece of writing is and, at last, what it is about.",
      items: [
        { id: "id-u26l2-cerita", type: "vocab", front: "cerita", reading: "cerita", meaning: "a story", example: { jp: "Nenek suka cerita lama dari desa.", en: "Grandmother likes old stories from the village." }, accept: ["a tale", "an account of something", "a narrative"], drill: { jp: "Cerita itu sangat lucu dan panjang", en: "That story is very funny and long" }, hint: "chuh-REE-ta — the c is CH. Bercerita is to tell a story, and ceritanya means the story goes, a very common way to start one. Ceritanya also softens a claim, rather like English *apparently*." },
        { id: "id-u26l2-berita", type: "vocab", front: "berita", reading: "berita", meaning: "the news", example: { jp: "Ayah melihat berita setiap malam.", en: "Father watches the news every evening." }, accept: ["a news report", "word of something", "tidings"], drill: { jp: "Berita itu datang dari koran pagi", en: "That news came from the morning paper" }, hint: "buh-REE-ta. ⚠️ One letter from cerita and constantly confused with it: a cerita is a STORY somebody tells, a berita is NEWS that has happened. Kabar, which you already have in apa kabar, is the everyday word for somebody's news." },
        { id: "id-u26l2-surat", type: "vocab", front: "surat", reading: "surat", meaning: "a letter you send", example: { jp: "Saya menerima surat dari perusahaan itu.", en: "I received a letter from that business." }, accept: ["a written message", "correspondence", "a posted note"], drill: { jp: "Surat itu ada di meja kantor", en: "That letter is on the office desk" }, hint: "SOO-rat. ⚠️ NOT a letter of the alphabet — that is huruf, in the previous lesson. Surat also means an official DOCUMENT, and that is how you will meet it most: surat izin, a permit; surat jalan, a delivery note. Kantor pos is the post office." },
        { id: "id-u26l2-koran", type: "vocab", front: "koran", reading: "koran", meaning: "a newspaper", example: { jp: "Koran hari ini ada di kursi depan.", en: "Today's newspaper is on the front chair." }, accept: ["the paper", "a daily paper", "the press"], drill: { jp: "Ayah membaca koran sambil minum kopi", en: "Father reads the paper while drinking coffee" }, hint: "KOH-ran. From the Dutch courant. ⚠️ The stress and spelling matter — do not confuse it with the Qur'an, which Indonesian writes Al-Quran and pronounces quite differently. Surat kabar is the formal native word for a newspaper." },
        { id: "id-u26l2-tentang", type: "vocab", front: "tentang", reading: "tentang", meaning: "concerning", example: { jp: "Kami berdiskusi tentang masalah itu.", en: "We discussed that problem." }, accept: ["on the subject of", "regarding", "to do with"], drill: { jp: "Berita tentang cuaca sudah keluar", en: "The news about the weather has come out" }, hint: "tuhn-TANG, ending on the ng hum. 🚨 THE MOST USEFUL WORD IN THIS UNIT. It is how you say what something is ABOUT — cerita tentang, berita tentang, berdiskusi tentang — and until now this course had no way to do that at all. ⚠️ Glossed concerning rather than about because kira-kira, roughly, already carries about in the approximately sense. Mengenai is the formal twin." },
        { id: "id-u26l2-judul", type: "vocab", front: "judul", reading: "judul", meaning: "a title", example: { jp: "Judul buku itu sangat panjang.", en: "That book's title is very long." }, accept: ["a heading", "the name of a work", "a headline"], drill: { jp: "Saya lupa judul cerita itu", en: "I forgot the title of that story" }, hint: "JOO-dool. The title of a book, film, song or article. ⚠️ Not a person's title — that is gelar, for a degree or an honorific. Berjudul means entitled: buku berjudul, a book called." },
      ],
    },
    {
      id: "id-u26l3",
      unit: 26,
      lesson: 3,
      title: "Sebab dan akibat",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Set out a problem as cause, effect and result, and say how a situation is being handled.",
      items: [
        { id: "id-u26l3-masalah", type: "vocab", front: "masalah", reading: "masalah", meaning: "a problem", example: { jp: "Masalah itu terjadi karena hujan.", en: "That problem happened because of the rain." }, accept: ["an issue", "trouble", "a difficulty"], drill: { jp: "Kami punya masalah dengan mobil itu", en: "We have a problem with that car" }, hint: "mah-SAH-lah. 🚨 LEARN tidak apa-apa AND tidak masalah TOGETHER — both mean no problem, and bermasalah means problematic. Masalahnya is the very common the thing is, used to introduce the snag: masalahnya, uang kurang." },
        { id: "id-u26l3-hasil", type: "vocab", front: "hasil", reading: "hasil", meaning: "a result", example: { jp: "Hasil ujian itu sudah keluar.", en: "That exam's results have come out." }, accept: ["an outcome", "the product of something", "the yield"], drill: { jp: "Hasil ujian anak itu sangat bagus", en: "That child's exam results are very good" }, hint: "HAH-seel. The same root as berhasil, to succeed, which you already have — to succeed is literally to have a result. It also means a harvest or an output: hasil laut, produce from the sea. Hasilnya is how a story ends: and the result was." },
        { id: "id-u26l3-sebab", type: "vocab", front: "sebab", reading: "sebab", meaning: "a cause", example: { jp: "Sebab masalah itu belum kami tahu.", en: "We do not know the cause of that problem yet." }, accept: ["the reason behind something", "the root of it", "what brought it on"], drill: { jp: "Kami mencari sebab masalah itu", en: "We are looking for the cause of that problem" }, hint: "suh-BAB, first e swallowed. ⚠️ Compare the three: karena is the CONJUNCTION because, alasan is the reason a PERSON gives, and sebab is the cause a thing actually HAS. Sebab also works as a conjunction, a slightly more formal karena." },
        { id: "id-u26l3-akibat", type: "vocab", front: "akibat", reading: "akibat", meaning: "a consequence", example: { jp: "Akibat hujan besar, jalan menjadi basah.", en: "As a consequence of the heavy rain, the road got wet." }, accept: ["an effect", "what follows from something", "a repercussion"], drill: { jp: "Akibat macet kami tiba malam", en: "As a result of the traffic we arrived at night" }, hint: "ah-KEE-bat. The exact opposite end from sebab, and Indonesians pair them as sebab akibat, cause and effect. ⚠️ It leans NEGATIVE — an akibat is usually a consequence you would rather not have. Akibatnya, as a result, comes up again later in this band." },
        { id: "id-u26l3-cara", type: "vocab", front: "cara", reading: "cara", meaning: "a method", example: { jp: "Cara itu lebih mudah untuk semua orang.", en: "That method is easier for everybody." }, accept: ["a means of doing it", "a manner", "an approach"], drill: { jp: "Saya tidak tahu cara membuat teh manis", en: "I do not know how to make sweet tea" }, hint: "CHA-ra — the c is CH. ⚠️ Glossed method rather than way because jalan, a street, already carries way in its other sense. Bagaimana caranya? is how do you do it? — the question you will use more than almost any other. Secara means in a manner." },
        { id: "id-u26l3-keadaan", type: "vocab", front: "keadaan", reading: "keadaan", meaning: "a situation", example: { jp: "Keadaan di kota itu sudah lebih baik.", en: "The situation in that city is already better." }, accept: ["the state of things", "circumstances", "how things stand"], drill: { jp: "Keadaan jalan sangat jelek hari ini", en: "The state of the road is very bad today" }, hint: "kuh-ah-DAH-an — four syllables, and the last two a's are separate. Built on ada, there is: a situation is literally the there-is-ness of things. Keadaan darurat is an emergency, and it is the phrase every announcement uses." },
      ],
    },
    {
      id: "id-u26l4",
      unit: 26,
      lesson: 4,
      title: "Tanda dan gambar",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe what is on a page or a wall — its marks, its shape, its contents, and where to look a word up.",
      items: [
        { id: "id-u26l4-tanda", type: "vocab", front: "tanda", reading: "tanda", meaning: "a sign", example: { jp: "Tanda di jalan itu sudah lama.", en: "The sign on that road is old." }, accept: ["a mark", "an indication", "a token"], drill: { jp: "Tanda di pintu itu sangat kecil", en: "The sign on that door is very small" }, hint: "TAN-da. Both a road sign and a sign that something is true: tanda sakit, a sign of illness. ⚠️ Very common in compounds — tanda tangan, literally hand-mark, is a SIGNATURE, and menandatangani is to sign." },
        { id: "id-u26l4-gambar", type: "vocab", front: "gambar", reading: "gambar", meaning: "a picture", example: { jp: "Gambar itu ada di dinding kelas.", en: "That picture is on the classroom wall." }, accept: ["a drawing", "an image", "an illustration"], drill: { jp: "Anak itu membuat gambar pohon besar", en: "That child drew a picture of a big tree" }, hint: "GAM-bar, g hard. It covers a drawing, a photograph and a diagram alike. Menggambar is to draw. ⚠️ For a photograph specifically Indonesians usually say foto, and gambar leans towards something made by hand." },
        { id: "id-u26l4-bentuk", type: "vocab", front: "bentuk", reading: "bentuk", meaning: "a shape", example: { jp: "Bentuk buah itu seperti bintang.", en: "That fruit's shape is like a star." }, accept: ["a form", "the outline of a thing", "a configuration"], drill: { jp: "Bentuk daun itu panjang dan kecil", en: "That leaf's shape is long and small" }, hint: "buhn-TOOK, first e swallowed and the k caught in the throat. ⚠️ Different from ukuran, the size, which you already have: bentuk is what shape it is, ukuran how big. Membentuk is to form or to shape something." },
        { id: "id-u26l4-isi", type: "vocab", front: "isi", reading: "isi", meaning: "the contents", example: { jp: "Isi koper saya hanya baju.", en: "The contents of my suitcase are only clothes." }, accept: ["what is inside", "the filling", "the substance of it"], drill: { jp: "Isi buku itu sangat penting", en: "The contents of that book are very important" }, hint: "EE-see. ⚠️ It is also the imperative every Indonesian form uses: isi nama, fill in your name; isi bensin, fill up with petrol. Berisi means containing. So a card asking for the noun will not be the only way you meet this word." },
        { id: "id-u26l4-catatan", type: "vocab", front: "catatan", reading: "catatan", meaning: "a note", example: { jp: "Catatan saya hilang dari tas.", en: "My notes went missing from my bag." }, accept: ["a written record", "a jotting", "a memo"], drill: { jp: "Catatan guru itu sangat panjang", en: "That teacher's notes are very long" }, hint: "chah-TAH-tan — the c is CH. Built on catat, the root inside mencatat, to write down, which you already have: mencatat is the ACT, catatan the RESULT. ⚠️ It also means a caveat, printed as catatan at the foot of a document, exactly like English *note*." },
        { id: "id-u26l4-kamus", type: "vocab", front: "kamus", reading: "kamus", meaning: "a dictionary", example: { jp: "Saya mencari arti kata itu di kamus.", en: "I looked up the meaning of that word in a dictionary." }, accept: ["a lexicon", "a word book", "a glossary"], drill: { jp: "Kamus itu besar dan sangat berat", en: "That dictionary is big and very heavy" }, hint: "KAH-moos. From Arabic. ⚠️ Note how a book's page is referred to: Indonesian says halaman for a page, the identical word A1 taught you for a YARD, so this course cannot give it a second card — but you will see it printed in every book." },
      ],
    },
  ],
};
