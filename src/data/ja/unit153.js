// JA Unit 153 — ごい・N3・12 (いえとどうぐ — home and household) — B1 / JLPT N3
// Strand D, coverage 12 of 14. A1/A2 already taught the rooms and the big furniture
// (へや, たな, ふとん, かいだん, げんかん). What was missing is everything you only need
// once you actually LIVE somewhere: rent, moving, the meter cupboard, the fire
// extinguisher, the sign by the door. Renting a flat in Japan is a paperwork-heavy
// experience conducted entirely in these words.
export const UNIT153 = {
  id: "ja-u153",
  lang: "ja",
  title: "ごい・N3・12",
  order: 153,
  stage: "b1",
  lessons: [
    {
      id: "ja-u153l1",
      unit: 153,
      lesson: 1,
      title: "Renting and moving in",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about finding and moving into a place: やちん, ひっこし, しきち, あきや, ひょうさつ, そうこ.",
      items: [
        { id: "ja-u153l1-yachin", type: "vocab", front: "やちん", reading: "yachin", meaning: "rent", example: { jp: "えきにちかいので、やちんがすこしたかいです。", en: "It's close to the station, so the rent is a bit high." }, drill: { jp: "やちんがたかいです。", en: "The rent is high." }, accept: ["monthly rent", "rental cost"], hint: "や (house) + ちん (charge). The same ちん as ちんぎん (wages) — a payment for use." },
        { id: "ja-u153l1-hikkoshi", type: "vocab", front: "ひっこし", reading: "hikkoshi", meaning: "moving house", example: { jp: "ひっこしのまえに、いらないものをすてました。", en: "Before moving, I threw out the things I didn't need." }, accept: ["relocation", "house move", "to move"], hint: "The noun; the verb is ひっこします. ひっこしそば — noodles for your new neighbours — is a custom worth knowing about." },
        { id: "ja-u153l1-shikichi", type: "vocab", front: "しきち", reading: "shikichi", meaning: "plot of land, site", example: { jp: "しきちがひろいので、にわもつくれます。", en: "The plot is large, so we can make a garden too." }, accept: ["grounds", "premises", "land"], hint: "The land a building sits on, boundaries included. しきちない ('on the premises') appears on a lot of signs." },
        { id: "ja-u153l1-akiya", type: "vocab", front: "あきや", reading: "akiya", meaning: "empty, unoccupied house", example: { jp: "このへんはあきやがふえて、しずかになりました。", en: "Empty houses have increased around here and it's got quiet." }, accept: ["vacant house", "abandoned home"], hint: "あく (become empty) + や (house). Japan's あきやもんだい — millions of empty rural homes — is a standing news topic." },
        { id: "ja-u153l1-hyosatsu", type: "vocab", front: "ひょうさつ", reading: "hyōsatsu", meaning: "nameplate by the door", example: { jp: "ひょうさつがないので、どのいえかわかりません。", en: "There's no nameplate, so I can't tell which house it is." }, accept: ["doorplate", "name sign"], hint: "Japanese houses are found by family name on a plate rather than by street number — addresses number blocks, not streets." },
        { id: "ja-u153l1-soko", type: "vocab", front: "そうこ", reading: "sōko", meaning: "storeroom, warehouse", example: { jp: "つかわないものは、そうこにいれてあります。", en: "The things we don't use are kept in the storeroom." }, drill: { jp: "そうこにいれます。", en: "I put it in the storeroom." }, accept: ["storage", "depot", "shed"], hint: "そう (store) + こ (house). Anything from a garden shed to a distribution warehouse — scale comes from context." },
      ],
    },
    {
      id: "ja-u153l2",
      unit: 153,
      lesson: 2,
      title: "The building itself",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the parts of a home: しんしつ, ベランダ, はしら, やね, やねうら, かきね.",
      items: [
        { id: "ja-u153l2-shinshitsu", type: "vocab", front: "しんしつ", reading: "shinshitsu", meaning: "bedroom", example: { jp: "しんしつがみなみむきなので、あさはあかるいです。", en: "The bedroom faces south, so it's bright in the morning." }, accept: ["sleeping room", "bed room"], hint: "しん (sleep) + しつ (room). ～しつ names rooms by purpose: きょうしつ, けんきゅうしつ, ようしつ." },
        { id: "ja-u153l2-beranda", type: "vocab", front: "ベランダ", reading: "beranda", meaning: "balcony", example: { jp: "ベランダにせんたくものをほしました。", en: "I hung the washing out on the balcony." }, accept: ["veranda", "terrace"], hint: "In a Japanese flat the ベランダ is mainly where laundry dries — and legally an emergency escape route, so it must stay clear." },
        { id: "ja-u153l2-hashira", type: "vocab", front: "はしら", reading: "hashira", meaning: "pillar, post", example: { jp: "このいえのはしらは、ふるいですがじょうぶです。", en: "The pillars of this house are old but sturdy." }, accept: ["column", "support post"], hint: "Traditional Japanese houses are held up by はしら rather than by walls — which is why walls can be paper. Also figurative: かぞくのはしら." },
        { id: "ja-u153l2-yane", type: "vocab", front: "やね", reading: "yane", meaning: "roof", example: { jp: "たいふうで、やねがすこしこわれてしまいました。", en: "The typhoon damaged the roof a little." }, accept: ["rooftop", "housetop"], hint: "や (house) + ね (root) — the same や as やちん and あきや." },
        { id: "ja-u153l2-yaneura", type: "vocab", front: "やねうら", reading: "yaneura", meaning: "attic, loft", example: { jp: "やねうらにふるいしゃしんがしまってありました。", en: "There were old photographs stored in the attic." }, accept: ["roof space", "garret"], hint: "やね (roof) + うら (the reverse side) — the space behind the roof. うら is a productive word: うらぐち, うらがわ." },
        { id: "ja-u153l2-kakine", type: "vocab", front: "かきね", reading: "kakine", meaning: "hedge, fence", example: { jp: "となりのいえとのあいだに、ひくいかきねがあります。", en: "There's a low hedge between us and the house next door." }, accept: ["garden fence", "boundary hedge"], hint: "A living or light boundary between properties. かきねをこえる ('cross the fence') means getting past a social barrier." },
      ],
    },
    {
      id: "ja-u153l3",
      unit: 153,
      lesson: 3,
      title: "Cleaning and laundry",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Run a household: ぞうきん, せんざい, ものほし, かんそうき, ごみぶくろ, しゅうのう.",
      items: [
        { id: "ja-u153l3-zokin", type: "vocab", front: "ぞうきん", reading: "zōkin", meaning: "cleaning cloth", example: { jp: "ぞうきんでゆかをふいたら、きれいになりました。", en: "I wiped the floor with a cloth and it came up clean." }, accept: ["floor cloth", "rag", "duster"], hint: "Japanese schoolchildren clean their own classrooms with these — ぞうきんがけ is a rite of passage everyone remembers." },
        { id: "ja-u153l3-senzai", type: "vocab", front: "せんざい", reading: "senzai", meaning: "detergent", example: { jp: "せんざいをいれすぎると、きれいにながせません。", en: "If you put in too much detergent, you can't rinse it out properly." }, accept: ["washing liquid", "cleaning agent", "soap powder"], hint: "せん (wash) + ざい (agent). ～ざい names substances that do a job: しょうどくざい, せっちゃくざい." },
        { id: "ja-u153l3-monohoshi", type: "vocab", front: "ものほし", reading: "monohoshi", meaning: "drying rack, washing line", example: { jp: "あめがふりそうなので、ものほしのせんたくものをいえにいれます。", en: "It looks like rain, so I'll bring the washing in off the line." }, accept: ["clothes airer", "laundry pole", "drying line"], hint: "もの (things) + ほす (to dry in the sun). Hanging laundry outdoors is still the norm in Japan, dryer or no dryer." },
        { id: "ja-u153l3-kansoki", type: "vocab", front: "かんそうき", reading: "kansōki", meaning: "dryer", example: { jp: "つゆのときは、かんそうきがないとこまります。", en: "During the rainy season you're stuck without a dryer." }, drill: { jp: "かんそうきがひつようです。", en: "A dryer is necessary." }, accept: ["tumble dryer", "drying machine"], hint: "かんそう (drying) + き (machine). ～き is the machine suffix: せんたくき, けいさんき, じどうはんばいき." },
        { id: "ja-u153l3-gomibukuro", type: "vocab", front: "ごみぶくろ", reading: "gomibukuro", meaning: "rubbish bag", example: { jp: "このまちでは、きめられたごみぶくろをつかわなければなりません。", en: "In this town you have to use the designated rubbish bags." }, accept: ["bin bag", "garbage bag", "trash bag"], hint: "ごみ + ふくろ, with ふ voicing to ぶ. Many Japanese municipalities really do require their own bags — this is practical vocabulary." },
        { id: "ja-u153l3-shuno", type: "vocab", front: "しゅうのう", reading: "shūnō", meaning: "storage, putting things away", example: { jp: "しゅうのうがすくないので、へやをかたづけられません。", en: "There isn't much storage, so I can't get the room tidy." }, accept: ["stowing away", "cupboard space", "to store"], hint: "The built-in places things go, and the skill of using them. しゅうのうがおおい is a selling point on every flat listing." },
      ],
    },
    {
      id: "ja-u153l4",
      unit: 153,
      lesson: 4,
      title: "Light, heat, safety",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle the fittings and the emergency kit: でんきゅう, ろうそく, かいちゅうでんとう, しょうかき, ひなんぐち, かんきせん.",
      items: [
        { id: "ja-u153l4-denkyu", type: "vocab", front: "でんきゅう", reading: "denkyū", meaning: "light bulb", example: { jp: "でんきゅうがくらくなったので、あたらしいのにかえます。", en: "The bulb has gone dim, so I'll change it for a new one." }, accept: ["bulb", "lamp bulb"], hint: "でん (electric) + きゅう (ball). A bulb burning out is でんきゅうがきれる — the same きれる as a battery running out." },
        { id: "ja-u153l4-rosoku", type: "vocab", front: "ろうそく", reading: "rōsoku", meaning: "candle", example: { jp: "たいふうのときのために、ろうそくをかっておきました。", en: "I bought candles in advance in case of a typhoon." }, accept: ["wax candle", "taper"], hint: "Kept for emergencies more than atmosphere in most Japanese homes. Pairs with ておく (u43) — the grammar of preparation." },
        { id: "ja-u153l4-kaichudento", type: "vocab", front: "かいちゅうでんとう", reading: "kaichūdentō", meaning: "torch, flashlight", example: { jp: "じしんのときのために、かいちゅうでんとうをよういしています。", en: "I keep a torch ready in case of an earthquake." }, accept: ["flashlight", "electric torch", "hand torch"], hint: "かいちゅう (in the pocket) + でんとう (electric light) — a pocket lamp. Long, but it's on every disaster-preparedness list." },
        { id: "ja-u153l4-shokaki", type: "vocab", front: "しょうかき", reading: "shōkaki", meaning: "fire extinguisher", example: { jp: "しょうかきは、かいだんのよこにあります。", en: "The fire extinguisher is beside the stairs." }, accept: ["extinguisher", "fire equipment"], hint: "しょうか (extinguishing fire) + き (device) — the ～き of かんそうき again. Every Japanese building has one, labelled in exactly this word." },
        { id: "ja-u153l4-hinanguchi", type: "vocab", front: "ひなんぐち", reading: "hinanguchi", meaning: "emergency exit", example: { jp: "ひなんぐちのばしょを、はいったときにたしかめます。", en: "I check where the emergency exit is when I go in." }, accept: ["fire exit", "escape door"], hint: "ひなん (evacuation) + くち (exit), voiced to ぐち. It's the green running-figure sign — recognisable before you can read it." },
        { id: "ja-u153l4-kankisen", type: "vocab", front: "かんきせん", reading: "kankisen", meaning: "ventilation fan", example: { jp: "りょうりのあとは、かんきせんをつけておきます。", en: "After cooking I leave the ventilation fan on." }, accept: ["extractor fan", "air vent fan"], hint: "かんき (air exchange) + せん (fan). Japanese bathrooms and kitchens rely on these — humidity makes them non-optional." },
      ],
    },
  ],
};
