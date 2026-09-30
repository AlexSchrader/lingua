// RU Unit 39 — Мнение и речь ("Opinion and speech") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Conventions: ru/unit1.js §1–§10 and §A–§D, plus ru/unit31.js §1–§7 for the A2
// band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Connecting words" AND IT WAS SPOKEN FOR TWICE OVER.
// A1's u19l3 is the connector lesson (но · или · если · поэтому · значит) with
// что at u2l3 and и · а from the alphabet band — AND block 2's u46 is "Grammar 4 —
// compound and linked clauses", which is subordination itself. Taking connectors
// here would have gutted u46. Rethemed to о · про · при plus the nouns of opinion
// and speech, which was the measured hole: a learner could talk, and could not say
// what a conversation was ABOUT. unit31.js §6 has the table.
//
// FREE: о | об | обо
// ⚠️ SAME CASE AS `к` IN u34, AND FOR THE SAME REASON. `о` is the preposition this
// unit is built on — мнение О фильме, говорить О работе — and it is ONE LETTER, so
// unit1.js §5's mechanical limit means it can never be a card: `canCloze` needs a
// front of at least two characters. §5 lists о among exactly these refusals. It is
// declared FREE, with its two spelling variants: `об` before a vowel (об этом) and
// `обо` before мне (обо мне). The claim the FREE line makes is that a learner meets
// it in sentences and is never asked to produce it alone — which holds, because
// `про` is carded instead and its hint teaches о as the formal twin.
//
// WHAT THE UNIT WIDENS. unit1.js §5 gave the PREPOSITIONAL exactly one job —
// "в/на + location only" — and l1 gives it two more: о + prepositional for the
// TOPIC of speech or thought, and при + prepositional for someone's PRESENCE.
// That is the fifth of Russian's six cases to be taught as more than a frame, and
// the last one this block touches.
//
// ⚠️ REFUSED IN THIS UNIT, so no later block spends a slot rediscovering it:
//   `значение` — vs u19 `значит`. One root and the same idea; `смысл` covers the
//        meaning-of-a-word sense with no overlap at all.
//   `объяснение` — vs u34 `объяснять`, carded by this very block.
//   `разговор` — vs u4 `говорить`, which unit1.js §D already refused by name.
//   `рассказ` — vs u34 `рассказывать`, carded by this very block. One of the pair,
//        not both.
//   `сомнение` — vs u35 `сомневаться`, same rule. `отказ` and `согласие` were
//        refused at u34 for the same reason and stay refused.
//   `тишина` — vs u5 `тихо` AND u29 `тихий`. Two on that root is already enough;
//        `шум` carries the lesson instead.
//   `слух` — vs u4 `слышать`.
//   `истина` — REFUSED FOR A DIFFERENT REASON, and it is a gloss collision rather
//        than a lexeme one: it means "a truth", which normalises to "truth", and
//        u22 правда is already "the truth". No second natural English word exists,
//        so unit31.js §1(c) applies and the card is simply not made.
//   MEASURED FREE AND LEFT FOR BLOCK 2: `содержание` · `обсуждение` · `молчание` ·
//        `убеждение`, all free on 2026-09-29.
//
// ⚠️ GLOSS COLLISIONS DESIGNED OUT:
//   `мысль` "a thought" vs u9 идея "an idea" and u22 думать "to think" — and the
//        hint says which is which, because English blurs all three.
//   `взгляд` "a look" vs u31 посмотреть "to take a look" and u23 смотреть "to
//        watch".
//   `ложь` "a lie" vs u22 правда "the truth".
//   `спор` "an argument" — and its READING is "spor" against u9 спорт "sport",
//        one letter apart, checked and distinct.
//   `мысль` "mysl" against `смысл` "smysl" — NOT a §1(b) soft-sign pair, because
//        the consonant clusters differ; checked rather than assumed.
//   `диалог` and `факт` were both checked for the §9 free pass with the real
//        checkProduce: "a dialogue" does not normalise onto "dialog", and "a fact"
//        does not normalise onto "fakt".
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT39 = {
  id: "ru-u39",
  lang: "ru",
  title: "Мнение и речь",
  order: 39,
  stage: "a2",
  lessons: [
    {
      id: "ru-u39l1",
      unit: 39,
      lesson: 1,
      title: "What it is about",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what a conversation, a book or a film is about, and say in whose presence something was said.",
      items: [
        { id: "ru-u39l1-pro", type: "vocab", front: "про", reading: "pro", meaning: "about", accept: ["on the subject of", "concerning", "regarding"], example: { jp: "Мы говорим про новый фильм.", en: "We are talking about the new film." }, drill: { jp: "Это книга про наш город", en: "This is a book about our town" }, hint: "One syllable, PRO. ★ It takes the ACCUSATIVE: про фильм, про нас. Its formal twin is о plus the PREPOSITIONAL — о фильмЕ — and the two mean the same thing, with про the more casual of them." },
        { id: "ru-u39l1-pri", type: "vocab", front: "при", reading: "pri", meaning: "in the presence of", accept: ["in front of", "with someone there", "in the time of"], example: { jp: "Не говори про это при детях.", en: "Do not talk about that in front of the children." }, drill: { jp: "При детях он всегда тихий", en: "In front of the children he is always quiet" }, hint: "One syllable, PRI. ★ It takes the PREPOSITIONAL: при детЯХ, при мнЕ. In someone's presence — and also «in the time of», при Петре. It is the one preposition here that never sounds casual." },
        { id: "ru-u39l1-tema", type: "vocab", front: "тема", reading: "tema", meaning: "a subject", accept: ["a topic", "a theme", "what it is about"], example: { jp: "Это очень трудная тема для меня.", en: "This is a very hard subject for me." }, drill: { jp: "Это очень важная тема", en: "This is a very important subject" }, hint: "TE-ma — stress on the first syllable. Feminine (-а). The subject of a conversation or a lesson. «На эту тему» — on this subject — with на plus the accusative." },
        { id: "ru-u39l1-beseda", type: "vocab", front: "беседа", reading: "beseda", meaning: "a conversation", accept: ["a talk", "a chat with substance", "a discussion"], example: { jp: "Это была очень долгая беседа.", en: "That was a very long conversation." }, drill: { jp: "Это была хорошая беседа", en: "That was a good conversation" }, hint: "be-SE-da — stress on SE. Feminine (-а). A conversation with some substance to it, where говорить is just talking. Russian schools call a discussion lesson a беседа." },
        { id: "ru-u39l1-dialog", type: "vocab", front: "диалог", reading: "dialog", meaning: "a dialogue", accept: ["an exchange", "a two-way conversation", "a dialog"], example: { jp: "Наш диалог был очень трудный.", en: "Our dialogue was very hard." }, drill: { jp: "Это был очень трудный диалог", en: "That was a very hard dialogue" }, hint: "di-a-LOG — stress on the last syllable, and the final г says k. Masculine. Two people talking — where беседа can be several." },
        { id: "ru-u39l1-ton", type: "vocab", front: "тон", reading: "ton", meaning: "a tone", accept: ["a tone of voice", "the way it sounds", "a manner of speaking"], example: { jp: "Мне не нравится его тон.", en: "I do not like his tone." }, drill: { jp: "У него очень плохой тон", en: "He has a very bad tone" }, hint: "One syllable, TON. Masculine. The tone of a voice or of a letter. ⚠️ Nothing at all to do with тонкий, thin — the two only look alike." },
      ],
    },
    {
      id: "ru-u39l2",
      unit: 39,
      lesson: 2,
      title: "Your opinion",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give an opinion about something with о plus the prepositional, and talk about the meaning, the point and the conclusion.",
      items: [
        { id: "ru-u39l2-mnenie", type: "vocab", front: "мнение", reading: "mnenie", meaning: "an opinion", accept: ["a view", "what you think", "a judgement"], example: { jp: "Моё мнение об этом фильме плохое.", en: "My opinion of this film is bad." }, drill: { jp: "Какое твоё мнение об этом", en: "What is your opinion about this" }, hint: "MNE-ni-ye — stress on the first syllable. Neuter (-ие). ★ «Мнение о чём» — об этом фильмЕ — with о plus the PREPOSITIONAL. Note that о becomes об in front of a vowel." },
        { id: "ru-u39l2-smysl", type: "vocab", front: "смысл", reading: "smysl", meaning: "a meaning", accept: ["the point of it", "the sense", "significance"], example: { jp: "Я не понимаю смысла этого слова.", en: "I do not understand the meaning of this word." }, drill: { jp: "Какой смысл этого слова", en: "What is the meaning of this word" }, hint: "One syllable, SMYSL — four consonants around a single ы, and Russian is perfectly content with that. Masculine. «Нет смысла» — there is no point — takes the genitive after нет." },
        { id: "ru-u39l2-mysl", type: "vocab", front: "мысль", reading: "mysl", meaning: "a thought", accept: ["an idea in your head", "a notion", "something you thought"], example: { jp: "Это очень хорошая мысль.", en: "That is a very good thought." }, drill: { jp: "У меня есть одна мысль", en: "I have one thought" }, hint: "One syllable, MYSL. FEMININE — an -ь noun, so the gender has to be learned. идея from unit 9 is a plan you could act on; мысль is what passes through your head. думать is the verb for both." },
        { id: "ru-u39l2-vyvod", type: "vocab", front: "вывод", reading: "vyvod", meaning: "a conclusion", accept: ["an inference", "what you conclude", "a finding"], example: { jp: "Наш вывод был очень трудный.", en: "Our conclusion was very hard." }, drill: { jp: "Это очень важный вывод", en: "That is a very important conclusion" }, hint: "VY-vat — stress on the first syllable, and the final д says t. Masculine. «Сделать вывод» — to draw a conclusion — using сделать from unit 31." },
        { id: "ru-u39l2-vzglyad", type: "vocab", front: "взгляд", reading: "vzglyad", meaning: "a look", accept: ["a glance", "an expression on a face", "a point of view"], example: { jp: "Её взгляд был очень грустный.", en: "Her look was very sad." }, drill: { jp: "Это был очень злой взгляд", en: "That was a very angry look" }, hint: "One syllable, VZGLYAD, and the д says t. Masculine. The look on a face — and a point of view: «на мой взгляд», in my opinion. посмотреть from unit 31 is the act; this is the look itself." },
        { id: "ru-u39l2-sut", type: "vocab", front: "суть", reading: "sut", meaning: "the essence", accept: ["the heart of the matter", "the gist", "what it really is"], example: { jp: "Суть этой проблемы очень трудная.", en: "The essence of this problem is very hard." }, drill: { jp: "Это суть нашей проблемы", en: "This is the essence of our problem" }, hint: "One syllable, SUT. FEMININE — another -ь noun. The heart of the matter. «В чём суть?» is how a Russian asks you to cut to the point." },
      ],
    },
    {
      id: "ru-u39l3",
      unit: 39,
      lesson: 3,
      title: "Saying it out loud",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe how something was said — the voice, the phrase, the remark — and complain about the noise.",
      items: [
        { id: "ru-u39l3-rech", type: "vocab", front: "речь", reading: "rech", meaning: "speech", accept: ["a speech", "the power of speech", "spoken language"], example: { jp: "Его речь была очень долгая.", en: "His speech was very long." }, drill: { jp: "Это была хорошая речь", en: "That was a good speech" }, hint: "One syllable, RECH, with a soft ch. FEMININE — an -ь noun. Both «a speech» you give and «speech» as the faculty. «Русская речь» is spoken Russian, as against русский язык, the language itself." },
        { id: "ru-u39l3-golos", type: "vocab", front: "голос", reading: "golos", meaning: "a voice", accept: ["the voice", "a vote", "the sound of someone"], example: { jp: "У неё очень тихий голос.", en: "She has a very quiet voice." }, drill: { jp: "У него очень плохой голос", en: "He has a very bad voice" }, hint: "GO-las — stress on the first syllable, and the second о says a. Masculine. The voice you speak or sing with, and also a vote in an election. ⚠️ Its plural throws the stress to the end: голосА." },
        { id: "ru-u39l3-vyrazhenie", type: "vocab", front: "выражение", reading: "vyrazhenie", meaning: "an expression", accept: ["a set phrase", "a turn of phrase", "the look on a face"], example: { jp: "Это очень трудное выражение.", en: "That is a very hard expression." }, drill: { jp: "Это новое выражение для меня", en: "This is a new expression for me" }, hint: "vy-ra-ZHE-ni-ye — stress on ZHE. Neuter (-ие). A set phrase in a language, and the expression on a face. Both senses are equally common." },
        { id: "ru-u39l3-zamechanie", type: "vocab", front: "замечание", reading: "zamechanie", meaning: "a remark", accept: ["a comment", "an observation", "a reprimand"], example: { jp: "Его замечание было очень важное.", en: "His remark was very important." }, drill: { jp: "Это было очень плохое замечание", en: "That was a very bad remark" }, hint: "za-me-CHA-ni-ye — stress on CHA. Neuter (-ие). A remark — and in a school, a telling-off: «сделать замечание» is what a teacher does when you talk in class." },
        { id: "ru-u39l3-perevod", type: "vocab", front: "перевод", reading: "perevod", meaning: "a translation", accept: ["a rendering", "a money transfer", "translating"], example: { jp: "Перевод этой книги очень хороший.", en: "The translation of this book is very good." }, drill: { jp: "Это плохой перевод этого слова", en: "This is a bad translation of this word" }, hint: "pe-re-VOT — stress on the last syllable, and the final д says t. Masculine. A translation, and also a transfer of money. Its root means leading, with пере- across — leading words over to the other side." },
        { id: "ru-u39l3-shum", type: "vocab", front: "шум", reading: "shum", meaning: "noise", accept: ["a noise", "a racket", "din"], example: { jp: "Шум на этой улице очень большой.", en: "The noise on this street is very great." }, drill: { jp: "Здесь всегда очень большой шум", en: "There is always a lot of noise here" }, hint: "One syllable, SHUM. Masculine. Noise. Its adverb шумно, «it is noisy», is built exactly the way больно was in unit 34 — no subject, just a state. тихо from unit 5 is its opposite." },
      ],
    },
    {
      id: "ru-u39l4",
      unit: 39,
      lesson: 4,
      title: "True, false, and argued over",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say whether something is a fact or a lie, report a piece of news, and describe an argument and an attitude.",
      items: [
        { id: "ru-u39l4-fakt", type: "vocab", front: "факт", reading: "fakt", meaning: "a fact", accept: ["something true", "a hard fact", "the facts"], example: { jp: "Это очень важный факт.", en: "That is a very important fact." }, drill: { jp: "Это факт нашей истории", en: "This is a fact of our history" }, hint: "One syllable, FAKT. Masculine. A fact as a thing. ⚠️ For the English phrase «in fact» Russian says «на самом деле» instead — do not build it out of факт." },
        { id: "ru-u39l4-dokazatelstvo", type: "vocab", front: "доказательство", reading: "dokazatelstvo", meaning: "proof", accept: ["evidence", "a piece of evidence", "a demonstration"], example: { jp: "У нас нет доказательства этого факта.", en: "We have no proof of this fact." }, drill: { jp: "Это очень важное доказательство", en: "That is a very important proof" }, hint: "da-ka-ZA-tel-stva — five syllables, stress on ZA. Neuter (-о). Proof or evidence. Its root is сказать from unit 31 with до- — saying the thing all the way to the end." },
        { id: "ru-u39l4-lozh", type: "vocab", front: "ложь", reading: "lozh", meaning: "a lie", accept: ["lying", "an untruth", "a falsehood"], example: { jp: "Это не правда, это ложь.", en: "That is not the truth, that is a lie." }, drill: { jp: "Это очень большая ложь", en: "That is a very big lie" }, hint: "One syllable, LOZH. FEMININE — an -ь noun. Set against правда from unit 22. ⚠️ Its genitive is лжи, which loses the о altogether — one of the language's sharpest stem changes." },
        { id: "ru-u39l4-spor", type: "vocab", front: "спор", reading: "spor", meaning: "an argument", accept: ["a dispute", "a quarrel over something", "a debate"], example: { jp: "Наш спор про этот фильм был долгий.", en: "Our argument about this film was long." }, drill: { jp: "Это был очень трудный спор", en: "That was a very hard argument" }, hint: "One syllable, SPOR. Masculine. An argument in the sense of a dispute, not a reason. ⚠️ Not спорт from unit 9 — one letter apart and nothing in common." },
        { id: "ru-u39l4-novost", type: "vocab", front: "новость", reading: "novost", meaning: "a piece of news", accept: ["news", "an item of news", "something new"], example: { jp: "У меня есть хорошая новость для тебя.", en: "I have a piece of good news for you." }, drill: { jp: "Это очень плохая новость", en: "That is a very bad piece of news" }, hint: "NO-vast — stress on the first syllable. FEMININE — another -ость noun. ★ RUSSIAN COUNTS IT and English cannot: одна новость is ONE piece of news, and новости in the plural is the news programme." },
        { id: "ru-u39l4-otnoshenie", type: "vocab", front: "отношение", reading: "otnoshenie", meaning: "a relationship", accept: ["an attitude", "relations between people", "how you regard something"], example: { jp: "Их отношение к работе очень серьёзное.", en: "Their attitude to work is very serious." }, drill: { jp: "Это его отношение к нам", en: "This is his attitude towards us" }, hint: "at-na-SHE-ni-ye — stress on SHE. Neuter (-ие). ★ TWO SENSES: «отношение к чему», with к plus the DATIVE from unit 34, is an ATTITUDE towards something; отношения in the plural are the relations between people." },
      ],
    },
  ],
};
