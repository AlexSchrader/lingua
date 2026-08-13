// Unit 106 — かんじ・しゃかい (Society and politics kanji) — B1 / JLPT N3
// Strand A. The glyphs that carry a newspaper's front page. Pairs with the thematic
// news unit at slot 107, which teaches the same ground as spoken vocabulary.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards, the band-standard shape.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT106 = {
  id: "ja-u106",
  lang: "ja",
  title: "かんじ・しゃかい",
  order: 106,
  stage: "b1",
  lessons: [
    {
      id: "ja-u106l1",
      unit: 106,
      lesson: 1,
      title: "Government",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 政 (politics), 権 (right), 党 (party), 官 (official), and the words 権力 and 政党.",
      items: [
        { id: "ja-u106l1-sei", type: "kanji", front: "政", reading: "sei", meaning: "politics", example: { jp: "新しい 政治の 話は 新聞で よく 読んで います。", en: "I read a lot about the new politics in the newspaper." }, accept: ["government", "administration"], hint: "政 = governing — 正 (correct) + a hand holding a stick. 政治 = politics, 政府 = the government." },
        { id: "ja-u106l1-ken", type: "kanji", front: "権", reading: "ken", meaning: "right", example: { jp: "子どもにも 学校で 学ぶ 権利が あります。", en: "Children too have the right to learn at school." }, accept: ["authority", "power", "entitlement"], hint: "権 = a right or power held. 権利 = a right, 人権 = human rights." },
        { id: "ja-u106l1-to", type: "kanji", front: "党", reading: "tō", meaning: "party", example: { jp: "その 政党は わかい 人の 意見を よく 聞いて います。", en: "That political party listens closely to young people's views." }, accept: ["faction", "political party"], hint: "党 = an organised group — almost always a political one. 政党 = political party." },
        { id: "ja-u106l1-kan", type: "kanji", front: "官", reading: "kan", meaning: "official", example: { jp: "父は 長い 間 事務官として つとめて、去年 やめました。", en: "My father served for years as an administrative official, and retired last year." }, accept: ["officer", "government service"], hint: "官 = holding public office. 事務官 = administrative official, 警官 = police officer, 外交官 = diplomat." },
        { id: "ja-u106l1-kenryoku", type: "vocab", front: "権力", reading: "kenryoku", meaning: "power", example: { jp: "権力が 一人に 集まるのは、あぶないです。", en: "It's dangerous for power to gather in one person." }, accept: ["authority", "control"], hint: "権 (right) + 力 (strength) — the power to make others act." },
        { id: "ja-u106l1-seito", type: "vocab", front: "政党", reading: "seitō", meaning: "political party", example: { jp: "あたらしい 政党が できて、新聞に 大きく 出ました。", en: "A new political party formed, and it made a big splash in the papers." }, accept: ["party"] },
      ],
    },
    {
      id: "ja-u106l2",
      unit: 106,
      lesson: 2,
      title: "People and rules",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 民 (the people), 律 (law), 選 (to choose), 戦 (war), and the words 民間 and 選手.",
      items: [
        { id: "ja-u106l2-min", type: "kanji", front: "民", reading: "min", meaning: "the people", example: { jp: "新しい きまりは 国民の せいかつに 大きな えいきょうを あたえました。", en: "The new rule had a big effect on the public's daily life." }, accept: ["citizens", "folk", "the public"], hint: "民 = the population. 国民 = the citizens of a country, 市民 = residents of a city." },
        { id: "ja-u106l2-ritsu", type: "kanji", front: "律", reading: "ritsu", meaning: "law", example: { jp: "その 法律は 来年から かわりますから、よく 読んで おきます。", en: "That law changes from next year, so I'll read up on it." }, accept: ["rule", "regulation", "rhythm"], hint: "律 = a rule that binds. 法律 = law, 自律 = self-discipline." },
        { id: "ja-u106l2-sen", type: "kanji", front: "選", reading: "sen", meaning: "to choose", example: { jp: "たくさんの 中から 一つ 選ぶのは むずかしいので、よく 考えます。", en: "Choosing one from among many is hard, so I think it over carefully." }, accept: ["to select", "election", "to pick"], hint: "選 = pick out — the ⻌ road radical, as in 進 and 通. 選手 = an athlete (the chosen hand), 選挙 = election." },
        { id: "ja-u106l2-senso", type: "kanji", front: "戦", reading: "sen", meaning: "war", example: { jp: "その 話は 戦争の 前の 時代の ことです。", en: "That story is from the era before the war." }, accept: ["battle", "to fight", "contest"], hint: "戦 = battle — it also means a sporting contest: 試合の 前の 作戦 = the plan before the match." },
        { id: "ja-u106l2-minkan", type: "vocab", front: "民間", reading: "minkan", meaning: "private sector", example: { jp: "その 仕事は 民間の 会社が して います。", en: "A private company does that work." }, accept: ["non-government", "civilian", "private"], hint: "民 (the people) + 間 (among) — among the people, i.e. not the state." },
        { id: "ja-u106l2-senshu", type: "vocab", front: "選手", reading: "senshu", meaning: "player", example: { jp: "その 選手は 去年 やめて、今は 先生を して います。", en: "That player quit last year and is now a teacher." }, accept: ["athlete", "team member"], hint: "選 (chosen) + 手 (hand) — the chosen hand, i.e. the one picked for the team." },
      ],
    },
    {
      id: "ja-u106l3",
      unit: 106,
      lesson: 3,
      title: "Conflict and peace",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 争 (dispute), 平 (flat), 和 (harmony), 全 (all), and the words 平和 and 安全.",
      items: [
        { id: "ja-u106l3-so", type: "kanji", front: "争", reading: "sō", meaning: "dispute", example: { jp: "小さな 意見の 争いから、大きな 問題に なりました。", en: "It grew from a small difference of opinion into a big problem." }, accept: ["conflict", "to compete", "quarrel"], hint: "争 = two hands pulling at one thing. 戦争 = war, 競争 = competition." },
        { id: "ja-u106l3-hei", type: "kanji", front: "平", reading: "hei", meaning: "flat", example: { jp: "この 道は 平らですから、子どもでも 安心です。", en: "This road is flat, so it's safe even for children." }, accept: ["level", "even", "peaceful"], hint: "平 = level — both a flat surface and a calm state. 平和 = peace, 平日 = a weekday (an ordinary, level day)." },
        { id: "ja-u106l3-wa", type: "kanji", front: "和", reading: "wa", meaning: "harmony", example: { jp: "長い 争いの あと、やっと 平和に なりました。", en: "After a long conflict, peace finally came." }, accept: ["peace", "Japanese-style", "sum"], hint: "和 also means 'Japanese': 和食 = Japanese food, 和室 = a tatami room." },
        { id: "ja-u106l3-zen", type: "kanji", front: "全", reading: "zen", meaning: "all", example: { jp: "クラスの 全員が その 話を 聞いて、みんな おどろきました。", en: "The whole class heard that story, and everyone was surprised." }, accept: ["whole", "entire", "completely"], hint: "全 = the whole of it. 全部 = all of it, 全体 = the whole, 安全 = safety (wholly at ease)." },
        { id: "ja-u106l3-heiwa", type: "vocab", front: "平和", reading: "heiwa", meaning: "peace", example: { jp: "世界の 平和に ついて、学校の みんなで 話しました。", en: "We all talked about world peace at school." }, accept: ["peaceful", "harmony"] },
        { id: "ja-u106l3-anzen", type: "vocab", front: "安全", reading: "anzen", meaning: "safety", example: { jp: "この 道は 夜も 明るいので、安全です。", en: "This road is lit at night too, so it's safe." }, accept: ["safe", "security"] },
      ],
    },
    {
      id: "ja-u106l4",
      unit: 106,
      lesson: 4,
      title: "All of us together",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 共 (together), 供 (companion), 賛 (to approve), 反 (to oppose), and the words 公共 and 供給.",
      items: [
        { id: "ja-u106l4-kyo", type: "kanji", front: "共", reading: "kyō", meaning: "together", example: { jp: "この 二つの ことばには 共通の 意味が あります。", en: "These two words have a meaning in common." }, accept: ["shared", "in common", "joint"], hint: "共 = shared between — two hands holding one thing up. 共通 = in common, 公共 = public." },
        { id: "ja-u106l4-tomo", type: "kanji", front: "供", reading: "tomo", meaning: "companion", example: { jp: "子供の ころは 毎日 外で あそんで いました。", en: "When I was a child I played outside every day." }, accept: ["attendant", "to offer", "companion"], hint: "供 = 亻 (person) + 共 (together): the one who goes along. You meet it mostly inside 子供 = child." },
        { id: "ja-u106l4-san", type: "kanji", front: "賛", reading: "san", meaning: "to approve", example: { jp: "その 計画に 賛成の 人が 多くて、すぐに きまりました。", en: "Many people approved of that plan, and it was decided quickly." }, accept: ["agreement", "praise", "support"], hint: "賛 = come out in favour — 貝 (money/value) below. 賛成 = agreement; its opposite is 反対." },
        { id: "ja-u106l4-han", type: "kanji", front: "反", reading: "han", meaning: "to oppose", example: { jp: "その 意見に 反対の 人も いましたが、話は 前に すすみました。", en: "Some people were against that view, but the discussion moved forward." }, accept: ["against", "anti-", "reverse"], hint: "反 = turn back against. 反対 = opposition, 反応 = reaction — the same 反 that flips a direction." },
        { id: "ja-u106l4-kokyo", type: "vocab", front: "公共", reading: "kōkyō", meaning: "public", example: { jp: "公共の ばしょでは、しずかに 話して ください。", en: "Please speak quietly in public places." }, accept: ["communal", "shared"] },
        { id: "ja-u106l4-kyokyu", type: "vocab", front: "供給", reading: "kyōkyū", meaning: "supply", example: { jp: "水の 供給が 止まって、みんな こまりました。", en: "The water supply stopped and everyone was stuck." }, accept: ["provision", "to supply"] },
      ],
    },
  ],
};
