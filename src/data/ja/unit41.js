// Unit 41 — かんじ・ようす (Descriptive & state kanji) — A2 / JLPT N4
// Consolidated kanji unit (category: descriptive & state kanji). type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT41 = {
  id: "ja-u41",
  lang: "ja",
  title: "かんじ・ようす",
  order: 41,
  stage: "a2",
  lessons: [
    {
      id: "ja-u41l1",
      unit: 41,
      lesson: 1,
      title: "Descriptive kanji 1",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the state kanji: 同 (same), 正 (correct), 不 (un-), 無 (nothing), 有 (exist).",
      items: [
        { id: "ja-u41l1-onaji", type: "kanji", front: "同", reading: "onaji", meaning: "same", example: { jp: "同じ本です。", en: "It's the same book." }, accept: ["identical"], hint: "同 = same (おなじ). One 口 (mouth) under one roof — everyone saying the same thing." },
        { id: "ja-u41l1-tadashii", type: "kanji", front: "正", reading: "tadashii", meaning: "correct", example: { jp: "正しい答えです。", en: "It's the correct answer." }, accept: ["right","true"], hint: "正 = correct / right (ただしい). 一 (one line) + 止 (stop): stopping at the one right spot." },
        { id: "ja-u41l1-fu", type: "kanji", front: "不", reading: "fu", meaning: "un- (prefix)", example: { jp: "ここは不便です。", en: "This place is inconvenient." }, accept: ["not","negative"], hint: "不 = un- / not — a negative prefix. 不便 = inconvenient, 不安 = uneasy." },
        { id: "ja-u41l1-mu", type: "kanji", front: "無", reading: "mu", meaning: "nothing", example: { jp: "それは無理です。", en: "That's impossible." }, accept: ["without","none"], hint: "無 = nothing / without. 無理 = impossible ('no logic'), 無料 = free of charge." },
        { id: "ja-u41l1-yu", type: "kanji", front: "有", reading: "yū", meaning: "exist", example: { jp: "有名なお店です。", en: "It's a famous shop." }, accept: ["have","famous"], hint: "有 = exist / have. 有名 = famous ('has a name'), the opposite of 無." },
      ],
    },
    {
      id: "ja-u41l2",
      unit: 41,
      lesson: 2,
      title: "Descriptive kanji 2",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read 特 (special), 別 (separate), 物 (thing), 強 (strong), 広 (wide).",
      items: [
        { id: "ja-u41l2-toku", type: "kanji", front: "特", reading: "toku", meaning: "special", example: { jp: "特別なプレゼントです。", en: "It's a special present." }, accept: ["particular"], hint: "特 = special. 特別 = special, 特に = especially." },
        { id: "ja-u41l2-betsu", type: "kanji", front: "別", reading: "betsu", meaning: "separate", example: { jp: "別の物がいいです。", en: "A different one is better." }, accept: ["different","another"], hint: "別 = separate / different. 別々 = separately, 特別 = special." },
        { id: "ja-u41l2-mono", type: "kanji", front: "物", reading: "mono", meaning: "thing", example: { jp: "大きい物です。", en: "It's a big thing." }, accept: ["object","stuff"], hint: "物 = thing / object (もの). 買い物 = shopping, 食べ物 = food." },
        { id: "ja-u41l2-tsuyoi", type: "kanji", front: "強", reading: "tsuyoi", meaning: "strong", example: { jp: "風が強いです。", en: "The wind is strong." }, accept: ["powerful"], hint: "強 = strong (つよい). 弓 (bow) shows drawn power. 勉強 = study ('force learning')." },
        { id: "ja-u41l2-hiroi", type: "kanji", front: "広", reading: "hiroi", meaning: "wide", example: { jp: "広い部屋です。", en: "It's a spacious room." }, accept: ["spacious","broad"], hint: "広 = wide / spacious (ひろい). A roof over open 厶 space." },
      ],
    },
    {
      id: "ja-u41l3",
      unit: 41,
      lesson: 3,
      title: "Descriptive kanji 3",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read 早 (early), 急 (hurry), 重 (heavy), 楽 (fun), 悪 (bad).",
      items: [
        { id: "ja-u41l3-hayai", type: "kanji", front: "早", reading: "hayai", meaning: "early", example: { jp: "今日は早いです。", en: "Today I'm early." }, accept: ["fast","soon"], hint: "早 = early (はやい). 日 (sun) over 十 — the sun already up high." },
        { id: "ja-u41l3-isogu", type: "kanji", front: "急", reading: "isogu", meaning: "hurry", example: { jp: "駅まで急ぎます。", en: "I hurry to the station." }, accept: ["urgent","rush"], hint: "急 = hurry / urgent (いそぐ). 急行 = express train ('hurry-go')." },
        { id: "ja-u41l3-omoi", type: "kanji", front: "重", reading: "omoi", meaning: "heavy", example: { jp: "このかばんは重いです。", en: "This bag is heavy." }, accept: ["important"], hint: "重 = heavy (おもい). Also 'important' — 大事 things weigh on you." },
        { id: "ja-u41l3-tanoshii", type: "kanji", front: "楽", reading: "tanoshii", meaning: "fun", example: { jp: "パーティーは楽しいです。", en: "The party is fun." }, accept: ["enjoyable","comfortable"], hint: "楽 = fun / enjoyable (たのしい). Also 'ease' — 音楽 = music, 楽 = comfortable." },
        { id: "ja-u41l3-warui", type: "kanji", front: "悪", reading: "warui", meaning: "bad", example: { jp: "天気が悪いです。", en: "The weather is bad." }, accept: ["evil","wrong"], hint: "悪 = bad (わるい). 亜 over 心 (heart) — a twisted heart. 悪い = bad / at fault." },
      ],
    },
  ],
};
