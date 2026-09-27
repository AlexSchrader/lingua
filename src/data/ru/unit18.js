// RU Unit 18 — Одежда и покупки ("Clothes and shopping") — A1
// ─────────────────────────────────────────────────────────────────────────────
// RETHEMED FROM THE SCAFFOLD'S "Characters 4". Same argument as u12 and u15, and
// the language-wide decision is unit1.js §10: the five "Characters N" slots encode
// a Japanese interleaved-kanji strand, Russian finishes its alphabet at u6, and
// `lint.js` hard-errors on /^Characters \d+$/ once a unit is authored.
//
// WHY THIS SLOT BECAME CLOTHES AND SHOPPING. It is the SECOND missing CEFR A1
// domain in the Russian scaffold (u15 took the first, the home). A1 explicitly
// covers shopping, and the scaffold's u1–u30 has no slot for it anywhere: the
// learner could name the seasons and describe the weather and could not buy a coat
// to survive it. An artefact slot is the right place for a domain the scaffold
// forgot, and a better use of it than a fourth "read the Cyrillic" unit.
//
// ⚠️ A SECOND DOCUMENTED 3rd-PERSON FRONT, and unit1.js §4 invites exactly this
// judgement ("apply the same test if a second case appears"). `стоит` is carded in
// the 3rd person, NOT as the infinitive `стоить`:
//   * Сколько это стоит? is the only form an A1 learner ever produces.
//   * Every infinitive frame that keeps стоить verbatim needs может / будет /
//     должно — three words taught nowhere in u1–u20. The card could therefore
//     carry no legal drill at all.
//   * Same shape as `нравится` (u8l4) and no/unit1.js §2's `heter`.
// This is the SECOND such case in Russian, so the pattern is now two, not one.
// ⚠️ NOTE FOR THE CREW LEAD: unit1.js §4 names only нравится. Block 1 owns that
// header; this card should be added to its list on cross-block review.
//
// ⚠️ TWO GLOSS COLLISIONS DESIGNED OUT, neither of which a tool would catch,
// because `normalizeMeaning` strips both the parenthetical AND the article:
//   `одежда` lost the accept entry "dress (clothing)" → it normalised to "dress",
//            which is l1's own `платье`.
//   (and in u17, `выходной` lost "a holiday (from work)" → "holiday" = `праздник`.)
//
// ⚠️ THREE SURFACE TWINS ARE ALLOWED HERE ON PURPOSE, judged by hand because
// `check-front.mjs`'s LEXEME verdict is blind to Cyrillic (unit1.js §D):
//   платье (a dress) / платить (to pay)  — one ancient root (плат, cloth), nothing
//                                          a learner could guess. Hint says so.
//   носки (socks) / носить (to wear)     — genuinely related, and taught in the
//                                          same unit so it reads as a pattern
//                                          rather than a trap.
//   носить (to wear) / нос (a nose, u20) — unrelated; pure surface coincidence.
// `подарок` has the fleeting vowel again (подарок → подарка), so its drill stays
// nominative, like угол · рынок · потолок · порядок · ветер before it.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT18 = {
  id: "ru-u18",
  lang: "ru",
  title: "Одежда и покупки",
  order: 18,
  stage: "a1",
  lessons: [
    {
      id: "ru-u18l1",
      unit: 18,
      lesson: 1,
      title: "Name what you are wearing",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the clothes you have on and say where the rest of them are kept.",
      items: [
        { id: "ru-u18l1-odezhda", type: "vocab", front: "одежда", reading: "odezhda", meaning: "clothes", accept: ["clothing", "garments", "things to wear"], example: { jp: "Одежда в шкафу, и там уже порядок.", en: "The clothes are in the cupboard, and it is tidy in there now." }, drill: { jp: "Одежда у нас в шкафу", en: "Our clothes are in the cupboard" }, hint: "a-DYEZH-da, stress on DYEZH. Feminine (-а), and grammatically SINGULAR — Russian has one word where English has a plural, so it is одежда красивая and never одежды красивые." },
        { id: "ru-u18l1-rubashka", type: "vocab", front: "рубашка", reading: "rubashka", meaning: "a shirt", accept: ["shirt", "the shirt", "a blouse"], example: { jp: "Рубашка белая, и она очень красивая.", en: "The shirt is white, and it is very beautiful." }, drill: { jp: "Рубашка здесь в шкафу", en: "The shirt is here in the cupboard" }, hint: "ru-BASH-ka, stress on BASH. Feminine (-а). It is the -ка diminutive sitting on рубаха, the old peasant shirt — so a рубашка is literally a little shirt." },
        { id: "ru-u18l1-platye", type: "vocab", front: "платье", reading: "plate", meaning: "a dress", accept: ["the dress", "a frock", "a gown"], example: { jp: "Платье красивое, но очень дорого.", en: "The dress is beautiful, but very expensive." }, drill: { jp: "Платье здесь очень красивое", en: "The dress here is very beautiful" }, hint: "PLA-tye, stress first, and the ье at the end is one soft syllable. NEUTER (-е). Do NOT confuse it with платить, to pay, in lesson 3 — they share one ancient root (плат, a cloth) and nothing you could guess from." },
        { id: "ru-u18l1-bryuki", type: "vocab", front: "брюки", reading: "bryuki", meaning: "trousers", accept: ["pants", "the trousers", "slacks"], example: { jp: "Брюки чёрные, и это очень хорошо.", en: "The trousers are black, and that is very good." }, drill: { jp: "Брюки чёрные и красивые", en: "The trousers are black and beautiful" }, hint: "BRYU-ki, stress first. PLURAL ONLY — there is no singular брюк, exactly as English has no one trouser. The -и ending pulls a plural adjective with it: брюки чёрные." },
        { id: "ru-u18l1-kurtka", type: "vocab", front: "куртка", reading: "kurtka", meaning: "a jacket", accept: ["jacket", "the jacket", "an anorak"], example: { jp: "Куртка здесь, а шапка в шкафу.", en: "The jacket is here, and the hat is in the cupboard." }, drill: { jp: "Моя куртка уже здесь", en: "My jacket is here already" }, hint: "KURT-ka, stress first. Feminine (-а). A SHORT outdoor jacket — the long winter one is пальто, in lesson 2. Russian keeps the two apart, because in that climate the difference matters." },
        { id: "ru-u18l1-obuv", type: "vocab", front: "обувь", reading: "obuv", meaning: "footwear", accept: ["shoes", "the shoes", "a pair of shoes"], example: { jp: "Обувь здесь, а брюки в шкафу.", en: "The footwear is here, and the trousers are in the cupboard." }, drill: { jp: "Обувь у нас здесь", en: "Our shoes are here" }, hint: "O-buf, stress first, and the final в says f. FEMININE (-ь) — another unpredictable one, which is what unit1.js §3 exists for. A collective singular: обувь covers every shoe in the house, and one shoe is ботинок or туфля." },
      ],
    },
    {
      id: "ru-u18l2",
      unit: 18,
      lesson: 2,
      title: "Socks, hats, and what goes on over the top",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the winter layers and say which of them you need today.",
      items: [
        { id: "ru-u18l2-noski", type: "vocab", front: "носки", reading: "noski", meaning: "socks", accept: ["a sock", "the socks", "stockings"], example: { jp: "Носки здесь, а обувь там.", en: "The socks are here, and the shoes are over there." }, drill: { jp: "Носки у нас в шкафу", en: "Our socks are in the cupboard" }, hint: "nas-KI, stress at the end. Plural in practice; one is носок, with a fleeting о. It comes from носить, to wear, in lesson 4 — and NOT from нос, a nose, in unit 20, however alike they look." },
        { id: "ru-u18l2-shapka", type: "vocab", front: "шапка", reading: "shapka", meaning: "a hat", accept: ["a cap", "the hat", "a woolly hat"], example: { jp: "Шапка здесь, и зимой она очень нужна.", en: "The hat is here, and in winter it is very much needed." }, drill: { jp: "Шапка зимой очень нужна", en: "A hat is very much needed in winter" }, hint: "SHAP-ka, stress first. Feminine (-а). Specifically a soft hat you pull on — woolly or fur. A hat with a brim is шляпа, and confusing the two is the sort of thing a Russian winter punishes." },
        { id: "ru-u18l2-sharf", type: "vocab", front: "шарф", reading: "sharf", meaning: "a scarf", accept: ["the scarf", "a muffler"], example: { jp: "Мой шарф красный, и он очень красивый.", en: "My scarf is red, and it is very beautiful." }, drill: { jp: "Шарф и шапка уже здесь", en: "The scarf and the hat are here" }, hint: "SHARF, one syllable. Masculine. The English scarf borrowed whole, and one of very few Russian words ending in -рф. Its plural шарфы keeps the stress where it is." },
        { id: "ru-u18l2-perchatki", type: "vocab", front: "перчатки", reading: "perchatki", meaning: "gloves", accept: ["a glove", "the gloves", "a pair of gloves"], example: { jp: "Перчатки в сумке, и там уже порядок.", en: "The gloves are in the bag, and it is tidy in there now." }, drill: { jp: "Перчатки у меня в сумке", en: "My gloves are in my bag" }, hint: "pir-CHAT-ki, stress on CHAT. Plural in practice; one is перчатка, feminine. Built on the old перст, a finger — a перчатка is the finger-thing." },
        { id: "ru-u18l2-palto", type: "vocab", front: "пальто", reading: "palto", meaning: "a coat", accept: ["the coat", "an overcoat", "a winter coat"], example: { jp: "Пальто здесь, и это очень дорого.", en: "The coat is here, and it is very expensive." }, drill: { jp: "Пальто зимой очень нужно", en: "A coat is very much needed in winter" }, hint: "pal-TO, stress at the end. NEUTER, and it NEVER changes its ending — в пальто, без пальто, always пальто, exactly like метро and меню. Borrowed from the French paletot." },
        { id: "ru-u18l2-karman", type: "vocab", front: "карман", reading: "karman", meaning: "a pocket", accept: ["the pocket", "a pouch"], example: { jp: "Ключ в кармане, и это очень удобно.", en: "The key is in my pocket, and that is very convenient." }, drill: { jp: "Карман в моей куртке", en: "The pocket in my jacket" }, hint: "kar-MAN, stress at the end. Masculine. In the pocket is в кармане. Быть не по карману — to be beyond your pocket — is the Russian for cannot afford it." },
      ],
    },
    {
      id: "ru-u18l3",
      unit: 18,
      lesson: 3,
      title: "Buy it",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Buy something: choose it, ask the size, pay and take the receipt.",
      items: [
        { id: "ru-u18l3-pokupat", type: "vocab", front: "покупать", reading: "pokupat", meaning: "to buy", accept: ["to purchase", "buy", "to be buying"], example: { jp: "Здесь можно покупать хлеб и молоко.", en: "You can buy bread and milk here." }, drill: { jp: "Здесь нужно покупать билеты", en: "You have to buy tickets here" }, hint: "pa-ku-PAT, stress at the end. Imperfective infinitive: покупать is buying as a habit or a rule. For one single purchase a Russian says купить, which A2 teaches, and which the noun покупка comes from." },
        { id: "ru-u18l3-prodavat", type: "vocab", front: "продавать", reading: "prodavat", meaning: "to sell", accept: ["to be selling", "sell", "to trade"], example: { jp: "Здесь можно продавать фрукты и овощи.", en: "You can sell fruit and vegetables here." }, drill: { jp: "Здесь можно продавать книги", en: "You can sell books here" }, hint: "pra-da-VAT, stress at the end. Imperfective infinitive and the exact mirror of покупать. A shop assistant is продавец, built straight on it; the perfective продать waits for A2." },
        { id: "ru-u18l3-platit", type: "vocab", front: "платить", reading: "platit", meaning: "to pay", accept: ["to pay for", "pay", "to settle up"], example: { jp: "В кассе нужно платить, и это быстро.", en: "You pay at the till, and it is quick." }, drill: { jp: "Здесь нужно платить в кассе", en: "You have to pay at the till here" }, hint: "pla-TIT, stress at the end. Imperfective infinitive. Not to be confused with платье, a dress, in lesson 1. It takes за for the thing paid for: платить за билет." },
        { id: "ru-u18l3-razmer", type: "vocab", front: "размер", reading: "razmer", meaning: "a size", accept: ["size", "the size", "a measurement"], example: { jp: "Мой размер здесь, и это очень хорошо.", en: "My size is here, and that is very good." }, drill: { jp: "Мой размер уже здесь", en: "My size is here already" }, hint: "raz-MYER, stress at the end. Masculine. It is a clothing size and any measurement at all — размер комнаты, the size of the room. The verb behind it, мерить, is A2's." },
        { id: "ru-u18l3-vybirat", type: "vocab", front: "выбирать", reading: "vybirat", meaning: "to choose", accept: ["to select", "choose", "to pick"], example: { jp: "Здесь можно выбирать цвет и размер.", en: "Here you can choose the colour and the size." }, drill: { jp: "Нужно выбирать цвет и размер", en: "You need to choose colour and size" }, hint: "vy-bi-RAT, stress at the end. Imperfective infinitive — choosing as a PROCESS, which is what a shop is. The one finished choice is выбрать, and выбор is a choice." },
        { id: "ru-u18l3-chek", type: "vocab", front: "чек", reading: "chek", meaning: "a receipt", accept: ["a bill", "the receipt", "a till slip"], example: { jp: "Чек здесь, и там уже цена.", en: "The receipt is here, and the price is on it." }, drill: { jp: "Чек уже в кармане", en: "The receipt is in my pocket already" }, hint: "CHEK, one syllable. Masculine. The English cheque travelling into Russian and landing on the till slip instead — a bank cheque is чек too, but you will meet the shop one first." },
      ],
    },
    {
      id: "ru-u18l4",
      unit: 18,
      lesson: 4,
      title: "Say whether it fits, and what it costs",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask how much something costs, try it on, and say whether it is comfortable.",
      items: [
        { id: "ru-u18l4-nosit", type: "vocab", front: "носить", reading: "nosit", meaning: "to wear", accept: ["to carry", "to be wearing", "to wear regularly"], example: { jp: "Зимой нужно носить шапку и шарф.", en: "In winter you have to wear a hat and a scarf." }, drill: { jp: "Зимой нужно носить шапку", en: "In winter you have to wear a hat" }, hint: "na-SIT, stress at the end. Imperfective infinitive, with TWO senses: to wear, and to carry repeatedly — носить сумку is to carry a bag about. Nothing to do with нос, a nose, in unit 20." },
        { id: "ru-u18l4-stoit", type: "vocab", front: "стоит", reading: "stoit", meaning: "it costs", accept: ["costs", "it is worth", "how much it is"], example: { jp: "Сколько это стоит, я не знаю.", en: "How much this costs, I do not know." }, drill: { jp: "Сколько стоит этот билет", en: "How much does this ticket cost" }, hint: "STO-it, stress first. Given in the 3rd PERSON and not the infinitive — the same documented exception as нравится in unit 8 (unit1.js §4). Сколько это стоит? is the only form a beginner produces. It also means to be worth doing: не стоит." },
        { id: "ru-u18l4-primeryat", type: "vocab", front: "примерять", reading: "primeryat", meaning: "to try on", accept: ["to try something on", "try on", "to fit (clothes)"], example: { jp: "Здесь можно примерять брюки и рубашку.", en: "You can try on trousers and a shirt here." }, drill: { jp: "Можно здесь примерять куртку", en: "Can one try on a jacket here" }, hint: "pri-mi-RYAT, stress at the end. Imperfective infinitive. Built on мерить, to measure, with при-: to measure something against yourself. One finished try-on is примерить." },
        { id: "ru-u18l4-modnyy", type: "vocab", front: "модный", reading: "modnyy", meaning: "fashionable", accept: ["stylish", "in fashion", "trendy"], example: { jp: "Это очень модный цвет, и он мне нравится.", en: "That is a very fashionable colour, and I like it." }, drill: { jp: "Модный цвет очень яркий", en: "A fashionable colour is very bright" }, hint: "MOD-nyy, stress first. Built on мода, fashion, which is the French mode. The front is the masculine form, as every adjective front in this course is (unit1.js §3)." },
        { id: "ru-u18l4-udobno", type: "vocab", front: "удобно", reading: "udobno", meaning: "it is comfortable", accept: ["convenient", "comfortably", "it suits"], example: { jp: "Здесь очень удобно, и это приятно.", en: "It is very comfortable here, and that is pleasant." }, drill: { jp: "В этой куртке очень удобно", en: "This jacket is very comfortable" }, hint: "u-DOB-na, stress on DOB. An adverb, so it stands alone: Удобно. It covers comfortable AND convenient — удобная обувь, comfortable shoes; удобное время, a convenient time. The adjective is удобный." },
        { id: "ru-u18l4-podarok", type: "vocab", front: "подарок", reading: "podarok", meaning: "a present", accept: ["a gift", "the present", "the gift"], example: { jp: "Это подарок, и он очень красивый.", en: "This is a present, and it is very beautiful." }, drill: { jp: "Подарок уже в сумке", en: "The present is in the bag already" }, hint: "pa-DA-rak, stress on DA. Masculine, with a fleeting о — подарок, but подарка — so the ending eats it, exactly like порядок in unit 15. Built on дарить, to give as a gift." },
      ],
    },
  ],
};
