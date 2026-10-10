// Unit 79 — にんげんかんけい ("Human relationships") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 people, relationships & social life. Vocab items (nouns) with short, natural
// example sentences built only on already-taught vocab + A1/A2 grammar (を/に/と/で
// + です/ます/ました/でした/ています).
// NATURALNESS: checked by the LLM naturalness review (content-auditor) plus Alex's
// Dev-Mode playtest. A human native review is a nice-to-have, NOT a blocker
// (CLAUDE.md, Alex 2026-07-12).
// (This header used to end "Not registered in index.js — validate in isolation."
// That is false: the unit IS registered in src/data/ja/index.js and ships.
// Corrected 2026-10-10.)
// DRILL SHAPE: every drill leads with its own front + a core particle, which is what
// ja sentenceTokens tiles. practice() REPLACES the example, so any other shape would
// strip sentence:build off an item whose example had it. Drills are written WITHOUT
// the internal spaces this unit's examples use, matching the rest of the ja corpus.
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
        { id: "ja-u79l1-koibito", type: "vocab", front: "こいびと", reading: "koibito", meaning: "partner", example: { jp: "こいびとが います。", en: "I have a partner." }, drill: { jp: "こいびとにあいます。", en: "I meet my partner." }, accept: ["lover", "sweetheart", "boyfriend or girlfriend", "the one you're seeing"], hint: "koibito — こい (romantic love) + ひと (person), with the ひ voicing to び. Gender-neutral, which English 'boyfriend/girlfriend' is not. Saying it of someone is a real claim about the relationship." },
        { id: "ja-u79l1-fufu", type: "vocab", front: "ふうふ", reading: "fūfu", meaning: "married couple", example: { jp: "あの ふうふは しんせつです。", en: "That married couple is kind." }, drill: { jp: "ふうふがみせにいます。", en: "A married couple is in the shop." }, accept: ["married couple", "husband and wife", "couple", "a married pair"], hint: "fūfu — ふう (husband) + ふ (wife): the two of them as one unit. Long ū: fū-fu, and the two f-sounds in a row are the hard part. It means MARRIED; an unmarried pair is こいびと, the first card of this lesson." },
        { id: "ja-u79l1-chijin", type: "vocab", front: "ちじん", reading: "chijin", meaning: "acquaintance", example: { jp: "えきで ちじんに あいました。", en: "I met an acquaintance at the station." }, drill: { jp: "ちじんにメールをおくります。", en: "I send an email to an acquaintance." }, accept: ["acquaintance", "person I know", "someone I know of", "a contact"], hint: "chijin — ち (know) + じん (person): a person you know, with no warmth implied. Weaker than ともだち and far weaker than しんゆう later in this lesson. The ち of ちしき, u51." },
        { id: "ja-u79l1-kohai", type: "vocab", front: "こうはい", reading: "kōhai", meaning: "junior", example: { jp: "こうはいと はなします。", en: "I talk with my junior." }, drill: { jp: "こうはいをおしえます。", en: "I teach my junior." }, accept: ["junior", "younger colleague", "someone below you in years", "a more junior member"], hint: "kōhai — こう (after) + はい (fellow): the one who came after you. Long ō: kō-hai. The exact counterpart of せんぱい from u3, and the pair governs how you speak to someone in Japan." },
        { id: "ja-u79l1-nakama", type: "vocab", front: "なかま", reading: "nakama", meaning: "companion", example: { jp: "いい なかまが います。", en: "I have good companions." }, drill: { jp: "なかまとはたらきます。", en: "I work with my companions." }, accept: ["companion", "comrade", "a fellow member", "one of the group"], hint: "nakama — なか (inside) + ま (space): someone inside your circle. It implies shared purpose — a team, a crew, a band — more than friendship. Singular and plural look the same." },
        { id: "ja-u79l1-shinyu", type: "vocab", front: "しんゆう", reading: "shinyū", meaning: "best friend", example: { jp: "かれは わたしの しんゆうです。", en: "He is my best friend." }, drill: { jp: "しんゆうにそうだんします。", en: "I talk it over with my best friend." }, accept: ["best friend", "close friend", "one's closest friend", "a true friend"], hint: "shinyū — しん (intimate) + ゆう (friend). Long ū: shin-yū. The strongest of this lesson's four friendship words: ちじん < ともだち < なかま < しんゆう." },
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
        { id: "ja-u79l2-shakaijin", type: "vocab", front: "しゃかいじん", reading: "shakaijin", meaning: "working adult", example: { jp: "らいねん しゃかいじんに なります。", en: "Next year I'll become a working adult." }, drill: { jp: "しゃかいじんはいそがしいです。", en: "Working adults are busy." }, accept: ["working adult", "member of society", "someone in employment", "a professional"], hint: "shakaijin — しゃかい (society, u49) + じん (person): a person of society, i.e. someone who has left education and works. Becoming one is a recognised life stage in Japan with its own rituals." },
        { id: "ja-u79l2-yakuwari", type: "vocab", front: "やくわり", reading: "yakuwari", meaning: "role", example: { jp: "たいせつな やくわりです。", en: "It's an important role." }, drill: { jp: "やくわりをきめます。", en: "We decide the roles." }, accept: ["role", "part", "one's function", "what one is responsible for"], hint: "yakuwari — やく (duty) + わり (share): your share of the duty. The same やく as やくしょ (u49) and やくそく later in this unit — やく always means an obligation." },
        { id: "ja-u79l2-shinseki", type: "vocab", front: "しんせき", reading: "shinseki", meaning: "relative", example: { jp: "しんせきが あつまりました。", en: "The relatives gathered." }, drill: { jp: "しんせきのいえにいきます。", en: "I go to a relative's house." }, accept: ["relative", "relatives", "extended family", "kin"], hint: "shinseki — しん (close) + せき (relation): family beyond your household — aunts, cousins, in-laws. かぞく from u3 is the people you live with; しんせき is everyone else related to you." },
        { id: "ja-u79l2-sonkei", type: "vocab", front: "そんけい", reading: "sonkei", meaning: "respect", example: { jp: "せんぱいをそんけいします。", en: "I respect my senior." }, drill: { jp: "そんけいのきもちがあります。", en: "I have a feeling of respect." }, accept: ["esteem", "admiration", "respect", "looking up to someone"], hint: "sonkei — そん (revere) + けい (respect): both halves mean respect. Used with します, and who you respect takes を. It looks UPWARD, where かんしん from u70 looks slightly down." },
        { id: "ja-u79l2-osananajimi", type: "vocab", front: "おさななじみ", reading: "osananajimi", meaning: "childhood friend", example: { jp: "かれは わたしの おさななじみです。", en: "He is my childhood friend." }, drill: { jp: "おさななじみとはなします。", en: "I talk with my childhood friend." }, accept: ["childhood friend", "friend from childhood", "someone you grew up with", "an old playmate"], hint: "osananajimi — おさな (young childhood) + なじみ (familiar): someone familiar since you were small. Six beats and the longest front in this unit; break it as o-sana-najimi." },
        { id: "ja-u79l2-tanin", type: "vocab", front: "たにん", reading: "tanin", meaning: "stranger", example: { jp: "あの ひとは たにんです。", en: "That person is a stranger." }, drill: { jp: "たにんにしんせつです。", en: "I'm kind to strangers." }, accept: ["stranger", "other people", "someone unrelated to you", "an outsider"], hint: "tanin — た (other) + にん (person): a person who is not you and not yours. ⚠️ Colder than English 'stranger': calling family たにんみたい ('like strangers') means the bond has broken." },
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
        { id: "ja-u79l3-renai", type: "vocab", front: "れんあい", reading: "renai", meaning: "romance", example: { jp: "れんあいはむずかしいです。", en: "Romance is difficult." }, drill: { jp: "れんあいのえいがをみます。", en: "I watch a romance film." }, accept: ["love", "romantic relationship", "being in love", "a love affair"], hint: "renai — れん (yearn) + あい (love): romantic love as a phenomenon, so れんあいえいが is a romance film. あい alone is love in general; れんあい is specifically the romantic kind." },
        { id: "ja-u79l3-shokai", type: "vocab", front: "しょうかい", reading: "shōkai", meaning: "introduction", example: { jp: "ともだちを しょうかいします。", en: "I introduce a friend." }, drill: { jp: "しょうかいをかちょうにたのみます。", en: "I ask the section chief for an introduction." }, accept: ["introduction", "introducing", "an introduction to someone", "a referral"], hint: "shōkai — しょう (continue) + かい (mediate): standing between two people so they can meet. Long ō: shō-kai. Used with します. じこしょうかい, introducing yourself, is the form you meet first." },
        { id: "ja-u79l3-yakusoku", type: "vocab", front: "やくそく", reading: "yakusoku", meaning: "promise", example: { jp: "ともだちと やくそくしました。", en: "I made a promise with a friend." }, drill: { jp: "やくそくをまもります。", en: "I keep my promise." }, accept: ["promise", "appointment", "an arrangement", "one's word"], hint: "yakusoku — やく (duty) + そく (bind): a binding duty. It covers a promise AND an arrangement to meet, so やくそくがある can mean 'I have plans'. Kept with まもります, from u45." },
        { id: "ja-u79l3-shotai", type: "vocab", front: "しょうたい", reading: "shōtai", meaning: "invitation", example: { jp: "いえに しょうたいします。", en: "I invite them to my house." }, drill: { jp: "しょうたいをもらいました。", en: "I received an invitation." }, accept: ["invitation", "invite", "inviting someone", "being asked along"], hint: "shōtai — しょう (call) + たい (receive): calling someone to you. Long ō: shō-tai. More formal than さそいます from u45, which is casually asking a friend along." },
        { id: "ja-u79l3-kenka", type: "vocab", front: "けんか", reading: "kenka", meaning: "quarrel", example: { jp: "ともだちと けんかしました。", en: "I had a fight with a friend." }, drill: { jp: "けんかがおわりました。", en: "The quarrel is over." }, accept: ["fight", "argument", "a row", "falling out"], hint: "kenka — a row between people, verbal or physical. Who you fight with takes と. Its resolution なかなおり is the next card, and the pair is the whole arc of this lesson." },
        { id: "ja-u79l3-nakanaori", type: "vocab", front: "なかなおり", reading: "nakanaori", meaning: "reconciliation", example: { jp: "あとで なかなおりしました。", en: "We made up afterwards." }, drill: { jp: "なかなおりをともだちとします。", en: "I make up with a friend." }, accept: ["making up", "reconciliation", "patching things up", "becoming friends again"], hint: "nakanaori — なか (the relationship) + なおり (mending): mending the relationship, from なおる, to heal. The repair of the けんか on the card before. Who you make up with takes と." },
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
        { id: "ja-u79l4-sewa", type: "vocab", front: "せわ", reading: "sewa", meaning: "care", example: { jp: "こどもの せわを します。", en: "I take care of the child." }, drill: { jp: "せわがたいへんです。", en: "The care is hard work." }, accept: ["looking after", "help", "taking care of someone", "attention and support"], hint: "sewa — looking after someone who needs it: a child, a pet, a sick relative. おせわになりました, thanking someone for their care, is one of the most-used set phrases in Japanese." },
        { id: "ja-u79l4-kosai", type: "vocab", front: "こうさい", reading: "kōsai", meaning: "dating", example: { jp: "かのじょと こうさいしています。", en: "I'm dating her." }, drill: { jp: "こうさいをかぞくにはなします。", en: "I tell my family about the relationship." }, accept: ["going out", "association", "seeing someone", "a relationship"], hint: "kōsai — こう (exchange) + さい (mix): keeping company. Long ō: kō-sai. More formal and more committed-sounding than デート; こうさいしています is how you state you are in a relationship." },
        { id: "ja-u79l4-deai", type: "vocab", front: "であい", reading: "deai", meaning: "encounter", example: { jp: "いい であいでした。", en: "It was a good encounter." }, drill: { jp: "であいをたいせつにします。", en: "I treasure the encounter." }, accept: ["encounter", "meeting", "a chance meeting", "how you met"], hint: "deai — で (come out) + あい (meet): the moment of meeting, carrying a sense of fate. Its counterpart わかれ, parting, is two cards along — Japanese treats both as events worth naming." },
        { id: "ja-u79l4-wakare", type: "vocab", front: "わかれ", reading: "wakare", meaning: "parting", example: { jp: "わかれは かなしいです。", en: "Parting is sad." }, drill: { jp: "わかれのことばをはなします。", en: "I say words of farewell." }, accept: ["farewell", "separation", "saying goodbye", "a goodbye"], hint: "wakare — the noun of わかれる, to part. The counterpart of であい two cards back. わかれのことば is the set phrase for parting words at a leaving party." },
        { id: "ja-u79l4-shinrai", type: "vocab", front: "しんらい", reading: "shinrai", meaning: "trust", example: { jp: "ともだちをしんらいします。", en: "I trust my friend." }, drill: { jp: "しんらいがたいせつです。", en: "Trust is important." }, accept: ["reliance", "confidence", "trust", "faith in someone"], hint: "shinrai — しん (believe) + らい (rely): believing and relying. Used with します, and who you trust takes を. The same しん as しんゆう in lesson 1 and しんせき in lesson 2." },
        { id: "ja-u79l4-rikon", type: "vocab", front: "りこん", reading: "rikon", meaning: "divorce", example: { jp: "りこんはかなしいです。", en: "Divorce is sad." }, drill: { jp: "りこんをきめました。", en: "They decided on a divorce." }, accept: ["getting divorced", "a divorce", "ending a marriage", "splitting up"], hint: "rikon — り (separate) + こん (marriage): undoing the marriage. Used with します. Its opposite けっこん, marriage, uses the same こん, so one element gives you both." },
      ],
    },
  ],
};
