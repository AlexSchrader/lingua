// ID Unit 102 — Layanan kesehatan dan perawatan ("Health services and care") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 2 (u101–u113). Band notes BB1–BB8 are in unit101.js's header; unit1's
// A1 conventions, unit21's A2 set and unit51's B1 set (B1–B12) all still bind.
//
// §P1. BOUNDARY WITH u67, u45 AND u11, MEASURED. u67 owns ILLNESS AND FITNESS
//      (`vaksin` `gejala` `stres` `kecanduan` `wabah`), u45 owns THE BODY AND
//      EMERGENCIES (`operasi` `ambulans` `perawat` `menular` `luka`), u11 owns
//      the EVERYDAY CLINIC (`rumah sakit` `apotek` `obat` `sakit`). So this unit
//      teaches **no second word for an illness, a symptom or an operation**. It
//      takes the INSTITUTION: where you go, who works there, what it costs, who
//      pays, and what a state does in an outbreak.
//      ⚠️ Five of my first-draft candidates were already theirs — `vaksin`(u67)
//      `operasi`(u45) `ambulans`(u45) `perawat`(u45) `resep`(u34) — so the unit
//      takes `vaksinasi`, `bedah`, `transfusi`, `nakes`-free `kesehatan` and
//      `dosis` off that same ground instead.
//
// §P2. THREE EXACT COGNATES REFUSED HERE (band note BB4): `diagnosis`
//      (front === gloss → a copy task; the VERB `mendiagnosis` shipped instead,
//      which is also the form a report uses) and `donor` (same; `transfusi`
//      shipped, which is the procedure rather than the person). `medis` was
//      dropped in favour of **`kesehatan`**, the ke-…-an noun off taught `sehat`
//      — it is the head of `asuransi kesehatan`, `jaminan kesehatan`,
//      `biaya kesehatan` and `tenaga kesehatan`, so without it the whole unit's
//      natural phrasing is unwritable.
//
// §P3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1 §3 / unit51 B5):
//      kesehatan → sehat       ⚠️ `sehat` IS taught (u20, "healthy"). Carded:
//        being healthy is a state of a person, kesehatan is a sector, a budget
//        line and a ministry. Drill-safe: "kesehatan" holds "sehat" at index 2,
//        preceded by `e`, so findWholeWord matches in neither direction.
//      mendiagnosis → diagnosis — the bare noun is not taught and is refused as
//        a cognate, so there is no pair to collide with.
//      penularan → menular     ⚠️ `menular` IS taught (u45, "contagious").
//        Carded: being contagious is a property of a disease, penularan is the
//        EVENT of it passing from one person to the next, which is what every
//        outbreak report counts. Drill-safe: the shared string is the root
//        `tular`, taught nowhere and carded nowhere.
//      rujukan → merujuk — `merujuk` is NOT taught. Clean front.
//      vaksinasi → vaksin      ⚠️ `vaksin` IS taught (u67). Carded: the
//        substance and the programme. Drill-safe in one direction only —
//        "vaksinasi" holds "vaksin" at index 0 followed by `a`, so findWholeWord
//        does NOT match; and `vaksin`'s own drill cannot contain `vaksinasi`
//        as a whole word either. Verified both ways by hand.
//      rawat inap → rawat/merawat — neither `rawat` nor `merawat` is taught, so
//        the two-word front is clean. ⚠️ Spaced, never solid (unit1 §9): the
//        fold is "rawatinap" and nothing else in the corpus folds to it.
export const ID_UNIT102 = {
  id: "id-u102",
  lang: "id",
  title: "Layanan kesehatan dan perawatan",
  order: 102,
  stage: "b2",
  lessons: [
    {
      id: "id-u102l1",
      unit: 102,
      lesson: 1,
      title: "Puskesmas, klinik, dan tenaga kesehatan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name where Indonesians actually go when they are ill and who they meet there — the village health centre, a private clinic, the patient, a specialist, a pharmacist, and health as a whole sector.",
      items: [
        { id: "id-u102l1-puskesmas", type: "vocab", front: "puskesmas", reading: "puskesmas", meaning: "a village health centre", example: { jp: "Puskesmas di desa itu hanya punya satu dokter untuk dua ribu warga.", en: "The health centre in that village has only one doctor for two thousand residents." }, accept: ["a local public clinic", "a community health post", "the government health centre"], drill: { jp: "Puskesmas di desa itu selalu ramai", en: "The health centre in that village is always busy" }, hint: "poos-KUHS-mahs. ⚠️ It is a shortening of pusat kesehatan masyarakat, a community health centre, and nothing in it is pronounced as a separate word any more — Indonesians treat it as one noun. This is the first place a village goes, free or nearly free, long before any rumah sakit. There is no English word for it, so learn the Indonesian thing." },
        { id: "id-u102l1-klinik", type: "vocab", front: "klinik", reading: "klinik", meaning: "a clinic", example: { jp: "Klinik kecil di dekat pasar itu masih menerima pasien pada jam sembilan malam.", en: "The small clinic near that market still takes patients at nine at night." }, accept: ["a small private practice", "a treatment centre", "a surgery"], drill: { jp: "Klinik di dekat pasar itu masih menerima pasien", en: "The clinic near that market still takes patients" }, hint: "KLEE-neek, two syllables, the k's both hard. ⚠️ The spelling is worth a second look: Indonesian writes klinik with no c at all. The thing it names sits between the puskesmas and the rumah sakit — privately owned, paid for, open late, no beds for the night." },
        { id: "id-u102l1-pasien", type: "vocab", front: "pasien", reading: "pasien", meaning: "a patient", example: { jp: "Pasien yang susah berjalan bisa meminta tolong di depan pintu.", en: "A patient who has difficulty walking can ask for help at the door." }, accept: ["someone under treatment", "a person being cared for", "a case under a doctor"], drill: { jp: "Pasien itu sudah pulang tadi pagi", en: "That patient already went home this morning" }, hint: "pah-see-EN, three syllables, stress on the last. ⚠️ Do not look for the other English meaning in it: the adjective patient, as in not in a hurry, is a completely different Indonesian word, sabar, which you already know. A pasien is only ever a person receiving treatment." },
        { id: "id-u102l1-spesialis", type: "vocab", front: "spesialis", reading: "spesialis", meaning: "a specialist doctor", example: { jp: "Untuk penyakit itu kami harus pergi ke spesialis di kota besar.", en: "For that illness we have to go to a specialist in the big city." }, accept: ["a consultant", "a doctor in one field", "an expert physician"], drill: { jp: "Spesialis di kota itu sangat mahal", en: "The specialist in that city is very expensive" }, hint: "spuh-see-AH-lees. Note the s where English has sp-ec: Indonesian writes spesialis, and the first syllable is a bare s against the p with no vowel between. ⚠️ In practice it almost always carries the field: dokter spesialis anak, spesialis mata. Said alone it still means a doctor, never a specialist in any other trade." },
        { id: "id-u102l1-apoteker", type: "vocab", front: "apoteker", reading: "apoteker", meaning: "a pharmacist", example: { jp: "Apoteker itu ingin tahu tentang obat lain yang sedang saya minum.", en: "That pharmacist wanted to know about other medicine I am currently taking." }, accept: ["a chemist", "the person who dispenses medicine", "a druggist"], drill: { jp: "Apoteker itu memberi obat yang lain", en: "That pharmacist gives different medicine" }, hint: "ah-poh-TAY-kuhr. You already know apotek, a pharmacy, from u11 — this is the human being in it, and the -er is the Dutch agent ending Indonesian borrowed whole. ⚠️ Keep them apart by sound: apotek has no final r and is the shop; apoteker has one and is the person." },
        { id: "id-u102l1-kesehatan", type: "vocab", front: "kesehatan", reading: "kesehatan", meaning: "health as a whole field", example: { jp: "Biaya kesehatan di negara ini naik lebih cepat daripada gaji orang biasa.", en: "Health costs in this country rise faster than an ordinary person's wage." }, accept: ["the health sector", "healthcare", "health in general"], drill: { jp: "Biaya kesehatan di negara ini naik", en: "Health costs in this country are rising" }, hint: "kuh-suh-HAH-tan. The ke-…-an noun off sehat, healthy, which you know from u20. ⚠️ Sehat describes a PERSON — saya sehat. Kesehatan is the whole field: biaya kesehatan, asuransi kesehatan, tenaga kesehatan, Kementerian Kesehatan. You cannot say saya kesehatan, and almost every phrase in this unit hangs off this word." },
      ],
    },
    {
      id: "id-u102l2",
      unit: 102,
      lesson: 2,
      title: "Rawat inap dan tindakan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe being admitted and worked on — staying in overnight, surgery, the right dose, a transfusion, keeping instruments sterile, and a doctor arriving at a diagnosis.",
      items: [
        { id: "id-u102l2-rawatinap", type: "vocab", front: "rawat inap", reading: "rawatinap", meaning: "staying in hospital", example: { jp: "Ibu saya harus rawat inap selama lima hari setelah operasi itu.", en: "My mother had to stay in hospital for five days after that operation." }, accept: ["inpatient treatment", "being admitted overnight", "hospital admission"], drill: { jp: "Ibu saya harus rawat inap lima hari", en: "My mother has to stay in hospital five days" }, hint: "RAH-waht EE-nahp, two words with a space. Inside it are rawat, to tend to, and inap, to stay the night. ⚠️ Keep the space: this is the fixed phrase on every form and every bill, and the opposite pair is rawat jalan, treatment you walk in and out of. A learner who only has rumah sakit cannot say which of the two happened." },
        { id: "id-u102l2-bedah", type: "vocab", front: "bedah", reading: "bedah", meaning: "surgery", example: { jp: "Dokter bedah itu bekerja di rumah sakit besar di Jakarta.", en: "That surgeon works at a big hospital in Jakarta." }, accept: ["an operation that cuts", "the surgical field", "surgical work"], drill: { jp: "Dokter bedah itu bekerja di Jakarta", en: "That surgeon works in Jakarta" }, hint: "BUH-dah, and the final h is breathed, not silent. ⚠️ You already have operasi from u45, and they are not the same word: operasi is the EVENT, bedah is the DISCIPLINE and the act of cutting. Dokter bedah is a surgeon; ruang bedah is an operating theatre; and membedah is also what you do to a question you are taking apart in an argument." },
        { id: "id-u102l2-dosis", type: "vocab", front: "dosis", reading: "dosis", meaning: "a dose", example: { jp: "Jangan minum obat itu lebih dari dosis yang tertulis di kertas.", en: "Do not take that medicine beyond the dose written on the paper." }, accept: ["the measured amount to take", "a prescribed quantity", "dosage"], drill: { jp: "Jangan minum lebih dari dosis itu", en: "Do not take more than that dose" }, hint: "DOH-sees. Note the final s, which English drops — Indonesian kept the Dutch dosis. ⚠️ It is countable and ordinary: dosis pertama, dosis kedua, setengah dosis. You will meet it in the vaccination queue long before you meet it in a pharmacy." },
        { id: "id-u102l2-transfusi", type: "vocab", front: "transfusi", reading: "transfusi", meaning: "a blood transfusion", example: { jp: "Darah untuk transfusi itu datang dari keluarga pasien sendiri.", en: "The blood for that transfusion came from the patient's own family." }, accept: ["putting blood into someone", "a transfusion", "giving blood to a patient"], drill: { jp: "Darah untuk transfusi itu sudah siap", en: "The blood for that transfusion is ready" }, hint: "trahns-FOO-see. ⚠️ Said alone it already means blood — Indonesian rarely bothers with transfusi darah, though you will see the full phrase on signs. This is the card the unit took instead of donor, which would have been a word you type by copying the English (band note BB4); the person who gives is a pendonor, which you can now read." },
        { id: "id-u102l2-steril", type: "vocab", front: "steril", reading: "steril", meaning: "sterile", example: { jp: "Semua alat di kamar itu harus steril sebelum dokter mulai bekerja.", en: "Every instrument in that room must be sterile before the doctor starts work." }, accept: ["free of germs", "medically clean", "disinfected"], drill: { jp: "Semua alat di kamar itu harus steril", en: "Every instrument in that room must be sterile" }, hint: "STAY-reel, two syllables. ⚠️ Keep it apart from bersih, clean, which you know from u10: a plate can be bersih; only something that has been through heat or chemicals is steril. Indonesian also uses it of a person who cannot have children, so read the context before you translate it as clean." },
        { id: "id-u102l2-mendiagnosis", type: "vocab", front: "mendiagnosis", reading: "mendiagnosis", meaning: "to diagnose", example: { jp: "Dokter mendiagnosis penyakit itu setelah memeriksa darah pasien dua kali.", en: "The doctor diagnosed that illness after examining the patient's blood twice." }, accept: ["to identify what is wrong", "to determine an illness", "to find the cause of a complaint"], drill: { jp: "Dokter mendiagnosis penyakit itu kemarin", en: "The doctor diagnosed that illness yesterday" }, hint: "muhn-dee-ahg-NOH-sees, five syllables. ⚠️ The unit carded the VERB and not the noun on purpose: diagnosis spelled on its own is the same string in both languages, so typing it would teach nothing. With men- in front it is a real Indonesian word with real Indonesian shape. Dokter mendiagnosis X; the finding itself a report calls hasil pemeriksaan." },
      ],
    },
    {
      id: "id-u102l3",
      unit: 102,
      lesson: 3,
      title: "Biaya dan jaminan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about who pays — insurance, the monthly premium, a contribution, a guarantee of cover, a claim, and the bill that arrives anyway.",
      items: [
        { id: "id-u102l3-asuransi", type: "vocab", front: "asuransi", reading: "asuransi", meaning: "insurance", example: { jp: "Harga asuransi kesehatan di kota besar naik setiap tahun.", en: "The price of health insurance in big cities rises every year." }, accept: ["cover against risk", "an insurance policy", "indemnity"], drill: { jp: "Harga asuransi kesehatan itu naik lagi", en: "The price of that health insurance has risen again" }, hint: "ah-soo-RAHN-see. From the Dutch assurantie, which is why there is no n before the s the way English has in insurance. ⚠️ It covers both the arrangement and the company: asuransi saya menolak means my insurer refused. Punya asuransi is the question that decides whether a family can afford the next three cards." },
        { id: "id-u102l3-premi", type: "vocab", front: "premi", reading: "premi", meaning: "an insurance premium", example: { jp: "Premi asuransi itu naik dua kali dalam tiga tahun terakhir.", en: "That insurance premium went up twice in the last three years." }, accept: ["the regular payment for cover", "what you pay each month for insurance", "a policy payment"], drill: { jp: "Premi asuransi itu naik dua kali", en: "That insurance premium has risen twice" }, hint: "PRAY-mee, two syllables, no final -um. ⚠️ Do not reach for the English premium's other sense: a premium product in Indonesian is barang premium or barang mahal, never premi. Premi is only ever money going to an insurer, and membayar premi is the collocation." },
        { id: "id-u102l3-iuran", type: "vocab", front: "iuran", reading: "iuran", meaning: "a membership contribution", example: { jp: "Iuran setiap bulan itu harus masuk sebelum tanggal lima.", en: "The monthly contribution has to arrive before the fifth." }, accept: ["a regular due", "a subscription fee", "money each member pays in"], drill: { jp: "Iuran setiap bulan harus masuk cepat", en: "The monthly contribution must come in quickly" }, hint: "ee-OO-ran, three syllables — i and u are separate vowels, not a diphthong. ⚠️ This is the one of the three a learner in Indonesia will actually pay: the national health scheme calls its monthly charge an iuran, not a premi, because it is framed as everyone chipping in rather than buying cover. It is also the word for what a neighbourhood collects for the night watch." },
        { id: "id-u102l3-jaminan", type: "vocab", front: "jaminan", reading: "jaminan", meaning: "a guarantee of cover", example: { jp: "Jaminan kesehatan dari pemerintah membantu keluarga miskin di seluruh negara.", en: "The government's health cover helps poor families across the whole country." }, accept: ["an assurance something is covered", "a warranty", "security given for something"], drill: { jp: "Jaminan kesehatan dari pemerintah sangat penting", en: "The government's health cover is very important" }, hint: "jah-MEE-nan. From menjamin, to guarantee, which this course does not card. ⚠️ Two senses, both common: jaminan kesehatan is cover, and jaminan on a loan is the thing the bank keeps if you do not pay. Read which one the sentence is in — tanpa jaminan can mean uninsured or unsecured." },
        { id: "id-u102l3-klaim", type: "vocab", front: "klaim", reading: "klaim", meaning: "an insurance claim", example: { jp: "Asuransi menolak klaim itu karena surat dari dokter kurang jelas.", en: "The insurer refused that claim because the letter from the doctor was not clear enough." }, accept: ["a formal request for payment", "a demand on a policy", "a claim for money back"], drill: { jp: "Asuransi menolak klaim itu kemarin", en: "The insurer refused that claim yesterday" }, hint: "KLAH-eem — two syllables, the ai is a and i said in a row, not the English long i. ⚠️ Indonesian borrowed it for the money sense AND the argument sense: mengajukan klaim is to file a claim, and klaim itu belum terbukti means that assertion is not proven yet. The spelling is the giveaway that it came in through writing, not speech." },
        { id: "id-u102l3-tagihan", type: "vocab", front: "tagihan", reading: "tagihan", meaning: "a bill", example: { jp: "Tagihan dari rumah sakit itu lebih besar daripada perkiraan kami.", en: "The bill from that hospital was bigger than our estimate." }, accept: ["an invoice", "a demand for payment", "the amount owed"], drill: { jp: "Tagihan dari rumah sakit itu sangat besar", en: "The bill from that hospital is very big" }, hint: "tah-GEE-han. From menagih, to chase a debt, which is not carded here. ⚠️ Keep it apart from harga, price, which you know: a harga is what a thing costs, a tagihan is the paper demanding it from you by a date. Tagihan listrik, tagihan air, tagihan rumah sakit — it is the word on every utility bill in the country." },
      ],
    },
    {
      id: "id-u102l4",
      unit: 102,
      lesson: 4,
      title: "Wabah dan pencegahan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Report what a health system does in an outbreak — a vaccination programme, quarantine, isolating a case, a pandemic, how the disease passes on, and a referral upwards.",
      items: [
        { id: "id-u102l4-vaksinasi", type: "vocab", front: "vaksinasi", reading: "vaksinasi", meaning: "a vaccination programme", example: { jp: "Vaksinasi anak di desa itu sudah selesai pada bulan lalu.", en: "The vaccination of children in that village finished last month." }, accept: ["immunisation drive", "the giving of vaccines", "a vaccination campaign"], drill: { jp: "Vaksinasi anak di desa itu sudah selesai", en: "The vaccination of children in that village is finished" }, hint: "vahk-see-NAH-see. ⚠️ You already know vaksin from u67, and the two are not interchangeable: a vaksin is the substance in the bottle, vaksinasi is the organised act of putting it into people. A clinic orders vaksin and runs vaksinasi, and only the second one can be sudah selesai." },
        { id: "id-u102l4-karantina", type: "vocab", front: "karantina", reading: "karantina", meaning: "quarantine", example: { jp: "Karantina selama dua minggu itu susah untuk orang yang harus bekerja.", en: "That two-week quarantine was hard for people who have to work." }, accept: ["being kept apart in case of infection", "enforced separation", "a holding period"], drill: { jp: "Karantina dua minggu itu sangat susah", en: "That two-week quarantine is very hard" }, hint: "kah-rahn-TEE-nah. ⚠️ Note what Indonesian does to the qu-: it becomes k, every time — karantina, kualitas, kuota. The thing itself is about WAITING to see whether you are ill, which is what divides it from the next card. Indonesia also uses karantina for plants and animals at the border." },
        { id: "id-u102l4-isolasi", type: "vocab", front: "isolasi", reading: "isolasi", meaning: "isolating a sick person", example: { jp: "Isolasi untuk pasien baru itu ada di kamar yang jauh dari yang lain.", en: "Isolation for that new patient is in a room far from the others." }, accept: ["keeping a case away from others", "separation of the infected", "isolation"], drill: { jp: "Isolasi untuk pasien baru itu sudah siap", en: "Isolation for that new patient is ready" }, hint: "ee-soh-LAH-see. ⚠️ The pair with the card before it is worth learning as a pair, because Indonesian keeps them strictly apart: karantina is for someone who MIGHT be infected, isolasi is for someone who IS. Mixing them in a sentence about an outbreak reads as badly in Indonesian as in English." },
        { id: "id-u102l4-pandemi", type: "vocab", front: "pandemi", reading: "pandemi", meaning: "a pandemic", example: { jp: "Pandemi lalu mengubah cara sekolah bekerja di seluruh dunia.", en: "The last pandemic changed the way schools work all over the world." }, accept: ["a worldwide outbreak", "a disease across many countries", "a global epidemic"], drill: { jp: "Pandemi lalu mengubah cara sekolah bekerja", en: "The last pandemic changed the way schools work" }, hint: "pahn-DAY-mee, no final c. ⚠️ You already know wabah from u67, an outbreak, and the difference is only scale: a wabah can be one district, a pandemi crosses borders. Indonesian keeps both and will use wabah for the local story and pandemi for the world one, often in the same article." },
        { id: "id-u102l4-penularan", type: "vocab", front: "penularan", reading: "penularan", meaning: "the passing on of a disease", example: { jp: "Penularan penyakit itu lebih cepat di tempat yang ramai dan panas.", en: "Transmission of that disease is faster in crowded, hot places." }, accept: ["transmission", "infection spreading person to person", "contagion"], drill: { jp: "Penularan penyakit itu lebih cepat sekarang", en: "Transmission of that disease is faster now" }, hint: "puh-noo-LAH-ran. ⚠️ Built on the same root as menular, contagious, which you met in u45 — but menular is a PROPERTY of a disease and penularan is the EVENT of it moving. An outbreak report counts penularan; a textbook says a disease is menular. Memutus penularan, to break transmission, is the slogan you will see on posters." },
        { id: "id-u102l4-rujukan", type: "vocab", front: "rujukan", reading: "rujukan", meaning: "a referral upwards", example: { jp: "Dokter di klinik itu memberi rujukan ke rumah sakit yang lebih besar.", en: "The doctor at that clinic gave a referral to a bigger hospital." }, accept: ["a letter sending a patient on", "a transfer to a specialist", "a formal recommendation to go elsewhere"], drill: { jp: "Dokter itu memberi rujukan ke rumah sakit", en: "That doctor gives a referral to a hospital" }, hint: "roo-JOO-kan. ⚠️ It is the paper AND the system: Indonesia's health service is built in levels, and without a surat rujukan from the puskesmas your insurance will not pay for the hospital. So the word is bureaucratic machinery, not advice. In writing it also means a reference or a source you cite." },
      ],
    },
  ],
};
