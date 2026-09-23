// NO Unit 124 — Styring, spillerom og selvstendighet (slot: coverage-b2-14) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 14 (B2)" — a slot number, not an instruction.
// Theme chosen here. Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js
// C1–C7.
//
// WHY THIS THEME. u92 took POLITICS AND LAW, u100 WORKING LIFE and u110 the
// INSTITUTIONAL voice. All three describe bodies from the outside. None of them
// gives the learner the words for the relation BETWEEN two parties: who may
// decide over whom, who has to fall into line, and what it means to stand free
// of somebody. `makt` (u55) and `en leder` are the whole of what the corpus had.
//   l1  who holds the authority
//   l2  taking control of something
//   l3  bending to somebody else
//   l4  standing free
//
// ⚠ THE LAST FOUR OF BLOCK 1'S RESERVED LIST land here: `ei myndighet`,
// `en stab`, `et ansvarsområde` and `ei innflytelse` (unit88.js C6). TWO ARE
// RE-GENDERED, and the reserved list was wrong, not this unit:
//   • `ei myndighet` → `en myndighet`. -het is ALWAYS masculine (unit88.js C1).
//   • `ei innflytelse` → `en innflytelse`. -else is ALWAYS masculine, same rule.
// u114's header in this block cites `ei innflytelse`; that citation is now
// stale and is corrected there in the same commit.
//
// ⚠ CUT:
//   • `uavhengig` — a transparent negation of `avhengig`, which this unit
//     teaches in l3. `å stå fritt` took the slot in l4.
//   • `selvstendig` — `en selvstendighet` is taught at u95 and the adjective is
//     a transparent derivation of it.
//   • `å ta styringa` — the same lexeme as `ei styring` in l1 of this unit.
//   • `ei føring` / `å legge føringer` — already taught at u118l4, this block.
//
// GENDER: -ing FEMININE (`ei styring`), -het/-else MASCULINE (`en myndighet`,
// `en habilitet`, `en innflytelse`). Compounds inherit from the LAST element:
// `en råderett` because `en rett` is masculine, `et ansvarsområde` because
// `et område` (u45) is neuter, `et overtak` because every -tak in this corpus
// is neuter, `et maktforhold` because `et forhold` (u22) is.
// FIRST FEMININE is `ei styring` (l1) and carries the en-/ei- note.
//
// DRILLS: å-verb drills use an å-frame; adjective drills take a COMMON-GENDER
// SINGULAR subject so the front appears verbatim.
//
// SCOPE: the frozen base u1–u123 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT124 = {
  id: "no-u124",
  lang: "no",
  title: "Styring, spillerom og selvstendighet",
  order: 124,
  stage: "b2",
  lessons: [
    {
      id: "no-u124l1",
      unit: 124,
      lesson: 1,
      title: "Hvem som har myndighet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say who is entitled to decide a question — and separate the right to decide from the power to.",
      items: [
        { id: "no-u124l1-enmyndighet", type: "vocab", front: "en myndighet", reading: "enmyndighet", meaning: "authority (the right to decide)", example: { jp: "Kommunen har ikke myndighet i saka, og de har likevel svart på den i to år.", en: "The council has no authority in the case, and they have answered it for two years all the same." }, accept: ["competence (legal)", "jurisdiction"], drill: { jp: "Kommunen har en myndighet ingen kjenner", en: "The council has an authority nobody knows about" }, hint: "en myndighet → myndigheten, flertall myndigheter. ⚠ -het er ALLTID hankjønn, og en eldre liste merker dette ordet `ei` — det er feil. I flertall betyr myndighetene STATEN: «myndighetene har bestemt»." },
        { id: "no-u124l1-enraderett", type: "vocab", front: "en råderett", reading: "enraderett", meaning: "a right of disposal (the right to do as you like with a thing)", example: { jp: "De har råderett over grunnen, og retten til å bruke veien over den har naboen.", en: "They have a right of disposal over the land, and the neighbour has the right to use the road across it." }, accept: ["a right to dispose of", "control (legal)"], drill: { jp: "De har en råderett ingen har lest", en: "They have a right of disposal nobody has read" }, hint: "en råderett → råderetten. Hankjønn fordi en rett (u32) er det. Merk å-folden: lesinga er enraderett. Å råde + rett. ⚠ Om EIENDOM og RESSURSER, ikke om folk: du har råderett over en ting." },
        { id: "no-u124l1-araover", type: "vocab", front: "å rå over", reading: "araover", meaning: "to have at one's disposal (command a resource)", example: { jp: "Avdelingen rår over hele budsjettet, og de som gjør arbeidet får vite om det etterpå.", en: "The department has the whole budget at its disposal, and those who do the work are told afterwards." }, accept: ["to dispose of", "to command (resources)"], drill: { jp: "De pleier å rå over hele budsjettet", en: "They tend to have the whole budget at their disposal" }, hint: "å rå over → rår, rådde, har rådd. Merk å-folden: lesinga er araover. ⚠ Om MIDLER du kan bruke: penger, folk, tid. Fast vending: «så langt jeg rår», og den svakere «å råde over»." },
        { id: "no-u124l1-etansvarsomrade", type: "vocab", front: "et ansvarsområde", reading: "etansvarsomrade", meaning: "an area of responsibility (what is formally yours)", example: { jp: "Saka faller mellom to ansvarsområder, og derfor har ingen av dem gjort noe med den.", en: "The case falls between two areas of responsibility, and that is why neither of them has done anything about it." }, accept: ["a remit", "a portfolio"], drill: { jp: "Saka faller mellom et ansvarsområde og et annet", en: "The case falls between one area of responsibility and another" }, hint: "et ansvarsområde → ansvarsområdet, flertall ansvarsområder. Intetkjønn fordi et område (u45) er det. Et ansvar (u50) + område. ⚠ Den klassiske norske feilen er akkurat den i eksempelet: en sak som faller mellom to." },
        { id: "no-u124l1-enstab", type: "vocab", front: "en stab", reading: "enstab", meaning: "a staff (the people who serve a leader)", example: { jp: "Staben skriver alt han sier, og de står ikke til ansvar for noe av det.", en: "The staff write everything he says, and they answer for none of it." }, accept: ["a staff", "a support team"], drill: { jp: "Staben i en stab skriver alt", en: "The people in a staff write everything" }, hint: "en stab → staben, flertall staber. ⚠ Ikke de ansatte i sin alminnelighet — det heter de ansatte. En stab er de som STØTTER en ledelse: kommunikasjon, jus, økonomi." },
        { id: "no-u124l1-eistyring", type: "vocab", front: "ei styring", reading: "eistyring", meaning: "governance (how a body is steered)", example: { jp: "Styringa av selskapet er delt mellom to organer, og ingen av dem vil ta det endelige ordet.", en: "The governance of the company is split between two bodies, and neither will take the final word." }, accept: ["steering", "management (system)"], drill: { jp: "Vi ser ei styring ingen har tenkt gjennom", en: "We see a governance nobody has thought through" }, hint: "ei styring → styringa. Hunkjønnsord kan du også skrive en styring / styringen, og den formen er den vanlige i fagtekst — merk begge. -ing er hunkjønn. Fra å styre (u55)." },
      ],
    },
    {
      id: "no-u124l2",
      unit: 124,
      lesson: 2,
      title: "Å ta kontrollen over noe",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that somebody has taken control — and say whether they were entitled to.",
      items: [
        { id: "no-u124l2-aoverstyre", type: "vocab", front: "å overstyre", reading: "aoverstyre", meaning: "to override (set aside a decision made below you)", example: { jp: "Ledelsen overstyrer forskerne hver gang det haster, og etterpå spør de hvorfor ingen sier fra.", en: "The management overrides the researchers every time there is a hurry, and afterwards they ask why nobody speaks up." }, accept: ["to overrule", "to set aside (a decision)"], drill: { jp: "Det er lett å overstyre dem som kan", en: "It is easy to override those who know" }, hint: "å overstyre → overstyrer, overstyrte, har overstyrt. Over + å styre (u55). ⚠ Forutsetter et HIERARKI (u123): bare den over kan overstyre. En sidestilt part kan bare være uenig." },
        { id: "no-u124l2-etovertak", type: "vocab", front: "et overtak", reading: "etovertak", meaning: "the upper hand (a lasting advantage over somebody)", example: { jp: "Den ene siden har et overtak fordi den andre må ha et svar før sommeren.", en: "One side has the upper hand because the other has to have an answer before the summer." }, accept: ["an advantage", "the whip hand"], drill: { jp: "Den ene siden har et overtak her", en: "One side has the upper hand here" }, hint: "et overtak → overtaket. Intetkjønn fordi hvert -tak i dette kurset er det. Over + et tak (u30). ⚠ Brukes med på: «å få overtaket på noen». Om FORHANDLINGER og konflikt, ikke om formell rett." },
        { id: "no-u124l2-agripeinn", type: "vocab", front: "å gripe inn", reading: "agripeinn", meaning: "to intervene (step in and stop something)", example: { jp: "Ingen grep inn før saka sto i avisa, og alle hadde visst om den i mange uker.", en: "Nobody intervened until the case was in the paper, and everybody had known about it for many weeks." }, accept: ["to step in", "to intervene"], drill: { jp: "Noen burde prøve å gripe inn nå", en: "Somebody ought to try to intervene now" }, hint: "å gripe inn → griper, grep, har grepet. Å gripe + inn. ⚠ Det ligger et ANSVAR i ordet: den som griper inn hadde en grunn til å kunne. Å blande seg er det nøytrale, litt negative ordet." },
        { id: "no-u124l2-etgrep", type: "vocab", front: "et grep", reading: "etgrep", meaning: "a move (a measure taken to change something)", example: { jp: "Grepet virket med en gang, og det gjorde ingenting med det som lå under.", en: "The move worked at once, and it did nothing about what lay underneath." }, accept: ["a measure", "a device (of method)"], drill: { jp: "De gjorde et grep ingen hadde ventet", en: "They made a move nobody had expected" }, hint: "et grep → grepet, flertall grep (ubøyd). Fra å gripe. ⚠ Tre bruk: et håndtak, et tiltak, og et kunstnerisk virkemiddel — «et litterært grep». Alle tre er vanlige." },
        { id: "no-u124l2-adominere", type: "vocab", front: "å dominere", reading: "adominere", meaning: "to dominate (fill the room and leave no space)", example: { jp: "Han dominerer hvert møte, og det er ikke det samme som at han får det som han vil.", en: "He dominates every meeting, and that is not the same as getting his way." }, accept: ["to dominate"], drill: { jp: "Det er lett å dominere et lite møte", en: "It is easy to dominate a small meeting" }, hint: "å dominere → dominerer, dominerte, har dominert. ⚠ Om PLASSEN noen tar, ikke om makt de har: en farge kan dominere et bilde. I norsk arbeidsliv er det en hard kritikk av en person." },
        { id: "no-u124l2-etmaktforhold", type: "vocab", front: "et maktforhold", reading: "etmaktforhold", meaning: "a power relation (who can hurt whom, and how much)", example: { jp: "Maktforholdet er ulikt, og derfor betyr en avtale mellom dem ikke så mye.", en: "The power relation is unequal, and that is why an agreement between them does not mean much." }, accept: ["a balance of power", "a power dynamic"], drill: { jp: "Her er et maktforhold ingen snakker om", en: "Here is a power relation nobody talks about" }, hint: "et maktforhold → maktforholdet, flertall maktforhold (ubøyd). Intetkjønn fordi et forhold (u22) er det. Makt (u55) + forhold. ⚠ Arbeidsrettens grunnbegrep i Norge: fordi maktforholdet er ulikt, kan du ikke avtale deg bort fra vernereglene." },
      ],
    },
    {
      id: "no-u124l3",
      unit: 124,
      lesson: 3,
      title: "Å bøye seg for noen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that somebody gave way — and say whether it was a choice, a duty or a habit.",
      items: [
        { id: "no-u124l3-aunderordneseg", type: "vocab", front: "å underordne seg", reading: "aunderordneseg", meaning: "to subordinate oneself (accept another's authority)", example: { jp: "Hun underordner seg vedtaket, og hun har skrevet en merknad om at hun er uenig.", en: "She subordinates herself to the decision, and she has written a note saying she disagrees." }, accept: ["to submit to", "to accept authority"], drill: { jp: "Det er tungt å underordne seg her", en: "It is hard to subordinate oneself here" }, hint: "å underordne seg → underordner seg, underordnet seg, har underordnet seg. Alltid med seg. ⚠ Om FORMELL rang: du underordner deg en ledelse, en lov, et vedtak. Det sier ingenting om hva du mener." },
        { id: "no-u124l3-ainnordneseg", type: "vocab", front: "å innordne seg", reading: "ainnordneseg", meaning: "to fall into line (adapt to how things are done here)", example: { jp: "Nye folk innordner seg i løpet av noen uker, og etterpå ser ingen av dem hva som er galt.", en: "New people fall into line within a few weeks, and afterwards none of them can see what is wrong." }, accept: ["to conform", "to fit in"], drill: { jp: "Nye folk pleier å innordne seg fort", en: "New people tend to fall into line quickly" }, hint: "å innordne seg → innordner seg, innordnet seg, har innordnet seg. ⚠ Om KULTUR og SKIKK, ikke om rang: du innordner deg et miljø. Å underordne seg gjelder noen over deg; å innordne seg gjelder de rundt deg." },
        { id: "no-u124l3-underlagt", type: "vocab", front: "underlagt", reading: "underlagt", meaning: "subject to (placed under somebody's rules)", example: { jp: "Selskapet er underlagt de samme reglene som de store, og det har fire folk i arbeid.", en: "The company is subject to the same rules as the big ones, and it has four people at work." }, accept: ["governed by", "placed under"], drill: { jp: "Selskapet er underlagt en annen lov", en: "The company is subject to another law" }, hint: "underlagt → underlagt, underlagte. Perfektum partisipp av å underlegge, brukt som adjektiv. ⚠ Alltid FORMELT og alltid med et organ eller et regelverk etter: underlagt loven, underlagt departementet." },
        { id: "no-u124l3-agietter", type: "vocab", front: "å gi etter", reading: "agietter", meaning: "to give way (stop resisting, under pressure)", example: { jp: "De gir etter på den ene saka, og i bytte får de ingenting de kan vise fram.", en: "They give way on that one case, and in return they get nothing they can show." }, accept: ["to yield", "to back down"], drill: { jp: "De kommer til å gi etter til slutt", en: "They are going to give way in the end" }, hint: "å gi etter → gir etter, gav etter, har gitt etter. Brukes med for eller på. ⚠ Også fysisk: isen gir etter. Om mennesker ligger det PRESS i ordet — du gir etter FORDI noen presset deg." },
        { id: "no-u124l3-avhengig", type: "vocab", front: "avhengig", reading: "avhengig", meaning: "dependent (cannot manage without the other)", example: { jp: "Kommunen er avhengig av det ene selskapet, og alle som forhandler vet det.", en: "The council is dependent on that one company, and everybody who negotiates knows it." }, accept: ["reliant", "dependent"], drill: { jp: "Kommunen er avhengig av denne avtalen", en: "The council is dependent on this agreement" }, hint: "avhengig → avhengig, avhengige. -ig-ord får ikke -t i intetkjønn. Brukes med av. ⚠ Også om rus: «avhengig av tabletter». I en forhandling er det den viktigste opplysningen om motparten." },
        { id: "no-u124l3-eninnflytelse", type: "vocab", front: "en innflytelse", reading: "eninnflytelse", meaning: "influence (what a person can move without ordering it)", example: { jp: "Hun har stor innflytelse og ingen myndighet, og det er den sterkeste stillingen i huset.", en: "She has great influence and no authority, and that is the strongest position in the building." }, accept: ["influence", "sway"], drill: { jp: "Hun har en innflytelse ingen kan måle", en: "She has an influence nobody can measure" }, hint: "en innflytelse → innflytelsen. ⚠ -else er ALLTID hankjønn, og en eldre liste merker ordet `ei` — det er feil. Brukes med på eller over. Ei innvirkning (u114) er det en TING gjør; en innflytelse er det et MENNESKE har." },
      ],
    },
    {
      id: "no-u124l4",
      unit: 124,
      lesson: 4,
      title: "Å stå fritt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Claim that somebody is free of a tie — and say what kind of freedom you mean, because these are four different claims.",
      items: [
        { id: "no-u124l4-astafritt", type: "vocab", front: "å stå fritt", reading: "astafritt", meaning: "to be free to (nothing binds you here)", example: { jp: "Styret står fritt til å velge noen andre, og alle vet at det ikke kommer til å skje.", en: "The board is free to choose somebody else, and everybody knows it is not going to happen." }, accept: ["to be at liberty", "to have a free hand"], drill: { jp: "De kommer til å stå fritt her", en: "They are going to be free to act here" }, hint: "å stå fritt → står, sto, har stått. Brukes med til å. Merk å-folden: lesinga er astafritt. ⚠ Om det FORMELLE: ingen regel hindrer deg. Det sier ingenting om hva som er mulig i praksis." },
        { id: "no-u124l4-afrigjoreseg", type: "vocab", front: "å frigjøre seg", reading: "afrigjoreseg", meaning: "to free oneself (get out from under something slowly)", example: { jp: "Kommunen frigjør seg fra den ene arbeidsgiveren over mange år, og det koster hvert år.", en: "The council frees itself from that one employer over many years, and it costs every year." }, accept: ["to break free", "to emancipate oneself"], drill: { jp: "Det tar tid å frigjøre seg fra slikt", en: "It takes time to free oneself from that" }, hint: "å frigjøre seg → frigjør seg, frigjorde seg, har frigjort seg. Merk ø-folden: lesinga er afrigjoreseg. Fri + å gjøre + seg. ⚠ En PROSESS, ofte lang. Brukes med fra." },
        { id: "no-u124l4-alosriveseg", type: "vocab", front: "å løsrive seg", reading: "alosriveseg", meaning: "to break away (cut the tie in one move)", example: { jp: "Den ene gruppa løsriver seg fra resten, og begge sider kaller det den andre sin skyld.", en: "That one group breaks away from the rest, and both sides call it the other one's fault." }, accept: ["to secede", "to tear oneself away"], drill: { jp: "Det er dyrt å løsrive seg fra dem", en: "It is expensive to break away from them" }, hint: "å løsrive seg → løsriver seg, løsrev seg, har løsrevet seg. Merk ø-folden: lesinga er alosriveseg. Løs + å rive + seg. ⚠ Om ett BRUDD, ikke en prosess — og det politiske ordet for løsrivelse av et landområde." },
        { id: "no-u124l4-etherredomme", type: "vocab", front: "et herredømme", reading: "etherredomme", meaning: "mastery (full command over something)", example: { jp: "Ingen har herredømme over prosessen nå, og alle oppfører seg som om noen andre har det.", en: "Nobody has mastery over the process now, and everybody behaves as if somebody else has it." }, accept: ["dominion", "command"], drill: { jp: "Ingen har et herredømme over dette", en: "Nobody has mastery over this" }, hint: "et herredømme → herredømmet. Merk ø-folden: lesinga er etherredomme. En herre + å dømme (u92). ⚠ Tungt og gammelt, og derfor sterkt: det brukes om land, om markeder og om «herredømme over seg selv»." },
        { id: "no-u124l4-enhabilitet", type: "vocab", front: "en habilitet", reading: "enhabilitet", meaning: "impartiality (being free of ties to the case)", example: { jp: "Habiliteten hans ble undersøkt etterpå, og vedtaket sto likevel fast.", en: "His impartiality was examined afterwards, and the decision stood all the same." }, accept: ["freedom from conflict of interest", "eligibility to decide"], drill: { jp: "Vi må sjekke en habilitet her først", en: "We have to check an impartiality here first" }, hint: "en habilitet → habiliteten. ⚠ -het er ALLTID hankjønn. Inhabil (u97) er motstykket og det ordet du hører i nyhetene: en inhabil saksbehandler må tre ut av saka." },
        { id: "no-u124l4-etselvstyre", type: "vocab", front: "et selvstyre", reading: "etselvstyre", meaning: "self-government (deciding your own affairs)", example: { jp: "Selvstyret er stort på papiret, og staten betaler for det meste av det de gjør.", en: "The self-government is extensive on paper, and the state pays for most of what they do." }, accept: ["autonomy", "home rule"], drill: { jp: "Selvstyret i et selvstyre koster penger", en: "The independence in a self-government costs money" }, hint: "et selvstyre → selvstyret. Selv (u77) + å styre (u55). ⚠ Det norske kommunale selvstyret er et politisk kampord: hver gang staten bestemmer noe nytt, sier kommunene at selvstyret svekkes." },
      ],
    },
  ],
};
