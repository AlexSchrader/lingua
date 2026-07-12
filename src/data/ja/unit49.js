// Unit 49 — どうし・うけみ ("Passive verbs") — A2 / JLPT N4  ★ CONJUGATION DRILL ★
// ─────────────────────────────────────────────────────────────────────────────
// Feeds the "conjugate card": each item is a verb in ～ます form tagged with its
// verb class (`group`) and a target `conjForm`. The engine computes the correct
// conjugated answer from group + conjForm; the learner types it. Every item MUST
// carry BOTH `group` and `conjForm`. Headword = the polite ～ます form.
// NOTE: naturalness-critical — flagged for the batch native review.
export const UNIT49 = {
  id: "ja-u49",
  lang: "ja",
  title: "どうし・うけみ",
  order: 49,
  stage: "a2",
  lessons: [
    {
      id: "ja-u49l1",
      unit: 49,
      lesson: 1,
      title: "Passive form (～られる)",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Form the passive of N4 verbs: しかります ほめます たのみます ぬすみます こわします だまします.",
      items: [
        { id: "ja-u49l1-shikarimasu", type: "vocab", front: "しかります", reading: "shikarimasu", meaning: "to scold", example: { jp: "せんせいがせいとをしかります。", en: "The teacher scolds the student." }, accept: ["to tell off", "to reprimand"], hint: "godan; drilled in the passive — 'get scolded'", group: "godan", conjForm: "passive" },
        { id: "ja-u49l1-homemasu", type: "vocab", front: "ほめます", reading: "homemasu", meaning: "to praise", example: { jp: "ぶちょうがぶかをほめます。", en: "The manager praises the staff." }, accept: ["to compliment", "to commend"], hint: "ichidan; drilled in the passive — 'get praised'", group: "ichidan", conjForm: "passive" },
        { id: "ja-u49l1-tanomimasu", type: "vocab", front: "たのみます", reading: "tanomimasu", meaning: "to request", example: { jp: "ともだちにしごとをたのみます。", en: "I ask a friend to do a job." }, accept: ["to ask", "to order"], hint: "godan; drilled in the passive — 'be asked'", group: "godan", conjForm: "passive" },
        { id: "ja-u49l1-nusumimasu", type: "vocab", front: "ぬすみます", reading: "nusumimasu", meaning: "to steal", example: { jp: "どろぼうがおかねをぬすみます。", en: "A thief steals the money." }, accept: ["to rob", "to swipe"], hint: "godan; drilled in the passive — 'get stolen'", group: "godan", conjForm: "passive" },
        { id: "ja-u49l1-kowashimasu", type: "vocab", front: "こわします", reading: "kowashimasu", meaning: "to break", example: { jp: "こどもがおもちゃをこわします。", en: "The child breaks the toy." }, accept: ["to destroy", "to smash"], hint: "godan; drilled in the passive — 'get broken'", group: "godan", conjForm: "passive" },
        { id: "ja-u49l1-damashimasu", type: "vocab", front: "だまします", reading: "damashimasu", meaning: "to trick", example: { jp: "わるいひとがきゃくをだまします。", en: "A bad person tricks the customer." }, accept: ["to deceive", "to fool"], hint: "godan; drilled in the passive — 'get tricked'", group: "godan", conjForm: "passive" },
      ],
    },
    {
      id: "ja-u49l2",
      unit: 49,
      lesson: 2,
      title: "Causative & command",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Form the causative and imperative of N4 verbs: たすけます おこします よびます つかまえます ふみます しらせます.",
      items: [
        { id: "ja-u49l2-tasukemasu", type: "vocab", front: "たすけます", reading: "tasukemasu", meaning: "to help", example: { jp: "せんせいがせいとをたすけます。", en: "The teacher helps the student." }, accept: ["to rescue", "to save"], hint: "ichidan; drilled in the causative — 'make/let help'", group: "ichidan", conjForm: "causative" },
        { id: "ja-u49l2-okoshimasu", type: "vocab", front: "おこします", reading: "okoshimasu", meaning: "to wake (someone)", example: { jp: "はははこどもをおこします。", en: "The mother wakes the child." }, accept: ["to wake up", "to rouse"], hint: "godan; drilled in the causative — 'make get up'", group: "godan", conjForm: "causative" },
        { id: "ja-u49l2-yobimasu", type: "vocab", front: "よびます", reading: "yobimasu", meaning: "to call", example: { jp: "てんいんがきゃくをよびます。", en: "The clerk calls the customer." }, accept: ["to summon", "to invite"], hint: "godan; drilled in the causative — 'make call'", group: "godan", conjForm: "causative" },
        { id: "ja-u49l2-tsukamaemasu", type: "vocab", front: "つかまえます", reading: "tsukamaemasu", meaning: "to catch", example: { jp: "けいかんがどろぼうをつかまえます。", en: "The police officer catches the thief." }, accept: ["to capture", "to grab"], hint: "ichidan; drilled in the causative — 'make catch'", group: "ichidan", conjForm: "causative" },
        { id: "ja-u49l2-fumimasu", type: "vocab", front: "ふみます", reading: "fumimasu", meaning: "to step on", example: { jp: "ブレーキをふみます。", en: "I step on the brake." }, accept: ["to tread on", "to stamp"], hint: "godan; drilled in the imperative — 'step!'", group: "godan", conjForm: "imperative" },
        { id: "ja-u49l2-shirasemasu", type: "vocab", front: "しらせます", reading: "shirasemasu", meaning: "to inform", example: { jp: "けっかをみんなにしらせます。", en: "I inform everyone of the result." }, accept: ["to notify", "to let know"], hint: "ichidan; drilled in the imperative — 'tell me!'", group: "ichidan", conjForm: "imperative" },
      ],
    },
  ],
};
