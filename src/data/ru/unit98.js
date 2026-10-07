// RU Unit 98 — Риторика и полемика ("Rhetoric and public argument") — B2
// ─────────────────────────────────────────────────────────────────────────────
// FIRST UNIT OF THE B2 BAND, and the first unit of BLOCK 1 (u98–u110), which is
// the CREW LEAD for this band — the LAST band in Russian. Everything in
// ru/unit1.js §1–§10 and §A–§D binds, and so does ru/unit31.js §1–§7 (A2),
// ru/unit51.js §1–§5 and ru/unit61.js §1–§8 (B1). Nothing in this header
// replaces any of that. Blocks 2 (u111–u123) and 3 (u124–u136) read §1–§7 below
// BEFORE authoring, and the A1/A2/B1 headers before it.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Argument and persuasion" AND B1 ALREADY SPENT THE
// LARGER HALF OF IT. u61 Согласие и возражение owns the ACT (поддерживать ·
// одобрять · отрицать · оспаривать · опровергать · настаивать · подчёркивать ·
// обвинять · осуждать · полагать · позиция); u39 Мнение и речь owns the opinion
// NOUNS (мнение · мысль · вывод · взгляд · суть · смысл · спор · доказательство);
// u46 Сложное предложение owns the connectors. So u98 takes what none of them
// has: the CRAFT — the parts of an argument, the public debate as an event, how
// an audience is carried, and the dishonest shapes an argument takes. Nothing
// here re-teaches a u39, u46 or u61 front.
//
// ═════════════════════════════════════════════════════════════════════════════
// B2 CONVENTIONS FOR RUSSIAN — binding on ALL ru units in u98–u136, every block.
// Settled by block 1 (the crew lead) 2026-10-06.
// ═════════════════════════════════════════════════════════════════════════════
//
// §1. WHAT B2 IS, AND WHY IT IS NOT "A LONGER B1 WORD".
//     A2 NAMES things. B1 RELATES them (unit61.js §1). B2 is where the learner
//     EVALUATES and CLASSIFIES: judges a claim's grounding, grades a quantity,
//     names the institution behind an act, and says what KIND of thing a thing
//     is. So a B2 card is judged on whether the WORD ITSELF carries a judgement
//     or a category that B1's word could not. `довод` (u52) is a reason; `веский`
//     is a verdict on a reason. `спор` (u39) is a quarrel; `полемика` is a quarrel
//     conducted in public, in print, with sides.
//     ⚠️ The DRILL stays short and flat (3–8 tokens, no punctuation, front
//     verbatim). The subordination goes in `example`. unit61.js §1 holds.
//
// §2. THE REAL CONSTRAINT AT B2 IS NOT THE FRONT — IT IS §D. Measured on this
//     block: of **930 distinct candidates probed** across 54 themed sections, the
//     derivation test and the documented bars refused substantially more than
//     front and reading uniqueness did. By B2
//     nearly every abstract Russian noun sits on a root the course already spent,
//     so §D (unit1.js), read one-directionally as unit51.js §3 and unit61.js §6
//     read it, decides the band. Each unit header records its own refusals.
//
// §3. ⚠️ A REASONED REFUSAL IN AN EARLIER UNIT HEADER OUTRANKS A FRONT PROBE,
//     AND IT COST THIS BLOCK THREE CANDIDATES IT HAD ALREADY LISTED AS FREE:
//       `обычай` probes FREE and is refused in unit51.js §3 against `обычный`
//            (u40). u105 cards `уклад` instead.
//       `старина` probes FREE and is refused in unit92.js against `старый`
//            (u19). u105 cards `предыстория` instead.
//       `убедительный` probes FREE and is refused in unit61.js §6 against
//            `убеждать` (u49). u98 cards `веский` instead.
//     **GREP THE HEADERS BEFORE YOU TRUST "FREE".** `grep -n "<candidate>"
//     src/data/ru/*.js` finds a refusal in one second; re-litigating one costs a
//     merge round.
//
// §4. ⚠️ A SUBSTANTIVISED ADJECTIVE IS STILL BARRED (unit1.js §5 last rule,
//     unit51.js §2b) AND AT B2 IT BITES THE USEFUL WORDS. Refused here, all five
//     clean on a front probe: `сборная` (a national team) · `родословная` (a
//     pedigree) · `зодчий` (an architect) · `набережная` (an embankment) ·
//     `данные` (data — the plural of `данный`, and `давать` is u23). Where the
//     concept is needed, card a true noun: `первенство` not сборная,
//     `статистика` not данные.
//
// §5. THE READING INVARIANT, RE-MEASURED. **2327 fronts to 2327 distinct
//     readings across u1–u97**, i.e. one reading per front, which unit1.js §2
//     makes the basis of the dictation card. It must still hold after B2.
//     Transliterate every candidate against unit1.js §1's table and check the
//     READING, not only the front — the two standing ru bars (`уголь` reads
//     "ugol" and so does `угол` from u12; `среда` IS Wednesday from u17) both
//     reproduce on a reading probe and neither on a front probe.
//
// §6. ALL SIXTEEN `Vocabulary N (B2)` SLOTS WERE ALLOCATED BEFORE ANY CARD WAS
//     WRITTEN, and the allocation went to blocks 2 and 3 as part of their
//     kickoff. At A2 this shape cost 104 re-authored cards across three
//     languages; at ru B1 it cost 82; Hindi's B1 lead, which issued per-slot
//     WORD LISTS **plus explicit cross-block boundaries**, came in at 41 on the
//     identical band shape. This band issued both. The boundary rules that touch
//     block 1's own range are repeated in u100, u103, u104, u107 and u109's
//     headers so a later seat finds them without the kickoff message.
//
// §7. TOOLING — THE FALSE GREEN IS UNCHANGED AND STILL THE MAIN HAZARD.
//     `npm run lint:curriculum` CANNOT scope-check Russian: `exampleScopeWarnings`
//     is gated on `isLatinLang()` and returns silently for Cyrillic, so **0 ru
//     warnings means NOT MEASURED**. Use `node scripts/scope-ru.mjs 98..110`.
//     Documented baselines that must not move: `1..30` = 1374 checked · 107
//     out-of-scope · `31..60` = 1440 · 0 · `61..97` = 1776 · 0.
//     `scripts/selfcheck-ru-b2-block1.mjs` is `selfcheck-ru-b1-block1.mjs` with
//     its range moved to u98–u110; it imports the REAL answer.js and
//     cardRouting.js and runs the same 29 checks. **Its corpus-wide baseline
//     before this block was 14 findings, every one in u1–u97** (7 glossCollision,
//     3 foldCollision — all three are u1–u3 glyph cards, which fold together by
//     construction — and 3 sameLessonSenseOverlap). This block must not add to it.
//     Also run `node scripts/qa/accept-collisions.mjs ru` (your primary gloss
//     against an earlier card's accept entry — no other tool sees it) and
//     `node scripts/qa/ship-gate.mjs ru`. ⚠️ ship-gate reports an AUDIO failure
//     for the whole band until the clips are generated, which is expected and is
//     the merge seat's one run.
//     ⚠️ `tests/unit/card-variety.test.mjs` GOES RED FOR THE SAME REASON AND THE
//     CEILING MUST NOT BE RAISED. `listen:choice`, `listen:type` and `speak` all
//     gate on `hasAudio`, so an unvoiced B2 card routes to `type:produce` and
//     little else. **Measured on this block, not inherited: with clips simulated
//     for u98–u110 by adding their ids to `AUDIO_IDS` in memory, ru's single-kind
//     count goes 28 → 0.** Voicing is the only fix; ru sat at 391 for the whole
//     of B1 and fell to 0 when B1 was voiced on 2026-10-06. `SINGLE_KIND_CEILING`
//     is Feature CC's file and the number is the only signal the band still needs
//     a run — raising it is weakening a test to force green.
//
// §7d. THE PROBE AND ITS EVIDENCE ARE COMMITTED, so this header cites a path that
//     still exists after the worktree is gone:
//         `node scripts/qa/front-probe.mjs ru --file scripts/data/ru-b2-candidates.txt`
//     `front-probe.mjs` checks FRONT, READING, GLOSS (through the grader's own
//     `normalizeMeaning`) and a 5-character STEM in one pass, for ANY language —
//     `front-taken.mjs`, `reading-taken.mjs` and `gloss-taken.mjs` each answer one
//     of those questions and all three import `HI_UNITS`, so none of them can be
//     run for Russian at all. Each of the four columns caught candidates the other
//     three passed: `среда` (front), `уголь` (reading), `хроника` (gloss),
//     `руководство` (stem). The STEM column is ADVISORY — §D's test is a human
//     judgement — and a clean line never outranks §3.
//
// §7b. unit61.js §7b STILL BINDS AND IS THE EASIEST RULE TO BREAK: NEVER WRITE
//     " or " OR A COMMA INSIDE AN accept[] ENTRY. `meaningVariants` splits on
//     `/`, `,`, `;` and the word `or`, so one well-written English accept entry
//     becomes two fragments and two cards in a lesson end up sharing one. ONE
//     sense per entry, mechanically.
//
// §7c. AN INTERNATIONALISM MUST NOT GLOSS TO ITS OWN TRANSLITERATION (unit1.js
//     §9), and B2 is nearly all internationalisms. Measured here: `аргумент`
//     glossed "an argument", `оппонент` "an opponent", `пропаганда`
//     "propaganda" and `апломб` "aplomb" are ALL exact free passes —
//     `produceIsFreePass` fires because the gloss normalises to the reading.
//     Every one is reglossed to a DESCRIPTION, never a synonym, and so is every
//     accept entry. Expect to do this on roughly a third of a B2 unit.
//
// ─────────────────────────────────────────────────────────────────────────────
// WHAT u98 REFUSED, so nobody re-litigates it:
//   `убедительный` + `убеждение` — unit61.js §6, against убеждать (u49). §3.
//   `словесный` — `слово` (u6) hands it over outright.
//   `риторический` — the same lexeme as the carded `риторика`.
//   `контраргумент` — the same lexeme as the carded `аргумент`, prefixed.
//   `неоспоримый` — `оспаривать` (u61) hands it over, and не+X is barred anyway.
//   `голословный` ALLOWED although it opens with the string `голос` (u39): the
//        word is голый+слово, not голос, the readings differ, and "a voice" does
//        not hand a learner "asserted with nothing behind it".
//   `красноречие` ALLOWED although it opens with `красный` (u16): красно+речие
//        is "beautiful speech", the semantic distance is the whole word, and this
//        is unit51.js §3's `одиночество` case exactly.
//   `передержка` · `довлеть` · `увещевать` · `трибун` · `казуистика` ·
//        `витиеватый` · `подоплёка` · `резонный` — all legal, all dropped for
//        count at 24. Named so the next seat knows they are there.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT98 = {
  id: "ru-u98",
  lang: "ru",
  title: "Риторика и полемика",
  order: 98,
  stage: "b2",
  lessons: [
    {
      id: "ru-u98l1",
      unit: 98,
      lesson: 1,
      title: "The parts of a case",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the parts an argument is built from — the claim, the supporting point, the grounding, the starting assumption and the inference — and say when a reason carries real weight.",
      items: [
        { id: "ru-u98l1-tezis", type: "vocab", front: "тезис", reading: "tezis", meaning: "the claim a speaker sets out to prove", accept: ["the proposition under debate", "what an argument is trying to establish", "the central assertion of a speech"], example: { jp: "Хотя его тезис звучал очень смело, доказательств он так и не привёл.", en: "Although his claim sounded very bold, he never produced any proof." }, drill: { jp: "Его тезис звучал очень смело", en: "His claim sounded very bold" }, hint: "TE-zis — stress on the first syllable. MASCULINE. In an academic sense it is the single sentence a whole paper defends; in the plural тезисы it is the printed abstract of a talk. ⚠️ Do not confuse it with `мысль`, a thought, from unit 39 — a тезис is a thought you have undertaken to prove." },
        { id: "ru-u98l1-argument", type: "vocab", front: "аргумент", reading: "argument", meaning: "a point made in support of a view", accept: ["a supporting point", "a reason put forward in a debate", "a piece of reasoning offered as support"], example: { jp: "Этот аргумент был бы веским, если бы он опирался на факты.", en: "This point would carry weight if it rested on facts." }, drill: { jp: "Этот аргумент опирается на факты", en: "This point rests on facts" }, hint: "ar-gu-MENT — stress on the last syllable. MASCULINE. ⚠️ Glossed the long way round on purpose: the word transliterates to the English one, and a prompt you can read the answer off is not a card — the trap unit 1 names. ⚠️ Russian аргумент is one point among several; the whole dispute is `спор` from unit 39, never аргумент." },
        { id: "ru-u98l1-obosnovanie", type: "vocab", front: "обоснование", reading: "obosnovanie", meaning: "the grounding given for a claim", accept: ["the reasoning that holds a claim up", "the case made for why something is so", "the stated foundation of a position"], example: { jp: "Министр потребовал обоснования, прежде чем подписать это распоряжение.", en: "The minister demanded a grounding before signing this order." }, drill: { jp: "Обоснование этого решения очень слабое", en: "The grounding for this decision is very weak" }, hint: "a-bas-na-VA-ni-ye — six syllables, stress on VA, and both о before it reduce. NEUTER (-ие). Built on `основа` from unit 52 with the о- prefix, which unit 61 sets as the allowed shape. ⚠️ A bureaucratic word in daily Russian: без обоснования, with no grounds given." },
        { id: "ru-u98l1-posylka", type: "vocab", front: "посылка", reading: "posylka", meaning: "the starting assumption of an argument", accept: ["a premise reasoning is built on", "what an argument takes for granted at the outset", "the assumed starting point of a chain of reasoning"], example: { jp: "Вывод был бы верным, если бы сама посылка не была ложной.", en: "The conclusion would be right if the starting assumption itself were not false." }, drill: { jp: "Сама посылка оказалась ложной", en: "The starting assumption itself turned out to be false" }, hint: "pa-SYL-ka — stress on SYL, and the first о reduces to a. FEMININE (-а). ⚠️ IT ALSO MEANS A PARCEL, and that is the sense you will meet at a post office far more often — отправить посылку. The logical sense is the one this card teaches, and context separates them completely." },
        { id: "ru-u98l1-umozaklyuchenie", type: "vocab", front: "умозаключение", reading: "umozaklyuchenie", meaning: "an inference drawn from premises", accept: ["what reasoning arrives at from its assumptions", "a step of reasoning from one claim to the next", "a reasoned deduction"], example: { jp: "Это умозаключение кажется верным, однако оно опирается на очень смутную посылку.", en: "This inference looks right, yet it rests on a very vague premise." }, drill: { jp: "Это умозаключение кажется вполне верным", en: "This inference looks entirely right" }, hint: "u-ma-za-klyu-CHE-ni-ye — seven syllables, stress on CHE. NEUTER (-ие). A compound of ум, mind, and заключение — literally a shutting-up of the mind on something. ⚠️ Narrower than `вывод` from unit 39: a вывод is any conclusion, an умозаключение is one reached by formal reasoning." },
        { id: "ru-u98l1-veskiy", type: "vocab", front: "веский", reading: "veskiy", meaning: "carrying real weight in a debate", accept: ["weighty enough to be taken seriously", "hard to brush aside", "substantial as a reason"], example: { jp: "Если у вас есть веские основания, суд должен вас слушать.", en: "If you have weighty grounds, the court must hear you." }, drill: { jp: "Это очень веский аргумент", en: "This is a very weighty point" }, hint: "VES-kiy — stress on the first syllable. ADJECTIVE. From вес, a weight, from unit 37 — but of arguments and reasons, never of objects: a heavy box is тяжёлый, from unit 47. ⚠️ Its commonest pairings are fixed: веский аргумент, веские основания, веское слово." },
      ],
    },
    {
      id: "ru-u98l2",
      unit: 98,
      lesson: 2,
      title: "The public argument",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a dispute conducted in public — a controversy, a formal discussion, the exchange of speeches, the person on the other side — and say how one side parries and digs in.",
      items: [
        { id: "ru-u98l2-polemika", type: "vocab", front: "полемика", reading: "polemika", meaning: "a controversy carried on in public", accept: ["a dispute fought out in print", "a public quarrel between two sides", "an open exchange of attacks on a question"], example: { jp: "Полемика вокруг этой статьи шла почти целый год.", en: "The controversy around this article went on for nearly a whole year." }, drill: { jp: "Полемика вокруг статьи шла целый год", en: "The controversy around the article went on a whole year" }, hint: "pa-LE-mi-ka — stress on LE, and the first о reduces to a. FEMININE (-а). ⚠️ Bigger and more public than `спор` from unit 39: a спор happens between two people in a room, a полемика in newspapers and over months. The adjective is полемический." },
        { id: "ru-u98l2-diskussiya", type: "vocab", front: "дискуссия", reading: "diskussiya", meaning: "a formal discussion of a question", accept: ["an organised exchange of views", "a structured debate on a topic", "a discussion held to settle something"], example: { jp: "Пока шла дискуссия, никто так и не сказал ничего нового.", en: "While the formal discussion went on, nobody said anything new." }, drill: { jp: "Дискуссия шла очень долго", en: "The formal discussion went on very long" }, hint: "dis-KUS-si-ya — stress on KUS, and the сс is held a beat longer. FEMININE (-я). ⚠️ More organised than `беседа` from unit 39, which is a friendly talk, and far cooler than полемика in this lesson: a дискуссия has a chairman and a topic." },
        { id: "ru-u98l2-preniya", type: "vocab", front: "прения", reading: "preniya", meaning: "the formal exchange of speeches in a chamber", accept: ["the floor debate at a sitting", "set speeches made one after another", "the speaking stage of a formal meeting"], example: { jp: "После доклада начались прения, и каждый депутат получил ровно пять минут.", en: "After the report the floor debate began, and each deputy got exactly five minutes." }, drill: { jp: "После доклада начались долгие прения", en: "After the report a long floor debate began" }, hint: "PRE-ni-ya — stress on the first syllable. ⚠️ PLURAL ONLY and NEUTER — there is no singular прение in use, exactly like `похороны` from unit 59. A parliamentary and courtroom word: прения сторон is the stage where each side speaks." },
        { id: "ru-u98l2-opponent", type: "vocab", front: "оппонент", reading: "opponent", meaning: "the person arguing the other side", accept: ["the one who argues against you", "your adversary in a debate", "whoever is set to speak against a thesis"], example: { jp: "Его оппонент говорил спокойно, хотя слушать такие упрёки было трудно.", en: "The person arguing against him spoke calmly, although such reproaches were hard to hear." }, drill: { jp: "Его оппонент говорил очень спокойно", en: "The one arguing against him spoke very calmly" }, hint: "ap-pa-NENT — stress on the last syllable, both о reduce to a, and the пп is held. MASCULINE. ⚠️ Glossed the long way round on purpose: it transliterates to the English word. ⚠️ Narrower than a generic adversary — it is specifically whoever is arguing, and at a Russian thesis defence it is an official appointed role." },
        { id: "ru-u98l2-parirovat", type: "vocab", front: "парировать", reading: "parirovat", meaning: "to turn an attack back on the attacker", accept: ["to answer a thrust with a counter-thrust", "to deflect a charge and return it", "to hit back at a point immediately"], example: { jp: "Он умел парировать любой упрёк, хотя своих доводов у него почти не было.", en: "He knew how to parry any reproach, although he had hardly any reasons of his own." }, drill: { jp: "Он умеет парировать любой упрёк", en: "He knows how to parry any reproach" }, hint: "pa-RI-ra-vat — stress on RI. IMPERFECTIVE AND PERFECTIVE AT ONCE, which is rare: парировать serves both aspects, so there is no partner to learn. A fencing term carried into argument. ⚠️ It takes the accusative directly: парировать вопрос, never парировать на вопрос." },
        { id: "ru-u98l2-uporstvovat", type: "vocab", front: "упорствовать", reading: "uporstvovat", meaning: "to dig in and refuse to shift", accept: ["to hold a line stubbornly", "to keep pressing a point against all pushback", "to go on refusing to give ground"], example: { jp: "Можно было давно уступить, но он продолжал упорствовать в своём заблуждении.", en: "He could have conceded long ago, but he went on digging in over his own error." }, drill: { jp: "Он продолжает упорствовать в своём заблуждении", en: "He goes on digging in over his own error" }, hint: "u-POR-stva-vat — stress on POR. IMPERFECTIVE with no perfective partner in use. From упорный, stubborn. ⚠️ It governs в plus the prepositional: упорствовать В чём-то. Cooler and more literary than `настаивать` from unit 61, which is simply to insist; упорствовать carries the speaker's disapproval." },
      ],
    },
    {
      id: "ru-u98l3",
      unit: 98,
      lesson: 3,
      title: "Carrying an audience",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a speaker works on a crowd — the craft of speaking, eloquence, high feeling, sheer force, a rallying phrase and open campaigning.",
      items: [
        { id: "ru-u98l3-ritorika", type: "vocab", front: "риторика", reading: "ritorika", meaning: "the craft of speaking so as to convince", accept: ["the art of public speech", "the skill of putting a case well", "the technique of persuasive speaking"], example: { jp: "Его риторика была сильной, однако ничего нового он не сказал.", en: "His craft of speaking was strong, yet he said nothing new." }, drill: { jp: "Его риторика была очень сильной", en: "His craft of speaking was very strong" }, hint: "ri-TO-ri-ka — stress on TO. FEMININE (-а). ⚠️ The Russian word has the same double life as the English one: both the honourable craft and, in the press, empty talk — «это пустая риторика». The adjective риторический is not carded; it is the same lexeme." },
        { id: "ru-u98l3-krasnorechie", type: "vocab", front: "красноречие", reading: "krasnorechie", meaning: "the gift of speaking beautifully", accept: ["a natural fluency that moves people", "the ability to speak with grace and force", "verbal brilliance"], example: { jp: "Красноречие помогло ему, хотя сами доводы были довольно слабыми.", en: "Eloquence helped him, although the reasons themselves were rather weak." }, drill: { jp: "Красноречие помогло ему во всём", en: "Eloquence helped him in everything" }, hint: "kras-na-RE-chi-ye — stress on RE, and the о reduces to a. NEUTER (-ие). A compound of красный in its OLD sense of beautiful plus речь, speech, from unit 39 — so literally beautiful speech, and nothing to do with the colour from unit 16. ⚠️ Always a compliment, unlike риторика." },
        { id: "ru-u98l3-pafos", type: "vocab", front: "пафос", reading: "pafos", meaning: "a raised pitch of feeling in speech", accept: ["high emotional intensity in a performance", "lofty feeling worked up in an audience", "an elevated emotional charge"], example: { jp: "В его голосе было столько пафоса, что публика сначала просто молчала.", en: "There was so much lofty feeling in his voice that the audience was at first simply silent." }, drill: { jp: "Пафос был здесь совсем лишним", en: "The lofty feeling was quite out of place here" }, hint: "PA-fos — stress on the first syllable. MASCULINE. ⚠️ A FALSE FRIEND FOR AN ENGLISH SPEAKER: it is NOT pathos in the sense of pity. Russian пафос is elevated emotional pitch, and in everyday speech it has turned faintly mocking — пафосный ресторан is a pretentious restaurant." },
        { id: "ru-u98l3-napor", type: "vocab", front: "напор", reading: "napor", meaning: "the sheer force someone presses with", accept: ["the drive behind a push", "forceful pressure brought to bear", "the momentum of a hard push"], example: { jp: "Такого напора никто не ждал, и спорить с ним больше не стали.", en: "Nobody expected such force, and they stopped arguing with him altogether." }, drill: { jp: "Его напор удивляет даже оппонента", en: "His force surprises even the one arguing against him" }, hint: "na-POR — stress on the last syllable. MASCULINE. Of water in a pipe as well as of a person in an argument: напор воды. ⚠️ Not the same as `давление` from unit 54, which is physical pressure as a measured quantity; напор is the felt push of someone coming at you." },
        { id: "ru-u98l3-lozung", type: "vocab", front: "лозунг", reading: "lozung", meaning: "a short rallying phrase for a cause", accept: ["a few words a movement puts on its banners", "a catchphrase used to rally people", "a shouted watchword of a campaign"], example: { jp: "Этот лозунг был на каждой стене, хотя смысла в нём уже никто не видел.", en: "This rallying phrase was on every wall, although nobody saw any sense in it any more." }, drill: { jp: "Новый лозунг понравился не всем", en: "The new rallying phrase did not please everyone" }, hint: "LO-zung — stress on the first syllable. MASCULINE. A loan from German Losung. ⚠️ Political or commercial, and always short enough to shout; a longer written formula is a девиз. The Soviet лозунг on a factory wall is the picture most Russians have of the word." },
        { id: "ru-u98l3-agitatsiya", type: "vocab", front: "агитация", reading: "agitatsiya", meaning: "active campaigning to win people over", accept: ["working on a crowd to bring it round", "canvassing for a cause", "the business of talking people into a side"], example: { jp: "Агитация шла прямо на улице, и остановить её никто не хотел.", en: "Campaigning was going on right in the street, and nobody wanted to stop it." }, drill: { jp: "Агитация у них была очень громкой", en: "Their campaigning was very loud" }, hint: "a-gi-TA-tsi-ya — stress on TA. FEMININE (-я). ⚠️ In Russian it is neutral-to-official rather than negative: предвыборная агитация is the legal campaigning period before a vote. Distinguish it from `пропаганда` in lesson 4, which comes from a power and runs for years." },
      ],
    },
    {
      id: "ru-u98l4",
      unit: 98,
      lesson: 4,
      title: "Argument in bad faith",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the dishonest shapes an argument takes — playing to the crowd, state messaging, steering someone's choices, a clever fallacy, an unbacked assertion and pure swagger.",
      items: [
        { id: "ru-u98l4-demagogiya", type: "vocab", front: "демагогия", reading: "demagogiya", meaning: "playing to a crowd instead of arguing", accept: ["flattering a crowd to win it", "telling people what they want to hear", "crowd-pleasing talk in place of reasons"], example: { jp: "Это была чистая демагогия, потому что цифр он так и не привёл.", en: "It was pure crowd-pleasing, because he never produced any figures." }, drill: { jp: "Это была чистая демагогия без цифр", en: "It was pure crowd-pleasing with no figures" }, hint: "di-ma-GO-gi-ya — stress on GO, and the first е reduces to i. FEMININE (-я). ⚠️ ALWAYS an accusation in Russian, never a description a speaker would accept of himself. The person is a демагог." },
        { id: "ru-u98l4-propaganda", type: "vocab", front: "пропаганда", reading: "propaganda", meaning: "organised persuasion run by a power", accept: ["messaging pushed out by a state", "a long campaign of persuasion from above", "the systematic shaping of what people believe"], example: { jp: "Пропаганда работала годами, и люди уже не верили даже правде.", en: "The state messaging worked for years, and people no longer believed even the truth." }, drill: { jp: "Пропаганда работала очень долгие годы", en: "The state messaging worked for very many years" }, hint: "pra-pa-GAN-da — stress on GAN, and both о reduce to a. FEMININE (-а). ⚠️ Glossed the long way round on purpose: it transliterates to the English word. ⚠️ In Russian it can still be used neutrally of promoting anything — пропаганда здорового образа жизни, promoting a healthy way of life — which surprises English speakers." },
        { id: "ru-u98l4-manipulyatsiya", type: "vocab", front: "манипуляция", reading: "manipulyatsiya", meaning: "steering someone's choices without their seeing it", accept: ["getting a person to decide what you want unawares", "working someone round by hidden means", "covert handling of another person's will"], example: { jp: "Когда человеку не дают решать самому, это уже не совет, а манипуляция.", en: "When a person is not allowed to decide for himself, that is no longer advice but a steering of his will." }, drill: { jp: "Это уже не совет а манипуляция", en: "That is no longer advice but a steering of the will" }, hint: "ma-ni-pu-LYA-tsi-ya — stress on LYA. FEMININE (-я). ⚠️ Also perfectly literal in a hospital: медицинская манипуляция is a procedure done with the hands. The psychological sense is the one the press uses, and the person is a манипулятор." },
        { id: "ru-u98l4-sofizm", type: "vocab", front: "софизм", reading: "sofizm", meaning: "a clever argument that is secretly false", accept: ["a fallacy dressed up to look valid", "reasoning that is wrong but hard to catch", "a trick of logic passed off as proof"], example: { jp: "На первый взгляд всё верно, но перед нами обычный софизм.", en: "At first glance it all looks right, but what we have here is an ordinary fallacy." }, drill: { jp: "Перед нами самый обычный софизм", en: "What we have here is a perfectly ordinary fallacy" }, hint: "sa-FIZM — stress on the last syllable, and the о reduces to a. MASCULINE. From the Greek sophists. ⚠️ A софизм is deliberate, which is what separates it from a plain mistake: the speaker knows the step is bad and hopes you will not see it." },
        { id: "ru-u98l4-goloslovnyy", type: "vocab", front: "голословный", reading: "goloslovnyy", meaning: "asserted with nothing behind it", accept: ["stated without a shred of support", "claimed but never grounded", "put forward with no evidence at all"], example: { jp: "Пока обвинение остаётся голословным, суд не станет его даже рассматривать.", en: "As long as the charge remains unsupported, the court will not even consider it." }, drill: { jp: "Это совершенно голословный упрёк", en: "This is a completely unsupported reproach" }, hint: "ga-la-SLOV-nyy — stress on SLOV, and both о before it reduce to a. ADJECTIVE. ⚠️ It is голый, bare, plus слово, a word — a bare-word claim — and NOT голос, a voice, from unit 39, which it only looks like. Its standard pairings are голословное обвинение and голословное утверждение." },
        { id: "ru-u98l4-aplomb", type: "vocab", front: "апломб", reading: "aplomb", meaning: "unearned self-assurance in speech", accept: ["a brazen show of total certainty", "overweening confidence of manner", "swagger in place of knowledge"], example: { jp: "Он говорил с таким апломбом, что никто и не подумал проверить его цифры.", en: "He spoke with such swagger that nobody even thought to check his figures." }, drill: { jp: "Апломб не заменяет знания", en: "Swagger is no substitute for knowledge" }, hint: "ap-LOMB — stress on the last syllable. MASCULINE. ⚠️ Glossed the long way round on purpose: it transliterates to the English word. ⚠️ AND THE SENSE IS NOT THE ENGLISH ONE — English aplomb is cool poise and a compliment; Russian апломб is always a reproach, the confidence of someone who has not earned it." },
      ],
    },
  ],
};
