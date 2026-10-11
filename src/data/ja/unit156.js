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
        { id: "ja-u156l1-ronten", type: "vocab", front: "ろんてん", reading: "ronten", meaning: "point at issue", example: { jp: "会議が 長く なったのは、ろんてんが はっきりして いなかったからです。", en: "The meeting ran long because the point at issue was never made clear." }, drill: { jp: "ろんてんを はっきりさせましょう。", en: "Let us make the point at issue clear." }, accept: ["the issue", "point of contention", "crux"], hint: "ろんてん is the thing being argued ABOUT — not your opinion of it. 「ろんてんは 何ですか」 asks what the disagreement actually is." },
        { id: "ja-u156l1-yoten", type: "vocab", front: "ようてん", reading: "yōten", meaning: "the main point", example: { jp: "話が 長い ときは、ようてんを 先に 言って ください。", en: "When it's a long story, please give the main point first." }, drill: { jp: "ようてんが よく 分かりました。", en: "I understood the main point well." }, accept: ["gist", "key point", "the substance"], hint: "yōten — yō as in 要 (essential) plus ten, a point. ろんてん is the point people DISAGREE about; ようてん is the point that matters most. A talk can have a clear ようてん and no ろんてん at all." },
        { id: "ja-u156l1-shushi", type: "vocab", front: "しゅし", reading: "shushi", meaning: "the purport", example: { jp: "この 文章の しゅしは 分かりますが、書き方には 反対です。", en: "I understand what this piece is driving at, but I disagree with how it's written." }, drill: { jp: "しゅしは わかります。", en: "I understand the purport." }, accept: ["intent", "the point of it", "aim"], hint: "しゅし is what a speaker is DRIVING AT, ようてん is the content itself. A speech can have a clear ようてん and a hidden しゅし." },
        { id: "ja-u156l1-dantei", type: "vocab", front: "だんてい", reading: "dantei", meaning: "a firm conclusion", example: { jp: "まだ しょうこが 少ないので、だんていは できません。", en: "There is still little evidence, so I can't state it as a conclusion." }, drill: { jp: "だんていを いそがないで ください。", en: "Please do not rush to a conclusion." }, accept: ["assertion", "definite statement", "to conclude"], hint: "dantei — dan as in 断 (cut off) plus tei (settle): you cut off the alternatives. だんていできません is the standard polite way to say you will not commit to a conclusion yet." },
        { id: "ja-u156l1-kyocho", type: "vocab", front: "きょうちょう", reading: "kyōchō", meaning: "emphasis", example: { jp: "先生は 安全の 大切さを 何度も きょうちょうしました。", en: "The teacher emphasised the importance of safety again and again." }, drill: { jp: "きょうちょうしたい ところが あります。", en: "There is a part I want to emphasise." }, accept: ["to stress", "to underline", "highlighting"], hint: "kyōchō — kyō (strong) plus chō (tune), so literally pitch it strongly. It is what a speaker DOES to a point, never a description of the point: 何度も きょうちょうする is the stock phrase." },
        { id: "ja-u156l1-meikaku", type: "vocab", front: "めいかく", reading: "meikaku", meaning: "clear-cut", example: { jp: "めいかくな 答えが ないまま、話は 先に 進みました。", en: "The discussion moved on without any clear-cut answer." }, drill: { jp: "めいかくに 答えて ください。", en: "Please answer clearly." }, accept: ["definite", "unambiguous", "explicit"], hint: "meikaku — mei (bright) plus kaku (certain). Not merely easy to understand: clear enough that nobody can read it two ways. めいかくな きまり is a rule with no loopholes, and あいまい is its exact opposite." },
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
        { id: "ja-u156l2-hanron", type: "vocab", front: "はんろん", reading: "hanron", meaning: "counter-argument", example: { jp: "その 意見には はんろんが ありますが、今は 聞くだけに します。", en: "I have a counter-argument to that view, but for now I'll just listen." }, drill: { jp: "はんろんを 聞かせて ください。", en: "Please let me hear the counter-argument." }, accept: ["rebuttal", "to argue back", "objection"], hint: "はんろん is an argument against a POSITION; ひはん is criticism of a thing or person. Attacking the argument is はんろん — attacking the arguer is not." },
        { id: "ja-u156l2-hitei", type: "vocab", front: "ひてい", reading: "hitei", meaning: "denial", example: { jp: "会社は その 話を ひていしましたが、新聞は 書き続けました。", en: "The company denied the story, but the papers kept writing it." }, drill: { jp: "ひていは しませんでした。", en: "They did not deny it." }, accept: ["to deny", "negation", "to reject"], hint: "hitei — hi (non-) plus tei (fix), the standard pair with こうてい, affirmation. ひていする denies a STATEMENT; refusing a request is ことわる, a different word entirely." },
        { id: "ja-u156l2-hihan", type: "vocab", front: "ひはん", reading: "hihan", meaning: "criticism", example: { jp: "ひはんを 受けても、自分の 考えは 変わりませんでした。", en: "Even after taking criticism, my own view didn't change." }, drill: { jp: "ひはんが 多く なりました。", en: "The criticism has grown." }, accept: ["to criticise", "critique", "censure"], hint: "hihan — hi (criticise) plus han (judge). Cooler than the English word: it covers reasoned review as much as attack, so ひはんてきに 読む, to read with judgement, is a compliment." },
        { id: "ja-u156l2-yuzuru", type: "vocab", front: "ゆずる", reading: "yuzuru", meaning: "to concede", example: { jp: "小さな ところは ゆずっても、ようてんは ゆずりません。", en: "I'll concede the small points, but not the main one." }, drill: { jp: "ゆずるのが むずかしいです。", en: "Conceding is the difficult part." }, accept: ["to give way", "to yield", "to hand over"], hint: "yuzuru — one of the few words that works on a seat and on an argument alike: せきを ゆずる is giving up your seat, いけんを ゆずる is giving ground. Both mean handing something over willingly." },
        { id: "ja-u156l2-toron", type: "vocab", front: "とうろん", reading: "tōron", meaning: "a debate", example: { jp: "とうろんの あとで、みんなの 意見が 少し 変わりました。", en: "After the debate, everyone's views had shifted a little." }, drill: { jp: "とうろんを はじめましょう。", en: "Let us begin the debate." }, accept: ["discussion", "to debate", "forum"], hint: "tōron — tō (discuss) plus ron (argue). A structured debate with sides, not a chat: はなしあい is cooperative, とうろん has opponents. It is also the classroom word for a formal debating exercise." },
        { id: "ja-u156l2-aimaisa", type: "vocab", front: "あいまいさ", reading: "aimaisa", meaning: "vagueness", example: { jp: "この 決まりの あいまいさが、後で 大きな 問題に なりました。", en: "The vagueness of this rule became a big problem later." }, drill: { jp: "あいまいさが まだ あります。", en: "Some vagueness still remains." }, accept: ["ambiguity", "lack of clarity", "vagueness"], hint: "aimaisa — あいまい plus the noun-making さ, the same さ as in たかさ (height). The adjective describes the rule; あいまいさ names the AMOUNT of it, which is what you can measure and complain about." },
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
        { id: "ja-u156l3-shoko", type: "vocab", front: "しょうこ", reading: "shōko", meaning: "evidence", example: { jp: "しょうこが 出て きたので、話は そこで 終わりました。", en: "Evidence turned up, and the argument ended right there." }, drill: { jp: "しょうこが 足りません。", en: "There is not enough evidence." }, accept: ["proof", "grounds", "the evidence"], hint: "shōko — shō (prove) plus ko (check): proof you can put on the table. うらづけ is the ACT of backing a claim up; しょうこ is the thing you back it up with." },
        { id: "ja-u156l3-urazuke", type: "vocab", front: "うらづけ", reading: "urazuke", meaning: "corroboration", example: { jp: "その 話には うらづけが ありませんから、まだ 信じられません。", en: "There's nothing to corroborate that story, so I can't believe it yet." }, drill: { jp: "うらづけを さがして います。", en: "I am looking for corroboration." }, accept: ["backing", "support", "confirmation"], hint: "うら (the back) + つける (to attach) — what you attach behind a claim so it stands up." },
        { id: "ja-u156l3-hikiyo", type: "vocab", front: "ひきよう", reading: "hikiyō", meaning: "a quotation (the act of citing)", example: { jp: "レポートで ひきようする ときは、しゅってんも 書きます。", en: "When you quote in a report, you write the source as well." }, drill: { jp: "ひきようの あとに しゅってんを 書きます。", en: "After the quotation you write the source." }, accept: ["to quote", "citation", "quoting"], hint: "hikiyō — hiki (pull) plus yō (use): you pull someone's words and use them. It names the ACT, so ひきようする is to quote; the quoted words themselves are just ことば." },
        { id: "ja-u156l3-shutten", type: "vocab", front: "しゅってん", reading: "shutten", meaning: "source", example: { jp: "この 数字の しゅってんは 国の しらべた 記録です。", en: "The source of this figure is the national records." }, drill: { jp: "しゅってんが 分かりません。", en: "I do not know the source." }, accept: ["origin of a quote", "reference", "the source"], hint: "shutten — shutsu (come out) plus ten (point): the point a quote came OUT of — a book, an article, a record. しんぴょうせい is judged on it, which is why the two words travel together." },
        { id: "ja-u156l3-shinpyosei", type: "vocab", front: "しんぴょうせい", reading: "shinpyōsei", meaning: "credibility (trustworthiness of a source)", example: { jp: "しゅってんが はっきりしない 記事は、しんぴょうせいが 低いです。", en: "An article whose source is unclear has low credibility." }, drill: { jp: "しんぴょうせいが 高い 記事です。", en: "It is an article with high credibility." }, accept: ["reliability", "trustworthiness", "how credible it is"], hint: "shinpyōsei — shin (believe) plus pyō (evaluate) plus sei (-ness). It is a property of the SOURCE, not of the claim: a true statement from an anonymous post still has low しんぴょうせい." },
        { id: "ja-u156l3-jitsurei", type: "vocab", front: "じつれい", reading: "jitsurei", meaning: "an actual case", example: { jp: "じつれいを 一つ 出すと、みんな すぐに 分かりました。", en: "Once I gave one actual case, everyone understood at once." }, drill: { jp: "じつれいを 二つ あげました。", en: "I gave two actual cases." }, accept: ["real example", "concrete instance", "a real case"], hint: "jitsurei — jitsu (actual) plus rei (example): a case that really happened. ぐたいれい may be invented to illustrate a point; じつれい may not, and that is the entire difference." },
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
        { id: "ja-u156l4-settoku", type: "vocab", front: "せっとく", reading: "settoku", meaning: "persuasion", example: { jp: "長い 時間 話しても、せっとくは できませんでした。", en: "Even after talking a long time, I couldn't persuade them." }, drill: { jp: "せっとくに 時間が かかりました。", en: "The persuading took time." }, accept: ["to persuade", "to talk round", "persuading"], hint: "settoku — setsu (explain) plus toku (gain): explain until you gain their agreement. It takes a PERSON as its object — 人を せっとくする — never an argument." },
        { id: "ja-u156l4-settokuryoku", type: "vocab", front: "せっとくりょく", reading: "settokuryoku", meaning: "persuasive force", example: { jp: "じつれいが 多い 話は、せっとくりょくが あります。", en: "An argument with plenty of real cases carries persuasive force." }, drill: { jp: "せっとくりょくが 足りません。", en: "It lacks persuasive force." }, accept: ["persuasiveness", "convincing power", "how convincing it is"], hint: "settokuryoku — せっとく plus りょく (force), the same りょく as in たいりょく (stamina). It belongs to the ARGUMENT, not the speaker: a quiet person can give a speech with huge せっとくりょく." },
        { id: "ja-u156l4-iikaeru", type: "vocab", front: "いいかえる", reading: "iikaeru", meaning: "to rephrase (to put another way)", example: { jp: "むずかしい ところは、やさしい ことばに いいかえて 説明します。", en: "For the difficult parts, I rephrase them in easier words and explain." }, drill: { jp: "いいかえると どう なりますか。", en: "What does it come to if you put it another way?" }, accept: ["to put another way", "to restate", "to say it differently"], hint: "iikaeru — iu (say) plus kaeru (change): say it changed. いいかえると at the head of a sentence is the standard in other words, and it is the most useful discourse marker at this level." },
        { id: "ja-u156l4-gutairei", type: "vocab", front: "ぐたいれい", reading: "gutairei", meaning: "a concrete example", example: { jp: "ぐたいれいが ないと、話は あいまいなままです。", en: "Without a concrete example, the argument stays vague." }, drill: { jp: "ぐたいれいを 出して ください。", en: "Please give a concrete example." }, accept: ["specific example", "illustration", "a concrete case"], hint: "gutairei — gutai (concrete) plus rei (example), the exact opposite of ちゅうしょうてき. ぐたいれいは ありますか is the polite way of saying an explanation was too abstract to use." },
        { id: "ja-u156l4-yuri", type: "vocab", front: "ゆうり", reading: "yūri", meaning: "advantageous", example: { jp: "しょうこが そろって いるので、こちらが ゆうりです。", en: "The evidence is all lined up, so we're in the stronger position." }, drill: { jp: "ゆうりに なりました。", en: "It became advantageous." }, accept: ["favourable", "in one's favour", "the upper hand"], hint: "ゆうり and ふり are a pair, and both describe a POSITION, not a feeling — 「ゆうりな 立場」." },
        { id: "ja-u156l4-furi", type: "vocab", front: "ふり", reading: "furi", meaning: "disadvantageous", example: { jp: "じかんが 足りないのは、こちらに ふりです。", en: "Being short of time works against us." }, drill: { jp: "こちらに ふりに なりました。", en: "It has turned against us." }, accept: ["unfavourable", "against one", "a handicap"], hint: "furi — fu (not) plus ri (advantage), with ゆうり as its mirror image. It describes a SITUATION, never a person: 立場が ふり, not 私が ふり." },
      ],
    },
  ],
};
