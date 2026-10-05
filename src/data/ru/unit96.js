// RU Unit 96 — Музыка и звучание ("Music and sound") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u87–u97). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, and ru/unit87.js §1–§7 for this block.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 13 (B1)` — no subject named. See
// unit87.js §1 and §6.
//
// THE MEASURED HOLE, and it is the starkest number in the block: THERE IS NOT
// ONE MUSICAL INSTRUMENT IN 1,440 WORDS. The entire existing field is `музыка`
// (u8l4), `концерт` (u27l1), `петь` (u27l1), `хор` and `оркестр` (u55l3),
// `балет` (u55l3) and the three sound nouns in u39l3 — `шум` · `голос` · `тон`.
// So a learner could say they liked music, say a choir sang, and could not name
// a guitar, a note, a rhythm or a song. All five allocated fronts were free:
// гитара · скрипка · нота · ритм · мелодия.
//
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ `песня` IS CARDED, AND THAT REVERSES AN A2 REFUSAL ON PURPOSE.
// ═════════════════════════════════════════════════════════════════════════════
// unit55.js's header refused it: §D against `петь` (u27l1), reasoning that "A1
// taught the verbs and the noun would be a second mastery track for each".
// THAT READING IS THE ONE CLAUDE.md NAMES AS THE COSTLY MISREADING OF THE LEXEME
// RULE. The rule is about INFLECTION — the same word in another form — and
// петь → песня is DERIVATION, exactly as sing → song is. CLAUDE.md records the
// measured cost of the other reading: German withheld `die Frage`, `die Antwort`
// and fifteen more core words because the course already owned a derivative, so
// it taught *survey* and *enquiry* and not *question*. Its instruction is "card
// the base word", and the test it gives is "would a learner who knows one
// already know the other?" — no, because the root vowel alternates пе-/пес-.
// A music unit with no word for "song" is the same defect in Russian. Carded.
// `звук` (l3) is the same call against `звучать` (u48l3), and unit94.js records
// it for `водить` against `водитель`. All three are logged in unit87.js §5.
//
// ⚠️ FIVE CANDIDATES REFUSED, each for a stated reason:
//   `громкость` — §D against `громкий` (u47l4), the -ость shape.
//   `пианино` — a gloss collision with `рояль`, which is carded. Russian keeps
//        the grand and the upright apart; one card, one gloss (unit1.js §9), and
//        the hint on рояль names пианино and its indeclinability in English.
//   `слух` and `тишина` — both free and legal, both left to BLOCK 2, which owns
//        u86 Ощущения и восприятие. Hearing is a sense, not a sound.
//   `напев` — a gloss collision with `мелодия`.
//   `звон` — legal (a derivation of звонить, u34l1) and dropped for count.
//        `колокол` at u93l1 already gives the learner the bell.
//   TAKEN and used freely instead: `оркестр` · `хор` (u55l3), `концерт` (u27l1),
//   `сцена` · `спектакль` (u55l3), `голос` · `тон` · `шум` (u39l3).
//
// ⚠️ `эхо` IS INDECLINABLE — the third such noun in this block after `цунами`
// (u91l3) and `шоссе` (u94l3). Three in eleven units is enough that the class is
// worth naming, and each hint points at the others.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT96 = {
  id: "ru-u96",
  lang: "ru",
  title: "Музыка и звучание",
  order: 96,
  stage: "b1",
  lessons: [
    {
      id: "ru-u96l1",
      unit: 96,
      lesson: 1,
      title: "The instruments",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the instruments — guitar, violin, drum, grand piano, flute — and talk about a string, and say that in Russian you play ON an instrument.",
      items: [
        { id: "ru-u96l1-gitara", type: "vocab", front: "гитара", reading: "gitara", meaning: "a guitar", accept: ["a six-stringed instrument", "the instrument you strum", "a guitar to play"], example: { jp: "Эта гитара очень старая и дорогая.", en: "This guitar is very old and very valuable." }, drill: { jp: "Эта гитара совсем новая", en: "This guitar is completely new" }, hint: "gi-TA-ra — stress on TA, and the ги is a plain gi. FEMININE (-а). ⚠️ In Russian you play ON an instrument: играть НА гитаре, never «играть гитару». That rule covers every card in this lesson." },
        { id: "ru-u96l1-skripka", type: "vocab", front: "скрипка", reading: "skripka", meaning: "a violin", accept: ["a fiddle", "the small bowed instrument", "the instrument held under the chin"], example: { jp: "Скрипка звучит очень красиво.", en: "A violin sounds very beautiful." }, drill: { jp: "Эта скрипка звучит очень красиво", en: "This violin sounds very beautiful" }, hint: "SKRIP-ka — stress on the first syllable. FEMININE (-а). From скрипеть, to creak — the same root as `скрип` in lesson 3, so a violin is literally the creaking thing. ⚠️ «Играть первую скрипку» is to be the one who matters." },
        { id: "ru-u96l1-baraban", type: "vocab", front: "барабан", reading: "baraban", meaning: "a drum", accept: ["what you beat with sticks", "a percussion instrument", "a drum to hit"], example: { jp: "Барабан слышно очень далеко.", en: "A drum can be heard a very long way off." }, drill: { jp: "Этот барабан очень громкий", en: "This drum is very loud" }, hint: "ba-ra-BAN — stress on the last syllable, and both а before it are unstressed. MASCULINE. ⚠️ Also the drum of a washing machine, and «барабанить» means both to drum and to rattle on about something." },
        { id: "ru-u96l1-royal", type: "vocab", front: "рояль", reading: "royal", meaning: "a grand piano", accept: ["a concert piano", "the big piano with a lid", "a piano on three legs"], example: { jp: "Рояль стоит в большом зале.", en: "The grand piano stands in the big hall." }, drill: { jp: "Этот рояль очень старый", en: "This grand piano is very old" }, hint: "ra-YAL — stress on the last syllable, and the о reduces to a. MASCULINE despite the -ь. ⚠️ ONLY the grand: the upright is пианино, which is neuter and never changes its ending. Russian keeps the two words apart, and this course cards only рояль." },
        { id: "ru-u96l1-fleyta", type: "vocab", front: "флейта", reading: "fleyta", meaning: "a flute", accept: ["a wind instrument you blow across", "the long silver pipe", "a flute to play"], example: { jp: "Флейта звучит очень тихо.", en: "A flute sounds very quiet." }, drill: { jp: "Эта флейта звучит очень тихо", en: "This flute sounds very quiet" }, hint: "FLEY-ta — stress on the first syllable, and the ей is one sound, a long ay. FEMININE (-а). ⚠️ Borrowed from German Flöte, which is why it is not «флут»." },
        { id: "ru-u96l1-struna", type: "vocab", front: "струна", reading: "struna", meaning: "a string of an instrument", accept: ["the wire that sounds a note", "one string on a guitar", "a taut string that is played"], example: { jp: "Одна струна на этой гитаре совсем старая.", en: "One string on this guitar is completely worn." }, drill: { jp: "Эта струна звучит очень громко", en: "This string sounds very loud" }, hint: "stru-NA — stress on the ending. FEMININE (-а). ⚠️ Its plural moves the stress right back and shortens: стрУны. «Струна души» is a heartstring, and «натянут как струна» means wound tight as a wire." },
      ],
    },
    {
      id: "ru-u96l2",
      unit: 96,
      lesson: 2,
      title: "How music is written",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what is on the page — a note, a rhythm, a tune, a chord, a scale and a bar.",
      items: [
        { id: "ru-u96l2-nota", type: "vocab", front: "нота", reading: "nota", meaning: "a note of music", accept: ["one written musical sound", "a mark on a stave", "a single tone written down"], example: { jp: "Эта нота очень высокая.", en: "This note is very high." }, drill: { jp: "Эта нота звучит очень низко", en: "This note sounds very low" }, hint: "NO-ta — stress on the first syllable. FEMININE (-а). ⚠️ Its PLURAL ноты means sheet music — «играть по нотам», to play from the score — and that plural is far commoner than the singular." },
        { id: "ru-u96l2-ritm", type: "vocab", front: "ритм", reading: "ritm", meaning: "a rhythm", accept: ["the beat of a piece", "the regular pattern of a sound", "the pulse of music"], example: { jp: "Ритм этой музыки очень быстрый.", en: "The rhythm of this music is very fast." }, drill: { jp: "Ритм здесь очень быстрый", en: "The rhythm here is very fast" }, hint: "RITM — one syllable, and the тм at the end takes no vowel after it, like оркестр in unit 55. MASCULINE. ⚠️ Used of a life as well: ритм жизни, the pace of living." },
        { id: "ru-u96l2-melodiya", type: "vocab", front: "мелодия", reading: "melodiya", meaning: "a tune you can hum", accept: ["a melody", "the line of notes you hum", "the air of a song"], example: { jp: "Эта мелодия очень простая и красивая.", en: "This tune is very simple and very beautiful." }, drill: { jp: "Эта мелодия очень красивая", en: "This tune is very beautiful" }, hint: "mi-LO-di-ya — stress on LO, and the first е reduces to i. FEMININE (-я). ⚠️ The everyday word for a ringtone on a phone is also мелодия." },
        { id: "ru-u96l2-akkord", type: "vocab", front: "аккорд", reading: "akkord", meaning: "a chord", accept: ["several notes sounded together", "a group of notes played at once", "a handful of strings struck together"], example: { jp: "Этот аккорд очень трудный.", en: "This chord is very hard." }, drill: { jp: "Этот аккорд звучит очень красиво", en: "This chord sounds very beautiful" }, hint: "a-KKORD — stress on KORD, and the кк is held a beat longer. MASCULINE. ⚠️ «Последний аккорд» is the final flourish of anything at all, not only of a piece of music." },
        { id: "ru-u96l2-gamma", type: "vocab", front: "гамма", reading: "gamma", meaning: "a scale of notes", accept: ["the run of notes up and down", "an exercise of notes in order", "a musical scale"], example: { jp: "Гамма это самое простое упражнение.", en: "A scale is the simplest exercise there is." }, drill: { jp: "Эта гамма очень простая", en: "This scale is very simple" }, hint: "GA-mma — stress on the first syllable, and the мм is held a beat. FEMININE (-а). ⚠️ Also a range of colours: гамма цветов, with цвет from unit 16." },
        { id: "ru-u96l2-takt", type: "vocab", front: "такт", reading: "takt", meaning: "a bar of music", accept: ["one measure of a piece", "a unit of beats", "the span between two bar lines"], example: { jp: "В этом такте четыре ноты.", en: "There are four notes in this bar." }, drill: { jp: "Этот такт очень простой", en: "This bar is very simple" }, hint: "TAKT — one syllable. MASCULINE. ⚠️ It is ALSO the ordinary word for tact — «у него есть такт», he has tact. One word, two senses, and only context decides." },
      ],
    },
    {
      id: "ru-u96l3",
      unit: 96,
      lesson: 3,
      title: "The sounds themselves",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the sounds a room makes — a sound, an echo, a whistle, a knock, a whisper and a creak.",
      items: [
        { id: "ru-u96l3-zvuk", type: "vocab", front: "звук", reading: "zvuk", meaning: "a sound you hear", accept: ["any sound at all", "a noise as a thing in itself", "what reaches the ear"], example: { jp: "Этот звук очень громкий и странный.", en: "This sound is very loud and very strange." }, drill: { jp: "Этот звук очень странный", en: "This sound is very strange" }, hint: "ZVUK — one syllable. MASCULINE. ⚠️ `шум` from unit 39 is noise you did not want; a звук is any sound at all. `звучать` from unit 48 is its own root — this is the base noun, withheld until now only because the course already owned the verb." },
        { id: "ru-u96l3-ekho", type: "vocab", front: "эхо", reading: "ekho", meaning: "an echo", accept: ["a sound coming back", "a repeat of a sound off a wall", "the return of a sound"], example: { jp: "В этом зале очень сильное эхо.", en: "There is a very strong echo in this hall." }, drill: { jp: "Здесь очень сильное эхо", en: "There is a very strong echo here" }, hint: "E-kha — stress on the first syllable, the э is a plain e, and the final о reduces to a. NEUTER, and ⚠️ INDECLINABLE: the ending never changes, like шоссе in unit 94 and цунами in unit 91." },
        { id: "ru-u96l3-svist", type: "vocab", front: "свист", reading: "svist", meaning: "a whistle", accept: ["the sound of whistling", "a sharp high note made with the lips", "a shrill sound"], example: { jp: "Свист был очень громкий.", en: "The whistle was very loud." }, drill: { jp: "Этот свист был очень громкий", en: "That whistle was very loud" }, hint: "SVIST — one syllable. MASCULINE. The sound; the verb is свистеть. ⚠️ In a Russian theatre a свист from the audience means they hated it — the opposite of what it means in America." },
        { id: "ru-u96l3-stuk", type: "vocab", front: "стук", reading: "stuk", meaning: "a knock", accept: ["the sound of knocking", "a tap on a door", "a banging sound"], example: { jp: "Стук в дверь был очень тихий.", en: "The knock at the door was very quiet." }, drill: { jp: "Этот стук был очень тихий", en: "That knock was very quiet" }, hint: "STUK — one syllable. MASCULINE. From стучать, to knock. ⚠️ Стук also means informing on someone, and стукач is an informer — a hard word in Russian." },
        { id: "ru-u96l3-shyopot", type: "vocab", front: "шёпот", reading: "shyopot", meaning: "a whisper", accept: ["speech without voice", "very quiet speaking", "words said under the breath"], example: { jp: "Шёпот в этом зале слышно очень хорошо.", en: "A whisper can be heard very clearly in this hall." }, drill: { jp: "Этот шёпот слышно очень хорошо", en: "That whisper can be heard very clearly" }, hint: "SHYO-pat — stress on the ё, which unit 1 §7 requires you to write, and the final о reduces to a. MASCULINE. ⚠️ «Говорить шёпотом» is to speak in a whisper, and that instrumental form is the one you meet most." },
        { id: "ru-u96l3-skrip", type: "vocab", front: "скрип", reading: "skrip", meaning: "a creak", accept: ["the sound of a hinge", "a squeak of wood", "a dry grinding sound"], example: { jp: "Скрип этой двери очень громкий.", en: "The creak of this door is very loud." }, drill: { jp: "Этот скрип очень громкий", en: "That creak is very loud" }, hint: "SKRIP — one syllable. MASCULINE. From скрипеть, to creak — the same root as `скрипка` in lesson 1. ⚠️ «Со скрипом» means barely, with difficulty." },
      ],
    },
    {
      id: "ru-u96l4",
      unit: 96,
      lesson: 4,
      title: "The piece and the people",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a song and about who makes it — a musician, a composer, a conductor, an ensemble — and name an old vinyl record.",
      items: [
        { id: "ru-u96l4-pesnya", type: "vocab", front: "песня", reading: "pesnya", meaning: "a song", accept: ["words set to a tune", "something people sing", "a piece of music with words"], example: { jp: "Эта песня очень старая и красивая.", en: "This song is very old and very beautiful." }, drill: { jp: "Эта песня очень красивая", en: "This song is very beautiful" }, hint: "PES-nya — stress on the first syllable. FEMININE (-я). ⚠️ Its genitive plural drops the ь: пЕсен. `петь` from unit 27 is the verb, and a song is a different word — in the same way that sing and song are two English words." },
        { id: "ru-u96l4-muzykant", type: "vocab", front: "музыкант", reading: "muzykant", meaning: "a musician", accept: ["someone who plays an instrument", "a player of music", "a person whose work is music"], example: { jp: "Этот музыкант играет очень хорошо.", en: "This musician plays very well." }, drill: { jp: "Этот музыкант играет очень быстро", en: "This musician plays very fast" }, hint: "mu-zy-KANT — stress on the last syllable, with the ы in the middle. MASCULINE. Built on музыка from unit 8. ⚠️ Used of anyone who plays well, professional or not." },
        { id: "ru-u96l4-kompozitor", type: "vocab", front: "композитор", reading: "kompozitor", meaning: "a composer", accept: ["someone who writes music", "the person who wrote a piece", "a writer of music"], example: { jp: "Этот композитор жил очень давно.", en: "This composer lived a very long time ago." }, drill: { jp: "Этот композитор написал эту песню", en: "This composer wrote this song" }, hint: "kam-pa-ZI-tar — stress on ZI, and every other о reduces to a. MASCULINE. ⚠️ Russian keeps композитор for serious music and often says `автор`, from unit 45, for a pop songwriter." },
        { id: "ru-u96l4-dirizhyor", type: "vocab", front: "дирижёр", reading: "dirizhyor", meaning: "a conductor", accept: ["the one who leads an orchestra", "the person with the baton", "who stands in front of the players"], example: { jp: "Дирижёр стоит перед оркестром.", en: "The conductor stands in front of the orchestra." }, drill: { jp: "Этот дирижёр очень молодой", en: "This conductor is very young" }, hint: "di-ri-ZHYOR — stress on the ё, always written. MASCULINE. ⚠️ Used figuratively of anyone running things from the front: «дирижёр этого проекта», with проект from unit 42." },
        { id: "ru-u96l4-ansambl", type: "vocab", front: "ансамбль", reading: "ansambl", meaning: "an ensemble", accept: ["a small group of players", "a band of musicians", "a company that performs together"], example: { jp: "Этот ансамбль очень известный.", en: "This ensemble is very well known." }, drill: { jp: "Этот ансамбль играет очень хорошо", en: "This ensemble plays very well" }, hint: "an-SAMBL — stress on SAMBL, and the мбль at the end takes no vowel after it. MASCULINE despite the -ь. ⚠️ Also used of buildings: архитектурный ансамбль, a group of buildings that work together." },
        { id: "ru-u96l4-plastinka", type: "vocab", front: "пластинка", reading: "plastinka", meaning: "a vinyl record", accept: ["a record you play on a turntable", "a disc of music", "an old black record"], example: { jp: "Эта пластинка очень старая.", en: "This record is very old." }, drill: { jp: "Эта пластинка совсем старая", en: "This record is completely old" }, hint: "plas-TIN-ka — stress on TIN. FEMININE (-а). ⚠️ «Заезженная пластинка» is a broken record, said of someone repeating themselves. The word also means a small flat plate of anything." },
      ],
    },
  ],
};
