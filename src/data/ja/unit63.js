// Unit 63 — きもち・はんのう ("Feelings & Reactions") — A1 thematic
// Everyday N5 feeling/state words and the little reaction + degree words that make
// speech sound natural: interjections you throw back in conversation (もちろん,
// なるほど, うそ), mood-state onomatopoeia taught as plain vocab (わくわく, どきどき),
// and the fuzzy "how much" adverbs (けっこう, なかなか, だいぶ). All examples reuse
// only vocab introduced in earlier units + basic particles/です. No new grammar —
// the onomatopoeia are learned as words, not conjugated. lang/unit/lesson in index.js.
export const UNIT63 = {
  id: "ja-u63",
  lang: "ja",
  title: "きもち・はんのう",
  order: 63,
  stage: "a1",
  lessons: [
    // Lesson 1: reaction words & interjections
    {
      id: "ja-u63l1",
      unit: 63,
      lesson: 1,
      title: "Reactions",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "React naturally in conversation: もちろん (of course), なるほど (I see), うそ (no way!), だめ (no good).",
      items: [
        { id: "ja-u63l1-mochiron", type: "vocab", front: "もちろん", reading: "mochiron", meaning: "of course", example: { jp: "もちろんいきます。", en: "Of course I'll go." }, drill: { jp: "もちろんわかります。", en: "Of course I understand." }, accept: ["certainly", "naturally", "obviously", "sure"], hint: "Enthusiastic yes — you agree without hesitation." },
        { id: "ja-u63l1-naruhodo", type: "vocab", front: "なるほど", reading: "naruhodo", meaning: "I see", example: { jp: "なるほど、わかりました。", en: "I see, I understand." }, drill: { jp: "なるほど、おもしろいですね。", en: "I see — that is interesting." }, accept: ["indeed", "that makes sense", "ah I see", "right"], hint: "Said when something just clicked for you." },
        { id: "ja-u63l1-yappari", type: "vocab", front: "やっぱり", reading: "yappari", meaning: "as expected", example: { jp: "やっぱりこれがすきです。", en: "As I thought, I like this one." }, drill: { jp: "やっぱりあめがふります。", en: "It is raining after all." }, accept: ["after all", "as I thought", "just as I expected", "sure enough"], hint: "yap-PA-ri — the small っ doubles the p, tapped r: three beats. The casual form of やはり. ⚠️ It marks that reality CONFIRMED what you already suspected, not merely after all." },
        { id: "ja-u63l1-dame", type: "vocab", front: "だめ", reading: "dame", meaning: "no good", example: { jp: "それはだめです。", en: "That's no good." }, drill: { jp: "あしたはだめです。", en: "Tomorrow is no good." }, accept: ["not allowed", "no use", "useless", "not okay"], hint: "DA-me — two beats. ⚠️ A flat refusal: no good, not allowed, broken. Blunter than むり next door, which says a thing is impossible rather than forbidden." },
        { id: "ja-u63l1-muri", type: "vocab", front: "むり", reading: "muri", meaning: "impossible", example: { jp: "きょうはむりです。", en: "Today is impossible for me." }, drill: { jp: "むりをしません。", en: "I will not overdo it." }, accept: ["no way", "can't be done", "unreasonable", "out of the question"], hint: "MU-ri — two beats, tapped r. 無 (without) + 理 (reason): without reason. ⚠️ It says a thing CANNOT be done; だめ above says it MAY not be done." },
        { id: "ja-u63l1-uso", type: "vocab", front: "うそ", reading: "uso", meaning: "a lie", example: { jp: "うそ！ほんとうですか。", en: "No way! Really?" }, drill: { jp: "うそはだめです。", en: "Lying is not allowed." }, accept: ["lie", "no way", "a falsehood", "untrue"], hint: "Literally 'a lie' — also blurted out like 'no way!'." },
      ],
    },
    // Lesson 2: degree & extent adverbs
    {
      id: "ja-u63l2",
      unit: 63,
      lesson: 2,
      title: "How much",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how much: たいへん (tough), けっこう (fairly), なかなか (quite), だいぶ (a lot), まあまあ (so-so).",
      items: [
        { id: "ja-u63l2-taihen", type: "vocab", front: "たいへん", reading: "taihen", meaning: "tough", example: { jp: "しごとがたいへんです。", en: "Work is tough." }, drill: { jp: "きょうはたいへんさむいです。", en: "It is terribly cold today." }, accept: ["hard", "awful", "very difficult", "rough"], hint: "A situation that's rough or a lot to handle." },
        { id: "ja-u63l2-kekko", type: "vocab", front: "けっこう", reading: "kekkō", meaning: "fairly", example: { jp: "けっこうおいしいです。", en: "It's fairly delicious." }, drill: { jp: "けっこうたかいです。", en: "It is fairly expensive." }, accept: ["quite", "pretty", "rather", "reasonably"], hint: "KEK-kō — the small っ doubles the k and こう is a long o: two beats. ⚠️ Two jobs: fairly as an adverb, and けっこうです as a polite no thank you. Tone decides which." },
        { id: "ja-u63l2-nakanaka", type: "vocab", front: "なかなか", reading: "nakanaka", meaning: "quite", example: { jp: "なかなかおもしろいです。", en: "It's quite interesting." }, drill: { jp: "なかなかむずかしいです。", en: "It is quite difficult." }, accept: ["fairly", "pretty", "rather", "quite a bit"], hint: "na-ka-NA-ka — four beats, なか doubled. ⚠️ In a POSITIVE sentence it means quite, admiringly. With a negative it flips to not easily: なかなかきません means they are taking ages." },
        { id: "ja-u63l2-kanari", type: "vocab", front: "かなり", reading: "kanari", meaning: "considerably", example: { jp: "かなりさむいです。", en: "It's considerably cold." }, drill: { jp: "かなりおおきいです。", en: "It is considerably big." }, accept: ["fairly", "quite", "pretty", "a fair amount"], hint: "KA-na-ri — three beats, tapped r. ⚠️ Stronger than けっこう and なかなか above: かなりさむい is properly cold, not just coldish. Neutral in tone, where those two are not." },
        { id: "ja-u63l2-daibu", type: "vocab", front: "だいぶ", reading: "daibu", meaning: "a lot (considerably more)", example: { jp: "だいぶあたたかいです。", en: "It's a lot warmer." }, drill: { jp: "だいぶすずしいです。", en: "It is a lot cooler." }, accept: ["a great deal", "much", "considerably", "quite a lot"], hint: "DAI-bu — two beats, だい a diphthong. ⚠️ It measures CHANGE: だいぶあたたかいです means much warmer than before. That before-and-after sense is what separates it from かなり." },
        { id: "ja-u63l2-maamaa", type: "vocab", front: "まあまあ", reading: "māmā", meaning: "so-so", example: { jp: "あじはまあまあです。", en: "The taste is so-so." }, drill: { jp: "しごとはまあまあです。", en: "Work is so-so." }, accept: ["okay", "not bad", "all right", "passable"], hint: "mā-MĀ — two long beats, each あ held: maa-maa. ⚠️ Mild and non-committal — okay, not great. It also works alone as a calming now, now." },
      ],
    },
    // Lesson 3: feelings & mood states
    {
      id: "ja-u63l3",
      unit: 63,
      lesson: 3,
      title: "Feelings",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe how you feel: わくわく (excited), どきどき (nervous), いらいら (irritated), のんびり (relaxed).",
      items: [
        { id: "ja-u63l3-wakuwaku", type: "vocab", front: "わくわく", reading: "wakuwaku", meaning: "excited", example: { jp: "あしたがわくわくします。", en: "I'm excited about tomorrow." }, drill: { jp: "こどもがわくわくします。", en: "The children are excited." }, accept: ["thrilled", "exciting", "excitedly", "full of anticipation"], hint: "wa-ku-WA-ku — four beats, わく doubled. A mimetic word for the flutter of looking forward. ⚠️ It takes します, so the verb is わくわくします — most mimetic words in this lesson do the same." },
        { id: "ja-u63l3-dokidoki", type: "vocab", front: "どきどき", reading: "dokidoki", meaning: "nervous", example: { jp: "しけんでどきどきします。", en: "I'm nervous about the exam." }, drill: { jp: "むねがどきどきします。", en: "My heart is pounding." }, accept: ["heart pounding", "on edge", "jittery", "heart racing"], hint: "The sound of a pounding heart." },
        { id: "ja-u63l3-iraira", type: "vocab", front: "いらいら", reading: "iraira", meaning: "irritated", example: { jp: "とてもいらいらします。", en: "I'm very irritated." }, drill: { jp: "しごとでいらいらします。", en: "Work is making me irritable." }, accept: ["annoyed", "frustrated", "irritable", "edgy"], hint: "i-ra-I-ra — four beats, tapped r, いら doubled. ⚠️ A low simmering irritation, not an outburst. Doubling like this is the standard shape of a Japanese mimetic word." },
        { id: "ja-u63l3-nonbiri", type: "vocab", front: "のんびり", reading: "nonbiri", meaning: "relaxed", example: { jp: "うちでのんびりします。", en: "I relax at home." }, drill: { jp: "こうえんでのんびりあるきます。", en: "I stroll unhurriedly in the park." }, accept: ["laid-back", "leisurely", "at ease", "taking it easy"], hint: "non-BI-ri — three beats, the ん held, tapped r. ⚠️ Unhurried and at ease — the opposite of いらいら above. Usually said of a day off or a slow pace of life." },
        { id: "ja-u63l3-jobu", type: "vocab", front: "じょうぶ", reading: "jōbu", meaning: "healthy", example: { jp: "からだがじょうぶです。", en: "My body is healthy." }, drill: { jp: "このつくえはじょうぶです。", en: "This desk is sturdy." }, accept: ["sturdy", "strong", "robust", "hard-wearing"], hint: "JŌ-bu — じょう is the yōon jo held long: two beats. Written 丈夫. ⚠️ Two senses: a PERSON is healthy, a THING is hard-wearing. Both say built to last." },
        { id: "ja-u63l3-daiji", type: "vocab", front: "だいじ", reading: "daiji", meaning: "important (precious to one)", example: { jp: "かぞくがだいじです。", en: "Family is important." }, drill: { jp: "だいじなほんをよみます。", en: "I read an important book." }, accept: ["precious", "valuable", "treasured", "dear to one"], hint: "DAI-ji — two beats, だい a diphthong. 大 (big) + 事 (matter): a big matter. ⚠️ It is precious TO SOMEONE. For important in the abstract, Japanese prefers じゅうよう." },
      ],
    },
    // Lesson 4: everyday state & manner words
    {
      id: "ja-u63l4",
      unit: 63,
      lesson: 4,
      title: "Everyday states",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Add nuance to what you say: じつは (actually), たしか (if I recall), ゆっくり (slowly), だんだん (gradually).",
      items: [
        { id: "ja-u63l4-jitsuwa", type: "vocab", front: "じつは", reading: "jitsuwa", meaning: "actually", example: { jp: "じつは、しりませんでした。", en: "Actually, I didn't know." }, drill: { jp: "じつはわたしもいきます。", en: "Actually, I am going too." }, accept: ["to tell the truth", "in fact", "the truth is", "as a matter of fact"], hint: "ji-tsu-WA — three beats, つ is tsu, and that は is the topic particle fused into the word, so it is said wa and not ha. ⚠️ It flags that what follows corrects an assumption." },
        { id: "ja-u63l4-tashika", type: "vocab", front: "たしか", reading: "tashika", meaning: "if I recall", example: { jp: "たしかあしたです。", en: "If I recall, it's tomorrow." }, drill: { jp: "たしかきんようびです。", en: "If I recall, it is Friday." }, accept: ["I think", "certainly", "if I remember rightly", "as far as I recall"], hint: "TA-shi-ka — three beats. ⚠️ Confusingly, たしか alone HEDGES — if I recall — while たしかに ASSERTS — definitely. One kana, opposite confidence." },
        { id: "ja-u63l4-shikkari", type: "vocab", front: "しっかり", reading: "shikkari", meaning: "firmly", example: { jp: "しっかりべんきょうします。", en: "I study hard." }, drill: { jp: "しっかりたべます。", en: "I eat properly." }, accept: ["properly", "solidly", "securely", "thoroughly"], hint: "shik-KA-ri — the small っ doubles the k, tapped r: three beats. ⚠️ Firmly, properly, with no slack. Said to someone pulling themselves together as readily as about a solid object." },
        { id: "ja-u63l4-yukkuri", type: "vocab", front: "ゆっくり", reading: "yukkuri", meaning: "slowly", example: { jp: "ゆっくりはなします。", en: "I speak slowly." }, drill: { jp: "ゆっくりとあるきます。", en: "I walk slowly." }, accept: ["leisurely", "take your time", "unhurriedly", "at a slow pace"], hint: "yuk-KU-ri — the small っ doubles the k, tapped r: three beats. ⚠️ Slowly AND unhurriedly: ゆっくりどうぞ invites someone to take their time. Before a verb it often takes と — ゆっくりとあるきます." },
        { id: "ja-u63l4-dandan", type: "vocab", front: "だんだん", reading: "dandan", meaning: "gradually", example: { jp: "だんだんさむくなります。", en: "It gradually gets cold." }, drill: { jp: "だんだんわかります。", en: "Gradually I come to understand." }, accept: ["little by little", "step by step", "bit by bit", "progressively"], hint: "dan-DAN — two heavy beats, both ん held, だん doubled. 段 (step) twice over: step by step. ⚠️ It describes a gradual CHANGE, so it usually pairs with なります." },
        { id: "ja-u63l4-sukkari", type: "vocab", front: "すっかり", reading: "sukkari", meaning: "completely", example: { jp: "すっかりわすれました。", en: "I completely forgot." }, drill: { jp: "すっかりげんきになります。", en: "I get completely better." }, accept: ["entirely", "totally", "altogether", "fully"], hint: "suk-KA-ri — the small っ doubles the k, tapped r: three beats. ⚠️ Completely, with nothing left over. Compare しっかり above: one っ word means firmly, the other means utterly." },
      ],
    },
  ],
};
