// ID Unit 88 — Bujukan dan retorika ("Persuasion and rhetoric") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 1 (u88–u100), CREW LEAD. RETITLED AND NARROWED from "Argument and
// persuasion" — see §C-A1 below for the measurement that forced it.
//
// ═════════════════════════════════════════════════════════════════════════════
// AUTHORING CONVENTIONS FOR INDONESIAN B2 — binding on ALL id units u88–u126.
// Blocks 2 (u101–u113) and 3 (u114–u126): READ THIS LIST BEFORE YOUR FIRST CARD.
// unit1.js's 12 A1 conventions, unit21.js's A2 conventions and unit51.js's
// §B1–§B12 B1 conventions ALL STILL BIND. Settled by block 1 (crew lead)
// 2026-10-07 against the 2,088-word A1→B1 corpus.
//
// ⚠️ NUMBERED **C1–C12** ON PURPOSE. unit51.js owns §B1–§B12 and the B1 block-2
// seat had to renumber its own list to B2-1…B2-11 after colliding with those by
// number. Do not reuse B1–B12 or B2-1–B2-11. The next band takes D.
// ═════════════════════════════════════════════════════════════════════════════
//
// C1. **B2 IS NOT B1 WITH RARER NOUNS. B1 RELATED things; B2 FRAMES them.**
//     The learner reaching u88 can already attribute a view, concede, hedge,
//     state a condition and trace a cause (u51–u63). What B2 adds is the move
//     ABOVE the claim: classifying it, measuring how precisely it was stated,
//     naming where it came from, and judging whether it was made in good faith.
//     A unit that is 24 rarer synonyms of a B1 word has missed the band.
//
// C2. **EVERY SLOT IN THIS BAND IS PRE-SPENT, AND THAT IS THE DEFINING FACT OF
//     B2 FOR INDONESIAN.** Eighty-seven units and 2,088 words came first, and
//     the scaffold's B2 titles were written before any of them existed. MEASURED
//     on this block's own thirteen slots, as titled:
//       u91 "Nuance and degree"        — **16 of 26** probed candidates already
//                                        taught (u53 · u14 · u28). Unauthorable.
//       u90 "Systems and abstraction"  — **10 of 25** (u58 owns sistem · unsur ·
//                                        kerangka · struktur). Unauthorable.
//       u98 "Risk and uncertainty"     — u52 owns risk, u54 owns hedging.
//       u92 "Politics and law"         — u74 owns politics, u50 owns justice.
//     **SO: PROBE THE SLOT BEFORE YOU BELIEVE ITS TITLE, AND RETHEME WITHOUT
//     ASKING.** `node scripts/qa/front-taken.mjs id <24 candidate words>` takes
//     ten seconds and tells you whether the slot has 24 cards in it. Retitling
//     and rethemeing a scaffold slot is ordinary authoring (CLAUDE.md "No front
//     language"); the English titles are placeholders. Five of this block's
//     thirteen slots were rethemed on measured evidence:
//       u90 → Golongan, kriteria, dan perumpamaan   (classify/criteria/analogy)
//       u91 → Ketelitian dan galat                  (precision and error)
//       u92 → Hukum dan persidangan                 (narrowed to the COURTROOM)
//       u95 → Bangsa dan masa lalunya               (narrowed to the NATIONAL past)
//       u98 → Pencegahan dan kewaspadaan            (prevention, not risk)
//
// C3. 🚨 **`candidate-check.mjs` COULD NOT SEE A CIRCUMFIX UNTIL 2026-10-07, AND
//     THE CIRCUMFIX IS INDONESIAN'S MAIN NOMINALISER. I FIXED IT; HERE IS WHAT
//     IT MISSED AND WHY YOU STILL CANNOT TRUST A GREEN.**
//     `affixHits()` had two loops — one stripping a PREFIX, one stripping a
//     SUFFIX — and never both in the same pass. `ke-...-an` and `pe-...-an` need
//     both. It also had **no `ke` in its prefix list at all**, the commonest
//     nominaliser in the language. So:
//       `kesetaraan`  ke→"setaraan" (not a front) · -an→"kesetara" (not a front)
//                     ⇒ reported **free**, while `setara` is taught in u53.
//     MEASURED: of 36 ke-/pe-...-an candidates from this block, **0 were flagged
//     before the fix and 14 after it** — `kekeliruan`(keliru u49) ·
//     `kesetaraan`(setara u53) · `ketimpangan`(timpang u53) · `kesukuan`(suku
//     u35) · `kenetralan`(netral u51) · `keaslian`(asli u49) ·
//     `ketelitian`(teliti u78) · `ketepatan`(tepat u14) · `kebangsaan`(bangsa
//     u47) · `kehormatan`(hormat u73) · `kesaksian`(saksi u50) ·
//     `kejujuran`(jujur u32) · `pembulatan`(bulat u30) · `perumusan`(rumus u44) ·
//     `persatuan`(satu u5). Seven of those I then dropped from this block.
//     **The fix is on this branch and in `scripts/qa/candidate-check.mjs`. Merge
//     this branch before you probe, or you are probing with the broken version.**
//     ⚠️ It is additive — it adds warnings, never removes one — so a hit is a
//     prompt to think, not a verdict. See C4 for how to decide.
//
// C4. **THE CIRCUMFIX RULE, because B2 is made of these words.** unit1.js §3 is
//     right that an affix derivation is a NEW word and both members are
//     teachable. But a B2 band can drown in `ke-<taught adjective>-an`, which
//     teaches nothing: a learner who has `teliti` gets `ketelitian` for free.
//     **THE TEST: does the noun name something the root does not?**
//       ✅ TAUGHT HERE: `kesaksian` (testimony — a legal act, not "a witness") ·
//          `keaslian` (provenance) · `kehormatan` (honour as a possession) ·
//          `keselamatan` (safety) · `kesukuan` (tribalism, not "an ethnic
//          group") · `pembulatan` (rounding a number, not "round") ·
//          `perumusan` (formulation, not "a formula") · `persatuan` (national
//          unity, not "one") · `pengurus` (a committee, not "to handle")
//       ❌ DROPPED AS FREE-GIFTS: `kejujuran`(jujur) · `ketelitian`(teliti) ·
//          `ketepatan`(tepat) · `kenetralan`(netral) · `kesetaraan`(setara) ·
//          `ketimpangan`(timpang) · `kebangsaan`(bangsa) · `kekeliruan`(keliru) ·
//          `ketidaksesuaian`(tidak+sesuai) · `pemberhentian`(berhenti)
//     ⚠️ **THIS BULLET SAID "Cap: at most two per unit" UNTIL I MEASURED MY OWN
//     BLOCK AGAINST IT AND FOUND I HAD BROKEN IT SIX TIMES. The number was
//     invented; the test above is the rule.** Replaced rather than appended,
//     because a cap nobody can hold is a rule a seat will quietly ignore along
//     with the test beside it. MEASURED over u88–u100, counting distinct taught
//     ROOTS per unit (`node scripts/qa/candidate-check.mjs` logic run against the
//     frozen base): **26 families across 13 units — mean 2.0, median 2,
//     max 4 (u91 and u92), and two units at ZERO (u94, u96).**
//     **So: keep them few, keep each one answerable to the test above, NAME THE
//     ROOT IN THE HINT EVERY TIME, and list every one in your unit header with
//     its root and unit number.** If a unit needs four, say why four. If you
//     cannot say why, it did not need them.
//     ⚠️ And read §C-B4 in unit89.js before you decide: the line that actually
//     refuses a derivation is narrower than it looks, and CLAUDE.md records
//     German losing 17 core words to the broad reading of this rule.
//     ⚠️ A VERB + ITS OWN NOUN IN THE SAME LESSON IS DIFFERENT AND IS HOUSE
//     STYLE, not a violation — u51 ships `sepakat`/`kesepakatan` and
//     `menanggapi`/`tanggapan` side by side, with the hint saying "the noun of
//     the card before it". This block does the same fifteen times. Keep doing it.
//
// C5. **THE LOANWORD FREE-PASS IS THE LIVE RISK IN THIS LANGUAGE AND THE ENGINE
//     CANNOT CATCH IT WHILE THE BAND IS UNVOICED.** Indonesian borrows heavily
//     from English and Dutch, so a B2 academic register is full of fronts that
//     ARE their own gloss: a card whose `front` folds to its `meaning` is a copy
//     task, `ship-gate.mjs id` fails on it, and the engine's produce free-pass
//     reroute needs a CLIP to send the card to `speak` — which your band will not
//     have. **REFUSED IN THIS BLOCK FOR EXACTLY THIS REASON:**
//       `parameter` (gloss "a parameter" ⇒ identical) → used **`batasan`**
//       `model`     (gloss "a model" ⇒ identical)     → used **`perumpamaan`**
//       `atom`      (gloss "an atom" ⇒ identical)     → used **`partikel`**
//       `gender`    (gloss "gender" ⇒ identical)      → used **`sesama`**
//       `rumor`     (gloss "a rumour" ⇒ identical after `normalizeMeaning`
//                    strips the article) → used **`gosip`**
//     ⚠️ A loanword is FINE when the Indonesian spelling genuinely diverges —
//     `variabel`/variable, `kredibel`/credible, `spesimen`/specimen, `sampel`/
//     sample, `presisi`/precision, `plagiat`/plagiarism all ship. The test is the
//     FOLDED STRING, not the etymology. And `tender` ships only because it is
//     glossed **"a bid for a contract"**, not "a tender" — a non-identical gloss
//     is a legitimate fix and is cheaper than dropping a core word.
//
// C6. **`normalizeMeaning` STRIPS A LEADING "to " AND A LEADING "a/an/the"**, so
//     "to match" and "a match" are ONE STRING to the grader (unit51.js §B8).
//     A shared `meaning` makes one card unanswerable and there are **0 in all
//     nine languages** right now. `lint:curriculum` catches it but emits it as
//     warning ~6,300 of ~6,300, so **grep for `is the prompt for`** — you will
//     not scroll to it. Run `node scripts/qa/accept-collisions.mjs id` at the
//     END of your gate as well as before writing; the pre-write probe only sees
//     COMMITTED units and cannot catch a block colliding with itself mid-session.
//     ⚠️ `accept[]` overlap BETWEEN cards is lenient grading BY DESIGN and is not
//     a defect — do not re-author for it. A duplicate **`meaning`** is the defect.
//
// C7. **THE DRILL IS A MECHANISM, NOT A SECOND EXAMPLE.** 3–8 whitespace tokens,
//     no sentence-internal punctuation, and the item's own `front` present as a
//     WHOLE WORD. `lint` only does a SUBSTRING test, so an affixed form passes
//     lint and still fails to route (`findWholeWord`, cardRouting.js).
//     ⚠️ **AND A 9-TOKEN DRILL SILENTLY KILLS `sentence:build` WITH NOTHING RED**
//     — `sentenceTokens` bounds a non-Japanese sentence to 3–8 tiles. 23 of these
//     were found in one hi B2 block and 4 in an id B1 block. **Count the tokens
//     of every drill you write.** A multi-word front spends two or three of your
//     eight by itself: `pemangku kepentingan` leaves six.
//     Nothing in `lint` scope-checks `drill.jp` — run
//     `node scripts/qa/scope-strict-drills.mjs id 88 126`, which covers both.
//
// C8. **MULTI-WORD FRONTS FOLD TO ONE STRING AND THE COLLISION IS SILENT.**
//     `reading` strips spaces and hyphens (unit1.js §9), so `tolok ukur` →
//     "tolokukur", `jati diri` → "jatidiri", `imbal balik` → "imbalbalik",
//     `desas-desus` → "desasdesus". Two fronts sharing a fold make a dictation
//     card accept the wrong word. **Fold every multi-word front and run
//     `node scripts/qa/reading-taken.mjs id`** before you commit. This band is
//     full of them, because B2 Indonesian terminology is phrasal.
//
// C9. **HOMOGRAPH TRAPS MEASURED IN THIS BAND'S CANDIDATE LISTS** — do not write
//     around them and do not re-teach the other sense:
//       `layar` is TAKEN as **screen** (u33), not sail → u114 must use `berlayar`
//       `landasan` is TAKEN as **basis** (u58), not runway → u116 uses `lepas landas`
//       `bunga` is TAKEN as **interest** (u19) → u118 uses `berbunga`/`kelopak`
//       `taruhan` is TAKEN as **what is at stake** (u52) → u126 uses `bertaruh`
//       `batal`(u79) is unrelated to `membatalkan`'s commercial sense — gloss it
//       `sumbang` here is **off-key/discordant**, and is NOT `menyumbang`(donate)
//       `tanggap` here is **responsive**, and is NOT `tanggapan`(a response, u51)
//
// C10. **CARD-VARIETY AND THE SHIP GATE WILL BE RED UNTIL THE BAND IS VOICED,
//      AND THAT IS THE SIGNAL.** `listen:choice`, `listen:type` and `speak` all
//      gate on `hasAudio`, so every new B2 item routes to `type:produce` alone
//      and `tests/unit/card-variety.test.mjs` reports `id: items with only ONE
//      card kind`; `ship-gate.mjs id` fails its audio check for the same reason.
//      **Do NOT raise `SINGLE_KIND_CEILING` and do not touch the ship gate** —
//      that is weakening a check to force green, which this repo forbids, and the
//      number is the only signal the band still needs voicing. Audio is paid per
//      card and the run belongs to the merge seat, after merge. **Never run
//      `generate:audio`.**
//
// C11. 🚨 **MERGE EVERY SIBLING BRANCH AND RE-PROBE BEFORE YOU HAND BACK. THIS IS
//      THE ONLY THING THAT HAS EVER WORKED.** The probes read YOUR branch's
//      corpus, so they cannot see a sibling that has not merged. Measured series
//      across six bands: per-slot word lists took duplicate fronts at merge from
//      82 (ru B1, themes only) down to ~25 and then **stopped buying anything**
//      (hi B2 went UP to 28 against ru B2's 22 with the same discipline). The one
//      step change to **2** came from id B1 block 2, which merged its sibling's
//      branch, re-probed all 312 of its own fronts against the COMBINED corpus,
//      found 13 collisions and fixed them itself. An allocation says what a
//      sibling MEANS to write; its branch is what it DID write. And both of id
//      B1's 2 survivors were between the pair that never merged EACH OTHER — so
//      **it is pairwise.** Merge every sibling with commits, not just block 1.
//
// C12. **EVERY LANE MAINTAINS THE DOCS AS IT GOES.** Tick what you finish in
//      BUILD-CHECKLIST.md, and if you read a doc line that contradicts a later
//      decision, fix it in place — do not append the correction under the stale
//      text. Out of your lane? Name the file and line in your hand-back.
//      Block 1 is the crew lead; blocks 2 and 3 hand back to IT, not to Alex.
//
// ═════════════════════════════════════════════════════════════════════════════
// THIS UNIT
// ═════════════════════════════════════════════════════════════════════════════
//
// §C-A1. WHY THE TITLE CHANGED. "Argument and persuasion" stands on ground three
//        earlier units already hold: u21 (`pendapat` `menurut` `percaya` `ragu`
//        `yakin` `alasan`), u22 (`setuju` `menolak` `berdebat` `menyarankan`),
//        u49 (`bukti` `fakta` `membuktikan` `menyangkal` `membantah`
//        `meyakinkan`) and u51 (`pendirian` `sanggahan` `menyanggah`
//        `keberatan` `tanggapan` `bersikeras`). A learner here can already argue.
//        **What is missing is the PERSUASION half — the machinery for moving
//        somebody who has not asked to be moved**: winning them over, laying a
//        case out at length, putting weight on one part of it, hiding behind a
//        pretext, needling by implication, and the names for the activity itself.
//        Probed 40 candidates in that field: **34 free of 40**.
//
// §C-A2. SCOPE BOUNDARY. This unit takes **no evidence word** (u49's) and **no
//        stance word** (u51's). `meyakinkan` (to convince) is TAKEN by u49, so
//        l1 teaches `membujuk` — which is a different act anyway: you convince
//        somebody's reason and you coax their will. `membela` is TAKEN (u32) so
//        l3 takes `pembelaan` nowhere and uses `berdalih` instead.
//
// §C-A3. AFFIX ROOTS STRIPPED AND GREPPED BY HAND (C3/C4, unit1.js §3):
//        `bujukan`←bujuk (not taught) · `paparan`←papar (not taught) ·
//        `uraian`←urai (not taught) · `sindiran`←sindir (not taught) ·
//        `menekankan`←**menekan (u42, to press a button)** — kept, because
//        "to emphasise" is not derivable from "to press"; hint names it ·
//        `mempengaruhi`←**pengaruh (u37, influence as a noun)** — kept, the verb
//        is the new learning; hint names it · `mengecam`←kecam (not taught).
//        `sorotan`←sorot(u80) was DROPPED; `menyoroti` was dropped with it to
//        keep the lesson from carrying two spotlight words.
export const ID_UNIT88 = {
  id: "id-u88",
  lang: "id",
  title: "Bujukan dan retorika",
  order: 88,
  stage: "b2",
  lessons: [
    {
      id: "id-u88l1",
      unit: 88,
      lesson: 1,
      title: "Membujuk dan memikat",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Talk about moving somebody who has not asked to be moved — coax them round, name the coaxing, say what is working on them, say a thing holds their attention, say it stirred them, and say they finally gave in.",
      items: [
        { id: "id-u88l1-membujuk", type: "vocab", front: "membujuk", reading: "membujuk", meaning: "to coax round", example: { jp: "Atasan saya mencoba membujuk dua karyawan itu supaya tidak mengundurkan diri.", en: "My boss is trying to coax those two employees round so that they do not resign." }, accept: ["to talk someone round", "to win someone over", "to cajole"], drill: { jp: "Dia membujuk ibunya selama satu jam", en: "She coaxed her mother round for an hour" }, hint: "muhm-boo-JOOK. ⚠️ Keep it well apart from meyakinkan, to convince, which you learned in u49: you convince somebody's REASON with an argument, and you membujuk their WILL with warmth, patience and a little pressure. A parent membujuk a child to eat; a lawyer meyakinkan a judge. The root bujuk is the sweet talk itself." },
        { id: "id-u88l1-bujukan", type: "vocab", front: "bujukan", reading: "bujukan", meaning: "coaxing", example: { jp: "Bujukan dari pihak perusahaan tidak membuat warga berubah pikiran.", en: "The coaxing from the company did not make the citizens change their minds." }, accept: ["sweet talk", "persuasion applied to someone", "inducement"], drill: { jp: "Bujukan itu akhirnya tidak berhasil", en: "That coaxing did not work in the end" }, hint: "boo-JOO-kan. The noun of the card before it — the coaxing as a thing somebody did to you. Indonesian talks about it as something you can resist: tahan terhadap bujukan, to hold out against the sweet talk. ⚠️ It is not the same as dukungan, backing, which you met in u51: dukungan stands behind you, bujukan works on you." },
        { id: "id-u88l1-mempengaruhi", type: "vocab", front: "mempengaruhi", reading: "mempengaruhi", meaning: "to have an effect on somebody's thinking", example: { jp: "Berita di koran pagi itu sangat mempengaruhi pendapat pembaca.", en: "The news in that morning paper strongly affected the readers' opinions." }, accept: ["to influence", "to sway", "to colour how someone sees it"], drill: { jp: "Iklan itu mempengaruhi banyak pembeli muda", en: "That advert influences many young buyers" }, hint: "muhm-puh-ngah-ROO-ee, five syllables, ng one hum. Built on pengaruh, influence, which you already know as a NOUN from u37 — this is the verb, and the verb is the new learning. ⚠️ Spelling warning that trips native writers too: the standard form keeps the p (mempengaruhi), though you will also see memengaruhi in careful print. Either is understood; write the one here." },
        { id: "id-u88l1-memikat", type: "vocab", front: "memikat", reading: "memikat", meaning: "to hold somebody's attention", example: { jp: "Cerita tentang perjalanan ke pulau itu memikat semua penonton di tempat kecil itu.", en: "The story about the journey to that island held the attention of everyone in that small room." }, accept: ["to captivate", "to be alluring", "to draw someone in"], drill: { jp: "Lukisan tua itu memikat setiap penonton", en: "That old painting captivates every onlooker" }, hint: "muh-MEE-kaht. The root pikat is a bird-lure, which is exactly the picture: the thing does not argue, it simply makes you come closer. ⚠️ Not the same job as membujuk, the first card: membujuk works on a person who is resisting, memikat works before any resistance has formed. A shop window memikat; a salesman membujuk." },
        { id: "id-u88l1-menggugah", type: "vocab", front: "menggugah", reading: "menggugah", meaning: "to stir somebody", example: { jp: "Paparan pendek itu menggugah hati banyak orang muda di kota ini.", en: "That short speech stirred the hearts of many young people in this city." }, accept: ["to rouse", "to move someone deeply", "to awaken a feeling in"], drill: { jp: "Cerita itu menggugah semangat karyawan", en: "That story stirs the workers' spirit" }, hint: "muhng-GOO-gah, hard g twice. The root gugah is a shaking-awake, so this is rousing somebody who was sitting still — it nearly always takes hati (the heart) or semangat (spirit) as its object. ⚠️ Keep it apart from menggerakkan, to set in motion: menggugah changes how a person FEELS, and what they then do about it is their own." },
        { id: "id-u88l1-luluh", type: "vocab", front: "luluh", reading: "luluh", meaning: "to soften and give in", example: { jp: "Setelah dua jam, ayahnya luluh juga dan memberi izin kepada anak itu.", en: "After two hours her father softened after all and gave the child permission." }, accept: ["to relent", "to melt", "to stop holding out"], drill: { jp: "Hati ibu itu akhirnya luluh", en: "That mother's heart softened in the end" }, hint: "LOO-looh, both vowels the same. Literally to crumble or dissolve, and it is what the person being coaxed does at the end — so it is the natural answer to membujuk. ⚠️ It is NOT mengalah, to give way, which you met in u68: mengalah is a decision to let the other person have it, luluh is the resistance itself going soft, often against the person's own intention." },
      ],
    },
    {
      id: "id-u88l2",
      unit: 88,
      lesson: 2,
      title: "Memaparkan dan menekankan",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Lay a case out properly — set it all out, name the exposition, break it down point by point, name the breakdown, put a view on the table, and press the one part that matters.",
      items: [
        { id: "id-u88l2-memaparkan", type: "vocab", front: "memaparkan", reading: "memaparkan", meaning: "to set out at length", example: { jp: "Menteri itu memaparkan rencana baru tentang pajak di depan dewan pagi ini.", en: "That minister set out the new plan about tax at length before the council this morning." }, accept: ["to lay out", "to present in full", "to expound"], drill: { jp: "Dosen itu memaparkan hasil penelitiannya", en: "That lecturer sets out her research findings" }, hint: "muh-mah-PAHR-kan. The root papar means spread-out-flat, so you are laying the whole thing on the table where it can be seen. ⚠️ Three verbs you now have and they are not interchangeable: menjelaskan explains so somebody UNDERSTANDS, menyampaikan passes a message ON, memaparkan sets a case out IN FULL so it can be judged. A presentation memaparkan." },
        { id: "id-u88l2-paparan", type: "vocab", front: "paparan", reading: "paparan", meaning: "an exposition", example: { jp: "Paparan dari pihak sekolah tentang biaya baru itu sangat jelas.", en: "The exposition from the school about those new costs was very clear." }, accept: ["a full presentation", "a laid-out account", "a briefing"], drill: { jp: "Paparan itu hanya sepuluh menit", en: "That exposition is only ten minutes" }, hint: "pah-PAH-ran. The noun of the card before it — the laid-out account itself. In an Indonesian office it is the word for the slide deck and the talk together: memberi paparan, to give a briefing. ⚠️ Not a laporan, a report, which you know from u24: a laporan is written and filed, a paparan is delivered to a room." },
        { id: "id-u88l2-menguraikan", type: "vocab", front: "menguraikan", reading: "menguraikan", meaning: "to break down point by point", example: { jp: "Dalam rapat itu dia menguraikan setiap bagian dari anggaran proyek.", en: "In that meeting he broke down every part of the project budget point by point." }, accept: ["to unpack", "to set out in detail", "to itemise"], drill: { jp: "Dia menguraikan masalah itu dengan sabar", en: "He breaks that problem down patiently" }, hint: "muh-ngoo-rah-ee-KAHN, five syllables. The root urai means to unravel a tangle, so this is taking one knotted thing and separating the threads. ⚠️ The contrast with memaparkan, the first card of this lesson, is worth holding: memaparkan spreads the WHOLE case out, menguraikan takes ONE part of it apart. You memaparkan a plan, then menguraikan its costs." },
        { id: "id-u88l2-uraian", type: "vocab", front: "uraian", reading: "uraian", meaning: "a point-by-point account", example: { jp: "Uraian tentang sebab kecelakaan itu ada di halaman dua laporan polisi.", en: "The point-by-point account of the cause of that accident is on the second page of the police report." }, accept: ["a detailed breakdown", "an itemised explanation", "an analysis in words"], drill: { jp: "Uraian itu terlalu panjang untuk pembaca", en: "That breakdown is too long for a reader" }, hint: "oo-RAH-ee-an, four syllables. The noun of the card before it. ⚠️ It is also the name of the exam format every Indonesian student knows: soal uraian is an essay question, as against pilihan ganda, multiple choice — so if somebody says ujiannya uraian, they mean you will have to write it out." },
        { id: "id-u88l2-mengemukakan", type: "vocab", front: "mengemukakan", reading: "mengemukakan", meaning: "to put a view on the table", example: { jp: "Dua anggota dewan mengemukakan keberatan tentang jadwal pembangunan itu.", en: "Two council members put their objections about that construction schedule on the table." }, accept: ["to raise a point formally", "to advance an argument", "to bring forward"], drill: { jp: "Dia mengemukakan alasan yang kuat", en: "She puts forward a strong reason" }, hint: "muh-nguh-moo-kah-KAHN, five syllables. Built on muka, face or front, which you know — so it is bringing a thing to the FRONT where the meeting must deal with it. ⚠️ It is the formal register's verb: in a minuted meeting people mengemukakan pendapat, while in the corridor outside they just bilang. Choose it when the setting is official." },
        { id: "id-u88l2-menekankan", type: "vocab", front: "menekankan", reading: "menekankan", meaning: "to put weight on one part", example: { jp: "Dalam paparan itu dia menekankan bahwa biaya harus turun sebelum bulan depan.", en: "In that exposition she stressed that costs must come down before next month." }, accept: ["to emphasise", "to stress a point", "to underline in speech"], drill: { jp: "Guru itu menekankan pentingnya membaca ulang", en: "That teacher stresses the importance of re-reading" }, hint: "muh-nuh-kahn-KAHN. ⚠️ You already know menekan, to press, from u42 — pressing a button on a machine. This is the same hand on a different object: you press down on ONE part of what you are saying so the listener cannot skip it. The noun is penekanan, and dengan penekanan means pointedly. Nothing physical is being pressed." },
      ],
    },
    {
      id: "id-u88l3",
      unit: 88,
      lesson: 3,
      title: "Dalih, sindiran, dan kecaman",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Deal with argument made in bad faith — name a pretext, say somebody is hiding behind one, needle by implication, name the jibe, throw a remark out, and condemn something outright.",
      items: [
        { id: "id-u88l3-dalih", type: "vocab", front: "dalih", reading: "dalih", meaning: "a pretext", example: { jp: "Dengan dalih rapat penting, dia tidak datang ke acara keluarga itu.", en: "On the pretext of an important meeting, he did not come to that family event." }, accept: ["an excuse offered in bad faith", "a cover story", "a specious reason"], drill: { jp: "Dalih itu tidak kuat sama sekali", en: "That pretext is not strong at all" }, hint: "DAH-leeh. ⚠️ This is the sharp twin of alasan, a reason, which you learned in u21: an alasan may be perfectly honest, while a dalih is a reason OFFERED INSTEAD OF the real one. Dengan dalih X is the fixed opener, and using the word accuses the speaker of hiding something. Never call your own reason a dalih." },
        { id: "id-u88l3-berdalih", type: "vocab", front: "berdalih", reading: "berdalih", meaning: "to hide behind an excuse", example: { jp: "Perusahaan itu berdalih bahwa laporan keuangan belum selesai.", en: "That company hid behind the excuse that the financial report was not finished yet." }, accept: ["to make excuses", "to plead a pretext", "to claim speciously"], drill: { jp: "Mereka berdalih bahwa uangnya belum ada", en: "They plead that the money is not there yet" }, hint: "buhr-DAH-leeh. The ber- verb of the card before it, and like it, it is an accusation. It nearly always takes bahwa plus a clause. ⚠️ Keep it apart from mengelak, to dodge a question, which you met in u51: mengelak avoids ANSWERING, berdalih answers — with something untrue. A minister who berdalih has given you a reason you are not meant to believe." },
        { id: "id-u88l3-menyindir", type: "vocab", front: "menyindir", reading: "menyindir", meaning: "to needle by implication", example: { jp: "Dalam paparan pendek itu dia menyindir dua pejabat tanpa menyebut nama mereka.", en: "In that short speech he needled two officials without mentioning their names." }, accept: ["to make a pointed hint at", "to allude cuttingly", "to take a swipe at"], drill: { jp: "Dia menyindir atasannya di depan semua orang", en: "She needles her boss in front of everyone" }, hint: "muh-nyeen-DEER — ny is one sound. Saying a thing AT somebody without saying their name, so that only the room and the target know. ⚠️ This is a social skill in Indonesian, not merely rudeness: direct criticism of a senior person is costly, so a sindiran does the work indirectly. Mengecam, two cards on, is the opposite choice — naming them out loud." },
        { id: "id-u88l3-sindiran", type: "vocab", front: "sindiran", reading: "sindiran", meaning: "a pointed hint", example: { jp: "Semua orang di rapat itu tahu bahwa sindiran tadi untuk kepala bagian.", en: "Everyone in that meeting knew that the pointed hint just now was for the head of department." }, accept: ["a jibe", "a veiled dig", "a remark aimed at someone"], drill: { jp: "Sindiran itu terasa sampai sekarang", en: "That jibe still stings now" }, hint: "seen-DEE-ran. The noun of the card before it. ⚠️ Indonesian has a whole genre of it — sindiran halus, a soft dig, is admired as wit, while sindiran kasar is a quarrel in polite clothes. Note that merasa tersindir, to feel got at, is how the TARGET describes it, and it is the most common form you will hear." },
        { id: "id-u88l3-melontarkan", type: "vocab", front: "melontarkan", reading: "melontarkan", meaning: "to throw out a remark", example: { jp: "Pembaca itu melontarkan pertanyaan yang susah kepada pengarang di akhir acara.", en: "That reader threw a difficult question out at the author at the end of the event." }, accept: ["to fling out", "to toss a question at", "to hurl a comment"], drill: { jp: "Dia melontarkan pendapat pada rapat itu", en: "He flings an opinion out at that meeting" }, hint: "muh-lohn-tahr-KAHN. The root lontar is to hurl, so the picture is of a thing thrown rather than offered — the word says the remark came fast and landed hard. ⚠️ Not mengemukakan, from the lesson before, which is a point placed carefully on the table: you melontarkan a question, a jibe or an accusation, and the suddenness is part of what the word reports." },
        { id: "id-u88l3-mengecam", type: "vocab", front: "mengecam", reading: "mengecam", meaning: "to condemn publicly", example: { jp: "Banyak warga mengecam keputusan pemerintah tentang hutan di pulau itu.", en: "Many citizens publicly condemned the government's decision about the forest on that island." }, accept: ["to denounce", "to criticise sharply in public", "to decry"], drill: { jp: "Koran itu mengecam kebijakan baru tersebut", en: "That newspaper condemns the new policy" }, hint: "muh-nguh-CHAHM — remember from unit 1 that c is CH, never K. ⚠️ Three strengths and you now have all three: mengkritik, which you met through its noun in u81, points out what is wrong; menyanggah, from u51, attacks the reasoning; mengecam condemns the whole thing out loud and names the target. It is the headline verb — mengecam keras means roundly condemned." },
      ],
    },
    {
      id: "id-u88l4",
      unit: 88,
      lesson: 4,
      title: "Argumentasi dan polemik",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the activity of arguing itself — the reasoning, the art of it, the assumption it starts from, whether it hangs together, a running public quarrel, and the wider conversation it all happens inside.",
      items: [
        { id: "id-u88l4-argumentasi", type: "vocab", front: "argumentasi", reading: "argumentasi", meaning: "reasoning offered in support", example: { jp: "Argumentasi dalam tulisan itu kuat, tetapi contohnya terlalu sedikit.", en: "The reasoning in that essay is strong, but it has too few examples." }, accept: ["a line of argument", "the case somebody builds", "argumentation"], drill: { jp: "Argumentasi dia susah dibantah", en: "His reasoning is hard to refute" }, hint: "ahr-goo-muhn-TAH-see, five syllables. ⚠️ It is not the quarrel — that is the next-to-last card, polemik. Argumentasi is the STRUCTURE of reasons somebody built, which is why a teacher marking an essay writes argumentasinya lemah, the reasoning is weak. You met berdebat, to debate, in u22; this is what you bring to the debate." },
        { id: "id-u88l4-retorika", type: "vocab", front: "retorika", reading: "retorika", meaning: "the art of speaking persuasively", example: { jp: "Dia belajar retorika supaya bisa memaparkan pendapat di depan banyak orang.", en: "She is studying the art of persuasive speech so she can set out her views in front of many people." }, accept: ["rhetoric", "persuasive craft in speech", "oratorical skill"], drill: { jp: "Retorika itu sering tanpa arti", en: "That rhetoric is often without meaning" }, hint: "ruh-toh-REE-kah. The craft itself — how a thing is said rather than what is said. ⚠️ Like English, Indonesian uses it two ways and you need both: belajar retorika is a compliment, and hanya retorika, just rhetoric, is a complaint that the words were empty. The second sense is far commoner in a newspaper." },
        { id: "id-u88l4-premis", type: "vocab", front: "premis", reading: "premis", meaning: "the assumption an argument starts from", example: { jp: "Premis pertama dalam uraian itu belum tentu benar untuk semua pembaca.", en: "The first assumption in that breakdown is not necessarily true for every reader." }, accept: ["a premise", "a starting assumption", "the ground an argument stands on"], drill: { jp: "Premis itu harus benar lebih dulu", en: "That premise must be true first" }, hint: "PREH-mees. The thing taken as given BEFORE the reasoning starts, so attacking it brings the whole argument down without touching a single conclusion. ⚠️ Keep it apart from alasan, a reason, from u21: a reason supports a claim you are making, a premis is what you quietly assumed before you made it." },
        { id: "id-u88l4-logis", type: "vocab", front: "logis", reading: "logis", meaning: "hanging together as reasoning", example: { jp: "Pendapat itu logis kalau premis pertama memang benar.", en: "That conclusion hangs together if the first premise really is true." }, accept: ["logical", "sound in its reasoning", "following properly"], drill: { jp: "Urutan dalam laporan itu sudah logis", en: "The order in that report is logical now" }, hint: "LOH-gees, hard g. ⚠️ You already have masuk akal, which you met in u37's territory of reasons, and the two are not the same register: masuk akal is what an ordinary person says about something sensible, logis is what a marker, an engineer or a lawyer says about a chain of steps. Tidak logis is a technical complaint, not an insult." },
        { id: "id-u88l4-polemik", type: "vocab", front: "polemik", reading: "polemik", meaning: "a running public quarrel", example: { jp: "Keputusan tentang buku pelajaran itu menjadi polemik di koran selama dua bulan.", en: "The decision about that textbook became a running public quarrel in the papers for two months." }, accept: ["a public controversy", "a protracted dispute in print", "a polemic"], drill: { jp: "Polemik itu belum selesai sampai sekarang", en: "That controversy is not over even now" }, hint: "poh-LEH-meek. ⚠️ Narrower than it looks: a polemik is a quarrel conducted IN PUBLIC AND OVER TIME — in the papers, in columns, in replies to replies. A row in a meeting is not one. Menjadi polemik, to become a controversy, is the standard phrase, and berpolemik means the parties are still at it." },
        { id: "id-u88l4-wacana", type: "vocab", front: "wacana", reading: "wacana", meaning: "the wider conversation on a subject", example: { jp: "Wacana tentang bahasa daerah di sekolah sudah lama ada di masyarakat.", en: "The wider conversation about regional languages in schools has been in society for a long time." }, accept: ["public discourse", "an idea in circulation", "the talk around a topic"], drill: { jp: "Wacana itu datang lagi setiap tahun", en: "That discourse comes round again every year" }, hint: "wah-CHAH-nah — c is CH. Two senses, both current, and a learner needs both. In a linguistics class it is discourse, a stretch of connected language. In a newspaper it is an idea that is being FLOATED but not decided: masih wacana, still only talk, is the mildly sceptical thing an Indonesian says about a government plan that has no date on it." },
      ],
    },
  ],
};
