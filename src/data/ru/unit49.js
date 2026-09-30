// RU Unit 49 — Повелительное наклонение ("The imperative") — A2
// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 2 (u41–u50). Binding: ru/unit1.js §1–§10 and §A–§D, then ru/unit31.js
// §1–§7. The block-wide record is in ru/unit50.js §B1–§B7.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Conjugation drill 2" AND A SECOND CONJUGATION UNIT
// WOULD HAVE BEEN WASTE. u48 states the whole present-tense system in four
// lessons — both classes, the -ыва-/-ава- stems, the я-form mutations and the
// -овать class. There is no second half to teach. Rethemed to THE IMPERATIVE,
// which is a MEASURED HOLE: grep the corpus and the command form appears only in
// two hints — ru/unit31.js's `посмотреть` card says «Посмотри!» and u5's `нужно`
// touches the frame — and nowhere in 48 units is it taught. A learner who has
// finished A1 and most of A2 cannot tell anyone to do anything.
//
// ⚠️ AND THE COMMAND FORM IS NOT A CARD, FOR THE SAME REASON THE COMPARATIVE IS
// NOT ONE AT u47. заполняй · подпиши · молчи are INFLECTED FORMS, and unit1.js §5
// bans carding those. So this unit cards 24 NEW VERBS, exactly as u48 does, and
// the imperative lives in every canDo, every hint and every example sentence. By
// the end of l4 a learner has met the rule four times over four separate stem
// shapes and can form the imperative of any verb in the language.
//
// THE RULE, stated once here and once per lesson:
//   Take the ОНИ form, drop its ending, and look at what is left.
//     ends in a VOWEL  → add -й      (они заполняЮТ → заполня- → ЗАПОЛНЯЙ)
//     ends in a CONSONANT → add -и   (они молчАТ → молч- → МОЛЧИ)
//   Then add -ТЕ for вы, always: заполняйТЕ, молчиТЕ. There is no third pattern.
//
// ⚠️ ASPECT AND THE IMPERATIVE — WHAT THIS UNIT DELIBERATELY DOES NOT TEACH.
// Russian picks the imperfective imperative for a general or repeated instruction
// and for EVERY negative command (не трогай!), and the perfective for a single
// request (подпиши!). Block 2 headwords only imperfectives (see u43's header), so
// every command here is the imperfective one, which is the honest half: it is the
// form used for instructions and prohibitions, which is what a learner needs
// first. The perfective imperative belongs with aspect, which is ru/unit31.js's
// subject, and is named in the hints rather than taught.
//
// THREE CALLS I MADE, with the reasoning:
//   `слушать` "to listen" IS carded even though u4 `слышать` "to hear" exists and
//        the two are one letter apart. They are separate lexemes in every Russian
//        course, the glosses differ ("listen" against "hear"), the readings differ
//        ("slushat" against "slyshat"), and unit1.js §1's lossy-scheme warning is
//        about SOFT-SIGN minimal pairs, which this is not. Measured clear on both
//        the reading and the gloss check. Its hint names слышать explicitly.
//   `слушатель` was therefore REFUSED at u45l2 — a verb and its agent noun in one
//        block is the §D case; see u45's header.
//   `напоминать` and `признавать` are PREFIXED DERIVATIONS of u22 `помнить` and u4
//        `знать`, which u48's header establishes as allowed on block 1's own u31
//        precedent. Both glosses measured clear.
//
// ⚠️ ALSO REFUSED HERE:
//   `поправлять` — vs `правило` (u41l3, mine) and u40 `правильный`.
//   `объявлять` — vs `объявление`, carded at u45l4 in my own block.
//   `сообщать` — vs `сообщение`, carded at u43l3 in my own block.
//   `обновлять` — vs u19 `новый` and u39 `новость`, three words on one root.
//   `беречь` — vs u30 `берег`. `налаживать` · `вещать` — too rare for A2.
//   `мешать` · `убирать` · `искать` · `класть` — all TAKEN (u34, u15, u15, u15).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT49 = {
  id: "ru-u49",
  lang: "ru",
  title: "Повелительное наклонение",
  order: 49,
  stage: "a2",
  lessons: [
    {
      id: "ru-u49l1",
      unit: 49,
      lesson: 1,
      title: "Telling someone what to do with the paperwork",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give a polite office instruction: take the они form, drop the ending, add -й after a vowel and -те for вы — заполняйте, подписывайте, оформляйте.",
      items: [
        { id: "ru-u49l1-zapolnyat", type: "vocab", front: "заполнять", reading: "zapolnyat", meaning: "to fill in", accept: ["to complete a form", "to fill up", "to write into a form"], example: { jp: "Заполняйте эту форму очень точно.", en: "Fill this form in very precisely." }, drill: { jp: "Эту форму можно заполнять здесь", en: "This form can be filled in here" }, hint: "za-pal-NYAT — stress on the last syllable, the о reduces to a. First conjugation: заполняю, заполняют. ⚠️ THE IMPERATIVE: они заполняЮТ → заполня- ends in a vowel → ЗАПОЛНЯЙ, and ЗАПОЛНЯЙТЕ for вы. From полный (unit 23), full." },
        { id: "ru-u49l1-podpisyvat", type: "vocab", front: "подписывать", reading: "podpisyvat", meaning: "to sign", accept: ["to put your name to", "to sign off", "to subscribe someone"], example: { jp: "Подписывайте каждый документ сами.", en: "Sign every document yourself." }, drill: { jp: "Директор будет подписывать каждый документ", en: "The director will sign every document" }, hint: "pat-PI-sy-vat — stress on PI, and the д devoices to t before п. First conjugation, the -ыва- stays: подписываю, подписывают. ⚠️ IMPERATIVE: подписывай, подписывайте. Same root as подписка (unit 45)." },
        { id: "ru-u49l1-oformlyat", type: "vocab", front: "оформлять", reading: "oformlyat", meaning: "to draw up", accept: ["to make official", "to process paperwork", "to lay out a document"], example: { jp: "Оформляйте этот договор в нашем отделе.", en: "Draw that contract up in our department." }, drill: { jp: "Договор можно оформлять в этом отделе", en: "The contract can be drawn up in that department" }, hint: "a-farm-LYAT — stress on the last syllable, both о reduce to a. First conjugation. ⚠️ IMPERATIVE: оформляй, оформляйте. Built on форма (unit 32) — to put something into proper form. Russian bureaucracy runs on this verb." },
        { id: "ru-u49l1-naznachat", type: "vocab", front: "назначать", reading: "naznachat", meaning: "to appoint", accept: ["to set a date", "to assign someone", "to fix a time"], example: { jp: "Назначайте собеседование на утро.", en: "Set the interview for the morning." }, drill: { jp: "Собеседование можно назначать на утро", en: "The interview can be set for the morning" }, hint: "naz-na-CHAT — stress on the last syllable. First conjugation. ⚠️ IMPERATIVE: назначай, назначайте. Two jobs: appointing a person to a должность (unit 42), and fixing a time or date — «назначить встречу»." },
        { id: "ru-u49l1-poruchat", type: "vocab", front: "поручать", reading: "poruchat", meaning: "to entrust", accept: ["to hand a task to someone", "to put someone in charge of", "to delegate"], example: { jp: "Поручайте эту работу только мастеру.", en: "Entrust that work only to the craftsman." }, drill: { jp: "Эту работу можно поручать мастеру", en: "That work can be entrusted to the craftsman" }, hint: "pa-ru-CHAT — stress on the last syllable, the о reduces to a. First conjugation. ⚠️ IMPERATIVE: поручай, поручайте. It takes КОМУ (dative, unit 34) ЧТО: поручать работу мастерУ. Built on рука, a hand — to put something into someone's hands." },
        { id: "ru-u49l1-registrirovat", type: "vocab", front: "регистрировать", reading: "registrirovat", meaning: "to register", accept: ["to enter in a register", "to record officially", "to sign someone in"], example: { jp: "Регистрируйте каждого клиента на этом сайте.", en: "Register every client on that website." }, drill: { jp: "Мы будем регистрировать каждого клиента", en: "We will register every client" }, hint: "re-gi-STRI-ra-vat — five syllables, stress on STRI. The -овать class from unit 48: регистрирую, регистрируют. ⚠️ IMPERATIVE: регистрируй, регистрируйте — built off the они stem регистриру-, which ends in a vowel." },
      ],
    },
    {
      id: "ru-u49l2",
      unit: 49,
      lesson: 2,
      title: "Telling someone what to do at the computer",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give and understand the instructions a screen gives you — press, print, download, save, delete, key in — in the imperative.",
      items: [
        { id: "ru-u49l2-nazhimat", type: "vocab", front: "нажимать", reading: "nazhimat", meaning: "to press a button", accept: ["to press", "to push down", "to click"], example: { jp: "Нажимайте эту кнопку два раза.", en: "Press that button twice." }, drill: { jp: "Эту кнопку можно нажимать два раза", en: "That button can be pressed twice" }, hint: "na-zhi-MAT — stress on the last syllable. First conjugation: нажимаю, нажимают. ⚠️ IMPERATIVE: нажимай, нажимайте. Glossed «to press a button» because пресса at unit 45 is «the press». Russian says «нажимать НА кнопку» as often as the bare accusative." },
        { id: "ru-u49l2-pechatat", type: "vocab", front: "печатать", reading: "pechatat", meaning: "to print", accept: ["to type", "to run off copies", "to put into print"], example: { jp: "Печатайте этот файл на нашем принтере.", en: "Print that file on our printer." }, drill: { jp: "Я буду печатать этот файл сегодня", en: "I will print that file today" }, hint: "pe-CHA-tat — stress on CHA. First conjugation: печатаю, печатают. ⚠️ IMPERATIVE: печатай, печатайте. Two senses Russian keeps in one verb: to print on paper AND to type on a keyboard." },
        { id: "ru-u49l2-skachivat", type: "vocab", front: "скачивать", reading: "skachivat", meaning: "to download", accept: ["to pull down a file", "to get off the internet", "to fetch a file"], example: { jp: "Скачивайте эту программу только с нашего сайта.", en: "Only download that program from our website." }, drill: { jp: "Программу можно скачивать с сайта", en: "The program can be downloaded from the website" }, hint: "SKA-chi-vat — stress on the first syllable. First conjugation, the -ива- stays: скачиваю, скачивают. ⚠️ IMPERATIVE: скачивай, скачивайте. A very new verb in Russian, built on качать, to rock or pump." },
        { id: "ru-u49l2-sokhranyat", type: "vocab", front: "сохранять", reading: "sokhranyat", meaning: "to save", accept: ["to save a file", "to keep safe", "to retain"], example: { jp: "Сохраняйте каждый файл два раза.", en: "Save every file twice." }, drill: { jp: "Я хочу сохранять каждый файл два раза", en: "I want to save every file twice" }, hint: "sa-khra-NYAT — stress on the last syllable, the о reduces to a. First conjugation. ⚠️ IMPERATIVE: сохраняй, сохраняйте. Built on хранить (unit 48) with со-: хранить is keeping a thing, сохранять is keeping it FROM being lost." },
        { id: "ru-u49l2-udalyat", type: "vocab", front: "удалять", reading: "udalyat", meaning: "to delete", accept: ["to remove", "to erase", "to take away"], example: { jp: "Не удаляйте этот файл без меня.", en: "Do not delete that file without me." }, drill: { jp: "Не нужно удалять этот файл", en: "That file should not be deleted" }, hint: "u-da-LYAT — stress on the last syllable. First conjugation. ⚠️ IMPERATIVE: удаляй, удаляйте — and THIS is where the imperfective earns its place: every NEGATIVE command in Russian uses the imperfective, so «не удаляй!» is the only correct way to say «do not delete». Built on далеко (unit 14)." },
        { id: "ru-u49l2-nabirat", type: "vocab", front: "набирать", reading: "nabirat", meaning: "to key in", accept: ["to dial a number", "to type in", "to gather a quantity"], example: { jp: "Набирайте пароль очень медленно.", en: "Key the password in very slowly." }, drill: { jp: "Пароль лучше набирать очень медленно", en: "The password is better keyed in very slowly" }, hint: "na-bi-RAT — stress on the last syllable. First conjugation: набираю, набирают. ⚠️ IMPERATIVE: набирай, набирайте. Its oldest sense is to gather up a quantity — «набирать сотрудников» is to recruit — and from there it became dialling a number and typing text." },
      ],
    },
    {
      id: "ru-u49l3",
      unit: 49,
      lesson: 3,
      title: "Telling someone what to do in a conversation",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Tell someone to listen, to remind you, to say nothing — and meet the second pattern, where the stem ends in a consonant and the ending is -и, not -й.",
      items: [
        { id: "ru-u49l3-slushat", type: "vocab", front: "слушать", reading: "slushat", meaning: "to listen", accept: ["to pay attention to", "to hear someone out", "to attend to"], example: { jp: "Слушайте эту передачу каждый вечер.", en: "Listen to that broadcast every evening." }, drill: { jp: "Я люблю слушать эту передачу вечером", en: "I like listening to that broadcast in the evening" }, hint: "SLU-shat — stress on the first syllable. First conjugation: слушаю, слушают. ⚠️ IMPERATIVE: слушай, слушайте. ⚠️ NOT слышать from unit 4, which is «to hear» and is second conjugation (слышу, слышишь): слышать happens to you, слушать is something you DO. Russian never confuses them; English «listen/hear» is the same split." },
        { id: "ru-u49l3-napominat", type: "vocab", front: "напоминать", reading: "napominat", meaning: "to remind", accept: ["to jog someone's memory", "to bring to mind", "to be reminiscent of"], example: { jp: "Напоминайте мне об этом каждый день.", en: "Remind me about that every day." }, drill: { jp: "Ты можешь напоминать мне об этом", en: "You can remind me about that" }, hint: "na-pa-mi-NAT — four syllables, stress on the last, both о reduce to a. First conjugation. ⚠️ IMPERATIVE: напоминай, напоминайте. Built on помнить (unit 22): помнить is to hold in mind, запоминать (unit 48) is to put it there, напоминать is to put it in SOMEBODY ELSE'S. It takes КОМУ О ЧЁМ — dative plus о, units 34 and 39." },
        { id: "ru-u49l3-ubezhdat", type: "vocab", front: "убеждать", reading: "ubezhdat", meaning: "to persuade", accept: ["to talk someone round", "to convince", "to win someone over"], example: { jp: "Убеждайте клиента только цифрами.", en: "Persuade the client with figures alone." }, drill: { jp: "Клиента лучше убеждать только цифрами", en: "A client is better persuaded with figures alone" }, hint: "u-bezh-DAT — stress on the last syllable. First conjugation: убеждаю, убеждают. ⚠️ IMPERATIVE: убеждай, убеждайте. Same root as уверен (unit 24) in sense if not in spelling; it takes КОГО (accusative) В ЧЁМ or ЧЕМ (instrumental, unit 32)." },
        { id: "ru-u49l3-preduprezhdat", type: "vocab", front: "предупреждать", reading: "preduprezhdat", meaning: "to warn", accept: ["to give notice", "to let someone know in advance", "to forestall"], example: { jp: "Предупреждайте нас об этом заранее.", en: "Warn us about that in advance." }, drill: { jp: "Он будет предупреждать нас заранее", en: "He will warn us in advance" }, hint: "pre-du-prezh-DAT — four syllables, stress on the last. First conjugation. ⚠️ IMPERATIVE: предупреждай, предупреждайте. It takes КОГО О ЧЁМ. «Предупреждён — значит вооружён» is the Russian «forewarned is forearmed»." },
        { id: "ru-u49l3-priznavat", type: "vocab", front: "признавать", reading: "priznavat", meaning: "to admit", accept: ["to acknowledge", "to own up to", "to recognise formally"], example: { jp: "Признавайте эти ошибки сразу.", en: "Admit these mistakes straight away." }, drill: { jp: "Такие ошибки лучше признавать сразу", en: "Mistakes like that are better admitted straight away" }, hint: "pri-zna-VAT — stress on the last syllable. ⚠️ THE -ава- DROPS, like сдавать at unit 48: признаю, признаёшь, признают. IMPERATIVE: признавай, признавайте. Built on знать (unit 4) with при-: to bring a fact into your own knowledge out loud." },
        { id: "ru-u49l3-molchat", type: "vocab", front: "молчать", reading: "molchat", meaning: "to say nothing", accept: ["to keep quiet", "to be silent", "to hold your tongue"], example: { jp: "Молчите, пожалуйста, эта передача в прямом эфире.", en: "Please keep quiet — this broadcast is live on air." }, drill: { jp: "Трудно молчать так долго", en: "It is hard to keep quiet for so long" }, hint: "mal-CHAT — stress on the last syllable, the о reduces to a. ⚠️ SECOND CONJUGATION despite the -ать, like звучать at unit 48: молчу, молчишь, молчат. ⚠️ AND THIS IS THE SECOND IMPERATIVE PATTERN: они молчАТ → молч- ends in a CONSONANT → so the ending is -И, not -й: МОЛЧИ, МОЛЧИТЕ." },
      ],
    },
    {
      id: "ru-u49l4",
      unit: 49,
      lesson: 4,
      title: "Telling someone what to do with a thing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Tell someone to hang something up, pull it, not touch it, throw it out, pick one out or replace it — and produce both imperative endings without thinking.",
      items: [
        { id: "ru-u49l4-veshat", type: "vocab", front: "вешать", reading: "veshat", meaning: "to hang up", accept: ["to hang something", "to put on a hook", "to suspend"], example: { jp: "Вешайте это объявление около входа.", en: "Hang that notice up near the entrance." }, drill: { jp: "Это объявление можно вешать около входа", en: "That notice can be hung up near the entrance" }, hint: "VYE-shat — stress on the first syllable. First conjugation: вешаю, вешают. ⚠️ IMPERATIVE: вешай, вешайте. It is the third member of the класть / ставить family (units 15 and 48): класть lays flat, ставить stands upright, вешать hangs." },
        { id: "ru-u49l4-tyanut", type: "vocab", front: "тянуть", reading: "tyanut", meaning: "to pull", accept: ["to drag", "to draw towards you", "to drag something out in time"], example: { jp: "Тяните эту дверь очень медленно.", en: "Pull that door very slowly." }, drill: { jp: "Эту дверь лучше тянуть очень медленно", en: "That door is better pulled very slowly" }, hint: "tya-NUT — stress on the last syllable. First conjugation with a stem change: тяну, тянешь, тянут. ⚠️ IMPERATIVE: они тянУТ → тян- ends in a CONSONANT → ТЯНИ, ТЯНИТЕ — the -и pattern, like молчать. Its second sense is to drag out time: «не тяни!»" },
        { id: "ru-u49l4-trogat", type: "vocab", front: "трогать", reading: "trogat", meaning: "to touch", accept: ["to lay a hand on", "to handle", "to move something"], example: { jp: "Не трогайте это устройство без мастера.", en: "Do not touch that device without the craftsman." }, drill: { jp: "Не нужно трогать это устройство", en: "That device should not be touched" }, hint: "TRO-gat — stress on the first syllable. First conjugation: трогаю, трогают. ⚠️ IMPERATIVE: трогай, трогайте — and «НЕ ТРОГАЙ!» is one of the commonest sentences in spoken Russian, which is the negative-imperfective rule from l2 in its natural home." },
        { id: "ru-u49l4-vybrasyvat", type: "vocab", front: "выбрасывать", reading: "vybrasyvat", meaning: "to throw out", accept: ["to throw away", "to discard", "to chuck out"], example: { jp: "Не выбрасывайте эти документы без подписи.", en: "Do not throw those documents out without a signature." }, drill: { jp: "Не нужно выбрасывать эти документы", en: "Those documents should not be thrown out" }, hint: "vy-BRA-sy-vat — four syllables, stress on BRA. First conjugation, the -ыва- stays: выбрасываю, выбрасывают. ⚠️ IMPERATIVE: выбрасывай, выбрасывайте. The вы- prefix is the same «out» as in выключать (unit 43) and выпуск (unit 45)." },
        { id: "ru-u49l4-podbirat", type: "vocab", front: "подбирать", reading: "podbirat", meaning: "to pick out", accept: ["to select a suitable one", "to match up", "to pick up off the floor"], example: { jp: "Подбирайте самый выгодный обмен.", en: "Pick out the most favourable exchange." }, drill: { jp: "Я хочу подбирать самый выгодный обмен", en: "I want to pick out the most favourable exchange" }, hint: "pad-bi-RAT — stress on the last syllable, the о reduces to a. First conjugation: подбираю, подбирают. ⚠️ IMPERATIVE: подбирай, подбирайте. Not выбирать (unit 18), «to choose»: выбирать picks from a list, подбирать finds the one that FITS." },
        { id: "ru-u49l4-zamenyat", type: "vocab", front: "заменять", reading: "zamenyat", meaning: "to replace", accept: ["to put another in its place", "to substitute", "to stand in for someone"], example: { jp: "Заменяйте эту клавиатуру каждый год.", en: "Replace that keyboard every year." }, drill: { jp: "Эту клавиатуру пора заменять", en: "It is time to replace that keyboard" }, hint: "za-me-NYAT — stress on the last syllable. First conjugation. ⚠️ IMPERATIVE: заменяй, заменяйте. Built on менять (unit 24), «to change»: менять swaps one thing for another, заменять puts a NEW thing in an OLD thing's place. It also means to stand in for a colleague." },
      ],
    },
  ],
};
