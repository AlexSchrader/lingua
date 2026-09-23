// NO Unit 106 — Grammatikk 9: det uvirkelige (slot: grammar-9) — B2 GRAMMAR
// ─────────────────────────────────────────────────────────────────────────────
// Slot "Grammar 9 — conditional nuance and counterfactuals", retitled in
// Norwegian per CLAUDE.md → "No front language". Conventions: unit1.js §1–§9,
// unit51.js B1–B9, unit88.js C1–C7. unit88.js C6 names u106–u108 as the three
// PATTERN slots and puts the counterfactual here; this unit takes it.
//
// ⚠ THE PLAIN CONDITIONAL IS ALREADY TAUGHT TWICE. u36 gave hvis, dersom, om,
// hvis ikke, uten at, i tilfelle, som om, selv om; u37 "Grammatikk 5" gave the
// past modals kunne, ville, skulle, burde, måtte for wishes and polite requests.
// u54 and u73 took the hedging lexis (kanskje, trolig, antakelig, et forbehold,
// i utgangspunktet, i prinsippet). So "conditional nuance" has nothing left at
// the plain level, and this unit spends its four lessons on the layer above it:
//   l1  IMAGINING THE OPPOSITE — the frames that open an unreal world.
//   l2  THE CONDITION ITSELF, in the formal register a contract uses.
//   l3  THE TWO ENDS of the range you are arguing between.
//   l4  THE UNREAL PAST — Norwegian's counterfactual perfect, ville/skulle/
//       kunne/burde + ha + participle. This is a PARADIGM, and it is taught as
//       one: four cards with four different English answers, and each hint says
//       which of the four the learner should have reached for.
//
// ⚠ NOTHING HERE IS A NOUN OR A VERB — these are function words, taught the way
// unit1.js §7 and unit51.js B3 tell you to teach a connective: as a single front
// whose example sentence carries the pattern. A multiword front must appear in
// its drill CONTIGUOUS and verbatim (findWholeWord matches the whole string).
//
// ⚠ `i så fall`, `med mindre`, `i utgangspunktet`, `eventuelt`, `hvis ikke`,
// `uten at`, `som om`, `i tilfelle` and `motsatt` are all TAKEN (u36/u53/u54/
// u73). Measured, not guessed.
//
// SCOPE: the frozen base u1–u105 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT106 = {
  id: "no-u106",
  lang: "no",
  title: "Grammatikk 9: det uvirkelige",
  order: 106,
  stage: "b2",
  lessons: [
    {
      id: "no-u106l1",
      unit: 106,
      lesson: 1,
      title: "Å tenke seg det motsatte",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Open an unreal world on purpose — say what would be the case if things were not the way they are, without anybody thinking you mean it.",
      items: [
        { id: "no-u106l1-tenkom", type: "vocab", front: "tenk om", reading: "tenkom", meaning: "imagine if", example: { jp: "Tenk om han hadde rett, da har vi brukt tre år på feil sak.", en: "Imagine if he was right — then we have spent three years on the wrong case." }, accept: ["what if", "suppose"], drill: { jp: "Tenk om det var sant", en: "Imagine if it was true" }, hint: "tenk om + setning. Bydeform av å tenke (u17) + om. Åpner noe du IKKE tror på; hvis (u36) åpner noe som godt kan skje." },
        { id: "no-u106l1-ennom", type: "vocab", front: "enn om", reading: "ennom", meaning: "than if", example: { jp: "Svaret blir dårligere enn om vi hadde ventet en uke til.", en: "The answer gets worse than if we had waited one more week." }, accept: ["than it would be if"], drill: { jp: "Det er verre enn om vi tapte", en: "It is worse than if we lost" }, hint: "enn om + setning. Enn (u10) er sammenligningsordet, om er vilkåret. Kommer ALLTID etter et komparativ: bedre enn om, verre enn om, dyrere enn om." },
        { id: "no-u106l1-imotsattfall", type: "vocab", front: "i motsatt fall", reading: "imotsattfall", meaning: "otherwise (if not)", example: { jp: "Vi trenger svaret før fredag; i motsatt fall må hele møtet flyttes.", en: "We need the answer before Friday; otherwise the whole meeting has to be moved." }, accept: ["failing that", "if not"], drill: { jp: "I motsatt fall sier vi nei", en: "Otherwise we say no" }, hint: "i motsatt fall, som ett uttrykk. Motsatt (u53) + et fall. Formelt og skriftlig; muntlig sier folk ellers eller hvis ikke (u36)." },
        { id: "no-u106l1-hypotetisk", type: "vocab", front: "hypotetisk", reading: "hypotetisk", meaning: "hypothetical", example: { jp: "Saka er hypotetisk, og likevel svarte hun på den i ti minutter.", en: "The case is hypothetical, and still she answered it for ten minutes." }, accept: ["theoretical (unreal)"], drill: { jp: "Svaret er hypotetisk og ikke sikkert", en: "The answer is hypothetical and not certain" }, hint: "hypotetisk → hypotetisk, hypotetiske. -isk-ord får ikke -t i intetkjønn. Fra en hypotese (u94): tenkt, ikke virkelig." },
        { id: "no-u106l1-askulleonske", type: "vocab", front: "å skulle ønske", reading: "askulleonske", meaning: "to wish (that things were otherwise)", example: { jp: "Jeg skulle ønske vi hadde spurt henne først, men det er lett å si nå.", en: "I wish we had asked her first, but that is easy to say now." }, accept: ["to wish"], drill: { jp: "Det er lett å skulle ønske noe annet", en: "It is easy to wish for something else" }, hint: "å skulle ønske → skulle ønske (samme form alltid). Merk ø-folden: lesinga er askulleonske. ⚠ Bøyes IKKE: det heter jeg skulle ønske, aldri jeg skal ønske. Setningen etter står i fortid: jeg skulle ønske jeg VISSTE." },
        { id: "no-u106l1-iteorien", type: "vocab", front: "i teorien", reading: "iteorien", meaning: "in theory", example: { jp: "I teorien har alle rett til plassen, men i virkeligheten er det bare de som spør tidlig som får den.", en: "In theory everybody has the right to the place, but in reality it is only those who ask early who get it." }, accept: ["theoretically"], drill: { jp: "I teorien er alt mulig her", en: "In theory everything is possible here" }, hint: "i teorien, alltid i bestemt form. Fra en teori (u34). Motstykket er i praksis (u108) — og de to står nesten alltid i samme setning." },
      ],
    },
    {
      id: "no-u106l2",
      unit: 106,
      lesson: 2,
      title: "Vilkåret",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State a condition the way a contract does — say exactly what your yes depends on, and what you are leaving out of the calculation.",
      items: [
        { id: "no-u106l2-forutsattat", type: "vocab", front: "forutsatt at", reading: "forutsattat", meaning: "provided that (as a stated condition)", example: { jp: "Vi kan levere i mai, forutsatt at delene kommer fram i tide.", en: "We can deliver in May, provided that the parts arrive in time." }, accept: ["assuming that", "on condition that"], drill: { jp: "Vi sier ja forutsatt at prisen holder", en: "We say yes provided that the price holds" }, hint: "forutsatt at + setning. Fra å forutsette. Et VILKÅR du setter; dersom (u29) er bare et hvis, uten kravet i seg." },
        { id: "no-u106l2-gittat", type: "vocab", front: "gitt at", reading: "gittat", meaning: "given that", example: { jp: "Gitt at tallene stemmer, er konklusjonen hans riktig; men det er nettopp tallene ingen har sett.", en: "Given that the figures are right, his conclusion is correct; but it is exactly the figures nobody has seen." }, accept: ["assuming", "if we take it that"], drill: { jp: "Gitt at tallene stemmer er svaret klart", en: "Given that the figures are right the answer is clear" }, hint: "gitt at + setning. Perfektum partisipp av å gi (u1), brukt som bindeord. Du TAR noe for gitt for argumentets skyld — uten å si at du tror på det." },
        { id: "no-u106l2-safremt", type: "vocab", front: "så fremt", reading: "safremt", meaning: "as long as (provided)", example: { jp: "Hun blir med, så fremt hun slipper å snakke.", en: "She will come along, as long as she does not have to speak." }, accept: ["provided", "so long as"], drill: { jp: "Vi kommer så fremt været holder", en: "We are coming as long as the weather holds" }, hint: "så fremt + setning. Merk å-folden: lesinga er safremt. Nesten det samme som så lenge (u29), men så lenge kan også være om TID; så fremt er bare vilkår." },
        { id: "no-u106l2-underforutsetningav", type: "vocab", front: "under forutsetning av", reading: "underforutsetningav", meaning: "on the assumption of", example: { jp: "Penger ble gitt under forutsetning av at bygget står ferdig i år.", en: "Money was given on the assumption that the building is finished this year." }, accept: ["subject to", "on the basis of"], drill: { jp: "De sa ja under forutsetning av dette", en: "They said yes on the assumption of this" }, hint: "under forutsetning av + substantiv, eller + at-setning. Den formelle, skriftlige versjonen av forutsatt at. Står i hvert eneste norske vedtak." },
        { id: "no-u106l2-pabetingelseav", type: "vocab", front: "på betingelse av", reading: "pabetingelseav", meaning: "on condition of", example: { jp: "Han ble med på betingelse av at ingen skrev om det, og avisa skrev om det samme kveld.", en: "He joined on condition that nobody wrote about it, and the paper wrote about it the same evening." }, accept: ["conditional on"], drill: { jp: "Han kom på betingelse av at vi betalte", en: "He came on condition that we paid" }, hint: "på betingelse av + substantiv eller at-setning. En betingelse er kravet selv. Sterkere enn forutsatt at: dette er en AVTALE, ikke en antakelse." },
        { id: "no-u106l2-settbortfra", type: "vocab", front: "sett bort fra", reading: "settbortfra", meaning: "leaving aside", example: { jp: "Sett bort fra prisen er dette det beste forslaget vi har fått.", en: "Leaving the price aside, this is the best proposal we have had." }, accept: ["apart from", "disregarding"], drill: { jp: "Sett bort fra prisen er alt godt", en: "Leaving aside the price everything is good" }, hint: "sett bort fra + substantiv. Perfektum partisipp av å se (u2) + bort fra. Du tar noe UT av regnestykket med vilje — og sier at du gjør det." },
      ],
    },
    {
      id: "no-u106l3",
      unit: 106,
      lesson: 3,
      title: "Ytterpunktene",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue between two ends of a range — name the worst case and the best one, and say which of them you are actually planning for.",
      items: [
        { id: "no-u106l3-iverstefall", type: "vocab", front: "i verste fall", reading: "iverstefall", meaning: "at worst", example: { jp: "I verste fall taper vi et år, og det er ikke nok til å si nei til hele planen.", en: "At worst we lose a year, and that is not enough to say no to the whole plan." }, accept: ["in the worst case"], drill: { jp: "I verste fall taper vi alt", en: "At worst we lose everything" }, hint: "i verste fall, alltid i denne formen. Verre → verst (u11). Står først i setningen, og da kommer verbet rett etter (V2)." },
        { id: "no-u106l3-ibestefall", type: "vocab", front: "i beste fall", reading: "ibestefall", meaning: "at best", example: { jp: "Tallet er i beste fall usikkert, og det er slik han sier at det er galt uten å si det.", en: "The figure is at best uncertain, and that is how he says it is wrong without saying so." }, accept: ["in the best case"], drill: { jp: "I beste fall tar det to år", en: "At best it takes two years" }, hint: "i beste fall. ⚠ Brukes oftest NEGATIVT i norsk debatt: «i beste fall uklart» betyr at taleren mener det er verre enn uklart." },
        { id: "no-u106l3-potensielt", type: "vocab", front: "potensielt", reading: "potensielt", meaning: "potentially", example: { jp: "Dette er potensielt en stor sak, men den blir det bare om noen andre også finner det samme.", en: "This is potentially a big case, but it only becomes one if somebody else finds the same thing." }, accept: ["possibly (in principle)"], drill: { jp: "Dette er potensielt et stort problem", en: "This is potentially a big problem" }, hint: "potensielt, adverb. Fra et potensial. Sier at noe KAN bli, ikke at det er sannsynlig — kanskje (u12) sier noe om hvor trolig det er." },
        { id: "no-u106l3-eneventualitet", type: "vocab", front: "en eventualitet", reading: "eneventualitet", meaning: "eventuality (contingency)", example: { jp: "De tenkte på en eventualitet ingen trodde på, og det var nettopp den som kom.", en: "They thought about an eventuality nobody believed in, and it was exactly that one that came." }, accept: ["a contingency", "a possible case"], drill: { jp: "De tenkte på en eventualitet til", en: "They thought about one more eventuality" }, hint: "en eventualitet → eventualiteten, flertall eventualiteter. -tet er hankjønn. ⚠ Ikke det samme som eventuelt (u54), som betyr «hvis det blir aktuelt»." },
        { id: "no-u106l3-omnodvendig", type: "vocab", front: "om nødvendig", reading: "omnodvendig", meaning: "if necessary", example: { jp: "Vi tar møtet om igjen om nødvendig, men da må noen si hva som var galt med det første.", en: "We will hold the meeting again if necessary, but then somebody has to say what was wrong with the first one." }, accept: ["if need be"], drill: { jp: "Vi tar en runde til om nødvendig", en: "We will take one more round if necessary" }, hint: "om nødvendig, uten verb etter. Merk ø-folden: lesinga er omnodvendig. Kort form av «om det er nødvendig» (u40) — og den korte formen er den vanlige." },
        { id: "no-u106l3-ommulig", type: "vocab", front: "om mulig", reading: "ommulig", meaning: "if possible", example: { jp: "Svar i dag om mulig, for da rekker vi å gjøre noe med det.", en: "Answer today if possible, because then we have time to do something about it." }, accept: ["where possible"], drill: { jp: "Vi svarer i dag om mulig", en: "We will answer today if possible" }, hint: "om mulig, uten verb etter. ⚠ Betyr også «enda mer»: «hun var om mulig enda tydeligere» — og da står det foran et komparativ." },
      ],
    },
    {
      id: "no-u106l4",
      unit: 106,
      lesson: 4,
      title: "Den uvirkelige fortida",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what would, should, could or ought to have happened — and pick the right one of the four, because English blurs two of them together.",
      items: [
        { id: "no-u106l4-haddedetikkevaertfor", type: "vocab", front: "hadde det ikke vært for", reading: "haddedetikkevaertfor", meaning: "if it had not been for", example: { jp: "Hadde det ikke vært for henne, hadde ingen spurt om dette i det hele tatt.", en: "If it had not been for her, nobody would have asked about this at all." }, accept: ["but for", "were it not for"], drill: { jp: "Hadde det ikke vært for prisen", en: "If it had not been for the price" }, hint: "hadde det ikke vært for + substantiv. Merk æ-folden: lesinga er haddedetikkevaertfor. ⚠ Setningen etter begynner med verbet: «hadde det ikke vært for henne, HADDE vi tapt» — ikke «vi hadde tapt»." },
        { id: "no-u106l4-villeha", type: "vocab", front: "ville ha", reading: "villeha", meaning: "would have (done)", example: { jp: "Han ville ha sagt det samme i dag, og det er nettopp det som gjør svaret hans mindre interessant.", en: "He would have said the same thing today, and that is exactly what makes his answer less interesting." }, accept: ["would have"], drill: { jp: "Han ville ha sagt noe annet", en: "He would have said something else" }, hint: "ville ha + perfektum partisipp. ⚠ HA-EN KAN FALLE BORT: «han ville sagt det samme» betyr nøyaktig det samme, og er det folk sier. Du må kjenne begge." },
        { id: "no-u106l4-skulleha", type: "vocab", front: "skulle ha", reading: "skulleha", meaning: "was meant to have (done)", example: { jp: "Vi skulle ha fått svaret i mai, og vi har fremdeles ikke fått det.", en: "We were meant to have got the answer in May, and we still have not got it." }, accept: ["was supposed to have", "was going to have"], drill: { jp: "Vi skulle ha spurt henne før", en: "We were meant to have asked her earlier" }, hint: "skulle ha + perfektum partisipp. ⚠ Dette er AVTALEN som ikke ble holdt — noen hadde bestemt det. Burde ha er din egen vurdering etterpå." },
        { id: "no-u106l4-kunneha", type: "vocab", front: "kunne ha", reading: "kunneha", meaning: "could have (done)", example: { jp: "Det kunne ha gått mye verre, men det er ikke et argument for at det gikk bra.", en: "It could have gone much worse, but that is not an argument that it went well." }, accept: ["might have", "could have"], drill: { jp: "Dette kunne ha gått mye verre", en: "This could have gone much worse" }, hint: "kunne ha + perfektum partisipp. Om MULIGHETEN som fantes. Også om det du ikke gjorde: «du kunne ha sagt fra» — og da ligger det en bebreidelse i den." },
        { id: "no-u106l4-burdeha", type: "vocab", front: "burde ha", reading: "burdeha", meaning: "ought to have (done)", example: { jp: "Du burde ha sagt fra før, selv om ingen hadde spurt deg om det.", en: "You ought to have said something earlier, even though nobody had asked you about it." }, accept: ["should have"], drill: { jp: "Du burde ha sagt det før", en: "You ought to have said it earlier" }, hint: "burde ha + perfektum partisipp. Bør (u13) → burde (u37) → burde ha. ⚠ Dette er MORALSK: det var riktig å gjøre. Skulle ha er bare at det var avtalt." },
        { id: "no-u106l4-altannetlikt", type: "vocab", front: "alt annet likt", reading: "altannetlikt", meaning: "all else being equal", example: { jp: "Alt annet likt er den billige løsningen best, og alt annet er nesten aldri likt.", en: "All else being equal the cheap solution is best, and all else is almost never equal." }, accept: ["other things being equal", "ceteris paribus"], drill: { jp: "Alt annet likt er dette bedre", en: "All else being equal this is better" }, hint: "alt annet likt, som ett uttrykk. Alt (u14) + annet (u14) + likt (u53). Fra økonomifaget, nå vanlig i all drøfting: du holder alt DU ikke snakker om fast." },
      ],
    },
  ],
};
