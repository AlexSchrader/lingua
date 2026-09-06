// Unit 167 — かがく・ぎじゅつ (Science and technology) — B2 / JLPT N2
// Strand B. B1's u108 gave the everyday nature words; this is the working vocabulary
// of a lab and a spec sheet — what things are made of, how they are studied, what an
// engineered product is judged on, and how living things change over time.
// Mixed script per the u156 header; all kanji verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT167 = {
  id: "ja-u167",
  lang: "ja",
  title: "かがく・ぎじゅつ",
  order: 167,
  stage: "b2",
  lessons: [
    {
      id: "ja-u167l1",
      unit: 167,
      lesson: 1,
      title: "What things are made of",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the building blocks: ぶっしつ げんし ぶんし さいぼう でんし じゅうりょく.",
      items: [
        { id: "ja-u167l1-busshitsu", type: "vocab", front: "ぶっしつ", reading: "busshitsu", meaning: "a substance", example: { jp: "この ぶっしつは 水に とけないので、あつめやすいです。", en: "This substance doesn't dissolve in water, so it's easy to collect." }, accept: ["material", "matter"] },
        { id: "ja-u167l1-genshi", type: "vocab", front: "げんし", reading: "genshi", meaning: "an atom", example: { jp: "げんしは 小さすぎて、ふつうの けんびきょうでは 見えません。", en: "Atoms are too small to see with an ordinary microscope." }, accept: ["atomic"] },
        { id: "ja-u167l1-bunshi", type: "vocab", front: "ぶんし", reading: "bunshi", meaning: "a molecule", example: { jp: "水の ぶんしは、げんしが 三つ あつまって できて います。", en: "A water molecule is made of three atoms together." }, drill: { jp: "ぶんしが あつまります。", en: "The molecules gather." }, accept: ["molecular"], hint: "げんし is the single piece; ぶんし is the assembly. 原 = origin, 分 = divide — the naming runs the opposite way to English." },
        { id: "ja-u167l1-saibo", type: "vocab", front: "さいぼう", reading: "saibō", meaning: "a cell", example: { jp: "体の さいぼうは、毎日 少しずつ 入れかわって います。", en: "The body's cells are being replaced a little at a time every day." }, accept: ["biological cell"] },
        { id: "ja-u167l1-denshi", type: "vocab", front: "でんし", reading: "denshi", meaning: "electron / electronic", example: { jp: "でんしの きかいは、水に とても よわいです。", en: "Electronic devices are very weak against water." }, accept: ["electronics", "e-"] },
        { id: "ja-u167l1-juryoku", type: "vocab", front: "じゅうりょく", reading: "jūryoku", meaning: "gravity", example: { jp: "じゅうりょくが ない ところでは、水が まるく なります。", en: "Where there's no gravity, water forms into balls." }, accept: ["gravitational force"] },
      ],
    },
    {
      id: "ja-u167l2",
      unit: 167,
      lesson: 2,
      title: "In the laboratory",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how something is studied: じっけんしつ けんびきょう かんそくき かがくはんのう はんのうそくど ぎじゅつしゃ.",
      items: [
        { id: "ja-u167l2-jikkenshitsu", type: "vocab", front: "じっけんしつ", reading: "jikkenshitsu", meaning: "a laboratory", example: { jp: "じっけんしつでは、食べ物を 食べては いけません。", en: "You mustn't eat food in the laboratory." }, accept: ["lab", "research room"] },
        { id: "ja-u167l2-kenbikyo", type: "vocab", front: "けんびきょう", reading: "kenbikyō", meaning: "a microscope", example: { jp: "けんびきょうで 見ると、小さな さいぼうが よく 分かります。", en: "Looked at through a microscope, the small cells are clear." }, accept: ["magnifier"] },
        { id: "ja-u167l2-kansokuki", type: "vocab", front: "かんそくき", reading: "kansokuki", meaning: "an observation instrument", example: { jp: "山の 上の かんそくきが、天気の へんかを 記録して います。", en: "The instrument on the mountain records changes in the weather." }, accept: ["monitoring device", "sensor"] },
        { id: "ja-u167l2-kagakuhanno", type: "vocab", front: "かがくはんのう", reading: "kagakuhannō", meaning: "a chemical reaction", example: { jp: "二つの ぶっしつを まぜると、かがくはんのうが 起きます。", en: "Mix the two substances and a chemical reaction occurs." }, accept: ["chemical change"] },
        { id: "ja-u167l2-hannosokudo", type: "vocab", front: "はんのうそくど", reading: "hannōsokudo", meaning: "reaction speed", example: { jp: "温度が 高いほど、はんのうそくどは 速く なります。", en: "The higher the temperature, the faster the reaction speed." }, accept: ["rate of reaction"] },
        { id: "ja-u167l2-gijutsusha", type: "vocab", front: "ぎじゅつしゃ", reading: "gijutsusha", meaning: "an engineer", example: { jp: "ぎじゅつしゃが 来て、きかいを 直して くれました。", en: "An engineer came and fixed the machine for us." }, accept: ["technician", "technical specialist"] },
      ],
    },
    {
      id: "ja-u167l3",
      unit: 167,
      lesson: 3,
      title: "Judging a product",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what an engineered thing is good or bad at: しんぎじゅつ とっきょ じどうか たいきゅう こうがく おうようかがく.",
      items: [
        { id: "ja-u167l3-shingijutsu", type: "vocab", front: "しんぎじゅつ", reading: "shingijutsu", meaning: "new technology", example: { jp: "しんぎじゅつの おかげで、しごとが ずいぶん 楽に なりました。", en: "Thanks to the new technology, the work got much easier." }, accept: ["innovation", "cutting-edge tech"] },
        { id: "ja-u167l3-tokkyo", type: "vocab", front: "とっきょ", reading: "tokkyo", meaning: "a patent", example: { jp: "とっきょを 取ったので、ほかの 会社は 使えません。", en: "We took out a patent, so other companies can't use it." }, accept: ["patent right", "exclusive licence"] },
        { id: "ja-u167l3-jidoka", type: "vocab", front: "じどうか", reading: "jidōka", meaning: "automation", example: { jp: "じどうかが 進んで、人の しごとが 少なく なりました。", en: "Automation advanced and there was less work for people." }, accept: ["to automate", "mechanisation"] },
        { id: "ja-u167l3-taikyu", type: "vocab", front: "たいきゅう", reading: "taikyū", meaning: "durability", example: { jp: "ねだんは 高いですが、たいきゅうせいが あるので 長く 使えます。", en: "It's expensive, but it's durable so it lasts a long time." }, accept: ["endurance", "hard-wearing"] },
        { id: "ja-u167l3-kogaku", type: "vocab", front: "こうがく", reading: "kōgaku", meaning: "engineering", example: { jp: "大学で こうがくを 勉強して、車を 作る 会社に 入りました。", en: "I studied engineering at university and joined a carmaker." }, drill: { jp: "こうがくを べんきょうします。", en: "I study engineering." }, accept: ["technology studies", "applied science"] },
        { id: "ja-u167l3-oyokagaku", type: "vocab", front: "おうようかがく", reading: "ōyōkagaku", meaning: "applied science", example: { jp: "おうようかがくは、りろんを じっさいの ものに して いきます。", en: "Applied science turns theory into actual things." }, accept: ["practical science"] },
      ],
    },
    {
      id: "ja-u167l4",
      unit: 167,
      lesson: 4,
      title: "Life and change",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about inheritance, change and impact: いでん しんか かんきょうふか えいきょうりょく ぶんかいせい しげんじゅんかん.",
      items: [
        { id: "ja-u167l4-iden", type: "vocab", front: "いでん", reading: "iden", meaning: "heredity", example: { jp: "目の 色は いでんで 決まる ことが 多いです。", en: "Eye colour is largely determined by heredity." }, accept: ["genetics", "inherited"] },
        { id: "ja-u167l4-shinka", type: "vocab", front: "しんか", reading: "shinka", meaning: "evolution", example: { jp: "しんかは 長い 時間を かけて 少しずつ 進みます。", en: "Evolution proceeds little by little over a long time." }, accept: ["to evolve", "development over time"] },
        { id: "ja-u167l4-kankyofuka", type: "vocab", front: "かんきょうふか", reading: "kankyōfuka", meaning: "environmental load", example: { jp: "かんきょうふかの 少ない 作り方に 変えました。", en: "We changed to a production method with a lower environmental load." }, accept: ["environmental burden", "impact on nature"] },
        { id: "ja-u167l4-eikyoryoku", type: "vocab", front: "えいきょうりょく", reading: "eikyōryoku", meaning: "influence (power to affect)", example: { jp: "小さな 会社ですが、この 分やでの えいきょうりょくは 大きいです。", en: "It's a small company, but its influence in this field is large." }, accept: ["clout", "reach", "sway"] },
        { id: "ja-u167l4-bunkai2", type: "vocab", front: "ぶんかいせい", reading: "bunkaisei", meaning: "biodegradability", example: { jp: "ぶんかいせいが ある ふくろなら、土に 返ります。", en: "A biodegradable bag returns to the soil." }, accept: ["breaking down naturally", "decomposability"] },
        { id: "ja-u167l4-shigenjunkan", type: "vocab", front: "しげんじゅんかん", reading: "shigenjunkan", meaning: "resource cycling", example: { jp: "しげんじゅんかんを 考えれば、ごみは ずいぶん へります。", en: "Think about resource cycling and waste falls considerably." }, accept: ["recycling loop", "circular use"] },
      ],
    },
  ],
};
