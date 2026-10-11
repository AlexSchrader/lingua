// Unit 161 — ニュアンス・ていど (Nuance and degree) — B2 / JLPT N2
// Strand B. B1's u103 gave the blunt comparatives; this is the fine grain — the
// adverbs that decide whether a claim sounds measured or overblown. Most of these
// are function words, so the example sentence carries the meaning, not the gloss.
// Mixed script per the u156 header; all kanji verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT161 = {
  id: "ja-u161",
  lang: "ja",
  title: "ニュアンス・ていど",
  order: 161,
  stage: "b2",
  lessons: [
    {
      id: "ja-u161l1",
      unit: 161,
      lesson: 1,
      title: "Turning it up",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Mark how strong a change or difference is: きわめて ひかくてき いちじるしい きゅうげき じゃっかん たしょう.",
      items: [
        { id: "ja-u161l1-kiwamete", type: "vocab", front: "きわめて", reading: "kiwamete", meaning: "extremely (in the highest degree)", example: { jp: "きわめて まれな ことですから、ふつうは 考えなくて いいです。", en: "It's an extremely rare case, so normally you needn't consider it." }, drill: { jp: "きわめて むずかしい しごとです。", en: "It is an extremely difficult job." }, accept: ["exceedingly", "highly", "utterly"], hint: "きわめて is written register — reports and news. Say とても in conversation or you sound like a document." },
        { id: "ja-u161l1-hikakuteki", type: "vocab", front: "ひかくてき", reading: "hikakuteki", meaning: "relatively (comparatively speaking)", example: { jp: "この へんは ひかくてき しずかで、住みやすいです。", en: "This area is relatively quiet and easy to live in." }, drill: { jp: "ひかくてき やさしい もんだいです。", en: "It is a comparatively easy problem." }, accept: ["comparatively", "fairly", "on the whole"], hint: "hikakuteki — 比較 (comparison) plus てき: judged against something else, never in absolute terms. ひかくてき やすい means cheap FOR what it is. Take the comparison away and it says nothing." },
        { id: "ja-u161l1-ichijirushii", type: "vocab", front: "いちじるしい", reading: "ichijirushii", meaning: "marked", example: { jp: "この 十年で、町の すがたは いちじるしく 変わりました。", en: "Over these ten years the town's appearance has changed markedly." }, drill: { jp: "まちのへんかがいちじるしい。", en: "The change in the town is marked." }, accept: ["striking", "conspicuous", "remarkable"], hint: "ichijirushii — 著しい, from 著 (conspicuous): big enough that you cannot miss it. Almost always about a CHANGE or a difference, which is why it travels with 変わる and 差." },
        { id: "ja-u161l1-kyugeki", type: "vocab", front: "きゅうげき", reading: "kyūgeki", meaning: "abrupt", example: { jp: "きゅうげきな へんかには、体が ついて いきません。", en: "The body can't keep up with abrupt change." }, drill: { jp: "きゅうげきに かわりました。", en: "It changed abruptly." }, accept: ["sudden", "sharp", "rapid"], hint: "kyūgeki — 急 (sudden) + 激 (violent): sudden AND steep. 急 on its own is merely quick; きゅうげき adds the force that makes a change hard to absorb. Used of change, never of a person." },
        { id: "ja-u161l1-jakkan", type: "vocab", front: "じゃっかん", reading: "jakkan", meaning: "somewhat", example: { jp: "ねだんは じゃっかん 上がりましたが、まだ 買えます。", en: "The price rose somewhat, but it's still affordable." }, drill: { jp: "じゃっかん おくれて 着きました。", en: "I arrived somewhat late." }, accept: ["slightly", "a little", "a certain number"], hint: "jakkan — 若 (slight) + 干 (a little): a small but real amount, and a written word rather than a spoken one. すこし is what you say; じゃっかん is what a notice or a report prints." },
        { id: "ja-u161l1-tasho", type: "vocab", front: "たしょう", reading: "tashō", meaning: "to some extent", example: { jp: "たしょうの ごさは ありますが、けっかは 変わりません。", en: "There's some margin of error, but the result doesn't change." }, drill: { jp: "たしょうの むりは あります。", en: "There is some strain involved." }, accept: ["more or less", "a bit", "somewhat"], hint: "tashō — 多 (many) + 少 (few) stacked: literally more-or-less. It concedes a quantity without naming it, and it softens whatever follows — たしょう おくれます means I will be a bit late." },
      ],
    },
    {
      id: "ja-u161l2",
      unit: 161,
      lesson: 2,
      title: "Turning it down",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Keep a claim small and honest: かすか ごくわずか ほどほど てきど かげん たかだか.",
      items: [
        { id: "ja-u161l2-kasuka", type: "vocab", front: "かすか", reading: "kasuka", meaning: "faint", example: { jp: "とおくから かすかな 音が 聞こえて きました。", en: "A faint sound came from far away." }, drill: { jp: "かすかに きこえます。", en: "It is faintly audible." }, accept: ["dim", "slight", "barely there"], hint: "kasuka — 微か: so slight it sits at the edge of being noticed. Sounds, lights, smells, memories. Once you can measure it comfortably it has stopped being かすか." },
        { id: "ja-u161l2-gokuwazuka", type: "vocab", front: "ごくわずか", reading: "gokuwazuka", meaning: "the merest fraction", example: { jp: "ごくわずかな 人しか、その 話を 知りません。", en: "Only the merest handful know that story." }, drill: { jp: "ごくわずかに のこりました。", en: "The merest fraction was left." }, accept: ["a tiny amount", "very few", "minimal"], hint: "gokuwazuka — ごく (extremely) plus わずか (a mere amount). The strongest small-quantity phrase at this level: not simply few, few enough to be worth remarking on." },
        { id: "ja-u161l2-hodohodo", type: "vocab", front: "ほどほど", reading: "hodohodo", meaning: "in moderation", example: { jp: "べんきょうも ほどほどに しないと、体を こわします。", en: "Even studying has to be in moderation, or you'll wreck your health." }, drill: { jp: "ほどほどに します。", en: "I do it in moderation." }, accept: ["moderately", "not overdoing it", "in moderation"], hint: "hodohodo — ほど (degree) doubled: to a degree and no further. It is advice rather than description — ほどほどに しなさい is what you say to someone who is overdoing it." },
        { id: "ja-u161l2-tekido", type: "vocab", front: "てきど", reading: "tekido", meaning: "a moderate amount", example: { jp: "てきどな うんどうは、心にも 体にも いいです。", en: "A moderate amount of exercise is good for mind and body." }, drill: { jp: "てきどに 休んで ください。", en: "Please rest in moderation." }, accept: ["moderate", "just right", "appropriate degree"], hint: "tekido — 適 (suitable) + 度 (degree): the right degree for the purpose. ほどほど is a plea to ease off; てきど is a measured, approving word you would find printed on a label." },
        { id: "ja-u161l2-kagen", type: "vocab", front: "かげん", reading: "kagen", meaning: "the right adjustment", example: { jp: "火の かげんが むずかしくて、なんども しっぱいしました。", en: "Getting the heat right was hard, and I failed several times." }, drill: { jp: "かげんが むずかしいです。", en: "Getting the adjustment right is hard." }, accept: ["degree", "moderation", "to adjust"], hint: "かげん is the dial, not the amount — 火かげん, 手かげん. 「いいかげん」 is that dial left carelessly anywhere." },
        { id: "ja-u161l2-takadaka", type: "vocab", front: "たかだか", reading: "takadaka", meaning: "at most", example: { jp: "かかっても たかだか 三十分ですから、待ちましょう。", en: "It'll take thirty minutes at most, so let's wait." }, drill: { jp: "たかだか 千円でしょう。", en: "It will be a thousand yen at most." }, accept: ["at best", "no more than", "at the very most"], hint: "takadaka — 高 (high) doubled, and yet it means the opposite of high: at the very most. It dismisses the amount as small, so たかだか 千円 means only a thousand yen." },
      ],
    },
    {
      id: "ja-u161l3",
      unit: 161,
      lesson: 3,
      title: "Good enough, or not",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something is passable without praising it: めだつ ややこしい おおまか そこそこ まずまず いまいち.",
      items: [
        { id: "ja-u161l3-medatsu", type: "vocab", front: "めだつ", reading: "medatsu", meaning: "to stand out", example: { jp: "赤い かばんは めだつので、すぐに 見つかります。", en: "A red bag stands out, so it's easy to find." }, drill: { jp: "めだつのが きらいです。", en: "I dislike standing out." }, accept: ["to be conspicuous", "to catch the eye", "to be noticeable"], hint: "medatsu — 目 (eye) + 立つ (to stand): it stands up in your eye. Neutral about a colour or a size, but of a PERSON it leans negative here, where めだたない is often the compliment." },
        { id: "ja-u161l3-yayakoshii", type: "vocab", front: "ややこしい", reading: "yayakoshii", meaning: "fiddly", example: { jp: "てつづきが ややこしくて、一日 かかりました。", en: "The paperwork was fiddly and took all day." }, drill: { jp: "せつめいが ややこしいです。", en: "The explanation is fiddly." }, accept: ["convoluted", "messy", "complicated"], hint: "ふくざつ is complex by nature; ややこしい is annoying to deal with. A theory is ふくざつ; a form is ややこしい." },
        { id: "ja-u161l3-omaka", type: "vocab", front: "おおまか", reading: "ōmaka", meaning: "broadly", example: { jp: "おおまかな よていだけ 決めて、あとは その 日に 考えます。", en: "We set only a broad plan and decide the rest on the day." }, drill: { jp: "おおまかに きめます。", en: "I decide broadly." }, accept: ["rough", "general", "in outline"], hint: "ōmaka — 大 (big) plus まか: painted with a broad brush. Approving when it is deliberate, as おおまかに きめる is leaving room on purpose, and critical when it is just carelessness." },
        { id: "ja-u161l3-sokosoko", type: "vocab", front: "そこそこ", reading: "sokosoko", meaning: "reasonably", example: { jp: "そこそこ できましたが、まんぞくは して いません。", en: "It went reasonably well, but I'm not satisfied." }, drill: { jp: "そこそこ いい できでした。", en: "It came out reasonably well." }, accept: ["fairly", "passably", "so-so"], hint: "sokosoko — enough to pass, not enough to boast about. Spoken and slightly self-deprecating. After a number it means roughly that much: 三十人そこそこ is about thirty." },
        { id: "ja-u161l3-mazumazu", type: "vocab", front: "まずまず", reading: "mazumazu", meaning: "not bad", example: { jp: "はじめてに しては、まずまずの できでした。", en: "For a first attempt, it was not bad." }, drill: { jp: "まずまずの けっかでした。", en: "It was a not-bad result." }, accept: ["tolerable", "acceptable", "all right"], hint: "mazumazu — まず (first of all) doubled: well, for a start it is acceptable. Warmer than そこそこ, and the standard polite answer when a thing went better than you feared." },
        { id: "ja-u161l3-imaichi", type: "vocab", front: "いまいち", reading: "imaichi", meaning: "not quite there", example: { jp: "あじは いまいちでしたが、店の 人は しんせつでした。", en: "The taste wasn't quite there, but the staff were kind." }, drill: { jp: "この みせは いまいちでした。", en: "This shop was not quite there." }, accept: ["so-so", "falls short", "underwhelming"], hint: "いまいち is casual and softly negative — literally 'one more (needed)'. Never write it in a report." },
      ],
    },
    {
      id: "ja-u161l4",
      unit: 161,
      lesson: 4,
      title: "Singling out",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Pick one thing out of a set, or do something deliberately: とりわけ なおさら あえて しいて やたら さいてき.",
      items: [
        { id: "ja-u161l4-toriwake", type: "vocab", front: "とりわけ", reading: "toriwake", meaning: "above all", example: { jp: "夏は あついですが、とりわけ 八月が たいへんです。", en: "Summer is hot, but August above all is hard going." }, drill: { jp: "とりわけ むずかしい もんだいです。", en: "It is a particularly difficult problem." }, accept: ["especially", "in particular", "most of all"], hint: "toriwake — 取り分け, to take a portion out: pulling one item out of the group to single it out. Stronger than とくに, and the thing singled out always follows straight after." },
        { id: "ja-u161l4-naosara", type: "vocab", front: "なおさら", reading: "naosara", meaning: "all the more", example: { jp: "しょうこが 出た 今は、なおさら ひていできません。", en: "Now that evidence has appeared, it's all the more impossible to deny." }, drill: { jp: "しょうこが あるので なおさら むずかしいです。", en: "There is evidence, so it is all the more difficult." }, accept: ["even more so", "still more", "all the more so"], hint: "naosara — なお (further) + さら (more): on top of what was already true. It needs a reason in front of it, so a sentence opening with なおさら out of nowhere will not parse." },
        { id: "ja-u161l4-aete", type: "vocab", front: "あえて", reading: "aete", meaning: "deliberately (against the grain)", example: { jp: "みんなが さんせいの 中で、あえて はんろんしました。", en: "With everyone in favour, I deliberately argued against." }, drill: { jp: "あえて 何も 言いませんでした。", en: "I deliberately said nothing." }, accept: ["daringly", "purposely", "going out of one's way"], hint: "あえて marks a choice made AGAINST the easy option — that resistance is the whole meaning." },
        { id: "ja-u161l4-shiite", type: "vocab", front: "しいて", reading: "shiite", meaning: "if pressed", example: { jp: "しいて 言えば、こちらの ほうが 少し いいです。", en: "If pressed, I'd say this one is slightly better." }, drill: { jp: "しいて えらぶなら これです。", en: "If I had to choose, this one." }, accept: ["forcibly", "if I must choose", "if I had to pick"], hint: "しいて 言えば is the polite way to answer 'which do you prefer?' when you genuinely don't mind." },
        { id: "ja-u161l4-yatara", type: "vocab", front: "やたら", reading: "yatara", meaning: "excessively", example: { jp: "やたらに 買い物を すると、あとで こまります。", en: "Shop excessively and you'll regret it later." }, drill: { jp: "やたらに つかうと なくなります。", en: "Use it excessively and it will run out." }, accept: ["indiscriminately", "randomly", "far too much"], hint: "yatara — nearly always やたらに or やたらと, and always critical: too much, with no judgement behind it. むやみに is the same excess but specifically without thinking it through." },
        { id: "ja-u161l4-saiteki", type: "vocab", front: "さいてき", reading: "saiteki", meaning: "optimal", example: { jp: "この やり方が、今の じょうきょうでは さいてきです。", en: "This approach is optimal for the current situation." }, drill: { jp: "さいてきな ほうほうを さがします。", en: "We look for the optimal method." }, accept: ["best suited", "ideal", "most appropriate"], hint: "saiteki — 最 (most) + 適 (suitable): the best fit for THESE conditions, not the best in the abstract. Change the conditions and the さいてき answer changes with them." },
      ],
    },
  ],
};
