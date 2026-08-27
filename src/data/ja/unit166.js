// Unit 166 — かんじ・わざと しくみ — B2 / JLPT N2
// Strand A. N2 glyphs for skill and system — technique and order, proof and control,
// character and results, founding and belonging. Slot new[64:80] of the deduped N2 list.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards; every compound kanji is taught
// at or before this unit — verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT166 = {
  id: "ja-u166",
  lang: "ja",
  title: "かんじ・わざと しくみ",
  order: 166,
  stage: "b2",
  lessons: [
    {
      id: "ja-u166l1",
      unit: 166,
      lesson: 1,
      title: "Skill and order",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 術 (technique), 準 (standard), 序 (order), 招 (to invite), and the words 技術 and 招待.",
      items: [
        { id: "ja-u166l1-8853", type: "kanji", front: "術", reading: "jutsu", meaning: "technique", example: { jp: "この 工場は 新しい 技術を 取り入れました。", en: "This factory has brought in new technology." }, accept: ["art", "skill", "means"], hint: "術 = a learned skill or art. 技術 = technology, 手術 = surgery, 芸術 = the arts." },
        { id: "ja-u166l1-6e96", type: "kanji", front: "準", reading: "jun", meaning: "standard", example: { jp: "らいしゅうの りょこうの 準備を して います。", en: "I'm preparing for next week's trip." }, accept: ["semi-", "to conform"], hint: "準 = a level to measure against. 準備 = getting ready, 標準 = a standard, 準決勝 = a semi-final." },
        { id: "ja-u166l1-5e8f", type: "kanji", front: "序", reading: "jo", meaning: "order", example: { jp: "この カードを 正しい 順序で ならべて ください。", en: "Please put these cards in the correct order." }, accept: ["sequence", "preface"], hint: "序 = the order things come in. 順序 = sequence, 序文 = a preface, 序列 = ranking." },
        { id: "ja-u166l1-62db", type: "kanji", front: "招", reading: "shō", meaning: "to invite", example: { jp: "たんじょうびに 友だちを たくさん 招きました。", en: "I invited many friends to my birthday." }, accept: ["to beckon", "to bring about"], hint: "招く (maneku) = to beckon or invite. 招待 = an invitation. It can also mean 'to invite trouble'." },
        { id: "ja-u166l1-gijutsu", type: "vocab", front: "技術", reading: "gijutsu", meaning: "technology", example: { jp: "日本の 車の 技術は せかいで 有名です。", en: "Japan's car technology is famous worldwide." }, accept: ["skill", "know-how"] },
        { id: "ja-u166l1-shotai", type: "vocab", front: "招待", reading: "shōtai", meaning: "an invitation", example: { jp: "けっこんしきの 招待を うけました。", en: "I received an invitation to the wedding." }, accept: ["an invite"] },
      ],
    },
    {
      id: "ja-u166l2",
      unit: 166,
      lesson: 2,
      title: "Proof and control",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 承 (to consent), 証 (proof), 織 (to weave), 制 (system), and the words 証明 and 制度.",
      items: [
        { id: "ja-u166l2-627f", type: "kanji", front: "承", reading: "shō", meaning: "to consent", example: { jp: "その けんは、しゃちょうも すでに 承知して います。", en: "The president is already aware of that matter." }, accept: ["to acknowledge", "to hear", "to accept"], hint: "承知 (shōchi) = to know and accept. 承る (uketamawaru) is a very humble 'I hear/receive'." },
        { id: "ja-u166l2-8a3c", type: "kanji", front: "証", reading: "shō", meaning: "proof", example: { jp: "かれが 正しかった ことが、あとで 証明されました。", en: "It was later proved that he had been right." }, accept: ["evidence", "a certificate"], hint: "証 = 言 (words) that 正 (make right/true). 証明 = proof, 学生証 = a student ID, 保証 = a guarantee." },
        { id: "ja-u166l2-7e54", type: "kanji", front: "織", reading: "shoku", meaning: "to weave", example: { jp: "この ぬのは いまも 手で 織られて います。", en: "This cloth is still woven by hand." }, accept: ["to organise (組織)"], hint: "織る (oru) = to weave threads. Combined in 組織 (soshiki) = an organisation — society woven together." },
        { id: "ja-u166l2-5236", type: "kanji", front: "制", reading: "sei", meaning: "system", example: { jp: "この 会社では 新しい 制度が 始まりました。", en: "A new system has started at this company." }, accept: ["control", "to restrain"], hint: "制 = to hold in order. 制度 = a system, 制限 = a restriction, 制服 = a uniform." },
        { id: "ja-u166l2-shomei", type: "vocab", front: "証明", reading: "shōmei", meaning: "proof", example: { jp: "ここに すんで いる ことを 証明する 書るいが いります。", en: "You need a document proving that you live here." }, accept: ["certification", "demonstration"] },
        { id: "ja-u166l2-seido", type: "vocab", front: "制度", reading: "seido", meaning: "a system", example: { jp: "この 国の きょういく制度は 少しずつ 変わって います。", en: "This country's education system is changing little by little." }, accept: ["an institution", "a scheme"] },
      ],
    },
    {
      id: "ja-u166l3",
      unit: 166,
      lesson: 3,
      title: "Character and results",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 勢 (momentum), 性 (nature), 責 (responsibility), 績 (results), and the words 責任 and 成績.",
      items: [
        { id: "ja-u166l3-52e2", type: "kanji", front: "勢", reading: "sei", meaning: "momentum", example: { jp: "川の 水が すごい 勢いで 流れて います。", en: "The river water is flowing with tremendous force." }, accept: ["force", "vigour", "energy"], hint: "勢い (ikioi) = force or momentum. 大勢 (ōzei) = a big crowd, 勢力 = influence/power." },
        { id: "ja-u166l3-6027", type: "kanji", front: "性", reading: "sei", meaning: "nature", example: { jp: "かれは あかるくて やさしい 性格です。", en: "He has a bright and gentle character." }, accept: ["quality", "gender", "-ness"], hint: "性 = the inborn nature of a thing. 性格 = character, 男性/女性 = male/female, 性質 = a property." },
        { id: "ja-u166l3-8cac", type: "kanji", front: "責", reading: "seki", meaning: "responsibility", example: { jp: "自分の しごとには さいごまで 責任を もちます。", en: "I take responsibility for my own work to the very end." }, accept: ["blame", "duty"], hint: "責める (semeru) = to blame. 責任 = responsibility — the duty you are answerable for." },
        { id: "ja-u166l3-7e3e", type: "kanji", front: "績", reading: "seki", meaning: "results", example: { jp: "今学期の 成績は とても よかったです。", en: "This term's grades were very good." }, accept: ["achievement", "merit"], hint: "績 lives almost only in 成績 (grades/results) and 業績 (business performance)." },
        { id: "ja-u166l3-sekinin", type: "vocab", front: "責任", reading: "sekinin", meaning: "responsibility", example: { jp: "この もんだいの 責任は 私に あります。", en: "The responsibility for this problem lies with me." }, accept: ["accountability", "liability"] },
        { id: "ja-u166l3-seiseki", type: "vocab", front: "成績", reading: "seiseki", meaning: "grades", example: { jp: "毎日 勉強して、成績が 上がりました。", en: "I studied every day, and my grades went up." }, accept: ["results", "a record", "marks"] },
      ],
    },
    {
      id: "ja-u166l4",
      unit: 166,
      lesson: 4,
      title: "Founding and belonging",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 設 (to establish), 祖 (ancestor), 素 (element), 属 (to belong), and the words 建設 and 祖父.",
      items: [
        { id: "ja-u166l4-8a2d", type: "kanji", front: "設", reading: "setsu", meaning: "to establish", example: { jp: "駅の 前に 大きな ビルを 建設して います。", en: "They are building a large building in front of the station." }, accept: ["to set up", "to install"], hint: "設ける (mōkeru) = to set up. 建設 = construction, 設備 = facilities, 設計 = a design/plan." },
        { id: "ja-u166l4-7956", type: "kanji", front: "祖", reading: "so", meaning: "ancestor", example: { jp: "祖父は いなかで のんびり くらして います。", en: "My grandfather lives a relaxed life in the countryside." }, accept: ["forefather", "founder"], hint: "祖 = the 示 (altar) radical for worship. 祖父 = grandfather, 祖母 = grandmother, 先祖 = ancestors." },
        { id: "ja-u166l4-7d20", type: "kanji", front: "素", reading: "so", meaning: "element", example: { jp: "この りょうりは 素材の あじを 大切に して います。", en: "This dish makes the most of the flavour of its ingredients." }, accept: ["plain", "base", "the makings"], hint: "素 = the plain, unworked base. 素材 = raw material, 素直 (sunao) = honest/plain, 要素 = an element." },
        { id: "ja-u166l4-5c5e", type: "kanji", front: "属", reading: "zoku", meaning: "to belong", example: { jp: "かれは 大学の サッカーぶに 属して います。", en: "He belongs to the university soccer club." }, accept: ["to be affiliated", "genus"], hint: "属する (zokusuru) = to belong to. 所属 = one's affiliation, 金属 = metal (the 'metal genus')." },
        { id: "ja-u166l4-kensetsu", type: "vocab", front: "建設", reading: "kensetsu", meaning: "construction", example: { jp: "新しい 橋の 建設が やっと 始まりました。", en: "Construction of the new bridge has finally begun." }, accept: ["building", "erection"] },
        { id: "ja-u166l4-sofu", type: "vocab", front: "祖父", reading: "sofu", meaning: "grandfather", example: { jp: "祖父は 若い ころ 先生を して いました。", en: "My grandfather was a teacher when he was young." }, accept: ["one's own grandfather"] },
      ],
    },
  ],
};
