// RU Unit 108 — Страхование и гарантии ("Insurance and guarantees") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 1 (u98–u110). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit61.js §1–§8, and
// ru/unit98.js §1–§7d for this band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Risk and uncertainty" AND BOTH HALVES ARE GONE.
// u97 Опасность и спасение owns `риск` · `угроза` · `тревога` · `осторожный` ·
// `жертва` · `утрата`; u64 Неуверенность и оговорка owns the hedging and the
// guessing (вряд ли · пожалуй · видимо · подозревать · догадываться · допускать ·
// исключать · гипотеза · подозрение · очевидный · смутный · мнимый); u47 owns
// `вероятно`. There is no "risk and uncertainty" left as vocabulary at all.
// RETHEMED to THE INSTITUTION THAT PRICES RISK — a measured hole: in 2,328 words
// Russian had no way to say insurance, a policy, a guarantee, an excess, a
// payout, a reserve or a stake. A learner could call something dangerous and
// could not buy cover against it.
//
// ⚠️ CROSS-BLOCK BOUNDARY: **u108 owns `компенсация` · `выплата` · `возмещение`
// — the insurance payout. u103 owns `неустойка` — the contractual forfeit.**
// Both are block 1's, and the two concepts are a unit apart on purpose: a
// неустойка punishes a breach, a возмещение repays a loss. u112 Health systems
// (block 2) will reach for the payout words and does not get them.
//
// ⚠️ EIGHT CANDIDATES REFUSED, each for a stated reason, and the first four are
// why this slot had to be rethemed rather than narrowed:
//   `вероятность` — `вероятно` (u47) hands it over. So PROBABILITY ITSELF cannot
//        be a front in this language at this band. `шанс` is as close as a card
//        can legally get, and the unit's subject moved accordingly.
//   `случайность` — `случай` (u24) and `случайно` (u59) hand it over twice.
//   `предосторожность` — `осторожный` (u97) hands it over.
//   `последствие` — `после` (u33) plus `следствие` (u52), both carded: composed,
//        and it would collide with следствие's gloss besides.
//   `ненадёжный` — не + `надёжный`, AND надёжный IS TAUGHT (u56). Barred by
//        unit51.js §3. ⚠️ `непредсказуемый` IS allowed in the same breath because
//        `предсказуемый` is NOT taught — the test is the base, never the prefix.
//        The same ruling as `бескорыстие` in unit 107 and `безвкусица` in u106.
//   `застраховать` · `подстраховка` — both probe free and both are the same
//        lexeme as the carded `страхование`. The noun was kept because the
//        INSTITUTION is this unit's subject.
//   `катастрофа` · `бедствие` — both TAKEN (u91).
//   Dropped for count at 24, all legal: `непредвиденный` (a second не- adjective
//        of the same shape as непредсказуемый) · `поручительство`.
//
// ⚠️ `лимит` IS AN EXACT FREE PASS IF GLOSSED AS ITSELF — its reading IS "limit".
// Reglossed as a description, accept entries included. unit98.js §7c.
//
// ⚠️ `возмещение` AND `компенсация` SIT IN ONE LESSON AND ARE NEAR-SYNONYMS. Their
// glosses and every accept entry are split deliberately: возмещение makes good a
// MEASURED loss, компенсация evens up for something given up. Not one phrase is
// shared between the two, because `meaningVariants` would turn a shared fragment
// into one prompt with two right answers — unit61.js §7b.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT108 = {
  id: "ru-u108",
  lang: "ru",
  title: "Страхование и гарантии",
  order: 108,
  stage: "b2",
  lessons: [
    {
      id: "ru-u108l1",
      unit: 108,
      lesson: 1,
      title: "Buying cover",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Arrange cover against loss — the insurance trade, the policy document, a guarantee, the slice you bear yourself, the ceiling on a payout and how far cover reaches.",
      items: [
        { id: "ru-u108l1-strakhovanie", type: "vocab", front: "страхование", reading: "strakhovanie", meaning: "the business of covering people against loss", accept: ["the trade of carrying other people's risk for a fee", "cover bought against a future loss", "the insurance business"], example: { jp: "Страхование здесь нужно всем, и без него машину не продадут.", en: "Insurance is needed by everyone here, and without it they will not sell you a car." }, drill: { jp: "Страхование машины здесь нужно всем", en: "Car insurance is needed by everyone here" }, hint: "stra-kha-VA-ni-ye — stress on VA, and the о reduces to a. NEUTER (-ие). ⚠️ From `страх` in unit 28, FEAR — and that distance is why it is allowed as a card: \"fear\" hands a learner nothing about an industry. The same reasoning as `одиночество` against один. ⚠️ Russia's compulsory motor cover is ОСАГО, an abbreviation every driver knows." },
        { id: "ru-u108l1-polis", type: "vocab", front: "полис", reading: "polis", meaning: "the paper that proves you are covered", accept: ["a certificate of cover", "the document an insurer issues", "written proof of a cover contract"], example: { jp: "Полис он потерял, и платить ему придётся самому.", en: "He lost the policy, and will have to pay himself." }, drill: { jp: "Полис он потерял очень давно", en: "He lost the policy a very long time ago" }, hint: "PO-lis — stress on the first syllable. MASCULINE. ⚠️ A REAL OBJECT IN RUSSIAN LIFE: a медицинский полис is the card you must show at any clinic, so this is one of the most practically useful words in the unit. Nothing to do with политика." },
        { id: "ru-u108l1-garantiya", type: "vocab", front: "гарантия", reading: "garantiya", meaning: "a promise that something will hold good", accept: ["an undertaking that a thing will work or be made good", "a formal assurance given to somebody", "a warranty on an article"], example: { jp: "Гарантия на этот прибор целый год.", en: "The warranty on this instrument is a whole year." }, drill: { jp: "Гарантия на прибор целый год", en: "The warranty on the instrument is a whole year" }, hint: "ga-RAN-ti-ya — stress on RAN. FEMININE (-я). ⚠️ Both the shop warranty and a political assurance: гарантии безопасности, security guarantees. The adjective гарантийный is what the shop receipt says: гарантийный срок." },
        { id: "ru-u108l1-franshiza", type: "vocab", front: "франшиза", reading: "franshiza", meaning: "the first slice of a loss you bear yourself", accept: ["the part of a claim the insured pays", "an excess deducted before cover begins", "the uncovered portion of a loss"], example: { jp: "Франшиза здесь большая, зато полис дешёвый.", en: "The excess here is large, but the policy is cheap." }, drill: { jp: "Франшиза здесь слишком большая", en: "The excess here is too large" }, hint: "fran-SHI-za — stress on SHI. FEMININE (-а). ⚠️ TWO COMPLETELY SEPARATE SENSES IN RUSSIAN and this card teaches the insurance one: франшиза is also a business franchise, as in English. Context parts them, but a learner who meets only the second will mis-read a policy." },
        { id: "ru-u108l1-limit", type: "vocab", front: "лимит", reading: "limit", meaning: "the most that will be paid or allowed", accept: ["an upper bound set in advance", "a ceiling fixed on an amount", "the cap on what can be had"], example: { jp: "Лимит выплаты здесь низкий, и об этом надо знать сразу.", en: "The payout ceiling here is low, and one needs to know that straight away." }, drill: { jp: "Лимит выплаты здесь очень низкий", en: "The payout ceiling here is very low" }, hint: "li-MIT — stress on the last syllable. MASCULINE. ⚠️ Glossed the long way round on purpose: its reading IS the English word. ⚠️ Narrower than `предел` from unit 68, which is a limit in the abstract: a лимит is a number somebody has set, and лимит на что-то is the standard phrase." },
        { id: "ru-u108l1-pokrytie", type: "vocab", front: "покрытие", reading: "pokrytie", meaning: "the extent of what cover answers for", accept: ["the ground a policy actually covers", "the range of loss provided against", "how far a cover reaches"], example: { jp: "Покрытие здесь полное, однако стоит оно дорого.", en: "The coverage here is full, yet it costs a great deal." }, drill: { jp: "Покрытие здесь совсем полное", en: "The coverage here is quite full" }, hint: "pa-KRY-ti-ye — stress on KRY, and the о reduces to a. NEUTER (-ие). From крыть, to cover. ⚠️ TWO OTHER EVERYDAY SENSES: a road surface — дорожное покрытие — and mobile reception, зона покрытия. All three are current and context separates them." },
      ],
    },
    {
      id: "ru-u108l2",
      unit: 108,
      lesson: 2,
      title: "When something goes wrong",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Claim after a loss — the making good of damage, a payment that evens things up, a payout, the forced recovery of a debt — and name what left you open to it.",
      items: [
        { id: "ru-u108l2-vozmeshchenie", type: "vocab", front: "возмещение", reading: "vozmeshchenie", meaning: "the making good of a measured loss in money", accept: ["payment to put a measured loss right", "money paid to restore what was destroyed", "reparation for damage caused"], example: { jp: "Возмещение он получил только через год.", en: "He received the reparation only a year later." }, drill: { jp: "Возмещение он получил очень поздно", en: "He received the reparation very late" }, hint: "vaz-mi-SHCHE-ni-ye — stress on SHCHE, the о reduces to a and the е to i. NEUTER (-ие). ⚠️ THE LEGAL phrase is возмещение вреда, using `вред` from unit 107 — so this unit and the last one meet here. ⚠️ Not `неустойка` from unit 103, which punishes a breach rather than repaying a loss." },
        { id: "ru-u108l2-kompensatsiya", type: "vocab", front: "компенсация", reading: "kompensatsiya", meaning: "a payment that makes up for something given up", accept: ["a sum given in place of what you lost", "money that offsets an inconvenience", "an evening-up payment"], example: { jp: "Компенсация была маленькая, зато её дали быстро.", en: "The compensation was small, but it was given quickly." }, drill: { jp: "Компенсация была совсем маленькая", en: "The compensation was quite small" }, hint: "kam-pen-SA-tsi-ya — stress on SA, and the о reduces to a. FEMININE (-я). ⚠️ Softer and broader than `возмещение` in this lesson, which is what the two glosses keep apart: a возмещение restores a measured loss, a компенсация evens up for an inconvenience — компенсация за задержку рейса, for a delayed flight." },
        { id: "ru-u108l2-vyplata", type: "vocab", front: "выплата", reading: "vyplata", meaning: "a payment made out under an obligation", accept: ["a disbursement of money owed", "the paying out of a sum due", "money handed over as owed"], example: { jp: "Выплата идёт каждый месяц, и ждать её долго не надо.", en: "The payment goes out every month, and there is no long wait for it." }, drill: { jp: "Эта выплата приходит каждый месяц", en: "This payment comes every month" }, hint: "VY-pla-ta — stress on the first syllable. FEMININE (-а). From платить with вы-, the prefix of out. ⚠️ Distinguish it from `оплата` from unit 44, which is you paying for something: a выплата comes TO you, from a state or an insurer. Russian pension and benefit news is made of this word." },
        { id: "ru-u108l2-vzyskanie", type: "vocab", front: "взыскание", reading: "vzyskanie", meaning: "the forcing of payment out of somebody", accept: ["the recovery of a debt by legal means", "enforced collection of what is owed", "the taking of money by compulsion"], example: { jp: "Взыскание долга через суд идёт очень долго.", en: "Recovering a debt through the courts takes a very long time." }, drill: { jp: "Взыскание долга идёт очень долго", en: "Recovering a debt takes a very long time" }, hint: "vzys-KA-ni-ye — stress on KA, with the ы from unit 5. NEUTER (-ие). From искать, to seek. ⚠️ A SECOND SENSE IN EMPLOYMENT LAW: a дисциплинарное взыскание is a formal reprimand on your record, beside `выговор` from unit 71. This card teaches the money sense." },
        { id: "ru-u108l2-uyazvimost", type: "vocab", front: "уязвимость", reading: "uyazvimost", meaning: "the state of being open to harm", accept: ["exposure to damage", "a weak point through which harm can come", "openness to being hurt"], example: { jp: "Уязвимость этой системы нашли случайно.", en: "This system's vulnerability was found by accident." }, drill: { jp: "Уязвимость здесь очень большая", en: "The vulnerability here is very great" }, hint: "u-yaz-VI-mast — stress on VI. FEMININE despite the -ь, like every -ость noun. From язва, a sore, which is not carded. ⚠️ Now overwhelmingly a COMPUTING word in Russian — уязвимость в программе, a security hole — which is why it earns a place in a B2 course." },
        { id: "ru-u108l2-nepredskazuemyy", type: "vocab", front: "непредсказуемый", reading: "nepredskazuemyy", meaning: "impossible to see coming", accept: ["not to be foretold", "whose behaviour cannot be anticipated", "beyond any prediction"], example: { jp: "Непредсказуемый рынок пугает всех, кто считает деньги.", en: "An unpredictable market frightens everybody who counts money." }, drill: { jp: "Этот рынок совсем непредсказуемый", en: "This market is quite unpredictable" }, hint: "ni-prit-ska-ZU-ye-myy — stress on ZU, and both е before it reduce to i. ADJECTIVE. ⚠️ IT IS LEGAL BECAUSE `предсказуемый` IS NOT TAUGHT — unit 51's rule bars не + a CARDED word, and this unit's own `ненадёжный` was refused on exactly that test because `надёжный` IS carded at u56. The prefix is never the question; the base is." },
      ],
    },
    {
      id: "ru-u108l3",
      unit: 108,
      lesson: 3,
      title: "Held back against trouble",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about provision made in advance — a reserve kept untouched, a stock laid in, a regular deduction, an extra on top, somebody living on your money, and a person careful by habit.",
      items: [
        { id: "ru-u108l3-rezerv", type: "vocab", front: "резерв", reading: "rezerv", meaning: "an amount held back untouched against need", accept: ["a store kept aside for emergencies", "a held-back reserve of means", "something kept in hand for later"], example: { jp: "Резерв держат на самый трудный случай.", en: "A reserve is kept for the hardest case." }, drill: { jp: "Резерв держат на трудный случай", en: "A reserve is kept for a hard case" }, hint: "ri-ZERV — stress on the last syllable, and the е reduces to i. MASCULINE. ⚠️ ALSO MILITARY — офицер в резерве — and sporting, where a резерв is the reserve squad. The state's own is золотой резерв. Distinguish it from `запас`, the next card: a резерв is deliberately untouched, a запас is there to be used." },
        { id: "ru-u108l3-zapas", type: "vocab", front: "запас", reading: "zapas", meaning: "a stock laid in ahead of time", accept: ["a supply put by in advance", "goods stored up for later use", "provisions laid in beforehand"], example: { jp: "Запас воды здесь есть на месяц.", en: "There is a month's supply of water here." }, drill: { jp: "Запас воды здесь на месяц", en: "The water supply here is for a month" }, hint: "za-PAS — stress on the last syllable. MASCULINE. ⚠️ THE ADVERBIAL PHRASE IS EVERYWHERE: на запас and про запас both mean laid in for later, and «с запасом» means with something to spare — «приехать с запасом времени». Compare `резерв`, the previous card." },
        { id: "ru-u108l3-otchislenie", type: "vocab", front: "отчисление", reading: "otchislenie", meaning: "a sum taken off and paid over regularly", accept: ["a deduction made and remitted elsewhere", "a regular levy taken off a payment", "a part withheld and passed on"], example: { jp: "Отчисление идёт прямо из зарплаты каждый месяц.", en: "The deduction comes straight out of the wages every month." }, drill: { jp: "Отчисление здесь совсем маленькое", en: "The deduction here is quite small" }, hint: "at-chis-LE-ni-ye — stress on LE, and the о reduces to a. NEUTER (-ие). From `считать` in unit 44's family. ⚠️ A SECOND SENSE EVERY RUSSIAN STUDENT FEARS: отчисление из университета is being thrown out of university, and the verb отчислить does both jobs." },
        { id: "ru-u108l3-nadbavka", type: "vocab", front: "надбавка", reading: "nadbavka", meaning: "an extra added onto a standard payment", accept: ["a supplement paid above the basic rate", "an addition to a normal sum", "a premium added on top"], example: { jp: "Надбавка за стаж здесь маленькая, однако она есть.", en: "The supplement for length of service here is small, but it exists." }, drill: { jp: "Надбавка здесь совсем маленькая", en: "The supplement here is quite small" }, hint: "nad-BAV-ka — stress on BAV. FEMININE (-а). From добавить, to add. ⚠️ Distinguish it from `наценка` from unit 103, which a seller adds to a price, and from `премия` from unit 42, which is a bonus somebody earned: a надбавка is a standing extra built into the rate." },
        { id: "ru-u108l3-izhdivenets", type: "vocab", front: "иждивенец", reading: "izhdivenets", meaning: "somebody who lives on another's money", accept: ["a person kept financially by somebody else", "a dependant supported by another", "one who has no income of his own"], example: { jp: "Иждивенец в семье один, и считают это в каждой справке.", en: "There is one dependant in the family, and that is counted on every certificate." }, drill: { jp: "Иждивенец в этой семье один", en: "There is one dependant in this family" }, hint: "izh-di-VE-nits — stress on VE. MASCULINE, and ⚠️ the е DROPS in every other form: иждивенцА — the `отец` class from unit 10. ⚠️ A BUREAUCRATIC CATEGORY in Russia, counted on forms, and also an insult when used of an adult who will not work." },
        { id: "ru-u108l3-osmotritelnyy", type: "vocab", front: "осмотрительный", reading: "osmotritelnyy", meaning: "careful to look before acting", accept: ["cautious in going about things", "taking care not to be caught out", "circumspect by habit"], example: { jp: "Осмотрительный человек читает весь договор.", en: "A circumspect person reads the whole contract." }, drill: { jp: "Он очень осмотрительный человек", en: "He is a very circumspect person" }, hint: "a-sma-TRI-tel-nyy — stress on TRI, and both о reduce to a. ADJECTIVE. From смотреть, unit 23 — one who looks around first. ⚠️ `осторожный` from unit 97 is the everyday word for careful; осмотрительный is bookish and says the care was thought through." },
      ],
    },
    {
      id: "ru-u108l4",
      unit: 108,
      lesson: 4,
      title: "Taking the chance anyway",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about going ahead regardless — a chance worth taking, money staked, a reckless venture, the scale attempted — and doing something at random or blind.",
      items: [
        { id: "ru-u108l4-shans", type: "vocab", front: "шанс", reading: "shans", meaning: "a possibility of something going well", accept: ["an opening that might come off", "a prospect of success", "the odds of a good outcome"], example: { jp: "Шанс был один, и он его взял.", en: "There was one chance, and he took it." }, drill: { jp: "Шанс здесь был только один", en: "There was only one chance here" }, hint: "SHANS — one syllable. MASCULINE. ⚠️ IT IS AS CLOSE AS THIS COURSE CAN LEGALLY GET TO \"PROBABILITY\": `вероятность` is handed over by `вероятно` from unit 47 and therefore cannot be a card, which is why the unit's subject is the insurance institution and not the mathematics. ⚠️ Russian says «есть шанс» and «ни единого шанса»." },
        { id: "ru-u108l4-stavka", type: "vocab", front: "ставка", reading: "stavka", meaning: "money put on an outcome", accept: ["a sum laid on a result", "what is wagered on something", "a bid placed at a sale"], example: { jp: "Ставка была высокая, зато денег он не получил.", en: "The stake was high, and yet he got no money." }, drill: { jp: "Ставка здесь была очень высокая", en: "The stake here was very high" }, hint: "STAV-ka — stress on the first syllable. FEMININE (-а). From ставить, unit 57. ⚠️ THREE LIVE SENSES and a learner meets all of them: the wager (this card), an INTEREST RATE — процентная ставка, in every financial report — and a salaried post, штатная ставка. It is also the bid at the `аукцион` of unit 103." },
        { id: "ru-u108l4-avantyura", type: "vocab", front: "авантюра", reading: "avantyura", meaning: "a reckless undertaking with poor odds", accept: ["a rash venture", "an undertaking with little chance and much risk", "a wild gamble"], example: { jp: "Авантюра эта была опасная, и денег никто не получил.", en: "That venture was dangerous, and nobody got any money." }, drill: { jp: "Авантюра эта была очень опасная", en: "That venture was very dangerous" }, hint: "a-van-TYU-ra — stress on TYU. FEMININE (-а). ⚠️ A FALSE FRIEND: English adventure is neutral or positive, Russian авантюра is ALWAYS a reproach — a scheme that will not come off. The adventure you would enjoy is приключение, which is not carded. The person is an авантюрист." },
        { id: "ru-u108l4-razmakh", type: "vocab", front: "размах", reading: "razmakh", meaning: "the sheer scale something is done on", accept: ["the sweep of an undertaking", "how big a thing is attempted", "the breadth of a venture"], example: { jp: "Размах этой работы удивляет каждого.", en: "The scale of this work surprises everybody." }, drill: { jp: "Размах этой работы очень большой", en: "The scale of this work is very great" }, hint: "raz-MAKH — stress on the last syllable. MASCULINE. From махать, to swing. ⚠️ Literal as well: размах крыльев is a wingspan. ⚠️ Carries admiration in a way `масштаб` from unit 68 does not — «с размахом» means done lavishly, and «широкий размах» is a compliment." },
        { id: "ru-u108l4-naugad", type: "vocab", front: "наугад", reading: "naugad", meaning: "at random, without knowing", accept: ["by guesswork", "picking without any basis", "haphazardly"], example: { jp: "Он писал наугад, и половину вопросов не понял.", en: "He wrote at random, and did not understand half the questions." }, drill: { jp: "Он писал почти наугад", en: "He wrote almost at random" }, hint: "na-u-GAD — stress on the last syllable, and the ау is TWO vowels. ADVERB. From гадать, to guess, which is the root of `догадываться` in unit 64. ⚠️ Written as ONE word. Distinguish it from `вслепую`, the next card: наугад is picking with no reason, вслепую is acting with no sight of the situation." },
        { id: "ru-u108l4-vslepuyu", type: "vocab", front: "вслепую", reading: "vslepuyu", meaning: "blindly, with no sight of what you are doing", accept: ["without being able to see at all", "going ahead with no information", "feeling one's way forward"], example: { jp: "Решать такие вопросы вслепую нельзя.", en: "Such questions cannot be decided blind." }, drill: { jp: "Здесь приходится работать вслепую", en: "Here one has to work blind" }, hint: "fsli-PU-yu — stress on PU, the в is said f before с, and the е reduces to i. ADVERB. Built on `слепой` from unit 86. ⚠️ Written as ONE word, and a chess player's вслепую is playing blindfold. The pair with `наугад` is worth learning together: one is no reason, the other is no sight." },
      ],
    },
  ],
};
