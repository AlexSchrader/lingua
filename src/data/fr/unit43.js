// FR Unit 43 — Grammar 4 — compound and linked clauses (slot: grammar-4) — A2
// A1 taught single clauses; this unit joins two of them. Grammar has no item
// type here either (CLAUDE.md) — every linker is authored as function-word vocab
// whose example sentence carries the pattern, exactly as Units 21/23/26 did.
//
// SCOPE BOUNDARY: block 1's Unit 36 is "connecting words", so this unit takes the
// SUBORDINATORS — the words that hang one clause off another — and leaves the
// simple sentence-adverb connectors (pourtant, par contre, en plus) to 36.
//
// POST-MERGE (2026-08-05): that boundary did NOT hold, and this unit paid for it.
// Unit 36 claimed eight of the linkers drafted here — pendant que, dès que,
// avant de, à cause de, grâce à, puisque, au lieu de, c'est pourquoi. Lower slot
// wins, so Lessons 2–4 were re-authored around linkers 36 does not teach:
// tandis que, au moment où, une fois que (time); en raison de, pour que, du coup,
// si bien que (cause, purpose, result); plutôt que (contrast). All eight ceded
// words stay usable in examples here — only the teaching slot moved. The lesson
// for the next language: "connecting words" and "linked clauses" are ONE domain
// split across two slots, and the split needs deciding before authoring starts.
//
// Fronts qui / que / où / si / quand / parce que / donc / alors are NOT re-taught:
// A1 owns them (Units 2, 21, 24, 10, 21), and a word gets one home. Their CLAUSE
// uses are shown in the examples here instead.
// Conventions: see fr/unit1.js. Examples use A1 vocab plus Units 38–42.
export const FR_UNIT43 = {
  id: "fr-u43",
  lang: "fr",
  title: "Un peu de grammaire · 2",
  order: 43,
  stage: "a2",
  lessons: [
    {
      id: "fr-u43l1",
      unit: 43,
      lesson: 1,
      title: "The one that…",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Point at something without repeating its name: celui de Marie, ce que je veux, le film dont je parle.",
      items: [
        { id: "fr-u43l1-celui", type: "vocab", front: "celui", reading: "celui", meaning: "the one (masculine)", example: { jp: "Quel livre ? Celui de Marie.", en: "Which book? Marie's." }, accept: ["that one", "this one", "the one"], hint: "celui stands in for a masculine noun you've already named — celui de Marie, celui de mon frère." },
        { id: "fr-u43l1-celle", type: "vocab", front: "celle", reading: "celle", meaning: "the one (feminine)", example: { jp: "Quelle voiture ? Celle de mon père.", en: "Which car? My father's." }, accept: ["that one", "this one", "the one"] },
        { id: "fr-u43l1-ceux", type: "vocab", front: "ceux", reading: "ceux", meaning: "the ones", example: { jp: "Ceux de mon frère sont ici.", en: "My brother's are here." }, accept: ["those", "those ones", "the ones"], hint: "The plural of celui. For feminine things: celles." },
        { id: "fr-u43l1-ceque", type: "vocab", front: "ce que", reading: "ceque", meaning: "what (as object)", example: { jp: "C'est ce que je veux.", en: "That's what I want." }, accept: ["that which", "the thing that", "what"], hint: "\"What\" inside a sentence is ce que — never quoi. Je sais ce que tu veux." },
        { id: "fr-u43l1-cequi", type: "vocab", front: "ce qui", reading: "cequi", meaning: "what (as subject)", example: { jp: "Ce qui est important, c'est la famille.", en: "What matters is family." }, accept: ["that which", "the thing that", "what"], hint: "ce qui when the next word is the verb; ce que when a subject comes first. ce qui est important / ce que je veux." },
        { id: "fr-u43l1-dont", type: "vocab", front: "dont", reading: "dont", meaning: "whose", example: { jp: "C'est le film dont je parle.", en: "That's the film I'm talking about." }, accept: ["of which", "about which", "that about"], hint: "dont replaces de + noun. je parle DE ce film → le film DONT je parle." },
      ],
    },
    {
      id: "fr-u43l2",
      unit: 43,
      lesson: 2,
      title: "Two things at once",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put two clauses in time order: lorsque je suis fatigué, tandis que tu travailles, une fois que j'ai fini.",
      items: [
        { id: "fr-u43l2-lorsque", type: "vocab", front: "lorsque", reading: "lorsque", meaning: "when", example: { jp: "Lorsque je suis fatigué, je ne travaille pas.", en: "When I'm tired, I don't work." }, accept: ["whenever", "at the time when", "when"], hint: "Exactly quand's meaning, one step more formal — commoner in writing than in speech." },
        { id: "fr-u43l2-depuisque", type: "vocab", front: "depuis que", reading: "depuisque", meaning: "ever since", example: { jp: "Depuis que j'habite ici, je suis content.", en: "Since I've lived here, I've been happy." }, accept: ["since", "from the time that"], hint: "The TIME \"since\" — depuis que counts from a moment. For a reason, Lesson 3 has car." },
        { id: "fr-u43l2-tandisque", type: "vocab", front: "tandis que", reading: "tandisque", meaning: "while", example: { jp: "Je lis tandis que ma sœur écoute la radio.", en: "I read while my sister listens to the radio." }, accept: ["whilst", "whereas", "as"], hint: "Two things at the same time — and often a contrast between them: whereas." },
        { id: "fr-u43l2-aumomentou", type: "vocab", front: "au moment où", reading: "aumomentou", meaning: "just as", example: { jp: "Au moment où je pars, ma mère arrive.", en: "Just as I'm leaving, my mother arrives." }, accept: ["at the moment when", "just when", "the moment"], hint: "où is doing time here, not place — the moment WHERE, as French sees it." },
        { id: "fr-u43l2-unefoisque", type: "vocab", front: "une fois que", reading: "unefoisque", meaning: "once", example: { jp: "Une fois que j'ai fini, je rentre.", en: "Once I've finished, I go home." }, accept: ["once that", "the moment that"] },
        { id: "fr-u43l2-apresavoir", type: "vocab", front: "après avoir", reading: "apresavoir", meaning: "after (doing)", example: { jp: "Après avoir mangé, je pars.", en: "After eating, I leave." }, accept: ["after having", "having", "after"], hint: "après + AVOIR + the participle: après avoir mangé. It does not mirror avant de." },
      ],
    },
    {
      id: "fr-u43l3",
      unit: 43,
      lesson: 3,
      title: "Why and what for",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Give a reason, a purpose, or a result: car je suis malade, afin de partir tôt, du coup je reste.",
      items: [
        { id: "fr-u43l3-car", type: "vocab", front: "car", reading: "car", meaning: "because", example: { jp: "Je reste à la maison, car je suis malade.", en: "I'm staying home, because I'm ill." }, accept: ["for", "as", "seeing as"], hint: "car and parce que both mean because — but car never starts a sentence, and only parce que can answer pourquoi ?" },
        { id: "fr-u43l3-enraisonde", type: "vocab", front: "en raison de", reading: "enraisonde", meaning: "due to", example: { jp: "Il n'y a pas de train en raison de la neige.", en: "There are no trains due to the snow." }, accept: ["owing to", "because of", "on account of"], hint: "The formal one — signs and announcements use it where speech would say à cause de." },
        { id: "fr-u43l3-afinde", type: "vocab", front: "afin de", reading: "afinde", meaning: "in order to", example: { jp: "Je pars tôt afin de voir ma mère.", en: "I leave early in order to see my mother." }, accept: ["so as to", "in order that", "to"], hint: "The formal twin of pour + verb: afin de partir = pour partir." },
        { id: "fr-u43l3-pourque", type: "vocab", front: "pour que", reading: "pourque", meaning: "so that", example: { jp: "Je parle lentement pour que tu comprennes.", en: "I speak slowly so that you understand." }, accept: ["in order that", "so as to let"], hint: "afin de + verb keeps ONE subject; pour que introduces a NEW one — and the verb after it shifts (tu comprennes, not tu comprends)." },
        { id: "fr-u43l3-ducoup", type: "vocab", front: "du coup", reading: "ducoup", meaning: "so", example: { jp: "Il pleut ; du coup, je reste ici.", en: "It's raining; so I'm staying here." }, accept: ["as a result", "therefore", "so then"], hint: "Everywhere in spoken French, rare in writing. It's the spoken donc." },
        { id: "fr-u43l3-sibienque", type: "vocab", front: "si bien que", reading: "sibienque", meaning: "with the result that", example: { jp: "Il a beaucoup travaillé, si bien qu'il est fatigué.", en: "He worked a lot, with the result that he's tired." }, accept: ["and so", "with the result", "so that in the end"], hint: "The written counterpart of du coup — it states a result, never a purpose." },
      ],
    },
    {
      id: "fr-u43l4",
      unit: 43,
      lesson: 4,
      title: "Saying what someone said",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Report what other people say: il dit que c'est bon, il demande si tu es là, selon mon père…",
      items: [
        { id: "fr-u43l4-ilditque", type: "vocab", front: "il dit que", reading: "ilditque", meaning: "he says that", example: { jp: "Il dit que le film est bon.", en: "He says the film is good." }, accept: ["she says that", "he says", "he tells"], hint: "French can never drop the que. English says \"he says it's good\"; French must say il dit QUE c'est bon." },
        { id: "fr-u43l4-ildemandesi", type: "vocab", front: "il demande si", reading: "ildemandesi", meaning: "he asks whether", example: { jp: "Il demande si tu es là.", en: "He's asking whether you're there." }, accept: ["he asks if", "she asks whether", "he wants to know if"], hint: "Inside a reported question, a yes/no question becomes si — never est-ce que." },
        { id: "fr-u43l4-ilrepondque", type: "vocab", front: "il répond que", reading: "ilrepondque", meaning: "he answers that", example: { jp: "Elle répond qu'elle est fatiguée.", en: "She answers that she's tired." }, accept: ["he replies that", "she answers that", "he says in reply"], hint: "que shrinks to qu' before a vowel: elle répond qu'elle est fatiguée." },
        { id: "fr-u43l4-selon", type: "vocab", front: "selon", reading: "selon", meaning: "according to", example: { jp: "Selon mon père, ce restaurant est très bon.", en: "According to my father, this restaurant is very good." }, accept: ["in the opinion of", "as stated by", "per"], hint: "selon moi = in my opinion — the short version of à mon avis (Unit 24)." },
        { id: "fr-u43l4-plutotque", type: "vocab", front: "plutôt que", reading: "plutotque", meaning: "rather than", example: { jp: "Je regarde un film plutôt qu'une série.", en: "I'm watching a film rather than a series." }, accept: ["instead of", "as opposed to", "sooner than"] },
        { id: "fr-u43l4-memesi", type: "vocab", front: "même si", reading: "memesi", meaning: "even if", example: { jp: "Je sors même s'il pleut.", en: "I'm going out even if it rains." }, accept: ["even though", "although", "even when"], hint: "si + il always shrinks to s'il — même s'il pleut, never \"même si il\"." },
      ],
    },
  ],
};
