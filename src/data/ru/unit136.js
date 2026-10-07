// RU Unit 136 — Спорт высших достижений ("Elite sport") — B2
// ─────────────────────────────────────────────────────────────────────────────
// LAST UNIT OF B2 BLOCK 3 (u124–u136) AND THE LAST UNIT OF RUSSIAN. Conventions:
// ru/unit1.js §1–§10 and §A–§D, ru/unit31.js §1–§7, ru/unit51.js §1–§5,
// ru/unit87.js §1–§6, and ru/unit124.js §1–§5 for this block.
// Probes quoted in this header are reproducible with
// `node scripts/selfcheck-ru-b2-block3.mjs --probe <word> ...` — see unit124.js.
//
// THE MEASURED HOLE. u84 Спорт и состязание owns THE CLUB MATCH — `матч` ·
// `тренер` · `рекорд` · `гол` · `медаль` · `кубок` · `чемпион` · `соревнование` ·
// `победа` · `шахматы` · `ничья`. What 2,328 cards have nothing for is
// COMPETITION AS AN INSTITUTION: no Olympics, no league, no final, no draw, no
// heat, no relay, no stand, no podium, no warm-up, no doping, no ban. Twenty of
// the probed seeds survived and four more were added.
//
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ FIVE OF THIS UNIT'S MOST OBVIOUS WORDS ARE UNAVAILABLE, EACH FOR A
// DIFFERENT REASON. Every one probes FREE or looks free, and all five are named
// so the next seat does not re-discover them one at a time.
// ═════════════════════════════════════════════════════════════════════════════
//   `сборная` — the national TEAM, and the single most-used sports word in
//        Russian. A SUBSTANTIVISED ADJECTIVE, so unit1.js §5's last rule and
//        unit51.js §2(b) bar it outright — the rule that killed `лёгкое` at A2,
//        `пленный` at u129l4, `подозреваемый` at u131 and `вселенная` at u124
//        (unit124.js §1's list). l1 cards `первенство` in its place.
//   `дисциплина` — BLOCK 1's (u110), the workplace sense. This unit wants it
//        for "a sporting discipline" and DOES NOT GET A CARD: the central
//        allocation gives the front to the lower slot, so the sporting sense
//        goes in l1's `олимпиада` hint and nowhere else. **It was l2's `зачёт`
//        hint until the cross-block dedupe of 2026-10-07 moved that card to
//        u113; the sentence was carried across rather than lost.** This unit owns `отбор`;
//        u110 owns `аттестация`.
//   `ракетка` — the DIMINUTIVE of `ракета`, which THIS SEAT carded at u124l3.
//        A front probe run before u124 existed reported it free; the live
//        corpus does not. Same trap as `розетка` vs `роза` at u132 — see that
//        unit's header for the rule it taught: re-probe after every unit.
//   `судья` — a referee AND a judge, and `суд` is taught (u51l3) while the
//        courtroom is block 1's u102 by the central allocation. Two reasons at
//        once. l3 cards `рефери`, which is unambiguous and is the word Russian
//        sports commentary actually uses.
//   `дорожка` — the DIMINUTIVE of `дорога` (u4l1). Barred on the same
//        reasoning as ракетка.
//
// ⚠️ `медаль` · `кубок` · `чемпион` · `квалификация` ARE ALL TAKEN (u84l4,
// u84l4, u84l2, u73l4) and none of them is re-carded. `дисквалификация` IS
// carded, and it is NOT the same lexeme as u73's `квалификация`: a prefixed
// derivation, which unit31.js §3 allows, and nothing in "a qualification held"
// produces "a ban from competing".
//
// ⚠️ `фанат` WAS REFUSED FOR A GLOSS COLLISION WITH THIS UNIT'S OWN `болельщик`.
// Both are "a fan" and only one can own that prompt; болельщик is the Russian
// word for someone who supports a team, and фанат is the louder borrowing.
// `дисквалификация` took the slot.
//
// ⚠️ FOUR DERIVATIONS OF TAUGHT WORDS ARE KEPT, each a judgement under §D:
//   `болельщик` vs `болеть` (u20, to be ill) — болеть за кого-то is a separate
//        sense of the verb, and nothing in "to be ill" produces "a supporter".
//   `вратарь` vs `ворота` (u60l1, gates) — the old врат- form, and a learner
//        who knows "gates" does not produce "goalkeeper".
//   `тренажёр` vs `тренер` (u84) — a MACHINE, not a person; `тренировка` was
//        dropped to keep трен- at two.
//   `первенство` vs `первый` (u21) — "first" does not give you "championship",
//        and this card exists only because `сборная` cannot.
//   `забег` vs `бегать` (u27) — a PREFIXED derivation, allowed by unit31.js §3;
//        `бег` (the base) was dropped so the root stays at two.
//
// ⚠️ `финал`, `финиш`, `допинг`, `пьедестал`, `трибуна` AND `пенальти` ARE GLOSSED
// THE LONG WAY ROUND. All six transliterate to or very near the English word, so
// the obvious gloss normalises to the card's own reading and is a free pass
// under unit1.js §9 — the trap `генерал` hit at u129l1, `вето` at u102l4,
// `алиби` at u131l4, `линолеум` at u132l4 and `домино` at u134l1.
// (`финиш` joined the list at the cross-block dedupe of 2026-10-07, which moved
// l2's `зачёт` to u113 Образование и наука — the lower unit — and `трибуна`
// INTO this unit from u120, on the lead's explicit allocation. **`зачёт` is u113's
// and u113 < u136, so it stays in scope for this unit's sentences.**)
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT136 = {
  id: "ru-u136",
  lang: "ru",
  title: "Спорт высших достижений",
  order: 136,
  stage: "b2",
  lessons: [
    {
      id: "ru-u136l1",
      unit: 136,
      lesson: 1,
      title: "The great competition",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about competition as an institution — the Olympics, a championship, a league, the last match, the round before it and the draw that sets them up.",
      items: [
        { id: "ru-u136l1-olimpiada", type: "vocab", front: "олимпиада", reading: "olimpiada", meaning: "the Olympic Games", accept: ["the games held every four years", "the biggest world sporting meeting", "the four-yearly world games"], example: { jp: "Олимпиада была в этом городе двадцать лет назад, и люди ещё об этом говорят.", en: "The Games were in this city twenty years ago, and people still talk about it." }, drill: { jp: "Эта олимпиада была очень давно", en: "These Games were a very long time ago" }, hint: "a-lim-pi-A-da — five syllables, stress on A, and the first о reduces to a. FEMININE (-а). ⚠️ ALSO a school subject competition: школьная олимпиада по математике is a maths contest, and every Russian pupil has sat one. ⚠️ The events an Olympiad is divided into are its дисциплины — the word for a sporting discipline belongs to u110 and has no card in this unit." },
        { id: "ru-u136l1-pervenstvo", type: "vocab", front: "первенство", reading: "pervenstvo", meaning: "a championship", accept: ["the contest that decides who is best", "a title competition", "the competition for first place"], example: { jp: "Первенство страны идёт всю зиму, и играют тридцать команд.", en: "The national championship runs all winter, and thirty teams play." }, drill: { jp: "Это первенство очень важное", en: "This championship is very important" }, hint: "pir-VEN-stva — stress on VEN, the е reduces to i and the final о to a. NEUTER (-о). From `первый` (unit 21), first — but \"first\" does not hand you \"championship\". ⚠️ THIS CARD EXISTS BECAUSE `сборная`, the national team, CANNOT be one: it is a substantivised adjective, and unit 1 §5 bars those." },
        { id: "ru-u136l1-liga", type: "vocab", front: "лига", reading: "liga", meaning: "a league", accept: ["the set of clubs that play each other", "a division of teams in a competition", "all the clubs of one level together"], example: { jp: "В этой лиге шестнадцать команд, и каждая играет с каждой.", en: "There are sixteen teams in this league, and each plays each." }, drill: { jp: "Эта лига очень большая", en: "This league is very large" }, hint: "LI-ga — stress on the first syllable. FEMININE (-а). ⚠️ Also used of alliances outside sport, historically: Лига Наций, the League of Nations." },
        { id: "ru-u136l1-final", type: "vocab", front: "финал", reading: "final", meaning: "the last match of a competition", accept: ["the deciding game", "the match that decides the winner", "the closing round"], example: { jp: "Финал смотрела вся страна, и улицы были совсем пустые.", en: "The whole country watched the deciding match, and the streets were completely empty." }, drill: { jp: "Этот финал был очень важный", en: "This deciding match was very important" }, hint: "fi-NAL — stress on the last syllable. MASCULINE. ⚠️ Glossed the long way round on purpose: the word transliterates to the English one, and unit 1 §9 calls a prompt you can read the answer off a free pass rather than a card. Also the ending of a book or a piece of music." },
        { id: "ru-u136l1-polufinal", type: "vocab", front: "полуфинал", reading: "polufinal", meaning: "a semi-final", accept: ["the round before the last one", "the match that decides who plays for the title", "the next-to-last round"], example: { jp: "В полуфинале они играли четыре часа и были очень усталые.", en: "In the semi-final they played four hours and were very tired." }, drill: { jp: "Этот полуфинал был очень трудный", en: "This semi-final was very hard" }, hint: "pa-lu-fi-NAL — four syllables, stress on the last, and the first о reduces to a. MASCULINE. ⚠️ A PREFIXED derivation of `финал`, which unit 31 §3 allows — the same shape as `полуостров` at u90l2. полу- means half and is alive everywhere: полчаса, полгода." },
        { id: "ru-u136l1-zherebyovka", type: "vocab", front: "жеребьёвка", reading: "zherebyovka", meaning: "the draw for a tournament", accept: ["deciding by lot who plays whom", "the drawing that sets the pairings", "the ceremony that decides the order of matches"], example: { jp: "Жеребьёвка была в среду, и всем стало ясно, кто с кем играет.", en: "The draw was on Wednesday, and it became clear to everyone who plays whom." }, drill: { jp: "Эта жеребьёвка была очень важная", en: "This draw was very important" }, hint: "zhi-ri-BYOV-ka — four syllables, stress on BYOV, and both е before it reduce to i. FEMININE (-а). Built on the same root as `жребий` at u134l4. ⚠️ unit 1 §7 requires the ё; it is the sporting, organised version of drawing lots, where жребий is the lot itself." },
      ],
    },
    {
      id: "ru-u136l2",
      unit: 136,
      lesson: 2,
      title: "The event and the course",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how an event is actually run — a heat, the distance, a relay, a half of a match, the line it ends at and the selection beforehand.",
      items: [
        { id: "ru-u136l2-zabeg", type: "vocab", front: "забег", reading: "zabeg", meaning: "a heat of a race", accept: ["one running of a race among several", "a single race in a series", "one group's run in a competition"], example: { jp: "В первом забеге он был третий, но во втором стал первым.", en: "In the first heat he was third, but in the second he came first." }, drill: { jp: "Этот забег был очень быстрый", en: "This heat was very fast" }, hint: "za-BEG — stress on the last syllable, and the г is said as a k. MASCULINE. From `бегать` (unit 27) with за-, a PREFIXED derivation that unit 31 §3 allows. ⚠️ Of RUNNING only; the swimming equivalent is заплыв, built the same way." },
        { id: "ru-u136l2-distantsiya", type: "vocab", front: "дистанция", reading: "distantsiya", meaning: "a race distance", accept: ["the length that has to be covered", "how far a race goes", "the set length of a course"], example: { jp: "Дистанция была пять километров, и бежать её было очень трудно.", en: "The distance was five kilometres, and running it was very hard." }, drill: { jp: "Эта дистанция очень длинная", en: "This distance is very long" }, hint: "dis-TAN-tsi-ya — stress on TAN. FEMININE (-я). ⚠️ ALSO used of people and it is very common: «держать дистанцию», to keep one's distance — of a relationship, not a race." },
        { id: "ru-u136l2-estafeta", type: "vocab", front: "эстафета", reading: "estafeta", meaning: "a relay race", accept: ["a race where each runs part of it", "a team race run in turns", "a race handed on from one to the next"], example: { jp: "В эстафете бегут четыре человека, и каждый свою часть.", en: "In a relay four people run, and each runs his own part." }, drill: { jp: "Эта эстафета была очень быстрая", en: "This relay was very fast" }, hint: "es-ta-FE-ta — stress on FE. FEMININE (-а). An Italian loan through French. ⚠️ Used of anything handed on: «принять эстафету», to take up the baton, said of work, a tradition, a campaign." },
        { id: "ru-u136l2-taym", type: "vocab", front: "тайм", reading: "taym", meaning: "a half of a match", accept: ["one of the two periods of play", "half the playing time of a game", "one period a match is divided into"], example: { jp: "В первом тайме гола не было, а во втором было три.", en: "In the first half there was no goal, and in the second there were three." }, drill: { jp: "Этот тайм был очень быстрый", en: "This half was very fast" }, hint: "TAYM — one syllable. MASCULINE. An English loan. ⚠️ A FALSE FRIEND: тайм does NOT mean time in general — that is `время` from unit 11. It means only a playing period, and a Russian will not understand «нет тайма» for \"no time\"." },
        { id: "ru-u136l2-finish", type: "vocab", front: "финиш", reading: "finish", meaning: "the line where a race ends", accept: ["the point a race is run to", "the end of the course in a race", "the mark a runner crosses last"], example: { jp: "Финиш был совсем близко, однако трибуны этого ещё не знали.", en: "The end of the course was very close, yet the stands did not know it yet." }, drill: { jp: "Финиш был уже совсем близко", en: "The end of the course was already very close" }, hint: "FI-nish — stress on the first syllable. MASCULINE. ⚠️ Glossed the long way round on purpose: its reading IS the English word, so the obvious gloss would let a learner read the answer off the prompt — unit 1 §9. ⚠️ Distinguish it from `финал` (l1), which is the last MATCH of a tournament: a финиш is the line at the end of a course, and the verb is финишировать. Russian also says «на финише» of the closing stage of anything — на финише года." },
        { id: "ru-u136l2-otbor", type: "vocab", front: "отбор", reading: "otbor", meaning: "a qualifying selection", accept: ["choosing who gets to take part", "the picking of competitors beforehand", "the sorting out of who goes through"], example: { jp: "Отбор был очень строгий, и из ста человек взяли только десять.", en: "The selection was very strict, and out of a hundred people only ten were taken." }, drill: { jp: "Этот отбор был очень строгий", en: "This selection was very strict" }, hint: "at-BOR — stress on the last syllable, and the о reduces to a. MASCULINE. ⚠️ Also the biology term: естественный отбор, natural selection, which is how most learners first meet the word." },
      ],
    },
    {
      id: "ru-u136l3",
      unit: 136,
      lesson: 3,
      title: "The arena and the crowd",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe watching a match — a stand of seats, a supporter, the winners' podium, the official who enforces the rules, a spot kick and the goalkeeper.",
      items: [
        { id: "ru-u136l3-tribuna", type: "vocab", front: "трибуна", reading: "tribuna", meaning: "a stand of seats", accept: ["the banked seating round a pitch", "where the crowd sits at a stadium", "the raised rows of seats at a ground"], example: { jp: "Трибуна была полная, и люди стояли даже в дверях.", en: "The stand was full, and people were standing even in the doorways." }, drill: { jp: "Эта трибуна очень большая", en: "This stand is very large" }, hint: "tri-BU-na — stress on BU. FEMININE (-а). ⚠️ Glossed the long way round on purpose — unit 1 §9's free pass. A SECOND, political sense you will meet constantly: a трибуна is the platform a speaker stands on, and «с трибуны» means from the podium." },
        { id: "ru-u136l3-bolelshchik", type: "vocab", front: "болельщик", reading: "bolelshchik", meaning: "a sports supporter", accept: ["someone who follows a team", "a person who roots for a club", "a follower of a sporting side"], example: { jp: "Болельщик этой команды ходит на каждую игру уже тридцать лет.", en: "This team's supporter has been going to every game for thirty years." }, drill: { jp: "Этот болельщик очень громкий", en: "This supporter is very loud" }, hint: "ba-LEL-shchik — stress on LEL, the first о reduces to a, and the long soft щ is from unit 3. MASCULINE. ⚠️ From `болеть` (unit 20), to be ill — because «болеть за кого-то» is a SEPARATE sense of the same verb, to suffer on someone's behalf. Nothing in \"to be ill\" produces \"a supporter\", which is why the word is carded." },
        { id: "ru-u136l3-pedestal", type: "vocab", front: "пьедестал", reading: "pedestal", meaning: "the winners' podium", accept: ["the three-step block the medallists stand on", "where the first three stand to be given medals", "the raised block for the top three"], example: { jp: "На пьедестале стояли три человека, и все смотрели только на первого.", en: "Three people stood on the podium, and everyone looked only at the first." }, drill: { jp: "Этот пьедестал очень высокий", en: "This podium is very high" }, hint: "pye-dis-TAL — stress on the last syllable, and the ь after п keeps the y-glide: p-ye, not pe. MASCULINE. ⚠️ Glossed the long way round — unit 1 §9's free pass. Alive as a metaphor: «сбросить с пьедестала», to knock someone off their pedestal." },
        { id: "ru-u136l3-referi", type: "vocab", front: "рефери", reading: "referi", meaning: "the official who enforces the rules", accept: ["the man who controls a match", "the official with the whistle", "whoever decides what is allowed in a game"], example: { jp: "Рефери был очень строгий, и игра шла совсем спокойно.", en: "The official was very strict, and the game went quite calmly." }, drill: { jp: "Этот рефери очень строгий", en: "This official is very strict" }, hint: "RE-fe-ri — stress on the FIRST syllable. MASCULINE by meaning, and ⚠️ IT NEVER CHANGES: этот рефери, у этого рефери — an indeclinable loan like `крупье` at u134l3. ⚠️ Russian also says `судья` for the same job, but this course cannot card that one: `суд` is taught at unit 51 and the courtroom belongs to another unit." },
        { id: "ru-u136l3-penalti", type: "vocab", front: "пенальти", reading: "penalti", meaning: "a spot kick", accept: ["the free shot given for a foul in the area", "the kick taken from the mark in front of goal", "the shot awarded against the defending side"], example: { jp: "Пенальти было в последнюю минуту, и это решило игру.", en: "The spot kick came in the last minute, and it decided the game." }, drill: { jp: "Это пенальти было очень важное", en: "This spot kick was very important" }, hint: "pi-NAL-ti — stress on NAL, and the е reduces to i. NEUTER, and ⚠️ IT NEVER CHANGES: это пенальти, два пенальти — an indeclinable loan like `рефери` above. ⚠️ Glossed the long way round — unit 1 §9. The ordinary word for a punishment is `наказание`, from unit 51." },
        { id: "ru-u136l3-vratar", type: "vocab", front: "вратарь", reading: "vratar", meaning: "a goalkeeper", accept: ["the player who defends the goal", "the one who stops the ball going in", "the player who stands in the goalmouth"], example: { jp: "Вратарь взял мяч рукой, и гола не было.", en: "The goalkeeper took the ball with his hand, and there was no goal." }, drill: { jp: "Этот вратарь очень высокий", en: "This goalkeeper is very tall" }, hint: "vra-TAR — stress on the last syllable. MASCULINE despite the -ь, so unit 1 §3 says to name it. ⚠️ Built on the old врат- form of `ворота`, gates, from unit 60 — the one who guards the gate. Its oblique forms move the stress: вратарЯ." },
      ],
    },
    {
      id: "ru-u136l4",
      unit: 136,
      lesson: 4,
      title: "Training, injury and the ban",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what happens around the competing — a warm-up, an exercise machine, a weights bar, an injury, banned drugs and a ban from competing.",
      items: [
        { id: "ru-u136l4-razminka", type: "vocab", front: "разминка", reading: "razminka", meaning: "a warm-up before competing", accept: ["light exercise before an effort", "loosening up before competing", "the easy work done before a race"], example: { jp: "Разминка идёт двадцать минут, и без неё начинать нельзя.", en: "The warm-up takes twenty minutes, and you must not start without it." }, drill: { jp: "Эта разминка очень короткая", en: "This warm-up is very short" }, hint: "raz-MIN-ka — stress on MIN. FEMININE (-а). From мять, to knead, with раз-. ⚠️ Used of the mind too: «разминка для ума», a warm-up for the brain, which is what a Russian calls an easy first puzzle." },
        { id: "ru-u136l4-trenazhyor", type: "vocab", front: "тренажёр", reading: "trenazhyor", meaning: "an exercise machine", accept: ["a machine built for training on", "gym apparatus with weights and cables", "a device you work out on"], example: { jp: "В этом зале десять тренажёров, и утром все они заняты.", en: "There are ten exercise machines in this hall, and in the morning they are all busy." }, drill: { jp: "Этот тренажёр совсем новый", en: "This exercise machine is quite new" }, hint: "tri-na-ZHOR — stress on the last syllable, the е reduces to i, and жё is said zho: ж is always hard. MASCULINE. ⚠️ unit 1 §7 requires the ё, and it DROPS to е when the word inflects: тренажЕра. A MACHINE, not a person — the person is `тренер`, from unit 84. A gym is a тренажёрный зал." },
        { id: "ru-u136l4-shtanga", type: "vocab", front: "штанга", reading: "shtanga", meaning: "a weightlifting bar", accept: ["the long bar with discs on each end", "the bar a weightlifter raises", "a barbell"], example: { jp: "Штанга была такая тяжёлая, что он поднял её только один раз.", en: "The bar was so heavy that he lifted it only once." }, drill: { jp: "Эта штанга очень тяжёлая", en: "This bar is very heavy" }, hint: "SHTAN-ga — stress on the first syllable. FEMININE (-а). A German loan (Stange). ⚠️ A SECOND sense every football commentary uses: the GOALPOST is also a штанга — «мяч попал в штангу», the ball hit the post." },
        { id: "ru-u136l4-travma", type: "vocab", front: "травма", reading: "travma", meaning: "an injury", accept: ["damage to the body from an accident", "physical harm that stops you playing", "a hurt that needs treatment"], example: { jp: "После травмы он не играл почти год.", en: "After the injury he did not play for almost a year." }, drill: { jp: "Эта травма очень тяжёлая", en: "This injury is very serious" }, hint: "TRAV-ma — stress on the first syllable. FEMININE (-а). ⚠️ Covers the MIND as well, exactly as in English: психологическая травма, and «травма детства», a childhood trauma. The hospital department is травмпункт." },
        { id: "ru-u136l4-doping", type: "vocab", front: "допинг", reading: "doping", meaning: "banned performance drugs", accept: ["drugs taken to win", "forbidden substances in sport", "illegal boosting of a body's performance"], example: { jp: "Из-за допинга команду не взяли на олимпиаду.", en: "Because of doping the team was not taken to the Games." }, drill: { jp: "Этот допинг был очень опасный", en: "These banned drugs were very dangerous" }, hint: "DO-ping — stress on the first syllable. MASCULINE. An English loan. ⚠️ Glossed the long way round on purpose: the word transliterates to the English one, and unit 1 §9 calls that a free pass. Russian uses it as a MASS noun, so «допинг» covers one substance or a whole programme." },
        { id: "ru-u136l4-diskvalifikatsiya", type: "vocab", front: "дисквалификация", reading: "diskvalifikatsiya", meaning: "a ban from competing", accept: ["being shut out of a competition as a punishment", "losing the right to take part", "being barred from sport for breaking a rule"], example: { jp: "Дисквалификация была на два года, и он потерял всё.", en: "The ban was for two years, and he lost everything." }, drill: { jp: "Эта дисквалификация была очень долгая", en: "This ban was very long" }, hint: "dis-kva-li-fi-KA-tsi-ya — seven syllables, stress on KA. FEMININE (-я). ⚠️ A PREFIXED derivation of `квалификация` (unit 73), which unit 31 §3 allows — and nothing in \"a qualification held\" produces \"a ban from competing\". Used of a referee's red card as well as of a doping case." },
      ],
    },
  ],
};
