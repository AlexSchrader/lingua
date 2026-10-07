// RU Unit 101 — Усиление и преуменьшение ("Intensifying and playing down") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 1 (u98–u110). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit61.js §1–§8, and
// ru/unit98.js §1–§7d for this band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Nuance and degree" AND BOTH HALVES ARE SPENT.
// u47 Сравнение и возможность owns comparison as GRAMMAR (чем · более · менее ·
// самый · сравнение · степень); u68 Отвлечённые понятия owns the NOUNS of
// measure (мера · предел · масштаб · оттенок · глубина); u64 Неуверенность и
// оговорка owns hedging (вряд ли · пожалуй · видимо · смутный); u81 owns
// `нюанс`. RETHEMED to the ADVERB AND ADJECTIVE LAYER OF DEGREE — the measured
// hole: a learner had `очень` · `совсем` · `почти` · `едва` · `вполне` ·
// `отчасти` and no way to say exceedingly, barely, excessively, meagrely,
// twofold or by a good deal. Nothing here re-teaches a u47, u64 or u68 front.
//
// ⚠️ WHY THIS UNIT IS MOSTLY ADVERBS, AND IT IS A MEASUREMENT NOT A PREFERENCE.
// At B2 nearly every degree word in Russian is a derived adverb, and §D kills the
// derived ones whose base the course already teaches. Counted on this slot:
//   REFUSED, the taught word hands it over —
//     `значительно` (значит u19/u22) · `существенно` (существовать u52) ·
//     `сравнительно` (сравнение u47) · `преимущественно` (преимущество u70) ·
//     `предельно` (предел u68) · `порядком` (порядок u15) · `довольно`
//     (довольный u28) · `усиливать` (усилие u70) · `ослаблять` (слабый u20).
//   REFUSED on unit51.js §3's не+X rule — AND THIS ONE IS SUBTLE:
//     `незначительно` is не + значительно, and значительно was ALREADY refused
//     above. A не-form of an already-refused word is refused twice over.
//     `ничтожный` carries that job instead; it is not a не-form at all.
//   So the survivors are the Latinate adverbs and the un-derived Slavic ones,
//   which is what this unit teaches. The verb pair усиливать/ослаблять that the
//   title seems to promise CANNOT be carded in this language at this band; the
//   unit says so in `чрезмерный`'s hint and hands the job to examples.
//
// ⚠️ `заметно` ALLOWED, AND THE REASONING MATTERS because unit61.js §6 refused
// `замечать` against `замечание` (u39). That refusal stands: this is not it.
// `заметно` is the adverb of заметный, and "a remark" hands a learner nothing
// about "by an amount one can see". Different branch, different sense, and the
// readings are nowhere near each other.
//
// ⚠️ `подавляющий` WAS DROPPED, and for a reason worth recording: its natural
// Russian collocate is `подавляющее большинство`, and `большинство` is u109's
// front — one unit down in this same block. Carding подавляющий here would have
// forced its only idiomatic drill to lean on a word the learner does not have
// yet. `колоссальный` fills the slot. The pair can be taught together at u109 in
// an example if a later seat wants them.
//
// ⚠️ ALSO DROPPED FOR COUNT AT 24, all legal: `немалый` · `сплошь` · `вконец` ·
// `дозировка` · `втридорога` · `насыщенный` · `всецело`'s partner `сугубо`
// (TAKEN, u83). Named so the next seat knows they are there.
//
// ⚠️ TWO NEGATIVE-POLARITY ADVERBS SIT IN ONE LESSON (`ничуть` and `вовсе`) AND
// THEIR GLOSSES ARE SPLIT ON PURPOSE: ничуть is "not in the least" and вовсе is
// "not at all, flatly". Neither accept entry repeats a phrase from the other,
// because `meaningVariants` would turn one shared fragment into one prompt with
// two right answers — unit61.js §7b.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT101 = {
  id: "ru-u101",
  lang: "ru",
  title: "Усиление и преуменьшение",
  order: 101,
  stage: "b2",
  lessons: [
    {
      id: "ru-u101l1",
      unit: 101,
      lesson: 1,
      title: "Turning it up",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something holds to a high degree — exceedingly, utterly, visibly, palpably, wholly — and call a thing enormous.",
      items: [
        { id: "ru-u101l1-chrezvychayno", type: "vocab", front: "чрезвычайно", reading: "chrezvychayno", meaning: "to an extreme degree", accept: ["exceedingly so", "to a quite exceptional extent", "beyond the ordinary measure"], example: { jp: "Вопрос чрезвычайно важный, однако решать его будут долго.", en: "The question is exceedingly important, yet it will take a long time to settle." }, drill: { jp: "Это чрезвычайно важный вопрос", en: "This is an exceedingly important question" }, hint: "chriz-vy-CHAY-na — stress on CHAY, the first е reduces to i and the final о to a. ADVERB. ⚠️ Related to the noun чрезвычайная ситуация, a state of emergency — the abbreviation ЧС is on every Russian news bulletin. Bookish: in speech Russians say очень." },
        { id: "ru-u101l1-krayne", type: "vocab", front: "крайне", reading: "krayne", meaning: "to the utmost degree", accept: ["in the extreme", "as far as the scale goes", "utterly so"], example: { jp: "Положение крайне тяжёлое, и помощи ждать пока не стоит.", en: "The situation is extremely grave, and there is no point waiting for help yet." }, drill: { jp: "Положение здесь крайне тяжёлое", en: "The situation here is extremely grave" }, hint: "KRAY-ne — stress on the first syllable. ADVERB, from край, an edge, which unit 90 taught as a region. ⚠️ Pairs almost only with NEGATIVE adjectives: крайне тяжёлый, крайне опасный, крайне недоволен. «Крайне хорошо» sounds wrong to a Russian ear." },
        { id: "ru-u101l1-zametno", type: "vocab", front: "заметно", reading: "zametno", meaning: "by an amount one can see", accept: ["visibly so", "by a margin that shows", "perceptibly"], example: { jp: "Качество заметно хуже, и покупатели это сразу поняли.", en: "The quality is noticeably worse, and the buyers understood that at once." }, drill: { jp: "Качество стало заметно хуже", en: "The quality has become noticeably worse" }, hint: "za-MET-na — stress on MET, and the final о reduces to a. ADVERB. ⚠️ Also used alone as a judgement: «Заметно!», You can tell! ⚠️ unit 61 refused `замечать` against `замечание` from unit 39; this is a different branch of the family and a different sense, so it stands." },
        { id: "ru-u101l1-oshchutimo", type: "vocab", front: "ощутимо", reading: "oshchutimo", meaning: "by an amount that is felt in practice", accept: ["tangibly so", "enough to make a real difference", "palpably"], example: { jp: "Налоги ощутимо больше, зато услуги стали лучше.", en: "The taxes are tangibly higher, but the services have got better." }, drill: { jp: "Налоги здесь ощутимо больше", en: "The taxes here are tangibly higher" }, hint: "a-shchu-TI-ma — stress on TI, the о reduces to a, and the щ is the long soft sound from unit 3. ADVERB. From `ощущение` in unit 86. ⚠️ Narrower than `заметно`: заметно is what you can SEE, ощутимо is what you FEEL — a difference in your pocket or your body." },
        { id: "ru-u101l1-vsetselo", type: "vocab", front: "всецело", reading: "vsetselo", meaning: "wholly and with nothing held back", accept: ["entirely and without reserve", "in full and without qualification", "root and branch"], example: { jp: "Он всецело согласен с этим выводом, хотя раньше спорил.", en: "He wholly agrees with this conclusion, although he used to argue." }, drill: { jp: "Он всецело согласен с выводом", en: "He wholly agrees with the conclusion" }, hint: "fsi-tse-LO — stress on the last syllable, the в is said f before с, and the е reduces to i. ADVERB. A compound of весь and `целый`, both from unit 24's family. ⚠️ Bookish, and it pairs with agreement and devotion: всецело согласен, всецело посвятить себя." },
        { id: "ru-u101l1-kolossalnyy", type: "vocab", front: "колоссальный", reading: "kolossalnyy", meaning: "enormous beyond ordinary scale", accept: ["vast out of all proportion", "immense on any reckoning", "of a size that dwarfs the usual"], example: { jp: "Колоссальный опыт этого мастера видно сразу.", en: "This master craftsman's colossal experience shows at once." }, drill: { jp: "Это был колоссальный успех", en: "It was a colossal success" }, hint: "ka-la-SAL-nyy — stress on SAL, both о reduce to a, and the сс is held. ADJECTIVE. ⚠️ Russian uses it far more freely than English uses colossal — колоссальная разница, колоссальные деньги — so it is a normal intensifier here, not a flourish." },
      ],
    },
    {
      id: "ru-u101l2",
      unit: 101,
      lesson: 2,
      title: "Turning it down",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something barely holds — negligible, slightly, moderately, not in the least, flatly not — and call an amount pitifully small.",
      items: [
        { id: "ru-u101l2-nichtozhnyy", type: "vocab", front: "ничтожный", reading: "nichtozhnyy", meaning: "so small as to count for nothing", accept: ["negligible in size", "too slight to matter at all", "vanishingly small"], example: { jp: "Прибыль была ничтожная, и радоваться никто не стал.", en: "The profit was negligible, and nobody set about celebrating." }, drill: { jp: "Такой процент совсем ничтожный", en: "Such a percentage is quite negligible" }, hint: "nich-TOZH-nyy — stress on TOZH. ADJECTIVE. ⚠️ ALSO USED OF PEOPLE and then it is savage: ничтожный человек is a worthless man, and ничтожество is a nobody. ⚠️ It is NOT a не-form, which is why it is carded where `незначительно` could not be — see this unit's header." },
        { id: "ru-u101l2-slegka", type: "vocab", front: "слегка", reading: "slegka", meaning: "by a slight amount and no more", accept: ["by a small margin only", "a little and no further", "faintly so"], example: { jp: "Он слегка улыбнулся, однако молчать ему было проще.", en: "He smiled slightly, yet it was easier for him to keep quiet." }, drill: { jp: "Он слегка улыбнулся в ответ", en: "He smiled slightly in reply" }, hint: "slikh-KA — stress on the last syllable, the е reduces to i, and ⚠️ THE г IS SAID AS kh HERE, one of the handful of words where it is: slikh-KA, not sleg-KA. ADVERB, from лёгкий, which unit 19 glossed \"simple\"." },
        { id: "ru-u101l2-umerenno", type: "vocab", front: "умеренно", reading: "umerenno", meaning: "to a moderate degree", accept: ["in measured amount", "without going far either way", "temperately"], example: { jp: "Он живёт умеренно, хотя денег у него достаточно.", en: "He lives moderately, although he has money enough." }, drill: { jp: "Он живёт очень умеренно", en: "He lives very moderately" }, hint: "u-ME-ren-na — stress on ME, and the final о reduces to a. ADVERB. From мера, a measure, from unit 68 — but мера is the NOUN of measure and this is the adverb of умеренный, moderate; the sense has moved from measuring to restraint. ⚠️ The weather forecast's умеренный ветер is a moderate wind." },
        { id: "ru-u101l2-nichut", type: "vocab", front: "ничуть", reading: "nichut", meaning: "not in the least", accept: ["not even slightly", "to no degree whatever", "not the smallest bit"], example: { jp: "Мне ничуть не жаль, что всё стало именно так.", en: "I am not in the least sorry that it all turned out exactly this way." }, drill: { jp: "Мне ничуть не жаль его", en: "I am not in the least sorry for him" }, hint: "ni-CHUT — stress on the last syllable. ADVERB, and ⚠️ IT REQUIRES THE не: ничуть не жаль, ничуть не хуже. Russian doubles its negatives, as unit 23 taught with никто and нигде. From `чуть` in unit 46." },
        { id: "ru-u101l2-vovse", type: "vocab", front: "вовсе", reading: "vovse", meaning: "flatly not, contrary to what was supposed", accept: ["in no way whatsoever", "not by any means", "quite the opposite of what was assumed"], example: { jp: "Он вовсе не против, просто говорить об этом ему трудно.", en: "He is not against it at all — it is simply hard for him to talk about." }, drill: { jp: "Он вовсе не против этого", en: "He is not against this at all" }, hint: "VOF-se — stress on the first syllable, and the в before с is said f. ADVERB, and ⚠️ LIKE ничуть IT NEEDS THE не. Its force is CORRECTIVE: вовсе не says you had assumed wrong, where ничуть не simply measures. The phrase вовсе нет is a flat No, not at all." },
        { id: "ru-u101l2-mizernyy", type: "vocab", front: "мизерный", reading: "mizernyy", meaning: "pitifully small in amount", accept: ["wretchedly meagre", "insultingly little", "paltry"], example: { jp: "Мизерная пенсия здесь обычная, и жаловаться никто не ходит.", en: "A paltry pension is normal here, and nobody goes and complains." }, drill: { jp: "Мизерный доход здесь не редкость", en: "A paltry income is no rarity here" }, hint: "mi-ZER-nyy — stress on ZER. ADJECTIVE. ⚠️ Stress warning: мИзерный with first-syllable stress is the older bookish variant and you will hear it, but ми-ZER-nyy is the modern standard. Of money and rations above all: мизерная зарплата." },
      ],
    },
    {
      id: "ru-u101l3",
      unit: 101,
      lesson: 3,
      title: "Too much and too little",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that there is more of something than is proper or needed, or less than is enough — excessive, surplus, a surplus, meagre, plentiful, an abundance.",
      items: [
        { id: "ru-u101l3-chrezmernyy", type: "vocab", front: "чрезмерный", reading: "chrezmernyy", meaning: "more than is proper", accept: ["going past what is seemly", "excessive to the point of fault", "immoderate in degree"], example: { jp: "Чрезмерное внимание к подробностям мешает видеть целое.", en: "Excessive attention to detail makes it hard to see the whole." }, drill: { jp: "Такой чрезмерный контроль только мешает", en: "Such excessive control only gets in the way" }, hint: "chriz-MER-nyy — stress on MER, and the first е reduces to i. ADJECTIVE, built on мера from unit 68 — past the measure. ⚠️ A JUDGEMENT, not a quantity: чрезмерный says somebody went too far. For a mere surplus use `избыточный`, the next card. ⚠️ The verb pair усиливать/ослаблять that this unit's subject seems to want cannot be carded in Russian at B2 — §D kills both; see the header." },
        { id: "ru-u101l3-izbytochnyy", type: "vocab", front: "избыточный", reading: "izbytochnyy", meaning: "more than is needed", accept: ["surplus to what is required", "over and above what is wanted", "redundant in quantity"], example: { jp: "Избыточный вес мешает ему работать, хотя врач говорил об этом давно.", en: "Excess weight makes it hard for him to work, although the doctor spoke about it long ago." }, drill: { jp: "У него большой избыточный вес", en: "He has a lot of excess weight" }, hint: "iz-BY-tach-nyy — stress on BY, and the о reduces to a. ADJECTIVE. ⚠️ THE PHRASE EVERY LEARNER MEETS: избыточный вес, excess weight, which is how a Russian doctor says it. Neutral where `чрезмерный` is a reproach." },
        { id: "ru-u101l3-izbytok", type: "vocab", front: "избыток", reading: "izbytok", meaning: "an amount over what is needed", accept: ["a surplus left on hand", "more of a thing than there is use for", "an oversupply"], example: { jp: "Избыток воды в почве мешает корням.", en: "A surplus of water in the soil hinders the roots." }, drill: { jp: "Избыток воды мешает корням", en: "A surplus of water hinders the roots" }, hint: "iz-BY-tak — stress on BY, and the final о reduces to a. MASCULINE, and ⚠️ the о DROPS in every other form: избыткА, избыткИ — the same class as `отец` from unit 10. The fixed phrase в избытке means in plenty." },
        { id: "ru-u101l3-skudnyy", type: "vocab", front: "скудный", reading: "skudnyy", meaning: "meagre and barely sufficient", accept: ["sparse and poor in amount", "thin and grudging", "scanty"], example: { jp: "Скудный урожай этого года легко объяснить: лета почти не было.", en: "This year's meagre harvest is easy to explain: there was almost no summer." }, drill: { jp: "Скудный урожай здесь не новость", en: "A meagre harvest is no news here" }, hint: "SKUD-nyy — stress on the first syllable. ADJECTIVE. ⚠️ Of food, land, light and information alike: скудный обед, скудные сведения, скудное освещение. Stronger than `мало` from unit 21 — скудный says there is barely enough to go on." },
        { id: "ru-u101l3-obilnyy", type: "vocab", front: "обильный", reading: "obilnyy", meaning: "plentiful and generous in amount", accept: ["coming in large quantity", "lavish in supply", "copious"], example: { jp: "Обильный дождь шёл всю неделю, и работать в поле было нельзя.", en: "Heavy rain fell all week, and it was impossible to work in the field." }, drill: { jp: "Здесь обильный дождь идёт редко", en: "Heavy rain falls here rarely" }, hint: "a-BIL-nyy — stress on BIL, and the о reduces to a. ADJECTIVE. ⚠️ ITS THREE STOCK COLLOCATES, and you will meet all of them: обильный дождь, обильный ужин, обильные осадки — which is the phrase a Russian weather forecast uses for heavy precipitation." },
        { id: "ru-u101l3-izobilie", type: "vocab", front: "изобилие", reading: "izobilie", meaning: "a great plenty of something", accept: ["abundance of a thing", "a lavish supply of it", "more than plenty"], example: { jp: "Такого изобилия здесь раньше не было, и люди это помнят.", en: "There was no such abundance here before, and people remember it." }, drill: { jp: "Изобилие товаров здесь совсем новое", en: "The abundance of goods here is quite new" }, hint: "i-za-BI-li-ye — stress on BI, and the о reduces to a. NEUTER (-ие). The noun beside `обильный`, the previous card, and the two are a pair worth learning together. ⚠️ Carries a faint sense of too much of a good thing: в изобилии." },
      ],
    },
    {
      id: "ru-u101l4",
      unit: 101,
      lesson: 4,
      title: "By how much exactly",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Give the size of a change in multiples and fractions — twofold, threefold, by half — and say to the greatest, the least or a fair old extent.",
      items: [
        { id: "ru-u101l4-vdvoe", type: "vocab", front: "вдвое", reading: "vdvoe", meaning: "by twice as much", accept: ["to double the extent", "two times over", "twofold"], example: { jp: "Расходы вдвое больше, чем мы считали, и денег уже не хватает.", en: "The costs are twice as high as we reckoned, and the money is already running short." }, drill: { jp: "Расходы вдвое больше чем раньше", en: "The costs are twice as high as before" }, hint: "VDVO-ye — stress on the first syllable. ADVERB, from два, unit 11. ⚠️ IT ONLY WORKS WITH A COMPARATIVE: вдвое больше, вдвое меньше, вдвое дороже. «Вдвое большой» is wrong — Russian needs the -ше or -ее form after it." },
        { id: "ru-u101l4-vtroe", type: "vocab", front: "втрое", reading: "vtroe", meaning: "by three times as much", accept: ["to treble the extent", "three times over", "threefold"], example: { jp: "Работы стало втрое больше, а людей столько же.", en: "There is three times as much work, and just as many people." }, drill: { jp: "Цена стала втрое больше за год", en: "The price became three times as high in a year" }, hint: "VTRO-ye — stress on the first syllable. ADVERB, from три, unit 11, and it takes a comparative exactly like `вдвое`. ⚠️ The series continues вчетверо, впятеро and then stops being used — above five Russian says в шесть раз." },
        { id: "ru-u101l4-napolovinu", type: "vocab", front: "наполовину", reading: "napolovinu", meaning: "by half and no further", accept: ["to the extent of one half", "half way through and no more", "to fifty per cent"], example: { jp: "Работа сделана только наполовину, и радоваться рано.", en: "The work is only half done, and it is too early to celebrate." }, drill: { jp: "Эта работа готова наполовину", en: "This work is half ready" }, hint: "na-pa-la-VI-nu — five syllables, stress on VI, and all three о reduce to a. ADVERB, built on половина, a half. ⚠️ Also of mixed origin and half-measures: он наполовину русский, he is half Russian. Written as ONE word, always." },
        { id: "ru-u101l4-maksimalno", type: "vocab", front: "максимально", reading: "maksimalno", meaning: "to the highest degree that can be managed", accept: ["as far as is possible", "up to the limit of what can be done", "at full stretch"], example: { jp: "Отчёт надо написать максимально точно и коротко.", en: "The report has to be written as precisely and briefly as possible." }, drill: { jp: "Говорите максимально просто и коротко", en: "Speak as simply and briefly as possible" }, hint: "mak-si-MAL-na — stress on MAL, and the final о reduces to a. ADVERB. ⚠️ MODERN RUSSIAN USES IT WHERE ENGLISH SAYS \"as … as possible\", and constantly: максимально быстро, максимально честно. It is the most useful word in this lesson." },
        { id: "ru-u101l4-minimalno", type: "vocab", front: "минимально", reading: "minimalno", meaning: "to the lowest degree that can be managed", accept: ["as little as can be arranged", "down to the barest level", "at the smallest possible extent"], example: { jp: "Он говорил минимально коротко, потому что объяснять ему было нельзя.", en: "He spoke as briefly as he could, because he was not allowed to explain." }, drill: { jp: "Здесь всё сделано минимально просто", en: "Everything here is done as simply as possible" }, hint: "mi-ni-MAL-na — stress on MAL, and the final о reduces to a. ADVERB, the mirror of `максимально` and far rarer. ⚠️ The related noun phrase is what you meet daily: минимальная зарплата, the minimum wage." },
        { id: "ru-u101l4-izryadno", type: "vocab", front: "изрядно", reading: "izryadno", meaning: "by a good deal", accept: ["to a fair old extent", "quite considerably", "by a sizeable amount"], example: { jp: "Он изрядно устал, хотя работал всего полдня.", en: "He was pretty thoroughly tired, although he had worked only half a day." }, drill: { jp: "Он изрядно устал за день", en: "He got pretty thoroughly tired over the day" }, hint: "iz-RYAD-na — stress on RYAD, and the final о reduces to a. ADVERB. ⚠️ Built on the same ряд- root as `разряд` from unit 100 but a world away in sense. Slightly old-fashioned and warm, the way English \"a fair bit\" is: изрядно устал, изрядно выпил." },
      ],
    },
  ],
};
