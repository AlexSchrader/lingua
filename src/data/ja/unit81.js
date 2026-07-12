// Unit 81 — かんじ・そのた ("Kanji — injury, conflict, arts & change") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// Final N3 kanji unit — remaining common glyphs, some hooking onto known vocab:
// 痛い→いたい, 犯罪→はんざい, 踊る→おどります… KanjiVG strokes required (KANJI_N3).
// Naturalness → native review.
export const UNIT81 = {
  id: "ja-u81", lang: "ja", title: "かんじ・そのた", order: 81, stage: "b1",
  lessons: [
    {
      id: "ja-u81l1", unit: 81, lesson: 1, title: "Injury & illness", cefr: "B1", dominantMode: "recall",
      canDo: "Read illness kanji: 痛 傷 患 診 賞 罰.",
      items: [
        { id: "ja-u81l1-itai", type: "kanji", front: "痛", reading: "itai", meaning: "pain / hurt", example: { jp: "頭が痛いです。", en: "My head hurts." }, accept: ["ache", "sore"], hint: "痛 = pain / hurt. 痛い (いたい). 疒 (sickness) radical." },
        { id: "ja-u81l1-kizu", type: "kanji", front: "傷", reading: "kizu", meaning: "wound / injury", example: { jp: "手に傷があります。", en: "I have a cut on my hand." }, accept: ["cut", "scratch"], hint: "傷 = wound / injury. 傷 (きず). In 傷口 (きずぐち, a cut). 亻 radical." },
        { id: "ja-u81l1-kan", type: "kanji", front: "患", reading: "kan", meaning: "afflicted / patient", example: { jp: "びょういんの患者です。", en: "It's a hospital patient." }, accept: ["suffer", "ill"], hint: "患 = afflicted / patient. In 患者 (かんじゃ, patient). 心 (heart) at the bottom." },
        { id: "ja-u81l1-shin", type: "kanji", front: "診", reading: "shin", meaning: "examine (medically)", example: { jp: "いしゃに診てもらいます。", en: "I get examined by a doctor." }, accept: ["diagnose"], hint: "診 = examine (medically). 診る (みる) = to examine. In 診察 (しんさつ, medical exam). 言 radical." },
        { id: "ja-u81l1-sho", type: "kanji", front: "賞", reading: "shō", meaning: "prize / award", example: { jp: "賞をもらいます。", en: "I receive a prize." }, accept: ["reward", "praise"], hint: "賞 = prize / award. In 賞金 (しょうきん, prize money), 賞品 (prize). 貝 (money) at the bottom." },
        { id: "ja-u81l1-batsu", type: "kanji", front: "罰", reading: "batsu", meaning: "punishment", example: { jp: "ルールをやぶると罰があります。", en: "There's a penalty for breaking the rules." }, accept: ["penalty"], hint: "罰 = punishment. In 罰 (ばつ, penalty), 罰金 (ばっきん, fine). ⇄ 賞." },
      ],
    },
    {
      id: "ja-u81l2", unit: 81, lesson: 2, title: "Conflict & society", cefr: "B1", dominantMode: "recall",
      canDo: "Read conflict kanji: 争 戦 敵 逃 犯 盗.",
      items: [
        { id: "ja-u81l2-arasou", type: "kanji", front: "争", reading: "sō", meaning: "dispute / compete", example: { jp: "きょうだいで争います。", en: "The siblings fight." }, accept: ["quarrel", "struggle"], hint: "争 = dispute / compete. 争う (あらそう). In 戦争 (せんそう, war), 競争 (きょうそう, competition)." },
        { id: "ja-u81l2-tatakau", type: "kanji", front: "戦", reading: "tatakau", meaning: "war / fight", example: { jp: "びょうきと戦います。", en: "I fight against illness." }, accept: ["battle", "combat"], hint: "戦 = war / fight. 戦う (たたかう). In 戦争 (せんそう, war), 試合 (a match)." },
        { id: "ja-u81l2-teki", type: "kanji", front: "敵", reading: "teki", meaning: "enemy", example: { jp: "敵にまけません。", en: "I won't lose to the enemy." }, accept: ["rival", "opponent"], hint: "敵 = enemy. 敵 (てき). In 無敵 (むてき, invincible). ⇄ 味方 (ally)." },
        { id: "ja-u81l2-nigeru", type: "kanji", front: "逃", reading: "nigeru", meaning: "escape / flee", example: { jp: "あぶないから逃げます。", en: "It's dangerous, so I flee." }, accept: ["run away"], hint: "逃 = escape / flee. 逃げる (にげる). ⻌ (movement) radical." },
        { id: "ja-u81l2-okasu", type: "kanji", front: "犯", reading: "okasu", meaning: "commit (a crime)", example: { jp: "犯罪はいけません。", en: "Crime is wrong." }, accept: ["offend", "violate"], hint: "犯 = commit (a crime). In 犯罪 (はんざい, crime), 犯人 (はんにん, culprit). ⺨ radical." },
        { id: "ja-u81l2-nusumu", type: "kanji", front: "盗", reading: "nusumu", meaning: "steal", example: { jp: "おかねを盗まれました。", en: "My money was stolen." }, accept: ["rob", "theft"], hint: "盗 = steal. 盗む (ぬすむ). In 盗難 (とうなん, theft). 皿 (dish) at the bottom." },
      ],
    },
    {
      id: "ja-u81l3", unit: 81, lesson: 3, title: "Arts & hobbies", cefr: "B1", dominantMode: "recall",
      canDo: "Read art kanji: 芸 描 踊 塗 積 込.",
      items: [
        { id: "ja-u81l3-gei", type: "kanji", front: "芸", reading: "gei", meaning: "art / craft", example: { jp: "でんとう芸術がすきです。", en: "I like traditional arts." }, accept: ["performance", "skill"], hint: "芸 = art / craft. In 芸術 (げいじゅつ, art), 芸人 (げいにん, entertainer). ⺾ on top." },
        { id: "ja-u81l3-egaku", type: "kanji", front: "描", reading: "egaku", meaning: "draw / depict", example: { jp: "えを描きます。", en: "I draw a picture." }, accept: ["sketch", "portray"], hint: "描 = draw / depict. 描く (えがく / かく). 扌 (hand) radical." },
        { id: "ja-u81l3-odoru", type: "kanji", front: "踊", reading: "odoru", meaning: "dance", example: { jp: "みんなで踊ります。", en: "Everyone dances." }, accept: ["dancing"], hint: "踊 = dance. 踊る (おどる). In 踊り (おどり, a dance). 足 (foot) radical." },
        { id: "ja-u81l3-nuru", type: "kanji", front: "塗", reading: "nuru", meaning: "paint / spread on", example: { jp: "かべを白く塗ります。", en: "I paint the wall white." }, accept: ["coat", "smear"], hint: "塗 = paint / spread on. 塗る (ぬる). 土 (earth) at the bottom." },
        { id: "ja-u81l3-tsumu", type: "kanji", front: "積", reading: "tsumu", meaning: "pile up / accumulate", example: { jp: "にもつを積みます。", en: "I pile up the luggage." }, accept: ["load", "stack"], hint: "積 = pile up / accumulate. 積む (つむ). In 面積 (めんせき, area). 禾 radical." },
        { id: "ja-u81l3-komu", type: "kanji", front: "込", reading: "komu", meaning: "be crowded / into", example: { jp: "でんしゃが込みます。", en: "The train gets crowded." }, accept: ["packed", "include"], hint: "込 = crowded / into. 込む (こむ). In 申し込む (もうしこむ, apply). ⻌ radical." },
      ],
    },
    {
      id: "ja-u81l4", unit: 81, lesson: 4, title: "Physical change", cefr: "B1", dominantMode: "recall",
      canDo: "Read change kanji: 燃 沈 浮 溶 乾 沸.",
      items: [
        { id: "ja-u81l4-moeru", type: "kanji", front: "燃", reading: "moeru", meaning: "burn", example: { jp: "紙がよく燃えます。", en: "Paper burns easily." }, accept: ["blaze", "combust"], hint: "燃 = burn. 燃える (もえる). In 燃料 (ねんりょう, fuel). 火 (fire) radical." },
        { id: "ja-u81l4-shizumu", type: "kanji", front: "沈", reading: "shizumu", meaning: "sink", example: { jp: "たいようが海に沈みます。", en: "The sun sinks into the sea." }, accept: ["submerge", "depressed"], hint: "沈 = sink. 沈む (しずむ). ⇄ 浮く. 氵 (water) radical." },
        { id: "ja-u81l4-uku", type: "kanji", front: "浮", reading: "uku", meaning: "float", example: { jp: "ボートが水に浮きます。", en: "The boat floats on the water." }, accept: ["rise to the surface"], hint: "浮 = float. 浮く (うく). ⇄ 沈む. 氵 (water) radical." },
        { id: "ja-u81l4-tokeru", type: "kanji", front: "溶", reading: "tokeru", meaning: "dissolve / melt", example: { jp: "さとうが水に溶けます。", en: "Sugar dissolves in water." }, accept: ["thaw"], hint: "溶 = dissolve / melt. 溶ける (とける). 氵 (water) radical." },
        { id: "ja-u81l4-kawaku", type: "kanji", front: "乾", reading: "kawaku", meaning: "dry", example: { jp: "せんたくものが乾きます。", en: "The laundry dries." }, accept: ["parched"], hint: "乾 = dry. 乾く (かわく). In 乾杯 (かんぱい, a toast). ⇄ 濡れる." },
        { id: "ja-u81l4-waku", type: "kanji", front: "沸", reading: "waku", meaning: "boil", example: { jp: "おゆが沸きます。", en: "The water boils." }, accept: ["seethe"], hint: "沸 = boil. 沸く (わく) = to boil (intransitive). In 沸騰 (ふっとう, boiling). 氵 (water) radical." },
      ],
    },
  ],
};
