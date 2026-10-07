// RU Unit 125 — Транспорт и перевозки ("Transport and haulage") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u124–u136). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit87.js §1–§6, and
// ru/unit124.js §1–§5 for this block.
// Probes quoted in this header are reproducible with
// `node scripts/selfcheck-ru-b2-block3.mjs --probe <word> ...` — see unit124.js.
//
// THE MEASURED HOLE. u30 owns travel (путь · поездка · багаж · билет · виза),
// u94 owns the car (машина since u6, плюс грузовик · пассажир · водить), and
// u9/u14 own the city's transport (метро · такси · автобус · трамвай · вокзал).
// Across 2,328 cards there is NOT ONE word for a railway, a ship or freight:
// no carriage, no platform, no deck, no anchor, no cargo, no port. Sixteen of
// the eighteen probed seeds were free; `грузовик` and `пассажир` are u94's and
// are used in examples here, never as fronts.
//
// ⚠️ `перевозки` IS IN THE TITLE AS A PLURAL AND NO CARD TEACHES IT. The citation
// form `перевозка` probes free, but the unit's 24 slots went to the concrete
// vocabulary a learner can point at; haulage as an abstract noun was deferred.
// A title may name a word a card does not teach — the u92 «История и прошлое»
// precedent, and unit124.js §1.
//
// ⚠️ `рельсы` IS CARDED IN THE PLURAL ON PURPOSE. The singular `рельс` exists,
// so this is not a plurale tantum like `обои` or `наручники` — but Russian uses
// the plural for the thing itself (поезд идёт по рельсам) and the singular only
// when counting lengths of metal. unit1.js §5 bars an inflected form of a
// TAUGHT word; `рельс` is not taught, so there is no second mastery track. The
// same judgement is applied to `осадки` (u135) and `нарды` (u134).
//
// ⚠️ `проводник` IS ALLOWED AND HERE IS WHY, because it is the closest call in
// the unit. `водить` is taught (u94l1) and `водитель` at u8l1, so the вод- root
// is at two. проводник is a PREFIXED derivation (про-вод-ник), which
// unit31.js §3 explicitly allows and which u87 §5 applied to `полуостров` and
// `побережье`; and "a train attendant" is not recoverable from "to drive".
// REFUSED on the same test and named so nobody re-litigates them: `перевозка`
// (title only, above) · `погрузка` and `разгрузка` (both against `груз`, which
// is carded in l4 of this unit — unit51.js §3's worst version of the fault) ·
// `прибытие` (against `прибыль` u76 and `быть` u22) · `судоходство`.
// DEFERRED for count, not for a rule: парус · борт · шлюз · штурман · депо ·
// плацкарт · пересадка.
//
// ⚠️ `пилот` AND `порт` ARE GLOSSED THE LONG WAY ROUND. Both transliterate to
// the English word, so "a pilot" and "a port" are free passes under unit1.js §9
// — `produceIsFreePass` fires when checkProduce(meaning) passes, and both of
// those normalise to exactly the card's own reading. Every accept[] entry on
// the two of them avoids the bare English noun, the same trick `царь` uses at
// u92l1 and `астероид` at u124l1.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT125 = {
  id: "ru-u125",
  lang: "ru",
  title: "Транспорт и перевозки",
  order: 125,
  stage: "b2",
  lessons: [
    {
      id: "ru-u125l1",
      unit: 125,
      lesson: 1,
      title: "The railway itself",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a railway from the ground up — the rails, the sleepers under them, the gauge, the platform, a carriage and the engine that pulls it.",
      items: [
        { id: "ru-u125l1-relsy", type: "vocab", front: "рельсы", reading: "relsy", meaning: "rails", accept: ["the steel tracks a train runs on", "railway track", "the metal lines under a train"], example: { jp: "Зимой рельсы становятся очень холодные, и рабочие смотрят их каждое утро.", en: "In winter the rails become very cold, and the workers check them every morning." }, drill: { jp: "Здесь рельсы очень старые", en: "The rails here are very old" }, hint: "RELS-y — stress on the first syllable. MASCULINE PLURAL of рельс. ⚠️ Carded in the plural because that is the form Russian uses for the thing itself: «поезд идёт по рельсам». The singular is for counting lengths of metal." },
        { id: "ru-u125l1-shpala", type: "vocab", front: "шпала", reading: "shpala", meaning: "a railway sleeper", accept: ["a wooden beam under the rails", "a cross-tie under a track", "one of the beams the rails lie on"], example: { jp: "Старые шпалы были из дерева, а новые делают из бетона.", en: "The old sleepers were of wood, and the new ones are made of concrete." }, drill: { jp: "Эта шпала совсем старая", en: "This sleeper is quite old" }, hint: "SHPA-la — stress on the first syllable. FEMININE (-а). A loan from German Schwelle. ⚠️ Said in the plural far more often than the singular: шпАлы." },
        { id: "ru-u125l1-koleya", type: "vocab", front: "колея", reading: "koleya", meaning: "the track a wheel runs in", accept: ["the width between two rails", "a rut worn by wheels", "the gauge of a railway"], example: { jp: "В России колея очень широкая, поэтому на границе меняют вагоны.", en: "In Russia the gauge is very wide, so the carriages are changed at the border." }, drill: { jp: "Эта колея очень широкая", en: "This gauge is very wide" }, hint: "ka-li-YA — stress on the LAST syllable, and both vowels before it reduce. FEMININE (-я). From колесо, a wheel, from unit 94. ⚠️ Alive as a figure of speech: «войти в колею», to get back into a routine." },
        { id: "ru-u125l1-perron", type: "vocab", front: "перрон", reading: "perron", meaning: "a station platform", accept: ["the raised walk beside a train", "where passengers wait for a train", "the paved edge a train pulls up to"], example: { jp: "На перроне стояло много людей с большими сумками.", en: "A lot of people with big bags were standing on the platform." }, drill: { jp: "Этот перрон очень длинный", en: "This platform is very long" }, hint: "pi-RRON — stress on the last syllable, the е reduces to i, and the рр is held a beat longer. MASCULINE. A French loan. ⚠️ Russian also says платформа, which is the word on the sign; перрон is what people say." },
        { id: "ru-u125l1-vagon", type: "vocab", front: "вагон", reading: "vagon", meaning: "a railway carriage", accept: ["one car of a train", "a coach of a train", "the part of a train people sit in"], example: { jp: "В этом вагоне было так тихо, что все спали до самого утра.", en: "It was so quiet in this carriage that everyone slept until morning." }, drill: { jp: "Этот вагон совсем пустой", en: "This carriage is quite empty" }, hint: "va-GON — stress on the last syllable, and the first о reduces to a. MASCULINE. ⚠️ Also a measure of quantity in speech: «вагон времени», loads of time." },
        { id: "ru-u125l1-lokomotiv", type: "vocab", front: "локомотив", reading: "lokomotiv", meaning: "a locomotive", accept: ["the engine that pulls a train", "the power unit of a train", "the machine at the front of a train"], example: { jp: "Локомотив был такой тяжёлый, что земля под ним дрожала.", en: "The locomotive was so heavy that the ground shook under it." }, drill: { jp: "Этот локомотив очень сильный", en: "This locomotive is very powerful" }, hint: "la-ka-ma-TIV — stress on the last syllable, and all three о reduce. MASCULINE. ⚠️ Used of anything that pulls the rest along: «локомотив экономики», the engine of the economy." },
      ],
    },
    {
      id: "ru-u125l2",
      unit: 125,
      lesson: 2,
      title: "On board and in charge",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about being carried somewhere — a compartment, a cabin, the attendant, the scheduled service, the crew and the person flying the aircraft.",
      items: [
        { id: "ru-u125l2-kupe", type: "vocab", front: "купе", reading: "kupe", meaning: "a compartment on a train", accept: ["a small closed room in a carriage", "a sleeping compartment", "a closed space for four passengers"], example: { jp: "В купе было четыре места, и мы ехали вместе целую ночь.", en: "There were four places in the compartment, and we travelled together all night." }, drill: { jp: "Это купе совсем маленькое", en: "This compartment is quite small" }, hint: "ku-PE — stress on the last syllable. NEUTER, and ⚠️ IT NEVER CHANGES: a French loan ending in a stressed vowel, so в купе, из купе, два купе are all купе. The same class as кафе from unit 9 and метро from unit 9." },
        { id: "ru-u125l2-kayuta", type: "vocab", front: "каюта", reading: "kayuta", meaning: "a cabin on a ship", accept: ["a passenger's room on a boat", "a small room on a vessel", "where a traveller sleeps on a ship"], example: { jp: "Наша каюта была маленькая, но в окно было видно море.", en: "Our cabin was small, but you could see the sea through the window." }, drill: { jp: "Эта каюта очень маленькая", en: "This cabin is very small" }, hint: "ka-YU-ta — stress on YU, and the first о… there is no о: the first a is clear. FEMININE (-а). A Dutch loan, like most of Russian's sea words. ⚠️ A train has купе; a ship has каюта. The words do not swap." },
        { id: "ru-u125l2-provodnik", type: "vocab", front: "проводник", reading: "provodnik", meaning: "a train attendant", accept: ["the person who looks after a carriage", "a carriage conductor", "a guide who leads the way"], example: { jp: "Проводник дал нам чай и сказал, когда будет наша станция.", en: "The attendant gave us tea and told us when our station would be." }, drill: { jp: "Этот проводник очень вежливый", en: "This attendant is very polite" }, hint: "pra-vad-NIK — stress on the last syllable, and both о reduce to a. MASCULINE. From водить (unit 94) with про-, through. ⚠️ Two more senses: a guide in the mountains, and in physics a conductor of electricity." },
        { id: "ru-u125l2-reys", type: "vocab", front: "рейс", reading: "reys", meaning: "a scheduled service", accept: ["a numbered run of a train or plane", "a journey on a timetable", "one trip on a published schedule"], example: { jp: "Наш рейс был утром, но из-за погоды мы ждали шесть часов.", en: "Our service was in the morning, but because of the weather we waited six hours." }, drill: { jp: "Этот рейс был очень долгий", en: "This service was very long" }, hint: "REYS — one syllable. MASCULINE. A German loan (Reise). ⚠️ This is the word on a departure board for a flight, a train or a bus: рейс номер два. A `поездка` is the experience of travelling; a рейс is the scheduled run itself." },
        { id: "ru-u125l2-ekipazh", type: "vocab", front: "экипаж", reading: "ekipazh", meaning: "the crew of a vessel", accept: ["the people who work a ship or plane", "the working team on board", "the staff of a vessel"], example: { jp: "Экипаж этого корабля работал вместе уже десять лет.", en: "The crew of this ship had been working together for ten years already." }, drill: { jp: "Этот экипаж очень опытный", en: "This crew is very experienced" }, hint: "e-ki-PAZH — stress on the last syllable, and the ж is said as sh at the end. MASCULINE. ⚠️ An older sense is a horse-drawn carriage, which is what you will meet it as in a nineteenth-century novel." },
        { id: "ru-u125l2-pilot", type: "vocab", front: "пилот", reading: "pilot", meaning: "the person who flies an aircraft", accept: ["someone who flies a plane", "the one at the controls of an aircraft", "a flyer of aeroplanes"], example: { jp: "Пилот сказал, что мы будем на месте через два часа.", en: "The flyer said that we would be there in two hours." }, drill: { jp: "Этот пилот очень опытный", en: "This flyer is very experienced" }, hint: "pi-LOT — stress on the last syllable. MASCULINE. ⚠️ Glossed the long way round on purpose: the word transliterates to the English one, and unit 1 §9 calls a prompt you can read the answer off a free pass rather than a card. The older Russian word is лётчик." },
      ],
    },
    {
      id: "ru-u125l3",
      unit: 125,
      lesson: 3,
      title: "At sea",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a ship and the water it works on — the deck, the mast, the anchor, a lighthouse, a ferry and a tug.",
      items: [
        { id: "ru-u125l3-paluba", type: "vocab", front: "палуба", reading: "paluba", meaning: "the deck of a ship", accept: ["the open floor on a vessel", "the walking level of a ship", "the flat top of a boat"], example: { jp: "На палубе было так холодно, что все сидели внутри.", en: "It was so cold on the deck that everyone sat inside." }, drill: { jp: "Эта палуба совсем мокрая", en: "This deck is quite wet" }, hint: "PA-lu-ba — stress on the FIRST syllable, which is where learners most often get it wrong. FEMININE (-а). ⚠️ A big ship has several, counted from the top: верхняя палуба, the upper deck." },
        { id: "ru-u125l3-machta", type: "vocab", front: "мачта", reading: "machta", meaning: "a mast", accept: ["the tall pole on a ship", "the upright post that carries a sail", "a tall pole for a flag or wires"], example: { jp: "Мачта была такая высокая, что её было видно из города.", en: "The mast was so tall that it could be seen from the town." }, drill: { jp: "Эта мачта очень высокая", en: "This mast is very tall" }, hint: "MACH-ta — stress on the first syllable. FEMININE (-а). A Dutch loan. ⚠️ Not only on ships: a radio tower is also a мачта, and so is the pole a flag flies from." },
        { id: "ru-u125l3-yakor", type: "vocab", front: "якорь", reading: "yakor", meaning: "an anchor", accept: ["the heavy iron that holds a ship", "the weight dropped to stop a boat", "what a ship drops to stay in place"], example: { jp: "Корабль бросил якорь далеко от берега и стоял там всю ночь.", en: "The ship dropped anchor far from the shore and stood there all night." }, drill: { jp: "Этот якорь очень тяжёлый", en: "This anchor is very heavy" }, hint: "YA-kar — stress on the first syllable, and the о reduces to a. MASCULINE despite the -ь, so unit 1 §3 says to name it. ⚠️ Its plural moves the stress and takes the rare -я: якорЯ, like друзья." },
        { id: "ru-u125l3-mayak", type: "vocab", front: "маяк", reading: "mayak", meaning: "a lighthouse", accept: ["a tower with a light for ships", "a light that warns boats of rocks", "a beacon on the coast"], example: { jp: "Маяк стоит на самом краю берега уже сто лет.", en: "The lighthouse has stood on the very edge of the shore for a hundred years." }, drill: { jp: "Этот маяк очень старый", en: "This lighthouse is very old" }, hint: "ma-YAK — stress on the last syllable, and the first а is clear. MASCULINE. ⚠️ Used of anything that shows the way: «маяк для всех», a beacon for everyone." },
        { id: "ru-u125l3-parom", type: "vocab", front: "паром", reading: "parom", meaning: "a ferry", accept: ["a boat that carries cars across", "a vessel that crosses back and forth", "a boat that takes people over water"], example: { jp: "Паром идёт на тот берег каждый час, и машины ждут в очереди.", en: "The ferry goes to the other shore every hour, and the cars wait in a queue." }, drill: { jp: "Этот паром очень большой", en: "This ferry is very large" }, hint: "pa-ROM — stress on the last syllable, and the first а is clear. MASCULINE. ⚠️ Do not read it as the instrumental of `пар`, steam: that is пАром, stressed on the first syllable. Same letters, different word — the kind of pair unit 1 §6 says the stress decides." },
        { id: "ru-u125l3-buksir", type: "vocab", front: "буксир", reading: "buksir", meaning: "a tug boat", accept: ["a small strong boat that pulls ships", "a boat that tows another", "the little vessel that moves big ones"], example: { jp: "Буксир был совсем маленький, но очень сильный, и он работал весь день.", en: "The tug was quite small but very powerful, and it worked all day." }, drill: { jp: "Этот буксир очень сильный", en: "This tug is very powerful" }, hint: "buk-SIR — stress on the last syllable. MASCULINE. A Dutch loan. ⚠️ Also the tow ROPE itself, and the phrase «взять на буксир» means to take someone under your wing." },
      ],
    },
    {
      id: "ru-u125l4",
      unit: 125,
      lesson: 4,
      title: "Freight and the port",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about moving goods by water — the harbour, the berth, the cargo, a container, a barge and the hold it all goes in.",
      items: [
        { id: "ru-u125l4-port", type: "vocab", front: "порт", reading: "port", meaning: "a harbour for ships", accept: ["a place where ships load and unload", "a sea harbour", "the town a ship docks at"], example: { jp: "Этот порт работает и днём и ночью, потому что корабли идут всё время.", en: "This harbour works day and night, because the ships come all the time." }, drill: { jp: "Этот порт очень большой", en: "This harbour is very large" }, hint: "PORT — one syllable. MASCULINE. ⚠️ Glossed the long way round on purpose: the word transliterates to the English one, and unit 1 §9 calls that a free pass. ⚠️ Its locative is irregular and stressed on the ending: в портУ, like в лесУ from unit 26." },
        { id: "ru-u125l4-prichal", type: "vocab", front: "причал", reading: "prichal", meaning: "a berth for a ship", accept: ["the place a boat ties up", "a quay a vessel moors at", "the spot a ship is tied to"], example: { jp: "У этого причала стоят только маленькие корабли.", en: "Only small ships stand at this berth." }, drill: { jp: "Этот причал совсем новый", en: "This berth is quite new" }, hint: "pri-CHAL — stress on the last syllable. MASCULINE. From чалить, to moor, which this course does not card. ⚠️ A `порт` is the whole harbour; a причал is the one place a single ship is tied." },
        { id: "ru-u125l4-gruz", type: "vocab", front: "груз", reading: "gruz", meaning: "cargo", accept: ["goods carried by a vehicle", "a load being transported", "freight on a ship or lorry"], example: { jp: "Груз был такой тяжёлый, что машина шла очень медленно.", en: "The cargo was so heavy that the lorry went very slowly." }, drill: { jp: "Этот груз очень тяжёлый", en: "This cargo is very heavy" }, hint: "GRUZ — one syllable, and the з is said as s at the end. MASCULINE. ⚠️ Also a weight on the heart: «груз ответственности», the burden of responsibility. This is the root of `грузовик`, the lorry, from unit 94." },
        { id: "ru-u125l4-konteyner", type: "vocab", front: "контейнер", reading: "konteyner", meaning: "a container", accept: ["a big steel box for freight", "a standard box for shipping goods", "the metal box a crane lifts"], example: { jp: "В одном контейнере было столько книг, что их хватило бы на целую школу.", en: "There were so many books in one container that they would have been enough for a whole school." }, drill: { jp: "Этот контейнер совсем пустой", en: "This container is quite empty" }, hint: "kan-TEY-ner — stress on TEY, and the first о reduces to a. MASCULINE. ⚠️ Russian also uses it of a rubbish bin on the street — мусорный контейнер — which is the sense you will see most often in a town." },
        { id: "ru-u125l4-barzha", type: "vocab", front: "баржа", reading: "barzha", meaning: "a barge", accept: ["a flat boat for heavy loads", "a flat-bottomed cargo boat", "a towed boat that carries freight"], example: { jp: "Баржа шла по реке так медленно, что её можно было обогнать пешком.", en: "The barge went along the river so slowly that you could have overtaken it on foot." }, drill: { jp: "Эта баржа очень большая", en: "This barge is very large" }, hint: "BAR-zha — stress on the first syllable; you will also hear bar-ZHA, and both are accepted in speech. FEMININE (-а). ⚠️ It has no engine of its own: a баржа is what a `буксир` pulls." },
        { id: "ru-u125l4-tryum", type: "vocab", front: "трюм", reading: "tryum", meaning: "a ship's hold", accept: ["the space under a ship's deck", "where cargo is stored on a boat", "the lower part of a vessel"], example: { jp: "В трюме было темно и холодно, и там стояла вода.", en: "It was dark and cold in the hold, and there was water standing there." }, drill: { jp: "Этот трюм совсем пустой", en: "This hold is quite empty" }, hint: "TRYUM — one syllable, with the soft р from unit 5 before the ю. MASCULINE. A Dutch loan. ⚠️ The deck is above (`палуба`); the трюм is the whole space below it." },
      ],
    },
  ],
};
