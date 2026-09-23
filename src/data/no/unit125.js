// NO Unit 125 — Været · 3 (slot: coverage-b2-15) — B2
// COVERAGE UNIT, block 3. Scaffolded "Vocabulary 15 (B2)"; retitled per
// CLAUDE.md "No front language". Continues u8 Farger og vær and u43 Vær og
// årstider.
//
// MEASURED, AND THE GAP HAS A SHAPE WORTH NAMING. u8 teaches the weather as
// VERBS — å regne, å snø, å blåse, å fryse — plus vær, ei sol, ei sky, en vind
// and the adjectives kald, varm, våt, tørr. u43 adds en storm, et uvær, et lyn,
// torden, en temperatur. Screened against a 22-term weather inventory, what is
// missing is almost entirely the NOUN half of the verbs already taught:
//   et regn, et hagl, et sludd, en frost, ei varme, ei kulde, en regnbue,
//   en soloppgang, en solnedgang, ei skodde, en dis, et snøfall, ei skur,
//   en dugg, et vindkast, ei flom, et skred, en orkan, en hetebølge.
// A learner can say "det regner" and cannot say "regnet". That is a systematic
// hole, not a list of nice extra words, and it is the reason a Norwegian weather
// forecast — which is written almost entirely in nouns — stays unreadable.
//
// ⚠️ `snø` AND `regn` ARE NOT THE SAME CASE, and the difference decides what is
// authored here. The corpus teaches `å snø`, the verb; the bare noun `snø` is
// not a front. A screen that strips the å reports `snø` as taught, which is the
// over-generation trap the B1 seat documented — so `snø` is NOT taught here
// either: it is one lexeme with the verb and a second card would be a duplicate
// under RUNBOOK §4. `et regn` is different, because `å regne` also means "to
// calculate" (u8) and is a separate lexeme in its own right; the noun is
// genuinely new. `et snøfall` carries the snow sense instead.
//
// Conventions per no/unit1.js. Readings are hand-written ASCII folds.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT125 = {
  id: "no-u125",
  lang: "no",
  title: "Været · 3",
  order: 125,
  stage: "b2",
  lessons: [
    {
      id: "no-u125l1",
      unit: 125,
      lesson: 1,
      title: "Nedbør",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what falls out of the sky, in the nouns a forecast uses.",
      items: [
        { id: "no-u125l1-etregn", type: "vocab", front: "et regn", reading: "etregn", meaning: "rain (the rain itself)", example: { jp: "Regnet holdt på hele natta uten å gi seg.", en: "The rain kept on all night without stopping." }, accept: ["the rain", "a rain", "rainfall"], drill: { jp: "Vi gikk hjem i et regn", en: "We walked home in a rain" }, hint: "The noun beside å regne (u8), which also means to calculate — so these really are two words. The g is silent: RAIN, almost the English sound." },
        { id: "no-u125l1-etsnofall", type: "vocab", front: "et snøfall", reading: "etsnofall", meaning: "snowfall", example: { jp: "Det første snøfallet kom allerede i oktober.", en: "The first snowfall came as early as October." }, accept: ["a fall of snow"], drill: { jp: "Vi fikk et snøfall i oktober", en: "We had a snowfall in October" }, hint: "snø + fall. Norwegian uses this rather than a bare noun for one event of snowing — which is why the course teaches it and not a second `snø` card." },
        { id: "no-u125l1-ethagl", type: "vocab", front: "et hagl", reading: "ethagl", meaning: "hail", example: { jp: "Et stort hagl ødela blomstene i hagen.", en: "A large hail ruined the flowers in the garden." }, accept: ["hailstone", "the hail"], drill: { jp: "Et hagl ødela blomstene i hagen", en: "A hail ruined the flowers in the garden" }, hint: "Neuter with an unchanged plural: et hagl, to hagl. The single stone and the fall of them share the word." },
        { id: "no-u125l1-etsludd", type: "vocab", front: "et sludd", reading: "etsludd", meaning: "sleet", example: { jp: "Det kom et kaldt sludd fra vest om ettermiddagen.", en: "A cold sleet came in from the west in the afternoon." }, accept: ["the sleet", "wet snow"], drill: { jp: "Det kom et sludd fra vest", en: "A sleet came in from the west" }, hint: "Rain and snow together — the defining Norwegian coastal winter weather, and the word every forecast in Bergen uses." },
        { id: "no-u125l1-eiskur", type: "vocab", front: "ei skur", reading: "eiskur", meaning: "shower (of rain)", example: { jp: "Det kommer ei skur eller to i løpet av dagen.", en: "There will be a shower or two during the day." }, accept: ["a shower", "rain shower", "downpour"], drill: { jp: "Det kommer ei skur i dag", en: "There will be a shower today" }, hint: "Feminine: skura. ⚠️ Not the shower you stand in — that is en dusj. Et skur, neuter, is a shed: the gender carries the meaning." },
        { id: "no-u125l1-endugg", type: "vocab", front: "en dugg", reading: "endugg", meaning: "dew", example: { jp: "Det lå en kald dugg på gresset om morgenen.", en: "There was a cold dew on the grass in the morning." }, accept: ["the dew", "condensation"], drill: { jp: "Det lå en dugg på gresset", en: "There was a dew on the grass" }, hint: "Also the mist on a window: dugg på ruta. The verb å dugge covers both." },
      ],
    },
    {
      id: "no-u125l2",
      unit: 125,
      lesson: 2,
      title: "Kulde og varme",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about heat and cold as things, not only as adjectives.",
      items: [
        { id: "no-u125l2-enfrost", type: "vocab", front: "en frost", reading: "enfrost", meaning: "frost", example: { jp: "Den første frosten kom tidlig i november.", en: "The first frost came early in November." }, accept: ["the frost", "freezing weather"], drill: { jp: "Vi fikk en frost i november", en: "We had a frost in November" }, hint: "The noun beside å fryse (u8). Frost i bakken — frost in the ground — is what decides when Norwegian roadworks can start." },
        { id: "no-u125l2-eikulde", type: "vocab", front: "ei kulde", reading: "eikulde", meaning: "cold (the cold itself)", example: { jp: "Kulda kom plutselig og varte i to uker.", en: "The cold came suddenly and lasted two weeks." }, accept: ["the cold", "chill", "coldness"], drill: { jp: "Det kom ei kulde fra nord", en: "A cold came in from the north" }, hint: "Feminine: kulda. The noun from kald (u8) — Norwegian turns the adjective into a thing with -e far more readily than English does." },
        { id: "no-u125l2-envarme", type: "vocab", front: "en varme", reading: "envarme", meaning: "warmth", example: { jp: "Varmen fra ovnen gjorde rommet godt.", en: "The warmth from the stove made the room pleasant." }, accept: ["heat", "the heat", "warmness"], drill: { jp: "Det kom en varme fra ovnen", en: "A warmth came from the stove" }, hint: "⚠️ MASCULINE — en varme, varmen — even though its opposite ei kulde is feminine. The pair is not symmetrical, and Bokmål gives varme only the m-form. Both are built from the adjective the same way." },
        { id: "no-u125l2-enkuldegrad", type: "vocab", front: "en kuldegrad", reading: "enkuldegrad", meaning: "degree below zero", example: { jp: "Det var tjue kuldegrader på fjellet i natt.", en: "It was twenty degrees below zero in the mountains last night." }, accept: ["degree of frost", "minus degree"], drill: { jp: "Det er en kuldegrad ute nå", en: "It is one degree below zero outside now" }, hint: "⚠️ Norwegian counts the cold in POSITIVE numbers: tjue kuldegrader, not 'minus twenty'. Both are said, but this is the native way." },
        { id: "no-u125l2-mildvaer", type: "vocab", front: "mildvær", reading: "mildvaer", meaning: "mild spell", example: { jp: "Det ble mildvær over hele landet.", en: "A mild spell came over the whole country." }, accept: ["a thaw", "mild weather"], drill: { jp: "Det ble mildvær over hele landet", en: "A mild spell came over the whole country" }, hint: "A MASS noun, taught bare like vær itself. Mild + vær. Its opposite, kaldvær, is not much used — Norwegians only remark on the mild spell." },
        { id: "no-u125l2-enhetebolge", type: "vocab", front: "en hetebølge", reading: "enhetebolge", meaning: "heatwave", example: { jp: "Landet hadde en lang hetebølge i juli.", en: "The country had a long heatwave in July." }, accept: ["a heat wave", "hot spell"], drill: { jp: "Landet hadde en hetebølge i juli", en: "The country had a heatwave in July" }, hint: "hete + bølge, a wave of heat. Hete is a stronger word than varme — it is the heat you complain about." },
      ],
    },
    {
      id: "no-u125l3",
      unit: 125,
      lesson: 3,
      title: "Himmel og sikt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the sky and how far you can see — overcast, foggy, clear.",
      items: [
        { id: "no-u125l3-overskyet", type: "vocab", front: "overskyet", reading: "overskyet", meaning: "overcast", example: { jp: "Det er overskyet i dag men det blir ikke regn.", en: "It is overcast today but there will be no rain." }, accept: ["cloudy", "clouded over"], drill: { jp: "Det er overskyet i dag", en: "It is overcast today" }, hint: "over + sky (u8) + -et. An adjective in the neuter form already, because weather in Norwegian is always det — so it never changes." },
        { id: "no-u125l3-klarvaer", type: "vocab", front: "klarvær", reading: "klarvaer", meaning: "clear weather", example: { jp: "Det blir klarvær og kaldt over hele landet.", en: "There will be clear weather and cold across the whole country." }, accept: ["clear skies", "fine weather"], drill: { jp: "Det blir klarvær over hele landet", en: "There will be clear weather over the whole country" }, hint: "Mass noun, taught bare. The forecast word — you hear klarvær on the radio and pent vær from a person." },
        { id: "no-u125l3-eiskodde", type: "vocab", front: "ei skodde", reading: "eiskodde", meaning: "fog (on the coast)", example: { jp: "Skodda lå over fjorden hele morgenen.", en: "The fog lay over the fjord all morning." }, accept: ["mist", "a fog", "haar"], drill: { jp: "Det lå ei skodde over fjorden", en: "A fog lay over the fjord" }, hint: "Feminine: skodda. Tåke is the other Norwegian word for fog and is commoner inland; skodde belongs to the coast." },
        { id: "no-u125l3-endis", type: "vocab", front: "en dis", reading: "endis", meaning: "haze", example: { jp: "Det lå en lett dis over byen i varmen.", en: "There was a light haze over the town in the heat." }, accept: ["mist", "a haze"], drill: { jp: "Det lå en dis over byen", en: "There was a haze over the town" }, hint: "Thinner than skodde — you can see through a dis. The adjective is disig." },
        { id: "no-u125l3-ensoloppgang", type: "vocab", front: "en soloppgang", reading: "ensoloppgang", meaning: "sunrise", example: { jp: "Vi sto opp tidlig for å se en soloppgang.", en: "We got up early to see a sunrise." }, accept: ["a sunrise", "dawn"], drill: { jp: "Vi sto opp for å se en soloppgang", en: "We got up to see a sunrise" }, hint: "sol + opp + gang, the sun's going-up. In northern Norway there is none at all for weeks in winter — mørketida." },
        { id: "no-u125l3-ensolnedgang", type: "vocab", front: "en solnedgang", reading: "ensolnedgang", meaning: "sunset", example: { jp: "Fra hytta ser vi en solnedgang over havet.", en: "From the cabin we see a sunset over the sea." }, accept: ["a sunset", "dusk"], drill: { jp: "Vi ser en solnedgang over havet", en: "We see a sunset over the sea" }, hint: "The mirror of soloppgang, built the same way with ned. Midnattssol is the summer version of having neither." },
      ],
    },
    {
      id: "no-u125l4",
      unit: 125,
      lesson: 4,
      title: "Uvær og farlig vær",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Understand a severe-weather warning — gusts, flood, landslide, hurricane.",
      items: [
        { id: "no-u125l4-etvindkast", type: "vocab", front: "et vindkast", reading: "etvindkast", meaning: "gust of wind", example: { jp: "Et vindkast tok paraplyen hennes.", en: "A gust of wind took her umbrella." }, accept: ["a gust", "blast of wind"], drill: { jp: "Et vindkast tok paraplyen hennes", en: "A gust of wind took her umbrella" }, hint: "vind + kast, a throw of wind. Forecasts always give both the steady wind and the vindkast, because the gust is what does the damage." },
        { id: "no-u125l4-enflom", type: "vocab", front: "en flom", reading: "enflom", meaning: "flood", example: { jp: "Flommen tok brua over elva.", en: "The flood took the bridge over the river." }, accept: ["a flood", "flooding", "high water"], drill: { jp: "En flom tok brua over elva", en: "A flood took the bridge over the river" }, hint: "Masculine: flommen, with the m doubled before the ending. Spring snowmelt makes this an annual news word in Norway." },
        { id: "no-u125l4-etskred", type: "vocab", front: "et skred", reading: "etskred", meaning: "landslide", example: { jp: "Veien var stengt etter et skred i fjellet.", en: "The road was closed after a landslide in the mountains." }, accept: ["a slide", "avalanche", "rockfall"], drill: { jp: "Veien var stengt etter et skred", en: "The road was closed after a landslide" }, hint: "Covers snow, rock and earth alike — snøskred is an avalanche, jordskred a mudslide. Neuter, unchanged plural." },
        { id: "no-u125l4-enorkan", type: "vocab", front: "en orkan", reading: "enorkan", meaning: "hurricane", example: { jp: "Det blåste opp til en orkan langs kysten.", en: "It blew up to a hurricane along the coast." }, accept: ["a hurricane", "full storm"], drill: { jp: "Det blåste opp til en orkan", en: "It blew up to a hurricane" }, hint: "or-KAN. The top of the Norwegian wind scale, above storm (u43) — and it is used literally, with a wind-speed threshold, not loosely." },
        { id: "no-u125l4-etisslag", type: "vocab", front: "et isslag", reading: "etisslag", meaning: "freezing rain", example: { jp: "Veien var stengt etter et isslag.", en: "The road was closed after freezing rain." }, accept: ["ice storm", "glaze ice"], drill: { jp: "Veien var stengt etter et isslag", en: "The road was closed after freezing rain" }, hint: "is + slag, a blow of ice — rain that freezes the moment it lands. The associated warning is for underkjølt regn." },
        { id: "no-u125l4-etlynnedslag", type: "vocab", front: "et lynnedslag", reading: "etlynnedslag", meaning: "lightning strike", example: { jp: "Et lynnedslag ødela taket på huset.", en: "A lightning strike ruined the roof of the house." }, accept: ["a strike of lightning", "thunderbolt"], drill: { jp: "Et lynnedslag ødela taket", en: "A lightning strike ruined the roof" }, hint: "lyn (u43) + nedslag, the flash's coming-down. Et lyn is the flash in the sky; et lynnedslag is the moment it hits something." },
      ],
    },
  ],
};
