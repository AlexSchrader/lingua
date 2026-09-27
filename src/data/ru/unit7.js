// RU Unit 7 — Приветствие ("Greeting") — A1
// The first unit AFTER the alphabet band. The learner can read any printed
// Russian word aloud (u1–u6) and now starts saying things to people. Everything
// here is a MOVE, not a topic: greet, thank, apologise, answer "how are you",
// and be pleasant about meeting someone.
// Conventions are declared in ru/unit1.js §1–§10 and bind every unit.
//
// REGISTER IS THE SPINE OF THIS UNIT. Russian forces a choice on every single
// greeting — ты or вы — and getting it wrong is the one beginner mistake a native
// actually notices. So every card that has a register says which in its hint:
//   informal (ты)  привет · пока · твой
//   formal   (вы)  здравствуйте · до свидания · извините · простите · ваш
// The alphabet band already taught привет and хорошо, so this unit deliberately
// does NOT re-card them — it adds the other half of each pair.
//
// ⚠️ EXAMPLE SCOPE HAS NO AUTOMATED GATE FOR RUSSIAN. `src/data/lint.js` runs
// `exampleScopeWarnings` only for a language whose fronts are >50% Latin
// (`isLatinLang`), and every Russian front is Cyrillic, so the check returns
// SILENTLY for ru. `scripts/scope-ru.mjs` is the substitute: run
// `node scripts/scope-ru.mjs 7,8,9,10` and it must report 0. Measured 2026-09-27
// on u7–u10: 0 out-of-scope tokens across 192 sentences.
//
// The FREE line below is read by that script and applies to THIS unit and every
// later one. It is a claim, not a convenience: each of these words appears in a
// u1–u6 example or drill already, so the learner has MET it.
// ⚠️ FIVE OF THESE TWELVE ARE NOW TAUGHT, so the line is an escape hatch for
// EARLIER UNITS ONLY and no longer a statement that nothing teaches them. Block 2 carded
// them in u19 Описание и союзы, 2026-09-27, which is what unit1.js §B asked for:
//     старый → u19l1 · красивый → u19l2 · но → u19l3 · каждый → u19l4
// They stay ON the FREE line because scope-ru.mjs reads it per-unit and u7–u18
// still use them before u19 teaches them; removing the line would flag ~20
// sentences that are correct. ⚠️ `на` IS NO LONGER EXPOSURE-ONLY — block 3 carded
// it at u23l2 as the в/на case-pair card, 2026-09-27 — and it stays on this line
// for the same per-unit reason: u7–u22 use it before u23 teaches it. `за` and `из`
// remain genuinely exposure-only prepositions (`из` governs the genitive, which
// unit1.js §5 keeps out of A1), and the four proper nouns are names, which no
// course cards.
// FREE: но | на | за | из | старый | красивый | каждый | Россия | Москва | Иван | Анна | Петров
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT7 = {
  id: "ru-u7",
  lang: "ru",
  title: "Приветствие",
  order: 7,
  stage: "a1",
  lessons: [
    {
      id: "ru-u7l1",
      unit: 7,
      lesson: 1,
      title: "Hello and goodbye, formal and not",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Greet a stranger and a friend with the right word, and end a conversation without being rude.",
      items: [
        { id: "ru-u7l1-zdravstvuyte", type: "vocab", front: "здравствуйте", reading: "zdravstvuyte", meaning: "hello (formal)", accept: ["hello", "good day", "how do you do"], example: { jp: "Здравствуйте! Вы наш врач?", en: "Hello! Are you our doctor?" }, drill: { jp: "Здравствуйте это наш врач", en: "Hello this is our doctor" }, hint: "zdra-STVUY-tye, stress in the middle — and the FIRST в is silent, so it comes out zdra-stvuy-tye with no v after zdra. FORMAL: anyone you would call вы. Its informal partner привет came with the alphabet." },
        { id: "ru-u7l1-poka", type: "vocab", front: "пока", reading: "poka", meaning: "bye", accept: ["goodbye (informal)", "see you", "so long", "cheerio"], example: { jp: "Пока! Мы ещё здесь, а ты уже дома.", en: "Bye! We are still here, and you are already home." }, drill: { jp: "Пока и до скорого", en: "Bye and see you soon" }, hint: "pa-KA, stress at the end. INFORMAL only — friends and family, never your boss. It also means while, which is why пока can start a sentence about time." },
        { id: "ru-u7l1-dosvidaniya", type: "vocab", front: "до свидания", reading: "dosvidaniya", meaning: "goodbye (formal)", accept: ["goodbye", "farewell", "good bye"], example: { jp: "До свидания! Ваш чай ещё здесь.", en: "Goodbye! Your tea is still here." }, drill: { jp: "Наш врач говорит до свидания", en: "Our doctor says goodbye" }, hint: "da svi-DA-ni-ya, stress on the DA of свидания. Literally until the meeting — Russian says goodbye by promising the next one. Always two words." },
        { id: "ru-u7l1-dobryy", type: "vocab", front: "добрый", reading: "dobryy", meaning: "kind", accept: ["good-hearted", "nice", "good (in a greeting)"], example: { jp: "Добрый день! Вы уже здесь?", en: "Good afternoon! Are you already here?" }, drill: { jp: "Наш врач очень добрый человек", en: "Our doctor is a very kind person" }, hint: "DO-bryy, stress first. It means kind — and it also opens three greetings: добрый день in the afternoon, доброе утро in the morning, добрый вечер in the evening. The ending agrees with the noun after it." },
        { id: "ru-u7l1-skoro", type: "vocab", front: "скоро", reading: "skoro", meaning: "soon", accept: ["shortly", "before long", "in a bit"], example: { jp: "Мама скоро дома, и я уже всё знаю.", en: "Mum will be home soon, and I already know everything." }, drill: { jp: "Наша мама скоро дома", en: "Our mum will be home soon" }, hint: "SKO-ra, stress first. Russian has no present-tense to be, so мама скоро дома is a whole sentence. До скорого — see you soon — is this word with an of-ending." },
        { id: "ru-u7l1-gospodin", type: "vocab", front: "господин", reading: "gospodin", meaning: "a mister", accept: ["mister", "sir", "Mr", "gentleman (as an address)"], example: { jp: "Господин Петров уже здесь.", en: "Mr Petrov is already here." }, drill: { jp: "Господин Петров наш врач", en: "Mr Petrov is our doctor" }, hint: "gas-pa-DIN, stress at the end. Masculine. Used with a SURNAME only — господин Петров, never господин Иван. Modern Russian keeps it for letters and for work." },
      ],
    },
    {
      id: "ru-u7l2",
      unit: 7,
      lesson: 2,
      title: "Please, thank you, sorry",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Thank someone, ask for something politely, and apologise when you have got it wrong.",
      items: [
        { id: "ru-u7l2-spasibo", type: "vocab", front: "спасибо", reading: "spasibo", meaning: "thank you", accept: ["thanks", "thank you very much", "ta"], example: { jp: "Спасибо, всё очень хорошо.", en: "Thank you, everything is very good." }, drill: { jp: "Спасибо вам за чай", en: "Thank you for the tea" }, hint: "spa-SI-ba, stress in the middle. Add большое for a warmer thank you very much. The person thanked takes the вам form: спасибо вам." },
        { id: "ru-u7l2-pozhaluysta", type: "vocab", front: "пожалуйста", reading: "pozhaluysta", meaning: "please", accept: ["you are welcome", "here you are", "go ahead"], example: { jp: "Ещё чай, пожалуйста.", en: "More tea, please." }, drill: { jp: "Пожалуйста говорите очень тихо", en: "Please speak very quietly" }, hint: "pa-ZHA-lus-ta — the й is swallowed in speech, so it lands as pa-ZHAL-sta. It does DOUBLE duty: please when you ask, and you are welcome when you answer спасибо." },
        { id: "ru-u7l2-izvinite", type: "vocab", front: "извините", reading: "izvinite", meaning: "excuse me", accept: ["sorry", "pardon me", "I beg your pardon"], example: { jp: "Извините, я вас не понимаю.", en: "Excuse me, I do not understand you." }, drill: { jp: "Извините это наше место", en: "Excuse me this is our place" }, hint: "iz-vi-NI-tye, stress on NI. FORMAL — that -те ending is the вы form. It covers both excuse me for getting attention and sorry for a small slip." },
        { id: "ru-u7l2-prostite", type: "vocab", front: "простите", reading: "prostite", meaning: "forgive me", accept: ["pardon", "I am sorry", "my apologies"], example: { jp: "Простите, это моя ошибка.", en: "Forgive me, that is my mistake." }, drill: { jp: "Простите нас пожалуйста", en: "Forgive us please" }, hint: "pras-TI-tye, stress on TI. A shade heavier than извините: простите asks forgiveness for something you actually did. Also the вы form." },
        { id: "ru-u7l2-zhal", type: "vocab", front: "жаль", reading: "zhal", meaning: "a pity", accept: ["a shame", "unfortunate", "too bad", "regrettable"], example: { jp: "Жаль, что вы уже дома.", en: "It is a pity that you are already home." }, drill: { jp: "Мне очень жаль", en: "I am very sorry" }, hint: "ZHAL, one syllable, ending soft. Russian says мне жаль — to me it is a pity — where English says I am sorry about it. Not an apology for something you did; that is простите." },
        { id: "ru-u7l2-nichego", type: "vocab", front: "ничего", reading: "nichego", meaning: "it is nothing", accept: ["nothing", "never mind", "that is all right", "no matter"], example: { jp: "Ничего, это не ошибка.", en: "Never mind, that is not a mistake." }, drill: { jp: "Здесь ничего не работает", en: "Nothing works here" }, hint: "ni-chi-VO — spelled with г and SAID with a v, exactly like его. Stress right at the end. It is the standard reply to простите: ничего, no harm done." },
      ],
    },
    {
      id: "ru-u7l3",
      unit: 7,
      lesson: 3,
      title: "How are you, and how you actually are",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask как дела and answer it honestly, anywhere from отлично down to плохо.",
      items: [
        { id: "ru-u7l3-kak", type: "vocab", front: "как", reading: "kak", meaning: "how", accept: ["as", "like", "in what way"], example: { jp: "Как дела? Спасибо, хорошо.", en: "How are things? Fine, thanks." }, drill: { jp: "Как это можно понимать", en: "How can this be understood" }, hint: "KAK. It carries the everyday how are you: как дела, literally how are the matters. It also means like — он говорит как врач, he speaks like a doctor." },
        { id: "ru-u7l3-plokho", type: "vocab", front: "плохо", reading: "plokho", meaning: "badly", accept: ["bad", "poorly", "not well"], example: { jp: "Сегодня я плохо слышу.", en: "Today I hear badly." }, drill: { jp: "Он очень плохо читает", en: "He reads very badly" }, hint: "PLO-kha, stress first. The mirror of хорошо, and like it, плохо answers как дела on its own. The ADJECTIVE плохой is a separate card, later in the course." },
        { id: "ru-u7l3-normalno", type: "vocab", front: "нормально", reading: "normalno", meaning: "fine", accept: ["normally", "okay", "all right", "so-so"], example: { jp: "Всё нормально, я вас хорошо слышу.", en: "Everything is fine, I can hear you well." }, drill: { jp: "Здесь всё нормально", en: "Everything is fine here" }, hint: "nar-MAL-na, stress in the middle. The honest middle answer to как дела — not good, not bad. Russians reach for it far more often than for хорошо." },
        { id: "ru-u7l3-otlichno", type: "vocab", front: "отлично", reading: "otlichno", meaning: "excellent", accept: ["great", "perfectly", "excellently", "very well"], example: { jp: "Отлично! Вы уже всё понимаете.", en: "Excellent! You already understand everything." }, drill: { jp: "Он говорит отлично", en: "He speaks excellently" }, hint: "at-LICH-na, stress in the middle. The top of the как дела scale: отлично, хорошо, нормально, плохо. At school it is also the top mark." },
        { id: "ru-u7l3-ustal", type: "vocab", front: "устал", reading: "ustal", meaning: "tired (masculine form)", accept: ["tired", "worn out", "exhausted"], example: { jp: "Я сегодня очень устал.", en: "I am very tired today." }, drill: { jp: "Он уже очень устал", en: "He is already very tired" }, hint: "us-TAL, stress at the end. A man says устал, a woman устала, more than one устали — the ending agrees with the speaker. No am needed: я устал is a whole sentence." },
        { id: "ru-u7l3-nemnogo", type: "vocab", front: "немного", reading: "nemnogo", meaning: "a little", accept: ["a bit", "a few", "slightly", "somewhat", "not much"], example: { jp: "Я ещё немного устал.", en: "I am still a little tired." }, drill: { jp: "Я немного устал сегодня", en: "I am a little tired today" }, hint: "ni-MNO-ga, stress in the middle. It softens whatever follows — немного устал, a little tired. Its opposite много, a lot, comes later in the course." },
      ],
    },
    {
      id: "ru-u7l4",
      unit: 7,
      lesson: 4,
      title: "Glad to meet you",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say you are glad to see someone, ask them a question politely, and wish them luck.",
      items: [
        { id: "ru-u7l4-rad", type: "vocab", front: "рад", reading: "rad", meaning: "glad (masculine form)", accept: ["glad", "pleased", "happy to"], example: { jp: "Рад вас видеть!", en: "Glad to see you!" }, drill: { jp: "Я очень рад вас видеть", en: "I am very glad to see you" }, hint: "RAT — one syllable, and the д goes quiet at the end. A man says рад, a woman рада, several people рады. Рад вас видеть is the polite glad to see you." },
        { id: "ru-u7l4-priyatno", type: "vocab", front: "приятно", reading: "priyatno", meaning: "pleasant", accept: ["nice", "pleasantly", "agreeable", "pleasing"], example: { jp: "Очень приятно! Моё имя Анна.", en: "Very nice to meet you! My name is Anna." }, drill: { jp: "Здесь очень приятно", en: "It is very pleasant here" }, hint: "pri-YAT-na, stress in the middle. Очень приятно on its own is what a Russian says on being introduced — literally it is very pleasant." },
        { id: "ru-u7l4-vmeste", type: "vocab", front: "вместе", reading: "vmeste", meaning: "together", accept: ["jointly", "as one", "along"], example: { jp: "Мы вместе читаем и вместе пишем.", en: "We read together and write together." }, drill: { jp: "Мы вместе работаем здесь", en: "We work here together" }, hint: "VMYES-tye, stress first. It answers how, not with whom: мы вместе. For together WITH someone Russian adds с — вместе с мамой." },
        { id: "ru-u7l4-vopros", type: "vocab", front: "вопрос", reading: "vopros", meaning: "a question", accept: ["question", "an issue", "a query"], example: { jp: "Можно вопрос? Конечно!", en: "May I ask a question? Of course!" }, drill: { jp: "Это очень трудный вопрос", en: "That is a very difficult question" }, hint: "va-PROS, stress at the end. Masculine. Можно вопрос? is the polite may I ask — literally is a question allowed." },
        { id: "ru-u7l4-otvet", type: "vocab", front: "ответ", reading: "otvet", meaning: "an answer", accept: ["answer", "a reply", "response"], example: { jp: "Вот ответ, и это правильно.", en: "Here is the answer, and that is right." }, drill: { jp: "Ваш ответ уже здесь", en: "Your answer is already here" }, hint: "at-VYET, stress at the end. Masculine. The pair вопрос — ответ is as fixed in Russian as question — answer is in English." },
        { id: "ru-u7l4-udacha", type: "vocab", front: "удача", reading: "udacha", meaning: "luck", accept: ["good luck", "fortune", "a success"], example: { jp: "Удача — это не всё.", en: "Luck is not everything." }, drill: { jp: "Удача здесь очень нужна", en: "Luck is very much needed here" }, hint: "u-DA-cha, stress in the middle. Feminine (-а). To WISH someone luck Russian changes the ending — удачи! — which is the of-form the grammar units explain." },
      ],
    },
  ],
};
