// RU Unit 69 — Развитие и перемена ("Development and change") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 1 (u61–u73). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, and THIS BAND's conventions in ru/unit61.js §1–§8.
//
// THE SLOT TITLE WAS "Change over time" and it applies — A2's u38 Время и сроки
// taught how to LOCATE a point in time (момент · срок · период · век · эпоха ·
// впервые · однажды · внезапно · навсегда · прежде · затем · постепенно · снова ·
// заранее · вовремя · постоянно · течение · задержка), and nothing taught how to
// say that a thing GREW, SHRANK, COLLAPSED or TURNED INTO something else. A1's
// u24 carded `менять` and `прошлый` and stopped there.
//
// ⚠️ THIS IS THE UNIT WHERE §D COSTS THE MOST, and the reason is structural: in
//   Russian almost every word for change is built on a root some earlier band
//   taught as a static word. SEVENTEEN REFUSED, and a later seat should not
//   re-litigate any of them:
//     рост and нарастать and возрастать (расти u54) · улучшение (лучше u5) ·
//     ухудшение (хуже u5) · расширение (широкий u40) · устаревать and стареть
//     (старый u19) · молодеть (молодой u19) · обновлять and обновление (новый
//     u19) · постоянство (постоянно u38) · ускоряться (скорость u36) ·
//     снижаться (низкий u47) · возрождение (рождение u59) · прежний (прежде
//     u38) · временный (время u11) · вечный (век u38) · становление
//     (становиться u32) · плавный (плавать u27).
//   ⚠️ AND THREE AGAINST THIS BLOCK'S OWN CARDS, which is the check a seat forgets
//   to run: `колебание` (колебаться, u64l2) · `подъём` (подниматься, u63l4) ·
//   `преобразование` (образ, u68l1).
//   `бывший` and `движущий` — PARTICIPLES, so Grammar 6–8's and block 2's.
//
// ★ ONE ROOT, ONE CARD — a rule this unit had to apply to itself. `развитие` and
//   `развиваться`, `превращение` and `превращаться`, `прогресс` and
//   `прогрессировать` are each one lexeme wearing two coats, and carding both
//   members would be two mastery tracks for one word (unit1.js §5). The unit
//   takes the NOUN where the noun is what a learner needs to say (развитие) and
//   the VERB where the verb is (превращаться), never both.
//
// ★ A FREE-PASS TRAP, the second after `идеал` at u68l2. `прогресс` transliterates
//   to EXACTLY "progress" under unit1.js §1, so the natural gloss would be read
//   straight off the prompt. It is glossed "steady advance", and no accept entry
//   normalises to "progress" either. `эволюция` · `реформа` · `тенденция` ·
//   `перспектива` were checked the same way and are safe — their readings
//   (evolyutsiya · reforma · tendentsiya · perspektiva) are not their English words.
//
// ★ ONE -ь NOUN: гибель, FEMININE. unit1.js §3 makes the gender compulsory and
//   nothing in the spelling predicts it.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT69 = {
  id: "ru-u69",
  lang: "ru",
  title: "Развитие и перемена",
  order: 69,
  stage: "b1",
  lessons: [
    {
      id: "ru-u69l1",
      unit: 69,
      lesson: 1,
      title: "Growth and decline",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe the long arc of something — its development, its steady advance, its evolution, its decline, a downturn, and a period of stagnation.",
      items: [
        { id: "ru-u69l1-razvitie", type: "vocab", front: "развитие", reading: "razvitie", meaning: "development", accept: ["the way something grows", "unfolding over years", "growth as a process"], example: { jp: "Развитие этого города было очень медленное, пока здесь не стали строить.", en: "The development of that town was very slow, until building began here." }, drill: { jp: "Развитие было очень медленное", en: "The development was very slow" }, hint: "raz-VI-ti-ye — four syllables, stress on VI. NEUTER (-е). ⚠️ Its verb развиваться is NOT a card — one root, one card, see this unit's header. «Развивающаяся страна» is a developing country." },
        { id: "ru-u69l1-progress", type: "vocab", front: "прогресс", reading: "progress", meaning: "steady advance", accept: ["improvement over time", "moving forward as a whole", "advancement"], example: { jp: "Прогресс был ясный, но меньше, чем все ждали.", en: "The advance was clear, but less than everyone had expected." }, drill: { jp: "Прогресс был совсем небольшой", en: "The advance was quite small" }, hint: "pra-GRESS — stress on GRESS, and the сс is held a beat longer. MASCULINE. ⚠️ Glossed the long way round ON PURPOSE: this word transliterates to its own English gloss, so the short version would give the answer away — the free-pass trap of unit 1 §9, the same one `идеал` hit at unit 68." },
        { id: "ru-u69l1-evolyutsiya", type: "vocab", front: "эволюция", reading: "evolyutsiya", meaning: "evolution", accept: ["slow change across ages", "gradual development of a species", "change without a break"], example: { jp: "Эволюция языка идёт так медленно, что за одну жизнь её не видно.", en: "The evolution of a language goes so slowly that it cannot be seen in one lifetime." }, drill: { jp: "Эволюция языка идёт очень медленно", en: "The evolution of a language goes very slowly" }, hint: "e-va-LYU-tsi-ya — five syllables, stress on LYU, and the э at the front is э, not е. FEMININE (-я). ⚠️ In Russian it is specifically change WITHOUT a break, which is why it is the opposite of переворот in lesson 3." },
        { id: "ru-u69l1-upadok", type: "vocab", front: "упадок", reading: "upadok", meaning: "decline", accept: ["decay", "a falling off", "going downhill over years"], example: { jp: "Упадок начался не сразу, и сначала никто не хотел его признавать.", en: "The decline did not begin at once, and at first nobody wanted to admit it." }, drill: { jp: "Упадок здесь был совсем ясный", en: "The decline here was quite clear" }, hint: "u-PA-dak — stress on PA. MASCULINE. ⚠️ Its stem drops the о: упадка, упадку. «Упадок сил» means a loss of strength, and it is the word a doctor uses." },
        { id: "ru-u69l1-spad", type: "vocab", front: "спад", reading: "spad", meaning: "a downturn", accept: ["a dip in the figures", "a slump", "a fall after a peak"], example: { jp: "После долгого спада наконец начался подъём, но доверия к цифрам уже не было.", en: "After a long downturn a rise finally began, but there was no longer any trust in the figures." }, drill: { jp: "Спад был очень долгий", en: "The downturn was very long" }, hint: "SPAD — one syllable. MASCULINE. ⚠️ Упадок is a slow historical decline; спад is a measurable dip in a curve, which is why an economist says спад and a historian says упадок." },
        { id: "ru-u69l1-zastoy", type: "vocab", front: "застой", reading: "zastoy", meaning: "stagnation", accept: ["standing still", "a period with no movement", "going nowhere"], example: { jp: "В отделе был полный застой, и приступать к новым проектам никто не хотел.", en: "There was complete stagnation in the department, and nobody wanted to set about new projects." }, drill: { jp: "Застой продолжался много лет", en: "The stagnation went on for many years" }, hint: "za-STOY — stress on the last syllable. MASCULINE. It sits on стоять from unit 57 — standing water. ⚠️ With a capital letter «Застой» is the name Russians give to the late Soviet decades, so the word carries history." },
      ],
    },
    {
      id: "ru-u69l2",
      unit: 69,
      lesson: 2,
      title: "The verbs of becoming",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what is happening to a thing — it arises, it vanishes, it turns into something else, it builds up, it falls apart, or it grows stronger.",
      items: [
        { id: "ru-u69l2-voznikat", type: "vocab", front: "возникать", reading: "voznikat", meaning: "to arise", accept: ["to come into being", "to spring up", "to appear out of nothing"], example: { jp: "Такие вопросы будут возникать каждый раз, пока правило не станет ясным.", en: "Such questions will arise every time, until the rule becomes clear." }, drill: { jp: "Такие вопросы будут возникать часто", en: "Such questions will arise often" }, hint: "vaz-ni-KAT — stress on the last syllable. IMPERFECTIVE; the perfective is возникнуть. ⚠️ Появляться from unit 35 is a thing becoming visible; возникать is a thing coming into existence — a question, a problem, a difficulty." },
        { id: "ru-u69l2-ischezat", type: "vocab", front: "исчезать", reading: "ischezat", meaning: "to vanish", accept: ["to disappear", "to go without trace", "to be gone"], example: { jp: "Старые слова исчезают из языка медленно, и понять это трудно.", en: "Old words vanish from a language slowly, and it is hard to understand." }, drill: { jp: "Слова могут исчезать очень медленно", en: "Words can vanish very slowly" }, hint: "is-chi-ZAT — stress on the last syllable, and the сч here is said s-ch, not shch. IMPERFECTIVE; the perfective is исчезнуть. It is the exact opposite of возникать and the pair is usually taught together." },
        { id: "ru-u69l2-prevrashchatsya", type: "vocab", front: "превращаться", reading: "prevrashchatsya", meaning: "to turn into", accept: ["to become something else", "to be transformed", "to change into"], example: { jp: "Небольшой спор может превращаться в серьёзную проблему, если никто не хочет мира.", en: "A small argument can turn into a serious problem, if nobody wants peace." }, drill: { jp: "Спор может превращаться в проблему", en: "An argument can turn into a problem" }, hint: "pri-vra-SHCHAT-sya — stress on SHCHAT, with the long щ. IMPERFECTIVE and REFLEXIVE; the perfective is превратиться. It takes в + the ACCUSATIVE for what the thing becomes. ⚠️ Становиться from unit 32 takes the INSTRUMENTAL and is the milder word." },
        { id: "ru-u69l2-nakaplivatsya", type: "vocab", front: "накапливаться", reading: "nakaplivatsya", meaning: "to build up", accept: ["to accumulate", "to pile up over time", "to collect in quantity"], example: { jp: "Ошибки накапливаются медленно, и впоследствии исправлять их очень трудно.", en: "Mistakes build up slowly, and subsequently it is very hard to put them right." }, drill: { jp: "Ошибки могут накапливаться медленно", en: "Mistakes can build up slowly" }, hint: "na-KA-pli-vat-sya — stress on KA. IMPERFECTIVE and REFLEXIVE; the perfective is накопиться. It sits on копить from unit 48, to save up — but накапливаться happens to you, where копить is something you do." },
        { id: "ru-u69l2-razrushatsya", type: "vocab", front: "разрушаться", reading: "razrushatsya", meaning: "to fall apart", accept: ["to crumble", "to be destroyed over time", "to break down"], example: { jp: "Старый дом разрушался много лет, и потом его уже нельзя было чинить.", en: "The old house fell apart over many years, and afterwards it could no longer be mended." }, drill: { jp: "Старый дом может разрушаться быстро", en: "An old house can fall apart quickly" }, hint: "raz-ru-SHAT-sya — stress on SHAT. IMPERFECTIVE and REFLEXIVE; the perfective is разрушиться. ⚠️ Ломать from unit 57 is a person breaking a thing; разрушаться is a thing going to pieces by itself." },
        { id: "ru-u69l2-ukreplyatsya", type: "vocab", front: "укрепляться", reading: "ukreplyatsya", meaning: "to grow stronger", accept: ["to be strengthened", "to firm up", "to take a firmer hold"], example: { jp: "Доверие между ними укреплялось медленно, но зато надёжно.", en: "The trust between them grew stronger slowly, but reliably for all that." }, drill: { jp: "Доверие может укрепляться медленно", en: "Trust can grow stronger slowly" }, hint: "uk-ri-PLYAT-sya — stress on PLYAT. IMPERFECTIVE and REFLEXIVE; the perfective is укрепиться. It is the opposite of разрушаться. ⚠️ Сильный from unit 20 is the adjective; укрепляться is the process." },
      ],
    },
    {
      id: "ru-u69l3",
      unit: 69,
      lesson: 3,
      title: "A sudden turn, a slow drift",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a change by its shape — a change of state, a sudden jump, an upheaval, a reform, a reduction, and a long-run trend.",
      items: [
        { id: "ru-u69l3-peremena", type: "vocab", front: "перемена", reading: "peremena", meaning: "a change of state", accept: ["a shift to something else", "an alteration", "things becoming different"], example: { jp: "Эта перемена была неизбежной, хотя почти никто её не ждал.", en: "That change was unavoidable, although almost nobody expected it." }, drill: { jp: "Перемена была совсем неизбежная", en: "The change was quite unavoidable" }, hint: "pi-ri-ME-na — four syllables, stress on ME. FEMININE (-а). It is the noun of менять from unit 24. ⚠️ AT SCHOOL IT MEANS THE BREAK between lessons, which is the sense a Russian child learns first — «на перемене»." },
        { id: "ru-u69l3-skachok", type: "vocab", front: "скачок", reading: "skachok", meaning: "a sudden jump", accept: ["a leap in the figures", "an abrupt rise", "a jump upwards"], example: { jp: "Скачок цен был такой резкий, что никто ничего не купил.", en: "The jump in prices was so abrupt that nobody bought anything." }, drill: { jp: "Скачок был очень резкий", en: "The jump was very abrupt" }, hint: "ska-CHOK — stress on the last syllable. MASCULINE. ⚠️ Its stem drops the о: скачка, скачку. Шаг from unit 36 is one step forward; a скачок is a leap that skips the steps between." },
        { id: "ru-u69l3-perevorot", type: "vocab", front: "переворот", reading: "perevorot", meaning: "an upheaval", accept: ["a complete reversal", "a coup", "everything turned over"], example: { jp: "Это был настоящий переворот в науке, и старые книги стали сразу не нужны.", en: "That was a genuine upheaval in science, and the old books at once became unnecessary." }, drill: { jp: "Переворот был совсем полный", en: "The upheaval was quite complete" }, hint: "pi-ri-va-ROT — four syllables, stress on the last. MASCULINE. ⚠️ TWO SENSES: a political coup, and any complete reversal of how things were. Эволюция in lesson 1 is its opposite — change without a break." },
        { id: "ru-u69l3-reforma", type: "vocab", front: "реформа", reading: "reforma", meaning: "a reform", accept: ["a deliberate change to a system", "an official overhaul", "a change brought in from above"], example: { jp: "Реформа была предварительная, и окончательный закон приняли только через год.", en: "The reform was preliminary, and the final law was passed only a year later." }, drill: { jp: "Реформа была только предварительная", en: "The reform was only preliminary" }, hint: "ri-FOR-ma — stress on FOR. FEMININE (-а). ⚠️ A реформа is always DELIBERATE and comes from authority, where перемена may simply happen. Its reading \"reforma\" is not the English word, so the short gloss is safe." },
        { id: "ru-u69l3-sokrashchenie", type: "vocab", front: "сокращение", reading: "sokrashchenie", meaning: "a reduction", accept: ["a cut", "making something smaller", "an abbreviation"], example: { jp: "Сокращение расходов вызывает негодование у всех, кто здесь работает.", en: "The reduction of costs arouses indignation in everyone who works here." }, drill: { jp: "Сокращение вызывает общее негодование", en: "The reduction arouses general indignation" }, hint: "sa-kra-SHCHE-ni-ye — five syllables, stress on SHCHE. NEUTER (-е). ⚠️ TWO VERY DIFFERENT SENSES in one word: a cut in money or staff, AND an abbreviation of a word. «Сокращения» on a form means the list of abbreviations." },
        { id: "ru-u69l3-tendentsiya", type: "vocab", front: "тенденция", reading: "tendentsiya", meaning: "a trend", accept: ["the way things are going", "a long-run direction", "a tendency"], example: { jp: "Тенденция ясная, но один год это ещё не доказательство.", en: "The trend is clear, but one year is still not proof." }, drill: { jp: "Тенденция здесь совсем ясная", en: "The trend here is quite clear" }, hint: "tin-DEN-tsi-ya — four syllables, stress on DEN. FEMININE (-я). Another -ция noun taking the stress on the syllable before it, like традиция from unit 55. ⚠️ It describes a direction over MANY measurements, which is why one year proves nothing." },
      ],
    },
    {
      id: "ru-u69l4",
      unit: 69,
      lesson: 4,
      title: "Where it ends up",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how a process ends — ruin, a collapse, a milestone reached, a prospect ahead — and call a change abrupt or a state present-day.",
      items: [
        { id: "ru-u69l4-gibel", type: "vocab", front: "гибель", reading: "gibel", meaning: "ruin", accept: ["destruction", "perishing", "the end of something utterly"], example: { jp: "Гибель этого города есть в старых книгах, но причина не ясна и сейчас.", en: "The ruin of that city is in old books, but the cause is not clear even now." }, drill: { jp: "Гибель города была полная", en: "The ruin of the city was complete" }, hint: "GI-bil — stress on the first syllable, and the г is a hard g. ⚠️ FEMININE despite the -ь — unit 1 §3, and nothing in the spelling predicts it. It is a heavy, final word: a ship, a city or a person perishes." },
        { id: "ru-u69l4-krakh", type: "vocab", front: "крах", reading: "krakh", meaning: "a collapse", accept: ["a crash", "a total failure", "coming down all at once"], example: { jp: "Крах этой фирмы был неизбежный, потому что долги накапливались годами.", en: "The collapse of that firm was unavoidable, because the debts had built up for years." }, drill: { jp: "Крах фирмы был неизбежный", en: "The collapse of the firm was unavoidable" }, hint: "KRAKH — one syllable, ending in the scraping х. MASCULINE. ⚠️ Гибель is the end of a thing that was alive; крах is the sudden failure of a scheme, a bank or a plan. It is the word a newspaper uses about money." },
        { id: "ru-u69l4-rubezh", type: "vocab", front: "рубеж", reading: "rubezh", meaning: "a milestone reached", accept: ["a threshold crossed", "a frontier of achievement", "a marked point in time"], example: { jp: "Это был важный рубеж, и после него работа шла уже не так.", en: "That was an important milestone, and after it the work no longer went the same way." }, drill: { jp: "Это был очень важный рубеж", en: "That was a very important milestone" }, hint: "ru-BEZH — stress on the last syllable. MASCULINE. ⚠️ Граница from unit 30 is the line on the map; рубеж is a line you CROSS — a point in a process, or in older Russian a defended frontier. «За рубежом» means abroad." },
        { id: "ru-u69l4-perspektiva", type: "vocab", front: "перспектива", reading: "perspektiva", meaning: "a prospect", accept: ["an outlook ahead", "what lies in store", "a chance of something coming"], example: { jp: "Перспектива была совсем не ясная, и поэтому никто не хотел решать.", en: "The prospect was quite unclear, and so nobody wanted to decide." }, drill: { jp: "Эта перспектива совсем не ясная", en: "That prospect is quite unclear" }, hint: "pirs-pik-TI-va — four syllables, stress on TI. FEMININE (-а). ⚠️ Будущее from unit 24 is the future as a time; перспектива is what that future looks like from here. «В перспективе» means in the longer run." },
        { id: "ru-u69l4-rezkiy", type: "vocab", front: "резкий", reading: "rezkiy", meaning: "sharp and sudden", accept: ["abrupt", "harsh in manner", "steep"], example: { jp: "Резкий поворот в разговоре был для всех новый, но спорить никто не стал.", en: "The sharp turn in the conversation was new to everyone, but nobody began to argue." }, drill: { jp: "Это был резкий поворот", en: "That was a sharp turn" }, hint: "REZ-kiy — stress on the first syllable. It sits on резать from unit 29, to cut. ⚠️ THREE SENSES THAT ALL FOLLOW FROM CUTTING: a sudden change, a harsh manner, and a strong smell. Внезапно from unit 38 is the adverb for suddenly." },
        { id: "ru-u69l4-nyneshniy", type: "vocab", front: "нынешний", reading: "nyneshniy", meaning: "present-day", accept: ["of the present time", "today's", "the current one"], example: { jp: "Нынешний закон строже старого, и людям это не нравится.", en: "The present-day law is stricter than the old one, and people do not like it." }, drill: { jp: "Нынешний закон очень строгий", en: "The present-day law is very strict" }, hint: "NY-nish-niy — stress on the first syllable, with the ы sound from unit 5. ⚠️ Современный from unit 60 means modern, as opposed to ancient; нынешний means the one in force right now, as opposed to the previous one. «Нынче» is its colloquial adverb." },
      ],
    },
  ],
};
