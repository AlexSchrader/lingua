// Unit 116 — へんか・じかん ("Change over time") — B1 / JLPT N3
// The last thematic unit of block 1. A2 owns へんか, しんぽ and the everyday time words
// (u56, u75). This unit is what a learner needs to narrate a *trend*: the nouns for
// rising and falling (ぞうか, げんしょう, けいこう), the verbs that go with them, the
// time positions a report uses (かこ, げんざい, とうじ), and the adverbs that pace a
// change out (じょじょに, しだいに, やがて). Examples are two clauses wherever the word
// allows it, per the B1 spec — a trend needs a before and an after to be a trend.
export const UNIT116 = {
  id: "ja-u116",
  lang: "ja",
  title: "へんか・じかん",
  order: 116,
  stage: "b1",
  lessons: [
    {
      id: "ja-u116l1",
      unit: 116,
      lesson: 1,
      title: "Rising and falling",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a trend: ぞうか げんしょう はってん いじ ながれ けいこう.",
      items: [
        { id: "ja-u116l1-zoka", type: "vocab", front: "ぞうか", reading: "zōka", meaning: "increase", example: { jp: "がいこくから来る人のぞうかで、町がにぎやかになりました。", en: "With the increase in people coming from abroad, the town has become lively." }, accept: ["growth", "to increase", "rise"], hint: "増加 = 増 (increase) + 加 (add). The written word for a rise in a number; in speech you'd say ふえる." },
        { id: "ja-u116l1-gensho", type: "vocab", front: "げんしょう", reading: "genshō", meaning: "decrease", example: { jp: "子どものげんしょうがつづいて、学校が一つへりました。", en: "The decline in children continued, and one school closed." }, accept: ["decline", "reduction", "to decrease"], hint: "減少 = 減 (reduce) + 少 (few) — the exact mirror of ぞうか. じんこうげんしょう (population decline) is a phrase heard constantly in Japan." },
        { id: "ja-u116l1-hatten", type: "vocab", front: "はってん", reading: "hatten", meaning: "development", example: { jp: "この町はぎじゅつではってんしましたが、しぜんものこっています。", en: "This town developed through technology, but its nature remains too." }, accept: ["growth", "to develop", "expansion"], hint: "発展 = 発 (emit) + 展 (unfold). Growth *outward*. しんぽ (progress) is getting better; はってん is getting bigger." },
        { id: "ja-u116l1-iji", type: "vocab", front: "いじ", reading: "iji", meaning: "maintenance", example: { jp: "いまのじょうたいをいじするだけでも、たいへんです。", en: "Just maintaining the current state is hard work." }, accept: ["to maintain", "upkeep", "preservation"], hint: "維持 = 維 (tie) + 持 (hold): holding a thing where it is. けんこういじ (keeping healthy), げんじょういじ (keeping the status quo)." },
        { id: "ja-u116l1-nagare", type: "vocab", front: "ながれ", reading: "nagare", meaning: "flow", example: { jp: "話のながれがかわったので、しつもんをするのをやめました。", en: "The flow of the conversation changed, so I stopped asking questions." }, accept: ["current", "trend", "course"], hint: "流れ = the current. Used for rivers, conversations, time and fashion — 時代のながれ = the way the times are moving." },
        { id: "ja-u116l1-keiko", type: "vocab", front: "けいこう", reading: "keikō", meaning: "tendency", example: { jp: "さいきんはじぶんで作る人がふえるけいこうにあります。", en: "Recently there's a tendency for more people to make things themselves." }, accept: ["trend", "inclination", "leaning"], hint: "傾向 = 傾 (lean) + 向 (face — u108): which way things are leaning. ～けいこうにある = 'there is a tendency to ～'." },
      ],
    },
    {
      id: "ja-u116l2",
      unit: 116,
      lesson: 2,
      title: "Verbs of change",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how something changed: ふえます へります のびます たもちます くりかえします おとろえます.",
      items: [
        { id: "ja-u116l2-fuemasu", type: "vocab", front: "ふえます", reading: "fuemasu", meaning: "increase", example: { jp: "しごとがふえたので、休みの日もはたらいています。", en: "My work has increased, so I'm working on days off too." }, accept: ["to grow in number", "rise", "multiply"], hint: "増えます is intransitive — things ふえる by themselves. To increase something yourself is ふやします." },
        { id: "ja-u116l2-herimasu", type: "vocab", front: "へります", reading: "herimasu", meaning: "decrease", example: { jp: "歩く時間がへってから、少しふとってしまいました。", en: "Since my walking time decreased, I've put on a little weight." }, accept: ["to diminish", "go down", "shrink"], hint: "減ります is the pair of ふえます, and behaves the same way: へります (it decreases) / へらします (I decrease it)." },
        { id: "ja-u116l2-nobimasu", type: "vocab", front: "のびます", reading: "nobimasu", meaning: "extend", example: { jp: "しめきりがのびたので、もう少していねいに作れます。", en: "The deadline was extended, so I can make it a bit more carefully." }, accept: ["to be postponed", "stretch", "grow longer"], hint: "伸びます / 延びます = get longer. Hair, height, deadlines and skills all のびる — 日本語がのびました is a real compliment." },
        { id: "ja-u116l2-tamochimasu", type: "vocab", front: "たもちます", reading: "tamochimasu", meaning: "keep", example: { jp: "まいにち歩いて、けんこうをたもっています。", en: "I walk every day and keep myself healthy." }, accept: ["to maintain", "preserve", "hold"], hint: "保ちます = the verb behind いじ. Used for states you actively hold: けんこう, おんど, きょり (distance)." },
        { id: "ja-u116l2-kurikaeshimasu", type: "vocab", front: "くりかえします", reading: "kurikaeshimasu", meaning: "repeat", example: { jp: "同じミスをくりかえさないように、メモをしています。", en: "I take notes so I don't repeat the same mistake." }, accept: ["to do again", "reiterate"], hint: "繰り返します = wind it back and do it again. くりかえし as a noun = repetition; a good word for describing practice." },
        { id: "ja-u116l2-otoroemasu", type: "vocab", front: "おとろえます", reading: "otoroemasu", meaning: "decline", example: { jp: "つかわないと、ちからはだんだんおとろえます。", en: "If you don't use it, your strength gradually declines." }, accept: ["to weaken", "deteriorate", "wane"], hint: "衰えます = lose strength over time. Used for bodies, industries and empires — never for a number, which just へります." },
      ],
    },
    {
      id: "ja-u116l3",
      unit: 116,
      lesson: 3,
      title: "Placing it in time",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place an event in time: かこ げんざい いぜん いご そのご とうじ.",
      items: [
        { id: "ja-u116l3-kako", type: "vocab", front: "かこ", reading: "kako", meaning: "the past", example: { jp: "かこのことを考えすぎると、いまが見えなくなります。", en: "If you think too much about the past, you stop seeing the present." }, accept: ["former times", "history"], hint: "過去 = 過 (pass — u102) + 去 (leave). The past as a whole. むかし is 'long ago' and feels warmer; かこ is neutral." },
        { id: "ja-u116l3-genzai", type: "vocab", front: "げんざい", reading: "genzai", meaning: "the present", example: { jp: "げんざいのじょうきょうでは、まだけっていできません。", en: "Under present circumstances, we can't decide yet." }, accept: ["now", "currently", "at present"], hint: "現在 = 現 (appear) + 在 (exist): what exists now. かこ・げんざい・みらい is the standard past-present-future set." },
        { id: "ja-u116l3-izen", type: "vocab", front: "いぜん", reading: "izen", meaning: "before then", example: { jp: "いぜんはここに大きな木がありましたが、台風でたおれました。", en: "There used to be a big tree here, but a typhoon brought it down." }, accept: ["previously", "formerly", "prior to"], hint: "以前 = 以 (from) + 前 (before). Alone it means 'formerly'; after a noun it means 'before ～': 三時いぜん." },
        { id: "ja-u116l3-igo", type: "vocab", front: "いご", reading: "igo", meaning: "after then", example: { jp: "いごは同じミスをしないように気をつけます。", en: "From now on I'll be careful not to make the same mistake." }, accept: ["from now on", "hereafter", "after"], hint: "以後 = 以 (from) + 後 (after) — the mirror of いぜん. Note いない (以内, within) uses the same 以." },
        { id: "ja-u116l3-sonogo", type: "vocab", front: "そのご", reading: "sonogo", meaning: "after that", example: { jp: "一どだけ会いましたが、そのごれんらくがありません。", en: "We met just once, but I've had no contact since then." }, accept: ["subsequently", "since then", "thereafter"], hint: "その後 = after that specific point. In writing it's often read そのご, in speech そのあと — both are correct." },
        { id: "ja-u116l3-toji", type: "vocab", front: "とうじ", reading: "tōji", meaning: "at that time", example: { jp: "とうじは車がなかったので、どこへも歩いて行きました。", en: "At that time we had no car, so we walked everywhere." }, accept: ["back then", "in those days"], hint: "当時 = 当 (that very) + 時 (time). Always points at a past period you've already named — the storyteller's word." },
      ],
    },
    {
      id: "ja-u116l4",
      unit: 116,
      lesson: 4,
      title: "How fast it changed",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Pace a change out: じょじょに しだいに やがて ついに すでに もはや.",
      items: [
        { id: "ja-u116l4-jojoni", type: "vocab", front: "じょじょに", reading: "jojoni", meaning: "gradually", example: { jp: "くすりをのんでから、じょじょによくなってきました。", en: "After taking the medicine, I've gradually been getting better." }, accept: ["little by little", "slowly", "step by step"], hint: "徐々に = slowly and steadily. Often paired with ～てくる / ～ていく to show the change is still running." },
        { id: "ja-u116l4-shidaini", type: "vocab", front: "しだいに", reading: "shidaini", meaning: "by degrees", example: { jp: "空がしだいに暗くなって、ほしが見えはじめました。", en: "The sky darkened by degrees, and the stars began to appear." }, accept: ["gradually", "progressively"], hint: "次第に is the more literary じょじょに. You'll meet it in novels and forecasts more than in conversation." },
        { id: "ja-u116l4-yagate", type: "vocab", front: "やがて", reading: "yagate", meaning: "before long", example: { jp: "雨はつよかったですが、やがて止んで空が明るくなりました。", en: "The rain was heavy, but before long it stopped and the sky brightened." }, accept: ["eventually", "soon", "in time"], hint: "やがて = after some unspecified while. Softer than すぐに (right away) and more literary than そのうち." },
        { id: "ja-u116l4-tsuini", type: "vocab", front: "ついに", reading: "tsuini", meaning: "finally", example: { jp: "三年かかりましたが、ついにしけんにごうかくしました。", en: "It took three years, but I finally passed the exam." }, accept: ["at last", "in the end", "ultimately"], hint: "ついに marks the end of a long wait — good or bad. With a negative it means 'never in the end': ついに来ませんでした." },
        { id: "ja-u116l4-sudeni", type: "vocab", front: "すでに", reading: "sudeni", meaning: "already", example: { jp: "行ったときには、すでに店はしまっていました。", en: "By the time I went, the shop had already closed." }, accept: ["by then", "previously"], hint: "既に is the written もう. In speech もう is far more natural; すでに belongs in reports and formal speech." },
        { id: "ja-u116l4-mohaya", type: "vocab", front: "もはや", reading: "mohaya", meaning: "no longer", example: { jp: "もはや前のやりかたではうまくいきません。", en: "The old way of doing things no longer works." }, accept: ["already", "by now", "any more"], hint: "もはや marks a point of no return — things have moved past it. Usually with a negative, and always a little dramatic." },
      ],
    },
  ],
};
