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
        { id: "ja-u120l1-kimari", type: "vocab", front: "きまり", reading: "kimari", meaning: "rule (a settled rule)", example: { jp: "がっこうのきまりがきびしいので、みんなはやくねます。", en: "The school rules are strict, so everyone goes to bed early." }, drill: { jp: "きまりをまもります。", en: "I keep to the rules." }, accept: ["regulation", "the rules", "a settled rule"], hint: "ki-MA-ri — three beats. The noun of きまる: a thing that has been settled. きそく is a written regulation; きまり can be an unwritten house rule nobody ever typed up." },
        { id: "ja-u120l1-seido", type: "vocab", front: "せいど", reading: "seido", meaning: "system", example: { jp: "あたらしいせいどができたので、せいかつがべんりになりました。", en: "A new system was set up, so life became more convenient." }, drill: { jp: "せいどがかわりました。", en: "The system has changed." }, accept: ["scheme", "institution", "a system"], hint: "SEI-do — two beats, sei said as written. せい is to establish and ど is a measure, so it is a whole arrangement set up by rule. しくみ is how it works; せいど is that it was decided." },
        { id: "ja-u120l1-gensoku", type: "vocab", front: "げんそく", reading: "gensoku", meaning: "general rule", example: { jp: "げんそくとしてしゃしんはだめですが、ここではとってもいいです。", en: "As a general rule photos are not allowed, but here you may take them." }, drill: { jp: "げんそくはかわりません。", en: "The general rule does not change." }, accept: ["principle", "as a rule", "the basic rule"], hint: "gen-SO-ku — three beats, the ん held. げん is original and そく is a rule, so it is the rule before the exceptions. 「げんそくとして」 all but promises an exception is coming." },
        { id: "ja-u120l1-joshiki", type: "vocab", front: "じょうしき", reading: "jōshiki", meaning: "common sense", example: { jp: "きそくになくても、じょうしきでかんがえればわかります。", en: "Even when it isn't in the rules, you can work it out with common sense." }, drill: { jp: "じょうしきがたいせつです。", en: "Common sense matters." }, accept: ["what everyone knows", "the done thing", "common knowledge"], hint: "jō-SHI-ki — three beats, the first long. じょう is ordinary and しき is knowledge, so it is what everyone is assumed to know. 「じょうしきが ない」 is a sharp criticism in Japanese." },
        { id: "ja-u120l1-ihan", type: "vocab", front: "いはん", reading: "ihan", meaning: "violation", example: { jp: "きそくいはんをしたので、せんせいにちゅういされました。", en: "I committed a rule violation, so the teacher warned me." }, drill: { jp: "いはんはゆるされません。", en: "A violation will not be permitted." }, accept: ["breach", "infringement", "breaking the rules"], hint: "i-HAN — two beats, the ん held. い is to go against and はん is to oppose, so it is acting against a rule. It attaches to the rule broken: きそくいはん, スピードいはん." },
        { id: "ja-u120l1-batsu", type: "vocab", front: "ばつ", reading: "batsu", meaning: "penalty", example: { jp: "きそくをまもらないと、ばつがあります。", en: "If you don't follow the rules, there is a penalty." }, drill: { jp: "ばつをうけました。", en: "He received a penalty." }, accept: ["punishment", "a fine", "a sanction"], hint: "BA-tsu — two beats. ⚠️ Also the name of the ✗ mark on a test paper, where まる is the ✓. So a Japanese child meets ばつ long before any legal sense of it." },
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
        { id: "ja-u120l2-ninka", type: "vocab", front: "にんか", reading: "ninka", meaning: "official approval", example: { jp: "にんかがおりたので、こうじをはじめられます。", en: "The approval came through, so we can start the work." }, drill: { jp: "にんかをもらいました。", en: "We received the approval." }, accept: ["authorization", "licence", "permit"], hint: "NIN-ka — two beats, the ん held. にん is to recognise and か is to allow, so it is an authority saying yes. きょか is permission in general; にんか is the formal licence that comes with papers." },
        { id: "ja-u120l2-yurusu", type: "vocab", front: "ゆるす", reading: "yurusu", meaning: "allow", example: { jp: "いちどはゆるしましたが、つぎはゆるしません。", en: "I allowed it once, but I won't allow it next time." }, drill: { jp: "まちがいをゆるす。", en: "I forgive the mistake." }, accept: ["to permit", "forgive", "let"], hint: "yu-RU-su — three beats. ⚠️ One verb for to permit and to forgive, which are different acts in English. What is allowed or forgiven takes を, and context decides which you heard." },
        { id: "ja-u120l2-kyohi", type: "vocab", front: "きょひ", reading: "kyohi", meaning: "refusal", example: { jp: "むりなおねがいだったので、きょひされてもしかたがありません。", en: "It was an unreasonable request, so a refusal is only to be expected." }, drill: { jp: "きょひのりゆうをききました。", en: "I asked the reason for the refusal." }, accept: ["rejection", "turning down", "denial"], hint: "KYO-hi — two beats, きょ is ONE beat. きょ is to reject and ひ is to deny, so it is a flat no. ことわる is a polite personal refusal; きょひ is institutional and final." },
        { id: "ja-u120l2-kamawanai", type: "vocab", front: "かまわない", reading: "kamawanai", meaning: "don't mind", example: { jp: "おそくなってもかまわないので、ゆっくりきてください。", en: "I don't mind if you're late, so come at your own pace." }, drill: { jp: "いつでもかまわない。", en: "Any time is fine." }, accept: ["it's fine", "no objection", "doesn't matter"], hint: "ka-ma-wa-NA-i — five beats. The negative of かまう, so literally I do not mind. It grants permission by declining to object, which is why it sounds generous rather than enthusiastic." },
        { id: "ja-u120l2-seigen", type: "vocab", front: "せいげん", reading: "seigen", meaning: "limit", example: { jp: "じかんのせいげんがあるので、はやくきめましょう。", en: "There is a time limit, so let's decide quickly." }, drill: { jp: "せいげんをきめました。", en: "We set the limit." }, accept: ["restriction", "cap", "a limit"], hint: "sei-GEN — two beats, the ん held. せい is to control and げん is a boundary, so it is a ceiling put in place deliberately. はんい is the area covered; せいげん is the line you cannot cross." },
        { id: "ja-u120l2-kinshi", type: "vocab", front: "きんし", reading: "kinshi", meaning: "ban", example: { jp: "ここはたばこがきんしですが、そとではすえます。", en: "Cigarettes are banned here, but you can smoke outside." }, drill: { jp: "ここはきんしです。", en: "It is forbidden here." }, accept: ["prohibition", "forbidden", "no ..."], hint: "KIN-shi — two beats, the ん held. きん is to forbid and し is to stop. It is what signs say: きんえん no smoking, ちゅうしゃきんし no parking. Stronger than だめ, which is personal." },
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
        { id: "ja-u120l3-gimu", type: "vocab", front: "ぎむ", reading: "gimu", meaning: "obligation", example: { jp: "こどもががっこうへいくのはぎむですから、やすむときはれんらくします。", en: "School is an obligation for children, so you let them know when they are staying home." }, drill: { jp: "ぎむがあります。", en: "There is an obligation." }, accept: ["duty", "a must", "a legal duty"], hint: "GI-mu — two beats. ぎ is what is right and む is a duty, so it is what you owe. Its exact partner is けんり, a right, and Japanese schooling is ぎむきょういく, compulsory." },
        { id: "ja-u120l3-nakerebanarimasen", type: "vocab", front: "なければなりません", reading: "nakerebanarimasen", meaning: "have to", example: { jp: "あしたはしけんなので、はやくおきなければなりません。", en: "There's an exam tomorrow, so I have to get up early." }, drill: { jp: "いまいかなければなりません。", en: "I have to go now." }, accept: ["must", "have got to", "it is necessary to"], hint: "ない-form minus い + ければなりません = obligation. のまなければなりません = have to drink. The pair to u43's てもいいです (may) and てはいけません (must not)." },
        { id: "ja-u120l3-tozen", type: "vocab", front: "とうぜん", reading: "tōzen", meaning: "naturally", example: { jp: "やくそくをしたので、とうぜんまもらなければなりません。", en: "I made a promise, so naturally I have to keep it." }, drill: { jp: "とうぜんのけっかです。", en: "It is the natural result." }, accept: ["of course", "obviously", "only right"], hint: "TŌ-zen — the first beat is long, the ん held. とう is fitting and ぜん is so, so it means as it ought to be. It asserts that no one should be surprised — mildly reproachful." },
        { id: "ja-u120l3-shitagau", type: "vocab", front: "したがう", reading: "shitagau", meaning: "follow", example: { jp: "みんなできめたので、わたしもそれにしたがいます。", en: "We all decided it, so I will go along with it too." }, drill: { jp: "それにしたがう。", en: "I follow it." }, accept: ["to obey", "go along with", "comply"], hint: "shi-ta-GA-u — four beats. What you follow takes に: 「きまりに したがう」. It is obedience to a rule or a decision, not walking behind someone, which is ついていく." },
        { id: "ja-u120l3-makaseru", type: "vocab", front: "まかせる", reading: "makaseru", meaning: "leave it to", example: { jp: "しごとをまかせてから、じぶんのじかんがふえました。", en: "Since I left the work to him, my own time has increased." }, drill: { jp: "きみにまかせる。", en: "I leave it to you." }, accept: ["to entrust", "hand over", "put in someone's hands"], hint: "ma-ka-SE-ru — four beats. The person trusted takes に and the job takes を. 「まかせて」 means leave it with me, and it is a promise, not a shrug." },
        { id: "ja-u120l3-shikatanai", type: "vocab", front: "しかたない", reading: "shikatanai", meaning: "it can't be helped (there is no choice)", example: { jp: "あめでしかたなく、いえでほんをよみました。", en: "It couldn't be helped in the rain, so I read a book at home." }, drill: { jp: "あめでしかたない。", en: "It rained so it cannot be helped." }, accept: ["no choice", "nothing to be done", "unavoidable"], hint: "shi-ka-ta-NA-i — five beats. しかた is a way of doing and ない removes it: there is no way. It accepts a situation rather than approving it, and it closes a conversation." },
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
        { id: "ja-u120l4-mana", type: "vocab", front: "マナー", reading: "manā", meaning: "manners", example: { jp: "でんしゃのマナーをまもると、みんながきもちよくのれます。", en: "If everyone keeps to train manners, the ride is pleasant for all." }, drill: { jp: "マナーがわるいです。", en: "His manners are bad." }, accept: ["etiquette", "good manners", "the done thing"], hint: "MĀ-nā — two long beats, both marks held. Borrowed, and used for public conduct: phone use on a train, queueing. れいぎ is older and more about respect between people." },
        { id: "ja-u120l4-reigi", type: "vocab", front: "れいぎ", reading: "reigi", meaning: "courtesy", example: { jp: "かれはれいぎがただしいので、みんなにすかれています。", en: "He is proper in his courtesy, so everyone likes him." }, drill: { jp: "れいぎをおしえます。", en: "I teach courtesy." }, accept: ["politeness", "propriety", "good form"], hint: "REI-gi — two beats, rei said as written. れい is courtesy and ぎ is correct form, so it is respect done in the proper way. 「れいぎが ただしい」 is high praise about a person." },
        { id: "ja-u120l4-gyogi", type: "vocab", front: "ぎょうぎ", reading: "gyōgi", meaning: "behaviour", example: { jp: "こどものぎょうぎがよかったので、みせのひとがほめました。", en: "The child's behaviour was good, so the shop staff praised them." }, drill: { jp: "ぎょうぎがよくなりました。", en: "His behaviour has improved." }, accept: ["conduct", "table manners", "deportment"], hint: "GYŌ-gi — the first beat is long, ぎょ is ONE beat. ぎょう is conduct and ぎ is form, so it is how you carry yourself. Said of children above all, and especially at the table." },
        { id: "ja-u120l4-meiwaku", type: "vocab", front: "めいわく", reading: "meiwaku", meaning: "nuisance", example: { jp: "よるにうるさくすると、となりのひとのめいわくになります。", en: "If you are noisy at night, you become a nuisance to the neighbours." }, drill: { jp: "となりのめいわくをかんがえます。", en: "I think about the trouble it causes next door." }, accept: ["trouble", "bother", "annoyance"], hint: "mei-WA-ku — three beats, mei said as written. It is trouble caused TO someone else, which makes it a heavy word in Japan. 「めいわくを かける」 is the thing most carefully avoided." },
        { id: "ja-u120l4-iiwake", type: "vocab", front: "いいわけ", reading: "iiwake", meaning: "an excuse", example: { jp: "いいわけをするまえに、じじょうをせつめいさせてください。", en: "Before I make any excuses, please let me explain the circumstances." }, drill: { jp: "いいわけをききたくないです。", en: "I do not want to hear excuses." }, accept: ["justification", "making excuses", "explanation"], hint: "i-i-WA-ke — four beats, the two い separate. いう is to say and わけ is a reason, so it is a reason offered for yourself. せつめい is neutral; いいわけ is already judged." },
        { id: "ja-u120l4-menkyo", type: "vocab", front: "めんきょ", reading: "menkyo", meaning: "licence", example: { jp: "めんきょをとってから、くるまをかいました。", en: "I got my licence, and then bought a car." }, drill: { jp: "めんきょをもっています。", en: "I hold a licence." }, accept: ["permit", "driving licence", "license"], hint: "men-KYO — two beats, the ん held, きょ is ONE beat. めん is exemption and きょ is permission, so it is being let off the ban. Alone it usually means a driving licence." },
      ],
    },
  ],
};
