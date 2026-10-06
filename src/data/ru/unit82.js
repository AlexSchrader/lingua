// RU Unit 82 — Разговорная речь ("Spoken Russian") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 2 (u74–u86). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, ru/unit74.js §1–§5.
//
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ THE SCAFFOLD TITLE WAS "Register 1 — polite vs plain" AND IT IS A JAPANESE
//    SLOT. RETHEMED, and this is the third time this has had to be done for
//    Russian — the pattern is now established, not a judgement call.
// ═════════════════════════════════════════════════════════════════════════════
// Japanese marks politeness IN THE VERB (です/だ, ます/る), so "polite vs plain"
// is a whole grammar lesson there. Russian has NO SUCH SYSTEM: its politeness is
// LEXICAL — ты versus вы, which `u2` already taught as two pronoun cards, plus
// word choice. A unit on "polite vs plain verb forms" would be a unit about
// nothing. This is exactly the artefact `ru/unit1.js` §10 records twice already:
//     "Characters N"                → a kanji strand Russian has no equivalent of
//                                     (five slots, all rethemed, u9/u12/u15/u18/u21)
//     "Grammar 2 — verbs and particles" → a particle is a Japanese word class;
//                                     Russian marks those jobs with CASE, so u23
//                                     became Глаголы и падежи
// So: u82 and u83 are rethemed to the register distinction Russian DOES have and
// which nothing in u1–u81 teaches — РАЗГОВОРНЫЙ versus КНИЖНЫЙ, spoken versus
// bookish. u82 is the spoken half: how you address a stranger, the noises a
// conversation is made of, the lexicalised diminutives, and the colloquial verbs
// no textbook lists. u83 is the bookish half.
//
// ═════════════════════════════════════════════════════════════════════════════
// §1 — ⚠️ FOUR WORDS A1 SHOULD HAVE HAD. MEASURED, not assumed.
// ═════════════════════════════════════════════════════════════════════════════
// Against all 1,440 authored words: the corpus had `женщина` and `мужчина`
// (u3l4), `молодой` (u19l2) and `молодёжь` (u59l3), and NO word for a girl, a
// boy, a young woman or a lad. `девушка` · `парень` · `девочка` · `мальчик` were
// all four free. They are carded here rather than left for B2 because this unit
// is where they belong anyway: «Девушка!» and «Молодой человек!» ARE how a
// Russian addresses a stranger, which is a register fact and not a vocabulary
// one. Also closed here: `подушка` «a pillow», which u15 Дом и вещи missed
// between кровать, диван and полотенце.
//
// ═════════════════════════════════════════════════════════════════════════════
// §2 — HOW THE DIMINUTIVE IS TAUGHT WITHOUT BREAKING THE DERIVATION RULE.
// ═════════════════════════════════════════════════════════════════════════════
// Russian's diminutive suffixes (-ик · -ка · -очка · -ушка) are a real B1
// subject and they create a problem: teaching the suffix makes every
// transparent diminutive GUESSABLE, which is precisely what unit1.js §D refuses.
// домик from дом, минутка from минута, ножик from нож — all refused, and
// correctly: once l3's hints explain the suffix the learner can build them.
// ⚠️ SO l3 CARDS ONLY LEXICALISED DIMINUTIVES — ones whose meaning has MOVED, so
// that knowing the parent does not give you the child:
//     водка   ← вода (u4l1)      water → vodka
//     кружка  ← круг (u36l4)     a circle → a mug
//     подушка ← ухо  (u20l1)     an ear → a pillow (под+ушка, «under the ear»)
//     рюмка   ← nothing taught   a shot glass, clean
//     девочка ← дева (untaught)  a little girl, clean
//     мальчик ← малый (untaught; `маленький` u19l1 is the adjective) a boy
// The course already contains one of these, carded long before anyone named the
// pattern: `ручка` «a pen» (u25l2) is the diminutive of рука. l3's hints point at
// it, so the learner meets the rule on a word they already own.
//
// ⚠️ REFUSED here on §D: `ребята` and `типа` (bare inflected forms of ребёнок
//   u10 and тип u60 — not derivations at all) · `классно` (класс u25) · `ясно`
//   (ясный u40) · `круто` (крутить u49) · `здорово` (здоровье u20) · `подруга`
//   (друг u6) · `приятель` (приятный u40) · `мужик` (мужчина u3) · `старик`
//   (старый u19) · `давай` and `слушай` and `смотри` (imperatives of taught
//   verbs) · `успеть` (успех u25) · `шутить` (шутка u27) · `ругаться` (ругать
//   u59) · `вмешиваться` (мешать u34).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT82 = {
  id: "ru-u82",
  lang: "ru",
  title: "Разговорная речь",
  order: 82,
  stage: "b1",
  lessons: [
    {
      id: "ru-u82l1",
      unit: 82,
      lesson: 1,
      title: "Who you are speaking to",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Address a stranger the way Russians actually do, call someone dear, and open or accept with ну and ладно.",
      items: [
        { id: "ru-u82l1-devushka", type: "vocab", front: "девушка", reading: "devushka", meaning: "a young woman", accept: ["a girl", "a young lady", "miss as a form of address"], example: { jp: "Девушка, вы последняя в очереди или здесь кто-нибудь стоял?", en: "Excuse me, are you last in the queue or was somebody standing here?" }, drill: { jp: "Девушка вы последняя в очереди", en: "Excuse me, are you last in the queue" }, hint: "DE-vush-ka — stress on the first syllable. FEMININE (-а). ⚠️ THIS IS HOW YOU ADDRESS A WOMAN UNDER ABOUT FIFTY IN A SHOP OR A QUEUE, and there is no polite alternative — Russian has no «madam» in daily use. ⚠️ A GENUINE A1 GAP: the course had женщина (unit 3) and nothing between it and ребёнок." },
        { id: "ru-u82l1-paren", type: "vocab", front: "парень", reading: "paren", meaning: "a lad", accept: ["a young man", "a bloke", "a boyfriend"], example: { jp: "Парень за кассой был очень вежливый, хотя очередь была огромная.", en: "The lad at the till was very polite, although the queue was huge." }, drill: { jp: "Парень за кассой очень вежливый", en: "The lad at the till is very polite" }, hint: "PA-ren — stress on the first syllable. MASCULINE despite the -ь (unit1.js §3: always name it), and ⚠️ its е DROPS in every other case: пАрня, пАрню. Second sense: a woman's boyfriend — «её парень». ⚠️ The ADDRESS form for a young man is not парень but «молодой человек»." },
        { id: "ru-u82l1-tovarishch", type: "vocab", front: "товарищ", reading: "tovarishch", meaning: "a comrade", accept: ["a fellow", "a companion", "a workmate"], example: { jp: "Товарищ по работе помог ему с ремонтом и денег не взял.", en: "A workmate helped him with the repairs and took no money." }, drill: { jp: "Товарищ по работе ему помог", en: "A workmate helped him" }, hint: "ta-VA-rishch — stress on VA, the о reduces to a, and it ends in щ, the long soft sh from unit 3. MASCULINE. ⚠️ HEAVILY MARKED BY HISTORY: as an address («товарищ директор») it is Soviet and now ironic or military. In the frame «товарищ по работе / по школе» it is completely neutral and in daily use." },
        { id: "ru-u82l1-milyy", type: "vocab", front: "милый", reading: "milyy", meaning: "dear", accept: ["sweet of a person", "lovely of a person", "darling"], example: { jp: "Милый мой, так работать нельзя: ты не спал почти сутки.", en: "My dear, you cannot work like that: you have hardly slept for a day." }, drill: { jp: "Милый мой так нельзя", en: "My dear, you cannot do that" }, hint: "MI-lyy — stress on the first syllable. ⚠️ TWO REGISTERS IN ONE WORD: «милый дом» is just «nice», while «милый мой» as an address can be affectionate OR a warning shot, depending entirely on tone. добрый from unit 7 is kind; приятный from unit 40 is pleasant; милый is warm." },
        { id: "ru-u82l1-nu", type: "vocab", front: "ну", reading: "nu", meaning: "well then", accept: ["well", "come on", "so"], example: { jp: "Ну хорошо, я молчу, но только до января.", en: "Well all right, I will say nothing, but only until January." }, drill: { jp: "Ну хорошо я молчу", en: "Well all right, I will say nothing" }, hint: "NU — one syllable. ⚠️ THE COMMONEST WORD IN SPOKEN RUSSIAN AND IT MEANS ALMOST NOTHING ON ITS OWN: it opens a turn, buys a beat, urges («ну давай!»), or doubts («ну не знаю»). ⚠️ Two letters, so it only just clears the two-character minimum a card needs to cloze at all (unit1.js §5)." },
        { id: "ru-u82l1-ladno", type: "vocab", front: "ладно", reading: "ladno", meaning: "all right then", accept: ["fine", "agreed", "OK then"], example: { jp: "Ладно, я буду дома весь вечер, а ты можешь работать.", en: "All right, I will be at home all evening and you can work." }, drill: { jp: "Ладно я буду дома", en: "All right, I will be at home" }, hint: "LAD-na — stress on the first syllable, and the final о reduces to a. ⚠️ AGREEMENT WITH A SHRUG — it accepts without endorsing, where хорошо from unit 2 simply says «good». «Ну ладно» together is the standard way to end an argument you have decided not to win." },
      ],
    },
    {
      id: "ru-u82l2",
      unit: 82,
      lesson: 2,
      title: "The noises a conversation is made of",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Cut a story short, swear mildly, react with surprise, agree with a grunt, cheer, and regret — the six sounds no textbook lists.",
      items: [
        { id: "ru-u82l2-koroche", type: "vocab", front: "короче", reading: "koroche", meaning: "in short", accept: ["to cut it short", "basically", "anyway"], example: { jp: "Короче, денег нет и больше об этом мы говорить не будем.", en: "In short, there is no money and we are not going to talk about it any more." }, drill: { jp: "Короче денег нет", en: "In short, there is no money" }, hint: "ka-RO-che — stress on RO, and the о before it reduces to a. ⚠️ Literally «shorter» — the comparative of короткий, which this course does not teach, so it is a plain adverb here with nothing to collide with. In speech it has become a filler and some speakers use it in every sentence." },
        { id: "ru-u82l2-blin", type: "vocab", front: "блин", reading: "blin", meaning: "damn", accept: ["blast", "bother", "a pancake"], example: { jp: "Блин, ключи в машине, а машина закрыта!", en: "Damn, the keys are in the car and the car is locked!" }, drill: { jp: "Блин ключи в машине", en: "Damn, the keys are in the car" }, hint: "BLIN — one syllable. ⚠️ ONE WORD, TWO LIVES: a блин is a pancake, MASCULINE, and it is also the standard mild swear — chosen precisely because it begins like a much ruder word and stops. Entirely sayable in front of a grandmother." },
        { id: "ru-u82l2-oy", type: "vocab", front: "ой", reading: "oy", meaning: "oh!", accept: ["oops", "ow", "oh dear"], example: { jp: "Ой, как холодно сегодня на улице!", en: "Oh, how cold it is outside today!" }, drill: { jp: "Ой как сегодня холодно", en: "Oh, how cold it is today" }, hint: "OY — one syllable. ⚠️ Covers pain, surprise and dismay in one sound, and a doubled «ой-ой-ой» is mock-sympathy. Two letters, which is the minimum a card can have (unit1.js §5)." },
        { id: "ru-u82l2-aga", type: "vocab", front: "ага", reading: "aga", meaning: "uh-huh", accept: ["yeah", "aha", "right then"], example: { jp: "Ага, значит, ты всё-таки знал об этом и просто молчал.", en: "Uh-huh, so you did know about it and were simply keeping quiet." }, drill: { jp: "Ага значит ты знал", en: "Uh-huh, so you did know" }, hint: "a-GA — stress on the last syllable. ⚠️ INFORMAL YES, and it has a second use the example shows: said slowly it means «I have just worked something out», usually to your disadvantage. Never use it to a superior — да from unit 2 is the neutral word." },
        { id: "ru-u82l2-ura", type: "vocab", front: "ура", reading: "ura", meaning: "hurray", accept: ["hooray", "three cheers", "yes!"], example: { jp: "Ура, сегодня последний экзамен и больше ничего учить не нужно!", en: "Hurray, today is the last exam and there is nothing more to learn!" }, drill: { jp: "Ура сегодня последний экзамен", en: "Hurray, today is the last exam" }, hint: "u-RA — stress on the last syllable. ⚠️ Also the Russian army's battle cry, which is where it comes from, so it carries more weight than English «hooray» and is still used sincerely." },
        { id: "ru-u82l2-uvy", type: "vocab", front: "увы", reading: "uvy", meaning: "alas", accept: ["sadly", "unfortunately", "more's the pity"], example: { jp: "Увы, билетов на премьеру уже нет, и ждать придётся до января.", en: "Alas, there are no tickets left for the first night, and we shall have to wait until January." }, drill: { jp: "Увы билетов уже нет", en: "Alas, there are no tickets left" }, hint: "u-VY — stress on the last syllable, with the hard ы of unit 5’s и/ы contrast (the glyph itself is unit 2). ⚠️ THE ONE BOOKISH WORD IN THIS LESSON and it is here on purpose: it is what a Russian says instead of «sorry, no» in a shop or an email, so a learner meets it spoken even though it reads as literary." },
      ],
    },
    {
      id: "ru-u82l3",
      unit: 82,
      lesson: 3,
      title: "Diminutives that became their own words",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Recognise the -ка · -очка · -ушка · -ик diminutive suffixes, and use the six whose meaning has moved away from the parent word.",
      items: [
        { id: "ru-u82l3-devochka", type: "vocab", front: "девочка", reading: "devochka", meaning: "a little girl", accept: ["a girl child", "a small girl", "a young girl"], example: { jp: "Девочка в первом классе читала лучше всех, и учитель сказал об этом её матери.", en: "The little girl in the first class read better than anyone, and the teacher told her mother so." }, drill: { jp: "Девочка читала лучше всех", en: "The little girl read better than anyone" }, hint: "DE-vach-ka — stress on the first syllable, and the о reduces to a. FEMININE (-а). ⚠️ THE -очка SUFFIX, on a parent word (дева) this course does not teach, so nothing is given away. Russian draws the line at about twelve: before it девочка, after it девушка from lesson 1." },
        { id: "ru-u82l3-malchik", type: "vocab", front: "мальчик", reading: "malchik", meaning: "a little boy", accept: ["a boy", "a boy child", "a small boy"], example: { jp: "Мальчик из соседней квартиры играет на пианино каждый день, и все соседи это слышат.", en: "The little boy from the flat next door plays the piano every day, and all the neighbours hear it." }, drill: { jp: "Мальчик играет на пианино", en: "The little boy plays the piano" }, hint: "MAL-chik — stress on the first syllable. MASCULINE. ⚠️ THE -ик SUFFIX, the masculine one. Built on малый, which is not taught; `маленький` from unit 19 is the adjective and it does NOT give «a boy» away. The pair after twelve is мальчик → парень." },
        { id: "ru-u82l3-vodka", type: "vocab", front: "водка", reading: "vodka", meaning: "Russian spirit", accept: ["vodka", "the vodka", "a glass of vodka"], example: { jp: "Водка здесь дорогая, зато хлеб и молоко очень дешёвые.", en: "Vodka is expensive here, but bread and milk are very cheap." }, drill: { jp: "Водка здесь очень дорогая", en: "Vodka is very expensive here" }, hint: "VOD-ka — stress on the first syllable, and the д before к is said t. FEMININE (-а). ⚠️ THE CLEAREST LEXICALISED DIMINUTIVE IN THE LANGUAGE: водка IS «little water», from вода in unit 4, and no learner would reach it from there — which is why both are carded. ⚠️ Glossed «Russian spirit» rather than «vodka» on purpose: the English word IS the transliteration, and a card must never gloss to its own answer (unit1.js §9)." },
        { id: "ru-u82l3-kruzhka", type: "vocab", front: "кружка", reading: "kruzhka", meaning: "a mug", accept: ["a beer mug", "a tankard", "a big cup"], example: { jp: "Кружка стояла на столе всю ночь, и чай в ней стал совсем холодным.", en: "The mug stood on the table all night and the tea in it went completely cold." }, drill: { jp: "Кружка стояла на столе", en: "The mug stood on the table" }, hint: "KRUZH-ka — stress on the first syllable. FEMININE (-а). ⚠️ A -ка diminutive of круг «a circle» (unit 36) whose meaning has moved entirely. чашка from unit 6 is a cup with a saucer; a кружка is the big straight-sided one, and it also holds beer." },
        { id: "ru-u82l3-ryumka", type: "vocab", front: "рюмка", reading: "ryumka", meaning: "a shot glass", accept: ["a small glass", "a liqueur glass", "a glass for spirits"], example: { jp: "Рюмка была совсем маленькая, и дедушка сказал, что это правильно.", en: "The shot glass was quite small, and grandfather said that was how it should be." }, drill: { jp: "Рюмка была совсем маленькая", en: "The shot glass was quite small" }, hint: "RYUM-ka — stress on the first syllable. FEMININE (-а). ⚠️ It LOOKS like a -ка diminutive and has no parent word in Russian at all — it came in from German. стакан from unit 13 is a tumbler; a рюмка holds about fifty grams and nothing else." },
        { id: "ru-u82l3-podushka", type: "vocab", front: "подушка", reading: "podushka", meaning: "a pillow", accept: ["a cushion", "the pillow", "a bed pillow"], example: { jp: "Подушка здесь одна, зато очень мягкая, и спать на ней приятно.", en: "There is one pillow here, but it is very soft and pleasant to sleep on." }, drill: { jp: "Подушка здесь очень мягкая", en: "The pillow here is very soft" }, hint: "pa-DUSH-ka — stress on DUSH, and the о reduces to a. FEMININE (-а). ⚠️ THE -ушка SUFFIX, and the etymology is worth knowing because it makes the word stick: под + ушка, «under the little ear» — ухо from unit 20. ⚠️ A GENUINE A1 GAP: unit 15 taught кровать, диван and полотенце and no pillow." },
      ],
    },
    {
      id: "ru-u82l4",
      unit: 82,
      lesson: 4,
      title: "Colloquial verbs no textbook lists",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that someone bawls, lounges about, is becoming tiresome, is butting in, is treating everyone, or is grumbling.",
      items: [
        { id: "ru-u82l4-orat", type: "vocab", front: "орать", reading: "orat", meaning: "to bawl", accept: ["to yell", "to bellow", "to shout at the top of your voice"], example: { jp: "Орать на детей он не умеет, зато молчит так, что всем страшно.", en: "He cannot bawl at children, but he says nothing in a way that frightens everyone." }, drill: { jp: "Орать на детей он не умеет", en: "He cannot bawl at children" }, hint: "a-RAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive. ⚠️ MUCH coarser than кричать from unit 28: кричать is a neutral shout, орать is ugly and the speaker disapproves. Takes на + the ACCUSATIVE for the victim." },
        { id: "ru-u82l4-valyatsya", type: "vocab", front: "валяться", reading: "valyatsya", meaning: "to lounge about", accept: ["to lie around", "to loaf", "to be lying about untidily"], example: { jp: "Валяться весь день он не любит, даже если на улице дождь.", en: "He does not like lounging about all day, even if it is raining outside." }, drill: { jp: "Валяться весь день он не любит", en: "He does not like lounging about all day" }, hint: "va-LYA-tsya — stress on LYA, and the о reduces to a. Imperfective infinitive, reflexive -ся (unit 35's class). ⚠️ Two uses and both are everyday: a PERSON lounging in bed, and an OBJECT lying where it should not — «документы валяются на столе». Same root as свалка in unit 75." },
        { id: "ru-u82l4-nadoedat", type: "vocab", front: "надоедать", reading: "nadoedat", meaning: "to get on someone's nerves", accept: ["to pester", "to become tiresome", "to bore someone"], example: { jp: "Надоедать он не хотел, поэтому звонил только один раз в неделю.", en: "He did not want to be a nuisance, so he only phoned once a week." }, drill: { jp: "Надоедать он совсем не хотел", en: "He did not want to be a nuisance at all" }, hint: "na-da-ye-DAT — four syllables, stress on the last, and the о reduces to a. Imperfective infinitive; the perfective is надоесть. ⚠️ Takes the DATIVE for the victim (unit 34), and the form you will hear most is impersonal: «мне надоело» — I have had enough of it. скучный from unit 40 is boring; надоедать is boring someone ON PURPOSE or by persisting." },
        { id: "ru-u82l4-lezt", type: "vocab", front: "лезть", reading: "lezt", meaning: "to climb", accept: ["to clamber", "to butt in", "to push your way"], example: { jp: "Лезть в разговор он не стал, хотя всё понимал и мог бы помочь.", en: "He did not butt into the conversation, although he understood everything and could have helped." }, drill: { jp: "Лезть в разговор он не стал", en: "He did not butt into the conversation" }, hint: "LEZT — one syllable, and the зть is one block. Imperfective infinitive; its present is лЕзу, лЕзешь, лЕзут. ⚠️ TWO SENSES, both common: to climb or clamber physically, and — with в — to interfere where you were not asked. «Не лезь!» is what a Russian child hears all day." },
        { id: "ru-u82l4-ugoshchat", type: "vocab", front: "угощать", reading: "ugoshchat", meaning: "to treat someone", accept: ["to buy someone a drink", "to offer food to", "to stand a round"], example: { jp: "Угощать гостей он любит, а готовить совсем не умеет.", en: "He likes treating guests and cannot cook at all." }, drill: { jp: "Угощать гостей он любит", en: "He likes treating guests" }, hint: "u-ga-SHCHAT — stress on the last syllable, the о reduces to a, and щ is the long soft sh. Imperfective infinitive; the perfective is угостить. ⚠️ Takes the person in the ACCUSATIVE and the food in the INSTRUMENTAL: «угощать гостей чаЕМ» — units 23 and 32 together in one frame." },
        { id: "ru-u82l4-vorchat", type: "vocab", front: "ворчать", reading: "vorchat", meaning: "to grumble", accept: ["to grouse", "to mutter crossly", "to growl"], example: { jp: "Ворчать он начал ещё утром, и это продолжалось весь день.", en: "He began grumbling in the morning and it went on all day." }, drill: { jp: "Ворчать он начал ещё утром", en: "He began grumbling in the morning" }, hint: "var-CHAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive. ⚠️ Of an old man and of a dog, with no change of word — and affectionate about both. бормотать from unit 81 is unclear speech; ворчать is clear and displeased." },
      ],
    },
  ],
};
