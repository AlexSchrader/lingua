// DE Unit 69 — Verweiswörter und Nebensätze (slot: grammar 6) — B1
// Block 2 (u63-u75). Conventions: see de/unit1.js. Style note: see de/unit63.js.
//
// RETHEMED SLOT. The scaffold calls this "Grammar 6 — linked and subordinate
// clauses", which is a Japanese-shaped label; German already spent two whole A2
// units on plain subordination (u29 "Nebensaetze und Konnektoren", u36 "Saetze
// verbinden 2") and between them they took weil, dass, ob, wenn, als, bevor,
// nachdem, sobald, waehrend, obwohl, damit, falls, solange, trotzdem, dessen and
// deren. Repeating that slot would teach nothing. Per CLAUDE.md "No front
// language", the slot is rethemed to the thing German B1 actually needs next and
// that no unit has touched: the PRONOMINAL ADVERBS — wo(r)- for the question,
// da(r)- for the answer — which English has no equivalent for and which a learner
// cannot dodge, because "auf was wartest du" is wrong and "worauf wartest du" is
// the only way to say it. l3-l4 then take the reference words and subordinators
// A2 left on the table.
//
// The -r- is not decoration: it appears exactly when the preposition starts with
// a vowel (wo+r+auf, da+r+auf) and is absent when it does not (womit, damit).
// That rule is stated in every hint in l1 and l2, because it is the whole trick.
// NOT taken, already taught: welcher (u12), wer/wen/wem (u12), was (u3), wo (u7),
// damit and dessen/deren (u29, u36), danach (u28).
// FREE: Anna, Thomas, Lena, Max, Berlin, Hamburg, Kinder, Jahre
export const DE_UNIT69 = {
  id: "de-u69",
  lang: "de",
  title: "Verweiswörter und Nebensätze",
  order: 69,
  stage: "b1",
  lessons: [
    {
      id: "de-u69l1",
      unit: 69,
      lesson: 1,
      title: "Fragen mit wo- und wor-",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Ask a question about a thing the German way: for what, of what, with what, about what, on what subject, what purpose.",
      items: [
        { id: "de-u69l1-worauf", type: "vocab", front: "worauf", reading: "worauf", meaning: "for what", example: { jp: "Worauf wartest du noch? Der Bus nach Hamburg ist schon weg.", en: "What are you still waiting for? The bus to Hamburg has already gone." }, drill: { jp: "Worauf wartest du noch", en: "What are you still waiting for" }, accept: ["for what", "what for", "on what", "what on", "what … for"], hint: "wo + r + auf, because auf starts with a vowel. For a person you say auf wen." },
        { id: "de-u69l1-woran", type: "vocab", front: "woran", reading: "woran", meaning: "of what", example: { jp: "Woran denkst du gerade? Du sagst seit Minuten nichts.", en: "What are you thinking about right now? You have not said anything for minutes." }, drill: { jp: "Woran denkst du gerade", en: "What are you thinking about right now" }, accept: ["of what", "what of", "about what", "what about", "on what"], hint: "wo + r + an. Goes with denken an, arbeiten an, sich erinnern an." },
        { id: "de-u69l1-womit", type: "vocab", front: "womit", reading: "womit", meaning: "with what", example: { jp: "Womit kann ich Ihnen helfen? Bitte sagen Sie es genau.", en: "What can I help you with? Please say exactly." }, drill: { jp: "Womit kann ich helfen", en: "What can I help with" }, accept: ["with what", "what with", "how"], hint: "No -r-: mit starts with a consonant. Same for wovon, wofür, wodurch." },
        { id: "de-u69l1-wovon", type: "vocab", front: "wovon", reading: "wovon", meaning: "about what", example: { jp: "Wovon sprechen die Kinder im Zimmer?", en: "What are the children in the room talking about?" }, drill: { jp: "Wovon sprechen die Kinder", en: "What are the children talking about" }, accept: ["about what", "what about", "of what", "what of", "from what"], hint: "Goes with sprechen von, träumen von, leben von." },
        { id: "de-u69l1-woruber", type: "vocab", front: "worüber", reading: "woruber", meaning: "on what subject", example: { jp: "Worüber sprechen wir heute in der Schule?", en: "What are we talking about in school today?" }, drill: { jp: "Worüber sprechen wir heute", en: "What are we talking about today" }, accept: ["on what subject", "about what", "what about", "over what"], hint: "Both über and von work with sprechen, so worüber and wovon can both fit." },
        { id: "de-u69l1-wofur", type: "vocab", front: "wofür", reading: "wofur", meaning: "what purpose", example: { jp: "Wofür brauchst du das Geld? Für ein Auto oder für die Miete?", en: "What do you need the money for? For a car or for the rent?" }, drill: { jp: "Wofür brauchst du das Geld", en: "What do you need the money for" }, accept: ["what purpose", "for what purpose", "what for", "for what"], hint: "No -r-. Careful: warum asks the reason, wofür asks the purpose." },
      ],
    },
    {
      id: "de-u69l2",
      unit: 69,
      lesson: 2,
      title: "Antworten mit da- und dar-",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Point back at a thing already mentioned: for it, of it, about it, on the subject, in the process, against it.",
      items: [
        { id: "de-u69l2-darauf", type: "vocab", front: "darauf", reading: "darauf", meaning: "for it", example: { jp: "Die Antwort kommt bald, und wir warten schon lange darauf.", en: "The answer is coming soon, and we have been waiting for it a long time." }, drill: { jp: "Wir warten schon lange darauf", en: "We have been waiting for it a long time" }, accept: ["for it", "for that", "on it", "on that"], hint: "The answer form of worauf: da + r + auf. Never 'auf es' — that is not German." },
        { id: "de-u69l2-daran", type: "vocab", front: "daran", reading: "daran", meaning: "of it", example: { jp: "Das Erlebnis am Meer war schön, ich denke oft daran.", en: "The experience by the sea was lovely, I often think of it." }, drill: { jp: "Ich denke oft daran", en: "I often think of it" }, accept: ["of it", "about it", "on it", "of that"], hint: "The answer form of woran. daran denken = to keep it in mind." },
        { id: "de-u69l2-davon", type: "vocab", front: "davon", reading: "davon", meaning: "about it", example: { jp: "Es gibt einen neuen Chef in der Firma, aber wir wissen nichts davon.", en: "There is a new boss at the firm, but we know nothing about it." }, drill: { jp: "Davon wissen wir nichts", en: "We know nothing about it" }, accept: ["about it", "of it", "from it", "of that"], hint: "No -r-. Common in speech: Ich habe nichts davon gewusst." },
        { id: "de-u69l2-daruber", type: "vocab", front: "darüber", reading: "daruber", meaning: "on the subject", example: { jp: "Der Streit ist zu neu, darüber sprechen wir morgen.", en: "The argument is too fresh, we will talk about it tomorrow." }, drill: { jp: "Darüber sprechen wir morgen", en: "We will talk about it tomorrow" }, accept: ["on the subject", "about it", "over it", "about that"], hint: "da + r + über. Also physical: das Bild und die Uhr darüber." },
        { id: "de-u69l2-dabei", type: "vocab", front: "dabei", reading: "dabei", meaning: "in the process", example: { jp: "Er arbeitet sehr viel, und dabei bleibt er immer ruhig.", en: "He works a great deal, and through it all he stays calm." }, drill: { jp: "Dabei ist er sehr ruhig", en: "In the process he is very calm" }, accept: ["in the process", "at the same time", "with it", "there", "in doing so"], hint: "Two uses: 'while doing it' and 'with me' — Hast du Geld dabei?" },
        { id: "de-u69l2-dagegen", type: "vocab", front: "dagegen", reading: "dagegen", meaning: "against it", example: { jp: "Der Preis ist zu hoch, aber dagegen kann der Kunde nichts machen.", en: "The price is too high, but the customer can do nothing about it." }, drill: { jp: "Dagegen kann man nichts machen", en: "You cannot do anything about it" }, accept: ["against it", "against that", "by contrast", "on the other hand"], hint: "Also 'by contrast' when it opens a sentence: Im Norden regnet es, dagegen ist es hier warm." },
      ],
    },
    {
      id: "de-u69l3",
      unit: 69,
      lesson: 3,
      title: "Noch mehr Verweiswörter",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Refer back more precisely: in it, through it, to it, in what, whereby, in that respect.",
      items: [
        { id: "de-u69l3-darin", type: "vocab", front: "darin", reading: "darin", meaning: "in it", example: { jp: "Die Arbeit ist gut, aber darin liegt auch das Problem.", en: "The work is good, but therein lies the problem too." }, drill: { jp: "Darin liegt das Problem", en: "In it lies the problem" }, accept: ["in it", "in that", "therein", "in there"], hint: "da + r + in. darin liegt … is a set phrase for naming the heart of a matter." },
        { id: "de-u69l3-dazu", type: "vocab", front: "dazu", reading: "dazu", meaning: "to it", example: { jp: "Die Kollegen haben eine Meinung, aber der Chef sagt nichts dazu.", en: "The colleagues have an opinion, but the boss says nothing about it." }, drill: { jp: "Dazu sagt der Chef nichts", en: "The boss says nothing about it" }, accept: ["to it", "about it", "on that", "in addition"], hint: "Also 'with it' at table: ein Glas Wein dazu." },
        { id: "de-u69l3-worin", type: "vocab", front: "worin", reading: "worin", meaning: "in what", example: { jp: "Worin liegt der Unterschied zwischen den zwei Sprachen?", en: "What is the difference between the two languages?" }, drill: { jp: "Worin liegt der Unterschied", en: "Where does the difference lie" }, accept: ["in what", "wherein", "what in", "where"], hint: "The question form of darin. Formal, and common in exam questions." },
        { id: "de-u69l3-wobei", type: "vocab", front: "wobei", reading: "wobei", meaning: "whereby", example: { jp: "Wir nehmen das kleine Haus, wobei der Garten sehr schön ist.", en: "We are taking the small house, though the garden is very beautiful." }, drill: { jp: "Er arbeitet viel wobei er ruhig bleibt", en: "He works a lot though he stays calm" }, accept: ["whereby", "although", "though", "with the proviso that", "in which"], hint: "Opens a clause that adds a second thought. Verb goes last: … wobei er ruhig bleibt." },
        { id: "de-u69l3-insofern", type: "vocab", front: "insofern", reading: "insofern", meaning: "in that respect", example: { jp: "Der Preis ist hoch, aber insofern hat der Chef recht.", en: "The price is high, but in that respect the boss is right." }, drill: { jp: "Insofern hat der Chef recht", en: "In that respect the boss is right" }, accept: ["in that respect", "to that extent", "in so far", "in a way"], hint: "Two stresses are heard: IN-so-fern. insofern als … = in so far as …" },
      ],
    },
    {
      id: "de-u69l4",
      unit: 69,
      lesson: 4,
      title: "Nebensätze · 3",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Join two clauses with the connectors A2 left out: whose, the one who, by doing, so that, ever since, especially since.",
      items: [
        { id: "de-u69l4-wessen", type: "vocab", front: "wessen", reading: "wessen", meaning: "whose", example: { jp: "Wessen Auto steht dort vor dem Haus von meinen Eltern?", en: "Whose car is standing there in front of my parents' house?" }, drill: { jp: "Wessen Auto steht dort", en: "Whose car is standing there" }, accept: ["whose", "of whom"], hint: "The genitive of wer. Formal; in speech people say Wem sein Auto or Von wem." },
        { id: "de-u69l4-derjenige", type: "vocab", front: "derjenige", reading: "derjenige", meaning: "the one who", example: { jp: "Derjenige, der zuerst kommt, hat den besseren Platz.", en: "The one who comes first has the better seat." }, drill: { jp: "Derjenige hat das Geld", en: "That one has the money" }, accept: ["the one who", "the one", "he who", "that one"], hint: "Both halves take an ending: diejenige, dasjenige, denjenigen. Almost always followed by a relative clause." },
        { id: "de-u69l4-indem", type: "vocab", front: "indem", reading: "indem", meaning: "by doing", example: { jp: "Man lernt eine Sprache, indem man jeden Tag ein wenig liest.", en: "You learn a language by reading a little every day." }, drill: { jp: "Man lernt indem man viel liest", en: "You learn by reading a lot" }, accept: ["by doing", "by", "in that", "by means of"], hint: "Answers 'how', never 'when'. One word, verb at the end: indem man liest." },
        { id: "de-u69l4-sodass", type: "vocab", front: "sodass", reading: "sodass", meaning: "so that", example: { jp: "Es regnet den ganzen Tag, sodass wir zu Hause bleiben.", en: "It is raining all day, so that we are staying at home." }, drill: { jp: "Es regnet sodass wir bleiben", en: "It is raining so that we are staying" }, accept: ["so that", "with the result that", "and so"], hint: "The RESULT. damit (u29) is the PURPOSE — the difference matters." },
        { id: "de-u69l4-zumal", type: "vocab", front: "zumal", reading: "zumal", meaning: "especially since", example: { jp: "Wir bleiben heute zu Hause, zumal es den ganzen Tag regnet.", en: "We are staying home today, especially since it is raining all day." }, drill: { jp: "Wir bleiben zumal es regnet", en: "We are staying especially since it is raining" }, accept: ["especially since", "particularly as", "all the more so because"], hint: "Adds the strongest reason last. Verb at the end: zumal es regnet." },
      ],
    },
  ],
};
