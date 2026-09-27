// RU Unit 1 — Азбука · 1 ("The alphabet, part 1") — PRE-A1
// ─────────────────────────────────────────────────────────────────────────────
// First contact with Russian, and with Cyrillic. Russian is an OWN-SCRIPT
// language, so Strand A is a six-unit pre-A1 band (u1–u6), not the single sounds
// unit a Latin language gets:
//     u1–u3  the 33 letters themselves, as `type: "glyph"` cards
//     u4     ударение — stress and vowel reduction, taught through real words
//     u5     твёрдо/мягко — palatalisation, ь, и vs ы
//     u6     the reading rules print does not show you (final devoicing, the
//            silent letters, г said "v", жи/ши/ча/ща)
// A learner finishing u6 can decode any printed Russian word aloud. They then
// have vocabulary before grammar, which is u22–u24's job.
//
// PRINT ONLY. Russian handwriting (курсив) is a genuinely different alphabet —
// т looks like m, д like g, и like u — and it is NOT taught here or anywhere in
// this course. There is no stroke data for Cyrillic (`scripts/fetch-kanjivg.mjs`
// is kanji-only) and none is coming, so the `trace` card does not route for a
// Cyrillic glyph. That is correct, not a gap: a learner types Russian, they do
// not hand-write it. Measured: eligibleKinds() on a Cyrillic glyph returns
// ["choice", "type:produce"] with no clip, and adds speak · listen:choice ·
// listen:type once the clip exists.
//
// ─────────────────────────────────────────────────────────────────────────────
// AUTHORING CONVENTIONS FOR RUSSIAN — binding on ALL ru units, every block.
// Settled by block 1 (the crew lead) 2026-09-27. Blocks 2 and 3 read this first.
// ─────────────────────────────────────────────────────────────────────────────
//
// 1. TRANSLITERATION — `reading` IS ASCII, AND THIS IS THE ONE SCHEME.
//    The contract requires `reading` to normalise to `[a-z]+`, and every Russian
//    front is Cyrillic, so every card carries a Latin transliteration. An
//    inconsistent scheme cannot be repaired later without changing ids, which
//    wipes mastery. Use exactly this table, letter by letter, and nothing else:
//
//      а a   б b   в v   г g   д d   е e   ё yo  ж zh
//      з z   и i   й y   к k   л l   м m   н n   о o
//      п p   р r   с s   т t   у u   ф f   х kh  ц ts
//      ч ch  ш sh  щ shch    ъ ∅   ы y   ь ∅   э e   ю yu   я ya
//
//    ⚠️ ь AND ъ ARE DROPPED from a word's reading. `читать` → "chitat",
//    `день` → "den". An apostrophe is NOT an option: `src/data/lint.js`
//    READING_CHARSET is /^[a-zāēīōū]+$/ and errors on anything else.
//    ⚠️ MEASURED, do not re-derive from memory: `normalizeReading(r, "ru")` is a
//    NO-OP on every reading written to this table (checked on 46 candidates
//    2026-09-27). It lowercases, strips whitespace, folds œ/æ/ø/ß, NFD-strips
//    combining marks and drops apostrophes/hyphens — none of which this scheme
//    produces. So the reading you author is the reading the grader compares.
//
//    THREE PLACES THE SCHEME IS LOSSY. Each is a real hazard, none is avoidable
//    without making the scheme unreadable, so AVOID THE COLLIDING PAIR INSTEAD:
//      (a) е and э both → "e". Positionally near-complementary (э is initial or
//          in loans), so no real pair collides — but check before you add one.
//      (b) ь/ъ dropped, so `быть`→"byt" and `быт`→"byt", `мать`/`мат`,
//          `есть`/`ест`. NEVER TEACH BOTH MEMBERS of a soft-sign minimal pair.
//      (c) ы and й both → "y". Also near-complementary (ы after consonants, й
//          after vowels or word-final), so `мой`/`мы` stay distinct. Check.
//
// 2. A GLYPH'S READING IS ITS SOUND, NOT THE WORD TABLE, AND ALL 33 ARE UNIQUE.
//    The glyph `choice` card offers READING options and `type:produce` PROMPTS
//    with the reading (`TypeCard.jsx` glyph branch), so two glyphs sharing one
//    reading is one card with two right answers — the gloss-collision defect,
//    for letters. Three readings therefore differ from the word table above:
//        е → "ye"            (its sound; the word table's "e" belongs to э)
//        ы → "ih"            (the closest English hint; in words ы is "y")
//        ь → "myagkiyznak"   ┐ no sound at all, so the reading is what a Russian
//        ъ → "tverdyyznak"  ┘ CALLS the letter — and what its clip should say.
//    Everything else is the word-table value. Do not invent a fourth exception.
//
// 3. NOUNS CARRY NO ARTICLE, AND GENDER GOES IN THE `hint`.
//    Russian has no articles, so the house rule "nouns are taught with their
//    gender marker" has nothing to attach to — inventing one would be an error,
//    not a convention. The front is the BARE NOMINATIVE SINGULAR. Gender is
//    readable off the ending and is NAMED IN THE HINT for every noun:
//        consonant ending → masculine   (дом, город, друг)
//        -а / -я          → feminine    (мама, вода, семья)
//        -о / -е          → neuter      (окно, письмо, море)
//        -ь               → EITHER, and unpredictable: день m, дверь f, ночь f,
//                           словарь m. ALWAYS name the gender on a -ь noun.
//    The handful of masculine nouns in -а (папа, дядя) get the hint too.
//
// 4. VERBS ARE HEADWORDED IN THE IMPERFECTIVE INFINITIVE, AND A1 TEACHES ONLY
//    THAT ASPECT. `читать`, `говорить`, `делать`. The perfective partner is
//    DEFERRED to A2/B1 — not because aspect is unimportant but because the pair
//    shares one gloss ("to do" for both делать and сделать), and a shared gloss
//    is one produce card with two right answers. When the A2 crew does teach a
//    perfective, the gloss MUST carry the discriminator:
//        делать   → "to do (imperfective)"
//        сделать  → "to do (perfective)"
//    ⚠️ ONE DOCUMENTED EXCEPTION IN THIS BLOCK, same shape as no/unit1.js §2's
//    `heter`: `нравится` (u8l4) is taught in the 3rd-person form, not as
//    `нравиться`. The infinitive has no natural short sentence a learner will
//    ever say, so it could carry no `drill` — and `мне нравится` is the only
//    form an A1 learner produces. Apply the same test if a second case appears.
//
// 5. CASE — WHAT A1 TEACHES AND WHAT IS DELIBERATELY DEFERRED.
//    Russian has six cases and they cannot all live in A1. This is the split;
//    u22–u24 (block 3) implement it and must not exceed it:
//        NOMINATIVE     every noun card, always. The citation form.
//        ACCUSATIVE     direct object. u23.
//        PREPOSITIONAL  в/на + location only. u23.
//        GENITIVE       negation (нет + gen) and possession (у меня). u23/u24.
//        DATIVE         FIXED FRAMES ONLY — мне нравится, сколько тебе лет.
//                       Not taught as a paradigm at A1.
//        INSTRUMENTAL   DEFERRED TO A2. Nothing in u1–u30 teaches it.
//    Also deferred: genitive plural as a paradigm (A2), aspect pairs (A2),
//    participles and verbal adverbs (B1), verbs of motion with prefixes (B1).
//    ⚠️ AN INFLECTED FORM IS NEVER ITS OWN CARD. `дом` is taught; `дома`,
//    `дому`, `домов` appear in examples and drills and never as a front. That
//    is the lexeme rule (RUNBOOK §4) and it is what keeps `год`/`лет` and
//    `ребёнок`/`дети` from becoming two mastery tracks for one word.
//
// 6. STRESS IS NEVER WRITTEN IN THE FRONT. Russian print does not mark it, and
//    an acute accent would make the front un-typeable and would NFD-fold away.
//    Stress goes in the `hint`, with the stressed syllable in CAPS:
//        hint: "ga-va-RIT — the stress is on the last syllable, and both о
//               reduce to a."
//    Every multi-syllable card says where the stress falls. This is not
//    decoration: Russian vowel reduction is entirely stress-driven, so a learner
//    who does not know the stress cannot pronounce the word at all.
//
// 7. ё IS ALWAYS WRITTEN. Russian print routinely prints е for ё; this course
//    does not, because the learner cannot hear what the page hides.
//    ⚠️ AND THIS CREATES A FOLD COLLISION YOU MUST RESPECT. `normalizeReading`
//    NFD-strips combining marks, and ё is е + diaeresis, й is и + breve. So,
//    measured 2026-09-27:
//        ё → "е"      й → "и"      всё → "все"      ещё → "еще"
//    `stampFoldCollisions` (src/data/index.js) stamps every member of a group
//    that shares a fold with a DIFFERENT spelling, which makes that card's typed
//    answer strict. Consequence, and it is fine: the glyphs е · ё · и · й accept
//    ONLY the Cyrillic character, while the other 29 also accept their ASCII
//    reading. NEVER TEACH BOTH MEMBERS of an ё/е or й/и word pair — `всё` is
//    taught, `все` is not; `ещё` is taught, `еще` is not.
//
// 8. THE GLYPH BAND IS CUMULATIVE (u1–u3 only). A lesson's exemplar WORD cards
//    use only letters introduced at or before that lesson — that is the whole
//    point of teaching an alphabet in order, and it is why u1l1's only word is
//    `мама`. `example` and `drill` SENTENCES are not letter-restricted: they are
//    read to the learner and met again in review, long after the band is done.
//    From u4 on the restriction is over — all 33 letters are taught.
//
// 9. GLOSSES ARE PROMPTS AND MUST BE UNIQUE IN RUSSIAN. Discriminate with a
//    parenthetical — "my (masculine)", "glad (masculine form)". A gloss must
//    never be ONLY a parenthetical: `normalizeMeaning` strips `\(.*?\)`, so
//    "(soft sign)" normalises to the empty string and the card is unanswerable.
//    ⚠️ AND AN INTERNATIONALISM MUST NOT GLOSS TO ITS OWN TRANSLITERATION.
//    `produceIsFreePass` fires when checkProduce(meaning) passes: `банк` glossed
//    "bank" accepts "bank", which is reading the answer off the prompt. A
//    leading article or a parenthetical fixes it — "a bank", "sport (the
//    activity)". Verified on all 24 u9 items: zero free passes.
//
// 10. UNIT TITLES ARE IN RUSSIAN. `src/data/lint.js` hard-errors on an authored
//    unit still wearing a scaffold working title, and BOTH of Russian's stub
//    patterns are on that list — /^Script \d+$/ and /^Characters \d+$/. Lesson
//    titles stay in English, matching no/ · es/ · de/ house style.
//    ⚠️ "Characters N" IS A JAPANESE SLOT (the interleaved kanji strand) AND
//    RUSSIAN HAS NO SUCH THING — the whole alphabet is done by u6. u9 was
//    "Characters 1" and is rethemed to `Знакомые слова`: internationalisms and
//    cognates, where the MEANING is free so the lesson is pure Cyrillic
//    decoding. That is the honest Russian equivalent of a character unit, and it
//    is what u12 · u15 · u18 · u21 should also become — see the hand-back note.
//
// ─────────────────────────────────────────────────────────────────────────────
// THEMES SPENT BY BLOCK 1 (u1–u10) — do not re-author these.
// ─────────────────────────────────────────────────────────────────────────────
//   the 33 letters · stress and reduction · palatalisation and ь · the reading
//   rules · greetings and politeness · introducing yourself (name, country,
//   language, job, age) · internationalisms and cognates · the family
//
// FRONTS RESERVED FOR LATER BLOCKS — a MEASUREMENT taken 2026-09-27 against
// `npm run taught -- ru` on this branch, not a promise. Re-probe before you use
// one; block 1's own later edits could have taken it.
//   u11 numbers/time: один два три … сто · минута · час · время · утро · вечер
//   u13 food:         вода is TAKEN (u4l1) · молоко TAKEN (u4l1) · хлеб TAKEN
//                     (u6l1) · сыр TAKEN (u5l2) · рыба TAKEN (u5l2) · чай TAKEN
//                     (u2l4) · чашка TAKEN (u6l3). Free: мясо суп овощи фрукты
//                     яблоко масло сахар соль is TAKEN (u5l1) · есть TAKEN
//                     (u10l3, glossed "there is, have")
//   u14 town:         город TAKEN (u6l1) · площадь TAKEN (u6l3) · машина TAKEN
//                     (u6l3) · дорога TAKEN (u4l1) · этаж TAKEN (u6l1) · метро
//                     TAKEN (u9l1) · банк парк кафе ресторан отель аэропорт
//                     университет театр TAKEN (u9). Free: улица магазин дом is
//                     TAKEN (u1l3) · вокзал · аптека · больница · церковь
//   u16 colours:      all free — цвет красный синий зелёный белый чёрный жёлтый
//   u17 days/months:  день TAKEN (u3l3) · ночь TAKEN (u5l1) · год TAKEN (u6l1) ·
//                     сегодня TAKEN (u6l2) · часы TAKEN (u6l3). Free: неделя ·
//                     завтра · вчера · утром · месяц · понедельник…воскресенье
//   u19 describing:   большой маленький новый старый хороший плохой all free —
//                     but `плохо` (adverb) is TAKEN (u7l3) and `хорошо` is TAKEN
//                     (u2l2); teach the ADJECTIVES, they are different lexemes
//   u20 body/health:  all free except врач (u2l3) and сердце (u6l2)
//   u22–u24 grammar:  every verb block 1 taught is available to conjugate —
//                     говорить читать писать работать жить знать понимать хотеть
//                     делать любить видеть слышать. Do NOT re-card them.
// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 1 IS NOW COMPLETE — u7–u10 AUTHORED 2026-09-27. WHAT THAT TOOK.
// ─────────────────────────────────────────────────────────────────────────────
// Added by the seat that finished the block. The reserved list ABOVE was written
// before u7–u10 existed, so it was a plan; this is the measurement. It holds
// against `npm run taught -- ru` and `src/data/ru/TAUGHT-WORDS.md` (240 words,
// 10 authored units) on this branch. **Re-probe with
// `node scripts/check-front.mjs ru "<front>"` before using any of it** — a
// snapshot is not a promise.
//
//   u7  Приветствие    здравствуйте · пока · до свидания · добрый · скоро ·
//                      господин · спасибо · пожалуйста · извините · простите ·
//                      жаль · ничего · как · плохо · нормально · отлично ·
//                      устал · немного · рад · приятно · вместе · вопрос ·
//                      ответ · удача
//   u8  Знакомство     мой · твой · фамилия · звать · знакомиться · кто · где ·
//                      страна · столица · откуда · родной · по-русски ·
//                      профессия · студент · учитель · инженер · повар ·
//                      водитель · возраст · нравится · музыка · книга · фильм ·
//                      кошка
//   u9  Знакомые слова метро · такси · автобус · аэропорт · трамвай · билет ·
//                      банк · парк · кафе · ресторан · отель · театр ·
//                      университет · директор · музей · компьютер · телефон ·
//                      интернет · проблема · идея · спорт · паспорт · адрес ·
//                      секрет
//   u10 Семья          семья · папа · отец · мать · сын · дочь · брат · сестра ·
//                      бабушка · дедушка · дядя · тётя · есть · ребёнок · муж ·
//                      жена · внук · похож · фотография · квартира · взрослый ·
//                      рядом · свадьба · праздник
//
// FOUR THINGS BLOCKS 2 AND 3 WILL TRIP ON IF NOBODY SAYS THEM:
//
// A. THE FOUR REMAINING "Characters N" SLOTS ARE THE SAME NON-PROBLEM AS u9.
//    u12 · u15 · u18 · u21 are scaffold stubs for a Japanese interleaved-kanji
//    strand Russian does not have. Retheme each one the way u9 was rethemed —
//    see unit9.js's header for the whole argument. There is far more
//    international vocabulary left than four units could hold. `lint.js`
//    hard-errors on /^Characters \d+$/ once a unit is authored, so this is not
//    optional; it is just cheaper to decide now than at the gate.
//
// B. THREE ADJECTIVES THE COURSE LEANS ON HARD ARE TAUGHT NOWHERE — AND THEY
//    ARE STILL YOURS. Counted 2026-09-27 over all 414 authored sentences, by
//    sentences containing any form of the word:
//        хороший (the ADJECTIVE, excluding the taught adverb хорошо)  u1–u6: 24
//        старый                                                       u1–u6: 11
//        красивый                                                     u1–u6:  6
//        каждый                                                       u1–u6:  4
//        но                                                           u1–u6:  6
//    Not one of them is a front anywhere. u7's `// FREE:` line declares старый ·
//    красивый · каждый · но as exposure-only so `scripts/scope-ru.mjs` stops
//    flagging them (хороший needs no declaration — it shares a stem with the
//    taught хорошо and the probe already accepts it, which is itself a reason to
//    not trust a silent probe). **CARDING THEM IS THE RIGHT FIX AND IT IS THE
//    describing-things unit's job.** Also still free: плохой, большой,
//    маленький, новый, трудный. The ADVERBS хорошо · плохо · легко · трудно ·
//    быстро · тихо are all TAKEN; the adjectives are different lexemes and get
//    their own cards.
//
// C. THE PRONOUN SET STOPS AT SIX. я · ты · он · она · мы · вы are taught; the
//    object forms меня and тебя are taught as their own cards. **они and их are
//    taught NOWHERE in u1–u10**, and no u7–u10 sentence uses them (checked by
//    hand 2026-09-27) however natural "their family" would have been. Whoever
//    needs the third person plural owns carding it.
//
// D. TWO LEXEME PAIRS WERE ALLOWED ON PURPOSE, SO DO NOT "FIX" THEM.
//    муж (u10) alongside мужчина (u3), and жена (u10) alongside женщина (u3).
//    `scripts/check-front.mjs` reported both free — and note WHY that is not
//    evidence: its lexeme probe strips GERMAN suffixes (ung/heit/keit/en/…) and
//    is blind to Cyrillic morphology, so **every LEXEME verdict for Russian is a
//    human judgement, not a measurement**. The judgement here: a learner who
//    knows мужчина means a man would not guess муж means a husband. Avoided on
//    the same test: дело (vs делать), работа (vs работать), разговор (vs
//    говорить), родина (vs родной), профессор (vs профессия), много (vs
//    немного), старший (vs старый).
//
// AND THE ONE TOOL THAT DID NOT EXIST: `scripts/scope-ru.mjs`. Example scope is
// UNGATED for Russian — `lint.js` runs `exampleScopeWarnings` only when
// `isLatinLang()` is true (>50% Latin fronts), and every Russian front is
// Cyrillic, so it returns silently. Run `node scripts/scope-ru.mjs` before every
// hand-back. Measured 2026-09-27: **u7–u10 flag 0 of 192 sentences; u1–u6 flag
// 108 of 222**, which is the previous seat's forward-referencing and is left
// alone deliberately rather than rewritten under a later seat's name.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT1 = {
  id: "ru-u1",
  lang: "ru",
  title: "Азбука · 1",
  order: 1,
  stage: "pre-a1",
  lessons: [
    {
      id: "ru-u1l1",
      unit: 1,
      lesson: 1,
      title: "Five letters you can already read",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read and type the five Cyrillic letters that look and sound like their Latin twins, and read your first Russian word.",
      items: [
        { id: "ru-u1l1-lettera", type: "glyph", front: "а", reading: "a", meaning: null, example: null, hint: "Same shape, same sound as English a in father. Stressed it is a full AH; unstressed it is a soft uh." },
        { id: "ru-u1l1-lettero", type: "glyph", front: "о", reading: "o", meaning: null, example: null, hint: "Same shape as o. Stressed it is a rounded OH — unstressed it turns into a, which is unit 4's whole lesson." },
        { id: "ru-u1l1-letterm", type: "glyph", front: "м", reading: "m", meaning: null, example: null, hint: "Same shape, same sound as m. The lower-case м keeps the same pointed middle as the capital." },
        { id: "ru-u1l1-lettert", type: "glyph", front: "т", reading: "t", meaning: null, example: null, hint: "Same shape, same sound as t. Say it with the tongue further forward than English — against the teeth, not the ridge." },
        { id: "ru-u1l1-letterk", type: "glyph", front: "к", reading: "k", meaning: null, example: null, hint: "Same shape, same sound as k, but with no puff of air after it. Russian k is dry." },
        { id: "ru-u1l1-mama", type: "vocab", front: "мама", reading: "mama", meaning: "mum", accept: ["mom", "mama", "mummy"], example: { jp: "Моя мама говорит по-русски каждый день.", en: "My mum speaks Russian every day." }, drill: { jp: "Это моя мама", en: "This is my mum" }, hint: "MA-ma, stress on the first syllable, so the second а reduces to uh. Feminine (-а). Your first Russian word uses only letters you already know." },
      ],
    },
    {
      id: "ru-u1l2",
      unit: 1,
      lesson: 2,
      title: "The false friends: Н, С, В, Р",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the four letters that look like Latin H, C, B and P but say something else entirely.",
      items: [
        { id: "ru-u1l2-lettern", type: "glyph", front: "н", reading: "n", meaning: null, example: null, hint: "Looks like H, says n. This is the single most misread letter in Cyrillic — НЕТ is not HET." },
        { id: "ru-u1l2-letters", type: "glyph", front: "с", reading: "s", meaning: null, example: null, hint: "Looks like C, says s — always s, never k. Think of the c in city and never in cat." },
        { id: "ru-u1l2-letterv", type: "glyph", front: "в", reading: "v", meaning: null, example: null, hint: "Looks like B, says v. The Russian b is a different letter you meet in lesson 4." },
        { id: "ru-u1l2-letterr", type: "glyph", front: "р", reading: "r", meaning: null, example: null, hint: "Looks like P, says a tapped r — one flick of the tongue, like the r in Spanish pero." },
        { id: "ru-u1l2-on", type: "vocab", front: "он", reading: "on", meaning: "he", accept: ["it (masculine)", "him"], example: { jp: "Он тоже говорит по-русски, но очень тихо.", en: "He also speaks Russian, but very quietly." }, drill: { jp: "Он здесь каждый день", en: "He is here every day" }, hint: "Say ON with a clear o. Two letters, both from this unit — and it also means it for any masculine noun." },
        { id: "ru-u1l2-vot", type: "vocab", front: "вот", reading: "vot", meaning: "here is", accept: ["here it is", "there it is", "this is"], example: { jp: "Вот моя мама, а вот мой дом.", en: "Here is my mum, and here is my house." }, drill: { jp: "Вот наш дом", en: "Here is our house" }, hint: "VOT — pointing at something and handing it over. Russian says вот where English says here is or there you go." },
      ],
    },
    {
      id: "ru-u1l3",
      unit: 1,
      lesson: 3,
      title: "У, Х, Д, Л",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the Russian u, the throat-sound х, and two new consonant shapes — then read the word for house.",
      items: [
        { id: "ru-u1l3-letteru", type: "glyph", front: "у", reading: "u", meaning: null, example: null, hint: "Looks like a y, says OO as in boot. Round your lips hard — Russian у is tighter than English oo." },
        { id: "ru-u1l3-letterkh", type: "glyph", front: "х", reading: "kh", meaning: null, example: null, hint: "Looks like an x, says the ch of Scottish loch — air scraping at the back of the throat. Never ks." },
        { id: "ru-u1l3-letterd", type: "glyph", front: "д", reading: "d", meaning: null, example: null, hint: "A new shape for a familiar sound: d, made with the tongue against the teeth. At the end of a word it goes quiet and says t." },
        { id: "ru-u1l3-letterl", type: "glyph", front: "л", reading: "l", meaning: null, example: null, hint: "A new shape for l, and it is a dark l — heavier than English, tongue hollowed, closer to the l in full." },
        { id: "ru-u1l3-dom", type: "vocab", front: "дом", reading: "dom", meaning: "a house", accept: ["house", "home", "a home", "a building"], example: { jp: "Вот наш дом, и он очень старый.", en: "Here is our house, and it is very old." }, drill: { jp: "Наш дом здесь", en: "Our house is here" }, hint: "DOM, one syllable, and the д goes quiet at the end — say DOMT, almost. Masculine (consonant ending). It covers both house and home." },
        { id: "ru-u1l3-tam", type: "vocab", front: "там", reading: "tam", meaning: "there", accept: ["over there", "in that place"], example: { jp: "Мама там, а я здесь.", en: "Mum is there, and I am here." }, drill: { jp: "Наш дом там", en: "Our house is there" }, hint: "TAM — over there, away from both of us. Pair it with вот, which is right here in your hand." },
      ],
    },
    {
      id: "ru-u1l4",
      unit: 1,
      lesson: 4,
      title: "Е, И, П, Б — and your first greeting",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the letters е, и, п and б, and read and type привет — a whole Russian word built only from unit 1.",
      items: [
        { id: "ru-u1l4-lettere", type: "glyph", front: "е", reading: "ye", meaning: null, example: null, hint: "Looks like e, says YE as in yes when stressed. Unstressed it flattens towards i. It also softens the consonant in front of it." },
        { id: "ru-u1l4-letteri", type: "glyph", front: "и", reading: "i", meaning: null, example: null, hint: "Looks like a backwards N, says EE as in see. It softens the consonant before it: ти is closer to tea than to toe." },
        { id: "ru-u1l4-letterp", type: "glyph", front: "п", reading: "p", meaning: null, example: null, hint: "Two legs and a roof — a Greek pi, and it says p. Dry, with no puff of air." },
        { id: "ru-u1l4-letterb", type: "glyph", front: "б", reading: "b", meaning: null, example: null, hint: "This is the real Russian b, not в. At the end of a word it goes quiet and says p." },
        { id: "ru-u1l4-net", type: "vocab", front: "нет", reading: "net", meaning: "no", accept: ["not", "there is no", "nope"], example: { jp: "Нет, это не мой дом.", en: "No, that is not my house." }, drill: { jp: "Нет это не так", en: "No that is not so" }, hint: "NYET — the н is softened by е, so it starts closer to ny than n. It also means there is no: нет воды, no water." },
        { id: "ru-u1l4-privet", type: "vocab", front: "привет", reading: "privet", meaning: "hi", accept: ["hello (informal)", "hey", "hi there"], example: { jp: "Привет! Вот моя мама.", en: "Hi! Here is my mum." }, drill: { jp: "Привет как дела", en: "Hi how are you" }, hint: "pri-VYET, stress at the end. INFORMAL — friends, family, anyone you would call ты. The formal version is здравствуйте, in unit 7." },
      ],
    },
  ],
};
