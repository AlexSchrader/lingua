// JA Unit 120 — きまり・マナー (Rules, permission, obligation) — B1 / JLPT N3
// Block-2 house rules are documented in unit118.js (plain-form verb headwords,
// kana examples in polite register, two-clause B1 sentences).
//
// Slot scope, corrected. The first draft handed all three modals of this slot
// (～てもいい / ～てはいけない / ～なければならない) to block 3's grammar units to
// avoid double-teaching. Checking the corpus instead of reasoning about it shows
// that was wrong twice over: PERMISSION and PROHIBITION are already taught, at
// ja-u43l1-temoiidesu and ja-u43l1-tehaikemasen, so block 3 was never the risk —
// u43 was, and this unit is right not to repeat them. But OBLIGATION appears
// nowhere in the corpus as a taught item, and none of block 3's five slots
// (Grammar 6 clauses, Grammar 7 passive/causative, Grammar 8 nuance, Register 1
// and 2) names it — while this unit's own とうぜん example USED なければなりません.
// A pattern used in an example and taught by nobody is a gap, not a hand-off, so
// lesson 3 now teaches it, modelled as function-word vocab per CLAUDE.md and
// matching u43's polite headword form for the same pattern family.
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
      canDo: "Talk about the rules somewhere runs by, and what happens when they are broken: きまり せいど げんそく じょうしき いはん ばつ.",
      items: [
        { id: "ja-u120l1-kimari", type: "vocab", front: "きまり", reading: "kimari", meaning: "rule", example: { jp: "がっこうのきまりがきびしいので、みんなはやくねます。", en: "The school rules are strict, so everyone goes to bed early." }, accept: ["regulation", "the rules"] },
        { id: "ja-u120l1-seido", type: "vocab", front: "せいど", reading: "seido", meaning: "system", example: { jp: "あたらしいせいどができたので、せいかつがべんりになりました。", en: "A new system was set up, so life became more convenient." }, accept: ["scheme", "institution"] },
        { id: "ja-u120l1-gensoku", type: "vocab", front: "げんそく", reading: "gensoku", meaning: "general rule", example: { jp: "げんそくとしてしゃしんはだめですが、ここではとってもいいです。", en: "As a general rule photos are not allowed, but here you may take them." }, accept: ["principle", "as a rule"] },
        { id: "ja-u120l1-joshiki", type: "vocab", front: "じょうしき", reading: "jōshiki", meaning: "common sense", example: { jp: "きそくになくても、じょうしきでかんがえればわかります。", en: "Even when it isn't in the rules, you can work it out with common sense." }, accept: ["what everyone knows", "the done thing", "common knowledge"] },
        { id: "ja-u120l1-ihan", type: "vocab", front: "いはん", reading: "ihan", meaning: "violation", example: { jp: "きそくいはんをしたので、せんせいにちゅういされました。", en: "I committed a rule violation, so the teacher warned me." }, accept: ["breach", "infringement", "breaking the rules"] },
        { id: "ja-u120l1-batsu", type: "vocab", front: "ばつ", reading: "batsu", meaning: "penalty", example: { jp: "きそくをまもらないと、ばつがあります。", en: "If you don't follow the rules, there is a penalty." }, accept: ["punishment", "a fine"] },
      ],
    },
    {
      id: "ja-u120l2",
      unit: 120,
      lesson: 2,
      title: "Allowed and not allowed",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what is permitted, what is limited and what is refused outright: にんか ゆるす きょひ かまわない せいげん きんし.",
      items: [
        { id: "ja-u120l2-ninka", type: "vocab", front: "にんか", reading: "ninka", meaning: "official approval", example: { jp: "にんかがおりたので、こうじをはじめられます。", en: "The approval came through, so we can start the work." }, accept: ["authorization", "licence", "permit"] },
        { id: "ja-u120l2-yurusu", type: "vocab", front: "ゆるす", reading: "yurusu", meaning: "allow", example: { jp: "いちどはゆるしましたが、つぎはゆるしません。", en: "I allowed it once, but I won't allow it next time." }, accept: ["to permit", "forgive", "let"] },
        { id: "ja-u120l2-kyohi", type: "vocab", front: "きょひ", reading: "kyohi", meaning: "refusal", example: { jp: "むりなおねがいだったので、きょひされてもしかたがありません。", en: "It was an unreasonable request, so a refusal is only to be expected." }, accept: ["rejection", "turning down", "denial"] },
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
      canDo: "Say what you are obliged to do and go along with what is decided: ぎむ なければなりません とうぜん したがう まかせる しかたない.",
      items: [
        { id: "ja-u120l3-gimu", type: "vocab", front: "ぎむ", reading: "gimu", meaning: "obligation", example: { jp: "こどもががっこうへいくのはぎむですから、やすむときはれんらくします。", en: "School is an obligation for children, so you let them know when they are staying home." }, accept: ["duty", "a must"] },
        { id: "ja-u120l3-nakerebanarimasen", type: "vocab", front: "なければなりません", reading: "nakerebanarimasen", meaning: "have to", example: { jp: "あしたはしけんなので、はやくおきなければなりません。", en: "There's an exam tomorrow, so I have to get up early." }, accept: ["must", "have got to", "it is necessary to"], hint: "ない-form minus い + ければなりません = obligation. のまなければなりません = have to drink. The pair to u43's てもいいです (may) and てはいけません (must not)." },
        { id: "ja-u120l3-tozen", type: "vocab", front: "とうぜん", reading: "tōzen", meaning: "naturally", example: { jp: "やくそくをしたので、とうぜんまもらなければなりません。", en: "I made a promise, so naturally I have to keep it." }, accept: ["of course", "obviously", "only right"] },
        { id: "ja-u120l3-shitagau", type: "vocab", front: "したがう", reading: "shitagau", meaning: "follow", example: { jp: "みんなできめたので、わたしもそれにしたがいます。", en: "We all decided it, so I will go along with it too." }, drill: { jp: "それにしたがう。", en: "I follow it." }, accept: ["to obey", "go along with", "comply"] },
        { id: "ja-u120l3-makaseru", type: "vocab", front: "まかせる", reading: "makaseru", meaning: "leave it to", example: { jp: "しごとをまかせてから、じぶんのじかんがふえました。", en: "Since I left the work to him, my own time has increased." }, accept: ["to entrust", "hand over", "put in someone's hands"] },
        { id: "ja-u120l3-shikatanai", type: "vocab", front: "しかたない", reading: "shikatanai", meaning: "it can't be helped", example: { jp: "あめでしかたなく、いえでほんをよみました。", en: "It couldn't be helped in the rain, so I read a book at home." }, drill: { jp: "あめでしかたない。", en: "It rained so it cannot be helped." }, accept: ["no choice", "nothing to be done", "unavoidable"] },
      ],
    },
    {
      id: "ja-u120l4",
      unit: 120,
      lesson: 4,
      title: "Manners",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about good and bad manners, and make an excuse when you need one: マナー れいぎ ぎょうぎ めいわく いいわけ めんきょ.",
      items: [
        { id: "ja-u120l4-mana", type: "vocab", front: "マナー", reading: "manā", meaning: "manners", example: { jp: "でんしゃのマナーをまもると、みんながきもちよくのれます。", en: "If everyone keeps to train manners, the ride is pleasant for all." }, accept: ["etiquette", "good manners"] },
        { id: "ja-u120l4-reigi", type: "vocab", front: "れいぎ", reading: "reigi", meaning: "courtesy", example: { jp: "かれはれいぎがただしいので、みんなにすかれています。", en: "He is proper in his courtesy, so everyone likes him." }, accept: ["politeness", "propriety", "good form"] },
        { id: "ja-u120l4-gyogi", type: "vocab", front: "ぎょうぎ", reading: "gyōgi", meaning: "behaviour", example: { jp: "こどものぎょうぎがよかったので、みせのひとがほめました。", en: "The child's behaviour was good, so the shop staff praised them." }, accept: ["conduct", "table manners", "deportment"] },
        { id: "ja-u120l4-meiwaku", type: "vocab", front: "めいわく", reading: "meiwaku", meaning: "nuisance", example: { jp: "よるにうるさくすると、となりのひとのめいわくになります。", en: "If you are noisy at night, you become a nuisance to the neighbours." }, accept: ["trouble", "bother", "annoyance"] },
        { id: "ja-u120l4-iiwake", type: "vocab", front: "いいわけ", reading: "iiwake", meaning: "an excuse", example: { jp: "いいわけをするまえに、じじょうをせつめいさせてください。", en: "Before I make any excuses, please let me explain the circumstances." }, accept: ["justification", "making excuses", "explanation"] },
        { id: "ja-u120l4-menkyo", type: "vocab", front: "めんきょ", reading: "menkyo", meaning: "licence", example: { jp: "めんきょをとってから、くるまをかいました。", en: "I got my licence, and then bought a car." }, accept: ["permit", "driving licence", "license"] },
      ],
    },
  ],
};
