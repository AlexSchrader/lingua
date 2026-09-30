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
//   * ⚠️ THAT LINE DID NOT HOLD, AND THE BAND DEDUPE OF 2026-09-30 SETTLED IT.
//     Block 3 originally took the STEERING PARTICLES in u52l4 (наоборот · вообще ·
//     именно · кстати · ведь), leaving only CLAUSE CONNECTORS to block 2's u46.
//     Block 2 could not see that and took all five as well. THE WHOLE
//     DISCOURSE-MARKER LANE IS NOW u46's — particles included — and u52l4 was
//     re-authored as the NOUNS OF A CASE (мотив · совпадение · вариант ·
//     обстоятельство · противоречие) plus `например`, which stays in u52.
//     ⚠️ Two of those five were themselves replaced in a second round the same day:
//     `теория` and `практика` collided with block 2's u41l4, which the first round
//     could not see because u41–u50 were stubs on block 3's branch. unit52.js's
//     header records the procedure that prevents it: merge the other block FIRST,
//     then probe.
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
//     `право` vs `правильный` (u40) — kept DELIBERATELY, and it is the closest
//          call in the block. The прав- root already carries правда (u22),
//          направо (u14), правильный (u40) and направление (u36). It stays
//          because "права" is core A2 (права человека, and the plural is the
//          everyday word for a driving licence) and because the root link is a
//          teaching ASSET — u51l4's hint uses it.
//          ⚠️ REVISED 2026-09-30, AND THE REASONING MATTERS. Block 3 originally
//          carded `правило` "a rule" here and refused BOTH `право` and
//          `правительство` to keep the count at one new прав- word in the unit.
//          The band dedupe sent `правило` to u41 (it collided with block 2), which
//          freed the single slot — so `право` takes it and u51l4 cards it. The
//          count is still ONE new прав- word in this unit. `правительство`
//          "a government" stays refused on exactly that ground.
//     `учить` vs `учиться` (u35) — explicitly sanctioned by the crew brief and by
//          unit31.js's -ся rule: the government and the gloss both differ
//          (учить кого-то = to teach, учиться = to study).
//     `зависть` "envy" alongside `зависеть` "to depend" — DIFFERENT roots
//          (завид- vs вис-) that look alike. Not a duplicate; the hint on each
//          warns about the other. ⚠️ `зависеть` was block 3's own at u52l3 until
//          the band dedupe of 2026-09-30 moved it to block 2's u46, which had
//          taught it too. u56l3's hint cites u46 accordingly.
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
        { id: "ru-u51l2-vlast", type: "vocab", front: "власть", reading: "vlast", meaning: "authority", accept: ["power over others", "the authorities", "who is in charge"], example: { jp: "Власть в этой стране очень сильная.", en: "Authority in this country is very strong." }, drill: { jp: "Власть здесь очень сильная", en: "Authority here is very strong" }, hint: "VLAST — one syllable, and the final ь keeps the т soft. ⚠️ FEMININE, and the -ь ending never tells you that, so it has to be learned: сильная власть. In the plural, власти, it means «the authorities»." },
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
      canDo: "Talk about a law and the court that applies it, and say that something is a crime carrying a punishment, a fine or a prison term.",
      items: [
        { id: "ru-u51l3-zakon", type: "vocab", front: "закон", reading: "zakon", meaning: "a law", accept: ["the law", "a statute", "a law of the land"], example: { jp: "Это новый закон нашей страны.", en: "That is a new law of our country." }, drill: { jp: "Это очень старый закон", en: "This is a very old law" }, hint: "za-KON — stress on the last syllable. MASCULINE. One written law. «По закону» means «by law», and it is the phrase you will meet most often." },
        { id: "ru-u51l3-tyurma", type: "vocab", front: "тюрьма", reading: "tyurma", meaning: "a prison", accept: ["a jail", "gaol", "being locked up"], example: { jp: "После суда он был в тюрьме год.", en: "After the trial he was in prison for a year." }, drill: { jp: "Эта тюрьма очень старая", en: "That prison is very old" }, hint: "tyur-MA — stress on the last syllable, and the ь keeps the р soft. FEMININE (-а). Where a наказание is served once a суд has passed one. ⚠️ Its stress moves right back in the plural: TYUR-my, тюрьмы." },
        { id: "ru-u51l3-sud", type: "vocab", front: "суд", reading: "sud", meaning: "a court", accept: ["a court of law", "a trial", "the judges"], example: { jp: "Суд в этом городе очень старый.", en: "The court in this town is very old." }, drill: { jp: "Суд здесь очень старый", en: "The court here is very old" }, hint: "SUD — one syllable, and the д goes quiet, so it comes out SUT. MASCULINE. The building, the institution, and the hearing itself. ⚠️ Its stress MOVES in the oblique cases: в судЕ, о судЕ." },
        { id: "ru-u51l3-prestuplenie", type: "vocab", front: "преступление", reading: "prestuplenie", meaning: "a crime", accept: ["an offence", "a criminal act", "breaking the law"], example: { jp: "Такое преступление очень серьёзное.", en: "A crime like that is very serious." }, drill: { jp: "Это очень серьёзное преступление", en: "That is a very serious crime" }, hint: "pri-stup-LE-ni-ye — five syllables, stress on LE. NEUTER (-е). Literally a stepping-over: the -ступ- inside it is the same root as шаг's idea of a step. Serious enough for a суд." },
        { id: "ru-u51l3-nakazanie", type: "vocab", front: "наказание", reading: "nakazanie", meaning: "a punishment", accept: ["a penalty in law", "being punished", "a sentence"], example: { jp: "Это наказание очень строгое.", en: "That punishment is very strict." }, drill: { jp: "Наказание здесь очень строгое", en: "The punishment here is very strict" }, hint: "na-ka-ZA-ni-ye — stress on ZA. NEUTER (-е). What a court gives for a преступление. Do not hear сказать from unit 31 in it — the roots only look alike." },
        { id: "ru-u51l3-shtraf", type: "vocab", front: "штраф", reading: "shtraf", meaning: "a penalty", accept: ["a fine", "a parking fine", "money you must pay for breaking a rule"], example: { jp: "Я должен заплатить этот штраф сегодня.", en: "I have to pay this fine today." }, drill: { jp: "Мне нужно заплатить штраф", en: "I need to pay the fine" }, hint: "SHTRAF — one syllable, and шт at the front is said exactly as written. MASCULINE. A money penalty, the small everyday kind: a parking штраф, a late-fee штраф. It goes with заплатить from unit 31." },
      ],
    },
    {
      id: "ru-u51l4",
      unit: 51,
      lesson: 4,
      title: "Parties, unions and officials",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the civic side of a state — name a political party, a union and a public body, say who is an elected member and who is an official, and say what right you have.",
      items: [
        { id: "ru-u51l4-pravo", type: "vocab", front: "право", reading: "pravo", meaning: "a right", accept: ["a legal right", "the right to do something", "an entitlement"], example: { jp: "У каждого человека есть это право.", en: "Every person has this right." }, drill: { jp: "У меня есть такое право", en: "I have a right like that" }, hint: "PRA-va — stress on the first syllable, and the final о reduces to a. NEUTER (-о). ⚠️ Do not mix it with правило from unit 41: a право is what you are ENTITLED to, a правило is what you must follow. Its plural права is also the everyday word for a driving licence." },
        { id: "ru-u51l4-partiya", type: "vocab", front: "партия", reading: "partiya", meaning: "a political party", accept: ["a party in politics", "a political grouping", "one round of a game"], example: { jp: "Эта партия в нашей стране очень старая.", en: "That party is very old in our country." }, drill: { jp: "Эта новая партия уже большая", en: "That new party is large already" }, hint: "PAR-ti-ya — stress on the first syllable. FEMININE (-я). ⚠️ It is NEVER a celebration — a birthday party is a праздник from unit 10. It also means one round of a game: «партия в шахматы»." },
        { id: "ru-u51l4-soyuz", type: "vocab", front: "союз", reading: "soyuz", meaning: "a union", accept: ["an alliance", "a league of states", "a trade union"], example: { jp: "Этот союз был очень сильный.", en: "That union was very strong." }, drill: { jp: "Это очень старый союз", en: "That is a very old union" }, hint: "sa-YUZ — stress on the last syllable, and the о reduces to a. MASCULINE. An alliance of states or of people: Советский Союз was the Soviet Union, профсоюз is a trade union. ⚠️ In grammar it is also the word for a conjunction." },
        { id: "ru-u51l4-organizatsiya", type: "vocab", front: "организация", reading: "organizatsiya", meaning: "an organisation", accept: ["an organization", "a body", "an association"], example: { jp: "Эта организация очень известная.", en: "That organisation is very well known." }, drill: { jp: "Наша организация уже известная", en: "Our organisation is well known already" }, hint: "ar-ga-ni-ZA-tsi-ya — six syllables, stress on ZA, and the о at the front reduces to a. FEMININE (-я). ⚠️ Russian's -ция ending answers English -tion every time, and always takes the stress on the syllable before it." },
        { id: "ru-u51l4-deputat", type: "vocab", front: "депутат", reading: "deputat", meaning: "an elected member", accept: ["a member of parliament", "an MP", "a deputy in a parliament"], example: { jp: "Этот депутат работает в нашем городе.", en: "That elected member works in our town." }, drill: { jp: "Наш депутат уже здесь", en: "Our elected member is here already" }, hint: "di-pu-TAT — stress on the last syllable, and the е reduces to i. MASCULINE. ⚠️ Glossed «an elected member» and not «a deputy» on purpose: the word transliterates, and a prompt you can read the answer off is not a card. He is chosen by the народ from lesson 1 and makes the законы from lesson 3." },
        { id: "ru-u51l4-chinovnik", type: "vocab", front: "чиновник", reading: "chinovnik", meaning: "a state official", accept: ["an official", "a civil servant", "a bureaucrat"], example: { jp: "Этот чиновник работает здесь давно.", en: "That official has worked here a long time." }, drill: { jp: "Этот чиновник не хочет помогать", en: "That official does not want to help" }, hint: "chi-NOV-nik — stress on NOV. MASCULINE. Built on чин, an official rank, which is not carded. ⚠️ It carries a sour note in Russian: a чиновник is the person behind the desk who will not help you, and nobody calls themselves one with pride." },
      ],
    },
  ],
};
