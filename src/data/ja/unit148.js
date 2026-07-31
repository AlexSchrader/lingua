// Unit 148 — ごい・N3・30 ("N3 vocab 30") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Same-reading homographs (組む/汲む/酌む) disambiguated via hints.
export const UNIT148 = {
  id: "ja-u148", lang: "ja", title: "ごい・N3・30", order: 148, stage: "b1",
  lessons: [
    {
      id: "ja-u148l1", unit: 148, lesson: 1, title: "N3 vocab 30·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 偶然 (by chance), 臭い (stinky), 鎖 (chain), 腐る (to rot), 癖 (habit), 管 (pipe).",
      items: [
        { id: "ja-u148l1-guzen", type: "vocab", front: "偶然", reading: "gūzen", meaning: "by chance", example: { jp: "えきで偶然ともだちにあいました。", en: "I met a friend by chance at the station." }, accept: ["unexpectedly", "coincidence"], hint: "偶然 (ぐうぜん) = by chance / unexpectedly." },
        { id: "ja-u148l1-kusai", type: "vocab", front: "臭い", reading: "kusai", meaning: "stinky", example: { jp: "このへやはとても臭いです。", en: "This room is very smelly." }, accept: ["smelly", "bad-smelling"] },
        { id: "ja-u148l1-kusari", type: "vocab", front: "鎖", reading: "kusari", meaning: "chain", example: { jp: "いぬを鎖でつなぎました。", en: "I tied up the dog with a chain." }, accept: [] },
        { id: "ja-u148l1-kusaru", type: "vocab", front: "腐る", reading: "kusaru", meaning: "to rot", example: { jp: "あついのでぎゅうにゅうが腐りました。", en: "It's hot, so the milk went bad." }, accept: ["to go bad"] },
        { id: "ja-u148l1-kuse", type: "vocab", front: "癖", reading: "kuse", meaning: "habit", example: { jp: "かれはかみをさわる癖があります。", en: "He has a habit of touching his hair." }, accept: ["peculiarity", "bad habit"], hint: "癖 (くせ) = a habit, often a bad or unconscious one." },
        { id: "ja-u148l1-kuda", type: "vocab", front: "管", reading: "kuda", meaning: "pipe", example: { jp: "この管はとてもほそいです。", en: "This pipe is very thin." }, accept: ["tube"] },
      ],
    },
    {
      id: "ja-u148l2", unit: 148, lesson: 2, title: "N3 vocab 30·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 具体 (concrete), 下り (down-train), 下る (to get down), 苦痛 (pain), ぐっすり (sound asleep), 区別 (distinction).",
      items: [
        { id: "ja-u148l2-gutai", type: "vocab", front: "具体", reading: "gutai", meaning: "concrete", example: { jp: "もっと具体的にせつめいしてください。", en: "Please explain it more concretely." }, accept: ["tangible", "material"], hint: "具体的 (ぐたいてき) = concrete / specific — usually used as 具体的な." },
        { id: "ja-u148l2-kudari", type: "vocab", front: "下り", reading: "kudari", meaning: "down-train", example: { jp: "下りのでんしゃにのりました。", en: "I got on the outbound train." }, accept: ["outbound train"], hint: "下り (くだり) = a train heading away from Tokyo. Opposite: 上り." },
        { id: "ja-u148l2-kudaru", type: "vocab", front: "下る", reading: "kudaru", meaning: "to get down", example: { jp: "ゆっくりやまみちを下ります。", en: "I go slowly down the mountain path." }, accept: ["to descend"], hint: "下る (くだる) = to go down / descend. Pair with 下り (the noun)." },
        { id: "ja-u148l2-kutsu", type: "vocab", front: "苦痛", reading: "kutsū", meaning: "pain", example: { jp: "せなかの苦痛がつづいています。", en: "The pain in my back continues." }, accept: ["agony"], hint: "苦痛 (くつう) = pain / suffering, physical or mental." },
        { id: "ja-u148l2-gussuri", type: "vocab", front: "ぐっすり", reading: "gussuri", meaning: "sound asleep", example: { jp: "ゆうべはぐっすりねむりました。", en: "I slept soundly last night." }, accept: ["fast asleep"], hint: "ぐっすり = an adverb: to sleep deeply / soundly." },
        { id: "ja-u148l2-kubetsu", type: "vocab", front: "区別", reading: "kubetsu", meaning: "distinction", example: { jp: "ふたつのいろの区別がむずかしいです。", en: "Telling the two colors apart is difficult." }, accept: ["differentiation", "classification"], hint: "区別する (くべつする) = to distinguish / tell apart." },
      ],
    },
    {
      id: "ja-u148l3", unit: 148, lesson: 3, title: "N3 vocab 30·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 組合 (association), 組む (to put together), 汲む (to draw), 酌む (to serve sake), 悔しい (regrettable), 暮らし (living).",
      items: [
        { id: "ja-u148l3-kumiai", type: "vocab", front: "組合", reading: "kumiai", meaning: "association", example: { jp: "かいしゃの組合にはいりました。", en: "I joined the company union." }, accept: ["union"], hint: "組合 (くみあい) = an association / labor union." },
        { id: "ja-u148l3-kumu", type: "vocab", front: "組む", reading: "kumu", meaning: "to put together", example: { jp: "ふたりでチームを組みます。", en: "The two of us form a team." }, accept: ["to assemble", "to form"], hint: "組む (くむ) = to form / team up. Same reading as 汲む and 酌む." },
        { id: "ja-u148l3-kumu2", type: "vocab", front: "汲む", reading: "kumu", meaning: "to draw", example: { jp: "いどからみずを汲みます。", en: "I draw water from the well." }, accept: ["to scoop", "to pump"], hint: "汲む (くむ) = to draw / scoop up water. Same reading as 組む." },
        { id: "ja-u148l3-kumu3", type: "vocab", front: "酌む", reading: "kumu", meaning: "to serve sake", example: { jp: "ちちにおさけを酌みました。", en: "I poured sake for my father." }, accept: ["to pour sake"], hint: "酌む (くむ) = to pour / serve sake. Same reading as 組む and 汲む." },
        { id: "ja-u148l3-kuyashii", type: "vocab", front: "悔しい", reading: "kuyashii", meaning: "regrettable", example: { jp: "しあいにまけてとても悔しいです。", en: "I lost the match and feel so frustrated." }, accept: ["mortifying", "vexing"], hint: "悔しい (くやしい) = the frustration/regret of losing or failing." },
        { id: "ja-u148l3-kurashi", type: "vocab", front: "暮らし", reading: "kurashi", meaning: "living", example: { jp: "いなかの暮らしはしずかです。", en: "Life in the countryside is quiet." }, accept: ["life style"], hint: "暮らし (くらし) = daily life / living. From 暮らす (to live)." },
      ],
    },
    {
      id: "ja-u148l4", unit: 148, lesson: 4, title: "N3 vocab 30·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 暮らす (to live), 繰り返す (to repeat), 狂う (to go mad), 苦しい (tough), 苦しむ (to suffer), 暮れ (year end).",
      items: [
        { id: "ja-u148l4-kurasu", type: "vocab", front: "暮らす", reading: "kurasu", meaning: "to live", example: { jp: "かぞくとしあわせに暮らしています。", en: "I live happily with my family." }, accept: ["to get along"], hint: "暮らす (くらす) = to live / spend one's days. Noun: 暮らし." },
        { id: "ja-u148l4-kurikaesu", type: "vocab", front: "繰り返す", reading: "kurikaesu", meaning: "to repeat", example: { jp: "おなじことばを繰り返します。", en: "I repeat the same word." }, accept: ["to do over again"], hint: "繰り返す (くりかえす) = to repeat / do over again." },
        { id: "ja-u148l4-kuru", type: "vocab", front: "狂う", reading: "kurū", meaning: "to go mad", example: { jp: "このとけいは時間が狂っています。", en: "This clock's time is off." }, accept: ["to get out of order"], hint: "狂う (くるう) = to go mad; also for things to go wrong / out of order." },
        { id: "ja-u148l4-kurushii", type: "vocab", front: "苦しい", reading: "kurushii", meaning: "tough", example: { jp: "はしったのでいきが苦しいです。", en: "I ran, so it's hard to breathe." }, accept: ["painful", "strenuous"], hint: "苦しい (くるしい) = physically or mentally hard / painful." },
        { id: "ja-u148l4-kurushimu", type: "vocab", front: "苦しむ", reading: "kurushimu", meaning: "to suffer", example: { jp: "ながいびょうきで苦しみました。", en: "I suffered from a long illness." }, accept: ["to groan", "to be worried"], hint: "苦しむ (くるしむ) = to suffer / be in pain. From 苦しい." },
        { id: "ja-u148l4-kure", type: "vocab", front: "暮れ", reading: "kure", meaning: "year end", example: { jp: "としの暮れはとてもいそがしいです。", en: "The end of the year is very busy." }, accept: ["nightfall", "dusk"], hint: "暮れ (くれ) = the close of the year; also dusk / nightfall." },
      ],
    },
  ],
};
