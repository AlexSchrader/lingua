// NO Unit 51 — Meninger og enighet ("Opinions and agreement") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Opinion and agreement"; retitled per CLAUDE.md → "No front
// language". FIRST UNIT OF NORWEGIAN B1 and the first of block 1 (u51–u62).
//
// ⚠️⚠️ BLOCKS 2 (u63–u75) AND 3 (u76–u87): READ THIS HEADER BEFORE YOU AUTHOR.
// `src/data/no/unit1.js` §1–§9 is the LANGUAGE-wide contract and still binds you
// — gender marking, the å-infinitive and its two exceptions, the ø fold, V2, the
// example-scope rule. THIS header is the BAND-wide contract: the calls block 1
// made for B1 that unit1.js could not have anticipated, plus the measurements
// you would otherwise have to redo. Where the two disagree, unit1.js wins and
// this file is wrong — tell the lead.
//
// ─────────────────────────────────────────────────────────────────────────────
// B1 CONVENTIONS — settled by block 1, binding on u51–u87.
// ─────────────────────────────────────────────────────────────────────────────
//
// B1. THE FROZEN BASE IS 1208 WORDS AND IT HAS EATEN YOUR OBVIOUS SLOT WORDS.
//     Norwegian A1+A2 is fully authored (u1–u50, 1208 fronts). Run
//     `npm run taught -- no` and read `src/data/no/TAUGHT-WORDS.md` BEFORE you
//     design a unit, not after. MEASURED on block 1's first draft: the A2 band
//     had already taken en grunn, et resultat, ei løsning, en prosess, en regel,
//     en plikt, ei beslutning, en plan, en hensikt, ei utvikling, ei endring,
//     en mulighet, ei avis, en journalist, en redaktør, ei overskrift, en
//     artikkel, et samfunn, en borger, en politiker, en kommune, en stat — plus
//     the WHOLE A2 connective layer (derfor, fordi, på grunn av, dermed,
//     likevel, imidlertid, derimot, dessuten, altså, nemlig, for eksempel,
//     det vil si, takket være, til tross for, bortsett fra, i tillegg,
//     i stedet for, så lenge, så snart, dersom, med mindre, selv om, uansett).
//     ⚠️ SO A B1 SLOT IS NOT THE A2 SLOT AGAIN — IT IS THE LAYER ABOVE IT.
//     "Opinion" at A2 was å mene / å synes / ei holdning. At B1 it is the moves
//     you make WITH an opinion: å hevde, å innvende, å avvise, å overbevise,
//     å samtykke. Design the unit from what is LEFT, and retheme the slot when
//     the concrete layer is spent. Block 1 rethemed four slots this way and says
//     so in each unit's header.
//
// B2. PREFIXED AND COMPOUND VERBS ARE DISTINCT LEXEMES. THIS IS THE ONE RULING
//     THAT MAKES A NORWEGIAN B1 BAND AUTHORABLE AT ALL, so it is written down
//     rather than left to each seat.
//     Norwegian builds most of its B1 verb stock by prefixing a core verb:
//     å se → å innse, å gi → å gjengi, å ta → å overta / å avta, å vinne →
//     å overvinne, å søke → å undersøke, å nå → å oppnå, å vente → å forvente,
//     å regne → å beregne, å passe → å tilpasse, å bestemme → å ombestemme.
//     ✅ THE CORPUS ALREADY DOES THIS AND IT IS NOT A DEFECT: A2 teaches
//     `å innse` alongside A1's `å se`, and `å avbryte`, `å innrømme`, `å utsette`
//     and `å oppleve` all sit beside their bare stems. A prefixed verb carries a
//     meaning the stem does not, so it is new learning and it is a new card.
//     ❌ WHAT IS **NOT** LICENSED BY THIS, and what §6 of the RUNBOOK actually
//     means by "compare LEXEMES, not strings": a TRANSPARENT derivation that
//     adds nothing. Block 1 REJECTED all of these on that test —
//         ei mening   (← å mene, taught)          same meaning, no new learning
//         å løse      (← ei løsning, taught)      same meaning, no new learning
//         å bevise    (← et bevis, taught)        same meaning, no new learning
//         ei ordning  (← å ordne, taught)         same meaning, no new learning
//         å melde     (← ei melding, taught)      same meaning, no new learning
//         ansvarlig   (← et ansvar, taught)       same meaning, no new learning
//         ei tjeneste (← å tjene, taught)         same meaning, no new learning
//     THE TEST IS SEMANTIC, NOT MORPHOLOGICAL: does the learner who owns the
//     taught word already own this one? If yes, it is not a card — use it in an
//     example instead and let the inflection rule (§6) cover you.
//     ⚠️ TWO BORDERLINE CALLS BLOCK 1 MADE **KNOWINGLY**, named so you can
//     overrule them rather than rediscover them:
//       • `å holde` (u59l4) is taught even though A2 already teaches `ei holdning`.
//         The noun means *attitude* and the verb means *to hold*; a learner who
//         owns "holdning" cannot produce "hold døra". It is too core to omit.
//       • `å bryte` (u61l1) is taught even though A2 teaches `å avbryte`. Same
//         argument in reverse: breaking a rule is not interrupting a person.
//     ⚠️ AND ONE STEM BLOCK 1 USED THREE TIMES ON PURPOSE: `å virke` (u54l1,
//     *to seem*) and `en virkelighet` (u58l4, *reality*). Related in the
//     dictionary, unrelated in the learner's head. `ei virkning` was CUT for
//     this reason and replaced by `en effekt`.
//
// B3. MULTIWORD CONNECTIVES ARE SINGLE FRONTS — AND THE CORPUS SETTLED THIS
//     BEFORE B1 EXISTED. unit1.js §7 freezes greeting formulas and warns you not
//     to extend the licence to ordinary compounds. That warning is about
//     COMPOUNDS, not about the connective layer: A2 already teaches `på grunn av`
//     (which contains the taught `en grunn`), `i stedet for` (which contains the
//     taught `et sted`), `til tross for`, `i hvert fall`, `av og til`, `etter å ha`
//     and `det vil si` as single fronts. B1's own job IS that layer, so block 1
//     teaches `i forhold til`, `i så fall`, `stort sett`, `etter hvert`,
//     `på forhånd`, `på sikt`, `å regne med`, `å si opp`, `å gi opp` and
//     `å se fram til` the same way. They are one thing in the learner's mouth.
//     ⚠️ A MULTIWORD FRONT STILL NEEDS A DRILL CONTAINING IT VERBATIM, and
//     `findWholeWord` matches the WHOLE front — so the words must be contiguous
//     and in that order. "Jeg regner ikke med det" does NOT contain `å regne med`.
//     Block 1 wrote every such drill through an å-taking frame (see B5).
//
// B4. GENDER, RESTATED FOR THE SUFFIX CLASSES B1 IS MADE OF. unit1.js §1 binds;
//     this is the part that bites at B1, where nearly every new noun is abstract:
//         -het   MASCULINE only   en frihet, en rettighet, en virkelighet,
//                                 en sikkerhet — there is no *friheta
//         -else  MASCULINE only   en hendelse, en betingelse
//         -ing / -ning  FEMININE  ei oppfatning, ei regjering, ei befolkning,
//                                 ei belastning, ei utfordring, ei opplysning,
//                                 ei ytring, ei rekkefølge is NOT one of these
//                                 (it is -e, and it is feminine anyway)
//     Everything else is decided word by word and named in the hint.
//     ⚠️ AND PUT THE en-/ei- RECOGNITION NOTE ON THE FIRST FEMININE OF EVERY
//     UNIT (unit1.js §1). Block 1 did it in all twelve. It costs one clause and
//     it is what lets the learner read `oppfatningen` in a newspaper.
//
// B5. THE Å-FRAME LIST, RE-MEASURED FOR B1 — USE THIS, NOT unit1.js's.
//     unit1.js §5 lists four safe frames "as the corpus stands (336 fronts,
//     blocks 1+2)". That was the A1 corpus. Against the full 1208-word base the
//     list is much longer, and every one of these frame verbs is TAUGHT, so the
//     example is in scope anywhere in B1:
//         Det er viktig å …   Det er lett å …   Det er godt å …
//         … pleier å …        … prøver å …      … begynner å …
//         … fortsetter å …    … slutter å …     … liker å …
//         … håper å …         … klarer å …      … nekter å …
//         … trenger å …       uten å …          for å …       ved å …
//     ⚠️ THE MODAL TRAP FROM unit1.js §5 IS STILL LIVE AND STILL COSTS CARDS:
//     Norwegian DROPS the å after kan/vil/skal/må/bør, so "Vi må bekrefte
//     avtalen" does NOT contain the front `å bekrefte` and the drill is dead.
//     Every one of block 1's 138 å-verb drills uses a frame from the list above.
//     Measured on block 1: 288/288 drills contain their front verbatim, 288/288
//     are 3–8 tokens, 288/288 are free of interior punctuation.
//
// B6. DRILL SHAPE, THE MECHANICAL PART. A drill is a SECOND sentence, not the
//     example again. Block 1's house rules, all machine-checked before hand-back:
//       • contains the front VERBATIM as whole words (`findWholeWord`);
//       • 3–8 space-separated tokens (`sentenceTokens` returns null outside that);
//       • NO punctuation at all — not even a final period. A trailing one is
//         stripped, but an interior `.` `!` `?` `…` `—` `–` kills the card, and
//         writing none is the rule that cannot be got wrong;
//       • never byte-identical to the example, and never the example minus a
//         word. (71 French drills on `main` are exactly that and teach nothing.)
//
// B7. EXAMPLE SCOPE. unit1.js §6 binds: only vocab taught at or before this unit,
//     plus the FREE list. Your own unit's words count from your own unit onward —
//     but NOT a later unit of your own block. Block 1 checked this by hand per
//     unit; `node scripts/check-lang-scope.mjs no` reads every `// FREE:` line in
//     the language, so declare yours in YOUR unit rather than editing unit1.js.
//   FREE: Norden | politikk, demokrati, prosent, million, dokument, sekretær, direktør
//
// B8. WHAT BLOCK 1 DELIBERATELY DID NOT TEACH, AND LEFT FOR YOU. These are core
//     verbs and words the A1/A2 band never took and block 1 had no honest slot
//     for. They are the highest-value fronts still free in Norwegian — take them
//     before you reach for a cognate:
//         å legge (to lay)      å sette (to set)      å nå (to reach)
//         å bære (to carry)     å falle (to fall)     en forbruker (consumer)
//         et minne / ei hukommelse — RESERVED for block 2's u63 (memory)
//     ⚠️ `å løse`, `ei mening`, `å bevise`, `å melde`, `ansvarlig` are NOT on
//     this list — they are the rejected transparent derivations of B2 and must
//     stay untaught.
//
// B9. THE HAZARD YOUR BLOCK SPECIFICALLY FACES. Block 1 authored u51–u62 and
//     these are the collisions it can see coming that you cannot.
//
//     ⚠️ BLOCK 2 (u63–u75) — FOUR OF YOUR THIRTEEN SLOTS ARE PARTLY SPENT:
//       • u71 "Grammar 8 — nuance, EVIDENTIALITY, nominalization". Block 1 took
//         the whole evidentiality layer in u54: å virke, å anta, sannsynlig,
//         antakelig, visstnok, tilsynelatende, ifølge, angivelig, en kilde,
//         ei opplysning, å stole, pålitelig. RETHEME u71 to what is left —
//         NOMINALIZATION is untouched and is the richer half anyway: the
//         productive -else / -ing / -het / -sjon derivation patterns as a system.
//         ⚠️ AND `jo` IS GONE — block 1 teaches it in u53l2 as the jo … desto
//         correlative. The modal particles `nok`, `da`, `vel` are still free and
//         are the best remaining nuance material in the language.
//       • u70 "Grammar 7 — PASSIVE". Block 1 took the band's only two lexicalized
//         s-verbs, `å skyldes` (u52l1) and `å lykkes` (u60l4), and both hints
//         already explain that an s-verb has no conjugation. The s-PASSIVE proper
//         is yours — but note it is a PATTERN, not new lexemes: `gjøres`, `bygges`
//         and `selges` are transparent derivations of taught verbs and B2 rejects
//         them as cards. Teach it through the genuinely lexicalized ones (å
//         finnes, å trives, å møtes) and model the rest in examples.
//       • u66 "Money": block 1 took fattig, rik, en velferd, å beregne, et press.
//         A2 already had ei krone, en pris, en rabatt, ei lønn, en konto,
//         ei regning, en rente, et budsjett, kontant, gratis.
//       • u67 "Health": block 1 took ei belastning, stresset, å frykte, å plage,
//         rastløs, trygg. A2 had en lege, en pasient, en medisin, ei behandling,
//         ei bedring, en resept, et sykehus, et blodtrykk, feber, helse, frisk,
//         syk, en smerte, en forkjølelse.
//       • ✅ RESERVED FOR YOU, untouched on purpose: `et minne` and `ei
//         hukommelse` for u63 (memory). Block 1 stayed out of that slot entirely.
//
//     ⚠️ BLOCK 3 (u76–u87) — YOUR TWELVE SLOTS HAVE NO THEME AT ALL. They are
//     scaffolded "Vocabulary 3 (B1)" … "Vocabulary 14 (B1)", which is a slot
//     number and not an instruction. You CHOOSE the twelve themes, and the only
//     way to choose badly is to choose one that is already spent. Before you
//     commit to a theme, check it against BOTH: `npm run taught -- no` (the
//     1208-word A1+A2 base) AND block 1's 288 fronts in u51–u62. The themes
//     block 1 has consumed are: opinion · cause · comparison · doubt · news and
//     society · work · emotion · abstraction · time and change · problems ·
//     law and etiquette · plans.
//     ✅ AND START FROM B8's FREE-VERB LIST — å legge, å sette, å nå, å bære,
//     å falle are all top-50 Norwegian verbs that the whole A1+A2+B1-block-1
//     corpus never took. A coverage unit built on those is worth more than one
//     built on cognates.
//
// ─────────────────────────────────────────────────────────────────────────────
// THIS UNIT
// ─────────────────────────────────────────────────────────────────────────────
// A2 spent the opinion slot on the bare act of having one: å mene, å synes,
// å tro, ei holdning, å diskutere, å påstå, å understreke, å krangle, å klage,
// å rose. So u51 takes the MOVES you make with an opinion — stake it out (l1),
// push back on someone else's (l2), come to agreement (l3), and say how hard
// you feel it (l4). Nothing here re-teaches "to think".
//
// FIRST FEMININE of the unit is `ei oppfatning` (l1) and it carries the en-/ei-
// recognition note B4 requires.
//
// ø IN `reading` IS HAND-FOLDED TO o (unit1.js §3). This unit has none.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT51 = {
  id: "no-u51",
  lang: "no",
  title: "Meninger og enighet",
  order: 51,
  stage: "b1",
  lessons: [
    // Lesson 1: staking out a position. et standpunkt is first because the other
    // five lessons of the unit all point back at it — you agree with one, object
    // to one, defend one. enig follows immediately so the learner can DO
    // something with it on the same screen.
    {
      id: "no-u51l1",
      unit: 51,
      lesson: 1,
      title: "Å ta standpunkt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "State a position and stand behind it — say you agree, claim something is so, point out what others missed, and make your view clear enough to argue with.",
      items: [
        { id: "no-u51l1-etstandpunkt", type: "vocab", front: "et standpunkt", reading: "etstandpunkt", meaning: "standpoint", example: { jp: "Erling har et standpunkt, og han forklarer det godt.", en: "Erling has a standpoint, and he explains it well." }, drill: { jp: "Hun har et standpunkt om saka", en: "She has a standpoint on the matter" }, accept: ["a standpoint", "a position", "a stance", "a view"], hint: "STAND-punkt. Neuter: definite standpunktet, plural standpunkter. Stand plus punkt — the point you stand on. Å ta standpunkt til noe is to make up your mind about it." },
        { id: "no-u51l1-enig", type: "vocab", front: "enig", reading: "enig", meaning: "in agreement", example: { jp: "Jeg er enig med deg i denne saka.", en: "I agree with you on this matter." }, drill: { jp: "Erling er enig med meg", en: "Erling agrees with me" }, accept: ["agreed", "agree", "of the same opinion", "in agreement"], hint: "EH-ni — the g of -ig is silent, exactly as in hyggelig. You are enig MED a person and enig I a matter. ⚠ It takes an ending in the plural: én person er enig, to personer er enige." },
        { id: "no-u51l1-ahevde", type: "vocab", front: "å hevde", reading: "ahevde", meaning: "to assert", example: { jp: "Han hevder at prisen er altfor høy.", en: "He claims that the price is far too high." }, drill: { jp: "Det er lett å hevde noe her", en: "It is easy to claim something here" }, accept: ["claim", "to assert", "assert", "to maintain", "to claim"], hint: "HEV-de. Present hevder, past hevdet. Stronger than å si and weaker than å bevise: you put a claim forward and it is on you to back it up." },
        { id: "no-u51l1-eioppfatning", type: "vocab", front: "ei oppfatning", reading: "eioppfatning", meaning: "perception", example: { jp: "Min oppfatning er at været blir bedre.", en: "My perception is that the weather is getting better." }, drill: { jp: "Vi har ei oppfatning av saka", en: "We have a perception of the matter" }, accept: ["a perception", "an understanding", "a view", "an impression"], hint: "OPP-fat-ning. Feminine: definite oppfatninga, plural oppfatninger. You will also meet it written ei oppfatning / oppfatningen — Bokmål allows both, and print uses the en- form a lot. This course always writes ei, because ei is what tells you the definite ends in -a. Opp plus fatte, to grasp: what you have taken in, not what you have decided." },
        { id: "no-u51l1-tydelig", type: "vocab", front: "tydelig", reading: "tydelig", meaning: "distinct (plain)", example: { jp: "Det er tydelig at han er sint i dag.", en: "It is clear that he is angry today." }, drill: { jp: "Han skriver et tydelig brev", en: "He writes a clear letter" }, accept: ["evident", "obvious", "distinct", "plain", "clear"], hint: "TUE-de-li — silent g again. Klar is clear as in ready, or see-through; tydelig is clear as in easy to make out. Neuter tydelig, plural tydelige." },
        { id: "no-u51l1-apapeke", type: "vocab", front: "å påpeke", reading: "apapeke", meaning: "to point out", example: { jp: "Læreren påpeker en feil i oppgaven.", en: "The teacher points out a mistake in the assignment." }, drill: { jp: "Det er viktig å påpeke en feil", en: "It is important to point out a mistake" }, accept: ["point out", "to note", "to indicate", "to remark"], hint: "PAW-pe-ke. På plus peke, to point at — you put your finger on the thing and name it. Present påpeker, past påpekte." },
      ],
    },
    // Lesson 2: pushing back. uenig opens it as the mirror of l1's enig, which is
    // also where the learner meets the u- prefix doing the same job it does in
    // sikker → usikker (both taught in A2). The rest are the four things you
    // actually do in a disagreement: object, reject, convince, and call out an
    // exaggeration.
    {
      id: "no-u51l2",
      unit: 51,
      lesson: 2,
      title: "Å si seg uenig",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Push back on what someone just said — disagree, raise an objection, turn a proposal down, win someone over, and say when they are laying it on thick.",
      items: [
        { id: "no-u51l2-uenig", type: "vocab", front: "uenig", reading: "uenig", meaning: "in disagreement", example: { jp: "Kari er uenig med Erling om dette.", en: "Kari disagrees with Erling about this." }, drill: { jp: "Jeg er uenig i det standpunktet", en: "I disagree with that standpoint" }, accept: ["disagreeing", "disagree", "not in agreement", "opposed"], hint: "U-eh-ni. The u- in front flips the word over, exactly as it does in sikker → usikker: enig becomes uenig. Same ending rule — én er uenig, to er uenige." },
        { id: "no-u51l2-aoverbevise", type: "vocab", front: "å overbevise", reading: "aoverbevise", meaning: "to convince", example: { jp: "Erling overbeviser alle med et godt eksempel.", en: "Erling convinces everyone with a good example." }, drill: { jp: "Det er lett å overbevise en venn", en: "It is easy to convince a friend" }, accept: ["convince", "to persuade", "persuade"], hint: "O-ver-be-VI-se. Over plus bevise, to prove over — you carry the other person across to your side. Present overbeviser, past overbeviste. Overbevist is the adjective: jeg er overbevist." },
        { id: "no-u51l2-aavvise", type: "vocab", front: "å avvise", reading: "aavvise", meaning: "to reject", example: { jp: "Sjefen avviser forslaget i dag.", en: "The boss rejects the proposal today." }, drill: { jp: "Det er lett å avvise et forslag", en: "It is easy to reject a proposal" }, accept: ["reject", "to turn down", "turn down", "to dismiss"], hint: "AV-vi-se. Av plus vise, to show away — you send the idea back out the door. Present avviser, past avviste. Stronger than å si nei: you reject the thing itself, not just this once." },
        { id: "no-u51l2-aoverdrive", type: "vocab", front: "å overdrive", reading: "aoverdrive", meaning: "to exaggerate", example: { jp: "Han overdriver alltid når han forteller.", en: "He always exaggerates when he tells a story." }, drill: { jp: "Det er lett å overdrive ei historie", en: "It is easy to exaggerate a story" }, accept: ["exaggerate", "to overstate", "overstate", "to lay it on"], hint: "O-ver-dri-ve. Over plus drive — you drive the story past the point where it is still true. Present overdriver, past overdrev. Du overdriver! is the everyday \"oh come on, it wasn't that bad\"." },
        { id: "no-u51l2-delvis", type: "vocab", front: "delvis", reading: "delvis", meaning: "partly", example: { jp: "Jeg er delvis enig med deg i dette.", en: "I partly agree with you on this." }, drill: { jp: "Planen er delvis ferdig nå", en: "The plan is partly finished now" }, accept: ["partially", "in part", "to some extent"], hint: "DEL-vis. En del plus -vis, \"in the manner of a part\" — the same -vis that makes vanligvis, usually. Not the same as litt: delvis means some of it is true, litt means a small amount of it." },
      ],
    },
    // Lesson 3: coming to agreement, and the two words English blurs into one.
    // riktig and sann sit side by side on purpose — a correct answer and a true
    // story are not the same claim, and Norwegian keeps them apart.
    {
      id: "no-u51l3",
      unit: 51,
      lesson: 3,
      title: "Å komme til enighet",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Settle on an answer together — accept a proposal, tell correct from true, name what you have in common, confirm a fact, and give your consent.",
      items: [
        { id: "no-u51l3-agodta", type: "vocab", front: "å godta", reading: "agodta", meaning: "to accept", example: { jp: "Vi godtar forslaget fra Kari.", en: "We accept the proposal from Kari." }, drill: { jp: "Det er lett å godta et godt forslag", en: "It is easy to accept a good proposal" }, accept: ["accept", "to agree to", "to approve", "approve"], hint: "GO-ta — the d is silent, as in god. God plus ta: to take as good. Present godtar, past godtok. You godtar a rule or an answer; a boss godkjenner a form." },
        { id: "no-u51l3-riktig", type: "vocab", front: "riktig", reading: "riktig", meaning: "correct", example: { jp: "Klokka er riktig, og vi rekker toget.", en: "The clock is correct, and we will catch the train." }, drill: { jp: "Læreren sier at alt er riktig", en: "The teacher says that everything is correct" }, accept: ["right", "accurate", "proper", "true"], hint: "RIK-ti — silent g. Riktig is correct as in not wrong; rett is right as in the right one of two. Neuter riktig, plural riktige." },
        { id: "no-u51l3-sann", type: "vocab", front: "sann", reading: "sann", meaning: "true", example: { jp: "Historien er sann, og alle kjenner den.", en: "The story is true, and everyone knows it." }, drill: { jp: "Det er ei sann historie", en: "That is a true story" }, accept: ["truthful", "real", "genuine"], hint: "SANN. Sann is true as in it really happened; riktig is correct as in it matches the answer. Neuter sant, plural sanne — and a tacked-on \"…, sant?\" is the Norwegian \"…, right?\"" },
        { id: "no-u51l3-felles", type: "vocab", front: "felles", reading: "felles", meaning: "shared", example: { jp: "Vi har et felles mål i dette prosjektet.", en: "We have a shared goal in this project." }, drill: { jp: "De har et felles problem", en: "They have a shared problem" }, accept: ["common", "joint", "mutual", "in common"], hint: "FEL-les. It never changes — et felles mål, ei felles sak, felles venner. One of the very few Norwegian adjectives with no endings at all. Å ha noe felles is to have something in common." },
        { id: "no-u51l3-abekrefte", type: "vocab", front: "å bekrefte", reading: "abekrefte", meaning: "to confirm", example: { jp: "Hotellet bekrefter at rommet er ledig.", en: "The hotel confirms that the room is available." }, drill: { jp: "Det er viktig å bekrefte en avtale", en: "It is important to confirm an appointment" }, accept: ["confirm", "to verify", "verify", "to acknowledge"], hint: "be-KREF-te. Be- plus kraft, strength — you put strength behind something that was only said. Present bekrefter, past bekreftet." },
        { id: "no-u51l3-asamtykke", type: "vocab", front: "å samtykke", reading: "asamtykke", meaning: "to consent", example: { jp: "Legen samtykker, og pasienten får medisin.", en: "The doctor consents, and the patient gets medicine." }, drill: { jp: "Det er lett å samtykke i noe", en: "It is easy to consent to something" }, accept: ["consent", "to give consent", "to assent", "to agree formally"], hint: "SAM-tuek-ke. Sam, together, plus an old word tykke, to think — to think the same thing. Present samtykker, past samtykket. More formal than å være enig: you give permission as well as agreement." },
      ],
    },
    // Lesson 4: how HARD you hold the opinion, which is the half A2 never touched.
    // likegyldig is the floor and å beundre the ceiling; en fordom is the opinion
    // you did not earn, and å forsvare is what you do when someone comes for it.
    {
      id: "no-u51l4",
      unit: 51,
      lesson: 4,
      title: "Sterke meninger",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how strongly you hold a view — criticise it, admire it, impress someone with it, admit you don't care, name a prejudice, and defend what you believe.",
      items: [
        { id: "no-u51l4-akritisere", type: "vocab", front: "å kritisere", reading: "akritisere", meaning: "to criticise", example: { jp: "Avisa kritiserer politikeren hver dag.", en: "The newspaper criticises the politician every day." }, drill: { jp: "Han begynner å kritisere sjefen", en: "He starts to criticise the boss" }, accept: ["criticise", "criticize", "to review", "to find fault with"], hint: "kri-ti-SE-re. Present kritiserer, past kritiserte. It covers both the cross kind and the newspaper kind — en kritiker reviews a film without being angry about it." },
        { id: "no-u51l4-abeundre", type: "vocab", front: "å beundre", reading: "abeundre", meaning: "to admire", example: { jp: "Jeg beundrer alle som lærer et nytt språk.", en: "I admire everyone who learns a new language." }, drill: { jp: "Det er lett å beundre en kunstner", en: "It is easy to admire an artist" }, accept: ["admire", "to look up to", "to esteem"], hint: "be-UN-dre. Present beundrer, past beundret. Warmer than å like and quieter than å elske: you look up at someone and think they did it well." },
        { id: "no-u51l4-aimponere", type: "vocab", front: "å imponere", reading: "aimponere", meaning: "to impress", example: { jp: "Erling imponerer sjefen med et godt resultat.", en: "Erling impresses the boss with a good result." }, drill: { jp: "Han prøver å imponere alle her", en: "He is trying to impress everyone here" }, accept: ["impress", "to make an impression", "to wow"], hint: "im-po-NE-re. Present imponerer, past imponerte. Imponert is the adjective you will say far more often: jeg er imponert." },
        { id: "no-u51l4-likegyldig", type: "vocab", front: "likegyldig", reading: "likegyldig", meaning: "indifferent", example: { jp: "Han er likegyldig til musikk og kunst.", en: "He is indifferent to music and art." }, drill: { jp: "Hun er likegyldig til hele saka", en: "She is indifferent to the whole matter" }, accept: ["indifferent", "apathetic", "uninterested", "does not care"], hint: "LI-ke-guel-di. Like, equally, plus gyldig, valid — every option is equally valid, so none of them matters. Neuter likegyldig, plural likegyldige. Det er meg likegyldig is the chilly Norwegian \"I couldn't care less\"." },
        { id: "no-u51l4-enfordom", type: "vocab", front: "en fordom", reading: "enfordom", meaning: "prejudice", example: { jp: "En fordom kommer før du kjenner en person.", en: "A prejudice comes before you know a person." }, drill: { jp: "Mange har en fordom om Norge", en: "Many people have a prejudice about Norway" }, accept: ["a prejudice", "a preconception", "a bias"], hint: "FOR-dom. Masculine: definite fordommen, plural fordommer. For, before, plus dom, judgement — the judgement you pass before you know. The plural fordommer is the everyday form." },
        { id: "no-u51l4-aforsvare", type: "vocab", front: "å forsvare", reading: "aforsvare", meaning: "to defend", example: { jp: "Hun forsvarer standpunktet sitt i avisa.", en: "She defends her standpoint in the newspaper." }, drill: { jp: "Det er viktig å forsvare en venn", en: "It is important to defend a friend" }, accept: ["defend", "to stand up for", "stand up for", "to justify"], hint: "for-SVA-re. For plus svare, to answer for — you answer on behalf of what you believe. Present forsvarer, past forsvarte. You forsvarer an opinion, a friend, or a goal in football." },
      ],
    },
  ],
};
