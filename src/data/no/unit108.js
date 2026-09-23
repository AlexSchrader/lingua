// NO Unit 108 — Grammatikk 11: å binde en drøfting sammen (slot: grammar-11) — B2 GRAMMAR
// ─────────────────────────────────────────────────────────────────────────────
// Slot "Grammar 11 — discourse, cohesion, hedged claims", retitled in Norwegian
// per CLAUDE.md → "No front language". Conventions: unit1.js §1–§9, unit51.js
// B1–B9, unit88.js C1–C7.
//
// ⚠ THE "HEDGED CLAIM" THIRD OF THIS SLOT IS ALREADY SPENT, TWICE. u54 took
// evidentiality (trolig, antakelig, visstnok, tilsynelatende, sannsynlig),
// u73 took softening (i utgangspunktet, i prinsippet, snarere, et forbehold,
// å nyansere), and unit88.js C6 records that u91 took the degree layer
// (atskillig, marginal, overveiende, utpreget, ytterst, i hovedsak).
// So this unit is the COHESION two-thirds, which nobody has touched: how a
// Norwegian drøfting is HELD TOGETHER from the first paragraph to the last.
// That is precisely the skill every Norwegian exam question asks for — the
// verb in the task is nearly always «drøft» (u88).
//   l1  the scaffolding: first, next, finally, more precisely.
//   l2  putting two sides against each other.
//   l3  the reservations you put ON your own argument.
//   l4  the closers — and Norwegian has four of them that are not the same.
//
// ⚠ TAKEN, measured: `på den annen side` u69 (so this unit teaches `på den ene
// siden` and does NOT add a near-identical `på den andre siden`), `med andre
// ord` u69, `for øvrig` u69, `videre` u69, `snarere` u73, `riktignok` u77,
// `så vidt` u69, `i hovedsak` u91, `i prinsippet` u73, `verken` u29,
// `det vil si` u29, `omvendt` u53.
//
// SCOPE: the frozen base u1–u107 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT108 = {
  id: "no-u108",
  lang: "no",
  title: "Grammatikk 11: å binde en drøfting sammen",
  order: 108,
  stage: "b2",
  lessons: [
    {
      id: "no-u108l1",
      unit: 108,
      lesson: 1,
      title: "Å bygge drøftinga",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Lay out an argument in order so a reader can follow it — signal each step before you take it.",
      items: [
        { id: "no-u108l1-fordetforste", type: "vocab", front: "for det første", reading: "fordetforste", meaning: "firstly", example: { jp: "For det første er tallene gamle, og for det andre er de fra et annet land.", en: "Firstly the figures are old, and secondly they are from another country." }, accept: ["in the first place", "first of all"], drill: { jp: "For det første er dette dyrt", en: "Firstly this is expensive" }, hint: "for det første, som ett uttrykk. Merk ø-folden: lesinga er fordetforste. ⚠ Står først i setningen, og da følger verbet rett etter (V2): «for det første ER tallene gamle»." },
        { id: "no-u108l1-fordetandre", type: "vocab", front: "for det andre", reading: "fordetandre", meaning: "secondly", example: { jp: "For det andre koster det mer enn de sa, men det er ikke grunn god nok til å si nei.", en: "Secondly it costs more than they said, but that is not reason enough to say no." }, accept: ["in the second place", "second"], drill: { jp: "For det andre tar det tid", en: "Secondly it takes time" }, hint: "for det andre. ⚠ Du kan telle videre: for det tredje, for det fjerde — men i norsk drøfting stopper folk nesten alltid på tre." },
        { id: "no-u108l1-dernest", type: "vocab", front: "dernest", reading: "dernest", meaning: "next (thereafter)", example: { jp: "Først må vi bli enige om tallene, og dernest kan vi snakke om hva de betyr.", en: "First we have to agree about the figures, and next we can talk about what they mean." }, accept: ["then", "after that"], drill: { jp: "Dernest må vi spørre dem", en: "Next we have to ask them" }, hint: "dernest, adverb. Der + nest. Litt mer formelt enn deretter. ⚠ Om REKKEFØLGE i argumentet, ikke bare om tid." },
        { id: "no-u108l1-avslutningsvis", type: "vocab", front: "avslutningsvis", reading: "avslutningsvis", meaning: "in conclusion", example: { jp: "Avslutningsvis vil jeg si at forslaget er godt, og at jeg likevel kommer til å stemme mot.", en: "In conclusion I want to say that the proposal is good, and that I am going to vote against it anyway." }, accept: ["finally", "lastly"], drill: { jp: "Avslutningsvis vil jeg si dette", en: "In conclusion I want to say this" }, hint: "avslutningsvis, adverb. Fra å avslutte. ⚠ -vis lager adverb av substantiv: delvis, gradvis, tilfeldigvis. Bare i skrift og i tale som er skrevet på forhånd." },
        { id: "no-u108l1-naermerebestemt", type: "vocab", front: "nærmere bestemt", reading: "naermerebestemt", meaning: "more precisely", example: { jp: "Det gjelder alle som jobber her, nærmere bestemt dem som ble tatt inn i vår.", en: "It concerns everybody who works here, more precisely those who were taken on this spring." }, accept: ["specifically", "to be exact"], drill: { jp: "Vi mener dette nærmere bestemt", en: "We mean this more precisely" }, hint: "nærmere bestemt, som ett uttrykk. Merk æ-folden: lesinga er naermerebestemt. Snevrer inn det du nettopp sa. Står ALLTID etter det brede ordet, aldri foran." },
        { id: "no-u108l1-kortsagt", type: "vocab", front: "kort sagt", reading: "kortsagt", meaning: "in short", example: { jp: "Kort sagt er svaret nei, og det har det vært hele tida.", en: "In short the answer is no, and it has been all along." }, accept: ["put briefly", "to put it briefly"], drill: { jp: "Kort sagt ble det ingenting av", en: "In short nothing came of it" }, hint: "kort sagt, som ett uttrykk. Kort (u10) + sagt. ⚠ Lover noe: det som kommer etter MÅ være kortere enn det som kom før." },
      ],
    },
    {
      id: "no-u108l2",
      unit: 108,
      lesson: 2,
      title: "To sider av saka",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Set two sides against each other without picking one yet — the move a Norwegian exam question is actually asking for.",
      items: [
        { id: "no-u108l2-padenenesiden", type: "vocab", front: "på den ene siden", reading: "padenenesiden", meaning: "on the one hand", example: { jp: "På den ene siden er det billig, og på den annen side får vi ingenting igjen for det.", en: "On the one hand it is cheap, and on the other hand we get nothing back for it." }, accept: ["on one side"], drill: { jp: "På den ene siden går det fort", en: "On the one hand it goes fast" }, hint: "på den ene siden. Merk å-folden: lesinga er padenenesiden. ⚠ Parordet er «på den annen side» (u69), som er den faste, litt eldre formen — du hører begge, og de hører sammen." },
        { id: "no-u108l2-imotsetningtil", type: "vocab", front: "i motsetning til", reading: "imotsetningtil", meaning: "in contrast to", example: { jp: "I motsetning til før har vi tid nok, og det er den forskjellen som betyr noe.", en: "In contrast to before we have time enough, and that is the difference that matters." }, accept: ["unlike", "as opposed to"], drill: { jp: "Dette er i motsetning til før", en: "This is in contrast to before" }, hint: "i motsetning til + substantiv. Ei motsetning = to ting som ikke går sammen. Sterkere enn derimot (u29): her sier du at de to UTELUKKER hverandre." },
        { id: "no-u108l2-tilgjengjeld", type: "vocab", front: "til gjengjeld", reading: "tilgjengjeld", meaning: "in return (on the plus side)", example: { jp: "Vi taper et år, men til gjengjeld slipper vi å gjøre alt om igjen i neste runde.", en: "We lose a year, but in return we avoid doing everything over again in the next round." }, accept: ["by way of compensation", "on the other hand"], drill: { jp: "Til gjengjeld får vi mer tid", en: "In return we get more time" }, hint: "til gjengjeld, som ett uttrykk. En gjengjeld = det du får TILBAKE. ⚠ Alltid noe POSITIVT som veier opp for noe negativt du nettopp nevnte." },
        { id: "no-u108l2-samtidigsom", type: "vocab", front: "samtidig som", reading: "samtidigsom", meaning: "while (at the same time as)", example: { jp: "Hun sier at hun er enig, samtidig som hun stemmer mot hver gang.", en: "She says she agrees, while at the same time voting against every time." }, accept: ["at the same time as", "even as"], drill: { jp: "Han sa ja samtidig som hun sa nei", en: "He said yes while she said no" }, hint: "samtidig som + setning. Samtidig (u28) + som. ⚠ Både om TID og om MOTSETNING — og i en drøfting er det nesten alltid motsetningen du peker på." },
        { id: "no-u108l2-nardetgjelder", type: "vocab", front: "når det gjelder", reading: "nardetgjelder", meaning: "as for (when it comes to)", example: { jp: "Når det gjelder prisen er vi enige, og det er alt vi er enige om.", en: "As for the price we agree, and that is all we agree about." }, accept: ["when it comes to", "regarding"], drill: { jp: "Når det gjelder tida har vi nok", en: "As for the time we have enough" }, hint: "når det gjelder + substantiv. Merk å-folden: lesinga er nardetgjelder. Fra å gjelde (u32). Bytter TEMA midt i teksten — vedrørende (u107) er den skriftlige, stive versjonen." },
        { id: "no-u108l2-iforbindelsemed", type: "vocab", front: "i forbindelse med", reading: "iforbindelsemed", meaning: "in connection with", example: { jp: "Saka kom opp i forbindelse med budsjettet, og den hører egentlig ikke hjemme der.", en: "The case came up in connection with the budget, and it does not really belong there." }, accept: ["in relation to", "as part of"], drill: { jp: "Vi skriver i forbindelse med saka", en: "We are writing in connection with the case" }, hint: "i forbindelse med + substantiv. En forbindelse (u84). Forkortes i.f.m. ⚠ Sier at to ting HENGER SAMMEN, ikke at den ene forårsaket den andre." },
      ],
    },
    {
      id: "no-u108l3",
      unit: 108,
      lesson: 3,
      title: "Forbehold i egen drøfting",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Put a reservation on your own claim before somebody else does — and say how far it actually reaches.",
      items: [
        { id: "no-u108l3-trossalt", type: "vocab", front: "tross alt", reading: "trossalt", meaning: "after all", example: { jp: "Det gikk tross alt bra, men det var ingen av oss som hadde regnet med det.", en: "It went well after all, but none of us had counted on it." }, accept: ["all the same", "when all is said"], drill: { jp: "Han kom tross alt til slutt", en: "He came after all in the end" }, hint: "tross alt, som ett uttrykk. En tross = trass (u105). ⚠ Innrømmer at du hadde ventet noe verre — det er derfor det ofte står midt i setningen." },
        { id: "no-u108l3-idengrad", type: "vocab", front: "i den grad", reading: "idengrad", meaning: "to the extent that", example: { jp: "Vi hjelper i den grad vi har folk til det, og det har vi sjelden.", en: "We help to the extent that we have people for it, and we seldom do." }, accept: ["insofar as", "as far as"], drill: { jp: "Vi hjelper i den grad vi kan", en: "We help to the extent that we can" }, hint: "i den grad + setning. En grad (u43). ⚠ Betyr også bare «veldig»: «det var i den grad dyrt». Konteksten skiller: med en setning etter er det forbeholdet." },
        { id: "no-u108l3-strengttatt", type: "vocab", front: "strengt tatt", reading: "strengttatt", meaning: "strictly speaking", example: { jp: "Strengt tatt er dette galt, men ingen kommer til å si noe om det.", en: "Strictly speaking this is wrong, but nobody is going to say anything about it." }, accept: ["technically", "properly speaking"], drill: { jp: "Strengt tatt er svaret nei", en: "Strictly speaking the answer is no" }, hint: "strengt tatt, som ett uttrykk. Streng (u31) + tatt. ⚠ Varsler at du er i ferd med å si noe som er RIKTIG, men ikke viktig." },
        { id: "no-u108l3-grovtsagt", type: "vocab", front: "grovt sagt", reading: "grovtsagt", meaning: "roughly speaking", example: { jp: "Grovt sagt er byen delt i to, og den ene halvparten har ikke hørt om saka.", en: "Roughly speaking the town is split in two, and one half has not heard of the case." }, accept: ["broadly speaking", "crudely put"], drill: { jp: "Grovt sagt er alle enige her", en: "Roughly speaking everybody agrees here" }, hint: "grovt sagt, som ett uttrykk. Grov = ikke fin. Det motsatte av nærmere bestemt (l1): du sier med vilje noe upresist for å få fram formen." },
        { id: "no-u108l3-forsavidt", type: "vocab", front: "for så vidt", reading: "forsavidt", meaning: "in a way (as far as that goes)", example: { jp: "Det er for så vidt riktig, men det svarer ikke på det jeg spurte om.", en: "That is true as far as it goes, but it does not answer what I asked." }, accept: ["actually", "to that extent"], drill: { jp: "Hun har for så vidt rett", en: "She is right in a way" }, hint: "for så vidt, som ett uttrykk. Merk å-folden: lesinga er forsavidt. ⚠ En halv innrømmelse: du gir motparten rett i ordene og tar det tilbake i neste setning." },
        { id: "no-u108l3-iogforseg", type: "vocab", front: "i og for seg", reading: "iogforseg", meaning: "in itself", example: { jp: "Forslaget er i og for seg greit, og det gjør bare ingenting med det problemet vi har.", en: "The proposal is fine in itself, and it simply does nothing about the problem we have." }, accept: ["as such", "taken alone"], drill: { jp: "Dette er i og for seg greit", en: "This is fine in itself" }, hint: "i og for seg, som ett uttrykk. ⚠ Skiller SAKA fra SAMMENHENGEN: ordet i seg selv er godt, men det passer ikke her. Nesten alltid fulgt av et men." },
      ],
    },
    {
      id: "no-u108l4",
      unit: 108,
      lesson: 4,
      title: "Å lande det",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Close an argument — and pick the right closer, because Norwegian has four and they do not mean the same thing.",
      items: [
        { id: "no-u108l4-tilsyvendeogsist", type: "vocab", front: "til syvende og sist", reading: "tilsyvendeogsist", meaning: "at the end of the day", example: { jp: "Til syvende og sist er det hennes valg, og resten av oss kan bare mene noe om det.", en: "At the end of the day it is her choice, and the rest of us can only have an opinion about it." }, accept: ["ultimately", "in the final analysis"], drill: { jp: "Til syvende og sist betaler vi", en: "At the end of the day we pay" }, hint: "til syvende og sist, frosset uttrykk. Syvende skrives slik her, selv om tallet ellers er sjuende. ⚠ Peker på hvem som BESTEMMER, ikke på hva som er sant." },
        { id: "no-u108l4-naraltkommertilalt", type: "vocab", front: "når alt kommer til alt", reading: "naraltkommertilalt", meaning: "when all is said and done", example: { jp: "Når alt kommer til alt handler saka om penger, og det var det ingen som ville si høyt.", en: "When all is said and done the case is about money, and nobody wanted to say that out loud." }, accept: ["in the end", "when it comes down to it"], drill: { jp: "Når alt kommer til alt er det greit", en: "When all is said and done it is fine" }, hint: "når alt kommer til alt, frosset uttrykk. Merk å-folden: lesinga er naraltkommertilalt. ⚠ Peker på hva saka EGENTLIG handler om — til syvende og sist peker på hvem som avgjør." },
        { id: "no-u108l4-ikkeminst", type: "vocab", front: "ikke minst", reading: "ikkeminst", meaning: "not least", example: { jp: "Det gjelder alle, ikke minst dem som aldri sier noe på et møte.", en: "It applies to everybody, not least those who never say anything in a meeting." }, accept: ["especially", "above all"], drill: { jp: "Ikke minst gjelder det oss", en: "Not least it applies to us" }, hint: "ikke minst, som ett uttrykk. Liten → minst (u10). ⚠ Løfter fram det SISTE leddet i ei liste og sier at det er det viktigste — ikke det minste." },
        { id: "no-u108l4-ipraksis", type: "vocab", front: "i praksis", reading: "ipraksis", meaning: "in practice", example: { jp: "I praksis virker ordningen godt, selv om ingen kan forklare hvorfor den skulle gjøre det.", en: "In practice the arrangement works well, even though nobody can explain why it should." }, accept: ["in reality", "in actual fact"], drill: { jp: "I praksis virker dette godt", en: "In practice this works well" }, hint: "i praksis, alltid uten artikkel. En praksis. ⚠ Motstykket til i teorien (u106), og de to står nesten alltid i samme avsnitt: «i teorien … men i praksis …»." },
        { id: "no-u108l4-pasettogvis", type: "vocab", front: "på sett og vis", reading: "pasettogvis", meaning: "in a manner of speaking", example: { jp: "Han har på sett og vis rett, men han har rett om noe annet enn han tror.", en: "He is right in a manner of speaking, but he is right about something other than he thinks." }, accept: ["in a sense", "after a fashion"], drill: { jp: "Vi er på sett og vis ferdige", en: "We are finished in a manner of speaking" }, hint: "på sett og vis, frosset uttrykk. Et sett + et vis (en måte). Mildere enn for så vidt (l3): her tar du ingenting tilbake, du bare gjør det upresist." },
        { id: "no-u108l4-altialt", type: "vocab", front: "alt i alt", reading: "altialt", meaning: "all in all", example: { jp: "Alt i alt er dette bra nok, og det er alt vi hadde tid til denne gangen.", en: "All in all this is good enough, and it is all we had time for this time." }, accept: ["on the whole", "overall"], drill: { jp: "Alt i alt gikk det godt", en: "All in all it went well" }, hint: "alt i alt, frosset uttrykk. ⚠ SUMMERER alt du har sagt og gir en dom. De tre andre i denne leksjonen peker på ÉN ting; alt i alt veier alle sammen." },
      ],
    },
  ],
};
