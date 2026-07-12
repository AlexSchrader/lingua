// Unit 35 — かんじ・べんきょう (Study & thought kanji) — A2 / JLPT N4
// Kanji unit grouped by meaning (study, questions, thinking, research). type:"kanji" —
// recognition/recall test the meaning, production traces. KanjiVG strokes by glyph.
// lang/unit/lesson stamped in index.js.
export const UNIT35 = {
  id: "ja-u35",
  lang: "ja",
  title: "かんじ・べんきょう",
  order: 35,
  stage: "a2",
  lessons: [
    {
      id: "ja-u35l1",
      unit: 35,
      lesson: 1,
      title: "Study kanji 1",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the question & thought kanji: 問 答 思 意 題 考 (question, answer, think, meaning, topic, consider).",
      items: [
        { id: "ja-u35l1-mon", type: "kanji", front: "問", reading: "mon", meaning: "question", example: { jp: "問題はむずかしいです。", en: "The question is hard." }, accept: ["problem"], hint: "問 = question — 門 (gate) around 口 (mouth): asking at the gate. 問題 = mondai (a problem)." },
        { id: "ja-u35l1-kotae", type: "kanji", front: "答", reading: "kotae", meaning: "answer", example: { jp: "答えを言います。", en: "I say the answer." }, accept: ["reply","response"], hint: "答 = answer — 竹 (bamboo) over 合 (fit): the reply that fits. 答え = kotae." },
        { id: "ja-u35l1-omoi", type: "kanji", front: "思", reading: "omoi", meaning: "thought", example: { jp: "そう思います。", en: "I think so." }, accept: ["think","feeling","idea"], hint: "思 = think / thought — 田 (field/head) over 心 (heart): thoughts from head and heart. 思います (omoimasu) = to think." },
        { id: "ja-u35l1-i", type: "kanji", front: "意", reading: "i", meaning: "meaning", example: { jp: "意味がわかります。", en: "I understand the meaning." }, accept: ["intention","idea"], hint: "意 = meaning / intention — 音 (sound) over 心 (heart): the heart's message. 意味 = imi (meaning)." },
        { id: "ja-u35l1-dai", type: "kanji", front: "題", reading: "dai", meaning: "topic", example: { jp: "宿題が多いです。", en: "There is a lot of homework." }, accept: ["title","subject"], hint: "題 = topic / title. 宿題 = shukudai (homework), 問題 = mondai (a problem)." },
        { id: "ja-u35l1-kangaeru", type: "kanji", front: "考", reading: "kangaeru", meaning: "consider", example: { jp: "よく考えます。", en: "I think it over carefully." }, accept: ["think over","ponder"], hint: "考 = consider / think over. 考えます = kangaemasu — weighing an idea, deeper than 思う." },
      ],
    },
    {
      id: "ja-u35l2",
      unit: 35,
      lesson: 2,
      title: "Study kanji 2",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read the learning & research kanji: 教 習 研 究 試 験 (teach, learn, sharpen, investigate, try, test).",
      items: [
        { id: "ja-u35l2-oshieru", type: "kanji", front: "教", reading: "oshieru", meaning: "teach", example: { jp: "日本語を教えます。", en: "I teach Japanese." }, accept: ["instruct","show"], hint: "教 = teach. 教えます = oshiemasu. Also 教室 = kyōshitsu (classroom)." },
        { id: "ja-u35l2-narau", type: "kanji", front: "習", reading: "narau", meaning: "learn", example: { jp: "かんじを習います。", en: "I learn kanji." }, accept: ["practice","study"], hint: "習 = learn / practice — 羽 (wings) over 白 (self): a bird practicing to fly. 習います = naraimasu." },
        { id: "ja-u35l2-togu", type: "kanji", front: "研", reading: "togu", meaning: "sharpen", example: { jp: "ナイフを研ぎます。", en: "I sharpen the knife." }, accept: ["polish","grind"], hint: "研 = sharpen / polish. It also means 'research' in 研究 = kenkyū — polishing knowledge." },
        { id: "ja-u35l2-kyu", type: "kanji", front: "究", reading: "kyū", meaning: "investigate", example: { jp: "研究をします。", en: "I do research." }, accept: ["research","study"], hint: "究 = investigate deeply — 穴 (cave) over 九 (nine): digging to the very end. 研究 = kenkyū (research)." },
        { id: "ja-u35l2-shi", type: "kanji", front: "試", reading: "shi", meaning: "try", example: { jp: "試験を受けます。", en: "I take the exam." }, accept: ["test","attempt"], hint: "試 = try / test — 言 (words) + 式 (ceremony): a formal trial. 試験 = shiken (an exam)." },
        { id: "ja-u35l2-ken", type: "kanji", front: "験", reading: "ken", meaning: "test", example: { jp: "試験はむずかしいです。", en: "The exam is hard." }, accept: ["exam","verify"], hint: "験 = test / verify. It pairs with 試 to make 試験 = shiken (an exam) and 経験 = keiken (experience)." },
      ],
    },
  ],
};
