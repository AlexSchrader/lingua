// Unit 53 — どうさ・1 ("Actions 1") — A1 thematic
// Common JLPT N5 everyday verbs (set 1), taught as ～ます-form vocabulary — the
// basic daily actions the learner has not yet met as items (たちます stand, すわります
// sit, もちます hold, まちます wait…). Meanings stay to a short headword; the "to ～"
// form lives in accept[]. Examples reuse only already-known nouns + particles
// (を に が は). No new grammar — verbs are vocabulary, not conjugation.
// lang/unit/lesson wired in index.js.
export const UNIT53 = {
  id: "ja-u53",
  lang: "ja",
  title: "どうさ・1",
  order: 53,
  stage: "a1",
  lessons: [
    // Lesson 1: moving & posture
    {
      id: "ja-u53l1",
      unit: 53,
      lesson: 1,
      title: "Moving & posture",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Describe basic movement and posture: たちます すわります はいります でます もちます おします.",
      items: [
        { id: "ja-u53l1-tachimasu", type: "vocab", front: "たちます", reading: "tachimasu", meaning: "stand (polite form)", example: { jp: "まえにたちます。", en: "I stand at the front." }, drill: { jp: "でんしゃでたちます。", en: "I stand on the train." }, accept: ["to stand", "stand up", "stands"], hint: "ta-chi-MA-su — four beats, ち is chi. Dictionary form たつ. ⚠️ Pairs with すわります in this lesson: たちます is coming UP onto your feet, すわります is going down onto a seat." },
        { id: "ja-u53l1-suwarimasu", type: "vocab", front: "すわります", reading: "suwarimasu", meaning: "sit", example: { jp: "ソファにすわります。", en: "I sit on the sofa." }, drill: { jp: "いすにすわります。", en: "I sit on the chair." }, accept: ["to sit", "sit down", "sits"], hint: "su-wa-ri-MA-su — five beats, tapped r. Dictionary form すわる. ⚠️ The seat takes に, not を. It is the opposite of たちます, which you meet in the same lesson." },
        { id: "ja-u53l1-hairimasu", type: "vocab", front: "はいります", reading: "hairimasu", meaning: "enter (polite form)", example: { jp: "へやにはいります。", en: "I enter the room." }, drill: { jp: "みせにはいります。", en: "I go into the shop." }, accept: ["to enter", "go in", "come in"], hint: "ha-i-ri-MA-su — five beats; は is ha here, not the particle wa. Dictionary form はいる. ⚠️ What you enter takes に, never を. Its opposite is でます, next in this lesson." },
        { id: "ja-u53l1-demasu", type: "vocab", front: "でます", reading: "demasu", meaning: "leave (to go out)", example: { jp: "うちをでます。", en: "I leave the house." }, drill: { jp: "がっこうをでます。", en: "I leave school." }, accept: ["to leave", "go out", "exit"], hint: "de-MA-su — three beats. Dictionary form でる. ⚠️ The place you leave takes を: うちをでます. Compare はいります just above, which takes に instead." },
        { id: "ja-u53l1-mochimasu", type: "vocab", front: "もちます", reading: "mochimasu", meaning: "hold (polite form)", example: { jp: "かばんをもちます。", en: "I hold a bag." }, drill: { jp: "かさをもちます。", en: "I carry an umbrella." }, accept: ["to hold", "carry", "have"], hint: "mo-chi-MA-su — four beats, ち is chi. Dictionary form もつ. ⚠️ It is holding something in your hand, and it also covers owning it — かばんをもちます works for both." },
        { id: "ja-u53l1-oshimasu", type: "vocab", front: "おします", reading: "oshimasu", meaning: "push", example: { jp: "ボタンをおします。", en: "I push the button." }, drill: { jp: "ドアをおします。", en: "I push the door." }, accept: ["to push", "press", "pushes"], hint: "o-shi-MA-su — four beats. Dictionary form おす. ⚠️ Buttons, bells, doors — anything you press. Japanese doors are labelled おす and ひく, and ひきます is the next lesson's verb." },
      ],
    },
    // Lesson 2: hands & things
    {
      id: "ja-u53l2",
      unit: 53,
      lesson: 2,
      title: "Hands & things",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about handling things: ひきます きります ぬぎます かぶります かえします とおります.",
      items: [
        { id: "ja-u53l2-hikimasu", type: "vocab", front: "ひきます", reading: "hikimasu", meaning: "pull", example: { jp: "ドアをひきます。", en: "I pull the door." }, drill: { jp: "つくえをひきます。", en: "I pull the desk." }, accept: ["to pull", "pulls", "draw"], hint: "hi-ki-MA-su — four beats. Dictionary form ひく. ⚠️ The opposite of おします in lesson 1. The same verb is also used for playing a stringed instrument and for catching a cold." },
        { id: "ja-u53l2-kirimasu", type: "vocab", front: "きります", reading: "kirimasu", meaning: "cut (polite form)", example: { jp: "やさいをきります。", en: "I cut the vegetables." }, drill: { jp: "パンをきります。", en: "I cut the bread." }, accept: ["to cut", "cuts", "slice"], hint: "ki-ri-MA-su — four beats, tapped r. Dictionary form きる. ⚠️ Careful: きります, to cut, is not きます, to wear — one extra り is the whole difference." },
        { id: "ja-u53l2-nugimasu", type: "vocab", front: "ぬぎます", reading: "nugimasu", meaning: "take off", example: { jp: "くつをぬぎます。", en: "I take off my shoes." }, drill: { jp: "コートをぬぎます。", en: "I take off my coat." }, accept: ["to take off", "remove (clothes)", "takes off"], hint: "nu-gi-MA-su — four beats, ぎ is a hard gi. Dictionary form ぬぐ. ⚠️ Clothes, shoes, hats — anything you had on. It undoes both かぶります and きます." },
        { id: "ja-u53l2-kaburimasu", type: "vocab", front: "かぶります", reading: "kaburimasu", meaning: "put on (head)", example: { jp: "ぼうしをかぶります。", en: "I put on a hat." }, drill: { jp: "そとでぼうしをかぶります。", en: "I wear a hat outdoors." }, accept: ["to put on", "wear (on head)", "wears"], hint: "ka-bu-ri-MA-su — five beats. Dictionary form かぶる. ⚠️ Japanese picks a different verb per body part: かぶります for the head, はきます for the feet, きます for the body." },
        { id: "ja-u53l2-kaeshimasu", type: "vocab", front: "かえします", reading: "kaeshimasu", meaning: "give back", example: { jp: "ほんをかえします。", en: "I give back the book." }, drill: { jp: "おかねをかえします。", en: "I pay the money back." }, accept: ["to give back", "return (a thing)", "returns"], hint: "ka-e-shi-MA-su — five beats. Dictionary form かえす. ⚠️ Do not mix it with かえります, to go home: かえします sends the THING back, かえります sends YOU back." },
        { id: "ja-u53l2-toorimasu", type: "vocab", front: "とおります", reading: "tōrimasu", meaning: "pass through (to go along)", example: { jp: "みちをとおります。", en: "I go along the street." }, drill: { jp: "こうえんをとおります。", en: "I cut through the park." }, accept: ["to pass", "pass through", "go through"], hint: "TŌ-ri-ma-su — the ō is one long o held for two beats. Dictionary form とおる. ⚠️ The route takes を: you go ALONG it rather than stopping on it." },
      ],
    },
    // Lesson 3: start, finish, become
    {
      id: "ja-u53l3",
      unit: 53,
      lesson: 3,
      title: "Start, finish, become",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Mark beginnings, endings and change: はじめます おわります なります できます まちます しります.",
      items: [
        { id: "ja-u53l3-hajimemasu", type: "vocab", front: "はじめます", reading: "hajimemasu", meaning: "begin (someone starts it)", example: { jp: "べんきょうをはじめます。", en: "I begin studying." }, drill: { jp: "しごとをはじめます。", en: "I start work." }, accept: ["to begin", "start", "begins"], hint: "ha-ji-me-MA-su — five beats. Dictionary form はじめる. ⚠️ YOU start it, so it takes を. Compare おわります next door, where the thing finishes on its own and takes が." },
        { id: "ja-u53l3-owarimasu", type: "vocab", front: "おわります", reading: "owarimasu", meaning: "finish", example: { jp: "しごとがおわります。", en: "Work finishes." }, drill: { jp: "えいががおわります。", en: "The film ends." }, accept: ["to finish", "end", "be over"], hint: "o-wa-ri-MA-su — five beats, tapped r. Dictionary form おわる. ⚠️ The thing finishes by ITSELF, so it takes が, not を: しごとがおわります." },
        { id: "ja-u53l3-narimasu", type: "vocab", front: "なります", reading: "narimasu", meaning: "become", example: { jp: "せんせいになります。", en: "I become a teacher." }, drill: { jp: "あきになります。", en: "It turns to autumn." }, accept: ["to become", "becomes", "get"], hint: "na-ri-MA-su — four beats. Dictionary form なる. ⚠️ What you turn into takes に: せんせいになります. It covers any change of state, not just jobs." },
        { id: "ja-u53l3-dekimasu", type: "vocab", front: "できます", reading: "dekimasu", meaning: "can", example: { jp: "りょうりができます。", en: "I can cook." }, drill: { jp: "にほんごができます。", en: "I can speak Japanese." }, accept: ["to be able", "be able to", "can do"], hint: "de-ki-MA-su — four beats. ⚠️ What you are able to do takes が, not を: りょうりができます. The same verb also means to be finished or to come into being." },
        { id: "ja-u53l3-machimasu", type: "vocab", front: "まちます", reading: "machimasu", meaning: "wait (polite form)", example: { jp: "ともだちをまちます。", en: "I wait for a friend." }, drill: { jp: "えきでまちます。", en: "I wait at the station." }, accept: ["to wait", "wait for", "waits"], hint: "ma-chi-MA-su — four beats, ち is chi. Dictionary form まつ. ⚠️ The person you wait for takes を, where English needs a for: ともだちをまちます." },
        { id: "ja-u53l3-shirimasu", type: "vocab", front: "しります", reading: "shirimasu", meaning: "know (polite form)", example: { jp: "なまえをしります。", en: "I come to know the name." }, drill: { jp: "ことばをしります。", en: "I learn a new word." }, accept: ["to know", "find out", "knows"], hint: "shi-ri-MA-su — four beats. Dictionary form しる. ⚠️ It marks the MOMENT of finding out. For already knowing something, Japanese says しっています instead." },
      ],
    },
    // Lesson 4: needs & situations
    {
      id: "ja-u53l4",
      unit: 53,
      lesson: 4,
      title: "Needs & situations",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Handle everyday situations: いります かかります ふります こまります みつけます けっこんします.",
      items: [
        { id: "ja-u53l4-irimasu", type: "vocab", front: "いります", reading: "irimasu", meaning: "need", example: { jp: "おかねがいります。", en: "I need money." }, drill: { jp: "きっぷがいります。", en: "A ticket is needed." }, accept: ["to need", "be needed", "needs"], hint: "i-ri-MA-su — four beats. Dictionary form いる. ⚠️ The thing needed takes が: おかねがいります. Do not confuse it with います, to be somewhere, which has no り." },
        { id: "ja-u53l4-kakarimasu", type: "vocab", front: "かかります", reading: "kakarimasu", meaning: "take (time)", example: { jp: "じかんがかかります。", en: "It takes time." }, drill: { jp: "おかねがかかります。", en: "It costs money." }, accept: ["to take", "cost", "takes"], hint: "ka-ka-ri-MA-su — five beats. Dictionary form かかる. ⚠️ Used for the time or the money something costs, and what it costs takes が: じかんがかかります." },
        { id: "ja-u53l4-furimasu", type: "vocab", front: "ふります", reading: "furimasu", meaning: "fall (rain)", example: { jp: "あめがふります。", en: "It rains." }, drill: { jp: "ゆきがふります。", en: "It snows." }, accept: ["to fall", "rain falls", "come down"], hint: "fu-ri-MA-su — four beats, ふ is a soft fu between f and h. Dictionary form ふる. ⚠️ Only for what falls from the sky — rain, snow — and it takes が." },
        { id: "ja-u53l4-komarimasu", type: "vocab", front: "こまります", reading: "komarimasu", meaning: "be troubled", example: { jp: "ちょっとこまります。", en: "I'm a bit troubled." }, drill: { jp: "しごとでこまります。", en: "I am having trouble at work." }, accept: ["to be troubled", "be in trouble", "have a problem"], hint: "ko-ma-ri-MA-su — five beats. Dictionary form こまる. ⚠️ Not anger and not sadness — it is being stuck with no good option. It is also the polite way to say something is a nuisance." },
        { id: "ja-u53l4-mitsukemasu", type: "vocab", front: "みつけます", reading: "mitsukemasu", meaning: "find", example: { jp: "かぎをみつけます。", en: "I find the key." }, drill: { jp: "しごとをみつけます。", en: "I find a job." }, accept: ["to find", "finds", "discover"], hint: "mi-tsu-ke-MA-su — five beats, つ is tsu. Dictionary form みつける. ⚠️ This is finding what you were LOOKING for, so the thing found takes を." },
        { id: "ja-u53l4-kekkonshimasu", type: "vocab", front: "けっこんします", reading: "kekkonshimasu", meaning: "get married", example: { jp: "ともだちがけっこんします。", en: "My friend is getting married." }, drill: { jp: "らいねんけっこんします。", en: "I am getting married next year." }, accept: ["to marry", "get married", "marries"], hint: "kek-KON-shi-ma-su — the small っ is a held stop before the k. けっこん, marriage, plus します. ⚠️ The person getting married takes が: ともだちがけっこんします." },
      ],
    },
  ],
};
