// RU Unit 75 — Экология и ресурсы ("Ecology and resources") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u74–u86). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, and ru/unit74.js §1–§5 for this block.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Environment and place" AND THE PLACE HALF IS SPENT
// THREE TIMES OVER — u14 Город и места, u26 Природа и животные, u54 Наука и
// природа and u60 Улица и двор between them own the town, the countryside, the
// weather, the ground and the street. So this unit narrows to the ONE part of
// the slot nothing touches: what people do TO the natural world, and what they
// take out of it. The crew brief's measurement, re-probed on this branch.
//
// ⚠️ THREE BARRED WORDS, and all three would have passed a front probe:
//   `среда` — the environment word IS Wednesday (u17l1). «окружающая среда»
//        therefore cannot be a front in this course, and the domain is carried
//        by `экология` instead. Not a workaround: экология is the word a Russian
//        newspaper actually uses in a headline.
//   `уголь` "coal" — its reading is "ugol", which is `угол`'s (u12l1). The
//        soft sign is dropped from every reading (unit1.js §1(b)), so coal and
//        a corner are one card with two answers. u75l2 cards `топливо` and
//        `нефть` instead; coal is met only in sentences.
//   `смог` "smog" IS ALSO мочь's past tense (u47l3) — «он смог» = he managed.
//        Barred on the same rule, and found by transliterating before carding.
// ⚠️ AND TWO REFUSED ON unit1.js §D (the taught word gives them away):
//   `загрязнение` "pollution" — против `грязный` (u29l3). The derivation is
//        за+грязь+ение and plainly visible, which is exactly the shape unit51.js
//        §3 refused for решение/объяснение. The crew brief listed it as free,
//        which is true of the FRONT and not of the LEXEME. This unit teaches the
//        damage through `отходы` · `свалка` · `дым` · `пыль` · `яд` instead.
//   `природный` — против `природа` (u54l3). `мусор` is TAKEN (u15l4).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT75 = {
  id: "ru-u75",
  lang: "ru",
  title: "Экология и ресурсы",
  order: 75,
  stage: "b1",
  lessons: [
    {
      id: "ru-u75l1",
      unit: 75,
      lesson: 1,
      title: "What people leave behind",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about ecology as a subject, name industrial waste, a dump, smoke, dust and poison, and say what they do to a place.",
      items: [
        { id: "ru-u75l1-ekologiya", type: "vocab", front: "экология", reading: "ekologiya", meaning: "ecology", accept: ["the ecology", "the state of the environment", "environmental science"], example: { jp: "Экология в этом районе плохая, хотя воздух летом кажется чистым.", en: "The ecology in that district is poor, although the air seems clean in summer." }, drill: { jp: "Здесь очень плохая экология", en: "The ecology here is very poor" }, hint: "e-ka-LO-gi-ya — stress on LO, and the о before it reduces to a. FEMININE (-я). ⚠️ In everyday Russian it means the STATE of a place («плохая экология»), not only the science — a newspaper uses it exactly where English would say the environment, which Russian cannot say with `среда`, since that word is Wednesday (unit 17)." },
        { id: "ru-u75l1-otkhody", type: "vocab", front: "отходы", reading: "otkhody", meaning: "industrial waste", accept: ["waste", "the waste", "waste products"], example: { jp: "Отходы идут прямо в реку, и об этом знают все.", en: "The waste goes straight into the river, and everyone knows it." }, drill: { jp: "Эти отходы очень опасны", en: "That waste is very dangerous" }, hint: "at-KHO-dy — stress on KHO, and the о before it reduces to a. MASCULINE, and ⚠️ taught in the PLURAL because that is the only form the word is used in. мусор from unit 15 is household rubbish; отходы is what a factory produces." },
        { id: "ru-u75l1-svalka", type: "vocab", front: "свалка", reading: "svalka", meaning: "a rubbish dump", accept: ["a dump", "the tip", "a landfill"], example: { jp: "За лесом огромная свалка, и летом её запах доходит до деревни.", en: "Beyond the wood there is a huge dump, and in summer its smell reaches the village." }, drill: { jp: "За лесом большая свалка", en: "There is a big dump beyond the wood" }, hint: "SVAL-ka — stress on the first syllable. FEMININE (-а). From валить, to tip over — a свалка is where things get tipped. Also used of a brawl: «началась свалка»." },
        { id: "ru-u75l1-dym", type: "vocab", front: "дым", reading: "dym", meaning: "smoke from a fire", accept: ["smoke", "the smoke", "fumes"], example: { jp: "Дым шёл прямо на город, поэтому окна держали закрытыми.", en: "The smoke went straight towards the town, so the windows were kept shut." }, drill: { jp: "Дым идёт на город", en: "The smoke is going towards the town" }, hint: "DYM — one syllable, with the ы said deep in the mouth (unit 5). MASCULINE. ⚠️ Glossed «smoke from a fire» because `курить` (u12l3) is prompted as «to smoke», and the grader strips a leading «to» and «a» — bare «smoke» would be one prompt with two answers. огонь from unit 12 is the fire itself, and дым is what it gives off." },
        { id: "ru-u75l1-pyl", type: "vocab", front: "пыль", reading: "pyl", meaning: "dust", accept: ["the dust", "household dust", "dust in the air"], example: { jp: "Пыль здесь такая, что через неделю мебель снова грязная.", en: "The dust here is such that a week later the furniture is dirty again." }, drill: { jp: "Пыль здесь везде", en: "There is dust everywhere here" }, hint: "PYL — one syllable. ⚠️ FEMININE despite ending in -ь (unit1.js §3: a -ь noun can be either, so the gender is always named). Its genitive is пЫли, which is the form много takes — unit 37's rule." },
        { id: "ru-u75l1-yad", type: "vocab", front: "яд", reading: "yad", meaning: "poison", accept: ["the poison", "a poison", "venom"], example: { jp: "В воде нашли яд, и теперь никто в этой реке не купается.", en: "Poison was found in the water, and now nobody swims in that river." }, drill: { jp: "В этой воде есть яд", en: "There is poison in that water" }, hint: "YAD — one syllable, and the д goes quiet at the end, so it comes out YAT (unit 6). MASCULINE. Covers both poison and an animal's venom; вредный from unit 53 is the adjective a learner already has." },
      ],
    },
    {
      id: "ru-u75l2",
      unit: 75,
      lesson: 2,
      title: "What is taken out of the ground",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a resource, oil, gas, fuel and raw material, and say that a country extracts and sells them.",
      items: [
        { id: "ru-u75l2-resurs", type: "vocab", front: "ресурс", reading: "resurs", meaning: "a resource", accept: ["the resource", "a natural resource", "a reserve of something"], example: { jp: "Если ресурса становится меньше, цена на него растёт каждый месяц.", en: "If there is less and less of a resource, its price rises every month." }, drill: { jp: "Это очень важный ресурс", en: "That is a very important resource" }, hint: "re-SURS — stress on the last syllable. MASCULINE. Usually met in the plural, ресУрсы, and of anything finite — oil, water, time or people." },
        { id: "ru-u75l2-neft", type: "vocab", front: "нефть", reading: "neft", meaning: "crude oil", accept: ["oil", "the oil", "petroleum"], example: { jp: "Нефть эта страна продаёт, а почти всё остальное покупает.", en: "That country sells crude oil and buys almost everything else." }, drill: { jp: "Эта страна продаёт нефть", en: "That country sells crude oil" }, hint: "NEFT — one syllable, and the фть at the end is one block of consonants. ⚠️ FEMININE despite the -ь. ⚠️ NOT масло from unit 13, which is cooking oil or butter — the two never swap." },
        { id: "ru-u75l2-gaz", type: "vocab", front: "газ", reading: "gaz", meaning: "natural gas", accept: ["gas", "the gas", "gas for heating"], example: { jp: "Газ в дом провели только в прошлом году, а до этого здесь была печь.", en: "Gas was only brought into the house last year, and before that there was a stove here." }, drill: { jp: "В этом доме есть газ", en: "There is gas in that house" }, hint: "GAZ — one syllable, and the з goes quiet at the end, so it comes out GAS. MASCULINE. Also the accelerator of a car: «нажать на газ», with нажимать from unit 49." },
        { id: "ru-u75l2-toplivo", type: "vocab", front: "топливо", reading: "toplivo", meaning: "fuel", accept: ["the fuel", "heating fuel", "something to burn"], example: { jp: "Топливо стало дороже, поэтому автобусы теперь ходят не так часто.", en: "Fuel has become dearer, so the buses now run less often than before." }, drill: { jp: "Топливо стало очень дорогим", en: "Fuel has become very expensive" }, hint: "TOP-li-va — stress on the first syllable, and the final о reduces to a. NEUTER (-о). From топить, to heat — anything you burn for warmth or power, including coal, which cannot be carded here because `уголь` reads as `угол` from unit 12." },
        { id: "ru-u75l2-syryo", type: "vocab", front: "сырьё", reading: "syryo", meaning: "unworked material", accept: ["raw material", "raw materials", "what a factory starts from"], example: { jp: "Сырьё здесь дешёвое, зато готовый товар приходится покупать за границей.", en: "Raw material is cheap here, but the finished goods have to be bought abroad." }, drill: { jp: "Это сырьё очень дешёвое", en: "That raw material is very cheap" }, hint: "sy-RYO — stress on the last syllable, with the ё always written (unit 1 §7). NEUTER (-ё), and ⚠️ it has no plural: сырьё is already a mass. ⚠️ Glossed «unworked material» because материал (u32l4) is already prompted as «raw material» — one gloss cannot be the prompt for two cards. материал is a material you build with; сырьё is what a factory starts from." },
        { id: "ru-u75l2-dobyvat", type: "vocab", front: "добывать", reading: "dobyvat", meaning: "to extract from the ground", accept: ["to mine", "to extract", "to win from the earth"], example: { jp: "Нефть здесь начали добывать давно, а газа в деревне нет и сейчас.", en: "They began extracting oil here long ago, and the village has no gas even now." }, drill: { jp: "Здесь начали добывать нефть", en: "They have begun extracting oil here" }, hint: "da-by-VAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is добыть. Of anything won by effort: добывать нефть, добывать деньги. ⚠️ Historically from быть, but nothing of that meaning is left." },
      ],
    },
    {
      id: "ru-u75l3",
      unit: 75,
      lesson: 3,
      title: "When it goes wrong",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report a disaster, an accident, a flood or an earthquake, say that people were rescued, and name a victim.",
      items: [
        { id: "ru-u75l3-katastrofa", type: "vocab", front: "катастрофа", reading: "katastrofa", meaning: "a disaster", accept: ["a catastrophe", "the disaster", "a calamity"], example: { jp: "Говорят, что это была катастрофа, хотя официально её считают аварией.", en: "They say it was a disaster, although officially it is counted as an accident." }, drill: { jp: "Это была настоящая катастрофа", en: "That was a real disaster" }, hint: "ka-ta-STRO-fa — stress on STRO, and both unstressed а stay а. FEMININE (-а). Used of a plane crash and of a bad exam result alike — Russians reach for it quickly." },
        { id: "ru-u75l3-avariya", type: "vocab", front: "авария", reading: "avariya", meaning: "an accident with machinery", accept: ["a road crash", "a breakdown of machinery", "the accident"], example: { jp: "На дороге была авария, поэтому мы стояли в машине почти час.", en: "There was a crash on the road, so we sat in the car for almost an hour." }, drill: { jp: "На дороге была авария", en: "There was a crash on the road" }, hint: "a-VA-ri-ya — stress on VA. FEMININE (-я). ⚠️ Narrower than катастрофа: an авария involves a vehicle or equipment. случай from unit 24 is a case or an incident with no damage implied." },
        { id: "ru-u75l3-navodnenie", type: "vocab", front: "наводнение", reading: "navodnenie", meaning: "a flood", accept: ["flooding", "the flood", "high water"], example: { jp: "После наводнения в деревне не было света и чистой воды.", en: "After the flood the village had no electricity and no clean water." }, drill: { jp: "Здесь было большое наводнение", en: "There was a big flood here" }, hint: "na-vad-NE-ni-ye — stress on NE, and both о reduce to a. NEUTER (-ие). ⚠️ Built on вода from unit 4, in three steps (на+вод+н+ение) — the same distance unit51.js §3 allowed for современный against время, which is why both are carded." },
        { id: "ru-u75l3-zemletryasenie", type: "vocab", front: "землетрясение", reading: "zemletryasenie", meaning: "an earthquake", accept: ["a quake", "the earthquake", "a tremor"], example: { jp: "Землетрясение было ночью, и утром никто не хотел входить в дом.", en: "The earthquake was at night, and in the morning nobody wanted to go into the house." }, drill: { jp: "Ночью было землетрясение", en: "There was an earthquake at night" }, hint: "zem-le-trya-SE-ni-ye — six syllables, stress on SE. NEUTER (-ие). A compound of земля (unit 4) and трясти, to shake — Russian builds its disaster words out of plain parts, exactly as English does with earth and quake." },
        { id: "ru-u75l3-spasat", type: "vocab", front: "спасать", reading: "spasat", meaning: "to rescue", accept: ["to save a person", "to get someone out", "to save a life"], example: { jp: "Людей спасали всю ночь, хотя дождь шёл до самого утра.", en: "People were being rescued all night, although the rain went on until morning." }, drill: { jp: "Нужно спасать этих людей", en: "These people have to be rescued" }, hint: "spa-SAT — stress on the last syllable. Imperfective infinitive; the perfective is спасти. ⚠️ The same root as спасибо from unit 7, which is literally «God save you» — a link no learner would draw, so both are carded. защищать from unit 59 is to defend, which does not imply danger to life." },
        { id: "ru-u75l3-zhertva", type: "vocab", front: "жертва", reading: "zhertva", meaning: "a victim", accept: ["a casualty", "the victim", "a sacrifice"], example: { jp: "Жертва была одна, и это считают почти счастливым случаем.", en: "There was one victim, and that is counted as an almost lucky outcome." }, drill: { jp: "Жертва была только одна", en: "There was only one victim" }, hint: "ZHERT-va — stress on the first syllable. FEMININE (-а), and ⚠️ it stays feminine about a man: «он стал жертвой». Second sense: a sacrifice you make — «принести жертву»." },
      ],
    },
    {
      id: "ru-u75l4",
      unit: 75,
      lesson: 4,
      title: "What is still wild",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a nature reserve and the taiga, call an animal or a place wild, and say that something is disappearing or dying out.",
      items: [
        { id: "ru-u75l4-zapovednik", type: "vocab", front: "заповедник", reading: "zapovednik", meaning: "a nature reserve", accept: ["a reserve", "a protected area", "a national park"], example: { jp: "В заповеднике нельзя курить и нельзя ставить машину, и это правильно.", en: "In the reserve you may not smoke and may not park a car, and that is right." }, drill: { jp: "Это очень большой заповедник", en: "That is a very large reserve" }, hint: "za-pa-VED-nik — stress on VED, and both о reduce to a. MASCULINE. From заповедь, a commandment — land where the law says hands off. Russia has dozens and they are a point of national pride." },
        { id: "ru-u75l4-tayga", type: "vocab", front: "тайга", reading: "tayga", meaning: "the taiga", accept: ["the northern forest", "boreal forest", "the deep forest"], example: { jp: "В тайге можно идти целый день и не встретить человека.", en: "In the taiga you can walk all day and not meet a person." }, drill: { jp: "Тайга начинается здесь", en: "The taiga begins here" }, hint: "tay-GA — stress on the last syllable. FEMININE (-а). The belt of cold forest across northern Russia. лес from unit 26 is any wood; тайга is that specific thing and has no plural." },
        { id: "ru-u75l4-dikiy", type: "vocab", front: "дикий", reading: "dikiy", meaning: "wild", accept: ["untamed", "wild of an animal", "savage"], example: { jp: "Эта кошка дикая: она живёт у нас в саду, но в руки не идёт.", en: "That cat is wild: she lives in our garden but will not be handled." }, drill: { jp: "Это совсем дикий лес", en: "That is a completely wild wood" }, hint: "DI-kiy — stress on the first syllable. Of animals, of land and of behaviour: «дикий лес», «дикий человек». ⚠️ Also colloquially «huge» — «дикая цена», a crazy price." },
        { id: "ru-u75l4-ischezat", type: "vocab", front: "исчезать", reading: "ischezat", meaning: "to disappear", accept: ["to vanish", "to go missing", "to fade away"], example: { jp: "Рыба в реке начала исчезать, когда здесь стали добывать нефть.", en: "The fish in the river began to disappear when they started extracting oil here." }, drill: { jp: "Эта рыба начала исчезать", en: "That fish has begun to disappear" }, hint: "is-che-ZAT — stress on the last syllable, and the сч is said shch (unit 6). Imperfective infinitive; the perfective is исчезнуть. ⚠️ Neutral about cause: a species, a word or a person can исчезать." },
        { id: "ru-u75l4-pogibat", type: "vocab", front: "погибать", reading: "pogibat", meaning: "to perish", accept: ["to die in a disaster", "to be killed", "to be lost"], example: { jp: "В таком дыму птицы погибают быстро, даже если огонь далеко.", en: "In smoke like that birds perish quickly, even if the fire is far away." }, drill: { jp: "Здесь могут погибать птицы", en: "Birds can perish here" }, hint: "pa-gi-BAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is погибнуть. ⚠️ Never of ordinary death from age — that is умирать, which this course does not card because смерть is already taught at unit 59. погибать is dying in a fire, a war or a flood." },
        { id: "ru-u75l4-urozhay", type: "vocab", front: "урожай", reading: "urozhay", meaning: "a harvest", accept: ["the harvest", "a crop", "the yield"], example: { jp: "Урожай был плохой, потому что дождя не было почти два месяца.", en: "The harvest was poor because there had been almost no rain for two months." }, drill: { jp: "Урожай был очень плохой", en: "The harvest was very poor" }, hint: "u-ra-ZHAY — stress on the last syllable, and the о reduces to a. MASCULINE. Both the gathering in and the amount gathered: «собрать урожай», «большой урожай»." },
      ],
    },
  ],
};
