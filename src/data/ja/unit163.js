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
        { id: "ja-u163l1-seisaku", type: "vocab", front: "せいさく", reading: "seisaku", meaning: "policy (a government measure)", example: { jp: "新しい せいさくは、わかい 家ぞくを ささえる ためです。", en: "The new policy is there to support young families." }, drill: { jp: "せいさくが あたらしいです。", en: "The policy is new." }, accept: ["measure", "programme", "course of action"], hint: "ほうしん is the direction someone intends; せいさく is the concrete programme a government actually runs." },
        { id: "ja-u163l1-kokkai", type: "vocab", front: "こっかい", reading: "kokkai", meaning: "the national assembly", example: { jp: "こっかいで その ほうあんが 話しあわれて います。", en: "That bill is being discussed in the assembly." }, drill: { jp: "こっかいが 始まりました。", en: "The assembly has opened." }, accept: ["parliament", "diet", "congress"], hint: "kokkai — 国 (country) + 会 (assembly): Japan's national parliament, the Diet. ぎいん are its members and りっぽう is its job. A local council is ぎかい, the same word without 国." },
        { id: "ja-u163l1-giin", type: "vocab", front: "ぎいん", reading: "giin", meaning: "an assembly member", example: { jp: "ぎいんは こくみんの 意見を こっかいに 伝えます。", en: "Assembly members carry the public's views into the assembly." }, drill: { jp: "ぎいんに 会いました。", en: "I met an assembly member." }, accept: ["legislator", "MP", "representative"], hint: "giin — 議 (deliberate) + 員 (member): a member of a deliberating body. It names the ROLE, so a person is a ぎいん only while in office. こっかいぎいん is the national-level one." },
        { id: "ja-u163l1-daijin", type: "vocab", front: "だいじん", reading: "daijin", meaning: "a minister", example: { jp: "だいじんが かわると、せいさくも 少し かわります。", en: "When the minister changes, the policy shifts a little too." }, drill: { jp: "だいじんが 話しました。", en: "The minister spoke." }, accept: ["cabinet minister", "secretary of state", "a minister of state"], hint: "daijin — 大 (great) + 臣 (a retainer): a great servant of the state. Each ministry has one, so がいむだいじん is the foreign minister and そうりだいじん the prime minister." },
        { id: "ja-u163l1-gyosei", type: "vocab", front: "ぎょうせい", reading: "gyōsei", meaning: "administration", example: { jp: "ぎょうせいの てつづきが 多くて、時間が かかりました。", en: "There was a lot of administrative paperwork, and it took time." }, drill: { jp: "ぎょうせいに もうしこみます。", en: "I apply to the administration." }, accept: ["the executive", "public administration", "government services"], hint: "The three powers, and they are worth learning as a set: りっぽう makes law, ぎょうせい carries it out, しほう judges it." },
        { id: "ja-u163l1-rippo", type: "vocab", front: "りっぽう", reading: "rippō", meaning: "legislation", example: { jp: "りっぽうは こっかいの しごとです。", en: "Legislation is the assembly's work." }, drill: { jp: "りっぽうに 時間が かかります。", en: "Legislating takes time." }, accept: ["lawmaking", "the legislature", "making law"], hint: "rippō — 立 (set up) + 法 (law): setting a law up. One of the three powers this unit teaches together — りっぽう makes the law, ぎょうせい carries it out, しほう judges by it." },
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
        { id: "ja-u163l2-kenpo", type: "vocab", front: "けんぽう", reading: "kenpō", meaning: "a constitution", example: { jp: "けんぽうは ほかの どの 決まりよりも 上に あります。", en: "The constitution stands above every other rule." }, drill: { jp: "けんぽうを 読みました。", en: "I read the constitution." }, accept: ["basic law", "the constitution", "the supreme law"], hint: "kenpō — 憲 (fundamental law) + 法 (law): the rule that outranks every other one. That is exactly why a かいせい of it is so much harder to achieve than of an ordinary 決まり." },
        { id: "ja-u163l2-saiban", type: "vocab", front: "さいばん", reading: "saiban", meaning: "a trial", example: { jp: "さいばんは 三年 つづき、やっと 終わりました。", en: "The trial went on for three years and finally ended." }, drill: { jp: "さいばんが 始まります。", en: "The trial is starting." }, accept: ["court case", "judgement", "lawsuit"], hint: "saiban — 裁 (to judge) + 判 (to decide): the proceeding itself. The court as a building is さいばんしょ, and しほう is the whole branch the proceeding belongs to." },
        { id: "ja-u163l2-shiho", type: "vocab", front: "しほう", reading: "shihō", meaning: "the judiciary", example: { jp: "しほうは せいじから はなれて いなければ なりません。", en: "The judiciary has to stay separate from politics." }, drill: { jp: "しほうの しごとです。", en: "It is the judiciary's work." }, accept: ["justice system", "the courts", "the judicial branch"], hint: "shihō — 司 (administer) + 法 (law): the branch that applies law to cases. Set against りっぽう, which writes the law, and ぎょうせい, which runs the country under it." },
        { id: "ja-u163l2-bassoku", type: "vocab", front: "ばっそく", reading: "bassoku", meaning: "a penalty clause", example: { jp: "ばっそくが ない 決まりは、まもられにくいです。", en: "A rule with no penalty attached is hard to enforce." }, drill: { jp: "ばっそくが あります。", en: "There is a penalty clause." }, accept: ["penal provision", "sanction", "punishment rule"], hint: "bassoku — 罰 (punishment) + 則 (rule): the part of a rule that says what happens when you break it. A かんこく has none, which is precisely why it gets ignored." },
        { id: "ja-u163l2-yuko", type: "vocab", front: "ゆうこう", reading: "yūkō", meaning: "valid", example: { jp: "この きっぷは 三日 ゆうこうですから、あさってまで 使えます。", en: "This ticket is valid for three days, so you can use it until the day after tomorrow." }, drill: { jp: "ゆうこうに なりました。", en: "It has come into effect." }, accept: ["in force", "effective", "good for"], hint: "yūkō — 有 (have) + 効 (effect): having effect, so legally live. Tickets, passports, contracts. Its opposite むこう means void. Not to be confused with ゆうこう 友好, friendship." },
        { id: "ja-u163l2-kaisei", type: "vocab", front: "かいせい", reading: "kaisei", meaning: "amendment", example: { jp: "決まりの かいせいには、長い 話しあいが ひつようです。", en: "Amending a rule takes long discussion." }, drill: { jp: "かいせいに じかんが かかります。", en: "The amendment takes time." }, accept: ["revision", "to amend", "reform"], hint: "kaisei — 改 (reform) + 正 (correct): changing a rule to put it right. Always a formal, procedural change to a written rule; editing your own draft is しゅうせい instead." },
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
        { id: "ja-u163l3-hoan", type: "vocab", front: "ほうあん", reading: "hōan", meaning: "a bill", example: { jp: "その ほうあんは、ぎいんの 半分いじょうが さんせいしました。", en: "More than half the members supported that bill." }, drill: { jp: "ほうあんを 出しました。", en: "They submitted the bill." }, accept: ["draft law", "proposed legislation", "a legislative proposal"], hint: "ほうあん is the draft; once it passes it stops being an あん (proposal) and becomes 法律." },
        { id: "ja-u163l3-kisei", type: "vocab", front: "きせい", reading: "kisei", meaning: "regulation", example: { jp: "きせいが きびしく なって、店は 早く しまるように なりました。", en: "Regulation tightened, and the shops began closing early." }, drill: { jp: "きせいが ゆるく なりました。", en: "Regulation has loosened." }, accept: ["restriction", "control", "to regulate"], hint: "kisei — 規 (standard) + 制 (control): rules restricting what may be done, usually imposed by an authority on an industry. きせいを かける is to impose it; an outright ban is きんし." },
        { id: "ja-u163l3-kankoku", type: "vocab", front: "かんこく", reading: "kankoku", meaning: "a recommendation", example: { jp: "かんこくには ばっそくが ないので、まもらない 会社も あります。", en: "A recommendation carries no penalty, so some companies ignore it." }, drill: { jp: "かんこくを 受けました。", en: "We received a recommendation." }, accept: ["advice", "official urging", "to recommend"], hint: "kankoku — 勧 (urge) + 告 (tell): an official urging with no force behind it. Weaker than めいれい and stronger than an opinion. Watch the reading — it is not the country 韓国." },
        { id: "ja-u163l3-konin", type: "vocab", front: "こうにん", reading: "kōnin", meaning: "official recognition", example: { jp: "国の こうにんを うけた 学校だけが、その 名前を 使えます。", en: "Only schools with official recognition may use that name." }, drill: { jp: "こうにんを うけて います。", en: "It holds official recognition." }, accept: ["authorised", "approved", "certified"], hint: "kōnin — 公 (public) + 認 (recognise): recognised by a public body, so the name becomes protected. こうにんかいけいし is a certified accountant. ゆうこう is about validity, こうにん about who says so." },
        { id: "ja-u163l3-toso", type: "vocab", front: "とうそう", reading: "tōsō", meaning: "a struggle", example: { jp: "長い とうそうの すえに、はたらく 人の 権利が みとめられました。", en: "After a long struggle, workers' rights were recognised." }, drill: { jp: "とうそうが つづきました。", en: "The struggle went on." }, accept: ["fight", "campaign", "dispute"], hint: "tōsō — 闘 (fight) + 争 (contend): a sustained fight FOR something, not a brawl. Labour disputes, civil rights, an illness. 戦争 is war between states; とうそう is a campaign." },
        { id: "ja-u163l3-tohyoken", type: "vocab", front: "とうひょうけん", reading: "tōhyōken", meaning: "the right to vote", example: { jp: "この 国では 十八さいから とうひょうけんが あります。", en: "In this country you have the right to vote from eighteen." }, drill: { jp: "とうひょうけんが あります。", en: "I have the right to vote." }, accept: ["suffrage", "the franchise", "voting rights"], hint: "tōhyōken — 投票 (casting a ballot) + 権 (right). That 権 ending builds rights right through this unit — しゅけん, じんけん. とうひょう on its own is just the act of voting." },
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
        { id: "ja-u163l4-joyaku", type: "vocab", front: "じょうやく", reading: "jōyaku", meaning: "a treaty", example: { jp: "二つの 国は 平和の じょうやくを むすびました。", en: "The two countries concluded a peace treaty." }, drill: { jp: "じょうやくを むすびました。", en: "They concluded a treaty." }, accept: ["pact", "convention", "accord"], hint: "jōyaku — 条 (an article or clause) + 約 (promise): a promise set out in numbered articles. Between states only; the same thing between companies is a けいやく." },
        { id: "ja-u163l4-gaiko", type: "vocab", front: "がいこう", reading: "gaikō", meaning: "diplomacy", example: { jp: "がいこうは、戦わずに 話しあいで 決める しごとです。", en: "Diplomacy is the work of settling things by talking rather than fighting." }, drill: { jp: "がいこうに 力を 入れて います。", en: "They are putting effort into diplomacy." }, accept: ["foreign relations", "statecraft", "international relations"], hint: "gaikō — 外 (outside) + 交 (exchange): dealings with the outside. The people who do it are がいこうかん, diplomats. Note it is not がいこく, which is a foreign country." },
        { id: "ja-u163l4-shuken", type: "vocab", front: "しゅけん", reading: "shuken", meaning: "sovereignty", example: { jp: "小さな 国でも、しゅけんは 大きな 国と 同じです。", en: "Even a small country's sovereignty is equal to a large one's." }, drill: { jp: "しゅけんは おなじです。", en: "Sovereignty is the same." }, accept: ["supreme authority", "self-rule", "sovereign power"], hint: "shuken — 主 (principal) + 権 (right): the top-level right to govern yourself with nobody above you. Used of states, and こくみんしゅけん means that right rests with the people." },
        { id: "ja-u163l4-seiken", type: "vocab", front: "せいけん", reading: "seiken", meaning: "a government (in power)", example: { jp: "せいけんが かわっても、この せいさくは つづきます。", en: "Even if the government changes, this policy continues." }, drill: { jp: "せいけんが かわりました。", en: "The government has changed." }, accept: ["administration", "regime", "political power"], hint: "seiken — 政 (government) + 権 (power): the party or coalition actually holding power, not the permanent state. せいけんこうたい is a change of government; ないかく is the cabinet inside it." },
        { id: "ja-u163l4-naikaku", type: "vocab", front: "ないかく", reading: "naikaku", meaning: "the cabinet", example: { jp: "ないかくの 会議で、その ことが 決まりました。", en: "That was decided at a cabinet meeting." }, drill: { jp: "ないかくが 決めました。", en: "The cabinet decided." }, accept: ["ministry", "the executive council", "the council of ministers"], hint: "naikaku — 内 (inside) + 閣 (a tower): the inner chamber where ministers meet. It is the body of だいじん, headed by the そうりだいじん, and it sits inside the せいけん." },
        { id: "ja-u163l4-yoto", type: "vocab", front: "よとう", reading: "yotō", meaning: "the ruling party", example: { jp: "よとうと やとうでは、意見が 大きく ちがいます。", en: "The ruling party and the opposition differ greatly." }, drill: { jp: "よとうが さんせいしました。", en: "The ruling party voted in favour." }, accept: ["party in power", "governing party", "the party in office"], hint: "よとう rules, やとう opposes — one kana apart, and the pair is how every political story is framed." },
      ],
    },
  ],
};
