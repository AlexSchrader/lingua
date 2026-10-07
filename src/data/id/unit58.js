// ID Unit 58 — Konsep, makna, dan pola ("Concept, meaning and pattern") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 1 (u51–u63). unit51.js's 12 B1 band conventions BIND this file.
// RETITLED (theme kept, sharpened) from "Abstract ideas".
//
// §A1. THE SLOT SURVIVES. A2 gave the learner the ABSTRACT NOUNS OF EVERYDAY
//      TALK — u26 `arti` `masalah` `hasil` `sebab` `akibat` `cara` `keadaan`
//      `bentuk` `isi`, u21 `ide` `pendapat` `maksud` `alasan`, u44 `teori`
//      `ilmu` `rumus`, u49 `jenis` `ciri` `mutu`. **It gave them nothing to
//      think ABOUT thinking with**: no concept, principle, assumption,
//      definition, essence, context, element, aspect, structure, framework,
//      system, pattern, basis, core, scope or logic. Every one of this unit's
//      24 fronts was measured free against all 1,200.
//
// §A2. WHY THIS UNIT IS WORTH ITS SLOT. It is the vocabulary of reading a
//      textbook, a policy paper or an argument — the words that let a learner
//      say *what kind of thing* a claim is, rather than only agree or disagree
//      with it. That is band convention B1 at its purest.
//
// §A3. SCOPE BOUNDARIES.
//      u26 (A1) owns `arti` (meaning) and `bentuk` (a form). This unit takes
//        `makna` and `wujud`, which are the abstract halves of those two pairs,
//        and the glosses are kept apart by hand — see §A5.
//      u44 (A2) owns `teori` `ilmu` `rumus` `percobaan`. No research word is
//        taken here.
//      u81 owns THE WRITTEN WORK (band convention B3.1): `karya` `naskah`
//        `paragraf` `kutipan` are u81's. This unit takes the LOGICAL furniture
//        of a text (`kerangka` `konteks` `pola`), never its physical parts.
//      ⚠️ **`kebebasan` is NOT taken here, although "freedom" is an abstract
//        idea and `core-inventory.mjs id` lists it as a hard gap.** It is taken
//        by **u61** (this block), where duty and right sit together. Flagged so
//        no later seat takes it twice.
//
// §A4. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (convention B5 / unit1 §3):
//      mewujudkan → wujud   `wujud` is carded in THIS unit (l2), both in l2.
//        Noun and the transitive verb. Drill-safe, measured: the nasal
//        assimilation means "mewujudkan" contains no whole-word "wujud".
//      dasar → dasar        root is the front. ⚠️ `mendasar` and `berdasarkan`
//        are NOT taught (`berdasarkan` is **u73's**, per band convention B3.10),
//        so this is the first card off the root and the later one must know it.
//      landasan → landas    root not taught, not carded.
//      acuan → acu          root not taught, not carded.
//      lingkup → lingkup    root is the front. ⚠️ `lingkungan` IS taught (u46,
//        "environment") and shares the root `lingkung`. Different words: a
//        surrounding place against an extent covered. Drill-safe — "lingkungan"
//        holds no whole-word "lingkup" and vice versa.
//      konsep · gagasan · prinsip · asumsi · definisi · abstrak · makna ·
//      hakikat · substansi · konteks · unsur · aspek · struktur · kerangka ·
//      sistem · pola · inti · logika — all roots, or loanwords.
//
// §A5. GLOSS TRAPS ROUTED AROUND (convention B8 — measured through the real
//      `normalizeMeaning`):
//      `teori` (u44) accepts **"a principle"** → `prinsip` is glossed "a guiding
//        rule one holds to".
//      `arti` (u26) accepts **"a definition"** → `definisi` is "a stated
//        definition", and `makna` is "significance" rather than "meaning".
//      `bentuk` (u26) accepts **"a form"** → `wujud` is "tangible form".
//      `ukuran` (u14) accepts **"a dimension"** → `dimensi` is NOT CARDED at
//        all (§A6); the slot went to `logika` instead.
//      `ide` (u21) IS **"an idea"** → `konsep` accepts "an idea worked out" and
//        `gagasan` "an idea advanced"; neither accepts bare "an idea".
//      `sifat` (u31) IS **"a nature"** → `hakikat` accepts "its true nature",
//        never bare "a nature".
//      `bagian` (u14) accepts **"a portion"** → `unsur` is "a constituent
//        element" and accepts "a component part".
//      `isi` (u26) IS **"contents"** → `substansi` accepts "real content",
//        never bare "content".
//
// §A6. ⛔ NOT CARDED, EACH WITH A REASON:
//      `dimensi` — gloss collision with `ukuran` (u14), per §A5. The honest
//        Indonesian for the figurative sense is `aspek`, which IS carded.
//      `kebebasan` — u61's, per §A3.
//      `perwujudan` — would be a THIRD front off `wujud`, which this unit
//        already carries twice. Named in `mewujudkan`'s hint.
//      `pokok` — too close to `inti`, carded in l4; `acuan` was taken instead
//        because a reference point is a genuinely different idea from a core.
//      `kaidah` — a canon of correct form. Real, but it needs a grammatical or
//        legal frame this unit does not have, and `aturan` (u32) plus `prinsip`
//        cover the ground a B1 learner needs. Deferred, left free.
//      `paradigma` · `wacana` · `ranah` — academic register; a learner meets
//        them in a thesis and nowhere else.
//      `nalar` · `penalaran` — `logika`, carded in l4, is the word a learner
//        will actually read; these two are its native twins.
//      `batasan` — collides on root with `perbatasan` (u47, "a border") and
//        `lingkup` already owns extent.
//      `menyeluruh` — se- form of taught `seluruh` (u27); grammar, not a word.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT58 = {
  id: "id-u58",
  lang: "id",
  title: "Konsep, makna, dan pola",
  order: 58,
  stage: "b1",
  lessons: [
    {
      id: "id-u58l1",
      unit: 58,
      lesson: 1,
      title: "Konsep dan gagasan",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say what kind of thing a claim is — a worked-out concept, a notion somebody advanced, a principle they hold to, an assumption they never checked, a stated definition, or something purely abstract.",
      items: [
        { id: "id-u58l1-konsep", type: "vocab", front: "konsep", reading: "konsep", meaning: "a concept", example: { jp: "Konsep itu susah tanpa satu contoh yang jelas.", en: "That concept is hard without one clear example." }, accept: ["an idea worked out", "a notion in the abstract", "a formulated idea"], drill: { jp: "Konsep baru itu belum jelas untuk kami", en: "That new concept is not yet clear to us" }, hint: "KOHN-sehp, both e short. ⚠️ Ide, which you know from u21, is any idea at all, including a passing one. A konsep has been WORKED OUT — defined, given parts, made usable — which is why a textbook has konsep dasar, basic concepts, and never ide dasar. Konsep also means a first draft in office Indonesian." },
        { id: "id-u58l1-gagasan", type: "vocab", front: "gagasan", reading: "gagasan", meaning: "a notion put forward", example: { jp: "Gagasan dari dosen muda itu menimbulkan banyak tanggapan.", en: "That young lecturer's notion gave rise to many responses." }, accept: ["a proposal of thought", "an idea advanced", "a thought offered"], drill: { jp: "Gagasan itu masih perlu rancangan yang jelas", en: "That notion still needs a clear draft" }, hint: "gah-GAH-san, hard g. ⚠️ A gagasan is an idea OFFERED to other people, so it belongs in a meeting or an article; an ide can stay in your head. Indonesian pairs it with menyampaikan, to convey, from u33: menyampaikan gagasan. Gagasan utama is the main idea of a text, which is the phrase in every reading exercise." },
        { id: "id-u58l1-prinsip", type: "vocab", front: "prinsip", reading: "prinsip", meaning: "a guiding rule one holds to", example: { jp: "Prinsip dia tidak berubah meskipun dia kehilangan pekerjaan.", en: "His guiding rule did not change even though he lost his job." }, accept: ["a tenet", "a rule of conduct held to", "a fundamental rule"], drill: { jp: "Prinsip itu menjadi dasar untuk semua aturan", en: "That principle becomes the basis for every rule" }, hint: "PREEN-seep. ⚠️ Teori, which you know from u44, explains how something WORKS; a prinsip says what should be DONE, and a person can have one. Pada prinsipnya, in principle, is the standard hedge before a yes with conditions, and orang berprinsip is a person of principle." },
        { id: "id-u58l1-asumsi", type: "vocab", front: "asumsi", reading: "asumsi", meaning: "an assumption", example: { jp: "Asumsi pertama dari laporan itu ternyata keliru.", en: "The first assumption in that report turned out to be mistaken." }, accept: ["what is taken for granted", "a premise assumed", "something assumed without proof"], drill: { jp: "Asumsi itu belum jelas sama sekali", en: "That assumption is not clear at all" }, hint: "ah-SOOM-see. ⚠️ A dugaan, which you learned in u54, is an inference you are willing to defend. An asumsi is something you did not even notice you believed, which is why it is the dangerous one: asumsi yang salah, a wrong assumption. Berasumsi is the verb, to assume." },
        { id: "id-u58l1-definisi", type: "vocab", front: "definisi", reading: "definisi", meaning: "a stated definition", example: { jp: "Definisi dari istilah itu ada di halaman pertama kamus.", en: "The definition of that term is on the first page of the dictionary." }, accept: ["a formal statement of meaning", "how a term is defined", "the wording that fixes a term"], drill: { jp: "Definisi itu terlalu panjang untuk pelajar baru", en: "That definition is too long for a new pupil" }, hint: "deh-fee-NEE-see, four syllables. ⚠️ Arti, which you know from u26, is what a word MEANS, and you can ask for it in any conversation. A definisi is the meaning FIXED IN WORDS by somebody with the authority to fix it — a dictionary, a law, a textbook. Mendefinisikan is the verb." },
        { id: "id-u58l1-abstrak", type: "vocab", front: "abstrak", reading: "abstrak", meaning: "abstract", example: { jp: "Konsep itu terlalu abstrak dan perlu contoh yang nyata.", en: "That concept is too abstract and needs a real example." }, accept: ["not concrete", "existing only as an idea", "away from the particular"], drill: { jp: "Lukisan abstrak itu tidak mudah untuk kami", en: "That abstract painting is not easy for us" }, hint: "AHB-strahk. ⚠️ Nyata, which you know from u49, is its exact opposite and you should learn them as a pair: abstrak against nyata, abstract against real. The word also has the academic sense of a summary at the head of a paper, which is a noun and is spelled the same." },
      ],
    },
    {
      id: "id-u58l2",
      unit: 58,
      lesson: 2,
      title: "Makna dan hakikat",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Get at what something really is — its significance, its essence, the tangible form it takes, the act of making it real, its actual substance, and the context that gives it sense.",
      items: [
        { id: "id-u58l2-makna", type: "vocab", front: "makna", reading: "makna", meaning: "significance", example: { jp: "Makna dari upacara itu lebih dalam daripada bentuk luar.", en: "The significance of that ceremony is deeper than its outward form." }, accept: ["what it signifies", "the deeper sense of it", "import"], drill: { jp: "Makna lagu itu jelas untuk semua penonton", en: "The significance of that song is clear to every viewer" }, hint: "MAHK-na. ⚠️ Arti, which you know from u26, is what a WORD means and is the everyday one. Makna is what a thing SIGNIFIES — a ceremony, a gesture, a life — and it carries weight: hidup yang bermakna, a meaningful life. Ask arti kata ini, never makna kata ini, unless you are writing about poetry." },
        { id: "id-u58l2-hakikat", type: "vocab", front: "hakikat", reading: "hakikat", meaning: "the essence", example: { jp: "Hakikat dari masalah itu bukan uang tetapi sikap.", en: "The essence of that problem is not money but attitude." }, accept: ["what a thing really is", "its true nature", "the real point of it"], drill: { jp: "Hakikat aturan itu untuk menjaga warga", en: "The essence of that rule is to protect citizens" }, hint: "hah-kee-KAHT. ⚠️ Sifat, which you know from u31, is a NATURE as a set of traits you could list. A hakikat is the one thing without which it would not be that thing at all, which is why the word is at home in philosophy and religion. Pada hakikatnya, in essence, is how an argument is summed up." },
        { id: "id-u58l2-wujud", type: "vocab", front: "wujud", reading: "wujud", meaning: "tangible form", example: { jp: "Dukungan itu belum punya wujud selain surat resmi.", en: "That backing has no tangible form yet other than an official letter." }, accept: ["the shape it takes in reality", "a concrete form", "physical existence"], drill: { jp: "Wujud dari rancangan itu sudah ada", en: "The tangible form of that draft already exists" }, hint: "WOO-jood. ⚠️ Bentuk, which you know from u26, is a SHAPE you can see — round, square, the shape of a letter. A wujud is the fact of having a physical form at all, as against being only an idea: berwujud means to exist in concrete form, and tidak berwujud is intangible. The verb is the next card." },
        { id: "id-u58l2-mewujudkan", type: "vocab", front: "mewujudkan", reading: "mewujudkan", meaning: "to make real", example: { jp: "Lembaga itu mewujudkan gagasan lama dari penulis itu.", en: "That institution made the writer's old notion real." }, accept: ["to bring into being", "to realise a plan", "to give concrete form to"], drill: { jp: "Mereka mewujudkan rancangan itu tahun ini", en: "They are making that draft real this year" }, hint: "muh-woo-jood-KAHN. The verb off the card before it. ⚠️ Melaksanakan, which you learned in u56, is to carry out a plan that already exists in detail. Mewujudkan is to turn a hope or an idea into a THING, and it is the word every politician uses: mewujudkan janji, to deliver on a promise. Perwujudan is the noun and is not taught separately." },
        { id: "id-u58l2-substansi", type: "vocab", front: "substansi", reading: "substansi", meaning: "substance", example: { jp: "Tanggapan itu panjang tetapi tanpa substansi sama sekali.", en: "That response was long but with no substance at all." }, accept: ["the solid content of it", "what there actually is in it", "real content"], drill: { jp: "Substansi dari laporan itu sangat kurang", en: "The substance of that report is very thin" }, hint: "soob-STAHN-see. ⚠️ Isi, which you know from u26, is the CONTENTS of a container or a text, measured by volume. Substansi is content that MATTERS, and the word is nearly always used in the negative to complain: tanpa substansi, without substance. It is also the chemistry word for a substance." },
        { id: "id-u58l2-konteks", type: "vocab", front: "konteks", reading: "konteks", meaning: "a context", example: { jp: "Tanpa konteks kalimat itu bisa menimbulkan salah paham.", en: "Without context that sentence can give rise to a misunderstanding." }, accept: ["the surrounding circumstances", "the setting that gives it sense", "what it sits within"], drill: { jp: "Konteks dari kalimat itu sangat penting", en: "The context of that sentence is very important" }, hint: "KOHN-tehks. ⚠️ Keadaan, which you know from u26, is the state of affairs in general. A konteks is what SURROUNDS a particular statement and decides what it means — which is why dalam konteks ini, in this context, is the phrase a careful speaker uses before narrowing a claim. Di luar konteks means out of context." },
      ],
    },
    {
      id: "id-u58l3",
      unit: 58,
      lesson: 3,
      title: "Unsur, aspek, dan pola",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Take a whole apart — name a constituent element, one aspect of it, its structure, the framework holding it up, the system it belongs to, and the pattern it repeats.",
      items: [
        { id: "id-u58l3-unsur", type: "vocab", front: "unsur", reading: "unsur", meaning: "a constituent element", example: { jp: "Ada unsur budaya lama di dalam lagu baru itu.", en: "There is an element of old culture inside that new song." }, accept: ["an element of a whole", "one ingredient of it", "a component part"], drill: { jp: "Unsur itu sudah hilang dari resep lama", en: "That element has gone from the old recipe" }, hint: "OON-soor. ⚠️ Bagian, which you know from u14, is a PIECE of something — you could point at it. An unsur is a constituent that may be mixed in and invisible: unsur budaya, unsur kimia, the chemical element. Bahan, which you know from u34, is a material you add; an unsur may simply be present." },
        { id: "id-u58l3-aspek", type: "vocab", front: "aspek", reading: "aspek", meaning: "an aspect", example: { jp: "Aspek biaya dari rencana itu belum dia pikir sama sekali.", en: "He has not thought about the cost aspect of that plan at all." }, accept: ["one side of a matter", "a facet", "one angle of it"], drill: { jp: "Aspek itu paling penting untuk pengelolaan air", en: "That aspect is most important for water management" }, hint: "AHS-pehk. ⚠️ An unsur is a PART OF THE THING; an aspek is a part of HOW YOU LOOK at the thing, which is why you can list aspects forever. Dari aspek hukum, from a legal aspect, is the standard way to narrow a discussion, and it pairs with sudut pandang, which you learned in u51." },
        { id: "id-u58l3-struktur", type: "vocab", front: "struktur", reading: "struktur", meaning: "a structure", example: { jp: "Struktur dari kalimat itu susah untuk pelajar baru.", en: "The structure of that sentence is hard for a new pupil." }, accept: ["how it is put together", "the arrangement of parts", "its make-up"], drill: { jp: "Struktur lembaga itu sudah berubah tahun lalu", en: "The structure of that institution changed last year" }, hint: "STROOK-toor. ⚠️ Bentuk is the OUTLINE you see from outside; struktur is how the inside is arranged, and the word is as happy with a sentence or an organisation as with a building. Terstruktur means well-structured, and it is high praise for a piece of work in Indonesian." },
        { id: "id-u58l3-kerangka", type: "vocab", front: "kerangka", reading: "kerangka", meaning: "a framework", example: { jp: "Kerangka untuk laporan itu sudah siap sebelum rapat.", en: "The framework for that report was ready before the meeting." }, accept: ["the skeleton of it", "an outline frame", "the supporting frame"], drill: { jp: "Kerangka rancangan itu masih terlalu kosong", en: "The framework of that draft is still too empty" }, hint: "kuh-RAHNG-ka, hard g inside the hum. First a literal skeleton — of a body, a building, an umbrella — and then the obvious figure: kerangka karangan is the outline of an essay, which is what every Indonesian pupil is taught to write first. ⚠️ A struktur is finished; a kerangka is waiting to be filled in." },
        { id: "id-u58l3-sistem", type: "vocab", front: "sistem", reading: "sistem", meaning: "a system", example: { jp: "Sistem baru di sekolah itu memakai komputer untuk semua nilai.", en: "The new system at that school uses computers for all the marks." }, accept: ["a set of parts working together", "an ordered whole", "a scheme of working"], drill: { jp: "Sistem itu sudah berfungsi sejak bulan lalu", en: "That system has been working since last month" }, hint: "SEES-tehm. ⚠️ Note the Indonesian spelling: sistem, with no final e, and the adjective is sistematis, which you learned in u56. A struktur is how parts are ARRANGED; a sistem is how they WORK TOGETHER, so a building has a structure and a drain has a system." },
        { id: "id-u58l3-pola", type: "vocab", front: "pola", reading: "pola", meaning: "a pattern", example: { jp: "Ada pola yang jelas di antara semua kasus itu.", en: "There is a clear pattern among all those cases." }, accept: ["a recurring shape", "a regular arrangement", "a template"], drill: { jp: "Pola itu kembali setiap akhir bulan", en: "That pattern returns at the end of every month" }, hint: "POH-la. Two senses and both common: a REPEATING regularity — pola cuaca, pola makan, eating habits — and a physical TEMPLATE, the paper shape a tailor cuts around. ⚠️ Kebiasaan, which you know from u40, is one person's habit; a pola is a regularity anybody can observe from outside, including in data." },
      ],
    },
    {
      id: "id-u58l4",
      unit: 58,
      lesson: 4,
      title: "Dasar, inti, dan lingkup",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say where an argument stands and how far it reaches — name its basis, its foundation, its core, the reference point it is measured against, the scope it covers, and the logic holding it together.",
      items: [
        { id: "id-u58l4-dasar", type: "vocab", front: "dasar", reading: "dasar", meaning: "a basis", example: { jp: "Apa dasar untuk dugaan itu selain satu cerita?", en: "What is the basis for that supposition other than one story?" }, accept: ["the ground a thing rests on", "the base of it", "what it is founded on"], drill: { jp: "Dasar dari aturan itu adalah hukum lama", en: "The basis of that rule is the old law" }, hint: "DAH-sar. Three jobs and you will meet all three: the BOTTOM of a thing (dasar laut, the seabed), the BASIS of a claim, and as an adjective BASIC — sekolah dasar is primary school and konsep dasar is a basic concept. ⚠️ Berdasarkan, based on, comes off this root and is taught later in the formal-register unit." },
        { id: "id-u58l4-landasan", type: "vocab", front: "landasan", reading: "landasan", meaning: "a foundation", example: { jp: "Kesepakatan itu menjadi landasan untuk semua rencana berikut.", en: "That agreement became the foundation for all later plans." }, accept: ["a platform to build on", "the footing", "what is laid down first"], drill: { jp: "Landasan untuk sistem itu sudah kuat", en: "The foundation for that system is already strong" }, hint: "lahn-DAH-san. ⚠️ A dasar is what a thing RESTS ON and may be found afterwards by looking down. A landasan is LAID DELIBERATELY so that something can be built on it, which is why it is also the word for a runway: landasan pesawat. Landasan hukum is the legal basis an action was prepared on." },
        { id: "id-u58l4-inti", type: "vocab", front: "inti", reading: "inti", meaning: "the core", example: { jp: "Inti dari cerita panjang itu hanya satu kalimat.", en: "The core of that long story is only one sentence." }, accept: ["the kernel", "the central part", "the nub of it"], drill: { jp: "Inti masalah itu bukan uang", en: "The core of that problem is not money" }, hint: "EEN-tee. The middle that everything else is wrapped around — of a fruit, an atom, a story. ⚠️ Hakikat in l2 is what a thing ESSENTIALLY IS; an inti is the most IMPORTANT part of what was said, so it is the word for getting to the point: pada intinya, essentially, and inti sari, the gist. Also the kernel of a nucleus in science." },
        { id: "id-u58l4-acuan", type: "vocab", front: "acuan", reading: "acuan", meaning: "a reference point", example: { jp: "Laporan tahun lalu menjadi acuan untuk semua perkiraan baru.", en: "Last year's report became the reference point for every new estimate." }, accept: ["a benchmark", "what one measures against", "a standard referred to"], drill: { jp: "Acuan itu sudah terlalu lama untuk kami", en: "That reference point is too old for us" }, hint: "ah-CHOO-an — c is CH. ⚠️ Taraf, which you learned in u53, is a standard somebody REACHED. An acuan is a standard you MEASURE AGAINST — a baseline, a benchmark, a reference work. Harga acuan is a reference price set by government, and it is in the news whenever rice or fuel is discussed." },
        { id: "id-u58l4-lingkup", type: "vocab", front: "lingkup", reading: "lingkup", meaning: "scope", example: { jp: "Lingkup dari proyek itu terlalu besar untuk satu tim.", en: "The scope of that project is too big for one team." }, accept: ["the extent covered", "how far it reaches", "the range it takes in"], drill: { jp: "Lingkup aturan itu hanya untuk pegawai resmi", en: "The scope of that rule is only for official staff" }, hint: "LEENG-koop. ⚠️ It shares a root with lingkungan, environment, which you know from u46 — a lingkungan is the surroundings you are IN, a lingkup is how far a thing REACHES. Ruang lingkup is the fuller phrase and is the heading on the first page of any Indonesian proposal. Di luar lingkup means outside the scope." },
        { id: "id-u58l4-logika", type: "vocab", front: "logika", reading: "logika", meaning: "logic", example: { jp: "Logika dari sanggahan itu tidak kuat meskipun fakta benar.", en: "The logic of that counter-argument is not strong even though the facts are right." }, accept: ["reasoning as a system", "the rules of valid reasoning", "sound reasoning"], drill: { jp: "Logika dalam laporan itu susah untuk kami", en: "The logic in that report is hard for us" }, hint: "loh-GEE-ka, hard g. ⚠️ Alasan, which you know from u21, is ONE reason somebody gave. Logika is whether the reasons HANG TOGETHER, which is a separate question — an argument can have true facts and bad logika, which is exactly what the example says. Logis is the adjective, logical; nalar is the native twin and is not taught." },
      ],
    },
  ],
};
