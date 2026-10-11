// Unit 4 — カタカナ ("Katakana"), part 1
// Katakana is the second kana script — the same sounds as hiragana, a second set
// of shapes, used for loanwords and foreign names. Each kana already has a known
// sound from Units 1-3, so every hint anchors the new glyph to its hiragana twin
// (カ = "ka", the twin of か) plus a shape cue. The payoff is immediate: the vocab
// is recognizable loanwords (コーヒー, テレビ, タクシー) the learner can already
// half-read. 5 rows: vowels + k / s / t / n. The ー long-vowel mark is introduced
// in Lesson 1. lang/unit/lesson stamped in index.js.
export const UNIT4 = {
  id: "ja-u4",
  lang: "ja",
  title: "カタカナ",
  order: 4,
  stage: "pre-a1",
  lessons: [
    // Lesson 1: vowels ア イ ウ エ オ + the ー long-vowel mark
    {
      id: "ja-u4l1",
      unit: 4,
      lesson: 1,
      title: "Katakana vowels",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the five katakana vowels ア イ ウ エ オ; meet the ー long-vowel mark (コーヒー = kōhī) and your first loanwords.",
      items: [
        { id: "ja-u4l1-a", type: "kana", front: "ア", reading: "a", meaning: null, example: null, hint: "ア is the katakana twin of あ — same 'a' sound. A short stroke with a long leg sweeping down-left." },
        { id: "ja-u4l1-i", type: "kana", front: "イ", reading: "i", meaning: null, example: null, hint: "イ = 'i', twin of い. Two strokes: a long diagonal and a short tick — like い pulled upright." },
        { id: "ja-u4l1-u", type: "kana", front: "ウ", reading: "u", meaning: null, example: null, hint: "ウ = 'u', twin of う. A little roof with a hook underneath — same U sound." },
        { id: "ja-u4l1-e", type: "kana", front: "エ", reading: "e", meaning: null, example: null, hint: "エ = 'e', twin of え. Two horizontal lines joined by a stem, like a capital I — says E." },
        { id: "ja-u4l1-o", type: "kana", front: "オ", reading: "o", meaning: null, example: null, hint: "オ = 'o', twin of お. A cross with a leg sweeping down-left — same O sound. In katakana, a bar ー after a vowel just holds it longer: コー = 'kō'." },
        { id: "ja-u4l1-amerika", type: "vocab", front: "アメリカ", reading: "amerika", meaning: "America", example: { jp: "アメリカからきました。", en: "I came from America." }, drill: { jp: "アメリカのともだちです。", en: "It's my American friend." }, accept: ["the US", "USA", "the United States", "the States"], hint: "a-ME-ri-ka — four beats, tapped r. Katakana marks it as a borrowed word. Shortened to べい in compounds (べいこく, the US), which is why the yen-dollar rate is a にちべい figure. アメリカじん is an American person." },
        { id: "ja-u4l1-itaria", type: "vocab", front: "イタリア", reading: "itaria", meaning: "Italy", example: { jp: "イタリアにいきます。", en: "I go to Italy." }, drill: { jp: "イタリアのくるまです。", en: "It's an Italian car." }, accept: ["Italian", "Italia", "the Italian republic"], hint: "i-TA-ri-a — four beats, each vowel sounded: i-ta-ri-a, never ee-tal-ya. Japanese rebuilds every borrowed word into open syllables like this, which is the single biggest key to reading katakana aloud." },
        { id: "ja-u4l1-uuru", type: "vocab", front: "ウール", reading: "ūru", meaning: "wool", example: { jp: "ウールのぼうしです。", en: "It's a wool hat." }, drill: { jp: "ウールのセーターです。", en: "It's a wool sweater." }, accept: ["woollen", "woolen", "sheep wool"], hint: "OO-ru — the ー is a length mark, so the first vowel is held: u-u-ru, three beats. That long mark is katakana's way of writing the vowel English spells with two letters. The tapped r is doing duty for an English l." },
        { id: "ja-u4l1-eakon", type: "vocab", front: "エアコン", reading: "eakon", meaning: "air conditioner", example: { jp: "エアコンをつけます。", en: "I turn on the air conditioner." }, drill: { jp: "エアコンはあたらしいです。", en: "The air conditioner is new." }, accept: ["AC", "aircon", "air con", "air conditioning"], hint: "e-a-KON — four beats: e-a-ko-n. A Japanese-made shortening of air conditioner, so no English speaker will recognise it by ear. Japanese does this constantly — パソコン is a personal computer, リモコン a remote control." },
        { id: "ja-u4l1-orenji", type: "vocab", front: "オレンジ", reading: "orenji", meaning: "orange", example: { jp: "オレンジをたべます。", en: "I eat an orange." }, drill: { jp: "オレンジをかいます。", en: "I buy an orange." }, accept: ["oranges", "the colour orange", "orange fruit"], hint: "o-REN-ji — four beats, the ン held. Like English it is both the fruit and the colour. ⚠️ The everyday Japanese word for the fruit you peel is みかん, a mandarin; オレンジ is the imported round one and the juice." },
        { id: "ja-u4l1-aisu", type: "vocab", front: "アイス", reading: "aisu", meaning: "ice cream", example: { jp: "アイスがすきです。", en: "I like ice cream." }, drill: { jp: "アイスをたべます。", en: "I eat ice cream." }, accept: ["ice", "ice-cream", "icecream", "gelato"], hint: "A-i-su — three beats, both vowels of アイ sounded separately. Short for アイスクリーム. ⚠️ Order アイスコーヒー and you get iced coffee, not a float — アイス means iced when it leads a compound." },
      ],
    },
    // Lesson 2: k-row カ キ ク ケ コ
    {
      id: "ja-u4l2",
      unit: 4,
      lesson: 2,
      title: "Katakana k-row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana k-row カ キ ク ケ コ; recognize everyday loanwords like coffee and cake.",
      items: [
        { id: "ja-u4l2-ka", type: "kana", front: "カ", reading: "ka", meaning: null, example: null, hint: "カ = 'ka', twin of か — and it's basically か without its last stroke. Same KA." },
        { id: "ja-u4l2-ki", type: "kana", front: "キ", reading: "ki", meaning: null, example: null, hint: "キ = 'ki', twin of き. Two crossbars and a stem — same KI." },
        { id: "ja-u4l2-ku", type: "kana", front: "ク", reading: "ku", meaning: null, example: null, hint: "ク = 'ku', twin of く. A single bent stroke like a beak — same KU." },
        { id: "ja-u4l2-ke", type: "kana", front: "ケ", reading: "ke", meaning: null, example: null, hint: "ケ = 'ke', twin of け. Same KE sound." },
        { id: "ja-u4l2-ko", type: "kana", front: "コ", reading: "ko", meaning: null, example: null, hint: "コ = 'ko', twin of こ. Two strokes making a bracket shape — same KO." },
        { id: "ja-u4l2-kohi", type: "vocab", front: "コーヒー", reading: "kōhī", meaning: "coffee", example: { jp: "コーヒーをのみます。", en: "I drink coffee." }, drill: { jp: "コーヒーがすきです。", en: "I like coffee." }, accept: ["a coffee", "black coffee", "cup of coffee"], hint: "KOH-hee — two length marks, so four beats: ko-o-hi-i. The ヒ is a breathy h, not an f, because Japanese took the word from Dutch koffie. Hot is ホット and iced is アイス, both said before it." },
        { id: "ja-u4l2-keki", type: "vocab", front: "ケーキ", reading: "kēki", meaning: "cake", example: { jp: "ケーキをたべます。", en: "I eat cake." }, drill: { jp: "ケーキをともだちとたべます。", en: "I eat cake with a friend." }, accept: ["cakes", "a cake", "sponge cake"], hint: "KEH-ki — the ー holds the first vowel: ke-e-ki, three beats. ⚠️ In Japan ケーキ means a single slice or a small whole one; a cut piece is ワンピース, one piece, which is not the same as the English clothing word." },
        { id: "ja-u4l2-kamera", type: "vocab", front: "カメラ", reading: "kamera", meaning: "camera", example: { jp: "あたらしいカメラです。", en: "It's a new camera." }, drill: { jp: "カメラはかばんにあります。", en: "The camera is in my bag." }, accept: ["cameras", "a camera", "photo camera"], hint: "KA-me-ra — three flat beats, tapped r, no length mark anywhere. Taking a photo is しゃしんをとります, so カメラ is the object only. A video one is a ビデオカメラ." },
        { id: "ja-u4l2-kurasu", type: "vocab", front: "クラス", reading: "kurasu", meaning: "class", example: { jp: "クラスにいきます。", en: "I go to class." }, drill: { jp: "クラスにがくせいがいます。", en: "There are students in the class." }, accept: ["classes", "a class", "classroom group"], hint: "ku-RA-su — three beats; Japanese cannot end a word in s, so it adds a u. That rule explains most katakana endings you will meet. It is the group of students, not the room — that is きょうしつ." },
        { id: "ja-u4l2-ketai", type: "vocab", front: "ケータイ", reading: "kētai", meaning: "cell phone", example: { jp: "ケータイをみます。", en: "I look at my phone." }, drill: { jp: "ケータイででんわをします。", en: "I make a call on my mobile." }, accept: ["phone", "mobile phone", "mobile", "cellphone"], hint: "KEH-tai — four beats, the ー holding the first vowel: ke-e-ta-i. Short for けいたいでんわ, a carry-around でんわ. Written in katakana precisely because it is a clipped slang form, though the root is Japanese." },
        { id: "ja-u4l2-kare", type: "vocab", front: "カレー", reading: "karē", meaning: "curry", example: { jp: "カレーをたべます。", en: "I eat curry." }, drill: { jp: "カレーとごはんをたべます。", en: "I eat curry with rice." }, accept: ["curries", "curry rice", "japanese curry"], hint: "ka-REH — three beats, the ー holding the second vowel: ka-re-e. ⚠️ It is not Indian curry: Japanese カレー is thick, mild and brown, eaten over ごはん as カレーライス. Arrived via Britain, which is why it is a stew." },
      ],
    },
    // Lesson 3: s-row サ シ ス セ ソ — flag シ (sweeps up) vs ツ (Lesson 4)
    {
      id: "ja-u4l3",
      unit: 4,
      lesson: 3,
      title: "Katakana s-row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana s-row サ シ ス セ ソ; tell シ (sweeps up) apart from ツ.",
      items: [
        { id: "ja-u4l3-sa",  type: "kana", front: "サ", reading: "sa",  meaning: null, example: null, hint: "サ = 'sa', twin of さ. A crossbar with a hook — same SA." },
        { id: "ja-u4l3-shi", type: "kana", front: "シ", reading: "shi", meaning: null, example: null, hint: "シ = 'shi', twin of し. Two short dashes plus a stroke that sweeps UP from the bottom-left. (Its look-alike ツ drops down from the top — coming in Lesson 4.)" },
        { id: "ja-u4l3-su",  type: "kana", front: "ス", reading: "su",  meaning: null, example: null, hint: "ス = 'su', twin of す. Same SU sound." },
        { id: "ja-u4l3-se",  type: "kana", front: "セ", reading: "se",  meaning: null, example: null, hint: "セ = 'se', twin of せ. Same SE sound." },
        { id: "ja-u4l3-so",  type: "kana", front: "ソ", reading: "so",  meaning: null, example: null, hint: "ソ = 'so', twin of そ. A short dash and a downward stroke — same SO." },
        { id: "ja-u4l3-supu", type: "vocab", front: "スープ", reading: "sūpu", meaning: "soup", example: { jp: "スープをのみます。", en: "I drink soup." }, drill: { jp: "スープがおいしいです。", en: "The soup is delicious." }, accept: ["soups", "a soup", "broth"], hint: "SOO-pu — the ー lengthens the first vowel: su-u-pu, three beats. ⚠️ Used for Western soups only. みそしる, miso soup, is しる, and Japanese drinks it from the bowl rather than spooning it." },
        { id: "ja-u4l3-seta", type: "vocab", front: "セーター", reading: "sētā", meaning: "sweater", example: { jp: "セーターをきます。", en: "I wear a sweater." }, drill: { jp: "セーターはウールです。", en: "The sweater is wool." }, accept: ["jumper", "pullover", "sweaters", "knitwear"], hint: "SEH-tah — two length marks, four beats: se-e-ta-a. The final ー is standing in for the English -er, which Japanese hears as a long a. Same trick in エレベーター and コンピューター." },
        { id: "ja-u4l3-sarada", type: "vocab", front: "サラダ", reading: "sarada", meaning: "salad", example: { jp: "サラダをたべます。", en: "I eat a salad." }, drill: { jp: "サラダにトマトがあります。", en: "There are tomatoes in the salad." }, accept: ["salads", "a salad", "green salad"], hint: "sa-RA-da — three flat beats, tapped r, no length marks. ⚠️ ポテトサラダ, potato salad, is a mayonnaise dish, and a Japanese サラダ usually comes with a sesame or onion dressing, not vinaigrette." },
        { id: "ja-u4l3-sofa", type: "vocab", front: "ソファ", reading: "sofa", meaning: "sofa", example: { jp: "あたらしいソファです。", en: "It's a new sofa." }, drill: { jp: "ソファはあたらしいです。", en: "The sofa is new." }, accept: ["couch", "sofas", "settee", "a couch"], hint: "SO-fa — two beats. The ファ is a small ア after フ, a katakana-only combination invented to write foreign f sounds: ファ フィ フェ フォ. You will not see it in hiragana." },
        { id: "ja-u4l3-supotsu", type: "vocab", front: "スポーツ", reading: "supōtsu", meaning: "sports", example: { jp: "スポーツがすきです。", en: "I like sports." }, drill: { jp: "スポーツはたのしいです。", en: "Sports are fun." }, accept: ["sport", "athletics", "a sport"], hint: "su-POH-tsu — four beats, the ー lengthening the po: su-po-o-tsu. Organised sport specifically; plain exercise is うんどう, which you learned in the kana units. A gym is a スポーツジム." },
        { id: "ja-u4l3-shito", type: "vocab", front: "シート", reading: "shīto", meaning: "seat", example: { jp: "シートはどこですか。", en: "Where is the seat?" }, drill: { jp: "シートにすわります。", en: "I sit in the seat." }, accept: ["seats", "the seat", "a seat"], hint: "SHEE-to — the ー lengthens the first vowel: shi-i-to, three beats. ⚠️ Drop the length mark and シト is nothing, but シート also means a sheet of plastic — one borrowed spelling covering two English words." },
      ],
    },
    // Lesson 4: t-row タ チ ツ テ ト — flag ツ (drops down) vs シ (Lesson 3)
    {
      id: "ja-u4l4",
      unit: 4,
      lesson: 4,
      title: "Katakana t-row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana t-row タ チ ツ テ ト; tell ツ (drops down) apart from シ.",
      items: [
        { id: "ja-u4l4-ta",  type: "kana", front: "タ", reading: "ta",  meaning: null, example: null, hint: "タ = 'ta', twin of た. Same TA sound." },
        { id: "ja-u4l4-chi", type: "kana", front: "チ", reading: "chi", meaning: null, example: null, hint: "チ = 'chi', twin of ち. Same CHI sound." },
        { id: "ja-u4l4-tsu", type: "kana", front: "ツ", reading: "tsu", meaning: null, example: null, hint: "ツ = 'tsu', twin of つ. Two short dashes plus a stroke that drops DOWN from the top-right. (Compare シ, whose stroke sweeps up from the bottom — Lesson 3.)" },
        { id: "ja-u4l4-te",  type: "kana", front: "テ", reading: "te",  meaning: null, example: null, hint: "テ = 'te', twin of て. Same TE sound." },
        { id: "ja-u4l4-to",  type: "kana", front: "ト", reading: "to",  meaning: null, example: null, hint: "ト = 'to', twin of と. A vertical line with one short tick — same TO." },
        { id: "ja-u4l4-terebi", type: "vocab", front: "テレビ", reading: "terebi", meaning: "TV", example: { jp: "テレビをみます。", en: "I watch TV." }, drill: { jp: "テレビでニュースをみます。", en: "I watch the news on TV." }, accept: ["television", "telly", "the TV", "tv set"], hint: "TE-re-bi — three flat beats, tapped r. A Japanese clipping of television, keeping the first three syllables. The び is ひ voiced, which is how Japanese hears the English v — ビデオ and バイオリン do the same." },
        { id: "ja-u4l4-tomato", type: "vocab", front: "トマト", reading: "tomato", meaning: "tomato", example: { jp: "トマトをたべます。", en: "I eat a tomato." }, drill: { jp: "トマトはあかいです。", en: "The tomato is red." }, accept: ["tomatoes", "a tomato", "tomato fruit"], hint: "TO-ma-to — three flat beats, no length marks and no stress; say it evenly and it sounds right. ⚠️ Japanese shops count it as a やさい, a vegetable, not a くだもの." },
        { id: "ja-u4l4-takushi", type: "vocab", front: "タクシー", reading: "takushī", meaning: "taxi", example: { jp: "タクシーでいきます。", en: "I go by taxi." }, drill: { jp: "タクシーはえきにあります。", en: "The taxis are at the station." }, accept: ["cab", "taxis", "cabs", "taxicab"], hint: "ta-ku-SHEE — four beats, the ー holding the last vowel: ta-ku-shi-i. Japanese taxis open their doors for you, and the ones you can hail show a red 空車 light. A taxi rank is a タクシーのりば." },
        { id: "ja-u4l4-tesuto", type: "vocab", front: "テスト", reading: "tesuto", meaning: "test", example: { jp: "テストがあります。", en: "There is a test." }, drill: { jp: "テストはえいごです。", en: "The test is English." }, accept: ["exam", "quiz", "tests", "an exam"], hint: "TE-su-to — three beats; the u in su is there only because Japanese cannot end a syllable in s. A big formal exam is a しけん, a native word — テスト is the classroom kind." },
        { id: "ja-u4l4-chiketto", type: "vocab", front: "チケット", reading: "chiketto", meaning: "ticket (for an event)", example: { jp: "チケットをかいます。", en: "I buy a ticket." }, drill: { jp: "チケットはともだちのです。", en: "The ticket is my friend's." }, accept: ["tickets", "event ticket", "a ticket"], hint: "chi-KET-to — the small ッ holds a beat before the t: chi-ke-t-to, four beats. ⚠️ This is the concert or match kind. A train ticket is a きっぷ — which has the same held beat, in hiragana." },
        { id: "ja-u4l4-tsua", type: "vocab", front: "ツアー", reading: "tsuā", meaning: "tour", example: { jp: "ツアーにいきます。", en: "I go on a tour." }, drill: { jp: "ツアーはイタリアです。", en: "The tour is Italy." }, accept: ["tours", "a tour", "guided tour", "package tour"], hint: "TSU-ah — three beats: tsu-a-a, with the ー holding the ア. The ツ is tsu, so the English t-sound shifts; that is the nearest Japanese gets to tour. A guided one is a ガイドツアー." },
      ],
    },
    // Lesson 5: n-row ナ ニ ヌ ネ ノ — ヌ is rare in loanwords, taught for completeness
    {
      id: "ja-u4l5",
      unit: 4,
      lesson: 5,
      title: "Katakana n-row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana n-row ナ ニ ヌ ネ ノ; round out the basic katakana with more loanwords.",
      items: [
        { id: "ja-u4l5-na", type: "kana", front: "ナ", reading: "na", meaning: null, example: null, hint: "ナ = 'na', twin of な. A cross with a sweeping leg — same NA." },
        { id: "ja-u4l5-ni", type: "kana", front: "ニ", reading: "ni", meaning: null, example: null, hint: "ニ = 'ni', twin of に. Just two horizontal lines — same NI (it even echoes 二, the kanji for 'two', read ni)." },
        { id: "ja-u4l5-nu", type: "kana", front: "ヌ", reading: "nu", meaning: null, example: null, hint: "ヌ = 'nu', twin of ぬ. Same NU — rare in loanwords, but worth recognizing." },
        { id: "ja-u4l5-ne", type: "kana", front: "ネ", reading: "ne", meaning: null, example: null, hint: "ネ = 'ne', twin of ね. Same NE sound." },
        { id: "ja-u4l5-no", type: "kana", front: "ノ", reading: "no", meaning: null, example: null, hint: "ノ = 'no', twin of の. A single diagonal sweep — the simplest kana, same NO." },
        { id: "ja-u4l5-noto", type: "vocab", front: "ノート", reading: "nōto", meaning: "notebook", example: { jp: "ノートにかきます。", en: "I write in my notebook." }, drill: { jp: "ノートとえんぴつです。", en: "A notebook and a pencil." }, accept: ["notebooks", "a notebook", "exercise book"], hint: "NOH-to — the ー lengthens the first vowel: no-o-to, three beats. ⚠️ It is the paper book, never a jotted note — that is メモ. A laptop is a ノートパソコン, a notebook computer." },
        { id: "ja-u4l5-tenisu", type: "vocab", front: "テニス", reading: "tenisu", meaning: "tennis", example: { jp: "テニスをします。", en: "I play tennis." }, drill: { jp: "テニスがすきです。", en: "I like tennis." }, accept: ["lawn tennis", "playing tennis", "a game of tennis"], hint: "TE-ni-su — three flat beats, the final u added because Japanese cannot end in s. Played with します: テニスをします. Table tennis is たっきゅう, a native word, not テーブルテニス." },
        { id: "ja-u4l5-nekutai", type: "vocab", front: "ネクタイ", reading: "nekutai", meaning: "necktie", example: { jp: "ネクタイをします。", en: "I wear a necktie." }, drill: { jp: "ネクタイはあおいです。", en: "The necktie is blue." }, accept: ["tie", "ties", "neckties", "neck tie"], hint: "ne-ku-TAI — four beats: ne-ku-ta-i. Japanese puts a tie on with します, to do, not with きます: ネクタイをします. A suit is a スーツ, with the length mark." },
        { id: "ja-u4l5-naifu", type: "vocab", front: "ナイフ", reading: "naifu", meaning: "knife", example: { jp: "ナイフがあります。", en: "There is a knife." }, drill: { jp: "ナイフをつかいます。", en: "I use a knife." }, accept: ["knives", "a knife", "table knife"], hint: "NAI-fu — three beats: na-i-fu, the silent English k simply gone. ⚠️ A kitchen knife is a ほうちょう, a native word; ナイフ is the table knife beside the フォーク. Both arrived with Western food." },
        { id: "ja-u4l5-banana", type: "vocab", front: "バナナ", reading: "banana", meaning: "banana", example: { jp: "バナナをたべます。", en: "I eat a banana." }, drill: { jp: "バナナはくだものです。", en: "A banana is a fruit." }, accept: ["bananas", "a banana", "banana fruit"], hint: "ba-NA-na — three flat beats, no stress to hunt for. バ is ハ voiced. One of the few loanwords a learner can say correctly on the first try, because Japanese already had every sound in it." },
        { id: "ja-u4l5-nyusu", type: "vocab", front: "ニュース", reading: "nyūsu", meaning: "news", example: { jp: "ニュースをみます。", en: "I watch the news." }, drill: { jp: "ニュースはほんとうです。", en: "The news is true." }, accept: ["the news", "news report", "current affairs"], hint: "NYOO-su — three beats: nyu-u-su. ニュ is a small ュ after ニ, one sound, and the ー holds it. Grammatically singular in Japanese as in English. A news programme is a ニュースばんぐみ." },
      ],
    },
  ],
};
