// Unit 170 — ごい・N3・52 ("N3 vocab 52") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (tada: ただ/只/唯, tatsu: 建つ/経つ, tama: 玉/弾)
// disambiguated via hints.
export const UNIT170 = {
  id: "ja-u170", lang: "ja", title: "ごい・N3・52", order: 170, stage: "b1",
  lessons: [
    {
      id: "ja-u170l1", unit: 170, lesson: 1, title: "N3 vocab 52·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 助かる (to be saved), 助ける (to help), ただ (free), 只 (free), 唯 (mere), 戦い (battle).",
      items: [
        { id: "ja-u170l1-tasukaru", type: "vocab", front: "助かる", reading: "tasukaru", meaning: "to be saved", example: { jp: "あなたのおかげで助かりました。", en: "Thanks to you, I was saved." }, accept: ["to be helped", "to be rescued"] },
        { id: "ja-u170l1-tasukeru", type: "vocab", front: "助ける", reading: "tasukeru", meaning: "to help", example: { jp: "こまったひとを助けます。", en: "I help a person in trouble." }, accept: ["to save", "to rescue"] },
        { id: "ja-u170l1-tada", type: "vocab", front: "ただ", reading: "tada", meaning: "free", example: { jp: "これはただでもらいました。", en: "I got this for free." }, accept: ["free of charge", "just", "only"], hint: "ただ = free of charge; also \"just / only.\" Same reading as 只 and 唯." },
        { id: "ja-u170l1-tada2", type: "vocab", front: "只", reading: "tada", meaning: "free", example: { jp: "この本は只ではありません。", en: "This book is not free." }, accept: ["free of charge", "mere", "only"], hint: "只 (ただ) = free of charge; same reading as ただ and 唯." },
        { id: "ja-u170l1-tada3", type: "vocab", front: "唯", reading: "tada", meaning: "mere", example: { jp: "これが唯ひとつのほうほうです。", en: "This is the only method." }, accept: ["sole", "plain", "only"], hint: "唯 (ただ) = mere / only; same reading as ただ and 只." },
        { id: "ja-u170l1-tatakai", type: "vocab", front: "戦い", reading: "tatakai", meaning: "battle", example: { jp: "ながい戦いがおわりました。", en: "The long battle ended." }, accept: ["fight"] },
      ],
    },
    {
      id: "ja-u170l2", unit: 170, lesson: 2, title: "N3 vocab 52·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 戦う (to fight), 叩く (to strike), 直ちに (at once), 畳む (to fold), 立ち上がる (to stand up), 立場 (standpoint).",
      items: [
        { id: "ja-u170l2-tatakau", type: "vocab", front: "戦う", reading: "tatakau", meaning: "to fight", example: { jp: "へいたいがてきと戦います。", en: "The soldiers fight the enemy." }, accept: ["to compete", "to battle"] },
        { id: "ja-u170l2-tataku", type: "vocab", front: "叩く", reading: "tataku", meaning: "to strike", example: { jp: "ドアを叩きます。", en: "I knock on the door." }, accept: ["to beat", "to knock"] },
        { id: "ja-u170l2-tadachini", type: "vocab", front: "直ちに", reading: "tadachini", meaning: "at once", example: { jp: "直ちにいえにかえります。", en: "I go home at once." }, accept: ["immediately"] },
        { id: "ja-u170l2-tatamu", type: "vocab", front: "畳む", reading: "tatamu", meaning: "to fold", example: { jp: "あらったふくを畳みます。", en: "I fold the washed clothes." }, accept: ["to fold up"] },
        { id: "ja-u170l2-tachiagaru", type: "vocab", front: "立ち上がる", reading: "tachiagaru", meaning: "to stand up", example: { jp: "いすから立ち上がります。", en: "I stand up from the chair." }, accept: ["to rise", "to get up"] },
        { id: "ja-u170l2-tachiba", type: "vocab", front: "立場", reading: "tachiba", meaning: "standpoint", example: { jp: "わたしの立場をせつめいします。", en: "I explain my standpoint." }, accept: ["position", "situation"] },
      ],
    },
    {
      id: "ja-u170l3", unit: 170, lesson: 3, title: "N3 vocab 52·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 建つ (to be built), 経つ (to pass), 達する (to reach), だって (but), たっぷり (plenty), 谷 (valley).",
      items: [
        { id: "ja-u170l3-tatsu", type: "vocab", front: "建つ", reading: "tatsu", meaning: "to be built", example: { jp: "ここにあたらしいビルが建ちます。", en: "A new building will go up here." }, accept: ["to stand", "to erect"], hint: "建つ (たつ) = a building stands / is built; same reading as 経つ." },
        { id: "ja-u170l3-tatsu2", type: "vocab", front: "経つ", reading: "tatsu", meaning: "to pass", example: { jp: "あれからじかんが経ちました。", en: "Time has passed since then." }, accept: ["to elapse", "to go by"], hint: "経つ (たつ) = time passes; same reading as 建つ." },
        { id: "ja-u170l3-tassuru", type: "vocab", front: "達する", reading: "tassuru", meaning: "to reach", example: { jp: "とうとうゴールに達しました。", en: "At last I reached the goal." }, accept: ["to get to", "to attain"] },
        { id: "ja-u170l3-datte", type: "vocab", front: "だって", reading: "datte", meaning: "but", example: { jp: "だって、いきたくないです。", en: "But, I don't want to go." }, accept: ["because", "even"] },
        { id: "ja-u170l3-tappuri", type: "vocab", front: "たっぷり", reading: "tappuri", meaning: "plenty", example: { jp: "コップにみずをたっぷりいれます。", en: "I put plenty of water in the cup." }, accept: ["full", "ample", "a lot"] },
        { id: "ja-u170l3-tani", type: "vocab", front: "谷", reading: "tani", meaning: "valley", example: { jp: "谷にきれいなかわがあります。", en: "There is a beautiful river in the valley." }, accept: ["ravine"] },
      ],
    },
    {
      id: "ja-u170l4", unit: 170, lesson: 4, title: "N3 vocab 52·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 他人 (stranger), 足袋 (tabi socks), たびたび (often), 玉 (ball), 弾 (bullet), 騙す (to trick).",
      items: [
        { id: "ja-u170l4-tanin", type: "vocab", front: "他人", reading: "tanin", meaning: "stranger", example: { jp: "他人のことはきにしません。", en: "I don't worry about other people." }, accept: ["unrelated person", "others"] },
        { id: "ja-u170l4-tabi", type: "vocab", front: "足袋", reading: "tabi", meaning: "tabi socks", example: { jp: "きものに足袋をはきます。", en: "I wear tabi socks with a kimono." }, accept: ["japanese socks", "split-toe socks"] },
        { id: "ja-u170l4-tabitabi", type: "vocab", front: "たびたび", reading: "tabitabi", meaning: "often", example: { jp: "かれはたびたびちこくします。", en: "He is often late." }, accept: ["repeatedly", "frequently"] },
        { id: "ja-u170l4-tama", type: "vocab", front: "玉", reading: "tama", meaning: "ball", example: { jp: "こどもが玉をなげます。", en: "The child throws the ball." }, accept: ["sphere", "coin"], hint: "玉 (たま) = ball / sphere; same reading as 弾." },
        { id: "ja-u170l4-tama2", type: "vocab", front: "弾", reading: "tama", meaning: "bullet", example: { jp: "てっぽうの弾がとびます。", en: "The gun's bullet flies." }, accept: ["shot", "round"], hint: "弾 (たま) = bullet; same reading as 玉." },
        { id: "ja-u170l4-damasu", type: "vocab", front: "騙す", reading: "damasu", meaning: "to trick", example: { jp: "ひとを騙してはいけません。", en: "You must not trick people." }, accept: ["to cheat", "to deceive"] },
      ],
    },
  ],
};
