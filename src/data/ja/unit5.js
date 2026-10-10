// Unit 5 — カタカナ part 2
// Completes the base katakana script. Unit 4 covered vowels + k/s/t/n; this unit
// finishes the rest: h / m / y / r / w rows + ン. Same approach as Unit 4 — every
// glyph already has a known sound from the hiragana of Units 1-2, so each hint
// anchors the new katakana to its hiragana twin plus a shape cue. Vocab stays in
// recognizable loanwords; example sentences reuse only grammar from Units 1-3
// (をたべます / がすきです / にいきます / はどこですか …). With this unit the learner
// can read any all-kana Japanese text. lang/unit/lesson stamped in index.js.
export const UNIT5 = {
  id: "ja-u5",
  lang: "ja",
  title: "カタカナ 2",
  order: 5,
  stage: "pre-a1",
  lessons: [
    // Lesson 1: h-row ハ ヒ フ ヘ ホ
    {
      id: "ja-u5l1",
      unit: 5,
      lesson: 1,
      title: "Katakana h-row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana h-row ハ ヒ フ ヘ ホ; note that ヘ looks identical to hiragana へ.",
      items: [
        { id: "ja-u5l1-ha", type: "kana", front: "ハ", reading: "ha", meaning: null, example: null, hint: "ハ = 'ha', twin of は. Two strokes leaning apart like an open tent — same HA." },
        { id: "ja-u5l1-hi", type: "kana", front: "ヒ", reading: "hi", meaning: null, example: null, hint: "ヒ = 'hi', twin of ひ. A short stroke crossed by a long one that hooks up — same HI." },
        { id: "ja-u5l1-fu", type: "kana", front: "フ", reading: "fu", meaning: null, example: null, hint: "フ = 'fu', twin of ふ. A single bent stroke — like just the top corner of ふ. Same FU." },
        { id: "ja-u5l1-he", type: "kana", front: "ヘ", reading: "he", meaning: null, example: null, hint: "ヘ = 'he', twin of へ — and it's the SAME shape. へ is the one kana that looks identical in hiragana and katakana. Same HE." },
        { id: "ja-u5l1-ho", type: "kana", front: "ホ", reading: "ho", meaning: null, example: null, hint: "ホ = 'ho', twin of ほ. A cross with two short legs at the bottom — same HO." },
        { id: "ja-u5l1-hoteru", type: "vocab", front: "ホテル", reading: "hoteru", meaning: "hotel", example: { jp: "ホテルにいきます。", en: "I go to the hotel." }, drill: { jp: "ホテルはしずかです。", en: "The hotel is quiet." }, accept: ["hotels", "a hotel", "inn"], hint: "HO-te-ru — three flat beats, tapped r standing in for the English l. A Western-style hotel only; a traditional inn with tatami and futons is a りょかん, which is a different kind of stay altogether." },
        { id: "ja-u5l1-hamu", type: "vocab", front: "ハム", reading: "hamu", meaning: "ham", example: { jp: "ハムをたべます。", en: "I eat ham." }, drill: { jp: "ハムはおいしいです。", en: "The ham is delicious." }, accept: ["sliced ham", "cured ham", "ham slices"], hint: "HA-mu — two beats; Japanese cannot end a word in m, so it adds a u. That same rule gives you ゲーム and クリーム. Always the thin pink deli slices here, not a roast joint." },
        { id: "ja-u5l1-foku", type: "vocab", front: "フォーク", reading: "fōku", meaning: "fork", example: { jp: "フォークがあります。", en: "There is a fork." }, drill: { jp: "フォークとナイフをつかいます。", en: "I use a fork and knife." }, accept: ["forks", "a fork", "table fork"], hint: "FOH-ku — three beats: fo-o-ku. フォ is a small ォ written after フ, the katakana-only trick for foreign f sounds, and the ー holds it. Compare ソファ, which uses ファ from the same set." },
        { id: "ja-u5l1-hita", type: "vocab", front: "ヒーター", reading: "hītā", meaning: "heater", example: { jp: "ヒーターをつけます。", en: "I turn on the heater." }, drill: { jp: "ヒーターはあたらしいです。", en: "The heater is new." }, accept: ["heaters", "a heater", "space heater"], hint: "HEE-tah — two length marks, four beats: hi-i-ta-a. The final ー is doing the English -er, as in セーター. ⚠️ ヒ is a breathy h; a Japanese ヒーター never starts with an f sound." },
        { id: "ja-u5l1-homu", type: "vocab", front: "ホーム", reading: "hōmu", meaning: "platform", example: { jp: "ホームはどこですか。", en: "Where is the platform?" }, drill: { jp: "ホームにひとがいます。", en: "There are people on the platform." }, accept: ["the platform", "train platform", "station platform"], hint: "HOH-mu — three beats: ho-o-mu. Clipped from platform, keeping the MIDDLE of the word — Japanese does that more often than you expect. ⚠️ Nothing to do with a home, which is うち." },
        { id: "ja-u5l1-herumetto", type: "vocab", front: "ヘルメット", reading: "herumetto", meaning: "helmet", example: { jp: "ヘルメットがあります。", en: "There is a helmet." }, drill: { jp: "しろいヘルメットです。", en: "It's a white helmet." }, accept: ["helmets", "a helmet", "hard hat"], hint: "he-ru-MET-to — five beats, with the small ッ holding a beat before the t: he-ru-me-t-to. Long for a loanword, and every syllable gets equal time — rushing the ッ is the usual mistake." },
      ],
    },
    // Lesson 2: m-row マ ミ ム メ モ
    {
      id: "ja-u5l2",
      unit: 5,
      lesson: 2,
      title: "Katakana m-row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana m-row マ ミ ム メ モ; tell メ apart from ヌ.",
      items: [
        { id: "ja-u5l2-ma", type: "kana", front: "マ", reading: "ma", meaning: null, example: null, hint: "マ = 'ma', twin of ま. A curve crossed by a downward sweep — same MA." },
        { id: "ja-u5l2-mi", type: "kana", front: "ミ", reading: "mi", meaning: null, example: null, hint: "ミ = 'mi', twin of み. Three short strokes stacked — like the number three tipped on its side. Same MI." },
        { id: "ja-u5l2-mu", type: "kana", front: "ム", reading: "mu", meaning: null, example: null, hint: "ム = 'mu', twin of む. A small stroke beside a wide hook — same MU." },
        { id: "ja-u5l2-me", type: "kana", front: "メ", reading: "me", meaning: null, example: null, hint: "メ = 'me', twin of め. Two strokes crossing like an X — same ME. (Look-alike ヌ adds a third sweeping tail; メ has none.)" },
        { id: "ja-u5l2-mo", type: "kana", front: "モ", reading: "mo", meaning: null, example: null, hint: "モ = 'mo', twin of も. A crossbar over a hook — basically も simplified. Same MO." },
        { id: "ja-u5l2-menyu", type: "vocab", front: "メニュー", reading: "menyū", meaning: "menu", example: { jp: "メニューをみます。", en: "I look at the menu." }, drill: { jp: "メニューにカレーがあります。", en: "There is curry on the menu." }, accept: ["menus", "a menu", "bill of fare"], hint: "ME-nyoo — three beats: me-nyu-u. ニュ is one sound, nyu, with the ー holding it. Many Japanese restaurants hand you a picture メニュー, which is a gift at this stage of reading." },
        { id: "ja-u5l2-miruku", type: "vocab", front: "ミルク", reading: "miruku", meaning: "milk", example: { jp: "ミルクをのみます。", en: "I drink milk." }, drill: { jp: "ミルクはしろいです。", en: "Milk is white." }, accept: ["a milk", "dairy milk", "cow milk"], hint: "MI-ru-ku — three beats, tapped r for the English l. ⚠️ ミルク is the drink or the dairy product; a cow is a うし and its milk in a recipe can also be ぎゅうにゅう, cow-milk, the native word." },
        { id: "ja-u5l2-masuku", type: "vocab", front: "マスク", reading: "masuku", meaning: "mask", example: { jp: "マスクをします。", en: "I wear a mask." }, drill: { jp: "あたらしいマスクをかいます。", en: "I buy a new mask." }, accept: ["masks", "face mask", "surgical mask", "a mask"], hint: "MA-su-ku — three beats, the u added because Japanese cannot end in sk. Worn with します, to do, not with きます. Wearing one when you have a cold is ordinary courtesy in Japan, not an emergency." },
        { id: "ja-u5l2-memo", type: "vocab", front: "メモ", reading: "memo", meaning: "memo", example: { jp: "メモをかきます。", en: "I write a memo." }, drill: { jp: "ノートにメモをします。", en: "I make a note in my notebook." }, accept: ["note", "notes", "memos", "jotting"], hint: "ME-mo — two flat beats, no length mark. ⚠️ Not an office memorandum: a メモ is a quick jotted note to yourself. The notebook you write it in is a ノート, which is the other way round from English." },
        { id: "ja-u5l2-kurimu", type: "vocab", front: "クリーム", reading: "kurīmu", meaning: "cream", example: { jp: "クリームがすきです。", en: "I like cream." }, drill: { jp: "ケーキにクリームがあります。", en: "There is cream on the cake." }, accept: ["whipped cream", "fresh cream", "a cream"], hint: "ku-REE-mu — four beats: ku-ri-i-mu, with the ー holding the ri and a u added for the final m. Covers whipped cream, face cream and the colour. シュークリーム is a cream puff, from the French chou." },
        { id: "ja-u5l2-maiku", type: "vocab", front: "マイク", reading: "maiku", meaning: "microphone", example: { jp: "マイクがあります。", en: "There is a microphone." }, drill: { jp: "マイクをつかいます。", en: "I use a microphone." }, accept: ["mic", "mics", "microphones", "a mic"], hint: "MAI-ku — three beats: ma-i-ku, both vowels of マイ sounded. Clipped from microphone. ⚠️ Said aloud it is identical to the name Mike, and Japanese writes both the same way." },
      ],
    },
    // Lesson 3: y-row ヤ ユ ヨ (short row — like や ゆ よ in hiragana)
    {
      id: "ja-u5l3",
      unit: 5,
      lesson: 3,
      title: "Katakana y-row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana y-row ヤ ユ ヨ; three glyphs, just like や ゆ よ.",
      items: [
        { id: "ja-u5l3-ya", type: "kana", front: "ヤ", reading: "ya", meaning: null, example: null, hint: "ヤ = 'ya', twin of や. Same YA sound." },
        { id: "ja-u5l3-yu", type: "kana", front: "ユ", reading: "yu", meaning: null, example: null, hint: "ユ = 'yu', twin of ゆ. A small hook sitting on a baseline — same YU." },
        { id: "ja-u5l3-yo", type: "kana", front: "ヨ", reading: "yo", meaning: null, example: null, hint: "ヨ = 'yo', twin of よ. Like a backwards capital E — three bars off a spine. Same YO." },
        { id: "ja-u5l3-taiya", type: "vocab", front: "タイヤ", reading: "taiya", meaning: "tire", example: { jp: "タイヤがあります。", en: "There is a tire." }, drill: { jp: "くるまのタイヤです。", en: "It's the car's tire." }, accept: ["tyre", "tires", "tyres", "a tire"], hint: "TAI-ya — three beats: ta-i-ya. ⚠️ Keep it apart from ダイヤ, which is a diamond and also a train timetable — one dakuten is the whole difference. Snow tyres are スタッドレスタイヤ." },
        { id: "ja-u5l3-yotto", type: "vocab", front: "ヨット", reading: "yotto", meaning: "yacht", example: { jp: "ヨットがすきです。", en: "I like yachts." }, drill: { jp: "おおきいヨットです。", en: "It's a big yacht." }, accept: ["yachts", "sailboat", "a yacht", "sailing boat"], hint: "YOT-to — three beats, the small ッ holding a beat: yo-t-to. ⚠️ A Japanese ヨット is any sailing boat, including a small dinghy — not the millionaire's motor cruiser English means. A native ふね is the general word." },
        { id: "ja-u5l3-yunifomu", type: "vocab", front: "ユニフォーム", reading: "yunifōmu", meaning: "uniform", example: { jp: "ユニフォームをきます。", en: "I wear a uniform." }, drill: { jp: "がっこうのユニフォームです。", en: "It's the school uniform." }, accept: ["uniforms", "a uniform", "kit", "team uniform"], hint: "yu-ni-FOH-mu — six beats: yu-ni-fo-o-mu, with ユ and フォ both single sounds. ⚠️ Used for sports kit and work wear; a school uniform is more often せいふく, the native word." },
        { id: "ja-u5l3-kureyon", type: "vocab", front: "クレヨン", reading: "kureyon", meaning: "crayon", example: { jp: "クレヨンをつかいます。", en: "I use a crayon." }, drill: { jp: "こどもがクレヨンをつかいます。", en: "The child uses a crayon." }, accept: ["crayons", "a crayon", "wax crayon"], hint: "ku-re-YON — four beats: ku-re-yo-n, tapped r, the ン held. Came in from French, so the ending is -yon rather than the English -yan. Japanese children draw with クレヨン before they ever hold an えんぴつ." },
        { id: "ja-u5l3-iyahon", type: "vocab", front: "イヤホン", reading: "iyahon", meaning: "earphones", example: { jp: "イヤホンをします。", en: "I put on earphones." }, drill: { jp: "イヤホンはかばんにあります。", en: "The earphones are in my bag." }, accept: ["earphone", "earbuds", "headphones", "ear buds"], hint: "i-ya-HON — four beats: i-ya-ho-n. A Japanese-built compound from ear plus phone, so the stress pattern is nothing like English earphone. Over-ear ones are ヘッドホン, from head plus phone." },
      ],
    },
    // Lesson 4: r-row ラ リ ル レ ロ
    {
      id: "ja-u5l4",
      unit: 5,
      lesson: 4,
      title: "Katakana r-row",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana r-row ラ リ ル レ ロ; tell the closed box ロ from the open コ.",
      items: [
        { id: "ja-u5l4-ra", type: "kana", front: "ラ", reading: "ra", meaning: null, example: null, hint: "ラ = 'ra', twin of ら. A short top stroke over a hook — same RA." },
        { id: "ja-u5l4-ri", type: "kana", front: "リ", reading: "ri", meaning: null, example: null, hint: "リ = 'ri', twin of り. Two strokes side by side — almost the same as hiragana り. Same RI." },
        { id: "ja-u5l4-ru", type: "kana", front: "ル", reading: "ru", meaning: null, example: null, hint: "ル = 'ru', twin of る. Two strokes, the right one curling up — same RU." },
        { id: "ja-u5l4-re", type: "kana", front: "レ", reading: "re", meaning: null, example: null, hint: "レ = 're', twin of れ. A single check-mark stroke — same RE." },
        { id: "ja-u5l4-ro", type: "kana", front: "ロ", reading: "ro", meaning: null, example: null, hint: "ロ = 'ro', twin of ろ. A closed square. (Compare コ 'ko', which is open on the right — ロ is sealed shut.)" },
        { id: "ja-u5l4-raisu", type: "vocab", front: "ライス", reading: "raisu", meaning: "rice", example: { jp: "ライスをたべます。", en: "I eat rice." }, drill: { jp: "カレーとライスです。", en: "Curry and rice." }, accept: ["a rice", "plated rice", "white rice"], hint: "RAI-su — three beats: ra-i-su, tapped r. ⚠️ ライス is rice SERVED ON A PLATE, Western-style, beside カレー or a steak. Rice in a bowl with chopsticks is ごはん, and asking for the wrong one gets you the wrong crockery." },
        { id: "ja-u5l4-remon", type: "vocab", front: "レモン", reading: "remon", meaning: "lemon", example: { jp: "レモンをたべます。", en: "I eat a lemon." }, drill: { jp: "レモンはきいろいです。", en: "The lemon is yellow." }, accept: ["lemons", "a lemon", "lemon fruit"], hint: "RE-mon — three beats: re-mo-n, tapped r, the ン held. ⚠️ Keep it apart from メロン in this same lesson: the same three kana families, rearranged. レモン is the sour one." },
        { id: "ja-u5l4-meron", type: "vocab", front: "メロン", reading: "meron", meaning: "melon", example: { jp: "メロンがすきです。", en: "I like melon." }, drill: { jp: "メロンはあまいです。", en: "The melon is sweet." }, accept: ["melons", "a melon", "muskmelon", "cantaloupe"], hint: "ME-ron — three beats: me-ro-n. ⚠️ The mirror image of レモン, taught in this same lesson — read the first kana carefully. A gift-grade メロン in a department store can cost more than a meal out." },
        { id: "ja-u5l4-ruru", type: "vocab", front: "ルール", reading: "rūru", meaning: "rule", example: { jp: "ルールがあります。", en: "There is a rule." }, drill: { jp: "スポーツのルールです。", en: "It's the rules of the sport." }, accept: ["rules", "a rule", "regulation", "the rules"], hint: "ROO-ru — three beats: ru-u-ru, with the ー holding the first vowel and both r's tapped. Three of the five beats are the same kana family, which makes it a tongue-twister worth saying slowly." },
        { id: "ja-u5l4-risuto", type: "vocab", front: "リスト", reading: "risuto", meaning: "list", example: { jp: "リストをみます。", en: "I look at the list." }, drill: { jp: "リストになまえをかきます。", en: "I write my name on the list." }, accept: ["lists", "a list", "listing"], hint: "RI-su-to — three beats: ri-su-to, the u added so the s can be a syllable. ⚠️ リスト also serves for wrist, as in リストバンド — context, not spelling, separates them." },
        { id: "ja-u5l4-resutoran", type: "vocab", front: "レストラン", reading: "resutoran", meaning: "restaurant", example: { jp: "レストランにいきます。", en: "I go to the restaurant." }, drill: { jp: "レストランでごはんをたべます。", en: "I eat a meal at the restaurant." }, accept: ["restaurants", "a restaurant", "eatery", "diner"], hint: "re-su-to-RAN — five beats: re-su-to-ra-n. ⚠️ A レストラン serves Western food with knives and forks. A Japanese-food place is a みせ or a しょくどう, and a bar-style one is an いざかや." },
      ],
    },
    // Lesson 5: w-row ワ ヲ ン — finishes katakana. ヲ is essentially unused in
    // modern writing (the particle を is always hiragana), taught for completeness.
    {
      id: "ja-u5l5",
      unit: 5,
      lesson: 5,
      title: "Katakana ワ ヲ ン",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read ワ ヲ ン and finish the katakana script; tell ン apart from ソ and シ.",
      items: [
        { id: "ja-u5l5-wa", type: "kana", front: "ワ", reading: "wa", meaning: null, example: null, hint: "ワ = 'wa', twin of わ. An open box with a leg — same WA. (Compare ウ 'u', which has a small roof on top; ワ has none.)" },
        { id: "ja-u5l5-wo", type: "kana", front: "ヲ", reading: "wo", meaning: null, example: null, hint: "ヲ = 'wo', the katakana twin of を. You'll almost never see it — the particle を is always written in hiragana — but recognize it. Same O sound." },
        { id: "ja-u5l5-n",  type: "kana", front: "ン", reading: "n",  meaning: null, example: null, hint: "ン = 'n', twin of ん — the only katakana for a lone consonant. A short tick plus a stroke sweeping UP from the bottom-left. (Compare ソ 'so', whose stroke drops down, and シ 'shi', which has two ticks — ン has one.)" },
        { id: "ja-u5l5-wain", type: "vocab", front: "ワイン", reading: "wain", meaning: "wine", example: { jp: "ワインをのみます。", en: "I drink wine." }, drill: { jp: "ワインはあかいです。", en: "The wine is red." }, accept: ["wines", "a wine", "grape wine"], hint: "WA-in — three beats: wa-i-n. ⚠️ Rice wine is not ワイン — that is さけ, a separate drink with its own word. Red and white are あかワイン and しろワイン, built with the colour nouns you already know." },
        { id: "ja-u5l5-waishatsu", type: "vocab", front: "ワイシャツ", reading: "waishatsu", meaning: "dress shirt", example: { jp: "ワイシャツをきます。", en: "I wear a dress shirt." }, drill: { jp: "ワイシャツとネクタイです。", en: "A dress shirt and a necktie." }, accept: ["shirt", "shirts", "white shirt", "business shirt"], hint: "WAI-sha-tsu — five beats: wa-i-sha-tsu. From English white shirt, misheard and rebuilt, which is why no English speaker recognises it. A T-shirt is a Tシャツ, keeping the same シャツ." },
        { id: "ja-u5l5-waffuru", type: "vocab", front: "ワッフル", reading: "waffuru", meaning: "waffle", example: { jp: "ワッフルをたべます。", en: "I eat a waffle." }, drill: { jp: "ワッフルをかいます。", en: "I buy a waffle." }, accept: ["waffles", "a waffle", "belgian waffle"], hint: "WAF-fu-ru — four beats, the small ッ holding a beat before the f: wa-f-fu-ru. ⚠️ The ッ is doing the work of the English double f, and dropping it leaves a word nobody will understand." },
        { id: "ja-u5l5-airon", type: "vocab", front: "アイロン", reading: "airon", meaning: "iron", example: { jp: "アイロンがあります。", en: "There is an iron." }, drill: { jp: "アイロンはあついです。", en: "The iron is hot." }, accept: ["clothes iron", "irons", "flat iron", "an iron"], hint: "ai-RON — four beats: a-i-ro-n. ⚠️ The appliance only. Iron the metal is てつ, a native word, so アイロン never means the element. You press clothes with アイロンをかけます." },
        { id: "ja-u5l5-sain", type: "vocab", front: "サイン", reading: "sain", meaning: "signature", example: { jp: "サインをします。", en: "I sign (give a signature)." }, drill: { jp: "てがみにサインをします。", en: "I sign the letter." }, accept: ["sign", "autograph", "signing", "a signature"], hint: "SA-in — three beats: sa-i-n. ⚠️ FALSE FRIEND: a road sign is not サイン — that is ひょうしき. サイン is your handwritten name, or a celebrity's autograph, or a signal in baseball." },
        { id: "ja-u5l5-koin", type: "vocab", front: "コイン", reading: "koin", meaning: "coin", example: { jp: "コインがあります。", en: "There is a coin." }, drill: { jp: "かばんにコインがあります。", en: "There is a coin in my bag." }, accept: ["coins", "a coin", "change", "loose change"], hint: "KO-in — three beats: ko-i-n. The native word for money in general is おかね; コイン is specifically the metal kind, and it is the こ of コインロッカー, the coin lockers in every Japanese station." },
      ],
    },
  ],
};
