// RU Unit 63 — Приставочные глаголы ("Prefixed verbs of motion") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Block 1 (u61–u73). Conventions: ru/unit1.js §1–§10 and §A–§D, ru/unit31.js
// §1–§7, ru/unit51.js §1–§5, and THIS BAND's conventions in ru/unit61.js §1–§8.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Comparison and degree` AND IT IS A CARD-FOR-CARD
// DUPLICATE OF A2's u47 Сравнение и возможность: чем · более · менее · самый ·
// сравнение · степень · высокий · низкий · крупный · мелкий · огромный ·
// тяжёлый · мочь · уметь · способность · талант · справляться · добиваться ·
// бы · вероятно · зря · редкий · громкий · плотный. There is no second
// comparison unit's worth of Russian left, and authoring one would have produced
// the A2 failure this band's §2 is written to prevent.
//
// ═════════════════════════════════════════════════════════════════════════════
// WHY THIS SLOT BECAME THE PREFIXED MOTION VERBS, and it is not a free choice.
// ═════════════════════════════════════════════════════════════════════════════
// BOTH earlier bands deferred this topic to B1 BY NAME:
//   unit1.js §5  "Also deferred: … verbs of motion with prefixes (B1)."
//   unit31.js §2 "STILL DEFERRED TO B1 … VERBS OF MOTION WITH PREFIXES. ⚠️ The
//                 unprefixed directional pairs (идти/ходить, ехать/ездить) are
//                 NOT the deferred ones and are taught at u36 — the B1 line is
//                 the PREFIX (приходить, уезжать), not the pair."
// AND NO B1 SLOT OWNED IT. u79–u81 are Grammar 6/7/8 — linked and subordinate
// clauses, passive/causative/indirect, nuance/evidentiality/nominalization — and
// none of the fourteen generic slots had a theme at all until this band's §3
// allocated them. So the largest explicitly-deferred item in the whole course was
// about to ship unbuilt, in a band that had already been told twice to build it.
//
// ★ THE PREFIX IS THE TEACHING, so the unit is built BY PREFIX and not by verb:
//   при- arrival · у- departure · за- a stop on the way · под- approach ·
//   от- withdrawal · об- going round · въ-/вы- in and out · до- as far as ·
//   про- past or through · пере- across. Each lesson runs the same prefix set
//   over a different stem (-ходить on foot, -езжать by vehicle, -носить/-возить
//   carrying), which is exactly how a Russian learner is supposed to meet them:
//   once you know при- + у-, every stem gives you two more verbs for free.
//
// ★ ASPECT. Every front here is an IMPERFECTIVE, as unit1.js §4 requires. ⚠️ AND
//   THAT IS NOT AN ACCIDENT OF THE RULE — it is the only shape that works. The
//   perfectives of these verbs are прийти · уйти · зайти · подойти · приехать ·
//   уехать, which are NOT formed from the imperfective stem at all (ход → й),
//   so each would need its own card, its own gloss and its own paradigm entry,
//   and the gloss would have to separate "to arrive on foot" from "to arrive on
//   foot" — unit31.js §1(c)'s refuse-it case. They are met in examples instead.
//
// ⚠️ THREE REFUSED ON unit1.js §D, and they are the three a seat will miss:
//   `входить` and `выходить` — §D against `вход` and `выход`, BOTH carded at u12
//        (Надписи, the signs unit, where ВХОД and ВЫХОД are the printed words).
//        A learner who has read ВЫХОД over a door is handed "to go out".
//        ★ THE PREFIXES SURVIVE ANYWAY: въезжать and выезжать carry в- and вы-
//        on the -езжать stem, so the lesson teaches the prefix without the
//        duplicate lexeme. That is the whole reason l2 exists.
//   `переходить` — §D against `переход` (u36, "a crossing"). ПЕРЕ- is taught on
//        the -носить stem instead (переносить, l3).
//   `относить` — §D-adjacent against `относительно`, which THIS BLOCK cards one
//        unit earlier at u62l4, and against `отношение` (u39). Dropped; `от-` is
//        taught on -ходить (отходить, l1).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT63 = {
  id: "ru-u63",
  lang: "ru",
  title: "Приставочные глаголы",
  order: 63,
  stage: "b1",
  lessons: [
    {
      id: "ru-u63l1",
      unit: 63,
      lesson: 1,
      title: "On foot — the six prefixes",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Put six prefixes on one walking verb — arrive, leave, drop in, come up to someone, step away, and go round something.",
      items: [
        { id: "ru-u63l1-prikhodit", type: "vocab", front: "приходить", reading: "prikhodit", meaning: "to arrive on foot", accept: ["to come", "to turn up", "to get there walking"], example: { jp: "Он всегда приходит на работу раньше всех, хотя живёт далеко от офиса.", en: "He always arrives at work earlier than everyone, although he lives far from the office." }, drill: { jp: "Он должен приходить вовремя", en: "He must arrive on time" }, hint: "pri-kha-DIT — stress on the last syllable, and the о reduces to a. IMPERFECTIVE; the perfective прийти is built on a different stem (ход → й), which is why it is not a card here. при- is the ARRIVAL prefix and does the same job on every stem in this unit." },
        { id: "ru-u63l1-ukhodit", type: "vocab", front: "уходить", reading: "ukhodit", meaning: "to leave on foot", accept: ["to go away", "to set off walking", "to depart"], example: { jp: "Не надо уходить так рано, мы ещё не говорили о главном.", en: "There is no need to leave so early; we have not yet spoken about the main thing." }, drill: { jp: "Пора уходить домой", en: "It is time to leave for home" }, hint: "u-kha-DIT — stress on the last syllable. IMPERFECTIVE; the perfective is уйти. у- is the DEPARTURE prefix, the exact opposite of при-. ⚠️ It also means to be spent: «на это уходит много денег»." },
        { id: "ru-u63l1-zakhodit", type: "vocab", front: "заходить", reading: "zakhodit", meaning: "to drop in", accept: ["to call in on someone", "to stop by", "to pop in"], example: { jp: "Он любит заходить к соседям по вечерам, хотя они редко ждут гостей.", en: "He likes dropping in on the neighbours in the evenings, although they rarely expect guests." }, drill: { jp: "Можно заходить в любое время", en: "You may drop in at any time" }, hint: "za-kha-DIT — stress on the last syllable. IMPERFECTIVE; the perfective is зайти. за- is the STOP-ON-THE-WAY prefix: you were going somewhere else and called in. It takes к + the dative for a person, в/на + the accusative for a place." },
        { id: "ru-u63l1-podkhodit", type: "vocab", front: "подходить", reading: "podkhodit", meaning: "to come up to someone", accept: ["to approach", "to walk over to", "to draw near"], example: { jp: "Этот цвет тебе очень подходит, и к нему подходит твой старый шарф.", en: "That colour suits you very well, and your old scarf goes with it." }, drill: { jp: "Не надо подходить так близко", en: "There is no need to approach so close" }, hint: "pat-kha-DIT — stress on the last syllable. IMPERFECTIVE; the perfective is подойти. под- is the APPROACH prefix. ⚠️ ITS SECOND SENSE IS THE COMMON ONE and the example teaches it: «это мне подходит» means that suits me." },
        { id: "ru-u63l1-otkhodit", type: "vocab", front: "отходить", reading: "otkhodit", meaning: "to step away", accept: ["to move back", "to pull out", "to withdraw a little"], example: { jp: "Поезд скоро отходит, поэтому нам нужно спешить.", en: "The train is leaving soon, so we need to hurry." }, drill: { jp: "Нельзя отходить от машины", en: "You must not step away from the car" }, hint: "at-kha-DIT — stress on the last syllable. IMPERFECTIVE; the perfective is отойти. от- is the WITHDRAWAL prefix and takes от + the genitive. ⚠️ It is also the verb for a train or a bus pulling out of a station." },
        { id: "ru-u63l1-obkhodit", type: "vocab", front: "обходить", reading: "obkhodit", meaning: "to go round something", accept: ["to walk around", "to skirt", "to avoid by going round"], example: { jp: "Он старается обходить этот вопрос, потому что говорить об этом ему трудно.", en: "He tries to go round that question, because speaking about it is hard for him." }, drill: { jp: "Мы будем обходить город пешком", en: "We will go round the town on foot" }, hint: "ab-kha-DIT — stress on the last syllable. IMPERFECTIVE; the perfective is обойти. об- is the GOING-ROUND prefix. ⚠️ Its figurative use is what the example teaches: обходить вопрос is to dodge a question." },
      ],
    },
    {
      id: "ru-u63l2",
      unit: 63,
      lesson: 2,
      title: "By vehicle — the same prefixes again",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Run the same prefixes over the driving verb — arrive, depart, drive in, drive out, get as far as, and drive past.",
      items: [
        { id: "ru-u63l2-priezzhat", type: "vocab", front: "приезжать", reading: "priezzhat", meaning: "to arrive by vehicle", accept: ["to come by car or train", "to get in", "to roll up"], example: { jp: "Гости будут приезжать весь день, поэтому обед будет поздно.", en: "The guests will be arriving all day, so lunch will be late." }, drill: { jp: "Они будут приезжать каждый год", en: "They will arrive every year" }, hint: "pri-yezh-ZHAT — stress on the last syllable, and the зж is one long zh. IMPERFECTIVE; the perfective is приехать. Same при- as приходить, different stem: -езжать is the WHEELS verb." },
        { id: "ru-u63l2-uezzhat", type: "vocab", front: "уезжать", reading: "uezzhat", meaning: "to depart by vehicle", accept: ["to drive off", "to go away by train", "to leave town"], example: { jp: "Я совсем не хочу уезжать из этого города, но работа есть только там.", en: "I do not want to leave this town at all, but there is work only there." }, drill: { jp: "Пора уезжать на вокзал", en: "It is time to set off for the station" }, hint: "u-yezh-ZHAT — stress on the last syllable. IMPERFECTIVE; the perfective is уехать. It takes из + the genitive for the place you leave: уезжать из города." },
        { id: "ru-u63l2-vezzhat", type: "vocab", front: "въезжать", reading: "vezzhat", meaning: "to drive in", accept: ["to enter by car", "to drive into a place", "to move in"], example: { jp: "Въезжать в город на машине теперь дорого, поэтому люди ездят на метро.", en: "Driving into the town by car is expensive now, so people travel by metro." }, drill: { jp: "Нельзя въезжать в этот двор", en: "You may not drive into this yard" }, hint: "vyezh-ZHAT — stress on the last syllable. ⚠️ THE ъ IS SILENT AND IS DROPPED FROM THE READING, as unit 1 §1 requires: въезжать → \"vezzhat\". IMPERFECTIVE; the perfective is въехать. ⚠️ в- had to be taught on THIS stem: входить is refused — see this unit's header." },
        { id: "ru-u63l2-vyezzhat", type: "vocab", front: "выезжать", reading: "vyezzhat", meaning: "to drive out", accept: ["to set out by car", "to pull out of a place", "to drive away from"], example: { jp: "Мы будем выезжать очень рано, чтобы не ехать в жару.", en: "We will set out very early, so as not to drive in the heat." }, drill: { jp: "Нужно выезжать рано утром", en: "We must set out early in the morning" }, hint: "vy-yezh-ZHAT — stress on the last syllable. IMPERFECTIVE; the perfective is выехать. вы- is the OUT prefix and is always stressed in the perfective (ВЫехать) — a quirk of this one prefix." },
        { id: "ru-u63l2-doezzhat", type: "vocab", front: "доезжать", reading: "doezzhat", meaning: "to get as far as", accept: ["to reach a point", "to ride up to", "to make it to a place"], example: { jp: "Этот автобус не доезжает до площади, поэтому нужно идти пешком.", en: "That bus does not get as far as the square, so you have to walk." }, drill: { jp: "Можно доезжать до площади", en: "You can get as far as the square" }, hint: "da-yezh-ZHAT — stress on the last syllable. IMPERFECTIVE; the perfective is доехать. до- is the AS-FAR-AS prefix and takes до + the genitive, which is the same до carded at u33." },
        { id: "ru-u63l2-proezzhat", type: "vocab", front: "проезжать", reading: "proezzhat", meaning: "to drive past", accept: ["to go through a place", "to pass by in a vehicle", "to cover a distance"], example: { jp: "Каждый день мы проезжаем мимо старой церкви, но никогда туда не заходим.", en: "Every day we drive past the old church, but we never call in there." }, drill: { jp: "Мы будем проезжать мимо театра", en: "We will drive past the theatre" }, hint: "pra-yezh-ZHAT — stress on the last syllable. IMPERFECTIVE; the perfective is проехать. про- means PAST or THROUGH and pairs with мимо from u33. ⚠️ «Проехать остановку» means to miss your stop." },
      ],
    },
    {
      id: "ru-u63l3",
      unit: 63,
      lesson: 3,
      title: "Carrying and bringing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say who brought what where — carried here, carried away, moved across, brought by car, taken away by car, and carried inside.",
      items: [
        { id: "ru-u63l3-prinosit", type: "vocab", front: "приносить", reading: "prinosit", meaning: "to bring something here", accept: ["to fetch", "to carry something to someone", "to bring along"], example: { jp: "Не забывай приносить документы, без них в банке ничего не сделают.", en: "Do not forget to bring the documents; without them nothing will be done at the bank." }, drill: { jp: "Нужно приносить документы сюда", en: "The documents must be brought here" }, hint: "pri-na-SIT — stress on the last syllable. IMPERFECTIVE; the perfective is принести. The stem is нести from u36, so при- + нести = bring. ⚠️ It also works abstractly: «приносить пользу», to be of use." },
        { id: "ru-u63l3-unosit", type: "vocab", front: "уносить", reading: "unosit", meaning: "to carry something away", accept: ["to take away by hand", "to remove", "to clear something off"], example: { jp: "Официант стал уносить посуду, хотя гости ещё сидели за столом.", en: "The waiter started clearing the dishes away, although the guests were still sitting at the table." }, drill: { jp: "Не надо уносить эти книги", en: "There is no need to carry these books away" }, hint: "u-na-SIT — stress on the last syllable. IMPERFECTIVE; the perfective is унести. у- + нести, the same у- as уходить and уезжать." },
        { id: "ru-u63l3-perenosit", type: "vocab", front: "переносить", reading: "perenosit", meaning: "to move something across", accept: ["to shift to another place", "to transfer", "to reschedule"], example: { jp: "Собрание нужно переносить на другой день, потому что начальника нет в городе.", en: "The meeting has to be moved to another day, because the boss is not in town." }, drill: { jp: "Нужно переносить этот стол", en: "This table has to be moved" }, hint: "pi-ri-na-SIT — four syllables, stress on the last. IMPERFECTIVE; the perfective is перенести. ⚠️ пере- means ACROSS, and it is taught on this stem because переходить is refused — see this unit's header. Its second sense is to reschedule, and its third is to endure: «он плохо переносит жару»." },
        { id: "ru-u63l3-privozit", type: "vocab", front: "привозить", reading: "privozit", meaning: "to bring by vehicle", accept: ["to deliver", "to bring in a car", "to import"], example: { jp: "Отец всегда привозит детям подарки из командировки, даже если она была короткая.", en: "Father always brings the children presents from a work trip, even if it was a short one." }, drill: { jp: "Он будет привозить овощи сюда", en: "He will bring vegetables here" }, hint: "pri-va-ZIT — stress on the last syllable. IMPERFECTIVE; the perfective is привезти. The stem is везти from u36, so -возить is the BY-VEHICLE partner of -носить." },
        { id: "ru-u63l3-uvozit", type: "vocab", front: "увозить", reading: "uvozit", meaning: "to take away by vehicle", accept: ["to drive something off", "to cart away", "to carry off in a car"], example: { jp: "Машина будет увозить мусор каждое утро, и двор станет чистым.", en: "A lorry will take the rubbish away every morning, and the yard will become clean." }, drill: { jp: "Нельзя увозить эти вещи", en: "These things may not be taken away" }, hint: "u-va-ZIT — stress on the last syllable. IMPERFECTIVE; the perfective is увезти. у- + везти, exactly parallel to уносить." },
        { id: "ru-u63l3-vnosit", type: "vocab", front: "вносить", reading: "vnosit", meaning: "to carry something in", accept: ["to bring inside", "to carry into a room", "to put in"], example: { jp: "Они будут вносить мебель в новую квартиру целый день.", en: "They will be carrying the furniture into the new flat all day." }, drill: { jp: "Нужно вносить мебель здесь", en: "The furniture has to be carried in here" }, hint: "vna-SIT — stress on the last syllable. IMPERFECTIVE; the perfective is внести. ⚠️ Its abstract use is everywhere in official Russian: «вносить изменения», to make changes; «внести взнос», to pay a contribution." },
      ],
    },
    {
      id: "ru-u63l4",
      unit: 63,
      lesson: 4,
      title: "Other stems, the same prefixes",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Carry the prefixes onto the other motion stems — walk past, arrive by air, fly off, run away — and go up and down.",
      items: [
        { id: "ru-u63l4-prokhodit", type: "vocab", front: "проходить", reading: "prokhodit", meaning: "to walk past", accept: ["to go through on foot", "to pass by walking", "to cover ground"], example: { jp: "Мы проходим мимо школы каждый день, и дети всегда смотрят в окно.", en: "We walk past the school every day, and the children always look out of the window." }, drill: { jp: "Можно проходить через двор", en: "One may walk through the yard" }, hint: "pra-kha-DIT — stress on the last syllable. IMPERFECTIVE; the perfective is пройти. The same про- as проезжать. ⚠️ It is also how Russian says time passes — «время проходит» — and how a lesson covers material: «мы проходим падежи»." },
        { id: "ru-u63l4-priletat", type: "vocab", front: "прилетать", reading: "priletat", meaning: "to arrive by air", accept: ["to fly in", "to land", "to come by plane"], example: { jp: "Птицы будут прилетать весной, когда станет тепло.", en: "The birds will arrive in the spring, when it gets warm." }, drill: { jp: "Самолёт будет прилетать вечером", en: "The plane will arrive in the evening" }, hint: "pri-li-TAT — stress on the last syllable. IMPERFECTIVE; the perfective is прилететь. при- on летать from u36, so the prefix set carries onto a third stem without any new learning." },
        { id: "ru-u63l4-uletat", type: "vocab", front: "улетать", reading: "uletat", meaning: "to fly off", accept: ["to take off", "to depart by air", "to leave by plane"], example: { jp: "Она не хотела улетать так скоро, но билет был уже у неё.", en: "She did not want to fly off so soon, but she already had the ticket." }, drill: { jp: "Нам пора улетать домой", en: "It is time for us to fly home" }, hint: "u-li-TAT — stress on the last syllable. IMPERFECTIVE; the perfective is улететь. у- again, the same departure prefix as уходить, уезжать and уносить — four stems, one meaning." },
        { id: "ru-u63l4-ubegat", type: "vocab", front: "убегать", reading: "ubegat", meaning: "to run away", accept: ["to run off", "to escape on foot", "to bolt"], example: { jp: "Собака стала убегать из двора, и хозяин сделал новый забор.", en: "The dog started running away from the yard, and the owner made a new fence." }, drill: { jp: "Детям нельзя убегать далеко", en: "The children must not run far away" }, hint: "u-bi-GAT — stress on the last syllable. IMPERFECTIVE; the perfective is убежать. у- on бегать from u27. ⚠️ Russian also says «молоко убежало» of milk boiling over." },
        { id: "ru-u63l4-podnimatsya", type: "vocab", front: "подниматься", reading: "podnimatsya", meaning: "to go up", accept: ["to climb", "to rise", "to make your way upwards"], example: { jp: "Нам нужно подниматься по лестнице, потому что лифт не работает.", en: "We have to go up the stairs, because the lift is not working." }, drill: { jp: "Трудно подниматься на гору", en: "It is hard to climb a mountain" }, hint: "pad-ni-MAT-sya — stress on MAT. IMPERFECTIVE and REFLEXIVE; the perfective is подняться. It is the -ся partner of поднимать from u57, which raises a THING; подниматься is you going up. Also used of prices: «цены поднимаются»." },
        { id: "ru-u63l4-spuskatsya", type: "vocab", front: "спускаться", reading: "spuskatsya", meaning: "to go down", accept: ["to descend", "to come downstairs", "to make your way downwards"], example: { jp: "Спускаться вниз было не так трудно, как подниматься наверх.", en: "Going down was not as hard as going up." }, drill: { jp: "Нужно спускаться очень медленно", en: "One must go down very slowly" }, hint: "spus-KAT-sya — stress on KAT. IMPERFECTIVE and REFLEXIVE; the perfective is спуститься. It is the opposite of подниматься, and pairs with вниз from u36 exactly as подниматься pairs with вверх." },
      ],
    },
  ],
};
