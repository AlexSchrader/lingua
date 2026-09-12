// JA Unit 150 — ごい・N3・9 (すうりょうとたんい — quantity and measurement) — B1 / JLPT N3
// Strand D, coverage 9 of 14. A1 taught counting and u55 (かず・りょう) taught the counters.
// What is missing is the vocabulary for TALKING about quantities: area, weight, ratio,
// average, increase, the four arithmetic operations, and the scales (speed, altitude,
// humidity) that news and instructions use constantly.
// This unit is also where a learner meets the ～ど and ～さ noun families, which generate
// far more words than the twenty-four taught here.
export const UNIT150 = {
  id: "ja-u150",
  lang: "ja",
  title: "ごい・N3・9",
  order: 150,
  stage: "b1",
  lessons: [
    {
      id: "ja-u150l1",
      unit: 150,
      lesson: 1,
      title: "Size, weight, dimensions",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "State the dimensions of something: めんせき, たいせき, じゅうりょう, はば, おくゆき, すんぽう.",
      items: [
        { id: "ja-u150l1-menseki", type: "vocab", front: "めんせき", reading: "menseki", meaning: "area (surface)", example: { jp: "このへやはめんせきがひろいので、かぐをふやせます。", en: "This room has a large area, so we can add more furniture." }, accept: ["floor area", "square measure", "surface area"], hint: "めん (surface) + せき (accumulation). ひろい/せまい describe it, not おおきい." },
        { id: "ja-u150l1-taiseki", type: "vocab", front: "たいせき", reading: "taiseki", meaning: "volume (3D)", example: { jp: "はこのたいせきをけいさんしてから、おくります。", en: "I'll calculate the volume of the box and then send it." }, accept: ["cubic capacity", "bulk"], hint: "たい (body) + せき — the same せき as めんせき. Two dimensions gives めんせき, three gives たいせき." },
        { id: "ja-u150l1-juryo", type: "vocab", front: "じゅうりょう", reading: "jūryō", meaning: "weight", example: { jp: "にもつのじゅうりょうがおおいと、りょうきんがたかくなります。", en: "If the luggage weight is high, the charge goes up." }, drill: { jp: "じゅうりょうがおおいです。", en: "The weight is heavy." }, accept: ["heaviness", "mass", "load"], hint: "The formal noun. おもさ (from おもい + さ) is the everyday word — that ～さ ending turns any adjective into its measure." },
        { id: "ja-u150l1-haba", type: "vocab", front: "はば", reading: "haba", meaning: "width", example: { jp: "みちのはばがせまいので、くるまはとおれません。", en: "The road's width is narrow, so cars can't get through." }, accept: ["breadth", "range", "span"], hint: "Also figurative: はばがひろい means a wide range of knowledge or choice." },
        { id: "ja-u150l1-okuyuki", type: "vocab", front: "おくゆき", reading: "okuyuki", meaning: "depth (front to back)", example: { jp: "たなのおくゆきがあさいので、おおきいほんがはいりません。", en: "The shelf isn't deep enough for big books." }, accept: ["how far back it goes", "recess"], hint: "Depth going backwards, not downwards — that's ふかさ. Furniture listings always give はば × おくゆき × たかさ." },
        { id: "ja-u150l1-sunpo", type: "vocab", front: "すんぽう", reading: "sunpō", meaning: "measurements, dimensions", example: { jp: "かうまえに、すんぽうをしらべておきましょう。", en: "Let's check the dimensions before we buy it." }, accept: ["size", "specification", "measurement"], hint: "The whole set of numbers together. From すん, an old unit of length — the word survived the unit itself." },
      ],
    },
    {
      id: "ja-u150l2",
      unit: 150,
      lesson: 2,
      title: "Totals, ratios, extremes",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report a figure precisely: ごうけい, へいきん, ひりつ, さいだい, さいしょう, ちょっけい.",
      items: [
        { id: "ja-u150l2-gokei", type: "vocab", front: "ごうけい", reading: "gōkei", meaning: "total, sum", example: { jp: "ごうけいで5000えんになりますが、よろしいですか。", en: "That comes to five thousand yen in total — is that all right?" }, accept: ["altogether", "grand total", "adding up to"], hint: "The number after adding everything. ぜんぶで is the conversational way to say the same thing." },
        { id: "ja-u150l2-hankei", type: "vocab", front: "はんけい", reading: "hankei", meaning: "radius", example: { jp: "えきからはんけい1キロに、みせがたくさんあります。", en: "Within a one-kilometre radius of the station there are lots of shops." }, accept: ["half-diameter", "range (circular)"], hint: "はん (half) + けい (measure) — half of ちょっけい. Also used for a catchment area: はんけい5キロけん." },
        { id: "ja-u150l2-hiritsu", type: "vocab", front: "ひりつ", reading: "hiritsu", meaning: "ratio, proportion", example: { jp: "おんなのひとのひりつが、まえよりたかくなりました。", en: "The proportion of women has risen compared with before." }, accept: ["rate", "percentage share", "proportion"], hint: "A relationship between two numbers. わりあい is the everyday synonym; ひりつ is what a report says." },
        { id: "ja-u150l2-saidai", type: "vocab", front: "さいだい", reading: "saidai", meaning: "maximum, largest", example: { jp: "このかばんには、さいだい10キロまでいれられます。", en: "You can put a maximum of ten kilos in this bag." }, accept: ["biggest", "at most", "peak"], hint: "さい～ is the superlative prefix: さいだい, さいしょう, さいこう, さいしん. One prefix, a whole family." },
        { id: "ja-u150l2-saisho", type: "vocab", front: "さいしょう", reading: "saishō", meaning: "minimum, smallest", example: { jp: "さいしょうは3こからで、それよりすくないとかえません。", en: "The minimum is three, and you can't buy fewer than that." }, accept: ["least", "at least (amount)", "lowest"], hint: "The pair to さいだい. Careful with さいしょ (first) — one long vowel apart and a different word entirely." },
        { id: "ja-u150l2-chokkei", type: "vocab", front: "ちょっけい", reading: "chokkei", meaning: "diameter", example: { jp: "このさらは、ちょっけいが20センチあります。", en: "This plate has a diameter of twenty centimetres." }, accept: ["across (a circle)", "width of a circle"], hint: "ちょく (straight) + けい (measure) — the straight line across. Half of it is はんけい, the radius." },
      ],
    },
    {
      id: "ja-u150l3",
      unit: 150,
      lesson: 3,
      title: "Going up, going down, working it out",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report a change in numbers and name the four operations: ぞうか, げんしょう, たしざん, ひきざん, かけざん, わりざん.",
      items: [
        { id: "ja-u150l3-zoka", type: "vocab", front: "ぞうか", reading: "zōka", meaning: "increase", example: { jp: "かんこうきゃくのぞうかで、まちがにぎやかになりました。", en: "With the increase in tourists, the town has become lively." }, accept: ["growth", "rise", "to increase"], hint: "The noun for what ふえます does. News and reports prefer the noun: ぞうかしています." },
        { id: "ja-u150l3-bunno", type: "vocab", front: "ぶんの", reading: "bunno", meaning: "(reads a fraction)", example: { jp: "ぜんたいの3ぶんの1が、もうおわりました。", en: "A third of the whole thing is already finished." }, accept: ["out of (fraction)", "over (fraction)", "fraction marker"], hint: "Japanese says the DENOMINATOR first: 3ぶんの1 is one third, 4ぶんの3 is three quarters. Reading it the English way round is the standard mistake." },
        { id: "ja-u150l3-tashizan", type: "vocab", front: "たしざん", reading: "tashizan", meaning: "addition", example: { jp: "たしざんはできますが、わりざんはむずかしいです。", en: "I can do addition, but division is hard." }, accept: ["adding up", "sum"], hint: "たす (to add) + ざん (calculation). All four operations follow this shape, so learning one gives you the pattern." },
        { id: "ja-u150l3-hikizan", type: "vocab", front: "ひきざん", reading: "hikizan", meaning: "subtraction", example: { jp: "ひきざんをまちがえて、こたえがあいませんでした。", en: "I got the subtraction wrong and the answer didn't match." }, accept: ["taking away", "minus"], hint: "ひく (to pull, subtract) + ざん. The same ひく as ひきだし (a drawer — the thing you pull)." },
        { id: "ja-u150l3-kakezan", type: "vocab", front: "かけざん", reading: "kakezan", meaning: "multiplication", example: { jp: "かけざんをおぼえると、かいものがはやくなります。", en: "Once you learn multiplication, shopping gets faster." }, accept: ["times", "multiplying"], hint: "かける (to multiply) + ざん. Japanese children drill it as くくのひょう — the nine-times-nine table." },
        { id: "ja-u150l3-warizan", type: "vocab", front: "わりざん", reading: "warizan", meaning: "division", example: { jp: "わりざんのこたえがきれいにでないときもあります。", en: "Sometimes a division doesn't come out neatly." }, accept: ["dividing", "divided by"], hint: "わる (to divide, to split) + ざん. わる has no card of its own in the corpus — you meet it here, inside the compound, the same way かけざん carries かける." },
      ],
    },
    {
      id: "ja-u150l4",
      unit: 150,
      lesson: 4,
      title: "The ～ど scales",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read the scales in a forecast or a manual: そくど, こうど, しつど, のうど, しんど, けた.",
      items: [
        { id: "ja-u150l4-sokudo", type: "vocab", front: "そくど", reading: "sokudo", meaning: "speed", example: { jp: "そくどをおとして、ゆっくりまがってください。", en: "Please reduce your speed and turn slowly." }, accept: ["velocity", "pace", "rate"], hint: "The first of the ～ど family: ～ど turns a quality into a measured degree of it. はやさ is everyday speed; そくど is the reading on the dial." },
        { id: "ja-u150l4-kodo", type: "vocab", front: "こうど", reading: "kōdo", meaning: "altitude, height above ground", example: { jp: "ひこうきはこうどをあげて、くもよりうえをとびます。", en: "The plane climbs in altitude and flies above the clouds." }, accept: ["elevation", "flying height"], hint: "Height measured from a baseline, not the height of an object — that's たかさ. Also 'advanced': こうどなぎじゅつ." },
        { id: "ja-u150l4-shitsudo", type: "vocab", front: "しつど", reading: "shitsudo", meaning: "humidity", example: { jp: "なつはしつどがたかいので、とてもあつくかんじます。", en: "Humidity is high in summer, so it feels very hot." }, accept: ["moisture level", "dampness"], hint: "Pairs with きおん in every Japanese forecast. Japanese summers are talked about in terms of しつど far more than temperature." },
        { id: "ja-u150l4-nodo", type: "vocab", front: "のうど", reading: "nōdo", meaning: "concentration (of a substance)", example: { jp: "のうどがこいので、みずをいれてからつかいます。", en: "The concentration is strong, so add water before using it." }, accept: ["strength (of a solution)", "density"], hint: "How much of something is dissolved in something else. こい (strong) and うすい (weak) are the adjectives that go with it." },
        { id: "ja-u150l4-shindo", type: "vocab", front: "しんど", reading: "shindo", meaning: "seismic intensity", example: { jp: "しんど4のじしんがありましたが、けがはありませんでした。", en: "There was a shindo-4 earthquake, but nobody was hurt." }, accept: ["quake intensity", "shaking scale"], hint: "Japan's own 0–7 scale of how strongly a quake was FELT at a place — different from マグニチュード, which measures the quake itself." },
        { id: "ja-u150l4-keta", type: "vocab", front: "けた", reading: "keta", meaning: "digit, order of magnitude", example: { jp: "けたをまちがえて、10ばいのおかねをはらってしまいました。", en: "I got the digit wrong and ended up paying ten times as much." }, accept: ["place (of a number)", "figure", "column"], hint: "けたがちがう ('a different order of magnitude') is a common way to say something isn't even comparable." },
      ],
    },
  ],
};
