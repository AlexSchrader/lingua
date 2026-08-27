// JA Unit 188 — ぶんぽう・9 (Grammar 9: conditional nuance and counterfactuals) — B2 / JLPT N2
// ─────────────────────────────────────────────────────────────────────────────
// Block-2 house rules, applied to every unit in this block (174-191):
//   • Examples are MIXED SCRIPT, per block 1's u156 header. Every kanji used is
//     verified taught-at-or-before by `npm run check:glyphs`, run before commit.
//     Only the 568 glyphs taught through B1 are assumed — block 1's B2 character
//     units (u157-173) are stubs in this worktree, so nothing they teach is used.
//   • Grammar fronts stay KANA and spaced, as in block 1's B2 units. A grammar
//     pattern has no kanji form worth typing; keeping it kana keeps the front a
//     typing target rather than a second reading test.
//   • B2 examples are two clauses joined by the connective being taught — the
//     sentence carries the pattern's use, per blueprint §1.
//   • Every candidate front was checked against block 1 (u156-173) and block 3
//     (u192-208) by front string before it was written; the three grammar units
//     also avoid same-lexeme relatives of owned forms (によって→dropped による;
//     としたら/かりに/さえ owned → replaced), the class that cost B1's block 3 65
//     cards at merge. The front-uniqueness VALIDATOR is the authority; this note
//     records the reasoning, it does not replace the check.
// ─────────────────────────────────────────────────────────────────────────────
// A2 and B1 taught the plain conditionals (と・ば・たら・なら) and the evidentials.
// What is left, and what is genuinely N2, is the FEEL of a
// condition: supposing it out loud, regretting the road not taken, naming the one
// thing that would be enough, and refusing to let a fact carry more than it should.
// The four lessons are that arc: raise a hypothesis → wish it had gone otherwise →
// pin the necessary-and-sufficient condition → concede without surrendering.
export const UNIT188 = {
  id: "ja-u188",
  lang: "ja",
  title: "ぶんぽう・9",
  order: 188,
  stage: "b2",
  lessons: [
    // Lesson 1: raising a hypothesis and following it through
    {
      id: "ja-u188l1",
      unit: 188,
      lesson: 1,
      title: "Supposing that…",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Put a hypothesis on the table and reason from it: とすれば, とすると, となると, とあれば, ものなら, たらさいご.",
      items: [
        { id: "ja-u188l1-tosureba", type: "vocab", front: "とすれば", reading: "tosureba", meaning: "if we suppose that", example: { jp: "その 話が ほんとうだとすれば、私たちは 計画を 変えなければ なりません。", en: "If we suppose that story is true, then we have to change our plan." }, accept: ["supposing that", "if it is the case that", "assuming"], hint: "Raises a hypothesis to reason from, not a real condition. とすれば invites the listener to think it through with you; たら just states a condition." },
        { id: "ja-u188l1-tosuruto", type: "vocab", front: "とすると", reading: "tosuruto", meaning: "if that's so, then", example: { jp: "電車が 止まって いるとすると、会議には まにあいません。", en: "If the trains are stopped, then I won't make the meeting in time." }, accept: ["in that case", "that would mean", "if so"], hint: "Draws the automatic consequence of a supposition. とすれば weighs the idea; とすると runs it forward to what must follow." },
        { id: "ja-u188l1-tonaruto", type: "vocab", front: "となると", reading: "tonaruto", meaning: "when it comes to; that being so", example: { jp: "急に 引っこすとなると、お金も 時間も 足りません。", en: "When it comes to moving out suddenly, there's neither the money nor the time." }, accept: ["once it's a matter of", "if it really comes to that", "in the event that"], hint: "Signals that a possibility has become the real situation to deal with — the tone shifts from talk to consequences. Often follows a noun or a plain verb of a big decision." },
        { id: "ja-u188l1-toareba", type: "vocab", front: "とあれば", reading: "toareba", meaning: "if it's for the sake of", example: { jp: "子どもの ためとあれば、親は どんな くろうでも します。", en: "If it's for their child, parents will put up with any hardship." }, accept: ["given that it's", "when it's a case of", "for the sake of"], hint: "A special, worth-it condition — you'd normally refuse, but for THIS you won't. The reward or the cause is what makes the exception." },
        { id: "ja-u188l1-mononara", type: "vocab", front: "ものなら", reading: "mononara", meaning: "if you could (but you probably can't)", example: { jp: "もどれるものなら、あの ころに もどりたいです。", en: "If I could go back, I'd want to return to those days." }, accept: ["if it were possible to", "were you able to", "supposing one could"], hint: "Takes a potential verb and quietly doubts it: できるものなら = 'if you actually can — which I doubt'. The wish and the doubt arrive together." },
        { id: "ja-u188l1-tarasaigo", type: "vocab", front: "たらさいご", reading: "tarasaigo", meaning: "once X happens, that's the end of it", example: { jp: "この ボタンを 押したらさいご、もう 止められません。", en: "Once you press this button, there's no stopping it any more." }, accept: ["once … there's no going back", "the moment you do, it's over", "do it and that's that"], hint: "さいご is 最後, 'the last'. It marks a point of no return, and what follows is always bad or irreversible — never use it for a happy outcome." },
      ],
    },
    // Lesson 2: the road not taken
    {
      id: "ja-u188l2",
      unit: 188,
      lesson: 2,
      title: "If only it had gone otherwise",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about what did not happen and wish it had: ていたら, ていなかったら, ところだった, ものを, ばよかった, べきだった.",
      items: [
        { id: "ja-u188l2-teitara", type: "vocab", front: "ていたら", reading: "teitara", meaning: "if X had been the case", example: { jp: "もう 少し 早く 家を 出ていたら、電車に 乗れたのに。", en: "If I had left the house a little earlier, I could have caught the train." }, accept: ["had I …", "if only … had", "supposing it had been"], hint: "The counterfactual past: it did not happen, and you are imagining the world where it did. Almost always closes on のに or だろう." },
        { id: "ja-u188l2-teinakattara", type: "vocab", front: "ていなかったら", reading: "teinakattara", meaning: "if X had not been the case", example: { jp: "あなたが 教えて くれていなかったら、今も 気づいて いませんでした。", en: "If you hadn't told me, I still wouldn't have noticed even now." }, accept: ["had it not", "if not for", "were it not that"], hint: "The negative twin of ていたら — imagining the world without something that did happen. Often used to thank someone: 'if not for you…'." },
        { id: "ja-u188l2-tokorodatta", type: "vocab", front: "ところだった", reading: "tokorodatta", meaning: "was about to / nearly did", example: { jp: "もう 少しで さいふを 落とすところでした。", en: "I very nearly dropped my wallet." }, accept: ["almost happened", "came close to", "was on the verge of"], hint: "The near miss — it did NOT happen, but only just. Pairs with もう少しで ('a bit more and…') at the front. Relief, not regret." },
        { id: "ja-u188l2-monoo", type: "vocab", front: "ものを", reading: "monowo", meaning: "if only …, but (instead)", example: { jp: "早く 言って くれれば 助けられたものを、だまって いたから 手おくれです。", en: "If only you'd said something sooner I could have helped, but you kept quiet, so now it's too late." }, accept: ["and yet", "when you could have", "but instead you didn't"], hint: "のに with a sting of reproach — a chance existed and was wasted. It leans on the listener; keep it for regret you can afford to voice." },
        { id: "ja-u188l2-bayokatta", type: "vocab", front: "ばよかった", reading: "bayokatta", meaning: "should have / wish I had", example: { jp: "もっと 早く 病院に 行けばよかったと、今 思って います。", en: "I'm thinking now that I should have gone to the hospital sooner." }, accept: ["I wish I'd", "it would have been good to", "ought to have"], hint: "Your own regret, felt now, about your own past action. なければよかった is the mirror — 'wish I hadn't'." },
        { id: "ja-u188l2-bekidatta", type: "vocab", front: "べきだった", reading: "bekidatta", meaning: "ought to have (by principle)", example: { jp: "約束したのだから、時間を 守るべきでした。", en: "Since I'd made a promise, I ought to have kept to the time." }, accept: ["should have (as a duty)", "was supposed to", "the right thing was to"], hint: "べき is about what's RIGHT, not what you'd have liked — ばよかった is personal regret, べきだった is a duty you failed. Never use べき about yourself to boast." },
      ],
    },
    // Lesson 3: the one condition that settles it
    {
      id: "ja-u188l3",
      unit: 188,
      lesson: 3,
      title: "The one thing that's enough",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the exact condition that decides an outcome: さえすれば, ないことには, てからでないと, ないかぎり, てはじめて, ずにすんだ.",
      items: [
        { id: "ja-u188l3-saesureba", type: "vocab", front: "さえすれば", reading: "saesureba", meaning: "if you only just do X", example: { jp: "毎日 少し 練習さえすれば、だれでも 上手に なります。", en: "If you just practise a little every day, anyone gets good at it." }, accept: ["as long as you just", "you only have to", "provided merely that"], hint: "Reduces the whole requirement to one thing: X is enough, forget the rest. The あり さえすれば / し さえすれば shape wraps around a verb stem." },
        { id: "ja-u188l3-naikotoniwa", type: "vocab", front: "ないことには", reading: "naikotoniwa", meaning: "unless X, nothing (can happen)", example: { jp: "自分で 使って みないことには、良さは 分かりません。", en: "Unless you actually use it yourself, you can't tell how good it is." }, accept: ["without first doing", "not until you", "you can't … unless"], hint: "Sets X as the gate before anything else is possible, and the main clause is always negative or impossible. Stronger and more absolute than ば." },
        { id: "ja-u188l3-tekaradenaito", type: "vocab", front: "てからでないと", reading: "tekaradenaito", meaning: "not until after X", example: { jp: "しょるいを 確かめてからでないと、返事は できません。", en: "I can't give an answer until after I've checked the documents." }, accept: ["only after", "not before", "until … first"], hint: "Puts the two events in strict order: X must finish first, THEN the main clause is allowed. The main clause is again always negative." },
        { id: "ja-u188l3-naikagiri", type: "vocab", front: "ないかぎり", reading: "naikagiri", meaning: "as long as X isn't (so); unless", example: { jp: "本人が 認めないかぎり、話は 前に 進みません。", en: "As long as the person themselves won't admit it, the matter won't move forward." }, accept: ["so long as … not", "barring", "except if"], hint: "かぎり draws a boundary line: within the state of 'not X', the outcome holds. Feels like a standing rule, where ないことには feels like a single test." },
        { id: "ja-u188l3-tehajimete", type: "vocab", front: "てはじめて", reading: "tehajimete", meaning: "only upon doing X (did I…)", example: { jp: "外国に 住んでみてはじめて、自分の 国の ことが 分かりました。", en: "It was only when I'd lived abroad that I came to understand my own country." }, accept: ["it was only after", "not until … did", "for the first time upon"], hint: "はじめて is 初めて, 'for the first time'. The realization or the ability did not exist until X happened — a discovery, not a rule. Note the て-form + はじめて." },
        { id: "ja-u188l3-zunisunda", type: "vocab", front: "ずにすんだ", reading: "zunisunda", meaning: "got away without having to X", example: { jp: "友だちが 車を 出して くれたので、歩かずにすみました。", en: "A friend gave me a lift, so I got away without having to walk." }, accept: ["was spared having to", "didn't end up having to", "avoided doing"], hint: "すむ here is 済む, 'to be settled'. A feared or troublesome X was avoided — relief that a cost went unpaid. ずに is the plain 'without doing'." },
      ],
    },
    // Lesson 4: conceding without surrendering
    {
      id: "ja-u188l4",
      unit: 188,
      lesson: 4,
      title: "Just because…",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Grant a point without letting it decide the argument: からといって, たところで, にしても, としても, ようが, であれ.",
      items: [
        { id: "ja-u188l4-karatoitte", type: "vocab", front: "からといって", reading: "karatoitte", meaning: "just because … (doesn't mean)", example: { jp: "ねだんが 高いからといって、質が いいとは かぎりません。", en: "Just because the price is high doesn't mean the quality is good." }, accept: ["merely because", "the fact that … doesn't mean", "simply because"], hint: "Rejects a too-easy inference — you accept the reason but deny the conclusion drawn from it. Almost always closes on とはかぎらない or わけではない." },
        { id: "ja-u188l4-tatokorode", type: "vocab", front: "たところで", reading: "tatokorode", meaning: "even if you do X (it's no use)", example: { jp: "今から 急いだところで、もう 終わって いるでしょう。", en: "Even if you hurry now, it's surely already over." }, accept: ["no matter how much you", "even if … it won't help", "for all the good it does"], hint: "A hopeless concession: X won't change the outcome, so why bother. The main clause is always negative or futile. Note it's past-form た + ところで." },
        { id: "ja-u188l4-nishitemo", type: "vocab", front: "にしても", reading: "nishitemo", meaning: "even granting that; even so", example: { jp: "急な 話だったにしても、一言も ないのは 失礼です。", en: "Even granting it was sudden, not a single word is rude." }, accept: ["even if we allow that", "granted that", "even in the case of"], hint: "Concedes the excuse, then presses on anyway. それにしても is the stand-alone 'even so' that opens a sentence." },
        { id: "ja-u188l4-toshitemo", type: "vocab", front: "としても", reading: "toshitemo", meaning: "even supposing that", example: { jp: "たとえ 失敗したとしても、やって みる 意味は あります。", en: "Even supposing it fails, there's still a point in trying." }, accept: ["even if it were", "assuming even that", "granting hypothetically"], hint: "Concedes a HYPOTHESIS, where にしても concedes a fact you accept. たとえ…としても is the set frame — たとえ at the front makes the 'even if' explicit." },
        { id: "ja-u188l4-yoga", type: "vocab", front: "ようが", reading: "yōga", meaning: "no matter how / whatever", example: { jp: "だれが なんと 言おうが、私の 考えは 変わりません。", en: "No matter who says what, my mind won't change." }, accept: ["regardless of whether", "whatever may", "come what may"], hint: "Volitional verb + が = total indifference to the outcome. なんと言おうが ('whatever anyone says') is the set phrase. ようと is the same with a firmer edge." },
        { id: "ja-u188l4-deare", type: "vocab", front: "であれ", reading: "deare", meaning: "whatever / whoever it may be", example: { jp: "どんな りゆうであれ、うそは よく ありません。", en: "Whatever the reason may be, lying is not good." }, accept: ["be it … or", "no matter what", "regardless of"], hint: "Attaches to a noun and waves away every version of it: だれであれ, いつであれ, どこであれ. Formal — the spoken cousin is でも." },
      ],
    },
  ],
};
