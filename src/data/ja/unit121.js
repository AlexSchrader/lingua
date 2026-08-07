// JA Unit 121 — かんじ・N3・12 (N3 kanji, set 12) — B1 / JLPT N3
// Glyph ownership and card shape are documented in unit119.js: slice 12 of the
// pool that remains once block 1's authored 160 glyphs are subtracted.
//
// 規 was swapped out of this slice for 積 and moved to u128. 規 has no everyday
// compound that avoids 則 (規則) or 模 (規模), and 則 sits in u128 — a later unit,
// so u121 could not have used it. Moving the glyph to sit beside 則 is in-lane and
// costs nothing; the alternative was another documented scope exception.
export const UNIT121 = {
  id: "ja-u121",
  lang: "ja",
  title: "かんじ・N3・12",
  order: 121,
  stage: "b1",
  lessons: [
    {
      id: "ja-u121l1",
      unit: 121,
      lesson: 1,
      title: "Waking, hanging, living",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 覚 (remember), 掛 (hang), 活 (lively), 寒 (cold), and the words 活動 and 覚書.",
      items: [
        { id: "ja-u121l1-oboeru", type: "kanji", front: "覚", reading: "kaku", meaning: "remember", example: { jp: "日本語をたくさん覚えましたが、話すのはまだ下手です。", en: "I've learned a lot of Japanese, but I'm still poor at speaking." }, accept: ["memorize", "wake up", "sense"], hint: "覚 = seeing 見 with the mind. 覚えます = to learn or remember; 目が覚めます = to wake up." },
        { id: "ja-u121l1-kakeru", type: "kanji", front: "掛", reading: "kake", meaning: "hang", example: { jp: "かべにとけいを掛けましたが、少しまがっています。", en: "I hung a clock on the wall, but it's slightly crooked." }, accept: ["hang up", "put on", "cost"], hint: "掛 = 扌 (hand) putting something up on a hook. Also 時間が掛かります = it takes time." },
        { id: "ja-u121l1-katsu", type: "kanji", front: "活", reading: "katsu", meaning: "lively", example: { jp: "毎日活動していますが、つかれはありません。", en: "I'm active every day, but I'm not tired." }, accept: ["living", "active", "vigour"], hint: "活 = 氵 (water) + 舌 (tongue) — moving, wet, alive. 生活 = daily life, 活動 = activity." },
        { id: "ja-u121l1-samui", type: "kanji", front: "寒", reading: "kan", meaning: "cold", example: { jp: "今日は寒いですが、風がないので楽です。", en: "It's cold today, but there's no wind so it's bearable." }, accept: ["chilly", "freezing"], hint: "寒 = a house 宀 packed with straw against the ice below. 寒い is cold WEATHER; つめたい is cold to the touch." },
        { id: "ja-u121l1-katsudo", type: "vocab", front: "活動", reading: "katsudō", meaning: "activity", example: { jp: "その活動は楽しいですが、時間がかかります。", en: "That activity is fun, but it takes time." }, accept: ["action", "being active", "operations"] },
        { id: "ja-u121l1-oboegaki", type: "vocab", front: "覚書", reading: "oboegaki", meaning: "a memo", example: { jp: "覚書をのこしましたが、あとで読めませんでした。", en: "I left myself a memo, but later I couldn't read it." }, accept: ["note", "memorandum", "jotting"] },
      ],
    },
    {
      id: "ja-u121l2",
      unit: 121,
      lesson: 2,
      title: "Complete, managed, connected",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 完 (complete), 管 (pipe), 簡 (simple), 関 (relate), and the words 関東 and 関わり.",
      items: [
        { id: "ja-u121l2-kan", type: "kanji", front: "完", reading: "kan", meaning: "complete", example: { jp: "しごとは完りょうしましたが、まだ見せていません。", en: "The job is complete, but I haven't shown it to anyone yet." }, accept: ["finish", "perfect", "conclude"], hint: "完 = 宀 (a roof) finished off over 元 — the building is done. 完りょう = completion." },
        { id: "ja-u121l2-kuda", type: "kanji", front: "管", reading: "kan", meaning: "pipe", example: { jp: "水の管が古いので、来月かえます。", en: "The water pipe is old, so we're replacing it next month." }, accept: ["tube", "manage", "control"], hint: "管 = 竹 (bamboo) hollowed out. It also means to have charge of something — a pipe carries what passes through it." },
        { id: "ja-u121l2-kantan", type: "kanji", front: "簡", reading: "kan", meaning: "simple", example: { jp: "せつめいは簡たんでしたが、じっさいはむずかしかったです。", en: "The explanation was simple, but in practice it was hard." }, accept: ["brief", "concise", "plain"], hint: "簡 = 竹 (bamboo) writing strips with only a little on them. 簡単 = simple. Same かん as 完 and 管." },
        { id: "ja-u121l2-kankei", type: "kanji", front: "関", reading: "kan", meaning: "relate", example: { jp: "その話に関して、意見はありません。", en: "Regarding that matter, I have no opinion." }, accept: ["concern", "connection", "barrier"], hint: "関 = 門 (a gate) — originally the checkpoint between provinces, hence what connects one thing to another. 関東 = the Kantō region." },
        { id: "ja-u121l2-kanto", type: "vocab", front: "関東", reading: "kantō", meaning: "the Kanto region", example: { jp: "関東に住んでいますが、生まれは西です。", en: "I live in the Kantō region, but I was born in the west." }, accept: ["Kanto", "eastern Japan"] },
        { id: "ja-u121l2-kakawari", type: "vocab", front: "関わり", reading: "kakawari", meaning: "involvement", example: { jp: "その仕事との関わりは長いですが、まだ分からないことがあります。", en: "My involvement with that work goes back a long way, but there are still things I don't know." }, accept: ["connection", "having to do with", "a tie"] },
      ],
    },
    {
      id: "ja-u121l3",
      unit: 121,
      lesson: 3,
      title: "Counting, stacking, worth",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 幾 (how many), 機 (opportunity), 積 (pile up), 貴 (precious), and the words 貴重 and 動機.",
      items: [
        { id: "ja-u121l3-iku", type: "kanji", front: "幾", reading: "iku", meaning: "how many", example: { jp: "幾つかえらびましたが、まだきめていません。", en: "I picked out several, but I haven't decided yet." }, accept: ["some", "several", "how much"], hint: "幾つ = how many, 幾ら = how much — the written forms of いくつ and いくら." },
        { id: "ja-u121l3-ki", type: "kanji", front: "機", reading: "ki", meaning: "opportunity", example: { jp: "動機は分かりませんが、けっかは大きかったです。", en: "The motive isn't clear, but the consequences were large." }, accept: ["machine", "occasion", "chance"], hint: "機 = 木 (wood) + 幾 — a loom, the machine that catches the right moment. Both 'machine' and 'the moment for something'." },
        { id: "ja-u121l3-tsumu", type: "kanji", front: "積", reading: "seki", meaning: "pile up", example: { jp: "本がたくさん積んでありますが、読む時間がありません。", en: "There are a lot of books piled up, but I've no time to read them." }, accept: ["accumulate", "stack", "load"], hint: "積 = 禾 (grain) heaped higher and higher. 面積 = area, 積もります = to pile up, of snow." },
        { id: "ja-u121l3-toutoi", type: "kanji", front: "貴", reading: "ki", meaning: "precious", example: { jp: "貴重な話を聞きましたが、書くのをわすれました。", en: "I heard something valuable, but I forgot to write it down." }, accept: ["valuable", "noble", "your (formal)"], hint: "貴 = 貝 (money) held up in both hands. 貴重 = precious. Same き sound as 機." },
        { id: "ja-u121l3-kicho", type: "vocab", front: "貴重", reading: "kichō", meaning: "precious", example: { jp: "貴重なものですが、お金のねうちはありません。", en: "It's precious to me, but it has no monetary worth." }, accept: ["valuable", "priceless", "worth a lot"] },
        { id: "ja-u121l3-doki", type: "vocab", front: "動機", reading: "dōki", meaning: "motive", example: { jp: "動機はよかったですが、やり方がまちがっていました。", en: "The motive was good, but the method was wrong." }, accept: ["motivation", "reason for doing", "what drove them"] },
      ],
    },
    {
      id: "ja-u121l4",
      unit: 121,
      lesson: 4,
      title: "Guests, asking, bans",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 客 (guest), 求 (seek), 曲 (tune), 禁 (forbid), and the words 作曲 and 求職.",
      items: [
        { id: "ja-u121l4-kyaku", type: "kanji", front: "客", reading: "kyaku", meaning: "guest", example: { jp: "客が多い日は、店はとてもいそがしいです。", en: "On days with many customers, the shop is very busy." }, accept: ["customer", "visitor", "passenger"], hint: "客 = 宀 (a roof) + 各 — someone who has come under your roof from elsewhere. お客さん = customer or guest." },
        { id: "ja-u121l4-motomeru", type: "kanji", front: "求", reading: "kyū", meaning: "seek", example: { jp: "答えを求めましたが、だれも教えてくれませんでした。", en: "I sought an answer, but nobody would tell me." }, accept: ["request", "demand", "look for"], hint: "求 = reaching out for something with both hands. 求人 = a job advert: seeking people." },
        { id: "ja-u121l4-kyoku", type: "kanji", front: "曲", reading: "kyoku", meaning: "tune", example: { jp: "この曲は古いですが、いまでも人気があります。", en: "This tune is old, but it's still popular today." }, accept: ["piece of music", "bend", "song"], hint: "曲 = something bent out of straight — a curve, and by extension a melody line. 作曲 = composing." },
        { id: "ja-u121l4-kin", type: "kanji", front: "禁", reading: "kin", meaning: "forbid", example: { jp: "駅は禁煙ですが、外にはすう所があります。", en: "The station is non-smoking, but there's a place to smoke outside." }, accept: ["prohibit", "ban", "abstain"], hint: "禁 = 林 (a grove) + 示 (an altar) — sacred ground you may not enter. 禁煙 = no smoking." },
        { id: "ja-u121l4-sakkyoku", type: "vocab", front: "作曲", reading: "sakkyoku", meaning: "composing", example: { jp: "作曲はすきですが、聞かせるのははずかしいです。", en: "I like composing, but I'm embarrassed to let anyone hear it." }, accept: ["writing music", "composition"] },
        { id: "ja-u121l4-kyushoku", type: "vocab", front: "求職", reading: "kyūshoku", meaning: "job-hunting", example: { jp: "求職中ですが、あせってはいません。", en: "I'm looking for work, but I'm not panicking." }, accept: ["seeking employment", "job search"] },
      ],
    },
  ],
};
