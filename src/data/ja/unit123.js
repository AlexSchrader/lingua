// JA Unit 123 — かんじ・かたち (N3 kanji — shape and materials) — B1 / JLPT N3
// Glyph ownership and card shape are documented in unit119.js: slice 13 of the
// pool that remains once block 1's authored 160 glyphs are subtracted.
//
// 警 was swapped with u125's 参 for the same reason 規 moved out of u121: 警 has no
// everyday word that avoids 察 (警察) or 官 (警官), 官 is taught by nobody, and 察
// sits in u125. Putting 警 beside 察 costs nothing and avoids a scope exception.
export const UNIT123 = {
  id: "ja-u123",
  lang: "ja",
  title: "かんじ・かたち",
  order: 123,
  stage: "b1",
  lessons: [
    {
      id: "ja-u123l1",
      unit: 123,
      lesson: 1,
      title: "Shape, scenery, passing through",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 型 (type), 景 (scenery), 経 (pass through), 参 (go, humble), and the words 風景 and 参考.",
      items: [
        { id: "ja-u123l1-kata", type: "kanji", front: "型", reading: "kata", meaning: "type", example: { jp: "この型の車は古いですが、まだよく走ります。", en: "This model of car is old, but it still runs well." }, accept: ["model", "mould", "pattern"], hint: "型 = 土 (earth) pressed into a form. 大型 = large-size, 新型 = a new model." },
        { id: "ja-u123l1-kei", type: "kanji", front: "景", reading: "kei", meaning: "scenery", example: { jp: "山の風景がきれいで、しばらく立ったまま見ていました。", en: "The mountain scenery was beautiful, and I stood looking at it for a while." }, accept: ["view", "scene", "landscape"], hint: "景 = 日 (sun) over 京 (the capital) — a wide lit view. 風景 = scenery, 景色 = a view." },
        { id: "ja-u123l1-heru", type: "kanji", front: "経", reading: "tatsu", meaning: "pass through", example: { jp: "五年が経って、やっと日本語が分かるようになりました。", en: "Five years passed, and at last I came to understand Japanese." }, accept: ["elapse", "manage", "undergo"], hint: "経 = 糸 (thread) running the length of the cloth. 時が経ちます = time passes; 経理 = the running of the accounts." },
        { id: "ja-u123l1-san", type: "kanji", front: "参", reading: "mairu", meaning: "go (humble)", example: { jp: "会に参ってから、みんなに名前をおぼえてもらいました。", en: "After I attended the gathering, everyone came to know my name." }, accept: ["come (humble)", "take part", "refer to"], hint: "参 = joining the group. 参加 = participation, 参考 = a reference you consult." },
        { id: "ja-u123l1-fukei", type: "vocab", front: "風景", reading: "fūkei", meaning: "scenery", example: { jp: "まどからの風景がよかったので、その部屋にきめました。", en: "The view from the window was good, so I settled on that room." }, accept: ["landscape", "the view", "scene"] },
        { id: "ja-u123l1-sanko", type: "vocab", front: "参考", reading: "sankō", meaning: "reference", example: { jp: "参考にしてから、じぶんのやり方でやりました。", en: "I used it as a reference, and then did it my own way." }, accept: ["consultation", "a guide", "for reference"] },
      ],
    },
    {
      id: "ja-u123l2",
      unit: 123,
      lesson: 2,
      title: "Meeting, missing, deciding",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 迎 (welcome), 欠 (lack), 決 (decide), 件 (matter), and the words 決心 and 用件.",
      items: [
        { id: "ja-u123l2-mukaeru", type: "kanji", front: "迎", reading: "mukaeru", meaning: "welcome", example: { jp: "駅まで迎えに行ったのに、時間をまちがえました。", en: "I went to meet them at the station, but I got the time wrong." }, accept: ["greet", "go to meet", "receive"], hint: "迎 = 辶 (go) out towards someone who is arriving. 迎えに行きます = to go and pick someone up." },
        { id: "ja-u123l2-kaku", type: "kanji", front: "欠", reading: "kakeru", meaning: "lack", example: { jp: "一人が欠けても、しあいはできました。", en: "Even with one person missing, we could still play the match." }, accept: ["be absent", "chip", "be short of"], hint: "欠 = a person with their mouth open — something is missing. 欠点 = a shortcoming." },
        { id: "ja-u123l2-kimeru", type: "kanji", front: "決", reading: "kimeru", meaning: "decide", example: { jp: "行くと決めてから、きっぷを買いました。", en: "I decided to go, and then bought the ticket." }, accept: ["settle", "determine", "resolve"], hint: "決 = 氵 (water) breaking through a bank — the moment it goes one way. 決心 = making up one's mind. Its on-yomi is けつ, like 欠." },
        { id: "ja-u123l2-ken", type: "kanji", front: "件", reading: "ken", meaning: "matter", example: { jp: "その件は今日はもうおそいので、明日話します。", en: "It's late today, so I'll talk about that matter tomorrow." }, accept: ["case", "item", "affair"], hint: "件 = 人 (person) + 牛 (ox) — one countable piece of business. 用件 = the matter you came about." },
        { id: "ja-u123l2-kesshin", type: "vocab", front: "決心", reading: "kesshin", meaning: "resolve", example: { jp: "決心はしたのに、家族にはまだ言えません。", en: "I've made up my mind, but I can't tell my family yet." }, accept: ["determination", "making up one's mind"] },
        { id: "ja-u123l2-yoken", type: "vocab", front: "用件", reading: "yōken", meaning: "the business at hand", example: { jp: "用件だけ言うつもりが、あとで長く話しました。", en: "I meant to say only what I'd come about, and we ended up talking at length." }, accept: ["what one has come about", "the matter", "one's errand"] },
      ],
    },
    {
      id: "ja-u123l3",
      unit: 123,
      lesson: 3,
      title: "Now, towards, luck",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 現 (present), 向 (face towards), 幸 (fortune), 号 (number), and the words 現代 and 幸運.",
      items: [
        { id: "ja-u123l3-gen", type: "kanji", front: "現", reading: "arawareru", meaning: "present", example: { jp: "知らない人が現れて、みんなおどろきました。", en: "A stranger appeared, and everyone was startled." }, accept: ["appear", "actual", "current"], hint: "現 = 王 (jewel) + 見 (see) — what is visible right now. 現れます = to appear, 現代 = the present age." },
        { id: "ja-u123l3-muku", type: "kanji", front: "向", reading: "mukau", meaning: "face towards", example: { jp: "駅に向かって歩いたら、道をまちがえました。", en: "I set off walking towards the station and took the wrong road." }, accept: ["turn to", "suit", "direction"], hint: "向 = a window in a wall, facing out. 向かいます = to head towards; 向いています = to be suited to." },
        { id: "ja-u123l3-saiwai", type: "kanji", front: "幸", reading: "saiwai", meaning: "fortune", example: { jp: "幸いけがはありませんでしたが、車はこわれました。", en: "Fortunately nobody was hurt, but the car was wrecked." }, accept: ["happiness", "luckily", "blessing"], hint: "幸 = read as the good luck of escaping harm. 幸せ = happy, 幸運 = good fortune. Its on-yomi is こう, like 向." },
        { id: "ja-u123l3-go", type: "kanji", front: "号", reading: "gō", meaning: "number", example: { jp: "この本は五月号なので、もう店にはありません。", en: "This is the May issue, so it's no longer in the shops." }, accept: ["issue", "sign", "call"], hint: "号 = a called-out sign. 番号 = a number, 一号 = No. 1, 信号 = a traffic light." },
        { id: "ja-u123l3-gendai", type: "vocab", front: "現代", reading: "gendai", meaning: "the present age", example: { jp: "現代のおんがくは速くて、耳がついていきません。", en: "Music today is so fast my ears can't keep up." }, accept: ["modern times", "today", "contemporary"] },
        { id: "ja-u123l3-koun", type: "vocab", front: "幸運", reading: "kōun", meaning: "good fortune", example: { jp: "幸運だけでなく、実力もありました。", en: "It wasn't only good fortune — there was real ability too." }, accept: ["luck", "a lucky break", "being fortunate"] },
      ],
    },
    {
      id: "ja-u123l4",
      unit: 123,
      lesson: 4,
      title: "Roots, festivals, materials",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read 根 (root), 祭 (festival), 細 (fine), 材 (material), and the words 祭日 and 材料.",
      items: [
        { id: "ja-u123l4-ne", type: "kanji", front: "根", reading: "ne", meaning: "root", example: { jp: "木の根が長いので、風にも強いです。", en: "The tree's roots are long, so it stands up to wind too." }, accept: ["origin", "base", "perseverance"], hint: "根 = 木 (tree) + 艮 — what holds the tree down. 屋根 = a roof, 根気 = staying power." },
        { id: "ja-u123l4-matsuri", type: "kanji", front: "祭", reading: "matsuri", meaning: "festival", example: { jp: "夏祭りは人が多すぎるので、あさ早く行きます。", en: "The summer festival gets too crowded, so I go early in the morning." }, accept: ["celebration", "rite", "fete"], hint: "祭 = a hand offering meat 月 at an altar 示. お祭り = a festival, 祭日 = a public holiday." },
        { id: "ja-u123l4-hosoi", type: "kanji", front: "細", reading: "hosoi", meaning: "fine", example: { jp: "細い道が続きますが、車も通れます。", en: "The narrow road goes on, but cars can get through too." }, accept: ["narrow", "slender", "detailed"], hint: "細 = 糸 (thread) — as thin as thread. 細かい = fine or detailed. Its on-yomi is さい, like 祭." },
        { id: "ja-u123l4-zai", type: "kanji", front: "材", reading: "zai", meaning: "material", example: { jp: "材料が高くなったので、家の作りをかえました。", en: "Materials got expensive, so we changed how the house was built." }, accept: ["timber", "stuff", "talent"], hint: "材 = 木 (wood) + 才 — the stuff a thing is made from. 材料 = ingredients, 人材 = human talent." },
        { id: "ja-u123l4-saijitsu", type: "vocab", front: "祭日", reading: "saijitsu", meaning: "a public holiday", example: { jp: "祭日は休みなので、家でゆっくりします。", en: "It's a public holiday, so I take it easy at home." }, accept: ["national holiday", "feast day"] },
        { id: "ja-u123l4-zairyo", type: "vocab", front: "材料", reading: "zairyō", meaning: "ingredients", example: { jp: "材料はそろったのに、時間が足りません。", en: "I have all the ingredients, but there isn't enough time." }, accept: ["materials", "the makings", "raw material"] },
      ],
    },
  ],
};
