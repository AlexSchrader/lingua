// JA Unit 118 — もんだい・かいけつ (Problems and solutions) — B1 / JLPT N3
// ─────────────────────────────────────────────────────────────────────────────
// Block-2 house rules, applied to every unit in this block (118-136):
//   • Verbs are headworded in the PLAIN form. This reverses the first draft, which
//     used ～ます on a corpus-wide count of 208 ます to 11 plain. That count was real
//     and the conclusion was still wrong: the neighbours are what matter, and both
//     of them are plain — the newest shipped units (u88-u98) and, decisively, block
//     1 of this same band (84 plain-shaped fronts to 1 ます). The draft's own second
//     reason — that front-uniqueness only catches a re-teach when the new front is
//     spelled like the old one — is symmetric between the forms, so it argued for
//     matching the neighbours, not for ます. Headwording in ます against a plain-form
//     neighbour manufactured EIGHT invisible re-teaches of words block 1 already
//     teaches (たしかめる うたがう ふせぐ みとめる ことわる すすめる ふりかえる へる):
//     no validator compares たしかめます to たしかめる. Switching to plain turned all
//     eight into ordinary duplicate-front errors, which is how they were found.
//   • Examples are kana, polite register. 2200 shipped ja examples are 11.5% kanji
//     and that 11.5% is entirely the kanji units — vocab units are kana, and this
//     block keeps that split. Polite ます/です throughout gives block 3's register
//     units a clean 丁寧語 baseline to contrast 普通体 against.
//   • B1 examples are two clauses joined by a connective (blueprint §1) — the
//     sentence carries the word's use, it isn't decoration around a gloss.
// ─────────────────────────────────────────────────────────────────────────────
// Something goes wrong → you size it up → you handle it → it resolves. The four
// lessons are that arc, so the unit reads as one situation rather than a word list.
export const UNIT118 = {
  id: "ja-u118",
  lang: "ja",
  title: "もんだい・かいけつ",
  order: 118,
  stage: "b1",
  lessons: [
    {
      id: "ja-u118l1",
      unit: 118,
      lesson: 1,
      title: "When something goes wrong",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that something has gone wrong and how much it is bothering you: トラブル なやむ ミス まちがい めんどう くじょう.",
      items: [
        { id: "ja-u118l1-toraburu", type: "vocab", front: "トラブル", reading: "toraburu", meaning: "trouble", example: { jp: "かいしゃでトラブルがあったので、かえるのがおそくなりました。", en: "There was trouble at work, so I got home late." }, drill: { jp: "トラブルがつづいています。", en: "The trouble is continuing." }, accept: ["problem", "issue", "a hitch"], hint: "to-ra-BU-ru — four beats. Borrowed, and narrower than English: it means an incident between people or with a machine, not personal distress. A worry inside you is なやみ." },
        { id: "ja-u118l1-nayamu", type: "vocab", front: "なやむ", reading: "nayamu", meaning: "agonize over", example: { jp: "しごとのことでなやんでいて、よるもよくねられません。", en: "I've been agonizing over work, and I can't sleep well at night either." }, drill: { jp: "こたえがわからなくてなやむ。", en: "I agonise because I do not know the answer." }, accept: ["to worry over", "be torn", "struggle with"], hint: "na-YA-mu — three beats. Long, circling worry over a decision, not a quick fright. しんぱいする is worrying ABOUT something; なやむ is being unable to choose." },
        { id: "ja-u118l1-misu", type: "vocab", front: "ミス", reading: "misu", meaning: "slip-up", example: { jp: "ちいさなミスをしたので、はじめからやりなおしました。", en: "I made a small slip-up, so I started again from the beginning." }, drill: { jp: "ミスをみとめました。", en: "I admitted the slip-up." }, accept: ["mistake", "error", "a slip"], hint: "MI-su — two beats. Borrowed from miss, and used of a careless slip at work. まちがい covers any error including a wrong answer; ミス implies it should not have happened." },
        { id: "ja-u118l1-machigai", type: "vocab", front: "まちがい", reading: "machigai", meaning: "mistake", example: { jp: "じゅうしょにまちがいがあって、にもつがかえってきました。", en: "There was a mistake in the address, so the parcel came back." }, drill: { jp: "まちがいをなおしました。", en: "I corrected the mistake." }, accept: ["error", "mix-up", "a wrong answer"], hint: "ma-chi-GA-i — four beats. The noun of まちがえる: something that came out wrong. It is neutral — a wrong answer, a wrong address — where ミス carries blame." },
        { id: "ja-u118l1-mendo", type: "vocab", front: "めんどう", reading: "mendō", meaning: "a hassle", example: { jp: "そうじはめんどうですが、しないとへやがきたなくなります。", en: "Cleaning is a hassle, but if I don't do it the room gets dirty." }, drill: { jp: "めんどうですがやります。", en: "It is a hassle, but I will do it." }, accept: ["troublesome", "bothersome", "a pain"], hint: "men-DŌ — the ん is held and the last beat is long. It is effort you resent, not difficulty — a simple task can be めんどう if it takes four steps. 「めんどうを かける」 is to put someone out." },
        { id: "ja-u118l1-kujo", type: "vocab", front: "くじょう", reading: "kujō", meaning: "complaint", example: { jp: "おきゃくさんからくじょうがきたので、みせのひとがあやまりました。", en: "A complaint came in from a customer, so the shop staff apologized." }, drill: { jp: "くじょうがきました。", en: "A complaint came in." }, accept: ["grievance", "formal complaint", "a complaint"], hint: "ku-JŌ — the second beat is long. く is bitterness and じょう is a circumstance, so it is a grievance put into words. It is formal: you ふまん quietly, but you くじょう out loud." },
      ],
    },
    {
      id: "ja-u118l2",
      unit: 118,
      lesson: 2,
      title: "Sizing it up",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Judge how serious a problem is and what is actually wrong with it: しんこく そんがい けっかん やっかい くろう きにする.",
      items: [
        { id: "ja-u118l2-shinkoku", type: "vocab", front: "しんこく", reading: "shinkoku", meaning: "serious (grave and severe)", example: { jp: "びょうきがしんこくになるまえに、びょういんへいきました。", en: "I went to the hospital before the illness got serious." }, drill: { jp: "しんこくになります。", en: "It becomes serious." }, accept: ["grave", "severe", "no laughing matter"], hint: "shin-KO-ku — three beats, the ん held. しん is deep and こく is harsh, so it is a problem that has gone deep. しんけん is a person being earnest; しんこく is a situation being bad." },
        { id: "ja-u118l2-songai", type: "vocab", front: "そんがい", reading: "songai", meaning: "damage (financial loss)", example: { jp: "たいふうでそんがいがおおきくて、みせはやすみました。", en: "The typhoon damage was big, so the shop closed." }, drill: { jp: "そんがいをはらいました。", en: "They paid the damages." }, accept: ["loss", "harm", "losses"], hint: "son-GA-i — three beats, the ん held. そん is a loss and がい is harm, so it is loss you can put a figure on. Physical breakage is こしょう; そんがい is what it cost." },
        { id: "ja-u118l2-kekkan", type: "vocab", front: "けっかん", reading: "kekkan", meaning: "a defect", example: { jp: "くるまにけっかんがみつかったので、みせにもどしました。", en: "A defect was found in the car, so I took it back to the shop." }, drill: { jp: "けっかんをしらべました。", en: "They investigated the defect." }, accept: ["fault", "flaw", "shortcoming"], hint: "KEK-kan — small pause, then the ん held. けつ is lacking and かん is a flaw, so something is missing that should be there. It is a manufacturing word — a recall notice uses it." },
        { id: "ja-u118l2-yakkai", type: "vocab", front: "やっかい", reading: "yakkai", meaning: "troublesome", example: { jp: "やっかいなしごとをたのまれて、こまっています。", en: "I was asked to do a troublesome job, and I'm stuck with it." }, drill: { jp: "やっかいなしつもんでした。", en: "It was a troublesome question." }, accept: ["a nuisance", "awkward", "burdensome"], hint: "YAK-kai — small pause, then kai. Stronger than めんどう: a やっかい thing is not just tiresome but hard to get rid of. 「やっかいな ひと」 is someone you cannot easily shake off." },
        { id: "ja-u118l2-kuro", type: "vocab", front: "くろう", reading: "kurō", meaning: "hardship", example: { jp: "はじめはくろうしましたが、いまはなれました。", en: "I had a hard time at first, but I'm used to it now." }, drill: { jp: "くろうがおおかったです。", en: "There was a lot of hardship." }, accept: ["trouble", "toil", "having a hard time"], hint: "ku-RŌ — the second beat is long. く is suffering and ろう is labour, so it is effort that cost you something. It is often said with pride, looking back: 「くろうしました」." },
        { id: "ja-u118l2-kinisuru", type: "vocab", front: "きにする", reading: "kinisuru", meaning: "worry about", example: { jp: "みんなのいけんをきにしていたら、なにもきめられません。", en: "If you worry about everyone's opinions, you can't decide anything." }, drill: { jp: "けっかをきにする。", en: "I let the result bother me." }, accept: ["to mind", "care about", "let it bother you"], hint: "ki-ni-SU-ru — four beats. With する YOU choose to mind it, so what bothers you takes を. 「きになる」, with なる, is the thing bothering you without your consent — one kana, opposite agency." },
      ],
    },
    {
      id: "ja-u118l3",
      unit: 118,
      lesson: 3,
      title: "Dealing with it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how a problem is being handled, step by step: たいしょ しょり てつづき てま ていあん そち.",
      items: [
        { id: "ja-u118l3-taisho", type: "vocab", front: "たいしょ", reading: "taisho", meaning: "dealing with it", example: { jp: "はやくたいしょしたので、おおきなもんだいになりませんでした。", en: "We dealt with it quickly, so it didn't become a big problem." }, drill: { jp: "たいしょをかんがえます。", en: "We consider how to deal with it." }, accept: ["handling", "coping with", "taking action on"], hint: "tai-SHO — two beats. たい is facing and しょ is to handle, so it is doing something about a problem in front of you. たいさく is the plan; たいしょ is the acting on it." },
        { id: "ja-u118l3-shori", type: "vocab", front: "しょり", reading: "shori", meaning: "processing", example: { jp: "メールのしょりがおわってから、ひるごはんをたべます。", en: "I'll eat lunch after the processing of the emails is finished." }, drill: { jp: "しょりがおわりました。", en: "The processing is finished." }, accept: ["dealing with", "handling", "disposal"], hint: "SHO-ri — two beats. しょ is to deal with and り is to arrange, so it is working through items one by one. It fits paperwork, data and rubbish — anything in a queue." },
        { id: "ja-u118l3-tetsuzuki", type: "vocab", front: "てつづき", reading: "tetsuzuki", meaning: "paperwork", example: { jp: "ぎんこうのてつづきがおわったので、あんしんしました。", en: "The bank paperwork is finished, so I felt relieved." }, drill: { jp: "てつづきがめんどうです。", en: "The paperwork is a hassle." }, accept: ["procedure", "formalities", "process"], hint: "te-tsu-ZU-ki — four beats. て is a hand and つづき is a continuation, so it is the chain of steps you must do by hand. てじゅん is the order of steps; てつづき is the official version." },
        { id: "ja-u118l3-tema", type: "vocab", front: "てま", reading: "tema", meaning: "time and effort", example: { jp: "てまがかかるので、みんないやがります。", en: "It takes time and effort, so nobody wants to do it." }, drill: { jp: "てまはすこしです。", en: "It takes only a little effort." }, accept: ["trouble", "labour", "the work involved"], hint: "TE-ma — two beats. て is a hand and ま is an interval, so it is the hands-and-time a job eats. 「てまが かかる」 is the set phrase, and 「てまを かける」 is to take trouble over something." },
        { id: "ja-u118l3-teian", type: "vocab", front: "ていあん", reading: "teian", meaning: "proposal", example: { jp: "ともだちがえいがをていあんしたので、いっしょにみにいきました。", en: "A friend proposed a film, so we went to see it together." }, drill: { jp: "ていあんをききました。", en: "I listened to the proposal." }, accept: ["suggestion", "proposing", "a proposal"], hint: "tei-AN — two beats, the ん held. てい is to put forward and あん is a plan. It is more formal than いけん: a ていあん is something a meeting can vote on." },
        { id: "ja-u118l3-sochi", type: "vocab", front: "そち", reading: "sochi", meaning: "a measure taken", example: { jp: "みせがすぐにそちをとったので、もんだいはおおきくなりませんでした。", en: "The shop took measures at once, so the problem didn't grow." }, drill: { jp: "そちがおそかったです。", en: "The measures came too late." }, accept: ["steps", "action taken", "provision"], hint: "SO-chi — two beats. そ is to arrange and ち is to place, so it is a step actually put in place. たいさく is on paper; そち has been done." },
      ],
    },
    {
      id: "ja-u118l4",
      unit: 118,
      lesson: 4,
      title: "Getting to a solution",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how a problem was resolved and what will stop it happening again: かいけつ かいしょう しゅうり よぼう たすかる なんとか.",
      items: [
        { id: "ja-u118l4-kaiketsu", type: "vocab", front: "かいけつ", reading: "kaiketsu", meaning: "solution", example: { jp: "もんだいがかいけつして、やっとゆっくりねられました。", en: "The problem was solved, and at last I could sleep properly." }, drill: { jp: "かいけつのほうほうをさがします。", en: "I am looking for a way to solve it." }, accept: ["resolution", "settlement", "solving"], hint: "kai-KE-tsu — three beats. かい is to untangle and けつ is to settle, so the knot comes apart and stays apart. It is the goal word: a もんだい ends when かいけつ arrives." },
        { id: "ja-u118l4-kaisho", type: "vocab", front: "かいしょう", reading: "kaishō", meaning: "clearing up", example: { jp: "みずぶそくがかいしょうするまで、みんなでみずをたいせつにつかいます。", en: "Until the water shortage is cleared up, we all use water carefully." }, drill: { jp: "もんだいがかいしょうしました。", en: "The problem cleared up." }, accept: ["resolution", "dissolving", "doing away with"], hint: "kai-SHŌ — the last beat is long. かい is to loosen and しょう is to vanish, so the problem does not get solved — it ceases to exist. Used of shortages, stress and misunderstandings." },
        { id: "ja-u118l4-shuri", type: "vocab", front: "しゅうり", reading: "shūri", meaning: "repair", example: { jp: "しゅうりにだしたら、あたらしいのをかうよりたかくなりました。", en: "I sent it for repair, and it came to more than buying a new one." }, drill: { jp: "しゅうりにじかんがかかります。", en: "The repair takes time." }, accept: ["fixing", "mending", "a repair"], hint: "SHŪ-ri — the first beat is long. しゅう is to mend and り is to put right. It is for objects: a machine, a roof, a bicycle. なおす is the plain verb behind it." },
        { id: "ja-u118l4-yobo", type: "vocab", front: "よぼう", reading: "yobō", meaning: "prevention", example: { jp: "びょうきのよぼうのために、まいにちあるくことにしました。", en: "For the prevention of illness, I've decided to walk every day." }, drill: { jp: "よぼうがたいせつです。", en: "Prevention is important." }, accept: ["precaution", "preventing", "preventive care"], hint: "yo-BŌ — the second beat is long. よ is beforehand and ぼう is to guard, so it is guarding in advance. ふせぐ is the verb; よぼう is the programme — a vaccination is a よぼうせっしゅ." },
        { id: "ja-u118l4-tasukaru", type: "vocab", front: "たすかる", reading: "tasukaru", meaning: "be a big help", example: { jp: "てつだってくれて、ほんとうにたすかりました。", en: "You helped me out — it was a real help." }, drill: { jp: "てつだってもらってたすかる。", en: "Being helped is a real relief." }, accept: ["to be saved", "be a relief", "be grateful for"], hint: "ta-su-KA-ru — four beats. YOU are the one helped, so you are the subject: 「たすかりました」 is thank you, that saved me. たすける is helping someone else — the る-versus-ける split again." },
        { id: "ja-u118l4-nantoka", type: "vocab", front: "なんとか", reading: "nantoka", meaning: "somehow (managing it one way)", example: { jp: "えきまではしったので、なんとかまにあいました。", en: "I ran to the station, so somehow I made it." }, drill: { jp: "なんとかおわりました。", en: "Somehow it got finished." }, accept: ["one way or another", "manage to", "just about"], hint: "nan-to-KA — three beats, the ん held. Literally something or other: you got there, but not neatly. It implies the margin was thin, which is why まにあう follows it so often." },
      ],
    },
  ],
};
