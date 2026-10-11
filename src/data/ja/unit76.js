// Unit 76 — しぜん・かがく ("Nature, science & society") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 nature/science/society nouns not covered by the earlier science unit (u51).
// Every example stays within introduced vocab + basic grammar (は/が/を/に/で/の +
// です/ます).
// NATURALNESS: checked by the LLM naturalness review (content-auditor) plus Alex's
// Dev-Mode playtest. A human native review is a nice-to-have, NOT a blocker
// (CLAUDE.md, Alex 2026-07-12).
// DRILL SHAPE: every drill leads with its own front + a core particle, which is what
// ja sentenceTokens tiles. practice() REPLACES the example, so any other shape would
// strip sentence:build off an item whose example had it.
export const UNIT76 = {
  id: "ja-u76",
  lang: "ja",
  title: "しぜん・かがく・N4",
  order: 76,
  stage: "a2",
  lessons: [
    // Lesson 1: science & technology
    {
      id: "ja-u76l1",
      unit: 76,
      lesson: 1,
      title: "Science & technology",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about science and invention: はつめい はっけん ぎじゅつ どうぐ ぶんめい ロボット.",
      items: [
        { id: "ja-u76l1-hatsumei", type: "vocab", front: "はつめい", reading: "hatsumei", meaning: "invention", example: { jp: "すごいはつめいですね。", en: "What an amazing invention." }, drill: { jp: "はつめいがせかいをかえます。", en: "The invention changes the world." }, accept: ["an invention", "a new device", "something invented", "innovation"], hint: "hatsumei — はつ (start) + めい (bright): bringing something into the light for the first time. ⚠️ Making a NEW thing. Finding something that was already there is はっけん, the next card." },
        { id: "ja-u76l1-hakken", type: "vocab", front: "はっけん", reading: "hakken", meaning: "discovery", example: { jp: "あたらしいはっけんです。", en: "It's a new discovery." }, drill: { jp: "はっけんをしんぶんでよみます。", en: "I read about the discovery in the paper." }, accept: ["a discovery", "finding", "finding something out", "a find"], hint: "hakken — はつ (start) + けん (see), with the collision making っけ: hak-ken. Seeing a thing that was there all along, as against はつめい on the card before, which creates it." },
        { id: "ja-u76l1-gijutsu", type: "vocab", front: "ぎじゅつ", reading: "gijutsu", meaning: "technology", example: { jp: "にほんのぎじゅつはすごいです。", en: "Japan's technology is amazing." }, drill: { jp: "ぎじゅつがしんぽします。", en: "The technology advances." }, accept: ["technique", "skill", "craftsmanship", "know-how"], hint: "gijutsu — ぎ (skill) + じゅつ (technique): the same じゅつ as しゅじゅつ, surgery, in u72. It covers national-scale tech AND one craftsman's skill, so ぎじゅつがある means 'is good with their hands'." },
        { id: "ja-u76l1-dogu", type: "vocab", front: "どうぐ", reading: "dōgu", meaning: "tool", example: { jp: "べんりなどうぐです。", en: "It's a useful tool." }, drill: { jp: "どうぐをつかいます。", en: "I use a tool." }, accept: ["tools", "instrument", "implement", "kit"], hint: "dōgu — どう (way) + ぐ (equipment): the kit for doing a thing. Long ō: dō-gu. Broader than English 'tool' — a cooking どうぐ is a utensil and a writing どうぐ is stationery." },
        { id: "ja-u76l1-bunmei", type: "vocab", front: "ぶんめい", reading: "bunmei", meaning: "civilization", example: { jp: "ふるいぶんめいをべんきょうします。", en: "I study ancient civilizations." }, drill: { jp: "ぶんめいがかわりました。", en: "The civilization changed." }, accept: ["a civilization", "civilised society", "an advanced society", "material culture"], hint: "bunmei — ぶん (writing, culture) + めい (bright): the lit-up side of human life, i.e. technology and cities. ぶんか on the last card of this unit is the shared way of living; ぶんめい is the machinery." },
        { id: "ja-u76l1-robotto", type: "vocab", front: "ロボット", reading: "robotto", meaning: "robot", example: { jp: "ロボットがそうじします。", en: "The robot does the cleaning." }, drill: { jp: "ロボットをこうじょうでつかいます。", en: "They use robots in the factory." }, accept: ["a robot", "robots", "an automaton", "a machine that works by itself"], hint: "robotto — four beats with a held っ before と: ro-bot-to. Japan has more industrial ones than almost anywhere, so this is a workplace word there as much as a science-fiction one." },
      ],
    },
    // Lesson 2: living things & nature
    {
      id: "ja-u76l2",
      unit: 76,
      lesson: 2,
      title: "Living things & nature",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about life and nature: せいぶつ しょくぶつ こんちゅう いのち じんるい しんりん.",
      items: [
        { id: "ja-u76l2-seibutsu", type: "vocab", front: "せいぶつ", reading: "seibutsu", meaning: "living thing", example: { jp: "うみには、いろいろなせいぶつがいます。", en: "There are many living things in the sea." }, drill: { jp: "せいぶつをけんきゅうします。", en: "I research living things." }, accept: ["living things", "creature", "organism"], hint: "seibutsu — せい (life) + ぶつ (thing): a living thing, and the name of the school subject biology. The ぶつ is the same as in しょくぶつ and こんちゅう's neighbours here — a whole lesson built on it." },
        { id: "ja-u76l2-shokubutsu", type: "vocab", front: "しょくぶつ", reading: "shokubutsu", meaning: "plant", example: { jp: "にわのしょくぶつがすきです。", en: "I like the plants in the garden." }, drill: { jp: "しょくぶつがにわにあります。", en: "There are plants in the garden." }, accept: ["plants", "vegetation", "flora", "a plant"], hint: "shokubutsu — しょく (planted) + ぶつ (thing): a planted thing. Its opposite どうぶつ, animal, is the same ぶつ with どう (moving) — plants stay put, animals move. One element, two words." },
        { id: "ja-u76l2-konchu", type: "vocab", front: "こんちゅう", reading: "konchū", meaning: "insect", example: { jp: "こどもはこんちゅうがすきです。", en: "Children like insects." }, drill: { jp: "こんちゅうをはやしでみます。", en: "I look at insects in the woods." }, accept: ["insects", "bug", "a bug", "creepy-crawly"], hint: "konchū — こん (insect) + ちゅう (bug). Long ū: kon-chū. The scientific word; むし from u2 is the everyday one. Insect collecting is a classic Japanese childhood summer project." },
        { id: "ja-u76l2-inochi", type: "vocab", front: "いのち", reading: "inochi", meaning: "life", example: { jp: "いのちはたいせつです。", en: "Life is precious." }, drill: { jp: "いのちをまもります。", en: "I protect life." }, accept: ["a life", "a living being's life", "one's life", "vitality"], hint: "inochi — life as the thing that can be lost, not a lifestyle. せいかつ (u75) is how you live day to day; じんせい is a lifespan; いのち is the spark itself. いのちがけ means at the risk of one's life." },
        { id: "ja-u76l2-jinrui", type: "vocab", front: "じんるい", reading: "jinrui", meaning: "humankind", example: { jp: "じんるいのれきしはながいです。", en: "The history of humankind is long." }, drill: { jp: "じんるいがちきゅうにすんでいます。", en: "Humankind lives on the earth." }, accept: ["humanity", "the human race", "people as a species", "mankind"], hint: "jinrui — じん (person) + るい (class), the same るい as しゅるい (kind, u75) and しょるい (documents, u71). Humans as a species, not as individuals — a biology and history word." },
        { id: "ja-u76l2-shinrin", type: "vocab", front: "しんりん", reading: "shinrin", meaning: "forest (woodland as a whole)", example: { jp: "しんりんをまもります。", en: "We protect the forest." }, drill: { jp: "しんりんがひろいです。", en: "The forest is vast." }, accept: ["woods", "woodland", "the forests", "forested land"], hint: "shinrin — しん (forest) + りん (grove): woodland as a region, the official word on maps and in policy. はやし from u51 is a wood you can walk out of; しんりん covers a whole range." },
      ],
    },
    // Lesson 3: disasters & danger
    {
      id: "ja-u76l3",
      unit: 76,
      lesson: 3,
      title: "Disasters & danger",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about disasters and danger: つなみ こうずい かじ ひがい じけん きけん.",
      items: [
        { id: "ja-u76l3-tsunami", type: "vocab", front: "つなみ", reading: "tsunami", meaning: "tsunami", example: { jp: "じしんのあとに、つなみがきました。", en: "A tsunami came after the earthquake." }, drill: { jp: "つなみがまちにきました。", en: "A tsunami reached the town." }, accept: ["a tsunami", "tidal wave", "a seismic sea wave", "a huge wave"], hint: "tsunami — つ (harbour) + なみ (wave): the wave that hits the harbour. English borrowed this word whole and unchanged, which almost never happens the other way round. It COMES: つなみがくる." },
        { id: "ja-u76l3-kozui", type: "vocab", front: "こうずい", reading: "kōzui", meaning: "flood", example: { jp: "おおきいあめで、こうずいになりました。", en: "The heavy rain caused a flood." }, drill: { jp: "こうずいがありました。", en: "There was a flood." }, accept: ["a flood", "flooding", "floodwater", "inundation"], hint: "kōzui — こう (vast) + ずい (water): too much water. Long ō: kō-zui. Japanese says it BECOMES one — こうずいになる — rather than that something causes it." },
        { id: "ja-u76l3-kaji", type: "vocab", front: "かじ", reading: "kaji", meaning: "fire (blaze)", example: { jp: "よる、かじがありました。", en: "There was a fire at night." }, drill: { jp: "かじをけします。", en: "They put out the fire." }, accept: ["a fire", "blaze", "a house fire", "an outbreak of fire"], hint: "kaji — か (fire) + じ (matter): a fire as an EVENT, the kind the しょうぼうしょ (u49) comes out for. The flame itself is ひ. ⚠️ A same-sounding かじ also means housework, as in u47's title." },
        { id: "ja-u76l3-higai", type: "vocab", front: "ひがい", reading: "higai", meaning: "damage", example: { jp: "たいふうのひがいがおおきいです。", en: "The typhoon damage is large." }, drill: { jp: "ひがいをしらべます。", en: "They assess the damage." }, accept: ["harm", "damage from a disaster", "losses", "the toll"], hint: "higai — ひ (suffer) + がい (harm): harm RECEIVED, so it is always the victim's side. The person harmed is a ひがいしゃ. The one who caused it is a かがいしゃ instead." },
        { id: "ja-u76l3-jiken", type: "vocab", front: "じけん", reading: "jiken", meaning: "incident", example: { jp: "まちで、じけんがありました。", en: "There was an incident in town." }, drill: { jp: "じけんをけいさつがしらべます。", en: "The police investigate the case." }, accept: ["an incident", "case", "affair"], hint: "jiken — じ (matter) + けん (affair): a newsworthy incident, usually a crime. Narrower than じこ from u74, an accident: a じこ is nobody's fault, a じけん usually is somebody's." },
        { id: "ja-u76l3-kiken", type: "vocab", front: "きけん", reading: "kiken", meaning: "danger", example: { jp: "ここはきけんです。", en: "It's dangerous here." }, drill: { jp: "きけんがあります。", en: "There is danger." }, accept: ["dangerous", "peril", "a hazard", "risk"], hint: "kiken — き (danger) + けん (risk). Both a noun and a な-adjective, so きけんです covers 'it is dangerous' and 'there is danger'. きけん on a yellow sign is Japan's DANGER." },
      ],
    },
    // Lesson 4: society & the world
    {
      id: "ja-u76l4",
      unit: 76,
      lesson: 4,
      title: "Society & the world",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about society and the world: せんそう へいわ れきし ぶんか みらい せいふ.",
      items: [
        { id: "ja-u76l4-senso", type: "vocab", front: "せんそう", reading: "sensō", meaning: "war", example: { jp: "むかし、せんそうがありました。", en: "Long ago, there was a war." }, drill: { jp: "せんそうをれきしでならいます。", en: "I learn about the war in history." }, accept: ["a war", "warfare", "armed conflict", "fighting"], hint: "sensō — せん (fight) + そう (contend): both halves mean fighting. Long ō: sen-sō. Its opposite へいわ is the next card, and the pair is the spine of this lesson." },
        { id: "ja-u76l4-heiwa", type: "vocab", front: "へいわ", reading: "heiwa", meaning: "peace", example: { jp: "せかいのへいわをねがいます。", en: "I wish for world peace." }, drill: { jp: "へいわがたいせつです。", en: "Peace is important." }, accept: ["peaceful", "peace", "calm and order", "being at peace"], hint: "heiwa — へい (flat, even) + わ (harmony): things level and in harmony. Both a noun and a な-adjective. The exact counterpart of せんそう on the card before." },
        { id: "ja-u76l4-rekishi", type: "vocab", front: "れきし", reading: "rekishi", meaning: "history", example: { jp: "にほんのれきしがすきです。", en: "I like Japanese history." }, drill: { jp: "れきしをがっこうでべんきょうします。", en: "I study history at school." }, accept: ["the past", "history", "the historical record", "past events"], hint: "rekishi — れき (passing of time) + し (record): the record of time passing. Both the events and the school subject. れきしてき means historic." },
        { id: "ja-u76l4-bunka", type: "vocab", front: "ぶんか", reading: "bunka", meaning: "culture", example: { jp: "にほんのぶんかをべんきょうします。", en: "I study Japanese culture." }, drill: { jp: "ぶんかがちがいます。", en: "The culture is different." }, accept: ["a culture", "culture", "a way of life", "customs and arts"], hint: "bunka — ぶん (writing) + か (become): what a people has become through its writing and arts. Shares its ぶん with ぶんめい earlier in this unit: ぶんめい is the machinery, ぶんか the way of living." },
        { id: "ja-u76l4-mirai", type: "vocab", front: "みらい", reading: "mirai", meaning: "future (the future in general)", example: { jp: "みらいはあかるいです。", en: "The future is bright." }, drill: { jp: "みらいのけいかくをはなします。", en: "I talk about plans for the future." }, accept: ["the future", "time to come", "the years ahead", "what lies ahead"], hint: "mirai — み (not yet) + らい (come): what has not come yet. ⚠️ The distant, general future. Tomorrow or next week is しょうらい or just あした — you would not use みらい for a date in your diary." },
        { id: "ja-u76l4-seifu", type: "vocab", front: "せいふ", reading: "seifu", meaning: "government", example: { jp: "せいふがきめます。", en: "The government decides." }, drill: { jp: "せいふがほうりつをつくります。", en: "The government makes the law." }, accept: ["the government", "administration", "the state", "the authorities"], hint: "seifu — せい (govern) + ふ (office): the governing office, i.e. the national government. The same せい as せいじ (politics, u49). A local council is やくしょ, from that same unit." },
      ],
    },
  ],
};
