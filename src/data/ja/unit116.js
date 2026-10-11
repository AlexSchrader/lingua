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
        { id: "ja-u116l1-hatten", type: "vocab", front: "はってん", reading: "hatten", meaning: "development", example: { jp: "この まちは じゅうねんで おおきく はってんして、みせも ふえました。", en: "This town developed a lot in ten years, and the shops increased too." }, drill: { jp: "はってんが はやいです。", en: "The development is rapid." }, accept: ["growth", "to develop", "expansion"], hint: "hat-TEN — small pause, then ten. はつ is to open out and てん is to unfold, so it is something spreading into a larger shape. せいちょう is a living thing growing; はってん is a town or an economy." },
        { id: "ja-u116l1-seicho", type: "vocab", front: "せいちょう", reading: "seichō", meaning: "growth", example: { jp: "こどもの せいちょうは はやくて、ふくが すぐ ちいさく なります。", en: "Children's growth is fast, and their clothes get too small right away." }, drill: { jp: "せいちょうが とまりました。", en: "The growth has stopped." }, accept: ["growing up", "to grow", "maturing"], hint: "せいちょう is a living thing growing; はってん is a town, company or country developing." },
        { id: "ja-u116l1-gensho", type: "vocab", front: "げんしょう", reading: "genshō", meaning: "decrease", example: { jp: "まちの じんこうの げんしょうが つづいて いて、がっこうも すくなく なりました。", en: "The town's population decline is continuing, and there are fewer schools too." }, drill: { jp: "げんしょうが つづいて います。", en: "The decrease is continuing." }, accept: ["reduction", "falling off", "to decrease"], hint: "gen-SHŌ — the ん is held and the last beat is long. げん is to reduce and しょう is to vanish, so it is a steady falling away. ぞうか is its mirror, increase, and the pair fills every statistic." },
        { id: "ja-u116l1-nobiru", type: "vocab", front: "のびる", reading: "nobiru", meaning: "to stretch", example: { jp: "かいぎの じかんが のびて、かえりが おそく なりました。", en: "The meeting ran long, and I got home late." }, drill: { jp: "かみが ながく のびる。", en: "The hair grows long." }, accept: ["to extend", "to grow longer", "to be postponed"], hint: "no-BI-ru — three beats. It lengthens by itself, so what stretches takes が. Stretching it yourself is のばす. ⚠️ Of a deadline it means to be put off — 「かいぎが のびた」." },
        { id: "ja-u116l1-kasanaru", type: "vocab", front: "かさなる", reading: "kasanaru", meaning: "to overlap", example: { jp: "しごとと しけんが かさなって、とても いそがしいです。", en: "Work and the exam overlapped, and I'm very busy." }, drill: { jp: "よていが かさなる。", en: "The plans overlap." }, accept: ["to pile up", "to coincide", "to be on top of"], hint: "ka-sa-NA-ru — four beats. Things lying on top of each other, literally or in a diary. Piling them up on purpose is かさねる — the same る-versus-ねる split as あがる and あげる." },
        { id: "ja-u116l1-tamaru", type: "vocab", front: "たまる", reading: "tamaru", meaning: "to accumulate", example: { jp: "しごとが たまって いますから、しゅうまつも はたらきます。", en: "Work has piled up, so I'm working at the weekend too." }, drill: { jp: "しごとが たまる。", en: "Work piles up." }, accept: ["to build up", "to collect", "to pile up"], hint: "ta-MA-ru — three beats. It gathers without anyone gathering it, so it takes が: 「しごとが たまる」. Of feelings it means to build up — 「ストレスが たまる」 is the commonest use of all." },
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
        { id: "ja-u116l2-shidaini", type: "vocab", front: "しだいに", reading: "shidaini", meaning: "gradually (steadily over time)", example: { jp: "そらが しだいに くらく なって、あめが ふって きました。", en: "The sky gradually darkened, and it started to rain." }, drill: { jp: "かぜが しだいに つよく なりました。", en: "The wind gradually grew stronger." }, accept: ["little by little", "steadily", "bit by bit"], hint: "しだいに is the written form of だんだん — same meaning, more formal register." },
        { id: "ja-u116l2-yoyaku", type: "vocab", front: "ようやく", reading: "yōyaku", meaning: "at last", example: { jp: "ながい かいぎが ようやく おわって、みんな かえりました。", en: "The long meeting ended at last, and everyone went home." }, drill: { jp: "ようやく こたえが わかりました。", en: "At last I understood the answer." }, accept: ["finally", "at length", "eventually"], hint: "yō-YA-ku — three beats, the first long. It marks relief after effort or waiting, so the thing finally happened. ⚠️ Spelled identically to よやく, a reservation — the difference is the long よう." },
        { id: "ja-u116l2-itsunomanika", type: "vocab", front: "いつのまにか", reading: "itsunomanika", meaning: "before you know it", example: { jp: "はなして いる うちに、いつのまにか よるに なりました。", en: "While we were talking, night fell before we knew it." }, drill: { jp: "いつのまにか あめが やみました。", en: "Before I knew it the rain had stopped." }, accept: ["without noticing", "somewhere along the way", "at some point"], hint: "i-tsu-no-ma-ni-KA — six beats. Literally at which interval, unknown: time passed and you missed it. It always reports a change you only noticed afterwards." },
        { id: "ja-u116l2-mamonaku", type: "vocab", front: "まもなく", reading: "mamonaku", meaning: "shortly", example: { jp: "でんしゃは まもなく つきますから、じゅんびして ください。", en: "The train arrives shortly, so please get ready." }, drill: { jp: "まもなく はじまります。", en: "It will begin shortly." }, accept: ["soon", "before long", "in a moment"], hint: "ma-mo-na-KU — four beats. ま is an interval and なく removes it, so there is no gap left. It is the announcement word you hear on every Japanese platform before a train arrives." },
        { id: "ja-u116l2-yagate", type: "vocab", front: "やがて", reading: "yagate", meaning: "in time", example: { jp: "あめは やがて とまって、そらが あかるく なりました。", en: "In time the rain stopped, and the sky brightened." }, drill: { jp: "やがて はるが きます。", en: "In time spring will come." }, accept: ["eventually", "by and by", "before long"], hint: "ya-GA-te — three beats. A vaguer まもなく: it will happen, but not on a timetable. It suits seasons and slow change, which is why it reads as slightly literary." },
        { id: "ja-u116l2-otoroeru", type: "vocab", front: "おとろえる", reading: "otoroeru", meaning: "to weaken", example: { jp: "としを とると ちからは おとろえますが、けいけんは ふえます。", en: "As you get older your strength weakens, but your experience grows." }, drill: { jp: "ちからが おとろえる。", en: "Strength weakens." }, accept: ["to decline", "to fade", "to grow weak"], hint: "o-to-ro-E-ru — five beats. Strength or vigour fading, so it takes が. It is used of a body, an economy or a storm — anything that had force and is losing it." },
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
        { id: "ja-u116l3-izen", type: "vocab", front: "いぜん", reading: "izen", meaning: "previously", example: { jp: "いぜんは ここに おおきな みせが ありましたが、いまは ありません。", en: "There used to be a big shop here, but now there isn't." }, drill: { jp: "いぜんは ここに すんで いました。", en: "I used to live here." }, accept: ["before", "formerly", "in the past"], hint: "i-ZEN — two beats, the ん held. い is from and ぜん is before, so it is from an earlier point. ⚠️ After a date it means on or before that date: 「さんがつ いぜん」 includes March." },
        { id: "ja-u116l3-igo", type: "vocab", front: "いご", reading: "igo", meaning: "from then on", example: { jp: "その ひ いご、いちども あって いません。", en: "Since that day, we haven't met once." }, drill: { jp: "いご きを つけます。", en: "From now on I will be careful." }, accept: ["after", "hereafter", "onwards"], hint: "いぜん and いご are a pair and attach to a time point: その ひ いご = from that day on. For a future starting point people usually say いこう." },
        { id: "ja-u116l3-katsute", type: "vocab", front: "かつて", reading: "katsute", meaning: "once (formerly in the past)", example: { jp: "かつて この まちには でんしゃが はしって いましたが、いまは バスだけです。", en: "Trains once ran in this town, but now there are only buses." }, drill: { jp: "かつて ここは うみでした。", en: "This was once the sea." }, accept: ["formerly", "at one time", "in former days"], hint: "ka-tsu-TE — three beats. It reaches far back and implies the thing is over, so it carries weight. いぜん is simply earlier; かつて is once upon a time, and it is a written word." },
        { id: "ja-u116l3-genzai", type: "vocab", front: "げんざい", reading: "genzai", meaning: "at present", example: { jp: "げんざい この みせは やすんで いますが、らいげつ また あきます。", en: "At present this shop is closed, but it opens again next month." }, drill: { jp: "げんざいは やすんで います。", en: "At present it is closed." }, accept: ["now", "currently", "the present"], hint: "gen-ZA-i — three beats, the ん held. げん is present and ざい is existing, so it is what is the case right now. いま is the spoken now; げんざい is the one on a notice or in a report." },
        { id: "ja-u116l3-toji", type: "vocab", front: "とうじ", reading: "tōji", meaning: "at that time", example: { jp: "とうじは まだ こどもでしたから、よく おぼえて いません。", en: "I was still a child at that time, so I don't remember it well." }, drill: { jp: "とうじは わかかったです。", en: "I was young back then." }, accept: ["back then", "in those days", "at the time"], hint: "TŌ-ji — the first beat is long. とう is that very one and じ is a time, so it is the time in question. It needs a past moment already named, which is why it rarely opens a conversation." },
        { id: "ja-u116l3-naganen", type: "vocab", front: "ながねん", reading: "naganen", meaning: "for many years", example: { jp: "ちちは ながねん おなじ かいしゃで はたらいて いて、ことし やめます。", en: "My father has worked at the same company for many years, and retires this year." }, drill: { jp: "ながねん この まちに すんで います。", en: "I have lived in this town for many years." }, accept: ["a long time", "over the years", "for years"], hint: "na-ga-NEN — three beats, the ん held. ながい is long and ねん is a year. It modifies a verb directly, with no particle — 「ながねん はたらいた」 — and implies loyalty or endurance." },
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
        { id: "ja-u116l4-furikaeru", type: "vocab", front: "ふりかえる", reading: "furikaeru", meaning: "to look back", example: { jp: "ことしを ふりかえると、いろいろな ことが ありました。", en: "Looking back on this year, a lot happened." }, drill: { jp: "いちねんを ふりかえる。", en: "I look back on the year." }, accept: ["to reflect on", "to turn around", "to review"], hint: "fu-ri-ka-E-ru — five beats. ふる is to swing and かえる is to turn, so it is turning your head round. The literal sense is to glance behind you; the figurative one is to review." },
        { id: "ja-u116l4-minaosu", type: "vocab", front: "みなおす", reading: "minaosu", meaning: "to review (to take another look)", example: { jp: "けいかくを みなおしてから、もう いちど はなしましょう。", en: "Let's review the plan, then talk again." }, drill: { jp: "よていを みなおす。", en: "I review the schedule." }, accept: ["to reconsider", "to take another look", "to reassess"], hint: "mi-na-O-su — four beats. みる plus なおす, to redo: looking again with fresh eyes. ⚠️ Of a PERSON it means your opinion of them went up — 「かれを みなおした」." },
        { id: "ja-u116l4-kurikaesu", type: "vocab", front: "くりかえす", reading: "kurikaesu", meaning: "to repeat", example: { jp: "おなじ まちがいを くりかえさない ように、メモを して います。", en: "So as not to repeat the same mistake, I take notes." }, drill: { jp: "おなじ しつもんを くりかえす。", en: "He repeats the same question." }, accept: ["to do again", "to go over again", "to say again"], hint: "ku-ri-ka-E-su — five beats. くる is to reel and かえす is to send back, so it is winding the same thing round again. What is repeated takes を." },
        { id: "ja-u116l4-nakunaru", type: "vocab", front: "なくなる", reading: "nakunaru", meaning: "to disappear", example: { jp: "まちの ふるい みせが なくなって、すこし さびしく なりました。", en: "The town's old shop is gone, and it feels a little lonely." }, drill: { jp: "おかねが なくなる。", en: "The money runs out." }, accept: ["to be gone", "to run out", "to cease to exist"], hint: "na-ku-na-RU — four beats. ない plus なる: to become not-there. ⚠️ Of a person it is the gentle word for dying — 「そふが なくなりました」 — so take care which noun precedes it." },
        { id: "ja-u116l4-utsuru", type: "vocab", front: "うつる", reading: "utsuru", meaning: "to move (dictionary form)", example: { jp: "らいげつ あたらしい いえに うつりますから、じゅんびが たいへんです。", en: "I move to a new house next month, so preparing is hard work." }, drill: { jp: "あたらしい しょくばに うつる。", en: "I move to a new workplace." }, accept: ["to relocate", "to shift", "to transfer"], hint: "u-TSU-ru — three beats. Where you move to takes に. It is a change of position rather than a journey, so it fits a house, a desk or a job. ひっこす is specifically a household move." },
        { id: "ja-u116l4-keika", type: "vocab", front: "けいか", reading: "keika", meaning: "passage (of time)", example: { jp: "あれから ながい じかんが けいかしましたが、まだ よく おぼえて います。", en: "A long time has passed since then, but I still remember it well." }, drill: { jp: "けいかを みて きめます。", en: "We will decide by watching how it goes." }, accept: ["progress", "course", "elapsing"], hint: "KEI-ka — two beats, kei said as written. けい is to pass through and か is to go by, so it is time or a process running on. A doctor watching a patient's けいか is watching the course of it." },
      ],
    },
  ],
};
