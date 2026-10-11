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
        { id: "ja-u57l1-keshigomu", type: "vocab", front: "けしゴム", reading: "keshigomu", meaning: "eraser", example: { jp: "けしゴムをかします。", en: "I'll lend you an eraser." }, drill: { jp: "けしゴムはちいさいです。", en: "The eraser is small." }, accept: ["rubber", "pencil eraser", "rubber eraser"], hint: "ke-shi-GO-mu — four beats, and look at the spelling: けし is hiragana from けす, to erase, while ゴム is katakana from Dutch gom. ⚠️ One word in two scripts — that mix marks a half-borrowed word." },
        { id: "ja-u57l1-kyokasho", type: "vocab", front: "きょうかしょ", reading: "kyōkasho", meaning: "textbook", example: { jp: "きょうかしょをよみます。", en: "I read the textbook." }, drill: { jp: "きょうかしょをかばんにいれます。", en: "I put the textbook in my bag." }, accept: ["schoolbook", "course book", "the textbook"], hint: "KYŌ-ka-sho — きょう is the yōon kyo held long and しょ is sho: three beats. 教科 (subject) + 書 (book). ⚠️ A set school textbook, not any book — that is ほん." },
        { id: "ja-u57l1-jisho", type: "vocab", front: "じしょ", reading: "jisho", meaning: "dictionary", example: { jp: "じしょをつかいます。", en: "I use a dictionary." }, drill: { jp: "じしょをかいます。", en: "I buy a dictionary." }, accept: ["dictionaries", "a dictionary", "word book"], hint: "JI-sho — two beats, しょ is the yōon sho. 辞 (word) + 書 (book), the same 書 as きょうかしょ above. ⚠️ Two beats only — never ji-shi-o." },
        { id: "ja-u57l1-tsukue", type: "vocab", front: "つくえ", reading: "tsukue", meaning: "desk", example: { jp: "つくえのうえにほんがあります。", en: "There is a book on the desk." }, drill: { jp: "つくえはおおきいです。", en: "The desk is big." }, accept: ["desks", "a desk", "writing desk"], hint: "tsu-KU-e — three beats, つ is tsu and the え gets its own beat. ⚠️ A desk you work at. A dining or side table is テーブル, a loanword in katakana." },
        { id: "ja-u57l1-isu", type: "vocab", front: "いす", reading: "isu", meaning: "chair", example: { jp: "いすはあたらしいです。", en: "The chair is new." }, drill: { jp: "いすのうえにかばんがあります。", en: "There is a bag on the chair." }, accept: ["seat", "chairs", "a chair", "stool"], hint: "I-su — two beats, a clean s. ⚠️ Any chair with legs. It pairs with つくえ above, and the two turn up together in almost every classroom sentence." },
        { id: "ja-u57l1-choku", type: "vocab", front: "チョーク", reading: "chōku", meaning: "chalk", example: { jp: "チョークでかきます。", en: "I write with chalk." }, drill: { jp: "チョークはしろいです。", en: "The chalk is white." }, accept: ["blackboard chalk", "a piece of chalk", "white chalk"], hint: "CHŌ-ku — katakana with ー, so the first beat is held long: choh-ku, two beats. Borrowed from English chalk. ⚠️ What you write WITH takes で: チョークでかきます." },
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
        { id: "ja-u57l2-mondai", type: "vocab", front: "もんだい", reading: "mondai", meaning: "problem", example: { jp: "このもんだいはむずかしいです。", en: "This problem is difficult." }, drill: { jp: "もんだいがあります。", en: "There is a problem." }, accept: ["question", "issue", "a problem", "exercise"], hint: "mon-DAI — two heavy beats, the ん held, だい a diphthong. 問 (ask) + 題 (topic). ⚠️ A problem to SOLVE — a maths question, or trouble. A question you ASK is しつもん, in lesson 4." },
        { id: "ja-u57l2-kotae", type: "vocab", front: "こたえ", reading: "kotae", meaning: "answer (the reply given)", example: { jp: "こたえをかきます。", en: "I write the answer." }, drill: { jp: "こたえはかんたんです。", en: "The answer is simple." }, accept: ["reply", "answers", "the answer", "response"], hint: "ko-TA-e — three beats, the え its own beat. ⚠️ The answer GIVEN, so it pairs with もんだい above. Its verb こたえます comes from the same root." },
        { id: "ja-u57l2-imi", type: "vocab", front: "いみ", reading: "imi", meaning: "meaning (the sense of a word)", example: { jp: "いみがわかります。", en: "I understand the meaning." }, drill: { jp: "いみをききます。", en: "I ask what it means." }, accept: ["sense", "the meaning", "definition"], hint: "I-mi — two short beats. 意 (intention) + 味 (taste): the taste of a word. ⚠️ With わかります it takes が — いみがわかります, never いみをわかります." },
        { id: "ja-u57l2-tango", type: "vocab", front: "たんご", reading: "tango", meaning: "vocabulary word", example: { jp: "たんごをおぼえます。", en: "I memorize the word." }, drill: { jp: "たんごはむずかしいです。", en: "The vocabulary is difficult." }, accept: ["word", "vocabulary", "vocab item", "a word"], hint: "tan-GO — two beats, the ん held, hard g. 単 (single) + 語 (word). ⚠️ A word as a study ITEM on a list. ことば, next, is a word as something people say." },
        { id: "ja-u57l2-kotoba", type: "vocab", front: "ことば", reading: "kotoba", meaning: "word", example: { jp: "あたらしいことばをならいます。", en: "I learn a new word." }, drill: { jp: "ことばのいみをききます。", en: "I ask the meaning of the word." }, accept: ["language", "phrase", "words", "speech"], hint: "ko-to-BA — three beats. ⚠️ Wider than たんご above: ことば is language itself, what someone said, even a whole phrase. たんご is the entry on the list." },
        { id: "ja-u57l2-renshu", type: "vocab", front: "れんしゅう", reading: "renshū", meaning: "practice", example: { jp: "まいにちれんしゅうします。", en: "I practice every day." }, drill: { jp: "れんしゅうをまいあさします。", en: "I practise every morning." }, accept: ["exercise", "drill", "training", "rehearsal"], hint: "ren-SHŪ — two beats, tapped r, しゅう held long. 練 (train) + 習 (learn). ⚠️ Add します and the noun becomes the verb: れんしゅうします." },
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
        { id: "ja-u57l3-kanji", type: "vocab", front: "かんじ", reading: "kanji", meaning: "kanji", example: { jp: "かんじをかきます。", en: "I write kanji." }, drill: { jp: "かんじをおぼえます。", en: "I memorise the kanji." }, accept: ["chinese characters", "chinese character", "han characters"], hint: "KAN-ji — two beats, the ん held. 漢 (Han China) + 字 (character). ⚠️ Unlike ひらがな and カタカナ below, each kanji carries MEANING and not just a sound." },
        { id: "ja-u57l3-hiragana", type: "vocab", front: "ひらがな", reading: "hiragana", meaning: "hiragana", example: { jp: "ひらがなをよみます。", en: "I read hiragana." }, drill: { jp: "ひらがなはやさしいです。", en: "Hiragana is easy." }, accept: ["the hiragana syllabary", "japanese cursive script", "the cursive syllabary"], hint: "hi-ra-GA-na — four beats, tapped r, hard g. 平 (flat, ordinary) + 仮名 (borrowed name). ⚠️ The rounded everyday script — the one you have been reading all along." },
        { id: "ja-u57l3-katakana", type: "vocab", front: "カタカナ", reading: "katakana", meaning: "katakana", example: { jp: "カタカナはむずかしいです。", en: "Katakana is difficult." }, drill: { jp: "カタカナでなまえをかきます。", en: "I write my name in katakana." }, accept: ["the katakana syllabary", "the angular syllabary", "japanese loanword script"], hint: "ka-ta-KA-na — four beats. 片 (partial) + the same 仮名 as ひらがな. ⚠️ The angular script, used for loanwords — which is why チョーク and テーブル are written in it." },
        { id: "ja-u57l3-sugaku", type: "vocab", front: "すうがく", reading: "sūgaku", meaning: "math", example: { jp: "すうがくがすきです。", en: "I like math." }, drill: { jp: "すうがくのじゅぎょうはながいです。", en: "The maths lesson is long." }, accept: ["mathematics", "maths", "arithmetic", "the maths class"], hint: "SŪ-ga-ku — the すう is a long u, so three beats. 数 (number) + 学 (study). ⚠️ That same 学 sits in がっこう, school, and がくせい, student." },
        { id: "ja-u57l3-rika", type: "vocab", front: "りか", reading: "rika", meaning: "science (the school subject)", example: { jp: "りかのじゅぎょうです。", en: "It's a science class." }, drill: { jp: "りかをべんきょうします。", en: "I study science." }, accept: ["science class", "the science subject", "natural science"], hint: "RI-ka — two beats, tapped r. 理 (principle) + 科 (subject). ⚠️ Specifically the SCHOOL subject, and that 科 is the same one inside きょうかしょ." },
        { id: "ja-u57l3-bunpo", type: "vocab", front: "ぶんぽう", reading: "bunpō", meaning: "grammar", example: { jp: "ぶんぽうをべんきょうします。", en: "I study grammar." }, drill: { jp: "ぶんぽうのほんをかいます。", en: "I buy a grammar book." }, accept: ["the grammar", "sentence structure", "syntax"], hint: "bun-PŌ — two beats, the ん held, ぽう a long o. 文 (sentence) + 法 (law): the law of sentences. ⚠️ Hold the long o — never ぶんぽ." },
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
        { id: "ja-u57l4-natsuyasumi", type: "vocab", front: "なつやすみ", reading: "natsuyasumi", meaning: "summer vacation", example: { jp: "なつやすみはたのしいです。", en: "Summer vacation is fun." }, drill: { jp: "なつやすみにうみにいきます。", en: "I go to the sea in the summer holidays." }, accept: ["summer break", "summer holiday", "the summer holidays", "summer recess"], hint: "na-tsu-ya-SU-mi — five beats, つ is tsu. なつ, summer, plus やすみ, a rest. ⚠️ はるやすみ and ふゆやすみ are built the same way, so one pattern gives you all three." },
        { id: "ja-u57l4-hanashi", type: "vocab", front: "はなし", reading: "hanashi", meaning: "talk", example: { jp: "せんせいのはなしをききます。", en: "I listen to the teacher's talk." }, drill: { jp: "はなしがおもしろいです。", en: "The story is interesting." }, accept: ["story", "conversation", "a talk", "what someone said"], hint: "ha-NA-shi — three beats. From はなします, to speak. ⚠️ It covers a talk, a story and the point someone is making. Not はな, a flower, and not はな, a nose." },
        { id: "ja-u57l4-hasami", type: "vocab", front: "はさみ", reading: "hasami", meaning: "scissors", example: { jp: "はさみをつかいます。", en: "I use scissors." }, drill: { jp: "はさみでかみをきります。", en: "I cut the paper with scissors." }, accept: ["a pair of scissors", "shears", "the scissors"], hint: "ha-SA-mi — three beats. From はさむ, to pinch something between two things — which is exactly what the blades do. ⚠️ The tool you cut WITH takes で." },
        { id: "ja-u57l4-nori", type: "vocab", front: "のり", reading: "nori", meaning: "glue", example: { jp: "のりをつかいます。", en: "I use glue." }, drill: { jp: "のりでかみをはります。", en: "I stick the paper down with glue." }, accept: ["paste", "adhesive", "glue stick"], hint: "NO-ri — two beats, tapped r. ⚠️ Exactly the same sound as のり, the sheet of seaweed on a rice ball — two separate words that share it, because both started as a paste." },
        { id: "ja-u57l4-shitsumon", type: "vocab", front: "しつもん", reading: "shitsumon", meaning: "question (a query asked)", example: { jp: "せんせいにしつもんします。", en: "I ask the teacher a question." }, drill: { jp: "しつもんがあります。", en: "I have a question." }, accept: ["query", "a question", "asking a question", "enquiry"], hint: "shi-tsu-MON — three beats, つ is tsu, the ん held. 質 (quality) + 問 (ask), the same 問 as もんだい in lesson 2. ⚠️ This is the question you ASK; もんだい is the problem you SOLVE." },
        { id: "ja-u57l4-hatsuon", type: "vocab", front: "はつおん", reading: "hatsuon", meaning: "pronunciation", example: { jp: "はつおんをれんしゅうします。", en: "I practice pronunciation." }, drill: { jp: "はつおんがむずかしいです。", en: "The pronunciation is difficult." }, accept: ["the pronunciation", "how it is pronounced", "articulation"], hint: "ha-tsu-ON — three beats, つ is tsu, then おん on its own beat. 発 (emit) + 音 (sound): sending the sound out. ⚠️ Four kana, three beats — never hat-son." },
      ],
    },
  ],
};
