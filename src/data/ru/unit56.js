// RU Unit 56 — Личность и поведение ("Personality and behaviour") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Block 3 (u51–u60). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 7 (A2)` — no subject named. See unit51.js.
//
// ⚠️ A DEDUPE HOTSPOT. Block 2's u41 is titled "Personality and character" and ran
// concurrently, unseen — the fourth and last of the collisions unit51.js §1 lists,
// and the one where a duplicate is likeliest, because the field is small and the
// obvious words are few. Block 3's half is the TWELVE ADJECTIVES A1 did not card
// (щедрый · нежный · внимательный · скромный · смелый · настойчивый · надёжный ·
// активный · грубый · жадный · упрямый · наглый) plus the ABSTRACT NOUNS OF
// CONDUCT (забота · уважение · воля · терпение · зависть · обман · поведение ·
// поступок · доверие · совесть · одиночество). If u41 holds any of the 24, the
// lower slot number owns it and this unit is the one to cut.
//
// THE MEASURED HOLE. A1's u28 Чувства и характер is the feelings unit and it took
// six adjectives (грустный · злой · спокойный · довольный · гордый · странный),
// six verbs (смеяться · плакать · бояться · улыбаться · надеяться · кричать), four
// more adjectives of character (честный · умный · глупый · вежливый · ленивый) and
// five nouns (характер · чувство · настроение · страх · мечта · душа · слеза). Add
// добрый and рад (u7), серьёзный (u25), уверен (u24), приятный and строгий (u40).
// So a learner could say that a person was kind, calm, clever, honest or lazy —
// and could NOT say generous, tender, attentive, modest, brave, persistent,
// reliable, rude, greedy, stubborn or cheeky, and had no noun at all for care,
// respect, patience, envy, trust, a conscience or a single deed.
//
// ★ ON `знакомый`. Like `насекомое` at u54l3 it is a NOUN that declines as an
//   ADJECTIVE, and its hint says so. It is not the fault unit51.js §2(b) refuses:
//   that rule bites when the ADJECTIVE is itself a taught front (`лёгкое` against
//   `лёгкий` u19l2), and `знакомый` the adjective is taught nowhere.
//
// ⚠️ REFUSED IN THIS UNIT — eight, and every one on unit1.js §D:
//   `доброта` (добрый u7l1) · `вежливость` (вежливый u28l3) · `гордость` (гордый
//   u28l1 AND гордиться u32l2) · `дружба` (друг u6l1) · `лень` (ленивый u28l3) ·
//   `обида` (обидно u34l2) · `терпеливый` — refused not against a taught word but
//   against `терпение` IN THIS UNIT, which would have been a same-block duplicate
//   of the kind the crew brief warns produces 106 of them · `спокойствие`
//   (спокойный u28l1).
//   `мужество` "courage" was refused on a weaker argument and it is worth saying
//   which: муж (u10l3) and мужчина (u3l3) are both taught, and while English shows
//   no link, Russian's is transparent. `воля` and `смелый` cover the ground.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT56 = {
  id: "ru-u56",
  lang: "ru",
  title: "Личность и поведение",
  order: 56,
  stage: "a2",
  lessons: [
    {
      id: "ru-u56l1",
      unit: 56,
      lesson: 1,
      title: "The warm qualities",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Praise someone properly — call them generous, tender, attentive or modest, and talk about care and respect.",
      items: [
        { id: "ru-u56l1-shchedryy", type: "vocab", front: "щедрый", reading: "shchedryy", meaning: "generous", accept: ["open-handed", "free with what they have", "giving"], example: { jp: "Наш сосед очень щедрый человек.", en: "Our neighbour is a very generous person." }, drill: { jp: "Он очень щедрый человек", en: "He is a very generous person" }, hint: "SHCHED-ryy — stress on the first syllable, and щ is the one long soft sh from unit 2. Its exact opposite, жадный, is three lessons on." },
        { id: "ru-u56l1-nezhnyy", type: "vocab", front: "нежный", reading: "nezhnyy", meaning: "tender", accept: ["gentle", "soft in manner", "affectionate"], example: { jp: "У неё очень нежный голос.", en: "She has a very tender voice." }, drill: { jp: "Это очень нежный голос", en: "That is a very tender voice" }, hint: "NEZH-nyy — stress on the first syllable. Tender of a person, a voice or a touch. ⚠️ мягкий from unit 40 is soft to the TOUCH of a thing; нежный is soft in manner." },
        { id: "ru-u56l1-vnimatelnyy", type: "vocab", front: "внимательный", reading: "vnimatelnyy", meaning: "attentive", accept: ["considerate", "thoughtful towards others", "paying attention"], example: { jp: "Наш новый учитель очень внимательный.", en: "Our new teacher is very attentive." }, drill: { jp: "Этот врач очень внимательный", en: "This doctor is very attentive" }, hint: "vni-MA-til-nyy — four syllables, stress on MA. Built on внимание from unit 12, «attention». Two senses: careful over detail, and kind in noticing what someone needs." },
        { id: "ru-u56l1-skromnyy", type: "vocab", front: "скромный", reading: "skromnyy", meaning: "modest", accept: ["unassuming", "not showing off", "humble"], example: { jp: "Он очень скромный и тихий человек.", en: "He is a very modest and quiet person." }, drill: { jp: "Это очень скромный человек", en: "That is a very modest person" }, hint: "SKROM-nyy — stress on the first syllable. Modest about oneself, and of a sum or a meal it means plain and small. The opposite of гордый from unit 28 in the bad sense of that word." },
        { id: "ru-u56l1-zabota", type: "vocab", front: "забота", reading: "zabota", meaning: "care for someone", accept: ["looking after someone", "concern", "a worry you carry"], example: { jp: "Забота о детях очень важная.", en: "Care for children is very important." }, drill: { jp: "Это её главная забота", en: "That is her main care" }, hint: "za-BO-ta — stress on BO. FEMININE (-а). It takes о plus the prepositional from unit 39: забота О детях. In the plural, заботы, it means the everyday worries." },
        { id: "ru-u56l1-uvazhenie", type: "vocab", front: "уважение", reading: "uvazhenie", meaning: "respect", accept: ["esteem", "regard for someone", "looking up to someone"], example: { jp: "Уважение к людям очень важное.", en: "Respect for people is very important." }, drill: { jp: "Здесь есть большое уважение", en: "There is great respect here" }, hint: "u-va-ZHE-ni-ye — five syllables, stress on ZHE. NEUTER (-е). ⚠️ It takes к plus the DATIVE from unit 34: уважение К людям, not «для»." },
      ],
    },
    {
      id: "ru-u56l2",
      unit: 56,
      lesson: 2,
      title: "Strength of will",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that someone is brave, persistent, reliable or active, and talk about will power and patience.",
      items: [
        { id: "ru-u56l2-smelyy", type: "vocab", front: "смелый", reading: "smelyy", meaning: "brave", accept: ["bold", "courageous", "daring"], example: { jp: "Этот солдат очень смелый и сильный.", en: "That soldier is very brave and very strong." }, drill: { jp: "Он очень смелый человек", en: "He is a very brave person" }, hint: "SME-lyy — stress on the first syllable. Brave in doing something, not merely unafraid — which is why it is not simply the opposite of бояться from unit 28." },
        { id: "ru-u56l2-volya", type: "vocab", front: "воля", reading: "volya", meaning: "will power", accept: ["a will of one's own", "resolve", "freedom to act"], example: { jp: "У него очень сильная воля.", en: "He has a very strong will." }, drill: { jp: "Это его сильная воля", en: "That is his strong will" }, hint: "VO-lya — stress on the first syllable. FEMININE (-я). Two senses: will power, and old-fashioned freedom — «на воле» means out of prison. свобода in unit 51's field is the modern word for freedom." },
        { id: "ru-u56l2-nastoychivyy", type: "vocab", front: "настойчивый", reading: "nastoychivyy", meaning: "persistent", accept: ["insistent", "not giving up", "dogged"], example: { jp: "Наш новый коллега очень настойчивый.", en: "Our new colleague is very persistent." }, drill: { jp: "Наш начальник очень настойчивый", en: "Our boss is very persistent" }, hint: "nas-TOY-chi-vyy — four syllables, stress on TOY. It can be praise or a complaint, exactly as in English: a настойчивый student is admirable, a настойчивый salesman is not." },
        { id: "ru-u56l2-nadyozhnyy", type: "vocab", front: "надёжный", reading: "nadyozhnyy", meaning: "reliable", accept: ["dependable", "someone you can count on", "trustworthy"], example: { jp: "Это очень надёжный человек и друг.", en: "That is a very reliable person and friend." }, drill: { jp: "Наш друг очень надёжный", en: "Our friend is very reliable" }, hint: "na-DYOZH-nyy — stress on DYOZH, and the ё is always written (unit 1 §7). It shares a root with надеяться from unit 28, «to hope» — but «reliable» is not guessable from «to hope», which is why both are carded." },
        { id: "ru-u56l2-terpenie", type: "vocab", front: "терпение", reading: "terpenie", meaning: "patience", accept: ["forbearance", "putting up with things", "staying power"], example: { jp: "Здесь нужно очень большое терпение.", en: "Very great patience is needed here." }, drill: { jp: "Мне нужно большое терпение", en: "I need great patience" }, hint: "tir-PE-ni-ye — four syllables, stress on PE, and the first е reduces to i. NEUTER (-е). «Терпение и труд» opens the best-known Russian proverb about getting anything done." },
        { id: "ru-u56l2-aktivnyy", type: "vocab", front: "активный", reading: "aktivnyy", meaning: "active", accept: ["energetic", "lively", "taking part in things"], example: { jp: "Наш сын очень активный ребёнок.", en: "Our son is a very active child." }, drill: { jp: "Он очень активный студент", en: "He is a very active student" }, hint: "ak-TIV-nyy — stress on TIV. Of a person it means energetic and involved; «активно» as an adverb means in earnest, not half-heartedly." },
      ],
    },
    {
      id: "ru-u56l3",
      unit: 56,
      lesson: 3,
      title: "Faults and failings",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say plainly that someone is rude, greedy, stubborn or cheeky, and name envy and a deception for what they are.",
      items: [
        { id: "ru-u56l3-grubyy", type: "vocab", front: "грубый", reading: "grubyy", meaning: "rude", accept: ["coarse", "brusque", "rough in manner"], example: { jp: "Этот человек очень грубый и злой.", en: "That person is very rude and very angry." }, drill: { jp: "Это очень грубый ответ", en: "That is a very rude answer" }, hint: "GRU-byy — stress on the first syllable. Rude of a person, and coarse of a material or an estimate: «грубая ошибка» is a bad blunder. вежливый from unit 28 is its opposite." },
        { id: "ru-u56l3-zhadnyy", type: "vocab", front: "жадный", reading: "zhadnyy", meaning: "greedy", accept: ["mean with money", "grasping", "won't share"], example: { jp: "Этот хозяин очень жадный.", en: "That host is very greedy." }, drill: { jp: "Такой человек очень жадный", en: "Such a person is very greedy" }, hint: "ZHAD-nyy — stress on the first syllable. Greedy for money or for anything else, and unwilling to give. The exact opposite of щедрый in lesson 1." },
        { id: "ru-u56l3-upryamyy", type: "vocab", front: "упрямый", reading: "upryamyy", meaning: "stubborn", accept: ["obstinate", "won't be moved", "headstrong"], example: { jp: "Наш сын очень упрямый ребёнок.", en: "Our son is a very stubborn child." }, drill: { jp: "Он очень упрямый и злой", en: "He is very stubborn and very angry" }, hint: "u-PRYA-myy — stress on PRYA. ⚠️ Nothing to do with прямой from unit 23, «straight», though the two look close — упрямый has the -прям- root in an old figurative sense." },
        { id: "ru-u56l3-naglyy", type: "vocab", front: "наглый", reading: "naglyy", meaning: "cheeky", accept: ["impudent", "brazen", "with a nerve"], example: { jp: "Это был очень наглый вопрос.", en: "That was a very cheeky question." }, drill: { jp: "Какой наглый молодой человек", en: "What a cheeky young man" }, hint: "NAG-lyy — stress on the first syllable. Stronger than грубый: a грубый person is rough, a наглый one knows exactly what they are doing. «Какая наглость!» is the noun you will hear shouted." },
        { id: "ru-u56l3-zavist", type: "vocab", front: "зависть", reading: "zavist", meaning: "envy", accept: ["jealousy", "begrudging someone", "resentment at another's luck"], example: { jp: "Зависть очень плохое чувство.", en: "Envy is a very bad feeling." }, drill: { jp: "Это просто зависть и страх", en: "That is simply envy and fear" }, hint: "ZA-vist — stress on the first syllable. ⚠️ FEMININE despite the -ь. ⚠️ And it is NOT зависеть, «to depend», from unit 46, which it very nearly spells: зависть is from завидовать, зависеть is from висеть, to hang." },
        { id: "ru-u56l3-obman", type: "vocab", front: "обман", reading: "obman", meaning: "a deception", accept: ["a lie told deliberately", "a trick", "a con"], example: { jp: "Это был очень большой обман.", en: "That was a very big deception." }, drill: { jp: "Здесь был большой обман", en: "There was a big deception here" }, hint: "ab-MAN — stress on the last syllable, and the о reduces to a. MASCULINE. ложь from unit 39 is the untrue statement; обман is the whole act of deceiving somebody with it." },
      ],
    },
    {
      id: "ru-u56l4",
      unit: 56,
      lesson: 4,
      title: "Behaviour and trust",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Judge how someone acted — name their behaviour and the deed itself — and talk about trust, conscience, loneliness and an acquaintance.",
      items: [
        { id: "ru-u56l4-povedenie", type: "vocab", front: "поведение", reading: "povedenie", meaning: "behaviour", accept: ["conduct", "how someone acts", "the way they carry on"], example: { jp: "Его поведение сегодня очень странное.", en: "His behaviour today is very strange." }, drill: { jp: "Это очень странное поведение", en: "That is very strange behaviour" }, hint: "pa-vi-DE-ni-ye — five syllables, stress on DE. NEUTER (-е). It is the school-report word as well as the everyday one: «плохое поведение» is what a teacher writes." },
        { id: "ru-u56l4-postupok", type: "vocab", front: "поступок", reading: "postupok", meaning: "a deed", accept: ["an action someone took", "a thing they did", "an act"], example: { jp: "Это был очень честный поступок.", en: "That was a very honest deed." }, drill: { jp: "Какой хороший поступок", en: "What a good deed" }, hint: "pas-TU-pak — stress on TU. MASCULINE, and ⚠️ its last о DROPS in every other case: поступка, поступку. One single act with a moral weight to it — поведение is the pattern, a поступок is one thing done." },
        { id: "ru-u56l4-doverie", type: "vocab", front: "доверие", reading: "doverie", meaning: "trust", accept: ["confidence in someone", "faith in a person", "being trusted"], example: { jp: "Доверие в семье очень важное.", en: "Trust in a family is very important." }, drill: { jp: "Здесь нужно большое доверие", en: "Great trust is needed here" }, hint: "da-VE-ri-ye — four syllables, stress on VE. NEUTER (-е). Built on верить from unit 22 with до- in front: to believe someone all the way. ⚠️ It takes к plus the dative — доверие К человеку." },
        { id: "ru-u56l4-sovest", type: "vocab", front: "совесть", reading: "sovest", meaning: "a conscience", accept: ["the conscience", "a sense of right and wrong", "scruples"], example: { jp: "У него очень чистая совесть.", en: "He has a very clean conscience." }, drill: { jp: "Его совесть совсем чистая", en: "His conscience is completely clean" }, hint: "SO-vist — stress on the first syllable. ⚠️ FEMININE despite the -ь. «Чистая совесть» is a clean conscience, exactly as in English, and «на совесть» means done properly, not skimped." },
        { id: "ru-u56l4-odinochestvo", type: "vocab", front: "одиночество", reading: "odinochestvo", meaning: "loneliness", accept: ["solitude", "being on your own", "aloneness"], example: { jp: "Одиночество очень трудное чувство.", en: "Loneliness is a very difficult feeling." }, drill: { jp: "Это его большое одиночество", en: "That is his great loneliness" }, hint: "a-di-NO-chist-va — five syllables, stress on NO, and the о at the front reduces to a. NEUTER (-о). Built on один from unit 11 — and the distance from «one» to «loneliness» is the whole reason it needs its own card." },
        { id: "ru-u56l4-znakomyy", type: "vocab", front: "знакомый", reading: "znakomyy", meaning: "an acquaintance", accept: ["someone you know slightly", "a familiar face", "a contact"], example: { jp: "Это мой старый знакомый из школы.", en: "That is an old acquaintance of mine from school." }, drill: { jp: "Он мой старый знакомый", en: "He is an old acquaintance of mine" }, hint: "zna-KO-myy — stress on KO. ⚠️ It is a NOUN that declines like an ADJECTIVE — знакомый, знакомого, знакомые — and it is also the ADJECTIVE «familiar»: «знакомое лицо», a familiar face. Not друг from unit 6, which is much warmer." },
      ],
    },
  ],
};
