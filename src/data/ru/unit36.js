// RU Unit 36 — Глаголы движения ("Verbs of motion") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Conventions: ru/unit1.js §1–§10 and §A–§D, plus ru/unit31.js §1–§7 for the A2
// band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Nature and animals" AND IT WAS SPOKEN FOR TWICE.
// A1's u26 Природа и животные is that unit already (собака · птица · лошадь ·
// корова · медведь · дерево · цветок · лес · река · море · гора · небо), AND
// block 2's u44 is "Nature and science". Rethemed to the motion pairs, with
// nature kept as the carrier — the birds fly, the fish swims, the road goes up
// towards the mountain. unit31.js §6 has the table.
//
// ★ WHY THIS IS A2 AND NOT B1, because it looks like the thing unit1.js §5
//   deferred and it is not. §5 defers "verbs of motion WITH PREFIXES" to B1 —
//   приходить, уезжать, переплывать. This unit teaches the UNPREFIXED
//   DETERMINATE/INDETERMINATE PAIRS, which are a different problem and one a
//   learner meets on day one:
//        идти  (u14) / ходить   walking this way now / walking there regularly
//        ехать (u14) / ездить   this one journey / journeys you make
//        лететь / летать        flying now / flying as a thing you do
//        плыть  / плавать (u27) swimming now / the skill of swimming
//        бежать / бегать  (u27) running now / running as an activity
//        нести  / носить  (u18) carrying now / carrying regularly
//        везти  / возить        carrying by vehicle now / regularly
//   A1 taught ONE HALF of five of those seven pairs and never said there was a
//   pair. That is the hole. Prefixed motion stays deferred and nothing here is
//   prefixed except `переход`, which is a NOUN.
//
// ⚠️ `носить` IS THE MOST IMPORTANT HINT IN THIS UNIT. A1 carded it at u18l4
// glossed "to wear", inside the clothes unit, and a learner therefore has no idea
// it is нести's partner. It is the same verb: носить = to carry regularly, and
// clothes are what you carry on you all day. `нести`'s hint says so outright,
// because nothing else in the course will.
//
// ⚠️ `возить` IS NOT CARDED and that is deliberate, not an oversight. везти's
// partner would make a seventh pair, but 24 cards were full and the pair that
// earns its place is the one whose OTHER half A1 already taught. возить is
// measured free 2026-09-29 and is block 2's if it wants it.
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT, and this unit had more of them than any other
// in the block because it is deliberately parked beside five A1 verbs:
//   `ходить` "to go on foot regularly" vs u14 идти "to go on foot"
//   `ездить` "to travel regularly" vs u14 ехать "to go by vehicle"
//   `плыть` "to be swimming" vs u27 плавать "to swim" AND u35 купаться "to have a
//        swim" — three cards, three distinct normalised glosses
//   `бежать` "to be running" vs u27 бегать "to run"
//   `нести` "to be carrying" vs u18 носить "to wear"
//   `медленно` "slowly" vs u5 быстро "quickly"
//   `расстояние` "a distance" vs u14 далеко "far"
//   `вверх` "upwards" vs u23 наверху "upstairs" · `вниз` "downwards" vs u23 внизу
//        "downstairs" — and BOTH pairs are a real teaching point, not just a
//        collision to dodge: Russian splits movement from position and English
//        does not.
//   `обратно` "back again" vs u23 назад "backwards"
//   `транспорт` "public transport" — NOT "transport", which would normalise onto
//        its own reading "transport" and hand the learner the answer, the §9 free
//        pass. Measured with the real checkProduce, not assumed.
//
// ⚠️ ONE LEXEME CALL (unit1.js §D): `направление` beside u14 `направо`. One root
// -прав-, and -прав- is productive enough that u22 правда and u40 правильный also
// sit on it. Allowed: "to the right" does not hand a learner "a direction", and
// English shows no link at all. AVOIDED on the same test: `высокий` (vs `высота`,
// carded at l3 — one of the two, not both; высокий is measured free and is block
// 2's) · `прогулка` (vs u24 гулять) · `поездка` (vs u14 ехать, which u30 already
// refused) · `путь` (refused by u30 and still refused).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT36 = {
  id: "ru-u36",
  lang: "ru",
  title: "Глаголы движения",
  order: 36,
  stage: "a2",
  lessons: [
    {
      id: "ru-u36l1",
      unit: 36,
      lesson: 1,
      title: "One trip, or the trips you always make",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Choose between the two Russian verbs for one English verb of motion — this journey now, or the journeys you make regularly.",
      items: [
        { id: "ru-u36l1-khodit", type: "vocab", front: "ходить", reading: "khodit", meaning: "to go on foot regularly", accept: ["to go there and back", "to walk regularly", "to attend"], example: { jp: "Мы ходим в театр каждую субботу.", en: "We go to the theatre every Saturday." }, drill: { jp: "Я люблю ходить в парк", en: "I like going to the park" }, hint: "kha-DIT — stress on the last syllable, and the о reduces to a. ★ THE PAIR: идти is walking this way, now, once; ходить is walking there regularly, or there and back. «Я иду в школу» = I am on my way. «Я хожу в школу» = I go to school." },
        { id: "ru-u36l1-ezdit", type: "vocab", front: "ездить", reading: "ezdit", meaning: "to travel regularly", accept: ["to go by vehicle regularly", "to make trips", "to commute"], example: { jp: "Мой отец ездит на работу на машине.", en: "My father travels to work by car." }, drill: { jp: "Я люблю ездить на поезде", en: "I like travelling by train" }, hint: "YEZ-dit — stress on the first syllable. The partner of ехать, exactly as ходить is to идти: ехать is this one journey, ездить is the journeys you make. Note на plus the prepositional for the vehicle — на машине, на поезде." },
        { id: "ru-u36l1-letet", type: "vocab", front: "лететь", reading: "letet", meaning: "to be flying", accept: ["to fly this way", "to be in the air", "to be on a flight"], example: { jp: "Наш самолёт летит уже три часа.", en: "Our plane has been flying for three hours already." }, drill: { jp: "Эта птица хочет лететь домой", en: "This bird wants to fly home" }, hint: "le-TET — stress on the last syllable. Flying in one direction, right now — the идти of the air. Its partner летать comes next." },
        { id: "ru-u36l1-letat", type: "vocab", front: "летать", reading: "letat", meaning: "to fly regularly", accept: ["to fly about", "to go by air", "to be a flier"], example: { jp: "Эти птицы летают над нашим садом.", en: "These birds fly above our garden." }, drill: { jp: "Я не люблю летать", en: "I do not like flying" }, hint: "le-TAT — stress on the last syllable. The ходить of the air: flying as something you do, in no particular direction. «Я не люблю летать» is how you say you dislike flying." },
        { id: "ru-u36l1-plyt", type: "vocab", front: "плыть", reading: "plyt", meaning: "to be swimming", accept: ["to be sailing", "to swim this way", "to be afloat"], example: { jp: "Эта рыба плывёт к берегу.", en: "This fish is swimming towards the shore." }, drill: { jp: "Эта рыба хочет плыть быстро", en: "This fish wants to swim fast" }, hint: "One syllable, PLYT, with the tight ы from unit 5. Swimming in one direction — the идти of the water. плавать (unit 27) is the skill, купаться (unit 35) is swimming for fun, and this is swimming somewhere." },
        { id: "ru-u36l1-bezhat", type: "vocab", front: "бежать", reading: "bezhat", meaning: "to be running", accept: ["to run this way", "to be on the run", "to dash"], example: { jp: "Моя сестра бежит к автобусу.", en: "My sister is running for the bus." }, drill: { jp: "Он должен бежать очень быстро", en: "He has to run very fast" }, hint: "be-ZHAT — stress on the last syllable. Running in one direction, now. Its partner бегать (unit 27) is running as an activity — «я бегаю каждое утро», I run every morning." },
      ],
    },
    {
      id: "ru-u36l2",
      unit: 36,
      lesson: 2,
      title: "Carrying it, and the route it takes",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that you are carrying something on foot or taking it by vehicle, and describe the route and the crossing.",
      items: [
        { id: "ru-u36l2-nesti", type: "vocab", front: "нести", reading: "nesti", meaning: "to be carrying", accept: ["to carry this way", "to be bringing", "to have in your hands"], example: { jp: "Мама несёт сумку из магазина.", en: "Mum is carrying a bag out of the shop." }, drill: { jp: "Он должен нести эту сумку", en: "He has to carry this bag" }, hint: "nes-TI — stress on the last syllable. ★ Its partner is носить, which unit 18 gave you as «to wear» — and it is the SAME verb. носить = to carry regularly, and clothes are exactly what you carry on you all day." },
        { id: "ru-u36l2-vezti", type: "vocab", front: "везти", reading: "vezti", meaning: "to be transporting", accept: ["to be taking by vehicle", "to drive something somewhere", "to be hauling"], example: { jp: "Этот автобус везёт детей в школу.", en: "This bus is taking the children to school." }, drill: { jp: "Он должен везти нас домой", en: "He has to drive us home" }, hint: "vez-TI — stress on the last syllable. Carrying something BY VEHICLE, in one direction. нести is on foot, везти is on wheels, and Russian will not let you blur the two." },
        { id: "ru-u36l2-transport", type: "vocab", front: "транспорт", reading: "transport", meaning: "public transport", accept: ["the transport system", "getting about", "buses and trams"], example: { jp: "В этом городе хороший транспорт.", en: "The public transport in this town is good." }, drill: { jp: "Транспорт в нашем городе плохой", en: "The transport in our town is bad" }, hint: "TRANS-part — stress on the first syllable. Masculine. It means transport as a SYSTEM — the buses, the trams, the metro together. One bus is автобус." },
        { id: "ru-u36l2-marshrut", type: "vocab", front: "маршрут", reading: "marshrut", meaning: "a route", accept: ["a way to go", "an itinerary", "a bus line"], example: { jp: "Этот маршрут идёт мимо вокзала.", en: "This route goes past the station." }, drill: { jp: "Это новый маршрут автобуса", en: "This is the bus's new route" }, hint: "marsh-RUT — stress on the last syllable. Masculine. The route a bus or a walk follows — Russian numbers its bus routes маршрут №5." },
        { id: "ru-u36l2-perekhod", type: "vocab", front: "переход", reading: "perekhod", meaning: "a crossing", accept: ["a pedestrian crossing", "an underpass", "a passage"], example: { jp: "Переход находится около вокзала.", en: "The crossing is located close to the station." }, drill: { jp: "Здесь есть новый переход", en: "There is a new crossing here" }, hint: "pe-re-KHOT — stress on the last syllable, and the final д says t. Masculine. Where you cross the road, and in the metro the passage between two lines. Its root is ходить with пере-, «across»." },
        { id: "ru-u36l2-skorost", type: "vocab", front: "скорость", reading: "skorost", meaning: "speed", accept: ["how fast it goes", "a rate", "pace"], example: { jp: "Скорость этого поезда очень большая.", en: "This train's speed is very high." }, drill: { jp: "Скорость этой машины большая", en: "This car's speed is high" }, hint: "SKO-rast — stress on the first syllable. FEMININE — another -ость noun, and every single one of those is feminine. Its root is скоро, «soon», from unit 7." },
      ],
    },
    {
      id: "ru-u36l3",
      unit: 36,
      lesson: 3,
      title: "How fast and how far",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Ask someone to slow down, and describe a journey by its distance, its direction and the number of steps it takes.",
      items: [
        { id: "ru-u36l3-medlenno", type: "vocab", front: "медленно", reading: "medlenno", meaning: "slowly", accept: ["at a slow pace", "unhurriedly", "slow"], example: { jp: "Этот автобус едет очень медленно.", en: "This bus is going very slowly." }, drill: { jp: "Он говорит очень медленно", en: "He speaks very slowly" }, hint: "MED-len-na — stress on the first syllable. The opposite of быстро from unit 5. «Говорите медленно, пожалуйста» may be the single most useful sentence a learner owns." },
        { id: "ru-u36l3-rasstoyanie", type: "vocab", front: "расстояние", reading: "rasstoyanie", meaning: "a distance", accept: ["the gap between", "how far it is", "range"], example: { jp: "Расстояние до вокзала очень большое.", en: "The distance to the station is very great." }, drill: { jp: "Это большое расстояние для нас", en: "This is a long distance for us" }, hint: "ras-sta-YA-ni-ye — five syllables, stress on YA, and the double сс is held a beat longer. Neuter (-ие). The measured gap between two places, where далеко only says «far»." },
        { id: "ru-u36l3-shag", type: "vocab", front: "шаг", reading: "shag", meaning: "a step", accept: ["a pace", "a stride", "a stage"], example: { jp: "Каждый шаг был очень трудный.", en: "Every step was very hard." }, drill: { jp: "Это первый шаг к работе", en: "This is the first step towards the work" }, hint: "One syllable, SHAG, and the г says k at the end. Masculine. A step you take, and a step in a plan. «Шаг за шагом» — step by step, with за plus the instrumental." },
        { id: "ru-u36l3-dvizhenie", type: "vocab", front: "движение", reading: "dvizhenie", meaning: "movement", accept: ["motion", "traffic", "a movement"], example: { jp: "На этой улице большое движение.", en: "There is a lot of traffic on this street." }, drill: { jp: "Движение здесь очень медленное", en: "The traffic here is very slow" }, hint: "dvi-ZHE-ni-ye — stress on ZHE. Neuter (-ие). Movement in general — and on a street it is exactly what English calls traffic." },
        { id: "ru-u36l3-napravlenie", type: "vocab", front: "направление", reading: "napravlenie", meaning: "a direction", accept: ["which way", "a bearing", "a course"], example: { jp: "Мы идём в другом направлении.", en: "We are going in a different direction." }, drill: { jp: "Какое направление к вокзалу", en: "Which direction is it to the station" }, hint: "na-prav-LE-ni-ye — stress on LE. Neuter (-ие). Which way something goes. Same -прав- root as направо from unit 14, though English shows no trace of the link." },
        { id: "ru-u36l3-vysota", type: "vocab", front: "высота", reading: "vysota", meaning: "a height", accept: ["how high it is", "altitude", "an elevation"], example: { jp: "Высота этой горы очень большая.", en: "The height of this mountain is very great." }, drill: { jp: "Высота этого дома большая", en: "The height of this house is great" }, hint: "vy-sa-TA — stress on the LAST syllable, so both earlier vowels reduce. Feminine (-а). How high something is. The adjective высокий is not taught in this course, so this noun carries the whole idea." },
      ],
    },
    {
      id: "ru-u36l4",
      unit: 36,
      lesson: 4,
      title: "Which way",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say which way something goes — up, down, round in a circle, in a straight line, back again, or on foot.",
      items: [
        { id: "ru-u36l4-vverkh", type: "vocab", front: "вверх", reading: "vverkh", meaning: "upwards", accept: ["up", "in an upward direction", "uphill"], example: { jp: "Эта дорога идёт вверх, к горе.", en: "This road goes upwards, towards the mountain." }, drill: { jp: "Эта лестница идёт вверх", en: "This staircase goes upwards" }, hint: "One syllable, VVERKH — hold the в a beat longer, because there are two of them. ★ MOVEMENT upwards, where наверху from unit 23 is BEING up there. Russian always splits the two and English rarely does." },
        { id: "ru-u36l4-vniz", type: "vocab", front: "вниз", reading: "vniz", meaning: "downwards", accept: ["down", "in a downward direction", "downhill"], example: { jp: "Эта дорога идёт вниз, к реке.", en: "This road goes downwards, towards the river." }, drill: { jp: "Эта лестница идёт вниз", en: "This staircase goes downwards" }, hint: "One syllable, VNIZ. Movement downwards, against внизу from unit 23, which is being down there. вверх / вниз are one pair; наверху / внизу are the other." },
        { id: "ru-u36l4-obratno", type: "vocab", front: "обратно", reading: "obratno", meaning: "back again", accept: ["back the way you came", "in return", "back"], example: { jp: "Мы хотим вернуться обратно домой.", en: "We want to come back home again." }, drill: { jp: "Он идёт обратно к вокзалу", en: "He is going back towards the station" }, hint: "a-BRAT-na — stress on BRAT. Back to where you started. Different from назад (unit 23), which is «backwards» in space or «ago» in time — обратно is about returning." },
        { id: "ru-u36l4-krug", type: "vocab", front: "круг", reading: "krug", meaning: "a circle", accept: ["a ring", "a lap", "a circle of people"], example: { jp: "Дети бегают по кругу в парке.", en: "The children are running round in a circle in the park." }, drill: { jp: "Это очень большой круг", en: "This is a very big circle" }, hint: "One syllable, KRUG, and the г says k at the end. Masculine. A circle, and also a circle of friends. «По кругу» needs по plus the dative from unit 34." },
        { id: "ru-u36l4-liniya", type: "vocab", front: "линия", reading: "liniya", meaning: "a line", accept: ["a metro line", "a straight line", "a row drawn"], example: { jp: "Эта линия метро идёт до центра.", en: "This metro line goes as far as the centre." }, drill: { jp: "Это прямая линия к реке", en: "This is a straight line to the river" }, hint: "LI-ni-ya — stress on the first syllable. Feminine (-ия). A line on paper and a line on the metro. Russian says «первая линия» for the first metro line." },
        { id: "ru-u36l4-peshkom", type: "vocab", front: "пешком", reading: "peshkom", meaning: "on foot", accept: ["walking", "by walking", "afoot"], example: { jp: "Мы идём на вокзал пешком.", en: "We are walking to the station." }, drill: { jp: "Мы ходим в школу пешком", en: "We walk to school" }, hint: "pesh-KOM — stress on the last syllable. On foot, and it never changes its form. It is what you add to идти or ходить to make clear you are not taking the bus." },
      ],
    },
  ],
};
