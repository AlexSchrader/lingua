// Unit 51 — せいかく・きもち ("Personality & feelings") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// Character traits and emotional-state words, one level deeper than the A1 basics
// (すき / たのしい already taught, so they are avoided here). A mix of な-adjectives,
// い-adjectives, and feeling nouns. Each example is kept short and natural and leans
// on basic vocab + です, so it slots on top of a finished A1.
// NOTE: naturalness-critical — flagged for the batch native review when A2 goes live.
export const UNIT51 = {
  id: "ja-u51",
  lang: "ja",
  title: "せいかく・きもち",
  order: 51,
  stage: "a2",
  lessons: [
    // Lesson 1: good character
    {
      id: "ja-u51l1",
      unit: 51,
      lesson: 1,
      title: "Good character",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe good traits: すなお ねっしん しょうじき ゆうき あかるい おとなしい.",
      items: [
        { id: "ja-u51l1-sunao", type: "vocab", front: "すなお", reading: "sunao", meaning: "obedient", example: { jp: "こどもはすなおです。", en: "The child is obedient." }, accept: ["docile", "honest"] },
        { id: "ja-u51l1-nesshin", type: "vocab", front: "ねっしん", reading: "nesshin", meaning: "eager", example: { jp: "かれはねっしんです。", en: "He is eager." }, accept: ["enthusiastic", "keen"] },
        { id: "ja-u51l1-shojiki", type: "vocab", front: "しょうじき", reading: "shōjiki", meaning: "honest", example: { jp: "しょうじきなひとがすきです。", en: "I like honest people." }, accept: ["honesty", "truthful"] },
        { id: "ja-u51l1-yuki", type: "vocab", front: "ゆうき", reading: "yūki", meaning: "courage", example: { jp: "かれはゆうきがあります。", en: "He has courage." }, accept: ["bravery", "guts"] },
        { id: "ja-u51l1-akarui", type: "vocab", front: "あかるい", reading: "akarui", meaning: "cheerful", example: { jp: "いもうとはあかるいです。", en: "My little sister is cheerful." }, accept: ["bright", "upbeat"] },
        { id: "ja-u51l1-otonashii", type: "vocab", front: "おとなしい", reading: "otonashii", meaning: "quiet", example: { jp: "このいぬはおとなしいです。", en: "This dog is quiet." }, accept: ["gentle", "reserved"] },
      ],
    },
    // Lesson 2: difficult character
    {
      id: "ja-u51l2",
      unit: 51,
      lesson: 2,
      title: "Difficult character",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe tricky traits: きびしい わがまま がんこ けち らんぼう しつこい.",
      items: [
        { id: "ja-u51l2-kibishii", type: "vocab", front: "きびしい", reading: "kibishii", meaning: "strict", example: { jp: "ちちはきびしいです。", en: "My father is strict." }, accept: ["harsh", "severe"] },
        { id: "ja-u51l2-wagamama", type: "vocab", front: "わがまま", reading: "wagamama", meaning: "selfish", example: { jp: "おとうとはわがままです。", en: "My little brother is selfish." }, accept: ["self-centered", "spoiled"] },
        { id: "ja-u51l2-ganko", type: "vocab", front: "がんこ", reading: "ganko", meaning: "stubborn", example: { jp: "そふはがんこです。", en: "My grandfather is stubborn." }, accept: ["obstinate", "headstrong"] },
        { id: "ja-u51l2-kechi", type: "vocab", front: "けち", reading: "kechi", meaning: "stingy", example: { jp: "あにはけちです。", en: "My older brother is stingy." }, accept: ["miserly", "cheap"] },
        { id: "ja-u51l2-ranbo", type: "vocab", front: "らんぼう", reading: "ranbō", meaning: "rough", example: { jp: "あのひとはらんぼうです。", en: "That person is rough." }, accept: ["violent", "reckless"] },
        { id: "ja-u51l2-shitsukoi", type: "vocab", front: "しつこい", reading: "shitsukoi", meaning: "persistent", example: { jp: "あのひとはしつこいです。", en: "That person is pushy." }, accept: ["pushy", "insistent"] },
      ],
    },
    // Lesson 3: worries and unease
    {
      id: "ja-u51l3",
      unit: 51,
      lesson: 3,
      title: "Worries and unease",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name uneasy feelings: なやみ あんしん きんちょう はずかしい ふあん くやしい.",
      items: [
        { id: "ja-u51l3-nayami", type: "vocab", front: "なやみ", reading: "nayami", meaning: "worry", example: { jp: "しごとのなやみがあります。", en: "I have worries about work." }, accept: ["trouble", "problem"] },
        { id: "ja-u51l3-anshin", type: "vocab", front: "あんしん", reading: "anshin", meaning: "relief", example: { jp: "これであんしんです。", en: "Now I feel relieved." }, accept: ["peace of mind", "reassurance"] },
        { id: "ja-u51l3-kincho", type: "vocab", front: "きんちょう", reading: "kinchō", meaning: "nervousness", example: { jp: "みんなのまえできんちょうします。", en: "I get nervous in front of everyone." }, accept: ["tension", "nerves"] },
        { id: "ja-u51l3-hazukashii", type: "vocab", front: "はずかしい", reading: "hazukashii", meaning: "embarrassed", example: { jp: "みんなのまえではずかしいです。", en: "I'm embarrassed in front of everyone." }, accept: ["ashamed", "shy"] },
        { id: "ja-u51l3-fuan", type: "vocab", front: "ふあん", reading: "fuan", meaning: "anxious", example: { jp: "あしたのことがふあんです。", en: "I'm anxious about tomorrow." }, accept: ["uneasy", "anxiety"] },
        { id: "ja-u51l3-kuyashii", type: "vocab", front: "くやしい", reading: "kuyashii", meaning: "frustrating", example: { jp: "まけてくやしいです。", en: "Losing is frustrating." }, accept: ["vexing", "regretful"] },
      ],
    },
    // Lesson 4: reactions and moods
    {
      id: "ja-u51l4",
      unit: 51,
      lesson: 4,
      title: "Reactions and moods",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "React to things: ざんねん びっくり がっかり まんぞく きぶん たいくつ.",
      items: [
        { id: "ja-u51l4-zannen", type: "vocab", front: "ざんねん", reading: "zannen", meaning: "too bad", example: { jp: "それはざんねんです。", en: "That's too bad." }, accept: ["regrettable", "unfortunate"] },
        { id: "ja-u51l4-bikkuri", type: "vocab", front: "びっくり", reading: "bikkuri", meaning: "surprised", example: { jp: "ニュースにびっくりしました。", en: "I was surprised by the news." }, accept: ["startled", "shocked"] },
        { id: "ja-u51l4-gakkari", type: "vocab", front: "がっかり", reading: "gakkari", meaning: "disappointed", example: { jp: "そのはなしにがっかりしました。", en: "I was disappointed by that story." }, accept: ["let down", "discouraged"] },
        { id: "ja-u51l4-manzoku", type: "vocab", front: "まんぞく", reading: "manzoku", meaning: "satisfaction", example: { jp: "このみせにまんぞくです。", en: "I'm satisfied with this shop." }, accept: ["satisfied", "content"] },
        { id: "ja-u51l4-kibun", type: "vocab", front: "きぶん", reading: "kibun", meaning: "mood", example: { jp: "きょうはきぶんがいいです。", en: "I feel good today." }, accept: ["feeling", "spirits"] },
        { id: "ja-u51l4-taikutsu", type: "vocab", front: "たいくつ", reading: "taikutsu", meaning: "boring", example: { jp: "このえいがはたいくつです。", en: "This movie is boring." }, accept: ["bored", "dull"] },
      ],
    },
  ],
};
