// RU Unit 44 — Деньги и услуги ("Money and services") — A2
// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 2 (u41–u50). Binding: ru/unit1.js §1–§10 and §A–§D, then ru/unit31.js
// §1–§7. The block-wide record is in ru/unit50.js §B1–§B7.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Nature and science" AND BLOCK 1 WARNED THIS SLOT
// WOULD BE DOUBLE-BOOKED — ru/unit31.js §6's u36 row says so by name: "block 2's
// u44 is «Nature and science», so the theme was doubly spoken for". A1's u26
// Природа и животные is the nature unit (дерево · цветок · трава · лист · лес ·
// река · море · гора · поле · небо · воздух · камень · песок · остров · звезда ·
// луна), block 1 took the slot's grammar at u36, and "science and the natural
// world" is block 3's assigned domain. Rethemed to MONEY AND SERVICES BEYOND
// BLOCK 1, one of my five assigned domains.
//
// THE MEASURED HOLE, AND IT IS NARROWER THAN THE DOMAIN NAME SUGGESTS. Money is
// the most heavily written theme in the language already:
//   u12 Надписи         цена · дорого · дёшево · скидка · касса · рубль · копейка
//   u18 Одежда и покупки размер · чек · покупать · продавать · выбирать
//   u25 Работа и учёба   зарплата
//   u37 (block 1)        много · мало · количество · число · сумма · вес · часть ·
//                        килограмм · литр · метр · итог · достаточно — the genitive
//                        plural unit, with counting and measure
// So counting, measuring, prices and shopping are DONE. What no unit gives is the
// MONEY ITSELF as a flow — income against outgoings, a budget, tax, credit, a
// contribution — the physical cash, and the language of paying for a SERVICE
// rather than buying a THING. That is this unit's 24.
//
// FOUR CALLS I MADE, with the reasoning:
//   `бесплатный` "free of charge" IS carded even though ru/unit40.js's header
//        refuses `безопасный` on a без+X rule. The rule holds because there the
//        stripped word IS carded — `опасный` is at u40l3 — so безопасный is
//        computable. Here `плата` is carded NOWHERE; only `платить` (u18) is, and
//        «to pay» does not give a learner «free of charge». The rule is about
//        derivability, not about the letters без.
//   `дешёвый` "cheap" beside u12 `дёшево` "it is cheap". This is exactly the
//        adjective/adverb trap ru/unit40.js's header documents, and it is clear:
//        дёшево's gloss normalises to "it is cheap" and дешёвый's to "cheap".
//        Measured, not assumed — and the hint names the adverb partner.
//   `банкомат` beside u9 `банк`. A compound of банк + автомат, and neither part
//        gives you the sense; a learner who knows «a bank» cannot produce «a cash
//        machine». Carded, with the derivation in the hint.
//   `зарабатывать` "to earn" shares the root раб- with u4 `работать`, which
//        unit1.js §D uses as its example of an avoided pair (`работа`). The
//        difference: работа IS работать with a noun ending, whereas зарабатывать
//        is a prefix plus a derived stem and means something работать does not.
//        Carded; the hint names работать so the learner sees the family.
//
// ⚠️ REFUSED IN THIS UNIT:
//   `наличные` — a plural-only substantivised ADJECTIVE (наличный), so both
//        unit1.js §5's inflected-form rule and the participle deferral bite.
//        `монета` and `купюра` carry the cash sense as proper nouns instead.
//   `стоимость` — vs u18 `стоит`. `платёж` — vs u18 `платить`. `продажа` and
//        `покупка` — vs u18 `продавать` and `покупать`. All the §D class.
//   `долг` — vs u11 `долго` and u24 `должен`, three words on one root.
//   `дорогой` — vs u4 `дорога` AND u12 `дорого`. A three-way, and unlike
//        дешёвый/дёшево there is no second English adjective to move to: "dear"
//        is archaic and "expensive" is what дорого already means.
//   `экономика` — measured free, but "the economy" is society, which is block 3's
//        assigned domain. Left for them and flagged here so nobody thinks it was
//        missed.
//   `рынок` · `касса` · `чек` · `сумма` · `цена` · `скидка` — all TAKEN.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT44 = {
  id: "ru-u44",
  lang: "ru",
  title: "Деньги и услуги",
  order: 44,
  stage: "a2",
  lessons: [
    {
      id: "ru-u44l1",
      unit: 44,
      lesson: 1,
      title: "What comes in and what goes out",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about income against outgoings, a budget, tax, a loan and a contribution you have to pay.",
      items: [
        { id: "ru-u44l1-dokhod", type: "vocab", front: "доход", reading: "dokhod", meaning: "income", accept: ["earnings", "money coming in", "revenue"], example: { jp: "Их доход был совсем маленький.", en: "Their income was quite small." }, drill: { jp: "Доход был совсем маленький", en: "The income was quite small" }, hint: "da-KHOT — stress on the last syllable, the о reduces to a and the final д devoices to t. MASCULINE. Built from до + ход, «what comes to you» — the opposite number is расход, the next card." },
        { id: "ru-u44l1-raskhod", type: "vocab", front: "расход", reading: "raskhod", meaning: "an outgoing", accept: ["an expense", "money going out", "expenditure"], example: { jp: "Это был очень большой расход.", en: "That was a very large expense." }, drill: { jp: "Расход был слишком большой", en: "The outgoing was too large" }, hint: "ras-KHOT — stress on the last syllable, final д devoices to t. MASCULINE. From рас + ход, «what goes away». Russian accounts always name the pair together: доходы и расходы." },
        { id: "ru-u44l1-byudzhet", type: "vocab", front: "бюджет", reading: "byudzhet", meaning: "a budget", accept: ["a spending plan", "an allocated sum", "the public purse"], example: { jp: "Наш бюджет был очень маленький.", en: "Our budget was very small." }, drill: { jp: "Бюджет будет готов в январе", en: "The budget will be ready in January" }, hint: "byu-DZHET — stress on the last syllable; бю is a soft b. MASCULINE. A Russian student «на бюджете» is one whose place is state-funded rather than paid for." },
        { id: "ru-u44l1-nalog", type: "vocab", front: "налог", reading: "nalog", meaning: "a tax", accept: ["a duty paid to the state", "taxation", "a levy"], example: { jp: "Этот налог совсем небольшой.", en: "That tax is quite small." }, drill: { jp: "Налог был совсем небольшой", en: "The tax was quite small" }, hint: "na-LOK — stress on the last syllable, and the final г devoices to k (unit 6). MASCULINE. From на + лог, what is «laid on» you. The tax office is налоговая." },
        { id: "ru-u44l1-kredit", type: "vocab", front: "кредит", reading: "kredit", meaning: "a loan", accept: ["credit", "borrowed money", "a bank loan"], example: { jp: "Они взяли кредит в банке.", en: "They took out a loan at the bank." }, drill: { jp: "Кредит был слишком большой", en: "The loan was too big" }, hint: "kre-DIT — stress on the last syllable. MASCULINE. «Взять кредит» is to take out a loan, and «в кредит» means on hire purchase." },
        { id: "ru-u44l1-vznos", type: "vocab", front: "взнос", reading: "vznos", meaning: "a contribution", accept: ["an instalment", "a membership fee", "a payment in"], example: { jp: "Первый взнос был очень большой.", en: "The first contribution was very large." }, drill: { jp: "Взнос был совсем небольшой", en: "The contribution was quite small" }, hint: "One syllable, VZNOS, with no vowel until the о. MASCULINE. From в + нос(ить), «what you carry in»: a membership fee, or one instalment of a larger sum." },
      ],
    },
    {
      id: "ru-u44l2",
      unit: 44,
      lesson: 2,
      title: "Paying for a service, not a thing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a service, rent, goods, an exchange, a currency and a cash machine.",
      items: [
        { id: "ru-u44l2-usluga", type: "vocab", front: "услуга", reading: "usluga", meaning: "a service", accept: ["a favour", "something done for you", "a paid service"], example: { jp: "Эта услуга в отеле совсем не дорогая.", en: "That service at the hotel is not expensive at all." }, drill: { jp: "Услуга была совсем не дорогая", en: "The service was not expensive at all" }, hint: "u-SLU-ga — stress on SLU. FEMININE. ⚠️ Related to служба (unit 42) but a different word and a different idea: a служба is an organisation, an услуга is one thing done for you. «Оказать услугу» is to do someone a favour." },
        { id: "ru-u44l2-arenda", type: "vocab", front: "аренда", reading: "arenda", meaning: "rent", accept: ["a lease", "hire of property", "renting"], example: { jp: "Аренда в этом городе очень дорогая.", en: "Rent in this city is very expensive." }, drill: { jp: "Аренда здесь очень дорогая", en: "Rent is very expensive here" }, hint: "a-RYEN-da — stress on RYEN. FEMININE. It names the arrangement and the money both. «Сдавать в аренду» is to let something out." },
        { id: "ru-u44l2-tovar", type: "vocab", front: "товар", reading: "tovar", meaning: "goods", accept: ["merchandise", "a product for sale", "stock"], example: { jp: "Этот товар был очень дорогой.", en: "That product was very expensive." }, drill: { jp: "Товар был совсем плохой", en: "The goods were quite poor" }, hint: "ta-VAR — stress on the last syllable, and the о reduces to a. MASCULINE. In the singular it means the stock as a whole, like English «goods»; товары is a list of separate products." },
        { id: "ru-u44l2-obmen", type: "vocab", front: "обмен", reading: "obmen", meaning: "an exchange", accept: ["a swap", "a trade of one thing for another", "currency exchange"], example: { jp: "Обмен был совсем не выгодный.", en: "The exchange was not favourable at all." }, drill: { jp: "Обмен здесь совсем не выгодный", en: "The exchange here is not favourable at all" }, hint: "ab-MYEN — stress on the last syllable, the о reduces to a. MASCULINE. Same root as менять (unit 24). A bureau de change is an обмен валюты — the next card is that second word." },
        { id: "ru-u44l2-valyuta", type: "vocab", front: "валюта", reading: "valyuta", meaning: "a currency", accept: ["foreign money", "hard currency", "a national money"], example: { jp: "Какая валюта в этой стране?", en: "Which currency is used in that country?" }, drill: { jp: "Валюта здесь совсем другая", en: "The currency is quite different here" }, hint: "va-LYU-ta — stress on LYU. FEMININE. In Soviet and post-Soviet usage валюта on its own means FOREIGN currency — «у меня есть валюта» implies dollars or euros, not roubles." },
        { id: "ru-u44l2-bankomat", type: "vocab", front: "банкомат", reading: "bankomat", meaning: "a cash machine", accept: ["an ATM", "a cashpoint", "a money machine"], example: { jp: "Банкомат около нашего дома не работает.", en: "The cash machine near our house is not working." }, drill: { jp: "Банкомат около магазина не работает", en: "The cash machine near the shop is not working" }, hint: "ban-ka-MAT — stress on the last syllable. MASCULINE. Built from банк (unit 9) + автомат, and neither half gives you the meaning on its own, which is why it is its own card." },
      ],
    },
    {
      id: "ru-u44l3",
      unit: 44,
      lesson: 3,
      title: "The cash in your hand",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name a coin, a note and a wallet, and talk about payment, trade and whether a deal is worth it.",
      items: [
        { id: "ru-u44l3-moneta", type: "vocab", front: "монета", reading: "moneta", meaning: "a coin", accept: ["a piece of metal money", "a small coin"], example: { jp: "Эта монета очень старая.", en: "That coin is very old." }, drill: { jp: "Монета была совсем старая", en: "The coin was quite old" }, hint: "ma-NYE-ta — stress on NYE, and the о reduces to a. FEMININE. A Russian coin is counted in копейки (unit 12); the notes are the next card." },
        { id: "ru-u44l3-kupyura", type: "vocab", front: "купюра", reading: "kupyura", meaning: "a banknote", accept: ["a paper note", "a bill of money", "a note"], example: { jp: "У меня только большая купюра.", en: "I only have a big note." }, drill: { jp: "Купюра была слишком большая", en: "The note was too big" }, hint: "ku-PYU-ra — stress on PYU. FEMININE. Russian shop assistants ask «помельче нет?» when you hand over a большая купюра — a large note nobody can break." },
        { id: "ru-u44l3-koshelyok", type: "vocab", front: "кошелёк", reading: "koshelyok", meaning: "a purse", accept: ["a wallet", "a money pouch", "a billfold"], example: { jp: "Мой кошелёк был в сумке.", en: "My purse was in my bag." }, drill: { jp: "Кошелёк был в моей сумке", en: "The purse was in my bag" }, hint: "ka-she-LYOK — stress on the LAST syllable, which is where the ё always is (unit 4). MASCULINE. ⚠️ The ё vanishes when the word inflects: кошелёк but кошелькА, кошелькУ." },
        { id: "ru-u44l3-oplata", type: "vocab", front: "оплата", reading: "oplata", meaning: "payment", accept: ["settlement of a bill", "a fee paid", "the act of paying"], example: { jp: "Оплата была только в этой валюте.", en: "Payment was only in that currency." }, drill: { jp: "Оплата была совсем не трудная", en: "The payment was not difficult at all" }, hint: "a-PLA-ta — stress on PLA, and the о reduces to a. FEMININE. Same root as платить (unit 18), but it names the whole process rather than the act, so Russian signs say «оплата картой»." },
        { id: "ru-u44l3-torgovlya", type: "vocab", front: "торговля", reading: "torgovlya", meaning: "trade", accept: ["commerce", "the business of buying and selling", "retail"], example: { jp: "Торговля в этом городе была всегда хорошая.", en: "Trade in that town was always good." }, drill: { jp: "Торговля здесь была всегда хорошая", en: "Trade here was always good" }, hint: "tar-GOV-lya — stress on GOV, and the first о reduces to a. FEMININE. From торговать, to trade — a shop is a точка торговли in official Russian." },
        { id: "ru-u44l3-vygodnyy", type: "vocab", front: "выгодный", reading: "vygodnyy", meaning: "worth it", accept: ["profitable", "advantageous", "a good deal"], example: { jp: "Это был очень выгодный договор.", en: "That was a very good deal of a contract." }, drill: { jp: "Это был очень выгодный обмен", en: "That was a very good exchange" }, hint: "VY-god-nyy — stress on the FIRST syllable, with the tight ы from unit 5. An ADJECTIVE, so it agrees: выгодная цена, выгодное предложение. From выгода, a gain — it means the deal leaves you better off." },
      ],
    },
    {
      id: "ru-u44l4",
      unit: 44,
      lesson: 4,
      title: "Rich, poor, cheap and free",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that someone is rich or poor, that a thing is cheap or free of charge, and that you earn or count money.",
      items: [
        { id: "ru-u44l4-bogatyy", type: "vocab", front: "богатый", reading: "bogatyy", meaning: "rich", accept: ["wealthy", "well off", "abundant"], example: { jp: "Это очень богатый город.", en: "That is a very rich city." }, drill: { jp: "Этот клиент очень богатый", en: "That client is very rich" }, hint: "ba-GA-tyy — stress on GA, and the о reduces to a. An ADJECTIVE: богатая страна, богатое поле. It also means rich in something — «богатый опытом», rich in experience, with the instrumental from unit 32." },
        { id: "ru-u44l4-bednyy", type: "vocab", front: "бедный", reading: "bednyy", meaning: "poor", accept: ["having no money", "badly off", "wretched"], example: { jp: "Это была очень бедная семья.", en: "That was a very poor family." }, drill: { jp: "Мой дядя был совсем бедный", en: "My uncle was quite poor" }, hint: "BYED-nyy — stress on the first syllable. An ADJECTIVE. ⚠️ It carries the same second sense as English: «бедный мальчик!» is «poor boy!» — pitying, not about money." },
        { id: "ru-u44l4-deshyovyy", type: "vocab", front: "дешёвый", reading: "deshyovyy", meaning: "cheap", accept: ["inexpensive", "low-priced", "not costly"], example: { jp: "Этот товар совсем дешёвый.", en: "That product is quite cheap." }, drill: { jp: "Этот кошелёк совсем дешёвый", en: "That purse is quite cheap" }, hint: "de-SHYO-vyy — stress on SHYO, where the ё always takes it. An ADJECTIVE. ⚠️ Its adverb дёшево, «it is cheap», is unit 12's — and note the stress MOVES: DYO-she-va as an adverb, de-SHYO-vyy as an adjective." },
        { id: "ru-u44l4-besplatnyy", type: "vocab", front: "бесплатный", reading: "besplatnyy", meaning: "free of charge", accept: ["costing nothing", "at no cost", "gratis"], example: { jp: "В этом отеле интернет бесплатный.", en: "At this hotel the internet is free." }, drill: { jp: "В общежитии интернет бесплатный", en: "In the hall of residence the internet is free" }, hint: "bes-PLAT-nyy — stress on PLAT. An ADJECTIVE. From без + плата, «without payment» — and note that плата is taught nowhere, so this word is not something you can work out from платить (unit 18). The adverb бесплатно means «for nothing»." },
        { id: "ru-u44l4-zarabatyvat", type: "vocab", front: "зарабатывать", reading: "zarabatyvat", meaning: "to earn", accept: ["to make money", "to bring in a wage", "to earn a living"], example: { jp: "Он хочет зарабатывать больше денег.", en: "He wants to earn more money." }, drill: { jp: "Здесь можно зарабатывать больше денег", en: "You can earn more money here" }, hint: "za-ra-BA-ty-vat — five syllables, stress on BA. First conjugation: зарабатываю, зарабатываешь, зарабатывают. Same root as работать (unit 4), but за- plus the -ыва- stem makes it «to get money BY working», which работать alone never says." },
        { id: "ru-u44l4-schitat", type: "vocab", front: "считать", reading: "schitat", meaning: "to count", accept: ["to add up", "to reckon", "to be of the opinion"], example: { jp: "Бухгалтер должен считать очень точно.", en: "An accountant has to count very accurately." }, drill: { jp: "Нужно считать эти монеты", en: "These coins need counting" }, hint: "shchi-TAT — stress on the last syllable, and сч is said as щ, one long soft sh. First conjugation: считаю, считаешь, считают. ⚠️ Second sense, and it is extremely common: «я считаю, что…» means «I take the view that…»." },
      ],
    },
  ],
};
