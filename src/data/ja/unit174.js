// Unit 174 — リスク・ふかくじつ (Risk and uncertainty) — B2 / JLPT N2
// ─────────────────────────────────────────────────────────────────────────────
// Block-2 house rules, applied to every unit in this block (174-191):
//   • Examples are MIXED SCRIPT, following block 1's u156 header. The learner has
//     568 glyphs by this unit; writing 意見 as いけん teaches them to read a form
//     nobody writes. Every kanji used is verified taught-at-or-before by
//     `npm run check:glyphs`, which is run before every commit, not at the end.
//   • Vocab fronts stay KANA, as in block 1's B2 units. That keeps the front a
//     typing target rather than a second reading test, and it keeps the check's
//     "unreadable fronts" count at zero by construction. Kanji fronts appear only
//     in the character units, as compounds built from glyphs just taught.
//   • Words are spaced, matching block 1 across both bands.
//   • Examples use ONLY the 568 glyphs taught before B2, plus glyphs this block
//     teaches at or before the unit in question. NOT block 1's 128: their
//     character units are stubs in this worktree, so nothing here can verify
//     where in u157-173 a given glyph of theirs lands. Restricting to 568 makes
//     the check reproducible in my own tree AND correct after any merge order.
//   • Every candidate front was checked against block 1 and block 3 by front,
//     reading, AND する-stem before it was written — the three axes that each
//     caught real duplicates in B1. B1's block 3 skipped this and lost 65 cards
//     at merge.
// ─────────────────────────────────────────────────────────────────────────────
// The arc: measure the risk → admit what you can't know → say how worried you are
// → prepare anyway. B2's job here is the vocabulary of hedged claims about the
// future, which is what separates "it might rain" from "the probability is low
// but the downside is severe."
export const UNIT174 = {
  id: "ja-u174",
  lang: "ja",
  title: "リスク・ふかくじつ",
  order: 174,
  stage: "b2",
  lessons: [
    {
      id: "ja-u174l1",
      unit: 174,
      lesson: 1,
      title: "Sizing a risk",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Put a number or a bound on a risk instead of just calling it dangerous: リスク かくりつ きけんせい しさん よそく ぜんてい.",
      items: [
        { id: "ja-u174l1-risuku", type: "vocab", front: "リスク", reading: "risuku", meaning: "risk", example: { jp: "その 計画は りえきも 大きいですが、リスクも 同じくらい 大きいです。", en: "That plan has large returns, but the risk is just as large." }, accept: ["exposure", "downside", "a risk"] },
        { id: "ja-u174l1-kakuritsu", type: "vocab", front: "かくりつ", reading: "kakuritsu", meaning: "probability", example: { jp: "雨の かくりつは 低いので、かさは 持って 行きません。", en: "The probability of rain is low, so I won't take an umbrella." }, accept: ["chance", "likelihood", "odds"] },
        { id: "ja-u174l1-kikensei", type: "vocab", front: "きけんせい", reading: "kikensei", meaning: "the degree of danger", example: { jp: "この 薬は きけんせいが 低いと 言われて います。", en: "This drug is said to carry a low degree of danger." }, accept: ["riskiness", "hazard level", "how dangerous it is"], hint: "きけん is the danger itself; きけんせい is HOW MUCH of it there is — the ～せい turns a state into a measurable property." },
        { id: "ja-u174l1-shisan", type: "vocab", front: "しさん", reading: "shisan", meaning: "a rough estimate", example: { jp: "しさんでは 三年 かかりますが、もっと 早く 終わるかも しれません。", en: "By rough estimate it takes three years, though it may finish sooner." }, accept: ["trial calculation", "working figure", "estimate"] },
        { id: "ja-u174l1-yosoku", type: "vocab", front: "よそく", reading: "yosoku", meaning: "a forecast", example: { jp: "今年の よそくは 外れましたが、大きな 方向は 正しかったです。", en: "This year's forecast was off, though the direction was right." }, accept: ["prediction", "projection", "to forecast"] },
        { id: "ja-u174l1-zentei", type: "vocab", front: "ぜんてい", reading: "zentei", meaning: "premise", example: { jp: "人が 集まる ことを ぜんていに して、席を 用意しました。", en: "We prepared the seats on the premise that people would gather." }, accept: ["assumption", "given", "precondition"] },
      ],
    },
    {
      id: "ja-u174l2",
      unit: 174,
      lesson: 2,
      title: "What you cannot know",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say plainly which part of a claim is unknown, and how far you would push it: ふかくじつ そうてい よち みきわめ だとう ひていてき.",
      items: [
        { id: "ja-u174l2-fukakujitsu", type: "vocab", front: "ふかくじつ", reading: "fukakujitsu", meaning: "uncertain", example: { jp: "来年の ことは まだ ふかくじつなので、今 決めたく ありません。", en: "Next year is still uncertain, so I don't want to decide now." }, accept: ["unsettled", "not definite", "up in the air"] },
        { id: "ja-u174l2-sotei", type: "vocab", front: "そうてい", reading: "sōtei", meaning: "the case assumed", example: { jp: "この 建物は 強い 地しんを そうていして 作られました。", en: "This building was built assuming a strong earthquake." }, accept: ["hypothesis", "what was allowed for", "to envisage"], hint: "そうてい is the case you BUILD FOR; ぜんてい is the case you ARGUE FROM. 想定外 = outside what anyone allowed for." },
        { id: "ja-u174l2-yochi", type: "vocab", front: "よち", reading: "yochi", meaning: "room for", example: { jp: "その 説明には まだ 考える よちが あると 思います。", en: "I think there is still room to think about that explanation." }, accept: ["scope", "leeway", "margin"] },
        { id: "ja-u174l2-mikiwame", type: "vocab", front: "みきわめ", reading: "mikiwame", meaning: "judging it for certain", example: { jp: "みきわめが つくまで、答えは 出さない ことに しました。", en: "We decided not to give an answer until we can judge it for certain." }, accept: ["discernment", "making sure", "a firm read"] },
        { id: "ja-u174l2-dato", type: "vocab", front: "だとう", reading: "datō", meaning: "reasonable", example: { jp: "その 数字は だとうだと 多くの 人が 考えて います。", en: "Many people accept that figure as reasonable." }, accept: ["valid", "appropriate", "defensible"] },
        { id: "ja-u174l2-hiteiteki", type: "vocab", front: "ひていてき", reading: "hiteiteki", meaning: "negative (in stance)", example: { jp: "みんな ひていてきでしたが、はっきり 反対とは 言いませんでした。", en: "Everyone was negative about it, but nobody said they opposed it outright." }, drill: { jp: "ひていてきに なりました。", en: "It became negative." }, accept: ["dismissive", "unfavourable", "sceptical"] },
      ],
    },
    {
      id: "ja-u174l3",
      unit: 174,
      lesson: 3,
      title: "Worry and resolve",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Register concern at the right strength, from a passing worry to accepting the worst: けねん おそれ かくご ゆだん ようじん さいあく.",
      items: [
        { id: "ja-u174l3-kenen", type: "vocab", front: "けねん", reading: "kenen", meaning: "a standing concern", example: { jp: "人が 足りない ことが けねんされて いましたが、なんとか なりました。", en: "There had been concern about being short-handed, but we managed." }, accept: ["misgiving", "apprehension", "worry about"], hint: "けねん is a concern held in advance and usually said of others' worry; しんぱい is your own, felt now." },
        { id: "ja-u174l3-osore", type: "vocab", front: "おそれ", reading: "osore", meaning: "the risk that", example: { jp: "強い 風で 木が たおれる おそれが あります。", en: "There is a risk of trees coming down in the strong wind." }, accept: ["fear that", "danger of", "liable to"] },
        { id: "ja-u174l3-kakugo", type: "vocab", front: "かくご", reading: "kakugo", meaning: "being prepared for the worst", example: { jp: "負ける かくごで 出ましたが、けっきょく 勝ちました。", en: "I went in prepared to lose, and ended up winning." }, drill: { jp: "かくごが できました。", en: "I am prepared for the worst." }, accept: ["resolve", "readiness", "steeling oneself"] },
        { id: "ja-u174l3-yudan", type: "vocab", front: "ゆだん", reading: "yudan", meaning: "letting your guard down", example: { jp: "点を 取った あとに ゆだんして、すぐ 返されました。", en: "We let our guard down after scoring, and were pegged back at once." }, accept: ["carelessness", "complacency", "an unguarded moment"] },
        { id: "ja-u174l3-yojin", type: "vocab", front: "ようじん", reading: "yōjin", meaning: "taking care", example: { jp: "夜 一人で 歩く ときは ようじんして ください。", en: "Please take care when you walk alone at night." }, accept: ["caution", "watching out", "being careful"] },
        { id: "ja-u174l3-saiaku", type: "vocab", front: "さいあく", reading: "saiaku", meaning: "the worst case", example: { jp: "さいあくの ばあいでも、家族は 安全な 所に います。", en: "Even in the worst case, my family is somewhere safe." }, accept: ["worst", "at worst", "the worst of it"] },
      ],
    },
    {
      id: "ja-u174l4",
      unit: 174,
      lesson: 4,
      title: "Preparing anyway",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the preparation a risk justifies, and what it costs if you are wrong: そなえ きき まんがいち そんしつ ばんぜん あんぜんせい.",
      items: [
        { id: "ja-u174l4-sonae", type: "vocab", front: "そなえ", reading: "sonae", meaning: "provision made in advance", example: { jp: "地しんへの そなえとして、水と 食べ物を 家に 置いて います。", en: "As provision against an earthquake, I keep water and food at home." }, drill: { jp: "そなえが たいせつです。", en: "Provision in advance is important." }, accept: ["preparedness", "standing ready", "what is laid in"] },
        { id: "ja-u174l4-kiki", type: "vocab", front: "きき", reading: "kiki", meaning: "a crisis", example: { jp: "会社は 一度 ききを むかえましたが、社員は だれも やめませんでした。", en: "The company faced a crisis once, but not one employee left." }, drill: { jp: "ききを むかえました。", en: "It faced a crisis." }, accept: ["emergency", "critical moment", "grave situation"] },
        { id: "ja-u174l4-mangaichi", type: "vocab", front: "まんがいち", reading: "mangaichi", meaning: "in the unlikely event", example: { jp: "まんがいち 電車が 止まっても、歩いて 帰れます。", en: "In the unlikely event the trains stop, I can walk home." }, accept: ["just in case", "should the worst happen", "if by any chance"] },
        { id: "ja-u174l4-sonshitsu", type: "vocab", front: "そんしつ", reading: "sonshitsu", meaning: "a financial loss", example: { jp: "その 年の そんしつは 大きかったですが、つぎの 年に もどしました。", en: "That year's loss was large, but we made it back the following year." }, drill: { jp: "そんしつが おおきいです。", en: "The loss is large." }, accept: ["losses", "a deficit", "damage to the books"] },
        { id: "ja-u174l4-banzen", type: "vocab", front: "ばんぜん", reading: "banzen", meaning: "leaving nothing to chance", example: { jp: "ばんぜんの じゅんびを して、その日を むかえました。", en: "We prepared for every eventuality and then the day came." }, accept: ["thorough", "airtight", "all bases covered"] },
        { id: "ja-u174l4-anzensei", type: "vocab", front: "あんぜんせい", reading: "anzensei", meaning: "how safe something is", example: { jp: "新しい 車の あんぜんせいは、前の 型より ずっと 高いです。", en: "The new car's safety is far higher than the previous model's." }, accept: ["safety level", "security", "how safe it is"] },
      ],
    },
  ],
};
