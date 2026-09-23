// NO Unit 96 — Kunst og kritikk (slot: arts-criticism) — B2
// Block 1 of Norwegian B2. Band constitution: no/unit88.js §C1–C7.
//
// ⚠ SLOT NARROWED TO THE CRITICISM HALF, because the ART half is spent three
// times over: u35 `ei utstilling`, `et dikt`, `et maleri`, `ei fortelling`,
// `ei rolle`, `å male`; u48 `en roman`, `en forfatter`, `en sjanger`, `en scene`,
// `et sitat`, `ei spre`; u64 `en kritiker`, `en anmeldelse`, `en regissør`,
// `en hovedperson`, `ei handling`, `rørende`, `skuffende`. u55 even has
// `å anmelde` — in its police sense.
// So this unit is the CRAFT OF JUDGING a work: how it is built (l1), what it
// means (l2), who says so in public (l3), and the verdict itself (l4).
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
      title: "Verket og formen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a work of art is put together in Norwegian — its build, its composition, its visual idiom and the devices it uses.",
      items: [
        { id: "no-u96l1-eioppbygning", type: "vocab", front: "ei oppbygning", reading: "eioppbygning", meaning: "build (structure of a work)", example: { jp: "Oppbygninga er klar, og den er lik i alle bøkene hans.", en: "The build is clear, and it is the same in all his books." }, accept: ["construction", "how it is built up"], drill: { jp: "Dette har ei oppbygning som virker", en: "This has a build that works" }, hint: "ei oppbygning → oppbygninga. -ing/-ning-ord er hunkjønn; oppbygningen er vanlig i trykk, og begge er tillatt. Opp + å bygge (u46). En struktur (u90) er generell; ei oppbygning er dette verkets egen." },
        { id: "no-u96l1-enkomposisjon", type: "vocab", front: "en komposisjon", reading: "enkomposisjon", meaning: "composition (arrangement)", example: { jp: "Komposisjonen i bildet er rolig, men fargene er det ikke.", en: "The composition in the picture is calm, but the colours are not." }, accept: ["arrangement", "a musical composition"], drill: { jp: "Her er det en komposisjon som holder", en: "Here there is a composition that holds" }, hint: "en komposisjon → komposisjonen, flertall komposisjoner. -sjon-ord er hankjønn. Både et musikkstykke og måten et bilde (u16) er satt sammen på." },
        { id: "no-u96l1-etformsprak", type: "vocab", front: "et formspråk", reading: "etformsprak", meaning: "visual idiom", example: { jp: "Formspråket er enkelt, og det er derfor alle kjenner det igjen.", en: "The visual idiom is simple, and that is why everybody recognises it." }, accept: ["a visual language", "a formal idiom"], drill: { jp: "Hun har et formspråk folk liker", en: "She has a visual idiom people like" }, hint: "et formspråk → formspråket, flertall formspråk. En form (u46) + et språk (u1). Hvordan noe ser ut, uavhengig av hva det handler om." },
        { id: "no-u96l1-enstil", type: "vocab", front: "en stil", reading: "enstil", meaning: "style (manner)", example: { jp: "Stilen hans er lett å kjenne igjen, men vanskelig å like.", en: "His style is easy to recognise, but hard to like." }, accept: ["a manner", "a way of doing it"], drill: { jp: "Han har en stil ingen liker", en: "He has a style nobody likes" }, hint: "en stil → stilen, flertall stiler. ⚠ To liv: måten noe er laget på, og oppgaven du skriver på skolen (u7) — en norskstil." },
        { id: "no-u96l1-etvirkemiddel", type: "vocab", front: "et virkemiddel", reading: "etvirkemiddel", meaning: "device (artistic means)", example: { jp: "Musikk er et virkemiddel, og han bruker det hele tida.", en: "Music is a device, and he uses it all the time." }, accept: ["a means", "a technique", "an effect"], drill: { jp: "Dette er et virkemiddel du kjenner", en: "This is a device you know" }, hint: "et virkemiddel → virkemiddelet, flertall virkemidler. Å virke (u54) + et middel. Alt kunstneren gjør for å oppnå (u60) noe hos deg." },
        { id: "no-u96l1-etmotiv", type: "vocab", front: "et motiv", reading: "etmotiv", meaning: "motif (subject depicted)", example: { jp: "Motivet er det samme i alle bildene, bare med ny farge.", en: "The motif is the same in all the pictures, only in a new colour." }, accept: ["a subject", "a theme", "a motive"], drill: { jp: "Her er det et motiv vi kjenner", en: "Here there is a motif we know" }, hint: "et motiv → motivet, flertall motiver. ⚠ To liv: hva bildet viser, og grunnen (u32) noen gjorde noe — et motiv for handlinga (u64)." },
      ],
    },
    {
      id: "no-u96l2",
      unit: 96,
      lesson: 2,
      title: "Å tolke",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read a work for meaning in Norwegian — offer an interpretation, say what it depicts, spot the symbol and draw the parallel.",
      items: [
        { id: "no-u96l2-eitolkning", type: "vocab", front: "ei tolkning", reading: "eitolkning", meaning: "interpretation (reading)", example: { jp: "Tolkninga hennes er ny, men den passer dårlig med teksten.", en: "Her interpretation is new, but it fits the text badly." }, accept: ["a reading", "a construal"], drill: { jp: "Dette er ei tolkning jeg liker", en: "This is an interpretation I like" }, hint: "ei tolkning → tolkninga. -ing/-ning-ord er hunkjønn; tolkningen er vanlig i trykk. Fra å tolke (u49). Også om musikk: hennes tolkning av stykket." },
        { id: "no-u96l2-askildre", type: "vocab", front: "å skildre", reading: "askildre", meaning: "to depict (portray)", example: { jp: "Boka skildrer en by som ikke finnes lenger.", en: "The book depicts a city that no longer exists." }, accept: ["to portray", "to describe (vividly)"], drill: { jp: "Det er vanskelig å skildre slike steder", en: "It is hard to depict places like that" }, hint: "å skildre → skildrer, skildret. Ei skildring er resultatet. Å beskrive (u49) er saklig (u73); å skildre er å male (u35) med ord." },
        { id: "no-u96l2-etsymbol", type: "vocab", front: "et symbol", reading: "etsymbol", meaning: "symbol", example: { jp: "Fuglen er et symbol, og alle forstod det med en gang.", en: "The bird is a symbol, and everybody understood it immediately." }, accept: ["an emblem", "a sign"], drill: { jp: "Her er det et symbol du kjenner", en: "Here there is a symbol you know" }, hint: "et symbol → symbolet, flertall symbol eller symboler. Trykket på siste stavelse: sym-BOL. Symbolsk er adjektivet." },
        { id: "no-u96l2-enparallell", type: "vocab", front: "en parallell", reading: "enparallell", meaning: "parallel (comparison)", example: { jp: "Det er en parallell til krigen her, men forfatteren nevner den aldri.", en: "There is a parallel to the war here, but the author never mentions it." }, accept: ["a comparison", "an analogy"], drill: { jp: "Her er det en parallell til noe annet", en: "Here there is a parallel to something else" }, hint: "en parallell → parallellen, flertall paralleller. Trykket på siste stavelse: paral-LELL. Å trekke en parallell er å sammenligne (u53) to ting." },
        { id: "no-u96l2-abetrakte", type: "vocab", front: "å betrakte", reading: "abetrakte", meaning: "to contemplate (regard)", example: { jp: "Han betrakter alt på avstand, og det ser du i hver bok.", en: "He regards everything from a distance, and you see it in every book." }, accept: ["to regard", "to view", "to consider"], drill: { jp: "Det er godt å betrakte bilder lenge", en: "It is good to contemplate pictures for a long time" }, hint: "å betrakte → betrakter, betraktet. Å se på (u2) er hverdagslig; å betrakte er å se lenge og tenke samtidig. Ei betraktning er tanken som kommer ut av det." },
        { id: "no-u96l2-estetisk", type: "vocab", front: "estetisk", reading: "estetisk", meaning: "aesthetic", example: { jp: "Dette er estetisk, og ikke noe mer enn det.", en: "This is aesthetic, and nothing more than that." }, accept: ["to do with beauty", "aesthetical"], drill: { jp: "Dette er helt estetisk for meg", en: "This is purely aesthetic for me" }, hint: "estetisk → estetisk, estetiske. Om form og skjønnhet, ikke om innhold (u58). Estetikk er faget." },
      ],
    },
    {
      id: "no-u96l3",
      unit: 96,
      lesson: 3,
      title: "Å anmelde",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a work in public in Norwegian — the critique, the coverage, the performance, the staging, and getting the thing published at all.",
      items: [
        { id: "no-u96l3-enkritikk", type: "vocab", front: "en kritikk", reading: "enkritikk", meaning: "critique (public criticism)", example: { jp: "Kritikken var hard, men boka solgte likevel godt.", en: "The critique was harsh, but the book sold well all the same." }, accept: ["criticism", "a critical review"], drill: { jp: "Boka fikk en kritikk ingen ventet", en: "The book got a critique nobody expected" }, hint: "en kritikk → kritikken, flertall kritikker. ⚠ Tre nære ord: en kritiker (u64) er personen, en anmeldelse (u64) er teksten i avisa, og kritikk er både faget og det du sier." },
        { id: "no-u96l3-enomtale", type: "vocab", front: "en omtale", reading: "enomtale", meaning: "coverage (mention in print)", example: { jp: "Omtalen var kort, men den kom på første side.", en: "The coverage was short, but it came on the front page." }, accept: ["a mention", "a notice", "publicity"], drill: { jp: "Boka fikk en omtale i avisa", en: "The book got a mention in the paper" }, hint: "en omtale → omtalen, flertall omtaler. Om + å tale. Kortere og mildere enn en anmeldelse (u64): en omtale kan være to linjer (u46)." },
        { id: "no-u96l3-eiframforing", type: "vocab", front: "ei framføring", reading: "eiframforing", meaning: "performance (rendition)", example: { jp: "Framføringa var rolig, og kanskje er det derfor den virket.", en: "The performance was calm, and perhaps that is why it worked." }, accept: ["a rendition", "a delivery"], drill: { jp: "Dette var ei framføring folk husker", en: "This was a performance people remember" }, hint: "ei framføring → framføringa. -ing-ord er hunkjønn; framføringen er vanlig i trykk. Merk ø-folden: lesinga er eiframforing. Fram + å føre (u83)." },
        { id: "no-u96l3-eioppsetning", type: "vocab", front: "ei oppsetning", reading: "eioppsetning", meaning: "staging (stage production)", example: { jp: "Oppsetninga er ny, men teksten er over hundre år gammel.", en: "The staging is new, but the text is over a hundred years old." }, accept: ["a production", "a staging"], drill: { jp: "Dette er ei oppsetning alle snakker om", en: "This is a staging everybody is talking about" }, hint: "ei oppsetning → oppsetninga. -ing/-ning-ord er hunkjønn; oppsetningen er vanlig i trykk. Opp + å sette (u77). Én regissørs (u64) versjon av teksten." },
        { id: "no-u96l3-autgi", type: "vocab", front: "å utgi", reading: "autgi", meaning: "to publish", example: { jp: "De utga boka i mai, og angret nesten med en gang.", en: "They published the book in May, and regretted it almost immediately." }, accept: ["to issue", "to bring out"], drill: { jp: "Det er dyrt å utgi ei bok", en: "It is expensive to publish a book" }, hint: "å utgi → utgir, utga. Bøyes som å gi (u1). Ut + å gi. En utgivelse er resultatet; et forlag er huset som gjør det." },
        { id: "no-u96l3-etmesterverk", type: "vocab", front: "et mesterverk", reading: "etmesterverk", meaning: "masterpiece", example: { jp: "Alle kaller det et mesterverk, men svært få har lest det.", en: "Everybody calls it a masterpiece, but very few have read it." }, accept: ["a masterwork"], drill: { jp: "Dette er et mesterverk for mange", en: "This is a masterpiece for many people" }, hint: "et mesterverk → mesterverket, flertall mesterverk. En mester + et verk. Brukes ofte litt spøkefullt (u49): et mesterverk av en middag (u6)." },
      ],
    },
    {
      id: "no-u96l4",
      unit: 96,
      lesson: 4,
      title: "Dommen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Deliver a verdict on a work in Norwegian — say it moved you, say it was trite, and name what kind of writer made it.",
      items: [
        { id: "no-u96l4-gripende", type: "vocab", front: "gripende", reading: "gripende", meaning: "gripping (moving)", example: { jp: "Boka er gripende, men den er også altfor lang og treg.", en: "The book is gripping, but it is also far too long and slow." }, accept: ["touching", "affecting", "powerful"], drill: { jp: "Filmen var gripende hele veien", en: "The film was gripping the whole way" }, hint: "gripende bøyes ikke: -ende-former er like i alle kjønn og tall. Fra å gripe (u60). Rørende (u64) er varmt; gripende er sterkere og kan gjøre vondt." },
        { id: "no-u96l4-banal", type: "vocab", front: "banal", reading: "banal", meaning: "banal (trite)", example: { jp: "Teksten er banal, og det er ikke noe galt med det.", en: "The text is banal, and there is nothing wrong with that." }, accept: ["trite", "hackneyed", "obvious"], drill: { jp: "Denne filmen er ganske banal", en: "This film is quite banal" }, hint: "banal → banalt, banale. Trykket på siste stavelse: ba-NAL. Sagt om noe som er sant, men som alle har sagt før." },
        { id: "no-u96l4-aberore", type: "vocab", front: "å berøre", reading: "aberore", meaning: "to move (touch emotionally)", example: { jp: "Boka berørte meg mer enn jeg ville innrømme.", en: "The book moved me more than I was willing to admit." }, accept: ["to touch", "to affect"], drill: { jp: "Det er vanskelig å berøre noen", en: "It is hard to move somebody" }, hint: "å berøre → berører, berørte. Merk ø-folden: lesinga er aberore. Både fysisk og om følelser (u22). Å berøre et tema er å nevne (u33) det kort." },
        { id: "no-u96l4-original", type: "vocab", front: "original", reading: "original", meaning: "original (not derivative)", example: { jp: "Ideen er original, men boka er ikke god.", en: "The idea is original, but the book is not good." }, accept: ["novel", "inventive"], drill: { jp: "Dette er helt original kunst", en: "This is entirely original art" }, hint: "original → originalt, originale. Trykket på siste stavelse: origi-NAL. ⚠ To liv: ny og egen (om kunst), og ekte (originalen henger i Oslo)." },
        { id: "no-u96l4-ennovelle", type: "vocab", front: "en novelle", reading: "ennovelle", meaning: "short story", example: { jp: "Novellen er på seks sider, og alt i den er nødvendig.", en: "The short story is six pages long, and everything in it is necessary." }, accept: ["a short story"], drill: { jp: "Han skrev en novelle om faren sin", en: "He wrote a short story about his father" }, hint: "en novelle → novellen, flertall noveller. ⚠ Falsk venn: engelsk «novel» heter roman (u48) på norsk. En novelle er kort." },
        { id: "no-u96l4-enpoet", type: "vocab", front: "en poet", reading: "enpoet", meaning: "poet", example: { jp: "Poeten leste selv, og alle hørte etter.", en: "The poet read the work herself, and everybody listened." }, accept: ["a lyric poet"], drill: { jp: "Hun er en poet folk leser", en: "She is a poet people read" }, hint: "en poet → poeten, flertall poeter. Trykket på siste stavelse: po-ET. En dikter er det vanlige norske ordet; poet er litt høytidelig." },
      ],
    },
  ],
};
