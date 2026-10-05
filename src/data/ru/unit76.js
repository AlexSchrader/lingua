// RU Unit 76 — Экономика страны ("The economy of a country") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u74–u86). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, ru/unit74.js §1–§5.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Money and the economy" AND THE MONEY HALF IS SPENT.
// u44 Деньги и услуги is the PERSONAL money unit (доход · расход · бюджет ·
// налог · кредит · взнос · услуга · аренда · товар · обмен · валюта · банкомат ·
// монета · купюра · кошелёк · оплата · торговля · выгодный · богатый · бедный ·
// дешёвый · бесплатный · зарабатывать · считать), u37 owns counting money and
// u12 owns prices. What no unit touches is the MACRO level — a country's
// economy rather than a wallet — so that is this unit's 24.
//
// ⚠️ TAKEN, and each would have looked like an obvious card for this slot:
//   `рынок` (u14l2) · `фирма` (u25l1) · `процент` (u21l4) · `счёт` (u21l4) ·
//   `договор` (u42l2) · `клиент` (u42l1) · `зарплата` (u25l1) · `пенсия` (u42l4).
// ⚠️ REFUSED on unit1.js §D (the taught word gives them away):
//   `конкуренция` (против `конкурс` u42l4 — the brief listed it as free, which is
//        true of the front and not of the lexeme) · `вклад` (против `класть` u15l4)
//        · `долг` (против `должен` u24l2 — in Russian the link is transparent,
//        должен is literally «owing») · `безработица` (без + работа, and u38's
//        header bars без+X as a construction) · `пособие` (против `способ` u32l4) ·
//        `выручка` (против `рука` u20l1 / `ручка` u25l2) · `сделка` (против
//        `делать` u4l4) · `рост` (против `расти` u54l3) · `покупатель` /
//        `продавец` (против `покупать` / `продавать`, both u18l3).
// ⚠️ TWO KEPT DELIBERATELY, with the reasoning rather than the verdict:
//   `производитель` and `потребитель` are the unit's teaching pair — who makes a
//        thing and who uses it. The вод- root is at `водитель` (u8l3) and the
//        треб- root at `требование` (u34l4), so each is one derivation step from
//        a taught word; but a learner who knows водитель «a driver» does not get
//        производитель «a manufacturer», and требование «a requirement» does not
//        give потребитель «a consumer». unit51.js §3's test is one-directional and
//        both pass it. Flagged here so nobody re-litigates it silently.
//   `промышленность` sits on мысл-, the root of `мысль` (u39l3). «Industry» is not
//        reachable from «a thought» in any direction; the shared root is a
//        historical accident and the hint says so.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT76 = {
  id: "ru-u76",
  lang: "ru",
  title: "Экономика страны",
  order: 76,
  stage: "b1",
  lessons: [
    {
      id: "ru-u76l1",
      unit: 76,
      lesson: 1,
      title: "The economy as a whole",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a country's economy, a crisis, inflation and a downturn, and say whether industry is developing.",
      items: [
        { id: "ru-u76l1-ekonomika", type: "vocab", front: "экономика", reading: "ekonomika", meaning: "the economy", accept: ["economics", "a national economy", "the economy of a country"], example: { jp: "Экономика растёт медленно, хотя нефть продают дороже, чем год назад.", en: "The economy is growing slowly, although oil is being sold dearer than a year ago." }, drill: { jp: "Экономика растёт очень медленно", en: "The economy is growing very slowly" }, hint: "e-ka-NO-mi-ka — stress on NO, and the о before it reduces to a. FEMININE (-а). One word for the economy AND for economics the subject; Russian lets context decide." },
        { id: "ru-u76l1-krizis", type: "vocab", front: "кризис", reading: "krizis", meaning: "a crisis", accept: ["the crisis", "a time of crisis", "a crisis in the economy"], example: { jp: "Когда был кризис, люди покупали меньше, и это чувствовал каждый магазин.", en: "When there was a crisis people bought less, and every shop felt it." }, drill: { jp: "Это был очень долгий кризис", en: "That was a very long crisis" }, hint: "KRI-zis — stress on the first syllable. MASCULINE. Of an economy, a company or a person's life — «кризис в семье». The adjective is кризисный." },
        { id: "ru-u76l1-inflyatsiya", type: "vocab", front: "инфляция", reading: "inflyatsiya", meaning: "inflation", accept: ["price inflation", "rising prices", "the inflation"], example: { jp: "Инфляция была такой, что зарплаты хватало на неделю.", en: "Inflation was such that a salary lasted a week." }, drill: { jp: "Инфляция здесь очень высокая", en: "Inflation here is very high" }, hint: "in-FLYA-tsi-ya — stress on FLYA. FEMININE (-я). ⚠️ Russian says «высокая инфляция» — high, never big. The verb a newspaper uses with it is расти from unit 54." },
        { id: "ru-u76l1-spad", type: "vocab", front: "спад", reading: "spad", meaning: "a downturn", accept: ["a slump", "a decline", "a fall in output"], example: { jp: "После спада завод работал только три дня в неделю.", en: "After the downturn the factory worked only three days a week." }, drill: { jp: "Спад начался в январе", en: "The downturn began in January" }, hint: "SPAD — one syllable, and the д goes quiet, so it comes out SPAT. MASCULINE. From падать, to fall — a word Russian uses for a drop in production, in interest or in health." },
        { id: "ru-u76l1-razvitie", type: "vocab", front: "развитие", reading: "razvitie", meaning: "development", accept: ["progress", "the development", "growth of something"], example: { jp: "Развитие этого района зависит от того, будет ли здесь работа.", en: "The development of this district depends on whether there will be work here." }, drill: { jp: "Это очень быстрое развитие", en: "That is very fast development" }, hint: "raz-VI-ti-ye — stress on VI. NEUTER (-ие). From развить, to unwind — of a country, a child or an illness. ⚠️ The drill's frame «зависит от того, будет ли» is B1's standard way of hanging a question off a verb, and unit 79 teaches it." },
        { id: "ru-u76l1-promyshlennost", type: "vocab", front: "промышленность", reading: "promyshlennost", meaning: "industry", accept: ["manufacturing", "the industrial sector", "heavy industry"], example: { jp: "Промышленность здесь старая, поэтому молодёжь уходит в большие города.", en: "Industry here is old, so young people leave for the big cities." }, drill: { jp: "Промышленность здесь очень старая", en: "Industry here is very old" }, hint: "pra-MYSH-len-nast — stress on MYSH, the о reduces to a, and the final -ть is said t. ⚠️ FEMININE despite the -ть, like every -ость noun. ⚠️ Built on the same root as мысль from unit 39 — a historical accident, not a meaning you can use." },
      ],
    },
    {
      id: "ru-u76l2",
      unit: 76,
      lesson: 2,
      title: "Profit, loss and the factory",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say whether a business made a profit or a loss, name a share, the stock exchange and an investment, and talk about a factory.",
      items: [
        { id: "ru-u76l2-pribyl", type: "vocab", front: "прибыль", reading: "pribyl", meaning: "a profit", accept: ["profit", "the profit", "earnings of a business"], example: { jp: "Прибыль есть, но вся она уходит на ремонт старого завода.", en: "There is a profit, but all of it goes on repairing the old factory." }, drill: { jp: "Прибыль была очень маленькая", en: "The profit was very small" }, hint: "PRI-byl — stress on the first syllable. ⚠️ FEMININE despite the -ь. доход from unit 44 is INCOME, money coming in; прибыль is what is left after the расход. Its opposite убыток is the next card." },
        { id: "ru-u76l2-ubytok", type: "vocab", front: "убыток", reading: "ubytok", meaning: "a loss of money", accept: ["a financial loss", "a loss of money", "being in the red"], example: { jp: "Если убыток будет и в этом году, фирму придётся закрывать.", en: "If there is a loss this year too, the firm will have to be closed." }, drill: { jp: "Убыток был очень большой", en: "The loss was very large" }, hint: "u-BY-tak — stress on BY, and the final о reduces to a. MASCULINE, and ⚠️ its о DROPS in every other case: убытка, убытку. The pair прибыль / убыток is Russian's profit and loss, and both are built on быть from unit 22 — «what came TO you» and «what went FROM you»." },
        { id: "ru-u76l2-aktsiya", type: "vocab", front: "акция", reading: "aktsiya", meaning: "a share in a company", accept: ["a share", "shares", "a stock"], example: { jp: "Акция этой фирмы стоит дороже, чем в прошлом году, и никто не знает почему.", en: "A share in that firm costs more than last year, and nobody knows why." }, drill: { jp: "Эта акция стоит очень дорого", en: "That share costs a great deal" }, hint: "AK-tsi-ya — stress on the first syllable. FEMININE (-я). ⚠️ TWO SENSES AND THE OTHER ONE IS COMMONER IN SHOPS: an акция is also a special offer or a campaign — «акция в магазине». Context does all the work." },
        { id: "ru-u76l2-birzha", type: "vocab", front: "биржа", reading: "birzha", meaning: "the stock exchange", accept: ["an exchange", "the exchange", "the stock market"], example: { jp: "Биржа работала весь день, хотя утром никто этого не ждал.", en: "The exchange worked all day, although in the morning nobody expected it to." }, drill: { jp: "Это очень старая биржа", en: "That is a very old exchange" }, hint: "BIR-zha — stress on the first syllable. FEMININE (-а). ⚠️ «биржа труда» is the job centre, which is how most Russians meet the word first." },
        { id: "ru-u76l2-investitsiya", type: "vocab", front: "инвестиция", reading: "investitsiya", meaning: "an investment", accept: ["investment", "the investment", "money put into something"], example: { jp: "Инвестиция была большая, зато теперь завод работает каждый день.", en: "The investment was large, but now the factory works every day." }, drill: { jp: "Это очень большая инвестиция", en: "That is a very large investment" }, hint: "in-ves-TI-tsi-ya — stress on TI. FEMININE (-я). ⚠️ Usually PLURAL in real Russian — «инвестиции в промышленность» — and the singular is carded only because a front must be a citation form." },
        { id: "ru-u76l2-zavod", type: "vocab", front: "завод", reading: "zavod", meaning: "a factory", accept: ["a works", "the plant", "an industrial plant"], example: { jp: "Завод стоит у реки, и почти вся деревня работает на нём.", en: "The factory stands by the river and almost the whole village works at it." }, drill: { jp: "Завод стоит у реки", en: "The factory stands by the river" }, hint: "za-VOD — stress on the last syllable, and the д goes quiet, so it comes out za-VOT. MASCULINE. ⚠️ Russian says работать НА заводе, with на and the prepositional, never в. A фабрика makes light goods; a завод makes metal and machines." },
      ],
    },
    {
      id: "ru-u76l3",
      unit: 76,
      lesson: 3,
      title: "The state's hand in it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a customs duty, the treasury, corruption, a monopoly, a tariff and a concession the state grants.",
      items: [
        { id: "ru-u76l3-poshlina", type: "vocab", front: "пошлина", reading: "poshlina", meaning: "a customs duty", accept: ["a duty", "an import duty", "customs charges"], example: { jp: "Пошлина такая высокая, что везти этот товар через границу не стоит.", en: "The duty is so high that carrying these goods across the border is not worth it." }, drill: { jp: "Пошлина здесь очень высокая", en: "The duty here is very high" }, hint: "POSH-li-na — stress on the first syllable. FEMININE (-а). Narrower than налог from unit 44: a пошлина is charged at a border or by a court, a налог on income or property." },
        { id: "ru-u76l3-kazna", type: "vocab", front: "казна", reading: "kazna", meaning: "the state treasury", accept: ["the treasury", "public funds", "the public purse"], example: { jp: "Деньги в казне есть, но министр говорит, что их мало.", en: "There is money in the treasury, but the minister says there is not much of it." }, drill: { jp: "Казна почти пустая", en: "The treasury is almost empty" }, hint: "kaz-NA — stress on the last syllable. FEMININE (-а). Old and slightly grand, but a live word in news: «деньги из казны». The adjective казённый means state-owned and, of language, deadly dull." },
        { id: "ru-u76l3-korruptsiya", type: "vocab", front: "коррупция", reading: "korruptsiya", meaning: "corruption", accept: ["bribery", "the corruption", "graft"], example: { jp: "О коррупции здесь знают все, но говорить о ней громко никто не хочет.", en: "Everyone here knows about the corruption, but nobody wants to talk about it loudly." }, drill: { jp: "Коррупция здесь очень большая", en: "Corruption here is very great" }, hint: "ka-RRUP-tsi-ya — stress on RRUP, the о reduces to a, and the рр is held. FEMININE (-я). ⚠️ `взятка` «a bribe» is NOT a card: it is built on взять from unit 31 and a learner would guess it." },
        { id: "ru-u76l3-monopoliya", type: "vocab", front: "монополия", reading: "monopoliya", meaning: "a monopoly", accept: ["the monopoly", "sole control of a market", "a market monopoly"], example: { jp: "Если у одной фирмы монополия, цену она ставит такую, какую хочет.", en: "If one firm has a monopoly, it sets whatever price it wants." }, drill: { jp: "У этой фирмы монополия", en: "That firm has a monopoly" }, hint: "ma-na-PO-li-ya — stress on PO, and both о before it reduce to a. FEMININE (-я). Said with у + the genitive: «у государства монополия на газ»." },
        { id: "ru-u76l3-tarif", type: "vocab", front: "тариф", reading: "tarif", meaning: "a rate charged", accept: ["a tariff", "the rate", "a price scale"], example: { jp: "Тариф на свет подняли зимой, и об этом писали все газеты.", en: "The rate for electricity was raised in winter, and all the papers wrote about it." }, drill: { jp: "Тариф на свет подняли", en: "The rate for electricity was raised" }, hint: "ta-RIF — stress on the last syllable. MASCULINE. The published price of a service — electricity, a phone, a train. цена from unit 12 is the price of a thing." },
        { id: "ru-u76l3-lgota", type: "vocab", front: "льгота", reading: "lgota", meaning: "a concession from the state", accept: ["a benefit", "a privilege", "a reduced rate"], example: { jp: "У него есть льгота, поэтому за метро он платит меньше.", en: "He has a concession, so he pays less for the metro." }, drill: { jp: "У него есть льгота", en: "He has a concession" }, hint: "LGO-ta — stress on the first syllable, and ⚠️ it opens with льг, three consonants and no vowel; say the ль and slide. FEMININE (-а). Usually PLURAL in practice — «льготы для студентов». From легко (unit 6) by a path no learner would follow: what makes life lighter." },
      ],
    },
    {
      id: "ru-u76l4",
      unit: 76,
      lesson: 4,
      title: "In, out and who is who",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about exports, imports and a shortage, name an enterprise, and tell a producer from a consumer.",
      items: [
        { id: "ru-u76l4-eksport", type: "vocab", front: "экспорт", reading: "eksport", meaning: "export of goods", accept: ["exports", "the export trade", "selling abroad"], example: { jp: "Экспорт растёт, зато в магазинах этого товара почти нет.", en: "Exports are growing, but there are almost none of these goods in the shops." }, drill: { jp: "Экспорт растёт каждый год", en: "Exports grow every year" }, hint: "EKS-part — stress on the FIRST syllable, unlike English, and the final о reduces to a. MASCULINE. The verb is экспортировать, which this course does not card — Russian says «идти на экспорт» instead." },
        { id: "ru-u76l4-import", type: "vocab", front: "импорт", reading: "import", meaning: "import of goods", accept: ["imports", "the import trade", "buying from abroad"], example: { jp: "Импорт стал дороже, потому что пошлину подняли ещё в январе.", en: "Imports became dearer because the duty was raised back in January." }, drill: { jp: "Импорт стал очень дорогим", en: "Imports have become very expensive" }, hint: "IM-part — stress on the first syllable, and the final о reduces to a. MASCULINE. In speech «импорт» often means the imported goods themselves: «это импорт», that is foreign-made." },
        { id: "ru-u76l4-defitsit", type: "vocab", front: "дефицит", reading: "defitsit", meaning: "a shortage", accept: ["a deficit", "the shortage", "short supply"], example: { jp: "Когда был дефицит, очередь стояла с утра, даже если никто не знал за чем.", en: "When there was a shortage, the queue stood from morning even if nobody knew what for." }, drill: { jp: "Тогда был большой дефицит", en: "There was a big shortage then" }, hint: "de-fi-TSIT — stress on the last syllable. MASCULINE. ⚠️ TWO SENSES: a budget deficit, and — the one every Russian over forty means — empty shelves. «Дефицит» as a period of history needs no explaining there." },
        { id: "ru-u76l4-predpriyatie", type: "vocab", front: "предприятие", reading: "predpriyatie", meaning: "an enterprise", accept: ["a business", "a company", "an undertaking"], example: { jp: "Это предприятие держит почти весь район, поэтому его никто не закрывает.", en: "That enterprise keeps almost the whole district going, so nobody closes it." }, drill: { jp: "Это очень большое предприятие", en: "That is a very large enterprise" }, hint: "pred-pri-YA-ti-ye — stress on YA. NEUTER (-ие). Formal and official: фирма from unit 25 is what people say in conversation, предприятие is what the document says." },
        { id: "ru-u76l4-proizvoditel", type: "vocab", front: "производитель", reading: "proizvoditel", meaning: "a manufacturer", accept: ["a producer", "the maker", "a manufacturing company"], example: { jp: "Производитель обещает, что товар будет дешевле, но цена пока старая.", en: "The manufacturer promises the goods will be cheaper, but the price is still the old one." }, drill: { jp: "Производитель обещает новую цену", en: "The manufacturer promises a new price" }, hint: "pra-iz-va-DI-tel — stress on DI, and both о reduce to a. MASCULINE (-ель). ⚠️ The same -тель suffix as водитель from unit 8 and the same вод- root, which is an accident of history: a driver leads a car, a производитель leads a thing into being." },
        { id: "ru-u76l4-potrebitel", type: "vocab", front: "потребитель", reading: "potrebitel", meaning: "a consumer", accept: ["a customer in law", "the end user", "a buyer of goods"], example: { jp: "Потребитель платит за всё: и за пошлину, и за рекламу.", en: "The consumer pays for everything: for the duty and for the advertising." }, drill: { jp: "Потребитель платит за всё", en: "The consumer pays for everything" }, hint: "pa-tre-BI-tel — stress on BI, and the о reduces to a. MASCULINE (-ель). ⚠️ Built on the same root as требование from unit 34 — what a person requires. клиент from unit 42 is one firm's customer; потребитель is the whole public, and it is the word the law uses." },
      ],
    },
  ],
};
