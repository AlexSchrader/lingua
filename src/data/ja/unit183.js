// Unit 183 — ごい・N3・65 ("N3 vocab 65") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (hassha ×2, hanasu ×2, hanareru ×2, hane ×2)
// disambiguated via hints.
export const UNIT183 = {
  id: "ja-u183", lang: "ja", title: "ごい・N3・65", order: 183, stage: "b1",
  lessons: [
    {
      id: "ja-u183l1", unit: 183, lesson: 1, title: "N3 vocab 65·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 畑 (field), 働き (work), 発見 (discovery), 発行 (issue), 発車 (departure), 発射 (firing).",
      items: [
        { id: "ja-u183l1-hatake", type: "vocab", front: "畑", reading: "hatake", meaning: "field", example: { jp: "畑でやさいをそだてます。", en: "I grow vegetables in the field." }, accept: ["patch"] },
        { id: "ja-u183l1-hataraki", type: "vocab", front: "働き", reading: "hataraki", meaning: "work", example: { jp: "あたまの働きがよくなります。", en: "My brain works better." }, accept: ["labor", "function"] },
        { id: "ja-u183l1-hakken", type: "vocab", front: "発見", reading: "hakken", meaning: "discovery", example: { jp: "あたらしいほしを発見しました。", en: "I discovered a new star." }, accept: ["detection", "finding"] },
        { id: "ja-u183l1-hakko", type: "vocab", front: "発行", reading: "hakkō", meaning: "issue", example: { jp: "あたらしいカードを発行します。", en: "They issue a new card." }, accept: ["publication", "issuance"] },
        { id: "ja-u183l1-hassha", type: "vocab", front: "発車", reading: "hassha", meaning: "departure", example: { jp: "でんしゃがもうすぐ発車します。", en: "The train departs soon." }, accept: ["leaving", "starting"], hint: "発車 (はっしゃ) = a vehicle departing; same reading as 発射 (firing)." },
        { id: "ja-u183l1-hassha2", type: "vocab", front: "発射", reading: "hassha", meaning: "firing", example: { jp: "ロケットを発射しました。", en: "They launched the rocket." }, accept: ["shooting", "discharge", "launch"], hint: "発射 (はっしゃ) = firing / launching; same reading as 発車 (departure)." },
      ],
    },
    {
      id: "ja-u183l2", unit: 183, lesson: 2, title: "N3 vocab 65·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 罰する (to punish), 発達 (development), ばったり (by chance), 発展 (development), 発表 (announcement), 発明 (invention).",
      items: [
        { id: "ja-u183l2-bassuru", type: "vocab", front: "罰する", reading: "bassuru", meaning: "to punish", example: { jp: "ルールをやぶったひとを罰します。", en: "They punish the person who broke the rule." }, accept: ["to penalize"] },
        { id: "ja-u183l2-hattatsu", type: "vocab", front: "発達", reading: "hattatsu", meaning: "development", example: { jp: "こどものからだが発達します。", en: "The child's body develops." }, accept: ["growth"], hint: "発達 (はったつ) = growing / maturing (body, skill); cf. 発展 (society advancing)." },
        { id: "ja-u183l2-battari", type: "vocab", front: "ばったり", reading: "battari", meaning: "by chance", example: { jp: "えきでともだちにばったりあいました。", en: "I ran into a friend at the station by chance." }, accept: ["unexpectedly"] },
        { id: "ja-u183l2-hatten", type: "vocab", front: "発展", reading: "hatten", meaning: "development", example: { jp: "まちがおおきく発展しました。", en: "The town developed greatly." }, accept: ["growth", "progress"], hint: "発展 (はってん) = expansion / advancement (city, society); cf. 発達 (body, skill)." },
        { id: "ja-u183l2-happyo", type: "vocab", front: "発表", reading: "happyō", meaning: "announcement", example: { jp: "テストのけっかを発表します。", en: "They announce the test results." }, accept: ["publication", "presentation"] },
        { id: "ja-u183l2-hatsumei", type: "vocab", front: "発明", reading: "hatsumei", meaning: "invention", example: { jp: "でんきはおおきな発明です。", en: "Electricity is a great invention." }, accept: ["innovation"] },
      ],
    },
    {
      id: "ja-u183l3", unit: 183, lesson: 3, title: "N3 vocab 65·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 派手 (showy), 話し合う (to discuss), 離す (to part), 放す (to release), 離れる (to separate), 放れる (to get free).",
      items: [
        { id: "ja-u183l3-hade", type: "vocab", front: "派手", reading: "hade", meaning: "showy", example: { jp: "派手なふくをきています。", en: "She is wearing flashy clothes." }, accept: ["flashy", "gaudy"] },
        { id: "ja-u183l3-hanashiau", type: "vocab", front: "話し合う", reading: "hanashiau", meaning: "to discuss", example: { jp: "みんなでもんだいを話し合います。", en: "We discuss the problem together." }, accept: ["to talk together"] },
        { id: "ja-u183l3-hanasu", type: "vocab", front: "離す", reading: "hanasu", meaning: "to part", example: { jp: "こどものてを離さないでください。", en: "Please do not let go of the child's hand." }, accept: ["to separate", "to let go"], hint: "離す (はなす) = to move apart / let go; same reading as 放す (to set free)." },
        { id: "ja-u183l3-hanasu2", type: "vocab", front: "放す", reading: "hanasu", meaning: "to release", example: { jp: "とりをそらに放します。", en: "I set the bird free into the sky." }, accept: ["to set free", "to let go"], hint: "放す (はなす) = to set free / release; same reading as 離す (to part)." },
        { id: "ja-u183l3-hanareru", type: "vocab", front: "離れる", reading: "hanareru", meaning: "to separate", example: { jp: "ふたりはすこし離れてすわりました。", en: "The two sat a little apart." }, accept: ["to be apart", "to part from"], hint: "離れる (はなれる) = to be/become apart; same reading as 放れる (to break free)." },
        { id: "ja-u183l3-hanareru2", type: "vocab", front: "放れる", reading: "hanareru", meaning: "to get free", example: { jp: "いぬがひもから放れました。", en: "The dog got free from the leash." }, accept: ["to break free", "to leave"], hint: "放れる (はなれる) = to break loose / get free; same reading as 離れる (to be apart)." },
      ],
    },
    {
      id: "ja-u183l4", unit: 183, lesson: 4, title: "N3 vocab 65·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 羽 (wing), 羽根 (feather), 幅 (width), 母親 (mother), 省く (to omit), 場面 (scene).",
      items: [
        { id: "ja-u183l4-hane", type: "vocab", front: "羽", reading: "hane", meaning: "wing", example: { jp: "とりが羽をひろげます。", en: "The bird spreads its wings." }, accept: ["wings"], hint: "羽 (はね) = a bird's wing; same reading as 羽根 (feather)." },
        { id: "ja-u183l4-hane2", type: "vocab", front: "羽根", reading: "hane", meaning: "feather", example: { jp: "しろい羽根がおちています。", en: "A white feather has fallen." }, accept: ["plume"], hint: "羽根 (はね) = a feather / shuttlecock; same reading as 羽 (wing)." },
        { id: "ja-u183l4-haba", type: "vocab", front: "幅", reading: "haba", meaning: "width", example: { jp: "このみちの幅はひろいです。", en: "The width of this road is wide." }, accept: ["breadth"] },
        { id: "ja-u183l4-hahaoya", type: "vocab", front: "母親", reading: "hahaoya", meaning: "mother", example: { jp: "母親はこどもをまもります。", en: "A mother protects her child." }, accept: ["one's mother"] },
        { id: "ja-u183l4-habuku", type: "vocab", front: "省く", reading: "habuku", meaning: "to omit", example: { jp: "むだなじかんを省きます。", en: "I cut out wasted time." }, accept: ["to eliminate", "to cut out"] },
        { id: "ja-u183l4-bamen", type: "vocab", front: "場面", reading: "bamen", meaning: "scene", example: { jp: "この場面はとてもかなしいです。", en: "This scene is very sad." }, accept: ["setting"] },
      ],
    },
  ],
};
