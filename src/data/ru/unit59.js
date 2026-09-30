// RU Unit 59 — Слова и поступки ("Words and deeds") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u51–u60). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5. Coverage tail (u57–u60), block 3's alone.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 10 (A2)` — no subject named. See unit51.js.
//
// THE MEASURED HOLE, in two halves.
//   THE VERBS OF DEALING WITH PEOPLE. A1 and block 1 taught говорить · сказать ·
//   рассказывать · объяснять · спрашивать · отвечать's field · кричать ·
//   приглашать · поздравлять · желать · обещать · извиняться · соглашаться ·
//   отказываться · предлагать · разрешать · запрещать. Against that there was no
//   verb for to LISTEN (`слушать` — taught nowhere at all; u4l4 has слышать, to
//   hear, which is a different thing), and none for to keep silent, to thank, to
//   forgive, to praise, to tell off, to teach, to look after, to keep safe, to
//   check, to admit or to defend. Eleven of the twelve most ordinary things one
//   person does to another.
//   THE PEOPLE AND THE LIFE. A1's u10 is the family and u3 has мужчина/женщина. No
//   word existed for a relative, young people, a generation, a crowd, a meeting, an
//   inhabitant, an event, a birth, death or a funeral, nor for doing a thing by
//   accident or on purpose.
//
// ★ THREE PAIRS THIS UNIT TEACHES AS PAIRS, because Russian splits what English
//   runs together and the hint on each card names its partner:
//        слышать (u4l4) to hear      /  слушать to listen
//        учиться (u35l4) to study    /  учить to teach
//        случайно by accident        /  нарочно on purpose
//   The учить/учиться pair is explicitly sanctioned by unit31.js's -ся rule: a
//   reflexive is not automatically a §D duplicate when the government and the gloss
//   both differ.
//
// ⚠️ REFUSED IN THIS UNIT:
//   `помощь` "help" — §D against `помогать` (u20l4) and `помочь` (u31l3). Two verbs
//        of that root are already carded and a third track is not defensible.
//   `просить` (vs `просьба` u34l4) · `называть` (vs `называться` u35l2) · `встреча`
//        (vs `встречать` u23l1 and `встретить` u31l3) · `мечтать` (vs `мечта`
//        u24l4) · `вспоминать` (vs `помнить` u22l3, marginal but refused) — §D.
//   `ученик` "a pupil" — the уч- root now carries учитель (u8l3), учиться (u35l4)
//        and учить (l2 here). Three is the limit; a fourth was refused.
//   `забыть` stays refused on block 1's own ground (unit31.js §1c): `забывать` is
//        already "to forget" and no second natural English verb exists for it.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT59 = {
  id: "ru-u59",
  lang: "ru",
  title: "Слова и поступки",
  order: 59,
  stage: "a2",
  lessons: [
    {
      id: "ru-u59l1",
      unit: 59,
      lesson: 1,
      title: "What you say to someone",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Deal with a person in words — listen, keep quiet, thank, forgive, praise, and tell someone off.",
      items: [
        { id: "ru-u59l1-slushat", type: "vocab", front: "слушать", reading: "slushat", meaning: "to listen", accept: ["to listen to", "to pay attention to", "to be listening"], example: { jp: "Я люблю слушать музыку вечером.", en: "I like listening to music in the evening." }, drill: { jp: "Я хочу слушать эту музыку", en: "I want to listen to this music" }, hint: "SLU-shat — stress on the first syllable. Imperfective infinitive. ⚠️ TAUGHT NOWHERE BEFORE NOW. слышать from unit 4 is to HEAR, which happens to you; слушать is to listen, which you do on purpose. Russian never blurs the two." },
        { id: "ru-u59l1-molchat", type: "vocab", front: "молчать", reading: "molchat", meaning: "to keep silent", accept: ["to say nothing", "to be quiet", "to hold your tongue"], example: { jp: "Здесь нужно молчать и слушать.", en: "Here you have to keep quiet and listen." }, drill: { jp: "Здесь лучше молчать всегда", en: "It is better to keep silent here" }, hint: "mal-CHAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive. тихий from unit 29 is quiet as a quality; молчать is the act of not speaking. «Молчи!» is a sharp order." },
        { id: "ru-u59l1-blagodarit", type: "vocab", front: "благодарить", reading: "blagodarit", meaning: "to thank", accept: ["to give thanks", "to express thanks", "to be grateful to"], example: { jp: "Здесь нужно благодарить людей за всё.", en: "People here should be thanked for everything." }, drill: { jp: "Нужно благодарить этих людей", en: "These people should be thanked" }, hint: "bla-ga-da-RIT — four syllables, stress on the last, and every unstressed о reduces to a. Imperfective infinitive. Literally «to give a good gift» — благо + дарить. It takes за plus the accusative: благодарить ЗА помощь." },
        { id: "ru-u59l1-proshchat", type: "vocab", front: "прощать", reading: "proshchat", meaning: "to forgive", accept: ["to pardon", "to let something go", "to excuse someone"], example: { jp: "Трудно прощать такие слова.", en: "It is hard to forgive words like that." }, drill: { jp: "Нужно прощать и забывать", en: "One should forgive and forget" }, hint: "pra-SHCHAT — stress on the last syllable, and щ is the long soft sh. Imperfective infinitive. Same root as простите from unit 7, which is literally «forgive me», and as до свидания's companion прощай, a final goodbye." },
        { id: "ru-u59l1-khvalit", type: "vocab", front: "хвалить", reading: "khvalit", meaning: "to praise", accept: ["to speak well of", "to commend", "to compliment"], example: { jp: "Учитель любит хвалить хороших детей.", en: "The teacher likes praising good children." }, drill: { jp: "Нужно хвалить этих детей", en: "These children should be praised" }, hint: "khva-LIT — stress on the last syllable, opening with the scraping х from unit 1. Imperfective infinitive. Its opposite is ругать, the next card, and Russian parenting talk uses the two as a pair." },
        { id: "ru-u59l1-rugat", type: "vocab", front: "ругать", reading: "rugat", meaning: "to tell off", accept: ["to scold", "to give someone a telling-off", "to criticise sharply"], example: { jp: "Не нужно ругать этого ребёнка.", en: "There is no need to tell this child off." }, drill: { jp: "Он любит ругать всех", en: "He likes telling everyone off" }, hint: "ru-GAT — stress on the last syllable. Imperfective infinitive. The reflexive ругаться means to swear or to have a row, which is how you will hear it most often." },
      ],
    },
    {
      id: "ru-u59l2",
      unit: 59,
      lesson: 2,
      title: "Looking after and keeping",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Teach someone, look after and keep things safe, check your work, admit a mistake and defend what matters.",
      items: [
        { id: "ru-u59l2-uchit", type: "vocab", front: "учить", reading: "uchit", meaning: "to teach", accept: ["to teach someone", "to learn by heart", "to instruct"], example: { jp: "Она любит учить детей русскому языку.", en: "She likes teaching children the Russian language." }, drill: { jp: "Я хочу учить этих детей", en: "I want to teach these children" }, hint: "u-CHIT — stress on the last syllable. Imperfective infinitive. ⚠️ учиться from unit 35 is to STUDY, which you do to yourself; учить is to teach someone else. Its second sense is to learn a thing BY HEART: «учить стихи»." },
        { id: "ru-u59l2-berech", type: "vocab", front: "беречь", reading: "berech", meaning: "to look after", accept: ["to take care of", "to spare", "to not waste"], example: { jp: "Здесь нужно беречь воду и электричество.", en: "Water and electricity have to be conserved here." }, drill: { jp: "Нужно беречь эту книгу", en: "This book must be looked after" }, hint: "bi-RECH — stress on the last syllable, and the е reduces to i. Imperfective infinitive. ⚠️ Its stem mutates: берегу, берёжешь. «Береги себя» is what a Russian says instead of «take care»." },
        { id: "ru-u59l2-khranit", type: "vocab", front: "хранить", reading: "khranit", meaning: "to keep safe", accept: ["to store", "to keep somewhere", "to preserve"], example: { jp: "Здесь можно хранить продукты и воду.", en: "Groceries and water can be stored here." }, drill: { jp: "Я хочу хранить это письмо", en: "I want to keep this letter" }, hint: "khra-NIT — stress on the last syllable. Imperfective infinitive. беречь is about not wasting a thing; хранить is about where you put it. It also keeps a secret: «хранить тайну»." },
        { id: "ru-u59l2-proveryat", type: "vocab", front: "проверять", reading: "proveryat", meaning: "to check", accept: ["to verify", "to go over something", "to test"], example: { jp: "Нужно проверять каждый ответ.", en: "Every answer has to be checked." }, drill: { jp: "Я буду проверять эти документы", en: "I will be checking these documents" }, hint: "pra-vi-RYAT — stress on the last syllable, and both unstressed vowels reduce. Imperfective infinitive. Built on верить from unit 22 with про- — to believe a thing all the way through, which is what checking is." },
        { id: "ru-u59l2-priznavat", type: "vocab", front: "признавать", reading: "priznavat", meaning: "to admit", accept: ["to own up to", "to acknowledge", "to recognise as true"], example: { jp: "Трудно признавать такую ошибку.", en: "It is hard to admit a mistake like that." }, drill: { jp: "Нужно признавать эту ошибку", en: "This mistake has to be admitted" }, hint: "pri-zna-VAT — stress on the last syllable. Imperfective infinitive. Built on знать from unit 4 with при- and з- — to come to know something out loud. Its reflexive признаваться is to confess." },
        { id: "ru-u59l2-zashchishchat", type: "vocab", front: "защищать", reading: "zashchishchat", meaning: "to defend", accept: ["to protect", "to stand up for", "to shield"], example: { jp: "Армия будет защищать эту страну.", en: "The army will defend this country." }, drill: { jp: "Он будет защищать этот город", en: "He will defend this town" }, hint: "za-shchi-SHCHAT — stress on the last syllable, and ⚠️ BOTH щ are the long soft sh, one after another — the hardest cluster in the unit to say. Imperfective infinitive. It defends a country, an opinion and a thesis alike." },
      ],
    },
    {
      id: "ru-u59l3",
      unit: 59,
      lesson: 3,
      title: "People around you",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the people around you beyond your family — a relative, the young, a generation, a crowd, a meeting, and who lives in a town.",
      items: [
        { id: "ru-u59l3-rodstvennik", type: "vocab", front: "родственник", reading: "rodstvennik", meaning: "a relative", accept: ["a family member", "kin", "a cousin or the like"], example: { jp: "Он наш родственник из деревни.", en: "He is a relative of ours from the village." }, drill: { jp: "Это наш близкий родственник", en: "That is a close relative of ours" }, hint: "ROD-stvin-nik — stress on the first syllable. MASCULINE; the woman is родственница. The same род- root as родители and родной — family in the widest sense, past брат and сестра from unit 10." },
        { id: "ru-u59l3-molodyozh", type: "vocab", front: "молодёжь", reading: "molodyozh", meaning: "young people", accept: ["the young", "youth as a group", "young folk"], example: { jp: "Молодёжь здесь очень активная.", en: "Young people here are very active." }, drill: { jp: "Наша молодёжь очень активная", en: "Our young people are very active" }, hint: "ma-la-DYOZH — stress on the last syllable, the ё always written, and both о before it reduce to a. ⚠️ FEMININE despite the -ь, and a COLLECTIVE SINGULAR: «молодёжь активная», never «активные». Built on молодой from unit 19." },
        { id: "ru-u59l3-pokolenie", type: "vocab", front: "поколение", reading: "pokolenie", meaning: "a generation", accept: ["an age group", "one generation", "people of the same age"], example: { jp: "Это уже другое поколение.", en: "That is a different generation already." }, drill: { jp: "Наше поколение очень разное", en: "Our generation is very mixed" }, hint: "pa-ka-LE-ni-ye — five syllables, stress on LE, and both о reduce to a. NEUTER (-е). «Новое поколение» is the phrase every Russian advertisement uses." },
        { id: "ru-u59l3-tolpa", type: "vocab", front: "толпа", reading: "tolpa", meaning: "a crowd", accept: ["the crowd", "a throng", "a lot of people together"], example: { jp: "Толпа на площади очень большая.", en: "The crowd in the square is very large." }, drill: { jp: "Здесь была большая толпа", en: "There was a big crowd here" }, hint: "tal-PA — stress on the last syllable, and the о reduces to a. FEMININE (-а). ⚠️ Its plural pulls the stress right back: TOL-py, толпы. публика from unit 45 is an audience, which is a crowd that came on purpose." },
        { id: "ru-u59l3-sobranie", type: "vocab", front: "собрание", reading: "sobranie", meaning: "a meeting", accept: ["a gathering", "an assembly", "a collection of things"], example: { jp: "Наше собрание будет завтра утром.", en: "Our meeting is tomorrow morning." }, drill: { jp: "Собрание будет здесь вечером", en: "The meeting will be here in the evening" }, hint: "sab-RA-ni-ye — stress on RA, and the о reduces to a. NEUTER (-е). Built on собираться from unit 35, to get ready and gather. Its second sense is a collection: «собрание книг»." },
        { id: "ru-u59l3-zhitel", type: "vocab", front: "житель", reading: "zhitel", meaning: "an inhabitant", accept: ["a resident", "someone who lives there", "a local"], example: { jp: "Каждый житель этого города знает эту историю.", en: "Every inhabitant of this town knows that story." }, drill: { jp: "Он старый житель этого города", en: "He is a long-standing inhabitant of this town" }, hint: "ZHI-til — stress on the first syllable, and жи is said zhy. ⚠️ MASCULINE despite the -ь — the -тель ending always is, like учитель from unit 8 and зритель from unit 45. Built straight on жить from unit 4." },
      ],
    },
    {
      id: "ru-u59l4",
      unit: 59,
      lesson: 4,
      title: "Events in a life",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the big events — an event, a birth, a death, a funeral — and say whether something was done by accident or on purpose.",
      items: [
        { id: "ru-u59l4-sobytie", type: "vocab", front: "событие", reading: "sobytie", meaning: "an event", accept: ["an occasion", "something that happened", "a big moment"], example: { jp: "Это было очень важное событие.", en: "That was a very important event." }, drill: { jp: "Какое важное событие", en: "What an important event" }, hint: "sa-BY-ti-ye — four syllables, stress on BY, with the tight ы. NEUTER (-е). Built on быть from unit 22 with со- — a co-being, something that came to pass. случай from unit 24 is a single occasion; a событие matters." },
        { id: "ru-u59l4-rozhdenie", type: "vocab", front: "рождение", reading: "rozhdenie", meaning: "a birth", accept: ["being born", "the birth of someone", "a birth in a family"], example: { jp: "Рождение ребёнка очень большое событие.", en: "The birth of a child is a very big event." }, drill: { jp: "Рождение сына было вчера", en: "The birth of a son was yesterday" }, hint: "razh-DE-ni-ye — four syllables, stress on DE, and the о reduces to a. NEUTER (-е). ⚠️ «День рождения» — a birthday, literally «the day of a birth» — is the phrase this word exists for, and there the noun sits in the GENITIVE from unit 33." },
        { id: "ru-u59l4-smert", type: "vocab", front: "смерть", reading: "smert", meaning: "death", accept: ["a death", "dying", "the end of a life"], example: { jp: "Смерть отца была очень трудная.", en: "His father's death was very hard." }, drill: { jp: "Его смерть была очень трудная", en: "His death was very hard" }, hint: "SMERT — one syllable, with the ь keeping the т soft. ⚠️ FEMININE despite the -ь, like кровь and кость from unit 53. жизнь from unit 5 is its opposite, and it is feminine too." },
        { id: "ru-u59l4-pokhorony", type: "vocab", front: "похороны", reading: "pokhorony", meaning: "a funeral", accept: ["the funeral", "a burial", "the funeral service"], example: { jp: "Похороны будут завтра утром.", en: "The funeral is tomorrow morning." }, drill: { jp: "Похороны были уже вчера", en: "The funeral was yesterday already" }, hint: "pa-KHO-ra-ny — four syllables, stress on KHO. ⚠️ A PLURAL-ONLY NOUN — there is no singular at all, so the verb is always plural: «похороны были». Russian has a handful of these, like деньги from unit 5 and будни from unit 38." },
        { id: "ru-u59l4-sluchayno", type: "vocab", front: "случайно", reading: "sluchayno", meaning: "by accident", accept: ["accidentally", "by chance", "without meaning to"], example: { jp: "Я случайно взял твою книгу.", en: "I took your book by accident." }, drill: { jp: "Он сделал это случайно", en: "He did that by accident" }, hint: "slu-CHAY-na — stress on CHAY. Built on случай from unit 24, an occasion. «Случайно» at the start of a question softens it: «вы случайно не знаете…?» is «you don't happen to know…?»" },
        { id: "ru-u59l4-narochno", type: "vocab", front: "нарочно", reading: "narochno", meaning: "on purpose", accept: ["deliberately", "intentionally", "meaning to"], example: { jp: "Он сделал это нарочно, а не случайно.", en: "He did that on purpose, not by accident." }, drill: { jp: "Она сказала это нарочно", en: "She said that on purpose" }, hint: "na-ROCH-na — stress on ROCH, and ⚠️ the чн is said SHN here: na-ROSH-na. The exact opposite of случайно, and Russian children's arguments are made entirely of these two words." },
      ],
    },
  ],
};
