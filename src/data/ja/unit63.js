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
        { id: "ja-u63l1-mochiron", type: "vocab", front: "もちろん", reading: "mochiron", meaning: "of course", example: { jp: "もちろんいきます。", en: "Of course I'll go." }, accept: ["certainly", "naturally"], hint: "Enthusiastic yes — you agree without hesitation." },
        { id: "ja-u63l1-naruhodo", type: "vocab", front: "なるほど", reading: "naruhodo", meaning: "I see", example: { jp: "なるほど、わかりました。", en: "I see, I understand." }, accept: ["indeed", "that makes sense"], hint: "Said when something just clicked for you." },
        { id: "ja-u63l1-yappari", type: "vocab", front: "やっぱり", reading: "yappari", meaning: "as expected", example: { jp: "やっぱりこれがすきです。", en: "As I thought, I like this one." }, accept: ["after all", "as I thought"] },
        { id: "ja-u63l1-dame", type: "vocab", front: "だめ", reading: "dame", meaning: "no good", example: { jp: "それはだめです。", en: "That's no good." }, accept: ["not allowed", "no use"] },
        { id: "ja-u63l1-muri", type: "vocab", front: "むり", reading: "muri", meaning: "impossible", example: { jp: "きょうはむりです。", en: "Today is impossible for me." }, accept: ["no way", "can't be done"] },
        { id: "ja-u63l1-uso", type: "vocab", front: "うそ", reading: "uso", meaning: "a lie", example: { jp: "うそ！ほんとうですか。", en: "No way! Really?" }, accept: ["lie", "no way"], hint: "Literally 'a lie' — also blurted out like 'no way!'." },
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
        { id: "ja-u63l2-taihen", type: "vocab", front: "たいへん", reading: "taihen", meaning: "tough", example: { jp: "しごとがたいへんです。", en: "Work is tough." }, accept: ["hard", "awful"], hint: "A situation that's rough or a lot to handle." },
        { id: "ja-u63l2-kekko", type: "vocab", front: "けっこう", reading: "kekkō", meaning: "fairly", example: { jp: "けっこうおいしいです。", en: "It's fairly delicious." }, accept: ["quite", "pretty"] },
        { id: "ja-u63l2-nakanaka", type: "vocab", front: "なかなか", reading: "nakanaka", meaning: "quite", example: { jp: "なかなかおもしろいです。", en: "It's quite interesting." }, accept: ["fairly", "pretty"] },
        { id: "ja-u63l2-kanari", type: "vocab", front: "かなり", reading: "kanari", meaning: "considerably", example: { jp: "かなりさむいです。", en: "It's considerably cold." }, accept: ["fairly", "quite"] },
        { id: "ja-u63l2-daibu", type: "vocab", front: "だいぶ", reading: "daibu", meaning: "a lot", example: { jp: "だいぶあたたかいです。", en: "It's a lot warmer." }, accept: ["a great deal", "much"] },
        { id: "ja-u63l2-maamaa", type: "vocab", front: "まあまあ", reading: "māmā", meaning: "so-so", example: { jp: "あじはまあまあです。", en: "The taste is so-so." }, accept: ["okay", "not bad"] },
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
        { id: "ja-u63l3-wakuwaku", type: "vocab", front: "わくわく", reading: "wakuwaku", meaning: "excited", example: { jp: "あしたがわくわくします。", en: "I'm excited about tomorrow." }, accept: ["thrilled", "exciting"] },
        { id: "ja-u63l3-dokidoki", type: "vocab", front: "どきどき", reading: "dokidoki", meaning: "nervous", example: { jp: "しけんでどきどきします。", en: "I'm nervous about the exam." }, accept: ["heart pounding", "on edge"], hint: "The sound of a pounding heart." },
        { id: "ja-u63l3-iraira", type: "vocab", front: "いらいら", reading: "iraira", meaning: "irritated", example: { jp: "とてもいらいらします。", en: "I'm very irritated." }, accept: ["annoyed", "frustrated"] },
        { id: "ja-u63l3-nonbiri", type: "vocab", front: "のんびり", reading: "nonbiri", meaning: "relaxed", example: { jp: "うちでのんびりします。", en: "I relax at home." }, accept: ["laid-back", "leisurely"] },
        { id: "ja-u63l3-jobu", type: "vocab", front: "じょうぶ", reading: "jōbu", meaning: "healthy", example: { jp: "からだがじょうぶです。", en: "My body is healthy." }, accept: ["sturdy", "strong"] },
        { id: "ja-u63l3-daiji", type: "vocab", front: "だいじ", reading: "daiji", meaning: "important", example: { jp: "かぞくがだいじです。", en: "Family is important." }, accept: ["precious", "valuable"] },
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
        { id: "ja-u63l4-jitsuwa", type: "vocab", front: "じつは", reading: "jitsuwa", meaning: "actually", example: { jp: "じつは、しりませんでした。", en: "Actually, I didn't know." }, accept: ["to tell the truth", "in fact"] },
        { id: "ja-u63l4-tashika", type: "vocab", front: "たしか", reading: "tashika", meaning: "if I recall", example: { jp: "たしかあしたです。", en: "If I recall, it's tomorrow." }, accept: ["I think", "certainly"] },
        { id: "ja-u63l4-shikkari", type: "vocab", front: "しっかり", reading: "shikkari", meaning: "firmly", example: { jp: "しっかりべんきょうします。", en: "I study hard." }, accept: ["properly", "solidly"] },
        { id: "ja-u63l4-yukkuri", type: "vocab", front: "ゆっくり", reading: "yukkuri", meaning: "slowly", example: { jp: "ゆっくりはなします。", en: "I speak slowly." }, accept: ["leisurely", "take your time"] },
        { id: "ja-u63l4-dandan", type: "vocab", front: "だんだん", reading: "dandan", meaning: "gradually", example: { jp: "だんだんさむくなります。", en: "It gradually gets cold." }, accept: ["little by little", "step by step"] },
        { id: "ja-u63l4-sukkari", type: "vocab", front: "すっかり", reading: "sukkari", meaning: "completely", example: { jp: "すっかりわすれました。", en: "I completely forgot." }, accept: ["entirely", "totally"] },
      ],
    },
  ],
};
