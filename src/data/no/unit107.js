// NO Unit 107 — Grammatikk 10: formelle skriftstrukturer — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Grammar 10 — formal written structures". Retitled in Norwegian
// per CLAUDE.md → "No front language". Conventions are unit1.js §1–§9.
//
// WHAT THIS UNIT IS FOR. Written official Norwegian is not spoken Norwegian with
// longer words — it is built differently, and a learner who has only met the
// spoken language cannot read a letter from a kommune even when they know every
// word in it. The four lessons are the four things that actually make the
// difference:
//   l1  the heavy prepositional phrase that replaces a simple preposition
//   l2  the present participle used as an adjective (-ende)
//   l3  the back-reference words that hold a long paragraph together
//   l4  the impersonal verb that lets a sentence have no human subject at all
//
// ⚠ WHY -ende IS A LESSON AND NOT A DUPLICATE. u71l4 teaches adjective-building
// with u- and the invariant -lig/-ig endings; that is DERIVATION. This is a
// different thing: a present participle pressed into service as an adjective, and
// the reason it deserves its own lesson is that it is the single commonest way
// formal Norwegian avoids a relative clause — `den gjeldende regelen` instead of
// `regelen som gjelder nå`. u104 already put two of these in front of the learner
// (gripende, medrivende) without naming the pattern; this names it.
//
// ⚠ AND WHY THE l4 VERBS ARE NOT DUPLICATES EITHER. `å innebære` (u52) and
// `å omfatte` (u58) are already taught and mean close to what `å medføre` and
// `å utgjøre` mean. They are kept apart by REGISTER, which is the whole point of
// B2: innebære is what a person says, medføre is what a regulation says. Each
// hint names its everyday twin so the learner learns the PAIR, not a synonym.
//
// GENDER: no nouns are taught in this unit — four lessons of phrases, participles
// and verbs, so §1 does not arise. The participles in l2 are invariant: an -ende
// adjective never takes -t or -e.
//
// SCOPE: frozen base u1–u87 plus u101–u106 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT107 = {
  id: "no-u107",
  lang: "no",
  title: "Grammatikk 10: formelle skriftstrukturer",
  order: 107,
  stage: "b2",
  lessons: [
    // Lesson 1: the heavy preposition. Every one of these could be replaced by a
    // single small word, and in official writing none of them is.
    {
      id: "no-u107l1",
      unit: 107,
      lesson: 1,
      title: "Tunge forbindelser",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Open a formal sentence the way a Norwegian document does — with regard to, on the basis of, as a result of.",
      items: [
        { id: "no-u107l1-medhensyntil", type: "vocab", front: "med hensyn til", reading: "medhensyntil", meaning: "with regard to", example: { jp: "Med hensyn til prisen er vi enige.", en: "With regard to the price we are agreed." }, accept: ["regarding", "as to", "concerning"], drill: { jp: "Med hensyn til prisen er alt klart", en: "With regard to the price everything is clear" }, hint: "Built on et hensyn (u61). Often abbreviated mht. in writing. ⚠ THE FRONTED PHRASE FORCES V2: Med hensyn til prisen ER vi enige — the subject goes behind the verb (§4). Every card in this lesson does that." },
        { id: "no-u107l1-nardetgjelder", type: "vocab", front: "når det gjelder", reading: "nardetgjelder", meaning: "when it comes to", example: { jp: "Når det gjelder økonomien, må vi vente.", en: "When it comes to the economy, we have to wait." }, accept: ["as far as ... is concerned", "on the subject of"], drill: { jp: "Når det gjelder prisen er vi enige", en: "When it comes to the price we are agreed" }, hint: "From å gjelde (u32). ⚠ THE ONE IN THIS LESSON THAT IS NOT FORMAL — it is entirely at home in speech, and is the everyday twin of med hensyn til. Knowing which of the two a situation wants is exactly what B2 register means." },
        { id: "no-u107l1-iforbindelsemed", type: "vocab", front: "i forbindelse med", reading: "iforbindelsemed", meaning: "in connection with", example: { jp: "I forbindelse med saken kom det nye opplysninger.", en: "In connection with the case new information came in." }, accept: ["in relation to", "arising from"], drill: { jp: "I forbindelse med saken kom det svar", en: "In connection with the case answers came in" }, hint: "Abbreviated ifm. The workhorse of Norwegian officialdom: it links an action to an occasion without claiming either caused the other, which is precisely why administrators like it." },
        { id: "no-u107l1-pabakgrunnav", type: "vocab", front: "på bakgrunn av", reading: "pabakgrunnav", meaning: "on the basis of", example: { jp: "På bakgrunn av funnene tok de et nytt valg.", en: "On the basis of the findings they made a new choice." }, accept: ["in the light of", "based on"], drill: { jp: "På bakgrunn av dette sier vi nei", en: "On the basis of this we say no" }, hint: "en bakgrunn is a background. ⚠ CLAIMS A REASON, unlike i forbindelse med above, which deliberately does not. A decision truffet på bakgrunn av something is a decision that something caused." },
        { id: "no-u107l1-somfolgeav", type: "vocab", front: "som følge av", reading: "somfolgeav", meaning: "as a result of", example: { jp: "Som følge av flommen kom vi for sent.", en: "As a result of the flood we came too late." }, accept: ["in consequence of", "owing to"], drill: { jp: "Som følge av dette må vi vente", en: "As a result of this we have to wait" }, hint: "ei følge, a consequence — the noun behind følgelig (u108). The formal twin of på grunn av (u36). Note the ø fold in the reading (§3): somfolgeav." },
        { id: "no-u107l1-vedhjelpav", type: "vocab", front: "ved hjelp av", reading: "vedhjelpav", meaning: "by means of", example: { jp: "Ved hjelp av et nytt datagrunnlag ser de svaret.", en: "By means of a new body of data they see the answer." }, accept: ["with the help of", "using"], drill: { jp: "Ved hjelp av en plan klarte vi det", en: "By means of a plan we managed it" }, hint: "From å hjelpe (u11). Names the INSTRUMENT where the others name the occasion or the cause — the three together are how a formal Norwegian sentence says why, when and how without a single subordinate clause." },
      ],
    },
    // Lesson 2: the -ende participle as adjective. The single commonest way formal
    // Norwegian avoids writing a relative clause.
    {
      id: "no-u107l2",
      unit: 107,
      lesson: 2,
      title: "Partisipp som adjektiv",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Compress a whole relative clause into one word — the applicable rule, the following points, a decisive answer.",
      items: [
        { id: "no-u107l2-gjeldende", type: "vocab", front: "gjeldende", reading: "gjeldende", meaning: "applicable", example: { jp: "Dette er den gjeldende regelen nå.", en: "This is the applicable rule now." }, accept: ["in force", "current", "prevailing"], drill: { jp: "Denne regelen er gjeldende nå", en: "This rule is applicable now" }, hint: "⚠ THE RULE OF THIS LESSON: take a verb, add -ende, and you have an adjective that NEVER CHANGES — no -t, no -e, in any gender or number. From å gjelde (u32): gjeldende regler replaces reglene som gjelder." },
        { id: "no-u107l2-folgende", type: "vocab", front: "følgende", reading: "folgende", meaning: "the following", example: { jp: "Følgende regel gjelder for alle.", en: "The following rule applies to everyone." }, accept: ["these (listed below)", "hereafter listed"], drill: { jp: "Følgende regel gjelder her", en: "The following rule applies here" }, hint: "From å følge. ⚠ TAKES NO ARTICLE when it opens a list — følgende regler, not de følgende reglene. The word that introduces every bullet list in Norwegian officialdom. Note the ø fold (§3)." },
        { id: "no-u107l2-okende", type: "vocab", front: "økende", reading: "okende", meaning: "increasing", example: { jp: "Det er en økende uro i samfunnet.", en: "There is an increasing unease in society." }, accept: ["growing", "rising", "mounting"], drill: { jp: "Det er økende uro her", en: "There is increasing unease here" }, hint: "From å øke (u47). Invariant like the rest: et økende problem, økende priser. Note the ø fold in the reading (§3): okende." },
        { id: "no-u107l2-manglende", type: "vocab", front: "manglende", reading: "manglende", meaning: "lacking", example: { jp: "Manglende svar er et stort problem.", en: "A lacking answer is a big problem." }, accept: ["missing", "absent", "want of"], drill: { jp: "Manglende svar gir et avslag", en: "A missing answer gives a rejection" }, hint: "From å mangle, to lack. ⚠ NORWEGIAN USES THIS WHERE ENGLISH USES A NOUN: manglende dokumentasjon is \"lack of documentation\", not \"lacking documentation\". It is the standard first line of a Norwegian refusal letter." },
        { id: "no-u107l2-foreliggende", type: "vocab", front: "foreliggende", reading: "foreliggende", meaning: "available on hand", example: { jp: "Det foreliggende forslaget er godt.", en: "The proposal on hand is good." }, accept: ["present (this one)", "submitted", "before us"], drill: { jp: "Det foreliggende svaret er klart", en: "The answer on hand is clear" }, hint: "From å foreligge, which l4 teaches as a verb. Means \"the one that is actually in front of us\" as against one that might exist — a distinction Norwegian committees care about a great deal." },
        { id: "no-u107l2-avgjorende", type: "vocab", front: "avgjørende", reading: "avgjorende", meaning: "decisive", example: { jp: "Dette er et avgjørende valg for landet.", en: "This is a decisive choice for the country." }, accept: ["crucial", "critical", "determining"], drill: { jp: "Denne saken er avgjørende for oss", en: "This case is decisive for us" }, hint: "From å avgjøre, to decide. ⚠ THE COMMONEST OF ALL THESE IN ORDINARY SPEECH — det avgjørende er … is how a Norwegian says \"the crucial thing is\". Two ø folds in the reading (§3): avgjorende." },
      ],
    },
    // Lesson 3: holding a paragraph together. These words point BACKWARDS, and a
    // long formal paragraph is unreadable without them.
    {
      id: "no-u107l3",
      unit: 107,
      lesson: 3,
      title: "Å vise tilbake i teksten",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Refer back inside a long written sentence — to a whole clause, to part of a list, or to the person in question.",
      items: [
        { id: "no-u107l3-hvilket", type: "vocab", front: "hvilket", reading: "hvilket", meaning: "which (referring to a clause)", example: { jp: "Han kom for sent, hvilket var et problem.", en: "He came too late, which was a problem." }, accept: ["a fact which", "and this"], drill: { jp: "Han svarte ikke hvilket var et problem", en: "He did not answer, which was a problem" }, hint: "⚠ NOT THE SAME AS som (u29). som refers to a NOUN; hvilket refers to the WHOLE CLAUSE before it — the fact that he was late, not the lateness. Always neuter, because a clause has no gender. Formal writing only; speech says noe som." },
        { id: "no-u107l3-hvorav", type: "vocab", front: "hvorav", reading: "hvorav", meaning: "of which", example: { jp: "Vi fikk ti svar, hvorav tre var gode.", en: "We got ten answers, of which three were good." }, accept: ["among them", "whereof"], drill: { jp: "Vi fikk ti svar hvorav tre gode", en: "We got ten answers, three of them good" }, hint: "hvor + av, one of a small family of formal compounds — hvorav, hvorfor, hvordan, hvoretter. Used almost exclusively with numbers, and it is how every Norwegian statistic is written." },
        { id: "no-u107l3-sistnevnte", type: "vocab", front: "sistnevnte", reading: "sistnevnte", meaning: "the latter", example: { jp: "Begge forslag er gode, men sistnevnte er billigere.", en: "Both proposals are good, but the latter is cheaper." }, accept: ["the last mentioned", "the second of these"], drill: { jp: "Sistnevnte er det beste forslaget", en: "The latter is the best proposal" }, hint: "sist + nevnte, from å nevne — \"last named\". Invariant and always definite in sense, so it takes no article of its own: sistnevnte forslag, never det sistnevnte forslaget." },
        { id: "no-u107l3-forstnevnte", type: "vocab", front: "førstnevnte", reading: "forstnevnte", meaning: "the former", example: { jp: "Førstnevnte forslag kostet for mye.", en: "The former proposal cost too much." }, accept: ["the first mentioned", "the first of these"], drill: { jp: "Førstnevnte forslag var dyrere", en: "The former proposal was more expensive" }, hint: "The pair to sistnevnte, and Norwegian keeps them in that order — førstnevnte … sistnevnte — where English says \"the former … the latter\". Note the ø fold (§3): forstnevnte." },
        { id: "no-u107l3-vedkommende", type: "vocab", front: "vedkommende", reading: "vedkommende", meaning: "the person concerned", example: { jp: "Vedkommende har ikke svart på brevet.", en: "The person concerned has not answered the letter." }, accept: ["the individual in question", "said person"], drill: { jp: "Vedkommende må svare innen fristen", en: "The person concerned must answer by the deadline" }, hint: "⚠ AN -ende PARTICIPLE USED AS A NOUN — from å vedkomme, to concern. The standard way Norwegian officialdom refers to a person without naming them or choosing a gender, which makes it quietly useful as a neutral pronoun." },
        { id: "no-u107l3-herved", type: "vocab", front: "herved", reading: "herved", meaning: "hereby", example: { jp: "Vi bekrefter herved at du får plassen.", en: "We hereby confirm that you get the place." }, accept: ["by this means", "herewith"], drill: { jp: "Vi bekrefter herved at alt stemmer", en: "We hereby confirm that everything is correct" }, hint: "her + ved, like English \"hereby\" and just as ceremonious. ⚠ THE WORD DOES THE DEED: a sentence with herved in it is not describing an act of confirming, it IS the act. Norwegian keeps a whole set — herved, herav, herunder." },
      ],
    },
    // Lesson 4: the sentence with nobody in it. Each of these has an everyday twin
    // the learner already owns; the pair is the lesson.
    {
      id: "no-u107l4",
      unit: 107,
      lesson: 4,
      title: "Det formelle verbet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Write a sentence with no human subject — what exists, what something constitutes, and what a rule lays down.",
      items: [
        { id: "no-u107l4-aforeligge", type: "vocab", front: "å foreligge", reading: "aforeligge", meaning: "to be available formally", example: { jp: "Det foreligger et nytt forslag i saken.", en: "There is a new proposal in the case." }, accept: ["to exist (on record)", "to be to hand", "to be submitted"], drill: { jp: "Svaret ser ut til å foreligge nå", en: "The answer appears to be available now" }, hint: "⚠ ALMOST ALWAYS WITH det IN FRONT: det foreligger … . The formal twin of det finnes (u70l1). A Norwegian report says det foreligger ingen dokumentasjon where a person would say vi har ingen papirer." },
        { id: "no-u107l4-autgjore", type: "vocab", front: "å utgjøre", reading: "autgjore", meaning: "to constitute", example: { jp: "Disse tre delene utgjør hele avtalen.", en: "These three parts constitute the whole agreement." }, accept: ["to make up", "to amount to", "to come to"], drill: { jp: "Det er nok til å utgjøre en endring", en: "It is enough to constitute a change" }, hint: "ut + å gjøre. Also the verb for arithmetic — beløpet utgjør to tusen kroner. Its everyday twin is å være: delene ER hele avtalen says the same thing with no register at all. Note the ø fold (§3)." },
        { id: "no-u107l4-amedfore", type: "vocab", front: "å medføre", reading: "amedfore", meaning: "to bring with it", example: { jp: "Endringen vil medføre mye arbeid.", en: "The change will bring a lot of work with it." }, accept: ["to result in", "to carry with it", "to occasion"], drill: { jp: "En slik regel pleier å medføre problemer", en: "Such a rule tends to bring problems with it" }, hint: "med + å føre. ⚠ ITS EVERYDAY TWIN IS å innebære (u52) and they are NOT interchangeable in register: innebære is what a colleague says, medføre is what the regulation says. Learn the pair, not the word." },
        { id: "no-u107l4-afastsette", type: "vocab", front: "å fastsette", reading: "afastsette", meaning: "to lay down", example: { jp: "Staten fastsetter prisen på strøm.", en: "The state lays down the price of electricity." }, accept: ["to determine officially", "to set", "to stipulate"], drill: { jp: "Vi begynner å fastsette prisen nå", en: "We are beginning to set the price now" }, hint: "fast (u28) + å sette (u77) — to set something firm. ⚠ ONLY AN AUTHORITY CAN DO IT. You cannot fastsette your own bedtime; a ministry fastsetter a rate, a court fastsetter a penalty." },
        { id: "no-u107l4-aanga", type: "vocab", front: "å angå", reading: "aanga", meaning: "to concern", example: { jp: "Saken angår alle som bor her.", en: "The case concerns everyone who lives here." }, accept: ["to apply to", "to be of concern to"], drill: { jp: "Saken begynner å angå mange", en: "The case is beginning to concern many" }, hint: "⚠ ITS EVERYDAY TWIN IS å gjelde (u32), and there is a real difference: gjelde is about SCOPE — the rule applies to you — while angå is about INTEREST, whether it is any of your business. Det angår ikke deg is a rebuke." },
        { id: "no-u107l4-atilsi", type: "vocab", front: "å tilsi", reading: "atilsi", meaning: "to suggest of evidence", example: { jp: "Alt tilsier at prisen vil øke.", en: "Everything suggests that the price will rise." }, accept: ["to indicate", "to point to", "to dictate"], drill: { jp: "Alt ser ut til å tilsi det samme", en: "Everything appears to point to the same thing" }, hint: "til + å si. ⚠ ITS EVERYDAY TWIN IS å tyde på (u54). Subject is almost always an abstraction — alt, erfaring, tallene — never a person: a Norwegian report says erfaring tilsier at …, which is how it makes a claim without anyone making it." },
      ],
    },
  ],
};
