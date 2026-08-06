// Unit 112 — かんじょう・こまやか ("Emotion, finer shades") — B1 / JLPT N3
// A1/A2 already teach the broad feelings — うれしい, かなしい, ふあん, まんぞく,
// こうかい (u48, u63, u70). At B1 the resolution goes up: the difference between
// being lonely and being alone (こどく), between anger and resentment (いかり,
// にくしみ), and the vocabulary for describing a temperament rather than a mood.
// This is the unit that lets a learner say what they actually feel, not the nearest
// beginner word to it.
export const UNIT112 = {
  id: "ja-u112",
  lang: "ja",
  title: "かんじょう・こまやか",
  order: 112,
  stage: "b1",
  lessons: [
    {
      id: "ja-u112l1",
      unit: 112,
      lesson: 1,
      title: "The heavy feelings",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a difficult feeling precisely: ゆううつ こどく しつぼう いかり しっと にくしみ.",
      items: [
        { id: "ja-u112l1-yuutsu", type: "vocab", front: "ゆううつ", reading: "yūutsu", meaning: "gloom", example: { jp: "雨がつづくとゆううつになりますが、本を読むとよくなります。", en: "I get gloomy when the rain continues, but reading makes it better." }, accept: ["depression", "melancholy", "the blues"], hint: "憂鬱 = a heavy, settled low mood. Everyday word, not a medical one — げつようびがゆううつ is a normal thing to say." },
        { id: "ja-u112l1-kodoku", type: "vocab", front: "こどく", reading: "kodoku", meaning: "loneliness", example: { jp: "一人でいるのはすきですが、こどくはつらいです。", en: "I like being alone, but loneliness is hard." }, accept: ["solitude", "isolation", "lonely"], hint: "孤独 = 孤 (orphaned) + 独 (alone). The *feeling* of being cut off — being physically alone is 一人." },
        { id: "ja-u112l1-shitsubo", type: "vocab", front: "しつぼう", reading: "shitsubō", meaning: "disappointment", example: { jp: "けっかにはしつぼうしましたが、いいけいけんになりました。", en: "I was disappointed by the result, but it was a good experience." }, accept: ["letdown", "to be disappointed", "despair"], hint: "失望 = 失 (lose) + 望 (hope): losing your hope. がっかり is the lighter, everyday version." },
        { id: "ja-u112l1-ikari", type: "vocab", front: "いかり", reading: "ikari", meaning: "anger", example: { jp: "いかりをおさえて、しずかに話すようにしました。", en: "I held my anger down and made myself speak calmly." }, accept: ["rage", "fury", "wrath"], hint: "怒り — the noun from おこります. いかりをおさえる uses the おさえます you met in u102: holding a feeling down." },
        { id: "ja-u112l1-shitto", type: "vocab", front: "しっと", reading: "shitto", meaning: "jealousy", example: { jp: "友だちのせいこうにしっとしてしまい、自分がいやになりました。", en: "I ended up feeling jealous of my friend's success, and hated myself for it." }, accept: ["envy", "to be jealous"], hint: "嫉妬 = the sharp, personal jealousy. やきもち is the softer, almost affectionate word for it between couples." },
        { id: "ja-u112l1-nikushimi", type: "vocab", front: "にくしみ", reading: "nikushimi", meaning: "hatred", example: { jp: "にくしみをもちつづけると、自分がつかれてしまいます。", en: "If you keep holding on to hatred, you're the one who gets exhausted." }, accept: ["hate", "loathing", "resentment"], hint: "憎しみ — the noun from にくみます. Strong: reserve it for real hatred, not for disliking natto." },
      ],
    },
    {
      id: "ja-u112l2",
      unit: 112,
      lesson: 2,
      title: "The warm feelings",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a warm feeling precisely: かんしゃ おもいやり あこがれ あんど きらく けいい.",
      items: [
        { id: "ja-u112l2-kansha", type: "vocab", front: "かんしゃ", reading: "kansha", meaning: "gratitude", example: { jp: "たすけてくれた人たちに、かんしゃの気もちをつたえたいです。", en: "I want to convey my gratitude to the people who helped me." }, accept: ["thanks", "appreciation", "to be grateful"], hint: "感謝 = 感 (feel) + 謝 (thank). かんしゃしています is a step above ありがとう — the feeling, not just the phrase." },
        { id: "ja-u112l2-omoiyari", type: "vocab", front: "おもいやり", reading: "omoiyari", meaning: "consideration", example: { jp: "おもいやりのある人といっしょにいると、こころが楽になります。", en: "When you're with a considerate person, your heart feels lighter." }, accept: ["thoughtfulness", "compassion", "empathy"], hint: "思いやり = 思い (thought) + やり (sending): sending your thoughts to someone else's position. A central value in Japanese social life." },
        { id: "ja-u112l2-akogare", type: "vocab", front: "あこがれ", reading: "akogare", meaning: "longing", example: { jp: "子どものころから日本にあこがれていて、やっと来られました。", en: "I've longed for Japan since I was a child, and I've finally been able to come." }, accept: ["admiration", "yearning", "to look up to"], hint: "憧れ = wanting to be *like* something or somewhere. Warmer than うらやましい (envy) — あこがれ contains no bitterness." },
        { id: "ja-u112l2-ando", type: "vocab", front: "あんど", reading: "ando", meaning: "relief", example: { jp: "むすめかられんらくが来て、やっとあんどしました。", en: "My daughter got in touch, and I was finally relieved." }, accept: ["reassurance", "peace of mind", "to be relieved"], hint: "安堵 = the breath you let out. あんしん is a lasting state of being at ease; あんど is the moment the worry lifts." },
        { id: "ja-u112l2-kiraku", type: "vocab", front: "きらく", reading: "kiraku", meaning: "carefree", example: { jp: "きらくにやってくださいと言われて、きんちょうがとれました。", en: "I was told to take it easy, and my nerves settled." }, accept: ["relaxed", "easy-going", "at ease"], hint: "気楽 = 気 (spirit) + 楽 (easy). きらくに = 'no pressure'. きらくな人 is someone nothing much bothers." },
        { id: "ja-u112l2-keii", type: "vocab", front: "けいい", reading: "keii", meaning: "respect", example: { jp: "としうえの人にはけいいをもって話すようにしています。", en: "I try to speak to older people with respect." }, accept: ["deference", "esteem", "reverence"], hint: "敬意 = 敬 (revere) + 意 (feeling). けいいをはらう = to pay respect. It's the noun behind けいご, the honorific speech at B2." },
      ],
    },
    {
      id: "ja-u112l3",
      unit: 112,
      lesson: 3,
      title: "In the moment",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a reaction as it happens: おどろき どうじょう がまん とまどい ためらい あわれ.",
      items: [
        { id: "ja-u112l3-odoroki", type: "vocab", front: "おどろき", reading: "odoroki", meaning: "surprise", example: { jp: "そのニュースはおどろきでしたが、うれしいおどろきでした。", en: "That news was a surprise, but a happy one." }, accept: ["astonishment", "shock", "amazement"], hint: "驚き — the noun from おどろきます. おどろきました is what you say; おどろき is the thing itself." },
        { id: "ja-u112l3-dojo", type: "vocab", front: "どうじょう", reading: "dōjō", meaning: "sympathy", example: { jp: "どうじょうはいりませんが、話を聞いてくれるとうれしいです。", en: "I don't need sympathy, but I'd be glad if you'd listen." }, accept: ["compassion", "pity", "fellow feeling"], hint: "同情 = 同 (same) + 情 (feeling): feeling the same thing. Careful — it can sound like pity, which is why the sentence above rejects it." },
        { id: "ja-u112l3-gaman", type: "vocab", front: "がまん", reading: "gaman", meaning: "endurance", example: { jp: "さむかったですが、がまんして さいごまで見ました。", en: "It was cold, but I put up with it and watched to the end." }, accept: ["to put up with", "patience", "self-restraint"], hint: "我慢 = holding out without complaining. Deeply built into Japanese culture — がまんづよい (good at enduring) is high praise." },
        { id: "ja-u112l3-tomadoi", type: "vocab", front: "とまどい", reading: "tomadoi", meaning: "bewilderment", example: { jp: "きゅうに聞かれて、とまどいながらへんじをしました。", en: "Asked suddenly, I answered while still confused." }, accept: ["confusion", "being at a loss", "hesitation"], hint: "戸惑い = 戸 (door — u108) + 惑い (lost): standing at the door not knowing which way. The confusion of not knowing how to react." },
        { id: "ja-u112l3-tamerai", type: "vocab", front: "ためらい", reading: "tamerai", meaning: "hesitation", example: { jp: "ためらいがありましたが、思いきってたのんでみました。", en: "I hesitated, but I took the plunge and asked." }, accept: ["reluctance", "wavering", "to hesitate"], hint: "ためらい = pausing before you act, because you're unsure it's right. まよい is being unable to choose between options." },
        { id: "ja-u112l3-aware", type: "vocab", front: "あわれ", reading: "aware", meaning: "pathos", example: { jp: "その話はあわれで、聞いていてかなしくなりました。", en: "That story was pitiful, and listening to it made me sad." }, accept: ["pitiful", "sorrow", "poignancy"], hint: "哀れ = the ache of something beautiful and passing. もののあわれ is a classical idea at the centre of Japanese literature." },
      ],
    },
    {
      id: "ja-u112l4",
      unit: 112,
      lesson: 4,
      title: "Temperament",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe what someone is like, not just how they feel: びんかん どんかん しんけん れいせい しんちょう たんき.",
      items: [
        { id: "ja-u112l4-binkan", type: "vocab", front: "びんかん", reading: "binkan", meaning: "sensitive", example: { jp: "音にびんかんなので、しずかなへやでないとねむれません。", en: "I'm sensitive to sound, so I can't sleep unless the room is quiet." }, accept: ["responsive", "keenly aware", "delicate"], hint: "敏感 = quick to notice. Used for senses and for skin (びんかんはだ). Not the same as 'sensitive' meaning easily hurt — that's きずつきやすい." },
        { id: "ja-u112l4-donkan", type: "vocab", front: "どんかん", reading: "donkan", meaning: "insensitive", example: { jp: "私はさむさにどんかんなので、冬でもコートをわすれます。", en: "I'm insensitive to cold, so I forget my coat even in winter." }, accept: ["dull", "slow to notice", "thick-skinned"], hint: "鈍感 = 鈍 (dull) + 感 (feel) — the exact opposite of びんかん. Often used self-deprecatingly about missing social hints." },
        { id: "ja-u112l4-shinken", type: "vocab", front: "しんけん", reading: "shinken", meaning: "serious", example: { jp: "しんけんに話を聞いてくれたので、しんらいできると思いました。", en: "They listened to me seriously, so I felt I could trust them." }, accept: ["earnest", "in earnest", "sincere"], hint: "真剣 = 真 (true) + 剣 (sword) — originally a real blade, not a practice one. しんけんに = 'for real', with full attention." },
        { id: "ja-u112l4-reisei", type: "vocab", front: "れいせい", reading: "reisei", meaning: "calm", example: { jp: "みんながあわてているときも、かれはれいせいでした。", en: "Even when everyone was panicking, he stayed calm." }, accept: ["composed", "cool-headed", "level-headed"], hint: "冷静 = 冷 (cold) + 静 (quiet). Calm under pressure — a compliment. しずか is quiet in the ordinary sense." },
        { id: "ja-u112l4-shincho", type: "vocab", front: "しんちょう", reading: "shinchō", meaning: "cautious", example: { jp: "大きなけっていなので、しんちょうに考えたいです。", en: "It's a big decision, so I want to think it over carefully." }, accept: ["careful", "prudent", "deliberate"], hint: "慎重 = weighing something heavily before acting. しんちょうな人 is careful, not timid — that would be おくびょう." },
        { id: "ja-u112l4-tanki", type: "vocab", front: "たんき", reading: "tanki", meaning: "short-tempered", example: { jp: "父はたんきですが、すぐにわすれてしまいます。", en: "My father is short-tempered, but he forgets about it right away." }, accept: ["quick to anger", "impatient"], hint: "短気 = 短 (short) + 気 (temper) — literally a short fuse, exactly as in English. たんきはそんき = 'a short temper costs you'." },
      ],
    },
  ],
};
