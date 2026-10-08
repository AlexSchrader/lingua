// ID Unit 98 — Pencegahan dan kewaspadaan ("Prevention and vigilance") — B2
// B2 block 1 (u88–u100). CONVENTIONS: see unit88.js §C1–§C12 — binding here.
//
// §C-K1. 🚨 RETHEMED. THE SLOT AS TITLED HAS NO GROUND LEFT, AND IT IS SPENT BY
//        TWO UNITS AT ONCE. "Risk and uncertainty":
//        • **u52 `Dampak, syarat, dan risiko` owns RISK** — `risiko`
//          `berisiko` `dampak` `syarat` `taruhan` `rentan` `rantai`.
//        • **u54 `Dugaan dan kemungkinan` owns HEDGING OUTRIGHT** — and the B1
//          block-2 seat surrendered `sepertinya` `tampaknya` `agaknya`
//          `barangkali` `konon` `jangan-jangan` `kemungkinan` to it, plus
//          `menebak`, `tebakan` and `memperkirakan`.
//        Authoring the slot as titled would re-teach both.
//        **RETHEMED TO THE ADJACENT LAYER NEITHER UNIT TOUCHED: not what a risk
//        IS or how likely it is, but what you DO about it beforehand — and what
//        it is called when you did nothing.** Probed 25 candidates: **19 free**,
//        the six taken being `mencegah`(u37) `darurat`(u60) `terancam`(u65)
//        `berisiko`(u52) `bahaya`(u38) `aman`(u38) — all foundation words this
//        unit builds on rather than repeats. Note the shape of the hole: the
//        VERB `mencegah` is taught and every NOUN around it is free, which is
//        why this unit is heavy on nouns by design.
//
// §C-K2. BOUNDARY, STATED. u60 `Kendala dan jalan keluar` owns the EMERGENCY and
//        the way out (`darurat` `buntu` `kompromi` `menanggulangi`); u65 owns
//        environmental THREAT (`terancam`). This unit owns the interval BEFORE
//        anything has happened, and the vocabulary of negligence that fills it
//        when nobody used that interval. `menanggulangi` is TAKEN (u60), so l4
//        takes `penangkal` and `menangkal`, never a second word for tackling a
//        problem once it has arrived.
//
// §C-K3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (C3/C4). ONE family:
//        `pencegahan`←**mencegah (u37)** — KEPT: prevention as a programme, a
//        field and a budget line is not the act of preventing one thing, and
//        the hint names the verb. Clean against the frozen base:
//        `kewaspadaan`←waspada (taught in THIS lesson, house style pair) ·
//        `kelalaian`←lalai (same lesson, same) · `keselamatan`←selamat — ⚠️
//        **bare `selamat` is NOT a taught front in this course** (u2 teaches the
//        greetings `selamat pagi` and the like as whole phrases); checked, not
//        assumed · `perlindungan`/`melindungi`←lindung (not taught) ·
//        `mengantisipasi`←antisipasi (same lesson, house style) ·
//        `memperingatkan`←ingat — the mem-per-...-kan form, and ⚠️ see the
//        warning in its own hint, because `memperingati` (to commemorate, u95)
//        differs from it by two letters and means something unrelated ·
//        `menangkal`/`penangkal`←tangkal (not taught) · `terjerumus`←jerumus
//        (not taught) · `serampangan`←serampang (not taught) · `mitigasi`
//        `siaga` `rawan` `cadangan` `sembarangan` `nekat` `celaka` `imbauan`
//        `tanggap` — roots not taught.
//
// §C-K4. ⚠️ REFUSED HERE, AND IT EXPOSES A FOURTH GAP IN `candidate-check.mjs`
//        THAT I DID **NOT** FIX. `menghindar` (to dodge aside) was on this
//        unit's list and the probe reported it **free** — but **`menghindari`
//        is TAKEN (u39)**, and the two are one lexeme in two valencies. The
//        probe only ever STRIPS affixes off the candidate; it never tries ADDING
//        one, so a candidate that is a taught front MINUS a suffix is invisible
//        to it. I fixed the circumfix and nasal-elision holes (see u88 §C3 and
//        the commit log) but left this one, because strip-and-add would
//        over-generate badly on short Indonesian roots.
//        **BLOCKS 2 AND 3: for every bare-stem verb you consider, check the -i
//        and -kan forms by hand with `front-taken.mjs`.** Replaced with
//        **`menangkal`**. Also refused: `gegabah`, ceded to **u126** by the band
//        allocation — this unit uses `serampangan` and `nekat`.
export const ID_UNIT98 = {
  id: "id-u98",
  lang: "id",
  title: "Pencegahan dan kewaspadaan",
  order: 98,
  stage: "b2",
  lessons: [
    {
      id: "id-u98l1",
      unit: 98,
      lesson: 1,
      title: "Pencegahan dan antisipasi",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about acting before anything has gone wrong — name prevention as a programme, name getting ahead of a problem, say somebody is doing that, name reducing damage you cannot prevent, say a body is on alert, and say somebody is on their guard.",
      items: [
        { id: "id-u98l1-pencegahan", type: "vocab", front: "pencegahan", reading: "pencegahan", meaning: "prevention as a standing programme", example: { jp: "Pencegahan penyakit itu jauh lebih murah daripada pengobatannya.", en: "Prevention of that disease is far cheaper than treating it." }, accept: ["prevention as a field of work", "preventive measures taken as policy", "forestalling as a programme"], drill: { jp: "Pencegahan penyakit itu lebih murah daripada pengobatan", en: "Preventing that disease is cheaper than treating it" }, hint: "puhn-chuh-GAH-han — c is CH, g is hard. ⚠️ Built on mencegah, to prevent, which you know from u37 — and the noun names something larger than the verb: a programme, a field, a budget line. Upaya pencegahan, preventive efforts, is the standard phrase in public health and policing, where it is contrasted with penindakan, enforcement after the fact." },
        { id: "id-u98l1-antisipasi", type: "vocab", front: "antisipasi", reading: "antisipasi", meaning: "getting ready for what has not happened yet", example: { jp: "Sebagai antisipasi, perusahaan itu menyiapkan cadangan air untuk musim kemarau.", en: "As a precaution, that company prepared a water reserve for the dry season." }, accept: ["anticipation acted on", "a precaution taken in advance", "forward preparation"], drill: { jp: "Sebagai antisipasi mereka menyiapkan cadangan air", en: "As a precaution they prepare a water reserve" }, hint: "ahn-tee-see-PAH-see, five syllables. ⚠️ Narrower in Indonesian than in English: it is not merely EXPECTING something, it is PREPARING for it — so sebagai antisipasi, as a precaution, is the commonest frame you will meet. Keep it apart from u98's pencegahan one card back: prevention stops the thing happening, antisipasi assumes it might and gets ready." },
        { id: "id-u98l1-mengantisipasi", type: "vocab", front: "mengantisipasi", reading: "mengantisipasi", meaning: "to prepare in advance for a possible event", example: { jp: "Pengurus itu mengantisipasi hujan besar dengan memindahkan semua berkas.", en: "That officer prepared in advance for heavy rain by moving all the files." }, accept: ["to anticipate and prepare for", "to make ready for a possibility", "to forestall by preparing"], drill: { jp: "Mereka mengantisipasi hujan besar dengan memindahkan berkas", en: "They prepare for heavy rain by moving files" }, hint: "muh-ngahn-tee-see-pah-SEE, six syllables. The verb beside the card before it. ⚠️ It takes an object that has not happened: mengantisipasi kenaikan harga, mengantisipasi banjir. Keep it apart from u54's memperkirakan, to estimate — forecasting says what WILL happen, mengantisipasi says what you are DOING about it." },
        { id: "id-u98l1-mitigasi", type: "vocab", front: "mitigasi", reading: "mitigasi", meaning: "cutting the damage of something you cannot stop", example: { jp: "Mitigasi bencana di pulau itu termasuk membangun tembok di pantai.", en: "Disaster mitigation on that island includes building a wall on the shore." }, accept: ["mitigation", "reducing harm you cannot prevent", "damage limitation planned in advance"], drill: { jp: "Mitigasi bencana di pulau itu sudah dimulai", en: "Disaster mitigation on that island has begun" }, hint: "mee-tee-GAH-see, hard g. ⚠️ The distinction this unit turns on, and Indonesian keeps it strictly: pencegahan stops the event, mitigasi accepts it will come and makes it cost less. You cannot prevent an earthquake, so everything you do about one is mitigasi. Mitigasi bencana, disaster mitigation, is the official term and the name of a whole government function." },
        { id: "id-u98l1-siaga", type: "vocab", front: "siaga", reading: "siaga", meaning: "standing ready to act at once", example: { jp: "Pasukan di pelabuhan itu siaga selama dua hari penuh.", en: "The units at that harbour were on standby for two full days." }, accept: ["on standby", "at readiness", "poised to respond"], drill: { jp: "Pasukan di pelabuhan itu siaga dua hari", en: "The units at that harbour were on alert two days" }, hint: "see-AH-gah, hard g. ⚠️ An institutional state, not a feeling: a unit, a hospital or a region is siaga. Indonesia uses numbered levels you will hear on the news — siaga satu is the highest alert — and the Pramuka scout movement calls its youngest members Siaga. Keep it apart from waspada in the next card, which is what a PERSON is." },
        { id: "id-u98l1-waspada", type: "vocab", front: "waspada", reading: "waspada", meaning: "watchful because something may go wrong", example: { jp: "Warga diminta waspada karena air sungai naik sejak malam.", en: "Residents were asked to be watchful because the river has risen since the night." }, accept: ["vigilant", "alert to a danger", "on one's guard"], drill: { jp: "Warga diminta waspada karena air sungai naik", en: "Residents are asked to be alert because the river rose" }, hint: "wahs-PAH-dah. ⚠️ Three words a learner must separate. Hati-hati, which you have had since A1, is *be careful* about a specific act you are doing now. Awas, from u40, is a SHOUT — look out. Waspada is a sustained state of watchfulness about something that has not arrived. A government asks citizens to be waspada; it shouts awas at nobody." },
      ],
    },
    {
      id: "id-u98l2",
      unit: 98,
      lesson: 2,
      title: "Kewaspadaan dan perlindungan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name watchfulness and shelter — vigilance as a quality, say a place is exposed to harm, name protection given, say somebody protects another, name a reserve held back, and say somebody warded a thing off.",
      items: [
        { id: "id-u98l2-kewaspadaan", type: "vocab", front: "kewaspadaan", reading: "kewaspadaan", meaning: "watchfulness kept up over time", example: { jp: "Kewaspadaan warga di daerah rawan itu menolong ketika air naik.", en: "The vigilance of residents in that exposed area helped when the water rose." }, accept: ["vigilance", "sustained alertness", "a habit of watchfulness"], drill: { jp: "Kewaspadaan warga di daerah rawan itu menolong", en: "The residents' vigilance in that exposed area helped" }, hint: "kuh-wahs-pah-DAH-an, five syllables. The noun of waspada, which you met in lesson 1. ⚠️ It is the thing an institution tries to BUILD in people, which is why you will read meningkatkan kewaspadaan, to raise vigilance, in every public-health campaign. Keep it apart from kehati-hatian, prudence, which is about how carefully you act rather than how closely you watch." },
        { id: "id-u98l2-rawan", type: "vocab", front: "rawan", reading: "rawan", meaning: "exposed to a particular harm", example: { jp: "Jalan di lereng itu rawan kecelakaan pada musim hujan.", en: "The road on that slope is accident-prone in the rainy season." }, accept: ["prone to a danger", "vulnerable to a specific risk", "liable to go wrong"], drill: { jp: "Jalan di lereng itu rawan kecelakaan saat hujan", en: "The road on that slope is accident-prone when it rains" }, hint: "RAH-wahn. ⚠️ It takes the danger directly after it with no preposition: rawan banjir, rawan kecelakaan, rawan konflik, rawan pangan — flood-prone, accident-prone, conflict-prone, food-insecure. That construction is the whole word, so learn it as rawan plus a noun. Keep it apart from u52's rentan, which is about a thing's own weakness rather than where it sits." },
        { id: "id-u98l2-perlindungan", type: "vocab", front: "perlindungan", reading: "perlindungan", meaning: "shelter or safeguard given to somebody", example: { jp: "Perlindungan bagi pelapor itu diatur dalam undang-undang khusus.", en: "Protection for that whistleblower is laid down in a special law." }, accept: ["protection afforded", "safeguarding extended to someone", "shelter provided"], drill: { jp: "Perlindungan bagi pelapor itu diatur undang-undang khusus", en: "Protection for that whistleblower is set by special law" }, hint: "puhr-leen-DOONG-an. From lindung, to shelter. ⚠️ Two registers and both everyday: physical shelter — mencari perlindungan dari hujan — and legal safeguarding, which is where this unit uses it. Perlindungan konsumen is consumer protection, perlindungan anak child protection, and perlindungan saksi witness protection, which ties straight back to u92." },
        { id: "id-u98l2-melindungi", type: "vocab", front: "melindungi", reading: "melindungi", meaning: "to shield somebody from harm", example: { jp: "Pohon besar itu melindungi rumah kecil dari angin laut.", en: "That big tree shields the small house from the sea wind." }, accept: ["to protect", "to shelter from harm", "to safeguard"], drill: { jp: "Pohon besar itu melindungi rumah dari angin", en: "That big tree shields the house from the wind" }, hint: "muh-leen-DOONG-ee. The verb of the card before it, and it takes dari for what is being kept off. ⚠️ Keep it apart from menjaga, to look after, which you have had since A2: menjaga is active custody of a thing — guarding it, minding it — while melindungi is standing between it and a danger. A guard menjaga a gate; a roof melindungi a house." },
        { id: "id-u98l2-cadangan", type: "vocab", front: "cadangan", reading: "cadangan", meaning: "something held back in case it is needed", example: { jp: "Cadangan air di gedung itu cukup untuk tiga hari saja.", en: "The water reserve in that building is enough for three days only." }, accept: ["a reserve kept aside", "a backup held in readiness", "a spare set by"], drill: { jp: "Cadangan air di gedung itu cukup tiga hari", en: "The water reserve in that building lasts three days" }, hint: "chah-DAHNG-an — c is CH. ⚠️ Wide and very useful: cadangan air a water reserve, ban cadangan a spare tyre, pemain cadangan a substitute player, rencana cadangan a backup plan. One word for everything English splits into reserve, spare, backup and substitute. Keep it apart from u121's suku cadang, which is a spare PART for a machine." },
        { id: "id-u98l2-menangkal", type: "vocab", front: "menangkal", reading: "menangkal", meaning: "to ward a thing off before it lands", example: { jp: "Aturan baru itu dibuat untuk menangkal pungli di loket pendaftaran.", en: "That new rule was made to ward off extortion at the registration counter." }, accept: ["to ward off", "to fend off in advance", "to counter before it takes hold"], drill: { jp: "Aturan baru itu dibuat untuk menangkal pungli", en: "That new rule was made to ward off extortion" }, hint: "muh-NAHNG-kahl. The root tangkal is a warding-off, and the noun penangkal is in lesson 4 of this unit. ⚠️ Keep it apart from u88's membantah and u51's menyanggah, which push back on WORDS: menangkal pushes back on a thing or a force — a disease, a rumour, a practice — before it can establish itself. Menangkal hoaks, to counter false news, is a current fixed phrase." },
      ],
    },
    {
      id: "id-u98l3",
      unit: 98,
      lesson: 3,
      title: "Lalai dan nekat",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name what it is called when nobody used the interval — say somebody was negligent, name the negligence, say a thing was done anyhow, say somebody is recklessly bold, say work was done slapdash, and say somebody slid into something bad.",
      items: [
        { id: "id-u98l3-lalai", type: "vocab", front: "lalai", reading: "lalai", meaning: "failing to do what your duty required", example: { jp: "Pengurus itu lalai karena tidak memeriksa cadangan air selama berbulan-bulan.", en: "That officer was negligent because he did not check the water reserve for months." }, accept: ["negligent", "remiss in a duty", "failing through inattention"], drill: { jp: "Pengurus itu lalai karena tidak memeriksa cadangan", en: "That officer was negligent because he did not check the reserve" }, hint: "LAH-lye, rhyming with English *lie*. ⚠️ It implies a DUTY that was not done, which is what makes it different from lupa, to forget, which you have had since A1: forgetting is a fact about your memory, being lalai is a failure of obligation and can be found against you in u92's pengadilan. It takes dalam for the duty: lalai dalam tugasnya." },
        { id: "id-u98l3-kelalaian", type: "vocab", front: "kelalaian", reading: "kelalaian", meaning: "negligence as a finding against somebody", example: { jp: "Kelalaian dalam pengawasan itu menjadi temuan utama dalam laporan.", en: "Negligence in that oversight became the main finding in the report." }, accept: ["negligence as a formal finding", "dereliction of duty", "culpable inattention"], drill: { jp: "Kelalaian dalam pengawasan itu menjadi temuan utama", en: "Negligence in that oversight was the main finding" }, hint: "kuh-lah-LAH-ee-an, five syllables. The noun of the card before it. ⚠️ It is a legal and administrative term in Indonesian: kelalaian is what an audit FINDS and what a gugatan from u92 alleges, and kelalaian berat is gross negligence. So the adjective describes a person's conduct and the noun names the official conclusion about it." },
        { id: "id-u98l3-sembarangan", type: "vocab", front: "sembarangan", reading: "sembarangan", meaning: "done any old way, with no care for rules", example: { jp: "Jangan membuang sampah sembarangan di dekat sungai itu.", en: "Do not throw rubbish about just anywhere near that river." }, accept: ["carelessly and at random", "any old how", "without regard to where or how"], drill: { jp: "Jangan membuang sampah sembarangan di dekat sungai", en: "Do not throw rubbish anywhere near the river" }, hint: "suhm-bah-RAHNG-an, four syllables. ⚠️ Almost always an adverb and almost always in a PROHIBITION — you will see jangan ... sembarangan on signs all over Indonesia: parkir sembarangan, buang sampah sembarangan. It says the act was done without reference to any rule about where or how, which is subtly different from doing it badly." },
        { id: "id-u98l3-nekat", type: "vocab", front: "nekat", reading: "nekat", meaning: "pressing on despite obvious danger", example: { jp: "Nakhoda itu nekat berlayar meskipun ombak sangat besar.", en: "That skipper recklessly set sail even though the waves were very big." }, accept: ["recklessly determined", "foolhardy", "pressing on regardless of danger"], drill: { jp: "Nakhoda itu nekat berlayar meskipun ombak besar", en: "That skipper recklessly sails though the waves are big" }, hint: "NEH-kaht. ⚠️ Carries a trace of admiration that English *reckless* does not: nekat is knowing the risk and going anyway, so it can be said of courage as well as of folly — and Indonesian often uses it of people driven by desperation rather than bravado. Keep it apart from lalai three cards back: being lalai is not noticing, being nekat is noticing and proceeding." },
        { id: "id-u98l3-serampangan", type: "vocab", front: "serampangan", reading: "serampangan", meaning: "done hastily and without method", example: { jp: "Pengecekan yang serampangan itu melewatkan dua galat besar.", en: "That slapdash check missed two large errors." }, accept: ["slapdash", "slipshod and hurried", "done without proper method"], drill: { jp: "Pengecekan yang serampangan itu melewatkan dua galat", en: "That slapdash check missed two errors" }, hint: "suh-rahm-PAHNG-an, four syllables. ⚠️ The exact opposite of u91's saksama and cermat, and it is about METHOD rather than about rules: sembarangan two cards back ignores where and how you may do a thing, serampangan does the right thing in a hurried, disorderly way. A report can be serampangan without breaking any rule at all." },
        { id: "id-u98l3-terjerumus", type: "vocab", front: "terjerumus", reading: "terjerumus", meaning: "to end up in something bad without meaning to", example: { jp: "Banyak anak muda terjerumus ke dalam utang karena tawaran yang mudah.", en: "Many young people slid into debt because of easy offers." }, accept: ["to fall into a bad situation", "to slide into trouble", "to be drawn in unawares"], drill: { jp: "Banyak anak muda terjerumus ke dalam utang", en: "Many young people slide into debt" }, hint: "tuhr-juh-ROO-moos, four syllables. The root jerumus is a headlong fall into a hole. ⚠️ The ter- here carries no blame and no agent: it says the person ended up there, which is why Indonesian uses it sympathetically about debt, addiction and crime. It takes ke dalam for what they fell into, and it is the natural consequence of every word in this lesson." },
      ],
    },
    {
      id: "id-u98l4",
      unit: 98,
      lesson: 4,
      title: "Imbauan dan keselamatan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name warning and safety — say a thing was an accident of bad luck, name safety as a standard, say somebody warned another, name a public appeal to behave, say a body is quick to respond, and name a safeguard against a specific harm.",
      items: [
        { id: "id-u98l4-celaka", type: "vocab", front: "celaka", reading: "celaka", meaning: "struck by misfortune", example: { jp: "Dua perahu kecil itu celaka di selat ketika angin berubah.", en: "Those two small boats came to grief in the strait when the wind changed." }, accept: ["unlucky and come to harm", "stricken by mishap", "brought to grief"], drill: { jp: "Dua perahu kecil itu celaka di selat", en: "Those two small boats came to grief in the strait" }, hint: "chuh-LAH-kah — c is CH. ⚠️ You already know kecelakaan, an accident, from the road vocabulary; this is the bare adjective it is built on, and it is also a mild exclamation of dismay — celaka! means *blast it*. Keep it apart from sial, unlucky, which is about luck alone: celaka says harm actually came." },
        { id: "id-u98l4-keselamatan", type: "vocab", front: "keselamatan", reading: "keselamatan", meaning: "safety as a standard to be met", example: { jp: "Keselamatan pekerja di proyek itu diperiksa oleh lembaga dari luar.", en: "Worker safety on that project is inspected by an outside body." }, accept: ["safety as a requirement", "freedom from harm as a standard", "wellbeing secured"], drill: { jp: "Keselamatan pekerja di proyek itu diperiksa lembaga luar", en: "Worker safety on that project is inspected by an outside body" }, hint: "kuh-suh-lah-MAH-tan, five syllables. Built on selamat, safe and sound — the word inside selamat pagi, which literally wishes you a safe morning. ⚠️ Keep it apart from keamanan, security, which you can build from aman in u38: keamanan keeps out people who mean harm, keselamatan keeps out accidents. A guard provides keamanan; a helmet provides keselamatan." },
        { id: "id-u98l4-memperingatkan", type: "vocab", front: "memperingatkan", reading: "memperingatkan", meaning: "to tell somebody of a danger ahead", example: { jp: "Lembaga itu memperingatkan warga tentang air yang akan naik malam ini.", en: "That body warned residents about water that would rise tonight." }, accept: ["to warn", "to caution about a danger", "to put on notice"], drill: { jp: "Lembaga itu memperingatkan warga tentang air naik", en: "That body warns residents about rising water" }, hint: "muhm-puh-reeng-aht-KAHN, six syllables. ⚠️ **THE TRAP OF THIS UNIT, and it is two letters wide.** Memperingatkan, this card, is to WARN. Memperingati, which you met in u95, is to COMMEMORATE. Both are built on ingat, to remember, from u21 — you make somebody remember a danger, or you make a nation remember a date. Read the ending before you decide which you are looking at." },
        { id: "id-u98l4-imbauan", type: "vocab", front: "imbauan", reading: "imbauan", meaning: "a public appeal asking people to act a certain way", example: { jp: "Imbauan dari pihak sekolah itu dibaca di depan semua murid.", en: "The appeal from the school was read out in front of all the pupils." }, accept: ["a public appeal", "an official call to behave", "an exhortation to the public"], drill: { jp: "Imbauan dari pihak sekolah itu dibaca pagi ini", en: "The school's appeal was read out this morning" }, hint: "eem-BOW-an. From imbau, to call out to. ⚠️ The crucial thing is that it does NOT bind: an imbauan asks, where an aturan from A2 requires and a perundangan from u92 compels. Indonesian government communication is full of them — imbauan pemerintah — precisely because asking is cheaper than legislating. Also spelled himbauan, which is common but not standard." },
        { id: "id-u98l4-tanggap", type: "vocab", front: "tanggap", reading: "tanggap", meaning: "quick to take in a situation and act", example: { jp: "Pengurus baru itu tanggap ketika ada laporan tentang kebocoran.", en: "That new officer was quick to act when there was a report about a leak." }, accept: ["responsive and quick to act", "alive to a situation", "swift on the uptake"], drill: { jp: "Pengurus baru itu tanggap ketika ada laporan", en: "That new officer is responsive when there is a report" }, hint: "TAHNG-gahp, hard g. ⚠️ **NOT the same word as tanggapan**, a response, which you met in u51, even though they share a root: tanggapan is a thing somebody SAID BACK, tanggap is a quality of a person or a body — alert and fast. Indonesia's disaster agency uses tanggap darurat for emergency response, and it is praise: pemerintah yang tanggap." },
        { id: "id-u98l4-penangkal", type: "vocab", front: "penangkal", reading: "penangkal", meaning: "a device or measure that keeps a specific harm off", example: { jp: "Penangkal di atap gedung itu dipasang setelah petir merusak mesin.", en: "The conductor on that building's roof was fitted after lightning damaged a machine." }, accept: ["a safeguard against a named harm", "a protective device", "a counter-measure in place"], drill: { jp: "Penangkal di atap gedung itu dipasang tahun lalu", en: "The conductor on that building's roof was fitted last year" }, hint: "puh-NAHNG-kahl. The noun of menangkal from lesson 2. ⚠️ Nearly always followed by the thing it wards off, and the commonest by far is penangkal petir, a lightning conductor — you will see them on every tall Indonesian building. Penangkal hujan and penangkal racun, an antidote, work the same way. Keep it apart from cadangan, a reserve: a cadangan replaces, a penangkal repels." },
      ],
    },
  ],
};
