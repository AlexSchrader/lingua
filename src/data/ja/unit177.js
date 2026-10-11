// Unit 177 — しごと・そしき (Career and organisations) — B2 / JLPT N2
// Block-2 house rules are documented in unit174.js.
//
// A2 taught the job title; B1 taught the working day. B2 is the vocabulary of a
// CAREER — the shape of it over years, and the organisation it happens inside.
// Deliberately avoids the words the corpus already owns (しゅうしょく, てんしょく,
// しょうしん, じょうし, ぶか, そしき, たんとう, ざんぎょう all ship below B2).
export const UNIT177 = {
  id: "ja-u177",
  lang: "ja",
  title: "しごと・そしき",
  order: 177,
  stage: "b2",
  lessons: [
    {
      id: "ja-u177l1",
      unit: 177,
      lesson: 1,
      title: "Getting in",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how someone came to be hired and what they brought with them: しゅうかつ さいよう こよう はいぞく しょくれき けいれき.",
      items: [
        { id: "ja-u177l1-shukatsu", type: "vocab", front: "しゅうかつ", reading: "shūkatsu", meaning: "job-hunting season", example: { jp: "しゅうかつの 間は、毎日 同じ 服を 着て いました。", en: "Through the job-hunting season I wore the same clothes every day." }, drill: { jp: "しゅうかつが 始まりました。", en: "The job-hunting season has started." }, accept: ["job hunting", "the graduate search", "looking for work"], hint: "shūkatsu — a clipping of しゅうしょくかつどう, job-seeking activity. It names the whole Japanese ritual: a fixed season, matching suits, dozens of interviews. The same clipping pattern gives こんかつ." },
        { id: "ja-u177l1-saiyo", type: "vocab", front: "さいよう", reading: "saiyō", meaning: "hiring", example: { jp: "今年の さいようは 少ないと 聞いて、心配に なりました。", en: "I heard hiring is light this year, and it worried me." }, drill: { jp: "さいようが すくないです。", en: "The hiring is limited." }, accept: ["recruitment", "taking someone on", "adoption"], hint: "saiyō — the same word taught in the kanji band as 採用, 採 (pick) + 用 (use). Here it is the hiring sense: picking a person and putting them to work." },
        { id: "ja-u177l1-koyo", type: "vocab", front: "こよう", reading: "koyō", meaning: "employment", example: { jp: "この 町の こようは 工場に 大きく たよって います。", en: "This town's employment leans heavily on the factory." }, drill: { jp: "こようが ふえました。", en: "Employment has increased." }, accept: ["jobs", "being employed", "the labour market"], hint: "koyō — 雇 (hire) + 用 (use): the employment RELATIONSHIP, not the act of hiring. さいよう is one decision; こよう is the standing arrangement, which is why statistics use it." },
        { id: "ja-u177l1-haizoku", type: "vocab", front: "はいぞく", reading: "haizoku", meaning: "being assigned to a post", example: { jp: "きぼうとは ちがう 場所に はいぞくされましたが、今は 気に 入って います。", en: "I was assigned somewhere other than my first choice, but I like it now." }, drill: { jp: "はいぞくが きまりました。", en: "The posting was decided." }, accept: ["posting", "placement", "being allocated"], hint: "haizoku — 配 (hand out) + 属 (belong): being allotted to a unit. It is decided for you, so it is almost always passive — はいぞくされる. しょぞく is where you then belong." },
        { id: "ja-u177l1-shokureki", type: "vocab", front: "しょくれき", reading: "shokureki", meaning: "work history", example: { jp: "しょくれきは みじかいですが、できる ことは 多いです。", en: "My work history is short, but there is a lot I can do." }, drill: { jp: "しょくれきを 書きました。", en: "I wrote out my work history." }, accept: ["employment record", "jobs held", "career to date"], hint: "shokureki — 職 (a post) + 歴 (a course of events): the list of posts you have held. That 歴 ending builds histories — がくれき for schooling, けいれき for the whole track record." },
        { id: "ja-u177l1-keireki", type: "vocab", front: "けいれき", reading: "keireki", meaning: "background (one's track record)", example: { jp: "めずらしい けいれきの 人が 入って きて、話が おもしろく なりました。", en: "Someone with an unusual background joined, and the conversation got interesting." }, drill: { jp: "けいれきが めずらしいです。", en: "The background is unusual." }, accept: ["one's history", "track record", "what one has done"], hint: "しょくれき is jobs only; けいれき is the whole path — study, travel, anything that got you here." },
      ],
    },
    {
      id: "ja-u177l2",
      unit: 177,
      lesson: 2,
      title: "Inside the organisation",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say who is responsible for what, at the level an org chart works: じんじ ぶもん かんりしょく にんむ しょくむ せきむ.",
      items: [
        { id: "ja-u177l2-jinji", type: "vocab", front: "じんじ", reading: "jinji", meaning: "personnel matters", example: { jp: "春の じんじで、多くの 人が 動きました。", en: "A lot of people moved in the spring personnel round." }, drill: { jp: "じんじが 変わりました。", en: "The personnel arrangements changed." }, accept: ["HR", "staffing", "appointments"], hint: "jinji — 人 (person) + 事 (matters): who goes where, and who decides it. In a Japanese company じんじ means the twice-yearly reshuffle as much as the department that runs it." },
        { id: "ja-u177l2-bumon", type: "vocab", front: "ぶもん", reading: "bumon", meaning: "a division", example: { jp: "この ぶもんは 人が 少ないので、一人が 多くを します。", en: "This division is short-staffed, so one person does a great deal." }, drill: { jp: "ぶもんは ちいさいです。", en: "The division is small." }, accept: ["department", "section", "arm of the business"], hint: "bumon — 部 (a section) + 門 (a gate): a division of the organisation. ぶしょ, taught in the next unit, is the specific post you sit in; ぶもん is the larger block it belongs to." },
        { id: "ja-u177l2-kanrishoku", type: "vocab", front: "かんりしょく", reading: "kanrishoku", meaning: "a management post", example: { jp: "かんりしょくに なってから、自分の 仕事を する 時間が へりました。", en: "Since moving into management, my time for my own work has shrunk." }, drill: { jp: "かんりしょくに なりました。", en: "I moved into a management post." }, accept: ["managerial position", "being a manager", "a management grade"], hint: "kanrishoku — 管理 (management) + 職 (a post): the GRADE, not the person. Crossing into かんりしょく changes your overtime rules in Japan, which is why the word carries legal weight." },
        { id: "ja-u177l2-ninmu", type: "vocab", front: "にんむ", reading: "ninmu", meaning: "a duty assigned", example: { jp: "その にんむは 重いですが、だれかが やらなければ なりません。", en: "That duty is a heavy one, but somebody has to do it." }, drill: { jp: "にんむが 重いです。", en: "The duty is a heavy one." }, accept: ["mission", "assignment", "charge"], hint: "ninmu — 任 (entrust) + 務 (duty): the particular job you have been handed, often a one-off. しょくむ is the standing duties of your post; a にんむ can end." },
        { id: "ja-u177l2-shokumu", type: "vocab", front: "しょくむ", reading: "shokumu", meaning: "the duties of a post", example: { jp: "しょくむの 中みは 紙に 書いて ありますが、実さいは もっと 広いです。", en: "The duties of the post are written down, but in practice they're broader." }, drill: { jp: "しょくむを 書きます。", en: "I write out the duties of the post." }, accept: ["job duties", "official function", "what the role covers"], hint: "にんむ is a task you are GIVEN; しょくむ is what the POST itself entails, whoever holds it." },
        { id: "ja-u177l2-sekimu", type: "vocab", front: "せきむ", reading: "sekimu", meaning: "an obligation of office", example: { jp: "安全を 守るのは、会社の せきむです。", en: "Keeping people safe is the company's obligation." }, drill: { jp: "せきむが あります。", en: "There is an obligation of office." }, accept: ["responsibility", "bounden duty", "what one is answerable for"], hint: "sekimu — 責 (responsibility) + 務 (duty): a duty you can be held to. せきにん is the responsibility itself; せきむ is the specific thing it requires of you." },
      ],
    },
    {
      id: "ja-u177l3",
      unit: 177,
      lesson: 3,
      title: "How the work runs",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe working arrangements and how a piece of work is handed over: ざいたく はけん きゅうけい ぎょうむ いらい たいぐう.",
      items: [
        { id: "ja-u177l3-zaitaku", type: "vocab", front: "ざいたく", reading: "zaitaku", meaning: "working from home", example: { jp: "ざいたくに なってから、家族と 話す 時間が ふえました。", en: "Since moving to working from home, I talk with my family more." }, drill: { jp: "ざいたくに なりました。", en: "We moved to working from home." }, accept: ["remote work", "at home", "telework"], hint: "zaitaku — 在 (be present) + 宅 (a residence): being at home. ざいたくきんむ is the full term, and ざいたく alone also covers a delivery finding you in — ざいたくでしたか." },
        { id: "ja-u177l3-haken", type: "vocab", front: "はけん", reading: "haken", meaning: "being sent on assignment", example: { jp: "はけんで 三か月だけ 来ましたが、その まま のこりました。", en: "I came on a three-month assignment and simply stayed." }, drill: { jp: "はけんで 来ました。", en: "I came on assignment." }, accept: ["dispatch", "secondment", "agency placement"], hint: "haken — 派 (send out) + 遣 (dispatch). Two senses matter in Japan: being seconded somewhere, and はけんしゃいん, an agency worker whose employer is not the company they work in." },
        { id: "ja-u177l3-kyukei", type: "vocab", front: "きゅうけい", reading: "kyūkei", meaning: "a break", example: { jp: "きゅうけいを きちんと 取ると、午後の 仕事が 進みます。", en: "If you take your break properly, the afternoon's work goes better." }, drill: { jp: "きゅうけいを 取ります。", en: "I take a break." }, accept: ["rest period", "a pause", "time out"], hint: "kyūkei — 休 (rest) + 憩 (take a breather): a short break inside the working day. やすみ is a day off or a holiday; きゅうけい is fifteen minutes." },
        { id: "ja-u177l3-gyomu", type: "vocab", front: "ぎょうむ", reading: "gyōmu", meaning: "operational work", example: { jp: "ぎょうむの ないようが 変わったので、やり方も 新しく しました。", en: "The content of the work changed, so we made the method new too." }, drill: { jp: "ぎょうむが 変わりました。", en: "The operational work changed." }, accept: ["business duties", "operations", "the work itself"], hint: "gyōmu — 業 (trade, work) + 務 (duty): the work the organisation does, as a category. しごと is yours; ぎょうむ is the company's, which is why forms ask for ぎょうむないよう." },
        { id: "ja-u177l3-irai", type: "vocab", front: "いらい", reading: "irai", meaning: "a formal request", example: { jp: "外の 会社から いらいが 来て、急に いそがしく なりました。", en: "A request came from an outside company, and things suddenly got busy." }, drill: { jp: "いらいが 来ました。", en: "A request came in." }, accept: ["commission", "asking someone to do it", "an order"], hint: "irai — 依 (rely) + 頼 (request): asking somebody to take work on, with the reliance built into it. たのみ is a favour between people; an いらい is a commission, often paid." },
        { id: "ja-u177l3-taigu", type: "vocab", front: "たいぐう", reading: "taigū", meaning: "how staff are treated", example: { jp: "たいぐうが よく なったので、やめる 人が へりました。", en: "Conditions improved, so fewer people left." }, drill: { jp: "たいぐうが よく なりました。", en: "Conditions improved." }, accept: ["terms", "treatment", "pay and conditions"], hint: "taigū — 待 (treat, wait on) + 遇 (meet): how an employer handles you, with pay, leave and hours taken together. きゅうりょう is only the money; たいぐう is the whole package." },
      ],
    },
    {
      id: "ja-u177l4",
      unit: 177,
      lesson: 4,
      title: "Staying and leaving",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a career over years — length of service, pay, and moving on: きんぞく ざいしょく しょうきゅう ねんしゅう りしょく じんざい.",
      items: [
        { id: "ja-u177l4-kinzoku", type: "vocab", front: "きんぞく", reading: "kinzoku", meaning: "years of service", example: { jp: "きんぞく 十年で、長い 休みが もらえます。", en: "At ten years' service you get an extended break." }, drill: { jp: "きんぞくが 長いです。", en: "The service is long." }, accept: ["length of service", "continuous employment", "tenure"], hint: "kinzoku — 勤 (serve) + 続 (continue): unbroken service with one employer. Careful — きんぞく also spells 金属, metal, with an identical reading, and only context separates them." },
        { id: "ja-u177l4-zaishoku", type: "vocab", front: "ざいしょく", reading: "zaishoku", meaning: "being in post", example: { jp: "ざいしょく中に 学校へ 通って、あたらしい 力を つけました。", en: "While in post I went to classes and picked up new skills." }, drill: { jp: "ざいしょくの 間は いそがしいです。", en: "While in post I am busy." }, accept: ["holding the position", "in office", "while employed"], hint: "zaishoku — 在 (be present) + 職 (a post): currently holding the post. ざいしょく中 means during your tenure, and it stands against りしょく, leaving, taught at the end of this lesson." },
        { id: "ja-u177l4-shokyu", type: "vocab", front: "しょうきゅう", reading: "shōkyū", meaning: "a pay rise", example: { jp: "しょうきゅうは 小さかったですが、みとめられた 気が しました。", en: "The pay rise was small, but I felt recognised." }, drill: { jp: "しょうきゅうが ありました。", en: "There was a pay rise." }, accept: ["salary increase", "a raise", "a pay increase"], hint: "shōkyū — 昇 (rise) + 給 (pay): the pay going up. しょうしん is promotion in RANK, and in Japan the two usually move together but are named separately." },
        { id: "ja-u177l4-nenshu", type: "vocab", front: "ねんしゅう", reading: "nenshū", meaning: "annual income", example: { jp: "ねんしゅうより、家に 帰れる 時間の ほうが 大切です。", en: "The time I get home matters more to me than annual income." }, drill: { jp: "ねんしゅうが ふえました。", en: "The annual income rose." }, accept: ["yearly earnings", "salary a year", "income for the year"], hint: "nenshū — 年 (year) + 収 (income taken in): what you earn in a year, before tax. It is the figure Japanese job adverts quote, since monthly pay there hides two large bonuses." },
        { id: "ja-u177l4-rishoku", type: "vocab", front: "りしょく", reading: "rishoku", meaning: "leaving a job (quitting a post)", example: { jp: "りしょくの 理ゆうを 聞かれましたが、うまく 言えませんでした。", en: "I was asked my reason for leaving, but I couldn't put it well." }, drill: { jp: "りしょくを 決めました。", en: "I decided to leave the job." }, accept: ["resignation", "quitting", "departure"], hint: "rishoku — 離 (leave) + 職 (a post): departing a post for any reason. たいしょく implies retiring or a full exit; りしょく is the neutral word a form uses." },
        { id: "ja-u177l4-jinzai", type: "vocab", front: "じんざい", reading: "jinzai", meaning: "talented staff", example: { jp: "いい じんざいが 集まる 会社は、いい 仕事も 集まります。", en: "A company that gathers good people gathers good work too." }, drill: { jp: "じんざいが あつまります。", en: "Talented staff gather." }, accept: ["human resources", "capable people", "talent"], hint: "jinzai — 人 (person) + 材 (material, timber): people as the material a business is built from. It sounds blunter translated than it does in use — じんざいふそく is an ordinary business phrase." },
      ],
    },
  ],
};
