// ID Unit 107 — Tata bahasa 10: kalimat majemuk dan nominalisasi — B2
// ("Grammar 10 — complex sentences and nominalisation")
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 2 (u101–u113). Band notes BB1–BB8 are in unit101.js's header; unit1's
// A1 conventions, unit21's A2 set and unit51's B1 set (B1–B12) all still bind.
//
// §P1. ⚠️ **THE CONNECTIVE HALF OF THIS SLOT IS 4 OF 16 FREE, SO THE UNIT IS
//      WEIGHTED THE OTHER WAY.** Probed on this branch, from the handed-down
//      list: `sehingga` u29 · `sedangkan` u29 · `melainkan` u69 · `maupun` u69 ·
//      `entah` u29 · `dengan kata lain` u69 · `antara lain` u69 · `berkat` u29 ·
//      `akibat` u26 · `demi` u29 — **TAKEN**. Only `alih-alih` `ketimbang`
//      `kendati` `lantaran` survived, and `sembari` and `sekaligus` were found
//      to fill the lesson.
//      So the brief's other half — **"the ke-…-an / pe-…-an nominalisation chain
//      as a productive pattern"** — carries three of the four lessons. That is
//      not a retreat: it is the single highest-value pattern in written B2
//      Indonesian, u71 opened only `-nya`, and 18 of the 20 nominalisations
//      below probed free.
//
// §P2. **WHY A WHOLE UNIT OF NOUNS IS A GRAMMAR UNIT AND NOT A VOCABULARY ONE.**
//      Indonesian's long subordinated sentence is built by turning verbs and
//      adjectives into nouns and then hanging clauses off them —
//      *Ketergantungan negara itu pada satu barang* is one noun phrase doing
//      what English needs a subordinate clause for. A learner with 2,088 words
//      can say *negara itu tergantung pada satu barang*; they cannot make that
//      the SUBJECT of a further claim. Four frames, taught as frames:
//        **ke-…-an** on an adjective or stative verb → the state as a thing
//          (mampu → kemampuan, terbatas → keterbatasan, tersedia → ketersediaan)
//        **pe(N)-…-an** on a transitive verb → the ACT or PROCESS
//          (menerapkan → penerapan, menilai → penilaian, mengamati → pengamatan)
//        **per-…-an** → the process seen as a whole (berubah → perubahan)
//        and the lesson order walks the learner through them.
//      Lesson 2 and 3 are deliberately ke-…-an-heavy and lesson 4 pe-…-an-heavy
//      so the shape, not the individual word, is what is being drilled.
//
// §P3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1 §3 / unit51 B5). **EVERY
//      ONE of this unit's 18 nominalisations is derived from a root that is
//      already taught — that is the point of the unit, not a defect.** unit1 §3
//      settles it: `ajar` → `belajar` → `mengajar` → `pelajar` → `pelajaran` is
//      five words, and the test is *would a learner who knows one already know
//      the other?* For a nominalisation the answer is no: knowing `gagal`, to
//      fail, does not let you produce `kegagalan` or know it is the form a
//      report uses. The whole-word check, run on all 18:
//      **Every root sits at index ≥ 2 with a letter on its left and (for every
//      ke-…-an and pe-…-an) a letter on its right**, so `findWholeWord` matches
//      in NEITHER direction and no cloze can fire across the pair. Per card:
//        kemampuan ← mampu(u37) · keberhasilan ← berhasil(u24) ·
//        kegagalan ← gagal(u24) · keterbatasan ← batas(u36) ·
//        ketergantungan ← tergantung(u54) · keterlibatan ← terlibat(u68) ·
//        keseimbangan ← imbang(—, untaught) · keterkaitan ← kait(—, untaught) ·
//        ketersediaan ← tersedia(u38) · penerapan ← terap(—, untaught) ·
//        pendekatan ← dekat(u11) · pertimbangan ← timbang(—; ⚠️ `menimbang` IS
//          taught at u40 and is the weighing verb — the shared string is
//          `timbang` at index 3 inside mine, preceded by `r`, and at index 2
//          inside `menimbang`, preceded by `e`, so no whole-word match either
//          way; this is one of unit51 B9's four false positives, the other
//          direction of `menimang`/`menimbang`) ·
//        peningkatan ← meningkat(u59) · penurunan ← turun(u36) ·
//        pengembangan ← berkembang(u59) · penilaian ← nilai(u44) ·
//        pengamatan ← mengamati(—, untaught) · perubahan ← berubah(u25).
//
// §P4. GLOSS COLLISIONS FOUND AND FIXED BEFORE WRITING — `gloss-taken.mjs id`
//      caught nine, and a duplicate `meaning` makes one card unanswerable
//      (`type:produce` shows the gloss and accepts one front), a defect at ZERO
//      corpus-wide. The nine, with the owner, so nobody re-finds them:
//        "an approach" → `cara`(u26) + `metode`(u103) · "an increase" →
//        `tambah`(u14) · "a decrease" → `berkurang`(u40) · "development" →
//        `perkembangan`(u59) · "an assessment" → `ujian`(u18) · "a change" →
//        `berubah`(u25) · "an application" → `permohonan`(u79) ·
//        "rather than" → `daripada`(u14) · "notwithstanding" → `meskipun`(u29).
//      Each of those cards is now glossed by its FUNCTION instead — "a rise in a
//      measured figure", "a shift from one state to another", and so on — which
//      is also the more honest gloss for a B2 reader.
//
// §P5. DEFERRED FROM THIS UNIT, named not buried, all probed FREE: `penyebab`
//      `pembahasan` `pemanfaatan` `manakala` (used in u106) `semasa` `sebatas`
//      `nisbi`. Refused: `selagi` u69, `sedemikian` u69, `kurang lebih` u27 —
//      all TAKEN.
export const ID_UNIT107 = {
  id: "id-u107",
  lang: "id",
  title: "Tata bahasa 10 — kalimat majemuk dan nominalisasi",
  order: 107,
  stage: "b2",
  lessons: [
    {
      id: "id-u107l1",
      unit: 107,
      lesson: 1,
      title: "Penghubung antarklausa",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Join two clauses the way written Indonesian does — instead of doing one thing, as against another, for all that, on account of, while doing something else, and both at once.",
      items: [
        { id: "id-u107l1-alihalih", type: "vocab", front: "alih-alih", reading: "alihalih", meaning: "instead of", example: { jp: "Alih-alih menerima lebih banyak karyawan perusahaan itu memakai mesin baru.", en: "Instead of taking on more employees, that company used new machines." }, accept: ["rather than doing that", "in place of", "where you might expect the other"], drill: { jp: "Alih-alih menerima karyawan baru mereka memakai mesin", en: "Instead of taking on new employees they use machines" }, hint: "AH-leeh AH-leeh, the doubling is the word (unit 1's reduplication rule — not a plural). The root alih is to shift or transfer. ⚠️ It carries a note of SURPRISE: alih-alih says the thing that happened is not what the situation called for. English *instead of* is neutral; alih-alih usually is not." },
        { id: "id-u107l1-ketimbang", type: "vocab", front: "ketimbang", reading: "ketimbang", meaning: "as against", example: { jp: "Dia lebih suka bekerja sendiri ketimbang dalam kelompok yang besar.", en: "He prefers working alone as against working in a big group." }, accept: ["compared with", "in preference to", "set beside"], drill: { jp: "Dia lebih suka bekerja sendiri ketimbang dalam kelompok", en: "He prefers working alone as against in a group" }, hint: "kuh-TEEM-bahng. Built on timbang, to weigh — so it is literally *weighed against*. ⚠️ You know daripada from u14, than, and that is the everyday word; ketimbang is a shade more written and a shade more argumentative, because it reminds the reader that a comparison is being made. They are interchangeable in most sentences, and knowing both lets you read either." },
        { id: "id-u107l1-kendati", type: "vocab", front: "kendati", reading: "kendati", meaning: "though it be so", example: { jp: "Kendati hujan turun sejak pagi semua warga datang ke rapat desa.", en: "Though it rained from the morning, all the residents came to the village meeting." }, accept: ["in spite of the fact that", "despite it", "even so"], drill: { jp: "Kendati hujan turun semua warga datang ke rapat", en: "Though it rained, all the residents came to the meeting" }, hint: "kuhn-DAH-tee. ⚠️ A fourth member of the *even though* family — you already have meskipun (u29), walaupun and biarpun (u69), and this unit's u106 neighbour sekalipun. Kendati is the most formal of the five and the one newspapers put at the head of a sentence. Kendatipun also exists and means the same; the shorter form is what you will read." },
        { id: "id-u107l1-lantaran", type: "vocab", front: "lantaran", reading: "lantaran", meaning: "on account of", example: { jp: "Jalan itu rusak lantaran mobil yang berat melewati jalan itu setiap hari.", en: "That road is damaged on account of heavy vehicles going along it every day." }, accept: ["because of", "owing to", "thanks to something bad"], drill: { jp: "Jalan itu rusak lantaran mobil berat setiap hari", en: "That road is damaged on account of heavy vehicles every day" }, hint: "lahn-TAH-ran. ⚠️ You know karena from u1, because — lantaran is its everyday spoken cousin, very common in speech and in popular writing, and almost always introduces something UNWELCOME. Keep it apart from berkat (u29), thanks to, which is only for good outcomes: lantaran hujan, because of the rain; berkat hujan, thanks to the rain." },
        { id: "id-u107l1-sembari", type: "vocab", front: "sembari", reading: "sembari", meaning: "while doing something else", example: { jp: "Dia membaca surat sembari minum kopi di depan rumah.", en: "He read the letter while drinking coffee in front of the house." }, accept: ["at the same time as", "as one does something", "whilst"], drill: { jp: "Dia membaca surat sembari minum kopi", en: "He reads the letter while drinking coffee" }, hint: "suhm-BAH-ree. ⚠️ Keep it apart from sambil, which you know, and from ketika (u36), when: sambil and sembari are near-identical and both mean doing two things with one body; sembari is a shade more literary. Neither can be used for two UNRELATED things happening at once — for that Indonesian uses sementara." },
        { id: "id-u107l1-sekaligus", type: "vocab", front: "sekaligus", reading: "sekaligus", meaning: "in one go", example: { jp: "Satu aturan yang baru itu mengubah dua hal sekaligus di kantor kami.", en: "That one new rule changed two things at once in our office." }, accept: ["both at the same time", "all in a single move", "and also, in the same act"], drill: { jp: "Aturan baru itu mengubah dua hal sekaligus", en: "That new rule changes two things in one go" }, hint: "suh-kah-lee-GOOS. Built on sekali, once, which you know from u2 — so the literal sense is *in a single time*. ⚠️ Its real job in B2 prose is to say one action did TWO jobs: dia guru sekaligus penulis, she is a teacher and a writer in one. It goes AFTER what it applies to, not before, which is unusual for a connective." },
      ],
    },
    {
      id: "id-u107l2",
      unit: 107,
      lesson: 2,
      title: "Nominalisasi ke-…-an: keadaan sebagai benda",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Turn a state into a thing you can talk about with the ke-…-an frame — an ability, a success, a failure, a limitation, a dependence, and an involvement.",
      items: [
        { id: "id-u107l2-kemampuan", type: "vocab", front: "kemampuan", reading: "kemampuan", meaning: "an ability", example: { jp: "Kemampuan anak itu dalam bahasa asing jauh lebih baik daripada teman dia.", en: "That child's ability in a foreign language is far better than his friends'." }, accept: ["a capacity to do something", "what someone is able to do", "competence"], drill: { jp: "Kemampuan anak itu dalam bahasa asing sangat baik", en: "That child's ability in a foreign language is very good" }, hint: "kuh-mahm-POO-an, four syllables. ⚠️ **This is the frame the whole lesson teaches: ke- + an adjective + -an = the state as a countable thing.** Built on mampu, able, which you know from u37. Say it out loud against the root — mampu, kemampuan — and the pattern will stick faster than any of the six words will." },
        { id: "id-u107l2-keberhasilan", type: "vocab", front: "keberhasilan", reading: "keberhasilan", meaning: "a success", example: { jp: "Keberhasilan rencana itu tergantung pada uang dari pemerintah pusat.", en: "The success of that plan depends on money from the central government." }, accept: ["the fact of having succeeded", "an achievement", "a successful outcome"], drill: { jp: "Keberhasilan rencana itu tergantung pada uang pemerintah", en: "The success of that plan depends on government money" }, hint: "kuh-buhr-hah-SEE-lan, five syllables. The frame again, this time around a whole ber- verb: berhasil, to succeed, which you know from u24. ⚠️ Note that ke-…-an wraps the WHOLE word including the ber-, which is why the result is so long — Indonesian does not mind, and B2 prose is full of these." },
        { id: "id-u107l2-kegagalan", type: "vocab", front: "kegagalan", reading: "kegagalan", meaning: "a failure", example: { jp: "Kegagalan yang pertama itu mengajar kami lebih banyak daripada berhasil.", en: "That first failure taught us more than succeeding did." }, accept: ["the fact of having failed", "a breakdown", "an unsuccessful outcome"], drill: { jp: "Kegagalan pertama itu mengajar kami lebih banyak", en: "That first failure taught us more" }, hint: "kuh-gah-GAH-lan. On gagal, to fail, which you know from u24. ⚠️ The pair with the card above it is the whole reason they sit together: keberhasilan and kegagalan are the two ends every report, every evaluation and every post-mortem is built on. If you can only remember one pattern from this unit, remember that these two come from berhasil and gagal with nothing added but the frame." },
        { id: "id-u107l2-keterbatasan", type: "vocab", front: "keterbatasan", reading: "keterbatasan", meaning: "a limitation", example: { jp: "Keterbatasan tempat membuat sekolah itu menolak banyak anak setiap tahun.", en: "The limitation of space makes that school turn away many children every year." }, accept: ["a constraint", "the fact of being limited", "a shortcoming in capacity"], drill: { jp: "Keterbatasan tempat membuat sekolah itu menolak anak", en: "The limitation of space makes that school turn children away" }, hint: "kuh-tuhr-bah-TAH-san, five syllables. ⚠️ Built on batas, a limit, which you know from u36, with the ter- of *having been* in the middle: terbatas is limited, keterbatasan is the limitation. It is the polite word for every kind of not-enough — keterbatasan dana, keterbatasan waktu — and it is how an institution admits a shortage without saying whose fault it is." },
        { id: "id-u107l2-ketergantungan", type: "vocab", front: "ketergantungan", reading: "ketergantungan", meaning: "a dependence", example: { jp: "Ketergantungan negara itu pada satu barang saja adalah bahaya besar.", en: "That country's dependence on just one commodity is a great danger." }, accept: ["reliance on something", "the state of depending", "being unable to do without"], drill: { jp: "Ketergantungan pada satu barang adalah bahaya besar", en: "Dependence on one commodity is a great danger" }, hint: "kuh-tuhr-gahn-TOONG-an, six syllables — the longest front in the unit, and worth saying slowly once. On tergantung, to depend, which you know from u54. ⚠️ Keep it apart from kecanduan, addiction, which u57 gave you: ketergantungan can be about a country and a commodity, a clinic and a drug, or a child and a parent — it is structural, not medical." },
        { id: "id-u107l2-keterlibatan", type: "vocab", front: "keterlibatan", reading: "keterlibatan", meaning: "involvement", example: { jp: "Keterlibatan warga dalam rencana itu masih sangat kecil sampai sekarang.", en: "Residents' involvement in that plan is still very small up to now." }, accept: ["taking part in something", "the fact of being mixed up in it", "participation"], drill: { jp: "Keterlibatan warga dalam rencana itu masih kecil", en: "Residents' involvement in that plan is still small" }, hint: "kuh-tuhr-lee-BAH-tan. On terlibat, involved, which you know from u68. ⚠️ It swings both ways depending on what follows: keterlibatan warga is a good thing a project wants more of, and keterlibatan dalam korupsi is an accusation. Indonesian uses the same noun for both, so the register comes entirely from the object." },
      ],
    },
    {
      id: "id-u107l3",
      unit: 107,
      lesson: 3,
      title: "Dari ke-…-an ke pe-…-an",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Finish the ke-…-an frame and start the pe-…-an one — a balance, a link between things, availability, putting a rule into practice, a line of attack, and a consideration weighed before deciding.",
      items: [
        { id: "id-u107l3-keseimbangan", type: "vocab", front: "keseimbangan", reading: "keseimbangan", meaning: "a balance", example: { jp: "Keseimbangan antara pekerjaan dan keluarga susah untuk orang muda di kota.", en: "The balance between work and family is hard for young people in the city." }, accept: ["equilibrium", "an even state between two things", "being in proportion"], drill: { jp: "Keseimbangan antara pekerjaan dan keluarga sangat susah", en: "The balance between work and family is very hard" }, hint: "kuh-suh-eem-BAHNG-an, five syllables. The root imbang, balance, is not taught on its own — you met the ber- form berimbang in u104, balanced between sides. ⚠️ Keseimbangan is physical as well as abstract: losing your balance on a bike is kehilangan keseimbangan, with exactly the same noun." },
        { id: "id-u107l3-keterkaitan", type: "vocab", front: "keterkaitan", reading: "keterkaitan", meaning: "the way two things are linked", example: { jp: "Keterkaitan antara dua masalah itu baru jelas setelah laporan baru keluar.", en: "The link between those two problems only became clear after the new report came out." }, accept: ["an interconnection", "the fact that two things are tied together", "a relationship between matters"], drill: { jp: "Keterkaitan antara dua masalah itu baru jelas", en: "The link between those two problems is only now clear" }, hint: "kuh-tuhr-kah-ee-TAHN, five syllables. The root kait is a hook, and terkait, which you met in u73, means connected. ⚠️ This is the noun a B2 argument needs constantly: you cannot say *the link between X and Y* with hubungan alone, because hubungan, which you know, is a relationship between PEOPLE much more often than between facts." },
        { id: "id-u107l3-ketersediaan", type: "vocab", front: "ketersediaan", reading: "ketersediaan", meaning: "availability", example: { jp: "Ketersediaan air bersih di desa itu belum cukup untuk semua keluarga.", en: "The availability of clean water in that village is still not enough for every family." }, accept: ["whether something is to be had", "supply being on hand", "the fact of being available"], drill: { jp: "Ketersediaan air bersih di desa itu belum cukup", en: "The availability of clean water in that village is not enough" }, hint: "kuh-tuhr-suh-dee-AH-an, six syllables. On tersedia, available, which you know from u38. ⚠️ Keep it apart from pasokan, a supply, which this block taught you in u101: a pasokan is the flow of the stuff, ketersediaan is the QUESTION of whether there is any — which is why a report asks about ketersediaan and a lorry delivers pasokan." },
        { id: "id-u107l3-penerapan", type: "vocab", front: "penerapan", reading: "penerapan", meaning: "putting a rule into practice", example: { jp: "Penerapan aturan yang baru itu mulai pada bulan depan di seluruh kota.", en: "The implementation of that new rule starts next month across the whole city." }, accept: ["implementation", "the act of applying something", "carrying a rule out in practice"], drill: { jp: "Penerapan aturan baru itu mulai bulan depan", en: "The implementation of that new rule starts next month" }, hint: "puh-nuh-RAH-pan. ⚠️ **The frame changes here and this is the pivot of the unit: pe- + a transitive verb + -an names the ACT, not a state.** Compare the six words above — those were things being so; these are things being done. Penerapan is the standard word for the gap between a rule existing and a rule happening, which is a gap Indonesians talk about constantly." },
        { id: "id-u107l3-pendekatan", type: "vocab", front: "pendekatan", reading: "pendekatan", meaning: "a line of attack on a problem", example: { jp: "Pendekatan yang baru itu memberi hasil lebih cepat tetapi lebih mahal.", en: "That new line of attack gives results faster but is more expensive." }, accept: ["a way of tackling something", "a chosen strategy", "the manner of going at a problem"], drill: { jp: "Pendekatan baru itu memberi hasil lebih cepat", en: "That new line of attack gives results faster" }, hint: "puhn-duh-KAH-tan. ⚠️ Built on dekat, near, which you know from u11 — so the literal sense is *the act of getting close to*, and the metaphor is the English one. Keep it apart from cara, a way, which you know from u26, and metode, which u103 gave you: a cara is anybody's method, a metode is a worked-out system, a pendekatan is the ANGLE you chose to come at the problem from." },
        { id: "id-u107l3-pertimbangan", type: "vocab", front: "pertimbangan", reading: "pertimbangan", meaning: "a factor weighed before deciding", example: { jp: "Pertimbangan yang paling penting untuk kami adalah biaya dan waktu.", en: "The most important factor for us is cost and time." }, accept: ["a consideration", "something taken into account", "a point weighed in a decision"], drill: { jp: "Pertimbangan paling penting untuk kami adalah biaya", en: "The most important consideration for us is cost" }, hint: "puhr-teem-BAHNG-an. ⚠️ The root timbang is to weigh on a scale, and **this is one of the four false lexeme-matches unit51 B9 warns about**: menimbang (u40) is literally weighing a sack of rice, and pertimbangan is weighing a decision. Two words, same picture. Mempertimbangkan is the verb, and bahan pertimbangan, material for consideration, is on every official form." },
      ],
    },
    {
      id: "id-u107l4",
      unit: 107,
      lesson: 4,
      title: "Nominalisasi pe-…-an: perbuatan sebagai benda",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name a process rather than describing it — a rise in a figure, a fall in one, the work of developing something, a judgement of worth, a period of watching, and a shift from one state to another.",
      items: [
        { id: "id-u107l4-peningkatan", type: "vocab", front: "peningkatan", reading: "peningkatan", meaning: "a rise in a measured figure", example: { jp: "Peningkatan harga nasi itu mencapai angka yang sangat besar.", en: "The rise in the price of rice reached a very big figure." }, accept: ["an increase in something counted", "an upward movement in a number", "improvement in a figure"], drill: { jp: "Peningkatan harga nasi itu mencapai angka besar", en: "The rise in the price of rice reached a big figure" }, hint: "puh-neeng-KAH-tan. On meningkat, to rise, which you know from u59. ⚠️ Keep it apart from tambah, to add, which you know from u14: tambah is somebody putting more in, peningkatan is a measured quantity going up — which is why it is the word in every chart caption and every annual report." },
        { id: "id-u107l4-penurunan", type: "vocab", front: "penurunan", reading: "penurunan", meaning: "a fall in a measured figure", example: { jp: "Penurunan jumlah anak di desa itu membuat satu sekolah berhenti bekerja.", en: "The fall in the number of children in that village made one school stop operating." }, accept: ["a decline in something counted", "a downward movement in a number", "a reduction in a figure"], drill: { jp: "Penurunan jumlah anak di desa itu sangat cepat", en: "The fall in the number of children in that village is very fast" }, hint: "puh-noo-ROO-nan. On turun, to go down, which you know from u36. ⚠️ The pair with the card above it, and the pair is how Indonesian writes every trend: peningkatan dan penurunan is the standard phrase for ups and downs. Keep it apart from berkurang (u40), to become less, which describes the thing itself shrinking rather than naming the movement." },
        { id: "id-u107l4-pengembangan", type: "vocab", front: "pengembangan", reading: "pengembangan", meaning: "the work of developing something", example: { jp: "Pengembangan obat yang baru itu perlu waktu sepuluh tahun dan uang yang besar.", en: "The development of that new medicine needs ten years and a lot of money." }, accept: ["R and D work", "the effort of building something up", "deliberate growing of something"], drill: { jp: "Pengembangan obat baru itu perlu waktu sepuluh tahun", en: "The development of that new medicine needs ten years" }, hint: "puh-nguhm-BAHNG-an. ⚠️ On berkembang, to grow, which you know from u59 — and here is the distinction that matters: perkembangan, which u59 also taught you, is growth that HAPPENS, while pengembangan is growth somebody DOES. A child's perkembangan; a company's pengembangan. The frames mark the difference and nothing else does." },
        { id: "id-u107l4-penilaian", type: "vocab", front: "penilaian", reading: "penilaian", meaning: "a judgement of worth", example: { jp: "Penilaian guru tentang anak itu sangat baik meskipun hasil ujian kurang.", en: "The teacher's judgement of that child is very good even though the exam result is poor." }, accept: ["an appraisal", "a formal evaluation", "the act of judging how good something is"], drill: { jp: "Penilaian guru tentang anak itu sangat baik", en: "The teacher's judgement of that child is very good" }, hint: "puh-nee-lah-EE-an, five syllables. On nilai, a grade or a value, which you know from u44. ⚠️ Keep it apart from ujian, an exam, which you know from u18: an ujian is the instrument, a penilaian is the judgement somebody forms — and a penilaian can be made with no ujian at all, which is exactly what the example sentence says." },
        { id: "id-u107l4-pengamatan", type: "vocab", front: "pengamatan", reading: "pengamatan", meaning: "a period of watching closely", example: { jp: "Pengamatan selama dua bulan itu memberi banyak keterangan yang baru.", en: "That two-month period of observation gave a lot of new information." }, accept: ["an observation", "close watching over time", "the act of observing something"], drill: { jp: "Pengamatan selama dua bulan memberi banyak keterangan", en: "Two months of observation gave a lot of information" }, hint: "puh-ngah-MAH-tan. The root amat is to observe closely — the verb mengamati is not carded here, so this noun is your way in. ⚠️ Keep it apart from melihat, to see, which you know from u4: melihat is an instant, pengamatan is sustained and deliberate. Hasil pengamatan, the result of observation, is the phrase a report uses before it gives you a number." },
        { id: "id-u107l4-perubahan", type: "vocab", front: "perubahan", reading: "perubahan", meaning: "a shift from one state to another", example: { jp: "Perubahan aturan itu membuat banyak orang di kantor bingung selama satu bulan.", en: "The change in that rule left many people in the office confused for a month." }, accept: ["a change as a whole process", "an alteration", "the move from how it was to how it is"], drill: { jp: "Perubahan aturan itu membuat banyak orang bingung", en: "The change in that rule left many people confused" }, hint: "puh-roo-BAH-han. ⚠️ **A THIRD frame: per-…-an, which names a process seen whole.** On berubah, to change, which you know from u25. The two are not interchangeable: berubah is a verb and needs a subject that does the changing, perubahan is the change itself and can be the subject of a further claim — perubahan itu susah, that change is hard. That move is what this whole unit exists to give you." },
      ],
    },
  ],
};
