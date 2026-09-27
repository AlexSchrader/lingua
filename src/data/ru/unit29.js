// RU Unit 29 — Обычный день ("An ordinary day") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Conventions are declared in ru/unit1.js §1–§10 and bind every card here.
// "Vocabulary 5" was a scaffold counter title, so the theme was block 3's choice.
// u15 Дом и вещи named the rooms and the furniture; nothing named what a person
// DOES in them. Measured against `src/data/ru/TAUGHT-WORDS.md` on this branch,
// A1 Russian had спать (u20) and отдыхать (u20) and no other verb of a daily
// routine — no waking, getting up, washing, cooking, cutting, tidying or hurrying —
// and no knife, fork, spoon or plate to eat unit 13's food with.
//
// ⚠️ RUSSIAN HAS THREE VERBS WHERE ENGLISH HAS ONE "WASH", AND THIS UNIT IS WHERE
// THAT GETS SETTLED. умываться washes your FACE (l1), мыть washes a THING, стирать
// washes CLOTHES (l3). Choosing the wrong one is not a small error — стирать посуду
// means putting the plates in the washing machine. мыть itself is NOT carded, for
// the §D reason: умываться already carries the root, and unit 15's мыло hands the
// idea over. Its two senses are named in both hints instead.
//
// ⚠️ FOUR MORE REFLEXIVE VERBS (просыпаться · умываться · ложиться) plus the
// non-reflexive pair they contrast with. u28 introduced the -ся class; this unit
// relies on it, and просыпаться's hint carries the sharpest example in the
// language: without -ся, просыпать means to SPILL.
//
// ⚠️ LEXEME CALLS RECORDED (unit1.js §D — judgements, not measurements):
//   `чистый` beside `чистить` in this same unit — verb and adjective of one root,
//        both carded because the VERB is the daily action (чистить зубы) and the
//        ADJECTIVE is the daily judgement. The same arrangement block 2 made with
//        u19's adverb/adjective pairs, and each hint points at the other.
//   `душ` beside u28 `душа` — one ancient root, two unrelated modern words, and the
//        stress is what separates them. Both hints say so.
//   `сон` beside u20 `спать` and u28 `мечта` — сон is the noun for sleep AND for
//        the dream you have asleep; спать is the verb; мечта is the dream you long
//        for. Three cards, three jobs, and Russian genuinely splits them this way.
//   `расписание` beside u4 `писать` — a thing written out. Opaque to a learner.
//   `тихий` beside u5 `тихо` — adverb and adjective, the pair block 1 settled at
//        unit1.js §B. Glosses differ by word: "quietly" and "quiet".
//   `ложка` beside `ложиться` — they merely look alike; ложка's hint says so.
//   AVOIDED on the same test: `одеваться` (vs u18 одежда) · `мыть` (see above) ·
//        `чистота` (vs `чистый`) · `грязь` (vs `грязный`) · `спешка` (vs `спешить`) ·
//        `привыкнуть` (vs `привычка`) · `будить` (vs `будильник`) · `уходить` and
//        `приходить`, which are prefixed verbs of motion and are deferred to B1 by
//        unit1.js §5 — a real temptation for a routine unit, and refused.
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT — hand-checked against `normalizeMeaning`:
//     `стирать` takes "to do the laundry", NOT "to wash", so it cannot share a
//             prompt with `умываться` ("to wash your face") in the same language.
//     `расписание` takes "a timetable" and u27 `план` keeps "a plan".
//     `сон` takes "a night's sleep", NOT "sleep" — u20 `спать` is glossed "to
//             sleep" and `normalizeMeaning` strips the leading "to ", so a bare
//             "sleep" WAS one prompt with two answers. Measured, then corrected.
//     `чистить` takes "to brush", NOT "to clean" — `чистый` in l3 is glossed
//             "clean" and the two normalised onto each other in the SAME UNIT.
//             Brushing is also the daily use (чистить зубы), so this is the
//             better gloss as well as the safe one.
//     `готовить` takes "to do the cooking" — u8 `повар` is "a cook", which
//             normalises to "cook", and so did "to cook".
//     `тихий` takes "quiet" and u5 `тихо` keeps "quietly".
//     `мебель` takes "furniture" — a mass noun with no plural, named in its hint.
//     `ремонт` takes "repairs" — nothing else in ru normalises onto it.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT29 = {
  id: "ru-u29",
  lang: "ru",
  title: "Обычный день",
  order: 29,
  stage: "a1",
  lessons: [
    {
      id: "ru-u29l1",
      unit: 29,
      lesson: 1,
      title: "Getting up and going to bed",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe your morning and your bedtime: wake, get up, wash, brush, shower, lie down.",
      items: [
        { id: "ru-u29l1-prosypatsya", type: "vocab", front: "просыпаться", reading: "prosypatsya", meaning: "to wake up", accept: ["to awake", "to come round"], example: { jp: "Я просыпаюсь очень рано каждый день.", en: "I wake up very early every day." }, drill: { jp: "Нужно просыпаться очень рано", en: "One must wake up very early" }, hint: "pra-sy-PAT-sya, stress on PAT: я просыпаюсь, ты просыпаешься. ⚠️ WITHOUT THE -ся, просыпать MEANS TO SPILL — the sharpest example in the language of why the reflexive ending is part of the word. This is waking; getting out of bed is вставать, the next card." },
        { id: "ru-u29l1-vstavat", type: "vocab", front: "вставать", reading: "vstavat", meaning: "to get up", accept: ["to rise", "to stand up", "to get out of bed"], example: { jp: "Утром я вставал очень рано, и это было трудно.", en: "In the morning I got up very early, and it was hard." }, drill: { jp: "Утром нужно вставать очень рано", en: "In the morning one must get up very early" }, hint: "fsta-VAT, stress at the end: я встаю, ты встаёшь — the в drops out of the present tense entirely. It is getting out of bed, or standing up out of a chair. Вставай! is what a Russian parent shouts at seven in the morning." },
        { id: "ru-u29l1-umyvatsya", type: "vocab", front: "умываться", reading: "umyvatsya", meaning: "to wash your face", accept: ["to have a wash", "to wash yourself"], example: { jp: "Утром я умываюсь очень быстро.", en: "In the morning I wash very quickly." }, drill: { jp: "Утром нужно умываться очень быстро", en: "In the morning one must wash very quickly" }, hint: "u-my-VAT-sya, stress on VAT: я умываюсь, ты умываешься. ⚠️ IT IS YOUR FACE, specifically. Washing a THING is мыть; washing CLOTHES is стирать, in lesson 3. Three Russian verbs for one English wash. Unit 15's мыло is the soap." },
        { id: "ru-u29l1-chistit", type: "vocab", front: "чистить", reading: "chistit", meaning: "to brush", accept: ["to clean", "to scrub", "to polish"], example: { jp: "Зубы нужно чистить каждое утро.", en: "Teeth must be brushed every morning." }, drill: { jp: "Нужно чистить зубы каждый день", en: "One must brush one's teeth every day" }, hint: "CHIS-tit, stress first: я чищу, ты чистишь — the ст becomes щ. ⚠️ Чистить зубы is to BRUSH your teeth, not clean them, and it is the phrase you will use daily. Lesson 3's чистый is the adjective from the same root." },
        { id: "ru-u29l1-dush", type: "vocab", front: "душ", reading: "dush", meaning: "a shower", accept: ["the shower", "a shower bath"], example: { jp: "Наш душ наверху, рядом с ванной.", en: "Our shower is upstairs, next to the bathroom." }, drill: { jp: "Наш душ наверху и там тепло", en: "Our shower is upstairs and it is warm there" }, hint: "DUSH, one syllable. Masculine. ⚠️ ONE LETTER FROM душа, a soul (unit 28) — DUSH is a shower, du-SHA is a soul, and the stress tells them apart. They really are one ancient root, which no learner would guess. Принять душ is to take a shower." },
        { id: "ru-u29l1-lozhitsya", type: "vocab", front: "ложиться", reading: "lozhitsya", meaning: "to lie down", accept: ["to go to bed", "to lie oneself down"], example: { jp: "Я ложусь очень поздно, и утром трудно вставать.", en: "I go to bed very late, and it is hard to get up in the morning." }, drill: { jp: "Нужно ложиться не очень поздно", en: "One must not go to bed too late" }, hint: "la-ZHIT-sya, stress on ZHIT: я ложусь, ты ложишься. Ложиться спать is the standard phrase for going to bed, with спать from unit 20. ⚠️ Unit 15's класть puts a THING down; ложиться puts YOURSELF down, which is what the -ся is doing." },
      ],
    },
    {
      id: "ru-u29l2",
      unit: 29,
      lesson: 2,
      title: "Cook it and lay the table",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Cook and cut, and name the knife, spoon, fork and plate you eat unit 13's food with.",
      items: [
        { id: "ru-u29l2-gotovit", type: "vocab", front: "готовить", reading: "gotovit", meaning: "to do the cooking", accept: ["to cook", "to prepare", "to get ready"], example: { jp: "Мама готовила ужин каждый вечер.", en: "Mum cooked supper every evening." }, drill: { jp: "Нужно готовить ужин каждый вечер", en: "One must cook supper every evening" }, hint: "ga-TO-vit, stress on TO: я готовлю, ты готовишь — an л appears in the я form only. TWO senses: to cook, and to prepare anything. Unit 24's готов, ready, is the same root — готовить ужин is what makes the ужин готов." },
        { id: "ru-u29l2-rezat", type: "vocab", front: "резать", reading: "rezat", meaning: "to cut", accept: ["to slice", "to carve", "to cut up"], example: { jp: "Мама резала хлеб этим ножом.", en: "Mum cut the bread with this knife." }, drill: { jp: "Нужно резать хлеб этим ножом", en: "One must cut the bread with this knife" }, hint: "RE-zat, stress first: я режу, ты режешь — the з becomes ж. It cuts with a blade, so it covers slicing bread and cutting paper alike. Cutting YOURSELF is порезаться, an A2 word." },
        { id: "ru-u29l2-nozh", type: "vocab", front: "нож", reading: "nozh", meaning: "a knife", accept: ["knife", "a blade"], example: { jp: "Этот нож очень старый, но хороший.", en: "This knife is very old, but good." }, drill: { jp: "Этот нож очень старый и большой", en: "This knife is very old and big" }, hint: "NOZH, one syllable, and the ж goes quiet at the end so it sounds like NOSH. Masculine. ⚠️ Giving a knife as a present is bad luck in Russia, so the person receiving it hands over a coin to turn the gift into a sale." },
        { id: "ru-u29l2-lozhka", type: "vocab", front: "ложка", reading: "lozhka", meaning: "a spoon", accept: ["spoon", "a spoonful"], example: { jp: "На столе ложка, вилка и нож.", en: "There is a spoon, a fork and a knife on the table." }, drill: { jp: "На столе ложка и вилка", en: "There is a spoon and a fork on the table" }, hint: "LOZH-ka, stress first. Feminine (-а). ⚠️ Nothing to do with ложиться in lesson 1, whatever the spelling suggests. Чайная ложка is a teaspoon and столовая ложка a tablespoon — the two measures every Russian recipe uses." },
        { id: "ru-u29l2-vilka", type: "vocab", front: "вилка", reading: "vilka", meaning: "a fork", accept: ["fork", "an electric plug"], example: { jp: "Эта вилка очень старая, и её нужно менять.", en: "This fork is very old, and it needs changing." }, drill: { jp: "Эта старая вилка очень грязная", en: "This old fork is very dirty" }, hint: "VIL-ka, stress first. Feminine (-а). ⚠️ IT IS ALSO AN ELECTRIC PLUG — вилка в розетке — so one word covers the fork and the plug, both of them pronged. Russian is quite happy with that and so must you be." },
        { id: "ru-u29l2-tarelka", type: "vocab", front: "тарелка", reading: "tarelka", meaning: "a plate", accept: ["plate", "a dish"], example: { jp: "Эта тарелка очень большая и белая.", en: "This plate is very big and white." }, drill: { jp: "Эта большая тарелка очень чистая", en: "This big plate is very clean" }, hint: "ta-REL-ka, stress on REL. Feminine (-а). From German Teller. ⚠️ Летающая тарелка is a flying saucer — but for the little saucer under a cup Russian keeps a separate word, блюдце." },
      ],
    },
    {
      id: "ru-u29l3",
      unit: 29,
      lesson: 3,
      title: "Keep the flat running",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Do the laundry, say whether a thing is clean or dirty, and talk about the neighbour, the furniture and the repairs.",
      items: [
        { id: "ru-u29l3-stirat", type: "vocab", front: "стирать", reading: "stirat", meaning: "to do the laundry", accept: ["to wash clothes", "to launder"], example: { jp: "Мама стирала наши рубашки каждую неделю.", en: "Mum washed our shirts every week." }, drill: { jp: "Нужно стирать эти рубашки сегодня", en: "One must wash these shirts today" }, hint: "sti-RAT, stress at the end: я стираю, ты стираешь. ⚠️ IT WASHES CLOTHES ONLY. Dishes are мыть посуду, your face is умываться (lesson 1). Three Russian verbs for one English wash, and using стирать on plates means putting them in the machine. Стиральная машина is the washing machine." },
        { id: "ru-u29l3-chistyy", type: "vocab", front: "чистый", reading: "chistyy", meaning: "clean", accept: ["pure", "spotless", "sheer"], example: { jp: "Этот стакан совсем чистый, и в нём вода.", en: "This glass is completely clean, and there is water in it." }, drill: { jp: "Наш стол очень чистый сегодня", en: "Our table is very clean today" }, hint: "CHIS-tyy, stress first. Same root as чистить in lesson 1 — the verb is what you DO, this is what you JUDGE. ⚠️ THREE senses: clean, pure, and sheer — чистая правда is the plain truth. Its opposite грязный is the next card." },
        { id: "ru-u29l3-gryaznyy", type: "vocab", front: "грязный", reading: "gryaznyy", meaning: "dirty", accept: ["filthy", "muddy", "unclean"], example: { jp: "Этот стакан очень грязный, и это плохо.", en: "This glass is very dirty, and that is bad." }, drill: { jp: "Наш стол сегодня очень грязный", en: "Our table is very dirty today" }, hint: "GRYAZ-nyy, stress first. Грязь is mud and dirt. ⚠️ Russians take outdoor dirt seriously — shoes come off at the front door, and грязный is what you will be called if they do not. Its opposite is чистый." },
        { id: "ru-u29l3-sosed", type: "vocab", front: "сосед", reading: "sosed", meaning: "a neighbour", accept: ["neighbour", "the person next door"], example: { jp: "Наш сосед очень добрый, и он всегда помогает.", en: "Our neighbour is very kind, and he always helps." }, drill: { jp: "Наш сосед очень добрый человек", en: "Our neighbour is a very kind person" }, hint: "sa-SED, stress at the end. Masculine, and the plural is irregular and soft: соседи. Соседка is the feminine. ⚠️ In a Russian communal flat your сосед shares your kitchen, which is why the word carries more weight than English neighbour." },
        { id: "ru-u29l3-mebel", type: "vocab", front: "мебель", reading: "mebel", meaning: "furniture", accept: ["the furniture", "furnishings"], example: { jp: "Наша мебель очень старая, но удобная.", en: "Our furniture is very old, but comfortable." }, drill: { jp: "Наша старая мебель очень удобная", en: "Our old furniture is very comfortable" }, hint: "ME-bel, stress first. ⚠️ FEMININE, and a -ь noun so the ending tells you nothing (unit1.js §3): наша мебель. ⚠️ AND IT HAS NO PLURAL — мебель is every stick of it at once, so Russian can no more say a furniture than English can. From French meuble." },
        { id: "ru-u29l3-remont", type: "vocab", front: "ремонт", reading: "remont", meaning: "repairs", accept: ["a repair", "redecoration", "refurbishment"], example: { jp: "У нас ремонт, и поэтому дома грязно.", en: "We are having repairs done, and so it is dirty at home." }, drill: { jp: "У нас сегодня большой ремонт", en: "We have big repairs today" }, hint: "ri-MONT, stress at the end. Masculine. ⚠️ Делать ремонт means to redecorate, and for a Russian it is an event that takes over the whole flat for months. On a shop door Ремонт means closed for refurbishment — unit 12's закрыто with a reason attached." },
      ],
    },
    {
      id: "ru-u29l4",
      unit: 29,
      lesson: 4,
      title: "Habits, timetables and the alarm clock",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about a habit, read a timetable, blame the alarm clock, and say you are in a hurry.",
      items: [
        { id: "ru-u29l4-privychka", type: "vocab", front: "привычка", reading: "privychka", meaning: "a habit", accept: ["a routine", "a custom", "a way of doing things"], example: { jp: "Это очень плохая привычка, и я хочу её менять.", en: "That is a very bad habit, and I want to change it." }, drill: { jp: "У него очень плохая привычка", en: "He has a very bad habit" }, hint: "pri-VYCH-ka, stress on VYCH. Feminine (-а). Привыкнуть is to get used to something, an A2 verb. Привычка — вторая натура is the Russian for habit is second nature, with unit 21's второй agreeing in the feminine." },
        { id: "ru-u29l4-raspisanie", type: "vocab", front: "расписание", reading: "raspisanie", meaning: "a timetable", accept: ["a schedule", "a rota", "a printed programme"], example: { jp: "Это расписание очень старое, и автобус уже был.", en: "This timetable is very old, and the bus has already been." }, drill: { jp: "Наше расписание очень старое", en: "Our timetable is very old" }, hint: "ras-pi-SA-ni-ye, stress on SA. Neuter (-е). Built on unit 4's писать — a thing written out. ⚠️ It is what unit 27's план is NOT: план is an intention, расписание is the printed schedule on every Russian station wall and school noticeboard." },
        { id: "ru-u29l4-budilnik", type: "vocab", front: "будильник", reading: "budilnik", meaning: "an alarm clock", accept: ["an alarm", "the alarm on your phone"], example: { jp: "Мой будильник не работает, и я вставал поздно.", en: "My alarm clock does not work, and I got up late." }, drill: { jp: "Мой будильник сегодня не работает", en: "My alarm clock does not work today" }, hint: "bu-DIL-nik, stress on DIL. Masculine. Built on будить, to wake somebody, which is not taught here — so the noun arrives on its own. ⚠️ Unit 6's часы is a clock; a будильник is the one that shouts at you." },
        { id: "ru-u29l4-son", type: "vocab", front: "сон", reading: "son", meaning: "a night's sleep", accept: ["sleep", "a dream while asleep", "slumber"], example: { jp: "Мой сон был очень плохой, и я устал.", en: "My sleep was very bad, and I got tired." }, drill: { jp: "Мой сон сегодня был очень плохой", en: "My sleep was very bad today" }, hint: "SON, one syllable. Masculine, and the о is FLEETING: сон but во сне, with the о simply gone — one of the sharpest examples in the language. ⚠️ TWO SENSES RUSSIAN JOINS: sleep, and the dream you have while asleep. Unit 28's мечта is the dream you long for. Unit 20's спать is the verb." },
        { id: "ru-u29l4-speshit", type: "vocab", front: "спешить", reading: "speshit", meaning: "to hurry", accept: ["to rush", "to be in a hurry", "to run fast"], example: { jp: "Утром я всегда спешил, и поэтому забывал ключи.", en: "In the morning I was always in a hurry, and so I forgot my keys." }, drill: { jp: "Утром не нужно спешить никогда", en: "In the morning one should never hurry" }, hint: "spi-SHIT, stress at the end: я спешу, ты спешишь. Спешка is the rush. ⚠️ Не спеши! is Slow down! — and Russians say the same of a clock that runs fast: часы спешат." },
        { id: "ru-u29l4-tikhiy", type: "vocab", front: "тихий", reading: "tikhiy", meaning: "quiet", accept: ["silent", "still", "a quiet one"], example: { jp: "Наш район очень тихий, и здесь приятно.", en: "Our district is very quiet, and it is pleasant here." }, drill: { jp: "Наш район очень тихий сегодня", en: "Our district is very quiet today" }, hint: "TI-khiy, stress first. The ADJECTIVE to unit 5's adverb тихо: говори тихо, but тихий район. Two different lexemes, exactly as быстро and быстрый in unit 23. Тихий океан is the Pacific — literally the quiet ocean." },
      ],
    },
  ],
};
