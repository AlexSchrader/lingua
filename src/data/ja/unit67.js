// Unit 67 — しゅみ・スポーツ ("Hobbies & Sports") — A1 thematic
// Sports, music, and hobby words the learner can talk about doing. Examples reuse
// only known verbs (します・みます・ならいます・ひきます・ふきます・うたいます・つくります),
// adjectives (たのしい), and particles seen since Unit 1. No new grammar — each item
// is vocabulary. lang/unit/lesson are stamped in index.js.
export const UNIT67 = {
  id: "ja-u67",
  lang: "ja",
  title: "しゅみ・スポーツ",
  order: 67,
  stage: "a1",
  lessons: [
    // Lesson 1: ball sports
    {
      id: "ja-u67l1",
      unit: 67,
      lesson: 1,
      title: "Ball sports",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name ball sports: サッカー やきゅう バスケット バレーボール たっきゅう ラグビー; say which you play or watch.",
      items: [
        { id: "ja-u67l1-sakka", type: "vocab", front: "サッカー", reading: "sakkā", meaning: "soccer", example: { jp: "サッカーをします。", en: "I play soccer." }, drill: { jp: "サッカーをテレビでみます。", en: "I watch football on television." }, accept: ["football", "association football", "the game of soccer"], hint: "sak-KĀ — the small ッ doubles the k and the ー holds the end: sak-kaa, three beats. From English soccer, not football. ⚠️ フットボール exists but means American football in Japan." },
        { id: "ja-u67l1-yakyu", type: "vocab", front: "やきゅう", reading: "yakyū", meaning: "baseball", example: { jp: "やきゅうをみます。", en: "I watch baseball." }, drill: { jp: "やきゅうはにんきがあります。", en: "Baseball is popular." }, accept: ["baseball game", "the sport of baseball", "playing baseball"], hint: "ya-KYŪ — きゅう is the yōon kyu held long: two beats. 野 (field) + 球 (ball): the field-ball game. ⚠️ Native-built rather than borrowed — a sign of how long baseball has been in Japan." },
        { id: "ja-u67l1-basuketto", type: "vocab", front: "バスケット", reading: "basuketto", meaning: "basketball", example: { jp: "バスケットがすきです。", en: "I like basketball." }, drill: { jp: "バスケットをともだちとします。", en: "I play basketball with a friend." }, accept: ["basket", "basketball game", "the sport of basketball"], hint: "ba-su-KET-to — the small ッ doubles the t: four beats. Clipped from English basketball. ⚠️ Japanese kept the BASKET half and dropped the ball." },
        { id: "ja-u67l1-bareboru", type: "vocab", front: "バレーボール", reading: "barēbōru", meaning: "volleyball", example: { jp: "バレーボールをします。", en: "I play volleyball." }, drill: { jp: "バレーボールはむずかしいです。", en: "Volleyball is difficult." }, accept: ["volley ball", "the sport of volleyball", "playing volleyball"], hint: "ba-RĒ-BŌ-ru — both ー marks hold a beat: ba-ree-boo-ru, five beats. ⚠️ Watch バレー, volley, against バレエ, ballet — one kana apart, and both borrowed." },
        { id: "ja-u67l1-takkyu", type: "vocab", front: "たっきゅう", reading: "takkyū", meaning: "table tennis", example: { jp: "たっきゅうはたのしいです。", en: "Table tennis is fun." }, drill: { jp: "たっきゅうをへやでします。", en: "I play table tennis indoors." }, accept: ["ping-pong", "ping pong", "table-tennis", "the sport of table tennis"], hint: "TAK-kyū — the small っ doubles the k and きゅう is held long: two beats. 卓 (table) plus the same 球 as やきゅう. ⚠️ Learn 球, ball, once and both sports read themselves." },
        { id: "ja-u67l1-ragubi", type: "vocab", front: "ラグビー", reading: "ragubī", meaning: "rugby", example: { jp: "ラグビーをみます。", en: "I watch rugby." }, drill: { jp: "ラグビーはあぶないです。", en: "Rugby is dangerous." }, accept: ["rugby football", "the sport of rugby", "playing rugby"], hint: "ra-gu-BĪ — the ー holds the last beat: ra-gu-bii, four beats, tapped r. From English rugby. ⚠️ Four beats for a two-syllable English word — Japanese gives every consonant its own vowel." },
      ],
    },
    // Lesson 2: active sports
    {
      id: "ja-u67l2",
      unit: 67,
      lesson: 2,
      title: "Active sports",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about active sports: すいえい マラソン スキー スケート じゅうどう からて.",
      items: [
        { id: "ja-u67l2-suiei", type: "vocab", front: "すいえい", reading: "suiei", meaning: "swimming", example: { jp: "すいえいがすきです。", en: "I like swimming." }, drill: { jp: "すいえいをならいます。", en: "I am learning to swim." }, accept: ["swim", "the sport of swimming", "competitive swimming"], hint: "su-i-EI — three beats, each vowel its own; えい is a literal ei. 水 (water) + 泳 (swim). ⚠️ That 水 is みず, water, and すい in すいようび." },
        { id: "ja-u67l2-marason", type: "vocab", front: "マラソン", reading: "marason", meaning: "marathon", example: { jp: "マラソンをします。", en: "I run a marathon." }, drill: { jp: "マラソンはながいです。", en: "A marathon is long." }, accept: ["a marathon", "marathon race", "long-distance race"], hint: "ma-ra-SON — three beats, tapped r, the ん held. From English marathon. ⚠️ The th lands on a plain s: Japanese has no th, so every borrowed one becomes s or z." },
        { id: "ja-u67l2-suki", type: "vocab", front: "スキー", reading: "sukī", meaning: "skiing", example: { jp: "ふゆにスキーをします。", en: "I ski in winter." }, drill: { jp: "スキーはたのしいです。", en: "Skiing is fun." }, accept: ["ski", "skis", "the sport of skiing"], hint: "su-KĪ — the ー holds the last beat: su-kii, three beats. From English ski. ⚠️ Japanese cannot open with s plus a consonant, so it adds that す — the same repair as in スプーン." },
        { id: "ja-u67l2-suketo", type: "vocab", front: "スケート", reading: "sukēto", meaning: "skating", example: { jp: "スケートはたのしいです。", en: "Skating is fun." }, drill: { jp: "スケートをふゆにします。", en: "I go skating in winter." }, accept: ["ice skating", "skate", "skates", "the sport of skating"], hint: "su-KĒ-to — the ー holds the middle beat: su-kee-to, four beats. From English skate. ⚠️ In Japan it means ICE skating by default; the wheeled kind is ローラースケート." },
        { id: "ja-u67l2-judo", type: "vocab", front: "じゅうどう", reading: "jūdō", meaning: "judo", example: { jp: "じゅうどうをします。", en: "I do judo." }, drill: { jp: "じゅうどうをまいにちれんしゅうします。", en: "I practise judo every day." }, accept: ["the sport of judo", "judo wrestling", "practising judo"], hint: "JŪ-DŌ — two LONG beats, both held: juu-doh. 柔 (gentle) + 道 (way): the gentle way. ⚠️ English borrowed it back as judo and lost both long vowels on the way." },
        { id: "ja-u67l2-karate", type: "vocab", front: "からて", reading: "karate", meaning: "karate", example: { jp: "からてをならいます。", en: "I learn karate." }, drill: { jp: "からてをジムでします。", en: "I do karate at the gym." }, accept: ["the art of karate", "karate martial art", "practising karate"], hint: "ka-ra-TE — three beats, tapped r. 空 (empty) + 手 (hand): the empty hand, meaning unarmed. ⚠️ That 手 is て, a hand, from the body unit." },
      ],
    },
    // Lesson 3: music
    {
      id: "ja-u67l3",
      unit: 67,
      lesson: 3,
      title: "Music",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about music: うた カラオケ バイオリン ドラム ふえ バンド.",
      items: [
        { id: "ja-u67l3-uta", type: "vocab", front: "うた", reading: "uta", meaning: "song", example: { jp: "うたをうたいます。", en: "I sing a song." }, drill: { jp: "うたをききます。", en: "I listen to a song." }, accept: ["singing", "a song", "songs", "tune"], hint: "U-ta — two beats. ⚠️ Its verb うたいます comes from the same root, which is why うたをうたいます repeats the sound — and that repetition is correct Japanese." },
        { id: "ja-u67l3-karaoke", type: "vocab", front: "カラオケ", reading: "karaoke", meaning: "karaoke", example: { jp: "カラオケがすきです。", en: "I like karaoke." }, drill: { jp: "カラオケでうたをうたいます。", en: "I sing songs at karaoke." }, accept: ["karaoke singing", "a karaoke", "singing karaoke"], hint: "ka-ra-O-ke — four beats, tapped r. から, empty, plus オケ clipped from オーケストラ: empty orchestra. ⚠️ Half native, half borrowed — and English borrowed the whole thing back." },
        { id: "ja-u67l3-baiorin", type: "vocab", front: "バイオリン", reading: "baiorin", meaning: "violin", example: { jp: "バイオリンをひきます。", en: "I play the violin." }, drill: { jp: "バイオリンはたかいです。", en: "The violin is expensive." }, accept: ["a violin", "the violin", "fiddle"], hint: "ba-i-o-RIN — four beats, the ん held, tapped r. From English violin, with the v landing on b. ⚠️ Japanese has no v, so every borrowed v becomes a b." },
        { id: "ja-u67l3-doramu", type: "vocab", front: "ドラム", reading: "doramu", meaning: "drums", example: { jp: "ドラムがすきです。", en: "I like the drums." }, drill: { jp: "ドラムのおとはおおきいです。", en: "The sound of the drums is loud." }, accept: ["drum", "a drum", "drum kit", "the drums"], hint: "DO-ra-mu — three beats, tapped r. From English drum. ⚠️ The m gets its own ム beat, because Japanese cannot end a word on a bare m." },
        { id: "ja-u67l3-fue", type: "vocab", front: "ふえ", reading: "fue", meaning: "flute", example: { jp: "ふえをふきます。", en: "I play the flute." }, drill: { jp: "ふえはちいさいです。", en: "The flute is small." }, accept: ["whistle", "a flute", "pipe", "recorder"], hint: "FU-e — two beats, ふ a soft fu and the え its own beat. ⚠️ Any wind instrument blown from the end — flute, recorder, whistle. Its verb is ふきます, to blow." },
        { id: "ja-u67l3-bando", type: "vocab", front: "バンド", reading: "bando", meaning: "band", example: { jp: "バンドがすきです。", en: "I like the band." }, drill: { jp: "バンドにはいります。", en: "I join a band." }, accept: ["music band", "a band", "musical group", "the band"], hint: "BAN-do — two beats, the ん held. From English band, and it covers the MUSIC group as well as the strap. ⚠️ A waist belt, though, is ベルト." },
      ],
    },
    // Lesson 4: hobbies
    {
      id: "ja-u67l4",
      unit: 67,
      lesson: 4,
      title: "Hobbies",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name traditional and outdoor hobbies: どくしょ しょどう おりがみ いけばな ハイキング ダイビング.",
      items: [
        { id: "ja-u67l4-dokusho", type: "vocab", front: "どくしょ", reading: "dokusho", meaning: "reading", example: { jp: "どくしょがすきです。", en: "I like reading." }, drill: { jp: "どくしょをまいばんします。", en: "I read every night." }, accept: ["reading books", "book reading", "reading as a hobby"], hint: "DO-ku-sho — three beats, しょ is the yōon sho. 読 (read) + 書 (book). ⚠️ It names reading as a PASTIME; the plain verb is よみます." },
        { id: "ja-u67l4-shodo", type: "vocab", front: "しょどう", reading: "shodō", meaning: "calligraphy", example: { jp: "しょどうをならいます。", en: "I learn calligraphy." }, drill: { jp: "しょどうでなまえをかきます。", en: "I write my name in calligraphy." }, accept: ["Japanese calligraphy", "brush calligraphy", "brush writing"], hint: "SHO-DŌ — しょ then どう held long: two beats. 書 (write) + 道 (way): the way of writing. ⚠️ The same 道 as in じゅうどう — Japanese calls a disciplined art a 道." },
        { id: "ja-u67l4-origami", type: "vocab", front: "おりがみ", reading: "origami", meaning: "origami", example: { jp: "おりがみをつくります。", en: "I make origami." }, drill: { jp: "おりがみはかみでつくります。", en: "Origami is made from paper." }, accept: ["paper folding", "the art of paper folding", "folded paper"], hint: "o-ri-GA-mi — four beats, tapped r, hard g. おり from おる, to fold, plus かみ, paper, voiced to がみ. ⚠️ That voicing when one word joins another runs right through Japanese." },
        { id: "ja-u67l4-ikebana", type: "vocab", front: "いけばな", reading: "ikebana", meaning: "flower arranging", example: { jp: "いけばなをならいます。", en: "I learn flower arranging." }, drill: { jp: "いけばなのはなはきれいです。", en: "The flowers in the arrangement are beautiful." }, accept: ["flower arrangement", "ikebana", "Japanese flower arranging", "the art of flower arranging"], hint: "i-ke-BA-na — four beats. いけ from いける, to arrange or keep alive, plus はな, a flower, voiced to ばな. ⚠️ The same voicing rule as おりがみ above." },
        { id: "ja-u67l4-haikingu", type: "vocab", front: "ハイキング", reading: "haikingu", meaning: "hiking", example: { jp: "やまでハイキングをします。", en: "I go hiking in the mountains." }, drill: { jp: "ハイキングのくつをかいます。", en: "I buy hiking boots." }, accept: ["hike", "a hike", "going hiking", "rambling"], hint: "HAI-kin-gu — four beats, ハイ a diphthong, the ン held. From English hiking. ⚠️ An -ing ending always becomes イング in Japanese, which adds two whole beats." },
        { id: "ja-u67l4-daibingu", type: "vocab", front: "ダイビング", reading: "daibingu", meaning: "diving", example: { jp: "うみでダイビングをします。", en: "I go diving in the sea." }, drill: { jp: "ダイビングをならいます。", en: "I am learning to dive." }, accept: ["dive", "scuba diving", "a dive", "going diving"], hint: "DAI-bin-gu — four beats, ダイ a diphthong, the ン held. From English diving. ⚠️ Same イング ending as ハイキング above: spot it and you can read any borrowed -ing word." },
      ],
    },
  ],
};
