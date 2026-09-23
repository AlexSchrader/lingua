// NO Unit 111 — Konkrete verb i overført bruk (slot: coverage-b2-1) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 1 (B2)", which is a slot NUMBER and not an
// instruction — the theme is chosen here. Conventions: unit1.js §1–§9,
// unit51.js B1–B9, unit88.js C1–C7.
//
// WHY THIS THEME. unit51.js B8 left a list of top-50 Norwegian verbs the whole
// A1+A2+B1 corpus had never taken — å legge, å sette, å nå, å bære, å falle.
// B1 block 3 took most of them in u77 (å legge, å sette, å bære, å trekke), so
// this unit takes what is STILL free, and takes it for the reason a B2 unit
// should: not the physical meaning, which a learner can guess, but the FIGURATIVE
// one, which is where these verbs actually live in argument. «Saka smuldrer opp»,
// «det tærer på henne», «han skyver ansvaret videre» — none of those are about
// crumbs, wear or pushing.
//   l1  moving something that will not move by itself
//   l2  giving way and breaking
//   l3  holding, covering and reaching across
//   l4  slow damage and slow change
//
// ⚠ EVERY FRONT HERE IS AN Å-VERB, SO EVERY DRILL USES AN Å-FRAME (unit88.js C5).
// Norwegian drops the å after kan/vil/skal/må/bør, so «vi må skyve ansvaret» does
// NOT contain the front `å skyve` and the card would die silently. The frames
// used: Det er lett/vondt/dyrt/mulig/viktig å …, … prøver/klarer/begynner/
// koster/ser ut til å … .
//
// ⚠ TAKEN, measured before authoring: `å legge` u77, `å sette` u77, `å bære`
// u77, `å trekke` u77, `å bøye` u46, `å stige` u59, `å synke` u59, `å slippe`
// u61, `å inngå` u93, `å dekke` u46, `å omfatte` u58, `å berøre` u96, `å prege`
// u63, `å bane` (← en bane u44).
//
// SCOPE: the frozen base u1–u110 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT111 = {
  id: "no-u111",
  lang: "no",
  title: "Konkrete verb i overført bruk",
  order: 111,
  stage: "b2",
  lessons: [
    {
      id: "no-u111l1",
      unit: 111,
      lesson: 1,
      title: "Å flytte på noe",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Use a physical verb of movement about something that does not move — responsibility, a deadline, a position.",
      items: [
        { id: "no-u111l1-askyve", type: "vocab", front: "å skyve", reading: "askyve", meaning: "to push (also: to defer)", example: { jp: "Han skyver ansvaret videre hver gang, og til slutt er det ingen igjen å skyve det til.", en: "He pushes the responsibility on every time, and in the end there is nobody left to push it to." }, accept: ["to shove", "to put off"], drill: { jp: "Det er lett å skyve ansvaret videre", en: "It is easy to push the responsibility on" }, hint: "å skyve → skyver, skjøv, har skjøvet. ⚠ Sterkt verb med ø i fortid. Om ting OG om tid: å skyve på et møte betyr å utsette det." },
        { id: "no-u111l1-arive", type: "vocab", front: "å rive", reading: "arive", meaning: "to tear down", example: { jp: "De river bygget i år, og de har fremdeles ikke sagt hva som skal stå der etterpå.", en: "They are tearing the building down this year, and they still have not said what will stand there afterwards." }, accept: ["to tear", "to demolish"], drill: { jp: "Det er dyrt å rive et gammelt hus", en: "It is expensive to tear down an old house" }, hint: "å rive → river, reiv, har revet. Også om papir: å rive i stykker. ⚠ Overført: «det river i halsen» betyr at noe svir." },
        { id: "no-u111l1-avelte", type: "vocab", front: "å velte", reading: "avelte", meaning: "to overturn", example: { jp: "Et svar kan velte hele saka, og det er nettopp derfor ingen vil svare først.", en: "An answer can overturn the whole case, and that is exactly why nobody wants to answer first." }, accept: ["to knock over", "to topple"], drill: { jp: "Det er lett å velte hele planen", en: "It is easy to overturn the whole plan" }, hint: "å velte → velter, veltet. Både om noe som velter selv og om å velte noe. ⚠ Overført brukes det om regjeringer og om forslag, ikke om mennesker." },
        { id: "no-u111l1-adrive", type: "vocab", front: "å drive", reading: "adrive", meaning: "to run (an operation)", example: { jp: "De driver skolen godt, men de har aldri hatt penger nok til å bygge den om.", en: "They run the school well, but they have never had enough money to rebuild it." }, accept: ["to operate", "to drive (forward)"], drill: { jp: "Det koster mye å drive en skole", en: "It costs a lot to run a school" }, hint: "å drive → driver, dreiv, har drevet. ⚠ TRE TYDNINGER du møter hele tida: å drive en bedrift (lede den), å drive med noe (holde på med), og å drive i vannet (flyte uten styring)." },
        { id: "no-u111l1-arykke", type: "vocab", front: "å rykke", reading: "arykke", meaning: "to move (in jerks)", example: { jp: "Tallene rykker oppover hvert år, og likevel er de lavere enn de var for fem år siden.", en: "The figures jerk upwards every year, and still they are lower than they were five years ago." }, accept: ["to jerk", "to advance"], drill: { jp: "De begynner å rykke fram igjen", en: "They are beginning to move forward again" }, hint: "å rykke → rykker, rykket. Å bevege seg i BYKS, ikke jevnt. I sport: å rykke opp og å rykke ned er å bytte divisjon." },
        { id: "no-u111l1-agli", type: "vocab", front: "å gli", reading: "agli", meaning: "to slide (slip)", example: { jp: "Møtet glir over i en helt annen sak, og ingen sier fra før det er for sent.", en: "The meeting slides over into a completely different matter, and nobody says anything until it is too late." }, accept: ["to glide", "to slip"], drill: { jp: "Det er lett å gli ut av det", en: "It is easy to slide out of it" }, hint: "å gli → glir, gled, har glidd. ⚠ Overført om noe som skjer SAKTE og uten at noen bestemmer det: språket glir, saka glir ut, en frist glir." },
      ],
    },
    {
      id: "no-u111l2",
      unit: 111,
      lesson: 2,
      title: "Å gi etter og å briste",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say that something gave way — and pick the verb that says HOW it gave way, because Norwegian has four and they are not the same.",
      items: [
        { id: "no-u111l2-afalle", type: "vocab", front: "å falle", reading: "afalle", meaning: "to fall (drop down)", example: { jp: "Prisen faller hver høst, men den kommer alltid opp igjen før jul.", en: "The price falls every autumn, but it always comes back up before Christmas." }, accept: ["to drop", "to come down"], drill: { jp: "Det er vondt å falle på isen", en: "It is painful to fall on the ice" }, hint: "å falle → faller, falt, har falt. ⚠ Overført om tall, om regjeringer og om ord: «det falt en bemerkning» betyr at noen sa noe." },
        { id: "no-u111l2-aknuse", type: "vocab", front: "å knuse", reading: "aknuse", meaning: "to shatter", example: { jp: "Tallene knuser argumentet hans, og han fortsetter likevel å bruke det.", en: "The figures shatter his argument, and he still goes on using it." }, accept: ["to smash", "to crush"], drill: { jp: "Det er lett å knuse et glass", en: "It is easy to shatter a glass" }, hint: "å knuse → knuser, knuste. I ETT SLAG og helt. Å svekke (u88) tar litt av styrken; å knuse tar alt." },
        { id: "no-u111l2-asprekke", type: "vocab", front: "å sprekke", reading: "asprekke", meaning: "to burst (fall apart)", example: { jp: "Avtalen kan sprekke når som helst, og begge sider sier at det er den andre som går fra den.", en: "The agreement can fall apart at any time, and both sides say it is the other who is walking away from it." }, accept: ["to crack", "to collapse"], drill: { jp: "Avtalen begynte å sprekke i vår", en: "The agreement began to fall apart in the spring" }, hint: "å sprekke → sprekker, sprakk, har sprukket. ⚠ Sterkt verb: sprakk i fortid. Om avtaler, budsjetter og planer — og da er det plutselig, ikke sakte." },
        { id: "no-u111l2-atoye", type: "vocab", front: "å tøye", reading: "atoye", meaning: "to stretch (a limit)", example: { jp: "De tøyer regelen så langt den går, og de bryter den aldri helt.", en: "They stretch the rule as far as it goes, and they never quite break it." }, accept: ["to stretch", "to push (a rule)"], drill: { jp: "Det er mulig å tøye en regel", en: "It is possible to stretch a rule" }, hint: "å tøye → tøyer, tøyde. Merk ø-folden: lesinga er atoye. Om regler og om grenser. Å strekke er om ting og om tid; å tøye er om det som ikke skal tøyes." },
        { id: "no-u111l2-astrekke", type: "vocab", front: "å strekke", reading: "astrekke", meaning: "to stretch (make last)", example: { jp: "Vi strekker budsjettet ut året, og da blir det ingenting igjen til neste.", en: "We stretch the budget through the year, and then there is nothing left for the next one." }, accept: ["to extend", "to make last"], drill: { jp: "Vi prøver å strekke tida", en: "We are trying to stretch the time" }, hint: "å strekke → strekker, strakk, har strukket. ⚠ Sterkt verb. Å strekke seg betyr både å tøye kroppen og å gjøre en ekstra innsats: «vi strekker oss langt»." },
        { id: "no-u111l2-avri", type: "vocab", front: "å vri", reading: "avri", meaning: "to twist", example: { jp: "Han vrir på det jeg sa, og det han sitter igjen med er ikke helt galt heller.", en: "He twists what I said, and what he is left with is not entirely wrong either." }, accept: ["to wring", "to distort"], drill: { jp: "Det er lett å vri på et svar", en: "It is easy to twist an answer" }, hint: "å vri → vrir, vred, har vridd. Om ting du snor, og om ord: å vri på noe er å gi det en ny og gjerne uærlig tydning. Substantivet en vri (u104) kommer herfra." },
      ],
    },
    {
      id: "no-u111l3",
      unit: 111,
      lesson: 3,
      title: "Å romme og å spenne over",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how far a claim, a word or a study reaches — and where somebody has drawn its edge.",
      items: [
        { id: "no-u111l3-aromme", type: "vocab", front: "å romme", reading: "aromme", meaning: "to hold (contain)", example: { jp: "Ordet rommer to helt ulike ting, og det er derfor de aldri blir enige om hva de snakker om.", en: "The word holds two completely different things, and that is why they never agree about what they are talking about." }, accept: ["to contain", "to accommodate"], drill: { jp: "Huset klarer å romme alle sammen", en: "The house manages to hold everybody" }, hint: "å romme → rommer, rommet. Fra et rom (u4). Om fysisk plass OG om innhold: en lov kan romme flere tolkninger." },
        { id: "no-u111l3-afavne", type: "vocab", front: "å favne", reading: "afavne", meaning: "to encompass", example: { jp: "Begrepet favner så mye at alle kjenner seg igjen, og så lite at ingen får noe ut av det.", en: "The concept encompasses so much that everybody recognises themselves, and so little that nobody gets anything out of it." }, accept: ["to embrace", "to cover"], drill: { jp: "Ordet klarer å favne begge sider", en: "The word manages to encompass both sides" }, hint: "å favne → favner, favnet. Fra et favntak. ⚠ Alltid positivt ment: å favne bredt er ros. Å romme er nøytralt, å favne er raust." },
        { id: "no-u111l3-aspenne", type: "vocab", front: "å spenne", reading: "aspenne", meaning: "to span (range over)", example: { jp: "Boka spenner over mange år, og den bruker mest plass på de første.", en: "The book spans many years, and it uses most of the space on the first ones." }, accept: ["to stretch over", "to range"], drill: { jp: "Boka prøver å spenne over alt", en: "The book tries to span everything" }, hint: "å spenne → spenner, spente. ⚠ TRE TYDNINGER: å spenne over (dekke et område), å spenne fast (feste), å spenne noen (sparke). Sammenhengen skiller." },
        { id: "no-u111l3-aavgrense", type: "vocab", front: "å avgrense", reading: "aavgrense", meaning: "to delimit", example: { jp: "Hun avgrenser oppgava til et år, og nettopp det gjør at svaret hennes holder.", en: "She limits the assignment to one year, and it is exactly that which makes her answer hold." }, accept: ["to limit", "to define the scope of"], drill: { jp: "Det er viktig å avgrense saka", en: "It is important to delimit the case" }, hint: "å avgrense → avgrenser, avgrenset. Av + ei grense (u22). Å sette KANTEN med vilje. Å begrense (u52) er å gjøre mindre; å avgrense er å si hvor det slutter." },
        { id: "no-u111l3-autgjore", type: "vocab", front: "å utgjøre", reading: "autgjore", meaning: "to constitute (amount to)", example: { jp: "De to tallene utgjør en stor del av budsjettet, og ingen har sett på dem siden de ble lagt inn.", en: "The two figures constitute a large part of the budget, and nobody has looked at them since they were put in." }, accept: ["to make up", "to amount to"], drill: { jp: "Dette begynner å utgjøre et problem", en: "This is beginning to constitute a problem" }, hint: "å utgjøre → utgjør, utgjorde. Ut + å gjøre (u11). Merk ø-folden: lesinga er autgjore. ⚠ Om ANDELER og mengder: «kvinner utgjør førti prosent»." },
        { id: "no-u111l3-abunnei", type: "vocab", front: "å bunne i", reading: "abunnei", meaning: "to stem from", example: { jp: "Uenigheten bunner i to ulike tall, og ingen av dem vil se på tallene sammen.", en: "The disagreement stems from two different figures, and neither of them wants to look at the figures together." }, accept: ["to be rooted in", "to come down to"], drill: { jp: "Alt ser ut til å bunne i penger", en: "Everything seems to stem from money" }, hint: "å bunne i → bunner i, bunnet i. Fra ei bunn. ⚠ Alltid med i, og alltid om ÅRSAKEN under overflaten — ikke om den grunnen folk oppgir." },
      ],
    },
    {
      id: "no-u111l4",
      unit: 111,
      lesson: 4,
      title: "Slitasje og sakte endring",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe damage or change that happens slowly enough that nobody notices it while it is happening.",
      items: [
        { id: "no-u111l4-ataere", type: "vocab", front: "å tære", reading: "ataere", meaning: "to wear away at", example: { jp: "Det å vente tærer på dem, og det koster mer enn selve saka gjør.", en: "Waiting wears away at them, and it costs more than the case itself does." }, accept: ["to eat away", "to erode"], drill: { jp: "Det begynner å tære på henne", en: "It is beginning to wear away at her" }, hint: "å tære → tærer, tærte. Merk æ-folden: lesinga er ataere. ⚠ Nesten alltid med på: å tære PÅ noen eller noe. Om helse, om penger og om tålmodighet." },
        { id: "no-u111l4-asmuldre", type: "vocab", front: "å smuldre", reading: "asmuldre", meaning: "to crumble", example: { jp: "Flertallet smuldrer opp, og på avstand ser alt fremdeles helt.", en: "The majority is crumbling, and at a distance everything still looks whole." }, accept: ["to crumble away", "to disintegrate"], drill: { jp: "Avtalen begynte å smuldre opp", en: "The agreement began to crumble" }, hint: "å smuldre → smuldrer, smuldret. Ofte med opp. ⚠ Å sprekke er plutselig og med lyd; å smuldre er sakte og uten at noen merker det før det er borte." },
        { id: "no-u111l4-agjennomsyre", type: "vocab", front: "å gjennomsyre", reading: "agjennomsyre", meaning: "to permeate", example: { jp: "Stemningen gjennomsyrer hele avdelingen, og ingen klarer å peke på hvor den begynte.", en: "The mood permeates the whole department, and nobody can point to where it started." }, accept: ["to pervade", "to run through"], drill: { jp: "Dette klarer å gjennomsyre hele systemet", en: "This manages to permeate the whole system" }, hint: "å gjennomsyre → gjennomsyrer, gjennomsyret. Gjennom + å syre. Om holdninger og stemninger, aldri om ting. Alltid om noe som er OVERALT, ikke ett sted." },
        { id: "no-u111l4-abikke", type: "vocab", front: "å bikke", reading: "abikke", meaning: "to tip (over a threshold)", example: { jp: "Stemningen bikker den andre veien i løpet av en time, og ingen sier hva som gjorde det.", en: "The mood tips the other way in the course of an hour, and nobody says what did it." }, accept: ["to tilt", "to go past"], drill: { jp: "Saka begynner å bikke den andre veien", en: "The case is beginning to tip the other way" }, hint: "å bikke → bikker, bikket. ⚠ Også om tall og klokka: «det bikket over hundre», «klokka har bikket tolv». Uformelt, men mye brukt i aviser." },
        { id: "no-u111l4-arokke", type: "vocab", front: "å rokke", reading: "arokke", meaning: "to shake (a position)", example: { jp: "Ingenting rokker ved konklusjonen hans, og det er ikke fordi den er så godt begrunnet.", en: "Nothing shakes his conclusion, and it is not because it is so well founded." }, accept: ["to budge", "to unsettle"], drill: { jp: "Ingenting klarer å rokke ved det", en: "Nothing manages to shake it" }, hint: "å rokke → rokker, rokket. ⚠ Nesten alltid med ved, og nesten alltid med ingenting eller ikke foran: å rokke ved noe er å få det til å vakle litt." },
        { id: "no-u111l4-afortoneseg", type: "vocab", front: "å fortone seg", reading: "afortoneseg", meaning: "to appear (seem, from where you stand)", example: { jp: "Saka fortoner seg ulikt for de to, og begge kan ha rett samtidig.", en: "The case appears differently to the two of them, and both can be right at the same time." }, accept: ["to seem", "to come across"], drill: { jp: "Det begynner å fortone seg ulikt", en: "It is beginning to appear differently" }, hint: "å fortone seg → fortoner seg, fortonte seg. Merk ø-folden: lesinga er afortoneseg. ⚠ Alltid med seg. Å virke (u54) er nøytralt; å fortone seg sier at inntrykket avhenger av HVOR DU STÅR." },
      ],
    },
  ],
};
