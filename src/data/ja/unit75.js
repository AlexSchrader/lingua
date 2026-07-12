// Unit 75 — かんじ・からだ ("Kanji — body & movement") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 kanji, many hooking onto known vocab: 顔→かお, 頭→あたま, 喉→のど, 肩→かた, お腹→おなか,
// 背中→せなか, 歩く→あるきます, 走る→はしります, 飛ぶ→とびます, おにぎり→握る…
// KanjiVG strokes required (KANJI_N3). Naturalness → native review.
export const UNIT75 = {
  id: "ja-u75", lang: "ja", title: "かんじ・からだ", order: 75, stage: "b1",
  lessons: [
    {
      id: "ja-u75l1", unit: 75, lesson: 1, title: "Face & head", cefr: "B1", dominantMode: "recall",
      canDo: "Read face kanji: 顔 頭 首 髪 舌 喉.",
      items: [
        { id: "ja-u75l1-kao", type: "kanji", front: "顔", reading: "kao", meaning: "face", example: { jp: "朝、顔を洗います。", en: "I wash my face in the morning." }, accept: ["expression"], hint: "顔 = face. 顔 (かお) — the word you know." },
        { id: "ja-u75l1-atama", type: "kanji", front: "頭", reading: "atama", meaning: "head", example: { jp: "頭がいたいです。", en: "My head hurts." }, accept: ["brains"], hint: "頭 = head. 頭 (あたま) — the word you know." },
        { id: "ja-u75l1-kubi", type: "kanji", front: "首", reading: "kubi", meaning: "neck", example: { jp: "首がいたいです。", en: "My neck hurts." }, accept: ["dismissal"], hint: "首 = neck. 首 (くび). Also 首都 (しゅと, capital city)." },
        { id: "ja-u75l1-kami", type: "kanji", front: "髪", reading: "kami", meaning: "hair", example: { jp: "髪をきります。", en: "I cut my hair." }, accept: ["hairstyle"], hint: "髪 = hair (on the head). In 髪の毛 (かみのけ, hair)." },
        { id: "ja-u75l1-shita", type: "kanji", front: "舌", reading: "shita", meaning: "tongue", example: { jp: "舌をだします。", en: "I stick out my tongue." }, accept: ["taste"], hint: "舌 = tongue. 舌 (した). 口 (mouth) at the bottom." },
        { id: "ja-u75l1-nodo", type: "kanji", front: "喉", reading: "nodo", meaning: "throat", example: { jp: "喉がいたいです。", en: "My throat hurts." }, accept: ["gullet"], hint: "喉 = throat. 喉 (のど) — the word you know. 口 (mouth) radical." },
      ],
    },
    {
      id: "ja-u75l2", unit: 75, lesson: 2, title: "The body", cefr: "B1", dominantMode: "recall",
      canDo: "Read body kanji: 肩 腕 胸 腹 背 肌.",
      items: [
        { id: "ja-u75l2-kata", type: "kanji", front: "肩", reading: "kata", meaning: "shoulder", example: { jp: "肩がこります。", en: "My shoulders are stiff." }, accept: ["shoulders"], hint: "肩 = shoulder. 肩 (かた). ⺼ (flesh) radical." },
        { id: "ja-u75l2-ude", type: "kanji", front: "腕", reading: "ude", meaning: "arm", example: { jp: "腕がつよいです。", en: "My arms are strong." }, accept: ["skill"], hint: "腕 = arm. 腕 (うで). Also 腕前 (うでまえ, skill). ⺼ (flesh) radical." },
        { id: "ja-u75l2-mune", type: "kanji", front: "胸", reading: "mune", meaning: "chest", example: { jp: "胸がいたいです。", en: "My chest hurts." }, accept: ["breast", "heart"], hint: "胸 = chest / breast. 胸 (むね). ⺼ (flesh) radical." },
        { id: "ja-u75l2-hara", type: "kanji", front: "腹", reading: "hara", meaning: "belly / stomach", example: { jp: "お腹がすきました。", en: "I'm hungry." }, accept: ["abdomen"], hint: "腹 = belly. お腹 (おなか) = stomach. ⺼ (flesh) radical." },
        { id: "ja-u75l2-se", type: "kanji", front: "背", reading: "se", meaning: "back / height", example: { jp: "背中がいたいです。", en: "My back hurts." }, accept: ["stature"], hint: "背 = back / height. In 背中 (せなか, back), 背 (せ, height)." },
        { id: "ja-u75l2-hada", type: "kanji", front: "肌", reading: "hada", meaning: "skin", example: { jp: "肌がよわいです。", en: "My skin is sensitive." }, accept: ["texture"], hint: "肌 = skin. 肌 (はだ). ⺼ (flesh) radical." },
      ],
    },
    {
      id: "ja-u75l3", unit: 75, lesson: 3, title: "Movement", cefr: "B1", dominantMode: "recall",
      canDo: "Read movement kanji: 歩 走 飛 座 触 握.",
      items: [
        { id: "ja-u75l3-aruku", type: "kanji", front: "歩", reading: "aruku", meaning: "walk", example: { jp: "まいにち歩きます。", en: "I walk every day." }, accept: ["step"], hint: "歩 = walk. 歩く (あるく) = to walk. In 散歩 (さんぽ, a stroll)." },
        { id: "ja-u75l3-hashiru", type: "kanji", front: "走", reading: "hashiru", meaning: "run", example: { jp: "はやく走ります。", en: "I run fast." }, accept: ["dash"], hint: "走 = run. 走る (はしる) = to run." },
        { id: "ja-u75l3-tobu", type: "kanji", front: "飛", reading: "tobu", meaning: "fly / jump", example: { jp: "鳥が飛びます。", en: "The bird flies." }, accept: ["leap"], hint: "飛 = fly / jump. 飛ぶ (とぶ) = to fly. In 飛行機 (ひこうき, airplane)." },
        { id: "ja-u75l3-suwaru", type: "kanji", front: "座", reading: "suwaru", meaning: "sit", example: { jp: "ここに座ります。", en: "I sit here." }, accept: ["seat"], hint: "座 = sit. 座る (すわる) = to sit. In 座席 (ざせき, seat)." },
        { id: "ja-u75l3-sawaru", type: "kanji", front: "触", reading: "sawaru", meaning: "touch", example: { jp: "手で触ります。", en: "I touch it with my hand." }, accept: ["feel", "contact"], hint: "触 = touch. 触る (さわる) = to touch. 角 (horn) radical." },
        { id: "ja-u75l3-nigiru", type: "kanji", front: "握", reading: "nigiru", meaning: "grip / grasp", example: { jp: "手を握ります。", en: "I grip the hand." }, accept: ["clench"], hint: "握 = grip / grasp. 握る (にぎる). In おにぎり (rice ball). 扌 (hand) radical." },
      ],
    },
    {
      id: "ja-u75l4", unit: 75, lesson: 4, title: "Fluids & gestures", cefr: "B1", dominantMode: "recall",
      canDo: "Read body-action kanji: 涙 汗 振 抱 額 揺.",
      items: [
        { id: "ja-u75l4-namida", type: "kanji", front: "涙", reading: "namida", meaning: "tears", example: { jp: "涙がでます。", en: "Tears come out." }, accept: ["teardrop"], hint: "涙 = tears. 涙 (なみだ). 氵 (water) radical." },
        { id: "ja-u75l4-ase", type: "kanji", front: "汗", reading: "ase", meaning: "sweat", example: { jp: "汗をかきます。", en: "I sweat." }, accept: ["perspiration"], hint: "汗 = sweat. 汗 (あせ). 氵 (water) radical." },
        { id: "ja-u75l4-furu", type: "kanji", front: "振", reading: "furu", meaning: "wave / shake", example: { jp: "手を振ります。", en: "I wave my hand." }, accept: ["swing"], hint: "振 = wave / shake. 振る (ふる) = to wave. 扌 (hand) radical." },
        { id: "ja-u75l4-daku", type: "kanji", front: "抱", reading: "daku", meaning: "hold / embrace", example: { jp: "あかちゃんを抱きます。", en: "I hold the baby." }, accept: ["hug", "harbor"], hint: "抱 = hold / embrace. 抱く (だく) = to hold. 扌 (hand) radical." },
        { id: "ja-u75l4-hitai", type: "kanji", front: "額", reading: "hitai", meaning: "forehead / amount", example: { jp: "額に汗をかきます。", en: "I get sweat on my forehead." }, accept: ["sum", "frame"], hint: "額 = forehead / amount. 額 (ひたい) = forehead; 金額 (きんがく) = a sum of money." },
        { id: "ja-u75l4-yureru", type: "kanji", front: "揺", reading: "yureru", meaning: "sway / shake", example: { jp: "でんしゃが揺れます。", en: "The train sways." }, accept: ["rock", "tremble"], hint: "揺 = sway / shake. 揺れる (ゆれる) = to sway. 扌 (hand) radical." },
      ],
    },
  ],
};
