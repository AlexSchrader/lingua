// Unit 37 — かんじ・ようす・かず ("Description & measure kanji") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
export const UNIT37 = {
  id: "ja-u37", lang: "ja", title: "かんじ・ようす・かず", order: 37, stage: "a2",
  lessons: [
    {
      id: "ja-u37l1", unit: 37, lesson: 1, title: "Describing", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 軽 重 短 速 平 倍.",
      items: [
        { id: "ja-u37l1-karui", type: "kanji", front: "軽", reading: "karui", meaning: "light (weight)", example: { jp: "かばんは軽いです。", en: "The bag is light." }, accept: ["not heavy"], hint: "軽 = light (not heavy). 車 (vehicle) radical. 軽い — like かるい." },
        { id: "ja-u37l1-omoi", type: "kanji", front: "重", reading: "omoi", meaning: "heavy", example: { jp: "かばんは重いです。", en: "The bag is heavy." }, accept: ["important"], hint: "重 = heavy / important. 重い — like おもい. 体重 (weight), 大事 vs 重要." },
        { id: "ja-u37l1-mijikai", type: "kanji", front: "短", reading: "mijikai", meaning: "short", example: { jp: "この道は短いです。", en: "This road is short." }, accept: ["brief"], hint: "短 = short. 矢 (arrow) radical. 短い (opposite of 長い)." },
        { id: "ja-u37l1-hayai", type: "kanji", front: "速", reading: "hayai", meaning: "fast", example: { jp: "しんかんせんは速いです。", en: "The bullet train is fast." }, accept: ["quick", "speed"], hint: "速 = fast (speed). ⻌ (movement) radical. 速い, 速度 (speed)." },
        { id: "ja-u37l1-hei", type: "kanji", front: "平", reading: "hei", meaning: "flat / peaceful", example: { jp: "へいわがいちばんです。", en: "Peace is best." }, accept: ["even", "ordinary"], hint: "平 = flat / peaceful / even. 平和 (へいわ, peace), 平日 (weekday), 平ら (flat)." },
        { id: "ja-u37l1-bai", type: "kanji", front: "倍", reading: "bai", meaning: "double / times", example: { jp: "にばいのおおきさです。", en: "It's double the size." }, accept: ["-fold"], hint: "倍 = double / times. 二倍 (double), 三倍 (triple), 〜倍 (× times)." },
      ],
    },
    {
      id: "ja-u37l2", unit: 37, lesson: 2, title: "Counting & order", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 度 等 第 定 配 去.",
      items: [
        { id: "ja-u37l2-do", type: "kanji", front: "度", reading: "do", meaning: "degree / times", example: { jp: "いちどいきました。", en: "I went once." }, accept: ["occurrence"], hint: "度 = degree / occurrence. 一度 (once), 今度 (next time), 温度 (temperature)." },
        { id: "ja-u37l2-to", type: "kanji", front: "等", reading: "tō", meaning: "equal / etc.", example: { jp: "いっとうしょうです。", en: "It's first prize." }, accept: ["rank", "class"], hint: "等 = equal / rank / etc. 平等 (equality), 一等 (first class), 〜等 (etc.)." },
        { id: "ja-u37l2-dai", type: "kanji", front: "第", reading: "dai", meaning: "ordinal (No.)", example: { jp: "だいいっかです。", en: "It's Lesson 1." }, accept: ["number (order)"], hint: "第 = ordinal prefix (No.). 第一 (first), 第二 (second)." },
        { id: "ja-u37l2-tei", type: "kanji", front: "定", reading: "tei", meaning: "fixed / decide", example: { jp: "よていをきめます。", en: "I decide the plan." }, accept: ["settle", "regular"], hint: "定 = fix / decide / settle. 宀 (roof) radical. 予定 (plan), 定食 (set meal), 定員 (capacity)." },
        { id: "ja-u37l2-kubaru", type: "kanji", front: "配", reading: "kubaru", meaning: "distribute", example: { jp: "てがみを配ります。", en: "I hand out letters." }, accept: ["deliver", "hand out"], hint: "配 = distribute / deliver. 配ります = hand out, 心配 (worry), 配達 (delivery)." },
        { id: "ja-u37l2-kyo", type: "kanji", front: "去", reading: "kyo", meaning: "leave / past", example: { jp: "きょねんのことです。", en: "It's about last year." }, accept: ["gone", "previous"], hint: "去 = leave / past. 去年 (きょねん, last year), 過去 (the past)." },
      ],
    },
    {
      id: "ja-u37l3", unit: 37, lesson: 3, title: "Going & arriving", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 追 着 転 登 反 発.",
      items: [
        { id: "ja-u37l3-oimasu", type: "kanji", front: "追", reading: "oimasu", meaning: "chase", example: { jp: "ねこを追います。", en: "I chase the cat." }, accept: ["follow", "pursue"], hint: "追 = chase / follow. ⻌ (movement) radical. 追います = chase, 追加 (addition)." },
        { id: "ja-u37l3-tsuku", type: "kanji", front: "着", reading: "tsuku", meaning: "arrive / wear", example: { jp: "えきに着きます。", en: "I arrive at the station." }, accept: ["reach", "put on"], hint: "着 = arrive / wear. 着きます = arrive, 着ます = wear, 到着 (arrival)." },
        { id: "ja-u37l3-ten", type: "kanji", front: "転", reading: "ten", meaning: "turn / roll", example: { jp: "くるまをうんてんします。", en: "I drive the car." }, accept: ["revolve", "change"], hint: "転 = turn / roll / change. 車 (vehicle) radical. 運転 (driving), 自転車 (bicycle), 転びます (fall over)." },
        { id: "ja-u37l3-noboru", type: "kanji", front: "登", reading: "noboru", meaning: "climb", example: { jp: "やまに登ります。", en: "I climb the mountain." }, accept: ["go up", "ascend"], hint: "登 = climb. 登ります — like のぼります. 登山 (mountain climbing)." },
        { id: "ja-u37l3-han", type: "kanji", front: "反", reading: "han", meaning: "anti / opposite", example: { jp: "はんたいします。", en: "I oppose it." }, accept: ["against", "counter"], hint: "反 = anti / opposite. 反対 (opposition), 反 (そ)る (bend back)." },
        { id: "ja-u37l3-hatsu", type: "kanji", front: "発", reading: "hatsu", meaning: "depart / emit", example: { jp: "くうこうをしゅっぱつします。", en: "I depart from the airport." }, accept: ["start", "issue"], hint: "発 = depart / emit / start. 出発 (departure), 発見 (discovery), 発表 (announcement)." },
      ],
    },
    {
      id: "ja-u37l4", unit: 37, lesson: 4, title: "Things & materials", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 坂 板 柱 箱 鉄 注.",
      items: [
        { id: "ja-u37l4-saka", type: "kanji", front: "坂", reading: "saka", meaning: "slope", example: { jp: "坂をのぼります。", en: "I go up the slope." }, accept: ["hill"], hint: "坂 = slope / hill. 土 (earth) radical. 下り坂 (downhill)." },
        { id: "ja-u37l4-ita", type: "kanji", front: "板", reading: "ita", meaning: "board", example: { jp: "こくばんをみます。", en: "I look at the blackboard." }, accept: ["plank", "plate"], hint: "板 = board / plank. 木 (wood) radical. 黒板 (こくばん, blackboard), 板前 (chef)." },
        { id: "ja-u37l4-hashira", type: "kanji", front: "柱", reading: "hashira", meaning: "pillar", example: { jp: "木の柱です。", en: "It's a wooden pillar." }, accept: ["post", "column"], hint: "柱 = pillar / post. 木 (wood) radical. 電柱 (telephone pole)." },
        { id: "ja-u37l4-hako", type: "kanji", front: "箱", reading: "hako", meaning: "box", example: { jp: "箱をあけます。", en: "I open the box." }, accept: ["case"], hint: "箱 = box. 竹 (bamboo) on top. ゴミ箱 (trash can)." },
        { id: "ja-u37l4-tetsu", type: "kanji", front: "鉄", reading: "tetsu", meaning: "iron", example: { jp: "ちかてつにのります。", en: "I ride the subway." }, accept: ["steel"], hint: "鉄 = iron. 金 (metal) radical. 地下鉄 (ちかてつ, subway), 鉄道 (railway)." },
        { id: "ja-u37l4-chu", type: "kanji", front: "注", reading: "chū", meaning: "pour / note", example: { jp: "ちゅういします。", en: "I pay attention." }, accept: ["focus", "order"], hint: "注 = pour / focus / note. 氵 (water) radical. 注意 (caution), 注文 (an order)." },
      ],
    },
  ],
};
