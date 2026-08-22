// JA Unit 190 — ぶんぽう・11 (Grammar 11: discourse, cohesion, hedged claims) — B2 / JLPT N2
// ─────────────────────────────────────────────────────────────────────────────
// Block-2 house rules (see u188 header): mixed-script examples over the 568 glyphs
// taught through B1, verified by `npm run check:glyphs`; kana spaced fronts;
// two-clause B2 examples; every front checked against block 1 (u156-173) and block 3
// (u192-208). The band already owns したがって, ようするに, とはいえ, むしろ and いわば
// (block 1 + the trunk) and どころか, つまり, すなわち, ということです (B1 grammar), so
// this unit deliberately takes the connectives around them, never a second copy.
// ─────────────────────────────────────────────────────────────────────────────
// The last grammar unit of the band is about holding a longer argument together and
// not overclaiming inside it — the two things that separate B2 writing from a pile
// of true sentences. Four lessons: draw a conclusion and ground it → pile evidence
// up → turn, restate, and boil down → and, above all, say things WITHOUT asserting
// them flat, because at B2 the hedge is not weakness, it is precision.
export const UNIT190 = {
  id: "ja-u190",
  lang: "ja",
  title: "ぶんぽう・11",
  order: 190,
  stage: "b2",
  lessons: [
    // Lesson 1: conclusion and ground
    {
      id: "ja-u190l1",
      unit: 190,
      lesson: 1,
      title: "Therefore, and the reason being",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Draw a conclusion and give its ground in formal prose: それゆえ, からこそ, というのも, というわけです, しだいです, このように.",
      items: [
        { id: "ja-u190l1-soreyue", type: "vocab", front: "それゆえ", reading: "soreyue", meaning: "therefore, hence", example: { jp: "人は 一人では 生きられません。それゆえ、社会が ひつようなのです。", en: "People cannot live alone. Hence, society is necessary." }, accept: ["for that reason", "consequently", "thus"], hint: "ゆえ is a written 'reason'. それゆえ is the essay's 'therefore' — heavier and more logical than だから, and it draws a conclusion, not just a next event." },
        { id: "ja-u190l1-karakoso", type: "vocab", front: "からこそ", reading: "karakoso", meaning: "it is precisely because", example: { jp: "難しい からこそ、やって みる 意味が あるのです。", en: "It is precisely because it is hard that there is a point in trying." }, accept: ["that's exactly why", "for the very reason that", "only because"], hint: "こそ spotlights the reason as the REAL and only one — ruling out every other explanation. Often closes on のです, which drives the emphasis home." },
        { id: "ja-u190l1-toiunomo", type: "vocab", front: "というのも", reading: "toiunomo", meaning: "the reason being; this is because", example: { jp: "今日は 早く 帰ります。というのも、母が 来るからです。", en: "I'm going home early today. The reason being that my mother is coming." }, accept: ["for one thing", "that's because", "the thing is"], hint: "Comes AFTER the statement to supply the reason for it, and usually closes on からです. It answers an unspoken 'why?' the reader is about to ask." },
        { id: "ja-u190l1-toiuwakedesu", type: "vocab", front: "というわけです", reading: "toiuwakedesu", meaning: "and that's how it is / so that's why", example: { jp: "電車が 止まって、一時間 動きませんでした。会議に まにあわなかった というわけです。", en: "The train stopped and didn't move for an hour. So that's how it is that I didn't make the meeting." }, accept: ["so it follows that", "and hence", "that's the reason"], hint: "Wraps up a chain of reasoning as its natural conclusion — 'putting it together, this is the case'. Ends the sentence; the te-form というわけで opens the next one instead. わけ is the logic that makes it add up." },
        { id: "ja-u190l1-shidaidesu", type: "vocab", front: "しだいです", reading: "shidaidesu", meaning: "such is the situation (formal)", example: { jp: "以上の りゆうから、お願いに 上がった しだいです。", en: "For the reasons above, such is the situation in which I have come to ask you." }, accept: ["this is how it has come about", "and so it is that", "the circumstance is that"], hint: "The most formal of the set — it explains, in a business letter, HOW the current situation arose. 次第 here is 'circumstances', not the 'as soon as' しだい." },
        { id: "ja-u190l1-konoyoni", type: "vocab", front: "このように", reading: "konoyōni", meaning: "in this way; as shown here", example: { jp: "このように、小さな しゅうかんが 大きな けっかを 生みます。", en: "In this way, small habits produce large results." }, accept: ["thus", "as we have seen", "in this manner"], hint: "The essay's summing-up pointer — 'as the above shows'. It opens the sentence that draws the lesson from what came before." },
      ],
    },
    // Lesson 2: piling it up
    {
      id: "ja-u190l2",
      unit: 190,
      lesson: 2,
      title: "Not only that, but",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Add and escalate evidence in one direction: ばかりでなく, のみならず, はもとより, くわえて, おまけに, そればかりか.",
      items: [
        { id: "ja-u190l2-bakaridenaku", type: "vocab", front: "ばかりでなく", reading: "bakaridenaku", meaning: "not only … (but also)", example: { jp: "この 店は 安いばかりでなく、品も いいです。", en: "This shop is not only cheap but the goods are good too." }, accept: ["not just", "besides being", "as well as"], hint: "The written だけでなく. It stacks a second, often bigger point on the first — the main weight lands on what comes AFTER it." },
        { id: "ja-u190l2-nominarazu", type: "vocab", front: "のみならず", reading: "nominarazu", meaning: "not merely … but", example: { jp: "この 問題は 日本のみならず、世界中で 起きて います。", en: "This problem is happening not merely in Japan but all over the world." }, accept: ["not only", "and moreover", "beyond just"], hint: "One step more formal than ばかりでなく — のみ is the literary 'only'. It widens the scope from a small case to a large one." },
        { id: "ja-u190l2-hamotoyori", type: "vocab", front: "はもとより", reading: "hamotoyori", meaning: "to say nothing of; let alone", example: { jp: "漢字はもとより、ひらがなも まだ 書けません。", en: "To say nothing of kanji, I can't even write hiragana yet." }, accept: ["not to mention", "of course … and also", "needless to say"], hint: "X is obvious and taken for granted; the news is that Y holds too. もとより = 'from the start / as a matter of course'. Often the smaller, more surprising case follows." },
        { id: "ja-u190l2-kuwaete", type: "vocab", front: "くわえて", reading: "kuwaete", meaning: "in addition, moreover", example: { jp: "風が 強く なって きました。くわえて、雨も ふり出しました。", en: "The wind has picked up. In addition, it has started to rain." }, accept: ["on top of that", "furthermore", "added to which"], hint: "加えて = 'adding to it'. Opens a sentence to append a further fact of equal weight — cleaner and more formal than それに." },
        { id: "ja-u190l2-omakeni", type: "vocab", front: "おまけに", reading: "omakeni", meaning: "on top of that, what's more", example: { jp: "道に まよいました。おまけに、電話の でんちも 切れました。", en: "I got lost. On top of that, my phone battery died too." }, accept: ["besides", "moreover", "and to boot"], hint: "Piles one more fact on the last, most often two troubles stacking up — a shade more colloquial than くわえて. おまけ is a 'free extra', so おまけに is 'and as a bonus (for better or worse)'." },
        { id: "ja-u190l2-sorebakarika", type: "vocab", front: "そればかりか", reading: "sorebakarika", meaning: "not only that, but even", example: { jp: "かれは 道を 教えて くれました。そればかりか、駅まで 送って くれました。", en: "He told me the way. Not only that, he even walked me to the station." }, accept: ["what's more", "and beyond that", "not content with that"], hint: "The strongest escalation of the set — the second fact goes further than you'd expect from the first, for better or worse. Carries a note of surprise." },
      ],
    },
    // Lesson 3: turning and boiling down
    {
      id: "ja-u190l3",
      unit: 190,
      lesson: 3,
      title: "Turn, restate, boil down",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Pivot an argument and compress it: にもかかわらず, それにしても, ようは, つまるところ, いわゆる, ともいえる.",
      items: [
        { id: "ja-u190l3-nimokakawarazu", type: "vocab", front: "にもかかわらず", reading: "nimokakawarazu", meaning: "in spite of, nevertheless", example: { jp: "雨が ふって いたにもかかわらず、おおぜいの 人が 集まりました。", en: "In spite of the rain, a great many people gathered." }, accept: ["despite", "even though", "notwithstanding"], hint: "The formal のに, but heavier — it stresses that the result defies the expectation. Can stand alone to open a sentence: にもかかわらず、…." },
        { id: "ja-u190l3-sorenishitemo", type: "vocab", front: "それにしても", reading: "sorenishitemo", meaning: "even so; all the same", example: { jp: "急な 話だったのは 分かります。それにしても、少し ひどいです。", en: "I understand it was sudden. Even so, it's a bit much." }, accept: ["still", "be that as it may", "having said that"], hint: "Accepts what was just said, then pushes back anyway — the stand-alone cousin of にしても. Opens the sentence that voices the reservation." },
        { id: "ja-u190l3-yowa", type: "vocab", front: "ようは", reading: "yōwa", meaning: "the point is; in short", example: { jp: "ようは、時間を 守れば いいのです。", en: "The point is simply to keep to the time." }, accept: ["what it comes down to", "essentially", "put simply"], hint: "要は = 'the essential thing is'. Cuts through a long explanation to the one thing that matters. A little blunt, so warmer in speech than on paper." },
        { id: "ja-u190l3-tsumarutokoro", type: "vocab", front: "つまるところ", reading: "tsumarutokoro", meaning: "in the end; when all is said", example: { jp: "いろいろ 考えましたが、つまるところ、お金の 問題です。", en: "I thought about it every which way, but in the end it's a question of money." }, accept: ["ultimately", "at bottom", "the long and short of it"], hint: "Reduces a tangle of considerations to the single root cause underneath. More reflective than ようは — it arrives at the answer after wrestling with it." },
        { id: "ja-u190l3-iwayuru", type: "vocab", front: "いわゆる", reading: "iwayuru", meaning: "so-called; what is called", example: { jp: "かれは いわゆる てんさいです。子どもの ころから 有名でした。", en: "He is a so-called genius. He was famous from childhood." }, accept: ["what you might call", "the so-called", "of the kind people call"], hint: "Flags the word after it as a common label, sometimes with a touch of distance from it. Sits directly before the noun, never alone." },
        { id: "ja-u190l3-tomoieru", type: "vocab", front: "ともいえる", reading: "tomoieru", meaning: "you could even say that", example: { jp: "失敗は、つぎへの 一歩だともいえます。", en: "You could even say a failure is a step toward the next thing." }, accept: ["it might be said that", "in a sense it is", "arguably"], hint: "Offers a bolder reframing as one possible reading, not the flat truth — 'one could go so far as to say'. A gentle way to float a strong claim." },
      ],
    },
    // Lesson 4: saying it without asserting it
    {
      id: "ja-u190l4",
      unit: 190,
      lesson: 4,
      title: "Hedged and guarded claims",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Make a claim at the right strength, from 'no more than' to 'is thought to be': にすぎない, ざるをえない, かねない, きらいがある, とみられる, とかんがえられる.",
      items: [
        { id: "ja-u190l4-nisuginai", type: "vocab", front: "にすぎない", reading: "nisuginai", meaning: "is no more than, merely", example: { jp: "それは 一つの れいにすぎません。ほかにも たくさん あります。", en: "That is no more than one example. There are many others." }, accept: ["is only", "nothing but", "amounts to just"], hint: "過ぎない = 'does not exceed'. Plays a thing DOWN — it caps the claim at 'only this much, no more'. The opposite move to からこそ." },
        { id: "ja-u190l4-zaruoenai", type: "vocab", front: "ざるをえない", reading: "zaruoenai", meaning: "have no choice but to", example: { jp: "台風が 来たので、旅行は 中止せざるをえませんでした。", en: "As a typhoon was coming, we had no choice but to call off the trip." }, accept: ["cannot help but", "am forced to", "must, reluctantly"], hint: "Formal and reluctant — you'd rather not, but the situation leaves no other way. Attaches to the ない-stem: 行かざるをえない (irregular: せざるをえない for する)." },
        { id: "ja-u190l4-kanenai", type: "vocab", front: "かねない", reading: "kanenai", meaning: "could well (something bad)", example: { jp: "その やり方では、大きな じこに なりかねません。", en: "With that approach, it could well lead to a serious accident." }, accept: ["is liable to", "might end up", "there's a danger it will"], hint: "Always warns of a BAD possibility — 'it's quite capable of turning out this way'. Verb stem + かねない. Its twin かねる means the opposite, 'cannot bring oneself to'." },
        { id: "ja-u190l4-kiraigaaru", type: "vocab", front: "きらいがある", reading: "kiraigaaru", meaning: "tends to (an unwelcome tendency)", example: { jp: "かれは 物事を 悪い ほうに 考えるきらいが あります。", en: "He has a tendency to think about things in the worst light." }, accept: ["is inclined to", "has a habit of", "is apt to"], hint: "Names an unfortunate leaning, gently and formally — never a good habit. きらい here is not 'dislike'; it is an old word for 'tendency'." },
        { id: "ja-u190l4-tomirareru", type: "vocab", front: "とみられる", reading: "tomirareru", meaning: "is seen as, is regarded as", example: { jp: "この 変化は、しばらく 続くとみられて います。", en: "This change is seen as likely to continue for a while." }, accept: ["is viewed as", "is expected to", "is believed to"], hint: "The newscaster's hedge — reports a widely-held view without owning it. 見られる passive lets the speaker vanish, which is exactly the point in the news." },
        { id: "ja-u190l4-tokangaerareru", type: "vocab", front: "とかんがえられる", reading: "tokangaerareru", meaning: "it is thought that", example: { jp: "この いしは、千年 前の ものだとかんがえられて います。", en: "This stone is thought to be from a thousand years ago." }, accept: ["it is considered that", "one may conclude that", "is held to be"], hint: "The academic hedge, the 考える version of とみられる — a reasoned conclusion offered impersonally. It is how a paper states a finding without saying 'I think'." },
      ],
    },
  ],
};
