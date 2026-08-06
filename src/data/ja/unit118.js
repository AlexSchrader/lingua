// JA Unit 118 — もんだい・かいけつ (Problems and solutions) — B1 / JLPT N3
// ─────────────────────────────────────────────────────────────────────────────
// Block-2 house rules, applied to every unit in this block (118-136):
//   • Verbs are headworded in the ～ます form. The corpus is 208 ます-fronts to 11
//     plain ones, and the form matters beyond style: front-uniqueness only catches
//     an accidental re-teach when the new front is spelled the way the old one is.
//     Headwording こまる when こまります already ships would have slipped through.
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
      canDo: "Say that something has gone wrong and how much it is bothering you: トラブル なやみます ミス まちがい めんどう くじょう.",
      items: [
        { id: "ja-u118l1-toraburu", type: "vocab", front: "トラブル", reading: "toraburu", meaning: "trouble", example: { jp: "かいしゃでトラブルがあったので、かえるのがおそくなりました。", en: "There was trouble at work, so I got home late." }, accept: ["problem", "issue"] },
        { id: "ja-u118l1-nayamimasu", type: "vocab", front: "なやみます", reading: "nayamimasu", meaning: "agonize over", example: { jp: "しごとのことでなやんでいますが、まだだれにもそうだんしていません。", en: "I've been agonizing over work, but I haven't talked to anyone about it yet." }, accept: ["to worry over", "be torn", "struggle with"] },
        { id: "ja-u118l1-misu", type: "vocab", front: "ミス", reading: "misu", meaning: "slip-up", example: { jp: "ちいさなミスでしたが、けっかはとてもたいへんでした。", en: "It was a small slip-up, but the consequences were serious." }, accept: ["mistake", "error"] },
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
      canDo: "Judge how serious a problem is and what it has affected: しんこく そんがい えいきょう たしかめます うたがいます きにします.",
      items: [
        { id: "ja-u118l2-shinkoku", type: "vocab", front: "しんこく", reading: "shinkoku", meaning: "serious", example: { jp: "びょうきはしんこくでしたが、いまはとてもげんきです。", en: "The illness was serious, but he is very well now." }, accept: ["grave", "severe"] },
        { id: "ja-u118l2-songai", type: "vocab", front: "そんがい", reading: "songai", meaning: "damage", example: { jp: "たいふうでそんがいがおおきくて、みせはやすみました。", en: "The typhoon damage was big, so the shop closed." }, accept: ["loss", "harm", "losses"] },
        { id: "ja-u118l2-eikyo", type: "vocab", front: "えいきょう", reading: "eikyō", meaning: "effect", example: { jp: "あめのえいきょうででんしゃはとまりましたが、バスはうごいていました。", en: "The trains stopped from the effect of the rain, but the buses were running." }, accept: ["influence", "impact"] },
        { id: "ja-u118l2-tashikamemasu", type: "vocab", front: "たしかめます", reading: "tashikamemasu", meaning: "make sure of", example: { jp: "じかんをたしかめてから、えきへいきました。", en: "I made sure of the time, and then went to the station." }, accept: ["to check", "verify", "confirm"] },
        { id: "ja-u118l2-utagaimasu", type: "vocab", front: "うたがいます", reading: "utagaimasu", meaning: "doubt", example: { jp: "さいしょはうたがいましたが、はなしはほんとうでした。", en: "At first I doubted it, but the story was true." }, accept: ["to suspect", "be sceptical", "question"] },
        { id: "ja-u118l2-kinishimasu", type: "vocab", front: "きにします", reading: "kinishimasu", meaning: "worry about", example: { jp: "みんなのいけんをきにしていたら、なにもきめられません。", en: "If you worry about everyone's opinions, you can't decide anything." }, accept: ["to mind", "care about", "let it bother you"] },
      ],
    },
    {
      id: "ja-u118l3",
      unit: 118,
      lesson: 3,
      title: "Dealing with it",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how a problem is being handled, step by step: たいおう しょり てつづき かくにん ていあん ふせぎます.",
      items: [
        { id: "ja-u118l3-taio", type: "vocab", front: "たいおう", reading: "taiō", meaning: "handling", example: { jp: "みせのたいおうがよかったので、またいきたいです。", en: "The shop's handling of it was good, so I want to go again." }, accept: ["response", "service", "dealing with"] },
        { id: "ja-u118l3-shori", type: "vocab", front: "しょり", reading: "shori", meaning: "processing", example: { jp: "メールのしょりがおわってから、ひるごはんをたべます。", en: "I'll eat lunch after the processing of the emails is finished." }, accept: ["dealing with", "handling", "disposal"] },
        { id: "ja-u118l3-tetsuzuki", type: "vocab", front: "てつづき", reading: "tetsuzuki", meaning: "paperwork", example: { jp: "ぎんこうのてつづきがおわったので、あんしんしました。", en: "The bank paperwork is finished, so I felt relieved." }, accept: ["procedure", "formalities", "process"] },
        { id: "ja-u118l3-kakunin", type: "vocab", front: "かくにん", reading: "kakunin", meaning: "confirmation", example: { jp: "よやくをかくにんしてから、いえをでました。", en: "I confirmed the reservation, and then left the house." }, accept: ["checking", "verification"] },
        { id: "ja-u118l3-teian", type: "vocab", front: "ていあん", reading: "teian", meaning: "proposal", example: { jp: "ともだちがえいがをていあんしたので、いっしょにみにいきました。", en: "A friend proposed a film, so we went to see it together." }, accept: ["suggestion", "proposing"] },
        { id: "ja-u118l3-fusegimasu", type: "vocab", front: "ふせぎます", reading: "fusegimasu", meaning: "prevent", example: { jp: "てをあらえば、びょうきをふせぐことができます。", en: "If you wash your hands, you can prevent illness." }, accept: ["to protect against", "guard against", "stop"] },
      ],
    },
    {
      id: "ja-u118l4",
      unit: 118,
      lesson: 4,
      title: "Getting to a solution",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how a problem was resolved and what will stop it happening again: かいけつ かいぜん たいさく よぼう たすかります けっきょく.",
      items: [
        { id: "ja-u118l4-kaiketsu", type: "vocab", front: "かいけつ", reading: "kaiketsu", meaning: "solution", example: { jp: "もんだいはかいけつしましたが、じかんがとてもかかりました。", en: "The problem was solved, but it took a lot of time." }, accept: ["resolution", "settlement", "solving"] },
        { id: "ja-u118l4-kaizen", type: "vocab", front: "かいぜん", reading: "kaizen", meaning: "improvement", example: { jp: "みせのたいおうがかいぜんされたので、おきゃくさんがおおくなりました。", en: "The shop's handling was improved, so there are more customers." }, accept: ["betterment", "improving"] },
        { id: "ja-u118l4-taisaku", type: "vocab", front: "たいさく", reading: "taisaku", meaning: "countermeasure", example: { jp: "かぜのたいさくとしててをあらっていますが、それでもひきます。", en: "I wash my hands as a countermeasure against colds, but I still catch them." }, accept: ["measure", "precaution", "steps against"] },
        { id: "ja-u118l4-yobo", type: "vocab", front: "よぼう", reading: "yobō", meaning: "prevention", example: { jp: "びょうきのよぼうにはうんどうがたいせつですが、つづけるのがむずかしいです。", en: "Exercise matters for preventing illness, but keeping it up is the difficult part." }, accept: ["precaution", "preventing"] },
        { id: "ja-u118l4-tasukarimasu", type: "vocab", front: "たすかります", reading: "tasukarimasu", meaning: "be a big help", example: { jp: "てつだってくれて、ほんとうにたすかりました。", en: "You helped me out — it was a real help." }, accept: ["to be saved", "be a relief", "be grateful for"] },
        { id: "ja-u118l4-kekkyoku", type: "vocab", front: "けっきょく", reading: "kekkyoku", meaning: "in the end", example: { jp: "みんなでたくさんはなしましたが、けっきょくなにもきめませんでした。", en: "We all talked a lot, but in the end we decided nothing." }, accept: ["after all", "ultimately", "finally"] },
      ],
    },
  ],
};
