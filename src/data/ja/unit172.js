// Unit 172 — りんり・せきにん (Ethics and responsibility) — B2 / JLPT N2
// Strand B, last thematic unit of block 1. B1's u110 gave せきにん as a job duty;
// this is responsibility as a moral question — the words for what is owed, what is
// hidden, who answers for it, and what is done afterwards.
// Mixed script per the u156 header; all kanji verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT172 = {
  id: "ja-u172",
  lang: "ja",
  title: "りんり・せきにん",
  order: 172,
  stage: "b2",
  lessons: [
    {
      id: "ja-u172l1",
      unit: 172,
      lesson: 1,
      title: "Right and wrong",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about conduct in moral terms: りんり どうとく そんげん じりつ ぎむかん こうへいさ.",
      items: [
        { id: "ja-u172l1-rinri", type: "vocab", front: "りんり", reading: "rinri", meaning: "ethics", example: { jp: "新しい ぎじゅつには、新しい りんりが ひつように なります。", en: "New technology calls for new ethics." }, drill: { jp: "りんりが ひつようです。", en: "Ethics are necessary." }, accept: ["moral principles", "ethical standards", "ethical thinking"], hint: "りんり is the reasoned system — the rules a profession or a society argues out. どうとく is what an individual feels they ought to do." },
        { id: "ja-u172l1-dotoku", type: "vocab", front: "どうとく", reading: "dōtoku", meaning: "morals", example: { jp: "どうとくは 国に よって 少し ちがいます。", en: "Morals differ somewhat from country to country." }, drill: { jp: "どうとくの もんだいです。", en: "It is a moral question." }, accept: ["morality", "moral sense", "a sense of right and wrong"], hint: "dōtoku — the same word as 道徳, the way of virtue. りんり is the reasoned system you argue about; どうとく is the shared sense of right a society already holds." },
        { id: "ja-u172l1-songen", type: "vocab", front: "そんげん", reading: "songen", meaning: "dignity", example: { jp: "どんな 人にも、そんげんが あります。", en: "Every person has dignity." }, drill: { jp: "そんげんが あります。", en: "There is dignity." }, accept: ["human worth", "honour", "inherent worth"], hint: "songen — 尊 (revere) + 厳 (solemn): worth that commands respect and cannot be taken away. It belongs to a person simply for being one, which is why にんげんの そんげん needs no argument." },
        { id: "ja-u172l1-jiritsu", type: "vocab", front: "じりつ", reading: "jiritsu", meaning: "autonomy", example: { jp: "子どもの じりつを たすけるのが、親の しごとです。", en: "Helping a child towards autonomy is a parent's work." }, drill: { jp: "じりつを たすけます。", en: "We help towards autonomy." }, accept: ["independence", "standing on one's own", "self-reliance"], hint: "jiritsu — 自 (self) + 立 (stand): standing on your own feet. Written 自律 with 律 instead, the same reading means self-DISCIPLINE — a different word, and context is all that separates them." },
        { id: "ja-u172l1-gimukan", type: "vocab", front: "ぎむかん", reading: "gimukan", meaning: "sense of duty", example: { jp: "ぎむかんだけで つづける しごとは、長く つづきません。", en: "Work continued out of duty alone doesn't last long." }, drill: { jp: "ぎむかんが つよいです。", en: "The sense of duty is strong." }, accept: ["feeling of obligation", "a sense of obligation", "feeling duty-bound"], hint: "gimukan — 義務 (duty) + 感 (feeling). That 感 ending builds feelings right through the language: あんしんかん, せきにんかん. It is the felt pull of duty, not the duty itself." },
        { id: "ja-u172l1-koheisa", type: "vocab", front: "こうへいさ", reading: "kōheisa", meaning: "fairness", example: { jp: "こうへいさが ない 決まりは、だれも まもりません。", en: "Nobody follows a rule that lacks fairness." }, drill: { jp: "こうへいさが ありません。", en: "It lacks fairness." }, accept: ["impartiality", "even-handedness", "being fair"], hint: "kōheisa — こうへい (fair) plus the noun-making さ, the same さ as in あいまいさ. The adjective judges the rule; こうへいさ names the amount of it, which is what you can argue over." },
      ],
    },
    {
      id: "ja-u172l2",
      unit: 172,
      lesson: 2,
      title: "When it is hidden",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe concealment and disclosure: いんぺい とうめいせい ないぶこくはつ せつめいせきにん りがい ふせい.",
      items: [
        { id: "ja-u172l2-inpei", type: "vocab", front: "いんぺい", reading: "inpei", meaning: "a cover-up", example: { jp: "いんぺいが 分かって、しゃちょうは やめました。", en: "The cover-up came out and the president resigned." }, drill: { jp: "いんぺいが 分かりました。", en: "The cover-up came to light." }, accept: ["concealment", "hushing up", "covering it up"], hint: "inpei — 隠 (hide) + 蔽 (cover over), two hiding kanji stacked. Always institutional and always wrong: one person keeping something back is ひみつ, an organisation doing it is いんぺい." },
        { id: "ja-u172l2-tomeisei", type: "vocab", front: "とうめいせい", reading: "tōmeisei", meaning: "transparency", example: { jp: "とうめいせいが 高い 会社ほど、信じられます。", en: "The more transparent a company, the more it is trusted." }, drill: { jp: "とうめいせいが 高いです。", en: "Transparency is high." }, accept: ["openness", "being above board", "being transparent"], hint: "tōmeisei — 透明 (transparent, as glass is) plus せい (-ness). Applied to an organisation it means outsiders can see how the decisions actually get made." },
        { id: "ja-u172l2-naibukokuhatsu", type: "vocab", front: "ないぶこくはつ", reading: "naibukokuhatsu", meaning: "whistle-blowing", example: { jp: "ないぶこくはつを した 人を まもる 決まりが あります。", en: "There are rules protecting people who blow the whistle." }, drill: { jp: "ないぶこくはつを しました。", en: "He blew the whistle." }, accept: ["internal disclosure", "reporting wrongdoing", "blowing the whistle"], hint: "naibukokuhatsu — ないぶ (internal) + 告発 (to denounce). The こくはつ is public; what makes it ないぶ is that the accuser sits inside the organisation being accused." },
        { id: "ja-u172l2-setsumeisekinin", type: "vocab", front: "せつめいせきにん", reading: "setsumeisekinin", meaning: "accountability", example: { jp: "こうにんの 立場に ある 人には、せつめいせきにんが あります。", en: "People in official positions have a duty to account for themselves." }, drill: { jp: "せつめいせきにんが あります。", en: "There is a duty to account." }, accept: ["duty to explain", "answerability", "accountability to explain"], hint: "Literally 'explanation responsibility' — the obligation is to EXPLAIN, not merely to be blamed. That is the whole force of the word." },
        { id: "ja-u172l2-rigai", type: "vocab", front: "りがい", reading: "rigai", meaning: "interests at stake", example: { jp: "りがいが ぶつかる ときは、外の 人に 見て もらいます。", en: "When interests conflict, we have an outsider look at it." }, drill: { jp: "りがいが ぶつかります。", en: "The interests collide." }, accept: ["stake", "advantage and harm", "vested interest"], hint: "rigai — 利 (gain) + 害 (harm), the upside and the downside named together. It means what you stand to win OR lose, which is why りがいかんけいしゃ is a stakeholder." },
        { id: "ja-u172l2-fusei", type: "vocab", front: "ふせい", reading: "fusei", meaning: "misconduct", example: { jp: "小さな ふせいを ゆるすと、大きな ふせいに なります。", en: "Allow small misconduct and it becomes large misconduct." }, drill: { jp: "ふせいが 見つかりました。", en: "Misconduct was found." }, accept: ["wrongdoing", "impropriety", "fraud"], hint: "fusei — 不 (not) + 正 (correct): not straight. Broader than a crime — padded expenses, rigged results, quiet rule-bending. ふせいこうい is the formal phrase for it." },
      ],
    },
    {
      id: "ja-u172l3",
      unit: 172,
      lesson: 3,
      title: "Answering for it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say who answers and how: せめる しゃざい つぐない ゆるし こうけんど とうじしゃ.",
      items: [
        { id: "ja-u172l3-semeru", type: "vocab", front: "せめる", reading: "semeru", meaning: "to blame", example: { jp: "人を せめる 前に、しくみを 見た ほうが いいです。", en: "Before blaming people, it's better to look at the system." }, drill: { jp: "せめるのは かんたんです。", en: "Blaming is the easy part." }, accept: ["to criticise", "to hold responsible", "to reproach"], hint: "semeru — 責める, built on the 責 of せきにん: to press a person for the responsibility. It is aimed at a PERSON, so a system cannot be せめる — which is exactly this lesson's point." },
        { id: "ja-u172l3-shazai", type: "vocab", front: "しゃざい", reading: "shazai", meaning: "a formal apology", example: { jp: "しゃざいの ことばより、なおす ほうが 大切です。", en: "Fixing it matters more than the words of apology." }, drill: { jp: "しゃざいを もとめました。", en: "We demanded a formal apology." }, accept: ["to apologise formally", "public apology", "a formal apology"], hint: "しゃざい is the public, official apology — a company or a minister. すみません is a person; しゃざい is an institution." },
        { id: "ja-u172l3-tsugunai", type: "vocab", front: "つぐない", reading: "tsugunai", meaning: "making amends", example: { jp: "お金だけでは、つぐないに ならない ことも あります。", en: "Sometimes money alone doesn't amount to making amends." }, drill: { jp: "つぐないを もとめます。", en: "We seek amends." }, accept: ["compensation", "atonement", "restitution"], hint: "tsugunai — the noun of つぐなう, to compensate: doing something that makes the harm good. It is an ACT, so words alone cannot be a つぐない however sincere they are." },
        { id: "ja-u172l3-yurushi", type: "vocab", front: "ゆるし", reading: "yurushi", meaning: "forgiveness", example: { jp: "ゆるしを もとめる 前に、じじつを ぜんぶ 話しました。", en: "Before asking forgiveness, I told the whole truth." }, drill: { jp: "ゆるしを まちます。", en: "I wait for forgiveness." }, accept: ["pardon", "absolution", "being forgiven"], hint: "yurushi — the noun of ゆるす, which does double duty as to forgive and to permit. ゆるしを もとめる is asking forgiveness; ゆるしを える is getting permission. The sentence decides which." },
        { id: "ja-u172l3-kokendo", type: "vocab", front: "こうけんど", reading: "kōkendo", meaning: "degree of contribution", example: { jp: "こうけんどに おうじて、りじゅんを ぶんぱいします。", en: "Profit is distributed according to degree of contribution." }, drill: { jp: "こうけんどが 高いです。", en: "The degree of contribution is high." }, accept: ["how much one contributed", "share of credit", "level of contribution"], hint: "kōkendo — こうけん (contribution) + 度 (a degree), the same 度 as ていど and しんど. It turns a yes-or-no into a measurable amount, which is what makes it usable for splitting profit." },
        { id: "ja-u172l3-tojisha", type: "vocab", front: "とうじしゃ", reading: "tōjisha", meaning: "the person directly involved", example: { jp: "とうじしゃの 話を 聞かずに 決めては いけません。", en: "You mustn't decide without hearing from the people directly involved." }, drill: { jp: "とうじしゃに 聞きます。", en: "We ask the people directly involved." }, accept: ["the party concerned", "those affected", "the people involved"], hint: "とうじしゃ is the person it actually happens TO — the word that separates 'about them' from 'with them'. Used constantly in social debate." },
      ],
    },
    {
      id: "ja-u172l4",
      unit: 172,
      lesson: 4,
      title: "What we owe each other",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Weigh duties that pull against each other: じんどう はいりょぎむ そうごふじょ きょうせい こうえき じこせきにん.",
      items: [
        { id: "ja-u172l4-jindo", type: "vocab", front: "じんどう", reading: "jindō", meaning: "humanity (as a principle)", example: { jp: "じんどうの 立場から、まず 子どもを たすけます。", en: "On humanitarian grounds, we help the children first." }, drill: { jp: "じんどうの 立場です。", en: "It is a humanitarian position." }, accept: ["humanitarian principle", "humaneness", "humanitarian grounds"], hint: "jindō — 人 (person) + 道 (a way): the way owed to a human being. It appears almost only in じんどうてき and じんどうしえん, humanitarian aid, so treat it as a fixed term." },
        { id: "ja-u172l4-hairyogimu", type: "vocab", front: "はいりょぎむ", reading: "hairyogimu", meaning: "a duty of care", example: { jp: "会社には、はたらく 人への はいりょぎむが あります。", en: "A company has a duty of care towards its workers." }, drill: { jp: "はいりょぎむが あります。", en: "There is a duty of care." }, accept: ["obligation to consider", "duty to look after", "the duty of care"], hint: "hairyogimu — 配慮 (thoughtful, anticipatory care) + ぎむ (duty). はいりょ on its own is the quiet consideration Japanese prizes; attaching ぎむ makes it enforceable rather than merely decent." },
        { id: "ja-u172l4-sogofujo", type: "vocab", front: "そうごふじょ", reading: "sōgofujo", meaning: "mutual aid", example: { jp: "小さな 町では、そうごふじょが 今も 生きて います。", en: "In small towns, mutual aid is still alive." }, drill: { jp: "そうごふじょが 大切です。", en: "Mutual aid matters." }, accept: ["helping each other", "reciprocal support", "mutual support"], hint: "sōgofujo — そうご (mutual) + 扶助 (support), built on the そうご taught earlier that is always symmetric. It names the old village arrangement of helping each other outside any market." },
        { id: "ja-u172l4-kyosei", type: "vocab", front: "きょうせい", reading: "kyōsei", meaning: "living together", example: { jp: "ちがう 考えの 人との きょうせいは、かんたんでは ありません。", en: "Living alongside people who think differently isn't easy." }, drill: { jp: "きょうせいは むずかしいです。", en: "Living together is difficult." }, accept: ["coexistence", "symbiosis", "living alongside"], hint: "kyōsei — 共 (together) + 生 (live): living alongside. Biology's symbiosis and society's coexistence are the same word here, which is why it sounds hopeful rather than merely tolerant." },
        { id: "ja-u172l4-koeki", type: "vocab", front: "こうえき", reading: "kōeki", meaning: "the public good", example: { jp: "こうえきの ために、こべつの りがいを ゆずる ことも あります。", en: "Sometimes private interests give way for the public good." }, drill: { jp: "こうえきの ために はたらきます。", en: "We work for the public good." }, accept: ["common good", "public benefit", "benefit to the public"], hint: "kōeki — 公 (public) + 益 (benefit), the 益 from the kanji unit. Set against こべつの りがい, private interest. こうえきほうじん is a public-interest corporation." },
        { id: "ja-u172l4-jikosekinin", type: "vocab", front: "じこせきにん", reading: "jikosekinin", meaning: "personal responsibility", example: { jp: "なんでも じこせきにんに すると、しゃかいの いみが なくなります。", en: "Make everything a matter of personal responsibility and society stops meaning anything." }, drill: { jp: "じこせきにんに します。", en: "We make it personal responsibility." }, accept: ["own responsibility", "at one's own risk", "your own responsibility"], hint: "じこせきにん vs そうごふじょ is the axis every argument in this lesson runs along — and neither side wins outright." },
      ],
    },
  ],
};
