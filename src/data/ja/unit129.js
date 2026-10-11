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
        { id: "ja-u129l1-chikei", type: "vocab", front: "ちけい", reading: "chikei", meaning: "terrain", example: { jp: "このあたりはちけいがふくざつなので、みちがわかりにくいです。", en: "The terrain around here is complicated, so the roads are hard to follow." }, drill: { jp: "ちけいをしらべました。", en: "I looked into the terrain." }, accept: ["landform", "topography", "the lie of the land"], hint: "chi-KEI — two beats, kei said as written. ち is earth and けい is a shape, so it is the shape of the ground. ちり is the SUBJECT; ちけい is the thing it studies." },
        { id: "ja-u129l1-tochi", type: "vocab", front: "とち", reading: "tochi", meaning: "land (a plot of ground)", example: { jp: "このとちはひろいですが、いえはたてられません。", en: "This land is large, but you can't build a house on it." }, drill: { jp: "とちはひろいです。", en: "The land is wide." }, accept: ["plot of land", "a piece of land", "ground"], hint: "TO-chi — two beats. と is soil and ち is ground. It means land as PROPERTY — something owned, bought and measured. The surface you walk on is じめん." },
        { id: "ja-u129l1-kiko", type: "vocab", front: "きこう", reading: "kikō", meaning: "climate", example: { jp: "きこうがあたたかいので、ふゆでもはながさきます。", en: "The climate is warm, so flowers bloom even in winter." }, drill: { jp: "きこうがかわりました。", en: "The climate has changed." }, accept: ["weather patterns", "the climate", "climatic conditions"], hint: "ki-KŌ — the second beat is long. き is air and こう is a sign, so it is the long-run pattern. てんき is today's weather; きこう is what the place is like all year." },
        { id: "ja-u129l1-taiki", type: "vocab", front: "たいき", reading: "taiki", meaning: "the atmosphere", example: { jp: "たいきのおせんがひどいので、まちのそらはいつもしろくみえます。", en: "The atmospheric pollution is bad, so the town sky always looks white." }, drill: { jp: "たいきをきれいにします。", en: "We clean up the atmosphere." }, accept: ["the air", "air", "the earth's atmosphere"], hint: "TA-i-ki — three beats. たい is great and き is air, so it is the whole body of air round the planet. くうき is the air in this room; たいき is the scientific layer." },
        { id: "ja-u129l1-chiho", type: "vocab", front: "ちほう", reading: "chihō", meaning: "region", example: { jp: "このちほうはゆきがおおいので、ふゆはたいへんです。", en: "This region gets a lot of snow, so winter is hard." }, drill: { jp: "ちほうにすんでいます。", en: "I live out in the regions." }, accept: ["district", "the provinces", "area"], hint: "chi-HŌ — the second beat is long. ち is ground and ほう is a direction. ⚠️ Spoken against とかい, the big city, it carries the sense of the provinces rather than merely a region." },
        { id: "ja-u129l1-kyori", type: "vocab", front: "きょり", reading: "kyori", meaning: "distance", example: { jp: "えきまでのきょりはみじかいので、いつもあるいていきます。", en: "The distance to the station is short, so I always walk." }, drill: { jp: "きょりがとおいです。", en: "The distance is long." }, accept: ["range", "how far", "the distance"], hint: "KYO-ri — two beats, きょ is ONE beat. きょ is to be apart and り is a measure. It is the measurable gap, so it takes ながい and みじかい as well as とおい and ちかい." },
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
        { id: "ja-u129l2-osen", type: "vocab", front: "おせん", reading: "osen", meaning: "pollution", example: { jp: "かわのおせんがひどかったので、さかながいなくなりました。", en: "The pollution in the river was bad, so the fish disappeared." }, drill: { jp: "おせんをふせぎます。", en: "We prevent pollution." }, accept: ["contamination", "polluting", "being polluted"], hint: "o-SEN — two beats, the ん held. お is dirty and せん is to stain, so something clean has been stained. It attaches to what is dirtied: たいきおせん, すいしつおせん." },
        { id: "ja-u129l2-ondanka", type: "vocab", front: "おんだんか", reading: "ondanka", meaning: "global warming", example: { jp: "おんだんかがすすんでいるので、ふゆもあまりさむくありません。", en: "Global warming is advancing, so the winters aren't very cold either." }, drill: { jp: "おんだんかをとめたいです。", en: "I want to stop the warming." }, accept: ["warming", "climate warming", "the planet heating up"], hint: "on-dan-KA — three beats, the ん held. おんだん is mild and warm, and ～か is the ～ification suffix. The same ～か builds へんか, change, and こくさいか, globalisation." },
        { id: "ja-u129l2-haiki", type: "vocab", front: "はいき", reading: "haiki", meaning: "disposal", example: { jp: "ふるいパソコンのはいきがめんどうで、まだいえにおいてあります。", en: "Disposing of an old computer is a hassle, and it's still sitting at home." }, drill: { jp: "はいきにおかねがかかります。", en: "Disposal costs money." }, accept: ["scrapping", "discarding", "waste disposal"], hint: "HA-i-ki — three beats. はい is to discard and き is to abandon, so it is throwing away for good. すてる is the everyday verb; はいき is the official process." },
        { id: "ja-u129l2-hakai", type: "vocab", front: "はかい", reading: "hakai", meaning: "destruction", example: { jp: "しぜんのはかいはすぐですが、なおすにはひゃくねんかかります。", en: "Destroying nature is quick, but repairing it takes a hundred years." }, drill: { jp: "はかいがすすみます。", en: "The destruction advances." }, accept: ["ruining", "wrecking", "damage"], hint: "ha-KA-i — three beats. は is to break and かい is to destroy. It is irreversible and large: a forest, a building, a relationship. こわす is breaking one object." },
                { id: "ja-u129l2-haishutsu", type: "vocab", front: "はいしゅつ", reading: "haishutsu", meaning: "emissions", example: { jp: "くるまのはいしゅつをへらすために、じてんしゃでかよっています。", en: "To cut vehicle emissions, I commute by bicycle." }, drill: { jp: "はいしゅつがへりました。", en: "Emissions have fallen." }, accept: ["giving off", "discharge", "putting out"], hint: "hai-SHU-tsu — three beats. はい is to expel and しゅつ is out, so it is what a thing puts out. はいき with different kanji is exhaust gas — a near-twin worth keeping apart." },
        { id: "ja-u129l2-risaikuru", type: "vocab", front: "リサイクル", reading: "risaikuru", meaning: "recycling", example: { jp: "リサイクルをすれば、ごみがすくなくなります。", en: "If you recycle, there is less rubbish." }, drill: { jp: "リサイクルがすすんでいます。", en: "Recycling is making progress." }, accept: ["recycle", "reusing", "to recycle"], hint: "ri-sa-I-ku-ru — five beats. Borrowed whole. Japan sorts rubbish strictly, so リサイクル is a daily household word rather than a policy one." },
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
        { id: "ja-u129l3-hogo", type: "vocab", front: "ほご", reading: "hogo", meaning: "protection", example: { jp: "とりのほごがはじまったので、かずがふえてきました。", en: "Protection of the birds started, so their numbers have been rising." }, drill: { jp: "ほごがはじまりました。", en: "The protection began." }, accept: ["conservation", "safeguarding", "preservation"], hint: "HO-go — two beats. ほ is to protect and ご is to guard, so it is active shielding. It covers wildlife, children and personal data alike — ほごしゃ is a child's guardian." },
        { id: "ja-u129l3-sodatsu", type: "vocab", front: "そだつ", reading: "sodatsu", meaning: "grow up", example: { jp: "このやさいはみずがすくなくてもそだつので、そだてやすいです。", en: "This vegetable grows even with little water, so it's easy to raise." }, drill: { jp: "こどもがげんきにそだつ。", en: "The child grows up healthy." }, accept: ["to be raised", "grow", "be brought up"], hint: "so-da-TSU — three beats. The thing grows by itself, so it takes が. Raising it yourself is そだてる — the same つ-versus-てる split as たつ and たてる." },
        { id: "ja-u129l3-nogyo", type: "vocab", front: "のうぎょう", reading: "nōgyō", meaning: "agriculture", example: { jp: "このちほうののうぎょうはゆうめいで、まいとしおおくのひとがみにきます。", en: "This region's agriculture is famous, and every year many people come to see it." }, drill: { jp: "のうぎょうをはじめました。", en: "I took up farming." }, accept: ["farming", "the farming industry", "agricultural work"], hint: "nō-GYŌ — two long beats. のう is a field and ぎょう is an industry. The same ぎょう gives こうぎょう and さんぎょう, so one suffix names every sector." },
        { id: "ja-u129l3-saigai", type: "vocab", front: "さいがい", reading: "saigai", meaning: "disaster", example: { jp: "さいがいのあとはみずがたりないので、はやくじゅんびします。", en: "After a disaster there isn't enough water, so we prepare early." }, drill: { jp: "さいがいがおきました。", en: "A disaster occurred." }, accept: ["calamity", "natural disaster", "a catastrophe"], hint: "sai-GA-i — three beats. さい is a calamity and がい is harm. It is large-scale and usually natural — じしん, たいふう, こうずい. One accident is じこ." },
        { id: "ja-u129l3-bosai", type: "vocab", front: "ぼうさい", reading: "bōsai", meaning: "disaster preparedness", example: { jp: "ぼうさいのれんしゅうをしてから、あんしんしてねられます。", en: "Since we did the disaster drill, I can sleep easy." }, drill: { jp: "ぼうさいはたいせつです。", en: "Disaster preparedness matters." }, accept: ["disaster prevention", "emergency preparedness", "disaster readiness"], hint: "bō-SA-i — three beats, the first long. ぼう is to guard against and さい is a calamity. Japanese towns hold ぼうさいくんれん drills, so the word is practical, not theoretical." },
        { id: "ja-u129l3-hinan", type: "vocab", front: "ひなん", reading: "hinan", meaning: "evacuation", example: { jp: "ひなんのばしょをかくにんしてから、ねました。", en: "I checked the evacuation site, and then went to bed." }, drill: { jp: "ひなんのれんらくがきました。", en: "The evacuation notice came." }, accept: ["taking shelter", "evacuating", "refuge"], hint: "hi-NAN — two beats, the ん held. ひ is to flee and なん is hardship, so it is getting away from danger. ⚠️ A different ひなん with other kanji means criticism." },
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
        { id: "ja-u129l4-kaihatsu", type: "vocab", front: "かいはつ", reading: "kaihatsu", meaning: "development (developing land)", example: { jp: "えきまえのかいはつがはじまったので、みせがふえました。", en: "Development in front of the station began, so there are more shops." }, drill: { jp: "かいはつをすすめます。", en: "We push the development forward." }, accept: ["developing", "redevelopment", "opening up"], hint: "kai-HA-tsu — three beats. かい is to open and はつ to set off, so it is opening land or a product up. はってん is growth that happens; かいはつ is growth someone drives." },
        { id: "ja-u129l4-kensetsu", type: "vocab", front: "けんせつ", reading: "kensetsu", meaning: "construction", example: { jp: "はしのけんせつがおわったら、まちがべんりになります。", en: "Once the bridge is built, the town will be more convenient." }, drill: { jp: "けんせつがはじまりました。", en: "Construction has begun." }, accept: ["building", "erecting", "putting up"], hint: "ken-SE-tsu — three beats, the ん held. けん is to build and せつ is to set up. It is for large works — a bridge, a school, a road. A house is たてる." },
        { id: "ja-u129l4-shisetsu", type: "vocab", front: "しせつ", reading: "shisetsu", meaning: "facility", example: { jp: "あたらしいしせつはきれいですが、ばしょがふべんです。", en: "The new facility is nice, but the location is inconvenient." }, drill: { jp: "しせつをつかいます。", en: "I use the facility." }, accept: ["facilities", "institution", "amenity"], hint: "shi-SE-tsu — three beats. し is to put in place and せつ is to establish, so it is something built for public use: a pool, a library, a care home." },
        { id: "ja-u129l4-shuhen", type: "vocab", front: "しゅうへん", reading: "shūhen", meaning: "surrounding area", example: { jp: "えきのしゅうへんはにぎやかで、よるもあかるいです。", en: "The area surrounding the station is lively, and bright at night too." }, drill: { jp: "しゅうへんをあるきました。", en: "I walked round the surrounding area." }, accept: ["vicinity", "outskirts", "environs"], hint: "shū-HEN — the first beat is long, the ん held. しゅう is going round and へん is a vicinity, so it is the ring around a place. ふきん is simply near; しゅうへん surrounds." },
        { id: "ja-u129l4-fukin", type: "vocab", front: "ふきん", reading: "fukin", meaning: "nearby (the surrounding area)", example: { jp: "このふきんにぎんこうがないので、まちまででかけます。", en: "There's no bank nearby, so I go into town." }, drill: { jp: "ふきんにぎんこうがありません。", en: "There is no bank nearby." }, accept: ["neighbourhood", "in the area", "close by"], hint: "fu-KIN — two beats, the ん held. ふ is attached and きん is near, so it is the stretch close by. It attaches to a landmark: 「えきふきん」, around the station." },
        { id: "ja-u129l4-kibo", type: "vocab", front: "きぼ", reading: "kibo", meaning: "scale", example: { jp: "けいかくのきぼがおおきいので、じかんもおかねもかかります。", en: "The scale of the plan is large, so it takes both time and money." }, drill: { jp: "きぼがちいさいです。", en: "The scale is small." }, accept: ["size", "scope", "magnitude"], hint: "KI-bo — two beats. き is a standard and ぼ is a plan, so it is how big the undertaking is. It takes おおきい and ちいさい, never たかい." },
      ],
    },
  ],
};
