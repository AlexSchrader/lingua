// RU Unit 126 — Строительство и зодчество ("Building and architecture") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u124–u136). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit87.js §1–§6, and
// ru/unit124.js §1–§5 for this block.
// Probes quoted in this header are reproducible with
// `node scripts/selfcheck-ru-b2-block3.mjs --probe <word> ...` — see unit124.js.
//
// THE MEASURED HOLE. u87 gives the MATERIALS (бетон · кирпич · сталь · стекло)
// and u89 the hand TOOLS, and that is the whole of it: across 2,328 cards
// nothing names a building's parts or the craft of designing one. No
// foundation, no beam, no roof, no facade, no arch, no dome, no drawing, no
// contractor. Nineteen of the eighteen probed seeds were free and five more
// were added to reach 24.
//
// ⚠️ `зодчество` IS IN THE TITLE AND IS NOT A CARD, and the reason is a GLOSS
// COLLISION rather than a rule. It and `архитектура` both land on "architecture"
// once `normalizeMeaning` is finished — one prompt with two right answers, the
// fault unit1.js §9 and unit1.js §B describe, and a parenthetical does NOT fix
// it because parentheticals are stripped before the comparison. l4 cards
// `архитектура`, which is the word a learner will actually meet, and the title
// keeps зодчество: the u92 «История и прошлое» precedent, and unit124.js §1.
// ⚠️ `зодчий` ("an architect") IS SEPARATELY BARRED as a substantivised
// adjective (unit1.js §5's last rule, unit51.js §2b) and probes free as a
// string. Both are named in unit124.js §1's list.
//
// ⚠️ BOUNDARY — `ярус` IS THIS UNIT'S AND IT IS THE BUILDING'S TIER.
// Block 1's u100 owns `слой` and `иерархия`; block 1's u109 owns the social
// stratum (сословие · прослойка · расслоение). The card here is the balcony
// level of a theatre and the storey-band of a facade, and its gloss says so.
// ⚠️ BOUNDARY — `реставрация` HERE IS THE RESTORING OF A BUILDING. Block 1's
// u105 owns archaeology and the deep past and cards `развалины`, not this.
//
// REFUSED, with the reason, so nobody re-litigates them:
//   `зодчество` · `зодчий` — above.
//   `перекрытие` — against `кровля`, which is carded in l1 of this very unit;
//        both sit on кры-/кров- and unit51.js §3 calls that the worst version
//        of the fault. `перекрёсток` (u60) is an unrelated look-alike and was
//        not the reason.
//   `новостройка` — against `новость` (u39) plus `строить`; two taught stems in
//        one compound, and u132 owns new housing in any case.
//   `стройка` — against `строить`, the shape that got `защита` refused at B1.
//   `возведение` — against `вести`/`водить`, and nothing a learner says.
// CLEARED AND KEPT, because a 5-character stem probe flags them and they are
// unrelated words: `колонна` vs `колония` (u92, and their readings differ —
// kolonna / koloniya) · `смета` vs `сметана` (u58) · `штукатурка` vs `штука`
// (u37). Each card's hint states the pair so the learner is not surprised.
// DEFERRED for count: облицовка · стропила · опалубка · флигель · ниша.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT126 = {
  id: "ru-u126",
  lang: "ru",
  title: "Строительство и зодчество",
  order: 126,
  stage: "b2",
  lessons: [
    {
      id: "ru-u126l1",
      unit: 126,
      lesson: 1,
      title: "Putting it up",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a building going up from the hole in the ground — the pit, the foundation, the frame, a beam, the brickwork and the roof.",
      items: [
        { id: "ru-u126l1-kotlovan", type: "vocab", front: "котлован", reading: "kotlovan", meaning: "a pit dug for a foundation", accept: ["the hole dug before building", "an excavation for a building", "the dug-out ground a house starts in"], example: { jp: "Котлован был такой глубокий, что внизу работали маленькие машины.", en: "The pit was so deep that small machines were working at the bottom." }, drill: { jp: "Этот котлован очень глубокий", en: "This pit is very deep" }, hint: "kat-la-VAN — stress on the last syllable, and both о reduce to a. MASCULINE. From котёл, a cauldron: a hole shaped like a pot. ⚠️ Only of building ground; a hole in the road is `яма`." },
        { id: "ru-u126l1-fundament", type: "vocab", front: "фундамент", reading: "fundament", meaning: "the foundation of a building", accept: ["the base a building stands on", "the concrete under a house", "what the walls are built up from"], example: { jp: "Фундамент этого дома сделали зимой, и он стоит уже сто лет.", en: "The foundation of this house was made in winter, and it has stood for a hundred years." }, drill: { jp: "Этот фундамент очень старый", en: "This foundation is very old" }, hint: "fun-da-MENT — stress on the last syllable. MASCULINE. ⚠️ Used of anything a thing rests on: «фундамент науки», the foundation of science. The adjective is фундаментальный, which is where English speakers usually meet the root first." },
        { id: "ru-u126l1-karkas", type: "vocab", front: "каркас", reading: "karkas", meaning: "the frame of a structure", accept: ["the skeleton of a structure", "the load-bearing bones of a building", "the frame a building hangs on"], example: { jp: "Каркас был из стали, поэтому дом построили очень быстро.", en: "The frame was of steel, so the house was built very quickly." }, drill: { jp: "Этот каркас очень тяжёлый", en: "This frame is very heavy" }, hint: "kar-KAS — stress on the last syllable. MASCULINE. A French loan. ⚠️ Not only in building: the frame of a bag, a tent or a chair is also a каркас." },
        { id: "ru-u126l1-balka", type: "vocab", front: "балка", reading: "balka", meaning: "a load-bearing beam", accept: ["a long bar that carries weight", "a horizontal structural bar", "the timber or steel that holds a floor up"], example: { jp: "Балка под крышей была из дерева, и её пришлось менять.", en: "The beam under the roof was of wood, and it had to be changed." }, drill: { jp: "Эта балка очень тяжёлая", en: "This beam is very heavy" }, hint: "BAL-ka — stress on the first syllable. FEMININE (-а). A Dutch loan. ⚠️ A SECOND, unrelated балка exists and means a dry ravine in the steppe — same letters, same stress, two words." },
        { id: "ru-u126l1-kladka", type: "vocab", front: "кладка", reading: "kladka", meaning: "brickwork", accept: ["laid courses of brick or stone", "the work of laying bricks", "a wall built up of blocks"], example: { jp: "Кладка была такая ровная, что между кирпичами не было видно линий.", en: "The brickwork was so even that no lines could be seen between the bricks." }, drill: { jp: "Эта кладка очень ровная", en: "This brickwork is very even" }, hint: "KLAD-ka — stress on the first syllable. FEMININE (-а). From класть, to lay. ⚠️ A bird's clutch of eggs is also кладка, and unit 128 teaches the nest it sits in." },
        { id: "ru-u126l1-krovlya", type: "vocab", front: "кровля", reading: "krovlya", meaning: "roofing", accept: ["the covering over a building", "the material a roof is made of", "the outer skin of a roof"], example: { jp: "Кровля была из железа, и в дождь под ней было очень громко.", en: "The roofing was of iron, and under it in the rain it was very loud." }, drill: { jp: "Эта кровля совсем новая", en: "This roofing is quite new" }, hint: "KROV-lya — stress on the first syllable. FEMININE (-я). ⚠️ `крыша` (unit 15) is the roof as a thing you point at; кровля is the trade word for what it is MADE of. The two are not interchangeable in a builder's sentence." },
      ],
    },
    {
      id: "ru-u126l2",
      unit: 126,
      lesson: 2,
      title: "The face of it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the parts of a building you look at from outside — the facade, an arch, a column, a dome, a vault and a spire.",
      items: [
        { id: "ru-u126l2-fasad", type: "vocab", front: "фасад", reading: "fasad", meaning: "a facade", accept: ["the front face of a building", "the street side of a house", "the outward face of something"], example: { jp: "Фасад этого дома покрасили в жёлтый цвет, как было сто лет назад.", en: "The facade of this house was painted yellow, as it was a hundred years ago." }, drill: { jp: "Этот фасад очень красивый", en: "This facade is very beautiful" }, hint: "fa-SAD — stress on the last syllable. MASCULINE. A French loan. ⚠️ Alive as a figure of speech: «за фасадом», behind the facade, of anything that looks better outside than in." },
        { id: "ru-u126l2-arka", type: "vocab", front: "арка", reading: "arka", meaning: "an arch", accept: ["a curved opening in a wall", "a rounded gateway", "a curved span over a doorway"], example: { jp: "Через арку во дворе можно пройти на другую улицу.", en: "Through the arch in the yard you can get to another street." }, drill: { jp: "Эта арка очень старая", en: "This arch is very old" }, hint: "AR-ka — stress on the first syllable. FEMININE (-а). ⚠️ In a Russian city the арка is the archway through a block into the courtyard, and it is how you give directions: «иди через арку»." },
        { id: "ru-u126l2-kolonna", type: "vocab", front: "колонна", reading: "kolonna", meaning: "a column", accept: ["an upright pillar", "a tall round post that holds a roof", "a standing pillar of stone"], example: { jp: "Перед музеем стоят восемь белых колонн.", en: "Eight white columns stand in front of the museum." }, drill: { jp: "Эта колонна очень высокая", en: "This column is very tall" }, hint: "ka-LON-na — stress on LON, the first о reduces to a, and the нн is held a beat longer. FEMININE (-а). ⚠️ Do not confuse it with `колония`, a colony, from unit 92 — two unrelated words that open the same way, and their readings differ (kolonna / koloniya). A column of marching people is also a колонна." },
        { id: "ru-u126l2-kupol", type: "vocab", front: "купол", reading: "kupol", meaning: "a dome", accept: ["a rounded roof", "a half-ball roof over a building", "the curved top of a church"], example: { jp: "Купол был из золота, и его было видно из любого места в городе.", en: "The dome was of gold, and it could be seen from anywhere in the city." }, drill: { jp: "Этот купол очень высокий", en: "This dome is very high" }, hint: "KU-pal — stress on the first syllable, and the о reduces to a. MASCULINE. ⚠️ Its plural moves the stress onto the ending and takes -а: куполА. The onion dome of a Russian church is its most common use." },
        { id: "ru-u126l2-svod", type: "vocab", front: "свод", reading: "svod", meaning: "a vault", accept: ["a curved stone ceiling", "an arched ceiling over a room", "a roof built of curved stone"], example: { jp: "Свод в этом зале такой высокий, что голос идёт очень долго.", en: "The vault in this hall is so high that a voice carries a very long way." }, drill: { jp: "Этот свод очень высокий", en: "This vault is very high" }, hint: "SVOD — one syllable, and the д is said as a t. MASCULINE. From сводить, to bring together: stones brought together over a space. ⚠️ A SECOND sense you will meet in the news: свод законов, a code of laws." },
        { id: "ru-u126l2-shpil", type: "vocab", front: "шпиль", reading: "shpil", meaning: "a spire", accept: ["the sharp point on top of a tower", "a thin pointed top of a building", "a needle on a roof"], example: { jp: "Шпиль был такой тонкий, что сверху его почти не было видно.", en: "The spire was so thin that from below it was almost invisible." }, drill: { jp: "Этот шпиль очень высокий", en: "This spire is very tall" }, hint: "SHPIL — one syllable. MASCULINE despite the -ь, so unit 1 §3 says to name it. A German loan. ⚠️ Saint Petersburg is the city of шпили; a dome is a купол and the two are never mixed." },
      ],
    },
    {
      id: "ru-u126l3",
      unit: 126,
      lesson: 3,
      title: "Finishing and ornament",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how a building is finished and dressed — plaster, a cornice, stained glass, a mosaic, a tower and a tier.",
      items: [
        { id: "ru-u126l3-shtukaturka", type: "vocab", front: "штукатурка", reading: "shtukaturka", meaning: "plaster", accept: ["the smooth coat on a wall", "wet mix spread over brickwork", "the layer that hides a rough wall"], example: { jp: "Штукатурка на стене была старая, и её пришлось менять.", en: "The plaster on the wall was old, and it had to be changed." }, drill: { jp: "Эта штукатурка совсем старая", en: "This plaster is quite old" }, hint: "shtu-ka-TUR-ka — stress on TUR. FEMININE (-а). A German loan (Stuck). ⚠️ Nothing to do with `штука`, a thing, from unit 37 — unrelated words that open the same way." },
        { id: "ru-u126l3-karniz", type: "vocab", front: "карниз", reading: "karniz", meaning: "a cornice", accept: ["the ledge along the top of a wall", "a projecting band under a roof", "a rail above a window"], example: { jp: "На карнизе сидели птицы и смотрели на улицу.", en: "Birds were sitting on the cornice and looking at the street." }, drill: { jp: "Этот карниз очень широкий", en: "This cornice is very wide" }, hint: "kar-NIZ — stress on the last syllable, and the з is said as s at the end. MASCULINE. ⚠️ Inside a flat the same word is the rail a curtain hangs from, which is how you will hear it most often." },
        { id: "ru-u126l3-vitrazh", type: "vocab", front: "витраж", reading: "vitrazh", meaning: "a stained-glass window", accept: ["coloured glass set in a window", "a picture made of coloured glass", "a window of glass pieces"], example: { jp: "Через витраж в зал шёл красный и синий свет.", en: "Through the stained glass red and blue light came into the hall." }, drill: { jp: "Этот витраж очень красивый", en: "This stained-glass window is very beautiful" }, hint: "vi-TRAZH — stress on the last syllable, and the ж is said as sh at the end. MASCULINE. A French loan. ⚠️ Built on the same root as the French for glass; Russian's own word for glass is `стекло`, from unit 33." },
        { id: "ru-u126l3-mozaika", type: "vocab", front: "мозаика", reading: "mozaika", meaning: "a mosaic", accept: ["a picture made of small stones", "a design laid in tiny pieces", "an image built from small tiles"], example: { jp: "Мозаика на полу была сделана очень давно, но она ещё красивая.", en: "The mosaic on the floor was made a very long time ago, but it is still beautiful." }, drill: { jp: "Эта мозаика очень старая", en: "This mosaic is very old" }, hint: "ma-ZA-i-ka — stress on ZA, and the first о reduces to a. FEMININE (-а). ⚠️ Used of anything made of many small parts: «мозаика мнений», a mosaic of opinions." },
        { id: "ru-u126l3-bashnya", type: "vocab", front: "башня", reading: "bashnya", meaning: "a tower", accept: ["a tall narrow building", "a high standing structure", "a tall part of a building or wall"], example: { jp: "Башня стоит в самом центре города, и часы на ней идут точно.", en: "The tower stands in the very centre of the city, and the clock on it keeps good time." }, drill: { jp: "Эта башня очень высокая", en: "This tower is very tall" }, hint: "BASH-nya — stress on the first syllable. FEMININE (-я). ⚠️ Its genitive plural drops the vowel the other way round: башен. The fortress wall of u92's `крепость` is counted in башни." },
        { id: "ru-u126l3-yarus", type: "vocab", front: "ярус", reading: "yarus", meaning: "a tier of a building", accept: ["one level of seats above another", "a storey-band of a facade", "one of the stacked levels of a structure"], example: { jp: "В театре было три яруса, и сверху было видно всю сцену.", en: "There were three tiers in the theatre, and from the top the whole stage was visible." }, drill: { jp: "Этот ярус совсем пустой", en: "This tier is quite empty" }, hint: "YA-rus — stress on the first syllable. MASCULINE. ⚠️ THE BUILDING'S tier only: a layer of material is `слой` and a rank in an organisation is `иерархия`, both of which other units teach. In a theatre the ярус is a balcony level, and a Russian ticket names it." },
      ],
    },
    {
      id: "ru-u126l4",
      unit: 126,
      lesson: 4,
      title: "The trade",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the business of building — architecture, a drawing, a cost estimate, the contractor, a demolition and a restoration.",
      items: [
        { id: "ru-u126l4-arkhitektura", type: "vocab", front: "архитектура", reading: "arkhitektura", meaning: "architecture", accept: ["the art of designing buildings", "the craft of planning buildings", "the style of a city's buildings"], example: { jp: "Архитектура этого города очень старая, и каждый дом здесь другой.", en: "The architecture of this city is very old, and every house here is different." }, drill: { jp: "Эта архитектура очень красивая", en: "This architecture is very beautiful" }, hint: "ar-khi-tik-TU-ra — five syllables, stress on TU. FEMININE (-а). ⚠️ The older, loftier Russian word is зодчество, which stands in this unit's title and has no card: it and архитектура land on the same English gloss, and unit 1 §9 calls one prompt with two right answers a defect." },
        { id: "ru-u126l4-chertyozh", type: "vocab", front: "чертёж", reading: "chertyozh", meaning: "a technical drawing", accept: ["a measured plan on paper", "a draughtsman's drawing", "a plan drawn to scale"], example: { jp: "По этому чертежу можно построить дом без одного вопроса.", en: "From this drawing you can build a house without a single question." }, drill: { jp: "Этот чертёж очень точный", en: "This drawing is very exact" }, hint: "chir-TYOZH — stress on the last syllable, the е reduces to i, and the ж is said as sh at the end. MASCULINE. ⚠️ The ё DROPS to е in every other form: чертежА, чертежИ — and unit 1 §7 says the ё is always written, so the nominative keeps it." },
        { id: "ru-u126l4-smeta", type: "vocab", front: "смета", reading: "smeta", meaning: "a cost estimate", accept: ["a written list of what a job will cost", "a budget for a piece of work", "the priced plan of a job"], example: { jp: "Смета была готова через месяц, и цена была очень высокая.", en: "The estimate was ready in a month, and the price was very high." }, drill: { jp: "Эта смета совсем новая", en: "This estimate is quite new" }, hint: "SME-ta — stress on the first syllable. FEMININE (-а). ⚠️ Nothing to do with `сметана`, sour cream, from unit 58 — unrelated words that open the same way. Used of any budget, not only a building one." },
        { id: "ru-u126l4-podryadchik", type: "vocab", front: "подрядчик", reading: "podryadchik", meaning: "a contractor", accept: ["the firm hired to do the work", "the company that takes on a job", "whoever is paid to carry out the building"], example: { jp: "Подрядчик обещал закончить работу летом, но закончил только зимой.", en: "The contractor promised to finish the work in the summer, but finished only in winter." }, drill: { jp: "Этот подрядчик очень опытный", en: "This contractor is very experienced" }, hint: "pad-RYAD-chik — stress on RYAD, and the о reduces to a. MASCULINE. From подряд, a contract for work. ⚠️ A different подряд exists as an ADVERB meaning in a row — «три дня подряд», three days running — and that one you will hear far more often." },
        { id: "ru-u126l4-snos", type: "vocab", front: "снос", reading: "snos", meaning: "a demolition", accept: ["the pulling down of a building", "the tearing down of a house", "the clearing away of a structure"], example: { jp: "Снос старого завода шёл всю зиму, и шум был слышен далеко.", en: "The demolition of the old plant went on all winter, and the noise was heard far away." }, drill: { jp: "Этот снос шёл очень долго", en: "This demolition went on a very long time" }, hint: "SNOS — one syllable. MASCULINE. From сносить, to carry away. ⚠️ The phrase «дом под снос» means a building marked to be pulled down, and it is on signs around Russian cities." },
        { id: "ru-u126l4-restavratsiya", type: "vocab", front: "реставрация", reading: "restavratsiya", meaning: "the restoring of a building", accept: ["careful repair of something old", "putting an old building back as it was", "the work of bringing an old thing back"], example: { jp: "Реставрация этой церкви шла десять лет, и теперь она как новая.", en: "The restoration of this church went on for ten years, and now it is like new." }, drill: { jp: "Эта реставрация шла очень долго", en: "This restoration went on a very long time" }, hint: "ris-tav-RA-tsi-ya — stress on RA, and the е reduces to i. FEMININE (-я). ⚠️ Of a BUILDING or a picture. In history books it is also the putting back of a monarchy, and Russian uses the same word for both." },
      ],
    },
  ],
};
