// Unit 34 — かんじ・どうし 2 (Action/motion verb kanji, set 2) — A2 / JLPT N4
// Consolidated kanji unit (category: action & motion verb kanji). type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT34 = {
  id: "ja-u34",
  lang: "ja",
  title: "かんじ・どうし 2",
  order: 34,
  stage: "a2",
  lessons: [
    {
      id: "ja-u34l1",
      unit: 34,
      lesson: 1,
      title: "Motion kanji 1",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the action kanji: 始 (begin), 終 (end), 止 (stop), 切 (cut), 転 (roll/turn).",
      items: [
        { id: "ja-u34l1-hajimeru", type: "kanji", front: "始", reading: "hajimeru", meaning: "begin", example: { jp: "しごとを始めます。", en: "I start work." }, accept: ["start","commence"], hint: "始 = begin — 女 (woman) + 台: the start of life. 始まる / 始める = to begin." },
        { id: "ja-u34l1-owaru", type: "kanji", front: "終", reading: "owaru", meaning: "end", example: { jp: "じゅぎょうが終わります。", en: "The class ends." }, accept: ["finish","end"], hint: "終 = end — 糸 (thread) + 冬 (winter): the thread runs out. 終わる = to finish." },
        { id: "ja-u34l1-tomeru", type: "kanji", front: "止", reading: "tomeru", meaning: "stop", example: { jp: "くるまを止めます。", en: "I stop the car." }, accept: ["halt","stop"], hint: "止 = stop — a footprint standing still. 止まる / 止める = to stop." },
        { id: "ja-u34l1-kiru", type: "kanji", front: "切", reading: "kiru", meaning: "cut", example: { jp: "パンを切ります。", en: "I cut the bread." }, accept: ["slice","cut"], hint: "切 = cut — 七 (seven) + 刀 (sword): the blade cuts. 大切 = important ('greatly cut'/precious)." },
        { id: "ja-u34l1-korobu", type: "kanji", front: "転", reading: "korobu", meaning: "roll", example: { jp: "こどもが転びます。", en: "The child tumbles over." }, accept: ["tumble","fall over"], hint: "転 = roll / turn — 車 (wheel) turning. 自転車 = bicycle ('self-turning wheel')." },
      ],
    },
    {
      id: "ja-u34l2",
      unit: 34,
      lesson: 2,
      title: "Motion kanji 2",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the motion kanji: 走 (run), 歩 (walk), 帰 (return), 住 (live), 去 (leave).",
      items: [
        { id: "ja-u34l2-hashiru", type: "kanji", front: "走", reading: "hashiru", meaning: "run", example: { jp: "まいあさ走ります。", en: "I run every morning." }, accept: ["running"], hint: "走 = run — 土 (earth) over 足-like legs: a body speeding along the ground. 走る = to run." },
        { id: "ja-u34l2-aruku", type: "kanji", front: "歩", reading: "aruku", meaning: "walk", example: { jp: "こうえんを歩きます。", en: "I walk in the park." }, accept: ["walking","stroll"], hint: "歩 = walk — 止 (foot) plus a step: one foot after another. 歩く = to walk." },
        { id: "ja-u34l2-kaeru", type: "kanji", front: "帰", reading: "kaeru", meaning: "return", example: { jp: "うちに帰ります。", en: "I go home." }, accept: ["go home","return home"], hint: "帰 = return home — going back to where you belong. 帰る = to return home." },
        { id: "ja-u34l2-sumu", type: "kanji", front: "住", reading: "sumu", meaning: "live", example: { jp: "とうきょうに住みます。", en: "I live in Tokyo." }, accept: ["reside","dwell"], hint: "住 = live / reside — 亻 (person) + 主 (master): a person settled in a place. 住む = to live." },
        { id: "ja-u34l2-saru", type: "kanji", front: "去", reading: "saru", meaning: "leave", example: { jp: "かれは町を去りました。", en: "He left the town." }, accept: ["depart","go away"], hint: "去 = leave / past — moving away from a place. 去年 = last year ('the year that left')." },
      ],
    },
  ],
};
