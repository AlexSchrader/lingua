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
        { id: "ja-u53l1-tachimasu", type: "vocab", front: "たちます", reading: "tachimasu", meaning: "stand", example: { jp: "まえにたちます。", en: "I stand at the front." }, accept: ["to stand", "stand up", "stands"] },
        { id: "ja-u53l1-suwarimasu", type: "vocab", front: "すわります", reading: "suwarimasu", meaning: "sit", example: { jp: "ソファにすわります。", en: "I sit on the sofa." }, accept: ["to sit", "sit down", "sits"] },
        { id: "ja-u53l1-hairimasu", type: "vocab", front: "はいります", reading: "hairimasu", meaning: "enter", example: { jp: "へやにはいります。", en: "I enter the room." }, accept: ["to enter", "go in", "come in"] },
        { id: "ja-u53l1-demasu", type: "vocab", front: "でます", reading: "demasu", meaning: "leave", example: { jp: "うちをでます。", en: "I leave the house." }, accept: ["to leave", "go out", "exit"] },
        { id: "ja-u53l1-mochimasu", type: "vocab", front: "もちます", reading: "mochimasu", meaning: "hold", example: { jp: "かばんをもちます。", en: "I hold a bag." }, accept: ["to hold", "carry", "have"] },
        { id: "ja-u53l1-oshimasu", type: "vocab", front: "おします", reading: "oshimasu", meaning: "push", example: { jp: "ボタンをおします。", en: "I push the button." }, accept: ["to push", "press", "pushes"] },
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
        { id: "ja-u53l2-hikimasu", type: "vocab", front: "ひきます", reading: "hikimasu", meaning: "pull", example: { jp: "ドアをひきます。", en: "I pull the door." }, accept: ["to pull", "pulls", "draw"] },
        { id: "ja-u53l2-kirimasu", type: "vocab", front: "きります", reading: "kirimasu", meaning: "cut", example: { jp: "やさいをきります。", en: "I cut the vegetables." }, accept: ["to cut", "cuts", "slice"] },
        { id: "ja-u53l2-nugimasu", type: "vocab", front: "ぬぎます", reading: "nugimasu", meaning: "take off", example: { jp: "くつをぬぎます。", en: "I take off my shoes." }, accept: ["to take off", "remove (clothes)", "takes off"] },
        { id: "ja-u53l2-kaburimasu", type: "vocab", front: "かぶります", reading: "kaburimasu", meaning: "put on (head)", example: { jp: "ぼうしをかぶります。", en: "I put on a hat." }, accept: ["to put on", "wear (on head)", "wears"] },
        { id: "ja-u53l2-kaeshimasu", type: "vocab", front: "かえします", reading: "kaeshimasu", meaning: "give back", example: { jp: "ほんをかえします。", en: "I give back the book." }, accept: ["to give back", "return (a thing)", "returns"] },
        { id: "ja-u53l2-toorimasu", type: "vocab", front: "とおります", reading: "tōrimasu", meaning: "pass through", example: { jp: "みちをとおります。", en: "I go along the street." }, accept: ["to pass", "pass through", "go through"] },
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
        { id: "ja-u53l3-hajimemasu", type: "vocab", front: "はじめます", reading: "hajimemasu", meaning: "begin", example: { jp: "べんきょうをはじめます。", en: "I begin studying." }, accept: ["to begin", "start", "begins"] },
        { id: "ja-u53l3-owarimasu", type: "vocab", front: "おわります", reading: "owarimasu", meaning: "finish", example: { jp: "しごとがおわります。", en: "Work finishes." }, accept: ["to finish", "end", "be over"] },
        { id: "ja-u53l3-narimasu", type: "vocab", front: "なります", reading: "narimasu", meaning: "become", example: { jp: "せんせいになります。", en: "I become a teacher." }, accept: ["to become", "becomes", "get"] },
        { id: "ja-u53l3-dekimasu", type: "vocab", front: "できます", reading: "dekimasu", meaning: "can", example: { jp: "りょうりができます。", en: "I can cook." }, accept: ["to be able", "be able to", "can do"] },
        { id: "ja-u53l3-machimasu", type: "vocab", front: "まちます", reading: "machimasu", meaning: "wait", example: { jp: "ともだちをまちます。", en: "I wait for a friend." }, accept: ["to wait", "wait for", "waits"] },
        { id: "ja-u53l3-shirimasu", type: "vocab", front: "しります", reading: "shirimasu", meaning: "know", example: { jp: "なまえをしります。", en: "I come to know the name." }, accept: ["to know", "find out", "knows"] },
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
        { id: "ja-u53l4-irimasu", type: "vocab", front: "いります", reading: "irimasu", meaning: "need", example: { jp: "おかねがいります。", en: "I need money." }, accept: ["to need", "be needed", "needs"] },
        { id: "ja-u53l4-kakarimasu", type: "vocab", front: "かかります", reading: "kakarimasu", meaning: "take (time)", example: { jp: "じかんがかかります。", en: "It takes time." }, accept: ["to take", "cost", "takes"] },
        { id: "ja-u53l4-furimasu", type: "vocab", front: "ふります", reading: "furimasu", meaning: "fall (rain)", example: { jp: "あめがふります。", en: "It rains." }, accept: ["to fall", "rain falls", "come down"] },
        { id: "ja-u53l4-komarimasu", type: "vocab", front: "こまります", reading: "komarimasu", meaning: "be troubled", example: { jp: "ちょっとこまります。", en: "I'm a bit troubled." }, accept: ["to be troubled", "be in trouble", "have a problem"] },
        { id: "ja-u53l4-mitsukemasu", type: "vocab", front: "みつけます", reading: "mitsukemasu", meaning: "find", example: { jp: "かぎをみつけます。", en: "I find the key." }, accept: ["to find", "finds", "discover"] },
        { id: "ja-u53l4-kekkonshimasu", type: "vocab", front: "けっこんします", reading: "kekkonshimasu", meaning: "get married", example: { jp: "ともだちがけっこんします。", en: "My friend is getting married." }, accept: ["to marry", "get married", "marries"] },
      ],
    },
  ],
};
