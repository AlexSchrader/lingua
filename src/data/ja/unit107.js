// Unit 107 — ニュース・しゃかい ("News and society") — B1 / JLPT N3
// A2 already teaches せいじ, けいざい, ほうりつ, せんきょ, しゃかい (u49, u76) — the
// nouns for the *fields*. B1 is where a learner can follow an actual news item, so
// this unit teaches the words a report is built from: how news is made (ほうどう,
// きじ, しゅざい), who acts (しゅしょう, こくみん), what goes wrong (はんざい, さいばん)
// and what is done about it (ぼうさい, ひなん, きゅうじょ).
// Deviation noted per RUNBOOK §7: けんり moved to u106, which teaches the glyph 権.
export const UNIT107 = {
  id: "ja-u107",
  lang: "ja",
  title: "ニュース・しゃかい",
  order: 107,
  stage: "b1",
  lessons: [
    {
      id: "ja-u107l1",
      unit: 107,
      lesson: 1,
      title: "How news is made",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the news itself: ほうどう きじ しゅざい とうけい こうひょう よろん.",
      items: [
        { id: "ja-u107l1-hodo", type: "vocab", front: "ほうどう", reading: "hōdō", meaning: "news coverage", example: { jp: "ほうどうを見ただけでは、なにがあったかよくわかりません。", en: "Just from watching the coverage, I don't really understand what happened." }, accept: ["reporting", "media report", "to report"], hint: "報道 = 報 (inform) + 道 (way). The reporting itself, as an activity. ほうどうきかん = the press." },
        { id: "ja-u107l1-kiji", type: "vocab", front: "きじ", reading: "kiji", meaning: "article", example: { jp: "その新聞のきじは短かったですが、よく書けていました。", en: "That newspaper article was short, but it was well written." }, accept: ["news story", "piece", "write-up"], hint: "記事 = 記 (record) + 事 (matter) — the glyph 記 you met in u104. One written piece, in a paper or online." },
        { id: "ja-u107l1-shuzai", type: "vocab", front: "しゅざい", reading: "shuzai", meaning: "news gathering", example: { jp: "町にしゅざいに来た人がいて、みんなびっくりしました。", en: "Someone came to the town to gather material for a story, and everyone was surprised." }, accept: ["interviewing", "reporting", "research"], hint: "取材 = 取 (take) + 材 (material): collecting the material for a story. しゅざいします = to go out and report." },
        { id: "ja-u107l1-tokei", type: "vocab", front: "とうけい", reading: "tōkei", meaning: "statistics", example: { jp: "とうけいを見ると、わかい人がへっていることがわかります。", en: "Looking at the statistics, you can see that the number of young people is decreasing." }, accept: ["figures", "data", "numbers"], hint: "統計 = 統 (unify) + 計 (count). The numbers behind a claim — とうけいによると = 'according to the statistics'." },
        { id: "ja-u107l1-kohyo", type: "vocab", front: "こうひょう", reading: "kōhyō", meaning: "public announcement", example: { jp: "けっかはらいしゅうこうひょうされるので、それまでまちます。", en: "The results will be made public next week, so I'll wait until then." }, accept: ["to announce publicly", "disclosure", "release"], hint: "公表 = 公 (public) + 表 (show). Making official information public — stronger and more formal than はっぴょう." },
        { id: "ja-u107l1-yoron", type: "vocab", front: "よろん", reading: "yoron", meaning: "public opinion", example: { jp: "よろんがかわったので、せいふもかんがえを変えました。", en: "Public opinion shifted, so the government changed its thinking too." }, accept: ["popular opinion", "the public mood"], hint: "世論 = 世 (world / society) + 論 (opinion). よろんちょうさ = an opinion poll, which you'll hear every election." },
      ],
    },
    {
      id: "ja-u107l2",
      unit: 107,
      lesson: 2,
      title: "Politics and the public",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow a political story: しゅしょう だいとうりょう せいさく こくみん ぎむ とうひょう.",
      items: [
        { id: "ja-u107l2-shusho", type: "vocab", front: "しゅしょう", reading: "shushō", meaning: "prime minister", example: { jp: "しゅしょうがあたらしいせいさくをはっぴょうしたと、ニュースで見ました。", en: "I saw on the news that the prime minister announced a new policy." }, accept: ["premier", "head of government"], hint: "首相 = 首 (head) + 相 (minister). Japan's leader is a しゅしょう, not a だいとうりょう — the two are not interchangeable." },
        { id: "ja-u107l2-daitoryo", type: "vocab", front: "だいとうりょう", reading: "daitōryō", meaning: "president", example: { jp: "アメリカのだいとうりょうが日本に来るそうです。", en: "They say the American president is coming to Japan." }, accept: ["head of state"], hint: "大統領 = 大 (great) + 統 (unify) + 領 (govern). Used for a country's president; a company's is しゃちょう." },
        { id: "ja-u107l2-seisaku", type: "vocab", front: "せいさく", reading: "seisaku", meaning: "policy", example: { jp: "あたらしいせいさくのおかげで、こどもをそだてやすくなりました。", en: "Thanks to the new policy, it's become easier to raise children." }, accept: ["measure", "programme", "political policy"], hint: "政策 = 政 (government) + 策 (plan). A government's plan of action — not a company's, which is ほうしん." },
        { id: "ja-u107l2-kokumin", type: "vocab", front: "こくみん", reading: "kokumin", meaning: "the people", example: { jp: "こくみんのせいかつがよくなるかどうか、まだわかりません。", en: "Whether the people's lives will improve isn't clear yet." }, accept: ["citizens", "nation", "the public"], hint: "国民 = 国 (country) + 民 (people): the citizens of a nation. しみん is the residents of a city." },
        { id: "ja-u107l2-gimu", type: "vocab", front: "ぎむ", reading: "gimu", meaning: "duty", example: { jp: "ぜいきんをはらうのは、こくみんのぎむです。", en: "Paying taxes is a citizen's duty." }, accept: ["obligation", "responsibility"], hint: "義務 = 義 (righteousness) + 務 (duty). Pairs with けんり (u106): けんりとぎむ. ぎむきょういく = compulsory education." },
        { id: "ja-u107l2-tohyo", type: "vocab", front: "とうひょう", reading: "tōhyō", meaning: "voting", example: { jp: "はじめてとうひょうに行った日のことは、よくおぼえています。", en: "I remember well the day I went to vote for the first time." }, accept: ["a vote", "to vote", "ballot"], hint: "投票 = 投 (throw) + 票 (ticket): throwing your ticket in the box. とうひょうします = to cast a vote." },
      ],
    },
    {
      id: "ja-u107l3",
      unit: 107,
      lesson: 3,
      title: "Crime and the courts",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow a crime story: はんざい はんにん さいばん たいほ つうほう しょうにん.",
      items: [
        { id: "ja-u107l3-hanzai", type: "vocab", front: "はんざい", reading: "hanzai", meaning: "crime", example: { jp: "この町ははんざいが少ないので、夜も安心して歩けます。", en: "There's little crime in this town, so you can walk at night without worry." }, accept: ["offence", "criminal act"], hint: "犯罪 = 犯 (violate) + 罪 (sin). はんざいしゃ = a criminal (the person)." },
        { id: "ja-u107l3-hannin", type: "vocab", front: "はんにん", reading: "hannin", meaning: "culprit", example: { jp: "はんにんはまだ見つかっていないと、けいさつが言っています。", en: "The police say the culprit still hasn't been found." }, accept: ["offender", "perpetrator", "criminal"], hint: "犯人 = 犯 (violate) + 人 (person): the person who did it. The word every detective drama turns on." },
        { id: "ja-u107l3-saiban", type: "vocab", front: "さいばん", reading: "saiban", meaning: "trial", example: { jp: "さいばんは長くかかりましたが、さいごはこうへいなけっかでした。", en: "The trial took a long time, but in the end the result was fair." }, accept: ["court case", "judgement", "lawsuit"], hint: "裁判 = 裁 (judge) + 判 (decide). さいばんしょ = the courthouse; さいばんかん = the judge." },
        { id: "ja-u107l3-taiho", type: "vocab", front: "たいほ", reading: "taiho", meaning: "arrest", example: { jp: "たいほされたというニュースを見て、みんなおどろきました。", en: "Everyone was shocked to see the news that he'd been arrested." }, accept: ["to arrest", "apprehension"], hint: "逮捕 = seize and hold. Almost always passive in the news: たいほされました — 'was arrested'." },
        { id: "ja-u107l3-tsuho", type: "vocab", front: "つうほう", reading: "tsūhō", meaning: "reporting to police", example: { jp: "へんな音がしたので、すぐにつうほうしました。", en: "There was a strange noise, so I reported it to the police immediately." }, accept: ["to notify", "alert", "call the police"], hint: "通報 = 通 (through) + 報 (inform). Specifically calling the authorities — 110番につうほうする." },
        { id: "ja-u107l3-shonin", type: "vocab", front: "しょうにん", reading: "shōnin", meaning: "witness", example: { jp: "しょうにんが二人いたので、話はすぐにはっきりしました。", en: "There were two witnesses, so the story became clear quickly." }, accept: ["eyewitness", "testifier"], hint: "証人 = 証 (proof) + 人 (person). Built on the same 証 as しょうこ (evidence), which you met in u101." },
      ],
    },
    {
      id: "ja-u107l4",
      unit: 107,
      lesson: 4,
      title: "Disaster and response",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow a disaster report: さいがい ぼうさい ひなん けいほう きゅうじょ ふっこう.",
      items: [
        { id: "ja-u107l4-saigai", type: "vocab", front: "さいがい", reading: "saigai", meaning: "disaster", example: { jp: "さいがいのときのために、水と食べものをよういしています。", en: "I keep water and food ready in case of a disaster." }, accept: ["calamity", "catastrophe"], hint: "災害 = 災 (calamity) + 害 (harm). しぜんさいがい = a natural disaster — a word that matters in Japan." },
        { id: "ja-u107l4-bosai", type: "vocab", front: "ぼうさい", reading: "bōsai", meaning: "disaster prevention", example: { jp: "学校のぼうさいくんれんは年に二かいあります。", en: "The school's disaster drill takes place twice a year." }, accept: ["disaster preparedness", "emergency planning"], hint: "防災 = 防 (prevent) + 災 (disaster) — the 防 you met in ふせぎます (u101). ぼうさいくんれん = a disaster drill." },
        { id: "ja-u107l4-hinan", type: "vocab", front: "ひなん", reading: "hinan", meaning: "evacuation", example: { jp: "つよい雨がふったので、みんな学校にひなんしました。", en: "Heavy rain fell, so everyone evacuated to the school." }, accept: ["to evacuate", "taking shelter", "refuge"], hint: "避難 = 避 (avoid — the 避 in さけます) + 難 (difficulty). ひなんじょ = an evacuation centre, marked on every Japanese map." },
        { id: "ja-u107l4-keiho", type: "vocab", front: "けいほう", reading: "keihō", meaning: "warning", example: { jp: "けいほうが出たので、しごとは早くおわりになりました。", en: "A warning was issued, so work finished early." }, accept: ["alert", "alarm"], hint: "警報 = 警 (warn) + 報 (inform). Japan grades them: ちゅうい報 (advisory) is milder, とくべつけい報 (special warning) is the most serious." },
        { id: "ja-u107l4-kyujo", type: "vocab", front: "きゅうじょ", reading: "kyūjo", meaning: "rescue", example: { jp: "きゅうじょが早かったので、けが人は少なくてすみました。", en: "The rescue was quick, so there were few injuries." }, accept: ["to rescue", "relief", "saving"], hint: "救助 = 救 (rescue) + 助 (help). きゅうじょたい = a rescue team. Its cousin きゅうきゅうしゃ is the ambulance." },
        { id: "ja-u107l4-fukko", type: "vocab", front: "ふっこう", reading: "fukkō", meaning: "reconstruction", example: { jp: "ふっこうには時間がかかりますが、町は少しずつもどっています。", en: "Reconstruction takes time, but the town is gradually coming back." }, accept: ["recovery", "rebuilding", "revival"], hint: "復興 = 復 (return) + 興 (rise). Rebuilding after a disaster — a word carrying a lot of weight in modern Japan." },
      ],
    },
  ],
};
