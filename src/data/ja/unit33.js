// Unit 33 — かんじ・どうし 1 (Action verb kanji, set 1) — A2 / JLPT N4
// Consolidated kanji unit (category: action verb kanji). type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT33 = {
  id: "ja-u33",
  lang: "ja",
  title: "かんじ・どうし 1",
  order: 33,
  stage: "a2",
  lessons: [
    {
      id: "ja-u33l1",
      unit: 33,
      lesson: 1,
      title: "Action kanji 1",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the action kanji: 発 (emit), 動 (move), 開 (open), 通 (pass through), 使 (use).",
      items: [
        { id: "ja-u33l1-hatsu", type: "kanji", front: "発", reading: "hatsu", meaning: "departure", example: { jp: "九時発の電車です。", en: "It's the nine o'clock departure train." }, accept: ["emit","emission","start"], hint: "発 = departure / emit. 出発 = departure (しゅっぱつ). Something bursts out and sets off." },
        { id: "ja-u33l1-do", type: "kanji", front: "動", reading: "dō", meaning: "move", example: { jp: "電車が動きます。", en: "The train moves." }, accept: ["motion","movement"], hint: "動 = move. 重 (heavy) + 力 (power): it takes power to move something heavy. 運動 = exercise." },
        { id: "ja-u33l1-hiraku", type: "kanji", front: "開", reading: "hiraku", meaning: "to open", example: { jp: "本を開きます。", en: "I open the book." }, accept: ["open"], hint: "開 = open. 門 (gate) with two hands lifting the bar off — the gate opens. 本を開く = open a book." },
        { id: "ja-u33l1-tsu", type: "kanji", front: "通", reading: "tsū", meaning: "pass through", example: { jp: "この道を通ります。", en: "I pass through this street." }, accept: ["commute","go through"], hint: "通 = pass through / commute. 交通 = traffic (こうつう). The road (⻌) lets you go through." },
        { id: "ja-u33l1-tsukau", type: "kanji", front: "使", reading: "tsukau", meaning: "to use", example: { jp: "はしを使います。", en: "I use chopsticks." }, accept: ["use","employ"], hint: "使 = to use. 亻 (person) + 吏 (official): an official sends a person to do a job — you use them." },
      ],
    },
    {
      id: "ja-u33l2",
      unit: 33,
      lesson: 2,
      title: "Action kanji 2",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the action kanji: 集 (gather), 送 (send), 起 (get up), 着 (arrive), 運 (carry).",
      items: [
        { id: "ja-u33l2-atsumeru", type: "kanji", front: "集", reading: "atsumeru", meaning: "to gather", example: { jp: "きってを集めます。", en: "I collect stamps." }, accept: ["collect","gather"], hint: "集 = gather / collect. 隹 (bird) over 木 (tree): birds flock together on a tree." },
        { id: "ja-u33l2-okuru", type: "kanji", front: "送", reading: "okuru", meaning: "to send", example: { jp: "メールを送ります。", en: "I send an email." }, accept: ["send","see off"], hint: "送 = to send / see off. The road (⻌) carries something on its way." },
        { id: "ja-u33l2-okiru", type: "kanji", front: "起", reading: "okiru", meaning: "to get up", example: { jp: "六時に起きます。", en: "I get up at six." }, accept: ["wake up","rise"], hint: "起 = get up / wake. 走 (run) + 己 (self): you rouse yourself and rise." },
        { id: "ja-u33l2-kiru", type: "kanji", front: "着", reading: "kiru", meaning: "to wear", example: { jp: "コートを着ます。", en: "I wear a coat." }, accept: ["wear","arrive"], hint: "着 = wear (also 'arrive'). 到着 = arrival (とうちゃく). Clothes land on you; a traveler lands at a place." },
        { id: "ja-u33l2-hakobu", type: "kanji", front: "運", reading: "hakobu", meaning: "to carry", example: { jp: "にもつを運びます。", en: "I carry the luggage." }, accept: ["carry","transport","luck"], hint: "運 = carry (also 'luck'). 軍 (army) on the road (⻌): moving troops. 運動 = exercise, 運 = fortune." },
      ],
    },
  ],
};
