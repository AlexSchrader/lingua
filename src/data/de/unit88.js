// DE Unit 88 — Argumentation und Überzeugung (slot: argument) — B2
// ═════════════════════════════════════════════════════════════════════════════
// FIRST UNIT OF GERMAN B2, and the BAND CONSTITUTION for it. Blocks 2 (u101–u113)
// and 3 (u114–u126) are told to read this header before authoring. The A1/A2
// constitution is in de/unit1.js and the B1 one in de/unit51.js; BOTH still
// govern. Everything below is what B2 ADDS, not a replacement.
//
// ─── 1. WHAT CARRIES OVER UNCHANGED (do not re-derive it) ───────────────────
//   - `front` is real orthography; `reading` is its ASCII fold, [a-z]+ only.
//     Umlauts fold themselves via NFD (überzeugen → uberzeugen). ß IS NOT A
//     DIACRITIC — write ss by hand (der Trugschluss → dertrugschluss); a stored
//     reading containing ß is rejected by the contract.
//   - NOUNS CARRY THEIR ARTICLE (der/die/das) and stay capitalized.
//   - Verbs are headworded in the INFINITIVE; reflexives with sich; separables
//     written together.
//   - `example.jp` holds the GERMAN sentence, `example.en` the English gloss.
//   - `// FREE:` one line per unit file, declaring proper names, transparent
//     cognates and PLURALS used in examples. German plurals are not foldable by
//     the checker (der Grund → Gründe), so declare every plural you USE even
//     when its singular is taught. Cognates go in WITHOUT their article.
//
// ─── 2. WHAT B2 CHANGES ABOVE B1 ────────────────────────────────────────────
//   (a) B1 examples are two clauses. B2 examples are two clauses THAT ARGUE:
//       the second qualifies, concedes to, or undercuts the first rather than
//       merely continuing it. "Der Vergleich ist schlüssig, solange man die
//       Ausnahme nicht vergisst" is B2; "Der Vergleich ist schlüssig und alle
//       stimmen zu" is just a longer B1 sentence.
//   (b) THE VOCABULARY IS META, NOT TOPICAL. B1 named things in the world; B2
//       names the moves people make in a discussion — einräumen, relativieren,
//       unterstellen, entkräften. The learner is not collecting new facts, they
//       are learning to handle a claim. Phrase the canDo as a MOVE ("concede a
//       point without losing the argument"), never as a topic.
//   (c) PRECISION OVER RANGE. At B2 the near-synonym IS the lesson: schlüssig
//       (internally consistent) vs plausibel (believable) vs stichhaltig (holds
//       up under attack) are three cards, and each hint must say what separates
//       it from its neighbours — otherwise the learner has three words for one
//       idea and no way to choose between them.
//
// ─── 3. THE DRILL RULE (u51 §3 still applies in full — short version) ───────
//   Every vocab item carries a `drill`: 3–8 whitespace tokens, NO internal
//   punctuation, containing the item's own `front`. cardRouting.findWholeWord
//   lowercases both sides, so a sentence-initial "Der Konsens …" matches the
//   front "der Konsens".
//     - A **der**-noun's drill needs a NOMINATIVE (or predicate-nominative /
//       inversion) slot: "Der Vorbehalt bleibt bestehen". die- and das-nouns are
//       string-identical in the accusative, so they are free.
//     - A VERB's drill needs the INFINITIVE ON THE PAGE: plural subject ("Neue
//       Zahlen untermauern die These") or modal + infinitive ("Wir müssen das
//       genau abwägen"). A finite singular is a SILENT miss.
//     - VARY THE VERB. B1 block 1 shipped 43% copula drills and had to rewrite
//       81 of them. Reach for kommen, bleiben, wirken, gelten, tragen, zeigen,
//       stehen, liegen before reaching for ist. (NOT stammen or reichen — both
//       are untaught in German, see §6.)
//   ⚠️ `lint:curriculum` reads `example.jp` ONLY — half of what you write is
//   invisible to it. Run `node scripts/check-drills-de.mjs 88 100` and
//   `node scripts/scope-strict-de.mjs 88 100` yourself.
//
// ─── 4. NEW TOOL — CHECK THE FRONT *AND* THE LEXEME BEFORE YOU WRITE ────────
//   `node scripts/check-front.mjs de "die These" widerlegen …`
//   Front-uniqueness is enforced on the exact string, so `die Behauptung` and
//   `behaupten` (u51) both pass the validator while teaching one lexeme twice —
//   the failure that cost Spanish B1 159 cards. This probes the LIVE corpus for
//   both, and carries a control front that fails loudly if the probe breaks.
//   It over-reports near-stems on purpose (klingen / die Klinge): a false
//   positive costs one look, a false negative costs a card. Rejected for this
//   unit before a line was written: `der Beleg` (u78), `der Widerspruch` (u79),
//   `überzeugen` (u51), `die Glaubwürdigkeit` (≈ glaubwürdig u64).
//
// ─── 5. WORD OWNERSHIP — WHAT BLOCK 1 HAS TAKEN ────────────────────────────
//   Lower slot wins. u88 takes the ARGUMENT-HANDLING set: These, Grundlage,
//   Annahme, untermauern, schlüssig, Schlussfolgerung, widerlegen, entkräften,
//   Trugschluss, unterstellen, pauschal, voreilig, abwägen, einräumen,
//   Zugeständnis, relativieren, Vorbehalt, zwingend, plausibel, nachvollziehbar,
//   stichhaltig, eindringlich, rhetorisch, Konsens. u89 (evidence) is the
//   neighbour most likely to collide — it should take the SOURCE half (belegen
//   is blocked by der Beleg u78, so reach for die Quelle, nachweisen, die
//   Stichprobe, zitieren) and leave the ARGUING half here.
//
// ─── 6. GERMAN CORPUS HOLES THIS UNIT HAD TO WRITE AROUND ──────────────────
//   Checked with scripts/check-front.mjs while authoring. These ordinary words
//   are NOT taught anywhere in de u1–u87, so an example using one teaches a word
//   the learner has never met. Every one of them was rewritten out of this unit:
//     fehlen · stammen · reichen · klingen · beide · offen · anders · langsam
//     das Beispiel · der Fall · der Satz · der Punkt · die Frage · die Erklärung
//     der Vorwurf · die Reaktion · das Medikament · der Schluss · das Beispiel
//     einzig · geschickt · erstaunlich · das Team (cognate, declared below)
//   This is the same hole the B1 seat filed (BUILD-CHECKLIST: "German has ~25
//   ordinary A1/A2 words it has never taught") and it is still open. DO NOT
//   quietly use them — either write around them, or declare them the way u51 §5
//   declared so/schon/viele. A coverage unit owes them a home; u111–u126 is it.
//
// FREE: Zahlen, Gründe, Argument, Argumente, Studie, Studien, Experten, Kritiker, Nachbarn, Zeitungen, Absichten, Details, Quellen, Bilder, Seiten, Vorteile, Kosten, Team, Rhetorik, Internet, modern
export const DE_UNIT88 = {
  id: "de-u88",
  lang: "de",
  title: "Argumentation und Überzeugung",
  order: 88,
  stage: "b2",
  lessons: [
    {
      id: "de-u88l1",
      unit: 88,
      lesson: 1,
      title: "Die These und ihre Grundlage",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Put a claim on the table and show what it rests on — name the thesis, the basis under it, the assumption behind it, and the conclusion you draw from it.",
      items: [
        { id: "de-u88l1-diethese", type: "vocab", front: "die These", reading: "diethese", meaning: "the thesis", example: { jp: "Seine These wirkt zuerst sehr modern, aber sie ist über hundert Jahre alt.", en: "His thesis sounds very modern at first, but it is over a hundred years old." }, drill: { jp: "Die These trägt den ganzen Text", en: "The thesis carries the whole text" }, accept: ["thesis", "the thesis", "claim", "the claim", "proposition", "the proposition"], hint: "The claim a whole argument is built to defend — bigger than eine Meinung (u29), because a These is put forward to be defended with reasons. eine These vertreten = to argue a thesis." },
        { id: "de-u88l1-diegrundlage", type: "vocab", front: "die Grundlage", reading: "diegrundlage", meaning: "the basis", example: { jp: "Ohne eine klare Grundlage bleibt das Gespräch schwer, weil niemand die Regeln versteht.", en: "Without a clear basis the conversation stays hard, because nobody understands the rules." }, drill: { jp: "Die Grundlage zeigt sich deutlich", en: "The basis shows itself clearly" }, accept: ["basis", "the basis", "foundation", "the foundation", "base", "groundwork"], hint: "der Grund (u29, reason / ground) + die Lage (position): what a claim is laid on. auf der Grundlage von = on the basis of." },
        { id: "de-u88l1-dieannahme", type: "vocab", front: "die Annahme", reading: "dieannahme", meaning: "the assumption", example: { jp: "Die ganze Studie steht auf einer Annahme, die niemand richtig gelesen hat.", en: "The whole study stands on an assumption that nobody has read properly." }, drill: { jp: "Die Annahme wirkt heute sehr alt", en: "The assumption seems very old today" }, accept: ["assumption", "the assumption", "supposition", "premise", "the premise"], hint: "From annehmen (to accept, to assume): what you take as given before you start. In der Annahme, dass… = on the assumption that…" },
        { id: "de-u88l1-untermauern", type: "vocab", front: "untermauern", reading: "untermauern", meaning: "to underpin", example: { jp: "Die Forschung untermauert seine These, obwohl die Zahlen aus einer kleinen Stadt kommen.", en: "The research underpins his thesis, although the figures come from one small city." }, drill: { jp: "Neue Zahlen untermauern die These", en: "New figures underpin the thesis" }, accept: ["to underpin", "underpin", "to back up", "back up", "to support", "support", "to substantiate"], hint: "unter + die Mauer (wall): to build a wall underneath something. Physical in origin, almost always figurative now — you underpin a claim with evidence." },
        { id: "de-u88l1-schlussig", type: "vocab", front: "schlüssig", reading: "schlussig", meaning: "coherent", example: { jp: "Der Vergleich ist schlüssig, solange man den einen großen Unterschied nicht vergisst.", en: "The comparison is coherent, as long as you don't forget the one big difference." }, drill: { jp: "Der Vergleich wirkt schlüssig genug", en: "The comparison seems coherent enough" }, accept: ["coherent", "conclusive", "consistent", "cogent", "sound", "logical"], hint: "From der Schluss (conclusion): the parts follow from one another. Contrast plausibel (l4) — schlüssig is about internal logic, plausibel about whether you believe it." },
        { id: "de-u88l1-dieschlussfolgerung", type: "vocab", front: "die Schlussfolgerung", reading: "dieschlussfolgerung", meaning: "the conclusion", example: { jp: "Die Schlussfolgerung geht viel weiter als die Zahlen erlauben, und genau das kritisieren die Experten.", en: "The conclusion goes much further than the figures allow, and that is exactly what the experts criticize." }, drill: { jp: "Die Schlussfolgerung kommt eindeutig zu früh", en: "The conclusion clearly comes too early" }, accept: ["conclusion", "the conclusion", "inference", "the inference", "deduction"], hint: "der Schluss (end, conclusion) + folgern (to infer): the step you take at the end. eine Schlussfolgerung ziehen = to draw a conclusion. Reading folds ß to ss." },
      ],
    },
    {
      id: "de-u88l2",
      unit: 88,
      lesson: 2,
      title: "Der Einwand und die Widerlegung",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Take an argument apart without being rude about it — refute it, weaken it, name the false step, and say when a judgement is too sweeping or too quick.",
      items: [
        { id: "de-u88l2-widerlegen", type: "vocab", front: "widerlegen", reading: "widerlegen", meaning: "to refute", example: { jp: "Diese Zahlen widerlegen die Regel nicht, auch wenn sie in allen Zeitungen stehen.", en: "These figures do not refute the rule, even if they are in all the newspapers." }, drill: { jp: "Neue Studien widerlegen diese Annahme", en: "New studies refute this assumption" }, accept: ["to refute", "refute", "to disprove", "disprove", "to rebut", "rebut"], hint: "wider (against — not wieder, again) + legen: to lay something against a claim. Stronger than bezweifeln: widerlegen means you have shown it to be false." },
        { id: "de-u88l2-entkraften", type: "vocab", front: "entkräften", reading: "entkraften", meaning: "to weaken", example: { jp: "Der Bericht entkräftet die Kritik teilweise, aber das größte Problem bleibt.", en: "The report partly weakens the criticism, but the biggest problem remains." }, drill: { jp: "Diese Zahlen entkräften die Kritik", en: "These figures weaken the criticism" }, accept: ["to weaken", "weaken", "to invalidate", "invalidate", "to undermine", "undermine", "to refute"], hint: "ent- (away) + die Kraft (force): to take the force out of something. Weaker than widerlegen — you have blunted the objection, not killed it." },
        { id: "de-u88l2-dertrugschluss", type: "vocab", front: "der Trugschluss", reading: "dertrugschluss", meaning: "the fallacy", example: { jp: "Es ist ein Trugschluss zu glauben, dass mehr Geld die Probleme von selbst kleiner macht.", en: "It is a fallacy to believe that more money makes the problems smaller by itself." }, drill: { jp: "Der Trugschluss steckt in der Rede", en: "The fallacy is in the speech" }, accept: ["fallacy", "the fallacy", "false conclusion", "logical fallacy", "mistaken conclusion"], hint: "der Trug (deception) + der Schluss (conclusion): a conclusion that deceives you. Note the ß → ss fold in the reading: dertrugschluss." },
        { id: "de-u88l2-unterstellen", type: "vocab", front: "unterstellen", reading: "unterstellen", meaning: "to impute", example: { jp: "Sie unterstellen mir eine Absicht, die ich nie hatte, und darauf steht ihre ganze Kritik.", en: "They impute an intention to me that I never had, and their whole criticism stands on that." }, drill: { jp: "Kritiker unterstellen der Firma schlechte Absichten", en: "Critics impute bad intentions to the company" }, accept: ["to impute", "impute", "to insinuate", "insinuate", "to allege", "allege", "to accuse someone of"], hint: "unter + stellen: to put something under someone — an intention they never stated. Dative person, accusative thing: jemandem etwas unterstellen." },
        { id: "de-u88l2-pauschal", type: "vocab", front: "pauschal", reading: "pauschal", meaning: "sweeping", example: { jp: "Solche pauschalen Urteile helfen niemandem, weil sie am Ende nichts erklären.", en: "Such sweeping judgements help nobody, because in the end they explain nothing." }, drill: { jp: "Diese Kritik bleibt leider sehr pauschal", en: "This criticism unfortunately stays very sweeping" }, accept: ["sweeping", "blanket", "across the board", "generalized", "generalised", "indiscriminate", "flat-rate"], hint: "Two lives: in money it is flat-rate (der Pauschalpreis), in an argument it is the insult — one judgement thrown over everything without looking at the cases." },
        { id: "de-u88l2-voreilig", type: "vocab", front: "voreilig", reading: "voreilig", meaning: "premature", example: { jp: "Der Chef entscheidet oft voreilig, und danach muss das ganze Team die Folgen tragen.", en: "The boss often decides prematurely, and afterwards the whole team has to bear the consequences." }, drill: { jp: "Dieses Urteil wirkt etwas voreilig", en: "This judgement seems somewhat premature" }, accept: ["premature", "hasty", "rash", "over-hasty", "precipitate"], hint: "vor (ahead) + eilen (to hurry): running ahead of what you actually know. voreilige Schlüsse ziehen = to jump to conclusions." },
      ],
    },
    {
      id: "de-u88l3",
      unit: 88,
      lesson: 3,
      title: "Abwägen und einräumen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Concede a point without losing the argument — weigh two sides against each other, admit what is true, attach a reservation, and say when something really is unavoidable.",
      items: [
        { id: "de-u88l3-abwagen", type: "vocab", front: "abwägen", reading: "abwagen", meaning: "to weigh up", example: { jp: "Man muss die Vorteile gegen die Kosten abwägen, bevor man sich für einen Weg entscheidet.", en: "You have to weigh the advantages against the costs before you decide on a path." }, drill: { jp: "Wir müssen die Folgen genau abwägen", en: "We have to weigh the consequences carefully" }, accept: ["to weigh up", "weigh up", "to weigh", "weigh", "to consider carefully", "to balance"], hint: "ab + wägen (the old verb for weighing): two things on the scales. etwas gegen etwas abwägen = to weigh one thing against another." },
        { id: "de-u88l3-einraumen", type: "vocab", front: "einräumen", reading: "einraumen", meaning: "to concede", example: { jp: "Die Firma räumt den Fehler endlich ein, nachdem alle Zeitungen darüber geschrieben haben.", en: "The company finally concedes the mistake, after all the newspapers have written about it." }, drill: { jp: "Wir müssen den Fehler ehrlich einräumen", en: "We have to concede the mistake honestly" }, accept: ["to concede", "concede", "to admit", "admit", "to grant", "grant", "to acknowledge"], hint: "Separable: räumt … ein. Literally to clear a space — you make room for the other side's point. Also used for granting a right or a discount." },
        { id: "de-u88l3-daszugestandnis", type: "vocab", front: "das Zugeständnis", reading: "daszugestandnis", meaning: "the concession", example: { jp: "Das Zugeständnis kam spät, aber es hat das Gespräch deutlich ruhiger gemacht.", en: "The concession came late, but it made the conversation noticeably calmer." }, drill: { jp: "Das Zugeständnis kommt deutlich zu spät", en: "The concession comes clearly too late" }, accept: ["concession", "the concession", "admission", "the admission"], hint: "From zugestehen (to grant): what you give up so the talk can continue. ein Zugeständnis machen = to make a concession." },
        { id: "de-u88l3-relativieren", type: "vocab", front: "relativieren", reading: "relativieren", meaning: "to qualify", example: { jp: "Er relativiert seine Kritik sofort, weil er den Streit vermeiden will.", en: "He qualifies his criticism immediately, because he wants to avoid the argument." }, drill: { jp: "Wir müssen diese Zahlen etwas relativieren", en: "We have to qualify these figures somewhat" }, accept: ["to qualify", "qualify", "to put into perspective", "to relativize", "to relativise", "to temper", "to play down"], hint: "Not 'to relate'. To set something beside its context so it stops sounding absolute — the honest move, and also the politician's escape hatch." },
        { id: "de-u88l3-dervorbehalt", type: "vocab", front: "der Vorbehalt", reading: "dervorbehalt", meaning: "the reservation", example: { jp: "Der Vorbehalt steht ganz am Ende, wo ihn fast niemand liest.", en: "The reservation is right at the end, where almost nobody reads it." }, drill: { jp: "Der Vorbehalt bleibt trotzdem bestehen", en: "The reservation remains nonetheless" }, accept: ["reservation", "the reservation", "reservations", "proviso", "caveat", "qualification"], hint: "vor + behalten: something you hold back. unter dem Vorbehalt, dass… = subject to the condition that… Not a booking — that is die Reservierung." },
        { id: "de-u88l3-zwingend", type: "vocab", front: "zwingend", reading: "zwingend", meaning: "compelling", example: { jp: "Das Argument ist nicht zwingend, aber es ist stark genug, um die Mehrheit zu überzeugen.", en: "The argument is not compelling, but it is strong enough to convince the majority." }, drill: { jp: "Diese Regel gilt nicht zwingend", en: "This rule does not apply necessarily" }, accept: ["compelling", "cogent", "conclusive", "necessarily", "mandatory", "imperative", "inescapable"], hint: "The present participle of zwingen (to force): it forces the conclusion on you. As an adverb it means 'necessarily' — nicht zwingend = not necessarily." },
      ],
    },
    {
      id: "de-u88l4",
      unit: 88,
      lesson: 4,
      title: "Was überzeugt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Judge how strong an argument really is — tell believable from watertight, say what you can follow, name the rhetorical move, and recognize when a room has actually reached agreement.",
      items: [
        { id: "de-u88l4-plausibel", type: "vocab", front: "plausibel", reading: "plausibel", meaning: "plausible", example: { jp: "Seine Geschichte wirkt plausibel, aber sie passt nicht zu dem, was die Nachbarn gesehen haben.", en: "His story seems plausible, but it doesn't fit what the neighbours saw." }, drill: { jp: "Der Grund wirkt sehr plausibel", en: "The reason seems very plausible" }, accept: ["plausible", "believable", "credible", "convincing"], hint: "About belief, not proof: a plausible story is one you would accept without checking. Contrast schlüssig (l1, internally consistent) and stichhaltig (below, survives attack)." },
        { id: "de-u88l4-nachvollziehbar", type: "vocab", front: "nachvollziehbar", reading: "nachvollziehbar", meaning: "understandable", example: { jp: "Ihre Wahl ist nachvollziehbar, auch wenn ich an ihrer Stelle etwas Neues versucht hätte.", en: "Her choice is understandable, even though I would have tried something new in her place." }, drill: { jp: "Dieses Urteil bleibt für uns nachvollziehbar", en: "This judgement remains understandable to us" }, accept: ["understandable", "comprehensible", "relatable", "reasonable", "easy to follow", "you can see why"], hint: "nach + vollziehen: you can walk the steps after someone. The generous German word — it says 'I can see how you got there', not 'I agree with you'." },
        { id: "de-u88l4-stichhaltig", type: "vocab", front: "stichhaltig", reading: "stichhaltig", meaning: "valid", example: { jp: "Keines seiner Argumente ist stichhaltig, sobald man die Quellen selbst liest.", en: "None of his arguments is valid, once you read the sources yourself." }, drill: { jp: "Diese Gründe wirken nicht stichhaltig", en: "These reasons are not valid" }, accept: ["valid", "sound", "watertight", "tenable", "solid", "compelling"], hint: "der Stich (a thrust with a blade) + halten: it holds when someone stabs at it. The strongest of the three — the argument survives being attacked." },
        { id: "de-u88l4-eindringlich", type: "vocab", front: "eindringlich", reading: "eindringlich", meaning: "urgent", example: { jp: "Der Arzt warnt eindringlich vor den Folgen, doch im Internet steht immer noch das Gegenteil.", en: "The doctor warns urgently about the consequences, yet the opposite is still online." }, drill: { jp: "Diese Bilder wirken sehr eindringlich", en: "These images are very powerful" }, accept: ["urgent", "insistent", "emphatic", "powerful", "forceful", "haunting", "pressing"], hint: "From eindringen (to penetrate): it gets inside you. Used of warnings and appeals, and of art that stays with you — eine eindringliche Bitte, ein eindringliches Bild." },
        { id: "de-u88l4-rhetorisch", type: "vocab", front: "rhetorisch", reading: "rhetorisch", meaning: "rhetorical", example: { jp: "Das war eine rhetorische Frage, und trotzdem hat jemand im Publikum sofort geantwortet.", en: "That was a rhetorical question, and somebody in the audience answered it immediately anyway." }, drill: { jp: "Seine Rede wirkt rhetorisch sehr stark", en: "His speech comes across as rhetorically very strong" }, accept: ["rhetorical", "rhetorically", "oratorical"], hint: "The adjective to die Rhetorik. Two uses: eine rhetorische Frage (no answer wanted) and rhetorisch geschickt (skilfully argued) — the second is neutral praise, not an accusation." },
        { id: "de-u88l4-derkonsens", type: "vocab", front: "der Konsens", reading: "derkonsens", meaning: "the consensus", example: { jp: "Ein echter Konsens wächst über Jahre, während ein schneller Kompromiss den Streit oft verschiebt.", en: "A real consensus grows over years, whereas a quick compromise often just postpones the argument." }, drill: { jp: "Der Konsens wirkt heute sehr stark", en: "The consensus seems very strong today" }, accept: ["consensus", "the consensus", "agreement", "common ground"], hint: "Everyone can live with it — broader than der Kompromiss (u60), where each side gives something up. im Konsens entscheiden = to decide by consensus." },
      ],
    },
  ],
};
