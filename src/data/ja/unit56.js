// Unit 56 — にんげんかんけい ("Human relationships") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The N3 layer for people and bonds — the relationships, roles, and encounters a learner
// needs to talk about their social world. Examples stay in A1+A2 grammar and reuse A1/A2
// vocab where possible. Naturalness queued for native review.
export const UNIT56 = {
  id: "ja-u56", lang: "ja", title: "にんげんかんけい", order: 56, stage: "b1",
  lessons: [
    {
      id: "ja-u56l1", unit: 56, lesson: 1, title: "People & roles", cefr: "B1", dominantMode: "recall",
      canDo: "Name relationships: かんけい ゆうじょう なかま こうはい しんゆう あいて.",
      items: [
        { id: "ja-u56l1-kankei", type: "vocab", front: "かんけい", reading: "kankei", meaning: "relationship", example: { jp: "ふたりのかんけいはいいです。", en: "The two have a good relationship." }, accept: ["connection", "relation"] },
        { id: "ja-u56l1-yujo", type: "vocab", front: "ゆうじょう", reading: "yūjō", meaning: "friendship", example: { jp: "ゆうじょうはたいせつです。", en: "Friendship is important." }, accept: ["camaraderie"] },
        { id: "ja-u56l1-nakama", type: "vocab", front: "なかま", reading: "nakama", meaning: "companion", example: { jp: "クラスのなかまです。", en: "They're my classmates." }, accept: ["peer", "fellow"] },
        { id: "ja-u56l1-kohai", type: "vocab", front: "こうはい", reading: "kōhai", meaning: "junior", example: { jp: "かいしゃのこうはいです。", en: "He's my junior at the company." }, accept: ["junior colleague"], hint: "こうはい ⇄ せんぱい: junior vs senior in a group." },
        { id: "ja-u56l1-shinyu", type: "vocab", front: "しんゆう", reading: "shinyū", meaning: "best friend", example: { jp: "かのじょはしんゆうです。", en: "She's my best friend." }, accept: ["close friend"] },
        { id: "ja-u56l1-aite", type: "vocab", front: "あいて", reading: "aite", meaning: "the other party", example: { jp: "あいてのいけんをききます。", en: "I listen to the other person's opinion." }, accept: ["partner", "opponent"] },
      ],
    },
    {
      id: "ja-u56l2", unit: 56, lesson: 2, title: "Bonds & conflict", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about relationships forming and breaking: であい れんあい けっこん りこん けんか ちじん.",
      items: [
        { id: "ja-u56l2-deai", type: "vocab", front: "であい", reading: "deai", meaning: "encounter", example: { jp: "いいであいがありました。", en: "I had a good encounter." }, accept: ["meeting", "chance meeting"] },
        { id: "ja-u56l2-renai", type: "vocab", front: "れんあい", reading: "renai", meaning: "romance", example: { jp: "れんあいはむずかしいです。", en: "Romance is difficult." }, accept: ["love", "romantic love"] },
        { id: "ja-u56l2-kekkon", type: "vocab", front: "けっこん", reading: "kekkon", meaning: "marriage", example: { jp: "ともだちがけっこんしました。", en: "My friend got married." }, accept: ["getting married"] },
        { id: "ja-u56l2-rikon", type: "vocab", front: "りこん", reading: "rikon", meaning: "divorce", example: { jp: "りこんはかなしいです。", en: "Divorce is sad." }, accept: ["getting divorced"] },
        { id: "ja-u56l2-kenka", type: "vocab", front: "けんか", reading: "kenka", meaning: "quarrel", example: { jp: "あにとけんかしました。", en: "I quarreled with my older brother." }, accept: ["fight", "argument"] },
        { id: "ja-u56l2-chijin", type: "vocab", front: "ちじん", reading: "chijin", meaning: "acquaintance", example: { jp: "ちじんにあいました。", en: "I met an acquaintance." }, accept: ["someone I know"] },
      ],
    },
  ],
};
