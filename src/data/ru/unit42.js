// RU Unit 42 — Работа и карьера ("Work and career") — A2
// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 2 (u41–u50). Binding: ru/unit1.js §1–§10 and §A–§D, then ru/unit31.js
// §1–§7. The block-wide record is in ru/unit50.js §B1–§B7.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Society and daily life" AND BOTH HALVES ARE SPOKEN
// FOR. "Society" is block 3's assigned domain (society and institutions) and
// "daily life" is A1's u29 Обычный день, which block 1 already had to reroute
// around once (ru/unit31.js's header). Rethemed to THE WORKPLACE BEYOND A1,
// which is one of block 2's five assigned domains.
//
// THE MEASURED HOLE. Three units already touch work and all three stop early:
//   u25 Работа и учёба  офис · начальник · коллега · зарплата · отпуск · фирма
//   u32 (block 1)       сотрудник · руководитель · специалист · команда — the
//                       instrumental unit, which used the workplace as carrier
//   u34 (block 1)       the dative unit, same trick (звонить начальнику)
// So a learner can name the room, the boss and the pay. They cannot name the
// POST they hold, the DEPARTMENT it sits in, the CONTRACT behind it, the CLIENT
// it serves, or anything about GETTING the job — no word for an interview, a CV,
// a vacancy, a track record. That is this unit's 24.
//
// THREE CALLS I MADE, with the reasoning:
//   `должность` "a post" beside u24 `должен` "must". Same root (долж-), and they
//        are the §D case in its clearest form: knowing «I must» gives a learner
//        no route to «the position I hold». No gloss overlap either.
//   `бухгалтер` was carded and `секретарь` was NOT, though both were measured
//        free. секретарь sits beside u9 `секрет`, and while the sense is not
//        derivable the string is one suffix away; бухгалтер has no relative in
//        the corpus at all, so it is the cheaper card.
//   `заказ` beside u13 `заказывать` "to order". A noun and its verb, which
//        unit1.js §D avoids (разговор vs говорить) — BUT the two are split by
//        nine units and the noun is the thing a workplace unit needs (принять
//        заказ). Carded, and the hint names the verb so the learner sees the pair.
//        ⚠️ AND IT WAS FIRST WRITTEN WITH THE GLOSS "an order", WHICH IS A
//        COLLISION: `normalizeMeaning` strips a leading "a/an/the" AND a leading
//        "to ", so "an order" and "to order" are ONE prompt with two right
//        answers. `selfcheck-ru-a2-block2.mjs` caught it and nothing else would
//        have — lint:curriculum and validate:content both pass it. Reglossed
//        "a customer order"; "an order" moved into accept[], where a shared
//        string is harmless because accept[] grades an answer rather than
//        setting a prompt.
//
// ⚠️ REFUSED IN THIS UNIT, each on a rule already written down:
//   `работник` — vs u4 `работать`. unit1.js §D names `работа` as avoided on
//        exactly this test; `работник` is the same class, and u32's `сотрудник`
//        already holds the sense.
//   `отвечать` — vs u7 `ответ`. Same class.
//   `требовать` — vs u34 `требование`, carded by block 1. Same class.
//   `руководить` — vs u32 `руководитель`, carded by block 1. Same class.
//   `задача` — vs u25 `задание`. Two nouns on one root with overlapping senses;
//        this is nearer a duplicate than a pair, so it is refused outright.
//   `успевать` — vs u25 `успех`. `труд` — vs u6 `трудно` and u19 `трудный`.
//   `коллектив` — vs u25 `коллега`, and u32 `команда` already glosses "a team".
//   `ответственность` — vs u7 `ответ`. `срочный` — vs u38 `срок`.
//
// ⚠️ A SECOND GLOSS COLLISION INSIDE BLOCK 2 ITSELF, and neither lint:curriculum
// nor validate:content sees it either: `служба` here was first glossed "a service"
// and so was `услуга` at u44l2, two units later. `normalizeMeaning` strips the
// leading "a", so they were ONE produce prompt with two right answers — the same
// class of defect as `заказ` above, found the same way, by
// `selfcheck-ru-a2-block2.mjs`. служба is now "a public service" (the body that
// serves) and услуга keeps "a service" (the one thing done for you), which is also
// the truer translation of each.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT42 = {
  id: "ru-u42",
  lang: "ru",
  title: "Работа и карьера",
  order: 42,
  stage: "a2",
  lessons: [
    {
      id: "ru-u42l1",
      unit: 42,
      lesson: 1,
      title: "The post you hold",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what your job title is, which department it sits in, and what shift or project you are on.",
      items: [
        { id: "ru-u42l1-sluzhba", type: "vocab", front: "служба", reading: "sluzhba", meaning: "a public service", accept: ["a service", "duty", "an official post"], example: { jp: "Его служба начинается очень рано.", en: "His service starts very early." }, drill: { jp: "Служба начинается очень рано", en: "The service starts very early" }, hint: "SLUZH-ba — stress on the first syllable. FEMININE. It names an organisation that serves the public (скорая служба) and also the act of serving in one. ⚠️ Glossed «a public service», not «a service» — услуга at unit 44 holds that word, and an услуга is ONE thing done for you where a служба is the body that does it." },
        { id: "ru-u42l1-otdel", type: "vocab", front: "отдел", reading: "otdel", meaning: "a department", accept: ["a section", "a division", "a unit of an office"], example: { jp: "Наш отдел совсем маленький.", en: "Our department is quite small." }, drill: { jp: "Отдел уже работает без начальника", en: "The department is already working without a boss" }, hint: "at-DYEL — stress on the last syllable, and the о reduces to a. MASCULINE. In a shop it is the counter or aisle: «молочный отдел»." },
        { id: "ru-u42l1-dolzhnost", type: "vocab", front: "должность", reading: "dolzhnost", meaning: "a post", accept: ["a position", "a job title", "an official role"], example: { jp: "Это очень важная должность в фирме.", en: "That is a very important post at the firm." }, drill: { jp: "Должность была свободная целый год", en: "The post was vacant for a whole year" }, hint: "DOLZH-nast — stress on the FIRST syllable. FEMININE, and it ends in -ь, so the gender has to be learned. Same root as должен (unit 24), «must» — a должность is what you are obliged to do." },
        { id: "ru-u42l1-karera", type: "vocab", front: "карьера", reading: "karera", meaning: "a career", accept: ["a working life", "a professional path", "advancement"], example: { jp: "Её карьера началась в маленькой фирме.", en: "Her career began at a small firm." }, drill: { jp: "Карьера была для неё важнее", en: "Her career mattered more to her" }, hint: "ka-RYE-ra — stress on RYE, and the ь makes the р soft before е. FEMININE. Russian uses it for the long arc of a working life, not for one job." },
        { id: "ru-u42l1-smena", type: "vocab", front: "смена", reading: "smena", meaning: "a shift", accept: ["a work shift", "a changeover", "a stint"], example: { jp: "Моя смена начинается в восемь часов.", en: "My shift starts at eight o'clock." }, drill: { jp: "Смена будет очень длинная сегодня", en: "The shift will be very long today" }, hint: "SMYE-na — stress on the first syllable. FEMININE. Same root as менять (unit 24), «to change»: a смена is one turn in the changeover of workers." },
        { id: "ru-u42l1-proekt", type: "vocab", front: "проект", reading: "proekt", meaning: "a project", accept: ["a scheme", "a piece of planned work", "a design"], example: { jp: "Этот проект был очень полезный для фирмы.", en: "This project was very useful for the firm." }, drill: { jp: "Проект будет готов в сентябре", en: "The project will be ready in September" }, hint: "pra-EKT — stress on EKT, and the о reduces to a; Russians say pra-YEKT with a slight y. MASCULINE. It is also an architect's design or a draft document." },
      ],
    },
    {
      id: "ru-u42l2",
      unit: 42,
      lesson: 2,
      title: "Who and what the work brings in",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the client, the order, the contract, the bonus and the trip that come with a job.",
      items: [
        { id: "ru-u42l2-klient", type: "vocab", front: "клиент", reading: "klient", meaning: "a client", accept: ["a customer", "a person you serve", "an account holder"], example: { jp: "Наш клиент хочет новый договор.", en: "Our client wants a new contract." }, drill: { jp: "Клиент звонил вчера вечером", en: "The client rang yesterday evening" }, hint: "kli-YENT — stress on the last syllable, and the е after и sounds like ye. MASCULINE. A shop has покупатели; a firm has клиенты." },
        { id: "ru-u42l2-zakaz", type: "vocab", front: "заказ", reading: "zakaz", meaning: "a customer order", accept: ["an order", "a commission", "a booking"], example: { jp: "Наш заказ был готов вчера.", en: "Our order was ready yesterday." }, drill: { jp: "Заказ будет готов утром", en: "The order will be ready in the morning" }, hint: "za-KAS — stress on the last syllable, and the final з devoices to s (unit 6). MASCULINE. The verb заказывать, «to order», is unit 13's; this is the thing ordered." },
        { id: "ru-u42l2-dogovor", type: "vocab", front: "договор", reading: "dogovor", meaning: "a contract", accept: ["an agreement", "a signed deal", "a treaty"], example: { jp: "Этот договор был очень важный.", en: "That contract was very important." }, drill: { jp: "Договор уже готов для директора", en: "The contract is already ready for the director" }, hint: "da-ga-VOR — stress on the LAST syllable, and both о before it reduce to a. MASCULINE. ⚠️ Russians in offices often say DO-gavar, which is famously non-standard — use da-ga-VOR. Same root as говорить: an agreement is a thing spoken." },
        { id: "ru-u42l2-premiya", type: "vocab", front: "премия", reading: "premiya", meaning: "a bonus", accept: ["a bonus payment", "an award", "a prize"], example: { jp: "Наша премия была очень хорошая.", en: "Our bonus was very good." }, drill: { jp: "Премия будет в январе", en: "The bonus will come in January" }, hint: "PRYE-mi-ya — stress on the first syllable. FEMININE. It is both the extra money at work and a prize: Нобелевская премия is the Nobel Prize." },
        { id: "ru-u42l2-komandirovka", type: "vocab", front: "командировка", reading: "komandirovka", meaning: "a work trip", accept: ["a business trip", "a posting away", "a duty travel"], example: { jp: "Моя командировка была очень длинная.", en: "My work trip was very long." }, drill: { jp: "Командировка будет в сентябре", en: "The work trip will be in September" }, hint: "ka-man-di-ROF-ka — five syllables, stress on ROF, and the в devoices to f before к. FEMININE. Built on команда (unit 32). Russian says «я в командировке» — I am away on business." },
        { id: "ru-u42l2-bukhgalter", type: "vocab", front: "бухгалтер", reading: "bukhgalter", meaning: "an accountant", accept: ["a book-keeper", "a finance clerk", "someone who keeps the accounts"], example: { jp: "Наш бухгалтер работает в этом отделе.", en: "Our accountant works in this department." }, drill: { jp: "Бухгалтер уже знает эту сумму", en: "The accountant already knows this sum" }, hint: "buk-GAL-ter — stress on GAL; the хг is said as one k-g cluster. MASCULINE. A German loan, and the one office job A1 never named." },
      ],
    },
    {
      id: "ru-u42l3",
      unit: 42,
      lesson: 3,
      title: "Getting the job",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about applying for work — the vacancy, the CV, the interview, and the skills and track record you bring.",
      items: [
        { id: "ru-u42l3-sobesedovanie", type: "vocab", front: "собеседование", reading: "sobesedovanie", meaning: "a job interview", accept: ["an interview for a job", "a hiring conversation", "a selection interview"], example: { jp: "Моё собеседование было очень трудное.", en: "My job interview was very hard." }, drill: { jp: "Собеседование будет завтра утром", en: "The interview will be tomorrow morning" }, hint: "sa-be-SYE-da-va-ni-ye — seven syllables, stress on SYE. NEUTER (-е). Built on беседа, «a conversation», which block 1 carded at unit 39 — literally a «talking-together»." },
        { id: "ru-u42l3-rezyume", type: "vocab", front: "резюме", reading: "rezyume", meaning: "a CV", accept: ["a curriculum vitae", "a job application document", "a summary of a career"], example: { jp: "Моё резюме уже в этой папке.", en: "My CV is already in this folder." }, drill: { jp: "Резюме уже было в этой папке", en: "The CV was already in that folder" }, hint: "re-zyu-MYE — stress on the last syllable. NEUTER, and it NEVER CHANGES its ending — like метро and кафе, it is one of the indeclinable loans. It also means a summary of anything." },
        { id: "ru-u42l3-vakansiya", type: "vocab", front: "вакансия", reading: "vakansiya", meaning: "a vacancy", accept: ["an open position", "a job opening", "an unfilled post"], example: { jp: "Эта вакансия была в интернете.", en: "That vacancy was on the internet." }, drill: { jp: "Вакансия уже была свободная", en: "The vacancy was already open" }, hint: "va-KAN-si-ya — stress on KAN. FEMININE. Same Latin root as English «vacant» — the post that is empty and waiting." },
        { id: "ru-u42l3-stazh", type: "vocab", front: "стаж", reading: "stazh", meaning: "a track record", accept: ["years of service", "length of experience", "seniority"], example: { jp: "Её стаж уже десять лет.", en: "Her track record is already ten years." }, drill: { jp: "Стаж помогает найти хорошую должность", en: "A track record helps you find a good post" }, hint: "One syllable, STAZH. MASCULINE. ⚠️ Glossed «a track record», not «experience» — опыт from unit 25 holds that word. A стаж is counted in YEARS: «стаж двадцать лет»." },
        { id: "ru-u42l3-navyk", type: "vocab", front: "навык", reading: "navyk", meaning: "a skill", accept: ["an acquired ability", "a practical competence", "a knack"], example: { jp: "Это очень полезный навык для работы.", en: "That is a very useful skill for the job." }, drill: { jp: "Навык приходит только с практикой", en: "A skill comes only with practice" }, hint: "NA-vyk — stress on the first syllable, with the tight ы from unit 5. MASCULINE. A навык is something drilled until it is automatic, which is a different idea from a способность — see unit 47." },
        { id: "ru-u42l3-obyazannost", type: "vocab", front: "обязанность", reading: "obyazannost", meaning: "a duty", accept: ["a responsibility", "an obligation", "something you are required to do"], example: { jp: "Это моя главная обязанность здесь.", en: "That is my main duty here." }, drill: { jp: "Обязанность была не очень трудная", en: "The duty was not very hard" }, hint: "a-BYA-zan-nast — stress on BYA. FEMININE, ending in -ь. The plural обязанности is what a Russian job description lists." },
      ],
    },
    {
      id: "ru-u42l4",
      unit: 42,
      lesson: 4,
      title: "Taking someone on, and letting them go",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that a firm is hiring or laying people off, who runs a department, and talk about a competition, a master of a trade and a pension.",
      items: [
        { id: "ru-u42l4-nanimat", type: "vocab", front: "нанимать", reading: "nanimat", meaning: "to take on staff", accept: ["to hire", "to employ", "to engage someone"], example: { jp: "Наша фирма будет нанимать новых людей.", en: "Our firm is going to take on new people." }, drill: { jp: "Фирма будет нанимать молодых людей", en: "The firm will take on young people" }, hint: "na-ni-MAT — stress on the last syllable. First conjugation: нанимаю, нанимаешь, нанимают. It takes an ACCUSATIVE object — нанимать сотрудника." },
        { id: "ru-u42l4-uvolnyat", type: "vocab", front: "увольнять", reading: "uvolnyat", meaning: "to lay off", accept: ["to dismiss", "to let someone go", "to sack"], example: { jp: "Начальник не хочет увольнять коллегу.", en: "The boss does not want to lay off a colleague." }, drill: { jp: "Директор не хочет увольнять сотрудника", en: "The director does not want to dismiss a member of staff" }, hint: "u-val-NYAT — stress on the last syllable, and the о reduces to a. First conjugation: увольняю, увольняешь, увольняют. Its reflexive увольняться means to resign, which is the opposite direction." },
        { id: "ru-u42l4-upravlyat", type: "vocab", front: "управлять", reading: "upravlyat", meaning: "to be in charge of", accept: ["to run something", "to manage", "to direct"], example: { jp: "Она хочет управлять этим отделом.", en: "She wants to be in charge of this department." }, drill: { jp: "Трудно управлять большим отделом", en: "It is hard to run a big department" }, hint: "u-prav-LYAT — stress on the last syllable. First conjugation. ⚠️ It takes the INSTRUMENTAL, not the accusative: управлять отделОМ, управлять машинОЙ — block 1's unit 32 is that case in full." },
        { id: "ru-u42l4-konkurs", type: "vocab", front: "конкурс", reading: "konkurs", meaning: "a competition", accept: ["a contest", "an open selection", "a competitive round"], example: { jp: "Этот конкурс был очень трудный.", en: "That competition was very hard." }, drill: { jp: "Конкурс будет в этом университете", en: "The competition will be at that university" }, hint: "KON-kurs — stress on the first syllable. MASCULINE. Russian universities and public posts are filled по конкурсу — by open competition, not by application alone." },
        { id: "ru-u42l4-master", type: "vocab", front: "мастер", reading: "master", meaning: "a craftsman", accept: ["a master of a trade", "a skilled worker", "a repairman"], example: { jp: "Этот мастер работает уже двадцать лет.", en: "That craftsman has been working for twenty years." }, drill: { jp: "Мастер знает эту машину очень хорошо", en: "The craftsman knows this car very well" }, hint: "MAS-ter — stress on the first syllable. MASCULINE. In everyday Russian it is the person who comes to repair something, and in a trade it is the rank above ученик (unit 41)." },
        { id: "ru-u42l4-pensiya", type: "vocab", front: "пенсия", reading: "pensiya", meaning: "a pension", accept: ["retirement pay", "a state pension", "retirement"], example: { jp: "Её пенсия совсем маленькая.", en: "Her pension is very small." }, drill: { jp: "Пенсия здесь очень маленькая", en: "The pension here is very small" }, hint: "PYEN-si-ya — stress on the first syllable. FEMININE. «Он на пенсии» means he is retired — the word covers both the money and the state of being retired." },
      ],
    },
  ],
};
