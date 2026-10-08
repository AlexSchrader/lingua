// ID Unit 95 — Bangsa dan masa lalunya ("The nation and its past") — B2
// B2 block 1 (u88–u100). CONVENTIONS: see unit88.js §C1–§C12 — binding here.
//
// §C-H1. NARROWED FROM "History and culture", WHICH IS TWO UNITS AND BOTH EXIST.
//        **u35 `Perayaan dan kepercayaan`** owns culture (`adat` `suku`
//        `budaya` `upacara` `zaman` `seni` `lukisan`) and **u47 `Negara dan
//        masyarakat`** owns the state (`bangsa` `merdeka` `pahlawan` `raja`
//        `asing` `warga`). Probed 24 candidates for the national past: **19
//        free of 24**, the five taken being `pahlawan`(u47),
//        `reformasi`(u74), `merdeka`(u47), `menjajah`(u75) and `bangsa`(u47).
//        **So this unit owns THE MODERN NATIONAL PAST only** — the independence
//        arc and its aftermath. It teaches no culture word and no state-
//        institution word.
//
// §C-H2. ⚠️ TWO BOUNDARIES, AND ONE OF THEM IS A LIVE CLASH I RESOLVED.
//        • **u75 `Perang dan perdamaian` (B1) OWNS COLONISATION AS AN ACT** —
//          `menjajah` and `penjajahan` are its fronts. **So this unit must not
//          teach a second colonising word**, and it does not: it takes the
//          ADJECTIVE `kolonial` and the oppression pair `menindas`/`penindasan`,
//          which u75 left alone. A seat that reaches for `penjajah` here is
//          re-teaching u75's lexeme under an agent suffix.
//        • **u125 `Masa purba dan penelusuran sejarah` (block 3, per the band
//          allocation) OWNS DEEP TIME AND ARCHAEOLOGY** — `purba` `prasejarah`
//          `peradaban` `artefak` `reruntuhan` `arkeologi` `candi` `menelusuri`
//          `peninggalan`. This unit stops at the modern era and deliberately
//          leaves all nine to u125.
//
// §C-H3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (C3/C4). Two families, the cap:
//        `kemerdekaan`←**merdeka (u47)** — KEPT: it names a historical EVENT and
//        a national condition, not the adjective, and it is the single most
//        load-bearing noun in Indonesian public life (Hari Kemerdekaan,
//        Proklamasi Kemerdekaan); the hint names the root ·
//        `persatuan`←**satu (u5)** — KEPT: no learner derives national unity
//        from "one", and the word is a clause of the national ideology ·
//        `berjuang`/`perjuangan`←juang (not taught), verb+noun pair, house style
//        · `memberontak`/`pemberontakan`←berontak (not taught), same ·
//        `menindas`/`penindasan`←tindas (not taught), same · `kebangkitan`←
//        bangkit (NOT a taught front; checked, not assumed) ·
//        `menggulingkan`←guling (not taught) · `berdaulat`/`kedaulatan`←daulat
//        (not taught) · `pergerakan`←gerak (not a taught front) · `pendiri`←diri
//        (not taught as a bare front) · `proklamasi` `kolonial` `pergolakan`
//        `nasionalisme` `tonggak` `orde` `piagam` `lambang` `semboyan`
//        `memperingati` — roots not taught.
//
// §C-H4. REFUSED HERE. `penjajah` and `jajahan` — both are u75's lexeme
//        (`menjajah`/`penjajahan`) wearing a different affix; see §C-H2.
//        `kebangsaan`←bangsa(u47) — a free-gift circumfix under C4, and
//        `nasionalisme` does the work better. `sumpah` — ceded to **u92**, which
//        needs it for the courtroom oath; this unit refers to Sumpah Pemuda in
//        a hint by name instead. `bersatu` — dropped so that `persatuan` is the
//        only card off `satu` in the unit.
export const ID_UNIT95 = {
  id: "id-u95",
  lang: "id",
  title: "Bangsa dan masa lalunya",
  order: 95,
  stage: "b2",
  lessons: [
    {
      id: "id-u95l1",
      unit: 95,
      lesson: 1,
      title: "Kemerdekaan dan perjuangan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about how a nation came to be — name independence itself, the declaration that announced it, the organised movement behind it, the struggle, say somebody struggled, and name a founder.",
      items: [
        { id: "id-u95l1-kemerdekaan", type: "vocab", front: "kemerdekaan", reading: "kemerdekaan", meaning: "a nation's independence", example: { jp: "Hari kemerdekaan diperingati setiap tahun di seluruh negara itu.", en: "Independence day is commemorated every year across that country." }, accept: ["national freedom from rule", "independence as an achieved state", "self-rule won"], drill: { jp: "Hari kemerdekaan diperingati setiap tahun", en: "Independence day is commemorated every year" }, hint: "kuh-muhr-deh-KAH-an, five syllables. ⚠️ Built on merdeka, free, which you know from u47 — and the noun is worth its own card because it names an EVENT and a national condition rather than a quality. Two phrases carry most of Indonesian public life: Hari Kemerdekaan, the 17th of August, and Proklamasi Kemerdekaan, which is the next card." },
        { id: "id-u95l1-proklamasi", type: "vocab", front: "proklamasi", reading: "proklamasi", meaning: "a formal public declaration", example: { jp: "Proklamasi itu dibaca di depan rumah kecil pada pagi hari.", en: "That declaration was read out in front of a small house in the morning." }, accept: ["a proclamation", "a declaration read publicly", "a formal announcement to a nation"], drill: { jp: "Proklamasi itu dibaca di depan rumah kecil", en: "That proclamation was read in front of a small house" }, hint: "proh-klah-MAH-see. ⚠️ Narrower than pengumuman, an announcement, which you know: a proklamasi is a single historic act with constitutional weight. In Indonesian it is effectively a proper noun — say Proklamasi and everybody understands the 17th of August 1945, read by Sukarno at Jalan Pegangsaan Timur 56 in Jakarta." },
        { id: "id-u95l1-pergerakan", type: "vocab", front: "pergerakan", reading: "pergerakan", meaning: "an organised political movement", example: { jp: "Pergerakan itu dimulai oleh mahasiswa dan guru di kota besar.", en: "That movement was begun by students and teachers in the big cities." }, accept: ["a political movement", "an organised campaign for change", "a mobilised cause"], drill: { jp: "Pergerakan itu dimulai oleh mahasiswa dan guru", en: "That movement was begun by students and teachers" }, hint: "puhr-guh-RAH-kan. ⚠️ Built on gerak, movement, but in this sense it is specifically political and specifically historical: Masa Pergerakan Nasional is the name Indonesian textbooks give the decades before 1945. For a protest happening today the word is gerakan, without the per-, so watch that one syllable." },
        { id: "id-u95l1-perjuangan", type: "vocab", front: "perjuangan", reading: "perjuangan", meaning: "a sustained struggle for something", example: { jp: "Perjuangan untuk kemerdekaan itu butuh waktu puluhan tahun.", en: "The struggle for that independence took decades." }, accept: ["a struggle carried on over time", "a fight for a cause", "sustained effort against resistance"], drill: { jp: "Perjuangan untuk kemerdekaan memakan puluhan tahun", en: "The struggle for independence took decades" }, hint: "puhr-joo-AHNG-an, four syllables. ⚠️ Not perang, war, which you know from u75: a perang is fought with weapons, a perjuangan may be political, legal or moral and need not be armed at all. It is also used warmly of private life — perjuangan seorang ibu, a mother's struggle — so the word is never only military." },
        { id: "id-u95l1-berjuang", type: "vocab", front: "berjuang", reading: "berjuang", meaning: "to struggle on for a cause", example: { jp: "Mereka berjuang selama bertahun-tahun tanpa dukungan dari luar.", en: "They struggled on for years without backing from outside." }, accept: ["to fight for a cause", "to persevere against odds", "to campaign doggedly"], drill: { jp: "Mereka berjuang selama bertahun-tahun tanpa dukungan", en: "They struggled for years without backing" }, hint: "buhr-JOO-ahng. The ber- verb beside the card before it. ⚠️ Keep it apart from berusaha, to try, which you have had since A2: berusaha is making an effort, berjuang implies something pushing back. It takes untuk for the cause — berjuang untuk keadilan — and berjuang melawan for the thing resisted." },
        { id: "id-u95l1-pendiri", type: "vocab", front: "pendiri", reading: "pendiri", meaning: "the person who founded something", example: { jp: "Pendiri lembaga itu sudah tua sekali sekarang.", en: "The founder of that institution is very old now." }, accept: ["a founder", "the one who established it", "an originator of an institution"], drill: { jp: "Pendiri lembaga itu sudah tua sekali", en: "That institution's founder is very old" }, hint: "puhn-DEE-ree. Built on berdiri, to stand, which you know — so a pendiri is one who made a thing STAND UP. ⚠️ You already met pendirian, a standpoint, in u51, and the two come from the same picture but are completely different words: a pendiri is a person, a pendirian is a position you will not be moved from. Bapak pendiri bangsa is the Indonesian for founding father." },
      ],
    },
    {
      id: "id-u95l2",
      unit: 95,
      lesson: 2,
      title: "Kolonial dan pemberontakan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe rule from outside and the revolt against it — say something is colonial, name a rebellion, say somebody rebelled, name systematic oppression, say one group oppresses another, and name a period of upheaval.",
      items: [
        { id: "id-u95l2-kolonial", type: "vocab", front: "kolonial", reading: "kolonial", meaning: "belonging to the era of rule from outside", example: { jp: "Gedung kolonial di kota tua itu masih dipakai sebagai kantor.", en: "The colonial building in that old town is still used as an office." }, accept: ["colonial", "dating from foreign rule", "of the colonising period"], drill: { jp: "Gedung kolonial di kota tua itu masih dipakai", en: "The colonial building in that old town is still used" }, hint: "koh-loh-nee-AHL, four syllables. ⚠️ An ADJECTIVE that follows its noun, as Indonesian adjectives do — gedung kolonial, masa kolonial, hukum kolonial. You already know menjajah and penjajahan from u75, which name the ACT; kolonial names the PERIOD and the things that survive from it, which is why you will read it most often attached to a building or a law." },
        { id: "id-u95l2-pemberontakan", type: "vocab", front: "pemberontakan", reading: "pemberontakan", meaning: "an armed rising against those in power", example: { jp: "Pemberontakan di pulau itu berhenti setelah dua tahun.", en: "The rising on that island stopped after two years." }, accept: ["a rebellion", "an uprising against authority", "a revolt"], drill: { jp: "Pemberontakan di pulau itu berhenti setelah dua tahun", en: "The rising on that island stopped after two years" }, hint: "puhm-buh-rohn-TAH-kan, five syllables. ⚠️ Keep it apart from protes, which you know from u74: a protest demands a change from within the system, a pemberontakan rejects the system's right to rule. Indonesian history has many named ones, and a textbook will usually write pemberontakan plus a place or a year." },
        { id: "id-u95l2-memberontak", type: "vocab", front: "memberontak", reading: "memberontak", meaning: "to rise up against those in charge", example: { jp: "Beberapa pasukan memberontak karena tidak menerima gaji selama berbulan-bulan.", en: "Several units rose up because they had not been paid for months." }, accept: ["to rebel", "to revolt against authority", "to mutiny"], drill: { jp: "Beberapa pasukan memberontak karena tidak menerima gaji", en: "Several units rebelled because they received no pay" }, hint: "muhm-buh-ROHN-tahk. The verb of the card before it. ⚠️ Note that it also works at domestic scale and keeps its force: anak yang memberontak is a child in open revolt against their parents, which is a stronger thing to say than nakal, naughty. The subject always has a superior it is refusing." },
        { id: "id-u95l2-penindasan", type: "vocab", front: "penindasan", reading: "penindasan", meaning: "systematic holding-down of a group", example: { jp: "Penindasan terhadap petani di daerah itu berjalan selama bertahun-tahun.", en: "The oppression of farmers in that region went on for years." }, accept: ["oppression", "sustained subjugation of a group", "systematic crushing"], drill: { jp: "Penindasan terhadap petani itu berjalan bertahun-tahun", en: "The oppression of those farmers went on for years" }, hint: "puh-neen-DAH-san. From tindas, to crush underfoot, and the image is exactly that — a weight held down over time. ⚠️ It takes terhadap for the group suffering it. In modern Indonesian it is also the standard word for BULLYING at school, so penindasan di sekolah is a live social issue and not a historical term at all." },
        { id: "id-u95l2-menindas", type: "vocab", front: "menindas", reading: "menindas", meaning: "to hold a group down by force", example: { jp: "Aturan kolonial itu menindas pedagang kecil di seluruh pulau.", en: "That colonial rule oppressed small traders across the whole island." }, accept: ["to oppress", "to keep down by force", "to subjugate"], drill: { jp: "Aturan kolonial itu menindas pedagang kecil", en: "That colonial rule oppresses small traders" }, hint: "muh-NEEN-dahs. The verb of the card before it. ⚠️ Its subject can be a person, a law or a system, which is what makes it useful: menindas does not require a bully in the room. Keep it apart from memaksa, to force, which you know — forcing gets one act out of somebody, menindas keeps them beneath you permanently." },
        { id: "id-u95l2-pergolakan", type: "vocab", front: "pergolakan", reading: "pergolakan", meaning: "a period when everything is in turmoil", example: { jp: "Pergolakan pada tahun itu membuat banyak keluarga pergi ke kota lain.", en: "The turmoil of that year made many families leave for other cities." }, accept: ["upheaval", "a time of unrest", "political turbulence"], drill: { jp: "Pergolakan pada tahun itu membuat keluarga pergi", en: "The turmoil of that year made families leave" }, hint: "puhr-goh-LAH-kan, hard g. From golak, to boil or churn — so a society boiling over. ⚠️ Broader than pemberontakan three cards back: a pemberontakan has a leader and a demand, a pergolakan is a whole period of instability with many causes at once. Masa pergolakan is how a historian names a decade nobody controlled." },
      ],
    },
    {
      id: "id-u95l3",
      unit: 95,
      lesson: 3,
      title: "Kebangkitan dan nasionalisme",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the ideas and turning points of a national story — nationalism itself, a landmark moment, an awakening, a named political era, overthrowing a government, and national unity.",
      items: [
        { id: "id-u95l3-nasionalisme", type: "vocab", front: "nasionalisme", reading: "nasionalisme", meaning: "the belief that one's nation comes first", example: { jp: "Nasionalisme di antara pelajar muda itu tumbuh melalui koran dan sekolah.", en: "Nationalism among those young students grew through newspapers and schools." }, accept: ["nationalism", "devotion to one's own nation", "national feeling as a doctrine"], drill: { jp: "Nasionalisme di antara pelajar muda itu tumbuh", en: "Nationalism among those young students grew" }, hint: "nah-see-oh-nah-LEES-muh, six syllables. ⚠️ Note that Indonesian uses it mostly POSITIVELY, unlike much English usage: in a country whose nationhood was itself the anti-colonial project, nasionalisme is close to patriotism rather than to chauvinism. The word for the ugly version is sempit, narrow, attached to it: nasionalisme sempit." },
        { id: "id-u95l3-tonggak", type: "vocab", front: "tonggak", reading: "tonggak", meaning: "a landmark event everything is dated from", example: { jp: "Tahun itu menjadi tonggak dalam sejarah bahasa Indonesia.", en: "That year became a landmark in the history of the Indonesian language." }, accept: ["a milestone", "a turning point in a history", "a marker event"], drill: { jp: "Tahun itu menjadi tonggak dalam sejarah bahasa", en: "That year became a landmark in the language's history" }, hint: "TOHNG-gahk, hard g. First a physical thing — a tonggak is a post driven into the ground — and then every figurative use. ⚠️ Keep it apart from u91's patokan, which is also a driven stake: a patokan is a reference you MEASURE from, a tonggak is a moment you DATE from. Tonggak sejarah is the fixed phrase." },
        { id: "id-u95l3-kebangkitan", type: "vocab", front: "kebangkitan", reading: "kebangkitan", meaning: "a people coming awake and into motion", example: { jp: "Kebangkitan itu dimulai di sekolah, bukan di kantor pemerintah.", en: "That awakening began in schools, not in government offices." }, accept: ["an awakening of a people", "a rising-up as a movement", "a national revival"], drill: { jp: "Kebangkitan itu dimulai di sekolah bukan di kantor", en: "That awakening began in schools not in offices" }, hint: "kuh-bahng-KEE-tan. From bangkit, to rise up, which is not itself a card in this course. ⚠️ Keep it apart from pergerakan in lesson 1: a pergerakan is organised, with committees and a newspaper, while a kebangkitan is the change of consciousness BEFORE the organising. Hari Kebangkitan Nasional, the 20th of May, marks exactly that." },
        { id: "id-u95l3-orde", type: "vocab", front: "orde", reading: "orde", meaning: "a named period of a political regime", example: { jp: "Banyak aturan dari orde itu baru diubah pada tahun yang lalu.", en: "Many rules from that regime period were only changed last year." }, accept: ["a political order", "a named regime era", "a period of governing"], drill: { jp: "Banyak aturan dari orde itu baru diubah", en: "Many rules from that order were only just changed" }, hint: "OHR-duh, from Dutch. ⚠️ You cannot read modern Indonesian history without it, because it is how the eras are named: Orde Lama, the Old Order, and Orde Baru, the New Order of 1966–1998, after which came the reformasi you know from u74. It is a count noun for a REGIME, never for tidiness — ordinary order is urutan or aturan." },
        { id: "id-u95l3-menggulingkan", type: "vocab", front: "menggulingkan", reading: "menggulingkan", meaning: "to bring down a government", example: { jp: "Pergolakan itu akhirnya menggulingkan pemerintah yang sudah lama berkuasa.", en: "That upheaval finally brought down the government that had long been in power." }, accept: ["to overthrow", "to topple a regime", "to oust those in power"], drill: { jp: "Pergolakan itu akhirnya menggulingkan pemerintah lama", en: "That upheaval finally toppled the old government" }, hint: "muhng-goo-leeng-KAHN, hard g twice. From guling, to roll over — so literally to roll a thing off its base. ⚠️ Keep it apart from mengganti, to replace: an election replaces a government, menggulingkan removes one that did not intend to go. The passive digulingkan is how most news sentences about it are built." },
        { id: "id-u95l3-persatuan", type: "vocab", front: "persatuan", reading: "persatuan", meaning: "a nation holding together as one", example: { jp: "Persatuan di negara dengan banyak suku itu tidak pernah mudah.", en: "Unity in a country with many ethnic groups has never been easy." }, accept: ["national unity", "holding together as one people", "cohesion of a nation"], drill: { jp: "Persatuan di negara dengan banyak suku tidak mudah", en: "Unity in a country with many ethnic groups is not easy" }, hint: "puhr-sah-TOO-an. ⚠️ Built on satu, one, which you have had since u5 — and no learner would derive this from it, which is why it is a card. It is a clause of the national ideology (Persatuan Indonesia) and the first half of the motto in the next lesson. Keep it apart from kesatuan, which means a single unified ENTITY rather than the holding-together." },
      ],
    },
    {
      id: "id-u95l4",
      unit: 95,
      lesson: 4,
      title: "Kedaulatan dan lambang",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about what a state claims and how it represents itself — sovereignty, say a state is sovereign, name a founding charter, name an emblem, name a national motto, and say a day is commemorated.",
      items: [
        { id: "id-u95l4-kedaulatan", type: "vocab", front: "kedaulatan", reading: "kedaulatan", meaning: "a state's right to rule itself", example: { jp: "Kedaulatan atas laut di sekitar pulau itu masih menjadi sengketa.", en: "Sovereignty over the sea around that island is still a dispute." }, accept: ["sovereignty", "supreme authority over a territory", "the right of final say in a state"], drill: { jp: "Kedaulatan atas laut itu masih menjadi sengketa", en: "Sovereignty over that sea is still a dispute" }, hint: "kuh-dow-LAH-tan. From daulat, a word of Arabic origin meaning sovereign power. ⚠️ Not the same as kemerdekaan in lesson 1: kemerdekaan is winning freedom FROM somebody, kedaulatan is the recognised right to decide, which a country can lose without being colonised. Kedaulatan rakyat, popular sovereignty, is the democratic version." },
        { id: "id-u95l4-berdaulat", type: "vocab", front: "berdaulat", reading: "berdaulat", meaning: "answering to no outside power", example: { jp: "Negara yang berdaulat bisa membuat perundangan sendiri tanpa izin.", en: "A sovereign state can make its own legislation without permission." }, accept: ["sovereign", "independent in its own right", "self-governing"], drill: { jp: "Negara yang berdaulat membuat perundangan sendiri", en: "A sovereign state makes its own legislation" }, hint: "buhr-DOW-laht. The ber- adjective beside the card before it. ⚠️ Nearly always attached to negara: negara berdaulat, a sovereign state. It also appears in the Indonesian constitution's own phrasing about the people, and in speeches as the triad berdaulat, mandiri dan bermartabat — sovereign, self-reliant and dignified." },
        { id: "id-u95l4-piagam", type: "vocab", front: "piagam", reading: "piagam", meaning: "a founding document setting out principles", example: { jp: "Piagam itu ditulis oleh sembilan orang sebelum proklamasi dibaca.", en: "That charter was written by nine people before the proclamation was read." }, accept: ["a charter", "a founding declaration of principles", "a solemn written compact"], drill: { jp: "Piagam itu ditulis oleh sembilan orang", en: "That charter was written by nine people" }, hint: "pee-AH-gahm. ⚠️ Two senses and both are common: the historic charter — Piagam Jakarta is a document every Indonesian schoolchild learns — and, much more everyday, a certificate of award. Piagam penghargaan is the framed certificate you get for winning something, so the word will reach you at a school prize-giving before it reaches you in a history book." },
        { id: "id-u95l4-lambang", type: "vocab", front: "lambang", reading: "lambang", meaning: "an emblem standing for something larger", example: { jp: "Burung di lambang negara itu memegang semboyan dengan kakinya.", en: "The bird on that national emblem holds the motto in its feet." }, accept: ["an emblem", "a symbol that represents", "a device standing for a nation"], drill: { jp: "Burung di lambang negara itu memegang semboyan", en: "The bird on that national emblem holds the motto" }, hint: "LAHM-bahng. ⚠️ Keep it apart from u90's kiasan and metafora, which are figures of SPEECH: a lambang is a visible thing — a bird, a flag, a colour — that stands for something. Lambang negara is a state emblem, and melambangkan means to symbolise. In chemistry and maths it is also the word for a notation symbol." },
        { id: "id-u95l4-semboyan", type: "vocab", front: "semboyan", reading: "semboyan", meaning: "a short phrase a group lives by", example: { jp: "Semboyan itu hanya tiga kata, tetapi semua pelajar bisa mengucapkannya.", en: "That motto is only three words, but every pupil can say it." }, accept: ["a motto", "a slogan held as a principle", "a rallying phrase"], drill: { jp: "Semboyan itu hanya tiga kata saja", en: "That motto is only three words" }, hint: "suhm-BOH-yan. ⚠️ Heavier than slogan, which Indonesian also borrows: a slogan sells something or wins an election, a semboyan is a principle a nation or a school holds to. Indonesia's own is Bhinneka Tunggal Ika, unity in diversity, written on the ribbon the bird in the previous card is holding — which is the theme u99 picks up." },
        { id: "id-u95l4-memperingati", type: "vocab", front: "memperingati", reading: "memperingati", meaning: "to mark a date in remembrance", example: { jp: "Sekolah itu memperingati hari kemerdekaan dengan acara di pagi hari.", en: "That school commemorates independence day with an event in the morning." }, accept: ["to commemorate", "to observe an anniversary", "to mark in memory"], drill: { jp: "Sekolah itu memperingati hari kemerdekaan setiap tahun", en: "That school commemorates independence day every year" }, hint: "muhm-puh-reeng-ah-TEE, five syllables. ⚠️ A word a learner must keep apart from one that looks almost identical: memperingati is to COMMEMORATE, and memperingatkan — which you meet in u98 — is to WARN. One letter group, two unrelated jobs. Both come from ingat, to remember, which you have had since u21: you remember a date, or you make somebody remember a danger." },
      ],
    },
  ],
};
