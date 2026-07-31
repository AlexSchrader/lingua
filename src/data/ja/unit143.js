// Unit 143 — ごい・N3・25 ("N3 vocab 25") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (kawa 河/皮/革, kankaku 感覚/間隔, kanjō 勘定/感情)
// disambiguated via hints.
export const UNIT143 = {
  id: "ja-u143", lang: "ja", title: "ごい・N3・25", order: 143, stage: "b1",
  lessons: [
    {
      id: "ja-u143l1", unit: 143, lesson: 1, title: "N3 vocab 25·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 河 (river), 皮 (skin), 革 (leather), 可愛そう (poor), 可愛らしい (lovely), 乾かす (to dry).",
      items: [
        { id: "ja-u143l1-kawa", type: "vocab", front: "河", reading: "kawa", meaning: "river", example: { jp: "河のそばでしゃしんをとりました。", en: "I took a photo by the river." }, accept: ["stream"], hint: "河 (かわ) = a large river. Same reading as 皮 (skin) and 革 (leather)." },
        { id: "ja-u143l1-kawa2", type: "vocab", front: "皮", reading: "kawa", meaning: "skin", example: { jp: "りんごの皮をむいてたべます。", en: "I peel the apple's skin and eat it." }, accept: ["hide", "leather", "peel"], hint: "皮 (かわ) = skin / peel of a fruit or animal." },
        { id: "ja-u143l1-kawa3", type: "vocab", front: "革", reading: "kawa", meaning: "leather", example: { jp: "この革のかばんはたかいです。", en: "This leather bag is expensive." }, accept: ["hide"], hint: "革 (かわ) = leather (processed hide). Same reading as 皮 (raw skin)." },
        { id: "ja-u143l1-kawaiso", type: "vocab", front: "可愛そう", reading: "kawaisō", meaning: "poor", example: { jp: "あめにぬれたねこが可愛そうです。", en: "The cat, wet from the rain, looks pitiful." }, accept: ["pitiable", "pathetic"], hint: "可愛そう (かわいそう) = poor / pitiable — feeling sorry for someone." },
        { id: "ja-u143l1-kawairashii", type: "vocab", front: "可愛らしい", reading: "kawairashii", meaning: "lovely", example: { jp: "可愛らしいあかちゃんがわらっています。", en: "A lovely baby is laughing." }, accept: ["sweet", "adorable"], hint: "可愛らしい (かわいらしい) = lovely / adorable — an い-adjective." },
        { id: "ja-u143l1-kawakasu", type: "vocab", front: "乾かす", reading: "kawakasu", meaning: "to dry", example: { jp: "せんたくものをそとで乾かします。", en: "I dry the laundry outside." }, accept: ["dry", "to dry out"], hint: "乾かす (かわかす) = to dry something (transitive)." },
      ],
    },
    {
      id: "ja-u143l2", unit: 143, lesson: 2, title: "N3 vocab 25·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 渇く (to be thirsty), 代る (to substitute), 缶 (can), 勘 (perception), 考え (thought), 感覚 (sense).",
      items: [
        { id: "ja-u143l2-kawaku", type: "vocab", front: "渇く", reading: "kawaku", meaning: "to be thirsty", example: { jp: "はしったので、のどが渇きました。", en: "I ran, so I got thirsty." }, accept: ["thirsty", "to become thirsty"], hint: "のどが渇く (かわく) = to be thirsty. Different kanji from 乾く (to dry)." },
        { id: "ja-u143l2-kawaru", type: "vocab", front: "代る", reading: "kawaru", meaning: "to substitute", example: { jp: "ちちに代ってわたしがいきます。", en: "I will go in place of my father." }, accept: ["to take the place of", "to relieve"], hint: "〜に代って (かわって) = in place of / on behalf of someone." },
        { id: "ja-u143l2-kan", type: "vocab", front: "缶", reading: "kan", meaning: "can", example: { jp: "缶のジュースをのみました。", en: "I drank canned juice." }, accept: ["tin"] },
        { id: "ja-u143l2-kan2", type: "vocab", front: "勘", reading: "kan", meaning: "perception", example: { jp: "かれは勘がいいです。", en: "He has good intuition." }, accept: ["intuition", "sixth sense"], hint: "勘がいい (かんがいい) = to have good intuition." },
        { id: "ja-u143l2-kangae", type: "vocab", front: "考え", reading: "kangae", meaning: "thought", example: { jp: "いい考えがあります。", en: "I have a good idea." }, accept: ["thinking", "idea"], hint: "考え (かんがえ) = a thought / idea; from 考える (to think)." },
        { id: "ja-u143l2-kankaku", type: "vocab", front: "感覚", reading: "kankaku", meaning: "sense", example: { jp: "さむくてゆびの感覚がありません。", en: "It's cold and I have no feeling in my fingers." }, accept: ["sensation", "feeling"], hint: "感覚 (かんかく) = sense / sensation of the body." },
      ],
    },
    {
      id: "ja-u143l3", unit: 143, lesson: 3, title: "N3 vocab 25·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 間隔 (gap), 観客 (audience), 環境 (environment), 歓迎 (welcome), 観光 (sightseeing), 観察 (observation).",
      items: [
        { id: "ja-u143l3-kankaku2", type: "vocab", front: "間隔", reading: "kankaku", meaning: "gap", example: { jp: "きの間隔をひろくします。", en: "I widen the gap between the trees." }, accept: ["interval", "space"], hint: "間隔 (かんかく) = interval / gap between things. Same reading as 感覚 (bodily sense)." },
        { id: "ja-u143l3-kankyaku", type: "vocab", front: "観客", reading: "kankyaku", meaning: "audience", example: { jp: "観客がたくさんあつまりました。", en: "A large audience gathered." }, accept: ["spectators"], hint: "観客 (かんきゃく) = the audience / spectators at an event." },
        { id: "ja-u143l3-kankyo", type: "vocab", front: "環境", reading: "kankyō", meaning: "environment", example: { jp: "きれいな環境にすみたいです。", en: "I want to live in a clean environment." }, accept: ["surroundings", "circumstances"], hint: "環境 (かんきょう) = environment / surroundings." },
        { id: "ja-u143l3-kangei", type: "vocab", front: "歓迎", reading: "kangei", meaning: "welcome", example: { jp: "あたらしいがくせいを歓迎します。", en: "We welcome the new students." }, accept: ["reception"], hint: "歓迎する (かんげいする) = to welcome someone." },
        { id: "ja-u143l3-kanko", type: "vocab", front: "観光", reading: "kankō", meaning: "sightseeing", example: { jp: "きょうとへ観光にいきます。", en: "I'm going sightseeing in Kyoto." }, accept: ["tourism"], hint: "観光 (かんこう) = sightseeing / tourism." },
        { id: "ja-u143l3-kansatsu", type: "vocab", front: "観察", reading: "kansatsu", meaning: "observation", example: { jp: "むしを観察するのがすきです。", en: "I like observing insects." }, accept: ["survey"], hint: "観察する (かんさつする) = to observe / watch closely." },
      ],
    },
    {
      id: "ja-u143l4", unit: 143, lesson: 4, title: "N3 vocab 25·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 感じ (feeling), 感謝 (thanks), 患者 (patient), 勘定 (calculation), 感情 (emotion), 感じる (to feel).",
      items: [
        { id: "ja-u143l4-kanji", type: "vocab", front: "感じ", reading: "kanji", meaning: "feeling", example: { jp: "このへやはあたたかい感じがします。", en: "This room has a warm feeling." }, accept: ["sense", "impression"], hint: "感じ (かんじ) = a feeling / impression something gives." },
        { id: "ja-u143l4-kansha", type: "vocab", front: "感謝", reading: "kansha", meaning: "thanks", example: { jp: "てつだってくれて感謝しています。", en: "I'm grateful for your help." }, accept: ["gratitude"], hint: "感謝する (かんしゃする) = to feel / express gratitude." },
        { id: "ja-u143l4-kanja", type: "vocab", front: "患者", reading: "kanja", meaning: "patient", example: { jp: "びょういんに患者がおおいです。", en: "There are many patients in the hospital." }, accept: ["sick person"], hint: "患者 (かんじゃ) = a patient (a sick person under care)." },
        { id: "ja-u143l4-kanjo", type: "vocab", front: "勘定", reading: "kanjō", meaning: "calculation", example: { jp: "レストランで勘定をはらいました。", en: "I paid the bill at the restaurant." }, accept: ["counting", "bill"], hint: "勘定 (かんじょう) = the bill / check; also counting up. Same reading as 感情 (emotion)." },
        { id: "ja-u143l4-kanjo2", type: "vocab", front: "感情", reading: "kanjō", meaning: "emotion", example: { jp: "かれは感情をかおにだしません。", en: "He doesn't show emotion on his face." }, accept: ["feelings", "sentiment"], hint: "感情 (かんじょう) = emotion / feelings. Same reading as 勘定 (the bill)." },
        { id: "ja-u143l4-kanjiru", type: "vocab", front: "感じる", reading: "kanjiru", meaning: "to feel", example: { jp: "せなかにいたみを感じました。", en: "I felt a pain in my back." }, accept: ["to sense"], hint: "感じる (かんじる) = to feel / sense something." },
      ],
    },
  ],
};
