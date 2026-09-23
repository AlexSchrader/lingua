// NO Unit 109 — Stil 3: målform, dialekt og tiltale (slot: register-3) — B2
// ─────────────────────────────────────────────────────────────────────────────
// 🚨 THIS SLOT WAS MIS-SCAFFOLDED AND HAS BEEN RETHEMED. The scaffold read
// "Register 3 — 敬語: humble and honorific". 敬語 is the JAPANESE honorific
// system, and NORWEGIAN HAS NO SUCH SYSTEM: there is no humble register, no
// subject-honorific verb set, nothing that agrees with the listener's rank.
// Per CLAUDE.md → "No front language", the scaffold's English slot titles are
// placeholders naming a SLOT, not a theme, and retheming one is ordinary
// authoring. unit88.js C6 flagged this slot for exactly this reason and left
// the choice to this block. Recorded so nobody re-derives it.
//
// WHAT WAS CHOSEN, AND WHY. The slot is "register 3", and Norwegian's register
// axis is real but runs along a different line from Japanese's. It is not
// politeness — it is WHICH NORWEGIAN. A learner who can only produce textbook
// bokmål is still unable to read a nynorsk exam paper, follow a colleague from
// Bergen, or judge whether `De` is charming or absurd. That is this unit:
//   l1  the two written standards, which is a live political question here.
//   l2  dialect and speech, which Norway tolerates further than almost anywhere.
//   l3  how you address somebody — including the ONE honorific Norwegian had,
//       `De`, and the fact that it is dead. This is the honest, non-imported
//       answer to the slot the scaffold asked for.
//   l4  the words that give your register away.
//
// ⚠ u72 "Stil 1" already owns the politeness layer — formell, uformell, høflig,
// uhøflig, å anmode, å be om, å opplyse, å informere, en henvendelse — and u73
// "Stil 2" owns softening. Neither is re-taught. Measured TAKEN before
// authoring: `en tittel` u35, `en uttale` (← å uttale u49), `å tiltale`
// (← en tiltale u92 — so this unit teaches `å titulere` instead).
//
// GENDER: -else is MASCULINE (en forkortelse), -het is MASCULINE (en
// fortrolighet), -ing is FEMININE (ei rettskriving, ei jamstilling), and -form
// compounds are FEMININE in this course (ei målform, ei tiltaleform, ei
// høflighetsform) even though u46 teaches the simplex as `en form` — both are
// allowed in bokmål and the feminine is what Norwegians say for these three.
// FIRST FEMININE is `ei målform` (l1) and carries the en-/ei- note.
//
// SCOPE: the frozen base u1–u108 plus this unit's own earlier cards.
// FREE: bokmål | nynorsk, Bergen, Oslo, Norge, norsk
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT109 = {
  id: "no-u109",
  lang: "no",
  title: "Stil 3: målform, dialekt og tiltale",
  order: 109,
  stage: "b2",
  lessons: [
    {
      id: "no-u109l1",
      unit: 109,
      lesson: 1,
      title: "De to målformene",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Explain why Norwegian is written in two ways — and argue about it the way Norwegians actually do.",
      items: [
        { id: "no-u109l1-eimalform", type: "vocab", front: "ei målform", reading: "eimalform", meaning: "written standard (of Norwegian)", example: { jp: "Ei målform er ikke et språk, men mange skriver om den som om den var det.", en: "A written standard is not a language, but many people write about it as if it were." }, accept: ["a written norm", "a language form"], drill: { jp: "Norge har ei målform til", en: "Norway has one more written standard" }, hint: "ei målform → målforma, flertall målformer. Hunkjønnsord kan du også skrive en målform / målformen; -form-ord er hunkjønn i denne kursen (u46 lærte en form alene). Et mål (u44) betyr her SPRÅK — en gammel tydning som lever videre i disse ordene." },
        { id: "no-u109l1-bokmal", type: "vocab", front: "bokmål", reading: "bokmal", meaning: "Bokmål (the majority written standard)", example: { jp: "Nesten ni av ti skriver bokmål, og likevel har den andre målforma like sterkt vern i loven.", en: "Almost nine out of ten write Bokmål, and still the other standard has just as strong protection in law." }, accept: ["Bokmal"], drill: { jp: "Han skriver bokmål på jobben", en: "He writes Bokmål at work" }, hint: "bokmål, uten artikkel. Ei bok (u18) + mål (språk). Merk å-folden: lesinga er bokmal. Bygd på dansk skriftspråk og østnorsk tale. Denne kursen er skrevet på bokmål." },
        { id: "no-u109l1-nynorsk", type: "vocab", front: "nynorsk", reading: "nynorsk", meaning: "Nynorsk (the minority written standard)", example: { jp: "Nynorsk er bygd på dialektene, og det er nettopp derfor noen mener den er mer norsk enn bokmål.", en: "Nynorsk is built on the dialects, and that is exactly why some people think it is more Norwegian than Bokmål." }, accept: ["New Norwegian"], drill: { jp: "Hun skriver nynorsk hver dag", en: "She writes Nynorsk every day" }, hint: "nynorsk, uten artikkel. Ny (u10) + norsk. Laget på 1800-tallet av dialektene, ikke av dansk. Rundt ti av hundre bruker den, og de fleste av dem bor på Vestlandet." },
        { id: "no-u109l1-etsidemal", type: "vocab", front: "et sidemål", reading: "etsidemal", meaning: "second written standard (at school)", example: { jp: "Et sidemål er den målforma du ikke skriver selv, og de fleste elever liker den dårlig.", en: "A second standard is the written norm you do not write yourself, and most pupils dislike it." }, accept: ["the other standard", "secondary form"], drill: { jp: "Alle elever har et sidemål", en: "All pupils have a second written standard" }, hint: "et sidemål → sidemålet. Ei side (u33) + mål. Merk å-folden: lesinga er etsidemal. Den andre er hovedmålet ditt. Sidemålsundervisning er et av de sikreste temaene å starte en krangel om i Norge." },
        { id: "no-u109l1-eirettskriving", type: "vocab", front: "ei rettskriving", reading: "eirettskriving", meaning: "orthography (spelling norm)", example: { jp: "Rettskrivinga ble forandret for mange år siden, og mange skriver fremdeles slik de lærte det før.", en: "The spelling norm was changed many years ago, and many people still write the way they learnt it before." }, accept: ["spelling rules", "orthography"], drill: { jp: "Skolen følger ei rettskriving som er ny", en: "The school follows a spelling norm that is new" }, hint: "ei rettskriving → rettskrivinga. -ing er hunkjønn. Rett (u32) + å skrive. Skrives også rettskrivning. Reglene for hvordan orda SKAL staves — ikke hvordan de uttales." },
        { id: "no-u109l1-eijamstilling", type: "vocab", front: "ei jamstilling", reading: "eijamstilling", meaning: "equal official status", example: { jp: "Jamstillinga står i loven fra 1885, men på papiret og i praksis er ikke det samme.", en: "The equal status has been in law since 1885, but on paper and in practice are not the same thing." }, accept: ["parity", "equal standing"], drill: { jp: "Loven ga ei jamstilling mellom dem", en: "The law gave an equal status between them" }, hint: "ei jamstilling → jamstillinga. Jam (jevn) + å stille. Skrives også jamstelling eller likestilling — men likestilling betyr oftest noe annet i dag, nemlig mellom kjønn." },
      ],
    },
    {
      id: "no-u109l2",
      unit: 109,
      lesson: 2,
      title: "Dialekt og talemål",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how somebody speaks rather than what they say — and explain why Norwegians do not switch to a standard the way most Europeans do.",
      items: [
        { id: "no-u109l2-endialekt", type: "vocab", front: "en dialekt", reading: "endialekt", meaning: "dialect", example: { jp: "Hun snakker dialekt på jobben, og det er helt vanlig her, men uvanlig i de fleste andre land.", en: "She speaks dialect at work, and that is completely normal here, but unusual in most other countries." }, accept: ["a dialect"], drill: { jp: "Han har en dialekt fra Bergen", en: "He has a dialect from Bergen" }, hint: "en dialekt → dialekten, flertall dialekter. ⚠ I Norge er det INGEN standard tale å bytte til: du bruker dialekten din i retten, på tv og i klasserommet." },
        { id: "no-u109l2-ettalemal", type: "vocab", front: "et talemål", reading: "ettalemal", meaning: "spoken language", example: { jp: "Talemålet her har forandret seg mer på ti år enn det skrevne språket har gjort på lang tid.", en: "The spoken language here has changed more in ten years than the written language has in a long time." }, accept: ["speech", "the spoken form"], drill: { jp: "Vi har et talemål som forandrer seg", en: "We have a spoken language that changes" }, hint: "et talemål → talemålet. Å tale (u49) + mål. Merk å-folden: lesinga er ettalemal. Alle dialektene til sammen, som system; en dialekt er den ene." },
        { id: "no-u109l2-ettonefall", type: "vocab", front: "et tonefall", reading: "ettonefall", meaning: "intonation", example: { jp: "Tonefallet viser hvor du kommer fra, lenge før noen hører hva du sier.", en: "Intonation shows where you come from, long before anybody hears what you say." }, accept: ["accent (melody)", "the tune of speech"], drill: { jp: "Hun har et tonefall fra nord", en: "She has an intonation from the north" }, hint: "et tonefall → tonefallet. En tone + et fall. MELODIEN i språket. Norsk har to ordtoner, og de skiller ord fra hverandre: bønder og bønner." },
        { id: "no-u109l2-etbygdemal", type: "vocab", front: "et bygdemål", reading: "etbygdemal", meaning: "rural dialect", example: { jp: "Bygdemålet har ord byen aldri har hatt bruk for, og det er nettopp dem som forsvinner først.", en: "The rural dialect has words the town never had any use for, and it is exactly those that disappear first." }, accept: ["country dialect", "village speech"], drill: { jp: "Hun lærte et bygdemål som barn", en: "She learnt a rural dialect as a child" }, hint: "et bygdemål → bygdemålet. Ei bygd (u45) + mål. Motstykket er bymål. ⚠ Ordet er ikke negativt i norsk — det er ofte det motsatte." },
        { id: "no-u109l2-aleggeom", type: "vocab", front: "å legge om", reading: "aleggeom", meaning: "to switch (one's speech)", example: { jp: "Han legger om når han er i byen, og han sier selv at han ikke merker det.", en: "He switches how he speaks when he is in town, and he says himself that he does not notice it." }, accept: ["to change over", "to adapt one's speech"], drill: { jp: "Det er vanskelig å legge om dialekten", en: "It is hard to switch dialect" }, hint: "å legge om → legger om, la om. Å legge (u77) + om, som partikkelverb: en ny tydning, ikke bare å legge noe. ⚠ I norsk er det å legge om ofte litt pinlig — du blir mistenkt for å skjule hvor du er fra." },
        { id: "no-u109l2-etdialektord", type: "vocab", front: "et dialektord", reading: "etdialektord", meaning: "dialect word", example: { jp: "Hun bruker et dialektord i hver setning, og ingen i rommet spør hva det betyr.", en: "She uses a dialect word in every sentence, and nobody in the room asks what it means." }, accept: ["a local word"], drill: { jp: "Han lærte meg et dialektord i dag", en: "He taught me a dialect word today" }, hint: "et dialektord → dialektordet, flertall dialektord (ubøyd). En dialekt + et ord (u18). Mange av dem står i ordboka, med merket dialektalt." },
      ],
    },
    {
      id: "no-u109l3",
      unit: 109,
      lesson: 3,
      title: "Hvordan du tiltaler folk",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Address somebody correctly in Norwegian — which mostly means knowing which polite forms are dead, and saying du to everybody.",
      items: [
        { id: "no-u109l3-eitiltaleform", type: "vocab", front: "ei tiltaleform", reading: "eitiltaleform", meaning: "form of address", example: { jp: "Tiltaleforma er den samme til alle her, og folk fra andre land tror ofte det er uhøflig.", en: "The form of address is the same to everybody here, and people from other countries often think it is impolite." }, accept: ["a way of addressing somebody"], drill: { jp: "Norsk har ei tiltaleform til alle", en: "Norwegian has one form of address for everybody" }, hint: "ei tiltaleform → tiltaleforma. En tiltale (u92) + form. ⚠ Norsk har ÉN: du. Ikke noe system som endrer verbet etter hvem du snakker med." },
        { id: "no-u109l3-eihoflighetsform", type: "vocab", front: "ei høflighetsform", reading: "eihoflighetsform", meaning: "polite form (of address)", example: { jp: "Høflighetsforma De finnes fremdeles i gamle brev, men bruker du den i dag blir folk bare usikre.", en: "The polite form De still exists in old letters, but if you use it today people just get uncertain." }, accept: ["an honorific form", "polite address"], drill: { jp: "Ingen bruker ei høflighetsform her", en: "Nobody uses a polite form here" }, hint: "ei høflighetsform → høflighetsforma. Høflig (u72) + het + form. Merk ø-folden: lesinga er eihoflighetsform. ⚠ DEN NORSKE HØFLIGHETSFORMA ER DØD: De/Dem/Deres gikk ut på 1970-tallet og virker i dag enten gammeldags eller ironisk." },
        { id: "no-u109l3-avaeredus", type: "vocab", front: "å være dus", reading: "avaeredus", meaning: "to be on first-name terms", example: { jp: "Vi er dus fra første møte, og sjefen heter det samme som alle andre.", en: "We are on first-name terms from the first meeting, and the boss is called the same as everybody else." }, accept: ["to be on du terms"], drill: { jp: "Det er vanlig å være dus her", en: "It is normal to be on first-name terms here" }, hint: "å være dus → er dus, var dus. Dus bøyes ikke. Fra du. ⚠ Motstykket er å være Des, og det ordet er like dødt som formen selv — i praksis er alle dus med alle." },
        { id: "no-u109l3-atitulere", type: "vocab", front: "å titulere", reading: "atitulere", meaning: "to address by title", example: { jp: "Ingen titulerer hverandre på jobben, og den som gjør det blir lagt merke til.", en: "Nobody addresses each other by title at work, and whoever does gets noticed." }, accept: ["to use somebody's title"], drill: { jp: "Det er uvanlig å titulere folk her", en: "It is unusual to address people by title here" }, hint: "å titulere → titulerer, titulerte. Fra en tittel (u35). ⚠ Brukes nesten bare om at noen IKKE gjør det, eller om andre land. Kongen er unntaket." },
        { id: "no-u109l3-enfortrolighet", type: "vocab", front: "en fortrolighet", reading: "enfortrolighet", meaning: "familiarity (closeness)", example: { jp: "Det ligger en fortrolighet i at alle sier du, men den er mindre ærlig enn den ser ut.", en: "There is a familiarity in everybody saying du, but it is less honest than it looks." }, accept: ["intimacy", "confidence (closeness)"], drill: { jp: "Det ble en fortrolighet mellom dem", en: "A familiarity arose between them" }, hint: "en fortrolighet → fortroligheten. ⚠ -het er ALLTID hankjønn. Fra fortrolig. Merk ø-folden: lesinga er enfortrolighet. Nærhet i MÅTEN dere snakker på, ikke i hvor godt dere kjenner hverandre." },
        { id: "no-u109l3-hoytidelig", type: "vocab", front: "høytidelig", reading: "hoytidelig", meaning: "solemn (ceremonious)", example: { jp: "Talen var høytidelig, og i norske ører blir det fort litt for mye.", en: "The speech was solemn, and to Norwegian ears that quickly becomes a bit too much." }, accept: ["ceremonious", "formal (grand)"], drill: { jp: "Han var høytidelig i talen sin", en: "He was solemn in his speech" }, hint: "høytidelig → høytidelig, høytidelige. -ig-ord får ikke -t i intetkjønn. Fra ei høytid (u86). ⚠ Ofte negativt: «ikke ta det så høytidelig» betyr slapp av." },
      ],
    },
    {
      id: "no-u109l4",
      unit: 109,
      lesson: 4,
      title: "Ord som røper registeret",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Hear what register somebody is in from the words they choose — and say what each choice signals.",
      items: [
        { id: "no-u109l4-enfloskel", type: "vocab", front: "en floskel", reading: "enfloskel", meaning: "empty phrase (platitude)", example: { jp: "Talen var bygd på flosklene alle kjenner, og likevel var hele rommet enig.", en: "The speech was built on the platitudes everybody knows, and still the whole room agreed." }, accept: ["a platitude", "a cliché (empty)"], drill: { jp: "Svaret hans var en floskel", en: "His answer was an empty phrase" }, hint: "en floskel → floskelen, flertall flosklene. Merk at -el mister e-en: floskel → flosklene. ⚠ Alltid negativt. En klisjé (u104) er sliten; en floskel er tom." },
        { id: "no-u109l4-abanne", type: "vocab", front: "å banne", reading: "abanne", meaning: "to swear (curse)", example: { jp: "Folk her banner mindre enn i andre land, og de sterke orda våre handler om kirka og ikke om kroppen.", en: "People here swear less than in other countries, and our strong words are about the church and not the body." }, accept: ["to curse", "to use bad language"], drill: { jp: "Det er vanlig å banne på jobben", en: "It is common to swear at work" }, hint: "å banne → banner, bante. ⚠ Også: å banne på noe betyr å love det høytidelig. De to tydningene har samme opphav — en ed." },
        { id: "no-u109l4-enforkortelse", type: "vocab", front: "en forkortelse", reading: "enforkortelse", meaning: "abbreviation", example: { jp: "Brevet er bygd på forkortelser, og det er nettopp slik staten holder folk utenfor.", en: "The letter is built on abbreviations, and that is exactly how the state keeps people out." }, accept: ["an abbreviation", "a short form"], drill: { jp: "De brukte en forkortelse ingen forsto", en: "They used an abbreviation nobody understood" }, hint: "en forkortelse → forkortelsen, flertall forkortelser. ⚠ -else er ALLTID hankjønn. Fra å forkorte. Norsk skriver punktum i dem: bl.a., f.eks., m.m." },
        { id: "no-u109l4-enslang", type: "vocab", front: "en slang", reading: "enslang", meaning: "slang", example: { jp: "Slangen forandrer seg hvert år, og det er derfor de eldre aldri får den helt til.", en: "Slang changes every year, and that is why older people never quite get it right." }, accept: ["slang"], drill: { jp: "De unge har en slang vi ikke kjenner", en: "Young people have a slang we do not know" }, hint: "en slang → slangen. Står oftest uten artikkel: å bruke slang. ⚠ Ikke bland med ei slange, som er dyret — og som har helt annet kjønn og bøying." },
        { id: "no-u109l4-etlanord", type: "vocab", front: "et lånord", reading: "etlanord", meaning: "loanword", example: { jp: "Et lånord blir norsk når vi bøyer det som norsk, og det tar som regel bare noen få år.", en: "A loanword becomes Norwegian when we inflect it as Norwegian, and that usually takes only a few years." }, accept: ["a borrowed word"], drill: { jp: "Dette er et lånord fra et annet språk", en: "This is a loanword from another language" }, hint: "et lånord → lånordet, flertall lånord (ubøyd). Et lån (u79) + et ord. Merk å-folden: lesinga er etlanord. Norsk tar dem lett inn, men skriver dem gjerne om: sjåfør, sjanse, tøff." },
        { id: "no-u109l4-folkelig", type: "vocab", front: "folkelig", reading: "folkelig", meaning: "down-to-earth (popular in tone)", example: { jp: "Hun er folkelig på en måte som er lært inn, og folk merker forskjellen.", en: "She is down-to-earth in a way that has been learnt, and people notice the difference." }, accept: ["popular (in style)", "plain-spoken"], drill: { jp: "Han er folkelig når han snakker", en: "He is down-to-earth when he speaks" }, hint: "folkelig → folkelig, folkelige. -ig-ord får ikke -t i intetkjønn. Folk (u77) + lig. ⚠ I norsk politikk er dette ros — og å bli kalt ufolkelig er blant det verste som kan sies om deg." },
      ],
    },
  ],
};
