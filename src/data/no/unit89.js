// NO Unit 89 — Belegg og kilder (slot: evidence) — B2
// Block 1 of Norwegian B2. Band constitution: no/unit88.js §C1–C7. Language
// contract: no/unit1.js. Band-B1 contract: no/unit51.js.
//
// u88 takes the ARGUING half, this unit takes the SOURCE half — the split the
// German B2 lead recommended and it holds for Norwegian too. Blocked before a
// line was written: `en kilde` u54, `å bekrefte` u51, `et sitat` u48, `et funn`
// u74, `et utvalg` u27, `ei måling` (← maling u82), `en analyse` u74.
// `ei henvisning` was cut as a transparent derivation of `å henvise` (l1) and
// `et anslag` as one of `å anslå` (l3); `et utdrag` and `et gjennomsnitt` took
// their places.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT89 = {
  id: "no-u89",
  lang: "no",
  title: "Belegg og kilder",
  order: 89,
  stage: "b2",
  lessons: [
    {
      id: "no-u89l1",
      unit: 89,
      lesson: 1,
      title: "Å vise til noe",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Back a claim up in Norwegian — point at where it came from, quote it, and say which part of it you are using.",
      items: [
        { id: "no-u89l1-etbelegg", type: "vocab", front: "et belegg", reading: "etbelegg", meaning: "backing (evidential support)", example: { jp: "Han har godt belegg for det han hevder, men han nevner det aldri.", en: "He has good backing for what he claims, but he never mentions it." }, accept: ["evidence", "grounds", "support"], drill: { jp: "Det finnes ikke et belegg for dette", en: "There is no backing for this" }, hint: "et belegg → belegget, flertall belegg (likt i flertall). Står oftest uten artikkel: å ha belegg for noe. Et bevis er avgjort; belegg er det du støtter deg på." },
        { id: "no-u89l1-adokumentere", type: "vocab", front: "å dokumentere", reading: "adokumentere", meaning: "to document (prove with records)", example: { jp: "Alt sammen er dokumentert, men ingen har lest det.", en: "All of it is documented, but nobody has read it." }, accept: ["to record", "to evidence", "to prove"], drill: { jp: "Det er viktig å dokumentere alt", en: "It is important to document everything" }, hint: "å dokumentere → dokumenterer, dokumenterte. Fra et dokument. Sterkere enn å forklare (u33): du legger fram papirene." },
        { id: "no-u89l1-enreferanse", type: "vocab", front: "en referanse", reading: "enreferanse", meaning: "reference (pointer to a source)", example: { jp: "Boka har mange referanser, men halvparten fører til samme forsker.", en: "The book has many references, but half of them lead to the same researcher." }, accept: ["a citation", "a source reference"], drill: { jp: "Hun ga oss en referanse vi kunne bruke", en: "She gave us a reference we could use" }, hint: "en referanse → referansen, flertall referanser. Uttales -anse, som i sjanse. Også om personer: å oppgi referanser når du søker jobb." },
        { id: "no-u89l1-ahenvise", type: "vocab", front: "å henvise", reading: "ahenvise", meaning: "to refer (point onward)", example: { jp: "Legen henviste meg videre uten å forklare hvorfor.", en: "The doctor referred me on without explaining why." }, accept: ["to refer", "to direct"], drill: { jp: "Det er vanlig å henvise til en kilde", en: "It is normal to refer to a source" }, hint: "å henvise → henviser, henviste. Alltid med til. Hos legen betyr det å sende deg videre til en annen; i en tekst å peke på kilden." },
        { id: "no-u89l1-asitere", type: "vocab", front: "å sitere", reading: "asitere", meaning: "to quote", example: { jp: "Avisa siterte ham riktig, men tok bort alt som kom etter.", en: "The paper quoted him correctly, but took away everything that came after." }, accept: ["to cite", "quote"], drill: { jp: "Det er lett å sitere noen feil", en: "It is easy to quote somebody wrongly" }, hint: "å sitere → siterer, siterte. Et sitat (u48) er resultatet. Å sitere noen feil er som regel å ta ordene ut av sammenhengen (u50)." },
        { id: "no-u89l1-etutdrag", type: "vocab", front: "et utdrag", reading: "etutdrag", meaning: "extract (excerpt)", example: { jp: "Vi fikk bare et utdrag, og det var valgt ut av dem selv.", en: "We only got an extract, and it had been selected by them." }, accept: ["an excerpt", "a passage"], drill: { jp: "Hun leste et utdrag fra boka", en: "She read an extract from the book" }, hint: "et utdrag → utdraget, flertall utdrag. Ut + å dra (u20): det du drar ut av en tekst. Alltid en del, aldri hele." },
      ],
    },
    {
      id: "no-u89l2",
      unit: 89,
      lesson: 2,
      title: "Å undersøke",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Check something properly — look into it hard, sample it instead of counting everything, and say how you went about it.",
      items: [
        { id: "no-u89l2-agranske", type: "vocab", front: "å granske", reading: "agranske", meaning: "to scrutinise", example: { jp: "Saka ble gransket i to år, men resultatet kom aldri fram.", en: "The case was scrutinised for two years, but the result never came out." }, accept: ["to examine", "to investigate", "to scrutinize"], drill: { jp: "De begynte å granske alle tallene", en: "They began to scrutinise all the figures" }, hint: "å granske → gransker, gransket. Grundigere enn å undersøke (u60): du leter etter noe som er galt. Ei gransking er den offisielle utgaven." },
        { id: "no-u89l2-enstikkprove", type: "vocab", front: "en stikkprøve", reading: "enstikkprove", meaning: "spot check", example: { jp: "De tok en stikkprøve og fant feil i tre av ti.", en: "They took a spot check and found mistakes in three out of ten." }, accept: ["a random check", "a sample check"], drill: { jp: "De tar en stikkprøve hver uke", en: "They take a spot check every week" }, hint: "en stikkprøve → stikkprøven, flertall stikkprøver. Merk ø-folden: lesinga er enstikkprove. Å stikke + en prøve: du sjekker noen få og regner med at resten er like." },
        { id: "no-u89l2-apavise", type: "vocab", front: "å påvise", reading: "apavise", meaning: "to demonstrate (show to exist)", example: { jp: "Ingen har påvist en sammenheng, men alle snakker som om den finnes.", en: "Nobody has demonstrated a connection, but everybody talks as if it exists." }, accept: ["to show", "to establish", "to prove"], drill: { jp: "Det er vanskelig å påvise en sammenheng", en: "It is hard to demonstrate a connection" }, hint: "å påvise → påviser, påviste. På + å vise (u20). Å vise er å peke på noe; å påvise er å vise at det FINNES, med belegg (l1)." },
        { id: "no-u89l2-enframgangsmate", type: "vocab", front: "en framgangsmåte", reading: "enframgangsmate", meaning: "procedure (way of going about it)", example: { jp: "Framgangsmåten er grei nok, men den tar altfor lang tid.", en: "The procedure is fine enough, but it takes far too long." }, accept: ["a method", "an approach", "a process"], drill: { jp: "De valgte en framgangsmåte ingen liker", en: "They chose a procedure nobody likes" }, hint: "en framgangsmåte → framgangsmåten, flertall framgangsmåter. En framgang (u59) + en måte: hvordan du går fram, steg for steg." },
        { id: "no-u89l2-aetterprove", type: "vocab", front: "å etterprøve", reading: "aetterprove", meaning: "to verify independently", example: { jp: "Alt dette kan andre etterprøve, og det er hele poenget.", en: "All of this others can verify, and that is the whole point." }, accept: ["to verify", "to check independently", "to replicate"], drill: { jp: "Det er viktig å etterprøve slike tall", en: "It is important to verify figures like those" }, hint: "å etterprøve → etterprøver, etterprøvde. Etter + å prøve (u15): å gjøre prøven om igjen selv. Kjernen i all forskning (u74)." },
        { id: "no-u89l2-representativ", type: "vocab", front: "representativ", reading: "representativ", meaning: "representative (of the whole)", example: { jp: "Utvalget er lite, men det er representativt for hele byen.", en: "The sample is small, but it is representative of the whole city." }, accept: ["typical (of a group)"], drill: { jp: "Denne gruppa er ikke representativ", en: "This group is not representative" }, hint: "representativ → representativt, representative. Om et utvalg (u27) som ligner på helheten (u47). Ikke det samme som stort — et lite utvalg kan godt være representativt." },
      ],
    },
    {
      id: "no-u89l3",
      unit: 89,
      lesson: 3,
      title: "Tall og tabeller",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read a Norwegian number and say what it is made of — the data behind it, the average, the share, and how rough the guess is.",
      items: [
        { id: "no-u89l3-enstatistikk", type: "vocab", front: "en statistikk", reading: "enstatistikk", meaning: "statistics (one set of figures)", example: { jp: "Statistikken viser en klar endring, men ikke hvorfor den skjedde.", en: "The statistics show a clear change, but not why it happened." }, accept: ["a statistic", "figures"], drill: { jp: "De laget en statistikk over alle kundene", en: "They made a statistic covering all the customers" }, hint: "en statistikk → statistikken, flertall statistikker. Om ETT sett tall. Faget heter også statistikk og står da uten artikkel." },
        { id: "no-u89l3-etdatagrunnlag", type: "vocab", front: "et datagrunnlag", reading: "etdatagrunnlag", meaning: "data basis", example: { jp: "Datagrunnlaget er for lite til at vi kan si noe sikkert.", en: "The data basis is too small for us to say anything with certainty." }, accept: ["the data", "an evidence base"], drill: { jp: "Vi trenger et datagrunnlag først", en: "We need a data basis first" }, hint: "et datagrunnlag → datagrunnlaget, flertall datagrunnlag. Data + et grunnlag: tallene en konklusjon (u88) hviler på. Står i hver eneste norske rapport." },
        { id: "no-u89l3-aansla", type: "vocab", front: "å anslå", reading: "aansla", meaning: "to estimate", example: { jp: "De anslår at halvparten kommer, men ingen har spurt dem.", en: "They estimate that half will come, but nobody has asked them." }, accept: ["to estimate", "to put (a figure) at"], drill: { jp: "Det er vanskelig å anslå prisen", en: "It is hard to estimate the price" }, hint: "å anslå → anslår, anslo. Bøyes som å slå (u44). Et anslag er tallet du kommer fram til." },
        { id: "no-u89l3-entabell", type: "vocab", front: "en tabell", reading: "entabell", meaning: "table (of figures)", example: { jp: "Tabellen er full av tall, men bare to av dem er viktige.", en: "The table is full of figures, but only two of them matter." }, accept: ["a chart", "a table"], drill: { jp: "Alt sammen står i en tabell", en: "All of it is in a table" }, hint: "en tabell → tabellen, flertall tabeller. Trykket på siste stavelse: ta-BELL. Rader og kolonner — ikke det samme som et bord." },
        { id: "no-u89l3-etgjennomsnitt", type: "vocab", front: "et gjennomsnitt", reading: "etgjennomsnitt", meaning: "average (mean)", example: { jp: "Gjennomsnittet sier lite når forskjellene er så store.", en: "The average says little when the differences are so big." }, accept: ["a mean", "an average"], drill: { jp: "Vi regnet ut et gjennomsnitt", en: "We worked out an average" }, hint: "et gjennomsnitt → gjennomsnittet, flertall gjennomsnitt. Gjennom + å snitte. Den vanlige formen er uten artikkel: i gjennomsnitt to timer." },
        { id: "no-u89l3-enandel", type: "vocab", front: "en andel", reading: "enandel", meaning: "share (proportion)", example: { jp: "Andelen som svarer, har blitt mindre hvert år.", en: "The proportion who answer has got smaller every year." }, accept: ["a proportion", "a portion", "a percentage"], drill: { jp: "Hun eier en andel av huset", en: "She owns a share of the house" }, hint: "en andel → andelen, flertall andeler. En del (u47) av en helhet (u47), oftest oppgitt i prosent. Også om eierskap: en andel i et borettslag (u80)." },
      ],
    },
    {
      id: "no-u89l4",
      unit: 89,
      lesson: 4,
      title: "Å vurdere en kilde",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Judge a source — say whether it can be trusted, which way it leans, and where the inconvenient part was hidden.",
      items: [
        { id: "no-u89l4-troverdig", type: "vocab", front: "troverdig", reading: "troverdig", meaning: "credible", example: { jp: "Historia er troverdig, men den kommer bare fra én kilde.", en: "The story is credible, but it comes from only one source." }, accept: ["believable", "trustworthy"], drill: { jp: "Ingen mener han er troverdig", en: "Nobody thinks he is credible" }, hint: "troverdig → troverdig, troverdige. Å tro (u12) + verdig: verdt å tro på. Om personer og historier, ikke om tall — tall er sikre eller usikre." },
        { id: "no-u89l4-enkildekritikk", type: "vocab", front: "en kildekritikk", reading: "enkildekritikk", meaning: "source criticism", example: { jp: "Kildekritikk er det første alle lærer, og det ingen gjør etterpå.", en: "Source criticism is the first thing everybody learns, and the thing nobody does afterwards." }, accept: ["source evaluation", "critical source analysis"], drill: { jp: "Han gjorde en kildekritikk av hele boka", en: "He did a source criticism of the whole book" }, hint: "en kildekritikk → kildekritikken. En kilde (u54) + kritikk. Fire spørsmål: hvem sier det, når, hvorfor, og hva sier andre kilder?" },
        { id: "no-u89l4-aavkrefte", type: "vocab", front: "å avkrefte", reading: "aavkrefte", meaning: "to deny (disconfirm)", example: { jp: "Politiet avkreftet alt sammen samme kveld, men det hjalp lite.", en: "The police denied all of it the same evening, but it did not help much." }, accept: ["to refute", "to disconfirm", "to deny"], drill: { jp: "De ønsker å avkrefte hele saka", en: "They want to deny the whole case" }, hint: "å avkrefte → avkrefter, avkreftet. Motsatsen til å bekrefte (u51). Om opplysninger (u54): du sier at det ikke stemmer." },
        { id: "no-u89l4-enfotnote", type: "vocab", front: "en fotnote", reading: "enfotnote", meaning: "footnote", example: { jp: "Det viktigste i hele boka står i en fotnote på side ni.", en: "The most important thing in the whole book is in a footnote on page nine." }, accept: ["a note"], drill: { jp: "Han skjulte tallet i en fotnote", en: "He hid the figure in a footnote" }, hint: "en fotnote → fotnoten, flertall fotnoter. En fot + en note. Der forfatteren (u48) setter det han ikke egentlig vil at du skal lese." },
        { id: "no-u89l4-tendensios", type: "vocab", front: "tendensiøs", reading: "tendensios", meaning: "slanted (tendentious)", example: { jp: "Boka er ikke feil, men den er tendensiøs fra første side.", en: "The book is not wrong, but it is slanted from the first page." }, accept: ["biased", "one-sided", "tendentious"], drill: { jp: "Hele boka virket tendensiøs", en: "The whole book seemed slanted" }, hint: "tendensiøs → tendensiøst, tendensiøse. Merk ø-folden: lesinga er tendensios. Fra en tendens: teksten trekker i én retning hele veien. Ikke det samme som usant." },
        { id: "no-u89l4-eislagside", type: "vocab", front: "ei slagside", reading: "eislagside", meaning: "bias (a lean to one side)", example: { jp: "Avisa har ei slagside alle kjenner, og den forsvinner ikke.", en: "The paper has a bias everybody knows about, and it is not going away." }, accept: ["a slant", "partiality", "a list (to one side)"], drill: { jp: "Denne boka har ei slagside", en: "This book has a bias" }, hint: "ei slagside → slagsida. Følger ei side (u33) og er hunkjønn; du vil også se slagsiden i trykk, og begge er tillatt i bokmål. Egentlig om et skip som heller." },
      ],
    },
  ],
};
