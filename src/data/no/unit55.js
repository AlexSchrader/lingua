// NO Unit 55 — Nyheter og samfunn ("News and society") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "News and society"; retitled per CLAUDE.md → "No front
// language". Conventions: unit1.js §1–§9 (language) + unit51.js B1–B8 (band).
//
// ⚠ THIS IS THE MOST SPENT SLOT IN THE WHOLE BAND AND IT HAD TO BE RETHEMED.
// A2 already teaches ei avis, en journalist, en redaktør, ei overskrift, en
// artikkel, ei spalte, et innlegg, et innslag, et intervju, et program, en kanal,
// en radio, ei reklame, et publikum, et samfunn, en borger, en politiker, en
// kommune and en stat — twenty of the words a "News and society" unit would
// normally be built from. Listing them is the point: a seat that designs this
// slot from the title alone will write twenty duplicate cards.
// So u55 takes the layer above: WHO DECIDES (l1 — power, government, governing,
// rights), HOW A STORY IS MADE (l2 — event, topicality, debate, faithful
// reporting), WHAT A SOCIETY IS MADE OF (l3 — population, wealth, welfare), and
// JUSTICE (l4 — fairness, punishment, crime). None of it repeats the A2 list.
//
// FIRST FEMININE of the unit is `ei makt` (l1) and it carries the en-/ei-
// recognition note unit51.js B4 requires. Note the suffix rule doing real work
// here: `ei regjering`, `ei befolkning`, `ei ytring` and `ei gruppe` are feminine;
// `en hendelse` (-else) and `en rettighet` (-het) are masculine and there is no
// *rettigheta.
//
// ø IN `reading` IS HAND-FOLDED TO o (unit1.js §3): å innføre → "ainnfore".
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT55 = {
  id: "no-u55",
  lang: "no",
  title: "Nyheter og samfunn",
  order: 55,
  stage: "b1",
  lessons: [
    // Lesson 1: who decides. ei makt opens the unit and carries the ei-marking
    // note; en rettighet closes the lesson as the thing that limits makt, which
    // is the whole Norwegian political story in two cards.
    {
      id: "no-u55l1",
      unit: 55,
      lesson: 1,
      title: "Makt og politikk",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about who decides — name power and the government, describe a leader and the act of governing, claim a right, and say what has just been brought in.",
      items: [
        { id: "no-u55l1-eimakt", type: "vocab", front: "makt", reading: "makt", meaning: "power", example: { jp: "Politikerne har makt de må bruke godt.", en: "The politicians have power they must use well." }, drill: { jp: "Politikerne har makt her", en: "The politicians have power here" }, accept: ["might", "authority", "a power", "force"], hint: "MAKT. Feminine: definite makta. Taught bare because å ha makt is the ordinary phrase; a STATE can be counted — ei stormakt, makter. You will also see it written en makt / makten — Bokmål allows both and print leans on the en- form; this course writes ei because ei is what tells you the definite ends in -a. Å ha makt is to hold power, and ei stormakt is a great power." },
        { id: "no-u55l1-eiregjering", type: "vocab", front: "ei regjering", reading: "eiregjering", meaning: "government", example: { jp: "Regjeringa bestemmer hva skatten skal være.", en: "The government decides what the tax will be." }, drill: { jp: "Norge har ei regjering i Oslo", en: "Norway has a government in Oslo" }, accept: ["a government", "the cabinet", "an administration"], hint: "re-YE-ring. Feminine: definite regjeringa, plural regjeringer. Å regjere is to rule, and -ing makes the body that does it. On the news you will hear regjeringen just as often — both are correct Bokmål." },
        { id: "no-u55l1-enleder", type: "vocab", front: "en leder", reading: "enleder", meaning: "leader", example: { jp: "En god leder hører på alle.", en: "A good leader listens to everyone." }, drill: { jp: "Hun er en leder i kommunen", en: "She is a leader in the municipality" }, accept: ["a manager", "a head", "a chief", "a boss"], hint: "LE-der. Masculine: definite lederen, plural ledere. Å lede is to lead; -er makes the person who does it. ⚠ Second meaning in a newspaper: en leder is also the editorial." },
        { id: "no-u55l1-astyre", type: "vocab", front: "å styre", reading: "astyre", meaning: "to govern", example: { jp: "Kommunen styrer skolene i byen.", en: "The municipality runs the schools in the city." }, drill: { jp: "Det er lett å styre en båt", en: "It is easy to steer a boat" }, accept: ["govern", "to steer", "steer", "to run", "to control"], hint: "STUE-re. Present styrer, past styrte. The same word covers steering a boat and running a country. Et styre is a board of directors." },
        { id: "no-u55l1-enrettighet", type: "vocab", front: "en rettighet", reading: "enrettighet", meaning: "a right (entitlement)", example: { jp: "Alle har en rettighet til skole og helse.", en: "Everyone has a right to school and health care." }, drill: { jp: "Dette er en rettighet for alle", en: "This is a right for everyone" }, accept: ["an entitlement", "a legal right", "a claim", "right", "right"], hint: "RET-ti-het. Masculine: definite rettigheten, plural rettigheter. ⚠ Every -het noun is masculine — there is no *rettigheta, however feminine it may feel. Rett plus -ig plus -het: the state of having right on your side." },
        { id: "no-u55l1-ainnfore", type: "vocab", front: "å innføre", reading: "ainnfore", meaning: "to introduce", example: { jp: "Kommunen innfører en ny regel fra mandag.", en: "The municipality is introducing a new rule from Monday." }, drill: { jp: "Det er lett å innføre en regel", en: "It is easy to introduce a rule" }, accept: ["introduce", "to bring in", "bring in", "to implement", "to import"], hint: "INN-fo-re. Inn plus føre, to lead in. Present innfører, past innførte. A government innfører a rule; a country innfører goods, and that second sense is \"to import\"." },
      ],
    },
    // Lesson 2: how a story gets made. aktuell carries the second false-friend
    // warning of the band (u54l3's eventuelt is the first), and å gjengi closes
    // the lesson on the difference between mentioning a quote and getting it right.
    {
      id: "no-u55l2",
      unit: 55,
      lesson: 2,
      title: "Nyhetsbildet",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow a news story — name the event behind it, say why it is topical, point at the item and the debate around it, quote a public statement, and report it faithfully.",
      items: [
        { id: "no-u55l2-enhendelse", type: "vocab", front: "en hendelse", reading: "enhendelse", meaning: "an incident", example: { jp: "En hendelse i byen er i alle aviser i dag.", en: "An event in the city is in every newspaper today." }, drill: { jp: "En hendelse i Oslo var alvorlig", en: "An event in Oslo was serious" }, accept: ["an occurrence", "an incident", "a happening", "an episode", "event", "event"], hint: "HEN-del-se. Masculine: definite hendelsen, plural hendelser. ⚠ Every -else noun is masculine, exactly like every -het noun. Å hende is to happen — the same verb inside hva har hendt?" },
        { id: "no-u55l2-aktuell", type: "vocab", front: "aktuell", reading: "aktuell", meaning: "topical", example: { jp: "Saka er aktuell igjen etter valget.", en: "The issue is topical again after the election." }, drill: { jp: "Saka er aktuell i dag", en: "The issue is topical today" }, accept: ["current", "relevant", "in the news", "live"], hint: "ak-tu-ELL. Neuter aktuelt, plural aktuelle. ⚠ FALSE FRIEND — it does not mean \"actual\". It means current, topical, on the agenda right now. English \"actual\" is faktisk or virkelig." },
        { id: "no-u55l2-etoppslag", type: "vocab", front: "et oppslag", reading: "etoppslag", meaning: "a notice (posting)", example: { jp: "Et oppslag i avisa handlet om skolen.", en: "A news item in the newspaper was about the school." }, drill: { jp: "Avisa har et oppslag om saka", en: "The newspaper has a story about the matter" }, accept: ["a story", "a spread", "a feature", "a notice", "news item", "news item"], hint: "OPP-slag. Neuter: definite oppslaget, plural oppslag — no ending in the plural. Opp plus slag, a strike: what is struck up on the wall. It is both a notice on a board and a big story in a paper." },
        { id: "no-u55l2-endebatt", type: "vocab", front: "en debatt", reading: "endebatt", meaning: "debate", example: { jp: "En debatt om skolen går på radio i kveld.", en: "A debate about the school is on the radio this evening." }, drill: { jp: "Det er en debatt om saka", en: "There is a debate about the matter" }, accept: ["a discussion", "an argument", "a public debate"], hint: "de-BATT. Masculine: definite debatten, plural debatter. Heavier than en samtale and more public than en diskusjon — en debatt has sides." },
        { id: "no-u55l2-eiytring", type: "vocab", front: "ei ytring", reading: "eiytring", meaning: "utterance", example: { jp: "Ei ytring i avisa kan skape en debatt.", en: "A public statement in the newspaper can create a debate." }, drill: { jp: "Ei ytring kan skape et problem", en: "A public statement can create a problem" }, accept: ["a statement", "an expression", "a remark", "something said publicly"], hint: "UET-ring. Feminine: definite ytringa, plural ytringer. Å ytre is to utter. ⚠ You will meet it most often inside ytringsfrihet, freedom of speech — one of the most-used words in Norwegian public life." },
      ],
    },
    // Lesson 3: what a society is made of. et samhold leads because it is the word
    // Norwegians actually reach for about a village or a team, and it has no clean
    // English equivalent — "solidarity" is too political and "togetherness" too soft.
    {
      id: "no-u55l3",
      unit: 55,
      lesson: 3,
      title: "Samfunnet",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a society — name the togetherness that holds it up, its population, who is poor and who is rich, the group you belong to, and the welfare that carries everyone.",
      items: [
        { id: "no-u55l3-etsamhold", type: "vocab", front: "samhold", reading: "samhold", meaning: "togetherness", example: { jp: "Samholdet i en liten bygd er ofte sterkt.", en: "The togetherness in a small village is often strong." }, drill: { jp: "Samhold er viktig her", en: "Togetherness is important here" }, accept: ["solidarity", "unity", "cohesion", "a sense of community"], hint: "SAM-hold. Neuter: definite samholdet, and NO plural — so it is taught bare (unit1.js §1b). Sam, together, plus hold, holding — the holding-together. Warmer than English \"unity\": Norwegians use it about a village, a team, a family." },
        { id: "no-u55l3-eibefolkning", type: "vocab", front: "ei befolkning", reading: "eibefolkning", meaning: "population", example: { jp: "Befolkninga i Norge er ikke stor.", en: "The population in Norway is not large." }, drill: { jp: "Ei befolkning vokser hvert år", en: "A population grows every year" }, accept: ["a population", "the people", "the inhabitants"], hint: "be-FOLK-ning. Feminine: definite befolkninga, plural befolkninger. Be- plus folk, people. Print uses befolkningen a great deal too; this course marks ei so the -a definite stays predictable." },
        { id: "no-u55l3-fattig", type: "vocab", front: "fattig", reading: "fattig", meaning: "poor", example: { jp: "Landet var fattig før, og alle jobbet hardt.", en: "The country was poor before, and everyone worked hard." }, drill: { jp: "Han var fattig som barn", en: "He was poor as a child" }, accept: ["impoverished", "hard up", "badly off", "without money"], hint: "FAT-ti — silent g. Neuter fattig, plural fattige. De fattige means \"the poor\" as a group, and fattigdom is poverty." },
        { id: "no-u55l3-rik", type: "vocab", front: "rik", reading: "rik", meaning: "rich", example: { jp: "Norge er rikt på fisk og natur.", en: "Norway is rich in fish and nature." }, drill: { jp: "Familien er rik på erfaring", en: "The family is rich in experience" }, accept: ["wealthy", "well off", "affluent", "rich in"], hint: "RIK. Neuter rikt, plural rike. ⚠ Rik PÅ noe is rich IN something: rik på fisk. Et rike is a kingdom — the same root, and it is where Frankrike and Østerrike get their names." },
        { id: "no-u55l3-envelferd", type: "vocab", front: "velferd", reading: "velferd", meaning: "welfare", example: { jp: "Velferd for alle er et viktig mål i Norge.", en: "Welfare for everyone is an important goal in Norway." }, drill: { jp: "Velferd for alle koster penger", en: "Welfare for everyone costs money" }, accept: ["wellbeing", "social security", "public welfare", "provision"], hint: "VEL-fer — the d is silent. Masculine: definite velferden, and NO plural — so it is taught bare (unit1.js §1b). Vel, well, plus ferd, journey: how well the journey goes. Velferdsstaten, the welfare state, is what Norwegians call the whole arrangement." },
      ],
    },
    // Lesson 4: justice. Kept concrete on purpose — the abstract half of this slot
    // is already spent by l1's rettighet, and a learner needs bot and straff long
    // before they need jurisprudence.
    {
      id: "no-u55l4",
      unit: 55,
      lesson: 4,
      title: "Rettferd og urett",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about justice and crime — call an outcome fair, name a punishment and a fine, point at the offender, say what was stolen, and report it.",
      items: [
        { id: "no-u55l4-rettferdig", type: "vocab", front: "rettferdig", reading: "rettferdig", meaning: "fair", example: { jp: "Det er ikke rettferdig at han får mer.", en: "It is not fair that he gets more." }, drill: { jp: "Dommeren var rettferdig i dag", en: "The referee was fair today" }, accept: ["just", "even-handed", "equitable", "right"], hint: "rett-FER-di — silent g. Rett plus ferdig, \"finished right\", i.e. done properly. Neuter rettferdig, plural rettferdige. Urettferdig is the opposite, with the same u- you met in uenig." },
        { id: "no-u55l4-enstraff", type: "vocab", front: "en straff", reading: "enstraff", meaning: "punishment", example: { jp: "En straff skal passe til feilen.", en: "A punishment should fit the offence." }, drill: { jp: "En straff må passe til saka", en: "A punishment must fit the case" }, accept: ["a penalty", "a sentence", "a punishment"], hint: "STRAFF. Masculine: definite straffen, plural straffer. Å straffe is the verb. ⚠ In football en straffe is a penalty kick — the extra -e is the only thing telling the two apart." },
        { id: "no-u55l4-eibot", type: "vocab", front: "ei bot", reading: "eibot", meaning: "fine", example: { jp: "Han fikk ei bot fordi han kjørte for fort.", en: "He got a fine because he drove too fast." }, drill: { jp: "Hun fikk ei bot i går", en: "She got a fine yesterday" }, accept: ["a fine", "a penalty payment", "a ticket"], hint: "BOOT. Feminine: definite bota, plural bøter — ⚠ the vowel changes in the plural, exactly as in ei bok → bøker. Å bøte is to mend, and a fine is literally what mends the wrong." },
        { id: "no-u55l4-enforbryter", type: "vocab", front: "en forbryter", reading: "enforbryter", meaning: "criminal", example: { jp: "En forbryter ble tatt i går.", en: "A criminal was caught yesterday." }, drill: { jp: "En forbryter kom til byen", en: "A criminal came to the city" }, accept: ["an offender", "a crook", "a felon", "a lawbreaker"], hint: "for-BRUE-ter. For plus bryte, to break — the one who breaks what should not be broken. Masculine: definite forbryteren, plural forbrytere. En forbrytelse is the crime itself." },
        { id: "no-u55l4-astjele", type: "vocab", front: "å stjele", reading: "astjele", meaning: "to steal", example: { jp: "Noen stjal sykkelen min i natt.", en: "Someone stole my bicycle last night." }, drill: { jp: "Det er lett å stjele en sykkel", en: "It is easy to steal a bicycle" }, accept: ["steal", "to nick", "to rob", "to thieve"], hint: "SHE-le — stj is one broad hush sound, the same sh you met in en sjø. Present stjeler, past stjal, perfect har stjålet. En tyv is the thief." },
        { id: "no-u55l4-aanmelde", type: "vocab", front: "å anmelde", reading: "aanmelde", meaning: "to report to the police", example: { jp: "Hun anmeldte saka i går.", en: "She reported the matter to the police yesterday." }, drill: { jp: "Det er viktig å anmelde ei ulykke", en: "It is important to report an accident" }, accept: ["report", "to file a report", "to press charges", "to report a crime"], hint: "AN-mel-le. An- plus melde, to notify. Present anmelder, past anmeldte. ⚠ Second life: to anmelde a book or a film is to REVIEW it, and en anmeldelse is both a police report and a review." },
      ],
    },
  ],
};
