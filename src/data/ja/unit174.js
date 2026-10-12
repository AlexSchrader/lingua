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
        { id: "ja-u174l1-risuku", type: "vocab", front: "リスク", reading: "risuku", meaning: "risk", example: { jp: "その 計画は りえきも 大きいですが、リスクも 同じくらい 大きいです。", en: "That plan has large returns, but the risk is just as large." }, drill: { jp: "リスクを とります。", en: "We take the risk." }, accept: ["exposure", "downside", "a risk"], hint: "risuku — the English loan, and in business talk it has displaced きけん. きけん is danger you can see; リスク is a calculated chance of loss, which is why it goes with 取る and はかる." },
        { id: "ja-u174l1-kakuritsu", type: "vocab", front: "かくりつ", reading: "kakuritsu", meaning: "probability", example: { jp: "雨の かくりつは 低いので、かさは 持って 行きません。", en: "The probability of rain is low, so I won't take an umbrella." }, drill: { jp: "かくりつが 低いです。", en: "The probability is low." }, accept: ["chance", "likelihood", "odds"], hint: "kakuritsu — 確 (certain) + 率 (rate): the rate of certainty. It is a figure between zero and one, so it takes 高い and 低い, never 多い. わりあい is any proportion; かくりつ is of a chance." },
        { id: "ja-u174l1-kikensei", type: "vocab", front: "きけんせい", reading: "kikensei", meaning: "the degree of danger", example: { jp: "この 薬は きけんせいが 低いと 言われて います。", en: "This drug is said to carry a low degree of danger." }, drill: { jp: "きけんせいが あります。", en: "There is a degree of danger." }, accept: ["riskiness", "hazard level", "how dangerous it is"], hint: "きけん is the danger itself; きけんせい is HOW MUCH of it there is — the ～せい turns a state into a measurable property." },
        { id: "ja-u174l1-shisan", type: "vocab", front: "しさん", reading: "shisan", meaning: "a rough estimate", example: { jp: "しさんでは 三年 かかりますが、もっと 早く 終わるかも しれません。", en: "By rough estimate it takes three years, though it may finish sooner." }, drill: { jp: "しさんを 出しました。", en: "We produced a rough estimate." }, accept: ["trial calculation", "working figure", "estimate"], hint: "shisan — 試 (try) + 算 (calculate): a trial calculation rather than the final one. It commits you to nothing, which is precisely why a planner leads with a しさん." },
        { id: "ja-u174l1-yosoku", type: "vocab", front: "よそく", reading: "yosoku", meaning: "a forecast", example: { jp: "今年の よそくは 外れましたが、大きな 方向は 正しかったです。", en: "This year's forecast was off, though the direction was right." }, drill: { jp: "よそくが 外れました。", en: "The forecast was off." }, accept: ["prediction", "projection", "to forecast"], hint: "yosoku — 予 (beforehand) + 測 (measure): measuring in advance. 予報 is the weather forecast specifically; よそく is any prediction, and 外れる is the verb for one that misses." },
        { id: "ja-u174l1-zentei", type: "vocab", front: "ぜんてい", reading: "zentei", meaning: "premise", example: { jp: "人が 集まる ことを ぜんていに して、席を 用意しました。", en: "We prepared the seats on the premise that people would gather." }, drill: { jp: "ぜんていが ちがいます。", en: "The premise is different." }, accept: ["assumption", "given", "precondition"], hint: "zentei — 前 (before) + 提 (put forward): what is put forward first and taken as given. ぜんていに する is to assume it, and if two people's ぜんてい differ the argument cannot be settled." },
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
        { id: "ja-u174l2-fukakujitsu", type: "vocab", front: "ふかくじつ", reading: "fukakujitsu", meaning: "uncertain", example: { jp: "来年の ことは まだ ふかくじつなので、今 決めたく ありません。", en: "Next year is still uncertain, so I don't want to decide now." }, drill: { jp: "ふかくじつに なりました。", en: "It has become uncertain." }, accept: ["unsettled", "not definite", "up in the air"], hint: "fukakujitsu — 不 (not) + 確実 (certain). かくじつ is the positive form you will meet more often, and putting 不 in front is the standard way Japanese builds the negative adjective." },
        { id: "ja-u174l2-sotei", type: "vocab", front: "そうてい", reading: "sōtei", meaning: "the case assumed", example: { jp: "この 建物は 強い 地しんを そうていして 作られました。", en: "This building was built assuming a strong earthquake." }, drill: { jp: "そうていを 変えました。", en: "We changed the assumed case." }, accept: ["hypothesis", "what was allowed for", "to envisage"], hint: "そうてい is the case you BUILD FOR; ぜんてい is the case you ARGUE FROM. 想定外 = outside what anyone allowed for." },
        { id: "ja-u174l2-yochi", type: "vocab", front: "よち", reading: "yochi", meaning: "room for", example: { jp: "その 説明には まだ 考える よちが あると 思います。", en: "I think there is still room to think about that explanation." }, drill: { jp: "よちが あります。", en: "There is room for it." }, accept: ["scope", "leeway", "margin"], hint: "yochi — 余 (surplus) + 地 (ground): spare ground, almost always abstract. よちが ある means there is still scope; ぎろんの よちが ない means the matter is closed." },
        { id: "ja-u174l2-mikiwame", type: "vocab", front: "みきわめ", reading: "mikiwame", meaning: "judging it for certain", example: { jp: "みきわめが つくまで、答えは 出さない ことに しました。", en: "We decided not to give an answer until we can judge it for certain." }, drill: { jp: "みきわめが むずかしいです。", en: "Judging it for certain is difficult." }, accept: ["discernment", "making sure", "a firm read"], hint: "mikiwame — 見 (see) plus きわめる (to get to the bottom of): looking until you are sure. It names the END of judging rather than the act, so it pairs with つく — みきわめが つく." },
        { id: "ja-u174l2-dato", type: "vocab", front: "だとう", reading: "datō", meaning: "reasonable", example: { jp: "その 数字は だとうだと 多くの 人が 考えて います。", en: "Many people accept that figure as reasonable." }, drill: { jp: "だとうな けっかです。", en: "It is a reasonable result." }, accept: ["valid", "appropriate", "defensible"], hint: "datō — 妥 (to compromise, to settle) + 当 (appropriate): appropriate once you have weighed it up. Weaker praise than 正しい — it means defensible, not proven right." },
        { id: "ja-u174l2-hiteiteki", type: "vocab", front: "ひていてき", reading: "hiteiteki", meaning: "negative (in stance)", example: { jp: "みんな ひていてきでしたが、はっきり 反対とは 言いませんでした。", en: "Everyone was negative about it, but nobody said they opposed it outright." }, drill: { jp: "ひていてきに なりました。", en: "It became negative." }, accept: ["dismissive", "unfavourable", "sceptical"], hint: "hiteiteki — ひてい (denial) + てき: inclined to deny. It describes a STANCE rather than a statement, so being ひていてき and still never saying 反対 is perfectly consistent, as this card's example shows." },
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
        { id: "ja-u174l3-kenen", type: "vocab", front: "けねん", reading: "kenen", meaning: "a standing concern", example: { jp: "人が 足りない ことが けねんされて いましたが、なんとか なりました。", en: "There had been concern about being short-handed, but we managed." }, drill: { jp: "けねんが のこって います。", en: "A concern remains." }, accept: ["misgiving", "apprehension", "worry about"], hint: "けねん is a concern held in advance and usually said of others' worry; しんぱい is your own, felt now." },
        { id: "ja-u174l3-osore", type: "vocab", front: "おそれ", reading: "osore", meaning: "the risk that", example: { jp: "強い 風で 木が たおれる おそれが あります。", en: "There is a risk of trees coming down in the strong wind." }, drill: { jp: "おそれが あります。", en: "There is a risk of it." }, accept: ["fear that", "danger of", "liable to"], hint: "osore — the noun of おそれる, to fear, except that in this use the fear has gone out of it: おそれが ある is a flat statement of risk, and it is the phrasing on every official warning." },
        { id: "ja-u174l3-kakugo", type: "vocab", front: "かくご", reading: "kakugo", meaning: "being prepared for the worst", example: { jp: "負ける かくごで 出ましたが、けっきょく 勝ちました。", en: "I went in prepared to lose, and ended up winning." }, drill: { jp: "かくごが できました。", en: "I am prepared for the worst." }, accept: ["resolve", "readiness", "steeling oneself"], hint: "kakugo — 覚 (awaken) + 悟 (realise): waking up to what may happen and accepting it. かくごが できる is to be resolved, and it implies you EXPECT the bad outcome rather than fear it." },
        { id: "ja-u174l3-yudan", type: "vocab", front: "ゆだん", reading: "yudan", meaning: "letting your guard down", example: { jp: "点を 取った あとに ゆだんして、すぐ 返されました。", en: "We let our guard down after scoring, and were pegged back at once." }, drill: { jp: "ゆだんは きけんです。", en: "Letting your guard down is dangerous." }, accept: ["carelessness", "complacency", "an unguarded moment"], hint: "yudan — 油 (oil) + 断 (cut off): the old image is an oil lamp going out the moment you stop watching it. ゆだんたいてき, carelessness is the enemy, is the proverb every child learns." },
        { id: "ja-u174l3-yojin", type: "vocab", front: "ようじん", reading: "yōjin", meaning: "taking care", example: { jp: "夜 一人で 歩く ときは ようじんして ください。", en: "Please take care when you walk alone at night." }, drill: { jp: "ようじんが たいせつです。", en: "Taking care matters." }, accept: ["caution", "watching out", "being careful"], hint: "yōjin — 用 (use) + 心 (heart): putting your attention to use. More active than ちゅうい, which is a warning somebody gives you; ようじん is the watchfulness you keep up yourself." },
        { id: "ja-u174l3-saiaku", type: "vocab", front: "さいあく", reading: "saiaku", meaning: "the worst case", example: { jp: "さいあくの ばあいでも、家族は 安全な 所に います。", en: "Even in the worst case, my family is somewhere safe." }, drill: { jp: "さいあくの ばあいを 考えます。", en: "We consider the worst case." }, accept: ["worst", "at worst", "the worst of it"], hint: "saiaku — 最 (most) + 悪 (bad), the exact mirror of さいてき. さいあくの ばあい is the fixed phrase for a worst case, and さいあく on its own works in speech as just awful." },
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
        { id: "ja-u174l4-sonae", type: "vocab", front: "そなえ", reading: "sonae", meaning: "provision made in advance", example: { jp: "地しんへの そなえとして、水と 食べ物を 家に 置いて います。", en: "As provision against an earthquake, I keep water and food at home." }, drill: { jp: "そなえが たいせつです。", en: "Provision in advance is important." }, accept: ["preparedness", "standing ready", "what is laid in"], hint: "sonae — the noun of そなえる, to lay in: what you have put ready beforehand. そなえあれば うれいなし, with provision there is no worry, is the proverb behind every disaster-kit campaign." },
        { id: "ja-u174l4-kiki", type: "vocab", front: "きき", reading: "kiki", meaning: "a crisis", example: { jp: "会社は 一度 ききを むかえましたが、社員は だれも やめませんでした。", en: "The company faced a crisis once, but not one employee left." }, drill: { jp: "ききを むかえました。", en: "It faced a crisis." }, accept: ["emergency", "critical moment", "grave situation"], hint: "kiki — 危 (danger) + 機 (a juncture): the dangerous turning point. It is a MOMENT rather than a condition, which is why it goes with むかえる, to meet it, and のりこえる, to get over it." },
        { id: "ja-u174l4-mangaichi", type: "vocab", front: "まんがいち", reading: "mangaichi", meaning: "in the unlikely event", example: { jp: "まんがいち 電車が 止まっても、歩いて 帰れます。", en: "In the unlikely event the trains stop, I can walk home." }, drill: { jp: "まんがいち おくれても だいじょうぶです。", en: "Even in the unlikely event of a delay, it is fine." }, accept: ["just in case", "should the worst happen", "if by any chance"], hint: "mangaichi — 万 (ten thousand) + が + 一 (one): a one-in-ten-thousand chance. It opens a clause and needs ても or なら after it, so treat it as the front half of a conditional." },
        { id: "ja-u174l4-sonshitsu", type: "vocab", front: "そんしつ", reading: "sonshitsu", meaning: "a financial loss", example: { jp: "その 年の そんしつは 大きかったですが、つぎの 年に もどしました。", en: "That year's loss was large, but we made it back the following year." }, drill: { jp: "そんしつが おおきいです。", en: "The loss is large." }, accept: ["losses", "a deficit", "damage to the books"], hint: "sonshitsu — 損 (loss) + 失 (to lose), two loss kanji doubled. The accounting word for money gone, where そん alone is any disadvantage. りえき is its opposite on the same statement." },
        { id: "ja-u174l4-banzen", type: "vocab", front: "ばんぜん", reading: "banzen", meaning: "leaving nothing to chance", example: { jp: "ばんぜんの じゅんびを して、その日を むかえました。", en: "We prepared for every eventuality and then the day came." }, drill: { jp: "ばんぜんの じゅんびを します。", en: "We make preparation for every eventuality." }, accept: ["thorough", "airtight", "all bases covered"], hint: "banzen — 万 (ten thousand) + 全 (whole): all ten thousand cases covered. Nearly always ばんぜんを きす or ばんぜんの, and since it claims completeness it is a strong word to use lightly." },
        { id: "ja-u174l4-anzensei", type: "vocab", front: "あんぜんせい", reading: "anzensei", meaning: "how safe something is", example: { jp: "新しい 車の あんぜんせいは、前の 型より ずっと 高いです。", en: "The new car's safety is far higher than the previous model's." }, drill: { jp: "あんぜんせいが 高いです。", en: "Its safety is high." }, accept: ["safety level", "security", "how safe it is"], hint: "anzensei — あんぜん (safe) + せい (-ness): how safe, as a measurable property. あんぜん is a yes-or-no; あんぜんせいが 高い lets you compare two cars, which is the whole reason the ending exists." },
      ],
    },
  ],
};
