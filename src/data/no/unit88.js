// NO Unit 88 — Argumentasjon og overtaling (slot: argument) — B2
// ═════════════════════════════════════════════════════════════════════════════
// FIRST UNIT OF NORWEGIAN B2, and the BAND CONSTITUTION for it. Blocks 2
// (u101–u113) and 3 (u114–u126) are told to read this header before authoring.
// `no/unit1.js` §1–§9 is the LANGUAGE-wide contract and `no/unit51.js` B1–B9 is
// the B1 one; BOTH still bind. Everything below is what B2 ADDS. Where this file
// disagrees with unit1.js, unit1.js wins and this file is wrong — tell the lead.
//
// ─── C1. WHAT CARRIES OVER UNCHANGED (do not re-derive it) ──────────────────
//   - NOUN FRONTS CARRY en / ei / et (unit1.js §1). -het and -else are ALWAYS
//     masculine (en enighet, en forpliktelse); -ing / -ning are ALWAYS feminine
//     (ei avstemning, ei tolkning). Mass and plural-only nouns go bare.
//   - VERBS ARE HEADWORDED å + infinitive (unit1.js §2), with the two documented
//     exceptions `heter` and `bør`. No third case appeared in this block.
//   - `reading` IS THE ASCII ANSWER KEY and **ø DOES NOT FOLD ITSELF** — write
//     it by hand, ø→o: å imøtegå → "aimotega", å drøfte → "adrofte", ei høring →
//     "eihoring", et sykefravær → "etsykefravaer". å→a and æ→ae fold themselves,
//     but this block hand-folds all three so the corpus reads consistently.
//   - `example.jp` holds the NORWEGIAN sentence, `example.en` the English gloss.
//   - Examples use only vocab taught at or before this unit, plus the `// FREE:`
//     lines every unit may declare for itself.
//
// ─── C2. WHAT B2 CHANGES ABOVE B1 ───────────────────────────────────────────
//   (a) A B1 example is two clauses that CONTINUE. A B2 example is two clauses
//       that ARGUE: the second qualifies, concedes to or undercuts the first.
//       "Argumentet er godt, men det bygger på et premiss ingen har sett på" is
//       B2; "Argumentet er godt og alle er enige" is a longer B1 sentence.
//   (b) THE VOCABULARY IS META, NOT TOPICAL. B1 named things in the world; B2
//       names the MOVES people make — å medgi, å imøtegå, å tilbakevise, å
//       nyansere. Phrase the `canDo` as a move ("concede a point without losing
//       the argument"), never as a topic ("learn words about arguing").
//   (c) PRECISION OVER RANGE. At B2 the near-synonym IS the lesson. å tilbakevise
//       (show the claim back to its owner) / å imøtegå (answer it point by point)
//       / å bestride (refuse to accept it, formally) are three cards, and every
//       hint says what separates it from its neighbours. Three words for one idea
//       with no way to choose between them is a failed lesson, not a rich one.
//
// ─── C3. THE FROZEN BASE IS 2030 FRONTS AND IT HAS EATEN YOUR SLOT ──────────
//   u1–u87 are fully authored: 2030 fronts. The B1 band in particular spent
//   most of the obvious B2 vocabulary already. MEASURED for this unit before a
//   line was written, all TAKEN: `en påstand` u71, `å konkludere` u74,
//   `å overtale` u70, `å understreke` u49, `et forbehold` u73, `å nyansere` u73,
//   `saklig` u73, `gyldig` u61, `et poeng` u44, `et standpunkt` u51, `å påpeke`
//   u51, `å fastslå` u74, `å presisere` u73.
//   SO A B2 SLOT IS NOT THE B1 SLOT AGAIN. Design each unit from what is LEFT,
//   and retheme the slot when the obvious layer is spent — four of this block's
//   thirteen slots were rethemed and each says so in its own header.
//
// ─── C4. THE PROBE, AND THE BUG IT HAD ─────────────────────────────────────
//   `node scripts/check-front.mjs no "en påstand" å-påstå …` probes the LIVE
//   corpus for both the FRONT and its LEXEME before you author.
//   ⚠️ IT HAD A FALSE NEGATIVE AND THIS BLOCK FIXED IT. The exact-match map was
//   keyed on the WHOLE front, article included, so `ei fare` missed `en fare`
//   (u50), `ei lov` missed `en lov` (u32) and `ei myte` missed `en myte` (u58) —
//   all three reported **free**. That is the exact failure mode unit1.js §1
//   creates: the front must carry a gender marker, so a seat that guesses the
//   other marker on a taught noun gets a clean bill of health and ships the same
//   lexeme twice. The probe now reports `SAME  ei fare ← en fare — u50`. Caught
//   and fixed 2026-09-23; `ei myte` was a real card this block nearly wrote.
//   IT STILL MISSES TRANSPARENT DERIVATIONS ACROSS A SUFFIX BOUNDARY —
//   `en innvending` reported free against `å innvende` (u73). So run the probe
//   AND apply unit51.js §B2's semantic test by hand: does a learner who owns the
//   taught word already own this one? This block rejected `en innvending`,
//   `ei erobring` (← å erobre), `ei forenkling` (← å forenkle), `å oppfinne`
//   (← en oppfinnelse), `ei sårbarhet` (← sårbar), `en lønnsomhet` (← lønnsom),
//   `en anslag` (← å anslå), `ei henvisning` (← å henvise), `å vitne`
//   (← et vitne) and `en forfremmelse` (← å forfremme) on exactly that test.
//
// ─── C5. DRILLS — unit51.js §B5/§B6 still binds, short version ──────────────
//   Every vocab item carries a `drill`: 3–8 whitespace tokens, NO punctuation at
//   all, containing the item's own `front` VERBATIM and contiguous, and never a
//   truncation of the example.
//   ⚠️ THE MODAL TRAP IS STILL LIVE. Norwegian drops the å after kan/vil/skal/
//   må/bør, so "Vi må svekke argumentet" does NOT contain the front `å svekke`
//   and the card dies silently. Use an å-taking frame — Det er viktig/lett/godt
//   å …, … prøver/pleier/begynner/klarer/trenger/håper å …, uten å …, for å … .
//   Every å-verb drill in u88–u100 uses one.
//   Verify with `node scripts/check-drills.mjs`; `lint:curriculum` reads
//   `example.jp` only and cannot see a drill at all.
//
// ─── C6. WORD OWNERSHIP — WHAT BLOCK 1 HAS TAKEN ───────────────────────────
//   Lower slot wins. This block (u88–u100, 312 cards) takes:
//     u88 argument-handling · u89 sources and evidence · u90 systems and
//     abstraction · u91 degree, hedging and precision · u92 politics and law ·
//     u93 business and negotiation · u94 science and technology · u95 history
//     and heritage · u96 art criticism · u97 ethics · u98 risk · u99 identity
//     and society · u100 working life and organisations.
//   ⚠️ BLOCK 2 (u101–u113): FOUR OF YOUR SLOTS ARE PARTLY SPENT.
//     • u106–u108 (grammar 9–11) are untouched by this block — good, they are
//       PATTERNS, not lexemes, and that is where the s-passive, the counterfactual
//       and the hedged claim belong.
//     • u109 is scaffolded "Register 3 — 敬語: humble and honorific". THAT IS A
//       JAPANESE SLOT TITLE AND NORWEGIAN HAS NO SUCH SYSTEM. Retheme it per
//       CLAUDE.md → "No front language". The honest Norwegian equivalent is the
//       du/De question, `å henvende seg` (u72) register, and the written-formal
//       layer — but u72 already took `formell`, `uformell`, `høflig`, `uhøflig`,
//       `å anmode`, `å be om`, `å opplyse`, `å informere`.
//     • u101 environment: u65 took the whole climate layer (ei klimaendring, en
//       klimagass, forurensning, gjenvinning, bærekraftig, å verne, en ressurs).
//     • u103 education/research: u74 and u85 took ei forelesning, en veileder,
//       ei innlevering, en undersøkelse, forskning, en forsker, en bachelor,
//       en høyskole, videregående, en lærling.
//     • u105 subtle emotion: u91 HERE took the degree-and-hedging layer
//       (atskillig, marginal, overveiende, subtil, påfallende, merkbar, å dempe,
//       å tone ned, å modifisere, markant, utpreget, ytterst). Take the FEELING
//       words, leave the MEASURING words.
//   ⚠️ BLOCK 3 (u114–u126): your sixteen slots are scaffolded "Vocabulary N (B2)",
//   which is a slot number, not an instruction — you choose the themes. Still
//   free and worth taking, measured and listed rather than guessed: `et diagram`,
//   `ei feilmargin`, `ei spørreundersøkelse`, `etterrettelig`, `en opphavsmann`,
//   `et hierarki`, `å klassifisere`, `ei gruppering`, `et rim`, `en fusjon`,
//   `en partner`, `ei drift`, `en merkevare`, `ei aktsomhet`, `å forsømme`,
//   `ei interessekonflikt`, `ei uro`, `en sikkerhetsmargin`, `ei arbeidsledighet`,
//   `ei overtallighet`, `å omorganisere`, `ei myndighet`, `en stab`,
//   `et ansvarsområde`, `ei innflytelse`. Re-probe before you use them — that
//   list is a measurement with a timestamp (2026-09-23), not a promise.
//
// ─── C7. THIS UNIT ──────────────────────────────────────────────────────────
//   Slot "Argument and persuasion", retitled. The unit is the four moves in
//   order: build one (l1), make it land (l2), take one apart (l3), give ground
//   without losing (l4). `en innvending` was cut as a transparent derivation of
//   `å innvende` (u73) and `usaklig` took its place — which is the better card
//   anyway, because "det er usaklig" is the objection Norwegians actually make.
//
// Conventions per no/unit1.js and no/unit51.js. lang/unit/lesson are stamped in
// src/data/index.js.
export const NO_UNIT88 = {
  id: "no-u88",
  lang: "no",
  title: "Argumentasjon og overtaling",
  order: 88,
  stage: "b2",
  lessons: [
    {
      id: "no-u88l1",
      unit: 88,
      lesson: 1,
      title: "Å bygge et argument",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Set out an argument in Norwegian — name what it starts from, follow the reasoning, and say where it lands.",
      items: [
        { id: "no-u88l1-etargument", type: "vocab", front: "et argument", reading: "etargument", meaning: "argument (case made)", example: { jp: "Argumentet hans er godt, men det bygger på et premiss ingen har sett på.", en: "His argument is good, but it is built on a premise nobody has looked at." }, accept: ["a case", "an argument"], drill: { jp: "Han hadde et argument ingen kunne svare på", en: "He had an argument nobody could answer" }, hint: "et argument → argumentet, flertall argumenter. Trykket på siste stavelse: argu-MENT. Merk at norsk argument er den SAKLIGE grunnen; en krangel heter å krangle (u49), ikke å ha et argument." },
        { id: "no-u88l1-etpremiss", type: "vocab", front: "et premiss", reading: "etpremiss", meaning: "premise", example: { jp: "Vi er enige om konklusjonen, men ikke om premisset den hviler på.", en: "We agree about the conclusion, but not about the premise it rests on." }, accept: ["a starting assumption", "a premiss"], drill: { jp: "Hele saka hviler på et premiss", en: "The whole case rests on one premise" }, hint: "et premiss → premisset, flertall premisser. Det du tar for gitt FØR du begynner. Å legge premissene er å bestemme hva debatten skal handle om." },
        { id: "no-u88l1-enkonklusjon", type: "vocab", front: "en konklusjon", reading: "enkonklusjon", meaning: "conclusion", example: { jp: "Konklusjonen kom altfor fort, og de to tallene ble aldri forklart.", en: "The conclusion came far too quickly, and the two figures were never explained." }, accept: ["a finding"], drill: { jp: "Vi kom fram til en konklusjon", en: "We arrived at a conclusion" }, hint: "en konklusjon → konklusjonen, flertall konklusjoner. -sjon-ord er hankjønn. Verbet å konkludere er u74." },
        { id: "no-u88l1-etresonnement", type: "vocab", front: "et resonnement", reading: "etresonnement", meaning: "line of reasoning", example: { jp: "Resonnementet er lett å følge, men det holder ikke helt.", en: "The line of reasoning is easy to follow, but it does not quite hold." }, accept: ["reasoning", "a chain of reasoning"], drill: { jp: "Det er lett å følge et resonnement", en: "It is easy to follow a line of reasoning" }, hint: "et resonnement → resonnementet, flertall resonnementer. Fransk låneord, uttales -mang. Veien FRA premiss TIL konklusjon — ikke konklusjonen selv." },
        { id: "no-u88l1-aresonnere", type: "vocab", front: "å resonnere", reading: "aresonnere", meaning: "to reason", example: { jp: "Hun resonnerer høyt når hun tenker, og det gjør det lett å være uenig med henne.", en: "She reasons out loud when she thinks, and that makes it easy to disagree with her." }, accept: ["to think through", "to argue logically"], drill: { jp: "Det er viktig å resonnere før du svarer", en: "It is important to reason before you answer" }, hint: "å resonnere → resonnerer, resonnerte. Å tenke i steg som henger sammen. Å diskutere er å gjøre det sammen med noen andre." },
        { id: "no-u88l1-holdbar", type: "vocab", front: "holdbar", reading: "holdbar", meaning: "tenable (holds up)", example: { jp: "Forklaringa er holdbar så lenge ingen spør om tallene bak.", en: "The explanation is tenable as long as nobody asks about the figures behind it." }, accept: ["sound", "defensible", "sustainable"], drill: { jp: "Den forklaringa er ikke holdbar", en: "That explanation is not tenable" }, hint: "holdbar → holdbart, holdbare. Fra å holde (u59): noe som holder når du presser på det. Om mat betyr det 'keeps' — melka er holdbar en uke til." },
      ],
    },
    {
      id: "no-u88l2",
      unit: 88,
      lesson: 2,
      title: "Å overbevise",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Make a case land — bring out what matters, appeal to your listener, and notice when the language is doing the work instead of the facts.",
      items: [
        { id: "no-u88l2-overbevisende", type: "vocab", front: "overbevisende", reading: "overbevisende", meaning: "convincing", example: { jp: "Han var overbevisende på scenen, men ingenting av det han sa var nytt.", en: "He was convincing on stage, but nothing he said was new." }, accept: ["persuasive", "compelling"], drill: { jp: "Svaret hennes var overbevisende", en: "Her answer was convincing" }, hint: "overbevisende bøyes ikke: -ende-former er like i alle kjønn og tall. Fra å overbevise (u51)." },
        { id: "no-u88l2-aappellere", type: "vocab", front: "å appellere", reading: "aappellere", meaning: "to appeal (to)", example: { jp: "Han appellerer til følelser hver gang tallene ikke holder.", en: "He appeals to emotions every time the figures do not hold up." }, accept: ["to appeal"], drill: { jp: "Det er lett å appellere til følelser", en: "It is easy to appeal to emotions" }, hint: "å appellere → appellerer, appellerte. Alltid med til: å appellere til noen. En appell er både oppropet og virkninga det har." },
        { id: "no-u88l2-enretorikk", type: "vocab", front: "en retorikk", reading: "enretorikk", meaning: "rhetoric", example: { jp: "Retorikken var skarp, men innholdet var det samme som før.", en: "The rhetoric was sharp, but the content was the same as before." }, accept: ["rhetorical style"], drill: { jp: "Han bruker en retorikk folk kjenner igjen", en: "He uses a rhetoric people recognise" }, hint: "en retorikk → retorikken. Kunsten å overbevise med språk. Adjektivet retorisk er ofte negativt: et retorisk grep er et triks." },
        { id: "no-u88l2-aframheve", type: "vocab", front: "å framheve", reading: "aframheve", meaning: "to bring out (highlight)", example: { jp: "Avisa framhever det som gikk bra, og nevner nesten ikke det andre.", en: "The paper highlights what went well, and hardly mentions the rest." }, accept: ["to highlight", "to emphasise", "to stress"], drill: { jp: "Han prøver å framheve det gode", en: "He tries to bring out the good" }, hint: "å framheve → framhever, framhevet. Fram + å heve. Denne kursen skriver fram-, ikke frem-. Å understreke (u49) er å SI at noe er viktig; å framheve er å GI det plass." },
        { id: "no-u88l2-abelyse", type: "vocab", front: "å belyse", reading: "abelyse", meaning: "to shed light on", example: { jp: "Tallene belyser problemet, men de forklarer det ikke.", en: "The figures shed light on the problem, but they do not explain it." }, accept: ["to illuminate", "to throw light on"], drill: { jp: "Det er godt å belyse begge sider", en: "It is good to shed light on both sides" }, hint: "å belyse → belyser, belyste. Be- + å lyse. Bare om saker, aldri om rom: du belyser et problem, men du skrur på lyset i stua." },
        { id: "no-u88l2-entalemate", type: "vocab", front: "en talemåte", reading: "entalemate", meaning: "turn of phrase", example: { jp: "Det er bare en talemåte, og ingen mener det helt alvorlig.", en: "It is just a turn of phrase, and nobody means it entirely seriously." }, accept: ["a figure of speech", "an expression"], drill: { jp: "Hun brukte en talemåte jeg ikke kjente", en: "She used a turn of phrase I did not know" }, hint: "en talemåte → talemåten, flertall talemåter. Å tale + en måte. Et fast uttrykk (u49) du ikke skal ta bokstavelig." },
      ],
    },
    {
      id: "no-u88l3",
      unit: 88,
      lesson: 3,
      title: "Å motsi",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Push back on a claim — dispute it, weaken it, or answer it point by point, and say when an objection is not about the case at all.",
      items: [
        { id: "no-u88l3-atilbakevise", type: "vocab", front: "å tilbakevise", reading: "atilbakevise", meaning: "to refute", example: { jp: "Påstanden ble tilbakevist samme dag, men mange tror den fremdeles.", en: "The claim was refuted the same day, but many still believe it." }, accept: ["to rebut", "to disprove"], drill: { jp: "Det er lett å tilbakevise en slik påstand", en: "It is easy to refute a claim like that" }, hint: "å tilbakevise → tilbakeviser, tilbakeviste. Tilbake + å vise: du viser påstanden tilbake til den som kom med den. Sterkere enn å avvise (u51), som bare er å si nei." },
        { id: "no-u88l3-aimotega", type: "vocab", front: "å imøtegå", reading: "aimotega", meaning: "to counter (point by point)", example: { jp: "Hun imøtegår alt han sier, rolig og grundig.", en: "She counters everything he says, calmly and thoroughly." }, accept: ["to answer (an argument)", "to take issue with", "to rebut"], drill: { jp: "Det er viktig å imøtegå slike påstander", en: "It is important to counter claims like those" }, hint: "å imøtegå → imøtegår, imøtegikk. Bøyes som å gå (u1). I møte + å gå: du går påstanden i møte. Å tilbakevise avviser HELE påstanden, å imøtegå svarer på DELENE." },
        { id: "no-u88l3-asvekke", type: "vocab", front: "å svekke", reading: "asvekke", meaning: "to weaken", example: { jp: "De nye tallene svekker argumentet, men de ødelegger det ikke.", en: "The new figures weaken the argument, but they do not destroy it." }, accept: ["to undermine", "weaken"], drill: { jp: "Det er lett å svekke et dårlig argument", en: "It is easy to weaken a bad argument" }, hint: "å svekke → svekker, svekket. Motsatt av å styrke, som allerede finnes som substantivet en styrke (u71). Også om helse: han ble svekket av sykdommen." },
        { id: "no-u88l3-abestride", type: "vocab", front: "å bestride", reading: "abestride", meaning: "to dispute", example: { jp: "Ingen bestrider tallene, men de er uenige om forklaringa.", en: "Nobody disputes the figures, but they disagree about the explanation." }, accept: ["to contest", "to challenge", "to question"], drill: { jp: "Ingen ønsker å bestride tallene", en: "Nobody wants to dispute the figures" }, hint: "å bestride → bestrider, bestred. Formelt og helst skriftlig: i retten bestrider du et krav. Muntlig sier folk heller at de er uenige." },
        { id: "no-u88l3-etmotargument", type: "vocab", front: "et motargument", reading: "etmotargument", meaning: "counter-argument", example: { jp: "Det beste motargumentet kom fra en som var enig med ham.", en: "The best counter-argument came from somebody who agreed with him." }, accept: ["a counterargument", "a rebuttal"], drill: { jp: "Hun hadde et motargument ingen ventet", en: "She had a counter-argument nobody expected" }, hint: "et motargument → motargumentet, flertall motargumenter. Mot + et argument (l1), i ett ord. Norsk skriver sammensetninger i ett ord — motargument, aldri mot argument." },
        { id: "no-u88l3-usaklig", type: "vocab", front: "usaklig", reading: "usaklig", meaning: "off the point (unfair)", example: { jp: "Det er usaklig å snakke om hvem han er i stedet for hva han sier.", en: "It is off the point to talk about who he is instead of what he says." }, accept: ["irrelevant", "off-topic", "unfair"], drill: { jp: "Han var helt usaklig i går", en: "He was completely off the point yesterday" }, hint: "usaklig → usaklig, usaklige. U- + saklig (u73). I norsk debatt er «det er usaklig» den vanligste innvendinga av alle: du angriper personen og ikke saka." },
      ],
    },
    {
      id: "no-u88l4",
      unit: 88,
      lesson: 4,
      title: "Å gi og ta",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Give ground without losing the argument — concede a point, weigh a case properly, and say where you still stand.",
      items: [
        { id: "no-u88l4-amedgi", type: "vocab", front: "å medgi", reading: "amedgi", meaning: "to concede", example: { jp: "Hun medgir at tallene er dårlige, men holder likevel på konklusjonen.", en: "She concedes that the figures are poor, but still holds on to the conclusion." }, accept: ["to admit", "to grant", "to acknowledge"], drill: { jp: "Det er modig å medgi en feil", en: "It is brave to concede a mistake" }, hint: "å medgi → medgir, medga. Bøyes som å gi (u1). Å innrømme (u49) er å si at DU tok feil; å medgi er å gi motparten ett poeng og beholde resten." },
        { id: "no-u88l4-berettiget", type: "vocab", front: "berettiget", reading: "berettiget", meaning: "justified (legitimate)", example: { jp: "Kravet var berettiget, selv om det kom altfor sent.", en: "The demand was legitimate, even though it came far too late." }, accept: ["legitimate", "warranted", "fair"], drill: { jp: "Kravet deres var helt berettiget", en: "Their demand was entirely justified" }, hint: "berettiget → berettiget, berettigede. Fra en rett: noe du har rett til å mene eller kreve. Uberettiget er det motsatte." },
        { id: "no-u88l4-adrofte", type: "vocab", front: "å drøfte", reading: "adrofte", meaning: "to weigh up (discuss)", example: { jp: "Vi drøftet saka i to timer og kom ikke nærmere hverandre.", en: "We discussed the case for two hours and did not get any closer to each other." }, accept: ["to discuss", "to deliberate", "to debate"], drill: { jp: "Vi trenger tid til å drøfte dette", en: "We need time to weigh this up" }, hint: "å drøfte → drøfter, drøftet. Merk ø-folden: lesinga er adrofte. Å diskutere er å snakke om noe; å drøfte er å veie for og imot. Ordet står i så godt som hver norske eksamensoppgave." },
        { id: "no-u88l4-enenighet", type: "vocab", front: "en enighet", reading: "enenighet", meaning: "consensus (agreement reached)", example: { jp: "De kom til enighet om alt bortsett fra prisen.", en: "They reached agreement on everything except the price." }, accept: ["agreement", "accord"], drill: { jp: "Det ble en enighet ingen var glad for", en: "It became an agreement nobody was happy about" }, hint: "en enighet → enigheten. -het-ord er hankjønn (regel 1), aldri ei. Fra enig (u51). Står oftest uten artikkel: å komme til enighet. Uenighet er motsatsen." },
        { id: "no-u88l4-enmotstand", type: "vocab", front: "en motstand", reading: "enmotstand", meaning: "resistance (opposition)", example: { jp: "Planen møtte motstand fra folk som ellers er enige om det meste.", en: "The plan met resistance from people who otherwise agree about most things." }, accept: ["opposition", "pushback"], drill: { jp: "Han møtte en motstand han ikke hadde ventet", en: "He met a resistance he had not expected" }, hint: "en motstand → motstanden. Mot + å stå. Står oftest uten artikkel: å møte motstand. Personen er en motstander." },
        { id: "no-u88l4-enlogikk", type: "vocab", front: "en logikk", reading: "enlogikk", meaning: "logic", example: { jp: "Logikken er grei nok, men den bygger på at alle gjør det samme.", en: "The logic is fine enough, but it is built on everybody doing the same thing." }, accept: ["reasoning", "rationale"], drill: { jp: "Det er en logikk i alt han gjør", en: "There is a logic in everything he does" }, hint: "en logikk → logikken. Adjektivet er logisk: et logisk svar. Ulogisk brukes mye i dagligtale om noe som ikke henger sammen." },
      ],
    },
  ],
};
