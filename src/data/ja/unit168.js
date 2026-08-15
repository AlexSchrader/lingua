// Unit 168 — れきし・ぶんか (History and culture) — B2 / JLPT N2
// Strand B. The vocabulary for talking about the past as a subject: how time is
// divided into periods, what survives from them, what a people keeps and passes on,
// and how belief and thought are described from the outside.
// Mixed script per the u156 header; all kanji verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT168 = {
  id: "ja-u168",
  lang: "ja",
  title: "れきし・ぶんか",
  order: 168,
  stage: "b2",
  lessons: [
    {
      id: "ja-u168l1",
      unit: 168,
      lesson: 1,
      title: "Dividing up the past",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place something in a period: こだい ちゅうせい きんだい げんだい いせき ゆらい.",
      items: [
        { id: "ja-u168l1-kodai", type: "vocab", front: "こだい", reading: "kodai", meaning: "antiquity", example: { jp: "こだいの 人も、今の 人と 同じ ことで なやんで いました。", en: "People in antiquity worried about the same things we do." }, accept: ["ancient times", "the ancient world"] },
        { id: "ja-u168l1-chusei", type: "vocab", front: "ちゅうせい", reading: "chūsei", meaning: "the middle ages", example: { jp: "この しろは ちゅうせいに 建てられました。", en: "This castle was built in the middle ages." }, accept: ["medieval period"] },
        { id: "ja-u168l1-kindai", type: "vocab", front: "きんだい", reading: "kindai", meaning: "the modern era", example: { jp: "きんだいに なって、学校が 国じゅうに できました。", en: "In the modern era, schools appeared throughout the country." }, accept: ["modern times", "modernity"], hint: "きんだい is the era that began with industry and the nation-state; げんだい is now, the era you are living in. History books use both, and never as synonyms." },
        { id: "ja-u168l1-gendai", type: "vocab", front: "げんだい", reading: "gendai", meaning: "the present age", example: { jp: "げんだいの 生活は べんりですが、いそがしすぎます。", en: "Life in the present age is convenient but far too busy." }, accept: ["contemporary", "today's world"] },
        { id: "ja-u168l1-iseki", type: "vocab", front: "いせき", reading: "iseki", meaning: "ruins", example: { jp: "畑の 下から 古い いせきが 出て きました。", en: "Old ruins turned up beneath the field." }, accept: ["archaeological site", "remains"] },
        { id: "ja-u168l1-yurai", type: "vocab", front: "ゆらい", reading: "yurai", meaning: "origin", example: { jp: "この まつりの ゆらいは、千年 前に あります。", en: "This festival's origin lies a thousand years back." }, accept: ["derivation", "how it came about", "provenance"] },
      ],
    },
    {
      id: "ja-u168l2",
      unit: 168,
      lesson: 2,
      title: "What gets passed on",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about inheritance and custom: けいしょう ふうしゅう ふっこう こだわり きょうゆう すたれる.",
      items: [
        { id: "ja-u168l2-keisho", type: "vocab", front: "けいしょう", reading: "keishō", meaning: "handing down", example: { jp: "この わざを けいしょうする 人が、もう 少ししか いません。", en: "There are only a few people left to carry this craft on." }, accept: ["succession", "inheriting a tradition"] },
        { id: "ja-u168l2-fushu", type: "vocab", front: "ふうしゅう", reading: "fūshū", meaning: "a custom", example: { jp: "その ふうしゅうは、この 地いきにしか のこって いません。", en: "That custom survives only in this village." }, accept: ["usage", "folk practice", "convention"] },
        { id: "ja-u168l2-fukko", type: "vocab", front: "ふっこう", reading: "fukkō", meaning: "revival", example: { jp: "町の ふっこうには、十年 かかりました。", en: "The town's revival took ten years." }, accept: ["reconstruction", "recovery", "rebuilding"] },
        { id: "ja-u168l2-kodawari", type: "vocab", front: "こだわり", reading: "kodawari", meaning: "an insistence on detail", example: { jp: "その 店の こだわりは、水の えらび方に あります。", en: "That shop's particular care shows in how it chooses its water." }, accept: ["particular care", "fussiness", "commitment to detail"], hint: "こだわり is the good kind of stubbornness — a craftsman's refusal to cut a corner. As a verb こだわる can still be negative: fixating." },
        { id: "ja-u168l2-kyoyu", type: "vocab", front: "きょうゆう", reading: "kyōyū", meaning: "holding in common", example: { jp: "この 土地は 町の みんなで きょうゆうして います。", en: "This land is held in common by the whole village." }, accept: ["shared ownership", "to share"] },
        { id: "ja-u168l2-sutareru", type: "vocab", front: "すたれる", reading: "sutareru", meaning: "to fall out of use", example: { jp: "べんりな ものが 出ると、古い やり方は すたれます。", en: "When something convenient appears, the old way falls out of use." }, accept: ["to die out", "to become obsolete"] },
      ],
    },
    {
      id: "ja-u168l3",
      unit: 168,
      lesson: 3,
      title: "Belief and thought",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe belief systems from the outside: しそう しゅうきょう しんこう ぎしき せいいき よそもの.",
      items: [
        { id: "ja-u168l3-shiso", type: "vocab", front: "しそう", reading: "shisō", meaning: "a body of thought", example: { jp: "その しそうは、あとの 時代に 大きな えいきょうを あたえました。", en: "That body of thought had a great influence on later ages." }, accept: ["ideology", "philosophy", "thinking"] },
        { id: "ja-u168l3-shukyo", type: "vocab", front: "しゅうきょう", reading: "shūkyō", meaning: "religion", example: { jp: "国に よって、しゅうきょうと せいじの きょりは ちがいます。", en: "The distance between religion and politics differs by country." }, accept: ["faith", "religious tradition"] },
        { id: "ja-u168l3-shinko", type: "vocab", front: "しんこう", reading: "shinkō", meaning: "religious belief", example: { jp: "山への しんこうは、この 地いきで 今も 生きて います。", en: "Belief in the mountain is still alive in this region." }, accept: ["devotion", "faith in something"], hint: "しゅうきょう is the institution; しんこう is what a person actually holds. Someone can have しんこう with no しゅうきょう." },
        { id: "ja-u168l3-gishiki", type: "vocab", front: "ぎしき", reading: "gishiki", meaning: "a ceremony", example: { jp: "その ぎしきは 年に 一度だけ 行われます。", en: "That ceremony is held only once a year." }, accept: ["rite", "ritual", "formal observance"] },
        { id: "ja-u168l3-seiiki", type: "vocab", front: "せいいき", reading: "seiiki", meaning: "sacred ground", example: { jp: "ここは せいいきですから、しずかに して ください。", en: "This is sacred ground, so please be quiet." }, accept: ["sanctuary", "holy place"] },
        { id: "ja-u168l3-yosomono", type: "vocab", front: "よそもの", reading: "yosomono", meaning: "an outsider", example: { jp: "よそものの 目から 見ると、その ふうしゅうは ふしぎです。", en: "Seen through an outsider's eyes, that custom is strange." }, accept: ["stranger", "incomer", "not from here"], hint: "よそもの is specifically someone from OUTSIDE this place — a village word, and not a warm one." },
      ],
    },
    {
      id: "ja-u168l4",
      unit: 168,
      lesson: 4,
      title: "Writing history",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how the past is recorded and argued over: しりょうかん かんてい つたえ ぎゃくてん かいしゃく ものがたり.",
      items: [
        { id: "ja-u168l4-shiryokan", type: "vocab", front: "しりょうかん", reading: "shiryōkan", meaning: "an archive", example: { jp: "町の しりょうかんに、百年 前の 新聞が あります。", en: "The town archive holds newspapers from a hundred years ago." }, accept: ["records office", "reference library"] },
        { id: "ja-u168l4-kantei", type: "vocab", front: "かんてい", reading: "kantei", meaning: "expert appraisal", example: { jp: "かんていの けっか、その 手紙は にせものだと 分かりました。", en: "Expert appraisal showed that the letter was a fake." }, accept: ["authentication", "expert judgement", "assessment"], hint: "かんてい is a specialist deciding whether a thing is genuine — a painting, a signature, a document. It is a verdict on an OBJECT, not on an argument." },
        { id: "ja-u168l4-tsutae", type: "vocab", front: "つたえ", reading: "tsutae", meaning: "a handed-down account", example: { jp: "この 地いきの つたえでは、湖の 底に 町が あるそうです。", en: "According to this village's lore, there's a town at the bottom of the lake." }, accept: ["legend", "oral tradition", "lore"] },
        { id: "ja-u168l4-gyakuten", type: "vocab", front: "ぎゃくてん", reading: "gyakuten", meaning: "a reversal", example: { jp: "新しい しりょうで、これまでの 考えが ぎゃくてんしました。", en: "New materials reversed what had been believed until then." }, accept: ["turnaround", "overturning", "flip"] },
        { id: "ja-u168l4-kaishaku", type: "vocab", front: "かいしゃく", reading: "kaishaku", meaning: "interpretation", example: { jp: "同じ しりょうでも、かいしゃくは 人に よって ちがいます。", en: "Even with the same materials, interpretation differs from person to person." }, accept: ["reading of it", "to construe"] },
        { id: "ja-u168l4-monogatari", type: "vocab", front: "ものがたり", reading: "monogatari", meaning: "a narrative", example: { jp: "れきしを 一つの ものがたりに すると、こぼれる ことも 多いです。", en: "Turn history into a single narrative and much gets left out." }, accept: ["tale", "story", "account"] },
      ],
    },
  ],
};
