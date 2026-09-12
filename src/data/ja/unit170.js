// Unit 170 — げいじゅつ・ひひょう (Arts and criticism) — B2 / JLPT N2
// Strand B. The vocabulary for looking at a made thing and saying something useful
// about it: the work and its maker, how it is put together, where it sits against
// what came before, and what it leaves behind in the viewer.
// Mixed script per the u156 header; all kanji verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT170 = {
  id: "ja-u170",
  lang: "ja",
  title: "げいじゅつ・ひひょう",
  order: 170,
  stage: "b2",
  lessons: [
    {
      id: "ja-u170l1",
      unit: 170,
      lesson: 1,
      title: "The work and the viewer",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a work and how it is received: げいじゅつ びてき かんしょう ひょうげんりょく よいん こてん.",
      items: [
        { id: "ja-u170l1-geijutsu", type: "vocab", front: "げいじゅつ", reading: "geijutsu", meaning: "art", example: { jp: "げいじゅつは 答えを 出さずに、問いを のこします。", en: "Art leaves questions rather than giving answers." }, accept: ["the arts", "artistic work"] },
        { id: "ja-u170l1-biteki", type: "vocab", front: "びてき", reading: "biteki", meaning: "aesthetic", example: { jp: "この 建物は べんりさより びてきな うつくしさを えらんで います。", en: "This building chooses aesthetic beauty over convenience." }, accept: ["to do with beauty", "artistic"] },
        { id: "ja-u170l1-kansho", type: "vocab", front: "かんしょう", reading: "kanshō", meaning: "appreciation", example: { jp: "音楽の かんしょうは、しずかな 部屋の ほうが 楽しめます。", en: "Appreciating music is more enjoyable in a quiet room." }, accept: ["viewing", "to appreciate", "taking it in"] },
        { id: "ja-u170l1-hyogenryoku", type: "vocab", front: "ひょうげんりょく", reading: "hyōgenryoku", meaning: "expressive power", example: { jp: "ことばは 少ないですが、ひょうげんりょくが とても 強いです。", en: "There are few words, but the expressive power is very strong." }, drill: { jp: "ひょうげんりょくが つよいです。", en: "The expressive power is strong." }, accept: ["power of expression", "eloquence"] },
        { id: "ja-u170l1-yoin", type: "vocab", front: "よいん", reading: "yoin", meaning: "the lingering impression", example: { jp: "終わってからも、よいんが 長く のこる 映画でした。", en: "It was a film whose impression lingered long after it ended." }, accept: ["afterglow", "resonance", "what stays with you"], hint: "よいん is literally 'remaining sound' — what is still there after the last note. Japanese criticism prizes it, so it turns up constantly in reviews." },
        { id: "ja-u170l1-koten", type: "vocab", front: "こてん", reading: "koten", meaning: "a classic", example: { jp: "こてんは 古いですが、今 読んでも おもしろいです。", en: "Classics are old, but they're still interesting read today." }, accept: ["classical work", "the canon"] },
      ],
    },
    {
      id: "ja-u170l2",
      unit: 170,
      lesson: 2,
      title: "How it was made",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe technique and construction: しゅほう こうせいてき えんしゅつ どくそう もほう ぜんえい.",
      items: [
        { id: "ja-u170l2-shuho", type: "vocab", front: "しゅほう", reading: "shuhō", meaning: "technique", example: { jp: "この しゅほうは、百年 前から ほとんど 変わって いません。", en: "This technique has barely changed in a hundred years." }, accept: ["method", "approach", "craft"] },
        { id: "ja-u170l2-koseiteki", type: "vocab", front: "こうせいてき", reading: "kōseiteki", meaning: "well-composed", example: { jp: "こうせいてきな 写真なので、目が しぜんに 動きます。", en: "The photograph is well composed, so the eye moves naturally." }, accept: ["structured", "compositional"] },
        { id: "ja-u170l2-enshutsu", type: "vocab", front: "えんしゅつ", reading: "enshutsu", meaning: "staging", example: { jp: "話は かんたんですが、えんしゅつが すばらしかったです。", en: "The story is simple, but the staging was superb." }, accept: ["direction", "production", "presentation"] },
        { id: "ja-u170l2-dokuso", type: "vocab", front: "どくそう", reading: "dokusō", meaning: "originality", example: { jp: "どくそうが ある 作品は、まねからは 生まれません。", en: "Work with originality doesn't come out of imitation." }, accept: ["inventiveness", "creativity"], hint: "どくそう and もほう are the pair a review swings between: making something new, or copying. Neither is automatically the compliment." },
        { id: "ja-u170l2-moho", type: "vocab", front: "もほう", reading: "mohō", meaning: "imitation", example: { jp: "はじめは もほうでも、つづければ 自分の ものに なります。", en: "Even if you start by imitating, keep at it and it becomes your own." }, drill: { jp: "もほうを します。", en: "I imitate it." }, accept: ["copying", "emulation"] },
        { id: "ja-u170l2-zenei", type: "vocab", front: "ぜんえい", reading: "zenei", meaning: "avant-garde", example: { jp: "ぜんえいの 作品は、はじめは なかなか 理かいされません。", en: "Avant-garde work isn't readily understood at first." }, accept: ["experimental", "cutting-edge"] },
      ],
    },
    {
      id: "ja-u170l3",
      unit: 170,
      lesson: 3,
      title: "Making a judgement",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Review something without simply liking or disliking it: ようご しんぎ こんきょない ぎゃっきょう ぼうがい こうけん.",
      items: [
        { id: "ja-u170l3-yogo", type: "vocab", front: "ようご", reading: "yōgo", meaning: "a defence (of something)", example: { jp: "その 作品を ようごする 人も、ひはんする 人も います。", en: "There are people who defend that work and people who attack it." }, accept: ["to stand up for", "advocacy", "support"] },
        { id: "ja-u170l3-shingi", type: "vocab", front: "しんぎ", reading: "shingi", meaning: "whether it is true", example: { jp: "その 話の しんぎは、まだ だれにも 分かりません。", en: "Nobody yet knows whether that story is true." }, accept: ["truth or falsehood", "authenticity"] },
        { id: "ja-u170l3-konkyonai", type: "vocab", front: "こんきょない", reading: "konkyonai", meaning: "groundless", example: { jp: "こんきょない ひはんには、答える ひつようが ありません。", en: "There's no need to answer groundless criticism." }, accept: ["unfounded", "baseless"] },
        { id: "ja-u170l3-gyakkyo", type: "vocab", front: "ぎゃっきょう", reading: "gyakkyō", meaning: "adversity", example: { jp: "ぎゃっきょうの 中で 作られた 作品ほど、強く のこります。", en: "Work made in adversity tends to last the longest." }, accept: ["hard circumstances", "against the odds"] },
        { id: "ja-u170l3-bogai", type: "vocab", front: "ぼうがい", reading: "bōgai", meaning: "obstruction", example: { jp: "自ゆうな ひょうげんへの ぼうがいは、ゆるされません。", en: "Obstruction of free expression can't be permitted." }, accept: ["interference", "hindrance", "to block"] },
        { id: "ja-u170l3-koken", type: "vocab", front: "こうけん", reading: "kōken", meaning: "a contribution", example: { jp: "この 作品は、あとの 世代に 大きく こうけんしました。", en: "This work contributed greatly to later generations." }, accept: ["to contribute", "service", "adding to"] },
      ],
    },
    {
      id: "ja-u170l4",
      unit: 170,
      lesson: 4,
      title: "Where it sits",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place a work against what surrounds it: ぶんかけん たぶんか がいぶ しゅりゅう うけつぐ どくとく.",
      items: [
        { id: "ja-u170l4-bunkaken", type: "vocab", front: "ぶんかけん", reading: "bunkaken", meaning: "a cultural sphere", example: { jp: "同じ ぶんかけんの 国とは、話が 通じやすいです。", en: "It's easier to understand countries in the same cultural sphere." }, drill: { jp: "ぶんかけんが おなじです。", en: "The cultural sphere is the same." }, accept: ["cultural area", "shared culture zone"] },
        { id: "ja-u170l4-tabunka", type: "vocab", front: "たぶんか", reading: "tabunka", meaning: "multicultural", example: { jp: "たぶんかの 町では、いろいろな ことばが 聞こえます。", en: "In a multicultural town you hear all sorts of languages." }, accept: ["many cultures", "cultural diversity"] },
        { id: "ja-u170l4-gaibu", type: "vocab", front: "がいぶ", reading: "gaibu", meaning: "the outside", example: { jp: "がいぶの 人の 意見も、たまには ひつようです。", en: "An outside view is needed now and then too." }, accept: ["external", "outside party"] },
        { id: "ja-u170l4-shuryu", type: "vocab", front: "しゅりゅう", reading: "shuryū", meaning: "the mainstream", example: { jp: "ぜんえいだった しゅほうが、今では しゅりゅうです。", en: "A technique that was avant-garde is now the mainstream." }, accept: ["the main current", "dominant style"] },
        { id: "ja-u170l4-uketsugu", type: "vocab", front: "うけつぐ", reading: "uketsugu", meaning: "to take over from", example: { jp: "父の 店を うけついで、十年に なります。", en: "It's been ten years since I took over my father's shop." }, accept: ["to inherit", "to carry on", "to succeed to"] },
        { id: "ja-u170l4-dokutoku", type: "vocab", front: "どくとく", reading: "dokutoku", meaning: "distinctive", example: { jp: "この 作者には どくとくの リズムが あります。", en: "This writer has a distinctive rhythm." }, accept: ["unique", "characteristic", "all its own"] },
      ],
    },
  ],
};
