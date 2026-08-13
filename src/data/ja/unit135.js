// JA Unit 135 — かんけい・しゃかい (Relationships and society) — B1 / JLPT N3
// Block-2 house rules are documented in unit118.js (plain-form verb headwords).
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
      canDo: "Describe how close you are to someone and how you look out for each other: つきあう しりあい ささえる おもいやり きょうかん そんちょう.",
      items: [
        { id: "ja-u135l1-tsukiau", type: "vocab", front: "つきあう", reading: "tsukiau", meaning: "keep company with", example: { jp: "だいがくのときからつきあっていますが、けんかはほとんどしません。", en: "We've been close since university, but we hardly ever quarrel." }, accept: ["to associate with", "go out with", "spend time with"] },
        { id: "ja-u135l1-shiriai", type: "vocab", front: "しりあい", reading: "shiriai", meaning: "acquaintance", example: { jp: "かれはともだちではなくしりあいですが、こまったときはたすけてくれます。", en: "He's an acquaintance rather than a friend, but he helps when I'm stuck." }, accept: ["someone I know", "contact", "connection"] },
        { id: "ja-u135l1-sasaeru", type: "vocab", front: "ささえる", reading: "sasaeru", meaning: "support", example: { jp: "かぞくがささえてくれたので、さいごまでつづけられました。", en: "My family supported me, so I could keep going to the end." }, accept: ["to back up", "hold up", "stand by"] },
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
      canDo: "Disagree with someone without giving offence — hear the gap between what is said and what is meant: ごかい ぎろん ほんね かちかん たてまえ へんけん.",
      items: [
        { id: "ja-u135l2-gokai", type: "vocab", front: "ごかい", reading: "gokai", meaning: "misunderstanding", example: { jp: "ごかいがあったようですが、はなしてすぐわかりました。", en: "There seems to have been a misunderstanding, but we sorted it out by talking." }, accept: ["misreading", "getting the wrong idea"] },
        { id: "ja-u135l2-giron", type: "vocab", front: "ぎろん", reading: "giron", meaning: "debate", example: { jp: "ぎろんはながかったですが、けっきょくけつろんはでませんでした。", en: "The debate was long, but in the end no conclusion came out of it." }, accept: ["discussion", "argument", "arguing"] },
                { id: "ja-u135l2-honne", type: "vocab", front: "ほんね", reading: "honne", meaning: "what someone really thinks", example: { jp: "かいぎではだれもほんねをいいませんでしたが、あとでみんなはなしました。", en: "Nobody said what they really thought in the meeting, but afterwards everyone talked." }, accept: ["true feelings", "real intention", "what they actually mean"] },
        { id: "ja-u135l2-kachikan", type: "vocab", front: "かちかん", reading: "kachikan", meaning: "values", example: { jp: "かちかんはちがいますが、いっしょにはたらけます。", en: "Our values differ, but we can work together." }, accept: ["sense of values", "what someone values"] },
                { id: "ja-u135l2-tatemae", type: "vocab", front: "たてまえ", reading: "tatemae", meaning: "the official line", example: { jp: "それはたてまえですが、じっさいはちがいます。", en: "That is the official line, but the reality is different." }, accept: ["the public position", "what one says publicly", "form"] },
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
      canDo: "Talk about groups you belong to and what people do together: じゅうみん じもと しゅうだん こじん ボランティア こうりゅう.",
      items: [
        { id: "ja-u135l3-jumin", type: "vocab", front: "じゅうみん", reading: "jūmin", meaning: "residents", example: { jp: "じゅうみんがはんたいしたので、けんせつはとまりました。", en: "The residents objected, so the construction stopped." }, accept: ["local people", "inhabitants"] },
                { id: "ja-u135l3-jimoto", type: "vocab", front: "じもと", reading: "jimoto", meaning: "one's local area", example: { jp: "じもとをはなれてもうじゅうねんですが、ことばはかわりません。", en: "It is ten years since I left my home area, but my accent has not changed." }, accept: ["home town", "locally", "where one is from"] },
        { id: "ja-u135l3-shudan", type: "vocab", front: "しゅうだん", reading: "shūdan", meaning: "a group", example: { jp: "しゅうだんでうごくのはらくですが、じゆうはすくないです。", en: "Moving as a group is easy, but there's little freedom." }, accept: ["collective", "the group", "a body of people"] },
        { id: "ja-u135l3-kojin", type: "vocab", front: "こじん", reading: "kojin", meaning: "the individual", example: { jp: "こじんのじゆうはたいせつですが、まわりへのちゅういもひつようです。", en: "Individual freedom is important, but consideration for those around you is needed too." }, accept: ["a private person", "personal", "individual"] },
        { id: "ja-u135l3-borantia", type: "vocab", front: "ボランティア", reading: "borantia", meaning: "volunteering", example: { jp: "しゅうまつにボランティアをしていますが、たのしいのでつづけています。", en: "I volunteer at weekends, and I keep it up because it's enjoyable." }, accept: ["volunteer", "voluntary work"] },
                { id: "ja-u135l3-koryu", type: "vocab", front: "こうりゅう", reading: "kōryū", meaning: "exchange between people", example: { jp: "まちのこうりゅうかいにでましたが、しりあいはできませんでした。", en: "I went to the town exchange meeting, but I did not make any acquaintances." }, accept: ["interaction", "mixing", "getting to know each other"] },
      ],
    },
    {
      id: "ja-u135l4",
      unit: 135,
      lesson: 4,
      title: "A changing society",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the young, the old, and fairness between them: かくさ わかもの こうれいしゃ びょうどう さべつ じんけん.",
      items: [
                { id: "ja-u135l4-kakusa", type: "vocab", front: "かくさ", reading: "kakusa", meaning: "a gap between groups", example: { jp: "しゅうにゅうのかくさはひろがっていますが、はなすひとはすくないです。", en: "The income gap is widening, but few people talk about it." }, accept: ["disparity", "inequality", "the divide"] },
        { id: "ja-u135l4-wakamono", type: "vocab", front: "わかもの", reading: "wakamono", meaning: "young people", example: { jp: "わかものがまちをでていくので、みせもへっています。", en: "Young people are leaving the town, so the shops are decreasing too." }, accept: ["youth", "the young", "a young person"] },
        { id: "ja-u135l4-koreisha", type: "vocab", front: "こうれいしゃ", reading: "kōreisha", meaning: "elderly people", example: { jp: "こうれいしゃがおおいちほうですが、びょういんはとおいです。", en: "It's a region with many elderly people, but the hospital is far away." }, accept: ["senior citizens", "the elderly", "older people"] },
        { id: "ja-u135l4-byodo", type: "vocab", front: "びょうどう", reading: "byōdō", meaning: "equality", example: { jp: "きかいはびょうどうですが、けっかはおなじになりません。", en: "The opportunities are equal, but the results don't come out the same." }, accept: ["equal", "fairness", "being equal"] },
        { id: "ja-u135l4-sabetsu", type: "vocab", front: "さべつ", reading: "sabetsu", meaning: "discrimination", example: { jp: "さべつはゆるされませんが、なくすのはかんたんではありません。", en: "Discrimination isn't permitted, but getting rid of it isn't simple." }, accept: ["prejudice in practice", "unfair treatment"] },
        { id: "ja-u135l4-jinken", type: "vocab", front: "じんけん", reading: "jinken", meaning: "human rights", example: { jp: "じんけんはだれにでもありますが、しらないひともおおいです。", en: "Everyone has human rights, but many people don't know it." }, accept: ["rights", "civil rights"] },
      ],
    },
  ],
};
