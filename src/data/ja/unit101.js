// Unit 101 — げんいん・けっか ("Cause and consequence") — B1 / JLPT N3
// A2 already owns げんいん, けっか, りゆう and the plain connectives から・ので・それで
// (u30, u75, u92). This unit is the layer above: the words for *evidence* (こんきょ,
// しょうこ), for *what set something off* (きっかけ, はいけい, よういん), the written
// connectives a B1 learner meets in an article (したがって, なぜなら, ようするに), and
// the verbs that link one event to another (もたらします, もとづきます, ふせぎます).
export const UNIT101 = {
  id: "ja-u101",
  lang: "ja",
  title: "げんいん・けっか",
  order: 101,
  stage: "b1",
  lessons: [
    // Lesson 1: naming the cause
    {
      id: "ja-u101l1",
      unit: 101,
      lesson: 1,
      title: "Naming the cause",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what lies behind something and what set it off: よういん はいけい きっかけ こんきょ しょうこ せい.",
      items: [
        { id: "ja-u101l1-yoin", type: "vocab", front: "よういん", reading: "yōin", meaning: "factor", example: { jp: "しっぱいのよういんはいくつもあって、ひとつではありません。", en: "There are several factors behind the failure, not just one." }, accept: ["cause", "element", "contributing cause"], hint: "要因 = 要 (essential) + 因 (cause). One cause among several — where げんいん is *the* cause, よういん is *a* factor." },
        { id: "ja-u101l1-haikei", type: "vocab", front: "はいけい", reading: "haikei", meaning: "background", example: { jp: "その問題のはいけいを知らないと、ニュースはりかいできません。", en: "If you don't know the background to the problem, you can't understand the news." }, accept: ["context", "backdrop", "circumstances"], hint: "背景 = 背 (back) + 景 (scenery). Both the background of a photo and the background to an event." },
        { id: "ja-u101l1-kikkake", type: "vocab", front: "きっかけ", reading: "kikkake", meaning: "trigger", example: { jp: "日本語を始めたきっかけは、友だちにもらった一まいのCDでした。", en: "What got me started on Japanese was a single CD a friend gave me." }, accept: ["the thing that started it", "opportunity", "occasion"], hint: "きっかけ = the small thing that started a big thing. ～がきっかけで = 'sparked by ～'. One of the most useful words at this level." },
        { id: "ja-u101l1-konkyo", type: "vocab", front: "こんきょ", reading: "konkyo", meaning: "grounds", example: { jp: "こんきょのないうわさなので、しんじないほうがいいです。", en: "It's a rumour with no grounds, so you shouldn't believe it." }, accept: ["basis", "evidence", "foundation"], hint: "根拠 = 根 (root) + 拠 (rely on). The reasoning your claim stands on — こんきょがある / ない." },
        { id: "ja-u101l1-shoko", type: "vocab", front: "しょうこ", reading: "shōko", meaning: "evidence", example: { jp: "しょうこがはっきりしないので、まだ何も言えません。", en: "The evidence isn't clear, so I can't say anything yet." }, accept: ["proof", "sign"], hint: "証拠 = the physical proof. こんきょ is the reasoning, しょうこ is the thing you can put on the table." },
        { id: "ja-u101l1-sei", type: "vocab", front: "せい", reading: "sei", meaning: "fault", example: { jp: "電車がおくれたせいで、かいぎにまにあいませんでした。", en: "Because the train was late, I didn't make it to the meeting." }, accept: ["blame", "because of", "due to"], hint: "せい blames — ～のせいで (because of, and I'm unhappy about it). Its opposite is おかげで, which thanks. Never mix them up." },
      ],
    },
    // Lesson 2: what follows from it
    {
      id: "ja-u101l2",
      unit: 101,
      lesson: 2,
      title: "What follows",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe the effect something had: えいきょう けっきょく つながり しょうじます はんのう ぎゃくに.",
      items: [
        { id: "ja-u101l2-eikyo", type: "vocab", front: "えいきょう", reading: "eikyō", meaning: "influence", example: { jp: "天気のえいきょうで、しゅうまつのイベントは中止になりました。", en: "Because of the weather's effect, the weekend event was cancelled." }, accept: ["effect", "impact"], hint: "影響 = the knock-on effect one thing has on another. ～にえいきょうをあたえる = to have an effect on ～." },
        { id: "ja-u101l2-kekkyoku", type: "vocab", front: "けっきょく", reading: "kekkyoku", meaning: "in the end", example: { jp: "いろいろ考えましたが、けっきょくいちばん安いものを買いました。", en: "I thought about it a lot, but in the end I bought the cheapest one." }, accept: ["after all", "ultimately", "finally"], hint: "結局 = after all that. Carries a small shrug — the outcome wasn't what the effort promised." },
        { id: "ja-u101l2-tsunagari", type: "vocab", front: "つながり", reading: "tsunagari", meaning: "connection", example: { jp: "二つのじけんのつながりは、まだわかっていません。", en: "The connection between the two incidents isn't understood yet." }, accept: ["link", "relationship", "tie"], hint: "つながり — the noun from つながります. Used for links between events, and for human ties: 人とのつながり." },
        { id: "ja-u101l2-shojimasu", type: "vocab", front: "しょうじます", reading: "shōjimasu", meaning: "arise", example: { jp: "あたらしい方ほうをつかったら、べつの問題がしょうじました。", en: "When we used the new method, a different problem arose." }, accept: ["to occur", "come about", "be produced"], hint: "生じます = arise / come about. Formal and impersonal — problems, differences and costs しょうじる; people and animals うまれる." },
        { id: "ja-u101l2-hanno", type: "vocab", front: "はんのう", reading: "hannō", meaning: "reaction", example: { jp: "ていあんへのはんのうはよくて、すぐに始めることになりました。", en: "The reaction to the proposal was good, so we decided to start straight away." }, accept: ["response", "reception"], hint: "反応 = 反 (back) + 応 (respond). Covers a person's reaction, a chemical reaction and a screen responding to a tap." },
        { id: "ja-u101l2-gyakuni", type: "vocab", front: "ぎゃくに", reading: "gyakuni", meaning: "conversely", example: { jp: "早く出ましたが、ぎゃくに道がこんでいておそくなりました。", en: "I left early, but conversely the roads were busy and I ended up late." }, accept: ["on the contrary", "the other way round", "instead"], hint: "逆に = the other way round. Flags that the result went *against* what you'd expect — the sentence's little surprise marker." },
      ],
    },
    // Lesson 3: the connectives that carry the logic
    {
      id: "ja-u101l3",
      unit: 101,
      lesson: 3,
      title: "Written connectives",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Join two clauses the way writing does: なぜなら というのは ために したがって ようするに すなわち.",
      items: [
        { id: "ja-u101l3-nazenara", type: "vocab", front: "なぜなら", reading: "nazenara", meaning: "the reason is", example: { jp: "この方ほうをえらびました。なぜなら、いちばん安くて早いからです。", en: "I chose this method — the reason being that it's the cheapest and fastest." }, accept: ["because", "for the reason that"], hint: "なぜなら opens the *next* sentence and pairs with ～からです at the end. Written and formal-spoken; you wouldn't say it to a friend." },
        { id: "ja-u101l3-toiunowa", type: "vocab", front: "というのは", reading: "toiunowa", meaning: "that is to say", example: { jp: "きょうは早く帰ります。というのは、あした朝早くから会ぎがあるからです。", en: "I'm going home early today — that is, because I have a meeting early tomorrow morning." }, accept: ["the thing is", "namely", "because"], hint: "というのは introduces the explanation of what you just said. Softer and more conversational than なぜなら." },
        { id: "ja-u101l3-tameni", type: "vocab", front: "ために", reading: "tameni", meaning: "in order to", example: { jp: "日本ではたらくために、まいばん二時間勉強しています。", en: "In order to work in Japan, I study for two hours every night." }, accept: ["for the purpose of", "because of", "for the sake of"], hint: "ために does double duty: after a verb it's purpose (in order to), after a noun or past event it's cause (because of). 雨のために = because of the rain." },
        { id: "ja-u101l3-shitagatte", type: "vocab", front: "したがって", reading: "shitagatte", meaning: "therefore", example: { jp: "ざいりょうのねだんが上がりました。したがって、しょうひんも高くなります。", en: "The price of materials has risen; therefore the products will also become more expensive." }, accept: ["consequently", "accordingly", "thus"], hint: "従って = the formal だから. Reports, notices and news use it; conversation uses それで or だから." },
        { id: "ja-u101l3-yosuruni", type: "vocab", front: "ようするに", reading: "yōsuruni", meaning: "in short", example: { jp: "長く話しましたが、ようするに時間もお金も足りないということです。", en: "I've talked a long time, but in short, we have neither the time nor the money." }, accept: ["in a word", "to sum up", "basically"], hint: "要するに = boiling it down. Handy when you've explained badly and want to restart: ようするに、～ということです。" },
        { id: "ja-u101l3-sunawachi", type: "vocab", front: "すなわち", reading: "sunawachi", meaning: "namely", example: { jp: "この国のしゅと、すなわち一ばん大きな町はここです。", en: "This country's capital — namely, its largest city — is here." }, accept: ["that is", "in other words", "i.e."], hint: "すなわち is the written cousin of つまり. You will meet it in articles and textbooks far more often than in speech." },
      ],
    },
    // Lesson 4: verbs that link cause to effect
    {
      id: "ja-u101l4",
      unit: 101,
      lesson: 4,
      title: "Linking verbs",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how one thing acts on another: もたらします かかわります もとづきます ふせぎます さけます たいおう.",
      items: [
        { id: "ja-u101l4-motarashimasu", type: "vocab", front: "もたらします", reading: "motarashimasu", meaning: "bring about", example: { jp: "あたらしいぎじゅつは、せいかつに大きなへんかをもたらしました。", en: "The new technology brought about a big change in daily life." }, accept: ["to bring", "cause", "give rise to"], hint: "もたらします = bring about. Used for big, impersonal results — technology, weather, war. Never for handing someone an object." },
        { id: "ja-u101l4-kakawarimasu", type: "vocab", front: "かかわります", reading: "kakawarimasu", meaning: "be involved", example: { jp: "そのけいかくにはたくさんの人がかかわっていて、話がすすみません。", en: "A lot of people are involved in that plan, so it isn't moving forward." }, accept: ["to concern", "relate to", "take part in"], hint: "関わります takes に: しごとにかかわる. Also 'to be a matter of' — 命にかかわる問題 (a matter of life and death)." },
        { id: "ja-u101l4-motozukimasu", type: "vocab", front: "もとづきます", reading: "motozukimasu", meaning: "be based on", example: { jp: "このけつろんはじっさいのデータにもとづいています。", en: "This conclusion is based on actual data." }, accept: ["to be founded on", "rest on", "derive from"], hint: "基づきます takes に. You will meet it constantly in written Japanese: 事実にもとづく話 = a story based on fact." },
        { id: "ja-u101l4-fusegimasu", type: "vocab", front: "ふせぎます", reading: "fusegimasu", meaning: "prevent", example: { jp: "手をよくあらえば、かぜをふせぐことができます。", en: "If you wash your hands well, you can prevent catching a cold." }, accept: ["to protect against", "guard", "stop"], hint: "防ぎます = stop something bad before it happens. びょうきをふせぐ, じこをふせぐ." },
        { id: "ja-u101l4-sakemasu", type: "vocab", front: "さけます", reading: "sakemasu", meaning: "avoid", example: { jp: "こんでいる時間をさけたので、ゆっくりすわれました。", en: "I avoided the busy hours, so I was able to sit down comfortably." }, accept: ["to keep away from", "steer clear of", "dodge"], hint: "避けます = get out of the way of. ふせぎます stops the thing happening; さけます keeps *you* out of it." },
        { id: "ja-u101l4-taio", type: "vocab", front: "たいおう", reading: "taiō", meaning: "response", example: { jp: "店の人のたいおうがよかったので、また行きたいと思います。", en: "The shop staff's handling of it was good, so I'd like to go again." }, accept: ["handling", "dealing with", "correspondence"], hint: "対応 = how you deal with a situation or a customer. たいおうします = to handle it. はんのう is the reflex; たいおう is the considered response." },
      ],
    },
  ],
};
