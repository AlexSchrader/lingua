// Unit 156 — ろんぎ・せっとく (Argument and persuasion) — B2 / JLPT N2
// Strand B, first B2 thematic unit. B1 taught how to state an opinion and disagree
// politely; B2 is where a claim has to survive being pushed back on — the point at
// issue, the counter-argument, the evidence behind it, and the craft of bringing
// someone with you.
//
// SCRIPT CHANGE FROM B1, deliberate: examples are written in MIXED SCRIPT, using
// kanji the learner has already been taught, instead of all-kana. B1's thematic
// units were 0% kanji and its character units 100%, so a learner alternating
// u99→u100→u101 flipped between all-kana and all-kanji prose every unit — the
// truth-agent flagged it at exactly this band. By u156 the learner knows 568 glyphs;
// writing 意見 as いけん teaches them to read something nobody writes. Every kanji
// used here is verified taught-at-or-before by `npm run check:glyphs`.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT156 = {
  id: "ja-u156",
  lang: "ja",
  title: "ろんぎ・せっとく",
  order: 156,
  stage: "b2",
  lessons: [
    {
      id: "ja-u156l1",
      unit: 156,
      lesson: 1,
      title: "Making a case",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State a claim precisely enough to be argued with: ろんてん ようてん しゅし だんてい きょうちょう めいかく.",
      items: [
        { id: "ja-u156l1-ronten", type: "vocab", front: "ろんてん", reading: "ronten", meaning: "point at issue", example: { jp: "会議が 長く なったのは、ろんてんが はっきりして いなかったからです。", en: "The meeting ran long because the point at issue was never made clear." }, accept: ["the issue", "point of contention", "crux"], hint: "ろんてん is the thing being argued ABOUT — not your opinion of it. 「ろんてんは 何ですか」 asks what the disagreement actually is." },
        { id: "ja-u156l1-yoten", type: "vocab", front: "ようてん", reading: "yōten", meaning: "the main point", example: { jp: "話が 長い ときは、ようてんを 先に 言って ください。", en: "When it's a long story, please give the main point first." }, accept: ["gist", "key point", "the substance"] },
        { id: "ja-u156l1-shushi", type: "vocab", front: "しゅし", reading: "shushi", meaning: "the purport", example: { jp: "この 文章の しゅしは 分かりますが、書き方には 反対です。", en: "I understand what this piece is driving at, but I disagree with how it's written." }, accept: ["intent", "the point of it", "aim"], hint: "しゅし is what a speaker is DRIVING AT, ようてん is the content itself. A speech can have a clear ようてん and a hidden しゅし." },
        { id: "ja-u156l1-dantei", type: "vocab", front: "だんてい", reading: "dantei", meaning: "a firm conclusion", example: { jp: "まだ しょうこが 少ないので、だんていは できません。", en: "There is still little evidence, so I can't state it as a conclusion." }, accept: ["assertion", "definite statement", "to conclude"] },
        { id: "ja-u156l1-kyocho", type: "vocab", front: "きょうちょう", reading: "kyōchō", meaning: "emphasis", example: { jp: "先生は 安全の 大切さを 何度も きょうちょうしました。", en: "The teacher emphasised the importance of safety again and again." }, accept: ["to stress", "to underline", "highlighting"] },
        { id: "ja-u156l1-meikaku", type: "vocab", front: "めいかく", reading: "meikaku", meaning: "clear-cut", example: { jp: "めいかくな 答えが ないまま、話は 先に 進みました。", en: "The discussion moved on without any clear-cut answer." }, accept: ["definite", "unambiguous", "explicit"] },
      ],
    },
    {
      id: "ja-u156l2",
      unit: 156,
      lesson: 2,
      title: "Pushing back",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Disagree with a position and say what is wrong with it: はんろん ひてい ひはん ゆずる とうろん あいまいさ.",
      items: [
        { id: "ja-u156l2-hanron", type: "vocab", front: "はんろん", reading: "hanron", meaning: "counter-argument", example: { jp: "その 意見には はんろんが ありますが、今は 聞くだけに します。", en: "I have a counter-argument to that view, but for now I'll just listen." }, accept: ["rebuttal", "to argue back", "objection"], hint: "はんろん is an argument against a POSITION; ひはん is criticism of a thing or person. Attacking the argument is はんろん — attacking the arguer is not." },
        { id: "ja-u156l2-hitei", type: "vocab", front: "ひてい", reading: "hitei", meaning: "denial", example: { jp: "会社は その 話を ひていしましたが、新聞は 書き続けました。", en: "The company denied the story, but the papers kept writing it." }, accept: ["to deny", "negation", "to reject"] },
        { id: "ja-u156l2-hihan", type: "vocab", front: "ひはん", reading: "hihan", meaning: "criticism", example: { jp: "ひはんを 受けても、自分の 考えは 変わりませんでした。", en: "Even after taking criticism, my own view didn't change." }, accept: ["to criticise", "critique", "censure"] },
        { id: "ja-u156l2-yuzuru", type: "vocab", front: "ゆずる", reading: "yuzuru", meaning: "to concede", example: { jp: "小さな ところは ゆずっても、ようてんは ゆずりません。", en: "I'll concede the small points, but not the main one." }, accept: ["to give way", "to yield", "to hand over"], hint: "ゆずる also means giving up your seat — the same idea of stepping back so someone else can take the space." },
        { id: "ja-u156l2-toron", type: "vocab", front: "とうろん", reading: "tōron", meaning: "a debate", example: { jp: "とうろんの あとで、みんなの 意見が 少し 変わりました。", en: "After the debate, everyone's views had shifted a little." }, accept: ["discussion", "to debate", "forum"] },
        { id: "ja-u156l2-aimaisa", type: "vocab", front: "あいまいさ", reading: "aimaisa", meaning: "vagueness", example: { jp: "この 決まりの あいまいさが、後で 大きな 問題に なりました。", en: "The vagueness of this rule became a big problem later." }, accept: ["ambiguity", "lack of clarity"] },
      ],
    },
    {
      id: "ja-u156l3",
      unit: 156,
      lesson: 3,
      title: "Backing it up",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Show where a claim comes from and how far it can be trusted: しょうこ うらづけ ひきよう しゅってん しんぴょうせい じつれい.",
      items: [
        { id: "ja-u156l3-shoko", type: "vocab", front: "しょうこ", reading: "shōko", meaning: "evidence", example: { jp: "しょうこが 出て きたので、話は そこで 終わりました。", en: "Evidence turned up, and the argument ended right there." }, accept: ["proof", "grounds"] },
        { id: "ja-u156l3-urazuke", type: "vocab", front: "うらづけ", reading: "urazuke", meaning: "corroboration", example: { jp: "その 話には うらづけが ありませんから、まだ 信じられません。", en: "There's nothing to corroborate that story, so I can't believe it yet." }, accept: ["backing", "support", "confirmation"], hint: "うら (the back) + つける (to attach) — what you attach behind a claim so it stands up." },
        { id: "ja-u156l3-hikiyo", type: "vocab", front: "ひきよう", reading: "hikiyō", meaning: "a quotation", example: { jp: "レポートで ひきようする ときは、しゅってんも 書きます。", en: "When you quote in a report, you write the source as well." }, accept: ["to quote", "citation"] },
        { id: "ja-u156l3-shutten", type: "vocab", front: "しゅってん", reading: "shutten", meaning: "source", example: { jp: "この 数字の しゅってんは 国の しらべた 記録です。", en: "The source of this figure is the national records." }, accept: ["origin of a quote", "reference"] },
        { id: "ja-u156l3-shinpyosei", type: "vocab", front: "しんぴょうせい", reading: "shinpyōsei", meaning: "credibility", example: { jp: "しゅってんが はっきりしない 記事は、しんぴょうせいが 低いです。", en: "An article whose source is unclear has low credibility." }, accept: ["reliability", "trustworthiness"] },
        { id: "ja-u156l3-jitsurei", type: "vocab", front: "じつれい", reading: "jitsurei", meaning: "an actual case", example: { jp: "じつれいを 一つ 出すと、みんな すぐに 分かりました。", en: "Once I gave one actual case, everyone understood at once." }, accept: ["real example", "concrete instance"] },
      ],
    },
    {
      id: "ja-u156l4",
      unit: 156,
      lesson: 4,
      title: "The craft of persuading",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Bring someone with you rather than defeat them: せっとく せっとくりょく いいかえる ぐたいれい ゆうり ふり.",
      items: [
        { id: "ja-u156l4-settoku", type: "vocab", front: "せっとく", reading: "settoku", meaning: "persuasion", example: { jp: "長い 時間 話しても、せっとくは できませんでした。", en: "Even after talking a long time, I couldn't persuade them." }, accept: ["to persuade", "to talk round"] },
        { id: "ja-u156l4-settokuryoku", type: "vocab", front: "せっとくりょく", reading: "settokuryoku", meaning: "persuasive force", example: { jp: "じつれいが 多い 話は、せっとくりょくが あります。", en: "An argument with plenty of real cases carries persuasive force." }, accept: ["persuasiveness", "convincing power"] },
        { id: "ja-u156l4-iikaeru", type: "vocab", front: "いいかえる", reading: "iikaeru", meaning: "to rephrase", example: { jp: "むずかしい ところは、やさしい ことばに いいかえて 説明します。", en: "For the difficult parts, I rephrase them in easier words and explain." }, accept: ["to put another way", "to restate"] },
        { id: "ja-u156l4-gutairei", type: "vocab", front: "ぐたいれい", reading: "gutairei", meaning: "a concrete example", example: { jp: "ぐたいれいが ないと、話は あいまいなままです。", en: "Without a concrete example, the argument stays vague." }, accept: ["specific example", "illustration"] },
        { id: "ja-u156l4-yuri", type: "vocab", front: "ゆうり", reading: "yūri", meaning: "advantageous", example: { jp: "しょうこが そろって いるので、こちらが ゆうりです。", en: "The evidence is all lined up, so we're in the stronger position." }, accept: ["favourable", "in one's favour", "the upper hand"], hint: "ゆうり and ふり are a pair, and both describe a POSITION, not a feeling — 「ゆうりな 立場」." },
        { id: "ja-u156l4-furi", type: "vocab", front: "ふり", reading: "furi", meaning: "disadvantageous", example: { jp: "じかんが 足りないのは、こちらに ふりです。", en: "Being short of time works against us." }, accept: ["unfavourable", "against one", "a handicap"] },
      ],
    },
  ],
};
