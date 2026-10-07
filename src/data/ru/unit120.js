// RU Unit 120 — Выступление и церемония ("The speech and the ceremony") — B2
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THE SCAFFOLD TITLE WAS `Register 4 — written, public and institutional
// voice` AND THAT IS u83 Книжный язык RE-STATED. u83 shipped exactly the
// institutional written voice: `сведения` · `наличие` · `мероприятие` ·
// `регламент` · `протокол` · `инстанция` · `уведомлять` · `регулировать` ·
// `констатировать` · `норма` · `структура` · `параметр` · `приоритет` ·
// `статус` · `процедура`, plus its particles `ибо` · `отнюдь` · `весьма` ·
// `ныне` · `непосредственно` · `сугубо`. u117 (mine) has just added the formal
// compound prepositions and u118 (mine) the written connectives. There is
// nothing left of "the institutional written voice" to teach.
//
// SO THIS UNIT IS NARROWED TO THE SPOKEN PUBLIC REGISTER — the words for
// STANDING UP IN FRONT OF PEOPLE AND SAYING SOMETHING OUT LOUD. That is a
// genuinely separate register from u83's and the corpus had almost none of it:
// `речь` (u39), `аплодисменты` (u74), `публика` (u45), `собрание` (u59) and
// `микрофон` (u43) were the whole of it, and not one word for a speaker, a
// platform, a toast, an oath, a slogan or a condolence.
//
// ⚠️ WHAT I CHOSE, AND IT IS A MEASUREMENT: 24 cards across the four moments of
// public speech — speaking before a crowd (l1), the ceremonial occasion (l2),
// the set-piece words said at the moment itself (l3), and the public appeal
// (l4). Nothing here duplicates u83: no card is about a DOCUMENT.
//
// ✅ RESOLVED AT THE CROSS-BLOCK DEDUPE, 2026-10-07. `риторика` WAS carded by
// block 1's u98 Риторика и полемика — a unit titled with it — so u120 yielded
// as this header said it would. **BUT THE REPLACEMENT NAMED HERE IS NOT
// AVAILABLE: `пафос` IS ALSO u98's.** It was free when this was written and
// was not free when it was needed, which is what a front probe run once is
// worth. l1 cards `экспромт` instead — speaking with nothing written down
// first, which is a fact about the spoken register and belongs to no other slot.
//
// ⚠️ FIVE CARDS IN ALL WENT AT THAT DEDUPE, and three of the five keepers are
// HIGHER units, so unit order did not decide them — u98.js §6's explicit
// allocation did:
//   `риторика` → u98  · `лозунг` → u98  · `присяга` → u102 (all lower)
//   `призыв` → **u129 Войско и оборона** — conscription is the sense the
//        lead's seed list named, and l4 already had `воззвание` for the public
//        appeal, so nothing was lost here. The §D pair recorded below is
//        therefore u129's to honour, not this unit's.
//   `трибуна` → **u136 Спорт высших достижений** (the stands), also the
//        lead's list. l1 cards `помост` for the platform a speaker stands on.
// **So `призыв` and `трибуна` are NOT in scope for any sentence before u129
// and u136 respectively.** l2 cards `шествие` and l4 `девиз` + `петиция`.
//   ⚠️ `плакат` WAS THE OBVIOUS REPLACEMENT FOR `лозунг` AND IS BARRED on
//     unit1.js §1(b): it reads "plakat" and so does `плакать` (u28, to cry).
//     Front-clean, reading-taken — exactly the trap u98.js §5 names.
//   ⚠️ `красноречие` was refused for l1: красный (u16) + `речь` (u39) are both
//     taught, which is the composition u102 refused `законопроект` on.
//
// ⚠️ SEVEN CANDIDATES REFUSED, each for a reason a front probe cannot see:
//   `поздравление` — unit1.js §D, against `поздравлять` (u30). The crew brief
//     named it; the noun is exactly what the taught verb names, and a learner
//     who has поздравлять produces it unaided. l3 carries the congratulatory
//     moment through `тост` and `здравица`'s absence is noted below.
//   `слушатель`   — §D, against `слушать` (u59).
//   `выступать`   — one lexeme with `выступление`, which is carded.
//   `ведущий`     — unit51.js §2(b): a substantivised participle is barred.
//   `здравица`    — a duplicate prompt for `тост`; DEFERRED, not refused.
//   `обращение`   — carded at u119, next door. Not available twice.
//   `речь` · `аплодисменты` · `юбилей` · `годовщина` · `собрание` · `публика` ·
//     `зал` · `микрофон` — all TAKEN at B1, named here so no seat re-probes them.
// ⚠️ ONE ALLOWED §D PAIR: `призыв` alongside `призвание` (u72, «a calling»).
//   The judgement: a призыв is a PUBLIC APPEAL shouted at a crowd, and the
//   conscription sense («весенний призыв») is a third thing again; neither is
//   reachable from «a vocation». Its hint names both.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT120 = {
  id: "ru-u120",
  lang: "ru",
  title: "Выступление и церемония",
  order: 120,
  stage: "b2",
  lessons: [
    {
      id: "ru-u120l1",
      unit: 120,
      lesson: 1,
      title: "Standing up in front of a crowd",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a public appearance, an orator, a platform built to speak from, a rally, a standing ovation and a speech made with no preparation.",
      items: [
        { id: "ru-u120l1-vystuplenie", type: "vocab", front: "выступление", reading: "vystuplenie", meaning: "a public appearance", accept: ["a speech given in public", "a performance before an audience", "an address to a meeting"], example: { jp: "Выступление было короткое, но его запомнили все.", en: "The appearance was short, but everyone remembered it." }, drill: { jp: "Выступление было короткое", en: "The appearance was short" }, hint: "vys-tup-LE-ni-ye — stress on LE. NEUTER (-ие). ⚠️ COVERS BOTH A SPEECH AND A PERFORMANCE, which English splits: a minister's выступление is an address, a singer's выступление is a set. `речь` (u39) is the WORDS; the выступление is the whole OCCASION of getting up and doing it. Its verb выступать is not carded — it is this word's own lexeme." },
        { id: "ru-u120l1-orator", type: "vocab", front: "оратор", reading: "orator", meaning: "an orator", accept: ["a public speaker", "a speaker at a meeting", "someone good at speaking in public"], example: { jp: "Оратор говорил час, и в зале было тихо.", en: "The orator spoke for an hour, and the hall was quiet." }, drill: { jp: "Оратор говорил час", en: "The orator spoke for an hour" }, hint: "a-RA-tar — stress on RA, with both unstressed о reducing to a. MASCULINE. ⚠️ Not a joke word in Russian the way English «orator» can be: it is the neutral term for whoever is speaking at a meeting. ⚠️ Do not confuse with `орать` (u82, «to yell») — the resemblance is pure coincidence and the roots are unrelated." },
        { id: "ru-u120l1-pomost", type: "vocab", front: "помост", reading: "pomost", meaning: "a raised wooden platform put up to stand on", accept: ["a low stage built for one occasion", "boards raised above a crowd", "a temporary platform above the ground"], example: { jp: "Помост стоял прямо на площади, и оратора было слышно очень далеко.", en: "The platform stood right on the square, and the speaker on it could be heard a very long way off." }, drill: { jp: "Помост стоял прямо на площади", en: "The platform stood right on the square" }, hint: "pa-MOST — stress on the last syllable, and the о before it reduces to a. MASCULINE. From `мост` (u14) with по-: boards laid across, which is a prefixed derivation and not a sense a learner could take from \"a bridge\". ⚠️ Knocked together for one occasion and taken down again — unlike a theatre's сцена, and unlike `пьедестал` (u136), which the winners stand on. ⚠️ Also the weightlifter's platform." },
        { id: "ru-u120l1-miting", type: "vocab", front: "митинг", reading: "miting", meaning: "a political rally", accept: ["a public demonstration", "an open-air protest meeting", "a rally in the street"], example: { jp: "Митинг был в субботу, и народу пришло очень много.", en: "The rally was on Saturday, and a great many people came." }, drill: { jp: "Митинг был в субботу", en: "The rally was on Saturday" }, hint: "MI-ting — stress on the first syllable. MASCULINE. ⚠️ A FALSE FRIEND AND AN IMPORTANT ONE: English «meeting» is `собрание` (u59) or «встреча», while Russian митинг is a POLITICAL RALLY IN THE OPEN AIR, usually with speeches and often with permission problems. Never use it for a business meeting." },
        { id: "ru-u120l1-ovatsiya", type: "vocab", front: "овация", reading: "ovatsiya", meaning: "a standing ovation", accept: ["a prolonged burst of applause", "an ovation", "a storm of clapping"], example: { jp: "Овация была такая, что он уже не мог говорить.", en: "The ovation was such that he could no longer speak." }, drill: { jp: "Овация была такая", en: "The ovation was such" }, hint: "a-VA-tsi-ya — stress on VA, and the first о reduces to a. FEMININE (-я). ⚠️ STRONGER THAN `аплодисменты` (u74, «applause»), which is the ordinary clapping at the end: an овация is long, loud and usually standing — «овация стоя». The two are kept apart by hand so each card has one answer." },
        { id: "ru-u120l1-ekspromt", type: "vocab", front: "экспромт", reading: "ekspromt", meaning: "a speech made with no preparation", accept: ["words said off the cuff", "an unrehearsed turn before an audience", "something delivered on the spur of the moment"], example: { jp: "Экспромт получился лучше доклада, который он готовил целый месяц.", en: "The off-the-cuff speech came out better than the paper he had been preparing for a whole month." }, drill: { jp: "Экспромт получился лучше долгого доклада", en: "The off-the-cuff speech came out better than a long paper" }, hint: "eks-PROMT — stress on the one full vowel, and the кс is two sounds. MASCULINE. ⚠️ The form a Russian uses most is the instrumental adverb — «он говорил экспромтом», he spoke off the cuff. Distinguish it from `выступление` in this lesson: a выступление is the occasion, an экспромт is the fact that nothing was written down first." },
      ],
    },
    {
      id: "ru-u120l2",
      unit: 120,
      lesson: 2,
      title: "The ceremonial occasion",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a ceremony, a presentation, an award-giving, a ceremonial procession and a minute's silence, and call an occasion solemn.",
      items: [
        { id: "ru-u120l2-tseremoniya", type: "vocab", front: "церемония", reading: "tseremoniya", meaning: "a ceremony", accept: ["a formal occasion with a set order", "a ritual public event", "the ceremony"], example: { jp: "Церемония шла два часа, и все стояли.", en: "The ceremony lasted two hours, and everyone stood." }, drill: { jp: "Церемония шла два часа", en: "The ceremony lasted two hours" }, hint: "tse-re-MO-ni-ya — stress on MO, with ц as ts. FEMININE (-я). ⚠️ THE NEGATIVE PLURAL IS THE EVERYDAY USE: «без церемоний» means without standing on ceremony, and «да брось церемонии!» means stop being so formal. The word carries a hint of unnecessary formality even when it is neutral." },
        { id: "ru-u120l2-torzhestvennyy", type: "vocab", front: "торжественный", reading: "torzhestvennyy", meaning: "solemn and festive", accept: ["ceremonial in tone", "grand and formal", "befitting a great occasion"], example: { jp: "Торжественный тон в такой день был здесь обычным.", en: "A solemn tone on such a day was the usual thing here." }, drill: { jp: "Торжественный тон в такой день был обычным", en: "A solemn tone on such a day was the usual thing" }, hint: "tar-ZHEST-ven-nyy — stress on ZHEST, the first о reducing to a. ⚠️ IT IS BOTH GRAVE AND JOYFUL AT ONCE, which English cannot do in one word: a торжественный occasion is a celebration conducted with gravity — a graduation, a wedding, a state funeral. `мрачный` (u67) is sombre without the joy. From торжество «a triumph», which is not carded." },
        { id: "ru-u120l2-vruchenie", type: "vocab", front: "вручение", reading: "vruchenie", meaning: "a formal presentation", accept: ["the handing over of something in public", "a presentation of an award", "a formal handing-over"], example: { jp: "Вручение будет в пятницу, и семья тоже придёт.", en: "The presentation will be on Friday, and the family will come too." }, drill: { jp: "Вручение будет в пятницу", en: "The presentation will be on Friday" }, hint: "vru-CHE-ni-ye — stress on CHE. NEUTER (-ие). ⚠️ BUILT STRAIGHT ON `рука` (u20): вручить is to put a thing INTO someone's hand, so a вручение is a handing-over done in front of people. Used of diplomas, prizes and official letters. `награждение` in this lesson is the DECORATING; вручение is the physical handing." },
        { id: "ru-u120l2-nagrazhdenie", type: "vocab", front: "награждение", reading: "nagrazhdenie", meaning: "an award-giving", accept: ["the honouring of someone", "a decoration ceremony", "the giving of awards"], example: { jp: "Награждение лучших работников здесь каждый год в декабре.", en: "The award-giving for the best workers is here every year in December." }, drill: { jp: "Награждение лучших работников здесь каждый год", en: "The award-giving for the best workers is here every year" }, hint: "na-grazh-DE-ni-ye — stress on DE. NEUTER (-ие). From `награда` (u25, «a reward»), and that is why this card is the ACT and not the thing: the награда is the medal, the награждение is the occasion of giving it. ⚠️ In sport it is the medal ceremony and the word you will hear on television." },
        { id: "ru-u120l2-shestvie", type: "vocab", front: "шествие", reading: "shestvie", meaning: "a ceremonial procession through the streets", accept: ["a formal walking of many people together", "a march held as a ceremony", "a column of people moving in order"], example: { jp: "Шествие получилось очень большое, и смотрел на него весь город.", en: "The procession turned out a very big one, and the whole town watched it." }, drill: { jp: "Шествие получилось очень большое", en: "The procession turned out a very big one" }, hint: "SHEST-vi-ye — stress on the first syllable. NEUTER (-ие). From идти by way of шествовать, to proceed solemnly — a link no learner can see from `идти`, which is why it is its own card. ⚠️ Distinguish it from `митинг` (l1), which stands still and is political: a шествие WALKS, and it is as often religious or ceremonial — крестный ход is its church name." },
        { id: "ru-u120l2-molchanie", type: "vocab", front: "молчание", reading: "molchanie", meaning: "a silence that is kept", accept: ["a minute's silence", "deliberate silence", "the keeping of silence"], example: { jp: "Молчание в зале было полное, и все стояли.", en: "The silence in the hall was total, and everyone stood." }, drill: { jp: "Молчание в зале было полное", en: "The silence in the hall was total" }, hint: "mal-CHA-ni-ye — stress on CHA, the first о reducing to a. NEUTER (-ие). ⚠️ SILENCE THAT SOMEBODY IS KEEPING, not the absence of noise — «минута молчания» is a minute's silence for the dead, and «молчание — знак согласия» is the proverb. From молчать, to keep silent, which this course does not card. `тихо` (u5) is about the level of sound." },
      ],
    },
    {
      id: "ru-u120l3",
      unit: 120,
      lesson: 3,
      title: "The set-piece words said at the moment itself",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Make a toast, offer condolences, give parting words, swear a private oath, take a vow, and name a sermon.",
      items: [
        { id: "ru-u120l3-tost", type: "vocab", front: "тост", reading: "tost", meaning: "a toast at a table", accept: ["a speech made with a raised glass", "a drinking toast", "words said before drinking"], example: { jp: "Тост был длинный, и все уже хотели есть.", en: "The toast was long, and everyone already wanted to eat." }, drill: { jp: "Тост был длинный", en: "The toast was long" }, hint: "TOST — one syllable. MASCULINE. ⚠️ A RUSSIAN TOAST IS A SPEECH, not a word: «сказать тост» can take two minutes, and at a Georgian table far longer. The verb is `говорить` or сказать, never «пить». ⚠️ The same spelling also means toasted bread, but in that sense Russians usually say тостер for the machine and тост for the slice — context decides." },
        { id: "ru-u120l3-soboleznovanie", type: "vocab", front: "соболезнование", reading: "soboleznovanie", meaning: "condolences", accept: ["an expression of sympathy for a death", "words said to the bereaved", "a message of sympathy"], example: { jp: "Соболезнование он сказал тихо и больше ничего не говорил.", en: "He said his condolences quietly and said nothing more." }, drill: { jp: "Соболезнование он сказал очень тихо", en: "He said his condolences very quietly" }, hint: "sa-ba-lez-na-VA-ni-ye — seven syllables, stress on VA, every unstressed о reducing to a. NEUTER (-ие). ⚠️ NEARLY ALWAYS PLURAL: «мои соболезнования», and the fixed verb is выразить — «выразить соболезнования». Built on `боль` (u20, «pain») with со- «with»: suffering alongside someone. `сочувствие` (u67) is sympathy in general; this word is only for a death." },
        { id: "ru-u120l3-naputstvie", type: "vocab", front: "напутствие", reading: "naputstvie", meaning: "parting words of advice", accept: ["a send-off speech", "words of advice to someone leaving", "a parting exhortation"], example: { jp: "Напутствие было простое: работай и всегда учись.", en: "The parting advice was simple: work and always keep learning." }, drill: { jp: "Напутствие было простое", en: "The parting advice was simple" }, hint: "na-PUT-stvi-ye — stress on PUT. NEUTER (-ие). ⚠️ BUILT ON `путь` (u36, «a way»): words given to someone setting out on one. The occasion is fixed — a school leaving ceremony, a soldier going away, a child moving out — and a Russian teacher's напутствие is an institution. There is no English single word for it." },
        { id: "ru-u120l3-klyatva", type: "vocab", front: "клятва", reading: "klyatva", meaning: "a solemn promise", accept: ["an oath sworn privately", "a vow between people", "a sworn word"], example: { jp: "Клятва была простая, но они помнили её всю жизнь.", en: "The oath was a simple one, but they remembered it all their lives." }, drill: { jp: "Клятва была простая", en: "The oath was a simple one" }, hint: "KLYAT-va — stress on the first syllable. FEMININE (-а). ⚠️ THE PERSONAL ONE OF THE THREE: a клятва is sworn by one person to another or to themselves, where `присяга` (l2) is institutional and an `обет` religious. «Клятва Гиппократа» is the Hippocratic oath. From клясться, to swear, which is not carded." },
        { id: "ru-u120l3-obet", type: "vocab", front: "обет", reading: "obet", meaning: "a religious vow", accept: ["a vow taken before God", "a monastic vow", "a sacred undertaking"], example: { jp: "Обет молчания он держал целый год.", en: "He kept a vow of silence for a whole year." }, drill: { jp: "Обет молчания он держал целый год", en: "He kept a vow of silence for a whole year" }, hint: "a-BET — stress on the last syllable, the first о reducing to a. MASCULINE. ⚠️ RELIGIOUS AND ONLY RELIGIOUS: «обет молчания», «обет бедности», and the verbs are дать and держать. It belongs with u93's `монах` · `молитва` · `пост` — and note how neatly it pairs with `молчание` from lesson 2 in the example." },
        { id: "ru-u120l3-propoved", type: "vocab", front: "проповедь", reading: "propoved", meaning: "a sermon", accept: ["a preaching", "an address from a pulpit", "a moralising lecture"], example: { jp: "Проповедь шла долго, но люди слушали очень тихо.", en: "The sermon went on a long time, but people listened very quietly." }, drill: { jp: "Проповедь шла долго", en: "The sermon went on a long time" }, hint: "PRO-pa-ved — stress on the first syllable, and the unstressed о reduces to a. ⚠️ FEMININE despite the -ь (unit1.js §3). ⚠️ A SECOND, UNKIND USE: «читать проповеди» means to lecture someone moralistically, which is what a Russian teenager accuses a parent of. Belongs with u93's `священник` and `храм`." },
      ],
    },
    {
      id: "ru-u120l4",
      unit: 120,
      lesson: 4,
      title: "The public appeal",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a motto, a petition, a proclamation, a manifesto and a formal declaration, and say to proclaim something.",
      items: [
        { id: "ru-u120l4-deviz", type: "vocab", front: "девиз", reading: "deviz", meaning: "a short phrase a body takes as its guiding words", accept: ["a motto a group lives by", "a few words chosen to stand for what somebody believes", "the guiding phrase on a badge or a flag"], example: { jp: "Девиз у этой школы простой, зато его помнят даже старые ученики.", en: "This school's motto is a simple one, but even its old pupils remember it." }, drill: { jp: "Девиз у этой школы совсем простой", en: "This school's motto is quite a simple one" }, hint: "de-VIZ — stress on the last syllable. MASCULINE. ⚠️ Not shouted at a crowd but ADOPTED and kept — девиз Олимпиады, девиз полка — where a `лозунг` (u98) is made for one campaign and dropped. ⚠️ Also the motto on a coat of arms, which is where the word came from." },
        { id: "ru-u120l4-petitsiya", type: "vocab", front: "петиция", reading: "petitsiya", meaning: "a signed request put to an authority", accept: ["a written demand many people sign", "a formal request backed by signatures", "a collective appeal handed to those in charge"], example: { jp: "Петиция лежит в интернете уже месяц, однако из правительства ответа так и не было.", en: "The petition has lain on the internet for a month now, yet no answer has come from the government." }, drill: { jp: "Петиция уже готова и ждёт ответа", en: "The petition is ready and waiting for an answer" }, hint: "pe-TI-tsi-ya — stress on TI. FEMININE (-я). ⚠️ The verb is подписать петицию and the people who sign are подписанты. ⚠️ Distinguish it from `воззвание` in this lesson: a воззвание is addressed DOWNWARD to the public, a петиция UPWARD to whoever can decide — and it is the one modern Russians actually meet, online." },
        { id: "ru-u120l4-vozzvanie", type: "vocab", front: "воззвание", reading: "vozzvanie", meaning: "a proclamation to the people", accept: ["an open appeal in writing", "a public address to the nation", "a proclamation"], example: { jp: "Воззвание читали на улице, потому что газет уже не было.", en: "The proclamation was read out in the street, because there were no longer any newspapers." }, drill: { jp: "Воззвание читали на улице", en: "The proclamation was read out in the street" }, hint: "vaz-ZVA-ni-ye — stress on ZVA, the double з said as one long z and the о reducing to a. NEUTER (-ие). ⚠️ HISTORICAL IN FLAVOUR — a воззвание is what a revolutionary committee posts on a wall, and Russian history is full of them. From звать (u8) with воз-: a calling-out. Stronger and older than `призыв`." },
        { id: "ru-u120l4-provozglashat", type: "vocab", front: "провозглашать", reading: "provozglashat", meaning: "to proclaim", accept: ["to declare publicly and formally", "to announce from a platform", "to pronounce something to be so"], example: { jp: "Провозглашать можно что угодно, а работать надо каждый день.", en: "One can proclaim anything at all, but the work has to be done every day." }, drill: { jp: "Провозглашать такие вещи очень легко", en: "Proclaiming such things is very easy" }, hint: "pra-vaz-gla-SHAT — stress on the last syllable, every unstressed о reducing to a. Imperfective infinitive; the perfective is провозгласить. ⚠️ Built on `голос` (u39, «a voice») in its old form -глас-, which is the same element inside `огласка` (u114): making a thing public by voice. Used of independence, of a republic, of a winner." },
        { id: "ru-u120l4-manifest", type: "vocab", front: "манифест", reading: "manifest", meaning: "a manifesto", accept: ["a published statement of aims", "a programme of principles", "a founding statement"], example: { jp: "Манифест написали за одну ночь, и утром его уже читали все.", en: "The manifesto was written in one night, and by morning everyone was already reading it." }, drill: { jp: "Манифест написали за одну ночь", en: "The manifesto was written in one night" }, hint: "ma-ni-FEST — stress on the last syllable. MASCULINE. ⚠️ TWO HISTORICAL WEIGHTS IN RUSSIAN: an artistic or political manifesto, and a TSAR'S MANIFESTO — the imperial decree form, as in the Manifesto of 1861 that freed the serfs. Both senses are live, which is why the word is heavier in Russian than in English." },
        { id: "ru-u120l4-deklaratsiya", type: "vocab", front: "декларация", reading: "deklaratsiya", meaning: "a formal declaration", accept: ["a solemn public statement", "a declaration of principles", "an official declared statement"], example: { jp: "Декларация была красивая, но ничего за ней не стояло.", en: "The declaration was a fine one, but there was nothing behind it." }, drill: { jp: "Декларация была красивая", en: "The declaration was a fine one" }, hint: "dek-la-RA-tsi-ya — stress on RA. FEMININE (-я). ⚠️ AND A SECOND SENSE YOU WILL MEET AT A BORDER OR IN APRIL: a декларация is also a TAX RETURN or a customs declaration («налоговая декларация»). ⚠️ Different from `манифест`, which sets out a programme: a декларация declares a position. In speech «это только декларация» means empty words." },
      ],
    },
  ],
};
