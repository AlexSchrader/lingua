// DE Unit 12 — Der Satz und die Wortstellung (slot: grammar-1) — A1
// Block 2 (u8–u14). Conventions: see de/unit1.js.
// The first of the three grammar units. It owns VERB-SECOND, yes/no questions, the
// w-questions block 1 did not take, and the position of nicht and kein. Block 1 taught
// nicht (u3) and the subject pronouns (u3) — this unit puts them in a sentence.
// Modelled as function-word vocab whose EXAMPLES carry the pattern, per RUNBOOK §4:
// every card here is a real word, and the sentence it sits in is the grammar lesson.
// Lesson 1's six adverbs are chosen because they can all be fronted, which is what
// makes verb-second visible: Manchmal IST die Straße leer, not Manchmal die Straße ist.
//
// ⚠️ REJECTED — schon. It is a perfectly good A1 word and it cannot be taught in this
// language, because u1 already teaches schön and the umlaut FOLDS: both fronts
// normalize to the reading "schon". validate:content compares fronts, not readings, so
// it would have passed silently and left two different cards a learner answers the same
// way. Caught by hand. selten took the slot instead.
// ⚠️ kein is taught here although u2 teaches the fixed phrase kein Problem. That phrase
// is lexicalised, like auf Wiedersehen; the negation article kein/keine/keinen is core
// grammar that has to be taught somewhere, and this is the unit that owns negation.
// Flagged for the merge seat rather than hidden.
export const DE_UNIT12 = {
  id: "de-u12",
  lang: "de",
  title: "Der Satz und die Wortstellung",
  order: 12,
  stage: "a1",
  lessons: [
    {
      id: "de-u12l1",
      unit: 12,
      lesson: 1,
      title: "Das Verb an Position zwei",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Put something other than the subject first and still keep the verb in second place — the one rule that shapes every German sentence.",
      items: [
        { id: "de-u12l1-immer", type: "vocab", front: "immer", reading: "immer", meaning: "always", example: { jp: "Der Kaffee ist immer heiß.", en: "The coffee is always hot." }, accept: ["always"], hint: "Sits in the middle of the sentence, after the verb. Front it and the verb still comes second: Immer ist der Kaffee heiß." },
        { id: "de-u12l1-oft", type: "vocab", front: "oft", reading: "oft", meaning: "often", example: { jp: "Es regnet hier oft.", en: "It often rains here." }, accept: ["often"], hint: "The middle of the frequency scale. German puts it where English puts it — before the thing it measures, after the verb." },
        { id: "de-u12l1-manchmal", type: "vocab", front: "manchmal", reading: "manchmal", meaning: "sometimes", example: { jp: "Manchmal ist die Straße leer.", en: "Sometimes the street is empty." }, accept: ["sometimes"], hint: "Look at the order: Manchmal IST die Straße leer. The subject die Straße gets pushed behind the verb, because position two belongs to the verb and nothing else." },
        { id: "de-u12l1-selten", type: "vocab", front: "selten", reading: "selten", meaning: "rarely / seldom", example: { jp: "Hier schneit es sehr selten.", en: "It very rarely snows here." }, accept: ["rarely", "seldom", "not often"], hint: "Between manchmal and nie. Again the verb is second: Hier SCHNEIT es…, with es pushed behind it." },
        { id: "de-u12l1-dann", type: "vocab", front: "dann", reading: "dann", meaning: "then", example: { jp: "Dann kommt der Winter.", en: "Then winter comes." }, accept: ["then", "after that", "next"], hint: "The clearest case of all: Dann KOMMT der Winter. English says then winter comes; German cannot, because the verb has to be second." },
        { id: "de-u12l1-noch", type: "vocab", front: "noch", reading: "noch", meaning: "still / yet", example: { jp: "Der Kaffee ist noch heiß.", en: "The coffee is still hot." }, accept: ["still", "yet"], hint: "Noch nicht is not yet — the pair sits together constantly. Do not confuse it with nach, a preposition arriving in u14." },
      ],
    },
    {
      id: "de-u12l2",
      unit: 12,
      lesson: 2,
      title: "W-Fragen",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask an open question with a question word — who, when, why, where to, how much, which.",
      items: [
        { id: "de-u12l2-wer", type: "vocab", front: "wer", reading: "wer", meaning: "who", example: { jp: "Wer ist das?", en: "Who is that?" }, accept: ["who"], hint: "A false friend worth pinning down now: wer means who, and wo (u3) means where. English speakers reverse them constantly." },
        { id: "de-u12l2-wann", type: "vocab", front: "wann", reading: "wann", meaning: "when", example: { jp: "Wann kommt der Sommer?", en: "When does summer come?" }, accept: ["when"], hint: "Question word only. For when as a joining word German uses something else entirely, which is a later story." },
        { id: "de-u12l2-warum", type: "vocab", front: "warum", reading: "warum", meaning: "why", example: { jp: "Warum ist das Kind traurig?", en: "Why is the child sad?" }, accept: ["why", "how come"], hint: "va-ROOM. In a w-question the verb still comes second — the question word takes position one." },
        { id: "de-u12l2-wohin", type: "vocab", front: "wohin", reading: "wohin", meaning: "where to", example: { jp: "Wohin gehen wir?", en: "Where are we going?" }, accept: ["where to", "where", "whither"], hint: "German splits English where in two: wo asks where something IS, wohin asks where it is GOING. That split is exactly the case contrast u13 and u14 are built on." },
        { id: "de-u12l2-wieviel", type: "vocab", front: "wie viel", reading: "wieviel", meaning: "how much", example: { jp: "Wie viel Zeit haben wir?", en: "How much time do we have?" }, accept: ["how much", "how many"], hint: "Two words in modern spelling. For countable things you will also meet wie viele — how many." },
        { id: "de-u12l2-welcher", type: "vocab", front: "welcher", reading: "welcher", meaning: "which", example: { jp: "Welcher Tag ist heute?", en: "Which day is it today?" }, accept: ["which", "what"], hint: "It changes ending with the noun, exactly like der/die/das: welcher Tag, welche Woche, welches Jahr." },
      ],
    },
    {
      id: "de-u12l3",
      unit: 12,
      lesson: 3,
      title: "Ja, nein, doch",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask a yes/no question, answer one — including the German answer English does not have — and join two sentences.",
      items: [
        { id: "de-u12l3-doch", type: "vocab", front: "doch", reading: "doch", meaning: "yes (contradicting a negative)", example: { jp: "Bist du nicht müde? Doch!", en: "Aren't you tired? Yes, I am!" }, accept: ["yes", "yes i am", "on the contrary", "yes actually"], hint: "German's third answer word, and English has nothing like it. Ja agrees with a positive question; doch contradicts a NEGATIVE one. Answering ja to Bist du nicht müde? is genuinely ambiguous — doch is not." },
        { id: "de-u12l3-vielleicht", type: "vocab", front: "vielleicht", reading: "vielleicht", meaning: "maybe / perhaps", example: { jp: "Vielleicht regnet es morgen.", en: "Maybe it will rain tomorrow." }, accept: ["maybe", "perhaps", "possibly"], hint: "fee-LYSHT. Front it and the verb follows immediately: Vielleicht REGNET es — verb second again." },
        { id: "de-u12l3-sicher", type: "vocab", front: "sicher", reading: "sicher", meaning: "certainly / safe", example: { jp: "Das ist sicher gut.", en: "That is certainly good." }, accept: ["certainly", "surely", "safe", "sure"], hint: "Two jobs: certainly, as here, and physically safe. The opposite of vielleicht in the first sense." },
        { id: "de-u12l3-aber", type: "vocab", front: "aber", reading: "aber", meaning: "but", example: { jp: "Das Hotel ist schön, aber teuer.", en: "The hotel is beautiful but expensive." }, accept: ["but", "however"], hint: "Joins two halves without touching the word order of either — aber sits outside the count, so the verb after it is still second." },
        { id: "de-u12l3-oder", type: "vocab", front: "oder", reading: "oder", meaning: "or", example: { jp: "Kaffee oder Tee?", en: "Coffee or tea?" }, accept: ["or"], hint: "Also tacked onto the end of a statement to turn it into a question: Das ist gut, oder? — like English isn't it." },
        { id: "de-u12l3-denn", type: "vocab", front: "denn", reading: "denn", meaning: "because / for", example: { jp: "Ich bin müde, denn es ist spät.", en: "I am tired, because it is late." }, accept: ["because", "for", "since"], hint: "Like aber and oder it leaves the word order alone — the verb stays second after it. German's other because, weil, does something quite different to the verb." },
      ],
    },
    {
      id: "de-u12l4",
      unit: 12,
      lesson: 4,
      title: "nicht und kein",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say no to two different things: nicht for a verb or an adjective, kein for a noun.",
      items: [
        { id: "de-u12l4-kein", type: "vocab", front: "kein", reading: "kein", meaning: "no / not a", example: { jp: "Ich habe kein Buch.", en: "I do not have a book." }, accept: ["no", "not a", "not any", "none"], hint: "The single most important split in German negation: nicht (u3) negates a verb or an adjective, kein negates a NOUN. Never nicht ein — always kein." },
        { id: "de-u12l4-nichts", type: "vocab", front: "nichts", reading: "nichts", meaning: "nothing", example: { jp: "Hier ist nichts.", en: "There is nothing here." }, accept: ["nothing", "not anything"], hint: "One s away from nicht (u3) and a different word: nicht is not, nichts is nothing." },
        { id: "de-u12l4-niemand", type: "vocab", front: "niemand", reading: "niemand", meaning: "nobody", example: { jp: "Niemand ist hier.", en: "Nobody is here." }, accept: ["nobody", "no one", "not anyone"], hint: "The person version of nichts. German uses one negative word per sentence — Niemand ist hier, never a double negative." },
        { id: "de-u12l4-nie", type: "vocab", front: "nie", reading: "nie", meaning: "never", example: { jp: "Ich trinke nie Kaffee.", en: "I never drink coffee." }, accept: ["never", "not ever"], hint: "The bottom of lesson 1's frequency scale: immer, oft, manchmal, selten, nie. It sits in the same middle position they do." },
        { id: "de-u12l4-sondern", type: "vocab", front: "sondern", reading: "sondern", meaning: "but rather", example: { jp: "Das ist nicht Tee, sondern Kaffee.", en: "That is not tea, but coffee." }, accept: ["but rather", "but", "rather", "instead"], hint: "The but that only appears after a negative, correcting it. Nicht X, sondern Y. Use aber for the ordinary but — German keeps the two apart and English does not." },
        { id: "de-u12l4-etwas", type: "vocab", front: "etwas", reading: "etwas", meaning: "something / a little", example: { jp: "Ich habe etwas Zeit.", en: "I have a little time." }, accept: ["something", "a little", "some", "somewhat"], hint: "The positive opposite of nichts. Before a noun it means a little; on its own it means something." },
      ],
    },
  ],
};
