// Unit 176 — アイデンティティ・しゃかい (Identity and society) — B2 / JLPT N2
// Block-2 house rules are documented in unit174.js.
//
// The B2 move here is from "what I am" to "what a society reads me as". A1/A2
// taught 名前・国・仕事; this unit is about belonging, the group's expectation of
// you, and the vocabulary for saying that the two do not match.
export const UNIT176 = {
  id: "ja-u176",
  lang: "ja",
  title: "アイデンティティ・しゃかい",
  order: 176,
  stage: "b2",
  lessons: [
    {
      id: "ja-u176l1",
      unit: 176,
      lesson: 1,
      title: "Where you are from",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe origin and belonging without reducing a person to one label: しゅっしん こくせき みんぞく きぞく しょぞく せいべつ.",
      items: [
        { id: "ja-u176l1-shusshin", type: "vocab", front: "しゅっしん", reading: "shusshin", meaning: "where one is from", example: { jp: "しゅっしんを 聞かれる たびに、少し 長い 説明に なります。", en: "Every time I'm asked where I'm from, it turns into a slightly long explanation." }, accept: ["origin", "hometown", "background"] },
        { id: "ja-u176l1-kokuseki", type: "vocab", front: "こくせき", reading: "kokuseki", meaning: "nationality", example: { jp: "こくせきは 変わりましたが、育った 町は 同じです。", en: "My nationality changed, but the town I grew up in is the same." }, accept: ["citizenship", "which country's papers"] },
        { id: "ja-u176l1-minzoku", type: "vocab", front: "みんぞく", reading: "minzoku", meaning: "an ethnic group", example: { jp: "この 国には 多くの みんぞくが 住んで います。", en: "Many ethnic groups live in this country." }, accept: ["a people", "ethnicity", "ethnic community"], hint: "みんぞく is a people sharing language and custom; こくせき is the paperwork. They come apart constantly, and B2 is where you need both words in one sentence." },
        { id: "ja-u176l1-kizoku", type: "vocab", front: "きぞく", reading: "kizoku", meaning: "belonging", example: { jp: "どこにも きぞくして いない ような 気が する ときが あります。", en: "There are times I feel as though I belong nowhere." }, accept: ["affiliation", "being part of", "membership"] },
        { id: "ja-u176l1-shozoku", type: "vocab", front: "しょぞく", reading: "shozoku", meaning: "the body one belongs to", example: { jp: "しょぞくは 書きましたが、実さいの 仕事は ちがいます。", en: "I wrote down my affiliation, but my actual work is different." }, accept: ["attached to", "one's organisation", "where one is registered"] },
        { id: "ja-u176l1-seibetsu", type: "vocab", front: "せいべつ", reading: "seibetsu", meaning: "sex or gender", example: { jp: "この 紙には せいべつを 書かなくても いいと 言われました。", en: "I was told I don't have to write my gender on this form." }, accept: ["gender", "male or female"] },
      ],
    },
    {
      id: "ja-u176l2",
      unit: 176,
      lesson: 2,
      title: "The self you carry",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the inner side of identity — character, self-worth, and what you notice about yourself: じんかく こせい じそんしん いしき むいしき われわれ.",
      items: [
        { id: "ja-u176l2-jinkaku", type: "vocab", front: "じんかく", reading: "jinkaku", meaning: "a person's character", example: { jp: "仕事の 力と じんかくは 別の ものだと 思います。", en: "I think ability at work and a person's character are separate things." }, accept: ["personhood", "moral character", "who someone is"] },
        { id: "ja-u176l2-kosei", type: "vocab", front: "こせい", reading: "kosei", meaning: "individuality", example: { jp: "同じ 服を 着ても、こせいは かくせません。", en: "Even wearing the same clothes, you can't hide individuality." }, accept: ["what makes someone distinct", "personality", "one's own character"] },
        { id: "ja-u176l2-jisonshin", type: "vocab", front: "じそんしん", reading: "jisonshin", meaning: "self-respect", example: { jp: "人の 前で 直されて、じそんしんが 少し きずつきました。", en: "Being corrected in front of others bruised my self-respect a little." }, accept: ["pride in oneself", "self-esteem", "dignity"] },
        { id: "ja-u176l2-ishiki", type: "vocab", front: "いしき", reading: "ishiki", meaning: "awareness", example: { jp: "安全への いしきが 高まって、けがが へりました。", en: "Awareness of safety rose, and injuries fell." }, accept: ["consciousness", "mindfulness", "being conscious of"] },
        { id: "ja-u176l2-muishiki", type: "vocab", front: "むいしき", reading: "muishiki", meaning: "unconsciously", example: { jp: "むいしきに 母と 同じ 言い方を して いました。", en: "I was unconsciously using the same turn of phrase as my mother." }, accept: ["without realising", "unconscious", "unthinking"] },
        { id: "ja-u176l2-wareware", type: "vocab", front: "われわれ", reading: "wareware", meaning: "we (formal)", example: { jp: "われわれの 世代は、その 話を 学校で 習いませんでした。", en: "Our generation didn't learn that story at school." }, accept: ["us", "we", "our side"], hint: "われわれ is the formal, speech-making 私たち — a leader addressing a group, or a writer speaking for a whole society." },
      ],
    },
    {
      id: "ja-u176l3",
      unit: 176,
      lesson: 3,
      title: "What the group expects",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the unwritten rules a group runs on, and the pressure to go along with them: きはん かんしゅう しゅうぞく どうちょう せけん しゃかいてき.",
      items: [
        { id: "ja-u176l3-kihan", type: "vocab", front: "きはん", reading: "kihan", meaning: "a norm", example: { jp: "書かれて いない きはんの ほうが、きそくより 強い ことが あります。", en: "Unwritten norms are sometimes stronger than the written rules." }, accept: ["standard", "the done thing", "social rule"] },
        { id: "ja-u176l3-kanshu", type: "vocab", front: "かんしゅう", reading: "kanshū", meaning: "an established custom", example: { jp: "その かんしゅうは 古いですが、今も 続いて います。", en: "That custom is old, but it continues even now." }, accept: ["practice", "convention", "usage"] },
        { id: "ja-u176l3-shuzoku", type: "vocab", front: "しゅうぞく", reading: "shūzoku", meaning: "a folk custom", example: { jp: "この 地方の しゅうぞくは 春の 祭りに よく 表れます。", en: "This region's folk customs show most clearly at the spring festival." }, accept: ["tradition", "folkway", "local custom"], hint: "かんしゅう is how things are habitually DONE (business, law); しゅうぞく is inherited folk practice — festivals, food, rites." },
        { id: "ja-u176l3-docho", type: "vocab", front: "どうちょう", reading: "dōchō", meaning: "falling in with others", example: { jp: "みんなが 手を あげたので、どうちょうして 私も あげました。", en: "Everyone put their hand up, so I fell in with them and did too." }, accept: ["going along with", "conforming", "toeing the line"] },
        { id: "ja-u176l3-seken", type: "vocab", front: "せけん", reading: "seken", meaning: "what people will say", example: { jp: "せけんの 目を 気に して、ほんとうの ことを 言えませんでした。", en: "Minding what people would say, I couldn't tell the truth." }, accept: ["society at large", "the public eye", "the world"] },
        { id: "ja-u176l3-shakaiteki", type: "vocab", front: "しゃかいてき", reading: "shakaiteki", meaning: "social (in nature)", example: { jp: "これは 一人の 問題では なく、しゃかいてきな 問題です。", en: "This isn't one person's problem — it's a social one." }, accept: ["societal", "of society", "public"] },
      ],
    },
    {
      id: "ja-u176l4",
      unit: 176,
      lesson: 4,
      title: "Difference and standing",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about difference as something a society handles well or badly: たようせい きょうせい しゅたい そんざい ゆうえつかん れっとうかん.",
      items: [
        { id: "ja-u176l4-tayosei", type: "vocab", front: "たようせい", reading: "tayōsei", meaning: "diversity", example: { jp: "たようせいは 数を そろえる ことでは ないと 思います。", en: "I don't think diversity is a matter of making the numbers add up." }, accept: ["variety", "plurality", "being diverse"] },
        { id: "ja-u176l4-kyosei", type: "vocab", front: "きょうせい", reading: "kyōsei", meaning: "living alongside each other", example: { jp: "ちがう 考えの 人との きょうせいは 時間が かかります。", en: "Living alongside people who think differently takes time." }, accept: ["coexistence", "symbiosis", "sharing a life"] },
        { id: "ja-u176l4-shutai", type: "vocab", front: "しゅたい", reading: "shutai", meaning: "the acting party", example: { jp: "この 計画の しゅたいは 国では なく 住民です。", en: "The party carrying out this plan is the residents, not the state." }, accept: ["the agent", "the one acting", "main body"] },
        { id: "ja-u176l4-sonzai", type: "vocab", front: "そんざい", reading: "sonzai", meaning: "presence", example: { jp: "小さな 店ですが、町には 大きな そんざいです。", en: "It's a small shop, but a large presence in the town." }, accept: ["existence", "being there", "a figure"] },
        { id: "ja-u176l4-yuetsukan", type: "vocab", front: "ゆうえつかん", reading: "yūetsukan", meaning: "a sense of superiority", example: { jp: "ゆうえつかんを 見せる 人とは、長く つきあえません。", en: "I can't stay close to someone who shows a sense of superiority." }, accept: ["feeling superior", "condescension"] },
        { id: "ja-u176l4-rettokan", type: "vocab", front: "れっとうかん", reading: "rettōkan", meaning: "a sense of inferiority", example: { jp: "れっとうかんは 力に なる ことも あると 言われます。", en: "They say a sense of inferiority can sometimes become a strength." }, accept: ["inferiority complex", "feeling lesser"] },
      ],
    },
  ],
};
