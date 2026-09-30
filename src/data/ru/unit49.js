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
// NOT ONE AT u47. заполняй · подпиши · грузи are INFLECTED FORMS, and unit1.js §5
// bans carding those. So this unit cards 24 NEW VERBS, exactly as u48 does, and
// the imperative lives in every canDo, every hint and every example sentence. By
// the end of l4 a learner has met the rule four times over four separate stem
// shapes and can form the imperative of any verb in the language.
//
// THE RULE, stated once here and once per lesson:
//   Take the ОНИ form, drop its ending, and look at what is left.
//     ends in a VOWEL  → add -й      (они заполняЮТ → заполня- → ЗАПОЛНЯЙ)
//     ends in a CONSONANT → add -и   (они грузЯТ → груз- → ГРУЗИ)
//   Then add -ТЕ for вы, always: заполняйТЕ, грузиТЕ. There is no third pattern.
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
// TWO CALLS I MADE, with the reasoning:
//   `напоминать` is a PREFIXED DERIVATION of u22 `помнить`, which u48's header
//        establishes as allowed on block 1's own u31 precedent. Gloss measured clear.
//   `убеждать` and `предупреждать` sit beside u24 `уверен` in sense but on a
//        different root; neither gloss collides.
//
// ⚠️ MERGE-SEAT DEDUPE, 2026-09-30. Five of this unit's fronts were ALSO authored by
// block 3 (u51–u60), which could not see this range while it ran. The merge seat gave
// each word ONE home by theme and replaced the block-2 copy in its slot:
//   `слушать`    → u59 Слова и поступки; l3 slot 1 is now `перебивать`.
//   `признавать` → u59 Слова и поступки; l3 slot 5 is now `возражать`.
//   `молчать`    → u59 Слова и поступки; l3 slot 6 is now `болтать`.
//   `вешать`     → u57 Вещи и их место;  l4 slot 1 is now `грузить`.
//   `тянуть`     → u57 Вещи и их место;  l4 slot 2 is now `крутить`.
// The unit is still 4 × 6 = 24, and every replacement is a new id, front, gloss,
// example and drill — nothing was renamed, so no mastery track was reused.
// ⚠️ ONE STRUCTURAL CONSEQUENCE, AND IT IS DELIBERATE. `молчать` carried the -и
// imperative pattern in l3 and `тянуть` reinforced it in l4. Russian has no FREE
// imperfective speaking verb left with a consonant stem — молчать, кричать (u28),
// спорить, просить, шутить, хвалить and благодарить are each taken or blocked by a
// noun already carded — so the -и pattern now lives entirely in l4, where `грузить`
// introduces it and `крутить` repeats it. l1–l3 are pure -й; l4 teaches both. The
// learner still meets -и twice, and the canDos say so.
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
        { id: "ru-u49l2-sokhranyat", type: "vocab", front: "сохранять", reading: "sokhranyat", meaning: "to save", accept: ["to save a file", "to keep safe", "to retain"], example: { jp: "Сохраняйте каждый файл два раза.", en: "Save every file twice." }, drill: { jp: "Я хочу сохранять каждый файл два раза", en: "I want to save every file twice" }, hint: "sa-khra-NYAT — stress on the last syllable, the о reduces to a. First conjugation. ⚠️ IMPERATIVE: сохраняй, сохраняйте. Built with со- on the same root as хранить (unit 59): хранить is keeping a thing, сохранять is keeping it FROM being lost." },
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
      canDo: "Tell someone not to interrupt, to remind you, to warn you, to object politely — the whole -й pattern again, over the verbs a conversation actually runs on.",
      items: [
        { id: "ru-u49l3-perebivat", type: "vocab", front: "перебивать", reading: "perebivat", meaning: "to interrupt", accept: ["to cut someone off", "to break into a conversation", "to talk over someone"], example: { jp: "Не перебивайте клиента так часто.", en: "Do not interrupt the client so often." }, drill: { jp: "Не нужно перебивать клиента", en: "There is no need to interrupt the client" }, hint: "pe-re-bi-VAT — four syllables, stress on the last. First conjugation: перебиваю, перебивают. ⚠️ IMPERATIVE: перебивай, перебивайте — and the negative is where it lives: «не перебивай!» is what a Russian says to a child. Built on бить, to strike: to cut straight across what someone is saying." },
        { id: "ru-u49l3-napominat", type: "vocab", front: "напоминать", reading: "napominat", meaning: "to remind", accept: ["to jog someone's memory", "to bring to mind", "to be reminiscent of"], example: { jp: "Напоминайте мне об этом каждый день.", en: "Remind me about that every day." }, drill: { jp: "Ты можешь напоминать мне об этом", en: "You can remind me about that" }, hint: "na-pa-mi-NAT — four syllables, stress on the last, both о reduce to a. First conjugation. ⚠️ IMPERATIVE: напоминай, напоминайте. Built on помнить (unit 22): помнить is to hold in mind, запоминать (unit 48) is to put it there, напоминать is to put it in SOMEBODY ELSE'S. It takes КОМУ О ЧЁМ — dative plus о, units 34 and 39." },
        { id: "ru-u49l3-ubezhdat", type: "vocab", front: "убеждать", reading: "ubezhdat", meaning: "to persuade", accept: ["to talk someone round", "to convince", "to win someone over"], example: { jp: "Убеждайте клиента только цифрами.", en: "Persuade the client with figures alone." }, drill: { jp: "Клиента лучше убеждать только цифрами", en: "A client is better persuaded with figures alone" }, hint: "u-bezh-DAT — stress on the last syllable. First conjugation: убеждаю, убеждают. ⚠️ IMPERATIVE: убеждай, убеждайте. Same root as уверен (unit 24) in sense if not in spelling; it takes КОГО (accusative) В ЧЁМ or ЧЕМ (instrumental, unit 32)." },
        { id: "ru-u49l3-preduprezhdat", type: "vocab", front: "предупреждать", reading: "preduprezhdat", meaning: "to warn", accept: ["to give notice", "to let someone know in advance", "to forestall"], example: { jp: "Предупреждайте нас об этом заранее.", en: "Warn us about that in advance." }, drill: { jp: "Он будет предупреждать нас заранее", en: "He will warn us in advance" }, hint: "pre-du-prezh-DAT — four syllables, stress on the last. First conjugation. ⚠️ IMPERATIVE: предупреждай, предупреждайте. It takes КОГО О ЧЁМ. «Предупреждён — значит вооружён» is the Russian «forewarned is forearmed»." },
        { id: "ru-u49l3-vozrazhat", type: "vocab", front: "возражать", reading: "vozrazhat", meaning: "to raise an objection", accept: ["to disagree out loud", "to speak against", "to protest"], example: { jp: "Возражайте только очень вежливо.", en: "Raise your objection only very politely." }, drill: { jp: "Здесь лучше возражать очень вежливо", en: "Here it is better to object very politely" }, hint: "vaz-ra-ZHAT — stress on the last syllable, and the о reduces to a. First conjugation: возражаю, возражают. ⚠️ IMPERATIVE: возражай, возражайте. ⚠️ Glossed «to raise an objection» because вещь at unit 3 is already «an object» — English uses one word for two unrelated ideas, Russian does not. «Не возражаю» is the polite Russian for «I don't mind»." },
        { id: "ru-u49l3-boltat", type: "vocab", front: "болтать", reading: "boltat", meaning: "to chatter", accept: ["to chat away", "to talk too much", "to natter"], example: { jp: "Не болтайте на семинаре, преподаватель уже здесь.", en: "Do not chatter in the seminar — the lecturer is here already." }, drill: { jp: "Не нужно болтать на семинаре", en: "There is no need to chatter in the seminar" }, hint: "bal-TAT — stress on the last syllable, the о reduces to a. First conjugation: болтаю, болтают. ⚠️ IMPERATIVE: болтай, болтайте — and «не болтай!» is the everyday one, both for «stop chattering» and for «do not tell anyone». Its first sense is physical: to shake a liquid about." },
      ],
    },
    {
      id: "ru-u49l4",
      unit: 49,
      lesson: 4,
      title: "Telling someone what to do with a thing",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Tell someone to load a thing, to turn it, not to touch it, to throw it out, to pick one out or to replace it — and meet the second pattern, where the stem ends in a consonant and the ending is -и, not -й.",
      items: [
        { id: "ru-u49l4-gruzit", type: "vocab", front: "грузить", reading: "gruzit", meaning: "to load", accept: ["to load up", "to put cargo in", "to load onto a vehicle"], example: { jp: "Грузите багаж очень медленно.", en: "Load the luggage very slowly." }, drill: { jp: "Этот багаж лучше грузить медленно", en: "That luggage is better loaded slowly" }, hint: "gru-ZIT — stress on the last syllable. Second conjugation, and з → ж in the я form only: гружу, but грузишь, грузит, грузят. ⚠️ THE SECOND IMPERATIVE PATTERN: они грузЯТ → груз- ends in a CONSONANT → so the ending is -И, not -й: ГРУЗИ, ГРУЗИТЕ." },
        { id: "ru-u49l4-krutit", type: "vocab", front: "крутить", reading: "krutit", meaning: "to turn something round", accept: ["to twist", "to spin something", "to turn a knob"], example: { jp: "Крутите эту кнопку очень медленно.", en: "Turn that knob very slowly." }, drill: { jp: "Эту кнопку лучше крутить очень медленно", en: "That knob is better turned very slowly" }, hint: "kru-TIT — stress on the last syllable. Second conjugation, and т → ч in the я form only: кручу, but крутишь, крутят — the mutation from unit 48. ⚠️ IMPERATIVE: они крутЯТ → крут- ends in a CONSONANT → КРУТИ, КРУТИТЕ, the same -и as грузить above. «Не крути!» is also what you say to someone dodging a question." },
        { id: "ru-u49l4-trogat", type: "vocab", front: "трогать", reading: "trogat", meaning: "to touch", accept: ["to lay a hand on", "to handle", "to move something"], example: { jp: "Не трогайте это устройство без мастера.", en: "Do not touch that device without the craftsman." }, drill: { jp: "Не нужно трогать это устройство", en: "That device should not be touched" }, hint: "TRO-gat — stress on the first syllable. First conjugation: трогаю, трогают. ⚠️ IMPERATIVE: трогай, трогайте — and «НЕ ТРОГАЙ!» is one of the commonest sentences in spoken Russian, which is the negative-imperfective rule from l2 in its natural home." },
        { id: "ru-u49l4-vybrasyvat", type: "vocab", front: "выбрасывать", reading: "vybrasyvat", meaning: "to throw out", accept: ["to throw away", "to discard", "to chuck out"], example: { jp: "Не выбрасывайте эти документы без подписи.", en: "Do not throw those documents out without a signature." }, drill: { jp: "Не нужно выбрасывать эти документы", en: "Those documents should not be thrown out" }, hint: "vy-BRA-sy-vat — four syllables, stress on BRA. First conjugation, the -ыва- stays: выбрасываю, выбрасывают. ⚠️ IMPERATIVE: выбрасывай, выбрасывайте. The вы- prefix is the same «out» as in выключать (unit 43) and выпуск (unit 45)." },
        { id: "ru-u49l4-podbirat", type: "vocab", front: "подбирать", reading: "podbirat", meaning: "to pick out", accept: ["to select a suitable one", "to match up", "to pick up off the floor"], example: { jp: "Подбирайте самый выгодный обмен.", en: "Pick out the most favourable exchange." }, drill: { jp: "Я хочу подбирать самый выгодный обмен", en: "I want to pick out the most favourable exchange" }, hint: "pad-bi-RAT — stress on the last syllable, the о reduces to a. First conjugation: подбираю, подбирают. ⚠️ IMPERATIVE: подбирай, подбирайте. Not выбирать (unit 18), «to choose»: выбирать picks from a list, подбирать finds the one that FITS." },
        { id: "ru-u49l4-zamenyat", type: "vocab", front: "заменять", reading: "zamenyat", meaning: "to replace", accept: ["to put another in its place", "to substitute", "to stand in for someone"], example: { jp: "Заменяйте эту клавиатуру каждый год.", en: "Replace that keyboard every year." }, drill: { jp: "Эту клавиатуру пора заменять", en: "It is time to replace that keyboard" }, hint: "za-me-NYAT — stress on the last syllable. First conjugation. ⚠️ IMPERATIVE: заменяй, заменяйте. Built on менять (unit 24), «to change»: менять swaps one thing for another, заменять puts a NEW thing in an OLD thing's place. It also means to stand in for a colleague." },
      ],
    },
  ],
};
