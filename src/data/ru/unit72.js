// RU Unit 72 — Замысел и намерение ("Design and intention") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 1 (u61–u73). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, and THIS BAND's conventions in ru/unit61.js §1–§8.
//
// THE SLOT TITLE WAS "Plans and intentions" and it is kept. A1 and A2 gave the
// learner the OBJECTS of planning and almost none of the intending: план (u27) ·
// цель (u25) · проект (u42) · задача (u52) · график (u50) · расписание (u29) ·
// решать (u24) · решить (u31) · собираться (u35) · мечта (u24) · надеяться (u28) ·
// обещать (u30) · предлагать (u34) · стараться (u35) · добиваться (u47) ·
// будущее (u24). So a learner could name a plan and could not name an intention,
// a design, a motive for acting, or say that they were striving towards
// something, counting on it, or making provision for it.
//
// ⚠️ SEVENTEEN REFUSED, and this unit has the highest proportion yet refused
//   AGAINST THE BLOCK'S OWN CARDS — which is what the band's last units should
//   expect, since by u72 block 1 has itself spent 264 fronts.
//   AGAINST A1/A2: `планировать` (план u27) · `проектировать` (проект u42) ·
//     `ожидание` (ждать u14) · `желание` (желать u30) · `обещание` (обещать
//     u30) · `готовиться` (готовить u29 AND готов u24) · `предложение`
//     (предлагать u34) · `условиться` (условие u34) · `договариваться` (договор
//     u42) · `поручаться` (поручать u49) · `успевать` (успех u25) ·
//     `обязываться` (обязанность u42) · `нарочный` (нарочно u59) ·
//     `предвидеть` (видеть u4 — "to see" plainly hands you "to foresee").
//   ⚠️ AGAINST THIS BLOCK'S OWN: `осуществимый` (осуществлять, u66l2) ·
//     `реальный` (реальность, u68l1) · `предугадать` (догадываться, u64l2) ·
//     `долгосрочный` (долг, u71l1 — AND долго at u11, so two relatives).
//   `умысел` — refused as a SECOND card on `замысел`'s root, which is this unit's
//     one-root-one-card rule (unit69.js) applied inside a single lesson.
//   `намерен` — the same, against `намерение` carded at l1.
//   `расчёт` — the same, against `рассчитывать` carded at l2. The verb was kept
//     because "to count on" is what a learner needs to SAY.
//   `сценарий` — §D-adjacent against сцена (u55), and `прогноз` carries the field.
//
// ★ FOUR LOANWORDS CHECKED FOR THE FREE PASS (unit1.js §9), because this unit is
//   full of them: инициатива → "initsiativa", стимул → "stimul", стратегия →
//   "strategiya", тактика → "taktika", амбиция → "ambitsiya". NONE of those
//   readings is its English word, so all five keep a short gloss — unlike `идеал`
//   at u68 and `прогресс` at u69, which had to be glossed the long way round.
//
// ★ ONE -ь NOUN: склонность, FEMININE (-ость). unit1.js §3.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT72 = {
  id: "ru-u72",
  lang: "ru",
  title: "Замысел и намерение",
  order: 72,
  stage: "b1",
  lessons: [
    {
      id: "ru-u72l1",
      unit: 72,
      lesson: 1,
      title: "The intention itself",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name what somebody meant to do — an intention, a design conceived, a venture, an initiative — and the incentive or motive behind it.",
      items: [
        { id: "ru-u72l1-namerenie", type: "vocab", front: "намерение", reading: "namerenie", meaning: "an intention", accept: ["what someone means to do", "a settled purpose", "an aim held in mind"], example: { jp: "Его намерение было совсем ясное, хотя говорил он очень осторожно.", en: "His intention was quite clear, although he spoke very carefully." }, drill: { jp: "Это было его главное намерение", en: "That was his main intention" }, hint: "na-ME-ri-ni-ye — five syllables, stress on ME. NEUTER (-е). ⚠️ Цель from unit 25 is the goal itself; намерение is your settled plan to reach it. «С намерением» means deliberately, and «без намерения» accidentally." },
        { id: "ru-u72l1-zamysel", type: "vocab", front: "замысел", reading: "zamysel", meaning: "a design conceived", accept: ["a conception", "the idea behind a work", "what somebody set out to make"], example: { jp: "Замысел был очень смелый, но осуществлять его оказалось гораздо труднее.", en: "The design was very bold, but putting it into effect turned out far harder." }, drill: { jp: "Это был очень смелый замысел", en: "That was a very bold design" }, hint: "ZA-my-sil — stress on the first syllable, with the ы sound from unit 5. MASCULINE. ⚠️ Its stem drops the е: замысла, замыслу. It is за- + мысль from unit 39, and it is the word a critic uses about a book or a building. Its sibling `умысел` was refused as a second card on the same root." },
        { id: "ru-u72l1-zateya", type: "vocab", front: "затея", reading: "zateya", meaning: "a venture", accept: ["a scheme somebody has got up", "an enterprise of one's own", "a bright idea put into action"], example: { jp: "Эта затея была очень странная, и поддерживать её никто не стал.", en: "That venture was very strange, and nobody backed it." }, drill: { jp: "Это была совсем новая затея", en: "That was a quite new venture" }, hint: "za-TE-ya — stress on TE. FEMININE (-я). ⚠️ IT IS SLIGHTLY DISMISSIVE: a затея is somebody's bright idea, and the speaker usually doubts it. Проект from unit 42 is the neutral word." },
        { id: "ru-u72l1-initsiativa", type: "vocab", front: "инициатива", reading: "initsiativa", meaning: "an initiative", accept: ["a move made first", "stepping forward without being asked", "a proposal of one's own"], example: { jp: "Инициатива была совсем его, и поэтому ответственность тоже лежала на нём.", en: "The initiative was entirely his, and so the responsibility lay with him too." }, drill: { jp: "Это была его личная инициатива", en: "That was his personal initiative" }, hint: "i-ni-tsi-a-TI-va — six syllables, stress on TI. FEMININE (-а). ⚠️ Its reading is \"initsiativa\", not the English word, so the short gloss is safe. «По своей инициативе» means off one's own bat." },
        { id: "ru-u72l1-stimul", type: "vocab", front: "стимул", reading: "stimul", meaning: "an incentive", accept: ["a spur to act", "what makes somebody bother", "an inducement"], example: { jp: "Стимул здесь очень простой: тот, кто сделает это первым, получит премию.", en: "The incentive here is very simple: whoever does it first will get a bonus." }, drill: { jp: "Это очень хороший стимул", en: "That is a very good incentive" }, hint: "STI-mul — stress on the first syllable. MASCULINE. ⚠️ Russian does NOT have the English sense of a government stimulus; a стимул is always what makes a PERSON act. Its reading \"stimul\" is not the English word." },
        { id: "ru-u72l1-pobuzhdenie", type: "vocab", front: "побуждение", reading: "pobuzhdenie", meaning: "a motive for acting", accept: ["an impulse", "what moved somebody to do it", "a prompting"], example: { jp: "Побуждение было совсем другое, и понять его можно было только впоследствии.", en: "The motive was quite different, and it could be understood only subsequently." }, drill: { jp: "Это было другое побуждение", en: "That was a different motive" }, hint: "pa-buzh-DE-ni-ye — five syllables, stress on DE. NEUTER (-е). ⚠️ Мотив from unit 52 is the reason a person did something, read off afterwards; побуждение is the inner push felt at the time, and it is the more literary of the two." },
      ],
    },
    {
      id: "ru-u72l2",
      unit: 72,
      lesson: 2,
      title: "Aiming at it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Work towards something — strive for it, count on it, earmark a date, conceive a plan, find your bearings, and make provision for what might happen.",
      items: [
        { id: "ru-u72l2-stremitsya", type: "vocab", front: "стремиться", reading: "stremitsya", meaning: "to strive", accept: ["to aim at something hard", "to press towards a goal", "to aspire"], example: { jp: "Стремиться к такой цели можно долго, но достижение будет очень большое.", en: "One can strive towards such a goal for a long time, but the achievement will be very great." }, drill: { jp: "Нужно стремиться к этой цели", en: "One must strive towards this goal" }, hint: "stri-MIT-sya — stress on MIT. IMPERFECTIVE and REFLEXIVE, and it has no everyday perfective. It takes к + the DATIVE: стремиться к цели. ⚠️ Стараться from unit 35 is trying hard at the task in front of you; стремиться is aimed at something far off." },
        { id: "ru-u72l2-rasschityvat", type: "vocab", front: "рассчитывать", reading: "rasschityvat", meaning: "to count on", accept: ["to rely on", "to reckon on something happening", "to work out a figure"], example: { jp: "Рассчитывать на него не стоит, потому что он сам в трудном положении.", en: "It is not worth counting on him, because he himself is in a difficult position." }, drill: { jp: "Можно рассчитывать на него", en: "One can count on him" }, hint: "ra-SSHCHI-ty-vat — ⚠️ THE ссч IS SAID sh-sh-ch, a genuine mouthful, and the stress falls on it. IMPERFECTIVE; the perfective is рассчитать. It takes на + the ACCUSATIVE for a person. ⚠️ Its noun `расчёт` was refused as a second card on the same root." },
        { id: "ru-u72l2-namechat", type: "vocab", front: "намечать", reading: "namechat", meaning: "to earmark", accept: ["to pencil something in", "to set a date provisionally", "to mark out a plan"], example: { jp: "Намечать сроки заранее очень полезно, даже если потом их придётся менять.", en: "Earmarking deadlines in advance is very useful, even if they later have to be changed." }, drill: { jp: "Нужно намечать сроки заранее", en: "Deadlines must be earmarked in advance" }, hint: "na-mi-CHAT — stress on the last syllable. IMPERFECTIVE; the perfective is наметить. ⚠️ It is deliberately PROVISIONAL: «намеченный срок» is a date pencilled in, not a commitment, which is exactly what распоряжение at unit 71 is not." },
        { id: "ru-u72l2-zadumyvat", type: "vocab", front: "задумывать", reading: "zadumyvat", meaning: "to conceive a plan", accept: ["to think something up", "to plan in one's head", "to have in mind from the start"], example: { jp: "Задумывать такой проект было смело, но денег на него никто не дал.", en: "Conceiving such a project was bold, but nobody gave any money for it." }, drill: { jp: "Трудно задумывать такой проект", en: "It is hard to conceive such a project" }, hint: "za-DU-my-vat — stress on DU. IMPERFECTIVE; the perfective is задумать. It is за- + думать from unit 4. ⚠️ Its reflexive задумываться means to fall into thought, which is a different verb again — and the noun of this one is замысел, in lesson 1." },
        { id: "ru-u72l2-orientirovatsya", type: "vocab", front: "ориентироваться", reading: "orientirovatsya", meaning: "to find your bearings", accept: ["to get your sense of direction", "to know where you stand", "to take your cue from something"], example: { jp: "Здесь трудно ориентироваться без карты, потому что все улицы очень похожи.", en: "It is hard to find your bearings here without a map, because all the streets are very alike." }, drill: { jp: "Трудно ориентироваться в новом городе", en: "It is hard to find your bearings in a new town" }, hint: "a-ri-in-ti-ra-VAT-sya — seven syllables, stress on VAT. IMPERFECTIVE and REFLEXIVE. ⚠️ TWO SENSES: literally finding your way, and figuratively knowing which way to go — «ориентироваться на спрос» means to take your cue from demand." },
        { id: "ru-u72l2-predusmatrivat", type: "vocab", front: "предусматривать", reading: "predusmatrivat", meaning: "to make provision for", accept: ["to allow for in advance", "to build something into a plan", "to provide for a case"], example: { jp: "Договор должен предусматривать и такой случай, потому что спорить потом будет поздно.", en: "The contract must make provision for such a case too, because it will be too late to argue later." }, drill: { jp: "Нужно предусматривать такие случаи", en: "Such cases must be provided for" }, hint: "pri-du-SMAT-ri-vat — five syllables, stress on SMAT. IMPERFECTIVE; the perfective is предусмотреть. ⚠️ Предотвращать at unit 70 stops a thing happening; предусматривать merely plans for it in case it does, and it is the verb every Russian contract uses." },
      ],
    },
    {
      id: "ru-u72l3",
      unit: 72,
      lesson: 3,
      title: "What lies ahead",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what is coming — what lies ahead, a forecast, an agenda, a strategy, tactics — and the application form you put in.",
      items: [
        { id: "ru-u72l3-predstoyat", type: "vocab", front: "предстоять", reading: "predstoyat", meaning: "to lie ahead", accept: ["to be in store", "to be coming up", "to face somebody"], example: { jp: "Нам предстоит трудный год, и готовить людей к этому надо заранее.", en: "A hard year lies ahead of us, and people have to be prepared for it in advance." }, drill: { jp: "Здесь может предстоять трудный спор", en: "A hard argument may lie ahead here" }, hint: "prid-sta-YAT — stress on the last syllable. IMPERFECTIVE, with no perfective. ⚠️ IT TAKES THE DATIVE FOR THE PERSON: «нам предстоит», it lies ahead of us — the thing ahead is the SUBJECT. It is пред- + стоять from unit 57." },
        { id: "ru-u72l3-prognoz", type: "vocab", front: "прогноз", reading: "prognoz", meaning: "a forecast", accept: ["a prediction", "what is expected to happen", "an outlook given in advance"], example: { jp: "Прогноз был совсем плохой, но перспектива оказалась гораздо лучше.", en: "The forecast was quite bad, but the prospect turned out far better." }, drill: { jp: "У нас очень плохой прогноз", en: "We have a very bad forecast" }, hint: "prag-NOZ — stress on the last syllable. MASCULINE. ⚠️ «Прогноз погоды» is the weather forecast and is where every Russian meets the word. Its reading \"prognoz\" is not the English word, so the short gloss is safe." },
        { id: "ru-u72l3-povestka", type: "vocab", front: "повестка", reading: "povestka", meaning: "an agenda", accept: ["the list of items for a meeting", "an official summons", "what is to be discussed"], example: { jp: "Повестка была совсем ясная, но обсуждать стали совсем другое.", en: "The agenda was quite clear, but they began discussing something quite different." }, drill: { jp: "У собрания была ясная повестка", en: "The meeting had a clear agenda" }, hint: "pa-VEST-ka — stress on VEST. FEMININE (-а). ⚠️ TWO SENSES AND BOTH ARE EVERYDAY: «повестка дня» is the agenda of a meeting, and a bare «повестка» is an official summons — from a court or the army." },
        { id: "ru-u72l3-strategiya", type: "vocab", front: "стратегия", reading: "strategiya", meaning: "a strategy", accept: ["a long-range plan", "the overall approach", "how a campaign is to be won"], example: { jp: "Стратегия была совсем новая, и привыкать к ней пришлось всем.", en: "The strategy was quite new, and everyone had to get used to it." }, drill: { jp: "Нужна совсем новая стратегия", en: "A quite new strategy is needed" }, hint: "stra-TE-gi-ya — four syllables, stress on TE, and the г is hard. FEMININE (-я). ⚠️ Its reading is \"strategiya\", not the English word. The contrast with тактика is the next card." },
        { id: "ru-u72l3-taktika", type: "vocab", front: "тактика", reading: "taktika", meaning: "tactics", accept: ["the method used in the moment", "how a particular move is made", "short-range method"], example: { jp: "Тактика была очень простая: затягивать разговор очень долго.", en: "The tactics were very simple: drag the conversation out for a very long time." }, drill: { jp: "Нужна совсем другая тактика", en: "Quite different tactics are needed" }, hint: "TAK-ti-ka — stress on the first syllable. FEMININE (-а), and SINGULAR in Russian where English uses a plural. ⚠️ Стратегия is the whole campaign; тактика is this move. A Russian uses both words about an argument as readily as about a war." },
        { id: "ru-u72l3-zayavka", type: "vocab", front: "заявка", reading: "zayavka", meaning: "an application form submitted", accept: ["a bid put in", "a request filed officially", "an entry submitted"], example: { jp: "Заявка была подписана вчера, но рассматривать её будут только через месяц.", en: "The application was signed yesterday, but it will be considered only in a month." }, drill: { jp: "Моя заявка уже готова", en: "My application is already ready" }, hint: "za-YAV-ka — stress on YAV. FEMININE (-а). ⚠️ Заявление from unit 50 is the LETTER you write asking for something; a заявка is the standard FORM you put in — for a grant, a place, a delivery. The two are not interchangeable in Russian offices." },
      ],
    },
    {
      id: "ru-u72l4",
      unit: 72,
      lesson: 4,
      title: "Inclination and outcome",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe what pulls a person — a leaning, a vocation, a craving, an ambition — and name an achievement or say that something is done for future use.",
      items: [
        { id: "ru-u72l4-sklonnost", type: "vocab", front: "склонность", reading: "sklonnost", meaning: "a leaning towards something", accept: ["a predisposition", "a bent for something", "a tendency in a person"], example: { jp: "У него есть склонность к точным наукам, и это было ясно уже в школе.", en: "He has a leaning towards the exact sciences, and that was already clear at school." }, drill: { jp: "Склонность у него очень сильная", en: "His leaning is very strong" }, hint: "SKLON-nast — stress on the first syllable, and the нн is held longer. FEMININE (-ость). It takes к + the dative. ⚠️ Тенденция at unit 69 is a trend in EVENTS; склонность is a leaning in a PERSON." },
        { id: "ru-u72l4-prizvanie", type: "vocab", front: "призвание", reading: "prizvanie", meaning: "a vocation", accept: ["a calling", "the work somebody was made for", "a life's purpose"], example: { jp: "Это было его настоящее призвание, хотя зарабатывал он очень мало.", en: "That was his true vocation, although he earned very little." }, drill: { jp: "Это настоящее призвание для него", en: "That is a true vocation for him" }, hint: "priz-VA-ni-ye — four syllables, stress on VA. NEUTER (-е). It is built on звать from unit 8 — you are CALLED to it. ⚠️ Профессия from unit 8 is the job you do; призвание is the one you were made for, and Russian keeps the two sharply apart." },
        { id: "ru-u72l4-tyaga", type: "vocab", front: "тяга", reading: "tyaga", meaning: "a craving", accept: ["a pull towards something", "a strong urge", "an appetite for a thing"], example: { jp: "Тяга к музыке была у неё всегда, и бороться с ней было нельзя.", en: "She always had a craving for music, and it was impossible to fight it." }, drill: { jp: "Тяга к музыке была сильная", en: "The craving for music was strong" }, hint: "TYA-ga — stress on the first syllable. FEMININE (-а). It is the noun of тянуть from unit 57, to pull. ⚠️ Склонность is a quiet leaning you may not act on; тяга pulls you. In engineering it also means traction or draught." },
        { id: "ru-u72l4-ambitsiya", type: "vocab", front: "амбиция", reading: "ambitsiya", meaning: "an ambition", accept: ["a desire to rise", "a claim to something higher", "a wish for standing"], example: { jp: "Амбиция у него очень большая, но терпения для этого вряд ли хватит.", en: "His ambition is very great, but he will hardly have the patience for it." }, drill: { jp: "У него очень большая амбиция", en: "He has a very great ambition" }, hint: "am-BI-tsi-ya — four syllables, stress on BI. FEMININE (-я). ⚠️ IN RUSSIAN IT LEANS NEGATIVE, unlike in English: «амбиции» often means pretensions, and «человек с амбициями» is not always a compliment. Its reading \"ambitsiya\" is not the English word." },
        { id: "ru-u72l4-dostizhenie", type: "vocab", front: "достижение", reading: "dostizhenie", meaning: "an achievement", accept: ["something accomplished", "a result you can be proud of", "an attainment"], example: { jp: "Это было большое достижение, хотя говорить о нём он не любил.", en: "That was a great achievement, although he did not like speaking about it." }, drill: { jp: "Это очень большое достижение", en: "That is a very great achievement" }, hint: "das-ti-ZHE-ni-ye — five syllables, stress on ZHE. NEUTER (-е). ⚠️ Успех from unit 25 is success in general; достижение is one named thing you achieved. Добиваться from unit 47 is its verb, and the two are used together." },
        { id: "ru-u72l4-vprok", type: "vocab", front: "впрок", reading: "vprok", meaning: "for future use", accept: ["against a future need", "laid by for later", "in reserve"], example: { jp: "Он покупает продукты впрок, потому что ходить в магазин каждый день не любит.", en: "He buys groceries for future use, because he does not like going to the shop every day." }, drill: { jp: "Он покупает хлеб впрок", en: "He buys bread for future use" }, hint: "VPROK — one syllable. ⚠️ It is an ADVERB, never an adjective: «заготовить впрок» is to lay in a store. ⚠️ And it has a second idiom worth knowing: «это ему не впрок» means it did him no good." },
      ],
    },
  ],
};
