// RU Unit 38 — Время и сроки ("Time and deadlines") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Conventions: ru/unit1.js §1–§10 and §A–§D, plus ru/unit31.js §1–§7 for the A2
// band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Time and adverbs" AND A1 WROTE IT THREE TIMES OVER —
// u11 Числа и время (час · минута · секунда · время · половина · рано · поздно ·
// долго · всегда), u17 Дни и месяцы (all seven days, all twelve months, неделя ·
// завтра · вчера · выходной) and u22's frequency set (никогда · иногда · обычно ·
// редко · опять · сразу). Rethemed to TIME EXPRESSED THROUGH CASE, which was the
// measured hole: a learner had every time WORD in the language and no way to say
// WHEN. unit31.js §6 has the table.
//
// WHAT THE UNIT ACTUALLY TEACHES, and it is in the canDos and hints rather than in
// the fronts, because every one of these patterns is built from words A1 taught:
//     в + ACCUSATIVE      a day or a clock time — в понедельник, в три часа
//     в + PREPOSITIONAL   a month or a year — в январе, в этом веке
//     на + ACCUSATIVE     how long you intend something for — на неделю
//     через + ACCUSATIVE  after an interval — через час
//     за + ACCUSATIVE     within an interval — за два часа
//     BARE INSTRUMENTAL   утром, вечером, зимой (unit 32, and no card — §3)
//     в течение + GEN     during, across a stretch — в течение недели (l4)
//
// ★ A REFINEMENT TO THE не- RULE, and blocks 2 and 3 are bound by it. u33's header
//   refused `недалеко` beside u14 `далеко` on the ground that the taught member is
//   the BASE, so the derived form gives the learner nothing. Applying that to every
//   prefix would have cost this unit four good cards, so here is the line:
//     не- PREFIXED ON A TAUGHT WORD IS REFUSED, because не+X is simply not-X and
//     any learner can build it. So `недавно` (vs u24 давно) and `немедленно` (vs
//     u36 медленно, which this very block carded) are NOT carded.
//     ANY OTHER PREFIX IS ALLOWED when it changes the word's category or its
//     sense. So `навсегда` IS carded beside u11 всегда — всегда is «always», how
//     OFTEN; навсегда is «for ever», for how LONG, and knowing one does not give
//     you the other. Same for `вовремя` (from время) and `впервые` (from первый),
//     where a noun and an ordinal become adverbs.
//   `вскоре` was refused as a marginal case rather than argued for: в+скоре is
//   close enough to u7 скоро that the gain is small.
//
// ⚠️ ALSO REFUSED, so a later block does not re-derive it:
//   `позже` · `раньше` · `дальше` — ALL THREE ARE COMPARATIVES of поздно, рано and
//        далеко, which A1 carded at u11l4 and u14l3. A comparative is an inflected
//        form, so unit1.js §5 forbids the card outright — and comparison itself is
//        block 2's u47. This one is worth flagging because all three read as free
//        fronts and all three look like ordinary adverbs.
//   `ежедневно` (vs u3 день) · `детство` (vs u10 ребёнок, whose plural дети is the
//        same root) · `молодость` and `старость` (vs u19 молодой and старый) ·
//        `ожидание` (vs u14 ждать) · `тишина` (vs u5 тихо AND u29 тихий — three on
//        one root is too many) · `слух` (vs u4 слышать).
//   MEASURED FREE AND LEFT FOR BLOCK 2: `юность` is carded here, but `вечность` ·
//        `промежуток` · `пауза` · `опоздание` · `регулярно` are not, and were free
//        on 2026-09-29.
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT — A1's time vocabulary is dense, so most cards
// needed checking:
//   `момент` takes "an instant", NOT "a moment" — that would normalise onto its own
//        reading "moment" and hand the learner the answer (§9 free pass). u11
//        секунда also carries "a moment" in its accept list.
//   `период` takes "a stretch of time" for the same free-pass reason.
//   `внезапно` takes "abruptly" — u24 вдруг is already "suddenly".
//   `снова` takes "all over again" — u22 опять is "again".
//   `затем` takes "next after that" — u4 потом is "later", u24 тогда is "at that
//        time", u24 сначала is "at first". Four sequence words, four prompts.
//   `теперь` takes "nowadays" — u4 сейчас is "now", and the hint spells out the
//        difference rather than leaving the learner to guess it.
//   `течение` takes "a current"; `задержка` "a delay"; `будни` "weekdays" against
//        u17 выходной "a day off".
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT38 = {
  id: "ru-u38",
  lang: "ru",
  title: "Время и сроки",
  order: 38,
  stage: "a2",
  lessons: [
    {
      id: "ru-u38l1",
      unit: 38,
      lesson: 1,
      title: "Points in time",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name a point or a span of time — an instant, a deadline, a century — and put it after в in the case the phrase needs.",
      items: [
        { id: "ru-u38l1-moment", type: "vocab", front: "момент", reading: "moment", meaning: "an instant", accept: ["a moment", "the point in time", "a split second"], example: { jp: "В этот момент я понял всё.", en: "At that instant I understood everything." }, drill: { jp: "Это был очень важный момент", en: "That was a very important instant" }, hint: "ma-MENT — stress on the last syllable. Masculine. ★ «В этот момент» — в plus the ACCUSATIVE, the pattern for a point in time. секунда from unit 11 is the measured second; this is the moment something happened." },
        { id: "ru-u38l1-srok", type: "vocab", front: "срок", reading: "srok", meaning: "a deadline", accept: ["a time limit", "a fixed term", "a due date"], example: { jp: "Срок этой работы уже близко.", en: "The deadline for this work is already close." }, drill: { jp: "Какой срок у этой работы", en: "What is the deadline for this work" }, hint: "One syllable, SROK. Masculine. A deadline or a fixed term. «В срок» is on time and «до срока» is ahead of it — both built with the prepositions from unit 33." },
        { id: "ru-u38l1-period", type: "vocab", front: "период", reading: "period", meaning: "a stretch of time", accept: ["a period", "a spell", "a phase"], example: { jp: "Это был трудный период в моей жизни.", en: "That was a hard stretch of time in my life." }, drill: { jp: "Это был хороший период", en: "That was a good stretch of time" }, hint: "pe-ri-OT — stress on the last syllable, and the final д says t. Masculine. A stretch of time with a shape to it — where момент is a single point and век is a hundred years." },
        { id: "ru-u38l1-vek", type: "vocab", front: "век", reading: "vek", meaning: "a century", accept: ["a hundred years", "the century", "a lifetime"], example: { jp: "Этот музей работает уже целый век.", en: "This museum has been open for a whole century." }, drill: { jp: "Здесь работали целый век", en: "They worked here for a whole century" }, hint: "One syllable, VEK. Masculine. A hundred years. ★ «В нашем веке» — in our century — is в plus the PREPOSITIONAL, which is the pattern for the longer spans." },
        { id: "ru-u38l1-epokha", type: "vocab", front: "эпоха", reading: "epokha", meaning: "an era", accept: ["an epoch", "a historical period", "the times"], example: { jp: "Это была очень трудная эпоха.", en: "That was a very difficult era." }, drill: { jp: "Это была новая эпоха", en: "That was a new era" }, hint: "e-PO-kha — stress on PO. Feminine (-а). A whole era, longer and vaguer than век, used for periods that have a character of their own. ⚠️ Not «an age» in the sense of how old a person is — that is возраст from unit 8." },
        { id: "ru-u38l1-polden", type: "vocab", front: "полдень", reading: "polden", meaning: "midday", accept: ["noon", "twelve o'clock", "midday itself"], example: { jp: "В полдень здесь очень жарко.", en: "At midday it is very hot here." }, drill: { jp: "В полдень мы идём домой", en: "At midday we go home" }, hint: "POL-den — stress on the first syllable. MASCULINE, even though it ends in -ь, because день is. ⚠️ Its genitive is полудня, with a у appearing in the middle from nowhere — one of Russian's odder nouns." },
      ],
    },
    {
      id: "ru-u38l2",
      unit: 38,
      lesson: 2,
      title: "Now, once, and for ever",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Set a story in time — what is true now as against before, what happened once, and what changed for good.",
      items: [
        { id: "ru-u38l2-teper", type: "vocab", front: "теперь", reading: "teper", meaning: "nowadays", accept: ["now as opposed to before", "these days", "by now"], example: { jp: "Теперь я работаю в новой фирме.", en: "Nowadays I work at a new firm." }, drill: { jp: "Теперь она живёт здесь", en: "Nowadays she lives here" }, hint: "te-PER — stress on the last syllable. ★ NOT the same as сейчас from unit 4. сейчас is «at this exact moment»; теперь is «now, as against before». «Сейчас я занят» = I am busy right now. «Теперь я знаю» = now I know, which I did not before." },
        { id: "ru-u38l2-vpervye", type: "vocab", front: "впервые", reading: "vpervye", meaning: "for the first time", accept: ["first time ever", "never before now", "initially"], example: { jp: "Я впервые вижу этот город.", en: "I am seeing this town for the first time." }, drill: { jp: "Он впервые едет на поезде", en: "He is travelling by train for the first time" }, hint: "vper-VY-ye — stress on VY. For the first time ever. Built on первый, «first», from unit 21 — the в- and the -ые together turn an ordinal into an adverb." },
        { id: "ru-u38l2-odnazhdy", type: "vocab", front: "однажды", reading: "odnazhdy", meaning: "once upon a time", accept: ["once", "one day in the past", "on one occasion"], example: { jp: "Однажды я встретил его в парке.", en: "Once I met him in the park." }, drill: { jp: "Однажды мы были в театре", en: "Once we were at the theatre" }, hint: "ad-NAZH-dy — stress on NAZH. Once, on one occasion in the past — and it is how every Russian fairy tale opens. Built on один from unit 11." },
        { id: "ru-u38l2-vnezapno", type: "vocab", front: "внезапно", reading: "vnezapno", meaning: "abruptly", accept: ["suddenly", "without warning", "all at once"], example: { jp: "Погода внезапно стала холодной.", en: "The weather abruptly turned cold." }, drill: { jp: "Всё внезапно стало плохо", en: "Everything abruptly became bad" }, hint: "vne-ZAP-na — stress on ZAP. Abruptly, with no warning. вдруг from unit 24 is the everyday «suddenly»; внезапно is a shade more formal and belongs to writing." },
        { id: "ru-u38l2-navsegda", type: "vocab", front: "навсегда", reading: "navsegda", meaning: "for ever", accept: ["permanently", "for good", "once and for all"], example: { jp: "Я хочу остаться здесь навсегда.", en: "I want to stay here for ever." }, drill: { jp: "Она хочет вернуться навсегда", en: "She wants to come back for good" }, hint: "nav-seg-DA — stress on the last syllable. For ever, permanently. ⚠️ Built on всегда from unit 11 but NOT the same word: всегда is «always», how often; навсегда is «for ever», for how long." },
        { id: "ru-u38l2-prezhde", type: "vocab", front: "прежде", reading: "prezhde", meaning: "formerly", accept: ["before now", "in the past", "previously"], example: { jp: "Прежде я работал в другом городе.", en: "Formerly I worked in another town." }, drill: { jp: "Прежде здесь была школа", en: "Formerly there was a school here" }, hint: "PREZH-de — stress on the first syllable. Formerly, before now — the exact mirror of теперь. It doubles as a preposition with the genitive: «прежде всего», first of all." },
      ],
    },
    {
      id: "ru-u38l3",
      unit: 38,
      lesson: 3,
      title: "In order, and on time",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put events in order and say whether something happened gradually, in advance, on time, or over and over.",
      items: [
        { id: "ru-u38l3-zatem", type: "vocab", front: "затем", reading: "zatem", meaning: "next after that", accept: ["then", "after that", "subsequently"], example: { jp: "Сначала мы работаем, затем мы идём домой.", en: "First we work, then we go home." }, drill: { jp: "Затем он идёт в магазин", en: "Then he goes to the shop" }, hint: "za-TEM — stress on the last syllable. Next in a sequence. потом from unit 4 is the everyday «later»; затем is «next» when you are listing steps in order." },
        { id: "ru-u38l3-postepenno", type: "vocab", front: "постепенно", reading: "postepenno", meaning: "gradually", accept: ["little by little", "bit by bit", "step by step"], example: { jp: "Постепенно я понял все эти слова.", en: "Gradually I understood all these words." }, drill: { jp: "Погода постепенно стала тёплой", en: "The weather gradually turned warm" }, hint: "pa-ste-PEN-na — stress on PEN. Step by step, little by little. Its root is ступень, a stair — the same picture as шаг за шагом from unit 36." },
        { id: "ru-u38l3-snova", type: "vocab", front: "снова", reading: "snova", meaning: "all over again", accept: ["again", "afresh", "from the start again"], example: { jp: "Он снова хочет читать эту книгу.", en: "He wants to read this book all over again." }, drill: { jp: "Она снова работает здесь", en: "She is working here again" }, hint: "SNO-va — stress on the first syllable. Again, from the beginning. опять from unit 22 is the everyday «again», often with a note of exasperation; снова is neutral and means «afresh»." },
        { id: "ru-u38l3-zaranee", type: "vocab", front: "заранее", reading: "zaranee", meaning: "in advance", accept: ["ahead of time", "beforehand", "early on"], example: { jp: "Мы хотим купить билеты заранее.", en: "We want to buy the tickets in advance." }, drill: { jp: "Я хочу заранее купить билеты", en: "I want to buy the tickets in advance" }, hint: "za-RA-ne-ye — stress on RA. Ahead of time. «Спасибо заранее» — thanks in advance — closes a great many Russian emails." },
        { id: "ru-u38l3-vovremya", type: "vocab", front: "вовремя", reading: "vovremya", meaning: "on time", accept: ["punctually", "at the right time", "not late"], example: { jp: "Этот автобус никогда не идёт вовремя.", en: "This bus never runs on time." }, drill: { jp: "Он хочет быть здесь вовремя", en: "He wants to be here on time" }, hint: "VO-vre-mya — stress on the FIRST syllable, and it is written as ONE word. Neither early nor late. ⚠️ Written as two words, во время, it means «during» and takes the genitive — a completely different thing." },
        { id: "ru-u38l3-postoyanno", type: "vocab", front: "постоянно", reading: "postoyanno", meaning: "constantly", accept: ["all the time", "without a break", "non-stop"], example: { jp: "Он постоянно звонит мне вечером.", en: "He constantly rings me in the evening." }, drill: { jp: "Она постоянно работает дома", en: "She constantly works at home" }, hint: "pa-sta-YAN-na — stress on YAN. Constantly, with no break — stronger than всегда, which only says «every time». Its root is стоять, to stand, so it is literally «standingly»." },
      ],
    },
    {
      id: "ru-u38l4",
      unit: 38,
      lesson: 4,
      title: "Stretches of time",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a span rather than a point — a full day and night, the working week, the years of being young — and use в течение for «during».",
      items: [
        { id: "ru-u38l4-techenie", type: "vocab", front: "течение", reading: "techenie", meaning: "a current", accept: ["a flow", "the stream", "a course"], example: { jp: "Течение этой реки очень быстрое.", en: "The current of this river is very fast." }, drill: { jp: "Течение здесь очень быстрое", en: "The current here is very fast" }, hint: "te-CHE-ni-ye — stress on CHE. Neuter (-ие). The current in a river. ★ AND ITS OTHER LIFE: «в течение» plus the GENITIVE is how Russian says «during» — в течение недели, in the course of the week." },
        { id: "ru-u38l4-sutki", type: "vocab", front: "сутки", reading: "sutki", meaning: "a full day and night", accept: ["twenty-four hours", "a round of the clock", "a whole day"], example: { jp: "Мы работали целые сутки.", en: "We worked for a whole day and night." }, drill: { jp: "Это были очень трудные сутки", en: "That was a very hard day and night" }, hint: "SUT-ki — stress on the first syllable. ★ PLURAL ONLY — there is no singular сутка. One full twenty-four hours, day and night together, which Russian counts as a single thing and English has no word for." },
        { id: "ru-u38l4-budni", type: "vocab", front: "будни", reading: "budni", meaning: "weekdays", accept: ["the working week", "working days", "everyday life"], example: { jp: "В будни я работаю, в выходной отдыхаю.", en: "On weekdays I work, on my day off I rest." }, drill: { jp: "В будни я работаю дома", en: "On weekdays I work at home" }, hint: "BUD-ni — stress on the first syllable. ★ PLURAL ONLY, like сутки. The working days of the week, set against выходной from unit 17, the day off." },
        { id: "ru-u38l4-polnoch", type: "vocab", front: "полночь", reading: "polnoch", meaning: "midnight", accept: ["twelve at night", "the middle of the night", "midnight itself"], example: { jp: "В полночь этот магазин уже закрыт.", en: "At midnight this shop is already shut." }, drill: { jp: "В полночь здесь очень тихо", en: "At midnight it is very quiet here" }, hint: "POL-nach — stress on the first syllable, and the final ч is soft. ⚠️ FEMININE, because ночь is — while полдень is masculine because день is. The pair takes its gender from its second half." },
        { id: "ru-u38l4-yunost", type: "vocab", front: "юность", reading: "yunost", meaning: "youth", accept: ["the years of being young", "early life", "adolescence"], example: { jp: "В юности он работал в этом городе.", en: "In his youth he worked in this town." }, drill: { jp: "Юность очень быстрое время", en: "Youth is a very fast time" }, hint: "YU-nast — stress on the first syllable. FEMININE — another -ость noun, and every one of those is. ⚠️ It is NOT built from молодой in unit 19: юн- and молод- are two different roots for the same idea." },
        { id: "ru-u38l4-zaderzhka", type: "vocab", front: "задержка", reading: "zaderzhka", meaning: "a delay", accept: ["a hold-up", "a wait", "a setback"], example: { jp: "Задержка этого поезда очень большая.", en: "This train's delay is very long." }, drill: { jp: "Здесь была большая задержка", en: "There was a big delay here" }, hint: "za-DERZH-ka — stress on DERZH. Feminine (-а). A hold-up — of a train, a payment or a decision. Its root держать, to hold, is not taught in this course, so learn this one whole." },
      ],
    },
  ],
};
