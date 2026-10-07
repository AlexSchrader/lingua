// RU Unit 105 — Цивилизация и древность ("Civilisation and antiquity") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 1 (u98–u110). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit61.js §1–§8, and
// ru/unit98.js §1–§7d for this band.
//
// ⚠️ THE SCAFFOLD TITLE WAS "History and culture" AND FOUR UNITS SPENT IT.
// u92 История и прошлое owns the TSARS AND THE MEDIEVAL WAR (царь · империя ·
// престол · династия · князь · крестьянин · рыцарь · битва · осада · крепость ·
// меч · щит · революция · восстание · колония · дворец); u93 Вера и обряд owns
// RELIGION (храм · монастырь · икона · бог · пророк · святой · монах · молитва ·
// обряд · грех); u55 Искусство и культура owns THE ARTS (литература · живопись ·
// скульптура · миф · поэт · традиция · религия · легенда); u73 owns the KEEPING
// of a record (архив · летопись · мемуары · предание · наследие · предок).
// So u105 NARROWS to the DEEP past and the STUDY of it: how we know anything
// about it at all, what physically survived, the named ages of the world, and how
// people actually lived. A learner could already name a tsar and a monastery and
// could not name a dig, a manuscript, antiquity, the middle ages or a nomad.
//
// ⚠️ CROSS-BLOCK BOUNDARY: **u105 owns ARCHAEOLOGY AND THE DEEP PAST. u126
// Строительство owns `реставрация` of a building.** u105 cards `развалины`, which
// is what is left, not the work of putting it back.
//
// ⚠️ TWO REFUSALS THIS UNIT DID NOT DECIDE FOR ITSELF — both are earlier seats'
// written refusals, and unit98.js §3 makes them outrank a clean front probe:
//   `обычай` — refused in unit51.js §3 against `обычный` (u40). `уклад` is the
//        card that fills the slot, and it is the better word anyway: a уклад is
//        the whole pattern of living, not one custom.
//   `старина` — refused in unit92.js against `старый` (u19). Nothing replaces it;
//        the unit says древность in its title and cards the ages instead.
//
// ⚠️ SIX MORE CANDIDATES REFUSED, each for a stated reason:
//   `предыстория` — `история` (u24) plus пред-, both available: composed. It was
//        on this unit's own candidate list as free and is refused here.
//   `родословная` · `зодчий` — SUBSTANTIVISED ADJECTIVES, barred by unit1.js §5's
//        last rule and unit98.js §4. Both probe free as strings.
//   `памятник` — TAKEN (u30), in its tourist sense.
//   `городище` — `город` (u6) hands over "an old town site" closely enough, and
//        `курган` already carries the archaeology-of-the-ground job.
//   `кочевой` — the same lexeme as the carded `кочевник`.
//   Dropped for count at 24, all legal: `усыпальница` · `кремль` · `бронза` ·
//        `трактат` · `феодал`.
//
// ⚠️ `просвещение` ALLOWED although unit51.js §3 refused `светлый` against
// `свет` (u15), and the reasoning rather than the verdict: светлый IS свет with
// an adjective ending and one sense, while просвещение is two derivational steps
// away and names a historical movement. "Light" does not hand a learner "the age
// that put reason above authority". unit51.js §3's own `одиночество` case.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT105 = {
  id: "ru-u105",
  lang: "ru",
  title: "Цивилизация и древность",
  order: 105,
  stage: "b2",
  lessons: [
    {
      id: "ru-u105l1",
      unit: 105,
      lesson: 1,
      title: "Digging it up",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how the deep past is known — the study of what is dug up, a dig, a burial mound, a potsherd, standing ruins, and the fixing of a find's age.",
      items: [
        { id: "ru-u105l1-arkheologiya", type: "vocab", front: "археология", reading: "arkheologiya", meaning: "the study of the past through what is dug up", accept: ["the science of excavated remains", "the study of ancient things found in the ground", "the discipline of recovering history from the soil"], example: { jp: "Археология даёт больше, чем старые книги, потому что земля не умеет врать.", en: "Archaeology gives more than old books, because the earth does not know how to lie." }, drill: { jp: "Археология даёт больше старых книг", en: "Archaeology gives more than old books" }, hint: "ar-khe-a-LO-gi-ya — six syllables, stress on LO, and the х is the rough kh from unit 2. FEMININE (-я). ⚠️ The opening архе- is the same element as in архив from unit 73 and архитектура, unit 126's card: all three are about what is first or old." },
        { id: "ru-u105l1-raskopki", type: "vocab", front: "раскопки", reading: "raskopki", meaning: "a dig opened to uncover remains", accept: ["an excavation of a site", "the digging out of what lies buried", "work opening ancient ground"], example: { jp: "Раскопки идут уже третье лето, однако находок пока мало.", en: "The dig has been going on a third summer already, yet there have been few finds." }, drill: { jp: "Раскопки здесь идут каждое лето", en: "The dig here goes on every summer" }, hint: "ras-KOP-ki — stress on KOP. ⚠️ PLURAL ONLY and FEMININE — one dig is still раскопки, exactly like `прения` from unit 98 and `переговоры` from unit 103. From `копать` in unit 57." },
        { id: "ru-u105l1-kurgan", type: "vocab", front: "курган", reading: "kurgan", meaning: "an ancient burial mound raised as a hill", accept: ["a grave covered by a man-made mound", "an earth barrow over a burial", "a raised tomb of the steppe peoples"], example: { jp: "Курган стоит в степи, и видно его очень далеко.", en: "The burial mound stands in the steppe, and is visible from a very long way off." }, drill: { jp: "Курган в степи видно далеко", en: "A burial mound in the steppe is visible from far off" }, hint: "kur-GAN — stress on the last syllable. MASCULINE. A Turkic loan, which is why it has no Slavic relatives. ⚠️ A REAL FEATURE OF THE RUSSIAN AND UKRAINIAN LANDSCAPE: thousands stand in the `степь` from unit 90, and many Russian place names end in -курган." },
        { id: "ru-u105l1-cherepok", type: "vocab", front: "черепок", reading: "cherepok", meaning: "a broken fragment of old pottery", accept: ["a shard dug out of the ground", "a piece of a smashed vessel", "a potsherd from a site"], example: { jp: "Черепок нашли в земле, а целую амфору так и не нашли.", en: "A shard was found in the ground, and a whole jar was never found at all." }, drill: { jp: "Черепок нашли в самой земле", en: "A shard was found in the earth itself" }, hint: "che-re-POK — stress on the last syllable. MASCULINE, and ⚠️ the о DROPS in every other form: черепкА, черепкИ — the `отец` class from unit 10 again. From череп, a skull, which is not carded: both are hard shells. ⚠️ The commonest find on any dig, which is why it has a word of its own." },
        { id: "ru-u105l1-razvaliny", type: "vocab", front: "развалины", reading: "razvaliny", meaning: "what is left standing of a ruined building", accept: ["the remains of a collapsed structure", "broken walls left of a building", "the standing wreck of something built"], example: { jp: "Развалины этой крепости стоят здесь уже пятьсот лет.", en: "The ruins of this fortress have stood here five hundred years already." }, drill: { jp: "Развалины крепости стоят здесь давно", en: "The ruins of the fortress have stood here a long time" }, hint: "raz-VA-li-ny — stress on VA. ⚠️ PLURAL ONLY and FEMININE. From валить, to fell. ⚠️ u126 Строительство owns `реставрация`, the work of putting a building back; this card is what is left when nobody does. Also figurative: развалины прежней жизни." },
        { id: "ru-u105l1-datirovka", type: "vocab", front: "датировка", reading: "datirovka", meaning: "the fixing of how old a thing is", accept: ["the assigning of an age to a find", "the dating of an object", "a determination of when something was made"], example: { jp: "Датировка этой рукописи остаётся спорной.", en: "The dating of this manuscript remains disputed." }, drill: { jp: "Датировка здесь очень трудная", en: "The dating here is very difficult" }, hint: "da-ti-ROV-ka — stress on ROV, and the о reduces to a. FEMININE (-а). Built on `дата` from unit 21. ⚠️ A technical word with a sharp use: until a find has a датировка it proves nothing about when anything happened — the same logic as `калибровка` in unit 104." },
      ],
    },
    {
      id: "ru-u105l2",
      unit: 105,
      lesson: 2,
      title: "What physically survived",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what the ancient world left behind — a handwritten text, a roll, writing skin, a picture sign, a two-handled jar and a preserved body.",
      items: [
        { id: "ru-u105l2-rukopis", type: "vocab", front: "рукопись", reading: "rukopis", meaning: "a text written out by hand", accept: ["a handwritten document", "a text as it stood before printing", "an author's written copy"], example: { jp: "Рукопись нашли в монастыре, и прочитать её мог только один человек.", en: "The manuscript was found in a monastery, and only one man could read it through." }, drill: { jp: "Рукопись нашли в старом монастыре", en: "The manuscript was found in an old monastery" }, hint: "RU-ka-pis — stress on the first syllable, and the о reduces to a. FEMININE despite the -ь, like every -пись noun. A compound of рука, unit 20, and писать, unit 4 — hand-writing. ⚠️ Still live in publishing: a writer sends his рукопись to a publisher even when it is typed." },
        { id: "ru-u105l2-svitok", type: "vocab", front: "свиток", reading: "svitok", meaning: "a long sheet rolled up for keeping", accept: ["a rolled document", "a written roll of parchment", "a text kept as a roll rather than a book"], example: { jp: "Свиток хранили в сухом месте, потому что иначе его не было бы.", en: "The scroll was kept in a dry place, because otherwise it would not exist." }, drill: { jp: "Свиток хранили в очень сухом месте", en: "The scroll was kept in a very dry place" }, hint: "SVI-tak — stress on the first syllable, and the final о reduces to a. MASCULINE, and ⚠️ the о DROPS in every other form: свиткА, свиткИ. From вить, to wind. ⚠️ Also modern: свиток is what Russian calls scrolling on a screen." },
        { id: "ru-u105l2-pergament", type: "vocab", front: "пергамент", reading: "pergament", meaning: "writing material made from prepared skin", accept: ["animal skin dressed for writing on", "the skin sheet used before paper", "dressed hide written upon"], example: { jp: "Пергамент дороже бумаги, зато живёт гораздо дольше.", en: "Parchment is dearer than paper, but lasts far longer." }, drill: { jp: "Этот пергамент очень старый", en: "This parchment is very old" }, hint: "per-ga-MENT — stress on the last syllable. MASCULINE. Named after Pergamon. ⚠️ ALSO IN EVERY RUSSIAN KITCHEN: пергамент is baking paper, and that is the sense a learner meets first in a shop. The adjective is пергаментный." },
        { id: "ru-u105l2-ieroglif", type: "vocab", front: "иероглиф", reading: "ieroglif", meaning: "a picture sign standing for a whole word", accept: ["a carved picture-character", "a sign that is a drawing of its meaning", "a pictographic character"], example: { jp: "Каждый иероглиф здесь значит целое слово, и читать их надо учиться.", en: "Every character here means a whole word, and one has to learn to read them." }, drill: { jp: "Каждый иероглиф значит целое слово", en: "Every character means a whole word" }, hint: "i-ye-RO-glif — stress on RO, and the opening ие is TWO vowels. MASCULINE. ⚠️ Russian uses it for Chinese and Japanese characters as well as Egyptian ones, so this is the word in «китайские иероглифы». Figuratively, anything unreadable: «это для меня иероглифы»." },
        { id: "ru-u105l2-amfora", type: "vocab", front: "амфора", reading: "amfora", meaning: "a tall two-handled jar of the ancient world", accept: ["an antique vessel with a handle on each side", "a pointed storage jar of classical times", "a classical wine jar"], example: { jp: "Амфору нашли в море целой, и это редкий случай.", en: "The jar was found in the sea intact, and that is a rare case." }, drill: { jp: "Амфора стоит в этом музее", en: "The jar stands in this museum" }, hint: "AM-fa-ra — stress on the first syllable, and both unstressed о reduce to a. FEMININE (-а). ⚠️ Found by the thousand on the Black Sea floor, which is why it is a Russian museum word and not only a Greek one. Pairs with `черепок` in lesson 1: a черепок is usually all that is left of one." },
        { id: "ru-u105l2-mumiya", type: "vocab", front: "мумия", reading: "mumiya", meaning: "a body preserved against decay", accept: ["a corpse kept from rotting by treatment", "an embalmed ancient body", "a preserved body wrapped for burial"], example: { jp: "Мумия лежала здесь три тысячи лет, и она совсем целая.", en: "The mummy lay here three thousand years, and it is quite intact." }, drill: { jp: "Эта мумия совсем целая", en: "This mummy is quite intact" }, hint: "MU-mi-ya — stress on the first syllable. FEMININE (-я). ⚠️ A Russian usage worth knowing: Lenin's body in Red Square is popularly called a мумия, so the word carries a political charge here that it does not in English. The verb is мумифицировать." },
      ],
    },
    {
      id: "ru-u105l3",
      unit: 105,
      lesson: 3,
      title: "The named ages",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the great periods — a whole civilisation, classical antiquity, the middle ages, the order of lords and land, the age of reason — and what came before any of them.",
      items: [
        { id: "ru-u105l3-tsivilizatsiya", type: "vocab", front: "цивилизация", reading: "tsivilizatsiya", meaning: "a whole settled way of life with cities and writing", accept: ["a developed society taken as one whole", "an entire culture with towns and letters", "a great historical society"], example: { jp: "Эта цивилизация исчезла быстро, и причину никто не знает.", en: "This civilisation disappeared quickly, and nobody knows the reason." }, drill: { jp: "Эта цивилизация исчезла очень быстро", en: "This civilisation disappeared very quickly" }, hint: "tsi-vi-li-ZA-tsi-ya — six syllables, stress on ZA. FEMININE (-я). ⚠️ Broader than `общество` from unit 51, which is one society now, and than `культура` from unit 55, which is what a people makes: a цивилизация is the whole settled order, cities and writing included." },
        { id: "ru-u105l3-antichnost", type: "vocab", front: "античность", reading: "antichnost", meaning: "the world of Greece and Rome", accept: ["classical antiquity", "the age of the Greeks and the Romans", "the classical ancient world"], example: { jp: "Античность дала нам театр, суд и саму идею закона.", en: "Antiquity gave us the theatre, the court and the very idea of law." }, drill: { jp: "Античность дала нам театр и суд", en: "Antiquity gave us the theatre and the court" }, hint: "an-TICH-nast — stress on TICH. FEMININE despite the -ь, like every -ость noun. ⚠️ It means GREECE AND ROME SPECIFICALLY, not antiquity in general — Egypt and Babylon are древний мир, not античность. The adjective античный is on every Russian museum label." },
        { id: "ru-u105l3-srednevekovye", type: "vocab", front: "средневековье", reading: "srednevekove", meaning: "the thousand years between antiquity and the modern age", accept: ["the medieval period", "the middle ages", "the long age of knights and monasteries"], example: { jp: "В средневековье книги писали в монастырях, и стоили они очень дорого.", en: "In the middle ages books were written in monasteries, and they cost a great deal." }, drill: { jp: "Средневековье было очень долгим", en: "The middle ages were very long" }, hint: "sred-ne-ve-KO-vye — stress on KO, and the final -вье is one syllable. NEUTER (-е). ⚠️ ITS READING IS WRITTEN `srednevekove`, NOT `srednevekovye`: unit 1 §1's table DROPS ь from every reading, so -вье folds to -ve. The same trap as `досье` in unit 99, and selfcheck is what catches it. A compound of средний and `век` from unit 38 — the middle age. ⚠️ Used as an insult about the present: «это какое-то средневековье». u92's knights and fortresses belong to it." },
        { id: "ru-u105l3-feodalizm", type: "vocab", front: "феодализм", reading: "feodalizm", meaning: "the order where land is held in return for service", accept: ["the medieval system of lords and vassals", "rule resting on landholding and duty", "the manorial order of society"], example: { jp: "Феодализм держался на земле, и правил тот, у кого она была.", en: "Feudalism rested on land, and whoever had it ruled." }, drill: { jp: "Феодализм держался только на земле", en: "Feudalism rested on land alone" }, hint: "fe-a-da-LIZM — stress on the last syllable, and the о reduces to a. MASCULINE. ⚠️ A SCHOOL WORD IN RUSSIA in a way it is not in English: Soviet history teaching ran on the sequence первобытный строй — феодализм — капитализм, so every Russian learned it in that order. Pairs with `крестьянин` and `князь` from unit 92." },
        { id: "ru-u105l3-prosveshchenie", type: "vocab", front: "просвещение", reading: "prosveshchenie", meaning: "the age that put reason above authority", accept: ["the eighteenth-century movement of reason", "the enlightening of a society by learning", "the age of reason"], example: { jp: "Просвещение верило, что наука сильнее веры.", en: "The Enlightenment believed that science is stronger than faith." }, drill: { jp: "Просвещение верило только в науку", en: "The Enlightenment believed only in science" }, hint: "pra-svi-SHCHE-ni-ye — stress on SHCHE, the о reduces to a, and the е before it to i. NEUTER (-ие). ⚠️ ALSO EDUCATION AS A STATE FUNCTION: народное просвещение was the name of the Soviet education ministry. ⚠️ unit 51 refused `светлый` against свет from unit 15; this word is two steps further out and names a movement, which is why it stands." },
        { id: "ru-u105l3-pervobytnyy", type: "vocab", front: "первобытный", reading: "pervobytnyy", meaning: "of the earliest human times, before any cities", accept: ["belonging to the dawn of humanity", "of the age before any civilisation", "primeval in kind"], example: { jp: "Первобытный человек жил без города и без письма.", en: "Primeval man lived with no city and no writing." }, drill: { jp: "Первобытный человек не знал города", en: "Primeval man knew no city" }, hint: "per-va-BYT-nyy — stress on BYT, and the о reduces to a. ADJECTIVE. A compound of первый, unit 21, and быт, everyday life — the first way of living. ⚠️ Also a reproach about behaviour: первобытные нравы, savage manners." },
      ],
    },
    {
      id: "ru-u105l4",
      unit: 105,
      lesson: 4,
      title: "How people actually lived",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a people and its life — the settled pattern of living, a herdsman who moves, the old many-god religion, a shared cast of mind, a people by descent, and what is handed down by word of mouth.",
      items: [
        { id: "ru-u105l4-uklad", type: "vocab", front: "уклад", reading: "uklad", meaning: "the settled pattern of how people live", accept: ["the established way of life of a community", "the customary order of daily living", "a habitual pattern of existence"], example: { jp: "Старый уклад держался в деревне ещё очень долго.", en: "The old way of life held on in the village a very long time." }, drill: { jp: "Старый уклад держался здесь долго", en: "The old way of life held on here a long time" }, hint: "u-KLAD — stress on the last syllable. MASCULINE. From класть, to lay — how a life is laid out. ⚠️ THIS IS THE CARD THAT STANDS WHERE `обычай` COULD NOT: unit 51 refused обычай against обычный from unit 40, and уклад is the better word anyway — a уклад is the whole pattern, not one custom. The stock phrase is патриархальный уклад." },
        { id: "ru-u105l4-kochevnik", type: "vocab", front: "кочевник", reading: "kochevnik", meaning: "somebody who moves with his herds", accept: ["a wandering herdsman", "a person of no fixed home who follows pasture", "one of a roaming people"], example: { jp: "Кочевник шёл за своим скотом, и дома у него не было.", en: "The nomad followed his herd, and had no house." }, drill: { jp: "Этот кочевник живёт в степи", en: "This nomad lives in the steppe" }, hint: "ka-CHEV-nik — stress on CHEV, and the о reduces to a. MASCULINE. ⚠️ CENTRAL TO RUSSIAN HISTORY, not exotic: the steppe peoples who ruled Rus for two centuries were кочевники, and `племя` from unit 92 and `степь` from unit 90 are its natural companions. The adjective кочевой is not carded — same lexeme." },
        { id: "ru-u105l4-yazychestvo", type: "vocab", front: "язычество", reading: "yazychestvo", meaning: "the religion of many gods before the one God", accept: ["the worship of a great many gods", "pre-Christian belief", "heathen religion"], example: { jp: "Язычество уходило медленно, и часть его обрядов живёт до сегодня.", en: "Paganism receded slowly, and some of its rites live on to this day." }, drill: { jp: "Язычество уходило очень медленно", en: "Paganism receded very slowly" }, hint: "ya-ZY-chist-va — stress on ZY, and the final о reduces to a. NEUTER (-о). ⚠️ From язык, a tongue, by way of язычник, a heathen — the connection is the biblical \"nations\", and it surprises every learner. Pairs with `бог` and `обряд` from unit 93, which teach the Christian side." },
        { id: "ru-u105l4-mentalitet", type: "vocab", front: "менталитет", reading: "mentalitet", meaning: "the settled cast of mind of a whole people", accept: ["the characteristic way a people thinks", "a shared outlook across a group", "the habits of thought of a nation"], example: { jp: "Менталитет меняется гораздо медленнее закона.", en: "A people's cast of mind changes far more slowly than the law." }, drill: { jp: "Менталитет меняется очень медленно", en: "A people's cast of mind changes very slowly" }, hint: "men-ta-li-TET — stress on the last syllable. MASCULINE. ⚠️ ENORMOUSLY COMMON IN RUSSIAN SELF-DESCRIPTION — «русский менталитет» is a stock phrase of newspaper and dinner-table alike — and it is used far more freely than English \"mentality\", which sounds clinical." },
        { id: "ru-u105l4-etnos", type: "vocab", front: "этнос", reading: "etnos", meaning: "a people sharing descent and language", accept: ["a group bound by common origin", "a people considered as one stock", "an ethnic community as a unit"], example: { jp: "Каждый этнос здесь говорит на своём языке, и школы тоже разные.", en: "Every people here speaks its own language, and the schools are different too." }, drill: { jp: "Каждый этнос говорит на своём языке", en: "Every people speaks its own language" }, hint: "ET-nas — stress on the first syllable, and the final о reduces to a. MASCULINE. ⚠️ A SCHOLARLY word that matters in Russia because the state counts them: Russia recognises well over a hundred, and the adjective этнический is in the news constantly. Narrower than `народ` from unit 51, which can mean the people of a country whatever their descent." },
        { id: "ru-u105l4-folklor", type: "vocab", front: "фольклор", reading: "folklor", meaning: "what a people hands down by word of mouth", accept: ["the songs and tales of a people", "traditional lore passed on by speech", "a people's unwritten inheritance"], example: { jp: "Фольклор жил без книг, потому что его просто помнили.", en: "Folklore lived without books, because people simply remembered it." }, drill: { jp: "Фольклор жил совсем без книг", en: "Folklore lived with no books at all" }, hint: "fal-KLOR — stress on the last syllable, and the first о reduces to a. MASCULINE. ⚠️ Narrower than `традиция` from unit 55 and broader than `легенда` and `предание`: фольклор is the whole body of unwritten song, tale and saying. Russian also uses it jokingly of office gossip: «это наш внутренний фольклор»." },
      ],
    },
  ],
};
