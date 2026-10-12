// Unit 101 — げんいん・けっか (Cause and consequence) — B1 / JLPT N3
// Strand B. The connectives that tie two events together: blame and credit
// (せいで／おかげで), consequence (したがって／そこで), condition (かぎり／たとえ／さえ),
// and the verbs of influence (あたえる／まねく／いたる).
// げんいん, けっか, りゆう and から／ので are already taught below A2 — this unit adds the
// B1 layer on top of them, so they appear in examples but are not re-taught.
// lang/unit/lesson are stamped in src/data/index.js.
export const UNIT101 = {
  id: "ja-u101",
  lang: "ja",
  title: "げんいん・けっか",
  order: 101,
  stage: "b1",
  lessons: [
    {
      id: "ja-u101l1",
      unit: 101,
      lesson: 1,
      title: "Naming the cause",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what caused something, and whether you blame it or thank it: せいで おかげで きっかけ はいけい ひきおこす つながる.",
      items: [
        { id: "ja-u101l1-seide", type: "vocab", front: "せいで", reading: "seide", meaning: "because of (blame)", example: { jp: "あめの せいで でんしゃが とまりましたから、やくそくの じかんに おくれました。", en: "Because of the rain the trains stopped, so I was late for my appointment." }, drill: { jp: "ゆきの せいで おくれました。", en: "I was late because of the snow." }, accept: ["due to", "thanks to (negative)", "on account of"], hint: "せいで and おかげで are the same grammar with opposite feeling: せいで blames, おかげで thanks. Choosing the wrong one is heard as sarcasm." },
        { id: "ja-u101l1-okagede", type: "vocab", front: "おかげで", reading: "okagede", meaning: "thanks to (with de)", example: { jp: "ともだちが てつだって くれた おかげで、しごとが はやく おわりました。", en: "Thanks to my friend helping, the work finished early." }, drill: { jp: "くすりの おかげで よく なりました。", en: "Thanks to the medicine I got better." }, accept: ["because of (positive)", "owing to", "all down to"], hint: "o-ka-ge-DE — four beats. The exact mirror of せいで: same grammar, opposite feeling. おかげで credits a good outcome, せいで blames a bad one, so swapping them is a real insult." },
        { id: "ja-u101l1-kikkake", type: "vocab", front: "きっかけ", reading: "kikkake", meaning: "the thing that started it", example: { jp: "この ほんを よんだ ことが きっかけで、にほんごの べんきょうを はじめました。", en: "Reading this book is what got me started studying Japanese." }, drill: { jp: "きっかけは ともだちの はなしでした。", en: "What started it was a friend's remark." }, accept: ["trigger", "opportunity", "what started it"], hint: "kik-KA-ke — small pause after ki. The one small thing that set a chain going, so it is usually looked back on. げんいん is the cause that explains an outcome; きっかけ is merely the moment it began." },
        { id: "ja-u101l1-haikei", type: "vocab", front: "はいけい", reading: "haikei", meaning: "background", example: { jp: "その もんだいの はいけいを しらべてから、みんなで はなしました。", en: "We looked into the background of that problem, then discussed it together." }, drill: { jp: "はいけいを せつめいします。", en: "I will explain the background." }, accept: ["context", "circumstances", "backdrop"], hint: "hai-KEI — two beats, kei said as written. はい is behind and けい is a view, so it is the scene behind the scene. It also means the backdrop of a photo, the literal sense the figurative one grew from." },
        { id: "ja-u101l1-hikiokosu", type: "vocab", front: "ひきおこす", reading: "hikiokosu", meaning: "to bring about", example: { jp: "つよい かぜが おおきな じこを ひきおこしました。", en: "The strong wind brought about a serious accident." }, drill: { jp: "つよい あめが じこを ひきおこす。", en: "Heavy rain causes accidents." }, accept: ["to cause", "to give rise to", "to trigger"], hint: "ひきおこす takes a bad outcome as its object — じこ, もんだい, びょうき. You never ひきおこす good news." },
        { id: "ja-u101l1-tsunagaru", type: "vocab", front: "つながる", reading: "tsunagaru", meaning: "to lead to", example: { jp: "まいにちの れんしゅうが しあいの けっかに つながります。", en: "Daily practice leads to the result in the match." }, drill: { jp: "この みちは えきに つながる。", en: "This road leads to the station." }, accept: ["to connect", "to result in", "to be linked"], hint: "tsu-na-GA-ru — four beats. What it leads TO takes に. It happens by itself, so the result is not anyone's doing; joining two things on purpose is つなげる, the same る-versus-げる split." },
      ],
    },
    {
      id: "ja-u101l2",
      unit: 101,
      lesson: 2,
      title: "Stating the consequence",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Carry a first sentence through to its result: えいきょう けっきょく ついに したがって そこで そのために.",
      items: [
        { id: "ja-u101l2-eikyo", type: "vocab", front: "えいきょう", reading: "eikyō", meaning: "influence", example: { jp: "てんきの えいきょうで、やさいの ねだんが たかく なりました。", en: "Under the influence of the weather, vegetable prices have gone up." }, drill: { jp: "えいきょうが おおきいです。", en: "The influence is great." }, accept: ["effect", "impact", "a bearing on"], hint: "ei-KYŌ — the second beat is long. えい is a shadow and きょう is a response, so it is how one thing shades another. 「えいきょうを うける」 is to be affected; 「えいきょうを あたえる」 is to affect." },
        { id: "ja-u101l2-kekkyoku", type: "vocab", front: "けっきょく", reading: "kekkyoku", meaning: "in the end", example: { jp: "いろいろ かんがえましたが、けっきょく いきませんでした。", en: "I thought about it a lot, but in the end I didn't go." }, drill: { jp: "けっきょく なにも かいませんでした。", en: "In the end I bought nothing." }, accept: ["after all", "ultimately", "eventually"], hint: "けっきょく reports how a long back-and-forth actually finished — often against what you first intended." },
        { id: "ja-u101l2-tsuini", type: "vocab", front: "ついに", reading: "tsuini", meaning: "finally (at long last)", example: { jp: "ながい あいだ まちましたが、ついに でんしゃが きました。", en: "We waited a long time, and the train finally came." }, drill: { jp: "ついに こたえが わかりました。", en: "At last I understood the answer." }, accept: ["at last", "in the end", "finally (after waiting)"], hint: "tsu-i-NI — three beats. It marks the end of a long wait, so it carries relief or weight. やっと is the warm everyday version; けっきょく is colder and often disappointed." },
        { id: "ja-u101l2-shitagatte", type: "vocab", front: "したがって", reading: "shitagatte", meaning: "therefore (accordingly)", example: { jp: "きょうは やすみです。したがって、みせは あいて いません。", en: "Today is a holiday. Therefore the shop is not open." }, drill: { jp: "したがって しあいは ありません。", en: "Therefore there is no match." }, accept: ["consequently", "accordingly", "thus"], hint: "したがって is written/formal — notices, reports, and news. In conversation people say だから." },
        { id: "ja-u101l2-sokode", type: "vocab", front: "そこで", reading: "sokode", meaning: "and so (at that point)", example: { jp: "あめが ふって きました。そこで、タクシーで かえる ことに しました。", en: "It started raining. And so I decided to go home by taxi." }, drill: { jp: "そこで かんがえを かえました。", en: "At that point I changed my mind." }, accept: ["so", "at that point", "thereupon"], hint: "so-ko-DE — three beats. Literally there, and then: the previous sentence created a situation and this is what you did about it. ⚠️ Not the place word そこで, in that place — same kana, different job." },
        { id: "ja-u101l2-sonotameni", type: "vocab", front: "そのために", reading: "sonotameni", meaning: "for that reason", example: { jp: "らいしゅう しけんが あります。そのために、まいにち べんきょうして います。", en: "There's an exam next week. For that reason I'm studying every day." }, drill: { jp: "そのために まいあさ はしって います。", en: "For that reason I run every morning." }, accept: ["because of that", "to that end", "so"], hint: "so-no-ta-me-NI — five beats. ため is a purpose, so it points FORWARD to a goal as often as it points back to a reason. 「そのために」 before a plan is in order to; after a fact it is because of that." },
      ],
    },
    {
      id: "ja-u101l3",
      unit: 101,
      lesson: 3,
      title: "Conditions",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Put a condition on what you say: かぎり それなら たとえ かりに さえ かわりに.",
      items: [
        { id: "ja-u101l3-kagiri", type: "vocab", front: "かぎり", reading: "kagiri", meaning: "as far as", example: { jp: "わたしが しって いる かぎり、あの みせは にちようびも あいて います。", en: "As far as I know, that shop is open on Sundays too." }, drill: { jp: "みた かぎり もんだいは ありません。", en: "As far as I saw, there is no problem." }, accept: ["as long as", "to the extent that", "limit"], hint: "しって いる かぎり = as far as I know — it fences your claim to what you can actually vouch for." },
        { id: "ja-u101l3-sorenara", type: "vocab", front: "それなら", reading: "sorenara", meaning: "in that case", example: { jp: "あしたは いそがしいですか。それなら、あさっての ほうが いいですね。", en: "Are you busy tomorrow? In that case the day after would be better." }, drill: { jp: "それなら わたしが いきます。", en: "In that case I will go." }, accept: ["then", "if so", "if that's true"], hint: "so-re-NA-ra — four beats. それ is that plus なら, if: taking what the other person just said as the condition. It is the word that keeps a conversation moving rather than restating it." },
        { id: "ja-u101l3-tatoe", type: "vocab", front: "たとえ", reading: "tatoe", meaning: "even if", example: { jp: "たとえ あめが ふっても、しあいは やります。", en: "Even if it rains, the match goes ahead." }, drill: { jp: "たとえ むずかしくても やります。", en: "Even if it is hard, I will do it." }, accept: ["even though", "supposing", "no matter if"], hint: "たとえ always pairs with ～ても later in the sentence. Hearing たとえ, wait for the ても." },
        { id: "ja-u101l3-karini", type: "vocab", front: "かりに", reading: "karini", meaning: "supposing", example: { jp: "かりに この けいかくが だめでも、ほかの ほうほうが あります。", en: "Supposing this plan fails, there are other methods." }, drill: { jp: "かりに まけても れんしゅうは つづけます。", en: "Supposing we lose, we will keep practising." }, accept: ["hypothetically", "for the sake of argument", "if"], hint: "ka-ri-NI — three beats. かり is temporary, so it flags the whole case as made up for argument's sake. たとえ concedes something that may really happen; かりに invents one that probably will not." },
        { id: "ja-u101l3-sae", type: "vocab", front: "さえ", reading: "sae", meaning: "if only", example: { jp: "じかんさえ あれば、わたしも てつだいます。", en: "If only there's time, I'll help too." }, drill: { jp: "みずさえ あれば だいじょうぶです。", en: "As long as there is water, it is fine." }, accept: ["even", "just", "as long as"], hint: "さえ attaches straight to the noun — じかんさえ, これさえ. With ～ば it means \"that alone is enough\"." },
        { id: "ja-u101l3-kawarini", type: "vocab", front: "かわりに", reading: "kawarini", meaning: "instead", example: { jp: "きょうは あにが いないので、わたしが かわりに いきます。", en: "My older brother isn't here today, so I'll go instead." }, drill: { jp: "バスの かわりに でんしゃで いきます。", en: "I will go by train instead of the bus." }, accept: ["in place of", "in return", "on behalf of"], hint: "ka-wa-ri-NI — four beats. かわり is a substitute plus に. ⚠️ It also means in return: 「てつだう かわりに ごはんを ごちそうします」 — I help, and in exchange I get fed." },
      ],
    },
    {
      id: "ja-u101l4",
      unit: 101,
      lesson: 4,
      title: "Effects and reactions",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how one thing acts on another: あたえる まねく しめす いたる はんのう によって.",
      items: [
        { id: "ja-u101l4-ataeru", type: "vocab", front: "あたえる", reading: "ataeru", meaning: "to give", example: { jp: "その ニュースは まちの ひとに おおきな えいきょうを あたえました。", en: "That news had a big effect on the people of the town." }, drill: { jp: "えいきょうを あたえる。", en: "It gives an influence." }, accept: ["to grant", "to have (an effect)", "to provide"], hint: "えいきょうを あたえる is the set phrase for \"to affect\" — あげます is for handing someone a present, あたえる for abstract things." },
        { id: "ja-u101l4-maneku", type: "vocab", front: "まねく", reading: "maneku", meaning: "to invite (a result)", example: { jp: "じゅんびが たりないと、しっぱいを まねきます。", en: "If preparation is lacking, it invites failure." }, drill: { jp: "むりを すると びょうきを まねく。", en: "Overdoing it brings on illness." }, accept: ["to bring on", "to cause", "to invite"], hint: "ma-NE-ku — three beats. Its plain sense is to beckon someone over, and the figurative one keeps that image: you waved the bad outcome in. So it is nearly always something unwelcome." },
        { id: "ja-u101l4-shimesu", type: "vocab", front: "しめす", reading: "shimesu", meaning: "to indicate", example: { jp: "この ちずは えきまでの みちを しめして います。", en: "This map indicates the route to the station." }, drill: { jp: "ちずで ばしょを しめす。", en: "I indicate the place on the map." }, accept: ["to show", "to point out", "to demonstrate"], hint: "shi-ME-su — three beats. Pointing something out so another person can see it — a map, a figure, an example. みせる is simply to show; しめす implies you are making a point with it." },
        { id: "ja-u101l4-itaru", type: "vocab", front: "いたる", reading: "itaru", meaning: "to reach", example: { jp: "ながい かいぎの あと、みんなが なっとくする けっかに いたりました。", en: "After a long meeting, we reached a result everyone accepted." }, drill: { jp: "この みちは うみに いたる。", en: "This road reaches the sea." }, accept: ["to arrive at", "to lead to", "to culminate in"], hint: "i-TA-ru — three beats. Arriving at a far end after a long process, so it is formal and slightly literary. Where it arrives takes に. 「げんざいに いたる」 means right up to the present day." },
        { id: "ja-u101l4-hanno", type: "vocab", front: "はんのう", reading: "hannō", meaning: "reaction", example: { jp: "その ニュースを きいた ひとたちの はんのうは とても つよかったです。", en: "The reaction of the people who heard that news was very strong." }, drill: { jp: "はんのうが つよかったです。", en: "The reaction was strong." }, accept: ["response", "reception", "the way people took it"], hint: "han-NŌ — the ん is held and the last beat is long. はん is to turn back and のう is to answer, so it is what comes back at you. It is also a chemical reaction, the same word in a lab." },
        { id: "ja-u101l4-niyotte", type: "vocab", front: "によって", reading: "niyotte", meaning: "depending on", example: { jp: "ひとによって かんがえかたが ちがいますから、よく はなす ことが たいせつです。", en: "Ways of thinking differ depending on the person, so talking it through matters." }, drill: { jp: "まちによって ことばが ちがいます。", en: "The words differ from town to town." }, accept: ["by", "according to", "through"], hint: "Two jobs: ひとによって = varies by person; じこによって = caused by an accident. The noun in front tells you which." },
      ],
    },
  ],
};
