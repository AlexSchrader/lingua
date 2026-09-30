// RU Unit 51 — Общество и государство ("Society and the state") — A2
// ─────────────────────────────────────────────────────────────────────────────
// FIRST UNIT OF BLOCK 3 (u51–u60), THE CLOSING BLOCK OF THE A2 BAND. Everything
// in ru/unit1.js §1–§10 and §A–§D binds, and so does ru/unit31.js §1–§7, which
// block 1 (the crew lead) closed. This header adds only what block 3 found.
//
// ⚠️ ALL TEN OF BLOCK 3's SLOT TITLES WERE `Vocabulary N (A2)`. Block 1 reported
// that all ten of ITS slot titles named ground A1 had already covered, and
// rethemed all ten (table in unit31.js §6). Block 3's problem is the opposite and
// worse: `Vocabulary 2 (A2)` … `Vocabulary 11 (A2)` name NO SUBJECT AT ALL, so
// there was nothing to measure a hole against — the theming is entirely block 3's
// invention. `src/data/lint.js` hard-errors on /^Vocabulary \d+$/ once a unit is
// authored, so retitling in Russian was compulsory, not a choice. §6 below lists
// every one of the ten with the hole it fills, measured against the live corpus.
//
// ═════════════════════════════════════════════════════════════════════════════
// §1 — ⚠️ BLOCK 2 (u41–u50) WAS AUTHORING CONCURRENTLY AND FOUR OF ITS SLOT
//      TITLES NAME DOMAINS ASSIGNED TO BLOCK 3. READ THIS BEFORE DEDUPING.
// ═════════════════════════════════════════════════════════════════════════════
// The crew brief split the band by DOMAIN, not by slot title, and the two do not
// line up. Block 3 was assigned: abstract reasoning and opinion · society and
// institutions · culture and leisure · character and personality · science and
// the natural world · the body and health beyond A1 · the coverage tail. But the
// SCAFFOLD titles in block 2's range are:
//     u41 Personality and character      → block 3's "character and personality"
//     u42 Society and daily life         → block 3's "society and institutions"
//     u44 Nature and science             → block 3's "science and the natural world"
//     u45 Culture and leisure            → block 3's "culture and leisure"
// Block 3 could not see block 2's fronts and block 2 could not see block 3's, so
// those four titles are the DEDUPE HOTSPOTS for whoever merges the band. The
// units on block 3's side of each are named here so the check is four greps, not
// a re-read of twenty files:
//     u51 (society/state) · u54 (science) · u55 (art/culture) · u56 (character)
// Block 3 kept the risk down rather than ignoring it, and the line it drew is
// worth stating because it is checkable:
//   * Block 3 took the ABSTRACT/INSTITUTIONAL slice of each shared domain (the
//     state, the law, the sciences as school subjects, the arts as art forms,
//     character as NOUNS of conduct) and left the concrete everyday slice.
//   * Block 3 took PARTICLES AND ADVERBS in u52l4 (наоборот · вообще · именно ·
//     кстати · ведь · например) and deliberately left every CLAUSE CONNECTOR to
//     block 2's u46, on top of block 1's reserved eight.
//   * Nothing on block 1's reserved list was touched. `чем` · `более` · `менее` ·
//     `самый` · `мочь` · `уметь` · `хотя` · `чтобы` are all still free, verified
//     with `node scripts/tmp/ru-a2-block3-probe.mjs` on this branch.
//   * COMPARISON AND DEGREE, ABILITY, MONEY/QUANTITY, EDUCATION, TECHNOLOGY, THE
//     WORKPLACE AND MEDIA are block 2's and block 3 authored none of them. Four
//     candidates were refused for that reason alone and are named in §5.
//
// ═════════════════════════════════════════════════════════════════════════════
// §2 — TWO CONVENTION HAZARDS BLOCK 3 HIT THAT BLOCK 1 DID NOT, both measured.
// ═════════════════════════════════════════════════════════════════════════════
// (a) THE SOFT-SIGN READING COLLISION IS NOT THEORETICAL. unit1.js §1(b) warns
//     that ь is dropped from a reading, so `быть`/`быт` collide. Block 3 hit it
//     twice on real candidates and dropped both:
//        `съесть` "to eat up" → reading "sest", WHICH IS ALREADY `сесть`'s
//             (u31l4, "to sit down"). The perfective of "to eat" is therefore
//             unavailable under this scheme. `поесть` → "poest" is free and is
//             what u58l1 cards instead.
//        `семя` "a seed" → reading "semya", WHICH IS ALREADY `семья`'s (u10l1,
//             "a family"). u54l3 cards `зерно` "a grain" instead.
//     ⚠️ SO THE RULE IS: TRANSLITERATE EVERY CANDIDATE AND CHECK THE READING, NOT
//     ONLY THE FRONT. Both of these passed a front-uniqueness probe cleanly.
// (b) A SUBSTANTIVISED ADJECTIVE IS AN INFLECTED FORM, and unit1.js §5's last
//     rule therefore forbids it. `лёгкое` "a lung" IS the neuter singular of
//     `лёгкий` (u19l2, "simple") — a second mastery track for one word wearing a
//     noun's meaning. REFUSED; u53l2 cards `печень` "a liver" in its place. This
//     is the first time the rule has bitten a NOUN in Russian and it will bite
//     again at B1 (`больной` a patient, `учёный` a scientist, `взрослый` — which
//     A1 already carded as the adjective at u10l4).
//
// ═════════════════════════════════════════════════════════════════════════════
// §3 — HOW BLOCK 3 APPLIED §D's DERIVATION TEST, because it refused 31 candidates
//      on it and a later seat will otherwise re-litigate every one.
// ═════════════════════════════════════════════════════════════════════════════
// unit1.js §D's test is "would a learner who knows one already know the other?"
// At A2 nearly every useful abstract noun sits on a root A1 already spent, so the
// test decides most of the block. Block 3 read it as ONE-DIRECTIONAL, which is
// the part §D leaves implicit: the question is whether the TAUGHT word gives the
// candidate away, not whether a linguist can see the link.
//   REFUSED — the taught word gives it away:
//     решение (решать u24 · решить u31) · знание (знать u4) · объяснение
//     (объяснять u34) · сомнение (сомневаться u35) · интерес (интересный u19 ·
//     интересоваться u32) · уверенность (уверен u24) · значение (значит u22, AND
//     a gloss collision with смысл u39) · выбор (выбирать u18) · выборы (same) ·
//     относиться (отношение u39) · замечать (замечание u39) · доказывать
//     (доказательство u39) · удивлять (удивляться u34) · требовать (требование
//     u34) · мечтать (мечта u24) · просить (просьба u34) · помощь (помогать u20) ·
//     доброта (добрый u7) · вежливость (вежливый u28) · гордость (гордый u28 ·
//     гордиться u32) · дружба (друг u6) · лень (ленивый u28) · обида (обидно u34) ·
//     слабость (слабый u20) · усталость (устал u7) · светлый (свет u15) ·
//     круглый (круг u36) · ровный (ровно u37) · редкий (редко u22) ·
//     чайник (чай u2) · солёный (соль u5) · напиток (пить, carded in the SAME
//     lesson — the worst version of the fault) · растение (расти, carded at
//     u54l3) · сушить (сухой, carded at u60l3) · лечение (лечиться u35) ·
//     здоровый (здоровье u20) · безопасность (опасный u40, and без+X is the rule
//     u38's header states) · ученик and учёный (учитель u8 · учиться u35 ·
//     учить u59l2 — the уч- root is at four already) · писатель (писать u4 ·
//     написать u31) · рассказ (рассказывать u34) · обычай (обычный u40) ·
//     встреча (встречать u23 · встретить u31) · образование (the уч- family
//     again, AND education is block 2's domain).
//   ALLOWED, and the reasoning rather than the verdict:
//     `память` vs `помнить` (u22) — the root vowel alternates пом-/пам-, which is
//          opaque to a beginner, and English memory/remember differ too.
//     `болезнь` vs `болеть` (u20) / `больно` (u34) — the -знь suffix is dead and
//          the sense shifts from hurting to a named disease. ⚠️ `боль` "pain" was
//          REFUSED on the same test, which knowing болеть DOES give away.
//     `доверие` vs `верить` (u22) — a PREFIXED derivation, and unit31.js §3 sets
//          the precedent that prefixes other than не- are allowed (навсегда,
//          вовремя) while не+X is not.
//     `одиночество` vs `один` (u11) — the semantic distance from "one" to
//          "loneliness" is the whole point of the word.
//     `надёжный` vs `надеяться` (u28) — "reliable" is not guessable from "to hope".
//     `современный` vs `время` (u22) — со+времен+ный is three steps.
//     `правило` vs `правильный` (u40) — kept DELIBERATELY, and it is the closest
//          call in the block. The прав- root already carries правда (u22),
//          направо (u14), правильный (u40) and направление (u36). It stays
//          because "правила" is core A2 (правила движения, правила игры) and
//          because the root link is a teaching ASSET — u51l3's hint uses it.
//          ⚠️ `право` "a right" and `правительство` "a government" were BOTH
//          refused to keep the count at one new прав- word in this unit.
//     `учить` vs `учиться` (u35) — explicitly sanctioned by the crew brief and by
//          unit31.js's -ся rule: the government and the gloss both differ
//          (учить кого-то = to teach, учиться = to study).
//     `зависть` "envy" alongside `зависеть` "to depend" (u52l3, block 3's own) —
//          DIFFERENT roots (завид- vs вис-) that look alike. Not a duplicate; the
//          hint on each warns about the other.
//
// ═════════════════════════════════════════════════════════════════════════════
// §4 — THE TWO VERBS RUSSIAN A1 FORGOT, and why only one of them could be fixed.
// ═════════════════════════════════════════════════════════════════════════════
// Measured on this branch: `пить` "to drink" and `слушать` "to listen" are taught
// NOWHERE in u1–u40. Both are on any A1 word list in any language and both are
// now carded — пить at u58l1, слушать at u59l1. Also missing and now carded:
// `сидеть` · `лежать` · `стоять` (u57l1 — A1 taught none of the three postures,
// and block 1's u31 taught only their perfectives сесть/встать), and
// `открывать` / `закрывать` (u57l2).
// ⚠️ "TO EAT" COULD NOT BE FIXED AND IS STILL MISSING AS A FRONT. `есть` is a
// front already — u10l3 carded it as the EXISTENTIAL "there is, have" — and its
// perfective `съесть` collides on reading with `сесть` (§2a). u58l1 cards
// `поесть` "to have a meal", whose hint states plainly that the imperfective is
// the same word u10 taught. A learner can now say they want a meal; they still
// cannot conjugate "I eat". That is a real gap and it is B1's to close.
//
// ═════════════════════════════════════════════════════════════════════════════
// §5 — LEFT TO BLOCK 2 ON PURPOSE, so the merge seat can tell a gap from a theft.
// ═════════════════════════════════════════════════════════════════════════════
//   `богатый` · `бедный` — wealth adjectives, and money beyond u37 is block 2's.
//   `включать` · `выключать` — switching things on is block 2's u43 technology.
//   `сравнивать` · `различие` · `сходство` · `степень` — comparison and degree.
//   `связь` — communication, block 2's u43.
//   Block 1's reserved eight, untouched: чем · более · менее · самый · мочь ·
//        уметь · хотя · чтобы.
//   Of block 1's one-of-a-pair list block 3 took `тип` (u60l4) and left `вид`,
//        and took `объём` (u54l2). `возить` · `высокий` · `ширина` · `глубина`
//        are still free.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT51 = {
  id: "ru-u51",
  lang: "ru",
  title: "Общество и государство",
  order: 51,
  stage: "a2",
  lessons: [
    {
      id: "ru-u51l1",
      unit: 51,
      lesson: 1,
      title: "A country and the people in it",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say which state you are a citizen of, and talk about a people, a society, and the population of a town or a village.",
      items: [
        { id: "ru-u51l1-gosudarstvo", type: "vocab", front: "государство", reading: "gosudarstvo", meaning: "a state", accept: ["the state", "a nation state", "the state as an institution"], example: { jp: "Наше государство очень старое и большое.", en: "Our state is very old and very large." }, drill: { jp: "Это большое государство", en: "This is a large state" }, hint: "ga-su-DAR-stva — five syllables, stress on DAR, and both о before it reduce to a. NEUTER (-о). страна from unit 8 is the land and the people in it; государство is the machinery that runs them." },
        { id: "ru-u51l1-narod", type: "vocab", front: "народ", reading: "narod", meaning: "a nation", accept: ["a people", "the people of a country", "the folk"], example: { jp: "Этот народ очень любит музыку и книги.", en: "That nation loves music and books very much." }, drill: { jp: "Здесь живёт очень старый народ", en: "A very old nation lives here" }, hint: "na-ROD — stress on the last syllable, and the д goes quiet at the end, so it comes out na-ROT. MASCULINE (consonant ending). A people considered as one body — not люди, which is just several persons." },
        { id: "ru-u51l1-obshchestvo", type: "vocab", front: "общество", reading: "obshchestvo", meaning: "society", accept: ["a society", "the community", "people in general"], example: { jp: "Наше общество сегодня очень разное.", en: "Our society today is a very mixed one." }, drill: { jp: "Наше общество очень большое", en: "Our society is very large" }, hint: "OB-shchist-va — stress on the first syllable. NEUTER (-о). Built on общий from unit 40, «shared» — society is literally the shared thing. It also means a club or an association." },
        { id: "ru-u51l1-naselenie", type: "vocab", front: "население", reading: "naselenie", meaning: "a population", accept: ["the population", "the inhabitants as a whole", "how many people live there"], example: { jp: "Население этого города очень большое.", en: "The population of this city is very large." }, drill: { jp: "Население города уже большое", en: "The population of the city is already large" }, hint: "na-si-LE-ni-ye — five syllables, stress on LE. NEUTER (-е). The number of people living somewhere, as one word. Russian uses it where English says «the population of»." },
        { id: "ru-u51l1-grazhdanin", type: "vocab", front: "гражданин", reading: "grazhdanin", meaning: "a citizen", accept: ["a national", "a citizen of a country", "a member of the public"], example: { jp: "Я гражданин этой страны и живу здесь.", en: "I am a citizen of this country and I live here." }, drill: { jp: "Он гражданин нашей страны", en: "He is a citizen of our country" }, hint: "gra-zhda-NIN — stress on the last syllable. MASCULINE; the woman is гражданка. ⚠️ Its plural changes root outright: граждане, not гражданины. On a form or a sign it is the polite word for a member of the public." },
        { id: "ru-u51l1-derevnya", type: "vocab", front: "деревня", reading: "derevnya", meaning: "a village", accept: ["the countryside", "a country village", "out in the country"], example: { jp: "Наша деревня очень маленькая и тихая.", en: "Our village is very small and very quiet." }, drill: { jp: "Это тихая деревня в лесу", en: "This is a quiet village in the forest" }, hint: "di-REV-nya — stress on REV. FEMININE (-я). A village, and also «the countryside» as against town: «в деревне» can mean in the village or simply out of the city. Do not hear дерево, «a tree», from unit 26 in it — different word." },
      ],
    },
    {
      id: "ru-u51l2",
      unit: 51,
      lesson: 2,
      title: "Who holds power",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name who is in charge of a country, and talk about an army, a soldier and a war.",
      items: [
        { id: "ru-u51l2-vlast", type: "vocab", front: "власть", reading: "vlast", meaning: "authority", accept: ["power over others", "the authorities", "who is in charge"], example: { jp: "Власть в этой стране очень строгая.", en: "Authority in this country is very strict." }, drill: { jp: "Власть здесь очень строгая", en: "Authority here is very strict" }, hint: "VLAST — one syllable, and the final ь keeps the т soft. ⚠️ FEMININE, and the -ь ending never tells you that, so it has to be learned: сильная власть. In the plural, власти, it means «the authorities»." },
        { id: "ru-u51l2-prezident", type: "vocab", front: "президент", reading: "prezident", meaning: "a president", accept: ["the president", "the head of state", "the country's leader"], example: { jp: "Президент нашей страны говорит сегодня.", en: "The president of our country is speaking today." }, drill: { jp: "Президент уже здесь", en: "The president is already here" }, hint: "pri-zi-DENT — stress on the last syllable, and both е before it reduce to a short i. MASCULINE. An internationalism you can read at sight once you know Cyrillic — which is exactly what unit 9 was for." },
        { id: "ru-u51l2-ministr", type: "vocab", front: "министр", reading: "ministr", meaning: "a minister", accept: ["a government minister", "a secretary of state", "the head of a ministry"], example: { jp: "Новый министр работает в столице.", en: "The new minister works in the capital." }, drill: { jp: "Министр уже в столице", en: "The minister is already in the capital" }, hint: "mi-NISTR — stress on NISTR, and ⚠️ the -стр at the end takes no vowel after it, exactly like литр from unit 37. MASCULINE. A minister of state, never a church minister." },
        { id: "ru-u51l2-armiya", type: "vocab", front: "армия", reading: "armiya", meaning: "an army", accept: ["the army", "the armed forces", "the military"], example: { jp: "Наша армия очень большая и сильная.", en: "Our army is very large and very strong." }, drill: { jp: "Армия здесь очень сильная", en: "The army here is very strong" }, hint: "AR-mi-ya — stress on the first syllable. FEMININE (-я). «В армии» means in the forces, doing military service." },
        { id: "ru-u51l2-soldat", type: "vocab", front: "солдат", reading: "soldat", meaning: "a soldier", accept: ["a serviceman", "a private", "someone in the army"], example: { jp: "Молодой солдат читает письмо от мамы.", en: "The young soldier is reading a letter from his mother." }, drill: { jp: "Это очень молодой солдат", en: "This is a very young soldier" }, hint: "sal-DAT — stress on the last syllable, and the о reduces to a. MASCULINE. ⚠️ Its genitive plural is солдат, with no ending at all — «пять солдат», the pattern unit 37 taught." },
        { id: "ru-u51l2-voyna", type: "vocab", front: "война", reading: "voyna", meaning: "a war", accept: ["the war", "warfare", "a time of war"], example: { jp: "Эта война была очень давно.", en: "That war was a very long time ago." }, drill: { jp: "Эта война была давно", en: "That war was a long time ago" }, hint: "vay-NA — stress on the last syllable. FEMININE (-а). ⚠️ Do not confuse it with мир from unit 5, which is the OTHER half of the pair: мир is both «peace» and «the world», война is war." },
      ],
    },
    {
      id: "ru-u51l3",
      unit: 51,
      lesson: 3,
      title: "The law and what it forbids",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a law and a rule, and say that something is a crime carrying a punishment or a penalty.",
      items: [
        { id: "ru-u51l3-zakon", type: "vocab", front: "закон", reading: "zakon", meaning: "a law", accept: ["the law", "a statute", "a law of the land"], example: { jp: "Это новый закон нашей страны.", en: "That is a new law of our country." }, drill: { jp: "Это очень старый закон", en: "This is a very old law" }, hint: "za-KON — stress on the last syllable. MASCULINE. One written law. «По закону» means «by law», and it is the phrase you will meet most often." },
        { id: "ru-u51l3-pravilo", type: "vocab", front: "правило", reading: "pravilo", meaning: "a rule", accept: ["a regulation", "the rules", "how it is done"], example: { jp: "Это главное правило нашей игры.", en: "That is the main rule of our game." }, drill: { jp: "Это главное правило здесь", en: "That is the main rule here" }, hint: "PRA-vi-la — stress on the first syllable. NEUTER (-о). Same -прав- root as правда from unit 22 and правильный from unit 40, which is the point: a правило is what makes an answer правильный. A закон is passed by a state; a правило can belong to a game." },
        { id: "ru-u51l3-sud", type: "vocab", front: "суд", reading: "sud", meaning: "a court", accept: ["a court of law", "a trial", "the judges"], example: { jp: "Суд в этом городе очень старый.", en: "The court in this town is very old." }, drill: { jp: "Суд здесь очень старый", en: "The court here is very old" }, hint: "SUD — one syllable, and the д goes quiet, so it comes out SUT. MASCULINE. The building, the institution, and the hearing itself. ⚠️ Its stress MOVES in the oblique cases: в судЕ, о судЕ." },
        { id: "ru-u51l3-prestuplenie", type: "vocab", front: "преступление", reading: "prestuplenie", meaning: "a crime", accept: ["an offence", "a criminal act", "breaking the law"], example: { jp: "Это очень серьёзное преступление.", en: "That is a very serious crime." }, drill: { jp: "Это серьёзное преступление против закона", en: "That is a serious crime against the law" }, hint: "pri-stup-LE-ni-ye — five syllables, stress on LE. NEUTER (-е). Literally a stepping-over: the -ступ- inside it is the same root as шаг's idea of a step. Serious enough for a суд." },
        { id: "ru-u51l3-nakazanie", type: "vocab", front: "наказание", reading: "nakazanie", meaning: "a punishment", accept: ["a penalty in law", "being punished", "a sentence"], example: { jp: "Это наказание очень строгое.", en: "That punishment is very strict." }, drill: { jp: "Наказание здесь очень строгое", en: "The punishment here is very strict" }, hint: "na-ka-ZA-ni-ye — stress on ZA. NEUTER (-е). What a court gives for a преступление. Do not hear сказать from unit 31 in it — the roots only look alike." },
        { id: "ru-u51l3-shtraf", type: "vocab", front: "штраф", reading: "shtraf", meaning: "a penalty", accept: ["a fine", "a parking fine", "money you must pay for breaking a rule"], example: { jp: "Я должен заплатить этот штраф сегодня.", en: "I have to pay this fine today." }, drill: { jp: "Мне нужно заплатить штраф", en: "I need to pay the fine" }, hint: "SHTRAF — one syllable, and шт at the front is said exactly as written. MASCULINE. A money penalty, the small everyday kind: a parking штраф, a late-fee штраф. It goes with заплатить from unit 31." },
      ],
    },
    {
      id: "ru-u51l4",
      unit: 51,
      lesson: 4,
      title: "What the state runs for you",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name a public service, a department and a tax, and say that something is a duty you cannot get out of.",
      items: [
        { id: "ru-u51l4-sluzhba", type: "vocab", front: "служба", reading: "sluzhba", meaning: "a public service", accept: ["a service", "an official service", "duty as a job"], example: { jp: "Эта служба работает каждый день.", en: "This service is open every day." }, drill: { jp: "Эта служба работает здесь", en: "This service works here" }, hint: "SLUZH-ba — stress on the first syllable. FEMININE (-а). An official service — скорая служба, служба такси. It also means service in the армия from lesson 2." },
        { id: "ru-u51l4-organizatsiya", type: "vocab", front: "организация", reading: "organizatsiya", meaning: "an organisation", accept: ["an organization", "a body", "an association"], example: { jp: "Эта организация очень известная.", en: "That organisation is very well known." }, drill: { jp: "Наша организация уже известная", en: "Our organisation is well known already" }, hint: "ar-ga-ni-ZA-tsi-ya — six syllables, stress on ZA, and the о at the front reduces to a. FEMININE (-я). ⚠️ Russian's -ция ending answers English -tion every time, and always takes the stress on the syllable before it." },
        { id: "ru-u51l4-otdel", type: "vocab", front: "отдел", reading: "otdel", meaning: "a department", accept: ["a section", "a division of an office", "a counter in a shop"], example: { jp: "Наш отдел работает в этом доме.", en: "Our department works in this building." }, drill: { jp: "Наш отдел работает здесь", en: "Our department works here" }, hint: "at-DEL — stress on the last syllable, and the о reduces to a. MASCULINE. A department of a firm or a ministry, and also a counter in a big shop: мясной отдел." },
        { id: "ru-u51l4-nalog", type: "vocab", front: "налог", reading: "nalog", meaning: "a tax", accept: ["taxation", "a duty you pay the state", "the tax"], example: { jp: "Этот налог очень большой для нас.", en: "That tax is very large for us." }, drill: { jp: "Налог здесь очень большой", en: "The tax here is very large" }, hint: "na-LOG — stress on the last syllable, and the г goes quiet at the end, so it comes out na-LOK. MASCULINE. Money the государство takes. «Платить налоги» is the everyday phrase." },
        { id: "ru-u51l4-pensiya", type: "vocab", front: "пенсия", reading: "pensiya", meaning: "a pension", accept: ["retirement", "a state pension", "retirement money"], example: { jp: "Его пенсия очень маленькая сегодня.", en: "His pension is very small nowadays." }, drill: { jp: "Её пенсия очень маленькая", en: "Her pension is very small" }, hint: "PEN-si-ya — stress on the first syllable. FEMININE (-я). Both the money and the state of being retired: «он на пенсии» means he has retired." },
        { id: "ru-u51l4-obyazannost", type: "vocab", front: "обязанность", reading: "obyazannost", meaning: "a duty", accept: ["an obligation", "a responsibility", "something you are obliged to do"], example: { jp: "Это моя обязанность, а не твоя.", en: "That is my duty, not yours." }, drill: { jp: "Это моя обязанность здесь", en: "That is my duty here" }, hint: "a-BYA-zan-nast — four syllables, stress on BYA, and the о at the front reduces to a. ⚠️ FEMININE — every noun in -ость is, without exception, which makes -ость the one -ь ending you never have to guess at." },
      ],
    },
  ],
};
