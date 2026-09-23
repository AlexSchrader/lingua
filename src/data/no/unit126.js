// NO Unit 126 — Ord, mening og det usagte (slot: coverage-b2-16) — B2
// ═════════════════════════════════════════════════════════════════════════════
// THE LAST UNIT OF NORWEGIAN. u1–u126 are now authored end to end: A1 through
// B2, three bands, three blocks per band. Slot was scaffolded "Vocabulary 16
// (B2)" — a slot number, not an instruction — so the theme is chosen here, and
// it is chosen to close the language rather than to add one more field.
// Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js C1–C7.
//
// WHY THIS THEME. Every unit before this one teaches words for things in the
// world or moves in an argument. This one turns the tool on itself: the words
// for TALKING ABOUT WORDS. A learner who reaches here can already argue; what
// they cannot yet do is say «you are quoting me out of context», «that is meant
// figuratively», «the wording carries something the sentence does not». That is
// the last thing that separates a good B2 from a fluent reader of Norwegian
// public debate, and it is the right place to stop.
//   l1  choosing the words
//   l2  when the words carry more than they say
//   l3  when it is not clear what was meant
//   l4  seeing through the surface
//
// ⚠ CUT:
//   • `ei mening` — transparent from `å mene` (u17); block 1 of B1 rejected it
//     on the same test and the test has not changed.
//   • `å ytre` — transparent from `ei ytring` (u55).
//   • `å uttrykke` — LEXEME against `et uttrykk` (u49), and the hit is a real
//     one: the learner who owns the noun produces the verb.
//   • `innad` — a transparent pair with `utad`, which l4 teaches. One card.
//   • `ei formulering` (u110) and `ei tolkning` (u96) are already taught, so l1
//     takes `å formulere` and l3 takes `en gjengivelse` instead.
//
// GENDER: -ing FEMININE (`ei framtoning`), -else MASCULINE (`en gjengivelse`).
// Compounds from the LAST element: `et ordvalg` because `et valg` (u50) is
// neuter, `et ordspill` because `et spill` is, `en undertone` because `en tone`
// is masculine, `en talsperson` because `en person` (u20) is.
// FIRST FEMININE is `ei framtoning` (l4) and carries the en-/ei- note.
//
// DRILLS: å-verb drills use an å-frame; adjective drills take a COMMON-GENDER
// SINGULAR subject so the front appears verbatim.
//
// SCOPE: the frozen base u1–u125 plus this unit's own earlier cards. There is
// no later unit to defer anything to — anything this block did not card is
// simply not in Norwegian, and the hand-back names it.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT126 = {
  id: "no-u126",
  lang: "no",
  title: "Ord, mening og det usagte",
  order: 126,
  stage: "b2",
  lessons: [
    {
      id: "no-u126l1",
      unit: 126,
      lesson: 1,
      title: "Å velge ord",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the wording itself — argue that the choice of words is doing work the argument is not.",
      items: [
        { id: "no-u126l1-etordvalg", type: "vocab", front: "et ordvalg", reading: "etordvalg", meaning: "a choice of words (which word was picked, and why)", example: { jp: "Ordvalget er ikke tilfeldig, og hele saka handler om den ene setninga.", en: "The choice of words is not accidental, and the whole case is about that one sentence." }, accept: ["wording", "phrasing"], drill: { jp: "Ordvalget her er et ordvalg ingen liker", en: "The wording here is a choice of words nobody likes" }, hint: "et ordvalg → ordvalget, flertall ordvalg (ubøyd). Intetkjønn fordi et valg (u50) er det. Et ord (u18) + valg. ⚠ Å kritisere et ordvalg er å si at innholdet kanskje er riktig og formen likevel gal — en helt egen type innvending." },
        { id: "no-u126l1-aformulere", type: "vocab", front: "å formulere", reading: "aformulere", meaning: "to word (put a thing into a particular form)", example: { jp: "De formulerer seg utydelig med hensikt, og etterpå kan begge sider si at de hadde rett.", en: "They word it indistinctly on purpose, and afterwards both sides can say they were right." }, accept: ["to phrase", "to put into words"], drill: { jp: "Det er lett å formulere seg slik", en: "It is easy to word it that way" }, hint: "å formulere → formulerer, formulerte, har formulert. ⚠ Ofte med seg: «å formulere seg» er å uttrykke seg. Ei formulering (u110) er resultatet av det." },
        { id: "no-u126l1-adefinere", type: "vocab", front: "å definere", reading: "adefinere", meaning: "to define (fix what a word will mean here)", example: { jp: "Ingen definerer ordet i teksten, og derfor er de uenige i tre timer uten å merke det.", en: "Nobody defines the word in the text, and that is why they disagree for three hours without noticing." }, accept: ["to define"], drill: { jp: "Det er lurt å definere ordet først", en: "It is wise to define the word first" }, hint: "å definere → definerer, definerte, har definert. ⚠ To bruk: å forklare hva et ord betyr, OG å avgrense et problem — «problemet er dårlig definert». Den andre er den vanligste i fag." },
        { id: "no-u126l1-ordrett", type: "vocab", front: "ordrett", reading: "ordrett", meaning: "word for word (exactly as it was said)", example: { jp: "Setninga er ordrett den samme som i sommer, og de kaller den en ny plan.", en: "The sentence is word for word the same as in the summer, and they call it a new plan." }, accept: ["verbatim", "literally (of quoting)"], drill: { jp: "Setninga er ordrett den samme her", en: "The sentence is word for word the same here" }, hint: "ordrett er både adjektiv og adverb og bøyes lite. Et ord (u18) + rett. ⚠ Om GJENGIVELSE, ikke om betydning: ordrett er hvordan du siterer. Bokstavelig (l2) er hvordan du forstår." },
        { id: "no-u126l1-aomskrive", type: "vocab", front: "å omskrive", reading: "aomskrive", meaning: "to paraphrase (say the same thing in other words)", example: { jp: "Han omskriver det hun sa, og den nye setninga betyr noe litt annet enn den gamle.", en: "He paraphrases what she said, and the new sentence means something slightly different from the old one." }, accept: ["to rephrase", "to rewrite"], drill: { jp: "Det er lett å omskrive et sitat galt", en: "It is easy to paraphrase a quotation wrongly" }, hint: "å omskrive → omskriver, omskrev, har omskrevet. Om + å skrive (u18). ⚠ Ikke det samme som å oversette: du blir i samme språk. En omskriving er også måten du unngår et ord du ikke vil bruke." },
        { id: "no-u126l1-etutsagn", type: "vocab", front: "et utsagn", reading: "etutsagn", meaning: "a statement (one thing said, treated as a unit)", example: { jp: "Utsagnet står for seg selv i teksten, og alt rundt det er tatt bort av dem som siterer det.", en: "The statement stands on its own in the text, and everything around it has been removed by those quoting it." }, accept: ["an utterance", "a statement"], drill: { jp: "Her står et utsagn uten noe rundt", en: "Here stands a statement with nothing around it" }, hint: "et utsagn → utsagnet, flertall utsagn (ubøyd). Ut + å si. ⚠ Fagord: et utsagn er det MINSTE du kan vurdere som sant eller usant. Derfor brukes det når du vil skille én setning fra resten." },
      ],
    },
    {
      id: "no-u126l2",
      unit: 126,
      lesson: 2,
      title: "Når ordene bærer mer enn de sier",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Point at meaning that was never actually stated — and say whether you are reading it literally or not.",
      items: [
        { id: "no-u126l2-underforstatt", type: "vocab", front: "underforstått", reading: "underforstatt", meaning: "implied (there without being written)", example: { jp: "Det er underforstått at han ikke kommer tilbake, og ingen i brevet skriver det.", en: "It is implied that he is not coming back, and nobody in the letter writes it." }, accept: ["tacit", "understood"], drill: { jp: "Dette er underforstått for alle her", en: "This is implied for everybody here" }, hint: "underforstått → underforstått, underforståtte. Merk å-folden: lesinga er underforstatt. Under + å forstå (u3). ⚠ Ofte som innskudd i en setning: «underforstått: du burde ha spurt». Da er det en anklage." },
        { id: "no-u126l2-usagt", type: "vocab", front: "usagt", reading: "usagt", meaning: "left unsaid (deliberately not mentioned)", example: { jp: "Mye er usagt i møtet, og alle går ut med hvert sitt bilde av hva som ble bestemt.", en: "Much is unsaid in the meeting, and everybody leaves with their own picture of what was decided." }, accept: ["unspoken", "unstated"], drill: { jp: "Mye er usagt i slike møter", en: "Much is unsaid in such meetings" }, hint: "usagt → usagt, usagte. U- + sagt (av å si). ⚠ Fast vending: «jeg lar det være usagt», som betyr at du VET noe og ikke vil si det. Underforstått er noe leseren skal forstå; usagt er noe du holder tilbake." },
        { id: "no-u126l2-enundertone", type: "vocab", front: "en undertone", reading: "enundertone", meaning: "an undertone (a second feeling under the words)", example: { jp: "Det er en undertone i brevet ingen kan sitere, og alle som leser det kjenner den.", en: "There is an undertone in the letter nobody can quote, and everybody who reads it feels it." }, accept: ["an undercurrent", "a hint of feeling"], drill: { jp: "Det er en undertone her ingen nevner", en: "There is an undertone here nobody mentions" }, hint: "en undertone → undertonen, flertall undertoner. Hankjønn fordi en tone er det. Under + tone. ⚠ Om FØLELSE, ikke om innhold: en undertone av sinne, av ironi. Du kan ikke sitere en undertone, og det er nettopp derfor den virker." },
        { id: "no-u126l2-billedlig", type: "vocab", front: "billedlig", reading: "billedlig", meaning: "figurative (meant as an image, not a fact)", example: { jp: "Uttrykket er billedlig, og motparten leser det som en påstand om hva som faktisk gikk for seg.", en: "The expression is figurative, and the other side reads it as a claim about what actually went on." }, accept: ["metaphorical", "figuratively"], drill: { jp: "Uttrykket er billedlig og ganske gammelt", en: "The expression is figurative and rather old" }, hint: "billedlig → billedlig, billedlige. -ig-ord får ikke -t i intetkjønn. Fra et bilde (u16), med den gamle formen billed-. ⚠ Fast vending: «billedlig talt». Skrives også biletleg på nynorsk — her er bokmålsformen." },
        { id: "no-u126l2-bokstavelig", type: "vocab", front: "bokstavelig", reading: "bokstavelig", meaning: "literal (taken exactly as the words stand)", example: { jp: "Han tar alt bokstavelig, og det gjør ham til den beste vi har til å finne feil.", en: "He takes everything literally, and that makes him the best we have at finding errors." }, accept: ["literally"], drill: { jp: "Han er bokstavelig i alt han leser", en: "He is literal in everything he reads" }, hint: "bokstavelig → bokstavelig, bokstavelige. En bokstav + lig. ⚠ Fast vending: «bokstavelig talt», og nordmenn overbruker den akkurat som engelsktalende gjør med literally." },
        { id: "no-u126l2-etordspill", type: "vocab", front: "et ordspill", reading: "etordspill", meaning: "a play on words (two meanings at once, on purpose)", example: { jp: "Tittelen er et ordspill, og halvparten av dem som deler den har ikke sett det.", en: "The title is a play on words, and half of those sharing it have not seen it." }, accept: ["a pun", "wordplay"], drill: { jp: "Tittelen er et ordspill ingen ser", en: "The title is a play on words nobody sees" }, hint: "et ordspill → ordspillet, flertall ordspill (ubøyd). Intetkjønn fordi et spill er det. Et ord (u18) + spill. ⚠ Norsk er full av dem i overskrifter, og de er nesten umulige å oversette — det er en god grunn til å lese avisa på norsk." },
      ],
    },
    {
      id: "no-u126l3",
      unit: 126,
      lesson: 3,
      title: "Når det ikke er klart hva som ble ment",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue about what somebody actually said — the fight over the quotation, not over the claim.",
      items: [
        { id: "no-u126l3-tvetydig", type: "vocab", front: "tvetydig", reading: "tvetydig", meaning: "ambiguous (two readings, both defensible)", example: { jp: "Setninga er tvetydig, og den som skrev den kan velge betydning etter hvem som spør.", en: "The sentence is ambiguous, and whoever wrote it can choose a meaning depending on who asks." }, accept: ["equivocal", "open to two readings"], drill: { jp: "Setninga er tvetydig og ganske kort", en: "The sentence is ambiguous and rather short" }, hint: "tvetydig → tvetydig, tvetydige. -ig-ord får ikke -t i intetkjønn. Tve- (to) + tydig. ⚠ Ikke det samme som utydelig (u121): en tvetydig setning er helt klar, den er bare klar på to måter." },
        { id: "no-u126l3-engjengivelse", type: "vocab", front: "en gjengivelse", reading: "engjengivelse", meaning: "a rendering (somebody else's report of what was said)", example: { jp: "Gjengivelsen er riktig ord for ord, og likevel står det noe annet enn det hun mente.", en: "The rendering is correct word for word, and still it says something other than what she meant." }, accept: ["an account", "a reproduction (of speech)"], drill: { jp: "Vi fikk en gjengivelse ingen kjente igjen", en: "We got a rendering nobody recognised" }, hint: "en gjengivelse → gjengivelsen, flertall gjengivelser. ⚠ -else er ALLTID hankjønn. Fra å gjengi (u70). Et sitat (u48) er ordene; en gjengivelse er de ordene PLUSS valget av hva som kom med." },
        { id: "no-u126l3-areferere", type: "vocab", front: "å referere", reading: "areferere", meaning: "to report (give an account of what was said)", example: { jp: "Avisa refererer møtet uten å nevne at mange gikk ut, og det er det som betyr noe.", en: "The paper reports the meeting without mentioning that many walked out, and that is what matters." }, accept: ["to give an account of", "to refer to"], drill: { jp: "Det er lett å referere et møte galt", en: "It is easy to report a meeting wrongly" }, hint: "å referere → refererer, refererte, har referert. ⚠ To bruk og de er svært ulike: å gjengi noe (referere et møte), og å vise til noe — «å referere TIL en kilde». Preposisjonen skiller dem." },
        { id: "no-u126l3-entalsperson", type: "vocab", front: "en talsperson", reading: "entalsperson", meaning: "a spokesperson (speaks for others, not for themselves)", example: { jp: "Talspersonen sier det ledelsen har bestemt, og ingen spør hva hun selv mener om det.", en: "The spokesperson says what the management has decided, and nobody asks what she thinks of it herself." }, accept: ["a spokesman", "a representative (speaking)"], drill: { jp: "Talspersonen er en talsperson uten makt", en: "The spokesperson is a spokesperson without power" }, hint: "en talsperson → talspersonen, flertall talspersoner. Hankjønn fordi en person er det. Å tale + person. ⚠ Talsmann og talskvinne finnes også; talsperson er den nøytrale formen og den som brukes mest i dag." },
        { id: "no-u126l3-enbrodd", type: "vocab", front: "en brodd", reading: "enbrodd", meaning: "a sting (the pointed edge in what was said)", example: { jp: "Det er en brodd i setninga som ingen av dem kan peke på, og alle hørte den.", en: "There is a sting in the sentence that none of them can point to, and everybody heard it." }, accept: ["a barb", "a sharp edge (in words)"], drill: { jp: "Det er en brodd i denne setninga", en: "There is a sting in this sentence" }, hint: "en brodd → brodden, flertall brodder. ⚠ Konkret er det brodden på en bie. Overført: «uttalelsen hadde en brodd mot ledelsen». Brukes med mot, og det er det som sier hvem den traff." },
        { id: "no-u126l3-aspillepa", type: "vocab", front: "å spille på", reading: "aspillepa", meaning: "to play on (use a feeling the audience already has)", example: { jp: "Teksten spiller på frykt uten å nevne den, og de som skrev den vet nettopp hva de gjør.", en: "The text plays on fear without mentioning it, and those who wrote it know exactly what they are doing." }, accept: ["to appeal to", "to exploit (a feeling)"], drill: { jp: "Slike tekster pleier å spille på frykt", en: "Such texts tend to play on fear" }, hint: "å spille på → spiller, spilte, har spilt. Merk å-folden: lesinga er aspillepa. ⚠ Alltid om FØLELSER hos mottakeren, og alltid en anklage: du sier at teksten virker uten å argumentere." },
      ],
    },
    {
      id: "no-u126l4",
      unit: 126,
      lesson: 4,
      title: "Å se gjennom overflaten",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that the outside and the inside do not match — the last move, and the one the whole B2 band has been building towards.",
      items: [
        { id: "no-u126l4-agjennomskue", type: "vocab", front: "å gjennomskue", reading: "agjennomskue", meaning: "to see through (work out what is really going on)", example: { jp: "Alle gjennomskuer det etter en uke, og ingen av dem sier noe før det står i avisa.", en: "Everybody sees through it after a week, and none of them says anything until it is in the paper." }, accept: ["to see through", "to rumble"], drill: { jp: "Det er lett å gjennomskue slike grep", en: "It is easy to see through such moves" }, hint: "å gjennomskue → gjennomskuer, gjennomskuet, har gjennomskuet. Gjennom + å skue (å se). ⚠ Objektet er alltid noe som SKULLE lure deg: et knep, et forsøk, en person. Du gjennomskuer ikke en sannhet." },
        { id: "no-u126l4-enfasade", type: "vocab", front: "en fasade", reading: "enfasade", meaning: "a front (the face shown outwards)", example: { jp: "Fasaden holder helt til noen spør om tallene, og da er det ingen som svarer.", en: "The front holds right up until somebody asks about the figures, and then nobody answers." }, accept: ["a facade", "an outward appearance"], drill: { jp: "Fasaden her er en fasade uten noe bak", en: "The front here is a facade with nothing behind" }, hint: "en fasade → fasaden, flertall fasader. ⚠ Både om hus og om mennesker, og den overførte bruken er den vanligste: «å holde fasaden» er et av de mest brukte uttrykkene i norsk om folk under press." },
        { id: "no-u126l4-enkulisse", type: "vocab", front: "en kulisse", reading: "enkulisse", meaning: "a stage set (scenery, with the real work behind it)", example: { jp: "Møtet er en kulisse, og alt som betyr noe ble bestemt i gangen før møtet.", en: "The meeting is a stage set, and everything that matters was decided in the corridor before the meeting." }, accept: ["a backdrop", "stage scenery"], drill: { jp: "Møtet er en kulisse og ikke mer", en: "The meeting is a stage set and nothing more" }, hint: "en kulisse → kulissen, flertall kulisser. ⚠ Fast vending og svært vanlig: «bak kulissene» er der det virkelige arbeidet skjer. En fasade er det DU viser; en kulisse er noe som er BYGD for andre." },
        { id: "no-u126l4-utad", type: "vocab", front: "utad", reading: "utad", meaning: "outwardly (in what is shown to the world)", example: { jp: "Utad er de enige om alt, og i notatet til styret er det tre ulike forslag.", en: "Outwardly they agree about everything, and in the note to the board there are three different proposals." }, accept: ["externally", "to the outside world"], drill: { jp: "Utad er alle enige her", en: "Outwardly everybody agrees here" }, hint: "utad er adverb og bøyes ikke. Ut + -ad, en gammel retningsendelse. ⚠ Motstykket er innad, som denne blokka ikke karder fordi paret er én læring. Begge er faste i norsk organisasjonsspråk." },
        { id: "no-u126l4-aframsta", type: "vocab", front: "å framstå", reading: "aframsta", meaning: "to come across as (be seen as, whatever the truth)", example: { jp: "Hun framstår som sikker, og i det brevet hun sendte på forhånd står det motsatte.", en: "She comes across as certain, and in the letter she sent beforehand it says the opposite." }, accept: ["to appear", "to present as"], drill: { jp: "Det er lett å framstå som sikker", en: "It is easy to come across as certain" }, hint: "å framstå → framstår, framsto, har framstått. Merk å-folden: lesinga er aframsta. Fram + å stå. ⚠ Brukes med som. Ordet sier ingenting om hva som er sant — bare hva mottakeren sitter igjen med." },
        { id: "no-u126l4-eiframtoning", type: "vocab", front: "ei framtoning", reading: "eiframtoning", meaning: "a presence (the whole impression a person makes)", example: { jp: "Framtoninga hans gjør mye av arbeidet i et møte, og resten gjør de som har lest saka.", en: "His presence does much of the work in a meeting, and the rest is done by those who have read the case." }, accept: ["a bearing", "an appearance (of a person)"], drill: { jp: "Vi husker ei framtoning ingen glemmer", en: "We remember a presence nobody forgets" }, hint: "ei framtoning → framtoninga. Hunkjønnsord kan du også skrive en framtoning / framtoningen, og begge er vanlige i skrift — merk begge, for du møter begge. -ing er hunkjønn. Fram + å tone seg. ⚠ Om HELE inntrykket av et menneske: klær, stemme, måte. Et vesen (u113) er hvordan noen ER; ei framtoning er hvordan de VIRKER." },
      ],
    },
  ],
};
