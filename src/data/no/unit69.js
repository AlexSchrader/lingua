// NO Unit 69 — Grammatikk 6: leddsetninger og ordstilling — B1 GRAMMAR
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Grammar 6 — linked and subordinate clauses". Retitled in
// Norwegian per CLAUDE.md → "No front language". Conventions are unit1.js §1–§9.
//
// ⚠ THE CONJUNCTIONS ARE ALREADY TAUGHT AND THIS UNIT DOES NOT RE-TEACH THEM.
// u12 gave at, fordi, hvis, men, eller, derfor. u29 "Bindeord" gave som, siden,
// selv om, dersom, med mindre, både, enten, verken, dessuten, likevel, imidlertid,
// derimot, altså, nemlig, heller, ellers, i tillegg, deretter, til slutt, dermed,
// slik at. u36 "Grammatikk 4" gave ettersom, etter at, så snart, så lenge, innen,
// inntil, for at, uten at, i tilfelle, som om, på grunn av, til tross for,
// uansett, bortsett fra, det vil si, da, for å, uten å, etter å ha, ved å.
// Checked front by front: there is nothing left to teach in that column.
//
// SO WHAT A B1 UNIT ACTUALLY OWES THE LEARNER IS THE WORD ORDER, and unit1.js §4
// says in as many words that block 1 delivered a corpus the pattern is VISIBLE in
// rather than one that TEACHES it. Three of these four lessons are therefore
// about POSITION rather than about new connectives:
//   l1  the sentence adverb moves in front of the verb inside a leddsetning
//       (…at han STADIG KOMMER, against han KOMMER STADIG) — this is the ikke-
//       shift, taught with six adverbs that are not yet in the corpus.
//   l2  som cannot open a relative clause alone; it needs der/det/noe/de/den/hvem
//       in front of it. Six cards, one paradigm — the shape u14 used for
//       den/denne/dette/disse.
//   l3  the paragraph connectives, every one of which triggers V2 when fronted.
//   l4  indirect questions (hvorvidt, hva som) and precise time relations.
//
// ⚠ MEANINGS ARE DELIBERATELY DISTINCT ACROSS THE PROBABILITY ADVERBS —
// antakelig "probably", trolig "likely", sannsynligvis "in all probability",
// and u71's sannsynlig "plausible". `type:produce` prompts with the MEANING and
// grades against ONE front, so three cards glossed "probably" would punish a
// learner for knowing the other two (u14's finding, and it is the same trap).
//
// `der` IS TAUGHT HERE (l2, card 1) and is used freely from u70 on. It was not in
// the frozen base, which is why unit63–68 avoid it.
//
// ⚠ `om` = "whether" HAS NO CARD AND CANNOT HAVE ONE, and that is worth stating
// rather than leaving as a silent hole. Fronts are globally unique per language
// and `om` is already a front at u28l2 meaning "in (after a period)", so the
// commonest word in the whole lesson is unteachable here. l4 therefore drills
// the FORMAL twin, `hvorvidt`, and hvorvidt's hint names om as the everyday one.
// This is RUNBOOK §7's prescribed handling of a front-collision (teach through
// examples and a hint, never weaken the validator), but the cost is real: the
// learner meets the rare word as a card and the common one only in passing.
//
// SCOPE: frozen base u1–u50 plus u63–u68 plus this unit's earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT69 = {
  id: "no-u69",
  lang: "no",
  title: "Grammatikk 6: leddsetninger og ordstilling",
  order: 69,
  stage: "b1",
  lessons: [
    // Lesson 1: the adverb shift. Every example shows the SAME adverb in a
    // subordinate clause, where it must stand before the verb.
    {
      id: "no-u69l1",
      unit: 69,
      lesson: 1,
      title: "Setningsadverb i leddsetninger",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Put ikke and the other sentence adverbs in the right place inside a subordinate clause.",
      items: [
        { id: "no-u69l1-trolig", type: "vocab", front: "trolig", reading: "trolig", meaning: "likely", example: { jp: "Vi vet at hun trolig flytter til Bergen.", en: "We know that she is likely to move to Bergen." }, accept: ["probable", "in all likelihood"], drill: { jp: "Hun flytter trolig til Bergen", en: "She is likely to move to Bergen" }, hint: "å tro (u12) + -lig — what can be believed. Adjective and adverb in one, like opprinnelig (u59)." },
        { id: "no-u69l1-sannsynligvis", type: "vocab", front: "sannsynligvis", reading: "sannsynligvis", meaning: "in all probability", example: { jp: "Alle sa at det sannsynligvis var en feil.", en: "Everyone said that it was in all probability a mistake." }, accept: ["most probably", "very probably"], drill: { jp: "Det var sannsynligvis en feil", en: "It was in all probability a mistake" }, hint: "The heavyweight of the group — six syllables, and it only ever works as an adverb. -vis is the ending that turns an adjective into one: sannsynlig (u71) → sannsynligvis." },
        { id: "no-u69l1-apenbart", type: "vocab", front: "åpenbart", reading: "apenbart", meaning: "obviously", example: { jp: "Det er åpenbart at han ikke har lest boka.", en: "It is obvious that he has not read the book." }, accept: ["obvious", "clearly", "evidently"], drill: { jp: "Han har åpenbart ikke lest boka", en: "He has obviously not read the book" }, hint: "åpen (u7) + bar — what lies open. Adjective and adverb: et åpenbart problem, and \"obviously\"." },
        { id: "no-u69l1-utvilsomt", type: "vocab", front: "utvilsomt", reading: "utvilsomt", meaning: "undoubtedly", example: { jp: "Jeg tror at han utvilsomt er den beste læreren.", en: "I think that he is undoubtedly the best teacher." }, accept: ["without doubt", "no doubt", "beyond question"], drill: { jp: "Jeg vet at hun utvilsomt er best", en: "I know that she is undoubtedly best" }, hint: "u- + tvil + -somt. Setningsadverb: i en leddsetning står det FØR verbet — ...at han utvilsomt er best." },
        { id: "no-u69l1-unektelig", type: "vocab", front: "unektelig", reading: "unektelig", meaning: "undeniably", example: { jp: "Alle vet at han unektelig har gjort mye for oss.", en: "Everyone knows that he has undeniably done a lot for us." }, accept: ["there is no denying"], drill: { jp: "Alle vet at han unektelig har gjort mye", en: "Everyone knows that he has undeniably done a lot" }, hint: "u- + nekte + -lig: det som ikke kan nektes. Brukes når du innrømmer noe som taler mot deg selv." },
      ],
    },
    // Lesson 2: the som paradigm. som never opens a relative clause alone.
    {
      id: "no-u69l2",
      unit: 69,
      lesson: 2,
      title: "Relativsetninger med som",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Join two sentences with som, choosing the right word to put in front of it.",
      items: [
        { id: "no-u69l2-der", type: "vocab", front: "der", reading: "der", meaning: "where (relative)", example: { jp: "Dette er huset der jeg vokste opp.", en: "This is the house where I grew up." }, accept: ["where", "there", "in which"], drill: { jp: "Dette er byen der jeg bor", en: "This is the town where I live" }, hint: "der ties a PLACE to a clause; som ties a thing. Also the everyday \"there\": boka står der. Norwegians often say hvor instead of der here, and both are correct." },
        { id: "no-u69l2-detsom", type: "vocab", front: "det som", reading: "detsom", meaning: "that which", example: { jp: "Jeg forstår ikke det som skjer nå.", en: "I do not understand what is happening now." }, accept: ["what", "the thing that"], drill: { jp: "Jeg forstår ikke det som skjer", en: "I do not understand what is happening" }, hint: "⚠ English \"what\" as a relative is TWO words in Norwegian: det som. Never hva — hva only asks questions." },
        { id: "no-u69l2-noesom", type: "vocab", front: "noe som", reading: "noesom", meaning: "something that", example: { jp: "Han sa noe som gjorde alle glade.", en: "He said something that made everyone happy." }, accept: ["something which", "anything that"], drill: { jp: "Han sa noe som alle likte", en: "He said something that everyone liked" }, hint: "The pattern of the whole lesson: som needs a word in front of it. noe som, alt som, ingenting som, mye som." },
        { id: "no-u69l2-desom", type: "vocab", front: "de som", reading: "desom", meaning: "those who", example: { jp: "De som kom tidlig, fikk se alt.", en: "Those who came early got to see everything." }, accept: ["the ones who", "the people who"], drill: { jp: "De som kom tidlig fikk mest", en: "Those who came early got the most" }, hint: "For people, in the plural. The singular is den som, the next card." },
        { id: "no-u69l2-densom", type: "vocab", front: "den som", reading: "densom", meaning: "the one who", example: { jp: "Den som venter, får se.", en: "The one who waits will see." }, accept: ["whoever", "he who", "anyone who"], drill: { jp: "Den som venter får se noe", en: "The one who waits will see something" }, hint: "The opener of half the proverbs in Norwegian: Den som venter på noe godt, venter ikke forgjeves." },
        { id: "no-u69l2-hvemsom", type: "vocab", front: "hvem som", reading: "hvemsom", meaning: "who (reported subject)", example: { jp: "Jeg vet ikke hvem som ringte i går.", en: "I do not know who called yesterday." }, accept: ["who", "who (indirect question)", "the one who"], drill: { jp: "Jeg vet ikke hvem som ringte", en: "I do not know who called" }, hint: "⚠ An indirect question about the SUBJECT keeps som: jeg vet ikke hvem som ringte. The direct question drops it: Hvem ringte?" },
      ],
    },
    // Lesson 3: the paragraph connectives. Every one triggers V2 when it is
    // fronted, and every example shows that inversion.
    {
      id: "no-u69l3",
      unit: 69,
      lesson: 3,
      title: "Å binde avsnitt sammen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Link your sentences into a paragraph that hangs together, and keep the verb in second place when you do.",
      items: [
        { id: "no-u69l3-videre", type: "vocab", front: "videre", reading: "videre", meaning: "furthermore", example: { jp: "Videre vil jeg si at prisen er høy.", en: "Furthermore, I would say that the price is high." }, accept: ["further", "moreover", "onward"], drill: { jp: "Videre vil jeg si noe mer", en: "Furthermore I would like to say something more" }, hint: "⚠ Fronting it forces V2: Videre VIL jeg si — never Videre jeg vil. It is also the plain word for onward: å gå videre." },
        { id: "no-u69l3-forovrig", type: "vocab", front: "for øvrig", reading: "forovrig", meaning: "incidentally", example: { jp: "For øvrig er butikken stengt i dag.", en: "Incidentally, the shop is closed today." }, accept: ["by the way", "besides", "otherwise"], drill: { jp: "For øvrig er butikken stengt", en: "Incidentally the shop is closed" }, hint: "Written style, and extremely common in e-mail. Fronting it triggers V2 as well: For øvrig ER butikken stengt." },
        { id: "no-u69l3-saledes", type: "vocab", front: "således", reading: "saledes", meaning: "thus", example: { jp: "Vi sparte mye, og således fikk vi råd til huset.", en: "We saved a lot, and thus we could afford the house." }, accept: ["in this way", "hence", "accordingly"], drill: { jp: "Således fikk vi råd til huset", en: "Thus we could afford the house" }, hint: "Formal — you will read it far more often than you hear it. Same job as derfor (u12), one register up." },
        { id: "no-u69l3-forstogfremst", type: "vocab", front: "først og fremst", reading: "forstogfremst", meaning: "first and foremost", example: { jp: "Først og fremst må vi betale lånet.", en: "First and foremost we have to pay the loan." }, accept: ["above all", "primarily", "mainly"], drill: { jp: "Først og fremst må vi betale lånet", en: "First and foremost we have to pay the loan" }, hint: "først (u29) + fremst. A frozen phrase — never taken apart, and it triggers V2 like the rest of this lesson." },
        { id: "no-u69l3-padenannenside", type: "vocab", front: "på den annen side", reading: "padenannenside", meaning: "seen from the other side", example: { jp: "På den annen side er det billigere i Bergen.", en: "On the other hand, it is cheaper in Bergen." }, accept: ["on the other hand", "then again", "conversely"], drill: { jp: "På den annen side er det billigere", en: "On the other hand it is cheaper" }, hint: "⚠ annen, not andre — the phrase keeps an older form, and changing it sounds wrong. It pairs with på den ene siden." },
        { id: "no-u69l3-medandreord", type: "vocab", front: "med andre ord", reading: "medandreord", meaning: "in other words", example: { jp: "Med andre ord må vi vente til neste år.", en: "In other words we have to wait until next year." }, accept: ["put differently", "that is to say"], drill: { jp: "Med andre ord må vi vente", en: "In other words we have to wait" }, hint: "med (u13) + andre (u14) + ord (u18). Frozen, and the standard way to restate what you just said." },
      ],
    },
    // Lesson 4: indirect questions, and time relations more precise than når.
    {
      id: "no-u69l4",
      unit: 69,
      lesson: 4,
      title: "Indirekte spørsmål og tid",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report a question without asking it, and say exactly when something happened in relation to something else.",
      items: [
        { id: "no-u69l4-hvorvidt", type: "vocab", front: "hvorvidt", reading: "hvorvidt", meaning: "whether", example: { jp: "Han spurte hvorvidt vi hadde tid.", en: "He asked whether we had time." }, accept: ["if (whether)", "as to whether"], drill: { jp: "Han spurte hvorvidt vi hadde tid", en: "He asked whether we had time" }, hint: "The formal twin of om (u28). Writers reach for it when om could be read as \"if\" instead of \"whether\"." },
        { id: "no-u69l4-hvasom", type: "vocab", front: "hva som", reading: "hvasom", meaning: "what (clause subject)", example: { jp: "Ingen vet hva som skjedde den natta.", en: "Nobody knows what happened that night." }, accept: ["what", "what happened", "the thing that"], drill: { jp: "Ingen vet hva som skjedde", en: "Nobody knows what happened" }, hint: "Same rule as hvem som in l2: when the question word is the SUBJECT of the reported clause, som follows it. Compare hva han sa, where hva is the object and som never appears." },
        { id: "no-u69l4-meddetsamme", type: "vocab", front: "med det samme", reading: "meddetsamme", meaning: "the moment that", example: { jp: "Ring meg med det samme du kommer.", en: "Call me as soon as you arrive." }, accept: ["right away", "as soon as", "immediately", "straight away"], drill: { jp: "Ring meg med det samme du kommer", en: "Call me as soon as you arrive" }, hint: "Two jobs in one phrase: \"immediately\" on its own (jeg kommer med det samme), and \"as soon as\" in front of a clause." },
        { id: "no-u69l4-idet", type: "vocab", front: "idet", reading: "idet", meaning: "just as", example: { jp: "Telefonen ringte idet vi gikk ut døra.", en: "The phone rang just as we went out the door." }, accept: ["as", "at the moment when"], drill: { jp: "Telefonen ringte idet vi gikk", en: "The phone rang just as we left" }, hint: "i + det, written as one word. Narrower than når (u5): idet means the two things touch, in the same second." },
        { id: "no-u69l4-helttil", type: "vocab", front: "helt til", reading: "helttil", meaning: "right up until", example: { jp: "Vi ventet helt til butikken stengte.", en: "We waited right up until the shop closed." }, accept: ["until", "all the way until"], drill: { jp: "Vi ventet helt til butikken stengte", en: "We waited right up until the shop closed" }, hint: "hel (u28) + til (u7). Stronger than til on its own — it insists on the whole stretch of time." },
        { id: "no-u69l4-savidt", type: "vocab", front: "så vidt", reading: "savidt", meaning: "only just", example: { jp: "Vi rakk så vidt toget.", en: "We barely caught the train." }, accept: ["only just", "hardly", "as far as", "barely"], drill: { jp: "Vi rakk så vidt toget", en: "We barely caught the train" }, hint: "Two senses, both common: \"barely\" (vi rakk det så vidt) and \"as far as\" in så vidt jeg vet — as far as I know." },
      ],
    },
  ],
};
