// JA Unit 139 — ぶんぽう・8 (nuance, evidentiality, nominalization) — B1 / JLPT N3
// Strand C, grammar 8 of 8 — the last grammar unit of the band. u30 and u44 already
// taught the A2 evidentials (でしょう・はず・らしい・ようです・みたいです・かもしれません),
// so this unit takes what is left and is genuinely N3: how you got the information
// (ということです / とのことです), how sure you are (にちがいありません / とはかぎりません),
// turning a clause into a noun (ということ / ことにします / ようになります), and the focus
// particles that change what a sentence is ABOUT without changing what it says.
// Every example is two clauses, per the B1 spec. Fronts were re-checked at LEXEME level
// after the content gate found that an exact-string check had let ことにします / ようになります
// / ことがあります through against u44's ことにする / ようになる / ことがある.
export const UNIT139 = {
  id: "ja-u139",
  lang: "ja",
  title: "ぶんぽう・8",
  order: 139,
  stage: "b1",
  lessons: [
    // Lesson 1: where the information came from
    {
      id: "ja-u139l1",
      unit: 139,
      lesson: 1,
      title: "I hear that…, it must be… (でんぶん)",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report what you were told without claiming it yourself, and grade how certain you are.",
      items: [
        { id: "ja-u139l1-toiukotodesu", type: "vocab", front: "ということです", reading: "toiukotodesu", meaning: "I hear that", example: { jp: "てんきよほうによると、あしたはゆきがふるということです。", en: "According to the forecast, it's going to snow tomorrow." }, accept: ["they say that", "it is said that", "apparently"], hint: "ということです hands the claim back to its source — you are the messenger, not the author. Pairs with によると at the front of the sentence." },
        { id: "ja-u139l1-tonokotodesu", type: "vocab", front: "とのことです", reading: "tonokotodesu", meaning: "I am told that", example: { jp: "ぶちょうからでんわがありました。かいぎは3じからとのことです。", en: "The department head called. I'm told the meeting is from three." }, accept: ["the message is", "word is", "they say"], hint: "The business-letter twin of ということです. Use it when you are relaying a specific person's message, not general rumour." },
        { id: "ja-u139l1-nichigaiarimasen", type: "vocab", front: "にちがいありません", reading: "nichigaiarimasen", meaning: "must be, no doubt", example: { jp: "でんきがついています。だれかいえにいるにちがいありません。", en: "The lights are on. Someone must be home." }, accept: ["surely is", "I'm certain that", "there's no mistake"], hint: "Your own confident deduction from evidence — stronger than はず, and never used for things you were simply told." },
        { id: "ja-u139l1-hazugaarimasen", type: "vocab", front: "はずがありません", reading: "hazugaarimasen", meaning: "can't possibly be", example: { jp: "かれはまじめなひとです。うそをつくはずがありません。", en: "He's a serious person. There's no way he'd lie." }, accept: ["couldn't be", "no way", "it's impossible that"], hint: "The negative of はず — not 'probably not' but 'the facts rule it out'. Compare ないはずです, which is merely 'I expect not'." },
        { id: "ja-u139l1-towakagirimasen", type: "vocab", front: "とはかぎりません", reading: "towakagirimasen", meaning: "not necessarily", example: { jp: "たかいものが、いつもいいとはかぎりません。", en: "Expensive things aren't necessarily good." }, accept: ["not always", "isn't always the case", "doesn't have to be"], hint: "The polite way to puncture a generalization — you are not saying it is false, only that it has exceptions. Very useful in an argument." },
        { id: "ja-u139l1-doyara", type: "vocab", front: "どうやら", reading: "dōyara", meaning: "apparently", example: { jp: "みんながかさをもっています。どうやらあめがふりそうです。", en: "Everyone is carrying an umbrella. Apparently it's going to rain." }, accept: ["it seems", "evidently", "by the looks of it"], hint: "どうやら flags a guess from what you can see, and usually leans on ようです or そうです at the end of the sentence." },
      ],
    },
    // Lesson 2: how sure am I
    {
      id: "ja-u139l2",
      unit: 139,
      lesson: 2,
      title: "How sure you are",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Put a confidence level on a claim, from もしかしたら (maybe) up to まちがいなく (certainly).",
      items: [
        { id: "ja-u139l2-moshikashitara", type: "vocab", front: "もしかしたら", reading: "moshikashitara", meaning: "possibly, maybe", example: { jp: "もしかしたら、かれはもうかえったかもしれません。", en: "He may possibly have gone home already." }, accept: ["perhaps", "it could be that", "by any chance"], hint: "The weakest of the set, and it wants a partner at the end: もしかしたら…かもしれません. Leaving the sentence bare sounds unfinished." },
        { id: "ja-u139l2-osoraku", type: "vocab", front: "おそらく", reading: "osoraku", meaning: "probably (formal)", example: { jp: "みちがこんでいるので、おそらくおくれるでしょう。", en: "The roads are busy, so we'll probably be late." }, accept: ["most likely", "in all likelihood", "I expect"], hint: "The written, careful たぶん. News and reports use おそらく; friends use たぶん. Same probability, different register." },
        { id: "ja-u139l2-tashikani", type: "vocab", front: "たしかに", reading: "tashikani", meaning: "certainly, admittedly", example: { jp: "たしかにこのみせはたかいですが、りょうりはおいしいです。", en: "This restaurant is admittedly expensive, but the food is delicious." }, accept: ["indeed", "it's true that", "for sure"], hint: "たしかに…が… concedes a point before you push back. That two-part shape is the single most useful debating move at B1." },
        { id: "ja-u139l2-machigainaku", type: "vocab", front: "まちがいなく", reading: "machigainaku", meaning: "without a doubt", example: { jp: "かれはまいにちれんしゅうしたので、まちがいなくかつでしょう。", en: "He practised every day, so he'll win without a doubt." }, accept: ["definitely", "certainly", "for certain"], hint: "Literally 'without error'. Strong — keep it for things you'd stake something on, or it wears out." },
        { id: "ja-u139l2-zettaini", type: "vocab", front: "ぜったいに", reading: "zettaini", meaning: "absolutely", example: { jp: "このことは、ぜったいにだれにもいわないでください。", en: "Please don't tell absolutely anyone about this." }, accept: ["never (with negative)", "definitely", "at all costs"], hint: "With a negative it means 'never, under any circumstances'. That negative use is far commoner than the positive one." },
        { id: "ja-u139l2-kanarazushimo", type: "vocab", front: "かならずしも", reading: "kanarazushimo", meaning: "not always", example: { jp: "おかねがあるひとが、かならずしもしあわせだとはかぎりません。", en: "People with money aren't always happy." }, accept: ["not necessarily", "not invariably"], hint: "かならずしも must be followed by a negative — ません, ではない, とはかぎりません. On its own it is ungrammatical." },
      ],
    },
    // Lesson 3: turning a clause into a noun
    {
      id: "ja-u139l3",
      unit: 139,
      lesson: 3,
      title: "こと and よう: obligation and intention",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what was decided for you (ことになります), what you make a point of doing (ようにします), and what you can't get out of (わけにはいきません).",
      items: [
        { id: "ja-u139l3-toiukoto", type: "vocab", front: "ということ", reading: "toiukoto", meaning: "the fact that", example: { jp: "かれがくるということを、みんなにつたえてください。", en: "Please tell everyone the fact that he's coming." }, accept: ["that (nominalizer)", "the idea that", "meaning that"], hint: "Wraps a whole sentence up into a noun you can then mark with を or は. つまり、～ということです = 'in other words, it means that…'." },
        { id: "ja-u139l3-kotowanai", type: "vocab", front: "ことはない", reading: "kotowanai", meaning: "there's no need to", example: { jp: "じかんはまだあるので、いそぐことはないですよ。", en: "There's still time, so there's no need to hurry." }, accept: ["no call for", "you don't have to", "never mind about"], hint: "Reassurance, not permission: しなくてもいい says you may skip it, ことはない says it was never required. Plain verb + ことはない." },
        { id: "ja-u139l3-kotoninarimasu", type: "vocab", front: "ことになります", reading: "kotoninarimasu", meaning: "it has been decided that", example: { jp: "らいげつから、おおさかではたらくことになりました。", en: "It's been decided that I'll be working in Osaka from next month." }, accept: ["it turns out that", "it works out that", "be arranged that"], hint: "The decision arrives from outside — a company, a rule, circumstances. Japanese prefers this even when you did choose, because it sounds less self-important." },
        { id: "ja-u139l3-yonishimasu", type: "vocab", front: "ようにします", reading: "yōnishimasu", meaning: "make a point of doing", example: { jp: "けんこうのために、まいあさあるくようにしています。", en: "For my health, I make a point of walking every morning." }, accept: ["try to do regularly", "see to it that", "make an effort to"], hint: "An ongoing effort, not a single decision. ようにしています (continuous) is far commoner than ようにします." },
        { id: "ja-u139l3-yotoshimasu", type: "vocab", front: "ようとします", reading: "yōtoshimasu", meaning: "try to; be about to", example: { jp: "いえをでようとしたとき、でんわがなりました。", en: "Just as I was about to leave the house, the phone rang." }, accept: ["attempt to", "be on the point of", "make an effort to"], hint: "Volitional + とします. てみます is 'do it and see'; ようとします is straining at it — and often failing, which is why it so often reports an interruption." },
        { id: "ja-u139l3-wakeniwaikimasen", type: "vocab", front: "わけにはいきません", reading: "wakeniwaikimasen", meaning: "I can't (allow myself to)", example: { jp: "やくそくしたので、いかないわけにはいきません。", en: "I promised, so I can't very well not go." }, accept: ["can't just", "it wouldn't do to", "I'm not free to"], hint: "Not 'unable' but 'not allowed to by circumstances' — duty, promises, other people watching. できません is about ability; わけにはいきません is about obligation." },
      ],
    },
    // Lesson 4: focus particles
    {
      id: "ja-u139l4",
      unit: 139,
      lesson: 4,
      title: "Only, precisely, far from it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Change what a sentence emphasizes without changing the facts: しか, こそ, なんて, どころか.",
      items: [
        { id: "ja-u139l4-shika", type: "vocab", front: "しか", reading: "shika", meaning: "only (with negative)", example: { jp: "さいふに100えんしかないので、なにもかえません。", en: "I've only got 100 yen in my wallet, so I can't buy anything." }, accept: ["nothing but", "just", "merely"], hint: "しか always takes a negative verb, and it sounds disappointed. だけ is neutral: 100えんだけあります (fine) vs 100えんしかありません (not enough)." },
        { id: "ja-u139l4-koso", type: "vocab", front: "こそ", reading: "koso", meaning: "precisely, it is ~ that", example: { jp: "ことしこそ、まいにちにほんごをべんきょうします。", en: "This year for sure, I'm going to study Japanese every day." }, accept: ["exactly", "for sure this time", "the very"], hint: "こそ puts a spotlight on the word before it. こちらこそ ('no, thank YOU') is the phrase you'll use first and most." },
        { id: "ja-u139l4-nante", type: "vocab", front: "なんて", reading: "nante", meaning: "things like; how (dismissive)", example: { jp: "そんなことをいうなんて、しんじられません。", en: "I can't believe he'd say something like that." }, accept: ["such as", "the likes of", "of all things"], hint: "なんて carries an attitude — surprise, or a little contempt. わたしなんて… is how a speaker plays themselves down." },
        { id: "ja-u139l4-dokoroka", type: "vocab", front: "どころか", reading: "dokoroka", meaning: "far from it", example: { jp: "あのみせはやすいどころか、とてもたかかったです。", en: "Far from being cheap, that shop was very expensive." }, accept: ["let alone", "on the contrary", "not only not"], hint: "どころか rejects the first idea and replaces it with a stronger opposite. Stronger than むしろ, which merely corrects." },
        { id: "ja-u139l4-zutsu", type: "vocab", front: "ずつ", reading: "zutsu", meaning: "each, at a time", example: { jp: "いそがなくていいので、すこしずつおぼえてください。", en: "There's no need to hurry, so learn it little by little." }, accept: ["apiece", "per person", "bit by bit"], hint: "Number or amount + ずつ. すこしずつ ('little by little') and ひとつずつ ('one each') are the two you will actually say." },
        { id: "ja-u139l4-toka", type: "vocab", front: "とか", reading: "toka", meaning: "things like ~ and ~", example: { jp: "やすみのひは、ほんをよむとかえいがをみるとかしています。", en: "On my days off I do things like read books and watch films." }, accept: ["or something", "for example", "among others"], hint: "A casual, open-ended list — と says 'these exactly', とか says 'these and others like them'. Softens an answer nicely." },
      ],
    },
  ],
};
