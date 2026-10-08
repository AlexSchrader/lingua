// ID Unit 79 — Dokumen dan urusan resmi ("Documents and official business") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u77–u87). The 12 conventions in unit1.js and the 10 A2 conventions
// in unit21.js BIND this file. Read both before editing.
//
// THE HOLE THIS FILLS, measured against all 1200 A1+A2 cards. A2 gave the
// learner the JUDGEMENTS about officialdom — `resmi` · `sah` · `izin` · `denda` ·
// `kontrak` · `kwitansi` · `ijazah` · `paspor` · `pengumuman` — and not one word
// for the paper itself. A learner who can say `izin` cannot fill in a single
// Indonesian form: no word for a form, a field on it, an attachment, a service
// window, a rubber stamp, a duty stamp, an application, or the terms printed at
// the bottom. In a country where every transaction has a counter and a stamp,
// that is a daily-life gap, not an advanced one.
//
// THE THREE CROSS-BLOCK BOUNDARIES THIS UNIT SITS ON. Read all three before
// adding a card here:
//   1. PROCESS AND PROCEDURE is another block's slot. `tahap` · `prosedur` ·
//      `langkah` · `melaksanakan` · `memantau` are THEIRS. This unit owns the
//      PAPER: `formulir` · `lampiran` · `permohonan` · `loket`, and `mengurus`.
//   2. BUREAUCRATIC REGISTER is another block's slot. The written connectives
//      (`tersebut` · `sebagaimana` · `berdasarkan` · `perihal`) are THEIRS. This
//      unit takes the NOUNS of paperwork; they take the language it is written in.
//   3. `syarat` (a condition/requirement) is another block's card. `ketentuan`
//      (the terms as printed) is carded here instead, and the two are different
//      words: a syarat is one thing you must satisfy, ketentuan is the whole
//      printed set.
//
// `dokumen` IS IN THE TITLE AND IS NOT A CARD. Front and English gloss differ by
// two letters (dokumen / document), so the produce card is a copy task — the same
// rejection A2 made for `skor`. `pemohon` is carded in that slot instead. The
// title keeps the word because it is ordinary Indonesian and names the theme.
//
// SIX CARDS ARE DERIVATIONS OF AN ALREADY-TAUGHT ROOT. Every one passes
// convention 3's test and every one is named in its own hint. Listed here because
// `check-front.mjs` reported ALL SIX FREE — it strips German suffixes and
// Indonesian derives by prefix, so a `free` on a prefixed form is worth nothing:
//   `mengisi`        <- isi (the contents) + berisi (to contain) = THIRD off this
//                       root, at A6's ceiling of three, and each is a different word
//   `pendaftaran`    <- mendaftar (to register)
//   `salinan`        <- menyalin (to copy)
//   `ketentuan`      <- tentu (certain)
//   `memperpanjang`  <- panjang (long)
//   `menandatangani` <- tanda (a sign) + this unit's `tanda tangan` = THIRD off
//                       root tanda, at the ceiling, three different words
//
// GLOSSES REWRITTEN BECAUSE THE GRADER COLLIDED THEM. `normalizeMeaning` strips a
// leading "to " and "a/an/the", and `lint:curriculum` compares exact strings, so
// none of these four was visible to lint:
//   `formulir`       "a form"      -> `bentuk` owns "form". Now "a printed form".
//   `menandatangani` "to sign"     -> `tanda` ("a sign") normalises to the same
//                                    string. Now "to put your signature on".
//   `salinan`        "a duplicate" -> `menyalin` accepts "to duplicate". Now "a photocopy".
//   `berwenang`      "authorised"  -> `resmi` owns it. Now "having official authority".
//
// FOLD NOTE (unit1.js §9): `tanda tangan` folds to "tandatangan", which collides
// with nothing. It DOES whole-word-contain both `tanda` and `tangan`, so its own
// drill carries the compound and the taught singles are left alone.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT79 = {
  id: "id-u79",
  lang: "id",
  title: "Dokumen dan urusan resmi",
  order: 79,
  stage: "b1",
  lessons: [
    {
      id: "id-u79l1",
      unit: 79,
      lesson: 1,
      title: "Mengisi formulir",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Fill in an Indonesian form: name the form, its fields, the signature, and the documents you have to attach to it.",
      items: [
        { id: "id-u79l1-formulir", type: "vocab", front: "formulir", reading: "formulir", meaning: "a printed form", example: { jp: "Formulir itu ada di meja depan.", en: "That form is on the front desk." }, accept: ["an application form", "a form to fill in"], drill: { jp: "Formulir itu ada di meja depan", en: "That form is on the front desk" }, hint: "for-moo-LEER. From Dutch, so the ending is -lir and not -lar. You already know bentuk for \"form\" in the sense of a shape, which is why this card is glossed a PRINTED form: the grader would otherwise accept one answer for both." },
        { id: "id-u79l1-kolom", type: "vocab", front: "kolom", reading: "kolom", meaning: "a column on a form", example: { jp: "Kolom tanggal masih kosong.", en: "The date field is still empty." }, accept: ["a field on a form", "a printed column"], drill: { jp: "Kolom tanggal masih kosong", en: "The date field is still empty" }, hint: "KO-lom. The boxed space you write in. Indonesian forms call every blank a kolom, even one that is a single line rather than a column, so treat it as \"field\"." },
        { id: "id-u79l1-mengisi", type: "vocab", front: "mengisi", reading: "mengisi", meaning: "to fill in", example: { jp: "Tolong mengisi kolom nama dan alamat.", en: "Please fill in the name and address fields." }, accept: ["to complete a form", "to enter details"], drill: { jp: "Tolong mengisi kolom nama dan alamat", en: "Please fill in the name and address fields" }, hint: "muh-NGEE-see, one ng hum. Built on isi, \"the contents\", which you already know along with berisi, \"to contain\". Three words off one root, each a different job: the contents, to contain, to fill in." },
        { id: "id-u79l1-tandatangan", type: "vocab", front: "tanda tangan", reading: "tandatangan", meaning: "a signature", example: { jp: "Surat ini belum ada tanda tangan.", en: "This letter does not have a signature yet." }, accept: ["someone's written signature", "an autograph"], drill: { jp: "Surat ini belum ada tanda tangan", en: "This letter has no signature yet" }, hint: "Literally \"hand sign\", and you know both halves: tanda (a sign) and tangan (a hand). Two words when it is the noun. Indonesians shorten it to TTD in writing." },
        { id: "id-u79l1-menandatangani", type: "vocab", front: "menandatangani", meaning: "to put your signature on", reading: "menandatangani", example: { jp: "Siapa yang harus menandatangani kontrak ini?", en: "Who has to sign this contract?" }, accept: ["to sign a document", "to endorse by signing"], drill: { jp: "Siapa yang harus menandatangani kontrak ini", en: "Who has to sign this contract" }, hint: "Six syllables: muh-nahn-da-TA-nga-nee. The verb built from tanda tangan with me- and -i wrapped round it. The gloss avoids the bare \"to sign\" on purpose, because the grader already reads tanda, \"a sign\", as the same answer." },
        { id: "id-u79l1-lampiran", type: "vocab", front: "lampiran", reading: "lampiran", meaning: "an attachment", example: { jp: "Lampiran untuk permohonan ini ada tiga.", en: "There are three attachments for this application." }, accept: ["an enclosed document", "an appendix"], drill: { jp: "Lampiran untuk formulir ini ada tiga", en: "There are three attachments for this form" }, hint: "lahm-PEE-rahn. Everything you staple behind the form: a copy of your ID, a photo, a certificate. Also the word for an attachment on an email." },
      ],
    },
    {
      id: "id-u79l2",
      unit: 79,
      lesson: 2,
      title: "Di loket",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Get something done at a government counter: find the right window, register, submit an application, and say you are seeing to the paperwork.",
      items: [
        { id: "id-u79l2-loket", type: "vocab", front: "loket", reading: "loket", meaning: "a service window", example: { jp: "Loket nomor dua sudah penuh sejak pagi.", en: "Window number two has been full since this morning." }, accept: ["a ticket counter", "a counter you queue at"], drill: { jp: "Loket nomor dua sudah penuh", en: "Window number two is already full" }, hint: "LO-ket, from Dutch loket. The glass window with a small gap at the bottom, at a station, a bank or an office. You already know antre, to queue — this is what you queue at." },
        { id: "id-u79l2-pendaftaran", type: "vocab", front: "pendaftaran", reading: "pendaftaran", meaning: "registration", example: { jp: "Pendaftaran untuk kuliah sudah mulai minggu ini.", en: "Registration for university has started this week." }, accept: ["the process of signing up", "enrolment"], drill: { jp: "Pendaftaran untuk kuliah sudah mulai", en: "Registration for university has started" }, hint: "pen-dahf-TA-rahn. The pen- -an frame makes a PROCESS noun out of mendaftar, \"to register\", which you already know. daftar on its own is still just a list." },
        { id: "id-u79l2-permohonan", type: "vocab", front: "permohonan", reading: "permohonan", meaning: "an application", example: { jp: "Permohonan saya sudah masuk bulan lalu.", en: "My application went in last month." }, accept: ["a formal request", "a petition"], drill: { jp: "Permohonan saya sudah masuk bulan lalu", en: "My application went in last month" }, hint: "pur-mo-HO-nahn. The paper you submit, from the root mohon (to request humbly) — the same root as the mohon in \"mohon maaf\". It is the document; melamar, which you know, is applying for a job specifically." },
        { id: "id-u79l2-pemohon", type: "vocab", front: "pemohon", reading: "pemohon", meaning: "an applicant", example: { jp: "Pemohon harus datang sendiri ke kantor itu.", en: "The applicant has to come to the office in person." }, accept: ["the person applying", "a petitioner"], drill: { jp: "Pemohon harus datang sendiri ke kantor", en: "The applicant must come to the office in person" }, hint: "puh-MO-hon. The pe- frame makes the DOER, the way pemain is a player and penjual is a seller. So permohonan is the paper and pemohon is the person holding it." },
        { id: "id-u79l2-mengajukan", type: "vocab", front: "mengajukan", reading: "mengajukan", meaning: "to submit", example: { jp: "Saya mau mengajukan permohonan untuk cuti.", en: "I want to submit an application for leave." }, accept: ["to put forward formally", "to file formally"], drill: { jp: "Saya mau mengajukan permohonan untuk cuti", en: "I want to submit an application for leave" }, hint: "muh-nga-JOO-kahn. Built on maju, \"to advance\", which you know — you push the paper FORWARD to the office. The standard verb for filing an application, a complaint or a question in formal Indonesian." },
        { id: "id-u79l2-mengurus", type: "vocab", front: "mengurus", reading: "mengurus", meaning: "to see to", example: { jp: "Bapak saya yang mengurus paspor untuk semua keluarga.", en: "It is my father who sees to the passports for the whole family." }, accept: ["to take care of the arrangements", "to handle the paperwork for"], drill: { jp: "Bapak saya mengurus paspor untuk keluarga", en: "My father sees to the passports for the family" }, hint: "muh-NGOO-roos. The one verb every Indonesian uses for dealing with officialdom: mengurus KTP, mengurus visa. Its root is urus and it has NOTHING to do with kurus, \"thin\", which only looks similar." },
      ],
    },
    {
      id: "id-u79l3",
      unit: 79,
      lesson: 3,
      title: "Stempel, salinan, dan arsip",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle the physical paperwork: get a document stamped, buy a duty stamp, have a photocopy certified, and keep the records in a folder.",
      items: [
        { id: "id-u79l3-stempel", type: "vocab", front: "stempel", reading: "stempel", meaning: "a rubber stamp", example: { jp: "Surat itu tidak sah tanpa stempel kantor.", en: "That letter is not valid without the office stamp." }, accept: ["an official ink stamp", "a seal pressed in ink"], drill: { jp: "Surat itu tidak sah tanpa stempel kantor", en: "That letter is not valid without the office stamp" }, hint: "STEM-pel, from Dutch. The round ink stamp, and the mark it leaves. In Indonesia a document with no stempel is usually treated as no document at all." },
        { id: "id-u79l3-meterai", type: "vocab", front: "meterai", reading: "meterai", meaning: "a duty stamp", example: { jp: "Saya membeli meterai di kantor pos.", en: "I bought a duty stamp at the post office." }, accept: ["a revenue stamp", "a stamp that makes a document binding"], drill: { jp: "Saya membeli meterai di kantor pos", en: "I bought a duty stamp at the post office" }, hint: "muh-tuh-RYE, four letters at the end sounding like English \"rye\". Not a postage stamp: it is a tax stamp you stick on a contract or a receipt to make it legally binding, and you sign across it." },
        { id: "id-u79l3-salinan", type: "vocab", front: "salinan", reading: "salinan", meaning: "a photocopy", example: { jp: "Saya membawa salinan ijazah dan juga yang asli.", en: "I am bringing a photocopy of the certificate and the original too." }, accept: ["a reproduced document", "a copy of a document"], drill: { jp: "Saya membawa salinan ijazah dan yang asli", en: "I bring a photocopy of the certificate and the original" }, hint: "sa-LEE-nahn. Built on menyalin, \"to copy\", which you already know. The gloss says photocopy rather than \"a copy\" because the grader already reads menyalin's \"to copy\" as the same answer." },
        { id: "id-u79l3-legalisir", type: "vocab", front: "legalisir", reading: "legalisir", meaning: "certification of a copy", example: { jp: "Untuk legalisir, kita harus datang ke sekolah lama.", en: "For certification, we have to come to the old school." }, accept: ["official certification that a copy is true", "attestation of a copy"], drill: { jp: "Untuk legalisir kita datang ke sekolah", en: "For certification we come to the school" }, hint: "leh-ga-lee-SEER. A very Indonesian piece of bureaucracy with no clean English word: the issuing body stamps and signs your photocopy to swear it matches the original. You will be asked for a salinan yang sudah dilegalisir constantly." },
        { id: "id-u79l3-arsip", type: "vocab", front: "arsip", reading: "arsip", meaning: "records", example: { jp: "Arsip lama ada di gudang kantor.", en: "The old records are in the office storeroom." }, accept: ["archived files", "a document archive"], drill: { jp: "Arsip lama ada di gudang kantor", en: "The old records are in the office storeroom" }, hint: "AR-seep. The kept documents, as a body — so it is usually singular in Indonesian where English would say \"records\" or \"files\". Nouns here are not marked for number." },
        { id: "id-u79l3-map", type: "vocab", front: "map", reading: "map", meaning: "a folder", example: { jp: "Semua surat ada di dalam map biru.", en: "All the letters are in the blue folder." }, accept: ["a document wallet", "a card folder"], drill: { jp: "Semua surat ada di dalam map biru", en: "All the letters are in the blue folder" }, hint: "Pronounced MAHP, from Dutch map. It is a FOLDER, not a map of a place — the Indonesian for that is peta, which you already know. Indonesian offices run on coloured card maps, one per application." },
      ],
    },
    {
      id: "id-u79l4",
      unit: 79,
      lesson: 4,
      title: "Berlaku atau batal",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say whether a document is still valid, cancelled or needs renewing, and name the terms on it and the body with the authority to decide.",
      items: [
        { id: "id-u79l4-berlaku", type: "vocab", front: "berlaku", reading: "berlaku", meaning: "valid", example: { jp: "Paspor saya berlaku sampai tahun depan.", en: "My passport is valid until next year." }, accept: ["in force", "still good"], drill: { jp: "Paspor saya berlaku sampai tahun depan", en: "My passport is valid until next year" }, hint: "bur-LA-koo. Said of documents, rules and prices: it is in force. The root is laku, and the related word about behaviour is a different sense of the same verb. sah, which you know, is \"legally valid\"; berlaku is \"has not expired\"." },
        { id: "id-u79l4-memperpanjang", type: "vocab", front: "memperpanjang", reading: "memperpanjang", meaning: "to renew", example: { jp: "Saya harus memperpanjang izin tinggal bulan depan.", en: "I have to renew my residence permit next month." }, accept: ["to extend the validity of", "to lengthen"], drill: { jp: "Saya harus memperpanjang izin bulan depan", en: "I have to renew the permit next month" }, hint: "Five syllables: mum-pur-pahn-JAHNG. Built on panjang, \"long\", which you already know — memper- plus an adjective means \"to make more X\", so this is literally to make something longer. Used for permits, contracts and visas." },
        { id: "id-u79l4-batal", type: "vocab", front: "batal", reading: "batal", meaning: "cancelled", example: { jp: "Rapat besok batal karena bapak saya sakit.", en: "Tomorrow's meeting is cancelled because my father is ill." }, accept: ["called off", "void"], drill: { jp: "Rapat besok batal karena bapak saya sakit", en: "Tomorrow's meeting is cancelled because my father is ill" }, hint: "BA-tahl. Used for both a cancelled plan and a document that has been voided. Indonesians also use it on its own as a flat announcement: Batal! It is not a verb on its own; the verb is membatalkan." },
        { id: "id-u79l4-ketentuan", type: "vocab", front: "ketentuan", reading: "ketentuan", meaning: "terms", example: { jp: "Dia membaca ketentuan di halaman terakhir.", en: "He reads the terms on the last page." }, accept: ["printed conditions", "the stipulations of a document"], drill: { jp: "Dia membaca ketentuan di halaman terakhir", en: "He reads the terms on the last page" }, hint: "kuh-tun-TOO-ahn. Built on tentu, \"certain\", which you know: what has been settled in advance and printed. It is the WHOLE printed set, where a single thing you must satisfy is a syarat." },
        { id: "id-u79l4-berwenang", type: "vocab", front: "berwenang", reading: "berwenang", meaning: "having official authority", example: { jp: "Hanya polisi yang berwenang memeriksa surat ini.", en: "Only the police have the authority to inspect this letter." }, accept: ["empowered to decide", "officially competent"], drill: { jp: "Hanya polisi yang berwenang memeriksa surat", en: "Only the police are authorised to inspect the letter" }, hint: "bur-wuh-NAHNG. Having the legal right to do something, said of a person or a body. You know resmi, \"official\" — a resmi letter is one from an authority, a berwenang person is the authority. The noun is wewenang." },
        { id: "id-u79l4-instansi", type: "vocab", front: "instansi", reading: "instansi", meaning: "a government body", example: { jp: "Setiap instansi punya aturan sendiri tentang cuti.", en: "Every government body has its own rules about leave." }, accept: ["a state agency", "an official institution"], drill: { jp: "Setiap instansi punya aturan sendiri", en: "Every government body has its own rules" }, hint: "een-STAHN-see. A government office or agency, from Dutch instantie. You already know perusahaan for a company and kantor for an office; instansi is specifically the STATE side, and it is what forms mean by \"instansi terkait\"." },
      ],
    },
  ],
};
