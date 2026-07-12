// Unit 60 — きょういく・がくもん ("Education & learning") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// The N3 layer for schooling and study — the abstract nouns of education beyond A1/A2's
// がっこう/しゅくだい/しけん. Examples stay in A1+A2 grammar and reuse A1/A2 vocab where
// possible. Naturalness queued for native review.
export const UNIT60 = {
  id: "ja-u60", lang: "ja", title: "きょういく・がくもん", order: 60, stage: "b1",
  lessons: [
    {
      id: "ja-u60l1", unit: 60, lesson: 1, title: "Study & school", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about study: きょういく がくもん こうぎ せんもん けんきゅう ろんぶん.",
      items: [
        { id: "ja-u60l1-kyoiku", type: "vocab", front: "きょういく", reading: "kyōiku", meaning: "education", example: { jp: "こどものきょういくはたいせつです。", en: "Children's education is important." }, accept: ["schooling"] },
        { id: "ja-u60l1-gakumon", type: "vocab", front: "がくもん", reading: "gakumon", meaning: "scholarship", example: { jp: "がくもんがすきです。", en: "I like learning." }, accept: ["learning", "study"] },
        { id: "ja-u60l1-kogi", type: "vocab", front: "こうぎ", reading: "kōgi", meaning: "lecture", example: { jp: "だいがくのこうぎです。", en: "It's a university lecture." }, accept: ["class"] },
        { id: "ja-u60l1-senmon", type: "vocab", front: "せんもん", reading: "senmon", meaning: "specialty", example: { jp: "わたしのせんもんです。", en: "It's my specialty." }, accept: ["major", "field"] },
        { id: "ja-u60l1-kenkyu", type: "vocab", front: "けんきゅう", reading: "kenkyū", meaning: "research", example: { jp: "だいがくでけんきゅうします。", en: "I do research at university." }, accept: ["study", "investigation"] },
        { id: "ja-u60l1-ronbun", type: "vocab", front: "ろんぶん", reading: "ronbun", meaning: "thesis", example: { jp: "ろんぶんをかきます。", en: "I write a thesis." }, accept: ["paper", "dissertation"] },
      ],
    },
    {
      id: "ja-u60l2", unit: 60, lesson: 2, title: "Progress & knowledge", cefr: "B1", dominantMode: "recall",
      canDo: "Talk about school progress: せいせき にゅうがく そつぎょう ちしき きょうかしょ がくれき.",
      items: [
        { id: "ja-u60l2-seiseki", type: "vocab", front: "せいせき", reading: "seiseki", meaning: "grades", example: { jp: "せいせきがいいです。", en: "My grades are good." }, accept: ["results", "marks"] },
        { id: "ja-u60l2-nyugaku", type: "vocab", front: "にゅうがく", reading: "nyūgaku", meaning: "entering school", example: { jp: "だいがくににゅうがくします。", en: "I enter university." }, accept: ["admission", "enrollment"], hint: "にゅうがく (entering) ⇄ そつぎょう (graduating)." },
        { id: "ja-u60l2-sotsugyo", type: "vocab", front: "そつぎょう", reading: "sotsugyō", meaning: "graduation", example: { jp: "がっこうをそつぎょうします。", en: "I graduate from school." }, accept: ["graduating"] },
        { id: "ja-u60l2-chishiki", type: "vocab", front: "ちしき", reading: "chishiki", meaning: "knowledge", example: { jp: "ちしきがおおいです。", en: "He has a lot of knowledge." }, accept: ["know-how"] },
        { id: "ja-u60l2-kyokasho", type: "vocab", front: "きょうかしょ", reading: "kyōkasho", meaning: "textbook", example: { jp: "きょうかしょをよみます。", en: "I read the textbook." }, accept: ["schoolbook"] },
        { id: "ja-u60l2-gakureki", type: "vocab", front: "がくれき", reading: "gakureki", meaning: "educational background", example: { jp: "がくれきをかきます。", en: "I write my educational background." }, accept: ["academic record"] },
      ],
    },
  ],
};
