// ID Unit 44 — Ilmu dan kuliah ("Knowledge and university") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 3 (u41–u50). unit1.js's 12 conventions and unit21.js's 10 A2
// conventions BIND this file. RETITLED AND RETHEMED from "Vocabulary 5 (A2)".
//
// THE HOLE, AND WHY IT IS NOT A DUPLICATE OF A1's SCHOOL UNIT. A1 taught school at
// ground level — u3l3 (`guru` · `pelajar` · `mahasiswa` · `bekerja`) and u18l3/l4
// (`buku` · `pelajaran` · `kelas` · `ujian` · `membaca` · `menulis` ·
// `pertanyaan` · `menjawab` · `mencatat`). Block 1's own note says of its u24:
// "SCHOOL IS NOT HERE — A1 finished it in u18 l3/l4; do not re-open it."
// This unit does not re-open it. Measured against all 720 merged cards, none of
// the following exists: **a subject name of any kind, a university, a lecture, a
// lecturer, a field of study, graduating, registering, a formula, a theory,
// research, counting, memorising, a library, a sheet of paper, a pencil.** A1
// taught a learner to sit in a classroom; this unit gives them the rest of an
// education.
//
// AFFIX ROOTS STRIPPED AND GREPPED BY HAND (convention 3):
//   pendidikan  → didik    root not taught.
//   mendaftar   → daftar   ⚠️ `daftar` IS taught ("a list", u9l1). Carded anyway:
//     a list does not give you to sign up, and convention 3's test passes. Drill-
//     safe — "mendaftar" contains "daftar" at index 3, preceded by `n`, so
//     findWholeWord does not match in either direction.
//   berlatih    → latih    root not taught; `latihan` is the -an noun off the same
//     root, same lesson. Neither whole-word-contains the other and the root itself
//     is not carded, so no lexeme is taught twice — the `bekerja`/`pekerjaan`
//     precedent (both in u3l3) applies exactly.
//   menghafal   → hafal    root not taught.
//   menghitung  → hitung   root not taught.
//   meneliti    → teliti   root not taught. ⚠️ `penelitian` and `peneliti` are the
//     other two derivations and are DECLINED: three cards off one untaught root is
//     over the A6 ceiling for value added, and "research" as a verb is what an A2
//     learner needs.
//   memeriksa   → periksa  root not taught.
//   perpustakaan → pustaka root not taught.
//   universitas · kuliah · dosen · jurusan · lulus · ilmu · sains · sejarah ·
//   matematika · teori · rumus · nilai · soal · kertas · pensil — all roots.
//
// ⚠️ `kertas` IS ON BLOCK 1's RESERVED LIST and is taken here (l4) — it is the
// stationery lesson's own word. Flagged in the hand-back.
//
// ⚠️ `nilai` IS CARDED TWICE IN THIS BAND, DELIBERATELY: `nilai` here as the NOUN
// (an exam score) and `menilai` in u49l2 as the VERB (to assess). Different units,
// and drill-safe — "menilai" contains "nilai" at index 2, preceded by `e`, so the
// router cannot confuse them. A6's three-cards-off-one-root allowance covers it.
//
// ⛔ NOT CARDED, EACH WITH A REASON:
//   `semester` — front and gloss are the same string; the card would be a copy
//     task (block 1's A10 rule, the same one that blocks `hotel` and `bus`).
//   `mempelajari` (to study in depth) — `belajar` (u3l4) already carries "to
//     study" in its accept[], and that root already has FOUR cards in the corpus
//     (`belajar` · `mengajar` · `pelajar` · `pelajaran`). Over the A6 ceiling.
//   `menerangkan` (to explain) — `menjelaskan` (u26l4) already owns that gloss.
//     Convention 3 forbids the second card.
//   `jawaban` (an answer) — a bare -an nominalisation off `menjawab`, which is
//     taught; A6's "a nominalisation that adds nothing" clause. Named in
//     `soal`'s hint instead.
//   `praktik` (hands-on practice) — crowds `berlatih` and `latihan` in the same
//     lesson for no new meaning.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT44 = {
  id: "id-u44",
  lang: "id",
  title: "Ilmu dan kuliah",
  order: 44,
  stage: "a2",
  lessons: [
    {
      id: "id-u44l1",
      unit: 44,
      lesson: 1,
      title: "Ilmu dan sejarah",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name what you are studying — a subject, a science, the past, the theory behind it — and talk about education as a thing in itself.",
      items: [
        { id: "id-u44l1-ilmu", type: "vocab", front: "ilmu", reading: "ilmu", meaning: "knowledge", example: { jp: "Ilmu itu penting untuk semua orang.", en: "Knowledge is important for everyone." }, accept: ["a branch of learning", "book learning", "scholarship"], drill: { jp: "Ilmu baru itu susah untuk saya", en: "That new field of learning is hard for me" }, hint: "EEL-moo. Both knowledge in general and a FIELD of it — ilmu sejarah, ilmu komputer. Arabic in origin, and it is the word Indonesian reaches for where English says science in the broad sense. Ilmiah means scientific." },
        { id: "id-u44l1-sains", type: "vocab", front: "sains", reading: "sains", meaning: "science", example: { jp: "Anak saya suka pelajaran sains.", en: "My child likes the science lesson." }, accept: ["natural science", "the sciences", "scientific study"], drill: { jp: "Sains dan matematika sangat penting", en: "Science and mathematics are very important" }, hint: "SAH-eens — two syllables, the a and i sliding together, not sayns. Borrowed from English for the school SUBJECT specifically. For science as a whole body of knowledge Indonesians still prefer ilmu or ilmu pengetahuan." },
        { id: "id-u44l1-sejarah", type: "vocab", front: "sejarah", reading: "sejarah", meaning: "history", example: { jp: "Saya membaca buku sejarah kota ini.", en: "I am reading a history book about this city." }, accept: ["the story of what happened", "a historical account", "the record of the past"], drill: { jp: "Sejarah desa itu sangat panjang", en: "The history of that village is very long" }, hint: "suh-JAH-rah. Both the subject and the story of a particular thing: sejarah Indonesia, sejarah keluarga saya. Bersejarah means historic. Note it is not built on se- plus anything — the whole word is Arabic in origin." },
        { id: "id-u44l1-matematika", type: "vocab", front: "matematika", reading: "matematika", meaning: "mathematics", example: { jp: "Matematika itu susah tetapi menarik.", en: "Mathematics is hard but interesting." }, accept: ["maths", "the study of numbers", "sums and figures"], drill: { jp: "Guru matematika kami sangat sabar", en: "Our mathematics teacher is very patient" }, hint: "mah-tuh-MAH-tee-ka, five syllables. The full form is always written out; in speech students shorten it to matematika or the slangy matik. ⚠️ Nothing to do with mata, an eye, despite the first four letters." },
        { id: "id-u44l1-teori", type: "vocab", front: "teori", reading: "teori", meaning: "a theory", example: { jp: "Teori itu susah tetapi benar.", en: "That theory is hard but correct." }, accept: ["a proposed explanation", "the theoretical side", "a principle"], drill: { jp: "Teori baru itu ada di buku", en: "That new theory is in the book" }, hint: "tuh-OH-ree, three syllables and no th sound — Indonesian has no th, so a borrowed one always becomes plain t. Teoritis is theoretical. In a course description teori is the classroom half and praktik the hands-on half." },
        { id: "id-u44l1-pendidikan", type: "vocab", front: "pendidikan", reading: "pendidikan", meaning: "education", example: { jp: "Pendidikan anak itu penting bagi keluarga.", en: "That child's education is important for the family." }, accept: ["upbringing and learning", "the education system", "formal teaching"], drill: { jp: "Pendidikan di desa itu masih kurang", en: "Education in that village is still lacking" }, hint: "puhn-dee-DEE-kan. Built on didik, to bring up and instruct, so it is wider than school: it covers a child's whole formation. Pendidikan tinggi is higher education. Note this is the SYSTEM; sekolah is the building and pelajaran the lesson." },
      ],
    },
    {
      id: "id-u44l2",
      unit: 44,
      lesson: 2,
      title: "Kuliah dan universitas",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Enrol and get through higher education — sign up, name your subject and your lecturer, sit the lectures, and pass.",
      items: [
        { id: "id-u44l2-universitas", type: "vocab", front: "universitas", reading: "universitas", meaning: "a university", example: { jp: "Universitas itu ada di kota besar.", en: "That university is in a big city." }, accept: ["a higher institution", "a degree-level school", "the campus"], drill: { jp: "Kakak saya belajar di universitas", en: "My older sibling studies at a university" }, hint: "oo-nee-vuhr-see-TAHS, five syllables, and the ending is -tas, not -ty: Indonesian takes the Latin form the way Dutch does. You already know mahasiswa, a university student — this is where they go." },
        { id: "id-u44l2-kuliah", type: "vocab", front: "kuliah", reading: "kuliah", meaning: "a lecture", example: { jp: "Kuliah pagi ini sangat panjang.", en: "This morning's lecture is very long." }, accept: ["a university class", "a course at university", "higher study"], drill: { jp: "Dia ada kuliah pada jam delapan", en: "He has a lecture at eight o'clock" }, hint: "koo-LEE-ah. Both one lecture and the whole experience of being at university: saya kuliah di Jakarta means I study at university in Jakarta, with no verb needed. Keep it apart from pelajaran, which you know as a school lesson." },
        { id: "id-u44l2-dosen", type: "vocab", front: "dosen", reading: "dosen", meaning: "a lecturer", example: { jp: "Dosen saya sangat pintar dan ramah.", en: "My lecturer is very clever and friendly." }, accept: ["a university teacher", "a faculty member", "a professor"], drill: { jp: "Dosen itu menulis buku sejarah", en: "That lecturer writes history books" }, hint: "DOH-suhn, second e swallowed. ⚠️ A guru teaches at school and a dosen at university, and the two are NOT interchangeable — calling a university lecturer guru sounds wrong, and the reverse sounds pompous. Dutch docent." },
        { id: "id-u44l2-jurusan", type: "vocab", front: "jurusan", reading: "jurusan", meaning: "a field of study", example: { jp: "Jurusan saya adalah sejarah.", en: "My field of study is history." }, accept: ["a major subject", "a department of study", "the course you chose"], drill: { jp: "Jurusan itu ada di universitas besar", en: "That field of study is at a big university" }, hint: "joo-ROO-san. ⚠️ THE SAME WORD IS WRITTEN ON EVERY BUS AND TICKET WINDOW meaning the route or destination — jurusan Bandung. Both senses are the same idea: the direction you are headed in. Context separates them completely." },
        { id: "id-u44l2-lulus", type: "vocab", front: "lulus", reading: "lulus", meaning: "to graduate", example: { jp: "Kakak saya lulus tahun lalu.", en: "My older sibling graduated last year." }, accept: ["to pass a course", "to come through an exam", "to complete your studies"], drill: { jp: "Semua pelajar lulus ujian itu", en: "All the pupils passed that exam" }, hint: "LOO-loos. To get THROUGH something — an exam, a year, a whole degree. Tidak lulus is to fail it, and it is the normal way to say so; gagal, which you know, is stronger and broader. Lulusan is a graduate." },
        { id: "id-u44l2-mendaftar", type: "vocab", front: "mendaftar", reading: "mendaftar", meaning: "to sign up", example: { jp: "Saya mendaftar di universitas itu.", en: "I signed up at that university." }, accept: ["to apply to join", "to put your name down", "to enrol"], drill: { jp: "Dia mendaftar kuliah pada hari Senin", en: "He registers for university on Monday" }, hint: "muhn-DAHF-tar. Built on daftar, a list, which you already know — you sign up by getting onto the list. Pendaftaran is the registration itself, the word on the office door. Mendaftar is what you do; didaftarkan would be being put on it by someone else." },
      ],
    },
    {
      id: "id-u44l3",
      unit: 44,
      lesson: 3,
      title: "Berlatih dan menghafal",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe how you actually study — drilling, memorising, counting, researching, and working from a formula.",
      items: [
        { id: "id-u44l3-berlatih", type: "vocab", front: "berlatih", reading: "berlatih", meaning: "to practise", example: { jp: "Saya berlatih setiap pagi.", en: "I practise every morning." }, accept: ["to work at a skill", "to rehearse", "to drill yourself"], drill: { jp: "Dia berlatih menulis huruf baru", en: "He practises writing new letters" }, hint: "buhr-LAH-teeh. Repeating something to get better at it — a skill, a sport, an instrument. Belajar is learning something NEW; berlatih is grinding in what you already half-know. Its noun is the next card." },
        { id: "id-u44l3-latihan", type: "vocab", front: "latihan", reading: "latihan", meaning: "a practice session", example: { jp: "Latihan itu susah tetapi bagus.", en: "That practice session was hard but good." }, accept: ["a workbook task", "a training session", "a drill you work through"], drill: { jp: "Latihan pagi ini sangat panjang", en: "This morning's practice session is very long" }, hint: "lah-tee-HAHN. The -an ending makes the act into the THING, the same shape as pelajaran off ajar. It covers both a training session and an exercise in a book — buku latihan is a workbook. Latihan soal is exam practice." },
        { id: "id-u44l3-menghafal", type: "vocab", front: "menghafal", reading: "menghafal", meaning: "to learn by heart", example: { jp: "Saya menghafal semua nama itu.", en: "I learned all those names by heart." }, accept: ["to memorise", "to commit to memory", "to get off by heart"], drill: { jp: "Dia menghafal huruf baru setiap hari", en: "He memorises new letters every day" }, hint: "muhng-HAH-fal. Straight rote memory, with no suggestion of understanding — which is why Indonesian teachers contrast it with mengerti, to understand. Hafal on its own is an adjective: saya sudah hafal, I know it by heart already." },
        { id: "id-u44l3-menghitung", type: "vocab", front: "menghitung", reading: "menghitung", meaning: "to count", example: { jp: "Saya menghitung uang di dompet.", en: "I counted the money in the wallet." }, accept: ["to add up", "to work out a number", "to do the sums"], drill: { jp: "Anak itu menghitung semua buku", en: "That child counts all the books" }, hint: "muhng-HEE-toong. Counting items and doing arithmetic are the same verb. You already know berapa, how many, and angka, a digit — this is the action that connects them. Hitungan is a count or a calculation." },
        { id: "id-u44l3-meneliti", type: "vocab", front: "meneliti", reading: "meneliti", meaning: "to do research", example: { jp: "Dosen itu meneliti sejarah desa ini.", en: "That lecturer researches the history of this village." }, accept: ["to research", "to investigate closely", "to study in depth"], drill: { jp: "Dia meneliti bunyi mesin itu", en: "He investigates the noise of that machine" }, hint: "muh-nuh-LEE-tee. From teliti, careful and exact — so research is literally being thorough about something. Heavier than memeriksa, which is a check; meneliti is sustained study. Penelitian is the research itself and peneliti the researcher." },
        { id: "id-u44l3-rumus", type: "vocab", front: "rumus", reading: "rumus", meaning: "a formula", example: { jp: "Rumus matematika itu panjang.", en: "That mathematical formula is long." }, accept: ["an equation", "a set formula", "the written rule"], drill: { jp: "Rumus itu ada di buku matematika", en: "That formula is in the mathematics book" }, hint: "ROO-moos. A formula in maths, chemistry or physics — anything written as a fixed pattern you apply. Merumuskan is to formulate. It is the word a school textbook uses constantly, so it earns its place early." },
      ],
    },
    {
      id: "id-u44l4",
      unit: 44,
      lesson: 4,
      title: "Nilai dan soal",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Deal with the paperwork of studying — the questions on a test, the score you got, checking work, and what you write it all on.",
      items: [
        { id: "id-u44l4-nilai", type: "vocab", front: "nilai", reading: "nilai", meaning: "an exam score", example: { jp: "Nilai ujian saya bagus sekali.", en: "My exam score is very good." }, accept: ["a result you are given", "the score awarded", "what you were marked"], drill: { jp: "Nilai pelajar itu sudah keluar", en: "That pupil's score has come out" }, hint: "NEE-lai, the last two letters sliding into one sound. Its wider meaning is VALUE — nilai uang, the value of money — and a school score is the value put on your work. ⚠️ The verb off it, menilai, to assess, comes later in this band and is a different card." },
        { id: "id-u44l4-soal", type: "vocab", front: "soal", reading: "soal", meaning: "an exam question", example: { jp: "Soal itu susah untuk semua pelajar.", en: "That question was hard for all the pupils." }, accept: ["a problem to solve", "an item on a test", "a set question"], drill: { jp: "Ada lima soal di ujian ini", en: "There are five questions on this exam" }, hint: "SOH-al, two syllables with a small break. A question you must SOLVE, where pertanyaan, which you know, is a question you ask a person. The answer to one is a jawaban. ⚠️ Soal also means the matter at hand: soal uang, the money question." },
        { id: "id-u44l4-perpustakaan", type: "vocab", front: "perpustakaan", reading: "perpustakaan", meaning: "a library", example: { jp: "Perpustakaan sekolah itu besar dan sepi.", en: "That school library is big and quiet." }, accept: ["a book collection", "the reading room", "a place that lends books"], drill: { jp: "Saya membaca buku di perpustakaan", en: "I read books at the library" }, hint: "puhr-poos-tah-KAH-an — six syllables, the longest word in this unit. Built on pustaka, an old word for a book or a scripture, wrapped in per-…-an, the shape that makes a PLACE. Learn it as a whole; nobody says pustaka on its own any more." },
        { id: "id-u44l4-memeriksa", type: "vocab", front: "memeriksa", reading: "memeriksa", meaning: "to check", example: { jp: "Guru memeriksa semua soal itu.", en: "The teacher checked all those questions." }, accept: ["to look over", "to inspect", "to go through and verify"], drill: { jp: "Dosen memeriksa nilai pelajar baru", en: "The lecturer checks the new pupils' scores" }, hint: "muh-muh-REEK-sa. Going over something to see whether it is right or sound. A doctor does it to a patient, a teacher to a paper, an official to a document. Lighter than meneliti, which is real research. Pemeriksaan is an inspection or a medical examination." },
        { id: "id-u44l4-kertas", type: "vocab", front: "kertas", reading: "kertas", meaning: "a sheet of paper", example: { jp: "Saya menulis nama di kertas itu.", en: "I wrote my name on that sheet of paper." }, accept: ["writing paper", "a page of paper", "a slip of paper"], drill: { jp: "Ada kertas putih di atas meja", en: "There is white paper on the table" }, hint: "KUHR-tas, first e swallowed. The MATERIAL and a single sheet of it alike — selembar kertas is one sheet. ⚠️ Not the same as koran, the newspaper, which you already know: English says the paper for both and Indonesian never does." },
        { id: "id-u44l4-pensil", type: "vocab", front: "pensil", reading: "pensil", meaning: "a pencil", example: { jp: "Pensil saya ada di dalam tas.", en: "My pencil is inside the bag." }, accept: ["a lead pencil", "a writing pencil", "something to write with"], drill: { jp: "Dia menulis dengan pensil hitam", en: "He writes with a black pencil" }, hint: "PEHN-seel. Spelled with an s where English has a c, because Indonesian writes the sound. The pen counterpart is pulpen, from Dutch vulpen, a fountain pen — and it now covers any pen." },
      ],
    },
  ],
};
