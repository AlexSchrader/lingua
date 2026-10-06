// RU Unit 61 — Согласие и возражение ("Agreement and objection") — B1
// ─────────────────────────────────────────────────────────────────────────────
// FIRST UNIT OF THE B1 BAND, and the first unit of BLOCK 1 (u61–u73), which is
// the CREW LEAD for this band. Everything in ru/unit1.js §1–§10 and §A–§D binds,
// and so does ru/unit31.js §1–§7 (the A2 conventions) and ru/unit51.js §1–§5.
// Nothing in this header replaces any of that. Blocks 2 (u74–u86) and 3
// (u87–u97) read §1–§8 below BEFORE authoring, and the A1/A2 headers before it.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Opinion and agreement" AND A2 ALREADY SPENT HALF OF
// IT. u39 Мнение и речь owns the opinion NOUNS (мнение · мысль · вывод · взгляд ·
// суть · смысл · речь · спор · тема · беседа · замечание · доказательство). So
// this unit takes the ACT and not the noun: backing a view, pushing back,
// insisting, conceding, and framing a view as your own. Nothing here re-teaches
// a u39 front.
//
// ═════════════════════════════════════════════════════════════════════════════
// B1 CONVENTIONS FOR RUSSIAN — binding on ALL ru units in u61–u97, every block.
// Settled by block 1 (the crew lead) 2026-10-05.
// ═════════════════════════════════════════════════════════════════════════════
//
// §1. WHAT B1 IS, AND WHY A LONGER WORD IS NOT ENOUGH.
//     A2 was the band where the learner NAMES things — 1,440 words of objects,
//     people, actions and qualities. B1 is where they RELATE them: attribute an
//     opinion to someone, concede a point, hedge a claim, name a cause, say what
//     would have happened. So a B1 card is judged on its EXAMPLE as much as its
//     front. The band's examples must carry subordination, concession and
//     attribution — «Он утверждает, что …», «Хотя я с ним не согласен, …» — not
//     the A1/A2 shape «Это очень старая традиция».
//     ⚠️ The DRILL stays short and flat (3–8 tokens, no punctuation) because the
//     engine tiles it. The complexity goes in `example`. Do not try to make a
//     drill carry a subordinate clause — it will fail lint's token count or its
//     punctuation rule, and sentence:build will refuse it.
//
// §2. THE TITLES IN u84–u97 ARE NOT PLACEHOLDERS ANY MORE — THEY ARE ALLOCATED.
//     Fourteen slots shipped as `Vocabulary 1 (B1)` … `Vocabulary 14 (B1)`, which
//     name no subject at all. At A2 exactly this shape cost 104 re-authored cards
//     across three languages, and in the worst case two units ended up with the
//     identical title and 16 shared words. Block 1 measured the holes against
//     TAUGHT-WORDS.md (1,440 words / 60 units) and allocated all fourteen BEFORE
//     authoring a card. The allocation is in §3. It is binding, and a block that
//     wants to move a theme says so to the lead rather than re-theming quietly.
//
// §3. THE ALLOCATION — fourteen disjoint themes, each on a counted hole.
//     ──────────── BLOCK 2's THREE ────────────
//     u84 Спорт и состязание        `спорт` (u9) is the ONLY sports word in 1,440.
//          матч · игрок · тренер · тренировка · победа · поражение ·
//          соревнование · мяч · стадион · бассейн · судья · очко = 12/12 free.
//     u85 Внешность и облик         `волосы` is UNTAUGHT. The learner has 12 body
//          parts (u20) + 12 organs (u53) and no word for hair. борода · усы ·
//          причёска · лысый · стройный free.
//     u86 Ощущения и восприятие     `вкус` is UNTAUGHT although u58 is titled
//          «Еда и вкус». запах · звук · зрение · слух · ощущение free.
//          ⚠️ `внимание` is TAKEN (u12).
//     ──────────── BLOCK 3's ELEVEN ────────────
//     u87 Промышленность и ресурсы  завод · фабрика · производство · изделие ·
//          нефть · газ · сталь · добыча · станок · промышленность = 10/10 free.
//          ⚠️ `уголь` IS BARRED — see §5(c).
//     u88 Сельское хозяйство        урожай · пшеница · фермер · трактор · сарай ·
//          скот · пастух · сеять = 8/8 free. u54 owns the SCIENCE slice (почва ·
//          зерно · расти), not the farm.
//     u89 Инструменты и починка     молоток · гвоздь · пила · лопата · верёвка ·
//          клей · игла · ножницы · топор = 9/9 free. u32 teaches the abstract
//          `инструмент`; u57 teaches чинить/ломать with no object to use them on.
//     u90 География и края          OF THE FOUR COMPASS POINTS ONLY `юг` (u3) IS
//          TAUGHT. север · запад · восток free, plus океан · пустыня · область ·
//          местность. ⚠️ `район` is TAKEN (u14).
//     u91 Стихия и бедствие         гроза · молния · гром · наводнение · засуха ·
//          землетрясение · буря = 7/7 free. PURELY the natural event.
//     u92 История и прошлое         `история` (u24) is glossed "a story"; век and
//          эпоха (u38) are time words. революция · царь · империя · племя ·
//          восстание · крепость free.
//     u93 Вера и обряд              the whole field is THREE words — религия
//          (u55) · церковь (u14) · душа (u28). бог · молитва · храм · икона ·
//          грех · рай · святой · обряд = 8/8 free.
//     u94 Дорога и машина           водить · руль · колесо · бензин · пробка ·
//          авария · парковка · шина · тормоз · гараж = 10/10 free.
//          ⚠️ `права` IS BARRED — see §5(b).
//     u95 Путь жизни                детство · старость · подросток · младенец ·
//          воспитывать · судьба · биография · зрелость free. ⚠️ `юность` is
//          TAKEN (u38) and `взрослый` is TAKEN (u10).
//     u96 Музыка и звучание         ZERO MUSICAL INSTRUMENTS in 1,440 words.
//          гитара · скрипка · нота · ритм · мелодия free. музыка (u8) · концерт
//          (u27) · хор + оркестр (u55) · петь (u27) is the whole existing field.
//          ⚠️ `песня` was refused at A2 on §D against петь — see unit55.js.
//     u97 Опасность и спасение      риск · угроза · жертва · спасать · выживать ·
//          пожар · подвиг = 7/7 free. The HUMAN emergency and the abstraction of
//          risk; the natural event is u91's. `пожар` is u97's.
//
//     u91/u97 BOUNDARY, stated so it is checkable: u91 is the EVENT (storm,
//     flood, quake, drought); u97 is risk, threat, victim, rescue, survival, fire.
//
// §4. THE PRE-TITLED SLOTS — THREE OF BLOCK 1's WERE RETHEMED, AND FIVE OF
//     BLOCK 2's NEED NARROWING. The scaffold's B1 slot titles were generated
//     without reading what Russian A1/A2 spent, exactly as the A2 ones were
//     (unit31.js §6, unit51.js's opening). What block 1 found:
//     ──────────── BLOCK 1's OWN (u61–u73) ────────────
//     u62 Cause and consequence → `Из-за и благодаря`. HALF OF A2's u52 Причина
//          и вывод is already this field (довод · следствие · основа · принцип ·
//          источник · влияние · вызывать · приводить · мотив · обстоятельство ·
//          противоречие · например). What is UNTAUGHT is the GOVERNMENT: A1/A2
//          carded 23 plain prepositions and ZERO derived ones. u62 takes из-за ·
//          благодаря · вследствие · несмотря на · ради · насчёт · вопреки · вроде.
//     u63 Comparison and degree → `Приставочные глаголы`. A DIRECT DUPLICATE of
//          A2's u47 Сравнение и возможность (чем · более · менее · самый ·
//          сравнение · степень + six size adjectives). Meanwhile VERBS OF MOTION
//          WITH PREFIXES are deferred to B1 by BOTH unit1.js §5 AND unit31.js §2
//          — and NO B1 SLOT OWNS THEM. u79–u81 are clauses, passive and nuance.
//          It is the largest explicitly-deferred item in the course, so u63 takes
//          it. ⚠️ `входить` · `выходить` · `переходить` were REFUSED on §D against
//          вход + выход (u12) and переход (u36) — see unit63.js.
//     u65 News and society → `Неопределённые местоимения`. DOUBLY SPENT: u45
//          Пресса и передачи (24 cards of press and broadcast) plus u51 Общество
//          и государство (24 cards of state and society). The -то/-нибудь/кое-
//          series is untaught — A1 carded only the NEGATIVE series (никто ·
//          нигде · никогда) — and the -то/-нибудь contrast is a thing no learner
//          can guess, which is what makes it a unit rather than a hint.
//     u61 · u64 · u66–u73 keep their domain, retitled in Russian, each pushed up
//          to the layer A2 did not reach. Each unit header names what it dropped.
//     ──────────── BLOCK 2's (u74–u83) — FLAGGED, NOT DECIDED ────────────
//     u74 Media and entertainment  TRIPLY SPENT (u45 press · u27 Свободное время ·
//          u55 Искусство = 72 cards). Block 1 reserved nothing for it; block 2
//          measures its own hole and tells the lead what it picked.
//     u75 Environment and place    → narrow to ЭКОЛОГИЯ. u26 + u54 + u60 spent
//          nature and place. экология · отходы · загрязнение · ресурс free.
//          ⚠️ `среда` IS BARRED — see §5(a). `мусор` is TAKEN (u15).
//     u76 Money and the economy    → narrow to MACRO. u44 Деньги и услуги spent
//          personal money. инфляция · прибыль · убыток · конкуренция ·
//          производитель · потребитель · акция · вклад free. ⚠️ `рынок` TAKEN
//          (u14), `фирма` TAKEN (u25).
//     u77 Health and wellbeing     → narrow to MENTAL health. u20 + u53 spent the
//          body and illness (48 cards). депрессия · стресс · тревога · страдать ·
//          отчаяние · надежда · терпеть free.
//     u78 Relationships and society → narrow to MARRIAGE, INTIMACY, CONFLICT.
//          u51 + u59 + u56 + u10 spent society, conduct, character and family.
//          брак · развод · жених · невеста · ревность · ссора · свидание free.
//     u79–u81 Grammar 6/7/8        KEEP. They are exactly Russian's deferred
//          grammar per unit1.js §5 + unit31.js §2 — participles, verbal adverbs,
//          passive, reported speech. They do NOT contain the prefixed motion
//          verbs, which is why u63 took them.
//     u82/u83 Register 1 "polite vs plain" / Register 2 → RETHEME. ⚠️ "POLITE VS
//          PLAIN" IS A JAPANESE SLOT (丁寧 / 普通 verb forms). RUSSIAN HAS NO
//          VERB-FORM POLITENESS SYSTEM; it marks register lexically, and ты/вы is
//          already carded at u2. This is the same artefact as "Grammar 2 — verbs
//          and particles", which block 3 rethemed at A1 (unit1.js §10). Recommended:
//          разговорный vs книжный register, the diminutive suffixes (-ик · -очка ·
//          -еньк-), and канцелярит/officialese. All genuinely untaught.
//
// §5. FOUR BARRED CANDIDATES EVERY SEAT WILL REACH FOR. Each is measured, and
//     each is barred by a rule that already exists — do not re-litigate them.
//     (a) `среда` "an environment" — IT IS WEDNESDAY (u17). «Окружающая среда»
//         cannot be a front in this language.
//     (b) `права` "a driving licence" and `прошлое` "the past" — INFLECTED AND
//         SUBSTANTIVISED FORMS of `право` (u51) and `прошлый` (u24). unit1.js §5's
//         last rule, the same one that killed `лёгкое` at A2 (unit51.js §2(b)).
//     (c) `уголь` "coal" — its reading under §1's table is "ugol", WHICH IS
//         ALREADY `угол`'s (u12). A NEW member of the soft-sign reading-collision
//         family after `съесть`/`сесть` and `семя`/`семья` (unit51.js §2(a)).
//         ⚠️ SO: TRANSLITERATE EVERY CANDIDATE AND CHECK THE READING, NOT ONLY
//         THE FRONT. All three of these pass a front-uniqueness probe cleanly.
//     (d) `без`+X and `не`+X derivations of a taught word stay barred (unit51.js
//         §3): `безусловно` (условие u34) and `несомненно` (сомневаться u35) were
//         both refused here on exactly that rule.
//
// §6. HOW BLOCK 1 APPLIED unit1.js §D's DERIVATION TEST AT B1, because at this
//     band nearly every useful abstract word sits on a root A1/A2 already spent,
//     so the test decides most of the block. §D's test is ONE-DIRECTIONAL
//     (unit51.js §3): does the TAUGHT word give the candidate away?
//     REFUSED — the taught word gives it away:
//       возражение (возражать u49) · признание (признавать u59) · соглашение
//       (соглашаться u35) · убеждение + убедительный (убеждать u49) · замечать
//       (замечание u39) · спорный + спорить (спор u39) · критика (критик u55) ·
//       правота + правый (право u51) · верный (верить u22) · логичный (логика
//       u52) · возможный (возможность u34) · лично (личный u50) · противник
//       (против u46) · защита (защищать u59) · сомнительный (сомневаться u35) ·
//       заявлять (заявление u50) · трудность (трудный u19) · сложность (сложный
//       u25) · решение (решать u24) · изменение (менять u24).
//     ALLOWED, with the reasoning rather than the verdict:
//       `поддерживать` vs `держать` (u57) — a PREFIXED derivation, and unit31.js
//            §3 sets the precedent that prefixes other than не-/без- are allowed.
//            "To hold" does not hand a learner "to back someone up".
//       `разделять` vs `делить` (u48) — same shape, and the sense moves from
//            splitting a thing to holding a view.
//       `считаться` vs `считать` (u44 "to count") — A2's u35 carded eight -ся
//            verbs beside their non-reflexive partners (находиться vs находить
//            u24, учиться vs учить u59), so -ся is an established lexeme boundary
//            in this language. "To count" does not give "to be regarded as".
//       `осуждать` vs `суд` (u51 "a court") — a court does not hand a learner the
//            verb to condemn, and the о- prefix is the allowed shape.
//       `оспаривать` vs `спор` (u39) — prefix + suffix, and REFUSED its bare
//            sibling `спорить` on the same test in the same breath, which is what
//            makes the line a line and not a preference.
//       `соответствовать` vs `ответ` (u7) — three derivational steps from "an
//            answer"; nothing about ответ predicts "to correspond to".
//
// §7. TOOLING — AND THE TRAP THAT PRODUCES A FALSE GREEN FOR RUSSIAN.
//     `npm run lint:curriculum` CANNOT SCOPE-CHECK THIS LANGUAGE. `lint.js`'s
//     `exampleScopeWarnings` is gated on `isLatinLang()` (>50% Latin fronts) and
//     returns silently for Cyrillic, so **0 ru warnings means "not measured", not
//     "clean"**. Use `node scripts/scope-ru.mjs 61..73`. Block 1 also added
//     `scripts/selfcheck-ru-b1-block1.mjs` — `selfcheck-ru-a2-block1.mjs` with its
//     range moved to u61–u73. It imports the REAL `answer.js` and `cardRouting.js`
//     and runs the same 29 checks, because two defect classes are invisible to
//     BOTH `lint:curriculum` and `validate:content`: a drill that CONTAINS the
//     front but does not CLOZE (lint uses `.includes()`, the router matches whole
//     words), and a gloss collision through `normalizeMeaning`, which strips
//     parentheticals AND a leading "to " — so "to do (perfective)" and "to do
//     (imperfective)" are ONE prompt. See unit31.js §1 for the rule that works.
//     ⚠️ `scope-ru.mjs`'s PARADIGM gained TWO entries at (m), both GENERATED
//     INFLECTIONS of a carded front, and the one that matters is `тот` (u22l4):
//     none of та/то/те/того/тому/том was reachable, and «то, что …» is the
//     backbone of Russian subordination, so a band whose whole job is relating
//     clauses could not have written around it. The proof it is not a loosening
//     is that neither documented figure moved — u1–u30 stayed at 107 of 1374 and
//     u31–u60 at 0 of 1440, measured before and after.
//
// §7b. ⚠️ NEVER WRITE " or " OR A COMMA INSIDE AN accept[] ENTRY. `meaningVariants`
//     (src/store/answer.js) splits every gloss on `/`, `,`, `;` AND the word
//     `or`, so "one or two people" becomes ["one", "two people"] and
//     "some person or other" becomes ["some person", "other"]. Two cards in the
//     SAME LESSON then share the fragment "one" or "other", which is the
//     sameLessonSenseOverlap defect — one prompt, two right answers — and
//     `lint:curriculum` does not see it because it compares primary glosses only.
//     Measured: u65 shipped FIVE of these on its first draft (кто-то/что-то/
//     какой-то all sharing "other", кое-кто/кое-что sharing "one"), every one
//     introduced by an accept entry that read perfectly well in English. The rule
//     is mechanical, so follow it mechanically: ONE sense per accept entry, no
//     commas, no "or".
//
// §7d. ⚠️ RUN `node scripts/qa/accept-collisions.mjs ru` — IT FINDS A DEFECT NO
//     OTHER TOOL DOES, AND IT FOUND 31 IN THIS BLOCK. `lint.js`'s
//     glossCollisionWarnings compares PRIMARY GLOSS against PRIMARY GLOSS only.
//     It is blind to the worse case: YOUR PRIMARY GLOSS IS AN EARLIER CARD'S
//     accept ENTRY. The produce card prompts with your gloss and accepts only
//     your front, so a learner who answers with the word THE COURSE ITSELF
//     taught earlier is marked wrong. Measured on this block's first draft:
//         `сокращение` "a reduction" was already `скидка`'s accept (u12)
//         `предел` "a limit" was already `граница`'s (u30)
//         `исход` "the outcome" was already `результат`'s (u30)
//         `ответственность` "responsibility" was already `обязанность`'s (u42)
//         `свой` "one's own" was already `родной`'s (u8)
//     …and twenty-six more. All 31 were reglossed — the block's primary glosses
//     are now clean against the whole ru corpus's accept lists.
//     ⚠️ TWENTY-NINE accept-vs-accept overlaps REMAIN in u61–u73 and are
//     deliberately left: in every one the colliding entry is an A1/A2 accept, the
//     produce card never prompts with an accept, and the typed-meaning grader is
//     lenient by design. ZERO of the 29 have both sides inside this block.
//     The corpus-wide ru figure went 392 → 355.
//
// §7c. ⚠️ TWO STEMMER BLIND SPOTS IN `scope-ru.mjs` THAT FLAG CORRECT RUSSIAN,
//     so you recognise them instead of rewriting a good sentence. TAIL's
//     alternation is tried LEFT TO RIGHT and `ого` comes early, so:
//       `много` loses "ого" → "мн", which is under three characters, the loop
//            breaks and the stem stays "много" — which многих/многим/многие do
//            not start with. Block 1 wrote around it rather than add a PARADIGM
//            entry, because `многие` is arguably a second lexeme and the table
//            must never quietly put an untaught word in scope.
//       `свой` loses "ой" → "св", same shape, same result. THAT one block 1 DID
//            add to PARADIGM, because the reflexive possessive is compulsory in
//            Russian and cannot be written around — see the (m) entry.
//     The general rule: a 3–4 letter front ending in -ой or -ого is a candidate
//     for this, and the documented case (a) `злой` is the same bug.
//
// §7a. TWO WORDS THIS BAND CANNOT AVOID AND A1/A2 NEVER TAUGHT.
//     `свой` — the reflexive possessive. A1 carded мой · твой · наш · ваш · их
//     and nothing covers «на своём месте». It is NOT declared FREE: block 1
//     CARDS it at u65 (Неопределённые местоимения, the pronoun slot), so
//     u61–u64 write around it and everything from u65 on may use it.
//     `родители` — genuinely untaught. родственник (u59) · родной (u8) ·
//     рождение (u59) are the whole family, and none of them is the plain word
//     for parents. Flagged for whoever ends up with a family-shaped slot; block 1
//     wrote around it rather than carding it outside its own themes.
//
// §8. BLOCK 1's RANGE AND WHAT EACH SLOT BECAME.
//     u61 Согласие и возражение · u62 Из-за и благодаря · u63 Приставочные
//     глаголы · u64 Неуверенность и оговорка · u65 Неопределённые местоимения ·
//     u66 Порядок действий · u67 Тонкие чувства · u68 Понятие и явление ·
//     u69 Развитие и перемена · u70 Трудность и выход · u71 Долг и запрет ·
//     u72 Замысел и намерение · u73 Опыт и воспоминание.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT61 = {
  id: "ru-u61",
  lang: "ru",
  title: "Согласие и возражение",
  order: 61,
  stage: "b1",
  lessons: [
    {
      id: "ru-u61l1",
      unit: 61,
      lesson: 1,
      title: "Taking a side",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that you are on someone's side — back them up, approve of what they did, share their view, join in, and say that one thing matches another.",
      items: [
        { id: "ru-u61l1-podderzhivat", type: "vocab", front: "поддерживать", reading: "podderzhivat", meaning: "to back someone up", accept: ["to support", "to stand behind someone", "to take someone's side"], example: { jp: "Я не совсем согласен с коллегой, но буду поддерживать его на собрании, потому что он прав в главном.", en: "I do not entirely agree with my colleague, but I will back him up at the meeting, because he is right about the main thing." }, drill: { jp: "Мы должны поддерживать этот проект", en: "We must back this project" }, hint: "pad-DER-zhi-vat — stress on DER, and the дд in the middle is held a beat longer. IMPERFECTIVE; the perfective is поддержать. A PREFIXED derivation of держать «to hold» — see this unit's header §6 for why that is allowed." },
        { id: "ru-u61l1-odobryat", type: "vocab", front: "одобрять", reading: "odobryat", meaning: "to approve of", accept: ["to give approval", "to be in favour of", "to endorse"], example: { jp: "Начальник не стал одобрять новый график, хотя все сотрудники просили об этом целый месяц.", en: "The boss did not approve the new schedule, although all the staff had been asking for it for a whole month." }, drill: { jp: "Он не хочет одобрять этот план", en: "He does not want to approve this plan" }, hint: "a-dab-RYAT — stress on the last syllable, and both о reduce to a. IMPERFECTIVE; the perfective is одобрить. It sits on добрый «kind» but a learner would never guess it from there." },
        { id: "ru-u61l1-razdelyat", type: "vocab", front: "разделять", reading: "razdelyat", meaning: "to share a view", accept: ["to share an opinion", "to hold the same view", "to agree with a view"], example: { jp: "Я разделяю его мнение о работе, но не могу разделять его взгляд на деньги.", en: "I share his opinion about work, but I cannot share his view about money." }, drill: { jp: "Трудно разделять такое мнение", en: "It is hard to share such an opinion" }, hint: "raz-di-LYAT — stress on the last syllable. IMPERFECTIVE; the perfective is разделить. ⚠️ Its literal sense is to divide a thing, but with мнение · взгляд · мысль it means to hold the same view, and that is the sense this card teaches." },
        { id: "ru-u61l1-soglasen", type: "vocab", front: "согласен", reading: "soglasen", meaning: "in agreement", accept: ["agreed", "of the same mind", "I agree"], example: { jp: "Я согласен с тобой в главном, хотя твой последний довод мне кажется слабым.", en: "I am in agreement with you about the main thing, although your last point seems weak to me." }, drill: { jp: "Я совсем не согласен", en: "I am not in agreement at all" }, hint: "sa-GLA-sin — stress on GLA, and both о reduce. ⚠️ A SHORT-FORM ADJECTIVE, the same class as должен and уверен from unit 24: a woman says согласна and a group согласны. It takes с + the instrumental: согласен с тобой. Соглашаться from unit 35 is the ACT; this is the state." },
        { id: "ru-u61l1-storonnik", type: "vocab", front: "сторонник", reading: "storonnik", meaning: "a supporter", accept: ["an advocate", "someone on your side", "a backer"], example: { jp: "Он известный сторонник нового закона, хотя раньше он был против него.", en: "He is a well-known supporter of the new law, although he used to be against it." }, drill: { jp: "Он активный сторонник этой идеи", en: "He is an active supporter of this idea" }, hint: "sta-RON-nik — stress on RON, and the нн is held longer. MASCULINE; the woman is сторонница. It sits on сторона «a side», and takes the genitive: сторонник закона." },
        { id: "ru-u61l1-sootvetstvovat", type: "vocab", front: "соответствовать", reading: "sootvetstvovat", meaning: "to correspond to", accept: ["to match", "to fit something", "to be in line with"], example: { jp: "Его рассказ не соответствует тому, что мы видели, поэтому я не могу ему верить.", en: "His account does not correspond to what we saw, which is why I cannot believe him." }, drill: { jp: "Это должно соответствовать правилу", en: "This must correspond to the rule" }, hint: "sa-at-VET-stva-vat — five syllables, stress on VET, and the оо at the front is two separate vowels. IMPERFECTIVE, and it has no perfective partner. It takes the DATIVE: соответствовать правилу." },
      ],
    },
    {
      id: "ru-u61l2",
      unit: 61,
      lesson: 2,
      title: "Pushing back",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Push back on a claim — deny it, contest it, refute it outright, be outraged by it, make a reproach, and accuse someone.",
      items: [
        { id: "ru-u61l2-otritsat", type: "vocab", front: "отрицать", reading: "otritsat", meaning: "to deny", accept: ["to say it is not so", "to reject a claim", "to refuse to admit"], example: { jp: "Он продолжает отрицать эту ошибку, хотя все документы говорят об обратном.", en: "He goes on denying his mistake, although all the documents say the opposite." }, drill: { jp: "Нельзя отрицать такой факт", en: "You cannot deny such a fact" }, hint: "at-ri-TSAT — stress on the last syllable, and the ц is said ts. IMPERFECTIVE, and it has no everyday perfective. ⚠️ It is stronger than не соглашаться: you deny that the thing happened at all." },
        { id: "ru-u61l2-osparivat", type: "vocab", front: "оспаривать", reading: "osparivat", meaning: "to challenge a claim", accept: ["to dispute a point", "to argue against", "to take issue with"], example: { jp: "Никто не стал оспаривать его вывод, потому что доказательство было слишком ясным.", en: "Nobody contested his conclusion, because the proof was too clear." }, drill: { jp: "Он будет оспаривать это решение", en: "He will contest this decision" }, hint: "as-PA-ri-vat — stress on PA. IMPERFECTIVE; the perfective is оспорить. It sits on спор «an argument» with the о- prefix, and ⚠️ its bare sibling спорить was REFUSED on the derivation test — see this unit's header §6." },
        { id: "ru-u61l2-oprovergat", type: "vocab", front: "опровергать", reading: "oprovergat", meaning: "to refute", accept: ["to disprove", "to show something is false", "to knock down an argument"], example: { jp: "Специалист приводит новые факты, чтобы опровергать старую теорию, которую все считали правильной.", en: "The specialist brings new facts in order to refute the old theory, which everyone considered correct." }, drill: { jp: "Трудно опровергать такое доказательство", en: "It is hard to refute such proof" }, hint: "a-pra-vir-GAT — stress on the last syllable, and every unstressed vowel reduces. IMPERFECTIVE; the perfective is опровергнуть. Stronger than оспаривать: you contest a claim, you refute it with evidence." },
        { id: "ru-u61l2-vozmushchatsya", type: "vocab", front: "возмущаться", reading: "vozmushchatsya", meaning: "to be outraged", accept: ["to be indignant", "to protest angrily", "to be appalled"], example: { jp: "Соседи стали возмущаться шумом, потому что ремонт продолжался уже третий месяц.", en: "The neighbours began to be outraged by the noise, because the repairs had already been going on for a third month." }, drill: { jp: "Люди начинают возмущаться этим решением", en: "People are starting to be outraged by this decision" }, hint: "vaz-mu-SHCHAT-sya — stress on SHCHAT, with the long щ from unit 3. IMPERFECTIVE and REFLEXIVE; the perfective is возмутиться. It takes the INSTRUMENTAL: возмущаться шумом." },
        { id: "ru-u61l2-upryok", type: "vocab", front: "упрёк", reading: "upryok", meaning: "a reproach", accept: ["a rebuke", "a word of blame", "a criticism of someone"], example: { jp: "В её голосе был упрёк, хотя она ничего прямо не сказала.", en: "There was a reproach in her voice, although she said nothing directly." }, drill: { jp: "Это был тихий упрёк", en: "That was a quiet reproach" }, hint: "up-RYOK — stress on the last syllable, and the ё is always written, as unit 1 §7 requires. MASCULINE. Softer than an accusation: a reproach is personal and often unspoken." },
        { id: "ru-u61l2-obvinyat", type: "vocab", front: "обвинять", reading: "obvinyat", meaning: "to accuse", accept: ["to blame someone", "to lay the blame", "to charge someone with something"], example: { jp: "Не надо обвинять его в том, чего он не делал, пока мы не знаем всей правды.", en: "There is no need to accuse him of what he did not do, until we know the whole truth." }, drill: { jp: "Нельзя обвинять человека без доказательства", en: "You cannot accuse a person without proof" }, hint: "ab-vi-NYAT — stress on the last syllable. IMPERFECTIVE; the perfective is обвинить. It takes в + the prepositional: обвинять в ошибке." },
      ],
    },
    {
      id: "ru-u61l3",
      unit: 61,
      lesson: 3,
      title: "Insisting, conceding, judging",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Hold your ground and give ground — insist, stress the key point, offer a concession, suppose something, say what a thing is regarded as, and condemn it.",
      items: [
        { id: "ru-u61l3-nastaivat", type: "vocab", front: "настаивать", reading: "nastaivat", meaning: "to insist", accept: ["to press the point", "to stand firm", "to keep demanding"], example: { jp: "Он будет настаивать на этом решении, даже если все остальные против.", en: "He will insist on that decision, even if everyone else is against it." }, drill: { jp: "Не надо настаивать на этом", en: "There is no need to insist on this" }, hint: "nas-TA-i-vat — stress on TA. IMPERFECTIVE; the perfective is настоять. It takes на + the prepositional: настаивать на решении." },
        { id: "ru-u61l3-podchyorkivat", type: "vocab", front: "подчёркивать", reading: "podchyorkivat", meaning: "to stress a point", accept: ["to emphasise", "to underline", "to draw attention to"], example: { jp: "В докладе он несколько раз подчёркивал, что без денег проект не будет готов.", en: "In the presentation he stressed several times that without money the project will not be ready." }, drill: { jp: "Важно подчёркивать эту мысль", en: "It is important to stress this thought" }, hint: "pat-CHYOR-ki-vat — stress on CHYOR, and the ё is written. IMPERFECTIVE; the perfective is подчеркнуть. Literally to draw a line UNDER something, and that is also what it means with a pen." },
        { id: "ru-u61l3-ustupka", type: "vocab", front: "уступка", reading: "ustupka", meaning: "a concession", accept: ["a point given up", "giving ground", "a step back in a dispute"], example: { jp: "Эта уступка была трудной для него, но без неё договор не был бы готов.", en: "That concession was hard for him, but without it the contract would not have been ready." }, drill: { jp: "Это была большая уступка", en: "That was a big concession" }, hint: "us-TUP-ka — stress on TUP. FEMININE (-а). «Пойти на уступку» is the set phrase: to make a concession." },
        { id: "ru-u61l3-polagat", type: "vocab", front: "полагать", reading: "polagat", meaning: "to suppose", accept: ["to take the view", "to reckon", "to be of the opinion"], example: { jp: "Я полагаю, что он прав, хотя доказательства у меня нет.", en: "I suppose that he is right, although I have no proof." }, drill: { jp: "Можно полагать что он прав", en: "One may suppose that he is right" }, hint: "pa-la-GAT — stress on the last syllable, and both о reduce to a. IMPERFECTIVE, with no everyday perfective. ⚠️ MORE FORMAL than думать: полагать belongs to a report, думать to a conversation." },
        { id: "ru-u61l3-schitatsya", type: "vocab", front: "считаться", reading: "schitatsya", meaning: "to be regarded as", accept: ["to count as", "to be reputed to be", "to be thought of as"], example: { jp: "Этот университет считается лучшим в стране, хотя он совсем новый.", en: "That university is regarded as the best in the country, although it is quite new." }, drill: { jp: "Это может считаться ошибкой", en: "That may count as a mistake" }, hint: "shchi-TAT-sya — stress on TAT, and сч at the front is said shch. IMPERFECTIVE and REFLEXIVE. It takes the INSTRUMENTAL for what the thing is regarded AS: считаться лучшим." },
        { id: "ru-u61l3-osuzhdat", type: "vocab", front: "осуждать", reading: "osuzhdat", meaning: "to condemn", accept: ["to disapprove strongly", "to censure", "to denounce"], example: { jp: "Не стоит осуждать человека, пока ты не знаешь, почему он так сделал.", en: "It is not worth condemning a person until you know why he did it that way." }, drill: { jp: "Люди будут осуждать такой поступок", en: "People will condemn such a deed" }, hint: "a-suzh-DAT — stress on the last syllable. IMPERFECTIVE; the perfective is осудить. It sits on суд «a court» with the о- prefix, and ⚠️ in court Russian it also means to pass sentence." },
      ],
    },
    {
      id: "ru-u61l4",
      unit: 61,
      lesson: 4,
      title: "Framing your own view",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Mark a view as your own and structure it — in my view, in the first place, in part, perfectly so, in actual fact — and name the stance someone holds.",
      items: [
        { id: "ru-u61l4-pomoemu", type: "vocab", front: "по-моему", reading: "pomoemu", meaning: "in my view", accept: ["to my mind", "as I see it", "if you ask me"], example: { jp: "По-моему, он не прав, хотя почти все на собрании его поддержали.", en: "In my view he is not right, although nearly everyone at the meeting backed him." }, drill: { jp: "По-моему это очень плохая идея", en: "In my view that is a very bad idea" }, hint: "pa-MO-i-mu — stress on MO, written with a hyphen like по-русски from unit 8. ⚠️ It marks the whole sentence as yours and is set off by a comma in writing." },
        { id: "ru-u61l4-vopervykh", type: "vocab", front: "во-первых", reading: "vopervykh", meaning: "in the first place", accept: ["firstly", "to begin with", "first of all"], example: { jp: "Во-первых, у нас нет денег, и это самая главная причина.", en: "In the first place we have no money, and that is the most important reason." }, drill: { jp: "Во-первых это слишком дорого", en: "In the first place that is too expensive" }, hint: "va-PER-vykh — stress on PER, with a hyphen. ⚠️ Its partners are во-вторых and в-третьих, and a Russian who says во-первых is expected to produce at least a second point." },
        { id: "ru-u61l4-otchasti", type: "vocab", front: "отчасти", reading: "otchasti", meaning: "in part", accept: ["partly", "to some extent", "up to a point"], example: { jp: "Отчасти я с ним согласен, но его главный довод мне кажется слабым.", en: "In part I agree with him, but his main point seems weak to me." }, drill: { jp: "Он отчасти прав здесь", en: "He is partly right here" }, hint: "at-CHAS-ti — stress on CHAS. It is the polite way to half-agree, and in a Russian discussion it is usually the start of a disagreement." },
        { id: "ru-u61l4-vpolne", type: "vocab", front: "вполне", reading: "vpolne", meaning: "perfectly so", accept: ["entirely", "quite", "fully"], example: { jp: "Его объяснение вполне ясное, и никто не стал его оспаривать.", en: "His explanation is perfectly clear, and nobody set about contesting it." }, drill: { jp: "Я вполне доволен этим результатом", en: "I am entirely content with this result" }, hint: "vpal-NE — stress on the last syllable, and the first о reduces. It strengthens an adjective or an adverb: вполне ясно, вполне достаточно. Compare совсем from unit 23, which is stronger again." },
        { id: "ru-u61l4-deystvitelno", type: "vocab", front: "действительно", reading: "deystvitelno", meaning: "in actual fact", accept: ["really", "indeed", "as it turns out"], example: { jp: "Он говорил, что знает ответ, и действительно знал его.", en: "He said that he knew the answer, and in actual fact he did know it." }, drill: { jp: "Это действительно очень трудный вопрос", en: "That really is a very hard question" }, hint: "dis-tvi-TEL-na — stress on TEL, and the first е reduces to a short i. ⚠️ Compare правда from unit 22, which is a NOUN; действительно is the adverb you drop into a sentence to confirm it." },
        { id: "ru-u61l4-pozitsiya", type: "vocab", front: "позиция", reading: "pozitsiya", meaning: "a stance", accept: ["a position taken", "a standpoint", "where someone stands on an issue"], example: { jp: "Его позиция по этому вопросу не менялась двадцать лет.", en: "His stance on that question has not changed in twenty years." }, drill: { jp: "Это очень странная позиция", en: "That is a very strange stance" }, hint: "pa-ZI-tsi-ya — stress on ZI. FEMININE (-я), another -ция noun taking the stress on the syllable before it, like традиция from unit 55. ⚠️ Glossed «a stance» and not «a position»: взгляд from unit 39 is the look you take, позиция is the ground you hold." },
      ],
    },
  ],
};
