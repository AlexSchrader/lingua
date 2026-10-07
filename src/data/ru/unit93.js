// RU Unit 93 — Вера и обряд ("Faith and rite") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u87–u97). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, and ru/unit87.js §1–§7 for this block.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 10 (B1)` — no subject named. See
// unit87.js §1 and §6.
//
// THE MEASURED HOLE, and it is the largest in the block: THE WHOLE EXISTING
// FIELD IS THREE WORDS. `религия` (u55l4), `церковь` (u14l2) and `душа` (u28l4)
// — that is all 1,440 words contain. Eight of the allocated fronts were free:
// бог · молитва · храм · икона · грех · рай · святой · обряд. A learner could
// say the word "religion" and could not say God.
//
// ⚠️ THE TITLE NAMES A WORD NO CARD MAY TEACH, for the second time in this
// block. `вера` was REFUSED at A2 — unit55.js's header records it, §D against
// `верить` (u22l3), with `религия` already holding the field — and the refusal
// stands. The title uses it; no card does. Same split as u92's `прошлое` and
// u90's `край`.
//
// ⚠️ `молиться` REFUSED, and it is the one that costs this unit a verb.
// `молитва` is the allocated front and keeps the slot; teaching the verb beside
// its own noun in one unit is the fault unit51.js §3 names (напиток beside
// пить). l3's hint on молитва says so in English. The unit therefore has NO
// verb at all — the one such unit in this block, and a deliberate consequence of
// the rule rather than an oversight.
//
// ⚠️ `святой` IS TAUGHT AS AN ADJECTIVE, NOT AS "a saint". Used as a noun it is
// a substantivised adjective, which unit1.js §5's last rule bars — the `лёгкое`
// case (unit51.js §2b) and the `пожарный` case (unit87.js §4). `верующий` was
// refused on the same ground, being a substantivised participle.
//
// ⚠️ `пост` IS GLOSSED "a religious fast" AND NOT "a post". The word
// transliterates to the English one, so the short gloss would be a
// `produceIsFreePass` under unit1.js §9 — exactly the trap that cost `опера` its
// card at u55l3. `бог`, `ангел` and `икона` were each checked the same way and
// each passes: "a god", "an angel" and "an icon" all carry an article, and
// normalizeReading strips whitespace, so "anangel" never equals "angel".
//
// ⚠️ THREE -ведь NOUNS, two of them carded. `заповедь` (l4) and `исповедь` (l4)
// are one closed family from ведать, to know; `проповедь` "a sermon" is free,
// legal and was dropped for count at 24 — `алтарь` took the slot. Named here so
// the next seat does not read the gap as a prohibition.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT93 = {
  id: "ru-u93",
  lang: "ru",
  title: "Вера и обряд",
  order: 93,
  stage: "b1",
  lessons: [
    {
      id: "ru-u93l1",
      unit: 93,
      lesson: 1,
      title: "Inside the holy place",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a church from the inside — the temple, the monastery, the altar, an icon, a candle and the bell — and say why a храм is not simply a церковь.",
      items: [
        { id: "ru-u93l1-khram", type: "vocab", front: "храм", reading: "khram", meaning: "a temple", accept: ["a great place of worship", "a house of God", "a large church building"], example: { jp: "Этот храм очень старый и красивый.", en: "This temple is very old and very beautiful." }, drill: { jp: "Этот храм очень высокий", en: "This temple is very tall" }, hint: "KHRAM — one syllable, opening with the scraping х. MASCULINE. ⚠️ Bigger and higher than `церковь` from unit 14: a церковь is any church, a храм is the great one. Also figurative — храм науки, a temple of learning." },
        { id: "ru-u93l1-monastyr", type: "vocab", front: "монастырь", reading: "monastyr", meaning: "a monastery", accept: ["a house of monks", "the buildings of a religious community", "a cloister"], example: { jp: "Этот монастырь стоит здесь уже тысячу лет.", en: "This monastery has stood here for a thousand years." }, drill: { jp: "Этот монастырь очень далеко", en: "This monastery is very far away" }, hint: "ma-nas-TYR — stress on the last syllable, with the ы from unit 5, and both о reduce to a. MASCULINE despite the -ь. ⚠️ A convent is the same word: женский монастырь." },
        { id: "ru-u93l1-altar", type: "vocab", front: "алтарь", reading: "altar", meaning: "an altar", accept: ["the holy table of a church", "the place a priest serves at", "the sanctuary of a temple"], example: { jp: "Алтарь в этом храме очень старый.", en: "The altar in this temple is very old." }, drill: { jp: "Алтарь здесь очень красивый", en: "The altar here is very beautiful" }, hint: "al-TAR — stress on the last syllable. MASCULINE despite the -ь, like словарь from unit 5. ⚠️ In an Orthodox church the алтарь is the whole area behind the icon screen, not just the table." },
        { id: "ru-u93l1-ikona", type: "vocab", front: "икона", reading: "ikona", meaning: "an icon", accept: ["a holy painted image", "a religious picture on wood", "a sacred image"], example: { jp: "Эта икона очень старая и дорогая.", en: "This icon is very old and very valuable." }, drill: { jp: "Эта икона из этого храма", en: "This icon is from this temple" }, hint: "i-KO-na — stress on KO. FEMININE (-а). A painted image of a saint on wood. ⚠️ Said of a person it means an idol in the modern sense: он икона для молодёжи, with молодёжь from unit 59." },
        { id: "ru-u93l1-svecha", type: "vocab", front: "свеча", reading: "svecha", meaning: "a candle", accept: ["a wax light", "a light you burn in a church", "a taper"], example: { jp: "В храме горит много свечей.", en: "A lot of candles are burning in the temple." }, drill: { jp: "Эта свеча горит очень долго", en: "This candle burns for a very long time" }, hint: "svi-CHA — stress on the ending, and the е reduces to i. FEMININE (-а). ⚠️ Its plural moves the stress right back: свЕчи. A spark plug in a car is also свеча." },
        { id: "ru-u93l1-kolokol", type: "vocab", front: "колокол", reading: "kolokol", meaning: "a bell", accept: ["a church bell", "the bell in a tower", "a great hanging bell"], example: { jp: "Колокол в этом храме очень большой.", en: "The bell in this temple is very large." }, drill: { jp: "Этот колокол очень громкий", en: "This bell is very loud" }, hint: "KO-la-kal — stress on the FIRST syllable, and both later о reduce to a. MASCULINE. ⚠️ Its plural moves the stress right to the end and takes -а: колоколА. A small one is колокольчик." },
      ],
    },
    {
      id: "ru-u93l2",
      unit: 93,
      lesson: 2,
      title: "God and the spirits",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what a believer believes in — God, an angel, the devil, a miracle, a prophet — and call a place holy.",
      items: [
        { id: "ru-u93l2-bog", type: "vocab", front: "бог", reading: "bog", meaning: "God", accept: ["a god", "a deity", "the one God"], example: { jp: "Этот человек верит в Бога.", en: "This man believes in God." }, drill: { jp: "Бог один для всех людей", en: "God is one for all people" }, hint: "BOG — one syllable, and ⚠️ the г is said as a kh: BOKH. One of the handful of words where г does that, and only in the nominative — БОга and БОгу are said with a plain g. MASCULINE. Capitalised for the Christian God, lower case for a god in general." },
        { id: "ru-u93l2-angel", type: "vocab", front: "ангел", reading: "angel", meaning: "an angel", accept: ["a messenger of God", "a winged spirit", "a heavenly being"], example: { jp: "На этой иконе ангел и святой человек.", en: "On this icon there is an angel and a holy man." }, drill: { jp: "Этот ангел очень красивый", en: "This angel is very beautiful" }, hint: "AN-gel — stress on the first syllable, and the г is a plain g here. MASCULINE. ⚠️ Very common as praise, far more so than in English: «ты просто ангел»." },
        { id: "ru-u93l2-dyavol", type: "vocab", front: "дьявол", reading: "dyavol", meaning: "the devil", accept: ["Satan", "the evil one", "the spirit of evil"], example: { jp: "В этой сказке дьявол очень злой.", en: "In this tale the devil is very wicked." }, drill: { jp: "Этот дьявол очень злой", en: "This devil is very wicked" }, hint: "DYA-val — stress on the first syllable, the ь after д makes it dya rather than da, and the о reduces to a. MASCULINE. ⚠️ Чёрт is the everyday one you hear in swearing; дьявол is the serious theological word." },
        { id: "ru-u93l2-chudo", type: "vocab", front: "чудо", reading: "chudo", meaning: "a miracle", accept: ["a wonder", "something that cannot be explained", "a marvel"], example: { jp: "Это было настоящее чудо.", en: "That was a real miracle." }, drill: { jp: "Это настоящее чудо для нас", en: "This is a real miracle for us" }, hint: "CHU-da — stress on the first syllable, and the о reduces to a. NEUTER (-о). ⚠️ Its plural is чудесА, on a different stem and with the stress at the end. In everyday speech constantly: «чудо, что он живой»." },
        { id: "ru-u93l2-prorok", type: "vocab", front: "пророк", reading: "prorok", meaning: "a prophet", accept: ["a man who speaks for God", "someone who foretells", "a seer"], example: { jp: "Этот пророк жил очень давно.", en: "This prophet lived a very long time ago." }, drill: { jp: "Этот пророк говорил очень просто", en: "This prophet spoke very plainly" }, hint: "pra-ROK — stress on the last syllable, and the first о reduces to a. MASCULINE. From про plus речь, with речь from unit 39: the one who speaks forth. ⚠️ Used of anyone who called it right." },
        { id: "ru-u93l2-svyatoy", type: "vocab", front: "святой", reading: "svyatoy", meaning: "holy", accept: ["sacred", "set apart for God", "hallowed"], example: { jp: "Для них это очень святое место.", en: "For them this is a very holy place." }, drill: { jp: "Это очень святой человек", en: "This is a very holy man" }, hint: "svya-TOY — stress on the ending. An ADJECTIVE: святой, святая, святое. ⚠️ Used as a noun it means a saint — but this course teaches the adjective, because unit 1 §5 bars a substantivised adjective as its own card. «Святая вода» is holy water." },
      ],
    },
    {
      id: "ru-u93l3",
      unit: 93,
      lesson: 3,
      title: "The people and what they do",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name who serves and who travels — a monk, a priest, a pilgrim — and the three things they do: a prayer, a rite and a confession.",
      items: [
        { id: "ru-u93l3-monakh", type: "vocab", front: "монах", reading: "monakh", meaning: "a monk", accept: ["a man in a monastery", "a religious brother", "a man under vows"], example: { jp: "Этот монах живёт в монастыре.", en: "This monk lives in the monastery." }, drill: { jp: "Этот монах живёт очень просто", en: "This monk lives very plainly" }, hint: "ma-NAKH — stress on the last syllable, the о reduces to a, and it ends in the scraping х. MASCULINE; the feminine is монахиня. ⚠️ «Жить как монах» is said of anyone who lives frugally." },
        { id: "ru-u93l3-svyashchennik", type: "vocab", front: "священник", reading: "svyashchennik", meaning: "a priest", accept: ["a man who serves in a church", "a clergyman", "the one who takes a service"], example: { jp: "Священник читает книгу в храме.", en: "The priest is reading a book in the temple." }, drill: { jp: "Священник говорит очень тихо", en: "The priest speaks very quietly" }, hint: "svya-SHCHE-nnik — stress on SHCHE, with the long soft щ, and the нн held a beat longer. MASCULINE. ⚠️ Поп is the old colloquial word and is now slightly rude; батюшка is what people call him to his face." },
        { id: "ru-u93l3-palomnik", type: "vocab", front: "паломник", reading: "palomnik", meaning: "a pilgrim", accept: ["someone travelling to a holy place", "a religious traveller", "one who goes on pilgrimage"], example: { jp: "Паломник идёт в этот монастырь.", en: "A pilgrim is walking to this monastery." }, drill: { jp: "Этот паломник идёт очень далеко", en: "This pilgrim is walking a very long way" }, hint: "pa-LOM-nik — stress on LOM. MASCULINE. From the palm branch pilgrims brought home. ⚠️ The journey itself is паломничество, a word nobody says in conversation." },
        { id: "ru-u93l3-molitva", type: "vocab", front: "молитва", reading: "molitva", meaning: "a prayer", accept: ["words said to God", "what a believer says to God", "a set form of words to God"], example: { jp: "Эта молитва очень старая и простая.", en: "This prayer is very old and very plain." }, drill: { jp: "Эта молитва очень простая", en: "This prayer is very plain" }, hint: "ma-LIT-va — stress on LIT, and the о reduces to a. FEMININE (-а). ⚠️ The verb молиться, to pray, is deliberately not carded: it is this word's own root, and unit 51's rule bars teaching a derivative beside its base in one unit." },
        { id: "ru-u93l3-obryad", type: "vocab", front: "обряд", reading: "obryad", meaning: "a rite", accept: ["a set religious ceremony", "a ritual act", "a ceremony done the same way each time"], example: { jp: "Этот обряд очень старый и красивый.", en: "This rite is very old and very beautiful." }, drill: { jp: "Это очень старый обряд", en: "This is a very old rite" }, hint: "ab-RYAD — stress on the last syllable, the о reduces to a, and the д is said as a t. MASCULINE. From ряд, a row, from unit 33: things done in order. ⚠️ `традиция` from unit 55 is a custom; an обряд has fixed steps." },
        { id: "ru-u93l3-ispoved", type: "vocab", front: "исповедь", reading: "ispoved", meaning: "a confession", accept: ["the telling of sins to a priest", "an admission of what you did wrong", "confession in a church"], example: { jp: "Исповедь была очень долгая.", en: "The confession went on a very long time." }, drill: { jp: "Эта исповедь была очень долгая", en: "That confession went on a very long time" }, hint: "IS-pa-ved — stress on the FIRST syllable. FEMININE despite the -ь, and the same -ведь family as заповедь in lesson 4. ⚠️ Also used of a frank book: «исповедь» in a title means a confessional memoir." },
      ],
    },
    {
      id: "ru-u93l4",
      unit: 93,
      lesson: 4,
      title: "Right, wrong and what comes after",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the moral frame — a sin, a commandment, a fast, heaven, hell — and name the cross.",
      items: [
        { id: "ru-u93l4-grekh", type: "vocab", front: "грех", reading: "grekh", meaning: "a sin", accept: ["a wrong against God", "a moral fault", "an offence against God's law"], example: { jp: "Это большой грех для них.", en: "That is a great sin for them." }, drill: { jp: "Это очень большой грех", en: "That is a very great sin" }, hint: "GREKH — one syllable, ending in the scraping х. MASCULINE. ⚠️ Its oblique forms move the stress onto the ending: грехА, грехИ. Everyday use is light: «грех жаловаться», it would be a sin to complain." },
        { id: "ru-u93l4-zapoved", type: "vocab", front: "заповедь", reading: "zapoved", meaning: "a commandment", accept: ["a rule given by God", "one of the ten rules", "a divine command"], example: { jp: "Эта заповедь самая важная.", en: "This commandment is the most important one." }, drill: { jp: "Эта заповедь очень простая", en: "This commandment is very simple" }, hint: "ZA-pa-ved — stress on the FIRST syllable, and the о reduces to a. FEMININE despite the -ь. From ведать, to know: what is given to be known. ⚠️ Десять заповедей are the Ten Commandments." },
        { id: "ru-u93l4-post", type: "vocab", front: "пост", reading: "post", meaning: "a religious fast", accept: ["a time of eating no meat", "abstaining from food for God", "a period of fasting"], example: { jp: "Этот пост идёт сорок дней.", en: "This fast goes on for forty days." }, drill: { jp: "Пост идёт почти месяц", en: "The fast goes on for almost a month" }, hint: "POST — one syllable. MASCULINE. ⚠️ Glossed as the religious fast on purpose: the word also means a post or a sentry's position, and «a post» would be a prompt you can read the answer off. Великий пост is Lent." },
        { id: "ru-u93l4-ray", type: "vocab", front: "рай", reading: "ray", meaning: "heaven as a place", accept: ["paradise", "the place of the blessed", "the garden of God"], example: { jp: "Для них это был настоящий рай.", en: "For them this was a real paradise." }, drill: { jp: "Это место настоящий рай", en: "This place is a real paradise" }, hint: "RAY — one syllable. MASCULINE. ⚠️ Its prepositional after в is раЮ, with the stress on the ending. Constant in everyday speech: «здесь просто рай»." },
        { id: "ru-u93l4-ad", type: "vocab", front: "ад", reading: "ad", meaning: "hell", accept: ["the place of the damned", "the underworld of punishment", "where the wicked go"], example: { jp: "В этой книге ад очень страшный.", en: "In this book hell is very frightening." }, drill: { jp: "Это был настоящий ад", en: "That was absolute hell" }, hint: "AD — one syllable, and the д is said as a t. MASCULINE. ⚠️ Its prepositional after в is адУ, stress on the ending, exactly like раЮ. Said of any bad day: «это был ад»." },
        { id: "ru-u93l4-krest", type: "vocab", front: "крест", reading: "krest", meaning: "a cross", accept: ["the Christian sign", "two crossed lines as a symbol", "the sign a believer wears"], example: { jp: "Этот крест из золота.", en: "This cross is of gold." }, drill: { jp: "Этот крест очень старый", en: "This cross is very old" }, hint: "KREST — one syllable. MASCULINE. ⚠️ Its oblique forms move the stress onto the ending: крестА. «Поставить крест на чём-то» is to write something off for good." },
      ],
    },
  ],
};
