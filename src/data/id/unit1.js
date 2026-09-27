// ID Unit 1 — Bunyi dan ejaan ("Sounds and spelling") — A1
// ─────────────────────────────────────────────────────────────────────────────
// First contact with Indonesian. Latin-script languages collapse Strand A to ONE
// unit (BUILD-BRIEF-language-blueprint.md §1). EVERY LESSON IS A SOUND FAMILY:
// the trap named in the title, taught through real high-frequency words that
// carry it — the shape src/data/no/unit1.js and src/data/fr/unit1.js settled on.
// (Modelled on those for SHAPE only. Japanese is not the template — see
// CLAUDE.md "No front language". Indonesian's content is Indonesian's.)
//
// ─────────────────────────────────────────────────────────────────────────────
// AUTHORING CONVENTIONS FOR INDONESIAN — binding on ALL id units, every block.
// Blocks 2 (u8–u14) and 3 (u15–u20): read this list before your first card.
// Settled by block 1 (crew lead) 2026-09-27.
// ─────────────────────────────────────────────────────────────────────────────
//
// 1. THIS UNIT HAS **ZERO GLYPH CARDS**, AND THAT IS A DECISION, NOT AN OMISSION.
//    The accent standard (RUNBOOK §4, CONTENT.md) makes unit 1 lessons 1–3 teach
//    each special letter as its own `type: "glyph"` card — hear it, say it, TYPE
//    it — because "a learner who cannot type é cannot write the language."
//    **Indonesian has no diacritics at all.** Every grapheme it uses is already
//    on an English keyboard, so the premise of the standard is absent. Three
//    measured reasons, not a preference:
//      (a) `reading` is the ASCII fold of `front`, and for every Indonesian
//          candidate (c · ng · ny · sy · kh · e) **front === reading**. So
//          `type:produce` prompts with `item.reading` and grades against
//          `item.front` (TypeCard.jsx, glyph branch, mode "produce") — it would
//          show "ny" and accept "ny". A copy task.
//      (b) `choice` for a glyph shows the glyph and offers READING options
//          (distractors.js — field is "reading" for kana|glyph; ChoiceCard.jsx
//          "Which sound is this?"). Same identity, same copy task.
//      (c) The two cards that WOULD teach — `listen:type` and `speak` — both
//          require `hasAudio(item)`. **There is no Indonesian companion in
//          server/companions.js**, so there is no voice to generate clips with.
//    That is 0 of 4 glyph cards that teach anything. CONTENT.md's own script
//    policy names this defect class: "type:reading displayed salut and asked the
//    learner to type salut… Does it route? is not Does it teach?" So we do not
//    manufacture glyph cards to fill the slot.
//    ⚠️ IF AN INDONESIAN VOICE IS EVER ADDED, revisit only `ng` · `ny` · `sy` ·
//    `kh` — the multigraphs, where "hear /ɲ/, type ny" is a genuine ask. Single
//    letters (`c`, `e`) stay out: there is nothing to find on the keyboard.
//
// 2. SO WHAT IS UNIT 1 FOR? **The sound-to-spelling map, taught through 24 real
//    words.** Indonesian spelling is near-phonemic, which is exactly why the
//    mismatches are so costly: an English reader guesses wrong confidently and
//    is never corrected. Four families, one per lesson, each genuinely hard:
//      l1  c = CH (never K, never S) · j = J        cukup · cinta · kucing …
//      l2  ng = one hum · ngg = hum + hard g        orang · uang · tunggu …
//      l3  ny = one sound · y = a consonant         banyak · punya · saya …
//      l4  e = swallowed schwa · final k = glottal  tidak · sedikit · pergi …
//    Stress is weak and roughly penultimate with NO vowel reduction, and r is a
//    light tap. Those two are pronunciation notes in `hint`s, not cards: there is
//    no spelling to get wrong, so there is nothing to test.
//    **The 24 words are function words and core verbs, not a theme.** They are
//    what lets unit 1 write its own examples (a sounds unit with no pronoun
//    cannot) and they belong to no later slot. Norwegian's u1 took `jeg`, `og`,
//    `det` for the same reason.
//
// 3. AFFIXES ARE **DERIVATIONS**, AND BOTH MEMBERS ARE TEACHABLE. Indonesian has
//    almost no inflection — no tense, no gender, no agreement, no article — so
//    the "lexeme = inflection" rule in RUNBOOK §4 barely fires. What it has is a
//    very productive affix system (me- · ber- · pe- · -kan · -an · -i · di-), and
//    those build NEW WORDS. `ajar` → `belajar` (to study) → `mengajar` (to teach)
//    → `pelajar` (pupil) → `pelajaran` (lesson) is five words, not one.
//    **The test is "would a learner who knows one already know the other?"** No
//    for those. Yes for a spelling/register variant of one word.
//      ✅ TAUGHT AS SEPARATE CARDS: bekerja / pekerjaan · belajar / mengajar ·
//         jalan (street) / berjalan (to walk) · sama-sama / bersama
//      ❌ NOT SPLIT, one card each: cari → only `mencari` (the root is the same
//         word, standard vs colloquial) · tunggu → only `tunggu` (menunggu is the
//         same word) · kenapa → only `kenapa` (mengapa is the formal twin)
//    ⚠️ **DO NOT WAIT FOR `check-front.mjs` TO WARN YOU — FOR INDONESIAN IT WILL
//    NOT.** Block 1 was briefed that `LEXEME` "will fire constantly here". It does
//    the OPPOSITE, and the failure is silent. MEASURED 2026-09-27 against the 168
//    fronts of this block: `LEXEME` fired on **0 of 14** real derivations of
//    already-taught roots — `memakan`, `makanan`, `minuman`, `pekerja`,
//    `kerjaan`, `jalanan`, `perjalanan`, `menjalan`, `masakan`, `ketiduran`,
//    `berpergian`, `kepergian`, `pemakan`, `tidur-tidur` ALL reported **free**
//    while their roots (`makan`, `minum`, `kerja`, `jalan`, `tidur`, `pergi`) are
//    taught in this block.
//    THE REASON, and it is structural: `stem()` in that script strips GERMAN
//    SUFFIXES (`ung|heit|keit|en|er|es|e|n|s`) and then compares the front of the
//    string. **Indonesian derives by PREFIX** (me- · ber- · pe- · ke- · per-), so
//    the prefix moves the start of the word and the stems never line up. The only
//    thing it does catch is one front being another minus a final n/s/e/r —
//    verified: `mani`/`manis`, `kotan`/`kota`, `besoke`/`besok` all reported
//    LEXEME, and none of those is a word.
//    SO: `TAKEN` and `SAME` are still trustworthy hard blocks, and a `free` on a
//    PREFIXED form is worth nothing. **Strip the affix yourself and grep the root
//    in TAUGHT-WORDS.md before you add any me-/ber-/pe-/per-/ke- word.** The risk
//    here is the mirror image of German's: not withholding a base word, but
//    teaching one root twice under two prefixes and getting a green gate for it.
//    ⚠️ Withholding a base word because a derivative
//    exists is how German shipped *survey*, *enquiry* and *demand* and never
//    taught **question** (17 core words, measured 2026-09-23). Do not repeat it.
//
// 4. VERBS ARE HEADWORDED IN THE FORM THAT APPEARS IN A SENTENCE — and that rule
//    exists for a mechanical reason, not for tidiness. A `drill` must contain its
//    own `front` as a WHOLE WORD (`findWholeWord`, cardRouting.js). `cari` is not
//    a whole word inside `mencari`, so headwording the bare root while writing
//    natural standard sentences makes the drill unroutable and
//    tests/unit/drill-corpus.test.mjs goes red. So:
//      • transitive verbs that standard Indonesian prefixes → keep the prefix:
//        `mencari`, `membaca`, `mengajar`, `menulis`, `memasak`
//      • ber- verbs → keep ber-: `belajar`, `bekerja`, `bertemu`, `berjalan`
//      • intransitive / stative / prefix-optional → bare: `makan`, `minum`,
//        `tidur`, `duduk`, `pergi`, `naik`, `masuk`, `keluar`, `suka`, `mau`,
//        `bisa`, `punya`, `tunggu`, `tanya`
//      The root goes in the `hint`, never in a second card, unless it is itself a
//      common independent word with its own meaning (`jalan` = street).
//
// 5. REDUPLICATION: **the plural is INFLECTION and gets no second card.** `anak`
//    and `anak-anak` are one lexeme in two numbers — the ja `見る`/`見ます` case.
//    So `anak` is a card, `anak-anak` is its `hint` and its example. What DOES get
//    a card is a reduplication that is **not** a plural, because there the
//    doubled form is its own word: `sama-sama` (you're welcome), `hati-hati`
//    (careful), `kira-kira` (roughly), `kadang-kadang` (sometimes). That is where
//    the learner meets the pattern, and no lexeme is taught twice.
//    ⚠️ IF YOU EVER DO CARD A REDUPLICATION, CHECK THE DRILL MECHANICALLY. A
//    drill containing `anak-anak` DOES satisfy front `anak` (the hyphen is not a
//    letter, so `findWholeWord` matches at index 0) and would blank half a word;
//    a drill containing `anak` does NOT satisfy front `anak-anak`. Neither is
//    visible to `lint:curriculum`, which only does a substring test.
//
// 6. NOUNS TAKE NO ARTICLE AND NO GENDER MARKER. Indonesian has neither, so the
//    house rule "nouns carry their article in the front" has nothing to carry:
//    the front is the bare noun (`rumah`, `uang`, `kucing`). Number is unmarked
//    too — `kucing` is "cat" or "cats" as context decides — so the English gloss
//    picks ONE and the hint says the word is indifferent. Do not invent "a" or
//    "the" into a front to make it look like fr/es/de.
//
// 7. REGISTER: **standard Indonesian, with the everyday spoken form preferred
//    where both are universally understood.** This band teaches `saya` (polite
//    I), `Anda` (formal you) and `kamu` (informal you); `aku` and the Jakarta
//    colloquial layer (`nggak`, `gue`, `lu`, `banget`) are DEFERRED — they are a
//    second system, and a learner who cannot yet be polite cannot afford it.
//    Where the spoken form is what a learner will actually hear and the formal
//    one is only written, the spoken form is the card and the formal one is in
//    the hint: `kenapa` (hint: mengapa), `tunggu` (hint: menunggu). Say which you
//    chose in the hint every time — a learner who meets only one is stuck.
//
// 8. A FIXED PHRASE AND ITS COMPONENT WORD MAY BOTH BE CARDS, when the bare word
//    has a use the phrase does not reveal. `selamat pagi` teaches a greeting;
//    `pagi` alone teaches a time of day and unlocks `jam tujuh pagi`. Same for
//    `selamat tinggal` / `tinggal` (to reside) and `sampai nanti` / `nanti`
//    (later). This is deliberate and consistent — it is convention 3's test
//    applied to phrases. Cross-reference them in the hint BY NAME, never by unit
//    number (see 10).
//
// 9. `reading` IS THE ASCII FOLD OF `front`, AND FOR INDONESIAN IT IS MECHANICAL.
//    There are no diacritics and no ligatures, so the fold only strips spaces and
//    hyphens: `terima kasih` → "terimakasih", `sama-sama` → "samasama",
//    `anak-anak` → "anakanak". MEASURED through the real `normalizeReading(f,
//    "id")` on 33 candidates including every reduplication and every multi-word
//    phrase in this block — all `[a-z]+`, zero failures.
//    ⚠️ ONE FOLD COLLISION CLASS EXISTS AND IT IS THE SPACE. `ke mana` and
//    `kemana` both fold to "kemana"; so would `di mana`/`dimana` and `ke
//    luar`/`keluar`. Two fronts sharing one fold makes a dictation card accept
//    the wrong word (it bit no and de). **This block teaches only the spaced or
//    only the solid form of each, never both** — `mana` bare, `keluar` solid.
//    Blocks 2 and 3: before adding any multi-word front, fold it and grep the
//    readings already in the corpus.
//
// 10. NO `(uNN)` CITATIONS IN HINTS, ANYWHERE IN THIS LANGUAGE. Seats have
//    fabricated these repeatedly — one sweep found 33 wrong, one pointing twelve
//    units forward, and a forward citation is worse than none. Indonesian's unit
//    numbers will also move if a slot is rethemed. Refer to words BY NAME
//    ("you met selamat tinggal as a goodbye"); the learner recognises the word,
//    and the claim cannot rot into a lie.
//
// 11. DEFERRED, ON PURPOSE — do not treat these as holes:
//     • the colloquial Jakarta layer (see 7)
//     • `di-` passives and `-kan`/`-i` valency affixes — they need a verb base
//       the learner does not have at A1; A1 teaches me-/ber-/pe-/-an only
//     • classifiers/measure words (`sebuah`, `seorang`, `sebutir`) — optional in
//       speech and a needless load before the nouns exist
//     • `yang` as a relativiser, `adalah`, `ini`/`itu` — these are u12's
//       (Grammar 1) subject and are reserved for it (see the list at the foot of
//       this file)
//
// 12. ⚠️ THE SCAFFOLD'S SLOT TITLES CARRY A JAPANESE ARTEFACT. `id-u13` is
//     stubbed **"Grammar 2 — verbs and particles"**. Indonesian has no particles
//     and no case; that title names a slot Japanese has. Portuguese and Norwegian
//     both shipped a unit called *"Register 3 — 敬語: humble and honorific"* by
//     taking a scaffold title literally. **Block 2 owns u13 and must retheme it**
//     — the honest Indonesian equivalent is verbs plus the aspect markers
//     (`sudah` · `belum` · `sedang` · `akan` · `masih`), which is where the
//     language actually puts that work. Retitling and rethemeing a slot is
//     ordinary authoring, not an escalation (CLAUDE.md "No front language").
//     Every title in this block is already rewritten in Indonesian; do the same.
//
// ─────────────────────────────────────────────────────────────────────────────
// TOOLING NOTE for blocks 2 and 3 — `scripts/check-front.mjs` could not be run
// against Indonesian before this file existed. It reads its CONTROL front from
// the first item of the language's unit 1 and exits 3 if that front does not
// report TAKEN; with `id` at zero items the control was `undefined` and the probe
// aborted. It works from now on (`id-u1l1-cukup` is the control). It also reads
// the LIVE corpus via src/data/index.js, so it sees only what is merged — not
// what your sibling block is writing right now.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT1 = {
  id: "id-u1",
  lang: "id",
  title: "Bunyi dan ejaan",
  order: 1,
  stage: "a1",
  lessons: [
    {
      id: "id-u1l1",
      unit: 1,
      lesson: 1,
      title: "C dan J — dua huruf yang menipu",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read a word spelled with c or j out loud and produce the sound Indonesian expects instead of the English one.",
      items: [
        { id: "id-u1l1-cukup", type: "vocab", front: "cukup", reading: "cukup", meaning: "enough", example: { jp: "Uang saya cukup.", en: "I have enough money." }, accept: ["sufficient", "adequate", "that is enough"], drill: { jp: "Uang Budi cukup sekarang", en: "Budi has enough money now" }, hint: "C is never a K and never an S in Indonesian: cukup opens like CHEW. Say CHOO-koop. On its own it also softens a refusal — cukup means \"that's enough, thanks\"." },
        { id: "id-u1l1-cinta", type: "vocab", front: "cinta", reading: "cinta", meaning: "love", example: { jp: "Saya cinta Indonesia.", en: "I love Indonesia." }, accept: ["to love", "affection"], drill: { jp: "Saya cinta Indonesia dan Bali", en: "I love Indonesia and Bali" }, hint: "CHIN-ta. The deep kind of love — for a person or a country. Indonesians do not say cinta about food; that needs a lighter word." },
        { id: "id-u1l1-kucing", type: "vocab", front: "kucing", reading: "kucing", meaning: "cat", example: { jp: "Saya punya kucing.", en: "I have a cat." }, accept: ["a cat", "cats"], drill: { jp: "Saya punya kucing dan Budi juga", en: "I have a cat and Budi does too" }, hint: "Two traps in one word: c is CH, and ng is a single hum made at the back of the mouth. KOO-ching. Nouns are not marked for number, so kucing is \"cat\" or \"cats\" as the sentence decides." },
        { id: "id-u1l1-mencari", type: "vocab", front: "mencari", reading: "mencari", meaning: "to look for", example: { jp: "Budi mencari kucing saya.", en: "Budi is looking for my cat." }, accept: ["to search for", "look for", "to seek", "search for"], drill: { jp: "Saya mencari uang dan kucing", en: "I am looking for money and a cat" }, hint: "Indonesian builds transitive verbs with me-: the root is cari, and men- + cari gives mencari. The c keeps its CH even buried in the middle — men-CHA-ree." },
        { id: "id-u1l1-juga", type: "vocab", front: "juga", reading: "juga", meaning: "also", example: { jp: "Saya juga pergi.", en: "I am going too." }, accept: ["too", "as well", "either"], drill: { jp: "Siti juga punya kucing", en: "Siti has a cat too" }, hint: "J is the J of JUDGE — never the Y of German ja, never the H of Spanish. JOO-ga. It FOLLOWS what it adds to: saya juga, not juga saya." },
        { id: "id-u1l1-jadi", type: "vocab", front: "jadi", reading: "jadi", meaning: "so", example: { jp: "Saya tidak punya uang, jadi saya tidak pergi.", en: "I have no money, so I am not going." }, accept: ["therefore", "so then", "and so"], drill: { jp: "Jadi Budi tidak pergi sekarang", en: "So Budi is not going now" }, hint: "JA-dee. Opens a consequence, exactly like English \"so\". The same word also means \"to become\" — one spelling, two jobs, and the sentence tells you which." },
      ],
    },
    {
      id: "id-u1l2",
      unit: 1,
      lesson: 2,
      title: "NG dan NGG — satu bunyi, bukan dua",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say ng as a single hum at the end and in the middle of a word, and hear the extra hard g in ngg.",
      items: [
        { id: "id-u1l2-orang", type: "vocab", front: "orang", reading: "orang", meaning: "person", example: { jp: "Saya orang Indonesia.", en: "I am Indonesian." }, accept: ["a person", "people", "human being"], drill: { jp: "Budi orang Indonesia juga", en: "Budi is Indonesian too" }, hint: "OH-rahng, ending in the hum of \"song\" — never OH-rang-guh with a g you can hear. Put a country after it and it means \"a ... person\": orang Indonesia." },
        { id: "id-u1l2-uang", type: "vocab", front: "uang", reading: "uang", meaning: "money", example: { jp: "Budi mencari uang.", en: "Budi is looking for money." }, accept: ["cash", "funds"], drill: { jp: "Budi mencari uang sekarang", en: "Budi is looking for money now" }, hint: "OO-ahng: both vowels sound, then the hum. Careful — uang is money and orang is a person. One letter apart, and Indonesians hear the difference." },
        { id: "id-u1l2-dengan", type: "vocab", front: "dengan", reading: "dengan", meaning: "with", example: { jp: "Saya pergi dengan Budi.", en: "I am going with Budi." }, accept: ["together with", "by", "using"], drill: { jp: "Siti duduk dengan Budi", en: "Siti is sitting with Budi" }, hint: "DUNG-ahn — the e is a swallowed uh and the ng hums straight into the next syllable. It covers both \"with a person\" and \"by means of\"." },
        { id: "id-u1l2-dan", type: "vocab", front: "dan", reading: "dan", meaning: "and", example: { jp: "Saya dan Budi pergi.", en: "Budi and I are going." }, accept: ["plus", "as well as"], drill: { jp: "Budi dan Siti punya kucing", en: "Budi and Siti have a cat" }, hint: "Plain d-a-n, DAHN, with no hum at all. Set it against dengan: dan joins two things, dengan puts you alongside one." },
        { id: "id-u1l2-tunggu", type: "vocab", front: "tunggu", reading: "tunggu", meaning: "to wait", example: { jp: "Tunggu saya, Budi!", en: "Wait for me, Budi!" }, accept: ["wait", "to wait for", "hold on"], drill: { jp: "Tunggu Budi dan Siti", en: "Wait for Budi and Siti" }, hint: "NGG is the hum PLUS a hard g: toong-GOO. Hold it against the bare hum in orang and you have the whole contrast. The full written form is menunggu; tunggu alone is how you tell someone to wait." },
        { id: "id-u1l2-jangan", type: "vocab", front: "jangan", reading: "jangan", meaning: "don't", example: { jp: "Jangan pergi sekarang!", en: "Don't go now!" }, accept: ["do not", "don't do that"], drill: { jp: "Jangan pergi dengan Budi", en: "Do not go with Budi" }, hint: "JAHNG-ahn, hum in the middle. It negates a COMMAND — jangan pergi, \"don't go\". A statement is negated with tidak instead, and swapping them is the commonest beginner slip." },
      ],
    },
    {
      id: "id-u1l3",
      unit: 1,
      lesson: 3,
      title: "NY dan Y — bunyi yang menyatu",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Say ny as one sound inside a word and read y as a consonant, so punya and saya come out right.",
      items: [
        { id: "id-u1l3-saya", type: "vocab", front: "saya", reading: "saya", meaning: "I", example: { jp: "Saya tidak pergi sekarang.", en: "I am not going now." }, accept: ["me", "my", "i am"], drill: { jp: "Saya mencari Budi dan Siti", en: "I am looking for Budi and Siti" }, hint: "SAH-ya, with y as the y of YES. The polite all-purpose \"I\" — safe with anyone, at any age, in any situation. After a noun it also means \"my\": kucing saya, my cat." },
        { id: "id-u1l3-ya", type: "vocab", front: "ya", reading: "ya", meaning: "yes", example: { jp: "Ya, saya punya uang.", en: "Yes, I have money." }, accept: ["yeah", "yep", "that's right"], drill: { jp: "Ya saya pergi dengan Budi", en: "Yes I am going with Budi" }, hint: "YAH. Tacked onto the end of a sentence it also softens it into a question, the way English adds \"right?\" — Budi pergi, ya?" },
        { id: "id-u1l3-banyak", type: "vocab", front: "banyak", reading: "banyak", meaning: "many", example: { jp: "Banyak orang mencari uang.", en: "Many people are looking for money." }, accept: ["a lot", "much", "a lot of", "lots of"], drill: { jp: "Budi punya banyak uang", en: "Budi has a lot of money" }, hint: "NY is ONE sound, the ny of CANYON: BAH-nyak. And the final k is swallowed into a catch in the throat — BAH-nya', with nothing released at the end." },
        { id: "id-u1l3-punya", type: "vocab", front: "punya", reading: "punya", meaning: "to have", example: { jp: "Saya punya kucing dan uang.", en: "I have a cat and money." }, accept: ["have", "to own", "own", "to possess"], drill: { jp: "Siti punya banyak kucing", en: "Siti has a lot of cats" }, hint: "POO-nya, ny as one sound. It needs no ending for any person — saya punya, Budi punya, orang punya. Indonesian verbs never agree with their subject." },
        { id: "id-u1l3-tanya", type: "vocab", front: "tanya", reading: "tanya", meaning: "to ask", example: { jp: "Tanya Budi, jangan tanya saya!", en: "Ask Budi, don't ask me!" }, accept: ["ask", "to ask about", "to enquire"], drill: { jp: "Tanya Siti dan Budi sekarang", en: "Ask Siti and Budi now" }, hint: "TAH-nya. The everyday form; formal Indonesian says bertanya, and a question itself is a pertanyaan — one root, three affixes, three words." },
        { id: "id-u1l3-hanya", type: "vocab", front: "hanya", reading: "hanya", meaning: "only", example: { jp: "Saya hanya punya sedikit uang.", en: "I only have a little money." }, accept: ["just", "merely", "no more than"], drill: { jp: "Budi hanya mencari uang", en: "Budi is only looking for money" }, hint: "HAH-nya. It sits in FRONT of what it limits: hanya saya, \"only me\". In conversation you will also hear cuma for the same job." },
      ],
    },
    {
      id: "id-u1l4",
      unit: 1,
      lesson: 4,
      title: "E yang lemah dan K yang tertahan",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Pronounce e as a swallowed uh where Indonesian expects it, and stop a word dead on a final k instead of releasing it.",
      items: [
        { id: "id-u1l4-tidak", type: "vocab", front: "tidak", reading: "tidak", meaning: "not", example: { jp: "Saya tidak punya kucing.", en: "I do not have a cat." }, accept: ["no", "do not", "does not", "isn't"], drill: { jp: "Siti tidak pergi dengan Budi", en: "Siti is not going with Budi" }, hint: "The final k is never released — the word stops in your throat: TEE-da'. It negates verbs and adjectives, and it is also the plain answer \"no\". Commands take jangan instead." },
        { id: "id-u1l4-duduk", type: "vocab", front: "duduk", reading: "duduk", meaning: "to sit", example: { jp: "Kucing saya duduk sekarang.", en: "My cat is sitting down now." }, accept: ["sit", "sit down", "to be seated"], drill: { jp: "Budi dan Siti duduk sekarang", en: "Budi and Siti are sitting down now" }, hint: "DOO-doo', with the final k caught in the throat and not let go. Both u's are OO — never the \"uh\" of English duck." },
        { id: "id-u1l4-sedikit", type: "vocab", front: "sedikit", reading: "sedikit", meaning: "a little", example: { jp: "Saya punya sedikit uang.", en: "I have a little money." }, accept: ["a few", "a bit", "little", "some"], drill: { jp: "Budi hanya punya sedikit uang", en: "Budi only has a little money" }, hint: "The first e is barely there: suh-DEE-kit, not say-DEE-kit. That swallowed e is the commonest vowel in Indonesian and the spelling never marks it. The opposite of banyak." },
        { id: "id-u1l4-kenapa", type: "vocab", front: "kenapa", reading: "kenapa", meaning: "why", example: { jp: "Kenapa Budi tidak pergi?", en: "Why isn't Budi going?" }, accept: ["how come", "what for", "for what reason"], drill: { jp: "Kenapa Siti tidak punya uang", en: "Why does Siti have no money" }, hint: "kuh-NAH-pa — another swallowed e. This is the everyday spoken form; writing and formal speech use mengapa. Both are understood everywhere, and you will hear kenapa far more." },
        { id: "id-u1l4-pergi", type: "vocab", front: "pergi", reading: "pergi", meaning: "to go", example: { jp: "Budi pergi sekarang.", en: "Budi is going now." }, accept: ["go", "to leave", "leave", "to depart"], drill: { jp: "Saya pergi dengan Siti dan Budi", en: "I am going with Siti and Budi" }, hint: "PUHR-ghee: swallowed e again, and the g is hard as in \"get\". Give the r a single light tap of the tongue — Indonesian never swallows it the English way." },
        { id: "id-u1l4-sekarang", type: "vocab", front: "sekarang", reading: "sekarang", meaning: "now", example: { jp: "Saya mencari kucing saya sekarang.", en: "I am looking for my cat now." }, accept: ["right now", "at the moment", "currently", "at present"], drill: { jp: "Siti pergi dengan Budi sekarang", en: "Siti is going with Budi now" }, hint: "suh-KAH-rahng — the swallowed e at the front and the hum at the end, both in one word. Indonesian has no tenses, so words like sekarang are what carry the time for you." },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// THEMES SPENT BY BLOCK 1 (u1–u7) — do not author these again.
// Norwegian authored "character and personality" three times because nobody
// tracked this. Named here so blocks 2 and 3 can see what is gone.
//   u1 sounds-to-spelling via function words + core verbs
//   u2 greetings by time of day · thanks and apologies · how-are-you · goodbyes
//   u3 name and pronouns · where you are from · work and study · likes and wants
//   u4 immediate family · extended family · partners and friends · the home
//   u5 numbers 1–5 · numbers 6–10 and zero · clock time · today and tomorrow
//   u6 ordering at a warung · everyday dishes · drinks · how food tastes
//   u7 places in town · position words · getting around · directions
//
// FRONTS RESERVED FOR LATER BLOCKS — a measurement taken 2026-09-27, not a
// promise. Block 1 deliberately did NOT teach these so the slot that owns them
// still has its subject. If you own the slot, they are yours; if you do not,
// leave them.
//   u8  colors/weather: panas · dingin · hujan · cuaca · angin · merah · putih
//                       hitam · biru · kuning
//   u9  days/months:    minggu · senin · bulan · tahun · tanggal · hari libur
//   u10 describing:     besar · kecil · baru · lama · tinggi · pendek · bagus
//                       cantik · cepat · lambat · berat · mudah · susah
//   u11 body/health:    kepala · tangan · kaki · mata · sakit · dokter · obat
//                       sehat · rumah sakit
//   u12 grammar 1:      ini · itu · adalah · ada · bukan · yang · atau
//   u13 grammar 2:      sudah · belum · sedang · akan · masih   (retheme the
//                       slot — see convention 12)
//   u14 grammar 3:      lebih · paling · daripada · sangat sekali contrasts
//   u15+ coverage:      beli · jual · harga · mahal · murah · masak · menulis
//                       membaca · pelajaran · nyanyi · kadang-kadang · jendela
//                       bangun pagi routines · animals · clothes
// ─────────────────────────────────────────────────────────────────────────────
