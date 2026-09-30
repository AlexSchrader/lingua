// RU Unit 40 — Качества и признаки ("Qualities and characteristics") — A2
// ─────────────────────────────────────────────────────────────────────────────
// LAST UNIT OF BLOCK 1 (u31–u40). Conventions: ru/unit1.js §1–§10 and §A–§D, plus
// ru/unit31.js §1–§7 for the A2 band, which this unit does not add to — §1–§7 are
// closed and bind blocks 2 and 3 as written.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Home and household" AND A1 ALREADY WROTE IT — u15 Дом
// и вещи (комната · кухня · спальня · ванная · стена · потолок · стол · стул ·
// кровать · диван · шкаф · полка · лампа · ключ · сумка · зеркало). Rethemed to the
// A2 quality adjectives, and the household is kept as the carrier: nearly every
// example here describes a thing in a house or a street. unit31.js §6 has the
// table.
//
// THE MEASURED HOLE. A1's adjective set is u19 Описание и союзы and it is the basic
// six plus four — хороший · плохой · большой · маленький · новый · старый ·
// красивый · молодой · трудный · лёгкий · важный · интересный — with u23's
// быстрый/прямой/пустой/полный/свободный, u24's должен/готов/занят/уверен and
// u25's полезный/сложный/серьёзный. Against that, a learner could not say that a
// thing was accurate, ordinary, general, identical, genuine, strict, fresh, soft,
// thin, narrow, or THE MAIN ONE. Those are this unit's 24.
//
// ★ THE PATTERN THAT MADE THIS THE HARDEST UNIT IN THE BLOCK TO GLOSS. Russian
//   builds an adverb from almost every adjective by swapping the ending for -о, and
//   A1 CARDED THE ADVERB rather than the adjective in a dozen cases — обычно,
//   точно, просто, опасно, скучно, приятно, вкусно, дорого, дёшево, тепло,
//   холодно, легко, трудно, тихо, быстро, плохо, хорошо, долго. So more than half
//   the adjectives here have a taught adverb sitting on the same root, and
//   unit1.js §B is explicit that a parenthetical does NOT separate them —
//   `normalizeMeaning` strips it. Every one of these therefore had to differ by
//   WORD, and each hint names its adverb partner so the learner sees the pair
//   rather than tripping over it:
//        обычный "ordinary"        vs u22 обычно "usually"
//        точный "accurate"         vs u22 точно "exactly" (and u37 ровно)
//        простой "plain"           vs u22 просто "simply" AND u19 лёгкий "simple"
//        опасный "dangerous"       vs u12 опасно "it is dangerous"
//        скучный "dull"            vs u6 скучно "boring"
//        приятный "enjoyable"      vs u7 приятно "pleasant"
//        твёрдый "hard to the touch" vs u19 трудный "hard" — THE ONE THAT NEARLY
//             SLIPPED THROUGH, because the collision is not with its own adverb
//             твёрдо (which is not taught) but with a different adjective entirely.
//        ясный "clear" · строгий "strict" · свежий "fresh" · глубокий "deep" ·
//             мягкий "soft" · тонкий "thin" · толстый "thick" · узкий "narrow" ·
//             широкий "wide" — all free of an adverb partner, all checked anyway.
//        разный "various"          vs u19 другой "another"
//        известный "well known"    — root изв-, unrelated to знать despite both
//             being about knowing.
//
// ⚠️ REFUSED IN THIS UNIT:
//   `возможный` — vs u34 `возможность`, carded by this block. One of the pair.
//   `безопасный` — vs `опасный`, carded at l3. без+X is derivable, the same rule
//        u38's header states for не+X.
//   `неправильный` — same rule, vs `правильный` at l2.
//   `понятный` — vs u4 `понимать` and u31 `понять`.
//   `нужный` was carded at u34l4, not here, because its short form takes the dative
//        and that was the dative unit's business.
//   `занятый` and `готовый` — vs u24 `занят` and `готов`, which are the SAME words
//        in their short form. Not a §D judgement but a §5 one.
//   `высокий` (vs u36 высота) · `глубина` and `ширина` (vs глубокий and широкий
//        here) — one of each pair, and the adjective won because it is more use to
//        a learner than an abstract measurement noun.
//   MEASURED FREE AND LEFT FOR BLOCK 2, 2026-09-29: `главный` is carded but
//        `прекрасный` · `ужасный` · `обязательный` · `одинокий` are not.
//
// ═════════════════════════════════════════════════════════════════════════════
// §7 — BLOCK 1 IS COMPLETE. u31–u40 AUTHORED 2026-09-29. WHAT THAT TOOK.
// Referenced from ru/unit31.js §7, which promised the final measurement here.
// ═════════════════════════════════════════════════════════════════════════════
// 240 cards · 40 lessons · 10 units · SIX cards in every lesson, no exceptions.
// Every card has example + drill + accept[] + hint. **ru is now 960 items / 160
// lessons / 40 authored units**, measured with `npm run audit`, and
// src/data/ru/TAUGHT-WORDS.md regenerated to 960 words / 40 authored units /
// 20 stubs (u41–u60, which are blocks 2 and 3).
//
// ALL FOUR OF unit1.js §5's A2 DEFERRALS ARE CLOSED, plus one §4 deferral and one
// §D reversal. Nothing was pushed to B1 that §5 did not already put there:
//   aspect pairs           → u31, and §4's own gloss rule was corrected (u31 §1)
//   the instrumental       → u32
//   the six genitive preps → u33 l1, as the SET §5 said they should be
//   genitive plural        → u37
//   the dative as paradigm → u34 (§5 had "FIXED FRAMES ONLY")
//   `много`                → u37l1, reversing §D (argument in u31 §5)
// STILL DEFERRED TO B1, exactly as §5 left it: participles, verbal adverbs, and
// VERBS OF MOTION WITH PREFIXES. ⚠️ u36 teaches the UNPREFIXED directional pairs,
// which are not the deferred thing — the B1 line is the prefix.
//
// ─────────────────────────────────────────────────────────────────────────────
// THE MEASUREMENTS. Take your own before trusting any of these.
// ─────────────────────────────────────────────────────────────────────────────
//   scope-ru.mjs, MY RANGE:   480 sentences checked, **0 out of scope**
//   scope-ru.mjs, u1–u30:     1374 checked, **107 flagged — UNCHANGED**, and every
//        one still in u1–u6. That number is the proof that the PARADIGM entries
//        block 1 added are a FIX and not a loosening: it was 107 before the first
//        entry and 107 after the last.
//   scope-ru.mjs, whole corpus: 1854 checked, 107 flagged.
//   selfcheck-ru-a2-block1.mjs: **0 findings in u31–u40** on all 29 checks. The
//        12 it reports are corpus-wide and every one is in u1–u10, where unit1.js
//        documents each as a deliberate non-defect (the five gloss overlaps, the
//        е/ё · и/й · я/я fold pairs, and ты/вы · пока/до свидания · папа/отец).
//        ⚠️ SO "every check is 0 across the 720 A1 cards" IS NOT TRUE and a later
//        seat should not expect it — the correct claim is that BLOCK 1 ADDS 0.
//   lint:curriculum 0 errors, 6319 warnings, **0 of them ru** (warnings are pt/es)
//   validate:content 0 errors, 0 warnings · test:unit 476 pass 0 fail · build ✓
//
// ⚠️ PARADIGM ENTRIES BLOCK 1 ADDED to scripts/scope-ru.mjs, all GENERATED
// inflections of fronts A1 or this block carded, never a lexical guess. They are
// grouped (a)–(h) in that file with the reason for each. The classes:
//   * short adjectives in -ой whose stem strips below 3 characters (злой, твой)
//   * stem-mutating verbs (казаться, идти, ехать, ходить, ездить, спать, жить's past)
//   * the SHORT-FORM ADJECTIVE class — должен · рад · готов · занят · устал ·
//     уверен · похож. A1 carded all seven in the masculine and a short form has no
//     stem to cut back to, so должна/должно/должны matched nothing.
//   * nouns whose stem drops a vowel (день, цветок) or changes root (человек→люди,
//     ребёнок→детях, друг→друзей)
//   * pronouns and determiners with no entry (они, что, один, всё, нужно)
//
// ─────────────────────────────────────────────────────────────────────────────
// THEMES SPENT BY BLOCK 1 (u31–u40) — do not re-author these.
// ─────────────────────────────────────────────────────────────────────────────
//   verbal aspect and the perfective · the instrumental case · the genitive
//   prepositions and the genitive of material · the dative case · reflexive -ся
//   verbs as a class · the unprefixed directional motion pairs · the genitive
//   plural with counting and measure · time expressed through case · о/про/при
//   with opinion and speech · the A2 quality adjectives
//
// ─────────────────────────────────────────────────────────────────────────────
// FRONTS MEASURED FREE FOR BLOCKS 2 AND 3 — a MEASUREMENT taken 2026-09-29
// against `node scripts/tmp/probe.mjs` on this branch AFTER all 240 cards landed,
// NOT a promise. Two earlier seats found reserved-list entries already taken, so
// RE-PROBE with `node scripts/check-front.mjs ru "<front>"` before you use one.
// ─────────────────────────────────────────────────────────────────────────────
//   HELD BACK FOR u46/u47 ON PURPOSE — block 1 refused all eight so those slots
//   have their content: чем · более · менее · самый · мочь · уметь · хотя · чтобы
//   ONE-OF-A-PAIR, where block 1 took the other half and a later block may revisit:
//     возить (u36 took везти) · высокий (u36 took высота) · объём · ширина ·
//     глубина (u37/u40 took the adjectives) · тип AND вид (block 1 took NEITHER —
//     one of the two is available, never both; see u32's header)
//   REFUSED BY BLOCK 1 BUT ARGUABLE, with the whole argument in the unit header
//   named: советовать (u34) · безопасный · неправильный · понятный (u40) ·
//     истина (u39, a gloss collision with u22 правда rather than a lexeme one)
//   SIMPLY NOT REACHED — 24 cards ran out, all free on 2026-09-29:
//     развиваться · бороться · улучшаться (u35) · содержание · обсуждение ·
//     молчание · убеждение (u39) · вечность · промежуток · пауза · опоздание ·
//     регулярно (u38) · прекрасный · ужасный · обязательный · одинокий (u40)
//
// ⚠️ ONE FRONT BLOCK 1 TOOK THAT BLOCK 2 MIGHT HAVE EXPECTED. `новость` is carded
// at u39l4, and u43 is "Technology and communication", which could reasonably have
// claimed it. It went to u39 because that unit is about speech and reporting, and
// because Russian's countable новость/новости is a teaching point that needed a
// hint. `сообщение` · `интернет`-adjacent vocabulary and the phone verbs beyond
// `звонить` (u34l1) were deliberately LEFT to u43.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT40 = {
  id: "ru-u40",
  lang: "ru",
  title: "Качества и признаки",
  order: 40,
  stage: "a2",
  lessons: [
    {
      id: "ru-u40l1",
      unit: 40,
      lesson: 1,
      title: "Which one: main, genuine, shared",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Pick out which of several things is the main one, and say whether something is genuine, shared, special or ordinary.",
      items: [
        { id: "ru-u40l1-glavnyy", type: "vocab", front: "главный", reading: "glavnyy", meaning: "the main one", accept: ["chief", "principal", "the most important"], example: { jp: "Это главный вопрос нашей беседы.", en: "That is the main question of our conversation." }, drill: { jp: "Это главный вход в музей", en: "This is the main entrance to the museum" }, hint: "GLAV-nyy — stress on the first syllable. The chief one of several. важный from unit 19 is «important»; главный is «the one that matters most of all»." },
        { id: "ru-u40l1-nastoyashchiy", type: "vocab", front: "настоящий", reading: "nastoyashchiy", meaning: "genuine", accept: ["real", "authentic", "not a fake"], example: { jp: "Это настоящее золото, не металл.", en: "That is genuine gold, not metal." }, drill: { jp: "Это настоящий русский чай", en: "This is genuine Russian tea" }, hint: "na-sta-YA-shchiy — four syllables, stress on YA, and щ is one long soft sh. Genuine, not a fake. It also means «present» in time: настоящее время is the present tense." },
        { id: "ru-u40l1-obshchiy", type: "vocab", front: "общий", reading: "obshchiy", meaning: "shared", accept: ["common", "mutual", "general"], example: { jp: "У нас общий друг в этом городе.", en: "We have a mutual friend in this town." }, drill: { jp: "Это наш общий дом", en: "This is our shared house" }, hint: "OB-shchiy — stress on the first syllable. Shared between people, or general as against particular. «В общем» means «on the whole» and opens a great many Russian sentences." },
        { id: "ru-u40l1-osobennyy", type: "vocab", front: "особенный", reading: "osobennyy", meaning: "special", accept: ["particular", "out of the ordinary", "distinctive"], example: { jp: "Сегодня очень особенный день для нас.", en: "Today is a very special day for us." }, drill: { jp: "Это особенный подарок для мамы", en: "This is a special present for mum" }, hint: "a-SO-ben-nyy — stress on SO. Special, out of the ordinary — and the exact opposite of обычный, two cards further on." },
        { id: "ru-u40l1-obychnyy", type: "vocab", front: "обычный", reading: "obychnyy", meaning: "ordinary", accept: ["usual", "everyday", "nothing special"], example: { jp: "Это был совсем обычный день.", en: "That was a completely ordinary day." }, drill: { jp: "Это обычный дом в городе", en: "This is an ordinary house in town" }, hint: "a-BYCH-nyy — stress on BYCH, with the tight ы from unit 5. Ordinary, nothing remarkable. Its adverb обычно, «usually», is unit 22's — this is the adjective for a thing." },
        { id: "ru-u40l1-raznyy", type: "vocab", front: "разный", reading: "raznyy", meaning: "various", accept: ["differing", "assorted", "of several kinds"], example: { jp: "У нас разные мнения об этом фильме.", en: "We have different opinions about this film." }, drill: { jp: "У них разный характер", en: "They have a different character" }, hint: "RAZ-nyy — stress on the first syllable. Various, differing among themselves. ⚠️ Not the same as другой from unit 19: другой is «another one», разный is «several, and not alike»." },
      ],
    },
    {
      id: "ru-u40l2",
      unit: 40,
      lesson: 2,
      title: "Right, exact, clear, plain",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that an answer is correct, a figure accurate, an explanation clear, and two things identical.",
      items: [
        { id: "ru-u40l2-pravilnyy", type: "vocab", front: "правильный", reading: "pravilnyy", meaning: "correct", accept: ["right", "the right one", "proper"], example: { jp: "Это правильный перевод этого слова.", en: "That is the correct translation of this word." }, drill: { jp: "Это правильный ответ на вопрос", en: "That is the correct answer to the question" }, hint: "PRA-vil-nyy — stress on the first syllable. Correct, right. Same -прав- root as направо (unit 14), правда (unit 22) and направление (unit 36) — the root carries an idea of straight and true." },
        { id: "ru-u40l2-tochnyy", type: "vocab", front: "точный", reading: "tochnyy", meaning: "accurate", accept: ["exact", "precise", "down to the detail"], example: { jp: "Мне нужен точный срок этой работы.", en: "I need the accurate deadline for this work." }, drill: { jp: "Мне нужен точный вес", en: "I need the accurate weight" }, hint: "TOCH-nyy — stress on the first syllable. Accurate, exact. Its adverb точно, «exactly», is unit 22's, and ровно from unit 37 is the other «exactly» — the one for times and amounts." },
        { id: "ru-u40l2-yasnyy", type: "vocab", front: "ясный", reading: "yasnyy", meaning: "clear", accept: ["bright", "cloudless", "easy to follow"], example: { jp: "Сегодня очень ясная погода.", en: "The weather is very clear today." }, drill: { jp: "Это ясный и простой вывод", en: "That is a clear and plain conclusion" }, hint: "YAS-nyy — stress on the first syllable. Clear — of the sky, and of an explanation. «Ясно!» on its own means «Got it!» and is one of the commonest words in a Russian classroom." },
        { id: "ru-u40l2-prostoy", type: "vocab", front: "простой", reading: "prostoy", meaning: "plain", accept: ["straightforward", "uncomplicated", "basic"], example: { jp: "Это очень простой и ясный вопрос.", en: "That is a very plain and clear question." }, drill: { jp: "Это простой дом без сада", en: "This is a plain house without a garden" }, hint: "pra-STOY — stress on the last syllable. Plain, uncomplicated, nothing added. ⚠️ Its adverb просто, «simply», is unit 22's — and лёгкий from unit 19 already holds «simple», which is why this one is «plain»." },
        { id: "ru-u40l2-odinakovyy", type: "vocab", front: "одинаковый", reading: "odinakovyy", meaning: "identical", accept: ["the same as each other", "matching", "alike"], example: { jp: "У нас одинаковые сумки.", en: "We have identical bags." }, drill: { jp: "У нас одинаковый адрес", en: "We have an identical address" }, hint: "a-di-NA-ka-vyy — five syllables, stress on NA. Exactly the same as each other. Built on один from unit 11 — literally «of one sort» — though English shows no trace of the link." },
        { id: "ru-u40l2-izvestnyy", type: "vocab", front: "известный", reading: "izvestnyy", meaning: "well known", accept: ["famous", "renowned", "widely known"], example: { jp: "Это известный музей в нашем городе.", en: "That is a well known museum in our town." }, drill: { jp: "Он известный специалист в фирме", en: "He is a well known expert at the firm" }, hint: "iz-VES-nyy — stress on VES, and ⚠️ the т is SILENT: say iz-VYES-nyy, never iz-VYEST-nyy. Well known, famous. Its root изв- is unrelated to знать, though both are about knowing." },
      ],
    },
    {
      id: "ru-u40l3",
      unit: 40,
      lesson: 3,
      title: "Judging what it is like",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give a verdict on something — that it was enjoyable or dull, that it is risky, strict, fresh, or deep.",
      items: [
        { id: "ru-u40l3-priyatnyy", type: "vocab", front: "приятный", reading: "priyatnyy", meaning: "enjoyable", accept: ["agreeable", "a pleasure", "likeable"], example: { jp: "Это была очень приятная беседа.", en: "That was a very enjoyable conversation." }, drill: { jp: "Это приятный голос", en: "That is an enjoyable voice" }, hint: "pri-YAT-nyy — stress on YAT. Enjoyable, agreeable. Its adverb приятно is the «pleasant» of приятно познакомиться from unit 7 — this is the adjective for a thing." },
        { id: "ru-u40l3-skuchnyy", type: "vocab", front: "скучный", reading: "skuchnyy", meaning: "dull", accept: ["boring", "tedious", "uninteresting"], example: { jp: "Это был очень скучный фильм.", en: "That was a very dull film." }, drill: { jp: "Это очень скучный урок", en: "That is a very dull lesson" }, hint: "SKUCH-nyy — stress on the first syllable. Dull, of a thing. Its adverb скучно from unit 6 is the STATE: «мне скучно», I am bored, built with the dative from unit 34." },
        { id: "ru-u40l3-opasnyy", type: "vocab", front: "опасный", reading: "opasnyy", meaning: "dangerous", accept: ["risky", "unsafe", "hazardous"], example: { jp: "Это очень опасный переход через улицу.", en: "That is a very dangerous crossing over the street." }, drill: { jp: "Это опасный маршрут для детей", en: "That is a dangerous route for children" }, hint: "a-PAS-nyy — stress on PAS. Dangerous. Its adverb опасно, «it is dangerous», you met on a sign at unit 12 — this is the adjective that describes the thing itself." },
        { id: "ru-u40l3-strogiy", type: "vocab", front: "строгий", reading: "strogiy", meaning: "strict", accept: ["severe", "stern", "firm"], example: { jp: "Наш новый учитель очень строгий.", en: "Our new teacher is very strict." }, drill: { jp: "У него очень строгий тон", en: "He has a very strict tone" }, hint: "STRO-giy — stress on the first syllable. Strict, of a person or a rule. Of clothes it means severe and plain — строгий костюм is a formal suit." },
        { id: "ru-u40l3-svezhiy", type: "vocab", front: "свежий", reading: "svezhiy", meaning: "fresh", accept: ["newly made", "crisp", "just arrived"], example: { jp: "Мне нужен свежий хлеб и молоко.", en: "I need fresh bread and milk." }, drill: { jp: "Это очень свежий хлеб", en: "This is very fresh bread" }, hint: "SVE-zhiy — stress on the first syllable. Fresh — of bread, of air, and of news. ⚠️ After ж the ending is -ий and never -ый, which is why it is свежий and not свежый." },
        { id: "ru-u40l3-glubokiy", type: "vocab", front: "глубокий", reading: "glubokiy", meaning: "deep", accept: ["profound", "far down", "deep-seated"], example: { jp: "Это очень глубокая река.", en: "That is a very deep river." }, drill: { jp: "Это глубокий смысл этого слова", en: "That is the deep meaning of this word" }, hint: "glu-BO-kiy — stress on BO. Deep — of water, and of a thought or a meaning. Both senses work exactly as they do in English." },
      ],
    },
    {
      id: "ru-u40l4",
      unit: 40,
      lesson: 4,
      title: "Soft, hard, thin, wide",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe a thing by its texture and its shape — soft or hard, thin or thick, narrow or wide.",
      items: [
        { id: "ru-u40l4-myagkiy", type: "vocab", front: "мягкий", reading: "myagkiy", meaning: "soft", accept: ["tender", "gentle", "not firm"], example: { jp: "Это очень мягкая кровать.", en: "That is a very soft bed." }, drill: { jp: "Это очень мягкий диван", en: "This is a very soft sofa" }, hint: "MYAKH-kiy — stress on the first syllable, and ⚠️ гк is said KH-k, so the word comes out MYAKH-kiy. Soft to the touch. Its adverb мягко gives the мягкий знак, the soft sign ь, from unit 5." },
        { id: "ru-u40l4-tvyordyy", type: "vocab", front: "твёрдый", reading: "tvyordyy", meaning: "hard to the touch", accept: ["firm", "solid", "stiff"], example: { jp: "Этот хлеб уже твёрдый и старый.", en: "This bread is already hard and old." }, drill: { jp: "Это твёрдый и толстый металл", en: "This is hard and thick metal" }, hint: "TVYOR-dyy — stress on the first syllable, and the ё is always written. ⚠️ Glossed «hard to the touch» because трудный from unit 19 already holds «hard» in the sense of difficult. Its adverb твёрдо gives the твёрдый знак, ъ." },
        { id: "ru-u40l4-tonkiy", type: "vocab", front: "тонкий", reading: "tonkiy", meaning: "thin", accept: ["fine", "slender", "delicate"], example: { jp: "Это очень тонкая ткань для платья.", en: "This is very thin cloth for a dress." }, drill: { jp: "Это очень тонкий лист", en: "This is a very thin leaf" }, hint: "TON-kiy — stress on the first syllable. Thin — of paper, cloth or ice. ⚠️ Not тон from unit 39, a tone: the two share nothing but their first three letters." },
        { id: "ru-u40l4-tolstyy", type: "vocab", front: "толстый", reading: "tolstyy", meaning: "thick", accept: ["fat", "stout", "heavy in build"], example: { jp: "Это очень толстая книга.", en: "That is a very thick book." }, drill: { jp: "Это очень толстый шарф", en: "This is a very thick scarf" }, hint: "TOL-styy — stress on the first syllable. Thick, of a book or a wall — and of a person it means fat, so use it with care. Its opposite is тонкий." },
        { id: "ru-u40l4-uzkiy", type: "vocab", front: "узкий", reading: "uzkiy", meaning: "narrow", accept: ["tight", "not wide", "cramped"], example: { jp: "Это очень узкая улица в центре.", en: "That is a very narrow street in the centre." }, drill: { jp: "Это узкий переход между домами", en: "This is a narrow passage between the houses" }, hint: "US-kiy — stress on the first syllable, and ⚠️ the з says s in front of к. Narrow. Of clothes it means tight — узкие брюки, tight trousers." },
        { id: "ru-u40l4-shirokiy", type: "vocab", front: "широкий", reading: "shirokiy", meaning: "wide", accept: ["broad", "spacious", "roomy"], example: { jp: "Это очень широкая и красивая улица.", en: "That is a very wide and beautiful street." }, drill: { jp: "Это очень широкий мост", en: "This is a very wide bridge" }, hint: "shi-RO-kiy — stress on RO, and ши is always said SHY with the hard ы sound, never SHEE. Wide, broad. Its opposite is узкий." },
      ],
    },
  ],
};
