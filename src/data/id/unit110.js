// ID Unit 110 — Pidato dan sambutan resmi ("Public address and the ceremonial register") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 2 (u101–u113). Band notes BB1–BB8 are in unit101.js's header; unit1's
// A1 conventions, unit21's A2 set and unit51's B1 set (B1–B12) all still bind.
//
// §P1. ⚠️ **THIS SLOT WAS RETHEMED BEFORE I GOT IT AND I AM HONOURING THE
//      RETHEME.** The scaffold said "Register 4 — written, public and
//      institutional voice", which duplicates **u73 `Bahasa tulis resmi`**
//      outright — u73 owns `tersebut` `adapun` `demikian` `berdasarkan`
//      `terkait` `perihal` `tertera` `bersangkutan` `sehubungan` `guna`
//      `hormat` `kiranya` `niscaya` `sebagaimana`. **u73 is the register you
//      WRITE. u110 is the register you STAND UP AND SPEAK**, which is 0-covered
//      in 2,088 words: a learner can read an Indonesian regulation and cannot
//      follow the first ninety seconds of any Indonesian event.
//      Measured: 22 of 24 candidates probed free, so the slot is real.
//
// §P2. **THE u109 / u110 SPLIT.** Both slots are mine; band note BB3 states it
//      and the test. **u109 is how you address a PERSON above you; u110 is how
//      you speak to a ROOM.** So `terhormat` is here (it labels the audience),
//      `Yang Mulia` is u109's (it addresses one person of rank), `sudilah` is
//      here (it begs a roomful), `berkenan` is u109's (it needs a superior).
//      ⚠️ Taken and therefore NOT re-carded: `kiranya` u73 · `menyampaikan`
//      u33 · `acara` u9 · **`pembawa acara` u64** · `hening` u80 · `peserta`
//      u41 · `tamu` u15 · `penonton` u35 · `kuliah` u44.
//
// §P3. REFUSALS, with the reason (band notes BB4 and BB5):
//      `podium` — **exact cognate**: front === gloss after folding, so the
//        produce card would show "podium" and accept "podium". `mimbar`
//        shipped instead and is the word an Indonesian event actually uses.
//      `seraya` — a literary twin of `sambil`, which the learner has, and of
//        `sembari`, which I carded in u107 l1. Three words for *while* is two
//        too many; refused even though the brief listed it.
//      `berorasi` — `orasi` shipped as the noun and `berpidato` already
//        carries "to make a speech"; a fourth speaking verb teaches nothing.
//      `tutur` — the bare noun is literary and `bertutur` is the useful form,
//        so one of the pair shipped, not both.
//
// §P4. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1 §3 / unit51 B5):
//      sekalian → sekali ⚠️ `sekali` IS taught (u2, "once / very") and
//        `kalian` (u15, "you plural"). Carded: *one and all* in a salutation is
//        neither. Drill-safe: "sekalian" holds "sekali" at index 0 followed by
//        `a` and "kalian" at index 2 preceded by `e`, so findWholeWord matches
//        in neither direction.
//      terhormat → hormat ⚠️ `hormat` IS taught (u73) and `menghormati`
//        (u32); `kehormatan` is mine at u109. Four cards off one root across
//        three units — each a different word class, each checked. Drill-safe:
//        index 3, preceded by `r`.
//      sambutan → menyambut — `menyambut` is NOT taught. Clean.
//      pembukaan → membuka ⚠️ `membuka` IS taught (u17, "to open"). Carded: the
//        opening OF AN EVENT is a part of a programme. Drill-safe: the shared
//        string is `buka`, a whole word in neither (`pembukaan` has `a` on the
//        right, `membuka` has `m` on the left and nothing matching).
//      perkenankan → berkenan — `berkenan` is mine at u109 l3, and the shared
//        string is the root `kenan`, carded nowhere; neither is a whole word
//        inside the other. ⚠️ **The pair is deliberate and the hint says so:**
//        berkenan asks a superior to be willing, perkenankan asks a room for
//        leave to speak. Same root, opposite direction.
//      berpidato → pidato — `pidato` is carded in THIS unit, same lesson (l2),
//        deliberately (the noun and the act). Drill-safe: "berpidato" holds
//        "pidato" at index 3, preceded by `r`.
//      pembicara → berbicara ⚠️ `berbicara` IS taught (u13, "to speak").
//        Carded: the person billed to speak at an event. Drill-safe: the shared
//        string is `bicara`, which is NOT a whole word inside either form.
//      penutup → menutup ⚠️ `menutup` IS taught (u17, "to close"). Carded: the
//        closing ITEM of a programme. Drill-safe: the shared string is `tutup`,
//        a whole word in neither.
//      demikianlah → demikian ⚠️ `demikian` IS taught (u73, "thus"). The -lah
//        is glued on, so no whole-word match; and this card is the SPOKEN
//        closing formula, which `demikian` alone is not.
//      bertutur → tutur — `tutur` is NOT taught and is deliberately not carded
//        (§P3). Clean.
//      menyimak → simak — NOT taught. Clean.
//
// §P5. DEFERRED FROM THIS UNIT, named not buried, all probed FREE: `bertepuk`
//      `mengheningkan` `moderator` `peresmian` `meresmikan` `undangan`
//      `menghadiri` `susunan` `lokakarya` `hadir`-adjacent nouns. Refused:
//      `podium` `seraya` `berorasi` `tutur` (§P3).
export const ID_UNIT110 = {
  id: "id-u110",
  lang: "id",
  title: "Pidato dan sambutan resmi",
  order: 110,
  stage: "b2",
  lessons: [
    {
      id: "id-u110l1",
      unit: 110,
      lesson: 1,
      title: "Membuka sebuah acara",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Follow and produce the first ninety seconds of any Indonesian event — name those present, address them one and all, call them honoured, give a welcoming speech, name the opening item, and ask leave to speak.",
      items: [
        { id: "id-u110l1-hadirin", type: "vocab", front: "hadirin", reading: "hadirin", meaning: "those present", example: { jp: "Hadirin di gedung itu diam ketika lampu di depan mati.", en: "Those present in the building fell silent when the light at the front went out." }, accept: ["the assembled audience", "everyone in attendance", "the gathering"], drill: { jp: "Hadirin di gedung itu diam dan tenang", en: "Those present in the building fell silent and calm" }, hint: "hah-DEE-reen. ⚠️ An Arabic plural — hadir means present, and -in is the Arabic masculine plural ending Indonesian borrowed whole, so hadirin is already plural and never takes para or -pun. Keep it apart from penonton (u35), the audience, which watches a show: hadirin have COME TO AN OCCASION. The first word of almost every Indonesian speech is Hadirin." },
        { id: "id-u110l1-sekalian", type: "vocab", front: "sekalian", reading: "sekalian", meaning: "one and all", example: { jp: "Bapak dan Ibu sekalian kami mulai acara ini sekarang.", en: "Ladies and gentlemen one and all, we begin this event now." }, accept: ["all of you together", "every one of you", "the whole company"], drill: { jp: "Bapak dan Ibu sekalian kami mulai acara sekarang", en: "Ladies and gentlemen all, we begin the event now" }, hint: "suh-kah-lee-AHN. ⚠️ You know sekali from u2 and kalian from u15; this is neither, though it looks like both. In a salutation it goes AFTER the people addressed — Bapak dan Ibu sekalian, hadirin sekalian — and means *all of you taken together*. It has a second, everyday sense too: sekalian saja, while we are at it, all in one trip." },
        { id: "id-u110l1-terhormat", type: "vocab", front: "terhormat", reading: "terhormat", meaning: "honoured, in a formal address", example: { jp: "Surat itu mulai dengan kata Bapak yang terhormat dan nama orang itu.", en: "The letter began with the words honoured sir and the person's name." }, accept: ["esteemed", "respected, as a formal label", "worshipful"], drill: { jp: "Surat itu mulai dengan kata Bapak yang terhormat", en: "The letter begins with the words honoured sir" }, hint: "tuhr-HOHR-maht. ⚠️ Built on hormat, a formal show of respect, which you met in u73. It is a LABEL you attach to the people you are addressing, not a feeling: yang terhormat, abbreviated Yth. on every Indonesian envelope, and Hadirin yang terhormat at the head of every speech. Keep it apart from u109's Yang Mulia, which addresses ONE person of rank." },
        { id: "id-u110l1-sambutan", type: "vocab", front: "sambutan", reading: "sambutan", meaning: "a welcoming speech", example: { jp: "Sambutan dari kepala sekolah itu hanya lima menit dan sangat jelas.", en: "The head teacher's welcoming speech was only five minutes and very clear." }, accept: ["an address of welcome", "opening remarks", "a short formal greeting speech"], drill: { jp: "Sambutan dari kepala sekolah itu hanya lima menit", en: "The head teacher's welcoming speech is only five minutes" }, hint: "sahm-BOO-tan. From menyambut, to receive or welcome, which this course does not card. ⚠️ **It is a slot on a programme, not a genre**: every Indonesian event has two or three sambutan from people of descending rank before anything happens. Keep it apart from pidato, the next lesson's word, which is the full prepared speech." },
        { id: "id-u110l1-pembukaan", type: "vocab", front: "pembukaan", reading: "pembukaan", meaning: "the opening of an event", example: { jp: "Pembukaan acara itu mulai pada jam delapan pagi di gedung baru.", en: "The opening of the event started at eight in the morning at the new building." }, accept: ["the opening ceremony", "the first item on a programme", "the official start"], drill: { jp: "Pembukaan acara itu mulai pada jam delapan pagi", en: "The opening of the event starts at eight in the morning" }, hint: "puhm-boo-KAH-an, four syllables. ⚠️ On membuka, to open, which you know from u17 — but this is not opening a door. It is the first item on a printed programme, and it pairs with penutup in lesson 4, which is the last. If you learn the two together you can read any Indonesian susunan acara, order of events." },
        { id: "id-u110l1-perkenankan", type: "vocab", front: "perkenankan", reading: "perkenankan", meaning: "allow me", example: { jp: "Perkenankan kami menyampaikan terima kasih kepada semua tamu pada pagi ini.", en: "Allow us to convey our thanks to all the guests this morning." }, accept: ["permit me", "grant us leave to", "if I may"], drill: { jp: "Perkenankan kami menyampaikan terima kasih kepada tamu", en: "Allow us to convey our thanks to the guests" }, hint: "puhr-kuh-nahn-KAHN, four syllables. ⚠️ **The same root as u109's berkenan, pointing the other way:** berkenan asks a SUPERIOR to be willing; perkenankan asks a ROOM for leave to speak. It is an imperative addressed to the audience and it is how an Indonesian speaker starts the body of a speech. Keep it apart from izin (u50), permission, which is a thing you are granted on paper." },
      ],
    },
    {
      id: "id-u110l2",
      unit: 110,
      lesson: 2,
      title: "Berdiri di depan ruangan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about the act of speaking in public — a prepared address, making one, the rostrum you make it from, a voice that carries, speaking a language fluently, and the person billed to speak.",
      items: [
        { id: "id-u110l2-pidato", type: "vocab", front: "pidato", reading: "pidato", meaning: "a prepared address", example: { jp: "Pidato dia tentang air bersih di desa sangat jelas dan pendek.", en: "His address about clean water in the village was very clear and short." }, accept: ["a formal speech", "an oration prepared in advance", "a public address"], drill: { jp: "Pidato dia tentang air bersih sangat jelas", en: "His address about clean water is very clear" }, hint: "pee-DAH-toh. ⚠️ Keep the three apart, because an Indonesian programme lists them separately: a sambutan is a short welcome from somebody important, a pidato is a full prepared speech with an argument in it, and a ceramah, which lesson 3 gives you, is a talk that teaches something. Teks pidato is the written script a student is made to memorise at school." },
        { id: "id-u110l2-berpidato", type: "vocab", front: "berpidato", reading: "berpidato", meaning: "to make a speech", example: { jp: "Dia berpidato selama dua puluh menit tanpa membaca kertas.", en: "He spoke for twenty minutes without reading from paper." }, accept: ["to deliver an address", "to orate", "to speak formally in public"], drill: { jp: "Dia berpidato selama dua puluh menit tanpa kertas", en: "He speaks for twenty minutes without paper" }, hint: "buhr-pee-DAH-toh. The ber- verb off the card before it. ⚠️ You know berbicara from u13, to speak — berpidato is specifically standing up in front of an audience with something prepared, and you cannot use it of a conversation however long. It has no object: you berpidato tentang X, never berpidato X." },
        { id: "id-u110l2-mimbar", type: "vocab", front: "mimbar", reading: "mimbar", meaning: "a rostrum", example: { jp: "Dia berdiri di mimbar dan melihat semua orang di gedung itu.", en: "He stood at the rostrum and looked at everybody in the building." }, accept: ["a pulpit", "the stand a speaker speaks from", "a lectern"], drill: { jp: "Dia berdiri di mimbar dan melihat semua orang", en: "He stands at the rostrum and looks at everybody" }, hint: "MEEM-bahr. An Arabic word, and originally the pulpit of a mosque — which is still its first sense, and is why it fits lesson 3's khotbah as naturally as a conference hall. ⚠️ **This is the card the unit took instead of podium, which would have been a word you type by copying the English** (band note BB4). It is also used figuratively: mimbar bebas, a free platform, is an open-microphone protest." },
        { id: "id-u110l2-lantang", type: "vocab", front: "lantang", reading: "lantang", meaning: "ringing and carrying", example: { jp: "Suara dia lantang dan semua orang di belakang bisa mendengar.", en: "His voice was ringing and everybody at the back could hear." }, accept: ["loud and clear", "resonant", "carrying to the back of a room"], drill: { jp: "Suara dia lantang dan semua orang bisa mendengar", en: "His voice is ringing and everybody can hear" }, hint: "LAHN-tahng — ng one hum. ⚠️ Keep it apart from keras, loud or hard, which you know from u30, and from nyaring (u80), shrill: keras is volume, nyaring is unpleasantly high, lantang is loud AND clear AND admirable. It also goes metaphorical: bicara lantang means to speak out bravely, so a lantang voice is a brave one." },
        { id: "id-u110l2-fasih", type: "vocab", front: "fasih", reading: "fasih", meaning: "fluent", example: { jp: "Bahasa Indonesia dia fasih meskipun dia besar di negara lain.", en: "His Indonesian is fluent even though he grew up in another country." }, accept: ["speaking smoothly and well", "eloquent", "without hesitation"], drill: { jp: "Bahasa Indonesia dia fasih meskipun dia besar jauh", en: "His Indonesian is fluent even though he grew up far away" }, hint: "FAH-seeh, final h breathed. An Arabic loan and originally about eloquence in reciting. ⚠️ It applies to SPEECH, not to knowledge: you are fasih in a language or in reciting something, never fasih in mathematics. It is also the standard compliment to pay somebody's Indonesian, so it is a word you will have said to you before you need to say it." },
        { id: "id-u110l2-pembicara", type: "vocab", front: "pembicara", reading: "pembicara", meaning: "a speaker at an event", example: { jp: "Pembicara yang pertama pada acara itu adalah seorang dokter dari kota.", en: "The first speaker at that event was a doctor from the city." }, accept: ["a billed speaker", "the person invited to talk", "a presenter at an event"], drill: { jp: "Pembicara pertama pada acara itu adalah seorang dokter", en: "The first speaker at that event is a doctor" }, hint: "puhm-bee-CHAH-rah — c is CH. On berbicara, to speak, which you know from u13. ⚠️ Keep it apart from pembawa acara (u64), a programme presenter: the pembawa acara runs the event and introduces people, a pembicara is one of the people introduced. The two sit in different rows on the same programme sheet." },
      ],
    },
    {
      id: "id-u110l3",
      unit: 110,
      lesson: 3,
      title: "Khotbah, ceramah, dan orasi",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the three kinds of talk Indonesians actually attend and how you take them in — a sermon, a teaching talk, a political oration, speaking in a considered way, spoken rather than written, and listening attentively.",
      items: [
        { id: "id-u110l3-khotbah", type: "vocab", front: "khotbah", reading: "khotbah", meaning: "a sermon", example: { jp: "Khotbah pada hari Jumat itu tentang jujur dalam bekerja.", en: "The sermon that Friday was about honesty in work." }, accept: ["a religious address", "a homily", "a preaching talk"], drill: { jp: "Khotbah pada hari Jumat itu tentang jujur", en: "The sermon that Friday was about honesty" }, hint: "KHOT-bah — the kh is a throaty sound at the back, like the ch in the Scottish loch, and it is one of the few genuinely foreign sounds Indonesian kept. Arabic, and it names the Friday sermon in a mosque as well as a church sermon. ⚠️ Berkhotbah is also used mockingly of somebody lecturing you at dinner, exactly as English uses *preaching*." },
        { id: "id-u110l3-ceramah", type: "vocab", front: "ceramah", reading: "ceramah", meaning: "a talk given to teach", example: { jp: "Dua ratus orang datang ke ceramah tentang kesehatan di gedung desa.", en: "Two hundred people came to the talk about health at the village hall." }, accept: ["a public lecture outside a university", "an instructional talk", "an address that teaches something"], drill: { jp: "Dua ratus orang datang ke ceramah tentang kesehatan", en: "Two hundred people came to the talk about health" }, hint: "chuh-RAH-mah — c is CH. ⚠️ Keep it apart from kuliah (u44), a lecture, which belongs to a university course, and from pidato, which argues rather than teaches. A ceramah is what a doctor gives at a village hall and what a religious teacher gives after prayers — a ceramah agama is a staple of Indonesian life. The speaker is a penceramah." },
        { id: "id-u110l3-orasi", type: "vocab", front: "orasi", reading: "orasi", meaning: "a political oration", example: { jp: "Orasi di depan kantor pemerintah itu berjalan dengan damai sampai malam.", en: "The oration in front of the government office went on peacefully until night." }, accept: ["a rousing public speech", "a rally speech", "oratory at a demonstration"], drill: { jp: "Orasi di depan kantor pemerintah itu berjalan damai", en: "The oration in front of the government office went peacefully" }, hint: "oh-RAH-see. ⚠️ Narrower than pidato and politically loaded: an orasi happens at a demonstration or a rally, usually from a truck with a loudhailer, and the word carries energy and risk. Note the shape Indonesian chose — orasi, not oration — which is also what keeps it from being a word you type by copying the English. Orasi ilmiah is the one formal exception: an inaugural academic lecture." },
        { id: "id-u110l3-bertutur", type: "vocab", front: "bertutur", reading: "bertutur", meaning: "to speak in a considered way", example: { jp: "Orang tua itu bertutur dengan tenang tentang perang dan tentang keluarga.", en: "The old man spoke calmly about the war and about his family." }, accept: ["to express oneself in speech", "to hold forth quietly", "to speak as one who chooses words"], drill: { jp: "Orang tua itu bertutur dengan tenang tentang perang", en: "The old man speaks calmly about the war" }, hint: "buhr-TOO-toor. The root tutur is speech as something crafted — it is the same root as u104's menuturkan, to relate what one saw. ⚠️ You know berbicara (u13), to speak, which is neutral. Bertutur draws attention to HOW: a person who bertutur is choosing words. Bahasa tutur, spoken language, and tutur kata, somebody's manner of speaking, are the two phrases you will meet." },
        { id: "id-u110l3-lisan", type: "vocab", front: "lisan", reading: "lisan", meaning: "spoken rather than written", example: { jp: "Ujian lisan itu lebih susah daripada ujian yang lain.", en: "The oral exam was harder than the other one." }, accept: ["oral", "by word of mouth", "verbal as against written"], drill: { jp: "Ujian lisan itu lebih susah daripada ujian lain", en: "The oral exam is harder than the other exam" }, hint: "LEE-sahn. An Arabic word meaning tongue, and it is the standard opposite of tulis, written: ujian lisan and ujian tulis, lisan dan tertulis. ⚠️ This is a word you will meet on a form before you ever say it, and it is how an Indonesian institution marks that something was said rather than recorded — perjanjian lisan, a verbal agreement, which is worth nothing in court." },
        { id: "id-u110l3-menyimak", type: "vocab", front: "menyimak", reading: "menyimak", meaning: "to listen attentively", example: { jp: "Semua anak menyimak dengan diam selama satu jam penuh.", en: "All the children listened attentively in silence for a full hour." }, accept: ["to pay close attention to", "to follow what is being said", "to attend to carefully"], drill: { jp: "Semua anak menyimak dengan diam selama satu jam", en: "All the children listen attentively in silence for an hour" }, hint: "muh-nyee-MAHK — ny one sound. ⚠️ Narrower and stronger than mendengar, to hear, which you know from u4: menyimak is deliberate and effortful, which is why it is the verb an Indonesian teacher uses when telling a class to listen, and the verb a programme uses for its audience. It is also used of reading closely, so it is really about ATTENTION rather than about ears." },
      ],
    },
    {
      id: "id-u110l4",
      unit: 110,
      lesson: 4,
      title: "Menutup dan suasana acara",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "End an event and describe how it felt — that is all from me, the closing item, such then is the matter, be so good as to, a festive atmosphere, and a solemn one.",
      items: [
        { id: "id-u110l4-sekian", type: "vocab", front: "sekian", reading: "sekian", meaning: "that is all from me", example: { jp: "Sekian dari saya dan terima kasih kepada semua hadirin pada pagi ini.", en: "That is all from me, and thank you to everybody present this morning." }, accept: ["so much for that", "I will stop there", "this concludes what I had to say"], drill: { jp: "Sekian dari saya dan terima kasih kepada hadirin", en: "That is all from me, and thank you to those present" }, hint: "suh-KEE-ahn. ⚠️ It literally means *this much* and is also used for an unspecified quantity — sekian rupiah, so many rupiah. But as a closing formula it is fixed and unmissable: **every Indonesian speech ends Sekian dan terima kasih**, and a learner who hears it knows to start clapping. The pair with lesson 1's Hadirin brackets the whole genre." },
        { id: "id-u110l4-penutup", type: "vocab", front: "penutup", reading: "penutup", meaning: "the closing item", example: { jp: "Penutup dari acara itu adalah lagu dari anak sekolah di desa.", en: "The closing item of that event was a song by the village schoolchildren." }, accept: ["the final part of a programme", "the conclusion", "the last item"], drill: { jp: "Penutup dari acara itu adalah satu lagu", en: "The closing item of that event is a song" }, hint: "puh-NOO-toop. ⚠️ On menutup, to close, which you know from u17 — and the pair with pembukaan in lesson 1 is the pair that lets you read an Indonesian programme sheet: Pembukaan at the top, Penutup at the bottom, sambutan in between. It also means a lid or a cover, which is the literal sense, and kata penutup is a closing word." },
        { id: "id-u110l4-demikianlah", type: "vocab", front: "demikianlah", reading: "demikianlah", meaning: "such then is", example: { jp: "Demikianlah cerita tentang desa kecil di kaki gunung itu.", en: "Such, then, is the story of the small village at the foot of that mountain." }, accept: ["and so that is how it is", "thus it stands", "and there you have it"], drill: { jp: "Demikianlah cerita tentang desa kecil itu", en: "Such then is the story of that small village" }, hint: "duh-mee-kee-AHN-lah, five syllables. ⚠️ You know demikian from u73, thus — and the -lah is the emphatic particle u106 introduced with pastilah. Together they make a closing flourish: demikianlah ends a story, a report or a speech, and it signals *I have finished* as clearly as sekian does. It is formal and slightly grand, which is the point." },
        { id: "id-u110l4-sudilah", type: "vocab", front: "sudilah", reading: "sudilah", meaning: "be so good as to", example: { jp: "Sudilah Bapak dan Ibu menerima hadiah kecil dari kami.", en: "Be so good as to accept a small gift from us." }, accept: ["kindly", "would you be willing to", "may it please you to"], drill: { jp: "Sudilah Bapak dan Ibu menerima hadiah dari kami", en: "Be so good as to accept a gift from us" }, hint: "SOO-dee-lah. The root sudi means willing out of goodwill, and the -lah makes it a polite imperative. ⚠️ Compare u109's berkenan, which asks ONE superior to be willing: sudilah asks a ROOM, and that is why the two sit in different units. It is high ceremonial register — a wedding, a handover, a formal gift — and nobody says it in a shop." },
        { id: "id-u110l4-meriah", type: "vocab", front: "meriah", reading: "meriah", meaning: "festive and loud", example: { jp: "Acara itu meriah dan semua orang tertawa sampai malam.", en: "The event was festive and everybody laughed until nightfall." }, accept: ["lively and celebratory", "with a joyful din", "merry and bustling"], drill: { jp: "Acara itu meriah dan semua orang tertawa", en: "The event is festive and everybody is laughing" }, hint: "muh-REE-ah. ⚠️ Keep it apart from ramai, busy or crowded, which you know from u10: ramai is just a lot of people, meriah is a lot of people ENJOYING themselves, with noise, colour and music. It is the standard adjective in an event report — acara berlangsung meriah — and it is the opposite number of the next card." },
        { id: "id-u110l4-khidmat", type: "vocab", front: "khidmat", reading: "khidmat", meaning: "solemn", example: { jp: "Suasana di gedung itu khidmat dan tidak ada orang yang berbicara.", en: "The atmosphere in the building was solemn and nobody was speaking." }, accept: ["hushed and reverent", "with grave dignity", "ceremonially serious"], drill: { jp: "Suasana di gedung itu khidmat dan tenang", en: "The atmosphere in the building is solemn and quiet" }, hint: "KHEED-maht — the kh is the throaty sound from khotbah again. Arabic, originally service or devotion. ⚠️ The deliberate opposite of the card above it, and Indonesian event reports choose between them: a wedding is meriah, a flag ceremony or a funeral is khidmat. Keep it apart from serius, serious, which is about a person's manner; khidmat is about the air in the room." },
      ],
    },
  ],
};
