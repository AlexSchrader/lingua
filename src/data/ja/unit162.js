// Unit 162 — かんじ・きまりと しくみ — B2 / JLPT N2
// Strand A. N2 glyphs for rules and structure — words and warnings, tickets and limits,
// cause and effect, building and digging. Slot new[32:48] of the deduped N2 list.
// 4 lessons x (4 glyphs + 2 compound words) = 24 cards, the shape u157 settled on:
// every kanji in a compound front is taught at or before this unit — verified by
// npm run check:glyphs. lang/unit/lesson are stamped in src/data/index.js.
export const UNIT162 = {
  id: "ja-u162",
  lang: "ja",
  title: "かんじ・きまりと しくみ",
  order: 162,
  stage: "b2",
  lessons: [
    {
      id: "ja-u162l1",
      unit: 162,
      lesson: 1,
      title: "Words and lessons",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 句 (phrase), 訓 (instruction), 群 (crowd), 潔 (pure), and the words 訓練 and 文句.",
      items: [
        { id: "ja-u162l1-53e5", type: "kanji", front: "句", reading: "ku", meaning: "phrase", example: { jp: "先生の 話の 中に、わすれられない 句が ありました。", en: "In the teacher's talk there was a phrase I couldn't forget." }, accept: ["clause", "passage", "line"], hint: "句 = a short set phrase or line. 文句 is literally 'phrases and words' — the complaints you put into them." },
        { id: "ja-u162l1-8a13", type: "kanji", front: "訓", reading: "kun", meaning: "instruction", example: { jp: "その 失敗は 私に 大きな 教訓を あたえました。", en: "That failure gave me a big lesson." }, accept: ["lesson", "teaching", "precept"], hint: "訓 = a lesson handed down. It is also the 'kun' in 訓読み — the Japanese reading taught for a kanji." },
        { id: "ja-u162l1-7fa4", type: "kanji", front: "群", reading: "gun", meaning: "crowd", example: { jp: "公園に 鳥の 群れが おりて きました。", en: "A flock of birds came down into the park." }, accept: ["group", "flock", "herd"], hint: "群れ (mure) is a flock or herd; the on-reading 群 (gun) builds words like 群衆 (a crowd)." },
        { id: "ja-u162l1-6f54", type: "kanji", front: "潔", reading: "ketsu", meaning: "pure", example: { jp: "かれは 潔く 自分の 負けを みとめました。", en: "He cleanly admitted his defeat." }, accept: ["clean", "graceful", "undefiled"], hint: "潔い (isagiyoi) = accepting something cleanly, without fuss. 清潔 is 'clean' in the hygienic sense." },
        { id: "ja-u162l1-kunren", type: "vocab", front: "訓練", reading: "kunren", meaning: "training", example: { jp: "毎日の 練習と 訓練で、体が 強く なりました。", en: "With daily practice and training, my body got stronger." }, accept: ["drill", "discipline"] },
        { id: "ja-u162l1-monku", type: "vocab", front: "文句", reading: "monku", meaning: "a complaint", example: { jp: "かれは いつも 小さな ことに 文句を 言います。", en: "He always complains about small things." }, accept: ["objection", "grumble", "gripe"] },
      ],
    },
    {
      id: "ja-u162l2",
      unit: 162,
      lesson: 2,
      title: "Tickets and limits",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 券 (ticket), 検 (to examine), 限 (limit), 個 (individual), and the words 期限 and 個人.",
      items: [
        { id: "ja-u162l2-5238", type: "kanji", front: "券", reading: "ken", meaning: "ticket", example: { jp: "駅の きかいで しんかんせんの 券を 買いました。", en: "I bought a bullet-train ticket at the machine in the station." }, accept: ["coupon", "voucher"], hint: "券 = a ticket or voucher. 入場券 = an admission ticket, 定期券 = a season pass." },
        { id: "ja-u162l2-691c", type: "kanji", front: "検", reading: "ken", meaning: "to examine", example: { jp: "工場では きかいを 毎日 点検します。", en: "At the factory they inspect the machines every day." }, accept: ["to inspect", "to check"], hint: "検 = to examine closely. 点検 = a point-by-point inspection, 検定 = an examination for a grade." },
        { id: "ja-u162l2-9650", type: "kanji", front: "限", reading: "gen", meaning: "limit", example: { jp: "この もうしこみには 時間の 限りが あります。", en: "There's a time limit on this application." }, accept: ["bound", "restriction"], hint: "限り (kagiri) = a limit or 'as far as'. 制限 = a restriction; 限界 = the very edge of what is possible." },
        { id: "ja-u162l2-500b", type: "kanji", front: "個", reading: "ko", meaning: "individual", example: { jp: "たまごを 十個 買って きて ください。", en: "Please buy ten eggs." }, accept: ["piece", "a single one"], hint: "個 counts small round things (三個 = three pieces) and marks the single person: 個人 = an individual." },
        { id: "ja-u162l2-kigen", type: "vocab", front: "期限", reading: "kigen", meaning: "deadline", example: { jp: "レポートの 期限は 来週の 金曜日です。", en: "The deadline for the report is next Friday." }, accept: ["time limit", "due date"] },
        { id: "ja-u162l2-kojin", type: "vocab", front: "個人", reading: "kojin", meaning: "an individual", example: { jp: "これは 会社では なく、私 個人の 意見です。", en: "This isn't the company's view but my own personal one." }, accept: ["a private person", "personal"] },
      ],
    },
    {
      id: "ja-u162l3",
      unit: 162,
      lesson: 3,
      title: "Cause and effect",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 故 (mishap), 護 (to protect), 効 (effect), 厚 (thick), and the words 事故 and 効果.",
      items: [
        { id: "ja-u162l3-6545", type: "kanji", front: "故", reading: "ko", meaning: "a mishap", example: { jp: "雪の ため、大きな 事故が おきました。", en: "Because of the snow, a big accident happened." }, accept: ["cause", "the reason", "incident"], hint: "故 carries 'reason' and 'incident' at once — 事故 is an accident, and 故 alone can mean 'the late…' for someone who has died." },
        { id: "ja-u162l3-8b77", type: "kanji", front: "護", reading: "go", meaning: "to protect", example: { jp: "自然を 護る ことは、私たちの つとめです。", en: "Protecting nature is our duty." }, accept: ["to guard", "to defend"], hint: "護る (mamoru) = to guard, the same 'mamoru' as 守る but heavier. 保護 = protection, 看護 = nursing." },
        { id: "ja-u162l3-52b9", type: "kanji", front: "効", reading: "kō", meaning: "effect", example: { jp: "この 新しい 薬は とても よく 効きます。", en: "This new medicine works very well." }, accept: ["to be effective", "efficacy"], hint: "効く (kiku) = to take effect. 効果 = an effect, 有効 = valid/in force." },
        { id: "ja-u162l3-539a", type: "kanji", front: "厚", reading: "kō", meaning: "thick", example: { jp: "今日は 寒いので、厚い セーターを 着ました。", en: "It's cold today, so I put on a thick sweater." }, accept: ["thick (in depth)", "generous"], hint: "厚い (atsui) = thick in depth — note it is a different 'atsui' from 暑い (hot) and 熱い (hot to the touch)." },
        { id: "ja-u162l3-jiko", type: "vocab", front: "事故", reading: "jiko", meaning: "an accident", example: { jp: "その 道路で 車の 事故が あったそうです。", en: "I hear there was a car accident on that road." }, accept: ["a mishap", "a crash"] },
        { id: "ja-u162l3-koka", type: "vocab", front: "効果", reading: "kōka", meaning: "an effect", example: { jp: "この やり方は 思ったより 効果が ありました。", en: "This method was more effective than I expected." }, accept: ["result", "efficacy"] },
      ],
    },
    {
      id: "ja-u162l4",
      unit: 162,
      lesson: 4,
      title: "Building and digging",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read 耕 (to till), 構 (structure), 講 (lecture), 鉱 (ore), and the words 構成 and 鉱山.",
      items: [
        { id: "ja-u162l4-8015", type: "kanji", front: "耕", reading: "kō", meaning: "to till", example: { jp: "おじいさんは 毎日 畑を 耕して います。", en: "My grandfather tills the field every day." }, accept: ["to cultivate", "to plough"], hint: "耕す (tagayasu) = to work the soil. The left half is 耒, an old word for a plough." },
        { id: "ja-u162l4-69cb", type: "kanji", front: "構", reading: "kō", meaning: "structure", example: { jp: "作文の 構成を もう 一度 考えなおしました。", en: "I rethought the structure of my essay once more." }, accept: ["to construct", "to mind"], hint: "構える = to set up a stance; 構う (kamau) = to mind/bother. 構成 = how a thing is put together." },
        { id: "ja-u162l4-8b1b", type: "kanji", front: "講", reading: "kō", meaning: "lecture", example: { jp: "夏休みに えいごの 講習を 受けました。", en: "I took an English course over the summer holidays." }, accept: ["course", "to lecture"], hint: "講 = a formal talk or course. 講義 = a university lecture, 講習 = a short training course." },
        { id: "ja-u162l4-9271", type: "kanji", front: "鉱", reading: "kō", meaning: "ore", example: { jp: "この あたりには むかし 鉱山が たくさん ありました。", en: "Long ago there were many mines around here." }, accept: ["mineral", "a mine"], hint: "鉱 = ore in the ground — the 金 radical for metal beside 広. 鉱物 = a mineral, 鉱山 = a mine." },
        { id: "ja-u162l4-kosei", type: "vocab", front: "構成", reading: "kōsei", meaning: "composition", example: { jp: "この チームは 若い 人を 中心に 構成されて います。", en: "This team is made up mainly of young people." }, accept: ["makeup", "structure"] },
        { id: "ja-u162l4-kozan", type: "vocab", front: "鉱山", reading: "kōzan", meaning: "a mine", example: { jp: "その 鉱山では むかし 金や 銀を とって いました。", en: "At that mine they used to take out gold and silver." }, accept: ["a pit", "a mining site"] },
      ],
    },
  ],
};
