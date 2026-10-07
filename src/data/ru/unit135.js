// RU Unit 135 — Погода и осадки ("Weather and precipitation") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u124–u136). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit87.js §1–§6, and
// ru/unit124.js §1–§5 for this block.
// Probes quoted in this header are reproducible with
// `node scripts/selfcheck-ru-b2-block3.mjs --probe <word> ...` — see unit124.js.
//
// THE MEASURED HOLE. u16 gives A1 weather (погода · дождь · снег · ветер ·
// жара · мороз · облако) and u91 Стихия и бедствие owns the WEATHER THAT KILLS
// — `ливень` · `град` · `метель` · `гололёд` · `смерч` · `гроза` · `молния`,
// ALL BARRED as fronts. Between the two there is nothing: 2,328 cards cannot
// say drizzle, slush, hoar frost, a thaw, a snowdrift, dew, humidity, a
// draught, a gust, a rainbow, overcast or a barometer. Twenty of the probed
// seeds survived and four more were added.
//
// ⚠️ THREE SEEDS WERE REFUSED FOR GLOSS COLLISIONS WITH u91, WHICH OWNS THE
// DISASTER. Each one probes FREE as a front and is still unusable:
//   `пурга` — "a blizzard" is `метель`'s (u91l2) exact gloss.
//   `наледь` — "black ice" is `гололёд`'s (u91l?) exact gloss.
//   `изморозь` — its gloss sits on top of l2's own `иней`, AND it would make a
//        third мороз- word in one unit beside `заморозки`.
// And one more for the same reason inside the band: no card here may gloss as
// "a whirlwind", because `смерч` (u91) already accepts it — so l3's `вихрь` is
// glossed as a sudden swirl of wind instead, which is what it actually is.
//
// ⚠️ `ненастье` IS ALLOWED AND `непогода` IS NOT, AND THE DIFFERENCE IS REAL.
// unit31.js §3 bars не+X, and u87 §5 applied it to `непогода` because `погода`
// IS TAUGHT (u16l?) — не plus a taught word is a free pass with a prefix on it.
// `ненастье` is historically не + настье, but настье IS NOT A WORD in modern
// Russian and is taught nowhere, so there is nothing for the learner to
// decompose: it is one opaque lexeme that happens to start with the letters
// н-е. The rule is about recoverability, not about spelling.
//
// ⚠️ THREE PREFIXED DERIVATIONS OF TAUGHT WORDS ARE KEPT, each a judgement under
// unit31.js §3, which allows them one at a time:
//   `заморозки` vs `мороз` (u16l4) — за- plus a plural-only noun, and it means
//        the specific thing: the light night frosts of spring and autumn that
//        kill a garden. KEPT; `изморозь` was refused to keep мороз- at one.
//   `оттепель` vs `тепло` — от- plus the old тепл- root; "a thaw" is a weather
//        event, not warmth.
//   `прохлада` vs `холодно` (u16l?) and `холодный` (u58) — it is built on the
//        Church-Slavonic хлад-, not on холод-, which is why a learner does not
//        get from one to the other.
//   `влажность` is NOT one of these: `влажный` probes FREE and is taught
//        nowhere, so the -ость shape that killed `слабость` at A2 does not
//        apply here.
//
// REFUSED, with the reason:
//   `пурга` · `наледь` · `изморозь` · `непогода` — above.
//   `облачность` — against `облако` (u54l4); -ость on a taught noun is the one
//        shape §D's test refuses every time, the same reason `туманность` fell
//        at u124 (unit124.js §3).
//   `наводнение` TAKEN (u91l3) · `туман` TAKEN (u54l4) · `прогноз` TAKEN (u72) ·
//        `гроза` TAKEN (u91l1) · `ветер` TAKEN (u16l?).
//   `мгла` · `марево` · `безветрие` · `суховей` · `циклон` · `позёмка` — all
//        FREE, all dropped for count at 24.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT135 = {
  id: "ru-u135",
  lang: "ru",
  title: "Погода и осадки",
  order: 135,
  stage: "b2",
  lessons: [
    {
      id: "ru-u135l1",
      unit: 135,
      lesson: 1,
      title: "What falls and what it leaves",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what comes out of the sky short of a storm — precipitation, drizzle, the drip of melting snow, slush, a snowdrift and dew.",
      items: [
        { id: "ru-u135l1-osadki", type: "vocab", front: "осадки", reading: "osadki", meaning: "precipitation", accept: ["rain and snow taken together", "whatever falls from the sky", "the water that comes down from the sky"], example: { jp: "Осадки будут весь день, но снега не будет.", en: "There will be precipitation all day, but no snow." }, drill: { jp: "Эти осадки будут очень долго", en: "This precipitation will last a very long time" }, hint: "a-SAD-ki — stress on SAD, and the first о reduces to a. MASCULINE PLURAL, and ⚠️ THE PLURAL IS THE FORM: in the weather sense осадки has no useful singular, like `обои` (u132) and `нарды` (u134). THE word a Russian forecast uses, where English says rain or snow." },
        { id: "ru-u135l1-moros", type: "vocab", front: "морось", reading: "moros", meaning: "drizzle", accept: ["very fine rain that hangs in the air", "the thinnest kind of rain", "rain so light you barely feel it"], example: { jp: "Морось была такая мелкая, что её почти не видно.", en: "The drizzle was so fine that it was almost invisible." }, drill: { jp: "Эта морось очень мелкая", en: "This drizzle is very fine" }, hint: "MO-ras — stress on the first syllable, and the second о reduces to a. FEMININE despite the -ь, like every -ость/-ось noun, so unit 1 §3 says to name it. ⚠️ Not a `дождь` (unit 16): морось does not fall so much as hang, and it soaks you anyway." },
        { id: "ru-u135l1-kapel", type: "vocab", front: "капель", reading: "kapel", meaning: "the dripping of melting snow", accept: ["water dripping from a roof in spring", "the sound of snow melting off a roof", "spring drip from the eaves"], example: { jp: "Капель начинается в марте, и это первый знак весны.", en: "The dripping begins in March, and it is the first sign of spring." }, drill: { jp: "Эта капель очень громкая", en: "This dripping is very loud" }, hint: "ka-PEL — stress on the last syllable, and the first а is clear. FEMININE despite the -ь. From капать, to drip. ⚠️ A SEASONAL word with no English equivalent: капель is specifically the spring dripping from roofs, and Russians treat hearing it as the moment winter breaks." },
        { id: "ru-u135l1-slyakot", type: "vocab", front: "слякоть", reading: "slyakot", meaning: "slush", accept: ["wet half-melted snow underfoot", "dirty snow and water on the ground", "the wet mess of melting snow"], example: { jp: "На улице была такая слякоть, что все ходили очень медленно.", en: "There was such slush in the street that everyone walked very slowly." }, drill: { jp: "Эта слякоть очень грязная", en: "This slush is very dirty" }, hint: "SLYA-kat — stress on the first syllable, and the о reduces to a. FEMININE despite the -ь. ⚠️ Said with real feeling: слякоть is the worst of a Russian winter, worse than cold, and it means the state of the street as much as the stuff itself." },
        { id: "ru-u135l1-sugrob", type: "vocab", front: "сугроб", reading: "sugrob", meaning: "a snowdrift", accept: ["a heap of snow blown up by the wind", "a bank of piled snow", "a deep pile of snow"], example: { jp: "Сугроб был очень высокий, и дорогу чистили два дня.", en: "The snowdrift was very high, and the road was cleared for two days." }, drill: { jp: "Этот сугроб очень высокий", en: "This snowdrift is very high" }, hint: "su-GROB — stress on the last syllable, and the б is said as a p. MASCULINE. ⚠️ Nothing to do with `гроб`, a coffin, though they look alike — su-GROB comes from an old verb meaning to rake together. Its oblique forms keep the stress: сугрОба." },
        { id: "ru-u135l1-rosa", type: "vocab", front: "роса", reading: "rosa", meaning: "dew", accept: ["the water that forms on grass at night", "morning wet on the grass", "drops that settle on leaves overnight"], example: { jp: "Утром на траве была роса, и ноги стали совсем мокрые.", en: "In the morning there was dew on the grass, and my feet got completely wet." }, drill: { jp: "Эта роса очень холодная", en: "This dew is very cold" }, hint: "ra-SA — stress on the last syllable, and the о reduces to a. FEMININE (-а). ⚠️ Its accusative moves the stress forward: рОсу. Do not confuse it with `роза`, a rose, from unit 127 — one letter apart, and their readings differ (rosa / roza)." },
      ],
    },
    {
      id: "ru-u135l2",
      unit: 135,
      lesson: 2,
      title: "Cold, crust and thaw",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe cold weather short of a disaster — hoar frost, night frosts, a crust on the snow, a thaw, coolness and a bitter cold spell.",
      items: [
        { id: "ru-u135l2-iney", type: "vocab", front: "иней", reading: "iney", meaning: "hoar frost", accept: ["white frost that forms on branches", "the white furry frost on trees", "frost that grows on surfaces overnight"], example: { jp: "Иней лежал на каждой ветке, и лес был совсем белый.", en: "Hoar frost lay on every branch, and the forest was completely white." }, drill: { jp: "Этот иней очень белый", en: "This hoar frost is very white" }, hint: "I-ney — stress on the first syllable. MASCULINE. ⚠️ `мороз` (unit 16) is the COLD; иней is the white stuff the cold leaves on things. A photograph of a Russian winter is usually a photograph of иней." },
        { id: "ru-u135l2-zamorozki", type: "vocab", front: "заморозки", reading: "zamorozki", meaning: "light night frosts", accept: ["short frosts at night in spring or autumn", "the frosts that kill a garden", "brief freezing at night when the days are warm"], example: { jp: "Заморозки были весной, и все молодые цветы в саду погибли.", en: "There were night frosts in spring, and all the young flowers in the garden died." }, drill: { jp: "Эти заморозки были очень сильные", en: "These night frosts were very severe" }, hint: "ZA-ma-ras-ki — four syllables, stress on the FIRST, and both following о reduce to a. MASCULINE PLURAL, and ⚠️ THE PLURAL IS THE FORM, like `осадки` in lesson 1. Built on `мороз` (unit 16) with за-, and it means the specific thing a gardener fears: a frost at night when the day was warm." },
        { id: "ru-u135l2-nast", type: "vocab", front: "наст", reading: "nast", meaning: "a hard crust on snow", accept: ["a frozen top layer on snow", "the icy skin snow gets after a thaw", "a crust strong enough to walk on"], example: { jp: "Наст был такой твёрдый, что по нему можно было идти.", en: "The crust was so hard that you could walk on it." }, drill: { jp: "Этот наст очень твёрдый", en: "This crust is very hard" }, hint: "NAST — one syllable. MASCULINE. ⚠️ A hunter's and skier's word: наст forms when a `оттепель` is followed by a freeze, and whether it holds your weight decides whether you can cross a field at all." },
        { id: "ru-u135l2-ottepel", type: "vocab", front: "оттепель", reading: "ottepel", meaning: "a warm spell in winter", accept: ["a spell of warm weather in winter", "days when the snow starts melting", "a break in the frost"], example: { jp: "Оттепель была в январе, и снег в городе стал совсем серый.", en: "There was a thaw in January, and the snow in the city turned quite grey." }, drill: { jp: "Эта оттепель была очень короткая", en: "This warm spell was very short" }, hint: "O-tti-pel — stress on the FIRST syllable, the тт is held a beat longer, and the е reduces to i. FEMININE despite the -ь. ⚠️ ALSO A HISTORICAL TERM: «Оттепель» with a capital letter means the political thaw of the nineteen-fifties, the way «Революция» means 1917 (u92l4)." },
        { id: "ru-u135l2-prokhlada", type: "vocab", front: "прохлада", reading: "prokhlada", meaning: "coolness", accept: ["pleasant cool air", "the relief of cool after heat", "a welcome mild chill"], example: { jp: "После такого дня прохлада вечером была как вода.", en: "After a day like that the coolness in the evening was like water." }, drill: { jp: "Эта прохлада очень приятная", en: "This coolness is very pleasant" }, hint: "pra-KHLA-da — stress on KHLA, and the first о reduces to a. FEMININE (-а). ⚠️ A GOOD word: прохлада is cool you are glad of, which is why it is a different lexeme from `холодно` (unit 16) rather than a derivation of it — it is built on the old хлад-, not on холод-." },
        { id: "ru-u135l2-stuzha", type: "vocab", front: "стужа", reading: "stuzha", meaning: "a bitter cold spell", accept: ["days of extreme cold", "cold that hurts to stand in", "a long stretch of severe cold"], example: { jp: "Стужа была целую неделю, и дети не ходили в школу.", en: "The bitter cold lasted a whole week, and the children did not go to school." }, drill: { jp: "Эта стужа была очень сильная", en: "This bitter cold was very severe" }, hint: "STU-zha — stress on the first syllable. FEMININE (-а). ⚠️ A высокое, literary word where `мороз` (unit 16) is the everyday one: стужа belongs to poems and folk tales, and using it in conversation sounds deliberately old." },
      ],
    },
    {
      id: "ru-u135l3",
      unit: 135,
      lesson: 3,
      title: "Heat and moving air",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe hot and close weather and the air that moves through it — blazing heat, stuffiness, humidity, a draught, a gust and a swirl of wind.",
      items: [
        { id: "ru-u135l3-znoy", type: "vocab", front: "зной", reading: "znoy", meaning: "blazing dry heat", accept: ["burning heat from a high sun", "fierce dry heat at midday", "the hard heat of an open field in summer"], example: { jp: "В поле был такой зной, что работать можно было только утром.", en: "In the field there was such blazing heat that you could only work in the morning." }, drill: { jp: "Этот зной очень сильный", en: "This blazing heat is very strong" }, hint: "ZNOY — one syllable. MASCULINE. ⚠️ `жара` (unit 16) is ordinary hot weather; зной is the heat of a treeless field at noon, and it is a step up in register as well as in temperature." },
        { id: "ru-u135l3-dukhota", type: "vocab", front: "духота", reading: "dukhota", meaning: "stuffy airless heat", accept: ["close heavy air with no movement", "heat with no air to breathe", "the heaviness of unaired indoor air"], example: { jp: "В комнате была такая духота, что сидеть там было нельзя.", en: "There was such stuffiness in the room that it was impossible to sit there." }, drill: { jp: "Эта духота очень тяжёлая", en: "This stuffiness is very heavy" }, hint: "du-kha-TA — stress on the LAST syllable, and the о before it reduces to a. FEMININE (-а). From дух, air or spirit. ⚠️ Mostly INDOORS or before a storm; it is about air that does not move, not about temperature alone." },
        { id: "ru-u135l3-vlazhnost", type: "vocab", front: "влажность", reading: "vlazhnost", meaning: "humidity", accept: ["how much water is in the air", "the wetness of the air", "moisture held in the air"], example: { jp: "Влажность здесь такая высокая, что бумага всегда мокрая.", en: "The humidity here is so high that paper is always damp." }, drill: { jp: "Эта влажность очень высокая", en: "This humidity is very high" }, hint: "VLAZH-nast — stress on the first syllable, and the о reduces to a. FEMININE, like every -ость noun. From влажный, damp, which this course does not card — and because it does not, this is not the \"the taught word gives it away\" shape unit 1 §D refuses." },
        { id: "ru-u135l3-skvoznyak", type: "vocab", front: "сквозняк", reading: "skvoznyak", meaning: "a draught", accept: ["cold air moving through a room", "air coming through a gap", "a current of air between two openings"], example: { jp: "Сквозняк шёл от окна к двери, и сидеть там было нельзя.", en: "A draught went from the window to the door, and it was impossible to sit there." }, drill: { jp: "Этот сквозняк очень сильный", en: "This draught is very strong" }, hint: "skvaz-NYAK — stress on the last syllable, and the о reduces to a. MASCULINE. From сквозь, through. ⚠️ CULTURALLY LOADED: a сквозняк is believed to make you ill, and a Russian will close a window on a hot day rather than sit in one. Its oblique forms move the stress: сквознякА." },
        { id: "ru-u135l3-poryv", type: "vocab", front: "порыв", reading: "poryv", meaning: "a gust of wind", accept: ["a sudden short blast of wind", "wind that comes in one hard push", "a brief violent movement of air"], example: { jp: "Порыв был такой сильный, что идти было трудно.", en: "The gust was so strong that walking was difficult." }, drill: { jp: "Этот порыв очень сильный", en: "This gust is very strong" }, hint: "pa-RYV — stress on the last syllable, with the ы from unit 5, and the о reduces to a. MASCULINE. From рвать, to tear. ⚠️ A SECOND, very common sense about people: a порыв is a surge of feeling — «в порыве гнева», in a fit of anger." },
        { id: "ru-u135l3-vikhr", type: "vocab", front: "вихрь", reading: "vikhr", meaning: "a sudden swirl of wind", accept: ["air spinning in a small circle", "a short twisting rush of wind", "wind that turns as it moves"], example: { jp: "Вихрь поднял с земли все листья и бумагу.", en: "The swirl of wind lifted all the leaves and paper off the ground." }, drill: { jp: "Этот вихрь очень сильный", en: "This swirl of wind is very strong" }, hint: "VIKHR — one syllable ending in two consonants. MASCULINE despite the -ь, so unit 1 §3 says to name it. ⚠️ Smaller than the `смерч` of unit 91: a вихрь lifts leaves in a yard, not roofs off houses. Alive as a metaphor: «вихрь событий», a whirl of events." },
      ],
    },
    {
      id: "ru-u135l4",
      unit: 135,
      lesson: 4,
      title: "Reading the sky",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the look of the sky and how it is read — a rainbow, a rain cloud, foul weather, overcast, a dead calm and a barometer.",
      items: [
        { id: "ru-u135l4-raduga", type: "vocab", front: "радуга", reading: "raduga", meaning: "a rainbow", accept: ["the arc of colours after rain", "a coloured bow in the sky", "the band of colours across the sky"], example: { jp: "После дождя над полем стояла радуга, и дети долго на неё смотрели.", en: "After the rain a rainbow stood over the field, and the children looked at it for a long time." }, drill: { jp: "Эта радуга очень красивая", en: "This rainbow is very beautiful" }, hint: "RA-du-ga — stress on the first syllable. FEMININE (-а). ⚠️ Russian children learn the seven colours by a sentence whose words start with their letters, the way English uses a man's name — and this is the word it is built on." },
        { id: "ru-u135l4-tucha", type: "vocab", front: "туча", reading: "tucha", meaning: "a heavy rain cloud", accept: ["a dark cloud that brings rain", "a black mass of cloud", "the kind of cloud a storm comes out of"], example: { jp: "Туча пришла с запада, и через минуту стало совсем темно.", en: "The rain cloud came from the west, and in a minute it became completely dark." }, drill: { jp: "Эта туча очень тёмная", en: "This rain cloud is very dark" }, hint: "TU-cha — stress on the first syllable. FEMININE (-а). ⚠️ `облако` (unit 54) is a white cloud; a туча is dark, heavy and about to do something. Used of crowds and trouble: «туча народу», a mass of people, «тучи сгустились», the clouds have gathered." },
        { id: "ru-u135l4-nenaste", type: "vocab", front: "ненастье", reading: "nenaste", meaning: "foul weather", accept: ["long spells of wet windy weather", "miserable grey wet days", "a stretch of bad weather"], example: { jp: "Ненастье было всю осень, и солнца почти не видели.", en: "There was foul weather all autumn, and we hardly saw the sun." }, drill: { jp: "Это ненастье было очень долгое", en: "This foul weather lasted a very long time" }, hint: "ni-NAS-tye — stress on NAS, and the first е reduces to i. NEUTER (-ье). ⚠️ IT ONLY LOOKS LIKE не+X: unit 31 §3 bars не plus a TAUGHT word (which is why непогода is not a card), but `настье` is not a word in modern Russian at all, so there is nothing to decompose. A single old lexeme that happens to begin н-е." },
        { id: "ru-u135l4-pasmurnyy", type: "vocab", front: "пасмурный", reading: "pasmurnyy", meaning: "overcast", accept: ["with the whole sky covered in grey", "dull and cloudy all over", "grey with no sun showing"], example: { jp: "День был пасмурный, но дождя так и не было.", en: "The day was overcast, but in the end there was no rain." }, drill: { jp: "Этот пасмурный день очень тихий", en: "This overcast day is very quiet" }, hint: "PAS-mur-nyy — stress on the first syllable. An ADJECTIVE, masculine singular; feminine пасмурная, neuter пасмурное, plural пасмурные. ⚠️ Said of a face too: «пасмурное лицо», a gloomy expression — and that use is as common as the weather one." },
        { id: "ru-u135l4-shtil", type: "vocab", front: "штиль", reading: "shtil", meaning: "a dead calm at sea", accept: ["water with no wind at all", "the sea when the air is still", "flat windless weather on water"], example: { jp: "Был полный штиль, и корабль стоял на одном месте целый день.", en: "There was a dead calm, and the ship stood in one place all day." }, drill: { jp: "Этот штиль был очень долгий", en: "This dead calm was very long" }, hint: "SHTIL — one syllable. MASCULINE despite the -ь, so unit 1 §3 says to name it. A Dutch loan, like `палуба` and `каюта` at u125l3. ⚠️ Properly a SEA word, and it is used figuratively of a market or a career with nothing happening: «штиль на рынке»." },
        { id: "ru-u135l4-barometr", type: "vocab", front: "барометр", reading: "barometr", meaning: "a barometer", accept: ["the instrument that measures air pressure", "the dial that shows if weather will change", "an instrument for reading the weather"], example: { jp: "Барометр показал, что скоро будет дождь, и дождь был.", en: "The barometer showed that rain was coming soon, and the rain came." }, drill: { jp: "Этот барометр очень старый", en: "This barometer is very old" }, hint: "ba-RO-mitr — stress on RO, the first а is clear, and the final -метр is said as one syllable. MASCULINE. ⚠️ Used as a metaphor constantly: «барометр настроения», a barometer of mood, of anything that shows how things stand." },
      ],
    },
  ],
};
