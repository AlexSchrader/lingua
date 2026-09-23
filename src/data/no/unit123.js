// NO Unit 123 — Rekkevidde, inndeling og etterrettelighet (slot: coverage-b2-13) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 13 (B2)" — a slot number, not an instruction.
// Theme chosen here. Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js
// C1–C7.
//
// WHY THIS THEME. u120 (this block) settled RULE vs EXCEPTION. The question
// underneath it is how far a claim reaches at all: who it covers, how the cases
// were sorted, where the numbers came from, and what a single example can be
// made to prove. u89 took SOURCES and u103 RESEARCH METHOD, but both stopped at
// «where did you get it» — this unit is «how far does it carry».
//
// ⚠ THIS IS WHERE BLOCK 1'S RESERVED LIST LANDS. unit88.js C6 set aside
// `et diagram`, `ei feilmargin`, `ei spørreundersøkelse`, `etterrettelig`,
// `en opphavsmann`, `et hierarki`, `å klassifisere` and `ei gruppering` for
// block 3, and all eight are carded here. TWO OF THEM ARE RE-GENDERED, and the
// reserved list was wrong, not this unit:
//   • `ei spørreundersøkelse` → `en spørreundersøkelse`. -else is ALWAYS
//     masculine (unit88.js C1). The reserved list marked it `ei`.
//   • `ei feilmargin` → `en feilmargin`. `margin` is masculine in Bokmål.
// Block 1 wrote that the list was «a measurement with a timestamp, not a
// promise»; that applies to the article as much as to the availability.
//
// ⚠ CUT — `en iakttakelse`. `å iaktta` is taught at u121, two units back in
// this same block, and the noun is a transparent derivation of it. `å gjøre
// rede for` took the slot.
//
// GENDER: -ing/-ning FEMININE (`ei gruppering`), -else/-het MASCULINE (`en
// spørreundersøkelse`). `ei rekkevidde` is feminine because `ei vidde` is;
// `en ytterkant` masculine because `en kant` is; `et virkeområde` neuter
// because `et område` is.
// FIRST FEMININE is `ei rekkevidde` (l1) and carries the en-/ei- note.
//
// DRILLS: å-verb drills use an å-frame; adjective drills take a COMMON-GENDER
// SINGULAR subject so the front appears verbatim.
//
// SCOPE: the frozen base u1–u122 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT123 = {
  id: "no-u123",
  lang: "no",
  title: "Rekkevidde, inndeling og etterrettelighet",
  order: 123,
  stage: "b2",
  lessons: [
    {
      id: "no-u123l1",
      unit: 123,
      lesson: 1,
      title: "Hvor langt en påstand rekker",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how far a claim or a rule actually reaches — and stop somebody applying it outside that.",
      items: [
        { id: "no-u123l1-eirekkevidde", type: "vocab", front: "ei rekkevidde", reading: "eirekkevidde", meaning: "reach (how far something carries)", example: { jp: "Rekkevidda av vedtaket er mye større enn den ene saka det ble skrevet for.", en: "The reach of the decision is much greater than the one case it was written for." }, accept: ["scope", "range"], drill: { jp: "Vi ser ei rekkevidde ingen hadde ventet", en: "We see a reach nobody had expected" }, hint: "ei rekkevidde → rekkevidda. Hunkjønnsord kan du også skrive en rekkevidde / rekkevidden, og avisene gjør det oftest — merk begge. Å rekke + ei vidde. ⚠ Også konkret om en bil eller et våpen. Fast vending: «innenfor rekkevidde»." },
        { id: "no-u123l1-aanga", type: "vocab", front: "å angå", reading: "aanga", meaning: "to concern (be any of somebody's business)", example: { jp: "Saka angår alle som bor i dalen, og bare de tre som eier grunnen ble spurt.", en: "The case concerns everybody who lives in the valley, and only the three who own the land were asked." }, accept: ["to concern", "to be relevant to"], drill: { jp: "Dette pleier å angå alle i huset", en: "This tends to concern everybody in the building" }, hint: "å angå → angår, angikk, har angått. An + å gå. ⚠ To faste vendinger du møter overalt: «hva angår» (som gjelder) og «det angår ikke deg» (bland deg utenom). Den siste er skarp." },
        { id: "no-u123l1-etvirkeomrade", type: "vocab", front: "et virkeområde", reading: "etvirkeomrade", meaning: "a field of application (what a rule is written to cover)", example: { jp: "Loven har et virkeområde som stopper ved grensa, og en stor del av problemet ligger på den andre sida.", en: "The law has a field of application that stops at the border, and a large part of the problem lies on the other side." }, accept: ["scope of application", "remit"], drill: { jp: "Loven har et virkeområde som stopper her", en: "The law has a field of application that stops here" }, hint: "et virkeområde → virkeområdet, flertall virkeområder. Intetkjønn fordi et område (u45) er det. Å virke + område. ⚠ Et LOVORD: §1 i hver eneste norske lov heter «Lovens virkeområde», og strid om en sak starter ofte der." },
        { id: "no-u123l1-abefattesegmed", type: "vocab", front: "å befatte seg med", reading: "abefattesegmed", meaning: "to deal with (take a matter on at all)", example: { jp: "Flertallet vil ikke befatte seg med saka, og de sier ikke hvorfor.", en: "The majority will not deal with the case, and they do not say why." }, accept: ["to concern oneself with", "to have anything to do with"], drill: { jp: "Det er tungt å befatte seg med slikt", en: "It is hard to deal with that sort of thing" }, hint: "å befatte seg med → befatter seg, befattet seg, har befattet seg. Alltid med seg. ⚠ Formelt og ofte NEKTENDE: «vi befatter oss ikke med slikt» er en avvisning med avstand i. Å behandle en sak er nøytralt." },
        { id: "no-u123l1-etfelt", type: "vocab", front: "et felt", reading: "etfelt", meaning: "a field (an area of work or knowledge)", example: { jp: "Hun kan feltet bedre enn noen, og derfor blir hun aldri spurt om noe utenfor det.", en: "She knows the field better than anybody, and that is why she is never asked about anything outside it." }, accept: ["a field", "a domain"], drill: { jp: "Hun kjenner et felt ingen andre kan", en: "She knows a field nobody else knows" }, hint: "et felt → feltet, flertall felt (ubøyd). ⚠ Tre bruk: et fagfelt, et felt i et skjema, og en åker. Et virkeområde er avgrenset av en REGEL; et felt er avgrenset av hva folk kan." },
        { id: "no-u123l1-enytterkant", type: "vocab", front: "en ytterkant", reading: "enytterkant", meaning: "an outer edge (where the thing stops being itself)", example: { jp: "Saka ligger i ytterkanten av det loven dekker, og det er nettopp derfor begge sider tror de vinner.", en: "The case lies at the outer edge of what the law covers, and that is exactly why both sides think they will win." }, accept: ["a periphery", "a margin (edge)"], drill: { jp: "Saka ligger i en ytterkant av loven", en: "The case lies at an outer edge of the law" }, hint: "en ytterkant → ytterkanten, flertall ytterkanter. Hankjønn fordi en kant er det. Ytre + kant. ⚠ Også om geografi: «i ytterkanten av byen». I et argument betyr det at regelen så vidt gjelder." },
      ],
    },
    {
      id: "no-u123l2",
      unit: 123,
      lesson: 2,
      title: "Å sortere og ordne",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a set was sorted — and argue that the sorting itself decided the answer.",
      items: [
        { id: "no-u123l2-aklassifisere", type: "vocab", front: "å klassifisere", reading: "aklassifisere", meaning: "to classify (put cases into named groups)", example: { jp: "De klassifiserer halvparten av sakene som lette, og de lette er de de ikke har lest.", en: "They classify half the cases as easy, and the easy ones are the ones they have not read." }, accept: ["to categorise", "to classify"], drill: { jp: "Det er lett å klassifisere en sak galt", en: "It is easy to classify a case wrongly" }, hint: "å klassifisere → klassifiserer, klassifiserte, har klassifisert. ⚠ Også om GRADERING av hemmelige dokumenter: «klassifisert informasjon». Den betydningen er den vanligste i nyhetene." },
        { id: "no-u123l2-eigruppering", type: "vocab", front: "ei gruppering", reading: "eigruppering", meaning: "a grouping (the way a set was cut up)", example: { jp: "Grupperinga bestemmer svaret, og den er valgt av dem som skulle undersøke det.", en: "The grouping determines the answer, and it was chosen by those who were to investigate it." }, accept: ["a way of grouping", "a faction"], drill: { jp: "Vi gjorde ei gruppering ingen har sett", en: "We made a grouping nobody has seen" }, hint: "ei gruppering → grupperinga. -ing er hunkjønn. Fra ei gruppe (u68). ⚠ To bruk: måten du deler et materiale på, OG en fløy i et parti — «grupperingene i partiet»." },
        { id: "no-u123l2-ainndele", type: "vocab", front: "å inndele", reading: "ainndele", meaning: "to divide up (split a whole into parts)", example: { jp: "Landet er inndelt i områder ingen kjenner seg igjen i, og de gamle navnene lever videre.", en: "The country is divided into areas nobody recognises themselves in, and the old names live on." }, accept: ["to subdivide", "to partition"], drill: { jp: "Det går an å inndele et land slik", en: "It is possible to divide up a country that way" }, hint: "å inndele → inndeler, inndelte, har inndelt. Inn + å dele (u33). ⚠ Om et HELE som blir til deler, ovenfra. Å klassifisere går andre veien: du har enkeltsaker og gir dem et navn." },
        { id: "no-u123l2-ethierarki", type: "vocab", front: "et hierarki", reading: "ethierarki", meaning: "a hierarchy (ranks above and below each other)", example: { jp: "Det finnes et hierarki her ingen har skrevet ned, og alle nye lærer det på to uker.", en: "There is a hierarchy here nobody has written down, and everybody new learns it in two weeks." }, accept: ["a hierarchy", "a pecking order"], drill: { jp: "Det finnes et hierarki ingen har skrevet", en: "There is a hierarchy nobody has written down" }, hint: "et hierarki → hierarkiet, flertall hierarkier. ⚠ Nordmenn liker ikke ordet og bruker det derfor nesten bare som kritikk — «et flatt hierarki» er den formen folk skryter av." },
        { id: "no-u123l2-etdiagram", type: "vocab", front: "et diagram", reading: "etdiagram", meaning: "a chart (a picture of the numbers)", example: { jp: "Diagrammet starter ikke der det skal, og da ser den lille forskjellen ut som en katastrofe.", en: "The chart does not start where it should, and then the small difference looks like a disaster." }, accept: ["a diagram", "a graph"], drill: { jp: "Her er et diagram ingen kan lese", en: "Here is a chart nobody can read" }, hint: "et diagram → diagrammet, flertall diagrammer. Merk dobbel m i bøyinga. ⚠ Det klassiske trikset er akkurat det i eksempelet: en akse som ikke starter på null gjør en liten forskjell stor." },
        { id: "no-u123l2-enterm", type: "vocab", front: "en term", reading: "enterm", meaning: "a technical term (a word with a fixed meaning in a field)", example: { jp: "Ordet er en term i faget, og i avisa betyr det noe helt annet enn det gjør der.", en: "The word is a technical term in the field, and in the paper it means something completely different from what it means there." }, accept: ["a term", "a technical word"], drill: { jp: "Ordet er en term i dette faget", en: "The word is a technical term in this field" }, hint: "en term → termen, flertall termer. ⚠ Ikke det samme som et begrep (u58): et begrep er tanken, en term er ORDET som er avtalt for den. Derfor kan to fag ha ulike termer for samme begrep." },
      ],
    },
    {
      id: "no-u123l3",
      unit: 123,
      lesson: 3,
      title: "Hvor tallene kommer fra",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Ask where a number came from and how much of it is noise — the two questions that settle most disputes about figures.",
      items: [
        { id: "no-u123l3-ensporreundersokelse", type: "vocab", front: "en spørreundersøkelse", reading: "ensporreundersokelse", meaning: "an opinion survey (people asked, not measured)", example: { jp: "Tallet kommer fra en spørreundersøkelse, og det er noe annet enn det de har telt.", en: "The figure comes from an opinion survey, and that is something different from what they have counted." }, accept: ["a survey", "a poll"], drill: { jp: "Tallet kommer fra en spørreundersøkelse her", en: "The figure comes from an opinion survey here" }, hint: "en spørreundersøkelse → spørreundersøkelsen, flertall spørreundersøkelser. ⚠ -else er ALLTID hankjønn, og dette ordet er merket `ei` i en eldre liste — det er feil. Merk ø-folden: lesinga er ensporreundersokelse. Å spørre + en undersøkelse (u74)." },
        { id: "no-u123l3-enfeilmargin", type: "vocab", front: "en feilmargin", reading: "enfeilmargin", meaning: "a margin of error (how much of the figure is noise)", example: { jp: "Forskjellen er mindre enn feilmarginen, og avisa skrev likevel at den ene hadde gått fram.", en: "The difference is smaller than the margin of error, and the paper still wrote that the one had gained." }, accept: ["a margin of error"], drill: { jp: "Forskjellen er mindre enn en feilmargin", en: "The difference is smaller than a margin of error" }, hint: "en feilmargin → feilmarginen, flertall feilmarginer. Hankjønn fordi en margin er det. En feil (u50) + margin. ⚠ DEN VANLIGSTE FEILEN i norsk valgdekning: en endring inne i feilmarginen er ikke en endring." },
        { id: "no-u123l3-enobservasjon", type: "vocab", front: "en observasjon", reading: "enobservasjon", meaning: "an observation (a single recorded case)", example: { jp: "Hele konklusjonen hviler på tre observasjoner, og de er gjort av den samme personen.", en: "The whole conclusion rests on three observations, and they were made by the same person." }, accept: ["an observation", "a data point"], drill: { jp: "Hele svaret hviler på en observasjon", en: "The whole answer rests on one observation" }, hint: "en observasjon → observasjonen, flertall observasjoner. ⚠ -sjon-ord er hankjønn i hele dette kurset. Fagspråk: én observasjon er én rad i materialet, ikke det samme som at noen så noe." },
        { id: "no-u123l3-etterrettelig", type: "vocab", front: "etterrettelig", reading: "etterrettelig", meaning: "reliable (checkable, so you can build on it)", example: { jp: "Kilden er etterrettelig, og det betyr ikke at den som siterer den har lest hele.", en: "The source is reliable, and that does not mean the person quoting it has read all of it." }, accept: ["trustworthy (verifiable)", "sound"], drill: { jp: "Kilden er etterrettelig og ganske ny", en: "The source is reliable and rather new" }, hint: "etterrettelig → etterrettelig, etterrettelige. -ig-ord får ikke -t i intetkjønn. Etter + å rette seg. ⚠ Ikke det samme som pålitelig (u54): pålitelig er om noe holder, etterrettelig er om du KAN SJEKKE at det holder." },
        { id: "no-u123l3-enopphavsmann", type: "vocab", front: "en opphavsmann", reading: "enopphavsmann", meaning: "an originator (whoever the thing first came from)", example: { jp: "Ingen vet hvem opphavsmannen er, og tallet har vært sitert i mange tekster siden.", en: "Nobody knows who the originator is, and the figure has been quoted in many texts since." }, accept: ["an author (originator)", "a source person"], drill: { jp: "Ingen vet hvem en opphavsmann er", en: "Nobody knows who an originator is" }, hint: "en opphavsmann → opphavsmannen, flertall opphavsmenn. Et opphav (u95) + mann. ⚠ Kjønnet i ordet er der fortsatt, og mange skriver nå opphavsperson. Juridisk: den som har opphavsrett til et verk." },
        { id: "no-u123l3-agjoreredefor", type: "vocab", front: "å gjøre rede for", reading: "agjoreredefor", meaning: "to give an account of (set out how you got there)", example: { jp: "De gjør rede for metoden i en setning, og resten av teksten er mange sider lang.", en: "They give an account of the method in one sentence, and the rest of the text is many pages long." }, accept: ["to account for", "to set out"], drill: { jp: "De pleier å gjøre rede for metoden", en: "They tend to give an account of the method" }, hint: "å gjøre rede for → gjør, gjorde, har gjort. Merk ø-folden: lesinga er agjoreredefor. Å gjøre + rede + for. ⚠ Eksamensordet i Norge: «gjør rede for» betyr FORKLAR ORDENTLIG, ikke bare nevn." },
      ],
    },
    {
      id: "no-u123l4",
      unit: 123,
      lesson: 4,
      title: "Fra det ene tilfellet til alle",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Move between the single case and the general claim on purpose — and say which way you are moving.",
      items: [
        { id: "no-u123l4-generelt", type: "vocab", front: "generelt", reading: "generelt", meaning: "in general (as a rule, with cases left out)", example: { jp: "Generelt stemmer det, og de tilfellene som ikke passer er nettopp dem vi snakker om nå.", en: "In general it holds, and the cases that do not fit are exactly the ones we are talking about now." }, accept: ["generally", "broadly"], drill: { jp: "Generelt stemmer det for alle her", en: "In general it holds for everybody here" }, hint: "generelt er adverbformen av generell. ⚠ Et signal om at du HOPPER OVER unntakene med vilje. Derfor er «generelt sett» ofte innledningen til en påstand som ikke tåler nærmere sjekk." },
        { id: "no-u123l4-spesifikk", type: "vocab", front: "spesifikk", reading: "spesifikk", meaning: "specific (narrowed to one named case)", example: { jp: "Kritikken er ikke spesifikk nok til at noen kan svare på den, og det er nok helt med hensikt.", en: "The criticism is not specific enough for anybody to answer it, and that is probably quite deliberate." }, accept: ["specific", "precise (in scope)"], drill: { jp: "Kritikken er ikke spesifikk nok her", en: "The criticism is not specific enough here" }, hint: "spesifikk → spesifikt, spesifikke. ⚠ Om REKKEVIDDE: en spesifikk regel gjelder færre tilfeller. Presis er om hvor nøyaktig noe er sagt — en påstand kan være presis og likevel ikke spesifikk." },
        { id: "no-u123l4-ethovedpoeng", type: "vocab", front: "et hovedpoeng", reading: "ethovedpoeng", meaning: "a main point (the one that carries the argument)", example: { jp: "Hovedpoenget står til slutt, og alt foran det er bakgrunn ingen trengte.", en: "The main point is at the end, and everything before it is background nobody needed." }, accept: ["a key point", "the gist"], drill: { jp: "Vi har et hovedpoeng ingen har svart på", en: "We have a main point nobody has answered" }, hint: "et hovedpoeng → hovedpoenget, flertall hovedpoeng (ubøyd). Intetkjønn fordi et poeng (u44) er det. Et hode + poeng. ⚠ Fast vending i debatt: «hovedpoenget mitt er at…», som brukes til å hente tilbake en samtale som har sklidd ut." },
        { id: "no-u123l4-aeksemplifisere", type: "vocab", front: "å eksemplifisere", reading: "aeksemplifisere", meaning: "to illustrate with cases (show the rule at work)", example: { jp: "Hun eksemplifiserer alt hun sier, og motparten har bare en påstand og en tabell.", en: "She illustrates everything she says with cases, and the other side has only a claim and a table." }, accept: ["to exemplify", "to give examples of"], drill: { jp: "Det er lurt å eksemplifisere hvert poeng", en: "It is wise to illustrate every point with cases" }, hint: "å eksemplifisere → eksemplifiserer, eksemplifiserte, har eksemplifisert. Fra et eksempel (u32). ⚠ Et eksempel VISER en regel du allerede har; det BEVISER den ikke. Å generalisere (u120) går motsatt vei og er det farlige steget." },
        { id: "no-u123l4-eiforenkling", type: "vocab", front: "ei forenkling", reading: "eiforenkling", meaning: "a simplification (true, but with the hard part removed)", example: { jp: "Det er ei forenkling som holder helt til noen spør hvem som betaler for den.", en: "It is a simplification that holds right up until somebody asks who pays for it." }, accept: ["an oversimplification", "a simplified account"], drill: { jp: "Det er ei forenkling ingen har innrømmet", en: "It is a simplification nobody has admitted" }, hint: "ei forenkling → forenklinga. -ing er hunkjønn. Fra å forenkle (u90). ⚠ Fast vending: «en grov forenkling» er den vanligste innvendingen i norsk debatt. Du sier at noe er sant OG at det som er tatt bort var det som betydde noe." },
        { id: "no-u123l4-etenkelttilfelle", type: "vocab", front: "et enkelttilfelle", reading: "etenkelttilfelle", meaning: "an isolated case (one, and it proves nothing alone)", example: { jp: "Det er et enkelttilfelle, sier de, og det er tre av dem i år fra den samme avdelingen.", en: "It is an isolated case, they say, and there are three of them this year from the same department." }, accept: ["a single case", "a one-off"], drill: { jp: "De kaller det et enkelttilfelle her", en: "They call it an isolated case here" }, hint: "et enkelttilfelle → enkelttilfellet, flertall enkelttilfeller. Enkelt + et tilfelle (u50). ⚠ Det STANDARD svaret fra en institusjon under press. Motargumentet er alltid det samme: tell dem." },
      ],
    },
  ],
};
