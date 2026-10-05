// RU Unit 77 — Душевное здоровье ("Mental health") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u74–u86). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, ru/unit74.js §1–§5.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Health and wellbeing" AND THE BODY IS SPENT TWICE.
// u20 Тело и здоровье (голова · глаз · рука · нога · болеть · температура ·
// здоровье · лекарство · таблетка · простуда) and u53 Болезнь и лечение (шея ·
// горло · кость · мышца · кровь · мозг · нерв · желудок · печень · болезнь ·
// кашель · рана · операция · рецепт) are 48 cards of physical health. What
// neither touches is the MIND: a learner could describe a cough and a liver and
// had no word for anxiety, a breakdown, despair or a psychologist. That is this
// unit's 24, and it is the narrowing the crew brief measured.
//
// ⚠️ REFUSED on unit1.js §D — the taught word gives them away, and the first two
// were on the brief's own "free" list, which is a FRONT probe and cannot see a
// lexeme:
//   `надежда` (против `надеяться` u28l2) · `терпеть` (против `терпение` u56l2) ·
//   `грусть` (против `грустный` u28l1) · `стыд` (против `стыдно` u34l2) ·
//   `злость` (против `злой` u28l1) · `усталость` (против `устал` u7l3) ·
//   `успокаивать` (против `спокойный` u28l1) · `расслабляться` (против `слабый`
//   u20l4) · `поддержка` (против `держать` u57l1) · `сочувствие` (против
//   `чувство` u28l3) · `зависимость` (против `зависеть` u46l4) · `самооценка`
//   (против `оценка` u25l2) · `бессонница` (без + `сон` u29l4, and u38's header
//   bars без+X) · `обида` (против `обидно` u34l2) · `уверенность` (против
//   `уверен` u24l2) · `спокойствие` (против `спокойный`).
// ⚠️ TAKEN and not available: `давление` (u54l2 — it is the PHYSICS word, which
//   is why «давление на работе» cannot be carded here) · `настроение` (u28l3) ·
//   `страх` (u28l3) · `забота` (u56l1) · `внимание` (u12l3) · `одиночество`
//   (u56l4) · `доверие` (u56l4).
// ⚠️ TWO KEPT WITH REASONS: `переживать` is prefixed from `жить` (u4l2), and
//   unit31.js §3 sets the precedent that a PREFIXED derivation is allowed where
//   не+X is not — and «to take a thing hard» is not reachable from «to live».
//   `вина` is kept and `обвинять` «to accuse» is therefore NOT carded anywhere in
//   this block, to keep the вин- root at one.
//
// ND NOTE, since the subject is the app's own audience: every example here is
// written in the register a person uses about themselves, not a diagnosis
// handed down. The cards name the states; none of them judges one.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT77 = {
  id: "ru-u77",
  lang: "ru",
  title: "Душевное здоровье",
  order: 77,
  stage: "b1",
  lessons: [
    {
      id: "ru-u77l1",
      unit: 77,
      lesson: 1,
      title: "Naming the low states",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that someone has depression, is under stress, feels anxiety, a heavy longing or despair, and that they are suffering.",
      items: [
        { id: "ru-u77l1-depressiya", type: "vocab", front: "депрессия", reading: "depressiya", meaning: "depression", accept: ["clinical depression", "a depression", "low mood as an illness"], example: { jp: "У него депрессия уже второй год, хотя на работе об этом никто не знает.", en: "He has had depression for a second year now, although nobody at work knows about it." }, drill: { jp: "У него депрессия второй год", en: "He has had depression for a second year" }, hint: "de-PRE-ssi-ya — stress on PRE, and the сс is held. FEMININE (-я). ⚠️ Russian says «У меня депрессия» with у + the genitive, exactly like «у меня простуда» from unit 20 — the illness frame, not «я депрессия»." },
        { id: "ru-u77l1-stress", type: "vocab", front: "стресс", reading: "stress", meaning: "strain on the nerves", accept: ["stress", "the stress", "being under pressure"], example: { jp: "Если стресс продолжается месяцами, голова начинает болеть без причины.", en: "If stress goes on for months, your head begins to ache for no reason." }, drill: { jp: "Это очень сильный стресс", en: "That is very severe stress" }, hint: "STRESS — one syllable, and the сс at the end is held a beat. MASCULINE. ⚠️ GLOSSED «strain on the nerves» rather than «stress»: the English word normalises to this card's own reading, which `produceIsFreePass` would hand the learner for free (unit1.js §9). ⚠️ `давление` cannot be used for this: unit 54 cards it as the PHYSICS word, pressure in a pipe." },
        { id: "ru-u77l1-trevoga", type: "vocab", front: "тревога", reading: "trevoga", meaning: "anxiety", accept: ["alarm", "unease", "an anxious state"], example: { jp: "Тревога у него сильнее вечером, и объяснить это он не может.", en: "His anxiety is stronger in the evening, and he cannot explain it." }, drill: { jp: "Вечером тревога становится сильнее", en: "In the evening the anxiety gets stronger" }, hint: "tre-VO-ga — stress on VO. FEMININE (-а). ⚠️ Second sense, and it is the older one: an alarm — «пожарная тревога». беспокоиться from unit 35 is the verb «to worry»; тревога is the state itself." },
        { id: "ru-u77l1-toska", type: "vocab", front: "тоска", reading: "toska", meaning: "melancholy", accept: ["a heavy longing", "yearning", "an aching sadness"], example: { jp: "Тоска по дому у неё была такая, что она не хотела даже выходных.", en: "Her longing for home was such that she did not even want days off." }, drill: { jp: "Это была настоящая тоска", en: "That was real melancholy" }, hint: "tas-KA — stress on the last syllable, and the о reduces to a. FEMININE (-а). ⚠️ The word Russians say cannot be translated, and it half-can: a heavy ache with no object, or with one named by по + the dative — «тоска по дому», homesickness. грустный from unit 28 is ordinary sadness." },
        { id: "ru-u77l1-otchayanie", type: "vocab", front: "отчаяние", reading: "otchayanie", meaning: "despair", accept: ["desperation", "hopelessness", "being in despair"], example: { jp: "В отчаянии он написал старому другу, которого не видел десять лет.", en: "In despair he wrote to an old friend he had not seen for ten years." }, drill: { jp: "Это было полное отчаяние", en: "That was complete despair" }, hint: "at-CHA-ya-ni-ye — stress on CHA, and the о reduces to a. NEUTER (-ие). ⚠️ Most often in the frame «в отчАянии», in despair. Built on чаять, to expect — a verb no modern Russian uses alone, so nothing gives it away." },
        { id: "ru-u77l1-stradat", type: "vocab", front: "страдать", reading: "stradat", meaning: "to suffer", accept: ["to be in distress", "to suffer from something", "to be suffering"], example: { jp: "Страдать молча он умеет, а говорить об этом почти не может.", en: "He is good at suffering in silence and almost unable to talk about it." }, drill: { jp: "Он не хочет страдать молча", en: "He does not want to suffer in silence" }, hint: "stra-DAT — stress on the last syllable. Imperfective infinitive. ⚠️ Takes от + the genitive for the cause: «страдать от боли». Different root from страх and страшно (unit 28, unit 34) — страд-, not страх-, and the two never meet." },
      ],
    },
    {
      id: "ru-u77l2",
      unit: 77,
      lesson: 2,
      title: "When it tips over",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe tension, a panic, hysterics, a breakdown and apathy, and say that someone is seeing a psychologist.",
      items: [
        { id: "ru-u77l2-napryazhenie", type: "vocab", front: "напряжение", reading: "napryazhenie", meaning: "tension", accept: ["strain", "being tense", "nervous tension"], example: { jp: "Напряжение в семье чувствовали все, хотя никто ничего не говорил.", en: "Everyone felt the tension in the family, although nobody said anything." }, drill: { jp: "Напряжение чувствовали все", en: "Everyone felt the tension" }, hint: "na-prya-ZHE-ni-ye — stress on ZHE. NEUTER (-ие). ⚠️ Also the electrical sense, voltage — «высокое напряжение» on a warning sign. From напрягать, to strain, which is not taught, so nothing gives it away." },
        { id: "ru-u77l2-panika", type: "vocab", front: "паника", reading: "panika", meaning: "panic", accept: ["a panic", "the panic", "a state of panic"], example: { jp: "Паника началась не сразу, а только когда стало совсем темно.", en: "The panic began not at once but only when it got completely dark." }, drill: { jp: "Паника началась не сразу", en: "The panic did not begin at once" }, hint: "PA-ni-ka — stress on the first syllable. FEMININE (-а). ⚠️ Russian says «в панике» for a person in it and «началась паника» for a crowd. The verb паниковать exists and is not taught." },
        { id: "ru-u77l2-isterika", type: "vocab", front: "истерика", reading: "isterika", meaning: "hysterics", accept: ["a fit of hysterics", "a meltdown", "an uncontrolled outburst"], example: { jp: "После такого дня истерика почти всегда заканчивается слезами.", en: "After a day like that hysterics almost always end in tears." }, drill: { jp: "Это была настоящая истерика", en: "That was real hysterics" }, hint: "is-TE-ri-ka — stress on TE. FEMININE (-а). ⚠️ Not a clinical word in Russian and not a kind one: it describes a loss of control, so it is what a person says about their own worst evening, not a label for someone else." },
        { id: "ru-u77l2-sryv", type: "vocab", front: "срыв", reading: "sryv", meaning: "a breakdown", accept: ["a collapse", "a nervous breakdown", "a relapse"], example: { jp: "Срыв был в январе, и после него он почти месяц не работал.", en: "The breakdown was in January, and after it he did not work for almost a month." }, drill: { jp: "Срыв был в январе", en: "The breakdown was in January" }, hint: "SRYV — one syllable, and ⚠️ the ы is the hard vowel from unit 5; срыв is not «sreev». MASCULINE. From срывать, to tear off — the moment something that was holding gives way. Also of a plan: «срыв сроков», a missed deadline." },
        { id: "ru-u77l2-apatiya", type: "vocab", front: "апатия", reading: "apatiya", meaning: "apathy", accept: ["listlessness", "indifference as a state", "having no energy for anything"], example: { jp: "Апатия хуже тревоги: когда ничего не нужно, даже встать трудно.", en: "Apathy is worse than anxiety: when you need nothing, even getting up is hard." }, drill: { jp: "Апатия хуже тревоги", en: "Apathy is worse than anxiety" }, hint: "a-PA-ti-ya — stress on PA. FEMININE (-я). ⚠️ `равнодушие` «indifference» is NOT carded: it is built on ровно (unit 37) and душа (unit 28) at once. апатия is the state, not the attitude." },
        { id: "ru-u77l2-psikholog", type: "vocab", front: "психолог", reading: "psikholog", meaning: "a psychologist", accept: ["a therapist", "the psychologist", "a counsellor"], example: { jp: "К психологу он ходил целый год, и об этом знала только сестра.", en: "He went to a psychologist for a whole year, and only his sister knew about it." }, drill: { jp: "Это очень хороший психолог", en: "That is a very good psychologist" }, hint: "psi-KHO-lak — stress on KHO, and the final г goes quiet, so it comes out -lak. MASCULINE. ⚠️ The drill uses the DATIVE психолОгу, because Russian goes К a specialist — unit 34's case. врач from unit 2 is a medical doctor." },
      ],
    },
    {
      id: "ru-u77l3",
      unit: 77,
      lesson: 3,
      title: "The feelings you carry",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name guilt, wrath, hatred, irritation and remorse, and say that someone is taking something hard.",
      items: [
        { id: "ru-u77l3-vina", type: "vocab", front: "вина", reading: "vina", meaning: "guilt", accept: ["blame", "fault", "being at fault"], example: { jp: "Вина осталась, хотя все давно сказали ему, что он ничего не мог сделать.", en: "The guilt stayed, although everyone told him long ago that he could have done nothing." }, drill: { jp: "Вина осталась у него надолго", en: "The guilt stayed with him for a long time" }, hint: "vi-NA — stress on the last syllable. FEMININE (-а). ⚠️ Both the FEELING and the legal FACT: «чувство вины» is guilt you carry, «его вина» is that he did it. Russian uses one word; English splits guilt and blame. `обвинять` «to accuse» is deliberately not carded in this course, to keep this root at one." },
        { id: "ru-u77l3-gnev", type: "vocab", front: "гнев", reading: "gnev", meaning: "wrath", accept: ["rage", "fury", "great anger"], example: { jp: "Гнев был у него минуту, а стыдно ему было ещё неделю.", en: "His wrath lasted a minute, and he was ashamed for another week." }, drill: { jp: "Гнев был только минуту", en: "The wrath lasted only a minute" }, hint: "GNEV — one syllable, and the в goes quiet, so it comes out GNEF. MASCULINE. ⚠️ Heavier and more bookish than English anger — closer to wrath. The everyday adjective is злой from unit 28, which is why `злость` is not carded." },
        { id: "ru-u77l3-nenavist", type: "vocab", front: "ненависть", reading: "nenavist", meaning: "hatred", accept: ["hate", "loathing", "deep dislike"], example: { jp: "Ненависть к этой работе он чувствовал каждое утро, но молчал.", en: "He felt hatred for that job every morning, but said nothing." }, drill: { jp: "Это была чистая ненависть", en: "That was pure hatred" }, hint: "NE-na-vist — stress on the first syllable. ⚠️ FEMININE despite the -ь. Takes к + the dative for its object: «ненависть к работе». It opens with не-, but it is not a не+X formation — there is no «навись»." },
        { id: "ru-u77l3-razdrazhenie", type: "vocab", front: "раздражение", reading: "razdrazhenie", meaning: "irritation", accept: ["annoyance", "being irritated", "a rash on the skin"], example: { jp: "Раздражение растёт от шума, от света, от любого вопроса.", en: "Irritation grows out of noise, light, any question at all." }, drill: { jp: "Раздражение растёт от шума", en: "Irritation grows out of noise" }, hint: "raz-dra-ZHE-ni-ye — stress on ZHE. NEUTER (-ие). ⚠️ TWO SENSES AND BOTH ARE COMMON: annoyance, and a skin rash — «раздражение на коже». From раздражать, to annoy, which is not taught." },
        { id: "ru-u77l3-raskayanie", type: "vocab", front: "раскаяние", reading: "raskayanie", meaning: "remorse", accept: ["repentance", "regret for what you did", "contrition"], example: { jp: "Раскаяние было поздним, зато он сам о нём рассказал.", en: "The remorse was late, but he spoke about it himself." }, drill: { jp: "Раскаяние у него было поздним", en: "His remorse was late" }, hint: "ras-KA-ya-ni-ye — stress on KA. NEUTER (-ие). ⚠️ Different from вина: вина is the state of being guilty, раскаяние is wishing you had not. Same чаять root as отчаяние in lesson 1, which no learner would spot — the hint on each says so." },
        { id: "ru-u77l3-perezhivat", type: "vocab", front: "переживать", reading: "perezhivat", meaning: "to take something hard", accept: ["to be upset", "to worry about something", "to live through"], example: { jp: "Переживать он начал ещё в школе, и это осталось.", en: "He began taking things hard back at school, and that stayed." }, drill: { jp: "Он начал переживать очень рано", en: "He began taking things hard very early" }, hint: "pe-re-zhi-VAT — stress on the last syllable. Imperfective infinitive. ⚠️ Prefixed from жить (unit 4) — literally to live THROUGH something — and allowed on unit31.js §3's precedent that a prefix other than не- is a new lexeme. In speech it is the everyday «don't take it so hard»: «не переживай»." },
      ],
    },
    {
      id: "ru-u77l4",
      unit: 77,
      lesson: 4,
      title: "What helps",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about therapy, comforting someone, struggling with something and overcoming it, name a person who is your mainstay, and say that something takes your mind off it.",
      items: [
        { id: "ru-u77l4-terapiya", type: "vocab", front: "терапия", reading: "terapiya", meaning: "therapy", accept: ["treatment", "a course of therapy", "the therapy"], example: { jp: "Терапия помогает медленно, и это нужно знать заранее.", en: "Therapy helps slowly, and that needs to be known in advance." }, drill: { jp: "Терапия помогает очень медленно", en: "Therapy helps very slowly" }, hint: "te-ra-PI-ya — stress on PI. FEMININE (-я). ⚠️ Covers both talking therapy and medical treatment; «лечение» would be the general word but is not carded, because unit 35 teaches лечиться." },
        { id: "ru-u77l4-uteshat", type: "vocab", front: "утешать", reading: "uteshat", meaning: "to comfort", accept: ["to console", "to soothe someone", "to be a comfort to"], example: { jp: "Утешать он умеет молча — просто сидит рядом, пока не станет лучше.", en: "He knows how to comfort in silence — he just sits beside you until it gets better." }, drill: { jp: "Он умеет утешать молча", en: "He knows how to comfort in silence" }, hint: "u-te-SHAT — stress on the last syllable. Imperfective infinitive; the perfective is утешить. ⚠️ Not the same as помогать (unit 20): помогать changes the situation, утешать changes how it feels." },
        { id: "ru-u77l4-borotsya", type: "vocab", front: "бороться", reading: "borotsya", meaning: "to struggle", accept: ["to fight against something", "to wrestle with", "to battle"], example: { jp: "Бороться с тревогой каждый день трудно, зато она становится меньше.", en: "Struggling with anxiety every day is hard, but it gets smaller." }, drill: { jp: "Трудно бороться с тревогой", en: "It is hard to struggle with anxiety" }, hint: "ba-RO-tsya — stress on RO, and the о reduces to a. Imperfective infinitive, reflexive -ся (unit 35's class). ⚠️ Takes с + the INSTRUMENTAL for what you fight: «бороться с болезнью» — unit 32's case. Different root from бой, which this course does not teach." },
        { id: "ru-u77l4-preodolevat", type: "vocab", front: "преодолевать", reading: "preodolevat", meaning: "to overcome", accept: ["to get over something", "to surmount", "to get past"], example: { jp: "Преодолевать такое нужно самому, даже если рядом есть друзья.", en: "Something like that has to be overcome yourself, even if there are friends beside you." }, drill: { jp: "Это нужно преодолевать самому", en: "That has to be overcome yourself" }, hint: "pre-a-da-le-VAT — five syllables, stress on the last, and both о reduce to a. Imperfective infinitive; the perfective is преодолеть. Of a fear, a distance or an illness — anything you get past by effort." },
        { id: "ru-u77l4-opora", type: "vocab", front: "опора", reading: "opora", meaning: "a mainstay", accept: ["a support", "a prop", "someone you lean on"], example: { jp: "Для матери он был главной опорой, и об этом она говорила всем.", en: "For his mother he was the main mainstay, and she told everyone so." }, drill: { jp: "Опора у него только одна", en: "He has only one mainstay" }, hint: "a-PO-ra — stress on PO, and the о reduces to a. FEMININE (-а). Both the physical prop under a bridge and the person who holds a family up. ⚠️ `поддержка` «support» is NOT carded: it is built on держать from unit 57." },
        { id: "ru-u77l4-otvlekat", type: "vocab", front: "отвлекать", reading: "otvlekat", meaning: "to distract", accept: ["to take someone's mind off", "to draw attention away", "to divert"], example: { jp: "Музыка отвлекает лучше, чем разговор, если думать уже трудно.", en: "Music distracts better than conversation when thinking has become hard." }, drill: { jp: "Музыка может отвлекать лучше всего", en: "Music can distract best of all" }, hint: "at-vle-KAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive; the perfective is отвлечь. ⚠️ Two directions in one word: отвлекать кого-то is to interrupt them, отвлекаться is to take your own mind off something. The reflexive is the useful one here." },
      ],
    },
  ],
};
