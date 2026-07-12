// Unit 61 — かがく・ぎじゅつ ("Science & technology") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The N3 layer for science and technology — research, invention, and the digital vocabulary
// a modern learner needs. Examples stay in A1+A2 grammar and reuse A1/A2 vocab where
// possible. Naturalness queued for native review.
export const UNIT61 = {
  id: "ja-u61", lang: "ja", title: "かがく・ぎじゅつ", order: 61, stage: "b1",
  lessons: [
    {
      id: "ja-u61l1", unit: 61, lesson: 1, title: "Science", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about science: かがく ぎじゅつ じっけん はつめい せいのう しくみ.",
      items: [
        { id: "ja-u61l1-kagaku", type: "vocab", front: "かがく", reading: "kagaku", meaning: "science", example: { jp: "かがくがすきです。", en: "I like science." }, accept: ["the sciences"] },
        { id: "ja-u61l1-gijutsu", type: "vocab", front: "ぎじゅつ", reading: "gijutsu", meaning: "technology", example: { jp: "あたらしいぎじゅつです。", en: "It's new technology." }, accept: ["technique", "skill"] },
        { id: "ja-u61l1-jikken", type: "vocab", front: "じっけん", reading: "jikken", meaning: "experiment", example: { jp: "がっこうでじっけんします。", en: "I do an experiment at school." }, accept: ["test", "trial"] },
        { id: "ja-u61l1-hatsumei", type: "vocab", front: "はつめい", reading: "hatsumei", meaning: "invention", example: { jp: "たいせつなはつめいです。", en: "It's an important invention." }, accept: ["inventing"] },
        { id: "ja-u61l1-seino", type: "vocab", front: "せいのう", reading: "seinō", meaning: "performance", example: { jp: "せいのうがいいです。", en: "The performance is good." }, accept: ["capability", "specs"] },
        { id: "ja-u61l1-shikumi", type: "vocab", front: "しくみ", reading: "shikumi", meaning: "mechanism", example: { jp: "きかいのしくみをしらべます。", en: "I study the machine's mechanism." }, accept: ["structure", "how it works"] },
      ],
    },
    {
      id: "ja-u61l2", unit: 61, lesson: 2, title: "Technology", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about digital technology: データ でんし ロボット プログラム そうさ じどう.",
      items: [
        { id: "ja-u61l2-deta", type: "vocab", front: "データ", reading: "dēta", meaning: "data", example: { jp: "データをしらべます。", en: "I check the data." }, accept: ["figures", "records"] },
        { id: "ja-u61l2-denshi", type: "vocab", front: "でんし", reading: "denshi", meaning: "electronic", example: { jp: "でんしメールをおくります。", en: "I send an e-mail." }, accept: ["digital"], hint: "でんし = electronic; でんしメール = e-mail." },
        { id: "ja-u61l2-robotto", type: "vocab", front: "ロボット", reading: "robotto", meaning: "robot", example: { jp: "ロボットがうごきます。", en: "The robot moves." }, accept: ["android"] },
        { id: "ja-u61l2-puroguramu", type: "vocab", front: "プログラム", reading: "puroguramu", meaning: "program", example: { jp: "プログラムをつくります。", en: "I make a program." }, accept: ["software", "app"] },
        { id: "ja-u61l2-sosa", type: "vocab", front: "そうさ", reading: "sōsa", meaning: "operation", example: { jp: "きかいのそうさはかんたんです。", en: "Operating the machine is simple." }, accept: ["handling", "controls"] },
        { id: "ja-u61l2-jido", type: "vocab", front: "じどう", reading: "jidō", meaning: "automatic", example: { jp: "じどうのドアです。", en: "It's an automatic door." }, accept: ["automated"] },
      ],
    },
  ],
};
