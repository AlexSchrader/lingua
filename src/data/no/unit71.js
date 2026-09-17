// NO Unit 71 — Grammatikk 8: nyanser og ordbygging — B1 GRAMMAR
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Grammar 8 — nuance, evidentiality, nominalization". Retitled
// in Norwegian per CLAUDE.md → "No front language". Conventions are unit1.js
// §1–§9.
//
// ⚠ THE MODALS ARE ALREADY TAUGHT TWICE AND ARE NOT RE-TAUGHT HERE. u13 gave
// å kunne, å ville, å skulle, å måtte, bør, å få; u37 "Grammatikk 5" gave the
// PAST forms kunne, ville, skulle, burde, måtte, gjerne for wishes and polite
// requests. So "modal nuance" has nothing left in it, and this unit spends its
// four lessons on the two things Norwegian actually has that English does not:
//   l1  THE MODAL PARTICLES — jo, vel, visst, liksom, sikkert, visstnok. The
//       little unstressed words that carry a whole attitude and have no English
//       equivalent at all. This is the evidentiality half of the slot.
//   l2  NOMINALIZATION, the -ing/-ning and -else machine, built on verbs the
//       learner already has (å forvente, å forklare u33, å vurdere u40,
//       å påstå u49).
//   l3  the -het / -dom / -ke abstract nouns, which is one gender rule repeated
//       six times.
//   l4  adjective formation: u-, -lig, -ig.
//
// ⚠ MEANINGS ARE KEPT DISTINCT ON PURPOSE. visst is "apparently", visstnok is
// "reportedly", sikkert is "surely"; and sannsynlig here is "plausible" because
// u69 already glossed trolig "likely", antakelig "probably" and sannsynligvis
// "in all probability". `type:produce` prompts with the MEANING and grades
// against ONE front (no/unit14.js), so overlapping glosses punish a learner for
// knowing the other card.
//
// GENDER, and l3 is built around it:
//   -het  ⚠ MASCULINE, no feminine form — en sannhet, en frihet, en
//         virkelighet, en svakhet. This is the rule crews get wrong.
//   -else ⚠ MASCULINE too — en bevegelse, en påstand's cousin en anmeldelse.
//   -ing/-ning  feminine — ei forventning, ei oppfatning, ei forklaring,
//         ei vurdering.
//   -dom  masculine — en rikdom, like en barndom (u63) and en sykdom (u67).
// FIRST FEMININE is `ei forventning` (l2) and carries the en-/ei- note §1 wants.
//
// SCOPE: frozen base u1–u50 plus u63–u70 plus this unit's earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT71 = {
  id: "no-u71",
  lang: "no",
  title: "Grammatikk 8: nyanser og ordbygging",
  order: 71,
  stage: "b1",
  lessons: [
    // Lesson 1: the modal particles. Unstressed, untranslatable, and the single
    // clearest marker of someone who has stopped translating from English.
    {
      id: "no-u71l1",
      unit: 71,
      lesson: 1,
      title: "Småordene som farger setningen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Colour a sentence the way a Norwegian does — with vel, visst and liksom rather than with extra words.",
      items: [
        { id: "no-u71l1-vel", type: "vocab", front: "vel", reading: "vel", meaning: "I suppose", example: { jp: "Du kommer vel i morgen?", en: "You are coming tomorrow, surely?" }, accept: ["surely", "I suppose", "I assume", "presumably", "presumably"], drill: { jp: "Du kommer vel i morgen", en: "You are coming tomorrow I assume" }, hint: "Turns a statement into a question you expect agreement with — English does this with a tag, \"…aren't you?\". Nothing to do with bra; vel is only ever this particle, plus the exclamation Vel!" },
        { id: "no-u71l1-visst", type: "vocab", front: "visst", reading: "visst", meaning: "I gather", example: { jp: "Han er visst syk i dag.", en: "He is apparently ill today." }, accept: ["I gather", "seemingly", "so I hear", "apparently", "apparently"], drill: { jp: "Han er visst syk i dag", en: "He is apparently ill today" }, hint: "Marks hearsay: I was told this, I did not see it. Norwegian does with one small word what English needs a whole clause for." },
        { id: "no-u71l1-liksom", type: "vocab", front: "liksom", reading: "liksom", meaning: "sort of", example: { jp: "Det var liksom ikke så viktig.", en: "It was sort of not that important." }, accept: ["like", "kind of", "as if"], drill: { jp: "Det var liksom ikke så viktig", en: "It was sort of not that important" }, hint: "Spoken Norwegian's filler, exactly like English \"like\", and just as common among young people. In writing it keeps its older meaning, \"as if\"." },
        { id: "no-u71l1-sikkert", type: "vocab", front: "sikkert", reading: "sikkert", meaning: "surely", example: { jp: "Han kommer sikkert i morgen.", en: "He will surely come tomorrow." }, accept: ["I'm sure", "no doubt", "probably"], drill: { jp: "Han kommer sikkert i morgen", en: "He will surely come tomorrow" }, hint: "The adverb of sikker (u22). ⚠ Odd but true: on its own, sikkert expresses LESS certainty than helt sikkert — han kommer sikkert really means \"I expect he will\"." },
        { id: "no-u71l1-jammen", type: "vocab", front: "jammen", reading: "jammen", meaning: "but (protesting)", example: { jp: "Jammen sa du at du skulle komme tidlig!", en: "But you did say you were going to come early!" }, accept: ["but", "well", "why", "indeed (surprise)", "surely", "indeed"], drill: { jp: "Jammen sa du det", en: "But you did say so" }, hint: "Uformelt småord, mest muntlig. Uttrykker overraskelse eller mild protest. Skriftlig blir det gjerne men." },
      ],
    },
    // Lesson 2: the nominalization machine, run on verbs the learner already has.
    {
      id: "no-u71l2",
      unit: 71,
      lesson: 2,
      title: "Fra verb til substantiv",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Turn a verb you know into the noun for it, and get its gender right.",
      items: [
        { id: "no-u71l2-forventning", type: "vocab", front: "ei forventning", reading: "eiforventning", meaning: "an expectation", example: { jp: "Forventningene til den nye sjefen er høye.", en: "Expectations of the new boss are high." }, accept: ["expectation", "anticipation"], drill: { jp: "Vi har ei forventning til deg", en: "We have an expectation of you" }, hint: "⚠ THE RULE OF THIS LESSON: verb + -ing/-ning gives a FEMININE noun — å forvente → ei forventning, forventninga. Print also writes en/-en; this course marks ei so the definite -a stays predictable." },
        { id: "no-u71l2-bevegelse", type: "vocab", front: "en bevegelse", reading: "enbevegelse", meaning: "a movement", example: { jp: "Han så en bevegelse i vinduet.", en: "He saw a movement in the window." }, accept: ["movement", "motion"], drill: { jp: "Han så en bevegelse i vinduet", en: "He saw a movement in the window" }, hint: "⚠ THE OTHER HALF OF THE RULE: verb + -else gives a MASCULINE noun, with no feminine form at all — å bevege → en bevegelse, bevegelsen. Never ei. It also means a political movement, as in English." },
        { id: "no-u71l2-forklaring", type: "vocab", front: "ei forklaring", reading: "eiforklaring", meaning: "an explanation", example: { jp: "Vi fikk ei forklaring som alle forsto.", en: "We got an explanation that everyone understood." }, accept: ["explanation", "account"], drill: { jp: "Vi fikk ei forklaring på skolen", en: "We got an explanation at school" }, hint: "å forklare (u33) + -ing → feminine: forklaringa." },
        { id: "no-u71l2-vurdering", type: "vocab", front: "ei vurdering", reading: "eivurdering", meaning: "an assessment", example: { jp: "Vurderinga hans var at prisen var høy.", en: "His assessment was that the price was high." }, accept: ["assessment", "evaluation", "judgement"], drill: { jp: "Dette er ei vurdering vi må gjøre", en: "This is an assessment we have to make" }, hint: "å vurdere (u40) + -ing → feminine: vurderinga. In a Norwegian school it covers both the mark and the comment written under it." },
        { id: "no-u71l2-pastand", type: "vocab", front: "en påstand", reading: "enpastand", meaning: "a claim", example: { jp: "Påstanden hans var ikke rett.", en: "His claim was not right." }, accept: ["claim", "assertion", "allegation"], drill: { jp: "Dette er en påstand uten bevis", en: "This is a claim without evidence" }, hint: "å påstå (u49) + -stand, an older ending. Masculine: påstanden. Not every verb takes -ing — this small family (påstand, tilstand u40, motstand) takes -stand instead, and you simply learn them." },
      ],
    },
    // Lesson 3: -het, and the one gender rule it teaches six times over.
    {
      id: "no-u71l3",
      unit: 71,
      lesson: 3,
      title: "Abstrakte substantiv",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name an abstract idea — truth, freedom, strength — and get the gender right every time.",
      items: [
        { id: "no-u71l3-sannhet", type: "vocab", front: "en sannhet", reading: "ensannhet", meaning: "a truth", example: { jp: "Sannheten kom til slutt.", en: "The truth came out in the end." }, accept: ["truth", "the truth"], drill: { jp: "Dette er en sannhet alle kjenner", en: "This is a truth everyone knows" }, hint: "⚠ THE RULE OF THIS LESSON: adjective + -het gives a MASCULINE noun with NO feminine form — sann → en sannhet, sannheten. Crews write ei sannhet and it is simply wrong." },
        { id: "no-u71l3-virkelighet", type: "vocab", front: "en virkelighet", reading: "envirkelighet", meaning: "a reality", example: { jp: "Virkeligheten er ikke alltid fin.", en: "Reality is not always pretty." }, accept: ["reality", "the real world"], drill: { jp: "Dette er en virkelighet mange kjenner", en: "This is a reality many people know" }, hint: "virkelig (real) + -het. Masculine: virkeligheten — and in practice it is nearly always said in the definite, like English \"reality\"." },
        { id: "no-u71l3-svakhet", type: "vocab", front: "en svakhet", reading: "ensvakhet", meaning: "a weakness", example: { jp: "Planen har en svakhet ingen har sett.", en: "The plan has a weakness nobody has spotted." }, accept: ["weakness", "flaw", "shortcoming"], drill: { jp: "Planen har en svakhet vi må se på", en: "The plan has a weakness we have to look at" }, hint: "svak (weak) + -het. Masculine: svakheten. ⚠ Its opposite is NOT en sterkhet — that word does not exist. It is en styrke, the next card." },
        { id: "no-u71l3-styrke", type: "vocab", front: "en styrke", reading: "enstyrke", meaning: "a strength", example: { jp: "Styrken hans er at han hører på alle.", en: "His strength is that he listens to everyone." }, accept: ["strength", "force", "power"], drill: { jp: "Dette er en styrke han har", en: "This is a strength he has" }, hint: "From sterk (u10), with the vowel change Norwegian loves: sterk → styrke, lang → lengde, ung → ungdom. Masculine: styrken." },
        { id: "no-u71l3-rikdom", type: "vocab", front: "en rikdom", reading: "enrikdom", meaning: "a wealth", example: { jp: "Rikdommen i landet kommer fra havet.", en: "The country's wealth comes from the sea." }, accept: ["wealth", "riches", "richness"], drill: { jp: "Landet fikk en rikdom fra havet", en: "The country got a wealth from the sea" }, hint: "rik (rich) + -dom, the third abstract ending, and masculine like the others: rikdommen, with the m doubled. Same family as en barndom (u63) and en sykdom (u67)." },
      ],
    },
    // Lesson 4: adjective formation — u-, -lig, -ig, and the one that inflects.
    {
      id: "no-u71l4",
      unit: 71,
      lesson: 4,
      title: "Adjektiv av verb og substantiv",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Build the opposite of an adjective with u-, and recognise the -lig and -ig endings that never change.",
      items: [
        { id: "no-u71l4-uvanlig", type: "vocab", front: "uvanlig", reading: "uvanlig", meaning: "unusual", example: { jp: "Det er uvanlig med snø i mai.", en: "Snow in May is unusual." }, accept: ["unusual", "rare", "uncommon"], drill: { jp: "Det er uvanlig med snø i mai", en: "Snow in May is unusual" }, hint: "u- + vanlig (u40). Another -ig adjective, so no -t: et uvanlig år." },
        { id: "no-u71l4-ulik", type: "vocab", front: "ulik", reading: "ulik", meaning: "unlike", example: { jp: "De to brødrene er helt ulike.", en: "The two brothers are completely different." }, accept: ["different", "dissimilar", "unequal"], drill: { jp: "Han er ulik broren sin", en: "He is unlike his brother" }, hint: "u- + lik (alike). ⚠ THE EXCEPTION IN THIS LESSON: it does NOT end in -ig, so it inflects normally — ulikt in the neuter, ulike in the plural." },
        { id: "no-u71l4-synlig", type: "vocab", front: "synlig", reading: "synlig", meaning: "visible", example: { jp: "Huset er synlig fra veien.", en: "The house is visible from the road." }, accept: ["in sight", "showing"], drill: { jp: "Huset er synlig fra veien", en: "The house is visible from the road" }, hint: "å syne (to show) + -lig — the other great adjective ending, and it never takes -t either: et synlig problem. The opposite is usynlig, u- again." },
        { id: "no-u71l4-sannsynlig", type: "vocab", front: "sannsynlig", reading: "sannsynlig", meaning: "plausible", example: { jp: "Det er ikke sannsynlig at han kommer.", en: "It is not plausible that he will come." }, accept: ["likely", "credible", "believable"], drill: { jp: "Det er ikke sannsynlig at han kommer", en: "It is not plausible that he will come" }, hint: "sann + å syne + -lig: what LOOKS true. Add -vis and you get the adverb sannsynligvis (u69) — that is where that six-syllable word comes from." },
        { id: "no-u71l4-utrolig", type: "vocab", front: "utrolig", reading: "utrolig", meaning: "incredible", example: { jp: "Han fortalte en utrolig historie om turen sin.", en: "He told an incredible story about his trip." }, accept: ["unbelievable", "amazing", "incredibly"], drill: { jp: "Han fortalte en utrolig historie", en: "He told an incredible story" }, hint: "u- + trolig (u69) + -ig: det som ikke er til å tro. Også som forsterker: utrolig god." },
      ],
    },
  ],
};
