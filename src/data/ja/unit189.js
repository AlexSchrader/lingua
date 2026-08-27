// JA Unit 189 — ぶんぽう・10 (Grammar 10: formal written structures) — B2 / JLPT N2
// ─────────────────────────────────────────────────────────────────────────────
// Block-2 house rules (see u188 header for the full statement): mixed-script
// examples over the 568 glyphs taught through B1, verified by `npm run check:glyphs`;
// kana spaced fronts; two-clause B2 examples; every front checked against block 1
// (u156-173) and block 3 (u192-208) by string, and against same-lexeme relatives of
// owned forms. によって is owned, so its relative による is NOT taught here; について
// is owned, so this unit takes the specifically-written connectives around it.
// ─────────────────────────────────────────────────────────────────────────────
// This is the register of the report, the notice and the essay — the 書きことば
// connectives that a learner READS constantly and cannot produce, because A1-B1
// only ever taught the spoken equivalents (で・に・から). u191 owns honorific and
// humble verbs; u192 owns the vocabulary of public documents; what is left, and
// what this unit takes, is the STRUCTURE that holds formal prose together: where
// and over what span something holds, what it concerns, what it rests on, and the
// occasions and stages a formal account is built around.
export const UNIT189 = {
  id: "ja-u189",
  lang: "ja",
  title: "ぶんぽう・10",
  order: 189,
  stage: "b2",
  lessons: [
    // Lesson 1: place, span, and channel
    {
      id: "ja-u189l1",
      unit: 189,
      lesson: 1,
      title: "Where and over what it holds",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State the setting and reach of a claim in formal prose: において, における, にわたって, をつうじて, をとおして, にあたって.",
      items: [
        { id: "ja-u189l1-nioite", type: "vocab", front: "において", reading: "nioite", meaning: "in, at (formal setting)", example: { jp: "会議において 決まった ことは、全員が 守らなければ なりません。", en: "What is decided at the meeting must be observed by everyone." }, accept: ["in the context of", "at (formal)", "with respect to"], hint: "The written で of place, time or field — 会議で becomes 会議において on paper. における is the same idea before a noun." },
        { id: "ja-u189l1-niokeru", type: "vocab", front: "における", reading: "niokeru", meaning: "in, at (before a noun)", example: { jp: "社会における じょせいの 役わりは、この 百年で 大きく 変わりました。", en: "The role of women in society has changed greatly over this past century." }, accept: ["in the … of", "within", "as regards (adnominal)"], hint: "The adnominal form of において: it modifies the noun that follows. 日本における研究 = 'research in Japan'. Use において before a verb, における before a noun." },
        { id: "ja-u189l1-niwatatte", type: "vocab", front: "にわたって", reading: "niwatatte", meaning: "over the span of; across", example: { jp: "この 工事は 三年にわたって 続きました。", en: "This construction went on over a span of three years." }, accept: ["throughout", "extending over", "for the whole of"], hint: "Marks a wide reach in time or space and stresses how far it extends — 全国にわたって, 十年にわたって. にわたる is its before-a-noun form." },
        { id: "ja-u189l1-wotsujite", type: "vocab", front: "をつうじて", reading: "wotsūjite", meaning: "through; throughout", example: { jp: "友人を つうじて、その 会社の ことを 知りました。", en: "It was through a friend that I learned about that company." }, accept: ["by way of", "via", "over the course of"], hint: "The channel a thing passes through — a person, the media, or a whole period (一年を つうじて = 'all year round'). 通じる is 'to get through'." },
        { id: "ja-u189l1-wotoshite", type: "vocab", front: "をとおして", reading: "wotōshite", meaning: "through (an intermediary, an experience)", example: { jp: "旅行を とおして、いろいろな 人と しりあいました。", en: "Through travelling, I got to know all sorts of people." }, accept: ["by means of", "via the experience of", "all through"], hint: "Nearly interchangeable with をつうじて; をとおして leans a little more toward a direct experience you passed through. 通す is 'to pass through'." },
        { id: "ja-u189l1-niatatte", type: "vocab", front: "にあたって", reading: "niatatte", meaning: "on the occasion of; when about to", example: { jp: "新しい 生活を 始めるにあたって、家族に 手紙を 書きました。", en: "On the occasion of starting a new life, I wrote a letter to my family." }, accept: ["upon", "at the time of", "in undertaking"], hint: "A formal 'as you set out to do X' — reserved for weighty, first-time occasions (開会にあたって). Everyday events take とき instead." },
      ],
    },
    // Lesson 2: what it concerns, and what it rests on
    {
      id: "ja-u189l2",
      unit: 189,
      lesson: 2,
      title: "What it concerns and rests on",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what a formal statement is about and what it is grounded in: にたいして, にかんして, をめぐって, にもとづいて, をもとに, にともなって.",
      items: [
        { id: "ja-u189l2-nitaishite", type: "vocab", front: "にたいして", reading: "nitaishite", meaning: "toward; in contrast to", example: { jp: "この 意見にたいして、反対する 人も 少なく ありません。", en: "There are not a few people who oppose this opinion." }, accept: ["with respect to", "as against", "in response to"], hint: "Marks the target an action or attitude is aimed AT — different from にとって (u139), which marks whose viewpoint it is. Also joins two contrasting facts." },
        { id: "ja-u189l2-nikanshite", type: "vocab", front: "にかんして", reading: "nikanshite", meaning: "regarding, concerning", example: { jp: "じこの げんいんにかんして、くわしい しらべが 続いて います。", en: "Regarding the cause of the accident, a detailed investigation is ongoing." }, accept: ["with regard to", "on the subject of", "in connection with"], hint: "The formal 'about'. について is its everyday twin; にかんして sounds like a report heading and takes a wider, more official topic." },
        { id: "ja-u189l2-womegutte", type: "vocab", front: "をめぐって", reading: "womegutte", meaning: "over (a disputed matter)", example: { jp: "新しい 規則をめぐって、社員の 間で 議論が 起きました。", en: "A debate arose among the staff over the new rules." }, accept: ["surrounding", "concerning (contested)", "in the matter of"], hint: "Not just 'about' — about something people argue OVER. It nearly always leads to 議論, 争い or 対立. めぐる is 'to go around'." },
        { id: "ja-u189l2-nimotozuite", type: "vocab", front: "にもとづいて", reading: "nimotozuite", meaning: "based on, grounded in", example: { jp: "しらべた 事実にもとづいて、ほうこくを まとめました。", en: "I put the report together based on the facts we investigated." }, accept: ["on the basis of", "in accordance with", "founded on"], hint: "The formal 'based on', and it implies a firm, authoritative ground — data, a law, evidence. もとづく is 'to be founded on'." },
        { id: "ja-u189l2-womotoni", type: "vocab", front: "をもとに", reading: "womotoni", meaning: "using X as the basis/material", example: { jp: "実話を もとに して、この 映画は 作られました。", en: "This film was made using a true story as its basis." }, accept: ["drawing on", "from (as source material)", "taking … as a starting point"], hint: "X is the raw material you work FROM and then transform. にもとづいて demands faithfulness to X; をもとに only asks that X was the starting point." },
        { id: "ja-u189l2-nitomonatte", type: "vocab", front: "にともなって", reading: "nitomonatte", meaning: "accompanying; as X changes", example: { jp: "人口が 増えるにともなって、家の ねだんも 上がりました。", en: "As the population grew, house prices rose along with it." }, accept: ["along with", "in step with", "as a result of the change in"], hint: "Two things moving together, usually two changes — as X shifts, Y shifts with it. ともなう is 'to accompany'. Formal cousin of とともに." },
      ],
    },
    // Lesson 3: occasions and stages
    {
      id: "ja-u189l3",
      unit: 189,
      lesson: 3,
      title: "Occasions and stages",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Frame the occasion, the run-up and the stages of a formal account: にさいして, にさきだって, をへて, をふまえて, をきっかけに, とともに.",
      items: [
        { id: "ja-u189l3-nisaishite", type: "vocab", front: "にさいして", reading: "nisaishite", meaning: "at the time of, on the occasion of", example: { jp: "けいやくにさいして、いくつか 確かめたい ことが あります。", en: "At the time of the contract, there are several things I'd like to confirm." }, accept: ["when it comes to (an event)", "upon the occasion of", "in the case of"], hint: "Marks a special moment that calls for something. Very close to にあたって; にさいして points at the moment itself, にあたって at what you undertake in it." },
        { id: "ja-u189l3-nisakidatte", type: "vocab", front: "にさきだって", reading: "nisakidatte", meaning: "prior to, ahead of", example: { jp: "会議にさきだって、資料を 全員に 配りました。", en: "Ahead of the meeting, we handed the materials out to everyone." }, accept: ["before (formal)", "in advance of", "preceding"], hint: "先立つ is 'to precede'. It stresses preparation done BEFORE a main event, more formal than 前に. Its before-a-noun form is にさきだつ." },
        { id: "ja-u189l3-wohete", type: "vocab", front: "をへて", reading: "wohete", meaning: "after passing through (stages)", example: { jp: "長い はなしあいを へて、ようやく けつろんが 出ました。", en: "After passing through long discussions, a conclusion was finally reached." }, accept: ["by way of (a process)", "having gone through", "via (stages)"], hint: "経る is 'to pass through'. It lists the stages or the time something went THROUGH on the way to a result — 三年を へて, 会議を へて." },
        { id: "ja-u189l3-wofumaete", type: "vocab", front: "をふまえて", reading: "wofumaete", meaning: "taking X into account", example: { jp: "みんなの 意見を ふまえて、計画を もう 一度 考え直します。", en: "Taking everyone's views into account, I'll rethink the plan once more." }, accept: ["on the basis of (having considered)", "in light of", "building on"], hint: "踏まえる is 'to plant your feet on'. You have taken X into consideration and now build the next step on it — a favourite of meetings and proposals." },
        { id: "ja-u189l3-wokikkakeni", type: "vocab", front: "をきっかけに", reading: "wokikkakeni", meaning: "prompted by; taking X as the trigger", example: { jp: "病気を きっかけに、食べ物に 気を つけるように なりました。", en: "Prompted by an illness, I came to be careful about food." }, accept: ["set off by", "using X as the occasion", "which led to"], hint: "きっかけ is the trigger or opening that starts a change. X is the small event; the main clause is the lasting shift it set off." },
        { id: "ja-u189l3-totomoni", type: "vocab", front: "とともに", reading: "totomoni", meaning: "together with; as well as", example: { jp: "年を とるとともに、考え方も 変わって きました。", en: "As I've grown older, my way of thinking has changed too." }, accept: ["along with", "at the same time as", "in addition to"], hint: "Three jobs: 'together with (a person)', 'as X happens, Y happens', and formal 'as well as'. にともなって is only the middle one; とともに is wider and more literary." },
      ],
    },
    // Lesson 4: formal connectors
    {
      id: "ja-u189l4",
      unit: 189,
      lesson: 4,
      title: "The connectors of formal prose",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Join formal clauses with the right weight: だけに, うえで, はんめん, につき, にあって, とあって.",
      items: [
        { id: "ja-u189l4-dakeni", type: "vocab", front: "だけに", reading: "dakeni", meaning: "precisely because; all the more since", example: { jp: "期待して いただけに、負けた ときの 悲しさは 大きかったです。", en: "Precisely because I'd had hopes, the sadness when we lost was all the greater." }, accept: ["all the more because", "given that … it's only natural", "being … as it is"], hint: "The result fits the cause and is intensified BY it — a natural, heightened consequence. Not mere cause: から states it, だけに says the effect is stronger for it." },
        { id: "ja-u189l4-uede", type: "vocab", front: "うえで", reading: "uede", meaning: "after doing; in the course of", example: { jp: "よく 考えた うえで、お返事いたします。", en: "I'll give you my answer after thinking it over carefully." }, accept: ["upon (having done)", "in doing", "as a basis for the next step"], hint: "上で = 'on top of having done X'. X is the necessary groundwork, then the main clause follows on it. With a noun (仕事の 上で) it means 'in the course of'." },
        { id: "ja-u189l4-hanmen", type: "vocab", front: "はんめん", reading: "hanmen", meaning: "on the other hand; while", example: { jp: "この 仕事は 給料が いい はんめん、休みが 少ないです。", en: "This job pays well, while on the other hand it has few days off." }, accept: ["whereas", "conversely", "the flip side is"], hint: "反面 = 'the opposite face'. It hangs a good and a bad side of the SAME thing together — 一方 can contrast two different things, but はんめん needs one thing with two faces." },
        { id: "ja-u189l4-nitsuki", type: "vocab", front: "につき", reading: "nitsuki", meaning: "owing to; per; regarding", example: { jp: "本日は ていきゅうびにつき、お休みさせて いただきます。", en: "As today is our regular closing day, we are closed." }, accept: ["due to (formal notice)", "on account of", "each / apiece"], hint: "The notice-board word: 工事中につき, 品切れにつき — 'owing to X'. It also means 'per' in prices (一つにつき百円). Stiff and clipped, almost never spoken." },
        { id: "ja-u189l4-niatte", type: "vocab", front: "にあって", reading: "niatte", meaning: "in (a special situation)", example: { jp: "むずかしい 時代にあって、みんなが 力を あわせました。", en: "In difficult times, everyone joined their strength together." }, accept: ["being in (a situation)", "in the midst of", "situated in"], hint: "A literary において for a demanding circumstance — usually hard times or a pivotal position (この 立場にあって). Marks the setting AS the reason things matter." },
        { id: "ja-u189l4-toatte", type: "vocab", front: "とあって", reading: "toatte", meaning: "given that (a special situation)", example: { jp: "何年ぶりの お祭りとあって、町は 朝から にぎやかでした。", en: "Given that it was the first festival in years, the town was lively from morning." }, accept: ["because it was (a notable case)", "on account of it being", "seeing as"], hint: "States a special reason that makes the result only natural — reserved for the newsworthy or the unusual. Reads like a newspaper explaining a crowd." },
      ],
    },
  ],
};
