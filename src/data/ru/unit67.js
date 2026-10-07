// RU Unit 67 — Тонкие чувства ("The finer feelings") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 1 (u61–u73). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, and THIS BAND's conventions in ru/unit61.js §1–§8.
//
// THE SLOT TITLE APPLIED — "Emotion, finer shades" — and it is kept, but the
// COARSE shades are gone and the unit has to stay off them. What A1 and A2 spent:
//   u28 Чувства и характер  грустный · злой · спокойный · довольный · гордый ·
//        странный · смеяться · плакать · бояться · улыбаться · надеяться ·
//        кричать · характер · честный · умный · глупый · вежливый · ленивый ·
//        чувство · настроение · страх · мечта · душа · слеза
//   u56 Личность и поведение  щедрый · нежный · внимательный · скромный ·
//        забота · уважение · смелый · воля · настойчивый · надёжный · терпение ·
//        активный · грубый · жадный · упрямый · наглый · зависть · обман ·
//        поведение · поступок · доверие · совесть · одиночество · знакомый
//   plus the impersonal adverbs at u34: больно · страшно · грустно · стыдно ·
//        обидно, and рад · жаль · устал at u7.
// SO THIS UNIT IS THE NOUNS OF SPECIFIC EMOTIONS, which is the measured hole: a
// learner had `чувство` and `настроение` as containers and `страх` as the single
// named emotion inside them. Twenty-two of this unit's twenty-four cards are
// nouns, on purpose.
//
// ⚠️ ELEVEN REFUSED ON unit1.js §D, and they are the first eleven anyone reaches
//   for, which is exactly why the unit is nouns the adverbs do not reach:
//     радость (рад u7) · грусть (грустный u28 · грустно u34) · обида (обидно u34) ·
//     скука (скучный u40 · скучно u6) · нежность (нежный u56) · жалость (жаль u7) ·
//     гордость (гордый u28 · гордиться u32) · стыд (стыдно u34) · злиться (злой
//     u28) · жалеть (жаль u7) · обижаться (обидно u34) · радоваться (рад u7) ·
//     удовольствие (довольный u28) · нетерпение — that last one on the не+X bar
//     (терпение u56) rather than on §D.
//   `обиженный` · `растроганный` · `трогательный` — PARTICIPLES and participial
//     adjectives, so Grammar 6–8's subject and block 2's to spend. `трогательный`
//     is additionally §D against трогать (u49).
//   `тревога` — refused to honour this band's own allocation: unit61.js §4 sends
//     депрессия · стресс · тревога to block 2's u77, and a lead that takes a word
//     it has just reserved for somebody else has allocated nothing.
//   `насмешка` — §D-adjacent against смеяться (u28), and `презрение` carries the
//     field.
//
// ★ `сожаление` IS ALLOWED WHILE `жалость` IS REFUSED, and the line is the one
//   unit31.js §1(a) draws. жалость IS the noun of жаль — same root, same feeling,
//   one English word ("pity"), so the taught word hands it over. сожаление is
//   PREFIXED and names a different emotion with a different English word
//   ("regret"): it is about your own past action, not about somebody else's
//   misfortune. Prefer a different English word, and the pair needs no marking.
//
// ★ TWO -ь NOUNS, and unit1.js §3 makes the gender compulsory on each:
//     FEMININE  печаль · ярость     — and there is no masculine -ь noun here, so
//   nothing in this unit predicts the gender either way. Both hints say it.
//
// ⚠️ TWO FRONTS THAT ONLY LOOK LIKE не+X, so the bar does not apply: `недоумение`
//   (доумение does not exist on its own) and `равнодушный` (a compound of равный
//   + душа, not a negation). Same shape as неизбежный at u62 and неужели at u64.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT67 = {
  id: "ru-u67",
  lang: "ru",
  title: "Тонкие чувства",
  order: 67,
  stage: "b1",
  lessons: [
    {
      id: "ru-u67l1",
      unit: 67,
      lesson: 1,
      title: "Joy, relief and warmth",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the lifted feelings — rapture, admiration, relief, tenderness at something sweet, agitation, and sympathy for someone.",
      items: [
        { id: "ru-u67l1-vostorg", type: "vocab", front: "восторг", reading: "vostorg", meaning: "rapture", accept: ["delight", "elation", "a thrill of joy"], example: { jp: "Дети были в восторге от нового парка, хотя погода была довольно холодная.", en: "The children were in raptures over the new park, although the weather was quite cold." }, drill: { jp: "Это был настоящий восторг", en: "That was genuine rapture" }, hint: "vas-TORG — stress on TORG. MASCULINE. ⚠️ The usual shape is «в восторге от» + the genitive: «он в восторге от книги». It is much stronger than рад from unit 7 and a Russian uses it about children more than about himself." },
        { id: "ru-u67l1-voskhishchenie", type: "vocab", front: "восхищение", reading: "voskhishchenie", meaning: "admiration", accept: ["being greatly impressed", "wonder at something fine", "awe"], example: { jp: "Его работа вызывает восхищение даже у тех, кто с ним не согласен.", en: "His work arouses admiration even in those who do not agree with him." }, drill: { jp: "Это вызывает только восхищение", en: "That arouses only admiration" }, hint: "vas-khi-SHCHE-ni-ye — five syllables, stress on SHCHE, with the scraping х and the long щ. NEUTER (-е). ⚠️ Восторг is your own delight; восхищение is directed AT something you judge to be fine. Уважение from unit 56 is respect without the warmth." },
        { id: "ru-u67l1-oblegchenie", type: "vocab", front: "облегчение", reading: "oblegchenie", meaning: "relief", accept: ["a weight lifted", "the easing of a worry", "respite"], example: { jp: "Когда он наконец ответил, все почувствовали облегчение, хотя новости были плохие.", en: "When he finally replied, everyone felt relief, although the news was bad." }, drill: { jp: "Это было большое облегчение", en: "That was a great relief" }, hint: "ab-likh-CHE-ni-ye — five syllables, stress on CHE, and ⚠️ THE гч IS SAID khch, which the spelling does not show. NEUTER (-е). It sits on лёгкий from unit 19 — to make light." },
        { id: "ru-u67l1-umilenie", type: "vocab", front: "умиление", reading: "umilenie", meaning: "tenderness at something sweet", accept: ["being touched", "a soft warm feeling", "fond emotion"], example: { jp: "Старые фотографии вызывают у неё умиление, и она может смотреть их целый вечер.", en: "Old photographs arouse tenderness in her, and she can look at them all evening." }, drill: { jp: "Это вызывает тихое умиление", en: "That arouses quiet tenderness" }, hint: "u-mi-LE-ni-ye — five syllables, stress on LE. NEUTER (-е). ⚠️ A VERY RUSSIAN WORD with no neat English equivalent: the soft, slightly sentimental warmth you feel at a small child, a kitten or an old photograph." },
        { id: "ru-u67l1-volnenie", type: "vocab", front: "волнение", reading: "volnenie", meaning: "agitation", accept: ["nervous excitement", "being worked up", "a flutter of nerves"], example: { jp: "Перед экзаменом волнение мешало ему думать, хотя он знал всё хорошо.", en: "Before the exam agitation stopped him thinking, although he knew it all well." }, drill: { jp: "Волнение было очень сильное", en: "The agitation was very strong" }, hint: "val-NE-ni-ye — four syllables, stress on NE. NEUTER (-е). ⚠️ It is the same root as волна from unit 54 — the sea is взволновано and so is a person. It covers BOTH nerves and excitement, and Russian does not split them." },
        { id: "ru-u67l1-sochuvstvie", type: "vocab", front: "сочувствие", reading: "sochuvstvie", meaning: "sympathy", accept: ["fellow feeling", "compassion for someone", "feeling with another person"], example: { jp: "Он показал сочувствие очень просто, и именно поэтому все ему верили.", en: "He showed sympathy very plainly, and that is exactly why everyone believed him." }, drill: { jp: "Его сочувствие было очень важно", en: "His sympathy was very important" }, hint: "sa-CHU-stvi-ye — stress on CHU, and ⚠️ THE в IS SILENT: сочувствие is said sa-CHU-stvi-ye, not sa-CHUV-. NEUTER (-е). Built from со- (with) plus чувство from unit 28: feeling-with. Забота from unit 56 is care you DO; сочувствие is what you feel." },
      ],
    },
    {
      id: "ru-u67l2",
      unit: 67,
      lesson: 2,
      title: "The low feelings",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the heavy feelings and tell them apart — a deep longing, sorrow, despondency, grief at a loss, vexation at a small thing, and disappointment.",
      items: [
        { id: "ru-u67l2-toska", type: "vocab", front: "тоска", reading: "toska", meaning: "a deep longing", accept: ["yearning", "an aching sadness", "homesick melancholy"], example: { jp: "Тоска по дому была с ним все эти годы, хотя жил он вполне хорошо.", en: "A longing for home was with him all those years, although he lived perfectly well." }, drill: { jp: "Тоска была очень сильная", en: "The longing was very strong" }, hint: "tas-KA — stress on the last syllable, and the о reduces to a. FEMININE (-а). ⚠️ THE OTHER FAMOUS UNTRANSLATABLE: an aching sadness with no clear cause, often aimed at a place or a person — «тоска по дому». «Тоска» alone can also just mean crushing boredom." },
        { id: "ru-u67l2-pechal", type: "vocab", front: "печаль", reading: "pechal", meaning: "sorrow", accept: ["quiet sadness", "a gentle grief", "woe"], example: { jp: "В её голосе была тихая печаль, но говорила она о самых обычных вещах.", en: "There was a quiet sorrow in her voice, but she was speaking about the most ordinary things." }, drill: { jp: "Печаль была тихая и долгая", en: "The sorrow was quiet and long" }, hint: "pi-CHAL — stress on the last syllable, and the е reduces to a short i. ⚠️ FEMININE despite the -ь, and nothing in the spelling tells you so — unit 1 §3. It is the literary word; a person in conversation says «грустно»." },
        { id: "ru-u67l2-unynie", type: "vocab", front: "уныние", reading: "unynie", meaning: "despondency", accept: ["low spirits", "dejection", "being downhearted"], example: { jp: "После этой новости в отделе было полное уныние, и работать никто не хотел.", en: "After that news there was complete despondency in the department, and nobody wanted to work." }, drill: { jp: "Уныние было полное", en: "The despondency was complete" }, hint: "u-NY-ni-ye — four syllables, stress on NY, with the ы sound from unit 5. NEUTER (-е). ⚠️ It is the word for a flat, hopeless mood that lasts — «впадать в уныние» means to sink into it." },
        { id: "ru-u67l2-gore", type: "vocab", front: "горе", reading: "gore", meaning: "grief", accept: ["deep sorrow at a loss", "a great misfortune", "bereavement"], example: { jp: "У них в семье горе, поэтому собрание будет в другой день.", en: "There is grief in their family, so the meeting will be on another day." }, drill: { jp: "Горе было очень большое", en: "The grief was very great" }, hint: "GO-ri — stress on the first syllable. NEUTER (-е). ⚠️ Do not confuse it with гореть from unit 48, which is to burn — a different root that happens to look close. Горе is the strongest word here and belongs to a real loss, usually a death." },
        { id: "ru-u67l2-dosada", type: "vocab", front: "досада", reading: "dosada", meaning: "vexation", accept: ["annoyance at a small thing", "chagrin", "being put out"], example: { jp: "Он почувствовал досаду, потому что документы снова остались дома.", en: "He felt vexation, because the documents had again been left at home." }, drill: { jp: "Досада была очень сильная", en: "The vexation was very strong" }, hint: "da-SA-da — stress on SA. FEMININE (-а). ⚠️ IT IS THE SMALL-SCALE ONE: досада is what you feel at a missed train or your own forgetfulness, not at a real misfortune. «Какая досада!» is what a Russian says instead of a swear word." },
        { id: "ru-u67l2-razocharovanie", type: "vocab", front: "разочарование", reading: "razocharovanie", meaning: "disappointment", accept: ["being let down", "disillusionment", "the loss of an illusion"], example: { jp: "Это было большое разочарование для всех, кто ждал другого результата.", en: "That was a great disappointment for everyone who had expected a different result." }, drill: { jp: "Разочарование было очень большое", en: "The disappointment was very great" }, hint: "ra-za-cha-ra-VA-ni-ye — SEVEN syllables, stress on VA, and four of the six vowels before it reduce. NEUTER (-е). It is literally a de-enchantment, from очарование, a spell." },
      ],
    },
    {
      id: "ru-u67l3",
      unit: 67,
      lesson: 3,
      title: "Anger, shame and disgust",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the sharp feelings and grade them — fury, irritation, indignation at a wrong, embarrassment, revulsion, and contempt.",
      items: [
        { id: "ru-u67l3-yarost", type: "vocab", front: "ярость", reading: "yarost", meaning: "fury", accept: ["rage", "violent anger", "a towering temper"], example: { jp: "Он пришёл в ярость, когда узнал, что его доклад отменили без всякой причины.", en: "He flew into a fury when he found out that his presentation had been called off without any reason." }, drill: { jp: "Ярость была совсем не нужна", en: "The fury was quite unnecessary" }, hint: "YA-rast — stress on the first syllable. ⚠️ FEMININE despite the -ь — unit 1 §3, and the second of this unit's two. «Прийти в ярость» is the set phrase for losing your temper completely. Злой from unit 28 is merely cross." },
        { id: "ru-u67l3-razdrazhenie", type: "vocab", front: "раздражение", reading: "razdrazhenie", meaning: "irritation", accept: ["being needled", "a prickly mood", "exasperation"], example: { jp: "В его голосе было раздражение, хотя он старался говорить спокойно.", en: "There was irritation in his voice, although he was trying to speak calmly." }, drill: { jp: "Раздражение было слишком сильное", en: "The irritation was too strong" }, hint: "raz-dra-ZHE-ni-ye — five syllables, stress on ZHE. NEUTER (-е). ⚠️ It has a SECOND, medical sense — irritation of the skin — and the same word covers both, exactly as in English." },
        { id: "ru-u67l3-negodovanie", type: "vocab", front: "негодование", reading: "negodovanie", meaning: "indignation", accept: ["moral outrage", "righteous anger", "protest at a wrong"], example: { jp: "Это решение вызывает негодование у всех, кто читал договор.", en: "That decision arouses indignation in everyone who has read the contract." }, drill: { jp: "Негодование было общее", en: "The indignation was general" }, hint: "ni-ga-da-VA-ni-ye — six syllables, stress on VA. NEUTER (-е). ⚠️ IT IS MORAL: негодование is anger at something WRONG, where ярость is anger at something that hurt you. It is the noun of возмущаться from unit 61." },
        { id: "ru-u67l3-smushchenie", type: "vocab", front: "смущение", reading: "smushchenie", meaning: "embarrassment", accept: ["awkward shyness", "being flustered", "confusion in front of people"], example: { jp: "Он говорил с большим смущением, потому что не ждал такого вопроса при всех.", en: "He spoke with great embarrassment, because he had not expected such a question in front of everyone." }, drill: { jp: "Его смущение было понятно", en: "His embarrassment was understandable" }, hint: "smu-SHCHE-ni-ye — four syllables, stress on SHCHE, with the long щ. NEUTER (-е). ⚠️ Стыдно from unit 34 is shame at something you did wrong; смущение is awkwardness with no guilt in it, and Скромный from unit 56 is the character trait." },
        { id: "ru-u67l3-otvrashchenie", type: "vocab", front: "отвращение", reading: "otvrashchenie", meaning: "revulsion", accept: ["disgust", "loathing", "being repelled by something"], example: { jp: "Он говорил об этом с отвращением, и было ясно, что он не играет.", en: "He spoke about it with revulsion, and it was clear that he was not acting." }, drill: { jp: "Отвращение было очень сильное", en: "The revulsion was very strong" }, hint: "at-vra-SHCHE-ni-ye — five syllables, stress on SHCHE. NEUTER (-е). It takes к + the dative for what disgusts you: отвращение к обману. ⚠️ Physical and moral at once — bad food and a bad deed take the same word." },
        { id: "ru-u67l3-prezrenie", type: "vocab", front: "презрение", reading: "prezrenie", meaning: "contempt", accept: ["scorn", "looking down on someone", "disdain"], example: { jp: "В его взгляде было презрение, и спорить с ним уже не хотелось.", en: "There was contempt in his look, and one no longer wanted to argue with him." }, drill: { jp: "Презрение было совсем ясное", en: "The contempt was quite clear" }, hint: "pri-ZRE-ni-ye — four syllables, stress on ZRE. NEUTER (-е). ⚠️ Отвращение is disgust at a thing; презрение is a judgement that a person is beneath you. «С презрением» is the usual adverbial shape." },
      ],
    },
    {
      id: "ru-u67l4",
      unit: 67,
      lesson: 4,
      title: "Shock, regret and the cold mood",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name horror, astonishment, bewilderment and regret — and describe a person as indifferent or a mood as gloomy.",
      items: [
        { id: "ru-u67l4-uzhas", type: "vocab", front: "ужас", reading: "uzhas", meaning: "horror", accept: ["terror", "dread", "a sickening fright"], example: { jp: "Он с ужасом понял, что документы остались в поезде.", en: "He realised with horror that the documents had been left on the train." }, drill: { jp: "Ужас был просто полный", en: "The horror was simply complete" }, hint: "U-zhas — stress on the first syllable. MASCULINE. ⚠️ Страх from unit 28 is ordinary fear; ужас is fear that stops you. ⚠️ And in speech «ужас!» is simply how a Russian says how awful, about anything at all." },
        { id: "ru-u67l4-izumlenie", type: "vocab", front: "изумление", reading: "izumlenie", meaning: "astonishment", accept: ["amazement", "being struck dumb", "utter surprise"], example: { jp: "Все смотрели на него с изумлением, потому что никто не ждал такого ответа.", en: "Everyone looked at him with astonishment, because nobody had expected such an answer." }, drill: { jp: "Изумление было полное", en: "The astonishment was complete" }, hint: "i-zum-LE-ni-ye — five syllables, stress on LE. NEUTER (-е). ⚠️ Удивляться from unit 34 is to be surprised, an everyday reaction; изумление is surprise so complete that you cannot speak, and it is a written word." },
        { id: "ru-u67l4-nedoumenie", type: "vocab", front: "недоумение", reading: "nedoumenie", meaning: "bewilderment", accept: ["puzzlement", "not knowing what to make of it", "perplexity"], example: { jp: "Его объяснение вызывает только недоумение, потому что ответ был совсем двусмысленный.", en: "His explanation arouses only bewilderment, because the answer was quite ambiguous." }, drill: { jp: "Недоумение было общее", en: "The bewilderment was general" }, hint: "ni-da-u-ME-ni-ye — six syllables, stress on ME. NEUTER (-е). ⚠️ It ONLY LOOKS like не + a taught word: «доумение» does not exist on its own, so unit 61 §5(d)'s не+X bar does not apply — the same shape as неизбежный and неужели." },
        { id: "ru-u67l4-sozhalenie", type: "vocab", front: "сожаление", reading: "sozhalenie", meaning: "regret", accept: ["being sorry about something", "rueful feeling", "a wish it had gone otherwise"], example: { jp: "Он говорил о тех годах с сожалением, хотя сам так решил.", en: "He spoke about those years with regret, although he himself had decided so." }, drill: { jp: "Потом было только сожаление", en: "Afterwards there was only regret" }, hint: "sa-zha-LE-ni-ye — five syllables, stress on LE. NEUTER (-е). ⚠️ «К сожалению» is the everyday phrase for unfortunately and you will meet it constantly. ⚠️ Its sibling жалость was REFUSED — see this unit's header for the line between them." },
        { id: "ru-u67l4-ravnodushnyy", type: "vocab", front: "равнодушный", reading: "ravnodushnyy", meaning: "indifferent", accept: ["unmoved", "not caring either way", "cold to something"], example: { jp: "Он равнодушный человек, и ему почти всё одинаково.", en: "He is an indifferent man, and almost everything is the same to him." }, drill: { jp: "Он совсем равнодушный человек", en: "He is a completely indifferent man" }, hint: "rav-na-DUSH-nyy — four syllables, stress on DUSH. A compound of равный (equal) and душа from unit 28: equal-souled. ⚠️ NOT a не+X word, so the bar does not apply. It takes к + the dative: равнодушный к музыке." },
        { id: "ru-u67l4-mrachnyy", type: "vocab", front: "мрачный", reading: "mrachnyy", meaning: "sombre in mood", accept: ["dark in feeling", "grim", "overcast in spirit"], example: { jp: "После этого разговора у него был мрачный вид, но объяснять он ничего не стал.", en: "After that conversation he had a gloomy look, but he did not explain anything." }, drill: { jp: "У него был мрачный вид", en: "He had a gloomy look" }, hint: "MRACH-nyy — stress on the first syllable, and the opening мр takes no vowel. ⚠️ It describes a mood, a face, a room and a forecast alike. Тёмный from unit 16 is dark to the eye; мрачный is dark in feeling." },
      ],
    },
  ],
};
