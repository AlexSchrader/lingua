// ID Unit 54 — Dugaan dan kemungkinan ("Conjecture and likelihood") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 1 (u51–u63). unit51.js's 12 B1 band conventions BIND this file.
// RETITLED (theme kept) from "Hedging and uncertainty".
//
// §A1. THE SLOT SURVIVES ITS THEME, UNLIKE u51–u53. Measured against all 1,200
//      words, only **four** are on this ground: `mungkin` `pasti` `tentu` (u12)
//      and `ragu` (u21), plus `mengira` (u21, to guess) and `sebenarnya` /
//      `ternyata` / `setidaknya` (u28) nearby. That is enough to say maybe and
//      I doubt it, and nothing else. **The whole apparatus of attribution and
//      estimation is absent** — to surmise, a supposition, to estimate, an
//      estimate, to forecast, apparently, seemingly, allegedly, they say, not
//      necessarily, it may well be, impossible, as if, indistinct, an
//      impression. So the theme is kept and the A2 words are used in the
//      examples rather than re-taught.
//
// §A2. WHY THIS IS THE B1 UNIT IT IS. Hedging is the clearest case of band
//      convention B1 ("B1 relates, it does not name"): an A2 learner asserts or
//      denies, and a B1 learner can place a claim at arm's length —
//      **somebody else said it, I infer it, it is only likely.** The six
//      sentence adverbs in l2 are the single highest-value group in this unit
//      because every Indonesian news report opens with one.
//
// §A3. SCOPE BOUNDARY WITH u49 (A2) — AND TWO WORDS u49 DELIBERATELY LEFT HERE.
//      u49 owns EVIDENCE and VERDICTS (`bukti` `fakta` `membuktikan`
//      `menyangkal` `terbukti` `keliru` `tampak`). u49's own header states that
//      it did **not** card `sepertinya` or `kelihatan` because they "crowd
//      `tampak` in one lesson for no new meaning", and named them in `tampak`'s
//      hint. **`sepertinya` is taken here (l2) and that is the right place for
//      it** — as a SENTENCE ADVERB among five others it is doing a job `tampak`
//      cannot. **`kelihatan` is still not carded**: u49's reasoning holds, and
//      `tampak` already accepts "to look a certain way" and "to seem", so a
//      `kelihatan` card would be a gloss collision as well as a crowd (§A6).
//      Boundary with u52 (this block): u52 owns RISK — the chance of HARM.
//      u54 owns LIKELIHOOD — the chance of anything at all. `kemungkinan` is
//      here; `risiko` is there.
//
// §A4. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (convention B5 / unit1 §3):
//      kemungkinan → mungkin   ⚠️ `mungkin` IS taught (u12, "maybe"). A particle
//        and a countable noun. Drill-safe, measured: "kemungkinan" holds
//        "mungkin" at index 2, preceded by `e`, so findWholeWord matches in
//        neither direction.
//      agaknya → agak          ⚠️ `agak` IS taught (u14, "rather"). A degree
//        particle and a sentence adverb. Drill-safe: "agaknya" holds "agak" at
//        index 0 but is FOLLOWED by `n`, a letter, so findWholeWord fails.
//      tampaknya → tampak      ⚠️ `tampak` IS taught (u49, "to appear"). Same
//        shape of relation as above, and drill-safe the same way (followed by
//        `n`).
//      sepertinya → seperti    ⚠️ `seperti` IS taught (u14, "like"). Drill-safe:
//        "sepertinya" holds "seperti" at index 0, followed by `n`.
//      katanya → kata          ⚠️ `kata` IS taught (u26, "a word"). Drill-safe:
//        followed by `n`. ⚠️ **AND THIS IS THE ONE TO WATCH.** `katanya` is the
//        only -nya front in this unit whose stem is a bare noun, so a drill
//        containing `kata` does NOT satisfy front `katanya` — the drill below
//        contains `katanya` itself.
//      meragukan → ragu        ⚠️ `ragu` IS taught (u21, "to doubt"). Drill-safe:
//        "meragukan" holds "ragu" at index 3, preceded by `r`.
//      memperkirakan / perkiraan → kira   ⚠️ `kira-kira` IS taught (u27,
//        "roughly") and `mengira` (u21, "to guess"). Two more off the root, which
//        B5/§3 permits where each is a different word — roughly, to guess, to
//        estimate, an estimate are four jobs. Drill-safe: the nasal and the per-
//        both break the whole-word match.
//      menebak / tebakan → tebak   root not taught, not carded.
//      meramal / ramalan → ramal   root not taught, not carded.
//      dugaan / menduga → duga     root not taught, not carded. Both in this
//        unit, split l1/l1 — see §A5.
//      seolah-olah → olah      ⚠️ `berolahraga` (u18) and `olahraga` (u41) are
//        taught and are a DIFFERENT root (`olah raga`, body-exercise). The
//        `olah` in `seolah-olah` is unrelated. Do not write around it.
//      konon · samar · kabur · kesan · bimbang · mustahil · rupanya ·
//      belum tentu · boleh jadi — roots untaught, or fixed phrases.
//
// §A5. COMPONENT PAIRS AND WHERE THEY SIT. `menduga`/`dugaan` and
//      `memperkirakan`/`perkiraan` are all four in l1; `menebak`/`tebakan` and
//      `meramal`/`ramalan` are split l1/l4 **because l1 was already carrying two
//      pairs** and four in one lesson is a crowd, not a hazard. Every one is
//      measured drill-safe: in each the letter before the shared string is a
//      letter, so `findWholeWord` fails both ways.
//
// §A6. GLOSS TRAPS ROUTED AROUND (convention B8 — measured through the real
//      `normalizeMeaning`):
//      `mengira` (u21) accepts **"to guess"** AND **"a guess"** → `menebak` is
//        glossed "to have a stab at" and `tebakan` "a guessed answer"; neither
//        accepts bare "guess".
//      `ragu` (u21) accepts **"to doubt"** AND **"a doubt"** → `meragukan` is
//        "to cast doubt on", and `keraguan` is NOT CARDED at all.
//      `melihat` (u13) accepts **"to look"** and `tampak` (u49) accepts **"to
//        look a certain way"** AND **"to seem"** → `kelihatan` is NOT CARDED.
//      `ternyata` (u28) IS **"it turns out"** → `rupanya` accepts "as it
//        appears" and "by the look of it", never "so it turns out".
//      `mungkin` (u12) IS **"maybe"** → `kemungkinan` accepts "the chance of it"
//        and "the odds of it", and deliberately NOT "a possibility".
//      `bingung` (u21) IS **"confused"** → `bimbang` is "torn".
//      `curiga` (u31) IS **"suspicious"** → `dugaan` does not accept
//        "a suspicion".
//      `jelas` (u33) IS **"clear"** and `terang` (u8) accepts **"clear"** →
//        `samar` and `kabur` are glossed as their own positives ("indistinct",
//        "blurred"), not as negations of clear.
//
// §A7. ⛔ NOT CARDED, EACH WITH A REASON:
//      `barangkali` — `mungkin` (u12) already owns it: same word, same register.
//        **u49 reached exactly this decision and it still stands.**
//      `kelihatan` — see §A6; u49's crowding reason plus a gloss collision.
//      `nampaknya` — a spelling variant of `tampaknya`, carded in l2.
//      `keraguan` — gloss collision with `ragu` (u21), and `meragukan` already
//        carries the root.
//      `seakan` — the same word as `seolah-olah`, carded in l3, and it also
//        collides with `akan` (u13) on a 4-character prefix, which is exactly
//        the `isInflection` hole convention B5 warns about.
//      `menyangka` — a straight synonym of `mengira` (u21).
//      `terkaan` — a straight synonym of `tebakan`, carded in l4.
//      `tidak pasti` · `secara pasti` — both compositional from `pasti` (u12).
//      `tentunya` — `tentu` (u12) plus the adverbial -nya; same word.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT54 = {
  id: "id-u54",
  lang: "id",
  title: "Dugaan dan kemungkinan",
  order: 54,
  stage: "b1",
  lessons: [
    {
      id: "id-u54l1",
      unit: 54,
      lesson: 1,
      title: "Menduga dan memperkirakan",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Put a claim at arm's length — surmise something, name the supposition, estimate a figure, name the estimate, take a blind stab, and forecast what is coming.",
      items: [
        { id: "id-u54l1-menduga", type: "vocab", front: "menduga", reading: "menduga", meaning: "to surmise", example: { jp: "Polisi menduga bahwa pencuri itu masuk melalui jendela belakang.", en: "The police surmise that the thief got in through the back window." }, accept: ["to suspect", "to conjecture", "to take it that"], drill: { jp: "Kami menduga bahwa harga akan naik", en: "We surmise that the price will rise" }, hint: "muh-noo-DOO-ga, hard g. ⚠️ Mengira, which you know from u21, is a plain guess that may be idle. Menduga is a REASONED inference — you have something to go on, just not proof. It is the standard verb in police and news Indonesian, always with bahwa and a clause: polisi menduga bahwa…" },
        { id: "id-u54l1-dugaan", type: "vocab", front: "dugaan", reading: "dugaan", meaning: "a supposition", example: { jp: "Dugaan dari dokter itu belum terbukti sampai hari ini.", en: "That doctor's supposition is still not proven as of today." }, accept: ["a conjecture", "what one takes to be so", "an unproven guess"], drill: { jp: "Dugaan itu ternyata benar", en: "That supposition turned out to be right" }, hint: "doo-GAH-an. The noun of the card before it — the inference itself. ⚠️ Indonesian newspapers use dugaan to stay on the right side of the law: dugaan korupsi means alleged corruption, with nothing yet decided. Masih dugaan, still only a supposition, is how a careful speaker marks that they have not finished checking." },
        { id: "id-u54l1-memperkirakan", type: "vocab", front: "memperkirakan", reading: "memperkirakan", meaning: "to estimate", example: { jp: "Pemilik toko memperkirakan jumlah pembeli untuk hari raya nanti.", en: "The shop owner estimates the number of buyers for the coming holiday." }, accept: ["to put a figure on", "to reckon roughly", "to gauge"], drill: { jp: "Kami memperkirakan biaya untuk proyek itu", en: "We estimate the cost for that project" }, hint: "muhm-puhr-kee-rah-KAHN, six syllables — the longest word in this unit. ⚠️ Built on kira, the root inside kira-kira, roughly, which you know from u27, and inside mengira, to guess, from u21. This one is the careful one: it produces a NUMBER you are willing to defend." },
        { id: "id-u54l1-perkiraan", type: "vocab", front: "perkiraan", reading: "perkiraan", meaning: "a rough figure", example: { jp: "Perkiraan pertama dari atasan terlalu rendah untuk anggaran itu.", en: "The boss's first estimate is too low for that budget." }, accept: ["a projection", "a reckoning", "a figure arrived at"], drill: { jp: "Perkiraan biaya itu sudah ada di laporan", en: "That cost estimate is already in the report" }, hint: "puhr-kee-RAH-an, four syllables. The noun of the card before it. ⚠️ Perkiraan cuaca is the weather forecast and is the phrase you will hear daily, even though ramalan cuaca — two cards along in l4 — is also used. Perkiraan is the calculated one; a ramalan may be mystical." },
        { id: "id-u54l1-menebak", type: "vocab", front: "menebak", reading: "menebak", meaning: "to have a stab at", example: { jp: "Pelajar itu hanya menebak hasil untuk soal yang paling susah.", en: "That pupil only had a stab at the result for the hardest question." }, accept: ["to hazard an answer", "to try an answer blind", "to venture a guess"], drill: { jp: "Jangan menebak hasil di ujian itu", en: "Do not guess at the result in that exam" }, hint: "muh-nuh-BAHK. ⚠️ Three verbs now and the difference is how much you have to go on: menduga has reasons, mengira has a vague feeling, menebak has NOTHING and admits it. So you menebak a lottery number and you menduga a motive. Coba tebak is the everyday have a guess." },
        { id: "id-u54l1-meramal", type: "vocab", front: "meramal", reading: "meramal", meaning: "to forecast", example: { jp: "Tidak ada orang yang bisa meramal cuaca untuk satu bulan.", en: "Nobody can forecast the weather for a whole month." }, accept: ["to predict", "to foretell", "to read the future"], drill: { jp: "Dia tidak bisa meramal hasil pemilu itu", en: "He cannot forecast the result of that election" }, hint: "muh-RAH-mahl. ⚠️ It covers BOTH the scientific and the mystical, which memperkirakan does not: a weather service and a fortune teller both meramal. The noun is in l4. If you want to be clear you mean the calculated kind, use memperkirakan instead." },
      ],
    },
    {
      id: "id-u54l2",
      unit: 54,
      lesson: 2,
      title: "Rupanya dan tampaknya",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Open a sentence with the source of your confidence — apparently, seemingly, by all appearances, it seems like, allegedly, or they say.",
      items: [
        { id: "id-u54l2-rupanya", type: "vocab", front: "rupanya", reading: "rupanya", meaning: "apparently", example: { jp: "Rupanya dia sudah pergi sebelum rapat itu mulai.", en: "Apparently he had already left before that meeting started." }, accept: ["as it appears", "evidently", "by the look of it"], drill: { jp: "Rupanya mereka sudah tahu berita itu", en: "Apparently they already knew that news" }, hint: "roo-PAH-nya — ny one sound. It opens the sentence and marks what follows as a conclusion you have just drawn from something you noticed. ⚠️ Ternyata, which you know from u28, says it TURNED OUT — the matter is now settled. Rupanya is still an inference, so it leaves room to be wrong." },
        { id: "id-u54l2-agaknya", type: "vocab", front: "agaknya", reading: "agaknya", meaning: "seemingly", example: { jp: "Agaknya hujan akan turun sebelum kami sampai di rumah.", en: "Seemingly it will rain before we get home." }, accept: ["one would think", "on the face of it", "it would appear"], drill: { jp: "Agaknya dia tidak setuju dengan rencana itu", en: "Seemingly he does not agree with that plan" }, hint: "ah-GAHK-nya, hard g. ⚠️ Built on agak, rather, which you know from u14 — and the relation makes sense: agak softens an ADJECTIVE, agaknya softens a WHOLE CLAIM. It is the gentlest of the six adverbs in this lesson and the most polite way to disagree with somebody senior to you." },
        { id: "id-u54l2-tampaknya", type: "vocab", front: "tampaknya", reading: "tampaknya", meaning: "it appears that", example: { jp: "Tampaknya mesin itu rusak sejak minggu lalu.", en: "It appears that machine has been broken since last week." }, accept: ["by all appearances", "to all appearances", "from what one can see"], drill: { jp: "Tampaknya jalan itu masih macet", en: "It appears that road is still jammed" }, hint: "tahm-PAHK-nya. Built on tampak, to appear, which you learned in u49 — so this is the sentence-adverb form of a verb you already have. ⚠️ Nampaknya is the same word with an n and is very common in speech; it is not taught separately because it is one word in two spellings." },
        { id: "id-u54l2-sepertinya", type: "vocab", front: "sepertinya", reading: "sepertinya", meaning: "it seems like", example: { jp: "Sepertinya dia lupa tentang acara di sekolah pagi ini.", en: "It seems like he forgot about the event at school this morning." }, accept: ["it looks as though", "going by appearances", "I get the feeling that"], drill: { jp: "Sepertinya kami akan terlambat sedikit", en: "It seems like we will be a little late" }, hint: "suh-puhr-TEE-nya. Built on seperti, like, which you know from u14. ⚠️ Of the six adverbs here this is the most SPOKEN — it is what a friend says, where a newspaper would write tampaknya. Note the shape of its claim: you are reporting your own impression, so it is the hardest of the six to be wrong about." },
        { id: "id-u54l2-konon", type: "vocab", front: "konon", reading: "konon", meaning: "allegedly", example: { jp: "Konon rumah tua itu sudah kosong sejak zaman kakek saya.", en: "Allegedly that old house has been empty since my grandfather's time." }, accept: ["so the story goes", "reportedly", "according to what people say"], drill: { jp: "Konon pulau itu tidak punya penduduk", en: "Allegedly that island has no inhabitants" }, hint: "KOH-non. ⚠️ It hands the claim entirely to somebody else and quietly declines to vouch for it, so it carries a hint of doubt that reportedly does not: konon kabarnya is the full phrase and it introduces legend as often as news. Use it for stories; use dugaan for allegations in a serious report." },
        { id: "id-u54l2-katanya", type: "vocab", front: "katanya", reading: "katanya", meaning: "they say", example: { jp: "Katanya pasar baru itu lebih murah daripada pasar lama.", en: "They say that new market is cheaper than the old one." }, accept: ["word is", "so people say", "the story is"], drill: { jp: "Katanya cuaca besok akan lebih panas", en: "They say tomorrow's weather will be hotter" }, hint: "KAH-tah-nya. Literally his-word or the-word-of-it, built on kata, a word, which you know from u26. ⚠️ It is the commonest hedge in spoken Indonesian by a wide margin, and it can mean either they say in general or he said in particular — context decides, and nobody minds the ambiguity. Kata dia is the unambiguous he said." },
      ],
    },
    {
      id: "id-u54l3",
      unit: 54,
      lesson: 3,
      title: "Belum tentu dan boleh jadi",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Rate how likely something is — say it does not follow, that it may well be, name the likelihood, rule it out as impossible, say someone behaves as if, and say you are torn.",
      items: [
        { id: "id-u54l3-belumtentu", type: "vocab", front: "belum tentu", reading: "belumtentu", meaning: "not necessarily", example: { jp: "Harga mahal belum tentu sama dengan mutu yang baik.", en: "An expensive price is not necessarily the same as good quality." }, accept: ["that does not follow", "not for certain yet", "not a given"], drill: { jp: "Hasil itu belum tentu benar", en: "That result is not necessarily right" }, hint: "buh-LOOM TUHN-too. Two words you already know — belum from u13 and tentu from u12 — doing a job neither does alone. ⚠️ It is the exact move an English speaker makes with not necessarily: it does not deny the claim, it denies that the claim FOLLOWS. Belum tentu on its own is a complete reply." },
        { id: "id-u54l3-bolehjadi", type: "vocab", front: "boleh jadi", reading: "bolehjadi", meaning: "it may well be", example: { jp: "Boleh jadi mesin itu rusak karena arus listrik yang terlalu kuat.", en: "It may well be that the machine broke because of too strong a current." }, accept: ["possibly so", "it could turn out that", "that is on the cards"], drill: { jp: "Boleh jadi dia sudah pergi tadi", en: "It may well be that he already left earlier" }, hint: "BOH-leh JAH-dee. Again two words you have — boleh from u12 and jadi from u1 — and again a new job: literally it is allowed to become. ⚠️ It is a little more formal and a little more willing than mungkin, which you know: mungkin is a flat maybe, boleh jadi leans towards yes." },
        { id: "id-u54l3-kemungkinan", type: "vocab", front: "kemungkinan", reading: "kemungkinan", meaning: "a likelihood", example: { jp: "Kemungkinan hujan besok sangat kecil menurut perkiraan itu.", en: "The likelihood of rain tomorrow is very small according to that estimate." }, accept: ["the chance of it", "how likely it is", "the odds of it"], drill: { jp: "Kemungkinan itu masih sangat besar", en: "That likelihood is still very big" }, hint: "kuh-moong-KEE-nan, five syllables. The ke-...-an noun off mungkin, maybe, which you know from u12 — so this is the countable version of a word that was only a particle. ⚠️ It is sized with besar and kecil, never with tinggi and rendah: kemungkinan besar, which doubles as the fixed phrase for most likely." },
        { id: "id-u54l3-mustahil", type: "vocab", front: "mustahil", reading: "mustahil", meaning: "impossible", example: { jp: "Mustahil untuk selesai dalam satu hari tanpa dukungan dari tim lain.", en: "It is impossible to finish in one day without backing from another team." }, accept: ["out of the question", "cannot be", "not possible at all"], drill: { jp: "Mustahil untuk sampai sebelum malam", en: "It is impossible to arrive before night" }, hint: "moos-TAH-heel. The flat denial that closes the scale this lesson opened. ⚠️ Tidak mungkin, which you can build from u12, is the everyday it cannot be; mustahil is stronger and a little formal, and it is what you use when you mean impossible in principle. Bukan mustahil, not impossible, is a common and deliberate understatement." },
        { id: "id-u54l3-seolaholah", type: "vocab", front: "seolah-olah", reading: "seolaholah", meaning: "as if", example: { jp: "Dia berbicara seolah-olah dia sudah tahu semua rahasia itu.", en: "He talks as if he already knew all those secrets." }, accept: ["as though", "like it were so", "giving the impression that"], drill: { jp: "Dia diam seolah-olah tidak mendengar kami", en: "He stays quiet as if he did not hear us" }, hint: "suh-oh-lah-OH-lah. A doubled word, so it is one of the reduplications that is its own lexeme rather than a plural — the pattern you met in hati-hati and kira-kira. ⚠️ It marks the clause after it as NOT TRUE, which is the whole point: seolah-olah dia tahu means he does not know. Do not confuse it with seperti, which compares two real things." },
        { id: "id-u54l3-bimbang", type: "vocab", front: "bimbang", reading: "bimbang", meaning: "torn", example: { jp: "Saya masih bimbang antara dua pekerjaan yang sudah menerima saya.", en: "I am still torn between two jobs that have already accepted me." }, accept: ["in two minds", "unable to decide", "wavering"], drill: { jp: "Dia bimbang tentang rencana besok", en: "She is torn about tomorrow's plan" }, hint: "BEEM-bahng. ⚠️ Bingung, which you know from u21, means you do not UNDERSTAND. Bimbang means you understand perfectly and cannot CHOOSE — and the difference matters, because saying saya bingung to an offer sounds as though the offer was unclear. Ragu is about doubting a claim; bimbang is about hesitating over a decision." },
      ],
    },
    {
      id: "id-u54l4",
      unit: 54,
      lesson: 4,
      title: "Samar dan meragukan",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say how firm the evidence is — cast doubt on a claim, call a memory or outline indistinct, call a picture blurred, report the impression you got, and name a forecast and a guessed answer.",
      items: [
        { id: "id-u54l4-meragukan", type: "vocab", front: "meragukan", reading: "meragukan", meaning: "to cast doubt on", example: { jp: "Banyak anggota meragukan perkiraan dari laporan pertama itu.", en: "Many members cast doubt on the estimate in that first report." }, accept: ["to call into question", "to throw doubt on", "to question whether"], drill: { jp: "Kami meragukan dugaan dari pihak itu", en: "We cast doubt on that side's supposition" }, hint: "muh-rah-goo-KAHN. Built on ragu, to doubt, which you know from u21 — and the -kan turns your private doubt into something you DO to somebody else's claim. ⚠️ Saya ragu is I am unsure; saya meragukan laporan itu is I do not trust that report, which is a public act and much stronger." },
        { id: "id-u54l4-samar", type: "vocab", front: "samar", reading: "samar", meaning: "indistinct", example: { jp: "Suara dari ponsel itu samar karena sinyal sangat kurang.", en: "The voice on that mobile is indistinct because the signal is very poor." }, accept: ["faint", "hard to make out", "only half visible"], drill: { jp: "Bunyi dari mesin itu masih samar", en: "The sound from that machine is still faint" }, hint: "SAH-mar. Something is there but you cannot resolve it — a sound, a shape, a memory. ⚠️ Gelap, which you know from u8, means there is no light at all; samar means there IS light and it is not enough. Samar-samar is the doubled adverb: samar-samar saya ingat, I vaguely remember." },
        { id: "id-u54l4-kabur", type: "vocab", front: "kabur", reading: "kabur", meaning: "blurred", example: { jp: "Foto dari kamera lama itu kabur dan tidak jelas.", en: "The photo from that old camera is blurred and not clear." }, accept: ["out of focus", "hazy", "not sharp"], drill: { jp: "Gambar di layar itu kabur sekali", en: "The picture on that screen is very blurred" }, hint: "KAH-boor. ⚠️ Built on the same root as kabut, fog, which you know from u46, and it keeps the picture: a kabur image looks as though there is mist between you and it. Samar is too faint to see; kabur is bright enough but with no edges. It is also used of rules: aturan yang kabur, a vague rule." },
        { id: "id-u54l4-kesan", type: "vocab", front: "kesan", reading: "kesan", meaning: "an impression", example: { jp: "Kesan pertama dari wawancara itu sangat baik untuk semua pihak.", en: "The first impression from that interview was very good for all parties." }, accept: ["how it struck one", "the feeling one got", "an impression formed"], drill: { jp: "Kesan saya tentang kota itu baik", en: "My impression of that city is good" }, hint: "kuh-SAHN. What something left with you, before you have reasoned about it. ⚠️ Kesan pertama, first impression, is the phrase you will meet most. Keep it apart from pendapat, an opinion, which you know from u21: a pendapat you can defend with reasons, a kesan you merely report. Terkesan means impressed." },
        { id: "id-u54l4-ramalan", type: "vocab", front: "ramalan", reading: "ramalan", meaning: "a prediction", example: { jp: "Ramalan cuaca untuk akhir minggu ini tidak baik untuk perjalanan.", en: "The weather forecast for this weekend is not good for travelling." }, accept: ["what is foretold", "a foretelling", "a prophecy"], drill: { jp: "Ramalan itu ternyata tidak benar", en: "That forecast turned out not to be right" }, hint: "rah-MAH-lan. The noun off meramal, in l1. ⚠️ Ramalan cuaca and perkiraan cuaca both mean weather forecast and you will hear both; ramalan is also what a fortune teller sells, so in any other context it carries a whiff of the unscientific. For a figure you calculated, say perkiraan." },
        { id: "id-u54l4-tebakan", type: "vocab", front: "tebakan", reading: "tebakan", meaning: "a guessed answer", example: { jp: "Tebakan dia tentang jumlah peserta ternyata hampir tepat.", en: "His guessed answer about the number of participants turned out to be nearly exact." }, accept: ["a stab at it", "an answer ventured", "a shot in the dark"], drill: { jp: "Tebakan itu hanya satu dari banyak", en: "That guess is only one of many" }, hint: "tuh-BAH-kan. The noun off menebak, in l1. ⚠️ It is also the word for a riddle in a game: main tebakan is to play guessing games, and a children's tebakan is a brain-teaser. Terkaan means the same thing and is not taught separately — one concept does not need two fronts." },
      ],
    },
  ],
};
