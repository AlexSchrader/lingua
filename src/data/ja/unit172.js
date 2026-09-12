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
        { id: "ja-u172l1-rinri", type: "vocab", front: "りんり", reading: "rinri", meaning: "ethics", example: { jp: "新しい ぎじゅつには、新しい りんりが ひつように なります。", en: "New technology calls for new ethics." }, drill: { jp: "りんりが ひつようです。", en: "Ethics are necessary." }, accept: ["moral principles", "ethical standards"], hint: "りんり is the reasoned system — the rules a profession or a society argues out. どうとく is what an individual feels they ought to do." },
        { id: "ja-u172l1-dotoku", type: "vocab", front: "どうとく", reading: "dōtoku", meaning: "morals", example: { jp: "どうとくは 国に よって 少し ちがいます。", en: "Morals differ somewhat from country to country." }, accept: ["morality", "moral sense"] },
        { id: "ja-u172l1-songen", type: "vocab", front: "そんげん", reading: "songen", meaning: "dignity", example: { jp: "どんな 人にも、そんげんが あります。", en: "Every person has dignity." }, drill: { jp: "そんげんが あります。", en: "There is dignity." }, accept: ["human worth", "honour"] },
        { id: "ja-u172l1-jiritsu", type: "vocab", front: "じりつ", reading: "jiritsu", meaning: "autonomy", example: { jp: "子どもの じりつを たすけるのが、親の しごとです。", en: "Helping a child towards autonomy is a parent's work." }, accept: ["independence", "standing on one's own"] },
        { id: "ja-u172l1-gimukan", type: "vocab", front: "ぎむかん", reading: "gimukan", meaning: "sense of duty", example: { jp: "ぎむかんだけで つづける しごとは、長く つづきません。", en: "Work continued out of duty alone doesn't last long." }, drill: { jp: "ぎむかんが つよいです。", en: "The sense of duty is strong." }, accept: ["feeling of obligation"] },
        { id: "ja-u172l1-koheisa", type: "vocab", front: "こうへいさ", reading: "kōheisa", meaning: "fairness", example: { jp: "こうへいさが ない 決まりは、だれも まもりません。", en: "Nobody follows a rule that lacks fairness." }, accept: ["impartiality", "even-handedness"] },
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
        { id: "ja-u172l2-inpei", type: "vocab", front: "いんぺい", reading: "inpei", meaning: "a cover-up", example: { jp: "いんぺいが 分かって、しゃちょうは やめました。", en: "The cover-up came out and the president resigned." }, accept: ["concealment", "hushing up"] },
        { id: "ja-u172l2-tomeisei", type: "vocab", front: "とうめいせい", reading: "tōmeisei", meaning: "transparency", example: { jp: "とうめいせいが 高い 会社ほど、信じられます。", en: "The more transparent a company, the more it is trusted." }, accept: ["openness", "being above board"] },
        { id: "ja-u172l2-naibukokuhatsu", type: "vocab", front: "ないぶこくはつ", reading: "naibukokuhatsu", meaning: "whistle-blowing", example: { jp: "ないぶこくはつを した 人を まもる 決まりが あります。", en: "There are rules protecting people who blow the whistle." }, accept: ["internal disclosure", "reporting wrongdoing"] },
        { id: "ja-u172l2-setsumeisekinin", type: "vocab", front: "せつめいせきにん", reading: "setsumeisekinin", meaning: "accountability", example: { jp: "こうにんの 立場に ある 人には、せつめいせきにんが あります。", en: "People in official positions have a duty to account for themselves." }, accept: ["duty to explain", "answerability"], hint: "Literally 'explanation responsibility' — the obligation is to EXPLAIN, not merely to be blamed. That is the whole force of the word." },
        { id: "ja-u172l2-rigai", type: "vocab", front: "りがい", reading: "rigai", meaning: "interests at stake", example: { jp: "りがいが ぶつかる ときは、外の 人に 見て もらいます。", en: "When interests conflict, we have an outsider look at it." }, accept: ["stake", "advantage and harm", "vested interest"] },
        { id: "ja-u172l2-fusei", type: "vocab", front: "ふせい", reading: "fusei", meaning: "misconduct", example: { jp: "小さな ふせいを ゆるすと、大きな ふせいに なります。", en: "Allow small misconduct and it becomes large misconduct." }, accept: ["wrongdoing", "impropriety", "fraud"] },
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
        { id: "ja-u172l3-semeru", type: "vocab", front: "せめる", reading: "semeru", meaning: "to blame", example: { jp: "人を せめる 前に、しくみを 見た ほうが いいです。", en: "Before blaming people, it's better to look at the system." }, accept: ["to criticise", "to hold responsible", "to reproach"] },
        { id: "ja-u172l3-shazai", type: "vocab", front: "しゃざい", reading: "shazai", meaning: "a formal apology", example: { jp: "しゃざいの ことばより、なおす ほうが 大切です。", en: "Fixing it matters more than the words of apology." }, accept: ["to apologise formally", "public apology"], hint: "しゃざい is the public, official apology — a company or a minister. すみません is a person; しゃざい is an institution." },
        { id: "ja-u172l3-tsugunai", type: "vocab", front: "つぐない", reading: "tsugunai", meaning: "making amends", example: { jp: "お金だけでは、つぐないに ならない ことも あります。", en: "Sometimes money alone doesn't amount to making amends." }, accept: ["compensation", "atonement", "restitution"] },
        { id: "ja-u172l3-yurushi", type: "vocab", front: "ゆるし", reading: "yurushi", meaning: "forgiveness", example: { jp: "ゆるしを もとめる 前に、じじつを ぜんぶ 話しました。", en: "Before asking forgiveness, I told the whole truth." }, accept: ["pardon", "absolution"] },
        { id: "ja-u172l3-kokendo", type: "vocab", front: "こうけんど", reading: "kōkendo", meaning: "degree of contribution", example: { jp: "こうけんどに おうじて、りじゅんを ぶんぱいします。", en: "Profit is distributed according to degree of contribution." }, accept: ["how much one contributed", "share of credit"] },
        { id: "ja-u172l3-tojisha", type: "vocab", front: "とうじしゃ", reading: "tōjisha", meaning: "the person directly involved", example: { jp: "とうじしゃの 話を 聞かずに 決めては いけません。", en: "You mustn't decide without hearing from the people directly involved." }, accept: ["the party concerned", "those affected"], hint: "とうじしゃ is the person it actually happens TO — the word that separates 'about them' from 'with them'. Used constantly in social debate." },
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
        { id: "ja-u172l4-jindo", type: "vocab", front: "じんどう", reading: "jindō", meaning: "humanity (as a principle)", example: { jp: "じんどうの 立場から、まず 子どもを たすけます。", en: "On humanitarian grounds, we help the children first." }, accept: ["humanitarian principle", "humaneness"] },
        { id: "ja-u172l4-hairyogimu", type: "vocab", front: "はいりょぎむ", reading: "hairyogimu", meaning: "a duty of care", example: { jp: "会社には、はたらく 人への はいりょぎむが あります。", en: "A company has a duty of care towards its workers." }, accept: ["obligation to consider", "duty to look after"] },
        { id: "ja-u172l4-sogofujo", type: "vocab", front: "そうごふじょ", reading: "sōgofujo", meaning: "mutual aid", example: { jp: "小さな 町では、そうごふじょが 今も 生きて います。", en: "In small towns, mutual aid is still alive." }, accept: ["helping each other", "reciprocal support"] },
        { id: "ja-u172l4-kyosei", type: "vocab", front: "きょうせい", reading: "kyōsei", meaning: "living together", example: { jp: "ちがう 考えの 人との きょうせいは、かんたんでは ありません。", en: "Living alongside people who think differently isn't easy." }, accept: ["coexistence", "symbiosis"] },
        { id: "ja-u172l4-koeki", type: "vocab", front: "こうえき", reading: "kōeki", meaning: "the public good", example: { jp: "こうえきの ために、こべつの りがいを ゆずる ことも あります。", en: "Sometimes private interests give way for the public good." }, accept: ["common good", "public benefit"] },
        { id: "ja-u172l4-jikosekinin", type: "vocab", front: "じこせきにん", reading: "jikosekinin", meaning: "personal responsibility", example: { jp: "なんでも じこせきにんに すると、しゃかいの いみが なくなります。", en: "Make everything a matter of personal responsibility and society stops meaning anything." }, drill: { jp: "じこせきにんに します。", en: "We make it personal responsibility." }, accept: ["own responsibility", "at one's own risk"], hint: "じこせきにん vs そうごふじょ is the axis every argument in this lesson runs along — and neither side wins outright." },
      ],
    },
  ],
};
