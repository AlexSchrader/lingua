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
        { id: "ja-u176l1-shusshin", type: "vocab", front: "しゅっしん", reading: "shusshin", meaning: "where one is from", example: { jp: "しゅっしんを 聞かれる たびに、少し 長い 説明に なります。", en: "Every time I'm asked where I'm from, it turns into a slightly long explanation." }, drill: { jp: "しゅっしんを 書きます。", en: "I write down where I am from." }, accept: ["origin", "hometown", "background"], hint: "shusshin — 出 (come out) + 身 (body): where you came out from. It covers a town, a country or a school, so しゅっしんこう is your old school. ゆらい explains names, not people." },
        { id: "ja-u176l1-kokuseki", type: "vocab", front: "こくせき", reading: "kokuseki", meaning: "nationality", example: { jp: "こくせきは 変わりましたが、育った 町は 同じです。", en: "My nationality changed, but the town I grew up in is the same." }, drill: { jp: "こくせきが 変わりました。", en: "My nationality changed." }, accept: ["citizenship", "which country's papers", "which country one belongs to"], hint: "kokuseki — 国 (country) + 籍 (a register): which country's register you are on. A legal fact, so it CAN change — unlike しゅっしん, which cannot." },
        { id: "ja-u176l1-minzoku", type: "vocab", front: "みんぞく", reading: "minzoku", meaning: "an ethnic group", example: { jp: "この 国には 多くの みんぞくが 住んで います。", en: "Many ethnic groups live in this country." }, drill: { jp: "みんぞくが ちがいます。", en: "The ethnic groups are different." }, accept: ["a people", "ethnicity", "ethnic community"], hint: "みんぞく is a people sharing language and custom; こくせき is the paperwork. They come apart constantly, and B2 is where you need both words in one sentence." },
        { id: "ja-u176l1-kizoku", type: "vocab", front: "きぞく", reading: "kizoku", meaning: "belonging", example: { jp: "どこにも きぞくして いない ような 気が する ときが あります。", en: "There are times I feel as though I belong nowhere." }, drill: { jp: "きぞくが ありません。", en: "There is no sense of belonging." }, accept: ["affiliation", "being part of", "membership"], hint: "kizoku — 帰 (return) + 属 (belong): the group you return to as your own. しょぞく is the organisation you are registered with; きぞく is the one you FEEL is yours, which is why this card's example is about a feeling." },
        { id: "ja-u176l1-shozoku", type: "vocab", front: "しょぞく", reading: "shozoku", meaning: "the body one belongs to", example: { jp: "しょぞくは 書きましたが、実さいの 仕事は ちがいます。", en: "I wrote down my affiliation, but my actual work is different." }, drill: { jp: "しょぞくを 書きました。", en: "I wrote down my affiliation." }, accept: ["attached to", "one's organisation", "where one is registered"], hint: "shozoku — 所 (place) + 属 (belong): the place you are formally attached to — a department, a club, a team. It is what a form asks for, and it tells you nothing about what the person does." },
        { id: "ja-u176l1-seibetsu", type: "vocab", front: "せいべつ", reading: "seibetsu", meaning: "sex or gender", example: { jp: "この 紙には せいべつを 書かなくても いいと 言われました。", en: "I was told I don't have to write my gender on this form." }, drill: { jp: "せいべつを 書きません。", en: "I will not write my gender." }, accept: ["gender", "male or female", "the gender field"], hint: "seibetsu — 性 (nature, sex) + 別 (distinction): the sex-or-gender field on a form. It names the CATEGORY, so せいべつは 男 is how a form gets filled in. For the social sense Japanese now often reaches for ジェンダー." },
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
        { id: "ja-u176l2-jinkaku", type: "vocab", front: "じんかく", reading: "jinkaku", meaning: "a person's character", example: { jp: "仕事の 力と じんかくは 別の ものだと 思います。", en: "I think ability at work and a person's character are separate things." }, drill: { jp: "じんかくを 大切に します。", en: "We hold a person's character to be important." }, accept: ["personhood", "moral character", "who someone is"], hint: "jinkaku — 人 (person) + 格 (standing, grade): moral standing rather than personality. せいかく is temperament and stays neutral; じんかく can be praised or doubted." },
        { id: "ja-u176l2-kosei", type: "vocab", front: "こせい", reading: "kosei", meaning: "individuality", example: { jp: "同じ 服を 着ても、こせいは かくせません。", en: "Even wearing the same clothes, you can't hide individuality." }, drill: { jp: "こせいが つよいです。", en: "The individuality is strong." }, accept: ["what makes someone distinct", "personality", "one's own character"], hint: "kosei — 個 (individual) + 性 (nature): what makes this one different from the others. Positive in Japanese education, where こせいを のばす, drawing individuality out, is a stated goal." },
        { id: "ja-u176l2-jisonshin", type: "vocab", front: "じそんしん", reading: "jisonshin", meaning: "self-respect", example: { jp: "人の 前で 直されて、じそんしんが 少し きずつきました。", en: "Being corrected in front of others bruised my self-respect a little." }, drill: { jp: "じそんしんが きずつきました。", en: "My self-respect was hurt." }, accept: ["pride in oneself", "self-esteem", "dignity"], hint: "jisonshin — 自 (self) + 尊 (revere) + 心 (heart): the heart that holds itself in regard, with the same 尊 as そんげん. プライド is pride you show; じそんしん is the quieter thing that gets bruised." },
        { id: "ja-u176l2-ishiki", type: "vocab", front: "いしき", reading: "ishiki", meaning: "awareness", example: { jp: "安全への いしきが 高まって、けがが へりました。", en: "Awareness of safety rose, and injuries fell." }, drill: { jp: "いしきが たかまりました。", en: "Awareness rose." }, accept: ["consciousness", "mindfulness", "being conscious of"], hint: "ishiki — 意 (intention) + 識 (to know): the knowing part of the mind. It covers being conscious at all — いしきが ない is unconscious — and being aware of something, as in あんぜんいしき. むいしき is its negative, taught next." },
        { id: "ja-u176l2-muishiki", type: "vocab", front: "むいしき", reading: "muishiki", meaning: "unconsciously", example: { jp: "むいしきに 母と 同じ 言い方を して いました。", en: "I was unconsciously using the same turn of phrase as my mother." }, drill: { jp: "むいしきに 言って いました。", en: "I was saying it unconsciously." }, accept: ["without realising", "unconscious", "unthinking"], hint: "muishiki — 無 (not) + いしき (awareness). As an adverb むいしきに means without noticing you were doing it. It does NOT mean unconscious in the medical sense; that is いしきが ない." },
        { id: "ja-u176l2-wareware", type: "vocab", front: "われわれ", reading: "wareware", meaning: "we (formal)", example: { jp: "われわれの 世代は、その 話を 学校で 習いませんでした。", en: "Our generation didn't learn that story at school." }, drill: { jp: "われわれの 世代です。", en: "It is our generation." }, accept: ["us", "we", "our side"], hint: "われわれ is the formal, speech-making 私たち — a leader addressing a group, or a writer speaking for a whole society." },
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
        { id: "ja-u176l3-kihan", type: "vocab", front: "きはん", reading: "kihan", meaning: "a norm", example: { jp: "書かれて いない きはんの ほうが、きそくより 強い ことが あります。", en: "Unwritten norms are sometimes stronger than the written rules." }, drill: { jp: "きはんが つよいです。", en: "The norm is strong." }, accept: ["standard", "the done thing", "social rule"], hint: "kihan — 規 (a standard) + 範 (a model): the expected way, whether or not anybody wrote it down. きそく is a rule with a penalty; きはん is the unwritten standard, and this card's example says which bites harder." },
        { id: "ja-u176l3-kanshu", type: "vocab", front: "かんしゅう", reading: "kanshū", meaning: "an established custom", example: { jp: "その かんしゅうは 古いですが、今も 続いて います。", en: "That custom is old, but it continues even now." }, drill: { jp: "かんしゅうが のこって います。", en: "The custom survives." }, accept: ["practice", "convention", "usage"], hint: "kanshū — 慣 (grow used to) + 習 (habit): the settled habit of a group. ふうしゅう is how a place behaves; かんしゅう leans towards practices with force behind them — かんしゅうほう is customary law." },
        { id: "ja-u176l3-shuzoku", type: "vocab", front: "しゅうぞく", reading: "shūzoku", meaning: "a folk custom", example: { jp: "この 地方の しゅうぞくは 春の 祭りに よく 表れます。", en: "This region's folk customs show most clearly at the spring festival." }, drill: { jp: "しゅうぞくが のこって います。", en: "The folk custom remains." }, accept: ["tradition", "folkway", "local custom"], hint: "かんしゅう is how things are habitually DONE (business, law); しゅうぞく is inherited folk practice — festivals, food, rites." },
        { id: "ja-u176l3-docho", type: "vocab", front: "どうちょう", reading: "dōchō", meaning: "falling in with others", example: { jp: "みんなが 手を あげたので、どうちょうして 私も あげました。", en: "Everyone put their hand up, so I fell in with them and did too." }, drill: { jp: "どうちょうしたく ありません。", en: "I do not want to fall in with it." }, accept: ["going along with", "conforming", "toeing the line"], hint: "dōchō — 同 (same) + 調 (tune): tuning to the same pitch. It can be real agreement or mere going-along, and in Japanese writing about group behaviour it usually means the second." },
        { id: "ja-u176l3-seken", type: "vocab", front: "せけん", reading: "seken", meaning: "what people will say", example: { jp: "せけんの 目を 気に して、ほんとうの ことを 言えませんでした。", en: "Minding what people would say, I couldn't tell the truth." }, drill: { jp: "せけんの 目を 気に します。", en: "I mind what people will say." }, accept: ["society at large", "the public eye", "the world"], hint: "seken — 世 (the world) + 間 (between): the space between people, hence the watching public. せけんの 目 is the gaze this card is about. Not しゃかい, which is society as a system." },
        { id: "ja-u176l3-shakaiteki", type: "vocab", front: "しゃかいてき", reading: "shakaiteki", meaning: "social (in nature)", example: { jp: "これは 一人の 問題では なく、しゃかいてきな 問題です。", en: "This isn't one person's problem — it's a social one." }, drill: { jp: "しゃかいてきな もんだいです。", en: "It is a social problem." }, accept: ["societal", "of society", "public"], hint: "shakaiteki — しゃかい (society) + てき: belonging to society rather than to one person. しゃかいてきに みとめられる is socially recognised, and the word's job is always to widen the frame." },
      ],
    },
    {
      id: "ja-u176l4",
      unit: 176,
      lesson: 4,
      title: "Difference and standing",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about difference as something a society handles well or badly: たようせい しゅたい そんざい ゆうえつかん れっとうかん そういてん.",
      items: [
        { id: "ja-u176l4-tayosei", type: "vocab", front: "たようせい", reading: "tayōsei", meaning: "diversity", example: { jp: "たようせいは 数を そろえる ことでは ないと 思います。", en: "I don't think diversity is a matter of making the numbers add up." }, drill: { jp: "たようせいが 大切です。", en: "Diversity matters." }, accept: ["variety", "plurality", "being diverse"], hint: "tayōsei — 多様 (varied) + せい (-ness): how much variety is present. Biology uses it too, in せいぶつたようせい, biodiversity. It measures the RANGE and not the count, which is this card's point." },
        { id: "ja-u176l4-shutai", type: "vocab", front: "しゅたい", reading: "shutai", meaning: "the acting party", example: { jp: "この 計画の しゅたいは 国では なく 住民です。", en: "The party carrying out this plan is the residents, not the state." }, drill: { jp: "しゅたいは じゅうみんです。", en: "The acting party is the residents." }, accept: ["the agent", "the one acting", "main body"], hint: "shutai — 主 (principal) + 体 (body): the body that acts. Grammar's subject and a project's lead party are one word here. しゅたいてき means acting on your own initiative rather than being moved." },
        { id: "ja-u176l4-sonzai", type: "vocab", front: "そんざい", reading: "sonzai", meaning: "presence", example: { jp: "小さな 店ですが、町には 大きな そんざいです。", en: "It's a small shop, but a large presence in the town." }, drill: { jp: "そんざいが おおきいです。", en: "Its presence is large." }, accept: ["existence", "being there", "a figure"], hint: "sonzai — 存 (exist) + 在 (be located): existing, and being somewhere. As a noun it means a presence that COUNTS, so おおきな そんざい is a big deal in its world, not a big object." },
        { id: "ja-u176l4-yuetsukan", type: "vocab", front: "ゆうえつかん", reading: "yūetsukan", meaning: "a sense of superiority", example: { jp: "ゆうえつかんを 見せる 人とは、長く つきあえません。", en: "I can't stay close to someone who shows a sense of superiority." }, drill: { jp: "ゆうえつかんが あります。", en: "There is a sense of superiority." }, accept: ["feeling superior", "condescension", "a superior feeling"], hint: "yūetsukan — 優越 (surpassing) + 感 (feeling), the same 感 ending as ぎむかん. It names the FEELING, which is what makes it a criticism: the superiority itself may not be real." },
        { id: "ja-u176l4-rettokan", type: "vocab", front: "れっとうかん", reading: "rettōkan", meaning: "a sense of inferiority", example: { jp: "れっとうかんは 力に なる ことも あると 言われます。", en: "They say a sense of inferiority can sometimes become a strength." }, drill: { jp: "れっとうかんを かんじました。", en: "I felt a sense of inferiority." }, accept: ["inferiority complex", "feeling lesser", "feeling inferior"], hint: "rettōkan — 劣等 (inferior grade) + 感 (feeling), the exact mirror of ゆうえつかん. Both are about how you feel RANKED rather than how you are, and Japanese uses れっとうかん where English says complex." },
        { id: "ja-u176l4-soiten", type: "vocab", front: "そういてん", reading: "sōiten", meaning: "the point of difference", example: { jp: "二つの 考えの そういてんを まず はっきり させましょう。", en: "Let’s first make clear where the two ideas differ." }, drill: { jp: "二つの 考えの そういてんを 話します。", en: "We discuss where the two ideas differ." }, accept: ["the difference", "the point of contrast", "where they differ"], hint: "そうい (difference) + てん (point) — the specific place two things part company, rather than difference in general." },
      ],
    },
  ],
};
