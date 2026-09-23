// NO Unit 88 — Argumentasjon og overtaling (slot: argument) — B2
// Retitled from the scaffold's English placeholder "Argument and persuasion"
// (CLAUDE.md "No front language" — the slot is fixed, the wording is ours).
//
// ─────────────────────────────────────────────────────────────────────────────
// B2 BAND CONVENTIONS FOR NORWEGIAN — binding on u88–u126, every block.
// Block 1 is the crew lead and settles these; blocks 2 and 3 read them here.
// The LANGUAGE-WIDE conventions are in no/unit1.js and still bind. This header
// adds only what is new at B2, and corrects what B2 makes stale.
// ─────────────────────────────────────────────────────────────────────────────
//
// B1. WHAT B2 IS, AND WHAT IT IS NOT. B2 is register, abstraction and
//     precision — not "more nouns". The A1/A2/B1 base is 2032 words and it is
//     already thick with everyday concrete vocabulary. A B2 card earns its place
//     by doing ONE of these:
//       (a) it names an abstraction the learner can already gesture at but not
//           say (en premiss, et resonnement, en terskel);
//       (b) it is the PRECISE word where the learner has only the vague one
//           (å tilbakevise, not just å svare; utslagsgivende, not just viktig);
//       (c) it belongs to an institution the learner will actually meet in
//           Norway (en domstol, et storting, en tillitsvalgt, ei sykemelding).
//     If a candidate is none of those, it is A2 vocabulary that got missed, and
//     it belongs in a coverage slot (u111–u126), not here.
//
// B2. ⚠️ THE B1 BAND ALREADY SPENT THE OBVIOUS B2 WORDS. Read u51–u87's fronts
//     BEFORE drafting a list, not after. B1 took opinion (u51), cause (u52),
//     comparison (u53), hedging (u54), news (u55), abstraction (u58), change
//     (u59), problems (u60), law-and-duty (u61), money (u66), relationships
//     (u68), the subordinate clause (u69), THE PASSIVE AND REPORTED SPEECH
//     (u70), nominalisation and word-building (u71), and BOTH register units
//     (u72 formal/informal, u73 softening). Measured while drafting this unit:
//     of 44 first-draft candidates for "argument and persuasion", 12 were
//     already taught — including å overbevise, å påpeke, å understreke, et
//     standpunkt, å forsvare, å innrømme and riktignok.
//     ⚠️ SO DO NOT RE-PLAN THE GRAMMAR B1 ALREADY TAUGHT. The kickoff brief for
//     this band named "the s-passive and bli-passive in contrast" and "reported
//     speech" as B2 subject matter. **Both shipped at B1**: u70l1 is the
//     s-passive (selges, brukes, kalles, åpnes, kreves, finnes) and u70l4 is
//     reported speech (å antyde, å gjengi, å tilføye, ifølge, å bemerke). The
//     honest B2 move is the CONTRAST and the register they belong to, which is
//     u107 "formal written structures" (block 2) — not a second pass over the
//     forms themselves. Verified against the corpus 2026-09-21, not remembered.
//
// B3. GENDER — MEASURED, NOT ASSUMED. unit1.js §1 gives the rule; these are the
//     suffix classes B2 actually hits, counted across the 2032-word base:
//       -het   → en  (13 of 13)      en sannsynlighet, en samvittighet
//       -else  → en  (13 of 13)      en innrømmelse, en anerkjennelse
//       -sjon  → en  ( 7 of  7)      en konklusjon, en permisjon
//       -itet  → en                  en identitet, en minoritet
//       -ikk   → en                  en etikk, en kronikk
//       -ing / -ning → ei (60 of 65) ei innvending, ei forhandling
//     The five non-`ei` -ing words are NOT exceptions to the rule: `en ting` and
//     `en lærling` are not deverbal -ing nouns at all. **Never write `ei` on a
//     -het or -else word** — the B1 crew was blocked twice on exactly this.
//     Mass nouns stay bare, and the test is unit1.js §1's: is the indefinite
//     singular idiomatic for the SENSE you are teaching? `makt` is taught bare
//     (u55) and `forskning` bare (u74); at B2 the same call falls to `åpenhet`
//     and `førstehjelp`-shaped abstractions.
//
// B4. ⚠️ `ø` NOW FOLDS TO `o` IN THE ENGINE — unit1.js §3's ticket HAS LANDED and
//     that paragraph's "filed in the backlog, chase it" instruction is stale.
//     `normalizeReading` (src/store/answer.js) folds ø→o beside æ→ae and ß→ss,
//     with the reason written into the code. Verified by calling it, 2026-09-21.
//     Nothing changes for the author — keep hand-folding ø→o in `reading`, which
//     is what the fold now agrees with — but the defect it warned about (a ø
//     card losing case/space tolerance) is GONE, and no seat needs to chase it.
//     CONSEQUENCE THAT IS NEW AND DOES BITE: ø and o fronts can now COLLIDE.
//     `tests/unit/corpus-guards.test.mjs` GUARD 3 fails when one taught word
//     folds onto another taught word, so check a ø front against the o-spelling
//     before committing to it, the way German's `hätte`/`hatte` was caught.
//
// B5. THE GLOSS IS A PROMPT (GUARD 1) — and at B2 this is the rule most likely
//     to catch you, because B2 vocabulary is SYNONYM-DENSE. "to refute", "to
//     rebut" and "to disprove" are one gloss wearing three coats. Norwegian B1
//     shipped 36 of these and had to fix every one. Give each front a gloss that
//     names what only IT does, with the discriminator in parentheses:
//         å tilbakevise   "to refute (show a claim is wrong)"
//         en innvending   "objection (a point raised against)"
//     Two items in ONE lesson may never share a gloss — the produce card prompts
//     with the gloss and grades against a single front, so a shared gloss is one
//     card with two right answers and a learner marked wrong for the synonym
//     your own lesson taught. The debt list in GUARD 1 is EMPTY. Keep it empty.
//
// B6. DRILLS — the front VERBATIM and CONTIGUOUS. Every vocab item carries a
//     `drill`: a second sentence, 3–8 space-separated words, no internal
//     punctuation, containing the item's own `front` as a literal substring.
//     `å underbygge` must appear as `å underbygge`, not `underbygger`; `et
//     resonnement` must appear as `et resonnement`, not `resonnementet` and not
//     `et langt resonnement` — an adjective between article and noun breaks it.
//     unit1.js §5 explains why (sentenceTokens needs the whole-word front); the
//     drill is how a B2 item gets cloze and sentence-build anyway, since the
//     teaching example is free to be long and subordinate.
//
// B7. SCOPE — RUN THE TOOL, DO NOT HAND-AUDIT. `node scripts/scope-strict.mjs
//     88 100` takes a range and checks examples AND drills against real
//     generated inflections, without lint.js's 3-leading-character excuse. The
//     B1 crew asserted a 312-card scope guarantee from a human pass and its
//     first tool run falsified it. Also `npm run taught -- no`, and
//     `npm run lint:curriculum 2>&1 | grep "different no items"` for reading
//     collisions. A claim about a word's status that you did not run a tool for
//     is a guess; if you must write one in a comment, write it as
//     UNTAUGHT(no:<front>) so GUARD 2 re-checks it on every run.
//
// B8. DRILL VOCABULARY IS IN SCOPE-STRICT'S REMIT — AND NOTHING ELSE CHECKS IT.
//     `tests/unit/drill-scope.test.mjs` landed 2026-09-22 because a German B2 block
//     shipped 144 out-of-scope DRILLS with every gate green: `validate` checks a
//     drill's SHAPE only, `lint:curriculum` reads `example.jp` and never `drill`,
//     and `drill-corpus.test.mjs` checks a drill BUILDS a card, not that its words
//     are taught. That test is GERMAN-ONLY (it needs a `de-vocab-scope.mjs`-shaped
//     oracle), and `scripts/check-drills.mjs` tests Norwegian BUILDABILITY, not scope.
//     ✅ BUT NORWEGIAN IS NOT UNCOVERED, and it is worth knowing exactly why:
//     `scripts/scope-strict.mjs` checks BOTH — line 78 iterates
//     `[["ex", it.example?.jp], ["drill", it.drill?.jp]]`, so every hit it prints is
//     tagged `/ex` or `/drill`. Block 1's range reports 6 drill-side hits, all of them
//     the class-(b) multi-word-front artifact described in B7 — zero real ones.
//     ⚠️ THE GAP IS THAT IT IS A SCRIPT NOBODY IS FORCED TO RUN, which is the exact
//     failure mode the German test was written to end. Run it, and say in your
//     hand-back that no TEST covers Norwegian drill scope — only this script.
//
// B9. ⚠️ A `// FREE:` DECLARATION IS GLOBAL, NOT PER-UNIT. Verified in
//     `scripts/check-lang-scope.mjs`: it greps every `src/data/no/unit*.js` for a
//     `// FREE:` line and pushes them all into ONE set (`FREE_RAW`), with no unit
//     gating anywhere. So a token you declare in u113 is licensed from u1 backwards,
//     and it will silently excuse that word for every earlier seat. Declare sparingly
//     and only for genuine proper nouns and transparent cognates.
//     AND NOTE THE SECOND HALF: `scope-strict.mjs` does NOT read `// FREE:` lines at
//     all — its FREE list is a hardcoded const at the top of the script. So a
//     declaration buys you nothing there and you will still be reported (block 1 hit
//     this with `Samene`). Work around it in the sentence; never edit the tool.
//
// B10. EVIDENCE BELONGS IN THIS HEADER, NEVER ON A CARD. German block 3 deleted 158
//     "Rank N." claims from its hints after nine were found fabricated, two copied off
//     the card next door. A learner cannot falsify a corpus measurement, so a hint is
//     the one place it must not go. Block 1's measured claims (the B3 gender counts,
//     "9 of 44 candidates already taught") are all in headers. What IS allowed on a
//     card is a checkable FACT about the language or the country — 1814, 1905, the
//     1940-45 occupation, Grunnloven § 100, arbeidsmiljøloven — because that is the
//     content the vocabulary exists to deliver, and the learner can look it up.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
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
      canDo: "Lay out a case in Norwegian — state what you are assuming, show the reasoning, and back it with something.",
      items: [
        { id: "no-u88l1-etargument", type: "vocab", front: "et argument", reading: "etargument", meaning: "argument (a case that is made)", example: { jp: "Han kom med et argument som ingen av de andre klarte å svare på.", en: "He came up with an argument that none of the others managed to answer." }, accept: ["a case", "a line of argument"], drill: { jp: "Han kom med et argument", en: "He came up with an argument" }, hint: "et argument → argumentet, flertall argumenter. NB: ikke en krangel. Et argument er grunnen du gir for et standpunkt (u51)." },
        { id: "no-u88l1-aargumentere", type: "vocab", front: "å argumentere", reading: "aargumentere", meaning: "to argue a case", example: { jp: "Hun argumenterer godt for at vi bør vente til neste år.", en: "She argues well that we ought to wait until next year." }, accept: ["to make a case", "to reason for"], drill: { jp: "Det er lett å argumentere for dette", en: "It is easy to argue for this" }, hint: "å argumentere → argumenterer, argumenterte. Alltid FOR eller MOT noe. Å krangle er å slåss med ord; å argumentere er å gi grunner." },
        { id: "no-u88l1-enpremiss", type: "vocab", front: "en premiss", reading: "enpremiss", meaning: "premise (what an argument takes for granted)", example: { jp: "Hele resonnementet hviler på noe han tar for sant, og den premissen har ingen sjekket.", en: "The whole line of reasoning rests on something he takes to be true, and nobody has checked that premise." }, accept: ["a premise", "a starting assumption"], drill: { jp: "Vi er uenige om en premiss", en: "We disagree about a premise" }, hint: "en premiss → premissen, flertall premisser. Det du tar for gitt FØR du begynner. Et argument kan være riktig bygd på en gal premiss." },
        { id: "no-u88l1-etresonnement", type: "vocab", front: "et resonnement", reading: "etresonnement", meaning: "line of reasoning (the steps from premise to answer)", example: { jp: "Jeg er enig i svaret hennes, men jeg klarer ikke å følge hele resonnementet.", en: "I agree with her answer, but I cannot follow the whole line of reasoning." }, accept: ["reasoning", "a train of thought"], drill: { jp: "Hun hadde et resonnement vi forstår", en: "She had a line of reasoning we understand" }, hint: "et resonnement → resonnementet, flertall resonnementer. Selve veien fra premiss til svar — ikke svaret. Fra fransk, så -ment uttales -mang." },
        { id: "no-u88l1-aunderbygge", type: "vocab", front: "å underbygge", reading: "aunderbygge", meaning: "to back up with evidence", example: { jp: "Påstanden er ny, men den er ikke underbygget med tall i det hele tatt.", en: "The claim is new, but it is not backed up with figures at all." }, accept: ["to substantiate", "to support with facts"], drill: { jp: "Det er viktig å underbygge en påstand", en: "It is important to back up a claim" }, hint: "å underbygge → underbygger, underbygde. Å bygge noe UNDER påstanden så den står: tall, kilder, eksempel. Motsatt av å hevde fritt." },
        { id: "no-u88l1-avektlegge", type: "vocab", front: "å vektlegge", reading: "avektlegge", meaning: "to give weight to (when deciding)", example: { jp: "Sjefen vektlegger erfaring mer enn utdanning når hun velger.", en: "The boss gives more weight to experience than to education when she chooses." }, accept: ["to prioritise", "to weigh heavily"], drill: { jp: "Det er lett å vektlegge et hensyn", en: "It is easy to give weight to one consideration" }, hint: "å vektlegge → vektlegger, vektla. Vekt + å legge. Sterkere enn å nevne, svakere enn å kreve — det du lar telle mest." },
      ],
    },
    {
      id: "no-u88l2",
      unit: 88,
      lesson: 2,
      title: "Innvendinger og motargument",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Push back on an argument precisely — name the objection, answer it, and say where the other side is weakest.",
      items: [
        { id: "no-u88l2-eiinnvending", type: "vocab", front: "ei innvending", reading: "eiinnvending", meaning: "objection (a point raised against)", example: { jp: "Jeg har bare ei innvending mot planen, og den gjelder penger.", en: "I have only one objection to the plan, and it concerns money." }, accept: ["an objection", "a point against"], drill: { jp: "Han kom med ei innvending", en: "He raised an objection" }, hint: "ei innvending → innvendinga, flertall innvendinger. -ing-ord er hunkjønn (regel B3). Fra å innvende (u73). En innvending mot noe." },
        { id: "no-u88l2-etmotargument", type: "vocab", front: "et motargument", reading: "etmotargument", meaning: "counter-argument (a whole case made the other way)", example: { jp: "Hun hadde lest seg opp, så hun møtte hvert argument med et eget motargument.", en: "She had read up, so she met every argument with a counter-argument of her own." }, accept: ["a counter-argument", "an opposing case"], drill: { jp: "Vi trenger et motargument her", en: "We need a counter-argument here" }, hint: "et motargument → motargumentet, flertall motargumenter. Mot- + argument. Større enn ei innvending: et helt argument den andre veien." },
        { id: "no-u88l2-atilbakevise", type: "vocab", front: "å tilbakevise", reading: "atilbakevise", meaning: "to refute (show a claim is wrong)", example: { jp: "Tallene fra forskningen tilbakeviser det de fleste tror om saken.", en: "The figures from the research refute what most people believe about the matter." }, accept: ["to disprove", "to rebut"], drill: { jp: "Hun klarte å tilbakevise hele påstanden", en: "She managed to refute the whole claim" }, hint: "å tilbakevise → tilbakeviser, tilbakeviste. Tilbake + å vise: du viser påstanden tilbake. Sterkt ord — du må ha noe å vise MED." },
        { id: "no-u88l2-enmotstander", type: "vocab", front: "en motstander", reading: "enmotstander", meaning: "opponent (the person on the other side)", example: { jp: "Som motstander er han hard, men han hører alltid ferdig på deg først.", en: "As an opponent he is tough, but he always hears you out first." }, accept: ["an adversary", "an opposing party"], drill: { jp: "Hun er en motstander vi hører på", en: "She is an opponent we listen to" }, hint: "en motstander → motstanderen, flertall motstandere. Mot + å stå. En tilhenger er det motsatte. Brukes om debatt og sport, ikke om krig." },
        { id: "no-u88l2-aangripe", type: "vocab", front: "å angripe", reading: "aangripe", meaning: "to attack (go after a position)", example: { jp: "Han angriper aldri personen, bare det hun faktisk sier.", en: "He never attacks the person, only what she actually says." }, accept: ["to go after", "to assail"], drill: { jp: "Det er dumt å angripe alt samtidig", en: "It is foolish to attack everything at once" }, hint: "å angripe → angriper, angrep. Å gripe an — ta fatt i. I debatt angriper du et argument, ikke en person." },
        { id: "no-u88l2-engeneralisering", type: "vocab", front: "en generalisering", reading: "engeneralisering", meaning: "sweeping generalisation (a claim stretched too far)", example: { jp: "At alle unge tenker likt er en generalisering som ikke tåler et eksempel.", en: "That all young people think alike is a generalisation that cannot survive one example." }, accept: ["an over-generalisation", "a sweeping claim"], drill: { jp: "Dette er en generalisering uten tall", en: "This is a generalisation without figures" }, hint: "en generalisering → generaliseringa. ⚠️ Unntak fra B3: -ing er hunkjønn, men dette ordet er lånt via -sering og tar en. Fra å generalisere." },
      ],
    },
    {
      id: "no-u88l3",
      unit: 88,
      lesson: 3,
      title: "Å gi etter uten å gi opp",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Concede a point and still hold your ground — the move that makes an argument sound fair instead of stubborn.",
      items: [
        { id: "no-u88l3-eninnrommelse", type: "vocab", front: "en innrømmelse", reading: "eninnrommelse", meaning: "concession (a point you grant the other side)", example: { jp: "Det var en innrømmelse fra ham, og alle i rommet forstår hva den koster.", en: "That was a concession from him, and everybody in the room understands what it costs." }, accept: ["an admission", "a point conceded"], drill: { jp: "Dette er en innrømmelse fra begge sider", en: "This is a concession from both sides" }, hint: "en innrømmelse → innrømmelsen, flertall innrømmelser. -else er HANKJØNN (regel B3), aldri ei. Fra å innrømme (u49)." },
        { id: "no-u88l3-amedgi", type: "vocab", front: "å medgi", reading: "amedgi", meaning: "to grant (accept that a point is fair)", example: { jp: "Jeg må medgi at hun har tenkt lenge på dette, og at jeg ikke har det.", en: "I have to grant that she has thought about this for a long time, and that I have not." }, accept: ["to concede", "to acknowledge"], drill: { jp: "Det er vanskelig å medgi en feil", en: "It is hard to grant a mistake" }, hint: "å medgi → medgir, medgav. Med + å gi. Litt formelt; i tale sier folk heller «det har du rett i»." },
        { id: "no-u88l3-ikkedestomindre", type: "vocab", front: "ikke desto mindre", reading: "ikkedestomindre", meaning: "nonetheless (all the same, after granting something)", example: { jp: "Planen er dyr. Ikke desto mindre tror jeg vi bør si ja til den nå.", en: "The plan is expensive. Nonetheless I think we ought to say yes to it now." }, accept: ["nevertheless", "all the same"], drill: { jp: "Hun sa ikke desto mindre ja", en: "She nonetheless said yes" }, hint: "Fast uttrykk, tre ord, ett ord i hodet. Formelt. Står først i setninga, og verbet kommer rett etter (V2)." },
        { id: "no-u88l3-trossalt", type: "vocab", front: "tross alt", reading: "trossalt", meaning: "after all (when you come back to what still counts)", example: { jp: "Han er tross alt den som har gjort dette arbeidet før.", en: "He is, after all, the one who has done this work before." }, accept: ["when all is said and done", "in the end"], drill: { jp: "Hun er tross alt sjefen her", en: "She is after all the boss here" }, hint: "Fast uttrykk (unit1.js §7). Står midt i setninga, etter verbet. Minner om det som fortsatt teller når alt annet er sagt." },
        { id: "no-u88l3-omenn", type: "vocab", front: "om enn", reading: "omenn", meaning: "albeit (granting a small limit in the same breath)", example: { jp: "Svaret kom, om enn ikke så fort som vi håpet.", en: "The answer came, albeit not as fast as we hoped." }, accept: ["though admittedly", "if somewhat"], drill: { jp: "Det gikk bra om enn sakte", en: "It went well albeit slowly" }, hint: "To småord, ett uttrykk. Skriftlig og formelt. Etter det du innrømmer kommer ikke en hel setning, bare et ord eller to." },
        { id: "no-u88l3-etsynspunkt", type: "vocab", front: "et synspunkt", reading: "etsynspunkt", meaning: "point of view (the place an opinion is seen from)", example: { jp: "Fra hennes synspunkt var det helt klart hva som burde skje.", en: "From her point of view it was completely clear what ought to happen." }, accept: ["a viewpoint", "a perspective held"], drill: { jp: "Jeg forstår et synspunkt som dette", en: "I understand a point of view like this" }, hint: "et synspunkt → synspunktet, flertall synspunkter. Syn + punkt: punktet du ser fra. Et standpunkt (u51) er der du STÅR." },
      ],
    },
    {
      id: "no-u88l4",
      unit: 88,
      lesson: 4,
      title: "Å overtale en sal",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Move an audience, not just win on paper — appeal to what people care about and say what your case rests on.",
      items: [
        { id: "no-u88l4-overbevisende", type: "vocab", front: "overbevisende", reading: "overbevisende", meaning: "convincing (of an argument that works)", example: { jp: "Det var overbevisende fordi hun hadde tallene med seg, ikke fordi hun snakket høyt.", en: "It was convincing because she had the figures with her, not because she spoke loudly." }, accept: ["persuasive", "compelling"], drill: { jp: "Han var overbevisende i går", en: "He was convincing yesterday" }, hint: "Adjektiv av å overbevise (u51). Ender på -ende og bøyes ikke: et overbevisende svar, en overbevisende plan." },
        { id: "no-u88l4-enoverbevisning", type: "vocab", front: "en overbevisning", reading: "enoverbevisning", meaning: "conviction (a belief somebody holds firmly)", example: { jp: "Han sluttet i jobben, og det var en overbevisning han hadde hatt i mange år.", en: "He left the job, and that was a conviction he had held for many years." }, accept: ["a firm belief", "a deep-held view"], drill: { jp: "Dette er en overbevisning hun deler", en: "This is a conviction she shares" }, hint: "en overbevisning → overbevisninga. ⚠️ Både -ning (hunkjønn, regel B3) og en er i bruk; korpuset her bruker en. Det du TROR, ikke det du sier." },
        { id: "no-u88l4-aappellere", type: "vocab", front: "å appellere", reading: "aappellere", meaning: "to appeal to (aim at what people care about)", example: { jp: "Hun appellerer til alle som har barn, og da blir det stille.", en: "She appeals to everybody who has children, and then it goes quiet." }, accept: ["to reach out to", "to address the feelings of"], drill: { jp: "Det er lurt å appellere til folk", en: "It is smart to appeal to people" }, hint: "å appellere → appellerer, appellerte. Alltid å appellere TIL noen. Du sikter mot det de bryr seg om, ikke mot hodet." },
        { id: "no-u88l4-apoengtere", type: "vocab", front: "å poengtere", reading: "apoengtere", meaning: "to make the point that (say it so it lands)", example: { jp: "Han poengterer at ingen har snakket med dem som bor der.", en: "He makes the point that nobody has spoken to those who live there." }, accept: ["to stress the point", "to drive home"], drill: { jp: "Det er viktig å poengtere en ting", en: "It is important to make one point" }, hint: "å poengtere → poengterer, poengterte. Fra et poeng (u44). Å understreke (u49) er å gjenta viktigheten; å poengtere er å si sjølve poenget klart." },
        { id: "no-u88l4-aframheve", type: "vocab", front: "å framheve", reading: "aframheve", meaning: "to highlight (lift one thing above the rest)", example: { jp: "I brevet framhever de særlig det arbeidet hun har gjort med barna.", en: "In the letter they particularly highlight the work she has done with the children." }, accept: ["to single out", "to bring to the fore"], drill: { jp: "Det er fint å framheve godt arbeid", en: "It is nice to highlight good work" }, hint: "å framheve → framhever, framhevet. Fram + å heve: løfte fram. Bokmål tillater også fremheve — samme ord." },
        { id: "no-u88l4-entilhenger", type: "vocab", front: "en tilhenger", reading: "entilhenger", meaning: "supporter (somebody on your side of a question)", example: { jp: "Han er en tilhenger av å ta det rolig, og det har han vært lenge.", en: "He is a supporter of taking it slowly, and he has been for a long time." }, accept: ["an advocate", "a backer"], drill: { jp: "Hun er en tilhenger av forslaget", en: "She is a supporter of the proposal" }, hint: "en tilhenger → tilhengeren, flertall tilhengere. Å henge ved noe. En motstander er det motsatte. NB: en tilhenger er også en henger bak bil." },
      ],
    },
  ],
};
