// RU Unit 9 — Знакомые слова ("Familiar words") — A1
// ─────────────────────────────────────────────────────────────────────────────
// WHY THIS UNIT IS NOT WHAT THE SCAFFOLD CALLED IT
// ─────────────────────────────────────────────────────────────────────────────
// `npm run scaffold:lang` stamped this slot "Characters 1", one of five
// interleaved character units (u9 · u12 · u15 · u18 · u21). That strand is a
// JAPANESE shape: kanji arrive in a steady drip forever, so a course keeps
// coming back to them. RUSSIAN HAS NO SUCH STRAND — there are 33 letters, the
// pre-A1 band teaches all of them by u6, and there is nothing left to interleave.
// Authoring "Characters 1" here would mean inventing a need the language does
// not have. CLAUDE.md is explicit that a scaffold slot title is a placeholder
// and retheming it is ordinary authoring, not an escalation ("No front language
// — every language is built from its own root"), and unit1.js §10 records the
// decision for the whole language.
//
// SO WHAT IS THE HONEST RUSSIAN EQUIVALENT? A lesson where the SCRIPT is the only
// difficulty. Russian has hundreds of internationalisms and cognates whose
// meaning is nearly free to an English speaker — метро, банк, телефон,
// компьютер — and a card on one of those is a pure decoding exercise: the
// learner's whole job is to turn Cyrillic into sound and sense. That is exactly
// what a character unit is FOR, delivered by the only mechanism Russian offers.
// Every card here also carries its stress, because "you can read it" and "you can
// say it" are different skills and the second one is where these words bite:
// ресторан is ris-ta-RAN, not res-to-ran.
//
// ⚠️ THE TRAP THIS UNIT IS BUILT AROUND — unit1.js §9. An internationalism must
// NOT gloss to its own transliteration. `produceIsFreePass` (src/store/cardRouting.js)
// fires when `checkProduce(item.meaning, item)` passes, and for a non-ja language
// checkProduce compares `normalizeReading(typed)` against `normalizeReading(reading)`.
// So `банк` glossed "bank" accepts "bank" — the prompt spells its own answer and
// the card teaches nothing. Every gloss here therefore carries an article or a
// parenthetical, or is a different English word outright:
//     банк  → "a bank"       ("abank" ≠ "bank")
//     спорт → "sport (the activity)"
//     метро → "the underground"
// Measured 2026-09-27 on all 24 items: 0 free passes, and 0 for meaningIsFreePass.
//
// ⚠️ Example scope is NOT gated for Russian — see unit7.js's header. Run
// `node scripts/scope-ru.mjs 7,8,9,10`; it must report 0.
//
// NOTE FOR BLOCKS 2 AND 3: u12 · u15 · u18 · u21 are the same scaffold slot and
// the same non-problem. Retheme them the same way — there is far more
// international vocabulary than four more units could hold.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT9 = {
  id: "ru-u9",
  lang: "ru",
  title: "Знакомые слова",
  order: 9,
  stage: "a1",
  lessons: [
    {
      id: "ru-u9l1",
      unit: 9,
      lesson: 1,
      title: "Read your way across a city",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Decode a Russian transport word on sight and say how you are travelling.",
      items: [
        { id: "ru-u9l1-metro", type: "vocab", front: "метро", reading: "metro", meaning: "the underground", accept: ["metro", "subway", "the metro", "underground"], example: { jp: "Метро здесь работает очень быстро.", en: "The underground here runs very fast." }, drill: { jp: "Наше метро работает быстро", en: "Our underground runs fast" }, hint: "mi-TRO, stress at the end. NEUTER, and it never changes its ending — в метро, на метро, always метро. Five letters you already know, and the meaning comes free." },
        { id: "ru-u9l1-taksi", type: "vocab", front: "такси", reading: "taksi", meaning: "a taxi", accept: ["taxi", "a cab", "the taxi"], example: { jp: "Вот наше такси, и водитель уже здесь.", en: "Here is our taxi, and the driver is already here." }, drill: { jp: "Наше такси уже здесь", en: "Our taxi is already here" }, hint: "tak-SI, stress at the end. Neuter and unchanging, like метро. Note the кс where English writes x — Russian has no x of its own, and х says something else entirely." },
        { id: "ru-u9l1-avtobus", type: "vocab", front: "автобус", reading: "avtobus", meaning: "a bus", accept: ["bus", "a coach", "the bus"], example: { jp: "Автобус здесь, а метро там.", en: "The bus is here, and the underground is over there." }, drill: { jp: "Автобус и трамвай здесь", en: "The bus and the tram are here" }, hint: "af-TO-bus, stress on TO. Masculine. The в says f in front of т — the devoicing rule from the alphabet band, working exactly as it was taught." },
        { id: "ru-u9l1-aeroport", type: "vocab", front: "аэропорт", reading: "aeroport", meaning: "an airport", accept: ["airport", "the airport"], example: { jp: "Аэропорт здесь очень большой.", en: "The airport here is very big." }, drill: { jp: "Наш аэропорт очень красивый", en: "Our airport is very beautiful" }, hint: "a-e-ra-PORT, stress at the end — four syllables, and the аэ at the start is two separate vowels in a row. Masculine. Note э, the letter that exists for exactly this kind of borrowing." },
        { id: "ru-u9l1-tramvay", type: "vocab", front: "трамвай", reading: "tramvay", meaning: "a tram", accept: ["tram", "a streetcar", "the tram"], example: { jp: "Трамвай здесь, но он очень старый.", en: "The tram is here, but it is very old." }, drill: { jp: "Наш трамвай уже там", en: "Our tram is already over there" }, hint: "tram-VAY, stress at the end. Masculine — the й counts as a consonant, exactly as in чай. Russian cities kept the tram where English-speaking ones lost it." },
        { id: "ru-u9l1-bilet", type: "vocab", front: "билет", reading: "bilet", meaning: "a ticket", accept: ["ticket", "a fare", "the ticket"], example: { jp: "Ваш билет здесь, а мой там.", en: "Your ticket is here, and mine is over there." }, drill: { jp: "Мой билет уже здесь", en: "My ticket is already here" }, hint: "bi-LYET, stress at the end. Masculine. From French billet, so this one is a cognate rather than an internationalism: you may not know it on sight, but you can read every letter." },
      ],
    },
    {
      id: "ru-u9l2",
      unit: 9,
      lesson: 2,
      title: "Read the sign on a building",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read a Russian shopfront and know what the building is before anyone tells you.",
      items: [
        { id: "ru-u9l2-bank", type: "vocab", front: "банк", reading: "bank", meaning: "a bank", accept: ["bank", "the bank"], example: { jp: "Банк здесь, а парк там.", en: "The bank is here, and the park is over there." }, drill: { jp: "Здесь банк а там парк", en: "Here is a bank and there a park" }, hint: "BANK, one syllable. Masculine. The gloss says a bank with the article on purpose: bank on its own IS the transliteration, and a card whose prompt spells its own answer teaches nothing." },
        { id: "ru-u9l2-park", type: "vocab", front: "парк", reading: "park", meaning: "a park", accept: ["park", "the park", "a public garden"], example: { jp: "Этот парк очень красивый.", en: "This park is very beautiful." }, drill: { jp: "Наш парк очень большой", en: "Our park is very big" }, hint: "PARK, one syllable. Masculine. Four letters, all familiar, and п is the only one that does not look like its Latin twin." },
        { id: "ru-u9l2-kafe", type: "vocab", front: "кафе", reading: "kafe", meaning: "a café", accept: ["cafe", "the cafe", "a coffee shop"], example: { jp: "Кафе здесь, и там очень приятно.", en: "The café is here, and it is very pleasant there." }, drill: { jp: "Это очень хорошее кафе", en: "This is a very good café" }, hint: "ka-FE, stress at the end, and the е here says a flat E with no y-glide — borrowed words often do that. NEUTER and unchanging: в кафе, из кафе, always кафе." },
        { id: "ru-u9l2-restoran", type: "vocab", front: "ресторан", reading: "restoran", meaning: "a restaurant", accept: ["restaurant", "the restaurant"], example: { jp: "Этот ресторан очень хороший, и повар тоже.", en: "This restaurant is very good, and so is the cook." }, drill: { jp: "Этот ресторан работает сегодня", en: "This restaurant is open today" }, hint: "ris-ta-RAN, stress at the end, and BOTH unstressed vowels reduce — read it ris-ta-RAN, never res-to-ran. Masculine. This is the word that proves reading and saying are two skills." },
        { id: "ru-u9l2-otel", type: "vocab", front: "отель", reading: "otel", meaning: "a hotel", accept: ["hotel", "the hotel", "an inn"], example: { jp: "Наш отель здесь, а аэропорт там.", en: "Our hotel is here, and the airport is over there." }, drill: { jp: "Этот отель очень хороший", en: "This hotel is very good" }, hint: "a-TEL, stress at the end. MASCULINE despite the -ь — always check the gender of a -ь noun. The native Russian word for the same thing is гостиница." },
        { id: "ru-u9l2-teatr", type: "vocab", front: "театр", reading: "teatr", meaning: "a theatre", accept: ["theater", "theatre", "the theatre", "a playhouse"], example: { jp: "Театр здесь, и он очень красивый.", en: "The theatre is here, and it is very beautiful." }, drill: { jp: "Театр и музей здесь", en: "The theatre and the museum are here" }, hint: "ti-ATR, stress on the А. The еа in the middle is two separate vowels, and the тр at the end takes no vowel at all — say it in one push. Masculine." },
      ],
    },
    {
      id: "ru-u9l3",
      unit: 9,
      lesson: 3,
      title: "Read a word about work and machines",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read a Russian word for a workplace or a device and use it to say what is wrong with it.",
      items: [
        { id: "ru-u9l3-universitet", type: "vocab", front: "университет", reading: "universitet", meaning: "a university", accept: ["university", "the university", "a college"], example: { jp: "Наш университет очень старый и красивый.", en: "Our university is very old and beautiful." }, drill: { jp: "Здесь университет а там театр", en: "Here is a university and there a theatre" }, hint: "u-ni-vyer-si-TYET — five syllables, stress right at the end. Masculine. Say it slowly once and it will never be hard again." },
        { id: "ru-u9l3-direktor", type: "vocab", front: "директор", reading: "direktor", meaning: "a director", accept: ["director", "a manager", "the boss", "a head"], example: { jp: "Наш директор уже здесь.", en: "Our director is already here." }, drill: { jp: "Директор работает в банке", en: "The director works at the bank" }, hint: "di-RYEK-tar, stress on RYEK. Masculine. The final -ор is said -ar: unstressed о reduces to a, exactly as in вода." },
        { id: "ru-u9l3-muzey", type: "vocab", front: "музей", reading: "muzey", meaning: "a museum", accept: ["museum", "the museum"], example: { jp: "Этот музей очень большой.", en: "This museum is very big." }, drill: { jp: "Мне нравится наш музей", en: "I like our museum" }, hint: "mu-ZYEY, stress at the end. Masculine — the й is a consonant, as in трамвай and чай. ⚠️ Do not mix it up with музыка: same first three letters, different word." },
        { id: "ru-u9l3-kompyuter", type: "vocab", front: "компьютер", reading: "kompyuter", meaning: "a computer", accept: ["computer", "the computer", "a PC"], example: { jp: "Мой компьютер уже очень старый.", en: "My computer is already very old." }, drill: { jp: "Этот компьютер работает плохо", en: "This computer works badly" }, hint: "kam-PYU-tyer, stress on PYU. Masculine. The ь is doing real work: without it пю would be pu and the word would come out kam-PU-ter." },
        { id: "ru-u9l3-telefon", type: "vocab", front: "телефон", reading: "telefon", meaning: "a telephone", accept: ["telephone", "phone", "a phone", "the phone"], example: { jp: "Мой телефон уже не работает.", en: "My telephone does not work any more." }, drill: { jp: "Твой телефон очень старый", en: "Your telephone is very old" }, hint: "ti-li-FON, stress at the end, and both unstressed е flatten towards i. Masculine. Its three consonants т, л and ф came from three different lessons of the alphabet band." },
        { id: "ru-u9l3-internet", type: "vocab", front: "интернет", reading: "internet", meaning: "the internet", accept: ["internet", "the net", "the web"], example: { jp: "Наш интернет сегодня не работает.", en: "Our internet is not working today." }, drill: { jp: "Здесь интернет работает плохо", en: "The internet works badly here" }, hint: "in-ter-NET, stress at the end. Masculine, and Russian gives it no article at all — в интернете. Written with a plain е in every syllable, never ё." },
      ],
    },
    {
      id: "ru-u9l4",
      unit: 9,
      lesson: 4,
      title: "Read an idea, not a thing",
      cefr: "A1",
      dominantMode: "recognize",
      canDo: "Read an abstract international word and use it to say something about yourself.",
      items: [
        { id: "ru-u9l4-problema", type: "vocab", front: "проблема", reading: "problema", meaning: "a problem", accept: ["problem", "trouble", "a difficulty"], example: { jp: "Это не проблема, а только вопрос.", en: "That is not a problem, only a question." }, drill: { jp: "Это очень трудная проблема", en: "That is a very difficult problem" }, hint: "pra-BLYE-ma, stress on BLYE. FEMININE (-а) — Russian gives it a gender where English has none. Нет проблем is the everyday no problem." },
        { id: "ru-u9l4-ideya", type: "vocab", front: "идея", reading: "ideya", meaning: "an idea", accept: ["idea", "a notion", "a thought"], example: { jp: "Это очень хорошая идея.", en: "That is a very good idea." }, drill: { jp: "Мне нравится эта идея", en: "I like this idea" }, hint: "i-DYE-ya, stress on DYE — three syllables, not two. Feminine (-я). The д is soft because of the е that follows it." },
        { id: "ru-u9l4-sport", type: "vocab", front: "спорт", reading: "sport", meaning: "sport (the activity)", accept: ["sport", "sports", "athletics"], example: { jp: "Мне очень нравится спорт.", en: "I like sport very much." }, drill: { jp: "Мой друг любит спорт", en: "My friend likes sport" }, hint: "SPORT, one syllable. Masculine. The parenthetical in the gloss is not decoration: without it the prompt would read sport, and you could copy the answer off the screen without knowing anything." },
        { id: "ru-u9l4-pasport", type: "vocab", front: "паспорт", reading: "pasport", meaning: "a passport", accept: ["passport", "the passport"], example: { jp: "Ваш паспорт здесь, а билет там.", en: "Your passport is here, and the ticket is over there." }, drill: { jp: "Мой паспорт уже здесь", en: "My passport is already here" }, hint: "PAS-part, stress FIRST, and the unstressed о at the end says a. Masculine. It is спорт with па- in front, but the stress moves to the start — English puts it there too, which for once helps." },
        { id: "ru-u9l4-adres", type: "vocab", front: "адрес", reading: "adres", meaning: "an address", accept: ["address", "the address"], example: { jp: "Это его адрес, а не мой.", en: "That is his address, not mine." }, drill: { jp: "Вот его адрес", en: "Here is his address" }, hint: "A-dryes, stress first. Masculine. ⚠️ ONE д and ONE с — English doubles both letters and Russian doubles neither. A reliable place to lose a mark." },
        { id: "ru-u9l4-sekret", type: "vocab", front: "секрет", reading: "sekret", meaning: "a secret", accept: ["secret", "a mystery", "the secret"], example: { jp: "Мой возраст — это не секрет.", en: "My age is not a secret." }, drill: { jp: "Это не большой секрет", en: "That is not a big secret" }, hint: "si-KRYET, stress at the end. Masculine. The к and р run straight together, and the unstressed е at the front flattens towards i." },
      ],
    },
  ],
};
