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
// influence, a task, a method or a necessity, and no verb for causing a thing or
// for what it leads to.
//
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ EIGHT OF THIS UNIT'S 24 CARDS WERE RE-AUTHORED AT THE BAND DEDUPE, 2026-09-30.
// ═════════════════════════════════════════════════════════════════════════════
// Blocks 2 (u41–u50) and 3 (u51–u60) authored in parallel and could not see each
// other's fronts. Eight of u52's went to block 2 as well, and the dedupe gave each
// word ONE home:
//     считать   → u44 Деньги и услуги      the money sense, "to count", is older
//     создавать → u48 Спряжение глаголов   not a cause-or-conclusion word
//     зависеть  → u46 Сложное предложение  already settled there
//     наоборот · именно · вообще · ведь · кстати → u46
// THE WHOLE DISCOURSE-MARKER LANE IS u46's — clause connectors AND the steering
// particles. unit51.js §1 originally drew that line between the two and the line
// did not hold; it now records the correction. l3 was re-authored with the verbs of
// CAUSE AND CONSEQUENCE (вызывать · приводить · убеждать) and l4 with the NOUNS OF
// A CASE (теория · практика · вариант · обстоятельство · противоречие). `например`
// stays: it is an example-giver, not a connector, and nothing else carries it.
//
// ⚠️ THE THREE NEW VERBS PASS unit1.js §D BECAUSE THEY ARE PREFIXED DERIVATIONS,
// which unit31.js §3 sanctions (the same ground as `доверие` vs `верить`):
//     вызывать  = вы- on звать (u8), across the -зв-/-зыв- alternation
//     приводить = при- on the -вод- of водитель (u8), a noun of profession
//     убеждать  — no taught root at all; and its -бежд- is NOT бежать (u36)
//
// ⚠️ REFUSED IN THIS UNIT, all on unit1.js §D's derivation test — the full list and
// the reasoning are in unit51.js §3, not repeated here: решение · знание ·
// объяснение · сомнение · интерес · уверенность · значение · выбор · относиться ·
// замечать · доказывать · требовать · мечтать. `истина` stays refused on block 1's
// ground (a gloss collision with u22 `правда`). `пример` was DROPPED IN FAVOUR OF
// `например`, which is far commoner and which на+пример would have made a
// duplicate of; `довод` carries the "a reason offered" sense instead. Four more
// were refused at the dedupe on the same test, and they are the obvious candidates
// a later seat would reach for: `ошибаться` (ошибка u6) · `следовать` and
// `последствие` (следствие, THIS unit's l1) · `влиять` (влияние, l1) · `означать`
// (значит u22). `повод` was refused for near-homography with l1's `довод`.
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
        { id: "ru-u52l1-printsip", type: "vocab", front: "принцип", reading: "printsip", meaning: "a principle", accept: ["a rule you live by", "a matter of principle", "a general rule"], example: { jp: "Это очень важный принцип для нас.", en: "That is a very important principle for us." }, drill: { jp: "У него есть главный принцип", en: "He has one main principle" }, hint: "prin-TSIP — stress on the last syllable. MASCULINE. A принцип is a rule you hold to; a правило from unit 41 is a rule someone else sets. «В принципе» means «in principle, broadly speaking»." },
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
      canDo: "Say what causes what and what it leads to, talk someone round to your view, picture a thing to yourself, and say that something exists or is taking place.",
      items: [
        { id: "ru-u52l3-vyzyvat", type: "vocab", front: "вызывать", reading: "vyzyvat", meaning: "to cause", accept: ["to bring about", "to give rise to", "to call someone out"], example: { jp: "Этот вопрос вызывает большие проблемы.", en: "That question causes big problems." }, drill: { jp: "Такой шум будет вызывать страх", en: "Noise like that will cause fear" }, hint: "vy-zy-VAT — stress on the last syllable. Imperfective infinitive. To bring a thing about: вызывать проблемы, вызывать интерес. ⚠️ Its other everyday sense is to summon — «вызвать врача» is to call the doctor out. It is вы- on the same root as звать from unit 8, with the -зыв- alternation that hides the link." },
        { id: "ru-u52l3-privodit", type: "vocab", front: "приводить", reading: "privodit", meaning: "to lead to", accept: ["to result in", "to end in", "to bring someone along"], example: { jp: "Такая работа приводит к ошибкам.", en: "Work like that leads to mistakes." }, drill: { jp: "Это будет приводить к проблемам", en: "That will lead to problems" }, hint: "pri-va-DIT — stress on the last syllable, and the о reduces to a. Imperfective infinitive. ⚠️ In the «to lead to» sense it takes к plus the dative: приводить К ошибкам. Its plain sense is to bring a person along, which is the same -вод- root as водитель in unit 8." },
        { id: "ru-u52l3-predstavlyat", type: "vocab", front: "представлять", reading: "predstavlyat", meaning: "to picture to yourself", accept: ["to imagine", "to form an idea of", "to present something"], example: { jp: "Мне трудно представлять этот город.", en: "It is hard for me to picture this town." }, drill: { jp: "Я хочу представлять это ясно", en: "I want to picture it clearly" }, hint: "prit-stav-LYAT — four syllables, stress on the last. Imperfective infinitive. To hold a picture in your head, and in a formal sentence to present or represent. «Представь себе!» means «just imagine!»" },
        { id: "ru-u52l3-sushchestvovat", type: "vocab", front: "существовать", reading: "sushchestvovat", meaning: "to exist", accept: ["to be in existence", "to be there at all", "to subsist"], example: { jp: "Эта страна будет существовать всегда.", en: "That country will exist for ever." }, drill: { jp: "Здесь не будет существовать ничего", en: "Nothing will exist here" }, hint: "su-shchist-va-VAT — five syllables, stress on the last. Built on существо, a living being. Stronger and more bookish than быть from unit 22 — use it for whether a thing exists AT ALL." },
        { id: "ru-u52l3-proiskhodit", type: "vocab", front: "происходить", reading: "proiskhodit", meaning: "to take place", accept: ["to happen", "to go on", "to occur"], example: { jp: "Что здесь будет происходить завтра?", en: "What will be taking place here tomorrow?" }, drill: { jp: "Здесь будет происходить очень много", en: "A great deal will be taking place here" }, hint: "pra-is-kha-DIT — five syllables, stress on the last. Imperfective infinitive. «Что происходит?» — what is going on? — is one of the most useful questions in the language. It also means to be descended from." },
        { id: "ru-u52l3-ubezhdat", type: "vocab", front: "убеждать", reading: "ubezhdat", meaning: "to convince", accept: ["to persuade", "to talk someone round", "to win someone over"], example: { jp: "Трудно убеждать таких людей.", en: "It is hard to convince people like that." }, drill: { jp: "Я не хочу тебя убеждать", en: "I do not want to convince you" }, hint: "u-bizh-DAT — stress on the last syllable, and the е reduces to i. Imperfective infinitive. To bring someone round to your довод from lesson 1. ⚠️ Nothing to do with бежать from unit 36 — the -бежд- here is from an old root meaning to win, not to run." },
      ],
    },
    {
      id: "ru-u52l4",
      unit: 52,
      lesson: 4,
      title: "Laying a case out",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Lay a case out — set the theory against the practice, name the option in front of you, the circumstances around it and the contradiction in it, and give an example.",
      items: [
        { id: "ru-u52l4-teoriya", type: "vocab", front: "теория", reading: "teoriya", meaning: "a theory", accept: ["a worked-out explanation", "theory as against practice", "an idea of how it works"], example: { jp: "В теории это очень просто.", en: "In theory that is very simple." }, drill: { jp: "Это очень старая теория", en: "That is a very old theory" }, hint: "ti-O-ri-ya — four syllables, stress on O. FEMININE (-я). ⚠️ «В теории» is nearly always said against «на практике», the next card, and the pair is how a Russian marks the gap between a plan and what happens. Like логика in lesson 2 it is an everyday word, not a philosophy term." },
        { id: "ru-u52l4-praktika", type: "vocab", front: "практика", reading: "praktika", meaning: "practice", accept: ["putting it into practice", "hands-on experience", "practical work"], example: { jp: "На практике это очень трудно.", en: "In practice that is very difficult." }, drill: { jp: "Нам нужна хорошая практика", en: "We need good practical experience" }, hint: "PRAK-ti-ka — stress on the first syllable. FEMININE (-а). ⚠️ «На практике» — in practice, in the real world — is the standing answer to «в теории». It also means a work placement, which is what a студент from unit 8 calls it." },
        { id: "ru-u52l4-variant", type: "vocab", front: "вариант", reading: "variant", meaning: "an option", accept: ["one possible version", "an alternative", "the way it could go"], example: { jp: "У нас есть другой вариант.", en: "We have another option." }, drill: { jp: "Этот вариант очень простой", en: "That option is very simple" }, hint: "va-ri-ANT — stress on the last syllable. MASCULINE. Glossed «an option» and not «a variant»: it is what a Russian says where English says option or version — «первый вариант», «другой вариант». «Есть вариант…» is how a suggestion gets floated." },
        { id: "ru-u52l4-obstoyatelstvo", type: "vocab", front: "обстоятельство", reading: "obstoyatelstvo", meaning: "a circumstance", accept: ["the circumstances", "how things stood", "a factor around it"], example: { jp: "Здесь есть одно важное обстоятельство.", en: "There is one important circumstance here." }, drill: { jp: "Это очень важное обстоятельство", en: "That is a very important circumstance" }, hint: "ab-stay-A-til-stva — five syllables, stress on A, and the о at the front reduces to a. NEUTER (-о). ⚠️ In real speech it is nearly always PLURAL: «по семейным обстоятельствам», for family reasons. условие from unit 34 is a condition someone SETS; an обстоятельство is one that simply obtains." },
        { id: "ru-u52l4-protivorechie", type: "vocab", front: "противоречие", reading: "protivorechie", meaning: "a contradiction", accept: ["a clash between two things", "an inconsistency", "saying the opposite"], example: { jp: "В его словах есть противоречие.", en: "There is a contradiction in what he says." }, drill: { jp: "Здесь есть большое противоречие", en: "There is a big contradiction here" }, hint: "pra-ti-va-RE-chi-ye — six syllables, stress on RE, and both о reduce to a. NEUTER (-е). Literally «against-speech»: против, «against», on the -реч- of речь from unit 39. ⚠️ Only the noun is carded; the verb противоречить takes the dative." },
        { id: "ru-u52l4-naprimer", type: "vocab", front: "например", reading: "naprimer", meaning: "for example", accept: ["for instance", "say", "take the case of"], example: { jp: "Например, этот дом очень старый.", en: "For example, this house is very old." }, drill: { jp: "Например здесь очень тихо", en: "For example, it is very quiet here" }, hint: "na-pri-MER — stress on the last syllable. Literally «for an example» — на + пример. ⚠️ Because it already contains пример, this course teaches the phrase and NOT the bare noun; unit 52's header records that decision." },
      ],
    },
  ],
};
