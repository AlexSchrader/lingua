// NO Unit 99 — Identitet og samfunn (slot: identity-society) — B2
// Block 1 of Norwegian B2. Band constitution: no/unit88.js §C1–C7.
//
// Blocked before authoring: `en forskjell` u50, `en likhet` u50, `ei rolle` u35,
// `et fellesskap` u68, `likestilling` u68, `en fordom` u51, `frihet` u58,
// `en norm` u61, `en oppvekst` u63, `ei befolkning` u55, `samhold` u55,
// `ei gruppe` u68, `et samfunn` u32, `en borger` u32. u68 owns the WE layer and
// u51 the PREJUDICE one, so this unit is: who a person is (l1), how many kinds
// there are (l2), who is left outside (l3) and what holds the rest together (l4).
//
// `ei tilpassing` was cut as a transparent derivation of `å tilpasse`, and
// `ei utestenging` as one of `å utestenge` (l3).
//
//   FREE: samene
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT99 = {
  id: "no-u99",
  lang: "no",
  title: "Identitet og samfunn",
  order: 99,
  stage: "b2",
  lessons: [
    {
      id: "no-u99l1",
      unit: 99,
      lesson: 1,
      title: "Hvem er vi",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say who somebody is in Norwegian — identity, belonging, family line, where they came from and what passport they hold.",
      items: [
        { id: "no-u99l1-enidentitet", type: "vocab", front: "en identitet", reading: "enidentitet", meaning: "identity", example: { jp: "Identiteten hans hører til stedet, ikke til språket.", en: "His identity belongs to the place, not to the language." }, accept: ["a sense of self", "who somebody is"], drill: { jp: "Alle har en identitet de velger", en: "Everybody has an identity they choose" }, hint: "en identitet → identiteten, flertall identiteter. -itet-ord er hankjønn (regel 1), aldri ei. Både hvem du er og papiret som viser det." },
        { id: "no-u99l1-entilhorighet", type: "vocab", front: "en tilhørighet", reading: "entilhorighet", meaning: "belonging", example: { jp: "Tilhørigheten kom først etter mange år i bygda.", en: "The sense of belonging only came after many years in the village." }, accept: ["a sense of belonging", "affiliation"], drill: { jp: "Her er det en tilhørighet vi kjenner", en: "Here there is a belonging we recognise" }, hint: "en tilhørighet → tilhørigheten. -het-ord er hankjønn (regel 1), aldri ei. Merk ø-folden: lesinga er entilhorighet. Fra å høre til." },
        { id: "no-u99l1-eislekt", type: "vocab", front: "ei slekt", reading: "eislekt", meaning: "kin (family line)", example: { jp: "Slekta hennes har bodd i samme dal i tre hundre år.", en: "Her family line has lived in the same valley for three hundred years." }, accept: ["lineage", "an extended family"], drill: { jp: "Hun kommer fra ei slekt med bønder", en: "She comes from a family line of farmers" }, hint: "ei slekt → slekta, flertall slekter. Du vil også se slekten i trykk, og begge er tillatt i bokmål. Hele familien (u4) bakover i tid, ikke bare de levende." },
        { id: "no-u99l1-etopphavsland", type: "vocab", front: "et opphavsland", reading: "etopphavsland", meaning: "country of origin", example: { jp: "Opphavslandet står i søknaden, men det sier lite om folk.", en: "The country of origin is in the application, but it says little about people." }, accept: ["a home country", "a country of birth"], drill: { jp: "Her er det et opphavsland vi kjenner", en: "Here there is a country of origin we know" }, hint: "et opphavsland → opphavslandet, flertall opphavsland. Et opphav (u95) + et land (u3). Byråkratisk; folk sier heller hvor du kommer fra." },
        { id: "no-u99l1-etstatsborgerskap", type: "vocab", front: "et statsborgerskap", reading: "etstatsborgerskap", meaning: "citizenship", example: { jp: "Statsborgerskapet tok ni år, og det var slett ikke lett.", en: "The citizenship took nine years, and it was by no means easy." }, accept: ["nationality (legal)"], drill: { jp: "Hun fikk et statsborgerskap i mai", en: "She got a citizenship in May" }, hint: "et statsborgerskap → statsborgerskapet, flertall statsborgerskap. En stat (u32) + en borger (u32) + -skap. Norge tillot dobbelt statsborgerskap først i 2020." },
        { id: "no-u99l1-eifolkegruppe", type: "vocab", front: "ei folkegruppe", reading: "eifolkegruppe", meaning: "ethnic group", example: { jp: "Det bor flere folkegrupper i nord, og alle har eget språk.", en: "Several ethnic groups live in the north, and all of them have their own language." }, accept: ["a people", "an ethnic community"], drill: { jp: "Dette er ei folkegruppe vi glemmer", en: "This is an ethnic group we forget" }, hint: "ei folkegruppe → folkegruppa. Følger ei gruppe (u68) og er hunkjønn; folkegruppen er vanlig i trykk. Folk (u77) + ei gruppe." },
      ],
    },
    {
      id: "no-u99l2",
      unit: 99,
      lesson: 2,
      title: "Mangfold",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a mixed society in Norwegian — diversity, minority and majority, indigenous people, tolerance and integration.",
      items: [
        { id: "no-u99l2-etmangfold", type: "vocab", front: "et mangfold", reading: "etmangfold", meaning: "diversity", example: { jp: "Mangfoldet i klassen er stort, og det gjør jobben vanskeligere.", en: "The diversity in the class is great, and it makes the job harder." }, accept: ["variety", "plurality"], drill: { jp: "Her er det et mangfold vi liker", en: "Here there is a diversity we like" }, hint: "et mangfold → mangfoldet. Står oftest uten artikkel: å ta vare på mangfold. Mange + en fold. Både om folk og om natur (u34)." },
        { id: "no-u99l2-enminoritet", type: "vocab", front: "en minoritet", reading: "enminoritet", meaning: "minority (group of people)", example: { jp: "En minoritet blir alltid målt mot flertallet, aldri omvendt.", en: "A minority is always measured against the majority, never the other way round." }, accept: ["a minority group"], drill: { jp: "De er en minoritet i eget land", en: "They are a minority in their own country" }, hint: "en minoritet → minoriteten, flertall minoriteter. -itet-ord er hankjønn (regel 1). ⚠ Om folkegrupper; et mindretall (u92) er om tall i en avstemning." },
        { id: "no-u99l2-enmajoritet", type: "vocab", front: "en majoritet", reading: "enmajoritet", meaning: "majority (group of people)", example: { jp: "Majoriteten merker aldri at den er en majoritet.", en: "The majority never notices that it is a majority." }, accept: ["the majority group"], drill: { jp: "De er en majoritet i denne byen", en: "They are a majority in this city" }, hint: "en majoritet → majoriteten. -itet-ord er hankjønn (regel 1). Paret til en minoritet. Et flertall (u53) er om tall; en majoritet er om folk." },
        { id: "no-u99l2-eiurbefolkning", type: "vocab", front: "ei urbefolkning", reading: "eiurbefolkning", meaning: "indigenous people", example: { jp: "Samene er ei urbefolkning, og de var her lenge før Norge fantes.", en: "The Sámi are an indigenous people, and they were here long before Norway existed." }, accept: ["an indigenous population", "aboriginal people"], drill: { jp: "Dette er ei urbefolkning i nord", en: "This is an indigenous people in the north" }, hint: "ei urbefolkning → urbefolkninga. Følger ei befolkning (u55) og er hunkjønn; urbefolkningen er vanlig i trykk. Ur- betyr opprinnelig (u59). Samene er Norges." },
        { id: "no-u99l2-entoleranse", type: "vocab", front: "en toleranse", reading: "entoleranse", meaning: "tolerance", example: { jp: "Toleransen er stor i ord, men mindre når naboen flytter inn.", en: "The tolerance is great in words, but smaller when the neighbour moves in." }, accept: ["forbearance", "acceptance"], drill: { jp: "Her er det en toleranse vi trenger", en: "Here there is a tolerance we need" }, hint: "en toleranse → toleransen. -anse-ord er hankjønn. Å tåle (u22) er roten. Også i teknikk: en toleranse på en millimeter." },
        { id: "no-u99l2-eiintegrering", type: "vocab", front: "ei integrering", reading: "eiintegrering", meaning: "integration", example: { jp: "Integreringa går best der folk jobber sammen om noe.", en: "Integration works best where people work together on something." }, accept: ["inclusion"], drill: { jp: "Dette er ei integrering som virker", en: "This is an integration that works" }, hint: "ei integrering → integreringa. -ing-ord er hunkjønn; integreringen er vanlig i trykk. ⚠ Ikke det samme som å bli lik alle andre — det heter assimilering." },
      ],
    },
    {
      id: "no-u99l3",
      unit: 99,
      lesson: 3,
      title: "Utenfor",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name exclusion in Norwegian — shutting people out, standing outside, discrimination, racism and a society pulling apart.",
      items: [
        { id: "no-u99l3-autestenge", type: "vocab", front: "å utestenge", reading: "autestenge", meaning: "to shut out (exclude)", example: { jp: "De utestengte ham fra gruppa uten å si hvorfor.", en: "They shut him out of the group without saying why." }, accept: ["to exclude", "to bar"], drill: { jp: "Det er lett å utestenge noen", en: "It is easy to shut somebody out" }, hint: "å utestenge → utestenger, utestengte. Ut + å stenge. Både fysisk (fra et rom) og sosialt (fra et fellesskap, u68)." },
        { id: "no-u99l3-etutenforskap", type: "vocab", front: "et utenforskap", reading: "etutenforskap", meaning: "exclusion (being outside)", example: { jp: "Utenforskapet begynner på skolen, og det er vanskelig å snu.", en: "The exclusion begins at school, and it is hard to turn around." }, accept: ["social exclusion", "being left out"], drill: { jp: "Dette er et utenforskap ingen ser", en: "This is an exclusion nobody sees" }, hint: "et utenforskap → utenforskapet. Utenfor (u76) + -skap. Nytt ord i norsk og mye brukt i politikken: å stå utenfor både skole og arbeid." },
        { id: "no-u99l3-eidiskriminering", type: "vocab", front: "ei diskriminering", reading: "eidiskriminering", meaning: "discrimination", example: { jp: "Diskrimineringa er sjelden åpen, og det gjør den vanskelig å vise.", en: "The discrimination is rarely open, and that makes it hard to demonstrate." }, accept: ["unfair treatment"], drill: { jp: "Her er det ei diskriminering vi ser", en: "Here there is a discrimination we can see" }, hint: "ei diskriminering → diskrimineringa. -ing-ord er hunkjønn; diskrimineringen er vanlig i trykk. Loven nevner kjønn, alder (u28), språk og tro." },
        { id: "no-u99l3-enrasisme", type: "vocab", front: "en rasisme", reading: "enrasisme", meaning: "racism", example: { jp: "Rasismen er der, men den sier sjelden navnet sitt høyt.", en: "The racism is there, but it rarely says its name out loud." }, accept: ["racial prejudice"], drill: { jp: "Dette er en rasisme alle ser", en: "This is a racism everybody sees" }, hint: "en rasisme → rasismen. -isme-ord er hankjønn. Står oftest uten artikkel: å møte rasisme. En rasist er personen." },
        { id: "no-u99l3-enfremmedfrykt", type: "vocab", front: "en fremmedfrykt", reading: "enfremmedfrykt", meaning: "xenophobia", example: { jp: "Fremmedfrykten er størst der folk møter færrest nye.", en: "Xenophobia is greatest where people meet the fewest newcomers." }, accept: ["fear of strangers", "fear of outsiders"], drill: { jp: "Her er det en fremmedfrykt vi kjenner", en: "Here there is a xenophobia we recognise" }, hint: "en fremmedfrykt → fremmedfrykten. Fremmed + frykt. ⚠ Her skriver norsk fremmed-, ikke framm-: ordet har ingen fram-form, selv om denne kursen ellers skriver fram-." },
        { id: "no-u99l3-ensplittelse", type: "vocab", front: "en splittelse", reading: "ensplittelse", meaning: "rift (split)", example: { jp: "Splittelsen i gruppa kom av noe svært lite.", en: "The rift in the group came from something very small." }, accept: ["a division", "a schism"], drill: { jp: "Dette blir en splittelse for alle", en: "This is going to be a rift for everybody" }, hint: "en splittelse → splittelsen, flertall splittelser. -else-ord er hankjønn (regel 1), aldri ei. Fra å splitte. Mye sterkere enn en uenighet." },
      ],
    },
    {
      id: "no-u99l4",
      unit: 99,
      lesson: 4,
      title: "Fellesskap",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what holds people together in Norwegian — solidarity, a sense of unity, formal recognition, fellow citizens and shared class.",
      items: [
        { id: "no-u99l4-ensolidaritet", type: "vocab", front: "en solidaritet", reading: "ensolidaritet", meaning: "solidarity", example: { jp: "Solidaritet koster lite når den ikke koster noe.", en: "Solidarity costs little when it does not cost anything." }, accept: ["fellow feeling", "mutual support"], drill: { jp: "Her er det en solidaritet som holder", en: "Here there is a solidarity that holds" }, hint: "en solidaritet → solidariteten. -itet-ord er hankjønn (regel 1), aldri ei. Står oftest uten artikkel: å vise solidaritet. Solidarisk er adjektivet." },
        { id: "no-u99l4-ensamhorighet", type: "vocab", front: "en samhørighet", reading: "ensamhorighet", meaning: "sense of unity", example: { jp: "Samhørigheten ble mye sterkere etter det som skjedde.", en: "The sense of unity got much stronger after what happened." }, accept: ["togetherness", "cohesion"], drill: { jp: "Her er det en samhørighet vi liker", en: "Here there is a sense of unity we like" }, hint: "en samhørighet → samhørigheten. -het-ord er hankjønn (regel 1). Merk ø-folden: lesinga er ensamhorighet. Samhold (u55) er hva gruppa gjør; samhørighet er hva den føler." },
        { id: "no-u99l4-aanerkjenne", type: "vocab", front: "å anerkjenne", reading: "aanerkjenne", meaning: "to recognise (formally)", example: { jp: "Staten anerkjente språket altfor sent, og det merkes ennå.", en: "The state recognised the language far too late, and it still shows." }, accept: ["to acknowledge", "to accept officially"], drill: { jp: "Det er viktig å anerkjenne slikt arbeid", en: "It is important to recognise work like that" }, hint: "å anerkjenne → anerkjenner, anerkjente. An + å erkjenne. En anerkjennelse er resultatet. Å kjenne igjen (u63) er å se hvem noen er; å anerkjenne er å gi dem rett." },
        { id: "no-u99l4-enmedborger", type: "vocab", front: "en medborger", reading: "enmedborger", meaning: "fellow citizen", example: { jp: "Han snakker om dem som medborgere, ikke som gjester.", en: "He talks about them as fellow citizens, not as guests." }, accept: ["a fellow member of society"], drill: { jp: "Hun er en medborger som bryr seg", en: "She is a fellow citizen who cares" }, hint: "en medborger → medborgeren, flertall medborgere. Med + en borger (u32). Peker på det dere deler, ikke på papiret." },
        { id: "no-u99l4-ensamfunnsklasse", type: "vocab", front: "en samfunnsklasse", reading: "ensamfunnsklasse", meaning: "social class", example: { jp: "Samfunnsklassen betyr mindre enn før, men den er ikke borte.", en: "Social class means less than it did, but it has not gone away." }, accept: ["a class (social)"], drill: { jp: "Dette er en samfunnsklasse vi glemmer", en: "This is a social class we forget" }, hint: "en samfunnsklasse → samfunnsklassen, flertall samfunnsklasser. Et samfunn (u32) + ei klasse (u85). Et samfunnslag (u95) er mykere; ei klasse er skarpere." },
        { id: "no-u99l4-enlandsmann", type: "vocab", front: "en landsmann", reading: "enlandsmann", meaning: "compatriot", example: { jp: "Han møtte en landsmann på flyplassen og de snakket i en time.", en: "He met a compatriot at the airport and they talked for an hour." }, accept: ["a fellow countryman"], drill: { jp: "Hun møtte en landsmann i Bergen", en: "She met a compatriot in Bergen" }, hint: "en landsmann → landsmannen, flertall landsmenn. Et land (u3) + en mann (u4). Brukes om begge kjønn; ei landskvinne finnes, men er sjelden." },
      ],
    },
  ],
};
