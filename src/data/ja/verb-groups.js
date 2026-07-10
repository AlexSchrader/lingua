// Verb-group tags for the ～ます verbs in the curriculum. The conjugation engine
// (src/store/conjugate.js) needs each verb's group — godan / ichidan / irregular —
// because it CANNOT be inferred from the ending (帰ります/かえります looks ichidan
// but is godan; 走ります, 入ります likewise). So the group is tagged data, keyed by
// the ～ます front, and stamped onto matching items at seed time (src/data/index.js).
//
// Adding a verb to the curriculum? Add its group here so the conjugate card can
// drill it. Non-verb items (and ～ます forms not listed) simply carry no group and
// never route to the conjugate card.
export const VERB_GROUPS = {
  // ichidan (る-verbs: いる / える stems)
  "おきます": "ichidan",   // 起きる — get up
  "ねます": "ichidan",     // 寝る — sleep
  "たべます": "ichidan",   // 食べる — eat
  "みます": "ichidan",     // 見る — see

  // godan (う-verbs)
  "のみます": "godan",     // 飲む — drink
  "よみます": "godan",     // 読む — read
  "かきます": "godan",     // 書く — write
  "かいます": "godan",     // 買う — buy
  "はなします": "godan",   // 話す — speak
  "ききます": "godan",     // 聞く — listen
  "あいます": "godan",     // 会う — meet
  "わかります": "godan",   // 分かる — understand
  "いきます": "godan",     // 行く — go (te/ta exception: いって/いった, handled in engine)
  "かえります": "godan",   // 帰る — return (looks ichidan, is godan)

  // irregular
  "します": "irregular",   // する — do
  "きます": "irregular",   // 来る — come
};

// The group for a verb item's ～ます front, or undefined if it isn't a tagged verb.
export const groupFor = (front) => VERB_GROUPS[front];
