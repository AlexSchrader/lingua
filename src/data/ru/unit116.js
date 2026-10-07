// RU Unit 116 — Условное и невозможное ("The conditional and the impossible") — B2
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE SCAFFOLD TITLE WAS `Grammar 9 — conditional nuance and counterfactuals`
// AND THE THEME SURVIVES — but the single-word hedges are already spent, so this
// unit CANNOT be "the words for maybe". Taught already: `бы` (u47l4 — the bare
// particle, and the ONLY piece of the conditional the course has), `будто` (u46),
// `едва` (u46), `вроде` (u62), `якобы` (u64), `словно` (u64), `пожалуй` (u64),
// `вряд ли` (u64), `оговорка` (u64), `авось` (u81), `неизбежный` (u62),
// `условие` (u34), `чтобы` (u46), `представлять` (u52), `случай` (u24),
// `исход` (u66), `затея` (u72), `предотвращать` (u70), `избегать` (u70),
// `рисковать` (u79).
//
// WHAT IS GENUINELY LEFT, and it is the heart of the construction:
//   (a) THE MULTI-WORD бы FRAMES. `бы` alone is taught and is useless alone —
//       Russian counterfactuals are built with если бы / хоть бы / лишь бы, and
//       not one of them is in the corpus. Multi-word fronts are already house
//       practice for ru (`вряд ли` u64, `может быть` u22), so this is ordinary.
//   (b) THE PERFECTIVE VERBS OF «it turned out otherwise» — обернуться,
//       сложиться, обойтись, миновать, довестись. All five are what a Russian
//       actually says about a path not taken, and all five probe free.
//   (c) The adjectives of likelihood at the far end — маловероятный, немыслимый.
//
// ⚠️ ASPECT NOTE, unit1.js §4. Five of this unit's verbs are PERFECTIVE
// infinitives and that is deliberate, not an oversight: the counterfactual is
// about a completed outcome, so the perfective is the form the construction
// needs. None of their imperfective partners (обходиться · оборачиваться ·
// складываться · доводиться) is taught anywhere, so there is no shared gloss
// and §4's discriminator requirement does not bite. Each hint names the aspect.
//
// ⚠️ THREE FROZEN 1st-PERSON-PLURAL PARTICLES WERE CONSIDERED AND ONE CARDED.
// `допустим` is lexicalised exactly as `пожалуй` (u64) is — a frozen verb form
// doing the work of a discourse particle, which unit1.js §4's two documented
// exceptions already licence. `предположим` is the SAME function with the same
// gloss, so carding both would be one prompt with two right answers; only
// допустим is carded and `предположение` carries the noun.
//
// ⚠️ ALSO REFUSED: `гипотетический` (§D, against `гипотеза` u64) · `допущение`
//   (§D, against `допустим`, carded here) · `успеть` (§D, against `успех` u25,
//   and `успеваемость` is at u113) · `случаться` (§D, against `случай` u24) ·
//   `спасаться` (§D, against `спасать` u97) · `только бы` (a duplicate prompt
//   for `хоть бы`) · `как будто` (§D, against `будто` u46) · `кабы` (archaic;
//   deferred, not refused) · `в случае` and `при условии`, which are u117's.
// ⚠️ A MECHANICAL TRAP MULTI-WORD FRONTS HIT, MEASURED HERE SO u117 AND u118
// DO NOT RE-DISCOVER IT: an item id must match /^[a-z]{2}-u\d+l\d+-[a-z0-9]+$/,
// which allows NO HYPHEN after the lesson segment. `ru-u116l1-esli-by` is
// REJECTED by validate:content; the id must be the reading run together —
// `ru-u116l1-esliby`. Eight ids in this unit failed on the first run for exactly
// this reason.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT116 = {
  id: "ru-u116",
  lang: "ru",
  title: "Условное и невозможное",
  order: 116,
  stage: "b2",
  lessons: [
    {
      id: "ru-u116l1",
      unit: 116,
      lesson: 1,
      title: "The frames that build an unreal condition",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Build a counterfactual with если бы, express a wish with хоть бы, say just so long as, you never know, just in case, and let us suppose.",
      items: [
        { id: "ru-u116l1-esliby", type: "vocab", front: "если бы", reading: "esliby", meaning: "if only it were the case", accept: ["if it were", "if we had", "supposing that"], example: { jp: "Если бы он знал об этом раньше, всё было бы совсем иначе.", en: "If he had known about it earlier, everything would have been quite different." }, drill: { jp: "Если бы он знал раньше", en: "If he had known earlier" }, hint: "YES-li by — stress on the YES of если, and `бы` is NEVER stressed. ⚠️ THE WHOLE CONSTRUCTION IN ONE RULE: если бы + the PAST TENSE in both halves, and бы in both halves too. Russian has no separate subjunctive — «если бы я знал, я бы сказал» covers «if I knew / if I had known» alike, with no tense marking at all. The `бы` particle itself is taught at u47l4; this is what you do with it." },
        { id: "ru-u116l1-khotby", type: "vocab", front: "хоть бы", reading: "khotby", meaning: "if only", accept: ["I do hope", "would that", "let it only be that"], example: { jp: "Хоть бы погода была хорошая, иначе будет совсем плохо.", en: "If only the weather is good, otherwise it will be really bad." }, drill: { jp: "Хоть бы погода была хорошая", en: "If only the weather is good" }, hint: "khot BY — the х is the scraping one and the т is hard. ⚠️ A WISH ABOUT THE FUTURE, said with feeling, and it also takes the PAST TENSE: «хоть бы он пришёл», if only he would come. ⚠️ A SECOND SENSE, with a shrug: «хоть бы раз спросил» — he never once even asked. `иначе` (u79) is in the example and is its natural partner." },
        { id: "ru-u116l1-lishby", type: "vocab", front: "лишь бы", reading: "lishby", meaning: "just so long as", accept: ["so long as", "as long as it means", "anything as long as"], example: { jp: "Он согласен на любую работу, лишь бы платили вовремя.", en: "He will agree to any work, just so long as they pay on time." }, drill: { jp: "Лишь бы платили вовремя", en: "Just so long as they pay on time" }, hint: "lish BY. ⚠️ DIFFERENT FROM `хоть бы`, and the difference is attitude, not grammar: хоть бы is a hope, лишь бы is INDIFFERENCE TO THE MEANS — «лишь бы не хуже», anything so long as it is no worse. `лишь` alone is taught at u37 as «merely»; with бы it becomes a condition." },
        { id: "ru-u116l1-maloli", type: "vocab", front: "мало ли", reading: "maloli", meaning: "you never know", accept: ["who knows", "there is no telling", "all sorts of things could"], example: { jp: "Мало ли что может случиться в дороге, и поэтому он всегда готов.", en: "There is no telling what might happen on the road, so he is always ready." }, drill: { jp: "Мало ли что может случиться в дороге", en: "There is no telling what might happen on the road" }, hint: "MA-la li — stress on the MA, and the final о of мало reduces to a. ⚠️ ALWAYS FOLLOWED BY A QUESTION WORD: «мало ли что», «мало ли кто», «мало ли где». It raises a possibility in order to take it seriously, which is why it so often explains a precaution. ⚠️ Note `мало` itself is not a front in this course and appears only in frames like this one." },
        { id: "ru-u116l1-navsyakiysluchay", type: "vocab", front: "на всякий случай", reading: "navsyakiysluchay", meaning: "just in case", accept: ["to be on the safe side", "as a precaution", "in case it is needed"], example: { jp: "На всякий случай он взял деньги, хотя магазин был рядом.", en: "Just in case he took money, although the shop was next door." }, drill: { jp: "На всякий случай он взял деньги", en: "Just in case he took money" }, hint: "na VSYA-kiy SLU-chay — two stresses, on всякий and on случай. ⚠️ A FOUR-WORD FROZEN PHRASE and one of the most-used in spoken Russian. `случай` (u24) is taught; всякий is not a front, and it survives only inside this phrase, which is exactly how a learner meets it. Shortened to «на всякий» in casual speech." },
        { id: "ru-u116l1-dopustim", type: "vocab", front: "допустим", reading: "dopustim", meaning: "let us suppose", accept: ["say for the sake of argument", "for argument's sake", "let us say"], example: { jp: "Допустим, денег нет. Что ты тогда будешь делать?", en: "Suppose there is no money. What will you do then?" }, drill: { jp: "Допустим, денег нет совсем", en: "Suppose there is no money at all" }, hint: "da-PUS-tim — stress on PUS, and the first о reduces to a. ⚠️ A FROZEN VERB FORM DOING A PARTICLE'S JOB, the same shape as `пожалуй` (u64): grammatically it is «let us allow», but it is used like English «say» or «suppose» and always sits at the front of the sentence with a comma. From `допускать` (u64, «to grant») — which is why the noun `допущение` is not carded." },
      ],
    },
    {
      id: "ru-u116l2",
      unit: 116,
      lesson: 2,
      title: "Supposing out loud",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a supposition and an alternative, say to imagine something, and hedge a claim with in theory, by rights and broadly speaking.",
      items: [
        { id: "ru-u116l2-predpolozhenie", type: "vocab", front: "предположение", reading: "predpolozhenie", meaning: "a supposition", accept: ["an assumption", "a guess put forward", "a working assumption"], example: { jp: "Предположение было простое, и проверить его было легко.", en: "The supposition was simple, and it was easy to check." }, drill: { jp: "Предположение было простое", en: "The supposition was simple" }, hint: "pred-pa-la-ZHE-ni-ye — six syllables, stress on ZHE, and both unstressed о reduce to a. NEUTER (-ие). ⚠️ WEAKER THAN `гипотеза` (u64): a гипотеза is formal and testable, a предположение is anything you put forward without proof — «это только предположение», that is only a guess. The verb предполагать is not carded." },
        { id: "ru-u116l2-alternativa", type: "vocab", front: "альтернатива", reading: "alternativa", meaning: "the other course open to you", accept: ["another option", "a second possibility", "the alternative course"], example: { jp: "Альтернатива есть всегда, но она не всегда лучше.", en: "There is always an alternative, but it is not always better." }, drill: { jp: "Альтернатива есть всегда", en: "There is always an alternative" }, hint: "al-ter-na-TI-va — stress on TI. FEMININE (-а). ⚠️ RUSSIAN USES IT IN THE STRICT SENSE MORE OFTEN THAN ENGLISH: «альтернативы нет» means there is literally no other course. `выбор` is not a front in this course and `вариант` (u44) is one option among several — an альтернатива is specifically the OTHER one." },
        { id: "ru-u116l2-voobrazhat", type: "vocab", front: "воображать", reading: "voobrazhat", meaning: "to picture in the imagination", accept: ["to let your imagination run", "to fancy something", "to imagine freely"], example: { jp: "Воображать можно всё, но жить надо в этом мире.", en: "You can imagine everything, but you have to live in this world." }, drill: { jp: "Воображать можно всё", en: "You can imagine everything you want" }, hint: "va-ab-ra-ZHAT — stress on the last syllable, and both unstressed о reduce to a. Imperfective infinitive; the perfective is вообразить. ⚠️ DIFFERENT FROM `представлять` (u52, «to picture to yourself»), which is a neutral mental act: воображать leans towards fantasy, and «он воображает» on its own means he has a very high opinion of himself. Built on `образ` (u68)." },
        { id: "ru-u116l2-teoreticheski", type: "vocab", front: "теоретически", reading: "teoreticheski", meaning: "in theory", accept: ["theoretically", "on paper", "in principle but perhaps not in fact"], example: { jp: "Теоретически это можно, но никто этого ещё не делал.", en: "In theory it can be done, but nobody has done it yet." }, drill: { jp: "Теоретически это можно", en: "In theory it can be done" }, hint: "te-a-re-TI-ches-ki — stress on TI, and the о reduces to a. An ADVERB, from `теория` (u41). ⚠️ ALMOST ALWAYS THE FIRST HALF OF A CONTRAST — «теоретически да, практически нет» — and a Russian speaker who starts a sentence with it is about to object. Its partner практически is not carded." },
        { id: "ru-u116l2-poidee", type: "vocab", front: "по идее", reading: "poidee", meaning: "by rights", accept: ["as it should be", "going by what is supposed to happen", "in principle it ought to"], example: { jp: "По идее, письмо должно было прийти в среду.", en: "By rights, the letter should have arrived on Wednesday." }, drill: { jp: "По идее, письмо должно было прийти в среду", en: "By rights, the letter should have arrived on Wednesday" }, hint: "pa i-DE-ye — stress on the DE of идее. ⚠️ SPOKEN, AND ALWAYS IMPLIES IT DID NOT HAPPEN: «по идее» sets up how things are meant to work so you can say that they did not. `идея` (u9) is taught; this is its frozen dative. Compare `теоретически`, which is neutral and bookish." },
        { id: "ru-u116l2-vprintsipe", type: "vocab", front: "в принципе", reading: "vprintsipe", meaning: "broadly speaking", accept: ["in principle", "on the whole yes", "more or less yes"], example: { jp: "В принципе я согласен, но есть один вопрос.", en: "Broadly speaking I agree, but there is one question." }, drill: { jp: "В принципе я согласен", en: "Broadly speaking I agree" }, hint: "f PRIN-tsi-pe — the в is said as f before the п, and the stress is on PRIN. ⚠️ A SOFTENER, NOT A STATEMENT OF PRINCIPLE: «в принципе да» means «yes, more or less» and a Russian hears a reservation coming. `принцип` is not a front in this course; the phrase is learnt whole." },
      ],
    },
    {
      id: "ru-u116l3",
      unit: 116,
      lesson: 3,
      title: "How it turned out instead",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that a thing turned out otherwise, came together, was managed without, passed you by, or happened to fall to you — and that one way or another it did.",
      items: [
        { id: "ru-u116l3-obernutsya", type: "vocab", front: "обернуться", reading: "obernutsya", meaning: "to turn out otherwise", accept: ["to take a turn", "to end up as something else", "to turn into something unexpected"], example: { jp: "Всё обернулось совсем не так, как они думали в начале.", en: "Everything turned out quite differently from how they thought at the start." }, drill: { jp: "Обернуться это может очень плохо", en: "This may turn out very badly" }, hint: "a-ber-NUT-sya — stress on NUT, and the first о reduces to a. PERFECTIVE infinitive (its imperfective оборачиваться is not taught, so no shared gloss). ⚠️ TWO SENSES AND THE PHYSICAL ONE IS FIRST: to turn round and look behind you. The figurative sense — a situation turning into something else — is the one this unit needs: «шутка обернулась скандалом»." },
        { id: "ru-u116l3-slozhitsya", type: "vocab", front: "сложиться", reading: "slozhitsya", meaning: "to come together as it did", accept: ["to work out a certain way", "to take shape", "to end up arranged so"], example: { jp: "Так сложилось, что они больше никогда не встретились.", en: "It came about that they never met again." }, drill: { jp: "Сложиться всё может очень плохо", en: "Everything may come together very badly" }, hint: "sla-ZHIT-sya — stress on ZHIT, and the о reduces to a. PERFECTIVE infinitive. ⚠️ THE FIXED PHRASE IS «так сложилось» — «that is how it came about» — and it is how a Russian explains a life without blaming anyone. From сложить, to put together, which gives `сложный` (u25) its sense too." },
        { id: "ru-u116l3-oboytis", type: "vocab", front: "обойтись", reading: "oboytis", meaning: "to manage without", accept: ["to do without", "to get by", "to make do"], example: { jp: "Можно обойтись и без машины, если живёшь в центре.", en: "You can manage without a car too, if you live in the centre." }, drill: { jp: "Обойтись можно и без машины", en: "You can manage without a car too" }, hint: "a-bay-TIS — stress on the last syllable, and the first о reduces to a. PERFECTIVE infinitive. ⚠️ TAKES без + the GENITIVE: «обойтись без помощи». A SECOND SENSE is about price — «это обошлось дорого», that came expensive — and a third about treatment: «он обошёлся со мной плохо», he treated me badly. Built on `обходить` (u63)." },
        { id: "ru-u116l3-minovat", type: "vocab", front: "миновать", reading: "minovat", meaning: "to pass someone by", accept: ["to escape a thing", "to go past without touching", "to be spared something"], example: { jp: "Эта болезнь их миновала, хотя соседям было хуже.", en: "That illness passed them by, although the neighbours had it worse." }, drill: { jp: "Миновать такую болезнь очень трудно", en: "It is very hard to escape such an illness" }, hint: "mi-na-VAT — stress on the last syllable, and the о reduces to a. ⚠️ THE SAME FORM IS BOTH ASPECTS, which is rare and worth knowing. TWO USES: «беда миновала», the trouble has passed, and «этого не миновать», there is no escaping it — a fixed negative frame. Related to мимо «past», which is not carded." },
        { id: "ru-u116l3-dovestis", type: "vocab", front: "довестись", reading: "dovestis", meaning: "to happen to fall to you", accept: ["to get the chance to", "to find oneself doing", "to have occasion to"], example: { jp: "Довестись жить в разных странах может не каждый, и он это знает.", en: "Not everyone gets the chance to live in different countries, and he knows it." }, drill: { jp: "Довестись жить в разных странах может не каждый", en: "Not everyone gets the chance to live in different countries" }, hint: "da-ves-TIS — stress on the last syllable, and the first о reduces to a. PERFECTIVE infinitive. ⚠️ IMPERSONAL AND DATIVE, which is the whole point: Russian says «МНЕ довелось», «ЕМУ довелось» — it fell to me — with no nominative subject at all. The construction says the chance was not yours to arrange, which is why it belongs in a counterfactual unit." },
        { id: "ru-u116l3-takiliinache", type: "vocab", front: "так или иначе", reading: "takiliinache", meaning: "one way or another", accept: ["in any event", "whichever way it goes", "come what may"], example: { jp: "Так или иначе, решать надо сегодня, а не в следующем году.", en: "One way or another, it has to be decided today and not next year." }, drill: { jp: "Так или иначе", en: "One way or another" }, hint: "TAK i-li i-NA-che — stress on так and on the NA of иначе. ⚠️ A THREE-WORD FROZEN PHRASE built from `так` (u5), `или` (u22) and `иначе` (u79), all three taught — so the phrase is readable and only its IDIOMATIC force has to be learnt: it closes down the alternatives rather than listing them." },
      ],
    },
    {
      id: "ru-u116l4",
      unit: 116,
      lesson: 4,
      title: "What you did not see coming",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say to foresee, to let a chance slip, to keep someone from harm, and that someone was unlucky enough to do a thing — and call an outcome unlikely or unthinkable.",
      items: [
        { id: "ru-u116l4-predvidet", type: "vocab", front: "предвидеть", reading: "predvidet", meaning: "to foresee", accept: ["to see something coming", "to anticipate", "to know in advance"], example: { jp: "Предвидеть это было нельзя, и никто его не винит.", en: "It was impossible to foresee this, and nobody blames him." }, drill: { jp: "Предвидеть это было нельзя", en: "It was impossible to foresee this" }, hint: "pred-VI-det — stress on VI. ⚠️ THE SAME FORM IS BOTH ASPECTS. Built on `видеть` (u4) with пред- «before», so it is readable at sight — and that is why it is carded although видеть is taught: the PREFIX carries a meaning the learner must learn to build with, exactly as u63's twenty-four prefixed motion verbs do. «Как и следовало предвидеть» is the bookish fixed phrase." },
        { id: "ru-u116l4-upuskat", type: "vocab", front: "упускать", reading: "upuskat", meaning: "to miss an opportunity", accept: ["to let something get away", "to overlook", "to let an opening pass"], example: { jp: "Упускать такую возможность он не хотел, и это понятно.", en: "He did not want to let such an opportunity slip, and that is understandable." }, drill: { jp: "Упускать такую возможность он не хотел", en: "He did not want to let such an opportunity slip" }, hint: "u-pus-KAT — stress on the last syllable. Imperfective infinitive; the perfective is упустить. ⚠️ TWO OBJECTS AND BOTH COMMON: a chance («упустить шанс») and a DETAIL — «я упустил одну деталь», I overlooked one thing. Built on пускать «to let», which this course does not card; the fixed phrase «упустить из виду» means to lose sight of." },
        { id: "ru-u116l4-uberech", type: "vocab", front: "уберечь", reading: "uberech", meaning: "to keep from harm", accept: ["to shield someone", "to save someone from something", "to protect in time"], example: { jp: "Уберечь детей от всего нельзя, и это понимает каждая мать.", en: "You cannot shield children from everything, and every mother understands that." }, drill: { jp: "Уберечь детей от всего нельзя", en: "You cannot shield children from everything" }, hint: "u-be-RECH — stress on the last syllable. PERFECTIVE infinitive (its imperfective уберегать is not taught). ⚠️ TAKES от + the GENITIVE: уберечь кого-то ОТ чего-то. Different from `защищать` (u59, «to defend»), which is active resistance: уберечь is keeping harm away BEFORE it arrives, which is why it belongs in this lesson." },
        { id: "ru-u116l4-ugorazdit", type: "vocab", front: "угораздить", reading: "ugorazdit", meaning: "to be unlucky enough to", accept: ["to manage to do something stupid", "to go and do a thing", "to contrive to land yourself in it"], example: { jp: "Как его угораздило сказать это именно там?", en: "How did he manage to say that of all places?" }, drill: { jp: "Угораздить сказать это именно там", en: "To go and say that of all places takes some doing" }, hint: "u-ga-RAZ-dit — stress on RAZ, and the о reduces to a. PERFECTIVE infinitive, and ⚠️ IT IS IMPERSONAL WITH AN ACCUSATIVE: «как МЕНЯ угораздило», how did I come to. ⚠️ COLLOQUIAL AND ALWAYS RUEFUL — you only ever say it about something you regret, usually with «как» and a question mark. There is no neutral way to use this word, which is the whole charm of it." },
        { id: "ru-u116l4-maloveroyatnyy", type: "vocab", front: "маловероятный", reading: "maloveroyatnyy", meaning: "improbable", accept: ["with little chance of happening", "not very likely to occur", "of low probability"], example: { jp: "Маловероятный случай, но готовиться к нему всё равно надо.", en: "An unlikely case, but one still has to prepare for it." }, drill: { jp: "Это очень маловероятный случай", en: "This is a very unlikely case" }, hint: "ma-la-ve-ra-YAT-nyy — stress on YAT, and both unstressed о reduce to a. A transparent compound of мало «little» and `вероятно` (u47, «in all likelihood»), so you can read it unaided. ⚠️ Not the same claim as `вряд ли` (u64), which is a speaker's doubt: маловероятный is a property of the EVENT, and it is the word a risk report uses." },
        { id: "ru-u116l4-nemyslimyy", type: "vocab", front: "немыслимый", reading: "nemyslimyy", meaning: "unthinkable", accept: ["inconceivable", "beyond imagining", "out of the question"], example: { jp: "Немыслимый шум стоял всю ночь, и спать было нельзя.", en: "An unthinkable noise went on all night, and it was impossible to sleep." }, drill: { jp: "Немыслимый шум стоял всю ночь", en: "An unthinkable noise went on all night" }, hint: "ne-MYS-li-myy — stress on MYS. Built on `мысль` (u52, «a thought») with не- + -имый: «un-think-able». ⚠️ TWO USES: morally out of the question («немыслимо!»), and simply ENORMOUS — «немыслимые деньги», an unthinkable amount of money. The second is the commoner one in speech and English rarely allows it." },
      ],
    },
  ],
};
