// Unit 158 — しりょう・けんしょう (Evidence and sources) — B2 / JLPT N2
// Strand B. u156 taught arguing; this unit is the machinery under a claim — reading
// figures without being fooled by them, finding and citing a source, checking a
// result, and the vocabulary for a number that moves.
// Mixed script per the u156 header; all kanji verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT158 = {
  id: "ja-u158",
  lang: "ja",
  title: "しりょう・けんしょう",
  order: 158,
  stage: "b2",
  lessons: [
    {
      id: "ja-u158l1",
      unit: 158,
      lesson: 1,
      title: "Reading the figures",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read a table without being misled by it: すうち しひょう ごさ ばらつき すいい たんい.",
      items: [
        { id: "ja-u158l1-suchi", type: "vocab", front: "すうち", reading: "sūchi", meaning: "a numerical value", example: { jp: "その すうちは 大きく 見えますが、たんいを 見ると 小さいです。", en: "That figure looks large, but it's small once you check the unit." }, accept: ["figure", "number", "reading"] },
        { id: "ja-u158l1-shihyo", type: "vocab", front: "しひょう", reading: "shihyō", meaning: "an indicator", example: { jp: "この しひょうだけで 全部を はかるのは きけんです。", en: "It's dangerous to measure everything by this one indicator." }, accept: ["index", "metric", "yardstick"], hint: "しひょう is a number chosen to STAND FOR something bigger — which is why picking the wrong one quietly decides the answer." },
        { id: "ja-u158l1-gosa", type: "vocab", front: "ごさ", reading: "gosa", meaning: "margin of error", example: { jp: "ごさが 大きい ちょうさは、はんろんされやすいです。", en: "A survey with a large margin of error is easy to argue against." }, accept: ["error", "discrepancy", "deviation"] },
        { id: "ja-u158l1-baratsuki", type: "vocab", front: "ばらつき", reading: "baratsuki", meaning: "spread", example: { jp: "へいきんは 同じでも、ばらつきが ぜんぜん ちがいます。", en: "The averages are the same, but the spread is completely different." }, accept: ["variation", "scatter", "unevenness"], hint: "The one word that stops an average from lying: two groups can share a へいきん and have nothing else in common." },
        { id: "ja-u158l1-suii", type: "vocab", front: "すいい", reading: "suii", meaning: "how it has moved", example: { jp: "一年の すいいを 見ると、少しずつ 下がって います。", en: "Looking at the movement over the year, it's edging down." }, accept: ["trend", "transition", "change over time"] },
        { id: "ja-u158l1-tani", type: "vocab", front: "たんい", reading: "tani", meaning: "unit (of measure)", example: { jp: "たんいを 書かない 数字は、意味が 分かりません。", en: "A number written without its unit means nothing." }, accept: ["denomination", "measure", "credit (school)"] },
      ],
    },
    {
      id: "ja-u158l2",
      unit: 158,
      lesson: 2,
      title: "Finding the source",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Track a claim back to where it came from: ぶんけん げんてん ちゅうしゅつ ぼうだい かんそく さいげん.",
      items: [
        { id: "ja-u158l2-bunken", type: "vocab", front: "ぶんけん", reading: "bunken", meaning: "the literature", example: { jp: "ぶんけんを 何十も 読んでから、やっと 書き始めました。", en: "I read dozens of papers before I finally started writing." }, accept: ["references", "sources", "written record"] },
        { id: "ja-u158l2-genten", type: "vocab", front: "げんてん", reading: "genten", meaning: "the original text", example: { jp: "ひきようが あやしい ときは、げんてんに あたります。", en: "When a quotation looks doubtful, I go to the original." }, accept: ["primary source", "the original"], hint: "げんてん is the source itself, しゅってん is the note saying where it is. You cite a しゅってん; you check a げんてん." },
        { id: "ja-u158l2-chushutsu", type: "vocab", front: "ちゅうしゅつ", reading: "chūshutsu", meaning: "extraction", example: { jp: "ぼうだいな 記録から、ひつような ところだけ ちゅうしゅつしました。", en: "From a vast set of records, I extracted only the parts I needed." }, accept: ["to extract", "to pull out", "sampling"] },
        { id: "ja-u158l2-bodai", type: "vocab", front: "ぼうだい", reading: "bōdai", meaning: "vast", example: { jp: "ぼうだいな しりょうが あっても、読まなければ 意味が ありません。", en: "However vast the materials, they mean nothing unread." }, accept: ["enormous", "huge", "voluminous"] },
        { id: "ja-u158l2-kansoku", type: "vocab", front: "かんそく", reading: "kansoku", meaning: "observation", example: { jp: "長い かんそくの 記録が あるので、へんかが よく 分かります。", en: "Because there is a long record of observation, the change is clear." }, accept: ["to observe", "monitoring", "watching"] },
        { id: "ja-u158l2-saigen", type: "vocab", front: "さいげん", reading: "saigen", meaning: "reproduction", example: { jp: "同じ けっかが さいげんできない けんきゅうは、信じられません。", en: "Research whose results can't be reproduced isn't believable." }, accept: ["to reproduce", "to replicate", "to recreate"], hint: "さいげん is the whole of what makes a result count in science: if nobody else can get it again, it did not happen." },
      ],
    },
    {
      id: "ja-u158l3",
      unit: 158,
      lesson: 3,
      title: "Checking it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how carefully something was checked: けんしょう てきかく げんみつ さくご かたよる おおざっぱ.",
      items: [
        { id: "ja-u158l3-kensho", type: "vocab", front: "けんしょう", reading: "kenshō", meaning: "verification", example: { jp: "新聞は その 話の けんしょうに 半年 かけました。", en: "The paper spent six months verifying that story." }, accept: ["to verify", "examination", "fact-checking"] },
        { id: "ja-u158l3-tekikaku", type: "vocab", front: "てきかく", reading: "tekikaku", meaning: "accurate", example: { jp: "てきかくな せつめいだったので、だれも 質問しませんでした。", en: "The explanation was accurate, so nobody asked anything." }, accept: ["precise", "apt", "to the point"] },
        { id: "ja-u158l3-genmitsu", type: "vocab", front: "げんみつ", reading: "genmitsu", meaning: "strict", example: { jp: "げんみつに 言うと、この 言い方は 正しく ありません。", en: "Strictly speaking, this way of putting it isn't correct." }, accept: ["rigorous", "exact", "precisely"], hint: "げんみつに 言うと is the standard way to open a correction politely — 'strictly speaking'." },
        { id: "ja-u158l3-sakugo", type: "vocab", front: "さくご", reading: "sakugo", meaning: "an error", example: { jp: "小さな さくごが、後で 大きな 問題に なりました。", en: "A small error turned into a big problem later." }, accept: ["mistake", "slip", "miscalculation"] },
        { id: "ja-u158l3-katayoru", type: "vocab", front: "かたよる", reading: "katayoru", meaning: "to be biased", example: { jp: "しりょうが かたよって いると、けっかも かたよります。", en: "If the materials are biased, the result is biased too." }, accept: ["to lean", "to be one-sided", "to skew"] },
        { id: "ja-u158l3-ozappa", type: "vocab", front: "おおざっぱ", reading: "ōzappa", meaning: "rough-and-ready", example: { jp: "おおざっぱな けいさんですが、だいたいの ところは 分かります。", en: "It's a rough calculation, but you get the general picture." }, accept: ["approximate", "broad-brush", "sloppy"] },
      ],
    },
    {
      id: "ja-u158l4",
      unit: 158,
      lesson: 4,
      title: "When the number moves",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe something that rises, falls, or holds steady: へんどう あんてい ふあんてい ゆらぎ つりあい きんこう.",
      items: [
        { id: "ja-u158l4-hendo", type: "vocab", front: "へんどう", reading: "hendō", meaning: "fluctuation", example: { jp: "ねだんの へんどうが 大きいので、店も こまって います。", en: "Prices fluctuate a lot, so the shops are struggling too." }, accept: ["to fluctuate", "variation", "shift"] },
        { id: "ja-u158l4-antei", type: "vocab", front: "あんてい", reading: "antei", meaning: "stability", example: { jp: "しごとが あんていして いるので、安心して 生活して います。", en: "My work is stable, so I live without worry." }, accept: ["steady", "stable", "settled"] },
        { id: "ja-u158l4-fuantei", type: "vocab", front: "ふあんてい", reading: "fuantei", meaning: "unstable", example: { jp: "天気が ふあんていな 日は、ふねが 出ません。", en: "On days when the weather is unstable, the boats don't sail." }, accept: ["unsteady", "precarious", "shaky"] },
        { id: "ja-u158l4-yuragi", type: "vocab", front: "ゆらぎ", reading: "yuragi", meaning: "a slight wavering", example: { jp: "小さな ゆらぎは あっても、ぜんたいの すいいは 変わりません。", en: "There's slight wavering, but the overall trend is unchanged." }, accept: ["fluctuation", "wobble", "flicker"] },
        { id: "ja-u158l4-tsuriai", type: "vocab", front: "つりあい", reading: "tsuriai", meaning: "balance", example: { jp: "しごとと 休みの つりあいが とれて いません。", en: "The balance between work and rest isn't right." }, accept: ["equilibrium", "proportion", "harmony"], hint: "つりあい is everyday balance you can feel; きんこう is the formal, measurable kind — a report says きんこう, a person says つりあい." },
        { id: "ja-u158l4-kinko", type: "vocab", front: "きんこう", reading: "kinkō", meaning: "equilibrium", example: { jp: "入って くる お金と 出て いく お金の きんこうが 大切です。", en: "The equilibrium between money coming in and going out matters." }, accept: ["balance", "parity", "evenness"] },
      ],
    },
  ],
};
