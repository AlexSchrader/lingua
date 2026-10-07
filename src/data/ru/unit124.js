// RU Unit 124 — Космос и Вселенная ("Space and the universe") — B2
// ─────────────────────────────────────────────────────────────────────────────
// FIRST UNIT OF B2 BLOCK 3 (u124–u136). Everything in ru/unit1.js §1–§10 and
// §A–§D binds, and so do ru/unit31.js §1–§7, ru/unit51.js §1–§5 and
// ru/unit87.js §1–§6. This header adds only what B2 block 3 found; §1–§5 below
// are cited by u125–u136.
//
// ⚠️ ALL THIRTEEN OF THIS BLOCK'S SLOT TITLES WERE `Vocabulary N (B2)` — no
// subject named, the same problem ru/unit51.js §1 describes for A2 block 3 and
// ru/unit87.js describes for B1 block 3. The themes were ALLOCATED CENTRALLY
// against a probe of the live 2,328-card corpus, so that three parallel blocks
// could not invent the same theme. `src/data/lint.js` hard-errors on a scaffold
// working title once a unit is authored, so retitling in Russian was
// compulsory, not a choice.
//
// THE MEASURED HOLE FOR THIS UNIT. `планета` (u54l4) is the ONLY space word in
// 2,328 cards; `звезда` · `луна` · `небо` (u26) and `солнце` (u6) are the A1
// sky, and all four are BARRED as fronts. So the course could say "a star" and
// could not say a galaxy, an orbit, a rocket, an eclipse or an astronomer.
// Fourteen of the fifteen allocated fronts were free; the fifteenth is §1.
//
// ⚠️ THE PROBE EVERY HEADER IN THIS BLOCK CITES IS COMMITTED, so the citation
// still resolves once this worktree is gone:
//     node scripts/selfcheck-ru-b2-block3.mjs --probe <word> ...   front + reading + stem
//     node scripts/selfcheck-ru-b2-block3.mjs 124 136             the 7 checks, whole range
// A header naming a path under `scripts/tmp/` names nothing after the tree is
// pruned, which is why this one is in the repo.
// ⚠️ AND IT HAD TO EXIST: `scripts/qa/reading-taken.mjs` IMPORTS `HI_UNITS` AND IS
// HARDCODED TO HINDI, so it cannot check Russian's reading invariant at all.
// Measured 2026-10-06. The gate still runs it; its clean output for ru is NOT
// EVIDENCE, and check 2 of the committed script is what actually measures it.
//
// ═════════════════════════════════════════════════════════════════════════════
// §1 — ⚠️ `вселенная` IS BARRED AND IT IS IN THIS UNIT'S OWN TITLE.
// ═════════════════════════════════════════════════════════════════════════════
// It is the substantivised feminine adjective of `вселенный`, so unit1.js §5's
// last rule and unit51.js §2(b) forbid it as a front — the rule that killed
// `лёгкое` at A2 and `права` · `прошлое` · `мастерская` · `пожарный` at B1
// (unit87.js §4). It probes FREE as a string, which is exactly why the rule has
// to be applied by hand.
// ⚠️ A TITLE IS NOT A CARD. u92 «История и прошлое» teaches neither `прошлое`
// nor `права`; this unit is titled «Космос и Вселенная» and teaches `космос`,
// not `вселенная`. The universe is named in l1's canDo and in `галактика`'s
// hint instead.
// THE SAME RULE COST THIS BLOCK FIVE MORE CANDIDATES, named so nobody
// re-litigates them: `вселенная` (here) · `подозреваемый` (u131, a
// substantivised participle) · `присяжный` (u131) · `зодчий` (u126) ·
// `прихожая` (u132). All five probe FREE as strings.
//
// §2 — `невесомость` IS BARRED TWICE OVER, and it is the word a space unit
//   wants most after `гравитация`. It is не+X, which unit31.js §3 bars outright
//   (the rule that killed `непогода` at B1, unit87.js §5), AND it is the -ость
//   shape that got `слабость` · `усталость` · `опасность` · `древность`
//   refused. `гравитация` carries the field and its hint names weightlessness
//   in English rather than carding it.
//
// §3 — `туманность` ("a nebula") IS BARRED: `туман` IS TAUGHT (u54l4, "fog"), and
//   -ость on a taught noun is the one shape §D's test refuses every time.
//   Likewise `астрономия` was refused against `астроном`, which is carded in l4
//   of this very unit — unit51.js §3 calls a base and its derivative in the
//   SAME unit "the worst version of the fault". And `светило` ("a heavenly
//   body") was refused against `свет` (u15l4).
//
// §4 — `старт` WAS REFUSED FOR A GLOSS COLLISION WITH THIS UNIT'S OWN `запуск`,
//   not for a rule. Both land in "launch"/"start" territory once
//   `normalizeMeaning` is done with them and l3 needs only one; `запуск` is the
//   one Russian actually uses of a rocket.
//
// §5 — ⚠️ THE SEEDS THIS BLOCK WAS GIVEN WERE 15–22 WORDS PER UNIT AND A UNIT
//   IS 24 CARDS, so every unit here extends its own theme. Each unit's header
//   lists what it ADDED beyond the seed list and what it DEFERRED, because the
//   next seat's first question is "did you look at X?".
//   ADDED HERE: астероид · гравитация · вакуум · излучение · обсерватория ·
//   стыковка · космодром · виток · спектр · зонд.
//   DEFERRED: невесомость (§2) · туманность (§3) · астрономия (§3) · светило
//   (§3) · старт (§4) · полнолуние · небосвод · метеор.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT124 = {
  id: "ru-u124",
  lang: "ru",
  title: "Космос и Вселенная",
  order: 124,
  stage: "b2",
  lessons: [
    {
      id: "ru-u124l1",
      unit: 124,
      lesson: 1,
      title: "What is out there",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what the universe is made of beyond the stars you already know — space itself, a galaxy, a constellation, a comet, an asteroid and a meteorite.",
      items: [
        { id: "ru-u124l1-kosmos", type: "vocab", front: "космос", reading: "kosmos", meaning: "outer space", accept: ["space beyond the sky", "the void beyond the air", "the region beyond the earth"], example: { jp: "В космосе нет воздуха, поэтому человек не может там дышать без машины.", en: "There is no air in space, so a person cannot breathe there without a machine." }, drill: { jp: "Космос очень большой и очень тихий", en: "Space is very large and very quiet" }, hint: "KOS-mas — stress on the first syllable, and the second о reduces to a. MASCULINE. ⚠️ Russian keeps `космос` for the place and never uses it for room on a table: that is `место` from unit 15." },
        { id: "ru-u124l1-galaktika", type: "vocab", front: "галактика", reading: "galaktika", meaning: "a galaxy", accept: ["a great island of stars", "a huge system of stars", "one of the star systems of space"], example: { jp: "Наша галактика такая большая, что свет идёт через неё сто тысяч лет.", en: "Our galaxy is so large that light takes a hundred thousand years to cross it." }, drill: { jp: "Эта галактика очень далеко", en: "This galaxy is very far away" }, hint: "ga-LAK-ti-ka — stress on LAK. FEMININE (-а). ⚠️ The whole of everything is `вселенная`, which this course does NOT card: it is the substantivised adjective of вселенный, and unit 1 §5 bars those. The word stands in this unit's title and nowhere else." },
        { id: "ru-u124l1-sozvezdie", type: "vocab", front: "созвездие", reading: "sozvezdie", meaning: "a constellation", accept: ["a named group of stars", "a figure drawn between stars", "a pattern of stars in the sky"], example: { jp: "Это созвездие видно только зимой, и люди знали его уже тысячу лет назад.", en: "This constellation is visible only in winter, and people knew it a thousand years ago already." }, drill: { jp: "Это созвездие очень красивое", en: "This constellation is very beautiful" }, hint: "sa-ZVYEZ-di-ye — stress on ZVYEZ, and the first о reduces to a. NEUTER (-ие). Built on `звезда` from unit 26 with со-, together: stars taken together." },
        { id: "ru-u124l1-kometa", type: "vocab", front: "комета", reading: "kometa", meaning: "a comet", accept: ["a star with a tail", "an icy body with a bright tail", "a body that comes back to the sun"], example: { jp: "Эту комету можно видеть раз в семьдесят лет, и в прошлый раз её видели все.", en: "This comet can be seen once every seventy years, and last time everyone saw it." }, drill: { jp: "Комета была видна целую неделю", en: "The comet was visible for a whole week" }, hint: "ka-ME-ta — stress on ME, and the first о reduces to a. FEMININE (-а). ⚠️ Its tail is `хвост`, which unit 128 teaches of an animal — Russian uses the one word for both." },
        { id: "ru-u124l1-asteroid", type: "vocab", front: "астероид", reading: "asteroid", meaning: "a small rocky body going around the sun", accept: ["a minor planet", "a rock in space", "a small body between the planets"], example: { jp: "Между планетами летает много камней, и самый большой из них больше любого города.", en: "Many rocks fly between the planets, and the largest of them is bigger than any city." }, drill: { jp: "Этот астероид летит очень быстро", en: "This asteroid is flying very fast" }, hint: "as-te-ra-ID — stress on the LAST syllable, which is where Russian puts it and English does not. MASCULINE. ⚠️ Glossed the long way round on purpose: the word transliterates to the English one, and unit 1 §9 calls a prompt you can read the answer off a free pass rather than a card." },
        { id: "ru-u124l1-meteorit", type: "vocab", front: "метеорит", reading: "meteorit", meaning: "a stone fallen from space", accept: ["a rock that reached the ground from space", "a fallen piece of space rock", "a sky stone found on the ground"], example: { jp: "Этот метеорит нашли в поле очень давно, и теперь он стоит в музее.", en: "This meteorite was found in a field a very long time ago, and now it stands in a museum." }, drill: { jp: "Этот метеорит очень тяжёлый", en: "This meteorite is very heavy" }, hint: "mi-ti-a-RIT — stress on the last syllable; both е before it reduce to i. MASCULINE. ⚠️ The -ит ending marks the stone that LANDED; the streak in the sky is метеор, which this course does not card." },
      ],
    },
    {
      id: "ru-u124l2",
      unit: 124,
      lesson: 2,
      title: "Orbits and forces",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a body moves and what holds it there — an orbit, a satellite, one circuit, gravity, a vacuum and radiation.",
      items: [
        { id: "ru-u124l2-orbita", type: "vocab", front: "орбита", reading: "orbita", meaning: "an orbit", accept: ["the path of a body around another", "the track a body follows in space", "the circle a satellite travels"], example: { jp: "Земля идёт по своей орбите вокруг солнца целый год.", en: "The earth travels along its orbit around the sun for a whole year." }, drill: { jp: "Эта орбита очень высокая", en: "This orbit is very high" }, hint: "ar-BI-ta — stress on BI, and the first о reduces to a. FEMININE (-а). ⚠️ Alive outside space too: «на орбите власти», in the orbit of power, with власть from unit 51." },
        { id: "ru-u124l2-sputnik", type: "vocab", front: "спутник", reading: "sputnik", meaning: "a satellite", accept: ["a body that goes around a planet", "a machine put into orbit", "a companion in travel"], example: { jp: "Первый спутник весил меньше, чем человек, и был в небе три месяца.", en: "The first satellite weighed less than a person and was in the sky for three months." }, drill: { jp: "Этот спутник уже очень старый", en: "This satellite is already very old" }, hint: "SPUT-nik — stress on the first syllable. MASCULINE. ⚠️ Built on `путь` from unit 30 with с-: the one who travels WITH you. The everyday sense is still a travelling companion, and the moon is «спутник Земли»." },
        { id: "ru-u124l2-vitok", type: "vocab", front: "виток", reading: "vitok", meaning: "one circuit around a body", accept: ["one time around", "a single loop of an orbit", "one turn of a spiral"], example: { jp: "Один виток вокруг земли занимает меньше двух часов.", en: "One circuit around the earth takes less than two hours." }, drill: { jp: "Этот виток был самый трудный", en: "This circuit was the hardest one" }, hint: "vi-TOK — stress on the last syllable. MASCULINE. ⚠️ The о DROPS in every other form: виткА, виткИ — the same class as `отец` from unit 10. `орбита` is the whole path; a виток is ONE lap of it." },
        { id: "ru-u124l2-gravitatsiya", type: "vocab", front: "гравитация", reading: "gravitatsiya", meaning: "gravity", accept: ["the force that pulls bodies together", "the pull of a large body", "the force that keeps us on the ground"], example: { jp: "Гравитация держит луну рядом с землёй уже очень много лет.", en: "Gravity has held the moon beside the earth for a great many years." }, drill: { jp: "Гравитация здесь очень слабая", en: "Gravity is very weak here" }, hint: "gra-vi-TA-tsi-ya — stress on TA. FEMININE (-я). ⚠️ The state of having none is невесомость, which this course does NOT card: не+X is barred (unit 31 §3) and -ость on an untaught adjective is the shape that killed `слабость` at A2." },
        { id: "ru-u124l2-vakuum", type: "vocab", front: "вакуум", reading: "vakuum", meaning: "a vacuum", accept: ["a space with nothing in it", "emptiness with no air", "a region emptied of matter"], example: { jp: "В вакууме звук не идёт, потому что ему нужен воздух.", en: "Sound does not travel in a vacuum, because it needs air." }, drill: { jp: "Вакуум был совсем полный", en: "The vacuum was quite complete" }, hint: "VA-ku-um — stress on the FIRST syllable, and both у are said separately: va-ku-um, three syllables. MASCULINE. ⚠️ Russian writes two у and says two; do not read it as one long vowel." },
        { id: "ru-u124l2-izluchenie", type: "vocab", front: "излучение", reading: "izluchenie", meaning: "radiation", accept: ["energy sent out by a body", "rays given off by something", "what a hot body sends out"], example: { jp: "Излучение солнца очень сильное, и в космосе оно опасно для человека.", en: "The radiation of the sun is very strong, and in space it is dangerous to a person." }, drill: { jp: "Излучение было очень сильное", en: "The radiation was very strong" }, hint: "iz-lu-CHE-ni-ye — stress on CHE. NEUTER (-ие). From луч, a ray, which this course does not card, with из-, out of: what a body sends OUT." },
      ],
    },
    {
      id: "ru-u124l3",
      unit: 124,
      lesson: 3,
      title: "Getting a person up there",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a crewed flight — a rocket, a launch, a cosmonaut, a spacesuit, a docking and the place it all starts from.",
      items: [
        { id: "ru-u124l3-raketa", type: "vocab", front: "ракета", reading: "raketa", meaning: "a rocket", accept: ["a craft that burns fuel to rise", "a vehicle that flies into space", "a long craft that lifts straight up"], example: { jp: "Эта ракета может поднять в космос пять человек и много воды.", en: "This rocket can lift five people and a lot of water into space." }, drill: { jp: "Эта ракета очень высокая", en: "This rocket is very tall" }, hint: "ra-KE-ta — stress on KE. FEMININE (-а). ⚠️ The same word is the weapon, and Russian does not change it for that sense — unit 129 teaches the military field and leaves this card to carry both." },
        { id: "ru-u124l3-zapusk", type: "vocab", front: "запуск", reading: "zapusk", meaning: "a launch", accept: ["the sending up of a craft", "the moment a rocket leaves the ground", "the setting going of something"], example: { jp: "Запуск был утром, и его видел весь город.", en: "The launch was in the morning, and the whole city saw it." }, drill: { jp: "Запуск был очень красивый", en: "The launch was very beautiful" }, hint: "ZA-pusk — stress on the first syllable. MASCULINE. ⚠️ Used of anything set going, not only a rocket: запуск завода, the starting-up of a plant, with завод from unit 87." },
        { id: "ru-u124l3-kosmonavt", type: "vocab", front: "космонавт", reading: "kosmonavt", meaning: "a cosmonaut", accept: ["a person who flies into space", "a Russian space traveller", "someone trained to fly in space"], example: { jp: "Этот космонавт был в космосе уже три раза и работал там целый год.", en: "This cosmonaut has been in space three times already and worked there for a whole year." }, drill: { jp: "Этот космонавт очень смелый", en: "This cosmonaut is very brave" }, hint: "kas-ma-NAVT — stress on the last syllable, and both о reduce to a. MASCULINE. ⚠️ Russian says космонавт of everyone, its own and other countries' alike; астронавт exists and is used only of Americans." },
        { id: "ru-u124l3-skafandr", type: "vocab", front: "скафандр", reading: "skafandr", meaning: "a spacesuit", accept: ["a sealed suit for space", "the suit worn outside a craft", "a suit that holds its own air"], example: { jp: "Без скафандра человек не может работать в космосе даже одну минуту.", en: "Without a spacesuit a person cannot work in space even for one minute." }, drill: { jp: "Этот скафандр очень тяжёлый", en: "This spacesuit is very heavy" }, hint: "ska-FANDR — stress on FANDR, and the word ends in four consonants said together. MASCULINE. ⚠️ The same word is a diver's suit: Russian has one word for both jobs." },
        { id: "ru-u124l3-stykovka", type: "vocab", front: "стыковка", reading: "stykovka", meaning: "a docking in space", accept: ["the joining of two craft", "the linking of one craft to another", "the coupling of two vehicles"], example: { jp: "Стыковка была очень трудная, потому что оба корабля шли очень быстро.", en: "The docking was very difficult, because both craft were moving very fast." }, drill: { jp: "Стыковка была очень трудная", en: "The docking was very difficult" }, hint: "sty-KOV-ka — stress on KOV, and the ы from unit 5 opens it. FEMININE (-а). ⚠️ Used of trains and flights too: стыковка рейсов, the connection between services — unit 125 cards `рейс`." },
        { id: "ru-u124l3-kosmodrom", type: "vocab", front: "космодром", reading: "kosmodrom", meaning: "a launch site", accept: ["the place rockets go up from", "a space port", "the field a rocket starts from"], example: { jp: "Космодром стоит далеко от города, в степи, где никто не живёт.", en: "The launch site stands far from the city, in the steppe, where nobody lives." }, drill: { jp: "Космодром очень далеко от города", en: "The launch site is very far from the city" }, hint: "kas-ma-DROM — stress on the last syllable, both о reduce to a. MASCULINE. ⚠️ The -дром ending marks a place things run from and is alive in Russian: аэродром, ипподром." },
      ],
    },
    {
      id: "ru-u124l4",
      unit: 124,
      lesson: 4,
      title: "Watching from the ground",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how the sky is studied — a telescope, an observatory, an astronomer, an eclipse, a spectrum and an unmanned craft.",
      items: [
        { id: "ru-u124l4-teleskop", type: "vocab", front: "телескоп", reading: "teleskop", meaning: "a telescope", accept: ["an instrument for seeing far", "a tube for looking at the sky", "a device that makes distant things look near"], example: { jp: "Через этот телескоп видно даже самые слабые звёзды.", en: "Through this telescope even the faintest stars are visible." }, drill: { jp: "Этот телескоп очень большой", en: "This telescope is very large" }, hint: "ti-lis-KOP — stress on the last syllable, and both е reduce to i. MASCULINE. From теле-, far, which also gives телефон and телевизор, both from unit 9." },
        { id: "ru-u124l4-observatoriya", type: "vocab", front: "обсерватория", reading: "observatoriya", meaning: "an observatory", accept: ["a building where the sky is watched", "a station for studying the sky", "the place a telescope stands in"], example: { jp: "Обсерватория стоит высоко в горах, где воздух сухой и небо чистое.", en: "The observatory stands high in the mountains, where the air is dry and the sky is clear." }, drill: { jp: "Обсерватория стоит очень высоко", en: "The observatory stands very high up" }, hint: "ab-sir-va-TO-ri-ya — six syllables, stress on TO; the first о reduces to a and the е to i. FEMININE (-я). ⚠️ Spelled with б and said with p — the devoicing rule unit 6 teaches, working inside a word." },
        { id: "ru-u124l4-astronom", type: "vocab", front: "астроном", reading: "astronom", meaning: "an astronomer", accept: ["a scientist who studies the sky", "someone who studies the stars", "a person who works with a telescope"], example: { jp: "Этот астроном нашёл новую комету и дал ей своё имя.", en: "This astronomer found a new comet and gave it his own name." }, drill: { jp: "Этот астроном очень известный", en: "This astronomer is very well known" }, hint: "as-tra-NOM — stress on the last syllable, and the о reduces to a. MASCULINE. ⚠️ The SUBJECT is астрономия, and this course does not card it: unit 51 §3 calls a base and its own derivative inside one unit the worst version of the lexeme fault." },
        { id: "ru-u124l4-zatmenie", type: "vocab", front: "затмение", reading: "zatmenie", meaning: "an eclipse", accept: ["the hiding of the sun by the moon", "the darkening of the sun or moon", "the moment one body covers another"], example: { jp: "Во время затмения стало совсем темно, и днём было видно звёзды.", en: "During the eclipse it became completely dark, and the stars were visible in the daytime." }, drill: { jp: "Затмение было видно целый час", en: "The eclipse was visible for a whole hour" }, hint: "zat-ME-ni-ye — stress on ME. NEUTER (-ие). Built on тьма, darkness, which this course does not card. ⚠️ Alive as a figure of speech: «затмение нашло», a moment of madness came over someone." },
        { id: "ru-u124l4-spektr", type: "vocab", front: "спектр", reading: "spektr", meaning: "a spectrum", accept: ["the band of colours in light", "light split into its colours", "the full range of something"], example: { jp: "В спектре этой звезды видно, из чего она сделана.", en: "In the spectrum of this star you can see what it is made of." }, drill: { jp: "Спектр был очень чистый", en: "The spectrum was very clean" }, hint: "SPEKTR — one syllable ending in three consonants. MASCULINE. ⚠️ Do not confuse it with `спектакль`, a stage show, from unit 55 — unrelated words that open the same way. Used of a range of anything: спектр мнений, a spectrum of opinions." },
        { id: "ru-u124l4-zond", type: "vocab", front: "зонд", reading: "zond", meaning: "an unmanned craft sent to explore", accept: ["a craft sent out with no crew", "an instrument sent into something to measure it", "a machine sent ahead to take readings"], example: { jp: "Этот зонд летел к планете восемь лет и прислал первые фотографии.", en: "This craft flew to the planet for eight years and sent back the first photographs." }, drill: { jp: "Этот зонд работал двадцать лет", en: "This craft worked for twenty years" }, hint: "ZOND — one syllable, and the д is said as a t. MASCULINE. ⚠️ Also a doctor's instrument and a weather balloon: Russian uses зонд for anything sent INTO somewhere to take a measurement." },
      ],
    },
  ],
};
