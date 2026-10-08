// ID Unit 91 — Ketelitian dan galat ("Precision and error") — B2
// B2 block 1 (u88–u100). CONVENTIONS: see unit88.js §C1–§C12 — binding here.
//
// §C-D1. RETHEMED, AND THIS SLOT IS THE WORST-SPENT IN THE WHOLE BAND. The
//        scaffold calls it "Nuance and degree". Probed 26 candidates for the
//        slot as titled: **16 came back TAKEN.** `teliti`(u78) `tepat`(u14)
//        `hampir`(u13) `kurang`(u14) `lebih`(u14) `sekadar`(u71) `justru`(u28)
//        `bahkan`(u28) `nyaris`(u53) `relatif`(u53) `mutlak`(u53)
//        `masing-masing`(u15) `khusus`(u28) `cenderung`(u53) `sedikit`(u1)
//        `banyak`(u1). **u53 `Semakin, setara, dan taraf` owns degree and u28
//        owns the sentence adverbs**; there is no unit here as titled, and
//        authoring it would re-teach ten A1/A2 words in B2 clothing.
//        **What IS open, measured on 24 candidates: 22 free.** Not *how much* —
//        u53 has that — but **how exactly a measurement was made and what it is
//        called when it was made wrong**. That is this unit, and it is the
//        natural partner to u89 (is the source sound?) and u90 (by what measure?).
//
// §C-D2. WHY A LANGUAGE COURSE NEEDS IT. Every technical, medical, legal and
//        financial text a B2 learner reads turns on this vocabulary — `galat`,
//        `selisih`, `ambang`, `pembulatan`, `penyimpangan`, `cacat` — and the
//        corpus has **none of it**. It is also the only unit in the band that
//        teaches a learner to read a number critically rather than just say it.
//
// §C-D3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (C3/C4). Two circumfix
//        families, which is the cap, and a verb+noun pair off one root counts as
//        ONE family:
//        `kelonggaran`←**longgar (u61, loose-fitting)** — KEPT: an allowance
//        deliberately granted is not "loose", and the hint names the root ·
//        `membulatkan`+`pembulatan`←**bulat (u30, round)** — ONE family, KEPT:
//        rounding a number is not derivable from "round", and the pair is house
//        style per C4 · `penyimpangan`←menyimpang (same lesson, house style) ·
//        `menyempurnakan`+`penyempurnaan`←**sempurna (u37)** — ONE family, and
//        it IS a u70 causative on a taught adjective, so it is kept only on the
//        narrow ground §C-B4 states: the actual use is "to finalise a draft",
//        not "to make perfect", and `penyempurnaan` is a named drafting STAGE in
//        Indonesian bureaucracy. The hints carry that work. · `saksama` `cermat` `presisi` `rinci`
//        `akurat` `jeli` `galat` `selisih` `meleset` `luput` `ambang` `patokan`
//        `kisaran` `cacat` `janggal` `sumbang` `menyeluruh` — roots not taught.
//
// §C-D4. REFUSED HERE, EVERY ONE NAMED. `ketelitian`←teliti(u78),
//        `ketepatan`←tepat(u14) and `kekeliruan`←keliru(u49) — all three are
//        free-gift circumfixes under C4: a learner with the root already has the
//        noun. Dropped for `saksama`, `akurat` and `galat`. `ketidakpastian` —
//        built on taught `tidak`+`pasti`, decodable, and it trespasses on u54,
//        which owns likelihood; dropped for `janggal`. `toleransi` — the
//        allocation gives it to **u99** in its social sense, which is the far
//        more useful one, so this unit uses `kelonggaran` for the engineering
//        sense and teaches no second tolerance word. `perincian`/`terperinci` —
//        dropped to keep `rinci` the only card off that root in the unit.
//        ⚠️ The unit title keeps the WORD ketelitian even though the CARD was
//        dropped. A title is not a front; it is the name of the idea, and
//        `ketelitian` is the natural Indonesian name for it.
export const ID_UNIT91 = {
  id: "id-u91",
  lang: "id",
  title: "Ketelitian dan galat",
  order: 91,
  stage: "b2",
  lessons: [
    {
      id: "id-u91l1",
      unit: 91,
      lesson: 1,
      title: "Cermat dan akurat",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe careful work — say it was done meticulously, say somebody is careful by nature, name fineness of measurement, say an account is detailed, say a figure is accurate, and say somebody has a sharp eye.",
      items: [
        { id: "id-u91l1-saksama", type: "vocab", front: "saksama", reading: "saksama", meaning: "done leaving nothing unchecked", example: { jp: "Pengecekan yang saksama menemukan dua angka yang salah dalam laporan itu.", en: "A thorough check found two wrong figures in that report." }, accept: ["meticulous", "painstaking", "scrupulously thorough"], drill: { jp: "Pekerjaan itu dilakukan dengan saksama", en: "That work is done meticulously" }, hint: "sahk-SAH-mah. ⚠️ You already know teliti, careful, from u78 — that is a TRAIT of a person. Saksama describes the WORK: it says every part was gone over and nothing was assumed. It nearly always appears as dengan saksama, and it is the register of an audit report rather than a conversation. Also spelled seksama, which is equally standard." },
        { id: "id-u91l1-cermat", type: "vocab", front: "cermat", reading: "cermat", meaning: "careful with detail by habit", example: { jp: "Pegawai yang cermat itu selalu memeriksa nama sebelum menandatangani surat.", en: "That careful clerk always checks the name before signing a letter." }, accept: ["attentive to detail", "exacting", "prudent and precise"], drill: { jp: "Dia pegawai yang cermat dan sabar", en: "She is a careful and patient clerk" }, hint: "CHUHR-maht — c is CH. ⚠️ Three words for careful and they are not one word: hati-hati, which you have had since A1, is careful about DANGER; teliti, from u78, is careful about MISTAKES; cermat is careful about DETAIL and carries a hint of thrift as well — cermat dalam belanja means a shrewd shopper. Choose by what the carefulness is for." },
        { id: "id-u91l1-presisi", type: "vocab", front: "presisi", reading: "presisi", meaning: "fineness of a measurement", example: { jp: "Alat baru itu punya presisi yang jauh lebih baik daripada alat lama.", en: "That new instrument has far better fineness of measurement than the old one." }, accept: ["precision", "how finely something measures", "exactness of an instrument"], drill: { jp: "Alat itu punya presisi yang tinggi", en: "That instrument has high precision" }, hint: "preh-SEE-see. ⚠️ Hold it apart from akurat, two cards on, exactly as a physicist would: presisi is how FINE the measurement is — how many decimals it can resolve — and akurat is whether it is RIGHT. An instrument can be precise and wrong, which is the most dangerous combination there is, and Indonesian marks the difference with these two words." },
        { id: "id-u91l1-rinci", type: "vocab", front: "rinci", reading: "rinci", meaning: "broken out item by item", example: { jp: "Dewan itu minta laporan yang rinci tentang semua biaya proyek.", en: "That council asked for an item-by-item report on all the project costs." }, accept: ["itemised", "giving every particular", "spelled out in detail"], drill: { jp: "Mereka minta laporan yang rinci sekali", en: "They ask for a very detailed report" }, hint: "REEN-chee — c is CH. ⚠️ Narrower than lengkap, complete, which you know: a lengkap report has all its parts, a rinci report breaks each part into lines. The verb merinci means to itemise, and you will meet rincian biaya, an itemised cost list, on every Indonesian invoice. Keep it apart from menguraikan, from u88, which is spoken and argumentative." },
        { id: "id-u91l1-akurat", type: "vocab", front: "akurat", reading: "akurat", meaning: "matching the real value", example: { jp: "Angka dalam paparan itu akurat karena sudah diverifikasi dua kali.", en: "The figures in that briefing are accurate because they have been verified twice." }, accept: ["accurate", "correct against the true value", "right to the fact"], drill: { jp: "Angka dalam laporan itu sudah akurat", en: "The figures in that report are accurate now" }, hint: "ah-koo-RAHT. ⚠️ You already know benar, true, and tepat, exact, from u14 — and akurat is specifically the match between a MEASUREMENT and reality. A sentence is benar; a watch is tepat; a figure is akurat. See the presisi card two back for the pairing that matters most: akurat is right, presisi is fine, and neither implies the other." },
        { id: "id-u91l1-jeli", type: "vocab", front: "jeli", reading: "jeli", meaning: "quick to notice what others miss", example: { jp: "Pembaca yang jeli menemukan dua kata yang salah di halaman pertama.", en: "A sharp-eyed reader found two wrong words on the first page." }, accept: ["sharp-eyed", "observant", "keen in spotting things"], drill: { jp: "Pembaca yang jeli melihat kesalahan itu", en: "A sharp-eyed reader sees that mistake" }, hint: "JUH-lee. ⚠️ A quality of the EYE rather than of the method: a cermat clerk follows every step, a jeli reader simply sees the thing nobody else did. It is high praise in Indonesian and it is used of critics, editors and investigators. Note that the identical-looking jeli borrowed from English jelly exists too; only context separates them, and it never comes up in this register." },
      ],
    },
    {
      id: "id-u91l2",
      unit: 91,
      lesson: 2,
      title: "Galat dan selisih",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name what went wrong with a number — the margin of error, the gap between two figures, say something missed its mark, say a result departs from the expected, name that departure, and say a detail escaped notice.",
      items: [
        { id: "id-u91l2-galat", type: "vocab", front: "galat", reading: "galat", meaning: "the margin by which a measurement is off", example: { jp: "Galat dalam percobaan itu masih kecil, jadi hasilnya bisa dipakai.", en: "The margin of error in that experiment is still small, so the result can be used." }, accept: ["measurement error", "the amount a figure is off by", "an error term"], drill: { jp: "Galat dalam hasil itu masih kecil", en: "The error in that result is still small" }, hint: "GAH-laht, hard g. ⚠️ Not a mistake somebody made — that is kesalahan, which you know. A galat is the unavoidable distance between a measurement and the truth, which is why every Indonesian lab report has a galat section and nobody is blamed for it. It is also the word your computer shows you for a system error." },
        { id: "id-u91l2-selisih", type: "vocab", front: "selisih", reading: "selisih", meaning: "the gap between two figures", example: { jp: "Selisih antara dua angka itu hanya dua ribu rupiah.", en: "The gap between those two figures is only two thousand rupiah." }, accept: ["a difference between amounts", "a discrepancy", "the shortfall between two numbers"], drill: { jp: "Selisih antara dua angka itu kecil", en: "The gap between those two figures is small" }, hint: "suh-LEE-seeh. ⚠️ Keep it apart from perbedaan, a difference, which you have had since A2: a perbedaan can be between any two things, a selisih is strictly ARITHMETIC — one number minus another. It has a second, older sense of a quarrel (berselisih, to be at odds), and context separates them completely." },
        { id: "id-u91l2-meleset", type: "vocab", front: "meleset", reading: "meleset", meaning: "to come out short of the mark", example: { jp: "Perkiraan tentang jumlah penonton itu meleset jauh dari angka yang sebenarnya.", en: "The estimate of the number of viewers came out far short of the real figure." }, accept: ["to miss the mark", "to fall wide", "to turn out wrong"], drill: { jp: "Perkiraan kami meleset cukup jauh", en: "Our estimate missed the mark quite widely" }, hint: "muh-LEH-seht. The picture is a thrown thing that did not hit. ⚠️ Its subject is almost always a PREDICTION: perkiraan, which you know from u54, or a target. You cannot meleset a measurement — a measurement has a galat. And unlike salah, wrong, it carries no blame: the world simply did not do what you forecast." },
        { id: "id-u91l2-menyimpang", type: "vocab", front: "menyimpang", reading: "menyimpang", meaning: "to depart from what was expected", example: { jp: "Hasil percobaan kedua menyimpang dari hasil yang pertama.", en: "The result of the second experiment departs from the first one." }, accept: ["to deviate", "to diverge from the norm", "to stray from the pattern"], drill: { jp: "Hasil kedua menyimpang dari yang pertama", en: "The second result deviates from the first" }, hint: "muh-nyeem-PAHNG, ny one sound, ng one hum. ⚠️ A word with a sharp social edge as well as a technical one: menyimpang dari aturan is to break a rule, and perilaku menyimpang means deviant behaviour. So in a lab it is neutral and about data, and about a PERSON it is an accusation — know which you are saying." },
        { id: "id-u91l2-penyimpangan", type: "vocab", front: "penyimpangan", reading: "penyimpangan", meaning: "a departure from the standard", example: { jp: "Penyimpangan kecil dalam ukuran itu tidak mengubah hasil akhir.", en: "A small departure in that measurement does not change the final result." }, accept: ["a deviation", "a divergence from what is laid down", "an irregularity"], drill: { jp: "Penyimpangan itu tercatat dalam laporan resmi", en: "That deviation is recorded in the official report" }, hint: "puh-nyeem-PAHNG-an. The noun of the card before it, and it inherits both senses. ⚠️ In Indonesian public life the second one dominates: penyimpangan anggaran, a budget irregularity, is the standard polite word for money that went missing — so when you read it in a newspaper it almost never means a statistical deviation. u97 gives you the blunter words for the same thing." },
        { id: "id-u91l2-luput", type: "vocab", front: "luput", reading: "luput", meaning: "to escape notice", example: { jp: "Dua kesalahan kecil luput dari pengecekan yang pertama.", en: "Two small mistakes escaped the first round of checking." }, accept: ["to be overlooked", "to slip through", "to get past unnoticed"], drill: { jp: "Satu angka luput dari pengecekan kami", en: "One figure escaped our check" }, hint: "LOO-poot. It takes dari for what it escaped. ⚠️ Note whose fault it is: luput puts the thing in the subject position — the mistake escaped — rather than blaming the checker, which is why an Indonesian report prefers it to lupa, to forget. Tidak luput dari perhatian, did not escape notice, is the fixed phrase in the positive." },
      ],
    },
    {
      id: "id-u91l3",
      unit: 91,
      lesson: 3,
      title: "Ambang dan kelonggaran",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about where the limits of a measurement sit — name the threshold, name the slack allowed, name the fixed reference point, say you are rounding a figure, name the rounding, and name the range a value sits in.",
      items: [
        { id: "id-u91l3-ambang", type: "vocab", front: "ambang", reading: "ambang", meaning: "the point at which something starts to count", example: { jp: "Suhu itu sudah melebihi ambang yang ditulis dalam aturan keselamatan.", en: "That temperature has already gone past the point laid down in the safety rule." }, accept: ["a threshold", "the level at which a rule bites", "a trigger point"], drill: { jp: "Angka itu sudah melebihi ambang yang aman", en: "That figure has already passed the safe threshold" }, hint: "AHM-bahng. First a physical thing — ambang pintu is a doorsill — and then every figurative use you need: ambang batas is a cut-off value, and di ambang means on the brink of. ⚠️ Keep it apart from batas, a limit, which you know: a batas is where the thing ENDS, an ambang is where its consequences BEGIN." },
        { id: "id-u91l3-kelonggaran", type: "vocab", front: "kelonggaran", reading: "kelonggaran", meaning: "slack deliberately allowed", example: { jp: "Pihak sekolah memberi kelonggaran satu minggu bagi murid yang sakit.", en: "The school gave a week's leeway to pupils who were ill." }, accept: ["leeway", "an allowance granted", "margin permitted by a rule"], drill: { jp: "Mereka memberi kelonggaran satu minggu lagi", en: "They give one more week of leeway" }, hint: "kuh-lohng-GAH-ran, hard g. ⚠️ Built on longgar, loose-fitting, which you know from u61 — but the noun means something the root does not: not looseness but PERMISSION to be imprecise, granted by whoever set the rule. It runs two ways: in engineering it is a tolerance, in an office memberi kelonggaran is an act of mercy." },
        { id: "id-u91l3-patokan", type: "vocab", front: "patokan", reading: "patokan", meaning: "a fixed point everything is measured from", example: { jp: "Harga tahun lalu dipakai sebagai patokan untuk menghitung harga baru.", en: "Last year's price is used as the fixed reference for working out the new price." }, accept: ["a reference point", "a peg to measure from", "a baseline figure"], drill: { jp: "Harga lama dipakai sebagai patokan kami", en: "The old price is used as our reference point" }, hint: "pah-TOH-kan. The root patok is a driven stake, and the picture is exact: a surveyor's peg that everything else is measured off. ⚠️ Keep it apart from tolok ukur, from u90: a tolok ukur is the SCALE you judge quality on, a patokan is a fixed NUMBER you calculate from. A price has a patokan; a school has a tolok ukur." },
        { id: "id-u91l3-membulatkan", type: "vocab", front: "membulatkan", reading: "membulatkan", meaning: "to round a figure off", example: { jp: "Pegawai itu membulatkan setiap angka supaya laporan lebih mudah dibaca.", en: "That clerk rounds every figure off so the report is easier to read." }, accept: ["to round a number", "to bring to a whole figure", "to round up or down"], drill: { jp: "Dia membulatkan angka itu ke atas", en: "He rounds that figure upward" }, hint: "muhm-boo-laht-KAHN. ⚠️ Built on bulat, round, which you know from u30, and the arithmetic sense is not derivable from the shape — this is the only thing it means with a number. Two fixed phrases: membulatkan ke atas, to round up, and ke bawah, down. A third, lovely sense: membulatkan tekad means to make up one's mind firmly." },
        { id: "id-u91l3-pembulatan", type: "vocab", front: "pembulatan", reading: "pembulatan", meaning: "the rounding-off of figures", example: { jp: "Selisih kecil itu hanya datang dari pembulatan, bukan dari kesalahan hitung.", en: "That small gap comes only from rounding, not from a calculation mistake." }, accept: ["rounding as a process", "the adjustment to a whole figure", "round-off"], drill: { jp: "Selisih itu hanya datang dari pembulatan", en: "That gap comes only from rounding" }, hint: "puhm-boo-LAH-tan. The noun of the card before it. ⚠️ Worth a card of its own because it names the commonest innocent explanation in any set of books: when two totals disagree by a few rupiah, karena pembulatan is the answer, and it is the opposite of the penyimpangan you met in the last lesson. One is arithmetic, the other is a finding." },
        { id: "id-u91l3-kisaran", type: "vocab", front: "kisaran", reading: "kisaran", meaning: "the band a value falls within", example: { jp: "Harga rumah di kota itu ada di kisaran yang tidak bisa dicapai pekerja muda.", en: "House prices in that city are in a band young workers cannot reach." }, accept: ["a range of values", "the bracket a figure sits in", "roughly between two amounts"], drill: { jp: "Harga itu ada di kisaran lima juta", en: "That price is in the range of five million" }, hint: "kee-SAH-ran. From kisar, to revolve or shift about. ⚠️ Enormously useful and very common in speech: di kisaran X means around X, and it is how Indonesians give an approximate price without committing. Keep it apart from antara, between, which names two endpoints — a kisaran is the span itself, treated as one thing." },
      ],
    },
    {
      id: "id-u91l4",
      unit: 91,
      lesson: 4,
      title: "Cacat dan penyempurnaan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Judge whether a thing is sound and say what was done about it — name a flaw, say something feels off, say it strikes a false note, say somebody is putting the last touches to it, name that finishing work, and say a treatment covers everything.",
      items: [
        { id: "id-u91l4-cacat", type: "vocab", front: "cacat", reading: "cacat", meaning: "a flaw in something otherwise sound", example: { jp: "Ada cacat kecil pada kain itu, jadi harganya turun setengah.", en: "There is a small flaw in that cloth, so its price dropped by half." }, accept: ["a defect", "a blemish", "an imperfection in the thing itself"], drill: { jp: "Ada cacat kecil pada barang itu", en: "There is a small defect in that item" }, hint: "CHAH-chaht — both c's are CH. ⚠️ Not a mistake and not an error: a kesalahan is something somebody DID, a galat is a measurement's distance from truth, and a cacat is a fault IN THE OBJECT. Said of people it means a disability (cacat fisik) and is best avoided — modern Indonesian prefers disabilitas or penyandang disabilitas, and you should too." },
        { id: "id-u91l4-janggal", type: "vocab", front: "janggal", reading: "janggal", meaning: "not quite right in a way you cannot name", example: { jp: "Ada sesuatu yang janggal dalam keterangan saksi itu, tetapi belum jelas apa.", en: "There is something not quite right in that witness's statement, but it is not yet clear what." }, accept: ["odd and faintly wrong", "jarring", "off in a way hard to pin down"], drill: { jp: "Ada sesuatu yang janggal dalam laporan itu", en: "There is something odd in that report" }, hint: "JAHNG-gahl, hard g. ⚠️ The most useful word in this lesson for ordinary life, and it is not aneh, strange, which you know: aneh is unusual and may be fine, janggal means something is OUT OF PLACE and probably wrong. An investigator says terasa janggal before they can say what the galat is. You met canggung, awkward, in u57 — that is about a person's bearing, this is about a thing's fit." },
        { id: "id-u91l4-sumbang", type: "vocab", front: "sumbang", reading: "sumbang", meaning: "striking a false note", example: { jp: "Satu kalimat dalam pidato itu terasa sumbang di antara kalimat yang lain.", en: "One sentence in that speech struck a false note among the others." }, accept: ["discordant", "out of tune with the rest", "jarringly inappropriate"], drill: { jp: "Satu kalimat dalam pidato itu terasa sumbang", en: "One sentence in that speech sounds discordant" }, hint: "SOOM-bahng. ⚠️ FIRST A WARNING: this is NOT menyumbang, to donate, which looks identical with a prefix and is a completely different word. Bare sumbang means off-key — of a singing voice literally, and then of anything that does not harmonise with its setting. Where janggal says a thing is misplaced, sumbang says it CLASHES. Nada sumbang is the fixed phrase." },
        { id: "id-u91l4-menyempurnakan", type: "vocab", front: "menyempurnakan", reading: "menyempurnakan", meaning: "to put the last touches to something", example: { jp: "Dia menyempurnakan uraian itu sebelum mengirim naskah ke penerbit.", en: "She put the last touches to that account before sending the manuscript to the publisher." }, accept: ["to perfect", "to finish off properly", "to refine to completion"], drill: { jp: "Dia menyempurnakan laporan itu malam ini", en: "She perfects that report tonight" }, hint: "muh-nyuhm-poor-nah-KAHN, six syllables, ny one sound. From sempurna, perfect. ⚠️ Not memperbaiki, to repair, which you have had since u25: repairing fixes something broken, menyempurnakan improves something that already works. So you memperbaiki a leaking roof and menyempurnakan a good draft — using the wrong one implies the thing was faulty." },
        { id: "id-u91l4-penyempurnaan", type: "vocab", front: "penyempurnaan", reading: "penyempurnaan", meaning: "finishing work on something already sound", example: { jp: "Penyempurnaan aturan itu memakan waktu enam bulan di tingkat dewan.", en: "The refinement of that rule took six months at council level." }, accept: ["refinement", "a final improvement pass", "polishing to completion"], drill: { jp: "Penyempurnaan aturan itu memakan enam bulan", en: "Refining that rule took six months" }, hint: "puh-nyuhm-poor-NAH-an, six syllables. The noun of the card before it. ⚠️ It is a stage name in Indonesian bureaucracy — a draft goes through penyempurnaan before it is signed — so reading it on a document tells you the thing is agreed in substance and only the wording is still moving. Compare perumusan from u90, which is the stage before." },
        { id: "id-u91l4-menyeluruh", type: "vocab", front: "menyeluruh", reading: "menyeluruh", meaning: "covering every part with none left out", example: { jp: "Pengecekan yang menyeluruh dilakukan sekali setiap tahun di pabrik itu.", en: "A check covering every part is carried out once a year at that factory." }, accept: ["comprehensive", "across the board", "leaving no part untouched"], drill: { jp: "Mereka minta pemeriksaan yang menyeluruh sekarang", en: "They ask for a comprehensive inspection now" }, hint: "muh-nyuh-LOO-rooh, ny one sound. From seluruh, the whole of, which you know. ⚠️ Keep it apart from saksama, the first card of this unit: saksama is about the DEPTH of the attention paid to each part, menyeluruh is about the BREADTH of what was covered. A check can be menyeluruh and shallow, or saksama on one page only — and a good audit is both." },
      ],
    },
  ],
};
