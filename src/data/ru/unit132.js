// RU Unit 132 — Жильё и ремонт ("Housing and renovation") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u124–u136). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit87.js §1–§6, and
// ru/unit124.js §1–§5 for this block.
// Probes quoted in this header are reproducible with
// `node scripts/selfcheck-ru-b2-block3.mjs --probe <word> ...` — see unit124.js.
//
// THE MEASURED HOLE. u15 Дом и вещи is THE OBJECTS INSIDE a home (стол · стул ·
// окно · дверь · пол · свет), u10l4 gives `квартира`, u44 gives `аренда`, u29l3
// gives `ремонт` as a bare noun and u60l1 the balcony. Across 2,328 cards
// nothing names HOUSING as a thing you buy, rent, divide or do up: no mortgage,
// no layout, no basement, no loft, no wallpaper, no tiling, no developer, no
// eviction. Twenty-one of the probed seeds were free and three more were added.
//
// ⚠️ BOUNDARY — u126 OWNS THE BUILDING AS A STRUCTURE (фундамент · каркас ·
// кровля · фасад · смета · подрядчик) AND THIS UNIT OWNS WHERE PEOPLE LIVE IN
// IT. No card here repeats one of u126's, and `застройщик` (the developer who
// sells you a flat) is deliberately a different role from u126's `подрядчик`
// (the firm hired to do the work); both hints say so.
//
// ⚠️ `прихожая` IS BARRED and it is the one room a Russian flat always has.
// It is the substantivised feminine adjective of прихожий, so unit1.js §5's
// last rule and unit51.js §2(b) forbid it — the rule that killed `лёгкое` at
// A2, `вселенная` at u124 and `подозреваемый` at u131 (unit124.js §1's list).
// It probes FREE as a string. l2 cards `коридор` instead, which is the word
// Russians use for the same space in a modern flat, and `тамбур` (l1) covers
// the lobby between two doors.
//
// ⚠️ `розетка` WAS DROPPED AND IT IS NOT A RULE, IT IS THIS BLOCK'S OWN FOOT.
// `роза` is carded at u127l4, THREE UNITS EARLIER AND BY THIS SAME SEAT, and
// розетка is its diminutive — literally "a little rose", which is what the
// socket is named after. A front probe cannot see that, because the probe was
// run before u127 existed. The same trap cost `ракетка` at u136 against this
// block's own `ракета` (u124l3). ⚠️ THE LESSON FOR THE NEXT SEAT: re-probe
// after each unit you author, not once at the start — your own earlier units
// are part of the corpus the probe should be answering against. Check 2 and 3
// of `scripts/selfcheck-ru-b2-block3.mjs` run against the LIVE corpus for
// exactly this reason, and they are what caught both.
//
// ⚠️ THREE DERIVATIONS OF TAUGHT WORDS ARE KEPT ON PURPOSE. Each is a judgement
// under unit1.js §D, stated so it is not re-litigated:
//   `жильё` vs `жить` (u4) — "housing" is not recoverable from "to live", and
//        CLAUDE.md's own warning is that over-reading the lexeme rule blocks
//        the commonest words in the language. KEPT.
//   `капремонт` vs `ремонт` (u29l3) — a CLIPPED COMPOUND (капитальный ремонт),
//        the same shape as `живопись` at u55l1, and it means a specific thing:
//        the once-in-decades overhaul of a whole block, paid from a fund every
//        Russian flat-owner contributes to. KEPT.
//   `краска` vs `красный` (u16l?) and `красивый` (u19l2) — the крас- root is at
//        two before this unit. `краска` is a tin of paint; nothing in "red" or
//        "beautiful" produces it. KEPT, and it is the closest of the three.
//   `жилец` was REFUSED on the same test, because it would have made жил- the
//        third claim inside this unit beside `жильё` — `выселение` took its
//        slot.
//
// REFUSED, with the reason:
//   `прихожая` · `розетка` · `жилец` — above.
//   `новостройка` and `новосёл` — against `новость` (u39) plus `строить`.
//   `проводка` — against `проволока` (u89), and u125l2's `проводник` already
//        has a claim on the вод- root for this block.
//   `наём` — its gloss sits on top of `аренда` (u44).
//   `балкон` TAKEN (u60l1) · `сарай` TAKEN (u88l1) · `лифт` TAKEN (u12l2) ·
//        `участок` against `участвовать` (u48).
//   `стяжка` · `утеплитель` · `опалубка` · `мансарда` — all FREE, all dropped
//        for count at 24.
//
// ⚠️ `линолеум` IS GLOSSED THE LONG WAY ROUND. It transliterates to the English
// word, so "linoleum" normalises to exactly the card's own reading and is a
// free pass under unit1.js §9 — the same trap `генерал` hit at u129l1, `вето`
// at u130l2 and `алиби` at u131l4.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT132 = {
  id: "ru-u132",
  lang: "ru",
  title: "Жильё и ремонт",
  order: 132,
  stage: "b2",
  lessons: [
    {
      id: "ru-u132l1",
      unit: 132,
      lesson: 1,
      title: "Where people live",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the kinds of home a Russian actually lives in — housing itself, a dacha, a country estate, a shared flat, the stairwell entrance and the lobby between two doors.",
      items: [
        { id: "ru-u132l1-zhilyo", type: "vocab", front: "жильё", reading: "zhilyo", meaning: "housing", accept: ["somewhere to live", "a place of one's own to live in", "living space as a thing you need"], example: { jp: "Жильё в этом городе такое дорогое, что молодые люди живут с мамой и папой.", en: "Housing in this city is so expensive that young people live with their mum and dad." }, drill: { jp: "Это жильё очень дорогое", en: "This housing is very expensive" }, hint: "zhi-LYO — stress on the last syllable. NEUTER (-ё), and ⚠️ IT IS A MASS NOUN: there is no natural plural, so «жильё» covers one flat or a whole programme. Built on `жить` from unit 4 — but \"to live\" does not hand you \"housing\", which is why it is carded." },
        { id: "ru-u132l1-dacha", type: "vocab", front: "дача", reading: "dacha", meaning: "a summer house out of town", accept: ["a country cottage used in summer", "a small second house with a garden", "the place a town family spends the summer"], example: { jp: "На дачу они ездят каждые выходные и работают там в саду.", en: "They go to the dacha every weekend and work in the garden there." }, drill: { jp: "Эта дача очень старая", en: "This dacha is very old" }, hint: "DA-cha — stress on the first syllable. FEMININE (-а). From дать, to give: the plots were GIVEN out by the state. ⚠️ Not a holiday villa — a дача is usually small, often has no heating, and the point of it is the garden." },
        { id: "ru-u132l1-usadba", type: "vocab", front: "усадьба", reading: "usadba", meaning: "a country estate", accept: ["a manor house with its land", "a gentleman's country property", "a big old house with grounds"], example: { jp: "Усадьба стоит в лесу, и к ней идёт только одна дорога.", en: "The estate stands in the forest, and only one road leads to it." }, drill: { jp: "Эта усадьба очень старая", en: "This estate is very old" }, hint: "u-SAD-ba — stress on SAD, and the д is said as a t before the б. FEMININE (-а). ⚠️ The word of nineteenth-century novels: a усадьба belonged to a landowner and is what every Chekhov play is set in. A `дача` is its small modern descendant." },
        { id: "ru-u132l1-kommunalka", type: "vocab", front: "коммуналка", reading: "kommunalka", meaning: "a flat shared between families", accept: ["a flat where each family has one room", "a communal apartment", "a flat with one kitchen for several families"], example: { jp: "В коммуналке было шесть комнат и одна кухня на всех.", en: "In the shared flat there were six rooms and one kitchen for everyone." }, drill: { jp: "Эта коммуналка очень старая", en: "This shared flat is very old" }, hint: "ka-mmu-NAL-ka — stress on NAL, the first о reduces to a, and the мм is held a beat longer. FEMININE (-а). ⚠️ A SOVIET institution and a live word: one family per room, one kitchen, one bathroom, and thousands of them still occupied in Petersburg." },
        { id: "ru-u132l1-podezd", type: "vocab", front: "подъезд", reading: "podezd", meaning: "the entrance of a block of flats", accept: ["the stairwell door of a building", "one entrance and its staircase", "the shared doorway people go in by"], example: { jp: "Наш подъезд третий, и там всегда стоят машины.", en: "Our entrance is the third one, and there are always cars there." }, drill: { jp: "Этот подъезд очень старый", en: "This entrance is very old" }, hint: "pad-YEZD — stress on YEZD, the о reduces to a, and the hard sign ъ keeps д and е apart so you say d-ye, not dye. MASCULINE. ⚠️ It is also the ADDRESS: a Russian says «дом 5, подъезд 2, квартира 40», and without the подъезд number nobody will find you." },
        { id: "ru-u132l1-tambur", type: "vocab", front: "тамбур", reading: "tambur", meaning: "a lobby between two doors", accept: ["the small space between an outer and inner door", "an airlock porch at an entrance", "the cold space just inside a door"], example: { jp: "В тамбуре было холодно, но уже не было ветра.", en: "In the lobby it was cold, but there was no wind any more." }, drill: { jp: "Этот тамбур очень маленький", en: "This lobby is very small" }, hint: "TAM-bur — stress on the first syllable. MASCULINE. A French loan. ⚠️ The same word is the vestibule at the end of a railway carriage, which is where you will hear it most — and unit 125's `вагон` has one at each end." },
      ],
    },
    {
      id: "ru-u132l2",
      unit: 132,
      lesson: 2,
      title: "The layout",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a flat is laid out — the layout itself, rooms that open into each other, a basement, a loft, a store cupboard and a corridor.",
      items: [
        { id: "ru-u132l2-planirovka", type: "vocab", front: "планировка", reading: "planirovka", meaning: "the layout of a flat", accept: ["how the rooms of a home are arranged", "the plan of the inside of a flat", "the way space is divided in a home"], example: { jp: "Планировка этой квартиры очень удобная: кухня рядом с дверью.", en: "The layout of this flat is very convenient: the kitchen is next to the door." }, drill: { jp: "Эта планировка очень удобная", en: "This layout is very convenient" }, hint: "pla-ni-ROV-ka — stress on ROV. FEMININE (-а). ⚠️ The first question a Russian asks about a flat, after the price: «какая планировка?». Also used of a whole city — планировка района." },
        { id: "ru-u132l2-smezhnyy", type: "vocab", front: "смежный", reading: "smezhnyy", meaning: "opening straight into the next room", accept: ["with no corridor between two rooms", "joined so you walk through one to reach the other", "adjoining with a shared door"], example: { jp: "Комнаты здесь смежные, поэтому в одной из них нельзя быть одному.", en: "The rooms here open into each other, so you cannot be alone in one of them." }, drill: { jp: "Этот смежный дом совсем маленький", en: "This adjoining house is quite small" }, hint: "SME-zhnyy — stress on the first syllable. An ADJECTIVE, masculine singular; feminine смежная, neuter смежное, plural смежные. ⚠️ THE opposite of what a Russian buyer wants: смежные комнаты are worth less than изолированные, because you have to walk through one to reach the other. Also used of neighbouring fields of work — смежные науки." },
        { id: "ru-u132l2-podval", type: "vocab", front: "подвал", reading: "podval", meaning: "a basement", accept: ["the floor below ground level", "the space under a building", "an underground storey"], example: { jp: "В подвале этого дома держат старые вещи и велосипеды.", en: "In the basement of this building they keep old things and bicycles." }, drill: { jp: "Этот подвал очень холодный", en: "This basement is very cold" }, hint: "pad-VAL — stress on the last syllable, and the о reduces to a. MASCULINE. ⚠️ A SECOND sense in newspapers: the подвал is the bottom strip of a page, and an article printed there is «подвальная статья»." },
        { id: "ru-u132l2-cherdak", type: "vocab", front: "чердак", reading: "cherdak", meaning: "a loft", accept: ["the space under the roof", "an attic", "the storage space below a roof"], example: { jp: "На чердаке лежали письма, которые никто не читал сто лет.", en: "In the loft lay letters that nobody had read for a hundred years." }, drill: { jp: "Этот чердак очень старый", en: "This loft is very old" }, hint: "chir-DAK — stress on the last syllable, and the е reduces to i. MASCULINE. A Turkic loan. ⚠️ Its oblique forms move the stress onto the ending: чердакА, на чердакЕ. Said of a head, half-jokingly: «у него на чердаке не всё в порядке»." },
        { id: "ru-u132l2-kladovka", type: "vocab", front: "кладовка", reading: "kladovka", meaning: "a store cupboard", accept: ["a small room for keeping things", "a walk-in storage space", "a windowless room used for storing"], example: { jp: "В кладовке стоят все инструменты и зимние вещи.", en: "All the tools and winter things stand in the store cupboard." }, drill: { jp: "Эта кладовка очень маленькая", en: "This store cupboard is very small" }, hint: "kla-DOV-ka — stress on DOV. FEMININE (-а). From класть, to lay, the same root as u126l1's `кладка`. ⚠️ A built-in feature of Soviet flats, not a cupboard you buy: a кладовка has a door and you walk into it." },
        { id: "ru-u132l2-koridor", type: "vocab", front: "коридор", reading: "koridor", meaning: "a corridor", accept: ["a long narrow passage in a building", "a hallway between rooms", "the passage rooms open off"], example: { jp: "Коридор такой узкий, что два человека не могут идти рядом.", en: "The corridor is so narrow that two people cannot walk side by side." }, drill: { jp: "Этот коридор очень узкий", en: "This corridor is very narrow" }, hint: "ka-ri-DOR — stress on the last syllable, and the first о reduces to a. MASCULINE. ⚠️ In a Russian flat the коридор is also the entrance hall where coats and shoes live. The word for that room alone is прихожая, which this course cannot card: it is a substantivised adjective and unit 1 §5 bars those." },
      ],
    },
    {
      id: "ru-u132l3",
      unit: 132,
      lesson: 3,
      title: "Paying for it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the money and the people behind a home — a mortgage, a major overhaul, the developer, an eviction, a fence and the plumbing.",
      items: [
        { id: "ru-u132l3-ipoteka", type: "vocab", front: "ипотека", reading: "ipoteka", meaning: "a mortgage", accept: ["a long loan to buy a home", "borrowing against the flat you buy", "a housing loan paid off over years"], example: { jp: "Ипотеку они будут платить двадцать лет, но квартира уже своя.", en: "They will be paying the mortgage for twenty years, but the flat is already their own." }, drill: { jp: "Эта ипотека очень большая", en: "This mortgage is very large" }, hint: "i-pa-TE-ka — stress on TE, and the о reduces to a. FEMININE (-а). A Greek loan. ⚠️ A word with a short history in Russian — there was no such thing before the nineteen-nineties — and now the most-discussed money word in the language." },
        { id: "ru-u132l3-kapremont", type: "vocab", front: "капремонт", reading: "kapremont", meaning: "a major overhaul of a building", accept: ["the once-in-decades repair of a whole block", "full structural repair of a building", "the big repair a block gets every few decades"], example: { jp: "Капремонт в этом доме был только один раз, сорок лет назад.", en: "There has been a major overhaul in this building only once, forty years ago." }, drill: { jp: "Этот капремонт был очень давно", en: "This overhaul was a very long time ago" }, hint: "kap-ri-MONT — stress on the last syllable, and the е reduces to i. MASCULINE. ⚠️ A CLIPPED COMPOUND of капитальный ремонт, the same shape as `живопись` at unit 55 — and it is why it is a card beside `ремонт` (unit 29): every Russian flat-owner pays into a капремонт fund monthly, and it means the roof, the pipes and the lift, not your kitchen." },
        { id: "ru-u132l3-zastroyshchik", type: "vocab", front: "застройщик", reading: "zastroyshchik", meaning: "a property developer", accept: ["the company that builds and sells flats", "the firm that puts up a new block", "whoever builds housing to sell"], example: { jp: "Застройщик обещал дом к лету, но люди ждали ещё два года.", en: "The developer promised the building by summer, but people waited another two years." }, drill: { jp: "Этот застройщик очень большой", en: "This developer is very large" }, hint: "za-STROY-shchik — stress on STROY, with the long soft щ from unit 3. MASCULINE. From строить, to build, with за-. ⚠️ Not the same role as u126's `подрядчик`: a застройщик owns the project and sells you the flat; a подрядчик is the firm it hires to do the work." },
        { id: "ru-u132l3-vyselenie", type: "vocab", front: "выселение", reading: "vyselenie", meaning: "an eviction", accept: ["being made to leave a home", "the removing of people from a building", "being turned out of where you live"], example: { jp: "Выселение было в суде, и люди жили там ещё год.", en: "The eviction went through the court, and the people lived there another year." }, drill: { jp: "Это выселение было очень давно", en: "This eviction was a very long time ago" }, hint: "vy-si-LE-ni-ye — stress on LE, with the ы from unit 5 and the е reducing to i. NEUTER (-ие). From село, a village, with вы-, out. ⚠️ A legal word: выселение needs a court, and that is the difference between it and simply leaving." },
        { id: "ru-u132l3-ograda", type: "vocab", front: "ограда", reading: "ograda", meaning: "a fence around a property", accept: ["a railing or wall that encloses a plot", "the boundary fence of a place", "what runs round the edge of a property"], example: { jp: "Ограда вокруг дачи была совсем низкая, и собака легко шла через неё.", en: "The fence around the dacha was quite low, and the dog went over it easily." }, drill: { jp: "Эта ограда очень низкая", en: "This fence is very low" }, hint: "a-GRA-da — stress on GRA, and the first о reduces to a. FEMININE (-а). From городить, to enclose — the same old root as `город`, a town, from unit 6: a town was a fenced place. ⚠️ A simple wooden one is a забор; an ограда is more formal, often iron, and is the word for the railing round a church or a grave." },
        { id: "ru-u132l3-santekhnika", type: "vocab", front: "сантехника", reading: "santekhnika", meaning: "the plumbing of a flat", accept: ["the water pipes and fittings in a home", "baths, sinks and pipework together", "all the water equipment of a flat"], example: { jp: "Сантехника в этой квартире такая старая, что её надо менять всю.", en: "The plumbing in this flat is so old that all of it has to be changed." }, drill: { jp: "Эта сантехника совсем старая", en: "This plumbing is quite old" }, hint: "san-TEKH-ni-ka — stress on TEKH. FEMININE (-а). A clipped compound of санитарная техника. ⚠️ It means the EQUIPMENT, not the trade: the person who fixes it is a сантехник, and he is the most called-upon man in any Russian block." },
      ],
    },
    {
      id: "ru-u132l4",
      unit: 132,
      lesson: 4,
      title: "Doing it up",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about finishing a flat — wallpaper, tiling, paint, sheet flooring, filler and a partition wall.",
      items: [
        { id: "ru-u132l4-oboi", type: "vocab", front: "обои", reading: "oboi", meaning: "wallpaper", accept: ["paper put on the walls of a room", "decorative paper for walls", "the paper a room's walls are covered with"], example: { jp: "Обои в этой комнате такие старые, что цвет уже не видно.", en: "The wallpaper in this room is so old that the colour can no longer be seen." }, drill: { jp: "Эти обои очень старые", en: "This wallpaper is very old" }, hint: "a-BO-i — stress on BO, and the first о reduces to a. MASCULINE PLURAL, and ⚠️ IT HAS NO SINGULAR: a plurale tantum like `наручники` (u131l4) and `нарды` (u134), so the card is in the plural because there is no other form. The verb is клеить обои." },
        { id: "ru-u132l4-plitka", type: "vocab", front: "плитка", reading: "plitka", meaning: "a wall or floor tile", accept: ["a flat square put on a wall or floor", "ceramic squares for a bathroom", "the hard flat pieces a bathroom wall is covered in"], example: { jp: "Плитка в ванной была белая, и на ней были видны все пятна.", en: "The tile in the bathroom was white, and every mark showed on it." }, drill: { jp: "Эта плитка совсем новая", en: "This tile is quite new" }, hint: "PLIT-ka — stress on the first syllable. FEMININE (-а). The diminutive of плита, a slab. ⚠️ TWO more everyday senses: a bar of chocolate is a плитка, and so is a small electric hotplate — context decides." },
        { id: "ru-u132l4-kraska", type: "vocab", front: "краска", reading: "kraska", meaning: "paint", accept: ["liquid colour put on a surface", "a tin of colour for walls", "what you brush onto a wall to colour it"], example: { jp: "Краска была очень старая, и её цвет стал совсем другой.", en: "The paint was very old, and its colour had become quite different." }, drill: { jp: "Эта краска совсем новая", en: "This paint is quite new" }, hint: "KRAS-ka — stress on the first syllable. FEMININE (-а). ⚠️ The крас- root already gives the course `красный` (unit 16) and `красивый` (unit 19) — but a tin of paint is not recoverable from \"red\" or \"beautiful\", which is why it is a card. Also used of a face: «краска бросилась ей в лицо», she flushed." },
        { id: "ru-u132l4-linoleum", type: "vocab", front: "линолеум", reading: "linoleum", meaning: "a smooth floor covering in rolls", accept: ["a rolled floor covering", "sheet flooring laid in one piece", "a soft floor surface sold by the metre"], example: { jp: "На полу лежал линолеум, и зимой он был очень холодный.", en: "Sheet flooring lay on the floor, and in winter it was very cold." }, drill: { jp: "Этот линолеум совсем новый", en: "This flooring is quite new" }, hint: "li-NO-li-um — stress on NO, and the final -eum is three sounds: li-um. MASCULINE. ⚠️ Glossed the long way round on purpose: the word transliterates to the English one, and unit 1 §9 calls a prompt you can read the answer off a free pass rather than a card." },
        { id: "ru-u132l4-shpaklyovka", type: "vocab", front: "шпаклёвка", reading: "shpaklyovka", meaning: "filler for a wall", accept: ["soft paste that fills holes in a wall", "the smooth coat put on before paint", "what you fill cracks with before painting"], example: { jp: "Без шпаклёвки стена будет ровная только на вид.", en: "Without filler the wall will be smooth only to look at." }, drill: { jp: "Эта шпаклёвка совсем сухая", en: "This filler is quite dry" }, hint: "shpak-LYOV-ka — stress on LYOV. FEMININE (-а). A German loan. ⚠️ unit 1 §7 requires the ё, and the word comes BEFORE u126's `штукатурка`: plaster first makes the wall flat, шпаклёвка then makes it smooth, and only then does the `краска` go on." },
        { id: "ru-u132l4-peregorodka", type: "vocab", front: "перегородка", reading: "peregorodka", meaning: "a partition wall", accept: ["a light wall put up inside a room", "a thin dividing wall", "a wall that splits one space into two"], example: { jp: "Перегородка была такая тонкая, что было слышно каждое слово.", en: "The partition was so thin that every word could be heard." }, drill: { jp: "Эта перегородка очень тонкая", en: "This partition is very thin" }, hint: "pi-ri-ga-ROD-ka — stress on ROD, and every vowel before it reduces. FEMININE (-а). From городить, to enclose, the same root as `ограда` in lesson 3. ⚠️ It carries no weight: a перегородка can be taken out, which a `балка` or a wall from u126l1 cannot." },
      ],
    },
  ],
};
