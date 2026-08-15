// Unit 179 — かんきょう・ちきゅう (Environment and the global) — B2 / JLPT N2
// Block-2 house rules are documented in unit174.js.
//
// B1's environment unit (u129) taught the visible damage — おせん, はかい, さいがい.
// B2 goes one level down to the SYSTEM: what circulates, what accumulates, what is
// consumed, and the vocabulary of policy responses that are neither fix nor
// failure — さくげん, よくせい, かんわ, てきおう.
export const UNIT179 = {
  id: "ja-u179",
  lang: "ja",
  title: "かんきょう・ちきゅう",
  order: 179,
  stage: "b2",
  lessons: [
    {
      id: "ja-u179l1",
      unit: 179,
      lesson: 1,
      title: "How the system works",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the earth as a system with things moving through it: せいたいけい じゅんかん たんそ おんしつ すいしつ ちくせき.",
      items: [
        { id: "ja-u179l1-seitaikei", type: "vocab", front: "せいたいけい", reading: "seitaikei", meaning: "an ecosystem", example: { jp: "小さな 生きものが 一つ いなく なるだけで、せいたいけいは 大きく 変わります。", en: "Just one small creature disappearing changes the ecosystem greatly." }, accept: ["ecological system", "the web of life"] },
        { id: "ja-u179l1-junkan", type: "vocab", front: "じゅんかん", reading: "junkan", meaning: "a cycle", example: { jp: "水の じゅんかんを 知ると、雨の 意味が 変わって 見えます。", en: "Once you know the water cycle, rain starts to mean something different." }, accept: ["circulation", "going round", "a loop"] },
        { id: "ja-u179l1-tanso", type: "vocab", front: "たんそ", reading: "tanso", meaning: "carbon", example: { jp: "たんその 量を へらすには、まず 電気の 作り方を 変えます。", en: "To cut carbon you start by changing how electricity is made." }, accept: ["carbon dioxide (in compounds)", "C"] },
        { id: "ja-u179l1-onshitsu", type: "vocab", front: "おんしつ", reading: "onshitsu", meaning: "a greenhouse", example: { jp: "冬でも おんしつの 中は あたたかくて、花が さいて います。", en: "Even in winter it's warm inside the greenhouse and the flowers are out." }, accept: ["hothouse", "glasshouse"], hint: "The everyday sense is the glass building; おんしつこうか (greenhouse effect) is where it turns into climate vocabulary." },
        { id: "ja-u179l1-suishitsu", type: "vocab", front: "すいしつ", reading: "suishitsu", meaning: "water quality", example: { jp: "川の すいしつが よく なって、魚が もどって きました。", en: "The river's water quality improved and the fish came back." }, accept: ["how clean the water is", "quality of water"] },
        { id: "ja-u179l1-chikuseki", type: "vocab", front: "ちくせき", reading: "chikuseki", meaning: "accumulation", example: { jp: "少しずつの ごみが ちくせきして、大きな 山に なりました。", en: "Rubbish built up little by little into a large mound." }, accept: ["build-up", "piling up", "stored amount"] },
      ],
    },
    {
      id: "ja-u179l2",
      unit: 179,
      lesson: 2,
      title: "What is being lost",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what is disappearing and what is being done to hold on to it: ぜつめつ きょうい しょうもう りんぎょう ほぜん はいりょ.",
      items: [
        { id: "ja-u179l2-zetsumetsu", type: "vocab", front: "ぜつめつ", reading: "zetsumetsu", meaning: "extinction", example: { jp: "この 鳥は ぜつめつに 近いと 言われて います。", en: "This bird is said to be close to extinction." }, accept: ["dying out", "wiped out", "extinct"] },
        { id: "ja-u179l2-kyoi", type: "vocab", front: "きょうい", reading: "kyōi", meaning: "a threat", example: { jp: "海の 水が 上がる ことは、この 島には 大きな きょういです。", en: "Rising sea levels are a serious threat to this island." }, accept: ["menace", "danger to", "peril"] },
        { id: "ja-u179l2-shomo", type: "vocab", front: "しょうもう", reading: "shōmō", meaning: "consumption (using up)", example: { jp: "水の しょうもうが 早すぎて、川が あさく なりました。", en: "Water was used up too quickly and the river ran shallow." }, accept: ["depletion", "wear", "expenditure of"], hint: "しょうひ is buying and using; しょうもう is using something UP so there is less of it left." },
        { id: "ja-u179l2-ringyo", type: "vocab", front: "りんぎょう", reading: "ringyō", meaning: "forestry", example: { jp: "この 地方の りんぎょうは、山を 守る 仕事でも あります。", en: "Forestry in this region is also the work of protecting the mountains." }, accept: ["the timber industry", "forest management"] },
        { id: "ja-u179l2-hozen", type: "vocab", front: "ほぜん", reading: "hozen", meaning: "conservation", example: { jp: "ほぜんの ために、この 道は 車が 入れません。", en: "For conservation, cars can't come down this road." }, accept: ["preservation", "keeping it intact", "safeguarding"] },
        { id: "ja-u179l2-hairyo", type: "vocab", front: "はいりょ", reading: "hairyo", meaning: "consideration given", example: { jp: "近くに 住む 人への はいりょが 足りませんでした。", en: "There wasn't enough consideration for the people living nearby." }, accept: ["thoughtfulness", "taking account of", "regard"] },
      ],
    },
    {
      id: "ja-u179l3",
      unit: 179,
      lesson: 3,
      title: "Energy",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about where power comes from and how much of it is wanted: はつでん たいようこう ふうりょく ねんりょう じゅよう さいせい.",
      items: [
        { id: "ja-u179l3-hatsuden", type: "vocab", front: "はつでん", reading: "hatsuden", meaning: "generating power", example: { jp: "この 川の 水で はつでんして、町の 電気を 作って います。", en: "They generate power from this river's water and make the town's electricity." }, accept: ["power generation", "producing electricity"] },
        { id: "ja-u179l3-taiyoko", type: "vocab", front: "たいようこう", reading: "taiyōkō", meaning: "solar power", example: { jp: "屋根に たいようこうを 入れてから、電気だいが 半分に なりました。", en: "Since putting solar panels on the roof, the electricity bill has halved." }, accept: ["sunlight (as energy)", "solar"] },
        { id: "ja-u179l3-furyoku", type: "vocab", front: "ふうりょく", reading: "fūryoku", meaning: "wind power", example: { jp: "海の 近くは 風が 強いので、ふうりょくが よく 使われます。", en: "The wind is strong near the sea, so wind power is used a lot there." }, accept: ["wind energy", "the force of the wind"] },
        { id: "ja-u179l3-nenryo", type: "vocab", front: "ねんりょう", reading: "nenryō", meaning: "fuel", example: { jp: "ねんりょうの ねだんが 上がって、車を 使う 回数を へらしました。", en: "Fuel prices rose, so we cut down how often we use the car." }, accept: ["combustible", "what is burned"] },
        { id: "ja-u179l3-juyo", type: "vocab", front: "じゅよう", reading: "juyō", meaning: "demand", example: { jp: "夏は 電気の じゅようが 一年で いちばん 高く なります。", en: "In summer, demand for electricity is the highest of the year." }, accept: ["need for", "call for", "requirement"] },
        { id: "ja-u179l3-saisei", type: "vocab", front: "さいせい", reading: "saisei", meaning: "renewal", example: { jp: "さいせいできる エネルギーだけで、この 地方の 電気を まかなって います。", en: "This region covers its electricity with renewable energy alone." }, accept: ["regeneration", "renewable", "playing back"] },
      ],
    },
    {
      id: "ja-u179l4",
      unit: 179,
      lesson: 4,
      title: "What gets done about it",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Separate the four things policy can actually do: じぞく さくげん よくせい かんわ てきおう ぶんべつ.",
      items: [
        { id: "ja-u179l4-jizoku", type: "vocab", front: "じぞく", reading: "jizoku", meaning: "keeping something going", example: { jp: "じぞくできない やり方は、早いか おそいか だけの ちがいです。", en: "A method that can't be kept up only differs in how soon it stops." }, accept: ["sustaining", "continuation", "lasting"] },
        { id: "ja-u179l4-sakugen", type: "vocab", front: "さくげん", reading: "sakugen", meaning: "a cut in amount", example: { jp: "ごみの さくげんは、まず 買う ときから 始まります。", en: "Cutting waste starts at the moment you buy." }, accept: ["reduction", "cutting back", "curtailment"] },
        { id: "ja-u179l4-yokusei", type: "vocab", front: "よくせい", reading: "yokusei", meaning: "holding something down", example: { jp: "夜の 電気を よくせいして、朝に 回す ことに しました。", en: "We decided to hold down evening power use and shift it to the morning." }, accept: ["restraint", "curbing", "suppression"], hint: "さくげん cuts the TOTAL; よくせい holds the RATE down without necessarily reducing the whole." },
        { id: "ja-u179l4-kanwa", type: "vocab", front: "かんわ", reading: "kanwa", meaning: "easing", example: { jp: "きそくが かんわされて、店を 開きやすく なりました。", en: "The rules were eased, and it became easier to open a shop." }, accept: ["relaxation", "mitigation", "loosening"] },
        { id: "ja-u179l4-tekio", type: "vocab", front: "てきおう", reading: "tekiō", meaning: "adapting to it", example: { jp: "暑さを 止められないなら、てきおうする しか ありません。", en: "If you can't stop the heat, all that's left is to adapt to it." }, accept: ["adaptation", "fitting oneself to", "adjustment"] },
        { id: "ja-u179l4-bunbetsu", type: "vocab", front: "ぶんべつ", reading: "bunbetsu", meaning: "sorting (waste)", example: { jp: "ごみの ぶんべつは 細かいですが、なれれば かんたんです。", en: "Sorting the rubbish is fiddly, but it's easy once you're used to it." }, accept: ["separating out", "segregation", "classification"] },
      ],
    },
  ],
};
