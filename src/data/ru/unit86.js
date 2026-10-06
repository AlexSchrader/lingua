// RU Unit 86 — Ощущения и восприятие ("Sensation and perception") — B1
// ─────────────────────────────────────────────────────────────────────────────
// LAST UNIT OF BLOCK 2 (u74–u86). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit74.js §1–§5 — and unit74.js §3
// in particular, which records the one claim in the crew brief that did not
// hold and which this unit is named after.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 3 (B1)` — no subject named.
//
// THE MEASURED HOLE. The corpus teaches the ORGANS (глаз · ухо · нос · язык at
// u20, мозг · нерв at u53) and two verbs of perception (видеть · слышать at u4,
// слушать at u59) and not one word for a SENSE or for what a sense picks up:
// ощущение · восприятие · зрение · слух · запах · звук were all free, and so
// were тень «a shadow», эхо, вонь and жажда. A learner could name the parts of
// an ear and not say what hearing was.
// ⚠️ `внимание` IS TAKEN (u12l3, on a public sign), which is why nothing here
// reaches for it.
//
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ `вкус` IS NOT CARDED, AND THAT IS A DELIBERATE REVERSAL OF THE CREW BRIEF.
// ═════════════════════════════════════════════════════════════════════════════
// The brief names `вкус` «taste» as this unit's headline hole, «despite u58
// being titled Еда и вкус». The FRONT is free — and `src/data/ru/unit58.js`'s
// own header already records it as REFUSED, on unit1.js §D, against `вкусно`
// (u13l2): "⚠️ REFUSED IN THIS UNIT: … `вкус` (vs `вкусно` u13l2) … all §D."
// A front probe cannot see a reasoned refusal written in a comment, which is
// why the brief reads as though the word were available. Block 2 kept A2's
// decision rather than reversing it silently: a learner who knows вкусно
// «tasty» WOULD guess that вкус is «taste», which is exactly the test. So l4
// teaches the sense of taste through `пробовать` · `запах` · `аромат` · `вонь`
// instead, and the hole the brief pointed at is closed in substance.
// ⚠️ IF A LATER BAND WANTS вкус, the argument it has to beat is unit58's.
//
// ⚠️ ALSO REFUSED here on §D: `пахнуть` (против `запах`, carded — one lexeme) ·
//   `звон` (против `звучать` u48) · `шёпот` (против `шептать` u80) · `дрожь`
//   (против `дрожать` u80) · `сияние` (против `сиять` u80) · `тишина` (против
//   `тихо` u5) · `громкость` (против `громкий` u47) · `холод` (против
//   `холодно` u16) · `голод` (против `голодный` u24) · `заметный` (против
//   `замечание` u39) · `смутный` (против `смущать` u79) · `прикосновение`
//   (против `касаться` u46) · `равнодушие` (ровно u37 + душа u28 at once) ·
//   `зрелище` (против `зритель` u45).
// ⚠️ THREE зр- WORDS NOW EXIST IN THE COURSE — `зритель` (u45l2), `подозревать`
//   (cut from u80 when its slot went elsewhere, so it is still FREE for a later
//   band) and `зрение` here. The brief mandates зрение and it is the right call:
//   it is the name of a sense, and «eyesight» is not reachable from «a viewer».
// lang/unit/lesson are stamped in src/data/index.js.
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ CROSS-BLOCK DEDUPE, 2026-10-06 — 2 of 24 replaced.
// ═════════════════════════════════════════════════════════════════════════════
//     звук · эхо -> u96 Музыка и звучание
// u96's music-and-sound theme was allocated to block 3 centrally and includes
// the sounds themselves (звук · эхо · свист · стук · шёпот · скрип), so block 2
// yields inside it. Replaced by: треск · хруст, which u96 does not card and
// which keep l2's shape — five sound nouns and глухой.
// ⚠️ `звон` stays refused (против `звучать` u48) and was not reconsidered.
// ⚠️ ONE SURVIVOR SENTENCE rewritten: слух's example leaned on мелодия, now
// taught at u96 — i.e. LATER than this unit.
// ⚠️ AND ONE GLOSS DISCRIMINATOR, filed by the dedupe seat because the merged
// corpus made it reproducible: `грохот` was glossed "a crash" and so is u94's
// `авария`, so the produce card showed one prompt and accepted one of two
// words. грохот is now "a crashing din" — it is the SOUND, авария the EVENT.
export const RU_UNIT86 = {
  id: "ru-u86",
  lang: "ru",
  title: "Ощущения и восприятие",
  order: 86,
  stage: "b1",
  lessons: [
    {
      id: "ru-u86l1",
      unit: 86,
      lesson: 1,
      title: "The senses themselves",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a sensation, perception, eyesight, hearing and consciousness, and say that someone is blind.",
      items: [
        { id: "ru-u86l1-oshchushchenie", type: "vocab", front: "ощущение", reading: "oshchushchenie", meaning: "a sensation", accept: ["a feeling in the body", "the sensation", "a physical feeling"], example: { jp: "Ощущение было странное: тихо, тепло и совсем никого вокруг.", en: "The sensation was a strange one: quiet, warm and nobody around at all." }, drill: { jp: "Ощущение было очень странное", en: "The sensation was very strange" }, hint: "a-shchu-SHCHE-ni-ye — stress on SHCHE, with щ twice (unit 3's long soft sh) and the о reducing to a. NEUTER (-ие). ⚠️ чувство from unit 28 is an EMOTION; an ощущение is what the body registers — cold, pain, a draught. Russian keeps them apart and so must you." },
        { id: "ru-u86l1-vospriyatie", type: "vocab", front: "восприятие", reading: "vospriyatie", meaning: "perception", accept: ["how something is taken in", "the way you perceive", "reception of information"], example: { jp: "Восприятие музыки у каждого человека другое, и спорить об этом зря.", en: "Everyone's perception of music is different, and arguing about it is pointless." }, drill: { jp: "Восприятие музыки у каждого другое", en: "Everyone's perception of music is different" }, hint: "vas-pri-YA-ti-ye — stress on YA, and the о reduces to a. NEUTER (-ие). The faculty, not the organ: ощущение is the raw signal, восприятие is what the mind makes of it. From принять, to take in." },
        { id: "ru-u86l1-zrenie", type: "vocab", front: "зрение", reading: "zrenie", meaning: "eyesight", accept: ["sight", "vision", "the sense of sight"], example: { jp: "Зрение у него плохое, поэтому очки он носит уже давно.", en: "His eyesight is poor, so he has worn glasses for a long time." }, drill: { jp: "Зрение у него очень плохое", en: "His eyesight is very poor" }, hint: "ZRE-ni-ye — stress on the first syllable, and ⚠️ it opens with зр, two consonants and no vowel. NEUTER (-ие). From зреть, an old verb for seeing, which is not taught — `зритель` from unit 45 is the only other зр- word, and «a viewer» does not give «eyesight» away. «Точка зрения» is a point of view." },
        { id: "ru-u86l1-slukh", type: "vocab", front: "слух", reading: "slukh", meaning: "hearing", accept: ["the sense of hearing", "an ear for music", "a rumour"], example: { jp: "Слух у неё такой, что она слышит разговор через стену.", en: "Her hearing is such that she can catch a conversation through a wall." }, drill: { jp: "Слух у неё очень хороший", en: "Her hearing is very good" }, hint: "SLUKH — one syllable, ending in the scraping х from unit 1. MASCULINE. ⚠️ THREE SENSES AND ALL THREE ARE COMMON: the sense of hearing, an ear for music («у неё есть слух»), and A RUMOUR — «ходят слухи», rumours are going round. Which is why `сплетня` in unit 81 is glossed by the gossip and not by the rumour." },
        { id: "ru-u86l1-soznanie", type: "vocab", front: "сознание", reading: "soznanie", meaning: "consciousness", accept: ["awareness", "being conscious", "the conscious mind"], example: { jp: "Сознание вернулось к нему только через час, и он ничего не помнил.", en: "Consciousness came back to him only after an hour, and he remembered nothing." }, drill: { jp: "Сознание вернулось к нему через час", en: "Consciousness came back to him after an hour" }, hint: "sa-zna-NI-ye — stress on NI, and the о reduces to a. NEUTER (-ие). ⚠️ The medical frame is the one you meet first: «потерять сознание», to lose consciousness. Built on знать (unit 4) with со-, and «consciousness» is not reachable from «to know»." },
        { id: "ru-u86l1-slepoy", type: "vocab", front: "слепой", reading: "slepoy", meaning: "blind", accept: ["sightless", "unable to see", "blind of a person"], example: { jp: "Слепой человек часто слышит лучше других, и это не случайно.", en: "A blind person often hears better than others, and that is not by chance." }, drill: { jp: "Слепой человек слышит лучше", en: "A blind person hears better" }, hint: "sle-POY — stress on the last syllable. ⚠️ Also used as a NOUN — «слепой», a blind man — which is the substantivised adjective unit51.js §2(b) warns about; it is allowed here because the ADJECTIVE is the card and the noun is the same word doing another job, not a second lexeme. Of trust and obedience too: «слепая вера»." },
      ],
    },
    {
      id: "ru-u86l2",
      unit: 86,
      lesson: 2,
      title: "What hearing picks up",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a rustle, a crash, a drone, a crackle and a crunch, and say that someone is deaf or that a sound is muffled.",
      items: [
        { id: "ru-u86l2-tresk", type: "vocab", front: "треск", reading: "tresk", meaning: "a crackle", accept: ["a crackling", "a crack of breaking wood", "a sharp dry noise"], example: { jp: "Треск старого дерева в лесу слышно очень далеко.", en: "The crack of an old tree in the forest can be heard a very long way off." }, drill: { jp: "Треск дерева слышно далеко", en: "The crack of a tree can be heard far off" }, hint: "TRESK — one syllable. MASCULINE. The sharp dry sound of something breaking or burning: a branch, a fire, ice. ⚠️ «С треском» means with a bang, and «провалиться с треском» is to fail spectacularly. грохот in this lesson is far louder and much lower." },
        { id: "ru-u86l2-khrust", type: "vocab", front: "хруст", reading: "khrust", meaning: "a crunch", accept: ["a crunching", "the sound of something crunching", "a crisp grinding noise"], example: { jp: "Хруст снега под ногами был слышен на всю улицу.", en: "The crunch of snow underfoot could be heard all down the street." }, drill: { jp: "Хруст снега слышен далеко", en: "The crunch of snow is heard far off" }, hint: "KHRUST — one syllable. MASCULINE. Snow under a boot, an apple bitten, a bone. ⚠️ The verb хрустеть is not carded. треск in this lesson is wood or fire breaking apart; хруст is something being crushed." },
        { id: "ru-u86l2-shorokh", type: "vocab", front: "шорох", reading: "shorokh", meaning: "a rustle", accept: ["a rustling sound", "the rustle", "a faint noise"], example: { jp: "Шорох за шкафом он слышал каждую ночь, но мышь так и не видел.", en: "He heard a rustle behind the cupboard every night but never saw the mouse." }, drill: { jp: "Шорох за шкафом он слышал ночью", en: "He heard a rustle behind the cupboard at night" }, hint: "SHO-rakh — stress on the first syllable, and the final о reduces to a. MASCULINE. ⚠️ Spelled with о after ш, which breaks the rule a learner expects — one of a short list of words that do, and it is worth memorising by sight. Of leaves, paper and small animals." },
        { id: "ru-u86l2-grokhot", type: "vocab", front: "грохот", reading: "grokhot", meaning: "a crashing din", accept: ["a roar", "a din", "a thunderous noise"], example: { jp: "Грохот на улице был такой, что спать уже никто не мог.", en: "The crash in the street was such that nobody could sleep any more." }, drill: { jp: "Грохот на улице был очень сильный", en: "The crash in the street was very loud" }, hint: "GRO-khat — stress on the first syllable, and the final о reduces to a. MASCULINE. ⚠️ The loudest word in this lesson: a грохот is thunder, a lorry, a building falling down. Its verb грохотать is not carded." },
        { id: "ru-u86l2-gul", type: "vocab", front: "гул", reading: "gul", meaning: "a drone", accept: ["a hum", "a low rumble", "a background roar"], example: { jp: "Гул машин здесь продолжается весь день, и это уже никого не удивляет.", en: "The drone of cars here goes on all day, and it no longer surprises anyone." }, drill: { jp: "Гул машин здесь продолжается весь день", en: "The drone of cars here goes on all day" }, hint: "GUL — one syllable. MASCULINE. ⚠️ The sound a learner in a Russian city hears constantly and could not name: a low, continuous, far-away roar — traffic, a crowd, an aeroplane. Between звук (neutral) and грохот (violent)." },
        { id: "ru-u86l2-glukhoy", type: "vocab", front: "глухой", reading: "glukhoy", meaning: "deaf", accept: ["hard of hearing", "unable to hear", "muffled of a sound"], example: { jp: "Глухой дедушка смотрит телевизор очень громко, и соседи уже привыкли.", en: "The deaf grandfather watches television very loudly, and the neighbours have got used to it." }, drill: { jp: "Глухой дедушка смотрит телевизор громко", en: "The deaf grandfather watches television loudly" }, hint: "glu-KHOY — stress on the last syllable. ⚠️ THREE SENSES AND YOU HAVE ALREADY MET THE THIRD: deaf of a person, muffled of a sound («глухой звук»), and — in unit 6's reading rules — a глухой consonant is a VOICELESS one. Also «глухая деревня», a village in the middle of nowhere." },
      ],
    },
    {
      id: "ru-u86l3",
      unit: 86,
      lesson: 3,
      title: "Light, shadow and what you can just make out",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a shadow, a shine, dusk, gloom and a silhouette, and call a light dim.",
      items: [
        { id: "ru-u86l3-ten", type: "vocab", front: "тень", reading: "ten", meaning: "a shadow", accept: ["shade", "the shadow", "a shady spot"], example: { jp: "Тень от дерева лежит прямо на окне, и в комнате совсем темно.", en: "The shadow of the tree lies right across the window, and the room is quite dark." }, drill: { jp: "Тень от дерева лежит на окне", en: "The shadow of the tree lies across the window" }, hint: "TEN — one syllable, with the ь keeping the н soft. ⚠️ FEMININE despite the -ь (unit1.js §3). ⚠️ ONE WORD FOR SHADOW AND SHADE, which English splits: «тень от дерева» is the shadow it casts, «сидеть в тени» is sitting in the shade. ⚠️ A GENUINE A1-LEVEL GAP, closed here. `оттенок` from unit 81 is its derivative." },
        { id: "ru-u86l3-blesk", type: "vocab", front: "блеск", reading: "blesk", meaning: "brilliance", accept: ["a shine", "a gleam", "a glint"], example: { jp: "Блеск воды на солнце был такой, что смотреть было больно.", en: "The shine of the water in the sun was such that looking at it hurt." }, drill: { jp: "Блеск воды на солнце был сильный", en: "The shine of the water in the sun was strong" }, hint: "BLESK — one syllable. MASCULINE. ⚠️ Glossed «brilliance» because `сиять` (u80l1) is prompted as «to shine». From блестеть, to glitter, which is not taught. ⚠️ Also brilliance in the figurative sense — «блеск ума» — and on its own «блеск!» is an exclamation meaning «magnificent!». `сияние` is not carded: it sits on сиять from unit 80." },
        { id: "ru-u86l3-sumerki", type: "vocab", front: "сумерки", reading: "sumerki", meaning: "dusk", accept: ["twilight", "half-light", "the time between day and night"], example: { jp: "Сумерки здесь зимой начинаются уже в три часа.", en: "In winter dusk here begins as early as three o'clock." }, drill: { jp: "Сумерки здесь начинаются в три", en: "Dusk here begins at three" }, hint: "SU-mer-ki — stress on the first syllable. FEMININE, and ⚠️ PLURAL ONLY: there is no сумерка. ⚠️ A word a learner in Russia needs by October — in the north it is dusk by mid-afternoon, which is what the example says. вечер from unit 11 is the evening as a part of the day." },
        { id: "ru-u86l3-mrak", type: "vocab", front: "мрак", reading: "mrak", meaning: "gloom", accept: ["darkness", "murk", "deep dark"], example: { jp: "Мрак в комнате был полный, и он искал ключи руками.", en: "The gloom in the room was total, and he looked for the keys with his hands." }, drill: { jp: "Мрак в комнате был полный", en: "The gloom in the room was total" }, hint: "MRAK — one syllable, and ⚠️ it opens with мр. MASCULINE. ⚠️ Heavier than тёмный from unit 16: тёмный is simply dark, мрак is dark you cannot see through, and of a mood it is despair. In speech «мрак!» means «how awful»." },
        { id: "ru-u86l3-siluet", type: "vocab", front: "силуэт", reading: "siluet", meaning: "a silhouette", accept: ["an outline", "the shape against the light", "a figure in outline"], example: { jp: "Силуэт в окне он видел только минуту, и больше никогда.", en: "He saw the silhouette in the window for only a minute, and never again." }, drill: { jp: "Силуэт в окне он видел минуту", en: "He saw the silhouette in the window for a minute" }, hint: "si-lu-ET — stress on the last syllable, with э the hard e from unit 2. MASCULINE. Of a person against the light and of a dress's cut — «силуэт платья», which is how fashion uses it (мода, unit 55). форма from unit 32 is shape in general." },
        { id: "ru-u86l3-tusklyy", type: "vocab", front: "тусклый", reading: "tusklyy", meaning: "dim", accept: ["faint of a light", "dull", "lacklustre"], example: { jp: "Тусклый свет на кухне он менять не хочет, хотя читать при нём трудно.", en: "He does not want to change the dim light in the kitchen, although reading by it is hard." }, drill: { jp: "Тусклый свет на кухне ему нравится", en: "He likes the dim light in the kitchen" }, hint: "TUS-klyy — stress on the first syllable. Of a light, a colour, a mirror or an eye. ⚠️ The exact opposite of яркий from unit 16, and the pair is worth learning together: яркий свет / тусклый свет. The example uses при + the prepositional from unit 39: «читать при нём», to read by it." },
      ],
    },
    {
      id: "ru-u86l4",
      unit: 86,
      lesson: 4,
      title: "Smell, taste and thirst",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a smell, an aroma and a stench, say that someone is sniffing something or tasting a dish, and talk about thirst.",
      items: [
        { id: "ru-u86l4-zapakh", type: "vocab", front: "запах", reading: "zapakh", meaning: "a smell", accept: ["an odour", "the smell", "a scent"], example: { jp: "Запах кофе он чувствует даже с улицы, и это его будит.", en: "He can smell coffee even from the street, and it wakes him up." }, drill: { jp: "Запах кофе он чувствует с улицы", en: "He can smell coffee from the street" }, hint: "ZA-pakh — stress on the first syllable, ending in the scraping х. MASCULINE. ⚠️ NEUTRAL — a запах can be good or bad, and the two loaded words are аромат and вонь, the next cards. ⚠️ Its verb пахнуть is NOT carded: it is the same lexeme (unit1.js §D), so Russian says «пахнет кофе» with a word you meet but do not produce." },
        { id: "ru-u86l4-aromat", type: "vocab", front: "аромат", reading: "aromat", meaning: "an aroma", accept: ["a fragrance", "a pleasant smell", "a bouquet"], example: { jp: "Аромат этого чая он помнит очень давно, ещё из деревни.", en: "He has remembered the aroma of that tea for a very long time, from the village days." }, drill: { jp: "Аромат этого чая он помнит давно", en: "He has long remembered the aroma of that tea" }, hint: "a-ra-MAT — stress on the last syllable, and both о reduce to a. MASCULINE. ⚠️ ALWAYS POSITIVE, and slightly literary — a shop or a menu uses it, a person in a kitchen says запах. The adjective ароматный is a compliment." },
        { id: "ru-u86l4-von", type: "vocab", front: "вонь", reading: "von", meaning: "a stench", accept: ["a stink", "a bad smell", "a reek"], example: { jp: "Вонь от свалки чувствуют даже в деревне, если ветер с реки.", en: "The stench from the dump is noticed even in the village if the wind is off the river." }, drill: { jp: "Вонь от свалки чувствуют в деревне", en: "The stench from the dump is noticed in the village" }, hint: "VON — one syllable, with the ь keeping the н soft. ⚠️ FEMININE despite the -ь. ⚠️ STRONG AND RUDE-ADJACENT: вонь is not a neutral word and a polite Russian says «неприятный запах» instead. Its verb вонять is not carded." },
        { id: "ru-u86l4-nyukhat", type: "vocab", front: "нюхать", reading: "nyukhat", meaning: "to sniff", accept: ["to smell something", "to take a sniff", "to have a smell of"], example: { jp: "Нюхать цветы она любит больше, чем их покупать.", en: "She likes sniffing flowers more than buying them." }, drill: { jp: "Нюхать цветы она очень любит", en: "She very much likes sniffing flowers" }, hint: "NYU-khat — stress on the first syllable. Imperfective infinitive; the perfective is понюхать. ⚠️ ACTIVE, not passive: нюхать is what YOU do on purpose, while пахнуть — which this course does not card — is what a thing DOES. English «smell» covers both and Russian will not." },
        { id: "ru-u86l4-probovat", type: "vocab", front: "пробовать", reading: "probovat", meaning: "to taste", accept: ["to try something", "to sample a dish", "to have a go at"], example: { jp: "Пробовать новое блюдо он боится, хотя никогда об этом не говорит.", en: "He is afraid of tasting a new dish, although he never says so." }, drill: { jp: "Пробовать новое блюдо он боится", en: "He is afraid of tasting a new dish" }, hint: "PRO-ba-vat — stress on the first syllable, and the second о reduces to a. Imperfective infinitive; the perfective is попробовать. ⚠️ TWO SENSES, both everyday: to taste food, and to TRY doing anything — «попробуй ещё раз», try again. ⚠️ This card carries the sense of taste because `вкус` cannot be carded — see this unit's header." },
        { id: "ru-u86l4-zhazhda", type: "vocab", front: "жажда", reading: "zhazhda", meaning: "thirst", accept: ["being thirsty", "a craving", "a thirst for something"], example: { jp: "Жажда была такая, что вода казалась самой вкусной в мире.", en: "The thirst was such that the water seemed the tastiest in the world." }, drill: { jp: "Жажда была очень сильная", en: "The thirst was very strong" }, hint: "ZHAZH-da — stress on the first syllable, and the жд is said as written. FEMININE (-а). ⚠️ `голод` «hunger» is NOT its pair in this course: голодный from unit 24 is already taught, so the noun is refused on unit1.js §D. Figuratively «жажда знаний», a thirst for knowledge." },
      ],
    },
  ],
};
