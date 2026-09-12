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
        { id: "ja-u126l1-dorama", type: "vocab", front: "ドラマ", reading: "dorama", meaning: "TV drama", example: { jp: "このドラマはながいですが、さいごまでおもしろいです。", en: "This drama is long, but it's interesting right to the end." }, accept: ["drama series", "TV series", "series"] },
        { id: "ja-u126l1-anime", type: "vocab", front: "アニメ", reading: "anime", meaning: "animation", example: { jp: "こどものころこのアニメをみて、いまもすきです。", en: "I watched this animation as a child, and I still like it." }, accept: ["anime", "cartoon"] },
        { id: "ja-u126l1-haiyu", type: "vocab", front: "はいゆう", reading: "haiyū", meaning: "actor", example: { jp: "あのはいゆうはゆうめいですが、テレビにはあまりでません。", en: "That actor is famous, but he doesn't appear on TV much." }, accept: ["actress", "performer", "film actor"] },
        { id: "ja-u126l1-kantoku", type: "vocab", front: "かんとく", reading: "kantoku", meaning: "director", example: { jp: "かんとくがかわったので、さくひんのふんいきもかわりました。", en: "The director changed, so the feel of the work changed too." }, accept: ["manager", "coach", "supervisor"] },
        { id: "ja-u126l1-shutsuen", type: "vocab", front: "しゅつえん", reading: "shutsuen", meaning: "appearing in", example: { jp: "ともだちがドラマにしゅつえんしたので、かぞくでみました。", en: "A friend appeared in a drama, so we watched it as a family." }, drill: { jp: "しゅつえんがきまりました。", en: "The appearance was decided." }, accept: ["performance", "featuring", "being in"] },
        { id: "ja-u126l1-jimaku", type: "vocab", front: "じまく", reading: "jimaku", meaning: "subtitles", example: { jp: "じまくがあれば、えいごのえいがもわかります。", en: "If there are subtitles, I can follow English films too." }, accept: ["captions", "subtitle"] },
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
                { id: "ja-u126l2-rensai", type: "vocab", front: "れんさい", reading: "rensai", meaning: "a serial", example: { jp: "このれんさいはながいので、まいしゅうたのしみにしています。", en: "This serial is long-running, so I have it to look forward to every week." }, accept: ["serialization", "running series", "instalments"] },
        { id: "ja-u126l2-dokusha", type: "vocab", front: "どくしゃ", reading: "dokusha", meaning: "reader", example: { jp: "どくしゃからてがみがきたので、へんじをかきました。", en: "A letter came from a reader, so I wrote a reply." }, accept: ["readership", "the readers"] },
        { id: "ja-u126l2-shuppan", type: "vocab", front: "しゅっぱん", reading: "shuppan", meaning: "publication", example: { jp: "ほんのしゅっぱんはらいげつなので、いまよやくしました。", en: "The book comes out next month, so I ordered it now." }, accept: ["publishing", "bringing out"] },
        { id: "ja-u126l2-henshu", type: "vocab", front: "へんしゅう", reading: "henshū", meaning: "editing", example: { jp: "へんしゅうにじかんがかかったので、はつばいがおくれました。", en: "The editing took time, so the release was late." }, accept: ["compiling", "editorial work"] },
        { id: "ja-u126l2-tokushu", type: "vocab", front: "とくしゅう", reading: "tokushū", meaning: "special feature", example: { jp: "こんげつのざっしはりょうりのとくしゅうなので、かいました。", en: "This month's magazine is a special feature on cooking, so I bought it." }, drill: { jp: "とくしゅうをよみます。", en: "I read the special feature." }, accept: ["feature", "special issue", "in-depth report"] },
        { id: "ja-u126l2-kokoku", type: "vocab", front: "こうこく", reading: "kōkoku", meaning: "advertisement", example: { jp: "こうこくをみてみせにいったら、もううれていました。", en: "I saw the advertisement and went to the shop, only to find it sold out." }, accept: ["advert", "ad", "advertising"] },
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
        { id: "ja-u126l3-butai", type: "vocab", front: "ぶたい", reading: "butai", meaning: "stage", example: { jp: "ぶたいがちかかったので、かおがよくみえました。", en: "The stage was close, so I could see their faces well." }, accept: ["the stage", "a stage production", "theatre stage"] },
        { id: "ja-u126l3-kankyaku", type: "vocab", front: "かんきゃく", reading: "kankyaku", meaning: "audience", example: { jp: "かんきゃくがおおかったので、ぜんぜんまえにいけませんでした。", en: "There was a big audience, so I couldn't get to the front at all." }, accept: ["spectators", "the crowd", "viewers"] },
        { id: "ja-u126l3-kashu", type: "vocab", front: "かしゅ", reading: "kashu", meaning: "singer", example: { jp: "すきなかしゅがきたので、ともだちとききにいきました。", en: "A singer I like came, so I went to hear them with a friend." }, drill: { jp: "かしゅがきました。", en: "The singer came." }, accept: ["vocalist", "recording artist"] },
        { id: "ja-u126l3-geino", type: "vocab", front: "げいのう", reading: "geinō", meaning: "the entertainment world", example: { jp: "げいのうのしごとはじかんがふきそくなので、からだをこわすひともいます。", en: "The hours in entertainment work are irregular, so some people ruin their health." }, accept: ["show business", "performing arts", "entertainment industry"] },
        { id: "ja-u126l3-sakuhin", type: "vocab", front: "さくひん", reading: "sakuhin", meaning: "a work", example: { jp: "このさくひんはふるいのに、いまでもにんきがあります。", en: "This work is old, but it's still popular now." }, accept: ["piece", "production", "creation"] },
        { id: "ja-u126l3-haishin", type: "vocab", front: "はいしん", reading: "haishin", meaning: "streaming", example: { jp: "はいしんでみられるので、いえからでなくてもだいじょうぶです。", en: "You can watch it by streaming, so you don't have to leave the house." }, accept: ["online delivery", "distribution", "streamed"] },
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
        { id: "ja-u126l4-ryuko", type: "vocab", front: "りゅうこう", reading: "ryūkō", meaning: "trend", example: { jp: "ことしのりゅうこうをしらべてから、ふくをかいました。", en: "I looked up this year's trend, and then bought clothes." }, accept: ["fashion", "vogue", "what's in"] },
        { id: "ja-u126l4-hayaru", type: "vocab", front: "はやる", reading: "hayaru", meaning: "become popular", example: { jp: "このうたがきゅうにはやって、どこへいってもきこえました。", en: "This song caught on suddenly, and you heard it everywhere you went." }, accept: ["to catch on", "be in fashion", "take off"] },
        { id: "ja-u126l4-chumoku", type: "vocab", front: "ちゅうもく", reading: "chūmoku", meaning: "attention", example: { jp: "わかいかんとくがちゅうもくされていて、ざっしにもでました。", en: "The young director is getting attention, and he was in a magazine too." }, accept: ["notice", "focus", "being watched"] },
        { id: "ja-u126l4-hyoban", type: "vocab", front: "ひょうばん", reading: "hyōban", meaning: "reputation", example: { jp: "ひょうばんはよかったですが、わたしにはむずかしすぎました。", en: "The reputation was good, but it was too difficult for me." }, accept: ["word of mouth", "how it's rated", "public opinion"] },
        { id: "ja-u126l4-kanso", type: "vocab", front: "かんそう", reading: "kansō", meaning: "impressions", example: { jp: "えいがのかんそうをきいたら、みんなちがっていました。", en: "When I asked for their impressions of the film, everyone's were different." }, drill: { jp: "かんそうをききます。", en: "I ask for impressions." }, accept: ["one's thoughts", "reaction", "review"] },
        { id: "ja-u126l4-shichosha", type: "vocab", front: "しちょうしゃ", reading: "shichōsha", meaning: "viewers", example: { jp: "しちょうしゃがふえたので、ばんぐみはつづくそうです。", en: "Viewer numbers went up, so apparently the programme will continue." }, accept: ["the audience", "viewing public", "people watching"] },
      ],
    },
  ],
};
