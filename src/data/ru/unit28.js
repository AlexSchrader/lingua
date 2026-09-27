// RU Unit 28 — Чувства и характер ("Feelings and character") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Conventions are declared in ru/unit1.js §1–§10 and bind every card here.
// "Vocabulary 4" was a scaffold counter title, so the theme was block 3's choice.
// Measured against `src/data/ru/TAUGHT-WORDS.md` on this branch, an A1 learner of
// Russian could say `рад` (u7), `устал` (u7), `добрый` (u7), `жаль` (u7) and u24's
// `счастливый` — and nothing else about a person's inner life or character. No sad,
// no angry, no calm, no honest, no clever, no fear. This unit is that gap.
//
// ⚠️ FIVE REFLEXIVE -ся VERBS IN ONE LESSON, AND THAT IS THE POINT OF l2.
// смеяться · бояться · улыбаться · надеяться all carry -ся and none of them has a
// form without it — Russian has no смеять, no боять. A learner who drops the ending
// has not said a simpler version of the word; they have said nothing. l2 puts them
// together so the ending reads as part of the word rather than as an extra.
// ⚠️ TOOLING NOTE: `scripts/scope-ru.mjs` could not reach ANY reflexive surface from
// its infinitive (смеялись from смеяться, боюсь from бояться) — its stripper stops
// at -ся. Block 3 extended the script so a -ся/-сь infinitive also contributes its
// bare stem, and added a PARADIGM entry for бояться and петь, whose stems mutate
// outright. Declared here because unit20.js asks any block that touches PARADIGM to
// say so.
//
// ⚠️ THREE SILENT т IN THIS UNIT, AND THEY ARE THE PRONUNCIATION LESSON:
//     грустный  → GRUS-nyy   (not GRUST-)
//     честный   → CHES-nyy   (not CHEST-)
//     чувство   → CHUS-tva
// plus u24's счастливый → schis-LI-vyy. Russian drops т between с and н every time,
// and no rule in u1–u6 taught it because no word in the alphabet band had the
// cluster. Every one of these hints says it outright.
//
// ⚠️ LEXEME CALLS RECORDED (unit1.js §D — judgements, not measurements):
//   `странный` beside u8 `страна` — one root: a strange thing is a foreign one, the
//        same picture English keeps in strange/stranger. Not derivable. Allowed.
//   `страх` beside `бояться` in this same unit — different roots entirely, noun and
//        verb of one idea. Both needed; both carded.
//   `слеза` beside `плакать` — different roots. Allowed.
//   `душа` beside u29 `душ` — genuinely one ancient root and two utterly different
//        modern words. The stress separates them (du-SHA / DUSH) and both hints say
//        so. Allowed.
//   `мечта` beside u29 `сон` — Russian SPLITS what English joins into "dream", so
//        two cards is the accurate teaching, not a duplication.
//   AVOIDED on the same test: `смешной` (vs `смеяться` — chose the verb) ·
//        `скучать` (vs u6 скучно) · `сердиться` (vs u6 сердце) · `радоваться` (vs
//        u7 рад) · `надежда` (vs `надеяться`) · `смех` (vs `смеяться`) · `улыбка`
//        (vs `улыбаться`) · `гордость` (vs `гордый`) · `лень`/`лениться` (vs
//        `ленивый`) · `ум` (vs `умный`) · `глупость` (vs `глупый`).
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT — hand-checked against `normalizeMeaning`:
//     `счастливый` was u24's "happy", so `довольный` takes "content" and `рад`
//             (u7) keeps "glad (masculine form)". Three degrees, three words.
//     `злой` takes "angry" — the hint explains that it is stronger than the English
//             word and that сердитый is the mild one, which is why сердитый is not
//             carded rather than being given a near-identical gloss.
//     `чувство` "a feeling" · `настроение` "a mood" · `страх` "fear" · `мечта` "a
//             dream you long for" · `душа` "a soul" · `слеза` "a tear" — six
//             distinct English words, deliberately.
//     `умный` "clever" not "smart", because "smart" would have read against u18
//             `модный` ("fashionable") for a learner, though not for the normaliser.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT28 = {
  id: "ru-u28",
  lang: "ru",
  title: "Чувства и характер",
  order: 28,
  stage: "a1",
  lessons: [
    {
      id: "ru-u28l1",
      unit: 28,
      lesson: 1,
      title: "Say how someone feels",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe a mood in one adjective: sad, angry, calm, content, proud or strange.",
      items: [
        { id: "ru-u28l1-grustnyy", type: "vocab", front: "грустный", reading: "grustnyy", meaning: "sad", accept: ["unhappy", "downcast", "melancholy"], example: { jp: "Он сегодня очень грустный, потому что дождь.", en: "He is very sad today, because it is raining." }, drill: { jp: "Сегодня он очень грустный", en: "He is very sad today" }, hint: "GRUS-nyy, stress first — and ⚠️ THE т IS SILENT: say GRUS-nyy, never GRUST-nyy. Russian always drops т between с and н. Грустно is the impersonal form: мне грустно, I feel sad, with no subject at all." },
        { id: "ru-u28l1-zloy", type: "vocab", front: "злой", reading: "zloy", meaning: "angry", accept: ["mean", "vicious", "bad-tempered"], example: { jp: "Этот большой медведь очень злой.", en: "This big bear is very fierce." }, drill: { jp: "Этот злой человек всегда кричит", en: "This angry person always shouts" }, hint: "ZLOY, one syllable, stressed. ⚠️ MUCH STRONGER THAN ENGLISH ANGRY — злой is closer to mean or vicious, and of an animal it is fierce. For momentarily cross, Russians say сердитый. Зло is evil, the noun, so this is not a light word." },
        { id: "ru-u28l1-spokoynyy", type: "vocab", front: "спокойный", reading: "spokoynyy", meaning: "calm", accept: ["quiet in manner", "peaceful", "unruffled"], example: { jp: "Наш дедушка очень спокойный человек.", en: "Our grandfather is a very calm person." }, drill: { jp: "Наш дедушка очень спокойный сегодня", en: "Our grandfather is very calm today" }, hint: "spa-KOY-nyy, stress on KOY. Спокойно means calmly and also Take it easy. ⚠️ Спокойной ночи is Good night — literally of a calm night, in the genitive — and it is the standard thing a Russian says at bedtime." },
        { id: "ru-u28l1-dovolnyy", type: "vocab", front: "довольный", reading: "dovolnyy", meaning: "content", accept: ["pleased", "satisfied", "happy with it"], example: { jp: "Он очень довольный, потому что экзамен был хороший.", en: "He is very content, because the exam was good." }, drill: { jp: "Он сегодня очень довольный", en: "He is very content today" }, hint: "da-VOL-nyy, stress on VOL. It is satisfied rather than happy — u24's счастливый is the big word. Pleased WITH something takes the instrumental, which unit1.js §5 defers to A2. Довольно on its own means Enough!" },
        { id: "ru-u28l1-gordyy", type: "vocab", front: "гордый", reading: "gordyy", meaning: "proud", accept: ["haughty", "full of pride"], example: { jp: "Мой отец очень гордый человек.", en: "My father is a very proud man." }, drill: { jp: "Мой брат тоже очень гордый", en: "My brother is also very proud" }, hint: "GOR-dyy, stress first. ⚠️ It can praise or criticise, exactly as in English: proud of something, or haughty. To say proud OF, Russian needs гордиться plus the instrumental, an A2 pattern. Гордость is the noun." },
        { id: "ru-u28l1-strannyy", type: "vocab", front: "странный", reading: "strannyy", meaning: "strange", accept: ["odd", "peculiar", "weird"], example: { jp: "Это очень странный вопрос, и я не знаю ответа.", en: "That is a very strange question, and I do not know the answer." }, drill: { jp: "Это очень странный ответ", en: "That is a very strange answer" }, hint: "STRAN-nyy, stress first, and hold the double н. ⚠️ Built on страна, a country (unit 8) — a strange thing is a foreign one, the same picture English keeps in strange and stranger. Странно means it is odd." },
      ],
    },
    {
      id: "ru-u28l2",
      unit: 28,
      lesson: 2,
      title: "Say what you do when you feel it",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that you laugh, cry, are afraid, smile, hope or shout — and keep the -ся on the end.",
      items: [
        { id: "ru-u28l2-smeyatsya", type: "vocab", front: "смеяться", reading: "smeyatsya", meaning: "to laugh", accept: ["to have a laugh", "to be laughing"], example: { jp: "Мы всегда смеялись, когда он был здесь.", en: "We always laughed when he was here." }, drill: { jp: "Здесь можно смеяться и танцевать", en: "Here one can laugh and dance" }, hint: "smi-YAT-sya, stress on YAT: я смеюсь, ты смеёшься. ⚠️ THE -ся IS NOT OPTIONAL — there is no смеять in Russian at all. Laughing AT someone needs над plus the instrumental, an A2 pattern, so at A1 use the verb alone. Смех is laughter." },
        { id: "ru-u28l2-plakat", type: "vocab", front: "плакать", reading: "plakat", meaning: "to cry", accept: ["to weep", "to be in tears"], example: { jp: "Ребёнок плакал ночью, и мы не спали.", en: "The child cried in the night, and we did not sleep." }, drill: { jp: "Здесь не нужно плакать сегодня", en: "There is no need to cry here today" }, hint: "PLA-kat, stress first: я плачу, ты плачешь — the к becomes ч. ⚠️ я плАчу is I cry, and я плачУ is I pay, from unit 18's платить: the SAME LETTERS, and only the stress separates them. Russians make jokes about it." },
        { id: "ru-u28l2-boyatsya", type: "vocab", front: "бояться", reading: "boyatsya", meaning: "to be afraid", accept: ["to fear", "to be scared"], example: { jp: "Я боялся этой собаки, когда был маленький.", en: "I was afraid of this dog when I was small." }, drill: { jp: "Не нужно бояться этой собаки", en: "There is no need to be afraid of this dog" }, hint: "ba-YAT-sya, stress on YAT: я боюсь, ты боишься. ⚠️ THE THING FEARED GOES GENITIVE — бояться собаки — which is a third job for the genitive, so A1 meets it only in this fixed shape and does not generalise from it (unit1.js §5). Страх, in lesson 4, is the noun." },
        { id: "ru-u28l2-ulybatsya", type: "vocab", front: "улыбаться", reading: "ulybatsya", meaning: "to smile", accept: ["to be smiling", "to give a smile"], example: { jp: "Она всегда улыбается, и это очень приятно.", en: "She always smiles, and that is very pleasant." }, drill: { jp: "Нужно улыбаться каждый день", en: "One should smile every day" }, hint: "u-ly-BAT-sya, stress on BAT: я улыбаюсь, ты улыбаешься. Улыбка is the smile itself and is not carded (unit1.js §D). ⚠️ Russians do not smile at strangers, and a foreigner who does can read as odd — the word is common, the habit is not." },
        { id: "ru-u28l2-nadeyatsya", type: "vocab", front: "надеяться", reading: "nadeyatsya", meaning: "to hope", accept: ["to be hopeful", "to count on"], example: { jp: "Я надеюсь, что завтра будет хорошая погода.", en: "I hope that the weather will be good tomorrow." }, drill: { jp: "Нужно надеяться на хорошую погоду", en: "One must hope for good weather" }, hint: "na-DE-yat-sya, stress on DE: я надеюсь, ты надеешься. It takes что for the hope, with a comma always, and НА plus the accusative for a thing: надеяться на успех. Надежда is both hope and a girl's name." },
        { id: "ru-u28l2-krichat", type: "vocab", front: "кричать", reading: "krichat", meaning: "to shout", accept: ["to yell", "to cry out", "to scream"], example: { jp: "Он всегда кричит, когда он злой.", en: "He always shouts when he is angry." }, drill: { jp: "Здесь не нужно кричать никогда", en: "One should never shout here" }, hint: "kri-CHAT, stress at the end: я кричу, ты кричишь. Крик is a shout. ⚠️ Not the same as плакать: a child who кричит is yelling, one who плачет is in tears, and Russian parents keep the two firmly apart." },
      ],
    },
    {
      id: "ru-u28l3",
      unit: 28,
      lesson: 3,
      title: "Describe someone's character",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what a person is like: honest, clever, stupid, polite or lazy.",
      items: [
        { id: "ru-u28l3-kharakter", type: "vocab", front: "характер", reading: "kharakter", meaning: "a character", accept: ["a personality", "a temperament", "a nature"], example: { jp: "У него очень хороший характер, и он всегда спокойный.", en: "He has a very good character, and he is always calm." }, drill: { jp: "У неё очень хороший характер", en: "She has a very good character" }, hint: "kha-RAK-ter, stress on RAK. Masculine. An internationalism — and ⚠️ IT MEANS A PERSONALITY, not a character in a book, who is a герой or a персонаж. У него тяжёлый характер means he is hard to live with." },
        { id: "ru-u28l3-chestnyy", type: "vocab", front: "честный", reading: "chestnyy", meaning: "honest", accept: ["truthful", "straight", "fair"], example: { jp: "Он очень честный человек, и я ему верю.", en: "He is a very honest person, and I believe him." }, drill: { jp: "Он очень честный и умный человек", en: "He is a very honest and clever person" }, hint: "CHES-nyy, stress first — and ⚠️ THE т IS SILENT, the same trap as грустный in lesson 1 and u24's счастливый. Честно говоря is to be honest. Честь is honour, and it is a heavier word in Russian than in English." },
        { id: "ru-u28l3-umnyy", type: "vocab", front: "умный", reading: "umnyy", meaning: "clever", accept: ["intelligent", "bright", "smart"], example: { jp: "Наша кошка очень умная, и она всё понимает.", en: "Our cat is very clever, and she understands everything." }, drill: { jp: "Наш новый учитель очень умный", en: "Our new teacher is very clever" }, hint: "UM-nyy, stress first. Built on ум, the mind, which is not taught here — so this arrives on its own. ⚠️ Russian uses умный of animals and machines quite freely: умная кошка, умный телефон, which is the smart in smartphone." },
        { id: "ru-u28l3-glupyy", type: "vocab", front: "глупый", reading: "glupyy", meaning: "stupid", accept: ["silly", "foolish", "dim"], example: { jp: "Это был очень глупый вопрос, и мне жаль.", en: "That was a very stupid question, and I am sorry." }, drill: { jp: "Это был очень глупый ответ", en: "That was a very stupid answer" }, hint: "GLU-pyy, stress first. The plain opposite of умный. ⚠️ Russian says it more easily than English says stupid — Не говори глупости, do not talk nonsense, is ordinary between friends. Глупо means it is silly." },
        { id: "ru-u28l3-vezhlivyy", type: "vocab", front: "вежливый", reading: "vezhlivyy", meaning: "polite", accept: ["courteous", "well-mannered", "civil"], example: { jp: "Он очень вежливый человек, и он всегда говорит спасибо.", en: "He is a very polite person, and he always says thank you." }, drill: { jp: "Он очень вежливый и спокойный", en: "He is very polite and calm" }, hint: "VEZH-li-vyy, stress first. Built on an old word for knowing — the polite one knows how to behave. ⚠️ Russian politeness is carried mostly by вы (unit 2) rather than by phrases, so вежливый describes a manner, not a set of words." },
        { id: "ru-u28l3-lenivyy", type: "vocab", front: "ленивый", reading: "lenivyy", meaning: "lazy", accept: ["idle", "bone idle", "slothful"], example: { jp: "Наша кошка очень ленивая, и она спала целый день.", en: "Our cat is very lazy, and she slept the whole day." }, drill: { jp: "Этот большой медведь очень ленивый", en: "This big bear is very lazy" }, hint: "li-NI-vyy, stress on NI. Лень is laziness and лениться is the verb, and neither is carded (unit1.js §D). ⚠️ Мне лень means I cannot be bothered — a complete sentence with no verb in it, and one Russians use constantly." },
      ],
    },
    {
      id: "ru-u28l4",
      unit: 28,
      lesson: 4,
      title: "Name the feeling itself",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about a feeling, a mood, fear, a dream you long for, a soul and a tear.",
      items: [
        { id: "ru-u28l4-chuvstvo", type: "vocab", front: "чувство", reading: "chuvstvo", meaning: "a feeling", accept: ["an emotion", "a sense", "a sensation"], example: { jp: "Это очень странное чувство, и я его не понимаю.", en: "That is a very strange feeling, and I do not understand it." }, drill: { jp: "Это очень странное чувство сегодня", en: "That is a very strange feeling today" }, hint: "CHUS-tva, stress first — and ⚠️ THE в OF чув- AND THE т BOTH GO QUIET: say CHUS-tva, not CHUVST-vo. Neuter (-о). Чувствовать is to feel, an A2 verb. Пять чувств are the five senses." },
        { id: "ru-u28l4-nastroenie", type: "vocab", front: "настроение", reading: "nastroenie", meaning: "a mood", accept: ["spirits", "a frame of mind", "humour"], example: { jp: "У неё сегодня очень хорошее настроение.", en: "She is in a very good mood today." }, drill: { jp: "Сегодня у меня плохое настроение", en: "I am in a bad mood today" }, hint: "nas-tra-YE-ni-ye, stress on YE. Neuter (-е). Built on настроить, to tune — a mood is how you are tuned. ⚠️ Нет настроения, with the genitive after нет, is the Russian for I am not in the mood, and it uses exactly the frame u23 taught." },
        { id: "ru-u28l4-strakh", type: "vocab", front: "страх", reading: "strakh", meaning: "fear", accept: ["a fear", "terror", "dread"], example: { jp: "Это был очень большой страх, и я не спал.", en: "That was a very great fear, and I did not sleep." }, drill: { jp: "У него очень большой страх", en: "He has a very great fear" }, hint: "STRAKH, one syllable. Masculine. It is the noun that belongs to бояться in lesson 2 — a different root, so both earn a card. Страшно means it is frightening, and Страшно! is what a Russian child shouts at a film." },
        { id: "ru-u28l4-mechta", type: "vocab", front: "мечта", reading: "mechta", meaning: "a dream you long for", accept: ["an ambition", "a daydream", "something you long for"], example: { jp: "Это его мечта, и он думает о ней каждый день.", en: "That is his dream, and he thinks about it every day." }, drill: { jp: "У него очень большая мечта", en: "He has a very big dream" }, hint: "mich-TA, stress at the end. Feminine (-а). ⚠️ RUSSIAN SPLITS WHAT ENGLISH JOINS: мечта is the dream you WISH for, and u29's сон is the one you HAVE while asleep. Мечтать is to daydream. Мечта has no normal genitive plural, which Russians find funny." },
        { id: "ru-u28l4-dusha", type: "vocab", front: "душа", reading: "dusha", meaning: "a soul", accept: ["the soul", "a spirit", "the heart of a person"], example: { jp: "У неё очень добрая душа, и мы её любим.", en: "She has a very kind soul, and we love her." }, drill: { jp: "У него очень добрая душа", en: "He has a very kind soul" }, hint: "du-SHA, stress at the end. Feminine (-а). ⚠️ MOBILE STRESS: душА but в дУшу. ⚠️ AND ONE LETTER FROM душ, a shower (unit 29) — du-SHA a soul, DUSH a shower. They really are one ancient root, which no learner would guess. Русская душа is a phrase Russians use about themselves without irony." },
        { id: "ru-u28l4-sleza", type: "vocab", front: "слеза", reading: "sleza", meaning: "a tear", accept: ["a teardrop", "tears"], example: { jp: "У неё была слеза на лице, и я это видел.", en: "There was a tear on her face, and I saw it." }, drill: { jp: "Это была очень большая слеза", en: "That was a very big tear" }, hint: "sli-ZA, stress at the end. Feminine (-а). Its plural moves the stress and takes ё — слёзы — so the spelling marks it (unit1.js §7). It belongs with плакать in lesson 2, and the two come from different roots." },
      ],
    },
  ],
};
