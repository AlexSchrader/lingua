// Unit 80 — けいようし・N4 ("N4 adjectives") — A2 / JLPT N4
// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ THIS HEADER USED TO SAY "NOT registered in index.js — not seeded, not on the
// Ladder" and to instruct the reader to "activate ... only once A1 is native-reviewed".
// BOTH halves are false and the second reads as a live instruction: UNIT80 IS in
// src/data/ja/index.js, it IS on the Ladder, and a human native review is a
// nice-to-have rather than a gate (CLAUDE.md, Alex 2026-07-12). Corrected 2026-10-10.
//
// DRILL SHAPE: these are adjectives, so the front cannot be followed by a particle and
// no drill here can earn ja sentence:build — which is fine, because none of the
// examples earned it either, so nothing is lost. Two cards deliberately have NO drill;
// their own items say why.
// ─────────────────────────────────────────────────────────────────────────────
// A second N4 adjective set (U23 covered feelings/qualities). Taught as
// dictionary-form vocab — the い/な conjugation was covered in A1 U21. Grouped:
// describing things (い) → impressions (い) → judgments (な) → need & ability (な).
// Every example uses only earlier vocab + A1 grammar (です / な / basic particles) —
// no conjugation. NOTE: naturalness-critical — flagged for the batch native review.
export const UNIT80 = {
  id: "ja-u80",
  lang: "ja",
  title: "けいようし・N4",
  order: 80,
  stage: "a2",
  lessons: [
    // Lesson 1: describing things (い-adjectives)
    {
      id: "ja-u80l1",
      unit: 80,
      lesson: 1,
      title: "Describing things",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe things precisely: ふかい あさい こまかい めずらしい ただしい くわしい.",
      items: [
        { id: "ja-u80l1-fukai", type: "vocab", front: "ふかい", reading: "fukai", meaning: "deep", example: { jp: "このいけはふかいです。", en: "This pond is deep." }, drill: { jp: "ふかいうみでおよぎます。", en: "I swim in the deep sea." }, accept: ["profound", "deep down", "far down", "thick (of fog)"], hint: "fukai — physical depth, and also depth of feeling or sleep: ふかいねむり. い-adjective. Its opposite あさい is the very next card, so learn them as a pair." },
        { id: "ja-u80l1-asai", type: "vocab", front: "あさい", reading: "asai", meaning: "shallow", example: { jp: "かわがあさいです。", en: "The river is shallow." }, drill: { jp: "あさいいけであそびます。", en: "I play in the shallow pond." }, accept: ["not deep", "shallow", "superficial", "only skin-deep"], hint: "asai — the exact opposite of ふかい on the card before, and it carries the same figurative reach: あさいねむり is light sleep. ⚠️ Do not confuse it with あさ, morning." },
        { id: "ja-u80l1-komakai", type: "vocab", front: "こまかい", reading: "komakai", meaning: "fine", example: { jp: "こまかいおかねがほしいです。", en: "I want small change." }, drill: { jp: "こまかいせつめいをききます。", en: "I listen to a detailed explanation." }, accept: ["detailed", "small", "fine (small)"], hint: "komakai — made of small pieces, so it means both 'small' (こまかいおかね, loose change) and 'detailed' (こまかいせつめい). い-adjective. くわしい later in this lesson is detailed in the sense of thorough." },
        { id: "ja-u80l1-mezurashii", type: "vocab", front: "めずらしい", reading: "mezurashii", meaning: "rare", example: { jp: "めずらしいとりです。", en: "It's a rare bird." }, accept: ["unusual", "uncommon", "rare", "a surprise to see"], hint: "mezurashii — rare enough to be remarked on, so めずらしいですね is 'that's unusual'. い-adjective. ⚠️ NO DRILL ON PURPOSE: its example happens to earn sentence:build, and any natural drill for an adjective would strip that card away — see the item comment above." },
        { id: "ja-u80l1-tadashii", type: "vocab", front: "ただしい", reading: "tadashii", meaning: "correct", example: { jp: "ただしいこたえです。", en: "It's the correct answer." }, drill: { jp: "ただしいほうほうをえらびます。", en: "I choose the correct method." }, accept: ["right", "proper", "accurate", "the right one"], hint: "tadashii — correct by a rule or a fact, not merely good. い-adjective. The kanji form 正しい is taught in u41, so this is the same word you met as a kanji card." },
        { id: "ja-u80l1-kuwashii", type: "vocab", front: "くわしい", reading: "kuwashii", meaning: "detailed", example: { jp: "かれはでんしゃにくわしいです。", en: "He knows a lot about trains." }, drill: { jp: "くわしいちずをかいます。", en: "I buy a detailed map." }, accept: ["well-informed", "knowledgeable", "thorough", "in detail"], hint: "kuwashii — ⚠️ two senses with different grammar. Of a THING it means detailed (くわしいちず); of a PERSON it means expert, and what they know takes に: でんしゃにくわしい. い-adjective." },
      ],
    },
    // Lesson 2: impressions (い-adjectives)
    {
      id: "ja-u80l2",
      unit: 80,
      lesson: 2,
      title: "How it strikes you",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give impressions: うつくしい すばらしい おかしい うまい もったいない したしい.",
      items: [
        { id: "ja-u80l2-utsukushii", type: "vocab", front: "うつくしい", reading: "utsukushii", meaning: "beautiful", example: { jp: "うつくしいうみです。", en: "It's a beautiful sea." }, drill: { jp: "うつくしいけしきをみます。", en: "I look at beautiful scenery." }, accept: ["lovely", "beautiful", "exquisite", "a thing of beauty"], hint: "utsukushii — formal, written beauty: scenery, music, a gesture. い-adjective. きれい from u10 is the everyday word and also means clean; うつくしい never means clean." },
        { id: "ja-u80l2-subarashii", type: "vocab", front: "すばらしい", reading: "subarashii", meaning: "wonderful", example: { jp: "すばらしいけしきです。", en: "It's a wonderful view." }, drill: { jp: "すばらしいえんそうをききます。", en: "I listen to a wonderful performance." }, accept: ["great", "splendid", "marvelous"], hint: "subarashii — admiring praise for an achievement or a sight. い-adjective, five beats: su-ba-ra-shi-i. Stronger than いい and warmer than りっぱ in lesson 3, which admires the form of a thing." },
        { id: "ja-u80l2-okashii", type: "vocab", front: "おかしい", reading: "okashii", meaning: "funny", example: { jp: "このはなしはおかしいです。", en: "This story is funny." }, drill: { jp: "おかしいじょうだんをききます。", en: "I hear a funny joke." }, accept: ["strange", "odd", "amusing"], hint: "okashii — ⚠️ TWO meanings that can read the same: funny-amusing and funny-wrong. おかしいですね can mean 'how amusing' or 'something's not right here', and only tone and context separate them." },
        { id: "ja-u80l2-umai", type: "vocab", front: "うまい", reading: "umai", meaning: "good (at)", example: { jp: "かれはりょうりがうまいです。", en: "He is good at cooking." }, drill: { jp: "うまいスピーチをします。", en: "He gives a skilful speech." }, accept: ["skillful", "tasty", "delicious"], hint: "umai — skilful AND tasty, the same word for both. ⚠️ As 'tasty' it is casual and male-coded in Japan; おいしい from u9 is the neutral choice. As 'skilful' it is safe for anyone." },
        { id: "ja-u80l2-mottainai", type: "vocab", front: "もったいない", reading: "mottainai", meaning: "wasteful", example: { jp: "すてるのはもったいないです。", en: "It's a waste to throw it away." }, drill: { jp: "もったいないからすてません。", en: "It would be a waste, so I don't throw it out." }, accept: ["too good to waste", "what a waste", "a shame to waste", "too good to throw out"], hint: "mottainai — ⚠️ not plain 'wasteful'. It is regret that something still-good is being discarded, a word Japan exports as an environmental slogan. むだ in lesson 4 is waste that was pointless from the start." },
        { id: "ja-u80l2-shitashii", type: "vocab", front: "したしい", reading: "shitashii", meaning: "close (emotionally close)", example: { jp: "したしいともだちです。", en: "It's a close friend." }, accept: ["intimate", "friendly", "close", "on close terms"], hint: "shitashii — emotionally close, used of people, not distance (that is ちかい, u10). い-adjective. ⚠️ NO DRILL ON PURPOSE: its example happens to earn sentence:build, and no natural adjective drill can, so adding one would take that card away." },
      ],
    },
    // Lesson 3: judgments (な-adjectives)
    {
      id: "ja-u80l3",
      unit: 80,
      lesson: 3,
      title: "Making judgments",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Judge things with な-adjectives: ふくざつ かんぺき りっぱ てきとう じゅうよう とくべつ.",
      items: [
        { id: "ja-u80l3-fukuzatsu", type: "vocab", front: "ふくざつ", reading: "fukuzatsu", meaning: "complex", example: { jp: "ふくざつなもんだいです。", en: "It's a complex problem." }, drill: { jp: "ふくざつなきかいをつかいます。", en: "I use a complicated machine." }, accept: ["complicated", "complex", "intricate", "tangled"], hint: "fukuzatsu — ふく (multiple) + ざつ (mixed): many things mixed together. な-adjective. It describes STRUCTURE; むずかしい from u21 describes how hard it is for you." },
        { id: "ja-u80l3-kanpeki", type: "vocab", front: "かんぺき", reading: "kanpeki", meaning: "perfect", example: { jp: "かのじょはかんぺきです。", en: "She is perfect." }, drill: { jp: "かんぺきなしごとをします。", en: "He does perfect work." }, accept: ["flawless", "perfect", "faultless", "without a flaw"], hint: "kanpeki — かん (complete) + ぺき (flawless jade): complete and without a crack. な-adjective. The ぺ is a hard p — kan-PE-ki — which is unusual in a Sino-Japanese word." },
        { id: "ja-u80l3-rippa", type: "vocab", front: "りっぱ", reading: "rippa", meaning: "splendid", example: { jp: "りっぱないえです。", en: "It's a splendid house." }, drill: { jp: "りっぱなひとになります。", en: "He becomes a fine person." }, accept: ["fine", "grand", "impressive"], hint: "rippa — admiring the FORM of a thing: a grand building, an upstanding person. な-adjective, with a held っ: rip-pa. Where すばらしい in lesson 2 admires the achievement, りっぱ admires the standing." },
        { id: "ja-u80l3-tekito", type: "vocab", front: "てきとう", reading: "tekitō", meaning: "suitable", example: { jp: "てきとうなへやをさがします。", en: "I'll look for a suitable room." }, drill: { jp: "てきとうなほうほうをきめます。", en: "I settle on a suitable method." }, accept: ["appropriate", "proper", "fit for purpose", "about right"], hint: "tekitō — ⚠️ TWO OPPOSITE readings. Literally 'suitable', but てきとうにやる usually means doing a thing half-heartedly, however it suits you. Tone decides which; long ō: te-ki-tō." },
        { id: "ja-u80l3-juyo", type: "vocab", front: "じゅうよう", reading: "jūyō", meaning: "important (crucial in weight)", example: { jp: "じゅうようなかいぎです。", en: "It's an important meeting." }, drill: { jp: "じゅうようなしょるいをおくります。", en: "I send important documents." }, accept: ["crucial", "significant", "of great weight", "key"], hint: "jūyō — じゅう (heavy) + よう (need): important by weight, so it is used of decisions, documents and meetings. Two long vowels: jū-yō. たいせつ from u23 is important because you treasure it." },
        { id: "ja-u80l3-tokubetsu", type: "vocab", front: "とくべつ", reading: "tokubetsu", meaning: "special (particular and set apart)", example: { jp: "きょうはとくべつなひです。", en: "Today is a special day." }, drill: { jp: "とくべつなりょうりをつくります。", en: "I make a special dish." }, accept: ["particular", "special", "out of the ordinary", "exceptional"], hint: "tokubetsu — とく (special) + べつ (separate): set apart from the rest. な-adjective. The same とく as とくい in lesson 4 and とっきゅう in u74 — とく always singles something out." },
      ],
    },
    // Lesson 4: need & ability (な-adjectives)
    {
      id: "ja-u80l4",
      unit: 80,
      lesson: 4,
      title: "Need and ability",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about need and ability: ひつよう かのう むだ とくい にがて すてき.",
      items: [
        { id: "ja-u80l4-hitsuyo", type: "vocab", front: "ひつよう", reading: "hitsuyō", meaning: "necessary", example: { jp: "パスポートがひつようです。", en: "A passport is necessary." }, drill: { jp: "ひつようなどうぐをかいます。", en: "I buy the necessary tools." }, accept: ["needed", "required", "a necessity", "called for"], hint: "hitsuyō — ひつ (certain) + よう (need): certainly needed. Long ō: hitsu-yō. Both a な-adjective and a noun: ひつようがあります, 'there is a need'. Its opposite ふひつよう adds the ふ you know from ふあん." },
        { id: "ja-u80l4-kano", type: "vocab", front: "かのう", reading: "kanō", meaning: "possible", example: { jp: "よやくはかのうです。", en: "A reservation is possible." }, drill: { jp: "かのうならいきます。", en: "If it's possible, I'll go." }, accept: ["feasible", "can be done", "possible", "doable"], hint: "kanō — か (able) + のう (capacity). Long ō: ka-nō. な-adjective and noun. Its opposite ふかのう, impossible, is the ふ-negative again — the fourth word in this course built that way." },
        { id: "ja-u80l4-muda", type: "vocab", front: "むだ", reading: "muda", meaning: "wasteful (pointless and useless)", example: { jp: "じかんのむだです。", en: "It's a waste of time." }, drill: { jp: "むだなおかねをつかいません。", en: "I don't spend money pointlessly." }, accept: ["useless", "pointless", "waste"], hint: "muda — waste in the sense of pointless from the outset: むだなじかん, time that bought nothing. Contrast もったいない in lesson 2, which regrets discarding something still good. な-adjective." },
        { id: "ja-u80l4-tokui", type: "vocab", front: "とくい", reading: "tokui", meaning: "good at (one's strong point)", example: { jp: "すうがくがとくいです。", en: "I'm good at math." }, drill: { jp: "とくいなスポーツはテニスです。", en: "The sport I'm good at is tennis." }, accept: ["skilled at", "strong point", "one's forte", "confident at"], hint: "tokui — とく (special) + い (mind): your special strength. ⚠️ What you are good at takes が, not を: すうがくがとくいです. Its opposite にがて is the next card." },
        { id: "ja-u80l4-nigate", type: "vocab", front: "にがて", reading: "nigate", meaning: "poor at", example: { jp: "うんどうがにがてです。", en: "I'm poor at exercise." }, drill: { jp: "にがてなりょうりをならいます。", en: "I learn the cooking I'm bad at." }, accept: ["bad at", "weak point", "not good at"], hint: "nigate — にが (bitter) + て (hand): a bitter hand, i.e. your weak suit. Takes が like とくい on the card before. Also used of PEOPLE you find hard to deal with — a polite way to say so." },
        { id: "ja-u80l4-suteki", type: "vocab", front: "すてき", reading: "suteki", meaning: "lovely", example: { jp: "すてきなふくですね。", en: "What lovely clothes." }, drill: { jp: "すてきなワンピースをかいます。", en: "I buy a lovely dress." }, accept: ["nice", "wonderful", "cool"], hint: "suteki — な-adjective, three beats: su-te-ki. ⚠️ Do not confuse it with ステーキ, steak, from u73, which is four beats with a long ē and written in katakana. すてきですね is a safe, warm compliment for almost anything." },
      ],
    },
  ],
};
