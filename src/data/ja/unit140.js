// JA Unit 140 — ぶんたい (register 1: polite vs plain) — B1 / JLPT N3
// Strand E (register), unit 1 of 2 — the strand the blueprint calls "most likely to be
// skipped and most worth keeping". Everything up to here has been です／ます, which is
// safe but marks you as a textbook speaker: friends, family, subtitles, novels, signs and
// inner thought all run on the PLAIN form, and a learner who only has ですます understands
// none of it.
// This unit teaches the plain forms as function vocab (だ・だった・た・なかった・くない),
// the contractions real speech actually uses (てる・とく・ちゃう・なきゃ), and the
// sentence-final particles that carry the social work (ね・よ・かな・っけ).
// ね and よ already exist as KANA items (u1l5, u2l3); teaching them again as vocab is the
// intended kana→word reuse (CONTENT.md rule 12), the same pattern as に "two" vs particle に.
// Every example pairs the plain form with its です／ます twin so the contrast is the lesson.
export const UNIT140 = {
  id: "ja-u140",
  lang: "ja",
  title: "ぶんたい",
  order: 140,
  stage: "b1",
  lessons: [
    // Lesson 1: the plain copula
    {
      id: "ja-u140l1",
      unit: 140,
      lesson: 1,
      title: "です without the です (だ)",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Switch the copula between polite and plain: です→だ, でした→だった, じゃないです→じゃない.",
      items: [
        { id: "ja-u140l1-da", type: "vocab", front: "だ", reading: "da", meaning: "is (plain)", example: { jp: "あしたはやすみだから、ゆっくりねられる。", en: "Tomorrow's a day off, so I can sleep in." }, accept: ["plain です", "am", "are"], hint: "だ is です with the politeness removed — same meaning, different audience. In casual speech it is often dropped altogether: あしたやすみ。" },
        { id: "ja-u140l1-datta", type: "vocab", front: "だった", reading: "datta", meaning: "was (plain)", example: { jp: "きのうのテストはかんたんだったから、しんぱいしなくていい。", en: "Yesterday's test was easy, so there's no need to worry." }, accept: ["plain でした", "were"], hint: "でした → だった. With a な-adjective it attaches directly: しずかだった. With an い-adjective you use かった instead, never だった." },
        { id: "ja-u140l1-janai", type: "vocab", front: "じゃない", reading: "janai", meaning: "isn't (plain)", example: { jp: "これはわたしのかばんじゃない。だれのだろう。", en: "This isn't my bag. Whose is it?" }, accept: ["is not", "plain じゃないです", "aren't"], hint: "じゃないです → じゃない. Said with a rising tone it flips meaning to 'isn't it?' — いいじゃない！ is praise, not denial." },
        { id: "ja-u140l1-janakatta", type: "vocab", front: "じゃなかった", reading: "janakatta", meaning: "wasn't (plain)", example: { jp: "おもったよりたいへんじゃなかったので、はやくおわった。", en: "It wasn't as hard as I thought, so it finished early." }, accept: ["was not", "plain じゃなかったです", "weren't"], hint: "じゃなかったです → じゃなかった. The past-negative copula, and the one beginners forget when they drop into plain form mid-conversation." },
        { id: "ja-u140l1-dearu", type: "vocab", front: "である", reading: "dearu", meaning: "is (written/formal)", example: { jp: "このほんのテーマは、じかんである。", en: "The theme of this book is time." }, accept: ["formal copula", "constitutes", "shall be"], hint: "The essay-and-contract copula. Never say it out loud in conversation — but you will read it on every official page." },
        { id: "ja-u140l1-dewanai", type: "vocab", front: "ではない", reading: "dewanai", meaning: "is not (written/formal)", example: { jp: "これはやさしいもんだいではない。じかんがひつようだ。", en: "This is not an easy problem. It needs time." }, accept: ["formal negative", "is by no means"], hint: "The formal じゃない — じゃ is simply では worn down by speech. Written Japanese keeps the full form." },
      ],
    },
    // Lesson 2: plain verbs and adjectives
    {
      id: "ja-u140l2",
      unit: 140,
      lesson: 2,
      title: "Plain verbs and adjectives",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Put verbs and い-adjectives into plain form: ました→た, ませんでした→なかった, くないです→くない.",
      items: [
        { id: "ja-u140l2-ta", type: "vocab", front: "た", reading: "ta", meaning: "did (plain past)", example: { jp: "ゆうべはやくねたから、けさはとてもげんきだ。", en: "I went to bed early last night, so this morning I feel great." }, accept: ["plain ました", "-ed", "did"], hint: "ました → た: たべました → たべた, いきました → いった. This same た form is what you attach とたん, ことがある and ら to." },
        { id: "ja-u140l2-nakatta", type: "vocab", front: "なかった", reading: "nakatta", meaning: "didn't (plain past negative)", example: { jp: "じかんがなかったので、ひるごはんをたべなかった。", en: "I had no time, so I didn't eat lunch." }, accept: ["plain ませんでした", "didn't", "wasn't"], hint: "ませんでした → なかった: たべませんでした → たべなかった. Built from ない, so it conjugates like an い-adjective." },
        { id: "ja-u140l2-kunai", type: "vocab", front: "くない", reading: "kunai", meaning: "is not (plain, い-adj)", example: { jp: "このもんだいはむずかしくない。すぐにできるよ。", en: "This problem isn't hard. You'll get it right away." }, accept: ["not (adjective)", "plain くないです"], hint: "くないです → くない. Drop the い, add くない: たかい → たかくない. いい is irregular: よくない." },
        { id: "ja-u140l2-kunakatta", type: "vocab", front: "くなかった", reading: "kunakatta", meaning: "wasn't (plain, い-adj)", example: { jp: "おもったほどさむくなかったから、コートはいらなかった。", en: "It wasn't as cold as I thought, so I didn't need a coat." }, accept: ["was not (adjective)", "plain くなかったです"], hint: "くなかったです → くなかった. Both halves go plain at once — a very common half-conversion mistake is くなかったです in a plain sentence." },
        { id: "ja-u140l2-yo", type: "vocab", front: "よう", reading: "yō", meaning: "let's (plain)", example: { jp: "つかれたから、そろそろかえろう。", en: "I'm tired, so let's head home soon." }, accept: ["shall we", "plain ましょう", "I think I'll"], hint: "ましょう → おう／よう: かえりましょう → かえろう, たべましょう → たべよう. Alone in your head it means 'I think I'll…'." },
        { id: "ja-u140l2-nda", type: "vocab", front: "んだ", reading: "nda", meaning: "you see, the thing is", example: { jp: "きょうはいけない。ねつがあるんだ。", en: "I can't go today. The thing is, I have a fever." }, accept: ["explanatory の", "it's that", "because"], hint: "The plain んです — it frames a sentence as an explanation. Leaving it off makes an excuse sound like an announcement." },
      ],
    },
    // Lesson 3: how people actually talk
    {
      id: "ja-u140l3",
      unit: 140,
      lesson: 3,
      title: "Contractions real speech uses",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Hear and use the everyday contractions: ている→てる, ておく→とく, てしまう→ちゃう, なければ→なきゃ.",
      items: [
        { id: "ja-u140l3-teru", type: "vocab", front: "てる", reading: "teru", meaning: "~ing (contracted ている)", example: { jp: "いま、なにしてる？ わたしはテレビをみてる。", en: "What are you doing now? I'm watching TV." }, accept: ["is doing", "contracted ている"], hint: "The い of ている simply drops. This one contraction accounts for most of the 'I can't hear the verb' problem in casual speech." },
        { id: "ja-u140l3-toku", type: "vocab", front: "とく", reading: "toku", meaning: "do in advance (contracted ておく)", example: { jp: "あとでつかうから、きっぷをかっとくね。", en: "We'll need them later, so I'll buy the tickets now." }, accept: ["contracted ておく", "get it done", "do beforehand"], hint: "ておく → とく, and でおく → どく (よんどく). Same meaning as ておく (u43), half the syllables." },
        { id: "ja-u140l3-chau", type: "vocab", front: "ちゃう", reading: "chau", meaning: "end up doing (contracted てしまう)", example: { jp: "いそがないと、でんしゃがいっちゃうよ。", en: "If we don't hurry the train's going to leave on us." }, accept: ["contracted てしまう", "accidentally do", "finish doing"], hint: "てしまう → ちゃう, でしまう → じゃう (のんじゃった). Past ちゃった is the sound of realising you've made a mistake." },
        { id: "ja-u140l3-nakya", type: "vocab", front: "なきゃ", reading: "nakya", meaning: "have to (contracted なければ)", example: { jp: "もうおそいから、かえらなきゃ。", en: "It's late already — I've got to get home." }, accept: ["must", "gotta", "contracted なければ"], hint: "なければならない → なきゃ, and the ならない half is usually dropped entirely. Sibling form: ないと (u137)." },
        { id: "ja-u140l3-jan", type: "vocab", front: "じゃん", reading: "jan", meaning: "right? (casual)", example: { jp: "すごいじゃん！ よくできたね。", en: "That's great, isn't it! Well done." }, accept: ["isn't it", "you see", "casual じゃない"], hint: "Very casual じゃない — friends only, never at work. It presses for agreement about something obvious." },
        { id: "ja-u140l3-tte", type: "vocab", front: "って", reading: "tte", meaning: "said that; as for", example: { jp: "かれはこないって。かぜをひいたらしい。", en: "He says he's not coming. Apparently he caught a cold." }, accept: ["quotative", "I heard that", "the thing called"], hint: "って does two jobs: casual と (quoting) and casual は (topic). ～って、なに？ = 'what's a ～?'." },
      ],
    },
    // Lesson 4: sentence-final particles
    {
      id: "ja-u140l4",
      unit: 140,
      lesson: 4,
      title: "The end of the sentence does the social work",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Choose the right ending: ね seeks agreement, よ delivers news, かな wonders, っけ checks a memory.",
      items: [
        { id: "ja-u140l4-ne", type: "vocab", front: "ね", reading: "ne", meaning: "isn't it? (seeking agreement)", example: { jp: "きょうはさむいですね。コートがいりますね。", en: "It's cold today, isn't it. You'll want a coat." }, accept: ["right?", "you know", "don't you think"], hint: "ね assumes you already agree — it builds a shared view. Overusing it is far safer than underusing it; leaving it off can sound blunt." },
        { id: "ja-u140l4-yo", type: "vocab", front: "よ", reading: "yo", meaning: "I'm telling you (new information)", example: { jp: "そのみせ、きょうはやすみですよ。", en: "That shop is closed today, just so you know." }, accept: ["you know", "I tell you", "let me tell you"], hint: "よ delivers something the listener does NOT know. Attaching it to what they obviously do know sounds pushy — that is the classic learner slip." },
        { id: "ja-u140l4-yone", type: "vocab", front: "よね", reading: "yone", meaning: "…right? (checking)", example: { jp: "かいぎは3じからだよね？ まちがってないよね。", en: "The meeting's at three, right? I'm not wrong, am I." }, accept: ["isn't it", "am I right", "I think, but"], hint: "よ + ね together: I believe this, and I want you to confirm it. The politest way to check a fact you're 90% sure of." },
        { id: "ja-u140l4-kana", type: "vocab", front: "かな", reading: "kana", meaning: "I wonder", example: { jp: "あしたはあめかな。かさをもっていこうかな。", en: "I wonder if it'll rain tomorrow. Maybe I'll take an umbrella." }, accept: ["I wonder if", "maybe", "perhaps"], hint: "Thinking out loud rather than asking. Attached to a volitional (いこうかな) it softens a decision into a musing." },
        { id: "ja-u140l4-kke", type: "vocab", front: "っけ", reading: "kke", meaning: "what was it again?", example: { jp: "かいぎはなんじからだっけ？ わすれちゃった。", en: "What time was the meeting again? I've forgotten." }, accept: ["again?", "wasn't it", "remind me"], hint: "っけ admits you knew this and lost it — much warmer than asking cold. Attaches to だ／た: だっけ, いったっけ." },
        { id: "ja-u140l4-mon", type: "vocab", front: "もん", reading: "mon", meaning: "because (excusing)", example: { jp: "だって、しらなかったんだもん。", en: "But I didn't know, that's why." }, accept: ["but", "after all", "it's because"], hint: "もん defends yourself, often after だって. It sounds childish or endearing depending on who says it — read the room." },
      ],
    },
  ],
};
