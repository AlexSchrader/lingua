// RU Unit 58 — Еда и вкус ("Food and taste") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u51–u60). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5. Part of the COVERAGE TAIL (u57–u60), which is block
// 3's alone.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 9 (A2)` — no subject named. See unit51.js.
//
// THE MEASURED HOLE. A1 had two food units and neither taught a single verb of
// eating or cooking. u13 Еда и напитки is the RESTAURANT (завтрак · обед · ужин ·
// меню · официант · заказывать · мясо · суп · салат · картошка · рис · вкусно ·
// овощи · фрукты · яблоко · масло · сахар · яйцо · кофе · сок · пиво · вино ·
// стакан · бутылка) and u29 added the cutlery (нож · ложка · вилка · тарелка) plus
// готовить and резать. Against that:
//     `пить` "to drink" — TAUGHT NOWHERE in u1–u57. See §4 of unit51.js.
//     no verb for to boil, to fry, to bake or to feed
//     no word for a dish, groceries, an appetite, a saucepan or a cooker
//     no TASTE ADJECTIVE at all except `вкусно`, the adverb, at u13l2 — a learner
//         could say a meal was delicious and could not say it was sweet, sour,
//         bitter, fatty, hot or cold.
// Those are this unit's 24.
//
// ★ THE "TO EAT" PROBLEM, STATED IN FULL because it is the one hole this block
//   could not close and a later seat will look for it. Russian's verb is `есть`.
//   That exact string is ALREADY A FRONT — u10l3 cards it as the existential
//   "there is, have", and its own hint says «ест without the soft sign means he
//   eats, and this course teaches only есть». The perfective `съесть` would have
//   been the way round it, and it transliterates to "sest", WHICH IS ALREADY
//   `сесть`'s reading (u31l4, "to sit down"), because unit1.js §1 drops the ь. So
//   l1 cards `поесть` "to have a meal", reading "poest", which is free. A learner
//   can now say they want a meal. They still cannot conjugate "I eat", and that is
//   B1's to fix — probably by re-glossing u10l3 rather than by adding a card.
//
// ⚠️ REFUSED IN THIS UNIT:
//   `напиток` "a drink" — §D, and the worst version of it: `пить` is carded in the
//        SAME LESSON, so it would have been two mastery tracks one card apart.
//   `солёный` "salty" (vs `соль` u5l1) · `чайник` "a teapot" (vs `чай` u2l4) ·
//        `вкус` "taste" (vs `вкусно` u13l2) · `печенье` (vs `печь`, carded at l2) ·
//        `варенье` (vs `варить`, same) — all §D.
//   `холодильник` "a fridge" — refused against `холодный`, which l4 cards. One of
//        the pair, and the adjective is worth more to a learner.
//   `богатый` / `бедный` — money is block 2's domain (unit51.js §5).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT58 = {
  id: "ru-u58",
  lang: "ru",
  title: "Еда и вкус",
  order: 58,
  stage: "a2",
  lessons: [
    {
      id: "ru-u58l1",
      unit: 58,
      lesson: 1,
      title: "Eating and drinking at last",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say you want a drink or a meal, name a dish and the groceries, and talk about having an appetite.",
      items: [
        { id: "ru-u58l1-pit", type: "vocab", front: "пить", reading: "pit", meaning: "to drink", accept: ["to have a drink", "to be drinking", "to drink alcohol"], example: { jp: "Я люблю пить чай утром.", en: "I like drinking tea in the morning." }, drill: { jp: "Я хочу пить воду", en: "I want to drink water" }, hint: "PIT — one syllable, with the ь keeping the т soft. Imperfective infinitive. ⚠️ TAUGHT NOWHERE BEFORE NOW — a genuine gap in Russian A1. Its stem changes outright when conjugated: пью, пьёшь, пьёт. On its own «он пьёт» means he drinks, in the bad sense." },
        { id: "ru-u58l1-poest", type: "vocab", front: "поесть", reading: "poest", meaning: "to have a meal", accept: ["to get something to eat", "to have a bite", "to eat a meal"], example: { jp: "Я хочу поесть перед работой.", en: "I want to have a meal before work." }, drill: { jp: "Мне нужно поесть сегодня", en: "I need to have a meal today" }, hint: "pa-YEST — stress on the last syllable, and the о reduces to a. ⚠️ Russian's plain verb «to eat» is `есть` — the SAME STRING unit 10 taught as the existential «there is, have». Its perfective съесть transliterates exactly as сесть from unit 31 does, so it cannot be carded either. поесть is the form this course can teach, and it means having a meal rather than eating a thing." },
        { id: "ru-u58l1-blyudo", type: "vocab", front: "блюдо", reading: "blyudo", meaning: "a dish of food", accept: ["a course at a meal", "something cooked", "a speciality"], example: { jp: "Это блюдо очень вкусное.", en: "That dish is very tasty." }, drill: { jp: "Это очень вкусное блюдо", en: "That is a very tasty dish" }, hint: "BLYU-da — stress on the first syllable. NEUTER (-о). Two senses: a course at a meal, and the serving dish itself. тарелка from unit 29 is one person's plate." },
        { id: "ru-u58l1-produkty", type: "vocab", front: "продукты", reading: "produkty", meaning: "groceries", accept: ["food shopping", "provisions", "things to eat"], example: { jp: "Продукты здесь очень дорогие.", en: "Groceries here are very expensive." }, drill: { jp: "Эти продукты уже старые", en: "These groceries are old already" }, hint: "pra-DUK-ty — stress on DUK, and the о reduces to a. MASCULINE, and ⚠️ taught in the PLURAL because that is the only form a Russian shops in: «купить продукты». The singular продукт means a product in a factory sense." },
        { id: "ru-u58l1-appetit", type: "vocab", front: "аппетит", reading: "appetit", meaning: "an appetite", accept: ["a good appetite", "hunger for food", "wanting to eat"], example: { jp: "У него сегодня хороший аппетит.", en: "He has a good appetite today." }, drill: { jp: "У меня плохой аппетит", en: "I have a poor appetite" }, hint: "a-pi-TIT — stress on the last syllable, and the пп is held a beat. MASCULINE. «Приятного аппетита!» is what a Russian says at the table where French says bon appétit — and there is no shorter version of it." },
        { id: "ru-u58l1-perets", type: "vocab", front: "перец", reading: "perets", meaning: "pepper", accept: ["the pepper", "black pepper", "a pepper you eat"], example: { jp: "Мне нужен чёрный перец.", en: "I need black pepper." }, drill: { jp: "Мне нужен этот перец", en: "I need this pepper" }, hint: "PE-rits — stress on the first syllable. MASCULINE, and ⚠️ its е DROPS in every other case: перца, перцу. One word for the spice and for the vegetable, exactly as in English." },
      ],
    },
    {
      id: "ru-u58l2",
      unit: 58,
      lesson: 2,
      title: "At the stove",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how something is being cooked — boiled, fried or baked — that you are feeding someone, and name the saucepan and the cooker.",
      items: [
        { id: "ru-u58l2-varit", type: "vocab", front: "варить", reading: "varit", meaning: "to boil", accept: ["to cook in water", "to simmer", "to make soup"], example: { jp: "Мама будет варить суп сегодня.", en: "Mum will be making soup today." }, drill: { jp: "Я хочу варить этот суп", en: "I want to boil this soup" }, hint: "va-RIT — stress on the last syllable. Imperfective infinitive. готовить from unit 29 is cooking in general; варить is specifically in water. Its noun варенье is jam, which is why this course does not card that too." },
        { id: "ru-u58l2-zharit", type: "vocab", front: "жарить", reading: "zharit", meaning: "to fry", accept: ["to roast", "to cook in oil", "to grill"], example: { jp: "Он любит жарить рыбу.", en: "He likes frying fish." }, drill: { jp: "Мне нужно жарить эту рыбу", en: "I need to fry this fish" }, hint: "ZHA-rit — stress on the first syllable. Imperfective infinitive. The same root as жарко from unit 34 and жара from unit 16 — all three are about heat. It covers frying and roasting both." },
        { id: "ru-u58l2-pech", type: "vocab", front: "печь", reading: "pech", meaning: "to bake", accept: ["to bake bread", "to make a cake", "to bake in an oven"], example: { jp: "Мама любит печь хлеб дома.", en: "Mum likes baking bread at home." }, drill: { jp: "Я хочу печь этот хлеб", en: "I want to bake this bread" }, hint: "PECH — one syllable. Imperfective infinitive. ⚠️ THE SAME STRING IS ALSO A NOUN — «a stove», feminine — and Russian keeps both without distinguishing them in writing. Its own noun печенье means a biscuit, which is why that is not carded here." },
        { id: "ru-u58l2-kormit", type: "vocab", front: "кормить", reading: "kormit", meaning: "to feed", accept: ["to give food to", "to feed an animal", "to keep someone fed"], example: { jp: "Здесь нужно кормить детей каждый день.", en: "The children have to be fed here every day." }, drill: { jp: "Мне нужно кормить собаку", en: "I need to feed the dog" }, hint: "kar-MIT — stress on the last syllable, and the о reduces to a. Imperfective infinitive. It takes a direct object in the accusative from unit 23: кормить собакУ, детЕЙ." },
        { id: "ru-u58l2-kastryulya", type: "vocab", front: "кастрюля", reading: "kastryulya", meaning: "a saucepan", accept: ["a pot", "a cooking pan", "the pan"], example: { jp: "Эта кастрюля уже совсем чистая.", en: "That saucepan is completely clean already." }, drill: { jp: "Где большая кастрюля", en: "Where is the large saucepan" }, hint: "kas-TRYU-lya — stress on TRYU. FEMININE (-я). The deep pan you варить in, as against the flat one you жарить in, which is a сковородка." },
        { id: "ru-u58l2-plita", type: "vocab", front: "плита", reading: "plita", meaning: "a cooker", accept: ["a stove", "the hob", "a cooking range"], example: { jp: "Плита на кухне уже старая.", en: "The cooker in the kitchen is old already." }, drill: { jp: "Эта плита уже старая", en: "That cooker is old already" }, hint: "pli-TA — stress on the last syllable. FEMININE (-а). Literally «a slab», which is also what it means in a builder's yard. It stands in the кухня from unit 15." },
      ],
    },
    {
      id: "ru-u58l3",
      unit: 58,
      lesson: 3,
      title: "How it tastes",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how something tastes — sweet, sour, bitter, fatty, hot with pepper — and that a drink is still too hot.",
      items: [
        { id: "ru-u58l3-sladkiy", type: "vocab", front: "сладкий", reading: "sladkiy", meaning: "sweet", accept: ["sugary", "sweet-tasting", "too sweet"], example: { jp: "Этот чай очень сладкий.", en: "That tea is very sweet." }, drill: { jp: "Это очень сладкий чай", en: "That is very sweet tea" }, hint: "SLAD-kiy — stress on the first syllable, and ⚠️ дк devoices to tk, so it comes out SLAT-kiy. сахар from unit 13 is what makes a thing сладкий. Of a person or a voice it means cloying." },
        { id: "ru-u58l3-kislyy", type: "vocab", front: "кислый", reading: "kislyy", meaning: "sour", accept: ["tart", "sharp-tasting", "gone off"], example: { jp: "Это яблоко очень кислое.", en: "That apple is very sour." }, drill: { jp: "Этот сок очень кислый", en: "That juice is very sour" }, hint: "KIS-lyy — stress on the first syllable. Sour of taste, and of milk it means it has turned. «Кислое лицо» is a sour expression, exactly as in English." },
        { id: "ru-u58l3-gorkiy", type: "vocab", front: "горький", reading: "gorkiy", meaning: "bitter", accept: ["bitter-tasting", "sharp and unpleasant", "bitter of a memory"], example: { jp: "Этот кофе очень горький.", en: "That coffee is very bitter." }, drill: { jp: "Это очень горький кофе", en: "That is very bitter coffee" }, hint: "GOR-kiy — stress on the first syllable. Bitter of taste, and bitter of an experience: «горькая правда», the bitter truth. Its root is the same as гореть, to burn." },
        { id: "ru-u58l3-zhirnyy", type: "vocab", front: "жирный", reading: "zhirnyy", meaning: "fatty", accept: ["greasy", "rich with fat", "oily"], example: { jp: "Это мясо очень жирное.", en: "That meat is very fatty." }, drill: { jp: "Этот суп очень жирный", en: "That soup is very fatty" }, hint: "ZHIR-nyy — stress on the first syllable, and ⚠️ жи is said zhy, never zhee — unit 6's rule. масло from unit 13 is what makes a dish жирный. In print it also means bold type." },
        { id: "ru-u58l3-ostryy", type: "vocab", front: "острый", reading: "ostryy", meaning: "sharp to the taste", accept: ["hot with pepper", "spicy", "sharp of a knife"], example: { jp: "Это блюдо очень острое для меня.", en: "That dish is very spicy for me." }, drill: { jp: "Здесь очень острый перец", en: "The pepper here is very hot" }, hint: "OS-tryy — stress on the first syllable. ⚠️ Two senses in one word — hot with pepper, and sharp of a нож from unit 29. Glossed by the taste because its other opposite, тупой «blunt», is in unit 60." },
        { id: "ru-u58l3-goryachiy", type: "vocab", front: "горячий", reading: "goryachiy", meaning: "piping hot", accept: ["hot to the touch", "very hot", "still steaming"], example: { jp: "Этот чай ещё очень горячий.", en: "That tea is still very hot." }, drill: { jp: "Это очень горячий суп", en: "That is very hot soup" }, hint: "ga-RYA-chiy — stress on RYA, and the о reduces to a. ⚠️ Russian splits what English calls hot: жарко from unit 34 is the WEATHER, горячий is a THING too hot to touch, and острый is hot with pepper. Three words, no overlap." },
      ],
    },
    {
      id: "ru-u58l4",
      unit: 58,
      lesson: 4,
      title: "Cold, sweet and left over",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say a dish has gone cold, and name a cake, honey, a nut, porridge and sour cream.",
      items: [
        { id: "ru-u58l4-kholodnyy", type: "vocab", front: "холодный", reading: "kholodnyy", meaning: "cold to the touch", accept: ["chilled", "gone cold", "cold of a thing"], example: { jp: "Этот суп уже совсем холодный.", en: "That soup has gone completely cold." }, drill: { jp: "Это очень холодный чай", en: "That is very cold tea" }, hint: "kha-LOD-nyy — stress on LOD, and both о before it reduce to a. ⚠️ холодно from unit 16 is «it is cold» of the WEATHER, and a parenthetical would not have separated them — `normalizeMeaning` strips those, which is unit 40's hard-won lesson. So this one says «to the touch»." },
        { id: "ru-u58l4-tort", type: "vocab", front: "торт", reading: "tort", meaning: "a cake", accept: ["a gateau", "a birthday cake", "the cake"], example: { jp: "Этот торт очень сладкий и вкусный.", en: "That cake is very sweet and very tasty." }, drill: { jp: "Это очень большой торт", en: "That is a very large cake" }, hint: "TORT — one syllable. MASCULINE. ⚠️ The stress NEVER moves off the о, however long the word gets: торты, тортов — TOR-ty, not tor-TY. Russians are strict about this one." },
        { id: "ru-u58l4-myod", type: "vocab", front: "мёд", reading: "myod", meaning: "honey", accept: ["the honey", "bee honey", "honey in tea"], example: { jp: "Я люблю чай с мёдом.", en: "I like tea with honey." }, drill: { jp: "Здесь есть очень хороший мёд", en: "There is very good honey here" }, hint: "MYOD — one syllable, the ё always written (unit 1 §7), and the д goes quiet, so it comes out MYOT. MASCULINE. Tea with мёд is the standard Russian answer to a простуда from unit 20." },
        { id: "ru-u58l4-orekh", type: "vocab", front: "орех", reading: "orekh", meaning: "a nut", accept: ["nuts", "a walnut", "the nut"], example: { jp: "Этот орех очень твёрдый.", en: "That nut is very hard." }, drill: { jp: "Это очень старый орех", en: "That is a very old nut" }, hint: "a-REKH — stress on the last syllable, the о reduces to a, and it ends in the scraping х from unit 1. MASCULINE. On its own it usually means a walnut; it is also the word for the wood." },
        { id: "ru-u58l4-kasha", type: "vocab", front: "каша", reading: "kasha", meaning: "porridge", accept: ["boiled grain", "a grain dish", "a muddle"], example: { jp: "Каша на завтрак очень полезная.", en: "Porridge for breakfast is very good for you." }, drill: { jp: "Эта каша очень вкусная", en: "This porridge is very tasty" }, hint: "KA-sha — stress on the first syllable. FEMININE (-а). ⚠️ Much broader than English porridge: any boiled grain is a каша, and there are a dozen kinds. «Каша в голове» means a muddle in your head." },
        { id: "ru-u58l4-smetana", type: "vocab", front: "сметана", reading: "smetana", meaning: "sour cream", accept: ["soured cream", "the cream you put in soup", "thick white cream"], example: { jp: "Сметана здесь очень свежая.", en: "The sour cream here is very fresh." }, drill: { jp: "Эта сметана уже старая", en: "This sour cream is old already" }, hint: "smi-TA-na — stress on TA, and the е reduces to i. FEMININE (-а). It goes into almost every Russian soup and onto almost every Russian салат — a spoonful of сметана is not optional in this cuisine." },
      ],
    },
  ],
};
