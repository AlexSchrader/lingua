// RU Unit 92 — История и прошлое ("History and the past") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u87–u97). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, and ru/unit87.js §1–§7 for this block.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 9 (B1)` — no subject named. See
// unit87.js §1 and §6.
//
// ⚠️ THE TITLE NAMES A WORD NO CARD MAY TEACH. `прошлое` is the substantivised
// neuter of `прошлый` (u24l1), so unit1.js §5's last rule bars it as a front —
// the same rule that killed `лёгкое` at A2 (unit51.js §2b). A TITLE is not a
// card and may use it; the unit teaches the CONTENT of the past instead. Same
// split as u90's `край` and u88's `хозяйство`.
//
// THE MEASURED HOLE. `история` (u24l1) is glossed "a story" and is used that way
// throughout A1; `век` and `эпоха` (u38l1) are TIME words in a time unit;
// u51l2–l3 owns the modern state — государство · власть · президент · министр ·
// армия · солдат · война · закон · суд · тюрьма · партия. So the course can
// discuss a government and cannot name a king, a battle, a fortress or a
// revolution. All six allocated fronts were free: революция · царь · империя ·
// племя · восстание · крепость.
//
// ⚠️ FIVE CANDIDATES REFUSED, each for a stated reason:
//   `воин` — §D against `война` (u51l2), and `солдат` (u51l2) already carries
//        the field. `рыцарь` is the card that fills the slot.
//   `древность` — §D against `древний` (u60l4), the -ость shape that got
//        `слабость` refused at A2.
//   `старина` — §D against `старый` (u19l1).
//   `правление` — the прав- root already carries правда · направо · правильный ·
//        направление · право, and unit51.js §3 kept it at one new word per unit.
//        That one word here is nothing: `престол` and `династия` carry rule.
//   `летопись`/`средневековье` — both legal (compounds, like `живопись` at
//        u55l1), both dropped for count at 24. Named so the next seat knows.
//
// ⚠️ `царь` IS GLOSSED THE LONG WAY ROUND ON PURPOSE. It transliterates to the
// English word, so «a tsar» alone would be a free pass under unit1.js §9 —
// `produceIsFreePass` fires when checkProduce(meaning) passes, and a bare
// "tsar" normalises to exactly this card's reading. Every accept[] entry on it
// is multi-word for the same reason. The same trick `поэт` and `актёр` use at
// u55l2.
//
// ⚠️ TWO -мя NOUNS IN ONE UNIT, which is a Russian paradigm a learner has met
// only once. `племя` (l2) and `знамя` (l4) belong to the closed ten-word class
// that inserts -ен- in every form but the nominative — плЕмени, знАмени —
// exactly like `имя` from u3l1 (Имени). Both hints say so and both point at имя,
// because the class is small enough to learn as a list.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT92 = {
  id: "ru-u92",
  lang: "ru",
  title: "История и прошлое",
  order: 92,
  stage: "b1",
  lessons: [
    {
      id: "ru-u92l1",
      unit: 92,
      lesson: 1,
      title: "Rulers and realms",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about who ruled and what they ruled — a tsar, an empire, a throne, a dynasty — and name a crown and a coat of arms.",
      items: [
        { id: "ru-u92l1-tsar", type: "vocab", front: "царь", reading: "tsar", meaning: "the ruler of old Russia", accept: ["a tsar of old Russia", "a Russian emperor", "the Russian sovereign"], example: { jp: "Этот царь жил очень давно.", en: "This ruler lived a very long time ago." }, drill: { jp: "Этот царь был очень строгий", en: "This ruler was very strict" }, hint: "TSAR — one syllable. MASCULINE. ⚠️ Its oblique forms move the stress onto the ending: царЯ, царЮ, царёМ. The feminine is царица. ⚠️ Glossed the long way round on purpose: the word transliterates to the English one, and a prompt you can read the answer off is not a card — the trap unit 1 names." },
        { id: "ru-u92l1-imperiya", type: "vocab", front: "империя", reading: "imperiya", meaning: "an empire", accept: ["a state ruling many peoples", "a great realm", "a dominion over many lands"], example: { jp: "Эта империя была очень большая.", en: "This empire was very large." }, drill: { jp: "Эта империя была очень сильная", en: "This empire was very strong" }, hint: "im-PE-ri-ya — stress on PE. FEMININE (-я). ⚠️ Used of a business too: империя этого человека, this man's empire." },
        { id: "ru-u92l1-prestol", type: "vocab", front: "престол", reading: "prestol", meaning: "a throne", accept: ["the seat of a monarch", "the royal seat", "the place a king sits"], example: { jp: "Этот царь был на престоле сорок лет.", en: "This ruler was on the throne for forty years." }, drill: { jp: "Престол был пустой целый год", en: "The throne stood empty for a whole year" }, hint: "pris-TOL — stress on the last syllable, and the е before it reduces to i. MASCULINE. ⚠️ A high, formal word: the everyday трон exists, but престол is what a history book writes — and in a church it is the altar." },
        { id: "ru-u92l1-dinastiya", type: "vocab", front: "династия", reading: "dinastiya", meaning: "a dynasty", accept: ["a line of rulers", "a ruling family", "a family that rules for generations"], example: { jp: "Эта династия была у власти сто лет.", en: "This dynasty was in power for a hundred years." }, drill: { jp: "Эта династия была очень старая", en: "This dynasty was very old" }, hint: "di-NAS-ti-ya — stress on NAS. FEMININE (-я). ⚠️ Also used of ordinary families with a trade: династия врачей, a dynasty of doctors, with врач from unit 2." },
        { id: "ru-u92l1-korona", type: "vocab", front: "корона", reading: "korona", meaning: "a crown", accept: ["the headpiece of a monarch", "what a king wears", "a royal crown"], example: { jp: "Эта корона из золота и камней.", en: "This crown is of gold and stones." }, drill: { jp: "Эта корона очень старая", en: "This crown is very old" }, hint: "ka-RO-na — stress on RO, and the first о reduces to a. FEMININE (-а). Both the object and the institution. ⚠️ A dental crown is коронка, the diminutive." },
        { id: "ru-u92l1-gerb", type: "vocab", front: "герб", reading: "gerb", meaning: "a coat of arms", accept: ["an official emblem", "a heraldic badge", "the sign of a family or a state"], example: { jp: "Герб этого города очень старый.", en: "The coat of arms of this town is very old." }, drill: { jp: "Это очень старый герб", en: "This is a very old coat of arms" }, hint: "GERB — one syllable. MASCULINE. ⚠️ Its plural moves the stress onto the ending: гербЫ. Every Russian город and область has one, and so does the state — государственный герб." },
      ],
    },
    {
      id: "ru-u92l2",
      unit: 92,
      lesson: 2,
      title: "Who was who",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the people of the old order — a prince, a peasant, a slave, a knight, an heir and a tribe.",
      items: [
        { id: "ru-u92l2-knyaz", type: "vocab", front: "князь", reading: "knyaz", meaning: "a prince of old Rus", accept: ["an early Russian ruler", "a lord of a Russian city", "a duke"], example: { jp: "Этот князь жил в этом городе.", en: "This prince lived in this town." }, drill: { jp: "Этот князь был очень богатый", en: "This prince was very rich" }, hint: "KNYAZ — one syllable, opening with kn said together. MASCULINE. ⚠️ Its plural is князьЯ, the rare -ья pattern you met in друзья. He ruled a Russian city before there were tsars; the feminine is княгиня." },
        { id: "ru-u92l2-krestyanin", type: "vocab", front: "крестьянин", reading: "krestyanin", meaning: "a peasant", accept: ["a man who worked the land", "a villager who farmed", "a tiller of the soil"], example: { jp: "Крестьянин работал на земле целый день.", en: "The peasant worked on the land all day." }, drill: { jp: "Этот крестьянин был очень бедный", en: "This peasant was very poor" }, hint: "kris-TYA-nin — stress on TYA, and the first е reduces to i. MASCULINE. ⚠️ Its plural DROPS the -ин: крестьЯне, крестьЯн. Historically the same word as христианин, a Christian." },
        { id: "ru-u92l2-rab", type: "vocab", front: "раб", reading: "rab", meaning: "a slave", accept: ["a person owned by another", "someone held in bondage", "a bondsman"], example: { jp: "Раб работал и не получал денег.", en: "A slave worked and received no money." }, drill: { jp: "Этот раб работал очень много", en: "This slave worked very hard" }, hint: "RAB — one syllable, and the б is said as a p. MASCULINE. ⚠️ Its plural moves the stress onto the ending: рабЫ. Still alive as a figure of speech: раб привычки, a slave to habit, with привычка from unit 29." },
        { id: "ru-u92l2-rytsar", type: "vocab", front: "рыцарь", reading: "rytsar", meaning: "a knight", accept: ["an armoured horseman", "a mounted warrior of old", "a man in armour"], example: { jp: "Этот рыцарь был очень честный.", en: "This knight was very honest." }, drill: { jp: "Этот рыцарь был очень смелый", en: "This knight was very brave" }, hint: "RY-tsar — stress on the first syllable, with the ы from unit 5. MASCULINE. A loan from German Ritter. ⚠️ Very much alive as praise: «он настоящий рыцарь», he is a real gentleman." },
        { id: "ru-u92l2-naslednik", type: "vocab", front: "наследник", reading: "naslednik", meaning: "an heir", accept: ["the one who inherits", "the next in line", "someone who takes over after another"], example: { jp: "У царя был только один наследник.", en: "The tsar had only one heir." }, drill: { jp: "У него есть только один наследник", en: "He has only one heir" }, hint: "nas-LED-nik — stress on LED. MASCULINE. From след, a trace: the one who comes after. ⚠️ Used of businesses and ideas too: наследник этой идеи, with идея from unit 9." },
        { id: "ru-u92l2-plemya", type: "vocab", front: "племя", reading: "plemya", meaning: "a tribe", accept: ["a people living together by blood", "a clan group", "an early people"], example: { jp: "Это племя жило здесь очень давно.", en: "This tribe lived here a very long time ago." }, drill: { jp: "Это племя было очень большое", en: "This tribe was very large" }, hint: "PLE-mya — stress on the first syllable. NEUTER, and ⚠️ one of the ten -мя nouns that insert -ен- in every other form: плЕмени, племенА — exactly like имя from unit 3 (Имени). Learn the two together." },
      ],
    },
    {
      id: "ru-u92l3",
      unit: 92,
      lesson: 3,
      title: "War in the old days",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe an old war — a battle, a siege, a fortress — and name the sword, the shield and the banner.",
      items: [
        { id: "ru-u92l3-bitva", type: "vocab", front: "битва", reading: "bitva", meaning: "a battle", accept: ["a fight between armies", "a pitched fight", "a military engagement"], example: { jp: "Эта битва была очень страшная.", en: "This battle was terrible." }, drill: { jp: "Эта битва была очень важная", en: "This battle was very important" }, hint: "BIT-va — stress on the first syllable. FEMININE (-а). From бить, to beat. ⚠️ Bigger and more formal than a бой: a битва is the one that gets a name in a history book." },
        { id: "ru-u92l3-osada", type: "vocab", front: "осада", reading: "osada", meaning: "a siege", accept: ["the surrounding of a town", "a blockade of a fortress", "the shutting in of a city"], example: { jp: "Осада этого города была очень долгая.", en: "The siege of this town went on a very long time." }, drill: { jp: "Осада была очень долгая и страшная", en: "The siege was very long and terrible" }, hint: "a-SA-da — stress on SA, and the first о reduces to a. FEMININE (-а). From садиться, to sit down: an army that sits down outside a town. ⚠️ Leningrad's own was called блокада, never осада." },
        { id: "ru-u92l3-krepost", type: "vocab", front: "крепость", reading: "krepost", meaning: "a fortress", accept: ["a walled stronghold", "a fort", "a defended place"], example: { jp: "Эта крепость стоит здесь уже пятьсот лет.", en: "This fortress has stood here for five hundred years." }, drill: { jp: "Эта крепость очень старая", en: "This fortress is very old" }, hint: "KRE-past — stress on the first syllable. FEMININE despite the -ь, like every -ость noun. From крепкий, strong. ⚠️ It also means the strength of a drink: крепость вина, with вино from unit 13." },
        { id: "ru-u92l3-mech", type: "vocab", front: "меч", reading: "mech", meaning: "a sword", accept: ["a long blade for fighting", "a fighting blade", "a bladed weapon"], example: { jp: "Этот меч очень старый и тяжёлый.", en: "This sword is very old and very heavy." }, drill: { jp: "Этот меч очень тяжёлый", en: "This sword is very heavy" }, hint: "MECH — one syllable. MASCULINE. ⚠️ Its oblique forms move the stress onto the ending: мечА, мечОм. Do not confuse it with `мечта`, a dream, from unit 24 — two unrelated words that look alike." },
        { id: "ru-u92l3-shchit", type: "vocab", front: "щит", reading: "shchit", meaning: "a fighting shield", accept: ["what a fighter holds to block blows", "a guard carried on the arm", "a defensive board"], example: { jp: "Щит был из дерева и железа.", en: "The shield was of wood and iron." }, drill: { jp: "Этот щит очень тяжёлый", en: "This shield is very heavy" }, hint: "SHCHIT — one syllable, opening with the long soft щ from unit 3. MASCULINE. ⚠️ Its oblique forms move the stress: щитА. In modern Russian it is also a panel — щит управления, a control panel." },
        { id: "ru-u92l3-znamya", type: "vocab", front: "знамя", reading: "znamya", meaning: "a banner", accept: ["a standard carried into battle", "the colours of a regiment", "a flag on a staff"], example: { jp: "Знамя этой армии было очень старое.", en: "The banner of this army was very old." }, drill: { jp: "Это знамя было очень красивое", en: "This banner was very beautiful" }, hint: "ZNA-mya — stress on the first syllable. NEUTER, and ⚠️ another of the -мя nouns that insert -ен-: знАмени, знамёна, exactly like племя in lesson 2. The everyday word for a flag is флаг; знамя is the one soldiers carry." },
      ],
    },
    {
      id: "ru-u92l4",
      unit: 92,
      lesson: 4,
      title: "How it all changed hands",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about how power changed — a revolution, an uprising, a conquest, a colony — and name the palace and the archive that keep the record.",
      items: [
        { id: "ru-u92l4-revolyutsiya", type: "vocab", front: "революция", reading: "revolyutsiya", meaning: "a revolution", accept: ["the overthrow of a government", "a complete change of rule", "a political upheaval"], example: { jp: "После революции у власти был народ.", en: "After the revolution the people were in power." }, drill: { jp: "Эта революция была очень давно", en: "This revolution was a very long time ago" }, hint: "ri-va-LYU-tsi-ya — stress on LYU, and both vowels before it reduce. FEMININE (-я). ⚠️ In Russian history «Революция» with no adjective means 1917 and nothing else." },
        { id: "ru-u92l4-vosstanie", type: "vocab", front: "восстание", reading: "vosstanie", meaning: "an uprising", accept: ["a rising against a ruler", "a revolt", "an armed rebellion"], example: { jp: "Восстание было в этой деревне.", en: "The uprising was in this village." }, drill: { jp: "Это восстание было очень большое", en: "This uprising was very large" }, hint: "vas-STA-ni-ye — stress on STA, the first о reduces to a, and the сс is held a beat longer. NEUTER (-е). From встать, to get up, which unit 31 taught: the people standing up. Smaller than a революция, and usually unsuccessful." },
        { id: "ru-u92l4-zavoevanie", type: "vocab", front: "завоевание", reading: "zavoevanie", meaning: "a conquest", accept: ["the taking of land by force", "the winning of a country in war", "military subjugation"], example: { jp: "Завоевание этой страны было очень быстрое.", en: "The conquest of this country was very quick." }, drill: { jp: "Это завоевание было очень быстрое", en: "This conquest was very quick" }, hint: "za-va-i-VA-ni-ye — six syllables, stress on VA. NEUTER (-е). Built on the same во- root as война from unit 51. ⚠️ Its plural means gains in a good sense: завоевания науки, the achievements of science." },
        { id: "ru-u92l4-koloniya", type: "vocab", front: "колония", reading: "koloniya", meaning: "a colony", accept: ["a land ruled from abroad", "a possession overseas", "a dependent territory"], example: { jp: "Эта страна была колонией сто лет.", en: "This country was a colony for a hundred years." }, drill: { jp: "Это была очень богатая колония", en: "This was a very rich colony" }, hint: "ka-LO-ni-ya — stress on LO, and the first о reduces to a. FEMININE (-я). ⚠️ In Russian it is ALSO the standard word for a prison camp — исправительная колония — and that is the sense you will meet in the news far more often." },
        { id: "ru-u92l4-dvorets", type: "vocab", front: "дворец", reading: "dvorets", meaning: "a palace", accept: ["a grand royal house", "the house of a ruler", "a great ceremonial building"], example: { jp: "Этот дворец очень большой и красивый.", en: "This palace is very large and very beautiful." }, drill: { jp: "Этот дворец очень красивый", en: "This palace is very beautiful" }, hint: "dva-RETS — stress on the last syllable, and the о reduces to a. MASCULINE. ⚠️ The е DROPS in every other form: дворцА, дворцЫ — the same class as отец from unit 10. Built on двор from unit 60, a yard." },
        { id: "ru-u92l4-arkhiv", type: "vocab", front: "архив", reading: "arkhiv", meaning: "an archive", accept: ["a store of old documents", "where records are kept", "a collection of papers"], example: { jp: "В архиве лежат очень старые документы.", en: "Very old documents are lying in the archive." }, drill: { jp: "Этот архив очень большой", en: "This archive is very large" }, hint: "ar-KHIV — stress on the last syllable, with the scraping х. MASCULINE. ⚠️ Also the everyday computer word: an архив is a zip file, and архивировать is to zip something." },
      ],
    },
  ],
};
