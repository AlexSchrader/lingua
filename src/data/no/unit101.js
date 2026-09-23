// NO Unit 101 — Miljø, ressurser og det globale (slot: environment-global) — B2
// ─────────────────────────────────────────────────────────────────────────────
// FIRST UNIT OF B2 BLOCK 2 (u101–u113). Conventions: no/unit1.js §1–§9 (language),
// no/unit51.js B1–B9 (B1 band), no/unit88.js C1–C7 (B2 band). All three bind.
//
// ⚠ RETHEMED. The slot is "Environment and the global" and u65 (Miljø og klima)
// already owns the WHOLE climate layer — ei klimaendring, en klimagass,
// forurensning, gjenvinning, bærekraftig, å verne, en ressurs, et artsmangfold,
// en art, å utrydde, et utslipp, avfall, et kraftverk, ei oppvarming. So this
// unit is NOT climate again. It is the three layers above it: nature as a
// SYSTEM (l1), the USE of land and resources (l2), the WEATHER that answers
// back (l3), and the GLOBAL frame that all of it is argued inside (l4).
//
// ⚠ THE LEXEME RULE IS NARROWER THAN IT LOOKS (CLAUDE.md / RUNBOOK §4, corrected
// on main 2026-09-23, commit 5928ca20). "LEXEME" means INFLECTION — the SAME word
// in another form (`ei fare`/`en fare`, infinitive vs conjugated). A word DERIVED
// from a taught one is a DIFFERENT lexeme and may be taught. The test is not
// "do these share a stem" but "would a learner who knows one already know the
// other?" So `en fattigdom` IS carded here (l4) even though `fattig` is u55 —
// an earlier draft of this unit had cut it on the old reading, and that was wrong.
// STILL NOT TAKEN, and free for a later block: `å belaste`, `ei bærekraft`,
// `ei havstigning`, `ei snøsmelting` — not because they are derivations, but
// because this unit only has twenty-four slots and these lost on merit.
// `SAME` (article variant) and `TAKEN` from check-front.mjs remain hard blocks.
//
// GENDER NOTES FOR THIS UNIT: -ing is feminine (ei avskoging); compounds take the
// gender of the LAST element, so et bruk → et landbruk, en vekst → en
// befolkningsvekst, et mottak → et akuttmottak. `-sjon` is masculine (en
// matproduksjon), like en konklusjon (u88). `en flyktning` is the documented
// EXCEPTION to "-ing/-ning is feminine": nouns in -ing that name a PERSON are
// masculine, exactly like en lærling (u85).
// FIRST FEMININE of the unit is `ei avskoging` (l1) and carries the en-/ei- note.
//
// SCOPE: the frozen base u1–u100 plus this unit's own earlier cards.
// FREE: FN | Afrika, Europa, Norden, Arktis
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT101 = {
  id: "no-u101",
  lang: "no",
  title: "Miljø, ressurser og det globale",
  order: 101,
  stage: "b2",
  lessons: [
    {
      id: "no-u101l1",
      unit: 101,
      lesson: 1,
      title: "Naturen som system",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue about nature as a system — name the parts, say how one hangs on another, and say what goes when one part is taken out.",
      items: [
        { id: "no-u101l1-etokosystem", type: "vocab", front: "et økosystem", reading: "etokosystem", meaning: "ecosystem", example: { jp: "Et økosystem tåler mye, men ikke at flere arter forsvinner samtidig.", en: "An ecosystem can take a lot, but not several species disappearing at the same time." }, accept: ["an ecosystem"], drill: { jp: "Et økosystem tåler ikke alt", en: "An ecosystem cannot take everything" }, hint: "et økosystem → økosystemet, flertall økosystemer. Merk ø-folden: lesinga er etokosystem. Systemet, ikke stedet — stedet heter et habitat." },
        { id: "no-u101l1-ethabitat", type: "vocab", front: "et habitat", reading: "ethabitat", meaning: "habitat", example: { jp: "De verner et habitat her, samtidig som de bygger ned et annet i nord.", en: "They protect one habitat here, while at the same time building over another one in the north." }, accept: ["a habitat"], drill: { jp: "Arten har et habitat her", en: "The species has a habitat here" }, hint: "et habitat → habitatet, flertall habitater. Fagord, brukes i forvaltning og forskning; i dagligtale sier folk heller et leveområde." },
        { id: "no-u101l1-etrovdyr", type: "vocab", front: "et rovdyr", reading: "etrovdyr", meaning: "predator", example: { jp: "Et rovdyr tar sauer hver sommer, men det er ikke rovdyret folk er mest sinte på.", en: "A predator takes sheep every summer, but the predator is not what people are angriest about." }, accept: ["a predator", "a beast of prey"], drill: { jp: "Det er et rovdyr i skogen", en: "There is a predator in the forest" }, hint: "et rovdyr → rovdyret, flertall rovdyr (ubøyd i flertall, som et dyr u26). Rov er gammelt norsk for bytte." },
        { id: "no-u101l1-etjordsmonn", type: "vocab", front: "et jordsmonn", reading: "etjordsmonn", meaning: "soil (as a layer)", example: { jp: "Jordsmonnet her er tynt, så en skog som forsvinner kommer ikke tilbake med det første.", en: "The soil here is thin, so a forest that disappears does not come back any time soon." }, accept: ["topsoil", "the soil"], drill: { jp: "Her er et jordsmonn som tåler lite", en: "Here is a soil that takes little" }, hint: "et jordsmonn → jordsmonnet. Jord (u34) er stoffet; et jordsmonn er LAGET som planter lever i. Står nesten alltid i entall." },
        { id: "no-u101l1-envillmark", type: "vocab", front: "en villmark", reading: "envillmark", meaning: "wilderness", example: { jp: "Folk snakker gjerne om en villmark, men svært lite av landet er helt uten veier.", en: "People like to talk about wilderness, but very little of the country is entirely without roads." }, accept: ["wild country", "the wild"], drill: { jp: "Vi kjører gjennom en villmark hver sommer", en: "We drive through a wilderness every summer" }, hint: "en villmark → villmarka, flertall villmarker. Vill + ei mark. Ordet er kulturelt ladd i Norge: det beskriver like mye en idé som et område." },
        { id: "no-u101l1-eiavskoging", type: "vocab", front: "ei avskoging", reading: "eiavskoging", meaning: "deforestation", example: { jp: "Ei avskoging går fort, mens en ny skog bruker mange år på å bli den samme.", en: "Deforestation happens fast, while a new forest takes many years to become the same thing." }, accept: ["deforestation", "clearing of forest"], drill: { jp: "Det skjer ei avskoging i sør", en: "Deforestation is happening in the south" }, hint: "ei avskoging → avskoginga. Hunkjønnsord kan du også skrive en avskoging / avskogingen, og du møter begge i avisene — men -ing er alltid hunkjønn i denne kursen (regel 1). Av + en skog (u19)." },
      ],
    },
    {
      id: "no-u101l2",
      unit: 101,
      lesson: 2,
      title: "Å bruke naturen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue about how land gets used — name the activity, the limit somebody set on it, and what happens when the limit is passed.",
      items: [
        { id: "no-u101l2-etlandbruk", type: "vocab", front: "et landbruk", reading: "etlandbruk", meaning: "agriculture", example: { jp: "Et landbruk som dette gir arbeid til bygda, men det tåler ikke en dårlig sommer.", en: "Agriculture like this gives the village work, but it cannot take a bad summer." }, accept: ["farming"], drill: { jp: "Bygda lever av et landbruk", en: "The village lives off agriculture" }, hint: "et landbruk → landbruket. Et land + et bruk. Næringa heter landbruk; den enkelte garden heter et gårdsbruk." },
        { id: "no-u101l2-enmatproduksjon", type: "vocab", front: "en matproduksjon", reading: "enmatproduksjon", meaning: "food production", example: { jp: "Matproduksjonen er høy nok i dag, men den hviler på varer vi kjøper fra andre land.", en: "Food production is high enough today, but it rests on goods we buy from other countries." }, accept: ["food production"], drill: { jp: "Vi trenger en matproduksjon som varer", en: "We need a food production that lasts" }, hint: "en matproduksjon → matproduksjonen. -sjon er hankjønn (som en konklusjon, u88). Mat (u6) + produksjon." },
        { id: "no-u101l2-ahogge", type: "vocab", front: "å hogge", reading: "ahogge", meaning: "to fell (trees)", example: { jp: "De hogger bare der skogen er gammel, og likevel blir naboene sinte hver gang.", en: "They only fell where the forest is old, and still the neighbours get angry every time." }, accept: ["to chop", "to cut down", "to log"], drill: { jp: "Det er lov å hogge her om vinteren", en: "It is allowed to fell here in winter" }, hint: "å hogge → hogger, hogde, har hogd. Skrives også å hugge. Om trær og ved; å kutte (u82) er om alt annet." },
        { id: "no-u101l2-etnaturinngrep", type: "vocab", front: "et naturinngrep", reading: "etnaturinngrep", meaning: "intervention in nature", example: { jp: "Hvert naturinngrep er lite for seg, men til sammen blir de til noe helt annet.", en: "Each intervention is small on its own, but together they become something else entirely." }, accept: ["an encroachment on nature", "development in nature"], drill: { jp: "Det var et naturinngrep ingen hadde ventet", en: "It was an intervention nobody had expected" }, hint: "et naturinngrep → naturinngrepet, flertall naturinngrep (ubøyd). Natur + et inngrep. Ordet står i hver eneste norske utbyggingssak." },
        { id: "no-u101l2-enkvote", type: "vocab", front: "en kvote", reading: "enkvote", meaning: "quota", example: { jp: "Kvoten er satt etter tallene fra i år, og de tallene stoler ingen på.", en: "The quota is set from this year's figures, and nobody trusts those figures." }, accept: ["an allowance", "a quota"], drill: { jp: "De fikk en kvote som var for liten", en: "They got a quota that was too small" }, hint: "en kvote → kvoten, flertall kvoter. Hvor mye du HAR LOV til å ta — fisk, utslipp, jakt. Ikke det samme som en andel (u89), som er hvor mye du faktisk får." },
        { id: "no-u101l2-etoverforbruk", type: "vocab", front: "et overforbruk", reading: "etoverforbruk", meaning: "overconsumption", example: { jp: "Et overforbruk er lett å se etterpå, men nesten umulig å stoppe mens det står på.", en: "Overconsumption is easy to see afterwards, but almost impossible to stop while it is going on." }, accept: ["excessive consumption", "overuse"], drill: { jp: "Tallene viser et overforbruk av vann", en: "The figures show an overconsumption of water" }, hint: "et overforbruk → overforbruket. Over- + forbruk (u65). Prefikset over- lager mange slike ord: overfiske, overbeskatning, overbelastning." },
      ],
    },
    {
      id: "no-u101l3",
      unit: 101,
      lesson: 3,
      title: "Når været slår til",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name an extreme weather event and weigh what it did against what actually caused it.",
      items: [
        { id: "no-u101l3-enflom", type: "vocab", front: "en flom", reading: "enflom", meaning: "flood", example: { jp: "Flommen tok brua, men det var husene langs elva som gjorde skaden så stor.", en: "The flood took the bridge, but it was the houses along the river that made the damage so big." }, accept: ["flooding", "a flood"], drill: { jp: "Det kom en flom i mai", en: "There was a flood in May" }, hint: "en flom → flommen, flertall flommer. Hankjønn, selv om mange tror ordet er hunkjønn. Brukes også i overført tydning: en flom av klager." },
        { id: "no-u101l3-etskred", type: "vocab", front: "et skred", reading: "etskred", meaning: "landslide (or avalanche)", example: { jp: "Et skred tar sekunder, mens arbeidet med å sikre fjellet tar flere år.", en: "A landslide takes seconds, while the work of securing the mountain takes several years." }, accept: ["an avalanche", "a slide"], drill: { jp: "Det gikk et skred over veien", en: "A landslide went over the road" }, hint: "et skred → skredet, flertall skred (ubøyd). Samme ord om snø, jord og stein — du skiller med snøskred, jordskred, steinskred. Verbet er at skredet GÅR." },
        { id: "no-u101l3-etekstremvaer", type: "vocab", front: "et ekstremvær", reading: "etekstremvaer", meaning: "extreme weather event", example: { jp: "Et ekstremvær får navn i Norge, og det navnet gjør at folk husker det lenge etterpå.", en: "An extreme weather event gets a name in Norway, and that name makes people remember it long afterwards." }, accept: ["extreme weather", "a named storm"], drill: { jp: "Vi hadde et ekstremvær i helga", en: "We had an extreme weather event at the weekend" }, hint: "et ekstremvær → ekstremværet. Merk æ-folden: lesinga er etekstremvaer. Et uvær (u43) er bare dårlig vær; et ekstremvær er det meteorologene varsler om og gir navn." },
        { id: "no-u101l3-enisbre", type: "vocab", front: "en isbre", reading: "enisbre", meaning: "glacier", example: { jp: "Isbreen trekker seg tilbake hvert år, og stien som gikk opp stemmer ikke med kartet.", en: "The glacier retreats every year, and the path that went up does not match the map." }, accept: ["a glacier"], drill: { jp: "Vi gikk opp til en isbre", en: "We walked up to a glacier" }, hint: "en isbre → isbreen, flertall isbreer. Is (u43) + en bre. Folk sier ofte bare breen når det er klart hvilken de mener." },
        { id: "no-u101l3-ethavniva", type: "vocab", front: "et havnivå", reading: "ethavniva", meaning: "sea level", example: { jp: "Havnivået stiger sakte, men havna i byen ble bygd for et hav som lå lavere.", en: "The sea level is rising slowly, but the harbour in town was built for a sea that lay lower." }, accept: ["the sea level"], drill: { jp: "Et havnivå kan stige raskt", en: "A sea level can rise quickly" }, hint: "et havnivå → havnivået. Hav (u45) + et nivå (u50). Merk å-folden: lesinga er ethavniva. Står nesten alltid i bestemt form: havnivået." },
        { id: "no-u101l3-enavling", type: "vocab", front: "en avling", reading: "enavling", meaning: "crop (yield)", example: { jp: "Avlinga ble god i år, men et år uten regn hadde tatt hele bygda.", en: "The crop was good this year, but a year without rain would have taken the whole village." }, accept: ["a harvest", "a yield"], drill: { jp: "De fikk en avling ingen hadde ventet", en: "They got a crop nobody had expected" }, hint: "en avling → avlinga eller avlingen. ⚠ UNNTAK fra -ing-regelen i praksis: mange skriver en avling, og begge kjønn er tillatt. Det du HØSTER, ikke det du sår." },
      ],
    },
    {
      id: "no-u101l4",
      unit: 101,
      lesson: 4,
      title: "Det globale bildet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Set a local problem against a global one — say who is hit, who helps, and what that help is properly called.",
      items: [
        { id: "no-u101l4-global", type: "vocab", front: "global", reading: "global", meaning: "worldwide (in scope)", example: { jp: "Problemet er globalt, men løsningene blir laget i hvert land for seg.", en: "The problem is global, but the solutions are made in each country on its own." }, accept: ["affecting the whole world"], drill: { jp: "Dette er en global utfordring", en: "This is a global challenge" }, hint: "global → globalt, globale. Intetkjønn globalt er også adverb: det virker globalt. Verdensomspennende er det norske alternativet, men global er det folk sier." },
        { id: "no-u101l4-ettoppmote", type: "vocab", front: "et toppmøte", reading: "ettoppmote", meaning: "summit (meeting)", example: { jp: "Et toppmøte slutter som regel med en tekst alle kan godta, og ingen er fornøyd med.", en: "A summit usually ends with a text everybody can accept, and nobody is happy about." }, accept: ["a summit"], drill: { jp: "De holder et toppmøte i Oslo", en: "They are holding a summit in Oslo" }, hint: "et toppmøte → toppmøtet, flertall toppmøter. En topp (u45) + et møte. Merk ø-folden: lesinga er ettoppmote. Bare om møter mellom statsledere." },
        { id: "no-u101l4-enbistand", type: "vocab", front: "en bistand", reading: "enbistand", meaning: "development aid", example: { jp: "Bistanden virker der staten fungerer, men den gjør lite der ingen kan ta imot den.", en: "Aid works where the state functions, but it does little where nobody can receive it." }, accept: ["aid", "assistance"], drill: { jp: "Landet får en bistand fra Norden", en: "The country gets aid from the Nordic countries" }, hint: "en bistand → bistanden. Bi- (ved siden av) + å stå. Står oftest uten artikkel: å gi bistand. Langsiktig hjelp — det akutte heter nødhjelp." },
        { id: "no-u101l4-einodhjelp", type: "vocab", front: "ei nødhjelp", reading: "einodhjelp", meaning: "emergency relief", example: { jp: "Nødhjelpa kom fram på tre dager, mens arbeidet med å bygge opp igjen fremdeles ikke er i gang.", en: "The emergency relief arrived in three days, while the work of building it up again still has not started." }, accept: ["relief aid", "emergency aid"], drill: { jp: "De trenger ei nødhjelp med en gang", en: "They need emergency relief at once" }, hint: "ei nødhjelp → nødhjelpa. Nød (u87) + hjelp. Merk ø-folden: lesinga er einodhjelp. Akutt og kortvarig; det langsiktige heter bistand." },
        { id: "no-u101l4-enflyktning", type: "vocab", front: "en flyktning", reading: "enflyktning", meaning: "refugee", example: { jp: "Hun kom til Norge som flyktning, og hun sier selv at ordet forklarer nesten ingenting om henne.", en: "She came to Norway as a refugee, and she says herself that the word explains almost nothing about her." }, accept: ["a refugee"], drill: { jp: "Han kjente en flyktning fra byen", en: "He knew a refugee from the town" }, hint: "en flyktning → flyktningen, flertall flyktninger. ⚠ HANKJØNN, ikke hunkjønn: -ing-ord som navngir et MENNESKE er hankjønn, akkurat som en lærling (u85). Fra å flykte." },
        { id: "no-u101l4-enfattigdom", type: "vocab", front: "en fattigdom", reading: "enfattigdom", meaning: "poverty", example: { jp: "Fattigdommen er mindre enn før, men den er vanskeligere å se og derfor lettere å glemme.", en: "Poverty is smaller than before, but it is harder to see and therefore easier to forget." }, accept: ["poverty"], drill: { jp: "Det er en fattigdom vi ikke ser", en: "There is a poverty we do not see" }, hint: "en fattigdom → fattigdommen. ⚠ -dom er HANKJØNN, som en rikdom (u71) og en sykdom (u67). Fra fattig (u55). Står oftest uten artikkel: å leve i fattigdom." },
      ],
    },
  ],
};
