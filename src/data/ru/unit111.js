// RU Unit 111 — Глобальные проблемы ("Global problems") — B2
// ─────────────────────────────────────────────────────────────────────────────
// FIRST UNIT OF B2 BLOCK 2 (u111–u123). Conventions: ru/unit1.js §1–§10 and
// §A–§D, ru/unit31.js, ru/unit51.js (§2b in particular), ru/unit74.js.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Environment and the global` AND IT SITS BEHIND u75.
// u75 Экология already shipped the environment as a SUBJECT: `экология` ·
// `отходы` · `загрязнение` · `ресурс` · `хищник` · `зверь` · `вымирать` ·
// `заповедник` · `свалка` · `атмосфера` · `охрана` · `отравлять`. u54 holds
// `климат` · `почва` · `планета` · `облако`; u87 holds `топливо` · `нефть` ·
// `сырьё`; u91 holds the weather disasters (`засуха` · `наводнение` · `стихия` ·
// `катастрофа` · `бедствие` · `ураган` · `ливень`); u15 holds `мусор`.
// So this unit CANNOT be "the environment". It is narrowed, per the crew brief,
// to THE GLOBAL PROBLEM — the mechanism of warming, what a chimney emits, what
// happens to a thing after you throw it away, and what the loss costs.
// ⚠️ THE ORGANISM IS NOT HERE. u127/u128 (block 3) own the living creature.
// Nothing in this unit names an animal or a body.
//
// ⚠️ SIX CANDIDATES REFUSED, each for a reason a front probe cannot see:
//   `соглашение`  — unit1.js §D, against `соглашаться` (u35). One lexeme, and a
//                   learner who knows "to agree" WOULD produce it for "an
//                   agreement". The climate summit is described with `квота`.
//   `выживание`   — §D, against `выживать` (u97).
//   `сохранение`  — §D, against `сохранять` (u49).
//   `вред`        — §D, against `вредный` (u53).
//   `потребление` — §D, against `потребитель` (u76).
//   `возобновляемый` — unit1.js §5: it is the PASSIVE PARTICIPLE of `возобновлять`
//                   (u66), i.e. an inflected form of a taught verb, which is
//                   never its own card. `устойчивый` carries "sustainable"
//                   instead and is a cleaner word for it anyway.
//   `окружающий`  — a participle again, and the phrase it exists for
//                   («окружающая среда») leans on `среда`, which is WEDNESDAY in
//                   this course (u17). Avoided entirely; `экосистема` does the job.
//   `ядерный`     — yielded to block 1's u104, which owns атом · молекула ·
//                   реактор · излучение · частица.
//
// ⚠️ ONE ALLOWED §D PAIR, RECORDED SO IT IS NOT "FIXED" LATER:
//   `выброс` alongside `выбрасывать` (u49). The judgement: выбрасывать is what
//   you do with rubbish, and a learner who knows it does NOT reach «an emission»
//   — they would build «выбрасывание». The environmental noun is a term of art
//   and the crew brief assigns it. Its hint names the verb explicitly.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT111 = {
  id: "ru-u111",
  lang: "ru",
  title: "Глобальные проблемы",
  order: 111,
  stage: "b2",
  lessons: [
    {
      id: "ru-u111l1",
      unit: 111,
      lesson: 1,
      title: "A warming planet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Explain global warming: the melting, the glaciers, carbon, the greenhouse effect and the ozone layer.",
      items: [
        { id: "ru-u111l1-poteplenie", type: "vocab", front: "потепление", reading: "poteplenie", meaning: "a warming", accept: ["global warming", "a rise in temperature", "the warming of the climate"], example: { jp: "Потепление климата уже меняет жизнь людей на севере.", en: "The warming of the climate is already changing how people in the north live." }, drill: { jp: "Потепление климата меняет жизнь на севере", en: "The warming of the climate is changing life in the north" }, hint: "pa-te-PLE-ni-ye — stress on PLE, and the first о reduces to a. NEUTER (-ие). Built on тепло (unit 16), so the word is readable the moment you see the stem: «a becoming-warm». ⚠️ «Глобальное потепление» is the fixed phrase for global warming, and Russian news uses it exactly as English does." },
        { id: "ru-u111l1-tayanie", type: "vocab", front: "таяние", reading: "tayanie", meaning: "a melting", accept: ["thawing", "the process of melting", "the melting away of ice"], example: { jp: "Таяние льда весной здесь начинается на месяц раньше, чем раньше.", en: "The melting of the ice in spring begins a month earlier here than it used to." }, drill: { jp: "Таяние льда начинается раньше", en: "The melting of the ice begins earlier" }, hint: "TA-ya-ni-ye — stress on the first syllable. NEUTER (-ие). From таять (unit 80, «to melt»), and this is the one place the course teaches the noun of a verb it already taught: it is allowed because the ACTION NOUN of a physical process is what a news report uses («таяние ледников») and no other word exists for it." },
        { id: "ru-u111l1-lednik", type: "vocab", front: "ледник", reading: "lednik", meaning: "a glacier", accept: ["an ice field", "a mountain glacier", "the glacier"], example: { jp: "Ледник в горах стал гораздо меньше за двадцать лет.", en: "The glacier in the mountains has become much smaller over twenty years." }, drill: { jp: "Ледник в горах стал меньше", en: "The glacier in the mountains has become smaller" }, hint: "led-NIK — stress on the last syllable, and the д before н stays hard. MASCULINE. From лёд (unit 16, «ice») — and note the ё becomes е under the stress shift, which is the ordinary Russian pattern and not an exception. ⚠️ Stress it wrong and you get LED-nik, an old word for a cold cellar." },
        { id: "ru-u111l1-uglerod", type: "vocab", front: "углерод", reading: "uglerod", meaning: "carbon", accept: ["the element carbon", "carbon as an element", "C the element"], example: { jp: "Углерод есть и в дереве, и в нефти, и в самом воздухе.", en: "There is carbon in wood, in oil and in the air itself." }, drill: { jp: "Углерод есть в нефти и в воздухе", en: "There is carbon in oil and in the air" }, hint: "ug-le-ROD — stress on the last syllable. MASCULINE. ⚠️ It LOOKS like it is built on `уголь` «coal» — and it is, historically — but уголь is NOT taught in this course on purpose: its reading folds to \"ugol\", which is already `угол` «a corner» (u12). So углерод is the only у-гл- word you meet, and it has no partner to confuse it with." },
        { id: "ru-u111l1-parnikovyy", type: "vocab", front: "парниковый", reading: "parnikovyy", meaning: "heat-trapping", accept: ["greenhouse of a gas", "greenhouse of an effect", "trapping the sun's heat"], example: { jp: "Парниковый газ держит тепло у земли, и климат меняется.", en: "Greenhouse gas holds heat near the ground, and the climate changes." }, drill: { jp: "Парниковый газ держит тепло у земли", en: "Greenhouse gas holds heat near the ground" }, hint: "par-ni-KO-vyy — stress on KO. An ADJECTIVE, and it is almost only ever used in two phrases: «парниковый эффект» and «парниковые газы». From парник, a cold frame for growing plants, which is not taught — you do not need it to use this word." },
        { id: "ru-u111l1-ozon", type: "vocab", front: "озон", reading: "ozon", meaning: "ozone", accept: ["the gas ozone", "ozone gas", "O3"], example: { jp: "Озон защищает нас от солнца, и это очень важно для жизни.", en: "Ozone protects us from the sun, and that is very important for life." }, drill: { jp: "Озон защищает нас от солнца", en: "Ozone protects us from the sun" }, hint: "a-ZON — stress on the last syllable, and the first о reduces to a. MASCULINE. ⚠️ An internationalism, so unit1.js §9's rule applies: the gloss is \"ozone\" and not \"ozon\", which is what the reading would be — a card glossed to its own transliteration is a free pass. «Озоновый слой» is the ozone layer." },
      ],
    },
    {
      id: "ru-u111l2",
      unit: 111,
      lesson: 2,
      title: "What comes out of the chimney",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about emissions, exhaust, biofuel, solar and wind power, and an emissions quota.",
      items: [
        { id: "ru-u111l2-vybros", type: "vocab", front: "выброс", reading: "vybros", meaning: "an emission", accept: ["a discharge into the air", "an emission of gas", "a release of waste"], example: { jp: "Выброс газа с завода видно даже из города.", en: "The gas emission from the plant is visible even from the town." }, drill: { jp: "Выброс газа с завода видно из города", en: "The gas emission from the plant is visible from the town" }, hint: "VY-bras — stress on the first syllable, and the final о reduces to a. MASCULINE. ⚠️ Related to `выбрасывать` (u49, «to throw out») and NOT interchangeable with it: выбрасывать is what you do with rubbish; a выброс is what a chimney or a pipe releases. In the news it is nearly always plural — «выбросы в атмосферу»." },
        { id: "ru-u111l2-vykhlop", type: "vocab", front: "выхлоп", reading: "vykhlop", meaning: "exhaust", accept: ["exhaust fumes", "a car's exhaust", "the exhaust gas"], example: { jp: "Выхлоп старых машин — главная причина плохого воздуха в центре.", en: "The exhaust of old cars is the main cause of bad air in the centre." }, drill: { jp: "Выхлоп старых машин главная причина плохого воздуха", en: "Exhaust from old cars is the main cause of bad air" }, hint: "VY-khlap — stress on the first syllable, with the scraping х and the final о reducing to a. MASCULINE. ⚠️ Narrower than `выброс` in this lesson: a выхлоп comes out of an ENGINE, a выброс out of anything. «Выхлопные газы» is the full technical phrase." },
        { id: "ru-u111l2-biotoplivo", type: "vocab", front: "биотопливо", reading: "biotoplivo", meaning: "biofuel", accept: ["fuel made from plants", "bio-fuel", "plant-based fuel"], example: { jp: "Биотопливо делают из растений, и в нём нет нефти.", en: "Biofuel is made from plants, and there is no oil in it." }, drill: { jp: "Биотопливо делают из растений", en: "Biofuel is made from plants" }, hint: "bi-a-TO-pli-va — stress on TO, with both unstressed о reducing to a. NEUTER (-о). A transparent compound of био- and `топливо` (u87, «fuel»), so you can read it before you have met it — which is the point of carding it: Russian builds its environmental vocabulary this way." },
        { id: "ru-u111l2-solnechnyy", type: "vocab", front: "солнечный", reading: "solnechnyy", meaning: "solar", accept: ["of the sun", "sunny", "sun-powered"], example: { jp: "Солнечный свет здесь сильный даже зимой, и люди это хорошо знают.", en: "The sunlight here is strong even in winter, and people know it well." }, drill: { jp: "Солнечный свет здесь сильный даже зимой", en: "The sunlight here is strong even in winter" }, hint: "SOL-nech-nyy — stress on the first syllable, and ⚠️ THE л IS SILENT, exactly as it is in солнце (unit 6's reading rules): say SO-nech-nyy. TWO SENSES: «солнечный день» is a sunny day, «солнечная энергия» is solar power." },
        { id: "ru-u111l2-vetryanoy", type: "vocab", front: "ветряной", reading: "vetryanoy", meaning: "wind-powered", accept: ["wind of a turbine", "driven by wind", "of a windmill"], example: { jp: "Ветряной парк стоит в поле за деревней и работает тихо.", en: "The wind farm stands in a field beyond the village and works quietly." }, drill: { jp: "Ветряной парк стоит в поле за деревней", en: "The wind farm stands in a field beyond the village" }, hint: "vet-rya-NOY — stress on the last syllable. From ветер (unit 16, «wind»), and the е drops out in the stem — ветер → ветр-, the ordinary Russian pattern. ⚠️ There is a near-twin `ветреный` «windy of weather», stressed VET-re-nyy, which this course does not card; ветряной is the MACHINE word." },
        { id: "ru-u111l2-kvota", type: "vocab", front: "квота", reading: "kvota", meaning: "an emissions quota", accept: ["a permitted limit", "an allocated share", "a cap on emissions"], example: { jp: "Квота на выброс газа для каждой страны своя.", en: "The quota for gas emissions is different for every country." }, drill: { jp: "Квота на выброс газа для каждой страны своя", en: "The emissions quota is different for every country" }, hint: "KVO-ta — stress on the first syllable. FEMININE (-а). ⚠️ The word that does the work of «climate agreement» in this unit, because `соглашение` is refused against `соглашаться` (u35) — see the header. Also used of jobs, places at a university and fishing rights." },
      ],
    },
    {
      id: "ru-u111l3",
      unit: 111,
      lesson: 3,
      title: "What happens after you throw it away",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about recycling, sorting waste, packaging, plastic, single-use things and reclaimed material.",
      items: [
        { id: "ru-u111l3-pererabotka", type: "vocab", front: "переработка", reading: "pererabotka", meaning: "recycling", accept: ["reprocessing", "the processing of waste", "working something up again"], example: { jp: "Переработка стекла в этом городе работает уже десять лет.", en: "Glass recycling has been running in this town for ten years already." }, drill: { jp: "Переработка стекла работает здесь десять лет", en: "Glass recycling has been running here for ten years" }, hint: "pe-re-ra-BOT-ka — stress on BOT. FEMININE (-а). ⚠️ TWO SENSES AND THE SECOND ONE WILL SURPRISE YOU: recycling, and WORKING OVERTIME («переработка» on a payslip). Context separates them completely. Built on работа (unit 8) with пере- «re-, over-»." },
        { id: "ru-u111l3-sortirovka", type: "vocab", front: "сортировка", reading: "sortirovka", meaning: "sorting", accept: ["the sorting of things", "separation into kinds", "sorting out"], example: { jp: "Сортировка мусора дома занимает две минуты в день.", en: "Sorting rubbish at home takes two minutes a day." }, drill: { jp: "Сортировка мусора занимает две минуты в день", en: "Sorting rubbish takes two minutes a day" }, hint: "sar-ti-ROV-ka — stress on ROV, and the first о reduces to a. FEMININE (-а). ⚠️ This is the everyday word a Russian flat actually needs — «сортировка мусора», separating your rubbish — and `мусор` itself is already taught at u15." },
        { id: "ru-u111l3-upakovka", type: "vocab", front: "упаковка", reading: "upakovka", meaning: "packaging", accept: ["a wrapper", "the packing", "a package"], example: { jp: "Упаковка часто тяжелее и больше, чем сам товар внутри.", en: "The packaging is often heavier and bigger than the goods inside it." }, drill: { jp: "Упаковка часто больше, чем товар внутри", en: "The packaging is often bigger than the goods inside" }, hint: "u-pa-KOV-ka — stress on KOV. FEMININE (-а). ⚠️ Covers both the MATERIAL (packaging in general) and ONE WRAPPER you hold in your hand, which English splits. Its verb упаковывать is not carded." },
        { id: "ru-u111l3-plastik", type: "vocab", front: "пластик", reading: "plastik", meaning: "plastic", accept: ["the material plastic", "plastic as a material", "a plastic"], example: { jp: "Пластик в море не исчезает, он только становится меньше.", en: "Plastic in the sea does not disappear; it only becomes smaller." }, drill: { jp: "Пластик в море не исчезает", en: "Plastic in the sea does not disappear" }, hint: "PLAS-tik — stress on the first syllable. MASCULINE. ⚠️ The NOUN. The adjective is пластиковый («пластиковый пакет», a plastic bag), which is not carded — you build it the ordinary way. Do not confuse with `пластинка` (u96), a vinyl record." },
        { id: "ru-u111l3-odnorazovyy", type: "vocab", front: "одноразовый", reading: "odnorazovyy", meaning: "single-use", accept: ["disposable", "for one use only", "throwaway"], example: { jp: "Одноразовый стакан живёт пять минут, а потом триста лет.", en: "A single-use cup lives for five minutes, and then for three hundred years." }, drill: { jp: "Одноразовый стакан живёт пять минут", en: "A single-use cup lives for five minutes" }, hint: "ad-na-RA-za-vyy — stress on RA, and every unstressed о reduces to a. A transparent compound of один (unit 11) and раз (unit 21): «one-time». ⚠️ Its opposite многоразовый «reusable» is built the same way from много, and once you see the pattern you can make both." },
        { id: "ru-u111l3-vtorsyryo", type: "vocab", front: "вторсырьё", reading: "vtorsyryo", meaning: "reclaimed material", accept: ["recyclable material", "secondary raw material", "scrap for reuse"], example: { jp: "Вторсырьё можно сдавать в магазин и получать за него деньги.", en: "Reclaimed material can be handed in at a shop and you get money for it." }, drill: { jp: "Вторсырьё можно сдавать в магазин", en: "Reclaimed material can be handed in at a shop" }, hint: "vtar-sy-RYO — stress on the final РЁ, which carries the ё and therefore the stress by definition (unit1.js §7 — ё is always stressed in Russian, so writing it IS marking the stress). NEUTER (-ё). ⚠️ A SOVIET-STYLE CLIPPED COMPOUND: второй + `сырьё` (u87, «raw material»), squeezed into one word. Russian makes institutional vocabulary this way and you will meet many more." },
      ],
    },
    {
      id: "ru-u111l4",
      unit: 111,
      lesson: 4,
      title: "The living planet, and what the loss costs",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about deforestation, biodiversity, desertification, an ecosystem, sustainability and consequences.",
      items: [
        { id: "ru-u111l4-vyrubka", type: "vocab", front: "вырубка", reading: "vyrubka", meaning: "felling", accept: ["deforestation", "logging", "the cutting down of trees"], example: { jp: "Вырубка леса здесь шла двадцать лет, и теперь поле пустое.", en: "The felling of the forest here went on for twenty years, and now the field is empty." }, drill: { jp: "Вырубка леса шла здесь двадцать лет", en: "The felling of the forest went on here for twenty years" }, hint: "VY-rup-ka — stress on the first syllable, and the б before к devoices to p (unit 6). FEMININE (-а). From рубить (unit 80, «to chop») with вы-. ⚠️ TWO SENSES: the ACT of felling, and the CLEARING it leaves behind — «идти по вырубке»." },
        { id: "ru-u111l4-bioraznoobrazie", type: "vocab", front: "биоразнообразие", reading: "bioraznoobrazie", meaning: "biodiversity", accept: ["the variety of living things", "biological diversity", "species diversity"], example: { jp: "Биоразнообразие в реке стало меньше, и рыбы почти нет.", en: "Biodiversity in the river has decreased, and there is almost no fish." }, drill: { jp: "Биоразнообразие в реке стало меньше", en: "Biodiversity in the river has decreased" }, hint: "bi-a-raz-na-a-BRA-zi-ye — eight syllables, stress on BRA, every unstressed о reducing to a. NEUTER (-ие). ⚠️ THE LONGEST WORD IN THIS UNIT, and it is built out of pieces you already have: био- + разный (unit 40) + образ (u68). Say it slowly in three chunks: био-разно-образие." },
        { id: "ru-u111l4-opustynivanie", type: "vocab", front: "опустынивание", reading: "opustynivanie", meaning: "desertification", accept: ["turning into desert", "the spread of desert", "becoming a desert"], example: { jp: "Опустынивание идёт медленно, но поля там уже не работают.", en: "Desertification advances slowly, but the fields there no longer work." }, drill: { jp: "Опустынивание идёт медленно", en: "Desertification advances slowly" }, hint: "a-pus-TY-ni-va-ni-ye — stress on TY, and the first о reduces to a. NEUTER (-ие). Built on пустыня (unit 90, «a desert»). ⚠️ The pattern о- + noun + -ивание = «the process of becoming that thing», and it is how Russian names slow processes: a word you can decode even if you never learnt it." },
        { id: "ru-u111l4-ekosistema", type: "vocab", front: "экосистема", reading: "ekosistema", meaning: "an ecosystem", accept: ["a natural system", "the ecosystem", "a system of living things"], example: { jp: "Экосистема реки меняется, если убрать из неё один вид.", en: "The ecosystem of a river changes if you remove one species from it." }, drill: { jp: "Экосистема реки меняется очень быстро", en: "The ecosystem of a river changes very quickly" }, hint: "e-ka-sis-TE-ma — stress on TE, with the hard э at the front (unit 2). FEMININE (-а). ⚠️ The course deliberately uses THIS and not «окружающая среда» for «the environment», because `среда` means WEDNESDAY here (u17) and the phrase would teach a trap. Also note `экология` is already taught at u75 — экосистема is the SYSTEM, экология the STUDY." },
        { id: "ru-u111l4-ustoychivyy", type: "vocab", front: "устойчивый", reading: "ustoychivyy", meaning: "sustainable", accept: ["stable", "resistant", "able to keep going"], example: { jp: "Устойчивый стол не качается, и это первый смысл этого слова.", en: "A sturdy table does not wobble, and that is the word's first sense." }, drill: { jp: "Устойчивый стол не качается", en: "A sturdy table does not wobble" }, hint: "us-TOY-chi-vyy — stress on TOY. From стоять (unit 29) with у-: «able to stand». ⚠️ TWO SENSES AND THE SECOND ONE IS THE EVERYDAY ONE: «устойчивый стол» is a table that does not wobble, «устойчивое развитие» is sustainable development. The course uses устойчивый and NOT возобновляемый, which is a participle of a verb you already know (u66) — see the header." },
        { id: "ru-u111l4-posledstvie", type: "vocab", front: "последствие", reading: "posledstvie", meaning: "an after-effect", accept: ["a knock-on effect", "a lasting fall-out", "what follows on from something"], example: { jp: "Последствие этого решения будет видно только через много лет.", en: "The consequence of this decision will be visible only after many years." }, drill: { jp: "Последствие этого решения будет видно через много лет", en: "The consequence of this decision will be visible after many years" }, hint: "pas-LED-stvi-ye — stress on LED, and the first о reduces to a. NEUTER (-ие). ⚠️ Nearly always PLURAL in real Russian — «последствия» — and usually BAD: a последствие is a consequence you did not want. ⚠️ `следствие` (u52) already owns the gloss «a consequence» and `вследствие` (u62) the preposition, so this card is prompted as «an after-effect». `результат` (u30) is a neutral result and `исход` (u66) is how a thing turns out. Built on после «after»." },
      ],
    },
  ],
};
