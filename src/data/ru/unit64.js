// RU Unit 64 — Неуверенность и оговорка ("Uncertainty and the caveat") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 1 (u61–u73). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, and THIS BAND's conventions in ru/unit61.js §1–§8.
//
// THE SLOT TITLE APPLIED AND IS KEPT — "Hedging and uncertainty" is a real hole,
// but only ABOVE the line A1 and A2 already drew. What they taught is the FLAT
// form of doubt: может быть · наверное (u22) · сомневаться (u35) · вероятно · бы
// (u47) · ли · будто · едва · чуть (u46). Eight words, and every one of them is
// either a bare "maybe" or a grammatical particle. What a B1 learner cannot do
// is ATTRIBUTE a doubtful claim to someone else (якобы), mark their own as
// provisional (пожалуй · видимо), name the guess as a thing (догадка · гипотеза ·
// подозрение), or attach the caveat that keeps it honest (оговорка).
//
// ★ THE TEACHING IS THE STRENGTH LADDER, so every hint places the card against
//   the words the learner already has:
//     вряд ли   < сомневаюсь       — the weakest denial
//     видимо    ≈ наверное          — but видимо rests on EVIDENCE you can see
//     пожалуй   — a view you are revising as you speak
//     якобы     — NOT your claim at all: someone else said it and you doubt it
//     словно    ≈ будто             — словно is the literary one
//
// ⚠️ SIX REFUSED, and all six are the obvious reaches:
//   `возможно` (возможность u34) · `похоже` (похож u10) · `условно` (условие u34) ·
//        `уверенность` (уверен u24) · `маловероятно` (вероятно u47 AND мало u21) ·
//        `наверняка` (наверное u22) — all plain unit1.js §D.
//   `скорее` — NOT §D but unit1.js §5's last rule: it is the comparative form of
//        скоро (u7), and an inflected form is never its own card.
//   `кажется` and `кажущийся` — same rule, inflected forms of казаться (u32), and
//        `кажущийся` is additionally a PARTICIPLE, which is Grammar 6–8's subject
//        and therefore block 2's to teach, not block 1's to spend.
//   `допустим` "let us say" — it is the imperative of допустить, and this unit
//        cards `допускать` at l2, so допустим would be a second mastery track for
//        one lexeme. The `нравится`/`стоит` exception (unit1.js §4) does NOT apply:
//        that test is "the infinitive could carry no legal drill", and допускать
//        carries one fine.
//   `приблизительно` — refused on the GLOSS, not on §D: `примерно` (u37) is
//        glossed "roughly" and means the same thing, so the produce card would
//        prompt the learner for one synonym and reject the other — the defect
//        lint.js's glossCollisionWarnings exists to stop, in the shape a
//        parenthetical cannot fix (unit31.js §1).
//   `предполагать` — §D against `полагать`, which THIS BLOCK cards one unit
//        earlier at u61l3. `гипотеза` carries the sense the lesson needed.
//
// ⚠️ A SAME-LESSON TRAP THIS UNIT HAD TO DESIGN AROUND. `разве` and `неужели` are
//   both "really?" in a dictionary, and they sit in the same lesson, so their
//   accept[] lists had to be made DISJOINT by hand — the selfcheck's
//   sameLessonSenseOverlap check compares meaningVariants, not just the primary
//   gloss, and two cards sharing one accept entry is the same defect as two
//   sharing a gloss. Neither accept list contains the bare word "really".
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT64 = {
  id: "ru-u64",
  lang: "ru",
  title: "Неуверенность и оговорка",
  order: 64,
  stage: "b1",
  lessons: [
    {
      id: "ru-u64l1",
      unit: 64,
      lesson: 1,
      title: "Marking a claim as uncertain",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Soften or distance a claim — say it is hardly likely, that you rather think so, that apparently it is so, that someone supposedly said it, and question it outright.",
      items: [
        { id: "ru-u64l1-vryadli", type: "vocab", front: "вряд ли", reading: "vryadli", meaning: "hardly likely", accept: ["I doubt it", "unlikely", "scarcely"], example: { jp: "Он вряд ли согласен с этим выводом, хотя прямо он ничего не сказал.", en: "He is hardly likely to agree with that conclusion, although he said nothing directly." }, drill: { jp: "Он вряд ли будет здесь", en: "He is hardly likely to be here" }, hint: "vryad LI — stress on вряд, written as TWO words, and ли is never stressed. ⚠️ IT IS THE WEAKEST DENIAL IN RUSSIAN: «вряд ли» doubts without arguing, where «я сомневаюсь» from unit 35 commits you to the doubt." },
        { id: "ru-u64l1-pozhaluy", type: "vocab", front: "пожалуй", reading: "pozhaluy", meaning: "I rather think", accept: ["perhaps", "on reflection", "I suppose so"], example: { jp: "Пожалуй, он прав, хотя сначала я был совсем не согласен с ним.", en: "I rather think he is right, although at first I did not agree with him at all." }, drill: { jp: "Пожалуй это самый трудный вопрос", en: "I rather think that is the hardest question" }, hint: "pa-ZHA-luy — stress on ZHA. ⚠️ It marks a view you are REVISING AS YOU SPEAK, which наверное from unit 22 does not: наверное guesses, пожалуй concedes. ⚠️ Do not confuse it with пожалуйста from unit 7 — one letter apart, completely different word." },
        { id: "ru-u64l1-vidimo", type: "vocab", front: "видимо", reading: "vidimo", meaning: "evidently", accept: ["by the look of it", "to all appearances", "so it would seem"], example: { jp: "Свет не горит, видимо, в доме никого нет.", en: "The light is not on; apparently there is nobody at home." }, drill: { jp: "Видимо он уже знает", en: "Apparently he already knows" }, hint: "VI-di-ma — stress on the first syllable. ⚠️ THE DIFFERENCE FROM наверное IS EVIDENCE: видимо rests on something you can actually see, наверное on nothing but a guess. Its fuller form по-видимому is more formal again." },
        { id: "ru-u64l1-yakoby", type: "vocab", front: "якобы", reading: "yakoby", meaning: "allegedly", accept: ["so they claim", "reportedly but doubtfully", "on somebody else's word"], example: { jp: "Он говорит, что якобы ничего не знал об этом, но документы у него были.", en: "He says that he supposedly knew nothing about it, but he had the documents." }, drill: { jp: "Он якобы ничего не знал", en: "He supposedly knew nothing" }, hint: "YA-ka-by — stress on the first syllable. ⚠️ IT IS NOT YOUR CLAIM: якобы says somebody else asserted this and you do not believe them. A Russian newspaper uses it to report without endorsing, exactly as English uses allegedly." },
        { id: "ru-u64l1-razve", type: "vocab", front: "разве", reading: "razve", meaning: "surely not", accept: ["is that really so", "do you mean to say", "I can hardly believe it"], example: { jp: "Разве ты не знал, что собрание будет в пятницу?", en: "Surely you knew that the meeting is on Friday?" }, drill: { jp: "Разве ты этого не знал", en: "Surely you knew that" }, hint: "RAZ-vi — stress on the first syllable. It opens a question that EXPECTS the answer no, and it carries a small reproach: «разве так можно?» means surely that is not allowed." },
        { id: "ru-u64l1-neuzheli", type: "vocab", front: "неужели", reading: "neuzheli", meaning: "can it really be", accept: ["you do not say", "can that be true", "I am astonished"], example: { jp: "Неужели он сам написал этот доклад, если раньше он почти не работал?", en: "Can he really have written that report himself, if he had hardly worked before?" }, drill: { jp: "Неужели это правда", en: "Can that really be true" }, hint: "ni-u-ZHE-li — four syllables, stress on ZHE. ⚠️ It is SURPRISE, not reproach: разве doubts the fact, неужели is amazed by it. ⚠️ It only LOOKS like не + a taught word; ужели is archaic and does not stand alone, so unit 61 §5(d)'s не+X bar does not apply." },
      ],
    },
    {
      id: "ru-u64l2",
      unit: 64,
      lesson: 2,
      title: "The verbs of guessing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what you are doing with an uncertain idea — suspecting it, beginning to sense it, conceding it is possible, ruling it out, wavering over it, or fearing it.",
      items: [
        { id: "ru-u64l2-podozrevat", type: "vocab", front: "подозревать", reading: "podozrevat", meaning: "to suspect", accept: ["to have suspicions about", "to think someone guilty", "to sense something wrong"], example: { jp: "Он стал подозревать обман, потому что цифры в отчёте не соответствовали друг другу.", en: "He began to suspect a deception, because the figures in the report did not correspond to each other." }, drill: { jp: "Можно подозревать здесь обман", en: "One may suspect a deception here" }, hint: "pa-da-zri-VAT — four syllables, stress on the last, and both о reduce to a. IMPERFECTIVE; the perfective is подозреть, which is almost never used. It takes в + the prepositional for the charge: подозревать в обмане." },
        { id: "ru-u64l2-dogadyvatsya", type: "vocab", front: "догадываться", reading: "dogadyvatsya", meaning: "to have an inkling", accept: ["to begin to guess", "to sense something", "to work it out gradually"], example: { jp: "Она давно догадывалась обо всём, хотя никто ей ничего не говорил.", en: "She had long had an inkling about it all, although nobody had told her anything." }, drill: { jp: "Он стал догадываться обо всём", en: "He began to have an inkling about it all" }, hint: "da-GA-dy-vat-sya — stress on GA. IMPERFECTIVE and REFLEXIVE; the perfective догадаться is the moment you get it. It takes о + the prepositional: догадываться о правде." },
        { id: "ru-u64l2-dopuskat", type: "vocab", front: "допускать", reading: "dopuskat", meaning: "to concede that something is possible", accept: ["to allow for", "to admit as possible", "to grant"], example: { jp: "Я готов допускать, что он прав, но доказательства у нас пока нет.", en: "I am prepared to concede that he is right, but we have no proof yet." }, drill: { jp: "Нужно допускать любой вариант", en: "One must allow for any option" }, hint: "da-pus-KAT — stress on the last syllable. IMPERFECTIVE; the perfective is допустить. ⚠️ Разрешать from unit 34 is permission from a person; допускать is logical room for a possibility. Its second sense is to let somebody in." },
        { id: "ru-u64l2-isklyuchat", type: "vocab", front: "исключать", reading: "isklyuchat", meaning: "to exclude", accept: ["to leave out of account", "to expel", "to take off the list"], example: { jp: "Нельзя исключать, что причина была совсем другая, хотя это маловероятно.", en: "It cannot be ruled out that the cause was quite different, although that is improbable." }, drill: { jp: "Нельзя исключать эту ошибку", en: "This mistake cannot be ruled out" }, hint: "is-klyu-CHAT — stress on the last syllable. IMPERFECTIVE; the perfective is исключить. ⚠️ Кроме from unit 33 is the preposition except; исключать is the verb. Its other sense is to expel a student from a university." },
        { id: "ru-u64l2-kolebatsya", type: "vocab", front: "колебаться", reading: "kolebatsya", meaning: "to waver", accept: ["to hesitate", "to be in two minds", "to swing between options"], example: { jp: "Он долго колебался, прежде чем подписать договор, и всё-таки подписал его.", en: "He wavered for a long time before signing the contract, and signed it all the same." }, drill: { jp: "Не надо так колебаться", en: "There is no need to waver so" }, hint: "ka-li-BAT-sya — stress on BAT. IMPERFECTIVE and REFLEXIVE. ⚠️ Сомневаться from unit 35 is doubting whether something is TRUE; колебаться is hesitating over what to DO. Its physical sense is to swing or oscillate." },
        { id: "ru-u64l2-opasatsya", type: "vocab", front: "опасаться", reading: "opasatsya", meaning: "to be apprehensive", accept: ["to fear something may happen", "to be wary of", "to have misgivings"], example: { jp: "Все опасались, что денег будет мало, и, видимо, они были правы.", en: "Everyone was apprehensive that money would be short, and apparently they were right." }, drill: { jp: "Нужно опасаться этого человека", en: "One must be wary of that man" }, hint: "a-pa-SAT-sya — stress on SAT. IMPERFECTIVE and REFLEXIVE, and it takes the GENITIVE: опасаться болезни. ⚠️ Бояться from unit 28 is the fear you feel; опасаться is the measured, often official word — a report опасается, a child боится. It sits on опасный from unit 40." },
      ],
    },
    {
      id: "ru-u64l3",
      unit: 64,
      lesson: 3,
      title: "The nouns of a guess",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name an uncertain thought as a thing — a hunch, a hypothesis, a suspicion, a hint, a mistaken belief, and the caveat you attach to a claim.",
      items: [
        { id: "ru-u64l3-dogadka", type: "vocab", front: "догадка", reading: "dogadka", meaning: "a hunch", accept: ["a guess", "an inkling", "a shrewd guess"], example: { jp: "Это была только догадка, но она оказалась правильной.", en: "That was only a hunch, but it turned out to be correct." }, drill: { jp: "Это только моя догадка", en: "That is only my hunch" }, hint: "da-GAD-ka — stress on GAD. FEMININE (-а). ⚠️ Its stem drops the а in the genitive plural: догадок. A догадка is a guess that has a chance of being right — not a wild one." },
        { id: "ru-u64l3-gipoteza", type: "vocab", front: "гипотеза", reading: "gipoteza", meaning: "a hypothesis", accept: ["a working theory", "a proposed explanation", "a scientific guess"], example: { jp: "У него есть гипотеза, которая объясняет все факты, но проверить её пока нельзя.", en: "He has a hypothesis which explains all the facts, but it cannot be tested yet." }, drill: { jp: "Это очень смелая гипотеза", en: "That is a very bold hypothesis" }, hint: "gi-PO-ti-za — stress on PO, and the г is a hard g. FEMININE (-а). ⚠️ Теория from unit 41 is a theory that has been tested; a гипотеза has not been. ⚠️ Glossed the long way in accept[] on purpose — the word transliterates close to the English one." },
        { id: "ru-u64l3-podozrenie", type: "vocab", front: "подозрение", reading: "podozrenie", meaning: "a suspicion", accept: ["a misgiving", "the sense that something is wrong", "being under suspicion"], example: { jp: "У меня было подозрение, что он говорит не всю правду, и я оказался прав.", en: "I had a suspicion that he was not telling the whole truth, and I turned out to be right." }, drill: { jp: "У меня есть подозрение", en: "I have a suspicion" }, hint: "pa-da-ZRE-ni-ye — five syllables, stress on ZRE. NEUTER (-е). It is the noun of подозревать from lesson 2, and the set phrase «под подозрением» means under suspicion." },
        { id: "ru-u64l3-namyok", type: "vocab", front: "намёк", reading: "namyok", meaning: "a hint", accept: ["a broad hint", "an allusion", "a veiled remark"], example: { jp: "В его словах был намёк на то, что решение уже принято, но прямо он этого не сказал.", en: "In his words there was a hint that the decision had already been taken, but he did not say so directly." }, drill: { jp: "Это был тонкий намёк", en: "That was a subtle hint" }, hint: "na-MYOK — stress on the last syllable, and the ё is written as unit 1 §7 requires. MASCULINE. ⚠️ Its stem drops the ё when it inflects: намёк, but намека, намеку. Совет from unit 30 is advice given openly; a намёк is deliberately indirect." },
        { id: "ru-u64l3-zabluzhdenie", type: "vocab", front: "заблуждение", reading: "zabluzhdenie", meaning: "a mistaken belief", accept: ["a delusion", "a widely held error", "a misconception"], example: { jp: "Это общее заблуждение, которое повторяют уже сто лет, хотя факты говорят о другом.", en: "That is a common mistaken belief which has been repeated for a hundred years, although the facts say otherwise." }, drill: { jp: "Это очень общее заблуждение", en: "That is a very common mistaken belief" }, hint: "za-bluzh-DE-ni-ye — five syllables, stress on DE. NEUTER (-е). ⚠️ Ошибка from unit 6 is a mistake you made once; заблуждение is a wrong belief you are living inside. «Быть в заблуждении» is the set phrase." },
        { id: "ru-u64l3-ogovorka", type: "vocab", front: "оговорка", reading: "ogovorka", meaning: "a caveat", accept: ["a reservation", "a qualifying remark", "a slip of the tongue"], example: { jp: "Он был согласен, но с одной важной оговоркой, которую все сразу поняли.", en: "He was in agreement, but with one important caveat, which everyone understood at once." }, drill: { jp: "Это была важная оговорка", en: "That was an important caveat" }, hint: "a-ga-VOR-ka — stress on VOR, and both о reduce to a. FEMININE (-а). ⚠️ TWO SENSES AND BOTH ARE COMMON: the qualification you attach to an agreement, and a slip of the tongue. Замечание from unit 39 is a remark about something else; an оговорка limits your own claim." },
      ],
    },
    {
      id: "ru-u64l4",
      unit: 64,
      lesson: 4,
      title: "When something only looks true",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how solid a claim looks — self-evident, vague, imaginary, open to two readings — compare it with словно, and say when someone is overstating it.",
      items: [
        { id: "ru-u64l4-ochevidnyy", type: "vocab", front: "очевидный", reading: "ochevidnyy", meaning: "self-evident", accept: ["obvious", "plain to see", "needing no proof"], example: { jp: "Для него это был очевидный вывод, но остальные его не разделяли.", en: "For him that was a self-evident conclusion, but the others did not share it." }, drill: { jp: "Это совсем очевидный факт", en: "That is a completely obvious fact" }, hint: "a-chi-VID-nyy — four syllables, stress on VID. ⚠️ Ясный from unit 40 means clear once explained; очевидный needs no explaining at all — literally «eye-seen». The adverb очевидно is also a hedge, like видимо." },
        { id: "ru-u64l4-smutnyy", type: "vocab", front: "смутный", reading: "smutnyy", meaning: "vague", accept: ["indistinct", "hazy", "only half-remembered"], example: { jp: "У меня осталось смутное чувство, что мы забываем самое главное, но я не мог сказать почему.", en: "I was left with a vague feeling that we were forgetting the most important thing, but I could not say why." }, drill: { jp: "Это был смутный ответ", en: "That was a vague answer" }, hint: "SMUT-nyy — stress on the first syllable. ⚠️ It goes with чувство · воспоминание · надежда — things half-perceived, not things badly explained. For a badly explained one Russian says «непонятно»." },
        { id: "ru-u64l4-mnimyy", type: "vocab", front: "мнимый", reading: "mnimyy", meaning: "imaginary", accept: ["supposed but not real", "illusory", "so-called"], example: { jp: "Это мнимый спор: оба варианта приводят к одному результату.", en: "That is an imaginary argument: both options lead to the same result." }, drill: { jp: "Это был мнимый друг", en: "That was a supposed friend" }, hint: "MNI-myy — stress on the first syllable. ⚠️ It is the ADJECTIVE partner of якобы: a мнимый X is one that is only called X. In mathematics «мнимое число» is an imaginary number, the same word." },
        { id: "ru-u64l4-dvusmyslennyy", type: "vocab", front: "двусмысленный", reading: "dvusmyslennyy", meaning: "open to two readings", accept: ["ambiguous", "capable of two meanings", "equivocal"], example: { jp: "Ответ был двусмысленный, и каждый понял его так, как хотел.", en: "The answer was open to two readings, and everyone understood it as they wished." }, drill: { jp: "Это очень двусмысленный ответ", en: "That is a very ambiguous answer" }, hint: "dvu-SMYS-lin-nyy — four syllables, stress on SMYS, and the нн is held longer. Built transparently from два + смысл (unit 39): two-meaning-ed. ⚠️ In conversation it often implies an improper second meaning." },
        { id: "ru-u64l4-slovno", type: "vocab", front: "словно", reading: "slovno", meaning: "just like", accept: ["as if it were", "for all the world like", "the way something else is"], example: { jp: "Она смотрела на него словно на гостя, хотя они работали вместе десять лет.", en: "She looked at him as though at a guest, although they had worked together for ten years." }, drill: { jp: "Он говорит словно учитель", en: "He speaks like a teacher" }, hint: "SLOV-na — stress on the first syllable. ⚠️ Будто from unit 46 does the same job and is the everyday one; словно is the literary one, and it is what you will meet in a novel. It sits on слово from unit 6 but means nothing like it." },
        { id: "ru-u64l4-preuvelichivat", type: "vocab", front: "преувеличивать", reading: "preuvelichivat", meaning: "to overstate", accept: ["to exaggerate", "to blow something up", "to make too much of"], example: { jp: "Он любит преувеличивать, поэтому его цифрам вряд ли можно верить.", en: "He likes to overstate things, so his figures can hardly be believed." }, drill: { jp: "Не надо так преувеличивать", en: "There is no need to overstate so" }, hint: "pri-u-vi-LI-chi-vat — six syllables, stress on LI. IMPERFECTIVE; the perfective is преувеличить. ⚠️ Note the пре-, not при-: пре- means excessively, and it is the prefix that separates преувеличивать from the при- family taught at unit 63." },
      ],
    },
  ],
};
