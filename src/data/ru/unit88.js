// RU Unit 88 — Сельское хозяйство ("Agriculture") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u87–u97). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, and ru/unit87.js §1–§7 for this block.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 5 (B1)` — no subject named. See
// unit87.js §1 and §6.
//
// THE MEASURED HOLE, and the line against u54. `u54 Природа и наука` owns the
// SCIENCE of growing — почва (soil) · зерно (a grain) · расти (to grow) ·
// корень · вещество · природа. u26 owns the animals a learner meets in a field:
// корова · лошадь · птица · трава · поле · дерево · цветок · лист. NEITHER
// teaches the FARM. All eight allocated fronts were free against the live
// corpus: урожай · пшеница · фермер · трактор · сарай · скот · пастух · сеять.
// So a learner could say a cow was in a field and that soil holds a seed, and
// could not name a harvest, a crop, a farmer, a shed or any work done on land.
//
// ⚠️ FOUR FRONTS THIS UNIT WANTED AND COULD NOT TAKE, each for a stated reason:
//   `ферма` — same root as `фермер`, which is carded here. unit51.js §3 calls
//        teaching a derivative beside its base in the SAME unit the worst version
//        of the fault (напиток beside пить). фермер is the allocated front and
//        keeps the slot.
//   `пасти` "to graze animals" — identical situation against `пастух`, which is
//        allocated. l3's hint on пастух names the verb in English instead.
//   `хозяйство` — §D against `хозяин` (u27l3), and macro-economics is block 2's
//        domain. The unit TITLE uses it; no card does. Same shape as unit 92,
//        whose title says «прошлое» while unit87.js §4 bars the word as a card.
//   `корова` and `лошадь` are TAKEN at u26l1, so the two animals a farm unit
//        most obviously wants are already the learner's. They are used freely in
//        this unit's sentences and hints; `скот` · `свинья` · `овца` · `курица`
//        are what is new.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT88 = {
  id: "ru-u88",
  lang: "ru",
  title: "Сельское хозяйство",
  order: 88,
  stage: "b1",
  lessons: [
    {
      id: "ru-u88l1",
      unit: 88,
      lesson: 1,
      title: "The farmer and his kit",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a farmer and the things a farm is built of — the tractor, the plough, the shed, the mill and the greenhouse.",
      items: [
        { id: "ru-u88l1-fermer", type: "vocab", front: "фермер", reading: "fermer", meaning: "a farmer", accept: ["a man who runs a farm", "someone who farms for a living", "a farm owner"], example: { jp: "Этот фермер держит много животных.", en: "This farmer keeps a lot of animals." }, drill: { jp: "Этот фермер работает очень много", en: "This farmer works very hard" }, hint: "FER-mer — stress on the first syllable, and the first е is said as a plain e because this is a loan word. MASCULINE. ⚠️ A modern word: the Soviet worker on a collective farm was a колхозник, which this course does not teach." },
        { id: "ru-u88l1-traktor", type: "vocab", front: "трактор", reading: "traktor", meaning: "a tractor", accept: ["a farm machine that pulls", "a field machine", "the machine that pulls a plough"], example: { jp: "Трактор работает в поле целый день.", en: "The tractor works in the field all day." }, drill: { jp: "Трактор стоит возле сарая", en: "The tractor is standing by the shed" }, hint: "TRAK-tar — stress on the first syllable, and the о at the end reduces to a. MASCULINE. ⚠️ Its plural is трАкторы with the stress staying put, not the тракторА you may hear from older speakers." },
        { id: "ru-u88l1-plug", type: "vocab", front: "плуг", reading: "plug", meaning: "a plough", accept: ["the blade that turns soil", "a ploughing implement", "what a tractor pulls to break ground"], example: { jp: "Этот плуг очень старый и тяжёлый.", en: "This plough is very old and very heavy." }, drill: { jp: "Этот плуг очень тяжёлый", en: "This plough is very heavy" }, hint: "PLUG — one syllable, and the г at the end is said as a k. MASCULINE. This is the tool; the work it does is пахать, in lesson 2." },
        { id: "ru-u88l1-saray", type: "vocab", front: "сарай", reading: "saray", meaning: "a farm shed", accept: ["a barn", "an outbuilding for tools", "a shed in a yard"], example: { jp: "В сарае лежат старые инструменты.", en: "Old tools are lying in the shed." }, drill: { jp: "Этот сарай совсем старый", en: "This shed is completely old" }, hint: "sa-RAY — stress on the last syllable. MASCULINE. Any rough wooden building for tools, hay or animals. ⚠️ Said of a room it is an insult: «у тебя тут сарай», your place is a tip." },
        { id: "ru-u88l1-melnitsa", type: "vocab", front: "мельница", reading: "melnitsa", meaning: "a mill", accept: ["a building that grinds grain", "a windmill", "where grain becomes flour"], example: { jp: "Эта мельница работала здесь сто лет.", en: "This mill worked here for a hundred years." }, drill: { jp: "Эта мельница уже не работает", en: "This mill does not work any more" }, hint: "MEL-ni-tsa — stress on the first syllable, and the ь keeps the л soft. FEMININE (-а). From мелет, it grinds. Both the windmill and the coffee grinder: кофейная мельница." },
        { id: "ru-u88l1-teplitsa", type: "vocab", front: "теплица", reading: "teplitsa", meaning: "a greenhouse", accept: ["a glasshouse for plants", "a warm house for growing", "a hothouse"], example: { jp: "В теплице растут овощи даже зимой.", en: "Vegetables grow in the greenhouse even in winter." }, drill: { jp: "Эта теплица очень большая", en: "This greenhouse is very large" }, hint: "ti-PLI-tsa — stress on PLI, and the е reduces to i. FEMININE (-а). Built on тепло from unit 16: a place kept warm. ⚠️ Used of a person too — тепличный ребёнок is a child raised in cotton wool." },
      ],
    },
    {
      id: "ru-u88l2",
      unit: 88,
      lesson: 2,
      title: "Working the land",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what is done to land through a year — plough it, sow it, feed it, bring in the harvest — and name the kitchen garden and the straw left behind.",
      items: [
        { id: "ru-u88l2-pakhat", type: "vocab", front: "пахать", reading: "pakhat", meaning: "to plough land", accept: ["to turn the soil over", "to break ground with a plough", "to till a field"], example: { jp: "Весной нужно пахать это поле.", en: "In spring this field has to be ploughed." }, drill: { jp: "Весной нужно пахать поле", en: "In spring the field has to be ploughed" }, hint: "pa-KHAT — stress on the last syllable, with the scraping х. Its present tense is пашу, пашешь: the х turns into ш. ⚠️ In speech it is far more often slang for working flat out — «я пахал весь день», I slogged all day." },
        { id: "ru-u88l2-seyat", type: "vocab", front: "сеять", reading: "seyat", meaning: "to sow seed", accept: ["to put seed in the ground", "to scatter seed", "to plant a crop"], example: { jp: "Этот фермер начинает сеять в апреле.", en: "This farmer starts sowing in April." }, drill: { jp: "Здесь нужно сеять каждый год", en: "Here you have to sow every year" }, hint: "SE-yat — stress on the first syllable. Its present tense is сею, сеешь, with the я gone. ⚠️ Also common in print as a figure of speech: сеять страх, to sow fear." },
        { id: "ru-u88l2-udobrenie", type: "vocab", front: "удобрение", reading: "udobrenie", meaning: "fertiliser", accept: ["what is put on soil to feed it", "plant food for a field", "manure or chemical feed"], example: { jp: "Без удобрения на этой почве ничего не растёт.", en: "Without fertiliser nothing grows in this soil." }, drill: { jp: "Это удобрение очень дорогое", en: "This fertiliser is very expensive" }, hint: "u-dab-RE-ni-ye — stress on RE, and the о reduces to a. NEUTER (-е). Built on добро, good: literally what does the soil good." },
        { id: "ru-u88l2-urozhay", type: "vocab", front: "урожай", reading: "urozhay", meaning: "a harvest", accept: ["a crop that has been gathered", "the yield of a field", "what a field gives in a year"], example: { jp: "Урожай этого года очень хороший.", en: "This year's harvest is very good." }, drill: { jp: "Урожай здесь всегда очень хороший", en: "The harvest here is always very good" }, hint: "u-ra-ZHAY — stress on the last syllable, and the о before it reduces to a. MASCULINE. It means both the gathering and the amount gathered: собрать урожай, and хороший урожай." },
        { id: "ru-u88l2-ogorod", type: "vocab", front: "огород", reading: "ogorod", meaning: "a kitchen garden", accept: ["a vegetable plot", "a patch for growing food", "a garden for vegetables"], example: { jp: "У бабушки большой огород за домом.", en: "Grandmother has a big vegetable garden behind the house." }, drill: { jp: "У нас большой огород", en: "We have a big vegetable garden" }, hint: "a-ga-ROD — stress on the last syllable, both о before it reduce to a, and the д is said as a t. MASCULINE. ⚠️ Not the same as `сад` from unit 26: a сад grows fruit and flowers, an огород grows the food you dig up." },
        { id: "ru-u88l2-soloma", type: "vocab", front: "солома", reading: "soloma", meaning: "straw", accept: ["dry stalks left after harvest", "what is left of the stalks", "stalks used for bedding"], example: { jp: "В сарае лежит солома для животных.", en: "There is straw lying in the shed for the animals." }, drill: { jp: "Эта солома совсем сухая", en: "This straw is completely dry" }, hint: "sa-LO-ma — stress on LO, and the first о reduces to a. FEMININE (-а). The dry stalk left once the grain is taken. `сено` in lesson 4 is mown grass, which is a different thing and is what animals actually eat." },
      ],
    },
    {
      id: "ru-u88l3",
      unit: 88,
      lesson: 3,
      title: "The animals and who watches them",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the stock on a farm — livestock as a whole, the herdsman, the pig, the sheep and the hen — and say that a cow has to be milked.",
      items: [
        { id: "ru-u88l3-skot", type: "vocab", front: "скот", reading: "skot", meaning: "livestock", accept: ["farm animals as a group", "cattle and other stock", "the animals kept on a farm"], example: { jp: "Этот фермер держит скот и птицу.", en: "This farmer keeps livestock and poultry." }, drill: { jp: "Здесь держат скот и птицу", en: "They keep livestock and poultry here" }, hint: "SKOT — one syllable. MASCULINE, and a collective: it has no plural and means all the animals at once. ⚠️ Said of a person it is a hard insult, roughly «you animal»." },
        { id: "ru-u88l3-pastukh", type: "vocab", front: "пастух", reading: "pastukh", meaning: "a herdsman", accept: ["a shepherd", "someone who watches the animals", "a man who drives the cattle out"], example: { jp: "Пастух весь день работает в поле.", en: "The herdsman works in the field all day." }, drill: { jp: "Этот пастух очень старый", en: "This herdsman is very old" }, hint: "pas-TUKH — stress on the last syllable, closing with the scraping х. MASCULINE. ⚠️ The verb пасти, to graze animals, is deliberately NOT carded: it is the same root as this word, and unit 51 bars teaching a derivative beside its base in one unit." },
        { id: "ru-u88l3-svinya", type: "vocab", front: "свинья", reading: "svinya", meaning: "a pig", accept: ["a hog", "the animal that gives pork", "a sow"], example: { jp: "Эта свинья очень большая и грязная.", en: "This pig is very big and very dirty." }, drill: { jp: "Свинья лежит возле сарая", en: "The pig is lying by the shed" }, hint: "svi-NYA — stress on the last syllable. FEMININE (-я). ⚠️ Its plural moves the stress forward and drops the ь: свИньи. Of a person it means a slob, and «подложить свинью» is to play someone a dirty trick." },
        { id: "ru-u88l3-ovtsa", type: "vocab", front: "овца", reading: "ovtsa", meaning: "a sheep", accept: ["a ewe", "the animal that gives wool", "one animal of a flock"], example: { jp: "Овца даёт шерсть и молоко.", en: "A sheep gives wool and milk." }, drill: { jp: "Эта овца даёт много шерсти", en: "This sheep gives a lot of wool" }, hint: "av-TSA — stress on the last syllable, and the о reduces to a. FEMININE (-а). ⚠️ Its plural is Овцы, with the stress back on the first syllable, and the genitive plural овЕц puts an е where the ц was — the word changes shape a lot." },
        { id: "ru-u88l3-kuritsa", type: "vocab", front: "курица", reading: "kuritsa", meaning: "a hen", accept: ["a chicken", "the bird that lays eggs", "a fowl kept for eggs"], example: { jp: "Эта курица даёт яйца каждый день.", en: "This hen gives eggs every day." }, drill: { jp: "Эта курица очень старая", en: "This hen is very old" }, hint: "KU-ri-tsa — stress on the first syllable. FEMININE (-а). ⚠️ Its plural is кУры, on a shorter stem, and the meat is курица as well. «Мокрая курица» of a person means a wet blanket." },
        { id: "ru-u88l3-doit", type: "vocab", front: "доить", reading: "doit", meaning: "to milk an animal", accept: ["to take milk from a cow", "to draw milk", "to milk by hand"], example: { jp: "Корову нужно доить каждое утро.", en: "A cow has to be milked every morning." }, drill: { jp: "Корову нужно доить утром", en: "A cow has to be milked in the morning" }, hint: "da-IT — stress on the last syllable, and the о reduces to a. Its present tense is дою, доишь. ⚠️ Also slang for squeezing money out of someone: доить клиента." },
      ],
    },
    {
      id: "ru-u88l4",
      unit: 88,
      lesson: 4,
      title: "What grows in the field",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the crops a field carries — wheat, rye, maize, carrots, cabbage — and the hay that feeds the animals through winter.",
      items: [
        { id: "ru-u88l4-pshenitsa", type: "vocab", front: "пшеница", reading: "pshenitsa", meaning: "wheat", accept: ["the grain that makes white bread", "wheat as a crop", "the main bread grain"], example: { jp: "Пшеница растёт здесь очень хорошо.", en: "Wheat grows very well here." }, drill: { jp: "Пшеница растёт в этом поле", en: "Wheat grows in this field" }, hint: "pshi-NI-tsa — stress on NI, the е reduces to i, and the пш at the front takes no vowel between the two letters. FEMININE (-а). `зерно` from unit 54 is a grain of any kind; this is the specific crop." },
        { id: "ru-u88l4-rozh", type: "vocab", front: "рожь", reading: "rozh", meaning: "rye", accept: ["the dark bread grain", "rye as a crop", "the grain of black bread"], example: { jp: "Рожь даёт чёрный хлеб.", en: "Rye gives black bread." }, drill: { jp: "Рожь растёт даже на плохой почве", en: "Rye grows even in poor soil" }, hint: "ROZH — one syllable, and the жь is just zh: a soft sign changes nothing after ж. FEMININE despite the -ь. ⚠️ Its stem loses the о in every other form — ржи, рожью — so the word in a sentence may not look like the card." },
        { id: "ru-u88l4-kukuruza", type: "vocab", front: "кукуруза", reading: "kukuruza", meaning: "maize", accept: ["corn on the cob", "sweetcorn as a crop", "the tall yellow grain"], example: { jp: "Кукуруза любит тепло и воду.", en: "Maize likes warmth and water." }, drill: { jp: "Кукуруза растёт очень быстро", en: "Maize grows very fast" }, hint: "ku-ku-RU-za — four syllables, stress on the third. FEMININE (-а). One word for the plant, the cob and the tinned kernels: Russian has no separate word for sweetcorn." },
        { id: "ru-u88l4-morkov", type: "vocab", front: "морковь", reading: "morkov", meaning: "a carrot", accept: ["carrots as a vegetable", "the orange root vegetable", "carrot as food"], example: { jp: "В огороде растёт морковь и капуста.", en: "Carrots and cabbage grow in the vegetable garden." }, drill: { jp: "Эта морковь очень сладкая", en: "This carrot is very sweet" }, hint: "mar-KOV — stress on the last syllable, and the о before it reduces to a. FEMININE despite the -ь. ⚠️ A collective: one carrot and a kilo of carrots are both морковь, and the countable морковки is colloquial." },
        { id: "ru-u88l4-kapusta", type: "vocab", front: "капуста", reading: "kapusta", meaning: "a cabbage", accept: ["cabbage as a vegetable", "the round leafy vegetable", "cabbage for soup"], example: { jp: "Из капусты делают суп и салат.", en: "They make soup and salad out of cabbage." }, drill: { jp: "Эта капуста очень большая", en: "This cabbage is very big" }, hint: "ka-PUS-ta — stress on PUS. FEMININE (-а). The base of щи and борщ. ⚠️ Also old slang for money, from the colour of the banknotes." },
        { id: "ru-u88l4-seno", type: "vocab", front: "сено", reading: "seno", meaning: "hay", accept: ["dried grass for animals", "mown grass stored to feed stock", "winter feed for cattle"], example: { jp: "Зимой в сарае всегда есть сено.", en: "In winter there is always hay in the shed." }, drill: { jp: "В сарае лежит сухое сено", en: "Dry hay is lying in the shed" }, hint: "SE-na — stress on the first syllable, and the о at the end reduces to a. NEUTER (-о), no plural. Mown grass, dried and stored. `солома` in lesson 2 is the stalk left after the grain, and animals will not eat it." },
      ],
    },
  ],
};
