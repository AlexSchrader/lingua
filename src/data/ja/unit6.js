// Unit 6 — カタカナ゛゜ (katakana dakuten / handakuten)
// The voiced katakana — same dakuten (゛) and handakuten (゜) trick the learner
// already met for hiragana in Unit 3, now applied to the katakana shapes from
// Units 4-5. No brand-new glyphs: カ + ゛ → ガ, ハ + ゜ → パ. With this unit the
// katakana script is complete, so the loanword vocab can finally use voiced
// sounds (ゲーム, ビール, ピザ), and the example sentences still reuse only the
// grammar from Units 1-3. 5 rows: g / z / d / b (dakuten) + p (handakuten).
// lang/unit/lesson stamped in index.js.
export const UNIT6 = {
  id: "ja-u6",
  lang: "ja",
  title: "カタカナ゛゜",
  order: 6,
  stage: "pre-a1",
  lessons: [
    // Lesson 1: g-row ガ ギ グ ゲ ゴ (voiced カ row)
    {
      id: "ja-u6l1",
      unit: 6,
      lesson: 1,
      title: "Katakana g-row (dakuten)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana g-row ガ ギ グ ゲ ゴ — the か-row katakana plus dakuten, just like が was か + ゛.",
      items: [
        { id: "ja-u6l1-ga", type: "kana", front: "ガ", reading: "ga", meaning: null, example: null, hint: "ガ is カ + ゛ — the same dakuten trick from Unit 3, now on katakana. The two dashes voice KA into GA." },
        { id: "ja-u6l1-gi", type: "kana", front: "ギ", reading: "gi", meaning: null, example: null, hint: "ギ is キ + ゛. KI voices into GI." },
        { id: "ja-u6l1-gu", type: "kana", front: "グ", reading: "gu", meaning: null, example: null, hint: "グ is ク + ゛. KU voices into GU." },
        { id: "ja-u6l1-ge", type: "kana", front: "ゲ", reading: "ge", meaning: null, example: null, hint: "ゲ is ケ + ゛. KE voices into GE." },
        { id: "ja-u6l1-go", type: "kana", front: "ゴ", reading: "go", meaning: null, example: null, hint: "ゴ is コ + ゛. KO voices into GO." },
        { id: "ja-u6l1-gamu", type: "vocab", front: "ガム", reading: "gamu", meaning: "gum", example: { jp: "ガムをたべます。", en: "I chew gum." }, drill: { jp: "ガムをかいます。", en: "I buy gum." }, accept: ["chewing gum", "a gum", "bubble gum"], hint: "GA-mu — two beats; ガ is カ with the dakuten, a hard g as in go. The u on the end is there because Japanese cannot finish a word on m. Japanese says ガムをたべます, to eat gum, where English chews it." },
        { id: "ja-u6l1-gita", type: "vocab", front: "ギター", reading: "gitā", meaning: "guitar", example: { jp: "ギターがすきです。", en: "I like the guitar." }, drill: { jp: "あたらしいギターです。", en: "It's a new guitar." }, accept: ["guitars", "a guitar", "acoustic guitar"], hint: "gi-TAH — three beats: gi-ta-a, with the ー holding the last vowel. ギ is a hard g, never a j. You PLAY it with ひきます, to pull — the same verb Japanese uses for the piano." },
        { id: "ja-u6l1-gurasu", type: "vocab", front: "グラス", reading: "gurasu", meaning: "glass", example: { jp: "グラスがあります。", en: "There is a glass." }, drill: { jp: "グラスのミルクをのみます。", en: "I drink the glass of milk." }, accept: ["drinking glass", "glasses", "a glass", "tumbler"], hint: "gu-RA-su — three beats, tapped r. ⚠️ A グラス is a drinking glass. Spectacles are めがね, and glass the material is ガラス — one vowel apart, and shops really do stock both words." },
        { id: "ja-u6l1-gemu", type: "vocab", front: "ゲーム", reading: "gēmu", meaning: "game", example: { jp: "ゲームをします。", en: "I play a game." }, drill: { jp: "ゲームはたのしいです。", en: "Games are fun." }, accept: ["games", "video game", "a game", "match"], hint: "GEH-mu — three beats: ge-e-mu, the ー holding the first vowel. Covers board games, sport matches and video games alike. A console game is a テレビゲーム, a TV ゲーム, which is how Japanese named the whole category." },
        { id: "ja-u6l1-gorufu", type: "vocab", front: "ゴルフ", reading: "gorufu", meaning: "golf", example: { jp: "ゴルフをします。", en: "I play golf." }, drill: { jp: "ゴルフがすきです。", en: "I like golf." }, accept: ["a round of golf", "playing golf", "the golf course"], hint: "GO-ru-fu — three beats, tapped r for the l, and a ふ added because Japanese cannot end on f. Played with します. Driving ranges stacked three storeys high are a Japanese city sight." },
        { id: "ja-u6l1-hanga", type: "vocab", front: "ハンガー", reading: "hangā", meaning: "hanger", example: { jp: "ハンガーがあります。", en: "There is a hanger." }, drill: { jp: "ハンガーはどこですか。", en: "Where is the hanger?" }, accept: ["clothes hanger", "hangers", "a hanger", "coat hanger"], hint: "HAN-gah — four beats: ha-n-ga-a, the ン held and the ー doing the English -er. ⚠️ ハ has no dakuten here but ガ does — the two sit side by side in one short word, which is the whole point of this lesson." },
      ],
    },
    // Lesson 2: z-row ザ ジ ズ ゼ ゾ (voiced サ row)
    {
      id: "ja-u6l2",
      unit: 6,
      lesson: 2,
      title: "Katakana z-row (dakuten)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana z-row ザ ジ ズ ゼ ゾ; ジ is the katakana 'ji'.",
      items: [
        { id: "ja-u6l2-za", type: "kana", front: "ザ", reading: "za", meaning: null, example: null, hint: "ザ is サ + ゛. SA voices into ZA." },
        { id: "ja-u6l2-ji", type: "kana", front: "ジ", reading: "ji", meaning: null, example: null, hint: "ジ is シ + ゛. SHI voices into JI — the katakana twin of じ." },
        { id: "ja-u6l2-zu", type: "kana", front: "ズ", reading: "zu", meaning: null, example: null, hint: "ズ is ス + ゛. SU voices into ZU." },
        { id: "ja-u6l2-ze", type: "kana", front: "ゼ", reading: "ze", meaning: null, example: null, hint: "ゼ is セ + ゛. SE voices into ZE." },
        { id: "ja-u6l2-zo", type: "kana", front: "ゾ", reading: "zo", meaning: null, example: null, hint: "ゾ is ソ + ゛. SO voices into ZO." },
        { id: "ja-u6l2-piza", type: "vocab", front: "ピザ", reading: "piza", meaning: "pizza", example: { jp: "ピザをたべます。", en: "I eat pizza." }, drill: { jp: "ピザにチーズがあります。", en: "There is cheese on the pizza." }, accept: ["pizzas", "a pizza", "pizza pie", "slice of pizza"], hint: "PI-za — two beats. ピ carries the handakuten, the little circle, for p; ザ carries the dakuten for a buzzed z. Two different marks in a two-kana word. Japanese ピザ often comes topped with corn and mayonnaise." },
        { id: "ja-u6l2-jusu", type: "vocab", front: "ジュース", reading: "jūsu", meaning: "juice", example: { jp: "ジュースをのみます。", en: "I drink juice." }, drill: { jp: "オレンジジュースをかいます。", en: "I buy orange juice." }, accept: ["a juice", "fruit juice", "juices"], hint: "JOO-su — three beats: ju-u-su. ジュ is one sound, and the ー holds it. ⚠️ In Japan ジュース loosely covers any sweet soft drink, so it is not a promise of real fruit — look for かじゅう on the label." },
        { id: "ja-u6l2-chizu", type: "vocab", front: "チーズ", reading: "chīzu", meaning: "cheese", example: { jp: "チーズをたべます。", en: "I eat cheese." }, drill: { jp: "チーズとパンをたべます。", en: "I eat bread and cheese." }, accept: ["a cheese", "cheeses", "sliced cheese"], hint: "CHEE-zu — three beats: chi-i-zu, the ー holding the first vowel, ズ buzzed. ⚠️ Said aloud it is the same as ちず, a map, in hiragana — the katakana and the length mark are what separate them on the page." },
        { id: "ja-u6l2-zero", type: "vocab", front: "ゼロ", reading: "zero", meaning: "zero", example: { jp: "ゼロからはじめます。", en: "I start from zero." }, drill: { jp: "ゼロはすうじです。", en: "Zero is a number." }, accept: ["nought", "none", "nil", "a zero"], hint: "ZE-ro — two beats, ゼ buzzed, tapped r. Japanese also has native words for it: れい in formal counting and まる, circle, when reading out a phone number. ゼロ is the everyday arithmetic one." },
        { id: "ja-u6l2-rizoto", type: "vocab", front: "リゾート", reading: "rizōto", meaning: "resort", example: { jp: "リゾートにいきます。", en: "I go to a resort." }, drill: { jp: "リゾートはしずかです。", en: "The resort is quiet." }, accept: ["resorts", "a resort", "holiday resort"], hint: "ri-ZOH-to — four beats: ri-zo-o-to, tapped r, ゾ buzzed, the ー holding the o. ⚠️ Keep it apart from リゾット, risotto, which swaps the ー for a held ッ — one mark, one very different holiday." },
        { id: "ja-u6l2-jinzu", type: "vocab", front: "ジーンズ", reading: "jīnzu", meaning: "jeans", example: { jp: "ジーンズがすきです。", en: "I like jeans." }, drill: { jp: "あおいジーンズです。", en: "They are blue jeans." }, accept: ["denim", "jean", "a pair of jeans", "denims"], hint: "JEEN-zu — four beats: ji-i-n-zu, with the ー holding the ji and the ン its own beat. Grammatically singular in Japanese: ジーンズ is one garment, so there is no pair of to translate." },
      ],
    },
    // Lesson 3: d-row ダ ヂ ヅ デ ド (voiced タ row). ヂ ヅ are essentially unused
    // in modern Japanese (ジ/ズ cover those sounds), taught for completeness.
    {
      id: "ja-u6l3",
      unit: 6,
      lesson: 3,
      title: "Katakana d-row (dakuten)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana d-row ダ デ ド; recognize the rare ヂ ヅ.",
      items: [
        { id: "ja-u6l3-da", type: "kana", front: "ダ", reading: "da", meaning: null, example: null, hint: "ダ is タ + ゛. TA voices into DA." },
        { id: "ja-u6l3-ji", type: "kana", front: "ヂ", reading: "ji", meaning: null, example: null, hint: "ヂ is チ + ゛ — sounds just like ジ (JI). Almost never used today; recognize it, but write the sound with ジ." },
        { id: "ja-u6l3-zu", type: "kana", front: "ヅ", reading: "zu", meaning: null, example: null, hint: "ヅ is ツ + ゛ — sounds just like ズ (ZU). Almost never used today; recognize it, but write the sound with ズ." },
        { id: "ja-u6l3-de", type: "kana", front: "デ", reading: "de", meaning: null, example: null, hint: "デ is テ + ゛. TE voices into DE." },
        { id: "ja-u6l3-do", type: "kana", front: "ド", reading: "do", meaning: null, example: null, hint: "ド is ト + ゛. TO voices into DO." },
        { id: "ja-u6l3-dansu", type: "vocab", front: "ダンス", reading: "dansu", meaning: "dance", example: { jp: "ダンスをします。", en: "I dance." }, drill: { jp: "クラスでダンスをします。", en: "We dance in class." }, accept: ["dancing", "dances", "a dance", "to dance"], hint: "DAN-su — three beats: da-n-su, ダ voiced from タ. A noun, so it needs します to become the verb. Traditional Japanese dance is おどり, a native word, and ダンス is the Western kind." },
        { id: "ja-u6l3-saida", type: "vocab", front: "サイダー", reading: "saidā", meaning: "soda", example: { jp: "サイダーをのみます。", en: "I drink soda." }, drill: { jp: "サイダーはあまいです。", en: "The soda is sweet." }, accept: ["cider", "lemonade", "soda pop", "fizzy drink"], hint: "sai-DAH — four beats: sa-i-da-a. ⚠️ FALSE FRIEND, and a sober one: Japanese サイダー is clear sweet lemonade with no alcohol in it at all. Apple cider is シードル, from the French." },
        { id: "ja-u6l3-depato", type: "vocab", front: "デパート", reading: "depāto", meaning: "department store", example: { jp: "デパートにいきます。", en: "I go to the department store." }, drill: { jp: "デパートでセーターをかいます。", en: "I buy a sweater at the department store." }, accept: ["department stores", "a department store", "big store"], hint: "de-PAH-to — four beats: de-pa-a-to. A Japanese clipping of department store that keeps only the first two syllables. The food hall in the basement is the ちかしょくひんがい, and it is the best floor." },
        { id: "ja-u6l3-deto", type: "vocab", front: "デート", reading: "dēto", meaning: "date", example: { jp: "デートをします。", en: "I go on a date." }, drill: { jp: "どようびにデートをします。", en: "I go on a date on Saturday." }, accept: ["dates", "outing", "a date", "going out"], hint: "DEH-to — three beats: de-e-to, the ー holding the first vowel. ⚠️ The romantic kind only. A calendar date is ひづけ and a day is ひ, so デート never means the number on the page." },
        { id: "ja-u6l3-doa", type: "vocab", front: "ドア", reading: "doa", meaning: "door", example: { jp: "ドアがあります。", en: "There is a door." }, drill: { jp: "ドアはしろいです。", en: "The door is white." }, accept: ["doors", "a door", "doorway"], hint: "DO-a — two beats, both vowels sounded separately: do-a. ⚠️ Used for a hinged Western door. A sliding paper one is a ふすま or a しょうじ, and a sliding glass one is still a ドア." },
        { id: "ja-u6l3-sandoitchi", type: "vocab", front: "サンドイッチ", reading: "sandoitchi", meaning: "sandwich", example: { jp: "サンドイッチをたべます。", en: "I eat a sandwich." }, drill: { jp: "ハムのサンドイッチです。", en: "It's a ham sandwich." }, accept: ["sandwiches", "sarnie", "a sandwich", "butty"], hint: "san-do-IT-chi — six beats: sa-n-do-i-t-chi, with the ン and the ッ each holding one. The longest word in the unit, and every beat counts. Convenience stores sell them crustless, which Japanese calls サンドイッチ all the same." },
      ],
    },
    // Lesson 4: b-row バ ビ ブ ベ ボ (voiced ハ row)
    {
      id: "ja-u6l4",
      unit: 6,
      lesson: 4,
      title: "Katakana b-row (dakuten)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana b-row バ ビ ブ ベ ボ — the ハ-row plus dakuten.",
      items: [
        { id: "ja-u6l4-ba", type: "kana", front: "バ", reading: "ba", meaning: null, example: null, hint: "バ is ハ + ゛. HA voices into BA." },
        { id: "ja-u6l4-bi", type: "kana", front: "ビ", reading: "bi", meaning: null, example: null, hint: "ビ is ヒ + ゛. HI voices into BI." },
        { id: "ja-u6l4-bu", type: "kana", front: "ブ", reading: "bu", meaning: null, example: null, hint: "ブ is フ + ゛. FU voices into BU." },
        { id: "ja-u6l4-be", type: "kana", front: "ベ", reading: "be", meaning: null, example: null, hint: "ベ is ヘ + ゛. HE voices into BE. (ヘ and ベ keep the same simple slope.)" },
        { id: "ja-u6l4-bo", type: "kana", front: "ボ", reading: "bo", meaning: null, example: null, hint: "ボ is ホ + ゛. HO voices into BO." },
        { id: "ja-u6l4-basu", type: "vocab", front: "バス", reading: "basu", meaning: "bus", example: { jp: "バスでいきます。", en: "I go by bus." }, drill: { jp: "バスにのります。", en: "I ride the bus." }, accept: ["buses", "a bus", "coach", "busses"], hint: "BA-su — two beats, バ voiced from ハ. ⚠️ Identical in katakana to バス meaning a bath (バスルーム) and to the musical bass — three English words, one Japanese spelling, separated only by context." },
        { id: "ja-u6l4-biru", type: "vocab", front: "ビール", reading: "bīru", meaning: "beer", example: { jp: "ビールをのみます。", en: "I drink beer." }, drill: { jp: "ビールとワインがあります。", en: "There is beer and wine." }, accept: ["beers", "a beer", "lager", "draught beer"], hint: "BEE-ru — three beats: bi-i-ru, the ー holding the first vowel. 🚨 THE LENGTH MARK IS THE WHOLE WORD: ビル, one beat shorter, is a building, and it is taught in this same lesson. Draught is なまビール." },
        { id: "ja-u6l4-teburu", type: "vocab", front: "テーブル", reading: "tēburu", meaning: "table", example: { jp: "テーブルがあります。", en: "There is a table." }, drill: { jp: "テーブルにごはんがあります。", en: "There is a meal on the table." }, accept: ["tables", "a table", "dining table"], hint: "TEH-bu-ru — four beats: te-e-bu-ru. ブ is voiced for the English b and the final ru stands in for the l. A low Japanese-style table is a ちゃぶだい, and the heated winter one is a こたつ." },
        { id: "ja-u6l4-beddo", type: "vocab", front: "ベッド", reading: "beddo", meaning: "bed", example: { jp: "ベッドがあります。", en: "There is a bed." }, drill: { jp: "ベッドはおおきいです。", en: "The bed is big." }, accept: ["beds", "a bed", "bedstead"], hint: "BED-do — three beats, the small ッ holding a beat before the d: be-d-do. ⚠️ Drop the ッ and ベド is nothing. A futon laid on tatami is a ふとん, never a ベッド, even though you sleep on both." },
        { id: "ja-u6l4-botan", type: "vocab", front: "ボタン", reading: "botan", meaning: "button", example: { jp: "ボタンがあります。", en: "There is a button." }, drill: { jp: "ワイシャツのボタンです。", en: "It's the shirt's button." }, accept: ["buttons", "a button", "press button", "switch"], hint: "bo-TAN — three beats: bo-ta-n. Does both English jobs: the one on your shirt and the one you press in a lift. ⚠️ Written the same as the flower ぼたん, a peony, which is a native word in hiragana." },
        { id: "ja-u6l4-biru2", type: "vocab", front: "ビル", reading: "biru", meaning: "building (a multi-storey block)", example: { jp: "たかいビルです。", en: "It's a tall building." }, drill: { jp: "ビルにエアコンがあります。", en: "The building has air conditioning." }, accept: ["buildings", "tower block", "a building", "office block"], hint: "BI-ru — two beats, and that is the point: 🚨 ビール, with the length mark, is BEER, taught in this same lesson. ビル is a clipping of building, so it means a multi-storey block — a house is an いえ." },
      ],
    },
    // Lesson 5: p-row パ ピ プ ペ ポ (handakuten — the small circle ゜)
    {
      id: "ja-u6l5",
      unit: 6,
      lesson: 5,
      title: "Katakana p-row (handakuten)",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Read the katakana p-row パ ピ プ ペ ポ; the small circle ゜ (not dashes) makes the P sound. Katakana is now complete.",
      items: [
        { id: "ja-u6l5-pa", type: "kana", front: "パ", reading: "pa", meaning: null, example: null, hint: "パ is ハ + ゜ — a small circle, not dashes. The circle makes P: HA → PA. (Dashes ゛ would give BA.)" },
        { id: "ja-u6l5-pi", type: "kana", front: "ピ", reading: "pi", meaning: null, example: null, hint: "ピ is ヒ + ゜. HI → PI." },
        { id: "ja-u6l5-pu", type: "kana", front: "プ", reading: "pu", meaning: null, example: null, hint: "プ is フ + ゜. FU → PU." },
        { id: "ja-u6l5-pe", type: "kana", front: "ペ", reading: "pe", meaning: null, example: null, hint: "ペ is ヘ + ゜. HE → PE." },
        { id: "ja-u6l5-po", type: "kana", front: "ポ", reading: "po", meaning: null, example: null, hint: "ポ is ホ + ゜. HO → PO. That completes katakana — you can now read both kana scripts." },
        { id: "ja-u6l5-pan", type: "vocab", front: "パン", reading: "pan", meaning: "bread", example: { jp: "パンをたべます。", en: "I eat bread." }, drill: { jp: "パンをかいます。", en: "I buy bread." }, accept: ["a loaf", "rolls", "baked bread", "loaf of bread"], hint: "PAN — two beats, the ン held: pa-n. Handakuten パ for the p. ⚠️ From Portuguese pão, not from English, which is why it is bread and not a frying pan — that is a フライパン." },
        { id: "ja-u6l5-piano", type: "vocab", front: "ピアノ", reading: "piano", meaning: "piano", example: { jp: "ピアノがすきです。", en: "I like the piano." }, drill: { jp: "ピアノのクラスにいきます。", en: "I go to piano class." }, accept: ["pianos", "a piano", "keyboard", "grand piano"], hint: "pi-A-no — three beats, each vowel sounded: pi-a-no, never pee-AN-oh. Handakuten ピ for the p. Played with ひきます, to pull, the same verb as the ギター in this unit." },
        { id: "ja-u6l5-puru", type: "vocab", front: "プール", reading: "pūru", meaning: "pool", example: { jp: "プールにいきます。", en: "I go to the pool." }, drill: { jp: "プールでうんどうをします。", en: "I exercise at the pool." }, accept: ["swimming pool", "pools", "a pool", "the baths"], hint: "POO-ru — three beats: pu-u-ru, the ー holding the first vowel. ⚠️ The swimming kind only; a pool of water on the ground is a みずたまり. Many Japanese schools have an outdoor one used only in summer." },
        { id: "ja-u6l5-pen", type: "vocab", front: "ペン", reading: "pen", meaning: "pen", example: { jp: "ペンがあります。", en: "There is a pen." }, drill: { jp: "ペンでなまえをかきます。", en: "I write my name with a pen." }, accept: ["pens", "a pen", "ballpoint", "biro"], hint: "PEN — two beats, the ン held: pe-n. Handakuten ペ. A ballpoint is a ボールペン and a felt tip is a サインペン, built from the サイン you already know — both keep ペン at the end." },
        { id: "ja-u6l5-posuto", type: "vocab", front: "ポスト", reading: "posuto", meaning: "mailbox", example: { jp: "ポストはどこですか。", en: "Where is the mailbox?" }, drill: { jp: "ポストはあかいです。", en: "The mailbox is red." }, accept: ["post box", "postbox", "mail box", "letter box"], hint: "PO-su-to — three beats, handakuten ポ, the u added so the s can stand alone. ⚠️ The street one you post letters INTO. A home letterbox is a ゆうびんうけ. Japanese street ポスト are bright red." },
        { id: "ja-u6l5-supa", type: "vocab", front: "スーパー", reading: "sūpā", meaning: "supermarket", example: { jp: "スーパーにいきます。", en: "I go to the supermarket." }, drill: { jp: "スーパーでくだものをかいます。", en: "I buy fruit at the supermarket." }, accept: ["grocery store", "supermarkets", "a supermarket", "grocery"], hint: "SOO-pah — four beats: su-u-pa-a, with a length mark at each end. Clipped from supermarket. ⚠️ Keep it apart from スープ, soup, from the katakana unit — same first two beats, different ending." },
      ],
    },
  ],
};
