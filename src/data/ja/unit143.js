// JA Unit 143 — ごい・N3・2 (ふくごうどうし — compound verbs) — B1 / JLPT N3
// Strand D, coverage 2 of 14. Japanese builds most of its everyday verbs by welding two
// together, and the meaning is usually guessable ONCE you know the pattern: とり～ takes,
// ～だします starts or brings out, ～なおします does it again, ～あいます does it mutually.
// A learner who has met thirty of these stops needing to look up the next hundred, which
// is exactly what a coverage unit is for. Each lesson is one welding pattern.
export const UNIT143 = {
  id: "ja-u143",
  lang: "ja",
  title: "ごい・N3・2",
  order: 143,
  stage: "b1",
  lessons: [
    {
      id: "ja-u143l1",
      unit: 143,
      lesson: 1,
      title: "とり～ and うけ～",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle exchanges and paperwork: とりかえます, とりけします, うけとります, うけつけます.",
      items: [
        { id: "ja-u143l1-torikaemasu", type: "vocab", front: "とりかえます", reading: "torikaemasu", meaning: "to exchange, to replace", example: { jp: "サイズがあわなかったので、みせでとりかえてもらいました。", en: "The size didn't fit, so I had them exchange it at the shop." }, accept: ["to swap", "to change over", "exchanges"], hint: "とる (take) + かえる (change) — take one away and put another there. For money changing hands, use こうかんします." },
        { id: "ja-u143l1-torikeshimasu", type: "vocab", front: "とりけします", reading: "torikeshimasu", meaning: "to cancel, to retract", example: { jp: "よていがかわったので、よやくをとりけしました。", en: "My plans changed, so I cancelled the reservation." }, accept: ["to call off", "to withdraw", "cancels"], hint: "Literally 'take and erase'. Used for bookings and for words you wish you hadn't said: いまのはとりけします." },
        { id: "ja-u143l1-toridashimasu", type: "vocab", front: "とりだします", reading: "toridashimasu", meaning: "to take out, to pull out", example: { jp: "かばんからさいふをとりだして、おかねをはらいました。", en: "I took my wallet out of my bag and paid." }, accept: ["to produce (from)", "to extract", "takes out"], hint: "とる + だす — take it and bring it out. The ～だします half means 'out' here and 'suddenly start' in lesson 4." },
        { id: "ja-u143l1-toriiremasu", type: "vocab", front: "とりいれます", reading: "toriiremasu", meaning: "to adopt, to bring in", example: { jp: "あたらしいほうほうをとりいれてから、しごとがはやくなりました。", en: "Since we adopted the new method, the work has got faster." }, accept: ["to take on board", "to incorporate", "to harvest"], hint: "The opposite direction to とりだします. Used for ideas, methods and technology — and literally for bringing the washing in." },
        { id: "ja-u143l1-uketorimasu", type: "vocab", front: "うけとります", reading: "uketorimasu", meaning: "to receive, to accept", example: { jp: "にもつをうけとったら、サインをおねがいします。", en: "Once you've received the parcel, please sign for it." }, accept: ["to take delivery of", "to collect", "receives"], hint: "うける (receive) + とる (take) — physically taking something handed to you. もらいます is the favour; うけとります is the transaction." },
        { id: "ja-u143l1-uketsukemasu", type: "vocab", front: "うけつけます", reading: "uketsukemasu", meaning: "to accept (an application)", example: { jp: "もうしこみは5じまでうけつけていますので、いそいでください。", en: "We're accepting applications until five, so please hurry." }, accept: ["to take (submissions)", "to register", "accepts"], hint: "The noun うけつけ is the reception desk — the place where things get accepted. You'll see the sign before you use the verb." },
      ],
    },
    {
      id: "ja-u143l2",
      unit: 143,
      lesson: 2,
      title: "～あいます: doing it with someone",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Arrange things with other people: もうしこみます, まちあわせます, つきあいます, ひきうけます.",
      items: [
        { id: "ja-u143l2-moshikomimasu", type: "vocab", front: "もうしこみます", reading: "mōshikomimasu", meaning: "to apply for", example: { jp: "こんげつのしけんにもうしこみたいのですが、まだまにあいますか。", en: "I'd like to apply for this month's exam — is there still time?" }, accept: ["to sign up for", "to put in for", "applies"], hint: "もうす (say, humble) + こむ (put into) — putting your name into something. The noun もうしこみ is on every form you'll fill in." },
        { id: "ja-u143l2-machiawasemasu", type: "vocab", front: "まちあわせます", reading: "machiawasemasu", meaning: "to meet up (by arrangement)", example: { jp: "えきのまえで7じにまちあわせましょう。", en: "Let's meet in front of the station at seven." }, accept: ["to rendezvous", "to arrange to meet", "meets up"], hint: "まつ (wait) + あわせる (match) — waiting in a matched place and time. あいます is meeting; まちあわせます is the appointment." },
        { id: "ja-u143l2-tsukiaimasu", type: "vocab", front: "つきあいます", reading: "tsukiaimasu", meaning: "to associate with; to go out with", example: { jp: "かれとは10ねんまえからつきあっています。", en: "I've been friends with him for ten years." }, accept: ["to keep company with", "to date", "to socialize"], hint: "Two very different weights from one verb: professional association and romantic dating. かれとつきあっている means the second unless context says otherwise." },
        { id: "ja-u143l2-hikiukemasu", type: "vocab", front: "ひきうけます", reading: "hikiukemasu", meaning: "to take on, to undertake", example: { jp: "だれもやりたがらないので、わたしがひきうけることにしました。", en: "Nobody wanted to do it, so I decided to take it on." }, accept: ["to accept (a duty)", "to shoulder", "undertakes"], hint: "ひく (pull) + うける (receive) — pulling a responsibility onto yourself. Stronger than やります: it says you're now answerable for it." },
        { id: "ja-u143l2-kumitatemasu", type: "vocab", front: "くみたてます", reading: "kumitatemasu", meaning: "to assemble, to put together", example: { jp: "せつめいしょをよみながら、たなをくみたてました。", en: "I assembled the shelf while reading the instructions." }, accept: ["to build", "to construct", "assembles"], hint: "くむ (join) + たてる (stand up). Also used for plans and budgets: けいかくをくみたてる." },
        { id: "ja-u143l2-maniawasemasu", type: "vocab", front: "まにあわせます", reading: "maniawasemasu", meaning: "to make do; to get it done in time", example: { jp: "じかんがたりませんが、あるものでまにあわせます。", en: "We're short on time, but I'll make do with what we have." }, accept: ["to manage with", "to make it in time", "improvises"], hint: "The transitive まにあいます. Two senses: forcing something to be ready by the deadline, or making do with a substitute." },
      ],
    },
    {
      id: "ja-u143l3",
      unit: 143,
      lesson: 3,
      title: "～なおします: doing it over",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say you did something again or better: やりなおします, かんがえなおします, みなおします, いいなおします.",
      items: [
        { id: "ja-u143l3-omoidashimasu", type: "vocab", front: "おもいだします", reading: "omoidashimasu", meaning: "to recall, to remember", example: { jp: "なまえをわすれましたが、かおをみたらおもいだしました。", en: "I'd forgotten the name, but I remembered when I saw the face." }, accept: ["to call to mind", "to recollect", "remembers"], hint: "おもう + だす — pulling a memory OUT. おぼえています is holding a memory; おもいだします is retrieving it." },
        { id: "ja-u143l3-omoitsukimasu", type: "vocab", front: "おもいつきます", reading: "omoitsukimasu", meaning: "to hit upon (an idea)", example: { jp: "いいかんがえをおもいついたので、みんなにはなします。", en: "I've hit on a good idea, so I'll tell everyone." }, accept: ["to think of", "to come up with", "occurs to"], hint: "The idea arrives on its own — you don't work for it. かんがえます is deliberate thinking; おもいつきます is the flash." },
        { id: "ja-u143l3-yarinaoshimasu", type: "vocab", front: "やりなおします", reading: "yarinaoshimasu", meaning: "to do over again", example: { jp: "まちがえたので、はじめからやりなおします。", en: "I made a mistake, so I'll do it over from the start." }, accept: ["to redo", "to start again", "redoes"], hint: "～なおす attaches to almost any verb and means 'again, properly'. Once you have it you get よみなおす, かきなおす, きなおす free." },
        { id: "ja-u143l3-kangaenaoshimasu", type: "vocab", front: "かんがえなおします", reading: "kangaenaoshimasu", meaning: "to reconsider", example: { jp: "いちどきめましたが、かんがえなおすことにしました。", en: "I'd decided once, but I've decided to reconsider." }, accept: ["to think again", "to rethink", "reconsiders"], hint: "The polite way to reopen a settled question — softer than やめます because it promises thought, not refusal." },
        { id: "ja-u143l3-minaoshimasu", type: "vocab", front: "みなおします", reading: "minaoshimasu", meaning: "to review; to think better of", example: { jp: "だすまえに、レポートをもういちどみなおしました。", en: "Before submitting it, I looked over the report once more." }, accept: ["to look over again", "to reassess", "reviews"], hint: "Two senses: checking something again, and revising your opinion of a person upward — かれをみなおした = 'he went up in my estimation'." },
        { id: "ja-u143l3-iinaoshimasu", type: "vocab", front: "いいなおします", reading: "iinaoshimasu", meaning: "to rephrase", example: { jp: "うまくつたわらなかったので、やさしいことばでいいなおしました。", en: "It didn't get across, so I said it again in simpler words." }, accept: ["to say again", "to put it another way", "rephrases"], hint: "The single most useful verb in a conversation you're struggling in — and the thing you should ask a native speaker to do: いいなおしていただけませんか." },
      ],
    },
    {
      id: "ja-u143l4",
      unit: 143,
      lesson: 4,
      title: "～だします and movement",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe sudden movement: とびだします, にげだします, ふりむきます, たちどまります, すれちがいます.",
      items: [
        { id: "ja-u143l4-tobidashimasu", type: "vocab", front: "とびだします", reading: "tobidashimasu", meaning: "to rush out, to dart out", example: { jp: "こどもがみちにとびだしてきて、あぶなかったです。", en: "A child darted out into the road — it was dangerous." }, accept: ["to jump out", "to run out", "dashes out"], hint: "とぶ (jump) + だす. Here ～だします means 'out'; in にげだします it means 'suddenly start'. Context separates them." },
        { id: "ja-u143l4-nigedashimasu", type: "vocab", front: "にげだします", reading: "nigedashimasu", meaning: "to run away, to bolt", example: { jp: "おおきなおとがしたので、ねこがにげだしました。", en: "There was a loud noise, so the cat bolted." }, accept: ["to flee", "to take off", "escapes"], hint: "にげる (flee) + だす (start). ～だす after a verb of action means the action began abruptly: ふりだす (start raining), なきだす (burst into tears)." },
        { id: "ja-u143l4-furimukimasu", type: "vocab", front: "ふりむきます", reading: "furimukimasu", meaning: "to turn around, to look back", example: { jp: "なまえをよばれたので、ふりむきました。", en: "Someone called my name, so I turned around." }, accept: ["to turn to look", "to glance back", "turns round"], hint: "ふる (swing) + むく (face) — swinging your face round. Only your head moves; for your whole body, まわります." },
        { id: "ja-u143l4-tachidomarimasu", type: "vocab", front: "たちどまります", reading: "tachidomarimasu", meaning: "to stop still, to halt", example: { jp: "きれいなはなをみつけて、しばらくたちどまりました。", en: "I spotted a beautiful flower and stopped for a while." }, accept: ["to come to a stop", "to pause", "stands still"], hint: "たつ (stand) + とまる (stop) — stopping while still on your feet. とまります can be a car; たちどまります is always a person walking." },
        { id: "ja-u143l4-surechigaimasu", type: "vocab", front: "すれちがいます", reading: "surechigaimasu", meaning: "to pass each other", example: { jp: "みちがせまいので、くるまがすれちがえません。", en: "The road is narrow, so cars can't pass each other." }, accept: ["to pass by", "to cross paths", "to miss each other"], hint: "Also used for people talking past each other: はなしがすれちがう = the conversation isn't connecting." },
        { id: "ja-u143l4-norikaemasu", type: "vocab", front: "のりかえます", reading: "norikaemasu", meaning: "to change (trains)", example: { jp: "つぎのえきでちかてつにのりかえてください。", en: "Please change to the subway at the next station." }, accept: ["to transfer", "to switch (lines)", "changes trains"], hint: "のる (ride) + かえる (change). The station announcement you'll need on day one; the noun のりかえ is on every sign." },
      ],
    },
  ],
};
