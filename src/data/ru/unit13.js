// RU Unit 13 — Еда и напитки ("Food and drink") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Conventions are declared in ru/unit1.js §1–§10 and bind every card here.
//
// ⚠️ NINE FOOD WORDS WERE ALREADY SPENT BY THE ALPHABET BAND, which is why this
// unit looks the way it does. Block 1 needed real words to teach letters with, so
// `вода` (u4) · `молоко` (u4) · `хлеб` (u6) · `сыр` (u5) · `рыба` (u5) · `чай`
// (u2) · `чашка` (u6) · `соль` (u5) and `есть` (u10, glossed "there is, have")
// are all TAKEN. They are used freely in the sentences here and never re-carded —
// the lower slot owns a front (RUNBOOK §4). What is left is the second tier, and
// it is a better unit for it: the meals, the main course, the shop and the drinks.
//
// ⚠️ THE ADVERB TRAP THIS UNIT IS BUILT AROUND. `вкусно`, `дорого` and `дёшево`
// are ADVERBS, so "Суп очень вкусно" is wrong Russian — it needs either the
// adjective (вкусный суп) or the это frame (Суп — это вкусно). The это frame is
// what every sentence here uses, because the adjectives are u19's job. A learner
// who copies these patterns will not produce the error.
//
// ⚠️ `заказывать` IS DELIBERATELY IMPERFECTIVE AND THE SENTENCES ARE CHOSEN TO
// SUIT IT. unit1.js §4 defers the perfective to A2, and "Я хочу заказывать" is
// the one place that pinches — a native ordering ONE meal says заказать. So the
// examples here put the verb in a general or habitual frame (Здесь можно
// заказывать обед), where the imperfective is the correct choice and not a
// compromise. The hint says so outright rather than letting the learner guess.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT13 = {
  id: "ru-u13",
  lang: "ru",
  title: "Еда и напитки",
  order: 13,
  stage: "a1",
  lessons: [
    {
      id: "ru-u13l1",
      unit: 13,
      lesson: 1,
      title: "Name the three meals, and order one",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the three meals of a Russian day, ask for the menu and order from it.",
      items: [
        { id: "ru-u13l1-zavtrak", type: "vocab", front: "завтрак", reading: "zavtrak", meaning: "breakfast", accept: ["a breakfast", "the morning meal"], example: { jp: "Завтрак уже здесь, и это очень вкусно.", en: "Breakfast is here already, and it is very tasty." }, drill: { jp: "Наш завтрак уже здесь", en: "Our breakfast is here already" }, hint: "ZAF-trak, stress first, and the в says f in front of the т. Masculine. It is built on завтра, tomorrow, which arrives in unit 17 — a Russian breakfast is literally the for-tomorrow meal." },
        { id: "ru-u13l1-obed", type: "vocab", front: "обед", reading: "obed", meaning: "lunch", accept: ["a lunch", "the midday meal", "dinner (at midday)"], example: { jp: "Сейчас обед, и здесь перерыв.", en: "It is lunchtime now, and they are on their break here." }, drill: { jp: "Обед у нас в час", en: "We have lunch at one o'clock" }, hint: "a-BYET, stress at the end, and the final д goes quiet and says t. Masculine. The BIG meal of a Russian day, eaten in the early afternoon — which is exactly why ПЕРЕРЫВ appears on doors at that hour." },
        { id: "ru-u13l1-uzhin", type: "vocab", front: "ужин", reading: "uzhin", meaning: "supper", accept: ["dinner (in the evening)", "an evening meal", "the evening meal"], example: { jp: "Ужин вечером, и мы всегда вместе.", en: "Supper is in the evening, and we are always together." }, drill: { jp: "Ужин у нас вечером", en: "We have supper in the evening" }, hint: "U-zhyn, stress first — and the ж is always hard, so it hardens the и into a ы sound: U-zhyn, not U-zhin. Masculine. Lighter than обед, because the Russian day's main meal is in the middle." },
        { id: "ru-u13l1-menyu", type: "vocab", front: "меню", reading: "menyu", meaning: "a menu", accept: ["menu", "the menu", "the card"], example: { jp: "Вот меню, и здесь всё очень дёшево.", en: "Here is the menu, and everything here is very cheap." }, drill: { jp: "Вот наше меню здесь", en: "Here is our menu" }, hint: "mi-NYU, stress at the end. NEUTER, and it never changes its ending — в меню, из меню, always меню, exactly like метро. Do not confuse it with меня, me: they only look alike." },
        { id: "ru-u13l1-ofitsiant", type: "vocab", front: "официант", reading: "ofitsiant", meaning: "a waiter", accept: ["waiter", "the waiter", "a server"], example: { jp: "Официант уже здесь, и он очень добрый.", en: "The waiter is here already, and he is very kind." }, drill: { jp: "Наш официант уже здесь", en: "Our waiter is here already" }, hint: "a-fi-tsy-ANT, stress right at the end — four syllables. The ци is said tsy with the hard ы, because ц is ALWAYS hard in Russian however soft the vowel after it looks. Masculine; a woman is официантка." },
        { id: "ru-u13l1-zakazyvat", type: "vocab", front: "заказывать", reading: "zakazyvat", meaning: "to order", accept: ["order", "to place an order", "to book"], example: { jp: "Здесь можно заказывать обед и ужин.", en: "You can order lunch and supper here." }, drill: { jp: "Можно здесь заказывать ужин", en: "One can order supper here" }, hint: "za-KA-zy-vat, stress on KA — five syllables with the stress unusually early. Imperfective infinitive (unit1.js §4): it means to order as a rule or repeatedly. For ONE single order a Russian says заказать, which is A2's job." },
      ],
    },
    {
      id: "ru-u13l2",
      unit: 13,
      lesson: 2,
      title: "Order the main course",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask for a main course by name and say whether you liked it.",
      items: [
        { id: "ru-u13l2-myaso", type: "vocab", front: "мясо", reading: "myaso", meaning: "meat", accept: ["the meat", "a meat dish"], example: { jp: "Я очень люблю мясо, и рыбу тоже.", en: "I like meat very much, and fish too." }, drill: { jp: "Мясо здесь очень вкусно", en: "The meat here is very tasty" }, hint: "MYA-sa, stress first — the я softens the м, so it starts closer to mya than ma. NEUTER (-о). One word for all meat, and it has no plural in ordinary use." },
        { id: "ru-u13l2-sup", type: "vocab", front: "суп", reading: "sup", meaning: "soup", accept: ["a soup", "the soup"], example: { jp: "Я хочу суп, и потом мясо.", en: "I want soup, and then meat." }, drill: { jp: "Суп и салат уже здесь", en: "The soup and the salad are here" }, hint: "SUP, one syllable — the English word with a Russian vowel in it. Masculine. Russian soup is a first course rather than a light meal, so обед almost always opens with it." },
        { id: "ru-u13l2-salat", type: "vocab", front: "салат", reading: "salat", meaning: "a salad", accept: ["salad", "the salad", "a mixed salad"], example: { jp: "Вот салат, а вот суп.", en: "Here is the salad, and here is the soup." }, drill: { jp: "Наш салат уже на месте", en: "Our salad is already in place" }, hint: "sa-LAT, stress at the end. Masculine. An internationalism on the page, but a different thing on the plate: a Russian салат is usually chopped and dressed, not a bowl of leaves." },
        { id: "ru-u13l2-kartoshka", type: "vocab", front: "картошка", reading: "kartoshka", meaning: "a potato", accept: ["potato", "potatoes", "the potatoes"], example: { jp: "Картошка это всегда вкусно.", en: "Potato is always tasty." }, drill: { jp: "Здесь картошка и мясо", en: "Here are potatoes and meat" }, hint: "kar-TOSH-ka, stress on TOSH. Feminine (-а). This is the everyday word; the formal one is картофель. Russian treats it as one mass, so картошка covers a potato and potatoes both." },
        { id: "ru-u13l2-ris", type: "vocab", front: "рис", reading: "ris", meaning: "rice", accept: ["the rice", "boiled rice"], example: { jp: "Рис и мясо это очень хорошо.", en: "Rice and meat is very good." }, drill: { jp: "Я хочу рис и рыбу", en: "I want rice and fish" }, hint: "RIS, one syllable, and the р is a single flick of the tongue. Masculine. Note the spelling is not the English one — no double letter and no e on the end." },
        { id: "ru-u13l2-vkusno", type: "vocab", front: "вкусно", reading: "vkusno", meaning: "it tastes good", accept: ["tasty", "delicious", "it is delicious"], example: { jp: "Здесь всё очень вкусно, и это не секрет.", en: "Everything here is very tasty, and that is no secret." }, drill: { jp: "Это очень вкусно сегодня", en: "This is very tasty today" }, hint: "VKUS-na, stress first, and the вк at the start is a cluster with no vowel between. An ADVERB, so it needs no noun: Вкусно! Put a noun in and you need the adjective вкусный — вкусный суп, never суп вкусно." },
      ],
    },
    {
      id: "ru-u13l3",
      unit: 13,
      lesson: 3,
      title: "Buy food in a shop",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask for the everyday things on a Russian shopping list by name.",
      items: [
        { id: "ru-u13l3-ovoshchi", type: "vocab", front: "овощи", reading: "ovoshchi", meaning: "vegetables", accept: ["vegetable", "greens", "the vegetables"], example: { jp: "Я люблю овощи и фрукты.", en: "I like vegetables and fruit." }, drill: { jp: "Овощи и фрукты уже здесь", en: "The vegetables and the fruit are here" }, hint: "O-va-shchi, stress first. PLURAL in ordinary use — one vegetable is овощ, but a Russian says овощи the way English says produce. The щ is a long soft sh, held about twice as long as ш." },
        { id: "ru-u13l3-frukty", type: "vocab", front: "фрукты", reading: "frukty", meaning: "fruit", accept: ["fruits", "the fruit", "a piece of fruit"], example: { jp: "Здесь фрукты, а там овощи.", en: "Here is the fruit, and over there the vegetables." }, drill: { jp: "Я хочу фрукты и сок", en: "I want fruit and juice" }, hint: "FRUK-ty, stress first. Plural, like овощи — one piece is фрукт, but the word you will hear and read on a sign is фрукты. Masculine in the singular." },
        { id: "ru-u13l3-yabloko", type: "vocab", front: "яблоко", reading: "yabloko", meaning: "an apple", accept: ["apple", "the apple"], example: { jp: "Мама сегодня хочет яблоко.", en: "Mum wants an apple today." }, drill: { jp: "Вот яблоко и вот сок", en: "Here is an apple and here is juice" }, hint: "YA-bla-ka, stress first, and both unstressed о reduce to a. NEUTER (-о). Its plural is яблоки, and the tree it grows on is яблоня." },
        { id: "ru-u13l3-maslo", type: "vocab", front: "масло", reading: "maslo", meaning: "butter", accept: ["oil", "the butter", "cooking oil"], example: { jp: "Хлеб и масло это мой завтрак.", en: "Bread and butter is my breakfast." }, drill: { jp: "Здесь масло и хлеб", en: "Here are butter and bread" }, hint: "MAS-la, stress first. NEUTER (-о). ONE word for both butter and oil: сливочное масло is the dairy one, растительное масло the plant one, and in a shop масло on its own usually means butter." },
        { id: "ru-u13l3-sakhar", type: "vocab", front: "сахар", reading: "sakhar", meaning: "sugar", accept: ["the sugar", "a sugar"], example: { jp: "Я не хочу сахар, и молоко тоже.", en: "I do not want sugar, and no milk either." }, drill: { jp: "Сахар и соль уже здесь", en: "The sugar and the salt are here" }, hint: "SA-khar, stress first. Masculine. It looks like the English word and is not said like it: the middle letter is х, the throat-scraping sound from unit 1, not a k." },
        { id: "ru-u13l3-yaytso", type: "vocab", front: "яйцо", reading: "yaytso", meaning: "an egg", accept: ["egg", "the egg", "eggs"], example: { jp: "Яйцо и хлеб это очень дёшево.", en: "An egg and bread is very cheap." }, drill: { jp: "Вот яйцо и масло", en: "Here are an egg and butter" }, hint: "yay-TSO, stress right at the end. NEUTER (-о). The plural яйца pulls the stress forward to YAY-tsa. And yes — it opens with я and then has a й, two y sounds back to back." },
      ],
    },
    {
      id: "ru-u13l4",
      unit: 13,
      lesson: 4,
      title: "Order something to drink",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Order a drink, and ask for it in a glass or a bottle.",
      items: [
        { id: "ru-u13l4-kofe", type: "vocab", front: "кофе", reading: "kofe", meaning: "coffee", accept: ["a coffee", "the coffee", "black coffee"], example: { jp: "Я люблю кофе, а мама любит чай.", en: "I like coffee, and mum likes tea." }, drill: { jp: "Кофе здесь очень дорого", en: "The coffee here is very expensive" }, hint: "KO-fye, stress first, and the final е is soft. MASCULINE — the big exception to the -е-is-neuter rule, because it arrived in Russian as кофей. It never changes its ending: в кофе, из кофе." },
        { id: "ru-u13l4-sok", type: "vocab", front: "сок", reading: "sok", meaning: "juice", accept: ["a juice", "the juice", "fruit juice"], example: { jp: "Я хочу сок, а не чай.", en: "I want juice, not tea." }, drill: { jp: "Наш сок уже здесь", en: "Our juice is here already" }, hint: "SOK, one syllable. Masculine. Russian counts servings rather than kinds with it: два сока means two glasses of juice, not two varieties." },
        { id: "ru-u13l4-pivo", type: "vocab", front: "пиво", reading: "pivo", meaning: "beer", accept: ["a beer", "the beer"], example: { jp: "Папа любит пиво, а я люблю сок.", en: "Dad likes beer, and I like juice." }, drill: { jp: "Пиво здесь очень дёшево", en: "The beer here is very cheap" }, hint: "PI-va, stress first, and the final о reduces to a. NEUTER (-о). It shares its root with пить, to drink, so пиво is literally the drink." },
        { id: "ru-u13l4-vino", type: "vocab", front: "вино", reading: "vino", meaning: "wine", accept: ["a wine", "the wine"], example: { jp: "Вино здесь дорого, а пиво дёшево.", en: "The wine here is expensive, and the beer is cheap." }, drill: { jp: "Мы не хотим вино", en: "We do not want wine" }, hint: "vi-NO, stress at the end, so the и stays clear and the о is full and round. NEUTER (-о). Its plural вина throws the stress back to the front: VI-na." },
        { id: "ru-u13l4-stakan", type: "vocab", front: "стакан", reading: "stakan", meaning: "a glass", accept: ["glass", "the glass", "a tumbler"], example: { jp: "Вот стакан, а вот чашка.", en: "Here is a glass, and here is a cup." }, drill: { jp: "Стакан уже на месте", en: "The glass is already in place" }, hint: "sta-KAN, stress at the end. Masculine. A straight glass for water or tea, and Russian keeps it carefully apart from чашка, the cup with a handle taught in unit 6." },
        { id: "ru-u13l4-butylka", type: "vocab", front: "бутылка", reading: "butylka", meaning: "a bottle", accept: ["bottle", "the bottle"], example: { jp: "Вот бутылка, и она уже здесь.", en: "Here is the bottle, and it is here already." }, drill: { jp: "Здесь бутылка и стакан", en: "Here are a bottle and a glass" }, hint: "bu-TYL-ka, stress on TYL, with the hard ы from unit 2 — not бутилка. Feminine (-а). After два it is две бутылки; after пять, пять бутылок." },
      ],
    },
  ],
};
