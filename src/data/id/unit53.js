// ID Unit 53 — Semakin, setara, dan taraf ("Trend, parity and degree") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 1 (u51–u63). unit51.js's 12 B1 band conventions BIND this file.
// RETITLED AND NARROWED from "Comparison and degree".
//
// §A1. WHY THE TITLE CHANGED. "Comparison and degree" stands on **12 already-
//      taught words**, and u14 is an entire A1 unit of exactly this: `lebih`
//      `daripada` `kurang` `terlalu` `agak` `seperti` `paling`, plus u30's
//      `terbaik` `membandingkan` `perbedaan` `tingkat` `seimbang`. A learner at
//      u53 can already say bigger, less, too much, rather, the most, and the
//      superlative ter- forms.
//      **What is missing is the language of TREND, PARITY and MEASURED DEGREE** —
//      increasingly, to tend to, a tendency, to exceed, on a par, proportionate,
//      a ratio, a tier of standing, a concentration, a peak, absolute, a
//      disparity, lopsided, evenly spread. None exists in 1,200 words, and these
//      are what a B1 learner needs to read a chart, a price report or a
//      statistic rather than compare two cats.
//
// §A2. SCOPE BOUNDARY WITH u14 AND u30 (A1/A2). u14 owns the COMPARATIVE GRAMMAR
//      (`lebih … daripada`, `paling`, `terlalu`, `kurang`) and u30 owns the
//      SUPERLATIVE FORMS and the shape adjectives. **This unit takes no second
//      comparative particle and no shape word.** It takes the abstractions ABOUT
//      comparison, which is the B1 move: naming a trend instead of performing
//      one.
//      Boundary with u59 (this block): **u59 owns CHANGE THROUGH TIME** (to
//      develop, to climb, to fall away, an era, a generation); u53 owns DEGREE AT
//      A MOMENT. `semakin` sits on that line and is taken HERE because it is a
//      degree particle that happens to be used of change, not a word for change —
//      `semakin` modifies an adjective, never a clock. Flagged as adjacent.
//      Boundary with u40 (A2): u40 owns `menghitung` `mengukur` `menimbang`
//      `persen` `bertambah` `berkurang`. No measuring verb is taken here.
//
// §A3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (convention B5 / unit1 §3):
//      kecenderungan → cenderung   `cenderung` is carded in THIS unit (l1), both
//        in l1. Verb and the noun off it. Drill-safe, measured: "kecenderungan"
//        holds "cenderung" at index 2, preceded by `e`, so findWholeWord matches
//        in neither direction.
//      melebihi → lebih       ⚠️ `lebih` IS taught (u14, "more"). Exceeding a
//        figure is a transitive verb; more is a particle. Drill-safe: "melebihi"
//        holds "lebih" at index 2, preceded by `e`.
//      berlebihan → lebih     ⚠️ Same root again, so with `melebihi` that is
//        three cards in the family. B5/§3 permits it where each is a different
//        word, and more / to exceed / excessive are three. The two new ones sit
//        in ONE lesson (l1); drill-safe both ways ("berlebihan" holds "lebih" at
//        index 3, preceded by `r`, and holds "melebihi" nowhere).
//      menyamai → sama        ⚠️ `sama` IS taught (u12, "the same") and
//        `sama-sama` (u2) and `bersama` (u4) are also taught. Drill-safe: the
//        nasal assimilation means "menyamai" contains no whole-word "sama" at
//        all.
//      perbandingan → membandingkan  ⚠️ `membandingkan` IS taught (u30, "to
//        compare"). The noun off the same root `banding`, which is taught
//        nowhere as a front. Drill-safe in both directions.
//      merata → rata-rata     ⚠️ `rata-rata` IS taught (u27, "on average").
//        Evenly spread and an average are different words and the hint says so.
//        Drill-safe: "merata" holds no whole-word "rata-rata".
//      tergolong → golong     root not taught, not carded. ⚠️ **This is NOT the
//        ter- superlative** you met in u30 (`terbaik`, `tertua`) — it is the ter-
//        of state, the one u49 flagged on `terbukti`. Named in the hint.
//      setara → tara          root not taught, not carded.
//      sebanding → banding    see `perbandingan` above; the root is untaught.
//      sepadan → padan        root not taught, not carded.
//      semakin · kadar · taraf · puncak · mutlak · rasio · relatif · drastis ·
//      minimal · maksimal · nyaris · timpang · kesenjangan — roots untaught, or
//      loanwords. ⚠️ `kesenjangan` is ke-...-an off `senjang`, which is untaught
//      and is **not** `senjata` (u50, "a weapon") — do not write around it.
//
// §A4. GLOSS TRAPS ROUTED AROUND (convention B8 — measured through the real
//      `normalizeMeaning`):
//      `tingkat` (u30) IS **"a level"** → `taraf` is glossed "a standard
//        reached", and no card here accepts bare "a level".
//      `gunung` (u19) accepts **"a peak"** → `puncak` is "the highest point".
//      `cocok` (u14) accepts **"to match"** → `menyamai` is "to draw level with"
//        and `sebanding` accepts "matching in scale", never bare "to match".
//      `jarak` (u14) accepts **"a gap"** → `kesenjangan` is "a disparity" and
//        accepts "a gulf between them".
//      `mutu` (u49) IS **"quality"** → `taraf` and `kadar` both route around it.
//      `hampir` (u13) IS **"almost"** → `nyaris` is "all but" and accepts "very
//        nearly", never bare "almost".
//      `setidaknya` (u28) IS **"at least"** → `minimal` is "at the very least"
//        and accepts "at a minimum".
//      `agak` (u14) IS **"rather"** → `relatif` accepts "comparatively", never
//        bare "rather".
//      `rata-rata` (u27) IS **"on average"** → `merata` is "evenly spread".
//      `jenis` (u49) IS **"a category"** → `tergolong` accepts "to fall into the
//        category of", never bare "a category".
//
// §A5. ONE SAME-LESSON COMPONENT PAIR IS DELIBERATE AND MEASURED SAFE:
//      `cenderung`/`kecenderungan` (l1). A verb and its noun are different parts
//      of speech, the letter before the shared string is a letter, and
//      `findWholeWord` fails both ways.
//
// §A6. ⛔ NOT CARDED, EACH WITH A REASON:
//      `makin` · `kian` — both the same word as `semakin`, carded in l1, minus
//        or plus an affix; register variants of one lexeme (unit1 §3's ❌ list).
//        Both named in `semakin`'s hint.
//      `selisih` — carding it would be a THIRD front off a root already carrying
//        `berselisih` and `perselisihan` (u51, this block), for a meaning
//        (the arithmetic difference) that `perbedaan` (u30) already covers.
//      `seimbang` — TAKEN (u30). `timpang` is carded as its opposite instead.
//      `setinggi` · `semurah` · `sedikitnya` · `cukupan` — all se- forms of
//        taught adjectives; the se- comparative is grammar, and u14 owns it.
//      `signifikan` — a loan that no Indonesian speaker uses outside a research
//        paper; `drastis` and `jelas` (u33) do the real work.
//      `sedemikian` — a formal connective, and u73 owns the formal register.
//      `amat` · `teramat` — straight synonyms of `sangat` (u3) and `sekali` (u2).
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT53 = {
  id: "id-u53",
  lang: "id",
  title: "Semakin, setara, dan taraf",
  order: 53,
  stage: "b1",
  lessons: [
    {
      id: "id-u53l1",
      unit: 53,
      lesson: 1,
      title: "Semakin dan cenderung",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Describe a direction rather than a value — say a thing is increasingly so, that it tends one way, name the tendency, say it exceeded a figure, and call an amount excessive.",
      items: [
        { id: "id-u53l1-semakin", type: "vocab", front: "semakin", reading: "semakin", meaning: "increasingly", example: { jp: "Harga sayur di pasar semakin mahal sejak musim kering itu.", en: "The price of vegetables at the market is increasingly expensive since that dry season." }, accept: ["more and more", "progressively", "by degrees"], drill: { jp: "Jalan itu semakin ramai setiap pagi", en: "That road is increasingly busy every morning" }, hint: "suh-MAH-keen. ⚠️ Lebih, which you know from u14, compares two things at one moment; semakin says one thing is MOVING along a scale. The doubled pattern is extremely common and worth learning whole: semakin banyak orang, semakin susah, the more people the harder it gets. Makin and kian are the same word shorter and more literary, so they are not taught separately." },
        { id: "id-u53l1-cenderung", type: "vocab", front: "cenderung", reading: "cenderung", meaning: "to tend to", example: { jp: "Pembeli muda cenderung membeli barang yang lebih murah.", en: "Young buyers tend to buy cheaper goods." }, accept: ["to be inclined to", "to lean towards", "to be apt to"], drill: { jp: "Dia cenderung diam di dalam rapat", en: "He tends to stay quiet in a meeting" }, hint: "chuhn-DUH-roong — c is CH. It states what usually happens without claiming it always does, which is exactly the hedge a B1 speaker needs. ⚠️ Biasanya, which you know from u15, reports a habit; cenderung reports a LEANING, and so it is the honest word when you have noticed a pattern but not counted it." },
        { id: "id-u53l1-kecenderungan", type: "vocab", front: "kecenderungan", reading: "kecenderungan", meaning: "a tendency", example: { jp: "Ada kecenderungan baru di antara pelanggan kami tahun ini.", en: "There is a new tendency among our customers this year." }, accept: ["an inclination", "a leaning", "a trend"], drill: { jp: "Kecenderungan itu sudah jelas di laporan", en: "That tendency is already clear in the report" }, hint: "kuh-chuhn-duh-ROONG-an, six syllables. The ke-...-an noun off cenderung, the card before it. ⚠️ It is the word a report uses where English says trend, so you will meet it in the first line of any market or health summary. Kebiasaan, which you know from u40, is one person's habit; a kecenderungan belongs to a whole group." },
        { id: "id-u53l1-melebihi", type: "vocab", front: "melebihi", reading: "melebihi", meaning: "to exceed", example: { jp: "Biaya proyek itu sudah melebihi anggaran dari perusahaan.", en: "The cost of that project has already exceeded the company's budget." }, accept: ["to go beyond", "to overtake a figure", "to be more than"], drill: { jp: "Jumlah peserta melebihi dua ratus orang", en: "The number of participants exceeds two hundred people" }, hint: "muh-luh-BEE-hee. ⚠️ Built on lebih, more, which you know — but it is a VERB with an object, and that is the whole difference: lebih mahal is more expensive, melebihi harga is to exceed the price. Indonesian uses it for limits of every kind: melebihi batas, melebihi harapan." },
        { id: "id-u53l1-berlebihan", type: "vocab", front: "berlebihan", reading: "berlebihan", meaning: "excessive", example: { jp: "Garam di dalam sayur itu berlebihan dan rasa jadi asin sekali.", en: "The salt in that vegetable dish is excessive and the taste became very salty." }, accept: ["over the top", "more than is needed", "overdone"], drill: { jp: "Hiburan di pesta itu berlebihan", en: "The entertainment at that party is excessive" }, hint: "buhr-luh-BEE-han. The third word in the course off lebih, and the only one that is a judgement: terlalu, which you know, simply says too much, while berlebihan says SOMEBODY OVERDID IT. So terlalu panas is too hot and reaksi berlebihan is an overreaction." },
        { id: "id-u53l1-nyaris", type: "vocab", front: "nyaris", reading: "nyaris", meaning: "all but", example: { jp: "Mobil itu nyaris menabrak sepeda di persimpangan tadi.", en: "That car all but hit a bicycle at the junction just now." }, accept: ["by a hair", "narrowly", "very nearly"], drill: { jp: "Kami nyaris terlambat ke stasiun", en: "We very nearly got to the station late" }, hint: "NYAH-rees — ny is one sound. ⚠️ Hampir, which you know from u13, is a neutral almost and works for anything: hampir selesai. Nyaris is for the NEAR MISS, and it nearly always sits in front of something bad that did not happen: nyaris jatuh, nyaris mati. Using it of something good sounds wrong." },
      ],
    },
    {
      id: "id-u53l2",
      unit: 53,
      lesson: 2,
      title: "Setara dan sebanding",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say two things measure up — call them equal in standing, proportionate, worth each other, draw the comparison as a noun, and give the ratio between them.",
      items: [
        { id: "id-u53l2-setara", type: "vocab", front: "setara", reading: "setara", meaning: "on a par", example: { jp: "Ijazah dari sekolah itu setara dengan ijazah dari universitas negara.", en: "The diploma from that school is on a par with one from a state university." }, accept: ["of equal standing", "equivalent", "at the same level as"], drill: { jp: "Gaji di kantor baru setara dengan gaji lama", en: "The pay at the new office is on a par with the old pay" }, hint: "suh-TAH-ra. ⚠️ Sama, which you know from u12, means identical; setara means of EQUAL WORTH while being different things — a diploma and a certificate, two jobs, two currencies. It takes dengan for what it is on a par with. Setara is the word on every official document that recognises a foreign qualification." },
        { id: "id-u53l2-sebanding", type: "vocab", front: "sebanding", reading: "sebanding", meaning: "proportionate", example: { jp: "Gaji itu tidak sebanding dengan jumlah pekerjaan setiap hari.", en: "That pay is not proportionate to the amount of work every day." }, accept: ["in proportion", "comparable in size", "matching in scale"], drill: { jp: "Harga itu tidak sebanding dengan mutu barang", en: "That price is not proportionate to the quality of the goods" }, hint: "suh-bahn-DEENG. Off banding, the root inside membandingkan, to compare, which you know from u30. ⚠️ Setara is about equal STANDING; sebanding is about equal SCALE — so two very different things can be setara and still not sebanding. Tidak sebanding, out of proportion, is how it is used nine times in ten." },
        { id: "id-u53l2-sepadan", type: "vocab", front: "sepadan", reading: "sepadan", meaning: "commensurate", example: { jp: "Hasil dari percobaan itu sepadan dengan semua waktu dan biaya kami.", en: "The result of that experiment is commensurate with all our time and cost." }, accept: ["worth it in return", "a fair match for", "equal to what was given"], drill: { jp: "Hadiah itu sepadan dengan latihan dia", en: "That prize is commensurate with his training" }, hint: "suh-PAH-dan. It weighs what you GET against what you PUT IN, which neither setara nor sebanding does. ⚠️ So the natural English is worth it: sepadan dengan usaha, worth the effort. Tidak sepadan is the complaint you make when the reward does not justify the work." },
        { id: "id-u53l2-perbandingan", type: "vocab", front: "perbandingan", reading: "perbandingan", meaning: "a comparison", example: { jp: "Perbandingan antara dua laporan itu menunjuk satu masalah besar.", en: "The comparison between those two reports points to one big problem." }, accept: ["a side-by-side look", "how two things measure up", "a contrast drawn"], drill: { jp: "Perbandingan harga itu ada di dalam berkas", en: "That price comparison is in the file" }, hint: "puhr-bahn-DEENG-an, five syllables. The noun off membandingkan, to compare, which you know from u30. ⚠️ Perbedaan, which you also know, is the DIFFERENCE you found; a perbandingan is the ACT of putting two things side by side, and it may find no difference at all. Sebagai perbandingan is the fixed phrase for by way of comparison." },
        { id: "id-u53l2-rasio", type: "vocab", front: "rasio", reading: "rasio", meaning: "a ratio", example: { jp: "Rasio antara guru dan pelajar di sekolah itu sangat rendah.", en: "The ratio between teachers and pupils at that school is very low." }, accept: ["a proportion between two numbers", "how many to how many", "a numerical relation"], drill: { jp: "Rasio itu belum sesuai dengan aturan", en: "That ratio does not yet meet the rule" }, hint: "RAH-see-oh. A loanword and the spelling is regular. ⚠️ To SAY a ratio out loud Indonesian uses banding — the root you have now met inside membandingkan and sebanding: satu banding tiga puluh, one to thirty. Rasio names the thing; banding joins the two numbers." },
        { id: "id-u53l2-menyamai", type: "vocab", front: "menyamai", reading: "menyamai", meaning: "to draw level with", example: { jp: "Pemain muda itu akhirnya menyamai hasil pelatih dia sendiri.", en: "That young player finally drew level with his own coach's result." }, accept: ["to equal", "to come up to the same", "to pull even with"], drill: { jp: "Hasil tahun ini menyamai hasil tahun lalu", en: "This year's result draws level with last year's" }, hint: "muh-nyah-MAH-ee — ny one sound, four syllables. Built on sama, the same, which you know from u12, and used mostly of records and scores. ⚠️ Mengalahkan, which you know from u41, is to BEAT; menyamai is to catch up to exactly. Cocok also means to match but in the sense of fitting, never of equalling a figure." },
      ],
    },
    {
      id: "id-u53l3",
      unit: 53,
      lesson: 3,
      title: "Taraf, kadar, dan puncak",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Put a number on a quality — name the standard reached, how much of a substance is present, the highest point, the floor and the ceiling, and call a claim absolute.",
      items: [
        { id: "id-u53l3-taraf", type: "vocab", front: "taraf", reading: "taraf", meaning: "a standard reached", example: { jp: "Taraf mutu barang di toko itu sudah naik sejak tahun lalu.", en: "The standard of quality of the goods in that shop has risen since last year." }, accept: ["a tier", "the level of quality attained", "a grade of standing"], drill: { jp: "Taraf mutu barang itu lebih tinggi", en: "The standard of quality of those goods is higher" }, hint: "TAH-rahf. ⚠️ Tingkat, which you know from u30, is a level on any scale, including the floor of a building. Taraf is specifically a standard REACHED, and it almost always carries a judgement: taraf hidup, standard of living, is the phrase you will meet first and most. Bertaraf internasional means of international standard." },
        { id: "id-u53l3-kadar", type: "vocab", front: "kadar", reading: "kadar", meaning: "the degree of something present", example: { jp: "Kadar gula di dalam darah dia terlalu tinggi menurut dokter.", en: "The degree of sugar in his blood is too high according to the doctor." }, accept: ["content", "how much of it there is", "a concentration"], drill: { jp: "Kadar garam di air laut sangat tinggi", en: "The salt content in sea water is very high" }, hint: "KAH-dar. How much of a substance is IN something, which is a different question from how much of it there is in total. ⚠️ Jumlah, which you know from u14, counts the whole amount; kadar gives the proportion inside a mixture. Kadar gula and kadar air are the two you will read on any label or test result." },
        { id: "id-u53l3-puncak", type: "vocab", front: "puncak", reading: "puncak", meaning: "the highest point", example: { jp: "Puncak gunung itu masih dingin meskipun matahari sudah terang.", en: "The highest point of that mountain is still cold even though the sun is already bright." }, accept: ["the summit", "the top of it", "the climax"], drill: { jp: "Puncak acara itu pada malam terakhir", en: "The high point of that event is on the last night" }, hint: "POON-chahk — c is CH. First the real summit of a mountain, then time: puncak acara is the climax of an event and jam puncak is rush hour. ⚠️ Atas, which you know from u36, is simply the upper part; a puncak is the single highest POINT, so a building has an atas and a mountain has a puncak." },
        { id: "id-u53l3-minimal", type: "vocab", front: "minimal", reading: "minimal", meaning: "at the very least", example: { jp: "Untuk pekerjaan itu Anda perlu minimal dua tahun pengalaman.", en: "For that job you need at the very least two years of experience." }, accept: ["at a minimum", "the lowest acceptable", "no less than"], drill: { jp: "Kami perlu minimal lima orang untuk tim", en: "We need at least five people for the team" }, hint: "mee-nee-MAHL. ⚠️ Setidaknya, which you know from u28, is a softener that means at least I can say this much. Minimal is a NUMBER: it marks the floor of a requirement, and it is what every Indonesian job advert and form uses. It stands in front of the figure, never after it." },
        { id: "id-u53l3-maksimal", type: "vocab", front: "maksimal", reading: "maksimal", meaning: "at most", example: { jp: "Kamar itu maksimal untuk empat orang menurut aturan baru.", en: "That room is for at most four people according to the new rule." }, accept: ["at a maximum", "the highest allowed", "no more than"], drill: { jp: "Berat koper maksimal dua puluh kilo", en: "The suitcase weight is at most twenty kilos" }, hint: "mahk-see-MAHL. The exact partner of minimal, the card before it, and it sits in the same place in the sentence. ⚠️ Paling banyak also means at most and is the everyday spoken version; maksimal is what is printed on the sign. Both are worth knowing because you will hear one and read the other." },
        { id: "id-u53l3-mutlak", type: "vocab", front: "mutlak", reading: "mutlak", meaning: "absolute", example: { jp: "Aturan itu mutlak dan tidak ada kecuali untuk anggota baru.", en: "That rule is absolute and there is no exception for new members." }, accept: ["with no exception", "total and unqualified", "outright"], drill: { jp: "Hak itu bukan hak mutlak", en: "That right is not an absolute right" }, hint: "MOOT-lahk. It says a thing admits of no degree at all, which is why it is the natural opposite of everything else in this unit. ⚠️ Keep it apart from pasti, certain, which you know from u12: pasti is about your confidence, mutlak is about the thing itself. Kekuasaan mutlak is absolute power, and secara mutlak means outright." },
      ],
    },
    {
      id: "id-u53l4",
      unit: 53,
      lesson: 4,
      title: "Timpang dan merata",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Describe how something is distributed — hedge a figure as relative, say it is spread evenly or lopsided, name the gap, call a change drastic, and class a thing as belonging to a group.",
      items: [
        { id: "id-u53l4-relatif", type: "vocab", front: "relatif", reading: "relatif", meaning: "relatively", example: { jp: "Harga rumah di desa itu relatif murah untuk keluarga muda.", en: "House prices in that village are relatively cheap for a young family." }, accept: ["comparatively", "fairly, as these things go", "by comparison"], drill: { jp: "Cuaca bulan ini relatif kering", en: "The weather this month is relatively dry" }, hint: "reh-lah-TEEF, final f said as f. ⚠️ Agak, which you know from u14, is a feeling — rather cheap, to me. Relatif is an honest comparison against an unstated baseline: relatively cheap, that is, compared with the city. It is also an adjective on its own: itu relatif, that depends." },
        { id: "id-u53l4-merata", type: "vocab", front: "merata", reading: "merata", meaning: "evenly spread", example: { jp: "Hujan tahun ini tidak merata di seluruh pulau itu.", en: "This year's rain is not evenly spread across that whole island." }, accept: ["spread across the whole", "uniform throughout", "even everywhere"], drill: { jp: "Dukungan itu belum merata di setiap daerah", en: "That backing is not yet evenly spread in every district" }, hint: "muh-RAH-ta. Off rata, flat and level. ⚠️ Rata-rata, which you know from u27, is an AVERAGE — one number standing for many. Merata is about DISTRIBUTION — the same everywhere, with no part left out. A country can have a good average and very poor merata, which is exactly what the next two cards are for." },
        { id: "id-u53l4-timpang", type: "vocab", front: "timpang", reading: "timpang", meaning: "lopsided", example: { jp: "Hasil pemilu itu timpang karena banyak warga tidak ikut.", en: "The result of that election is lopsided because many citizens did not take part." }, accept: ["out of balance", "tilted to one side", "unequal"], drill: { jp: "Jumlah uang di antara mereka sangat timpang", en: "The amount of money between them is very lopsided" }, hint: "TEEM-pahng. First the body — a timpang leg is a limping one — and then anything unbalanced. ⚠️ Seimbang, which you know from u30, is its exact opposite and you should learn them as a pair. Timpang carries a complaint: it does not just describe an imbalance, it says the imbalance is wrong." },
        { id: "id-u53l4-kesenjangan", type: "vocab", front: "kesenjangan", reading: "kesenjangan", meaning: "a disparity", example: { jp: "Kesenjangan antara kota dan desa masih besar di negara itu.", en: "The disparity between city and village is still big in that country." }, accept: ["a gulf between them", "an inequality", "how far apart they are"], drill: { jp: "Kesenjangan gaji di perusahaan itu jelas", en: "The pay disparity at that company is clear" }, hint: "kuh-suhn-JAHNG-an, five syllables. ⚠️ Jarak, which you know from u14, is a physical distance; a kesenjangan is a distance in CONDITION — in income, in health, in schooling. It is the standard word in Indonesian policy writing: kesenjangan sosial, kesenjangan ekonomi. Note it has nothing to do with senjata, a weapon." },
        { id: "id-u53l4-drastis", type: "vocab", front: "drastis", reading: "drastis", meaning: "drastic", example: { jp: "Harga bensin naik drastis setelah berita dari pemerintah itu.", en: "The price of petrol rose drastically after that news from the government." }, accept: ["sharp and sudden", "sweeping", "severe in degree"], drill: { jp: "Jumlah penonton turun drastis bulan ini", en: "The number of viewers fell drastically this month" }, hint: "DRAHS-tees. ⚠️ Note Indonesian uses it as an ADVERB straight after the verb with no change of shape: naik drastis, turun drastis, berubah drastis. Tiba-tiba, which you know from u28, means suddenly and says nothing about size; drastis is about SIZE and says nothing about speed, though in practice the two go together." },
        { id: "id-u53l4-tergolong", type: "vocab", front: "tergolong", reading: "tergolong", meaning: "to be classed as", example: { jp: "Daerah itu tergolong aman meskipun sangat jauh dari kota.", en: "That district is classed as safe even though it is very far from the city." }, accept: ["to count as", "to fall into the category of", "to rank among"], drill: { jp: "Mutu barang itu tergolong baik", en: "The quality of those goods counts as good" }, hint: "tuhr-goh-LOHNG, hard g. ⚠️ HERE ter- DOES NOT MEAN MOST — this is the ter- of state, the same one you met in terkenal, famous, and terbukti, proven, in u49. Golong is a grouping, so tergolong is to fall within one. It is the hedge a careful writer uses instead of a flat adalah: tergolong mahal, on the expensive side." },
      ],
    },
  ],
};
