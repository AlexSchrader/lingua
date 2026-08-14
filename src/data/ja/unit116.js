// Unit 116 — へんか・じかん (Change over time) — B1 / JLPT N3
// Strand B, last thematic unit of block 1. Change as a shape rather than an event:
// things growing and shrinking (はってん／せいちょう／げんしょう), the adverbs that pace a
// change (しだいに／やがて／いつのまにか), placing it in time (いぜん／いご／かつて／とうじ),
// and looking back on it (ふりかえる／みなおす／けいか).
// へんか, かわります, ふえます, さいきん and しょうらい are taught below B1 and appear here in
// examples only. lang/unit/lesson are stamped in src/data/index.js.
export const UNIT116 = {
  id: "ja-u116",
  lang: "ja",
  title: "へんか・じかん",
  order: 116,
  stage: "b1",
  lessons: [
    {
      id: "ja-u116l1",
      unit: 116,
      lesson: 1,
      title: "Growing and shrinking",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe something getting bigger or smaller over time: はってん せいちょう げんしょう のびる かさなる たまる.",
      items: [
        { id: "ja-u116l1-hatten", type: "vocab", front: "はってん", reading: "hatten", meaning: "development", example: { jp: "この まちは じゅうねんで おおきく はってんして、みせも ふえました。", en: "This town developed a lot in ten years, and the shops increased too." }, accept: ["growth", "to develop", "expansion"] },
        { id: "ja-u116l1-seicho", type: "vocab", front: "せいちょう", reading: "seichō", meaning: "growth", example: { jp: "こどもの せいちょうは はやくて、ふくが すぐ ちいさく なります。", en: "Children's growth is fast, and their clothes get too small right away." }, accept: ["growing up", "to grow", "maturing"], hint: "せいちょう is a living thing growing; はってん is a town, company or country developing." },
        { id: "ja-u116l1-gensho", type: "vocab", front: "げんしょう", reading: "genshō", meaning: "decrease", example: { jp: "まちの じんこうの げんしょうが つづいて いて、がっこうも すくなく なりました。", en: "The town's population decline is continuing, and there are fewer schools too." }, accept: ["reduction", "falling off", "to decrease"] },
        { id: "ja-u116l1-nobiru", type: "vocab", front: "のびる", reading: "nobiru", meaning: "to stretch", example: { jp: "かいぎの じかんが のびて、かえりが おそく なりました。", en: "The meeting ran long, and I got home late." }, accept: ["to extend", "to grow longer", "to be postponed"] },
        { id: "ja-u116l1-kasanaru", type: "vocab", front: "かさなる", reading: "kasanaru", meaning: "to overlap", example: { jp: "しごとと しけんが かさなって、とても いそがしいです。", en: "Work and the exam overlapped, and I'm very busy." }, accept: ["to pile up", "to coincide", "to be on top of"] },
        { id: "ja-u116l1-tamaru", type: "vocab", front: "たまる", reading: "tamaru", meaning: "to accumulate", example: { jp: "しごとが たまって いますから、しゅうまつも はたらきます。", en: "Work has piled up, so I'm working at the weekend too." }, accept: ["to build up", "to collect", "to pile up"] },
      ],
    },
    {
      id: "ja-u116l2",
      unit: 116,
      lesson: 2,
      title: "How fast it changes",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Pace a change — gradual, sudden, or before you noticed: しだいに ようやく いつのまにか まもなく やがて おとろえる.",
      items: [
        { id: "ja-u116l2-shidaini", type: "vocab", front: "しだいに", reading: "shidaini", meaning: "gradually", example: { jp: "そらが しだいに くらく なって、あめが ふって きました。", en: "The sky gradually darkened, and it started to rain." }, accept: ["little by little", "steadily", "bit by bit"], hint: "しだいに is the written form of だんだん — same meaning, more formal register." },
        { id: "ja-u116l2-yoyaku", type: "vocab", front: "ようやく", reading: "yōyaku", meaning: "at last", example: { jp: "ながい かいぎが ようやく おわって、みんな かえりました。", en: "The long meeting ended at last, and everyone went home." }, accept: ["finally", "at length", "eventually"] },
        { id: "ja-u116l2-itsunomanika", type: "vocab", front: "いつのまにか", reading: "itsunomanika", meaning: "before you know it", example: { jp: "はなして いる うちに、いつのまにか よるに なりました。", en: "While we were talking, night fell before we knew it." }, accept: ["without noticing", "somewhere along the way"] },
        { id: "ja-u116l2-mamonaku", type: "vocab", front: "まもなく", reading: "mamonaku", meaning: "shortly", example: { jp: "でんしゃは まもなく つきますから、じゅんびして ください。", en: "The train arrives shortly, so please get ready." }, accept: ["soon", "before long", "in a moment"] },
        { id: "ja-u116l2-yagate", type: "vocab", front: "やがて", reading: "yagate", meaning: "in time", example: { jp: "あめは やがて とまって、そらが あかるく なりました。", en: "In time the rain stopped, and the sky brightened." }, accept: ["eventually", "by and by", "before long"] },
        { id: "ja-u116l2-otoroeru", type: "vocab", front: "おとろえる", reading: "otoroeru", meaning: "to weaken", example: { jp: "としを とると ちからは おとろえますが、けいけんは ふえます。", en: "As you get older your strength weakens, but your experience grows." }, accept: ["to decline", "to fade", "to grow weak"] },
      ],
    },
    {
      id: "ja-u116l3",
      unit: 116,
      lesson: 3,
      title: "Placing it in time",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say when something was true, relative to now: いぜん いご かつて げんざい とうじ ながねん.",
      items: [
        { id: "ja-u116l3-izen", type: "vocab", front: "いぜん", reading: "izen", meaning: "previously", example: { jp: "いぜんは ここに おおきな みせが ありましたが、いまは ありません。", en: "There used to be a big shop here, but now there isn't." }, accept: ["before", "formerly", "in the past"] },
        { id: "ja-u116l3-igo", type: "vocab", front: "いご", reading: "igo", meaning: "from then on", example: { jp: "その ひ いご、いちども あって いません。", en: "Since that day, we haven't met once." }, accept: ["after", "hereafter", "onwards"], hint: "いぜん and いご are a pair and attach to a time point: その ひ いご = from that day on. For a future starting point people usually say いこう." },
        { id: "ja-u116l3-katsute", type: "vocab", front: "かつて", reading: "katsute", meaning: "once", example: { jp: "かつて この まちには でんしゃが はしって いましたが、いまは バスだけです。", en: "Trains once ran in this town, but now there are only buses." }, accept: ["formerly", "at one time", "in former days"] },
        { id: "ja-u116l3-genzai", type: "vocab", front: "げんざい", reading: "genzai", meaning: "at present", example: { jp: "げんざい この みせは やすんで いますが、らいげつ また あきます。", en: "At present this shop is closed, but it opens again next month." }, accept: ["now", "currently", "the present"] },
        { id: "ja-u116l3-toji", type: "vocab", front: "とうじ", reading: "tōji", meaning: "at that time", example: { jp: "とうじは まだ こどもでしたから、よく おぼえて いません。", en: "I was still a child at that time, so I don't remember it well." }, accept: ["back then", "in those days"] },
        { id: "ja-u116l3-naganen", type: "vocab", front: "ながねん", reading: "naganen", meaning: "for many years", example: { jp: "ちちは ながねん おなじ かいしゃで はたらいて いて、ことし やめます。", en: "My father has worked at the same company for many years, and retires this year." }, accept: ["a long time", "over the years"] },
      ],
    },
    {
      id: "ja-u116l4",
      unit: 116,
      lesson: 4,
      title: "Looking back",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Review something that has changed and say what became of it: ふりかえる みなおす くりかえす なくなる うつる けいか.",
      items: [
        { id: "ja-u116l4-furikaeru", type: "vocab", front: "ふりかえる", reading: "furikaeru", meaning: "to look back", example: { jp: "ことしを ふりかえると、いろいろな ことが ありました。", en: "Looking back on this year, a lot happened." }, accept: ["to reflect on", "to turn around", "to review"] },
        { id: "ja-u116l4-minaosu", type: "vocab", front: "みなおす", reading: "minaosu", meaning: "to review", example: { jp: "けいかくを みなおしてから、もう いちど はなしましょう。", en: "Let's review the plan, then talk again." }, accept: ["to reconsider", "to take another look", "to reassess"] },
        { id: "ja-u116l4-kurikaesu", type: "vocab", front: "くりかえす", reading: "kurikaesu", meaning: "to repeat", example: { jp: "おなじ まちがいを くりかえさない ように、メモを して います。", en: "So as not to repeat the same mistake, I take notes." }, accept: ["to do again", "to go over again"] },
        { id: "ja-u116l4-nakunaru", type: "vocab", front: "なくなる", reading: "nakunaru", meaning: "to disappear", example: { jp: "まちの ふるい みせが なくなって、すこし さびしく なりました。", en: "The town's old shop is gone, and it feels a little lonely." }, accept: ["to be gone", "to run out", "to cease to exist"] },
        { id: "ja-u116l4-utsuru", type: "vocab", front: "うつる", reading: "utsuru", meaning: "to move", example: { jp: "らいげつ あたらしい いえに うつりますから、じゅんびが たいへんです。", en: "I move to a new house next month, so preparing is hard work." }, accept: ["to relocate", "to shift", "to transfer"] },
        { id: "ja-u116l4-keika", type: "vocab", front: "けいか", reading: "keika", meaning: "passage (of time)", example: { jp: "あれから ながい じかんが けいかしましたが、まだ よく おぼえて います。", en: "A long time has passed since then, but I still remember it well." }, accept: ["progress", "course", "elapsing"] },
      ],
    },
  ],
};
