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
        { id: "ja-u167l1-busshitsu", type: "vocab", front: "ぶっしつ", reading: "busshitsu", meaning: "a substance", example: { jp: "この ぶっしつは 水に とけないので、あつめやすいです。", en: "This substance doesn't dissolve in water, so it's easy to collect." }, drill: { jp: "ぶっしつを しらべます。", en: "We examine the substance." }, accept: ["material", "matter", "a material"], hint: "busshitsu — 物 (thing) + 質 (quality): matter considered as what it is MADE OF. もの is any object; ぶっしつ is the stuff an object consists of, which is why chemistry uses it." },
        { id: "ja-u167l1-genshi", type: "vocab", front: "げんし", reading: "genshi", meaning: "an atom", example: { jp: "げんしは 小さすぎて、ふつうの けんびきょうでは 見えません。", en: "Atoms are too small to see with an ordinary microscope." }, drill: { jp: "げんしが あつまります。", en: "Atoms gather together." }, accept: ["atomic", "an atom", "the atom"], hint: "genshi — 原 (origin) + 子 (child): the original little one. げんし is the atom and ぶんし the molecule it joins to build. げんしりょく is nuclear power." },
        { id: "ja-u167l1-bunshi", type: "vocab", front: "ぶんし", reading: "bunshi", meaning: "a molecule", example: { jp: "水の ぶんしは、げんしが 三つ あつまって できて います。", en: "A water molecule is made of three atoms together." }, drill: { jp: "ぶんしが あつまります。", en: "The molecules gather." }, accept: ["molecular", "a molecule", "the molecule"], hint: "げんし is the single piece; ぶんし is the assembly. 原 = origin, 分 = divide — the naming runs the opposite way to English." },
        { id: "ja-u167l1-saibo", type: "vocab", front: "さいぼう", reading: "saibō", meaning: "a cell", example: { jp: "体の さいぼうは、毎日 少しずつ 入れかわって います。", en: "The body's cells are being replaced a little at a time every day." }, drill: { jp: "さいぼうが ふえます。", en: "The cells multiply." }, accept: ["biological cell", "a cell", "cells"], hint: "saibō — 細 (minute) + 胞 (a sac): a tiny sac. The biological cell only — a prison cell or a phone cell is an entirely different word in Japanese." },
        { id: "ja-u167l1-denshi", type: "vocab", front: "でんし", reading: "denshi", meaning: "electron / electronic", example: { jp: "でんしの きかいは、水に とても よわいです。", en: "Electronic devices are very weak against water." }, drill: { jp: "でんしの きかいが こわれました。", en: "The electronic device broke." }, accept: ["electronics", "e-", "electron"], hint: "denshi — 電 (electricity) + 子 (child): the little one of electricity. As a prefix it means electronic — でんしメール, でんしマネー — and alone it is the physics electron." },
        { id: "ja-u167l1-juryoku", type: "vocab", front: "じゅうりょく", reading: "jūryoku", meaning: "gravity", example: { jp: "じゅうりょくが ない ところでは、水が まるく なります。", en: "Where there's no gravity, water forms into balls." }, drill: { jp: "じゅうりょくが はたらきます。", en: "Gravity acts on it." }, accept: ["gravitational force", "the pull of gravity", "gravitation"], hint: "jūryoku — 重 (heavy) + 力 (force): the force of heaviness. おもい is how heavy a thing feels; じゅうりょく is the reason it feels like anything at all." },
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
        { id: "ja-u167l2-jikkenshitsu", type: "vocab", front: "じっけんしつ", reading: "jikkenshitsu", meaning: "a laboratory", example: { jp: "じっけんしつでは、食べ物を 食べては いけません。", en: "You mustn't eat food in the laboratory." }, drill: { jp: "じっけんしつに 入ります。", en: "I enter the laboratory." }, accept: ["lab", "research room", "a laboratory room"], hint: "jikkenshitsu — じっけん (experiment) + 室 (room). That 室 ending names rooms right through Japanese — きょうしつ, しんしつ. It is the ROOM; the work itself is じっけん." },
        { id: "ja-u167l2-kenbikyo", type: "vocab", front: "けんびきょう", reading: "kenbikyō", meaning: "a microscope", example: { jp: "けんびきょうで 見ると、小さな さいぼうが よく 分かります。", en: "Looked at through a microscope, the small cells are clear." }, drill: { jp: "けんびきょうを 使います。", en: "I use a microscope." }, accept: ["magnifier", "a microscope", "the microscope"], hint: "kenbikyō — 顕 (reveal) + 微 (minute) + 鏡 (lens): a lens that reveals the minute. That 鏡 ending also gives めがね and ぼうえんきょう, the telescope." },
        { id: "ja-u167l2-kansokuki", type: "vocab", front: "かんそくき", reading: "kansokuki", meaning: "an observation instrument", example: { jp: "山の 上の かんそくきが、天気の へんかを 記録して います。", en: "The instrument on the mountain records changes in the weather." }, drill: { jp: "かんそくきを おきました。", en: "We installed an observation instrument." }, accept: ["monitoring device", "sensor", "an instrument"], hint: "kansokuki — かんそく (observation) + 機 (machine). The 機 ending builds machines across the language — せんたくき, かんそうき. It is the device; the activity is かんそく." },
        { id: "ja-u167l2-kagakuhanno", type: "vocab", front: "かがくはんのう", reading: "kagakuhannō", meaning: "a chemical reaction", example: { jp: "二つの ぶっしつを まぜると、かがくはんのうが 起きます。", en: "Mix the two substances and a chemical reaction occurs." }, drill: { jp: "かがくはんのうが 起きました。", en: "A chemical reaction occurred." }, accept: ["chemical change", "a reaction", "a chemical reaction"], hint: "kagakuhannō — 化学 (chemistry) + 反応 (reaction). はんのう alone also covers a person's reaction to news, so the かがく in front is what makes it chemical." },
        { id: "ja-u167l2-hannosokudo", type: "vocab", front: "はんのうそくど", reading: "hannōsokudo", meaning: "reaction speed", example: { jp: "温度が 高いほど、はんのうそくどは 速く なります。", en: "The higher the temperature, the faster the reaction speed." }, drill: { jp: "はんのうそくどが 上がります。", en: "The reaction speed rises." }, accept: ["rate of reaction", "speed of reaction", "how fast it reacts"], hint: "hannōsokudo — 反応 (reaction) + 速度 (speed). そくど is the same word as a car's speed; stacked after はんのう it gives the rate a reaction runs at." },
        { id: "ja-u167l2-gijutsusha", type: "vocab", front: "ぎじゅつしゃ", reading: "gijutsusha", meaning: "an engineer", example: { jp: "ぎじゅつしゃが 来て、きかいを 直して くれました。", en: "An engineer came and fixed the machine for us." }, drill: { jp: "ぎじゅつしゃに なりたいです。", en: "I want to be an engineer." }, accept: ["technician", "technical specialist", "an engineer"], hint: "gijutsusha — ぎじゅつ (technology) + 者 (person). The 者 ending names people by what they do — いしゃ, がくしゃ. It is broader than the English engineer and covers any technical specialist." },
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
        { id: "ja-u167l3-shingijutsu", type: "vocab", front: "しんぎじゅつ", reading: "shingijutsu", meaning: "new technology", example: { jp: "しんぎじゅつの おかげで、しごとが ずいぶん 楽に なりました。", en: "Thanks to the new technology, the work got much easier." }, drill: { jp: "しんぎじゅつを つかいます。", en: "We use the new technology." }, accept: ["innovation", "cutting-edge tech", "new tech"], hint: "shingijutsu — 新 (new) + ぎじゅつ. The 新 prefix attaches freely: しんせいひん, しんせいど. Nothing is special here except that it is one word and takes no の after 新." },
        { id: "ja-u167l3-tokkyo", type: "vocab", front: "とっきょ", reading: "tokkyo", meaning: "a patent", example: { jp: "とっきょを 取ったので、ほかの 会社は 使えません。", en: "We took out a patent, so other companies can't use it." }, drill: { jp: "とっきょを もって います。", en: "We hold a patent." }, accept: ["patent right", "exclusive licence", "a patent"], hint: "tokkyo — 特 (special) + 許 (permission): a special permission. It is the RIGHT, so とっきょを 取る is to obtain one and とっきょしんせい is the application for it." },
        { id: "ja-u167l3-jidoka", type: "vocab", front: "じどうか", reading: "jidōka", meaning: "automation", example: { jp: "じどうかが 進んで、人の しごとが 少なく なりました。", en: "Automation advanced and there was less work for people." }, drill: { jp: "じどうかが 進みました。", en: "Automation advanced." }, accept: ["to automate", "mechanisation", "automating"], hint: "jidōka — じどう (automatic) + 化, the -ification ending. That 化 turns nouns into processes right across the language: こくさいか, でんしか, こうれいか." },
        { id: "ja-u167l3-taikyu", type: "vocab", front: "たいきゅう", reading: "taikyū", meaning: "durability", example: { jp: "ねだんは 高いですが、たいきゅうせいが あるので 長く 使えます。", en: "It's expensive, but it's durable so it lasts a long time." }, drill: { jp: "たいきゅうが あります。", en: "It has durability." }, accept: ["endurance", "hard-wearing", "lasting power"], hint: "taikyū — 耐 (withstand) + 久 (a long time): withstanding time. Nearly always met as たいきゅうせい with the -ness ending, since it names a property rather than a thing." },
        { id: "ja-u167l3-kogaku", type: "vocab", front: "こうがく", reading: "kōgaku", meaning: "engineering", example: { jp: "大学で こうがくを 勉強して、車を 作る 会社に 入りました。", en: "I studied engineering at university and joined a carmaker." }, drill: { jp: "こうがくを べんきょうします。", en: "I study engineering." }, accept: ["technology studies", "applied science", "the study of engineering"], hint: "kōgaku — 工 (craft, industry) + 学 (study): the study of making things work. 理学 is pure science; こうがく applies it. A university's engineering faculty is a こうがくぶ." },
        { id: "ja-u167l3-oyokagaku", type: "vocab", front: "おうようかがく", reading: "ōyōkagaku", meaning: "applied science", example: { jp: "おうようかがくは、りろんを じっさいの ものに して いきます。", en: "Applied science turns theory into actual things." }, drill: { jp: "おうようかがくの 本を 読みます。", en: "I read a book on applied science." }, accept: ["practical science", "applied research", "science put to use"], hint: "ōyōkagaku — おうよう (applied use) + かがく (science), built on the おうよう taught earlier as adapting what you know. Its counterpart きそかがく is the basic research it draws on." },
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
        { id: "ja-u167l4-iden", type: "vocab", front: "いでん", reading: "iden", meaning: "heredity", example: { jp: "目の 色は いでんで 決まる ことが 多いです。", en: "Eye colour is largely determined by heredity." }, drill: { jp: "いでんで 決まります。", en: "It is determined by heredity." }, accept: ["genetics", "inherited", "biological inheritance"], hint: "iden — 遺 (leave behind) + 伝 (transmit): what gets left and passed on. 遺伝子 (idenshi) is the gene itself, so いでん is the process and いでんし the carrier." },
        { id: "ja-u167l4-shinka", type: "vocab", front: "しんか", reading: "shinka", meaning: "evolution", example: { jp: "しんかは 長い 時間を かけて 少しずつ 進みます。", en: "Evolution proceeds little by little over a long time." }, drill: { jp: "しんかが 進みます。", en: "Evolution proceeds." }, accept: ["to evolve", "development over time", "evolving"], hint: "shinka — 進 (advance) + 化 (-ification): becoming advanced. Beware the built-in sense of improvement, which biological evolution does not have — Japanese applies it loosely to gadgets too." },
        { id: "ja-u167l4-kankyofuka", type: "vocab", front: "かんきょうふか", reading: "kankyōfuka", meaning: "environmental load", example: { jp: "かんきょうふかの 少ない 作り方に 変えました。", en: "We changed to a production method with a lower environmental load." }, drill: { jp: "かんきょうふかが 大きいです。", en: "The environmental load is large." }, accept: ["environmental burden", "impact on nature", "load on the environment"], hint: "kankyōfuka — かんきょう (environment) + ふか (a load). ふか is the engineering word for load on a system; after かんきょう it becomes the strain human activity puts on nature." },
        { id: "ja-u167l4-eikyoryoku", type: "vocab", front: "えいきょうりょく", reading: "eikyōryoku", meaning: "influence (power to affect)", example: { jp: "小さな 会社ですが、この 分やでの えいきょうりょくは 大きいです。", en: "It's a small company, but its influence in this field is large." }, drill: { jp: "えいきょうりょくが 強いです。", en: "Its influence is strong." }, accept: ["clout", "reach", "sway"], hint: "eikyōryoku — えいきょう (influence) + りょく (force). えいきょう is the effect something had; えいきょうりょく is the CAPACITY to have one, which a person or a firm can hold in reserve." },
        { id: "ja-u167l4-bunkai2", type: "vocab", front: "ぶんかいせい", reading: "bunkaisei", meaning: "biodegradability", example: { jp: "ぶんかいせいが ある ふくろなら、土に 返ります。", en: "A biodegradable bag returns to the soil." }, drill: { jp: "ぶんかいせいが あります。", en: "It is biodegradable." }, accept: ["breaking down naturally", "decomposability", "ability to break down"], hint: "bunkaisei — ぶんかい (breaking down) + せい (-ness): the property of breaking down. The same ぶんかい taught for taking a machine apart, done here by soil and bacteria instead of hands." },
        { id: "ja-u167l4-shigenjunkan", type: "vocab", front: "しげんじゅんかん", reading: "shigenjunkan", meaning: "resource cycling", example: { jp: "しげんじゅんかんを 考えれば、ごみは ずいぶん へります。", en: "Think about resource cycling and waste falls considerably." }, drill: { jp: "しげんじゅんかんを 考えます。", en: "We think about resource cycling." }, accept: ["recycling loop", "circular use", "cycling of resources"], hint: "shigenjunkan — しげん (resources) + じゅんかん (a cycle), the loop word taught earlier for water and blood. リサイクル is one step of it; しげんじゅんかん is the whole closed loop." },
      ],
    },
  ],
};
