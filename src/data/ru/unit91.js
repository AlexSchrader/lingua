// RU Unit 91 — Стихия и бедствие ("The elements and disaster") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u87–u97). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, and ru/unit87.js §1–§7 for this block.
//
// ⚠️ THE SCAFFOLD TITLE WAS `Vocabulary 8 (B1)` — no subject named. See
// unit87.js §1 and §6.
//
// THE MEASURED HOLE. u16l3–l4 teaches ORDINARY weather — погода · дождь · снег ·
// ветер · мороз · жара · тепло · холодно — and u54l4 the scientist's sky:
// облако · лёд · волна · туман · климат. NOTHING in 1,440 words teaches weather
// that kills. All seven allocated fronts were free: гроза · молния · гром ·
// наводнение · засуха · землетрясение · буря.
//
// ⚠️ THE u91 / u97 BOUNDARY, stated so it is checkable. THIS unit is THE EVENT:
// storm, lightning, flood, quake, drought, gale, avalanche. u97 Опасность и
// спасение is RISK, THREAT, VICTIM, RESCUE, SURVIVAL and FIRE — the human
// emergency. **`пожар` is u97's, not this unit's**, and `тушить` goes with it.
//
// ⚠️ FOUR CANDIDATES REFUSED, each for a stated reason:
//   `непогода` — не+X, barred by unit31.js §3. The one rule in this course that
//        bars a prefix, and this is the first B1 word it has caught.
//   `беда` — §D against `бедствие`, which is carded here. Teaching both is the
//        base-beside-derivative fault unit51.js §3 names. The hint on бедствие
//        names беда in English instead.
//   `вьюга` — one gloss ("a blizzard") already carried by `метель`, which is
//        carded. Two items on one gloss is one produce card with two right
//        answers, per unit1.js §9.
//   `зной` — a gloss collision with `жара` (u16l4, "the heat").
//   `потоп` and `затопить` — both overlap `наводнение`'s gloss; `оползень`
//        overlaps `обвал`'s. One word per gloss, so one of each was carded.
//
// ⚠️ `цунами` IS INDECLINABLE, the first such noun since метро and такси at u9.
// Its hint says so, because a learner who has spent 1,440 words learning that
// every Russian noun changes its ending will otherwise invent a genitive for it.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT91 = {
  id: "ru-u91",
  lang: "ru",
  title: "Стихия и бедствие",
  order: 91,
  stage: "b1",
  lessons: [
    {
      id: "ru-u91l1",
      unit: 91,
      lesson: 1,
      title: "The storm overhead",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a thunderstorm — the storm itself, the lightning, the thunder, a downpour, hail — and say that the wind is going to blow.",
      items: [
        { id: "ru-u91l1-groza", type: "vocab", front: "гроза", reading: "groza", meaning: "a thunderstorm", accept: ["a storm with thunder", "a thunder and lightning storm", "a violent summer storm"], example: { jp: "Летом здесь очень часто гроза.", en: "In summer there is a thunderstorm here very often." }, drill: { jp: "Летом здесь часто гроза", en: "In summer there is often a thunderstorm here" }, hint: "gra-ZA — stress on the ending, and the о reduces to a. FEMININE (-а). ⚠️ Its plural moves the stress right back: грОзы. Said of a person, «он гроза всего класса» means he is the terror of the class." },
        { id: "ru-u91l1-molniya", type: "vocab", front: "молния", reading: "molniya", meaning: "lightning", accept: ["a flash of lightning", "the bright strike in a storm", "a lightning bolt"], example: { jp: "Молния очень опасна для людей.", en: "Lightning is very dangerous to people." }, drill: { jp: "Эта молния была очень близко", en: "That lightning was very close" }, hint: "MOL-ni-ya — stress on the first syllable, and the ь keeps the л soft. FEMININE (-я). ⚠️ The same word is the zip on a jacket, and on a news site «молния» means a breaking-news flash." },
        { id: "ru-u91l1-grom", type: "vocab", front: "гром", reading: "grom", meaning: "thunder", accept: ["the noise of a storm", "the sound that follows lightning", "a thunderclap"], example: { jp: "Гром был такой громкий, что дети плакали.", en: "The thunder was so loud that the children cried." }, drill: { jp: "Гром был очень громкий", en: "The thunder was very loud" }, hint: "GROM — one syllable. MASCULINE. The NOISE; `молния` is the light. ⚠️ «Как гром среди ясного неба» is like a bolt from the blue, with ясный from unit 40 and небо from unit 26." },
        { id: "ru-u91l1-liven", type: "vocab", front: "ливень", reading: "liven", meaning: "a downpour", accept: ["a heavy burst of rain", "a cloudburst", "very hard rain"], example: { jp: "Этот ливень был очень сильный.", en: "That downpour was very heavy." }, drill: { jp: "Ливень шёл почти час", en: "The downpour went on for almost an hour" }, hint: "LI-ven — stress on the first syllable, and the ь keeps the н soft. MASCULINE despite the -ь. ⚠️ Its е drops in every other form: ливня, ливнем. From лить, to pour — rain that pours rather than falls." },
        { id: "ru-u91l1-grad", type: "vocab", front: "град", reading: "grad", meaning: "hail", accept: ["frozen rain", "ice falling from the sky", "hailstones"], example: { jp: "После грозы на земле лежал град.", en: "After the storm hail was lying on the ground." }, drill: { jp: "Этот град был очень сильный", en: "That hail was very heavy" }, hint: "GRAD — one syllable, and the д is said as a t. MASCULINE, and a collective with no plural. ⚠️ It is also an old poetic word for a city, which is why Волгоград ends that way — but nobody uses it so in speech." },
        { id: "ru-u91l1-dut", type: "vocab", front: "дуть", reading: "dut", meaning: "to blow", accept: ["to blow as the wind does", "for the air to move", "to send air at something"], example: { jp: "Здесь всегда будет дуть сильный ветер.", en: "A strong wind will always blow here." }, drill: { jp: "Здесь всегда будет дуть ветер", en: "The wind will always blow here" }, hint: "DUT — one syllable. Its present tense is дую, дуешь. ⚠️ Most often impersonal: «здесь дует» means there is a draught in here, which is the standard complaint on a Russian train. «Подуть на чай» is to blow on hot tea." },
      ],
    },
    {
      id: "ru-u91l2",
      unit: 91,
      lesson: 2,
      title: "Winter and wind",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the four winds and the two winters — a blizzard, black ice, a gale, a hurricane, a tornado — and say why a storm at sea is шторм and never буря.",
      items: [
        { id: "ru-u91l2-metel", type: "vocab", front: "метель", reading: "metel", meaning: "a blizzard", accept: ["a snowstorm with wind", "driving snow", "a storm of blown snow"], example: { jp: "Метель была такая сильная, что дорогу не видно.", en: "The blizzard was so strong that the road could not be seen." }, drill: { jp: "Эта метель была очень сильная", en: "That blizzard was very strong" }, hint: "mi-TEL — stress on the last syllable, and the first е reduces to i. FEMININE despite the -ь. Snow PLUS wind; snow on its own is just снег from unit 16. Its synonym вьюга is not carded — one gloss, one card." },
        { id: "ru-u91l2-gololyod", type: "vocab", front: "гололёд", reading: "gololyod", meaning: "black ice", accept: ["ice on the road", "a frozen road surface", "icy ground underfoot"], example: { jp: "Утром был гололёд, и машины стояли.", en: "There was black ice in the morning, and the cars stood still." }, drill: { jp: "Этот гололёд очень опасный", en: "This black ice is very dangerous" }, hint: "ga-la-LYOD — stress on the ё, always written, and both о before it reduce to a. MASCULINE. голый plus лёд, bare ice: the invisible film on a road, and a word in every Russian winter forecast." },
        { id: "ru-u91l2-burya", type: "vocab", front: "буря", reading: "burya", meaning: "a gale", accept: ["a violent wind storm", "a tempest", "wind strong enough to break trees"], example: { jp: "Буря была очень сильная и долгая.", en: "The gale was very strong and went on a long time." }, drill: { jp: "Эта буря была очень сильная", en: "That gale was very strong" }, hint: "BU-rya — stress on the first syllable. FEMININE (-я). ⚠️ Very often figurative: буря в стакане, a storm in a teacup, and буря чувств, with чувство from unit 28." },
        { id: "ru-u91l2-uragan", type: "vocab", front: "ураган", reading: "uragan", meaning: "a hurricane", accept: ["a tropical storm", "the most violent kind of wind", "a cyclone"], example: { jp: "Ураган был здесь в прошлом году.", en: "The hurricane was here last year." }, drill: { jp: "Этот ураган был очень страшный", en: "That hurricane was terrifying" }, hint: "u-ra-GAN — stress on the last syllable. MASCULINE. Stronger than a буря, and what a Russian forecast calls a named Atlantic storm. ⚠️ «Ураганный ветер» is the forecast's own phrase." },
        { id: "ru-u91l2-smerch", type: "vocab", front: "смерч", reading: "smerch", meaning: "a tornado", accept: ["a whirlwind", "a spinning column of air", "a twister"], example: { jp: "Смерч идёт прямо на этот город.", en: "The tornado is heading straight for this town." }, drill: { jp: "Этот смерч был очень близко", en: "That tornado was very close" }, hint: "SMERCH — one syllable, ending in ch. MASCULINE. The loan word торнадо exists, but смерч is the Russian one. Over water it is a водяной смерч." },
        { id: "ru-u91l2-shtorm", type: "vocab", front: "шторм", reading: "shtorm", meaning: "a storm at sea", accept: ["rough weather on the water", "a sea storm", "heavy weather for ships"], example: { jp: "В море сейчас сильный шторм.", en: "There is a heavy storm at sea right now." }, drill: { jp: "В море сегодня сильный шторм", en: "There is a heavy storm at sea today" }, hint: "SHTORM — one syllable. MASCULINE. ⚠️ AT SEA ONLY. The same weather over land is a буря: a Russian will not say шторм about a street, and that distinction is what this lesson is for." },
      ],
    },
    {
      id: "ru-u91l3",
      unit: 91,
      lesson: 3,
      title: "When the ground and the water move",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the disasters the earth itself causes — an earthquake, a flood, a volcano, an avalanche, a rockfall and a tsunami.",
      items: [
        { id: "ru-u91l3-zemletryasenie", type: "vocab", front: "землетрясение", reading: "zemletryasenie", meaning: "an earthquake", accept: ["a quake", "a shaking of the ground", "a tremor of the earth"], example: { jp: "Землетрясение было очень сильное.", en: "The earthquake was very strong." }, drill: { jp: "Это землетрясение было очень сильное", en: "That earthquake was very strong" }, hint: "zim-li-tri-SE-ni-ye — six syllables, stress on SE, and every е before it reduces to i. NEUTER (-е). земля plus трясти, earth-shaking: a compound you can see straight through once you know земля from unit 4." },
        { id: "ru-u91l3-navodnenie", type: "vocab", front: "наводнение", reading: "navodnenie", meaning: "a flood", accept: ["water over the land", "a river bursting its banks", "flooding"], example: { jp: "После дождей здесь было наводнение.", en: "After the rains there was a flood here." }, drill: { jp: "Это наводнение было очень большое", en: "That flood was very big" }, hint: "na-vad-NE-ni-ye — stress on NE, and the о reduces to a. NEUTER (-е). на plus вода: water up onto the land. ⚠️ Said of anything arriving in quantity — наводнение писем, a flood of letters." },
        { id: "ru-u91l3-vulkan", type: "vocab", front: "вулкан", reading: "vulkan", meaning: "a volcano", accept: ["a fire mountain", "a mountain that erupts", "a crater that throws out rock"], example: { jp: "Этот вулкан очень опасный и высокий.", en: "This volcano is very dangerous and very high." }, drill: { jp: "Этот вулкан очень высокий", en: "This volcano is very high" }, hint: "vul-KAN — stress on the last syllable. MASCULINE. ⚠️ «Жить как на вулкане» is to live on a knife edge, and it is far commoner in speech than the literal sense." },
        { id: "ru-u91l3-lavina", type: "vocab", front: "лавина", reading: "lavina", meaning: "an avalanche", accept: ["snow coming down a mountain", "a slide of snow", "a mass of snow falling"], example: { jp: "Эта лавина была очень большая и быстрая.", en: "That avalanche was very big and very fast." }, drill: { jp: "Лавина здесь очень опасна", en: "An avalanche here is very dangerous" }, hint: "la-VI-na — stress on VI. FEMININE (-а). Snow coming off a mountain. ⚠️ Also figurative: лавина вопросов, an avalanche of questions, with вопрос from unit 7." },
        { id: "ru-u91l3-obval", type: "vocab", front: "обвал", reading: "obval", meaning: "a collapse of rock", accept: ["a rockfall", "earth and stone falling away", "a cave-in"], example: { jp: "После дождя здесь был большой обвал.", en: "After the rain there was a big rockfall here." }, drill: { jp: "Этот обвал был очень большой", en: "That rockfall was very big" }, hint: "ab-VAL — stress on the last syllable, and the о reduces to a. MASCULINE. From валить, to fell: rock and earth coming down. ⚠️ Also the news word for a market crash — обвал цен, with цена from unit 12." },
        { id: "ru-u91l3-tsunami", type: "vocab", front: "цунами", reading: "tsunami", meaning: "a giant sea wave", accept: ["a tidal wave", "a huge wave after an earthquake", "a seismic sea wave"], example: { jp: "После землетрясения было цунами.", en: "After the earthquake there was a tsunami." }, drill: { jp: "Это цунами было очень большое", en: "That tsunami was very big" }, hint: "tsu-NA-mi — stress on NA. NEUTER, and ⚠️ INDECLINABLE: the ending never changes, like метро and такси from unit 9. Japanese by origin — Russian took it from the same place English did." },
      ],
    },
    {
      id: "ru-u91l4",
      unit: 91,
      lesson: 4,
      title: "Drought, disaster and the elements",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about disaster in the abstract — a drought, the elements, a calamity, a catastrophe, an epidemic — and say what water can destroy.",
      items: [
        { id: "ru-u91l4-zasukha", type: "vocab", front: "засуха", reading: "zasukha", meaning: "a drought", accept: ["a long dry spell", "months with no rain", "dry weather that kills a crop"], example: { jp: "После засухи урожай был очень плохой.", en: "After the drought the harvest was very poor." }, drill: { jp: "Эта засуха была очень долгая", en: "That drought went on a very long time" }, hint: "ZA-su-kha — stress on the FIRST syllable, which learners regularly get wrong. FEMININE (-а). Built on сухой from unit 60, dry." },
        { id: "ru-u91l4-stikhiya", type: "vocab", front: "стихия", reading: "stikhiya", meaning: "the elements", accept: ["the raw forces of nature", "nature at its most violent", "a force nobody controls"], example: { jp: "Стихия сильнее человека.", en: "The elements are stronger than any person." }, drill: { jp: "Стихия всегда сильнее человека", en: "The elements are always stronger than a person" }, hint: "sti-KHI-ya — stress on KHI, with the scraping х. FEMININE (-я). ⚠️ Also a person's element in the English sense: «музыка это его стихия». It shares a distant Greek ancestor with `стих` from unit 55, and no Russian hears any link between them." },
        { id: "ru-u91l4-bedstvie", type: "vocab", front: "бедствие", reading: "bedstvie", meaning: "a calamity", accept: ["a disaster that hits many people", "a great misfortune", "a public emergency"], example: { jp: "Такое наводнение это настоящее бедствие.", en: "A flood like that is a real calamity." }, drill: { jp: "Это настоящее бедствие для деревни", en: "This is a real calamity for the village" }, hint: "BED-stvi-ye — stress on the first syllable. NEUTER (-е). From беда, trouble — a word this course deliberately does NOT card, because teaching both would be a derivative beside its base. ⚠️ «Сигнал бедствия» is a distress signal." },
        { id: "ru-u91l4-katastrofa", type: "vocab", front: "катастрофа", reading: "katastrofa", meaning: "a catastrophe", accept: ["a disaster", "a crash or a wreck", "something going completely wrong"], example: { jp: "Эта катастрофа была в прошлом году.", en: "That catastrophe was last year." }, drill: { jp: "Эта катастрофа была очень страшная", en: "That catastrophe was terrifying" }, hint: "ka-tas-TRO-fa — stress on TRO. FEMININE (-а). ⚠️ Used where English says crash: авиакатастрофа is a plane crash. Also everyday exaggeration — «у меня катастрофа», I am in a complete mess." },
        { id: "ru-u91l4-epidemiya", type: "vocab", front: "эпидемия", reading: "epidemiya", meaning: "an epidemic", accept: ["a disease spreading fast", "an outbreak of illness", "a wave of sickness"], example: { jp: "Зимой здесь часто эпидемия гриппа.", en: "In winter there is often a flu epidemic here." }, drill: { jp: "Эта эпидемия была очень долгая", en: "That epidemic went on a very long time" }, hint: "e-pi-DE-mi-ya — stress on DE, and the э at the front is a plain e. FEMININE (-я). ⚠️ Russian uses it loosely too: эпидемия моды, with мода from unit 55." },
        { id: "ru-u91l4-razrushat", type: "vocab", front: "разрушать", reading: "razrushat", meaning: "to destroy", accept: ["to wreck completely", "to bring a building down", "to reduce something to ruins"], example: { jp: "Вода может разрушать даже камень.", en: "Water can destroy even stone." }, drill: { jp: "Такой ветер может разрушать дома", en: "A wind like that can destroy houses" }, hint: "raz-ru-SHAT — stress on the last syllable, and both vowels before it reduce. Its present is разрушаю, разрушает. ⚠️ `ломать` from unit 57 is to break ONE thing; разрушать is to destroy something whole — a house, a city, a life." },
      ],
    },
  ],
};
