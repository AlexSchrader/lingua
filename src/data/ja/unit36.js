// Unit 36 — かんじ・ことば (Writing, arts & sound kanji) — A2 / JLPT N4
// Kanji unit grouped by meaning (writing / arts / sound). type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT36 = {
  id: "ja-u36",
  lang: "ja",
  title: "かんじ・ことば",
  order: 36,
  stage: "a2",
  lessons: [
    {
      id: "ja-u36l1",
      unit: 36,
      lesson: 1,
      title: "Writing kanji",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the writing kanji: 字 文 漢 英 図 音 (character, sentence, Han, English, diagram, sound).",
      items: [
        { id: "ja-u36l1-ji", type: "kanji", front: "字", reading: "ji", meaning: "character", example: { jp: "字を書きます。", en: "I write characters." }, accept: ["letter","written character"], hint: "字 = character / letter — 宀 (roof) + 子 (child): a child learning letters under a roof. 漢字 = kanji." },
        { id: "ja-u36l1-bun", type: "kanji", front: "文", reading: "bun", meaning: "sentence", example: { jp: "文を読みます。", en: "I read the sentence." }, accept: ["writing","text"], hint: "文 = sentence / writing — a figure with crossed strokes, like woven text. 文学 = literature." },
        { id: "ja-u36l1-kan", type: "kanji", front: "漢", reading: "kan", meaning: "Han", example: { jp: "漢字を習います。", en: "I learn kanji." }, accept: ["China","Chinese"], hint: "漢 = Han / China — 氵 (water) beside it. 漢字 = 'Han characters' = kanji." },
        { id: "ja-u36l1-ei", type: "kanji", front: "英", reading: "ei", meaning: "English", example: { jp: "英語を話します。", en: "I speak English." }, accept: ["England","British"], hint: "英 = English / England — 艹 (grass) over 央 (center). 英語 = the English language." },
        { id: "ja-u36l1-zu", type: "kanji", front: "図", reading: "zu", meaning: "diagram", example: { jp: "図を見ます。", en: "I look at the diagram." }, accept: ["map","chart"], hint: "図 = diagram / map — a plan boxed inside 囗 (enclosure). 図書館 = library." },
        { id: "ja-u36l1-on", type: "kanji", front: "音", reading: "on", meaning: "sound", example: { jp: "音が聞こえます。", en: "I can hear a sound." }, accept: ["noise"], hint: "音 = sound — 立 (stand) over 日. 音楽 = music (おんがく). Also read おと (a sound)." },
      ],
    },
    {
      id: "ja-u36l2",
      unit: 36,
      lesson: 2,
      title: "Arts & sound kanji",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the arts kanji: 歌 写 映 注 画 紙 (song, copy, project, pour, picture, paper).",
      items: [
        { id: "ja-u36l2-uta", type: "kanji", front: "歌", reading: "uta", meaning: "song", example: { jp: "歌を歌います。", en: "I sing a song." }, accept: ["singing"], hint: "歌 = song — 欠 (open mouth) on the right, a mouth opening wide to sing. 歌手 = singer." },
        { id: "ja-u36l2-sha", type: "kanji", front: "写", reading: "sha", meaning: "copy", example: { jp: "写真を見ます。", en: "I look at the photo." }, accept: ["photograph","photo"], hint: "写 = copy / photograph — 冖 (cover) over 与. 写真 = photograph (しゃしん)." },
        { id: "ja-u36l2-ei", type: "kanji", front: "映", reading: "ei", meaning: "project", example: { jp: "映画を見ます。", en: "I watch a movie." }, accept: ["reflect","screen"], hint: "映 = project / reflect — 日 (sun) + 央 (center): light cast on a screen. 映画 = movie (えいが)." },
        { id: "ja-u36l2-chu", type: "kanji", front: "注", reading: "chū", meaning: "pour", example: { jp: "水を注ぎます。", en: "I pour water." }, accept: ["note","focus"], hint: "注 = pour / note — 氵 (water) + 主 (main). 注意 = caution (ちゅうい), pouring your focus in." },
        { id: "ja-u36l2-ga", type: "kanji", front: "画", reading: "ga", meaning: "picture", example: { jp: "映画を見ます。", en: "I watch a movie." }, accept: ["stroke","drawing"], hint: "画 = picture / stroke (read が in compounds). 映画 = movie, 画家 = painter — 画 rarely stands alone." },
        { id: "ja-u36l2-kami", type: "kanji", front: "紙", reading: "kami", meaning: "paper", example: { jp: "紙に書きます。", en: "I write on paper." }, accept: ["sheet"], hint: "紙 = paper — 糸 (thread) + 氏: paper made from fibers. 手紙 = letter (てがみ)." },
      ],
    },
  ],
};
