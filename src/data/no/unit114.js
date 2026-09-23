// NO Unit 114 — Årsak og virkning (slot: coverage-b2-4) — B2
// ─────────────────────────────────────────────────────────────────────────────
// FIRST UNIT OF B2 BLOCK 3 (u114–u126), the LAST block of Norwegian. Slot was
// scaffolded "Vocabulary 4 (B2)" — a slot number, not an instruction, so the
// theme is chosen here. Conventions: unit1.js §1–§9 (language), unit51.js
// B1–B9 (B1 band), unit88.js C1–C7 (B2 band). All three still bind.
//
// WHY THIS THEME. u90 took SYSTEMS (how parts hang together) and u98 took RISK
// (what might happen). Neither took CAUSATION — the move where you claim that
// A produced B, and the moves an opponent makes against that claim. At B2 that
// is the most-used argumentative machine there is, and the corpus had almost
// none of it: only `å utløse` (u52), `å skyldes` (u52) and `å bunne i` (u111).
//   l1  naming the cause
//   l2  naming the effect
//   l3  when the effect spreads past where it started
//   l4  when the chain runs away from you
//
// LEXEME RULE, current wording (CLAUDE.md / RUNBOOK §4, corrected on main
// 2026-09-23): "lexeme" means INFLECTION — the same word in another form. A
// word DERIVED from a taught word is a DIFFERENT lexeme and may be carded; the
// test is "would a learner who knows one already know the other?". `ei
// ringvirkning` is not blocked by `å virke` (u54) for the same reason
// unit51.js B2 already allows `en virkelighet`: nobody who can say "det virker
// bra" can produce "ringvirkningene av vedtaket".
//
// NOT TAKEN, and why:
//   • `ei innvirkning` — kept, but note it sits one shelf from `ei innflytelse`
//     (u124l3, this block). Different lessons, different units, and the hints
//     separate them: innvirkning is what a THING does to a thing, innflytelse
//     is what a PERSON has over people.
//   • `å slå ut` — cut. Its ordinary sense is "knock out / show up in the
//     figures" and the two are impossible to separate in one gloss.
//   • `ei følge` — SAME as the taught `å følge` (u45) per the probe. Blocked.
//
// GENDER: -ing/-ning FEMININE (ei ringvirkning, ei innvirkning, ei opphopning),
// -het MASCULINE (none here). `ei drivkraft` is feminine because `ei kraft` is.
// ⚠ A COMPOUND INHERITS THE GENDER OF ITS LAST ELEMENT, and the first draft of
// this unit got four wrong: `ei årsakssammenheng`, `ei grunnårsak`, `ei
// kjedereaksjon` and `ei dominoeffekt` are all `en` here, because `en
// sammenheng`, `en årsak`, the whole -sjon class and `en effekt` are masculine
// in this corpus. Grep the head before you mark the compound.
// FIRST FEMININE is `ei drivkraft` (l1) and carries the en-/ei- note.
//
// DRILLS: every å-verb drill uses an å-frame (unit88.js C5 — Norwegian drops
// the å after kan/vil/skal/må/bør, which silently kills the card).
//
// SCOPE: the frozen base u1–u113 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT114 = {
  id: "no-u114",
  lang: "no",
  title: "Årsak og virkning",
  order: 114,
  stage: "b2",
  lessons: [
    {
      id: "no-u114l1",
      unit: 114,
      lesson: 1,
      title: "Å peke på årsaken",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Claim that one thing caused another — and separate the real cause from the thing that merely came first.",
      items: [
        { id: "no-u114l1-enarsakssammenheng", type: "vocab", front: "en årsakssammenheng", reading: "enarsakssammenheng", meaning: "causal connection (A produced B)", example: { jp: "Årsakssammenhengen holder ikke, og likevel bruker alle tallene som om den var sikker.", en: "The causal connection does not hold, and still everybody uses the figures as if it were certain." }, accept: ["causal link", "cause-and-effect connection"], drill: { jp: "Vi ser en årsakssammenheng ingen har vist", en: "We see a causal connection nobody has shown" }, hint: "en årsakssammenheng → årsakssammenhengen, flertall årsakssammenhenger. Hankjønn fordi en sammenheng (u50) er det — ei sammensetning arver kjønnet fra siste ledd. En årsak + sammenheng. ⚠ To ting som skjer etter hverandre har ikke automatisk en årsakssammenheng — det er nettopp det ordet krever bevis for." },
        { id: "no-u114l1-engrunnarsak", type: "vocab", front: "en grunnårsak", reading: "engrunnarsak", meaning: "root cause (the one under the others)", example: { jp: "De har rettet alt de ser, men grunnårsaken står igjen og lager de samme feilene.", en: "They have fixed everything they can see, but the root cause is still there and makes the same errors." }, accept: ["underlying cause", "root cause"], drill: { jp: "Ingen har funnet en grunnårsak her", en: "Nobody has found a root cause here" }, hint: "en grunnårsak → grunnårsaken, flertall grunnårsaker. Hankjønn fordi en årsak er det. En grunn (u32) + årsak. ⚠ Ikke den FØRSTE årsaken i tid, men den DYPESTE: den du må fjerne for at problemet ikke skal komme igjen." },
        { id: "no-u114l1-astammefra", type: "vocab", front: "å stamme fra", reading: "astammefra", meaning: "to originate from (trace back to)", example: { jp: "Ordningen stammer fra en tid da ingen hadde regnet på hva den ville koste.", en: "The arrangement originates from a time when nobody had worked out what it would cost." }, accept: ["to stem from", "to date back to"], drill: { jp: "Det er lett å stamme fra noe gammelt", en: "It is easy to originate from something old" }, hint: "å stamme fra → stammer, stammet, har stammet. Om OPPHAV i tid eller sted, ikke om årsak akkurat nå. ⚠ Å stamme alene betyr å snakke med gjentatte lyder — fra hører med." },
        { id: "no-u114l1-aforanledige", type: "vocab", front: "å foranledige", reading: "aforanledige", meaning: "to prompt (give rise to)", example: { jp: "Det var artikkelen som foranlediget hele saka, og de andre kildene kom lenge etter.", en: "It was the article that prompted the whole case, and the other sources came long afterwards." }, accept: ["to give rise to", "to occasion"], drill: { jp: "Nok til å foranledige en sak", en: "Enough to prompt a case" }, hint: "å foranledige → foranlediger, foranlediget, har foranlediget. Foran + å lede. ⚠ Skriftlig og formelt — du finner det i rapporter og dommer, nesten aldri i tale. Årsaken som SATTE I GANG, ikke den som holder det gående." },
        { id: "no-u114l1-eidrivkraft", type: "vocab", front: "ei drivkraft", reading: "eidrivkraft", meaning: "driving force (what keeps it going)", example: { jp: "Drivkrafta i hele prosessen er frykt, og ingen av dem som styrer den vil si det høyt.", en: "The driving force in the whole process is fear, and none of those running it will say so out loud." }, accept: ["driver", "motive force"], drill: { jp: "Her er ei drivkraft ingen snakket om", en: "Here is a driving force nobody talked about" }, hint: "ei drivkraft → drivkrafta. Hunkjønnsord kan du også skrive en drivkraft / drivkraften, og den formen er vanlig i avisene — merk formen, for du møter begge i skrift. Ei kraft (u34) er hunkjønn og sammensetninga arver det. Å drive (u111) + kraft. ⚠ Ei grunnårsak forklarer hvorfor det STARTET; ei drivkraft forklarer hvorfor det FORTSETTER." },
        { id: "no-u114l1-ahengesammenmed", type: "vocab", front: "å henge sammen med", reading: "ahengesammenmed", meaning: "to be bound up with (co-vary)", example: { jp: "Tallene henger sammen med været, og det er derfor de ser så gode ut i år.", en: "The figures are bound up with the weather, and that is why they look so good this year." }, accept: ["to be connected with", "to correlate with"], drill: { jp: "Dette pleier å henge sammen med været", en: "This tends to be bound up with the weather" }, hint: "å henge sammen med → henger, hang, har hengt. ⚠ DEN FORSIKTIGE FORMEN: den sier at to ting følger hverandre, men IKKE hvilken vei årsaken går. Bruk den når du ikke kan bevise retningen." },
      ],
    },
    {
      id: "no-u114l2",
      unit: 114,
      lesson: 2,
      title: "Å peke på virkningen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State what something led to — and pick the verb that says how directly it led there.",
      items: [
        { id: "no-u114l2-amedfore", type: "vocab", front: "å medføre", reading: "amedfore", meaning: "to entail (bring with it)", example: { jp: "Vedtaket medfører mer arbeid for alle, og ingen har sagt hvem som skal gjøre det.", en: "The decision entails more work for everybody, and nobody has said who is to do it." }, accept: ["to bring about", "to involve", "to entail"], drill: { jp: "Det er lett å medføre mer arbeid", en: "It is easy to entail more work" }, hint: "å medføre → medfører, medførte, har medført. Merk ø-folden: lesinga er amedfore. Med + å føre (u83). ⚠ Virkningen følger MED av seg selv, som en del av tingen — ikke noe noen valgte." },
        { id: "no-u114l2-aresulterei", type: "vocab", front: "å resultere i", reading: "aresulterei", meaning: "to result in (end up as)", example: { jp: "Møtet resulterte i en plan ingen av dem trodde på, men alle skrev under.", en: "The meeting resulted in a plan neither of them believed in, but everybody signed." }, accept: ["to lead to", "to end in"], drill: { jp: "Slike møter pleier å resultere i lite", en: "Such meetings tend to result in little" }, hint: "å resultere i → resulterer, resulterte, har resultert. Fra et resultat (u24). ⚠ Krever i og tåler ikke noe annet: resulterte I en plan, aldri «resulterte til». Om SLUTTPUNKTET, ikke om veien dit." },
        { id: "no-u114l2-etutslag", type: "vocab", front: "et utslag", reading: "etutslag", meaning: "a manifestation (visible sign of)", example: { jp: "Det er et utslag av frykt, ikke av dårlig arbeid, og de to krever helt ulike svar.", en: "It is a manifestation of fear, not of bad work, and the two require completely different answers." }, accept: ["an expression of", "a symptom of"], drill: { jp: "Dette er et utslag vi kjenner godt", en: "This is a manifestation we know well" }, hint: "et utslag → utslaget, flertall utslag (ubøyd). Ut + et slag. ⚠ Bruk det med av: et utslag AV noe. Du sier at det du ser er OVERFLATA av en årsak som ligger under." },
        { id: "no-u114l2-eiinnvirkning", type: "vocab", front: "ei innvirkning", reading: "eiinnvirkning", meaning: "an impact (effect one thing has on another)", example: { jp: "Reglene har ei innvirkning på små steder som ingen i hovedstaden regnet med.", en: "The rules have an impact on small places that nobody in the capital reckoned with." }, accept: ["an effect on", "an influence on"], drill: { jp: "Det har ei innvirkning ingen regnet med", en: "It has an impact nobody reckoned with" }, hint: "ei innvirkning → innvirkninga. -ning er hunkjønn. Inn + å virke (u54). ⚠ Ei innvirkning er det en TING gjør med en annen ting; ei innflytelse er det en PERSON har over folk. Brukes med på." },
        { id: "no-u114l2-enbieffekt", type: "vocab", front: "en bieffekt", reading: "enbieffekt", meaning: "a side effect (unwanted extra result)", example: { jp: "Den store bieffekten kom i andre året, og da var ordningen allerede umulig å stoppe.", en: "The big side effect came in the second year, and by then the arrangement was already impossible to stop." }, accept: ["a side effect", "a knock-on result"], drill: { jp: "Her er en bieffekt ingen ville ha", en: "Here is a side effect nobody wanted" }, hint: "en bieffekt → bieffekten, flertall bieffekter. Bi- (ved siden av) + en effekt (u52). ⚠ Ikke bare om medisin i norsk: et vedtak, en regel og en avtale har bieffekter. Alltid noe du ikke ville ha." },
        { id: "no-u114l2-aframkalle", type: "vocab", front: "å framkalle", reading: "aframkalle", meaning: "to provoke (bring on a reaction)", example: { jp: "Ordet framkaller sterke svar hos folk som ellers er enige om alt annet.", en: "The word provokes strong responses in people who otherwise agree about everything else." }, accept: ["to bring on", "to induce", "to elicit"], drill: { jp: "Det er lett å framkalle sterke svar her", en: "It is easy to provoke strong responses here" }, hint: "å framkalle → framkaller, framkalte, har framkalt. Fram + å kalle (u58). ⚠ Om REAKSJONER hos mennesker og om tilstander i kroppen. Å utløse (u52) er om hendelser; å framkalle er om noe som kommer fram i noen." },
      ],
    },
    {
      id: "no-u114l3",
      unit: 114,
      lesson: 3,
      title: "Når virkningen sprer seg",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue that an effect did not stay where it started — and name the shape the spreading took.",
      items: [
        { id: "no-u114l3-eiringvirkning", type: "vocab", front: "ei ringvirkning", reading: "eiringvirkning", meaning: "a knock-on effect (ripple)", example: { jp: "Ringvirkningene av vedtaket er større enn vedtaket selv, og ingen har regnet på dem.", en: "The knock-on effects of the decision are bigger than the decision itself, and nobody has worked them out." }, accept: ["a ripple effect", "a spin-off effect"], drill: { jp: "Vi ser ei ringvirkning ingen regnet på", en: "We see a knock-on effect nobody worked out" }, hint: "ei ringvirkning → ringvirkninga, flertall ringvirkninger. En ring + å virke (u54). ⚠ Bildet er ringer i vann: virkningen brer seg UTOVER fra der den traff. Står nesten alltid i flertall." },
        { id: "no-u114l3-enkjedereaksjon", type: "vocab", front: "en kjedereaksjon", reading: "enkjedereaksjon", meaning: "a chain reaction (each step sets off the next)", example: { jp: "Det ble en kjedereaksjon fordi hver avdeling ventet på den neste, og ingen av dem visste det.", en: "It became a chain reaction because every department waited for the next one, and none of them knew it." }, accept: ["a chain reaction"], drill: { jp: "Her er en kjedereaksjon vi ikke stopper", en: "Here is a chain reaction we do not stop" }, hint: "en kjedereaksjon → kjedereaksjonen, flertall kjedereaksjoner. ⚠ -sjon-ord er hankjønn i hele dette kurset: en konklusjon, en operasjon, en generasjon. Et kjede + reaksjon. ⚠ Hvert ledd UTLØSER det neste — ei ringvirkning brer seg bare utover." },
        { id: "no-u114l3-aforplanteseg", type: "vocab", front: "å forplante seg", reading: "aforplanteseg", meaning: "to propagate (travel onward through)", example: { jp: "Feilen forplantet seg gjennom hele systemet, og de fant den først da tallene ikke stemte.", en: "The error propagated through the whole system, and they found it only when the figures did not add up." }, accept: ["to spread through", "to carry onward"], drill: { jp: "Slike feil pleier å forplante seg fort", en: "Such errors tend to propagate quickly" }, hint: "å forplante seg → forplanter seg, forplantet seg, har forplantet seg. ⚠ Alltid med seg. Om lyd, om feil og om tall som bærer videre. Uten seg betyr å forplante å få avkom — en annen sak helt." },
        { id: "no-u114l3-asmitteover", type: "vocab", front: "å smitte over", reading: "asmitteover", meaning: "to rub off on (spread to people)", example: { jp: "Frykt smitter over på de andre avdelingene lenge før noen sier hvorfor.", en: "Fear rubs off on the other departments long before anybody says why." }, accept: ["to rub off", "to catch on"], drill: { jp: "Slikt pleier å smitte over på andre", en: "That sort of thing tends to rub off on others" }, hint: "å smitte over → smitter, smittet, har smittet. Fra å smitte (om sykdom). ⚠ Om STEMNING og HOLDNING mellom mennesker, ikke om tall: uro, glede og panikk smitter over. Brukes med på." },
        { id: "no-u114l3-endominoeffekt", type: "vocab", front: "en dominoeffekt", reading: "endominoeffekt", meaning: "a domino effect (one falls, all fall)", example: { jp: "De kaller det en dominoeffekt, men da må de også vise hvilken brikke som kommer først.", en: "They call it a domino effect, but then they also have to show which piece comes first." }, accept: ["a domino effect"], drill: { jp: "De snakket om en dominoeffekt her", en: "They talked about a domino effect here" }, hint: "en dominoeffekt → dominoeffekten, flertall dominoeffekter. Hankjønn fordi en effekt (u52) er det. Fra spillet. ⚠ Sterkere enn ei kjedereaksjon: det ligger i bildet at INGEN av leddene kunne stoppe det. Derfor krever påstanden mer bevis, ikke mindre." },
        { id: "no-u114l3-eiopphopning", type: "vocab", front: "ei opphopning", reading: "eiopphopning", meaning: "a build-up (things piling up in one place)", example: { jp: "Det er ei opphopning av saker hos den ene avdelingen, og de andre merker ingenting.", en: "There is a build-up of cases at the one department, and the others notice nothing." }, accept: ["an accumulation", "a pile-up"], drill: { jp: "Vi ser ei opphopning som bare vokser", en: "We see a build-up that just grows" }, hint: "ei opphopning → opphopninga. -ning er hunkjønn. Opp + å hope. ⚠ Om det som samler seg fordi noe ANNET har stoppet — kø, saker, folk, varme. Brukes med av." },
      ],
    },
    {
      id: "no-u114l4",
      unit: 114,
      lesson: 4,
      title: "Når kjeden løper fra deg",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that a chain of causes has got out of hand — and name what is speeding it up or holding it back.",
      items: [
        { id: "no-u114l4-enfolgefeil", type: "vocab", front: "en følgefeil", reading: "enfolgefeil", meaning: "a consequential error (wrong because the step before was)", example: { jp: "Resten er en følgefeil, så det er ingen vits i å rette hver linje for seg.", en: "The rest is a consequential error, so there is no point in correcting each line separately." }, accept: ["a knock-on error", "a downstream error"], drill: { jp: "Dette er en følgefeil og ikke noe mer", en: "This is a consequential error and nothing more" }, hint: "en følgefeil → følgefeilen, flertall følgefeil (ubøyd). Merk ø-folden: lesinga er enfolgefeil. Å følge (u45) + en feil (u50). ⚠ Et forsvar like mye som en anklage: hvis alt er følgefeil, er det ÉN feil, ikke femti." },
        { id: "no-u114l4-autarte", type: "vocab", front: "å utarte", reading: "autarte", meaning: "to degenerate (turn into something worse)", example: { jp: "Møtet utartet etter en time, og det som sto på planen ble aldri tatt opp.", en: "The meeting degenerated after an hour, and what was on the agenda was never taken up." }, accept: ["to get out of hand", "to deteriorate"], drill: { jp: "Slike møter kommer til å utarte fort", en: "Such meetings are going to degenerate quickly" }, hint: "å utarte → utarter, utartet, har utartet. Ut + en art. ⚠ Alltid til det verre, og nesten alltid om noe MENNESKER gjør sammen: et møte, en debatt, en fest. Tall og maskiner utarter ikke." },
        { id: "no-u114l4-aforsterke", type: "vocab", front: "å forsterke", reading: "aforsterke", meaning: "to amplify (make an existing effect bigger)", example: { jp: "Reglene forsterker forskjellene de skulle gjøre mindre, og det oppdaget ingen før etter tre år.", en: "The rules amplify the differences they were meant to make smaller, and nobody discovered that until after three years." }, accept: ["to reinforce", "to intensify"], drill: { jp: "Det er lett å forsterke en gammel forskjell", en: "It is easy to amplify an old difference" }, hint: "å forsterke → forsterker, forsterket, har forsterket. For + sterk (u10). ⚠ Du kan bare forsterke noe som ALLEREDE er der. Å skjerpe er å gjøre kravet strengere; å forsterke er å gjøre virkningen større." },
        { id: "no-u114l4-enkatalysator", type: "vocab", front: "en katalysator", reading: "enkatalysator", meaning: "a catalyst (speeds it up without being the cause)", example: { jp: "Saka var en katalysator og ikke en årsak, for alt dette lå der fra før.", en: "The case was a catalyst and not a cause, because all this was already there." }, accept: ["a catalyst"], drill: { jp: "Vi kaller det en katalysator og ikke mer", en: "We call it a catalyst and nothing more" }, hint: "en katalysator → katalysatoren, flertall katalysatorer. ⚠ Nettopp fordi det IKKE er årsaken: en katalysator gjør at noe skjer raskere, men forklarer ikke hvorfor det skjedde. Også delen i en bil." },
        { id: "no-u114l4-aavstedkomme", type: "vocab", front: "å avstedkomme", reading: "aavstedkomme", meaning: "to bring about (formal, of something notable)", example: { jp: "Et brev kan avstedkomme mer enn en hel rettssak gjør, og det vet alle som jobber her.", en: "A letter can bring about more than a whole court case does, and everybody who works here knows it." }, accept: ["to give rise to", "to occasion"], drill: { jp: "Lite skal til for å avstedkomme mye", en: "Little is needed to bring about a lot" }, hint: "å avstedkomme → avstedkommer, avstedkom, har avstedkommet. Av + sted + å komme (u3). ⚠ Høy skriftlig stil — aviser og offentlige dokumenter. Alltid om noe som MERKES; ingen avstedkommer noe smått." },
        { id: "no-u114l4-amotvirke", type: "vocab", front: "å motvirke", reading: "amotvirke", meaning: "to counteract (work against an effect)", example: { jp: "Ordningen skal motvirke ringvirkningene, men den hjelper bare dem som allerede klarer seg.", en: "The arrangement is meant to counteract the knock-on effects, but it only helps those who are already coping." }, accept: ["to counter", "to offset"], drill: { jp: "Det er vanskelig å motvirke ei kjedereaksjon", en: "It is hard to counteract a chain reaction" }, hint: "å motvirke → motvirker, motvirket, har motvirket. Mot (u76) + å virke (u54). ⚠ Du motvirker en VIRKNING, ikke en årsak — derfor er «tiltaket motvirker problemet» ofte en innrømmelse av at årsaken står igjen." },
      ],
    },
  ],
};
