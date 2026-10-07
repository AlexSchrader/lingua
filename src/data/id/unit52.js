// ID Unit 52 — Dampak, syarat, dan risiko ("Impact, condition and risk") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 1 (u51–u63). unit51.js's 12 B1 band conventions BIND this file, along
// with unit1.js's 12 A1 and unit21.js's 10 A2 conventions.
// RETITLED AND NARROWED from "Cause and consequence".
//
// §A1. WHY THE TITLE CHANGED. "Cause and consequence" stands on **12 already-
//      taught words**, and most of them are the exact connectives the slot would
//      teach: u26 `sebab` `akibat` `hasil`; u29 `sehingga` `oleh karena itu`
//      `akibatnya` `berkat` `gara-gara` `supaya`; u37 `menyebabkan` `pengaruh`
//      `menghasilkan`. A learner at u52 can already build "because X, therefore
//      Y", and u29 is an entire unit of subordinating connectors.
//      **What is missing is the vocabulary of IMPACT, CONDITION and RISK** — a
//      noun for the hit a thing takes, a knock-on effect, a trigger, a factor, a
//      chain of them, a requirement that must be met, something conditional, and
//      the whole family of risk/threat/vulnerable/immune. **Zero of those exist
//      in 1,200 words**, and they are what B1 reading actually needs: no news
//      report, contract or warning label is written without them.
//
// §A2. SCOPE BOUNDARY WITH u29 (A2). u29 owns the CONNECTIVES — the words that
//      join two clauses (`sehingga` `oleh karena itu` `seandainya` `asalkan`
//      `supaya` `selama`). **This unit takes no connective.** It takes NOUNS and
//      VERBS that name the relation, so the learner can talk ABOUT a cause
//      rather than only build one. `andai` is therefore NOT carded — it is the
//      same word as taught `seandainya` (u29); see §A6.
//      Boundary with u37 (A2): u37 owns `menyebabkan` (to cause) and `pengaruh`
//      (influence). This unit takes no second word for causing or influencing.
//      Boundary with u60 (this block): **u60 owns the PROBLEM AND ITS FIX**
//      (obstacle, crisis, solution, to tackle); u52 owns the CAUSAL RELATION
//      itself. `risiko` is here because a risk is a relation between an action
//      and a future harm, not a problem you are already in.
//
// §A3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (convention B5 / unit1 §3):
//      berdampak → dampak        `dampak` is carded in THIS unit (l1). Noun and
//        the state of having one. Drill-safe, measured: "berdampak" holds
//        "dampak" at index 3, preceded by `r`, so findWholeWord matches in
//        neither direction. Split across lessons anyway (l1 both, adjacent) —
//        see §A5.
//      mengakibatkan → akibat    ⚠️ `akibat` IS taught (u26, "a consequence")
//        and `akibatnya` (u29, "consequently"). A third card off the root, which
//        B5/§3 permits "where each is a different word": a consequence is a
//        thing, consequently is a connective, and mengakibatkan is a transitive
//        verb. Drill-safe: "mengakibatkan" holds "akibat" at index 4, preceded
//        by `g`.
//      memicu / pemicu → picu    root not taught, not carded.
//      penentu → menentukan      `menentukan` is carded in THIS unit (l2). The
//        shared string is `tentu`, which **IS taught** (u12, "certainly") — so
//        this is three cards in the root's family. ⚠️ Drill-safe in all
//        directions: "menentukan" holds "tentu" at index 2 preceded by `e`, and
//        "penentu" holds it at index 2 preceded by `e`. Named in both hints.
//      memenuhi → penuh          ⚠️ `penuh` IS taught (u10, "full"). Meeting a
//        requirement and being full are plainly two words, and the metaphor is
//        the same one English uses in "fulfil". Drill-safe: "memenuhi" holds no
//        whole-word "penuh" at all (the nasal assimilation eats the p).
//      mengancam / ancaman → ancam   root not taught, not carded. Both are in
//        l4 and the shared string is `ancam`. Drill-safe: "ancaman" holds
//        "mengancam" nowhere and vice versa.
//      bersyarat → syarat        `syarat` is carded in THIS unit (l3). Noun and
//        the adjective off it. Drill-safe: "bersyarat" holds "syarat" at index 3,
//        preceded by `r`.
//      berujung → ujung          ⚠️ `ujung` IS taught (u36, "the end/tip").
//        Drill-safe: "berujung" holds "ujung" at index 3, preceded by `r`.
//      imbas · faktor · rantai · risiko · berisiko · rentan · kebal · taruhan ·
//      menanggung · menimbulkan · seumpama — roots untaught, or loanwords.
//
// §A4. GLOSS TRAPS ROUTED AROUND (convention B8 — measured through the real
//      `normalizeMeaning`, which strips a leading "to " AND "a/an/the"):
//      `akibat` (u26) IS **"a consequence"** → so `konsekuensi` is NOT CARDED at
//        all (§A6), and `imbas` is "a knock-on effect".
//      `keadaan` (u26) IS **"a situation"** → so `kondisi` is NOT CARDED (§A6).
//      `kalau` (u12) accepts **"supposing"** → `seumpama` is glossed "let us
//        say", and no card in this unit accepts "supposing".
//      `bertemu` (u2) accepts **"to meet"** → `memenuhi` is "to meet a
//        requirement" (which normalizes to a different string) and its accept[]
//        never says bare "to meet".
//      `sebab` (u26) accepts **"to cause"** → no card here accepts it.
//      `menghasilkan` (u37) IS **"to produce"** → `menimbulkan` accepts
//        "to produce as a result", never bare "to produce".
//      `bahaya` (u38) IS **"danger"** → `risiko` and `ancaman` both route around
//        it; neither accepts bare "danger".
//      `memutuskan` (u21) IS **"to decide"** → `menentukan` is "to determine"
//        and accepts "to decide the outcome", never bare "to decide".
//
// §A5. THREE SAME-LESSON COMPONENT PAIRS ARE DELIBERATE AND ALL THREE ARE
//      MEASURED SAFE: `dampak`/`berdampak` (l1), `memicu`/`pemicu` (l2),
//      `mengancam`/`ancaman` (l4). In each, the letter immediately before the
//      shared string is a letter, so `findWholeWord` fails both ways and neither
//      cloze can take the other's blank. A noun and the verb or state off it are
//      different parts of speech, so these are not the me-/bare VALENCY pairs
//      convention A6 says to split across lessons.
//      `syarat`/`bersyarat` are in l3 together for the same reason.
//
// §A6. ⛔ NOT CARDED, EACH WITH A REASON:
//      `konsekuensi` — `akibat` (u26) already IS "a consequence" and the loanword
//        is a straight synonym in the same register. Named in `imbas`'s hint.
//      `kondisi` — `keadaan` (u26) already IS "a situation". Same word.
//      `andai` — the same word as taught `seandainya` (u29), minus the -nya.
//        `seumpama` is carded instead because it is a genuinely different move:
//        inviting the listener to assume, rather than marking a conditional.
//      `mengarah` — off `arah` (u23, "a direction"); `berujung` already owns
//        where a thing ends up.
//      `berakar` — off `akar` (u46, "a root"); the metaphor is not idiomatic in
//        Indonesian the way it is in English.
//      `terpenuhi` — the ter- state of `memenuhi`, carded in l3. Named in its
//        hint instead; a third form off `penuh` earns nothing.
//      `dipengaruhi` · `berpengaruh` — both off `pengaruh` (u37), which u37 owns.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT52 = {
  id: "id-u52",
  lang: "id",
  title: "Dampak, syarat, dan risiko",
  order: 52,
  stage: "b1",
  lessons: [
    {
      id: "id-u52l1",
      unit: 52,
      lesson: 1,
      title: "Dampak dan imbas",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Say what effect something had — name the impact, say a thing has one, name a knock-on effect, and say what a decision gave rise to or ended up as.",
      items: [
        { id: "id-u52l1-dampak", type: "vocab", front: "dampak", reading: "dampak", meaning: "an impact", example: { jp: "Dampak dari banjir itu masih besar di seluruh daerah.", en: "The impact of that flood is still big across the whole district." }, accept: ["the effect it has", "how hard something hits", "a knock-on"], drill: { jp: "Dampak hujan itu sangat besar", en: "The impact of that rain is very big" }, hint: "DAHM-pahk. ⚠️ You already know akibat, a consequence, and the two are not the same: an akibat is WHAT happened next, a dampak is HOW HARD it landed. So berita buruk has an akibat; a flood has a dampak. Dampak lingkungan, environmental impact, is the phrase on every project document." },
        { id: "id-u52l1-berdampak", type: "vocab", front: "berdampak", reading: "berdampak", meaning: "to have an impact", example: { jp: "Hukum baru itu berdampak pada semua pedagang kecil di pasar.", en: "That new law has an impact on all the small traders in the market." }, accept: ["to tell on something", "to leave a mark on", "to make itself felt"], drill: { jp: "Rencana itu berdampak pada semua karyawan", en: "That plan has an impact on all the employees" }, hint: "buhr-DAHM-pahk. The ber- form of the card before it, so it is to HAVE a dampak rather than to be one. ⚠️ It takes pada or terhadap for whatever is hit, both of which you already know — never a bare object. Berdampak buruk and berdampak baik are the two you will read most." },
        { id: "id-u52l1-imbas", type: "vocab", front: "imbas", reading: "imbas", meaning: "a knock-on effect", example: { jp: "Imbas dari masalah di pabrik itu sampai ke toko kami.", en: "The knock-on effect of the problem at that factory reached our shop." }, accept: ["a spillover", "what it carries over to", "a side effect"], drill: { jp: "Imbas masalah itu sampai ke kantor", en: "The knock-on effect of that problem reaches the office" }, hint: "EEM-bahs. The effect that arrives SECOND-HAND, having travelled from somewhere else — so a factory closing has a dampak on its workers and an imbas on the shops around it. ⚠️ Konsekuensi exists as a loanword but it is a straight synonym of akibat, which you already know, so it is not taught here." },
        { id: "id-u52l1-menimbulkan", type: "vocab", front: "menimbulkan", reading: "menimbulkan", meaning: "to give rise to", example: { jp: "Keterangan yang kurang jelas itu menimbulkan banyak pertanyaan.", en: "That insufficiently clear statement gives rise to a lot of questions." }, accept: ["to bring about", "to set off", "to produce as a result"], drill: { jp: "Berita itu menimbulkan masalah baru", en: "That news gives rise to a new problem" }, hint: "muh-neem-bool-KAHN, four syllables. Off timbul, to surface — so what it describes is a thing coming UP out of something else. ⚠️ Menyebabkan, which you know from u37, points at the cause; menimbulkan points at what appeared. Menimbulkan masalah and menimbulkan pertanyaan are the two commonest pairings by far." },
        { id: "id-u52l1-mengakibatkan", type: "vocab", front: "mengakibatkan", reading: "mengakibatkan", meaning: "to result in", example: { jp: "Hujan besar kemarin mengakibatkan banjir di jalan raya.", en: "Yesterday's heavy rain resulted in flooding on the main road." }, accept: ["to lead to", "to end in", "to have as its outcome"], drill: { jp: "Kecelakaan itu mengakibatkan luka berat", en: "That accident resulted in a serious injury" }, hint: "muh-ngah-kee-baht-KAHN, five syllables. ⚠️ Built on akibat, a consequence, which you already know, and on akibatnya, consequently, from u29 — three words off one root, each doing a different job. This one is the transitive verb, and it is nearly always used of something bad: a storm, an error, an accident." },
        { id: "id-u52l1-berujung", type: "vocab", front: "berujung", reading: "berujung", meaning: "to end up in", example: { jp: "Perselisihan antara dua pihak itu berujung di pengadilan.", en: "The dispute between those two parties ended up in court." }, accept: ["to finish in", "to come out at", "to wind up as"], drill: { jp: "Rapat panjang itu berujung tanpa kesepakatan", en: "That long meeting ended up without an agreement" }, hint: "buhr-OO-joong. Built on ujung, the end or tip of a thing, which you know from u36 — so it is literally to have its tip at. ⚠️ It describes WHERE a long process arrived, not what caused it, so it takes a place or an outcome: berujung di pengadilan, berujung pada kekecewaan. Selesai is simply finished; berujung says what it finished AS." },
      ],
    },
    {
      id: "id-u52l2",
      unit: 52,
      lesson: 2,
      title: "Pemicu dan faktor",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Take a cause apart — name what triggered a thing, call it a trigger, list a factor among several, say which one is decisive, and describe a chain of them.",
      items: [
        { id: "id-u52l2-memicu", type: "vocab", front: "memicu", reading: "memicu", meaning: "to trigger", example: { jp: "Satu kata dari atasan memicu perselisihan besar di dalam tim.", en: "One word from the boss triggered a big dispute inside the team." }, accept: ["to spark off", "to set in motion", "to touch off"], drill: { jp: "Berita itu memicu perselisihan di kota", en: "That news triggers a dispute in the city" }, hint: "muh-MEE-choo — c is CH. The root picu is the trigger of a gun, and Indonesian uses the same picture English does. ⚠️ A pemicu is SMALL and what follows is LARGE: that is the whole meaning. Menyebabkan, which you know, names a proportionate cause; memicu names the spark." },
        { id: "id-u52l2-pemicu", type: "vocab", front: "pemicu", reading: "pemicu", meaning: "a trigger", example: { jp: "Pemicu dari kecelakaan itu masih belum jelas untuk polisi.", en: "The trigger for that accident is still not clear to the police." }, accept: ["what sets it off", "the spark", "the thing that started it"], drill: { jp: "Pemicu masalah itu sangat kecil", en: "The trigger of that problem is very small" }, hint: "puh-MEE-choo. The pe- noun off the card before it — the thing that does the triggering. You will meet it most in reporting and in medicine: pemicu banjir, pemicu sakit kepala. Do not use it for a cause of proportionate size; that is a sebab or a penyebab." },
        { id: "id-u52l2-faktor", type: "vocab", front: "faktor", reading: "faktor", meaning: "a factor", example: { jp: "Cuaca hanya satu faktor dari masalah harga tahun ini.", en: "The weather is only one factor in this year's price problem." }, accept: ["one of the things at work", "an element in it", "a contributing part"], drill: { jp: "Harga adalah faktor paling penting", en: "Price is the most important factor" }, hint: "FAHK-tor. A loanword with no -s plural: dua faktor, two factors. ⚠️ The word carries a quiet admission that there are OTHERS — satu faktor means do not stop looking. Faktor utama is the main factor and faktor penentu, the next card but one, is the decisive one." },
        { id: "id-u52l2-menentukan", type: "vocab", front: "menentukan", reading: "menentukan", meaning: "to determine", example: { jp: "Satu faktor itu menentukan hasil dari seluruh percobaan kami.", en: "That one factor determines the result of our whole experiment." }, accept: ["to decide the outcome", "to be decisive for", "to fix how it turns out"], drill: { jp: "Cuaca menentukan harga sayur di pasar", en: "The weather determines the price of vegetables at the market" }, hint: "muh-nuhn-too-KAHN. ⚠️ Built on tentu, certainly, which you know from u12 — so it is to MAKE a thing certain. Keep it well apart from memutuskan, to decide, which you also know: a PERSON memutuskan, but a factor or a rule menentukan. Ditentukan oleh means determined by." },
        { id: "id-u52l2-penentu", type: "vocab", front: "penentu", reading: "penentu", meaning: "the deciding factor", example: { jp: "Dukungan dari warga menjadi penentu untuk rencana baru itu.", en: "The backing from the citizens became the deciding factor for that new plan." }, accept: ["what settles it", "the decisive one", "the thing that tips it"], drill: { jp: "Harga adalah penentu untuk pembeli itu", en: "Price is the deciding factor for that buyer" }, hint: "puh-nuhn-TOO. The pe- noun off menentukan, the card just before it — and the third word in this course off tentu. ⚠️ A faktor is one of several; a penentu is the one that settles the matter. Faktor penentu is the two words together and is the phrase you will hear in a report." },
        { id: "id-u52l2-rantai", type: "vocab", front: "rantai", reading: "rantai", meaning: "a chain", example: { jp: "Satu masalah kecil menimbulkan rantai masalah lain di pabrik itu.", en: "One small problem gave rise to a chain of other problems at that factory." }, accept: ["a linked series", "links joined together", "one thing after another"], drill: { jp: "Rantai sepeda saya sudah rusak", en: "The chain on my bicycle is broken" }, hint: "RAHN-tai, the ai one sound like English eye. First the real object — a bicycle chain, a dog chain — and then the obvious metaphor, which Indonesian uses as freely as English: rantai masalah, rantai makanan, the food chain. Berantai means in a chain, as in reaksi berantai." },
      ],
    },
    {
      id: "id-u52l3",
      unit: 52,
      lesson: 3,
      title: "Syarat dan taruhan",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Attach conditions — name a requirement, say an offer is conditional, say somebody met the requirement, invite the listener to suppose, say who bears the cost, and name what is at stake.",
      items: [
        { id: "id-u52l3-syarat", type: "vocab", front: "syarat", reading: "syarat", meaning: "a requirement", example: { jp: "Syarat untuk pekerjaan itu adalah pengalaman dan ijazah.", en: "The requirements for that job are experience and a diploma." }, accept: ["a condition that must be met", "a precondition", "a stipulation"], drill: { jp: "Syarat untuk kuliah itu tidak susah", en: "The requirement for that course is not hard" }, hint: "SYAH-raht — the sy is one sound, like the sh in ship. ⚠️ Number is unmarked as usual, so syarat is one requirement or the whole list of them, and Indonesian forms head that list syarat. Dengan syarat means on condition that. Keep it apart from aturan, a rule, which you know: a rule governs behaviour, a syarat is a gate you pass through." },
        { id: "id-u52l3-bersyarat", type: "vocab", front: "bersyarat", reading: "bersyarat", meaning: "conditional", example: { jp: "Dukungan dari pihak itu bersyarat dan belum resmi.", en: "The backing from that side is conditional and not yet official." }, accept: ["with strings attached", "subject to a condition", "not unconditional"], drill: { jp: "Kesepakatan itu masih bersyarat", en: "That agreement is still conditional" }, hint: "buhr-SYAH-raht. The ber- form of the card before it — carrying a syarat. ⚠️ Tanpa syarat, without condition, is its opposite and is built from tanpa, which you know from u36. In law it is the word for a suspended sentence: hukuman bersyarat, where the punishment waits on behaviour." },
        { id: "id-u52l3-memenuhi", type: "vocab", front: "memenuhi", reading: "memenuhi", meaning: "to meet a requirement", example: { jp: "Hanya dua orang yang memenuhi semua syarat itu.", en: "Only two people met all those requirements." }, accept: ["to satisfy a condition", "to fulfil", "to come up to"], drill: { jp: "Laporan itu memenuhi semua syarat resmi", en: "That report meets all the official requirements" }, hint: "muh-muh-NOO-hee. ⚠️ Built on penuh, full, which you know from u10 — the same picture English keeps in fulfil. It is the standard verb for clearing a bar: memenuhi syarat, memenuhi janji, memenuhi harapan. The ter- form terpenuhi means the requirement HAS been met, and is not taught separately." },
        { id: "id-u52l3-seumpama", type: "vocab", front: "seumpama", reading: "seumpama", meaning: "let us say", example: { jp: "Seumpama hujan turun besok, acara di halaman itu pasti gagal.", en: "Let us say it rains tomorrow — the event in the yard would certainly fail." }, accept: ["suppose for a moment", "imagine that", "for the sake of argument"], drill: { jp: "Seumpama kami pergi pagi itu lebih baik", en: "Suppose we leave in the morning it is better" }, hint: "suh-oom-PAH-ma, four syllables. It invites the listener to ASSUME something, which is a different move from marking a conditional. ⚠️ Kalau and seandainya, both of which you know, are the grammar of if; seumpama is a rhetorical opener and is used where English says let us say or supposing for a moment. The bare andai is the same word as seandainya and is not taught." },
        { id: "id-u52l3-menanggung", type: "vocab", front: "menanggung", reading: "menanggung", meaning: "to bear the cost of", example: { jp: "Perusahaan itu harus menanggung semua biaya untuk kecelakaan di pabrik.", en: "That company has to bear all the costs for the accident at the factory." }, accept: ["to carry the burden of", "to shoulder", "to take the hit for"], drill: { jp: "Siapa yang menanggung biaya operasi itu", en: "Who bears the cost of that operation" }, hint: "muh-nahng-GOONG, hard g. Off tanggung, a load. ⚠️ Keep it apart from membayar, to pay, which you know: you membayar a price, but you menanggung a consequence, a risk or someone else's debt. Tanggung jawab, responsibility, comes off the same root and you will meet it in u61." },
        { id: "id-u52l3-taruhan", type: "vocab", front: "taruhan", reading: "taruhan", meaning: "what is at stake", example: { jp: "Taruhan untuk perusahaan kecil itu adalah seluruh modal pemilik.", en: "What is at stake for that small company is the owner's entire capital." }, accept: ["the stakes", "what stands to be lost", "a wager"], drill: { jp: "Taruhan dalam rapat itu sangat besar", en: "The stakes in that meeting are very big" }, hint: "tah-ROO-han. Off taruh, to put down, which you met as menaruh in u25 — a stake is literally what you put down. Two senses and both common: a bet in a game, and what stands to be lost in anything serious. Nyawa jadi taruhan, with one's life at stake, is the dramatic one." },
      ],
    },
    {
      id: "id-u52l4",
      unit: 52,
      lesson: 4,
      title: "Risiko dan ancaman",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Weigh a danger before it happens — name a risk, call an action risky, say something threatens you, name the threat, and say who is vulnerable to it and who is immune.",
      items: [
        { id: "id-u52l4-risiko", type: "vocab", front: "risiko", reading: "risiko", meaning: "a risk", example: { jp: "Risiko dari rencana itu terlalu besar untuk perusahaan kecil.", en: "The risk of that plan is too big for a small company." }, accept: ["the chance of harm", "exposure to loss", "something that may go wrong"], drill: { jp: "Risiko dari pekerjaan itu sangat tinggi", en: "The risk of that job is very high" }, hint: "ree-SEE-koh. ⚠️ Note the Indonesian spelling: risiko, with an i in the middle, not the resiko you will see on signs and the risk you might expect from English. Keep it apart from bahaya, danger, which you know: a bahaya is here now, a risiko is the CHANCE of one. Mengambil risiko is to take a risk." },
        { id: "id-u52l4-berisiko", type: "vocab", front: "berisiko", reading: "berisiko", meaning: "risky", example: { jp: "Perjalanan ke pulau itu berisiko kalau cuaca sedang buruk.", en: "The trip to that island is risky if the weather is bad." }, accept: ["carrying a risk", "not safe to do", "exposed to loss"], drill: { jp: "Rencana itu sangat berisiko untuk kami", en: "That plan is very risky for us" }, hint: "buh-ree-SEE-koh. The ber- form of the card before it — carrying a risiko. ⚠️ Berbahaya, which you can build from bahaya in u38, means dangerous: it will hurt you. Berisiko means it MIGHT. A doctor says a procedure is berisiko; a sign on a cliff says berbahaya." },
        { id: "id-u52l4-mengancam", type: "vocab", front: "mengancam", reading: "mengancam", meaning: "to threaten", example: { jp: "Banjir itu mengancam semua rumah di pinggir sungai.", en: "That flood threatens all the houses by the river." }, accept: ["to menace", "to put at risk", "to hang over"], drill: { jp: "Hujan besar mengancam rumah di pinggir sungai", en: "Heavy rain threatens the houses by the river" }, hint: "muh-ngahn-CHAHM — ng one hum, c is CH. Two uses and both common: a person threatening another (dia mengancam saya), and a condition threatening a thing (banjir mengancam rumah). ⚠️ It is not the same as berbahaya: a danger simply exists, but something that mengancam is pointed AT a particular target." },
        { id: "id-u52l4-ancaman", type: "vocab", front: "ancaman", reading: "ancaman", meaning: "a threat", example: { jp: "Warga sudah melaporkan ancaman dari pencuri itu kepada polisi.", en: "The citizens have already reported that thief's threat to the police." }, accept: ["a menace", "a stated danger", "something hanging over you"], drill: { jp: "Ancaman itu membuat semua warga takut", en: "That threat made all the citizens afraid" }, hint: "ahn-CHAH-man. The noun of the card before it. ⚠️ Both senses carry over: an ancaman can be words somebody said to you, or a condition hanging over a place — ancaman banjir. In legal Indonesian ancaman hukuman is the sentence an offence carries, which is a third sense worth recognising on sight." },
        { id: "id-u52l4-rentan", type: "vocab", front: "rentan", reading: "rentan", meaning: "vulnerable", example: { jp: "Anak kecil dan orang tua paling rentan terhadap cuaca dingin.", en: "Small children and old people are the most vulnerable to cold weather." }, accept: ["easily harmed", "liable to be hurt", "fragile in the face of it"], drill: { jp: "Daerah itu rentan terhadap banjir", en: "That district is vulnerable to flooding" }, hint: "RUHN-tan. It takes terhadap for whatever the thing is vulnerable TO, which you know from u36. ⚠️ Lemah, weak, is about a lack of strength in general; rentan is about exposure to one particular harm — a healthy young person can be rentan terhadap one disease and nothing else. Kelompok rentan is the official phrase for a vulnerable group." },
        { id: "id-u52l4-kebal", type: "vocab", front: "kebal", reading: "kebal", meaning: "immune", example: { jp: "Setelah tahun lalu badan dia menjadi kebal terhadap racun itu.", en: "Since last year her body has become immune to that poison." }, accept: ["proof against it", "unaffected by it", "resistant"], drill: { jp: "Dia kebal terhadap semua sanggahan itu", en: "He is immune to all those counter-arguments" }, hint: "kuh-BAHL. The exact opposite of rentan, the card before it, and it takes terhadap in the same way. Medical first — the body stops reacting to a poison or an illness — and then the figure of speech, which is very common: kebal terhadap kritik, immune to criticism. Kekebalan is immunity, the noun." },
      ],
    },
  ],
};
