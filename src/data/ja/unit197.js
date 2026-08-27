// Unit 197 — かんようく・2 (idioms of mind and feeling) — B2 / JLPT N2
// Strand D, coverage 5 of 16. The other half of the idiom set: 気, あたま, こころ, きも and
// the social idioms built on posture. 気 alone generates dozens of expressions and is the
// single hardest word in Japanese for a learner to pin down, because it is never the thing
// the dictionary says it is.
export const UNIT197 = {
  id: "ja-u197",
  lang: "ja",
  title: "かんようく・2",
  order: 197,
  stage: "b2",
  lessons: [
    {
      id: "ja-u197l1",
      unit: 197,
      lesson: 1,
      title: "気: the word with no translation",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the core 気 idioms: きがおけない, きがきく, きをつかう, きがちる, きがすすまない, きがながい.",
      items: [
        { id: "ja-u197l1-kigaokenai", type: "vocab", front: "きがおけない", reading: "kigaokenai", meaning: "easy to be with, requiring no formality", example: { jp: "きが おけない 友だちと 話すのは 楽です。", en: "Talking with friends you can be yourself around is easy." }, accept: ["relaxed (company)", "no need to stand on ceremony"], hint: "The most misread idiom in the language: it sounds negative and is warm praise. You need place no 気 between you — no guard, no effort." },
        { id: "ja-u197l1-kigakiku", type: "vocab", front: "きがきく", reading: "kigakiku", meaning: "to be thoughtful, to notice what's needed", example: { jp: "きが きく 店員さんで、たすかりました。", en: "The shop assistant was thoughtful, which was a great help." }, accept: ["considerate", "on the ball", "quick to notice"], hint: "Noticing what someone needs before being asked. It is the quality Japanese working life values most and names most often." },
        { id: "ja-u197l1-kiwotsukau", type: "vocab", front: "きをつかう", reading: "kiwotsukau", meaning: "to be considerate; to be on one's guard", example: { jp: "はじめての 家では、どうしても きを つかいます。", en: "In someone's home for the first time you can't help being on your guard." }, accept: ["to take care around", "to be attentive", "to expend effort socially"], hint: "Spending 気 on someone — which is tiring. きが おけない describes the relationship where you do not have to." },
        { id: "ja-u197l1-kigachiru", type: "vocab", front: "きがちる", reading: "kigachiru", meaning: "to be distracted", example: { jp: "音が 大きくて、きが ちって しまいます。", en: "The noise is loud and it distracts me." }, accept: ["to lose concentration", "to be unable to focus"], hint: "ちる is what petals do — the 気 scatters instead of staying in one place." },
        { id: "ja-u197l1-kigasusumanai", type: "vocab", front: "きがすすまない", reading: "kigasusumanai", meaning: "to be reluctant", example: { jp: "きが すすまないなら、ことわっても いいですよ。", en: "If you're not keen, it's fine to say no." }, accept: ["not keen", "half-hearted about", "unwilling"], hint: "The 気 will not move forward. It is the politest possible way to decline, because it blames your mood rather than the offer." },
        { id: "ja-u197l1-kiganagai", type: "vocab", front: "きがながい", reading: "kiganagai", meaning: "patient, easy-going about time", example: { jp: "十年 待つとは、ずいぶん きが ながいですね。", en: "Waiting ten years — that's remarkably patient." }, accept: ["long-suffering", "unhurried"], hint: "Its opposite きが みじかい is short-tempered. Long 気 waits; short 気 snaps." },
      ],
    },
    {
      id: "ja-u197l2",
      unit: 197,
      lesson: 2,
      title: "あたま: the head, up and down",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the あたま idioms for respect and frustration: あたまがあがらない, あたまがさがる, あたまにくる, あたまをかかえる, あたまをひやす, あたまがかたい.",
      items: [
        { id: "ja-u197l2-atamagaagaranai", type: "vocab", front: "あたまがあがらない", reading: "atamagaagaranai", meaning: "to be unable to face (from obligation)", example: { jp: "あの ときは 助けて もらったので、あたまが あがりません。", en: "They helped me back then, so I'm in their debt." }, accept: ["to owe too much to", "to be indebted"], hint: "You cannot raise your head in front of them — not from fear but from unrepaid kindness." },
        { id: "ja-u197l2-atamagasagaru", type: "vocab", front: "あたまがさがる", reading: "atamagasagaru", meaning: "to feel deep respect", example: { jp: "毎日 続けて いるとは、あたまが さがります。", en: "Keeping it up every day — I take my hat off to them." }, accept: ["to be filled with admiration", "hats off"], hint: "The head goes down of its own accord. Compare the card before: あがらない is obligation, さがる is admiration." },
        { id: "ja-u197l2-atamanikuru", type: "vocab", front: "あたまにくる", reading: "atamanikuru", meaning: "to get angry, to be infuriated", example: { jp: "その 言い方には、さすがに あたまに きました。", en: "That way of putting it did finally make me angry." }, accept: ["to lose one's temper", "to be ticked off"], hint: "Casual and direct — the blood comes to the head. おこる is the neutral verb; あたまにくる is what you actually say." },
        { id: "ja-u197l2-atamawokakaeru", type: "vocab", front: "あたまをかかえる", reading: "atamawokakaeru", meaning: "to be at one's wits' end", example: { jp: "お金の ことで、あたまを かかえて います。", en: "I'm at my wits' end about money." }, accept: ["to despair over", "to hold one's head"], hint: "The posture is the meaning: both hands on the head, no idea what to do." },
        { id: "ja-u197l2-atamawohiyasu", type: "vocab", front: "あたまをひやす", reading: "atamawohiyasu", meaning: "to cool off, to calm down", example: { jp: "少し 外に 出て、あたまを ひやして きます。", en: "I'll step outside for a bit and cool my head." }, accept: ["to clear one's head", "to take a breather"], hint: "The direct answer to あたまにくる — the head got hot, so you cool it." },
        { id: "ja-u197l2-atamagakatai", type: "vocab", front: "あたまがかたい", reading: "atamagakatai", meaning: "inflexible, set in one's ways", example: { jp: "あたまが かたいと 言われますが、なおせません。", en: "People say I'm inflexible, but I can't change it." }, accept: ["rigid", "stubborn (in thinking)"], hint: "Its opposite あたまが やわらかい is praise for someone who can see another way. Hard and soft, not clever and stupid." },
      ],
    },
    {
      id: "ja-u197l3",
      unit: 197,
      lesson: 3,
      title: "こころ, むね and きも: what you feel it with",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the idioms of heart and nerve: こころをこめる, むねがいたむ, むねがいっぱい, きもがすわる, はらをわる, はらをきめる.",
      items: [
        { id: "ja-u197l3-kokorowokomeru", type: "vocab", front: "こころをこめる", reading: "kokorowokomeru", meaning: "to put one's heart into", example: { jp: "こころを こめて 作った 料理です。", en: "It's a dish I made with all my heart." }, accept: ["wholeheartedly", "with care and feeling"], hint: "The こめる is the ～こむ of u194 — putting the heart INTO the thing. Standard on gifts, letters and cooking." },
        { id: "ja-u197l3-munegaitamu", type: "vocab", front: "むねがいたむ", reading: "munegaitamu", meaning: "to feel a pang of grief", example: { jp: "その ニュースを 聞いて、むねが いたみました。", en: "Hearing that news gave me a pang of grief." }, accept: ["to ache (with sorrow)", "to be pained", "heart goes out"], hint: "Sympathy that hurts to feel, not your own loss. Its sibling むねをうつ cannot be taught here: を must read wo, which would put ou in the reading and break the roman-spelling rule." },
        { id: "ja-u197l3-munegaippai", type: "vocab", front: "むねがいっぱい", reading: "munegaippai", meaning: "overcome with emotion", example: { jp: "みんなの かおを 見て、むねが いっぱいに なりました。", en: "Seeing everyone's faces, I was overcome." }, accept: ["choked up", "full of feeling", "too moved to speak"], hint: "The chest is full and there is no room for words. Almost always happy or grateful, not sad." },
        { id: "ja-u197l3-kimogasuwaru", type: "vocab", front: "きもがすわる", reading: "kimogasuwaru", meaning: "to have nerve, to be unshakeable", example: { jp: "あんな ときに 落ち着いて いるとは、きもが すわって います。", en: "Staying calm at a moment like that — she has real nerve." }, accept: ["to be gutsy", "to have guts", "unflappable"], hint: "きも is the liver, which Japanese treats as the seat of courage where English uses the guts. すわる means it sits still." },
        { id: "ja-u197l3-harawowaru", type: "vocab", front: "はらをわる", reading: "harawowaru", meaning: "to talk frankly, to open up", example: { jp: "一度 はらを わって 話しませんか。", en: "Shall we talk it out frankly for once?" }, accept: ["to speak openly", "to have a heart-to-heart"], hint: "Splitting the belly open so the other person can see in. はらを わって はなす is the set phrase." },
        { id: "ja-u197l3-harawokimeru", type: "vocab", front: "はらをきめる", reading: "harawokimeru", meaning: "to make up one's mind (for good)", example: { jp: "はらを きめて、会社を やめる ことに しました。", en: "I made up my mind and decided to leave the company." }, accept: ["to resolve", "to steel oneself", "to commit"], hint: "Heavier than きめる — a decision with consequences you have accepted. The belly again, as the seat of resolve." },
      ],
    },
    {
      id: "ja-u197l4",
      unit: 197,
      lesson: 4,
      title: "Posture and pride",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read the social idioms built on how a body is held: はながたかい, こしがひくい, かたのにがおりる, うでがなる, したをまく, かおいろ.",
      items: [
        { id: "ja-u197l4-hanagatakai", type: "vocab", front: "はながたかい", reading: "hanagatakai", meaning: "proud (of someone or something)", example: { jp: "むすめが えらばれて、はなが 高いです。", en: "My daughter was chosen and I'm very proud." }, accept: ["proud", "pleased and boastful"], hint: "The nose goes up. Said of your own pride it is faintly self-mocking; said of someone else's it can be a criticism." },
        { id: "ja-u197l4-koshigahikui", type: "vocab", front: "こしがひくい", reading: "koshigahikui", meaning: "modest, unassuming (despite status)", example: { jp: "えらい 人なのに、とても こしが ひくいです。", en: "He's an important person, yet very unassuming." }, accept: ["humble", "down to earth", "approachable"], hint: "The hips stay low — no looking down on anyone. Only meaningful about someone who could act superior and does not." },
        { id: "ja-u197l4-katanonigaoriru", type: "vocab", front: "かたのにがおりる", reading: "katanonigaoriru", meaning: "to have a weight lifted", example: { jp: "しごとが 終わって、かたの にが おりました。", en: "The job is finished and a weight has lifted." }, accept: ["to be relieved of a burden", "load off one's shoulders"], hint: "Exactly the English metaphor, shoulders and all. It marks the end of a responsibility, not just a task." },
        { id: "ja-u197l4-udeganaru", type: "vocab", front: "うでがなる", reading: "udeganaru", meaning: "to be itching to show what one can do", example: { jp: "ひさしぶりの しごとで、うでが なります。", en: "It's been a while since I had work like this — I'm itching to get to it." }, accept: ["to be raring to go", "to feel one's skills stirring"], hint: "うで (arm) is also 'skill' — うでが いい means good at something. Here the skill is impatient to be used." },
        { id: "ja-u197l4-shitawomaku", type: "vocab", front: "したをまく", reading: "shitawomaku", meaning: "to be lost in admiration", example: { jp: "その 早さには、したを まきました。", en: "I was astonished at how fast it was." }, accept: ["to be astounded", "to marvel at"], hint: "The tongue rolls up and no words come. Reserved for skill or scale that beats what you thought possible." },
        { id: "ja-u197l4-kaoiro", type: "vocab", front: "かおいろ", reading: "kaoiro", meaning: "complexion; the look on someone's face", example: { jp: "かおいろが よく ないですが、大じょうぶですか。", en: "You don't look well — are you all right?" }, accept: ["how one looks", "expression", "mood (on the face)"], hint: "Literally face-colour, and it reports health or mood. かおいろを うかがう — reading someone's face before speaking — is a whole social skill." },
      ],
    },
  ],
};
