// RU Unit 62 — Из-за и благодаря ("Because of and thanks to") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 1 (u61–u73). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, and THIS BAND's conventions in ru/unit61.js §1–§8.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Cause and consequence` AND A2 ALREADY SPENT THE
// NOUNS. u52 Причина и вывод is 24 cards of exactly that field: довод ·
// следствие · основа · принцип · источник · влияние · задача · метод · система ·
// необходимость · логика · вызывать · приводить · представлять · существовать ·
// происходить · наблюдать · мотив · совпадение · вариант · обстоятельство ·
// противоречие · например. Re-theming the slot to "cause" would have rebuilt it.
//
// THE MEASURED HOLE, and it is a grammatical one. A1 and A2 between them carded
// TWENTY-THREE PLAIN PREPOSITIONS — в · на · у · с · к · о · по · за · над · под ·
// перед · между · из · от · до · без · для · около · кроме · вместо · среди ·
// мимо · вдоль · напротив · после · возле · про · при · против · через — and
// ZERO DERIVED ONES. So a learner could say where a thing was and could not say
// what it was because of, in spite of, for the sake of, by means of or regarding.
// That is the layer this unit teaches: cause and consequence expressed by
// GOVERNMENT rather than by a noun.
//
// ★ CASE GOVERNMENT IS THE WHOLE TEACHING HERE, so every card's hint names the
//   case its preposition takes. The band's three awkward ones:
//     GENITIVE      из-за · вследствие · ввиду · ради · насчёт · относительно ·
//                   вроде · наподобие · посредством
//     DATIVE        благодаря · вопреки      ← the two that surprise everyone
//     ACCUSATIVE    несмотря на
//     INSTRUMENTAL  путём takes the GENITIVE despite being an instrumental form
//   ⚠️ `благодаря` and `вопреки` taking the DATIVE is the single most-corrected
//   mistake a B1 learner makes, which is why both hints say it twice.
//
// ⚠️ `путём` IS NOT A §3 VIOLATION. unit31.js §3 refused утром · вечером · летом
//   and five more because each is the bare instrumental of a noun A1 TAUGHT. путь
//   is taught NOWHERE in Russian (путешествие u30 · переход u36 · маршрут u36 ·
//   дорога u4 are the whole field), so путём has no taught parent to duplicate
//   and is carded as the preposition it has become.
//
// ⚠️ REFUSED IN THIS UNIT, and each cost a card:
//   `согласно` "according to" — §D against `согласен`, which this block cards one
//        unit earlier at u61l1, AND against `соглашаться` (u35). Two taught
//        relatives is not a close call.
//   `способствовать` (способ u32 · способность u47) · `основание` (основа u52) ·
//   `закономерный` (закон u51) · `случайный` (случай u24 · случайно u59) ·
//   `влиять` (влияние u52) · `последствие` (следствие u52) — all §D.
//   `обусловить` — refused on unit31.js §1(c) and not on §D: it is a PERFECTIVE
//        with no natural imperfective partner a learner would meet, and no second
//        English verb separates it from "to cause", which u52 already glosses.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT62 = {
  id: "ru-u62",
  lang: "ru",
  title: "Из-за и благодаря",
  order: 62,
  stage: "b1",
  lessons: [
    {
      id: "ru-u62l1",
      unit: 62,
      lesson: 1,
      title: "Naming the cause",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what something happened because of — blaming it with из-за, crediting it with благодаря, and naming the occasion or the impetus behind it.",
      items: [
        { id: "ru-u62l1-izza", type: "vocab", front: "из-за", reading: "izza", meaning: "because of", accept: ["on account of", "owing to", "through the fault of"], example: { jp: "Мы не ездили на море из-за плохой погоды, хотя билеты были уже у нас.", en: "We did not travel to the sea because of the bad weather, although we already had the tickets." }, drill: { jp: "Из-за дождя мы остались дома", en: "Because of the rain we stayed at home" }, hint: "IZ-za — stress on the first syllable, written with a hyphen. It takes the GENITIVE: из-за погоды. ⚠️ It is the BLAMING one: the cause is something you would rather had not happened. For a good cause Russian uses благодаря." },
        { id: "ru-u62l1-blagodarya", type: "vocab", front: "благодаря", reading: "blagodarya", meaning: "thanks to", accept: ["by virtue of", "because of something good", "as a result of someone's help"], example: { jp: "Благодаря его совету мы решили задачу гораздо быстрее, чем думали.", en: "Thanks to his advice we solved the task far more quickly than we thought." }, drill: { jp: "Благодаря ему всё получилось", en: "Thanks to him it all worked out" }, hint: "bla-ga-da-RYA — four syllables, stress on the last. ⚠️ IT TAKES THE DATIVE, not the genitive: благодаря ему, благодаря совету, благодаря работе. That is the single most-corrected mistake at this level. It is the CREDITING partner of из-за." },
        { id: "ru-u62l1-vsledstvie", type: "vocab", front: "вследствие", reading: "vsledstvie", meaning: "as a result of", accept: ["in consequence of", "following on from", "as an outcome of"], example: { jp: "Вследствие нового закона фирмы должны менять документы, и это очень трудно.", en: "As a result of the new law firms have to change documents, and that is very hard." }, drill: { jp: "Вследствие ошибки мы потеряли деньги", en: "As a result of a mistake we lost money" }, hint: "VSLED-stvi-ye — stress on the first syllable. It takes the GENITIVE. ⚠️ FORMAL and written: it belongs in a report, where из-за would belong in a conversation. It is built on следствие from unit 52, which is the noun." },
        { id: "ru-u62l1-vvidu", type: "vocab", front: "ввиду", reading: "vvidu", meaning: "in view of", accept: ["given something", "on the grounds of", "seeing as"], example: { jp: "Ввиду того что денег мало, собрание нужно откладывать.", en: "In view of the fact that money is short, the meeting has to be postponed." }, drill: { jp: "Ввиду болезни он остался дома", en: "In view of his illness he stayed at home" }, hint: "vvi-DU — stress on the last syllable, written as ONE word. It takes the GENITIVE. ⚠️ Its everyday shape is «ввиду того что» + a whole clause, which is how a Russian report opens a reason." },
        { id: "ru-u62l1-povod", type: "vocab", front: "повод", reading: "povod", meaning: "an occasion for something", accept: ["a pretext", "grounds for doing something", "a reason to act"], example: { jp: "Это не причина, а только повод: настоящая причина была совсем другая.", en: "That is not the reason but only a pretext: the real reason was quite different." }, drill: { jp: "Это был хороший повод", en: "That was a good occasion" }, hint: "PO-vad — stress on the first syllable. MASCULINE. ⚠️ THE CONTRAST IS THE CARD: причина from unit 34 is why a thing really happened; повод is what you give as the reason. «Повод для разговора» is an opening." },
        { id: "ru-u62l1-tolchok", type: "vocab", front: "толчок", reading: "tolchok", meaning: "an impetus", accept: ["a push that starts something", "a nudge", "a jolt"], example: { jp: "Его замечание дало толчок разговору, хотя сказал он очень мало.", en: "His remark gave an impetus to the whole conversation, although he said very little." }, drill: { jp: "Это был первый толчок", en: "That was the first impetus" }, hint: "tal-CHOK — stress on the last syllable, and the о in the first syllable reduces to a. MASCULINE. ⚠️ Its stem drops the о when it inflects: толчка, толчку. Both senses work: a physical shove and the thing that starts a process." },
      ],
    },
    {
      id: "ru-u62l2",
      unit: 62,
      lesson: 2,
      title: "In spite of it, and for its sake",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Concede a cause and act anyway — in spite of, contrary to, all the same — say what you did something for the sake of, justify it, and call an outcome unavoidable.",
      items: [
        { id: "ru-u62l2-nesmotryana", type: "vocab", front: "несмотря на", reading: "nesmotryana", meaning: "in spite of", accept: ["despite", "regardless of", "even with"], example: { jp: "Несмотря на дождь, мы всё-таки гуляли в парке, потому что другого дня у нас не было.", en: "In spite of the rain we walked in the park all the same, because we had no other day." }, drill: { jp: "Несмотря на дождь мы гуляли", en: "In spite of the rain we went walking" }, hint: "ni-sma-TRYA na — stress on TRYA, written as TWO words, and на is part of the preposition. ⚠️ IT TAKES THE ACCUSATIVE, which no other preposition in this unit does: несмотря на дождь, несмотря на это. Хотя from unit 46 does the same job with a whole clause." },
        { id: "ru-u62l2-vopreki", type: "vocab", front: "вопреки", reading: "vopreki", meaning: "contrary to", accept: ["against someone's wishes", "in defiance of", "in the teeth of"], example: { jp: "Вопреки совету врача он вернулся на работу через два дня.", en: "Contrary to the doctor's advice he went back to work after two days." }, drill: { jp: "Вопреки совету он остался", en: "Contrary to the advice he stayed" }, hint: "va-pri-KI — stress on the last syllable. ⚠️ IT TAKES THE DATIVE, like благодаря: вопреки совету, вопреки правилу. Stronger than несмотря на — вопреки means somebody wanted the opposite." },
        { id: "ru-u62l2-vsyotaki", type: "vocab", front: "всё-таки", reading: "vsyotaki", meaning: "even so", accept: ["after everything", "in spite of that", "despite it all"], example: { jp: "Он долго не соглашался, но всё-таки подписал договор в пятницу.", en: "He would not agree for a long time, but all the same he signed the contract on Friday." }, drill: { jp: "Он всё-таки был прав", en: "He was right all the same" }, hint: "VSYO-ta-ki — stress on the first syllable, hyphenated, and the ё is written as unit 1 §7 requires. ⚠️ Однако from unit 46 opens a sentence; всё-таки sits INSIDE one, right before the thing that happened anyway." },
        { id: "ru-u62l2-radi", type: "vocab", front: "ради", reading: "radi", meaning: "for somebody's sake", accept: ["in order to help someone", "out of concern for", "for the benefit of"], example: { jp: "Она оставила хорошую работу ради детей, и никогда об этом не говорила.", en: "She left a good job for the sake of her children, and never spoke about it." }, drill: { jp: "Он сделал это ради детей", en: "He did it for the sake of the children" }, hint: "RA-di — stress on the first syllable. It takes the GENITIVE. ⚠️ Для from unit 33 means for, as in intended for; ради means for the sake of, with a cost to you. «Ради бога» is the everyday exclamation." },
        { id: "ru-u62l2-opravdyvat", type: "vocab", front: "оправдывать", reading: "opravdyvat", meaning: "to justify", accept: ["to excuse something", "to defend an action", "to make something look right"], example: { jp: "Он старается оправдывать ошибки обстоятельствами, но никто ему не верит.", en: "He tries to justify his mistakes by circumstances, but nobody believes him." }, drill: { jp: "Нельзя оправдывать такой поступок", en: "You cannot justify such a deed" }, hint: "a-PRAV-dy-vat — stress on PRAV. IMPERFECTIVE; the perfective is оправдать. ⚠️ In a court it means to acquit, which is the opposite of осуждать from unit 61." },
        { id: "ru-u62l2-neizbezhnyy", type: "vocab", front: "неизбежный", reading: "neizbezhnyy", meaning: "unavoidable", accept: ["inevitable", "bound to happen", "impossible to escape"], example: { jp: "Такой вывод был неизбежный, хотя никто не хотел его слышать.", en: "Such a conclusion was unavoidable, although nobody wanted to hear it." }, drill: { jp: "Это был неизбежный результат", en: "That was an unavoidable result" }, hint: "ni-iz-BEZH-nyy — four syllables, stress on BEZH. ⚠️ It LOOKS like не + a taught word and is not: избежный does not exist on its own, so unit 61 §5(d)'s не+X bar does not apply. The verb behind it is избежать, to avoid." },
      ],
    },
    {
      id: "ru-u62l3",
      unit: 62,
      lesson: 3,
      title: "Drawing the consequence",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Draw a conclusion from a cause — it follows that, to give rise to, to come down to — and say what accompanies it, what it rests on, and when the link is only indirect.",
      items: [
        { id: "ru-u62l3-sledovatelno", type: "vocab", front: "следовательно", reading: "sledovatelno", meaning: "it follows that", accept: ["therefore", "consequently", "hence"], example: { jp: "Денег нет, следовательно, проект нужно откладывать.", en: "There is no money; it follows that the project has to be postponed." }, drill: { jp: "Следовательно он был прав", en: "It follows that he was right" }, hint: "sli-da-VA-til-na — five syllables, stress on VA. ⚠️ Поэтому from unit 19 is the everyday word; следовательно is what you write in an argument, and it is set off by commas on both sides." },
        { id: "ru-u62l3-porozhdat", type: "vocab", front: "порождать", reading: "porozhdat", meaning: "to breed something", accept: ["to generate", "to keep producing", "to be the source of"], example: { jp: "Такой закон будет порождать новые проблемы, потому что он слишком общий.", en: "Such a law will give rise to new problems, because it is too general." }, drill: { jp: "Такой закон может порождать проблемы", en: "Such a law may give rise to problems" }, hint: "pa-razh-DAT — stress on the last syllable, and both о reduce. IMPERFECTIVE; the perfective is породить. ⚠️ Вызывать from unit 52 is the neutral to cause; порождать says the cause keeps producing the effect." },
        { id: "ru-u62l3-svoditsya", type: "vocab", front: "сводиться", reading: "svoditsya", meaning: "to come down to", accept: ["to amount to", "to boil down to", "to reduce to one thing"], example: { jp: "Весь спор сводится к одному вопросу: кто будет за это платить.", en: "The whole argument comes down to one question: who is going to pay for it." }, drill: { jp: "Всё может сводиться к деньгам", en: "Everything may come down to money" }, hint: "sva-DIT-sya — stress on DIT. IMPERFECTIVE and REFLEXIVE. It takes к + the DATIVE for what the thing comes down to: сводиться к вопросу." },
        { id: "ru-u62l3-soprovozhdat", type: "vocab", front: "сопровождать", reading: "soprovozhdat", meaning: "to accompany", accept: ["to go along with", "to come with something", "to escort"], example: { jp: "Высокую температуру часто сопровождает кашель, и это ещё не значит, что болезнь серьёзная.", en: "A high temperature is often accompanied by a cough, and that still does not mean the illness is serious." }, drill: { jp: "Он будет сопровождать гостей", en: "He will accompany the guests" }, hint: "sa-pra-vazh-DAT — four syllables, stress on the last. IMPERFECTIVE; the perfective is сопроводить. ⚠️ It works for a person you go with AND for one thing that regularly comes with another, which is the sense this lesson needs." },
        { id: "ru-u62l3-opiratsya", type: "vocab", front: "опираться", reading: "opiratsya", meaning: "to rest on something", accept: ["to be based on", "to lean on", "to build an argument on"], example: { jp: "Его вывод опирается на один факт, и этого слишком мало.", en: "His conclusion rests on a single fact, and that is far too little." }, drill: { jp: "Нужно опираться на факты", en: "One must rest on the facts" }, hint: "a-pi-RAT-sya — stress on RAT. IMPERFECTIVE and REFLEXIVE; the perfective is опереться. It takes на + the ACCUSATIVE: опираться на факты. Both the physical sense and the sense of an argument." },
        { id: "ru-u62l3-kosvennyy", type: "vocab", front: "косвенный", reading: "kosvennyy", meaning: "indirect", accept: ["roundabout", "not direct", "at one remove"], example: { jp: "У нас есть только косвенное доказательство, поэтому обвинять его пока нельзя.", en: "We have only indirect proof, so he cannot be accused yet." }, drill: { jp: "Это только косвенный довод", en: "That is only an indirect point" }, hint: "KOS-vin-nyy — stress on the first syllable, and the нн is held longer. ⚠️ Прямой from unit 23 is its opposite. In grammar «косвенные падежи» means every case except the nominative, which is how a Russian textbook names them." },
      ],
    },
    {
      id: "ru-u62l4",
      unit: 62,
      lesson: 4,
      title: "By what means, and about what",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say by what means something was done — путём, посредством — and what a remark is about or like: regarding, with regard to, sort of, in the manner of.",
      items: [
        { id: "ru-u62l4-putyom", type: "vocab", front: "путём", reading: "putyom", meaning: "by way of", accept: ["through doing something", "by the route of", "by the method of"], example: { jp: "Этот вопрос решили путём обмена: мы дали материал, а они сделали работу.", en: "They settled that question by means of an exchange: we gave the material and they did the work." }, drill: { jp: "Они платят путём обмена", en: "They pay by means of an exchange" }, hint: "pu-TYOM — stress on the last syllable, and the ё is written. ⚠️ IT TAKES THE GENITIVE even though it is itself an instrumental form: путём обмена. ⚠️ And it is NOT a unit31.js §3 case — путь is taught nowhere in this language, so there is no parent noun to duplicate." },
        { id: "ru-u62l4-posredstvom", type: "vocab", front: "посредством", reading: "posredstvom", meaning: "through the agency of", accept: ["by the use of", "via something", "with the help of a means"], example: { jp: "Все документы теперь отправляют посредством связи, и бумага почти не нужна.", en: "All the documents are now sent through the agency of a signal, and paper is almost unnecessary." }, drill: { jp: "Мы платим посредством банка", en: "We pay through the agency of a bank" }, hint: "pa-SRED-stvam — stress on SRED. It takes the GENITIVE. ⚠️ FORMAL, and it is built on средство from unit 32. Путём is the everyday partner; посредством belongs to an official document." },
        { id: "ru-u62l4-naschyot", type: "vocab", front: "насчёт", reading: "naschyot", meaning: "about a matter to settle", accept: ["about something", "as for", "with a view to settling"], example: { jp: "Насчёт денег я буду говорить с начальником сам, а ты пока ничего не говори.", en: "Regarding the money I will speak to the boss myself, and for now you say nothing." }, drill: { jp: "Я звонил насчёт работы", en: "I rang regarding the work" }, hint: "na-SHCHOT — stress on the last syllable, the ё is written, and сч is said shch. It takes the GENITIVE. ⚠️ Про and о from unit 39 are the neutral about; насчёт is about a MATTER TO BE SETTLED, which is why it goes with звонить and говорить." },
        { id: "ru-u62l4-otnositelno", type: "vocab", front: "относительно", reading: "otnositelno", meaning: "with regard to", accept: ["concerning", "in relation to", "as regards"], example: { jp: "Относительно этого вопроса у меня есть замечание, которое я хотел бы сказать сейчас.", en: "With regard to that question I have a remark which I should like to say now." }, drill: { jp: "Относительно этого есть вопрос", en: "With regard to that there is a question" }, hint: "at-na-SI-til-na — five syllables, stress on SI. It takes the GENITIVE. ⚠️ It has a SECOND life as an ordinary adverb meaning comparatively: «относительно дёшево», relatively cheap." },
        { id: "ru-u62l4-vrode", type: "vocab", front: "вроде", reading: "vrode", meaning: "sort of", accept: ["something like", "apparently", "a bit like"], example: { jp: "Он вроде согласен, но прямо об этом ещё не сказал.", en: "He sort of agrees, but he has not said so directly yet." }, drill: { jp: "Он вроде хороший человек", en: "He is sort of a good person" }, hint: "VRO-di — stress on the first syllable. ⚠️ TWO JOBS, and both are on the card: with the GENITIVE it means like — «вроде брата»; on its own, in front of a whole statement, it hedges it — «он вроде знает», he seems to know." },
        { id: "ru-u62l4-napodobie", type: "vocab", front: "наподобие", reading: "napodobie", meaning: "in the manner of", accept: ["resembling", "after the fashion of", "much like"], example: { jp: "Они строили зал наподобие старого театра, хотя материал был совсем новый.", en: "They were building a hall in the manner of an old theatre, although the material was quite new." }, drill: { jp: "Это наподобие большого окна", en: "That is in the manner of a big window" }, hint: "na-pa-DO-bi-ye — five syllables, stress on DO, written as ONE word. It takes the GENITIVE. ⚠️ It describes a SHAPE or a form, where вроде hedges a statement — that is how the two divide the ground." },
      ],
    },
  ],
};
