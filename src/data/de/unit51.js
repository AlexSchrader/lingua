// DE Unit 51 — Die eigene Meinung (slot: opinion) — B1
// ═════════════════════════════════════════════════════════════════════════════
// FIRST UNIT OF GERMAN B1, and the BAND CONSTITUTION for it. Blocks 2 (u63–u75)
// and 3 (u76–u87) are told to read this header before authoring. The A1/A2
// language constitution is in de/unit1.js and still governs — everything below
// is what B1 ADDS to it, not a replacement.
//
// ─── 1. WHAT CARRIES OVER FROM unit1.js UNCHANGED ───────────────────────────
//   - `front` is real orthography; `reading` is its ASCII fold, [a-z]+ only.
//     normalizeReading lowercases, drops spaces, and strips combining diacritics
//     via NFD, so umlauts fold on their own (überzeugen → uberzeugen, äußerst →
//     ausserst). ß IS NOT A DIACRITIC — write its reading by hand with ss
//     (die Maßnahme → diemassnahme). Verified against the contract; a stored
//     reading containing ß is rejected.
//   - NOUNS ARE TAUGHT WITH THEIR ARTICLE (der/die/das) and capitalized.
//   - Verbs are headworded in the INFINITIVE, reflexives with sich
//     (sich äußern, sich einigen), separables written together (teilnehmen).
//   - `example.jp` holds the GERMAN sentence; `example.en` the English gloss.
//   - `// FREE:` one line per unit file, declaring proper names, transparent
//     cognates and PLURALS used in that unit's examples. German plurals are not
//     foldable by the checker (Grund → Gründe), so every plural you USE must be
//     declared even when its singular is taught. Cognates go in WITHOUT their
//     article — the checker compares whole tokens.
//
// ─── 2. WHAT B1 CHANGES (blueprint §1 "B1 and B2 — what changes above A2") ───
//   (a) EXAMPLES ARE TWO CLAUSES, joined by a connective. At A1 the example was
//       decoration around a word; at B1 the sentence IS the lesson. Every
//       `example` in u51–u62 is two clauses or a main clause with a subordinate
//       one. `drill` stays short by contract (3–8 tokens) — see 3 below.
//   (b) THE CASE SYSTEM IS A REFLEX, NOT A TABLE. u12–u14 taught the four cases
//       as forms; B1 examples USE them without announcing them — dative after
//       widersprechen and helfen, genitive after trotz and wegen (u52 l1, u62
//       l4 teach exactly those two prepositions), adjective endings in all four
//       cases, relative clauses with der/die/das and dem/den. Do not author a
//       "here is the dative table" lesson: u69–u71 own explicit B1 grammar.
//   (c) TOPICS ARE ABSTRACT. u51–u62 are opinion, cause, comparison, hedging,
//       society, work, emotion, abstraction, time, problems, rules, plans. The
//       canDo shifts from "order a meal" to "disagree without giving offence".
//
// ─── 3. THE DRILL RULE — THE ONE THAT BITES, AND HOW GERMAN GETS ROUND IT ────
//   Every vocab item carries a `drill`: a SECOND short sentence, 3–8 whitespace
//   tokens, NO sentence-internal punctuation, containing the item's own `front`
//   VERBATIM. cardRouting.findWholeWord matches the whole front INCLUDING its
//   article, so:
//     - A NOUN'S DRILL IS NOMINATIVE. "der Standpunkt" must appear as
//       "Der Standpunkt …" — "den Standpunkt" does not match and the cloze and
//       sentence:build cards silently vanish. Put the case variety in `example`,
//       where nothing has to match.
//     - A VERB'S DRILL NEEDS THE INFINITIVE ON THE PAGE. Two natural ways, and
//       between them they cover every German verb:
//         · PLURAL SUBJECT — for -en verbs the wir/sie form IS the infinitive:
//           "Die Zeitungen behaupten das", "Wir betonen das Wort".
//         · MODAL + INFINITIVE — the only option for separables and reflexives,
//           because the prefix or the pronoun otherwise splits off:
//           "Es kann davon abhängen", "Hier darf man sich äußern".
//       A finite singular ("Er behauptet das") does NOT contain "behaupten" and
//       is a silent miss. Check every verb drill by eye; the lint warns but the
//       warning is easy to scroll past.
//   Measured on this block: 288/288 items carry a drill, all inside 3–8 tokens,
//   all containing their front.
//   ⚠️ AND VARY THE VERB WHILE YOU WRITE THEM. The nominative constraint pulls every
//   noun drill towards one frame, and block 1 did not notice until it counted: its
//   first pass was 123/288 (43%) “Der/Die/Das X ist/war sehr ADJ” and 110/288 (38%)
//   containing “sehr”, which is 123 near-identical practice cards. 81 were rewritten
//   into subject-verb frames — kommen, liegen, stehen, kosten, dauern, bleiben,
//   wachsen, steigen, zeigen, helfen, gelten — taking it to 15% and 13%. Cheaper to
//   vary as you author than to sweep afterwards.
//
// ─── 4. WORD OWNERSHIP — WHAT BLOCK 1 HAS TAKEN, SO YOU DON'T RE-TEACH IT ────
//   Lower slot wins. u51–u62 teach 288 fronts, all checked against the frozen
//   base (src/data/de/TAUGHT-WORDS.md, 1221 words, snapshot 2026-09-15): ZERO
//   collisions, zero self-duplicates. The families most likely to tempt a later
//   block are already spent here:
//     · discourse/hedging adverbs — folglich, daher, dadurch, zumindest,
//       jedenfalls, sowieso, lediglich, bloß, eigentlich, überhaupt, teilweise,
//       völlig, knapp, mindestens, höchstens, ziemlich, äußerst, erheblich,
//       durchaus, keineswegs, ebenfalls, selbstverständlich, notfalls, seitdem
//     · argument verbs — behaupten, betonen, bestreiten, widersprechen,
//       übertreiben, überzeugen, zugeben, sich äußern, unterbrechen, schweigen
//     · cause/effect — verursachen, entstehen, auslösen, ermöglichen, führen,
//       beeinflussen, abhängen, betreffen, wegen (+ genitive)
//     · quantity/trend — zunehmen, abnehmen, steigen, sinken, der Anteil,
//       durchschnittlich, gering, überwiegend, deutlich
//     · society — die Macht, die Partei, die Stimme, die Freiheit, die Politik,
//       die Öffentlichkeit, die Bevölkerung, die Presse, die Kritik
//     · abstraction — der Begriff, die Wahrheit, die Bedeutung, der Sinn, der
//       Wert, das Prinzip, die Art, das Merkmal, gelten, die Ausnahme
//   The full 288 are the fronts of u51–u62; grep them before you commit to one.
//
// ─── 5. DELIBERATELY LEFT FOR LATER BLOCKS ──────────────────────────────────
//   - die Wirtschaft, der Markt-side economics vocabulary → u66 is "Money and
//     the economy". Block 1 stops at die Gebühr and die Strafe.
//   - die Erinnerung / sich erinnern-side memory vocabulary → u63 "Experience
//     and memory". u58 l3 takes der Traum and das Geheimnis and stops there.
//   - EXPLICIT GRAMMAR AND REGISTER → u69–u71 (subordinate clauses, passive,
//     nominalization) and u72–u73 (polite vs plain). Block 1 uses those
//     structures in examples and never cards them as grammar lessons.
//   - der Mensch, die Leute, klar, einfach, anders, andere, der Plan, kennen,
//     fehlen, lösen, mögen, wahr, offen are STILL UNTAUGHT IN GERMAN and are
//     therefore unusable in an example. Block 1 hit all of them and wrote round
//     them. They are ordinary A1/A2 gaps a later coverage unit (u76–u87) should
//     close; block 1 did not take them because they are not B1 words and
//     teaching them here would put them behind 50 units of content that cannot
//     use them.
//
// ─── 6. NEAR-MISS FRONTS BLOCK 1 ACCEPTED, WITH THE REASON ──────────────────
//   German derives relentlessly, so "is this a new lexeme?" is the real check,
//   not "is this a new string". Three fronts in this block share a stem with a
//   taught word and were kept deliberately:
//     · der Zusammenhang (u52 l1) vs taught `zusammen` — a compound noun, not an
//       inflection of the adverb.
//     · scheinen (u54 l1, to seem) vs taught `der Schein` (the banknote, u27) —
//       homograph family, unrelated meanings; the hint names the other one.
//     · notfalls (u60 l2) vs taught `der Notfall` — derived adverb, and the hint
//       builds it from the noun the learner already has.
//   Rejected for the same test, and this is the more useful half of the list:
//   mögen (möchten is already taught and is literally its Konjunktiv), lösen
//   (die Lösung taught), nötig (notwendig is here), die Erlaubnis (erlauben
//   taught), das Verbot (verbieten taught), die Zustimmung (zustimmen taught),
//   bewirken (wirken taught), überprüfen (die Prüfung taught).
//
// ─── 7. SLOT TITLES WERE ENGLISH PLACEHOLDERS — ALL TWELVE ARE RETITLED ─────
//   CLAUDE.md "No front language": the scaffold's English titles mark the slot,
//   not the theme. u51–u62 now read Die eigene Meinung · Ursache und Folge ·
//   Vergleich und Steigerung · Vermutung und Unsicherheit · Nachrichten und
//   Gesellschaft · Arbeit und Ablauf · Gefühle, feiner betrachtet · Abstrakte
//   Begriffe · Wandel und Zeit · Probleme und Lösungen · Regeln, Erlaubnis,
//   Pflicht · Pläne und Absichten. Blocks 2 and 3: retitle yours too.
// ═════════════════════════════════════════════════════════════════════════════
//
// THEME: holding and defending an opinion. The frozen base already teaches die
// Meinung, zustimmen, ablehnen, diskutieren, glauben, denken and finden — so
// this unit takes the layer above them: naming a position (der Standpunkt),
// making a claim (behaupten), agreeing at three strengths (einverstanden /
// durchaus / selbstverständlich), refusing at two (keineswegs / widersprechen),
// and the conversation itself (das Gespräch, das Missverständnis, schweigen).
// FREE: Zeitungen, Gründe, Themen
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT51 = {
  id: "de-u51",
  lang: "de",
  title: "Die eigene Meinung",
  order: 51,
  stage: "b1",
  lessons: [
    {
      id: "de-u51l1",
      unit: 51,
      lesson: 1,
      title: "Der eigene Standpunkt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "State a position and back it up: name your point of view, claim something, stress the part that matters, and try to win somebody over.",
      items: [
        { id: "de-u51l1-derstandpunkt", type: "vocab", front: "der Standpunkt", reading: "derstandpunkt", meaning: "the point of view", example: { jp: "Ich verstehe deinen Standpunkt, aber ich bin nicht einverstanden.", en: "I understand your point of view, but I don't agree." }, drill: { jp: "Der Standpunkt überzeugt mich nicht", en: "The point of view does not convince me" }, accept: ["point of view", "the point of view", "standpoint", "the standpoint", "position", "the position"], hint: "der Stand (where you stand) + der Punkt: the point you are standing on. einen Standpunkt vertreten = to hold a position." },
        { id: "de-u51l1-behaupten", type: "vocab", front: "behaupten", reading: "behaupten", meaning: "to claim", example: { jp: "Er behauptet, dass er nichts gewusst hat, aber niemand glaubt ihm.", en: "He claims that he knew nothing, but nobody believes him." }, drill: { jp: "Viele Zeitungen behaupten das", en: "Many newspapers claim that" }, accept: ["to claim", "claim", "to assert", "assert", "to maintain", "maintain"], hint: "A claim put forward without proof — the opposite number of beweisen. Stronger than sagen: Er behauptet es." },
        { id: "de-u51l1-betonen", type: "vocab", front: "betonen", reading: "betonen", meaning: "to emphasize", example: { jp: "Die Lehrer betonen immer, dass die Prüfung sehr wichtig ist.", en: "The teachers always emphasize that the exam is very important." }, drill: { jp: "Wir betonen das Wort", en: "We stress the word" }, accept: ["to emphasize", "emphasize", "to emphasise", "to stress", "stress", "to underline"], hint: "der Ton (tone) sits inside it: to put the tone on something. Used both for stressing a point and for stressing a syllable." },
        { id: "de-u51l1-dietatsache", type: "vocab", front: "die Tatsache", reading: "dietatsache", meaning: "the fact", example: { jp: "Die Tatsache ist, dass wir für die Arbeit zu wenig Zeit haben.", en: "The fact is that we have too little time for the work." }, drill: { jp: "Die Tatsache hilft uns wenig", en: "The fact helps us little" }, accept: ["fact", "the fact"], hint: "die Tat (the deed) + die Sache (the thing): a thing that was actually done. Tatsache ist… opens a lot of German arguments." },
        { id: "de-u51l1-dervorschlag", type: "vocab", front: "der Vorschlag", reading: "dervorschlag", meaning: "the suggestion", example: { jp: "Mein Vorschlag war gut, aber der Chef hat ihn sofort abgelehnt.", en: "My suggestion was good, but the boss turned it down immediately." }, drill: { jp: "Der Vorschlag kommt vom Chef", en: "The suggestion comes from the boss" }, accept: ["suggestion", "the suggestion", "proposal", "the proposal"], hint: "From vorschlagen, literally 'to strike forward'. einen Vorschlag machen = to make a suggestion. Plural: Vorschläge." },
        { id: "de-u51l1-uberzeugen", type: "vocab", front: "überzeugen", reading: "uberzeugen", meaning: "to convince", example: { jp: "Die Gründe von Thomas überzeugen mich nicht, weil er nichts beweisen kann.", en: "Thomas's reasons don't convince me, because he can't prove anything." }, drill: { jp: "Die Zahlen überzeugen mich", en: "The numbers convince me" }, accept: ["to convince", "convince", "to persuade", "persuade"], hint: "über + zeugen (to bear witness). überzeugt sein = to be convinced; überzeugend = convincing." },
      ],
    },
    {
      id: "de-u51l2",
      unit: 51,
      lesson: 2,
      title: "Einverstanden",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Agree at the right strength — plainly, warmly or emphatically — and admit it when the other person has a point.",
      items: [
        { id: "de-u51l2-einverstanden", type: "vocab", front: "einverstanden", reading: "einverstanden", meaning: "in agreement", example: { jp: "Ich bin mit deinem Vorschlag einverstanden, aber wir brauchen mehr Zeit.", en: "I agree with your suggestion, but we need more time." }, drill: { jp: "Ich bin damit einverstanden", en: "I agree with that" }, accept: ["in agreement", "agreed", "fine with it", "ok with it", "happy with it", "agreeable"], hint: "Lives with sein: Ich bin einverstanden. mit etwas einverstanden sein = to be OK with something. Einverstanden! on its own = Deal." },
        { id: "de-u51l2-zugeben", type: "vocab", front: "zugeben", reading: "zugeben", meaning: "to admit", example: { jp: "Er will nicht zugeben, dass er den Termin vergessen hat.", en: "He won't admit that he forgot the appointment." }, drill: { jp: "Wir müssen das zugeben", en: "We have to admit that" }, accept: ["to admit", "admit", "to concede", "concede", "to own up"], hint: "zu + geben: to give ground to the other side. Separable, so it splits in a main clause: Ich gebe es zu." },
        { id: "de-u51l2-ebenfalls", type: "vocab", front: "ebenfalls", reading: "ebenfalls", meaning: "likewise", example: { jp: "Meine Kollegen denken ebenfalls so, und der Chef stimmt ihnen zu.", en: "My colleagues think the same way, and the boss agrees with them." }, drill: { jp: "Wir denken ebenfalls so", en: "We think the same way" }, accept: ["likewise", "as well", "too", "also", "the same to you"], hint: "eben + falls: 'in the same case'. Ebenfalls! is also how you hand a greeting straight back." },
        { id: "de-u51l2-selbstverstandlich", type: "vocab", front: "selbstverständlich", reading: "selbstverstandlich", meaning: "it goes without saying", example: { jp: "Selbstverständlich helfe ich dir, wenn du am Wochenende Zeit brauchst.", en: "Of course I'll help you if you need time at the weekend." }, drill: { jp: "Das ist selbstverständlich für uns", en: "That goes without saying for us" }, accept: ["of course", "naturally", "obviously", "it goes without saying", "self-evident", "certainly"], hint: "selbst + verständlich: it understands itself. Warmer than natürlich when you are saying yes to a favour." },
        { id: "de-u51l2-durchaus", type: "vocab", front: "durchaus", reading: "durchaus", meaning: "quite", example: { jp: "Das ist durchaus möglich, aber wir müssen es vorher genau untersuchen.", en: "That is perfectly possible, but we have to examine it closely first." }, drill: { jp: "Das ist durchaus richtig", en: "That is absolutely right" }, accept: ["absolutely", "quite", "certainly", "definitely", "perfectly", "thoroughly"], hint: "Strengthens a yes: durchaus möglich = perfectly possible. Watch the flip — durchaus nicht means not at all." },
        { id: "de-u51l2-keineswegs", type: "vocab", front: "keineswegs", reading: "keineswegs", meaning: "by no means", example: { jp: "Ich bin keineswegs sicher, dass der Weg für uns richtig ist.", en: "I am by no means sure that the path is right for us." }, drill: { jp: "Das ist keineswegs sicher", en: "That is by no means certain" }, accept: ["by no means", "not at all", "in no way", "definitely not", "far from it"], hint: "kein + Weg + s: 'in no way'. The emphatic no, where nicht is the plain one." },
      ],
    },
    {
      id: "de-u51l3",
      unit: 51,
      lesson: 3,
      title: "Widerspruch",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Push back on what somebody said: contradict them, raise an objection, dispute a claim, and name an exaggeration for what it is.",
      items: [
        { id: "de-u51l3-widersprechen", type: "vocab", front: "widersprechen", reading: "widersprechen", meaning: "to contradict", example: { jp: "Ich muss dir widersprechen, denn so war es damals nicht.", en: "I have to contradict you, because that is not how it was back then." }, drill: { jp: "Die Kollegen widersprechen dem Chef", en: "The colleagues contradict the boss" }, accept: ["to contradict", "contradict", "to disagree", "disagree", "to object"], hint: "wider (against) + sprechen. Takes the DATIVE — Ich widerspreche dir, never dich. Inseparable: er widerspricht." },
        { id: "de-u51l3-dereinwand", type: "vocab", front: "der Einwand", reading: "dereinwand", meaning: "the objection", example: { jp: "Der Einwand von Anna war gut, deshalb haben wir noch lange diskutiert.", en: "Anna's objection was a good one, so we discussed it for a long time." }, drill: { jp: "Der Einwand kam vom Lehrer", en: "The objection came from the teacher" }, accept: ["objection", "the objection", "counterargument", "the counterargument", "reservation"], hint: "From einwenden, to throw something in against. einen Einwand haben = to have an objection. Plural: Einwände." },
        { id: "de-u51l3-bestreiten", type: "vocab", front: "bestreiten", reading: "bestreiten", meaning: "to dispute", example: { jp: "Niemand bestreitet, dass die Arbeit im Sommer sehr schwer war.", en: "Nobody disputes that the work was very hard in the summer." }, drill: { jp: "Wir bestreiten das nicht", en: "We do not dispute that" }, accept: ["to dispute", "dispute", "to deny", "deny", "to contest", "contest"], hint: "Built on der Streit, the next card: to fight a claim rather than a person. Er bestreitet die Tatsache." },
        { id: "de-u51l3-derstreit", type: "vocab", front: "der Streit", reading: "derstreit", meaning: "the quarrel", example: { jp: "Der Streit zwischen zwei Kollegen dauert schon eine Woche.", en: "The quarrel between the two colleagues has been going on for a week." }, drill: { jp: "Der Streit dauert seit Montag", en: "The quarrel has lasted since Monday" }, accept: ["quarrel", "the quarrel", "argument", "the argument", "dispute", "the dispute", "row"], hint: "A real fight in words, not a polite disagreement. Streit haben mit jemandem = to be having a row with someone." },
        { id: "de-u51l3-ubertreiben", type: "vocab", front: "übertreiben", reading: "ubertreiben", meaning: "to exaggerate", example: { jp: "Er übertreibt gern, aber heute ist es sehr kalt.", en: "He likes to exaggerate, but today it is very cold." }, drill: { jp: "Die Zeitungen übertreiben das gern", en: "The newspapers like to exaggerate that" }, accept: ["to exaggerate", "exaggerate", "to overstate", "overstate", "to overdo it"], hint: "über + treiben (to drive): to drive it over the top. Übertreib nicht! = Don't exaggerate!" },
        { id: "de-u51l3-derunsinn", type: "vocab", front: "der Unsinn", reading: "derunsinn", meaning: "the nonsense", example: { jp: "Was er über die Schule sagt, ist Unsinn, und das weiß er selbst.", en: "What he says about the school is nonsense, and he knows it himself." }, drill: { jp: "Der Unsinn hilft uns nicht", en: "The nonsense does not help us" }, accept: ["nonsense", "the nonsense", "rubbish", "the rubbish", "silliness"], hint: "un- + der Sinn (sense): without sense. Unsinn! on its own is a one-word way to throw something out." },
      ],
    },
    {
      id: "de-u51l4",
      unit: 51,
      lesson: 4,
      title: "Das Gespräch",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Keep a discussion working: talk about the conversation itself, spot a misunderstanding, choose to stay quiet, and speak up when you want to.",
      items: [
        { id: "de-u51l4-dasgesprach", type: "vocab", front: "das Gespräch", reading: "dasgesprach", meaning: "the conversation", example: { jp: "Das Gespräch mit dem Chef war lang, aber am Ende hat es geholfen.", en: "The conversation with the boss was long, but in the end it helped." }, drill: { jp: "Das Gespräch dauert zwei Stunden", en: "The conversation lasts two hours" }, accept: ["conversation", "the conversation", "talk", "the talk", "discussion", "the discussion"], hint: "From sprechen. ein Gespräch führen = to have a conversation — and das Vorstellungsgespräch is one of these." },
        { id: "de-u51l4-unterbrechen", type: "vocab", front: "unterbrechen", reading: "unterbrechen", meaning: "to interrupt", example: { jp: "Bitte unterbrechen Sie mich nicht, wenn ich über das Problem spreche.", en: "Please don't interrupt me when I'm talking about the problem." }, drill: { jp: "Die Kinder unterbrechen uns oft", en: "The children interrupt us often" }, accept: ["to interrupt", "interrupt", "to break in", "to cut off", "to cut in"], hint: "unter + brechen (to break): to break in underneath somebody. Inseparable — er unterbricht mich, not bricht mich unter." },
        { id: "de-u51l4-dasmissverstandnis", type: "vocab", front: "das Missverständnis", reading: "dasmissverstandnis", meaning: "the misunderstanding", example: { jp: "Es war ein Missverständnis, weil wir über verschiedene Themen gesprochen haben.", en: "It was a misunderstanding, because we were talking about different topics." }, drill: { jp: "Das Missverständnis kostet uns Zeit", en: "The misunderstanding costs us time" }, accept: ["misunderstanding", "the misunderstanding", "mix-up", "the mix-up", "mixup"], hint: "miss- (wrongly) + verstehen: understanding gone wrong. Note the double s before the t, and the ä from verständlich." },
        { id: "de-u51l4-schweigen", type: "vocab", front: "schweigen", reading: "schweigen", meaning: "to stay silent", example: { jp: "Wenn er wütend ist, schweigt er lieber, und dann hilft kein Wort.", en: "When he is angry he prefers to stay silent, and then no word helps." }, drill: { jp: "Wir schweigen heute lieber", en: "We would rather stay silent today" }, accept: ["to stay silent", "stay silent", "to be silent", "to say nothing", "to keep quiet", "to keep silent"], hint: "Not the same as ruhig sein (being quiet) — this is CHOOSING to say nothing. Schweigen ist Gold." },
        { id: "de-u51l4-dasvorurteil", type: "vocab", front: "das Vorurteil", reading: "dasvorurteil", meaning: "the prejudice", example: { jp: "Er hat ein Vorurteil gegen die Stadt, obwohl er nie dort war.", en: "He has a prejudice against the city, although he has never been there." }, drill: { jp: "Das Vorurteil hilft niemandem", en: "The prejudice helps nobody" }, accept: ["prejudice", "the prejudice", "bias", "the bias", "preconception"], hint: "vor + das Urteil (the judgement): judging before you know. Plural: Vorurteile." },
        { id: "de-u51l4-sichaussern", type: "vocab", front: "sich äußern", reading: "sichaussern", meaning: "to express oneself", example: { jp: "Zu dem Thema möchte ich mich heute nicht äußern, weil ich zu wenig weiß.", en: "I don't want to comment on that topic today, because I know too little." }, drill: { jp: "Hier darf man sich äußern", en: "Here you are allowed to speak out" }, accept: ["to express oneself", "express oneself", "to comment", "comment", "to speak out", "to give an opinion"], hint: "From äußer- (outer): to put your view outside where others can hear it. sich zu etwas äußern = to comment on something." },
      ],
    },
  ],
};
