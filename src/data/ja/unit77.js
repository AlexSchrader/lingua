// Unit 77 — かんじ・けいようし ("Kanji — adjectives & qualities") — B1 / JLPT N3  ★ DRAFT — NOT LIVE ★
// NOT registered in index.js. Activate only once A2 is reconciled + B1 greenlit.
// N3 adjective kanji, many hooking onto known adjectives: 広い→ひろい, 硬い→かたい,
// 柔らかい→やわらかい, 若い→わかい, 豊か→ゆたか, 静か→しずか, 危ない→あぶない…
// KanjiVG strokes required (KANJI_N3). Naturalness → native review.
export const UNIT77 = {
  id: "ja-u77", lang: "ja", title: "かんじ・けいようし", order: 77, stage: "b1",
  lessons: [
    {
      id: "ja-u77l1", unit: 77, lesson: 1, title: "Size & shape", cefr: "B1", dominantMode: "recall",
      canDo: "Read size kanji: 太 細 広 狭 厚 硬.",
      items: [
        { id: "ja-u77l1-futoi", type: "kanji", front: "太", reading: "futoi", meaning: "thick / fat", example: { jp: "太いえんぴつです。", en: "It's a thick pencil." }, accept: ["bold", "plump"], hint: "太 = thick / fat. 太い (ふとい). 大 (big) with a dot. ⇄ 細い." },
        { id: "ja-u77l1-hosoi", type: "kanji", front: "細", reading: "hosoi", meaning: "thin / fine", example: { jp: "細いみちです。", en: "It's a narrow path." }, accept: ["slender", "detailed"], hint: "細 = thin / fine. 細い (ほそい) = slender; 細かい (こまかい) = detailed. 糸 radical." },
        { id: "ja-u77l1-hiroi", type: "kanji", front: "広", reading: "hiroi", meaning: "wide / spacious", example: { jp: "広いへやです。", en: "It's a spacious room." }, accept: ["broad", "vast"], hint: "広 = wide / spacious. 広い (ひろい). ⇄ 狭い. In 広告 (こうこく, ad)." },
        { id: "ja-u77l1-semai", type: "kanji", front: "狭", reading: "semai", meaning: "narrow / cramped", example: { jp: "狭いへやです。", en: "It's a cramped room." }, accept: ["tight"], hint: "狭 = narrow / cramped. 狭い (せまい). ⇄ 広い. ⺨ radical." },
        { id: "ja-u77l1-atsui", type: "kanji", front: "厚", reading: "atsui", meaning: "thick (flat things)", example: { jp: "厚いほんです。", en: "It's a thick book." }, accept: ["deep (kindness)"], hint: "厚 = thick (of flat things). 厚い (あつい) = thick. ⇄ 薄い. In 厚着 (dressing warmly)." },
        { id: "ja-u77l1-katai", type: "kanji", front: "硬", reading: "katai", meaning: "hard / stiff", example: { jp: "硬いパンです。", en: "It's hard bread." }, accept: ["rigid"], hint: "硬 = hard / stiff. 硬い (かたい) = hard. ⇄ 柔らかい. 石 (stone) radical." },
      ],
    },
    {
      id: "ja-u77l2", unit: 77, lesson: 2, title: "Texture & age", cefr: "B1", dominantMode: "recall",
      canDo: "Read quality kanji: 柔 若 老 幼 賢 偉.",
      items: [
        { id: "ja-u77l2-yawarakai", type: "kanji", front: "柔", reading: "yawarakai", meaning: "soft / flexible", example: { jp: "柔らかいパンです。", en: "It's soft bread." }, accept: ["gentle", "supple"], hint: "柔 = soft / flexible. 柔らかい (やわらかい). ⇄ 硬い. In 柔道 (じゅうどう, judo)." },
        { id: "ja-u77l2-wakai", type: "kanji", front: "若", reading: "wakai", meaning: "young", example: { jp: "若いうちにべんきょうします。", en: "I study while I'm young." }, accept: ["youthful"], hint: "若 = young. 若い (わかい). ⺾ (grass) on top." },
        { id: "ja-u77l2-oiru", type: "kanji", front: "老", reading: "oiru", meaning: "grow old", example: { jp: "老人にせきをゆずります。", en: "I give my seat to an elderly person." }, accept: ["aged", "elderly"], hint: "老 = grow old. In 老人 (ろうじん, elderly person). ⇄ 若い." },
        { id: "ja-u77l2-osanai", type: "kanji", front: "幼", reading: "osanai", meaning: "very young / infant", example: { jp: "幼いこどもです。", en: "It's a very young child." }, accept: ["childish"], hint: "幼 = very young / infant. 幼い (おさない). In 幼稚園 (ようちえん, kindergarten)." },
        { id: "ja-u77l2-kashikoi", type: "kanji", front: "賢", reading: "kashikoi", meaning: "wise / clever", example: { jp: "賢いこどもです。", en: "It's a clever child." }, accept: ["smart"], hint: "賢 = wise / clever. 賢い (かしこい). 貝 (shell/money) at the bottom." },
        { id: "ja-u77l2-erai", type: "kanji", front: "偉", reading: "erai", meaning: "great / admirable", example: { jp: "偉い人です。", en: "He's a great person." }, accept: ["eminent"], hint: "偉 = great / admirable. 偉い (えらい). In 偉人 (いじん, a great figure). 亻 radical." },
      ],
    },
    {
      id: "ja-u77l3", unit: 77, lesson: 3, title: "Wealth & worth", cefr: "B1", dominantMode: "recall",
      canDo: "Read value kanji: 貧 富 豊 貴 良 険.",
      items: [
        { id: "ja-u77l3-mazushii", type: "kanji", front: "貧", reading: "mazushii", meaning: "poor", example: { jp: "貧しいくらしです。", en: "It's a poor way of life." }, accept: ["needy"], hint: "貧 = poor. 貧しい (まずしい). ⇄ 富む. 貝 (money) at the bottom." },
        { id: "ja-u77l3-tomu", type: "kanji", front: "富", reading: "tomu", meaning: "be rich / wealth", example: { jp: "富んだくにです。", en: "It's a wealthy country." }, accept: ["abundant", "fortune"], hint: "富 = be rich / wealth. 富む (とむ). In 富士山 (Mt. Fuji). 宀 (roof) radical." },
        { id: "ja-u77l3-yutaka", type: "kanji", front: "豊", reading: "yutaka", meaning: "abundant / rich", example: { jp: "豊かなせいかつです。", en: "It's an abundant life." }, accept: ["plentiful"], hint: "豊 = abundant / rich. 豊か (ゆたか) — the word you know. In 豊作 (good harvest)." },
        { id: "ja-u77l3-toutoi", type: "kanji", front: "貴", reading: "ki", meaning: "precious / noble", example: { jp: "貴重なけいけんです。", en: "It's a precious experience." }, accept: ["valuable", "esteemed"], hint: "貴 = precious / noble. In 貴重 (きちょう, precious). 貝 (money) at the bottom." },
        { id: "ja-u77l3-yoi", type: "kanji", front: "良", reading: "yoi", meaning: "good / fine", example: { jp: "良いてんきです。", en: "It's good weather." }, accept: ["nice", "favorable"], hint: "良 = good / fine. 良い (よい / いい). In 良心 (りょうしん, conscience)." },
        { id: "ja-u77l3-ken", type: "kanji", front: "険", reading: "ken", meaning: "steep / risky", example: { jp: "けんこう保険にはいります。", en: "I get health insurance." }, accept: ["danger"], hint: "険 = steep / risky. In 保険 (ほけん, insurance), 危険 (きけん, danger). ⻖ radical." },
      ],
    },
    {
      id: "ja-u77l4", unit: 77, lesson: 4, title: "State & quality", cefr: "B1", dominantMode: "recall",
      canDo: "Read state kanji: 静 清 汚 危 鋭 鈍.",
      items: [
        { id: "ja-u77l4-shizuka", type: "kanji", front: "静", reading: "shizuka", meaning: "quiet / calm", example: { jp: "静かなへやです。", en: "It's a quiet room." }, accept: ["still", "peaceful"], hint: "静 = quiet / calm. 静か (しずか) — the word you know. ⇄ にぎやか." },
        { id: "ja-u77l4-kiyoi", type: "kanji", front: "清", reading: "kiyoi", meaning: "clear / pure", example: { jp: "清いみずです。", en: "It's clean water." }, accept: ["clean", "pure"], hint: "清 = clear / pure. 清い (きよい). In 清潔 (せいけつ, cleanliness). 氵 radical." },
        { id: "ja-u77l4-kitanai", type: "kanji", front: "汚", reading: "kitanai", meaning: "dirty", example: { jp: "汚いへやです。", en: "It's a dirty room." }, accept: ["filthy", "soiled"], hint: "汚 = dirty. 汚い (きたない) = dirty; 汚れる (よごれる) = to get dirty. 氵 radical." },
        { id: "ja-u77l4-abunai", type: "kanji", front: "危", reading: "abunai", meaning: "dangerous", example: { jp: "危ないですから、きをつけてください。", en: "It's dangerous, so please be careful." }, accept: ["risky"], hint: "危 = dangerous. 危ない (あぶない) = dangerous. In 危険 (きけん, danger)." },
        { id: "ja-u77l4-surudoi", type: "kanji", front: "鋭", reading: "surudoi", meaning: "sharp", example: { jp: "鋭いナイフです。", en: "It's a sharp knife." }, accept: ["keen", "acute"], hint: "鋭 = sharp. 鋭い (するどい). ⇄ 鈍い. 金 (metal) radical." },
        { id: "ja-u77l4-nibui", type: "kanji", front: "鈍", reading: "nibui", meaning: "dull / slow", example: { jp: "鈍いいたみです。", en: "It's a dull pain." }, accept: ["blunt"], hint: "鈍 = dull / slow. 鈍い (にぶい). ⇄ 鋭い. 金 (metal) radical." },
      ],
    },
  ],
};
