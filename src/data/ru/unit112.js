// RU Unit 112 — Система здравоохранения ("The health-care system") — B2
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE SCAFFOLD TITLE WAS `Health systems and care` AND 48+ CARDS OF HEALTH
// ALREADY SHIPPED AT B1. The body and basic illness are u20 (`врач` · `больница`
// · `таблетка` · `лекарство` · `болезнь` · `здоровье` · `помогать`), the clinical
// encounter is u53 (`операция` · `укол` · `рецепт` · `анализ` · `приём` ·
// `мозг` · `нерв` · `вредный`), and mental health is u77 (`депрессия` ·
// `стресс` · `терапия` · `психолог` · `истощение`). u91 holds `эпидемия`.
// So this unit is NOT "health". It is narrowed to THE SYSTEM AROUND the patient:
// where care physically happens, how a thing is found out, how it is prevented,
// and who pays.
//
// ⚠️ `вакцина` IS THIS UNIT'S BY CENTRAL ALLOCATION — block 1's u104 yields it
// and keeps атом · молекула · клетка · излучение · частица · реактор.
//
// ⚠️ SIX CANDIDATES REFUSED, each for a reason a front probe cannot see:
//   `лечение`    — unit1.js §D, against `лечиться` (u35, "to get treatment").
//                  One lexeme, and the noun is exactly what the verb names.
//   `терапевт`   — §D, against `терапия` (u77). A learner who knows "therapy"
//                  produces "therapist" unaided.
//   `смертность` — §D, against `смерть` (u59).
//   `скорая`     — unit51.js §2(b): a SUBSTANTIVISED ADJECTIVE is barred, and
//                  `скоро` (u7) and `скорость` (u36) are both taught besides.
//                  The ambulance is described with `госпитализация` instead.
//   `полис`      — dropped as a near-duplicate prompt for `страховка`, and
//                  because its reading sits one letter from `полиция` (u14).
//   `назначение` — §D, against `назначать` (u49).
//
// ⚠️ `прививка` AND `вакцина` ARE BOTH CARDED ON PURPOSE and their glosses are
// kept apart by hand: a вакцина is the SUBSTANCE, a прививка is the JAB you go
// and have. Russian uses the second one far more often in speech, which is why
// dropping it would have left the learner unable to say the ordinary sentence.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT112 = {
  id: "ru-u112",
  lang: "ru",
  title: "Система здравоохранения",
  order: 112,
  stage: "b2",
  lessons: [
    {
      id: "ru-u112l1",
      unit: 112,
      lesson: 1,
      title: "Where care actually happens",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a local clinic, a hospital ward, inpatient care, admission to hospital, a surgeon and a nurse.",
      items: [
        { id: "ru-u112l1-poliklinika", type: "vocab", front: "поликлиника", reading: "poliklinika", meaning: "a local clinic", accept: ["a health centre", "a district polyclinic", "an outpatient clinic"], example: { jp: "Поликлиника рядом с домом работает до восьми часов вечера.", en: "The clinic near the house is open until eight in the evening." }, drill: { jp: "Поликлиника рядом с домом работает до восьми", en: "The clinic near the house is open until eight" }, hint: "pa-li-KLI-ni-ka — stress on KLI, and the first о reduces to a. FEMININE (-а). ⚠️ NOT a hospital: `больница` (u20) is where you stay overnight, a поликлиника is where you walk in, see a doctor and walk out. Every Russian address belongs to one, and «моя поликлиника» means the one you are registered at." },
        { id: "ru-u112l1-palata", type: "vocab", front: "палата", reading: "palata", meaning: "a hospital ward", accept: ["a ward", "a hospital room", "a room with several beds"], example: { jp: "Палата была на четыре места, и спать там было трудно.", en: "The ward had four beds, and sleeping there was difficult." }, drill: { jp: "Палата была на четыре места", en: "The ward had four beds" }, hint: "pa-LA-ta — stress on LA, and the first о… there is no о: both а are said as а, the second one reduced. FEMININE (-а). ⚠️ TWO SENSES, far apart: a hospital ward, and a CHAMBER OF PARLIAMENT («Палата лордов»). Context does all the work." },
        { id: "ru-u112l1-statsionar", type: "vocab", front: "стационар", reading: "statsionar", meaning: "inpatient care", accept: ["an inpatient unit", "hospital care with a bed", "the inpatient department"], example: { jp: "Стационар нужен только тогда, когда дома лечиться нельзя.", en: "Inpatient care is needed only when you cannot be treated at home." }, drill: { jp: "Стационар нужен только тогда", en: "Inpatient care is needed only" }, hint: "sta-tsi-a-NAR — stress on the last syllable, with ц said as ts. MASCULINE. ⚠️ The exact opposite of `амбулаторный` in lesson 4, and the pair is how a Russian doctor explains your options: стационар = you stay, амбулаторно = you go home. From the same root as «стационарный», fixed in place." },
        { id: "ru-u112l1-gospitalizatsiya", type: "vocab", front: "госпитализация", reading: "gospitalizatsiya", meaning: "admission to hospital", accept: ["hospitalisation", "being taken into hospital", "an admission"], example: { jp: "Госпитализация была срочной, и в тот же день он был в больнице.", en: "The admission to hospital was urgent, and he was in hospital the same day." }, drill: { jp: "Госпитализация была срочной в тот же день", en: "The admission to hospital was urgent the same day" }, hint: "gos-pi-ta-li-ZA-tsi-ya — seven syllables, stress on ZA. FEMININE (-я). ⚠️ A hospital in this word is a ГОСПИТАЛЬ, which in Russian is a MILITARY hospital — the ordinary one is `больница` (u20). The borrowed noun kept the Latin root even though the everyday word did not, which is why госпитализация looks stranger than it is." },
        { id: "ru-u112l1-khirurg", type: "vocab", front: "хирург", reading: "khirurg", meaning: "a surgeon", accept: ["an operating doctor", "the surgeon", "a doctor who operates"], example: { jp: "Хирург сказал, что операция будет утром, и больше ничего не сказал.", en: "The surgeon said the operation would be in the morning, and said nothing more." }, drill: { jp: "Хирург будет делать операцию утром", en: "The surgeon will do the operation in the morning" }, hint: "khi-RURG — stress on the last syllable, opening with the scraping х. MASCULINE. ⚠️ Russian has no feminine form in use — a woman surgeon is «хирург» too, and «она хирург» is correct. `врач` (u2) is the general word for a doctor; a хирург is the one who does the `операция` (u53)." },
        { id: "ru-u112l1-medsestra", type: "vocab", front: "медсестра", reading: "medsestra", meaning: "a nurse", accept: ["a female nurse", "the nurse", "a nursing sister"], example: { jp: "Медсестра приходит каждое утро и делает укол.", en: "The nurse comes every morning and gives the injection." }, drill: { jp: "Медсестра приходит каждое утро и делает укол", en: "The nurse comes every morning and gives the injection" }, hint: "med-sest-RA — stress on the last syllable. FEMININE (-а). A clipped compound of медицинская + `сестра` (u10) — Russian builds institutional words by squeezing two together, exactly as `вторсырьё` does at u111. ⚠️ A male nurse is «медбрат», from `брат` (u10), and the pair is worth noticing: the gender is baked into the word." },
      ],
    },
    {
      id: "ru-u112l2",
      unit: 112,
      lesson: 2,
      title: "Finding out what is wrong",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a diagnosis, an examination, a work-up, a symptom, and say that something is chronic or catching.",
      items: [
        { id: "ru-u112l2-diagnoz", type: "vocab", front: "диагноз", reading: "diagnoz", meaning: "a diagnosis", accept: ["the diagnosis", "a doctor's verdict", "what a doctor decides you have"], example: { jp: "Диагноз поставили только через месяц, и это было очень тяжело.", en: "The diagnosis was made only after a month, and that was very hard." }, drill: { jp: "Диагноз поставили только через месяц", en: "The diagnosis was made only after a month" }, hint: "di-AG-naz — stress on AG, and the final о reduces to a. MASCULINE. ⚠️ THE VERB IS `ставить`, not «давать» or «делать»: «поставить диагноз», to put a diagnosis. Learn the pair together — the wrong verb is the commonest mistake here." },
        { id: "ru-u112l2-osmotr", type: "vocab", front: "осмотр", reading: "osmotr", meaning: "a check-over", accept: ["a physical examination by a doctor", "a look-over", "a once-over"], example: { jp: "Осмотр занял пять минут, и врач ничего не нашёл.", en: "The examination took five minutes, and the doctor found nothing." }, drill: { jp: "Осмотр занял пять минут", en: "The examination took five minutes" }, hint: "as-MOTR — stress on the last syllable, ending in the consonant cluster -отр, and the first о reduces to a. MASCULINE. From смотреть (unit 4, «to look») with о- «all over». ⚠️ Used outside medicine too — «осмотр машины», a vehicle inspection. The hands-on look, where `обследование` is the whole battery of tests." },
        { id: "ru-u112l2-obsledovanie", type: "vocab", front: "обследование", reading: "obsledovanie", meaning: "a work-up", accept: ["a full investigation", "a series of medical tests", "a thorough examination"], example: { jp: "Обследование заняло три дня, и все анализы были хорошие.", en: "The work-up took three days, and all the tests were good." }, drill: { jp: "Обследование заняло три дня", en: "The work-up took three days" }, hint: "ap-SLE-da-va-ni-ye — stress on SLE, the б devoices to p before с, and both unstressed о reduce to a. NEUTER (-ие). ⚠️ BIGGER THAN `осмотр`: an осмотр is one doctor looking at you, an обследование is the whole programme of `анализ` (u53) and machines. From следовать «to follow», with об- «all round»." },
        { id: "ru-u112l2-simptom", type: "vocab", front: "симптом", reading: "simptom", meaning: "a symptom", accept: ["a sign of illness", "the symptom", "what you feel when ill"], example: { jp: "Симптом был только один, и поэтому врач долго не понимал.", en: "There was only one symptom, which is why the doctor did not understand for a long time." }, drill: { jp: "Симптом был только один", en: "There was only one symptom" }, hint: "simp-TOM — stress on the last syllable. MASCULINE. ⚠️ STRESS IS THE WHOLE RISK HERE: English says SYMP-tom, Russian says simp-TOM, and the English stress makes the word unrecognisable. Note the gloss is \"a symptom\" and not \"simptom\" — unit1.js §9 forbids glossing an internationalism to its own reading." },
        { id: "ru-u112l2-khronicheskiy", type: "vocab", front: "хронический", reading: "khronicheskiy", meaning: "chronic", accept: ["long-lasting of an illness", "going on for years", "that never clears up"], example: { jp: "Хронический кашель у него уже третий год, и лекарство не помогает.", en: "He has had a chronic cough for three years now, and the medicine does not help." }, drill: { jp: "Хронический кашель у него уже третий год", en: "He has had a chronic cough for three years now" }, hint: "khra-NI-ches-kiy — stress on NI, opening with the scraping х and the first о reducing to a. ⚠️ Also used of anything that will not stop — «хроническая нехватка денег», a chronic shortage of money. The opposite in medical Russian is «острый», acute, which is the same word as `острый` «sharp» (u58)." },
        { id: "ru-u112l2-zaraznyy", type: "vocab", front: "заразный", reading: "zaraznyy", meaning: "catching", accept: ["contagious", "infectious", "that you can pass on"], example: { jp: "Заразный человек должен сидеть дома, а не ходить на работу.", en: "A contagious person should stay at home and not go to work." }, drill: { jp: "Заразный человек должен сидеть дома", en: "A contagious person should stay at home" }, hint: "za-RAZ-nyy — stress on RAZ. ⚠️ Said of the PERSON as well as the illness, which English resists: «он заразный» is normal Russian. Its verb заразить «to infect» is not carded; `вредный` (u53) is harmful, which is a different claim entirely." },
      ],
    },
    {
      id: "ru-u112l3",
      unit: 112,
      lesson: 3,
      title: "Keeping it from happening",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a vaccine, having a jab, immunity, prevention, quarantine and being a donor.",
      items: [
        { id: "ru-u112l3-vaktsina", type: "vocab", front: "вакцина", reading: "vaktsina", meaning: "a vaccine", accept: ["the vaccine", "a vaccine substance", "a preparation against a disease"], example: { jp: "Вакцина от этой болезни есть уже давно, и она бесплатная.", en: "A vaccine for this disease has existed for a long time, and it is free." }, drill: { jp: "Вакцина от этой болезни есть уже давно", en: "A vaccine for this disease has existed for a long time" }, hint: "vak-TSI-na — stress on TSI, with ц said as ts. FEMININE (-а). ⚠️ THE SUBSTANCE, not the act: you have a `прививка` (next card) OF a вакцина. Russian keeps the two words apart in ordinary speech and so must you — «я сделал прививку», never «я сделал вакцину»." },
        { id: "ru-u112l3-privivka", type: "vocab", front: "прививка", reading: "privivka", meaning: "a vaccination", accept: ["an inoculation", "having a vaccine given to you", "a vaccination jab"], example: { jp: "Прививку детям делают в поликлинике, и это занимает минуту.", en: "Children are given the jab at the clinic, and it takes a minute." }, drill: { jp: "Прививка детям не занимает много времени", en: "A jab for children does not take much time" }, hint: "pri-VIV-ka — stress on VIV. FEMININE (-а). ⚠️ THE ACT, and the verb is `делать`: «сделать прививку». From прививать, to graft — which is also what it means in a garden, where you graft a branch onto a tree. The medical sense is the same picture." },
        { id: "ru-u112l3-immunitet", type: "vocab", front: "иммунитет", reading: "immunitet", meaning: "immunity", accept: ["resistance to a disease", "the immune system's protection", "being immune"], example: { jp: "Иммунитет после болезни есть, но не на всю жизнь.", en: "There is immunity after the illness, but not for life." }, drill: { jp: "Иммунитет после болезни есть", en: "There is immunity after the illness" }, hint: "i-mu-ni-TET — stress on the last syllable, and the double м is said as one long m. MASCULINE. ⚠️ TWO SENSES, both common: biological immunity, and LEGAL immunity from prosecution («депутатский иммунитет»). The second one is the one the news uses." },
        { id: "ru-u112l3-profilaktika", type: "vocab", front: "профилактика", reading: "profilaktika", meaning: "prevention", accept: ["preventive care", "prophylaxis", "stopping a thing before it starts"], example: { jp: "Профилактика стоит дешевле, чем любое лечение после.", en: "Prevention costs less than any treatment afterwards." }, drill: { jp: "Профилактика стоит дешевле", en: "Prevention costs less than everything else" }, hint: "pra-fi-LAK-ti-ka — stress on LAK, and the first о reduces to a. FEMININE (-а). ⚠️ Used of MACHINES as much as of people: «профилактика оборудования» is scheduled maintenance, and a Russian office closed «на профилактику» is closed for servicing. The word means «doing it before it breaks»." },
        { id: "ru-u112l3-karantin", type: "vocab", front: "карантин", reading: "karantin", meaning: "quarantine", accept: ["isolation to stop infection", "a period of isolation", "being shut away"], example: { jp: "Карантин в школе был две недели, и дети учились дома.", en: "The quarantine at school lasted two weeks, and the children studied at home." }, drill: { jp: "Карантин в школе был две недели", en: "The quarantine at school lasted two weeks" }, hint: "ka-ran-TIN — stress on the last syllable. MASCULINE. ⚠️ Russian puts you «на карантине», ON quarantine, with на + the prepositional — not «в». From the Italian for forty days, which is how long a ship waited; the word is the same in both languages and the stress is the only thing you must learn." },
        { id: "ru-u112l3-donor", type: "vocab", front: "донор", reading: "donor", meaning: "a donor", accept: ["a blood donor", "someone who gives blood or an organ", "the donor"], example: { jp: "Донор может сдавать кровь четыре раза в год.", en: "A donor may give blood four times a year." }, drill: { jp: "Донор может сдавать кровь четыре раза в год", en: "A donor may give blood four times a year" }, hint: "DO-nar — stress on the first syllable, and the final о reduces to a. MASCULINE. ⚠️ THE VERB IS `сдавать` (u48, «to hand in»): «сдавать кровь», to give blood. Russian uses the same verb for handing in an exam and handing in blood, which is a good hook for both." },
      ],
    },
    {
      id: "ru-u112l4",
      unit: 112,
      lesson: 4,
      title: "Who pays, and living with it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about health insurance, the health-care system, rehabilitation, a dose, a side effect and outpatient treatment.",
      items: [
        { id: "ru-u112l4-strakhovka", type: "vocab", front: "страховка", reading: "strakhovka", meaning: "insurance", accept: ["an insurance policy", "insurance cover", "health insurance"], example: { jp: "Страховка покрывает приём у врача, но не все лекарства.", en: "The insurance covers a doctor's appointment but not all medicines." }, drill: { jp: "Страховка покрывает приём у врача", en: "The insurance covers a doctor's appointment" }, hint: "stra-KHOF-ka — stress on KHOF, with the scraping х and the в devoicing to f before к. FEMININE (-а). ⚠️ From the same root as `страх` (u28, «fear») — you insure against what you fear — and that is a hook, not a trap: a learner who knows страх will not guess «insurance» unaided. ⚠️ Money for `компенсация` and `выплата` belongs to block 1's u108; this card is the cover itself." },
        { id: "ru-u112l4-zdravookhranenie", type: "vocab", front: "здравоохранение", reading: "zdravookhranenie", meaning: "health care", accept: ["the health service", "public health provision", "the health-care system"], example: { jp: "Здравоохранение в стране бесплатное, но очереди очень большие.", en: "Health care in the country is free, but the queues are very long." }, drill: { jp: "Здравоохранение в стране бесплатное", en: "Health care in the country is free" }, hint: "zdra-va-akh-ra-NE-ni-ye — seven syllables, stress on NE, every unstressed о reducing to a. NEUTER (-ие). ⚠️ A COMPOUND OF TWO WORDS YOU HAVE: здоровье (unit 20) in its old form здрав- plus `охрана` (u75, «the protecting of something») — literally «health-protection». The same здрав- is inside здравствуйте (unit 7), which is why that greeting is so long." },
        { id: "ru-u112l4-reabilitatsiya", type: "vocab", front: "реабилитация", reading: "reabilitatsiya", meaning: "rehabilitation", accept: ["recovery treatment", "rehab", "getting function back after illness"], example: { jp: "Реабилитация после операции шла полгода.", en: "Rehabilitation after the operation went on for six months." }, drill: { jp: "Реабилитация после операции шла полгода", en: "Rehabilitation after the operation lasted six months" }, hint: "re-a-bi-li-TA-tsi-ya — stress on TA. FEMININE (-я). ⚠️ TWO SENSES AND THE SECOND IS HISTORICAL: medical rehabilitation, and the official CLEARING OF A NAME — «реабилитация жертв», the rehabilitation of victims, which is how Soviet history uses the word. Both are live in modern Russian." },
        { id: "ru-u112l4-dozirovka", type: "vocab", front: "дозировка", reading: "dozirovka", meaning: "a dosage", accept: ["the dose", "how much to take", "the amount prescribed"], example: { jp: "Дозировка для детей другая, и это написано на упаковке.", en: "The dosage for children is different, and it is written on the packaging." }, drill: { jp: "Дозировка для детей другая", en: "The dosage for children is different" }, hint: "da-zi-ROF-ka — stress on ROF, the в devoices to f before к, and the first о reduces to a. FEMININE (-а). The word a Russian pharmacy label actually uses. Note it leans on `упаковка`, taught one unit earlier at u111 — the two live together on every medicine box." },
        { id: "ru-u112l4-pobochnyy", type: "vocab", front: "побочный", reading: "pobochnyy", meaning: "incidental", accept: ["secondary", "unintended", "coming as a by-product"], example: { jp: "Побочный результат от лекарства был сильнее болезни.", en: "The side effect of the medicine was stronger than the illness." }, drill: { jp: "Побочный вопрос здесь никому не нужен", en: "A side issue is of no use to anybody here" }, hint: "pa-BOCH-nyy — stress on BOCH, and the first о reduces to a. ⚠️ THE PHRASE YOU NEED IS «побочное действие» — a side effect — and Russian says действие, «action», where English says «effect». From бок (unit 20, «a side of the body»): a побочный thing comes at you from the side. Also «побочный доход», income on the side." },
        { id: "ru-u112l4-ambulatornyy", type: "vocab", front: "амбулаторный", reading: "ambulatornyy", meaning: "outpatient", accept: ["without staying in hospital", "as a day patient", "of outpatient care"], example: { jp: "Амбулаторный приём идёт утром, а операции делают днём.", en: "Outpatient appointments are in the morning, and operations are done in the afternoon." }, drill: { jp: "Амбулаторный приём идёт утром", en: "Outpatient appointments are in the morning" }, hint: "am-bu-la-TOR-nyy — stress on TOR. ⚠️ The exact opposite of `стационар` in lesson 1, and the pair is the single most useful distinction in this unit: «амбулаторно» means you go home afterwards. ⚠️ It does NOT mean «by ambulance» — the ambulance in Russian is «скорая», which this course does not card because a substantivised adjective is barred (unit51.js §2b)." },
      ],
    },
  ],
};
