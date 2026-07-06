// Unit 34 — かんじ・からだ・きもち ("Body & feeling kanji") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
export const UNIT34 = {
  id: "ja-u34", lang: "ja", title: "かんじ・からだ・きもち", order: 34, stage: "a2",
  lessons: [
    {
      id: "ja-u34l1", unit: 34, lesson: 1, title: "The body", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 病 死 血 皮 鼻 歯.",
      items: [
        { id: "ja-u34l1-byo", type: "kanji", front: "病", reading: "byō", meaning: "illness", example: { jp: "病院にいきます。", en: "I go to the hospital." }, accept: ["sick", "disease"], hint: "病 = illness. 病院 (びょういん, hospital), 病気 (びょうき, illness)." },
        { id: "ja-u34l1-shinu", type: "kanji", front: "死", reading: "shinu", meaning: "death", example: { jp: "むしが死にます。", en: "The bug dies." }, accept: ["die"], hint: "死 = death / die. 死にます = die." },
        { id: "ja-u34l1-chi", type: "kanji", front: "血", reading: "chi", meaning: "blood", example: { jp: "血はあかいです。", en: "Blood is red." }, accept: ["blood"], hint: "血 = blood. A drop over 皿 (dish). 血液 (blood)." },
        { id: "ja-u34l1-kawa", type: "kanji", front: "皮", reading: "kawa", meaning: "skin", example: { jp: "りんごの皮です。", en: "It's an apple's skin." }, accept: ["peel", "leather"], hint: "皮 = skin / peel. 毛皮 (fur), りんごの皮." },
        { id: "ja-u34l1-hana", type: "kanji", front: "鼻", reading: "hana", meaning: "nose", example: { jp: "鼻がいたいです。", en: "My nose hurts." }, accept: ["a nose"], hint: "鼻 = nose. A pictograph. (Not 花, flower, also はな.)" },
        { id: "ja-u34l1-ha", type: "kanji", front: "歯", reading: "ha", meaning: "tooth", example: { jp: "歯がいたいです。", en: "My tooth hurts." }, accept: ["teeth"], hint: "歯 = tooth. 止 over teeth. 歯医者 (dentist)." },
      ],
    },
    {
      id: "ja-u34l2", unit: 34, lesson: 2, title: "Feelings", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 悪 苦 悲 感 意 想.",
      items: [
        { id: "ja-u34l2-warui", type: "kanji", front: "悪", reading: "warui", meaning: "bad", example: { jp: "てんきが悪いです。", en: "The weather is bad." }, accept: ["evil", "wrong"], hint: "悪 = bad / evil. 悪い — you know it as わるい." },
        { id: "ja-u34l2-nigai", type: "kanji", front: "苦", reading: "nigai", meaning: "bitter", example: { jp: "くすりは苦いです。", en: "Medicine is bitter." }, accept: ["painful", "suffering"], hint: "苦 = bitter / suffering. 苦い — you know it as にがい. 苦しい (painful)." },
        { id: "ja-u34l2-kanashii", type: "kanji", front: "悲", reading: "kanashii", meaning: "sad", example: { jp: "えいがは悲しいです。", en: "The movie is sad." }, accept: ["sorrowful"], hint: "悲 = sad. 心 (heart) at the bottom. 悲しい — you know it as かなしい." },
        { id: "ja-u34l2-kan", type: "kanji", front: "感", reading: "kan", meaning: "feeling", example: { jp: "かんじがいいです。", en: "It feels good." }, accept: ["sense", "emotion"], hint: "感 = feeling / sense. 心 (heart) at the bottom. 感じる (feel), 感動 (be moved)." },
        { id: "ja-u34l2-i", type: "kanji", front: "意", reading: "i", meaning: "mind", example: { jp: "いみがわかります。", en: "I understand the meaning." }, accept: ["intention", "meaning"], hint: "意 = mind / intention. 心 (heart) at the bottom. 意味 (meaning), 注意 (caution)." },
        { id: "ja-u34l2-so", type: "kanji", front: "想", reading: "sō", meaning: "thought", example: { jp: "そうぞうします。", en: "I imagine it." }, accept: ["idea", "imagine"], hint: "想 = thought / idea. 心 (heart) at the bottom. 想像 (imagination), 予想 (prediction)." },
      ],
    },
    {
      id: "ja-u34l3", unit: 34, lesson: 3, title: "Mind & spirit", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 息 幸 神 身 指 美.",
      items: [
        { id: "ja-u34l3-iki", type: "kanji", front: "息", reading: "iki", meaning: "breath", example: { jp: "息をします。", en: "I take a breath." }, accept: ["breathing"], hint: "息 = breath. 自 (nose) over 心 (heart). 休息 (rest), 息子 (むすこ, son)." },
        { id: "ja-u34l3-shiawase", type: "kanji", front: "幸", reading: "shiawase", meaning: "happiness", example: { jp: "幸せです。", en: "I'm happy." }, accept: ["fortune", "lucky"], hint: "幸 = happiness / fortune. 幸せ (しあわせ), 幸運 (good luck)." },
        { id: "ja-u34l3-kami", type: "kanji", front: "神", reading: "kami", meaning: "god", example: { jp: "じんじゃに神がいます。", en: "There's a god at the shrine." }, accept: ["deity", "spirit"], hint: "神 = god / deity. ネ (altar) radical. 神社 (じんじゃ, shrine)." },
        { id: "ja-u34l3-mi", type: "kanji", front: "身", reading: "mi", meaning: "body", example: { jp: "中身をみます。", en: "I look at the contents." }, accept: ["oneself"], hint: "身 = body / oneself. 自身 (じしん, oneself), 中身 (contents)." },
        { id: "ja-u34l3-yubi", type: "kanji", front: "指", reading: "yubi", meaning: "finger", example: { jp: "指がいたいです。", en: "My finger hurts." }, accept: ["point"], hint: "指 = finger. 扌 (hand) radical. You know ゆび. 指します = point." },
        { id: "ja-u34l3-bi", type: "kanji", front: "美", reading: "bi", meaning: "beauty", example: { jp: "びじゅつかんにいきます。", en: "I go to the art museum." }, accept: ["beautiful"], hint: "美 = beauty / beautiful. 美術館 (びじゅつかん, art museum), 美しい (beautiful)." },
      ],
    },
    {
      id: "ja-u34l4", unit: 34, lesson: 4, title: "States", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 暗 深 真 暑 面 相.",
      items: [
        { id: "ja-u34l4-kurai", type: "kanji", front: "暗", reading: "kurai", meaning: "dark", example: { jp: "よるは暗いです。", en: "It's dark at night." }, accept: ["gloomy"], hint: "暗 = dark. 日 (sun) + 音. 暗い = dark." },
        { id: "ja-u34l4-fukai", type: "kanji", front: "深", reading: "fukai", meaning: "deep", example: { jp: "うみは深いです。", en: "The sea is deep." }, accept: ["profound"], hint: "深 = deep. 氵 (water) radical. 深い = deep." },
        { id: "ja-u34l4-shin", type: "kanji", front: "真", reading: "shin", meaning: "true", example: { jp: "しゃしんをとります。", en: "I take a photo." }, accept: ["real", "genuine"], hint: "真 = true / real. 写真 (しゃしん, photo — a 'true copy'), 真ん中 (center)." },
        { id: "ja-u34l4-atsui", type: "kanji", front: "暑", reading: "atsui", meaning: "hot (weather)", example: { jp: "なつは暑いです。", en: "Summer is hot." }, accept: ["hot"], hint: "暑 = hot (weather). 日 (sun) on top. 暑い — like あつい. (For hot objects, 熱い.)" },
        { id: "ja-u34l4-men", type: "kanji", front: "面", reading: "men", meaning: "surface", example: { jp: "じめんをみます。", en: "I look at the ground." }, accept: ["face", "mask", "aspect"], hint: "面 = surface / face / mask. 地面 (ground), 面白い (interesting), 場面 (scene)." },
        { id: "ja-u34l4-ai", type: "kanji", front: "相", reading: "ai", meaning: "mutual", example: { jp: "あいてとはなします。", en: "I talk with my partner." }, accept: ["appearance", "phase"], hint: "相 = mutual / appearance. 木 + 目. 相手 (あいて, partner), 相談 (consultation)." },
      ],
    },
  ],
};
