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
        { id: "ja-u158l1-suchi", type: "vocab", front: "すうち", reading: "sūchi", meaning: "a numerical value", example: { jp: "その すうちは 大きく 見えますが、たんいを 見ると 小さいです。", en: "That figure looks large, but it's small once you check the unit." }, drill: { jp: "すうちが おおきいです。", en: "The numerical value is large." }, accept: ["figure", "number", "reading"], hint: "sūchi — 数 (number) + 値 (value): the number itself, stripped of what it measures. 3 is a すうち, 3キロ is not — which is exactly why たんい has to travel with it." },
        { id: "ja-u158l1-shihyo", type: "vocab", front: "しひょう", reading: "shihyō", meaning: "an indicator", example: { jp: "この しひょうだけで 全部を はかるのは きけんです。", en: "It's dangerous to measure everything by this one indicator." }, drill: { jp: "しひょうを 一つ えらびます。", en: "We pick one indicator." }, accept: ["index", "metric", "yardstick"], hint: "しひょう is a number chosen to STAND FOR something bigger — which is why picking the wrong one quietly decides the answer." },
        { id: "ja-u158l1-gosa", type: "vocab", front: "ごさ", reading: "gosa", meaning: "margin of error", example: { jp: "ごさが 大きい ちょうさは、はんろんされやすいです。", en: "A survey with a large margin of error is easy to argue against." }, drill: { jp: "ごさが 小さい ほうが いいです。", en: "A smaller margin of error is better." }, accept: ["error", "discrepancy", "deviation"], hint: "gosa — 誤 (mistaken) + 差 (difference): the gap between the measurement and the truth. It is an expected, quantified gap, not a blunder; a blunder is さくご." },
        { id: "ja-u158l1-baratsuki", type: "vocab", front: "ばらつき", reading: "baratsuki", meaning: "spread", example: { jp: "へいきんは 同じでも、ばらつきが ぜんぜん ちがいます。", en: "The averages are the same, but the spread is completely different." }, drill: { jp: "ばらつきが ちがいます。", en: "The spread is different." }, accept: ["variation", "scatter", "unevenness"], hint: "The one word that stops an average from lying: two groups can share a へいきん and have nothing else in common." },
        { id: "ja-u158l1-suii", type: "vocab", front: "すいい", reading: "suii", meaning: "how it has moved", example: { jp: "一年の すいいを 見ると、少しずつ 下がって います。", en: "Looking at the movement over the year, it's edging down." }, drill: { jp: "すいいを しらべました。", en: "I looked into how it has moved." }, accept: ["trend", "transition", "change over time"], hint: "suii — 推 (push along) + 移 (shift): how a figure has travelled over time. It names the whole TRACK, not one change, so it pairs with 見る and しらべる rather than with なる." },
        { id: "ja-u158l1-tani", type: "vocab", front: "たんい", reading: "tani", meaning: "unit (of measure)", example: { jp: "たんいを 書かない 数字は、意味が 分かりません。", en: "A number written without its unit means nothing." }, drill: { jp: "たんいを 書いて ください。", en: "Please write the unit." }, accept: ["denomination", "measure", "credit (school)"], hint: "tan-i — 単 (single) + 位 (place): the single step a scale is counted in. It also works on groups — クラス単位 means by the class, taking the class as the unit." },
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
        { id: "ja-u158l2-bunken", type: "vocab", front: "ぶんけん", reading: "bunken", meaning: "the literature", example: { jp: "ぶんけんを 何十も 読んでから、やっと 書き始めました。", en: "I read dozens of papers before I finally started writing." }, drill: { jp: "ぶんけんを さがして います。", en: "I am searching the literature." }, accept: ["references", "sources", "written record"], hint: "bunken — 文 (writing) + 献 (offering): the written record a field has handed down. It means the BODY of published work, so one paper is a ろんぶん and all of them together are ぶんけん." },
        { id: "ja-u158l2-genten", type: "vocab", front: "げんてん", reading: "genten", meaning: "the original text", example: { jp: "ひきようが あやしい ときは、げんてんに あたります。", en: "When a quotation looks doubtful, I go to the original." }, drill: { jp: "げんてんを 読みました。", en: "I read the original text." }, accept: ["primary source", "the original", "the source text"], hint: "げんてん is the source itself, しゅってん is the note saying where it is. You cite a しゅってん; you check a げんてん." },
        { id: "ja-u158l2-chushutsu", type: "vocab", front: "ちゅうしゅつ", reading: "chūshutsu", meaning: "extraction", example: { jp: "ぼうだいな 記録から、ひつような ところだけ ちゅうしゅつしました。", en: "From a vast set of records, I extracted only the parts I needed." }, drill: { jp: "ちゅうしゅつに 時間が かかりました。", en: "The extraction took time." }, accept: ["to extract", "to pull out", "sampling"], hint: "chūshutsu — 抽 (draw out) + 出 (come out): pulling the part you want out of a larger set, which stays intact. You ちゅうしゅつする data, never a tooth." },
        { id: "ja-u158l2-bodai", type: "vocab", front: "ぼうだい", reading: "bōdai", meaning: "vast", example: { jp: "ぼうだいな しりょうが あっても、読まなければ 意味が ありません。", en: "However vast the materials, they mean nothing unread." }, drill: { jp: "ぼうだいに なりました。", en: "It has become vast." }, accept: ["enormous", "huge", "voluminous"], hint: "bōdai — 膨 (swell) + 大 (big): swollen out of all proportion. Reserved for amounts that are a PROBLEM because of their size — ぼうだいな しりょう is too much to read, not impressively much." },
        { id: "ja-u158l2-kansoku", type: "vocab", front: "かんそく", reading: "kansoku", meaning: "observation", example: { jp: "長い かんそくの 記録が あるので、へんかが よく 分かります。", en: "Because there is a long record of observation, the change is clear." }, drill: { jp: "かんそくを 始めました。", en: "We began observing." }, accept: ["to observe", "monitoring", "watching"], hint: "kansoku — 観 (look at) + 測 (measure): watching AND recording. Weather, stars, traffic. Plain 見る is just looking; かんそく implies instruments and a log you can go back to." },
        { id: "ja-u158l2-saigen", type: "vocab", front: "さいげん", reading: "saigen", meaning: "reproduction", example: { jp: "同じ けっかが さいげんできない けんきゅうは、信じられません。", en: "Research whose results can't be reproduced isn't believable." }, drill: { jp: "さいげんが できませんでした。", en: "It could not be reproduced." }, accept: ["to reproduce", "to replicate", "to recreate"], hint: "さいげん is the whole of what makes a result count in science: if nobody else can get it again, it did not happen." },
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
        { id: "ja-u158l3-kensho", type: "vocab", front: "けんしょう", reading: "kenshō", meaning: "verification", example: { jp: "新聞は その 話の けんしょうに 半年 かけました。", en: "The paper spent six months verifying that story." }, drill: { jp: "けんしょうに じかんが かかります。", en: "Verification takes time." }, accept: ["to verify", "examination", "fact-checking"], hint: "kenshō — 検 (inspect) + 証 (prove): testing a claim against evidence until it stands or falls. A newspaper けんしょうする a story; a researcher けんしょうする a hypothesis." },
        { id: "ja-u158l3-tekikaku", type: "vocab", front: "てきかく", reading: "tekikaku", meaning: "accurate", example: { jp: "てきかくな せつめいだったので、だれも 質問しませんでした。", en: "The explanation was accurate, so nobody asked anything." }, drill: { jp: "てきかくに せつめいします。", en: "I explain accurately." }, accept: ["precise", "apt", "to the point"], hint: "tekikaku — 的 (on target) + 確 (certain): hitting the mark exactly. 正しい only means not wrong; てきかく means precisely right for the situation, which is the higher bar." },
        { id: "ja-u158l3-genmitsu", type: "vocab", front: "げんみつ", reading: "genmitsu", meaning: "strict (rigorous and exact)", example: { jp: "げんみつに 言うと、この 言い方は 正しく ありません。", en: "Strictly speaking, this way of putting it isn't correct." }, drill: { jp: "げんみつに しらべました。", en: "I examined it rigorously." }, accept: ["rigorous", "exact", "precisely"], hint: "げんみつに 言うと is the standard way to open a correction politely — 'strictly speaking'." },
        { id: "ja-u158l3-sakugo", type: "vocab", front: "さくご", reading: "sakugo", meaning: "an error", example: { jp: "小さな さくごが、後で 大きな 問題に なりました。", en: "A small error turned into a big problem later." }, drill: { jp: "さくごが ありました。", en: "There was an error." }, accept: ["mistake", "slip", "miscalculation"], hint: "sakugo — 錯 (crossed up) + 誤 (mistaken): a mistake that came from things getting tangled. Unlike ごさ, which is expected and measured, a さくご should never have happened." },
        { id: "ja-u158l3-katayoru", type: "vocab", front: "かたよる", reading: "katayoru", meaning: "to be biased", example: { jp: "しりょうが かたよって いると、けっかも かたよります。", en: "If the materials are biased, the result is biased too." }, drill: { jp: "かたよるのは よく ありません。", en: "Being biased is not a good thing." }, accept: ["to lean", "to be one-sided", "to skew"], hint: "katayoru — 片 (one side) plus 寄る (to draw near): to lean to one side. Food too — かたよった 食事 is an unbalanced diet. The bias sits in the DISTRIBUTION, not in anyone's intent." },
        { id: "ja-u158l3-ozappa", type: "vocab", front: "おおざっぱ", reading: "ōzappa", meaning: "rough-and-ready", example: { jp: "おおざっぱな けいさんですが、だいたいの ところは 分かります。", en: "It's a rough calculation, but you get the general picture." }, drill: { jp: "おおざっぱに 言うと そうです。", en: "Roughly speaking, that is right." }, accept: ["approximate", "broad-brush", "sloppy"], hint: "ōzappa — 大 (big) plus ざっぱ from 雑 (rough). Coarse-grained but useful, not sloppy: an おおざっぱな けいさん is a deliberate approximation. Said of a person it turns mildly critical." },
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
        { id: "ja-u158l4-hendo", type: "vocab", front: "へんどう", reading: "hendō", meaning: "fluctuation", example: { jp: "ねだんの へんどうが 大きいので、店も こまって います。", en: "Prices fluctuate a lot, so the shops are struggling too." }, drill: { jp: "へんどうが おおきいです。", en: "The fluctuation is large." }, accept: ["to fluctuate", "variation", "shift"], hint: "hendō — 変 (change) + 動 (move): a figure travelling up and down over time. It is the movement itself, so へんどうが 大きい means volatile; a single change is へんか." },
        { id: "ja-u158l4-antei", type: "vocab", front: "あんてい", reading: "antei", meaning: "stability", example: { jp: "しごとが あんていして いるので、安心して 生活して います。", en: "My work is stable, so I live without worry." }, drill: { jp: "あんていが いちばん 大切です。", en: "Stability matters most of all." }, accept: ["steady", "stable", "settled"], hint: "antei — 安 (at ease) + 定 (fixed): fixed in a way that lets you relax. It covers income, weather and a chair's legs alike, and its negative ふあんてい is taught two cards later." },
        { id: "ja-u158l4-fuantei", type: "vocab", front: "ふあんてい", reading: "fuantei", meaning: "unstable", example: { jp: "天気が ふあんていな 日は、ふねが 出ません。", en: "On days when the weather is unstable, the boats don't sail." }, drill: { jp: "ふあんていに なりました。", en: "It became unstable." }, accept: ["unsteady", "precarious", "shaky"], hint: "fuantei — simply 不 (not) in front of あんてい. Of weather, of a job, of a stack of boxes. The one place it does NOT work is a person's mood: for that you want ふあん, anxiety." },
        { id: "ja-u158l4-yuragi", type: "vocab", front: "ゆらぎ", reading: "yuragi", meaning: "a slight wavering", example: { jp: "小さな ゆらぎは あっても、ぜんたいの すいいは 変わりません。", en: "There's slight wavering, but the overall trend is unchanged." }, drill: { jp: "ゆらぎが 少し あります。", en: "There is a slight wavering." }, accept: ["fluctuation", "wobble", "flicker"], hint: "yuragi — the noun built from the verb for swaying. Smaller than へんどう and with no direction to it: a ゆらぎ is noise around a trend, which is why it turns up next to すいい so often." },
        { id: "ja-u158l4-tsuriai", type: "vocab", front: "つりあい", reading: "tsuriai", meaning: "balance", example: { jp: "しごとと 休みの つりあいが とれて いません。", en: "The balance between work and rest isn't right." }, drill: { jp: "つりあいを とる ことが 大切です。", en: "Striking a balance is what matters." }, accept: ["equilibrium", "proportion", "harmony"], hint: "つりあい is everyday balance you can feel; きんこう is the formal, measurable kind — a report says きんこう, a person says つりあい." },
        { id: "ja-u158l4-kinko", type: "vocab", front: "きんこう", reading: "kinkō", meaning: "equilibrium", example: { jp: "入って くる お金と 出て いく お金の きんこうが 大切です。", en: "The equilibrium between money coming in and going out matters." }, drill: { jp: "きんこうが たいせつです。", en: "Equilibrium is important." }, accept: ["balance", "parity", "evenness"], hint: "kinkō — 均 (even) + 衡 (the beam of a scale): the scales sitting level. More technical than つりあい and used of systems — supply and demand, a budget, an ecosystem." },
      ],
    },
  ],
};
