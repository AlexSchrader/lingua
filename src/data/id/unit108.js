// ID Unit 108 — Tata bahasa 11: penghubung wacana dan pelembutan klaim — B2
// ("Grammar 11 — discourse connectives and softening a claim")
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 2 (u101–u113). Band notes BB1–BB8 are in unit101.js's header; unit1's
// A1 conventions, unit21's A2 set and unit51's B1 set (B1–B12) all still bind.
//
// §P1. BOUNDARY, AS BRIEFED AND AS MEASURED. u54 owns the HEDGING ADVERBS
//      (`agaknya` `rupanya` `tampaknya` `sepertinya` `mustahil` `menduga`
//      `kemungkinan` `boleh jadi` `belum tentu` `seolah-olah` `bimbang`), u73
//      owns the BUREAUCRATIC connectives (`tersebut` `sebagaimana`
//      `berdasarkan` `perihal` `maka` `demikian` `kiranya`), u29 owns the
//      ORDINARY ones (`selain itu` `apalagi` `akibatnya` `oleh karena itu`
//      `entah` `namun`). This unit takes the **discourse-MANAGEMENT** layer
//      none of them has: marking how wide a claim is, how firmly you hold it,
//      where the summing-up starts, and what you are setting aside.
//
// §P2. ⚠️ **TWELVE CANDIDATES REFUSED, AND THE REASON IS THE SAME EACH TIME:
//      A TAUGHT TWIN.** Band note BB5 is the rule; this slot is where it bit
//      hardest, because Indonesian has four or five forms of every discourse
//      move and the course already owns one of each. Named, with the twin:
//        `setidaknya`(u28) owns *if nothing else* → **`paling tidak` and
//          `sekurang-kurangnya` and `setidak-tidaknya` all REFUSED.** Three
//          candidates, one taught word, no card.
//        `relatif`(u53) → **`nisbi` REFUSED** (the literary twin).
//        `sepertinya` `agaknya` `tampaknya` `rupanya` (all u54) → **
//          `kelihatannya` REFUSED.** Four seeming-words is already three too
//          many; a fifth would be indefensible.
//        `oleh karena itu`(u29, *for that reason*) → **`maka dari itu`,
//          `oleh sebab itu` and `karenanya` all REFUSED.** The whole
//          *therefore* space is spent — `jadi`(u1), `maka`(u73),
//          `sehingga`(u29) and `akibatnya`(u29) as well — which is why lesson 4
//          is about SETTING ASIDE rather than about consequence.
//        `pokoknya`(u71, *the main thing is*) and `intinya`(u71) → kept apart
//          from this unit's summing-up words by gloss (§P4).
//
// §P3. ⚠️ **THIRTEEN OF THIS UNIT'S 24 FRONTS ARE MULTI-WORD. I FOLDED EVERY
//      ONE** — unit1 §9's collision class is the space, and `pada dasarnya`
//      folds to "padadasarnya" where a clash would be silent. Run after
//      authoring: `reading-taken.mjs id` → **0 duplicated**. Readings:
//        padadasarnya · padaprinsipnya · padaumumnya · secaragarisbesar ·
//        dalamhalini · sejauhini · dapatdikatakan · bukanberarti ·
//        sedikitbanyak · hanyasaja · padaakhirnya · terlepasdari ·
//        terlebihlagi · sematamata.
//      **And `FIRES-INSIDE` is a warning, not a block** (band note BB6): every
//      one of these contains a taught single word, and so do u69's shipped
//      `dengan kata lain` and `antara lain`. What would kill a card is the front
//      missing from its own drill — checked by `scope-strict-drills` (0) and by
//      `drill-corpus.test.mjs`.
//
// §P4. GLOSS COLLISIONS FOUND BY `gloss-taken.mjs id` BEFORE WRITING, AND FIXED.
//      A duplicate `meaning` makes one card unanswerable and the defect is at
//      ZERO corpus-wide, so this was run twice. Caught, with the owner:
//        "at the very least" → `minimal`(u53) · "in short" →
//        `pokoknya`(u71) · "in the end" → `akhirnya`(u28) · "hence" →
//        `oleh karena itu`(u29) · "what is more" → `bahkan`(u28) +
//        `selain itu`(u29) · "if nothing else" → `setidaknya`(u28) ·
//        "when all is said and done" → `toh`(u71) · "the upshot was" →
//        `akibatnya`(u29).
//      Each is now glossed by its exact discourse function instead.
//
// §P5. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1 §3 / unit51 B5):
//      singkatnya → singkat — `singkat` is NOT taught. Clean.
//      ringkasnya → ringkas — NOT taught. Clean.
//      pendeknya → pendek ⚠️ `pendek` IS taught (u10, "short"). Carded: a short
//        thing and *to put it shortly* are two words. Drill-safe: "pendeknya"
//        holds "pendek" at index 0 followed by `n`, so no whole-word match.
//      kesimpulannya → kesimpulan ⚠️ `kesimpulan` IS taught (u49). Carded as the
//        DISCOURSE MARKER, glossed as the move and not the thing — and the -nya
//        is glued, so findWholeWord cannot match `kesimpulan` inside it.
//      selebihnya → lebih ⚠️ `lebih` IS taught (u14). Index 2, preceded by `e`,
//        followed by `n`. Safe.
//      sebaliknya → balik — `balik` is NOT taught; `kembali`(u18) is the taught
//        word. Clean.
//      sepenuhnya → penuh ⚠️ `penuh` IS taught (u10, "full"). Index 2, preceded
//        by `e`, followed by `n`. Safe.
//      sebatas → batas ⚠️ `batas` IS taught (u36, "a limit"). Index 2, preceded
//        by `e`. Safe. ⚠️ `keterbatasan`(u107, mine) also holds `batas` — three
//        cards off one root across two units, each a different word class, each
//        checked.
//      semata-mata → mata ⚠️ `mata` IS taught (u11, "an eye"), and **the hyphen
//        is not a letter**, so `mata` DOES match as a whole word inside this
//        front (unit1 §5's warning). Checked: `mata` is a u11 A1 noun whose own
//        drill does not contain this word, and this card's drill contains the
//        full hyphenated front, so neither cloze misfires. Flagged so the next
//        seat adding a hyphenated front runs the same check.
//      sedikit banyak → sedikit(u1) + banyak(u1), both taught, both whole words
//        inside. FIRES-INSIDE, warning only (§P3).
export const ID_UNIT108 = {
  id: "id-u108",
  lang: "id",
  title: "Tata bahasa 11 — penghubung wacana dan pelembutan klaim",
  order: 108,
  stage: "b2",
  lessons: [
    {
      id: "id-u108l1",
      unit: 108,
      lesson: 1,
      title: "Menetapkan cakupan klaim",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Mark how wide a claim is before you make it — fundamentally, in principle, generally speaking, in broad outline, in this particular case, and so far.",
      items: [
        { id: "id-u108l1-padadasarnya", type: "vocab", front: "pada dasarnya", reading: "padadasarnya", meaning: "fundamentally", example: { jp: "Pada dasarnya semua anggota setuju tetapi mereka masih berdebat tentang biaya.", en: "Fundamentally all the members agree, but they are still arguing about cost." }, accept: ["at bottom", "when you get down to it", "in essence"], drill: { jp: "Pada dasarnya semua anggota setuju tentang hal itu", en: "Fundamentally all the members agree about that matter" }, hint: "PAH-dah dah-SAHR-nyah, three words' worth of sound in two. Inside it are pada (u36) and dasar, a base. ⚠️ It signals a BUT is coming: pada dasarnya agrees with the big picture so that it can disagree with the detail, which is exactly what the example does. Indonesians use it to be polite about a disagreement." },
        { id: "id-u108l1-padaprinsipnya", type: "vocab", front: "pada prinsipnya", reading: "padaprinsipnya", meaning: "in principle", example: { jp: "Pada prinsipnya pemerintah menerima rencana itu meskipun belum ada uang.", en: "In principle the government accepts that plan, even though there is no money yet." }, accept: ["as a matter of principle", "in theory at least", "as far as the principle goes"], drill: { jp: "Pada prinsipnya pemerintah menerima rencana itu", en: "In principle the government accepts that plan" }, hint: "PAH-dah preen-SEEP-nyah. On prinsip, a principle, which you know from u58. ⚠️ Keep it apart from the card above: pada dasarnya is about the ESSENCE of a thing, pada prinsipnya is about the RULE — and in official Indonesian it is almost a polite no, because agreeing in principle is how a ministry agrees without committing anything." },
        { id: "id-u108l1-padaumumnya", type: "vocab", front: "pada umumnya", reading: "padaumumnya", meaning: "generally speaking", example: { jp: "Pada umumnya warga desa lebih percaya kepada kepala desa daripada kepada koran.", en: "Generally speaking, village residents trust the village head more than the newspaper." }, accept: ["as a rule", "for the most part", "in the general run of things"], drill: { jp: "Pada umumnya warga desa lebih percaya kepala desa", en: "Generally speaking village residents trust the village head more" }, hint: "PAH-dah oo-MOOM-nyah. On umum, general or public, which you know from u28. ⚠️ It is a statistical hedge, not a logical one: it says *most, not all*, and it is the honest way to make a sweeping claim. Indonesian will happily follow it with a tetapi ada yang, but there are some who — in fact the two go together." },
        { id: "id-u108l1-secaragarisbesar", type: "vocab", front: "secara garis besar", reading: "secaragarisbesar", meaning: "in broad outline", example: { jp: "Secara garis besar laporan itu baik tetapi ada dua angka yang salah.", en: "In broad outline that report is good, but there are two wrong figures." }, accept: ["roughly speaking", "in rough terms", "taking the big shape of it"], drill: { jp: "Secara garis besar laporan itu baik dan jelas", en: "In broad outline that report is good and clear" }, hint: "suh-CHAH-rah GAH-rees BUH-sahr — c is CH, three words. Literally *by way of a big line*: garis is a line, so the picture is a sketch rather than a drawing. ⚠️ secara on its own turns almost any noun into an adverb — secara resmi, officially; secara langsung, directly — so this phrase is also your first worked example of a very productive frame." },
        { id: "id-u108l1-dalamhalini", type: "vocab", front: "dalam hal ini", reading: "dalamhalini", meaning: "in this particular case", example: { jp: "Dalam hal ini sekolah itu tidak bisa menolak anak dari desa lain.", en: "In this particular case that school cannot refuse a child from another village." }, accept: ["as regards this matter", "on this point", "for this instance"], drill: { jp: "Dalam hal ini sekolah itu tidak bisa menolak", en: "In this particular case that school cannot refuse" }, hint: "DAH-lahm HAHL EE-nee. Inside it are dalam (u30), hal (u36) and ini (u12) — all words you have, which is why the phrase is worth carding rather than its parts: it is the standard way to NARROW a general rule to one case, and a learner who builds it from scratch usually says something else. It is the opposite move from the card above it." },
        { id: "id-u108l1-sejauhini", type: "vocab", front: "sejauh ini", reading: "sejauhini", meaning: "so far", example: { jp: "Sejauh ini belum ada orang yang menjawab surat dari kantor kami.", en: "So far nobody has answered the letter from our office." }, accept: ["up to now", "as things stand to date", "thus far"], drill: { jp: "Sejauh ini belum ada orang yang menjawab surat", en: "So far nobody has answered the letter" }, hint: "suh-JAH-ooh EE-nee. On jauh, far, which you know from u11 — Indonesian measures elapsed time as distance, exactly as English does with *so far*. ⚠️ It is a TIME hedge, not a scope one: sejauh ini quietly admits that the situation may change. Note the near-twin sejauh saya tahu, as far as I know, which hedges knowledge instead." },
      ],
    },
    {
      id: "id-u108l2",
      unit: 108,
      lesson: 2,
      title: "Melembutkan dan membatasi klaim",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Hold a claim loosely — say it can be said, deny an inference somebody might draw, concede a partial truth, limit something to a boundary, say not entirely, and add the one objection that remains.",
      items: [
        { id: "id-u108l2-dapatdikatakan", type: "vocab", front: "dapat dikatakan", reading: "dapatdikatakan", meaning: "it can be said that", example: { jp: "Dapat dikatakan bahwa rencana itu gagal sejak bulan yang pertama.", en: "It can be said that the plan failed from the first month on." }, accept: ["one may fairly say", "it is fair to say", "arguably"], drill: { jp: "Dapat dikatakan bahwa rencana itu gagal sejak awal", en: "It can be said that the plan failed from the start" }, hint: "DAH-paht dee-kah-tah-KAHN. Inside it are dapat, can, which you know, and dikatakan, the passive of to say. ⚠️ **This is the most useful single phrase in the unit for written Indonesian**: it lets you make a strong claim without owning it, and it is how an essay or a report says *arguably*. It takes bahwa plus a clause almost every time." },
        { id: "id-u108l2-bukanberarti", type: "vocab", front: "bukan berarti", reading: "bukanberarti", meaning: "that does not mean that", example: { jp: "Bukan berarti kami setuju dengan semua kata di dalam laporan itu.", en: "That does not mean we agree with every word in that report." }, accept: ["which is not to say that", "it does not follow that", "do not take that to mean"], drill: { jp: "Bukan berarti kami setuju dengan semua kata itu", en: "That does not mean we agree with every one of those words" }, hint: "BOO-kahn buh-RAHR-tee. On bukan (u12) and arti, a meaning (u26). ⚠️ Its job is to block an INFERENCE, which is a different move from denying a fact: you accept what was said and refuse what somebody wants to conclude from it. In an argument this is the most common way an Indonesian speaker defends a nuanced position." },
        { id: "id-u108l2-sedikitbanyak", type: "vocab", front: "sedikit banyak", reading: "sedikitbanyak", meaning: "to some extent", example: { jp: "Sedikit banyak semua orang di kantor sudah tahu tentang masalah itu.", en: "To some extent everybody in the office already knew about that problem." }, accept: ["more or less", "in some measure", "to a degree"], drill: { jp: "Sedikit banyak semua orang di kantor sudah tahu", en: "To some extent everybody in the office already knew" }, hint: "suh-DEE-keet BAH-nyahk — two words, and you know both from u1. ⚠️ Read it literally and it says *a little a lot*, which is the joke: Indonesian puts the two extremes side by side to mean somewhere between. It is a genuine hedge and extremely common in speech, and no single word in the course does the same job." },
        { id: "id-u108l2-sebatas", type: "vocab", front: "sebatas", reading: "sebatas", meaning: "only as far as", example: { jp: "Rencana itu sebatas makanan dan obat dan tidak sampai kepada uang.", en: "That plan goes only as far as food and medicine, and does not extend to money." }, accept: ["limited to", "no further than", "confined to"], drill: { jp: "Rencana itu sebatas makanan dan obat saja", en: "That plan goes only as far as food and medicine" }, hint: "suh-BAH-tahs. On batas, a limit, which you know from u36. ⚠️ Keep it apart from hanya, only, which you know from u1: hanya counts things out, sebatas draws a BOUNDARY and says the thing stops there. Sebatas tahu, only as far as knowing, is a common way of denying involvement — I knew, that is all." },
        { id: "id-u108l2-sepenuhnya", type: "vocab", front: "sepenuhnya", reading: "sepenuhnya", meaning: "entirely", example: { jp: "Saya belum sepenuhnya percaya kepada angka di dalam laporan yang baru itu.", en: "I do not entirely trust the figures in that new report yet." }, accept: ["wholly", "completely and without reserve", "in full"], drill: { jp: "Saya belum sepenuhnya percaya kepada angka itu", en: "I do not entirely trust those figures yet" }, hint: "suh-puh-NOOH-nyah. On penuh, full, which you know from u10, in the se-…-nya frame u106 taught you. ⚠️ **It earns its place in a hedging lesson because it is nearly always NEGATED** — belum sepenuhnya, tidak sepenuhnya — and *not entirely* is one of the most useful hedges there is. Used positively it is emphatic: sepenuhnya salah, completely wrong." },
        { id: "id-u108l2-hanyasaja", type: "vocab", front: "hanya saja", reading: "hanyasaja", meaning: "it is just that", example: { jp: "Rencana itu baik hanya saja biaya terlalu besar untuk desa yang kecil.", en: "The plan is good; it is just that the cost is too big for a small village." }, accept: ["the only trouble is", "except that", "with the one problem that"], drill: { jp: "Rencana itu baik hanya saja biaya terlalu besar", en: "The plan is good; it is just that the cost is too big" }, hint: "HAH-nyah SAH-jah — ny one sound. Both words are u1 and u12, and the pair is the point. ⚠️ It introduces the SINGLE reservation after a compliment, which is a very Indonesian way to criticise: praise first, then hanya saja. Keep it apart from tetapi, but, which you know — tetapi opposes, hanya saja concedes almost everything and then adds one thing." },
      ],
    },
    {
      id: "id-u108l3",
      unit: 108,
      lesson: 3,
      title: "Meringkas dan menyimpulkan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Signal that the summing-up has started — put it shortly, put it briefly, the short of it, the conclusion drawn, in the final reckoning, and as for everything else.",
      items: [
        { id: "id-u108l3-singkatnya", type: "vocab", front: "singkatnya", reading: "singkatnya", meaning: "put shortly", example: { jp: "Singkatnya kami harus mulai lagi dari awal dan mencari uang baru.", en: "Put shortly, we have to start again from the beginning and find new money." }, accept: ["in brief", "to cut it short", "briefly"], drill: { jp: "Singkatnya kami harus mulai lagi dari awal", en: "Put shortly, we have to start again from the beginning" }, hint: "SEENG-kaht-nyah. On singkat, brief, which is not carded in this course. ⚠️ **This lesson is one frame three times over: adjective + -nya = to put it that way.** singkat → singkatnya, ringkas → ringkasnya, pendek → pendeknya. Learn the frame and the three cards become one thing. Keep it apart from pokoknya (u71), the main thing is, which picks out a point rather than shortening." },
        { id: "id-u108l3-ringkasnya", type: "vocab", front: "ringkasnya", reading: "ringkasnya", meaning: "to put it briefly", example: { jp: "Ringkasnya ada tiga masalah dan semua tentang uang dari pemerintah.", en: "To put it briefly, there are three problems and they are all about government money." }, accept: ["in summary", "summing up", "in a nutshell"], drill: { jp: "Ringkasnya ada tiga masalah dan semua tentang uang", en: "To put it briefly, there are three problems and all about money" }, hint: "REENG-kahs-nyah. On ringkas, compact or condensed. ⚠️ The most WRITTEN of the three: a ringkasan is a summary, and ringkasnya is what an author says before giving one. Singkatnya is what you say in a meeting; ringkasnya is what you write at the end of a section. The difference is register, not meaning." },
        { id: "id-u108l3-pendeknya", type: "vocab", front: "pendeknya", reading: "pendeknya", meaning: "the short of it is", example: { jp: "Pendeknya tidak ada orang yang mau membayar biaya itu.", en: "The short of it is that nobody wants to pay that cost." }, accept: ["the upshot is", "to make a long story short", "in a word"], drill: { jp: "Pendeknya tidak ada orang yang mau membayar", en: "The short of it is that nobody wants to pay" }, hint: "PEN-dek-nyah. ⚠️ You know pendek, short, from u10 — and in this frame the physical adjective becomes a discourse move, which is the whole trick of the lesson. Pendeknya is the most SPOKEN of the three and the bluntest: it signals that what follows is the point and the rest was detail." },
        { id: "id-u108l3-kesimpulannya", type: "vocab", front: "kesimpulannya", reading: "kesimpulannya", meaning: "the conclusion drawn is", example: { jp: "Kesimpulannya aturan yang baru itu belum siap untuk semua sekolah.", en: "The conclusion drawn is that the new rule is not ready for every school." }, accept: ["in conclusion", "what it all comes to is", "the finding is"], drill: { jp: "Kesimpulannya aturan baru itu belum siap sekarang", en: "The conclusion drawn is that the new rule is not ready now" }, hint: "kuh-seem-poo-LAHN-nyah, five syllables, and note the double n in writing. ⚠️ You know kesimpulan, a conclusion, from u49 — this is the same noun doing a different job: with -nya it stops being a thing and becomes a SIGNPOST at the head of a sentence. It is heavier than the three cards above it, because a kesimpulan is reasoned, not just shorter." },
        { id: "id-u108l3-padaakhirnya", type: "vocab", front: "pada akhirnya", reading: "padaakhirnya", meaning: "in the final reckoning", example: { jp: "Pada akhirnya semua pihak menerima kesepakatan itu meskipun tidak ada yang senang.", en: "In the final reckoning all parties accepted that agreement, even though nobody was happy." }, accept: ["ultimately", "when everything had run its course", "in the last analysis"], drill: { jp: "Pada akhirnya semua pihak menerima kesepakatan itu", en: "In the final reckoning all parties accepted that agreement" }, hint: "PAH-dah ah-KHEER-nyah. ⚠️ You know akhirnya from u28, which is *finally* and marks the last event in a sequence. Pada akhirnya is not about sequence at all: it is about the OUTCOME after everything has been weighed, which is why it so often has a meskipun clause after it. Different job, and the difference is worth a card." },
        { id: "id-u108l3-selebihnya", type: "vocab", front: "selebihnya", reading: "selebihnya", meaning: "as for the rest", example: { jp: "Dua masalah sudah selesai dan selebihnya masih belum jelas.", en: "Two problems are already settled and as for the rest, they are still not clear." }, accept: ["everything else", "the remainder", "whatever is left over"], drill: { jp: "Dua masalah sudah selesai dan selebihnya belum jelas", en: "Two problems are settled and as for the rest, not clear yet" }, hint: "suh-LUH-beeh-nyah. On lebih, more, which you know from u14, so the literal sense is *what is over and above*. ⚠️ Keep it apart from sisa, a remainder, which you know from u27: a sisa is physical leftovers you could point at, selebihnya is a discourse move that sweeps up everything you are not going to list. It belongs in a summing-up lesson for exactly that reason." },
      ],
    },
    {
      id: "id-u108l4",
      unit: 108,
      lesson: 4,
      title: "Mengesampingkan dan menambahkan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Set something aside or pile something on — regardless of it, the other way round, more than that, and then what, purely and simply, and so it turned out.",
      items: [
        { id: "id-u108l4-terlepasdari", type: "vocab", front: "terlepas dari", reading: "terlepasdari", meaning: "regardless of", example: { jp: "Terlepas dari biaya rencana itu masih baik untuk warga di desa itu.", en: "Regardless of the cost, that plan is still good for the residents of that village." }, accept: ["setting aside", "quite apart from", "irrespective of"], drill: { jp: "Terlepas dari biaya rencana itu masih baik", en: "Regardless of the cost, that plan is still good" }, hint: "tuhr-luh-PAHS DAH-ree. Literally *released from* — lepas is to come free, and the ter- makes it a state. ⚠️ It does the move English does with *leaving that aside*: you acknowledge a point and then refuse to let it decide the question. Keep it apart from meskipun (u29), even though, which concedes the point and keeps it in play." },
        { id: "id-u108l4-sebaliknya", type: "vocab", front: "sebaliknya", reading: "sebaliknya", meaning: "the other way round", example: { jp: "Kami berharap harga turun tetapi sebaliknya harga naik lagi pada bulan ini.", en: "We hoped the price would fall but, the other way round, it rose again this month." }, accept: ["on the contrary", "conversely", "the opposite happened"], drill: { jp: "Kami berharap harga turun tetapi sebaliknya harga naik", en: "We hoped the price would fall but instead it rose" }, hint: "suh-bah-LEEK-nyah. The root balik is to turn over, which is not carded. ⚠️ Two jobs, both common: *on the contrary*, correcting what was just said, and *vice versa*, as in dan sebaliknya at the end of a sentence. Keep it apart from namun (u29), nevertheless, which merely opposes — sebaliknya says the reverse is what happened." },
        { id: "id-u108l4-terlebihlagi", type: "vocab", front: "terlebih lagi", reading: "terlebihlagi", meaning: "and more than that", example: { jp: "Jalan itu rusak dan terlebih lagi lampu di jalan itu sudah mati.", en: "The road is damaged and, more than that, the lights on it are already dead." }, accept: ["on top of which", "and worse still", "furthermore"], drill: { jp: "Jalan itu rusak dan terlebih lagi lampu mati", en: "The road is damaged and more than that the lights are dead" }, hint: "tuhr-luh-BEEH LAH-gee. On lebih (u14) and lagi (u5). ⚠️ You already have selain itu and apalagi from u29, and bahkan from u28. This one ESCALATES: what follows is worse or bigger than what came before, which selain itu does not imply. So a complaint builds with terlebih lagi and a list grows with selain itu." },
        { id: "id-u108l4-lantas", type: "vocab", front: "lantas", reading: "lantas", meaning: "and then what", example: { jp: "Semua orang diam lantas siapa yang akan berbicara kepada pemerintah?", en: "Everybody is silent — and then who is going to speak to the government?" }, accept: ["so then", "and after that", "whereupon"], drill: { jp: "Semua orang diam lantas siapa yang akan berbicara", en: "Everybody is silent, and then who is going to speak" }, hint: "LAHN-tahs. ⚠️ Two uses and the second is the interesting one: plainly *and then*, like kemudian, which you know; but placed before a question it carries exasperation — lantas bagaimana?, so what now? That rhetorical use is why it sits in a discourse lesson rather than with the time words." },
        { id: "id-u108l4-sematamata", type: "vocab", front: "semata-mata", reading: "sematamata", meaning: "purely and simply", example: { jp: "Dia menolak semata-mata karena uang dan bukan karena aturan.", en: "He refused purely and simply because of money, and not because of the rule." }, accept: ["solely", "for no other reason than", "nothing but"], drill: { jp: "Dia menolak semata-mata karena uang itu", en: "He refused purely and simply because of that money" }, hint: "suh-MAH-tah MAH-tah — the doubling is the word, not a plural, and yes, mata also means eye (u11); the two are unrelated. ⚠️ It is an exclusive: semata-mata says *this reason and no other*, which is a stronger claim than hanya, only, which you know from u1. It is also nearly always negated in the second half of the sentence, as in the example." },
        { id: "id-u108l4-alhasil", type: "vocab", front: "alhasil", reading: "alhasil", meaning: "and so it turned out that", example: { jp: "Alhasil rencana besar itu berhenti setelah dua bulan dan tidak ada orang yang bertanggung jawab.", en: "And so it turned out that the big plan stopped after two months and nobody was responsible." }, accept: ["in the event", "the outcome being that", "and so in the end"], drill: { jp: "Alhasil rencana besar itu berhenti setelah dua bulan", en: "And so it turned out the big plan stopped after two months" }, hint: "ahl-HAH-seel. An Arabic loan — al- is the Arabic article and hasil, a result, is the word you know from u24 standing inside it. ⚠️ Keep it apart from akibatnya (u29), as a result, which states a CAUSE and effect: alhasil just narrates the outcome, often with a shrug. It sits at the head of a sentence and is slightly literary." },
      ],
    },
  ],
};
