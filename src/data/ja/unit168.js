// Unit 168 — れきし・ぶんか (History and culture) — B2 / JLPT N2
// Strand B. The vocabulary for talking about the past as a subject: how time is
// divided into periods, what survives from them, what a people keeps and passes on,
// and how belief and thought are described from the outside.
// Mixed script per the u156 header; all kanji verified by npm run check:glyphs.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT168 = {
  id: "ja-u168",
  lang: "ja",
  title: "れきし・ぶんか",
  order: 168,
  stage: "b2",
  lessons: [
    {
      id: "ja-u168l1",
      unit: 168,
      lesson: 1,
      title: "Dividing up the past",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place something in a period: こだい ちゅうせい きんだい げんだい いせき ゆらい.",
      items: [
        { id: "ja-u168l1-kodai", type: "vocab", front: "こだい", reading: "kodai", meaning: "antiquity", example: { jp: "こだいの 人も、今の 人と 同じ ことで なやんで いました。", en: "People in antiquity worried about the same things we do." }, drill: { jp: "こだいの 町が ありました。", en: "There was an ancient town." }, accept: ["ancient times", "the ancient world", "the ancient era"], hint: "kodai — 古 (old) + 代 (an age): the first of the four eras this lesson lays out — こだい, ちゅうせい, きんだい, げんだい. むかし is vague; こだい is a named period." },
        { id: "ja-u168l1-chusei", type: "vocab", front: "ちゅうせい", reading: "chūsei", meaning: "the middle ages", example: { jp: "この しろは ちゅうせいに 建てられました。", en: "This castle was built in the middle ages." }, drill: { jp: "ちゅうせいの しろです。", en: "It is a medieval castle." }, accept: ["medieval period", "the middle ages", "medieval times"], hint: "chūsei — 中 (middle) + 世 (an age): the age in between こだい and きんだい. In Japanese history that means the samurai centuries, not quite the European span." },
        { id: "ja-u168l1-kindai", type: "vocab", front: "きんだい", reading: "kindai", meaning: "the modern era", example: { jp: "きんだいに なって、学校が 国じゅうに できました。", en: "In the modern era, schools appeared throughout the country." }, drill: { jp: "きんだいに 始まりました。", en: "It began in the modern era." }, accept: ["modern times", "modernity", "the modern age"], hint: "きんだい is the era that began with industry and the nation-state; げんだい is now, the era you are living in. History books use both, and never as synonyms." },
        { id: "ja-u168l1-gendai", type: "vocab", front: "げんだい", reading: "gendai", meaning: "the present age", example: { jp: "げんだいの 生活は べんりですが、いそがしすぎます。", en: "Life in the present age is convenient but far too busy." }, drill: { jp: "げんだいの 生活は いそがしいです。", en: "Life in the present age is busy." }, accept: ["contemporary", "today's world", "the present day"], hint: "gendai — 現 (present) + 代 (an age): the age we are in now. きんだい ended and げんだい began, and by Japanese convention that break sits around the second world war." },
        { id: "ja-u168l1-iseki", type: "vocab", front: "いせき", reading: "iseki", meaning: "ruins", example: { jp: "畑の 下から 古い いせきが 出て きました。", en: "Old ruins turned up beneath the field." }, drill: { jp: "いせきが みつかりました。", en: "Ruins were found." }, accept: ["archaeological site", "remains", "the remains of a site"], hint: "iseki — 遺 (left behind) + 跡 (a trace): traces left behind. What survives in the GROUND, so a castle still standing is not an いせき, though its buried foundations are." },
        { id: "ja-u168l1-yurai", type: "vocab", front: "ゆらい", reading: "yurai", meaning: "origin (how something came about)", example: { jp: "この まつりの ゆらいは、千年 前に あります。", en: "This festival's origin lies a thousand years back." }, drill: { jp: "ゆらいが ふるいです。", en: "The origin is old." }, accept: ["derivation", "how it came about", "provenance"], hint: "yurai — 由 (a reason) + 来 (to come): where a thing came from. It explains a NAME or a custom, never a person's birthplace, which is しゅっしん." },
      ],
    },
    {
      id: "ja-u168l2",
      unit: 168,
      lesson: 2,
      title: "What gets passed on",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about inheritance and custom: けいしょう ふうしゅう ふっこう こだわり きょうゆう すたれる.",
      items: [
        { id: "ja-u168l2-keisho", type: "vocab", front: "けいしょう", reading: "keishō", meaning: "handing down", example: { jp: "この わざを けいしょうする 人が、もう 少ししか いません。", en: "There are only a few people left to carry this craft on." }, drill: { jp: "けいしょうが むずかしいです。", en: "Handing it down is difficult." }, accept: ["succession", "inheriting a tradition", "carrying it on"], hint: "keishō — 継 (continue) + 承 (receive): receiving something and continuing it. Crafts, titles, businesses. 相続 is the legal inheritance of property; けいしょう is of a practice." },
        { id: "ja-u168l2-fushu", type: "vocab", front: "ふうしゅう", reading: "fūshū", meaning: "a custom", example: { jp: "その ふうしゅうは、この 地いきにしか のこって いません。", en: "That custom survives only in this village." }, drill: { jp: "ふうしゅうが のこって います。", en: "The custom survives." }, accept: ["usage", "folk practice", "convention"], hint: "fūshū — 風 (manner) + 習 (habit): the prevailing habit of a place. しゅうかん is one person's habit; a ふうしゅう belongs to a community and nobody alive chose it." },
        { id: "ja-u168l2-fukko", type: "vocab", front: "ふっこう", reading: "fukkō", meaning: "revival", example: { jp: "町の ふっこうには、十年 かかりました。", en: "The town's revival took ten years." }, drill: { jp: "ふっこうに 時間が かかります。", en: "The revival takes time." }, accept: ["reconstruction", "recovery", "rebuilding"], hint: "fukkō — 復 (again) + 興 (rise): rising again after a disaster or a decline. It is the word on every sign after an earthquake, and it means rebuilding a community, not only buildings." },
        { id: "ja-u168l2-kodawari", type: "vocab", front: "こだわり", reading: "kodawari", meaning: "an insistence on detail", example: { jp: "その 店の こだわりは、水の えらび方に あります。", en: "That shop's particular care shows in how it chooses its water." }, drill: { jp: "こだわりが あります。", en: "There is a particular care in it." }, accept: ["particular care", "fussiness", "commitment to detail"], hint: "こだわり is the good kind of stubbornness — a craftsman's refusal to cut a corner. As a verb こだわる can still be negative: fixating." },
        { id: "ja-u168l2-kyoyu", type: "vocab", front: "きょうゆう", reading: "kyōyū", meaning: "holding in common", example: { jp: "この 土地は 町の みんなで きょうゆうして います。", en: "This land is held in common by the whole village." }, drill: { jp: "きょうゆうの 土地です。", en: "It is commonly held land." }, accept: ["shared ownership", "to share", "joint holding"], hint: "kyōyū — 共 (together) + 有 (have): owning together, with the ownership joint rather than lent. Files and data are also きょうゆうする, which is the sense you will meet at work." },
        { id: "ja-u168l2-sutareru", type: "vocab", front: "すたれる", reading: "sutareru", meaning: "to fall out of use", example: { jp: "べんりな ものが 出ると、古い やり方は すたれます。", en: "When something convenient appears, the old way falls out of use." }, drill: { jp: "ふるい やりかたが すたれる。", en: "The old method falls out of use." }, accept: ["to die out", "to become obsolete", "to go out of fashion"], hint: "sutareru — related to すてる, to throw away, but nobody does the throwing: things すたれる by themselves as fashion and convenience move on. Only of practices and styles, never of objects." },
      ],
    },
    {
      id: "ja-u168l3",
      unit: 168,
      lesson: 3,
      title: "Belief and thought",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe belief systems from the outside: しそう しゅうきょう しんこう ぎしき せいいき よそもの.",
      items: [
        { id: "ja-u168l3-shiso", type: "vocab", front: "しそう", reading: "shisō", meaning: "a body of thought", example: { jp: "その しそうは、あとの 時代に 大きな えいきょうを あたえました。", en: "That body of thought had a great influence on later ages." }, drill: { jp: "しそうが つづいて います。", en: "The body of thought continues." }, accept: ["ideology", "philosophy", "thinking"], hint: "shisō — 思 (think) + 想 (a conception): a worked-out system of ideas, not a passing one. かんがえ is what you happen to think; a しそう is a tradition you can name and study." },
        { id: "ja-u168l3-shukyo", type: "vocab", front: "しゅうきょう", reading: "shūkyō", meaning: "religion", example: { jp: "国に よって、しゅうきょうと せいじの きょりは ちがいます。", en: "The distance between religion and politics differs by country." }, drill: { jp: "しゅうきょうに ついて 話します。", en: "We talk about religion." }, accept: ["faith", "religious tradition", "an organised religion"], hint: "shūkyō — 宗 (a sect) + 教 (teaching): an organised body of teaching. しんこう is the believing; しゅうきょう is the institution that carries it." },
        { id: "ja-u168l3-shinko", type: "vocab", front: "しんこう", reading: "shinkō", meaning: "religious belief", example: { jp: "山への しんこうは、この 地いきで 今も 生きて います。", en: "Belief in the mountain is still alive in this region." }, drill: { jp: "しんこうが つづいて います。", en: "The religious belief continues." }, accept: ["devotion", "faith in something", "belief"], hint: "しゅうきょう is the institution; しんこう is what a person actually holds. Someone can have しんこう with no しゅうきょう." },
        { id: "ja-u168l3-gishiki", type: "vocab", front: "ぎしき", reading: "gishiki", meaning: "a ceremony", example: { jp: "その ぎしきは 年に 一度だけ 行われます。", en: "That ceremony is held only once a year." }, drill: { jp: "ぎしきが 行われます。", en: "The ceremony is held." }, accept: ["rite", "ritual", "formal observance"], hint: "gishiki — 儀 (ceremony) + 式 (a form): an event run to a fixed form. けっこんしき and そつぎょうしき both carry that 式. The formality is the point, not the scale." },
        { id: "ja-u168l3-seiiki", type: "vocab", front: "せいいき", reading: "seiiki", meaning: "sacred ground", example: { jp: "ここは せいいきですから、しずかに して ください。", en: "This is sacred ground, so please be quiet." }, drill: { jp: "せいいきに 入れません。", en: "You cannot enter the sacred ground." }, accept: ["sanctuary", "holy place", "a sacred area"], hint: "seiiki — 聖 (holy) + 域 (a zone): a bounded area set apart. The boundary is the whole point — there is an inside and an outside, and the rules change at the line." },
        { id: "ja-u168l3-yosomono", type: "vocab", front: "よそもの", reading: "yosomono", meaning: "an outsider", example: { jp: "よそものの 目から 見ると、その ふうしゅうは ふしぎです。", en: "Seen through an outsider's eyes, that custom is strange." }, drill: { jp: "よそものの 目で 見ます。", en: "I look at it with an outsider's eyes." }, accept: ["stranger", "incomer", "not from here"], hint: "よそもの is specifically someone from OUTSIDE this place — a village word, and not a warm one." },
      ],
    },
    {
      id: "ja-u168l4",
      unit: 168,
      lesson: 4,
      title: "Writing history",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how the past is recorded and argued over: しりょうかん かんてい つたえ ぎゃくてん かいしゃく ものがたり.",
      items: [
        { id: "ja-u168l4-shiryokan", type: "vocab", front: "しりょうかん", reading: "shiryōkan", meaning: "an archive", example: { jp: "町の しりょうかんに、百年 前の 新聞が あります。", en: "The town archive holds newspapers from a hundred years ago." }, drill: { jp: "しりょうかんで しらべました。", en: "I looked it up at the archive." }, accept: ["records office", "reference library", "an archive building"], hint: "shiryōkan — しりょう (materials) + 館 (a hall). That 館 ending names public buildings — としょかん, はくぶつかん, えいがかん. An archive keeps originals where a library keeps copies." },
        { id: "ja-u168l4-kantei", type: "vocab", front: "かんてい", reading: "kantei", meaning: "expert appraisal", example: { jp: "かんていの けっか、その 手紙は にせものだと 分かりました。", en: "Expert appraisal showed that the letter was a fake." }, drill: { jp: "かんていを たのみました。", en: "We asked for an appraisal." }, accept: ["authentication", "expert judgement", "assessment"], hint: "かんてい is a specialist deciding whether a thing is genuine — a painting, a signature, a document. It is a verdict on an OBJECT, not on an argument." },
        { id: "ja-u168l4-tsutae", type: "vocab", front: "つたえ", reading: "tsutae", meaning: "a handed-down account", example: { jp: "この 地いきの つたえでは、湖の 底に 町が あるそうです。", en: "According to this village's lore, there's a town at the bottom of the lake." }, drill: { jp: "つたえが のこって います。", en: "A handed-down account remains." }, accept: ["legend", "oral tradition", "lore"], hint: "tsutae — the noun of 伝える, to pass on: an account carried by word of mouth. It makes no claim to be true, and that is exactly how it differs from a きろく, a record." },
        { id: "ja-u168l4-gyakuten", type: "vocab", front: "ぎゃくてん", reading: "gyakuten", meaning: "a reversal", example: { jp: "新しい しりょうで、これまでの 考えが ぎゃくてんしました。", en: "New materials reversed what had been believed until then." }, drill: { jp: "ぎゃくてんが おきました。", en: "A reversal happened." }, accept: ["turnaround", "overturning", "flip"], hint: "gyakuten — 逆 (the reverse) + 転 (to turn): the situation turns over. The sports word for coming from behind, and by extension any conclusion that flips. Same 逆 as in the kanji unit." },
        { id: "ja-u168l4-kaishaku", type: "vocab", front: "かいしゃく", reading: "kaishaku", meaning: "interpretation", example: { jp: "同じ しりょうでも、かいしゃくは 人に よって ちがいます。", en: "Even with the same materials, interpretation differs from person to person." }, drill: { jp: "かいしゃくが ちがいます。", en: "The interpretation differs." }, accept: ["reading of it", "to construe", "a reading of it"], hint: "kaishaku — 解 (undo) + 釈 (explain): undoing a text in order to explain it. It is always ONE reading among possible ones, so かいしゃくが ちがう is a disagreement and not an error." },
        { id: "ja-u168l4-monogatari", type: "vocab", front: "ものがたり", reading: "monogatari", meaning: "a narrative", example: { jp: "れきしを 一つの ものがたりに すると、こぼれる ことも 多いです。", en: "Turn history into a single narrative and much gets left out." }, drill: { jp: "ものがたりを 作ります。", en: "We make a narrative out of it." }, accept: ["tale", "story", "account"], hint: "monogatari — 物 (thing) + 語り (telling): the telling of things. A long, shaped narrative — the Tale of Genji is 源氏物語 — so calling history a ものがたり implies somebody shaped it." },
      ],
    },
  ],
};
