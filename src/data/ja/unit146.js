// JA Unit 146 — ごい・N3・5 (ふくし・1 — degree, frequency, amount) — B1 / JLPT N3
// Strand D, coverage 5 of 14. Adverbs are the cheapest possible upgrade to a learner's
// output: the sentence is already correct, and one word turns "it was cold" into "it was
// considerably cold" or "it was hardly cold at all". A1/A2 taught the obvious ones
// (とても, すこし, いつも, ときどき); this unit fills in the middle of the scale, which is
// where real speech spends most of its time.
// Several here REQUIRE a negative verb (たいして, ろくに, すこしも, めったに) — that is
// flagged on every hint, because using them positively is the mistake learners make.
export const UNIT146 = {
  id: "ja-u146",
  lang: "ja",
  title: "ごい・N3・5",
  order: 146,
  stage: "b1",
  lessons: [
    {
      id: "ja-u146l1",
      unit: 146,
      lesson: 1,
      title: "How much — the middle of the scale",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Grade a statement instead of stating it flat: そうとう, やや, たいして, ろくに, おおいに, すこしも.",
      items: [
        { id: "ja-u146l1-soto", type: "vocab", front: "そうとう", reading: "sōtō", meaning: "considerably, quite", example: { jp: "そうとうつかれていたので、すぐにねてしまいました。", en: "I was pretty worn out, so I fell asleep straight away." }, accept: ["fairly", "a good deal", "substantially"], hint: "Stronger than かなり and more objective — it sounds like a measured estimate rather than an impression." },
        { id: "ja-u146l1-yaya", type: "vocab", front: "やや", reading: "yaya", meaning: "slightly, somewhat", example: { jp: "ことしのなつは、きょねんよりややあついです。", en: "This summer is slightly hotter than last year." }, accept: ["a little", "marginally", "a shade"], hint: "The written すこし, common in weather reports and data. In conversation ちょっと does the same job." },
        { id: "ja-u146l1-taishite", type: "vocab", front: "たいして", reading: "taishite", meaning: "not particularly", example: { jp: "たいしておいしくないので、もういきません。", en: "It isn't particularly good, so I won't go again." }, accept: ["not that much", "hardly", "not so"], hint: "MUST take a negative. たいしておいしい is ungrammatical — the word only exists to soften a complaint." },
        { id: "ja-u146l1-rokuni", type: "vocab", front: "ろくに", reading: "rokuni", meaning: "hardly (at all)", example: { jp: "いそがしくて、ろくにねていません。", en: "I've been so busy I've hardly slept." }, accept: ["barely", "scarcely", "not properly"], hint: "Also negative-only, and it complains: not just 'a little' but 'not even the minimum'. Stronger than あまり." },
        { id: "ja-u146l1-oini", type: "vocab", front: "おおいに", reading: "ōini", meaning: "greatly, very much", example: { jp: "きょうはみなさんのいけんを、おおいにききたいです。", en: "Today I very much want to hear everyone's opinions." }, accept: ["a lot", "highly", "enormously"], hint: "Formal and positive, common in speeches: おおいにたのしんでください. The everyday equivalent is たくさん or とても." },
        { id: "ja-u146l1-sukoshimo", type: "vocab", front: "すこしも", reading: "sukoshimo", meaning: "not at all", example: { jp: "くすりをのみましたが、すこしもよくなりません。", en: "I took the medicine, but I'm not getting any better at all." }, accept: ["not in the least", "not a bit", "none whatsoever"], hint: "すこし + も + negative. The も is what makes it absolute — same trick as なにも and だれも." },
      ],
    },
    {
      id: "ja-u146l2",
      unit: 146,
      lesson: 2,
      title: "How often",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place an action on the frequency scale: めったに, しょっちゅう, つねに, ふだん, たびたび, しばしば.",
      items: [
        { id: "ja-u146l2-mettani", type: "vocab", front: "めったに", reading: "mettani", meaning: "rarely, hardly ever", example: { jp: "このへんではめったにゆきがふりません。", en: "It hardly ever snows around here." }, accept: ["seldom", "almost never", "infrequently"], hint: "Negative-only, like たいして. めったにない is a set phrase meaning 'rare' — めったにないチャンス." },
        { id: "ja-u146l2-shotchu", type: "vocab", front: "しょっちゅう", reading: "shotchū", meaning: "constantly, all the time", example: { jp: "かれはしょっちゅうちこくするので、こまっています。", en: "He's late all the time, which is a problem." }, accept: ["always (annoyingly)", "over and over", "frequently"], hint: "Casual and usually complaining. いつも is neutral; しょっちゅう implies it's too often." },
        { id: "ja-u146l2-tsuneni", type: "vocab", front: "つねに", reading: "tsuneni", meaning: "always, at all times", example: { jp: "つねにあたらしいことをまなぶようにしています。", en: "I make a point of always learning something new." }, accept: ["constantly", "invariably", "ever"], hint: "The formal, principled いつも — the 'always' of policies and personal rules rather than of habits." },
        { id: "ja-u146l2-fudan", type: "vocab", front: "ふだん", reading: "fudan", meaning: "usually, normally", example: { jp: "ふだんはでんしゃですが、きょうはあるいてきました。", en: "I normally take the train, but today I walked." }, accept: ["ordinarily", "day to day", "as a rule"], hint: "Marks your default, setting up an exception — ふだんは…が… is the shape it almost always appears in." },
        { id: "ja-u146l2-tabitabi", type: "vocab", front: "たびたび", reading: "tabitabi", meaning: "repeatedly, again and again", example: { jp: "たびたびメールをおくりましたが、へんじがありません。", en: "I've sent emails repeatedly, but there's no reply." }, accept: ["time after time", "often", "many times"], hint: "Counts the repetitions rather than the rate. たびたびすみません is a standard apology for contacting someone yet again." },
        { id: "ja-u146l2-shibashiba", type: "vocab", front: "しばしば", reading: "shibashiba", meaning: "often (written)", example: { jp: "このもんだいは、しばしばテストにでます。", en: "This problem often comes up in the test." }, accept: ["frequently", "many a time", "not infrequently"], hint: "Written Japanese only — essays and reports. Saying it aloud sounds bookish; use よく instead." },
      ],
    },
    {
      id: "ja-u146l3",
      unit: 146,
      lesson: 3,
      title: "Roughly, entirely, at most",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Be precise about being imprecise: ほぼ, およそ, たっぷり, せいぜい, まったく, ひたすら.",
      items: [
        { id: "ja-u146l3-hobo", type: "vocab", front: "ほぼ", reading: "hobo", meaning: "almost, nearly", example: { jp: "しごとはほぼおわりましたので、あとすこしです。", en: "The work is almost finished — just a little more." }, accept: ["practically", "just about", "roughly"], hint: "ほぼ is 'so close it hardly matters'; だいたい is 'about, give or take'. ほぼ is tighter." },
        { id: "ja-u146l3-oyoso", type: "vocab", front: "およそ", reading: "oyoso", meaning: "approximately", example: { jp: "えきからおよそ10ぷんあるくと、こうえんがあります。", en: "Walk about ten minutes from the station and there's a park." }, accept: ["about", "some (quantity)", "in the region of"], hint: "The written やく — reports and signs. Before a negative it flips to 'utterly': およそいみがない." },
        { id: "ja-u146l3-tappuri", type: "vocab", front: "たっぷり", reading: "tappuri", meaning: "plenty of, amply", example: { jp: "じかんはたっぷりあるので、ゆっくりいきましょう。", en: "We have plenty of time, so let's take it slowly." }, accept: ["generously", "a good amount", "loads of"], hint: "A comfortable, generous amount — you will not run out. Common with time, sleep and sauce." },
        { id: "ja-u146l3-seizei", type: "vocab", front: "せいぜい", reading: "seizei", meaning: "at most, at best", example: { jp: "きゃくはせいぜい20にんぐらいだとおもいます。", en: "I think there'll be twenty guests at most." }, accept: ["no more than", "at the outside", "as much as"], hint: "Caps an estimate, usually with a hint of disappointment — 'and that's the best case'." },
        { id: "ja-u146l3-mattaku", type: "vocab", front: "まったく", reading: "mattaku", meaning: "completely; (not) at all", example: { jp: "いわれたことが、まったくわかりませんでした。", en: "I didn't understand what I was told at all." }, accept: ["utterly", "entirely", "totally"], hint: "Positive it means 'entirely'; with a negative it means 'not in the slightest'. Alone — まったく。 — it's an exasperated 'honestly…'." },
        { id: "ja-u146l3-hitasura", type: "vocab", front: "ひたすら", reading: "hitasura", meaning: "single-mindedly, nothing but", example: { jp: "しあいのまえは、ひたすられんしゅうしました。", en: "Before the match, I did nothing but practise." }, accept: ["intently", "devotedly", "solely"], hint: "One activity to the exclusion of everything else. Carries admiration for the effort — or pity for the obsession." },
      ],
    },
    {
      id: "ja-u146l4",
      unit: 146,
      lesson: 4,
      title: "Further, gradually, for now",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Track a change or stage a plan: さらに, いっそう, しだいに, いよいよ, とりあえず, ひとまず.",
      items: [
        { id: "ja-u146l4-sarani", type: "vocab", front: "さらに", reading: "sarani", meaning: "further, on top of that", example: { jp: "ねだんがあがり、さらにサービスもわるくなりました。", en: "The price went up, and on top of that the service got worse." }, accept: ["moreover", "additionally", "even more"], hint: "Adds another step to something already happening. As a connector it means 'furthermore'; before an adjective, 'even more'." },
        { id: "ja-u146l4-isso", type: "vocab", front: "いっそう", reading: "issō", meaning: "even more so", example: { jp: "せつめいをきいて、いっそうきょうみをもちました。", en: "Hearing the explanation, I became even more interested." }, accept: ["all the more", "still more", "increasingly"], hint: "Comparative intensity, usually because of a reason just given. より いっそう is a common doubled form in formal speech." },
        { id: "ja-u146l4-shidaini", type: "vocab", front: "しだいに", reading: "shidaini", meaning: "gradually", example: { jp: "はるになって、しだいにあたたかくなってきました。", en: "Spring came and it has gradually got warmer." }, accept: ["little by little", "progressively", "by degrees"], hint: "The written だんだん. Pairs naturally with てきます (u138) — a change moving toward now." },
        { id: "ja-u146l4-iyoiyo", type: "vocab", front: "いよいよ", reading: "iyoiyo", meaning: "at last, finally (it's here)", example: { jp: "いよいよあしたはしけんです。よくねましょう。", en: "Tomorrow is finally the exam. Let's get a good sleep." }, accept: ["the moment has come", "at long last", "now at last"], hint: "Anticipation for something about to START. ようやく is relief that something ENDED — that is the whole difference." },
        { id: "ja-u146l4-toriaezu", type: "vocab", front: "とりあえず", reading: "toriaezu", meaning: "for now, first of all", example: { jp: "とりあえずビールをたのんで、あとできめましょう。", en: "Let's order beer for now and decide later." }, accept: ["to begin with", "in the meantime", "provisionally"], hint: "The most-used word in a Japanese restaurant: とりあえずビール. It means 'this'll do until we think properly'." },
        { id: "ja-u146l4-hitomazu", type: "vocab", front: "ひとまず", reading: "hitomazu", meaning: "for the time being", example: { jp: "もんだいはのこっていますが、ひとまずあんしんしました。", en: "Problems remain, but for now I'm relieved." }, accept: ["for the moment", "tentatively", "for now"], hint: "Marks a pause, not a finish — ひとまずおわり means 'that's it for now'. とりあえず is about the first step; ひとまず is about stopping safely." },
      ],
    },
  ],
};
