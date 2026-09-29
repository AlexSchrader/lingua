// ID Unit 24 — Di tempat kerja ("At the workplace") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 1 (u21–u30). unit1.js's 12 conventions and unit21.js's A1–A10 BIND
// this file.
//
// 🚨 RETHEMED FROM "Work and school", because A1 already spent both halves of
// that title and left the middle empty. Measured against all 480 A1 cards:
//   • WORK, the basics: `bekerja` · `pekerjaan` · `kantor` · `guru` — A1's u3.
//   • SCHOOL, thoroughly: `sekolah` · `pelajar` · `mahasiswa` · `pelajaran` ·
//     `kelas` · `ujian` · `buku` · `pertanyaan` · `menjawab` · `menjelaskan` ·
//     `mengulang` · `mencatat` · `contoh` — A1's u18 l3 and l4.
//   • THE WORKPLACE ITSELF: **nothing.** No salary, no meeting, no employee, no
//     colleague, no superior, no firm, no customer, no task, no report, no
//     project, no leave, no overtime, no interview, no experience, and no verb
//     for succeeding or failing at any of it.
// So school is left alone — it is done — and this unit is the working world.
//   l1  the people   — karyawan · atasan · rekan · perusahaan · tim · pelanggan
//   l2  pay and hours — gaji · lembur · cuti · kontrak · tunjangan · absen
//   l3  the work     — tugas · laporan · proyek · rapat · berkas · tujuan
//   l4  how it goes  — berhasil · gagal · melamar · wawancara · pengalaman · ahli
//
// ⚠️ `perusahaan` IS GLOSSED "a business", AND IT TOOK TWO TRIES — which is
// exactly why unit21.js A4 says to probe accept[] and not just `meaning`. A1's
// `tamu` (guest) carries **"company"** (the having-people-over sense), so "a
// company" was out. The obvious fallback, "a firm", is ALSO taken: A1's `kuat`
// (strong) carries **"firm"**. Both were caught by the self-check, not by
// `lint:curriculum`, which sees neither. "a business" is clear on both.
//
// ⚠️ `mengerjakan` IS DELIBERATELY NOT CARDED, and it is the worked example for
// unit21.js A6's ceiling on affix depth. `kerja` already carries two cards —
// `bekerja` (to work) and `pekerjaan` (a job), both A1's. A third, `mengerjakan`
// (to work on something), fails convention 3's test: a learner who has *to work*
// and *a job* can read it straight off, and it earns nothing a `tugas` plus
// `bekerja` sentence does not already say. The 24 slots went to words that teach.
//
// AFFIX ROOTS CHECKED BY HAND (the LEXEME probe fails open for Indonesian —
// unit1.js convention 3; a `free` on a prefixed form is worth nothing, so each
// root was stripped and grepped in TAUGHT-WORDS.md):
//   perusahaan → usaha  ⚠️ root NOT taught, and `berusaha` (to make an effort) is
//     this block's other card off it. Neither whole-word-contains the other —
//     "perusahaan" has "usaha" at index 2 preceded by "r", "berusaha" at index 3
//     preceded by "r" — so both drills route correctly. unit21.js A6.
//   berhasil → hasil    ⚠️ `hasil` (a result) is carded LATER in this block, on
//     purpose: putting them in one lesson would be an affix pair a learner meets
//     twice in six cards. Drill-safe — "berhasil" contains "hasil" at index 3
//     preceded by "r", so neither drill can steal the other's blank.
//   atasan → atas       root not taught.
//   pengalaman → alam   root not taught.
//   laporan → lapor · tunjangan → tunjang · pelanggan → langgan ·
//   karyawan → karya · melamar → lamar · tugas · rapat · berkas · gaji ·
//   lembur · cuti · kontrak · absen · proyek · tim · rekan · wawancara ·
//   gagal · ahli · tujuan (→ tuju, untaught)
//     — NONE of those roots is taught.
//
// ⚠️ `rapat` IS A HOMOGRAPH AND THE OTHER SENSE IS NOT CARDED. As an adjective
// `rapat` means tightly closed or close together (pintu rapat, the door is shut
// tight). The meeting sense is the A2-useful one and takes the front; the other is
// named in its hint. Same shape as A1's `bulan` (month, blocking *moon*) and
// `halaman` (yard, blocking *page*) — see unit21.js A10. **Not an omission.**
//
// SCOPE NOTE: `tentang` (about) is carded later in this block, so no example here
// can say "a report about the project" yet. Every one uses `untuk`, `dan` or a
// bare object instead, which is also how Indonesians usually say it.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT24 = {
  id: "id-u24",
  lang: "id",
  title: "Di tempat kerja",
  order: 24,
  stage: "a2",
  lessons: [
    {
      id: "id-u24l1",
      unit: 24,
      lesson: 1,
      title: "Orang di kantor",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name everyone around a job — who you work for, who you work with, and who you serve.",
      items: [
        { id: "id-u24l1-karyawan", type: "vocab", front: "karyawan", reading: "karyawan", meaning: "an employee", example: { jp: "Semua karyawan datang jam delapan pagi.", en: "All the employees come at eight in the morning." }, accept: ["a member of staff", "a worker", "someone on the payroll"], drill: { jp: "Karyawan baru itu sangat rajin", en: "That new employee is very diligent" }, hint: "kar-ya-WAHN. Built on karya, a work or a creation. Pegawai is the near-twin and is used more for government posts — pegawai negeri is a civil servant — while karyawan leans private-sector. Either is understood anywhere." },
        { id: "id-u24l1-atasan", type: "vocab", front: "atasan", reading: "atasan", meaning: "a superior at work", example: { jp: "Atasan saya sangat sabar dan ramah.", en: "My boss is very patient and friendly." }, accept: ["a boss", "a line manager", "the person above you"], drill: { jp: "Atasan kami setuju dengan rencana itu", en: "Our boss agrees with that plan" }, hint: "ah-tah-SAHN. From atas, above — literally the one above you. Its exact opposite, bawahan, is a subordinate, from bawah, below. ⚠️ Indonesians also just say bos, borrowed straight from English; atasan is the neutral word you would write." },
        { id: "id-u24l1-rekan", type: "vocab", front: "rekan", reading: "rekan", meaning: "a colleague", example: { jp: "Rekan saya membantu saya setiap hari.", en: "My colleague helps me every day." }, accept: ["a co-worker", "a workmate", "a business partner"], drill: { jp: "Dua rekan saya sudah pulang", en: "Two of my colleagues have already gone home" }, hint: "RUH-kan, first e swallowed. Slightly formal; in conversation Indonesians say teman kerja, work friend, using the teman you already have. Rekan kerja is the full compound and is what you would put in writing." },
        { id: "id-u24l1-perusahaan", type: "vocab", front: "perusahaan", reading: "perusahaan", meaning: "a business", example: { jp: "Perusahaan itu besar dan punya banyak kantor.", en: "That business is big and has many offices." }, accept: ["a corporation", "an enterprise", "a commercial outfit"], drill: { jp: "Perusahaan kami menjual mobil dan motor", en: "Our business sells cars and motorbikes" }, hint: "puh-roo-sah-HA-an — five syllables, and the last two a's are separate. Built on usaha, an effort or a venture, the same root as berusaha, to make an effort. ⚠️ Glossed business rather than company because tamu, a guest, already carries company in the other sense, and kuat, strong, already carries firm." },
        { id: "id-u24l1-tim", type: "vocab", front: "tim", reading: "tim", meaning: "a team", example: { jp: "Tim kami berhasil karena semua bekerja bersama.", en: "Our team succeeded because everyone worked together." }, accept: ["a squad", "a working group", "a crew"], drill: { jp: "Tim itu punya lima orang saja", en: "That team has only five people" }, hint: "TEEM, one syllable. Borrowed, and note the spelling has no -ea, because Indonesian writes the sound it makes. ⚠️ Confusingly, tim is ALSO a cooking verb, to steam — nasi tim is steamed rice porridge. Context does all the work." },
        { id: "id-u24l1-pelanggan", type: "vocab", front: "pelanggan", reading: "pelanggan", meaning: "a customer", example: { jp: "Pelanggan itu membeli banyak baju.", en: "That customer bought a lot of shirts." }, accept: ["a client", "a regular buyer", "a subscriber"], drill: { jp: "Pelanggan kami selalu meminta harga murah", en: "Our customers always ask for a cheap price" }, hint: "puh-LANG-gan — ngg is the hum plus a hard g. From langgan, to subscribe, so it leans towards a REGULAR: your electricity company calls you its pelanggan. For a one-off shopper Indonesians often say pembeli, the buyer, from membeli." },
      ],
    },
    {
      id: "id-u24l2",
      unit: 24,
      lesson: 2,
      title: "Gaji dan jam kerja",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about the terms of a job — what it pays, what the extras are, and how to be off or absent.",
      items: [
        { id: "id-u24l2-gaji", type: "vocab", front: "gaji", reading: "gaji", meaning: "a salary", example: { jp: "Saya menerima gaji setiap akhir bulan.", en: "I receive my salary at the end of every month." }, accept: ["monthly pay", "wages", "what a job pays"], drill: { jp: "Gaji karyawan baru itu tidak besar", en: "That new employee's salary is not large" }, hint: "GAH-jee, g hard as in GET. Covers a monthly salary and an hourly wage alike — Indonesian does not split them the way English does. Gajian, with the -an, is payday, and it is a social event as much as a date." },
        { id: "id-u24l2-lembur", type: "vocab", front: "lembur", reading: "lembur", meaning: "overtime", example: { jp: "Ayah lembur karena pekerjaan belum selesai.", en: "Father is working overtime because the work is not finished." }, accept: ["extra hours", "working late", "after-hours work"], drill: { jp: "Kami lembur sampai jam sembilan malam", en: "We worked overtime until nine at night" }, hint: "LUHM-boor, first e swallowed. It is both the noun and the verb — saya lembur means I am working late, with no extra word needed. Uang lembur is the overtime pay itself." },
        { id: "id-u24l2-cuti", type: "vocab", front: "cuti", reading: "cuti", meaning: "leave from work", example: { jp: "Saya cuti dua hari minggu ini.", en: "I am on leave for two days this week." }, accept: ["annual leave", "time off work", "a booked absence"], drill: { jp: "Ibu saya cuti karena sakit", en: "My mother is on leave because she is ill" }, hint: "CHOO-tee — c is CH. ⚠️ Not the same as libur: libur is a day nobody works, a public holiday or a weekend, while cuti is leave YOU have applied for. Cuti bersama is the Indonesian practice of a nationally coordinated bridge day." },
        { id: "id-u24l2-kontrak", type: "vocab", front: "kontrak", reading: "kontrak", meaning: "a work contract", example: { jp: "Kontrak dia selesai bulan Maret.", en: "His contract finishes in March." }, accept: ["an agreement in writing", "a fixed-term deal", "terms of employment"], drill: { jp: "Kontrak karyawan itu satu tahun", en: "That employee's contract is one year" }, hint: "KON-trak, final k caught in the throat. Note the spelling: no c, because Indonesian uses k for that sound everywhere. Karyawan kontrak is a fixed-term employee, as against karyawan tetap, a permanent one — tetap, staying the same, comes up later in this band." },
        { id: "id-u24l2-tunjangan", type: "vocab", front: "tunjangan", reading: "tunjangan", meaning: "an allowance", example: { jp: "Perusahaan memberi tunjangan untuk semua karyawan.", en: "The firm gives an allowance to all employees." }, accept: ["a benefit", "an extra payment", "a supplement"], drill: { jp: "Tunjangan itu lebih besar dari gaji lama", en: "That allowance is bigger than the old salary" }, hint: "toon-JAH-ngan. From tunjang, to support. The one every Indonesian worker knows by its initials is THR — tunjangan hari raya, the religious-holiday bonus, which is a legal entitlement rather than a gift." },
        { id: "id-u24l2-absen", type: "vocab", front: "absen", reading: "absen", meaning: "absent", example: { jp: "Dua pelajar absen karena hujan besar.", en: "Two pupils were absent because of the heavy rain." }, accept: ["away", "not present", "off"], drill: { jp: "Rekan saya absen dua hari ini", en: "My colleague has been absent for two days" }, hint: "AHB-sen. ⚠️ It has flipped meaning in workplace use: absen is ALSO the verb for clocking in — absen dulu, sign in first — because the absen is the attendance list you sign. Absensi is attendance. Context decides, and the office sense is now the commoner one." },
      ],
    },
    {
      id: "id-u24l3",
      unit: 24,
      lesson: 3,
      title: "Tugas dan laporan",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say what a piece of work is, what it is for, and where its paperwork and its meeting sit.",
      items: [
        { id: "id-u24l3-tugas", type: "vocab", front: "tugas", reading: "tugas", meaning: "a task", example: { jp: "Tugas saya hari ini tidak susah.", en: "My task today is not difficult." }, accept: ["a duty", "an assignment", "a job to do"], drill: { jp: "Guru memberi tugas untuk semua kelas", en: "The teacher gave a task to the whole class" }, hint: "TOO-gas. Covers both a work duty and a school assignment, so a pupil and a manager use the same word. Bertugas means to be on duty. ⚠️ Narrower than pekerjaan, which is the job as a whole; a tugas is one piece of it." },
        { id: "id-u24l3-laporan", type: "vocab", front: "laporan", reading: "laporan", meaning: "a report", example: { jp: "Laporan itu harus selesai besok pagi.", en: "That report must be finished tomorrow morning." }, accept: ["a written account", "a statement of findings", "a filing"], drill: { jp: "Saya menulis laporan untuk atasan saya", en: "I wrote a report for my boss" }, hint: "lah-POR-an. From lapor, to report in. Melapor is what you do at a police station or a reception desk; laporan is the document that results. Wartawan, a journalist, is built on the same idea of carrying word." },
        { id: "id-u24l3-proyek", type: "vocab", front: "proyek", reading: "proyek", meaning: "a project", example: { jp: "Proyek baru itu mulai bulan depan.", en: "That new project starts next month." }, accept: ["a scheme", "a programme of work", "an undertaking"], drill: { jp: "Tim kami punya dua proyek besar", en: "Our team has two big projects" }, hint: "PROY-yek. Note the spelling — Indonesian writes the j sound as y here because it came through Dutch, so it is proyek and never *project*. In news about roads and buildings, proyek almost always means a construction job." },
        { id: "id-u24l3-rapat", type: "vocab", front: "rapat", reading: "rapat", meaning: "a meeting", example: { jp: "Rapat pagi ini sangat lama.", en: "This morning's meeting was very long." }, accept: ["a conference", "a formal discussion", "a sit-down"], drill: { jp: "Atasan kami rapat dengan tim lain", en: "Our boss is in a meeting with the other team" }, hint: "RAH-pat. It works as a verb too, with no extra word: saya rapat jam dua, I have a meeting at two. ⚠️ A homograph — as an adjective rapat means tightly shut or packed close (pintu rapat), and that sense is not carded here. Context separates them cleanly." },
        { id: "id-u24l3-berkas", type: "vocab", front: "berkas", reading: "berkas", meaning: "a file of papers", example: { jp: "Berkas itu ada di lemari kantor.", en: "That file is in the office cupboard." }, accept: ["a dossier", "the paperwork", "a bundle of documents"], drill: { jp: "Semua berkas itu ada di kantor", en: "All those files are in the office" }, hint: "BUHR-kas, first e swallowed. Originally a bundle or a sheaf, which is exactly what an Indonesian office file is. Dokumen is the borrowed word for a single document; berkas is the collected set you carry to a counter." },
        { id: "id-u24l3-tujuan", type: "vocab", front: "tujuan", reading: "tujuan", meaning: "a goal", example: { jp: "Tujuan kami adalah menjual lebih banyak.", en: "Our goal is to sell more." }, accept: ["an aim", "a purpose", "the objective"], drill: { jp: "Tujuan proyek itu sangat bagus", en: "That project's goal is very good" }, hint: "too-JOO-an. From tuju, to head towards — so a tujuan is what you are heading for. ⚠️ Its OTHER everyday use is on tickets and signs: tujuan means destination, and kereta tujuan Bandung is the Bandung-bound train." },
      ],
    },
    {
      id: "id-u24l4",
      unit: 24,
      lesson: 4,
      title: "Berhasil atau gagal",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Report how something turned out, apply for work, and say what you are good at.",
      items: [
        { id: "id-u24l4-berhasil", type: "vocab", front: "berhasil", reading: "berhasil", meaning: "to succeed", example: { jp: "Kami berhasil selesai sebelum malam.", en: "We managed to finish before nightfall." }, accept: ["to manage it", "to pull it off", "to be successful"], drill: { jp: "Tim itu berhasil menjual semua tiket", en: "That team succeeded in selling all the tickets" }, hint: "buhr-HAH-seel. Built on hasil, a result, which you meet later in this band — so berhasil is literally to have a result. Also the everyday to MANAGE to do something: saya berhasil membuka pintu, I got the door open. Keberhasilan is success." },
        { id: "id-u24l4-gagal", type: "vocab", front: "gagal", reading: "gagal", meaning: "to fail", example: { jp: "Proyek itu gagal karena uang kurang.", en: "That project failed because there was not enough money." }, accept: ["to fall through", "to come to nothing", "to be unsuccessful"], drill: { jp: "Saya gagal membuka pintu lemari itu", en: "I failed to open that cupboard door" }, hint: "GAH-gal, both g's hard. The clean opposite of berhasil, and it applies to plans, machines and exams alike — gagal panen is a failed harvest. Kegagalan is a failure. ⚠️ For failing an exam specifically, Indonesians say tidak lulus, did not pass." },
        { id: "id-u24l4-melamar", type: "vocab", front: "melamar", reading: "melamar", meaning: "to apply for a job", example: { jp: "Dia melamar pekerjaan di dua perusahaan.", en: "He applied for jobs at two firms." }, accept: ["to put in an application", "to seek a post", "to apply"], drill: { jp: "Saya melamar pekerjaan di kantor itu", en: "I applied for a job at that office" }, hint: "muh-LAH-mar. ⚠️ THE SAME VERB MEANS TO PROPOSE MARRIAGE — melamar seseorang is to ask for their hand, and the context is always obvious, but the overlap surprises everyone. Lamaran covers both the job application and the proposal." },
        { id: "id-u24l4-wawancara", type: "vocab", front: "wawancara", reading: "wawancara", meaning: "an interview", example: { jp: "Wawancara saya besok jam sepuluh.", en: "My interview is tomorrow at ten." }, accept: ["a formal questioning", "a job interview", "a press interview"], drill: { jp: "Wawancara itu hanya sepuluh menit", en: "That interview was only ten minutes" }, hint: "wah-wan-CHA-ra — the c is CH. A native-built word, not a borrowing, from wawan, mutual, plus cara, a method — a mutual method, which is a rather lovely way to describe it. Used for both job and journalistic interviews." },
        { id: "id-u24l4-pengalaman", type: "vocab", front: "pengalaman", reading: "pengalaman", meaning: "experience", example: { jp: "Pengalaman dia sudah banyak sekali.", en: "He already has a great deal of experience." }, accept: ["what somebody has been through", "a past record", "practical knowledge"], drill: { jp: "Pengalaman itu mengajar saya banyak sekali", en: "That experience taught me a great deal" }, hint: "puh-ngah-LAH-man. From alam, which means nature and also to undergo — so experience is what you have been through. It covers both the CV sense and a single memorable event: pengalaman yang bagus, a good experience. Berpengalaman means experienced." },
        { id: "id-u24l4-ahli", type: "vocab", front: "ahli", reading: "ahli", meaning: "an expert", example: { jp: "Dia ahli bahasa dan sudah menulis buku.", en: "She is a language expert and has written a book." }, accept: ["a specialist", "somebody skilled at it", "an authority"], drill: { jp: "Kami mau ahli untuk proyek ini", en: "We want an expert for this project" }, hint: "AH-lee, both syllables clear. It works as an adjective too: dia ahli, she is expert at it. Compounds freely — ahli bahasa, a linguist; ahli masak, a skilled cook. Keahlian is expertise or a skill." },
      ],
    },
  ],
};
