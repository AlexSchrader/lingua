// RU Unit 75 — Экология и природа ("Ecology and nature") — B1
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
//        a corner are one card with two answers. Coal is met only in sentences.
//        ⚠️ This line used to say «u75l2 cards топливо and нефть instead»; the
//        cross-block dedupe moved both to u87, so it no longer does.
//   `смог` "smog" IS ALSO мочь's past tense (u47l3) — «он смог» = he managed.
//        Barred on the same rule, and found by transliterating before carding.
// ⚠️ AND TWO REFUSED ON unit1.js §D (the taught word gives them away):
//   `загрязнение` "pollution" — против `грязный` (u29l3). The derivation is
//        за+грязь+ение and plainly visible, which is exactly the shape unit51.js
//        §3 refused for решение/объяснение. The crew brief listed it as free,
//        which is true of the FRONT and not of the LEXEME. This unit teaches the
//        damage through `отходы` · `свалка` · `дым` · `пыль` · `яд` instead.
//   `природный` — против `природа` (u54l3). `мусор` is TAKEN (u15l4).
//   ⚠️ AND SO IS `растение` — против `расти` (u54l3). Screened 2026-10-06.
//
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ THE CROSS-BLOCK DEDUPE RE-THEMED THIS UNIT. 2026-10-06, 15 of 24 replaced.
// ═════════════════════════════════════════════════════════════════════════════
// The "what people take out of it" half of the narrowing above landed inside
// THREE of block 3's eleven centrally-allocated themes, and block 3's themes are
// binding. Where each word went:
//     u87 Промышленность и ресурсы  ресурс · нефть · газ · топливо · сырьё
//     u91 Стихия и бедствие         катастрофа · наводнение · землетрясение
//     u97 Опасность и спасение      спасать · жертва · дым
//     u90 География и края          тайга
//     u88 Сельское хозяйство        урожай
//     u94 Дорога и машина           авария
//     u69 Развитие и перемена       исчезать
// WHAT THIS UNIT IS NOW, and why it is still a coherent 24 rather than a patch:
// the pollution field was never the part that collided, so l1 is untouched but
// for `дым` -> `отравлять`. The two new lessons are the fields NOTHING in the
// corpus held:
//     l2  the MEDIA that get polluted — атмосфера · кислород · родник · болото ·
//         торф, with `добывать` kept and re-pointed at water and peat.
//     l3  the WILD ANIMALS. Measured: u6 cards животное, u26 cards собака ·
//         птица · лошадь · корова · медведь · мышь and u88 cards свинья · овца ·
//         курица — so the whole corpus has ONE wild mammal (медведь) and no
//         umbrella word for a wild one. зверь · хищник · волк · лиса · олень ·
//         заяц close that. Concrete nouns at B1 is a fair objection; the answer
//         is that the hole is real and that a заповедник unit with no animal in
//         it teaches conservation in the abstract.
//     l4  conservation — заповедник · дикий · погибать kept, plus охрана ·
//         браконьер · вымирать.
// ⚠️ TWO SURVIVORS HAD TO BE REWRITTEN, not just kept: `добывать`'s example and
// drill both used нефть and газ, and `погибать`'s example used дым — all three
// are now taught LATER than u75, which is the direction that is easy to miss.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT75 = {
  id: "ru-u75",
  lang: "ru",
  title: "Экология и природа",
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
      canDo: "Talk about ecology as a subject, name industrial waste, a dump, dust and poison, and say that something is poisoning a place.",
      items: [
        { id: "ru-u75l1-ekologiya", type: "vocab", front: "экология", reading: "ekologiya", meaning: "ecology", accept: ["the ecology", "the state of the environment", "environmental science"], example: { jp: "Экология в этом районе плохая, хотя воздух летом кажется чистым.", en: "The ecology in that district is poor, although the air seems clean in summer." }, drill: { jp: "Здесь очень плохая экология", en: "The ecology here is very poor" }, hint: "e-ka-LO-gi-ya — stress on LO, and the о before it reduces to a. FEMININE (-я). ⚠️ In everyday Russian it means the STATE of a place («плохая экология»), not only the science — a newspaper uses it exactly where English would say the environment, which Russian cannot say with `среда`, since that word is Wednesday (unit 17)." },
        { id: "ru-u75l1-otkhody", type: "vocab", front: "отходы", reading: "otkhody", meaning: "industrial waste", accept: ["waste", "the waste", "waste products"], example: { jp: "Отходы идут прямо в реку, и об этом знают все.", en: "The waste goes straight into the river, and everyone knows it." }, drill: { jp: "Эти отходы очень опасны", en: "That waste is very dangerous" }, hint: "at-KHO-dy — stress on KHO, and the о before it reduces to a. MASCULINE, and ⚠️ taught in the PLURAL because that is the only form the word is used in. мусор from unit 15 is household rubbish; отходы is what a factory produces." },
        { id: "ru-u75l1-svalka", type: "vocab", front: "свалка", reading: "svalka", meaning: "a rubbish dump", accept: ["a dump", "the tip", "a landfill"], example: { jp: "За лесом огромная свалка, и летом там очень плохой воздух.", en: "Beyond the wood there is a huge dump, and in summer the air there is very bad." }, drill: { jp: "За лесом большая свалка", en: "There is a big dump beyond the wood" }, hint: "SVAL-ka — stress on the first syllable. FEMININE (-а). From валить, to tip over — a свалка is where things get tipped. Also used of a brawl: «началась свалка»." },
        { id: "ru-u75l1-otravlyat", type: "vocab", front: "отравлять", reading: "otravlyat", meaning: "to poison something", accept: ["to contaminate", "to put poison into", "to poison a place"], example: { jp: "Эти отходы отравляют реку, и рыба в ней больше не живёт.", en: "That waste is poisoning the river, and the fish no longer live in it." }, drill: { jp: "Это может отравлять всю реку", en: "That can poison the whole river" }, hint: "at-rav-LYAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is отравить. Built on трава from unit 26 — the oldest poisons were herbs. Of water, air and food, and figuratively of a life: «отравлять жизнь»." },
        { id: "ru-u75l1-pyl", type: "vocab", front: "пыль", reading: "pyl", meaning: "dust", accept: ["the dust", "household dust", "dust in the air"], example: { jp: "Пыль здесь такая, что через неделю мебель снова грязная.", en: "The dust here is such that a week later the furniture is dirty again." }, drill: { jp: "Пыль здесь везде", en: "There is dust everywhere here" }, hint: "PYL — one syllable. ⚠️ FEMININE despite ending in -ь (unit1.js §3: a -ь noun can be either, so the gender is always named). Its genitive is пЫли, which is the form много takes — unit 37's rule." },
        { id: "ru-u75l1-yad", type: "vocab", front: "яд", reading: "yad", meaning: "poison", accept: ["the poison", "a poison", "venom"], example: { jp: "В воде нашли яд, и теперь никто в этой реке не купается.", en: "Poison was found in the water, and now nobody swims in that river." }, drill: { jp: "В этой воде есть яд", en: "There is poison in that water" }, hint: "YAD — one syllable, and the д goes quiet at the end, so it comes out YAT (unit 6). MASCULINE. Covers both poison and an animal's venom; вредный from unit 53 is the adjective a learner already has." },
      ],
    },
    {
      id: "ru-u75l2",
      unit: 75,
      lesson: 2,
      title: "The air, the water and the ground",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the atmosphere, oxygen, a spring, a bog and peat, and say that something is extracted from the ground.",
      items: [
        { id: "ru-u75l2-atmosfera", type: "vocab", front: "атмосфера", reading: "atmosfera", meaning: "the atmosphere of the earth", accept: ["the atmosphere", "the air around the earth", "the earth's envelope of air"], example: { jp: "Атмосфера над большим городом совсем не такая чистая, как в лесу.", en: "The atmosphere over a big city is nothing like as clean as it is in a forest." }, drill: { jp: "Атмосфера над городом грязная", en: "The atmosphere over the city is dirty" }, hint: "at-mos-FE-ra — stress on FE. FEMININE (-а). The layer of air round the planet, and also the mood of a room or a meeting: «приятная атмосфера». воздух from unit 26 is the air you actually breathe." },
        { id: "ru-u75l2-kislorod", type: "vocab", front: "кислород", reading: "kislorod", meaning: "oxygen", accept: ["the oxygen", "what we breathe in", "the element oxygen"], example: { jp: "Деревья дают кислород, и поэтому в лесу воздух чистый.", en: "Trees give oxygen, and that is why the air in a forest is clean." }, drill: { jp: "Деревья дают нам кислород", en: "Trees give us oxygen" }, hint: "kis-la-ROT — stress on the last syllable, the о before it reduces to a, and the д at the end goes quiet (unit 6). MASCULINE, and ⚠️ no plural: it is a mass. From кислый, sour — the Russian name translates the Latin oxygenium word for word." },
        { id: "ru-u75l2-rodnik", type: "vocab", front: "родник", reading: "rodnik", meaning: "a spring in the ground", accept: ["a water spring", "water rising out of the earth", "a natural spring"], example: { jp: "В лесу есть родник, и вода в нём очень холодная даже летом.", en: "There is a spring in the forest, and the water in it is very cold even in summer." }, drill: { jp: "В лесу есть холодный родник", en: "There is a cold spring in the forest" }, hint: "rad-NIK — stress on the last syllable, and the о reduces to a. MASCULINE. Built on the род- root of родиться — water the ground gives birth to. Only of water coming up out of the earth. источник from unit 52 is a source of ANYTHING — information, money, heat — and a родник is the water kind you can drink from." },
        { id: "ru-u75l2-boloto", type: "vocab", front: "болото", reading: "boloto", meaning: "a bog", accept: ["a marsh", "a swamp", "the bog"], example: { jp: "За деревней начинается болото, и ходить туда одному нельзя.", en: "Beyond the village a bog begins, and you must not walk there alone." }, drill: { jp: "За деревней большое болото", en: "There is a big bog beyond the village" }, hint: "ba-LO-ta — stress on LO; the first о reduces to a and the last is barely there. NEUTER (-о). The adjective is болОтный. Figuratively a situation that has stopped moving — the same picture as застой from unit 69." },
        { id: "ru-u75l2-torf", type: "vocab", front: "торф", reading: "torf", meaning: "peat", accept: ["the peat", "peat for burning", "turf dug for fuel"], example: { jp: "Торф здесь добывают давно, и болото от этого стало меньше.", en: "Peat has been dug here for a long time, and the bog has got smaller because of it." }, drill: { jp: "Торф здесь добывают давно", en: "Peat has been dug here for a long time" }, hint: "TORF — one syllable. MASCULINE, and no plural. Dead plants pressed into the ground over centuries, cut out and burned. Russia's bogs are full of it, and a fire in dry торф can smoulder underground for months." },
        { id: "ru-u75l2-dobyvat", type: "vocab", front: "добывать", reading: "dobyvat", meaning: "to extract from the ground", accept: ["to mine", "to extract", "to win from the earth"], example: { jp: "Воду здесь добывают под землёй, и это стоит больших денег.", en: "Water here is got from under the ground, and that costs a lot of money." }, drill: { jp: "Здесь начали добывать воду", en: "They have begun extracting water here" }, hint: "da-by-VAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is добыть. Of anything won by effort out of the ground or out of life: добывать воду, добывать торф, добывать деньги. ⚠️ Historically from быть, but nothing of that meaning is left. ⚠️ The NOUN добыча «extraction» is carded at u87l3; a noun and the verb it comes from are two lexemes and both may be taught." },
      ],
    },
    {
      id: "ru-u75l3",
      unit: 75,
      lesson: 3,
      title: "The wild animals",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a wild animal and a predator, and talk about a wolf, a fox, a deer and a hare near a village.",
      items: [
        { id: "ru-u75l3-zver", type: "vocab", front: "зверь", reading: "zver", meaning: "a wild animal", accept: ["a wild beast", "a beast of the forest", "an untamed animal"], example: { jp: "В этом лесу живёт зверь, которого почти никто не видел.", en: "In that forest there lives a beast that almost nobody has seen." }, drill: { jp: "В лесу живёт большой зверь", en: "A big beast lives in the forest" }, hint: "ZVER — one syllable, and the ь keeps the р soft. ⚠️ MASCULINE despite the -ь (unit1.js §3). Only of a WILD animal, and usually a big one; животное from unit 6 is any animal at all, tame or not. ⚠️ The plural keeps the stress at the front: звЕри, but moves to the ending in зверЕй." },
        { id: "ru-u75l3-khishchnik", type: "vocab", front: "хищник", reading: "khishchnik", meaning: "a predator", accept: ["a beast of prey", "the predator", "an animal that hunts others"], example: { jp: "Волк здесь главный хищник, но людей он боится.", en: "The wolf is the main predator here, but it is afraid of people." }, drill: { jp: "Волк это очень опасный хищник", en: "The wolf is a very dangerous predator" }, hint: "KHISH-nik — stress on the first syllable, and щ is a long soft sh. MASCULINE. An animal that lives by taking other animals. Also said of a person or a company that takes without asking." },
        { id: "ru-u75l3-volk", type: "vocab", front: "волк", reading: "volk", meaning: "a wolf", accept: ["the wolf", "a grey wolf", "wolves"], example: { jp: "Зимой волк подходит к деревне, и люди боятся за собак.", en: "In winter the wolf comes up to the village, and people fear for their dogs." }, drill: { jp: "Зимой волк подходит к деревне", en: "In winter the wolf comes up to the village" }, hint: "VOLK — one syllable. MASCULINE. ⚠️ The plural moves the stress onto the ending: вОлки but волкОв. The she-wolf is волчИца. «Волка ноги кормят» — the wolf is fed by its legs — is said of anyone who has to keep moving to eat." },
        { id: "ru-u75l3-lisa", type: "vocab", front: "лиса", reading: "lisa", meaning: "a fox", accept: ["the fox", "a red fox", "foxes"], example: { jp: "Лиса приходит к дому ночью, и собака её всегда слышит.", en: "The fox comes up to the house at night, and the dog always hears it." }, drill: { jp: "Лиса приходит к дому ночью", en: "The fox comes up to the house at night" }, hint: "li-SA — stress on the last syllable. FEMININE (-а), and ⚠️ the stress moves back in the plural: лИсы. In Russian stories the лиса is the clever one, so calling a person «лиса» means sly, never pretty." },
        { id: "ru-u75l3-olen", type: "vocab", front: "олень", reading: "olen", meaning: "a deer", accept: ["a reindeer", "the deer", "a stag"], example: { jp: "Олень стоял у дороги долго и совсем не боялся машины.", en: "The deer stood by the road for a long time and was not at all afraid of the car." }, drill: { jp: "Олень стоял у самой дороги", en: "The deer stood right by the road" }, hint: "a-LEN — stress on the last syllable, and the о reduces to a. ⚠️ MASCULINE despite the -ь (unit1.js §3). Covers both the deer of a forest and the reindeer of the north; Russian only separates them when it matters — «северный олень»." },
        { id: "ru-u75l3-zayats", type: "vocab", front: "заяц", reading: "zayats", meaning: "a hare", accept: ["a rabbit", "the hare", "hares"], example: { jp: "Заяц сидел в траве совсем тихо и даже не убегал.", en: "The hare sat in the grass completely still and did not even run away." }, drill: { jp: "Заяц сидел в высокой траве", en: "The hare sat in the tall grass" }, hint: "ZA-yats — stress on the first syllable. MASCULINE, and ⚠️ the е in the middle DISAPPEARS as soon as an ending is added: заяц but зАйца, зАйцу. ⚠️ «Ехать зайцем» — to travel as a hare — is the everyday phrase for riding without a ticket." },
      ],
    },
    {
      id: "ru-u75l4",
      unit: 75,
      lesson: 4,
      title: "What is still wild",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a nature reserve, call an animal or a place wild, talk about protecting it and about a poacher, and say that a species is perishing or dying out.",
      items: [
        { id: "ru-u75l4-zapovednik", type: "vocab", front: "заповедник", reading: "zapovednik", meaning: "a nature reserve", accept: ["a reserve", "a protected area", "a national park"], example: { jp: "В заповеднике нельзя курить и нельзя ставить машину, и это правильно.", en: "In the reserve you may not smoke and may not park a car, and that is right." }, drill: { jp: "Это очень большой заповедник", en: "That is a very large reserve" }, hint: "za-pa-VED-nik — stress on VED, and both о reduce to a. MASCULINE. From заповедь, a commandment — land where the law says hands off. Russia has dozens and they are a point of national pride." },
        { id: "ru-u75l4-okhrana", type: "vocab", front: "охрана", reading: "okhrana", meaning: "the protecting of something", accept: ["protection", "safeguarding", "a guard detail"], example: { jp: "Охрана леса стоит дорого, но без неё зверей здесь не будет.", en: "Protecting the forest costs a lot, but without it there will be no animals here." }, drill: { jp: "Охрана леса стоит очень дорого", en: "Protecting the forest costs a great deal" }, hint: "akh-RA-na — stress on RA, and the о reduces to a. FEMININE (-а). Two senses in one word: the ACT of protecting («охрана природы») and the PEOPLE who guard a building. контроль from unit 71 is oversight, which is watching rather than protecting." },
        { id: "ru-u75l4-dikiy", type: "vocab", front: "дикий", reading: "dikiy", meaning: "wild", accept: ["untamed", "wild of an animal", "savage"], example: { jp: "Эта кошка дикая: она живёт у нас в саду, но в руки не идёт.", en: "That cat is wild: she lives in our garden but will not be handled." }, drill: { jp: "Это совсем дикий лес", en: "That is a completely wild wood" }, hint: "DI-kiy — stress on the first syllable. Of animals, of land and of behaviour: «дикий лес», «дикий человек». ⚠️ Also colloquially «huge» — «дикая цена», a crazy price." },
        { id: "ru-u75l4-brakoner", type: "vocab", front: "браконьер", reading: "brakoner", meaning: "a poacher", accept: ["an illegal hunter", "the poacher", "someone who hunts against the law"], example: { jp: "Браконьер приходит сюда ночью, поэтому охрана работает и летом.", en: "The poacher comes here at night, so the guards work in summer too." }, drill: { jp: "Браконьер приходит в лес ночью", en: "The poacher comes into the forest at night" }, hint: "bra-ka-NYER — stress on the last syllable, both о reduce to a, and the ь makes the н soft. MASCULINE. A French loanword (braconnier): someone who hunts or fishes where the law forbids it. In Russian the word carries real anger, because the заповедник system is a point of pride." },
        { id: "ru-u75l4-pogibat", type: "vocab", front: "погибать", reading: "pogibat", meaning: "to perish", accept: ["to die in a disaster", "to be killed", "to be lost"], example: { jp: "Без чистой воды рыба в реке погибает очень быстро.", en: "Without clean water the fish in the river perish very quickly." }, drill: { jp: "Здесь могут погибать птицы", en: "Birds can perish here" }, hint: "pa-gi-BAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is погибнуть. ⚠️ Never of ordinary death from age — that is умирать, which this course does not card because смерть is already taught at unit 59. погибать is dying in a fire, a war or a flood." },
        { id: "ru-u75l4-vymirat", type: "vocab", front: "вымирать", reading: "vymirat", meaning: "to die out as a species", accept: ["to become extinct", "to die off", "to disappear for good"], example: { jp: "Эти птицы вымирают, и поэтому их нельзя трогать даже в саду.", en: "Those birds are dying out, and that is why they must not be touched even in a garden." }, drill: { jp: "Без охраны звери начинают вымирать", en: "Without protection the animals begin to die out" }, hint: "vy-mi-RAT — stress on the last syllable. Imperfective infinitive; the perfective is вымереть. Of a whole SPECIES or a whole village, never of one creature — one animal погибает, this lesson, or исчезает, unit 69." },
      ],
    },
  ],
};
