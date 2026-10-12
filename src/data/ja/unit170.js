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
        { id: "ja-u170l1-geijutsu", type: "vocab", front: "げいじゅつ", reading: "geijutsu", meaning: "art (the arts in general)", example: { jp: "げいじゅつは 答えを 出さずに、問いを のこします。", en: "Art leaves questions rather than giving answers." }, drill: { jp: "げいじゅつが すきです。", en: "I like art." }, accept: ["the arts", "artistic work", "art in general"], hint: "geijutsu — 芸 (an accomplishment) + 術 (an art or method): the arts as a whole field. 美術 is the visual arts only, so げいじゅつ takes in music, theatre and dance as well." },
        { id: "ja-u170l1-biteki", type: "vocab", front: "びてき", reading: "biteki", meaning: "aesthetic", example: { jp: "この 建物は べんりさより びてきな うつくしさを えらんで います。", en: "This building chooses aesthetic beauty over convenience." }, drill: { jp: "びてきに すばらしいです。", en: "It is aesthetically superb." }, accept: ["to do with beauty", "artistic", "in terms of beauty"], hint: "biteki — 美 (beauty) + てき: to do with beauty. It judges by beauty rather than by use, which is why this unit keeps setting it against べんり." },
        { id: "ja-u170l1-kansho", type: "vocab", front: "かんしょう", reading: "kanshō", meaning: "appreciation", example: { jp: "音楽の かんしょうは、しずかな 部屋の ほうが 楽しめます。", en: "Appreciating music is more enjoyable in a quiet room." }, drill: { jp: "かんしょうを 楽しみます。", en: "I enjoy appreciating it." }, accept: ["viewing", "to appreciate", "taking it in"], hint: "kanshō — 鑑 (to judge) + 賞 (to prize): looking at a work closely and valuing it. Active, not passive — 見る is seeing; かんしょう is attending to what you see." },
        { id: "ja-u170l1-hyogenryoku", type: "vocab", front: "ひょうげんりょく", reading: "hyōgenryoku", meaning: "expressive power", example: { jp: "ことばは 少ないですが、ひょうげんりょくが とても 強いです。", en: "There are few words, but the expressive power is very strong." }, drill: { jp: "ひょうげんりょくが つよいです。", en: "The expressive power is strong." }, accept: ["power of expression", "eloquence", "how expressive it is"], hint: "hyōgenryoku — ひょうげん (expression) + りょく (force), the same りょく ending as せっとくりょく. It is the CAPACITY to get something across, which is why very few words can carry a great deal of it." },
        { id: "ja-u170l1-yoin", type: "vocab", front: "よいん", reading: "yoin", meaning: "the lingering impression", example: { jp: "終わってからも、よいんが 長く のこる 映画でした。", en: "It was a film whose impression lingered long after it ended." }, drill: { jp: "よいんが のこりました。", en: "The impression lingered." }, accept: ["afterglow", "resonance", "what stays with you"], hint: "よいん is literally 'remaining sound' — what is still there after the last note. Japanese criticism prizes it, so it turns up constantly in reviews." },
        { id: "ja-u170l1-koten", type: "vocab", front: "こてん", reading: "koten", meaning: "a classic", example: { jp: "こてんは 古いですが、今 読んでも おもしろいです。", en: "Classics are old, but they're still interesting read today." }, drill: { jp: "こてんを 読みます。", en: "I read the classics." }, accept: ["classical work", "the canon", "a classic work"], hint: "koten — 古 (old) + 典 (a canonical text): a work that has lasted and is still read. こてんおんがく is classical music, so it is not confined to literature." },
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
        { id: "ja-u170l2-shuho", type: "vocab", front: "しゅほう", reading: "shuhō", meaning: "technique (a method used)", example: { jp: "この しゅほうは、百年 前から ほとんど 変わって いません。", en: "This technique has barely changed in a hundred years." }, drill: { jp: "しゅほうを 変えました。", en: "We changed the technique." }, accept: ["method", "approach", "craft"], hint: "shuhō — 手 (hand) + 法 (method): the method a maker's hands use. ぎじゅつ is the ability itself; しゅほう is the particular approach chosen this time." },
        { id: "ja-u170l2-koseiteki", type: "vocab", front: "こうせいてき", reading: "kōseiteki", meaning: "well-composed", example: { jp: "こうせいてきな 写真なので、目が しぜんに 動きます。", en: "The photograph is well composed, so the eye moves naturally." }, drill: { jp: "こうせいてきな 写真です。", en: "It is a well-composed photograph." }, accept: ["structured", "compositional", "well arranged"], hint: "kōseiteki — こうせい (composition) + てき, on the こうせい taught earlier as what a thing is made up of. Here it is where the parts SIT, which is what the eye follows." },
        { id: "ja-u170l2-enshutsu", type: "vocab", front: "えんしゅつ", reading: "enshutsu", meaning: "staging", example: { jp: "話は かんたんですが、えんしゅつが すばらしかったです。", en: "The story is simple, but the staging was superb." }, drill: { jp: "えんしゅつが よかったです。", en: "The staging was good." }, accept: ["direction", "production", "presentation"], hint: "enshutsu — 演 (perform) + 出 (bring out): bringing the performance out of the script. The person who does it is an えんしゅつか, a director; えんぎ is the acting itself." },
        { id: "ja-u170l2-dokuso", type: "vocab", front: "どくそう", reading: "dokusō", meaning: "originality", example: { jp: "どくそうが ある 作品は、まねからは 生まれません。", en: "Work with originality doesn't come out of imitation." }, drill: { jp: "どくそうが あります。", en: "It has originality." }, accept: ["inventiveness", "creativity", "original thinking"], hint: "どくそう and もほう are the pair a review swings between: making something new, or copying. Neither is automatically the compliment." },
        { id: "ja-u170l2-moho", type: "vocab", front: "もほう", reading: "mohō", meaning: "imitation", example: { jp: "はじめは もほうでも、つづければ 自分の ものに なります。", en: "Even if you start by imitating, keep at it and it becomes your own." }, drill: { jp: "もほうを します。", en: "I imitate it." }, accept: ["copying", "emulation", "to imitate"], hint: "mohō — 模 (to imitate) + 倣 (to copy): deliberate copying in order to learn, and neutral in Japanese rather than shameful. まねる is the plain verb; ひょうせつ is the dishonest version." },
        { id: "ja-u170l2-zenei", type: "vocab", front: "ぜんえい", reading: "zenei", meaning: "avant-garde", example: { jp: "ぜんえいの 作品は、はじめは なかなか 理かいされません。", en: "Avant-garde work isn't readily understood at first." }, drill: { jp: "ぜんえいの 作品です。", en: "It is an avant-garde work." }, accept: ["experimental", "cutting-edge", "ahead of its time"], hint: "zen-ei — 前 (front) + 衛 (guard): the advance guard, the same military image as the French. What is ぜんえい one decade becomes しゅりゅう the next, as lesson 4 points out." },
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
        { id: "ja-u170l3-yogo", type: "vocab", front: "ようご", reading: "yōgo", meaning: "a defence (of something)", example: { jp: "その 作品を ようごする 人も、ひはんする 人も います。", en: "There are people who defend that work and people who attack it." }, drill: { jp: "ようごが ひつようです。", en: "A defence is needed." }, accept: ["to stand up for", "advocacy", "support"], hint: "yōgo — 擁 (to embrace) + 護 (to protect): holding something and shielding it — a person, a position, a right. ひはん is its standing opposite throughout this lesson." },
        { id: "ja-u170l3-shingi", type: "vocab", front: "しんぎ", reading: "shingi", meaning: "whether it is true", example: { jp: "その 話の しんぎは、まだ だれにも 分かりません。", en: "Nobody yet knows whether that story is true." }, drill: { jp: "しんぎが 分かりません。", en: "We do not know whether it is true." }, accept: ["truth or falsehood", "authenticity", "true or false"], hint: "shingi — 真 (true) + 偽 (false), the two possibilities named together. So it is not truth itself but the open QUESTION of which it is: しんぎは 不明 means still unverified." },
        { id: "ja-u170l3-konkyonai", type: "vocab", front: "こんきょない", reading: "konkyonai", meaning: "groundless", example: { jp: "こんきょない ひはんには、答える ひつようが ありません。", en: "There's no need to answer groundless criticism." }, drill: { jp: "こんきょない ひはんです。", en: "It is groundless criticism." }, accept: ["unfounded", "baseless", "with no basis"], hint: "konkyonai — こんきょ (grounds) + ない: having no grounds. こんきょ is the evidence a claim stands on, so this is the sharpest thing you can say about an argument short of calling it a lie." },
        { id: "ja-u170l3-gyakkyo", type: "vocab", front: "ぎゃっきょう", reading: "gyakkyō", meaning: "adversity", example: { jp: "ぎゃっきょうの 中で 作られた 作品ほど、強く のこります。", en: "Work made in adversity tends to last the longest." }, drill: { jp: "ぎゃっきょうに 強い 人です。", en: "He is a person who is strong in adversity." }, accept: ["hard circumstances", "against the odds", "adverse circumstances"], hint: "gyakkyō — 逆 (reverse) + 境 (a situation), both taught in the kanji units: circumstances running against you. じゅんきょう is its seldom-used opposite, favourable circumstances." },
        { id: "ja-u170l3-bogai", type: "vocab", front: "ぼうがい", reading: "bōgai", meaning: "obstruction", example: { jp: "自ゆうな ひょうげんへの ぼうがいは、ゆるされません。", en: "Obstruction of free expression can't be permitted." }, drill: { jp: "ぼうがいを うけました。", en: "We met with obstruction." }, accept: ["interference", "hindrance", "to block"], hint: "bōgai — 妨 (hinder) + 害 (harm): getting in the way to somebody's cost. It is deliberate, so a traffic jam is not ぼうがい though a protest blocking the road is." },
        { id: "ja-u170l3-koken", type: "vocab", front: "こうけん", reading: "kōken", meaning: "a contribution", example: { jp: "この 作品は、あとの 世代に 大きく こうけんしました。", en: "This work contributed greatly to later generations." }, drill: { jp: "こうけんが 大きいです。", en: "The contribution is large." }, accept: ["to contribute", "service", "adding to"], hint: "kōken — 貢 (tribute) + 献 (an offering): offering something up for the good of a larger thing. Always positive and always outward-facing — 社会に こうけんする." },
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
        { id: "ja-u170l4-bunkaken", type: "vocab", front: "ぶんかけん", reading: "bunkaken", meaning: "a cultural sphere", example: { jp: "同じ ぶんかけんの 国とは、話が 通じやすいです。", en: "It's easier to understand countries in the same cultural sphere." }, drill: { jp: "ぶんかけんが おなじです。", en: "The cultural sphere is the same." }, accept: ["cultural area", "shared culture zone", "a culture zone"], hint: "bunkaken — ぶんか (culture) + 圏 (a sphere). That 圏 ending draws zones: けいざいけん, しゅとけん. Countries inside one share habits and references, though not necessarily a language." },
        { id: "ja-u170l4-tabunka", type: "vocab", front: "たぶんか", reading: "tabunka", meaning: "multicultural", example: { jp: "たぶんかの 町では、いろいろな ことばが 聞こえます。", en: "In a multicultural town you hear all sorts of languages." }, drill: { jp: "たぶんかの 町です。", en: "It is a multicultural town." }, accept: ["many cultures", "cultural diversity", "of many cultures"], hint: "tabunka — 多 (many) + ぶんか (culture). The 多 prefix pluralises freely: たげんご, たもくてき. It describes a place or a policy, never a person." },
        { id: "ja-u170l4-gaibu", type: "vocab", front: "がいぶ", reading: "gaibu", meaning: "the outside", example: { jp: "がいぶの 人の 意見も、たまには ひつようです。", en: "An outside view is needed now and then too." }, drill: { jp: "がいぶに たのみます。", en: "We will ask an outside party." }, accept: ["external", "outside party", "outside the organisation"], hint: "gaibu — 外 (outside) + 部 (a part): the part that is outside, with ないぶ as its mirror. At work がいぶに だす is the ordinary way to say outsource." },
        { id: "ja-u170l4-shuryu", type: "vocab", front: "しゅりゅう", reading: "shuryū", meaning: "the mainstream", example: { jp: "ぜんえいだった しゅほうが、今では しゅりゅうです。", en: "A technique that was avant-garde is now the mainstream." }, drill: { jp: "しゅりゅうに なりました。", en: "It has become the mainstream." }, accept: ["the main current", "dominant style", "the prevailing current"], hint: "shuryū — 主 (principal) + 流 (a current): the main current of a river, applied to taste and opinion. Its opposite here is ぜんえい, and the unit's point is that the two trade places." },
        { id: "ja-u170l4-uketsugu", type: "vocab", front: "うけつぐ", reading: "uketsugu", meaning: "to take over from", example: { jp: "父の 店を うけついで、十年に なります。", en: "It's been ten years since I took over my father's shop." }, drill: { jp: "うけつぐ 人が いません。", en: "There is nobody to take it over." }, accept: ["to inherit", "to carry on", "to succeed to"], hint: "uketsugu — うける (to receive) + つぐ (to succeed to): receive it and carry it on. The same idea as けいしょう but as a plain verb, which is what you actually say about a family shop." },
        { id: "ja-u170l4-dokutoku", type: "vocab", front: "どくとく", reading: "dokutoku", meaning: "distinctive", example: { jp: "この 作者には どくとくの リズムが あります。", en: "This writer has a distinctive rhythm." }, drill: { jp: "どくとくの あじが あります。", en: "It has a distinctive flavour." }, accept: ["unique", "characteristic", "all its own"], hint: "dokutoku — 独 (alone) + 特 (special): special to this one thing and found nowhere else. どくそう is about inventing something new; どくとく is about being unmistakable." },
      ],
    },
  ],
};
