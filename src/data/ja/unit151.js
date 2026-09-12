// JA Unit 151 — ごい・N3・10 (ことばとひょうげん — language and expression) — B1 / JLPT N3
// Strand D, coverage 10 of 14. The vocabulary for talking ABOUT language — which a learner
// needs more than most speakers do, because it is how you ask for help: "is that a set
// phrase or did you make it up?", "which paragraph?", "what's the reading?".
// Lesson 4 is the discourse adverbs (ようするに, けっきょく, かえって, とにかく). They are
// not really vocabulary — they are the joints of an argument, and a B1 speaker without
// them can state facts but cannot structure a point.
export const UNIT151 = {
  id: "ja-u151",
  lang: "ja",
  title: "ごい・N3・10",
  order: 151,
  stage: "b1",
  lessons: [
    {
      id: "ja-u151l1",
      unit: 151,
      lesson: 1,
      title: "Sounds and writing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Ask about how something sounds and how it's written: アクセント, イントネーション, ふりがな, くとうてん, たてがき, よこがき.",
      items: [
        { id: "ja-u151l1-akusento", type: "vocab", front: "アクセント", reading: "akusento", meaning: "pitch accent", example: { jp: "おなじことばでも、アクセントでいみがかわります。", en: "Even with the same word, the accent changes the meaning." }, accept: ["stress", "accent (pitch)", "intonation of a word"], hint: "Japanese accent is PITCH, not stress — はし can be bridge or chopsticks depending on which syllable is high." },
        { id: "ja-u151l1-intoneshon", type: "vocab", front: "イントネーション", reading: "intonēshon", meaning: "intonation (of a sentence)", example: { jp: "さいごのイントネーションをあげると、しつもんになります。", en: "If you raise the intonation at the end, it becomes a question." }, accept: ["sentence melody", "tone of a sentence"], hint: "アクセント lives inside a word; イントネーション runs across the whole sentence. Both matter, and only one is written down." },
        { id: "ja-u151l1-furigana", type: "vocab", front: "ふりがな", reading: "furigana", meaning: "reading glosses above kanji", example: { jp: "このほんはふりがながあるので、こどもでもよめます。", en: "This book has reading glosses, so even children can read it." }, drill: { jp: "ふりがながあります。", en: "There are reading glosses." }, accept: ["kana over kanji", "reading aid", "ruby text"], hint: "The small kana printed above a kanji. Asking ふりがなをつけていただけませんか is the most useful request a reader can make." },
        { id: "ja-u151l1-kutoten", type: "vocab", front: "くとうてん", reading: "kutōten", meaning: "punctuation (、and 。)", example: { jp: "くとうてんがないと、ながいぶんはよみにくいです。", en: "Without punctuation, a long sentence is hard to read." }, accept: ["comma and full stop", "punctuation marks"], hint: "Covers both marks together: 。is くてん and 、is とうてん. Japanese has no space between words, so these carry more weight than in English." },
        { id: "ja-u151l1-tategaki", type: "vocab", front: "たてがき", reading: "tategaki", meaning: "vertical writing", example: { jp: "しょうせつはたてがきのものがおおいです。", en: "Most novels are written vertically." }, accept: ["written top to bottom", "vertical text"], hint: "Top to bottom, right to left — novels, newspapers, and most printed literature. The book opens from what looks like the back." },
        { id: "ja-u151l1-yokogaki", type: "vocab", front: "よこがき", reading: "yokogaki", meaning: "horizontal writing", example: { jp: "きょうかしょはよこがきなので、ノートもよこがきにします。", en: "The textbook is horizontal, so I'll write my notes horizontally too." }, accept: ["written left to right", "horizontal text"], hint: "Left to right, like English. Science, business and anything with numbers uses よこがき — the two systems coexist happily." },
      ],
    },
    {
      id: "ja-u151l2",
      unit: 151,
      lesson: 2,
      title: "Kinds of words",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name what kind of expression you've just met: ことわざ, かんようく, ぎおんご, がいらいご, りゃく, ひょうげん.",
      items: [
        { id: "ja-u151l2-kotowaza", type: "vocab", front: "ことわざ", reading: "kotowaza", meaning: "proverb", example: { jp: "「いそがばまわれ」ということわざがすきです。", en: "I like the proverb 'more haste, less speed'." }, accept: ["saying", "adage", "old saying"], hint: "A complete traditional saying with a lesson in it. Knowing three or four is disproportionately impressive." },
        { id: "ja-u151l2-kanyoku", type: "vocab", front: "かんようく", reading: "kanyōku", meaning: "idiom, set phrase", example: { jp: "「あたまがいたい」は、こまっているといういみのかんようくにもなります。", en: "'My head hurts' can also be an idiom meaning you're in trouble." }, accept: ["fixed expression", "turn of phrase"], hint: "A phrase whose meaning isn't the sum of its words. Unlike ことわざ it isn't a whole sentence and teaches nothing — it just means something." },
        { id: "ja-u151l2-giongo", type: "vocab", front: "ぎおんご", reading: "giongo", meaning: "sound-imitating word", example: { jp: "「ワンワン」や「ザーザー」は、ぎおんごです。", en: "'Woof woof' and 'pouring rain' are sound-imitating words." }, accept: ["onomatopoeia", "sound word"], hint: "Words that copy a sound. Its partner ぎたいご copies a STATE — ぐっすり and ばらばら from u147 are ぎたいご, not ぎおんご." },
        { id: "ja-u151l2-gairaigo", type: "vocab", front: "がいらいご", reading: "gairaigo", meaning: "loanword", example: { jp: "がいらいごはカタカナでかきますが、いみがかわることもあります。", en: "Loanwords are written in katakana, but the meaning sometimes shifts." }, accept: ["foreign word", "borrowed word", "katakana word"], hint: "The category コンセント and マンション belong to — and the warning that comes with them: the Japanese meaning may not be the English one." },
        { id: "ja-u151l2-ryaku", type: "vocab", front: "りゃく", reading: "ryaku", meaning: "abbreviation", example: { jp: "「テレビ」は「テレビジョン」のりゃくです。", en: "'Terebi' is an abbreviation of 'television'." }, accept: ["short form", "shortening", "acronym"], hint: "Japanese abbreviates aggressively, usually to four syllables: リモコン, パソコン, スマホ. ～のりゃく is how you explain one." },
        { id: "ja-u151l2-hyogen", type: "vocab", front: "ひょうげん", reading: "hyōgen", meaning: "expression, way of putting it", example: { jp: "もっとていねいなひょうげんをつかったほうがいいです。", en: "You'd do better to use a more polite expression." }, accept: ["phrasing", "wording", "to express"], hint: "The general word for a way of saying something. ひょうげんがかたい = 'that phrasing is stiff' — the note you'll get most often on your Japanese." },
      ],
    },
    {
      id: "ja-u151l3",
      unit: 151,
      lesson: 3,
      title: "Talking about a text",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Discuss something you've read: だんらく, けつろん, ようし, しゅだい, さくしゃ, どくしゃ.",
      items: [
        { id: "ja-u151l3-danraku", type: "vocab", front: "だんらく", reading: "danraku", meaning: "paragraph", example: { jp: "さいごのだんらくが、いちばんたいせつです。", en: "The final paragraph is the most important." }, drill: { jp: "だんらくがたいせつです。", en: "The paragraph is important." }, accept: ["section", "block of text"], hint: "The unit above a sentence. Japanese paragraphs are marked by a one-space indent, not a blank line." },
        { id: "ja-u151l3-ronbun", type: "vocab", front: "ろんぶん", reading: "ronbun", meaning: "paper, thesis", example: { jp: "ろんぶんをかくために、ほんを20さつよみました。", en: "To write my thesis I read twenty books." }, accept: ["dissertation", "academic paper", "essay"], hint: "ろん (argument) + ぶん (writing) — a piece that argues a position, unlike さくぶん, which is school composition." },
        { id: "ja-u151l3-yoshi", type: "vocab", front: "ようし", reading: "yōshi", meaning: "summary, gist", example: { jp: "ながいぶんしょうですが、ようしはかんたんです。", en: "It's a long text, but the gist is simple." }, accept: ["main points", "outline", "the essence"], hint: "The core of what was said, stripped of detail. ようやく is the ACT of summarizing; ようし is the summary itself." },
        { id: "ja-u151l3-shudai", type: "vocab", front: "しゅだい", reading: "shudai", meaning: "theme, subject", example: { jp: "このしょうせつのしゅだいは、かぞくです。", en: "The theme of this novel is family." }, accept: ["topic", "main idea", "motif"], hint: "What a work is ABOUT at the deepest level. タイトル is the title; しゅだい is the idea underneath it." },
        { id: "ja-u151l3-sakusha", type: "vocab", front: "さくしゃ", reading: "sakusha", meaning: "author, creator", example: { jp: "さくしゃがだれか、しらべてみます。", en: "I'll look up who the author is." }, accept: ["writer", "maker", "composer"], hint: "Covers books, music and art alike — さく (work) + しゃ (person). Narrower words exist: ちょしゃ for a book's author." },
        { id: "ja-u151l3-hyoron", type: "vocab", front: "ひょうろん", reading: "hyōron", meaning: "criticism, review", example: { jp: "えいがのひょうろんをよんでから、みるかどうかきめます。", en: "I read the film reviews and then decide whether to watch." }, accept: ["critique", "commentary", "review"], hint: "ひょう (judge) + ろん (argument) — a reasoned assessment, not a star rating. The person who writes them is a ひょうろんか." },
      ],
    },
    {
      id: "ja-u151l4",
      unit: 151,
      lesson: 4,
      title: "The joints of an argument",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Steer a point instead of just stating it: ようするに, けっきょく, かえって, とにかく, いわば, なにしろ.",
      items: [
        { id: "ja-u151l4-genni", type: "vocab", front: "げんに", reading: "genni", meaning: "in fact, actually", example: { jp: "むりだといわれましたが、げんにできたひとがいます。", en: "They said it was impossible, but in fact someone has done it." }, accept: ["as a matter of fact", "really", "in reality"], hint: "Produces evidence against what was just claimed. Stronger than じつは, which only reveals something withheld." },
        { id: "ja-u151l4-shosen", type: "vocab", front: "しょせん", reading: "shosen", meaning: "when all is said and done", example: { jp: "しょせんれんしゅうですから、まけてもいいです。", en: "It's only practice when all's said and done, so losing is fine." }, accept: ["after all", "ultimately", "merely"], hint: "Resigned, and it shrinks whatever follows. Said about yourself it is modest; said about someone else's effort it is dismissive." },
        { id: "ja-u151l4-kaette", type: "vocab", front: "かえって", reading: "kaette", meaning: "on the contrary, if anything", example: { jp: "くすりをのんだら、かえってぐあいがわるくなりました。", en: "I took the medicine and if anything felt worse." }, accept: ["rather", "instead", "the opposite happened"], hint: "The result went the OPPOSITE way to what you'd expect. むしろ corrects a description; かえって reports a backfire." },
        { id: "ja-u151l4-tonikaku", type: "vocab", front: "とにかく", reading: "tonikaku", meaning: "anyway, in any case", example: { jp: "りゆうはあとでききます。とにかく、いそぎましょう。", en: "I'll hear the reason later. Anyway, let's hurry." }, accept: ["at any rate", "for now", "whatever the case"], hint: "Sets discussion aside to get on with something. どうせ is resigned; とにかく is practical — that's the whole difference." },
        { id: "ja-u151l4-iwaba", type: "vocab", front: "いわば", reading: "iwaba", meaning: "so to speak, as it were", example: { jp: "かれはいわば、このチームのリーダーです。", en: "He is, so to speak, the leader of this team." }, accept: ["you might say", "in a sense", "figuratively"], hint: "Flags the phrase that follows as a comparison, not a fact. It buys you permission to be imprecise on purpose." },
        { id: "ja-u151l4-nanishiro", type: "vocab", front: "なにしろ", reading: "nanishiro", meaning: "after all, the thing is", example: { jp: "なにしろはじめてなので、じかんがかかります。", en: "The thing is, it's my first time, so it takes a while." }, accept: ["you see", "given that", "what with"], hint: "Introduces the one overriding reason that explains everything else. Sets up an excuse before you make it." },
      ],
    },
  ],
};
