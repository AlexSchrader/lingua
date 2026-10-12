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
      canDo: "Describe the earth as a system with things moving through it: せいたいけい りゅうしゅつ たんそ おんしつ すいしつ きしょう.",
      items: [
        { id: "ja-u179l1-seitaikei", type: "vocab", front: "せいたいけい", reading: "seitaikei", meaning: "an ecosystem", example: { jp: "小さな 生きものが 一つ いなく なるだけで、せいたいけいは 大きく 変わります。", en: "Just one small creature disappearing changes the ecosystem greatly." }, drill: { jp: "せいたいけいが 変わりました。", en: "The ecosystem changed." }, accept: ["ecological system", "the web of life", "the ecosystem"], hint: "seitaikei — 生態 (mode of life) + 系 (a system): living things plus their surroundings treated as one working whole. The 系 ending builds systems — たいようけい is the solar system." },
        { id: "ja-u179l1-ryushutsu", type: "vocab", front: "りゅうしゅつ", reading: "ryūshutsu", meaning: "flowing out", example: { jp: "土の りゅうしゅつを 止めるために、木を 植えました。", en: "Trees were planted to stop the soil flowing away." }, drill: { jp: "りゅうしゅつを とめます。", en: "We stop the outflow." }, accept: ["runoff", "leaking out", "outflow"], hint: "ryūshutsu — 流 (flow) + 出 (out): flowing out and being lost. Soil, oil, capital, personal data. It is always a loss, so the verb you want beside it is 止める." },
        { id: "ja-u179l1-tanso", type: "vocab", front: "たんそ", reading: "tanso", meaning: "carbon", example: { jp: "たんその 量を へらすには、まず 電気の 作り方を 変えます。", en: "To cut carbon you start by changing how electricity is made." }, drill: { jp: "たんそを へらします。", en: "We cut carbon." }, accept: ["carbon dioxide (in compounds)", "C", "the element carbon"], hint: "tanso — 炭 (charcoal) + 素 (an element): the element carbon. In climate talk it stands in for 二酸化炭素, carbon dioxide, and だっ炭素, decarbonisation, is the form in the news." },
        { id: "ja-u179l1-onshitsu", type: "vocab", front: "おんしつ", reading: "onshitsu", meaning: "a greenhouse", example: { jp: "冬でも おんしつの 中は あたたかくて、花が さいて います。", en: "Even in winter it's warm inside the greenhouse and the flowers are out." }, drill: { jp: "おんしつの 中は あたたかいです。", en: "It is warm inside the greenhouse." }, accept: ["hothouse", "glasshouse", "a greenhouse"], hint: "The everyday sense is the glass building; おんしつこうか (greenhouse effect) is where it turns into climate vocabulary." },
        { id: "ja-u179l1-suishitsu", type: "vocab", front: "すいしつ", reading: "suishitsu", meaning: "water quality", example: { jp: "川の すいしつが よく なって、魚が もどって きました。", en: "The river's water quality improved and the fish came back." }, drill: { jp: "すいしつが よく なりました。", en: "The water quality improved." }, accept: ["how clean the water is", "quality of water", "the water quality"], hint: "suishitsu — 水 (water) + 質 (quality): how good the water is. That 質 ending measures quality — たいしつ for a constitution, ひんしつ for goods. Compare すいりょう, how MUCH water there is." },
        { id: "ja-u179l1-kisho", type: "vocab", front: "きしょう", reading: "kishō", meaning: "weather conditions", example: { jp: "きしょうの 記ろくが 百年 分 のこって います。", en: "A hundred years of weather records survive." }, drill: { jp: "きしょうが 変わりました。", en: "The weather conditions changed." }, accept: ["meteorological data", "the climate readings", "atmospheric conditions"], hint: "kishō — 気 (air) + 象 (a phenomenon): what the atmosphere is doing. てんき is today's weather as you feel it; きしょう is the measured phenomenon, which is why the agency is the きしょうちょう." },
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
        { id: "ja-u179l2-zetsumetsu", type: "vocab", front: "ぜつめつ", reading: "zetsumetsu", meaning: "extinction", example: { jp: "この 鳥は ぜつめつに 近いと 言われて います。", en: "This bird is said to be close to extinction." }, drill: { jp: "ぜつめつが 近いです。", en: "Extinction is close." }, accept: ["dying out", "wiped out", "extinct"], hint: "zetsumetsu — 絶 (cut off) + 滅 (perish): the line ends. Used of species and of languages. ぜつめつきぐしゅ is the official endangered-species term." },
        { id: "ja-u179l2-kyoi", type: "vocab", front: "きょうい", reading: "kyōi", meaning: "a threat", example: { jp: "海の 水が 上がる ことは、この 島には 大きな きょういです。", en: "Rising sea levels are a serious threat to this island." }, drill: { jp: "きょういに なって います。", en: "It has become a threat." }, accept: ["menace", "danger to", "peril"], hint: "kyōi — 脅 (threaten) + 威 (force): force that threatens. It names the thing posing the danger, so a rising sea IS a きょうい; the feeling it gives you is ふあん." },
        { id: "ja-u179l2-shomo", type: "vocab", front: "しょうもう", reading: "shōmō", meaning: "consumption (using up)", example: { jp: "水の しょうもうが 早すぎて、川が あさく なりました。", en: "Water was used up too quickly and the river ran shallow." }, drill: { jp: "しょうもうが はやいです。", en: "The consumption is fast." }, accept: ["depletion", "wear", "expenditure of"], hint: "しょうひ is buying and using; しょうもう is using something UP so there is less of it left." },
        { id: "ja-u179l2-ringyo", type: "vocab", front: "りんぎょう", reading: "ringyō", meaning: "forestry", example: { jp: "この 地方の りんぎょうは、山を 守る 仕事でも あります。", en: "Forestry in this region is also the work of protecting the mountains." }, drill: { jp: "りんぎょうで はたらいて います。", en: "He works in forestry." }, accept: ["the timber industry", "forest management", "the forest industry"], hint: "ringyō — 林 (woodland) + 業 (an industry): the timber industry. That 業 ending names industries — のうぎょう farming, ぎょぎょう fishing, こうぎょう manufacturing." },
        { id: "ja-u179l2-hozen", type: "vocab", front: "ほぜん", reading: "hozen", meaning: "conservation", example: { jp: "ほぜんの ために、この 道は 車が 入れません。", en: "For conservation, cars can't come down this road." }, drill: { jp: "ほぜんの ために します。", en: "We do it for conservation." }, accept: ["preservation", "keeping it intact", "safeguarding"], hint: "hozen — 保 (keep) + 全 (whole): keeping a thing entire. ほご protects something from harm; ほぜん keeps a whole system intact, which is why it attaches to かんきょう." },
        { id: "ja-u179l2-hairyo", type: "vocab", front: "はいりょ", reading: "hairyo", meaning: "consideration given", example: { jp: "近くに 住む 人への はいりょが 足りませんでした。", en: "There wasn't enough consideration for the people living nearby." }, drill: { jp: "はいりょが 足りません。", en: "There is not enough consideration." }, accept: ["thoughtfulness", "taking account of", "regard"], hint: "hairyo — 配 (distribute) + 慮 (think over): thinking ahead on someone else's behalf and acting on it quietly. Being anticipatory is what sets it apart from やさしさ." },
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
        { id: "ja-u179l3-hatsuden", type: "vocab", front: "はつでん", reading: "hatsuden", meaning: "generating power", example: { jp: "この 川の 水で はつでんして、町の 電気を 作って います。", en: "They generate power from this river's water and make the town's electricity." }, drill: { jp: "はつでんを して います。", en: "We are generating power." }, accept: ["power generation", "producing electricity", "making electricity"], hint: "hatsuden — 発 (issue forth) + 電 (electricity): making electricity, and はつでんしょ is the power station. That 発 prefix means generating — はっせい, はっこう." },
        { id: "ja-u179l3-taiyoko", type: "vocab", front: "たいようこう", reading: "taiyōkō", meaning: "solar power", example: { jp: "屋根に たいようこうを 入れてから、電気だいが 半分に なりました。", en: "Since putting solar panels on the roof, the electricity bill has halved." }, drill: { jp: "たいようこうを 使います。", en: "We use solar power." }, accept: ["sunlight (as energy)", "solar", "solar energy"], hint: "taiyōkō — 太陽 (the sun) + 光 (light): sunlight as an energy source. The panels are たいようこうパネル, and たいようねつ with 熱 instead is solar HEAT, a different technology." },
        { id: "ja-u179l3-furyoku", type: "vocab", front: "ふうりょく", reading: "fūryoku", meaning: "wind power", example: { jp: "海の 近くは 風が 強いので、ふうりょくが よく 使われます。", en: "The wind is strong near the sea, so wind power is used a lot there." }, drill: { jp: "ふうりょくが 強いです。", en: "The wind force is strong." }, accept: ["wind energy", "the force of the wind", "the strength of the wind"], hint: "fūryoku — 風 (wind) + 力 (force), with two uses: wind strength on a forecast, and wind power as a source, ふうりょくはつでん. The same りょく as in じゅうりょく." },
        { id: "ja-u179l3-nenryo", type: "vocab", front: "ねんりょう", reading: "nenryō", meaning: "fuel", example: { jp: "ねんりょうの ねだんが 上がって、車を 使う 回数を へらしました。", en: "Fuel prices rose, so we cut down how often we use the car." }, drill: { jp: "ねんりょうが 足りません。", en: "There is not enough fuel." }, accept: ["combustible", "what is burned", "what is burned for energy"], hint: "nenryō — 燃 (burn) + 料 (material): material for burning, the 料 ending again as in ひりょう. It covers petrol, wood and uranium alike, so use rather than substance defines it." },
        { id: "ja-u179l3-juyo", type: "vocab", front: "じゅよう", reading: "juyō", meaning: "demand", example: { jp: "夏は 電気の じゅようが 一年で いちばん 高く なります。", en: "In summer, demand for electricity is the highest of the year." }, drill: { jp: "じゅようが 高く なります。", en: "Demand will rise." }, accept: ["need for", "call for", "requirement"], hint: "juyō — 需 (require) + 要 (need): what the market wants, and the partner of きょうきゅう taught earlier. Careful — it is not じゅうよう 重要, important, which is one mora longer." },
        { id: "ja-u179l3-saisei", type: "vocab", front: "さいせい", reading: "saisei", meaning: "renewal", example: { jp: "さいせいできる エネルギーだけで、この 地方の 電気を まかなって います。", en: "This region covers its electricity with renewable energy alone." }, drill: { jp: "さいせいが できます。", en: "It can be renewed." }, accept: ["regeneration", "renewable", "playing back"], hint: "saisei — 再 (again) + 生 (live): living again. Three everyday senses: renewable energy, recycling a material, and pressing play on a recording." },
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
        { id: "ja-u179l4-jizoku", type: "vocab", front: "じぞく", reading: "jizoku", meaning: "keeping something going", example: { jp: "じぞくできない やり方は、早いか おそいか だけの ちがいです。", en: "A method that can't be kept up only differs in how soon it stops." }, drill: { jp: "じぞくが むずかしいです。", en: "Keeping it going is difficult." }, accept: ["sustaining", "continuation", "lasting"], hint: "jizoku — 持 (hold) + 続 (continue): holding on and continuing. じぞくかのう, sustainable, is the form that carries it in policy writing — literally able to be kept going." },
        { id: "ja-u179l4-sakugen", type: "vocab", front: "さくげん", reading: "sakugen", meaning: "a cut in amount", example: { jp: "ごみの さくげんは、まず 買う ときから 始まります。", en: "Cutting waste starts at the moment you buy." }, drill: { jp: "さくげんを 決めました。", en: "We decided on a cut." }, accept: ["reduction", "cutting back", "curtailment"], hint: "sakugen — 削 (shave off) + 減 (reduce): shaving an amount down deliberately. へる simply happens; さくげん is a decision, usually about cost, waste or staff." },
        { id: "ja-u179l4-yokusei", type: "vocab", front: "よくせい", reading: "yokusei", meaning: "holding something down", example: { jp: "夜の 電気を よくせいして、朝に 回す ことに しました。", en: "We decided to hold down evening power use and shift it to the morning." }, drill: { jp: "よくせいを します。", en: "We hold it down." }, accept: ["restraint", "curbing", "suppression"], hint: "さくげん cuts the TOTAL; よくせい holds the RATE down without necessarily reducing the whole." },
        { id: "ja-u179l4-kanwa", type: "vocab", front: "かんわ", reading: "kanwa", meaning: "easing", example: { jp: "きそくが かんわされて、店を 開きやすく なりました。", en: "The rules were eased, and it became easier to open a shop." }, drill: { jp: "かんわが 決まりました。", en: "An easing was decided." }, accept: ["relaxation", "mitigation", "loosening"], hint: "kanwa — 緩 (loose) + 和 (soften): loosening what was tight. きせいかんわ, deregulation, is the phrase it lives inside. Its opposite is 強化, tightening." },
        { id: "ja-u179l4-tekio", type: "vocab", front: "てきおう", reading: "tekiō", meaning: "adapting to it", example: { jp: "暑さを 止められないなら、てきおうする しか ありません。", en: "If you can't stop the heat, all that's left is to adapt to it." }, drill: { jp: "てきおうが ひつようです。", en: "Adaptation is necessary." }, accept: ["adaptation", "fitting oneself to", "adjustment"], hint: "tekiō — 適 (suitable) + 応 (respond): responding in a way that fits. Of organisms to a climate and of people to a new job. YOU change, not the situation, which is this card's point." },
        { id: "ja-u179l4-bunbetsu", type: "vocab", front: "ぶんべつ", reading: "bunbetsu", meaning: "sorting (waste)", example: { jp: "ごみの ぶんべつは 細かいですが、なれれば かんたんです。", en: "Sorting the rubbish is fiddly, but it's easy once you're used to it." }, drill: { jp: "ぶんべつが 細かいです。", en: "The sorting is fiddly." }, accept: ["separating out", "segregation", "classification"], hint: "bunbetsu — 分 (divide) + 別 (distinguish): dividing by kind. In Japan it means household waste separation specifically, and the categories differ by じちたい, which is why nobody agrees on them." },
      ],
    },
  ],
};
