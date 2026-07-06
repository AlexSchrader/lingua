// Unit 31 — かんじ・どうさ ("Action kanji") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A1 is native-reviewed + A2 greenlit.
// First N4 kanji unit. type:"kanji" — recognition/recall test the meaning, production
// traces (KanjiVG strokes fetched for all N4 kanji). Readings + examples deliberately
// reuse verbs the learner already met as A1/A2 vocab (開ける→あけます, 泳ぐ→およぎます,
// 育てる→そだてます…) so each kanji hooks onto a word they know. Naturalness → native review.
export const UNIT31 = {
  id: "ja-u31", lang: "ja", title: "かんじ・どうさ", order: 31, stage: "a2",
  lessons: [
    {
      id: "ja-u31l1", unit: 31, lesson: 1, title: "Start & finish kanji", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 使 始 終 送 習 集.",
      items: [
        { id: "ja-u31l1-tsukau", type: "kanji", front: "使", reading: "tsukau", meaning: "use", example: { jp: "ペンを使います。", en: "I use a pen." }, accept: ["to use"], hint: "使 = use. 亻 (person) + 吏 (official). 使います = use." },
        { id: "ja-u31l1-hajimeru", type: "kanji", front: "始", reading: "hajimeru", meaning: "begin", example: { jp: "べんきょうを始めます。", en: "I begin studying." }, accept: ["start"], hint: "始 = begin. 女 (woman) on the left. 始めます = start." },
        { id: "ja-u31l1-owaru", type: "kanji", front: "終", reading: "owaru", meaning: "end", example: { jp: "しごとが終わります。", en: "Work ends." }, accept: ["finish"], hint: "終 = end. 糸 (thread) on the left — the end of a thread. 終わります = end." },
        { id: "ja-u31l1-okuru", type: "kanji", front: "送", reading: "okuru", meaning: "send", example: { jp: "てがみを送ります。", en: "I send a letter." }, accept: ["to send"], hint: "送 = send. The ⻌ (movement) radical. 送ります = send." },
        { id: "ja-u31l1-narau", type: "kanji", front: "習", reading: "narau", meaning: "learn", example: { jp: "えいごを習います。", en: "I learn English." }, accept: ["study", "practice"], hint: "習 = learn. 羽 (feathers) over 白 — a bird practising flight. 習います = learn." },
        { id: "ja-u31l1-atsumeru", type: "kanji", front: "集", reading: "atsumeru", meaning: "gather", example: { jp: "きってを集めます。", en: "I collect stamps." }, accept: ["collect"], hint: "集 = gather. 隹 (bird) over 木 (tree) — birds flocking to a tree. 集めます = collect." },
      ],
    },
    {
      id: "ja-u31l2", unit: 31, lesson: 2, title: "Take & decide kanji", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 受 取 決 助 起 急.",
      items: [
        { id: "ja-u31l2-ukeru", type: "kanji", front: "受", reading: "ukeru", meaning: "receive", example: { jp: "テストを受けます。", en: "I take a test." }, accept: ["take", "accept"], hint: "受 = receive. 受けます = receive / take (a test)." },
        { id: "ja-u31l2-toru", type: "kanji", front: "取", reading: "toru", meaning: "take", example: { jp: "メモを取ります。", en: "I take a memo." }, accept: ["to take", "pick up"], hint: "取 = take. 耳 (ear) + 又 (hand) — taking hold. 取ります = take." },
        { id: "ja-u31l2-kimeru", type: "kanji", front: "決", reading: "kimeru", meaning: "decide", example: { jp: "いろを決めます。", en: "I decide on a color." }, accept: ["to decide", "settle"], hint: "決 = decide. 氵 (water) radical. 決めます = decide." },
        { id: "ja-u31l2-tasukeru", type: "kanji", front: "助", reading: "tasukeru", meaning: "help", example: { jp: "ともだちを助けます。", en: "I help my friend." }, accept: ["save", "rescue"], hint: "助 = help / save. 力 (power) on the right. 助けます = help." },
        { id: "ja-u31l2-okiru", type: "kanji", front: "起", reading: "okiru", meaning: "get up", example: { jp: "あさ、起きます。", en: "I get up in the morning." }, accept: ["wake up", "rise"], hint: "起 = get up. 走 (run) radical. 起きます — you know it as おきます." },
        { id: "ja-u31l2-isogu", type: "kanji", front: "急", reading: "isogu", meaning: "hurry", example: { jp: "えきへ急ぎます。", en: "I hurry to the station." }, accept: ["rush", "sudden", "urgent"], hint: "急 = hurry / urgent. 急ぎます — you know it as いそぎます." },
      ],
    },
    {
      id: "ja-u31l3", unit: 31, lesson: 3, title: "Move & open kanji", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 消 動 運 通 開 育.",
      items: [
        { id: "ja-u31l3-kesu", type: "kanji", front: "消", reading: "kesu", meaning: "turn off", example: { jp: "でんきを消します。", en: "I turn off the light." }, accept: ["erase", "extinguish"], hint: "消 = turn off / erase. 氵 (water) radical. 消します — you know it as けします." },
        { id: "ja-u31l3-ugoku", type: "kanji", front: "動", reading: "ugoku", meaning: "move", example: { jp: "くるまが動きます。", en: "The car moves." }, accept: ["to move"], hint: "動 = move. 力 (power) on the right. 動きます — you know it as うごきます." },
        { id: "ja-u31l3-un", type: "kanji", front: "運", reading: "un", meaning: "carry / luck", example: { jp: "運動します。", en: "I exercise." }, accept: ["fortune", "transport"], hint: "運 = carry / luck. In 運動 (うんどう, exercise) and 運転 (driving). ⻌ movement radical." },
        { id: "ja-u31l3-toru2", type: "kanji", front: "通", reading: "tōru", meaning: "pass through", example: { jp: "みちを通ります。", en: "I go along the road." }, accept: ["go through", "commute"], hint: "通 = pass through. ⻌ movement radical. Also 通います (かよう, commute)." },
        { id: "ja-u31l3-akeru", type: "kanji", front: "開", reading: "akeru", meaning: "open", example: { jp: "まどを開けます。", en: "I open the window." }, accept: ["to open"], hint: "開 = open. 門 (gate) with hands beneath. 開けます — you know it as あけます." },
        { id: "ja-u31l3-sodateru", type: "kanji", front: "育", reading: "sodateru", meaning: "raise", example: { jp: "こどもを育てます。", en: "I raise a child." }, accept: ["bring up", "grow"], hint: "育 = raise / bring up. 育てます — you know it as そだてます." },
      ],
    },
    {
      id: "ja-u31l4", unit: 31, lesson: 4, title: "Go & throw kanji", cefr: "A2", dominantMode: "recall",
      canDo: "Read the kanji: 泳 進 返 放 投 打.",
      items: [
        { id: "ja-u31l4-oyogu", type: "kanji", front: "泳", reading: "oyogu", meaning: "swim", example: { jp: "うみで泳ぎます。", en: "I swim in the sea." }, accept: ["to swim"], hint: "泳 = swim. 氵 (water) radical. 泳ぎます — you know it as およぎます." },
        { id: "ja-u31l4-susumu", type: "kanji", front: "進", reading: "susumu", meaning: "advance", example: { jp: "まえに進みます。", en: "I move forward." }, accept: ["proceed", "go forward"], hint: "進 = advance. ⻌ movement + 隹 (bird). 進みます = move forward." },
        { id: "ja-u31l4-kaesu", type: "kanji", front: "返", reading: "kaesu", meaning: "return", example: { jp: "ほんを返します。", en: "I return the book." }, accept: ["give back"], hint: "返 = return / give back. ⻌ movement radical. 返します = give back." },
        { id: "ja-u31l4-hanasu", type: "kanji", front: "放", reading: "hanasu", meaning: "release", example: { jp: "とりを放します。", en: "I set the bird free." }, accept: ["let go", "set free"], hint: "放 = release / let loose. 放します = set free." },
        { id: "ja-u31l4-nageru", type: "kanji", front: "投", reading: "nageru", meaning: "throw", example: { jp: "いしを投げます。", en: "I throw a stone." }, accept: ["to throw", "pitch"], hint: "投 = throw. 扌 (hand) radical. 投げます = throw." },
        { id: "ja-u31l4-utsu", type: "kanji", front: "打", reading: "utsu", meaning: "hit", example: { jp: "ボールを打ちます。", en: "I hit the ball." }, accept: ["strike", "bat"], hint: "打 = hit / strike. 扌 (hand) radical. 打ちます = hit." },
      ],
    },
  ],
};
