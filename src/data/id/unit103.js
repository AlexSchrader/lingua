// ID Unit 103 — Pendidikan tinggi dan penelitian ("Higher education and research") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 2 (u101–u113). Band notes BB1–BB8 are in unit101.js's header; unit1's
// A1 conventions, unit21's A2 set and unit51's B1 set (B1–B12) all still bind.
//
// §P1. BOUNDARY WITH u44 AND u3, MEASURED. u44 owns SCHOOL AND STUDYING
//      (`kuliah` `jurusan` `latihan` `lulus` `meneliti` `nilai`), u3 owns the
//      PEOPLE (`mahasiswa` `dosen` `guru` `murid`), u71 owns `penelitian` as an
//      abstract noun, u81 owns the LITERARY work (`karya` `pengarang` `kutipan`
//      `naskah` `penerbit`). So this unit teaches **no second word for a class,
//      a grade, a student or a published book**. It takes what a university HAS
//      that a school does not: a campus, faculties, degree levels, a supervisor,
//      a thesis, a journal, and the machinery of a study.
//      ⚠️ `penelitian`(u71) `meneliti`(u44) `peneliti`(derived) are all spoken
//      for, so the unit says `kajian` nowhere and goes at research through its
//      PARTS — metode, hipotesis, sampel, survei, responden, temuan.
//
// §P2. TWO EXACT COGNATES REFUSED HERE (band note BB4): `semester` and
//      `seminar` — each is its own gloss after folding, so the produce card
//      would show "semester" and accept "semester". `jenjang` and `lokakarya`
//      were the honest Indonesian replacements; `lokakarya` is deferred (§P4)
//      and `jenjang` shipped.
//
// §P3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1 §3 / unit51 B5):
//      pascasarjana → sarjana  `sarjana` is carded in THIS unit (l1). The
//        degree and the level above it, written SOLID — so findWholeWord cannot
//        match `sarjana` inside `pascasarjana` in either direction, verified.
//        They sit in ONE lesson deliberately: the ladder only makes sense as a
//        ladder (cf. unit51 §A5's `sepakat`/`kesepakatan`).
//      pembimbing → membimbing — `membimbing` is NOT taught, and `bimbingan`
//        is deliberately NOT carded alongside it (one word per root here; the
//        person is more useful to a learner than the abstract noun).
//      menerbitkan → terbit   ⚠️ `terbit` IS taught (u81, "to come out").
//        Carded: a book terbit by itself, a person menerbitkan it. Drill-safe:
//        "menerbitkan" holds "terbit" at index 3, preceded by `n`.
//      temuan → menemukan     ⚠️ `menemukan` IS taught (u39, "to find").
//        Carded: finding is an act, a temuan is the thing a study reports.
//        Drill-safe: the shared string is the root `temu`, and `bertemu`(u1)
//        does not contain `temuan` nor vice versa as whole words.
//      praktikum → praktik — `praktik` is NOT taught, so no pair exists.
//      beasiswa → biaya/siswa: written solid and derived from Sanskrit, not
//        from taught `siswa`-anything; `murid`(u3) is the taught school word.
//        No whole-word match in either direction.
//
// §P4. DEFERRED FROM THIS UNIT, named not buried — all probed FREE and left for
//      a later band or the merge seat: `rektor` `laboratorium` `akademik`
//      `ilmiah` `analisis` `kajian` `mengkaji` `kuesioner` `wawasan` `pustaka`
//      `lokakarya` `bimbingan`. `semester` and `seminar` refused (§P2).
export const ID_UNIT103 = {
  id: "id-u103",
  lang: "id",
  title: "Pendidikan tinggi dan penelitian",
  order: 103,
  stage: "b2",
  lessons: [
    {
      id: "id-u103l1",
      unit: 103,
      lesson: 1,
      title: "Kampus dan jenjang",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe a university as an institution — its campus, its faculties, the levels of degree, a graduate, postgraduate study, and the graduation ceremony.",
      items: [
        { id: "id-u103l1-kampus", type: "vocab", front: "kampus", reading: "kampus", meaning: "a university campus", example: { jp: "Kampus baru itu berada di luar kota dan masih sangat sepi.", en: "That new campus is outside the city and is still very quiet." }, accept: ["university grounds", "the site of a university", "a college campus"], drill: { jp: "Kampus baru itu berada di luar kota", en: "That new campus is outside the city" }, hint: "KAHM-poos, two syllables. ⚠️ Indonesian uses it far more loosely than English: di kampus often just means at university, with no grounds implied, and anak kampus means a student. Keep it apart from sekolah, which you know — a kampus is only ever tertiary, never a school." },
        { id: "id-u103l1-fakultas", type: "vocab", front: "fakultas", reading: "fakultas", meaning: "a faculty of a university", example: { jp: "Fakultas itu hanya menerima dua ratus mahasiswa setiap tahun.", en: "That faculty only takes two hundred students a year." }, accept: ["a university school or division", "a department group", "one branch of a university"], drill: { jp: "Fakultas itu hanya menerima dua ratus mahasiswa", en: "That faculty only takes two hundred students" }, hint: "fah-KOOL-tahs. ⚠️ Do not reach for the English faculty meaning the teaching staff — in Indonesian the staff are dosen, which you know, and a fakultas is always the DIVISION: Fakultas Hukum, Fakultas Kedokteran. You already have jurusan from u44, the subject you major in; a jurusan sits inside a fakultas." },
        { id: "id-u103l1-jenjang", type: "vocab", front: "jenjang", reading: "jenjang", meaning: "a level in a system", example: { jp: "Jenjang di bawah sarjana di negara ini lebih pendek dan lebih murah.", en: "The level below a degree in this country is shorter and cheaper." }, accept: ["a rung of a ladder", "a stage in a sequence", "a tier of qualification"], drill: { jp: "Jenjang di bawah sarjana lebih pendek", en: "The level below a degree is shorter" }, hint: "JUHN-jahng — ng is one hum. First a real ladder with real rungs, then a level in anything built in steps: jenjang pendidikan, jenjang karier. ⚠️ Keep it apart from tingkat, which you know: a tingkat is a floor or a degree of something, a jenjang is a rung you climb from and to." },
        { id: "id-u103l1-sarjana", type: "vocab", front: "sarjana", reading: "sarjana", meaning: "a first-degree graduate", example: { jp: "Kakak saya sudah sarjana tetapi belum bekerja.", en: "My older sibling is already a graduate but is not working yet." }, accept: ["a bachelor's graduate", "a holder of a first degree", "an undergraduate degree holder"], drill: { jp: "Kakak saya sudah sarjana tetapi belum bekerja", en: "My older sibling is a graduate but is not working" }, hint: "sahr-JAH-nah. ⚠️ The word names the PERSON and the DEGREE at once: dia sarjana means she holds a degree, and gelar sarjana is the degree itself. It is from Sanskrit, and it carries real weight in Indonesia — sarjana pertama di keluarga, the first graduate in the family, is a sentence people say with pride." },
        { id: "id-u103l1-pascasarjana", type: "vocab", front: "pascasarjana", reading: "pascasarjana", meaning: "postgraduate study", example: { jp: "Teman saya masuk pascasarjana setelah bekerja selama lima tahun.", en: "My friend entered postgraduate study after working for five years." }, accept: ["graduate school", "study above a first degree", "postgraduate level"], drill: { jp: "Teman saya masuk pascasarjana setelah lima tahun", en: "My friend entered postgraduate study after five years" }, hint: "PAHS-chah-sahr-JAH-nah — five syllables, and the c is CH. Pasca- is the bound Sanskrit prefix for after, which Indonesian also uses in pascapanen and pascaperang. ⚠️ Write it SOLID; pasca sarjana with a space is a spelling error, and the solid form is also what keeps it from colliding with the card before it." },
        { id: "id-u103l1-wisuda", type: "vocab", front: "wisuda", reading: "wisuda", meaning: "a graduation ceremony", example: { jp: "Wisuda kakak saya pada hari Sabtu dan semua keluarga datang.", en: "My sibling's graduation is on Saturday and the whole family is coming." }, accept: ["degree ceremony", "the day degrees are conferred", "commencement"], drill: { jp: "Wisuda kakak saya pada hari Sabtu", en: "My sibling's graduation is on Saturday" }, hint: "wee-SOO-dah. The ceremony, not the achievement — the achievement is lulus, which you know from u44. ⚠️ It is a huge family event in Indonesia, photographed from every angle, and the verb is diwisuda, to be graduated. The gown and cap are toga, a word you will meet in every caption." },
      ],
    },
    {
      id: "id-u103l2",
      unit: 103,
      lesson: 2,
      title: "Kurikulum, beasiswa, dan bimbingan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about what a degree actually involves — the curriculum, a scholarship that pays for it, lab sessions, the hall of residence, the alumni, and the supervisor who reads your work.",
      items: [
        { id: "id-u103l2-kurikulum", type: "vocab", front: "kurikulum", reading: "kurikulum", meaning: "a curriculum", example: { jp: "Kurikulum baru itu memberi lebih banyak waktu untuk belajar di luar kelas.", en: "That new curriculum gives more time for study outside the classroom." }, accept: ["the planned course of study", "a syllabus", "what a school is required to teach"], drill: { jp: "Kurikulum baru itu memberi lebih banyak waktu", en: "That new curriculum gives more time" }, hint: "koo-ree-KOO-loom. ⚠️ Note the ending Indonesian kept: -um, not -ulum-with-a-vowel-change, and no plural form at all — one kurikulum, several kurikulum. In Indonesia it is a political word: a national kurikulum is rewritten every few years and every teacher has an opinion about it." },
        { id: "id-u103l2-beasiswa", type: "vocab", front: "beasiswa", reading: "beasiswa", meaning: "a scholarship", example: { jp: "Beasiswa itu membayar semua biaya kuliah selama empat tahun.", en: "That scholarship pays all the tuition costs for four years." }, accept: ["a study grant", "funded place", "money given to a student to study"], drill: { jp: "Beasiswa itu membayar semua biaya kuliah", en: "That scholarship pays all the tuition costs" }, hint: "bay-ah-SEES-wah, four syllables, and the ea is two vowels said in a row. From Sanskrit, nothing to do with biaya, cost, which you know, even though the first syllables tease you. ⚠️ Mendapat beasiswa, to get a scholarship, is one of the most-used phrases in Indonesian student life — the system is enormous and competitive." },
        { id: "id-u103l2-praktikum", type: "vocab", front: "praktikum", reading: "praktikum", meaning: "a practical class", example: { jp: "Praktikum di kampus itu dua jam setiap minggu dan selalu pada hari Rabu.", en: "The practical class at that campus is two hours a week and always on Wednesday." }, accept: ["a lab session", "hands-on coursework", "a practical session"], drill: { jp: "Praktikum di kampus itu dua jam", en: "The practical class at that campus is two hours" }, hint: "prahk-TEE-koom. Another Dutch -um ending, like kurikulum. ⚠️ It is specifically the hands-on half of a course — the bench, the clinic, the workshop — as against the kuliah, the lecture, which you know from u44. A science student's week is written as so many hours kuliah and so many hours praktikum." },
        { id: "id-u103l2-asrama", type: "vocab", front: "asrama", reading: "asrama", meaning: "a hall of residence", example: { jp: "Asrama mahasiswa itu dekat dengan gedung kuliah dan sangat murah.", en: "That student hall of residence is near the lecture building and very cheap." }, accept: ["a dormitory", "student accommodation", "a boarding house run by an institution"], drill: { jp: "Asrama mahasiswa itu dekat gedung kuliah", en: "That student hall is near the lecture building" }, hint: "ahs-RAH-mah. ⚠️ Not the same as the everyday rented room a student actually lives in, which is a kos — an asrama belongs to the institution and has rules. The word also covers army barracks and religious boarding houses, so the shared idea is institutional living, not youth." },
        { id: "id-u103l2-alumni", type: "vocab", front: "alumni", reading: "alumni", meaning: "former students of a place", example: { jp: "Alumni sekolah itu sering datang kembali pada bulan Agustus setiap tahun.", en: "That school's former students often come back in August every year." }, accept: ["old boys and girls of a school", "graduates of an institution", "ex-students"], drill: { jp: "Alumni sekolah itu sering datang kembali", en: "That school's former students often come back" }, hint: "ah-LOOM-nee. ⚠️ Indonesian uses the Latin plural as both singular and plural — dia alumni UI, she is a UI alumna, is completely normal and alumnus is rare. So you never have to choose a form, which is one fewer thing than English asks of you. Ikatan alumni, the alumni association, is a real force in Indonesian working life." },
        { id: "id-u103l2-pembimbing", type: "vocab", front: "pembimbing", reading: "pembimbing", meaning: "an academic supervisor", example: { jp: "Pembimbing saya membaca setiap halaman dan memberi banyak catatan.", en: "My supervisor read every page and gave a lot of notes." }, accept: ["a mentor", "the staff member guiding a student", "a tutor responsible for one's thesis"], drill: { jp: "Pembimbing saya membaca setiap halaman", en: "My supervisor reads every page" }, hint: "puhm-beem-BEENG. From membimbing, to guide by the hand, which this course does not card. ⚠️ Keep it apart from dosen, a lecturer, which you know: every pembimbing is a dosen, but only the one assigned to your thesis is your pembimbing, and in Indonesia that relationship decides how fast you finish. Dosen pembimbing is the full title." },
      ],
    },
    {
      id: "id-u103l3",
      unit: 103,
      lesson: 3,
      title: "Karya ilmiah",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the three Indonesian theses and what surrounds them — the undergraduate one, the master's, the doctoral, the journal they aim at, copying someone else's work, and getting something published.",
      items: [
        { id: "id-u103l3-skripsi", type: "vocab", front: "skripsi", reading: "skripsi", meaning: "an undergraduate thesis", example: { jp: "Skripsi saya tentang bahasa di dua desa kecil di Jawa.", en: "My undergraduate thesis is about the language in two small villages in Java." }, accept: ["a final-year dissertation", "a bachelor's thesis", "the written work for a first degree"], drill: { jp: "Skripsi saya tentang bahasa di Jawa", en: "My undergraduate thesis is about language in Java" }, hint: "SKREEP-see. ⚠️ Indonesian names each level's thesis with a DIFFERENT word, and this is the first-degree one — there is no English equivalent, because English says thesis for all three. Every Indonesian graduate has a skripsi story; mengerjakan skripsi, working on one's skripsi, is a whole phase of life." },
        { id: "id-u103l3-tesis", type: "vocab", front: "tesis", reading: "tesis", meaning: "a master's thesis", example: { jp: "Tesis itu lebih panjang daripada skripsi dan jauh lebih susah.", en: "A master's thesis is longer than an undergraduate one and far harder." }, accept: ["a postgraduate dissertation", "the written work for a master's", "a second-degree thesis"], drill: { jp: "Tesis itu lebih panjang daripada skripsi", en: "A master's thesis is longer than an undergraduate one" }, hint: "TAY-sees — the e is a clear ay, not the English ee. ⚠️ So the ladder is skripsi, tesis, disertasi, one word per level, and an Indonesian will correct you if you use the wrong one. Note that tesis does NOT mean a proposition or an argument the way English thesis can; for that Indonesian says pendapat or pendirian, which you already have from u21 and u51." },
        { id: "id-u103l3-disertasi", type: "vocab", front: "disertasi", reading: "disertasi", meaning: "a doctoral thesis", example: { jp: "Disertasi itu selesai setelah empat tahun yang sangat susah di dua negara.", en: "That doctoral thesis was finished after four very hard years in two countries." }, accept: ["a PhD dissertation", "the written work for a doctorate", "a third-level thesis"], drill: { jp: "Disertasi itu selesai setelah empat tahun", en: "That doctoral thesis was finished after four years" }, hint: "dee-suhr-TAH-see. The top rung of the ladder, and the one that earns the title doktor. ⚠️ Do not be misled by the di- at the front: this is NOT a passive form, it is simply how the loanword begins, and nothing about it is being done to anybody. Sidang disertasi, the defence, is the public event at the end." },
        { id: "id-u103l3-jurnal", type: "vocab", front: "jurnal", reading: "jurnal", meaning: "an academic journal", example: { jp: "Jurnal itu hanya menerima tulisan dari orang yang sudah selesai pascasarjana.", en: "That journal only accepts writing from people who have finished postgraduate study." }, accept: ["a scholarly periodical", "a research publication", "a learned journal"], drill: { jp: "Jurnal itu hanya menerima tulisan pendek", en: "That journal only accepts short writing" }, hint: "JOOR-nahl. ⚠️ Keep it apart from koran, a newspaper, and majalah, a magazine, both of which you know: a jurnal is read by a few hundred specialists and nobody else. It also means a diary or a daybook, and in bookkeeping a ledger — so context decides, and in a university it always means the first thing." },
        { id: "id-u103l3-plagiat", type: "vocab", front: "plagiat", reading: "plagiat", meaning: "passing off another's work as your own", example: { jp: "Plagiat adalah masalah besar di banyak kampus pada beberapa tahun ini.", en: "Plagiarism is a big problem at many campuses in these last few years." }, accept: ["plagiarism", "copying someone's writing without saying so", "academic theft"], drill: { jp: "Plagiat adalah masalah besar di kampus", en: "Plagiarism is a big problem at campuses" }, hint: "plah-gee-AHT, hard g. ⚠️ Note the shape Indonesian chose: plagiat, with no -ism and no -arism — and the person is a plagiator. It is a career-ending accusation in Indonesian academia and the word appears in university regulations, so it is formal, not slang." },
        { id: "id-u103l3-menerbitkan", type: "vocab", front: "menerbitkan", reading: "menerbitkan", meaning: "to publish something", example: { jp: "Dosen itu menerbitkan hasil penelitian di jurnal asing pada bulan Mei.", en: "That lecturer published the research results in a foreign journal in May." }, accept: ["to bring out in print", "to put out a publication", "to issue to the public"], drill: { jp: "Dosen itu menerbitkan hasil penelitian itu", en: "That lecturer published those research results" }, hint: "muh-nuhr-beet-KAHN. ⚠️ Built on terbit, to come out, which you met in u81 — and the pair is worth holding: a book terbit by itself, a person or a press menerbitkan it. The actor is the one doing the putting-out, so a journal menerbitkan an article and the article terbit." },
      ],
    },
    {
      id: "id-u103l4",
      unit: 103,
      lesson: 4,
      title: "Metode penelitian",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe how a study was done — the method, the hypothesis it tested, the sample, the survey, the people who answered it, and what it found.",
      items: [
        { id: "id-u103l4-metode", type: "vocab", front: "metode", reading: "metode", meaning: "a method", example: { jp: "Metode baru itu lebih cepat tetapi hasil dari metode lama lebih jelas.", en: "That new method is faster but the result from the old method is clearer." }, accept: ["a way of doing something systematically", "an approach", "a procedure"], drill: { jp: "Metode baru itu lebih cepat sekarang", en: "That new method is faster now" }, hint: "muh-TOH-duh — note the final e, which is a schwa and genuinely there: metode, three syllables, not the two-syllable English method. ⚠️ You already know cara, a way, which you know from u26: a cara is anybody's way of doing a thing, a metode is a worked-out system you can name and defend. A study has a metode; a cook has a cara." },
        { id: "id-u103l4-hipotesis", type: "vocab", front: "hipotesis", reading: "hipotesis", meaning: "a hypothesis", example: { jp: "Hipotesis pertama kami salah dan kami harus mencari yang lain.", en: "Our first hypothesis was wrong and we had to look for another." }, accept: ["a proposition to be tested", "an assumption put up for testing", "a working theory"], drill: { jp: "Hipotesis pertama kami salah dan berubah", en: "Our first hypothesis was wrong and changed" }, hint: "hee-poh-TAY-sees. Note how the two parts map: hypo- becomes hipo- and -thesis becomes -tesis, exactly the tesis you learned a lesson ago. ⚠️ It is a claim you set up in order to TEST it, so menguji hipotesis, to test a hypothesis, is the collocation; a hipotesis you merely believe is a dugaan, which u54 gave you." },
        { id: "id-u103l4-sampel", type: "vocab", front: "sampel", reading: "sampel", meaning: "a sample in a study", example: { jp: "Sampel dari dua ratus orang itu masih kurang besar untuk seluruh kota.", en: "That sample of two hundred people is still too small for the whole city." }, accept: ["the group studied to stand for a larger one", "a selected subset", "a test group"], drill: { jp: "Sampel dari dua ratus orang kurang besar", en: "A sample of two hundred people is too small" }, hint: "SAHM-puhl — and watch the spelling: Indonesian writes sampel with an e, never sampl or sample. ⚠️ It covers both senses English has — a sampel darah is a blood sample and a sampel penelitian is the people in a study — but the research sense is the one a B2 reader meets most, usually right next to the next card." },
        { id: "id-u103l4-survei", type: "vocab", front: "survei", reading: "survei", meaning: "a survey", example: { jp: "Survei itu mencapai dua ribu orang di lima kota besar.", en: "That survey reached two thousand people in five big cities." }, accept: ["a study asking many people", "a poll", "a questionnaire study"], drill: { jp: "Survei itu mencapai dua ribu orang", en: "That survey reached two thousand people" }, hint: "soor-VAY — the ei is a clear ay, so it rhymes with the English say, not with the English survey. ⚠️ And note the spelling with no final y: survei. The verb is mensurvei, and the firm that runs them is a lembaga survei, which in Indonesian politics is a household phrase around every election." },
        { id: "id-u103l4-responden", type: "vocab", front: "responden", reading: "responden", meaning: "the people who answer a survey", example: { jp: "Responden dalam survei itu semua orang muda di bawah tiga puluh tahun.", en: "The respondents in that survey were all young people under thirty." }, accept: ["a respondent", "someone who answers a questionnaire", "a person surveyed"], drill: { jp: "Responden dalam survei itu semua orang muda", en: "The respondents in that survey are all young people" }, hint: "res-POHN-duhn. ⚠️ Another word Indonesian uses for singular and plural alike: satu responden and seribu responden both take the same form. Keep it apart from penonton, an audience, and pembaca, a reader, which you know — a responden is only ever a person who was ASKED and ANSWERED." },
        { id: "id-u103l4-temuan", type: "vocab", front: "temuan", reading: "temuan", meaning: "a finding of a study", example: { jp: "Temuan dari penelitian itu mengubah cara dokter bekerja di seluruh negara.", en: "The findings from that research changed the way doctors work across the country." }, accept: ["what a study discovered", "a research result", "a discovery reported"], drill: { jp: "Temuan dari penelitian itu mengubah banyak hal", en: "The findings from that research changed many things" }, hint: "tuh-MOO-an. ⚠️ Built on the same root as menemukan, to find, which you met in u39 — but menemukan is the ACT and a temuan is the THING reported. Keep it apart from hasil, a result, which you know: a hasil is any outcome, a temuan is specifically new knowledge somebody dug up and wrote down." },
      ],
    },
  ],
};
