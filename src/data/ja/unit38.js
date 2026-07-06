// Unit 38 — かんじ・よく使う ("High-frequency kanji") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
// The last N4 kanji — completes the JLPT N4 set. Almost every one hooks to a word the
// learner already has (宿題, 洋服, 食べ物, 勉強, 薬, 有名, 遊ぶ, 旅行, 両親).
export const UNIT38 = {
  id: "ja-u38", lang: "ja", title: "かんじ・よくつかう", order: 38, stage: "a2",
  lessons: [
    {
      id: "ja-u38l1", unit: 38, lesson: 1, title: "Everyday 1", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 次 事 題 丁 筆 秒.",
      items: [
        { id: "ja-u38l1-tsugi", type: "kanji", front: "次", reading: "tsugi", meaning: "next", example: { jp: "次のえきでおります。", en: "I get off at the next station." }, accept: ["order", "second"], hint: "次 = next / order. 次 (つぎ, next), 次回 (next time). You know つぎ." },
        { id: "ja-u38l1-koto", type: "kanji", front: "事", reading: "koto", meaning: "thing / matter", example: { jp: "しごとをします。", en: "I do work." }, accept: ["affair", "fact"], hint: "事 = thing / matter. 仕事 (しごと, work), 事 (こと), 大事 (だいじ, important), 火事 (fire)." },
        { id: "ja-u38l1-dai", type: "kanji", front: "題", reading: "dai", meaning: "topic / problem", example: { jp: "しゅくだいをします。", en: "I do my homework." }, accept: ["title", "subject"], hint: "題 = topic / problem / title. 宿題 (しゅくだい, homework), 問題 (もんだい, problem), 話題 (topic)." },
        { id: "ja-u38l1-cho", type: "kanji", front: "丁", reading: "chō", meaning: "block / even", example: { jp: "いっちょうめです。", en: "It's block one." }, accept: ["exact", "counter (blocks)"], hint: "丁 = (town) block / even number. 一丁目 (block 1), 丁寧 (ていねい, polite)." },
        { id: "ja-u38l1-fude", type: "kanji", front: "筆", reading: "fude", meaning: "writing brush", example: { jp: "筆でかきます。", en: "I write with a brush." }, accept: ["pen"], hint: "筆 = writing brush / pen. 竹 (bamboo) on top. 鉛筆 (えんぴつ, pencil), 筆記." },
        { id: "ja-u38l1-byo", type: "kanji", front: "秒", reading: "byō", meaning: "second (time)", example: { jp: "じゅうびょうです。", en: "It's ten seconds." }, accept: ["seconds"], hint: "秒 = second (of time). 禾 (grain) + 少. You know びょう. 一秒 (1 second)." },
      ],
    },
    {
      id: "ja-u38l2", unit: 38, lesson: 2, title: "Everyday 2", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 負 服 福 物 勉 命.",
      items: [
        { id: "ja-u38l2-makeru", type: "kanji", front: "負", reading: "makeru", meaning: "lose", example: { jp: "ゲームに負けます。", en: "I lose the game." }, accept: ["be defeated", "bear"], hint: "負 = lose / bear. 負けます = lose (opposite of 勝つ), 負担 (burden)." },
        { id: "ja-u38l2-fuku", type: "kanji", front: "服", reading: "fuku", meaning: "clothes", example: { jp: "ふくをかいます。", en: "I buy clothes." }, accept: ["clothing", "outfit"], hint: "服 = clothes. 洋服 (Western clothes), 制服 (uniform). You know ふく." },
        { id: "ja-u38l2-fuku2", type: "kanji", front: "福", reading: "fuku", meaning: "fortune", example: { jp: "こうふくです。", en: "It's happiness." }, accept: ["luck", "blessing"], hint: "福 = fortune / blessing. 幸福 (happiness), 七福神. ネ (altar) radical." },
        { id: "ja-u38l2-mono", type: "kanji", front: "物", reading: "mono", meaning: "thing", example: { jp: "たべものをかいます。", en: "I buy food." }, accept: ["object", "goods"], hint: "物 = thing / object. 食べ物 (たべもの, food), 買い物 (かいもの, shopping), 動物 (どうぶつ, animal)." },
        { id: "ja-u38l2-ben", type: "kanji", front: "勉", reading: "ben", meaning: "effort", example: { jp: "べんきょうします。", en: "I study." }, accept: ["diligence"], hint: "勉 = effort / diligence. 勉強 (べんきょう, study), 勤勉 (diligent)." },
        { id: "ja-u38l2-inochi", type: "kanji", front: "命", reading: "inochi", meaning: "life", example: { jp: "命はたいせつです。", en: "Life is precious." }, accept: ["command"], hint: "命 = life / command. 命 (いのち), 生命 (life), 命令 (an order)." },
      ],
    },
    {
      id: "ja-u38l3", unit: 38, lesson: 3, title: "Everyday 3", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 問 薬 由 有 遊 予 陽.",
      items: [
        { id: "ja-u38l3-mon", type: "kanji", front: "問", reading: "mon", meaning: "question", example: { jp: "もんだいをときます。", en: "I solve the problem." }, accept: ["problem"], hint: "問 = question. 門 (gate) + 口. 問題 (もんだい, problem), 質問 (しつもん, question)." },
        { id: "ja-u38l3-kusuri", type: "kanji", front: "薬", reading: "kusuri", meaning: "medicine", example: { jp: "薬をのみます。", en: "I take medicine." }, accept: ["drug"], hint: "薬 = medicine. 艹 (grass) on top. 薬 (くすり), 薬局 (pharmacy). You know くすり." },
        { id: "ja-u38l3-yu", type: "kanji", front: "由", reading: "yu", meaning: "reason", example: { jp: "りゆうをききます。", en: "I ask the reason." }, accept: ["cause", "origin"], hint: "由 = reason / cause. 理由 (りゆう, reason), 自由 (じゆう, freedom)." },
        { id: "ja-u38l3-yu2", type: "kanji", front: "有", reading: "yū", meaning: "exist / have", example: { jp: "ゆうめいなみせです。", en: "It's a famous shop." }, accept: ["possess"], hint: "有 = exist / have. 有名 (ゆうめい, famous), 有料 (fee-charging), 有 vs 無." },
        { id: "ja-u38l3-asobu", type: "kanji", front: "遊", reading: "asobu", meaning: "play", example: { jp: "こうえんで遊びます。", en: "I play in the park." }, accept: ["have fun"], hint: "遊 = play / amuse. ⻌ (movement) radical. 遊びます — like あそびます. 遊園地 (amusement park)." },
        { id: "ja-u38l3-yo", type: "kanji", front: "予", reading: "yo", meaning: "beforehand", example: { jp: "よていをきめます。", en: "I decide the plan." }, accept: ["in advance"], hint: "予 = beforehand / in advance. 予定 (plan), 予約 (よやく, reservation), 予習 (prep)." },
        { id: "ja-u38l3-yo2", type: "kanji", front: "陽", reading: "yō", meaning: "sun", example: { jp: "たいようはあかいです。", en: "The sun is red." }, accept: ["positive", "yang"], hint: "陽 = sun / positive. 太陽 (たいよう, the sun), 陽気 (cheerful)." },
      ],
    },
    {
      id: "ja-u38l4", unit: 38, lesson: 4, title: "Everyday 4", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 様 旅 両 礼 列 路 和.",
      items: [
        { id: "ja-u38l4-sama", type: "kanji", front: "様", reading: "sama", meaning: "Mr./Ms. / manner", example: { jp: "たなかさまです。", en: "It's Mr. Tanaka." }, accept: ["way", "appearance"], hint: "様 = manner / Mr./Ms. (polite). 〜様 (さま, polite suffix), 様子 (situation), 同様 (the same)." },
        { id: "ja-u38l4-tabi", type: "kanji", front: "旅", reading: "tabi", meaning: "travel", example: { jp: "にほんをりょこうします。", en: "I travel around Japan." }, accept: ["trip", "journey"], hint: "旅 = travel / journey. 旅行 (りょこう, travel), 旅 (たび, a trip)." },
        { id: "ja-u38l4-ryo", type: "kanji", front: "両", reading: "ryō", meaning: "both", example: { jp: "りょうしんがすきです。", en: "I love my parents." }, accept: ["two", "pair"], hint: "両 = both / two. 両親 (りょうしん, parents), 両方 (both), 〜両 (train-car counter)." },
        { id: "ja-u38l4-rei", type: "kanji", front: "礼", reading: "rei", meaning: "courtesy", example: { jp: "おれいをいいます。", en: "I give my thanks." }, accept: ["thanks", "bow", "manners"], hint: "礼 = courtesy / gratitude / bow. ネ (altar) radical. お礼 (thanks), 失礼 (excuse me)." },
        { id: "ja-u38l4-retsu", type: "kanji", front: "列", reading: "retsu", meaning: "row", example: { jp: "れつにならびます。", en: "I line up in a row." }, accept: ["line", "queue"], hint: "列 = row / line. 列車 (train), 行列 (a queue), 一列 (a row)." },
        { id: "ja-u38l4-ro", type: "kanji", front: "路", reading: "ro", meaning: "road", example: { jp: "どうろをわたります。", en: "I cross the road." }, accept: ["route", "path"], hint: "路 = road / route / path. 足 (foot) radical. 道路 (どうろ, road), 線路 (railway track), 通路 (aisle)." },
        { id: "ja-u38l4-wa", type: "kanji", front: "和", reading: "wa", meaning: "harmony / Japanese", example: { jp: "わしょくがすきです。", en: "I like Japanese food." }, accept: ["peace", "sum"], hint: "和 = harmony / Japanese. 和食 (Japanese food), 平和 (へいわ, peace), 和 (sum)." },
      ],
    },
  ],
};
