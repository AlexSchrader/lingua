// Unit 196 — ごい・N3・カタカナ・1 ("N3 loanwords 1") — B1 / JLPT N3 katakana loanwords.
// type:"vocab" — recognition/recall test the meaning. The target loanword is written in
// its katakana form; everything else is basic N5/N4 kana, です/ます register, no spaces.
// Multi-word meanings carry an accept synonym so type cards don't reject valid answers.
export const UNIT196 = {
  id: "ja-u196", lang: "ja", title: "ごい・N3・カタカナ・1", order: 196, stage: "b1",
  lessons: [
    {
      id: "ja-u196l1", unit: 196, lesson: 1, title: "N3 loanwords 1·1", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: ジェット機 (jet plane), スイッチ (switch), スケジュール (schedule), スター (star), スタンド (stand), セット (set).",
      items: [
        { id: "ja-u196l1-jettoki", type: "vocab", front: "ジェット機", reading: "jettoki", meaning: "jet plane", example: { jp: "ジェット機はとてもはやいです。", en: "A jet plane is very fast." }, accept: ["jet", "jet aircraft"] },
        { id: "ja-u196l1-suitchi", type: "vocab", front: "スイッチ", reading: "suitchi", meaning: "switch", example: { jp: "でんきのスイッチをいれます。", en: "I turn on the light switch." }, accept: [] },
        { id: "ja-u196l1-sukejuru", type: "vocab", front: "スケジュール", reading: "sukejūru", meaning: "schedule", example: { jp: "きょうのスケジュールをかくにんします。", en: "I check today's schedule." }, accept: ["plan"] },
        { id: "ja-u196l1-suta", type: "vocab", front: "スター", reading: "sutā", meaning: "star", example: { jp: "かのじょはゆうめいなスターです。", en: "She is a famous star." }, accept: ["celebrity"], hint: "スター = a star / celebrity, not a star in the sky (that's ほし・星)." },
        { id: "ja-u196l1-sutando", type: "vocab", front: "スタンド", reading: "sutando", meaning: "stand", example: { jp: "つくえにスタンドをおきます。", en: "I put a lamp stand on the desk." }, accept: ["lamp"] },
        { id: "ja-u196l1-setto", type: "vocab", front: "セット", reading: "setto", meaning: "set", example: { jp: "あさごはんのセットをちゅうもんします。", en: "I order the breakfast set." }, accept: ["combo"] },
      ],
    },
    {
      id: "ja-u196l2", unit: 196, lesson: 2, title: "N3 loanwords 1·2", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: アイスクリーム (ice cream), アウト (out), アルバム (album), イメージ (image), インク (ink), ウイスキー (whiskey).",
      items: [
        { id: "ja-u196l2-aisukurimu", type: "vocab", front: "アイスクリーム", reading: "aisukurīmu", meaning: "ice cream", example: { jp: "なつにアイスクリームをたべます。", en: "I eat ice cream in summer." }, accept: ["ice-cream"] },
        { id: "ja-u196l2-auto", type: "vocab", front: "アウト", reading: "auto", meaning: "out", example: { jp: "やきゅうでランナーがアウトになりました。", en: "The runner was out in baseball." }, accept: [], hint: "アウト = out (baseball/tennis, or informally 'no good'). Opposite: セーフ." },
        { id: "ja-u196l2-arubamu", type: "vocab", front: "アルバム", reading: "arubamu", meaning: "album", example: { jp: "むかしのしゃしんをアルバムにいれます。", en: "I put old photos in the album." }, accept: [] },
        { id: "ja-u196l2-imeji", type: "vocab", front: "イメージ", reading: "imēji", meaning: "image", example: { jp: "このまちはあかるいイメージです。", en: "This town has a bright image." }, accept: ["impression"] },
        { id: "ja-u196l2-inku", type: "vocab", front: "インク", reading: "inku", meaning: "ink", example: { jp: "ペンのインクがなくなりました。", en: "The pen ran out of ink." }, accept: [] },
        { id: "ja-u196l2-uisuki", type: "vocab", front: "ウイスキー", reading: "uisukī", meaning: "whiskey", example: { jp: "ちちはウイスキーがすきです。", en: "My father likes whiskey." }, accept: ["whisky"] },
      ],
    },
    {
      id: "ja-u196l3", unit: 196, lesson: 3, title: "N3 loanwords 1·3", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: エンジン (engine), オフィス (office), カー (car), キャプテン (captain), クラシック (classical), グランド (ground).",
      items: [
        { id: "ja-u196l3-enjin", type: "vocab", front: "エンジン", reading: "enjin", meaning: "engine", example: { jp: "くるまのエンジンをかけます。", en: "I start the car's engine." }, accept: [] },
        { id: "ja-u196l3-ofisu", type: "vocab", front: "オフィス", reading: "ofisu", meaning: "office", example: { jp: "あさはやくオフィスにいきます。", en: "I go to the office early in the morning." }, accept: [] },
        { id: "ja-u196l3-ka", type: "vocab", front: "カー", reading: "kā", meaning: "car", example: { jp: "あたらしいスポーツカーがほしいです。", en: "I want a new sports car." }, accept: [], hint: "カー = car — usually in compounds like スポーツカー or マイカー, rarely alone." },
        { id: "ja-u196l3-kyaputen", type: "vocab", front: "キャプテン", reading: "kyaputen", meaning: "captain", example: { jp: "かれはチームのキャプテンです。", en: "He is the team's captain." }, accept: ["leader"] },
        { id: "ja-u196l3-kurashikku", type: "vocab", front: "クラシック", reading: "kurashikku", meaning: "classical", example: { jp: "わたしはクラシックがすきです。", en: "I like classical music." }, accept: ["classic", "classical music"] },
        { id: "ja-u196l3-gurando", type: "vocab", front: "グランド", reading: "gurando", meaning: "ground", example: { jp: "こうこうのグランドでやきゅうをします。", en: "I play baseball on the school ground." }, accept: ["field", "grand"], hint: "グランド (=グラウンド) = a sports ground / field; can also mean 'grand'." },
      ],
    },
    {
      id: "ja-u196l4", unit: 196, lesson: 4, title: "N3 loanwords 1·4", cefr: "B1", dominantMode: "recall",
      canDo: "Use six N3 words: クリスマス (Christmas), グループ (group), ケース (case), コーチ (coach), コード (code), ゴール (goal).",
      items: [
        { id: "ja-u196l4-kurisumasu", type: "vocab", front: "クリスマス", reading: "kurisumasu", meaning: "christmas", example: { jp: "クリスマスにプレゼントをもらいます。", en: "I get presents at Christmas." }, accept: [] },
        { id: "ja-u196l4-gurupu", type: "vocab", front: "グループ", reading: "gurūpu", meaning: "group", example: { jp: "グループでしゅくだいをします。", en: "We do homework in a group." }, accept: ["team"] },
        { id: "ja-u196l4-kesu", type: "vocab", front: "ケース", reading: "kēsu", meaning: "case", example: { jp: "めがねをケースにいれます。", en: "I put my glasses in the case." }, accept: ["container"] },
        { id: "ja-u196l4-kochi", type: "vocab", front: "コーチ", reading: "kōchi", meaning: "coach", example: { jp: "サッカーのコーチはやさしいです。", en: "The soccer coach is kind." }, accept: ["trainer"] },
        { id: "ja-u196l4-kodo", type: "vocab", front: "コード", reading: "kōdo", meaning: "code", example: { jp: "ひみつのコードをおしえます。", en: "I tell the secret code." }, accept: ["cord", "chord"] },
        { id: "ja-u196l4-goru", type: "vocab", front: "ゴール", reading: "gōru", meaning: "goal", example: { jp: "マラソンのゴールがみえました。", en: "I could see the marathon's finish line." }, accept: ["finish line"] },
      ],
    },
  ],
};
