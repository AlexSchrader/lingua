// RU Unit 23 — Глаголы и падежи ("Verbs and cases") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Conventions are declared in ru/unit1.js §1–§10 and bind every card here.
//
// ★ THIS SLOT WAS "Grammar 2 — verbs and particles" AND THAT TITLE IS THE SECOND
// JAPANESE ARTEFACT IN RUSSIAN — the first being u21's "Characters 5". A PARTICLE
// is a Japanese word class: は・が・を・に・で, a free-standing marker that sits
// after a word and says what job it does. **Russian has no such thing.** Russian
// marks the same jobs by CHANGING THE END OF THE WORD — six cases — and it has
// prepositions, which are not particles and which GOVERN a case rather than
// replacing one. CLAUDE.md's "No front language" rule is exactly this: the CEFR
// band decides the level, the language decides the content of the slot. So the
// slot keeps its grammar job and is rethemed to the job Russian actually has:
// падежи, the cases, which unit1.js §5 assigns to this unit.
//
// Block 2 reported "the Grammar slots genuinely applied" and was right about u22
// and u24; this one it did not look at, because u22–u24 were not its range.
//
// ⚠️ WHAT THIS UNIT TEACHES, AND THE HARD LIMIT unit1.js §5 PUTS ON IT.
//     ACCUSATIVE      the direct object. l1's six verbs all take one, and the
//                     hints name the endings (fem -а → -у, masc inanimate
//                     unchanged). l3's через takes it too.
//     PREPOSITIONAL   в/на + location. l2. `на` is the only preposition of this
//                     group that can be a card at all — see the note below.
//     GENITIVE        ONLY the two jobs §5 allows: possession (`у меня`) and
//                     negation (нет + genitive). Both are l4.
//     INSTRUMENTAL    nothing here touches it. Deferred to A2 by §5.
//
// ⚠️ SIX PREPOSITIONS A1 OBVIOUSLY WANTS ARE DELIBERATELY NOT CARDED, and this is
// the one place a later block should look before adding them. `из` · `для` ·
// `без` · `до` · `от` · `около` all govern the GENITIVE, and §5 says A1's genitive
// is negation and possession and that u22–u24 "must not exceed it". Carding them
// would add a third, fourth and fifth genitive job by the back door. They are an
// A2 lesson, as a set, with the genitive paradigm behind them. Block 3 did not
// quietly widen a rule block 1 wrote.
//
// ⚠️ AND ONE-LETTER PREPOSITIONS CANNOT BE CARDS AT ALL — a mechanical limit, not
// a judgement. `canCloze` (src/store/cardRouting.js) requires a front of at least
// two characters, so `в` · `с` · `у` · `к` · `о` would each ship a card that the
// cloze and sentence:build cards silently refuse to route. в is the commonest word
// in Russian and it is met in hundreds of sentences from u1 on — every one of them
// in scope, because в is also a u1 glyph front — so the learner acquires it by
// exposure and `на` carries the explicit в/на teaching in its hint.
//
// ⚠️ LEXEME CALLS RECORDED (unit1.js §D — the tool is blind to Cyrillic, so these
// are judgements):
//   `у меня` beside u4 `меня` — a FROZEN FRAME meaning "I have", which is not the
//        sum of its parts: Russian has no verb for to have, and у on its own is
//        not taught. Same shape as u7 `до свидания`. Allowed.
//   `никто` beside u8 `кто`, and `нигде` beside u8 `где` — the ни- series, as u7
//        `ничего` already was and u22 `никогда` now is. Allowed as a series.
//   `быстрый` beside u5 `быстро`, and `прямой` beside u14 `прямо` — adverb and
//        adjective are different lexemes with different syntax, settled by block 1
//        at unit1.js §B and used by block 2 throughout u19. The glosses differ by
//        WORD, not by parenthetical: "quickly"/"fast", "straight on"/"direct".
//   `близко` beside u10 `рядом` and u14 `далеко` — three separate distances, three
//        separate words, no shared root. Allowed.
//
// ⚠️ A GLOSS COLLISION FOUND BY MEASUREMENT AND CORRECTED: `назад` was glossed
// "back", and u20 `спина` is glossed "a back" — `normalizeMeaning` strips the
// article, so the two produce prompts were one string apart. назад now takes
// "backwards" and keeps "back" and "ago" in accept[].
//   AVOIDED on the same test: `слушать` (vs u4 слышать — one root, and "to hear"
//        beside "to listen" is one prompt with two answers) · `открывать` and
//        `закрывать` (vs u12 открыто/закрыто) · `отвечать` (vs u7 ответ) ·
//        `просить` (would have sat in the same lesson as спрашивать with the gloss
//        "to ask for" — too close to read apart) · `находиться`, already cut by
//        block 2 for the same reason its drill could not carry the front.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT23 = {
  id: "ru-u23",
  lang: "ru",
  title: "Глаголы и падежи",
  order: 23,
  stage: "a1",
  lessons: [
    {
      id: "ru-u23l1",
      unit: 23,
      lesson: 1,
      title: "Put a direct object after the verb",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you are watching, showing, giving, getting, meeting and asking about — the accusative in six verbs.",
      items: [
        { id: "ru-u23l1-smotret", type: "vocab", front: "смотреть", reading: "smotret", meaning: "to watch", accept: ["to look", "to look at", "to view"], example: { jp: "Я люблю смотреть старые фильмы вечером.", en: "I like watching old films in the evening." }, drill: { jp: "Мы любим смотреть этот фильм", en: "We like watching this film" }, hint: "sma-TRET, stress at the end: я смотрю, ты смотришь — the т softens into щ in the я form. ⚠️ With НА it means to look AT: смотреть на дом. Without на it is to watch, and the thing watched goes ACCUSATIVE: смотреть фильм. Unit 4's видеть is to see without trying to." },
        { id: "ru-u23l1-pokazyvat", type: "vocab", front: "показывать", reading: "pokazyvat", meaning: "to show", accept: ["to point out", "to display", "to demonstrate"], example: { jp: "Он всегда показывает нам новые фотографии.", en: "He always shows us new photographs." }, drill: { jp: "Нужно показывать билет в автобусе", en: "One must show a ticket on the bus" }, hint: "pa-KA-zy-vat, stress on KA: я показываю, ты показываешь. It takes TWO objects at once — показывать ЧТО (accusative) КОМУ (dative): показывать билет водителю. The dative half is one of the fixed frames unit1.js §5 allows at A1." },
        { id: "ru-u23l1-davat", type: "vocab", front: "давать", reading: "davat", meaning: "to give", accept: ["to hand over", "to let have"], example: { jp: "Мама всегда давала нам хлеб и молоко.", en: "Mum always gave us bread and milk." }, drill: { jp: "Не нужно давать ему деньги", en: "One should not give him money" }, hint: "da-VAT, stress at the end — and the present tense mutates hard: я даю, ты даёшь, он даёт. Like показывать it wants an accusative thing and a dative person: давать книгу брату." },
        { id: "ru-u23l1-poluchat", type: "vocab", front: "получать", reading: "poluchat", meaning: "to receive", accept: ["to get", "to obtain", "to be given"], example: { jp: "Мы получаем письмо и подарок каждый год.", en: "We receive a letter and a present every year." }, drill: { jp: "Здесь можно получать письмо и чек", en: "Here one can receive a letter and a receipt" }, hint: "pa-lu-CHAT, stress at the end: я получаю, ты получаешь. It is давать seen from the other side — one gives, the other receives — and both put the thing in the accusative." },
        { id: "ru-u23l1-vstrechat", type: "vocab", front: "встречать", reading: "vstrechat", meaning: "to meet", accept: ["to run into", "to go and meet", "to greet on arrival"], example: { jp: "Я часто встречаю друга на нашей улице.", en: "I often meet a friend on our street." }, drill: { jp: "Нужно встречать бабушку на вокзале", en: "One must meet grandma at the station" }, hint: "fstri-CHAT, stress at the end: я встречаю, ты встречаешь. TWO senses: to bump into someone, and to go and meet an arriving guest. Встречать бабушку на вокзале is what a Russian host does, and it is not treated as optional politeness." },
        { id: "ru-u23l1-sprashivat", type: "vocab", front: "спрашивать", reading: "sprashivat", meaning: "to ask", accept: ["to enquire", "to put a question", "to ask about"], example: { jp: "Он всегда спрашивает, где наш дом.", en: "He always asks where our house is." }, drill: { jp: "Не нужно спрашивать его адрес", en: "One should not ask for his address" }, hint: "SPRA-shi-vat, stress first: я спрашиваю, ты спрашиваешь. ⚠️ It asks a QUESTION. Asking FOR a thing is просить, which A2 teaches and which is deliberately kept out of this lesson so the two never share a prompt. Unit 7's вопрос is the noun, from a different root." },
      ],
    },
    {
      id: "ru-u23l2",
      unit: 23,
      lesson: 2,
      title: "Say where it is, with в and на",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Answer где: on the table, downstairs, upstairs, close by, everywhere, or nowhere at all.",
      items: [
        { id: "ru-u23l2-na", type: "vocab", front: "на", reading: "na", meaning: "on", accept: ["onto", "on top of", "at"], example: { jp: "Ваша сумка на столе, а ключ на полке.", en: "Your bag is on the table, and the key is on the shelf." }, drill: { jp: "Ваша сумка на нашем столе", en: "Your bag is on our table" }, hint: "NA, one syllable, and it never takes stress of its own — it leans on the word after it. ⚠️ TWO CASES, AND THIS IS THE LESSON: на столЕ (prepositional) is resting ON the table; на стол (accusative) is moving ONTO it. Where в is inside something, на is on its surface — and Russian also uses на for на работе, на улице, на площади." },
        { id: "ru-u23l2-vnizu", type: "vocab", front: "внизу", reading: "vnizu", meaning: "downstairs", accept: ["below", "down there", "at the bottom"], example: { jp: "Наша кухня внизу, а спальня наверху.", en: "Our kitchen is downstairs, and the bedroom is upstairs." }, drill: { jp: "Магазин внизу а касса наверху", en: "The shop is downstairs and the till is upstairs" }, hint: "vni-ZU, stress at the end. It answers где, not куда — внизу is where a thing IS. To send someone DOWN, Russian drops the у and says вниз: one letter, and a different question." },
        { id: "ru-u23l2-naverkhu", type: "vocab", front: "наверху", reading: "naverkhu", meaning: "upstairs", accept: ["above", "up there", "at the top"], example: { jp: "Наш туалет наверху, а не внизу.", en: "Our toilet is upstairs, not downstairs." }, drill: { jp: "Наша спальня и ванная наверху", en: "Our bedroom and bathroom are upstairs" }, hint: "na-vir-KHU, stress at the end. The partner of внизу and it behaves identically: наверху is where, наверх is where-to. Both throw the stress onto the last syllable." },
        { id: "ru-u23l2-blizko", type: "vocab", front: "близко", reading: "blizko", meaning: "close by", accept: ["near", "not far", "nearby", "a short way off"], example: { jp: "Аптека очень близко, а больница далеко.", en: "The chemist is very close by, and the hospital is far away." }, drill: { jp: "Наша аптека очень близко сегодня", en: "Our chemist is very close by today" }, hint: "BLIZ-ka, stress first. It is an ADVERB: аптека близко. ⚠️ Unit 10's рядом is right beside, almost touching; близко is a short distance away; unit 14's далеко is the opposite of both." },
        { id: "ru-u23l2-vezde", type: "vocab", front: "везде", reading: "vezde", meaning: "everywhere", accept: ["in every place", "all over", "all around"], example: { jp: "Зимой снег везде, даже на дороге.", en: "In winter there is snow everywhere, even on the road." }, drill: { jp: "Зимой снег везде в городе", en: "In winter there is snow everywhere in the city" }, hint: "viz-DE, stress at the end. It answers где for every place at once. Unit 3's всё is everyTHING and везде is everyWHERE — two different words with nothing in common but the English -every." },
        { id: "ru-u23l2-nigde", type: "vocab", front: "нигде", reading: "nigde", meaning: "nowhere", accept: ["not anywhere", "in no place"], example: { jp: "Я нигде не вижу наши ключи.", en: "I cannot see our keys anywhere." }, drill: { jp: "Я нигде не вижу мою сумку", en: "I cannot see my bag anywhere" }, hint: "nig-DE, stress at the end. ⚠️ THE DOUBLE NEGATIVE, exactly as with unit 22's никогда: нигде НЕ вижу. A ни- word plus не is correct Russian, and dropping the не is the error. The series so far: никогда, нигде, никто." },
      ],
    },
    {
      id: "ru-u23l3",
      unit: 23,
      lesson: 3,
      title: "Say where it is heading and how long until then",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Answer куда and когда with the accusative: across, in an hour, forward, back, two years ago.",
      items: [
        { id: "ru-u23l3-cherez", type: "vocab", front: "через", reading: "cherez", meaning: "across", accept: ["through", "over", "in (after a period of time)"], example: { jp: "Автобус будет здесь через пятнадцать минут.", en: "The bus will be here in fifteen minutes." }, drill: { jp: "Мы будем дома через час", en: "We will be home in an hour" }, hint: "CHE-rez, stress first. ⚠️ TWO senses and BOTH take the accusative: через мост, across the bridge, and через час, in an hour. The time sense is the one you will say daily — Russian has no other way to say in an hour." },
        { id: "ru-u23l3-vperyod", type: "vocab", front: "вперёд", reading: "vperyod", meaning: "forward", accept: ["ahead", "onward", "forwards"], example: { jp: "Смотри вперёд, а не назад.", en: "Look forward, not back." }, drill: { jp: "Нужно смотреть только вперёд", en: "One must look only forward" }, hint: "vpi-RYOD, stress on the ё, which in Russian is always the stressed vowel. It answers куда — motion, not position. Russians shout Вперёд! where English shouts Come on! Its opposite назад is the next card." },
        { id: "ru-u23l3-nazad", type: "vocab", front: "назад", reading: "nazad", meaning: "backwards", accept: ["back", "ago", "to the rear"], example: { jp: "Мы были здесь два года назад.", en: "We were here two years ago." }, drill: { jp: "Это было три года назад", en: "That was three years ago" }, hint: "na-ZAD, stress at the end. ⚠️ TWO senses: backwards in space (шаг назад), and AGO in time (два года назад). In the time sense it goes AFTER the period, exactly where English puts ago — a lucky coincidence, and not one to expect elsewhere." },
        { id: "ru-u23l3-vokrug", type: "vocab", front: "вокруг", reading: "vokrug", meaning: "all around", accept: ["round about", "on every side", "surrounding"], example: { jp: "Вокруг очень тихо, и это приятно.", en: "It is very quiet all around, and that is pleasant." }, drill: { jp: "Вокруг очень тихо и тепло", en: "It is very quiet and warm all around" }, hint: "va-KRUG, stress at the end. Taught here as an ADVERB — Вокруг тихо — which needs no case at all. With a noun after it (вокруг дома) it takes the genitive, and A1 keeps the genitive to the two jobs unit1.js §5 lists, so that use waits for A2." },
        { id: "ru-u23l3-bystryy", type: "vocab", front: "быстрый", reading: "bystryy", meaning: "fast", accept: ["quick", "rapid", "a fast one"], example: { jp: "Это очень быстрый автобус, и он всегда здесь рано.", en: "This is a very fast bus, and it is always here early." }, drill: { jp: "Быстрый автобус это очень хорошо", en: "A fast bus is a very good thing" }, hint: "BYS-tryy, stress first. The ADJECTIVE belonging to unit 5's adverb быстро: быстро говорить, but быстрый автобус. Two different lexemes with different syntax — the same arrangement as хорошо and хороший in unit 19." },
        { id: "ru-u23l3-pryamoy", type: "vocab", front: "прямой", reading: "pryamoy", meaning: "direct", accept: ["straight", "a direct one", "non-stop"], example: { jp: "Наш автобус прямой, и это очень удобно.", en: "Our bus is direct, and that is very convenient." }, drill: { jp: "Прямой автобус это очень удобно", en: "A direct bus is very convenient" }, hint: "pri-MOY, stress at the end. The ADJECTIVE to unit 14's adverb прямо: идите прямо, but прямой автобус — one that makes no changes on the way. A прямой ответ is a straight answer, exactly as in English." },
      ],
    },
    {
      id: "ru-u23l4",
      unit: 23,
      lesson: 4,
      title: "Say what you have and what there is none of",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say you have something, that nobody knows, that there is none at all, and whether a thing is empty, full or free.",
      items: [
        { id: "ru-u23l4-umenya", type: "vocab", front: "у меня", reading: "umenya", meaning: "I have", accept: ["I have got", "in my possession", "I own"], example: { jp: "У меня есть кошка, и она очень красивая.", en: "I have a cat, and she is very beautiful." }, drill: { jp: "У меня есть новая кошка", en: "I have a new cat" }, hint: "u mi-NYA — TWO words, stress on NYA, and у never takes stress. ⚠️ RUSSIAN HAS NO VERB MEANING TO HAVE. It says at-me there-is: У меня есть кошка. The owner goes GENITIVE after у — у меня, у тебя, у нас. To say you do NOT have it, есть becomes нет and the thing goes genitive too: у меня нет кошки. These two frames are the whole of A1's genitive (unit1.js §5)." },
        { id: "ru-u23l4-nikto", type: "vocab", front: "никто", reading: "nikto", meaning: "nobody", accept: ["no one", "not a single person", "nobody at all"], example: { jp: "Никто не знает, где наш ключ.", en: "Nobody knows where our key is." }, drill: { jp: "Никто не знает этот адрес", en: "Nobody knows this address" }, hint: "nik-TO, stress at the end. ⚠️ The double negative again: никто НЕ знает. It is unit 8's кто with ни- in front, and it stays singular even when it means not one person of many. Nothing-as-a-thing is unit 7's ничего." },
        { id: "ru-u23l4-sovsem", type: "vocab", front: "совсем", reading: "sovsem", meaning: "at all", accept: ["completely", "entirely", "utterly"], example: { jp: "Здесь совсем нет хлеба, и магазин уже закрыт.", en: "There is no bread here at all, and the shop is already closed." }, drill: { jp: "Здесь совсем нет хлеба сегодня", en: "There is no bread here at all today" }, hint: "sav-SEM, stress at the end. With a positive it means completely — совсем новый, brand new. With a negative it means not in the slightest — совсем не понимаю. The negative use is much the commoner of the two." },
        { id: "ru-u23l4-pustoy", type: "vocab", front: "пустой", reading: "pustoy", meaning: "empty", accept: ["an empty one", "blank", "with nothing in it"], example: { jp: "Этот стакан пустой, а тот полный.", en: "This glass is empty, and that one is full." }, drill: { jp: "Этот большой стакан совсем пустой", en: "This big glass is completely empty" }, hint: "pus-TOY, stress at the end. Of a container it is empty; of a seat, free; of words, meaningless. Its opposite полный is the next card." },
        { id: "ru-u23l4-polnyy", type: "vocab", front: "полный", reading: "polnyy", meaning: "full", accept: ["filled", "a full one", "complete"], example: { jp: "Автобус утром всегда полный, и это плохо.", en: "The bus is always full in the morning, and that is bad." }, drill: { jp: "Наш автобус сегодня совсем полный", en: "Our bus is completely full today" }, hint: "POL-nyy, stress first. Full OF something takes the genitive: полный стакан воды. Of a person полный is the polite word for heavy. Its opposite пустой is the card before this one." },
        { id: "ru-u23l4-svobodnyy", type: "vocab", front: "свободный", reading: "svobodnyy", meaning: "vacant", accept: ["free", "available", "unoccupied", "not busy"], example: { jp: "Здесь есть свободный стол, и это хорошо.", en: "There is a vacant table here, and that is good." }, drill: { jp: "Этот стол сегодня совсем свободный", en: "This table is completely free today" }, hint: "sva-BOD-nyy, stress on BOD. ⚠️ THREE senses English splits: свободный стол is a vacant table, свободный день is a free day, свободный человек is a free person. Its gloss says vacant so it never lands on the no-cost sense of free, which Russian calls бесплатный." },
      ],
    },
  ],
};
