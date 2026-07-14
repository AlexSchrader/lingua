// Unit 75 — こうてき・がいねん ("Abstract concepts") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 abstract nouns & concepts (result, reason, purpose, method, plan, feeling,
// relationship, change…). Modeled like the A1/A2 vocab units — vocab items, the
// noun as the headword. Every example uses only earlier vocab + basic grammar
// (を/に/の/は/が + です/ます), so it slots on top of a finished A1/A2.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
export const UNIT75 = {
  id: "ja-u75",
  lang: "ja",
  title: "こうてき・がいねん",
  order: 75,
  stage: "a2",
  lessons: [
    // Lesson 1: reasons & results
    {
      id: "ja-u75l1",
      unit: 75,
      lesson: 1,
      title: "Reasons & results",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about reasons and outcomes: けっか りゆう もくてき もくひょう こうか じじつ.",
      items: [
        { id: "ja-u75l1-kekka", type: "vocab", front: "けっか", reading: "kekka", meaning: "result", example: { jp: "テストのけっかを見ます。", en: "I look at the test result." }, accept: ["outcome", "results"] },
        { id: "ja-u75l1-riyu", type: "vocab", front: "りゆう", reading: "riyū", meaning: "reason", example: { jp: "りゆうを話します。", en: "I explain the reason." }, accept: ["cause", "reasons"] },
        { id: "ja-u75l1-mokuteki", type: "vocab", front: "もくてき", reading: "mokuteki", meaning: "purpose", example: { jp: "べんきょうのもくてきは何ですか。", en: "What is the purpose of studying?" }, accept: ["aim", "objective"] },
        { id: "ja-u75l1-mokuhyo", type: "vocab", front: "もくひょう", reading: "mokuhyō", meaning: "goal", example: { jp: "あたらしいもくひょうがあります。", en: "I have a new goal." }, accept: ["target", "objective"] },
        { id: "ja-u75l1-koka", type: "vocab", front: "こうか", reading: "kōka", meaning: "effect", example: { jp: "くすりのこうかがあります。", en: "The medicine has an effect." }, accept: ["result", "efficacy"] },
        { id: "ja-u75l1-jijitsu", type: "vocab", front: "じじつ", reading: "jijitsu", meaning: "fact", example: { jp: "それはじじつです。", en: "That is a fact." }, accept: ["truth", "reality"] },
      ],
    },
    // Lesson 2: plans & methods
    {
      id: "ja-u75l2",
      unit: 75,
      lesson: 2,
      title: "Plans & methods",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe plans and how things are done: ほうほう けいかく じょうけん ないよう きろく しんぽ.",
      items: [
        { id: "ja-u75l2-hoho", type: "vocab", front: "ほうほう", reading: "hōhō", meaning: "method", example: { jp: "いいほうほうをおしえます。", en: "I'll teach you a good method." }, accept: ["way", "means"] },
        { id: "ja-u75l2-keikaku", type: "vocab", front: "けいかく", reading: "keikaku", meaning: "plan", example: { jp: "あたらしいけいかくがあります。", en: "There is a new plan." }, accept: ["planning", "schedule"] },
        { id: "ja-u75l2-joken", type: "vocab", front: "じょうけん", reading: "jōken", meaning: "condition", example: { jp: "しごとのじょうけんがいいです。", en: "The job conditions are good." }, accept: ["terms", "requirement"] },
        { id: "ja-u75l2-naiyo", type: "vocab", front: "ないよう", reading: "naiyō", meaning: "content", example: { jp: "ほんのないようはおもしろいです。", en: "The content of the book is interesting." }, accept: ["substance", "details"] },
        { id: "ja-u75l2-kiroku", type: "vocab", front: "きろく", reading: "kiroku", meaning: "record", example: { jp: "きろくを見ます。", en: "I look at the record." }, accept: ["log", "records"] },
        { id: "ja-u75l2-shinpo", type: "vocab", front: "しんぽ", reading: "shinpo", meaning: "progress", example: { jp: "まいにちしんぽします。", en: "I make progress every day." }, accept: ["advancement", "improvement"] },
      ],
    },
    // Lesson 3: thoughts & feelings
    {
      id: "ja-u75l3",
      unit: 75,
      lesson: 3,
      title: "Thoughts & feelings",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Express thoughts and states of mind: かんがえ はんだん いけん とくちょう ようす ちゅうい.",
      items: [
        { id: "ja-u75l3-kangae", type: "vocab", front: "かんがえ", reading: "kangae", meaning: "idea", example: { jp: "いいかんがえがあります。", en: "I have a good idea." }, accept: ["thought", "thinking"] },
        { id: "ja-u75l3-handan", type: "vocab", front: "はんだん", reading: "handan", meaning: "judgment", example: { jp: "はやくはんだんします。", en: "I make a judgment quickly." }, accept: ["decision", "judgement"] },
        { id: "ja-u75l3-iken", type: "vocab", front: "いけん", reading: "iken", meaning: "opinion", example: { jp: "わたしのいけんを話します。", en: "I share my opinion." }, accept: ["view", "opinions"] },
        { id: "ja-u75l3-tokucho", type: "vocab", front: "とくちょう", reading: "tokuchō", meaning: "characteristic", example: { jp: "このまちのとくちょうです。", en: "It's a feature of this town." }, accept: ["feature", "trait"] },
        { id: "ja-u75l3-yosu", type: "vocab", front: "ようす", reading: "yōsu", meaning: "situation", example: { jp: "そとのようすを見ます。", en: "I check the situation outside." }, accept: ["state", "appearance"] },
        { id: "ja-u75l3-chui", type: "vocab", front: "ちゅうい", reading: "chūi", meaning: "caution", example: { jp: "くるまにちゅういします。", en: "I watch out for cars." }, accept: ["care", "attention"] },
      ],
    },
    // Lesson 4: relations & change
    {
      id: "ja-u75l4",
      unit: 75,
      lesson: 4,
      title: "Relations & change",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Compare and describe change: かんけい ちがい しゅるい じょうたい へんか せいかつ.",
      items: [
        { id: "ja-u75l4-kankei", type: "vocab", front: "かんけい", reading: "kankei", meaning: "relationship", example: { jp: "ふたりのかんけいはいいです。", en: "The relationship between the two is good." }, accept: ["relation", "connection"] },
        { id: "ja-u75l4-chigai", type: "vocab", front: "ちがい", reading: "chigai", meaning: "difference", example: { jp: "いろのちがいがわかります。", en: "I can tell the difference in color." }, accept: ["distinction", "differences"] },
        { id: "ja-u75l4-shurui", type: "vocab", front: "しゅるい", reading: "shurui", meaning: "kind", example: { jp: "くだもののしゅるいがおおいです。", en: "There are many kinds of fruit." }, accept: ["type", "variety"] },
        { id: "ja-u75l4-jotai", type: "vocab", front: "じょうたい", reading: "jōtai", meaning: "condition", example: { jp: "くるまのじょうたいはいいです。", en: "The car is in good condition." }, accept: ["state", "situation"] },
        { id: "ja-u75l4-henka", type: "vocab", front: "へんか", reading: "henka", meaning: "change", example: { jp: "てんきのへんかがはやいです。", en: "The weather changes quickly." }, accept: ["shift", "variation"] },
        { id: "ja-u75l4-seikatsu", type: "vocab", front: "せいかつ", reading: "seikatsu", meaning: "daily life", example: { jp: "にほんのせいかつはたのしいです。", en: "Life in Japan is fun." }, accept: ["living", "lifestyle"] },
      ],
    },
  ],
};
