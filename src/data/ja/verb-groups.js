// Verb conjugation-group classification — PREP for the conjugation card.
// ─────────────────────────────────────────────────────────────────────────────
// Every ～ます verb across A1 + A2, classified by its dictionary form into the three
// Japanese conjugation groups. This is the data the conjugation engine keys off (see
// BUILD-BRIEF-conjugation-card.md). It's PREP: once the contract adds a `group` field
// to items, apply these tags to the verb items (match by front), then this file is
// folded in / deleted. Front → group, so it's readable and unique-keyed.
//   godan    (u-verbs / 五段):   のむ, かく, いく…      te-form: い/っ/んで by ending
//   ichidan  (ru-verbs / 一段):  たべる, みる, おきる… te-form: drop る + て
//   irregular:                   する, くる (+ する-compounds)
// ─────────────────────────────────────────────────────────────────────────────

export const VERB_GROUPS = {
  // ---- irregular (する / くる + する-compounds) ----
  "きます": "irregular",            // 来る
  "そうじします": "irregular",      // 掃除する
  "せんたくします": "irregular",    // 洗濯する
  "りょこうします": "irregular",    // 旅行する
  "せつめいします": "irregular",    // 説明する
  "しつもんします": "irregular",    // 質問する
  "ちこくします": "irregular",      // 遅刻する
  "けいかくします": "irregular",    // 計画する
  "おねがいします": "irregular",    // お願いする

  // ---- ichidan (一段 / ru-verbs — stem + る) ----
  "おきます": "ichidan",   // 起きる
  "ねます": "ichidan",     // 寝る
  "たべます": "ichidan",   // 食べる
  "みます": "ichidan",     // 見る
  "います": "ichidan",     // いる (animate exist)
  "あけます": "ichidan",   // 開ける
  "しめます": "ichidan",   // 閉める
  "つけます": "ichidan",   // 付ける
  "かたづけます": "ichidan", // 片付ける
  "すてます": "ichidan",   // 捨てる
  "こたえます": "ichidan", // 答える
  "おしえます": "ichidan", // 教える
  "おります": "ichidan",   // 降りる
  "でかけます": "ichidan", // 出かける
  "むかえます": "ichidan", // 迎える
  "おぼえます": "ichidan", // 覚える
  "わすれます": "ichidan", // 忘れる
  "しらべます": "ichidan", // 調べる
  "まちがえます": "ichidan", // 間違える
  "やめます": "ichidan",   // 辞める
  "つかれます": "ichidan", // 疲れる
  "たおれます": "ichidan", // 倒れる
  "やせます": "ichidan",   // 痩せる
  "そだてます": "ichidan", // 育てる
  "かります": "ichidan",   // 借りる
  "あげます": "ichidan",   // 上げる / あげる (give)
  "ならべます": "ichidan", // 並べる
  "あつめます": "ichidan", // 集める
  "ながれます": "ichidan", // 流れる

  // ---- godan (五段 / u-verbs — everything else) ----
  "のみます": "godan",     // 飲む
  "よみます": "godan",     // 読む
  "かきます": "godan",     // 書く
  "いきます": "godan",     // 行く   (te-form irregular: いって)
  "かえります": "godan",   // 帰る   (looks -eru but is godan)
  "かいます": "godan",     // 買う
  "はなします": "godan",   // 話す
  "ききます": "godan",     // 聞く
  "あいます": "godan",     // 会う
  "わかります": "godan",   // 分かる
  "ちがいます": "godan",   // 違う
  "つくります": "godan",   // 作る
  "つかいます": "godan",   // 使う
  "けします": "godan",     // 消す
  "あります": "godan",     // ある  (negative is irregular: ない)
  "のります": "godan",     // 乗る
  "すみます": "godan",     // 住む
  "はたらきます": "godan", // 働く
  "あそびます": "godan",   // 遊ぶ
  "やすみます": "godan",   // 休む
  "ならいます": "godan",   // 習う
  "あるきます": "godan",   // 歩く
  "はしります": "godan",   // 走る  (looks -iru but is godan)
  "およぎます": "godan",   // 泳ぐ
  "のぼります": "godan",   // 登る
  "わたります": "godan",   // 渡る
  "とまります": "godan",   // 泊まる / 止まる
  "あらいます": "godan",   // 洗う
  "なおします": "godan",   // 直す
  "おくります": "godan",   // 送る
  "てつだいます": "godan", // 手伝う
  "さがします": "godan",   // 探す
  "ならびます": "godan",   // 並ぶ
  "うたいます": "godan",   // 歌う
  "おどります": "godan",   // 踊る
  "とります": "godan",     // 取る / 撮る
  "いそぎます": "godan",   // 急ぐ
  "つきます": "godan",     // 着く
  "とどきます": "godan",   // 届く
  "まがります": "godan",   // 曲がる
  "かよいます": "godan",   // 通う
  "まにあいます": "godan", // 間に合う
  "がんばります": "godan", // 頑張る
  "なおります": "godan",   // 治る
  "ふとります": "godan",   // 太る  (looks -iru but is godan)
  "なきます": "godan",     // 泣く
  "さきます": "godan",     // 咲く
  "ふきます": "godan",     // 吹く
  "うごきます": "godan",   // 動く
  "とびます": "godan",     // 飛ぶ
  "はらいます": "godan",   // 払う
  "かします": "godan",     // 貸す
  "えらびます": "godan",   // 選ぶ
  "うります": "godan",     // 売る
  "もらいます": "godan",   // もらう
  "つつみます": "godan",   // 包む
  "します": "irregular",   // する — do (base compound verb from U9; engine conjugates it)
};

// Sanity: 95 verbs — 10 irregular, 29 ichidan, 56 godan.
// The tricky "looks-ichidan-but-godan" verbs are flagged inline: 帰る, 走る, 太る
// (and 入る, 知る, 要る elsewhere) — the classic exceptions the conjugation engine
// must NOT infer from the ending alone; that's exactly why the group is tagged data.

// The group for a verb item's ～ます front, or undefined if it isn't a tagged verb.
// Kept from main — the seed (src/data/index.js) stamps groups through this helper.
export const groupFor = (front) => VERB_GROUPS[front];
