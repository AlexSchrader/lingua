// Unit 71 — かんじ・じかん ("Kanji — time, change & quantity") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 kanji hooking onto the B1 vocab: 現在→げんざい, 将来→しょうらい, 過去→かこ, 変化→へんか,
// 増える→ふえます, 減る→へります, 平均→へいきん, 合計→ごうけい, 満足→まんぞく, 続ける→つづけます…
// KanjiVG strokes required (KANJI_N3). Naturalness → native review.
export const UNIT71 = {
  id: "ja-u71", lang: "ja", title: "かんじ・じかん", order: 71, stage: "b1",
  lessons: [
    {
      id: "ja-u71l1", unit: 71, lesson: 1, title: "Time", cefr: "B1", dominantMode: "recall",
      canDo: "Read time kanji: 現 在 未 将 過 突.",
      items: [
        { id: "ja-u71l1-gen", type: "kanji", front: "現", reading: "gen", meaning: "present / appear", example: { jp: "現在のしごとがすきです。", en: "I like my present job." }, accept: ["current", "actual"], hint: "現 = present / appear. In 現在 (げんざい, the present), 表現 (ひょうげん, expression)." },
        { id: "ja-u71l1-zai", type: "kanji", front: "在", reading: "zai", meaning: "exist / be located", example: { jp: "現在、日本にいます。", en: "I'm currently in Japan." }, accept: ["present", "reside"], hint: "在 = exist / be located. In 現在 (げんざい, the present), 存在 (そんざい, existence)." },
        { id: "ja-u71l1-mi", type: "kanji", front: "未", reading: "mi", meaning: "not yet", example: { jp: "未来のゆめです。", en: "It's a dream for the future." }, accept: ["un-", "future"], hint: "未 = not yet. In 未来 (みらい, the future), 未定 (みてい, undecided)." },
        { id: "ja-u71l1-sho", type: "kanji", front: "将", reading: "shō", meaning: "future / commander", example: { jp: "将来のゆめがあります。", en: "I have a dream for the future." }, accept: ["general", "about to"], hint: "将 = future / commander. In 将来 (しょうらい, the future), 将軍 (しょうぐん, shogun)." },
        { id: "ja-u71l1-ka", type: "kanji", front: "過", reading: "ka", meaning: "pass / exceed", example: { jp: "過去のことはわすれます。", en: "I'll forget about the past." }, accept: ["excess", "mistake"], hint: "過 = pass / exceed. In 過去 (かこ, the past), 過ぎる (すぎる, to pass). ⻌ radical." },
        { id: "ja-u71l1-totsu", type: "kanji", front: "突", reading: "totsu", meaning: "sudden / thrust", example: { jp: "突然あめがふりました。", en: "It suddenly rained." }, accept: ["poke", "abrupt"], hint: "突 = sudden / thrust. In 突然 (とつぜん, suddenly)." },
      ],
    },
    {
      id: "ja-u71l2", unit: 71, lesson: 2, title: "Change", cefr: "B1", dominantMode: "recall",
      canDo: "Read change kanji: 変 増 減 続 展 移.",
      items: [
        { id: "ja-u71l2-hen", type: "kanji", front: "変", reading: "hen", meaning: "change / strange", example: { jp: "大きな変化です。", en: "It's a big change." }, accept: ["alter", "odd"], hint: "変 = change / strange. In 変化 (へんか, change), 大変 (たいへん, tough). 変える (かえる, to change)." },
        { id: "ja-u71l2-fueru", type: "kanji", front: "増", reading: "fueru", meaning: "increase", example: { jp: "ひとが増えました。", en: "The number of people increased." }, accept: ["grow", "add"], hint: "増 = increase. 増える (ふえる) = increase. In 増加 (ぞうか, increase). ⇄ 減." },
        { id: "ja-u71l2-heru", type: "kanji", front: "減", reading: "heru", meaning: "decrease", example: { jp: "おかねが減りました。", en: "My money decreased." }, accept: ["reduce", "lessen"], hint: "減 = decrease. 減る (へる) = decrease. In 減少 (げんしょう, decrease). ⇄ 増." },
        { id: "ja-u71l2-tsuzuku", type: "kanji", front: "続", reading: "tsuzuku", meaning: "continue", example: { jp: "べんきょうを続けます。", en: "I continue studying." }, accept: ["carry on", "series"], hint: "続 = continue. 続ける (つづける) = continue. In 連続 (れんぞく, in a row). 糸 radical." },
        { id: "ja-u71l2-ten", type: "kanji", front: "展", reading: "ten", meaning: "expand / unfold", example: { jp: "まちが発展しました。", en: "The town developed." }, accept: ["exhibit", "develop"], hint: "展 = expand / unfold. In 発展 (はってん, development), 展開 (てんかい, unfolding)." },
        { id: "ja-u71l2-utsuru", type: "kanji", front: "移", reading: "utsuru", meaning: "shift / move", example: { jp: "あたらしいいえに移ります。", en: "I move to a new house." }, accept: ["transfer", "change"], hint: "移 = shift / move. 移る (うつる) = move. In 移動 (いどう, moving)." },
      ],
    },
    {
      id: "ja-u71l3", unit: 71, lesson: 3, title: "Quantity", cefr: "B1", dominantMode: "recall",
      canDo: "Read quantity kanji: 量 割 均 合 計 満.",
      items: [
        { id: "ja-u71l3-ryo", type: "kanji", front: "量", reading: "ryō", meaning: "quantity", example: { jp: "量がおおいです。", en: "The quantity is large." }, accept: ["amount", "measure"], hint: "量 = quantity. In 数量 (すうりょう, quantity), 量る (はかる, to measure)." },
        { id: "ja-u71l3-waru", type: "kanji", front: "割", reading: "waru", meaning: "divide / proportion", example: { jp: "ふたつに割ります。", en: "I divide it in two." }, accept: ["split", "ratio"], hint: "割 = divide / proportion. 割る (わる) = divide. In 割合 (わりあい, ratio)." },
        { id: "ja-u71l3-kin", type: "kanji", front: "均", reading: "kin", meaning: "equal / even", example: { jp: "へいきんのてんです。", en: "It's an average score." }, accept: ["average", "level"], hint: "均 = equal / even. In 平均 (へいきん, average). 土 (earth) radical." },
        { id: "ja-u71l3-au", type: "kanji", front: "合", reading: "au", meaning: "fit / combine", example: { jp: "ごうけいはいくらですか。", en: "How much is the total?" }, accept: ["match", "join"], hint: "合 = fit / combine. 合う (あう) = to match. In 合計 (ごうけい, total), 場合 (ばあい, case)." },
        { id: "ja-u71l3-kei", type: "kanji", front: "計", reading: "kei", meaning: "measure / plan", example: { jp: "ごうけいを計算します。", en: "I calculate the total." }, accept: ["count", "total"], hint: "計 = measure / plan. In 合計 (ごうけい, total), 計画 (けいかく, plan), 時計 (とけい, clock)." },
        { id: "ja-u71l3-man", type: "kanji", front: "満", reading: "man", meaning: "full / satisfy", example: { jp: "けっかに満足です。", en: "I'm satisfied with the result." }, accept: ["fill", "complete"], hint: "満 = full / satisfy. In 満足 (まんぞく, satisfaction), 満員 (まんいん, full house). 氵 radical." },
      ],
    },
    {
      id: "ja-u71l4", unit: 71, lesson: 4, title: "Degree & rank", cefr: "B1", dominantMode: "recall",
      canDo: "Read degree kanji: 比 番 位 極 限 総.",
      items: [
        { id: "ja-u71l4-kuraberu", type: "kanji", front: "比", reading: "kuraberu", meaning: "compare", example: { jp: "ねだんを比べます。", en: "I compare prices." }, accept: ["ratio", "contrast"], hint: "比 = compare. 比べる (くらべる) = compare. In 比較 (ひかく, comparison)." },
        { id: "ja-u71l4-ban", type: "kanji", front: "番", reading: "ban", meaning: "number / turn", example: { jp: "すきな番組を見ます。", en: "I watch my favorite program." }, accept: ["order", "guard"], hint: "番 = number / turn. In 番組 (ばんぐみ, TV program), 一番 (いちばん, number one)." },
        { id: "ja-u71l4-i", type: "kanji", front: "位", reading: "i", meaning: "rank / place", example: { jp: "いちばんの位です。", en: "It's the top rank." }, accept: ["position", "grade"], hint: "位 = rank / place. In 位置 (いち, position), 一位 (いちい, first place). 亻 radical." },
        { id: "ja-u71l4-kyoku", type: "kanji", front: "極", reading: "kyoku", meaning: "extreme / pole", example: { jp: "きょくが強いです。", en: "The pole is strong." }, accept: ["utmost", "very"], hint: "極 = extreme / pole. In 積極的 (せっきょくてき, proactive), 北極 (ほっきょく, North Pole)." },
        { id: "ja-u71l4-kagiru", type: "kanji", front: "限", reading: "kagiru", meaning: "limit", example: { jp: "じかんに限りがあります。", en: "There's a time limit." }, accept: ["restrict", "bound"], hint: "限 = limit. 限る (かぎる) = to limit. In 制限 (せいげん, restriction), 期限 (きげん, deadline)." },
        { id: "ja-u71l4-so", type: "kanji", front: "総", reading: "sō", meaning: "total / general", example: { jp: "総合のてんです。", en: "It's the overall score." }, accept: ["overall", "whole"], hint: "総 = total / general. In 総合 (そうごう, overall), 総額 (そうがく, total amount). 糸 radical." },
      ],
    },
  ],
};
