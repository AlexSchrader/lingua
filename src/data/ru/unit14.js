// RU Unit 14 — Город и места ("Town and places") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Conventions are declared in ru/unit1.js §1–§10 and bind every card here.
//
// ⚠️ SIXTEEN TOWN WORDS WERE ALREADY SPENT, so this unit is the second tier on
// purpose. `город` (u6) · `площадь` (u6) · `дорога` (u4) · `этаж` (u6) · `дом`
// (u1) · `машина` (u6) are the alphabet band's, and u9's internationalism unit
// took `метро` · `банк` · `парк` · `кафе` · `ресторан` · `отель` · `аэропорт` ·
// `университет` · `театр` · `музей`. All are used freely in the sentences here and
// none is re-carded. What is left is the tier a learner actually needs to ASK FOR
// something: the shop, the chemist, the post office, and how to get there.
//
// ⚠️ THREE FRONTS HAVE A FLEETING VOWEL and every drill on them stays nominative:
// `рынок` (рынок → на рынке) and, from u12, the same shape in `угол` and `огонь`.
// unit1.js §5 already forbids an inflected form as a card; here it also shapes the
// drill, because a drill must carry the front VERBATIM.
//
// ⚠️ RUSSIAN HAS FOUR WORDS WHERE ENGLISH HAS "STATION" AND "GO", and this unit
// is where the learner has to start telling them apart. The hints name each pair
// explicitly rather than hoping it is inferred:
//     вокзал      a MAINLINE railway station
//     станция     a metro station (named in hints, deliberately not carded —
//                 it would gloss to "a station" and collide with вокзал)
//     остановка   a bus or tram stop
//     идти        to go ON FOOT   ┐ using the wrong one of these two is the
//     ехать       to go BY VEHICLE┘ beginner error a native notices instantly
// The same split runs through the deixis pair: здесь/там are POSITION, сюда/туда
// are MOTION, and English blurs all four into here and there.
//
// ⚠️ `находиться` ("to be located") was drafted for l4 and CUT: every A1 sentence
// that uses it needs a conjugated находится, and unit1.js §5 plus the drill rule
// both want the infinitive verbatim. `ждать` took the slot instead — higher
// frequency, and it works in an infinitive frame (нужно ждать автобус).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT14 = {
  id: "ru-u14",
  lang: "ru",
  title: "Город и места",
  order: 14,
  stage: "a1",
  lessons: [
    {
      id: "ru-u14l1",
      unit: 14,
      lesson: 1,
      title: "Say what is on your street",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe your own part of town — the street, the shop, the station and the bridge.",
      items: [
        { id: "ru-u14l1-ulitsa", type: "vocab", front: "улица", reading: "ulitsa", meaning: "a street", accept: ["street", "the street", "a high street"], example: { jp: "Наша улица очень старая, и здесь всегда тихо.", en: "Our street is very old, and it is always quiet here." }, drill: { jp: "Улица здесь очень красивая", en: "The street here is very beautiful" }, hint: "U-li-tsa, stress first. Feminine (-а). На улице means OUTDOORS as much as on the street — a Russian says на улице холодно where English says it is cold outside." },
        { id: "ru-u14l1-magazin", type: "vocab", front: "магазин", reading: "magazin", meaning: "a shop", accept: ["store", "the shop", "a store"], example: { jp: "Наш магазин здесь, и он уже открыт.", en: "Our shop is here, and it is already open." }, drill: { jp: "Магазин на нашей улице", en: "The shop is on our street" }, hint: "ma-ga-ZIN, stress at the end, and both unstressed а reduce. Masculine. Nothing to do with a magazine — that is журнал. This is the ordinary word for any shop at all." },
        { id: "ru-u14l1-vokzal", type: "vocab", front: "вокзал", reading: "vokzal", meaning: "a railway station", accept: ["station", "the station", "a train station"], example: { jp: "Вокзал очень далеко, и нужно такси.", en: "The station is very far, and we need a taxi." }, drill: { jp: "Наш вокзал очень старый", en: "Our station is very old" }, hint: "vag-ZAL, stress at the end — the о reduces to a and the к says g in front of the з. Masculine. MAINLINE stations only: a metro stop is станция and a bus stop is остановка, in lesson 3." },
        { id: "ru-u14l1-most", type: "vocab", front: "мост", reading: "most", meaning: "a bridge", accept: ["bridge", "the bridge"], example: { jp: "Мост здесь очень старый, но красивый.", en: "The bridge here is very old, but beautiful." }, drill: { jp: "Мост в центре города", en: "The bridge is in the city centre" }, hint: "MOST, one syllable. Masculine. On the bridge is на мосту, with a stressed -у that only a handful of Russian nouns take — дом, сад and мост are three of them." },
        { id: "ru-u14l1-tsentr", type: "vocab", front: "центр", reading: "tsentr", meaning: "the centre", accept: ["a centre", "downtown", "the city centre"], example: { jp: "В центре всегда очень дорого.", en: "In the centre it is always very expensive." }, drill: { jp: "Центр города очень красивый", en: "The city centre is very beautiful" }, hint: "TSENTR, one syllable with five consonants round a single vowel — say it in one push, not two. Masculine. В центре is how a Russian says in town, the way English says downtown." },
        { id: "ru-u14l1-rayon", type: "vocab", front: "район", reading: "rayon", meaning: "a district", accept: ["a neighbourhood", "the area", "a region"], example: { jp: "Это наш район, и здесь всегда тихо.", en: "This is our district, and it is always quiet here." }, drill: { jp: "Наш район очень старый", en: "Our district is very old" }, hint: "ra-YON, stress at the end — two syllables, and the й closes the first one off. Masculine. It is a city district and an administrative region both; the French rayon is the same word." },
      ],
    },
    {
      id: "ru-u14l2",
      unit: 14,
      lesson: 2,
      title: "Get help somewhere in town",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the four places you go to when something has gone wrong, and say whether they are open.",
      items: [
        { id: "ru-u14l2-apteka", type: "vocab", front: "аптека", reading: "apteka", meaning: "a chemist", accept: ["a pharmacy", "the chemist", "a drugstore"], example: { jp: "Аптека рядом, и она уже открыта.", en: "The chemist is nearby, and it is already open." }, drill: { jp: "Аптека здесь на улице", en: "The chemist is here on the street" }, hint: "ap-TYE-ka, stress on TYE. Feminine (-а). A Russian аптека sells medicine and almost nothing else — no sandwiches, no magazines. Same Greek root as apothecary." },
        { id: "ru-u14l2-bolnitsa", type: "vocab", front: "больница", reading: "bolnitsa", meaning: "a hospital", accept: ["hospital", "the hospital", "an infirmary"], example: { jp: "Больница очень далеко, и нам нужно такси.", en: "The hospital is very far, and we need a taxi." }, drill: { jp: "Больница в нашем районе", en: "The hospital is in our district" }, hint: "bal-NI-tsa, stress on NI, and the о reduces to a. Feminine (-а). Built on боль, pain — a больница is literally the pain-house. The verb болеть, to hurt, comes in unit 20." },
        { id: "ru-u14l2-pochta", type: "vocab", front: "почта", reading: "pochta", meaning: "the post office", accept: ["a post office", "the post", "the mail"], example: { jp: "Почта уже закрыта, и это очень плохо.", en: "The post office is already closed, and that is very bad." }, drill: { jp: "Почта рядом и уже открыта", en: "The post office is nearby and already open" }, hint: "POCH-ta, stress first. Feminine (-а). ONE word for the building, the service and the mail itself: на почте is at the post office, по почте is by post." },
        { id: "ru-u14l2-politsiya", type: "vocab", front: "полиция", reading: "politsiya", meaning: "the police", accept: ["a police force", "the police station"], example: { jp: "Полиция уже здесь, и это хорошо.", en: "The police are here already, and that is good." }, drill: { jp: "Полиция уже на улице", en: "The police are on the street already" }, hint: "pa-LI-tsy-ya, stress on LI — four syllables, and the ци is the hard tsy again. Feminine (-я), and grammatically SINGULAR even though it means many people: полиция работает, never работают." },
        { id: "ru-u14l2-rynok", type: "vocab", front: "рынок", reading: "rynok", meaning: "a market", accept: ["the market", "an outdoor market", "a marketplace"], example: { jp: "Рынок это всегда очень дёшево.", en: "The market is always very cheap." }, drill: { jp: "Рынок в нашем районе", en: "The market is in our district" }, hint: "RY-nak, stress first, with the hard ы. Masculine. The о is fleeting — рынок, but на рынке — exactly like угол in unit 12. A рынок is outdoors and you haggle; a магазин is indoors and you do not." },
        { id: "ru-u14l2-tserkov", type: "vocab", front: "церковь", reading: "tserkov", meaning: "a church", accept: ["church", "the church"], example: { jp: "Церковь очень старая, и она очень красивая.", en: "The church is very old, and it is very beautiful." }, drill: { jp: "Церковь в центре города", en: "The church is in the city centre" }, hint: "TSER-kaf, stress first, and the final в says f. FEMININE (-ь), and unpredictably so, which is exactly why unit1.js §3 puts the gender on every -ь noun. Its endings shift oddly: церковь, церкви, в церкви." },
      ],
    },
    {
      id: "ru-u14l3",
      unit: 14,
      lesson: 3,
      title: "Ask for and give directions",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Send someone left, right or straight on, and say whether it is far.",
      items: [
        { id: "ru-u14l3-nalevo", type: "vocab", front: "налево", reading: "nalevo", meaning: "to the left", accept: ["left", "leftwards", "off to the left"], example: { jp: "Аптека налево, а почта направо.", en: "The chemist is to the left, and the post office to the right." }, drill: { jp: "Здесь нужно идти налево", en: "Here you need to go left" }, hint: "na-LYE-va, stress on LYE, and the final о reduces to a. An adverb of MOTION — turn left. Standing still on the left is слева, which A1 leaves out so the pair cannot blur." },
        { id: "ru-u14l3-napravo", type: "vocab", front: "направо", reading: "napravo", meaning: "to the right", accept: ["right", "rightwards", "off to the right"], example: { jp: "Вокзал направо, и это уже рядом.", en: "The station is to the right, and it is close now." }, drill: { jp: "Потом нужно идти направо", en: "Then you need to go right" }, hint: "na-PRA-va, stress on PRA. The mirror of налево and built the same way: на + право, onto the right. Russian says направо for the turn and справа for the position." },
        { id: "ru-u14l3-pryamo", type: "vocab", front: "прямо", reading: "pryamo", meaning: "straight on", accept: ["straight ahead", "directly", "straight"], example: { jp: "Здесь прямо, а потом налево.", en: "Straight on here, and then left." }, drill: { jp: "Нужно идти прямо и налево", en: "You need to go straight on and then left" }, hint: "PRYA-ma, stress first. It also means frankly — говорить прямо is to speak straight, just as in English. As a direction it is the default: прямо, and then a turn." },
        { id: "ru-u14l3-ostanovka", type: "vocab", front: "остановка", reading: "ostanovka", meaning: "a bus stop", accept: ["a stop", "the stop", "a tram stop"], example: { jp: "Остановка здесь, и автобус уже там.", en: "The stop is here, and the bus is already over there." }, drill: { jp: "Остановка на нашей улице", en: "The stop is on our street" }, hint: "as-ta-NOF-ka, stress on NOF, and the в says f before the к. Feminine (-а). This is the stop for a bus or a tram — a metro station is станция, a mainline one вокзал, and Russian never mixes the three." },
        { id: "ru-u14l3-daleko", type: "vocab", front: "далеко", reading: "daleko", meaning: "far", accept: ["a long way", "far away", "it is far"], example: { jp: "Наш дом далеко, и это очень плохо.", en: "Our house is far away, and that is very bad." }, drill: { jp: "Магазин далеко и это плохо", en: "The shop is far and that is bad" }, hint: "da-li-KO, stress right at the end, so both vowels before it reduce away. An adverb. Its comparative дальше means further, and A1 cards only this one form so the two cannot compete." },
        { id: "ru-u14l3-povorot", type: "vocab", front: "поворот", reading: "povorot", meaning: "a turn", accept: ["a bend", "the turning", "a junction"], example: { jp: "Поворот здесь налево, и потом прямо.", en: "The turn here is to the left, and then straight on." }, drill: { jp: "Поворот направо и потом прямо", en: "A right turn and then straight on" }, hint: "pa-va-ROT, stress at the end, and both unstressed о reduce to a. Masculine. It is the place where the road turns: поворот направо, a right turn. The verb behind it, поворачивать, is A2's." },
      ],
    },
    {
      id: "ru-u14l4",
      unit: 14,
      lesson: 4,
      title: "Say which way you are going, and how",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Send someone this way or that, and say whether you are walking or taking something.",
      items: [
        { id: "ru-u14l4-syuda", type: "vocab", front: "сюда", reading: "syuda", meaning: "towards here", accept: ["over here", "this way", "in this direction"], example: { jp: "Сюда, пожалуйста! Здесь уже открыто.", en: "This way, please! It is open here already." }, drill: { jp: "Сюда пожалуйста здесь открыто", en: "This way please, it is open here" }, hint: "syu-DA, stress at the end. It is the MOTION partner of здесь: здесь is where you already are, сюда is where you are heading. Russian keeps the two strictly apart and English does not." },
        { id: "ru-u14l4-tuda", type: "vocab", front: "туда", reading: "tuda", meaning: "towards there", accept: ["that way", "in that direction", "to that place"], example: { jp: "Мне нужно туда, и это очень далеко.", en: "I need to go there, and it is very far." }, drill: { jp: "Нам нужно туда сегодня", en: "We need to go there today" }, hint: "tu-DA, stress at the end. The motion partner of там, exactly as сюда is of здесь. Туда и обратно — there and back — is how you ask for a return ticket." },
        { id: "ru-u14l4-vnutri", type: "vocab", front: "внутри", reading: "vnutri", meaning: "inside", accept: ["within", "on the inside", "indoors"], example: { jp: "Внутри уже закрыто, и мы здесь.", en: "Inside it is closed already, and we are out here." }, drill: { jp: "Внутри уже всё закрыто", en: "Inside everything is closed already" }, hint: "vnu-TRI, stress at the end, and the вн at the start carries no vowel. It answers WHERE, never where to — внутри is inside as a position. What it is inside of takes the of-ending: внутри дома." },
        { id: "ru-u14l4-idti", type: "vocab", front: "идти", reading: "idti", meaning: "to go on foot", accept: ["to walk", "go on foot", "to be on the way"], example: { jp: "Мне нужно идти домой, уже поздно.", en: "I need to walk home, it is late already." }, drill: { jp: "Мне нужно идти на почту", en: "I need to go to the post office" }, hint: "it-TI, stress at the end, and the д says t in front of the т. Imperfective infinitive. Russian splits going in two — идти on foot, ехать by vehicle — and the wrong one is the error a native spots instantly." },
        { id: "ru-u14l4-ekhat", type: "vocab", front: "ехать", reading: "ekhat", meaning: "to go by vehicle", accept: ["to ride", "to travel", "to drive"], example: { jp: "Нам нужно ехать на автобусе, это далеко.", en: "We need to take the bus, it is far." }, drill: { jp: "Нужно ехать на метро", en: "We need to go by underground" }, hint: "YE-khat, stress first. Imperfective infinitive, and the partner of идти: ехать covers every vehicle — bus, train, car, even a horse. Never идти when a wheel is involved." },
        { id: "ru-u14l4-zhdat", type: "vocab", front: "ждать", reading: "zhdat", meaning: "to wait", accept: ["to wait for", "await", "to be waiting"], example: { jp: "Мне нужно ждать автобус, и это долго.", en: "I have to wait for the bus, and that takes a long time." }, drill: { jp: "Здесь нужно ждать автобус", en: "You have to wait for the bus here" }, hint: "ZHDAT, one syllable — жд at the start with no vowel between, which English never does. Imperfective infinitive. It takes its object bare: ждать автобус, with no Russian word for for." },
      ],
    },
  ],
};
