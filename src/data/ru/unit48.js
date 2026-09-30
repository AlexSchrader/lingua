// RU Unit 48 — Спряжение глаголов ("Verb conjugation") — A2
// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 2 (u41–u50). Binding: ru/unit1.js §1–§10 and §A–§D, then ru/unit31.js
// §1–§7. The block-wide record is in ru/unit50.js §B1–§B7.
//
// ⚠️ THE SCAFFOLD TITLE WAS "Conjugation drill 1" AND THE SLOT IS REAL, BUT THE
// WORD "drill" CANNOT MEAN WHAT IT MEANS IN JAPANESE HERE. The ja scaffold has
// conjugation slots because Japanese verbs take a small closed set of forms the
// engine can generate. Russian's present tense is SIX forms per verb across TWO
// conjugation classes with consonant mutations in between, and unit1.js §5's last
// rule says an inflected form is NEVER its own card. So a Russian conjugation unit
// cannot card forms. What it CAN do — and what this unit does — is card 24 NEW
// VERBS grouped by the class they belong to, with the paradigm in each canDo and
// each hint, so the learner meets the pattern four times over with fresh material
// rather than re-drilling verbs they already own. Retitled Спряжение глаголов.
//
// THE MEASURED HOLE. u22–u24 are A1's grammar units and they teach the PAST tense
// (u24) and sentence shape (u22, u23). Nothing in 47 units states the present-tense
// endings as a system. `scripts/scope-ru.mjs`'s PARADIGM table is itself the
// evidence of how much of it was being written around: block 1 and A1's block 3
// between them had to hand-list хотеть → хочу, видеть → вижу, писать → пишет,
// жить → живу, спать → сплю, казаться → кажется, идти → иду, ехать → еду, because
// every one of those mutations was unreachable and unexplained.
//
// ⚠️ THE FOUR CLASSES, and this IS the unit's structure:
//   l1  FIRST CONJUGATION, plain -ать/-ять.  -ю -ешь -ет -ем -ете -ют
//   l2  FIRST CONJUGATION with -ыва-/-ава- in the stem, and the two that DROP it
//   l3  SECOND CONJUGATION, -ить/-еть.       -ю -ишь -ит -им -ите -ят
//       plus the consonant mutations that only appear in the я form (тратить →
//       трачу, копить → коплю, ставить → ставлю) and one -ать verb that belongs
//       to this class anyway (звучать → звучу), which is the trap.
//   l4  THE -овать/-ировать CLASS, where -ова- becomes -у- throughout.
//
// FOUR CALLS I MADE, with the reasoning:
//   PREFIXED DERIVATIONS OF CARDED VERBS ARE ALLOWED, and that is block 1's
//        precedent, not my invention: the whole of u31 cards сделать · прочитать ·
//        написать · получить beside делать · читать · писать · получать. So
//        `откладывать` beside u15 `класть`, `записывать` beside u4 `писать`,
//        `сдавать` beside u23 `давать` and `проверять` beside u22 `верить` are all
//        legitimate. What unit1.js §D refuses is a NOUN of a carded verb
//        (разговор/говорить) and a near-synonym noun pair — not this.
//   `сравнивать` WAS REFUSED for exactly that reason: `сравнение` is carded at
//        u47l1, in my own block, and a verb plus its own noun inside one block is
//        the §D case. `добавлять` took its slot.
//   `исправлять` is glossed "to put right", NOT "to correct", because u40
//        `правильный` is "correct" and `normalizeMeaning` would make them one
//        prompt. Measured with the block's probe.
//   `отмечать` "to tick off" and `копировать` "to duplicate" were likewise forced
//        off their obvious glosses: u25 `оценка` is "a mark" and `экземпляр`
//        (u45l4, mine) is "a copy". Three of this unit's 24 needed reglossing for
//        collisions nothing in the command-line gate can see.
//
// ⚠️ ALSO REFUSED HERE:
//   `вводить` · `переносить` · `проводить` — all three are PREFIXED MOTION VERBS
//        (водить, носить), and ru/unit31.js §2 states the B1 line is the prefix.
//        They read as ordinary -ить verbs and they are not.
//   `оценивать` — vs u25 `оценка`. `значить` — READING COLLISION with u19
//        `значит`, both "znachit", which unit1.js §2 makes a hard block.
//   `служить` — vs `служба`, carded at u42l1 in my own block.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT48 = {
  id: "ru-u48",
  lang: "ru",
  title: "Спряжение глаголов",
  order: 48,
  stage: "a2",
  lessons: [
    {
      id: "ru-u48l1",
      unit: 48,
      lesson: 1,
      title: "First conjugation: -ю -ешь -ет -ем -ете -ют",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Conjugate any plain -ать or -ять verb in the present tense: drop the -ть and add -ю, -ешь, -ет, -ем, -ете, -ют.",
      items: [
        { id: "ru-u48l1-izuchat", type: "vocab", front: "изучать", reading: "izuchat", meaning: "to study a subject", accept: ["to study something in depth", "to research", "to learn about"], example: { jp: "Я изучаю русскую литературу в университете.", en: "I study Russian literature at university." }, drill: { jp: "Мы будем изучать эту науку", en: "We will study that science" }, hint: "i-zu-CHAT — stress on the last syllable. FIRST CONJUGATION: изучаю, изучаешь, изучает, изучаем, изучаете, изучают. ⚠️ Not учиться (unit 35): учиться is being a student and takes no object, изучать takes a DIRECT OBJECT — изучать физикУ." },
        { id: "ru-u48l1-proveryat", type: "vocab", front: "проверять", reading: "proveryat", meaning: "to check", accept: ["to verify", "to go over for mistakes", "to test"], example: { jp: "Преподаватель проверяет наши упражнения.", en: "The lecturer checks our exercises." }, drill: { jp: "Нужно проверять каждое упражнение", en: "Every exercise has to be checked" }, hint: "pra-ve-RYAT — stress on the last syllable, and the о reduces to a. FIRST CONJUGATION: проверяю, проверяешь, проверяют. From про + верить (unit 22): to take something on trust all the way through." },
        { id: "ru-u48l1-ispravlyat", type: "vocab", front: "исправлять", reading: "ispravlyat", meaning: "to put right", accept: ["to correct", "to fix a mistake", "to amend"], example: { jp: "Он исправляет ошибки в моём тексте.", en: "He corrects the mistakes in my text." }, drill: { jp: "Нужно исправлять эти ошибки", en: "These mistakes have to be put right" }, hint: "is-prav-LYAT — stress on the last syllable. FIRST CONJUGATION: исправляю, исправляешь, исправляют. ⚠️ Glossed «to put right» because правильный at unit 40 is «correct» — same root, and a shared gloss would be one prompt with two right answers." },
        { id: "ru-u48l1-zapominat", type: "vocab", front: "запоминать", reading: "zapominat", meaning: "to memorise", accept: ["to commit to memory", "to learn by heart", "to fix in mind"], example: { jp: "Трудно запоминать так много новых слов.", en: "It is hard to memorise so many new words." }, drill: { jp: "Трудно запоминать так много слов", en: "It is hard to memorise so many words" }, hint: "za-pa-mi-NAT — four syllables, stress on the last, and both о reduce to a. FIRST CONJUGATION: запоминаю, запоминают. Built on помнить (unit 22): помнить is holding something in mind, запоминать is putting it there." },
        { id: "ru-u48l1-otmechat", type: "vocab", front: "отмечать", reading: "otmechat", meaning: "to tick off", accept: ["to mark", "to note", "to celebrate a date"], example: { jp: "Она отмечает каждый пример в тексте.", en: "She marks every example in the text." }, drill: { jp: "Нужно отмечать каждый пример", en: "Every example has to be ticked off" }, hint: "at-me-CHAT — stress on the last syllable, the о reduces to a. FIRST CONJUGATION: отмечаю, отмечают. ⚠️ Glossed «to tick off» because оценка at unit 25 is «a mark». Its other sense is to celebrate: «отмечать день рождения»." },
        { id: "ru-u48l1-dobavlyat", type: "vocab", front: "добавлять", reading: "dobavlyat", meaning: "to add", accept: ["to put in as well", "to include one more", "to top up"], example: { jp: "Он добавляет новые примеры в каждый доклад.", en: "He adds new examples to every presentation." }, drill: { jp: "Можно добавлять новые примеры", en: "New examples can be added" }, hint: "da-bav-LYAT — stress on the last syllable, the о reduces to a. FIRST CONJUGATION: добавляю, добавляют. In cooking and in speech it also means «to say in addition»: «он добавил, что…»." },
      ],
    },
    {
      id: "ru-u48l2",
      unit: 48,
      lesson: 2,
      title: "Stems that carry -ыва- or -ава-",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Conjugate the verbs whose stem carries -ыва- or -ава-, and know which of the two vanishes in the present tense.",
      items: [
        { id: "ru-u48l2-zapisyvat", type: "vocab", front: "записывать", reading: "zapisyvat", meaning: "to write down", accept: ["to note down", "to make a note of", "to record"], example: { jp: "Я записываю каждое новое правило в тетрадь.", en: "I write every new rule down in my exercise book." }, drill: { jp: "Нужно записывать каждое новое правило", en: "Every new rule has to be written down" }, hint: "za-PI-sy-vat — four syllables, stress on PI. FIRST CONJUGATION and the -ыва- STAYS: записываю, записываешь, записывают. Built on писать (unit 4), whose own present tense mutates to пишу — записывать does not, which is the point of the -ыва- stem." },
        { id: "ru-u48l2-sdavat", type: "vocab", front: "сдавать", reading: "sdavat", meaning: "to hand in", accept: ["to sit an exam", "to submit", "to let out a flat"], example: { jp: "Мы сдаём этот экзамен в июне.", en: "We sit that exam in June." }, drill: { jp: "Нужно сдавать экзамен каждый семестр", en: "The exam has to be sat every term" }, hint: "sda-VAT — stress on the last syllable. ⚠️ THE -ава- DROPS OUT: сдаю, сдаёшь, сдаёт, сдаём, сдаёте, сдают — not «сдаваю». Its most common use is the exam one: «сдавать экзамен» is to sit it, «сдать экзамен» is to pass it." },
        { id: "ru-u48l2-sozdavat", type: "vocab", front: "создавать", reading: "sozdavat", meaning: "to create", accept: ["to set up", "to bring into being", "to build from nothing"], example: { jp: "Они создают новую программу для нашего отдела.", en: "They are creating a new program for our department." }, drill: { jp: "Они будут создавать новую программу", en: "They will create a new program" }, hint: "saz-da-VAT — stress on the last syllable, the о reduces to a. ⚠️ THE -ава- DROPS, exactly as in сдавать: создаю, создаёшь, создают. The same -давать root, a different prefix." },
        { id: "ru-u48l2-otkladyvat", type: "vocab", front: "откладывать", reading: "otkladyvat", meaning: "to postpone", accept: ["to put off", "to set aside", "to shelve"], example: { jp: "Не нужно откладывать этот доклад на завтра.", en: "There is no need to put that presentation off until tomorrow." }, drill: { jp: "Не нужно откладывать эту работу", en: "There is no need to put that work off" }, hint: "at-KLA-dy-vat — four syllables, stress on KLA. The -ыва- STAYS: откладываю, откладывают. Built on класть (unit 15), «to put» — to lay something aside for later. It also means to put money by." },
        { id: "ru-u48l2-obespechivat", type: "vocab", front: "обеспечивать", reading: "obespechivat", meaning: "to provide", accept: ["to supply", "to see to it that something is there", "to guarantee"], example: { jp: "Фирма обеспечивает всех сотрудников техникой.", en: "The firm provides all its staff with equipment." }, drill: { jp: "Фирма будет обеспечивать всех техникой", en: "The firm will provide everyone with equipment" }, hint: "a-be-SPYE-chi-vat — five syllables, stress on SPYE, and the о reduces to a. The -ива- STAYS: обеспечиваю, обеспечивают. ⚠️ Its pattern is обеспечивать КОГО (accusative) ЧЕМ (instrumental, unit 32) — provide someone WITH something." },
        { id: "ru-u48l2-uvelichivat", type: "vocab", front: "увеличивать", reading: "uvelichivat", meaning: "to increase", accept: ["to make larger", "to raise an amount", "to magnify"], example: { jp: "Они увеличивают бюджет каждый год.", en: "They increase the budget every year." }, drill: { jp: "Они будут увеличивать наш бюджет", en: "They will increase our budget" }, hint: "u-ve-LI-chi-vat — five syllables, stress on LI. The -ива- STAYS: увеличиваю, увеличивают. From великий, great. Its opposite уменьшать is built the same way on малый and is not a separate card." },
      ],
    },
    {
      id: "ru-u48l3",
      unit: 48,
      lesson: 3,
      title: "Second conjugation, and the mutation in the я form",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Conjugate a second-conjugation verb — -ю, -ишь, -ит, -им, -ите, -ят — and produce the consonant change that shows up only in the я form.",
      items: [
        { id: "ru-u48l3-khranit", type: "vocab", front: "хранить", reading: "khranit", meaning: "to keep", accept: ["to store", "to keep safe", "to preserve"], example: { jp: "Я храню все документы в этой папке.", en: "I keep all my documents in that folder." }, drill: { jp: "Нужно хранить все документы вместе", en: "All the documents have to be kept together" }, hint: "khra-NIT — stress on the last syllable. SECOND CONJUGATION and completely regular: храню, хранишь, хранит, храним, храните, хранят. This is the clean model for the class — the next three all mutate." },
        { id: "ru-u48l3-tratit", type: "vocab", front: "тратить", reading: "tratit", meaning: "to spend", accept: ["to use up", "to lay out money", "to expend"], example: { jp: "Я трачу слишком много денег на технику.", en: "I spend too much money on equipment." }, drill: { jp: "Не нужно тратить так много денег", en: "There is no need to spend so much money" }, hint: "TRA-tit — stress on the FIRST syllable. SECOND CONJUGATION. ⚠️ т BECOMES ч IN THE я FORM AND ONLY THERE: трачу, but тратишь, тратит, тратят. Russian does this to т, д, с and з throughout this class." },
        { id: "ru-u48l3-kopit", type: "vocab", front: "копить", reading: "kopit", meaning: "to save up", accept: ["to put money by", "to accumulate", "to build up a store"], example: { jp: "Она копит деньги на новую машину.", en: "She is saving up money for a new car." }, drill: { jp: "Трудно копить деньги без работы", en: "It is hard to save money without a job" }, hint: "ka-PIT — stress on the last syllable, the о reduces to a. SECOND CONJUGATION. ⚠️ AN л APPEARS IN THE я FORM: коплю, but копишь, копит, копят. Russian inserts л after б, п, в, ф and м — the same thing happens to любить (люблю) at unit 4." },
        { id: "ru-u48l3-delit", type: "vocab", front: "делить", reading: "delit", meaning: "to divide", accept: ["to split", "to share out", "to do division"], example: { jp: "Мы делим этот расход на всех.", en: "We divide that expense between everybody." }, drill: { jp: "Нужно делить этот расход на всех", en: "That expense has to be divided between everybody" }, hint: "de-LIT — stress on the last syllable. SECOND CONJUGATION, regular: делю, делишь, делят. ⚠️ Not делать (unit 4), «to do» — different verb, different class, and «делю» against «делаю» is the difference. In maths: «делить на два»." },
        { id: "ru-u48l3-stavit", type: "vocab", front: "ставить", reading: "stavit", meaning: "to stand something up", accept: ["to place upright", "to put standing", "to set down"], example: { jp: "Я ставлю принтер около стола.", en: "I stand the printer next to the desk." }, drill: { jp: "Нужно ставить принтер около стола", en: "The printer has to stand next to the desk" }, hint: "STA-vit — stress on the first syllable. SECOND CONJUGATION. ⚠️ THE л AGAIN: ставлю, but ставишь, ставит, ставят. And note the pair with класть (unit 15): класть lays a thing FLAT, ставить stands it UPRIGHT. Russian never mixes them." },
        { id: "ru-u48l3-zvuchat", type: "vocab", front: "звучать", reading: "zvuchat", meaning: "to sound", accept: ["to come across as", "to be heard", "to ring out"], example: { jp: "Этот вопрос звучит очень странно.", en: "That question sounds very strange." }, drill: { jp: "Это будет звучать совсем плохо", en: "That will sound quite bad" }, hint: "zvu-CHAT — stress on the last syllable, and the word opens зв with no vowel. ⚠️ THIS IS THE TRAP OF THE WHOLE UNIT: it ends in -ать and it is SECOND conjugation anyway — звучу, звучишь, звучит, звучат, not «звучаю». слышать (unit 4) and спать (unit 5) do the same thing. The ending does not always tell you the class." },
      ],
    },
    {
      id: "ru-u48l4",
      unit: 48,
      lesson: 4,
      title: "The -овать class: -ова- becomes -у-",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Conjugate any -овать or -ировать verb by swapping -ова- for -у- and adding the first-conjugation endings — the pattern that covers almost every borrowed verb in Russian.",
      items: [
        { id: "ru-u48l4-kopirovat", type: "vocab", front: "копировать", reading: "kopirovat", meaning: "to duplicate", accept: ["to copy", "to make a copy of", "to reproduce"], example: { jp: "Я копирую этот файл каждый день.", en: "I copy that file every day." }, drill: { jp: "Нужно копировать этот файл каждый день", en: "That file has to be copied every day" }, hint: "ka-PI-ra-vat — four syllables, stress on PI. ⚠️ -ова- BECOMES -у-: копирую, копируешь, копирует, копируем, копируете, копируют. Glossed «to duplicate» because экземпляр at unit 45 is «a copy»." },
        { id: "ru-u48l4-redaktirovat", type: "vocab", front: "редактировать", reading: "redaktirovat", meaning: "to edit", accept: ["to revise a text", "to work on a text", "to sub-edit"], example: { jp: "Она редактирует каждую статью в этом издании.", en: "She edits every article in that publication." }, drill: { jp: "Нужно редактировать каждую статью", en: "Every article has to be edited" }, hint: "re-dak-TI-ra-vat — five syllables, stress on TI. -ова- becomes -у-: редактирую, редактируют. Same root as редакция (unit 45), the editorial office." },
        { id: "ru-u48l4-publikovat", type: "vocab", front: "публиковать", reading: "publikovat", meaning: "to publish", accept: ["to put into print", "to bring out", "to issue publicly"], example: { jp: "Эта редакция публикует новый выпуск каждый месяц.", en: "That editorial office publishes a new issue every month." }, drill: { jp: "Они будут публиковать новый выпуск", en: "They will publish a new issue" }, hint: "pu-bli-ka-VAT — stress on the LAST syllable, unlike the two cards before it, and the о reduces to a. -ова- becomes -у-: публикую, публикуют. Same root as публика (unit 45)." },
        { id: "ru-u48l4-organizovat", type: "vocab", front: "организовать", reading: "organizovat", meaning: "to organise", accept: ["to arrange", "to set up an event", "to put together"], example: { jp: "Они организуют конкурс каждый год.", en: "They organise a competition every year." }, drill: { jp: "Трудно организовать такой конкурс", en: "It is hard to organise a competition like that" }, hint: "ar-ga-ni-za-VAT — stress on the LAST syllable, and both о reduce to a. -ова- becomes -у-: организую, организуют. ⚠️ It is one of the rare verbs that is BOTH aspects at once — «он организует» can be present or future, and context decides." },
        { id: "ru-u48l4-uchastvovat", type: "vocab", front: "участвовать", reading: "uchastvovat", meaning: "to take part", accept: ["to participate", "to be involved in", "to join in"], example: { jp: "Мы участвуем в этом проекте уже год.", en: "We have been taking part in that project for a year." }, drill: { jp: "Мы будем участвовать в этом проекте", en: "We will take part in that project" }, hint: "u-CHAS-tva-vat — four syllables, stress on CHAS. -ова- becomes -у-: участвую, участвуют. ⚠️ IT TAKES в + PREPOSITIONAL — участвовать В конкурсЕ — never a direct object. Built on часть (unit 37), a part." },
        { id: "ru-u48l4-kommentirovat", type: "vocab", front: "комментировать", reading: "kommentirovat", meaning: "to comment", accept: ["to remark on", "to give a commentary", "to comment publicly"], example: { jp: "Он не хочет комментировать эту новость.", en: "He does not want to comment on that news item." }, drill: { jp: "Трудно комментировать такую новость", en: "It is hard to comment on news like that" }, hint: "ka-men-TI-ra-vat — five syllables, stress on TI, and BOTH м are written. -ова- becomes -у-: комментирую, комментируют. ⚠️ It takes a DIRECT OBJECT in Russian — комментировать новостЬ — where English needs «comment ON»." },
      ],
    },
  ],
};
