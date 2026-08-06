// Unit 110 — しごと・てじゅん ("Work and process") — B1 / JLPT N3
// A2 (u25, u71) covers the *furniture* of work — かいぎ, しょるい, めんせつ, ざんぎょう.
// B1 is where a learner can describe how work actually moves: the steps (てじゅん,
// だんかい, こうてい), who owns them (たんとう, せきにん, ひきつぎ), how they're judged
// (のうりつ, かいぜん, たっせい) and the verbs for getting them done (しょり, じっし).
// This is the vocabulary of an email at work, not of a job interview.
export const UNIT110 = {
  id: "ja-u110",
  lang: "ja",
  title: "しごと・てじゅん",
  order: 110,
  stage: "b1",
  lessons: [
    {
      id: "ja-u110l1",
      unit: 110,
      lesson: 1,
      title: "Steps and procedure",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how something gets done, step by step: てじゅん てつづき さぎょう だんかい こうてい しゅうりょう.",
      items: [
        { id: "ja-u110l1-tejun", type: "vocab", front: "てじゅん", reading: "tejun", meaning: "procedure", example: { jp: "てじゅんどおりにやれば、だれでもできます。", en: "If you follow the procedure, anyone can do it." }, accept: ["steps", "process", "instructions"], hint: "手順 = 手 (hand) + 順 (order): the order you do things by hand. てじゅんどおり = 'as per the procedure'." },
        { id: "ja-u110l1-tetsuzuki", type: "vocab", front: "てつづき", reading: "tetsuzuki", meaning: "formalities", example: { jp: "ビザのてつづきは思ったよりかんたんでした。", en: "The visa paperwork was simpler than I'd expected." }, accept: ["paperwork", "application process", "procedure"], hint: "手続き = the official paperwork you must file. てじゅん is how you do a task; てつづき is what an office requires of you." },
        { id: "ja-u110l1-sagyo", type: "vocab", front: "さぎょう", reading: "sagyō", meaning: "work task", example: { jp: "さぎょうが多いので、みんなで分けてやりました。", en: "There was a lot of work, so we split it between us." }, accept: ["operation", "labour", "the job"], hint: "作業 = 作 (make) + 業 (work): hands-on work with a clear scope. さぎょうちゅう = 'work in progress', on every roadside sign." },
        { id: "ja-u110l1-dankai", type: "vocab", front: "だんかい", reading: "dankai", meaning: "stage", example: { jp: "いまはまだ計かくのだんかいで、始まっていません。", en: "We're still at the planning stage — it hasn't started." }, accept: ["phase", "step", "level"], hint: "段階 = 段 (step) + 階 (floor): a step on a staircase. だんかいてきに = step by step, gradually." },
        { id: "ja-u110l1-kotei", type: "vocab", front: "こうてい", reading: "kōtei", meaning: "process", example: { jp: "こうていが多いほど、時間もお金もかかります。", en: "The more steps in the process, the more time and money it takes." }, accept: ["production process", "work steps"], hint: "工程 = 工 (craft) + 程 (extent). The named stages of making something — a factory word, but common in any project." },
        { id: "ja-u110l1-shuryo", type: "vocab", front: "しゅうりょう", reading: "shūryō", meaning: "completion", example: { jp: "こうじがしゅうりょうしたので、道がまた使えます。", en: "The construction has finished, so the road is usable again." }, accept: ["to finish", "end", "conclusion"], hint: "終了 = 終 (end) + 了 (finish). The formal おわり — used for events, courses and system messages, not for a meal." },
      ],
    },
    {
      id: "ja-u110l2",
      unit: 110,
      lesson: 2,
      title: "Who owns the work",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say who is responsible and how work is handed over: たんとう そしき せきにん ほうしん ひきつぎ けんしゅう.",
      items: [
        { id: "ja-u110l2-tanto", type: "vocab", front: "たんとう", reading: "tantō", meaning: "being in charge", example: { jp: "その仕ごとのたんとうは私なので、何でも聞いてください。", en: "I'm the one in charge of that job, so please ask me anything." }, accept: ["responsibility for", "handling", "the person in charge"], hint: "担当 = 担 (carry) + 当 (assign). たんとうしゃ = the person in charge. The first question in any Japanese office: たんとうはどなたですか。" },
        { id: "ja-u110l2-soshiki", type: "vocab", front: "そしき", reading: "soshiki", meaning: "organization", example: { jp: "そしきが大きくなると、れんらくがむずかしくなります。", en: "As an organization grows, communication gets harder." }, accept: ["structure", "body", "system"], hint: "組織 = 組 (group) + 織 (weave): people woven into a structure. Also the biological word for 'tissue'." },
        { id: "ja-u110l2-sekinin", type: "vocab", front: "せきにん", reading: "sekinin", meaning: "responsibility", example: { jp: "せきにんはおもいですが、やりがいもあります。", en: "The responsibility is heavy, but the work is rewarding." }, accept: ["accountability", "duty", "liability"], hint: "責任 = 責 (blame) + 任 (entrust). せきにんをとる = to take responsibility — in Japan usually meaning to resign." },
        { id: "ja-u110l2-hoshin", type: "vocab", front: "ほうしん", reading: "hōshin", meaning: "policy", example: { jp: "会社のほうしんがかわったので、やりかたも見なおします。", en: "The company's policy changed, so we'll review how we do things too." }, accept: ["direction", "course", "approach"], hint: "方針 = 方 (direction) + 針 (needle): the compass needle. A company has a ほうしん; a government has a せいさく." },
        { id: "ja-u110l2-hikitsugi", type: "vocab", front: "ひきつぎ", reading: "hikitsugi", meaning: "handover", example: { jp: "ひきつぎがきちんとできていたので、こまりませんでした。", en: "The handover had been done properly, so I had no trouble." }, accept: ["taking over", "transfer of duties"], hint: "引き継ぎ = 引き (pull — u102) + 継ぎ (join on). Leaving a job in Japan means weeks of ひきつぎ." },
        { id: "ja-u110l2-kenshu", type: "vocab", front: "けんしゅう", reading: "kenshū", meaning: "training", example: { jp: "あたらしい人のけんしゅうは、三か月つづきます。", en: "Training for new staff continues for three months." }, accept: ["induction", "workshop", "in-service training"], hint: "研修 = 研 (polish) + 修 (master). Formal workplace training. れんしゅう is practice you do yourself." },
      ],
    },
    {
      id: "ja-u110l3",
      unit: 110,
      lesson: 3,
      title: "How work is judged",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about quality and targets: のうりつ かいぜん たっせい きじつ ひんしつ せいど.",
      items: [
        { id: "ja-u110l3-noritsu", type: "vocab", front: "のうりつ", reading: "nōritsu", meaning: "efficiency", example: { jp: "きかいを入れてから、のうりつがずいぶん上がりました。", en: "Since we brought in the machine, efficiency has risen considerably." }, accept: ["productivity", "effectiveness"], hint: "能率 = 能 (ability) + 率 (rate). のうりつがいい = efficient. Its cousin こうりつ (効率) is nearly interchangeable." },
        { id: "ja-u110l3-kaizen", type: "vocab", front: "かいぜん", reading: "kaizen", meaning: "improvement", example: { jp: "小さなかいぜんをつづけたけっか、ミスがへりました。", en: "As a result of continuing small improvements, mistakes decreased." }, accept: ["to improve", "betterment", "reform"], hint: "改善 = 改 (reform) + 善 (good). The word English borrowed as 'kaizen' — steady small improvement rather than one big change." },
        { id: "ja-u110l3-tassei", type: "vocab", front: "たっせい", reading: "tassei", meaning: "achievement", example: { jp: "もくひょうをたっせいできたので、みんなでいわいました。", en: "We were able to achieve the target, so we all celebrated." }, accept: ["to attain", "accomplishment", "reaching a goal"], hint: "達成 = 達 (reach — the たっします of u103) + 成 (become). たっせいかん = a sense of accomplishment." },
        { id: "ja-u110l3-kijitsu", type: "vocab", front: "きじつ", reading: "kijitsu", meaning: "due date", example: { jp: "きじつまでにおくれそうなので、はやめにれんらくしました。", en: "It looked like I'd be late for the deadline, so I got in touch early." }, accept: ["deadline", "appointed day"], hint: "期日 = 期 (period) + 日 (day). More formal than しめきり, and the word used on bills and official notices." },
        { id: "ja-u110l3-hinshitsu", type: "vocab", front: "ひんしつ", reading: "hinshitsu", meaning: "quality", example: { jp: "ねだんは高いですが、ひんしつがいいので長く使えます。", en: "It's expensive, but the quality is good so it lasts a long time." }, accept: ["grade", "standard"], hint: "品質 = 品 (goods) + 質 (nature). ひんしつかんり = quality control — a phrase Japanese manufacturing exported worldwide." },
        { id: "ja-u110l3-seido", type: "vocab", front: "せいど", reading: "seido", meaning: "system", example: { jp: "あたらしいせいどのおかげで、休みが取りやすくなりました。", en: "Thanks to the new system, it's become easier to take leave." }, accept: ["scheme", "institution", "arrangement"], hint: "制度 = 制 (regulate) + 度 (degree). A formal system of rules — けんこうほけんせいど, きゅうかせいど. Not a machine system, which is システム." },
      ],
    },
    {
      id: "ja-u110l4",
      unit: 110,
      lesson: 4,
      title: "Getting it done",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how work is carried out: えいぎょう しょり とりくみ てはい じっし うんえい.",
      items: [
        { id: "ja-u110l4-eigyo", type: "vocab", front: "えいぎょう", reading: "eigyō", meaning: "business operations", example: { jp: "この店は九時までえいぎょうしているので、しごとのあとでも行けます。", en: "This shop is open until nine, so I can go even after work." }, accept: ["sales", "trading", "being open"], hint: "営業 = 営 (run) + 業 (business). Two senses: a shop being open (えいぎょうちゅう) and the sales department." },
        { id: "ja-u110l4-shori", type: "vocab", front: "しょり", reading: "shori", meaning: "processing", example: { jp: "しつもんのしょりに時間がかかって、へんじがおそくなりました。", en: "Handling the questions took time, so my reply was late." }, accept: ["to handle", "disposal", "dealing with"], hint: "処理 = 処 (deal with) + 理 (logic). Used for paperwork, data and rubbish alike: ごみのしょり." },
        { id: "ja-u110l4-torikumi", type: "vocab", front: "とりくみ", reading: "torikumi", meaning: "initiative", example: { jp: "かんきょうを守るとりくみが、町ぜんたいに広がっています。", en: "Initiatives to protect the environment are spreading across the whole town." }, accept: ["effort", "programme", "undertaking"], hint: "取り組み = 取り (take — u102) + 組み (grapple): getting to grips with something. とりくみます = to tackle." },
        { id: "ja-u110l4-tehai", type: "vocab", front: "てはい", reading: "tehai", meaning: "arrangements", example: { jp: "ホテルのてはいはもうできているので、安心してください。", en: "The hotel arrangements are already made, so don't worry." }, accept: ["preparation", "to arrange", "booking"], hint: "手配 = 手 (hand) + 配 (distribute). Making the practical arrangements — tickets, rooms, people. てはいします = to sort it out." },
        { id: "ja-u110l4-jisshi", type: "vocab", front: "じっし", reading: "jisshi", meaning: "implementation", example: { jp: "あたらしいルールは、来月からじっしされます。", en: "The new rules will be implemented from next month." }, accept: ["to carry out", "enforcement", "putting into effect"], hint: "実施 = 実 (actual — u104) + 施 (carry out): making a plan actually happen. Usually passive: じっしされます." },
        { id: "ja-u110l4-unei", type: "vocab", front: "うんえい", reading: "unei", meaning: "running an operation", example: { jp: "このイベントのうんえいは、ぜんぶボランティアがしています。", en: "This event is run entirely by volunteers." }, accept: ["administration", "management", "to operate"], hint: "運営 = 運 (carry) + 営 (run). Keeping something going day to day — an event, a school, a website. けいえい decides strategy; うんえい keeps the lights on." },
      ],
    },
  ],
};
