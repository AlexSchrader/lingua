// RU Unit 22 — Простое предложение ("The simple sentence") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Conventions are declared in ru/unit1.js §1–§10 and bind every card here.
// This is the first of Russian's three grammar units (u22 · u23 · u24) and the
// slot title "Grammar 1 — basic sentence" DID apply, unlike u23's — see that
// file's header. Retitled in Russian because lint.js hard-errors on the English
// scaffold title once a unit is authored (unit1.js §10).
//
// ⚠️ RUSSIAN HAS NO ITEM TYPE FOR GRAMMAR, AND THAT IS THE DESIGN, NOT A GAP.
// CLAUDE.md: grammar is modelled as function-word vocab whose example sentences
// carry the pattern. So this unit's fronts are the function words A1 was missing,
// and the GRAMMAR lives in the hints and the sentences:
//     * the present tense has NO copula — Это мой дом, with no "is"
//     * so `быть` is only ever seen in the past and the future, and the hint on
//       that card is where the learner is told so
//     * question words carry the question; Russian does not invert word order
//     * frequency adverbs sit before the verb, not after it
//
// ⚠️ THE QUESTION-WORD SET WAS INCOMPLETE AND NOBODY HAD COUNTED IT. Measured
// against `src/data/ru/TAUGHT-WORDS.md` (480 words) on this branch, u1–u21 taught
// кто · что · где · как · почему · откуда · сколько · который · какой — and NOT
// куда, когда, чей or зачем. A learner could ask where someone was FROM but not
// where they were GOING, and could not ask WHEN at all. l1 closes that.
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT — each checked by hand, because
// `normalizeMeaning` strips articles and parentheticals before comparing:
//     `так`   is glossed "that way", NOT "so" — u19 `такой`'s accept[] carries
//             "so (with an adjective)", which normalises to exactly "so". Two
//             cards would then have answered one prompt.
//     `точно` takes "exactly" and leaves "of course" to u6 `конечно` and "correct"
//             to u6 `правильно`.
//     `иногда` "sometimes" · `редко` "rarely" · `никогда` "never" · `обычно`
//             "usually" — four distinct English words on purpose; u2 `часто`
//             already owns "often" and u11 `всегда` owns "always".
//     `наверное` takes "probably" and `может быть` takes "maybe", which English
//             uses interchangeably and this course may not.
//     `почти` "almost" beside u14 `почта` "the post office" — no gloss clash, but
//             the two words differ by one letter and the hint on почти says so.
//
// ⚠️ LEXEME CALLS RECORDED (unit1.js §D — the tool's LEXEME verdict is blind to
// Cyrillic, so each of these is a judgement):
//   `куда` beside u8 `откуда`  — от+куда is transparent ONCE you know it, but the
//        где/куда/откуда triple is the core of Russian motion and a learner who
//        has only откуда cannot ask where anyone is going. Carded deliberately.
//   `никогда` beside u11 `всегда` and `когда` — the ни- series (никогда, никто,
//        нигде) are function words built on a stem, exactly as u7 `ничего` already
//        was. Allowed as a series, and each hint names its partner.
//   `может быть` beside `быть` in this same unit — a FROZEN frame whose meaning is
//        not the sum of its parts (может is not taught at all), the same shape as
//        u7 `до свидания` and u23 `у меня`. Allowed; both hints cross-reference.
//   `просто` beside u7 `простите` and u20 `простуда` — one ancient root, three
//        unrelated meanings, nothing a learner guesses. Allowed.
//   `правда` beside u6 `правильно` — правильно is how a thing is DONE, правда is
//        whether it IS. Allowed.
//   AVOIDED on the same test: `надо` (vs u5 нужно — same gloss, and it would have
//        been a second card for one idea) · `отвечать` (vs u7 ответ — a learner
//        who has the noun guesses the verb) · `теперь` (vs u4 сейчас — identical
//        gloss) · `снова` (chose `опять`; two words for "again" is one prompt with
//        two answers) · `никакой` (vs u19 какой) · `кажется` — which would have
//        been a THIRD 3rd-person-only verb, and unit1.js §4 spent both of them.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT22 = {
  id: "ru-u22",
  lang: "ru",
  title: "Простое предложение",
  order: 22,
  stage: "a1",
  lessons: [
    {
      id: "ru-u22l1",
      unit: 22,
      lesson: 1,
      title: "Ask where to, when and whose",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask the four questions the course could not ask yet: where to, when, whose, and what for.",
      items: [
        { id: "ru-u22l1-kuda", type: "vocab", front: "куда", reading: "kuda", meaning: "where to", accept: ["to where", "which way", "where are you going"], example: { jp: "Куда вы идёте так поздно?", en: "Where are you going so late?" }, drill: { jp: "Куда вы идёте сегодня утром", en: "Where are you going this morning" }, hint: "ku-DA, stress at the end. ⚠️ THREE WHERE-WORDS, and Russian keeps them apart where English does not: где is where you ARE, куда is where you are GOING, откуда (unit 8) is where you came FROM. Куда takes the accusative — куда идёт is answered в магазин, not в магазине." },
        { id: "ru-u22l1-kogda", type: "vocab", front: "когда", reading: "kogda", meaning: "when", accept: ["at what time", "the moment when"], example: { jp: "Когда вы обычно завтракаете, рано или поздно?", en: "When do you usually have breakfast, early or late?" }, drill: { jp: "Когда вы обычно здесь", en: "When are you usually here" }, hint: "kag-DA, stress at the end. It both ASKS (Когда? When?) and JOINS (Когда я дома, я читаю — When I am at home, I read). The joining use takes a comma, like unit 19's если." },
        { id: "ru-u22l1-chey", type: "vocab", front: "чей", reading: "chey", meaning: "whose", accept: ["belonging to whom", "whose is it"], example: { jp: "Чей это дом, ваш или их?", en: "Whose house is this, yours or theirs?" }, drill: { jp: "Чей это новый телефон", en: "Whose new telephone is this" }, hint: "CHEY, one syllable. ⚠️ ONE LETTER FROM чай, tea (unit 2) — чей has е, чай has а, and their readings differ by exactly that: chey and chay. It agrees with the thing owned, not the owner: чей дом, чья книга, чьё окно." },
        { id: "ru-u22l1-zachem", type: "vocab", front: "зачем", reading: "zachem", meaning: "what for", accept: ["for what purpose", "to what end", "why bother"], example: { jp: "Зачем нам такой большой стол?", en: "What do we need such a big table for?" }, drill: { jp: "Зачем нам такой большой шкаф", en: "What do we need such a big cupboard for" }, hint: "za-CHEM, stress at the end. ⚠️ NOT the same question as unit 2's почему: почему asks the CAUSE (why is it so?), зачем asks the PURPOSE (what is it for?). Ask a Russian почему and you get because; ask зачем and you get in order to." },
        { id: "ru-u22l1-pravda", type: "vocab", front: "правда", reading: "pravda", meaning: "the truth", accept: ["truth", "really", "is that so"], example: { jp: "Это правда, или он опять не понимает?", en: "Is that the truth, or does he not understand again?" }, drill: { jp: "Это правда или это ошибка", en: "Is that the truth or is it a mistake" }, hint: "PRAV-da, stress first. Feminine (-а). On its own with a rising tone — Правда? — it is the English Really? Same root as unit 6's правильно, but правильно is how a thing is DONE and правда is whether it IS." },
        { id: "ru-u22l1-tochno", type: "vocab", front: "точно", reading: "tochno", meaning: "exactly", accept: ["precisely", "for sure", "that is right"], example: { jp: "Я точно знаю, где наш билет.", en: "I know exactly where our ticket is." }, drill: { jp: "Я точно знаю этот адрес", en: "I know this address for sure" }, hint: "TOCH-na, stress first. It is certainty about a FACT — я точно знаю, I know for sure. Unit 6's правильно is about being correct, unit 6's конечно is of course; точно is the one you say when someone guesses right." },
      ],
    },
    {
      id: "ru-u22l2",
      unit: 22,
      lesson: 2,
      title: "Say how often it happens",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Place an action on a scale from never to usually, and say it happened again or right away.",
      items: [
        { id: "ru-u22l2-nikogda", type: "vocab", front: "никогда", reading: "nikogda", meaning: "never", accept: ["not ever", "at no time"], example: { jp: "Я никогда не курю, и это хорошо.", en: "I never smoke, and that is good." }, drill: { jp: "Я никогда не курю в доме", en: "I never smoke in the house" }, hint: "ni-kag-DA, stress at the end. ⚠️ RUSSIAN DOUBLES ITS NEGATIVE AND YOU MUST TOO: никогда НЕ курю, literally never not smoke. Leaving out the не is the single most common beginner error with this word. It is когда with ни- in front, the same series as unit 7's ничего." },
        { id: "ru-u22l2-inogda", type: "vocab", front: "иногда", reading: "inogda", meaning: "sometimes", accept: ["now and then", "from time to time", "occasionally"], example: { jp: "Иногда я читаю книгу вечером.", en: "Sometimes I read a book in the evening." }, drill: { jp: "Иногда я читаю книгу рано", en: "Sometimes I read a book early" }, hint: "i-nag-DA, stress at the end — the same -гда family as когда, всегда and никогда, and all four stress the last syllable. Unlike никогда it takes NO extra не." },
        { id: "ru-u22l2-obychno", type: "vocab", front: "обычно", reading: "obychno", meaning: "usually", accept: ["normally", "as a rule", "most of the time"], example: { jp: "Обычно мы обедаем дома, но сегодня в кафе.", en: "We usually have lunch at home, but today in a café." }, drill: { jp: "Обычно я работаю очень рано", en: "I usually work very early" }, hint: "a-BYCH-na, stress on BYCH. It sits before the verb: обычно я работаю, not я работаю обычно. It is the neutral middle of the scale — часто (unit 2) is often, обычно is as a rule." },
        { id: "ru-u22l2-redko", type: "vocab", front: "редко", reading: "redko", meaning: "rarely", accept: ["seldom", "not often", "hardly ever"], example: { jp: "Мы редко видим дедушку зимой.", en: "We rarely see grandad in winter." }, drill: { jp: "Мы редко видим этот автобус", en: "We rarely see this bus" }, hint: "RED-ka, stress first, and the д goes quiet before к so it sounds like RET-ka. It is the opposite of часто, and unlike никогда it needs no не: мы редко видим, we rarely see." },
        { id: "ru-u22l2-opyat", type: "vocab", front: "опять", reading: "opyat", meaning: "again", accept: ["once more", "yet again", "another time"], example: { jp: "Сегодня опять дождь, и это уже скучно.", en: "It is raining again today, and that is already boring." }, drill: { jp: "Сегодня опять дождь и ветер", en: "Today it is raining and windy again" }, hint: "a-PYAT, stress at the end. ⚠️ ONE LETTER FROM пять, five — опять is a-PYAT, пять is PYAT, and they are not related at all. Russians say опять with a sigh of complaint and снова when they are neutral about it." },
        { id: "ru-u22l2-srazu", type: "vocab", front: "сразу", reading: "srazu", meaning: "straight away", accept: ["at once", "immediately", "right away"], example: { jp: "Я сразу понимаю, когда он говорит по-русски.", en: "I understand straight away when he speaks Russian." }, drill: { jp: "Я сразу понимаю этот вопрос", en: "I understand this question straight away" }, hint: "SRA-zu, stress first. It is no gap at all between one thing and the next. Unit 4's потом is afterwards and unit 7's скоро is soon; сразу is the zero-delay end of that scale." },
      ],
    },
    {
      id: "ru-u22l3",
      unit: 22,
      lesson: 3,
      title: "Say what you think and how sure you are",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "State an opinion, admit you have forgotten, and hedge when you are not certain.",
      items: [
        { id: "ru-u22l3-dumat", type: "vocab", front: "думать", reading: "dumat", meaning: "to think", accept: ["to have an opinion", "to reckon", "to ponder"], example: { jp: "Я думаю, что этот фильм очень интересный.", en: "I think that this film is very interesting." }, drill: { jp: "Я люблю думать о музыке", en: "I like to think about music" }, hint: "DU-mat, stress first. Regular: я думаю, ты думаешь, он думает. It takes что for the thing thought — Я думаю, что… — with a comma, always, which English drops and Russian does not." },
        { id: "ru-u22l3-pomnit", type: "vocab", front: "помнить", reading: "pomnit", meaning: "to remember", accept: ["to keep in mind", "to recall", "to have in memory"], example: { jp: "Я хорошо помню этот старый дом.", en: "I remember this old house well." }, drill: { jp: "Я хочу помнить этот день", en: "I want to remember this day" }, hint: "POM-nit, stress first: я помню, ты помнишь. It is remembering as a STATE, not an act — Russian has no I remembered! moment here; that word is вспомнил, an A2 perfective." },
        { id: "ru-u22l3-zabyvat", type: "vocab", front: "забывать", reading: "zabyvat", meaning: "to forget", accept: ["to lose track of", "to leave behind in your memory"], example: { jp: "Я всегда забываю, где наши ключи.", en: "I always forget where our keys are." }, drill: { jp: "Не нужно забывать его фамилию", en: "One should not forget his surname" }, hint: "za-by-VAT, stress at the end: я забываю, ты забываешь. The opposite of помнить. ⚠️ The за- here is not the same за as in зачем; do not try to read the prefix." },
        { id: "ru-u22l3-verit", type: "vocab", front: "верить", reading: "verit", meaning: "to believe", accept: ["to trust", "to have faith in"], example: { jp: "Я верю, что завтра будет хорошая погода.", en: "I believe that tomorrow the weather will be good." }, drill: { jp: "Нужно верить каждому слову", en: "One must believe every word" }, hint: "VE-rit, stress first: я верю, ты веришь. It takes the DATIVE for a person — я верю тебе, I believe you — which is one of the fixed dative frames unit1.js §5 allows at A1." },
        { id: "ru-u22l3-mozhetbyt", type: "vocab", front: "может быть", reading: "mozhetbyt", meaning: "maybe", accept: ["perhaps", "it may be", "possibly"], example: { jp: "Может быть завтра будет снег, я не знаю.", en: "Maybe it will snow tomorrow, I do not know." }, drill: { jp: "Может быть завтра будет дождь", en: "Maybe it will rain tomorrow" }, hint: "MO-zhet BYT — TWO words, stress on MO and again on BYT. A frozen frame: может on its own is not taught here, and быть is the next lesson's card. In speech Russians scatter it as a filler exactly as English scatters maybe." },
        { id: "ru-u22l3-navernoe", type: "vocab", front: "наверное", reading: "navernoe", meaning: "probably", accept: ["most likely", "I expect", "I suppose"], example: { jp: "Он наверное уже дома, потому что уже поздно.", en: "He is probably home already, because it is late." }, drill: { jp: "Он наверное уже дома сегодня", en: "He is probably home already today" }, hint: "na-VER-na-ye, stress on VER. ⚠️ STRONGER than может быть: наверное means you think it is so, может быть means it might be. English blurs them and Russian does not. Written наверное, said na-VER-na in speech." },
      ],
    },
    {
      id: "ru-u22l4",
      unit: 22,
      lesson: 4,
      title: "Build the sentence: was, will be, and that one",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what something was and will be, point at the other one, and soften or sharpen the claim.",
      items: [
        { id: "ru-u22l4-byt", type: "vocab", front: "быть", reading: "byt", meaning: "to be", accept: ["to exist", "to be present"], example: { jp: "Вчера был дождь, а завтра будет снег.", en: "Yesterday there was rain, and tomorrow there will be snow." }, drill: { jp: "Нужно быть здесь очень рано", en: "One must be here very early" }, hint: "BYT, one syllable. ⚠️ THE MOST IMPORTANT THING ABOUT IT: in the PRESENT it disappears completely. Это мой дом has no is in it at all. You only ever meet быть in the past — был, была, было, были — and the future — буду, будешь, будет, будем, будут. Unit 24 is built on those past forms." },
        { id: "ru-u22l4-tot", type: "vocab", front: "тот", reading: "tot", meaning: "that one", accept: ["that", "the other one", "that one over there"], example: { jp: "Этот дом новый, а тот очень старый.", en: "This house is new, and that one is very old." }, drill: { jp: "Этот дом новый а тот старый", en: "This house is new and that one is old" }, hint: "TOT, one syllable. Unit 2's это is this, right here; тот is that, further off. It agrees: тот дом, та книга, то окно, те дни. Russian uses этот/тот far less than English uses this/that — often just the noun will do." },
        { id: "ru-u22l4-tak", type: "vocab", front: "так", reading: "tak", meaning: "that way", accept: ["like that", "thus", "so", "in that manner"], example: { jp: "Не говори так, это очень плохо.", en: "Do not speak like that, it is very bad." }, drill: { jp: "Не делай так это плохо", en: "Do not do it that way it is bad" }, hint: "TAK, one syllable. ⚠️ It goes with VERBS where unit 19's такой goes with adjectives and nouns: он так говорит (he speaks that way), but он такой добрый (he is so kind). Its gloss is that way rather than so precisely so it never collides with такой." },
        { id: "ru-u22l4-dazhe", type: "vocab", front: "даже", reading: "dazhe", meaning: "even", accept: ["even so much as", "as much as"], example: { jp: "Здесь холодно даже летом.", en: "It is cold here even in summer." }, drill: { jp: "Здесь холодно даже в июле", en: "It is cold here even in July" }, hint: "DA-zhe, stress first. It goes immediately before the surprising word: даже летом, even in summer. Never at the end of the sentence, which is where English is happy to put it." },
        { id: "ru-u22l4-prosto", type: "vocab", front: "просто", reading: "prosto", meaning: "simply", accept: ["just", "it is simple", "plainly"], example: { jp: "Я просто не понимаю этот вопрос.", en: "I simply do not understand this question." }, drill: { jp: "Я просто не понимаю тебя", en: "I simply do not understand you" }, hint: "PROS-ta, stress first. Two uses: просто не понимаю, I just do not get it, and это просто, it is simple. Same ancient root as unit 7's простите and unit 20's простуда, and no learner would ever guess it — these are three unrelated words." },
        { id: "ru-u22l4-pochti", type: "vocab", front: "почти", reading: "pochti", meaning: "almost", accept: ["nearly", "not quite", "just about"], example: { jp: "Я почти всё понимаю, когда он говорит по-русски.", en: "I understand almost everything when he speaks Russian." }, drill: { jp: "Я почти всё понимаю сегодня", en: "I understand almost everything today" }, hint: "pach-TI, stress at the end. ⚠️ ONE LETTER FROM почта, the post office (unit 14) — почти ends in и, почта in а, and the readings differ only there: pochti and pochta. Nothing connects them." },
      ],
    },
  ],
};
