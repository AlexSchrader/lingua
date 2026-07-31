// Unit 149 — ごい・N3・31 ("N3 vocab 31") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (kuwaeru, gun, keiji) disambiguated via hints.
export const UNIT149 = {
  id: "ja-u149", lang: "ja", title: "ごい・N3・31", order: 149, stage: "b1",
  lessons: [
    {
      id: "ja-u149l1", unit: 149, lesson: 1, title: "N3 vocab 31·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 苦労 (hardship), 加える (to add), 咥える (to hold in mouth), 詳しい (detailed), 加わる (to join), 訓 (kun reading).",
      items: [
        { id: "ja-u149l1-kuro", type: "vocab", front: "苦労", reading: "kurō", meaning: "hardship", example: { jp: "りょうしんは苦労してわたしをそだてました。", en: "My parents raised me through hardship." }, accept: ["suffering"] },
        { id: "ja-u149l1-kuwaeru", type: "vocab", front: "加える", reading: "kuwaeru", meaning: "to add", example: { jp: "スープにしおを加えます。", en: "I add salt to the soup." }, accept: ["to append", "to sum up"], hint: "加える (くわえる) = to add / append. Same reading as 咥える (to hold in the mouth)." },
        { id: "ja-u149l1-kuwaeru2", type: "vocab", front: "咥える", reading: "kuwaeru", meaning: "to hold in mouth", example: { jp: "いぬがボールを咥えています。", en: "The dog is holding a ball in its mouth." }, accept: ["to carry in mouth"], hint: "咥える (くわえる) = to hold in the mouth. Same reading as 加える (to add)." },
        { id: "ja-u149l1-kuwashii", type: "vocab", front: "詳しい", reading: "kuwashii", meaning: "detailed", example: { jp: "このほんには詳しいせつめいがあります。", en: "This book has a detailed explanation." }, accept: ["full", "in detail"] },
        { id: "ja-u149l1-kuwawaru", type: "vocab", front: "加わる", reading: "kuwawaru", meaning: "to join", example: { jp: "わたしもゲームに加わりました。", en: "I joined the game too." }, accept: ["to join in"] },
        { id: "ja-u149l1-kun", type: "vocab", front: "訓", reading: "kun", meaning: "kun reading", example: { jp: "このかんじの訓をおしえてください。", en: "Please teach me the kun reading of this kanji." }, accept: ["native reading"], hint: "訓 (くん) = the native Japanese reading of a kanji (vs 音, the on-reading)." },
      ],
    },
    {
      id: "ja-u149l2", unit: 149, lesson: 2, title: "N3 vocab 31·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 軍 (army), 郡 (county), 軍隊 (army), 訓練 (training), 敬意 (respect), 経営 (management).",
      items: [
        { id: "ja-u149l2-gun", type: "vocab", front: "軍", reading: "gun", meaning: "army", example: { jp: "むかしこのくににはつよい軍がありました。", en: "Long ago this country had a strong army." }, accept: ["force", "troops"], hint: "軍 (ぐん) = army / military force. Same reading as 郡 (county)." },
        { id: "ja-u149l2-gun2", type: "vocab", front: "郡", reading: "gun", meaning: "county", example: { jp: "わたしはちいさな郡にすんでいます。", en: "I live in a small county." }, accept: ["district"], hint: "郡 (ぐん) = a county / rural district. Same reading as 軍 (army)." },
        { id: "ja-u149l2-guntai", type: "vocab", front: "軍隊", reading: "guntai", meaning: "army", example: { jp: "かれは軍隊にはいりました。", en: "He joined the army." }, accept: ["troops", "the military"] },
        { id: "ja-u149l2-kunren", type: "vocab", front: "訓練", reading: "kunren", meaning: "training", example: { jp: "まいにちきびしい訓練をします。", en: "I do hard training every day." }, accept: ["practice", "drill"] },
        { id: "ja-u149l2-keii", type: "vocab", front: "敬意", reading: "keii", meaning: "respect", example: { jp: "せんせいに敬意をはらいます。", en: "I show respect to my teacher." }, accept: ["honor"], hint: "敬意を払う (けいいをはらう) = to show / pay respect." },
        { id: "ja-u149l2-keiei", type: "vocab", front: "経営", reading: "keiei", meaning: "management", example: { jp: "ちちはレストランを経営しています。", en: "My father runs a restaurant." }, accept: ["administration", "to run"] },
      ],
    },
    {
      id: "ja-u149l3", unit: 149, lesson: 3, title: "N3 vocab 31·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 景気 (economy), 傾向 (tendency), 警告 (warning), 計算 (calculation), 掲示 (notice), 刑事 (detective).",
      items: [
        { id: "ja-u149l3-keiki", type: "vocab", front: "景気", reading: "keiki", meaning: "economy", example: { jp: "さいきん景気がわるいです。", en: "The economy has been bad lately." }, accept: ["business condition", "state"] },
        { id: "ja-u149l3-keiko", type: "vocab", front: "傾向", reading: "keikō", meaning: "tendency", example: { jp: "ねだんがあがる傾向があります。", en: "There is a tendency for prices to rise." }, accept: ["trend", "inclination"] },
        { id: "ja-u149l3-keikoku", type: "vocab", front: "警告", reading: "keikoku", meaning: "warning", example: { jp: "せんせいはわたしに警告しました。", en: "The teacher gave me a warning." }, accept: ["caution"] },
        { id: "ja-u149l3-keisan", type: "vocab", front: "計算", reading: "keisan", meaning: "calculation", example: { jp: "この計算はむずかしいです。", en: "This calculation is difficult." }, accept: ["reckoning", "math"] },
        { id: "ja-u149l3-keiji", type: "vocab", front: "掲示", reading: "keiji", meaning: "notice", example: { jp: "かべに掲示をはりました。", en: "I put up a notice on the wall." }, accept: ["bulletin"], hint: "掲示 (けいじ) = a posted notice. Same reading as 刑事 (detective)." },
        { id: "ja-u149l3-keiji2", type: "vocab", front: "刑事", reading: "keiji", meaning: "detective", example: { jp: "刑事はどろぼうをさがしています。", en: "The detective is searching for the thief." }, accept: ["criminal case"], hint: "刑事 (けいじ) = a police detective. Same reading as 掲示 (notice)." },
      ],
    },
    {
      id: "ja-u149l4", unit: 149, lesson: 4, title: "N3 vocab 31·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 芸術 (art), 契約 (contract), 経由 (via), 劇 (drama), 劇場 (theater), 化粧 (make-up).",
      items: [
        { id: "ja-u149l4-geijutsu", type: "vocab", front: "芸術", reading: "geijutsu", meaning: "art", example: { jp: "かのじょは芸術がすきです。", en: "She likes art." }, accept: ["the arts"] },
        { id: "ja-u149l4-keiyaku", type: "vocab", front: "契約", reading: "keiyaku", meaning: "contract", example: { jp: "あたらしい契約にサインしました。", en: "I signed a new contract." }, accept: ["agreement", "compact"] },
        { id: "ja-u149l4-keiyu", type: "vocab", front: "経由", reading: "keiyu", meaning: "via", example: { jp: "とうきょう経由でおおさかへいきます。", en: "I go to Osaka via Tokyo." }, accept: ["by way of"] },
        { id: "ja-u149l4-geki", type: "vocab", front: "劇", reading: "geki", meaning: "drama", example: { jp: "きのうおもしろい劇をみました。", en: "Yesterday I watched an interesting play." }, accept: ["play"] },
        { id: "ja-u149l4-gekijo", type: "vocab", front: "劇場", reading: "gekijō", meaning: "theater", example: { jp: "まちにあたらしい劇場ができました。", en: "A new theater was built in town." }, accept: ["playhouse"] },
        { id: "ja-u149l4-kesho", type: "vocab", front: "化粧", reading: "keshō", meaning: "make-up", example: { jp: "あねはまいあさ化粧をします。", en: "My older sister puts on make-up every morning." }, accept: ["makeup", "cosmetics"] },
      ],
    },
  ],
};
