// Unit 37 — かんじ・しごと (Work & commerce kanji) — A2 / JLPT N4
// Consolidated kanji unit (category: work & commerce kanji). type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT37 = {
  id: "ja-u37",
  lang: "ja",
  title: "かんじ・しごと",
  order: 37,
  stage: "a2",
  lessons: [
    {
      id: "ja-u37l1",
      unit: 37,
      lesson: 1,
      title: "Commerce kanji 1",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the commerce kanji: 売 (sell), 借 (borrow), 貸 (lend), 品 (goods), 料 (fee).",
      items: [
        { id: "ja-u37l1-uru", type: "kanji", front: "売", reading: "uru", meaning: "sell", example: { jp: "これを売ります。", en: "I sell this." }, accept: ["sell","selling"], hint: "売 = sell (うる). 士 (samurai) over a shop counter — goods going out. Contrast 買 (buy)." },
        { id: "ja-u37l1-kariru", type: "kanji", front: "借", reading: "kariru", meaning: "borrow", example: { jp: "本を借ります。", en: "I borrow a book." }, accept: ["borrow","rent"], hint: "借 = borrow (かりる). 亻 (person) taking something on loan." },
        { id: "ja-u37l1-kasu", type: "kanji", front: "貸", reading: "kasu", meaning: "lend", example: { jp: "お金を貸します。", en: "I lend money." }, accept: ["lend","loan"], hint: "貸 = lend (かす). 貝 (shell = money) at the bottom — money going out to someone." },
        { id: "ja-u37l1-shina", type: "kanji", front: "品", reading: "shina", meaning: "goods", example: { jp: "この品はいいです。", en: "This article is good." }, accept: ["article","product","item"], hint: "品 = goods / article (しな). Three 口 (mouths/boxes) stacked — a pile of wares." },
        { id: "ja-u37l1-ryo", type: "kanji", front: "料", reading: "ryō", meaning: "fee", example: { jp: "料金をはらいます。", en: "I pay the fee." }, accept: ["charge","materials"], hint: "料 = fee / materials (りょう). 米 (rice) + 斗 (measure) — measuring out what's owed. 料理 = cooking." },
      ],
    },
    {
      id: "ja-u37l2",
      unit: 37,
      lesson: 2,
      title: "Commerce kanji 2",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read 計 (measure/plan), 質 (quality), 銀 (silver), 仕 (serve/do), 業 (business).",
      items: [
        { id: "ja-u37l2-kei", type: "kanji", front: "計", reading: "kei", meaning: "plan", example: { jp: "計画を立てます。", en: "I make a plan." }, accept: ["measure","total"], hint: "計 = plan / measure (けい). 言 (words) + 十 (ten) — counting things up. 計画 = a plan." },
        { id: "ja-u37l2-shitsu", type: "kanji", front: "質", reading: "shitsu", meaning: "quality", example: { jp: "この品は質がいいです。", en: "This article's quality is good." }, accept: ["nature","substance"], hint: "質 = quality / nature (しつ). 質問 = a question (asking after the substance of a thing)." },
        { id: "ja-u37l2-gin", type: "kanji", front: "銀", reading: "gin", meaning: "silver", example: { jp: "銀行に行きます。", en: "I go to the bank." }, accept: ["bank"], hint: "銀 = silver (ぎん). 金 (metal) radical + 艮. 銀行 = bank (a 'silver shop')." },
        { id: "ja-u37l2-shi", type: "kanji", front: "仕", reading: "shi", meaning: "serve", example: { jp: "毎日仕事をします。", en: "I work every day." }, accept: ["do","work"], hint: "仕 = serve / do (し). 亻 (person) + 士 (officer) — someone in service. 仕事 = work / a job." },
        { id: "ja-u37l2-gyo", type: "kanji", front: "業", reading: "gyō", meaning: "business", example: { jp: "授業に出ます。", en: "I attend the class." }, accept: ["industry","work"], hint: "業 = business / industry (ぎょう). 授業 = a class / lesson; 工業 = industry." },
      ],
    },
    {
      id: "ja-u37l3",
      unit: 37,
      lesson: 3,
      title: "Work kanji",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the work kanji: 工 (craft), 建 (build), 勉 (effort), 事 (matter), 員 (member).",
      items: [
        { id: "ja-u37l3-ko", type: "kanji", front: "工", reading: "kō", meaning: "craft", example: { jp: "工場ではたらきます。", en: "I work at the factory." }, accept: ["construction","industry"], hint: "工 = craft / construction (こう). A carpenter's ruler. 工場 = factory; 工業 = industry." },
        { id: "ja-u37l3-tateru", type: "kanji", front: "建", reading: "tateru", meaning: "build", example: { jp: "家を建てます。", en: "I build a house." }, accept: ["construct","erect"], hint: "建 = build (たてる). 廴 (stride) + 聿 (writing brush) — laying out and raising a structure." },
        { id: "ja-u37l3-ben", type: "kanji", front: "勉", reading: "ben", meaning: "effort", example: { jp: "日本語を勉強します。", en: "I study Japanese." }, accept: ["diligence","study"], hint: "勉 = effort / diligence (べん). 力 (power) at the bottom. 勉強 = study (pushing yourself)." },
        { id: "ja-u37l3-koto", type: "kanji", front: "事", reading: "koto", meaning: "matter", example: { jp: "その事を知っています。", en: "I know about that matter." }, accept: ["thing","affair"], hint: "事 = matter / thing (こと). An abstract 'thing' or affair. 仕事 = work; 大事 = important." },
        { id: "ja-u37l3-in", type: "kanji", front: "員", reading: "in", meaning: "member", example: { jp: "店員に聞きます。", en: "I ask the shop clerk." }, accept: ["staff","personnel"], hint: "員 = member / staff (いん). 店員 = shop clerk; 会社員 = company employee. 口 (mouth) + 貝 (shell)." },
      ],
    },
  ],
};
