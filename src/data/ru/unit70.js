// RU Unit 70 — Трудность и выход ("Difficulty and the way out") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 1 (u61–u73). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, and THIS BAND's conventions in ru/unit61.js §1–§8.
//
// THE SLOT TITLE WAS "Problems and solutions" and it is kept. What A1 and A2
// already gave the learner is thin and scattered: `проблема` (u9), `ошибка`
// (u6), `трудный` and `сложный` (u19, u25), `причина` and `условие` (u34),
// `задача` and `метод` (u52), `справляться` and `добиваться` (u47). So a learner
// could say that something was a problem and could not name an obstacle, a dead
// end, a shortage, a failure, the damage done, or any of the verbs for getting
// past it.
//
// ⚠️ SEVENTEEN REFUSED, and the pattern is worth stating because it recurs in
//   every unit of this block: Russian builds its problem vocabulary out of не-
//   plus a taught word, or out of a taught verb's root.
//   THE не+X BAR (unit61.js §5(d)): `неудача` (удача u7) · `недостаток`
//        (достаточно u37). Both are tempting and both are barred by the same rule
//        that killed безусловно at u61 and немедленно at u66.
//   §D AGAINST A1/A2: `помеха` (мешать u34) · `затруднение` (трудный u19) ·
//        `поломка` and `ремонтировать` (ломать u57 · ремонт u29) · `исправление`
//        (исправлять u48) · `замена` (заменять u49) · `смягчать` (мягкий u40) ·
//        `тяжесть` (тяжёлый u47) · `острота` (острый u58) · `противодействие`
//        (против u46) · `вред` (вредный u53).
//   ⚠️ §D AGAINST THIS BLOCK'S OWN CARDS, the check a seat forgets: `обходиться`
//        and `подход` (обходить and подходить, both u63l1) · `облегчать`
//        (облегчение, u67l1) · `виновник` (обвинять, u61l2) · `меры` (мера, the
//        plural of u68l2's own front, so unit1.js §5's inflected-form rule).
//   `спасение` — refused to honour this band's own allocation: unit61.js §3
//        assigns спасать and the whole rescue field to block 3's u97.
//
// ★ THE NEAR-SYNONYM TRAP, and this unit is full of it. Six of its nouns are
//   English near-twins, so each gloss had to be pushed apart BY SENSE and not by
//   a parenthetical (unit31.js §1 — normalizeMeaning strips parentheses):
//     нехватка "a shortage"          vs  дефицит "a thing in short supply"
//     жалоба "a complaint"           vs  претензия "a claim against someone"
//     провал "a failure"             vs  срыв "a breakdown"
//   ⚠️ `компромисс` is glossed "a middle ground" and NOT "a compromise", because
//   u61l3's `уступка` already accepted that word — and the fix was made on BOTH
//   sides: уступка's accept[] lost "a compromise" in the same commit.
//
// ★ `усилие` IS ALLOWED against `сильный` (u20), and the reasoning is the §D
//   direction test: "strong" does not hand a learner "an effort", and the parent
//   noun `сила` is taught nowhere in this language.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT70 = {
  id: "ru-u70",
  lang: "ru",
  title: "Трудность и выход",
  order: 70,
  stage: "b1",
  lessons: [
    {
      id: "ru-u70l1",
      unit: 70,
      lesson: 1,
      title: "What is in the way",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name what blocks a job — an obstacle, a dead end, a crisis, a conflict, a malfunction, and a shortage.",
      items: [
        { id: "ru-u70l1-prepyatstvie", type: "vocab", front: "препятствие", reading: "prepyatstvie", meaning: "an obstacle", accept: ["a hindrance", "something standing in the way", "a barrier to progress"], example: { jp: "Главное препятствие здесь не деньги, а то, что никто не хочет брать вину на себя.", en: "The main obstacle here is not money but the fact that nobody wants to take the blame." }, drill: { jp: "Это серьёзное препятствие для нас", en: "That is a serious obstacle for us" }, hint: "pri-PYAT-stvi-ye — five syllables, stress on PYAT. NEUTER (-е). ⚠️ Its own verb препятствовать exists but is heavily formal; in speech Russians use мешать from unit 34, which is why препятствие is carded and помеха is not." },
        { id: "ru-u70l1-tupik", type: "vocab", front: "тупик", reading: "tupik", meaning: "a dead end", accept: ["an impasse", "a cul-de-sac", "a situation with no way forward"], example: { jp: "Разговор был в тупике, и продолжать его не было смысла.", en: "The conversation was at a dead end, and there was no sense in continuing it." }, drill: { jp: "Это был настоящий тупик", en: "That was a genuine dead end" }, hint: "tu-PIK — stress on the last syllable. MASCULINE. It sits on тупой from unit 60, blunt. ⚠️ BOTH SENSES ARE ORDINARY: a street with no way out, and a negotiation with no way out. «Зайти в тупик» is the set phrase." },
        { id: "ru-u70l1-krizis", type: "vocab", front: "кризис", reading: "krizis", meaning: "a crisis", accept: ["a critical point", "a turn for the worse", "an emergency in the affairs of something"], example: { jp: "Кризис начался не вдруг, и тенденция была ясная уже за год до этого.", en: "The crisis did not begin suddenly, and the trend had been clear a year before." }, drill: { jp: "Кризис был очень долгий", en: "The crisis was very long" }, hint: "KRI-zis — stress on the first syllable, which surprises most learners. MASCULINE. ⚠️ Its reading is \"krizis\", not the English word, so the short gloss is safe here — unlike прогресс at unit 69." },
        { id: "ru-u70l1-konflikt", type: "vocab", front: "конфликт", reading: "konflikt", meaning: "a conflict", accept: ["a clash", "an open quarrel", "a dispute that has hardened"], example: { jp: "Небольшой спор стал серьёзным конфликтом, потому что никто не хотел идти на уступку.", en: "A small argument became a serious conflict, because nobody wanted to make a concession." }, drill: { jp: "Это был очень серьёзный конфликт", en: "That was a very serious conflict" }, hint: "kan-FLIKT — stress on FLIKT. MASCULINE. ⚠️ Спор from unit 39 is an argument people can have and go home from; конфликт is one that has set hard. Its reading \"konflikt\" is not the English word." },
        { id: "ru-u70l1-sboy", type: "vocab", front: "сбой", reading: "sboy", meaning: "a malfunction", accept: ["a glitch", "a failure in a system", "a hiccup in the works"], example: { jp: "Сбой в программе был небольшой, но из-за него весь день был потерян.", en: "The malfunction in the program was small, but because of it a whole day was lost." }, drill: { jp: "Это был небольшой сбой", en: "That was a small malfunction" }, hint: "SBOY — one syllable. MASCULINE. ⚠️ It is the word for a MACHINE or a SYSTEM going wrong once — a computer, a train timetable, a heart rhythm. For a person it is срыв, in lesson 2." },
        { id: "ru-u70l1-nekhvatka", type: "vocab", front: "нехватка", reading: "nekhvatka", meaning: "a shortage", accept: ["not enough of something", "a lack", "running short"], example: { jp: "Нехватка людей была главной причиной, по которой работу пришлось прекращать.", en: "A shortage of people was the main reason why the work had to be stopped." }, drill: { jp: "Нехватка денег была очень большая", en: "The shortage of money was very great" }, hint: "ni-KHVAT-ka — stress on KHVAT, with the scraping х. FEMININE (-а). It takes the GENITIVE: нехватка денег. ⚠️ IT IS NOT A не+X VIOLATION: its parent хватка is taught nowhere, so unit 61 §5(d) does not apply — unlike неудача, which this unit had to refuse." },
      ],
    },
    {
      id: "ru-u70l2",
      unit: 70,
      lesson: 2,
      title: "What went wrong",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how badly a thing went — a failure, a breakdown, the damage done, a thing in short supply — and name a complaint and a claim against someone.",
      items: [
        { id: "ru-u70l2-proval", type: "vocab", front: "провал", reading: "proval", meaning: "a failure", accept: ["a flop", "a complete miss", "coming to nothing"], example: { jp: "Это был полный провал, хотя план казался вполне разумным.", en: "That was a complete failure, although the plan had seemed perfectly sensible." }, drill: { jp: "Это был совсем полный провал", en: "That was a completely total failure" }, hint: "pra-VAL — stress on the last syllable. MASCULINE. ⚠️ Успех from unit 25 is its opposite. Its literal sense is a hole in the ground that something fell into, which is why «провалить экзамен» means to fail an exam." },
        { id: "ru-u70l2-sryv", type: "vocab", front: "срыв", reading: "sryv", meaning: "a breakdown", accept: ["a collapse of nerves", "a plan coming apart", "things falling through"], example: { jp: "Срыв этого договора был неизбежный, потому что сроки никто не выдерживал.", en: "The breakdown of that contract was unavoidable, because nobody was keeping to the deadlines." }, drill: { jp: "Срыв был совсем неизбежный", en: "The breakdown was quite unavoidable" }, hint: "SRYV — one syllable, with the ы sound from unit 5. MASCULINE. ⚠️ Сбой in lesson 1 is a machine failing once; срыв is a plan or a person coming apart. «Нервный срыв» is a nervous breakdown." },
        { id: "ru-u70l2-ushcherb", type: "vocab", front: "ущерб", reading: "ushcherb", meaning: "damage done", accept: ["harm caused", "a loss suffered", "detriment"], example: { jp: "Ущерб был не очень большой, но исход мог быть и хуже.", en: "The damage was not very great, but the outcome could have been worse." }, drill: { jp: "Ущерб оказался очень большой", en: "The damage turned out to be very great" }, hint: "u-SHCHERB — stress on SHCHERB, with the long щ from unit 3. MASCULINE. ⚠️ It is the LEGAL and financial word: «возместить ущерб» means to compensate for damage. Вредный from unit 53 is the adjective harmful, and its noun вред was refused on §D." },
        { id: "ru-u70l2-defitsit", type: "vocab", front: "дефицит", reading: "defitsit", meaning: "a thing in short supply", accept: ["a commodity you cannot get", "something hard to come by", "a deficit in the books"], example: { jp: "Такие книги были дефицитом, и купить их можно было только у знакомых.", en: "Books like that were a thing you could not get, and you could only buy them through acquaintances." }, drill: { jp: "Такие книги были настоящий дефицит", en: "Books like that were a real scarcity" }, hint: "di-fi-TSIT — stress on the last syllable. MASCULINE. ⚠️ Нехватка in lesson 1 is the shortage itself; дефицит is the THING that is short — a Soviet-era word every Russian still uses, and the second sense is the accounting one." },
        { id: "ru-u70l2-zhaloba", type: "vocab", front: "жалоба", reading: "zhaloba", meaning: "a complaint", accept: ["a formal grumble", "a written objection", "a grievance put on paper"], example: { jp: "Жалоба была написана очень спокойно, и именно поэтому её приняли.", en: "The complaint was written very calmly, and that is exactly why it was accepted." }, drill: { jp: "Жалоба была очень спокойная", en: "The complaint was very calm" }, hint: "ZHA-la-ba — stress on the first syllable. FEMININE (-а). ⚠️ In medicine it is also a symptom a patient reports: «на что жалуетесь?» is the first question a Russian doctor asks. Просьба from unit 34 asks for something; a жалоба objects." },
        { id: "ru-u70l2-pretenziya", type: "vocab", front: "претензия", reading: "pretenziya", meaning: "a claim against someone", accept: ["a grievance held against a person", "a demand for redress", "a bone to pick"], example: { jp: "У него есть претензия к начальнику, но сказать о ней он так и не решился.", en: "He has a claim against the boss, but he never brought himself to speak of it." }, drill: { jp: "Его претензия была очень ясная", en: "His claim was very clear" }, hint: "pri-TEN-zi-ya — four syllables, stress on TEN. FEMININE (-я). It takes к + the dative. ⚠️ In the plural «претензии» often means airs and graces — «у него претензии» can mean he thinks too much of himself." },
      ],
    },
    {
      id: "ru-u70l3",
      unit: 70,
      lesson: 3,
      title: "Getting past it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Deal with a difficulty — overcome it, eliminate it, avoid it, prevent it, get the thing working, and get to grips with the detail.",
      items: [
        { id: "ru-u70l3-preodolevat", type: "vocab", front: "преодолевать", reading: "preodolevat", meaning: "to overcome", accept: ["to get over an obstacle", "to surmount", "to work through a difficulty"], example: { jp: "Преодолевать такие препятствия приходится каждый раз, и привыкнуть к этому нельзя.", en: "Such obstacles have to be overcome every time, and one cannot get used to it." }, drill: { jp: "Нужно преодолевать такие препятствия", en: "Such obstacles must be overcome" }, hint: "pri-a-da-li-VAT — five syllables, stress on the last. IMPERFECTIVE; the perfective is преодолеть. ⚠️ Справляться from unit 47 is coping with a job; преодолевать is getting over a BARRIER, and the object is always the obstacle itself." },
        { id: "ru-u70l3-ustranyat", type: "vocab", front: "устранять", reading: "ustranyat", meaning: "to eliminate", accept: ["to remove a cause", "to do away with", "to clear out of the way"], example: { jp: "Устранять следствие не так трудно, как причину, и поэтому так делают почти всегда.", en: "Eliminating a consequence is not as hard as eliminating a cause, and that is why it is almost always done." }, drill: { jp: "Нужно устранять причину этого", en: "The cause of this must be eliminated" }, hint: "us-tra-NYAT — stress on the last syllable. IMPERFECTIVE; the perfective is устранить. ⚠️ Убрать from unit 31 clears a thing away physically; устранять removes a CAUSE or a problem, and it is the formal word." },
        { id: "ru-u70l3-izbegat", type: "vocab", front: "избегать", reading: "izbegat", meaning: "to avoid", accept: ["to keep away from", "to steer clear of", "to dodge something"], example: { jp: "Он старается избегать прямых ответов, и за год к этому все привыкли.", en: "He tries to avoid direct answers, and over a year everyone got used to it." }, drill: { jp: "Он любит избегать прямых ответов", en: "He likes to avoid direct answers" }, hint: "iz-bi-GAT — stress on the last syllable. IMPERFECTIVE; the perfective is избежать. ⚠️ IT TAKES THE GENITIVE: избегать разговора. It is из- + бегать from unit 27 — literally to run out of — and обходить from unit 63 is the gentler word for dodging a question." },
        { id: "ru-u70l3-predotvrashchat", type: "vocab", front: "предотвращать", reading: "predotvrashchat", meaning: "to prevent", accept: ["to head something off", "to stop a thing happening", "to forestall"], example: { jp: "Предотвращать такой сбой дешевле, чем исправлять его потом.", en: "Preventing such a malfunction is cheaper than putting it right afterwards." }, drill: { jp: "Нужно предотвращать такой сбой", en: "Such a malfunction must be prevented" }, hint: "pri-dat-vra-SHCHAT — four syllables, stress on the last, with the long щ. IMPERFECTIVE; the perfective is предотвратить. ⚠️ Избегать is you staying away from a thing; предотвращать is you stopping it happening to anybody." },
        { id: "ru-u70l3-nalazhivat", type: "vocab", front: "налаживать", reading: "nalazhivat", meaning: "to get something working", accept: ["to set up properly", "to put in order", "to sort a system out"], example: { jp: "Налаживать связь между отделами пришлось заново, потому что старый порядок уже не работал.", en: "The link between departments had to be got working again, because the old order no longer worked." }, drill: { jp: "Нужно налаживать связь между отделами", en: "The link between departments must be got working" }, hint: "na-LA-zhi-vat — stress on LA. IMPERFECTIVE; the perfective is наладить. ⚠️ Чинить from unit 57 mends a broken thing; налаживать makes a SYSTEM or a relationship work, and it is what a Russian says about отношения." },
        { id: "ru-u70l3-razbiratsya", type: "vocab", front: "разбираться", reading: "razbiratsya", meaning: "to get to grips with", accept: ["to look into something properly", "to sort out what is going on", "to know a subject well"], example: { jp: "Разбираться в этом вопросе пришлось самому, потому что объяснять никто не хотел.", en: "I had to get to grips with that question myself, because nobody wanted to explain." }, drill: { jp: "Нужно разбираться в этом вопросе", en: "One must get to grips with this question" }, hint: "raz-bi-RAT-sya — stress on RAT. IMPERFECTIVE and REFLEXIVE; the perfective is разобраться. It takes в + the prepositional. ⚠️ ITS SECOND SENSE IS A COMPLIMENT: «он разбирается в технике» means he really knows machinery." },
      ],
    },
    {
      id: "ru-u70l4",
      unit: 70,
      lesson: 4,
      title: "Standing it, and what you gain",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Hold out and come through — withstand it, struggle against it, bail somebody out — and name the effort, the middle ground and the advantage.",
      items: [
        { id: "ru-u70l4-vyderzhivat", type: "vocab", front: "выдерживать", reading: "vyderzhivat", meaning: "to withstand", accept: ["to hold out", "to stand up to", "to keep to a deadline"], example: { jp: "Выдерживать такой порядок целый год может далеко не каждый.", en: "Not everyone at all can withstand such a regime for a whole year." }, drill: { jp: "Трудно выдерживать такой порядок", en: "It is hard to withstand such a regime" }, hint: "vy-DER-zhi-vat — stress on DER. IMPERFECTIVE; the perfective is выдержать. It is вы- + держать from unit 57. ⚠️ Its everyday use is about DEADLINES: «выдерживать сроки» means to keep to them, which is the sense срыв in lesson 2 denies." },
        { id: "ru-u70l4-borotsya", type: "vocab", front: "бороться", reading: "borotsya", meaning: "to struggle", accept: ["to fight against something", "to wrestle with", "to campaign against"], example: { jp: "Бороться с таким порядком можно долго, но результата вряд ли будет.", en: "One can struggle against such a system for a long time, but there will hardly be a result." }, drill: { jp: "Бороться с этим можно долго", en: "One can struggle against this for a long time" }, hint: "ba-ROT-sya — stress on ROT. IMPERFECTIVE and REFLEXIVE, and ⚠️ IT TAKES с + THE INSTRUMENTAL for what you fight: бороться с болезнью. Защищать from unit 59 defends something; бороться attacks a problem." },
        { id: "ru-u70l4-vyruchat", type: "vocab", front: "выручать", reading: "vyruchat", meaning: "to bail someone out", accept: ["to help out of a fix", "to come to the rescue", "to save someone's day"], example: { jp: "Он выручал нас много раз, и просить его снова было уже стыдно.", en: "He bailed us out many times, and it was already shameful to ask him again." }, drill: { jp: "Друзей нужно выручать всегда", en: "Friends must always be bailed out" }, hint: "vy-ru-CHAT — stress on the last syllable. IMPERFECTIVE; the perfective is выручить. ⚠️ Помогать from unit 20 is help of any kind; выручать is help at the moment you are stuck, and it is warm, informal and very common." },
        { id: "ru-u70l4-usilie", type: "vocab", front: "усилие", reading: "usilie", meaning: "an effort", accept: ["exertion", "a push of will", "the work you put in"], example: { jp: "Это потребовало больших усилий, но исход был вполне хороший.", en: "That demanded great efforts, but the outcome was perfectly good." }, drill: { jp: "Это было очень большое усилие", en: "That was a very great effort" }, hint: "u-SI-li-ye — four syllables, stress on SI. NEUTER (-е). ⚠️ ALLOWED against сильный from unit 20 because the §D direction test says «strong» does not hand you «an effort» — and the parent noun сила is taught nowhere in this language. «Без усилий» means effortlessly." },
        { id: "ru-u70l4-kompromiss", type: "vocab", front: "компромисс", reading: "kompromiss", meaning: "a middle ground", accept: ["a deal both sides accept", "meeting halfway", "a settlement of a dispute"], example: { jp: "Компромисс нашли только тогда, когда обе стороны уже устали.", en: "A middle ground was found only when both sides were already tired." }, drill: { jp: "Компромисс нашли очень поздно", en: "The middle ground was found very late" }, hint: "kam-pra-MISS — stress on MISS, and the сс is held a beat longer. MASCULINE. ⚠️ Glossed \"a middle ground\" and NOT \"a compromise\" on purpose: уступка at unit 61 already accepts that word, and one prompt must not have two right answers." },
        { id: "ru-u70l4-preimushchestvo", type: "vocab", front: "преимущество", reading: "preimushchestvo", meaning: "an advantage", accept: ["an edge over others", "a point in your favour", "a head start"], example: { jp: "Главное преимущество этого метода в том, что он гораздо дешевле.", en: "The main advantage of that method is that it is far cheaper." }, drill: { jp: "Главное преимущество метода в цене", en: "The main advantage of the method is in the price" }, hint: "pri-i-MU-shchist-va — five syllables, stress on MU, with the long щ. NEUTER (-о). ⚠️ Note the пре-, not при-: пре- here means over or above, the same пре- as преодолевать in lesson 3." },
      ],
    },
  ],
};
