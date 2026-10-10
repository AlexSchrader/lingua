// Unit 12 — いろ・てんき ("Colors & Weather") — A1 thematic
// Colors (noun + い-adjective forms), weather, temperature, and the four seasons.
// Vocab-only (no kanji dependency), so it can be authored in parallel with the
// kanji item type. Example sentences stay inside known grammar (は/が/を/の +
// です/ます + すきな…／なんですか) and reuse earlier vocab. Teaches the noun-vs-
// adjective color split (あか "red" / あかい "is red"). lang/unit/lesson in index.js.
export const UNIT12 = {
  id: "ja-u12",
  lang: "ja",
  title: "いろ・てんき",
  order: 12,
  stage: "a1",
  lessons: [
    // Lesson 1: basic colors (nouns)
    {
      id: "ja-u12l1",
      unit: 12,
      lesson: 1,
      title: "Colors",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name basic colors: あか あお きいろ くろ みどり, and ask someone's favorite いろ.",
      items: [
        { id: "ja-u12l1-aka", type: "vocab", front: "あか", reading: "aka", meaning: "red", example: { jp: "あかがすきです。", en: "I like red." }, drill: { jp: "あかとあおがすきです。", en: "I like red and blue." }, accept: ["the color red", "the colour red", "crimson"], hint: "A-ka — two beats. 🚨 THIS IS THE COLOUR AS A NOUN — あかがすきです, I like red. To describe a thing you need あかい, the い-adjective in the next lesson. Japanese traffic lights call green あお, not みどり." },
        { id: "ja-u12l1-ao", type: "vocab", front: "あお", reading: "ao", meaning: "blue", example: { jp: "そらはあおです。", en: "The sky is blue." }, drill: { jp: "あおのかばんです。", en: "It's a blue bag." }, accept: ["the colour blue", "the color blue", "azure"], hint: "A-o — two beats, both vowels sounded: a-o. The noun. ⚠️ Historically あお covered blue AND green, which is why a green light is あおしんごう and new leaves are あおば. みどり is the newer, narrower word." },
        { id: "ja-u12l1-kiiro", type: "vocab", front: "きいろ", reading: "kiiro", meaning: "yellow", example: { jp: "バナナはきいろです。", en: "A banana is yellow." }, drill: { jp: "きいろがすきです。", en: "I like yellow." }, accept: ["the colour yellow", "the color yellow", "golden yellow"], hint: "KEE-ro — three beats: ki-i-ro, the double い held, tapped r. ⚠️ It is built as きい plus いろ, colour — so the word literally contains the word for colour, unlike あか and あお." },
        { id: "ja-u12l1-kuro", type: "vocab", front: "くろ", reading: "kuro", meaning: "black", example: { jp: "くろのくつです。", en: "They're black shoes." }, drill: { jp: "くろのかさをかいます。", en: "I buy a black umbrella." }, accept: ["the colour black", "the color black", "jet black"], hint: "KU-ro — two beats, tapped r. The noun. ⚠️ One kana from しろ, white, and from くつ, shoes — Japanese colour nouns are nearly all two beats, so they live close together. The adjective is くろい." },
        { id: "ja-u12l1-midori", type: "vocab", front: "みどり", reading: "midori", meaning: "green", example: { jp: "みどりがすきです。", en: "I like green." }, drill: { jp: "みどりのやまです。", en: "It's a green mountain." }, accept: ["the colour green", "the color green", "verdant green"], hint: "mi-DO-ri — three beats, tapped r. 🚨 NO い-ADJECTIVE EXISTS — there is no みどりい. To describe something green you say みどりの, with the particle. The same is true of むらさき and ピンク." },
        { id: "ja-u12l1-iro", type: "vocab", front: "いろ", reading: "iro", meaning: "color", example: { jp: "すきないろはなんですか。", en: "What's your favorite color?" }, drill: { jp: "このいろはうすいです。", en: "This colour is pale." }, accept: ["colour", "colours", "shade", "hue"], hint: "I-ro — two beats, tapped r. ⚠️ It is the ending of きいろ, ちゃいろ and みずいろ — spot いろ at the end of a word and you are reading a colour name. いろいろ, colour-colour, means various." },
        { id: "ja-u12l1-murasaki", type: "vocab", front: "むらさき", reading: "murasaki", meaning: "purple", example: { jp: "むらさきがすきです。", en: "I like purple." }, drill: { jp: "むらさきのはながあります。", en: "There are purple flowers." }, accept: ["violet", "the colour purple", "mauve"], hint: "mu-ra-SA-ki — four beats, tapped r. It is the name of a PLANT, gromwell, that the dye came from — the colour is named after the root. ⚠️ No adjective form: むらさきの, never むらさきい." },
        { id: "ja-u12l1-mizuiro", type: "vocab", front: "みずいろ", reading: "mizuiro", meaning: "light blue", example: { jp: "そらはみずいろです。", en: "The sky is light blue." }, drill: { jp: "みずいろのセーターです。", en: "It's a light blue sweater." }, accept: ["sky blue", "pale blue", "baby blue", "aqua"], hint: "mi-zu-I-ro — four beats. みず water plus いろ colour — water-colour, meaning the pale blue of clear water. ⚠️ Not watercolour paint, which is すいさい. A separate colour from あお in Japanese, not a shade of it." },
      ],
    },
    // Lesson 2: more colors + the い-adjective forms
    {
      id: "ja-u12l2",
      unit: 12,
      lesson: 2,
      title: "Color adjectives",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use color words as い-adjectives (あかい = is red); add ちゃいろ and ピンク.",
      items: [
        { id: "ja-u12l2-chairo", type: "vocab", front: "ちゃいろ", reading: "chairo", meaning: "brown", example: { jp: "ちゃいろのかばんです。", en: "It's a brown bag." }, drill: { jp: "ちゃいろのいぬです。", en: "It's a brown dog." }, accept: ["the colour brown", "the color brown", "tan"], hint: "cha-I-ro — three beats, ちゃ a single sound. ちゃ is TEA plus いろ — brown is literally tea-colour, and the ちゃ is the same one as in おちゃ. ⚠️ ちゃいろい does exist but ちゃいろの is far commoner." },
        { id: "ja-u12l2-pinku", type: "vocab", front: "ピンク", reading: "pinku", meaning: "pink", example: { jp: "ピンクがすきです。", en: "I like pink." }, drill: { jp: "ピンクのはなをかいます。", en: "I buy pink flowers." }, accept: ["the colour pink", "the color pink", "rose"], hint: "PIN-ku — three beats, the ン held. Borrowed, hence katakana. ⚠️ Japanese has a native word too — ももいろ, peach-colour — but ピンク has nearly replaced it. No い-adjective: ピンクの." },
        { id: "ja-u12l2-akai", type: "vocab", front: "あかい", reading: "akai", meaning: "red (is red)", example: { jp: "りんごはあかいです。", en: "The apple is red." }, drill: { jp: "あかいトマトをたべます。", en: "I eat a red tomato." }, accept: ["red", "is red", "reddish", "crimson"], hint: "a-KAI — three beats: a-ka-i. 🚨 THIS IS THE い-ADJECTIVE — it goes straight in front of a noun with nothing between: あかいトマト. The noun あか from Lesson 1 needs の instead: あかのトマト. Both are correct Japanese; the adjective is the everyday one." },
        { id: "ja-u12l2-aoi", type: "vocab", front: "あおい", reading: "aoi", meaning: "blue (is blue)", example: { jp: "そらはあおいです。", en: "The sky is blue." }, drill: { jp: "あおいくるまがすきです。", en: "I like blue cars." }, accept: ["blue", "is blue", "bluish", "azure"], hint: "a-OI — three beats: a-o-i. The い-adjective of あお. ⚠️ It stretches to green things and to pale faces — かおがあおい means looking ill, not blue-faced. Only four colours have い-forms: あか, あお, くろ, しろ, plus きいろ." },
        { id: "ja-u12l2-kuroi", type: "vocab", front: "くろい", reading: "kuroi", meaning: "black (is black)", example: { jp: "くろいねこです。", en: "It's a black cat." }, drill: { jp: "くろいかばんをかいます。", en: "I buy a black bag." }, accept: ["black", "is black", "blackish", "dark"], hint: "ku-ROI — three beats, tapped r. The い-adjective of くろ. ⚠️ It also means shady or guilty — くろ on its own is the verdict guilty in a trial, and しろ is innocent." },
        { id: "ja-u12l2-shiroi", type: "vocab", front: "しろい", reading: "shiroi", meaning: "white (is white)", example: { jp: "しろいくつです。", en: "They're white shoes." }, drill: { jp: "しろいいえにすみます。", en: "I live in a white house." }, accept: ["white", "is white", "whitish", "pale white"], hint: "shi-ROI — three beats, tapped r. The い-adjective of しろ. ⚠️ Note the drill: しろいいえ runs three い-sounds together — hold each one, because Japanese gives every vowel its own beat." },
        { id: "ja-u12l2-kiiroi", type: "vocab", front: "きいろい", reading: "kiiroi", meaning: "yellow (is yellow)", example: { jp: "バナナはきいろいです。", en: "The banana is yellow." }, drill: { jp: "きいろいはながきれいです。", en: "The yellow flowers are beautiful." }, accept: ["yellow", "is yellow", "yellowish", "golden"], hint: "kee-ROI — four beats: ki-i-ro-i. ⚠️ The longest of the colour adjectives, because きいろ already contains いろ and then takes another い. きいろいこえ, a yellow voice, means a shrill one." },
        { id: "ja-u12l2-usui", type: "vocab", front: "うすい", reading: "usui", meaning: "pale", example: { jp: "うすいピンクです。", en: "It's a pale pink." }, drill: { jp: "うすいおちゃです。", en: "It's weak tea." }, accept: ["light", "thin", "faint", "weak"], hint: "u-SUI — three beats: u-su-i. ⚠️ It covers PALE colour, THIN thickness and WEAK flavour all at once — うすいピンク, うすいかみ, うすいおちゃ. The opposite is こい, deep or strong." },
      ],
    },
    // Lesson 3: weather
    {
      id: "ja-u12l3",
      unit: 12,
      lesson: 3,
      title: "Weather",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about the weather: てんき はれ あめ くもり かぜ にじ.",
      items: [
        { id: "ja-u12l3-tenki", type: "vocab", front: "てんき", reading: "tenki", meaning: "weather", example: { jp: "てんきがいいです。", en: "The weather is good." }, drill: { jp: "てんきはあめです。", en: "The weather is rain." }, accept: ["the weather", "weather conditions", "climate"], hint: "TEN-ki — three beats, the ん held. てん is heaven and き is energy — the mood of the sky. ⚠️ Japanese says てんきがいい for good weather, with が, and おてんき with the honorific in polite small talk." },
        { id: "ja-u12l3-hare", type: "vocab", front: "はれ", reading: "hare", meaning: "sunny", example: { jp: "きょうははれです。", en: "Today is sunny." }, drill: { jp: "はれのそらはあおいです。", en: "A clear sky is blue." }, accept: ["clear", "fine weather", "sunshine", "clear skies"], hint: "HA-re — two beats, tapped r. A noun, from はれる, to clear up. ⚠️ A はれ day in Japan means no cloud at all — the forecast word for partly cloudy is はれときどきくもり, sunny sometimes cloudy." },
        { id: "ja-u12l3-ame", type: "vocab", front: "あめ", reading: "ame", meaning: "rain", example: { jp: "あしたはあめです。", en: "Tomorrow it will rain." }, drill: { jp: "あめのまちはしずかです。", en: "The town is quiet in the rain." }, accept: ["rainy", "rainfall", "a shower", "raining"], hint: "A-me — two beats. ⚠️ Said aloud it is also あめ, a boiled sweet — pitch separates them and context does the rest. Rain falls with ふります: あめがふります." },
        { id: "ja-u12l3-kumori", type: "vocab", front: "くもり", reading: "kumori", meaning: "cloudy", example: { jp: "きょうはくもりです。", en: "Today is cloudy." }, drill: { jp: "くもりのそらです。", en: "It's a cloudy sky." }, accept: ["overcast", "cloudiness", "clouded over"], hint: "ku-MO-ri — three beats, tapped r. A noun from くもる, to cloud over, and built on くも, cloud, which is in this same lesson. ⚠️ It is the forecast word — くもりです, it is cloudy." },
        { id: "ja-u12l3-kaze", type: "vocab", front: "かぜ", reading: "kaze", meaning: "wind", example: { jp: "かぜがあります。", en: "It's windy." }, drill: { jp: "かぜがすずしいです。", en: "The wind is cool." }, accept: ["a breeze", "breeze", "windy", "a draught"], hint: "KA-ze — two beats, ぜ buzzed. 🚨 かぜ ALSO MEANS A COLD, the illness — かぜをひきます is to catch a cold. Same kana, different kanji (風 vs 風邪), and the verb tells you which." },
        { id: "ja-u12l3-niji", type: "vocab", front: "にじ", reading: "niji", meaning: "rainbow", example: { jp: "にじがすきです。", en: "I like rainbows." }, drill: { jp: "にじがそらにあります。", en: "There is a rainbow in the sky." }, accept: ["rainbows", "a rainbow", "the rainbow"], hint: "NI-ji — two beats. ⚠️ Nothing to do with に, two, or にじゅう, twenty. Japanese counts seven colours in a にじ, the same as English. にじいろ, rainbow-coloured, is a common word for multicoloured." },
        { id: "ja-u12l3-taifu", type: "vocab", front: "たいふう", reading: "taifū", meaning: "typhoon", example: { jp: "たいふうがきます。", en: "A typhoon is coming." }, drill: { jp: "たいふうはあきにきます。", en: "Typhoons come in autumn." }, accept: ["storm", "hurricane", "tropical storm", "cyclone"], hint: "tai-FOO — four beats: ta-i-fu-u, soft blown ふ with the う lengthening it. ⚠️ English typhoon came FROM this word, not the other way round. Japan numbers them by year — たいふう十五ごう is the fifteenth of the season." },
        { id: "ja-u12l3-kumo", type: "vocab", front: "くも", reading: "kumo", meaning: "cloud", example: { jp: "しろいくもです。", en: "It's a white cloud." }, drill: { jp: "くもがおおきいです。", en: "The cloud is big." }, accept: ["clouds", "a cloud", "cloud cover"], hint: "KU-mo — two beats. ⚠️ Said aloud it is also くも, a SPIDER — different kanji (雲 vs 蜘蛛), same kana. The weather word くもり in this lesson is built from this one." },
      ],
    },
    // Lesson 4: temperature (い-adjectives)
    {
      id: "ja-u12l4",
      unit: 12,
      lesson: 4,
      title: "Hot & cold",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe temperature: あつい さむい あたたかい すずしい つめたい ぬるい.",
      items: [
        { id: "ja-u12l4-atsui", type: "vocab", front: "あつい", reading: "atsui", meaning: "hot", example: { jp: "コーヒーはあついです。", en: "The coffee is hot." }, drill: { jp: "あついおちゃをのみます。", en: "I drink hot tea." }, accept: ["hot (weather)", "sweltering", "boiling", "very warm"], hint: "a-TSUI — three beats, つ is tsu. 🚨 TEMPERATURE-hot, never spicy-hot — that is からい. ⚠️ And a third あつい means thick (厚い), so あついほん is a thick book, not a warm one." },
        { id: "ja-u12l4-samui", type: "vocab", front: "さむい", reading: "samui", meaning: "cold", example: { jp: "きょうはさむいです。", en: "Today is cold." }, drill: { jp: "さむいあさです。", en: "It's a cold morning." }, accept: ["cold (weather)", "chilly", "freezing", "bitter"], hint: "sa-MUI — three beats: sa-mu-i. 🚨 FOR AIR AND WEATHER ONLY — how YOU feel. Cold water or cold metal is つめたい, in this same lesson. Saying みずがさむい is a mistake every learner makes once." },
        { id: "ja-u12l4-atatakai", type: "vocab", front: "あたたかい", reading: "atatakai", meaning: "warm", example: { jp: "あたたかいへやです。", en: "It's a warm room." }, drill: { jp: "あたたかいはるがすきです。", en: "I like warm spring weather." }, accept: ["warm (weather)", "mild", "balmy"], hint: "a-ta-ta-KAI — five beats, with あたた said as three separate beats. ⚠️ The pleasant warmth; too warm is あつい. For warm FOOD or drink Japanese often writes あたたかい with a different kanji, 温かい." },
        { id: "ja-u12l4-suzushii", type: "vocab", front: "すずしい", reading: "suzushii", meaning: "cool", example: { jp: "すずしいかぜです。", en: "It's a cool breeze." }, drill: { jp: "すずしいあさにさんぽをします。", en: "I take a walk on a cool morning." }, accept: ["cool (weather)", "refreshingly cool", "pleasantly cool"], hint: "su-zu-SHEE — four beats: su-zu-shi-i, both ず buzzed. ⚠️ PLEASANTLY cool, and always a compliment — unpleasantly cool is さむい. It is the standard word for an autumn evening." },
        { id: "ja-u12l4-tsumetai", type: "vocab", front: "つめたい", reading: "tsumetai", meaning: "cold to the touch", example: { jp: "つめたいみずです。", en: "It's cold water." }, drill: { jp: "つめたいビールをのみます。", en: "I drink cold beer." }, accept: ["cold", "chilly", "icy", "chilled"], hint: "tsu-me-TAI — four beats, つ is tsu. 🚨 COLD TO THE TOUCH — water, a drink, metal, a hand. The air being cold is さむい. ⚠️ Of a person it means cold-hearted, exactly as in English." },
        { id: "ja-u12l4-nurui", type: "vocab", front: "ぬるい", reading: "nurui", meaning: "lukewarm", example: { jp: "おちゃがぬるいです。", en: "The tea is lukewarm." }, drill: { jp: "ぬるいスープです。", en: "It's lukewarm soup." }, accept: ["tepid", "warm-ish", "not hot enough"], hint: "nu-RUI — three beats, tapped r. ⚠️ Always a complaint — ぬるいビール is a ruined beer. Japanese has no neutral lukewarm; if you mean pleasantly warm you want あたたかい instead." },
        { id: "ja-u12l4-mushiatsui", type: "vocab", front: "むしあつい", reading: "mushiatsui", meaning: "humid", example: { jp: "きょうはむしあついです。", en: "Today is humid." }, drill: { jp: "むしあついなつです。", en: "It's a humid summer." }, accept: ["muggy", "hot and humid", "sticky", "sultry"], hint: "mu-shi-a-TSUI — five beats. むし from むす, to steam, plus あつい — steam-hot. ⚠️ Not むし the insect. It is THE word for a Japanese summer, and you will hear it every day from June." },
        { id: "ja-u12l4-sawayaka", type: "vocab", front: "さわやか", reading: "sawayaka", meaning: "refreshing", example: { jp: "さわやかなかぜです。", en: "It's a refreshing breeze." }, drill: { jp: "さわやかなあきです。", en: "It's a refreshing autumn." }, accept: ["fresh", "crisp", "bracing", "invigorating"], hint: "sa-wa-YA-ka — four beats. ⚠️ A な-ADJECTIVE, not an い one, despite the company it keeps here: さわやかなかぜ, never さわやかかぜ. Used of air, of a drink, and of a person's manner." },
      ],
    },
    // Lesson 5: the four seasons
    {
      id: "ja-u12l5",
      unit: 12,
      lesson: 5,
      title: "Seasons",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the seasons: はる なつ あき ふゆ, the word きせつ, and つゆ (rainy season).",
      items: [
        { id: "ja-u12l5-haru", type: "vocab", front: "はる", reading: "haru", meaning: "spring", example: { jp: "はるがすきです。", en: "I like spring." }, drill: { jp: "はるはあたたかいです。", en: "Spring is warm." }, accept: ["springtime", "the spring", "spring season"], hint: "HA-ru — two beats, tapped r. ⚠️ The Japanese school and business year starts in はる, in April, so はる means new beginnings in a way the English word does not. All four seasons are two beats." },
        { id: "ja-u12l5-natsu", type: "vocab", front: "なつ", reading: "natsu", meaning: "summer", example: { jp: "なつはあついです。", en: "Summer is hot." }, drill: { jp: "なつにプールにいきます。", en: "I go to the pool in summer." }, accept: ["summertime", "the summer", "summer season"], hint: "NA-tsu — two beats, つ is tsu. ⚠️ A Japanese なつ is むしあつい, not merely あつい, and it opens with つゆ, the rainy season, in June. なつやすみ is the summer holiday." },
        { id: "ja-u12l5-aki", type: "vocab", front: "あき", reading: "aki", meaning: "autumn", example: { jp: "あきはすずしいです。", en: "Autumn is cool." }, drill: { jp: "あきのそらはきれいです。", en: "The autumn sky is beautiful." }, accept: ["fall", "the autumn", "autumn season", "fall season"], hint: "A-ki — two beats. ⚠️ Said aloud it is also あき meaning a vacancy or an empty space (空き), and あきる, to get bored, starts the same way. Autumn leaf-viewing is こうよう." },
        { id: "ja-u12l5-fuyu", type: "vocab", front: "ふゆ", reading: "fuyu", meaning: "winter", example: { jp: "ふゆはさむいです。", en: "Winter is cold." }, drill: { jp: "ふゆはスープがおいしいです。", en: "Soup is delicious in winter." }, accept: ["wintertime", "the winter", "winter season"], hint: "FU-yu — two beats, soft blown ふ then a rounded ゆ. ⚠️ Keep ふゆ apart from つゆ, the rainy season, in this same lesson — one kana, two different halves of the year." },
        { id: "ja-u12l5-kisetsu", type: "vocab", front: "きせつ", reading: "kisetsu", meaning: "season", example: { jp: "すきなきせつはなんですか。", en: "What's your favorite season?" }, drill: { jp: "あきはすきなきせつです。", en: "Autumn is my favourite season." }, accept: ["seasons", "a season", "time of year"], hint: "ki-SE-tsu — three beats, つ is tsu. ⚠️ Japan treats the four きせつ as a cultural system, not just weather — food, poetry and greetings all change with them, which is why a きせつのことば appears in formal letters." },
        { id: "ja-u12l5-tsuyu", type: "vocab", front: "つゆ", reading: "tsuyu", meaning: "rainy season", example: { jp: "つゆはあめです。", en: "It rains in the rainy season." }, drill: { jp: "つゆはむしあついです。", en: "The rainy season is humid." }, accept: ["the rainy season", "monsoon", "wet season"], hint: "TSU-yu — two beats, つ is tsu. ⚠️ A fifth season in practice: June to mid-July, between はる and なつ. ⚠️ One kana from ふゆ, winter. Also read ばいう in formal weather reports." },
        { id: "ja-u12l5-sakura", type: "vocab", front: "さくら", reading: "sakura", meaning: "cherry blossom", example: { jp: "はるにさくらをみます。", en: "In spring I see cherry blossoms." }, drill: { jp: "さくらはピンクです。", en: "Cherry blossom is pink." }, accept: ["cherry blossoms", "cherry tree", "sakura"], hint: "sa-KU-ra — three beats, tapped r. The flower AND the tree. ⚠️ Viewing it is はなみ, flower-looking — not さくらみ. The forecast of when it opens is national news, the さくらぜんせん, cherry front." },
        { id: "ja-u12l5-hanabi", type: "vocab", front: "はなび", reading: "hanabi", meaning: "fireworks", example: { jp: "なつのはなびです。", en: "They're summer fireworks." }, drill: { jp: "なつにはなびをみます。", en: "I watch fireworks in summer." }, accept: ["firework", "a firework display", "fireworks show"], hint: "ha-na-BI — three beats. はな flower plus ひ fire, voiced to び by the join — fire-flowers. ⚠️ Not はなび as in はな, nose. A display is a はなびたいかい, and they belong to summer in Japan, not to New Year." },
      ],
    },
  ],
};
