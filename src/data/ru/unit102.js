// RU Unit 102 — Конституция и правосудие ("The constitution and the courts") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 1 (u98–u110). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit61.js §1–§8, and
// ru/unit98.js §1–§7d for this band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Politics and law" AND A2 SPENT THE FURNITURE OF IT.
// u51 Общество и государство owns государство · народ · общество · население ·
// гражданин · власть · президент · министр · армия · солдат · война · закон ·
// тюрьма · суд · преступление · наказание · штраф · право · партия · союз ·
// организация · депутат · чиновник — 24 cards. u71 Долг и запрет owns устав ·
// приказ · распоряжение · предписание · полномочие · контроль · ограничение ·
// легальный · справедливый · мораль. So u102 NARROWS to the MACHINE and the
// COURTROOM: the organs that make and sign law, how the people choose who sits
// in them, what a party brings before a judge, and law as a written system.
// A learner could already name a court and a law and could not name a claim, a
// plaintiff, an appeal, a code or an amendment.
//
// ⚠️ CROSS-BLOCK BOUNDARY — FOUR SLOTS REACH FOR "THE STATE" AND THIS IS THE LINE:
//   **u102 (here) owns the CONSTITUTION AND THE COURTROOM.**
//   **u129 Войско и оборона owns the ARMY** (оружие · полк · оборона · штаб).
//   **u130 Дипломатия и мир owns the TREATY** (посол · санкция · перемирие)
//        **— AND `мандат`.** u102l2 carded it too; u98.js §6's explicit
//        allocation names it for u130, so the cross-block dedupe of 2026-10-07
//        gave it up here and l2 cards `бюллетень` instead, which is the thing a
//        voter actually handles and which no other slot wants. **`мандат` is not
//        in scope for any sentence before u130.**
//   **u131 Преступление и следствие owns the CRIME AND THE INVESTIGATION**
//        (кража · взятка · улика · допрос · обыск · арест · расследование) —
//        **and `приговор` is u131's, not u102's.** This unit's `апелляция`
//        example deliberately says «решение суда» rather than приговор for that
//        reason. No slot but u102 may card `апелляция`.
//
// ⚠️ SEVEN CANDIDATES REFUSED, each for a stated reason:
//   `голосование` — `голос` (u39) is glossed "a voice" and in Russian the same
//        word IS a vote, so "the casting of votes" is handed over. `избиратель`
//        and `референдум` carry the job.
//   `законопроект` — закон (u51) + проект (u42), both taught: a learner who has
//        the two composes the third. unit51.js §3's test, applied to a compound.
//   `правосудие` — прав- (право u51) + суд (u51), same shape, same verdict. The
//        unit is TITLED with it, which is legal: a title is not a card, the same
//        split as u92's `прошлое`.
//   `слушание` — `слушать` (u59) hands it over outright.
//   `ответчик` — `ответ` (u7) plus the taught `ответственность` (u42) make it
//        guessable, and `истец` alone teaches the pair: ответчик is named in
//        истец's hint instead, where no rule has to bend.
//   `юридический` — the same lexeme as the carded `юрист`. `присяга` took its
//        slot.
//   `присяжный` · `подсудимый` — SUBSTANTIVISED ADJECTIVES, barred by
//        unit1.js §5's last rule and unit98.js §4. Both probe free as strings.
//   Dropped for count at 24, all legal: `самоуправление` · `муниципалитет` ·
//        `ведомственный` · `истина`-adjacent `правомерный`.
//
// ⚠️ `референдум` AND `вето` ARE EXACT FREE PASSES IF GLOSSED AS THEMSELVES.
// Their readings ARE "referendum" and "veto", so `produceIsFreePass` fires on the
// obvious gloss — unit98.js §7c. Both are glossed as descriptions, and so is
// every one of their accept entries.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT102 = {
  id: "ru-u102",
  lang: "ru",
  title: "Конституция и правосудие",
  order: 102,
  stage: "b2",
  lessons: [
    {
      id: "ru-u102l1",
      unit: 102,
      lesson: 1,
      title: "The machine of state",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the organs that make and sign law — the cabinet, the elected chamber, the founding law, a presidential decree, a formal ruling and a department of state.",
      items: [
        { id: "ru-u102l1-pravitelstvo", type: "vocab", front: "правительство", reading: "pravitelstvo", meaning: "the body of ministers that runs a country", accept: ["the executive arm of a state", "the cabinet in power", "the ministers taken together"], example: { jp: "Правительство обещало новый закон, однако парламент его так и не принял.", en: "The cabinet promised a new law, yet the chamber never passed it." }, drill: { jp: "Правительство здесь обещает слишком много", en: "The cabinet here promises too much" }, hint: "pra-VI-tel-stva — stress on VI, and both о reduce to a. NEUTER (-о). ⚠️ It only LOOKS like `правило` from unit 41 and `правильный` from unit 40: all three sit on прав-, but a rule does not hand a learner the cabinet. ⚠️ NOT the same as `власть` from unit 51, which is power in the abstract — правительство is the actual set of ministers." },
        { id: "ru-u102l1-parlament", type: "vocab", front: "парламент", reading: "parlament", meaning: "the elected assembly that makes law", accept: ["a chamber of elected lawmakers", "the legislature of a country", "the house where laws are voted on"], example: { jp: "В парламенте спорили целый день, и решения так и не нашли.", en: "They argued in the chamber all day, and never found a decision." }, drill: { jp: "Парламент работает уже целый год", en: "The chamber has been working a whole year already" }, hint: "par-la-MENT — stress on the last syllable. MASCULINE. ⚠️ Russia's own is not called this: the two houses are Государственная Дума and Совет Федерации, and парламент is the generic word used of other countries and in theory. The `депутат` from unit 51 is who sits in it." },
        { id: "ru-u102l1-konstitutsiya", type: "vocab", front: "конституция", reading: "konstitutsiya", meaning: "the founding law a state is built on", accept: ["the basic law standing above all others", "the charter a country is founded on", "the supreme legal document of a state"], example: { jp: "По конституции такое решение принимать нельзя, и юристы об этом говорили сразу.", en: "Under the founding law such a decision cannot be taken, and the lawyers said so at once." }, drill: { jp: "Конституция важнее любого закона", en: "The founding law matters more than any statute" }, hint: "kan-sti-TU-tsi-ya — stress on TU, and the first о reduces to a. FEMININE (-я). ⚠️ It only LOOKS like `констатировать` from unit 83 — two unrelated words that happen to share five letters. ⚠️ Also a person's physical constitution, as in English: крепкая конституция." },
        { id: "ru-u102l1-ukaz", type: "vocab", front: "указ", reading: "ukaz", meaning: "a decree issued by a head of state", accept: ["an order signed by a president", "a decree handed down from the top of a state", "an executive order with the force of law"], example: { jp: "Указ был готов утром, а объяснять его стали только через неделю.", en: "The decree was ready in the morning, and they only set about explaining it a week later." }, drill: { jp: "Указ был готов уже утром", en: "The decree was ready by the morning" }, hint: "u-KAZ — stress on the last syllable. MASCULINE. From указывать, to point out. ⚠️ A SPECIFIC INSTRUMENT, not a general word for an order: in Russia a указ is signed by the president and nobody else. `приказ` from unit 71 is what a boss or an officer issues." },
        { id: "ru-u102l1-postanovlenie", type: "vocab", front: "постановление", reading: "postanovlenie", meaning: "a formal written ruling adopted by a body", accept: ["a resolution passed by an authority", "an official decision set down in writing", "a ruling handed down by an organ of state"], example: { jp: "Постановление прочитали всем, однако понял его далеко не каждый.", en: "The resolution was read out to everybody, yet by no means everyone understood it." }, drill: { jp: "Постановление прочитали всем отделам", en: "The resolution was read out to all the departments" }, hint: "pas-ta-nav-LE-ni-ye — six syllables, stress on LE, and all three о reduce to a. NEUTER (-ие). From ставить, unit 57. ⚠️ Issued by a COLLECTIVE body — a government, a court, a council — where a `указ` comes from one person. Russian bureaucracy runs on them." },
        { id: "ru-u102l1-vedomstvo", type: "vocab", front: "ведомство", reading: "vedomstvo", meaning: "a department of state with its own remit", accept: ["a government agency in its own right", "an arm of the administration", "an official body under a ministry"], example: { jp: "Каждое ведомство занято своим, и договориться им очень трудно.", en: "Every agency is busy with its own affairs, and it is very hard for them to come to terms." }, drill: { jp: "Каждое ведомство занято только своим", en: "Every agency is busy only with its own affairs" }, hint: "VE-dam-stva — stress on the first syllable, and both о reduce to a. NEUTER (-о). From ведать, to have charge of. ⚠️ The word Russian news uses to avoid naming a ministry: силовые ведомства, the security agencies. Drier and vaguer than `отдел` from unit 42, and deliberately so." },
      ],
    },
    {
      id: "ru-u102l2",
      unit: 102,
      lesson: 2,
      title: "Choosing who governs",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about an election — a candidate, a voter, the side out of power, a party bloc in the chamber, a direct vote of the people, and the paper a vote is cast on.",
      items: [
        { id: "ru-u102l2-kandidat", type: "vocab", front: "кандидат", reading: "kandidat", meaning: "a person standing for a post", accept: ["somebody put forward for election", "a person offering himself for a position", "a contender for an office"], example: { jp: "Кандидат обещал очень много, зато сделал потом очень мало.", en: "The contender promised a great deal, and then did very little." }, drill: { jp: "Этот кандидат обещает слишком много", en: "This contender promises too much" }, hint: "kan-di-DAT — stress on the last syllable. MASCULINE. ⚠️ ALSO AN ACADEMIC DEGREE and that is the sense a Russian meets most: кандидат наук is the first doctorate, roughly a PhD. Unit 113's slot owns that sense; this card is the electoral one." },
        { id: "ru-u102l2-izbiratel", type: "vocab", front: "избиратель", reading: "izbiratel", meaning: "a person entitled to cast a vote", accept: ["a member of the electorate", "somebody with a vote to cast", "one of those who elect"], example: { jp: "Избиратель пришёл утром, хотя верил этим словам не очень.", en: "The voter came in the morning, although he did not much believe these words." }, drill: { jp: "Избиратель здесь всегда один и тот же", en: "The voter here is always one and the same" }, hint: "iz-bi-RA-tel — stress on RA. MASCULINE. From избирать, the formal partner of `выбирать` from unit 18 — and note that the plain noun выбор is not taught in this course, so this family reaches you through its official branch first. The collective noun is электорат." },
        { id: "ru-u102l2-oppozitsiya", type: "vocab", front: "оппозиция", reading: "oppozitsiya", meaning: "the parties ranged against those in power", accept: ["those who organise against the government", "the side that is out of power", "organised political resistance"], example: { jp: "Оппозиция хотела нового закона, однако голосов у неё не хватало.", en: "The side out of power wanted a new law, yet it did not have the votes." }, drill: { jp: "Оппозиция здесь очень слабая и тихая", en: "The side out of power here is very weak and quiet" }, hint: "ap-pa-ZI-tsi-ya — stress on ZI, both о reduce to a, and the пп is held. FEMININE (-я). ⚠️ Also used of any opposing stance, in chess and in grammar. The person is an оппозиционер — distinct from the `оппонент` of unit 98, who merely argues." },
        { id: "ru-u102l2-fraktsiya", type: "vocab", front: "фракция", reading: "fraktsiya", meaning: "a party's bloc of members inside a chamber", accept: ["a grouping of deputies from one party", "a party bloc within a legislature", "the members a party has in a house"], example: { jp: "Фракция решила молчать, и поправку никто не стал обсуждать.", en: "The party bloc decided to keep quiet, and nobody set about discussing the amendment." }, drill: { jp: "Фракция решила молчать весь день", en: "The party bloc decided to keep quiet all day" }, hint: "FRAK-tsi-ya — stress on the first syllable. FEMININE (-я). ⚠️ In Russian it is NEUTRAL — the official name for a party's deputies in the Duma — where English \"faction\" implies a split. ⚠️ Also a fraction in chemistry, of distilled oil." },
        { id: "ru-u102l2-referendum", type: "vocab", front: "референдум", reading: "referendum", meaning: "a question put to every voter directly", accept: ["a direct vote of the whole people", "a popular ballot on a single question", "a plebiscite of the electorate"], example: { jp: "Референдум будет осенью, хотя вопрос был готов ещё летом.", en: "The direct vote will be in the autumn, although the question was ready back in the summer." }, drill: { jp: "Референдум будет только осенью", en: "The direct vote will only be in the autumn" }, hint: "re-fe-REN-dum — stress on REN. MASCULINE. ⚠️ Glossed the long way round on purpose: its reading IS the English word, so «a referendum» would let a learner read the answer off the prompt — unit 1 §9 and unit 98's header. ⚠️ Distinguish it from `опрос` from unit 99, which measures opinion and decides nothing." },
        { id: "ru-u102l2-byulleten", type: "vocab", front: "бюллетень", reading: "byulleten", meaning: "the printed paper a voter marks", accept: ["the sheet a voter fills in at a polling station", "a ballot slip dropped into the box", "the official form a choice is recorded on"], example: { jp: "Бюллетень он получил утром, однако читал его очень долго, хотя вопрос был совсем простой.", en: "He was given the paper in the morning, yet read it for a very long time, although the question was quite a simple one." }, drill: { jp: "Бюллетень он получил только утром", en: "He was given the paper only in the morning" }, hint: "byul-le-TEN — stress on the last syllable, the ю is said yu and the лл is held. MASCULINE despite the -ь (unit 1 §3). ⚠️ ALSO A SICK NOTE in everyday Russian — «он на бюллетене» means he is off work ill — and in speech that sense is the commoner of the two. Distinguish it from `референдум` in this lesson: a референдум is the event, a бюллетень the piece of paper." },
      ],
    },
    {
      id: "ru-u102l3",
      unit: 102,
      lesson: 3,
      title: "Taking it to court",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Bring and fight a case — a claim, the suing party, the lawyer who speaks for a side, the state's prosecutor, an appeal upward, and challenging a ruling formally.",
      items: [
        { id: "ru-u102l3-isk", type: "vocab", front: "иск", reading: "isk", meaning: "a claim brought before a court", accept: ["a lawsuit filed against somebody", "a legal claim lodged for decision", "a suit at law"], example: { jp: "Иск лежал в суде почти год, и решения всё не было.", en: "The claim sat in the court for nearly a year, and there was still no decision." }, drill: { jp: "Иск к этой фирме совсем новый", en: "The claim against this firm is quite new" }, hint: "ISK — one syllable, and ⚠️ the oblique forms move the stress onto the ending: искА, искИ. MASCULINE. From искать, to look for. ⚠️ It governs к + the dative for whom it is against: иск К фирме, a claim against the firm." },
        { id: "ru-u102l3-istets", type: "vocab", front: "истец", reading: "istets", meaning: "the side bringing a claim", accept: ["the one who sues", "whoever lodges the claim", "the suing party in a case"], example: { jp: "Истец говорил спокойно, а его адвокат молчал.", en: "The suing party spoke calmly, and his lawyer said nothing." }, drill: { jp: "Истец говорил очень спокойно", en: "The suing party spoke very calmly" }, hint: "is-TETS — stress on the last syllable. MASCULINE, and ⚠️ the е DROPS in every other form: истцА, истцЫ — the same class as `отец` from unit 10. ⚠️ ITS OPPOSITE NUMBER IS `ответчик`, THE DEFENDANT, which is deliberately not a card: ответ from unit 7 plus ответственность from unit 42 make it guessable, so you learn it here in the hint instead. The pair истец/ответчик is on every Russian court document." },
        { id: "ru-u102l3-advokat", type: "vocab", front: "адвокат", reading: "advokat", meaning: "the lawyer who speaks for a side in court", accept: ["counsel acting for a party", "a defence lawyer", "the advocate engaged by somebody"], example: { jp: "Адвокат объяснил, что обжаловать такое решение можно.", en: "The lawyer explained that such a decision can be challenged." }, drill: { jp: "Адвокат объяснил ему всё спокойно", en: "The lawyer explained everything to him calmly" }, hint: "ad-va-KAT — stress on the last syllable, and the о reduces to a. MASCULINE. ⚠️ Narrower than `юрист` in lesson 4: a юрист is anyone trained in law, an адвокат is specifically licensed to appear in court. ⚠️ The feminine адвокатша is dismissive; Russian says женщина-адвокат or simply адвокат." },
        { id: "ru-u102l3-prokuror", type: "vocab", front: "прокурор", reading: "prokuror", meaning: "the state's lawyer who brings charges", accept: ["the officer who prosecutes on behalf of the state", "counsel for the prosecution", "the state's accuser in a courtroom"], example: { jp: "Прокурор хотел наказания, однако суд его не слушал.", en: "The prosecutor wanted a punishment, yet the court did not listen to him." }, drill: { jp: "Прокурор хотел самого строгого наказания", en: "The prosecutor wanted the strictest punishment" }, hint: "pra-ku-ROR — stress on the last syllable, and the first о reduces to a. MASCULINE. ⚠️ A FAR BIGGER FIGURE IN RUSSIA than the English word suggests: прокуратура is a standing institution that supervises legality generally, not only a trial. Pairs with `суд` and `закон` from unit 51." },
        { id: "ru-u102l3-apellyatsiya", type: "vocab", front: "апелляция", reading: "apellyatsiya", meaning: "a challenge taking a ruling to a higher court", accept: ["an application to have a judgement reviewed above", "a formal appeal against a decision", "the carrying of a case upward"], example: { jp: "Апелляция ничего не дала, и решение суда стало только строже.", en: "The appeal achieved nothing, and the court's decision only got stricter." }, drill: { jp: "Апелляция ничего ему не дала", en: "The appeal achieved nothing for him" }, hint: "a-pel-LYA-tsi-ya — stress on LYA, and the лл is held. FEMININE (-я). ⚠️ THE EXAMPLE SAYS «решение суда» AND NOT приговор ON PURPOSE: the verdict is unit 131's card, and this unit does not take another slot's word. ⚠️ Also an appeal in the rhetorical sense, but Russian prefers обращение for that." },
        { id: "ru-u102l3-obzhalovat", type: "vocab", front: "обжаловать", reading: "obzhalovat", meaning: "to challenge a ruling through the proper channel", accept: ["to lodge a formal complaint against a decision", "to contest a judgement officially", "to put a ruling up for review"], example: { jp: "Такое решение можно обжаловать, если сделать это за месяц.", en: "Such a decision can be challenged, if it is done within a month." }, drill: { jp: "Это решение надо обжаловать сразу", en: "This decision must be challenged at once" }, hint: "ab-ZHA-la-vat — stress on ZHA, and both о reduce to a. MASCULINE verb, PERFECTIVE; the imperfective is обжаловать too in practice, so treat it as one form. Built on `жалоба` from unit 70. ⚠️ Takes the accusative directly: обжаловать решение, never обжаловать на решение." },
      ],
    },
    {
      id: "ru-u102l4",
      unit: 102,
      lesson: 4,
      title: "Law as a written system",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about law as a body of text and authority — a code, an amendment, a lawyer by training, rightful standing, the power to block, and the oath of office.",
      items: [
        { id: "ru-u102l4-kodeks", type: "vocab", front: "кодекс", reading: "kodeks", meaning: "a body of law gathered into one book", accept: ["a consolidated set of statutes", "a lawbook covering a whole field", "a code of laws in a single volume"], example: { jp: "В кодексе всё написано ясно, хотя читать его трудно.", en: "Everything is written out clearly in the code, although it is hard to read." }, drill: { jp: "Этот кодекс читать очень трудно", en: "This code is very hard to read" }, hint: "KO-deks — stress on the first syllable. MASCULINE. ⚠️ ITS DRILL CARRIES THE NOMINATIVE ON PURPOSE: «в кодексе» passes `lint`'s substring test and the ROUTER still cannot blank it, because `canCloze` matches whole words — the defect unit 61 §7 names, caught here by selfcheck and nowhere else. ⚠️ Russia has several and the learner will meet their names: Уголовный кодекс, the criminal code; Трудовой кодекс, the labour code. ⚠️ Also a code of conduct: кодекс чести. Bigger than one `закон` from unit 51 — a кодекс collects hundreds." },
        { id: "ru-u102l4-popravka", type: "vocab", front: "поправка", reading: "popravka", meaning: "a change written into an existing law", accept: ["an amendment to a text already in force", "an alteration inserted into a statute", "a correction adopted into a law"], example: { jp: "Поправка к закону была маленькая, зато спорили о ней долго.", en: "The amendment to the law was small, but they argued about it a long time." }, drill: { jp: "Поправка к закону была совсем маленькая", en: "The amendment to the law was quite small" }, hint: "pa-PRAV-ka — stress on PRAV, and the first о reduces to a. FEMININE (-а). From поправить, to put right. ⚠️ It governs к + the dative for what it amends: поправка К закону. ⚠️ Also a correction in ordinary speech and an allowance in a calculation: с поправкой на ветер." },
        { id: "ru-u102l4-yurist", type: "vocab", front: "юрист", reading: "yurist", meaning: "somebody trained in the law", accept: ["a person whose profession is law", "a legally qualified person", "a law graduate by trade"], example: { jp: "Юрист сказал, что иск надо писать иначе.", en: "The lawyer said the claim has to be written differently." }, drill: { jp: "Юрист сказал всё очень ясно", en: "The lawyer said everything very clearly" }, hint: "yu-RIST — stress on the last syllable. MASCULINE. ⚠️ The BROAD word: every адвокат is a юрист, and most юристы never appear in court — they sit in companies and ministries. ⚠️ The adjective юридический is not carded; it is the same lexeme, and it is the word in юридический факультет, a law faculty." },
        { id: "ru-u102l4-legitimnost", type: "vocab", front: "легитимность", reading: "legitimnost", meaning: "being accepted as rightful by those governed", accept: ["the standing that makes power acceptable", "recognition of a rule as proper", "rightfulness in the eyes of the governed"], example: { jp: "Легитимность этой власти признают далеко не все.", en: "By no means everybody accepts the rightfulness of this power." }, drill: { jp: "Легитимность этой власти под вопросом", en: "The rightfulness of this power is in question" }, hint: "le-gi-TIM-nast — stress on TIM. FEMININE despite the -ь, like every -ость noun. ⚠️ NOT THE SAME AS `легальный` from unit 71, and the difference is the whole point: легальный means allowed by the written law, легитимность means accepted as rightful by people. A legal government can lack it." },
        { id: "ru-u102l4-veto", type: "vocab", front: "вето", reading: "veto", meaning: "the power to block a decision outright", accept: ["a right to forbid something already agreed", "a blocking power over a decision", "the right to refuse assent"], example: { jp: "Вето президента остановило этот закон, и спорить было поздно.", en: "The president's block stopped this law, and it was too late to argue." }, drill: { jp: "Это вето никто не ждал", en: "Nobody expected this block" }, hint: "VE-to — stress on the first syllable. NEUTER and ⚠️ INDECLINABLE, like `досье` from unit 99 and метро from unit 9: «право вето», «наложить вето», the word itself never changes. ⚠️ Glossed the long way round on purpose: its reading IS the English word." },
        { id: "ru-u102l4-prisyaga", type: "vocab", front: "присяга", reading: "prisyaga", meaning: "a formal oath sworn on taking office", accept: ["a sworn undertaking before taking up duty", "the oath an official or a soldier swears", "a solemn pledge taken publicly"], example: { jp: "Присягу он давал утром, а работать начал в тот же день.", en: "He swore the oath in the morning, and started work the same day." }, drill: { jp: "Присяга здесь очень короткая", en: "The oath here is very short" }, hint: "pri-SYA-ga — stress on SYA. FEMININE (-а). From `клясться` in unit 81, by a different root. ⚠️ THE VERB IS IRREGULAR IN USE: Russian says принимать присягу or давать присягу, never присягать in ordinary speech. Every Russian conscript swears one." },
      ],
    },
  ],
};
