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
        { id: "ja-u118l1-toraburu", type: "vocab", front: "トラブル", reading: "toraburu", meaning: "trouble", example: { jp: "かいしゃでトラブルがあったので、かえるのがおそくなりました。", en: "There was trouble at work, so I got home late." }, accept: ["problem", "issue"] },
        { id: "ja-u118l1-nayamu", type: "vocab", front: "なやむ", reading: "nayamu", meaning: "agonize over", example: { jp: "しごとのことでなやんでいて、よるもよくねられません。", en: "I've been agonizing over work, and I can't sleep well at night either." }, accept: ["to worry over", "be torn", "struggle with"] },
        { id: "ja-u118l1-misu", type: "vocab", front: "ミス", reading: "misu", meaning: "slip-up", example: { jp: "ちいさなミスをしたので、はじめからやりなおしました。", en: "I made a small slip-up, so I started again from the beginning." }, accept: ["mistake", "error"] },
        { id: "ja-u118l1-machigai", type: "vocab", front: "まちがい", reading: "machigai", meaning: "mistake", example: { jp: "じゅうしょにまちがいがあって、にもつがかえってきました。", en: "There was a mistake in the address, so the parcel came back." }, accept: ["error", "mix-up"] },
        { id: "ja-u118l1-mendo", type: "vocab", front: "めんどう", reading: "mendō", meaning: "a hassle", example: { jp: "そうじはめんどうですが、しないとへやがきたなくなります。", en: "Cleaning is a hassle, but if I don't do it the room gets dirty." }, accept: ["troublesome", "bothersome", "a pain"] },
        { id: "ja-u118l1-kujo", type: "vocab", front: "くじょう", reading: "kujō", meaning: "complaint", example: { jp: "おきゃくさんからくじょうがきたので、みせのひとがあやまりました。", en: "A complaint came in from a customer, so the shop staff apologized." }, accept: ["grievance", "formal complaint"] },
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
        { id: "ja-u118l2-shinkoku", type: "vocab", front: "しんこく", reading: "shinkoku", meaning: "serious", example: { jp: "びょうきがしんこくになるまえに、びょういんへいきました。", en: "I went to the hospital before the illness got serious." }, accept: ["grave", "severe"] },
        { id: "ja-u118l2-songai", type: "vocab", front: "そんがい", reading: "songai", meaning: "damage", example: { jp: "たいふうでそんがいがおおきくて、みせはやすみました。", en: "The typhoon damage was big, so the shop closed." }, accept: ["loss", "harm", "losses"] },
        { id: "ja-u118l2-kekkan", type: "vocab", front: "けっかん", reading: "kekkan", meaning: "a defect", example: { jp: "くるまにけっかんがみつかったので、みせにもどしました。", en: "A defect was found in the car, so I took it back to the shop." }, accept: ["fault", "flaw", "shortcoming"] },
        { id: "ja-u118l2-yakkai", type: "vocab", front: "やっかい", reading: "yakkai", meaning: "troublesome", example: { jp: "やっかいなしごとをたのまれて、こまっています。", en: "I was asked to do a troublesome job, and I'm stuck with it." }, accept: ["a nuisance", "awkward", "burdensome"] },
        { id: "ja-u118l2-kuro", type: "vocab", front: "くろう", reading: "kurō", meaning: "hardship", example: { jp: "はじめはくろうしましたが、いまはなれました。", en: "I had a hard time at first, but I'm used to it now." }, accept: ["trouble", "toil", "having a hard time"] },
        { id: "ja-u118l2-kinisuru", type: "vocab", front: "きにする", reading: "kinisuru", meaning: "worry about", example: { jp: "みんなのいけんをきにしていたら、なにもきめられません。", en: "If you worry about everyone's opinions, you can't decide anything." }, accept: ["to mind", "care about", "let it bother you"] },
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
        { id: "ja-u118l3-taisho", type: "vocab", front: "たいしょ", reading: "taisho", meaning: "dealing with it", example: { jp: "はやくたいしょしたので、おおきなもんだいになりませんでした。", en: "We dealt with it quickly, so it didn't become a big problem." }, accept: ["handling", "coping with", "taking action on"] },
        { id: "ja-u118l3-shori", type: "vocab", front: "しょり", reading: "shori", meaning: "processing", example: { jp: "メールのしょりがおわってから、ひるごはんをたべます。", en: "I'll eat lunch after the processing of the emails is finished." }, accept: ["dealing with", "handling", "disposal"] },
        { id: "ja-u118l3-tetsuzuki", type: "vocab", front: "てつづき", reading: "tetsuzuki", meaning: "paperwork", example: { jp: "ぎんこうのてつづきがおわったので、あんしんしました。", en: "The bank paperwork is finished, so I felt relieved." }, accept: ["procedure", "formalities", "process"] },
        { id: "ja-u118l3-tema", type: "vocab", front: "てま", reading: "tema", meaning: "time and effort", example: { jp: "てまがかかるので、みんないやがります。", en: "It takes time and effort, so nobody wants to do it." }, accept: ["trouble", "labour", "the work involved"] },
        { id: "ja-u118l3-teian", type: "vocab", front: "ていあん", reading: "teian", meaning: "proposal", example: { jp: "ともだちがえいがをていあんしたので、いっしょにみにいきました。", en: "A friend proposed a film, so we went to see it together." }, accept: ["suggestion", "proposing"] },
        { id: "ja-u118l3-sochi", type: "vocab", front: "そち", reading: "sochi", meaning: "a measure taken", example: { jp: "みせがすぐにそちをとったので、もんだいはおおきくなりませんでした。", en: "The shop took measures at once, so the problem didn't grow." }, accept: ["steps", "action taken", "provision"] },
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
        { id: "ja-u118l4-kaiketsu", type: "vocab", front: "かいけつ", reading: "kaiketsu", meaning: "solution", example: { jp: "もんだいがかいけつして、やっとゆっくりねられました。", en: "The problem was solved, and at last I could sleep properly." }, accept: ["resolution", "settlement", "solving"] },
        { id: "ja-u118l4-kaisho", type: "vocab", front: "かいしょう", reading: "kaishō", meaning: "clearing up", example: { jp: "みずぶそくがかいしょうするまで、みんなでみずをたいせつにつかいます。", en: "Until the water shortage is cleared up, we all use water carefully." }, accept: ["resolution", "dissolving", "doing away with"] },
        { id: "ja-u118l4-shuri", type: "vocab", front: "しゅうり", reading: "shūri", meaning: "repair", example: { jp: "しゅうりにだしたら、あたらしいのをかうよりたかくなりました。", en: "I sent it for repair, and it came to more than buying a new one." }, accept: ["fixing", "mending", "a repair"] },
        { id: "ja-u118l4-yobo", type: "vocab", front: "よぼう", reading: "yobō", meaning: "prevention", example: { jp: "びょうきのよぼうのために、まいにちあるくことにしました。", en: "For the prevention of illness, I've decided to walk every day." }, accept: ["precaution", "preventing"] },
        { id: "ja-u118l4-tasukaru", type: "vocab", front: "たすかる", reading: "tasukaru", meaning: "be a big help", example: { jp: "てつだってくれて、ほんとうにたすかりました。", en: "You helped me out — it was a real help." }, accept: ["to be saved", "be a relief", "be grateful for"] },
        { id: "ja-u118l4-nantoka", type: "vocab", front: "なんとか", reading: "nantoka", meaning: "somehow", example: { jp: "えきまではしったので、なんとかまにあいました。", en: "I ran to the station, so somehow I made it." }, accept: ["one way or another", "manage to", "just about"] },
      ],
    },
  ],
};
