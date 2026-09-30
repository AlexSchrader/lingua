// RU Unit 57 — Вещи и их место ("Things and where they are") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u51–u60). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 8 (A2)` — no subject named. See unit51.js.
// This unit and u58–u60 are the COVERAGE TAIL, which is block 3's alone and
// collides with nothing block 2 was assigned.
//
// THE MEASURED HOLE, AND IT IS THE MOST EMBARRASSING ONE IN THE LANGUAGE. A1 and
// A2 block 1 between them taught 960 words and NOT ONE OF THE THREE POSTURE VERBS.
// Measured on this branch before authoring:
//     `сидеть` to be sitting     — taught nowhere. u31l4 has the PERFECTIVE `сесть`
//                                   "to sit down", which is the moment, not the state.
//     `лежать` to be lying       — taught nowhere. u29 has `ложиться`, lying DOWN.
//     `стоять` to be standing    — taught nowhere. u31l4 has `встать`, standing UP.
//     `открывать` / `закрывать`  — BOTH taught nowhere, in either aspect.
//     `мыть` to wash a thing     — taught nowhere. u29 has `стирать` (laundry) and
//                                   `умываться` (your own face).
// A learner could say they had sat down and could not say they were sitting. The
// whole unit is that class of verb: twelve more everyday physical actions, plus the
// four washing-up nouns the kitchen needed (u29 gave нож · ложка · вилка ·
// тарелка and stopped).
//
// ★ HOW A VERB DRILL WORKS IN THIS LANGUAGE, and it is worth stating once. A drill
//   must contain the front AS A WHOLE WORD — `findFrontInExample` in
//   src/store/cardRouting.js uses whole-word matching for every non-Japanese
//   language, so a conjugated form does NOT satisfy it, and the card silently stops
//   routing cloze and sentence:build. Block 3's u21–u30 predecessor documented the
//   same trap. For a verb that means the drill has to keep the INFINITIVE, which in
//   practice means a modal frame: хочу / нужно / можно / будет / любит + infinitive.
//   All 24 drills here do that, and `selfcheck-ru-a2-block3.mjs` proves it by
//   importing the real router rather than approximating it.
//
// ⚠️ REFUSED IN THIS UNIT:
//   `включать` / `выключать` "to switch on/off" — block 2's u43 is "Technology and
//        communication" and switching things on is plainly its content. Left alone.
//   `сушить` "to dry" — §D against `сухой`, carded at u60l3. `чинить` took the slot.
//   `класть` was already carded at u15l4, so l1 teaches `ставить` against it rather
//        than re-teaching it: Russian splits putting-flat from putting-upright.
//   `водить` and `возить` — block 1 owns the motion verbs (u36) and unit40.js's
//        header reserves `возить` explicitly. Not touched.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT57 = {
  id: "ru-u57",
  lang: "ru",
  title: "Вещи и их место",
  order: 57,
  stage: "a2",
  lessons: [
    {
      id: "ru-u57l1",
      unit: 57,
      lesson: 1,
      title: "Sitting, lying, standing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that someone is sitting, lying or standing somewhere, and that you are putting a thing upright, hanging it up or holding it.",
      items: [
        { id: "ru-u57l1-sidet", type: "vocab", front: "сидеть", reading: "sidet", meaning: "to be sitting", accept: ["to sit", "to be seated", "to stay sitting"], example: { jp: "Он любит сидеть у окна.", en: "He likes sitting by the window." }, drill: { jp: "Я хочу сидеть здесь", en: "I want to sit here" }, hint: "si-DET — stress on the last syllable. Imperfective infinitive, and it is the STATE: сесть from unit 31 is the one moment of sitting DOWN, сидеть is being seated for an hour. Russian never confuses the two." },
        { id: "ru-u57l1-lezhat", type: "vocab", front: "лежать", reading: "lezhat", meaning: "to be lying", accept: ["to lie", "to be lying down", "to be flat somewhere"], example: { jp: "Книга будет лежать на столе.", en: "The book will be lying on the table." }, drill: { jp: "Мне нужно лежать сегодня", en: "I need to lie down today" }, hint: "li-ZHAT — stress on the last syllable, and the е reduces to i. Imperfective infinitive, and the STATE again: ложиться from unit 29 is getting into bed, лежать is being in it. ⚠️ Russian uses it of THINGS too — a book лежит on a table." },
        { id: "ru-u57l1-stoyat", type: "vocab", front: "стоять", reading: "stoyat", meaning: "to be standing", accept: ["to stand", "to be upright", "to be parked somewhere"], example: { jp: "Машина будет стоять здесь.", en: "The car will be standing here." }, drill: { jp: "Я не хочу стоять здесь", en: "I do not want to stand here" }, hint: "sta-YAT — stress on the last syllable, and the о reduces to a. ⚠️ ONE LETTER FROM A DIFFERENT WORD: стоЯть is to stand, стоИть is to cost — and unit 18 taught стоит, «it costs». Keep the vowel straight and the two never meet." },
        { id: "ru-u57l1-stavit", type: "vocab", front: "ставить", reading: "stavit", meaning: "to set upright", accept: ["to stand something up", "to put something on its feet", "to place upright"], example: { jp: "Нужно ставить книги на полку.", en: "The books have to be stood up on the shelf." }, drill: { jp: "Можно ставить сумку здесь", en: "You can stand the bag here" }, hint: "STA-vit — stress on the first syllable. Imperfective infinitive. ⚠️ Russian SPLITS what English calls putting: класть from unit 15 lays a thing flat, ставить puts it on its feet. A plate goes on the table with ставить, a newspaper with класть." },
        { id: "ru-u57l1-veshat", type: "vocab", front: "вешать", reading: "veshat", meaning: "to hang up", accept: ["to hang something", "to put on a hook", "to hang out"], example: { jp: "Здесь можно вешать пальто.", en: "You can hang your coat here." }, drill: { jp: "Куда вешать это пальто", en: "Where should this coat be hung" }, hint: "VE-shat — stress on the first syllable. Imperfective infinitive. The third member of the family: класть flat, ставить upright, вешать from a hook. Russian makes you choose." },
        { id: "ru-u57l1-derzhat", type: "vocab", front: "держать", reading: "derzhat", meaning: "to hold", accept: ["to keep hold of", "to carry in your hand", "to hold on to"], example: { jp: "Мне трудно держать эту сумку.", en: "It is hard for me to hold this bag." }, drill: { jp: "Я хочу держать это здесь", en: "I want to keep this here" }, hint: "dir-ZHAT — stress on the last syllable, and the е reduces to i. Imperfective infinitive. To hold in the hand, and to keep a thing somewhere: «где ты держишь ключи?»" },
      ],
    },
    {
      id: "ru-u57l2",
      unit: 57,
      lesson: 2,
      title: "Open, shut, lift, throw",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Open and shut a door or a window, lift and lower something, and throw or catch a thing.",
      items: [
        { id: "ru-u57l2-otkryvat", type: "vocab", front: "открывать", reading: "otkryvat", meaning: "to open", accept: ["to open up", "to unlock", "to get something open"], example: { jp: "Здесь нужно открывать окно каждый день.", en: "The window has to be opened here every day." }, drill: { jp: "Можно открывать это окно", en: "You can open this window" }, hint: "at-kry-VAT — stress on the last syllable, with the tight ы from unit 5 in the middle. Imperfective infinitive. ⚠️ Taught nowhere before now, in either aspect — a genuine gap in A1. Also to open a shop, a book or a conversation." },
        { id: "ru-u57l2-zakryvat", type: "vocab", front: "закрывать", reading: "zakryvat", meaning: "to shut", accept: ["to close", "to shut up a place", "to lock"], example: { jp: "Вечером мы будем закрывать магазин.", en: "In the evening we will be closing the shop." }, drill: { jp: "Нужно закрывать эту дверь", en: "This door has to be shut" }, hint: "za-kry-VAT — stress on the last syllable. Imperfective infinitive, and the exact mirror of открывать: the same -кры- root with за- instead of от-, which is how a great many Russian verb pairs work." },
        { id: "ru-u57l2-podnimat", type: "vocab", front: "поднимать", reading: "podnimat", meaning: "to raise up", accept: ["to lift", "to pick up", "to raise"], example: { jp: "Мне трудно поднимать эту сумку.", en: "It is hard for me to lift this bag." }, drill: { jp: "Не нужно поднимать этот камень", en: "There is no need to lift this stone" }, hint: "pad-ni-MAT — stress on the last syllable. Imperfective infinitive. Built on вверх's idea of up, from unit 36. ⚠️ Glossed «to raise up» rather than «to lift», because лифт from unit 12 already holds the single word «a lift» and the grader would treat them as one answer." },
        { id: "ru-u57l2-opuskat", type: "vocab", front: "опускать", reading: "opuskat", meaning: "to lower", accept: ["to let down", "to put down", "to drop something gently"], example: { jp: "Здесь нужно опускать руку очень медленно.", en: "The hand has to be lowered here very slowly." }, drill: { jp: "Можно опускать руку вниз", en: "You can lower your hand" }, hint: "a-pus-KAT — stress on the last syllable, and the о at the front reduces to a. Imperfective infinitive. The mirror of поднимать, and it goes with вниз from unit 36." },
        { id: "ru-u57l2-brosat", type: "vocab", front: "бросать", reading: "brosat", meaning: "to throw", accept: ["to hurl", "to chuck", "to give something up"], example: { jp: "Дети любят бросать камни в море.", en: "Children like throwing stones into the sea." }, drill: { jp: "Здесь можно бросать камни", en: "You can throw stones here" }, hint: "bra-SAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive. ⚠️ Its second sense is «to give up»: «бросать курить», to give up smoking, and «он её бросил», he left her." },
        { id: "ru-u57l2-lovit", type: "vocab", front: "ловить", reading: "lovit", meaning: "to catch", accept: ["to catch hold of", "to fish for", "to trap"], example: { jp: "Он любит ловить рыбу в реке.", en: "He likes catching fish in the river." }, drill: { jp: "Я хочу ловить рыбу здесь", en: "I want to fish here" }, hint: "la-VIT — stress on the last syllable, and the о reduces to a. Imperfective infinitive. «Ловить рыбу» IS the verb «to fish» — Russian has no separate word for it." },
      ],
    },
    {
      id: "ru-u57l3",
      unit: 57,
      lesson: 3,
      title: "Making and breaking",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that something is being built or broken, and that a thing has to be pulled, pushed, dug or sewn.",
      items: [
        { id: "ru-u57l3-stroit", type: "vocab", front: "строить", reading: "stroit", meaning: "to build", accept: ["to put up a building", "to construct", "to build up"], example: { jp: "Здесь будут строить новый дом.", en: "They will be building a new house here." }, drill: { jp: "Мы хотим строить новый дом", en: "We want to build a new house" }, hint: "STRO-it — stress on the first syllable. Imperfective infinitive. Also figurative: «строить планы», to make plans, which is the commonest use of all." },
        { id: "ru-u57l3-lomat", type: "vocab", front: "ломать", reading: "lomat", meaning: "to break in pieces", accept: ["to smash", "to break something", "to wreck"], example: { jp: "Не нужно ломать эту вещь.", en: "There is no need to break this thing." }, drill: { jp: "Он любит ломать старые вещи", en: "He likes breaking old things" }, hint: "la-MAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive. ⚠️ Glossed «to break in pieces» because перерыв from unit 12 already holds «a break»." },
        { id: "ru-u57l3-tyanut", type: "vocab", front: "тянуть", reading: "tyanut", meaning: "to pull", accept: ["to drag", "to draw towards you", "to drag something out"], example: { jp: "Здесь нужно тянуть очень сильно.", en: "You have to pull very hard here." }, drill: { jp: "Не нужно тянуть эту дверь", en: "There is no need to pull this door" }, hint: "tya-NUT — stress on the last syllable. Imperfective infinitive. ⚠️ Its stem mutates: тяну, тянешь, with no -ну- in the infinitive's place. It also means to drag something out in time." },
        { id: "ru-u57l3-tolkat", type: "vocab", front: "толкать", reading: "tolkat", meaning: "to push", accept: ["to shove", "to push against", "to give a push"], example: { jp: "Эту дверь нужно толкать, а не тянуть.", en: "This door has to be pushed, not pulled." }, drill: { jp: "Здесь нужно толкать дверь", en: "The door has to be pushed here" }, hint: "tal-KAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive. The two words on every Russian door are «толкать» and «тянуть» — or, printed, ОТ СЕБЯ and НА СЕБЯ." },
        { id: "ru-u57l3-kopat", type: "vocab", front: "копать", reading: "kopat", meaning: "to dig", accept: ["to dig up", "to dig a hole", "to turn over soil"], example: { jp: "В саду мы будем копать землю.", en: "We will be digging the soil in the garden." }, drill: { jp: "Здесь нужно копать очень глубоко", en: "You have to dig very deep here" }, hint: "ka-PAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive. It goes with почва and земля, and глубокий from unit 40 is the adjective for the result." },
        { id: "ru-u57l3-shit", type: "vocab", front: "шить", reading: "shit", meaning: "to sew", accept: ["to stitch", "to make clothes", "to do needlework"], example: { jp: "Моя мама любит шить платья.", en: "My mother likes sewing dresses." }, drill: { jp: "Я хочу шить это платье", en: "I want to sew this dress" }, hint: "SHIT — one syllable, and ⚠️ ши is ALWAYS said shy, never shee — the rule unit 6 taught. Imperfective infinitive. Its conjugation changes stem outright: шью, шьёшь." },
      ],
    },
    {
      id: "ru-u57l4",
      unit: 57,
      lesson: 4,
      title: "Washing up",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Wash, wipe and mend things, and name the washing-up, a bucket and a rag.",
      items: [
        { id: "ru-u57l4-myt", type: "vocab", front: "мыть", reading: "myt", meaning: "to wash something", accept: ["to wash up", "to clean with water", "to wash a thing"], example: { jp: "Нужно мыть руки перед обедом.", en: "Hands must be washed before lunch." }, drill: { jp: "Мне нужно мыть посуду", en: "I need to wash the dishes" }, hint: "MYT — one syllable, with the tight ы from unit 5. Imperfective infinitive. ⚠️ Russian has THREE washing verbs and this is the third: стирать from unit 29 is laundry, умываться from unit 29 is your own face, мыть is washing a thing." },
        { id: "ru-u57l4-vytirat", type: "vocab", front: "вытирать", reading: "vytirat", meaning: "to wipe", accept: ["to wipe down", "to dry with a cloth", "to wipe away"], example: { jp: "Здесь нужно вытирать стол каждый день.", en: "The table has to be wiped here every day." }, drill: { jp: "Нужно вытирать этот стол", en: "This table has to be wiped" }, hint: "vy-ti-RAT — stress on the last syllable, with the ы at the front. Imperfective infinitive. Wiping a surface, and also wiping away a слеза from unit 28." },
        { id: "ru-u57l4-chinit", type: "vocab", front: "чинить", reading: "chinit", meaning: "to mend", accept: ["to repair", "to fix something broken", "to put right"], example: { jp: "Он любит чинить старые машины.", en: "He likes mending old cars." }, drill: { jp: "Мне нужно чинить эту машину", en: "I need to mend this car" }, hint: "chi-NIT — stress on the last syllable. Imperfective infinitive. The answer to ломать two lessons back, and it shares its root with ремонт from unit 29, which is the noun for a big repair." },
        { id: "ru-u57l4-posuda", type: "vocab", front: "посуда", reading: "posuda", meaning: "the dishes", accept: ["crockery", "the washing-up", "pots and plates"], example: { jp: "Посуда уже совсем чистая.", en: "The dishes are completely clean already." }, drill: { jp: "Эта посуда уже чистая", en: "These dishes are clean already" }, hint: "pa-SU-da — stress on SU. FEMININE (-а), and ⚠️ it is a COLLECTIVE SINGULAR: «посуда чистая», never «чистые». English needs a plural for the same idea, Russian does not. It covers тарелка, ложка and вилка from unit 29 all at once." },
        { id: "ru-u57l4-vedro", type: "vocab", front: "ведро", reading: "vedro", meaning: "a bucket", accept: ["a pail", "the bucket", "a bucketful"], example: { jp: "Это ведро уже полное воды.", en: "That bucket is already full of water." }, drill: { jp: "Ведро здесь уже полное", en: "The bucket here is full already" }, hint: "vid-RO — stress on the last syllable, and the е reduces to i. NEUTER (-о). ⚠️ Its plural writes the ё and moves the stress: VYO-dra, вёдра." },
        { id: "ru-u57l4-tryapka", type: "vocab", front: "тряпка", reading: "tryapka", meaning: "a rag", accept: ["a cleaning cloth", "a duster", "an old bit of cloth"], example: { jp: "Эта тряпка уже совсем грязная.", en: "That rag is completely dirty already." }, drill: { jp: "Где эта грязная тряпка", en: "Where is this dirty rag" }, hint: "TRYAP-ka — stress on the first syllable. FEMININE (-а). ⚠️ Glossed «a rag» because ткань from unit 33 already holds «cloth». Of a person it is an insult — a spineless one." },
      ],
    },
  ],
};
