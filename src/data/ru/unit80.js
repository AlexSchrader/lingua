// RU Unit 80 — Деепричастия и залог ("Verbal adverbs and voice") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u74–u86). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, ru/unit74.js §1–§5, and ru/unit79.js §2 for how a
// grammar unit of this band is built.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Grammar 7 — passive, causative, indirect". The
// PASSIVE applies to Russian and is taught here. The CAUSATIVE does not: Russian
// has no causative form at all — it says «заставить кого-то сделать», a plain
// verb plus an infinitive, and `заставлять` cannot be carded because it is built
// on ставить (u57l1). So the slot's third subject is the other half of unit 79's
// deferral: the ДЕЕПРИЧАСТИЕ, the verbal adverb, which `ru/unit1.js` §5 and
// `ru/unit31.js` §2 both defer to B1 and which u79 did not have room for.
// ⛔ AND THE SAME EXCLUSION AS u79: NO PREFIXED VERBS OF MOTION. They are block
// 1's, taken at u63.
//
// ⚠️ A DEEPRICHASTIE CANNOT BE A FRONT, for exactly the reason a participle
// cannot (unit79.js §2): шепча and украв are INFLECTED FORMS of шептать and
// красть. So the 24 fronts are ordinary untaught verbs and the form is taught in
// each `hint`, used in each `example` where the probe can reach it, and named in
// the `canDo`. One lesson per job:
//     l1  -я on a MANNER verb      «дрожа от холода» — how it was done
//     l2  -я for SIMULTANEITY       «зевая, он смотрел на часы» — at the same time
//     l3  -в for a FINISHED action  «украв деньги, он уехал» — having done it
//     l4  the -ся PASSIVE           «земля пашется трактором» — on land verbs,
//                                   where Russian actually uses it
// ⚠️ MEASURED LIMIT ON THE EXAMPLES, recorded so the next seat does not read a
// gap as laziness: `scripts/scope-ru.mjs` strips suffixes and cannot reach a
// PREFIXED verbal adverb from its unprefixed infinitive — украв, ограбив,
// отомстив and утонув all read as out-of-scope against красть, грабить, мстить
// and тонуть. The -в form is therefore taught in the HINTS of l3 and the
// examples stay in forms the probe can verify. That is a tooling limit, not a
// gap in the teaching, and widening PARADIGM to cover it would mean entering
// forms of PERFECTIVE verbs this course does not card.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT80 = {
  id: "ru-u80",
  lang: "ru",
  title: "Деепричастия и залог",
  order: 80,
  stage: "b1",
  lessons: [
    {
      id: "ru-u80l1",
      unit: 80,
      lesson: 1,
      title: "The -я verbal adverb: how it was done",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Build the -я verbal adverb from a manner verb — дрожать → дрожа, качать → качая — and attach it to a main clause.",
      items: [
        { id: "ru-u80l1-sheptat", type: "vocab", front: "шептать", reading: "sheptat", meaning: "to whisper", accept: ["to speak in a whisper", "to murmur", "to breathe a word"], example: { jp: "Шептать в театре хуже, чем молчать: тебя слышат все.", en: "Whispering in the theatre is worse than keeping quiet: everyone hears you." }, drill: { jp: "В театре лучше не шептать", en: "In the theatre it is better not to whisper" }, hint: "shep-TAT — stress on the last syllable. Imperfective infinitive; the perfective is шепнуть. ⚠️ THE -я FORM: take the THEY form (шепчУТ), cut the -ут, add -а/-я → шепчА, «whispering». Its noun шёпот is NOT carded against it — unit1.js §D." },
        { id: "ru-u80l1-drozhat", type: "vocab", front: "дрожать", reading: "drozhat", meaning: "to tremble", accept: ["to shake", "to shiver", "to quiver"], example: { jp: "Дрожа от мороза, он только молчал и не хотел идти домой.", en: "Trembling with the frost, he just said nothing and did not want to go home." }, drill: { jp: "Он начал дрожать от мороза", en: "He began trembling with the frost" }, hint: "dra-ZHAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive. ⚠️ THE EXAMPLE IS THE WHOLE LESSON: дрожА is the -я form, it comes FIRST with a comma, and its subject is the subject of the main verb — «он» does both the trembling and the not-wanting. Russian never lets the two subjects differ." },
        { id: "ru-u80l1-siyat", type: "vocab", front: "сиять", reading: "siyat", meaning: "to shine", accept: ["to beam", "to gleam", "to radiate"], example: { jp: "Сияя от радости, она рассказала всем о свадьбе.", en: "Beaming with joy, she told everyone about the wedding." }, drill: { jp: "Снег может сиять на солнце", en: "Snow can shine in the sun" }, hint: "si-YAT — stress on the last syllable. Imperfective infinitive. Of the sun, of snow and of a face: «сияющие глаза». Its -я form is сияЯ, with two я in a row, which looks odd and is correct. свет from unit 15 is the light itself." },
        { id: "ru-u80l1-tayat", type: "vocab", front: "таять", reading: "tayat", meaning: "to melt", accept: ["to thaw", "to melt away", "to dissolve"], example: { jp: "Снег таял быстро, и улица стала совсем грязной.", en: "The snow was melting fast and the street became completely dirty." }, drill: { jp: "Снег начал таять в марте", en: "The snow began melting in March" }, hint: "TA-yat — stress on the first syllable. Imperfective infinitive; the perfective is растаять. ⚠️ Its THEY form is тАЮТ, so the -я form is тАЯ. Of snow, of sugar in tea, and of a crowd that is thinning out. лёд from unit 54 is the ice that does it." },
        { id: "ru-u80l1-dut", type: "vocab", front: "дуть", reading: "dut", meaning: "to blow", accept: ["to blow of wind", "to puff", "to be draughty"], example: { jp: "Ветер дул всю ночь, поэтому утром было очень холодно.", en: "The wind blew all night, so it was very cold in the morning." }, drill: { jp: "Ветер начал дуть сильнее", en: "The wind began blowing harder" }, hint: "DUT — one syllable. Imperfective infinitive. ⚠️ Its present tense drops nothing but changes vowel: дУЮ, дУешь, дУЮТ, so the -я form is дУЯ. Russian also says «здесь дует» with no subject at all — there is a draught here." },
        { id: "ru-u80l1-kachat", type: "vocab", front: "качать", reading: "kachat", meaning: "to rock", accept: ["to swing", "to sway", "to pump"], example: { jp: "Качая ребёнка, бабушка пела очень тихо.", en: "Rocking the child, the grandmother sang very quietly." }, drill: { jp: "Она начала качать ребёнка", en: "She began rocking the child" }, hint: "ka-CHAT — stress on the last syllable. Imperfective infinitive; the perfective is покачать. ⚠️ THREE SENSES IN ONE WORD: to rock a cradle, to pump water, and — in modern speech — to download, which unit 49's скачивать took over. Its -я form is качАЯ." },
      ],
    },
    {
      id: "ru-u80l2",
      unit: 80,
      lesson: 2,
      title: "The -я verbal adverb: two things at once",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use a -я verbal adverb for an action happening at the same time as the main one, with six everyday physical verbs.",
      items: [
        { id: "ru-u80l2-glotat", type: "vocab", front: "глотать", reading: "glotat", meaning: "to swallow", accept: ["to gulp", "to swallow down", "to take a gulp"], example: { jp: "Глотая слова, он рассказал всё за минуту.", en: "Swallowing his words, he told the whole story in a minute." }, drill: { jp: "Он начал глотать слова", en: "He began swallowing his words" }, hint: "gla-TAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is проглотить. ⚠️ «Глотать слова» is the fixed phrase for speaking too fast to be understood — and that is what the example is doing while it says so. горло from unit 53 is where it happens." },
        { id: "ru-u80l2-zhevat", type: "vocab", front: "жевать", reading: "zhevat", meaning: "to chew", accept: ["to munch", "to chew food", "to work your jaws"], example: { jp: "Жевать и говорить сразу нельзя, и это знает каждый ребёнок.", en: "Chewing and talking at once will not do, and every child knows it." }, drill: { jp: "Нельзя жевать и говорить сразу", en: "You cannot chew and talk at once" }, hint: "zhe-VAT — stress on the last syllable. Imperfective infinitive. ⚠️ Its stem changes outright in the present: жУЮ, жУёшь, жУЮТ, so the -я form is жУЯ — nothing of «жева-» survives. Same class as пить → пью from unit 58." },
        { id: "ru-u80l2-zevat", type: "vocab", front: "зевать", reading: "zevat", meaning: "to yawn", accept: ["to be yawning", "to give a yawn", "to let a chance slip"], example: { jp: "Зевая, он смотрел на часы и ждал перерыва.", en: "Yawning, he watched the clock and waited for the break." }, drill: { jp: "Он начал зевать на уроке", en: "He began yawning in the lesson" }, hint: "ze-VAT — stress on the last syllable. Imperfective infinitive; the perfective is зевнуть. ⚠️ Second sense, and it is live: to miss a chance through inattention — «не зевай!». Its -я form is зевАЯ." },
        { id: "ru-u80l2-chikhat", type: "vocab", front: "чихать", reading: "chikhat", meaning: "to sneeze", accept: ["to give a sneeze", "to be sneezing", "to keep sneezing"], example: { jp: "Чихая весь день, он работал и ничего об этом не говорил.", en: "Sneezing all day, he worked and said nothing about it." }, drill: { jp: "Он начал чихать утром", en: "He began sneezing in the morning" }, hint: "chi-KHAT — stress on the last syllable, ending in the scraping х from unit 1. Imperfective infinitive; the perfective is чихнуть. ⚠️ «Чихать я на это хотел» is a rude «I could not care less» — worth recognising and not worth saying. насморк from unit 53 is the cold that causes it." },
        { id: "ru-u80l2-pryatat", type: "vocab", front: "прятать", reading: "pryatat", meaning: "to hide something", accept: ["to put out of sight", "to tuck away", "to stow"], example: { jp: "Прятать деньги в книгах он начал ещё в школе.", en: "He began hiding money in books back at school." }, drill: { jp: "Он любит прятать деньги в книгах", en: "He likes hiding money in books" }, hint: "PRYA-tat — stress on the first syllable. Imperfective infinitive; the perfective is спрятать. ⚠️ Its present tense mutates т → ч: прЯЧУ, прЯЧЕШЬ, прЯЧУТ, so the -я form is прЯЧА. The reflexive прятаться is to hide yourself." },
        { id: "ru-u80l2-ronyat", type: "vocab", front: "ронять", reading: "ronyat", meaning: "to drop", accept: ["to let fall", "to let slip", "to keep dropping"], example: { jp: "Роняя всё из рук, он понял, что нужно наконец спать.", en: "Dropping everything out of his hands, he realised he finally needed to sleep." }, drill: { jp: "Нельзя ронять такие вещи", en: "Things like that must not be dropped" }, hint: "ra-NYAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is уронить. ⚠️ Only of letting something fall by accident; бросать from unit 57 is throwing on purpose. Its -я form is роняЯ." },
      ],
    },
    {
      id: "ru-u80l3",
      unit: 80,
      lesson: 3,
      title: "The -в verbal adverb: having done it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Build the -в verbal adverb from a finished action — украв, ограбив, утонув — and tell what happened after it.",
      items: [
        { id: "ru-u80l3-krast", type: "vocab", front: "красть", reading: "krast", meaning: "to steal", accept: ["to thieve", "to steal something", "to take without asking"], example: { jp: "Красть он не умеет и никогда не умел, и все об этом знают.", en: "He cannot steal and never could, and everyone knows it." }, drill: { jp: "Красть он не умеет", en: "He cannot steal" }, hint: "KRAST — one syllable. Imperfective infinitive; the perfective is украсть. ⚠️ THE -в FORM COMES FROM THE PERFECTIVE PAST: украл → украВ, «having stolen». Drop the -л, add -в. ⚠️ Different root from красивый (unit 19) and красный (unit 16) — крад-, not крас-, and its present tense shows it: крадУ, крадЁШЬ." },
        { id: "ru-u80l3-ubivat", type: "vocab", front: "убивать", reading: "ubivat", meaning: "to kill", accept: ["to murder", "to put to death", "to take a life"], example: { jp: "Убивать время в очереди он умеет лучше всех.", en: "He is better than anyone at killing time in a queue." }, drill: { jp: "Он умеет убивать время", en: "He knows how to kill time" }, hint: "u-bi-VAT — stress on the last syllable. Imperfective infinitive; the perfective is убить, whose -в form is убиВ. ⚠️ «Убивать время» is the same idiom as in English, and it is the kinder use of a hard word. погибать from unit 75 is the other side of it — dying rather than killing." },
        { id: "ru-u80l3-grabit", type: "vocab", front: "грабить", reading: "grabit", meaning: "to rob", accept: ["to loot", "to hold up", "to rob a place"], example: { jp: "Грабить банк в этом городе никто не хотел: все друг друга знают.", en: "Nobody wanted to rob a bank in that town: everybody knows everybody." }, drill: { jp: "Грабить банк никто не хотел", en: "Nobody wanted to rob a bank" }, hint: "GRA-bit — stress on the first syllable. Imperfective infinitive; the perfective is ограбить, whose -в form is ограбиВ. ⚠️ Takes a direct object in the ACCUSATIVE — грабить банк, грабить человека — unlike красть, which steals the THING and not the owner." },
        { id: "ru-u80l3-mstit", type: "vocab", front: "мстить", reading: "mstit", meaning: "to take revenge", accept: ["to avenge", "to get even", "to pay someone back"], example: { jp: "Мстить он не стал, зато больше с ними никогда не говорил.", en: "He did not take revenge, but he never spoke to them again." }, drill: { jp: "Мстить он не хотел", en: "He did not want to take revenge" }, hint: "MSTIT — one syllable, and ⚠️ it opens with мст, three consonants and no vowel. Imperfective infinitive; the perfective is отомстить, whose -в form is отомстиВ. Takes the DATIVE for the person — «мстить соседу» — unit 34's case. Its noun месть is not carded against it." },
        { id: "ru-u80l3-tonut", type: "vocab", front: "тонуть", reading: "tonut", meaning: "to drown", accept: ["to sink", "to go under", "to be drowning"], example: { jp: "Тонуть в этой реке можно даже летом, и об этом есть объявление.", en: "You can drown in that river even in summer, and there is a notice about it." }, drill: { jp: "Тонуть здесь может каждый", en: "Anyone can drown here" }, hint: "ta-NUT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is утонуть, whose -в form is утонуВ. ⚠️ One word for a person drowning and a boat sinking, and figuratively for drowning in work: «тонуть в работе»." },
        { id: "ru-u80l3-kipet", type: "vocab", front: "кипеть", reading: "kipet", meaning: "to be on the boil", accept: ["to seethe", "to bubble", "to boil over"], example: { jp: "Вода кипела уже минуту, а он всё стоял у окна и ничего не делал.", en: "The water had been on the boil for a minute, and he just stood by the window doing nothing." }, drill: { jp: "Вода начала кипеть", en: "The water began to boil" }, hint: "ki-PET — stress on the last syllable. Imperfective infinitive; the perfective is вскипеть. ⚠️ GLOSSED «to be on the boil» ON PURPOSE: варить from unit 58 is already «to boil», and the two would be one prompt with two answers otherwise. варить is what YOU do to the soup; кипеть is what the water does by itself. Of a person it means to be seething." },
      ],
    },
    {
      id: "ru-u80l4",
      unit: 80,
      lesson: 4,
      title: "The -ся passive, on the land",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what is done to a field without naming who does it — «земля пашется весной» — using six verbs of land and craft.",
      items: [
        { id: "ru-u80l4-seyat", type: "vocab", front: "сеять", reading: "seyat", meaning: "to sow", accept: ["to sow seed", "to plant seed", "to scatter seed"], example: { jp: "Сеять начинают в апреле, если земля уже тёплая.", en: "They begin sowing in April if the ground is already warm." }, drill: { jp: "Сеять начинают в апреле", en: "Sowing begins in April" }, hint: "SE-yat — stress on the first syllable. Imperfective infinitive; the perfective is посеять. ⚠️ THE -ся PASSIVE: «зерно сеется в апреле» — the grain is sown in April, with nobody named. Russian prefers this to a -нный participle for ongoing actions, and it is why «начинают» with no subject in the example means the same thing." },
        { id: "ru-u80l4-pakhat", type: "vocab", front: "пахать", reading: "pakhat", meaning: "to plough", accept: ["to till", "to plough a field", "to work the land"], example: { jp: "Пахать здесь трудно: земля полна камней, и машина ломается каждый год.", en: "Ploughing is hard here: the ground is full of stones and the machine breaks down every year." }, drill: { jp: "Пахать здесь очень трудно", en: "Ploughing is very hard here" }, hint: "pa-KHAT — stress on the last syllable. Imperfective infinitive. ⚠️ Its present mutates х → ш: пашУ, пАШЕШЬ, пАШУТ — so the passive is «земля пАШЕТСЯ». ⚠️ In modern slang «я пашу» means I work like a dog, and it is extremely common." },
        { id: "ru-u80l4-rubit", type: "vocab", front: "рубить", reading: "rubit", meaning: "to chop", accept: ["to fell", "to hack", "to cut with an axe"], example: { jp: "Рубить дерево у дома он не хотел, хотя дерево было совсем старое.", en: "He did not want to fell the tree by the house, although the tree was quite old." }, drill: { jp: "Рубить это дерево он не хотел", en: "He did not want to fell that tree" }, hint: "ru-BIT — stress on the last syllable. Imperfective infinitive; the perfective is срубить. ⚠️ Its present inserts an л in the I form: рублЮ, рУбишь, рУбят. резать from unit 29 is cutting with a knife; рубить needs an axe and a swing." },
        { id: "ru-u80l4-kosit", type: "vocab", front: "косить", reading: "kosit", meaning: "to mow", accept: ["to scythe", "to cut grass", "to mow a field"], example: { jp: "Косить траву здесь нужно два раза в год, иначе она станет совсем высокой.", en: "The grass here has to be mown twice a year, otherwise it gets completely high." }, drill: { jp: "Косить траву нужно летом", en: "The grass has to be mown in summer" }, hint: "ka-SIT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is скосить. ⚠️ Its passive is the natural way to say it: «трава кОсится два раза в год». Different root from касаться (unit 46) — кос-, not кас-." },
        { id: "ru-u80l4-pasti", type: "vocab", front: "пасти", reading: "pasti", meaning: "to graze animals", accept: ["to herd", "to tend a flock", "to put out to pasture"], example: { jp: "Пасти коров здесь умеет каждый, даже если он живёт в городе.", en: "Everyone here can herd cows, even someone who lives in town." }, drill: { jp: "Пасти коров умеет каждый", en: "Everyone can herd cows" }, hint: "pas-TI — stress on the last syllable. Imperfective infinitive. ⚠️ Its present is пасУ, пасЁШЬ, пасУТ, and the reflexive пастись is what the COWS do — «коровы пасутся», the cows are grazing. That is the -ся passive turning into a plain intransitive, which is exactly how Russian built it." },
        { id: "ru-u80l4-lepit", type: "vocab", front: "лепить", reading: "lepit", meaning: "to mould", accept: ["to sculpt", "to model in clay", "to shape by hand"], example: { jp: "Лепить из земли дети могут целый день, а мыть их потом нужно долго.", en: "Children can mould things out of earth all day, and washing them afterwards takes long." }, drill: { jp: "Дети любят лепить из земли", en: "Children like moulding things out of earth" }, hint: "le-PIT — stress on the last syllable. Imperfective infinitive; the perfective is слепить. ⚠️ Its present inserts an л like рубить: леплЮ, лЕпишь, лЕпят. Of clay, of snow — «лепить снежную бабу» is the Russian childhood — and of a face in скульптура from unit 55." },
      ],
    },
  ],
};
