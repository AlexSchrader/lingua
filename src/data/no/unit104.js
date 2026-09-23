// NO Unit 104 — Medier og fortelling (slot: media-narrative) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot "Media and narrative", retitled. Conventions: unit1.js §1–§9, unit51.js
// B1–B9, unit88.js C1–C7.
//
// ⚠ THE NEWSROOM IS HALF SPENT. u48 and u64 own the media surface (en sjanger,
// en hovedperson, å formidle, en kanal, et program); u55 owns the news (et
// oppslag, ei overskrift, en journalist, en redaktør); u96 owns art criticism
// (å skildre, et virkemiddel, å berøre); u89 owns sourcing (et utdrag,
// en kildekritikk). So this unit takes the layer NONE of them took: how a story
// is BUILT (l1), the moves a writer makes when the material is thin (l2), the
// machine that publishes it (l3), and what happened to all of it online (l4).
//
// ⚠ "LEXEME" MEANS INFLECTION, NOT DERIVATION (CLAUDE.md / RUNBOOK §4, corrected
// on main 2026-09-23, commit 5928ca20). A word DERIVED from a taught one is a
// DIFFERENT lexeme and MAY be carded; only the SAME word in another form is
// blocked. `SAME` (article variant) and `TAKEN` from check-front.mjs are still
// hard blocks; `LEXEME` is advisory. The fronts below were left out on MERIT —
// twenty-four slots, and these lost — or because the learner genuinely already
// owns them; they are NOT blocked by the lexeme rule and a later block may card
// any of them:
// `ei skildring`, `ei overdrivelse`, `ei framheving`, `ei innramming`,
// `ei deling`, `ei moderering`. `en forteller` is the one genuinely weak card of
// the set — the -er agent noun off å fortelle (u17) is so regular that a learner
// who owns the verb owns the noun, which is the actual test.
//
// GENDER: -else is MASCULINE (en gjentakelse, en rettelse), -sjon is MASCULINE
// (en redaksjon, en desinformasjon), -ing is FEMININE (ei vinkling, ei
// pressemelding, ei kringkasting, ei strømming). `en synsvinkel` is masculine
// because en vinkel is. `ei filterboble` is feminine — ei boble.
// FIRST FEMININE is `ei vinkling` (l2) and carries the en-/ei- note.
//
// SCOPE: the frozen base u1–u103 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT104 = {
  id: "no-u104",
  lang: "no",
  title: "Medier og fortelling",
  order: 104,
  stage: "b2",
  lessons: [
    {
      id: "no-u104l1",
      unit: 104,
      lesson: 1,
      title: "Hvordan en historie er bygd",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Take a story apart — name its shape, the point it turns on, and whose eyes you are seeing it through.",
      items: [
        { id: "no-u104l1-etnarrativ", type: "vocab", front: "et narrativ", reading: "etnarrativ", meaning: "narrative (framing story)", example: { jp: "Narrativet er sterkt, og derfor spiller det liten rolle at to av tallene er gale.", en: "The narrative is strong, and therefore it matters little that two of the figures are wrong." }, accept: ["a narrative", "a story (framing)"], drill: { jp: "De bygde et narrativ alle kjente igjen", en: "They built a narrative everybody recognised" }, hint: "et narrativ → narrativet, flertall narrativer. Ikke bare en historie: DEN historien folk allerede tror på, som nye hendelser blir presset inn i." },
        { id: "no-u104l1-etplott", type: "vocab", front: "et plott", reading: "etplott", meaning: "plot", example: { jp: "Plottet henger sammen, men personene gjør ting bare fordi plottet trenger at de gjør dem.", en: "The plot hangs together, but the characters do things only because the plot needs them to." }, accept: ["a plot", "the storyline"], drill: { jp: "Boka har et plott som er tynt", en: "The book has a plot that is thin" }, hint: "et plott → plottet, flertall plott. Rekkefølgen av hendelser slik forfatteren har lagt dem. Ei handling (u48) er hva som skjer; plottet er hvordan det er ordnet." },
        { id: "no-u104l1-etforlop", type: "vocab", front: "et forløp", reading: "etforlop", meaning: "course of events", example: { jp: "Forløpet er klart nok, men ingen av dem som var der kjenner seg igjen i det.", en: "The course of events is clear enough, but none of those who were there recognise it." }, accept: ["a sequence of events", "the course"], drill: { jp: "Avisa satte opp et forløp med tider", en: "The paper set out a course of events with times" }, hint: "et forløp → forløpet, flertall forløp (ubøyd). Merk ø-folden: lesinga er etforlop. For + å løpe: hvordan noe LØP AV. Et plott er laget; et forløp er det som faktisk skjedde." },
        { id: "no-u104l1-eivending", type: "vocab", front: "ei vending", reading: "eivending", meaning: "twist (turn)", example: { jp: "Vendinga kommer sent, og den virker bare fordi vi har sluttet å vente på den.", en: "The twist comes late, and it only works because we have stopped waiting for it." }, accept: ["a turn", "a twist"], drill: { jp: "Filmen fikk ei vending ingen ventet", en: "The film got a twist nobody expected" }, hint: "ei vending → vendinga, flertall vendinger. Hunkjønnsord kan du også skrive en vending / vendingen; -ing er alltid hunkjønn i denne kursen (regel 1). Fra å vende. Brukes også om språk: ei fast vending er et uttrykk." },
        { id: "no-u104l1-ensynsvinkel", type: "vocab", front: "en synsvinkel", reading: "ensynsvinkel", meaning: "point of view", example: { jp: "Synsvinkelen er hennes hele veien, og derfor får vi aldri vite hva han tenkte.", en: "The point of view is hers the whole way, and therefore we never get to know what he was thinking." }, accept: ["a viewpoint", "perspective"], drill: { jp: "Boka holder en synsvinkel hele veien", en: "The book holds one point of view the whole way" }, hint: "en synsvinkel → synsvinkelen, flertall synsvinkler. Merk at -el mister e-en i flertall. Et syn + en vinkel. Hvem vi ser gjennom; et perspektiv (u90) er mer abstrakt." },
        { id: "no-u104l1-enmetafor", type: "vocab", front: "en metafor", reading: "enmetafor", meaning: "metaphor", example: { jp: "Metaforen er god første gang, men han bruker den fire ganger på én side.", en: "The metaphor is good the first time, but he uses it four times on one page." }, accept: ["a metaphor"], drill: { jp: "Han brukte en metafor om huset", en: "He used a metaphor about the house" }, hint: "en metafor → metaforen, flertall metaforer. Du SIER at noe ER noe annet. En sammenligning sier at det LIKNER, og bruker som." },
      ],
    },
    {
      id: "no-u104l2",
      unit: 104,
      lesson: 2,
      title: "Grep og klisjeer",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the move a writer is making — and say when the move is doing the work the material should have done.",
      items: [
        { id: "no-u104l2-eivinkling", type: "vocab", front: "ei vinkling", reading: "eivinkling", meaning: "angle (editorial slant)", example: { jp: "Vinklinga er lovlig, men den gjør at du husker noe helt annet enn det som står der.", en: "The angle is legitimate, but it makes you remember something quite different from what is written there." }, accept: ["a slant", "an angle"], drill: { jp: "Saka fikk ei vinkling ingen ventet", en: "The story got an angle nobody expected" }, hint: "ei vinkling → vinklinga. -ing er hunkjønn. Fra å vinkle. Journalistens valg av hva saka skal HANDLE om. Ikke løgn — men ikke nøytralt heller." },
        { id: "no-u104l2-enklisje", type: "vocab", front: "en klisjé", reading: "enklisje", meaning: "cliché", example: { jp: "Det er en klisjé, og likevel er det den setningen alle husker fra hele talen.", en: "It is a cliché, and yet it is the sentence everybody remembers from the whole speech." }, accept: ["a cliche", "a stock phrase"], drill: { jp: "Det ble en klisjé til slutt", en: "It became a cliché in the end" }, hint: "en klisjé → klisjeen, flertall klisjeer. ⚠ Aksenten faller bort når endinga kommer: klisjé → klisjeen. Et uttrykk som var godt til det ble brukt opp." },
        { id: "no-u104l2-engjentakelse", type: "vocab", front: "en gjentakelse", reading: "engjentakelse", meaning: "repetition", example: { jp: "Gjentakelsen er et valg, ikke en feil, men den virker bare tre ganger og ikke ti.", en: "The repetition is a choice, not a mistake, but it works three times and not ten." }, accept: ["a repeat", "repetition"], drill: { jp: "Talen hadde en gjentakelse på hver side", en: "The speech had a repetition on every page" }, hint: "en gjentakelse → gjentakelsen, flertall gjentakelser. ⚠ -else er ALLTID hankjønn. Gjen + å ta: å ta det opp igjen." },
        { id: "no-u104l2-adramatisere", type: "vocab", front: "å dramatisere", reading: "adramatisere", meaning: "to dramatise", example: { jp: "Avisa dramatiserer det som skjer, og da blir det vanskelig å se hvor stort problemet egentlig er.", en: "The paper dramatises what happens, and then it gets hard to see how big the problem really is." }, accept: ["to sensationalise", "to play up"], drill: { jp: "Det er lett å dramatisere en liten sak", en: "It is easy to dramatise a small story" }, hint: "å dramatisere → dramatiserer, dramatiserte. Å gjøre noe større og farligere enn det er. Å tone ned (u91) er motsatsen." },
        { id: "no-u104l2-envri", type: "vocab", front: "en vri", reading: "envri", meaning: "twist (angle you give something)", example: { jp: "Han fant en vri på en gammel sak, og det er hele grunnen til at den ble lest igjen.", en: "He found a new angle on an old story, and that is the whole reason it got read again." }, accept: ["a new take", "a spin"], drill: { jp: "De trengte en vri på saka", en: "They needed a twist on the story" }, hint: "en vri → vrien, flertall vrier. Fra å vri. Uformelt og mye brukt i redaksjoner: noe nytt å gjøre med et gammelt stoff." },
        { id: "no-u104l2-enoppfolger", type: "vocab", front: "en oppfølger", reading: "enoppfolger", meaning: "sequel", example: { jp: "Oppfølgeren solgte bedre enn den første, og den var likevel dårligere på alle måter.", en: "The sequel sold better than the first one, and it was still worse in every way." }, accept: ["a follow-up", "a sequel"], drill: { jp: "Filmen fikk en oppfølger to år etter", en: "The film got a sequel two years after" }, hint: "en oppfølger → oppfølgeren, flertall oppfølgere. Merk ø-folden: lesinga er enoppfolger. Opp + å følge. Om bøker og filmer; en oppfølging er om saker." },
      ],
    },
    {
      id: "no-u104l3",
      unit: 104,
      lesson: 3,
      title: "Redaksjonen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a story actually reaches print — who decides, who is pushing it, and what happens when it turns out to be wrong.",
      items: [
        { id: "no-u104l3-enredaksjon", type: "vocab", front: "en redaksjon", reading: "enredaksjon", meaning: "editorial team", example: { jp: "Redaksjonen er blitt mindre hvert år, og likevel skal den dekke like mange saker som før.", en: "The editorial team has got smaller every year, and still it is meant to cover as many stories as before." }, accept: ["a newsroom", "the editorial staff"], drill: { jp: "Hun jobber i en redaksjon i Oslo", en: "She works in an editorial team in Oslo" }, hint: "en redaksjon → redaksjonen, flertall redaksjoner. -sjon er hankjønn. Menneskene OG rommet. En redaktør (u55) leder den." },
        { id: "no-u104l3-eipressemelding", type: "vocab", front: "ei pressemelding", reading: "eipressemelding", meaning: "press release", example: { jp: "Pressemeldinga kom klokka fire på fredag, og det er ikke et uhell at den kom nettopp da.", en: "The press release came at four on Friday, and it is not an accident that it came just then." }, accept: ["a press release"], drill: { jp: "De sendte ut ei pressemelding i går", en: "They sent out a press release yesterday" }, hint: "ei pressemelding → pressemeldinga. Presse + ei melding (u20). -ing er hunkjønn. Skrevet av den saka HANDLER om, ikke av avisa." },
        { id: "no-u104l3-enkommentator", type: "vocab", front: "en kommentator", reading: "enkommentator", meaning: "commentator", example: { jp: "En kommentator skal mene noe, og det er nettopp derfor du ikke kan lese henne som en journalist.", en: "A commentator is supposed to have an opinion, and that is exactly why you cannot read her as a reporter." }, accept: ["a columnist", "a pundit"], drill: { jp: "Avisa har en kommentator som skriver godt", en: "The paper has a commentator who writes well" }, hint: "en kommentator → kommentatoren, flertall kommentatorer. -tor-ord er hankjønn og navngir mennesker. Skriver MENINGER; en journalist skal skrive det som skjedde." },
        { id: "no-u104l3-enrettelse", type: "vocab", front: "en rettelse", reading: "enrettelse", meaning: "correction (printed)", example: { jp: "Rettelsen kom langt bak i avisa, mens feilen sto på første side.", en: "The correction came far back in the paper, while the mistake was on the front page." }, accept: ["a correction"], drill: { jp: "Avisa skrev en rettelse dagen etter", en: "The paper wrote a correction the day after" }, hint: "en rettelse → rettelsen, flertall rettelser. -else er hankjønn. Fra å rette (u32). Det avisa SKRIVER for å rette opp; det leseren klager på er en klage." },
        { id: "no-u104l3-etopplag", type: "vocab", front: "et opplag", reading: "etopplag", meaning: "circulation (print run)", example: { jp: "Opplaget blir mindre hvert år, men antallet som leser på nett er større enn det noen gang var på papir.", en: "Circulation gets smaller every year, but the number who read online is bigger than it ever was on paper." }, accept: ["a print run", "circulation"], drill: { jp: "Boka fikk et opplag som var stort", en: "The book got a print run that was big" }, hint: "et opplag → opplaget, flertall opplag (ubøyd). Hvor mange EKSEMPLARER som er trykt. Om bøker betyr det også utgaven: andre opplag." },
        { id: "no-u104l3-eikringkasting", type: "vocab", front: "ei kringkasting", reading: "eikringkasting", meaning: "broadcasting", example: { jp: "Kringkastinga skal nå alle, og det er en dyrere måte å gjøre det på enn alt annet.", en: "Broadcasting is meant to reach everybody, and that is a more expensive way of doing it than anything else." }, accept: ["broadcasting"], drill: { jp: "Staten betaler for ei kringkasting for alle", en: "The state pays for a broadcasting for everybody" }, hint: "ei kringkasting → kringkastinga. Kring (rundt) + å kaste (u44). -ing er hunkjønn. Gammelt og formelt ord — det er K-en i NRK." },
      ],
    },
    {
      id: "no-u104l4",
      unit: 104,
      lesson: 4,
      title: "Det digitale ordskiftet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue about what the net did to public debate — name the thing that is wrong, and say what makes it hard to see from the inside.",
      items: [
        { id: "no-u104l4-endesinformasjon", type: "vocab", front: "en desinformasjon", reading: "endesinformasjon", meaning: "disinformation", example: { jp: "Desinformasjonen virker best når den er nesten sann, for da er den vanskelig å rette.", en: "Disinformation works best when it is almost true, because then it is hard to correct." }, accept: ["disinformation"], drill: { jp: "De fant en desinformasjon på nett", en: "They found a disinformation online" }, hint: "en desinformasjon → desinformasjonen. -sjon er hankjønn. Des- + informasjon: løgn som er LAGET for å virke. Feil noen tror på selv er noe annet." },
        { id: "no-u104l4-eifilterboble", type: "vocab", front: "ei filterboble", reading: "eifilterboble", meaning: "filter bubble", example: { jp: "Ei filterboble er vanskelig å se når du sitter i den, og det er hele problemet.", en: "A filter bubble is hard to see when you are sitting in it, and that is the whole problem." }, accept: ["a filter bubble"], drill: { jp: "Hun kom seg ut av ei filterboble", en: "She got out of a filter bubble" }, hint: "ei filterboble → filterbobla, flertall filterbobler. Et filter + ei boble. Det du får SE; et ekkokammer er hva du får høre tilbake." },
        { id: "no-u104l4-etekkokammer", type: "vocab", front: "et ekkokammer", reading: "etekkokammer", meaning: "echo chamber", example: { jp: "I et ekkokammer får du alltid rett, og det er nettopp derfor du slutter å tåle at du tar feil.", en: "In an echo chamber you are always right, and that is exactly why you stop being able to bear that you are wrong." }, accept: ["an echo chamber"], drill: { jp: "Gruppa ble til et ekkokammer over tid", en: "The group became an echo chamber over time" }, hint: "et ekkokammer → ekkokammeret, flertall ekkokamre. Merk at -er blir -re i flertall: kammer → kamre. Et ekko + et kammer (rom)." },
        { id: "no-u104l4-enabonnent", type: "vocab", front: "en abonnent", reading: "enabonnent", meaning: "subscriber", example: { jp: "En abonnent betaler hver måned, og det er nettopp derfor hele bransjen vil ha flere av dem.", en: "A subscriber pays every month, and that is exactly why the whole trade wants more of them." }, accept: ["a subscriber"], drill: { jp: "Avisa fikk en abonnent hver dag", en: "The paper got a subscriber every day" }, hint: "en abonnent → abonnenten, flertall abonnenter. Mennesket; avtalen heter et abonnement (u84)." },
        { id: "no-u104l4-eistromming", type: "vocab", front: "ei strømming", reading: "eistromming", meaning: "streaming", example: { jp: "Strømminga gjorde alt lettere å få tak i, og samtidig gjorde den alt vanskeligere å eie.", en: "Streaming made everything easier to get hold of, and at the same time made everything harder to own." }, accept: ["streaming"], drill: { jp: "De lever av ei strømming som er billig", en: "They live off a streaming that is cheap" }, hint: "ei strømming → strømminga. Fra å strømme. -ing er hunkjønn. Merk ø-folden: lesinga er eistromming. Det norske ordet; mange sier streaming likevel." },
        { id: "no-u104l4-etklikkagn", type: "vocab", front: "et klikkagn", reading: "etklikkagn", meaning: "clickbait", example: { jp: "Overskrifta er et klikkagn, og saka under den er både god og viktig.", en: "The headline is clickbait, and the story under it is both good and important." }, accept: ["clickbait"], drill: { jp: "Overskrifta var et klikkagn og ingenting mer", en: "The headline was clickbait and nothing more" }, hint: "et klikkagn → klikkagnet. Et klikk + et agn (det du har på kroken). Det norske forsøket på clickbait — du ser begge i bruk." },
      ],
    },
  ],
};
