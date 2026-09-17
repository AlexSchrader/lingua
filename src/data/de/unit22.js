// DE Unit 22 — Feelings and states (slot: feelings) — A2
// Conventions and the FREE list live in de/unit1.js — read that header first.
//
// A1 gave the learner four feeling words and no way to talk about them:
// glücklich, traurig, ruhig and nett at u10, all bare adjectives sitting after
// ist. Those four are TAUGHT AND THEREFORE BLOCKED here — this unit is the layer
// above them, not a second pass over them.
//
// The real work of the unit is that German makes feeling REFLEXIVE where English
// makes it intransitive: sich freuen, sich ärgern, sich beruhigen, sich
// entspannen. u21 opened that pattern on the body (sich waschen); here it moves
// to the mind, which is where a learner actually needs it.
//
// DRILLING A REFLEXIVE OR AN INFINITIVE FRONT. A German main clause conjugates
// the verb, so an infinitive front never survives one — "ich ärgere mich" does
// not contain "sich ärgern". The front stands whole only after a modal, and only
// with a THIRD-PERSON subject, because that is the person whose pronoun is sich.
// Every verb drill below is therefore modal-framed, and the subjects are varied
// on purpose so that four lessons do not read as one sentence repeated.
//
// Two same-lexeme pairs were screened out rather than authored: die Wut beside
// wütend (one lexeme inside one unit), and sich langweilen beside u10's
// langweilig.
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT22 = {
  id: "de-u22",
  lang: "de",
  title: "Gefühle und Stimmungen",
  order: 22,
  stage: "a2",
  lessons: [
    {
      id: "de-u22l1",
      unit: 22,
      lesson: 1,
      title: "Wie ich mich fühle",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name a feeling, say you feel it, and describe yourself as satisfied, excited, proud or nervous.",
      items: [
        { id: "de-u22l1-dasgefuhl", type: "vocab", front: "das Gefühl", reading: "dasgefuhl", meaning: "the feeling", example: { jp: "Ich habe heute ein gutes Gefühl.", en: "I have a good feeling today." }, drill: { jp: "Das Gefühl ist heute sehr gut", en: "The feeling is very good today" }, accept: ["the feeling", "feeling", "the sense", "sense"], hint: "Neuter, plural die Gefühle. Ein gutes Gefühl haben is to have a good feeling about something — with haben, exactly as English has it." },
        { id: "de-u22l1-fuhlen", type: "vocab", front: "fühlen", reading: "fuhlen", meaning: "to feel", example: { jp: "Wie fühlst du dich heute?", en: "How do you feel today?" }, drill: { jp: "Wir können den Schmerz fühlen", en: "We can feel the pain" }, accept: ["to feel", "feel", "to sense"], hint: "With sich it describes your own state — ich fühle mich gut. Without sich it takes an object: den Schmerz fühlen. English uses one verb for both jobs." },
        { id: "de-u22l1-zufrieden", type: "vocab", front: "zufrieden", reading: "zufrieden", meaning: "satisfied", example: { jp: "Der Chef ist mit der Arbeit zufrieden.", en: "The boss is satisfied with the work." }, drill: { jp: "Die Eltern sind sehr zufrieden", en: "The parents are very satisfied" }, accept: ["satisfied", "content", "pleased", "happy with it"], hint: "Takes mit + dative: zufrieden mit dem Preis. It contains Frieden, peace — quietly, it says at peace with something." },
        { id: "de-u22l1-aufgeregt", type: "vocab", front: "aufgeregt", reading: "aufgeregt", meaning: "excited", example: { jp: "Die Kinder sind vor der Reise aufgeregt.", en: "The children are excited before the trip." }, drill: { jp: "Die Eltern sind heute sehr aufgeregt", en: "The parents are very excited today" }, accept: ["excited", "worked up", "keyed up", "agitated"], hint: "Keyed up, and it can be good or bad — before a holiday or before an exam. For the warm English excited a German says, oddly, ich freue mich." },
        { id: "de-u22l1-stolz", type: "vocab", front: "stolz", reading: "stolz", meaning: "proud", example: { jp: "Die Eltern sind sehr stolz auf ihn.", en: "The parents are very proud of him." }, drill: { jp: "Der Lehrer ist stolz auf die Klasse", en: "The teacher is proud of the class" }, accept: ["proud"], hint: "Proud OF is stolz auf + accusative, which is why it takes ihn and not ihm — stolz auf dich. The same word is the noun der Stolz." },
        { id: "de-u22l1-nervos", type: "vocab", front: "nervös", reading: "nervos", meaning: "nervous", example: { jp: "Vor der Prüfung bin ich immer nervös.", en: "Before the exam I am always nervous." }, drill: { jp: "Der Schüler ist heute sehr nervös", en: "The pupil is very nervous today" }, accept: ["nervous", "on edge", "jittery"], hint: "Stress the ö: ner-VÖS. Die Nerven is the plural noun, and jemanden nerven is to get on someone's nerves." },
      ],
    },
    {
      id: "de-u22l2",
      unit: 22,
      lesson: 2,
      title: "Ärger und Enttäuschung",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say that something has annoyed or disappointed you, name a worry, and admit you are worn out.",
      items: [
        { id: "de-u22l2-wutend", type: "vocab", front: "wütend", reading: "wutend", meaning: "furious", example: { jp: "Der Chef ist heute sehr wütend.", en: "The boss is very angry today." }, drill: { jp: "Die Frau ist sehr wütend", en: "The woman is very furious" }, accept: ["furious", "angry", "mad", "livid"], hint: "Stronger than merely annoyed — this is real anger. Wütend AUF a person, wütend ÜBER a thing. The noun is die Wut." },
        { id: "de-u22l2-sichargern", type: "vocab", front: "sich ärgern", reading: "sichargern", meaning: "to get annoyed", example: { jp: "Ich ärgere mich über den Preis.", en: "I get annoyed about the price." }, drill: { jp: "Der Kunde kann sich ärgern", en: "The customer may well get annoyed" }, accept: ["to get annoyed", "to be annoyed", "get annoyed", "to get cross"], hint: "Reflexive, and whatever annoys you takes über + accusative. Drop the sich and the meaning flips: ärgern alone is to annoy somebody else." },
        { id: "de-u22l2-enttauscht", type: "vocab", front: "enttäuscht", reading: "enttauscht", meaning: "disappointed", example: { jp: "Die Schüler sind vom Film enttäuscht.", en: "The students are disappointed by the film." }, drill: { jp: "Die Eltern sind von der Reise enttäuscht", en: "The parents are disappointed by the trip" }, accept: ["disappointed", "let down"], hint: "A past participle worn as an adjective, just like English disappointed. Von + dative names who or what did it; die Enttäuschung is the disappointment itself." },
        { id: "de-u22l2-diesorge", type: "vocab", front: "die Sorge", reading: "diesorge", meaning: "the worry", example: { jp: "Die Sorge um das Kind ist groß.", en: "The worry about the child is great." }, drill: { jp: "Die Sorge ist heute sehr groß", en: "The worry is very great today" }, accept: ["the worry", "worry", "the concern", "concern"], hint: "Keine Sorge! is the everyday no worries. To worry is sich Sorgen machen — plural there, singular here, and the shift catches people out." },
        { id: "de-u22l2-einsam", type: "vocab", front: "einsam", reading: "einsam", meaning: "lonely", example: { jp: "Ohne Freunde ist der Abend einsam.", en: "Without friends the evening is lonely." }, drill: { jp: "Der alte Mann ist sehr einsam", en: "The old man is very lonely" }, accept: ["lonely", "lonesome", "solitary"], hint: "Built from ein, one, plus -sam, an ending that makes adjectives. Die Einsamkeit is loneliness — and, said of mountains, solitude." },
        { id: "de-u22l2-erschopft", type: "vocab", front: "erschöpft", reading: "erschopft", meaning: "exhausted", example: { jp: "Nach der Arbeit bin ich erschöpft.", en: "After work I am exhausted." }, drill: { jp: "Die Kinder sind nach der Schule erschöpft", en: "The children are exhausted after school" }, accept: ["exhausted", "worn out", "shattered", "drained"], hint: "Much stronger than u1's müde. Müde wants to sleep; erschöpft has nothing left. From schöpfen, to scoop out." },
        { id: "de-u22l2-passieren", type: "vocab", front: "passieren", reading: "passieren", meaning: "to happen", example: { jp: "Was kann hier passieren?", en: "What can happen here?" }, drill: { jp: "Das kann wirklich nicht passieren", en: "That really cannot happen" }, accept: ["to happen", "happen", "to occur"], hint: "Impersonal — what stands in front of it is almost always es or was: Was ist passiert? Its Perfekt takes sein, not haben: es ist passiert." },
      ],
    },
    {
      id: "de-u22l3",
      unit: 22,
      lesson: 3,
      title: "Freude und Laune",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you are pleased about, describe the mood someone is in, and call a situation embarrassing.",
      items: [
        { id: "de-u22l3-diefreude", type: "vocab", front: "die Freude", reading: "diefreude", meaning: "the joy", example: { jp: "Die Freude über die Reise ist groß.", en: "The joy about the trip is great." }, drill: { jp: "Die Freude ist heute sehr groß", en: "The joy is very great today" }, accept: ["the joy", "joy", "the delight", "pleasure"], hint: "Freude ÜBER something that has happened, Freude AN something you keep enjoying. Viel Freude! wishes someone a good time." },
        { id: "de-u22l3-sichfreuen", type: "vocab", front: "sich freuen", reading: "sichfreuen", meaning: "to be pleased", example: { jp: "Ich freue mich sehr über die Reise.", en: "I am very pleased about the trip." }, drill: { jp: "Der Lehrer darf sich freuen", en: "The teacher has reason to be pleased" }, accept: ["to be pleased", "to be glad", "be pleased", "to be happy"], hint: "The preposition carries the tense: sich freuen ÜBER is about something now, sich freuen AUF is looking forward to something later." },
        { id: "de-u22l3-dielaune", type: "vocab", front: "die Laune", reading: "dielaune", meaning: "the mood", example: { jp: "Der Chef hat heute gute Laune.", en: "The boss is in a good mood today." }, drill: { jp: "Die Laune ist heute sehr gut", en: "The mood is very good today" }, accept: ["the mood", "mood", "the temper", "spirits"], hint: "Germans say gute Laune HABEN, not sein — you have the mood rather than being in it. Launisch means moody." },
        { id: "de-u22l3-uberrascht", type: "vocab", front: "überrascht", reading: "uberrascht", meaning: "surprised", example: { jp: "Wir sind von der Antwort überrascht.", en: "We are surprised by the answer." }, drill: { jp: "Die Eltern sind heute sehr überrascht", en: "The parents are very surprised today" }, accept: ["surprised", "taken aback", "startled"], hint: "From überraschen, which hides rasch, quick — a surprise is what reaches you fast. Die Überraschung is the surprise itself." },
        { id: "de-u22l3-peinlich", type: "vocab", front: "peinlich", reading: "peinlich", meaning: "embarrassing", example: { jp: "Die Frage ist mir sehr peinlich.", en: "The question is very embarrassing to me." }, drill: { jp: "Das ist mir sehr peinlich", en: "That is very embarrassing to me" }, accept: ["embarrassing", "awkward", "excruciating"], hint: "The person goes in the dative: es ist MIR peinlich. It describes the situation and never the person — you cannot be peinlich yourself." },
        { id: "de-u22l3-sichentspannen", type: "vocab", front: "sich entspannen", reading: "sichentspannen", meaning: "to relax", example: { jp: "Am Sonntag entspanne ich mich zu Hause.", en: "On Sunday I relax at home." }, drill: { jp: "Die Eltern wollen sich entspannen", en: "The parents want to relax" }, accept: ["to relax", "to unwind", "relax"], hint: "Reflexive — you relax yourself. From spannen, to stretch tight, with ent- undoing it. Entspannt describes a calm person or a calm evening." },
      ],
    },
    {
      id: "de-u22l4",
      unit: 22,
      lesson: 4,
      title: "Angst, Mut und Geduld",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about fear and courage, ask someone for patience, and soften bad news with leider.",
      items: [
        { id: "de-u22l4-dieangst", type: "vocab", front: "die Angst", reading: "dieangst", meaning: "the fear", example: { jp: "Die Angst vor der Prüfung ist groß.", en: "The fear of the exam is great." }, drill: { jp: "Die Angst vor dem Arzt ist groß", en: "The fear of the doctor is great" }, accept: ["the fear", "fear", "the anxiety", "anxiety"], hint: "Angst haben VOR + dative is to be afraid of something. And it is ich habe Angst — never ich bin Angst." },
        { id: "de-u22l4-sichberuhigen", type: "vocab", front: "sich beruhigen", reading: "sichberuhigen", meaning: "to calm down", example: { jp: "Das Kind beruhigt sich nach dem Essen.", en: "The child calms down after the meal." }, drill: { jp: "Das Kind muss sich beruhigen", en: "The child has to calm down" }, accept: ["to calm down", "to settle down", "calm down"], hint: "Built straight on u10's ruhig: be- + ruhig + -en turns the adjective into a verb. Beruhig dich! is the everyday calm down." },
        { id: "de-u22l4-diegeduld", type: "vocab", front: "die Geduld", reading: "diegeduld", meaning: "the patience", example: { jp: "Der Lehrer hat viel Geduld mit der Klasse.", en: "The teacher has a lot of patience with the class." }, drill: { jp: "Die Geduld von den Eltern ist groß", en: "The parents have great patience" }, accept: ["the patience", "patience"], hint: "Geduld haben MIT + dative. Geduldig is the adjective, and Geduld! on its own means hold on a moment." },
        { id: "de-u22l4-mutig", type: "vocab", front: "mutig", reading: "mutig", meaning: "brave", example: { jp: "Das Kind ist heute sehr mutig.", en: "The child is very brave today." }, drill: { jp: "Der Arzt ist mutig und ruhig", en: "The doctor is brave and calm" }, accept: ["brave", "courageous", "bold"], hint: "Der Mut is the courage itself, and -ig makes it an adjective — the same ending you already have in ruhig and lustig." },
        { id: "de-u22l4-schuchtern", type: "vocab", front: "schüchtern", reading: "schuchtern", meaning: "shy", example: { jp: "Der Schüler ist in der Klasse schüchtern.", en: "The student is shy in class." }, drill: { jp: "Das Kind ist sehr schüchtern", en: "The child is very shy" }, accept: ["shy", "timid", "bashful"], hint: "The -ern ending here belongs to an adjective, not a verb, however much it looks like one. Die Schüchternheit is shyness." },
        { id: "de-u22l4-leider", type: "vocab", front: "leider", reading: "leider", meaning: "unfortunately", example: { jp: "Leider kann ich heute nicht kommen.", en: "Unfortunately I cannot come today." }, drill: { jp: "Leider haben wir keine Zeit", en: "Unfortunately we have no time" }, accept: ["unfortunately", "sadly", "I am afraid", "regrettably"], hint: "The same leid you have been saying since u2 in es tut mir leid. Put it first and the verb still comes second — leider KANN ich nicht." },
      ],
    },
  ],
};
