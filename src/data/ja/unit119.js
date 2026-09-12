// JA Unit 119 — かんじ・ちがい (N3 kanji — rank and difference) — B1 / JLPT N3
// ─────────────────────────────────────────────────────────────────────────────
// GLYPH OWNERSHIP — re-derived against block 1's authored content, not against a
// rule of my own. The first draft split the untaught N3 pool (320 glyphs, exactly
// 20 slices of 16) in the list order of scripts/fetch-kanjivg.mjs and asserted
// block 1 would land on the same split with no coordination. It did not, and could
// not have: the rule fixed the SIZE of a slice but never its ORDERING BASIS, and
// block 1 sliced the same pool semantically (emotion, work, politics, buildings)
// while this block sliced it phonetically. Both are defensible readings of a file
// that explicitly calls itself "a SUPERSET to draw from, not a syllabus"
// (fetch-kanjivg.mjs:60). 86 of 160 glyphs collided.
//
// So ownership is no longer derived at all — it is READ. Block 1's 160 glyphs are
// subtracted and the remainder is what block 2 teaches:
//   pool(320) − block1(160) = 160 = 10 units × 16
// It lands exactly, and every N3 glyph in the band is now taught once by somebody,
// which the colliding split did not achieve — it left 100 glyphs taught by nobody,
// and no validator anywhere reports that.
//
// PIN, and what it is worth. Measured against block 1 at `0c1e730`. The earlier pin
// here was `f1bb4d2`, and it WENT FALSE: block 1's restructure in between introduced
// seven kana/kanji duplicates of this block's words (yobou, kako, ryuukou, seisan,
// seishin, sonchou, byoudou) and then removed them again. So a pin is a timestamp on
// a measurement, not a guarantee — the honest form of the claim is "0 collisions as
// of <sha>", and the merge seat must re-measure rather than cite it. What subtraction
// buys is not permanence; it is that re-checking costs one command instead of a
// re-derivation.
//
// The lesson worth keeping: RUNBOOK §4's "never coordinate with the other sessions"
// forbids MESSAGING, not READING. A sibling worktree is committed content at a path
// printed on the crew board, and CLAUDE.md's "the repo is the source of truth, not
// memory" applies to it exactly as it applies to this one.
//
// READING FIELD — restored, because the rebuild deleted this rule and then broke
// it 75 times. `reading` is not decoration: Furigana rubies it over the headword
// and the dictation card grades a typed answer against it (TypeCard.jsx, the
// listen branch — `check: checkReading, answer: item.reading`, and kanji items DO
// get audio; 141 of the shipped u31–u42 ones are in the manifest). So the rule is
// **the reading is whichever form this item's own example demonstrates** — kun
// where the example shows okurigana, on where it shows a compound. That is the
// shipped convention (u31–u42 and block 1 both score zero mismatches) and the
// first draft of this block scored 75, entirely because it kept a gojūon
// clustering that only mattered under the falsified slice rule.
// Where a lesson is still built on a shared sound (the ひ set in u132, the ふく set
// in u134), the hints name the ON-YOMI explicitly rather than implying the reading
// field carries it.
//
// CARD SHAPE — 4 lessons × (4 kanji + 2 compound) = 24. Compounds are built from
// the four glyphs just taught, and every one is checked against the corpus AND
// block 1 BY READING, not by front: 14 of the first 80 candidates here were words
// that already ship (教育 管理 機会 事件 警察 判断 …) written in kanji instead of
// kana, which front-uniqueness cannot see.
//
// Examples are kanji here, unlike this block's vocab units — target glyph plus
// glyphs already taught, as in the shipped kanji units u31–u42.
// ─────────────────────────────────────────────────────────────────────────────
export const UNIT119 = {
  id: "ja-u119",
  lang: "ja",
  title: "かんじ・ちがい",
  order: 119,
  stage: "b1",
  lessons: [
    {
      id: "ja-u119l1",
      unit: 119,
      lesson: 1,
      title: "Rank and difference",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 暗 (dark), 位 (rank), 偉 (great), 違 (differ), and the words 地位 and 暗記.",
      items: [
        { id: "ja-u119l1-kurai", type: "kanji", front: "暗", reading: "kurai", meaning: "dark", example: { jp: "へやが暗かったので、電気をつけました。", en: "The room was dark, so I turned on the light." }, accept: ["dim", "gloomy", "unlit"], hint: "暗 = 日 (sun) + 音 — the hour when you go by sound because you cannot see. 暗い = dark, 暗記 = learning by heart." },
        { id: "ja-u119l1-kuraiposition", type: "kanji", front: "位", reading: "i", meaning: "rank", example: { jp: "三位になって、本人もおどろいていました。", en: "He came third, and even he was surprised." }, accept: ["place", "position", "grade"], hint: "位 = 人 (person) standing 立 in their appointed spot. 一位 = first place, 地位 = one's standing." },
        { id: "ja-u119l1-erai", type: "kanji", front: "偉", reading: "erai", meaning: "great", example: { jp: "偉い人が来たので、みんな急にしずかになりました。", en: "An important person came, so everyone suddenly went quiet." }, accept: ["eminent", "admirable", "important"], hint: "偉 = 人 (person) + 韋 — someone who stands out from the rest. 偉い also praises a child for behaving well." },
        { id: "ja-u119l1-chigau", type: "kanji", front: "違", reading: "chigau", meaning: "differ", example: { jp: "考えは違いますが、はなしあいはできます。", en: "Our ideas differ, but we can still talk it through." }, accept: ["be different", "be wrong", "vary"], hint: "違 = 辶 (go) a different way from everyone else. 違います = that's not right; 間違い = a mistake. Its on-yomi is い, like 位 and 偉." },
        { id: "ja-u119l1-chii", type: "vocab", front: "地位", reading: "chii", meaning: "standing", example: { jp: "地位が高くなると、じゆうな時間はへります。", en: "As your standing rises, your free time shrinks." }, accept: ["position", "status", "rank"] },
        { id: "ja-u119l1-anki", type: "vocab", front: "暗記", reading: "anki", meaning: "learning by heart", example: { jp: "暗記だけしても、意味が分からなければ使えません。", en: "Even if you learn it by heart, it's no use unless you understand the meaning." }, accept: ["memorization", "rote learning", "by rote"] },
      ],
    },
    {
      id: "ja-u119l2",
      unit: 119,
      lesson: 2,
      title: "Causes and performance",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 育 (raise), 因 (cause), 演 (perform), 煙 (smoke), and the words 体育 and 演出.",
      items: [
        { id: "ja-u119l2-sodateru", type: "kanji", front: "育", reading: "sodateru", meaning: "raise", example: { jp: "子どもを育てるのは大変ですが、たのしいこともおおいです。", en: "Raising children is hard, but there is a lot to enjoy too." }, accept: ["bring up", "grow", "nurture"], hint: "育 = a child shown head-down, being brought into the world and fed 月. 体育 = physical education." },
        { id: "ja-u119l2-in", type: "kanji", front: "因", reading: "in", meaning: "cause", example: { jp: "そのふたつに因果はないのに、みんな気にしています。", en: "There is no causal link between those two, but everyone frets about it." }, accept: ["reason", "factor", "origin"], hint: "因 = 囗 (an enclosure) round 大 — what a thing is contained by, hence what it comes from. 原因 = the cause." },
        { id: "ja-u119l2-en", type: "kanji", front: "演", reading: "en", meaning: "perform", example: { jp: "むすめが学校で演じたので、家族みんなで見に行きました。", en: "My daughter performed at school, so the whole family went to watch." }, accept: ["act", "play a part", "stage"], hint: "演 = 氵 (water) + 寅 — something that flows out in front of people. 演出 = staging, 出演 = appearing in." },
        { id: "ja-u119l2-kemuri", type: "kanji", front: "煙", reading: "kemuri", meaning: "smoke", example: { jp: "台所から煙が出たので、いそいでまどを開けました。", en: "Smoke came from the kitchen, so I hurried to open the window." }, accept: ["fumes", "smoking"], hint: "煙 = 火 (fire) + 垔 — what rises off a fire. 禁煙 = no smoking. Its on-yomi is えん, like 演." },
        { id: "ja-u119l2-taiiku", type: "vocab", front: "体育", reading: "taiiku", meaning: "physical education", example: { jp: "体育がきらいだったので、走るのはいまでも下手です。", en: "I hated PE, so I'm still bad at running." }, accept: ["PE", "gym class", "sport at school"] },
        { id: "ja-u119l2-enshutsu", type: "vocab", front: "演出", reading: "enshutsu", meaning: "staging", example: { jp: "演出がりっぱで、さいごまであきませんでした。", en: "The staging was splendid, and it held me to the end." }, accept: ["direction", "production", "how it is presented"] },
      ],
    },
    {
      id: "ja-u119l3",
      unit: 119,
      lesson: 3,
      title: "Sideways, kings, outcomes",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 横 (sideways), 王 (king), 果 (outcome), 解 (undo), and the words 王国 and 王子.",
      items: [
        { id: "ja-u119l3-yoko", type: "kanji", front: "横", reading: "yoko", meaning: "sideways", example: { jp: "駅の横に店ができて、とてもべんりになりました。", en: "A shop opened beside the station, and it's become very handy." }, accept: ["beside", "horizontal", "the side"], hint: "横 = 木 (wood) laid across. 横 is the side, or the horizontal — the opposite of lengthways." },
        { id: "ja-u119l3-o", type: "kanji", front: "王", reading: "ō", meaning: "king", example: { jp: "その国に王はいても、力はあまりありません。", en: "That country has a king, yet he doesn't hold much power." }, accept: ["monarch", "ruler"], hint: "王 = three levels — heaven, earth, people — joined by one line down the middle: the one who links them." },
        { id: "ja-u119l3-ka", type: "kanji", front: "果", reading: "hate", meaning: "outcome", example: { jp: "ながいはなしあいの果てに、やっとまとまりました。", en: "At the end of a long discussion, it finally came together." }, accept: ["fruit", "result", "bear fruit"], hint: "果 = fruit 田 hanging on a tree 木 — what the growing finally produces. 果物 = fruit, 結果 = a result." },
        { id: "ja-u119l3-toku", type: "kanji", front: "解", reading: "toku", meaning: "undo", example: { jp: "問題を解いてから、答えをたしかめました。", en: "I worked the problem out, and then checked the answer." }, accept: ["solve", "untie", "explain"], hint: "解 = 角 (horn) + 刀 (blade) + 牛 (ox) — taking a thing apart to see how it works. 解けます = to come undone, or to be solved." },
        { id: "ja-u119l3-okoku", type: "vocab", front: "王国", reading: "ōkoku", meaning: "kingdom", example: { jp: "むかしは王国でしたので、古いたてものが多いです。", en: "It used to be a kingdom, so there are many old buildings." }, accept: ["a kingdom", "realm"] },
        { id: "ja-u119l3-oji", type: "vocab", front: "王子", reading: "ōji", meaning: "prince", example: { jp: "王子の話は有名なので、子どもでもよく知っています。", en: "The story about the prince is famous, so even children know it well." }, accept: ["a prince", "the king's son"] },
      ],
    },
    {
      id: "ja-u119l4",
      unit: 119,
      lesson: 4,
      title: "Turning, ease, certainty",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 回 (turn), 快 (pleasant), 格 (status), 確 (certain), and the words 一回 and 明確.",
      items: [
        { id: "ja-u119l4-mawaru", type: "kanji", front: "回", reading: "mawaru", meaning: "turn", example: { jp: "よく回るいすなので、子どもがよろこびます。", en: "It's a chair that spins well, so the children love it." }, accept: ["revolve", "times (counter)", "go round"], hint: "回 = one square turning inside another. It also counts occasions: 一回, 二回 = once, twice." },
        { id: "ja-u119l4-kokoroyoi", type: "kanji", front: "快", reading: "kokoroyoi", meaning: "pleasant", example: { jp: "快い風がふいてきたので、まどを開けました。", en: "A pleasant breeze came up, so I opened the window." }, accept: ["comfortable", "agreeable", "refreshing"], hint: "快 = 忄 (heart) + 夬 — the heart clearing. 快い = pleasant, 全快 = a full recovery. Its on-yomi is かい, like 回 and 解." },
        { id: "ja-u119l4-kaku", type: "kanji", front: "格", reading: "kaku", meaning: "status", example: { jp: "この店のほうが格上ですが、ねだんも高いです。", en: "This shop is the classier of the two, but the prices are higher too." }, accept: ["rank", "standard", "character"], hint: "格 = 木 (wood) + 各 — the frame a thing is measured against. 性格 = personality, 合格 = passing an exam." },
        { id: "ja-u119l4-tashika", type: "kanji", front: "確", reading: "tashika", meaning: "certain", example: { jp: "確かめてから答えたのに、まちがっていました。", en: "I made sure before answering, but I was wrong." }, accept: ["sure", "reliable", "definite"], hint: "確 = 石 (stone) — as solid as rock. 確かに = certainly, 明確 = clear-cut. Its on-yomi is かく, like 格." },
        { id: "ja-u119l4-ikkai", type: "vocab", front: "一回", reading: "ikkai", meaning: "once", example: { jp: "一回だけ行ったので、道をおぼえていません。", en: "I only went once, so I don't remember the way." }, drill: { jp: "一回で おぼえました。", en: "I learned it in one go." }, accept: ["one time", "a single time"] },
        { id: "ja-u119l4-meikaku", type: "vocab", front: "明確", reading: "meikaku", meaning: "clear-cut", example: { jp: "明確な答えがなくても、やることは分かりました。", en: "Even without a clear-cut answer, I understood what to do." }, drill: { jp: "明確に こたえます。", en: "I answer clearly." }, accept: ["definite", "explicit", "unambiguous"] },
      ],
    },
  ],
};
