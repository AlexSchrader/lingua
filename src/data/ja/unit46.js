// Unit 46 — どうし・うけみ (passive/causative/imperative drill) — A2 / JLPT N4
export const UNIT46 = {
  id: "ja-u46",
  lang: "ja",
  title: "どうし・うけみ",
  order: 46,
  stage: "a2",
  lessons: [
    {
      id: "ja-u46l1",
      unit: 46,
      lesson: 1,
      title: "Passive form (～られる)",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Form the passive of N4 verbs: しかります ほめます たのみます ぬすみます こわします だまします.",
      items: [
        { id: "ja-u46l1-shikarimasu", type: "vocab", front: "しかります", reading: "shikarimasu", meaning: "to scold", example: { jp: "せんせいがせいとをしかります。", en: "The teacher scolds the student." }, drill: { jp: "ちちがいもうとをしかります。", en: "My father scolds my little sister." }, accept: ["to tell off","to reprimand","to scold","to give a telling-off"], hint: "shikarimasu — しかる is a telling-off from someone above you: a parent, a teacher, a boss. Godan, so the passive is しかられる, 'to get scolded' — the form this card drills.", group: "godan", conjForm: "passive" },
        { id: "ja-u46l1-homemasu", type: "vocab", front: "ほめます", reading: "homemasu", meaning: "to praise", example: { jp: "ぶちょうがぶかをほめます。", en: "The manager praises the staff." }, drill: { jp: "せんせいがわたしをほめます。", en: "The teacher praises me." }, accept: ["to compliment","to commend","to speak well of","to applaud"], hint: "homemasu — ほめる is the exact opposite of しかる in this lesson: praise instead of a telling-off. Ichidan, so the passive is ほめられる, 'to get praised' — the form this card drills.", group: "ichidan", conjForm: "passive" },
        { id: "ja-u46l1-tanomimasu", type: "vocab", front: "たのみます", reading: "tanomimasu", meaning: "to request", example: { jp: "ともだちにしごとをたのみます。", en: "I ask a friend to do a job." }, drill: { jp: "みせでコーヒーをたのみます。", en: "I order a coffee at the shop." }, accept: ["to ask","to order","to request a favour","to put in an order"], hint: "tanomimasu — one verb for two jobs: asking a person a favour, and ordering food. Godan, stem in み, so the passive is たのまれる, 'to be asked' — the form this card drills.", group: "godan", conjForm: "passive" },
        { id: "ja-u46l1-nusumimasu", type: "vocab", front: "ぬすみます", reading: "nusumimasu", meaning: "to steal", example: { jp: "どろぼうがおかねをぬすみます。", en: "A thief steals the money." }, drill: { jp: "あのひとがかばんをぬすみます。", en: "That person steals the bag." }, accept: ["to rob","to swipe","to steal","to make off with"], hint: "nusumimasu — ぬすむ takes the thing stolen with を, never the victim. Godan; the passive ぬすまれる, 'to get something stolen', is the form this card drills and the one you actually say.", group: "godan", conjForm: "passive" },
        { id: "ja-u46l1-kowashimasu", type: "vocab", front: "こわします", reading: "kowashimasu", meaning: "to break", example: { jp: "こどもがおもちゃをこわします。", en: "The child breaks the toy." }, drill: { jp: "ねこがめがねをこわします。", en: "The cat breaks the glasses." }, accept: ["to destroy","to smash","to break","to wreck"], hint: "kowashimasu — こわす is somebody breaking a thing, so it takes を. Godan, stem in し; the passive こわされる, 'to get broken', is the form this card drills.", group: "godan", conjForm: "passive" },
        { id: "ja-u46l1-damashimasu", type: "vocab", front: "だまします", reading: "damashimasu", meaning: "to trick", example: { jp: "わるいひとがきゃくをだまします。", en: "A bad person tricks the customer." }, drill: { jp: "かれはみんなをだまします。", en: "He tricks everybody." }, accept: ["to deceive","to fool","to trick","to con"], hint: "damashimasu — だます is fooling someone on purpose, not an honest mistake. Godan; the passive だまされる, 'to get tricked', is the form this card drills and the one in the news.", group: "godan", conjForm: "passive" },
      ],
    },
    {
      id: "ja-u46l2",
      unit: 46,
      lesson: 2,
      title: "Causative & command",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Form the causative and imperative of N4 verbs: たすけます おこします よびます つかまえます ふみます しらせます.",
      items: [
        { id: "ja-u46l2-tasukemasu", type: "vocab", front: "たすけます", reading: "tasukemasu", meaning: "to help", example: { jp: "せんせいがせいとをたすけます。", en: "The teacher helps the student." }, drill: { jp: "ともだちがわたしをたすけます。", en: "My friend helps me." }, accept: ["to rescue","to save","to help out","to come to the aid of"], hint: "tasukemasu — たすける is help that gets someone out of trouble, stronger than てつだう (lending a hand). Ichidan; the causative たすけさせる, 'make/let help', is the form this card drills.", group: "ichidan", conjForm: "causative" },
        { id: "ja-u46l2-okoshimasu", type: "vocab", front: "おこします", reading: "okoshimasu", meaning: "to wake (someone)", example: { jp: "はははこどもをおこします。", en: "The mother wakes the child." }, drill: { jp: "あさにおとうとをおこします。", en: "I wake my little brother in the morning." }, accept: ["to wake up","to rouse","to wake someone","to get someone up"], hint: "okoshimasu — おこす wakes somebody ELSE; おきます is you waking up yourself. Godan; the causative おこさせる, 'make get up', is the form this card drills.", group: "godan", conjForm: "causative" },
        { id: "ja-u46l2-yobimasu", type: "vocab", front: "よびます", reading: "yobimasu", meaning: "to call", example: { jp: "てんいんがきゃくをよびます。", en: "The clerk calls the customer." }, drill: { jp: "タクシーをよびます。", en: "I call a taxi." }, accept: ["to summon","to invite","to call out to","to send for"], hint: "yobimasu — よぶ is calling someone over or sending for something; でんわします is phoning. Godan; the causative よばせる, 'make call', is the form this card drills.", group: "godan", conjForm: "causative" },
        { id: "ja-u46l2-tsukamaemasu", type: "vocab", front: "つかまえます", reading: "tsukamaemasu", meaning: "to catch", example: { jp: "けいかんがどろぼうをつかまえます。", en: "The police officer catches the thief." }, drill: { jp: "にわでむしをつかまえます。", en: "I catch an insect in the garden." }, accept: ["to capture","to grab","to catch hold of","to seize"], hint: "tsukamaemasu — つかまえる catches something that is trying to get away: a thief, an insect, a ball. Ichidan; the causative つかまえさせる, 'make catch', is the form this card drills.", group: "ichidan", conjForm: "causative" },
        { id: "ja-u46l2-fumimasu", type: "vocab", front: "ふみます", reading: "fumimasu", meaning: "to step on", example: { jp: "ブレーキをふみます。", en: "I step on the brake." }, drill: { jp: "にわのはなをふみます。", en: "I step on the flower in the garden." }, accept: ["to tread on","to stamp","to step","to put a foot on"], hint: "fumimasu — ふむ is weight coming down through your foot, so it takes を: ブレーキをふむ. Godan; the imperative ふめ, a blunt 'step on it!', is the form this card drills.", group: "godan", conjForm: "imperative" },
        { id: "ja-u46l2-shirasemasu", type: "vocab", front: "しらせます", reading: "shirasemasu", meaning: "to inform", example: { jp: "けっかをみんなにしらせます。", en: "I inform everyone of the result." }, drill: { jp: "じかんをともだちにしらせます。", en: "I let my friend know the time." }, accept: ["to notify","to let know","to tell","to pass the news to"], hint: "shirasemasu — built straight out of しる, to know: しらせる makes someone know. The person told takes に. Ichidan; the imperative しらせろ, 'tell me!', is the form this card drills.", group: "ichidan", conjForm: "imperative" },
      ],
    },
  ],
};
