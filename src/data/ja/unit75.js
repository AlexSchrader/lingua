// Unit 75 — こうてき・がいねん ("Abstract concepts") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// N4 abstract nouns & concepts (result, reason, purpose, method, plan, feeling,
// relationship, change…). Modeled like the A1/A2 vocab units — vocab items, the
// noun as the headword. Every example uses only earlier vocab + basic grammar
// (を/に/の/は/が + です/ます), so it slots on top of a finished A1/A2.
// NATURALNESS: checked by the LLM naturalness review (content-auditor) plus Alex's
// Dev-Mode playtest. A human native review is a nice-to-have, NOT a blocker
// (CLAUDE.md, Alex 2026-07-12).
// DRILL SHAPE: every drill leads with its own front + a core particle, which is what
// ja sentenceTokens tiles. practice() REPLACES the example, so any other shape would
// strip sentence:build off an item whose example had it.
export const UNIT75 = {
  id: "ja-u75",
  lang: "ja",
  title: "こうてき・がいねん",
  order: 75,
  stage: "a2",
  lessons: [
    // Lesson 1: reasons & results
    {
      id: "ja-u75l1",
      unit: 75,
      lesson: 1,
      title: "Reasons & results",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about reasons and outcomes: けっか りゆう もくてき もくひょう こうか じじつ.",
      items: [
        { id: "ja-u75l1-kekka", type: "vocab", front: "けっか", reading: "kekka", meaning: "result", example: { jp: "テストのけっかを見ます。", en: "I look at the test result." }, drill: { jp: "けっかがわかりました。", en: "The result came out." }, accept: ["outcome", "results", "the upshot", "how it turned out"], hint: "kekka — けっ (tie up) + か (fruit): what the effort bore. Double っ is a held beat: kek-ka. The result of a cause; こうか later in this lesson is the effect something HAS on you." },
        { id: "ja-u75l1-riyu", type: "vocab", front: "りゆう", reading: "riyū", meaning: "reason", example: { jp: "りゆうを話します。", en: "I explain the reason." }, drill: { jp: "りゆうをききます。", en: "I ask the reason." }, accept: ["cause", "reasons", "the why", "grounds"], hint: "riyū — り (logic) + ゆう (reason). Long ū: ri-yū. It is the reason a person GIVES, so it pairs with 話します and ききます. The cause of a thing happening is げんいん." },
        { id: "ja-u75l1-mokuteki", type: "vocab", front: "もくてき", reading: "mokuteki", meaning: "purpose", example: { jp: "べんきょうのもくてきは何ですか。", en: "What is the purpose of studying?" }, drill: { jp: "もくてきをきめます。", en: "I decide the purpose." }, accept: ["aim", "objective", "the point of it", "intent"], hint: "mokuteki — もく (eye) + てき (mark): what the eye is aimed at. The REASON you are doing something, where もくひょう on the next card is the measurable target you set." },
        { id: "ja-u75l1-mokuhyo", type: "vocab", front: "もくひょう", reading: "mokuhyō", meaning: "goal", example: { jp: "あたらしいもくひょうがあります。", en: "I have a new goal." }, drill: { jp: "もくひょうにちかいです。", en: "I'm close to my goal." }, accept: ["target", "objective", "a set target", "what one aims at"], hint: "mokuhyō — もく (eye) + ひょう (mark, sign), sharing its もく with もくてき on the card before. Long ō: moku-hyō. A もくひょう is countable and checkable; a もくてき is the purpose behind it." },
        { id: "ja-u75l1-koka", type: "vocab", front: "こうか", reading: "kōka", meaning: "effect", example: { jp: "くすりのこうかがあります。", en: "The medicine has an effect." }, drill: { jp: "こうかがつづきます。", en: "The effect continues." }, accept: ["result", "efficacy", "how well it works", "impact"], hint: "kōka — こう (effect) + か (fruit): the fruit of a thing working. Long ō: kō-ka. こうかがある = it works. A けっか is what happened; a こうか is the good it did." },
        { id: "ja-u75l1-jijitsu", type: "vocab", front: "じじつ", reading: "jijitsu", meaning: "fact", example: { jp: "それはじじつです。", en: "That is a fact." }, drill: { jp: "じじつをしらべます。", en: "I look into the facts." }, accept: ["truth", "reality", "what actually happened", "the real situation"], hint: "jijitsu — じ (actual) + じつ (truth): the same じつ as in じっけん (experiment, u51). Four tight beats, ji-ji-tsu, and the repeated ji is what makes it slippery to say." },
      ],
    },
    // Lesson 2: plans & methods
    {
      id: "ja-u75l2",
      unit: 75,
      lesson: 2,
      title: "Plans & methods",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe plans and how things are done: ほうほう けいかく じょうけん ないよう きろく しんぽ.",
      items: [
        { id: "ja-u75l2-hoho", type: "vocab", front: "ほうほう", reading: "hōhō", meaning: "method", example: { jp: "いいほうほうをおしえます。", en: "I'll teach you a good method." }, drill: { jp: "ほうほうがむずかしいです。", en: "The method is difficult." }, accept: ["way", "means", "a procedure", "how to do it"], hint: "hōhō — ほう (way) + ほう (way) twice over, and BOTH are long ō: hō-hō. The how of doing something. Asking ほうほうは？ means 'how?' in a practical, step-by-step sense." },
        { id: "ja-u75l2-keikaku", type: "vocab", front: "けいかく", reading: "keikaku", meaning: "plan (a worked-out plan)", example: { jp: "あたらしいけいかくがあります。", en: "There is a new plan." }, drill: { jp: "けいかくをかぞくにはなします。", en: "I tell my family the plan." }, accept: ["planning", "schedule", "a scheme", "a worked-out plan"], hint: "keikaku — a plan with steps in it, bigger than よてい (a schedule entry) and more worked out than きかく from u71 (a proposal). けいかくてき means methodical." },
        { id: "ja-u75l2-joken", type: "vocab", front: "じょうけん", reading: "jōken", meaning: "condition (a requirement)", example: { jp: "しごとのじょうけんがいいです。", en: "The job conditions are good." }, drill: { jp: "じょうけんをしらべます。", en: "I look into the conditions." }, accept: ["terms", "requirement", "the stipulations", "what is required"], hint: "jōken — じょう (article, clause) + けん (matter): a stated requirement, as in a contract or a job ad. Long ō: jō-ken. Not the state a thing is IN — that is じょうたい in lesson 4." },
        { id: "ja-u75l2-naiyo", type: "vocab", front: "ないよう", reading: "naiyō", meaning: "content", example: { jp: "ほんのないようはおもしろいです。", en: "The content of the book is interesting." }, drill: { jp: "ないようをおしえます。", en: "I explain the content." }, accept: ["substance", "details", "what's in it", "the gist"], hint: "naiyō — ない (inside) + よう (shape): what is inside, as against the cover or form. Long ō: nai-yō. The same ない as こくない (u74), 'inside the country'." },
        { id: "ja-u75l2-kiroku", type: "vocab", front: "きろく", reading: "kiroku", meaning: "record", example: { jp: "きろくを見ます。", en: "I look at the record." }, drill: { jp: "きろくをノートにかきます。", en: "I write the record in a notebook." }, accept: ["log", "records", "a written account", "a best time"], hint: "kiroku — き (write) + ろく (note down): the same ろく as とうろく (register, u50). It is a written log AND a sporting record, so きろくをだす means setting a new best." },
        { id: "ja-u75l2-shinpo", type: "vocab", front: "しんぽ", reading: "shinpo", meaning: "progress", example: { jp: "まいにちしんぽします。", en: "I make progress every day." }, drill: { jp: "しんぽがはやいです。", en: "The progress is fast." }, accept: ["advancement", "improvement", "getting better", "forward movement"], hint: "shinpo — しん (advance) + ぽ (step): a step forward. Built on the same しん as しんせん (fresh, u73). The verb すすみます from u45 is the motion; しんぽ is the gain." },
      ],
    },
    // Lesson 3: thoughts & feelings
    {
      id: "ja-u75l3",
      unit: 75,
      lesson: 3,
      title: "Thoughts & feelings",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Express thoughts and states of mind: かんがえ はんだん いけん とくちょう ようす ちゅうい.",
      items: [
        { id: "ja-u75l3-kangae", type: "vocab", front: "かんがえ", reading: "kangae", meaning: "idea", example: { jp: "いいかんがえがあります。", en: "I have a good idea." }, drill: { jp: "かんがえをはなします。", en: "I share my thinking." }, accept: ["thought", "thinking", "a view", "what one thinks"], hint: "kangae — the noun form of かんがえる, to think, made by swapping る for nothing. A かんがえ is a thought you hold; an いけん, two cards along, is one you state to others." },
        { id: "ja-u75l3-handan", type: "vocab", front: "はんだん", reading: "handan", meaning: "judgment", example: { jp: "はやくはんだんします。", en: "I make a judgment quickly." }, drill: { jp: "はんだんがはやいです。", en: "He is quick to judge." }, accept: ["decision", "judgement", "weighing it up", "a call"], hint: "handan — はん (discern) + だん (decide): sizing a thing up and calling it. Used with します. A きめます (u45) picks an option; a はんだん works out which option is right." },
        { id: "ja-u75l3-iken", type: "vocab", front: "いけん", reading: "iken", meaning: "opinion", example: { jp: "わたしのいけんを話します。", en: "I share my opinion." }, drill: { jp: "いけんをききます。", en: "I ask for an opinion." }, accept: ["view", "opinions", "a point of view", "input"], hint: "iken — い (intention) + けん (view): a view you put forward. いけんをいう is to voice it. ⚠️ A same-sounding いけん with other kanji means 'objection', which is close enough to confuse." },
        { id: "ja-u75l3-tokucho", type: "vocab", front: "とくちょう", reading: "tokuchō", meaning: "characteristic", example: { jp: "このまちのとくちょうです。", en: "It's a feature of this town." }, drill: { jp: "とくちょうがおもしろいです。", en: "The characteristic is interesting." }, accept: ["feature", "trait", "a distinguishing mark", "what sets it apart"], hint: "tokuchō — とく (special) + ちょう (sign): the special sign of a thing. Long ō: toku-chō. The same とく as とっきゅう (u74) and とくべつ: とく always marks something singled out." },
        { id: "ja-u75l3-yosu", type: "vocab", front: "ようす", reading: "yōsu", meaning: "situation", example: { jp: "そとのようすを見ます。", en: "I check the situation outside." }, drill: { jp: "ようすがかわりました。", en: "The situation has changed." }, accept: ["state", "appearance", "how things look", "the look of it"], hint: "yōsu — how a thing LOOKS from outside, judged by eye: ようすをみる is to watch and wait. Long ō: yō-su. Note ようです from u43 ('it seems') is built on this same よう." },
        { id: "ja-u75l3-chui", type: "vocab", front: "ちゅうい", reading: "chūi", meaning: "caution", example: { jp: "くるまにちゅういします。", en: "I watch out for cars." }, drill: { jp: "ちゅういのことばをききます。", en: "I hear a word of caution." }, accept: ["care", "attention", "watching out", "a warning"], hint: "chūi — ちゅう (pour) + い (mind): pouring your mind into something. Long ū: chū-i. What you watch out for takes に. ちゅういして is what a parent says at the door." },
      ],
    },
    // Lesson 4: relations & change
    {
      id: "ja-u75l4",
      unit: 75,
      lesson: 4,
      title: "Relations & change",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Compare and describe change: かんけい ちがい しゅるい じょうたい へんか せいかつ.",
      items: [
        { id: "ja-u75l4-kankei", type: "vocab", front: "かんけい", reading: "kankei", meaning: "relationship", example: { jp: "ふたりのかんけいはいいです。", en: "The relationship between the two is good." }, drill: { jp: "かんけいがかわります。", en: "The relationship changes." }, accept: ["relation", "connection", "how two things relate", "ties"], hint: "kankei — かん (relate) + けい (tie): the tie between two things, people or facts. かんけいない, 'no relation', is the everyday way of saying 'that's beside the point'." },
        { id: "ja-u75l4-chigai", type: "vocab", front: "ちがい", reading: "chigai", meaning: "difference", example: { jp: "いろのちがいがわかります。", en: "I can tell the difference in color." }, drill: { jp: "ちがいをせんせいにききます。", en: "I ask the teacher about the difference." }, accept: ["distinction", "differences", "what is not the same", "a discrepancy"], hint: "chigai — the noun of ちがいます (u19), to differ. ちがいがわかる, 'to be able to tell the difference', is the standard phrase for a trained palate or ear." },
        { id: "ja-u75l4-shurui", type: "vocab", front: "しゅるい", reading: "shurui", meaning: "kind (a variety of something)", example: { jp: "くだもののしゅるいがおおいです。", en: "There are many kinds of fruit." }, drill: { jp: "しゅるいがすくないです。", en: "There are few kinds." }, accept: ["type", "variety", "a sort", "category"], hint: "shurui — しゅ (species) + るい (class): a category of thing. Japanese counts kinds with it: しゅるいがおおい means a wide selection, which is what a menu boasts." },
        { id: "ja-u75l4-jotai", type: "vocab", front: "じょうたい", reading: "jōtai", meaning: "condition (the state something is in)", example: { jp: "くるまのじょうたいはいいです。", en: "The car is in good condition." }, drill: { jp: "じょうたいをしらべます。", en: "I check the condition." }, accept: ["state", "situation", "the state it's in", "how it stands"], hint: "jōtai — じょう (state) + たい (form): the state a thing is in right now. Long ō: jō-tai. Do not confuse it with じょうけん in lesson 2, a stated requirement — same じょう, opposite job." },
        { id: "ja-u75l4-henka", type: "vocab", front: "へんか", reading: "henka", meaning: "change (a shift in something)", example: { jp: "てんきのへんかがはやいです。", en: "The weather changes quickly." }, drill: { jp: "へんかがありました。", en: "There was a change." }, accept: ["shift", "variation", "a transformation", "movement"], hint: "henka — へん (change) + か (become): the change itself, as a noun. The verb is かわります, from u69. へんかがはやい is said of weather, markets and moods alike." },
        { id: "ja-u75l4-seikatsu", type: "vocab", front: "せいかつ", reading: "seikatsu", meaning: "daily life", example: { jp: "にほんのせいかつはたのしいです。", en: "Life in Japan is fun." }, drill: { jp: "せいかつがかわりました。", en: "My daily life has changed." }, accept: ["living", "lifestyle", "day-to-day life", "how one lives"], hint: "seikatsu — せい (live) + かつ (activity): the activity of living, i.e. daily life and how you fund it. It is NOT じんせい, a whole lifespan. せいかつひ is living costs." },
      ],
    },
  ],
};
