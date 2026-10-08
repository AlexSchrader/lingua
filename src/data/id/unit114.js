// ID Unit 114 — Kelautan dan pelayaran ("The sea and seafaring") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u114–u126). The 12 A1 conventions in unit1.js, the 10 A2
// conventions in unit21.js and the 12 B1 conventions in unit51.js ALL BIND this
// file. The B2 block-3 conventions are §D1–C9 at the foot of THIS header and bind
// u114–u126; they do NOT renumber B1's B1–B12, which unit51.js owns.
//
// THE HOLE THIS FILLS, measured against all 2,088 A1+B1 cards. The course taught
// `laut` (u19), `pantai` (u19), `kapal` and `pelabuhan` (u23), `nelayan` (u48),
// `pulau` (u46) and `arus` (u42) — the sea as scenery and as a commute. Not one
// word for a jetty, an anchor, a reef, a strait, a hull's deck, a net, a cargo
// load, a tide, or for the act of sailing. Indonesia is 17,000 islands and the
// learner could not say a boat put to sea.
//
// ⚠️ `layar` IS NOT CARDED AND THAT IS THE WHOLE REASON THIS UNIT TEACHES
// `berlayar` INSTEAD. `layar` is a homograph and the SCREEN sense already owns
// the front: `id-u33l3-layar`, "a screen", whose `accept[]` holds "a sail". So
//   • the front `layar` is a hard duplicate — blocked by rule 12.
//   • the gloss "to sail" is ALSO taken, by that accept entry, because
//     `normalizeMeaning` strips a leading "to " and a leading "a", making
//     "to sail" and "a sail" ONE STRING to the grader. MEASURED with
//     `gloss-taken.mjs id "to sail"` → COLLIDE layar@u33.
// So `berlayar` is glossed **"to set sail"**, which probes free, and u33's own
// hint already tells the learner "Berlayar is to sail". The sail as an object is
// deliberately not re-taught.
//
// THREE MORE GLOSS COLLISIONS MEASURED AND WRITTEN AROUND (gloss-taken.mjs id):
//   "the ocean"  → laut@u19        so `samudra` is "the open ocean"
//   "a boat"     → kapal@u23       so `perahu` is "a small wooden boat"
//   "the crew"   → tim@u24         so `awak` is "a ship's crew" and that exact
//                                  string stays out of its accept[]
//   "a channel"  → saluran@u64 and "a voyage"/"to voyage" → perjalanan@u23 —
//   both struck from draft accept[] lists before a card was written.
//
// FRONTS REFUSED, NAMED NOT BURIED:
//   `sauh`    a second word for an anchor. `jangkar` is the everyday one and two
//             fronts under one gloss is the shared-prompt defect this corpus has
//             ZERO of. Dropped, not deferred.
//   `pasang`  ⚠️ THE CREW LEAD'S BRIEF SAID THIS FRONT WAS TAKEN, WITH "to
//             install" AND "a pair" ALREADY IN THE LEARNER'S HEAD. I CHECKED AND
//             IT IS NOT. Bare `pasang` is FREE — what is taught is `memasang`
//             (u25), the verb. Measured both ways: `candidate-check id pasang`
//             reports ok, and a front lookup over the corpus returns nothing.
//             The decision to leave it out STANDS on its own merits — one front
//             carrying the tide, a pair AND the act of installing is a meaning
//             card that cannot be graded — but the stated reason was wrong and
//             is corrected here rather than appended to. `surut` carries the
//             tide alone and its hint names `pasang` and `memasang` by word.
//   `mendayung` `dayung` `haluan` `buritan` `galangan` `gelombang` — all probed
//             free, all cut for space at 24. They are the obvious refill if this
//             slot is ever widened.
//
// DERIVATION NOTES (unit1.js §3, unit51.js §B5 — strip the affix yourself):
//   `pelaut`     = pe- + `laut` (u19). A separate word: the sea vs a person of
//                  the sea. Hint names the root. candidate-check flagged it.
//   `berlayar`   = ber- + `layar` (u33). Separate word, see above.
//   `pelayaran`  = pe- + `layar` + -an. Third card off that root, which is the
//                  ceiling; no fourth is taken anywhere in this block.
//   `pesisir`    candidate-check reported "pe- off sisir(u87)". FALSE POSITIVE —
//                  `pesisir` is not derived from a comb. Letters only.
// ─────────────────────────────────────────────────────────────────────────────
// AUTHORING CONVENTIONS FOR id B2 BLOCK 3 — binding on u114–u126.
// Numbered D-series on purpose, and it was RENUMBERED after block 1 handed
// back: unit51.js owns B1–B12 for this language, and block 1 — the crew lead —
// owns **C1–C12 in unit88.js, which bind u88–u126 and therefore bind this file
// too**. These were drafted as a C-series before block 1 merged, which would
// have left two different rules sharing the name "C4". The lead's C-series
// wins; mine moved to D. **Block 1's C1–C12 and unit89.js §C-B4 outrank
// everything below** — read them first; the D-series only adds what they do not
// already cover.
// ─────────────────────────────────────────────────────────────────────────────
//
// D1. **A COGNATE IS NOT BANNED — ITS GLOSS IS.** Indonesian borrows heavily, so
//     a B2 technical band is full of fronts an English reader can already read:
//     `satelit` `roket` `orbit` `planet` `teleskop` `visa` `migran` `marmer`
//     `granit` `nikel` `aluminium` `motif` `dinasti` `artefak` `kremasi`
//     `arkeologi` `gravitasi` `transmigrasi` `imigrasi` `fosil`. If the gloss is
//     the English twin, `produceIsFreePass` is TRUE and the learner types the
//     prompt back for a pass — and while this band is unvoiced the engine CANNOT
//     catch it, because the produce free-pass reroute goes to `speak`, which
//     requires a clip. MEASURED with the engine's own predicate:
//       front `aluminium` + gloss "aluminium"  → FREEPASS-produce AND -meaning
//       front `aluminium` + gloss "the light metal used for cans"  → clean
//     **So every cognate in this block carries a DESCRIPTIVE gloss, and the
//     English twin goes in the hint, never in `meaning` and never in `accept`.**
//     A twin inside `accept[]` reopens the hole: `normalizeMeaning` is applied to
//     accept entries too. `visa` + accept "a visa" measured FREEPASS-meaning.
//
// D2. **GLOSS BEFORE FRONT, ALWAYS, AND `gloss-taken.mjs` IS NOT OPTIONAL.** This
//     band's themes are dense with near-synonyms of taught words (five words for
//     a grave, three for an anchor, two for powder). A free front with a taken
//     gloss is still an unanswerable card. u114 alone found six collisions
//     BEFORE any card was written. Probe the `accept[]` entries too — half of the
//     six were in draft accepts, not in a `meaning`.
//
// D3. **A SYNONYM PAIR IS NOT TWO CARDS.** Where two fronts mean one thing and no
//     honest discriminating gloss exists, ONE ships and the other is named in the
//     survivor's hint. `jangkar`/`sauh`, `makam`/`pusara`, `mudik`/`pulang
//     kampung`, `rindang`/`rimbun`, `awet`/`tahan lama` were each resolved this
//     way. The learner still meets the dropped word — as a word in a hint, which
//     costs nothing and cannot be a broken prompt.
//
// D4. **A BARE ROOT PLUS ITS me-/ber- VERB IS ONE WORD TWICE, UNLESS THE ROOT IS
//     ITSELF A NOUN WITH ITS OWN JOB.** unit1.js §3's test applied to this band's
//     craft and mining lists. ✅ `pahat` (a chisel) + `memahat` (to carve) —
//     tool vs act, the `jalan`/`berjalan` precedent. ✅ `tambang` (a mine) +
//     `menambang` (to mine) — place vs act. ❌ `tenun`+`menenun`, `sulam`+
//     `menyulam`, `rajut`+`merajut`, `tempa`+`menempa`, `lapuk`+`melapuk`,
//     `kubur`+`menguburkan`: in each of those the bare root is only the verb's
//     stem, so ONE card ships.
//
// D5. **EVERY DRILL IS CHECKED MECHANICALLY, NOT BY READING IT.** 3–8 whitespace
//     tokens, no sentence-internal punctuation, and the `front` present as a
//     WHOLE WORD (`findWholeWord`, cardRouting.js) — `lint` only does a substring
//     test and will pass a drill that cannot route. Multi-word fronts in this
//     block (`batu bara`, `awak kabin`, `lepas landas`, `suku cadang`, `masa
//     lampau`, `tata surya`) must appear with their internal space intact.
//
// D6. **MULTI-WORD AND REDUPLICATED FRONTS: FOLD THEM AND CHECK THE READING.**
//     unit1.js §9 — the fold strips spaces and hyphens, so `batu bara` reads
//     "batubara" and `untung-untungan` reads "untunguntungan". All ten of this
//     block's folded readings were run through `reading-taken.mjs id` before any
//     card was written: **all free**. Re-run it if you add one.
//
// D7. **`candidate-check` FIRES-INSIDE IS INFORMATION, NOT A VETO.** It reports
//     that a taught front sits inside a candidate as a whole word — `batu`(u46)
//     inside `batu bara`, `suku`(u35) inside `suku cadang`, `untung`(u28) inside
//     `untung-untungan`, `abad`(u59) inside `berabad-abad`. `canCloze` blanks an
//     item's OWN front out of its OWN drill, so the longer front is safe in its
//     own card. What it means in practice: do not write the SHORTER front's drill
//     using the longer phrase. Checked for all four.
//
// D8. **THE MOURNING UNIT (u122) IS WRITTEN PLAIN, NEVER GRIM AND NEVER PIOUS.**
//     Funeral, mourning and inheritance vocabulary was 0 of 2,088 — the largest
//     untouched human domain in the language — and the reason it is hard to write
//     is not the words. Examples state facts a learner will actually need
//     (telling someone a relative has died, being told when a burial is, reading
//     a will). Indonesian practice is Muslim-majority, so `takziah` and `tahlil`
//     are taught as the practice they are, with the hint saying so; `kremasi` is
//     taught beside them because Bali and the Chinese-Indonesian community are
//     not a footnote. No example assumes the learner's own religion.
//
// D9. **CARD-VARIETY AND THE SHIP GATE'S AUDIO CHECK ARE RED FOR THIS BAND, BY
//     DESIGN.** unit51.js §B10 still holds: `listen:choice`, `listen:type` and
//     `speak` all gate on `hasAudio`, so every unvoiced B2 item routes to
//     `type:produce` alone. **Do NOT raise `SINGLE_KIND_CEILING`** and do not
//     touch the ship gate's audio assertion. The merge seat voices the band in
//     one paid run; the number is the only signal that it still needs doing.
// D10. **A DRILL TRIMMED FROM AN EXAMPLE KEEPS ONE CLAUSE TOO MANY — I DID IT
//     NINETEEN TIMES IN THIRTEEN UNITS.** `sentenceTokens` bounds
//     `sentence:build` to 3–8 tiles, so a 9-token drill routes to nothing.
//     MEASURED while authoring u114–u126: **19 drills over the bound**, worst
//     cases u122 (3 in one unit) and u124 (7 across two passes). EVERY ONE had
//     the same cause — the drill was written by deleting a clause from a long
//     `example` and the remaining sentence still carried a
//     `karena`/`jadi`/`sebelum` tail.
//     ⚠️ **THIS BULLET FIRST CLAIMED "nothing in the shipped toolchain catches
//     one". THAT IS FALSE AND I CHECKED IT ONLY AFTER WRITING IT.**
//     `src/data/lint.js:478` emits `drill "..." is N tokens — needs 3-8 to tile
//     into sentence:build`, as a WARNING. So the toolchain does catch it; what
//     is true is weaker and still worth knowing: it is **one advisory line among
//     6,500**, so it is invisible unless you grep for it. Corrected in place
//     rather than appended to, per CLAUDE.md.
//     **So: write the drill FIRST and short, and grep `needs 3-8 to tile` as
//     part of your gate.** An 8-token ceiling is roughly "subject + verb + one
//     short complement"; if it has a conjunction in it, it is probably over.
//     ⚠️ 12 such drills are OPEN on sibling branches as of this merge — u106,
//     u109, u110, u111, u113, all block 2's. Named here, not fixed: they are
//     another seat's units.
//     ⚠️ Same defect class as the 23 found in one hi B2 block and 4 in an id B1
//     block, so it is not a quirk of this seat — it is what trimming an example
//     produces, in every language.
//
// D11. 🚨 **MY OWN PER-UNIT GATE CLAIM WAS WRONG IN ALL THIRTEEN COMMITS, AND
//     THIS IS THE RETRACTION.** Each commit message for u114–u126 says
//     `lint:curriculum 0 errors, 0 warnings in u1NN`. The 0 errors is true and
//     reproducible. **The "0 warnings" is NOT.** It came from
//     `npm run lint:curriculum 2>&1 | grep -E "id-u1NN|is the prompt for"`
//     returning nothing, and that command CANNOT BE REPRODUCED — run again on
//     the same content it returns 8 lines for u121. The lint writes ~1.3 MB and
//     I believe the pipe was truncated on this Windows seat; I cannot prove it,
//     which is exactly why the claim has to go rather than be explained.
//     **MEASURED NOW, on the merged branch, and this is the number to trust:**
//       validate:content         0 errors, 0 warnings
//       lint:curriculum          0 errors, 6,501 warnings corpus-wide
//       warnings inside u114–u126  **48**, and all 48 are ONE class: an example
//                                or drill using a `di-` passive of a taught verb
//                                (dibawa dibuat dipakai dijual dibaca disimpan
//                                ditulis dibagi disentuh dibangun dibantu
//                                dicari diganti dimakan diminum dipotong
//                                dirusak diubah ditaruh ditutup dibakar dilihat)
//       shared-prompt ("is the prompt for")  **0**, corpus-wide
//     The `di-` passive IS taught, at u70l1, and neither the lint nor
//     `scope-strict-drills` has morphology — both their headers say so. So the
//     48 are a known false-positive class, not residue. **But "48 warnings, all
//     one known class" is the honest sentence and "0 warnings" was not.**
//     **THE LESSON FOR THE NEXT SEAT: never report a gate number from a grep
//     you have not re-run at least once.** A silent empty pipe reads exactly
//     like a pass.
//
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT114 = {
  id: "id-u114",
  lang: "id",
  title: "Kelautan dan pelayaran",
  order: 114,
  stage: "b2",
  lessons: [
    {
      id: "id-u114l1",
      unit: 114,
      lesson: 1,
      title: "Dermaga, pesisir, dan terumbu",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Describe an Indonesian coastline precisely — the jetty, the coastal strip, the strait between two islands, the reef offshore — instead of calling all of it the beach.",
      items: [
        { id: "id-u114l1-dermaga", type: "vocab", front: "dermaga", reading: "dermaga", meaning: "a jetty", example: { jp: "Kapal kecil itu tunggu di dermaga sejak pagi.", en: "That small ship has been waiting at the jetty since morning." }, accept: ["a quay", "a wharf", "a boat landing"], drill: { jp: "Kapal itu tunggu di dermaga", en: "That ship is waiting at the jetty" }, hint: "der-MA-ga. The built structure a boat ties up against — concrete or wood. A pelabuhan, the port you already know, is the whole harbour; the dermaga is the one edge you walk out onto." },
        { id: "id-u114l1-pesisir", type: "vocab", front: "pesisir", reading: "pesisir", meaning: "the coastal strip", example: { jp: "Banyak nelayan tinggal di pesisir utara Jawa.", en: "Many fishermen live on the north coastal strip of Java." }, accept: ["the littoral", "the shoreline belt", "the land along the sea"], drill: { jp: "Banyak nelayan tinggal di pesisir utara", en: "Many fishermen live on the north coastal strip" }, hint: "puh-SEE-seer. The BAND OF LAND along the sea, with its villages and its way of life — not the sand itself, which is pantai. Indonesians say masyarakat pesisir, coastal society. It is not built on sisir, a comb; the probe reports that and it is wrong." },
        { id: "id-u114l1-selat", type: "vocab", front: "selat", reading: "selat", meaning: "a strait", example: { jp: "Selat antara dua pulau itu tidak terlalu lebar.", en: "The strait between those two islands is not very wide." }, accept: ["a sea channel between islands", "a narrow sea passage", "the water between two islands"], drill: { jp: "Selat antara dua pulau itu sempit", en: "The strait between those two islands is narrow" }, hint: "suh-LAHT. Indonesia is named by its straits: Selat Sunda, Selat Malaka, Selat Lombok. A word you cannot read an Indonesian map without." },
        { id: "id-u114l1-samudra", type: "vocab", front: "samudra", reading: "samudra", meaning: "the open ocean", example: { jp: "Di luar selat itu sudah samudra, bukan laut yang tenang.", en: "Beyond that strait it is already open ocean, not calm sea." }, accept: ["the high seas", "a great ocean", "the deep ocean"], drill: { jp: "Di luar pulau itu sudah samudra", en: "Beyond that island it is already open ocean" }, hint: "sa-MOO-dra. From Sanskrit. The great ocean — Samudra Hindia is the Indian Ocean. ⚠️ Not glossed \"the ocean\": laut, which you learned early, already owns that gloss, and samudra is the bigger, wilder one." },
        { id: "id-u114l1-karang", type: "vocab", front: "karang", reading: "karang", meaning: "coral", example: { jp: "Karang di air bersih itu sangat cantik.", en: "The coral in that clean water is very beautiful." }, accept: ["coral rock", "a coral head", "living coral"], drill: { jp: "Karang di air bersih itu cantik", en: "The coral in that clean water is beautiful" }, hint: "KA-rang. The living stone itself. ⚠️ Karang is also a verb root meaning to compose, as in mengarang, to write a piece — same spelling, unrelated. Context separates them completely: one is in the water, the other is on paper." },
        { id: "id-u114l1-terumbu", type: "vocab", front: "terumbu", reading: "terumbu", meaning: "a reef", example: { jp: "Terumbu di sebelah timur pulau itu rusak karena bom.", en: "The reef east of that island is damaged because of bombs." }, accept: ["a coral reef", "a submerged ridge", "a shoal of coral"], drill: { jp: "Terumbu di timur pulau itu rusak", en: "The reef east of that island is damaged" }, hint: "tuh-ROOM-boo. The structure, not the animal: terumbu karang together is \"coral reef\", and it is the phrase every Indonesian conservation campaign uses. A terumbu can be rock with no coral left on it at all." },
      ],
    },
    {
      id: "id-u114l2",
      unit: 114,
      lesson: 2,
      title: "Perahu, geladak, dan awaknya",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Name the vessel and the people on it — a wooden boat, a raft, the deck, the captain, the crew — rather than calling everything that floats a kapal.",
      items: [
        { id: "id-u114l2-perahu", type: "vocab", front: "perahu", reading: "perahu", meaning: "a small wooden boat", example: { jp: "Nelayan itu pergi ke laut dengan perahu kecil setiap pagi.", en: "That fisherman goes out to sea in a small boat every morning." }, accept: ["a canoe", "an outrigger boat", "a traditional boat"], drill: { jp: "Nelayan itu pergi dengan perahu kecil", en: "That fisherman goes out in a small boat" }, hint: "puh-RA-hoo. The wooden, usually engineless boat a family owns — against kapal, which you know, a ship with a crew and a schedule. ⚠️ Not glossed \"a boat\": kapal already owns that gloss. Perahu layar is a sailing boat." },
        { id: "id-u114l2-rakit", type: "vocab", front: "rakit", reading: "rakit", meaning: "a raft", example: { jp: "Mereka menyeberang sungai itu dengan rakit dari bambu.", en: "They cross that river on a raft made of bamboo." }, accept: ["a bamboo raft", "a floating platform", "a log raft"], drill: { jp: "Mereka menyeberang sungai dengan rakit bambu", en: "They cross the river on a bamboo raft" }, hint: "RA-kit. Flat, tied together, no hull — bamboo in Indonesia, almost always. The root also gives merakit, to assemble something from parts, which is exactly what you do to a raft." },
        { id: "id-u114l2-geladak", type: "vocab", front: "geladak", reading: "geladak", meaning: "the deck of a ship", example: { jp: "Angin di geladak terlalu kuat untuk berdiri lama.", en: "The wind on deck is too strong to stand in for long." }, accept: ["a ship's deck", "the open deck", "the top deck"], drill: { jp: "Angin di geladak terlalu kuat sekarang", en: "The wind on deck is too strong now" }, hint: "guh-LA-dahk. The floor you stand on aboard a ship. On the overnight ferries between islands the cheapest ticket is a geladak ticket, which means you sleep on it." },
        { id: "id-u114l2-nakhoda", type: "vocab", front: "nakhoda", reading: "nakhoda", meaning: "a ship's captain", example: { jp: "Nakhoda tidak mau berlayar kalau angin masih kuat.", en: "The captain will not set sail if the wind is still strong." }, accept: ["a skipper", "the master of a vessel", "the one in command of a ship"], drill: { jp: "Nakhoda tidak mau berlayar hari ini", en: "The captain does not want to sail today" }, hint: "nahk-HO-da, from Persian. Specifically the master of a SHIP — a plane has a pilot, a company has a direktur. Indonesian uses it as a metaphor for any leader steering something through trouble." },
        { id: "id-u114l2-pelaut", type: "vocab", front: "pelaut", reading: "pelaut", meaning: "a seafarer", example: { jp: "Ayah saya pelaut, jadi dia jarang ada di rumah.", en: "My father is a seafarer, so he is rarely at home." }, accept: ["a sailor", "a mariner", "someone whose work is at sea"], drill: { jp: "Ayah saya pelaut jadi jarang di rumah", en: "My father is a seafarer so he is rarely home" }, hint: "puh-LA-oot — pe- plus laut, the sea you have known since early on. A person OF the sea, by trade. Not a nelayan, who fishes; a pelaut crews ships. Indonesia exports pelaut to the world's merchant fleets." },
        { id: "id-u114l2-awak", type: "vocab", front: "awak", reading: "awak", meaning: "a ship's crew", example: { jp: "Semua awak sudah ada di kapal sebelum pagi.", en: "All the crew were already on the ship before morning." }, accept: ["a crew member", "the people working on board", "the whole ship's company"], drill: { jp: "Semua awak sudah ada di kapal", en: "All the crew were already on the ship" }, hint: "A-wahk. The working people aboard, as a group or one of them. ⚠️ Deliberately NOT glossed \"the crew\": tim, which you know, already owns that gloss. Awak kabin, cabin crew, is in the aviation unit, and awak also survives as an old-fashioned word for \"you\"." },
      ],
    },
    {
      id: "id-u114l3",
      unit: 114,
      lesson: 3,
      title: "Berlayar, berlabuh, dan menambatkan",
      cefr: "B2",
      dominantMode: "produce",
      canDo: "Talk through a crossing from one end to the other — setting sail, steering, dropping anchor, tying up at the jetty.",
      items: [
        { id: "id-u114l3-berlayar", type: "vocab", front: "berlayar", reading: "berlayar", meaning: "to set sail", example: { jp: "Kapal itu akan berlayar ke Sulawesi besok sore.", en: "That ship will set sail for Sulawesi tomorrow afternoon." }, accept: ["to sail a ship out to sea", "to travel by sea", "to put to sea"], drill: { jp: "Kapal itu akan berlayar besok sore", en: "That ship will set sail tomorrow afternoon" }, hint: "ber-LA-yar — ber- plus layar, which you met as a SCREEN. Layar's first meaning was a sail, which is why both senses live in one word. ⚠️ Glossed \"to set sail\", not \"to sail\": layar's own card already accepts \"a sail\", and the grader treats \"a sail\" and \"to sail\" as one string." },
        { id: "id-u114l3-pelayaran", type: "vocab", front: "pelayaran", reading: "pelayaran", meaning: "a sea voyage", example: { jp: "Pelayaran dari Jakarta ke Papua makan waktu beberapa hari.", en: "The voyage from Jakarta to Papua takes several days." }, accept: ["a passage by ship", "a crossing by boat", "a shipping run"], drill: { jp: "Pelayaran ke Papua makan waktu lama", en: "The voyage to Papua takes a long time" }, hint: "puh-la-YA-ran — the third word in this course off the root layar, after layar itself and berlayar. The crossing as an event. Perusahaan pelayaran is a shipping company. ⚠️ Not \"a voyage\": perjalanan already owns that gloss." },
        { id: "id-u114l3-kemudi", type: "vocab", front: "kemudi", reading: "kemudi", meaning: "a rudder", example: { jp: "Kemudi perahu itu rusak, jadi mereka tidak bisa pulang.", en: "That boat's rudder is broken, so they cannot get home." }, accept: ["a helm", "the steering gear of a boat", "a tiller"], drill: { jp: "Kemudi perahu itu rusak sejak kemarin", en: "That boat's rudder has been broken since yesterday" }, hint: "kuh-MOO-dee. What turns the boat. Also the steering wheel of a car, so roda kemudi is a steering wheel — and mengemudi is to drive, which is the form you will hear far more often on land." },
        { id: "id-u114l3-jangkar", type: "vocab", front: "jangkar", reading: "jangkar", meaning: "an anchor", example: { jp: "Jangkar sudah turun, jadi kapal tidak akan bergerak.", en: "The anchor is down, so the ship will not move." }, accept: ["a ship's anchor", "the iron weight that holds a boat", "an anchor and chain"], drill: { jp: "Jangkar sudah turun jadi kapal berhenti", en: "The anchor is down so the ship has stopped" }, hint: "JANG-kar, with the ng hum. ⚠️ Indonesian also has sauh for an anchor, and it is NOT taught: two fronts under one gloss would make a prompt with two right answers. Jangkar is the everyday one; recognise sauh if you read it in older writing." },
        { id: "id-u114l3-berlabuh", type: "vocab", front: "berlabuh", reading: "berlabuh", meaning: "to drop anchor", example: { jp: "Kapal besar harus berlabuh jauh dari dermaga karena air tidak cukup dalam.", en: "Big ships have to anchor far from the jetty because the water is not deep enough." }, accept: ["to come to anchor", "to put into port", "to lie offshore"], drill: { jp: "Kapal besar harus berlabuh jauh dari dermaga", en: "Big ships have to anchor far from the jetty" }, hint: "ber-LA-booh — ber- plus labuh, and the same root gives pelabuhan, the port you learned early. A ship berlabuh out in the roads without touching anything; it is not the same as tying up." },
        { id: "id-u114l3-menambatkan", type: "vocab", front: "menambatkan", reading: "menambatkan", meaning: "to moor", example: { jp: "Mereka menambatkan perahu itu ke kayu besar di dermaga.", en: "They moor that boat to a big post at the jetty." }, accept: ["to tie up a boat", "to make fast to a post", "to secure alongside"], drill: { jp: "Mereka menambatkan perahu ke kayu besar", en: "They moor the boat to a big post" }, hint: "muh-nam-baht-KAHN. To tie a boat to something fixed — the step AFTER berlabuh, and the difference matters: anchored is floating free, moored is attached. The root tambat also gives tambatan, a mooring point, and is used of tying up a goat." },
      ],
    },
    {
      id: "id-u114l4",
      unit: 114,
      lesson: 4,
      title: "Jala, muatan, dan surut",
      cefr: "B2",
      dominantMode: "recognize",
      canDo: "Say what a boat is carrying and what the water is doing — the nets, the cargo, a buoy, sinking, and the tide going out.",
      items: [
        { id: "id-u114l4-jala", type: "vocab", front: "jala", reading: "jala", meaning: "a casting net", example: { jp: "Nelayan itu melempar jala dari perahu kecil.", en: "That fisherman throws a casting net from a small boat." }, accept: ["a throw net", "a fishing net you cast by hand", "a round net"], drill: { jp: "Nelayan itu melempar jala dari perahu", en: "That fisherman throws a casting net from the boat" }, hint: "JA-la. The round net one person throws by hand and hauls back in. Different word from jaring, a net in general. Menjala means to fish with one." },
        { id: "id-u114l4-pukat", type: "vocab", front: "pukat", reading: "pukat", meaning: "a trawl net", example: { jp: "Pukat besar merusak terumbu karena kapal menarik pukat di bawah air.", en: "Big trawl nets damage reefs because the boat drags them under water." }, accept: ["a dragnet", "a seine net", "a net towed by a boat"], drill: { jp: "Pukat besar merusak terumbu di bawah air", en: "Big trawl nets damage reefs under water" }, hint: "POO-kaht. The big net a boat tows. Pukat harimau, literally tiger net, is the Indonesian name for a bottom trawl, and it is banned in Indonesian waters for exactly the reason in the example." },
        { id: "id-u114l4-muatan", type: "vocab", front: "muatan", reading: "muatan", meaning: "a cargo load", example: { jp: "Muatan kapal itu terlalu berat untuk air yang rendah.", en: "That ship's load is too heavy for low water." }, accept: ["freight", "a shipment on board", "the load carried"], drill: { jp: "Muatan kapal itu terlalu berat sekarang", en: "That ship's load is too heavy now" }, hint: "moo-A-tahn. What has been loaded, as a quantity. From muat, to fit or to hold — a bus that says tidak muat is full. Also used of a truck and of electrical charge." },
        { id: "id-u114l4-pelampung", type: "vocab", front: "pelampung", reading: "pelampung", meaning: "a buoy", example: { jp: "Setiap orang di kapal harus tahu di mana pelampung ada.", en: "Everyone on the ship has to know where the life rings are." }, accept: ["a life ring", "a float marker", "a flotation device"], drill: { jp: "Setiap orang harus tahu di mana pelampung ada", en: "Everyone has to know where the life rings are" }, hint: "puh-lam-POONG. Anything that floats on purpose — a channel marker, a life ring, the armbands a child wears. From apung, to float. Jaket pelampung is a life jacket." },
        { id: "id-u114l4-tenggelam", type: "vocab", front: "tenggelam", reading: "tenggelam", meaning: "to sink", example: { jp: "Perahu itu tenggelam dekat terumbu dan semua awak bisa pulang.", en: "That boat sank near the reef and all the crew got home." }, accept: ["to go under", "to go down beneath the water", "to be submerged"], drill: { jp: "Perahu itu tenggelam dekat terumbu karang", en: "That boat sank near the coral reef" }, hint: "teng-guh-LAHM, with ngg — the hum plus a hard g. Of a vessel, of a person in water, and of the sun: matahari tenggelam is how Indonesian says the sun sets. Also used of being swamped by work. ⚠️ \"To founder\" is deliberately NOT in this card's accept list — pendiri, a founder, is taught in this band and the grader cannot tell the two English words apart." },
        { id: "id-u114l4-surut", type: "vocab", front: "surut", reading: "surut", meaning: "to ebb", example: { jp: "Kalau air surut, orang bisa jalan sampai ke terumbu itu.", en: "When the water ebbs, people can walk all the way out to that reef." }, accept: ["to recede", "to fall back", "to go down of water"], drill: { jp: "Kalau air surut orang bisa jalan jauh", en: "When the water ebbs people can walk far out" }, hint: "SOO-root. Air surut is low tide; the rising tide is air pasang. Bare pasang is not taught as a card in this course, because the one front would have to carry the tide, a pair, and the act of installing something — the verb memasang, to install, IS taught and is the form you will meet. Surut also describes a crowd or a fever dying down." },
      ],
    },
  ],
};
