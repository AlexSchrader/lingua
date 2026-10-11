// Unit 61 — しぜん・どうぶつ ("Nature & Animals") — A1 thematic
// N5 nature and animal words the learner hasn't met yet: common animals (mammals,
// birds, insects, water creatures) plus everyday plant and landscape nouns. Meanings
// stay to a single headword so choice cards read cleanly; plurals live in accept[].
// Examples reuse only already-taught nouns, adjectives, verbs and particles — no new
// grammar. lang/unit/lesson wiring lives in index.js.
export const UNIT61 = {
  id: "ja-u61",
  lang: "ja",
  title: "しぜん・どうぶつ",
  order: 61,
  stage: "a1",
  lessons: [
    // Lesson 1: animals (mammals)
    {
      id: "ja-u61l1",
      unit: 61,
      lesson: 1,
      title: "Animals",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name common animals: どうぶつ うさぎ ねずみ とら ライオン パンダ.",
      items: [
        { id: "ja-u61l1-doubutsu", type: "vocab", front: "どうぶつ", reading: "dōbutsu", meaning: "animal", example: { jp: "どうぶつがすきです。", en: "I like animals." }, drill: { jp: "どうぶつのほんをよみます。", en: "I read a book about animals." }, accept: ["animals", "an animal", "creature", "beast"], hint: "DŌ-bu-tsu — the どう is a long o, so three beats, and つ is tsu. 動 (move) + 物 (thing): the thing that moves. ⚠️ A zoo is どうぶつえん, the animal garden, built straight off this word." },
        { id: "ja-u61l1-usagi", type: "vocab", front: "うさぎ", reading: "usagi", meaning: "rabbit", example: { jp: "うさぎはしろいです。", en: "The rabbit is white." }, drill: { jp: "うさぎのみみはながいです。", en: "A rabbit's ears are long." }, accept: ["rabbits", "bunny", "a rabbit", "hare"], hint: "u-SA-gi — three beats, hard g. ⚠️ Japanese counts rabbits with the BIRD counter わ rather than the animal counter ひき — an old workaround so that monks could eat them." },
        { id: "ja-u61l1-nezumi", type: "vocab", front: "ねずみ", reading: "nezumi", meaning: "mouse", example: { jp: "ねずみはちいさいです。", en: "The mouse is small." }, drill: { jp: "ねずみがはこのなかにいます。", en: "There is a mouse in the box." }, accept: ["rat", "mice", "a mouse", "rodent"], hint: "ne-ZU-mi — three beats, a buzzing z. ⚠️ ONE word for mouse and rat — Japanese does not split them. It also names a grey colour, ねずみいろ." },
        { id: "ja-u61l1-tora", type: "vocab", front: "とら", reading: "tora", meaning: "tiger", example: { jp: "とらはつよいです。", en: "The tiger is strong." }, drill: { jp: "とらのこどもはちいさいです。", en: "A tiger's cub is small." }, accept: ["tigers", "a tiger", "the tiger"], hint: "TO-ra — two beats, tapped r. ⚠️ One of the twelve zodiac animals. Only two beats — resist stretching it to とらあ." },
        { id: "ja-u61l1-raion", type: "vocab", front: "ライオン", reading: "raion", meaning: "lion", example: { jp: "ライオンをみます。", en: "I look at the lion." }, drill: { jp: "ライオンはにくをたべます。", en: "Lions eat meat." }, accept: ["lions", "a lion", "the lion"], hint: "RAI-on — three beats, ライ a diphthong, then おん on its own beat. Katakana, from English lion. ⚠️ Japan has no native lion, which is exactly why this word is borrowed and とら is not." },
        { id: "ja-u61l1-panda", type: "vocab", front: "パンダ", reading: "panda", meaning: "panda", example: { jp: "パンダはくろいです。", en: "The panda is black." }, drill: { jp: "パンダはかわいいです。", en: "Pandas are cute." }, accept: ["pandas", "a panda", "giant panda"], hint: "PAN-da — two beats, the ん held. Katakana, so a borrowing. ⚠️ The full name is ジャイアントパンダ; everyday Japanese just says パンダ." },
      ],
    },
    // Lesson 2: birds & insects
    {
      id: "ja-u61l2",
      unit: 61,
      lesson: 2,
      title: "Birds & insects",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name birds and insects: にわとり あひる ひよこ ちょう とんぼ あり.",
      items: [
        { id: "ja-u61l2-niwatori", type: "vocab", front: "にわとり", reading: "niwatori", meaning: "chicken", example: { jp: "にわとりがいます。", en: "There is a chicken." }, drill: { jp: "にわとりのたまごをたべます。", en: "I eat the chicken's eggs." }, accept: ["hen", "chickens", "a chicken", "rooster"], hint: "ni-wa-TO-ri — four beats, tapped r. にわ, a garden or yard, plus とり, a bird: the yard bird. ⚠️ Completely literal once you know both halves." },
        { id: "ja-u61l2-ahiru", type: "vocab", front: "あひる", reading: "ahiru", meaning: "duck", example: { jp: "あひるがおよぎます。", en: "The duck swims." }, drill: { jp: "あひるはみずがすきです。", en: "Ducks like water." }, accept: ["ducks", "a duck", "domestic duck"], hint: "a-HI-ru — three beats, tapped r. ⚠️ The FARMED duck. The wild one is かも — the same split English makes between duck and mallard." },
        { id: "ja-u61l2-hiyoko", type: "vocab", front: "ひよこ", reading: "hiyoko", meaning: "chick", example: { jp: "ひよこはちいさいです。", en: "The chick is small." }, drill: { jp: "ひよこがにわにいます。", en: "There is a chick in the yard." }, accept: ["baby chick", "chicks", "a chick", "baby chicken"], hint: "hi-YO-ko — three beats. ⚠️ A newly hatched chick, so it is にわとり's baby. It also describes a complete beginner, the way English says fledgling." },
        { id: "ja-u61l2-chou", type: "vocab", front: "ちょう", reading: "chō", meaning: "butterfly", example: { jp: "ちょうがとびます。", en: "A butterfly is flying." }, drill: { jp: "ちょうがはなにとまります。", en: "A butterfly settles on the flower." }, accept: ["butterflies", "a butterfly", "the butterfly"], hint: "CHŌ — ONE long beat: ちょ held, never cho-u. ⚠️ The fuller everyday word doubles it: ちょうちょ. Many other words sound like ちょう — this is the butterfly one." },
        { id: "ja-u61l2-tonbo", type: "vocab", front: "とんぼ", reading: "tonbo", meaning: "dragonfly", example: { jp: "とんぼをみます。", en: "I see a dragonfly." }, drill: { jp: "とんぼがあきにとびます。", en: "Dragonflies fly in autumn." }, accept: ["dragonflies", "a dragonfly", "the dragonfly"], hint: "TON-bo — two beats, the ん held. ⚠️ A late-summer and autumn insect in Japan and a stock image in poetry. Native, despite sounding borrowed." },
        { id: "ja-u61l2-ari", type: "vocab", front: "あり", reading: "ari", meaning: "ant", example: { jp: "ありがたくさんいます。", en: "There are many ants." }, drill: { jp: "ありがくさのうえをあるきます。", en: "An ant walks across the grass." }, accept: ["ants", "an ant", "the ant"], hint: "The insect — don't confuse with あります (to exist)." },
      ],
    },
    // Lesson 3: water creatures & reptiles
    {
      id: "ja-u61l3",
      unit: 61,
      lesson: 3,
      title: "Sea & reptiles",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name water creatures and reptiles: へび かえる かめ いか たこ かに.",
      items: [
        { id: "ja-u61l3-hebi", type: "vocab", front: "へび", reading: "hebi", meaning: "snake", example: { jp: "へびはながいです。", en: "The snake is long." }, drill: { jp: "へびがくさのなかにいます。", en: "There is a snake in the grass." }, accept: ["snakes", "a snake", "serpent"], hint: "HE-bi — two beats. ⚠️ Watch the first kana: へ is he here, not the particle e. Another of the twelve zodiac animals." },
        { id: "ja-u61l3-kaeru", type: "vocab", front: "かえる", reading: "kaeru", meaning: "frog", example: { jp: "かえるがなきます。", en: "The frog is croaking." }, drill: { jp: "かえるはみずのなかにいます。", en: "Frogs live in the water." }, accept: ["frogs", "a frog", "toad"], hint: "The animal, not the verb かえります (to return)." },
        { id: "ja-u61l3-kame", type: "vocab", front: "かめ", reading: "kame", meaning: "turtle", example: { jp: "かめはおそいです。", en: "The turtle is slow." }, drill: { jp: "かめがうみをおよぎます。", en: "A turtle swims in the sea." }, accept: ["tortoise", "turtles", "a turtle", "terrapin"], hint: "KA-me — two beats. ⚠️ Famous from its race against the うさぎ, which Japan tells exactly as Aesop does. Not かめ the jar — same sound, different word." },
        { id: "ja-u61l3-ika", type: "vocab", front: "いか", reading: "ika", meaning: "squid", example: { jp: "いかをたべます。", en: "I eat squid." }, drill: { jp: "いかはうみにいます。", en: "Squid live in the sea." }, accept: ["squids", "a squid", "cuttlefish"], hint: "I-ka — two beats. ⚠️ Squid, and a very common food. Do not confuse it with いか meaning below or less than, which is a separate word." },
        { id: "ja-u61l3-tako", type: "vocab", front: "たこ", reading: "tako", meaning: "octopus", example: { jp: "たこはおいしいです。", en: "Octopus is delicious." }, drill: { jp: "たこのあしはながいです。", en: "An octopus's legs are long." }, accept: ["octopuses", "an octopus", "octopi"], hint: "TA-ko — two beats. ⚠️ Octopus — and the same sound also means a kite. Both are everyday words, so the context carries it." },
        { id: "ja-u61l3-kani", type: "vocab", front: "かに", reading: "kani", meaning: "crab", example: { jp: "かにをたべます。", en: "I eat crab." }, drill: { jp: "かにはよこにあるきます。", en: "Crabs walk sideways." }, accept: ["crabs", "a crab", "the crab"], hint: "KA-ni — two beats. ⚠️ Careful: that に is part of the WORD, not the particle. かにをたべます has its own を doing the particle work." },
      ],
    },
    // Lesson 4: plants & land
    {
      id: "ja-u61l4",
      unit: 61,
      lesson: 4,
      title: "Plants & land",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name plants and landscape: くさ はっぱ たね えだ おか なみ.",
      items: [
        { id: "ja-u61l4-kusa", type: "vocab", front: "くさ", reading: "kusa", meaning: "grass", example: { jp: "にわにくさがあります。", en: "There is grass in the garden." }, drill: { jp: "くさがみどりです。", en: "The grass is green." }, accept: ["weed", "weeds", "a weed", "greenery"], hint: "KU-sa — two beats. ⚠️ Grass and weeds alike: Japanese does not separate the wanted plant from the unwanted one the way English does." },
        { id: "ja-u61l4-happa", type: "vocab", front: "はっぱ", reading: "happa", meaning: "leaf", example: { jp: "はっぱはみどりです。", en: "The leaf is green." }, drill: { jp: "はっぱのいろがあかいです。", en: "The leaf's colour is red." }, accept: ["leaves", "a leaf", "foliage"], hint: "HAP-pa — the small っ is a held stop doubling the p: two beats. Built from は, a leaf, with the sound change that small っ marks. ⚠️ は alone is also a tooth and the topic particle; はっぱ is unambiguous." },
        { id: "ja-u61l4-tane", type: "vocab", front: "たね", reading: "tane", meaning: "seed", example: { jp: "たねはちいさいです。", en: "The seed is small." }, drill: { jp: "たねをはこにいれます。", en: "I put the seeds in the box." }, accept: ["seeds", "a seed", "pip"], hint: "TA-ne — two beats. ⚠️ It also means the source of something: はなしのたね is a topic of conversation, literally a seed for a story." },
        { id: "ja-u61l4-eda", type: "vocab", front: "えだ", reading: "eda", meaning: "branch", example: { jp: "とりがえだにいます。", en: "A bird is on the branch." }, drill: { jp: "えだがふといです。", en: "The branch is thick." }, accept: ["twig", "branches", "a branch", "bough"], hint: "E-da — two beats. ⚠️ A branch on a tree, and also a branch railway line, えだせん — the same metaphor English uses." },
        { id: "ja-u61l4-oka", type: "vocab", front: "おか", reading: "oka", meaning: "hill", example: { jp: "おかにのぼります。", en: "I climb the hill." }, drill: { jp: "おかのうえにきがあります。", en: "There is a tree on top of the hill." }, accept: ["hills", "a hill", "hillside", "knoll"], hint: "O-ka — two beats. ⚠️ A hill, smaller than やま. Japanese draws the line roughly where you would need equipment to get up it." },
        { id: "ja-u61l4-nami", type: "vocab", front: "なみ", reading: "nami", meaning: "wave", example: { jp: "うみになみがあります。", en: "There are waves in the sea." }, drill: { jp: "なみがおおきいです。", en: "The waves are big." }, accept: ["waves", "a wave", "the waves", "swell"], hint: "NA-mi — two beats. ⚠️ A wave on the water. The same piece builds つなみ, the harbour wave that English borrowed as tsunami." },
      ],
    },
  ],
};
