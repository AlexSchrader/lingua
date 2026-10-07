// RU Unit 123 — Кухня и рецепт ("The kitchen and the recipe") — B2
// ─────────────────────────────────────────────────────────────────────────────
// LAST UNIT OF B2 BLOCK 2 (u111–u123). Conventions: ru/unit1.js §1–§10, §A–§D.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 3 (B2)` — NO SUBJECT NAMED. The slot was
// allocated centrally to the measured hole, and the measurement is this: u13
// and u58 Еда и вкус own THE INGREDIENT and THE TASTE, and the corpus has
// almost nothing for THE METHOD. Taught already: `варить` · `жарить` · `печь` ·
// `кастрюля` · `блюдо` · `вкусно` · `острый` · `соль` · `перец` · `масло` ·
// `сахар` (u5, u13, u58), `нож` (u29), `тушить` (u97 — and note that is «to put
// out a fire», not the cooking sense), `кипеть` (u80), `мешать` (u34 — «to get
// in the way of»), `пробовать` (u86). Not one word for a baking tray, an oven,
// a frying pan, a bowl, a ladle, a pinch, a slice, dough, mince, breadcrumbs,
// a marinade, a stock, a sauce or a side dish.
//
// ⚠️ ONE SEED FROM THE CREW BRIEF DELIBERATELY NOT CARDED: `закваска`. It is one
// lexeme with `квасить`, which IS carded — the brief listed both, and carding
// the pair would be one prompt with two right answers. The METHOD verb was kept
// because this unit's whole hole is the method; закваска is DEFERRED, not
// refused, and `квасить`'s hint names it.
//
// ⚠️ SIX MORE CANDIDATES REFUSED, each for a reason a front probe cannot see:
//   `солить`    — unit1.js §D, against `соль` (u5l1).
//   `смесь`     — §D, against `мешать` (u34), and `тесто` covers the ground.
//   `тёрка`     — one lexeme with `тереть`, carded.
//   `мариновать`— one lexeme with `маринад`, carded.
//   `остудить`  — a PERFECTIVE with no imperfective partner worth carding, and
//                 `разогревать` already covers the temperature-change slot.
//   `подавать`  — §D, against `давать` (u48's family), and its other senses
//                 (a serve in tennis, submitting a form) outnumber the cooking
//                 one. `гарнир` and `порция` carry serving instead.
//   `сито` · `крышка` · `рассол` · `уксус` · `дрожжи` · `начинка` probe free and
//     are DEFERRED, not refused — a later band that wants baking has them.
//
// ⚠️ TWO ALLOWED §D PAIRS, RECORDED SO THEY ARE NOT "FIXED" LATER:
//   `запекать` alongside `печь` (u58, «to bake»). The judgement: Russian builds
//   cooking verbs by PREFIX and the prefix carries the method — печь is to bake,
//   запекать is to roast under a crust in the oven, and u63 already cards
//   twenty-four prefixed motion verbs on exactly this principle. The hint names
//   печь and states the difference.
//   `кипяток` alongside `кипеть` (u80, «to be on the boil»). A кипяток is a
//   SUBSTANCE — the boiling water in the kettle — not the state of boiling, and
//   it is a count-noun a learner needs at a Russian table every day.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT123 = {
  id: "ru-u123",
  lang: "ru",
  title: "Кухня и рецепт",
  order: 123,
  stage: "b2",
  lessons: [
    {
      id: "ru-u123l1",
      unit: 123,
      lesson: 1,
      title: "What the recipe tells you to do",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say to roast in the oven, to whisk, to slice up, to grate, to ferment and to reheat.",
      items: [
        { id: "ru-u123l1-zapekat", type: "vocab", front: "запекать", reading: "zapekat", meaning: "to roast in the oven", accept: ["to bake under a crust", "to cook in the oven until browned", "to oven-roast"], example: { jp: "Запекать рыбу он любит больше, чем жарить её на масле.", en: "He likes roasting fish in the oven more than frying it in oil." }, drill: { jp: "Запекать рыбу он любит больше", en: "He likes roasting fish in the oven more" }, hint: "za-pe-KAT — stress on the last syllable. Imperfective infinitive; the perfective is запечь. ⚠️ `печь` (u58) IS ALREADY TAUGHT AS «to bake» AND THIS IS A DIFFERENT METHOD, not a synonym: запекать means under a crust or a lid, in the `духовка`, until the top browns — «запечённая картошка». Russian builds its cooking verbs by prefix exactly as u63 builds its motion verbs." },
        { id: "ru-u123l1-vzbivat", type: "vocab", front: "взбивать", reading: "vzbivat", meaning: "to whisk", accept: ["to beat eggs or cream", "to whip up", "to beat until frothy"], example: { jp: "Взбивать надо долго, иначе ничего не получится.", en: "You have to whisk for a long time, otherwise nothing will come of it." }, drill: { jp: "Взбивать надо долго", en: "You have to whisk for a long time" }, hint: "vzbi-VAT — stress on the last syllable, and ⚠️ IT OPENS WITH взб, THREE CONSONANTS: v-z-b, all said. Imperfective infinitive; the perfective is взбить. ⚠️ Also of a PILLOW — «взбить подушку», to plump it up — which is the same action. From бить «to beat», which is not carded." },
        { id: "ru-u123l1-narezat", type: "vocab", front: "нарезать", reading: "narezat", meaning: "to slice up", accept: ["to cut into slices", "to chop into pieces", "to cut up a quantity of something"], example: { jp: "Нарезать хлеб он умеет очень ровно, как в магазине.", en: "He can slice bread very evenly, as in a shop." }, drill: { jp: "Нарезать хлеб он умеет очень ровно", en: "He can slice bread very evenly" }, hint: "na-re-ZAT — stress on the last syllable. ⚠️ THE PREFIX на- MEANS «A QUANTITY OF», which is the whole point: резать is to cut one thing, нарезать is to cut up a WHOLE LOT — a loaf into slices, vegetables into a salad. ⚠️ Note the stress moves in the perfective: на-RE-zat. Its product is the `ломтик` in lesson 4." },
        { id: "ru-u123l1-teret", type: "vocab", front: "тереть", reading: "teret", meaning: "to grate", accept: ["to rub something against a grater", "to grate cheese or carrot", "to rub hard"], example: { jp: "Тереть сыр лучше сразу, а не утром.", en: "It is better to grate cheese right away, not in the morning." }, drill: { jp: "Тереть сыр лучше сразу", en: "It is better to grate cheese right away" }, hint: "te-RET — stress on the last syllable. Imperfective infinitive, and ⚠️ ITS PRESENT TENSE IS IRREGULAR: тру, трёшь, трёт, трут — the е of the stem vanishes completely. ⚠️ TWO SENSES: to grate food, and simply TO RUB — «тереть глаза», to rub your eyes. The grater itself is a «тёрка», which this course does not card (one lexeme)." },
        { id: "ru-u123l1-kvasit", type: "vocab", front: "квасить", reading: "kvasit", meaning: "to ferment", accept: ["to pickle by fermenting", "to make something sour on purpose", "to let something ferment"], example: { jp: "Квасить капусту здесь начинают в октябре, когда уже холодно.", en: "They start fermenting cabbage here in October, when it is already cold." }, drill: { jp: "Квасить капусту здесь начинают в октябре", en: "They start fermenting cabbage here in October" }, hint: "KVA-sit — stress on the first syllable. Imperfective infinitive. ⚠️ THE CENTRAL RUSSIAN PRESERVING METHOD and there is no good English verb for it: «квашеная капуста» is not pickled in vinegar, it is fermented in its own brine. Same root as `квас`, the drink. ⚠️ The starter culture is a «закваска», which this course does NOT card — one lexeme with this verb; see the header." },
        { id: "ru-u123l1-razogrevat", type: "vocab", front: "разогревать", reading: "razogrevat", meaning: "to reheat", accept: ["to warm food up again", "to heat up something already cooked", "to warm through"], example: { jp: "Разогревать суп два раза нельзя, это он знает точно.", en: "Soup must not be reheated twice; he knows that for certain." }, drill: { jp: "Разогревать суп два раза нельзя", en: "Soup must not be reheated twice" }, hint: "ra-za-gre-VAT — stress on the last syllable, both unstressed о reducing to a. Imperfective infinitive; the perfective is разогреть. ⚠️ Built on греть «to warm» with раз-, which here means «thoroughly» rather than «apart». ⚠️ Also of an ENGINE and of an AUDIENCE — «разогреть зал» is to warm a crowd up, which is what a support act does." },
      ],
    },
    {
      id: "ru-u123l2",
      unit: 123,
      lesson: 2,
      title: "The pan, the tray and the heat",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name an oven, a frying pan, a baking tray, a bowl, boiling water and a ladle.",
      items: [
        { id: "ru-u123l2-dukhovka", type: "vocab", front: "духовка", reading: "dukhovka", meaning: "an oven", accept: ["the oven of a cooker", "a baking oven", "the oven compartment"], example: { jp: "Духовка здесь старая, и поэтому всё готовится дольше.", en: "The oven here is old, and so everything takes longer to cook." }, drill: { jp: "Духовка здесь старая", en: "The oven here is old" }, hint: "du-KHOF-ka — stress on KHOF, with the scraping х and the в devoicing to f before к. FEMININE (-а). ⚠️ THE COMPARTMENT, not the whole cooker — the cooker is a «плита». ⚠️ From дух in its old sense of «breath, hot air», the same root as `душа` (u28) — the oven is the breathing part of the stove. The formal word «печь» (u58) is a masonry stove." },
        { id: "ru-u123l2-skovoroda", type: "vocab", front: "сковорода", reading: "skovoroda", meaning: "a frying pan", accept: ["a skillet", "the frying pan", "a shallow pan for frying"], example: { jp: "Сковорода была горячая, и масло сразу начало гореть.", en: "The frying pan was hot, and the oil immediately began to burn." }, drill: { jp: "Сковорода была горячая", en: "The frying pan was hot" }, hint: "ska-va-ra-DA — stress on the LAST syllable, and every unstressed о reduces to a: four syllables, three of them unstressed. FEMININE (-а). ⚠️ THE STRESS MOVES IN THE PLURAL to the first syllable — SKO-va-ra-dy — which is one of Russian's genuinely mobile-stress nouns. The diminutive сковородка is just as common in speech. Pairs with `кастрюля` (u58), the deep pan." },
        { id: "ru-u123l2-protiven", type: "vocab", front: "противень", reading: "protiven", meaning: "a baking tray", accept: ["an oven tray", "a flat metal tray for the oven", "a roasting tin"], example: { jp: "Противень поставили в духовку на двадцать минут.", en: "The baking tray was put in the oven for twenty minutes." }, drill: { jp: "Противень поставили в духовку на двадцать минут", en: "The baking tray was put in the oven for twenty minutes" }, hint: "PRO-ti-ven — stress on the first syllable, the unstressed о reducing to a, with the ь keeping the н soft. ⚠️ MASCULINE despite the -ь (unit1.js §3). ⚠️ THE е DROPS in every other form: противень → противня, на противне. ⚠️ Nothing to do with `против` (u46, «against») or `противоречие` (u52) — the resemblance is pure coincidence, and the readings differ (protiven / protiv)." },
        { id: "ru-u123l2-miska", type: "vocab", front: "миска", reading: "miska", meaning: "a mixing bowl", accept: ["a bowl", "a deep bowl for food", "a basin for mixing"], example: { jp: "Миска стояла на столе, и в ней уже было тесто.", en: "The bowl stood on the table, and there was already dough in it." }, drill: { jp: "Миска стояла на столе", en: "The bowl stood on the table" }, hint: "MIS-ka — stress on the first syllable. FEMININE (-а). ⚠️ DEEPER AND PLAINER THAN `тарелка` (u13, «a plate»): a миска is the metal or plastic bowl you mix in, feed a dog from, or wash up in. «Тарелка» is what you eat off at the table, and Russian never swaps them." },
        { id: "ru-u123l2-kipyatok", type: "vocab", front: "кипяток", reading: "kipyatok", meaning: "boiling water", accept: ["water straight off the boil", "freshly boiled water", "water at boiling point"], example: { jp: "Кипяток в чайнике есть всегда, потому что чай здесь любят.", en: "There is always boiling water in the kettle, because tea is loved here." }, drill: { jp: "Кипяток в чайнике есть всегда", en: "There is always boiling water in the kettle" }, hint: "ki-pya-TOK — stress on the last syllable. MASCULINE, and ⚠️ THE о DROPS in every other form: кипяток → кипятка, кипятком. ⚠️ A SUBSTANCE, WHICH IS WHY IT IS CARDED although `кипеть` (u80) is taught: кипеть is the state of boiling, кипяток is the water itself — «залей кипятком», pour boiling water over it, is an instruction you will read on every Russian packet." },
        { id: "ru-u123l2-polovnik", type: "vocab", front: "половник", reading: "polovnik", meaning: "a ladle", accept: ["a soup ladle", "a long-handled serving spoon", "the ladle for soup"], example: { jp: "Половник лежит в той же миске, что и ложки.", en: "The ladle lies in the same bowl as the spoons." }, drill: { jp: "Половник лежит в той же миске", en: "The ladle lies in the same bowl" }, hint: "pa-LOV-nik — stress on LOV, the first о reducing to a. MASCULINE. ⚠️ IT LOOKS LIKE `половина` «a half» AND IS A DIFFERENT WORD — the root here is an old word for a scoop. ⚠️ Specifically FOR SOUP in Russian kitchens: «налей половником». The more bookish «черпак» is not carded. Pairs with `ложка` (u13)." },
      ],
    },
    {
      id: "ru-u123l3",
      unit: 123,
      lesson: 3,
      title: "What goes in",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name an ingredient, a seasoning, a marinade, dough, mince and breadcrumb coating.",
      items: [
        { id: "ru-u123l3-ingredient", type: "vocab", front: "ингредиент", reading: "ingredient", meaning: "an ingredient", accept: ["one of the things a dish is made of", "a component of a recipe", "the ingredient"], example: { jp: "Ингредиент здесь только один, которого нет в магазине.", en: "There is only one ingredient here that is not in the shop." }, drill: { jp: "Ингредиент здесь только один", en: "There is only one ingredient here" }, hint: "in-gre-di-ENT — stress on the LAST syllable, and the и and е before it are two separate syllables: in-gre-di-ENT, four of them. MASCULINE. ⚠️ Slightly formal — a recipe book says ингредиенты, a grandmother says «что нужно». Usually plural in practice: «список ингредиентов»." },
        { id: "ru-u123l3-priprava", type: "vocab", front: "приправа", reading: "priprava", meaning: "a seasoning", accept: ["a flavouring added to food", "a condiment", "a seasoning mix"], example: { jp: "Приправа здесь очень острая, и дети её не любят.", en: "The seasoning here is very hot, and children do not like it." }, drill: { jp: "Приправа здесь очень острая", en: "The seasoning here is very hot" }, hint: "pri-PRA-va — stress on PRA. FEMININE (-а). ⚠️ BROADER THAN `соль` (u5) AND `перец` (u57): a приправа is anything added for flavour, including a ready-made mix in a packet. ⚠️ «Специи» means spices specifically and is not carded; приправа covers herbs, spices and mixes alike. Note the example uses `острый` (u58) in its food sense." },
        { id: "ru-u123l3-marinad", type: "vocab", front: "маринад", reading: "marinad", meaning: "a marinade", accept: ["a liquid meat or fish is soaked in", "a souring and flavouring liquid", "the marinade"], example: { jp: "Маринад надо делать вечером, чтобы мясо стояло всю ночь.", en: "The marinade has to be made in the evening so that the meat stands all night." }, drill: { jp: "Маринад надо делать вечером", en: "The marinade has to be made in the evening" }, hint: "ma-ri-NAD — stress on the last syllable. MASCULINE. ⚠️ VINEGAR-BASED, which is what separates it from `квасить` in lesson 1: a маринад sours food from outside, fermenting sours it from within, and Russian preserving uses both. The verb мариновать is not carded (one lexeme) — and in speech it also means «to keep somebody waiting»." },
        { id: "ru-u123l3-testo", type: "vocab", front: "тесто", reading: "testo", meaning: "dough", accept: ["pastry dough", "batter", "a flour and water mixture"], example: { jp: "Тесто должно стоять в тепле два часа, и трогать его нельзя.", en: "The dough must stand in a warm place for two hours, and it must not be touched." }, drill: { jp: "Тесто должно стоять в тепле два часа", en: "The dough must stand in a warm place for two hours" }, hint: "TES-ta — stress on the first syllable, the final о reducing to a. NEUTER (-о). ⚠️ ONE WORD FOR DOUGH AND BATTER, which English splits: «жидкое тесто» is batter, «крутое тесто» is stiff dough. ⚠️ Do not confuse with тест «a test», which is a separate borrowing — тесто has the final -о and the stress on the first syllable." },
        { id: "ru-u123l3-farsh", type: "vocab", front: "фарш", reading: "farsh", meaning: "mince", accept: ["minced meat", "ground meat", "a meat stuffing mixture"], example: { jp: "Фарш он делает сам, потому что в магазине он плохой.", en: "He makes the mince himself, because the shop one is bad." }, drill: { jp: "Фарш он делает сам", en: "He makes the mince himself" }, hint: "FARSH — one syllable, ending in ш. MASCULINE. ⚠️ UNCOUNTABLE: «купить фарша», some mince, with the genitive. ⚠️ Not only meat — «рыбный фарш», «грибной фарш» — so the word means the minced MIXTURE, not the animal. From the French farce, the same word as a stuffing, and that is also what it does in a pie." },
        { id: "ru-u123l3-panirovka", type: "vocab", front: "панировка", reading: "panirovka", meaning: "a breadcrumb coating", accept: ["breadcrumbs for frying", "a crumb coating", "the coating a cutlet is rolled in"], example: { jp: "Панировка должна быть сухая, иначе рыба будет мягкая.", en: "The coating has to be dry, otherwise the fish will be soggy." }, drill: { jp: "Панировка должна быть сухая", en: "The coating has to be dry" }, hint: "pa-ni-ROF-ka — stress on ROF, the в devoicing to f before к and the first о reducing to a. FEMININE (-а). ⚠️ THE COATING AND THE MATERIAL AT ONCE: «сухари для панировки» are the crumbs, and «в панировке» on a menu means breaded. From the German panieren. Essential for reading a Russian menu, where «котлета в панировке» is everywhere." },
      ],
    },
    {
      id: "ru-u123l4",
      unit: 123,
      lesson: 4,
      title: "What comes out, and in what measure",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a sauce, a stock, a side dish, a portion, a thin slice and a pinch.",
      items: [
        { id: "ru-u123l4-sous", type: "vocab", front: "соус", reading: "sous", meaning: "a sauce", accept: ["a dressing or gravy", "the sauce", "a liquid served with food"], example: { jp: "Соус он делает из того, что осталось в сковороде.", en: "He makes the sauce from what is left in the frying pan." }, drill: { jp: "Соус он делает сам каждый раз", en: "He makes the sauce himself every time" }, hint: "SO-us — stress on the first syllable, and the о and у are TWO SYLLABLES, not one sound: SO-us. MASCULINE. ⚠️ Covers sauce, gravy and dressing alike — English splits all three. ⚠️ Nothing to do with `соль` (u5): the word came from the French sauce, and the resemblance is a coincidence a learner will notice and should distrust." },
        { id: "ru-u123l4-bulon", type: "vocab", front: "бульон", reading: "bulon", meaning: "broth", accept: ["clear soup liquid", "the liquid meat is boiled in", "a cooking stock"], example: { jp: "Бульон надо варить долго и очень тихо, почти без огня.", en: "Stock has to be boiled for a long time and very gently, almost without flame." }, drill: { jp: "Бульон надо варить долго и очень тихо", en: "Stock has to be boiled for a long time" }, hint: "bu-LON — stress on the last syllable, and the ьо is said as a soft l followed by o: bul-YON. MASCULINE. ⚠️ BOTH STOCK AND A SOUP IN ITS OWN RIGHT: «куриный бульон» is served as a clear soup to invalids, which is how a Russian meets it first. From the French bouillon. Works with `варить` (u58)." },
        { id: "ru-u123l4-garnir", type: "vocab", front: "гарнир", reading: "garnir", meaning: "a side dish", accept: ["the accompaniment on the plate", "what is served alongside the meat", "a garnish served as a side"], example: { jp: "Гарнир здесь всегда один и тот же, и это уже не интересно.", en: "The side dish here is always one and the same, and that is no longer interesting." }, drill: { jp: "Гарнир здесь всегда один и тот же", en: "The side dish here is always the same" }, hint: "gar-NIR — stress on the last syllable. MASCULINE. ⚠️ A FALSE FRIEND: English «garnish» is a decoration, Russian гарнир is THE CARBOHYDRATE HALF OF THE MEAL — potatoes, buckwheat, rice. «Мясо с гарниром» is the standard line in a canteen, and «без гарнира» is what you say if you only want the meat." },
        { id: "ru-u123l4-portsiya", type: "vocab", front: "порция", reading: "portsiya", meaning: "a serving", accept: ["one person's helping", "the amount served at once", "a single helping on a menu"], example: { jp: "Порция здесь большая, и одной хватает на всех.", en: "The portion here is big, and one is enough for everyone." }, drill: { jp: "Порция здесь большая", en: "The portion here is big" }, hint: "POR-tsi-ya — stress on the first syllable, with ц as ts. FEMININE (-я). ⚠️ THE UNIT A RUSSIAN MENU PRICES BY, and the one word in this lesson you will say out loud most: «одна порция», «половину порции». ⚠️ Also used of anything measured out — «порция работы», a batch of work. Works with `хватать` (u79, «to be enough»), which the example uses." },
        { id: "ru-u123l4-lomtik", type: "vocab", front: "ломтик", reading: "lomtik", meaning: "a thin slice", accept: ["a slice cut thin", "a sliver", "a thin piece cut off"], example: { jp: "Ломтик сыра он положил на хлеб и больше ничего не хотел.", en: "He put a thin slice of cheese on the bread and wanted nothing else." }, drill: { jp: "Ломтик сыра он положил на хлеб", en: "He put a thin slice of cheese on the bread" }, hint: "LOM-tik — stress on the first syllable. MASCULINE. ⚠️ A DIMINUTIVE AND IT MEANS IT: a ломтик is specifically THIN — of cheese, lemon, bread. The bigger piece is a «ломоть» and the neutral word is `кусок` (u58). ⚠️ From ломать «to break», so the picture is of something broken off, even though you cut it — which is what `нарезать` in lesson 1 does." },
        { id: "ru-u123l4-shchepotka", type: "vocab", front: "щепотка", reading: "shchepotka", meaning: "a pinch", accept: ["as much as you hold between two fingers", "a pinch of salt or spice", "a tiny amount of a powder"], example: { jp: "Щепотка соли нужна даже в сладком тесте, и это не ошибка.", en: "A pinch of salt is needed even in sweet dough, and that is not a mistake." }, drill: { jp: "Щепотка соли нужна даже в сладком тесте", en: "A pinch of salt is needed even in sweet dough" }, hint: "shche-POT-ka — stress on POT, opening with щ, the long soft sh of unit 3. FEMININE (-а). ⚠️ THE SMALLEST MEASURE IN A RUSSIAN RECIPE and there is no substitute for it: «щепотка соли», «щепотка перца». From щепать «to split off a sliver», and the picture is the three fingers you pinch it up with. The last card of B2 block 2." },
      ],
    },
  ],
};
