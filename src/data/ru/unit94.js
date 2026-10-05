// RU Unit 94 — Дорога и машина ("The road and the car") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u87–u97). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, and ru/unit87.js §1–§7 for this block.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 11 (B1)` — no subject named. See
// unit87.js §1 and §6.
//
// THE MEASURED HOLE, and it is the oldest one in the course. `машина` has been
// taught since u6l3 and `водитель` since u8l1, and in 1,440 words NOT ONE PART
// OF A CAR is carded. u36 owns motion in the abstract (скорость · движение ·
// направление · транспорт · маршрут · переход · пешком); u60l2 owns the street
// furniture (светофор · перекрёсток · тротуар · фонарь); u14 owns the town's
// map. All ten allocated fronts were free: водить · руль · колесо · бензин ·
// пробка · авария · парковка · шина · тормоз · гараж.
//
// ⚠️ `водить` IS THE BASE WORD AND THAT IS WHY IT IS CARDED. `водитель` (u8l1)
// is its derivative, and the base verb had been withheld for 1,440 words because
// the course already owned the agent noun. CLAUDE.md names this as the costly
// misreading of the lexeme rule — the shape that left German teaching *survey*
// but not *question* — and its instruction is literally "card the base word".
// unit87.js §5 records the same call for `звук` (u96) and `песня` (u96).
//
// ⚠️ THREE CANDIDATES REFUSED, each for a stated reason:
//   `багажник` "a car boot" — §D against `багаж` (u30l4). This is exactly the
//        shape of the A2 refusal `чайник` against `чай` (unit51.js §3), so it
//        goes the same way. l2's hint on `капот` names the boot in English.
//   `мотор` — a gloss collision with `двигатель`, which is carded. One gloss,
//        one card, per unit1.js §9. The hint on двигатель names мотор.
//   `трасса` — a gloss collision with `шоссе`, same rule.
//   Already TAKEN and used freely in sentences instead: `светофор` ·
//   `перекрёсток` · `тротуар` (u60l2), `поворот` (u14l3), `скорость` (u36l2),
//   `штраф` (u51l3), `мост` (u14l1), `водитель` (u8l1).
//
// ⚠️ `шоссе` IS INDECLINABLE — the second such noun in this block after `цунами`
// (u91l3), and the hint points at both it and метро (u9l1), because the class is
// what a learner has to notice rather than a rule they can derive.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT94 = {
  id: "ru-u94",
  lang: "ru",
  title: "Дорога и машина",
  order: 94,
  stage: "b1",
  lessons: [
    {
      id: "ru-u94l1",
      unit: 94,
      lesson: 1,
      title: "Behind the wheel",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that you can drive, and name what the driver touches — the wheel, the brake, the seat belt, the horn and the headlights.",
      items: [
        { id: "ru-u94l1-vodit", type: "vocab", front: "водить", reading: "vodit", meaning: "to drive a car", accept: ["to be a driver", "to drive as a skill", "to handle a vehicle"], example: { jp: "Он умеет водить машину очень хорошо.", en: "He can drive a car very well." }, drill: { jp: "Здесь нельзя водить быстро", en: "You may not drive fast here" }, hint: "va-DIT — stress on the last syllable, and the о reduces to a. Its present tense is вожу, водишь: the д turns into ж in the я form. ⚠️ `водитель` from unit 8 is the person — this is the base verb, withheld until now only because the course already owned its derivative." },
        { id: "ru-u94l1-rul", type: "vocab", front: "руль", reading: "rul", meaning: "a steering wheel", accept: ["the wheel a driver holds", "the helm of a car", "what you steer with"], example: { jp: "Этот руль слишком высокий для меня.", en: "This steering wheel is too high for me." }, drill: { jp: "Этот руль очень большой", en: "This steering wheel is very big" }, hint: "RUL — one syllable, and the ь keeps the л soft. MASCULINE despite the -ь. ⚠️ Its oblique forms move the stress onto the ending: рулЯ, рулЁм. «За рулём» is at the wheel, and «сесть за руль» is to get behind it." },
        { id: "ru-u94l1-tormoz", type: "vocab", front: "тормоз", reading: "tormoz", meaning: "a brake", accept: ["what stops a car", "the pedal that slows you", "a braking mechanism"], example: { jp: "Тормоз в этой машине совсем плохой.", en: "The brake in this car is completely bad." }, drill: { jp: "Этот тормоз работает очень плохо", en: "This brake works very badly" }, hint: "TOR-maz — stress on the first syllable, and the final о reduces to a. MASCULINE. ⚠️ Its plural is тормозА, stress at the end. Said of a person it means slow on the uptake: «он тормоз»." },
        { id: "ru-u94l1-remen", type: "vocab", front: "ремень", reading: "remen", meaning: "a seat belt", accept: ["a safety belt in a car", "the strap you fasten", "a belt across the chest"], example: { jp: "Ремень в машине очень важный.", en: "The seat belt in a car is very important." }, drill: { jp: "Этот ремень совсем старый", en: "This belt is completely old" }, hint: "ri-MEN — stress on the last syllable, and the first е reduces to i. MASCULINE despite the -ь. ⚠️ Its е drops in every other form: ремнЯ, ремнИ — the same class as ливень in unit 91. It is an ordinary trouser belt too." },
        { id: "ru-u94l1-gudok", type: "vocab", front: "гудок", reading: "gudok", meaning: "a car horn", accept: ["the sound a car makes", "a hooter", "the note a horn sounds"], example: { jp: "Гудок этой машины очень громкий.", en: "This car's horn is very loud." }, drill: { jp: "Этот гудок очень громкий", en: "This horn is very loud" }, hint: "gu-DOK — stress on the last syllable. MASCULINE. ⚠️ The о drops in every other form: гудкА, гудкИ, like молоток in unit 89. It means both the horn and its sound, and also the ringing tone on a telephone." },
        { id: "ru-u94l1-fara", type: "vocab", front: "фара", reading: "fara", meaning: "a headlight", accept: ["a lamp on the front of a car", "a car's front light", "a driving lamp"], example: { jp: "Одна фара в этой машине не работает.", en: "One headlight on this car does not work." }, drill: { jp: "Эта фара совсем не работает", en: "This headlight does not work at all" }, hint: "FA-ra — stress on the first syllable. FEMININE (-а). ⚠️ Usually plural in real speech: включить фары, to put the lights on, with включать from unit 43. `фонарь` from unit 60 is the one on a street." },
      ],
    },
    {
      id: "ru-u94l2",
      unit: 94,
      lesson: 2,
      title: "The parts of the car",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the parts of a car — engine, wheel, tyre, bonnet — and say that petrol is dear at the filling station.",
      items: [
        { id: "ru-u94l2-dvigatel", type: "vocab", front: "двигатель", reading: "dvigatel", meaning: "an engine", accept: ["the motor of a car", "what makes a car go", "the power unit"], example: { jp: "Двигатель этой машины очень сильный.", en: "This car's engine is very powerful." }, drill: { jp: "Этот двигатель работает очень тихо", en: "This engine runs very quietly" }, hint: "DVI-ga-tel — stress on the first syllable. MASCULINE despite the -ь, like учитель from unit 8. From двигать, to move — the same root as `движение` from unit 36. The loan мотор also exists and means the same thing." },
        { id: "ru-u94l2-koleso", type: "vocab", front: "колесо", reading: "koleso", meaning: "a wheel", accept: ["a round thing that turns", "one of the four wheels", "a roadwheel"], example: { jp: "Одно колесо совсем старое.", en: "One wheel is completely worn." }, drill: { jp: "Это колесо совсем новое", en: "This wheel is completely new" }, hint: "ka-li-SO — stress on the last syllable, and both vowels before it reduce. NEUTER (-о). ⚠️ Its plural moves the stress right back and takes ё: колЁса. «Пятое колесо» is the useless fifth wheel." },
        { id: "ru-u94l2-shina", type: "vocab", front: "шина", reading: "shina", meaning: "a tyre", accept: ["the rubber on a wheel", "a car tyre", "what the wheel runs on"], example: { jp: "Эта шина совсем старая и опасная.", en: "This tyre is completely worn and dangerous." }, drill: { jp: "Эта шина очень широкая", en: "This tyre is very wide" }, hint: "SHI-na — stress on the first syllable. FEMININE (-а). ⚠️ In a garage people say покрышка, but шина is what you read on a sign. In medicine a шина is a splint." },
        { id: "ru-u94l2-kapot", type: "vocab", front: "капот", reading: "kapot", meaning: "a bonnet", accept: ["the lid over an engine", "the hood of a car", "what opens to show the motor"], example: { jp: "Капот этой машины совсем белый.", en: "This car's bonnet is completely white." }, drill: { jp: "Этот капот совсем новый", en: "This bonnet is completely new" }, hint: "ka-POT — stress on the last syllable, and the о reduces to a. MASCULINE. From French capote. ⚠️ It is only the FRONT lid: the boot at the back is багажник, which this course does not card." },
        { id: "ru-u94l2-benzin", type: "vocab", front: "бензин", reading: "benzin", meaning: "petrol", accept: ["fuel for a car", "gasoline", "what you put in a tank"], example: { jp: "Бензин здесь очень дорогой.", en: "Petrol is very expensive here." }, drill: { jp: "Этот бензин очень дорогой", en: "This petrol is very expensive" }, hint: "bin-ZIN — stress on the last syllable, and the е reduces to i. MASCULINE. ⚠️ Never «газ» for petrol, although газ from unit 87 is a real fuel: a Russian car runs on бензин." },
        { id: "ru-u94l2-zapravka", type: "vocab", front: "заправка", reading: "zapravka", meaning: "a petrol station", accept: ["a filling station", "where you buy fuel", "a fuel stop"], example: { jp: "Заправка есть на этой дороге.", en: "There is a filling station on this road." }, drill: { jp: "Эта заправка совсем близко", en: "This filling station is very near" }, hint: "za-PRAV-ka — stress on PRAV. FEMININE (-а). From заправлять, to fill up. ⚠️ It is also the dressing on a salad, which is the same idea: what you fill a thing with." },
      ],
    },
    {
      id: "ru-u94l3",
      unit: 94,
      lesson: 3,
      title: "On the road",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a drive — a traffic jam, overtaking, a highway, a pedestrian, a tunnel — and report a crash.",
      items: [
        { id: "ru-u94l3-probka", type: "vocab", front: "пробка", reading: "probka", meaning: "a traffic jam", accept: ["cars standing still on a road", "a hold-up of traffic", "a snarl of cars"], example: { jp: "Утром на этой улице большая пробка.", en: "In the morning there is a big jam on this street." }, drill: { jp: "Здесь всегда большая пробка", en: "There is always a big jam here" }, hint: "PROB-ka — stress on the first syllable. FEMININE (-а). ⚠️ It literally means a cork, and that is the picture: the road is corked. «Стоять в пробке» is to sit in traffic." },
        { id: "ru-u94l3-obgon", type: "vocab", front: "обгон", reading: "obgon", meaning: "overtaking", accept: ["passing another car", "going past the car in front", "a pass on the road"], example: { jp: "Обгон здесь очень опасный.", en: "Overtaking here is very dangerous." }, drill: { jp: "Обгон здесь совсем запрещён", en: "Overtaking is completely forbidden here" }, hint: "ab-GON — stress on the last syllable, and the о reduces to a. MASCULINE. From гнать, to drive hard. ⚠️ «Обгон запрещён» is the road sign, and it is among the first Russian phrases a driver learns." },
        { id: "ru-u94l3-shosse", type: "vocab", front: "шоссе", reading: "shosse", meaning: "a highway", accept: ["a main road out of town", "a trunk road", "a wide fast road"], example: { jp: "Это шоссе идёт прямо на север.", en: "This highway runs straight north." }, drill: { jp: "Это шоссе очень широкое", en: "This highway is very wide" }, hint: "sha-SE — stress on the ending, and the сс is held a beat longer. NEUTER, and ⚠️ INDECLINABLE, like цунами in unit 91 and метро in unit 9: по шоссе, на шоссе, and never a changed ending." },
        { id: "ru-u94l3-peshekhod", type: "vocab", front: "пешеход", reading: "peshekhod", meaning: "a pedestrian", accept: ["someone walking on a road", "a person on foot", "a walker in traffic"], example: { jp: "Пешеход идёт через дорогу.", en: "A pedestrian is crossing the road." }, drill: { jp: "Этот пешеход идёт очень медленно", en: "This pedestrian is walking very slowly" }, hint: "pi-shi-KHOD — stress on the last syllable, with the scraping х, and both е before it reduce to i. MASCULINE. From пешком, on foot, from unit 36. ⚠️ `переход` from unit 36 is the crossing he uses." },
        { id: "ru-u94l3-tunnel", type: "vocab", front: "туннель", reading: "tunnel", meaning: "a tunnel", accept: ["a road through a hill", "a bored passage", "a way under something"], example: { jp: "Этот туннель очень длинный и тёмный.", en: "This tunnel is very long and very dark." }, drill: { jp: "Этот туннель совсем тёмный", en: "This tunnel is completely dark" }, hint: "tu-NEL — stress on the last syllable, with the нн held a beat and the ь keeping the л soft. MASCULINE despite the -ь. ⚠️ Also spelt тоннель with о — both are correct Russian, and this course uses the у spelling." },
        { id: "ru-u94l3-avariya", type: "vocab", front: "авария", reading: "avariya", meaning: "a crash", accept: ["a road accident", "a collision", "an accident with a vehicle"], example: { jp: "Авария была на этом шоссе.", en: "The crash was on this highway." }, drill: { jp: "Эта авария была очень страшная", en: "That crash was terrible" }, hint: "a-VA-ri-ya — stress on VA. FEMININE (-я). ⚠️ Used of any breakdown or failure, not only a crash: авария на заводе, with завод from unit 87. `катастрофа` from unit 91 is the big one." },
      ],
    },
    {
      id: "ru-u94l4",
      unit: 94,
      lesson: 4,
      title: "Where it stops, and what else is on the road",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say where a car is kept and what else uses the road — a garage, a car park, a lorry, a bicycle, a trailer and a passenger.",
      items: [
        { id: "ru-u94l4-garazh", type: "vocab", front: "гараж", reading: "garazh", meaning: "a garage", accept: ["a shed for a car", "where a car is kept", "a lock-up for a vehicle"], example: { jp: "Гараж стоит возле дома.", en: "The garage stands beside the house." }, drill: { jp: "Этот гараж совсем маленький", en: "This garage is very small" }, hint: "ga-RAZH — stress on the last syllable, and the ж at the end is said as sh. MASCULINE. ⚠️ Its oblique forms move the stress: гаражА, гаражИ. A repair shop is автосервис, never гараж." },
        { id: "ru-u94l4-parkovka", type: "vocab", front: "парковка", reading: "parkovka", meaning: "a car park", accept: ["a place to leave a car", "parking space", "where cars stand"], example: { jp: "Парковка здесь совсем бесплатная.", en: "Parking here is completely free." }, drill: { jp: "Эта парковка совсем бесплатная", en: "This car park is completely free" }, hint: "par-KOV-ka — stress on KOV. FEMININE (-а). ⚠️ NOT built on `парк` from unit 9, which in Russian is a green park and nothing else: this comes from парковать, to park. It means both the place and the act." },
        { id: "ru-u94l4-gruzovik", type: "vocab", front: "грузовик", reading: "gruzovik", meaning: "a lorry", accept: ["a truck", "a vehicle for carrying goods", "a heavy goods vehicle"], example: { jp: "Грузовик везёт товар на завод.", en: "The lorry is carrying goods to the plant." }, drill: { jp: "Этот грузовик очень большой", en: "This lorry is very big" }, hint: "gru-za-VIK — stress on the last syllable, and the о reduces to a. MASCULINE. From грузить, to load, from unit 49. ⚠️ The stress stays at the end right through: грузовикА, грузовикИ." },
        { id: "ru-u94l4-velosiped", type: "vocab", front: "велосипед", reading: "velosiped", meaning: "a bicycle", accept: ["a bike", "a two-wheeled machine you pedal", "a pedal cycle"], example: { jp: "Этот велосипед совсем новый.", en: "This bicycle is completely new." }, drill: { jp: "Этот велосипед очень старый", en: "This bicycle is very old" }, hint: "vi-la-si-PED — four syllables, stress on the last, and every vowel before it reduces. MASCULINE. ⚠️ «Изобретать велосипед» is to reinvent the wheel — the Russian picture is a bicycle, not a wheel." },
        { id: "ru-u94l4-pritsep", type: "vocab", front: "прицеп", reading: "pritsep", meaning: "a trailer", accept: ["what a lorry pulls behind", "a towed cart", "a load on wheels behind a vehicle"], example: { jp: "Прицеп этого грузовика очень большой.", en: "This lorry's trailer is very big." }, drill: { jp: "Этот прицеп совсем пустой", en: "This trailer is completely empty" }, hint: "pri-TSEP — stress on the last syllable. MASCULINE. From цеплять, to hook on. ⚠️ «С прицепом», of an offer or a person, means with strings attached." },
        { id: "ru-u94l4-passazhir", type: "vocab", front: "пассажир", reading: "passazhir", meaning: "a passenger", accept: ["someone riding but not driving", "a person being carried", "a traveller in a vehicle"], example: { jp: "Пассажир сидит в машине и молчит.", en: "The passenger is sitting in the car saying nothing." }, drill: { jp: "Этот пассажир совсем молодой", en: "This passenger is very young" }, hint: "pa-ssa-ZHIR — stress on the last syllable, the first а reduces, and the сс is held a beat. MASCULINE. ⚠️ Used of a car, a bus, a plane and a train alike; a car's front passenger seat is пассажирское место." },
      ],
    },
  ],
};
