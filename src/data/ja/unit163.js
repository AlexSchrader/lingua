// Unit 163 — ごい・N3・45 ("N3 vocab 45") — B1 / JLPT N3 vocabulary.
// type:"vocab" — recognition/recall test the meaning. Examples contain the target
// word in its normal kanji/kana form; everything else is kana N5/N4 vocab, です/ます
// register. Homograph readings (wan, itameru) disambiguated via hints.
export const UNIT163 = {
  id: "ja-u163", lang: "ja", title: "ごい・N3・45", order: 163, stage: "b1",
  lessons: [
    {
      id: "ja-u163l1", unit: 163, lesson: 1, title: "N3 vocab 45·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 悪口 (abuse), 我々 (we), 湾 (bay), 椀 (bowl), 碗 (bowl), 当り (hit).",
      items: [
        { id: "ja-u163l1-warukuchi", type: "vocab", front: "悪口", reading: "warukuchi", meaning: "abuse", example: { jp: "ひとの悪口をいってはいけません。", en: "You must not speak ill of people." }, accept: ["insult", "bad-mouthing"] },
        { id: "ja-u163l1-wareware", type: "vocab", front: "我々", reading: "wareware", meaning: "we", example: { jp: "我々はにほんじんです。", en: "We are Japanese." }, accept: ["us"] },
        { id: "ja-u163l1-wan", type: "vocab", front: "湾", reading: "wan", meaning: "bay", example: { jp: "この湾はとてもきれいです。", en: "This bay is very beautiful." }, accept: ["gulf", "inlet"] },
        { id: "ja-u163l1-wan2", type: "vocab", front: "椀", reading: "wan", meaning: "bowl", example: { jp: "ごはんを椀にいれます。", en: "I put rice in a bowl." }, accept: ["wooden bowl"], hint: "椀 (わん) = a wooden bowl for rice or soup. 碗 is the ceramic version." },
        { id: "ja-u163l1-wan3", type: "vocab", front: "碗", reading: "wan", meaning: "bowl", example: { jp: "この碗でおちゃをのみます。", en: "I drink tea from this bowl." }, accept: ["ceramic bowl"], hint: "碗 (わん) = a ceramic bowl for tea or rice. 椀 is the wooden version." },
        { id: "ja-u163l1-atari2", type: "vocab", front: "当り", reading: "atari", meaning: "hit", example: { jp: "くじで当りがでました。", en: "I got a winner in the lottery." }, accept: ["success", "winner"] },
      ],
    },
    {
      id: "ja-u163l2", unit: 163, lesson: 2, title: "N3 vocab 45·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 宛てる (to address), 異 (objection), 医院 (clinic), 怒り (anger), 粋 (chic), 意地 (stubbornness).",
      items: [
        { id: "ja-u163l2-ateru2", type: "vocab", front: "宛てる", reading: "ateru", meaning: "to address", example: { jp: "せんせいに宛ててメールをかきました。", en: "I wrote an email addressed to the teacher." }, accept: ["to put", "to send to"] },
        { id: "ja-u163l2-i2", type: "vocab", front: "異", reading: "i", meaning: "objection", example: { jp: "かれは異をとなえました。", en: "He raised an objection." }, accept: ["difference", "dissent"], hint: "異を唱える (となえる) = to raise an objection / voice a differing opinion." },
        { id: "ja-u163l2-iin2", type: "vocab", front: "医院", reading: "iin", meaning: "clinic", example: { jp: "ちかくの医院へいきました。", en: "I went to the nearby clinic." }, accept: ["doctor's office", "surgery"] },
        { id: "ja-u163l2-ikari", type: "vocab", front: "怒り", reading: "ikari", meaning: "anger", example: { jp: "かれの怒りはとてもつよかったです。", en: "His anger was very strong." }, accept: ["rage", "fury"] },
        { id: "ja-u163l2-iki2", type: "vocab", front: "粋", reading: "iki", meaning: "chic", example: { jp: "あのひとは粋なふくをきています。", en: "That person is wearing chic clothes." }, accept: ["stylish", "style"] },
        { id: "ja-u163l2-iji2", type: "vocab", front: "意地", reading: "iji", meaning: "stubbornness", example: { jp: "かれは意地をはっています。", en: "He is being stubborn." }, accept: ["obstinacy", "pride"], hint: "意地を張る (はる) = to be stubborn / dig one's heels in." },
      ],
    },
    {
      id: "ja-u163l3", unit: 163, lesson: 3, title: "N3 vocab 45·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 依然 (still), 傷める (to damage), 炒める (to stir-fry), 一帯 (area), 異動 (transfer), 衣料 (clothing).",
      items: [
        { id: "ja-u163l3-izen2", type: "vocab", front: "依然", reading: "izen", meaning: "still", example: { jp: "依然としてあめがふっています。", en: "It is still raining." }, accept: ["as yet", "as before"], hint: "usually 依然として (still, as before) — an adverb of unchanged state." },
        { id: "ja-u163l3-itameru", type: "vocab", front: "傷める", reading: "itameru", meaning: "to damage", example: { jp: "あしを傷めてしまいました。", en: "I hurt my leg." }, accept: ["to hurt", "to injure"], hint: "傷める (いためる) = to damage / hurt a body part. 炒める = to stir-fry." },
        { id: "ja-u163l3-itameru2", type: "vocab", front: "炒める", reading: "itameru", meaning: "to stir-fry", example: { jp: "やさいを炒めます。", en: "I stir-fry vegetables." }, accept: ["to fry", "to sauté"], hint: "炒める (いためる) = to stir-fry in a pan. 傷める = to damage." },
        { id: "ja-u163l3-ittai2", type: "vocab", front: "一帯", reading: "ittai", meaning: "area", example: { jp: "この一帯はしずかです。", en: "This whole area is quiet." }, accept: ["whole area", "region"] },
        { id: "ja-u163l3-ido2", type: "vocab", front: "異動", reading: "idō", meaning: "transfer", example: { jp: "しごとの異動がありました。", en: "There was a personnel change at work." }, accept: ["change", "reassignment"], hint: "異動 = a personnel change / job transfer (moving posts)." },
        { id: "ja-u163l3-iryo2", type: "vocab", front: "衣料", reading: "iryō", meaning: "clothing", example: { jp: "このみせは衣料をうっています。", en: "This shop sells clothing." }, accept: ["clothes", "apparel"] },
      ],
    },
    {
      id: "ja-u163l4", unit: 163, lesson: 4, title: "N3 vocab 45·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: 渦 (swirl), 埋まる (to be buried), 産む (to give birth), 縁 (bond), 尾 (tail), 負う (to bear).",
      items: [
        { id: "ja-u163l4-uzu", type: "vocab", front: "渦", reading: "uzu", meaning: "swirl", example: { jp: "かわに渦ができました。", en: "A whirlpool formed in the river." }, accept: ["whirlpool", "eddy"] },
        { id: "ja-u163l4-umaru", type: "vocab", front: "埋まる", reading: "umaru", meaning: "to be buried", example: { jp: "みちがゆきで埋まりました。", en: "The road was buried in snow." }, accept: ["to be filled", "to be covered"] },
        { id: "ja-u163l4-umu2", type: "vocab", front: "産む", reading: "umu", meaning: "to give birth", example: { jp: "ねこがこどもを産みました。", en: "The cat gave birth to kittens." }, accept: ["to deliver", "to bear"] },
        { id: "ja-u163l4-en", type: "vocab", front: "縁", reading: "en", meaning: "bond", example: { jp: "これもなにかの縁ですね。", en: "This must be some kind of fate." }, accept: ["tie", "relationship"], hint: "縁 = a bond / connection between people (often fated)." },
        { id: "ja-u163l4-o2", type: "vocab", front: "尾", reading: "o", meaning: "tail", example: { jp: "いぬが尾をふっています。", en: "The dog is wagging its tail." }, accept: ["ridge"] },
        { id: "ja-u163l4-o3", type: "vocab", front: "負う", reading: "ō", meaning: "to bear", example: { jp: "せきにんを負います。", en: "I bear the responsibility." }, accept: ["to owe", "to carry"], hint: "責任を負う (せきにんをおう) = to bear responsibility." },
      ],
    },
  ],
};
