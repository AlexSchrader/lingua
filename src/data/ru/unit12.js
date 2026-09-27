// RU Unit 12 — Надписи ("Signs") — A1
// ─────────────────────────────────────────────────────────────────────────────
// RETHEMED FROM THE SCAFFOLD'S "Characters 2" — see unit9.js's header for the
// whole argument, and unit1.js §10 for the language-wide decision.
//
// SHORT VERSION. `npm run scaffold:lang` stamped five "Characters N" slots
// (u9 · u12 · u15 · u18 · u21) because JAPANESE drips kanji in forever. Russian
// has 33 letters and the pre-A1 band finishes them at u6, so there is nothing
// left to interleave; `lint.js` hard-errors on /^Characters \d+$/ once a unit is
// authored, and authoring one here would mean inventing a need the language does
// not have. Block 1 rethemed its slot (u9) to internationalisms, where the
// MEANING is free so the lesson is pure Cyrillic decoding.
//
// WHY THIS SLOT BECAME SIGNS, and not a second internationalism unit. u9 already
// spent the best of the international vocabulary. The other half of "the script is
// the only difficulty" is the PRINTED PUBLIC WORD: вход · выход · касса ·
// ОСТОРОЖНО. A learner standing in front of a Russian door is doing exactly the
// u9 exercise — turning Cyrillic into sense with no grammar involved — except the
// meaning is NOT free, and getting it wrong has a consequence. It is the most
// useful decoding a beginner can do, and it consolidates u11's numerals in l4.
// Blocks 2 and 3's other rethemes: u15 → Дом и вещи, u18 → Одежда и покупки,
// u21 → still block 3's (see the hand-back note in unit20.js).
//
// ⚠️ TWO FLEETING-VOWEL FRONTS HERE, and they constrain the drills. `угол` and
// `огонь` drop their vowel the moment they inflect (угол → угла, огонь → огня).
// A drill must contain the front VERBATIM, so every drill on those two keeps the
// noun in the nominative. That is not a workaround: unit1.js §5 already says an
// inflected form is never a card, and it is why `восемь` names the same pattern.
//
// ⚠️ открыто AND закрыто ARE IMPERSONAL, and the examples respect it. Открыто on
// a door agrees with nothing; with a noun the form changes (музей открыт, касса
// открыта). Writing "музей открыто" is the commonest learner error with these two
// words, so no sentence here models it.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT12 = {
  id: "ru-u12",
  lang: "ru",
  title: "Надписи",
  order: 12,
  stage: "a1",
  lessons: [
    {
      id: "ru-u12l1",
      unit: 12,
      lesson: 1,
      title: "Get into a building, and out again",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read a Russian door and a Russian counter, and know whether you can go in and where to pay.",
      items: [
        { id: "ru-u12l1-vkhod", type: "vocab", front: "вход", reading: "vkhod", meaning: "an entrance", accept: ["entrance", "the way in", "entry"], example: { jp: "Вход в музей здесь, и он уже открыт.", en: "The entrance to the museum is here, and it is already open." }, drill: { jp: "Здесь вход в театр", en: "Here is the entrance to the theatre" }, hint: "FKHOT, one syllable — the в says f in front of the voiceless х, and the final д goes quiet and says t. Masculine. It is в + ход, in + going: the going-in." },
        { id: "ru-u12l1-vykhod", type: "vocab", front: "выход", reading: "vykhod", meaning: "an exit", accept: ["exit", "the way out", "the exit"], example: { jp: "Где выход, я уже не понимаю.", en: "Where the exit is, I no longer understand." }, drill: { jp: "Выход в парк там", en: "The exit to the park is over there" }, hint: "VY-khat, stress first — and here the в keeps its v, because вы- is a whole syllable. Masculine, and the same ход as вход: вы + ход, out + going. Every Russian public building signs both." },
        { id: "ru-u12l1-otkryto", type: "vocab", front: "открыто", reading: "otkryto", meaning: "it is open", accept: ["open", "we are open"], example: { jp: "Сегодня здесь открыто, и это очень хорошо.", en: "It is open here today, and that is very good." }, drill: { jp: "Сегодня уже открыто", en: "It is open already today" }, hint: "at-KRY-ta, stress on KRY. This is the IMPERSONAL form: Открыто on a door agrees with nothing at all. Put a noun in and it changes — музей открыт, касса открыта — which is the mistake to avoid." },
        { id: "ru-u12l1-zakryto", type: "vocab", front: "закрыто", reading: "zakryto", meaning: "it is closed", accept: ["closed", "we are closed", "shut"], example: { jp: "Уже поздно, и здесь закрыто.", en: "It is late already, and it is closed here." }, drill: { jp: "Здесь всегда закрыто", en: "It is always closed here" }, hint: "za-KRY-ta, stress on KRY — открыто with за- swapped for от-, the pair Russian uses for open and shut everywhere. Impersonal in exactly the same way: музей закрыт, касса закрыта." },
        { id: "ru-u12l1-pereryv", type: "vocab", front: "перерыв", reading: "pereryv", meaning: "a break", accept: ["break", "an interval", "a closed period"], example: { jp: "Сейчас перерыв, и здесь закрыто.", en: "It is the lunch break now, and it is closed here." }, drill: { jp: "У нас сейчас перерыв", en: "We are on a break right now" }, hint: "pi-ri-RYF, stress at the end, and the final в says f. Masculine. A Russian shop hangs ПЕРЕРЫВ on the door at lunchtime: closed for now, back later — which is NOT the same message as закрыто." },
        { id: "ru-u12l1-kassa", type: "vocab", front: "касса", reading: "kassa", meaning: "a till", accept: ["cash desk", "the checkout", "a ticket office"], example: { jp: "Касса там, а вход здесь.", en: "The till is over there, and the entrance is here." }, drill: { jp: "Где здесь касса", en: "Where is the till here" }, hint: "KAS-sa, stress first, and the double с really is held long. Feminine (-а). It is the window where you pay: a shop till, a theatre box office and a station ticket desk are all касса." },
      ],
    },
    {
      id: "ru-u12l2",
      unit: 12,
      lesson: 2,
      title: "Find your way around inside",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read the signs inside a building and find the lift, the toilet or your room number.",
      items: [
        { id: "ru-u12l2-lift", type: "vocab", front: "лифт", reading: "lift", meaning: "a lift", accept: ["elevator", "the lift", "the elevator"], example: { jp: "Лифт здесь не работает, и это очень плохо.", en: "The lift does not work here, and that is very bad." }, drill: { jp: "Наш лифт уже работает", en: "Our lift is working again" }, hint: "LIFT, one syllable — the English word borrowed whole. Masculine. The gloss keeps the article on purpose: lift on its own IS the reading, and a card whose prompt spells its own answer teaches nothing." },
        { id: "ru-u12l2-tualet", type: "vocab", front: "туалет", reading: "tualet", meaning: "a toilet", accept: ["toilet", "the toilet", "a lavatory", "the loo"], example: { jp: "Туалет на нашем этаже, и это хорошо.", en: "The toilet is on our floor, and that is good." }, drill: { jp: "Туалет здесь на этаже", en: "The toilet is here on this floor" }, hint: "tu-a-LYET, stress at the end, and the у and а are two separate vowels in a row. Masculine. Doors are marked Ж for women and М for men, which is worth knowing before you need it." },
        { id: "ru-u12l2-nomer", type: "vocab", front: "номер", reading: "nomer", meaning: "a number", accept: ["a room number", "a hotel room", "the number"], example: { jp: "Ваш номер там, а наш здесь.", en: "Your room is over there, and ours is here." }, drill: { jp: "Наш номер уже здесь", en: "Our number is here already" }, hint: "NO-mir, stress first. Masculine. It is a number you can point at — a hotel room, a house number, a telephone number — never a quantity you count. Its plural shifts the stress to the ending: номера." },
        { id: "ru-u12l2-zal", type: "vocab", front: "зал", reading: "zal", meaning: "a hall", accept: ["hall", "an auditorium", "a large room"], example: { jp: "В нашем театре два зала, и это хорошо.", en: "Our theatre has two halls, and that is good." }, drill: { jp: "Зал в театре очень старый", en: "The hall in the theatre is very old" }, hint: "ZAL, one syllable. Masculine. A big public room, and Russian uses it for all of them: a concert зал, a station waiting зал, a museum зал. Its plural is залы." },
        { id: "ru-u12l2-lestnitsa", type: "vocab", front: "лестница", reading: "lestnitsa", meaning: "a staircase", accept: ["stairs", "the stairs", "a stairway"], example: { jp: "Лестница здесь, а лифт там.", en: "The staircase is here, and the lift is over there." }, drill: { jp: "Наша лестница очень старая", en: "Our staircase is very old" }, hint: "LYES-ni-tsa, stress first — AND THE т IS SILENT. стн collapses in speech, exactly as зд does in поздно. Feminine (-а). Russian counts a staircase as one thing, where English says stairs." },
        { id: "ru-u12l2-ugol", type: "vocab", front: "угол", reading: "ugol", meaning: "a corner", accept: ["corner", "the corner", "an angle"], example: { jp: "Вот угол, и там уже наш дом.", en: "Here is the corner, and our house is just there." }, drill: { jp: "Здесь угол нашего дома", en: "Here is the corner of our house" }, hint: "U-gal, stress first. Masculine. The о vanishes the moment the word changes — угол, but угла and на углу — the same fleeting vowel you met in восемь. It is a corner and a geometric angle both." },
      ],
    },
    {
      id: "ru-u12l3",
      unit: 12,
      lesson: 3,
      title: "Read a warning before you walk into it",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read a Russian warning and tell be-careful apart from do-not.",
      items: [
        { id: "ru-u12l3-ostorozhno", type: "vocab", front: "осторожно", reading: "ostorozhno", meaning: "carefully", accept: ["be careful", "watch out", "with care"], example: { jp: "Осторожно! Наша лестница очень старая.", en: "Careful! Our staircase is very old." }, drill: { jp: "Осторожно здесь работает машина", en: "Careful, a machine is working here" }, hint: "as-ta-ROZH-na, stress on ROZH, and all three unstressed о reduce to a. An adverb, so it stands alone on a sign. Said to a person it means take care; printed on a wall it means mind what is behind it." },
        { id: "ru-u12l3-opasno", type: "vocab", front: "опасно", reading: "opasno", meaning: "it is dangerous", accept: ["dangerous", "danger", "unsafe"], example: { jp: "Здесь очень опасно, и это не секрет.", en: "It is very dangerous here, and that is no secret." }, drill: { jp: "Здесь всегда опасно", en: "It is always dangerous here" }, hint: "a-PAS-na, stress on PAS. Impersonal, like открыто — Опасно on its own is a whole warning. With a noun you need the adjective: опасная дорога, a dangerous road." },
        { id: "ru-u12l3-vnimanie", type: "vocab", front: "внимание", reading: "vnimanie", meaning: "attention", accept: ["notice", "your attention", "be aware"], example: { jp: "Внимание! Сегодня лифт не работает.", en: "Attention! The lift is not working today." }, drill: { jp: "Внимание здесь уже закрыто", en: "Attention, it is closed here now" }, hint: "vni-MA-ni-ye, stress on MA, and the -ие at the end is said ni-ye in two beats. NEUTER (-е). ВНИМАНИЕ opens an announcement the way English uses attention or notice." },
        { id: "ru-u12l3-ogon", type: "vocab", front: "огонь", reading: "ogon", meaning: "fire", accept: ["a fire", "a flame", "a light (for a cigarette)"], example: { jp: "Осторожно, здесь огонь!", en: "Careful, there is fire here!" }, drill: { jp: "Здесь огонь и это опасно", en: "There is fire here and it is dangerous" }, hint: "a-GON, stress at the end. MASCULINE despite the -ь ending, which is exactly why unit1.js §3 makes the gender compulsory on every -ь noun. The о drops when it changes: огонь, огня. It is a live flame, not an emergency — that is пожар." },
        { id: "ru-u12l3-kurit", type: "vocab", front: "курить", reading: "kurit", meaning: "to smoke", accept: ["smoke", "to have a cigarette"], example: { jp: "Здесь нельзя курить, и это правильно.", en: "You may not smoke here, and that is right." }, drill: { jp: "В зале нельзя курить", en: "You may not smoke in the hall" }, hint: "ku-RIT, stress at the end. Imperfective infinitive, the form every Russian verb is headworded in here (unit1.js §4). НЕ КУРИТЬ on a sign is a bare infinitive — which is how Russian prints a prohibition." },
        { id: "ru-u12l3-srochno", type: "vocab", front: "срочно", reading: "srochno", meaning: "urgently", accept: ["urgent", "right away", "as a matter of urgency"], example: { jp: "Мне срочно нужно к врачу.", en: "I urgently need to get to the doctor." }, drill: { jp: "Это срочно и очень нужно", en: "This is urgent and very necessary" }, hint: "SROCH-na, stress first. An adverb. СРОЧНО stamped on a door or a form means deal with this now, and Russian offices use it far more freely than English uses urgent." },
      ],
    },
    {
      id: "ru-u12l4",
      unit: 12,
      lesson: 4,
      title: "Read a price tag",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read a Russian price tag and say whether something is expensive or cheap.",
      items: [
        { id: "ru-u12l4-tsena", type: "vocab", front: "цена", reading: "tsena", meaning: "a price", accept: ["price", "the price", "the cost"], example: { jp: "Цена уже на билете, и это хорошо.", en: "The price is on the ticket already, and that is good." }, drill: { jp: "Цена уже здесь", en: "The price is here already" }, hint: "tsi-NA, stress at the end, so the е reduces towards i. Feminine (-а). Its plural throws the stress the other way — це́ны — which is the mobile stress Russian nouns do constantly." },
        { id: "ru-u12l4-rubl", type: "vocab", front: "рубль", reading: "rubl", meaning: "a rouble", accept: ["rouble", "ruble", "the rouble"], example: { jp: "Один рубль это очень немного.", en: "One rouble is very little." }, drill: { jp: "Это только один рубль", en: "That is only one rouble" }, hint: "RUBL, one syllable, and the бль at the end is a single cluster with no vowel in it. MASCULINE (-ь). After два, три, четыре it becomes рубля; after пять and up, рублей." },
        { id: "ru-u12l4-kopeyka", type: "vocab", front: "копейка", reading: "kopeyka", meaning: "a kopeck", accept: ["kopeck", "a penny", "the smallest coin"], example: { jp: "Копейка сейчас это уже ничего.", en: "A kopeck nowadays is nothing at all." }, drill: { jp: "Копейка это очень немного", en: "A kopeck is very little" }, hint: "ka-PYEY-ka, stress on PYEY. Feminine (-а). A hundred of them make one рубль and nobody spends them any more — but the word is on every old price, and in the proverb копейка рубль берёт." },
        { id: "ru-u12l4-skidka", type: "vocab", front: "скидка", reading: "skidka", meaning: "a discount", accept: ["discount", "a reduction", "money off"], example: { jp: "Сегодня здесь скидка, и это очень хорошо.", en: "There is a discount here today, and that is very good." }, drill: { jp: "У нас сегодня скидка", en: "We have a discount today" }, hint: "SKIT-ka, stress first — the д says t before the к, which is the devoicing rule from unit 6 working inside a word. Feminine (-а). СКИДКИ in the window is the Russian sale sign." },
        { id: "ru-u12l4-dorogo", type: "vocab", front: "дорого", reading: "dorogo", meaning: "it is expensive", accept: ["expensive", "costly", "dear"], example: { jp: "Это очень дорого, и я не хочу.", en: "That is very expensive, and I do not want it." }, drill: { jp: "Здесь всё очень дорого", en: "Everything here is very expensive" }, hint: "DO-ra-ga, stress first, and the two о after it both reduce to a. An adverb: Это дорого. Do not confuse it with дорогой, which means expensive AND dear as in the opening of a letter." },
        { id: "ru-u12l4-deshevo", type: "vocab", front: "дёшево", reading: "dyoshevo", meaning: "it is cheap", accept: ["cheap", "inexpensive", "not expensive"], example: { jp: "Здесь дёшево, и это очень приятно.", en: "It is cheap here, and that is very pleasant." }, drill: { jp: "Сегодня здесь очень дёшево", en: "It is very cheap here today" }, hint: "DYO-shi-va, stress on the ё — and ё is ALWAYS the stressed vowel in Russian, so writing it tells you the stress for free (unit1.js §7). Its opposite is дорого." },
      ],
    },
  ],
};
