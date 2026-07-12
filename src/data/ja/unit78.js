// Unit 78 — かんじ・どうし ("Kanji — common N3 verbs") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 verb kanji, many hooking onto known verbs: 覚える→おぼえます, 忘れる→わすれます,
// 考える→かんがえ, 探す→さがします, 許す→ゆるします, 伝える→つたえます, 断る→ことわります,
// 働く→はたらきます, 疲れる→つかれます, 驚く→おどろきます, 怖い→こわい…
// KanjiVG strokes required (KANJI_N3). Naturalness → native review.
export const UNIT78 = {
  id: "ja-u78", lang: "ja", title: "かんじ・どうし", order: 78, stage: "b1",
  lessons: [
    {
      id: "ja-u78l1", unit: 78, lesson: 1, title: "Memory & thought", cefr: "B1", dominantMode: "recall",
      canDo: "Read thinking kanji: 覚 忘 考 探 加 許.",
      items: [
        { id: "ja-u78l1-oboeru", type: "kanji", front: "覚", reading: "oboeru", meaning: "memorize / wake", example: { jp: "たんごを覚えます。", en: "I memorize vocabulary." }, accept: ["remember", "learn"], hint: "覚 = memorize / wake. 覚える (おぼえる) = to memorize. 目 (eye) at the bottom." },
        { id: "ja-u78l1-wasureru", type: "kanji", front: "忘", reading: "wasureru", meaning: "forget", example: { jp: "なまえを忘れます。", en: "I forget the name." }, accept: ["leave behind"], hint: "忘 = forget. 忘れる (わすれる). 心 (heart) at the bottom." },
        { id: "ja-u78l1-kangaeru", type: "kanji", front: "考", reading: "kangaeru", meaning: "think / consider", example: { jp: "よく考えます。", en: "I think it over carefully." }, accept: ["ponder"], hint: "考 = think / consider. 考える (かんがえる). In 考え (かんがえ, a thought)." },
        { id: "ja-u78l1-sagasu", type: "kanji", front: "探", reading: "sagasu", meaning: "search / look for", example: { jp: "かぎを探します。", en: "I look for the key." }, accept: ["seek"], hint: "探 = search. 探す (さがす). 扌 (hand) radical." },
        { id: "ja-u78l1-kuwaeru", type: "kanji", front: "加", reading: "kuwaeru", meaning: "add", example: { jp: "さとうを加えます。", en: "I add sugar." }, accept: ["join", "increase"], hint: "加 = add. 加える (くわえる). In 参加 (さんか, participation)." },
        { id: "ja-u78l1-yurusu", type: "kanji", front: "許", reading: "yurusu", meaning: "permit / forgive", example: { jp: "まちがいを許します。", en: "I forgive the mistake." }, accept: ["allow"], hint: "許 = permit / forgive. 許す (ゆるす). In 許可 (きょか, permission). 言 radical." },
      ],
    },
    {
      id: "ja-u78l2", unit: 78, lesson: 2, title: "Convey & wish", cefr: "B1", dominantMode: "recall",
      canDo: "Read social-verb kanji: 伝 断 祝 願 望 祈.",
      items: [
        { id: "ja-u78l2-tsutaeru", type: "kanji", front: "伝", reading: "tsutaeru", meaning: "convey / tell", example: { jp: "きもちを伝えます。", en: "I convey my feelings." }, accept: ["transmit"], hint: "伝 = convey. 伝える (つたえる). In 伝言 (でんごん, message). 亻 radical." },
        { id: "ja-u78l2-kotowaru", type: "kanji", front: "断", reading: "kotowaru", meaning: "refuse / cut off", example: { jp: "ていねいに断ります。", en: "I politely refuse." }, accept: ["decline", "sever"], hint: "断 = refuse / cut off. 断る (ことわる). In 判断 (はんだん, judgment)." },
        { id: "ja-u78l2-iwau", type: "kanji", front: "祝", reading: "iwau", meaning: "celebrate", example: { jp: "そつぎょうを祝います。", en: "I celebrate the graduation." }, accept: ["congratulate"], hint: "祝 = celebrate. 祝う (いわう). In お祝い (おいわい, celebration). ⺬ radical." },
        { id: "ja-u78l2-negau", type: "kanji", front: "願", reading: "negau", meaning: "wish / request", example: { jp: "せいこうを願います。", en: "I wish for success." }, accept: ["hope", "beg"], hint: "願 = wish / request. お願い (おねがい) = a request. 願う (ねがう) = to wish." },
        { id: "ja-u78l2-nozomu", type: "kanji", front: "望", reading: "nozomu", meaning: "hope / desire", example: { jp: "へいわを望みます。", en: "I hope for peace." }, accept: ["wish for"], hint: "望 = hope / desire. 望む (のぞむ). In 希望 (きぼう, hope)." },
        { id: "ja-u78l2-inoru", type: "kanji", front: "祈", reading: "inoru", meaning: "pray", example: { jp: "けんこうを祈ります。", en: "I pray for good health." }, accept: ["wish (a prayer)"], hint: "祈 = pray. 祈る (いのる). In 祈り (いのり, a prayer). ⺬ radical." },
      ],
    },
    {
      id: "ja-u78l3", unit: 78, lesson: 3, title: "Daily actions", cefr: "B1", dominantMode: "recall",
      canDo: "Read action kanji: 働 疲 眠 困 驚 怠.",
      items: [
        { id: "ja-u78l3-hataraku", type: "kanji", front: "働", reading: "hataraku", meaning: "work", example: { jp: "かいしゃで働きます。", en: "I work at a company." }, accept: ["labor"], hint: "働 = work. 働く (はたらく). 亻 (person) + 動 (move)." },
        { id: "ja-u78l3-tsukareru", type: "kanji", front: "疲", reading: "tsukareru", meaning: "get tired", example: { jp: "しごとで疲れます。", en: "I get tired from work." }, accept: ["exhausted"], hint: "疲 = get tired. 疲れる (つかれる). 疒 (sickness) radical." },
        { id: "ja-u78l3-nemuru", type: "kanji", front: "眠", reading: "nemuru", meaning: "sleep", example: { jp: "よる、よく眠ります。", en: "I sleep well at night." }, accept: ["slumber", "sleepy"], hint: "眠 = sleep. 眠る (ねむる); 眠い (ねむい) = sleepy. 目 (eye) radical." },
        { id: "ja-u78l3-komaru", type: "kanji", front: "困", reading: "komaru", meaning: "be troubled", example: { jp: "おかねがなくて困ります。", en: "I'm in trouble with no money." }, accept: ["be stuck", "be at a loss"], hint: "困 = be troubled. 困る (こまる). 木 (tree) inside an enclosure." },
        { id: "ja-u78l3-odoroku", type: "kanji", front: "驚", reading: "odoroku", meaning: "be surprised", example: { jp: "ニュースに驚きます。", en: "I'm surprised by the news." }, accept: ["be startled"], hint: "驚 = be surprised. 驚く (おどろく). 馬 (horse) at the bottom." },
        { id: "ja-u78l3-namakeru", type: "kanji", front: "怠", reading: "namakeru", meaning: "be lazy / neglect", example: { jp: "べんきょうを怠けます。", en: "I slack off on studying." }, accept: ["idle", "slack"], hint: "怠 = be lazy / neglect. 怠ける (なまける). 心 (heart) at the bottom." },
      ],
    },
    {
      id: "ja-u78l4", unit: 78, lesson: 4, title: "Feelings & reactions", cefr: "B1", dominantMode: "recall",
      canDo: "Read emotion kanji: 慌 恥 怖 恐 憎 恋.",
      items: [
        { id: "ja-u78l4-awateru", type: "kanji", front: "慌", reading: "awateru", meaning: "panic / be flustered", example: { jp: "じかんがなくて慌てます。", en: "I panic with no time left." }, accept: ["be in a hurry"], hint: "慌 = panic / be flustered. 慌てる (あわてる). 忄 (heart) radical." },
        { id: "ja-u78l4-hazukashii", type: "kanji", front: "恥", reading: "hazukashii", meaning: "ashamed / shy", example: { jp: "まちがえて恥ずかしいです。", en: "I'm embarrassed for making a mistake." }, accept: ["embarrassed", "shame"], hint: "恥 = shame. 恥ずかしい (はずかしい) = embarrassed. 耳 (ear) + 心 (heart)." },
        { id: "ja-u78l4-kowai", type: "kanji", front: "怖", reading: "kowai", meaning: "scary / afraid", example: { jp: "くらいところが怖いです。", en: "Dark places are scary." }, accept: ["frightening"], hint: "怖 = scary. 怖い (こわい). 忄 (heart) radical." },
        { id: "ja-u78l4-osoroshii", type: "kanji", front: "恐", reading: "osoroshii", meaning: "fear / dread", example: { jp: "恐ろしいゆめを見ました。", en: "I had a terrifying dream." }, accept: ["terrible", "afraid"], hint: "恐 = fear / dread. 恐ろしい (おそろしい). In 恐怖 (きょうふ, terror). 心 at the bottom." },
        { id: "ja-u78l4-nikui", type: "kanji", front: "憎", reading: "nikui", meaning: "hateful", example: { jp: "憎いきもちをわすれます。", en: "I let go of hateful feelings." }, accept: ["hate", "detest"], hint: "憎 = hate. 憎い (にくい) = hateful; 憎む (にくむ) = to hate. 忄 radical." },
        { id: "ja-u78l4-koi", type: "kanji", front: "恋", reading: "koi", meaning: "(romantic) love", example: { jp: "恋をします。", en: "I fall in love." }, accept: ["romance", "yearning"], hint: "恋 = romantic love. 恋 (こい). In 恋愛 (れんあい, romance). 心 (heart) at the bottom." },
      ],
    },
  ],
};
