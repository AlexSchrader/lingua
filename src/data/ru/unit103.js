// RU Unit 103 — Переговоры и сбыт ("Negotiation and the sale") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 1 (u98–u110). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit61.js §1–§8, and
// ru/unit98.js §1–§7d for this band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Business and negotiation" AND THREE UNITS SPENT ITS
// GROUND. u42 Работа и карьера owns the JOB (служба · отдел · должность ·
// карьера · проект · клиент · заказ · договор · премия · собеседование ·
// резюме · вакансия · стаж · навык · обязанность · нанимать · увольнять ·
// управлять · конкурс); u44 Деньги и услуги owns PERSONAL money (доход · расход ·
// бюджет · налог · кредит · услуга · аренда · товар · обмен · оплата · торговля ·
// выгодный · зарабатывать); u76 Экономика страны owns the MACRO (экономика ·
// отрасль · инфляция · прибыль · убыток · биржа · оборот · предприятие ·
// производитель · потребитель · экспорт · импорт). So u103 NARROWS to the DEAL
// AND THE SALE: how terms are agreed and broken, how goods reach a buyer, what a
// sale costs and earns, and how a market is won. A learner could already name a
// contract and a customer and could not name a deposit, a supplier, a mark-up,
// a merger or a haggle.
//
// ⚠️ CROSS-BLOCK BOUNDARY, stated because the allocation puts the words close:
// **u103 owns `переговоры`.** u130 Дипломатия и мир will reach for it — it is a
// BUSINESS word first and the lower slot owns it; u130 uses it in examples and
// cards `делегация` and `посредничество` instead. **u126 Строительство owns
// `подрядчик` and `смета`**, which this unit yielded. **u108 owns `компенсация`,
// `выплата` and `возмещение`; u103 owns `неустойка`** — the insurance payout and
// the contractual forfeit are different things and sit one unit apart.
//
// ⚠️ SIX CANDIDATES REFUSED, each for a stated reason:
//   `накладная` — A SUBSTANTIVISED ADJECTIVE (накладная < накладной), barred by
//        unit1.js §5's last rule and unit98.js §4. It probes free as a string.
//        `отгрузка` carries the shipping-paperwork job instead.
//   `контракт` — legal, and it would have to be glossed as a synonym of
//        `договор` (u42): one prompt, two right answers through
//        `normalizeMeaning`. Dropped rather than reglossed into vagueness.
//   `обязательство` — `обязанность` (u42) hands it over. §D.
//   `выручка` — `выручать` (u70, "to bail out") plus `получать` make it
//        guessable, and `сбыт` is the sharper word for this unit's subject.
//   `предоплата` — `оплата` (u44) plus пред-, both available: a learner who has
//        the parts composes the whole. `задаток` is opaque and is carded instead.
//   `посредник` · `посредничество` — `посредством` (u62) is the same root, and
//        u130 Дипломатия owns the go-between anyway.
//   Dropped for count at 24, all legal: `бартер` · `франчайзинг` · `комиссия` ·
//        `тендер` (and `тендер` also sits a letter from `тенденция`, u69).
//
// ⚠️ `конкуренция` ALLOWED although `конкурс` is TAKEN (u42), and the reasoning
// rather than the verdict: конкурс in this course is an open contest for a post
// or a prize, and knowing it hands a learner nothing about firms contending for
// the same buyers. It is also a MEASURED HOLE — u76 Экономика страны cards
// `монополия` and has no word for competition at all, in a unit about an economy.
//
// ⚠️ `неустойка` IS NOT A не+X VIOLATION. unit51.js §3 bars не + a TAUGHT word;
// there is no word `устойка` in Russian at all, let alone a carded one, so the
// не- here is frozen inside a single legal lexeme. Compare `нехватка` (u70),
// which shipped at B1 on the same reasoning.
//
// ⚠️ `маркетинг` IS AN EXACT FREE PASS IF GLOSSED AS ITSELF — its reading IS
// "marketing". Reglossed as a description, as are its accept entries.
// unit98.js §7c.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT103 = {
  id: "ru-u103",
  lang: "ru",
  title: "Переговоры и сбыт",
  order: 103,
  stage: "b2",
  lessons: [
    {
      id: "ru-u103l1",
      unit: 103,
      lesson: 1,
      title: "Striking and breaking a deal",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Agree and unwind terms — the talks, the bargain struck, the other side, the deposit that holds it, terminating an agreement and the penalty for failing one.",
      items: [
        { id: "ru-u103l1-peregovory", type: "vocab", front: "переговоры", reading: "peregovory", meaning: "a formal talking-through of terms", accept: ["bargaining between two sides over conditions", "the sitting-down to settle terms", "formal talks towards an agreement"], example: { jp: "Переговоры шли целую неделю, однако договориться было нельзя.", en: "The talks went on a whole week, yet it was impossible to come to terms." }, drill: { jp: "Переговоры здесь идут очень долго", en: "The talks here go on very long" }, hint: "pe-re-ga-VO-ry — stress on VO, and the first о reduces to a. ⚠️ PLURAL ONLY and MASCULINE — there is no singular переговор in use, exactly like `прения` from unit 98 and `похороны` from unit 59. Built on говорить from unit 4 with пере-, the prefix of back-and-forth. ⚠️ It is u103's word, not u130's: see this unit's header." },
        { id: "ru-u103l1-sdelka", type: "vocab", front: "сделка", reading: "sdelka", meaning: "an agreed exchange on set terms", accept: ["a bargain struck between parties", "a concluded piece of business", "an arranged transaction"], example: { jp: "Сделка была выгодная, зато подписывать её никто не хотел.", en: "The bargain was advantageous, but nobody wanted to sign it." }, drill: { jp: "Сделка была очень выгодная", en: "The bargain was very advantageous" }, hint: "SDEL-ka — stress on the first syllable. FEMININE (-а). From `сделать` in unit 31. ⚠️ Carries a faint whiff of something arranged behind closed doors — сделка со следствием is a plea bargain — where `договор` from unit 42 is the neutral paper. The verb phrase is заключить сделку." },
        { id: "ru-u103l1-partnyor", type: "vocab", front: "партнёр", reading: "partnyor", meaning: "the other side you run a venture with", accept: ["somebody you work a business with jointly", "a co-party in an enterprise", "the firm you act together with"], example: { jp: "Партнёр обещал поставку в срок, и договор подписали быстро.", en: "The partner promised delivery on time, and the contract was signed quickly." }, drill: { jp: "Его партнёр живёт в другом городе", en: "His partner lives in another city" }, hint: "part-NYOR — stress on the last syllable, with the ё always written, as unit 1 §7 requires. MASCULINE. ⚠️ Russian uses it for a business partner, a dance partner AND, increasingly, an unmarried couple — партнёр, not муж or жена, which unit 10 taught." },
        { id: "ru-u103l1-zadatok", type: "vocab", front: "задаток", reading: "zadatok", meaning: "money paid up front to hold a deal", accept: ["a deposit put down in advance", "an earnest payment securing terms", "a sum paid to bind an agreement"], example: { jp: "Задаток они взяли сразу, а товар привезли только через месяц.", en: "They took the deposit at once, and brought the goods only a month later." }, drill: { jp: "Задаток они взяли сразу же", en: "They took the deposit straight away" }, hint: "za-DA-tak — stress on DA, and the final о reduces to a. MASCULINE, and ⚠️ the о DROPS in every other form: задаткА, задаткИ — the `отец` class from unit 10 again. ⚠️ A задаток is FORFEIT if you walk away, which is what separates it from a plain аванс." },
        { id: "ru-u103l1-rastorgat", type: "vocab", front: "расторгать", reading: "rastorgat", meaning: "to break off an agreement formally", accept: ["to terminate a contract by right", "to dissolve an agreement legally", "to bring a standing agreement to an end"], example: { jp: "Такой договор расторгать трудно, и юристы это объяснили сразу.", en: "Such a contract is hard to terminate, and the lawyers explained that at once." }, drill: { jp: "Этот договор лучше не расторгать", en: "This contract is better not terminated" }, hint: "ras-tar-GAT — stress on the last syllable, and the first о reduces to a. IMPERFECTIVE; the perfective is расторгнуть. ⚠️ A LEGAL word and nothing else: you расторгать a contract or a marriage, never a friendship. It takes the accusative directly." },
        { id: "ru-u103l1-neustoyka", type: "vocab", front: "неустойка", reading: "neustoyka", meaning: "a penalty owed for breaking terms", accept: ["a sum payable for failing an agreement", "a contractual forfeit", "damages fixed in the contract beforehand"], example: { jp: "Неустойка была такая большая, что платить её никто не стал.", en: "The forfeit was so large that nobody set about paying it." }, drill: { jp: "Неустойка здесь слишком большая", en: "The forfeit here is too large" }, hint: "ni-us-TOY-ka — stress on TOY, and the е reduces to i. FEMININE (-а). ⚠️ IT IS NOT A не+X FORMATION IN THE SENSE THE RULES FORBID: there is no Russian word `устойка` at all, so the не- is frozen inside one legal lexeme, exactly as in `нехватка` from unit 70. ⚠️ Distinguish it from u108's `возмещение`, which repays a loss rather than punishing a breach." },
      ],
    },
    {
      id: "ru-u103l2",
      unit: 103,
      lesson: 2,
      title: "Getting the goods there",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe supply — a delivery owed, the supplying firm, dispatch from store, the organising of movement — and tell bulk trade from retail.",
      items: [
        { id: "ru-u103l2-postavka", type: "vocab", front: "поставка", reading: "postavka", meaning: "the supplying of goods under an agreement", accept: ["a delivery owed under terms", "the furnishing of goods to a buyer", "a consignment supplied as promised"], example: { jp: "Поставка пришла поздно, зато товар был хороший.", en: "The delivery came late, but the goods were good." }, drill: { jp: "Поставка пришла совсем поздно", en: "The delivery came quite late" }, hint: "pas-TAV-ka — stress on TAV, and the first о reduces to a. FEMININE (-а). From ставить, unit 57. ⚠️ A CONTRACTUAL word: a поставка is what a договор obliges somebody to send. For the act of handing a parcel over Russian says доставка — one letter apart, and both exist." },
        { id: "ru-u103l2-postavshchik", type: "vocab", front: "поставщик", reading: "postavshchik", meaning: "the firm that supplies the goods", accept: ["whoever delivers what was ordered", "the supplying side of a contract", "a vendor to a business"], example: { jp: "Поставщик хочет новых цен, и договор надо обсуждать снова.", en: "The supplier wants new prices, and the contract has to be discussed again." }, drill: { jp: "Поставщик хочет совсем новых цен", en: "The supplier wants quite new prices" }, hint: "pas-taf-SHCHIK — stress on the last syllable, the first о reduces to a, and в before щ is said f. MASCULINE. ⚠️ The -щик suffix is Russian's standard maker-of-trades ending, as in сварщик and уборщик; it is not carded as a rule, so learn it from this word." },
        { id: "ru-u103l2-otgruzka", type: "vocab", front: "отгрузка", reading: "otgruzka", meaning: "the sending out of goods from store", accept: ["the dispatch of a consignment", "the loading-out of ordered goods", "shipment from a warehouse"], example: { jp: "Отгрузка идёт каждое утро, и ждать здесь никто не будет.", en: "Dispatch goes on every morning, and nobody here will wait." }, drill: { jp: "Отгрузка здесь идёт очень быстро", en: "Dispatch here goes very fast" }, hint: "ad-GRUZ-ka — stress on GRUZ, the о reduces to a, and т before г is said d. FEMININE (-а). Built on груз, which is unit 125's card — so this word reaches you before its own root does. ⚠️ Narrower than `поставка`: the отгрузка is the moment goods leave the `склад` from unit 87." },
        { id: "ru-u103l2-logistika", type: "vocab", front: "логистика", reading: "logistika", meaning: "the organising of moving and storing goods", accept: ["the management of supply and transport", "the planning of how goods get where they go", "the handling of movement and storage"], example: { jp: "Логистика здесь дороже самого товара, и считать это надо сразу.", en: "The transport here costs more than the goods themselves, and that has to be reckoned in from the start." }, drill: { jp: "Логистика стала очень дорогой", en: "The transport side has become very expensive" }, hint: "la-GIS-ti-ka — stress on GIS, and the о reduces to a. FEMININE (-а). ⚠️ A recent loan and now completely ordinary in Russian business speech — логист is the job title. ⚠️ Unrelated to `логика` from unit 52 despite the look: different Greek roots." },
        { id: "ru-u103l2-optovyy", type: "vocab", front: "оптовый", reading: "optovyy", meaning: "sold in bulk to those who resell", accept: ["of trade in large lots", "wholesale in kind", "supplying in quantity rather than singly"], example: { jp: "Оптовый покупатель платит меньше, зато покупает сразу много.", en: "A bulk buyer pays less, but buys a great deal at once." }, drill: { jp: "Оптовый покупатель платит заметно меньше", en: "A bulk buyer pays noticeably less" }, hint: "ap-TO-vyy — stress on TO, and the о reduces to a. ADJECTIVE. ⚠️ STRESS WARNING: Russians also say Оптовый with first-syllable stress, and both are heard; ap-TO-vyy is the dictionary standard. The noun is опт, and «купить оптом» is to buy wholesale." },
        { id: "ru-u103l2-roznichnyy", type: "vocab", front: "розничный", reading: "roznichnyy", meaning: "sold singly to the public", accept: ["of trade direct to the buyer", "retail in kind", "selling by the piece to the end buyer"], example: { jp: "Розничный магазин живёт наценкой, и это знает каждый.", en: "A retail shop lives on its mark-up, and everyone knows that." }, drill: { jp: "Розничный магазин здесь совсем маленький", en: "The retail shop here is quite small" }, hint: "ROZ-nich-nyy — stress on the first syllable. ADJECTIVE, the opposite of `оптовый` and a pair worth learning in one go. ⚠️ The phrase on every Russian price list is розничная цена, the retail price, and в розницу means by the piece." },
      ],
    },
    {
      id: "ru-u103l3",
      unit: 103,
      lesson: 3,
      title: "What a sale costs and earns",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Reckon up a business — running costs, the mark-up, whether it pays, how soon an outlay comes back, getting the stock sold, and rivalry for the same buyers.",
      items: [
        { id: "ru-u103l3-izderzhki", type: "vocab", front: "издержки", reading: "izderzhki", meaning: "what it costs to keep a business running", accept: ["the outlays a firm carries", "running costs borne by an operation", "the expense side of a business"], example: { jp: "Издержки стали больше, а прибыль всё та же.", en: "The running costs have grown, and the profit is just the same." }, drill: { jp: "Издержки здесь слишком большие", en: "The running costs here are too large" }, hint: "iz-DERZH-ki — stress on DERZH. ⚠️ PLURAL ONLY in this sense and FEMININE; the singular издержка exists only in dialect. From `держать` in unit 57. ⚠️ Narrower than `расход` from unit 44, which is any spending: издержки are what the operation itself eats. Also figurative — издержки производства, издержки роста." },
        { id: "ru-u103l3-natsenka", type: "vocab", front: "наценка", reading: "natsenka", meaning: "the amount added on to the cost price", accept: ["a mark-up put on goods", "what a seller adds above what he paid", "the margin added onto a price"], example: { jp: "Наценка в этом магазине огромная, и покупатели это понимают.", en: "The mark-up in this shop is enormous, and the buyers understand that." }, drill: { jp: "Наценка здесь просто огромная", en: "The mark-up here is simply enormous" }, hint: "na-TSEN-ka — stress on TSEN. FEMININE (-а). Built on цена, a price, from unit 12's family. ⚠️ The word on Russian café invoices: торговая наценка. Distinguish it from `пошлина` from unit 76, which a state charges, and from `налог` from unit 44." },
        { id: "ru-u103l3-rentabelnost", type: "vocab", front: "рентабельность", reading: "rentabelnost", meaning: "the degree to which a business pays its way", accept: ["how profitable an operation is", "the earning power of a business", "the measure of whether running it is worth it"], example: { jp: "Рентабельность этого завода очень низкая, и о прибыли говорить смешно.", en: "This plant's profitability is very low, and it is laughable to talk about profit." }, drill: { jp: "Рентабельность здесь совсем низкая", en: "Profitability here is quite low" }, hint: "ren-TA-bel-nast — stress on TA. FEMININE despite the -ь, like every -ость noun. ⚠️ The adjective рентабельный means worth running, and «нерентабельно» is the standard verdict before a Russian plant is closed. Not the same as `прибыль` from unit 76, which is the money itself." },
        { id: "ru-u103l3-okupaemost", type: "vocab", front: "окупаемость", reading: "okupaemost", meaning: "how soon an outlay pays itself back", accept: ["the time money put in takes to return", "the rate at which spending is recovered", "payback on an investment"], example: { jp: "Окупаемость такого проекта лет десять, и ждать столько никто не будет.", en: "The payback on such a project is some ten years, and nobody will wait that long." }, drill: { jp: "Окупаемость здесь очень долгая", en: "The payback here is very long" }, hint: "a-ku-PA-ye-mast — stress on PA, and the first о reduces to a. FEMININE despite the -ь. From купить, unit 31, by way of окупаться, to pay for itself. ⚠️ The phrase is срок окупаемости, the payback period — the first number a Russian investor asks for." },
        { id: "ru-u103l3-sbyt", type: "vocab", front: "сбыт", reading: "sbyt", meaning: "the getting of made goods sold", accept: ["the moving of stock to buyers", "the selling-on of what is produced", "distribution of output to market"], example: { jp: "Сбыт стал хуже, как только пришёл новый поставщик.", en: "Sales got worse as soon as a new supplier came along." }, drill: { jp: "Сбыт стал заметно хуже", en: "Sales got noticeably worse" }, hint: "SBYT — one syllable, with the ы from unit 5. MASCULINE. From быть, which unit 22 taught. ⚠️ Not the ACT of one sale but the whole channel: отдел сбыта is the sales department, and рынок сбыта is the market a factory sells into. ⚠️ Careful of `быт` (everyday life, u82's territory) — the с- is doing all the work." },
        { id: "ru-u103l3-konkurentsiya", type: "vocab", front: "конкуренция", reading: "konkurentsiya", meaning: "firms contending for the same buyers", accept: ["rivalry between sellers in a market", "the contest for the same customers", "competing for one body of trade"], example: { jp: "Конкуренция здесь очень сильная, и цены держать трудно.", en: "Competition here is very strong, and prices are hard to hold." }, drill: { jp: "Такая конкуренция мешает всем", en: "Such competition gets in everybody's way" }, hint: "kan-ku-REN-tsi-ya — stress on REN, and the о reduces to a. FEMININE (-я). ⚠️ It only LOOKS like `конкурс` from unit 42: a конкурс is an open contest for a post or a prize, and knowing it tells you nothing about firms fighting for customers. The rival himself is a конкурент." },
      ],
    },
    {
      id: "ru-u103l4",
      unit: 103,
      lesson: 4,
      title: "Winning the market",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about competing for buyers — a trusted name, the winning of demand, the range on offer, a sale by bidding, haggling, and two firms becoming one.",
      items: [
        { id: "ru-u103l4-brend", type: "vocab", front: "бренд", reading: "brend", meaning: "a name a product is known and trusted by", accept: ["a trading name carrying a reputation", "the badge a product sells under", "a recognised commercial name"], example: { jp: "Бренд стоит дороже самого завода, и продавать его не станут.", en: "The brand name is worth more than the plant itself, and they will not sell it." }, drill: { jp: "Этот бренд знают во всём мире", en: "This brand name is known all over the world" }, hint: "BREND — one syllable. MASCULINE. ⚠️ A recent loan that pushed out the older Russian торговая марка, which is still the legal term. ⚠️ Also used of people — он сам себе бренд — and the verb is раскручивать бренд, to build one up." },
        { id: "ru-u103l4-marketing", type: "vocab", front: "маркетинг", reading: "marketing", meaning: "the business of finding and holding buyers", accept: ["the work of bringing goods to a market", "the study and winning of demand", "commercial promotion as a trade"], example: { jp: "Маркетинг у них сильный, зато товар самый обычный.", en: "Their promotion is strong, but the product is perfectly ordinary." }, drill: { jp: "Маркетинг у них очень сильный", en: "Their promotion is very strong" }, hint: "MAR-ke-ting — stress on the first syllable. MASCULINE. ⚠️ Glossed the long way round on purpose: its reading IS the English word, so «marketing» would let a learner read the answer off the prompt — unit 1 §9. ⚠️ STRESS WARNING: Russians also say mar-KE-ting and both are heard; the first-syllable stress follows the English and is the dictionary form." },
        { id: "ru-u103l4-assortiment", type: "vocab", front: "ассортимент", reading: "assortiment", meaning: "the range of goods on offer", accept: ["the spread of lines a shop carries", "the selection available for sale", "a trader's range of stock"], example: { jp: "Ассортимент здесь маленький, однако цены очень хорошие.", en: "The range here is small, yet the prices are very good." }, drill: { jp: "Ассортимент здесь совсем маленький", en: "The range here is quite small" }, hint: "as-sar-ti-MENT — stress on the last syllable, the о reduces to a, and the сс is held. MASCULINE. ⚠️ A Soviet-era shop word that is still everywhere: «богатый ассортимент» on a sign means a wide choice. Distinguish it from `набор` from unit 100, which is one matched set." },
        { id: "ru-u103l4-auktsion", type: "vocab", front: "аукцион", reading: "auktsion", meaning: "a sale where the highest bid wins", accept: ["a public sale by bidding", "a sale to the best offer made aloud", "an open bidding for a lot"], example: { jp: "На аукционе эту книгу купили за огромные деньги.", en: "At the auction this book was bought for an enormous sum." }, drill: { jp: "Аукцион шёл почти весь день", en: "The auction went on nearly all day" }, hint: "a-uk-tsi-ON — stress on the last syllable, and the opening ау is TWO vowels, a-u. MASCULINE. ⚠️ Russian state property is sold this way and the word is in the news constantly: аукцион на право аренды. The bid itself is ставка, which is unit 108's card." },
        { id: "ru-u103l4-torg", type: "vocab", front: "торг", reading: "torg", meaning: "haggling back and forth over a price", accept: ["the pushing of a price up or down", "bargaining over what a thing costs", "the to and fro over a figure"], example: { jp: "Торг шёл долго, и в итоге цену сделали меньше.", en: "The haggling went on a long time, and in the end the price was brought down." }, drill: { jp: "Торг здесь идёт очень долго", en: "The haggling here goes on very long" }, hint: "TORG — one syllable. MASCULINE, and ⚠️ its oblique forms move the stress: торгА. From the same root as `торговля` in unit 44, which is trade as an activity; a торг is one haggle. ⚠️ THE PHRASE IN EVERY RUSSIAN SMALL AD: «торг возможен», the price is negotiable." },
        { id: "ru-u103l4-sliyanie", type: "vocab", front: "слияние", reading: "sliyanie", meaning: "the joining of two firms into one", accept: ["a merger of two companies", "the running together of two businesses", "the folding of one firm into another"], example: { jp: "Слияние двух фирм обсуждали год, а решили за один день.", en: "The merger of the two firms was discussed for a year, and decided in one day." }, drill: { jp: "Слияние этих фирм никому не нужно", en: "The merger of these firms is no use to anyone" }, hint: "sli-YA-ni-ye — stress on YA, and the и is said as one sound before я. NEUTER (-ие). From сливаться, to flow together. ⚠️ ALSO LITERAL, of rivers: слияние двух рек, and that is the image behind the business sense. Distinguish it from `союз` from unit 51, which joins without dissolving." },
      ],
    },
  ],
};
