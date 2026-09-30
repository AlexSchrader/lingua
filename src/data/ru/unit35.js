// RU Unit 35 — Возвратные глаголы ("Reflexive verbs") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Conventions: ru/unit1.js §1–§10 and §A–§D, plus ru/unit31.js §1–§7 for the A2
// band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Health and the body" AND A1 ALREADY WROTE IT — u20
// Тело и здоровье, the whole unit, with its own header about рука meaning both
// hand and arm. Rethemed to the -ся verb class, with health kept as the carrier
// in l1 (лечиться · простудиться). unit31.js §6 has the table.
//
// WHY A WHOLE UNIT. A1 taught EIGHT reflexives one at a time and never the class:
// смеяться · бояться · улыбаться · надеяться (u28), просыпаться · умываться ·
// ложиться (u29), знакомиться (u8). A learner therefore had eight verbs that
// happened to end -ся and no idea that -ся is a shrunken себя, that it flips a
// transitive verb into an intransitive one, or that each -ся verb governs a case
// of its own. That is what the four lessons do:
//   l1  -ся meaning "to oneself" — the original job
//   l2  -ся meaning "it happens by itself" — the intransitive flip, where the
//       thing is the subject rather than the object
//   l3  -ся verbs that govern a PREPOSITION AND A CASE, which is the half no A1
//       card could show: соглашаться с + instrumental, отказываться от +
//       genitive, сомневаться в + prepositional
//   l4  -ся for how something turns out
//
// ★ A REFINEMENT TO unit1.js §D, AND IT IS A CREW-LEAD DECISION RATHER THAN A
//   CONVENIENCE. Applied literally, §D's lexeme rule makes this unit impossible:
//   a -ся verb is BY DEFINITION derived from a non-reflexive verb, so every
//   single card here would be "the same root as something taught" and be refused.
//   §D was written about NOUN/VERB pairs where the two are one lexeme in two word
//   classes — работа/работать, разговор/говорить — and there the derived word
//   genuinely tells the learner nothing new.
//   THE REFINED RULE, which binds blocks 2 and 3 from here on:
//     -ся derivation is NOT a §D duplicate when the reflexive has DIFFERENT
//     GOVERNMENT or a DIFFERENT English gloss. учить "to teach" / учиться "to
//     study" are opposite jobs on one root; находить "to find" / находиться "to
//     be located" likewise.
//   THE GUARD THAT STAYS: if the reflexive's gloss would NORMALISE onto its
//   base's gloss, it is still refused. That is why `меняться` is NOT carded —
//   u24 менять is already "to change" and both would normalise to "change".
//
// ⚠️ REFUSED IN THIS UNIT, with reasons, so no later block spends a slot on it:
//   `меняться` — the guard above. u24 менять is "to change" and so is this.
//   `чувствовать` — vs u28 `чувство` ("a feeling"). Not a -ся verb at all (it is
//        чувствовать СЕБЯ), so the refinement above does not cover it, and as a
//        plain noun/verb pair §D refuses it. Dropped rather than argued for.
//   `готовиться` — vs u29 `готовить` and u24 `готов`, and unlike учиться it means
//        the same thing as its base plus a reflexive.
//   `случиться` — vs u24 `случай`, which u30's header already lists as an avoided
//        neighbour. Still avoided.
//   `развиваться` · `бороться` · `улучшаться` — all clean and all genuinely free;
//        they are LEFT FOR BLOCK 2 rather than refused, because 24 cards was
//        already full. A measurement taken 2026-09-29, not a promise.
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT — hand-checked against `normalizeMeaning`,
// because six A1 fronts sit in this semantic field:
//   `торопиться` "to be in a hurry" vs u29 спешить "to hurry" — the two normalise
//        to different strings, though спешить's ACCEPT list carries "to be in a
//        hurry", which is leniency and not a second prompt.
//   `купаться` "to have a swim" vs u27 плавать "to swim".
//   `останавливаться` "to come to a stop" vs u14 остановка "a bus stop".
//   `называться` "to be called" vs u8 звать "to call by name".
//   `простудиться` "to catch a cold" vs u20 простуда "a head cold".
//   `получиться` "to work out" vs u23 получать "to receive" AND u31 получить "to
//        get hold of" — three verbs on one root, all three distinct.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT35 = {
  id: "ru-u35",
  lang: "ru",
  title: "Возвратные глаголы",
  order: 35,
  stage: "a2",
  lessons: [
    {
      id: "ru-u35l1",
      unit: 35,
      lesson: 1,
      title: "Doing it to yourself",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about getting dressed, getting ready, hurrying and falling ill, using -ся to turn an action back on the person doing it.",
      items: [
        { id: "ru-u35l1-odevatsya", type: "vocab", front: "одеваться", reading: "odevatsya", meaning: "to get dressed", accept: ["to dress yourself", "to put clothes on", "to dress"], example: { jp: "Зимой я одеваюсь очень тепло.", en: "In winter I dress very warmly." }, drill: { jp: "Он любит одеваться тепло", en: "He likes to dress warmly" }, hint: "a-de-VAT-sya — stress on VAT. ★ THE WHOLE PATTERN IN ONE PAIR: одевать is to dress someone else, одеваться is to dress YOURSELF. The -ся is a shrunken себя, «oneself», welded to the end of the verb." },
        { id: "ru-u35l1-sobiratsya", type: "vocab", front: "собираться", reading: "sobiratsya", meaning: "to get ready to go", accept: ["to be about to leave", "to gather your things", "to gather"], example: { jp: "Мы собираемся в театр каждую субботу.", en: "We get ready to go to the theatre every Saturday." }, drill: { jp: "Я хочу собираться быстро", en: "I want to get ready quickly" }, hint: "sa-bi-RAT-sya — stress on RAT. To gather your things and be on the point of leaving. Of people it also means simply «to gather»: люди собираются на площади." },
        { id: "ru-u35l1-toropitsya", type: "vocab", front: "торопиться", reading: "toropitsya", meaning: "to be in a hurry", accept: ["to rush yourself", "to be pressed for time", "to make haste"], example: { jp: "Утром я всегда тороплюсь на работу.", en: "In the morning I am always in a hurry to get to work." }, drill: { jp: "Я не хочу торопиться сегодня", en: "I do not want to hurry today" }, hint: "ta-ra-PIT-sya — stress on PIT, and both о reduce to a. Very close to спешить from unit 29: спешить is to hurry, торопиться is to be rushing yourself along. Both are everyday." },
        { id: "ru-u35l1-lechitsya", type: "vocab", front: "лечиться", reading: "lechitsya", meaning: "to have treatment", accept: ["to be under treatment", "to be treated", "to get better under a doctor"], example: { jp: "Моя бабушка лечится в больнице.", en: "My grandmother is having treatment in hospital." }, drill: { jp: "Он хочет лечиться дома", en: "He wants to have his treatment at home" }, hint: "le-CHIT-sya — stress on CHIT. лечить is to treat somebody; лечиться is to be the one under treatment. Same root as лекарство from unit 20." },
        { id: "ru-u35l1-prostuditsya", type: "vocab", front: "простудиться", reading: "prostuditsya", meaning: "to catch a cold", accept: ["to come down with a cold", "to get a chill", "to catch cold"], example: { jp: "Осенью легко простудиться без шапки.", en: "In autumn it is easy to catch a cold without a hat." }, drill: { jp: "Можно простудиться без куртки", en: "One can catch a cold without a jacket" }, hint: "pra-stu-DIT-sya — stress on DIT. The verb behind простуда, the head cold from unit 20. It is perfective: one cold, caught once. Note осенью — a bare instrumental for «in autumn»." },
        { id: "ru-u35l1-kupatsya", type: "vocab", front: "купаться", reading: "kupatsya", meaning: "to have a swim", accept: ["to bathe", "to go in the water", "to take a dip"], example: { jp: "Летом мы купаемся в море каждый день.", en: "In summer we swim in the sea every day." }, drill: { jp: "Здесь можно купаться", en: "One may swim here" }, hint: "ku-PAT-sya — stress on PAT. Where плавать from unit 27 is the SKILL of swimming, купаться is being in the water for the pleasure of it." },
      ],
    },
    {
      id: "ru-u35l2",
      unit: 35,
      lesson: 2,
      title: "When it happens by itself",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that something starts, ends, carries on, stops or turns up of its own accord, making the thing the subject instead of the object.",
      items: [
        { id: "ru-u35l2-nachinatsya", type: "vocab", front: "начинаться", reading: "nachinatsya", meaning: "to begin", accept: ["to start", "to get under way", "to open"], example: { jp: "Наш урок начинается в девять часов.", en: "Our lesson begins at nine o'clock." }, drill: { jp: "Урок должен начинаться сейчас", en: "The lesson should begin now" }, hint: "na-chi-NAT-sya — stress on NAT. ★ -ся FOR SOMETHING THAT HAPPENS OF ITSELF. начинать is to begin something; начинаться is when the thing begins on its own. A lesson начинается, a person начинает." },
        { id: "ru-u35l2-zakanchivatsya", type: "vocab", front: "заканчиваться", reading: "zakanchivatsya", meaning: "to come to an end", accept: ["to finish", "to be over", "to run out"], example: { jp: "Наш урок заканчивается в три часа.", en: "Our lesson ends at three o'clock." }, drill: { jp: "Фильм должен заканчиваться скоро", en: "The film should end soon" }, hint: "za-KAN-chi-vat-sya — five syllables, stress on KAN. The exact mirror of начинаться. Notice that both take в plus the accusative for a clock time — в три часа." },
        { id: "ru-u35l2-prodolzhatsya", type: "vocab", front: "продолжаться", reading: "prodolzhatsya", meaning: "to go on", accept: ["to carry on", "to last", "to continue"], example: { jp: "Этот дождь продолжается уже два часа.", en: "This rain has been going on for two hours already." }, drill: { jp: "Этот концерт должен продолжаться долго", en: "This concert should go on for a long time" }, hint: "pra-dal-ZHAT-sya — stress on ZHAT. Something carries on by itself: дождь продолжается. For «to carry on DOING something» Russian drops the -ся: продолжать работать." },
        { id: "ru-u35l2-ostanavlivatsya", type: "vocab", front: "останавливаться", reading: "ostanavlivatsya", meaning: "to come to a stop", accept: ["to stop", "to halt", "to pull up"], example: { jp: "Этот автобус останавливается около нашего дома.", en: "This bus stops close to our house." }, drill: { jp: "Здесь автобус должен останавливаться", en: "The bus should stop here" }, hint: "a-sta-NAV-li-vat-sya — six syllables, stress on NAV. The bus stops itself; a driver останавливает the bus. остановка from unit 14 is the place where it does it." },
        { id: "ru-u35l2-poyavlyatsya", type: "vocab", front: "появляться", reading: "poyavlyatsya", meaning: "to appear", accept: ["to turn up", "to come into view", "to show up"], example: { jp: "Весной птицы появляются в нашем саду.", en: "In spring birds appear in our garden." }, drill: { jp: "Такие птицы должны появляться весной", en: "Such birds should appear in spring" }, hint: "pa-yav-LYAT-sya — stress on LYAT. To come into view or turn up. Its non-reflexive form barely exists in speech, so this verb lives in its -ся shape." },
        { id: "ru-u35l2-nazyvatsya", type: "vocab", front: "называться", reading: "nazyvatsya", meaning: "to be called", accept: ["to go by the name of", "to be named", "to have the name"], example: { jp: "Как называется этот новый магазин?", en: "What is this new shop called?" }, drill: { jp: "Как должен называться наш клуб", en: "What should our club be called" }, hint: "na-zy-VAT-sya — stress on VAT. ★ FOR THINGS, NEVER PEOPLE: a shop называется, but a person's name uses звать from unit 8 — меня зовут. «Меня называется» is not Russian." },
      ],
    },
    {
      id: "ru-u35l3",
      unit: 35,
      lesson: 3,
      title: "Agreeing, refusing, worrying",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Agree with someone, turn something down, apologise and say what you doubt — each with the preposition and case its verb demands.",
      items: [
        { id: "ru-u35l3-soglashatsya", type: "vocab", front: "соглашаться", reading: "soglashatsya", meaning: "to agree", accept: ["to go along with", "to consent", "to say yes"], example: { jp: "Я всегда соглашаюсь с моей сестрой.", en: "I always agree with my sister." }, drill: { jp: "Он не хочет соглашаться с нами", en: "He does not want to agree with us" }, hint: "sa-gla-SHAT-sya — stress on SHAT. ★ с plus the INSTRUMENTAL of whoever you agree with: соглашаться с сестрОЙ, с намИ. Unit 32's case doing new work." },
        { id: "ru-u35l3-otkazyvatsya", type: "vocab", front: "отказываться", reading: "otkazyvatsya", meaning: "to refuse", accept: ["to turn down", "to decline", "to say no"], example: { jp: "Она отказывается от этой работы.", en: "She is turning down this job." }, drill: { jp: "Я не хочу отказываться от этого", en: "I do not want to turn this down" }, hint: "at-KA-zy-vat-sya — stress on KA. ★ от plus the GENITIVE of what you refuse: отказываться от работЫ. Unit 33's preposition doing new work." },
        { id: "ru-u35l3-izvinyatsya", type: "vocab", front: "извиняться", reading: "izvinyatsya", meaning: "to apologise", accept: ["to say sorry", "to beg pardon", "to make an apology"], example: { jp: "Он часто извиняется, но ничего не меняет.", en: "He often apologises, but changes nothing." }, drill: { jp: "Он не хочет извиняться", en: "He does not want to apologise" }, hint: "iz-vi-NYAT-sya — stress on NYAT. The verb behind извините, the «excuse me» from unit 7. To apologise TO someone is извиняться перед кем — перед plus the instrumental." },
        { id: "ru-u35l3-staratsya", type: "vocab", front: "стараться", reading: "staratsya", meaning: "to try hard", accept: ["to make an effort", "to do your best", "to endeavour"], example: { jp: "Я стараюсь говорить по-русски каждый день.", en: "I try to speak Russian every day." }, drill: { jp: "Я хочу стараться каждый день", en: "I want to try hard every day" }, hint: "sta-RAT-sya — stress on RAT. To make an effort. It has no non-reflexive partner in real use, so learn it whole. ⚠️ Nothing whatever to do with старый, old, despite the look of it." },
        { id: "ru-u35l3-somnevatsya", type: "vocab", front: "сомневаться", reading: "somnevatsya", meaning: "to doubt", accept: ["to have doubts", "to be unsure", "to question"], example: { jp: "Я сомневаюсь в этом новом плане.", en: "I doubt this new plan." }, drill: { jp: "Можно сомневаться в этом", en: "One may doubt this" }, hint: "sam-ne-VAT-sya — stress on VAT. ★ в plus the PREPOSITIONAL of what you doubt: сомневаться в планЕ. Three verbs, three different prepositions — that is this lesson's point." },
        { id: "ru-u35l3-bespokoitsya", type: "vocab", front: "беспокоиться", reading: "bespokoitsya", meaning: "to worry", accept: ["to be anxious", "to fret", "to be concerned"], example: { jp: "Мама беспокоится, когда я работаю поздно.", en: "Mum worries when I work late." }, drill: { jp: "Я не хочу беспокоиться сегодня", en: "I do not want to worry today" }, hint: "bes-pa-KO-it-sya — stress on KO. Built from без plus покой, rest — literally «to be without rest». That is why it looks like спокойный from unit 28 turned inside out, because it is." },
      ],
    },
    {
      id: "ru-u35l4",
      unit: 35,
      lesson: 4,
      title: "How it turns out",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Report how something turned out, what was left over, and where a place is, using the -ся verbs of outcome.",
      items: [
        { id: "ru-u35l4-okazatsya", type: "vocab", front: "оказаться", reading: "okazatsya", meaning: "to turn out", accept: ["to prove to be", "to end up being", "to find yourself"], example: { jp: "Эта книга оказалась очень трудной.", en: "This book turned out to be very hard." }, drill: { jp: "Это должно оказаться хорошим планом", en: "This should turn out to be a good plan" }, hint: "a-ka-ZAT-sya — stress on ZAT. ★ What it turns out to BE goes into the INSTRUMENTAL: оказаться проблемОЙ. Its partner казаться (unit 32) is «to seem»; оказаться is «to prove to be»." },
        { id: "ru-u35l4-poluchitsya", type: "vocab", front: "получиться", reading: "poluchitsya", meaning: "to work out", accept: ["to come out right", "to succeed", "to come off"], example: { jp: "Этот суп получился очень хорошо.", en: "This soup turned out very well." }, drill: { jp: "Всё должно получиться хорошо", en: "Everything should work out well" }, hint: "pa-lu-CHIT-sya — stress on CHIT. Three verbs on one root and all three are taught: получать is to receive, получить is to get hold of, получиться is for a thing to come out right. «Получилось!» is what you say when it worked." },
        { id: "ru-u35l4-ostatsya", type: "vocab", front: "остаться", reading: "ostatsya", meaning: "to be left over", accept: ["to stay behind", "to remain", "to be left"], example: { jp: "У нас осталось только два яблока.", en: "We have only two apples left." }, drill: { jp: "Я хочу остаться дома", en: "I want to stay at home" }, hint: "a-STAT-sya — stress on STAT. Two senses and both are common: of a person, to stay behind; of a thing, to be left over. Its partner оставлять (unit 24) is to leave something behind." },
        { id: "ru-u35l4-vernutsya", type: "vocab", front: "вернуться", reading: "vernutsya", meaning: "to come back", accept: ["to return", "to get back", "to go back"], example: { jp: "Мой брат хочет вернуться в родной город.", en: "My brother wants to come back to his home town." }, drill: { jp: "Я хочу вернуться домой", en: "I want to come back home" }, hint: "ver-NUT-sya — stress on NUT. Perfective, so one single return, and it takes в plus the ACCUSATIVE of where you come back to: вернуться в город." },
        { id: "ru-u35l4-uchitsya", type: "vocab", front: "учиться", reading: "uchitsya", meaning: "to study", accept: ["to be a student", "to learn", "to be at school"], example: { jp: "Моя сестра учится в университете.", en: "My sister studies at the university." }, drill: { jp: "Она хочет учиться в университете", en: "She wants to study at the university" }, hint: "u-CHIT-sya — stress on CHIT. ★ THE PAIR THAT PROVES THE RULE: учить is to TEACH someone, учиться is to STUDY yourself. Same root, opposite jobs, and the -ся is the entire difference." },
        { id: "ru-u35l4-nakhoditsya", type: "vocab", front: "находиться", reading: "nakhoditsya", meaning: "to be located", accept: ["to be situated", "to stand", "to be found"], example: { jp: "Наш офис находится напротив вокзала.", en: "Our office is located opposite the station." }, drill: { jp: "Наш дом должен находиться здесь", en: "Our house should be located here" }, hint: "na-kha-DIT-sya — stress on DIT. For buildings and places: находиться is to be situated. Its partner находить (unit 24) is to find, and knowing one genuinely does not give you the other." },
      ],
    },
  ],
};
