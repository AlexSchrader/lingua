// RU Unit 65 — Неопределённые местоимения ("Indefinite pronouns") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 1 (u61–u73). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, and THIS BAND's conventions in ru/unit61.js §1–§8.
//
// ⚠️ THE SCAFFOLD TITLE WAS `News and society` AND IT WAS DOUBLY SPENT. A2's u45
// Пресса и передачи is 24 cards of the press and broadcasting (статья ·
// заголовок · обложка · издание · редакция · автор · канал · передача · выпуск ·
// эфир · зритель · пресса · сериал · сюжет · реклама · подписка · публика ·
// интервью · объявление · обзор · репортаж · тираж · экземпляр · съёмка), and
// A2's u51 Общество и государство is 24 more of the state and society. There was
// no third unit's worth left on either side of that title.
//
// ═════════════════════════════════════════════════════════════════════════════
// WHY THIS SLOT BECAME THE PRONOUN SYSTEM.
// ═════════════════════════════════════════════════════════════════════════════
// A1 carded the NEGATIVE series and stopped: никто · нигде (u23) · никогда (u22) ·
// ничего (u7). The INDEFINITE series — the -то / -нибудь / кое- words — is taught
// nowhere in 1,440 words, and it is not a vocabulary gap that exposure closes:
//   ★ THE -то / -нибудь CONTRAST IS UNGUESSABLE AND IT IS THE WHOLE LESSON.
//     кто-то знает  = somebody knows, a real person, I just cannot name them.
//     кто-нибудь знает? = is there anybody at all, I do not know that there is.
//     A learner who has only «кто» cannot derive either, and no amount of
//     reading teaches which one a question takes, because the rule is about
//     whether the speaker believes the thing EXISTS.
// Three more pronouns A1 and A2 also never carded, and all three are unavoidable:
//   `свой` — the reflexive possessive. A1 carded мой · твой · наш · ваш (u2, u8)
//        and их (u19) and nothing covers «он любит свой дом». ⚠️ unit61.js §7a
//        promised this card, and u61–u64 were written around свой to keep the
//        promise checkable.
//   `себя` and `сам` — the reflexive object and the emphatic. A2's u35 teaches
//        eight -ся verbs and «чувствовать себя» appears in its hints, but the
//        pronoun itself was never a front.
//
// ⚠️ THE DERIVATION TEST, because it looks like it should refuse this whole unit.
//   unit1.js §D asks whether the TAUGHT word gives the candidate away. `кто` does
//   NOT give away `кто-то` in the sense that matters: the learner would guess
//   "who-ish" and would still not know which of the two series a sentence needs,
//   which is precisely the knowledge the card carries. The precedent is explicit:
//   unit31.js §3 allows a derivation by any prefix other than не- or без-
//   (навсегда, вовремя), and unit31.js §5 reverses an earlier avoidance to card
//   `много` beside `немного` because the derivation runs one way only. -то,
//   -нибудь and кое- are suffix/prefix derivations of the allowed kind.
//
// ⚠️ REFUSED IN THIS UNIT:
//   `некоторый` — refused for a MECHANICAL reason, not a semantic one. Its
//        masculine nominative singular has no natural short sentence a learner
//        would ever say (Russian uses «некоторое время» and «некоторые люди»), so
//        it could carry no legal `drill` — the drill must contain the front
//        VERBATIM, and lint plus the selfcheck both enforce it. That is the same
//        test unit1.js §4 applies to нравится and стоит, used here to refuse a
//        card rather than to excuse one. `некий` takes the slot and is natural in
//        the masculine singular: «некий человек».
//   `нечто` and `некто` — bookish to the point that a B1 learner meets them only
//        in print, and both would collide in accept[] with кое-что and кое-кто.
//   `что-либо` and the whole -либо series — the formal written variant of
//        -нибудь, so it is one more prompt for the same meaning. Named in
//        что-нибудь's hint instead.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT65 = {
  id: "ru-u65",
  lang: "ru",
  title: "Неопределённые местоимения",
  order: 65,
  stage: "b1",
  lessons: [
    {
      id: "ru-u65l1",
      unit: 65,
      lesson: 1,
      title: "The -то series — a real one you cannot name",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a person, thing, place, direction or time that definitely exists but which you cannot or will not name.",
      items: [
        { id: "ru-u65l1-ktoto", type: "vocab", front: "кто-то", reading: "ktoto", meaning: "someone in particular", accept: ["somebody", "a certain person I cannot name", "a person I cannot identify"], example: { jp: "Кто-то взял мои документы, но я не знаю кто.", en: "Someone took my documents, but I do not know who." }, drill: { jp: "Кто-то уже был здесь", en: "Someone has already been here" }, hint: "KTO-ta — stress on the first part, hyphenated, and the -то is never stressed. ⚠️ IT ASSERTS THAT THE PERSON EXISTS: you just cannot identify them. For a person who may not exist at all, lesson 2's кто-нибудь is the word. The -то part never changes; кто declines: кого-то, кому-то." },
        { id: "ru-u65l1-chtoto", type: "vocab", front: "что-то", reading: "chtoto", meaning: "something in particular", accept: ["a certain thing", "a definite but unnamed thing", "a thing I cannot name"], example: { jp: "Он что-то не говорит нам, и я давно это подозреваю.", en: "He is not telling us something, and I have suspected it for a long time." }, drill: { jp: "Он что-то знает об этом", en: "He knows something about this" }, hint: "CHTO-ta — stress on the first part, and что is said shto as always. ⚠️ It also works as an ADVERB meaning somehow or rather: «что-то мне холодно», I feel rather cold — a use no dictionary entry prepares you for." },
        { id: "ru-u65l1-kakoyto", type: "vocab", front: "какой-то", reading: "kakoyto", meaning: "some kind of", accept: ["a certain sort of", "an unspecified kind", "of some description"], example: { jp: "К нам приходил какой-то человек из банка, но он не оставил документов.", en: "Some man from the bank came to see us, but he left no documents." }, drill: { jp: "Это какой-то новый человек", en: "That is some new person" }, hint: "ka-KOY-ta — stress on KOY. It agrees like an adjective: какая-то, какое-то, какие-то. ⚠️ In speech it often carries a faint disdain: «какой-то фильм» can mean some film or other, nothing much." },
        { id: "ru-u65l1-gdeto", type: "vocab", front: "где-то", reading: "gdeto", meaning: "somewhere in particular", accept: ["in some place", "at a place I cannot name", "at about that spot"], example: { jp: "Мои ключи лежат где-то в квартире, но найти их я не могу.", en: "My keys are lying somewhere in the flat, but I cannot find them." }, drill: { jp: "Он живёт где-то рядом", en: "He lives somewhere nearby" }, hint: "GDE-ta — stress on the first part. ⚠️ IT HAS A SECOND, VERY COMMON USE: with a number it means roughly — «где-то двадцать человек», about twenty people, which is how Russians actually approximate in speech." },
        { id: "ru-u65l1-kudato", type: "vocab", front: "куда-то", reading: "kudato", meaning: "off to somewhere", accept: ["to some place", "away in some direction", "off to a place unknown"], example: { jp: "Она уходила куда-то каждый вечер и никогда не говорила куда.", en: "She used to go off somewhere every evening and never said where." }, drill: { jp: "Он идёт куда-то далеко", en: "He is going off somewhere far" }, hint: "ku-DA-ta — stress on DA. ⚠️ THE где/куда SPLIT IS COMPULSORY, exactly as at unit 22: где-то is where a thing IS, куда-то is where it is GOING. Russian never uses one for the other." },
        { id: "ru-u65l1-kogdato", type: "vocab", front: "когда-то", reading: "kogdato", meaning: "at some time in the past", accept: ["in the distant past", "in the old days", "at one point long ago"], example: { jp: "Когда-то здесь был большой сад, а теперь стоит новый дом.", en: "At one time there was a big garden here, and now a new house stands there." }, drill: { jp: "Я когда-то здесь работал", en: "I worked here at one time" }, hint: "kag-DA-ta — stress on DA. ⚠️ IT LOOKS BACKWARD, almost always: когда-то is a past you are remembering. For an open future Russian uses lesson 2's когда-нибудь. Однажды from unit 38 tells a story; когда-то describes a state of affairs." },
      ],
    },
    {
      id: "ru-u65l2",
      unit: 65,
      lesson: 2,
      title: "The -нибудь series — any one at all",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Ask for or offer any one at all — anyone, anything, any sort, anywhere, off anywhere, at any time ever — without claiming that one exists.",
      items: [
        { id: "ru-u65l2-ktonibud", type: "vocab", front: "кто-нибудь", reading: "ktonibud", meaning: "anyone at all", accept: ["anybody", "whoever there may be", "any person at all"], example: { jp: "Если кто-нибудь будет звонить, я буду дома только вечером.", en: "If anyone rings, I will not be at home until the evening." }, drill: { jp: "Может кто-нибудь знает ответ", en: "Maybe anyone knows the answer" }, hint: "kto-ni-BUD — stress on BUD, and the ь at the end is dropped from the reading as unit 1 §1 requires. ⚠️ IT DOES NOT CLAIM THE PERSON EXISTS, which is why it belongs in questions, conditions and requests. Lesson 1's кто-то does claim it, and that is the whole contrast." },
        { id: "ru-u65l2-chtonibud", type: "vocab", front: "что-нибудь", reading: "chtonibud", meaning: "anything at all", accept: ["whatever there may be", "a thing of some sort", "just something"], example: { jp: "Купи что-нибудь на обед, мне не важно что именно.", en: "Buy anything for lunch; it does not matter to me exactly what." }, drill: { jp: "Он хочет что-нибудь сказать", en: "He wants to say something" }, hint: "chto-ni-BUD — stress on BUD. ⚠️ Its formal written twin is что-либо, which belongs in a document and is NOT carded — one meaning should not have two prompts. In speech Russians also shorten it to что-нить, which you will hear and should not write." },
        { id: "ru-u65l2-kakoynibud", type: "vocab", front: "какой-нибудь", reading: "kakoynibud", meaning: "any sort of", accept: ["of whichever kind", "just any sort of thing", "whatever type you like"], example: { jp: "Дай мне какой-нибудь карандаш, не важно какой, мне нужно записать номер.", en: "Give me any sort of pencil, it does not matter which, I need to write down a number." }, drill: { jp: "Это какой-нибудь другой вариант", en: "That is some other option" }, hint: "ka-koy-ni-BUD — four syllables, stress on BUD. It agrees like an adjective: какая-нибудь, какое-нибудь. ⚠️ With a number it means about, the same job где-то does: «какие-нибудь десять минут», ten minutes or so." },
        { id: "ru-u65l2-gdenibud", type: "vocab", front: "где-нибудь", reading: "gdenibud", meaning: "anywhere at all", accept: ["anywhere you like", "wherever there may be", "no matter where"], example: { jp: "Давай встретимся где-нибудь в центре, мне не важно где.", en: "Let us meet anywhere in the centre; it does not matter to me where." }, drill: { jp: "Давай встретимся где-нибудь вечером", en: "Let us meet anywhere in the evening" }, hint: "gde-ni-BUD — stress on BUD. ⚠️ Compare где-то: «он где-то здесь» means he IS here somewhere; «посиди где-нибудь» means sit anywhere you like. The first asserts, the second leaves it open." },
        { id: "ru-u65l2-kudanibud", type: "vocab", front: "куда-нибудь", reading: "kudanibud", meaning: "off to anywhere", accept: ["to whatever place", "in whatever direction", "no matter where to"], example: { jp: "Летом мы хотим уезжать куда-нибудь далеко, но ещё не знаем куда.", en: "In the summer we want to go away anywhere far off, but we do not yet know where." }, drill: { jp: "Мы будем ездить куда-нибудь летом", en: "We will travel somewhere in the summer" }, hint: "ku-da-ni-BUD — four syllables, stress on BUD. The куда/где split is the same as in lesson 1. ⚠️ «Пойдём куда-нибудь» is the standard Russian way to suggest going out with no destination in mind." },
        { id: "ru-u65l2-kogdanibud", type: "vocab", front: "когда-нибудь", reading: "kogdanibud", meaning: "at some time ever", accept: ["one day", "at any point in future", "at some future time"], example: { jp: "Когда-нибудь он поймёт, что был не прав, но вряд ли скоро.", en: "One day he will understand that he was wrong, but hardly soon." }, drill: { jp: "Когда-нибудь он будет здесь", en: "One day he will be here" }, hint: "kag-da-ni-BUD — four syllables, stress on BUD. ⚠️ IT LOOKS FORWARD where когда-то looks back, and in a QUESTION about the past it means ever: «ты когда-нибудь был в Москве?», have you ever been to Moscow?" },
      ],
    },
    {
      id: "ru-u65l3",
      unit: 65,
      lesson: 3,
      title: "кое-, не- and the rest",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Point at a particular person or thing you are choosing not to name, call someone a certain person, and say every single one, a different kind, and not any at all.",
      items: [
        { id: "ru-u65l3-koekto", type: "vocab", front: "кое-кто", reading: "koekto", meaning: "a certain person", accept: ["a person whose name I keep back", "a person I have in mind", "one particular individual"], example: { jp: "Кое-кто уже знает об этом решении, но говорить о нём пока нельзя.", en: "A certain person already knows about that decision, but it cannot be spoken about yet." }, drill: { jp: "Об этом кое-кто уже знает", en: "A certain person already knows about this" }, hint: "ko-i-KTO — stress on KTO, hyphenated. ⚠️ кое- IS THE OPPOSITE OF -нибудь: you know exactly who and are deliberately not saying. When it declines, the preposition goes INSIDE: кое с кем, кое о ком." },
        { id: "ru-u65l3-koechto", type: "vocab", front: "кое-что", reading: "koechto", meaning: "a thing I have in mind", accept: ["a little something", "one particular item", "a definite thing unnamed"], example: { jp: "Я кое-что знаю об этом вопросе, но рассказывать всё я не буду.", en: "I know a certain thing about that question, but I am not going to tell it all." }, drill: { jp: "Я кое-что хочу сказать", en: "I want to say a certain thing" }, hint: "ko-i-CHTO — stress on CHTO. ⚠️ It also means a fair amount: «он кое-что понимает в технике» means he knows a thing or two about machinery, which is praise, not a hedge." },
        { id: "ru-u65l3-nekiy", type: "vocab", front: "некий", reading: "nekiy", meaning: "a certain unnamed", accept: ["a certain", "an unnamed individual", "a man called something"], example: { jp: "В отчёте говорится про некий новый метод, но автор не объясняет, в чём он лучше старого.", en: "The report speaks of a certain new method, but the author does not explain how it is better than the old one." }, drill: { jp: "Это был некий новый человек", en: "That was a certain new man" }, hint: "NE-kiy — stress on the first syllable. It agrees like an adjective: некая, некое, некие. ⚠️ FORMAL AND WRITTEN — a newspaper says «некий гражданин», a person says «какой-то человек». ⚠️ `некоторый` was refused in its place: its masculine singular has no natural short sentence, so it could carry no legal drill." },
        { id: "ru-u65l3-vsyakiy", type: "vocab", front: "всякий", reading: "vsyakiy", meaning: "every single one", accept: ["any you like", "each and all", "all sorts of"], example: { jp: "Всякий, кто читал этот договор, видел в нём эту ошибку.", en: "Every single person who read that contract saw this mistake in it." }, drill: { jp: "Всякий человек это знает", en: "Every single person knows this" }, hint: "VSYA-kiy — stress on the first syllable. ⚠️ Каждый from unit 19 counts them one by one; всякий takes them as a class, and it is the word for a general truth. In the plural «всякие» means all sorts of, often dismissively." },
        { id: "ru-u65l3-inoy", type: "vocab", front: "иной", reading: "inoy", meaning: "a different kind", accept: ["of another sort", "other than this", "a different one altogether"], example: { jp: "Здесь нужен иной подход, потому что старый метод уже не работает.", en: "A different kind of approach is needed here, because the old method no longer works." }, drill: { jp: "Это совсем иной вопрос", en: "That is a completely different question" }, hint: "i-NOY — stress on the last syllable. ⚠️ Другой from unit 19 is the everyday another; иной is the formal one and it stresses a difference in KIND. «Иными словами» means in other words, and «иногда» from unit 22 is built on it." },
        { id: "ru-u65l3-nikakoy", type: "vocab", front: "никакой", reading: "nikakoy", meaning: "not any at all", accept: ["no sort of", "none whatever", "not a single kind of"], example: { jp: "Никакой закон здесь не поможет, потому что проблема совсем не в законе.", en: "No law at all will help here, because the problem is not in the law at all." }, drill: { jp: "Здесь никакой закон не поможет", en: "No law at all will help here" }, hint: "ni-ka-KOY — stress on the last syllable. It agrees like an adjective and ⚠️ ALWAYS NEEDS A SECOND не ON THE VERB, exactly like никто and никогда from units 22–23: «никакой ответ не подходит». It completes the negative series this unit's indefinites mirror." },
      ],
    },
    {
      id: "ru-u65l4",
      unit: 65,
      lesson: 4,
      title: "Self and one's own",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Use the reflexive words — one's own, oneself, in person, privately owned, one another — and say that something is somebody else's.",
      items: [
        { id: "ru-u65l4-svoy", type: "vocab", front: "свой", reading: "svoy", meaning: "the subject's own", accept: ["belonging to the subject", "his own as the case may be", "my own when I am the subject"], example: { jp: "Он любит свой старый дом, хотя все говорят, что его пора продавать.", en: "He loves his own old house, although everyone says it is time to sell it." }, drill: { jp: "Я взял свой старый телефон", en: "I took my own old telephone" }, hint: "SVOY — one syllable. It agrees like an adjective: своя, своё, свои, своего. ⚠️ IT ALWAYS POINTS BACK AT THE SUBJECT, and that makes it compulsory, not optional: «он взял его книгу» means he took SOMEBODY ELSE's book; «он взял свою книгу» means his own. Getting this wrong changes the sentence." },
        { id: "ru-u65l4-sebya", type: "vocab", front: "себя", reading: "sebya", meaning: "oneself", accept: ["himself as the object", "herself as the object", "yourself as the object"], example: { jp: "Он плохо знает себя, поэтому ему трудно выбирать работу.", en: "He knows himself badly, which is why it is hard for him to choose a job." }, drill: { jp: "Он думает только про себя", en: "He thinks only about himself" }, hint: "si-BYA — stress on the last syllable. ⚠️ IT HAS NO NOMINATIVE — you can never be себя, only do something to себя: себе (dative), собой (instrumental), о себе. It is the pronoun behind every -ся verb from unit 35: «чувствовать себя» is the long form of the same idea." },
        { id: "ru-u65l4-sam", type: "vocab", front: "сам", reading: "sam", meaning: "in person", accept: ["himself with no help", "unaided", "the man himself"], example: { jp: "Он сам написал этот доклад, хотя все думали, что ему кто-то помогал.", en: "He wrote that report himself, although everyone thought somebody had helped him." }, drill: { jp: "Он сам сделал эту работу", en: "He did that work himself" }, hint: "SAM — one syllable. It agrees with the person: сама, само, сами. ⚠️ DO NOT CONFUSE IT WITH самый from unit 47, which forms the superlative: «самый важный» is the most important, «сам важный» is not Russian. And сам means unaided, while себя is the object of the action." },
        { id: "ru-u65l4-sobstvennyy", type: "vocab", front: "собственный", reading: "sobstvennyy", meaning: "privately owned", accept: ["one's very own", "not borrowed", "belonging to you outright"], example: { jp: "У них теперь собственный дом, а раньше они платили аренду каждый месяц.", en: "They now have a house of their own, whereas before they paid rent every month." }, drill: { jp: "Это его собственный дом", en: "That is his own house" }, hint: "SOP-stvin-nyy — stress on the first syllable, and the бс is said ps. ⚠️ Свой points back at the subject; собственный stresses OWNERSHIP and can be used of anybody: «собственность» is property. «Собственными глазами» means with one's own eyes." },
        { id: "ru-u65l4-drugdruga", type: "vocab", front: "друг друга", reading: "drugdruga", meaning: "one another", accept: ["each other", "mutually", "the one the other"], example: { jp: "Они знают друг друга уже двадцать лет и никогда не спорили всерьёз.", en: "They have known one another for twenty years and have never seriously argued." }, drill: { jp: "Они хорошо знают друг друга", en: "They know one another well" }, hint: "drug DRU-ga — TWO words, stress on DRU. ⚠️ ONLY THE SECOND WORD CHANGES, and the preposition goes between them: друг с другом, друг о друге, друг к другу. It only looks like друг from unit 6 and is a separate word by now." },
        { id: "ru-u65l4-cheyto", type: "vocab", front: "чей-то", reading: "cheyto", meaning: "somebody's", accept: ["belonging to someone unknown", "another person's", "the property of someone"], example: { jp: "На столе лежал чей-то телефон, но никто не мог сказать, чей он.", en: "Somebody's telephone was lying on the table, but nobody could say whose it was." }, drill: { jp: "Это чей-то старый телефон", en: "That is somebody's old telephone" }, hint: "CHEY-ta — stress on the first part. It agrees like an adjective: чья-то, чьё-то, чьи-то. It is чей from unit 22 plus the same -то as the rest of lesson 1, so the whole series behaves alike." },
      ],
    },
  ],
};
