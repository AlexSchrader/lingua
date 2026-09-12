// JA Unit 149 — ごい・N3・8 (きかいとそうさ — machines and operating them) — B1 / JLPT N3
// Strand D, coverage 8 of 14. This is the vocabulary a learner needs the first time
// something breaks, or the first time a screen is in Japanese and there is no English
// toggle: ログイン, パスワード, にゅうりょく, ほぞん, さくじょ. It is unglamorous and
// immediately usable, which is exactly the trade a coverage unit should make.
// Lesson 4 is hand tools — the physical half of the same domain, and words that turn up
// in instructions far below their JLPT level.
export const UNIT149 = {
  id: "ja-u149",
  lang: "ja",
  title: "ごい・N3・8",
  order: 149,
  stage: "b1",
  lessons: [
    {
      id: "ja-u149l1",
      unit: 149,
      lesson: 1,
      title: "Devices and how they run",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a machine and its condition: そうち, ぶひん, せいのう, そうさ, しゅうり, つうち.",
      items: [
        { id: "ja-u149l1-sochi", type: "vocab", front: "そうち", reading: "sōchi", meaning: "device, apparatus", example: { jp: "あたらしいそうちをいれてから、しごとがはやくなりました。", en: "Since we brought in the new device, the work has got faster." }, accept: ["equipment", "installation", "unit"], hint: "A purpose-built piece of equipment, usually installed rather than carried. きかい is a machine in general; そうち is a specific rig." },
        { id: "ja-u149l1-buhin", type: "vocab", front: "ぶひん", reading: "buhin", meaning: "part, component", example: { jp: "ぶひんがこわれたので、とりかえてもらいました。", en: "A part broke, so I had it replaced." }, accept: ["spare part", "component", "piece"], hint: "The replaceable pieces inside a machine. ぶ (part) + ひん (article) — ひん is the same element as しょくひん, さくひん." },
        { id: "ja-u149l1-seino", type: "vocab", front: "せいのう", reading: "seinō", meaning: "performance, capability", example: { jp: "ねだんはたかいですが、せいのうがいいのでかいました。", en: "It's expensive, but the performance is good so I bought it." }, accept: ["specs", "power", "how well it works"], hint: "What a machine can do, measured. きのう (function) is what features it has; せいのう is how well it does them." },
        { id: "ja-u149l1-sosa", type: "vocab", front: "そうさ", reading: "sōsa", meaning: "operation, handling", example: { jp: "そうさがかんたんなので、だれでもつかえます。", en: "It's simple to operate, so anyone can use it." }, accept: ["to operate", "controls", "usage"], hint: "Working the controls. そうさほうほう is the 'how to use' section of every manual." },
        { id: "ja-u149l1-appudeto", type: "vocab", front: "アップデート", reading: "appudēto", meaning: "update (software)", example: { jp: "アップデートしてから、うごきがはやくなりました。", en: "Since I updated it, it's been running faster." }, accept: ["upgrade", "to update", "patch"], hint: "Software only. For a newer physical model you'd say しんがた, and for a version number バージョンアップ — a Japanese coinage, not English." },
        { id: "ja-u149l1-tsuchi", type: "vocab", front: "つうち", reading: "tsūchi", meaning: "notification, notice", example: { jp: "けっかがでたら、メールでつうちがとどきます。", en: "When the results are out, a notification will arrive by email." }, accept: ["alert", "notice", "to notify"], hint: "Official notice, from an organization or an app. しらせ is the everyday word for the same thing." },
      ],
    },
    {
      id: "ja-u149l2",
      unit: 149,
      lesson: 2,
      title: "At the keyboard",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Work a Japanese interface: にゅうりょく, へんかん, ファイル, さくじょ, キーボード, マウス.",
      items: [
        { id: "ja-u149l2-kibodo", type: "vocab", front: "キーボード", reading: "kībōdo", meaning: "keyboard", example: { jp: "キーボードがこわれたので、あたらしいのをかいました。", en: "The keyboard broke, so I bought a new one." }, accept: ["keys", "typing keyboard"], hint: "Both senses, computer and musical. Note the two long vowels — キーボード, kī-bō-do." },
        { id: "ja-u149l2-mausu", type: "vocab", front: "マウス", reading: "mausu", meaning: "mouse (computer)", example: { jp: "マウスをうごかしても、がめんがかわりません。", en: "Even when I move the mouse, the screen doesn't change." }, accept: ["computer mouse", "pointer device"], hint: "Only the device — the animal is ねずみ. Loanwords often take one narrow sense of the English word." },
        { id: "ja-u149l2-nyuryoku", type: "vocab", front: "にゅうりょく", reading: "nyūryoku", meaning: "input, entering data", example: { jp: "なまえとじゅうしょをにゅうりょくしてから、つぎへすすんでください。", en: "Enter your name and address, then move on to the next step." }, drill: { jp: "にゅうりょくをします。", en: "I enter the data." }, accept: ["to enter", "to type in", "data entry"], hint: "On every Japanese form and app. Its opposite しゅつりょく (output) follows the same shape." },
        { id: "ja-u149l2-henkan", type: "vocab", front: "へんかん", reading: "henkan", meaning: "conversion (kana to kanji)", example: { jp: "ひらがなでうってから、かんじにへんかんします。", en: "I type in hiragana and then convert it to kanji." }, accept: ["to convert", "transformation", "changing over"], hint: "The single most-used word in Japanese typing: you type kana, press space, and the machine offers かんじへんかん. Wrong choices are へんかんミス." },
        { id: "ja-u149l2-fairu", type: "vocab", front: "ファイル", reading: "fairu", meaning: "file", example: { jp: "そのファイルはメールでおくっておきました。", en: "I've sent that file over by email." }, accept: ["document file", "folder"], hint: "Digital files and the paper folder on your desk — the loanword covers both, exactly as in English." },
        { id: "ja-u149l2-sakujo", type: "vocab", front: "さくじょ", reading: "sakujo", meaning: "deletion", example: { jp: "まちがえてだいじなファイルをさくじょしてしまいました。", en: "I deleted an important file by mistake." }, accept: ["to delete", "removal", "to erase"], hint: "The formal word buttons use. けします is the everyday 'erase' — さくじょ is what the confirmation dialog says." },
      ],
    },
    {
      id: "ja-u149l3",
      unit: 149,
      lesson: 3,
      title: "Accounts and connections",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Get yourself online and signed in: アカウント, ログイン, パスワード, せつぞく, つうしん, ほぞん.",
      items: [
        { id: "ja-u149l3-akaunto", type: "vocab", front: "アカウント", reading: "akaunto", meaning: "account (online)", example: { jp: "アカウントをつくってから、ログインしてください。", en: "Please create an account and then log in." }, accept: ["user account", "profile", "login account"], hint: "Only the online sense. A bank account is こうざ (u148) and a shop tab is つけ — one English word, three unrelated Japanese ones." },
        { id: "ja-u149l3-roguin", type: "vocab", front: "ログイン", reading: "roguin", meaning: "login", example: { jp: "パスワードをわすれて、ログインできなくなりました。", en: "I forgot my password and can no longer log in." }, accept: ["to log in", "signing in"], hint: "Straight from English, and ログアウト works the same way. Older sites may say サインイン instead." },
        { id: "ja-u149l3-pasuwado", type: "vocab", front: "パスワード", reading: "pasuwādo", meaning: "password", example: { jp: "パスワードはときどきかえたほうがあんぜんです。", en: "It's safer to change your password from time to time." }, accept: ["passcode", "login password"], hint: "Note the long ā in the middle — pasu-wā-do. Japanese stretches the English stressed syllable into a long vowel." },
        { id: "ja-u149l3-setsuzoku", type: "vocab", front: "せつぞく", reading: "setsuzoku", meaning: "connection (network)", example: { jp: "ホテルのせつぞくがおそくて、こまりました。", en: "The hotel's connection was slow, which was a nuisance." }, accept: ["to connect", "link-up", "hookup"], hint: "Physical cables and network connections alike. It's also the grammar term for a conjunction — せつぞくし." },
        { id: "ja-u149l3-tsushin", type: "vocab", front: "つうしん", reading: "tsūshin", meaning: "communication, data transmission", example: { jp: "やまのなかでは、つうしんがきれてしまいました。", en: "Up in the mountains the connection dropped." }, drill: { jp: "つうしんがきれました。", en: "The communication cut out." }, accept: ["signal", "correspondence", "telecoms"], hint: "The traffic rather than the link — つうしんりょう is your data allowance. せつぞく is being connected; つうしん is what flows." },
        { id: "ja-u149l3-hozon", type: "vocab", front: "ほぞん", reading: "hozon", meaning: "saving, preservation", example: { jp: "しごとのとちゅうでも、ときどきほぞんしてください。", en: "Please save from time to time, even in the middle of a job." }, accept: ["to save", "to store", "keeping"], hint: "Saving a file and preserving food take the same word — れいとうほぞん is 'keeping it frozen'." },
      ],
    },
    {
      id: "ja-u149l4",
      unit: 149,
      lesson: 4,
      title: "Tools and fittings",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the things in a toolbox and on a wall: ねじ, かなづち, のこぎり, ドライバー, スイッチ, コンセント.",
      items: [
        { id: "ja-u149l4-neji", type: "vocab", front: "ねじ", reading: "neji", meaning: "screw", example: { jp: "いすのねじがゆるいので、しめなおします。", en: "The screw on the chair is loose, so I'll tighten it again." }, accept: ["bolt", "screw thread"], hint: "ねじをしめる (tighten) and ねじがゆるむ (come loose) are the two phrases you need, and both work figuratively too." },
        { id: "ja-u149l4-kanazuchi", type: "vocab", front: "かなづち", reading: "kanazuchi", meaning: "hammer", example: { jp: "かなづちがないので、たなをつけられませんでした。", en: "I didn't have a hammer, so I couldn't put the shelf up." }, accept: ["mallet", "claw hammer"], hint: "かな (metal) + つち (mallet), with the つ voicing to づ inside the compound. It also means someone who can't swim at all." },
        { id: "ja-u149l4-nokogiri", type: "vocab", front: "のこぎり", reading: "nokogiri", meaning: "saw", example: { jp: "のこぎりをかりて、ちいさいはこをつくりました。", en: "I borrowed a saw and made a small box." }, accept: ["handsaw", "wood saw"], hint: "A Japanese saw cuts on the PULL stroke, not the push — worth knowing before you borrow one." },
        { id: "ja-u149l4-doraiba", type: "vocab", front: "ドライバー", reading: "doraibā", meaning: "screwdriver; driver", example: { jp: "ドライバーがないので、ねじがはずせません。", en: "I don't have a screwdriver, so I can't get the screw out." }, accept: ["screwdriver", "car driver"], hint: "Two meanings from the same loanword — the tool and the person driving. Context always separates them." },
        { id: "ja-u149l4-suitchi", type: "vocab", front: "スイッチ", reading: "suitchi", meaning: "switch", example: { jp: "でんきのスイッチは、ドアのよこにあります。", en: "The light switch is next to the door." }, drill: { jp: "スイッチはドアのよこです。", en: "The switch is beside the door." }, accept: ["light switch", "toggle"], hint: "スイッチをいれる (turn on) and スイッチをきる (turn off) — いれる/きる, not オン/オフ, in normal speech." },
        { id: "ja-u149l4-konsento", type: "vocab", front: "コンセント", reading: "konsento", meaning: "power outlet, socket", example: { jp: "コンセントがとおいので、ここではじゅうでんできません。", en: "The socket is too far away, so I can't charge it here." }, accept: ["wall socket", "plug socket", "power point"], hint: "A false friend — it is NOT English 'consent'. Probably from 'concentric plug'. The plug itself is プラグ." },
      ],
    },
  ],
};
