// JA Unit 134 — かんじ・N3・19 (N3 kanji, set 19) — B1 / JLPT N3
// Glyph ownership and card shape are documented in unit119.js: slice 19 of the
// 20-way split of the untaught N3 pool, 4 lessons x (4 kanji + 2 compound).
//
// Documented scope exception, lesson 2: 容 has no everyday compound that avoids 内,
// which this corpus has never taught at any band. 内容 is the word a B1 learner
// actually meets, so it is used here and 内 is the second and last glyph in this
// block appearing in an example before it is taught (the other is 易, unit 130).
export const UNIT134 = {
  id: "ja-u134",
  lang: "ja",
  title: "かんじ・N3・19",
  order: 134,
  stage: "b1",
  lessons: [
    {
      id: "ja-u134l1",
      unit: 134,
      lesson: 1,
      title: "Sending, beforehand, left over",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 輸 (transport), 予 (beforehand), 余 (surplus), 預 (deposit), and the words 余分 and 預金.",
      items: [
        { id: "ja-u134l1-yu", type: "kanji", front: "輸", reading: "yu", meaning: "transport", example: { jp: "車を輸出する会社ですが、社員は少ないです。", en: "It's a company that exports cars, but it has few staff." }, accept: ["ship", "convey", "export/import"], hint: "輸 = 車 (vehicle) carrying goods away. 輸出 = export (out), 輸入 = import (in)." },
        { id: "ja-u134l1-yo", type: "kanji", front: "予", reading: "yo", meaning: "beforehand", example: { jp: "予習をしてから、学校へ行きます。", en: "I do the preparation first, and then go to school." }, accept: ["in advance", "pre-", "anticipate"], hint: "予 = doing a thing ahead of the thing itself. 予習 = pre-study, 予定 = a plan, 予約 = a booking." },
        { id: "ja-u134l1-amaru", type: "kanji", front: "余", reading: "yo", meaning: "surplus", example: { jp: "お金が余りましたが、使わずに置いておきます。", en: "Money was left over, but I'll put it aside without spending it." }, accept: ["left over", "excess", "spare"], hint: "余 = what remains after everything is shared out. 余分 = spare, 余り = the remainder. Same よ sound as 予." },
        { id: "ja-u134l1-azukeru", type: "kanji", front: "預", reading: "yo", meaning: "deposit", example: { jp: "お金を預けてから、家に帰りました。", en: "I deposited the money, and then went home." }, accept: ["entrust", "leave with", "keep for"], hint: "預 = 予 (beforehand) + 頁 (head) — leaving something in another's keeping until later. 預金 = savings in a bank." },
        { id: "ja-u134l1-yobun", type: "vocab", front: "余分", reading: "yobun", meaning: "spare", example: { jp: "余分に買いましたが、けっきょく使いませんでした。", en: "I bought a spare, but in the end I didn't use it." }, accept: ["extra", "surplus", "more than needed"] },
        { id: "ja-u134l1-yokin", type: "vocab", front: "預金", reading: "yokin", meaning: "savings", example: { jp: "預金は少ないですが、しゃっきんもありません。", en: "My savings are small, but I have no debt either." }, accept: ["bank deposit", "money in the bank"] },
      ],
    },
    {
      id: "ja-u134l2",
      unit: 134,
      lesson: 2,
      title: "Contents, manner, wanting",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 容 (contain), 様 (manner), 養 (nourish), 欲 (want), and the words 教養 and 食欲.",
      items: [
        { id: "ja-u134l2-yocontain", type: "kanji", front: "容", reading: "yō", meaning: "contain", example: { jp: "この本の内容は難しいですが、面白いです。", en: "The contents of this book are difficult, but interesting." }, accept: ["capacity", "form", "accept"], hint: "容 = a roof over a space with room inside. 内容 = the contents, 容器 = a container." },
        { id: "ja-u134l2-sama", type: "kanji", front: "様", reading: "sama", meaning: "manner", example: { jp: "同じ様に作りましたが、味がちがいます。", en: "I made it the same way, but the taste is different." }, accept: ["way", "appearance", "Mr/Ms (polite)"], hint: "様 = the way a thing is or appears. 田中様 = Mr/Ms Tanaka, one step politer than さん; 様子 = how things look." },
        { id: "ja-u134l2-yashinau", type: "kanji", front: "養", reading: "yō", meaning: "nourish", example: { jp: "家族を養うために、朝早くから仕事をしています。", en: "To support my family, I work from early in the morning." }, accept: ["support", "bring up", "cultivate"], hint: "養 = 食 (food) given to keep something growing. 養います = to support or raise, 教養 = cultivation of the mind." },
        { id: "ja-u134l2-hoshii", type: "kanji", front: "欲", reading: "yoku", meaning: "want", example: { jp: "新しい車が欲しいですが、お金が足りません。", en: "I want a new car, but I don't have enough money." }, accept: ["desire", "greed", "would like"], hint: "欲 = 谷 (valley) + 欠 (open mouth) — a hunger with no bottom. 欲しい = want (for things), 食欲 = appetite." },
        { id: "ja-u134l2-kyoyo", type: "vocab", front: "教養", reading: "kyōyō", meaning: "cultivation", example: { jp: "教養は仕事の役に立ちませんが、話が広くなります。", en: "Cultivation isn't much use for work, but it broadens your conversation." }, accept: ["culture", "refinement", "being well-read"] },
        { id: "ja-u134l2-shokuyoku", type: "vocab", front: "食欲", reading: "shokuyoku", meaning: "appetite", example: { jp: "食欲がありませんでしたが、少し食べたら元気になりました。", en: "I had no appetite, but I felt better once I'd eaten a little." }, accept: ["hunger", "desire to eat"] },
      ],
    },
    {
      id: "ja-u134l3",
      unit: 134,
      lesson: 3,
      title: "Relying, falling, disorder",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 頼 (rely on), 落 (fall), 乱 (disorder), 卵 (egg), and the words 落語 and 生卵.",
      items: [
        { id: "ja-u134l3-tanomu", type: "kanji", front: "頼", reading: "rai", meaning: "rely on", example: { jp: "友だちに頼みましたが、まだ答えがありません。", en: "I asked a friend, but there's still no answer." }, accept: ["request", "count on", "ask a favour"], hint: "頼 = 束 (bundle) + 頁 (head) — putting your load on someone else's shoulders. 頼みます = to ask a favour." },
        { id: "ja-u134l3-ochiru", type: "kanji", front: "落", reading: "raku", meaning: "fall", example: { jp: "本が上から落ちましたが、こわれませんでした。", en: "A book fell from above, but it wasn't damaged." }, accept: ["drop", "come down", "fail"], hint: "落 = 艹 (leaves) coming down with the 氵 rain. 落ちます = to fall; 落とします = to drop something." },
        { id: "ja-u134l3-midareru", type: "kanji", front: "乱", reading: "ran", meaning: "disorder", example: { jp: "風で紙が乱れましたが、すぐ直しました。", en: "The papers were thrown into disorder by the wind, but I tidied them at once." }, accept: ["chaos", "be in a mess", "riot"], hint: "乱 = threads all tangled at once. 乱れます = to fall into disorder, 乱ぼう = violent behaviour." },
        { id: "ja-u134l3-tamago", type: "kanji", front: "卵", reading: "tamago", meaning: "egg", example: { jp: "朝は卵を食べますが、夜は魚が多いです。", en: "I eat eggs in the morning, but in the evening it's mostly fish." }, accept: ["an egg", "spawn"], hint: "卵 = two eggs with the yolk marked inside. 生卵 = a raw egg — the everyday one in Japan." },
        { id: "ja-u134l3-rakugo", type: "vocab", front: "落語", reading: "rakugo", meaning: "comic storytelling", example: { jp: "落語は聞くのが難しいですが、分かるととても面白いです。", en: "Rakugo is hard to follow, but it's very funny once you understand it." }, accept: ["Japanese comic storytelling", "sit-down comedy"] },
        { id: "ja-u134l3-namatamago", type: "vocab", front: "生卵", reading: "namatamago", meaning: "raw egg", example: { jp: "生卵をごはんにかけますが、外国の人はおどろきます。", en: "We put a raw egg on rice, but people from abroad are surprised." }, accept: ["uncooked egg"] },
      ],
    },
    {
      id: "ja-u134l4",
      unit: 134,
      lesson: 4,
      title: "Advantage, land, rules",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 利 (advantage), 陸 (land), 律 (rule), 略 (abbreviate), and the words 有利 and 陸上.",
      items: [
        { id: "ja-u134l4-ri", type: "kanji", front: "利", reading: "ri", meaning: "advantage", example: { jp: "この道は近くて便利ですが、車が多いです。", en: "This road is near and convenient, but there's a lot of traffic." }, accept: ["benefit", "profit", "gain"], hint: "利 = 禾 (grain) + 刂 (blade) — a sharp tool that pays off. 便利 = convenient, 利用 = making use of." },
        { id: "ja-u134l4-riku", type: "kanji", front: "陸", reading: "riku", meaning: "land", example: { jp: "長い旅の後で陸が見えたので、みんな元気になりました。", en: "Land came into sight after the long journey, so everyone cheered up." }, accept: ["dry land", "shore", "continent"], hint: "陸 = 阝 (raised ground) — the solid part, as opposed to 海. 大陸 = a continent, 陸上 = track and field." },
        { id: "ja-u134l4-ritsu", type: "kanji", front: "律", reading: "ritsu", meaning: "rule", example: { jp: "自律できる人は強いですが、そう多くはありません。", en: "People capable of self-discipline are strong, but there aren't many of them." }, accept: ["law", "discipline", "rhythm"], hint: "律 = a rule you walk 彳 by. 法律 = the law, 自律 = self-discipline." },
        { id: "ja-u134l4-ryaku", type: "kanji", front: "略", reading: "ryaku", meaning: "abbreviate", example: { jp: "長い名前を略しましたが、みんな分かりました。", en: "I shortened the long name, but everyone understood." }, accept: ["shorten", "omit", "outline"], hint: "略 = 田 (a field) + 各 — taking a shortcut across. 省略 = leaving out, 略します = to abbreviate." },
        { id: "ja-u134l4-yuri", type: "vocab", front: "有利", reading: "yūri", meaning: "advantageous", example: { jp: "先に始めたほうが有利ですが、じゅんびは大切です。", en: "Starting first is advantageous, but preparation matters." }, accept: ["favourable", "in one's favour", "an advantage"] },
        { id: "ja-u134l4-rikujo", type: "vocab", front: "陸上", reading: "rikujō", meaning: "track and field", example: { jp: "高校で陸上をしていましたが、今は走りません。", en: "I did track and field at high school, but I don't run now." }, accept: ["athletics", "on land", "ground-based"] },
      ],
    },
  ],
};
