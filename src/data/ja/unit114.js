// Unit 114 — ちゅうしょう・がいねん ("Abstract ideas") — B1 / JLPT N3
// A2's u75 covers the first abstract nouns — けっか, りゆう, もくてき, じょうけん. This
// unit is the vocabulary for talking about *ideas themselves*: what a thing
// fundamentally is (ほんしつ), what it is made of (ようそ, こうぞう), the difference
// between fact and opinion (きゃっかん / しゅかん), and how to take an argument apart
// (ぶんせき, ろんり, ていぎ). It is the hardest unit in the block by design — B1's
// topics stop being picturable, and this is where that starts.
export const UNIT114 = {
  id: "ja-u114",
  lang: "ja",
  title: "ちゅうしょう・がいねん",
  order: 114,
  stage: "b1",
  lessons: [
    {
      id: "ja-u114l1",
      unit: 114,
      lesson: 1,
      title: "Wholes and parts",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a thing and its parts: がいねん ほんしつ ようそ たいしょう ぜんたい ぶぶん.",
      items: [
        { id: "ja-u114l1-gainen", type: "vocab", front: "がいねん", reading: "gainen", meaning: "concept", example: { jp: "その国では時間のがいねんが少しちがうそうです。", en: "They say the concept of time is a little different in that country." }, accept: ["notion", "idea", "conception"], hint: "概念 = 概 (general) + 念 (idea): the general idea of a thing, apart from any example of it." },
        { id: "ja-u114l1-honshitsu", type: "vocab", front: "ほんしつ", reading: "honshitsu", meaning: "essence", example: { jp: "ほんしつを見ないで話しても、けつろんは出ません。", en: "If we talk without looking at the essence of it, no conclusion will come." }, accept: ["true nature", "the heart of it", "substance"], hint: "本質 = 本 (origin) + 質 (nature). ほんしつてき = essential, fundamental. What remains when you strip the surface away." },
        { id: "ja-u114l1-yoso", type: "vocab", front: "ようそ", reading: "yōso", meaning: "element", example: { jp: "せいこうにはいくつかのようそがひつようです。", en: "Success requires several elements." }, accept: ["factor", "component", "ingredient"], hint: "要素 = 要 (essential) + 素 (raw material): one of the parts a thing is made of. よういん (u101) is a *cause*; ようそ is a *component*." },
        { id: "ja-u114l1-taisho", type: "vocab", front: "たいしょう", reading: "taishō", meaning: "the subject", example: { jp: "このサービスのたいしょうは、学生と六十さい以上の人です。", en: "This service is aimed at students and people over sixty." }, accept: ["target", "object", "scope"], hint: "対象 = 対 (facing) + 象 (figure): who or what something is aimed at. たいしょうがい = outside the scope, a phrase on every form." },
        { id: "ja-u114l1-zentai", type: "vocab", front: "ぜんたい", reading: "zentai", meaning: "the whole", example: { jp: "ぶぶんだけ見ると、ぜんたいがわからなくなります。", en: "If you look only at the parts, you lose sight of the whole." }, accept: ["entirety", "overall", "the total"], hint: "全体 = 全 (all) + 体 (body). ぜんたいてきに = on the whole. Its natural partner is ぶぶん." },
        { id: "ja-u114l1-bubun", type: "vocab", front: "ぶぶん", reading: "bubun", meaning: "part", example: { jp: "わからないぶぶんだけ、もう一どせつめいしてください。", en: "Please explain again just the part I don't understand." }, accept: ["portion", "section", "the bit"], hint: "部分 = 部 (section) + 分 (division). ぶぶんてき = partial. ぜんたい ⇄ ぶぶん is a fixed pair, like 'whole and part'." },
      ],
    },
    {
      id: "ja-u114l2",
      unit: 114,
      lesson: 2,
      title: "How something is built",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe structure and criteria: きじゅん かんてん しくみ こうぞう ろんり ていぎ.",
      items: [
        { id: "ja-u114l2-kijun", type: "vocab", front: "きじゅん", reading: "kijun", meaning: "criterion", example: { jp: "えらぶきじゅんがはっきりしないと、こうへいになりません。", en: "Unless the selection criteria are clear, it won't be fair." }, accept: ["standard", "benchmark", "basis"], hint: "基準 = 基 (base) + 準 (level). The line you measure against. きじゅんをみたす = to meet the standard." },
        { id: "ja-u114l2-kanten", type: "vocab", front: "かんてん", reading: "kanten", meaning: "viewpoint", example: { jp: "かんきょうのかんてんから見ると、この方法はよくありません。", en: "Seen from an environmental viewpoint, this method isn't good." }, accept: ["perspective", "angle", "standpoint"], hint: "観点 = 観 (view) + 点 (point). ～のかんてんから = 'from the standpoint of ～'. More analytical than みかた (u99)." },
        { id: "ja-u114l2-shikumi", type: "vocab", front: "しくみ", reading: "shikumi", meaning: "mechanism", example: { jp: "この きかいのしくみがわかれば、じぶんでなおせます。", en: "If you understand how this machine works, you can fix it yourself." }, accept: ["how it works", "system", "structure"], hint: "仕組み = how the pieces work together. Used for machines, societies and schemes alike — a wonderfully general word." },
        { id: "ja-u114l2-kozo", type: "vocab", front: "こうぞう", reading: "kōzō", meaning: "structure", example: { jp: "この本のこうぞうはかんたんで、どこからでも読めます。", en: "This book's structure is simple, so you can read it from anywhere." }, accept: ["construction", "framework", "make-up"], hint: "構造 = 構 (construct) + 造 (build). The static shape of a thing; しくみ is how it *moves*." },
        { id: "ja-u114l2-ronri", type: "vocab", front: "ろんり", reading: "ronri", meaning: "logic", example: { jp: "ろんりはただしいですが、きもちがついていきません。", en: "The logic is correct, but my feelings don't follow it." }, accept: ["reasoning", "rationale"], hint: "論理 = 論 (argument) + 理 (reason). ろんりてき = logical. Don't confuse with りろん (theory), which reverses the same two kanji." },
        { id: "ja-u114l2-teigi", type: "vocab", front: "ていぎ", reading: "teigi", meaning: "definition", example: { jp: "ことばのていぎがちがうと、話がかみ合いません。", en: "If our definitions of the word differ, the conversation won't connect." }, accept: ["to define", "meaning"], hint: "定義 = 定 (fix) + 義 (meaning): pinning a meaning down. ていぎします = to define." },
      ],
    },
    {
      id: "ja-u114l3",
      unit: 114,
      lesson: 3,
      title: "Objective and subjective",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Separate fact from opinion: きゃっかん しゅかん ぐたいてき ちゅうしょう せいしつ かち.",
      items: [
        { id: "ja-u114l3-kyakkan", type: "vocab", front: "きゃっかん", reading: "kyakkan", meaning: "objectivity", example: { jp: "きゃっかんてきなデータがないと、しんじてもらえません。", en: "Without objective data, people won't believe you." }, accept: ["objective", "impartial"], hint: "客観 = 客 (guest) + 観 (view): seeing it as an outsider would. きゃっかんてき = objective." },
        { id: "ja-u114l3-shukan", type: "vocab", front: "しゅかん", reading: "shukan", meaning: "subjectivity", example: { jp: "それはしゅかんてきないけんで、じじつではありません。", en: "That's a subjective opinion, not a fact." }, accept: ["subjective", "personal view"], hint: "主観 = 主 (self) + 観 (view) — the exact mirror of きゃっかん. Japanese builds the pair from 主 vs 客, host vs guest." },
        { id: "ja-u114l3-gutaiteki", type: "vocab", front: "ぐたいてき", reading: "gutaiteki", meaning: "concrete", example: { jp: "ぐたいてきな れいがあると、とてもわかりやすいです。", en: "When there's a concrete example, it's very easy to understand." }, accept: ["specific", "definite", "tangible"], hint: "具体的 = 具体 (concrete form) + 的. ぐたいてきに言うと = 'to put it concretely' — the phrase that rescues a vague explanation." },
        { id: "ja-u114l3-chusho", type: "vocab", front: "ちゅうしょう", reading: "chūshō", meaning: "abstraction", example: { jp: "ちゅうしょうてきな話がつづいて、少しつかれました。", en: "The talk stayed abstract for a long time, and I got a bit tired." }, accept: ["abstract", "theoretical"], hint: "抽象 = 抽 (extract) + 象 (figure): the shape pulled out of the examples. ちゅうしょうてき ⇄ ぐたいてき." },
        { id: "ja-u114l3-seishitsu", type: "vocab", front: "せいしつ", reading: "seishitsu", meaning: "nature", example: { jp: "水のせいしつをしらべるじっけんを しました。", en: "We did an experiment investigating the properties of water." }, accept: ["property", "characteristic", "disposition"], hint: "性質 = 性 (nature) + 質 (quality). Used for materials and for people's dispositions — おだやかなせいしつ." },
        { id: "ja-u114l3-kachi", type: "vocab", front: "かち", reading: "kachi", meaning: "value", example: { jp: "この本は古いですが、読むかちがあります。", en: "This book is old, but it's worth reading." }, accept: ["worth", "merit"], hint: "価値 = 価 (price) + 値 (value). ～かちがある = 'is worth ～ing', one of the most useful patterns at this level." },
      ],
    },
    {
      id: "ja-u114l4",
      unit: 114,
      lesson: 4,
      title: "Taking an idea apart",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Analyse and frame an idea: ぶんせき いぎ はんい りろん がいよう そくめん.",
      items: [
        { id: "ja-u114l4-bunseki", type: "vocab", front: "ぶんせき", reading: "bunseki", meaning: "analysis", example: { jp: "データをぶんせきしてから、あたらしいけいかくを立てました。", en: "We analysed the data and then drew up a new plan." }, accept: ["to analyse", "breakdown", "examination"], hint: "分析 = 分 (divide) + 析 (split): taking something apart to see it. ぶんせきします = to analyse." },
        { id: "ja-u114l4-igi", type: "vocab", front: "いぎ", reading: "igi", meaning: "significance", example: { jp: "この けいけんのいぎは、あとになってわかりました。", en: "The significance of this experience only became clear later." }, accept: ["meaning", "importance", "point"], hint: "意義 = 意 (meaning) + 義 (righteousness): meaning that *matters*. いみ is what a word denotes; いぎ is why something is worth doing." },
        { id: "ja-u114l4-hani", type: "vocab", front: "はんい", reading: "hani", meaning: "scope", example: { jp: "しけんのはんいが広くて、何から勉強するかまよいます。", en: "The exam's scope is wide, so I'm unsure what to study first." }, accept: ["range", "extent", "coverage"], hint: "範囲 = 範 (model) + 囲 (enclose): the fence around what counts. しけんのはんい = the exam syllabus." },
        { id: "ja-u114l4-riron", type: "vocab", front: "りろん", reading: "riron", meaning: "theory", example: { jp: "りろんはわかりましたが、じっさいにやるのはむずかしいです。", en: "I understood the theory, but actually doing it is difficult." }, accept: ["hypothesis", "principles"], hint: "理論 = 理 (reason) + 論 (argument) — the same two kanji as ろんり, in the other order, with a different meaning. Read carefully." },
        { id: "ja-u114l4-gaiyo", type: "vocab", front: "がいよう", reading: "gaiyō", meaning: "outline", example: { jp: "まずがいようをせつめいしてから、しょうさいに入ります。", en: "I'll explain the outline first, then go into the details." }, accept: ["summary", "overview", "the gist"], hint: "概要 = 概 (general) + 要 (essential). がいよう ⇄ しょうさい (u111) is the standard 'overview vs details' pairing in a document." },
        { id: "ja-u114l4-sokumen", type: "vocab", front: "そくめん", reading: "sokumen", meaning: "aspect", example: { jp: "かれにはやさしいそくめんもあることが、はたらいてわかりました。", en: "Working with him, I found he has a kind side too." }, accept: ["side", "facet", "angle"], hint: "側面 = 側 (side) + 面 (face). One face of something many-sided — used for arguments and for people's characters." },
      ],
    },
  ],
};
