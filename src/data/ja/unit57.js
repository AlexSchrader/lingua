// Unit 57 — がっこう・べんきょう ("School & Study") — A1 thematic (JLPT N5)
// N5 school, study & classroom vocabulary the learner hasn't met yet: classroom
// objects (けしゴム, つくえ, いす), study nouns (もんだい, こたえ, いみ, たんご),
// writing systems & subjects (かんじ, ひらがな, カタカナ, すうがく), and school life
// (なつやすみ, しつもん, はつおん). Every example reuses only vocab already
// introduced in earlier units + within-unit items taught in the same/earlier lesson.
export const UNIT57 = {
  id: "ja-u57",
  lang: "ja",
  title: "がっこう・べんきょう",
  order: 57,
  stage: "a1",
  lessons: [
    // Lesson 1: classroom objects
    {
      id: "ja-u57l1",
      unit: 57,
      lesson: 1,
      title: "Classroom objects",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name classroom objects: けしゴム きょうかしょ じしょ つくえ いす チョーク.",
      items: [
        { id: "ja-u57l1-keshigomu", type: "vocab", front: "けしゴム", reading: "keshigomu", meaning: "eraser", example: { jp: "けしゴムをかします。", en: "I'll lend you an eraser." }, accept: ["rubber"] },
        { id: "ja-u57l1-kyokasho", type: "vocab", front: "きょうかしょ", reading: "kyōkasho", meaning: "textbook", example: { jp: "きょうかしょをよみます。", en: "I read the textbook." }, accept: ["schoolbook"] },
        { id: "ja-u57l1-jisho", type: "vocab", front: "じしょ", reading: "jisho", meaning: "dictionary", example: { jp: "じしょをつかいます。", en: "I use a dictionary." }, accept: ["dictionaries"] },
        { id: "ja-u57l1-tsukue", type: "vocab", front: "つくえ", reading: "tsukue", meaning: "desk", example: { jp: "つくえのうえにほんがあります。", en: "There is a book on the desk." }, accept: ["desks"] },
        { id: "ja-u57l1-isu", type: "vocab", front: "いす", reading: "isu", meaning: "chair", example: { jp: "いすはあたらしいです。", en: "The chair is new." }, accept: ["seat", "chairs"] },
        { id: "ja-u57l1-choku", type: "vocab", front: "チョーク", reading: "chōku", meaning: "chalk", example: { jp: "チョークでかきます。", en: "I write with chalk." }, accept: [] },
      ],
    },
    // Lesson 2: studying
    {
      id: "ja-u57l2",
      unit: 57,
      lesson: 2,
      title: "Studying",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about study: もんだい (problem), こたえ (answer), いみ (meaning), たんご, ことば, れんしゅう.",
      items: [
        { id: "ja-u57l2-mondai", type: "vocab", front: "もんだい", reading: "mondai", meaning: "problem", example: { jp: "このもんだいはむずかしいです。", en: "This problem is difficult." }, accept: ["question", "issue"] },
        { id: "ja-u57l2-kotae", type: "vocab", front: "こたえ", reading: "kotae", meaning: "answer", example: { jp: "こたえをかきます。", en: "I write the answer." }, accept: ["reply", "answers"] },
        { id: "ja-u57l2-imi", type: "vocab", front: "いみ", reading: "imi", meaning: "meaning", example: { jp: "いみがわかります。", en: "I understand the meaning." }, accept: ["sense"] },
        { id: "ja-u57l2-tango", type: "vocab", front: "たんご", reading: "tango", meaning: "vocabulary word", example: { jp: "たんごをおぼえます。", en: "I memorize the word." }, accept: ["word", "vocabulary"] },
        { id: "ja-u57l2-kotoba", type: "vocab", front: "ことば", reading: "kotoba", meaning: "word", example: { jp: "あたらしいことばをならいます。", en: "I learn a new word." }, accept: ["language", "phrase"] },
        { id: "ja-u57l2-renshu", type: "vocab", front: "れんしゅう", reading: "renshū", meaning: "practice", example: { jp: "まいにちれんしゅうします。", en: "I practice every day." }, accept: ["exercise", "drill"] },
      ],
    },
    // Lesson 3: subjects & scripts
    {
      id: "ja-u57l3",
      unit: 57,
      lesson: 3,
      title: "Subjects & scripts",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name writing systems and subjects: かんじ ひらがな カタカナ すうがく りか ぶんぽう.",
      items: [
        { id: "ja-u57l3-kanji", type: "vocab", front: "かんじ", reading: "kanji", meaning: "kanji", example: { jp: "かんじをかきます。", en: "I write kanji." }, accept: ["chinese characters"] },
        { id: "ja-u57l3-hiragana", type: "vocab", front: "ひらがな", reading: "hiragana", meaning: "hiragana", example: { jp: "ひらがなをよみます。", en: "I read hiragana." }, accept: [] },
        { id: "ja-u57l3-katakana", type: "vocab", front: "カタカナ", reading: "katakana", meaning: "katakana", example: { jp: "カタカナはむずかしいです。", en: "Katakana is difficult." }, accept: [] },
        { id: "ja-u57l3-sugaku", type: "vocab", front: "すうがく", reading: "sūgaku", meaning: "math", example: { jp: "すうがくがすきです。", en: "I like math." }, accept: ["mathematics", "maths"] },
        { id: "ja-u57l3-rika", type: "vocab", front: "りか", reading: "rika", meaning: "science", example: { jp: "りかのじゅぎょうです。", en: "It's a science class." }, accept: ["science class"] },
        { id: "ja-u57l3-bunpo", type: "vocab", front: "ぶんぽう", reading: "bunpō", meaning: "grammar", example: { jp: "ぶんぽうをべんきょうします。", en: "I study grammar." }, accept: [] },
      ],
    },
    // Lesson 4: school life
    {
      id: "ja-u57l4",
      unit: 57,
      lesson: 4,
      title: "School life",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about school life: なつやすみ はなし はさみ のり しつもん はつおん.",
      items: [
        { id: "ja-u57l4-natsuyasumi", type: "vocab", front: "なつやすみ", reading: "natsuyasumi", meaning: "summer vacation", example: { jp: "なつやすみはたのしいです。", en: "Summer vacation is fun." }, accept: ["summer break", "summer holiday"] },
        { id: "ja-u57l4-hanashi", type: "vocab", front: "はなし", reading: "hanashi", meaning: "talk", example: { jp: "せんせいのはなしをききます。", en: "I listen to the teacher's talk." }, accept: ["story", "conversation"] },
        { id: "ja-u57l4-hasami", type: "vocab", front: "はさみ", reading: "hasami", meaning: "scissors", example: { jp: "はさみをつかいます。", en: "I use scissors." }, accept: [] },
        { id: "ja-u57l4-nori", type: "vocab", front: "のり", reading: "nori", meaning: "glue", example: { jp: "のりをつかいます。", en: "I use glue." }, accept: ["paste"] },
        { id: "ja-u57l4-shitsumon", type: "vocab", front: "しつもん", reading: "shitsumon", meaning: "question", example: { jp: "せんせいにしつもんします。", en: "I ask the teacher a question." }, accept: ["query"] },
        { id: "ja-u57l4-hatsuon", type: "vocab", front: "はつおん", reading: "hatsuon", meaning: "pronunciation", example: { jp: "はつおんをれんしゅうします。", en: "I practice pronunciation." }, accept: [] },
      ],
    },
  ],
};
