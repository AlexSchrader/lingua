// NO Unit 107 — Grammatikk 10: det formelle skriftspråket (slot: grammar-10) — B2 GRAMMAR
// ─────────────────────────────────────────────────────────────────────────────
// Slot "Grammar 10 — formal written structures", retitled in Norwegian per
// CLAUDE.md → "No front language". Conventions: unit1.js §1–§9, unit51.js
// B1–B9, unit88.js C1–C7.
//
// ⚠ WHAT "FORMAL STRUCTURE" MEANS IN NORWEGIAN, and what it does NOT. The
// s-passive and indirect speech are u70's; nominalization is u71's; the
// subordinate-clause word order is u69's. None of those are re-taught here.
// What is left — and it is the real thing a learner hits the day they open a
// Norwegian contract, a court judgment or a letter from NAV — is the CLOSED
// CLASS of formal connectives and reference words that has no everyday
// equivalent at all:
//   l1  the hvor- and der- compounds, Norwegian's relative-preposition machine.
//   l2  the words that point BACK into a text instead of out at the world.
//   l3  the prepositional phrases that replace a plain preposition in law.
//   l4  the formal binders that replace derfor, og and om.
//
// ⚠ EVERY ONE OF THESE IS A SINGLE FRONT, INCLUDING THE THREE-WORD ONES
// (unit51.js B3). A multiword front must stand CONTIGUOUS and verbatim in its
// drill, so "i henhold til avtalen" works and "i henhold, sier de, til avtalen"
// does not.
//
// ⚠ TAKEN, measured before authoring: `hvorvidt` u69, `således` u69, `samt`
// u29, `angående` u72, `idet` u69, `ettersom` u36, `tilsvarende` u53,
// `med andre ord` u69, `for øvrig` u69, `videre` u69, `så vidt` u69.
// `hva angår` was CUT as too close to u72's `angående` for a produce card, and
// `som nevnt` / `nevnte` as transparent derivations of å nevne (u49).
//
// SCOPE: the frozen base u1–u106 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT107 = {
  id: "no-u107",
  lang: "no",
  title: "Grammatikk 10: det formelle skriftspråket",
  order: 107,
  stage: "b2",
  lessons: [
    {
      id: "no-u107l1",
      unit: 107,
      lesson: 1,
      title: "Hvor- og der-ordene",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read the compound connectives a Norwegian contract is built from — and say what each of them is standing in for.",
      items: [
        { id: "no-u107l1-hvorav", type: "vocab", front: "hvorav", reading: "hvorav", meaning: "of which", example: { jp: "Vi fikk inn ni svar, hvorav bare tre var gode.", en: "We received nine answers, of which only three were good." }, accept: ["of whom", "of these"], drill: { jp: "Fem kom hvorav to var nye", en: "Five came of which two were new" }, hint: "hvorav = hvor + av. ⚠ Står ALLTID etter et tall eller en mengde, og innleder en ny setningsdel. Muntlig sier folk «og av dem var tre negative»." },
        { id: "no-u107l1-hvorpa", type: "vocab", front: "hvorpå", reading: "hvorpa", meaning: "whereupon", example: { jp: "Han sa nei til hele forslaget, hvorpå resten av rommet gikk.", en: "He said no to the whole proposal, whereupon the rest of the room left." }, accept: ["at which point", "after which"], drill: { jp: "Han sa nei hvorpå alle gikk", en: "He said no whereupon everybody left" }, hint: "hvorpå = hvor + på. Merk å-folden: lesinga er hvorpa. Om TID: det neste som skjedde. Fortellende og formelt — du ser det i referat, ikke i tale." },
        { id: "no-u107l1-derav", type: "vocab", front: "derav", reading: "derav", meaning: "hence (from that)", example: { jp: "Tallene er fra to ulike år, derav forskjellen ingen klarte å forklare.", en: "The figures are from two different years, hence the difference nobody managed to explain." }, accept: ["thence", "that is where it comes from"], drill: { jp: "Derav følger at vi må vente", en: "Hence it follows that we must wait" }, hint: "derav = der + av. Peker TILBAKE på grunnen du nettopp ga. Derfor (u29) binder to setninger; derav innleder følgen som et ledd." },
        { id: "no-u107l1-dertil", type: "vocab", front: "dertil", reading: "dertil", meaning: "moreover (in addition)", example: { jp: "Forslaget er dyrt, og dertil kommer at ingen har spurt om det.", en: "The proposal is expensive, and moreover nobody has asked about it." }, accept: ["in addition", "besides"], drill: { jp: "Han er ung og dertil ny", en: "He is young and moreover new" }, hint: "dertil = der + til. Legger noe TIL. Dessuten (u29) er det vanlige ordet; dertil er den formelle broren og står oftest i «dertil kommer at»." },
        { id: "no-u107l1-herved", type: "vocab", front: "herved", reading: "herved", meaning: "hereby", example: { jp: "Vi sier herved opp avtalen, og oppsigelsen gjelder fra første dag i neste måned.", en: "We hereby terminate the agreement, and the notice applies from the first day of next month." }, accept: ["by this"], drill: { jp: "Avtalen er herved sagt opp", en: "The agreement is hereby terminated" }, hint: "herved = her + ved. ⚠ Ordet GJØR noe: setningen den står i er selve handlingen. Brukes bare i skriv som har rettslig virkning." },
        { id: "no-u107l1-foruten", type: "vocab", front: "foruten", reading: "foruten", meaning: "apart from (in writing)", example: { jp: "Foruten prisen er det ingenting å si på forslaget.", en: "Apart from the price there is nothing to say against the proposal." }, accept: ["apart from", "in addition to"], drill: { jp: "Alle kom foruten de to nye", en: "Everybody came apart from the two new ones" }, hint: "foruten + substantiv. ⚠ TO TYDNINGER, og konteksten avgjør: «foruten prisen» kan bety både UNNTATT prisen og I TILLEGG TIL prisen. Bortsett fra (u29) er alltid det første." },
      ],
    },
    {
      id: "no-u107l2",
      unit: 107,
      lesson: 2,
      title: "Å peke tilbake i teksten",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Point back into a document instead of out at the world — name the earlier thing without repeating it.",
      items: [
        { id: "no-u107l2-forstnevnte", type: "vocab", front: "førstnevnte", reading: "forstnevnte", meaning: "the former", example: { jp: "Begge forslagene er mulige, men førstnevnte koster halvparten.", en: "Both proposals are possible, but the former costs half." }, accept: ["the first-mentioned", "the former"], drill: { jp: "Vi velger førstnevnte av de to", en: "We choose the former of the two" }, hint: "førstnevnte, bøyes ikke. Merk ø-folden: lesinga er forstnevnte. Først (u29) + nevnt. ⚠ Det FØRSTE du nevnte, ikke det nærmeste i teksten." },
        { id: "no-u107l2-sistnevnte", type: "vocab", front: "sistnevnte", reading: "sistnevnte", meaning: "the latter", example: { jp: "Vi kan bygge nytt eller leie, og sistnevnte er det som lar seg gjøre i år.", en: "We can build new or rent, and the latter is what can be done this year." }, accept: ["the last-mentioned", "the latter"], drill: { jp: "Sistnevnte er den billige løsningen", en: "The latter is the cheap solution" }, hint: "sistnevnte, bøyes ikke. Sist (u29) + nevnt. Paret førstnevnte/sistnevnte lar deg unngå å skrive begge navnene om igjen." },
        { id: "no-u107l2-ovennevnte", type: "vocab", front: "ovennevnte", reading: "ovennevnte", meaning: "aforementioned", example: { jp: "Ovennevnte regel gjelder fremdeles, selv om ingen har brukt den på ti år.", en: "The aforementioned rule still applies, even though nobody has used it in ten years." }, accept: ["the above", "the above-mentioned"], drill: { jp: "Se ovennevnte regel i avtalen", en: "See the aforementioned rule in the agreement" }, hint: "ovennevnte, bøyes ikke, og står foran substantivet. Over + nevnt. Bare i SKRIFT — det finnes ikke noe «ovenfor» i en samtale." },
        { id: "no-u107l2-vedkommende", type: "vocab", front: "vedkommende", reading: "vedkommende", meaning: "the person in question", example: { jp: "Vedkommende har ikke svart på brevet, og saka kan ikke gå videre uten et svar.", en: "The person in question has not answered the letter, and the case cannot go further without an answer." }, accept: ["the person concerned", "he or she"], drill: { jp: "Vedkommende har ikke svart oss", en: "The person in question has not answered us" }, hint: "vedkommende, bøyes ikke. -ende-former er like i alle kjønn. ⚠ Den NØYTRALE måten å si han eller hun på i et offentlig brev — norsk byråkrati bruker den hele tida." },
        { id: "no-u107l2-samtlige", type: "vocab", front: "samtlige", reading: "samtlige", meaning: "all (every single one)", example: { jp: "Samtlige av dem svarte ja, og likevel ble forslaget lagt bort.", en: "Every single one of them answered yes, and still the proposal was set aside." }, accept: ["every one", "all of them"], drill: { jp: "Samtlige svarte nei på dette", en: "Every single one answered no to this" }, hint: "samtlige, alltid flertall. Sterkere enn alle (u14): det understreker at INGEN mangler. Formelt og skriftlig." },
        { id: "no-u107l2-respektive", type: "vocab", front: "respektive", reading: "respektive", meaning: "respective", example: { jp: "De to reiste hjem til respektive land, og ingen av dem tok saka videre.", en: "The two travelled home to their respective countries, and neither of them took the case any further." }, accept: ["each one's own"], drill: { jp: "De reiste hjem til respektive byer", en: "They travelled home to their respective towns" }, hint: "respektive, alltid foran et substantiv i flertall. Hver sin. Parordet er henholdsvis, som ordner rekkefølgen i stedet." },
      ],
    },
    {
      id: "no-u107l3",
      unit: 107,
      lesson: 3,
      title: "Lovspråkets preposisjoner",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use the three-word prepositions Norwegian law replaces plain ones with — and hear when somebody is using them to sound official.",
      items: [
        { id: "no-u107l3-ihenholdtil", type: "vocab", front: "i henhold til", reading: "ihenholdtil", meaning: "in accordance with", example: { jp: "Penger er brukt i henhold til avtalen, men avtalen var dårlig fra første dag.", en: "Money has been used in accordance with the agreement, but the agreement was poor from day one." }, accept: ["pursuant to", "according to"], drill: { jp: "Vi handler i henhold til avtalen", en: "We act in accordance with the agreement" }, hint: "i henhold til + substantiv. Fra å henholde seg til. ⚠ Ikke det samme som ifølge (u54): ifølge er hvem som SIER det, i henhold til er hvilken regel det FØLGER." },
        { id: "no-u107l3-medhensyntil", type: "vocab", front: "med hensyn til", reading: "medhensyntil", meaning: "with regard to", example: { jp: "Med hensyn til prisen er vi enige, og det er det vi er enige om.", en: "With regard to the price we agree, and that is what we agree about." }, accept: ["as regards", "concerning"], drill: { jp: "Vi sier ingenting med hensyn til prisen", en: "We say nothing with regard to the price" }, hint: "med hensyn til + substantiv. Et hensyn (u68). Forkortes m.h.t. i skrift. Sier hva du snakker OM — ikke at du tar hensyn til noen." },
        { id: "no-u107l3-pavegneav", type: "vocab", front: "på vegne av", reading: "pavegneav", meaning: "on behalf of", example: { jp: "Hun skrev på vegne av hele gruppa, og to av dem hadde ikke lest brevet.", en: "She wrote on behalf of the whole group, and two of them had not read the letter." }, accept: ["for", "representing"], drill: { jp: "Hun skrev på vegne av alle", en: "She wrote on behalf of everybody" }, hint: "på vegne av + substantiv. Merk å-folden: lesinga er pavegneav. Ei vegne finnes ikke alene — uttrykket er frosset. Du taler FOR noen, med deres fullmakt." },
        { id: "no-u107l3-isamsvarmed", type: "vocab", front: "i samsvar med", reading: "isamsvarmed", meaning: "consistent with", example: { jp: "Vedtaket er i samsvar med loven, og likevel mener mange at det er galt.", en: "The decision is consistent with the law, and still many people think it is wrong." }, accept: ["in agreement with", "in line with"], drill: { jp: "Dette er i samsvar med loven", en: "This is consistent with the law" }, hint: "i samsvar med + substantiv. Et samsvar = at to ting stemmer overens. I henhold til er å FØLGE en regel; i samsvar med er bare at de to ikke er i strid." },
        { id: "no-u107l3-istridmed", type: "vocab", front: "i strid med", reading: "istridmed", meaning: "in breach of", example: { jp: "Avtalen er i strid med reglene, men ingen av dem som skrev under visste det.", en: "The agreement is in breach of the rules, but none of those who signed knew it." }, accept: ["contrary to", "against"], drill: { jp: "Vedtaket er i strid med reglene", en: "The decision is in breach of the rules" }, hint: "i strid med + substantiv. En strid (u95). Det direkte motstykket til i samsvar med, og det sterkeste av dem: her er noe faktisk brutt." },
        { id: "no-u107l3-pabakgrunnav", type: "vocab", front: "på bakgrunn av", reading: "pabakgrunnav", meaning: "on the basis of", example: { jp: "De sa nei på bakgrunn av tall som var to år gamle.", en: "They said no on the basis of figures that were two years old." }, accept: ["in light of", "based on"], drill: { jp: "De sa nei på bakgrunn av tallene", en: "They said no on the basis of the figures" }, hint: "på bakgrunn av + substantiv. En bakgrunn (u90). Hva avgjørelsen BYGGER på. Ikke det samme som på grunn av (u29), som er årsaken." },
      ],
    },
    {
      id: "no-u107l4",
      unit: 107,
      lesson: 4,
      title: "Den formelle bindingen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Bind two formal statements together the way a report does — and know which everyday word each of these is replacing.",
      items: [
        { id: "no-u107l4-folgelig", type: "vocab", front: "følgelig", reading: "folgelig", meaning: "consequently", example: { jp: "Tallene var gale, og følgelig er konklusjonen det også.", en: "The figures were wrong, and consequently the conclusion is too." }, accept: ["therefore", "accordingly"], drill: { jp: "Tallene er gale og følgelig er svaret det", en: "The figures are wrong and consequently the answer is too" }, hint: "følgelig, adverb. Merk ø-folden: lesinga er folgelig. Fra en følge (u52). Den formelle versjonen av derfor (u29), og den krever at følgen er LOGISK, ikke bare tidsmessig." },
        { id: "no-u107l4-henholdsvis", type: "vocab", front: "henholdsvis", reading: "henholdsvis", meaning: "respectively", example: { jp: "De to avdelingene fikk henholdsvis fire og ni stillinger, og ingen sa hvorfor.", en: "The two departments got four and nine posts respectively, and nobody said why." }, accept: ["in that order"], drill: { jp: "De kom henholdsvis i mai og august", en: "They came in May and August respectively" }, hint: "henholdsvis, foran den FØRSTE av to lister. Forkortes hhv. ⚠ Leseren skal pare de to listene i rekkefølge — respektive gir hver sin, henholdsvis gir rekkefølgen." },
        { id: "no-u107l4-dels", type: "vocab", front: "dels", reading: "dels", meaning: "partly (dels ... dels)", example: { jp: "Det skyldes dels prisen og dels at ingen visste om tilbudet.", en: "It is partly due to the price and partly to nobody knowing about the offer." }, accept: ["in part"], drill: { jp: "Det er dels dyrt og dels tungt", en: "It is partly expensive and partly heavy" }, hint: "dels … dels, nesten alltid i par. Fra en del (u33). Deler opp ÅRSAKEN i to like viktige halvdeler — ikke i en hoved- og en bigrunn." },
        { id: "no-u107l4-vedrorende", type: "vocab", front: "vedrørende", reading: "vedrorende", meaning: "regarding (in official writing)", example: { jp: "Vi skriver vedrørende saka deres, og vi ber om et svar innen fredag.", en: "We are writing regarding your case, and we ask for an answer by Friday." }, accept: ["concerning", "re"], drill: { jp: "Brevet kom vedrørende saka deres", en: "The letter came regarding your case" }, hint: "vedrørende + substantiv. Merk ø-folden: lesinga er vedrorende. Forkortes vedr. Står i emnefeltet på et brev; angående (u72) er det samme, men litt mindre stivt." },
        { id: "no-u107l4-foreliggende", type: "vocab", front: "foreliggende", reading: "foreliggende", meaning: "present (the one before us)", example: { jp: "Foreliggende forslag er bedre enn det gamle, og det sier ikke så mye.", en: "The present proposal is better than the old one, and that does not say much." }, accept: ["the current", "this (document)"], drill: { jp: "Vi svarer på foreliggende forslag", en: "We are answering the present proposal" }, hint: "foreliggende, bøyes ikke, står foran substantivet. Fore + å ligge: det som LIGGER FORE deg akkurat nå. Bare om dokumenter og saker." },
        { id: "no-u107l4-gjeldende", type: "vocab", front: "gjeldende", reading: "gjeldende", meaning: "applicable (in force)", example: { jp: "Gjeldende regler er gamle, og de ble skrevet for en helt annen tid.", en: "The rules in force are old, and they were written for a completely different time." }, accept: ["current", "in force"], drill: { jp: "Dette er gjeldende regler i dag", en: "These are the applicable rules today" }, hint: "gjeldende, bøyes ikke. Fra å gjelde (u32). Det som GJELDER NÅ — ikke det som er best eller nyest. Sier ingenting om at regelen er god." },
      ],
    },
  ],
};
