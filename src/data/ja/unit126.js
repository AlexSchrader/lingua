// JA Unit 126 — メディア・ごらく (Media and entertainment) — B1 / JLPT N3
// Block-2 house rules are documented in unit118.js (plain-form verb headwords).
//
// Split by medium rather than by word class — screen, print, live, then the words
// for something being popular — so that each lesson is a situation the learner can
// actually be in (watching, reading, going, talking about it afterwards).
export const UNIT126 = {
  id: "ja-u126",
  lang: "ja",
  title: "メディア・ごらく",
  order: 126,
  stage: "b1",
  lessons: [
    {
      id: "ja-u126l1",
      unit: 126,
      lesson: 1,
      title: "On screen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a film or drama and who was in it: ドラマ アニメ はいゆう かんとく しゅつえん じまく.",
      items: [
        { id: "ja-u126l1-dorama", type: "vocab", front: "ドラマ", reading: "dorama", meaning: "TV drama", example: { jp: "このドラマはながいですが、さいごまでおもしろいです。", en: "This drama is long, but it's interesting right to the end." }, drill: { jp: "ドラマのつづきをみます。", en: "I will watch the next part of the drama." }, accept: ["drama series", "TV series", "series"], hint: "DO-ra-ma — three beats. In Japanese it means a TELEVISION serial specifically, not drama as an art form. A film is えいが and a stage play is えんげき." },
        { id: "ja-u126l1-anime", type: "vocab", front: "アニメ", reading: "anime", meaning: "animation", example: { jp: "こどものころこのアニメをみて、いまもすきです。", en: "I watched this animation as a child, and I still like it." }, drill: { jp: "アニメがせかいでにんきです。", en: "Anime is popular worldwide." }, accept: ["anime", "cartoon", "animated film"], hint: "A-ni-me — three beats. Clipped from animation. In Japan it is simply the medium, with no implication of style — a foreign cartoon is アニメ too." },
        { id: "ja-u126l1-haiyu", type: "vocab", front: "はいゆう", reading: "haiyū", meaning: "actor", example: { jp: "あのはいゆうはゆうめいですが、テレビにはあまりでません。", en: "That actor is famous, but he doesn't appear on TV much." }, drill: { jp: "はいゆうになりたいです。", en: "I want to become an actor." }, accept: ["actress", "performer", "film actor"], hint: "hai-YŪ — the second beat is long. はい is to act and ゆう is a performer. It covers both sexes; じょゆう specifies an actress. A TV personality is タレント." },
        { id: "ja-u126l1-kantoku", type: "vocab", front: "かんとく", reading: "kantoku", meaning: "director", example: { jp: "かんとくがかわったので、さくひんのふんいきもかわりました。", en: "The director changed, so the feel of the work changed too." }, drill: { jp: "かんとくにききました。", en: "I asked the director." }, accept: ["manager", "coach", "supervisor"], hint: "kan-TO-ku — three beats, the ん held. かん is to oversee and とく is to command. ⚠️ Same word for a film director AND a sports coach — the context carries it entirely." },
        { id: "ja-u126l1-shutsuen", type: "vocab", front: "しゅつえん", reading: "shutsuen", meaning: "appearing in", example: { jp: "ともだちがドラマにしゅつえんしたので、かぞくでみました。", en: "A friend appeared in a drama, so we watched it as a family." }, drill: { jp: "しゅつえんがきまりました。", en: "The appearance was decided." }, accept: ["performance", "featuring", "being in"], hint: "shu-tsu-EN — three beats, the ん held. しゅつ is to appear and えん is to perform, so it is being IN something. What you appear in takes に, and the people in it are しゅつえんしゃ." },
        { id: "ja-u126l1-jimaku", type: "vocab", front: "じまく", reading: "jimaku", meaning: "subtitles", example: { jp: "じまくがあれば、えいごのえいがもわかります。", en: "If there are subtitles, I can follow English films too." }, drill: { jp: "じまくをよみます。", en: "I read the subtitles." }, accept: ["captions", "subtitle", "on-screen text"], hint: "ji-MA-ku — three beats. じ is a character and まく is a curtain, from text laid over the screen. Japan subtitles foreign films rather than dubbing them, so じまく is everyday." },
      ],
    },
    {
      id: "ja-u126l2",
      unit: 126,
      lesson: 2,
      title: "In print",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about what you read and who makes it: れんさい どくしゃ しゅっぱん へんしゅう とくしゅう こうこく.",
      items: [
                { id: "ja-u126l2-rensai", type: "vocab", front: "れんさい", reading: "rensai", meaning: "a serial", example: { jp: "このれんさいはながいので、まいしゅうたのしみにしています。", en: "This serial is long-running, so I have it to look forward to every week." }, drill: { jp: "れんさいがおわりました。", en: "The serial has ended." }, accept: ["serialization", "running series", "instalments"], hint: "ren-SA-i — three beats, the ん held. れん is linked and さい is to carry, so it is a story carried in instalments. Manga and newspaper novels both run as れんさい." },
        { id: "ja-u126l2-dokusha", type: "vocab", front: "どくしゃ", reading: "dokusha", meaning: "reader", example: { jp: "どくしゃからてがみがきたので、へんじをかきました。", en: "A letter came from a reader, so I wrote a reply." }, drill: { jp: "どくしゃのいけんをききます。", en: "We listen to readers' views." }, accept: ["readership", "the readers", "a reader"], hint: "do-ku-SHA — three beats. どく is to read and ～しゃ is the person suffix. It means a reader of a particular paper or book, so it usually implies a regular one." },
        { id: "ja-u126l2-shuppan", type: "vocab", front: "しゅっぱん", reading: "shuppan", meaning: "publication", example: { jp: "ほんのしゅっぱんはらいげつなので、いまよやくしました。", en: "The book comes out next month, so I ordered it now." }, drill: { jp: "しゅっぱんをまっています。", en: "I am waiting for the publication." }, accept: ["publishing", "bringing out", "a release"], hint: "SHUP-pan — small pause, then the ん held. しゅつ is out and はん is a printing block, with the sounds tightening. The company is しゅっぱんしゃ." },
        { id: "ja-u126l2-henshu", type: "vocab", front: "へんしゅう", reading: "henshū", meaning: "editing", example: { jp: "へんしゅうにじかんがかかったので、はつばいがおくれました。", en: "The editing took time, so the release was late." }, drill: { jp: "へんしゅうのしごとをしています。", en: "I work in editing." }, accept: ["compiling", "editorial work", "to edit"], hint: "hen-SHŪ — the ん is held and the last beat is long. へん is to arrange and しゅう is to gather, so it is assembling the pieces. The editor is へんしゅうしゃ." },
        { id: "ja-u126l2-tokushu", type: "vocab", front: "とくしゅう", reading: "tokushū", meaning: "special feature", example: { jp: "こんげつのざっしはりょうりのとくしゅうなので、かいました。", en: "This month's magazine is a special feature on cooking, so I bought it." }, drill: { jp: "とくしゅうをよみます。", en: "I read the special feature." }, accept: ["feature", "special issue", "in-depth report"], hint: "to-ku-SHŪ — the last beat is long. とく is special and しゅう is to collect, so it is a set of pieces gathered on one topic. A whole special issue is とくしゅうごう." },
        { id: "ja-u126l2-kokoku", type: "vocab", front: "こうこく", reading: "kōkoku", meaning: "advertisement", example: { jp: "こうこくをみてみせにいったら、もううれていました。", en: "I saw the advertisement and went to the shop, only to find it sold out." }, drill: { jp: "こうこくがおおいです。", en: "There are a lot of advertisements." }, accept: ["advert", "ad", "advertising"], hint: "kō-KO-ku — three beats, the first long. こう is public and こく is to announce, so it is announcing broadly. A notice with no selling in it is おしらせ." },
      ],
    },
    {
      id: "ja-u126l3",
      unit: 126,
      lesson: 3,
      title: "Live and streamed",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about going to a performance, or watching one streamed: ぶたい かんきゃく かしゅ げいのう さくひん はいしん.",
      items: [
        { id: "ja-u126l3-butai", type: "vocab", front: "ぶたい", reading: "butai", meaning: "stage (a theatre stage)", example: { jp: "ぶたいがちかかったので、かおがよくみえました。", en: "The stage was close, so I could see their faces well." }, drill: { jp: "ぶたいにたちました。", en: "She stood on the stage." }, accept: ["the stage", "a stage production", "theatre stage"], hint: "bu-TA-i — three beats. ぶ is to dance and たい is a platform. ⚠️ Figuratively it is the setting of a story: 「ぶたいは とうきょうです」 means the story is set in Tokyo." },
        { id: "ja-u126l3-kankyaku", type: "vocab", front: "かんきゃく", reading: "kankyaku", meaning: "audience", example: { jp: "かんきゃくがおおかったので、ぜんぜんまえにいけませんでした。", en: "There was a big audience, so I couldn't get to the front at all." }, drill: { jp: "かんきゃくはしずかでした。", en: "The audience was quiet." }, accept: ["spectators", "the crowd", "viewers"], hint: "kan-KYA-ku — three beats, the ん held, きゃ is ONE beat. かん is to watch and きゃく is a guest. It is people WATCHING; listeners are ちょうしゅう and readers どくしゃ." },
        { id: "ja-u126l3-kashu", type: "vocab", front: "かしゅ", reading: "kashu", meaning: "singer", example: { jp: "すきなかしゅがきたので、ともだちとききにいきました。", en: "A singer I like came, so I went to hear them with a friend." }, drill: { jp: "かしゅがきました。", en: "The singer came." }, accept: ["vocalist", "recording artist", "a singer"], hint: "KA-shu — two beats. 歌 is a song and 手 marks the person, the same 手 as in とうしゅ and うんてんしゅ. One suffix, every occupation." },
        { id: "ja-u126l3-geino", type: "vocab", front: "げいのう", reading: "geinō", meaning: "the entertainment world", example: { jp: "げいのうのしごとはじかんがふきそくなので、からだをこわすひともいます。", en: "The hours in entertainment work are irregular, so some people ruin their health." }, drill: { jp: "げいのうにきょうみがあります。", en: "I am interested in show business." }, accept: ["show business", "performing arts", "entertainment industry"], hint: "gei-NŌ — the second beat is long. げい is an art or craft and のう is ability. It covers television, music and traditional performance — the whole entertainment trade." },
        { id: "ja-u126l3-sakuhin", type: "vocab", front: "さくひん", reading: "sakuhin", meaning: "a work", example: { jp: "このさくひんはふるいのに、いまでもにんきがあります。", en: "This work is old, but it's still popular now." }, drill: { jp: "さくひんをつくりました。", en: "I made a work." }, accept: ["piece", "production", "creation"], hint: "sa-ku-HIN — three beats, the ん held. さく is to make and ひん is an article, so it is one finished creative piece. A product for sale is しょうひん, the same ひん." },
        { id: "ja-u126l3-haishin", type: "vocab", front: "はいしん", reading: "haishin", meaning: "streaming", example: { jp: "はいしんでみられるので、いえからでなくてもだいじょうぶです。", en: "You can watch it by streaming, so you don't have to leave the house." }, drill: { jp: "はいしんをみました。", en: "I watched the stream." }, accept: ["online delivery", "distribution", "streamed"], hint: "hai-SHIN — two beats, the ん held. はい is to distribute and しん is to send. It was a delivery word long before streaming; now it is how you watch almost anything." },
      ],
    },
    {
      id: "ja-u126l4",
      unit: 126,
      lesson: 4,
      title: "What everyone is talking about",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what is popular and give your impression of it: りゅうこう はやる ちゅうもく ひょうばん かんそう しちょうしゃ.",
      items: [
        { id: "ja-u126l4-ryuko", type: "vocab", front: "りゅうこう", reading: "ryūkō", meaning: "trend", example: { jp: "ことしのりゅうこうをしらべてから、ふくをかいました。", en: "I looked up this year's trend, and then bought clothes." }, drill: { jp: "りゅうこうがかわりました。", en: "The trend has changed." }, accept: ["fashion", "vogue", "what's in"], hint: "ryū-KŌ — two long beats, りゅ is ONE beat. りゅう is to flow and こう is to go, so it is what is flowing through just now. ⚠️ A りゅうこうびょう is an epidemic — the same flowing." },
        { id: "ja-u126l4-hayaru", type: "vocab", front: "はやる", reading: "hayaru", meaning: "become popular", example: { jp: "このうたがきゅうにはやって、どこへいってもきこえました。", en: "This song caught on suddenly, and you heard it everywhere you went." }, drill: { jp: "このことばがはやる。", en: "This word is catching on." }, accept: ["to catch on", "be in fashion", "take off"], hint: "ha-YA-ru — three beats. What catches on takes が, because nobody made it happen. ⚠️ It also means an illness spreading — 「かぜが はやって いる」." },
        { id: "ja-u126l4-chumoku", type: "vocab", front: "ちゅうもく", reading: "chūmoku", meaning: "attention", example: { jp: "わかいかんとくがちゅうもくされていて、ざっしにもでました。", en: "The young director is getting attention, and he was in a magazine too." }, drill: { jp: "ちゅうもくされています。", en: "It is attracting attention." }, accept: ["notice", "focus", "being watched"], hint: "chū-MO-ku — the first beat is long. ちゅう is to pour and もく is an eye, so eyes are poured onto it. You ちゅうもくする a thing, and a thing is ちゅうもくされる." },
        { id: "ja-u126l4-hyoban", type: "vocab", front: "ひょうばん", reading: "hyōban", meaning: "reputation", example: { jp: "ひょうばんはよかったですが、わたしにはむずかしすぎました。", en: "The reputation was good, but it was too difficult for me." }, drill: { jp: "ひょうばんがいいみせです。", en: "It is a shop with a good reputation." }, accept: ["word of mouth", "how it's rated", "public opinion"], hint: "hyō-BAN — the ひょ is ONE long beat, the ん held. ひょう is to appraise and ばん is a judgement, so it is the verdict going around. ひょうか is a formal rating; ひょうばん is word of mouth." },
        { id: "ja-u126l4-kanso", type: "vocab", front: "かんそう", reading: "kansō", meaning: "impressions", example: { jp: "えいがのかんそうをきいたら、みんなちがっていました。", en: "When I asked for their impressions of the film, everyone's were different." }, drill: { jp: "かんそうをききます。", en: "I ask for impressions." }, accept: ["one's thoughts", "reaction", "review"], hint: "kan-SŌ — the ん is held and the last beat is long. かん is to feel and そう is to think, so it is what you felt and thought afterwards. ひひょう is a critic's review; かんそう is yours." },
        { id: "ja-u126l4-shichosha", type: "vocab", front: "しちょうしゃ", reading: "shichōsha", meaning: "viewers", example: { jp: "しちょうしゃがふえたので、ばんぐみはつづくそうです。", en: "Viewer numbers went up, so apparently the programme will continue." }, drill: { jp: "しちょうしゃのこえをききます。", en: "We listen to the viewers." }, accept: ["the audience", "viewing public", "people watching"], hint: "shi-chō-SHA — three beats, the ちょう long. し is to see and ちょう is to hear, plus ～しゃ. So it is a watcher-and-listener — television, not radio, which has ちょうしゅしゃ." },
      ],
    },
  ],
};
