// RU Unit 16 — Цвета и погода ("Colours and weather") — A1
// ─────────────────────────────────────────────────────────────────────────────
// Conventions are declared in ru/unit1.js §1–§10 and bind every card here.
//
// ⚠️ THE ONE PATTERN THIS UNIT EXISTS TO TEACH: RUSSIAN REPORTS WEATHER WITH AN
// ADVERB. Сегодня тепло, сегодня холодно — with no subject and no verb. Writing
// "погода тёплая" is grammatical but is not what anybody says, and writing "погода
// очень тепло" is simply wrong. Every weather sentence here uses the adverb frame,
// and `погода`'s own hint states the rule outright, because a learner who
// generalises from an adjective example will produce the error for years.
//
// ⚠️ RUSSIAN HAS TWO BLUES AND THEY ARE SEPARATE COLOUR WORDS, not shades.
// `синий` is dark blue, `голубой` is light blue, and a learner who calls a summer
// sky синий gets corrected. Both are carded, in different lessons, with the split
// named on each hint. `светлый` (light-coloured), which would have been голубой's
// natural partner, is DELIBERATELY NOT CARDED: it shares a root with u15's `свет`,
// and unit1.js §D's test — would a learner who knows one already know the other? —
// says yes. `тёмный` carries the dark/light axis on its own instead.
//
// ⚠️ FOUR ё FRONTS IN ONE UNIT (зелёный · чёрный · жёлтый · тёмный), which makes
// unit1.js §7 load-bearing here. ё is ALWAYS written in this course and ё is
// ALWAYS the stressed vowel, so the spelling hands the learner the stress for
// free — and the е-spelled twins (зеленый, черный, желтый, темный) are therefore
// never taught, never used in a sentence, and would fold onto these cards if they
// were. The readings carry the yo: зелёный → "zelyonyy", чёрный → "chyornyy".
//
// ⚠️ `ветер` has a fleeting е (ветер → ветра) and its drill stays nominative,
// same as `угол` (u12), `рынок` (u14), `потолок`/`порядок` (u15).
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT16 = {
  id: "ru-u16",
  lang: "ru",
  title: "Цвета и погода",
  order: 16,
  stage: "a1",
  lessons: [
    {
      id: "ru-u16l1",
      unit: 16,
      lesson: 1,
      title: "Name the first six colours",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what colour something is, using the six colours a beginner needs first.",
      items: [
        { id: "ru-u16l1-tsvet", type: "vocab", front: "цвет", reading: "tsvet", meaning: "a colour", accept: ["color", "the colour", "a shade"], example: { jp: "Этот цвет очень красивый, и он мне нравится.", en: "This colour is very beautiful, and I like it." }, drill: { jp: "Цвет здесь очень красивый", en: "The colour here is very beautiful" }, hint: "TSVYET, one syllable. Masculine. ONE LETTER apart from свет, light, in unit 15 — and they are unrelated words. Its plural is цвета, colours; the other plural цветы means flowers." },
        { id: "ru-u16l1-krasnyy", type: "vocab", front: "красный", reading: "krasnyy", meaning: "red", accept: ["scarlet", "the colour red"], example: { jp: "Красный цвет очень яркий, и я его люблю.", en: "Red is a very bright colour, and I love it." }, drill: { jp: "Это красный дом", en: "This is a red house" }, hint: "KRAS-nyy, stress first, and the -ый ending is two y-sounds in a row. It shares its root with красивый, beautiful: in old Russian красный MEANT beautiful, which is where Красная площадь comes from — the beautiful square, not the red one." },
        { id: "ru-u16l1-siniy", type: "vocab", front: "синий", reading: "siniy", meaning: "blue", accept: ["dark blue", "navy", "deep blue"], example: { jp: "Синий цвет очень тёмный, и это красиво.", en: "Blue is a very dark colour, and that is beautiful." }, drill: { jp: "Это синий цвет", en: "This is the colour blue" }, hint: "SI-niy, stress first. Russian has TWO blues and they are separate colours, not shades: синий is the dark one, голубой the light one in lesson 2. Call a summer sky синий and you will be corrected." },
        { id: "ru-u16l1-zelenyy", type: "vocab", front: "зелёный", reading: "zelyonyy", meaning: "green", accept: ["the colour green", "grass-green"], example: { jp: "Зелёный цвет мне очень нравится.", en: "I like the colour green very much." }, drill: { jp: "Зелёный цвет очень красивый", en: "Green is a very beautiful colour" }, hint: "zi-LYO-nyy, stress on the ё — and ё is always the stressed vowel, so the spelling hands you the stress (unit1.js §7). Built on зелень, greenery. Never written зеленый in this course." },
        { id: "ru-u16l1-belyy", type: "vocab", front: "белый", reading: "belyy", meaning: "white", accept: ["the colour white", "pale"], example: { jp: "Белый снег очень красивый, и я его люблю.", en: "White snow is very beautiful, and I love it." }, drill: { jp: "Белый дом очень красивый", en: "The white house is very beautiful" }, hint: "BYE-lyy, stress first. The colour is all over the Russian map: Белое море is the White Sea, and Беларусь is literally White Rus. Its opposite is чёрный." },
        { id: "ru-u16l1-chernyy", type: "vocab", front: "чёрный", reading: "chyornyy", meaning: "black", accept: ["the colour black", "jet black"], example: { jp: "Чёрный кофе это очень хорошо.", en: "Black coffee is very good." }, drill: { jp: "Чёрный кофе уже здесь", en: "The black coffee is here already" }, hint: "CHOR-nyy, stress on the ё, which tells you so by being written. Чёрное море is the Black Sea. Never written черный here — see unit1.js §7 for why the course refuses to hide a ё." },
      ],
    },
    {
      id: "ru-u16l2",
      unit: 16,
      lesson: 2,
      title: "Four more colours, and how light they are",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name a less obvious colour and say whether it is dark or bright.",
      items: [
        { id: "ru-u16l2-zheltyy", type: "vocab", front: "жёлтый", reading: "zhyoltyy", meaning: "yellow", accept: ["the colour yellow", "golden yellow"], example: { jp: "Жёлтый цвет очень яркий, и это приятно.", en: "Yellow is a very bright colour, and that is pleasant." }, drill: { jp: "Жёлтый дом на нашей улице", en: "The yellow house on our street" }, hint: "ZHOL-tyy, stress on the ё — and because ж is ALWAYS hard, it comes out ZHOL and not ZHYOL. The front is the masculine form, as every adjective front in this course is." },
        { id: "ru-u16l2-seryy", type: "vocab", front: "серый", reading: "seryy", meaning: "grey", accept: ["gray", "the colour grey", "dull"], example: { jp: "Серый день это очень скучно.", en: "A grey day is very boring." }, drill: { jp: "Серый цвет очень тёмный", en: "Grey is a very dark colour" }, hint: "SYE-ryy, stress first. It also means dull or dreary, of a day or of a person — серый день, серая жизнь — which is exactly the metaphor English makes with grey." },
        { id: "ru-u16l2-korichnevyy", type: "vocab", front: "коричневый", reading: "korichnevyy", meaning: "brown", accept: ["the colour brown", "chestnut"], example: { jp: "Коричневый шкаф очень старый, но красивый.", en: "The brown cupboard is very old, but beautiful." }, drill: { jp: "Коричневый стол в кухне", en: "The brown table in the kitchen" }, hint: "ka-RICH-ni-vyy, stress on RICH — four syllables, the longest colour word here. It is built on корица, cinnamon, so the colour is literally cinnamon-coloured." },
        { id: "ru-u16l2-goluboy", type: "vocab", front: "голубой", reading: "goluboy", meaning: "light blue", accept: ["sky blue", "pale blue", "the colour light blue"], example: { jp: "Голубой цвет очень красивый, и он не тёмный.", en: "Light blue is a very beautiful colour, and it is not dark." }, drill: { jp: "Это голубой цвет здесь", en: "This here is light blue" }, hint: "ga-lu-BOY, stress right at the end. Russian's SECOND blue, a colour word in its own right and not a shade of синий — it is built on голубь, a dove. In modern slang it also means gay, so use it of things rather than of people." },
        { id: "ru-u16l2-temnyy", type: "vocab", front: "тёмный", reading: "tyomnyy", meaning: "dark", accept: ["dark-coloured", "deep (of colour)", "gloomy"], example: { jp: "Тёмный цвет здесь не очень красивый.", en: "A dark colour is not very beautiful here." }, drill: { jp: "Тёмный шкаф в спальне", en: "The dark cupboard in the bedroom" }, hint: "TYOM-nyy, stress on the ё. Its natural opposite светлый is deliberately NOT taught: it shares a root with свет, light, in unit 15, and two cards on one root is a trap rather than a lesson." },
        { id: "ru-u16l2-yarkiy", type: "vocab", front: "яркий", reading: "yarkiy", meaning: "bright", accept: ["vivid", "brilliant", "strong (of colour)"], example: { jp: "Яркий свет в комнате, и это приятно.", en: "Bright light in the room, and that is pleasant." }, drill: { jp: "Яркий цвет очень красивый", en: "A bright colour is very beautiful" }, hint: "YAR-kiy, stress first. Bright of a colour or a light, and brilliant of a person — яркий человек. Its adverb ярко means brightly." },
      ],
    },
    {
      id: "ru-u16l3",
      unit: 16,
      lesson: 3,
      title: "Report the weather the way Russian does",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what the weather is doing today, with no verb and no subject.",
      items: [
        { id: "ru-u16l3-pogoda", type: "vocab", front: "погода", reading: "pogoda", meaning: "the weather", accept: ["weather", "a spell of weather"], example: { jp: "Сегодня очень тепло, и погода мне нравится.", en: "It is very warm today, and I like the weather." }, drill: { jp: "Погода здесь мне нравится", en: "I like the weather here" }, hint: "pa-GO-da, stress on GO. Feminine (-а), no plural in ordinary use. AND THE RULE THIS UNIT TURNS ON: Russian reports weather with an ADVERB, not an adjective — сегодня тепло, never погода тепло." },
        { id: "ru-u16l3-dozhd", type: "vocab", front: "дождь", reading: "dozhd", meaning: "rain", accept: ["a rain", "the rain", "a shower"], example: { jp: "Сегодня дождь, и я дома.", en: "It is raining today, and I am at home." }, drill: { jp: "Сегодня дождь и холодно", en: "Today it is raining and cold" }, hint: "DOZHD, one syllable, and the ждь at the end is a soft cluster most Russians flatten to DOSHCH. MASCULINE (-ь). There is NO verb for to rain: you say дождь, the rain, as a whole sentence." },
        { id: "ru-u16l3-sneg", type: "vocab", front: "снег", reading: "sneg", meaning: "snow", accept: ["a snow", "the snow", "snowfall"], example: { jp: "Сегодня снег, и здесь очень холодно.", en: "It is snowing today, and it is very cold here." }, drill: { jp: "Сегодня снег и мороз", en: "Today there is snow and frost" }, hint: "SNYEK, one syllable, and the final г says k. Masculine. In the snow is в снегу, with the stressed -у that дом and мост also take. Как снег на голову is the Russian for out of the blue." },
        { id: "ru-u16l3-veter", type: "vocab", front: "ветер", reading: "veter", meaning: "wind", accept: ["a wind", "the wind", "a breeze"], example: { jp: "Сегодня ветер, и это не очень приятно.", en: "It is windy today, and that is not very pleasant." }, drill: { jp: "Сегодня ветер и дождь", en: "Today there is wind and rain" }, hint: "VYE-tir, stress first, and the second е reduces towards i. Masculine, with a fleeting е — ветер, but ветра. Like дождь it works as a whole sentence on its own." },
        { id: "ru-u16l3-teplo", type: "vocab", front: "тепло", reading: "teplo", meaning: "it is warm", accept: ["warm", "warmth", "warmly"], example: { jp: "Сегодня очень тепло, и я хочу в парк.", en: "It is very warm today, and I want to go to the park." }, drill: { jp: "Здесь всегда очень тепло", en: "It is always very warm here" }, hint: "ti-PLO, stress at the end. An ADVERB, so it is a whole sentence: Тепло. The same spelling is also the noun warmth. The adjective тёплый exists, but a weather report uses this form." },
        { id: "ru-u16l3-kholodno", type: "vocab", front: "холодно", reading: "kholodno", meaning: "it is cold", accept: ["cold", "coldly", "chilly"], example: { jp: "Сегодня очень холодно, и я дома.", en: "It is very cold today, and I am at home." }, drill: { jp: "На улице очень холодно", en: "It is very cold outside" }, hint: "KHO-lad-na, stress first, with both о after it reduced to a. An adverb and the opposite of тепло: Холодно. The adjective холодный and the noun холод both wait for A2." },
      ],
    },
    {
      id: "ru-u16l4",
      unit: 16,
      lesson: 4,
      title: "Say what the season is like",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the four seasons and say what the weather does in each.",
      items: [
        { id: "ru-u16l4-zima", type: "vocab", front: "зима", reading: "zima", meaning: "winter", accept: ["a winter", "the winter"], example: { jp: "Зима здесь очень долго, и это трудно.", en: "Winter here lasts a very long time, and that is hard." }, drill: { jp: "Зима у нас очень долго", en: "Our winter lasts a very long time" }, hint: "zi-MA, stress at the end. Feminine (-а). Its plural throws the stress forward to зи́мы, and зимой — worth learning whole — means in winter." },
        { id: "ru-u16l4-vesna", type: "vocab", front: "весна", reading: "vesna", meaning: "spring", accept: ["a spring", "the spring", "springtime"], example: { jp: "Весна здесь очень красивая, и уже тепло.", en: "Spring here is very beautiful, and it is warm already." }, drill: { jp: "Весна уже здесь и тепло", en: "Spring is here already and it is warm" }, hint: "vis-NA, stress at the end, and the е reduces to i. Feminine (-а). Весной, learned whole, means in spring." },
        { id: "ru-u16l4-leto", type: "vocab", front: "лето", reading: "leto", meaning: "summer", accept: ["a summer", "the summer", "summertime"], example: { jp: "Летом здесь всегда очень тепло.", en: "In summer it is always very warm here." }, drill: { jp: "Лето и весна уже здесь", en: "Summer and spring are here" }, hint: "LYE-ta, stress first, final о reduced. NEUTER (-о). And a Russian oddity worth knowing: its plural лета supplies the counting word for YEARS — мне двадцать лет — which is why год looks like it has no plural after a number." },
        { id: "ru-u16l4-osen", type: "vocab", front: "осень", reading: "osen", meaning: "autumn", accept: ["a fall", "the autumn", "autumn time"], example: { jp: "Осень здесь очень красивая, но уже холодно.", en: "Autumn here is very beautiful, but it is cold already." }, drill: { jp: "Осень уже здесь и дождь", en: "Autumn is here already and it is raining" }, hint: "O-sin, stress first. FEMININE (-ь) — one more unpredictable soft-sign noun, which is what unit1.js §3 is for. Осенью means in autumn, and сентябрь, September, is a separate word entirely." },
        { id: "ru-u16l4-moroz", type: "vocab", front: "мороз", reading: "moroz", meaning: "a hard frost", accept: ["frost", "the frost", "freezing cold"], example: { jp: "Сегодня мороз, и это очень холодно.", en: "There is a hard frost today, and it is very cold." }, drill: { jp: "Мороз и снег уже здесь", en: "Frost and snow are here" }, hint: "ma-ROS, stress at the end, and the з says s at the end of the word. Masculine. Not merely cold — мороз is a hard freeze, below zero. Дед Мороз, Grandfather Frost, is the Russian Father Christmas." },
        { id: "ru-u16l4-zhara", type: "vocab", front: "жара", reading: "zhara", meaning: "the heat", accept: ["heat", "hot weather", "a heatwave"], example: { jp: "Летом здесь жара, и это трудно.", en: "In summer there is a heatwave here, and that is hard." }, drill: { jp: "Летом здесь всегда жара", en: "In summer it is always baking here" }, hint: "zha-RA, stress at the end, and the ж is hard. Feminine (-а). It means OPPRESSIVE heat, not the pleasant тепло — a Russian complains about жара and enjoys тепло." },
      ],
    },
  ],
};
