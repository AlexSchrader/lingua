// Unit 79 — にんげんかんけい ("Human relationships") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 people, relationships & social life. Vocab items (nouns) with short, natural
// example sentences built only on already-taught vocab + A1/A2 grammar (を/に/と/で
// + です/ます/ました/でした/ています). Flagged for the batch native review when A2
// goes live. Not registered in index.js — validate in isolation.
// ─────────────────────────────────────────────────────────────────────────────
export const UNIT79 = {
  id: "ja-u79",
  lang: "ja",
  title: "にんげんかんけい",
  order: 79,
  stage: "a2",
  lessons: [
    // Lesson 1: people close to you
    {
      id: "ja-u79l1",
      unit: 79,
      lesson: 1,
      title: "People close to you",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the people in your life: こいびと ふうふ ちじん こうはい なかま しんゆう.",
      items: [
        { id: "ja-u79l1-koibito", type: "vocab", front: "こいびと", reading: "koibito", meaning: "partner", example: { jp: "こいびとが います。", en: "I have a partner." }, accept: ["lover", "sweetheart"] },
        { id: "ja-u79l1-fufu", type: "vocab", front: "ふうふ", reading: "fūfu", meaning: "married couple", example: { jp: "あの ふうふは しんせつです。", en: "That married couple is kind." }, accept: ["married couple", "husband and wife"] },
        { id: "ja-u79l1-chijin", type: "vocab", front: "ちじん", reading: "chijin", meaning: "acquaintance", example: { jp: "えきで ちじんに あいました。", en: "I met an acquaintance at the station." }, accept: ["acquaintance", "person I know"] },
        { id: "ja-u79l1-kohai", type: "vocab", front: "こうはい", reading: "kōhai", meaning: "junior", example: { jp: "こうはいと はなします。", en: "I talk with my junior." }, accept: ["junior", "younger colleague"] },
        { id: "ja-u79l1-nakama", type: "vocab", front: "なかま", reading: "nakama", meaning: "companion", example: { jp: "いい なかまが います。", en: "I have good companions." }, accept: ["companion", "comrade"] },
        { id: "ja-u79l1-shinyu", type: "vocab", front: "しんゆう", reading: "shinyū", meaning: "best friend", example: { jp: "かれは わたしの しんゆうです。", en: "He is my best friend." }, accept: ["best friend", "close friend"] },
      ],
    },
    // Lesson 2: roles in society
    {
      id: "ja-u79l2",
      unit: 79,
      lesson: 2,
      title: "Roles in society",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Place people in society: しゃかいじん やくわり しんせき そんけい おさななじみ たにん.",
      items: [
        { id: "ja-u79l2-shakaijin", type: "vocab", front: "しゃかいじん", reading: "shakaijin", meaning: "working adult", example: { jp: "らいねん しゃかいじんに なります。", en: "Next year I'll become a working adult." }, accept: ["working adult", "member of society"] },
        { id: "ja-u79l2-yakuwari", type: "vocab", front: "やくわり", reading: "yakuwari", meaning: "role", example: { jp: "たいせつな やくわりです。", en: "It's an important role." }, accept: ["role", "part"] },
        { id: "ja-u79l2-shinseki", type: "vocab", front: "しんせき", reading: "shinseki", meaning: "relative", example: { jp: "しんせきが あつまりました。", en: "The relatives gathered." }, accept: ["relative", "relatives"] },
        { id: "ja-u79l2-sonkei", type: "vocab", front: "そんけい", reading: "sonkei", meaning: "respect", example: { jp: "せんぱいをそんけいします。", en: "I respect my senior." }, accept: ["esteem", "admiration"] },
        { id: "ja-u79l2-osananajimi", type: "vocab", front: "おさななじみ", reading: "osananajimi", meaning: "childhood friend", example: { jp: "かれは わたしの おさななじみです。", en: "He is my childhood friend." }, accept: ["childhood friend", "friend from childhood"] },
        { id: "ja-u79l2-tanin", type: "vocab", front: "たにん", reading: "tanin", meaning: "stranger", example: { jp: "あの ひとは たにんです。", en: "That person is a stranger." }, accept: ["stranger", "other people"] },
      ],
    },
    // Lesson 3: social interactions
    {
      id: "ja-u79l3",
      unit: 79,
      lesson: 3,
      title: "Social interactions",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Handle social moments: れんあい しょうかい やくそく しょうたい けんか なかなおり.",
      items: [
        { id: "ja-u79l3-renai", type: "vocab", front: "れんあい", reading: "renai", meaning: "romance", example: { jp: "れんあいはむずかしいです。", en: "Romance is difficult." }, accept: ["love", "romantic relationship"] },
        { id: "ja-u79l3-shokai", type: "vocab", front: "しょうかい", reading: "shōkai", meaning: "introduction", example: { jp: "ともだちを しょうかいします。", en: "I introduce a friend." }, accept: ["introduction", "introducing"] },
        { id: "ja-u79l3-yakusoku", type: "vocab", front: "やくそく", reading: "yakusoku", meaning: "promise", example: { jp: "ともだちと やくそくしました。", en: "I made a promise with a friend." }, accept: ["promise", "appointment"] },
        { id: "ja-u79l3-shotai", type: "vocab", front: "しょうたい", reading: "shōtai", meaning: "invitation", example: { jp: "いえに しょうたいします。", en: "I invite them to my house." }, accept: ["invitation", "invite"] },
        { id: "ja-u79l3-kenka", type: "vocab", front: "けんか", reading: "kenka", meaning: "quarrel", example: { jp: "ともだちと けんかしました。", en: "I had a fight with a friend." }, accept: ["fight", "argument"] },
        { id: "ja-u79l3-nakanaori", type: "vocab", front: "なかなおり", reading: "nakanaori", meaning: "reconciliation", example: { jp: "あとで なかなおりしました。", en: "We made up afterwards." }, accept: ["making up", "reconciliation"] },
      ],
    },
    // Lesson 4: bonds and feelings
    {
      id: "ja-u79l4",
      unit: 79,
      lesson: 4,
      title: "Bonds and feelings",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about closeness: せわ こうさい であい わかれ しんらい りこん.",
      items: [
        { id: "ja-u79l4-sewa", type: "vocab", front: "せわ", reading: "sewa", meaning: "care", example: { jp: "こどもの せわを します。", en: "I take care of the child." }, accept: ["looking after", "help"] },
        { id: "ja-u79l4-kosai", type: "vocab", front: "こうさい", reading: "kōsai", meaning: "dating", example: { jp: "かのじょと こうさいしています。", en: "I'm dating her." }, accept: ["going out", "association"] },
        { id: "ja-u79l4-deai", type: "vocab", front: "であい", reading: "deai", meaning: "encounter", example: { jp: "いい であいでした。", en: "It was a good encounter." }, accept: ["encounter", "meeting"] },
        { id: "ja-u79l4-wakare", type: "vocab", front: "わかれ", reading: "wakare", meaning: "parting", example: { jp: "わかれは かなしいです。", en: "Parting is sad." }, accept: ["farewell", "separation"] },
        { id: "ja-u79l4-shinrai", type: "vocab", front: "しんらい", reading: "shinrai", meaning: "trust", example: { jp: "ともだちをしんらいします。", en: "I trust my friend." }, accept: ["reliance", "confidence"] },
        { id: "ja-u79l4-rikon", type: "vocab", front: "りこん", reading: "rikon", meaning: "divorce", example: { jp: "りこんはかなしいです。", en: "Divorce is sad." }, accept: ["getting divorced"] },
      ],
    },
  ],
};
