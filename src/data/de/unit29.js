// DE Unit 29 — Connecting words (slot: connectives) — A2
// Conventions and the FREE list live in de/unit1.js — read that header first.
//
// THIS UNIT CLOSES GERMAN A1's BIGGEST GAP. A1 taught five coordinating
// conjunctions (und, aber, oder, denn, sondern) and six modals and ZERO
// subordinating conjunctions — the only A1 language in this project with none
// (es has four, no four, fr two, pt two). A learner finishing A1 could not say
// because, if, when or that. Worse, A1 needed the structure once and used it
// unexplained: de-u20l2-wissen's example is "Ich weiß, wo das Museum ist." — a
// verb-final embedded clause, the only subordinate clause in all 480 A1 cards,
// in the last unit, taught by nothing. And `denn` was taught precisely BECAUSE
// it does not trigger verb-final order, so A1 taught the exception without ever
// teaching the rule.
//
// So the real subject of this unit is not a word list, it is WORD ORDER. Every
// subordinator here sends the verb to the end of its clause. That is the second
// half of German's defining rule; A1 drilled V2 thoroughly and stopped. l1 opens
// it with weil against the already-taught denn, which is the one pair where the
// rule is visible in a minimal contrast:
//     Ich bleibe hier, denn es regnet.     (denn: verb stays second)
//     Ich bleibe hier, weil es regnet.     (weil: verb to the end)
//
// GLOSSES ARE WRITTEN BY FUNCTION, OUTSIDE PARENTHESES, AND THAT IS DELIBERATE.
// normalizeMeaning strips parentheticals, so "because (verb to the end)" would
// collapse to "because" and collide with denn. Four confusion pairs are handled
// this way — weil/denn, wenn/wann, dass/das, nachdem/nach — and in every one the
// distinction IS the lesson, so a gloss that carries it teaches better than the
// bare translation it replaces.
//
// SCOPE: every example and drill here uses only A1 vocabulary (u1-u20). u21-u28
// are mine and were authored after this unit, so nothing here depends on them —
// which also means blocks 2 and 3 can build on u29 without waiting for the rest
// of my block.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT29 = {
  id: "de-u29",
  lang: "de",
  title: "Nebensätze und Konnektoren",
  order: 29,
  stage: "a2",
  lessons: [
    {
      id: "de-u29l1",
      unit: 29,
      lesson: 1,
      title: "Warum? — Weil …",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give a reason two ways — with weil, which sends the verb to the end, and with deshalb, which does not — and name the reason itself.",
      items: [
        { id: "de-u29l1-weil", type: "vocab", front: "weil", reading: "weil", meaning: "because — verb to the end", example: { jp: "Ich bleibe hier, weil es regnet.", en: "I am staying here because it is raining." }, drill: { jp: "Wir bleiben hier weil es regnet", en: "We are staying here because it is raining" }, accept: ["because", "since", "as"], hint: "The one card that teaches German's other word order. Compare the already-taught denn: Ich bleibe hier, DENN es regnet (verb second) against Ich bleibe hier, WEIL es regnet (verb last). Same meaning, different order — and weil is what people actually say." },
        { id: "de-u29l1-deshalb", type: "vocab", front: "deshalb", reading: "deshalb", meaning: "therefore", example: { jp: "Es regnet, deshalb bleiben wir hier.", en: "It is raining, therefore we are staying here." }, drill: { jp: "Deshalb bleiben wir hier", en: "Therefore we are staying here" }, accept: ["therefore", "so", "that is why"], hint: "Not a subordinator — it takes the first position and the verb still comes second: deshalb BLEIBEN wir. weil gives the cause, deshalb gives the consequence." },
        { id: "de-u29l1-deswegen", type: "vocab", front: "deswegen", reading: "deswegen", meaning: "for that reason", example: { jp: "Ich bin krank, deswegen arbeite ich nicht.", en: "I am ill, for that reason I am not working." }, drill: { jp: "Deswegen arbeite ich nicht", en: "For that reason I am not working" }, accept: ["for that reason", "that is why", "because of that"], hint: "Interchangeable with deshalb in almost every sentence. Both are built from a pointing word plus a reason: des-halb, des-wegen." },
        { id: "de-u29l1-dergrund", type: "vocab", front: "der Grund", reading: "dergrund", meaning: "the reason", example: { jp: "Der Grund ist das Wetter.", en: "The reason is the weather." }, drill: { jp: "Der Grund für die Verspätung ist das Wetter", en: "The reason for the delay is the weather" }, accept: ["the reason", "reason", "the ground"], hint: "Aus diesem Grund = for this reason. It also means the ground you stand on, and the bottom of a lake." },
        { id: "de-u29l1-naemlich", type: "vocab", front: "nämlich", reading: "namlich", meaning: "namely", example: { jp: "Wir gehen nicht, es regnet nämlich.", en: "We are not going — it is raining, you see." }, drill: { jp: "Ich komme nämlich später", en: "I am coming later, you see" }, accept: ["namely", "you see", "that is", "as it happens"], hint: "Never first in the sentence. It slips in after the verb to explain what you just said — closest to English \"you see\" tacked on the end." },
        { id: "de-u29l1-also", type: "vocab", front: "also", reading: "also", meaning: "so", example: { jp: "Es ist spät, also gehen wir.", en: "It is late, so we are going." }, drill: { jp: "Also gehen wir jetzt", en: "So we are going now" }, accept: ["so", "therefore", "well then"], hint: "⚠️ A false friend: German also is English \"so\", NOT English \"also\". English \"also\" is auch, which you already know." },
      ],
    },
    {
      id: "de-u29l2",
      unit: 29,
      lesson: 2,
      title: "Dass und ob",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Report what someone thinks, believes or hopes with a dass-clause, and ask an open question with ob.",
      items: [
        { id: "de-u29l2-dass", type: "vocab", front: "dass", reading: "dass", meaning: "that — links a clause", example: { jp: "Ich weiß, dass du hier bist.", en: "I know that you are here." }, drill: { jp: "Ich weiß dass du hier bist", en: "I know that you are here" }, accept: ["that"], hint: "⚠️ Two words one letter apart: das points at something (das Buch, das ist gut), dass links two clauses. If you can replace it with \"which\" or \"this\", it is das; if it introduces a whole clause, it is dass. Verb to the end after it." },
        { id: "de-u29l2-ob", type: "vocab", front: "ob", reading: "ob", meaning: "whether", example: { jp: "Ich weiß nicht, ob er kommt.", en: "I do not know whether he is coming." }, drill: { jp: "Ich frage ob er kommt", en: "I am asking whether he is coming" }, accept: ["whether", "if"], hint: "For a yes-or-no question turned into a clause. English uses \"if\" for both this and a condition; German keeps them apart — ob for the question, wenn for the condition." },
        { id: "de-u29l2-glauben", type: "vocab", front: "glauben", reading: "glauben", meaning: "to believe", example: { jp: "Ich glaube, dass es morgen regnet.", en: "I believe it will rain tomorrow." }, drill: { jp: "Wir glauben dass es regnet", en: "We believe that it is raining" }, accept: ["to believe", "to think", "believe"], hint: "In speech the dass is often dropped and the order goes back to normal: Ich glaube, es regnet. Both are correct." },
        { id: "de-u29l2-hoffen", type: "vocab", front: "hoffen", reading: "hoffen", meaning: "to hope", example: { jp: "Wir hoffen, dass ihr kommt.", en: "We hope that you are coming." }, drill: { jp: "Wir hoffen dass ihr kommt", en: "We hope that you are coming" }, accept: ["to hope", "hope"], hint: "Hoffentlich is the everyday adverb built from it: Hoffentlich regnet es nicht — hopefully it will not rain." },
        { id: "de-u29l2-erzaehlen", type: "vocab", front: "erzählen", reading: "erzahlen", meaning: "to tell", example: { jp: "Die Kinder erzählen uns von der Schule.", en: "The children tell us about school." }, drill: { jp: "Die Eltern erzählen uns von der Reise", en: "The parents tell us about the trip" }, accept: ["to tell", "to recount", "tell"], hint: "erzählen VON etwas, with the dative. Do not confuse it with sagen — you sagen a fact, you erzählen a story." },
        { id: "de-u29l2-diemeinung", type: "vocab", front: "die Meinung", reading: "diemeinung", meaning: "the opinion", example: { jp: "Die Meinung ist nicht falsch.", en: "The opinion is not wrong." }, drill: { jp: "Die Meinung ist nicht immer richtig", en: "The opinion is not always right" }, accept: ["the opinion", "opinion", "view"], hint: "Meiner Meinung nach = in my opinion, and it is the phrase you will use most. Nouns in -ung are always die." },
      ],
    },
    {
      id: "de-u29l3",
      unit: 29,
      lesson: 3,
      title: "Wenn, als und bevor",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put one event in time against another — before it, after it, as soon as it happens, while it happens — and tell the difference between wenn and als.",
      items: [
        { id: "de-u29l3-wenn", type: "vocab", front: "wenn", reading: "wenn", meaning: "if — a condition", example: { jp: "Wenn es regnet, bleiben wir hier.", en: "If it rains, we will stay here." }, drill: { jp: "Wenn es regnet bleiben wir", en: "If it rains we stay" }, accept: ["if", "when", "whenever"], hint: "⚠️ Do not confuse with the already-taught wann, which only asks a question: Wann kommst du? Wenn never asks — it sets up a condition or a repeated occasion." },
        { id: "de-u29l3-als", type: "vocab", front: "als", reading: "als", meaning: "when — one past event", example: { jp: "Als du gekommen bist, haben wir Kaffee getrunken.", en: "When you arrived, we drank coffee." }, drill: { jp: "Als du gekommen bist", en: "When you arrived" }, accept: ["when", "as", "than"], hint: "The rule is sharp and worth memorising: als for a SINGLE event in the past, wenn for anything repeated or still to come. Als is also \"than\" in a comparison — größer als." },
        { id: "de-u29l3-bevor", type: "vocab", front: "bevor", reading: "bevor", meaning: "before", example: { jp: "Bevor wir gehen, trinken wir Kaffee.", en: "Before we go, we drink coffee." }, drill: { jp: "Bevor wir gehen trinken wir Kaffee", en: "Before we go we drink coffee" }, accept: ["before"], hint: "The conjunction, taking a whole clause. The preposition vor, which you know from u13, takes only a noun: vor dem Essen." },
        { id: "de-u29l3-nachdem", type: "vocab", front: "nachdem", reading: "nachdem", meaning: "after — links a clause", example: { jp: "Nachdem wir gearbeitet haben, trinken wir Tee.", en: "After we have worked, we drink tea." }, drill: { jp: "Nachdem wir gearbeitet haben", en: "After we have worked" }, accept: ["after", "afterwards"], hint: "The clause partner of the already-taught preposition nach. nach dem Essen takes a noun; nachdem wir gegessen haben takes a whole clause with the verb at the end." },
        { id: "de-u29l3-sobald", type: "vocab", front: "sobald", reading: "sobald", meaning: "as soon as", example: { jp: "Sobald es warm ist, gehen wir.", en: "As soon as it is warm, we are going." }, drill: { jp: "Sobald es warm ist", en: "As soon as it is warm" }, accept: ["as soon as", "the moment"], hint: "Built transparently from so + bald, and bald you already know from bis bald." },
        { id: "de-u29l3-waehrend", type: "vocab", front: "während", reading: "wahrend", meaning: "while", example: { jp: "Während wir arbeiten, hören wir Musik.", en: "While we work, we listen to music." }, drill: { jp: "Während wir arbeiten hören wir Musik", en: "While we work we listen to music" }, accept: ["while", "during", "whilst"], hint: "Also a preposition with the genitive — während des Tages — but as a conjunction it takes a clause and sends the verb to the end." },
      ],
    },
    {
      id: "de-u29l4",
      unit: 29,
      lesson: 4,
      title: "Obwohl und damit",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Concede a point and carry on anyway, give the purpose of an action, and set a condition or a consequence of not meeting it.",
      items: [
        { id: "de-u29l4-obwohl", type: "vocab", front: "obwohl", reading: "obwohl", meaning: "although", example: { jp: "Obwohl es regnet, gehen wir.", en: "Although it is raining, we are going." }, drill: { jp: "Obwohl es regnet gehen wir", en: "Although it is raining we are going" }, accept: ["although", "though", "even though"], hint: "Sends the verb to the end, like every subordinator here. Its non-subordinating partner is trotzdem, the next card." },
        { id: "de-u29l4-trotzdem", type: "vocab", front: "trotzdem", reading: "trotzdem", meaning: "nevertheless", example: { jp: "Es regnet. Trotzdem gehen wir.", en: "It is raining. Nevertheless we are going." }, drill: { jp: "Trotzdem gehen wir jetzt", en: "Nevertheless we are going now" }, accept: ["nevertheless", "even so", "anyway", "all the same"], hint: "The obwohl/trotzdem pair works exactly like weil/deshalb: the subordinator puts the verb last, the adverb keeps it second. Learn them as pairs, not as eight separate words." },
        { id: "de-u29l4-damit", type: "vocab", front: "damit", reading: "damit", meaning: "so that", example: { jp: "Ich sage es, damit du es weißt.", en: "I am saying it so that you know." }, drill: { jp: "Damit du es weißt", en: "So that you know" }, accept: ["so that", "in order that"], hint: "For purpose. When both halves share a subject German prefers um … zu instead, but damit always works and is never wrong." },
        { id: "de-u29l4-falls", type: "vocab", front: "falls", reading: "falls", meaning: "in case", example: { jp: "Falls es regnet, bleiben wir hier.", en: "In case it rains, we will stay here." }, drill: { jp: "Falls es regnet bleiben wir", en: "In case it rains we stay" }, accept: ["in case", "if", "should"], hint: "A more cautious wenn — it leans towards the unlikely. Built from der Fall, the case." },
        { id: "de-u29l4-solange", type: "vocab", front: "solange", reading: "solange", meaning: "as long as", example: { jp: "Solange es warm ist, sind wir hier.", en: "As long as it is warm, we are here." }, drill: { jp: "Solange es warm ist", en: "As long as it is warm" }, accept: ["as long as", "so long as", "while"], hint: "so + lange, and one word when it joins clauses. Two words, so lange, means \"for such a long time\"." },
        { id: "de-u29l4-sonst", type: "vocab", front: "sonst", reading: "sonst", meaning: "otherwise", example: { jp: "Wir müssen gehen, sonst kommen wir spät.", en: "We have to go, otherwise we will be late." }, drill: { jp: "Sonst kommen wir spät", en: "Otherwise we will be late" }, accept: ["otherwise", "or else", "apart from that"], hint: "Also \"else\" in a question: Sonst noch etwas? — anything else? A shopkeeper will ask you this daily." },
      ],
    },
  ],
};
