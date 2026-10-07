// RU Unit 117 — Составные предлоги ("Compound prepositions") — B2
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE SCAFFOLD TITLE WAS `Grammar 10 — formal written structures` AND THAT
// SLOT HAD ALREADY SHIPPED THREE TIMES. The participle is u79 Причастия и
// связки, the verbal adverb and the passive are u80 Деепричастия и залог, and
// the institutional written register is u83 Книжный язык (`сведения` ·
// `наличие` · `мероприятие` · `регламент` · `протокол` · `инстанция` ·
// `уведомлять` · `регулировать` · `констатировать` · `ибо` · `отнюдь` ·
// `весьма` · `ныне` · `непосредственно` · `сугубо` · `норма` · `структура` ·
// `параметр` · `приоритет` · `статус` · `процедура`). u62 took the SINGLE-WORD
// formal prepositions: `ввиду` · `вследствие` · `посредством` · `путём` ·
// `благодаря` · `несмотря на` · `вопреки` · `ради`; u33 `вместо` · `кроме`;
// u79 `помимо` · `поскольку` · `вкупе`.
//
// SO WHAT IS GENUINELY LEFT IS THE ONE THING NONE OF THEM TOUCHED: THE
// MULTI-WORD COMPOUND PREPOSITION. Probed on this branch: `в связи с` ·
// `в целях` · `по мере` · `в отношении` · `в силу` · `при условии` ·
// `в случае` · `в ходе` · `в рамках` · `на основании` · `в качестве` ·
// `по причине` · `с целью` · `в пользу` · `наряду с` · `в соответствии с` ·
// `в течение` · `в результате` · `в виде` · `во избежание` · `при наличии` ·
// `по итогам` · `в части` · `за счёт` — ALL 24 FREE, NONE IN 2,328 WORDS.
// This is the single largest measurable hole in formal Russian the corpus had.
//
// ⚠️ THE ONE JUDGEMENT THIS UNIT RESTS ON, recorded so it is not "fixed" later.
// Most of these phrases contain a noun the course already teaches — `цель`
// (u25), `случай` (u24), `условие` (u34), `отношение` (u39), `наличие` (u83),
// `итог` (u37), `качество` (u32), `причина` (u34), `результат` (u30), `счёт`
// (u21), `течение`/`ход`/`мера` by stem. unit1.js §D would normally refuse a
// front that close to a taught word. It does not apply here, and the reason is
// categorical rather than a matter of degree: A LEXICALISED MULTI-WORD
// PREPOSITION IS A DIFFERENT PART OF SPEECH FROM THE NOUN INSIDE IT, it governs
// a case of its own, and knowing `цель` «a goal» does not let a learner produce
// «в целях безопасности». House practice already accepts exactly this — `вряд
// ли` (u64), `может быть` (u22), `на всякий случай` (u116) — so this is the
// established pattern, not a new licence.
//
// ⚠️ DEVERBAL-NOUN SYNTAX IS TAUGHT IN THE HINTS, NOT AS FRONTS. The crew brief
// pairs these prepositions with the deverbal-noun style of formal Russian
// («в целях обеспечения выполнения»). Those nouns are almost all refused by §D
// against their taught verbs (обеспечение/обеспечивать, выполнение/выполнять,
// осуществление, сокращение at u69), and an `example` may only use taught vocab
// anyway. So the STRUCTURE is named in the hints and the GENITIVE each
// preposition governs is stated on every card; no deverbal noun is carded.
//
// ⚠️ TWO REFUSALS WORTH NAMING:
//   `согласно` — §D, against `согласен` (u61) and `соглашаться` (u35). It would
//     also be a duplicate prompt for `в соответствии с`, which is carded. The
//     single word is the commoner one in speech and is a real gap; it is
//     DEFERRED to whichever band is willing to argue past §D, not forgotten.
//   `в противном случае` — given to u118, where it works as a discourse
//     connector rather than as a preposition. Two «случае» fronts in one unit
//     would also have been one prompt with two answers.
//
// ⚠️ ID TRAP, measured at u116: an item id must match
// /^[a-z]{2}-u\d+l\d+-[a-z0-9]+$/ and allows NO HYPHEN, so a multi-word front's
// id is its reading run together — `ru-u117l1-vsvyazis`, not `v-svyazi-s`.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT117 = {
  id: "ru-u117",
  lang: "ru",
  title: "Составные предлоги",
  order: 117,
  stage: "b2",
  lessons: [
    {
      id: "ru-u117l1",
      unit: 117,
      lesson: 1,
      title: "Giving the ground and the cause",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Introduce a cause or a legal ground formally: in connection with, by virtue of, by reason of, on the basis of, as the outcome of, and at the expense of.",
      items: [
        { id: "ru-u117l1-vsvyazis", type: "vocab", front: "в связи с", reading: "vsvyazis", meaning: "in connection with", accept: ["arising out of", "in the light of", "prompted by"], example: { jp: "В связи с погодой все поезда идут медленнее.", en: "In connection with the weather all trains are running more slowly." }, drill: { jp: "В связи с погодой поезда идут медленнее", en: "In connection with the weather trains are running more slowly" }, hint: "f-sve-ZI s — the в is said as f, and the stress is on ZI. ⚠️ GOVERNS THE INSTRUMENTAL, because of the с at the end: «в связи С ЭТИМ», «в связи С РЕМОНТОМ». ⚠️ THE SINGLE COMMONEST OPENING OF A RUSSIAN OFFICIAL NOTICE — on a shop door, in a letter, on a station board. If you learn one phrase from this unit, learn this one." },
        { id: "ru-u117l1-vsilu", type: "vocab", front: "в силу", reading: "vsilu", meaning: "by force of", accept: ["in view of the fact of", "because of the force of", "owing to the nature of"], example: { jp: "В силу возраста он уже не работает, но помогает советом.", en: "By virtue of his age he no longer works, but he helps with advice." }, drill: { jp: "В силу возраста он уже не работает", en: "By virtue of his age he no longer works" }, hint: "f SI-lu — the в as f, stress on SI. ⚠️ GOVERNS THE GENITIVE: «в силу ЗАКОНА», «в силу ПРИВЫЧКИ». ⚠️ A SECOND, SEPARATE USE YOU WILL MEET: «вступить в силу» means a law COMES INTO FORCE, which is the same two words doing a different job. Built on the noun сила «strength», which is not a front in this course." },
        { id: "ru-u117l1-poprichine", type: "vocab", front: "по причине", reading: "poprichine", meaning: "by reason of", accept: ["for the reason of", "citing the reason of", "due to"], example: { jp: "По причине болезни он не пришёл на работу в понедельник.", en: "By reason of illness he did not come to work on Monday." }, drill: { jp: "По причине болезни он не пришёл на работу", en: "By reason of illness he did not come to work" }, hint: "pa pri-CHI-ne — stress on CHI. ⚠️ GOVERNS THE GENITIVE: «по причине БОЛЕЗНИ». ⚠️ DRIER AND MORE BUREAUCRATIC THAN `из-за`, which is the spoken way to say the same thing — a doctor's note says «по причине», a friend says «из-за». Built on `причина` (u34), and this is the unit's judgement in action: the preposition is not the noun." },
        { id: "ru-u117l1-naosnovanii", type: "vocab", front: "на основании", reading: "naosnovanii", meaning: "on the basis of", accept: ["acting under", "pursuant to", "relying on"], example: { jp: "На основании этого документа решение приняли очень быстро.", en: "On the basis of this document the decision was taken very quickly." }, drill: { jp: "На основании этого документа решение приняли быстро", en: "On the basis of this document the decision was taken quickly" }, hint: "na as-na-VA-ni-i — stress on VA, and both unstressed о reduce to a. ⚠️ GOVERNS THE GENITIVE: «на основании ДОКУМЕНТА». ⚠️ NEARLY ALWAYS LEGAL: a Russian document cites the law it is acting under this way — «на основании статьи 12». Note the ending is -ии, two и in a row, which is the prepositional of a -ие noun." },
        { id: "ru-u117l1-vrezultate", type: "vocab", front: "в результате", reading: "vrezultate", meaning: "as the outcome of", accept: ["as the end product of", "because of what happened", "ending up out of"], example: { jp: "В результате долгого спора они не решили ничего.", en: "As the outcome of a long argument they decided nothing." }, drill: { jp: "В результате долгого спора они не решили ничего", en: "As the outcome of a long argument they decided nothing" }, hint: "v re-zul-TA-te — stress on TA. ⚠️ GOVERNS THE GENITIVE: «в результате ОШИБКИ». ⚠️ `вследствие` (u62) IS ALREADY GLOSSED «as a result of», so this card is prompted as «as the outcome of» — the two are close in meaning and the course keeps the PROMPTS apart by hand (unit1.js §9). вследствие is the drier of the two; в результате is usable in speech." },
        { id: "ru-u117l1-zaschyot", type: "vocab", front: "за счёт", reading: "zaschyot", meaning: "at the expense of", accept: ["paid for by", "by drawing on", "at the cost of something else"], example: { jp: "Дом построили за счёт города, а не за свои деньги.", en: "The house was built at the city's expense, not with their own money." }, drill: { jp: "Дом построили за счёт города", en: "The house was built at the city's expense" }, hint: "za SCHYOT — the second word carries the ё and is therefore the stressed syllable by definition (every ё in Russian is stressed). ⚠️ GOVERNS THE GENITIVE: «за счёт ГОРОДА». ⚠️ TWO SENSES AND BOTH ARE EVERYDAY: who PAYS («за счёт фирмы», on the company), and what something is achieved by sacrificing («за счёт качества», at the cost of quality). Built on `счёт` (u21, «a bill»). ⚠️ Do not confuse the reading with `зачёт` (u113), which is zachyot." },
      ],
    },
    {
      id: "ru-u117l2",
      unit: 117,
      lesson: 2,
      title: "Purpose, condition and avoidance",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State a purpose and a condition in formal Russian: for the purposes of, with the aim of, on condition that, in the event of, where there is, and so as to avoid.",
      items: [
        { id: "ru-u117l2-vtselyakh", type: "vocab", front: "в целях", reading: "vtselyakh", meaning: "for the purposes of", accept: ["for reasons of", "in the interests of", "for purposes of"], example: { jp: "В целях безопасности здесь работают только два человека.", en: "For reasons of safety only two people work here." }, drill: { jp: "В целях безопасности здесь работают два человека", en: "For reasons of safety two people work here" }, hint: "f tse-LYAKH — the в as f, stress on LYAKH. ⚠️ GOVERNS THE GENITIVE and the целях is PLURAL, always: «в целях БЕЗОПАСНОСТИ», «в целях ЭКОНОМИИ». ⚠️ Compare `с целью` in this lesson: в целях + a noun, с целью + a noun OR an infinitive. Built on `цель` (u25)." },
        { id: "ru-u117l2-stselyu", type: "vocab", front: "с целью", reading: "stselyu", meaning: "with the aim of", accept: ["for the purpose of doing", "with the intention of", "aiming to"], example: { jp: "Он пришёл с целью договориться, а не спорить.", en: "He came with the aim of reaching an agreement, not of arguing." }, drill: { jp: "Он пришёл с целью договориться", en: "He came with the aim of reaching an agreement" }, hint: "s TSE-lyu — stress on TSE. ⚠️ GOVERNS THE GENITIVE OR TAKES AN INFINITIVE, which is what makes it more useful than `в целях`: «с целью ПРОВЕРКИ» and «с целью проверить» are both correct. ⚠️ In criminal law it is the phrase for intent — «с целью наживы» — so you will meet it in the news." },
        { id: "ru-u117l2-priuslovii", type: "vocab", front: "при условии", reading: "priuslovii", meaning: "on condition that", accept: ["subject to", "so long as it is the case that", "conditional upon"], example: { jp: "Деньги дадут при условии, что работа будет готова в срок.", en: "The money will be given on condition that the work is ready on time." }, drill: { jp: "Он придёт только при условии хорошей погоды", en: "He will come only on condition of good weather" }, hint: "pri us-LO-vi-i — stress on LO. ⚠️ TWO PATTERNS AND YOU NEED BOTH: «при условии + ГЕНИТИВ» («при условии оплаты») and «при условии, ЧТО…» with a full clause, which is the commoner one. Built on `условие` (u34). ⚠️ The ending is -ии again, the prepositional of a -ие noun — the same shape as `на основании`." },
        { id: "ru-u117l2-vsluchae", type: "vocab", front: "в случае", reading: "vsluchae", meaning: "in the event of", accept: ["should there be", "if there is", "in case of"], example: { jp: "В случае пожара надо идти к выходу, а не к лифту.", en: "In the event of a fire you must go to the exit, not to the lift." }, drill: { jp: "В случае пожара надо идти к выходу", en: "In the event of a fire you must go to the exit" }, hint: "f SLU-cha-ye — the в as f, stress on SLU. ⚠️ GOVERNS THE GENITIVE: «в случае ПОЖАРА», «в случае НЕОБХОДИМОСТИ». ⚠️ THE PHRASE ON EVERY RUSSIAN SAFETY SIGN, which is where you will meet it first. It also takes a clause with «если»: «в случае если…». Built on `случай` (u24), and distinct from u116's `на всякий случай`, which is a precaution you take yourself." },
        { id: "ru-u117l2-prinalichii", type: "vocab", front: "при наличии", reading: "prinalichii", meaning: "where there is", accept: ["if available", "subject to availability", "given the presence of"], example: { jp: "При наличии мест можно купить билет прямо в день поездки.", en: "Where there are places you can buy a ticket on the day of travel itself." }, drill: { jp: "При наличии мест билет можно купить сразу", en: "Where there are places a ticket can be bought at once" }, hint: "pri na-LI-chi-i — stress on LI. ⚠️ GOVERNS THE GENITIVE: «при наличии МЕСТ», «при наличии ДОКУМЕНТОВ». ⚠️ THE BUREAUCRAT'S «if you have one» — on a ticket office window, in a form, in a rule. Built on `наличие` (u83), which was carded for exactly this register. Its negative twin «при отсутствии» is built the same way from отсутствовать (u83)." },
        { id: "ru-u117l2-voizbezhanie", type: "vocab", front: "во избежание", reading: "voizbezhanie", meaning: "so as to avoid", accept: ["in order to prevent", "with a view to preventing", "to head off"], example: { jp: "Во избежание ошибки всё проверили ещё один раз.", en: "So as to avoid a mistake everything was checked one more time." }, drill: { jp: "Во избежание ошибки всё проверили ещё раз", en: "So as to avoid a mistake everything was checked once more" }, hint: "va iz-be-ZHA-ni-ye — stress on ZHA, and the о of во reduces to a. ⚠️ GOVERNS THE GENITIVE: «во избежание ОШИБОК». ⚠️ NOTE THE во, NOT в — Russian uses во before a word starting with a vowel cluster, exactly as it does in «во вторник». ⚠️ Same root as `избегать` (u70), which the course teaches as a verb; this frozen preposition is a different part of speech and is kept on §D's categorical ground — see the header." },
      ],
    },
    {
      id: "ru-u117l3",
      unit: 117,
      lesson: 3,
      title: "Saying what a statement applies to",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Limit a statement formally: with regard to, in so far as it concerns, within the framework of, in the capacity of, in the form of, and on a par with.",
      items: [
        { id: "ru-u117l3-votnoshenii", type: "vocab", front: "в отношении", reading: "votnoshenii", meaning: "as it applies to", accept: ["in respect of", "directed at", "touching upon"], example: { jp: "В отношении этого вопроса у них нет общего мнения.", en: "With regard to this question they have no common opinion." }, drill: { jp: "В отношении этого вопроса мнения разные", en: "With regard to this question opinions differ" }, hint: "v at-na-SHE-ni-i — stress on SHE, and both unstressed о reduce to a. ⚠️ GOVERNS THE GENITIVE: «в отношении ЭТОГО ЧЕЛОВЕКА». ⚠️ IN LEGAL RUSSIAN IT MEANS «AGAINST»: «дело в отношении него» is a case against him, which is a long way from the neutral `отношение` (u39, «a relationship») it is built on. Worth knowing before you read a news report." },
        { id: "ru-u117l3-vchasti", type: "vocab", front: "в части", reading: "vchasti", meaning: "in so far as it concerns", accept: ["as regards the part about", "in respect of the section on", "to the extent that it deals with"], example: { jp: "В части денег договор надо писать заново.", en: "In so far as it concerns money the contract has to be rewritten." }, drill: { jp: "В части денег договор надо писать заново", en: "In so far as it concerns money the contract has to be rewritten" }, hint: "f CHAS-ti — the в as f, stress on CHAS. ⚠️ GOVERNS THE GENITIVE: «в части ОПЛАТЫ». ⚠️ NARROWER THAN `в отношении`: в части points at ONE SECTION of a document or a plan, not at a whole subject — a lawyer's phrase for «the bit about». Built on часть «a part», which is reachable by stem from the taught corpus." },
        { id: "ru-u117l3-vramkakh", type: "vocab", front: "в рамках", reading: "vramkakh", meaning: "within the framework of", accept: ["as part of", "under the auspices of", "staying inside the limits of"], example: { jp: "В рамках этой работы они проверили сто домов.", en: "Within the framework of this work they checked a hundred houses." }, drill: { jp: "В рамках этой работы они проверили сто домов", en: "Within the framework of this work they checked a hundred houses" }, hint: "v RAM-kakh — stress on RAM. ⚠️ GOVERNS THE GENITIVE and рамках is PLURAL, always: «в рамках ПРОЕКТА», «в рамках ЗАКОНА». From рамка «a frame», which is not a front in this course. ⚠️ Also used as a warning — «в рамках закона», within the law — where English says «within the bounds of»." },
        { id: "ru-u117l3-vkachestve", type: "vocab", front: "в качестве", reading: "vkachestve", meaning: "in the capacity of", accept: ["acting as", "serving as", "by way of being"], example: { jp: "Он приехал в качестве гостя, а не как врач.", en: "He came in the capacity of a guest, not as a doctor." }, drill: { jp: "Он приехал в качестве гостя", en: "He came in the capacity of a guest" }, hint: "f KA-chest-ve — the в as f, stress on KA. ⚠️ GOVERNS THE GENITIVE: «в качестве ПРИМЕРА», «в качестве ГОСТЯ». ⚠️ THE FORMAL ALTERNATIVE TO `как` «as», and it removes an ambiguity Russian otherwise has: «как врач» can mean «like a doctor», «в качестве врача» can only mean «acting as one». Built on `качество` (u32)." },
        { id: "ru-u117l3-vvide", type: "vocab", front: "в виде", reading: "vvide", meaning: "in the form of", accept: ["taking the shape of", "as a kind of", "delivered as"], example: { jp: "Помощь пришла в виде денег, а не в виде людей.", en: "The help came in the form of money, not in the form of people." }, drill: { jp: "Помощь пришла в виде денег", en: "The help came in the form of money" }, hint: "v VI-de — stress on VI. ⚠️ GOVERNS THE GENITIVE: «в виде ТАБЛИЦЫ». ⚠️ AN IMPORTANT NEAR-TWIN TO AVOID: «в ВИДУ», with a у, belongs to «иметь в виду» — to have in mind — and `ввиду` written as ONE WORD (u62) means «in view of». Three different phrases, one noun. The hint on `ввиду` at u62 carries the other half of this warning." },
        { id: "ru-u117l3-naryadus", type: "vocab", front: "наряду с", reading: "naryadus", meaning: "on a par with", accept: ["equally with", "side by side with", "ranked with"], example: { jp: "Наряду с русским здесь изучают ещё два языка.", en: "On a par with Russian, two more languages are studied here." }, drill: { jp: "Наряду с русским здесь изучают два языка", en: "On a par with Russian two more languages are studied here" }, hint: "na-rya-DU s — stress on DU. ⚠️ GOVERNS THE INSTRUMENTAL, because of the с: «наряду С ЭТИМ». ⚠️ NOT JUST «together with»: наряду с claims EQUAL STANDING, which «вместе с» does not — «наряду с лучшими» means ranked among the best. From наряд, a work detail, which is not carded." },
      ],
    },
    {
      id: "ru-u117l4",
      unit: 117,
      lesson: 4,
      title: "Time, measure and conformity",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place something in time and measure it formally: for the duration of, in the course of, in proportion as, in accordance with, on the results of, and in favour of.",
      items: [
        { id: "ru-u117l4-vtechenie", type: "vocab", front: "в течение", reading: "vtechenie", meaning: "for the duration of", accept: ["over the course of a period", "throughout", "within a period of"], example: { jp: "В течение месяца он не сказал об этом никому.", en: "For the duration of a month he told nobody about it." }, drill: { jp: "В течение месяца он ничего не говорил", en: "For the duration of a month he said nothing" }, hint: "f te-CHE-ni-ye — the в as f, stress on CHE. ⚠️ GOVERNS THE GENITIVE and it answers HOW LONG: «в течение ГОДА», «в течение ДНЯ». ⚠️ SPELLING TRAP RUSSIANS THEMSELVES GET WRONG: this phrase ends in -ие, while «в течениИ реки» (in the current of a river) ends in -ии. The preposition is -ие. From течь «to flow»." },
        { id: "ru-u117l4-vkhode", type: "vocab", front: "в ходе", reading: "vkhode", meaning: "in the course of", accept: ["during the running of", "as part of the proceedings of", "while a thing was going on"], example: { jp: "В ходе разговора стало ясно, что все устали.", en: "In the course of the conversation it became clear that everyone was tired." }, drill: { jp: "В ходе разговора стало ясно", en: "In the course of the conversation it became clear" }, hint: "f KHO-de — the в as f, stress on KHO with the scraping х. ⚠️ GOVERNS THE GENITIVE: «в ходе ВСТРЕЧИ», «в ходе РАБОТЫ». ⚠️ DIFFERENT FROM `в течение`, which measures a STRETCH OF TIME: в ходе names an EVENT and says something happened inside it. «В ходе месяца» is wrong; «в ходе переговоров» is right. From ход «a course, a movement»." },
        { id: "ru-u117l4-pomere", type: "vocab", front: "по мере", reading: "pomere", meaning: "in proportion as", accept: ["as something progresses", "to the extent that", "step by step with"], example: { jp: "По мере работы всё становилось понятнее.", en: "In proportion as the work went on everything became clearer." }, drill: { jp: "По мере работы всё становилось понятнее", en: "As the work went on everything became clearer" }, hint: "pa ME-re — stress on ME. ⚠️ GOVERNS THE GENITIVE: «по мере СИЛ», «по мере ВОЗМОЖНОСТИ». ⚠️ IT MEANS «GRADUALLY, AS», not «because»: «по мере того как» is the full conjunction before a clause. «По мере возможности» — as far as possible — is the single commonest use and worth memorising whole. From мера «a measure»." },
        { id: "ru-u117l4-vsootvetstviis", type: "vocab", front: "в соответствии с", reading: "vsootvetstviis", meaning: "in accordance with", accept: ["in line with", "as required by", "conforming to"], example: { jp: "В соответствии с правилами все документы надо подать заранее.", en: "In accordance with the rules all documents must be submitted in advance." }, drill: { jp: "В соответствии с правилами документы надо подать заранее", en: "In accordance with the rules the documents must be submitted in advance" }, hint: "f sa-at-VET-stvi-i s — the в as f, stress on VET, both unstressed о reducing to a. ⚠️ GOVERNS THE INSTRUMENTAL, because of the final с: «в соответствии С ЗАКОНОМ». ⚠️ Its one-word rival `согласно` is NOT carded (§D, against `согласен` u61 and `соглашаться` u35) — see the header. This phrase is the one a Russian document actually prints." },
        { id: "ru-u117l4-poitogam", type: "vocab", front: "по итогам", reading: "poitogam", meaning: "on the results of", accept: ["judging by the final figures of", "at the end of and in the light of", "on the strength of the outcome"], example: { jp: "По итогам года зарплату подняли всем, кто остался.", en: "On the results of the year the pay was raised for everyone who stayed." }, drill: { jp: "По итогам года зарплату подняли всем", en: "On the results of the year the pay was raised for everyone" }, hint: "pa i-TO-gam — stress on TO. ⚠️ GOVERNS THE GENITIVE and итогам is PLURAL, always: «по итогам ГОДА», «по итогам ВСТРЕЧИ». ⚠️ Built on `итог` (u37, «a total») and it says two things at once: the period is OVER, and what follows is a consequence of how it went. Standard in business and in sport." },
        { id: "ru-u117l4-vpolzu", type: "vocab", front: "в пользу", reading: "vpolzu", meaning: "in favour of", accept: ["to the benefit of", "deciding for", "on the side of"], example: { jp: "Суд решил в пользу рабочих, и все были очень рады.", en: "The court decided in favour of the workers, and everyone was very glad." }, drill: { jp: "Суд решил в пользу рабочих", en: "The court decided in favour of the workers" }, hint: "f POL-zu — the в as f, stress on POL. ⚠️ GOVERNS THE GENITIVE: «в пользу ИСТЦА», «в пользу ЭТОГО ВАРИАНТА». ⚠️ TWO JOBS: who WINS (a court, a match) and which ARGUMENT a fact supports — «аргумент в пользу» is evidence for. Built on польза «benefit», reachable from the taught `пользоваться` (u32) and therefore not carded on its own." },
      ],
    },
  ],
};
