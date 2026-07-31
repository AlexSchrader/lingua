// Unit 158 — ごい・N3・40 ("N3 vocab 40") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (moto) disambiguated via hints.
export const UNIT158 = {
  id: "ja-u158", lang: "ja", title: "ごい・N3・40", order: 158, stage: "b1",
  lessons: [
    {
      id: "ja-u158l1", unit: 158, lesson: 1, title: "N3 vocab 40·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 綿 (cotton), 免許 (license), 面接 (interview), 面倒 (troublesome), 申し込む (to apply), 申し訳 (apology).",
      items: [
        { id: "ja-u158l1-men", type: "vocab", front: "綿", reading: "men", meaning: "cotton", example: { jp: "このシャツは綿でできています。", en: "This shirt is made of cotton." }, accept: ["cotton wool"] },
        { id: "ja-u158l1-menkyo", type: "vocab", front: "免許", reading: "menkyo", meaning: "license", example: { jp: "くるまの免許をとりました。", en: "I got a driver's license." }, accept: ["permit", "certificate"] },
        { id: "ja-u158l1-mensetsu", type: "vocab", front: "面接", reading: "mensetsu", meaning: "interview", example: { jp: "あしたかいしゃで面接があります。", en: "I have an interview at the company tomorrow." }, accept: [] },
        { id: "ja-u158l1-mendo", type: "vocab", front: "面倒", reading: "mendō", meaning: "troublesome", example: { jp: "そうじはとても面倒です。", en: "Cleaning is a real hassle." }, accept: ["trouble", "bother"] },
        { id: "ja-u158l1-moshikomu", type: "vocab", front: "申し込む", reading: "mōshikomu", meaning: "to apply", example: { jp: "あたらしいクラスに申し込みました。", en: "I applied for the new class." }, accept: ["to sign up", "to apply for"] },
        { id: "ja-u158l1-moshiwake", type: "vocab", front: "申し訳", reading: "mōshiwake", meaning: "apology", example: { jp: "おくれて申し訳ありません。", en: "I'm terribly sorry for being late." }, accept: ["excuse"] },
      ],
    },
    {
      id: "ja-u158l2", unit: 158, lesson: 2, title: "N3 vocab 40·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 毛布 (blanket), 燃える (to burn), 目的 (purpose), 目標 (goal), 文字 (letter), もしかすると (perhaps).",
      items: [
        { id: "ja-u158l2-mofu", type: "vocab", front: "毛布", reading: "mōfu", meaning: "blanket", example: { jp: "さむいので毛布をかけます。", en: "It's cold, so I put a blanket over me." }, accept: ["blankets"] },
        { id: "ja-u158l2-moeru", type: "vocab", front: "燃える", reading: "moeru", meaning: "to burn", example: { jp: "かみがよく燃えています。", en: "The paper is burning well." }, accept: ["to catch fire"] },
        { id: "ja-u158l2-mokuteki", type: "vocab", front: "目的", reading: "mokuteki", meaning: "purpose", example: { jp: "りょこうの目的はなんですか。", en: "What is the purpose of the trip?" }, accept: ["goal", "aim"] },
        { id: "ja-u158l2-mokuhyo", type: "vocab", front: "目標", reading: "mokuhyō", meaning: "goal", example: { jp: "ことしの目標をきめました。", en: "I decided on this year's goal." }, accept: ["objective", "target"] },
        { id: "ja-u158l2-moji", type: "vocab", front: "文字", reading: "moji", meaning: "letter", example: { jp: "このちいさい文字はよめません。", en: "I can't read these small letters." }, accept: ["character"] },
        { id: "ja-u158l2-moshikasuruto", type: "vocab", front: "もしかすると", reading: "moshikasuruto", meaning: "perhaps", example: { jp: "もしかするとあめがふるかもしれません。", en: "Perhaps it will rain." }, accept: ["maybe", "possibly"] },
      ],
    },
    {
      id: "ja-u158l3", unit: 158, lesson: 3, title: "N3 vocab 40·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: もしも (if), 持ち上げる (to lift up), 用いる (to use), 尤も (reasonable), 基 (basis), 素 (base).",
      items: [
        { id: "ja-u158l3-moshimo", type: "vocab", front: "もしも", reading: "moshimo", meaning: "if", example: { jp: "もしもあめがふったらいきません。", en: "If it should rain, I won't go." }, accept: ["supposing"] },
        { id: "ja-u158l3-mochiageru", type: "vocab", front: "持ち上げる", reading: "mochiageru", meaning: "to lift up", example: { jp: "おもいはこを持ち上げます。", en: "I lift up the heavy box." }, accept: ["to raise"] },
        { id: "ja-u158l3-mochiiru", type: "vocab", front: "用いる", reading: "mochiiru", meaning: "to use", example: { jp: "あたらしいほうほうを用います。", en: "I use a new method." }, accept: ["to make use of"] },
        { id: "ja-u158l3-mottomo", type: "vocab", front: "尤も", reading: "mottomo", meaning: "reasonable", example: { jp: "かれのいけんは尤もです。", en: "His opinion is quite reasonable." }, accept: ["quite right", "natural"] },
        { id: "ja-u158l3-moto", type: "vocab", front: "基", reading: "moto", meaning: "basis", example: { jp: "このはなしはじじつを基にしています。", en: "This story is based on facts." }, accept: ["foundation"], hint: "基 (もと) = a basis / foundation. Same reading as 素 (base)." },
        { id: "ja-u158l3-moto2", type: "vocab", front: "素", reading: "moto", meaning: "base", example: { jp: "スープの素をおゆにいれます。", en: "I put the soup base into the hot water." }, accept: ["ingredient", "stock"], hint: "素 (もと) = a base / ingredient, as in スープの素 (soup base). Same reading as 基 (basis)." },
      ],
    },
    {
      id: "ja-u158l4", unit: 158, lesson: 4, title: "N3 vocab 40·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 戻す (to put back), 基づく (to be based on), 求める (to request), 物音 (noise), 物語 (story), 物事 (things).",
      items: [
        { id: "ja-u158l4-modosu", type: "vocab", front: "戻す", reading: "modosu", meaning: "to put back", example: { jp: "ほんをたなに戻します。", en: "I put the book back on the shelf." }, accept: ["to return", "to restore"] },
        { id: "ja-u158l4-motozuku", type: "vocab", front: "基づく", reading: "motozuku", meaning: "to be based on", example: { jp: "このえいがはじじつに基づいています。", en: "This movie is based on facts." }, accept: ["to be grounded on"] },
        { id: "ja-u158l4-motomeru", type: "vocab", front: "求める", reading: "motomeru", meaning: "to request", example: { jp: "ともだちにたすけを求めました。", en: "I asked my friend for help." }, accept: ["to ask for", "to seek"] },
        { id: "ja-u158l4-monoto", type: "vocab", front: "物音", reading: "monōto", meaning: "noise", example: { jp: "よるにへんな物音がしました。", en: "There was a strange noise at night." }, accept: ["sound"] },
        { id: "ja-u158l4-monogatari", type: "vocab", front: "物語", reading: "monogatari", meaning: "story", example: { jp: "おもしろい物語をよみました。", en: "I read an interesting story." }, accept: ["tale", "legend"] },
        { id: "ja-u158l4-monogoto", type: "vocab", front: "物事", reading: "monogoto", meaning: "things", example: { jp: "さいきん物事はうまくいっています。", en: "Lately things are going well." }, accept: ["matters", "everything"] },
      ],
    },
  ],
};
