// NO Unit 73 — Stil 2: å mildne og ta forbehold ("Register 2 — softening") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Register 2 — softening and formality". Retitled in Norwegian
// per CLAUDE.md → "No front language". Conventions are unit1.js §1–§9.
//
// ⚠ BLOCK 1 OWNS u54 "Hedging and uncertainty", and this unit is deliberately
// NOT that. u54 is about how SURE you are of a fact. This unit is about how hard
// you are pushing in a conversation: turning a claim down a notch (l1), keeping
// an exit open (l2), refusing without hurting anybody (l3), and disagreeing
// while staying on good terms (l4). Where the two could collide — the
// probability adverbs — those are already spent in u69 and u71 (antakelig,
// trolig, sannsynligvis, visst, visstnok, sikkert), so nothing here is a second
// card for the same job.
//
// ⚠ MEANINGS ARE KEPT APART in l1, which is six words for "fairly": temmelig
// "fairly", nokså "rather", forholdsvis "comparatively", relativt "relatively",
// snarere "rather (correcting)", helst "preferably". `type:produce` prompts with
// the MEANING and grades against ONE front (no/unit14.js), so two cards glossed
// "rather" would punish a learner who knows both. Where English genuinely has
// one word, the hint says which Norwegian shade is meant.
//
// THE CULTURAL POINT, and it is why this unit exists at all: Norwegian softens
// with SMALL WORDS rather than with long constructions. English says "I was
// wondering whether it might perhaps be possible to…"; Norwegian says
// jeg lurte på om (u70) and then stops. A learner who imports the English
// scaffolding sounds insincere rather than polite.
//
// GENDER: et forbehold (neuter), et standpunkt (neuter), et hensyn (neuter).
// ⚠ `respekt` is a MASS noun and so is taught bare (unit1.js §1b); masculine,
// definite respekten. Corrected after the content gate, 2026-09-16.
// No feminine noun in this unit, so there is no en-/ei- note to carry.
//
// SCOPE: frozen base u1–u50 plus u63–u72 plus this unit's earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT73 = {
  id: "no-u73",
  lang: "no",
  title: "Stil 2: å mildne og ta forbehold",
  order: 73,
  stage: "b1",
  lessons: [
    // Lesson 1: six ways to turn an adjective down a notch.
    {
      id: "no-u73l1",
      unit: 73,
      lesson: 1,
      title: "Gradsord som mildner",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Turn a strong statement down a notch instead of stating it flat.",
      items: [
        { id: "no-u73l1-noksa", type: "vocab", front: "nokså", reading: "noksa", meaning: "somewhat", example: { jp: "Boka var nokså kjedelig.", en: "The book was rather boring." }, accept: ["rather", "fairly", "kind of"], drill: { jp: "Boka var nokså kjedelig", en: "The book was rather boring" }, hint: "nok (u10) + så. The same strength as temmelig, but it leans faintly negative — nokså dyr is a complaint, temmelig dyr is a measurement." },
        { id: "no-u73l1-forholdsvis", type: "vocab", front: "forholdsvis", reading: "forholdsvis", meaning: "comparatively", example: { jp: "Prisen er forholdsvis lav her.", en: "The price is comparatively low here." }, accept: ["relatively", "proportionally"], drill: { jp: "Prisen er forholdsvis lav her", en: "The price is comparatively low here" }, hint: "et forhold (u22) + -vis — measured against something else. It always implies a comparison, even when the other half is never said." },
        { id: "no-u73l1-relativt", type: "vocab", front: "relativt", reading: "relativt", meaning: "relatively", example: { jp: "Det er relativt billig i Norge nå.", en: "It is relatively cheap in Norway now." }, accept: ["comparatively", "fairly"], drill: { jp: "Det er relativt billig her", en: "It is relatively cheap here" }, hint: "The neuter of relativ used as an adverb — the loanword twin of forholdsvis, and the one you will hear in speech." },
        { id: "no-u73l1-snarere", type: "vocab", front: "snarere", reading: "snarere", meaning: "rather, correcting", example: { jp: "Det var ikke dyrt, snarere billig.", en: "It was not expensive — rather, it was cheap." }, accept: ["rather", "instead", "more like", "if anything"], drill: { jp: "Det var ikke dyrt snarere billig", en: "It was not expensive rather cheap" }, hint: "The comparative of snar, quick. It CORRECTS rather than softens: not X — snarere Y. snarere enn is \"rather than\"." },
        { id: "no-u73l1-helst", type: "vocab", front: "helst", reading: "helst", meaning: "preferably", example: { jp: "Jeg vil helst betale i dag.", en: "I would prefer to pay today." }, accept: ["ideally", "if possible", "rather"], drill: { jp: "Jeg vil helst betale i dag", en: "I would prefer to pay today" }, hint: "The top of a ladder you already have: gjerne (u37) – heller (u29) – helst. jeg vil helst is the politest way in Norwegian to state what you want." },
      ],
    },
    // Lesson 2: keeping an exit open.
    {
      id: "no-u73l2",
      unit: 73,
      lesson: 2,
      title: "Å ta forbehold",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Agree to something while leaving yourself a way out.",
      items: [
        { id: "no-u73l2-forbehold", type: "vocab", front: "et forbehold", reading: "etforbehold", meaning: "a reservation", example: { jp: "Vi sier ja, men med et forbehold.", en: "We are saying yes, but with a reservation." }, accept: ["reservation", "caveat", "proviso"], drill: { jp: "Vi sier ja med et forbehold", en: "We say yes with a reservation" }, hint: "for + å beholde, to keep back. Neuter: forbeholdet. The fixed phrase is å ta forbehold om noe." },
        { id: "no-u73l2-iutgangspunktet", type: "vocab", front: "i utgangspunktet", reading: "iutgangspunktet", meaning: "to begin with", example: { jp: "I utgangspunktet er det umulig.", en: "To begin with, it is impossible." }, accept: ["in principle", "initially", "as a starting point"], drill: { jp: "I utgangspunktet er det umulig", en: "To begin with it is impossible" }, hint: "et utgangspunkt, a starting point. ⚠ It quietly signals that an exception may follow — a Norwegian who says i utgangspunktet nei has not finished saying no." },
        { id: "no-u73l2-iprinsippet", type: "vocab", front: "i prinsippet", reading: "iprinsippet", meaning: "in principle", example: { jp: "I prinsippet kan alle søke.", en: "In principle everyone can apply." }, accept: ["theoretically", "in theory"], drill: { jp: "I prinsippet kan alle søke", en: "In principle everyone can apply" }, hint: "et prinsipp. Very close to i utgangspunktet — the difference is that i prinsippet is about the RULE and i utgangspunktet about the starting position." },
        { id: "no-u73l2-paenmate", type: "vocab", front: "på en måte", reading: "paenmate", meaning: "in a way", example: { jp: "Han hadde på en måte rett.", en: "In a way he was right." }, accept: ["sort of", "kind of", "in a sense"], drill: { jp: "Han hadde på en måte rett", en: "In a way he was right" }, hint: "en måte (u50). The hedge for half-agreeing, and it sits in the middle of the sentence rather than at the front." },
        { id: "no-u73l2-mereller", type: "vocab", front: "mer eller mindre", reading: "merellermindre", meaning: "give or take", example: { jp: "Arbeidet er mer eller mindre ferdig.", en: "The work is more or less finished." }, accept: ["roughly", "pretty much", "just about", "more or less"], drill: { jp: "Arbeidet er mer eller mindre ferdig", en: "The work is more or less finished" }, hint: "mer (u37) + eller (u12) + mindre (u37). Frozen, and used exactly as English uses it — one of the few places the two languages line up word for word." },
      ],
    },
    // Lesson 3: saying no. The Norwegian way is short and it does not apologise
    // twice.
    {
      id: "no-u73l3",
      unit: 73,
      lesson: 3,
      title: "Å si nei pent",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Turn something down without hurting anybody, in writing and in speech.",
      items: [
        { id: "no-u73l3-dessverre", type: "vocab", front: "dessverre", reading: "dessverre", meaning: "unfortunately", example: { jp: "Dessverre kan vi ikke hjelpe deg.", en: "Unfortunately we cannot help you." }, accept: ["sadly", "regrettably", "I'm afraid"], drill: { jp: "Dessverre kan vi ikke hjelpe deg", en: "Unfortunately we cannot help you" }, hint: "dess + verre (u37) — \"the worse for it\". Fronting it triggers V2: Dessverre KAN vi ikke. This single word does the work of an English sentence of apology." },
        { id: "no-u73l3-avsla", type: "vocab", front: "å avslå", reading: "aavsla", meaning: "to turn down", example: { jp: "Banken avslo søknaden hans.", en: "The bank rejected his application." }, accept: ["reject", "to turn down", "to refuse", "to decline", "to reject"], drill: { jp: "Det er tungt å avslå en søknad", en: "It is hard to reject an application" }, hint: "av + å slå (u44): avslår, avslo, har avslått. What an INSTITUTION does. A person takker nei — the next card." },
        { id: "no-u73l3-takkenei", type: "vocab", front: "å takke nei", reading: "atakkenei", meaning: "to decline", example: { jp: "Han takket nei til stillingen i Bergen.", en: "He declined the position in Bergen." }, accept: ["decline", "to say no thanks", "to turn down"], drill: { jp: "Det er lov å takke nei", en: "It is allowed to decline" }, hint: "å takke (from takk, u2) + nei. The polite personal refusal, and its mirror å takke ja is how you accept. Always with til: takke nei til noe." },
        { id: "no-u73l3-beklageligvis", type: "vocab", front: "beklageligvis", reading: "beklageligvis", meaning: "regrettably", example: { jp: "Beklageligvis er kontoret stengt.", en: "Regrettably the office is closed." }, accept: ["unfortunately", "sadly", "we regret that"], drill: { jp: "Beklageligvis er kontoret stengt i dag", en: "Regrettably the office is closed today" }, hint: "å beklage (u2) + -lig + -vis, the ending from u69's sannsynligvis. The written twin of dessverre, one register up." },
        { id: "no-u73l3-aavsta", type: "vocab", front: "å avstå", reading: "aavsta", meaning: "to abstain", example: { jp: "Jeg må dessverre avstå fra å svare på det.", en: "I unfortunately have to abstain from answering that." }, accept: ["to decline", "to refrain", "to give up"], drill: { jp: "Det er lov å avstå fra å svare", en: "It is allowed to abstain from answering" }, hint: "å avstå → avstår, avsto. Alltid å avstå FRA noe. Mer formelt enn å takke nei — brukes i møter og i skriftlige svar." },
      ],
    },
    // Lesson 4: disagreeing and staying friends. `saklig` is the key word of the
    // lesson and of Norwegian argument generally.
    {
      id: "no-u73l4",
      unit: 73,
      lesson: 4,
      title: "Å være uenig uten å krangle",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Disagree with somebody and keep the conversation civil.",
      items: [
        { id: "no-u73l4-saklig", type: "vocab", front: "saklig", reading: "saklig", meaning: "objective", example: { jp: "Praten var saklig og rolig.", en: "The conversation was objective and calm." }, accept: ["factual", "to the point", "matter-of-fact", "businesslike"], drill: { jp: "Praten var saklig og rolig", en: "The conversation was objective and calm" }, hint: "ei sak (u50) + -lig — sticking to the matter itself. The highest compliment in a Norwegian argument, and usaklig is close to an insult. -lig, so no -t in the neuter." },
        { id: "no-u73l4-nyansere", type: "vocab", front: "å nyansere", reading: "anyansere", meaning: "to qualify", example: { jp: "Han nyanserte påstanden sin etterpå.", en: "He qualified his claim afterwards." }, accept: ["qualify", "to nuance", "to add shades to"], drill: { jp: "Det er viktig å nyansere en påstand", en: "It is important to qualify a claim" }, hint: "nyanserer, nyanserte. To add the shades back to something you said too flatly — Norwegian reaches for this verb where English says \"to be fair\"." },
        { id: "no-u73l4-innvende", type: "vocab", front: "å innvende", reading: "ainnvende", meaning: "to object", example: { jp: "Ingen innvendte noe i dag.", en: "Nobody objected today." }, accept: ["object", "to raise an objection", "to counter"], drill: { jp: "Det er lov å innvende noe her", en: "It is allowed to object to something here" }, hint: "inn + å vende (u45). innvender, innvendte. The noun is ei innvending — an objection you state calmly, not a row." },
        { id: "no-u73l4-respekt", type: "vocab", front: "respekt", reading: "respekt", meaning: "respect", example: { jp: "Det er respekt for arbeidet hans.", en: "There is respect for his work." }, accept: ["a respect", "esteem", "regard"], drill: { jp: "Det er respekt for arbeidet hans", en: "There is respect for his work" }, hint: "⚠ A MASS noun, so no article on the card (unit1 §1b) — ha respekt for noen, never ha en respekt. Masculine, definite respekten. Takes for: respekt for noen. The verb å respektere works exactly as you would expect." },
        { id: "no-u73l4-apresisere", type: "vocab", front: "å presisere", reading: "apresisere", meaning: "to specify", example: { jp: "La meg presisere hva jeg mente med det.", en: "Let me specify what I meant by that." }, accept: ["to clarify", "to make precise", "to spell out"], drill: { jp: "Det er lurt å presisere hva du mener", en: "It is wise to specify what you mean" }, hint: "å presisere → presiserer, presiserte. Du sier det samme en gang til, men skarpere — et høflig trekk når noen har misforstått deg." },
      ],
    },
  ],
};
