// JA Unit 155 — ごい・N3・14 (mixed N3 gap-fill) — B1 / JLPT N3
// Strand D, coverage 14 of 14 — the last unit of the B1 band.
//
// RE-THEMED. This unit was "しゃかいとニュース (society and the news)", and that was a
// structural mistake rather than bad luck: the u107 slot IS "News and society" and u135 is
// "Relationships and society", so a society-themed coverage unit sitting at u155 duplicates
// two units that own the ground by design and outrank it under lower-order-wins. Measured
// against blocks 1–2 as they actually stand, **18 of its 24 cards collided** — the worst of
// any unit in the block, and it would have been dismantled at merge whatever the merge seat
// did. Six survived: かつどう, じちたい, だんたい, ひがいしゃ, けいさつかん, しょうぼうし.
//
// They are kept, each in its original lesson, and the unit is rebuilt around them as an
// untethered gap-fill — which is what ja's own coverage passes already look like (u88–u98
// are ごい・N4・1–11, lessons titled "N4 vocabulary 1/2/3", no theme at all). A unit with no
// domain cannot collide with a domain.
//
// Every front here was checked against the MERGED corpus — u1–u98 in this tree, u99–u117
// from block 1 @ 0c1e730, u118–u136 from block 2 — not against this branch alone. Checking
// against the branch alone is exactly what made this rebuild necessary.
export const UNIT155 = {
  id: "ja-u155",
  lang: "ja",
  title: "ごい・N3・14",
  order: 155,
  stage: "b1",
  lessons: [
    {
      id: "ja-u155l1",
      unit: 155,
      lesson: 1,
      title: "N3 vocabulary 1 — aims and yardsticks",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about how something is done and how it is judged: しゅだん, けいこう, ようきゅう, めやす, かち, かつどう.",
      items: [
        { id: "ja-u155l1-katsudo", type: "vocab", front: "かつどう", reading: "katsudō", meaning: "activity, campaign", example: { jp: "まちをきれいにするかつどうを、まいつきてつだっています。", en: "Every month I help with an activity to clean up the town." }, accept: ["operations", "drive", "to be active"], hint: "Organised, purposeful activity — clubs, campaigns, volunteering. Not the same as doing something on your own." },
        { id: "ja-u155l1-shudan", type: "vocab", front: "しゅだん", reading: "shudan", meaning: "means, method", example: { jp: "でんしゃがとまったので、ほかのしゅだんをかんがえました。", en: "The trains had stopped, so I thought about other means." }, accept: ["way", "measure", "resource"], hint: "The means you use to reach an end, with no comment on whether it is a good one. ほうほう is a method; しゅだん is something you deploy." },
        { id: "ja-u155l1-keiko", type: "vocab", front: "けいこう", reading: "keikō", meaning: "tendency, trend", example: { jp: "さいきん、あさはやくおきるひとがふえるけいこうがあります。", en: "Lately there is a tendency for more people to get up early." }, accept: ["inclination", "leaning", "pattern"], hint: "～けいこうがある is the set frame. It reports a direction of change without claiming a cause, which makes it safe in an argument." },
        { id: "ja-u155l1-yokyu", type: "vocab", front: "ようきゅう", reading: "yōkyū", meaning: "demand, formal request", example: { jp: "みせにようきゅうしましたが、まだへんじがありません。", en: "I made a formal request to the shop, but there has been no reply yet." }, accept: ["to demand", "claim", "requirement"], hint: "Stronger than おねがい — you are asserting a right, not asking a favour. It sets a formal tone, so use it deliberately." },
        { id: "ja-u155l1-meyasu", type: "vocab", front: "めやす", reading: "meyasu", meaning: "rough guide, yardstick", example: { jp: "このりょうりは、30ぷんがめやすです。", en: "Thirty minutes is a rough guide for this dish." }, accept: ["standard", "approximate figure", "rule of thumb"], hint: "め (eye) + やす — something you eyeball against. Recipes, budgets and study plans give a めやす rather than a rule." },
        { id: "ja-u155l1-kachi", type: "vocab", front: "かち", reading: "kachi", meaning: "value, worth", example: { jp: "ふるいですが、このほんにはかちがあります。", en: "It is old, but this book has real value." }, accept: ["merit", "worth"], hint: "Worth in the abstract, never a price — ねだん is what it costs. ～かちがある means 'worth doing': いくかちがある." },
      ],
    },
    {
      id: "ja-u155l2",
      unit: 155,
      lesson: 2,
      title: "N3 vocabulary 2 — showing and supporting",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say who is behind something and what the evidence shows: じちたい, だんたい, ながれ, しめします, あらわします, ささえます.",
      items: [
        { id: "ja-u155l2-jichitai", type: "vocab", front: "じちたい", reading: "jichitai", meaning: "local government", example: { jp: "じちたいによって、ごみのだしかたがちがいます。", en: "How you put out rubbish differs depending on the local authority." }, accept: ["municipality", "local authority", "council"], hint: "じち (self-government) + たい (body). Japanese daily life is governed by these far more than by national law — rubbish rules being the classic case." },
        { id: "ja-u155l2-dantai", type: "vocab", front: "だんたい", reading: "dantai", meaning: "group, organisation", example: { jp: "だんたいでよやくすると、りょうきんがやすくなります。", en: "If you book as a group, the price is lower." }, accept: ["party (of people)", "association", "collective"], hint: "Two senses: a formal association, and simply a group booking. だんたいわりびき is the group discount on every ticket page." },
        { id: "ja-u155l2-nagare", type: "vocab", front: "ながれ", reading: "nagare", meaning: "flow, the way things are going", example: { jp: "はなしのながれがわからなくなって、しつもんしました。", en: "I lost the thread of the conversation, so I asked a question." }, accept: ["current", "course", "trend"], hint: "The noun of ながれる. Rivers, traffic, conversations and history all have a ながれ — and losing it is exactly what a learner does mid-conversation." },
        { id: "ja-u155l2-shimeshimasu", type: "vocab", front: "しめします", reading: "shimeshimasu", meaning: "to show, to indicate", example: { jp: "しりょうがしめしているとおり、りょうがへっています。", en: "As the data shows, the amount is decreasing." }, accept: ["to demonstrate", "to point to", "indicates"], hint: "みせます is holding a thing up to be looked at; しめします is data or a sign pointing at a conclusion. Reports run on it." },
        { id: "ja-u155l2-arawashimasu", type: "vocab", front: "あらわします", reading: "arawashimasu", meaning: "to express, to represent", example: { jp: "このいろは、あんぜんをあらわしています。", en: "This colour represents safety." }, accept: ["to show (a feeling)", "to signify", "expresses"], hint: "Putting something invisible into visible form — a feeling into words, an idea into a symbol. きもちをあらわす is the everyday use." },
        { id: "ja-u155l2-sasaemasu", type: "vocab", front: "ささえます", reading: "sasaemasu", meaning: "to support, to hold up", example: { jp: "かぞくにささえられて、しけんにごうかくしました。", en: "Supported by my family, I passed the exam." }, accept: ["to prop up", "to back", "sustains"], hint: "Physical propping and emotional backing at once — a pillar ささえる a roof, a family ささえる a person. Very common in the passive, as here." },
      ],
    },
    {
      id: "ja-u155l3",
      unit: 155,
      lesson: 3,
      title: "N3 vocabulary 3 — roles, and what changes hands",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name who is involved and what is asked, given or lost: ひがいしゃ, けいさつかん, しょうぼうし, もとめます, あたえます, うしないます.",
      items: [
        { id: "ja-u155l3-higaisha", type: "vocab", front: "ひがいしゃ", reading: "higaisha", meaning: "victim", example: { jp: "じこのひがいしゃは、びょういんにはこばれました。", en: "The victims of the accident were taken to hospital." }, accept: ["injured party", "sufferer", "casualty"], hint: "ひがい (damage suffered) + しゃ (person) — the ～しゃ of どくしゃ and さくしゃ. Its opposite かがいしゃ is the one who caused it." },
        { id: "ja-u155l3-keisatsukan", type: "vocab", front: "けいさつかん", reading: "keisatsukan", meaning: "police officer", example: { jp: "みちがわからなかったので、けいさつかんにききました。", en: "I didn't know the way, so I asked a police officer." }, accept: ["policeman", "officer of the law", "constable"], hint: "けいさつ (the police) + かん (official). ～かん marks a public official: がいこうかん, さいばんかん." },
        { id: "ja-u155l3-shoboshi", type: "vocab", front: "しょうぼうし", reading: "shōbōshi", meaning: "firefighter", example: { jp: "しょうぼうしがはやくきてくれたので、かじはおおきくなりませんでした。", en: "The firefighters came quickly, so the fire didn't get big." }, accept: ["fireman", "fire officer"], hint: "しょうぼう (fire prevention) + し (professional). The ～し of べんごし and かんごし — a qualified professional." },
        { id: "ja-u155l3-motomemasu", type: "vocab", front: "もとめます", reading: "motomemasu", meaning: "to seek, to ask for", example: { jp: "こまったときは、まわりのひとにたすけをもとめてください。", en: "When you're in trouble, ask the people around you for help." }, accept: ["to request", "to look for", "to demand"], hint: "Reaching for something you lack — help, an answer, a job. さがします is looking for a thing that exists somewhere; もとめます is seeking what you need." },
        { id: "ja-u155l3-ataemasu", type: "vocab", front: "あたえます", reading: "ataemasu", meaning: "to give (formal), to grant", example: { jp: "そのニュースは、みんなにおおきいショックをあたえました。", en: "That news gave everyone a great shock." }, accept: ["to bestow", "to have (an effect)", "to impart"], hint: "The formal, one-directional あげます — for things that are not favours: an effect, a shock, permission, a prize. None of u138's やりもらい direction attaches to it." },
        { id: "ja-u155l3-ushinaimasu", type: "vocab", front: "うしないます", reading: "ushinaimasu", meaning: "to lose (something abstract)", example: { jp: "うそをついて、みんなのしんようをうしないました。", en: "He told a lie and lost everyone's trust." }, accept: ["to forfeit", "to be deprived of", "loses"], hint: "For what you cannot go and look for afterwards — trust, confidence, a chance, consciousness. A dropped wallet is なくします." },
      ],
    },
    {
      id: "ja-u155l4",
      unit: 155,
      lesson: 4,
      title: "N3 vocabulary 4 — describing an approach",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Characterise how someone goes about something: せっきょくてき, しょうきょくてき, こうかてき, ちゅうしょうてき, おもに, さいわい.",
      items: [
        { id: "ja-u155l4-sekkyokuteki", type: "vocab", front: "せっきょくてき", reading: "sekkyokuteki", meaning: "proactive, forward", example: { jp: "かのじょはせっきょくてきに、じぶんのいけんをいいます。", en: "She states her own opinion proactively." }, accept: ["active", "positive (in approach)", "enthusiastic"], hint: "～てき turns a noun into an adjective, and this is the one you will meet first. It describes willingness to act, not cheerfulness." },
        { id: "ja-u155l4-shokyokuteki", type: "vocab", front: "しょうきょくてき", reading: "shōkyokuteki", meaning: "passive, half-hearted", example: { jp: "しょうきょくてきなたいどでは、なにもかわりません。", en: "Nothing will change with a half-hearted attitude." }, accept: ["reluctant", "unenthusiastic", "unwilling"], hint: "The mirror of せっきょくてき. Careful: it does NOT mean 'negative' in the sense of pessimistic — it means unwilling to move." },
        { id: "ja-u155l4-kokateki", type: "vocab", front: "こうかてき", reading: "kōkateki", meaning: "effective", example: { jp: "まいにちすこしずつやるほうが、こうかてきです。", en: "Doing a little every day is more effective." }, accept: ["efficacious", "productive", "works well"], hint: "こうか (effect) + てき. The word every study-method and exercise article is built around." },
        { id: "ja-u155l4-chushoteki", type: "vocab", front: "ちゅうしょうてき", reading: "chūshōteki", meaning: "abstract, vague", example: { jp: "せつめいがちゅうしょうてきで、よくわかりませんでした。", en: "The explanation was abstract and I didn't really follow it." }, accept: ["theoretical", "not concrete", "general"], hint: "Usually a complaint — an explanation that never touches an example. Its opposite ぐたいてき ('concrete') is what you ask for instead." },
        { id: "ja-u155l4-omoni", type: "vocab", front: "おもに", reading: "omoni", meaning: "mainly, for the most part", example: { jp: "このみせのきゃくは、おもにわかいひとです。", en: "This shop's customers are mainly young people." }, accept: ["chiefly", "largely", "principally"], hint: "From おもな (main). Neutral, where もっぱら (u146) implies everything else is crowded out — おもに just reports the majority." },
        { id: "ja-u155l4-saiwai", type: "vocab", front: "さいわい", reading: "saiwai", meaning: "fortunately", example: { jp: "じこがありましたが、さいわいけがはありませんでした。", en: "There was an accident, but fortunately nobody was hurt." }, accept: ["luckily", "happily", "thankfully"], hint: "Reports a good outcome inside a bad situation, so it almost always follows a が. さいわいにも adds a touch of formality." },
      ],
    },
  ],
};
