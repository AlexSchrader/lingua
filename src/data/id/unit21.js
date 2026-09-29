// ID Unit 21 — Tahu, ingat, dan pikir ("Knowing, remembering and thinking") — A2
// ─────────────────────────────────────────────────────────────────────────────
// A2 block 1 (u21–u30), authored 2026-09-29. Block 1 is the CREW LEAD for this
// band. The 12 conventions in unit1.js BIND this file and every A2 unit; the
// numbered list BELOW is the A2 layer on top of them. Blocks 2 (u31–u40) and 3
// (u41–u50): read both lists before your first card.
//
// ─────────────────────────────────────────────────────────────────────────────
// A2 CONVENTIONS FOR INDONESIAN — binding on u21–u50, every block.
// Settled by A2 block 1 (crew lead) 2026-09-29. These ADD TO unit1.js's 12; they
// do not replace any of them.
// ─────────────────────────────────────────────────────────────────────────────
//
// A1. ⚠️ **EIGHT OF THIS BLOCK'S TEN SCAFFOLD SLOTS NAMED A THEME A1 HAD ALREADY
//     SPENT IN FULL.** This is the single most important thing to know before you
//     author an A2 unit, and it is measured, not an impression. The A2 scaffold
//     titles were written for a language with no A1 yet; Indonesian's A1 went 20
//     units deep and took most of them:
//       u21 "Activities and routine" → **A1's u18 IS activities and routine**
//           (sarapan · berangkat · pulang · menonton · bermain · berenang ·
//           berolahraga · membaca · menulis). Full duplicate.
//       u22 "Feelings and states"    → **A1's u20 IS feelings and states**
//           (marah · sedih · takut · malu · bosan · kaget · merasa · khawatir ·
//           kecewa · rajin · malas). Full duplicate.
//       u24 "Work and school"        → A1's u3 + u18l3/l4 spent the basics
//           (bekerja · pekerjaan · guru · mahasiswa · pelajar · buku ·
//           pelajaran · kelas · ujian · pertanyaan). Partly spent.
//       u25 "Health and the body"    → **A1's u11 IS body and health, 24/24.**
//       u26 "Nature and animals"     → **A1's u19 IS animals and nature, 24/24.**
//       u27 "Shopping and money"     → **A1's u16 IS shopping and money, 24/24.**
//       u28 "Time and adverbs"       → u5 · u9 · u13 · u15l2 · u15l3 between them
//           spent clock, calendar, aspect, sequence and frequency.
//       u29 "Connecting words"       → A1's u12l3 spent yang · atau · tetapi ·
//           karena · kalau · untuk.
//       u30 "Home and household"     → **A1's u17 IS home and household, 24/24.**
//     Only **u23 (travel)** survived, and only because A1's u7 took *in-town*
//     transport and left the long journey empty.
//     **SO: NINE OF TEN SLOTS WERE RETHEMED, NOT JUST RETITLED.** Every one of
//     them is now built on a hole measured against the 480 authored A1 cards.
//     ⚠️ **BLOCKS 2 AND 3: YOUR TITLES WILL BE STALE THE SAME WAY.** u31
//     "Personality and character" duplicates A1's u20l1/l3 (tua · muda ·
//     ganteng · gemuk · kurus · rapi · rajin · malas · pintar · ramah · sabar ·
//     lucu) almost exactly, and u34 "Nature and science" duplicates u19 again.
//     **Probe the corpus before you accept a slot's theme.** The method is in A3.
//
// A2. THE HOLES A1 LEFT ARE VERBS AND ABSTRACTIONS, NOT MORE NOUNS. 480 A1 words
//     bought a very solid concrete vocabulary and almost no machinery for talking
//     about anything. Measured 2026-09-29 against all 480: Indonesian A1 had
//     **no word for to know, to think, to remember, to forget, to say, to tell,
//     to agree, to refuse, to promise, to make, to take, to bring, to put, to
//     send, to become, to happen, to succeed, to fail, to need, to decide, to
//     win, to lose** — and no noun for **a word, a sentence, a story, the news, a
//     meaning, a reason, a problem, a result, an idea, an opinion**. That is the
//     German `die Frage` failure at scale: a course that needs "I think that…"
//     in half its example sentences and never teaches *think*.
//     **This block spends 240 cards closing that list.** A2 is where a learner
//     stops naming things and starts saying things about them.
//
// A3. HOW TO PROBE A SLOT BEFORE YOU THEME IT — do this, do not guess. A bare
//     worktree has no node_modules and does not need one: `src/data/index.js`
//     runs on node builtins.
//       node -e "const {seedItems}=await import('./src/data/index.js'); \
//         for (const i of Object.values(seedItems()).filter(x=>x.lang==='id')) \
//         console.log(i.unit, i.front, i.meaning, i.accept.join('|'))"
//     Pipe it through grep for the English concept you are about to card. If it
//     comes back with a hit, **the concept is taken and the lower slot owns it**;
//     if it comes back empty, you have found a real hole. Nine of this block's
//     ten themes were chosen this way.
//
// A4. ⚠️ **`accept[]` IS WHERE THE COLLISIONS ACTUALLY ARE, NOT `meaning`.** The
//     gloss check everyone runs compares `meaning` fields. The defect that ships
//     is a new card's GLOSS duplicating an old card's ACCEPT entry, because
//     `checkMeaning` treats both alike — so one prompt ends up with two right
//     answers and the learner is marked wrong for the other one. Six were caught
//     by hand in this block **before** any card was written, and every one would
//     have passed `lint:curriculum` and `validate:content`:
//       `naik` accepts **"to take"**       → so `mengambil` is glossed "to pick up"
//       `memakai` accepts **"to use"**     → so `menggunakan` is NOT CARDED AT ALL
//       `datang` accepts **"to arrive"**   → so `tiba` is "to reach a destination"
//       `jalan` accepts **"way"**          → so `cara` is glossed "a method"
//       `susah` accepts **"hard"**         → so `keras` is "hard to the touch"
//       `kira-kira` accepts **"around"**   → so `sekitar` is "the area around"
//       `tetapi` accepts **"although"** AND **"however"** → so `meskipun` is
//         "even though" and `namun` is "nevertheless"
//       `kalau` accepts **"provided that"** → so `asalkan` is "as long as"
//       `tamu` accepts **"company"**       → so `perusahaan` is glossed "a firm"
//       `nomor` accepts **"numeral"**      → so `angka` is glossed "a digit"
//       `itu` IS **"that"**                → so `bahwa` is "the fact that"
//       `contoh` IS **"example"**          → so `misalnya` is "for example" and
//         its accept[] carries none of "example", "a sample", "an instance"
//     **Probe accept[] as well as meaning, every time.** And remember
//     `meaningVariants` SPLITS ON COMMAS and `normalizeMeaning` STRIPS
//     PARENTHESES, a leading a/an/the and a leading "to " — so "to use" and
//     "use" are the same string, and a post-comma discriminator protects nothing.
//
// A5. ⚠️ THE ter- SUPERLATIVE IS **CARDED AT A2**, and this closes A1's
//     deferral. A1's u14 declined ter- as a pattern and named `terbesar`,
//     `terbaik`, `terakhir` as what it was declining; A1's u15 then carded
//     `terakhir` as a lexical word. **Both were right, and the A2 call is: the
//     high-frequency ter- adjectives get cards, as LEXEMES, in u30 l1.** The
//     reasoning, so blocks 2 and 3 can apply it rather than re-argue it:
//       (a) **`paling` is not a substitute for comprehension.** `paling` is
//           always correct to PRODUCE, which is why A1 was right to teach it
//           alone. But the learner READS `terbaik`, `termurah`, `tertua` on
//           every sign, menu and headline in Indonesia. A word you cannot
//           understand is a hole whether or not you can paraphrase it.
//       (b) **ter- is not freely productive, so it is vocabulary, not a rule.**
//           `terbaik` is fixed and idiomatic; *terramai* and *terlucu* are odd.
//           A half-open set of frequent forms is a lexical fact, and lexical
//           facts get cards.
//       (c) **Convention 3's own test says yes.** Does knowing `baik` ("fine")
//           give you `terbaik` ("best")? No — you need the affix AND the fact
//           that this root takes it. Same test that split `belajar`/`mengajar`.
//       (d) ⚠️ **AND THE TEACHING POINT IS THE SPLIT, not the superlative.**
//           Indonesian already gave A1 six ter- words that are NOT superlatives:
//           `terang` (bright) · `terus` (keep on) · `terlalu` (too) · `terlambat`
//           (late) · `tertawa` (laugh) · `tersenyum` (smile) · `terakhir`
//           (final). A learner told "ter- means most" will read `terlambat` as
//           "most late". So u30 l1 cards five real superlatives plus `terkenal`
//           (famous — ter- + kenal, a STATIVE, not a superlative) and the hint on
//           that card is where the split gets taught.
//     **DEFERRED TO B1, on purpose:** ter- on a root the learner does not have,
//     and the `se-`…`-nya` superlative (`sebaik-baiknya`).
//
// A6. AFFIX DEPTH AT A2 — how many cards one root may carry, and the answer is
//     "as many as pass convention 3's test, and no more". A1 settled that affixes
//     DERIVE and both members are teachable. A2 pushes deeper because the useful
//     words are deeper, so the rule needs a ceiling and a procedure:
//       • **THE TEST IS UNCHANGED AND IT IS THE ONLY TEST.** Would a learner who
//         knows one already know the other? Count the roots, not the cards.
//       • **THREE CARDS OFF ONE ROOT IS FINE** where each is a different word.
//         This block does it four times and each is named here so nobody has to
//         rediscover it: `baik` → **baik** (A1) · **memperbaiki** (u25l3, to
//         repair) · **terbaik** (u30l1, best). `dapat` (root itself untaught) →
//         **pendapat** (u21l2, an opinion) · **mendapat** (u25l2, to get).
//         `usaha` (untaught) → **berusaha** (u21l4, to make an effort) ·
//         **perusahaan** (u24l1, a firm). `ubah` (untaught) → **mengubah**
//         (u25l3, to alter) · **berubah** (u25l4, to change).
//       • ⚠️ **THE me-/ber- VALENCY PAIR IS THE ONE THAT MUST BE CARDED TWICE.**
//         `mengubah` (I change something) vs `berubah` (it changes by itself) is
//         the single commonest Indonesian error an English speaker makes, and a
//         learner who has only one WILL produce the wrong one. Different lessons
//         (l3 and l4), and each hint names the other.
//       • **WHAT DOES NOT GET A SECOND CARD:** a nominalisation that adds nothing
//         (`mengerjakan` off `kerja`, when `bekerja` and `pekerjaan` are already
//         taught — declined in u24l3), and a form whose meaning the learner can
//         read straight off the parts (`kedua`, declined by A1's u15 for the same
//         reason).
//       • **DEFERRED TO B1:** `di-` passives and the `-kan`/`-i` valency affixes
//         as a PATTERN. A1 deferred them and A2 keeps them deferred — but note
//         that individual `-kan` words are carded here as ordinary vocabulary
//         (`mengizinkan`, `menawarkan`, `mengucapkan`, `menyarankan`,
//         `mengumpulkan`, `membandingkan`). The word is A2; the rule is B1.
//
// A7. ⚠️ AFFIXED AND REDUPLICATED FRONTS BREAK DRILLS IN BOTH DIRECTIONS, and
//     `lint:curriculum` cannot see it — lint uses `.includes()`, the router uses
//     `findWholeWord`. Two distinct failures, both live in this block:
//       • **A PREFIX HIDES A ROOT.** A drill containing `terbaik` does NOT
//         satisfy front `baik` (the `r` before it is a letter), and a drill
//         containing `berlibur` does NOT satisfy front `libur`. So a drill that
//         only carries the derived form fails the router while passing lint.
//       • **A HYPHEN DOES NOT.** `-` is not a letter, so a drill containing
//         `tiba-tiba` DOES whole-word-match front `tiba`, and one containing
//         `berkali-kali` DOES match front `kali`. **Checked in this block:**
//         u23l2 `tiba`'s drill carries no `tiba-tiba`, and u22l4 `diam`'s drill
//         carries no `diam-diam`. Reduplicate a taught word and you must check
//         the SHORTER card's drill, which is usually not in your file.
//
// A8. FOLD COLLISIONS AT A2 ARE THE MULTI-WORD CONNECTORS. Convention 9's rule
//     (strip spaces and hyphens) makes `oleh karena itu` → "olehkarenaitu",
//     `selain itu` → "selainitu", `kurang lebih` → "kuranglebih". Measured
//     through the real `normalizeReading(f, "id")` against all 480 A1 readings
//     plus this block's own 240: **zero collisions.** ⚠️ The near-miss to watch
//     is the space: `selain itu` and a hypothetical `selainitu` would collide, as
//     `ke mana`/`kemana` does. This block teaches only the spaced form of each.
//
// A9. REGISTER AT A2 IS UNCHANGED FROM CONVENTION 7 — standard Indonesian, the
//     everyday spoken form where both are universally understood, `aku` and the
//     Jakarta colloquial layer still deferred. Two A2 words sit right on that
//     line and are carded because a learner hears them constantly and they are
//     understood in every province: `bilang` (u22l1 — `mengatakan`/`berkata` in
//     the hint) and `gara-gara` (u29l2 — the negative-cause connector, where
//     `karena` is neutral). `nggak`, `banget`, `gue`, `lu` stay out.
//
// A10. ⚠️ TWO A1 FRONTS BLOCK AN A2 WORD, AND NEITHER IS AN OMISSION. A1 flagged
//     `bulan` (month) blocking *moon*. Two more surfaced here, same shape:
//       • **`halaman` (u17l1, "yard") blocks *page*.** Identical front, identical
//         reading. The page sense is named in `buku`-adjacent hints instead; do
//         not card a second `halaman`.
//       • **`tahu` (u21l1, "to know") blocks *tofu*.** Identical front, identical
//         pronunciation — Indonesians joke about it. Named in `tahu`'s hint.
//     And one COGNATE is deliberately uncarded: **`hotel`**, because the front
//     and the English gloss are the same string, which makes the card a copy
//     task (the `televisi`/`polisi`/`bus` trap). Named in `menginap`'s hint. The
//     travel cognates that DO differ in spelling are carded and are fine:
//     `tiket` · `paspor` · `turis` · `stasiun` · `proyek` · `kontrak` · `tim`.
//
// ─────────────────────────────────────────────────────────────────────────────
// THIS UNIT. Retitled and RETHEMED from the scaffold's "Activities and routine",
// which A1's u18 already is (see A1 above). The hole it fills instead is the
// largest single one in the corpus: **A1 had no verb for to know, to think, to
// remember or to forget.**
//   l1  knowing and forgetting — tahu · kenal · lupa · ingat · yakin · sadar
//   l2  thinking and opinion  — pikir · pendapat · ide · menurut · alasan · maksud
//   l3  believing and doubting — percaya · ragu · mengira · bingung · heran ·
//       pura-pura
//   l4  deciding and daring   — memutuskan · berani · sempat · mampu · berusaha ·
//       tergantung
//
// ⚠️ THE UNIT'S HINGE IS `tahu` vs `kenal`, and it is l1's whole reason for
// existing. English has one verb where Indonesian has two and the split is not
// optional: `tahu` takes a FACT, `kenal` takes a PERSON or a place. "Saya tahu
// Budi" is not a milder version of "Saya kenal Budi" — it is wrong. So the two
// sit adjacent in l1 and each hint names the other.
//
// AFFIX ROOTS CHECKED BY HAND (`check-front.mjs`'s LEXEME verdict fails open for
// Indonesian — unit1.js convention 3; a `free` on a prefixed form is worth
// nothing, so every one of these was stripped and grepped in TAUGHT-WORDS.md):
//   pendapat → dapat    ⚠️ `dapat` is NOT taught. `mendapat` (u25l2) is the other
//     card off it; see A6. Drill-safe both ways (n before dapat in each).
//   menurut → turut     root not taught.
//   mengira → kira      ⚠️ `kira-kira` IS taught ("roughly"). Carded anyway:
//     "roughly" does not give you "to assume". Drill-safe — findWholeWord("kira")
//     is not attempted (the taught front is the reduplication `kira-kira`, and
//     "mengira" contains no hyphen), and "mengira" does not contain "kira-kira".
//   memutuskan → putus  root not taught.
//   berusaha → usaha    ⚠️ root not taught; `perusahaan` (u24l1) is the other
//     card off it. Neither whole-word-contains the other. See A6.
//   tergantung → gantung  root not taught.
//   pura-pura           a non-plural reduplication (convention 5); `pura` alone
//     is a Balinese temple, not this word, and is not carded.
//   tahu · kenal · lupa · ingat · yakin · sadar · ide · alasan · maksud ·
//   percaya · ragu · bingung · heran · berani · sempat · mampu — all roots.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT21 = {
  id: "id-u21",
  lang: "id",
  title: "Tahu, ingat, dan pikir",
  order: 21,
  stage: "a2",
  lessons: [
    {
      id: "id-u21l1",
      unit: 21,
      lesson: 1,
      title: "Tahu dan kenal",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say whether you know a fact or know a person, keeping tahu and kenal apart, and admit when you have forgotten.",
      items: [
        { id: "id-u21l1-tahu", type: "vocab", front: "tahu", reading: "tahu", meaning: "to know", example: { jp: "Saya tidak tahu kenapa dia pergi.", en: "I do not know why he left." }, accept: ["know", "to know about", "to have heard"], drill: { jp: "Saya tahu nama guru itu", en: "I know that teacher's name" }, hint: "TAH-hoo, two clear syllables with the h sounded. It takes a FACT — tahu jalannya, tahu harganya. For knowing a PERSON you need kenal, the next card. ⚠️ Spelled and pronounced exactly like tahu, the word for tofu; only context separates them, and Indonesians make the joke constantly." },
        { id: "id-u21l1-kenal", type: "vocab", front: "kenal", reading: "kenal", meaning: "to know a person", example: { jp: "Saya sudah kenal ibu Siti.", en: "I already know Siti's mother." }, accept: ["to be acquainted with", "to have met", "to recognise someone"], drill: { jp: "Budi kenal semua tetangga di sini", en: "Budi knows all the neighbours here" }, hint: "kuh-NAHL. Only for PEOPLE and for places you have been — never for facts, where tahu is the word. Saya tidak kenal dia means you have never met him, not that you lack information. Formal Indonesian says mengenal; terkenal means famous, literally well known." },
        { id: "id-u21l1-lupa", type: "vocab", front: "lupa", reading: "lupa", meaning: "to forget", example: { jp: "Saya lupa nama toko itu.", en: "I forgot the name of that shop." }, accept: ["forget", "to slip your mind", "to have forgotten"], drill: { jp: "Ibu lupa kunci di dapur", en: "Mother forgot the key in the kitchen" }, hint: "LOO-pa. Nothing changes for tense — saya lupa is both I forget and I forgot, and sudah or tadi carries the time for you. Jangan lupa is the everyday don't forget. Kelupaan is the accidental kind, forgetting a thing you meant to do." },
        { id: "id-u21l1-ingat", type: "vocab", front: "ingat", reading: "ingat", meaning: "to remember", example: { jp: "Kamu masih ingat hari itu?", en: "Do you still remember that day?" }, accept: ["remember", "to recall", "to bear in mind"], drill: { jp: "Saya ingat wajah orang itu", en: "I remember that person's face" }, hint: "EE-ngat, with ng as one hum and the final t barely released. Learn it as the pair to lupa — Indonesians reach for ingat and lupa far more often than for any noun meaning memory. Mengingat is the formal twin; ingatan is the memory itself." },
        { id: "id-u21l1-yakin", type: "vocab", front: "yakin", reading: "yakin", meaning: "convinced", example: { jp: "Saya yakin dia akan datang besok.", en: "I am sure he will come tomorrow." }, accept: ["sure", "confident", "to be sure of it"], drill: { jp: "Guru yakin semua pelajar sudah siap", en: "The teacher is sure all the pupils are ready" }, hint: "YAH-keen, y as the y of YES. It describes the PERSON who is sure, where pasti describes the fact that is certain: saya yakin, but hasilnya pasti. Tidak yakin is the polite way to doubt something out loud. Keyakinan is a conviction or a faith." },
        { id: "id-u21l1-sadar", type: "vocab", front: "sadar", reading: "sadar", meaning: "aware", example: { jp: "Budi tidak sadar kalau saya ada di sana.", en: "Budi was not aware that I was there." }, accept: ["conscious", "to realise", "to notice"], drill: { jp: "Dia tidak sadar tangannya kotor", en: "He does not realise his hands are dirty" }, hint: "SAH-dar, with a light tap on the r. Sadar is NOTICING something that was already true; tahu is simply having the fact. It is also conscious in the medical sense — dia sudah sadar, he has come round. Kesadaran is awareness." },
      ],
    },
    {
      id: "id-u21l2",
      unit: 21,
      lesson: 2,
      title: "Pikiran dan pendapat",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Offer an opinion, attribute it to whoever holds it, and give the reason behind it.",
      items: [
        { id: "id-u21l2-pikir", type: "vocab", front: "pikir", reading: "pikir", meaning: "to think", example: { jp: "Saya pikir harga itu terlalu mahal.", en: "I think that price is too expensive." }, accept: ["think", "to reckon", "to be of the view"], drill: { jp: "Saya pikir hujan akan datang", en: "I think rain is coming" }, hint: "PEE-keer. Saya pikir is how an opinion starts in ordinary speech, and it is the everyday form: standard writing prefers berpikir, and pikiran is a thought or the mind itself. Pikir dulu means think it over first." },
        { id: "id-u21l2-pendapat", type: "vocab", front: "pendapat", reading: "pendapat", meaning: "an opinion", example: { jp: "Pendapat saya berbeda dengan pendapat ibu.", en: "My opinion is different from my mother's." }, accept: ["a view", "what someone thinks", "a point of view"], drill: { jp: "Pendapat guru sangat penting untuk kami", en: "The teacher's opinion is very important to us" }, hint: "puhn-DAH-pat. Built on dapat, to obtain, so it is literally what you have arrived at. Minta pendapat is to ask someone's opinion. ⚠️ Do not confuse it with mendapat, to get — same root, different word, and you meet mendapat later in this band." },
        { id: "id-u21l2-ide", type: "vocab", front: "ide", reading: "ide", meaning: "an idea", example: { jp: "Ide kamu bagus sekali!", en: "Your idea is really good!" }, accept: ["a thought", "a suggestion", "a plan of your own"], drill: { jp: "Saya punya ide untuk acara besok", en: "I have an idea for tomorrow's event" }, hint: "EE-day — two syllables, and the final e is a full e, not the swallowed one. Borrowed from Dutch, so it looks like English idea but is spelled and said shorter. Ide bagus! is the everyday good idea." },
        { id: "id-u21l2-menurut", type: "vocab", front: "menurut", reading: "menurut", meaning: "according to", example: { jp: "Menurut saya, warung itu paling enak.", en: "In my opinion, that food stall is the tastiest." }, accept: ["in the view of", "as someone sees it", "going by"], drill: { jp: "Menurut ibu saya harga itu mahal", en: "According to my mother that price is expensive" }, hint: "muh-NOO-root. Menurut saya is the commonest way to mark an opinion as yours — softer and more polite than saya pikir, and it is what you want in any formal setting. It also fronts a source: menurut koran, according to the paper." },
        { id: "id-u21l2-alasan", type: "vocab", front: "alasan", reading: "alasan", meaning: "a reason", example: { jp: "Apa alasan kamu tidak masuk kelas?", en: "What is your reason for not coming to class?" }, accept: ["a justification", "an excuse", "the grounds"], drill: { jp: "Saya tidak percaya alasan dia itu", en: "I do not believe that reason of his" }, hint: "ah-LAH-san. It answers kenapa with a noun instead of a clause. Tanpa alasan means for no reason; cari alasan, to look for an excuse, carries the same slight disapproval as the English. Beralasan means well founded." },
        { id: "id-u21l2-maksud", type: "vocab", front: "maksud", reading: "maksud", meaning: "what someone means", example: { jp: "Maksud saya baik, tetapi saya salah.", en: "What I meant was good, but I was wrong." }, accept: ["the point of it", "the sense of it", "what is intended"], drill: { jp: "Saya tidak mengerti maksud pertanyaan itu", en: "I do not understand the point of that question" }, hint: "MAHK-sood, the k caught in the throat. Two everyday uses: the intention behind an act, and what a person MEANS — apa maksudnya? is what do you mean? Tidak ada maksud apa-apa is I meant nothing by it." },
      ],
    },
    {
      id: "id-u21l3",
      unit: 21,
      lesson: 3,
      title: "Percaya dan ragu",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Say how far you trust a claim — believing it, doubting it, guessing at it, or being baffled by it.",
      items: [
        { id: "id-u21l3-percaya", type: "vocab", front: "percaya", reading: "percaya", meaning: "to believe", example: { jp: "Saya percaya teman saya.", en: "I trust my friend." }, accept: ["to trust", "to have faith in", "to take someone's word"], drill: { jp: "Ibu tidak percaya cuaca akan cerah", en: "Mother does not believe the weather will be clear" }, hint: "puhr-CHAH-ya — the c is CH and the y is a consonant. One word for both believing a statement and trusting a person; kepercayaan covers trust, belief and faith alike. Percaya diri, literally to believe yourself, is self-confidence." },
        { id: "id-u21l3-ragu", type: "vocab", front: "ragu", reading: "ragu", meaning: "to doubt", example: { jp: "Saya ragu dia bisa datang pagi ini.", en: "I doubt he can come this morning." }, accept: ["to be unsure", "to hesitate", "to have doubts"], drill: { jp: "Dia ragu untuk menjawab pertanyaan guru", en: "He hesitates to answer the teacher's question" }, hint: "RAH-goo, r a single light tap. The opposite pole from yakin — and note it is a VERB in Indonesian where English reaches for an adjective: saya ragu, I have doubts. Jangan ragu means don't hesitate. Also heard doubled, ragu-ragu, for dithering." },
        { id: "id-u21l3-mengira", type: "vocab", front: "mengira", reading: "mengira", meaning: "to assume", example: { jp: "Saya mengira kamu sudah pulang.", en: "I assumed you had already gone home." }, accept: ["to suppose", "to think mistakenly", "to guess"], drill: { jp: "Guru mengira semua pelajar sudah mengerti", en: "The teacher assumed all the pupils understood" }, hint: "muh-NGEE-ra, opening with the ng hum. It carries the suggestion that you were WRONG — saya mengira is usually the start of an apology, where saya pikir is neutral. Built on kira, to estimate, which you met doubled in kira-kira, roughly." },
        { id: "id-u21l3-bingung", type: "vocab", front: "bingung", reading: "bingung", meaning: "bewildered", example: { jp: "Saya bingung karena ada dua jalan.", en: "I am bewildered because there are two roads." }, accept: ["puzzled", "at a loss", "muddled"], drill: { jp: "Anak itu bingung dengan pertanyaan yang susah", en: "That child is confused by the difficult question" }, hint: "BEE-ngoong, two ng hums. Enormously common and much broader than any one English word: bingung covers being baffled, being undecided, and simply not knowing what to do next. Membingungkan is the thing that does it to you. Pusing is the dizzy, head-spinning cousin." },
        { id: "id-u21l3-heran", type: "vocab", front: "heran", reading: "heran", meaning: "astonished", example: { jp: "Saya heran dia masih bekerja malam ini.", en: "I am astonished he is still working tonight." }, accept: ["surprised", "amazed", "taken aback"], drill: { jp: "Ibu heran melihat kamar saya bersih", en: "Mother is astonished to see my room clean" }, hint: "HEH-ran. Cousin to kaget, which you met for a sudden fright — heran is the slower surprise of finding something hard to believe. Aneh is the word for the strange THING; heran is your reaction to it." },
        { id: "id-u21l3-purapura", type: "vocab", front: "pura-pura", reading: "purapura", meaning: "to pretend", example: { jp: "Adik saya pura-pura tidur.", en: "My younger brother is pretending to sleep." }, accept: ["to feign", "to put it on", "to make believe"], drill: { jp: "Dia pura-pura tidak mendengar saya", en: "He pretends not to hear me" }, hint: "POO-ra-POO-ra, both halves the same. A doubling that builds a NEW word rather than a plural, like sama-sama and hati-hati. It goes straight in front of the verb: pura-pura sakit, to pretend to be ill." },
      ],
    },
    {
      id: "id-u21l4",
      unit: 21,
      lesson: 4,
      title: "Memutuskan dan berani",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Commit to a decision, say whether you are up to something, and make the whole thing conditional on something else.",
      items: [
        { id: "id-u21l4-memutuskan", type: "vocab", front: "memutuskan", reading: "memutuskan", meaning: "to decide", example: { jp: "Kami memutuskan untuk tinggal di kota ini.", en: "We decided to stay in this city." }, accept: ["to make up your mind", "to settle on", "to resolve"], drill: { jp: "Ayah memutuskan untuk menjual mobil lama", en: "Father decided to sell the old car" }, hint: "muh-moo-TOOS-kan. From putus, to be severed — you decide by CUTTING off the other options, which is exactly the image. Keputusan is the decision itself. It nearly always takes untuk plus a verb: memutuskan untuk pergi." },
        { id: "id-u21l4-berani", type: "vocab", front: "berani", reading: "berani", meaning: "to dare", example: { jp: "Dia tidak berani berbicara dengan guru.", en: "He does not dare speak to the teacher." }, accept: ["brave", "bold", "to have the nerve"], drill: { jp: "Anak kecil itu berani berenang di laut", en: "That small child dares to swim in the sea" }, hint: "buh-RAH-nee. One word for both the adjective brave and the verb to dare, so dia berani is he is brave and he dares alike. Tidak berani is the everyday I daren't. Keberanian is courage." },
        { id: "id-u21l4-sempat", type: "vocab", front: "sempat", reading: "sempat", meaning: "to find the time", example: { jp: "Saya tidak sempat makan pagi ini.", en: "I did not get the chance to eat this morning." }, accept: ["to get the chance", "to manage to fit in", "to have a moment"], drill: { jp: "Kami sempat melihat pantai sebelum pulang", en: "We managed to see the beach before going home" }, hint: "SUHM-pat, the first e swallowed. Indonesian packs into one word what English needs a phrase for: tidak sempat is I didn't have time to, and it is one of the commonest excuses you will hear. Kesempatan is an opportunity." },
        { id: "id-u21l4-mampu", type: "vocab", front: "mampu", reading: "mampu", meaning: "capable", example: { jp: "Dia mampu membaca buku yang susah.", en: "She is capable of reading difficult books." }, accept: ["up to it", "competent", "to have the means"], drill: { jp: "Keluarga itu tidak mampu membayar sekolah anak", en: "That family cannot afford the child's schooling" }, hint: "MAHM-poo. Heavier than bisa: bisa is simply can, mampu is having the capacity or the money for it — tidak mampu is often specifically cannot afford. Kemampuan is an ability. Use bisa in conversation and mampu when the capacity is the point." },
        { id: "id-u21l4-berusaha", type: "vocab", front: "berusaha", reading: "berusaha", meaning: "to make an effort", example: { jp: "Saya berusaha datang tepat waktu.", en: "I am making an effort to arrive on time." }, accept: ["to try hard", "to strive", "to put the work in"], drill: { jp: "Pelajar itu berusaha mengerti pelajaran baru", en: "That pupil is trying hard to understand the new lesson" }, hint: "buh-roo-SAH-ha. Stronger than coba, to have a go: berusaha is sustained effort over time. From usaha, an effort or a business venture — the same root gives perusahaan, a firm, which you meet later in this band." },
        { id: "id-u21l4-tergantung", type: "vocab", front: "tergantung", reading: "tergantung", meaning: "to depend on", example: { jp: "Acara besok tergantung cuaca.", en: "Tomorrow's event depends on the weather." }, accept: ["conditional on", "to hinge on", "to be up to"], drill: { jp: "Harga kamar tergantung musim dan tempat", en: "The room price depends on the season and the place" }, hint: "tuhr-GAHN-toong. From gantung, to hang — the thing hangs on whatever comes next, which is the same picture English draws. Tergantung on its own is a complete answer, the shrug that means it depends. ⚠️ Here ter- does NOT mean most; see the note on terkenal later in this band." },
      ],
    },
  ],
};

// ───────────────────────────────────────────────────────────────────────────────
// THEMES SPENT BY A2 BLOCK 1 (u21–u30) — do not author these again.
// Norwegian authored "character and personality" three times because nobody
// tracked this, and Indonesian A1 already forced nine of this block's ten slots
// to be rethemed for the same reason (see A1 at the head of this file).
//   u21 knowing · thinking · believing · deciding  (the mental verbs)
//   u22 reporting · consenting · committing · conversing  (the speech verbs)
//   u23 long-distance travel: vehicles, terminals, the road, being a visitor
//   u24 the workplace: people, pay, tasks, outcomes  (SCHOOL IS NOT HERE — A1
//       finished it in u18 l3/l4; do not re-open it)
//   u25 handling objects: moving · passing · making · changing
//   u26 abstract nouns of language and thought; cause and effect
//   u27 measure words · containers · money over time · rough amounts
//   u28 sentence adverbs: narrative · reaction · scope · manner
//   u29 subordinating connectors: conceding · concluding · adding · embedding
//   u30 the ter- superlative · comparison · texture · dimension
//
// FRONTS RESERVED FOR BLOCKS 2 AND 3 — **a measurement taken 2026-09-29, not a
// promise.** Every word below is genuinely UNTAUGHT after u30 (checked against the
// live corpus, all 720 cards). Block 1 hit each of them while writing examples and
// had to route around it, which is the strongest possible evidence the word is
// wanted. If you own the slot, it is yours; if you do not, leave it.
//   FUNCTION WORDS, and these are the painful ones — A1 never taught them and
//   this block could not fit them, so every example in u21–u30 works around them:
//     kepada (to, of a person)  · pada (at/on, formal)  · atas (above)  ·
//     bawah (below)  · antara (between)  · luar (outside)  · ketika (when)  ·
//     hal (a thing, a matter)  · jelas (clear)  · buruk (bad, stronger than jelek)
//   ⚠️ `antara` is the worst of them: u30's own `perbedaan` card wants
//   "perbedaan antara A dan B" and cannot say it. **Card it early.**
//   NOUNS: pulau (island) · negara (country) · kertas (paper) · suara (voice) ·
//     kain (cloth) · barang (goods) · foto (a photograph) · jembatan (bridge) ·
//     kue (cake) · makanan/minuman (the -an nouns off makan/minum, both free) ·
//     darah · jantung · perawat · kecelakaan (the health specialisms u25 declined)
//   ADJECTIVES: rendah (low) · nyaman (comfortable) · segar (fresh) · aman (safe) ·
//     bahaya (dangerous) · asam (sour) · pahit (bitter) · matang (ripe/cooked) ·
//     mentah (raw) · bahagia (happy, deeper than senang) · sopan (polite)
//   VERBS: butuh / perlu (to need — A1 has only `harus`, must) · berisi (to
//     contain) · ikut (to come along) · menunjuk (to point out) · menanam (to
//     plant) · menyewa (to rent) · mengenal (formal twin of kenal — ⚠️ do NOT card,
//     convention 3) · turun (to go down) · mati (dead, of a light or engine)
//
// 🚨 WORDS THAT ARE **PERMANENTLY BLOCKED** — not reserved, blocked. Do not spend a
// slot rediscovering these; each is recorded with its reason:
//   `menggunakan` (to use)   — A1's `memakai` carries "to use" in its accept[].
//                              No honest alternative gloss exists. See unit25.js.
//   `hotel`                  — front and English gloss are the same string; the
//                              card would be a copy task. See unit23.js.
//   `bus`                    — same reason. A1's u7 already gives four vehicles.
//   *page*                   — A1's `halaman` (yard) holds the front. unit26.js.
//   *moon*                   — A1's `bulan` (month) holds the front. A1's u9.
//   *tofu*                   — this block's `tahu` (to know) holds the front.
//   `walaupun` · `agar`      — identical in meaning to `meskipun` · `supaya`,
//                              which are carded. Convention 3 forbids the second
//                              card. Both are named in their twin's hint.
//   `mengerjakan` · `kedua`  — declined on affix-depth grounds; see unit24.js and
//                              A1's unit15.js.
//
// ⚠️ AND CHECK THESE accept[] ENTRIES BEFORE YOU GLOSS ANYTHING — they are the
// ones that bit this block, and `lint:curriculum` sees none of them:
//   naik→"to take" · memakai→"to use" · datang→"to arrive" · jalan→"way" ·
//   susah→"hard" · kira-kira→"around"/"about"/"approximately" ·
//   tetapi→"although"/"however" · kalau→"provided that"/"supposing" ·
//   tamu→"company" · kuat→"firm" · nomor→"numeral" · tempat→"place" ·
//   toko→"to store" · membeli→"to get" · bisa→"a can"/"able" · pusing→"confused" ·
//   rencana→"an intention" · bersama→"along with"/"together with" ·
//   dengan→"together with" · dan→"as well as" · juga→"as well" ·
//   adalah→"namely" · sementara→"whereas" · nama→"to name" · membayar→"pay" ·
//   kenapa→"a why" · selalu→"without fail" · mengerti→"to get it"
// ───────────────────────────────────────────────────────────────────────────────
