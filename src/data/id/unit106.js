// ID Unit 106 — Tata bahasa 9: pengandaian dan hal yang tak terjadi — B2
// ("Grammar 9 — hypotheticals and things that never happened")
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 2 (u101–u113). Band notes BB1–BB8 are in unit101.js's header; unit1's
// A1 conventions, unit21's A2 set and unit51's B1 set (B1–B12) all still bind.
//
// §P1. ⚠️ **THIS SLOT WAS THE MOST PRE-SPENT IN THE BAND AND THE BRIEF SAID SO.
//      IT WAS RIGHT, AND WORSE THAN STATED.** Probed on this branch, the handed-
//      down candidate list came back **6 of 16 free**. Named so nobody re-probes
//      them, with the owning unit:
//        `seandainya` u29 (if it were so) · `sekiranya` u69 (were it to be the
//        case) · `asalkan` u29 (as long as) · `seharusnya` u37 (ought to have) ·
//        `semestinya` u61 (as it ought to be) · `jika` `apabila` `bilamana`
//        `agar` u73 · `kalau` `supaya` `asal` A1/A2 · `padahal` u29 (⚠️ the
//        brief's correction is right — u29, not u71) · `niscaya` u73.
//      **And four more I found on top of the brief's list:** `andaikata` u69
//      (supposing that) · `biarpun` u69 · `mustahil` u54 · `kemungkinan` u54.
//      So Indonesian's whole stock of hypothetical CONJUNCTIONS is already
//      taught, twice over in places.
//
// §P2. **WHAT THIS UNIT TEACHES INSTEAD, AND WHY IT IS STILL THE SLOT'S JOB.**
//      The conjunctions are spent; the things you can DO with a hypothetical
//      are not. Four moves, one per lesson, none of them available to a learner
//      with 2,088 words:
//        l1 **Talk about a supposition as an object** — set one up (`misalkan`),
//           say a text rests on one (`mengandaikan`), name one (`pengandaian`),
//           and grade how sure you are of what follows (`barangkali`
//           `tentunya` `pastilah`).
//        l2 **Concede a condition and still hold the line** — `kalaupun`
//           `sekalipun` `sungguhpun` `sepanjang` `manakala` `tanpa harus`.
//        l3 **Say what OUGHT to have been** — `patut` `sepatutnya`
//           `selayaknya` `sewajarnya` `hendaknya` `alangkah`. ⚠️ Three of these
//           are the **se-…-nya adverb pattern off a taught adjective**
//           (`patut` → `sepatutnya`, `layak`(u37) → `selayaknya`,
//           `wajar`(u28) → `sewajarnya`), and putting them in one lesson is
//           deliberate: the pattern is the lesson, and the learner leaves able
//           to build it off any adjective they own.
//        l4 **Say it never happened** — `urung` `terlanjur` `sia-sia` `luput`
//           `penyesalan` `tadinya`. This is the one English has no grammar for
//           either, so the Indonesian words carry it alone.
//
// §P3. REGISTER / VARIANT REFUSALS SPECIFIC TO THIS UNIT (band note BB5 is the
//      general rule). Each probed FREE and is still NOT carded, because a
//      learner who knows the taught twin already knows it:
//        `walau` — a clipping of taught `walaupun` (u69).
//        `mestinya` — taught `semestinya` (u61) minus its se-.
//        `andai` · `andaikan` · `andaipun` — all of taught `seandainya` (u29)
//          and `andaikata` (u69). **Only the VERB `mengandaikan` and the NOUN
//          `pengandaian` shipped** — a different word class is a different word
//          (unit1 §3), and being able to say *the report assumes* is a real
//          capability the conjunctions do not give.
//        `umpamanya` — a twin of taught `misalnya` (u29, "for example"). But
//          `misalkan` SHIPPED: `misalnya` exemplifies, `misalkan` sets up a
//          hypothetical, and Indonesian keeps them apart.
//        `setidak-tidaknya` — of taught `setidaknya` (u28).
//        `nyaris` `hampir` — both taught (u53, u13); no third near-word.
//
// §P4. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (unit1 §3 / unit51 B5):
//      mengandaikan / pengandaian → andai — `andai` is NOT taught as a front
//        and is not carded (§P3); the taught forms are `seandainya` and
//        `andaikata`, and `andai` is not a whole word inside either (both have
//        a letter on the right), nor are they whole words inside mine.
//      misalkan → misal ⚠️ `misalnya` IS taught (u29). Drill-safe: the shared
//        string is `misal`, which is a whole word in NEITHER (`misalkan` has
//        `k` on the right, `misalnya` has `n`), so no cloze can fire across.
//      tentunya → tentu ⚠️ `tentu` IS taught (u12, "of course"). Carded:
//        `tentu` answers a question, `tentunya` draws a consequence inside a
//        sentence. Drill-safe: "tentunya" holds "tentu" at index 0 followed by
//        `n`, so findWholeWord does not match.
//      pastilah → pasti ⚠️ `pasti` IS taught (u12, "certainly"). Same
//        mechanics: the -lah is glued on, so no whole-word match either way.
//      sepanjang → panjang ⚠️ `panjang` IS taught (u10, "long"). A length and a
//        condition are two words. Drill-safe: index 2, preceded by `e`.
//      sepatutnya → patut — `patut` is carded in THIS unit, same lesson (l3),
//        deliberately (§P2). Drill-safe: "sepatutnya" holds "patut" at index 2,
//        preceded by `e` and followed by `n`.
//      selayaknya → layak ⚠️ `layak` IS taught (u37, "worth doing"). Index 2,
//        preceded by `e`, followed by `n`. Safe.
//      sewajarnya → wajar ⚠️ `wajar` IS taught (u28, "only natural"). Index 2,
//        preceded by `e`, followed by `n`. Safe.
//      hendaknya → hendak — `hendak` is NOT taught and is NOT carded here.
//      kalaupun → kalau ⚠️ `kalau` IS taught (u12). The -pun is glued on, so no
//        whole-word match in either direction.
//      sekalipun → sekali ⚠️ `sekali` IS taught (u2, "once / very"). Glued -pun
//        again; safe both ways. ⚠️ **GLOSS WATCH:** taught `meskipun`(u29) is
//        glossed "even though" and `walaupun`(u69) "even if", so this card is
//        glossed **"for all that"** — a duplicate `meaning` string makes one
//        card unanswerable (`type:produce` shows the gloss and accepts one
//        front), and that defect is at ZERO corpus-wide.
//      penyesalan → menyesal ⚠️ `menyesal` IS taught (u31, "to regret").
//        Carded as the NOUN and glossed "a lasting regret", never "regret".
//        Drill-safe: the shared string is the root `sesal`, carded nowhere.
//      tadinya → tadi ⚠️ `tadi` IS taught (u13, "earlier"). Glued -nya; safe.
//      tanpa harus → tanpa(u36) + harus(u12), both taught and both whole words
//        inside the phrase. **FIRES-INSIDE, which is a warning and not a block**
//        (band note BB6) — u69 already ships `dengan kata lain` and `antara
//        lain` on the same footing. Fold is "tanpaharus"; 0 duplicated readings.
export const ID_UNIT106 = {
  id: "id-u106",
  lang: "id",
  title: "Tata bahasa 9 — pengandaian dan hal yang tak terjadi",
  order: 106,
  stage: "b2",
  lessons: [
    {
      id: "id-u106l1",
      unit: 106,
      lesson: 1,
      title: "Memasang sebuah andaian",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Set up a supposition and grade what follows from it — invite someone to suppose, say what a claim quietly assumes, name the assumption itself, and mark a conclusion as possible, expected or certain.",
      items: [
        { id: "id-u106l1-misalkan", type: "vocab", front: "misalkan", reading: "misalkan", meaning: "let us suppose that", example: { jp: "Misalkan harga naik dua kali apa yang akan terjadi pada keluarga miskin?", en: "Suppose the price doubles — what will happen to poor families?" }, accept: ["supposing", "say for the sake of argument", "imagine that"], drill: { jp: "Misalkan harga naik dua kali lagi", en: "Suppose the price doubles again" }, hint: "mee-SAHL-kan. ⚠️ You already know misalnya from u29, for example, and these two are NOT interchangeable: misalnya introduces a real case you are citing, misalkan invites the listener to imagine one that may not exist. It opens a sentence and is followed by the whole supposed situation." },
        { id: "id-u106l1-mengandaikan", type: "vocab", front: "mengandaikan", reading: "mengandaikan", meaning: "to rest on an assumption", example: { jp: "Laporan itu mengandaikan bahwa semua orang di desa punya listrik.", en: "That report assumes that everybody in the village has electricity." }, accept: ["to presuppose", "to take something as given", "to posit"], drill: { jp: "Laporan itu mengandaikan bahwa semua orang kaya", en: "That report assumes that everybody is rich" }, hint: "muh-ngahn-dah-ee-KAHN, five syllables. ⚠️ You already have seandainya (u29) and andaikata (u69) for *if it were so* — this is the same root turned into a VERB, and that is the new capability: a report, an argument or a plan mengandaikan something, which is how you accuse it of resting on something untrue. It takes bahwa plus a clause." },
        { id: "id-u106l1-pengandaian", type: "vocab", front: "pengandaian", reading: "pengandaian", meaning: "a hypothetical case", example: { jp: "Pengandaian seperti itu tidak berguna untuk rencana yang nyata.", en: "A hypothetical like that is no use for a real plan." }, accept: ["a supposition as a thing", "a what-if", "a hypothetical scenario"], drill: { jp: "Pengandaian seperti itu tidak berguna sekarang", en: "A hypothetical like that is no use now" }, hint: "puh-ngahn-dah-ee-AHN, five syllables. The noun off the card before it — the supposition itself, which you can now point at, count and reject. ⚠️ Keep it apart from dugaan, a guess, which u54 gave you: a dugaan is what you think IS true, a pengandaian is a case you set up knowing it might not be." },
        { id: "id-u106l1-barangkali", type: "vocab", front: "barangkali", reading: "barangkali", meaning: "it may well be that", example: { jp: "Barangkali dia sudah tahu tetapi tidak mau bilang kepada kami.", en: "It may well be that he already knows but does not want to tell us." }, accept: ["perhaps", "possibly", "for all we know"], drill: { jp: "Barangkali dia sudah tahu tetapi diam", en: "It may well be that he already knows but stays quiet" }, hint: "bah-rahng-KAH-lee, four syllables. Literally thing-times, which explains nothing and is just how the word grew. ⚠️ You know mungkin from u12, maybe — barangkali is its slightly softer, more spoken cousin and leans towards *I suspect but will not insist*. It sits at the FRONT of a sentence; mungkin can sit anywhere." },
        { id: "id-u106l1-tentunya", type: "vocab", front: "tentunya", reading: "tentunya", meaning: "which naturally means", example: { jp: "Kalau hujan turun terus tentunya jalan di desa itu akan rusak.", en: "If the rain keeps falling, that naturally means the village road will be damaged." }, accept: ["it follows of course that", "needless to say", "as one would expect"], drill: { jp: "Kalau hujan terus tentunya jalan itu rusak", en: "If the rain keeps on, the road will naturally be damaged" }, hint: "tuhn-TOO-nyah — ny is one sound. ⚠️ You know tentu from u12, of course — and the difference is positional and real: tentu is an ANSWER you give (Tentu! Of course!), tentunya sits inside a sentence and draws a consequence out of what was just said. A learner who only has tentu cannot do that move." },
        { id: "id-u106l1-pastilah", type: "vocab", front: "pastilah", reading: "pastilah", meaning: "it must surely be", example: { jp: "Pastilah dia sudah sampai di rumah pada jam ini karena jalan sepi.", en: "He must surely have reached home by this hour, because the roads are empty." }, accept: ["it has to be the case that", "surely", "there is no doubt that"], drill: { jp: "Pastilah dia sudah sampai di rumah sekarang", en: "He must surely have reached home now" }, hint: "pahs-TEE-lah. ⚠️ You know pasti from u12, certainly. The -lah on the end is Indonesian's emphatic particle, and this is the first card that teaches it: it adds *and I am telling you so*. Pastilah is a DEDUCTION from evidence, not knowledge — you say it when you are inferring, which is exactly what this lesson is about." },
      ],
    },
    {
      id: "id-u106l2",
      unit: 106,
      lesson: 2,
      title: "Kalaupun dan sepanjang",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Grant a condition without giving up the point — even if it happened, for all that, true though it is, so long as it lasts, if and when it comes, and without having to.",
      items: [
        { id: "id-u106l2-kalaupun", type: "vocab", front: "kalaupun", reading: "kalaupun", meaning: "even if it did", example: { jp: "Kalaupun uang itu datang besok kami sudah terlambat untuk membayar.", en: "Even if that money arrives tomorrow we are already too late to pay." }, accept: ["and even supposing it does", "granted that it might", "even in that case"], drill: { jp: "Kalaupun uang itu datang besok kami terlambat", en: "Even if that money arrives tomorrow we are late" }, hint: "kah-lau-POON — the au is one ow sound. ⚠️ You know kalau, if, from u12, and -pun is the particle that adds *even*. The point of the word is that it CONCEDES something in order to beat it: you accept the condition and then say it changes nothing. That is why it nearly always has a tetapi or a sudah after it." },
        { id: "id-u106l2-sekalipun", type: "vocab", front: "sekalipun", reading: "sekalipun", meaning: "for all that", example: { jp: "Sekalipun dia sudah meminta maaf saya belum bisa melupakan hal itu.", en: "For all that he has apologised, I cannot forget the matter yet." }, accept: ["notwithstanding that", "in spite of the fact that", "all the same"], drill: { jp: "Sekalipun dia sudah meminta maaf saya belum lupa", en: "For all that he has apologised, I have not forgotten" }, hint: "suh-kah-lee-POON, four syllables. ⚠️ You already have meskipun (u29) and walaupun (u69) for *even though* and *even if*, and this is the third of the family — stronger and more written, with a flavour of *not even once*. It has a second use that is worth knowing: placed AFTER a noun it means *even that one* — anak kecil sekalipun tahu, even a small child knows." },
        { id: "id-u106l2-sungguhpun", type: "vocab", front: "sungguhpun", reading: "sungguhpun", meaning: "true though it is that", example: { jp: "Sungguhpun aturan itu sudah baru banyak orang di kota belum tahu.", en: "True though it is that the rule is already new, many people in the city do not know yet." }, accept: ["granted that", "while it is the case that", "albeit"], drill: { jp: "Sungguhpun aturan itu baru banyak orang belum tahu", en: "True though the rule is new, many people do not know" }, hint: "soong-gooh-POON — ngg is the hum plus a hard g. Built on sungguh, really or truly. ⚠️ **This one is formal and written** — you will meet it in an editorial and almost never in speech, where meskipun does the work. It is carded because reading B2 Indonesian prose without it is a gap, not because you need to produce it." },
        { id: "id-u106l2-sepanjang", type: "vocab", front: "sepanjang", reading: "sepanjang", meaning: "so long as", example: { jp: "Saya akan tetap tinggal di sini sepanjang pekerjaan ini masih ada.", en: "I will keep living here so long as this job still exists." }, accept: ["for as long as", "provided that it lasts", "throughout the time that"], drill: { jp: "Saya tetap tinggal di sini sepanjang pekerjaan ada", en: "I keep living here so long as the job exists" }, hint: "suh-pahn-JAHNG. ⚠️ You know panjang, long, from u10 — and se-…- on a measurement word means *for the whole extent of*. So it has two live senses: TIME, as here and in sepanjang hari, all day long; and CONDITION, sepanjang saya tahu, as far as I know. Keep it apart from taught asalkan (u29), as long as, which is purely conditional and has no time sense at all." },
        { id: "id-u106l2-manakala", type: "vocab", front: "manakala", reading: "manakala", meaning: "if and when", example: { jp: "Manakala ada masalah besar warga selalu datang ke rumah kepala desa.", en: "If and when there is a big problem, the residents always come to the village head's house." }, accept: ["whenever it happens that", "at such time as", "in the event that"], drill: { jp: "Manakala ada masalah besar warga datang ke sini", en: "If and when there is a big problem, residents come here" }, hint: "mah-nah-KAH-lah, four syllables. Inside it is mana, where or which, which you know. ⚠️ It combines *if* and *when* in one word — the condition is treated as something that will happen sooner or later, which neither kalau nor ketika quite does. Formal and written, like the card before it; a contract or a regulation is where you will meet it." },
        { id: "id-u106l2-tanpaharus", type: "vocab", front: "tanpa harus", reading: "tanpaharus", meaning: "without having to", example: { jp: "Sekarang kami bisa membayar tanpa harus datang ke kantor pemerintah.", en: "Now we can pay without having to come to the government office." }, accept: ["with no need to", "and not have to", "without the obligation of"], drill: { jp: "Sekarang kami bisa membayar tanpa harus datang", en: "Now we can pay without having to come" }, hint: "TAHN-pah HAH-roos, two words with a space. ⚠️ You know tanpa (u36) and harus (u12) separately, and the pair is worth learning as one unit because tanpa alone cannot take a verb cleanly — tanpa datang sounds bare, tanpa harus datang is what Indonesians say. It is the standard phrase for describing a convenience, so you will read it in every advertisement for an online service." },
      ],
    },
    {
      id: "id-u106l3",
      unit: 106,
      lesson: 3,
      title: "Yang semestinya terjadi",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Say what ought to have been the case — that something is fitting, as it should properly be, as is deserved, as is only natural, as is to be hoped, and how very much it is so.",
      items: [
        { id: "id-u106l3-patut", type: "vocab", front: "patut", reading: "patut", meaning: "fitting", example: { jp: "Tidak patut berbicara seperti itu kepada orang yang lebih tua.", en: "It is not fitting to speak like that to someone older." }, accept: ["proper", "becoming", "appropriate to the situation"], drill: { jp: "Tidak patut berbicara seperti itu kepada orang tua", en: "It is not fitting to speak like that to older people" }, hint: "PAH-toot. ⚠️ You know pantas from u28, which is glossed *no wonder* and is used of things that make sense; patut is about what is RIGHT rather than what is explicable. Tidak patut is a moral judgement and a common one. It is also the root of the next card and the pattern this lesson teaches — patut dicatat, worth noting, is a phrase you will meet in every report." },
        { id: "id-u106l3-sepatutnya", type: "vocab", front: "sepatutnya", reading: "sepatutnya", meaning: "as is proper", example: { jp: "Sepatutnya dia memberi kabar sebelum pergi jauh dari rumah.", en: "He should properly have let someone know before going far from home." }, accept: ["as would have been right", "as decency requires", "in the way one should"], drill: { jp: "Sepatutnya dia memberi kabar sebelum pergi jauh", en: "He should properly have let someone know before going far" }, hint: "suh-pah-TOOT-nyah. ⚠️ **This is the pattern of the lesson: se- + adjective + -nya = in the way that the adjective says it should be.** Built on the card before it. And it is DIFFERENT from taught semestinya (u61) and seharusnya (u37): those two say an obligation was missed, sepatutnya says what was DECENT was missed. The reproach is social, not procedural." },
        { id: "id-u106l3-selayaknya", type: "vocab", front: "selayaknya", reading: "selayaknya", meaning: "as is deserved", example: { jp: "Selayaknya pekerjaan yang berat dia mendapat uang yang lebih besar.", en: "As heavy work deserves, he gets more money." }, accept: ["as is only right for", "in the way something merits", "as befits"], drill: { jp: "Selayaknya pekerjaan yang berat dia mendapat lebih", en: "As heavy work deserves, he gets more" }, hint: "suh-lah-YAHK-nyah. The same se-…-nya pattern, this time on layak, worth doing, which you know from u37. ⚠️ The sense is DESERT: selayaknya says the thing matches what it has earned. It also works as a comparison — selayaknya seorang guru, as a teacher should, which is how a review praises or scolds somebody for their role." },
        { id: "id-u106l3-sewajarnya", type: "vocab", front: "sewajarnya", reading: "sewajarnya", meaning: "as is only natural", example: { jp: "Sewajarnya anak muda ingin coba hal baru di kota besar.", en: "As is only natural, young people want to try new things in a big city." }, accept: ["as one would expect of anybody", "in the ordinary course of things", "naturally enough"], drill: { jp: "Sewajarnya anak muda ingin coba hal baru", en: "As is only natural, young people want to try new things" }, hint: "suh-wah-JAHR-nyah. The third of the pattern, on wajar, only natural, which you know from u28. ⚠️ **Three cards, one pattern — and that is the point of putting them together: once you see se-…-nya on patut, layak and wajar you can build it off any adjective you own.** Sewajarnya excuses rather than reproaches: it says nobody should be surprised." },
        { id: "id-u106l3-hendaknya", type: "vocab", front: "hendaknya", reading: "hendaknya", meaning: "it is to be hoped that", example: { jp: "Hendaknya semua orang membaca aturan itu sebelum menulis surat.", en: "It is to be hoped that everybody reads the rule before writing a letter." }, accept: ["please let it be that", "one would wish that", "it is desirable that"], drill: { jp: "Hendaknya semua orang membaca aturan itu", en: "It is to be hoped that everybody reads that rule" }, hint: "huhn-DAHK-nyah. From hendak, to intend, which is not carded here. ⚠️ This is the gentlest instruction in Indonesian: it tells somebody to do a thing while pretending to merely hope they will. You will meet it at the bottom of official notices, where English would write *kindly* or *you are requested to*. Keep it apart from sebaiknya (u37), had better, which is advice to one person." },
        { id: "id-u106l3-alangkah", type: "vocab", front: "alangkah", reading: "alangkah", meaning: "how very", example: { jp: "Alangkah susah tinggal di kota besar tanpa keluarga dan tanpa uang.", en: "How very hard it is to live in a big city with no family and no money." }, accept: ["how greatly", "what a very", "how extremely"], drill: { jp: "Alangkah susah tinggal di kota besar", en: "How very hard it is to live in a big city" }, hint: "ah-LAHNG-kah — ng one hum. ⚠️ It is an EXCLAMATION and it only ever comes first, followed by an adjective: alangkah susah, alangkah baik, alangkah sayang. Keep it apart from betapa, which does nearly the same job and is not carded here, and from sangat, very, which you know: sangat states a degree, alangkah expresses feeling about it. It belongs in this lesson because the feeling is almost always regret." },
      ],
    },
    {
      id: "id-u106l4",
      unit: 106,
      lesson: 4,
      title: "Yang tak jadi dan yang terlewat",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about what did not happen — a plan that came to nothing, having already gone too far to undo it, effort spent for nothing, something slipping past unnoticed, lasting regret, and what you had been going to do.",
      items: [
        { id: "id-u106l4-urung", type: "vocab", front: "urung", reading: "urung", meaning: "to come to nothing after all", example: { jp: "Rencana pergi ke pantai itu urung karena hujan turun sejak pagi.", en: "That plan to go to the beach came to nothing because it rained from the morning on." }, accept: ["to fall through", "not to happen in the end", "to be called off"], drill: { jp: "Rencana pergi ke pantai itu urung karena hujan", en: "That plan to go to the beach fell through because of rain" }, hint: "OO-roong, ng one hum. ⚠️ It is not failure and not cancellation: you know gagal (u24), to fail, and batal (u79), cancelled. Urung is softer than both — the thing simply did not come off, nobody decided and nobody failed. It is also used of a person changing their mind at the last second: dia urung pergi, in the end he did not go." },
        { id: "id-u106l4-terlanjur", type: "vocab", front: "terlanjur", reading: "terlanjur", meaning: "to have already gone too far to undo", example: { jp: "Saya terlanjur bilang kepada dia dan sekarang tidak bisa menolak.", en: "I had already told him, and now I cannot refuse." }, accept: ["to be past the point of turning back", "to have let it get too far", "to be already committed"], drill: { jp: "Saya terlanjur bilang kepada dia dan tidak bisa menolak", en: "I had already told him and cannot refuse" }, hint: "tuhr-lahn-JOOR. ⚠️ Note the ter- again: something happened to you, not by design. The word carries real regret — terlanjur basah, already soaked, is a fixed phrase meaning *in for a penny, in for a pound*. There is no single English word, which is why it earns a card: it means *and it is too late now*, packed into one adverb." },
        { id: "id-u106l4-siasia", type: "vocab", front: "sia-sia", reading: "siasia", meaning: "for nothing", example: { jp: "Semua pekerjaan kami sia-sia karena laporan itu hilang di jalan.", en: "All our work was for nothing because the report was lost on the way." }, accept: ["in vain", "to no purpose", "wasted"], drill: { jp: "Semua pekerjaan kami sia-sia karena laporan hilang", en: "All our work is for nothing because the report is lost" }, hint: "SEE-ah SEE-ah — the doubling IS the word, like was-was, not a plural (unit 1's reduplication rule). ⚠️ You know percuma from u28, pointless: percuma judges the attempt as not worth making, sia-sia says the attempt WAS made and produced nothing. So percuma comes before and sia-sia comes after. Tidak sia-sia, not in vain, is how Indonesians praise a hard effort that worked." },
        { id: "id-u106l4-luput", type: "vocab", front: "luput", reading: "luput", meaning: "to slip past unnoticed", example: { jp: "Satu nama luput dari daftar dan tidak ada orang yang tahu sampai sekarang.", en: "One name slipped off the list and nobody knew until now." }, accept: ["to escape notice", "to be missed out", "to get past unseen"], drill: { jp: "Satu nama luput dari daftar dan tidak ada yang tahu", en: "One name slipped off the list and nobody knows" }, hint: "LOO-poot. ⚠️ Careful: it is not lupa, to forget, which you know from u21 — the two look alike and mean opposite sides of the same event. If something luput, nobody noticed it was there; if you lupa, you knew and it left your head. Luput dari perhatian, to escape attention, is the standard phrase." },
        { id: "id-u106l4-penyesalan", type: "vocab", front: "penyesalan", reading: "penyesalan", meaning: "a lasting regret", example: { jp: "Penyesalan dia datang terlalu lambat untuk mengubah apa pun.", en: "His regret came too late to change anything." }, accept: ["remorse", "the feeling of wishing one had not", "contrition"], drill: { jp: "Penyesalan dia datang terlalu lambat untuk berubah", en: "His regret came too late for anything to change" }, hint: "puh-nyuh-SAH-lan — ny one sound. ⚠️ Built on menyesal, to regret, which you know from u31 — but menyesal is the moment and penyesalan is the thing you carry. That is why it can be a subject: penyesalan datang, regret arrives. The fixed phrase penyesalan selalu datang terlambat, regret always comes too late, is close to a proverb." },
        { id: "id-u106l4-tadinya", type: "vocab", front: "tadinya", reading: "tadinya", meaning: "it was going to be", example: { jp: "Tadinya kami mau pergi pagi tetapi mobil itu rusak di jalan.", en: "We had been going to leave in the morning but the car broke down on the way." }, accept: ["originally", "as it was meant to be", "at first the plan was"], drill: { jp: "Tadinya kami mau pergi pagi tetapi mobil rusak", en: "We had been going to leave in the morning but the car broke" }, hint: "TAH-dee-nyah. ⚠️ You know tadi from u13, earlier today — tadinya is not a time word at all: it names a plan that got overtaken. **This is the closest Indonesian gets to the English past conditional**, and it does it with one adverb and no change to the verb. Tadinya X tetapi Y is the frame, and it is how you say *I was going to, but*." },
      ],
    },
  ],
};
