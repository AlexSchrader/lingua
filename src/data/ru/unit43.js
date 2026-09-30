// RU Unit 43 — Техника и связь ("Technology and communication") — A2
// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 2 (u41–u50). Binding: ru/unit1.js §1–§10 and §A–§D, then ru/unit31.js
// §1–§7. The block-wide record is in ru/unit50.js §B1–§B7.
//
// ✅ THE ONE SLOT OF MY TEN WHOSE SCAFFOLD TITLE SURVIVED. "Technology and
// communication" is genuinely unwritten, it is one of my five assigned domains,
// and block 1 deliberately left it stocked: ru/unit40.js's header records that it
// took `новость` at u39l4 (because u39 is about speech and reporting) and LEFT
// `сообщение`, the internet vocabulary and the phone verbs beyond `звонить`
// (u34l1) to this unit. Retitled to Russian, as ru/unit1.js §10 requires — the
// English slot title is a placeholder in every language, not a rule.
//
// THE MEASURED HOLE. A1's u9 Знакомые слова is the internationalism unit and it
// gives компьютер · телефон · интернет — three nouns and nothing to do with
// them. Nothing in 42 units names a screen, a keyboard, a button, a file, a
// password, a network, a program or a message. A learner could say «у меня есть
// компьютер» and not one thing more.
//
// TWO CALLS I MADE, with the reasoning:
//   `включать` IS CARDED AND `выключать` IS NOT, though both measured free. They
//        differ by one prefix on one root, which is exactly the shape unit1.js §D
//        avoids and ru/unit38.js's header refuses for не+X. So the unit teaches
//        включать and puts выключать in its hint and its example sentence, where
//        the learner meets it without a second mastery track. Same treatment the
//        A2 band gives утром and вечером (ru/unit31.js §3). Because the word is
//        then in a sentence and on no card, it needs the `// FREE:` declaration
//        below — that line is a CLAIM, and the claim is exactly true here: a
//        learner meets выключать and is never asked to produce it.
//   `звонок` was REFUSED — vs u34 `звонить`, carded by block 1. The §D class
//        (разговор vs говорить). `трубка` carries the telephone sense instead,
//        and it is a better card anyway because nothing else in the corpus names
//        the handset.
//   THE IMPERFECTIVE IS THE HEADWORD HERE AND EVERYWHERE IN BLOCK 2. включать
//        not включить, нажимать not нажать. Block 1's ru/unit31.js §1 works out
//        how to gloss a perfective safely; block 2 simply does not need to, so
//        every verb in u41–u50 is an imperfective infinitive per unit1.js §4 and
//        aspect stays u31's subject.
//
// ⚠️ REFUSED IN THIS UNIT:
//   `данные` — it is a plural-only substantivised participle (данный), and both
//        participles (unit1.js §5, deferred to B1) and inflected forms
//        (unit1.js §5's last rule) are out. `файл` covers the sense a learner
//        needs.
//   `память` — vs u30 `памятник`. Judged too близко to be worth the card when
//        версия · вирус · ссылка · поиск · запрос were all measured clean.
//   `скорость` — TAKEN by block 1 at u36l2. `ошибка` — TAKEN (u6l3).
//   `папка` · `окно` · `компьютер` · `телефон` · `интернет` — all TAKEN (u25,
//        u15, u9, u9, u9). They are used freely in sentences here.
// FREE: выключать
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT43 = {
  id: "ru-u43",
  lang: "ru",
  title: "Техника и связь",
  order: 43,
  stage: "a2",
  lessons: [
    {
      id: "ru-u43l1",
      unit: 43,
      lesson: 1,
      title: "The machine in front of you",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the parts of a computer you can point at — the screen, the keyboard, the button — and talk about a device in general.",
      items: [
        { id: "ru-u43l1-ekran", type: "vocab", front: "экран", reading: "ekran", meaning: "a screen", accept: ["a display", "a monitor", "a cinema screen"], example: { jp: "Этот экран слишком большой для стола.", en: "This screen is too big for the desk." }, drill: { jp: "Экран был очень грязный", en: "The screen was very dirty" }, hint: "e-KRAN — stress on the last syllable, and the э at the start is the open e from unit 2. MASCULINE. It covers a computer monitor, a phone screen and a cinema screen alike." },
        { id: "ru-u43l1-klaviatura", type: "vocab", front: "клавиатура", reading: "klaviatura", meaning: "a keyboard", accept: ["the keys of a computer", "a typing keyboard", "a piano keyboard"], example: { jp: "Моя клавиатура уже совсем старая.", en: "My keyboard is already quite old." }, drill: { jp: "Клавиатура стоит около экрана", en: "The keyboard stands next to the screen" }, hint: "kla-vi-a-TU-ra — five syllables, stress on TU. FEMININE. From клавиша, a key — the same word covers a piano keyboard." },
        { id: "ru-u43l1-knopka", type: "vocab", front: "кнопка", reading: "knopka", meaning: "a button", accept: ["a press button", "a key you press", "a drawing pin"], example: { jp: "Эта кнопка совсем не работает.", en: "This button does not work at all." }, drill: { jp: "Кнопка была очень маленькая", en: "The button was very small" }, hint: "KNOP-ka — stress on the first syllable, and the кн cluster starts the word with no vowel between. FEMININE. It also means a drawing pin; a button on a coat is пуговица, a different word." },
        { id: "ru-u43l1-ustroystvo", type: "vocab", front: "устройство", reading: "ustroystvo", meaning: "a device", accept: ["a gadget", "a piece of equipment", "the way a thing is built"], example: { jp: "Это устройство очень полезное для работы.", en: "That device is very useful for work." }, drill: { jp: "Устройство работает без интернета", en: "The device works without the internet" }, hint: "u-STROY-stva — stress on STROY. NEUTER (-о). Two senses: the gadget itself, and the internal arrangement of something — «устройство мотора» is how an engine is put together." },
        { id: "ru-u43l1-tekhnika", type: "vocab", front: "техника", reading: "tekhnika", meaning: "machinery", accept: ["technology", "equipment", "appliances"], example: { jp: "Новая техника всегда очень дорогая.", en: "New machinery is always very expensive." }, drill: { jp: "Техника в этом отделе старая", en: "The equipment in this department is old" }, hint: "TYEKH-ni-ka — stress on the first syllable, and х is the back-of-the-throat sound. FEMININE, and it has NO PLURAL in this sense: техника already means all the machines together." },
        { id: "ru-u43l1-printer", type: "vocab", front: "принтер", reading: "printer", meaning: "a printer", accept: ["a printing machine", "an office printer"], example: { jp: "Наш принтер в другом отделе.", en: "Our printer is in another department." }, drill: { jp: "Принтер уже работает без бумаги", en: "The printer is already running without paper" }, hint: "PRIN-ter — stress on the first syllable. MASCULINE. An English loan that inflects like any hard masculine noun: принтера, принтеру, принтером." },
      ],
    },
    {
      id: "ru-u43l2",
      unit: 43,
      lesson: 2,
      title: "Getting online",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a website, a network, a file, a password and a program — everything you need to get at something online.",
      items: [
        { id: "ru-u43l2-sayt", type: "vocab", front: "сайт", reading: "sayt", meaning: "a website", accept: ["a site on the internet", "a web page address", "a site"], example: { jp: "Этот сайт был очень полезный.", en: "That website was very useful." }, drill: { jp: "Сайт сегодня работает очень плохо", en: "The website is working very badly today" }, hint: "One syllable, SAYT. MASCULINE. A straight English loan, and the everyday Russian word — there is no native alternative in use." },
        { id: "ru-u43l2-set", type: "vocab", front: "сеть", reading: "set", meaning: "a network", accept: ["the net", "a chain of shops", "a fishing net"], example: { jp: "В нашем общежитии сеть работает плохо.", en: "In our hall of residence the network works badly." }, drill: { jp: "Сеть здесь работает очень плохо", en: "The network works very badly here" }, hint: "One syllable, SYET — the е makes the с soft. ⚠️ FEMININE, and it ends in -ь, so the gender must be learned. Three senses at once: a computer network, a chain of shops, and a fishing net." },
        { id: "ru-u43l2-fayl", type: "vocab", front: "файл", reading: "fayl", meaning: "a file", accept: ["a computer file", "a saved document", "a data file"], example: { jp: "Этот файл слишком большой для письма.", en: "This file is too big for an email." }, drill: { jp: "Файл был в другой папке", en: "The file was in a different folder" }, hint: "One syllable, FAYL. MASCULINE. An English loan. Note that a paper папка (unit 25) is a folder on a desk AND on a screen, so Russian uses one word where English has two." },
        { id: "ru-u43l2-parol", type: "vocab", front: "пароль", reading: "parol", meaning: "a password", accept: ["a passcode", "a secret word", "a watchword"], example: { jp: "Я не помню новый пароль.", en: "I do not remember my new password." }, drill: { jp: "Пароль я всегда помню", en: "I always remember the password" }, hint: "pa-ROL — stress on the last syllable, and the ь makes the л soft. MASCULINE, despite the -ь — compare сеть in this same lesson, which is feminine. It was a military watchword long before computers." },
        { id: "ru-u43l2-programma", type: "vocab", front: "программа", reading: "programma", meaning: "a program", accept: ["a piece of software", "an application", "a schedule of events"], example: { jp: "Эта программа очень полезная для работы.", en: "This program is very useful for work." }, drill: { jp: "Программа стоит очень дорого", en: "The program costs a great deal" }, hint: "pra-GRAM-ma — stress on GRAM, the о reduces to a, and BOTH м are written. FEMININE. It also means a TV programme and the programme of an event — unit 45 uses that sense." },
        { id: "ru-u43l2-prilozhenie", type: "vocab", front: "приложение", reading: "prilozhenie", meaning: "an app", accept: ["a phone application", "an attachment to a letter", "an appendix"], example: { jp: "Это приложение работает только на телефоне.", en: "That app only works on a phone." }, drill: { jp: "Приложение уже было на телефоне", en: "The app was already on the phone" }, hint: "pri-la-ZHYE-ni-ye — five syllables, stress on ZHYE, and the о reduces to a. NEUTER (-е). Russians shorten it to прилага in speech. It also means an attachment to a letter and an appendix at the back of a book." },
      ],
    },
    {
      id: "ru-u43l3",
      unit: 43,
      lesson: 3,
      title: "Reaching someone",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that you sent a message, that the signal is bad, and talk about a mobile, a handset, headphones and a microphone.",
      items: [
        { id: "ru-u43l3-soobshchenie", type: "vocab", front: "сообщение", reading: "soobshchenie", meaning: "a message", accept: ["a text message", "a note sent to someone", "a communication"], example: { jp: "Твоё сообщение было очень короткое.", en: "Your message was very short." }, drill: { jp: "Сообщение было для нашего клиента", en: "The message was for our client" }, hint: "sa-ap-SHCHYE-ni-ye — five syllables, stress on SHCHYE, and щ is one long soft sh. NEUTER (-е). Block 1 took новость for unit 39 and left this word here on purpose — see ru/unit40.js's header." },
        { id: "ru-u43l3-svyaz", type: "vocab", front: "связь", reading: "svyaz", meaning: "a signal", accept: ["a connection", "a link between things", "communications"], example: { jp: "В лесу совсем нет связи.", en: "In the forest there is no signal at all." }, drill: { jp: "Связь в лесу не работает", en: "There is no signal in the forest" }, hint: "One syllable, SVYAS — the ь softens the з, which also devoices to s at the end (unit 6). ⚠️ FEMININE, ending in -ь. It is the phone signal, the link between two ideas, and the whole field of communications." },
        { id: "ru-u43l3-trubka", type: "vocab", front: "трубка", reading: "trubka", meaning: "a handset", accept: ["a telephone receiver", "a tube", "a smoking pipe"], example: { jp: "Он взял трубку очень быстро.", en: "He picked up the handset very quickly." }, drill: { jp: "Трубка была около телефона", en: "The handset was next to the phone" }, hint: "TRUP-ka — stress on the first syllable, and the б devoices to p before к. FEMININE. From труба, a pipe — so it is also a smoking pipe. «Взять трубку» is how Russian says «to answer the phone»." },
        { id: "ru-u43l3-mobilnyy", type: "vocab", front: "мобильный", reading: "mobilnyy", meaning: "mobile", accept: ["portable", "able to move", "cellular"], example: { jp: "Мой мобильный телефон совсем старый.", en: "My mobile phone is quite old." }, drill: { jp: "Мобильный телефон был на столе", en: "The mobile phone was on the table" }, hint: "ma-BIL-nyy — stress on BIL, and the о reduces to a. An ADJECTIVE, so it agrees: мобильная связь, мобильное приложение. Russians drop the noun and say just мобильный for the phone itself." },
        { id: "ru-u43l3-naushniki", type: "vocab", front: "наушники", reading: "naushniki", meaning: "headphones", accept: ["earphones", "a headset", "earbuds"], example: { jp: "Мои наушники были в сумке.", en: "My headphones were in my bag." }, drill: { jp: "Наушники были в моей сумке", en: "The headphones were in my bag" }, hint: "na-USH-ni-ki — stress on USH. ⚠️ PLURAL ONLY, like English «headphones» — there is no singular in use. Built on ухо, an ear: literally «on-ear things»." },
        { id: "ru-u43l3-mikrofon", type: "vocab", front: "микрофон", reading: "mikrofon", meaning: "a microphone", accept: ["a mic", "a recording microphone"], example: { jp: "Микрофон в этом устройстве совсем плохой.", en: "The microphone in this device is quite poor." }, drill: { jp: "Микрофон здесь не работает", en: "The microphone does not work here" }, hint: "mi-kra-FON — stress on the last syllable, and the о in the middle reduces to a. MASCULINE. Russians shorten it to микрофон only; there is no short form in wide use." },
      ],
    },
    {
      id: "ru-u43l4",
      unit: 43,
      lesson: 4,
      title: "What is going on inside",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about a version, a virus, a link, a search and a query — and about switching a machine on and off.",
      items: [
        { id: "ru-u43l4-versiya", type: "vocab", front: "версия", reading: "versiya", meaning: "a version", accept: ["a release of a program", "one account of events", "a variant"], example: { jp: "Новая версия этой программы уже готова.", en: "The new version of this program is already ready." }, drill: { jp: "Версия была слишком старая", en: "The version was too old" }, hint: "VYER-si-ya — stress on the first syllable. FEMININE. Both senses English has: a release of software, and one person's account of what happened." },
        { id: "ru-u43l4-virus", type: "vocab", front: "вирус", reading: "virus", meaning: "a virus", accept: ["a computer virus", "an infection", "a bug that spreads"], example: { jp: "Этот вирус был в старом файле.", en: "That virus was in an old file." }, drill: { jp: "Вирус был в этом файле", en: "The virus was in this file" }, hint: "VI-rus — stress on the first syllable. MASCULINE. Exactly as in English: the illness and the computer kind are one word." },
        { id: "ru-u43l4-ssylka", type: "vocab", front: "ссылка", reading: "ssylka", meaning: "a link", accept: ["a hyperlink", "a reference to a source", "an exile"], example: { jp: "Эта ссылка совсем не работает.", en: "That link does not work at all." }, drill: { jp: "Ссылка была в этом сообщении", en: "The link was in this message" }, hint: "SSYL-ka — stress on the first syllable, and the word starts with TWO с: hold the s a little longer. FEMININE. It is a web link, a footnote reference, and — historically — exile to Siberia." },
        { id: "ru-u43l4-poisk", type: "vocab", front: "поиск", reading: "poisk", meaning: "a search", accept: ["searching", "a hunt for something", "a lookup"], example: { jp: "Поиск в этой программе работает быстро.", en: "Search in this program works quickly." }, drill: { jp: "Поиск работает очень быстро", en: "Search works very quickly" }, hint: "PO-isk — stress on the FIRST syllable, and the о is therefore NOT reduced. MASCULINE. Same root as искать from unit 15: this is the noun for the act of looking." },
        { id: "ru-u43l4-zapros", type: "vocab", front: "запрос", reading: "zapros", meaning: "a query", accept: ["a request for information", "a formal enquiry", "a search term"], example: { jp: "Мой запрос был совсем простой.", en: "My query was quite simple." }, drill: { jp: "Запрос был очень простой", en: "The query was very simple" }, hint: "za-PROS — stress on the last syllable. MASCULINE. Same root as спрашивать from unit 23 but a different prefix: a запрос is a formal request, typed into a search box or sent to an office." },
        { id: "ru-u43l4-vklyuchat", type: "vocab", front: "включать", reading: "vklyuchat", meaning: "to switch on", accept: ["to turn on", "to put the power on", "to include"], example: { jp: "Нужно включать этот принтер каждое утро, а вечером выключать.", en: "You have to switch this printer on every morning and switch it off in the evening." }, drill: { jp: "Можно включать это устройство утром", en: "The device can be switched on in the morning" }, hint: "vklyu-CHAT — stress on the last syllable. First conjugation: включаю, включаешь, включают. ⚠️ Its opposite ВЫКЛЮЧАТЬ, «to switch off», is NOT a separate card — it is the same verb with the prefix вы-, and it is in this card's example so you meet it here. включать also means «to include»: «включать в список»." },
      ],
    },
  ],
};
