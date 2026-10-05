// RU Unit 73 — Опыт и воспоминание ("Experience and recollection") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 1 (u61–u73) — THE LAST UNIT OF THE BLOCK. Conventions: ru/unit1.js
// §1–§10 and §A–§D, ru/unit31.js §1–§7, ru/unit51.js §1–§5, and THIS BAND's
// conventions in ru/unit61.js §1–§8, which block 1 settled as crew lead.
//
// THE SLOT TITLE WAS "Experience and memory" and it is kept. A1 and A2 carded
// the BARE words and none of the furniture: память (u52) · помнить and забывать
// (u22) · опыт (u25) · навык and стаж (u42) · привычка (u29) · история (u24,
// glossed "a story") · прошлый · давно · тогда (u24) · однажды and впервые
// (u38). So a learner could say they remembered something and could not name a
// recollection, an impression, a trace, an archive, an ancestor, an ordeal, or a
// qualification.
//
// ⚠️ TWENTY-FIVE REFUSED — the most of any unit in this block, and the reason is
//   that `память`, `помнить`, `забывать`, `опыт` and `знать` are five of the
//   commonest roots in Russian and every derived word sits on one of them:
//   AGAINST A1/A2: `вспоминать` and `помниться` (помнить u22) · `забвение`
//     (забывать u22) · `запоминаться` and `запомнить` (запоминать u48) ·
//     `напоминание` (напоминать u49) · `записка` (записывать u48) · `знаток`
//     (знать u4) · `опытный` (опыт u25) · `умение` and `умелый` (уметь u47) ·
//     `мастерство` (мастер u42) · `свидетель` (свидетельство u50) · `давний` and
//     `недавний` and `давность` (давно u24) · `прошлогодний` (прошлый u24) ·
//     `старина` (старый u19) · `знакомство` (знакомиться u8 AND знакомый u56) ·
//     `встречаться` (встречать u23 AND встретить u31).
//   ⚠️ AGAINST THIS BLOCK'S OWN: `очевидец` (очевидный, u64l4) · `смутно`
//     (смутный, u64l4).
//   SUBSTANTIVISED FORMS, barred by unit1.js §5 and not by §D: `былое` ·
//     `прежнее` · `пережитое` · `накопленный` · `родословная`. Every one is an
//     adjective or a participle wearing a noun's meaning, exactly as `лёгкое`
//     was at A2 (unit51.js §2(b)) and `целое` at u68.
//
// ★ `воспоминание` IS CARDED WHILE `вспоминать` IS REFUSED, and the line is worth
//   stating because it looks arbitrary. помнить (u22) is glossed "to remember",
//   and вспоминать would need "to recall" — one sense, two prompts, which is the
//   gloss-collision defect unit31.js §1 is written about, AND the taught verb
//   hands the derived one over. The NOUN does neither: память (u52) is glossed
//   "memory" as a faculty, and воспоминание is one particular recollection, which
//   is a different thing a learner genuinely cannot say otherwise.
//
// ★ A FOURTH FREE-PASS TRAP, after идеал (u68), прогресс (u69) and the five
//   loanwords cleared at u72. `ветеран` transliterates to EXACTLY "veteran", so
//   the obvious gloss would be read straight off the prompt. It is glossed "an
//   old hand". ностальгия · эпизод · архив · квалификация were checked the same
//   way and are safe (nostalgiya · epizod · arkhiv · kvalifikatsiya).
//
// ★ ONE -ь NOUN: летопись, FEMININE — the same -пись ending as `живопись` at u55,
//   which is also feminine. unit1.js §3 still makes it compulsory to say so.
//
// ═════════════════════════════════════════════════════════════════════════════
// BLOCK 1 IS COMPLETE — u61–u73 AUTHORED 2026-10-05. 13 units, 52 lessons,
// 312 cards, 6 cards per lesson, every card with example + drill.
// ═════════════════════════════════════════════════════════════════════════════
// WHAT BLOCKS 2 AND 3 SHOULD READ FIRST: unit61.js §1–§8 — the band conventions,
// the §3 allocation of all fourteen generic u84–u97 slots, the §4 flags on the
// pre-titled ones, the §5 barred candidates (среда · права · прошлое · уголь),
// §6's derivation-test record, §7's warning that `lint:curriculum` CANNOT
// scope-check Russian, and §7b's accept[] rule.
//
// THE FIVE THINGS THAT COST THIS BLOCK THE MOST TIME, so they cost you less:
//  1. A DRILL MUST CONTAIN THE NOMINATIVE, and an abstract noun's natural use is
//     oblique. u67 shipped TEN drills on its first draft that used в восторге ·
//     с отвращением · почувствовал досаду and therefore did not cloze at all.
//     Write the drill as a separate flat sentence in the nominative, always.
//  2. A DRILL MUST NOT BE THE OPENING OF ITS OWN EXAMPLE. u72's first draft had
//     FIFTEEN of these. `drillPrefixOfExample` in the selfcheck catches them and
//     lint does not.
//  3. accept[] MAY CONTAIN NO COMMA AND NO " or " — meaningVariants splits on
//     both, so "one or two people" becomes ["one", "two people"] and two cards in
//     a lesson silently share a prompt. unit61.js §7b.
//  4. CHECK §D AGAINST YOUR OWN BLOCK'S FRONTS, not only against A1/A2. Fifteen
//     of this block's refusals are against cards it had written itself, and the
//     rate climbed through the band as the block spent more roots.
//  5. TRANSLITERATE EVERY CANDIDATE AND LOOK AT THE READING. It catches the
//     free-pass loanwords (идеал · прогресс · ветеран) and the soft-sign
//     collisions (уголь = угол) in one pass.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT73 = {
  id: "ru-u73",
  lang: "ru",
  title: "Опыт и воспоминание",
  order: 73,
  stage: "b1",
  lessons: [
    {
      id: "ru-u73l1",
      unit: 73,
      lesson: 1,
      title: "What the past leaves behind",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what stays with you — a recollection, an impression, nostalgia, one episode, a trace, and an imprint.",
      items: [
        { id: "ru-u73l1-vospominanie", type: "vocab", front: "воспоминание", reading: "vospominanie", meaning: "a recollection", accept: ["a particular memory", "something you remember", "a thing that comes back to you"], example: { jp: "У него осталось только одно воспоминание о том дне, и оно было совсем смутное.", en: "He was left with only one recollection of that day, and it was quite vague." }, drill: { jp: "Это очень старое воспоминание", en: "That is a very old recollection" }, hint: "vas-pa-mi-NA-ni-ye — six syllables, stress on NA. NEUTER (-е). ⚠️ Память from unit 52 is the FACULTY of memory; воспоминание is ONE recollection. Its verb вспоминать was refused — see this unit's header for the line between them." },
        { id: "ru-u73l1-vpechatlenie", type: "vocab", front: "впечатление", reading: "vpechatlenie", meaning: "an impression", accept: ["how a thing struck you", "the effect something made", "what you took away from it"], example: { jp: "Впечатление было очень сильное, хотя объяснить его словами он не мог.", en: "The impression was very strong, although he could not explain it in words." }, drill: { jp: "У меня было сильное впечатление", en: "I had a strong impression" }, hint: "vpi-chat-LE-ni-ye — five syllables, stress on LE. NEUTER (-е). It sits on печать, a seal or a stamp — something pressed INTO you. ⚠️ «Произвести впечатление» is the standard phrase for making an impression." },
        { id: "ru-u73l1-nostalgiya", type: "vocab", front: "ностальгия", reading: "nostalgiya", meaning: "nostalgia", accept: ["longing for an earlier time", "fondness for the way things were", "homesickness for the past"], example: { jp: "Ностальгия по тем годам была у всех, хотя жить тогда было труднее.", en: "Everyone felt nostalgia for those years, although living then was harder." }, drill: { jp: "Ностальгия по тем годам сильная", en: "The nostalgia for those years is strong" }, hint: "nas-tal-GI-ya — four syllables, stress on GI, and the г is hard. FEMININE (-я). It takes по + the dative. ⚠️ Тоска from unit 67 is an aching longing with no object; ностальгия always has one, and it is always a time." },
        { id: "ru-u73l1-epizod", type: "vocab", front: "эпизод", reading: "epizod", meaning: "one incident in a longer story", accept: ["a passage of events", "a scene in a sequence", "one piece of a story"], example: { jp: "Этот эпизод он помнил лучше всего, хотя был он совсем маленький.", en: "That was the episode he remembered best, although it was quite a small one." }, drill: { jp: "Этот эпизод был совсем короткий", en: "That episode was quite short" }, hint: "e-pi-ZOD — stress on the last syllable, and the э at the front is э, not е. MASCULINE. ⚠️ Случай from unit 24 is an occasion; an эпизод is one piece of a longer story, which is why a film and a life both have them." },
        { id: "ru-u73l1-sled", type: "vocab", front: "след", reading: "sled", meaning: "a trace", accept: ["a mark left behind", "a footprint", "a sign that something was here"], example: { jp: "От той фирмы не осталось и следа, хотя работала она двадцать лет.", en: "Not a trace of that firm was left, although it had worked for twenty years." }, drill: { jp: "От него не осталось след", en: "No trace of him was left" }, hint: "SLED — one syllable. MASCULINE. ⚠️ Do not confuse it with следствие from unit 52, a consequence, or следовательно from unit 62 — all three share a root and none of them means what the others do. «Без следа» means without a trace." },
        { id: "ru-u73l1-otpechatok", type: "vocab", front: "отпечаток", reading: "otpechatok", meaning: "an imprint", accept: ["a stamp left on something", "a mark pressed in", "what a thing leaves on you"], example: { jp: "Эти годы оставили отпечаток на всей его работе, и видно это и сейчас.", en: "Those years left an imprint on all his work, and it is visible even now." }, drill: { jp: "Эти годы оставили сильный отпечаток", en: "Those years left a strong imprint" }, hint: "at-pi-CHA-tak — four syllables, stress on CHA. MASCULINE, and ⚠️ its stem drops the о: отпечатка, отпечатку. It is the same печать root as впечатление, and «отпечатки пальцев» are fingerprints." },
      ],
    },
    {
      id: "ru-u73l2",
      unit: 73,
      lesson: 2,
      title: "Where the past is kept",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name where a record of the past lives — an archive, a chronicle, a memoir, a diary, a story handed down, and a legacy.",
      items: [
        { id: "ru-u73l2-arkhiv", type: "vocab", front: "архив", reading: "arkhiv", meaning: "an archive", accept: ["a store of old papers", "a records office", "where documents are kept"], example: { jp: "Все старые документы лежат в архиве, но пропуск туда получить очень трудно.", en: "All the old documents lie in the archive, but it is very hard to get a pass in there." }, drill: { jp: "Это очень большой архив", en: "That is a very large archive" }, hint: "ar-KHIV — stress on the last syllable, with the scraping х. MASCULINE. ⚠️ Its reading is \"arkhiv\", not the English word, so the short gloss is safe. In computing it is also a zip file, the same word." },
        { id: "ru-u73l2-letopis", type: "vocab", front: "летопись", reading: "letopis", meaning: "a chronicle", accept: ["a year-by-year record", "an annal", "a running history"], example: { jp: "Эта летопись была написана очень давно, и прочитать её может только специалист.", en: "That chronicle was written very long ago, and only a specialist can read it." }, drill: { jp: "Эта летопись очень старая", en: "That chronicle is very old" }, hint: "LE-ta-pis — stress on the first syllable. ⚠️ FEMININE despite the -ь — the same -пись ending as живопись at unit 55, which is also feminine. It is лето from unit 16 plus пись: a writing of the years, because old Russian counted years as summers." },
        { id: "ru-u73l2-memuary", type: "vocab", front: "мемуары", reading: "memuary", meaning: "a memoir", accept: ["somebody's written recollections", "a book about one's own life", "reminiscences in print"], example: { jp: "Мемуары он писал десять лет, но публиковать их не хотел.", en: "He wrote his memoir for ten years, but did not want to publish it." }, drill: { jp: "Мемуары были очень интересные", en: "The memoir was very interesting" }, hint: "mi-mu-A-ry — four syllables, stress on A. ⚠️ PLURAL ONLY in Russian, like деньги from unit 5 and брюки from unit 18 — there is no «мемуар». Its reading \"memuary\" is not the English word." },
        { id: "ru-u73l2-dnevnik", type: "vocab", front: "дневник", reading: "dnevnik", meaning: "a diary", accept: ["a journal you write daily", "a day-book", "a record of your days"], example: { jp: "Дневник он писал всю жизнь, и теперь его читают как летопись той эпохи.", en: "He kept a diary all his life, and now it is read as a chronicle of that era." }, drill: { jp: "Это был очень старый дневник", en: "That was a very old diary" }, hint: "dniv-NIK — stress on the last syllable. MASCULINE. Built on день from unit 3. ⚠️ A RUSSIAN SCHOOLCHILD'S дневник is the homework-and-marks book the teacher signs, which is the first sense every Russian learns." },
        { id: "ru-u73l2-predanie", type: "vocab", front: "предание", reading: "predanie", meaning: "a story handed down", accept: ["an oral tradition", "a tale passed from one generation to another", "lore"], example: { jp: "По преданию, город здесь стоял уже тысячу лет назад, но доказательства нет.", en: "According to the story handed down, a town stood here a thousand years ago, but there is no proof." }, drill: { jp: "Это очень старое предание", en: "That is a very old story handed down" }, hint: "pri-DA-ni-ye — four syllables, stress on DA. NEUTER (-е). It is пере+дать — handed over. ⚠️ Легенда from unit 55 can be about a footballer; a предание is always old and always oral, and «по преданию» is how a Russian guide begins." },
        { id: "ru-u73l2-nasledie", type: "vocab", front: "наследие", reading: "nasledie", meaning: "a legacy", accept: ["what one age leaves the next", "an inheritance in the wide sense", "a heritage"], example: { jp: "Наследие этой эпохи и сейчас видно во всём городе, хотя эпоха давно прошла.", en: "The legacy of that era is visible all over the town even now, although the era passed long ago." }, drill: { jp: "Наследие этой эпохи очень большое", en: "The legacy of that era is very great" }, hint: "nas-LE-di-ye — four syllables, stress on LE. NEUTER (-е). It is the same след root as lesson 1 — what follows after. ⚠️ It is almost always CULTURAL or historical, not money: for an inheritance of property Russian says наследство." },
      ],
    },
    {
      id: "ru-u73l3",
      unit: 73,
      lesson: 3,
      title: "Before you and after you",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place people in time — an ancestor, a descendant, an old hand, a newcomer — and mark an anniversary or a milestone birthday.",
      items: [
        { id: "ru-u73l3-predok", type: "vocab", front: "предок", reading: "predok", meaning: "an ancestor", accept: ["a forebear", "somebody your family came from", "one of those who came before"], example: { jp: "Его предки жили в этой деревне, и дом стоит там и сейчас.", en: "His ancestors lived in that village, and the house stands there even now." }, drill: { jp: "Его предок жил в деревне", en: "His ancestor lived in a village" }, hint: "PRE-dak — stress on the first syllable. MASCULINE, and ⚠️ its stem drops the о: предка, предку, предки. It is пред- (before), the same prefix as предварительный at unit 66 — nothing to do with предотвращать at unit 70." },
        { id: "ru-u73l3-potomok", type: "vocab", front: "потомок", reading: "potomok", meaning: "a descendant", accept: ["somebody who comes after you", "an offspring in a later generation", "one of those who follow"], example: { jp: "Он потомок очень известной семьи, но говорить об этом не любит.", en: "He is a descendant of a very well-known family, but does not like talking about it." }, drill: { jp: "Он потомок известной семьи", en: "He is a descendant of a well-known family" }, hint: "pa-TO-mak — stress on TO. MASCULINE, and its stem drops the о: потомка, потомки. ⚠️ It is по+том, the same том as потом from unit 4 — what comes after — but «later» does not hand a learner «a descendant», which is why §D allows it. Поколение from unit 59 is a whole generation." },
        { id: "ru-u73l3-veteran", type: "vocab", front: "ветеран", reading: "veteran", meaning: "an old hand", accept: ["someone with long service", "a long-serving member", "an old campaigner"], example: { jp: "Он ветеран этой фирмы, и о её истории знает больше всех.", en: "He is an old hand at that firm, and knows more about its history than anyone." }, drill: { jp: "Это настоящий ветеран фирмы", en: "That is a genuine old hand of the firm" }, hint: "vi-ti-RAN — stress on the last syllable. MASCULINE. ⚠️ Glossed «an old hand» ON PURPOSE: this word transliterates to its own English gloss, so the obvious version would give the answer away — unit 1 §9, the same trap as идеал and прогресс. Do not confuse it with ветер from unit 16." },
        { id: "ru-u73l3-novichok", type: "vocab", front: "новичок", reading: "novichok", meaning: "a newcomer", accept: ["a beginner", "somebody new to the work", "a raw recruit"], example: { jp: "Новичок обычно не понимает, почему здесь всё делают именно так.", en: "A newcomer usually does not understand why everything here is done exactly so." }, drill: { jp: "Новичок обычно многого не понимает", en: "A newcomer usually does not understand much" }, hint: "na-vi-CHOK — stress on the last syllable. MASCULINE, and its stem drops the о: новичка, новички. It is built on новый from unit 19. ⚠️ It is the exact opposite of ветеран and the two are used as a pair." },
        { id: "ru-u73l3-godovshchina", type: "vocab", front: "годовщина", reading: "godovshchina", meaning: "an anniversary", accept: ["the yearly date of an event", "the same day a year later", "a yearly commemoration"], example: { jp: "Годовщина была в прошлом месяце, но отмечать её никто не стал.", en: "The anniversary was last month, but nobody marked it." }, drill: { jp: "Это была важная годовщина", en: "That was an important anniversary" }, hint: "ga-dav-SHCHI-na — four syllables, stress on SHCHI, with the long щ. FEMININE (-а). Built on год from unit 6. ⚠️ It is the anniversary of an EVENT — a wedding, a death, a founding — never of a birthday, which is день рождения." },
        { id: "ru-u73l3-yubiley", type: "vocab", front: "юбилей", reading: "yubiley", meaning: "a milestone birthday", accept: ["a round-number celebration", "a jubilee", "a big anniversary party"], example: { jp: "На юбилей пришли все, даже те, кто был здесь впервые.", en: "Everyone came to the milestone birthday, even those who were here for the first time." }, drill: { jp: "На юбилей пришли совсем все", en: "Absolutely everyone came to the celebration" }, hint: "yu-bi-LEY — stress on the last syllable. MASCULINE. ⚠️ IT MUST BE A ROUND NUMBER: a Russian's юбилей is the fiftieth or sixtieth birthday, or a firm's hundredth year. Годовщина is any year; юбилей is one worth a party." },
      ],
    },
    {
      id: "ru-u73l4",
      unit: 73,
      lesson: 4,
      title: "Going through it, and what it leaves",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe experience as something lived — living through it, putting a thing to the test, an ordeal, acquiring something — and name a qualification and a landmark.",
      items: [
        { id: "ru-u73l4-perezhivat", type: "vocab", front: "переживать", reading: "perezhivat", meaning: "to live through", accept: ["to go through something", "to come through an ordeal", "to take something hard"], example: { jp: "Переживать такое второй раз он не хотел, и поэтому оставил эту работу.", en: "He did not want to live through such a thing a second time, and so he gave up that job." }, drill: { jp: "Трудно переживать такое второй раз", en: "It is hard to live through such a thing twice" }, hint: "pi-ri-ZHI-vat — stress on ZHI. IMPERFECTIVE; the perfective is пережить. It is пере- + жить from unit 4. ⚠️ ITS SECOND SENSE IS THE COMMONEST IN SPEECH: «не переживай!» means do not worry — the same verb, used of feeling something too keenly." },
        { id: "ru-u73l4-ispytyvat", type: "vocab", front: "испытывать", reading: "ispytyvat", meaning: "to put to the test", accept: ["to try something out", "to test in practice", "to feel an emotion"], example: { jp: "Новый метод будут испытывать целый год, и только потом примут решение.", en: "The new method will be tested for a whole year, and only then will a decision be taken." }, drill: { jp: "Метод будут испытывать целый год", en: "The method will be tested for a whole year" }, hint: "is-PY-ty-vat — stress on PY, with the ы sound from unit 5. IMPERFECTIVE; the perfective is испытать. ⚠️ TWO SENSES AND BOTH ARE COMMON: to test a machine, and to FEEL an emotion — «испытывать страх» means to feel fear, which is the written way to say it." },
        { id: "ru-u73l4-ispytanie", type: "vocab", front: "испытание", reading: "ispytanie", meaning: "an ordeal", accept: ["a trial you go through", "a severe test", "a testing time"], example: { jp: "Это было серьёзное испытание для всей семьи, но вместе им было не так трудно.", en: "That was a serious ordeal for the whole family, but together it was not as hard for them." }, drill: { jp: "Это очень серьёзное испытание", en: "That is a very serious ordeal" }, hint: "is-py-TA-ni-ye — five syllables, stress on TA. NEUTER (-е). ⚠️ TWO SENSES: a technical trial of a machine, and a hard time a person goes through. Экзамен from unit 25 is an exam; an испытание is life testing you." },
        { id: "ru-u73l4-priobretat", type: "vocab", front: "приобретать", reading: "priobretat", meaning: "to acquire", accept: ["to come by something", "to gain over time", "to take on a quality"], example: { jp: "Опыт приобретать можно только самостоятельно, и объяснить его словами нельзя.", en: "Experience can be acquired only on one's own, and it cannot be explained in words." }, drill: { jp: "Опыт можно приобретать постепенно", en: "Experience can be acquired gradually" }, hint: "pri-ab-ri-TAT — four syllables, stress on the last. IMPERFECTIVE; the perfective is приобрести. ⚠️ Покупать from unit 18 is to buy; приобретать is wider and more formal — you acquire a habit, a reputation, a skill or a flat. «Приобрести опыт» is the standard phrase." },
        { id: "ru-u73l4-kvalifikatsiya", type: "vocab", front: "квалификация", reading: "kvalifikatsiya", meaning: "a qualification held", accept: ["a proven level of skill", "professional standing", "how skilled somebody is"], example: { jp: "Квалификация у него очень высокая, но диплома об этом нет.", en: "His qualification is very high, but there is no certificate of it." }, drill: { jp: "У него очень высокая квалификация", en: "He has a very high qualification" }, hint: "kva-li-fi-KA-tsi-ya — six syllables, stress on KA. FEMININE (-я). ⚠️ IT IS THE LEVEL, NOT THE PAPER: диплом from unit 41 is the certificate; квалификация is the skill it certifies, and a Russian CV lists both. Its reading is not the English word." },
        { id: "ru-u73l4-vekha", type: "vocab", front: "веха", reading: "vekha", meaning: "a landmark in a history", accept: ["a notable point in a story", "a staging post in time", "a defining moment"], example: { jp: "Этот год стал вехой в истории города, хотя тогда этого никто не понимал.", en: "That year became a landmark in the history of the town, although nobody understood it at the time." }, drill: { jp: "Этот год стал важная веха", en: "That year became an important landmark" }, hint: "VE-kha — stress on the first syllable, with the scraping х. FEMININE (-а). Literally a surveyor's marker pole. ⚠️ Рубеж at unit 69 is a line you CROSS; a веха is a point somebody later MARKS on the story — which is why this one belongs to history and that one to a process." },
      ],
    },
  ],
};
