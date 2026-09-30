// RU Unit 52 — Причина и вывод ("Cause and conclusion") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u51–u60). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, and ru/unit51.js §1–§5 for what block 3 itself settled.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 3 (A2)` — it names no subject, so there
// was no theme to keep or reject. unit51.js's header explains why all ten of
// block 3's titles were like that and why retheming was compulsory.
//
// THE MEASURED HOLE, and it is narrower than it looks. Block 1's u39 Мнение и речь
// already took the OPINION nouns (мнение · мысль · вывод · смысл · суть · взгляд ·
// факт · доказательство · ложь · спор), and u34 took причина and условие. So the
// naming of a thought is done. What a learner still could not do is FOLLOW one
// through: there was no word for a consequence, a basis, a principle, a source, an
// influence, a task, a method or a necessity, and no verb for to depend, to exist,
// to take place or to create. Those are this unit's 24, plus the six particles in
// l4 that a Russian actually steers an argument with.
//
// ⚠️ CLAUSE CONNECTORS ARE NOT IN THIS UNIT AND THAT IS DELIBERATE. `однако` ·
// `зато` · `впрочем` · `тем не менее` are block 2's u46 (compound and linked
// clauses), and `хотя` · `чтобы` are on block 1's reserved list. l4 takes only
// ADVERBS AND PARTICLES, which govern nothing and link no clause. The line is
// stated in unit51.js §1 so the merge seat can check it.
//
// ⚠️ REFUSED IN THIS UNIT, all on unit1.js §D's derivation test — the full list and
// the reasoning are in unit51.js §3, not repeated here: решение · знание ·
// объяснение · сомнение · интерес · уверенность · значение · выбор · относиться ·
// замечать · доказывать · требовать · мечтать. `истина` stays refused on block 1's
// ground (a gloss collision with u22 `правда`). `пример` was DROPPED IN FAVOUR OF
// `например`, which is far commoner and which на+пример would have made a
// duplicate of; `довод` carries the "a reason offered" sense instead.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT52 = {
  id: "ru-u52",
  lang: "ru",
  title: "Причина и вывод",
  order: 52,
  stage: "a2",
  lessons: [
    {
      id: "ru-u52l1",
      unit: 52,
      lesson: 1,
      title: "The parts of an argument",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put a point forward, name the consequence it leads to, and say what an argument is based on and where it came from.",
      items: [
        { id: "ru-u52l1-dovod", type: "vocab", front: "довод", reading: "dovod", meaning: "a point in favour", accept: ["an argument for something", "a reason offered", "a case you make"], example: { jp: "Это очень сильный довод в нашем споре.", en: "That is a very strong point in favour in our argument." }, drill: { jp: "Мне нужен другой довод", en: "I need a different point in favour" }, hint: "DO-vat — stress on the first syllable, and the д at the end goes quiet. MASCULINE. A довод is a reason you OFFER in a спор from unit 39; причина from unit 34 is a reason that simply exists." },
        { id: "ru-u52l1-sledstvie", type: "vocab", front: "следствие", reading: "sledstvie", meaning: "a consequence", accept: ["a result that follows", "an effect", "what comes of it"], example: { jp: "У этой причины есть очень важное следствие.", en: "That cause has a very important consequence." }, drill: { jp: "Это очень важное следствие", en: "That is a very important consequence" }, hint: "SLED-stvi-ye — stress on the first syllable. NEUTER (-е). What follows FROM a причина. ⚠️ In a newspaper it also means a criminal investigation, which is the same idea of following a trail." },
        { id: "ru-u52l1-osnova", type: "vocab", front: "основа", reading: "osnova", meaning: "a basis", accept: ["a foundation", "the base of an idea", "what it rests on"], example: { jp: "Это основа всей нашей работы.", en: "That is the basis of all our work." }, drill: { jp: "Здесь нужна хорошая основа", en: "A good basis is needed here" }, hint: "as-NO-va — stress on NO, and the о at the front reduces to a. FEMININE (-а). The base an argument or a building stands on. «На основе» means «on the basis of»." },
        { id: "ru-u52l1-printsip", type: "vocab", front: "принцип", reading: "printsip", meaning: "a principle", accept: ["a rule you live by", "a matter of principle", "a general rule"], example: { jp: "Это очень важный принцип для нас.", en: "That is a very important principle for us." }, drill: { jp: "У него есть главный принцип", en: "He has one main principle" }, hint: "prin-TSIP — stress on the last syllable. MASCULINE. A принцип is a rule you hold to; a правило from unit 51 is a rule someone else sets. «В принципе» means «in principle, broadly speaking»." },
        { id: "ru-u52l1-istochnik", type: "vocab", front: "источник", reading: "istochnik", meaning: "a source", accept: ["a spring of water", "where it comes from", "an origin"], example: { jp: "Это очень старый источник этой истории.", en: "That is a very old source for this story." }, drill: { jp: "Где источник этой воды", en: "Where is the source of this water" }, hint: "is-TOCH-nik — stress on TOCH. MASCULINE. Both senses are live and they are the same idea: a spring where water comes out of the ground, and the source a fact comes from." },
        { id: "ru-u52l1-vliyanie", type: "vocab", front: "влияние", reading: "vliyanie", meaning: "an influence", accept: ["a sway over something", "the effect one thing has", "clout"], example: { jp: "Его влияние в этом городе очень большое.", en: "His influence in this town is very large." }, drill: { jp: "Это влияние очень сильное", en: "That influence is very strong" }, hint: "vli-YA-ni-ye — four syllables, stress on YA. NEUTER (-е). The sway one thing or person has over another. It takes на: влияние НА людей." },
      ],
    },
    {
      id: "ru-u52l2",
      unit: 52,
      lesson: 2,
      title: "Working a problem through",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Set out a task, name the method and the system you will use, and say that something is a necessity rather than a wish.",
      items: [
        { id: "ru-u52l2-zadacha", type: "vocab", front: "задача", reading: "zadacha", meaning: "a task", accept: ["a problem to solve", "an exercise", "a job to be done"], example: { jp: "Это очень трудная задача для меня.", en: "That is a very difficult task for me." }, drill: { jp: "У нас есть новая задача", en: "We have a new task" }, hint: "za-DA-cha — stress on DA. FEMININE (-а). A задача is a problem SET to be solved — a maths задача, a задача at work. проблема from unit 9 is a problem nobody asked for." },
        { id: "ru-u52l2-metod", type: "vocab", front: "метод", reading: "metod", meaning: "a method", accept: ["a way of working", "an approach", "a technique"], example: { jp: "Это очень старый метод работы.", en: "That is a very old method of working." }, drill: { jp: "У неё есть хороший метод", en: "She has a good method" }, hint: "ME-tat — stress on the FIRST syllable, unlike English, and the final д goes quiet. MASCULINE. способ from unit 32 is the everyday «way of doing something»; метод is the worked-out one." },
        { id: "ru-u52l2-sistema", type: "vocab", front: "система", reading: "sistema", meaning: "a system", accept: ["an arrangement", "a scheme", "a set-up"], example: { jp: "Вся наша система работает хорошо.", en: "Our whole system works well." }, drill: { jp: "Эта система работает хорошо", en: "This system works well" }, hint: "sis-TE-ma — stress on TE. FEMININE (-а). Anything organised as a whole. «Системно» in speech means methodically, not chaotically." },
        { id: "ru-u52l2-neobkhodimost", type: "vocab", front: "необходимость", reading: "neobkhodimost", meaning: "a necessity", accept: ["something you cannot do without", "an absolute need", "a must"], example: { jp: "Это необходимость, а не мечта.", en: "That is a necessity, not a dream." }, drill: { jp: "Здесь есть большая необходимость", en: "There is a great necessity here" }, hint: "ni-ab-kha-DI-mast — six syllables, stress on DI. ⚠️ FEMININE, like every noun in -ость. Stronger than нужно from unit 5: нужно is «it is needed», необходимость is «there is no way round it»." },
        { id: "ru-u52l2-logika", type: "vocab", front: "логика", reading: "logika", meaning: "logic", accept: ["reasoning", "the logic of it", "how it hangs together"], example: { jp: "В этом вопросе есть простая логика.", en: "There is a simple logic in this question." }, drill: { jp: "Твоя логика очень простая", en: "Your logic is very plain" }, hint: "LO-gi-ka — stress on the first syllable. FEMININE (-а). «Где логика?» — where is the logic in that? — is an everyday complaint, not a philosophy term." },
        { id: "ru-u52l2-pamyat", type: "vocab", front: "память", reading: "pamyat", meaning: "memory", accept: ["the memory", "recall", "what you keep in mind"], example: { jp: "У неё очень хорошая память.", en: "She has a very good memory." }, drill: { jp: "Моя память уже плохая", en: "My memory is bad already" }, hint: "PA-myat — stress on the first syllable. ⚠️ FEMININE, and the -ь does not tell you so. Its root vowel alternates with помнить from unit 22: пом- becomes пам-, which is why the link is hard to see. «На память» means «as a keepsake»." },
      ],
    },
    {
      id: "ru-u52l3",
      unit: 52,
      lesson: 3,
      title: "Verbs for thinking it out",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you reckon about something, what it depends on, that something exists or is taking place, and that someone creates things.",
      items: [
        { id: "ru-u52l3-schitat", type: "vocab", front: "считать", reading: "schitat", meaning: "to reckon", accept: ["to be of the opinion", "to hold a view", "to count up"], example: { jp: "Я считаю этот вопрос очень важным.", en: "I reckon this question is very important." }, drill: { jp: "Я не хочу так считать", en: "I do not want to reckon that way" }, hint: "shchi-TAT — stress on the last syllable, and ⚠️ сч at the front is said as one long shch. Imperfective infinitive. Two senses: to count money, and to hold an opinion — «я считаю, что…» is how a Russian states a view." },
        { id: "ru-u52l3-zaviset", type: "vocab", front: "зависеть", reading: "zaviset", meaning: "to depend", accept: ["to hang on something", "to be down to", "to rely on"], example: { jp: "Всё здесь будет зависеть от погоды.", en: "Everything here will depend on the weather." }, drill: { jp: "Всё будет зависеть от тебя", en: "Everything will depend on you" }, hint: "za-VI-sit — stress on VI. It takes от plus the genitive, from unit 33: зависеть ОТ погоды. ⚠️ Its root is вис-, «to hang» — nothing to do with зависть, «envy», which looks almost identical and is a different word." },
        { id: "ru-u52l3-predstavlyat", type: "vocab", front: "представлять", reading: "predstavlyat", meaning: "to picture to yourself", accept: ["to imagine", "to form an idea of", "to present something"], example: { jp: "Мне трудно представлять этот город.", en: "It is hard for me to picture this town." }, drill: { jp: "Я хочу представлять это ясно", en: "I want to picture it clearly" }, hint: "prit-stav-LYAT — four syllables, stress on the last. Imperfective infinitive. To hold a picture in your head, and in a formal sentence to present or represent. «Представь себе!» means «just imagine!»" },
        { id: "ru-u52l3-sushchestvovat", type: "vocab", front: "существовать", reading: "sushchestvovat", meaning: "to exist", accept: ["to be in existence", "to be there at all", "to subsist"], example: { jp: "Эта страна будет существовать всегда.", en: "That country will exist for ever." }, drill: { jp: "Здесь не будет существовать ничего", en: "Nothing will exist here" }, hint: "su-shchist-va-VAT — five syllables, stress on the last. Built on существо, a living being. Stronger and more bookish than быть from unit 22 — use it for whether a thing exists AT ALL." },
        { id: "ru-u52l3-proiskhodit", type: "vocab", front: "происходить", reading: "proiskhodit", meaning: "to take place", accept: ["to happen", "to go on", "to occur"], example: { jp: "Что здесь будет происходить завтра?", en: "What will be taking place here tomorrow?" }, drill: { jp: "Здесь будет происходить очень много", en: "A great deal will be taking place here" }, hint: "pra-is-kha-DIT — five syllables, stress on the last. Imperfective infinitive. «Что происходит?» — what is going on? — is one of the most useful questions in the language. It also means to be descended from." },
        { id: "ru-u52l3-sozdavat", type: "vocab", front: "создавать", reading: "sozdavat", meaning: "to create", accept: ["to set up", "to bring into being", "to make something new"], example: { jp: "Он любит создавать новые слова.", en: "He likes creating new words." }, drill: { jp: "Мы хотим создавать новое общество", en: "We want to create a new society" }, hint: "saz-da-VAT — stress on the last syllable, and the о reduces to a. Imperfective infinitive. To make something that did not exist before — a firm, a system, a word. Stronger than делать from unit 4." },
      ],
    },
    {
      id: "ru-u52l4",
      unit: 52,
      lesson: 4,
      title: "The little words that steer a thought",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Steer what you are saying — say it is the other way round, speak in general, pin down exactly which thing, add a side remark, and give an example.",
      items: [
        { id: "ru-u52l4-naoborot", type: "vocab", front: "наоборот", reading: "naoborot", meaning: "the other way round", accept: ["on the contrary", "quite the opposite", "vice versa"], example: { jp: "Я не устал, а наоборот.", en: "I am not tired — quite the opposite." }, drill: { jp: "Всё было совсем наоборот", en: "It was all completely the other way round" }, hint: "na-a-ba-ROT — four syllables, stress on the last, and both о before it reduce to a. It answers a whole statement rather than a word, so it usually stands alone after а or но." },
        { id: "ru-u52l4-voobshche", type: "vocab", front: "вообще", reading: "voobshche", meaning: "in general", accept: ["generally speaking", "on the whole", "at all"], example: { jp: "Вообще я думаю, что это правильно.", en: "In general I think that is right." }, drill: { jp: "Вообще это очень трудный вопрос", en: "In general that is a very difficult question" }, hint: "va-ab-SHCHE — three syllables, stress on the last, and the two о both reduce. ⚠️ With a negative it flips to «at all»: «я вообще не понимаю» means I do not understand AT ALL." },
        { id: "ru-u52l4-imenno", type: "vocab", front: "именно", reading: "imenno", meaning: "precisely", accept: ["exactly that one", "just so", "that very thing"], example: { jp: "Именно это я хотел сказать.", en: "That is precisely what I wanted to say." }, drill: { jp: "Это именно наш главный вопрос", en: "That is precisely our main question" }, hint: "I-min-na — stress on the FIRST syllable. It points at one thing and excludes the rest, so it sits directly before the word it pins down. точно from unit 22 says an amount is exact; именно says THIS one and no other." },
        { id: "ru-u52l4-kstati", type: "vocab", front: "кстати", reading: "kstati", meaning: "by the way", accept: ["incidentally", "come to think of it", "while we are on it"], example: { jp: "Кстати, сегодня я видел твою сестру.", en: "By the way, I saw your sister today." }, drill: { jp: "Кстати это очень важно", en: "By the way, that is very important" }, hint: "KSTA-ti — stress on the first syllable, and the кст cluster is said with no vowel in it. Opens a side remark, exactly like English «by the way». It also means «opportunely»: «это очень кстати»." },
        { id: "ru-u52l4-ved", type: "vocab", front: "ведь", reading: "ved", meaning: "after all", accept: ["you know", "surely", "as you are aware"], example: { jp: "Ты ведь знаешь этот город.", en: "You know this town, after all." }, drill: { jp: "Он ведь уже здесь", en: "He is here already, after all" }, hint: "VED — one syllable, with the ь keeping the д soft. It appeals to something you both already know, and English often leaves it out entirely or says «you know». It never starts a sentence on its own." },
        { id: "ru-u52l4-naprimer", type: "vocab", front: "например", reading: "naprimer", meaning: "for example", accept: ["for instance", "say", "take the case of"], example: { jp: "Например, этот дом очень старый.", en: "For example, this house is very old." }, drill: { jp: "Например здесь очень тихо", en: "For example, it is very quiet here" }, hint: "na-pri-MER — stress on the last syllable. Literally «for an example» — на + пример. ⚠️ Because it already contains пример, this course teaches the phrase and NOT the bare noun; unit 52's header records that decision." },
      ],
    },
  ],
};
