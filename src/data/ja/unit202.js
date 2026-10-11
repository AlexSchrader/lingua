// Unit 202 — せっとうご (prefixes: 不 無 未 非 再 過 諸) — B2 / JLPT N2
// Strand D, coverage 10 of 16. Seven prefixes that between them generate several hundred
// B2 words. A learner who knows the prefix reads 未解決 correctly the first time they see
// it; a learner who does not looks up every one. This is the highest leverage per card in
// the block, and it is pure morphology — nothing a thematic unit would ever headline.
export const UNIT202 = {
  id: "ja-u202",
  lang: "ja",
  title: "せっとうご",
  order: 202,
  stage: "b2",
  lessons: [
    {
      id: "ja-u202l1",
      unit: 202,
      lesson: 1,
      title: "不 and 無: not, and without",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Negate a noun two ways: ふきそく, ふとくてい, ふじゅうぶん, むいみ, むかんしん, むせきにん.",
      items: [
        { id: "ja-u202l1-fukisoku", type: "vocab", front: "ふきそく", reading: "fukisoku", meaning: "irregular", example: { jp: "しごとの 時間が ふきそくで、体に よく ありません。", en: "My working hours are irregular, which isn't good for my health." }, drill: { jp: "ふきそくに なります。", en: "It becomes irregular." }, accept: ["erratic", "unsystematic", "not regular"], hint: "不 says the quality is absent or wrong; 無 says the thing itself is not there. ふきそく = not regular; むいみ = without meaning." },
                { id: "ja-u202l1-futokutei", type: "vocab", front: "ふとくてい", reading: "futokutei", meaning: "unspecified, not identified", example: { jp: "ふとくていの 多くの 人が 見る ページです。", en: "It is a page seen by a large, unspecified number of people." }, drill: { jp: "ふとくていの 人が 見ます。", en: "Unspecified people see it." }, accept: ["unspecified", "non-specific", "not pinned down"], hint: "futokutei — 不 (not) + 特定 (specifying). The 不 prefix denies a QUALITY where 無 denies having the thing at all. ふとくてい多数 is the fixed phrase for the general public." },
        { id: "ja-u202l1-fujubun", type: "vocab", front: "ふじゅうぶん", reading: "fujūbun", meaning: "insufficient", example: { jp: "しらべ方が ふじゅうぶんだったと 思います。", en: "I think the investigation was insufficient." }, drill: { jp: "ふじゅうぶんな せつめいでした。", en: "The explanation was insufficient." }, accept: ["inadequate", "not enough", "not sufficient"], hint: "fujūbun — 不 + 十分 (enough). じゅうぶん is itself the positive you will say far more often; 不 simply flips it, exactly as in ふあんてい and ふかくじつ." },
        { id: "ja-u202l1-muimi", type: "vocab", front: "むいみ", reading: "muimi", meaning: "meaningless, pointless", example: { jp: "だれも 読まないなら、書いても むいみです。", en: "If nobody reads it, writing it is pointless." }, drill: { jp: "むいみに なります。", en: "It becomes pointless." }, accept: ["futile", "senseless", "without point"], hint: "muimi — 無 (without) + いみ (meaning): no meaning in it at all. 無 says the thing is absent entirely where 不 only denies a quality — compare むせきにん, having no responsibility whatever." },
        { id: "ja-u202l1-mukanshin", type: "vocab", front: "むかんしん", reading: "mukanshin", meaning: "indifferent, uninterested", example: { jp: "その 問題に むかんしんな 人が 多いです。", en: "A lot of people are indifferent to that problem." }, drill: { jp: "むかんしんな 人が おおいです。", en: "There are many indifferent people." }, accept: ["apathetic", "unconcerned", "not interested"], hint: "mukanshin — 無 (without) + 関心 (interest). It is a LACK, not a dislike: being むかんしん about politics is not caring either way, where きらい would at least be an opinion." },
        { id: "ja-u202l1-musekinin", type: "vocab", front: "むせきにん", reading: "musekinin", meaning: "irresponsible", example: { jp: "とちゅうで やめるのは むせきにんだと 言われました。", en: "I was told that quitting halfway was irresponsible." }, drill: { jp: "むせきにんに みえます。", en: "It looks irresponsible." }, accept: ["unaccountable", "careless of duty", "without responsibility"], hint: "せきにん was u155; 無 strips it away. Once you have the prefix, the whole family reads itself." },
      ],
    },
    {
      id: "ja-u202l2",
      unit: 202,
      lesson: 2,
      title: "未 and 非: not yet, and not that kind",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something hasn't happened yet or falls outside a category: みかいけつ, みてい, みけいけん, みかんせい, ひこうしき, ひこうかい.",
      items: [
        { id: "ja-u202l2-mikaiketsu", type: "vocab", front: "みかいけつ", reading: "mikaiketsu", meaning: "unresolved", example: { jp: "その 問題は 今も みかいけつの ままです。", en: "That problem is still unresolved." }, drill: { jp: "みかいけつの ままです。", en: "It remains unresolved." }, accept: ["not yet settled", "still open", "unsolved"], hint: "未 means NOT YET — it implies the thing is still expected. 不解決 would mean it failed; みかいけつ means it is pending." },
        { id: "ja-u202l2-mitei", type: "vocab", front: "みてい", reading: "mitei", meaning: "not yet decided", example: { jp: "日時は みていですので、決まったら お知らせします。", en: "The date and time aren't decided yet; I'll let you know when they are." }, drill: { jp: "みていの ままです。", en: "It is still undecided." }, accept: ["TBD", "undecided", "to be decided"], hint: "mitei — 未 (not yet) + 定 (fixed). 未 says it has not happened YET and implies it will, which is what separates it from 不 and 無: a みてい date is coming, an ふじゅうぶん one is simply lacking." },
        { id: "ja-u202l2-mikeiken", type: "vocab", front: "みけいけん", reading: "mikeiken", meaning: "inexperienced", example: { jp: "みけいけんでも 大じょうぶだと 言われました。", en: "I was told it's fine even with no experience." }, drill: { jp: "みけいけんの 人が おおいです。", en: "There are many people with no experience." }, accept: ["no experience needed", "green", "without experience"], hint: "みけいけんOK on a job ad means they will train you — one of the most useful words on a Japanese job board." },
        { id: "ja-u202l2-mikansei", type: "vocab", front: "みかんせい", reading: "mikansei", meaning: "unfinished", example: { jp: "この 画は みかんせいの ままで 残されました。", en: "This painting was left unfinished." }, drill: { jp: "みかんせいの ままです。", en: "It stays unfinished." }, accept: ["incomplete", "not finished", "still unfinished"], hint: "mikansei — 未 (not yet) + 完成 (completion). That 未 carries a promise: a みかんせい work could still be finished, and 未完 alone is how an unfinished novel is catalogued." },
        { id: "ja-u202l2-hikoshiki", type: "vocab", front: "ひこうしき", reading: "hikōshiki", meaning: "unofficial", example: { jp: "これは ひこうしきの 話ですので、外では 言わないで ください。", en: "This is off the record, so please don't repeat it outside." }, drill: { jp: "ひこうしきの はなしです。", en: "It is an unofficial matter." }, accept: ["off the record", "informal", "not official"], hint: "非 says it falls OUTSIDE the category — not a failed official thing, but a thing that is not official at all." },
        { id: "ja-u202l2-hikokai", type: "vocab", front: "ひこうかい", reading: "hikōkai", meaning: "closed to the public, private", example: { jp: "その 会は ひこうかいで 行われました。", en: "That meeting was held behind closed doors." }, drill: { jp: "ひこうかいで 行われました。", en: "It was held in private." }, accept: ["not public", "behind closed doors", "not open to the public"], hint: "hikōkai — 非 (not of that kind) + 公開 (open to the public). 非 denies the CATEGORY rather than the quality, so ひこうかい is not merely less public — it is in the other class entirely." },
      ],
    },
    {
      id: "ja-u202l3",
      unit: 202,
      lesson: 3,
      title: "再 and 過: again, and too much",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say something is being redone or has gone too far: さいかくにん, さいけんとう, さいりよう, さいしゅっぱつ, かじょう, ちょうか.",
      items: [
        { id: "ja-u202l3-saikakunin", type: "vocab", front: "さいかくにん", reading: "saikakunin", meaning: "double-checking", example: { jp: "出す 前に、もう 一度 さいかくにんして ください。", en: "Please double-check it once more before submitting." }, drill: { jp: "さいかくにんを お願いします。", en: "Please double-check it." }, accept: ["reconfirmation", "verify again", "checking again"], hint: "再 is simply 'again', and attaches to almost any する-noun — さいかいし, さいけんさ, さいこうちく." },
        { id: "ja-u202l3-saikento", type: "vocab", front: "さいけんとう", reading: "saikentō", meaning: "reconsideration, review", example: { jp: "その 計画は さいけんとうする ことに なりました。", en: "It's been decided that the proposal will be reconsidered." }, drill: { jp: "さいけんとうを します。", en: "We will reconsider it." }, accept: ["re-examination", "another look", "looking at it again"], hint: "In business Japanese さいけんとうします often means no — politely, and with the door left open." },
        { id: "ja-u202l3-sairiyo", type: "vocab", front: "さいりよう", reading: "sairiyō", meaning: "reuse", example: { jp: "古い 紙を さいりようして います。", en: "We reuse old paper." }, drill: { jp: "さいりようが できます。", en: "It can be reused." }, accept: ["recycling (reuse)", "using again", "a second use"], hint: "sairiyō — 再 (again) + 利用 (making use of). 再 attaches freely to any action noun, and this one lesson has three more: さいかくにん, さいけんとう, さいしゅっぱつ. リサイクル sits beside it as the loanword." },
        { id: "ja-u202l3-saishuppatsu", type: "vocab", front: "さいしゅっぱつ", reading: "saishuppatsu", meaning: "a fresh start", example: { jp: "しっぱいしましたが、ここから さいしゅっぱつします。", en: "It went wrong, but I'm making a fresh start from here." }, drill: { jp: "さいしゅっぱつを します。", en: "I am making a fresh start." }, accept: ["starting over", "new beginning", "setting out again"], hint: "saishuppatsu — 再 (again) + 出発 (setting out): starting the journey over rather than resuming it, which is why you use it after something has ENDED and not merely paused." },
        { id: "ja-u202l3-kajo", type: "vocab", front: "かじょう", reading: "kajō", meaning: "excessive", example: { jp: "かじょうな サービスは かえって つかれます。", en: "Excessive service is actually tiring." }, drill: { jp: "かじょうに なりました。", en: "It became excessive." }, accept: ["over-the-top", "surplus", "too much of it"], hint: "過 is 'past the right point' — the same 過 as すぎる. かじょう is too much of a good thing." },
        { id: "ja-u202l3-choka", type: "vocab", front: "ちょうか", reading: "chōka", meaning: "exceeding (a limit)", example: { jp: "にもつが 重さを ちょうかして いました。", en: "The luggage exceeded the weight limit." }, drill: { jp: "ちょうかに 気づきました。", en: "I noticed it had gone over." }, accept: ["going over", "excess (of a limit)", "overshooting"], hint: "超 crosses a stated line, where 過 merely goes too far. Airports and budgets use ちょうか." },
      ],
    },
    {
      id: "ja-u202l4",
      unit: 202,
      lesson: 4,
      title: "諸 and the rest of the family",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Round out the prefix set: しょもんだい, しょがいこく, かろう, かしょう, むかんけい, ひげんじつてき.",
      items: [
        { id: "ja-u202l4-shomondai", type: "vocab", front: "しょもんだい", reading: "shomondai", meaning: "the various problems", example: { jp: "町の しょもんだいに ついて 話しあいました。", en: "We discussed the various problems facing the town." }, drill: { jp: "しょもんだいを 話しあいました。", en: "We discussed the various problems." }, accept: ["assorted issues", "the several problems", "the problems in general"], hint: "諸 pluralises formally — しょがいこく, しょじじょう, しょくん. It belongs to written and spoken formality, never casual speech." },
        { id: "ja-u202l4-shogaikoku", type: "vocab", front: "しょがいこく", reading: "shogaikoku", meaning: "the various countries", example: { jp: "しょがいこくの 意見を 集めて います。", en: "We're gathering the views of the various countries." }, drill: { jp: "しょがいこくの 意見です。", en: "It is the view of the various countries." }, accept: ["several nations", "the countries concerned", "the various foreign countries"], hint: "shogaikoku — 諸 (various, several) + 外国 (foreign countries). 諸 pluralises a noun in formal writing, which Japanese otherwise barely marks: しょもんだい, しょこく, 諸君." },
        { id: "ja-u202l4-karo", type: "vocab", front: "かろう", reading: "karō", meaning: "overwork", example: { jp: "かろうで 体を こわす 人が います。", en: "Some people ruin their health through overwork." }, drill: { jp: "かろうで たおれました。", en: "He collapsed from overwork." }, accept: ["working too much", "exhaustion from work", "too much work"], hint: "過 again — labour past the point it should stop. かろうし, death from overwork, is a word Japanese unfortunately needed to coin." },
        { id: "ja-u202l4-kasho", type: "vocab", front: "かしょう", reading: "kashō", meaning: "too few, insufficient in number", example: { jp: "人が かしょうで、しごとが 進みません。", en: "We're short of people, so the work isn't progressing." }, drill: { jp: "かしょうに なって います。", en: "It has fallen short in number." }, accept: ["undersupplied", "in short supply", "too few"], hint: "The mirror of かじょう. Both are 過 — the prefix marks the deviation, and 少 or 剰 says which way." },
        { id: "ja-u202l4-mukankei", type: "vocab", front: "むかんけい", reading: "mukankei", meaning: "unrelated, nothing to do with it", example: { jp: "その 話は 今の 問題と むかんけいです。", en: "That has nothing to do with the present problem." }, drill: { jp: "むかんけいな はなしです。", en: "It is an unrelated matter." }, accept: ["irrelevant", "unconnected", "nothing to do with it"], hint: "mukankei — 無 (without) + 関係 (relation): no relation at all. 私には むかんけいです is a flat denial of involvement, and it lands blunter in Japanese than it looks translated." },
        { id: "ja-u202l4-higenjitsuteki", type: "vocab", front: "ひげんじつてき", reading: "higenjitsuteki", meaning: "unrealistic", example: { jp: "一日で 終わらせるのは ひげんじつてきです。", en: "Finishing it in a day is unrealistic." }, drill: { jp: "ひげんじつてきに きこえます。", en: "It sounds unrealistic." }, accept: ["not realistic", "impractical", "out of touch with reality"], hint: "Three pieces at once: 非 + 現実 + 的. Once all three are known, long words stop being long." },
      ],
    },
  ],
};
