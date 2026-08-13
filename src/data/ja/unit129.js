// JA Unit 129 — しぜん・かんきょう (Environment and place) — B1 / JLPT N3
// Block-2 house rules are documented in unit118.js (plain-form verb headwords).
//
// The scaffold slot is "Environment and place", which is two things; the unit takes
// both rather than picking one, and orders them so they connect: the land you have
// → what is damaging it → what protects it → what gets built on it.
export const UNIT129 = {
  id: "ja-u129",
  lang: "ja",
  title: "しぜん・かんきょう",
  order: 129,
  stage: "b1",
  lessons: [
    {
      id: "ja-u129l1",
      unit: 129,
      lesson: 1,
      title: "Land and climate",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe the land and climate of a region, and how far away it is: ちけい とち きこう たいき ちほう きょり.",
      items: [
        { id: "ja-u129l1-chikei", type: "vocab", front: "ちけい", reading: "chikei", meaning: "terrain", example: { jp: "このあたりはちけいがふくざつなので、みちがわかりにくいです。", en: "The terrain around here is complicated, so the roads are hard to follow." }, accept: ["landform", "topography", "the lie of the land"] },
        { id: "ja-u129l1-tochi", type: "vocab", front: "とち", reading: "tochi", meaning: "land", example: { jp: "このとちはひろいですが、いえはたてられません。", en: "This land is large, but you can't build a house on it." }, accept: ["plot of land", "a piece of land", "ground"] },
        { id: "ja-u129l1-kiko", type: "vocab", front: "きこう", reading: "kikō", meaning: "climate", example: { jp: "きこうがあたたかいので、ふゆでもはながさきます。", en: "The climate is warm, so flowers bloom even in winter." }, accept: ["weather patterns", "the climate"] },
        { id: "ja-u129l1-taiki", type: "vocab", front: "たいき", reading: "taiki", meaning: "the atmosphere", example: { jp: "たいきのおせんがひどいので、まちのそらはいつもしろくみえます。", en: "The atmospheric pollution is bad, so the town sky always looks white." }, accept: ["the air", "air"] },
        { id: "ja-u129l1-chiho", type: "vocab", front: "ちほう", reading: "chihō", meaning: "region", example: { jp: "このちほうはゆきがおおいので、ふゆはたいへんです。", en: "This region gets a lot of snow, so winter is hard." }, accept: ["district", "the provinces", "area"] },
        { id: "ja-u129l1-kyori", type: "vocab", front: "きょり", reading: "kyori", meaning: "distance", example: { jp: "えきまでのきょりはみじかいですが、さかがきついです。", en: "The distance to the station is short, but the hill is steep." }, accept: ["range", "how far"] },
      ],
    },
    {
      id: "ja-u129l2",
      unit: 129,
      lesson: 2,
      title: "What is going wrong",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about pollution, warming, waste and what is given off: おせん おんだんか はいき はかい はいしゅつ リサイクル.",
      items: [
        { id: "ja-u129l2-osen", type: "vocab", front: "おせん", reading: "osen", meaning: "pollution", example: { jp: "かわのおせんがひどかったので、さかながいなくなりました。", en: "The pollution in the river was bad, so the fish disappeared." }, accept: ["contamination", "polluting"] },
        { id: "ja-u129l2-ondanka", type: "vocab", front: "おんだんか", reading: "ondanka", meaning: "global warming", example: { jp: "おんだんかがすすんでいるので、ふゆもあまりさむくありません。", en: "Global warming is advancing, so the winters aren't very cold either." }, accept: ["warming", "climate warming"] },
        { id: "ja-u129l2-haiki", type: "vocab", front: "はいき", reading: "haiki", meaning: "disposal", example: { jp: "ふるいパソコンのはいきはめんどうですが、すてかたはきまっています。", en: "Disposing of an old computer is a hassle, but how to throw it out is set." }, accept: ["scrapping", "discarding", "waste disposal"] },
        { id: "ja-u129l2-hakai", type: "vocab", front: "はかい", reading: "hakai", meaning: "destruction", example: { jp: "しぜんのはかいはすぐですが、なおすにはひゃくねんかかります。", en: "Destroying nature is quick, but repairing it takes a hundred years." }, accept: ["ruining", "wrecking", "damage"] },
                { id: "ja-u129l2-haishutsu", type: "vocab", front: "はいしゅつ", reading: "haishutsu", meaning: "emissions", example: { jp: "くるまのはいしゅつをへらすために、じてんしゃでかよっています。", en: "To cut vehicle emissions, I commute by bicycle." }, accept: ["giving off", "discharge", "putting out"] },
        { id: "ja-u129l2-risaikuru", type: "vocab", front: "リサイクル", reading: "risaikuru", meaning: "recycling", example: { jp: "リサイクルをすれば、ごみがすくなくなります。", en: "If you recycle, there is less rubbish." }, accept: ["recycle", "reusing"] },
      ],
    },
    {
      id: "ja-u129l3",
      unit: 129,
      lesson: 3,
      title: "Protecting it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about protecting land and people, including in a disaster: ほご そだつ のうぎょう さいがい ぼうさい ひなん.",
      items: [
        { id: "ja-u129l3-hogo", type: "vocab", front: "ほご", reading: "hogo", meaning: "protection", example: { jp: "とりのほごがはじまったので、かずがふえてきました。", en: "Protection of the birds started, so their numbers have been rising." }, accept: ["conservation", "safeguarding", "preservation"] },
        { id: "ja-u129l3-sodatsu", type: "vocab", front: "そだつ", reading: "sodatsu", meaning: "grow up", example: { jp: "このやさいはみずがすくなくてもそだちますが、さむさによわいです。", en: "This vegetable grows even with little water, but it's weak against cold." }, accept: ["to be raised", "grow", "be brought up"] },
        { id: "ja-u129l3-nogyo", type: "vocab", front: "のうぎょう", reading: "nōgyō", meaning: "agriculture", example: { jp: "このちほうののうぎょうはゆうめいですが、わかいひとがすくないです。", en: "This region's agriculture is famous, but there are few young people." }, accept: ["farming", "the farming industry"] },
        { id: "ja-u129l3-saigai", type: "vocab", front: "さいがい", reading: "saigai", meaning: "disaster", example: { jp: "さいがいのあとはみずがたりないので、はやくじゅんびします。", en: "After a disaster there isn't enough water, so we prepare early." }, accept: ["calamity", "natural disaster"] },
        { id: "ja-u129l3-bosai", type: "vocab", front: "ぼうさい", reading: "bōsai", meaning: "disaster preparedness", example: { jp: "ぼうさいのれんしゅうはめんどうですが、いちねんにいちどはします。", en: "Disaster drills are a hassle, but we do one once a year." }, accept: ["disaster prevention", "emergency preparedness"] },
        { id: "ja-u129l3-hinan", type: "vocab", front: "ひなん", reading: "hinan", meaning: "evacuation", example: { jp: "ひなんのばしょをかくにんしてから、ねました。", en: "I checked the evacuation site, and then went to bed." }, accept: ["taking shelter", "evacuating", "refuge"] },
      ],
    },
    {
      id: "ja-u129l4",
      unit: 129,
      lesson: 4,
      title: "What gets built",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about development and what is around a place: かいはつ けんせつ しせつ しゅうへん ふきん きぼ.",
      items: [
        { id: "ja-u129l4-kaihatsu", type: "vocab", front: "かいはつ", reading: "kaihatsu", meaning: "development", example: { jp: "えきまえのかいはつがはじまったので、みせがふえました。", en: "Development in front of the station began, so there are more shops." }, accept: ["developing", "redevelopment"] },
        { id: "ja-u129l4-kensetsu", type: "vocab", front: "けんせつ", reading: "kensetsu", meaning: "construction", example: { jp: "はしのけんせつはおわりましたが、まだとおれません。", en: "Construction of the bridge is finished, but you still can't cross it." }, accept: ["building", "erecting"] },
        { id: "ja-u129l4-shisetsu", type: "vocab", front: "しせつ", reading: "shisetsu", meaning: "facility", example: { jp: "あたらしいしせつはきれいですが、ばしょがふべんです。", en: "The new facility is nice, but the location is inconvenient." }, accept: ["facilities", "institution", "amenity"] },
        { id: "ja-u129l4-shuhen", type: "vocab", front: "しゅうへん", reading: "shūhen", meaning: "surrounding area", example: { jp: "えきのしゅうへんはにぎやかですが、すこしあるくとしずかです。", en: "The area surrounding the station is lively, but it's quiet a short walk away." }, accept: ["vicinity", "outskirts", "environs"] },
        { id: "ja-u129l4-fukin", type: "vocab", front: "ふきん", reading: "fukin", meaning: "nearby", example: { jp: "このふきんにぎんこうはありますが、ゆうびんきょくはありません。", en: "There's a bank nearby, but no post office." }, accept: ["neighbourhood", "in the area", "close by"] },
        { id: "ja-u129l4-kibo", type: "vocab", front: "きぼ", reading: "kibo", meaning: "scale", example: { jp: "けいかくのきぼがおおきいので、じかんもおかねもかかります。", en: "The scale of the plan is large, so it takes both time and money." }, accept: ["size", "scope", "magnitude"] },
      ],
    },
  ],
};
