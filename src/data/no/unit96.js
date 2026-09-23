// NO Unit 96 — Kunst og kritikk (slot: arts-criticism) — B2
// Retitled from the scaffold's English placeholder "Arts and criticism".
// B2 band conventions live in no/unit88.js's header; language-wide in unit1.js.
//
// u48 (Kultur og medier) and u64 (Medier og underholdning 2) own the NOUNS of
// this field already — en sjanger, en forfatter, et sitat, en scene, et opptak,
// et intervju, en anmeldelse, en kritiker — and u35 owns ei utstilling and en
// kunstner, u44 et publikum. Measured while drafting: 11 of 40 first-draft
// candidates were already taught.
//
// So this unit is the JUDGEMENT half, which nothing in the corpus carries: the
// words for saying what a work does and whether it works. A learner who can
// name a genre and cannot say gripende, banal, treffende or vellykket can
// describe Norwegian culture but cannot take part in talking about it.
//
// ⚠️ en anmeldelse (u64l4) and en kritiker (u64l4) are taught; en anmelder and
// en kritikk here are the sibling forms, which is the u71l2 nominalisation
// pattern, not a duplicate. The glosses keep the pair apart: en kritiker is the
// standing job, en anmelder is whoever wrote this particular piece.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT96 = {
  id: "no-u96",
  lang: "no",
  title: "Kunst og kritikk",
  order: 96,
  stage: "b2",
  lessons: [
    {
      id: "no-u96l1",
      unit: 96,
      lesson: 1,
      title: "Verk og virkemiddel",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a work is made, not just what it is about — the devices used and the images it leans on.",
      items: [
        { id: "no-u96l1-etverk", type: "vocab", front: "et verk", reading: "etverk", meaning: "a work (one made thing, in art or scholarship)", example: { jp: "Et verk betyr ikke det samme for to personer, og det er ikke en feil ved verket.", en: "A work does not mean the same thing to two people, and that is not a fault in the work." }, accept: ["a piece of work", "a created work"], drill: { jp: "Dette er et verk vi kjenner", en: "This is a work we know" }, hint: "et verk → verket, flertall verk (likt i flertall). Et kunstverk (u35) er kunst; et verk kan også være ei bok eller forskning." },
        { id: "no-u96l1-etvirkemiddel", type: "vocab", front: "et virkemiddel", reading: "etvirkemiddel", meaning: "device (a technique used to produce an effect)", example: { jp: "Et stille rom er et virkemiddel, og den som bruker det godt sier mer enn andre.", en: "A quiet room is a device, and whoever uses it well says more than others." }, accept: ["an artistic technique", "a means of effect"], drill: { jp: "Dette er et virkemiddel hun bruker", en: "This is a device she uses" }, hint: "et virkemiddel → virkemiddelet, flertall virkemidler. Å virke (u54) + et middel. Farge, lys, stillhet, gjentaking — alt er virkemidler." },
        { id: "no-u96l1-enmetafor", type: "vocab", front: "en metafor", reading: "enmetafor", meaning: "metaphor (calling one thing another to show what it is like)", example: { jp: "Hele boka hviler på en metafor, og leser du den helt likt, blir alt feil.", en: "The whole book rests on a metaphor, and if you read it literally everything comes out wrong." }, accept: ["a figure of speech", "an implied comparison"], drill: { jp: "Her er en metafor vi liker", en: "Here is a metaphor we like" }, hint: "en metafor → metaforen, flertall metaforer. Trykk på siste stavelse: metaFOR. En metafor SIER at noe ER noe annet, uten som." },
        { id: "no-u96l1-eiskildring", type: "vocab", front: "ei skildring", reading: "eiskildring", meaning: "portrayal (a written picture of a person or place)", example: { jp: "Ei god skildring gjør at du ser stedet uten at hun sier hvordan det ser ut.", en: "A good portrayal makes you see the place without her saying what it looks like." }, accept: ["a depiction", "a written picture"], drill: { jp: "Dette er ei skildring vi husker", en: "This is a portrayal we remember" }, hint: "ei skildring → skildringa, flertall skildringer. -ing er hunkjønn (unit88 regel B3). Å skildre er verbet. Ei framstilling (u89) kan være tørr; ei skildring vil at du skal SE." },
        { id: "no-u96l1-etbildepa", type: "vocab", front: "et bilde på", reading: "etbildepa", meaning: "an image for (a concrete thing standing in for an idea)", example: { jp: "Vinteren er et bilde på noe helt annet i denne boka, og alle forstår det.", en: "The winter is an image for something completely different in this book, and everybody understands it." }, accept: ["a symbol for", "a standing-in for"], drill: { jp: "Dette er et bilde på noe større", en: "This is an image for something larger" }, hint: "Fast uttrykk, et bilde (u20) + på. ⚠️ Preposisjonen hører til: et bilde PÅ noe, ikke av noe. Enklere ord enn en metafor, samme idé." },
        { id: "no-u96l1-enestetikk", type: "vocab", front: "en estetikk", reading: "enestetikk", meaning: "aesthetic (the look and feel a work commits to)", example: { jp: "De har en estetikk som er lett å kjenne igjen, og det er både godt og vondt.", en: "They have an aesthetic that is easy to recognise, and that is both a good and a bad thing." }, accept: ["a visual style", "a sense of form"], drill: { jp: "Filmen har en estetikk vi liker", en: "The film has an aesthetic we like" }, hint: "en estetikk → estetikken. -ikk er hankjønn (unit88 regel B3). Et formspråk (l4) er hvordan det er BYGD; en estetikk er hva det vil at du skal føle." },
      ],
    },
    {
      id: "no-u96l2",
      unit: 96,
      lesson: 2,
      title: "Å anmelde",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read a Norwegian review and know how hard it lands — praise, a hit, a cliché, or a demolition.",
      items: [
        { id: "no-u96l2-enanmelder", type: "vocab", front: "en anmelder", reading: "enanmelder", meaning: "reviewer (whoever wrote this particular piece)", example: { jp: "En anmelder skriver for dem som ikke har sett det ennå, og det glemmer mange.", en: "A reviewer writes for those who have not seen it yet, and many forget that." }, accept: ["somebody who reviews", "the writer of a review"], drill: { jp: "Hun er en anmelder i avisa", en: "She is a reviewer at the newspaper" }, hint: "en anmelder → anmelderen, flertall anmeldere. Fra en anmeldelse (u64). En kritiker (u64) er en fast rolle; en anmelder er den som skrev nettopp dette." },
        { id: "no-u96l2-enkritikk", type: "vocab", front: "en kritikk", reading: "enkritikk", meaning: "critique (a reasoned judgement of a work)", example: { jp: "En kritikk er ikke en tanke, den skal vise hvorfor, og den skal tåle uenighet.", en: "A critique is not just a thought, it has to show why, and it has to stand up to disagreement." }, accept: ["a critical appraisal", "reasoned judgement"], drill: { jp: "Dette er en kritikk vi tar", en: "This is a critique we accept" }, hint: "en kritikk → kritikken, flertall kritikker. -ikk er hankjønn (unit88 regel B3). En kildekritikk (u89) veier en kilde; en kritikk veier et verk." },
        { id: "no-u96l2-rosende", type: "vocab", front: "rosende", reading: "rosende", meaning: "full of praise (of a review that comes out clearly in favour)", example: { jp: "Avisa var rosende, men de som hadde sett det selv var ikke like enige.", en: "The newspaper was full of praise, but those who had seen it themselves did not agree as much." }, accept: ["praising", "warmly positive"], drill: { jp: "Kritikken var rosende i går", en: "The critique was full of praise yesterday" }, hint: "Fra å rose (u49). Bøyes ikke, som overbevisende (u88) og gripende (l3). Rosende omtale er et fast uttrykk." },
        { id: "no-u96l2-aslakte", type: "vocab", front: "å slakte", reading: "aslakte", meaning: "to pan (review something so harshly nothing is left)", example: { jp: "De slaktet filmen i alle aviser, og nå er den kult å like.", en: "They panned the film in every newspaper, and now it is cool to like it." }, accept: ["to savage in a review", "to tear apart"], drill: { jp: "Det er lett å slakte noe nytt", en: "It is easy to pan something new" }, hint: "å slakte → slakter, slaktet. Egentlig om dyr. ⚠️ Sterkt ord, og brukes bare om VERK, aldri om en person direkte." },
        { id: "no-u96l2-treffende", type: "vocab", front: "treffende", reading: "treffende", meaning: "apt (it hits exactly the thing it aims at)", example: { jp: "Det var en treffende setning, og den er sitert av alle siden.", en: "That was an apt sentence, and it has been quoted by everybody since." }, accept: ["spot on", "aptly put"], drill: { jp: "Det var et treffende ord", en: "That was an apt word" }, hint: "Fra å treffe (u21). Bøyes ikke. Nøyaktig (u91) er om TALL; treffende er om ord som tar tingen på kornet." },
        { id: "no-u96l2-banal", type: "vocab", front: "banal", reading: "banal", meaning: "banal (so obvious it says nothing)", example: { jp: "Det er ikke feil, det er bare banal, og det er verre for et verk.", en: "It is not wrong, it is just banal, and that is worse for a work." }, accept: ["trite", "obvious to the point of empty"], drill: { jp: "Boka var litt banal", en: "The book was a bit banal" }, hint: "Bøyes banal, banalt, banale. ⚠️ Banal er ikke det samme som lett — noe kan være enkelt og godt. Banal er sant og verdiløst." },
      ],
    },
    {
      id: "no-u96l3",
      unit: 96,
      lesson: 3,
      title: "Hva kunsten gjør med deg",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what a work did to you — whether it moved you, left you thinking, and whether it came off at all.",
      items: [
        { id: "no-u96l3-gripende", type: "vocab", front: "gripende", reading: "gripende", meaning: "moving (it takes hold of you emotionally)", example: { jp: "Det var gripende uten å ville det, og det er den vanskelige måten.", en: "It was moving without trying to be, and that is the hard way to do it." }, accept: ["affecting", "emotionally gripping"], drill: { jp: "Filmen var gripende i går", en: "The film was moving yesterday" }, hint: "Fra å gripe. Bøyes ikke. ⚠️ Gripende er alltid positivt i norsk — et gripende verk har fortjent det, det har ikke bare gjort deg lei deg." },
        { id: "no-u96l3-aberore", type: "vocab", front: "å berøre", reading: "aberore", meaning: "to touch somebody (reach them under the surface)", example: { jp: "Ei bok kan berøre deg uten at du klarer å si hvorfor etterpå.", en: "A book can touch you without your being able to say why afterwards." }, accept: ["to move inwardly", "to affect deeply"], drill: { jp: "Det er sjelden å berøre noen slik", en: "It is rare to touch somebody like that" }, hint: "å berøre → berører, berørte. Be- + å røre. ⚠️ To betydninger: å ta fysisk på noe, OG å nå noen innvendig. ø folder til o." },
        { id: "no-u96l3-ettertenksom", type: "vocab", front: "ettertenksom", reading: "ettertenksom", meaning: "pensive (left quietly thinking afterwards)", example: { jp: "Hun ble ettertenksom av det, og det sier mer enn om hun hadde ropt.", en: "She was left pensive by it, and that says more than if she had shouted." }, accept: ["thoughtful and quiet", "left reflecting"], drill: { jp: "Hun ble ettertenksom etterpå", en: "She became pensive afterwards" }, hint: "Etter + å tenke + -som. Bøyes ettertenksom, ettertenksomt, ettertenksomme. Om PERSONEN, ikke om verket." },
        { id: "no-u96l3-original", type: "vocab", front: "original", reading: "original", meaning: "original (not made from anybody else's pattern)", example: { jp: "Det er lett å si at noe er originalt, og vanskelig å vise hva det ikke er tatt fra.", en: "It is easy to say that something is original, and hard to show what it was not taken from." }, accept: ["novel in its own right", "not derivative"], drill: { jp: "Denne boka er original nok", en: "This book is original enough" }, hint: "Bøyes original, originalt, originale. Ei nyvinning (u94) er ny for VERDEN; original er at det ikke er tatt fra noen." },
        { id: "no-u96l3-vellykket", type: "vocab", front: "vellykket", reading: "vellykket", meaning: "successful (it did the thing it set out to do)", example: { jp: "Et vellykket verk trenger ikke være stort, det må bare gjøre det det ville.", en: "A successful work does not have to be big, it only has to do what it set out to do." }, accept: ["it came off", "achieved what it aimed at"], drill: { jp: "Møtet var vellykket til slutt", en: "The meeting was successful in the end" }, hint: "Vel + å lykkes. Bøyes vellykket, vellykkede. Brukes om verk, om et møte og om en kveld." },
        { id: "no-u96l3-mislykket", type: "vocab", front: "mislykket", reading: "mislykket", meaning: "unsuccessful (it tried something and did not manage it)", example: { jp: "Et mislykket forsøk betyr mer enn et som aldri ble gjort.", en: "An unsuccessful attempt means more than one that was never made." }, accept: ["it did not come off", "failed in the attempt"], drill: { jp: "Forsøket var mislykket den gangen", en: "The attempt was unsuccessful that time" }, hint: "Mis- + å lykkes, motsatt av vellykket. ⚠️ Mislykket sier at noe ble PRØVD. Banal (l2) sier at det ikke engang ble forsøkt." },
      ],
    },
    {
      id: "no-u96l4",
      unit: 96,
      lesson: 4,
      title: "Å vise fram",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about putting work in front of people — the performance, the room, how it was received, and how the thing itself is put together.",
      items: [
        { id: "no-u96l4-eiframforing", type: "vocab", front: "ei framføring", reading: "eiframforing", meaning: "performance (one live rendering of a work)", example: { jp: "Ei framføring er aldri lik to ganger, og derfor kommer folk igjen.", en: "A performance is never the same twice, and that is why people come back." }, accept: ["a rendition", "a live presentation"], drill: { jp: "Dette var ei framføring vi husker", en: "This was a performance we remember" }, hint: "ei framføring → framføringa, flertall framføringer. -ing er hunkjønn (unit88 regel B3). Å framføre er verbet. ø folder til o." },
        { id: "no-u96l4-astilleut", type: "vocab", front: "å stille ut", reading: "astilleut", meaning: "to exhibit (put work up for people to come and see)", example: { jp: "Hun fikk stille ut for første gang i sommer, og siden har hun ikke stoppet.", en: "She got to exhibit for the first time in the summer, and since then she has not stopped." }, accept: ["to put on show", "to display publicly"], drill: { jp: "De pleier å stille ut om våren", en: "They usually exhibit in the spring" }, hint: "Å stille + ut. Ei utstilling (u35) er resultatet. ⚠️ Partikkelen bærer betydninga: å stille alene er noe helt annet." },
        { id: "no-u96l4-etutstillingslokale", type: "vocab", front: "et utstillingslokale", reading: "etutstillingslokale", meaning: "exhibition space (the room a show is held in)", example: { jp: "Et godt utstillingslokale ser du ikke, og det er nettopp hensikten.", en: "A good exhibition space you do not see, and that is exactly the intention." }, accept: ["a gallery room", "a show venue"], drill: { jp: "Byen fikk et utstillingslokale i år", en: "The town got an exhibition space this year" }, hint: "et utstillingslokale → utstillingslokalet. Ei utstilling (u35) + et lokale. Et museum (fritt ord) eier samlinga; et lokale er bare rommet." },
        { id: "no-u96l4-eimottaking", type: "vocab", front: "ei mottaking", reading: "eimottaking", meaning: "reception (how the public and press took it)", example: { jp: "Mottakinga var kald, men boka selger fortsatt ti år etter.", en: "The reception was cold, but the book is still selling ten years later." }, accept: ["how it was received", "public response"], drill: { jp: "Dette var ei mottaking vi husker", en: "This was a reception we remember" }, hint: "ei mottaking → mottakinga. -ing er hunkjønn (unit88 regel B3). Å motta (u72) + -ing. Om et VERK; om en person heter det en mottakelse." },
        { id: "no-u96l4-enkomposisjon", type: "vocab", front: "en komposisjon", reading: "enkomposisjon", meaning: "composition (how the parts are placed within the whole)", example: { jp: "Komposisjonen gjør at øyet går der hun vil, uten at du ser det.", en: "The composition makes the eye go where she wants, without your seeing it." }, accept: ["the arrangement within a work", "how it is laid out"], drill: { jp: "Dette er en komposisjon vi liker", en: "This is a composition we like" }, hint: "en komposisjon → komposisjonen, flertall komposisjoner. -sjon er hankjønn (unit88 regel B3). Om bilde, foto og musikk. En struktur (u90) er om systemer." },
        { id: "no-u96l4-etformsprak", type: "vocab", front: "et formspråk", reading: "etformsprak", meaning: "formal language of a work (the vocabulary of shapes it uses)", example: { jp: "De har et formspråk som går igjen, og du kjenner det med en gang.", en: "They have a formal language that recurs, and you recognise it immediately." }, accept: ["a visual vocabulary", "a language of form"], drill: { jp: "Huset har et formspråk vi kjenner", en: "The building has a formal language we know" }, hint: "et formspråk → formspråket. Ei form + et språk (u1). Mye brukt om arkitektur og design. En estetikk (l1) er følelsen; formspråket er delene." },
      ],
    },
  ],
};
