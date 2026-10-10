// Unit 9 — たべもの・まいにち ("Food & Everyday") — A1 thematic
// Everyday food words plus the core polite verbs (the ～ます forms the learner has
// been SEEING in example sentences since Unit 1 — now they're learnable items in
// their own right: たべます = "eat", いきます = "go"). Meanings are kept to a
// single headword where possible so choice cards stay clean; the "to ～" form is
// in accept[]. Examples reuse only known nouns + particles. No new grammar — the
// verbs are taught as vocabulary, not conjugation. lang/unit/lesson in index.js.
export const UNIT9 = {
  id: "ja-u9",
  lang: "ja",
  title: "たべもの・まいにち",
  order: 9,
  stage: "a1",
  lessons: [
    // Lesson 1: food
    {
      id: "ja-u9l1",
      unit: 9,
      lesson: 1,
      title: "Food",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name everyday foods: たまご やさい にく おちゃ おかし; say what you eat for breakfast.",
      items: [
        { id: "ja-u9l1-tamago", type: "vocab", front: "たまご", reading: "tamago", meaning: "egg", example: { jp: "たまごをたべます。", en: "I eat an egg." }, drill: { jp: "あさごはんはたまごです。", en: "Breakfast is eggs." }, accept: ["eggs", "an egg", "hen's egg"], hint: "ta-MA-go — three beats, hard g. ⚠️ Raw egg is normal food in Japan — たまごかけごはん is a raw one stirred into rice, and the eggs are sold for it. A rolled omelette is たまごやき, a fried-たまご." },
        { id: "ja-u9l1-yasai", type: "vocab", front: "やさい", reading: "yasai", meaning: "vegetables", example: { jp: "やさいがすきです。", en: "I like vegetables." }, drill: { jp: "やさいをかいます。", en: "I buy vegetables." }, accept: ["vegetable", "veggies", "greens", "produce"], hint: "ya-SAI — three beats: ya-sa-i. ⚠️ Japanese counts the tomato and the pumpkin as やさい and the strawberry as a fruit, which is the opposite of botany and the same as every Japanese greengrocer. No plural marking." },
        { id: "ja-u9l1-niku", type: "vocab", front: "にく", reading: "niku", meaning: "meat", example: { jp: "にくをたべます。", en: "I eat meat." }, drill: { jp: "にくはおいしいです。", en: "The meat is delicious." }, accept: ["flesh", "a meat", "red meat"], hint: "NI-ku — two beats. ⚠️ It never stands alone on a menu: the animal goes in front, so ぶたにく is pork, ぎゅうにく beef, とりにく chicken. Learn にく and you can read every meat in the shop." },
        { id: "ja-u9l1-ocha", type: "vocab", front: "おちゃ", reading: "ocha", meaning: "tea", example: { jp: "おちゃをのみます。", en: "I drink tea." }, drill: { jp: "おちゃはにがいです。", en: "The tea is bitter." }, accept: ["green tea", "japanese tea", "a tea", "cup of tea"], hint: "O-cha — two beats, ちゃ a single sound. ⚠️ The お is part of the word now — nobody says ちゃ alone. By default it means GREEN tea; black tea is こうちゃ, red-tea, and English-style milk tea is ミルクティー." },
        { id: "ja-u9l1-okashi", type: "vocab", front: "おかし", reading: "okashi", meaning: "sweets", example: { jp: "おかしがすきです。", en: "I like sweets." }, drill: { jp: "おかしはあまいです。", en: "Sweets are sweet." }, accept: ["candy", "snacks", "snack", "confectionery"], hint: "o-KA-shi — three beats, the お again built in. Covers biscuits, crisps and traditional わがし alike — anything eaten between meals. ⚠️ Not おいしい, delicious, which is in the next lesson and starts the same way." },
        { id: "ja-u9l1-asagohan", type: "vocab", front: "あさごはん", reading: "asagohan", meaning: "breakfast", example: { jp: "あさごはんをたべます。", en: "I eat breakfast." }, drill: { jp: "あさごはんにみそしるをのみます。", en: "I have miso soup with breakfast." }, accept: ["morning meal", "the morning meal", "first meal", "brekkie"], hint: "a-sa-go-HAN — five beats. あさ morning plus ごはん meal, and the pattern runs the whole day: ひるごはん lunch, ばんごはん dinner. ⚠️ Learn the three together — they are one word with the time swapped." },
        { id: "ja-u9l1-onigiri", type: "vocab", front: "おにぎり", reading: "onigiri", meaning: "rice ball", example: { jp: "おにぎりをたべます。", en: "I eat a rice ball." }, drill: { jp: "スーパーのおにぎりです。", en: "It's a supermarket rice ball." }, accept: ["rice balls", "a rice ball", "rice triangle", "musubi"], hint: "o-ni-GI-ri — four beats, hard g, tapped r. From にぎる, to grip — it is rice squeezed in the hand, so the name is the method. ⚠️ Not すし: no vinegar in the rice, and the filling sits in the middle." },
        { id: "ja-u9l1-misoshiru", type: "vocab", front: "みそしる", reading: "misoshiru", meaning: "miso soup", example: { jp: "あさ、みそしるをのみます。", en: "I drink miso soup in the morning." }, drill: { jp: "みそしるはあついです。", en: "The miso soup is hot." }, accept: ["miso", "bean paste soup", "soybean soup", "miso broth"], hint: "mi-so-SHI-ru — four beats, tapped r. みそ plus しる, broth. ⚠️ Japanese DRINKS it — みそしるをのみます — and you lift the bowl rather than using a spoon. Western soup is スープ, a different word for a different object." },
      ],
    },
    // Lesson 2: meals & taste
    {
      id: "ja-u9l2",
      unit: 9,
      lesson: 2,
      title: "Meals & taste",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name meals (ひるごはん ばんごはん) and describe taste: あまい (sweet), からい (spicy).",
      items: [
        { id: "ja-u9l2-hirugohan", type: "vocab", front: "ひるごはん", reading: "hirugohan", meaning: "lunch", example: { jp: "ひるごはんをたべます。", en: "I eat lunch." }, drill: { jp: "ひるごはんはカレーです。", en: "Lunch is curry." }, accept: ["midday meal", "the midday meal", "luncheon", "midday food"], hint: "hi-ru-go-HAN — five beats. ひる noon plus ごはん meal, exactly like あさごはん. ⚠️ A quicker everyday word is おひるごはん or just おひる — Japanese adds the honorific お to most meal words." },
        { id: "ja-u9l2-bangohan", type: "vocab", front: "ばんごはん", reading: "bangohan", meaning: "dinner", example: { jp: "ばんごはんはなんですか。", en: "What's for dinner?" }, drill: { jp: "ばんごはんをつくります。", en: "I cook dinner." }, accept: ["supper", "evening meal", "the evening meal", "tea (meal)"], hint: "ban-go-HAN — five beats, the ん held. ばん evening plus ごはん. ⚠️ ばん is the same ばん inside こんばんは, so the greeting and the meal share a word. The third of the three ごはん meals." },
        { id: "ja-u9l2-ryori", type: "vocab", front: "りょうり", reading: "ryōri", meaning: "cooking", example: { jp: "にほんりょうりがすきです。", en: "I like Japanese cuisine." }, drill: { jp: "ははのりょうりはおいしいです。", en: "My mother's cooking is delicious." }, accept: ["dish", "cuisine", "cooked food", "a dish"], hint: "RYOH-ri — three beats: ryo-o-ri, りょ a single sound lengthened, tapped r. ⚠️ It is BOTH the activity and the result: りょうりをします is to cook, にほんりょうり is Japanese cuisine, and one りょうり is a single dish." },
        { id: "ja-u9l2-aji", type: "vocab", front: "あじ", reading: "aji", meaning: "flavor", example: { jp: "このあじがすきです。", en: "I like this flavor." }, drill: { jp: "このあじはからいです。", en: "This flavour is spicy." }, accept: ["taste", "flavour", "the taste", "savour"], hint: "A-ji — two beats. ⚠️ Said aloud it is also あじ the horse mackerel, a very common fish — a menu can use both words in one line. あじがいい means it tastes good; あじみ is a taste-test." },
        { id: "ja-u9l2-amai", type: "vocab", front: "あまい", reading: "amai", meaning: "sweet", example: { jp: "これはあまいです。", en: "This is sweet." }, drill: { jp: "あまいおかしがすきです。", en: "I like sweet snacks." }, accept: ["sweet-tasting", "sugary", "sweetened", "mild"], hint: "a-MAI — three beats: a-ma-i. An い-adjective, so it goes straight in front of a noun: あまいおかし. ⚠️ It also means too soft on someone — おやがあまい is indulgent parents, not sugary ones." },
        { id: "ja-u9l2-karai", type: "vocab", front: "からい", reading: "karai", meaning: "spicy", example: { jp: "カレーはからいです。", en: "Curry is spicy." }, drill: { jp: "からいりょうりをたべます。", en: "I eat spicy food." }, accept: ["hot", "hot (spicy)", "pungent", "peppery"], hint: "ka-RAI — three beats, tapped r. ⚠️ It covers chilli-hot AND salty-sharp, so からい can describe soy sauce. Temperature-hot is あつい, a completely different word — and both are translated hot." },
        { id: "ja-u9l2-oishii", type: "vocab", front: "おいしい", reading: "oishii", meaning: "delicious", example: { jp: "このケーキはおいしいです。", en: "This cake is delicious." }, drill: { jp: "おいしいみそしるです。", en: "It's delicious miso soup." }, accept: ["tasty", "yummy", "good", "nice-tasting"], hint: "o-i-SHEE — four beats: o-i-shi-i, the しい held. ⚠️ Not おかし, sweets, from the previous lesson. The blunt casual version men use is うまい; おいしい is safe for anyone, anywhere." },
        { id: "ja-u9l2-nigai", type: "vocab", front: "にがい", reading: "nigai", meaning: "bitter", example: { jp: "このおちゃはにがいです。", en: "This tea is bitter." }, drill: { jp: "にがいくすりをのみます。", en: "I take bitter medicine." }, accept: ["bitter-tasting", "sharp", "acrid", "harsh-tasting"], hint: "ni-GAI — three beats, hard g: ni-ga-i. ⚠️ Also used of a face — にがいかお is a pained expression. Green tea and コーヒー are the two things a learner most often needs it for." },
      ],
    },
    // Lesson 3: everyday verbs (1) — the ～ます forms as vocabulary
    {
      id: "ja-u9l3",
      unit: 9,
      lesson: 3,
      title: "Everyday verbs 1",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the core daily verbs: おきます ねます たべます のみます みます します.",
      items: [
        { id: "ja-u9l3-okimasu", type: "vocab", front: "おきます", reading: "okimasu", meaning: "wake up", example: { jp: "あさおきます。", en: "I wake up in the morning." }, drill: { jp: "がくせいはろくじにおきます。", en: "The students get up at six." }, accept: ["get up", "to wake up", "wake", "rise"], hint: "o-ki-MA-su — four beats. 🚨 EVERY VERB IN THIS LESSON ENDS IN ます, which is the POLITE form — that is the shape this course teaches. The dictionary form is おきる. ⚠️ Takes に for the time: ろくじにおきます." },
        { id: "ja-u9l3-nemasu", type: "vocab", front: "ねます", reading: "nemasu", meaning: "sleep", example: { jp: "よるねます。", en: "I sleep at night." }, drill: { jp: "じゅうじにねます。", en: "I sleep at ten o'clock." }, accept: ["go to bed", "to sleep", "sleeps", "lie down"], hint: "ne-MA-su — three beats. Dictionary form ねる. ⚠️ It means both to go to bed and to be asleep, so ねます is often I'm going to bed. Takes に for the time, like おきます, and no を at all." },
        { id: "ja-u9l3-tabemasu", type: "vocab", front: "たべます", reading: "tabemasu", meaning: "eat", example: { jp: "ごはんをたべます。", en: "I eat a meal." }, drill: { jp: "やさいをたべます。", en: "I eat vegetables." }, accept: ["to eat", "eats", "have (food)", "consume"], hint: "ta-be-MA-su — four beats. Dictionary form たべる. ⚠️ Takes を for the thing eaten — やさいをたべます. Japanese uses it for solid food only: みそしる and くすり are DRUNK, with のみます." },
        { id: "ja-u9l3-nomimasu", type: "vocab", front: "のみます", reading: "nomimasu", meaning: "drink", example: { jp: "みずをのみます。", en: "I drink water." }, drill: { jp: "ばんにビールをのみます。", en: "I drink beer in the evening." }, accept: ["to drink", "drinks", "have (a drink)", "take (medicine)"], hint: "no-mi-MA-su — four beats. Dictionary form のむ. ⚠️ Its reach is wider than English drink: みそしる, くすり and even タバコ in older speech all go with のみます. Takes を." },
        { id: "ja-u9l3-mimasu", type: "vocab", front: "みます", reading: "mimasu", meaning: "see", example: { jp: "テレビをみます。", en: "I watch TV." }, drill: { jp: "あさにニュースをみます。", en: "I watch the news in the morning." }, accept: ["watch", "to see", "look", "look at"], hint: "mi-MA-su — three beats. Dictionary form みる. ⚠️ One verb for see, watch and look at — テレビをみます and そらをみます use the same word. For a doctor seeing a patient it is also みます." },
        { id: "ja-u9l3-shimasu", type: "vocab", front: "します", reading: "shimasu", meaning: "do", example: { jp: "テニスをします。", en: "I play tennis." }, drill: { jp: "ふたりでダンスをします。", en: "The two of us dance." }, accept: ["to do", "play (a sport)", "does", "make"], hint: "shi-MA-su — three beats. Dictionary form する. 🚨 THE MOST USEFUL VERB IN JAPANESE: attach it to a noun and you get a verb — べんきょうをします, さんぽをします, テニスをします. Any noun in this course can take it." },
        { id: "ja-u9l3-yomimasu", type: "vocab", front: "よみます", reading: "yomimasu", meaning: "read", example: { jp: "ほんをよみます。", en: "I read a book." }, drill: { jp: "よるにざっしをよみます。", en: "I read a magazine at night." }, accept: ["to read", "reads", "read aloud", "peruse"], hint: "yo-mi-MA-su — four beats. Dictionary form よむ. ⚠️ It also means to read ALOUD and to read a situation. ⚠️ Not よるます — よる is night, and these two just begin alike." },
        { id: "ja-u9l3-kakimasu", type: "vocab", front: "かきます", reading: "kakimasu", meaning: "write", example: { jp: "なまえをかきます。", en: "I write my name." }, drill: { jp: "しゅくだいをかきます。", en: "I write my homework." }, accept: ["to write", "writes", "draw", "put down"], hint: "ka-ki-MA-su — four beats. Dictionary form かく. ⚠️ The SAME verb means to draw — えをかきます is to draw a picture. ⚠️ Different word from かいます, to buy, in the next lesson: き for writing, い for buying." },
      ],
    },
    // Lesson 4: everyday verbs (2)
    {
      id: "ja-u9l4",
      unit: 9,
      lesson: 4,
      title: "Everyday verbs 2",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use more daily verbs: いきます きます かえります かいます はなします ききます.",
      items: [
        { id: "ja-u9l4-ikimasu", type: "vocab", front: "いきます", reading: "ikimasu", meaning: "go", example: { jp: "がっこうにいきます。", en: "I go to school." }, drill: { jp: "あしたえいがにいきます。", en: "I go to a film tomorrow." }, accept: ["to go", "goes", "head to", "travel to"], hint: "i-ki-MA-su — four beats. Dictionary form いく. ⚠️ The destination takes に or へ: がっこうにいきます. ⚠️ Japanese picks いきます or きます by where the LISTENER is, not the speaker — going toward them is きます." },
        { id: "ja-u9l4-kimasu", type: "vocab", front: "きます", reading: "kimasu", meaning: "come", example: { jp: "ともだちがきます。", en: "A friend is coming." }, drill: { jp: "せんせいがクラスにきます。", en: "The teacher comes to class." }, accept: ["to come", "comes", "arrive", "turn up"], hint: "ki-MA-su — three beats. Dictionary form くる, which is irregular — the stem changes vowel. ⚠️ Written in kana it is identical to きます from きる, to wear. The particle and the object tell you which one you are reading." },
        { id: "ja-u9l4-kaerimasu", type: "vocab", front: "かえります", reading: "kaerimasu", meaning: "return", example: { jp: "にほんにかえります。", en: "I return to Japan." }, drill: { jp: "ごごにかえります。", en: "I go back in the afternoon." }, accept: ["go home", "go back", "to return", "head back"], hint: "ka-e-ri-MA-su — five beats. Dictionary form かえる. ⚠️ It means returning to where you BELONG — home, your own country — so うちにかえります is go home, while うちにいきます would mean visiting someone else's." },
        { id: "ja-u9l4-kaimasu", type: "vocab", front: "かいます", reading: "kaimasu", meaning: "buy", example: { jp: "パンをかいます。", en: "I buy bread." }, drill: { jp: "デパートでくつをかいます。", en: "I buy shoes at the department store." }, accept: ["to buy", "buys", "purchase", "get"], hint: "ka-i-MA-su — four beats. Dictionary form かう. ⚠️ The place takes で, not に — デパートでかいます, because で marks where an action happens. ⚠️ One kana from かきます, to write." },
        { id: "ja-u9l4-hanashimasu", type: "vocab", front: "はなします", reading: "hanashimasu", meaning: "speak", example: { jp: "えいごをはなします。", en: "I speak English." }, drill: { jp: "ともだちとはなします。", en: "I talk with a friend." }, accept: ["talk", "to speak", "say", "tell"], hint: "ha-na-shi-MA-su — six beats. Dictionary form はなす. ⚠️ A language takes を — えいごをはなします — but a PERSON takes と, with: ともだちとはなします. The noun はなし is a story or a talk." },
        { id: "ja-u9l4-kikimasu", type: "vocab", front: "ききます", reading: "kikimasu", meaning: "listen", example: { jp: "おんがくをききます。", en: "I listen to music." }, drill: { jp: "イヤホンでおんがくをききます。", en: "I listen to music on earphones." }, accept: ["hear", "to listen", "ask", "listen to"], hint: "ki-ki-MA-su — four beats. Dictionary form きく. 🚨 IT ALSO MEANS TO ASK — せんせいにききます is I ask the teacher. Listening takes を, asking takes に for the person. The particle is the whole difference." },
        { id: "ja-u9l4-aimasu", type: "vocab", front: "あいます", reading: "aimasu", meaning: "meet", example: { jp: "ともだちにあいます。", en: "I meet a friend." }, drill: { jp: "えきでせんせいにあいます。", en: "I meet the teacher at the station." }, accept: ["to meet", "meets", "see (someone)", "run into"], hint: "a-i-MA-su — four beats. Dictionary form あう. ⚠️ THE PERSON TAKES に, not を — ともだちにあいます. Using を here is the single most common beginner slip, because English says meet someone." },
        { id: "ja-u9l4-wakarimasu", type: "vocab", front: "わかります", reading: "wakarimasu", meaning: "understand", example: { jp: "えいごがわかります。", en: "I understand English." }, drill: { jp: "えいがのえいごがわかります。", en: "I understand the English in the film." }, accept: ["to understand", "understands", "know", "see (grasp)"], hint: "wa-ka-ri-MA-su — five beats. Dictionary form わかる. ⚠️ THE THING UNDERSTOOD TAKES が, not を — えいごがわかります. It is not something you DO: the meaning arrives, which is why Japanese marks it as the subject." },
      ],
    },
    // Lesson 5: daily-life nouns
    {
      id: "ja-u9l5",
      unit: 9,
      lesson: 5,
      title: "Daily life",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about your routine: しごと まいにち じかん べんきょう かいもの おんがく.",
      items: [
        { id: "ja-u9l5-shigoto", type: "vocab", front: "しごと", reading: "shigoto", meaning: "work", example: { jp: "しごとがすきです。", en: "I like my work." }, drill: { jp: "ちちのしごとはなんですか。", en: "What is your father's job?" }, accept: ["job", "my job", "employment", "a job"], hint: "shi-GO-to — three beats, hard g. Both the job you hold and the work in front of you. ⚠️ Add します and it becomes the verb: しごとをします, to work. The workplace itself is a かいしゃ." },
        { id: "ja-u9l5-mainichi", type: "vocab", front: "まいにち", reading: "mainichi", meaning: "every day", example: { jp: "まいにちべんきょうします。", en: "I study every day." }, drill: { jp: "まいにちおちゃをのみます。", en: "I drink tea every day." }, accept: ["daily", "everyday", "each day", "day after day"], hint: "mai-NI-chi — four beats. まい is every, and it builds a family: まいあさ every morning, まいばん every evening, まいしゅう every week. ⚠️ It needs NO particle — まいにちいきます, never まいにちにいきます." },
        { id: "ja-u9l5-jikan", type: "vocab", front: "じかん", reading: "jikan", meaning: "time", example: { jp: "じかんがあります。", en: "I have time." }, drill: { jp: "べんきょうのじかんです。", en: "It's study time." }, accept: ["hours", "an hour", "free time", "a period"], hint: "ji-KAN — three beats, the ん held. ⚠️ It means time-as-a-quantity AND the unit hour: さんじかん is three hours, while さんじ is three o'clock. One kana — the か — separates a duration from a clock reading." },
        { id: "ja-u9l5-benkyo", type: "vocab", front: "べんきょう", reading: "benkyō", meaning: "study", example: { jp: "べんきょうをします。", en: "I study." }, drill: { jp: "えいごのべんきょうをします。", en: "I study English." }, accept: ["studying", "studies", "learning", "revision"], hint: "ben-KYOH — four beats: be-n-kyo-o, the ん held and きょ lengthened. A NOUN, so it needs します to become a verb: べんきょうをします. ⚠️ It is deliberate effort — ならいます is to be taught something." },
        { id: "ja-u9l5-kaimono", type: "vocab", front: "かいもの", reading: "kaimono", meaning: "shopping", example: { jp: "かいものをします。", en: "I do the shopping." }, drill: { jp: "どようびにかいものにいきます。", en: "I go shopping on Saturday." }, accept: ["errands", "the shopping", "a shopping trip", "buying things"], hint: "kai-MO-no — four beats. かい from かいます, to buy, plus もの, thing — the buy-things. Same build as のみもの and たべもの. ⚠️ Going shopping takes に: かいものにいきます, with no を anywhere." },
        { id: "ja-u9l5-ongaku", type: "vocab", front: "おんがく", reading: "ongaku", meaning: "music", example: { jp: "おんがくがすきです。", en: "I like music." }, drill: { jp: "しずかなおんがくがすきです。", en: "I like quiet music." }, accept: ["a song", "tunes", "the music", "musical sound"], hint: "on-GA-ku — four beats, the ん held, hard g. おん is sound and がく is the same がく as がっこう and がくせい — learning. Music is literally sound-study. ⚠️ A song is うた, and a band is バンド." },
        { id: "ja-u9l5-eiga", type: "vocab", front: "えいが", reading: "eiga", meaning: "movie", example: { jp: "えいがをみます。", en: "I watch a movie." }, drill: { jp: "えいがはたのしいです。", en: "Films are fun." }, accept: ["film", "movies", "a movie", "the cinema"], hint: "EI-ga — three beats, えい is two vowels e-i, hard g. ⚠️ えい is the same えい as えいご, English — and they are unrelated words that merely share a sound. A cinema is an えいがかん, a えいが-hall." },
        { id: "ja-u9l5-shukudai", type: "vocab", front: "しゅくだい", reading: "shukudai", meaning: "homework", example: { jp: "まいにち、しゅくだいをします。", en: "I do homework every day." }, drill: { jp: "しゅくだいがあります。", en: "I have homework." }, accept: ["assignment", "homework task", "schoolwork", "set work"], hint: "shu-ku-DAI — four beats, しゅ a single sound: shu-ku-da-i. ⚠️ Takes します to become the verb — しゅくだいをします. Japanese says あります for having it, so しゅくだいがあります is I have homework." },
      ],
    },
  ],
};
