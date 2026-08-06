// JA Unit 135 — かんけい・しゃかい (Relationships and society) — B1 / JLPT N3
// Block-2 house rules are documented in unit118.js.
//
// The blueprint's B1 note asks for canDo statements like "disagree without giving
// offence" rather than "order a meal", so lesson 2 is built around exactly that:
// たちば・かちかん・ごかい・ぎろん are the words a learner needs to disagree with a
// person while staying on good terms with them.
export const UNIT135 = {
  id: "ja-u135",
  lang: "ja",
  title: "かんけい・しゃかい",
  order: 135,
  stage: "b1",
  lessons: [
    {
      id: "ja-u135l1",
      unit: 135,
      lesson: 1,
      title: "People you are close to",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how close you are to someone and how you look out for each other: つきあいます しりあい ささえます おもいやり きょうかん そんちょう.",
      items: [
        { id: "ja-u135l1-tsukiaimasu", type: "vocab", front: "つきあいます", reading: "tsukiaimasu", meaning: "keep company with", example: { jp: "だいがくのときからつきあっていますが、けんかはほとんどしません。", en: "We've been close since university, but we hardly ever quarrel." }, accept: ["to associate with", "go out with", "spend time with"] },
        { id: "ja-u135l1-shiriai", type: "vocab", front: "しりあい", reading: "shiriai", meaning: "acquaintance", example: { jp: "かれはともだちではなくしりあいですが、こまったときはたすけてくれます。", en: "He's an acquaintance rather than a friend, but he helps when I'm stuck." }, accept: ["someone I know", "contact", "connection"] },
        { id: "ja-u135l1-sasaemasu", type: "vocab", front: "ささえます", reading: "sasaemasu", meaning: "support", example: { jp: "かぞくがささえてくれたので、さいごまでつづけられました。", en: "My family supported me, so I could keep going to the end." }, accept: ["to back up", "hold up", "stand by"] },
        { id: "ja-u135l1-omoiyari", type: "vocab", front: "おもいやり", reading: "omoiyari", meaning: "consideration for others", example: { jp: "おもいやりがあるひとはすくないですが、いないわけではありません。", en: "People with consideration for others are few, but they do exist." }, accept: ["thoughtfulness", "compassion", "kindness"] },
        { id: "ja-u135l1-kyokan", type: "vocab", front: "きょうかん", reading: "kyōkan", meaning: "empathy", example: { jp: "はなしをきいてきょうかんしましたが、なにもいえませんでした。", en: "I listened and felt empathy, but I couldn't say anything." }, accept: ["sympathy", "relating to", "fellow feeling"] },
        { id: "ja-u135l1-soncho", type: "vocab", front: "そんちょう", reading: "sonchō", meaning: "respect", example: { jp: "いけんがちがっても、あいてをそんちょうします。", en: "Even when our opinions differ, I respect the other person." }, accept: ["esteem", "regard", "respecting"] },
      ],
    },
    {
      id: "ja-u135l2",
      unit: 135,
      lesson: 2,
      title: "Disagreeing well",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Disagree with someone without giving offence — name their position, your own, and where you actually agree: ごかい ぎろん たちば かちかん きょうつう へんけん.",
      items: [
        { id: "ja-u135l2-gokai", type: "vocab", front: "ごかい", reading: "gokai", meaning: "misunderstanding", example: { jp: "ごかいがあったようですが、はなしてすぐわかりました。", en: "There seems to have been a misunderstanding, but we sorted it out by talking." }, accept: ["misreading", "getting the wrong idea"] },
        { id: "ja-u135l2-giron", type: "vocab", front: "ぎろん", reading: "giron", meaning: "debate", example: { jp: "ぎろんはながかったですが、けっきょくけつろんはでませんでした。", en: "The debate was long, but in the end no conclusion came out of it." }, accept: ["discussion", "argument", "arguing"] },
        { id: "ja-u135l2-tachiba", type: "vocab", front: "たちば", reading: "tachiba", meaning: "position", example: { jp: "あいてのたちばをかんがえれば、いいかたもかわります。", en: "If you think about the other person's position, how you say it changes too." }, accept: ["standpoint", "point of view", "where someone stands"] },
        { id: "ja-u135l2-kachikan", type: "vocab", front: "かちかん", reading: "kachikan", meaning: "values", example: { jp: "かちかんはちがいますが、いっしょにはたらけます。", en: "Our values differ, but we can work together." }, accept: ["sense of values", "what someone values"] },
        { id: "ja-u135l2-kyotsu", type: "vocab", front: "きょうつう", reading: "kyōtsū", meaning: "in common", example: { jp: "きょうつうのしゅみがあったので、すぐなかよくなりました。", en: "We had a hobby in common, so we got on straight away." }, accept: ["shared", "common", "mutual"] },
        { id: "ja-u135l2-henken", type: "vocab", front: "へんけん", reading: "henken", meaning: "prejudice", example: { jp: "へんけんはきづきにくいので、はなしをきくことがたいせつです。", en: "Prejudice is hard to notice in yourself, so listening matters." }, accept: ["bias", "preconception"] },
      ],
    },
    {
      id: "ja-u135l3",
      unit: 135,
      lesson: 3,
      title: "In the community",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about groups you belong to and what people do together: じゅうみん こくみん しゅうだん こじん ボランティア きょうりょく.",
      items: [
        { id: "ja-u135l3-jumin", type: "vocab", front: "じゅうみん", reading: "jūmin", meaning: "residents", example: { jp: "じゅうみんがはんたいしたので、けんせつはとまりました。", en: "The residents objected, so the construction stopped." }, accept: ["local people", "inhabitants"] },
        { id: "ja-u135l3-kokumin", type: "vocab", front: "こくみん", reading: "kokumin", meaning: "the people of a country", example: { jp: "こくみんのいけんはわかれていますが、せんきょはきます。", en: "The country's people are divided, but the election is coming." }, accept: ["citizens", "the public", "the nation"] },
        { id: "ja-u135l3-shudan", type: "vocab", front: "しゅうだん", reading: "shūdan", meaning: "a group", example: { jp: "しゅうだんでうごくのはらくですが、じゆうはすくないです。", en: "Moving as a group is easy, but there's little freedom." }, accept: ["collective", "the group", "a body of people"] },
        { id: "ja-u135l3-kojin", type: "vocab", front: "こじん", reading: "kojin", meaning: "the individual", example: { jp: "こじんのじゆうはたいせつですが、まわりへのちゅういもひつようです。", en: "Individual freedom is important, but consideration for those around you is needed too." }, accept: ["a private person", "personal", "individual"] },
        { id: "ja-u135l3-borantia", type: "vocab", front: "ボランティア", reading: "borantia", meaning: "volunteering", example: { jp: "しゅうまつにボランティアをしていますが、たのしいのでつづけています。", en: "I volunteer at weekends, and I keep it up because it's enjoyable." }, accept: ["volunteer", "voluntary work"] },
        { id: "ja-u135l3-kyoryoku", type: "vocab", front: "きょうりょく", reading: "kyōryoku", meaning: "cooperation", example: { jp: "みんなのきょうりょくがあったので、いちにちでおわりました。", en: "There was everyone's cooperation, so it finished in a day." }, accept: ["working together", "collaboration", "help"] },
      ],
    },
    {
      id: "ja-u135l4",
      unit: 135,
      lesson: 4,
      title: "A changing society",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about generations and about fairness between them: せだい わかもの こうれいしゃ びょうどう さべつ じんけん.",
      items: [
        { id: "ja-u135l4-sedai", type: "vocab", front: "せだい", reading: "sedai", meaning: "generation", example: { jp: "せだいがちがうとかんがえかたもちがいますが、はなせばわかります。", en: "Ways of thinking differ between generations, but you understand each other if you talk." }, accept: ["age group", "one's generation"] },
        { id: "ja-u135l4-wakamono", type: "vocab", front: "わかもの", reading: "wakamono", meaning: "young people", example: { jp: "わかものがまちをでていくので、みせもへっています。", en: "Young people are leaving the town, so the shops are decreasing too." }, accept: ["youth", "the young", "a young person"] },
        { id: "ja-u135l4-koreisha", type: "vocab", front: "こうれいしゃ", reading: "kōreisha", meaning: "elderly people", example: { jp: "こうれいしゃがおおいちほうですが、びょういんはとおいです。", en: "It's a region with many elderly people, but the hospital is far away." }, accept: ["senior citizens", "the elderly", "older people"] },
        { id: "ja-u135l4-byodo", type: "vocab", front: "びょうどう", reading: "byōdō", meaning: "equality", example: { jp: "きかいはびょうどうですが、けっかはおなじになりません。", en: "The opportunities are equal, but the results don't come out the same." }, accept: ["equal", "fairness", "being equal"] },
        { id: "ja-u135l4-sabetsu", type: "vocab", front: "さべつ", reading: "sabetsu", meaning: "discrimination", example: { jp: "さべつはゆるされませんが、なくすのはかんたんではありません。", en: "Discrimination isn't permitted, but getting rid of it isn't simple." }, accept: ["prejudice in practice", "unfair treatment"] },
        { id: "ja-u135l4-jinken", type: "vocab", front: "じんけん", reading: "jinken", meaning: "human rights", example: { jp: "じんけんはだれにでもありますが、しらないひともおおいです。", en: "Everyone has human rights, but many people don't know it." }, accept: ["rights", "civil rights"] },
      ],
    },
  ],
};
