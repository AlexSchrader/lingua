// JA Unit 120 — きまり・マナー (Rules, permission, obligation) — B1 / JLPT N3
// Block-2 house rules are documented in unit118.js (ます-form headwords, kana
// examples in polite register, two-clause B1 sentences).
//
// Slot deviation, noted per RUNBOOK §7: the scaffold names this slot "Rules,
// permission, obligation", which in Japanese is carried by modal grammar
// (～てもいい / ～なければならない / ～てはいけない) more than by nouns. Those
// patterns are Strand C and belong to block 3's grammar units, so this unit takes
// the honest lexical half — the nouns and verbs the patterns operate on — and
// leaves the conjugation to the grammar seat. Teaching the same modal twice would
// be worse than splitting it once, deliberately.
export const UNIT120 = {
  id: "ja-u120",
  lang: "ja",
  title: "きまり・マナー",
  order: 120,
  stage: "b1",
  lessons: [
    {
      id: "ja-u120l1",
      unit: 120,
      lesson: 1,
      title: "Rules and law",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the rules somewhere runs by, and what happens when they are broken: きまり せいど げんそく けんり いはん ばつ.",
      items: [
        { id: "ja-u120l1-kimari", type: "vocab", front: "きまり", reading: "kimari", meaning: "rule", example: { jp: "がっこうのきまりはきびしいですが、みんなまもっています。", en: "The school rules are strict, but everyone follows them." }, accept: ["regulation", "the rules"] },
        { id: "ja-u120l1-seido", type: "vocab", front: "せいど", reading: "seido", meaning: "system", example: { jp: "あたらしいせいどができたので、せいかつがべんりになりました。", en: "A new system was set up, so life became more convenient." }, accept: ["scheme", "institution"] },
        { id: "ja-u120l1-gensoku", type: "vocab", front: "げんそく", reading: "gensoku", meaning: "general rule", example: { jp: "げんそくとしてしゃしんはだめですが、ここではとってもいいです。", en: "As a general rule photos are not allowed, but here you may take them." }, accept: ["principle", "as a rule"] },
        { id: "ja-u120l1-kenri", type: "vocab", front: "けんり", reading: "kenri", meaning: "right", example: { jp: "みんなにやすむけんりがあるので、えんりょしないでください。", en: "Everyone has the right to rest, so please don't hold back." }, accept: ["entitlement", "a right"] },
        { id: "ja-u120l1-ihan", type: "vocab", front: "いはん", reading: "ihan", meaning: "violation", example: { jp: "きそくいはんをしたので、せんせいにちゅういされました。", en: "I committed a rule violation, so the teacher warned me." }, accept: ["breach", "infringement", "breaking the rules"] },
        { id: "ja-u120l1-batsu", type: "vocab", front: "ばつ", reading: "batsu", meaning: "penalty", example: { jp: "きそくをまもらないひとにはばつがありますが、あまりきびしくありません。", en: "There is a penalty for people who don't follow the rules, but it isn't very strict." }, accept: ["punishment", "a fine"] },
      ],
    },
    {
      id: "ja-u120l2",
      unit: 120,
      lesson: 2,
      title: "Allowed and not allowed",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what is permitted, what is limited and what is banned: きょか ゆるします みとめます かまわない せいげん きんし.",
      items: [
        { id: "ja-u120l2-kyoka", type: "vocab", front: "きょか", reading: "kyoka", meaning: "permission", example: { jp: "きょかをもらってから、こうえんでうたをうたいました。", en: "I got permission, and then sang in the park." }, accept: ["approval", "authorization"] },
        { id: "ja-u120l2-yurushimasu", type: "vocab", front: "ゆるします", reading: "yurushimasu", meaning: "allow", example: { jp: "いちどはゆるしましたが、つぎはゆるしません。", en: "I allowed it once, but I won't allow it next time." }, accept: ["to permit", "forgive", "let"] },
        { id: "ja-u120l2-mitomemasu", type: "vocab", front: "みとめます", reading: "mitomemasu", meaning: "acknowledge", example: { jp: "じぶんのまちがいをみとめたので、みんながあんしんしました。", en: "He acknowledged his own mistake, so everyone was relieved." }, accept: ["to admit", "recognize", "accept"] },
        { id: "ja-u120l2-kamawanai", type: "vocab", front: "かまわない", reading: "kamawanai", meaning: "don't mind", example: { jp: "おそくなってもかまわないので、ゆっくりきてください。", en: "I don't mind if you're late, so come at your own pace." }, accept: ["it's fine", "no objection", "doesn't matter"] },
        { id: "ja-u120l2-seigen", type: "vocab", front: "せいげん", reading: "seigen", meaning: "limit", example: { jp: "じかんのせいげんがあるので、はやくきめましょう。", en: "There is a time limit, so let's decide quickly." }, accept: ["restriction", "cap"] },
        { id: "ja-u120l2-kinshi", type: "vocab", front: "きんし", reading: "kinshi", meaning: "ban", example: { jp: "ここはたばこがきんしですが、そとではすえます。", en: "Cigarettes are banned here, but you can smoke outside." }, accept: ["prohibition", "forbidden", "no ..."] },
      ],
    },
    {
      id: "ja-u120l3",
      unit: 120,
      lesson: 3,
      title: "What you have to do",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about duty, responsibility and going along with what is decided: ぎむ せきにん とうぜん したがいます まかせます しかたない.",
      items: [
        { id: "ja-u120l3-gimu", type: "vocab", front: "ぎむ", reading: "gimu", meaning: "obligation", example: { jp: "こどもががっこうへいくのはぎむですが、たのしいこともおおいです。", en: "Going to school is an obligation for children, but there is a lot to enjoy too." }, accept: ["duty", "a must"] },
        { id: "ja-u120l3-sekinin", type: "vocab", front: "せきにん", reading: "sekinin", meaning: "responsibility", example: { jp: "これはわたしのせきにんですから、じぶんでかいけつします。", en: "This is my responsibility, so I will solve it myself." }, accept: ["accountability", "liability"] },
        { id: "ja-u120l3-tozen", type: "vocab", front: "とうぜん", reading: "tōzen", meaning: "naturally", example: { jp: "やくそくをしたので、とうぜんまもらなければなりません。", en: "I made a promise, so naturally I have to keep it." }, accept: ["of course", "obviously", "only right"] },
        { id: "ja-u120l3-shitagaimasu", type: "vocab", front: "したがいます", reading: "shitagaimasu", meaning: "follow", example: { jp: "みんなできめたので、わたしもけっていにしたがいます。", en: "We all decided it, so I will follow the decision too." }, accept: ["to obey", "go along with", "comply"] },
        { id: "ja-u120l3-makasemasu", type: "vocab", front: "まかせます", reading: "makasemasu", meaning: "leave it to", example: { jp: "しごとをまかせましたが、ときどきかくにんしています。", en: "I left the work to him, but I check on it now and then." }, accept: ["to entrust", "hand over", "put in someone's hands"] },
        { id: "ja-u120l3-shikatanai", type: "vocab", front: "しかたない", reading: "shikatanai", meaning: "it can't be helped", example: { jp: "あめですからしかたないですが、すこしざんねんです。", en: "It can't be helped because it's raining, but it's a bit of a shame." }, accept: ["no choice", "nothing to be done", "unavoidable"] },
      ],
    },
    {
      id: "ja-u120l4",
      unit: 120,
      lesson: 4,
      title: "Manners",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about good and bad manners, and turn something down politely: マナー れいぎ ぎょうぎ めいわく ことわります めんきょ.",
      items: [
        { id: "ja-u120l4-mana", type: "vocab", front: "マナー", reading: "manā", meaning: "manners", example: { jp: "でんしゃのマナーはたいせつですが、しらないひともいます。", en: "Manners on the train are important, but some people don't know them." }, accept: ["etiquette", "good manners"] },
        { id: "ja-u120l4-reigi", type: "vocab", front: "れいぎ", reading: "reigi", meaning: "courtesy", example: { jp: "かれはれいぎがただしいので、みんなにすかれています。", en: "He is proper in his courtesy, so everyone likes him." }, accept: ["politeness", "propriety", "good form"] },
        { id: "ja-u120l4-gyogi", type: "vocab", front: "ぎょうぎ", reading: "gyōgi", meaning: "behaviour", example: { jp: "こどものぎょうぎがよかったので、みせのひとがほめました。", en: "The child's behaviour was good, so the shop staff praised them." }, accept: ["conduct", "table manners", "deportment"] },
        { id: "ja-u120l4-meiwaku", type: "vocab", front: "めいわく", reading: "meiwaku", meaning: "nuisance", example: { jp: "よるにうるさくすると、となりのひとのめいわくになります。", en: "If you are noisy at night, you become a nuisance to the neighbours." }, accept: ["trouble", "bother", "annoyance"] },
        { id: "ja-u120l4-kotowarimasu", type: "vocab", front: "ことわります", reading: "kotowarimasu", meaning: "decline", example: { jp: "さそわれましたが、いそがしいのでことわりました。", en: "I was invited, but I declined because I was busy." }, accept: ["to refuse", "turn down", "say no"] },
        { id: "ja-u120l4-menkyo", type: "vocab", front: "めんきょ", reading: "menkyo", meaning: "licence", example: { jp: "めんきょをとってから、くるまをかいました。", en: "I got my licence, and then bought a car." }, accept: ["permit", "driving licence", "license"] },
      ],
    },
  ],
};
