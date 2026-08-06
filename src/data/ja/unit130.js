// JA Unit 130 — かんじ・N3・17 (N3 kanji, set 17) — B1 / JLPT N3
// Glyph ownership and card shape are documented in unit119.js: slice 17 of the
// 20-way split of the untaught N3 pool, 4 lessons x (4 kanji + 2 compound).
//
// Documented scope exception, lesson 4: 貿 has essentially one compound in modern
// Japanese — 貿易 — and 易 is neither taught yet nor anywhere in the N3 pool. Every
// other example in this block uses only glyphs introduced at or before its unit;
// this one cannot, because writing 貿 in any real sentence requires 易. Teaching
// the glyph with a made-up collocation would be worse than the exception, so 易
// appears here once, and the hint names it explicitly.
export const UNIT130 = {
  id: "ja-u130",
  lang: "ja",
  title: "かんじ・N3・17",
  order: 130,
  stage: "b1",
  lessons: [
    {
      id: "ja-u130l1",
      unit: 130,
      lesson: 1,
      title: "Flat, powdered, shut",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 仏 (Buddha), 粉 (powder), 平 (flat), 閉 (close), and the words 平気 and 仏教.",
      items: [
        { id: "ja-u130l1-hotoke", type: "kanji", front: "仏", reading: "butsu", meaning: "Buddha", example: { jp: "古い仏の前で、しずかに休みました。", en: "I rested quietly in front of the old Buddha." }, accept: ["Buddhist", "the Buddha", "image of Buddha"], hint: "仏 = 人 (person) + 厶 — the figure people gather before. 仏教 = Buddhism, お仏だん = a household altar." },
        { id: "ja-u130l1-kona", type: "kanji", front: "粉", reading: "kona", meaning: "powder", example: { jp: "粉を水に入れてから、よくまぜます。", en: "Put the powder in the water, and then mix it well." }, accept: ["flour", "dust", "ground"], hint: "粉 = 米 (rice) + 分 (divide) — grain broken down small. 小麦粉 = flour." },
        { id: "ja-u130l1-taira", type: "kanji", front: "平", reading: "hei", meaning: "flat", example: { jp: "平らな道が続くので、歩きやすいです。", en: "The road stays flat, so it's easy to walk." }, accept: ["level", "even", "peaceful"], hint: "平 = a surface with everything at one height. 平気 = unbothered, 平和 = peace: no bumps." },
        { id: "ja-u130l1-shimeru", type: "kanji", front: "閉", reading: "hei", meaning: "close", example: { jp: "店は八時に閉まりますが、朝は早く開きます。", en: "The shop closes at eight, but it opens early in the morning." }, accept: ["shut", "shut down", "closed"], hint: "閉 = 門 (a gate) with a bar across it. The opposite of 開. Same へい sound as 平." },
        { id: "ja-u130l1-heiki", type: "vocab", front: "平気", reading: "heiki", meaning: "unbothered", example: { jp: "一人でも平気ですが、たまにさびしくなります。", en: "I'm fine on my own, but now and then I get lonely." }, accept: ["fine with it", "calm", "doesn't mind"] },
        { id: "ja-u130l1-bukkyo", type: "vocab", front: "仏教", reading: "bukkyō", meaning: "Buddhism", example: { jp: "仏教の話は難しいですが、聞くのはすきです。", en: "Talks on Buddhism are difficult, but I like listening to them." }, accept: ["Buddhist teaching", "the Buddhist religion"] },
      ],
    },
    {
      id: "ja-u130l2",
      unit: 130,
      lesson: 2,
      title: "Lined up, and changing",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 並 (line up), 米 (rice), 辺 (vicinity), 変 (change), and the words 米国 and 並木.",
      items: [
        { id: "ja-u130l2-narabu", type: "kanji", front: "並", reading: "nami", meaning: "line up", example: { jp: "人が長く並んでいましたが、私は入りませんでした。", en: "People were lined up a long way, but I didn't go in." }, accept: ["stand in a row", "queue", "ordinary"], hint: "並 = two things standing side by side at the same height. 並びます = to queue, 並木 = a row of roadside trees." },
        { id: "ja-u130l2-kome", type: "kanji", front: "米", reading: "kome", meaning: "rice", example: { jp: "新しい米はおいしいですが、少し高いです。", en: "New rice is delicious, but it's a little expensive." }, accept: ["uncooked rice", "America"], hint: "米 = grains scattered from a stalk. Also stands for America (米国) — from the old spelling 亜米利加." },
        { id: "ja-u130l2-atari", type: "kanji", front: "辺", reading: "hen", meaning: "vicinity", example: { jp: "この辺には店が少ないですが、こまってはいません。", en: "There aren't many shops around here, but I'm not stuck." }, accept: ["around here", "area", "edge"], hint: "辺 = 辶 (go) + 刀 — as far around as you'd walk. この辺 = around here, 海辺 = the seaside." },
        { id: "ja-u130l2-kawaru", type: "kanji", front: "変", reading: "hen", meaning: "change", example: { jp: "町の色は変わりましたが、人はあまり変わりません。", en: "The colour of the town has changed, but the people haven't much." }, accept: ["strange", "alter", "odd"], hint: "変 = something turned into something else. 変わります = to change; 変な = strange. Same へん as 辺." },
        { id: "ja-u130l2-beikoku", type: "vocab", front: "米国", reading: "beikoku", meaning: "the United States", example: { jp: "米国に住んでいましたが、日本語はわすれませんでした。", en: "I lived in the United States, but I didn't forget my Japanese." }, accept: ["America", "the USA", "the States"] },
        { id: "ja-u130l2-namiki", type: "vocab", front: "並木", reading: "namiki", meaning: "roadside trees", example: { jp: "春の並木はきれいですが、秋はもっといいです。", en: "The roadside trees are lovely in spring, but autumn is better still." }, accept: ["tree-lined avenue", "a row of trees"] },
      ],
    },
    {
      id: "ja-u130l3",
      unit: 130,
      lesson: 3,
      title: "Sending back, calling for",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 返 (give back), 便 (service/post), 募 (recruit), 報 (report), and the words 返品 and 募集.",
      items: [
        { id: "ja-u130l3-kaesu", type: "kanji", front: "返", reading: "hen", meaning: "give back", example: { jp: "本を返してから、新しいのを借りました。", en: "I gave the book back, and then borrowed a new one." }, accept: ["return", "hand back", "reply"], hint: "返 = 辶 (go) + 反 (turn back) — sending it the way it came. 返事 = a reply: words sent back." },
        { id: "ja-u130l3-bin", type: "kanji", front: "便", reading: "bin", meaning: "service", example: { jp: "毎日の便は一度だけですが、時間は正しいです。", en: "There is only one service a day, but it runs on time." }, accept: ["post", "flight", "convenience"], hint: "便 = 人 (person) + 更 — what makes life go smoothly. 便利 = convenient; 便 on its own = a mail or flight service." },
        { id: "ja-u130l3-tsunoru", type: "kanji", front: "募", reading: "bo", meaning: "recruit", example: { jp: "新しい人を募っていますが、まだだれも来ません。", en: "We're recruiting new people, but nobody has come yet." }, accept: ["call for", "invite applications", "raise"], hint: "募 = 力 (effort) put into gathering people in. 募集 = a call for applicants." },
        { id: "ja-u130l3-ho", type: "kanji", front: "報", reading: "hō", meaning: "report", example: { jp: "天気の報を聞いてから、出かけます。", en: "I listen to the weather report, and then go out." }, accept: ["news", "inform", "requite"], hint: "報 = news carried back to whoever is waiting. 天気報 → 天気予報 = the forecast, 情報 = information." },
        { id: "ja-u130l3-henpin", type: "vocab", front: "返品", reading: "henpin", meaning: "returning goods", example: { jp: "返品はできますが、お金はもどりません。", en: "You can return the goods, but the money doesn't come back." }, accept: ["a return", "sending it back"] },
        { id: "ja-u130l3-boshu", type: "vocab", front: "募集", reading: "boshū", meaning: "recruitment", example: { jp: "募集は先週おわりましたが、まだ人が足りません。", en: "The recruitment ended last week, but there still aren't enough people." }, accept: ["a call for applicants", "hiring", "advertising for"] },
      ],
    },
    {
      id: "ja-u130l4",
      unit: 130,
      lesson: 4,
      title: "Plenty, defence, force",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 豊 (abundant), 防 (defend), 貿 (trade), 暴 (violent), and the words 豊作 and 暴力.",
      items: [
        { id: "ja-u130l4-yutaka", type: "kanji", front: "豊", reading: "hō", meaning: "abundant", example: { jp: "土地が豊かなので、米がよくできます。", en: "The land is abundant, so rice grows well." }, accept: ["rich", "plentiful", "fertile"], hint: "豊 = a vessel heaped high with grain. 豊か = rich or plentiful, 豊作 = a good harvest." },
        { id: "ja-u130l4-fusegu", type: "kanji", front: "防", reading: "bō", meaning: "defend", example: { jp: "火を防ぐために、水を用意しました。", en: "To guard against fire, we got water ready." }, accept: ["prevent", "guard against", "protect"], hint: "防 = 阝 (an embankment) + 方 — a wall put up on the side trouble comes from. 予防 = prevention." },
        { id: "ja-u130l4-bo", type: "kanji", front: "貿", reading: "bō", meaning: "trade", example: { jp: "貿易の会社ではたらいていますが、外国語はまだ下手です。", en: "I work at a trading company, but my foreign languages are still poor." }, accept: ["commerce", "trading", "import-export"], hint: "貿 = 貝 (money) changing hands across a border. In practice it appears only in 貿易 = foreign trade — the 易 there is the one kanji in this block you haven't met yet." },
        { id: "ja-u130l4-abareru", type: "kanji", front: "暴", reading: "bō", meaning: "violent", example: { jp: "暴力は何も生みませんが、なくすのは難しいです。", en: "Violence produces nothing, but getting rid of it is difficult." }, accept: ["rough", "outburst", "reveal"], hint: "暴 = the sun beating down without mercy. 暴力 = violence, 暴風 = a violent wind." },
        { id: "ja-u130l4-hosaku", type: "vocab", front: "豊作", reading: "hōsaku", meaning: "a good harvest", example: { jp: "今年は豊作でしたが、ねだんは安くなりました。", en: "This year was a good harvest, but the prices went down." }, accept: ["bumper crop", "rich harvest"] },
        { id: "ja-u130l4-boryoku", type: "vocab", front: "暴力", reading: "bōryoku", meaning: "violence", example: { jp: "暴力はゆるされませんが、はなしあいは時間がかかります。", en: "Violence isn't permitted, but talking things through takes time." }, accept: ["force", "brutality", "physical force"] },
      ],
    },
  ],
};
