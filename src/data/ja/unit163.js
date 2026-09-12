// Unit 163 — せいじ・ほう (Politics and law) — B2 / JLPT N2
// Strand B. B1's u107 covered news vocabulary from the reader's side; this is the
// machinery a news story is about — who makes law, who judges it, how a rule is
// changed, and how states deal with each other.
// Mixed script per the u156 header; all kanji verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT163 = {
  id: "ja-u163",
  lang: "ja",
  title: "せいじ・ほう",
  order: 163,
  stage: "b2",
  lessons: [
    {
      id: "ja-u163l1",
      unit: 163,
      lesson: 1,
      title: "How a country is run",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the parts of a government: せいさく こっかい ぎいん だいじん ぎょうせい りっぽう.",
      items: [
        { id: "ja-u163l1-seisaku", type: "vocab", front: "せいさく", reading: "seisaku", meaning: "policy", example: { jp: "新しい せいさくは、わかい 家ぞくを ささえる ためです。", en: "The new policy is there to support young families." }, drill: { jp: "せいさくが あたらしいです。", en: "The policy is new." }, accept: ["measure", "programme", "course of action"], hint: "ほうしん is the direction someone intends; せいさく is the concrete programme a government actually runs." },
        { id: "ja-u163l1-kokkai", type: "vocab", front: "こっかい", reading: "kokkai", meaning: "the national assembly", example: { jp: "こっかいで その ほうあんが 話しあわれて います。", en: "That bill is being discussed in the assembly." }, accept: ["parliament", "diet", "congress"] },
        { id: "ja-u163l1-giin", type: "vocab", front: "ぎいん", reading: "giin", meaning: "an assembly member", example: { jp: "ぎいんは こくみんの 意見を こっかいに 伝えます。", en: "Assembly members carry the public's views into the assembly." }, accept: ["legislator", "MP", "representative"] },
        { id: "ja-u163l1-daijin", type: "vocab", front: "だいじん", reading: "daijin", meaning: "a minister", example: { jp: "だいじんが かわると、せいさくも 少し かわります。", en: "When the minister changes, the policy shifts a little too." }, accept: ["cabinet minister", "secretary of state"] },
        { id: "ja-u163l1-gyosei", type: "vocab", front: "ぎょうせい", reading: "gyōsei", meaning: "administration", example: { jp: "ぎょうせいの てつづきが 多くて、時間が かかりました。", en: "There was a lot of administrative paperwork, and it took time." }, accept: ["the executive", "public administration"], hint: "The three powers, and they are worth learning as a set: りっぽう makes law, ぎょうせい carries it out, しほう judges it." },
        { id: "ja-u163l1-rippo", type: "vocab", front: "りっぽう", reading: "rippō", meaning: "legislation", example: { jp: "りっぽうは こっかいの しごとです。", en: "Legislation is the assembly's work." }, accept: ["lawmaking", "the legislature"] },
      ],
    },
    {
      id: "ja-u163l2",
      unit: 163,
      lesson: 2,
      title: "Law and the courts",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about law being applied and judged: けんぽう さいばん しほう ばっそく ゆうこう かいせい.",
      items: [
        { id: "ja-u163l2-kenpo", type: "vocab", front: "けんぽう", reading: "kenpō", meaning: "a constitution", example: { jp: "けんぽうは ほかの どの 決まりよりも 上に あります。", en: "The constitution stands above every other rule." }, accept: ["basic law", "the constitution"] },
        { id: "ja-u163l2-saiban", type: "vocab", front: "さいばん", reading: "saiban", meaning: "a trial", example: { jp: "さいばんは 三年 つづき、やっと 終わりました。", en: "The trial went on for three years and finally ended." }, accept: ["court case", "judgement", "lawsuit"] },
        { id: "ja-u163l2-shiho", type: "vocab", front: "しほう", reading: "shihō", meaning: "the judiciary", example: { jp: "しほうは せいじから はなれて いなければ なりません。", en: "The judiciary has to stay separate from politics." }, accept: ["justice system", "the courts"] },
        { id: "ja-u163l2-bassoku", type: "vocab", front: "ばっそく", reading: "bassoku", meaning: "a penalty clause", example: { jp: "ばっそくが ない 決まりは、まもられにくいです。", en: "A rule with no penalty attached is hard to enforce." }, accept: ["penal provision", "sanction", "punishment rule"] },
        { id: "ja-u163l2-yuko", type: "vocab", front: "ゆうこう", reading: "yūkō", meaning: "valid", example: { jp: "この きっぷは 三日 ゆうこうですから、あさってまで 使えます。", en: "This ticket is valid for three days, so you can use it until the day after tomorrow." }, accept: ["in force", "effective", "good for"] },
        { id: "ja-u163l2-kaisei", type: "vocab", front: "かいせい", reading: "kaisei", meaning: "amendment", example: { jp: "決まりの かいせいには、長い 話しあいが ひつようです。", en: "Amending a rule takes long discussion." }, drill: { jp: "かいせいに じかんが かかります。", en: "The amendment takes time." }, accept: ["revision", "to amend", "reform"] },
      ],
    },
    {
      id: "ja-u163l3",
      unit: 163,
      lesson: 3,
      title: "Making and changing rules",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow a rule from proposal to enforcement: ほうあん きせい かんこく こうにん とうそう とうひょうけん.",
      items: [
        { id: "ja-u163l3-hoan", type: "vocab", front: "ほうあん", reading: "hōan", meaning: "a bill", example: { jp: "その ほうあんは、ぎいんの 半分いじょうが さんせいしました。", en: "More than half the members supported that bill." }, accept: ["draft law", "proposed legislation"], hint: "ほうあん is the draft; once it passes it stops being an あん (proposal) and becomes 法律." },
        { id: "ja-u163l3-kisei", type: "vocab", front: "きせい", reading: "kisei", meaning: "regulation", example: { jp: "きせいが きびしく なって、店は 早く しまるように なりました。", en: "Regulation tightened, and the shops began closing early." }, accept: ["restriction", "control", "to regulate"] },
        { id: "ja-u163l3-kankoku", type: "vocab", front: "かんこく", reading: "kankoku", meaning: "a recommendation", example: { jp: "かんこくには ばっそくが ないので、まもらない 会社も あります。", en: "A recommendation carries no penalty, so some companies ignore it." }, accept: ["advice", "official urging", "to recommend"] },
        { id: "ja-u163l3-konin", type: "vocab", front: "こうにん", reading: "kōnin", meaning: "official recognition", example: { jp: "国の こうにんを うけた 学校だけが、その 名前を 使えます。", en: "Only schools with official recognition may use that name." }, accept: ["authorised", "approved", "certified"] },
        { id: "ja-u163l3-toso", type: "vocab", front: "とうそう", reading: "tōsō", meaning: "a struggle", example: { jp: "長い とうそうの すえに、はたらく 人の 権利が みとめられました。", en: "After a long struggle, workers' rights were recognised." }, accept: ["fight", "campaign", "dispute"] },
        { id: "ja-u163l3-tohyoken", type: "vocab", front: "とうひょうけん", reading: "tōhyōken", meaning: "the right to vote", example: { jp: "この 国では 十八さいから とうひょうけんが あります。", en: "In this country you have the right to vote from eighteen." }, accept: ["suffrage", "the franchise"] },
      ],
    },
    {
      id: "ja-u163l4",
      unit: 163,
      lesson: 4,
      title: "Between states",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe dealings between countries: じょうやく がいこう しゅけん せいけん ないかく よとう.",
      items: [
        { id: "ja-u163l4-joyaku", type: "vocab", front: "じょうやく", reading: "jōyaku", meaning: "a treaty", example: { jp: "二つの 国は 平和の じょうやくを むすびました。", en: "The two countries concluded a peace treaty." }, drill: { jp: "じょうやくを むすびました。", en: "They concluded a treaty." }, accept: ["pact", "convention", "accord"] },
        { id: "ja-u163l4-gaiko", type: "vocab", front: "がいこう", reading: "gaikō", meaning: "diplomacy", example: { jp: "がいこうは、戦わずに 話しあいで 決める しごとです。", en: "Diplomacy is the work of settling things by talking rather than fighting." }, accept: ["foreign relations", "statecraft"] },
        { id: "ja-u163l4-shuken", type: "vocab", front: "しゅけん", reading: "shuken", meaning: "sovereignty", example: { jp: "小さな 国でも、しゅけんは 大きな 国と 同じです。", en: "Even a small country's sovereignty is equal to a large one's." }, drill: { jp: "しゅけんは おなじです。", en: "Sovereignty is the same." }, accept: ["supreme authority", "self-rule"] },
        { id: "ja-u163l4-seiken", type: "vocab", front: "せいけん", reading: "seiken", meaning: "a government (in power)", example: { jp: "せいけんが かわっても、この せいさくは つづきます。", en: "Even if the government changes, this policy continues." }, accept: ["administration", "regime", "political power"] },
        { id: "ja-u163l4-naikaku", type: "vocab", front: "ないかく", reading: "naikaku", meaning: "the cabinet", example: { jp: "ないかくの 会議で、その ことが 決まりました。", en: "That was decided at a cabinet meeting." }, accept: ["ministry", "the executive council"] },
        { id: "ja-u163l4-yoto", type: "vocab", front: "よとう", reading: "yotō", meaning: "the ruling party", example: { jp: "よとうと やとうでは、意見が 大きく ちがいます。", en: "The ruling party and the opposition differ greatly." }, accept: ["party in power", "governing party"], hint: "よとう rules, やとう opposes — one kana apart, and the pair is how every political story is framed." },
      ],
    },
  ],
};
