// Unit 22 — かつどう ("Daily activities") — A2 / JLPT N4  ★ DRAFT — NOT LIVE ★
// ─────────────────────────────────────────────────────────────────────────────
// This is the FIRST A2 unit and is intentionally NOT registered in index.js — it is
// NOT seeded, NOT on the Ladder, and does NOT affect A1. A2 is being built ahead of
// time but stays off the app until A1 is native-reviewed and signed off. To activate
// (once A1 is clean): import it in src/data/index.js and add UNIT22 to the UNITS
// array — then it joins the normal gate. Until then, validate it in isolation with a
// node one-liner that runs validateContent over [...A1 units, UNIT22].
// ─────────────────────────────────────────────────────────────────────────────
// N4 everyday verbs, grouped by theme. Modeled like A1 verbs (vocab items, the ～ます
// form as the headword). Every example uses only A1 vocab + A1 grammar (を/に/で/と/
// まで + です/ます), so it slots directly on top of a finished A1.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
export const UNIT22 = {
  id: "ja-u22",
  lang: "ja",
  title: "かつどう",
  order: 22,
  stage: "a2",
  lessons: [
    // Lesson 1: getting around
    {
      id: "ja-u22l1",
      unit: 22,
      lesson: 1,
      title: "Getting around",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about moving around: あるきます はしります およぎます のぼります わたります とまります.",
      items: [
        { id: "ja-u22l1-arukimasu", type: "vocab", front: "あるきます", reading: "arukimasu", meaning: "walk", example: { jp: "まいにち、あるきます。", en: "I walk every day." }, accept: ["to walk", "walks"] },
        { id: "ja-u22l1-hashirimasu", type: "vocab", front: "はしります", reading: "hashirimasu", meaning: "run", example: { jp: "こうえんをはしります。", en: "I run in the park." }, accept: ["to run", "runs"] },
        { id: "ja-u22l1-oyogimasu", type: "vocab", front: "およぎます", reading: "oyogimasu", meaning: "swim", example: { jp: "プールでおよぎます。", en: "I swim in the pool." }, accept: ["to swim", "swims"] },
        { id: "ja-u22l1-noborimasu", type: "vocab", front: "のぼります", reading: "noborimasu", meaning: "climb", example: { jp: "やまにのぼります。", en: "I climb the mountain." }, accept: ["to climb", "go up", "climbs"] },
        { id: "ja-u22l1-watarimasu", type: "vocab", front: "わたります", reading: "watarimasu", meaning: "cross", example: { jp: "はしをわたります。", en: "I cross the bridge." }, accept: ["to cross", "go across"] },
        { id: "ja-u22l1-tomarimasu", type: "vocab", front: "とまります", reading: "tomarimasu", meaning: "stay", example: { jp: "ホテルにとまります。", en: "I stay at a hotel." }, accept: ["to stay", "stop", "stays"] },
      ],
    },
    // Lesson 2: chores at home
    {
      id: "ja-u22l2",
      unit: 22,
      lesson: 2,
      title: "Chores at home",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Do the housework: そうじします せんたくします あらいます かたづけます すてます なおします.",
      items: [
        { id: "ja-u22l2-sojishimasu", type: "vocab", front: "そうじします", reading: "sōjishimasu", meaning: "clean", example: { jp: "へやをそうじします。", en: "I clean the room." }, accept: ["to clean", "tidy", "cleans"] },
        { id: "ja-u22l2-sentakushimasu", type: "vocab", front: "せんたくします", reading: "sentakushimasu", meaning: "do laundry", example: { jp: "まいにちせんたくします。", en: "I do laundry every day." }, accept: ["to do the washing", "wash clothes"] },
        { id: "ja-u22l2-araimasu", type: "vocab", front: "あらいます", reading: "araimasu", meaning: "wash", example: { jp: "くるまをあらいます。", en: "I wash the car." }, accept: ["to wash", "washes"] },
        { id: "ja-u22l2-katazukemasu", type: "vocab", front: "かたづけます", reading: "katazukemasu", meaning: "tidy up", example: { jp: "へやをかたづけます。", en: "I tidy up the room." }, accept: ["to tidy", "put away", "clear up"] },
        { id: "ja-u22l2-sutemasu", type: "vocab", front: "すてます", reading: "sutemasu", meaning: "throw away", example: { jp: "ふるいものをすてます。", en: "I throw away old things." }, accept: ["to throw out", "discard", "dispose of"] },
        { id: "ja-u22l2-naoshimasu", type: "vocab", front: "なおします", reading: "naoshimasu", meaning: "fix", example: { jp: "くるまをなおします。", en: "I fix the car." }, accept: ["to repair", "mend", "correct"] },
      ],
    },
    // Lesson 3: dealing with people
    {
      id: "ja-u22l3",
      unit: 22,
      lesson: 3,
      title: "With other people",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Interact with people: おくります こたえます てつだいます さがします おしえます ならびます.",
      items: [
        { id: "ja-u22l3-okurimasu", type: "vocab", front: "おくります", reading: "okurimasu", meaning: "send", example: { jp: "てがみをおくります。", en: "I send a letter." }, accept: ["to send", "see off", "sends"] },
        { id: "ja-u22l3-kotaemasu", type: "vocab", front: "こたえます", reading: "kotaemasu", meaning: "answer", example: { jp: "せんせいにこたえます。", en: "I answer the teacher." }, accept: ["to answer", "reply", "respond"] },
        { id: "ja-u22l3-tetsudaimasu", type: "vocab", front: "てつだいます", reading: "tetsudaimasu", meaning: "help", example: { jp: "ともだちをてつだいます。", en: "I help my friend." }, accept: ["to help", "assist", "helps"] },
        { id: "ja-u22l3-sagashimasu", type: "vocab", front: "さがします", reading: "sagashimasu", meaning: "look for", example: { jp: "かぎをさがします。", en: "I look for the key." }, accept: ["to search", "search for", "seek"] },
        { id: "ja-u22l3-oshiemasu", type: "vocab", front: "おしえます", reading: "oshiemasu", meaning: "teach", example: { jp: "えいごをおしえます。", en: "I teach English." }, accept: ["to teach", "tell", "show"] },
        { id: "ja-u22l3-narabimasu", type: "vocab", front: "ならびます", reading: "narabimasu", meaning: "line up", example: { jp: "みせのまえにならびます。", en: "I line up in front of the shop." }, accept: ["to queue", "stand in line", "line up"] },
      ],
    },
    // Lesson 4: free time
    {
      id: "ja-u22l4",
      unit: 22,
      lesson: 4,
      title: "Free time",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about leisure: うたいます おどります りょこうします とります あつめます いそぎます.",
      items: [
        { id: "ja-u22l4-utaimasu", type: "vocab", front: "うたいます", reading: "utaimasu", meaning: "sing", example: { jp: "みんなでうたいます。", en: "We all sing together." }, accept: ["to sing", "sings"] },
        { id: "ja-u22l4-odorimasu", type: "vocab", front: "おどります", reading: "odorimasu", meaning: "dance", example: { jp: "ともだちとおどります。", en: "I dance with a friend." }, accept: ["to dance", "dances"] },
        { id: "ja-u22l4-ryokoshimasu", type: "vocab", front: "りょこうします", reading: "ryokōshimasu", meaning: "travel", example: { jp: "にほんをりょこうします。", en: "I travel around Japan." }, accept: ["to travel", "take a trip", "tour"] },
        { id: "ja-u22l4-torimasu", type: "vocab", front: "とります", reading: "torimasu", meaning: "take", example: { jp: "メモをとります。", en: "I take a memo." }, accept: ["to take", "take (a photo)", "takes"] },
        { id: "ja-u22l4-atsumemasu", type: "vocab", front: "あつめます", reading: "atsumemasu", meaning: "collect", example: { jp: "コインをあつめます。", en: "I collect coins." }, accept: ["to collect", "gather", "collects"] },
        { id: "ja-u22l4-isogimasu", type: "vocab", front: "いそぎます", reading: "isogimasu", meaning: "hurry", example: { jp: "えきまでいそぎます。", en: "I hurry to the station." }, accept: ["to hurry", "rush", "hurries"] },
      ],
    },
  ],
};
