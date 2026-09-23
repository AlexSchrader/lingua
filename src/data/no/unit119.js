// NO Unit 119 — Feil, svikt og retting (slot: coverage-b2-9) — B2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 9 (B2)" — a slot number, not an instruction.
// Theme chosen here. Conventions: unit1.js §1–§9, unit51.js B1–B9, unit88.js
// C1–C7.
//
// WHY THIS THEME. The corpus has ONE word for a mistake — `en feil` (u50) — and
// `å ta feil`, `å misforstå` (u68), `å innrømme`, `å beklage` (u2). That is A2
// equipment for a B2 job. At B2 the whole argument is usually about WHAT KIND of
// error it was: a slip, a miscalculation, a fallacy, or a text that misleads
// without containing a single false sentence. Each of those is a different
// accusation with a different defence.
//   l1  naming the kind of error
//   l2  wrong without being a lie
//   l3  how it goes wrong
//   l4  putting it right in public
//
// ⚠ GENDER — the -ELSE AND -HET RULE (unit88.js C1) decides four fronts here:
// `en forglemmelse`, `en innrømmelse`, `en unøyaktighet` are ALL masculine,
// even though -else and -het both look like they should be feminine to an
// English eye. -ing and -ning are the feminine ones: `ei feilslutning`,
// `ei feilvurdering`. `en slurvefeil` and `en brist` inherit from `en feil`
// (u50) and from ordinary Bokmål respectively.
// FIRST FEMININE is `ei feilslutning` (l1) and carries the en-/ei- note.
//
// NOT TAKEN, and why:
//   • `ei misforståelse` — CUT. `å misforstå` is taught at u68, and a learner
//     who owns the verb owns the noun; that is the semantic test in unit51.js
//     B2, and it fails it. `en forglemmelse` passes the same test because
//     `å forglemme` is not in the corpus at all.
//   • `å feilvurdere` — CUT. It would sit in the same UNIT as `ei
//     feilvurdering`, which is two cards for one piece of learning.
//   • `å ta feil` (u50) is taught, so `å bomme` in l3 carries a hint saying
//     what separates them: you take feil about a FACT, you bomme on a TARGET.
//
// DRILLS: å-verb drills use an å-frame; adjective drills take a COMMON-GENDER
// SINGULAR subject so the front appears verbatim.
//
// SCOPE: the frozen base u1–u118 plus this unit's own earlier cards.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT119 = {
  id: "no-u119",
  lang: "no",
  title: "Feil, svikt og retting",
  order: 119,
  stage: "b2",
  lessons: [
    {
      id: "no-u119l1",
      unit: 119,
      lesson: 1,
      title: "Hva slags feil det er",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the kind of error you are pointing at — the name you choose decides how serious the accusation is.",
      items: [
        { id: "no-u119l1-eifeilslutning", type: "vocab", front: "ei feilslutning", reading: "eifeilslutning", meaning: "a fallacy (the reasoning does not follow)", example: { jp: "Tallene er riktige, men det de leser ut av dem er ei feilslutning ingen har rettet.", en: "The figures are correct, but what they read out of them is a fallacy nobody has corrected." }, accept: ["a false conclusion", "a logical error"], drill: { jp: "Her er ei feilslutning ingen har rettet", en: "Here is a fallacy nobody has corrected" }, hint: "ei feilslutning → feilslutninga. Hunkjønnsord kan du også skrive en feilslutning / feilslutningen, og den formen er den vanlige i fagtekst — merk begge. -ning er hunkjønn. En feil (u50) + slutning. ⚠ Angrepet på RESONNEMENTET, ikke på tallene: du kan ha ei feilslutning med helt riktige tall." },
        { id: "no-u119l1-eifeilvurdering", type: "vocab", front: "ei feilvurdering", reading: "eifeilvurdering", meaning: "a misjudgement (a decision that turned out wrong)", example: { jp: "Det var ei feilvurdering, og forskjellen fra ei feilslutning er at ingen kunne visst det på forhånd.", en: "It was a misjudgement, and the difference from a fallacy is that nobody could have known beforehand." }, accept: ["a misjudgement", "an error of judgement"], drill: { jp: "Det var ei feilvurdering og ikke mer", en: "It was a misjudgement and nothing more" }, hint: "ei feilvurdering → feilvurderinga. -ing er hunkjønn. En feil (u50) + ei vurdering (u71). ⚠ Den MILDESTE innrømmelsen en leder kan gjøre: du sier at valget var galt uten å si at det var uforsvarlig." },
        { id: "no-u119l1-enslurvefeil", type: "vocab", front: "en slurvefeil", reading: "enslurvefeil", meaning: "a careless slip (wrong because nobody checked)", example: { jp: "De kaller det en slurvefeil, men den står i den ene setninga alle skulle lese.", en: "They call it a careless slip, but it is in the one sentence everybody was supposed to read." }, accept: ["a careless mistake", "a slip"], drill: { jp: "De kaller det en slurvefeil her", en: "They call it a careless slip here" }, hint: "en slurvefeil → slurvefeilen, flertall slurvefeil (ubøyd). Å slurve + en feil (u50). ⚠ Hankjønn fordi en feil er det. Å kalle noe en slurvefeil er et FORSVAR: du innrømmer feilen og nekter for at den betyr noe." },
        { id: "no-u119l1-enforglemmelse", type: "vocab", front: "en forglemmelse", reading: "enforglemmelse", meaning: "an oversight (something simply left out)", example: { jp: "Navnet mangler på lista, og de sier at det er en forglemmelse og ingenting annet.", en: "The name is missing from the list, and they say it is an oversight and nothing else." }, accept: ["an omission", "a lapse"], drill: { jp: "Navnet mangler og det er en forglemmelse", en: "The name is missing and it is an oversight" }, hint: "en forglemmelse → forglemmelsen, flertall forglemmelser. ⚠ -else er ALLTID hankjønn. Skriftlig og litt høflig: du bruker det når du ikke vil si at noen glemte det med vilje." },
        { id: "no-u119l1-enbrist", type: "vocab", front: "en brist", reading: "enbrist", meaning: "a flaw (a weak point built into something)", example: { jp: "Det er en brist i selve modellen, og da hjelper det lite å regne den om igjen.", en: "There is a flaw in the model itself, and then recalculating it helps little." }, accept: ["a defect", "a crack"], drill: { jp: "Her er en brist ingen kan rette", en: "Here is a flaw nobody can correct" }, hint: "en brist → bristen, flertall brister. Fra å briste (å revne). ⚠ Om noe som er galt i KONSTRUKSJONEN, ikke i utførelsen: en brist i systemet, i loven, i et menneske. En feil kan rettes; en brist må bygges om." },
        { id: "no-u119l1-enunoyaktighet", type: "vocab", front: "en unøyaktighet", reading: "enunoyaktighet", meaning: "an inaccuracy (close, but not exact)", example: { jp: "Det er en unøyaktighet i teksten, og den er liten nok til at ingen vil ta den opp.", en: "There is an inaccuracy in the text, and it is small enough that nobody will take it up." }, accept: ["an imprecision", "an inexactness"], drill: { jp: "Det er en unøyaktighet i denne teksten", en: "There is an inaccuracy in this text" }, hint: "en unøyaktighet → unøyaktigheten, flertall unøyaktigheter. ⚠ -het er ALLTID hankjønn. Merk ø-folden: lesinga er enunoyaktighet. U- + nøyaktig. Ikke galt, bare ikke presist nok — det mildeste ordet i leksjonen." },
      ],
    },
    {
      id: "no-u119l2",
      unit: 119,
      lesson: 2,
      title: "Galt uten å være løgn",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Attack a text that is wrong without containing a false sentence — and say which of the four ways it is wrong.",
      items: [
        { id: "no-u119l2-upresis", type: "vocab", front: "upresis", reading: "upresis", meaning: "imprecise (true but too loose to use)", example: { jp: "Setninga er upresis, og derfor kan begge sider sitere den til sitt eget bruk.", en: "The sentence is imprecise, and that is why both sides can quote it for their own use." }, accept: ["vague", "not exact"], drill: { jp: "Setninga er upresis og altfor kort", en: "The sentence is imprecise and far too short" }, hint: "upresis → upresist, upresise. U- + presis. ⚠ Den svakeste av de fire kritikkene her: du sier at teksten ikke er god nok, ikke at den er gal." },
        { id: "no-u119l2-misvisende", type: "vocab", front: "misvisende", reading: "misvisende", meaning: "misleading (points the reader the wrong way)", example: { jp: "Tittelen er misvisende, og alt som står under den er riktig ord for ord.", en: "The title is misleading, and everything under it is correct word for word." }, accept: ["deceptive", "giving the wrong impression"], drill: { jp: "Tittelen er misvisende og ganske kort", en: "The title is misleading and rather short" }, hint: "misvisende, bøyes ikke — -ende-former er like i alle kjønn. Mis- + å vise (u20). ⚠ Det PRESISE ordet for en tekst som lyver uten å si noe galt. Sier ingenting om vilje — derfor er det trygt å bruke." },
        { id: "no-u119l2-feilaktig", type: "vocab", front: "feilaktig", reading: "feilaktig", meaning: "erroneous (plainly not so)", example: { jp: "Påstanden er feilaktig, og den står fortsatt på nettsida deres i dag.", en: "The claim is erroneous, and it is still on their web page today." }, accept: ["incorrect", "false"], drill: { jp: "Påstanden er feilaktig og ganske gammel", en: "The claim is erroneous and rather old" }, hint: "feilaktig → feilaktig, feilaktige. -ig-ord får ikke -t i intetkjønn. En feil (u50) + -aktig. ⚠ Det HARDE ordet: du sier at påstanden ikke stemmer. Misvisende sier bare at den leder galt." },
        { id: "no-u119l2-mangelfull", type: "vocab", front: "mangelfull", reading: "mangelfull", meaning: "deficient (too much is missing)", example: { jp: "Svaret er mangelfullt, og det som mangler er nettopp det saka handler om.", en: "The answer is deficient, and what is missing is exactly what the matter is about." }, accept: ["inadequate", "incomplete"], drill: { jp: "Svaret er mangelfull og altfor kort", en: "The answer is deficient and far too short" }, hint: "mangelfull → mangelfullt, mangelfulle. En mangel + full. ⚠ Om det som IKKE står der. Det vanligste ordet i norske tilsynsrapporter, og det er alvorlig når det står der." },
        { id: "no-u119l2-villedende", type: "vocab", front: "villedende", reading: "villedende", meaning: "deceptive (leads the reader astray on purpose)", example: { jp: "Reklamen er villedende, og det er et sterkere ord enn misvisende fordi det sier noe om hensikten.", en: "The advertisement is deceptive, and that is a stronger word than misleading because it says something about the intention." }, accept: ["misleading (deliberately)", "deceitful"], drill: { jp: "Reklamen er villedende og ganske ny", en: "The advertisement is deceptive and rather new" }, hint: "villedende, bøyes ikke. Vill + å lede. ⚠ Et JURIDISK ord i Norge: villedende markedsføring er forbudt og Forbrukertilsynet fører saker om det. Bruk det bare når du mener det." },
        { id: "no-u119l2-grunnlos", type: "vocab", front: "grunnløs", reading: "grunnlos", meaning: "groundless (nothing at all behind it)", example: { jp: "Kritikken er grunnløs, sier de, og likevel har ingen av dem vist fram det de bygger på.", en: "The criticism is groundless, they say, and still neither of them has shown what they are relying on." }, accept: ["unfounded", "baseless"], drill: { jp: "Kritikken er grunnløs og ganske gammel", en: "The criticism is groundless and rather old" }, hint: "grunnløs → grunnløst, grunnløse. Merk ø-folden: lesinga er grunnlos. En grunn (u32) + løs. ⚠ Sterkest av alle: du sier ikke at de tok feil, men at det aldri fantes noe å ta feil om." },
      ],
    },
    {
      id: "no-u119l3",
      unit: 119,
      lesson: 3,
      title: "Hvordan det går galt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the moment the error happened — and choose a verb that says how much blame goes with it.",
      items: [
        { id: "no-u119l3-aforveksle", type: "vocab", front: "å forveksle", reading: "aforveksle", meaning: "to mix up (take one thing for another)", example: { jp: "De forveksler de to tallene hver gang, og begge står i den samme tabellen.", en: "They mix up the two figures every time, and both are in the same table." }, accept: ["to confuse (two things)", "to mistake for"], drill: { jp: "Det er lett å forveksle de to tallene", en: "It is easy to mix up the two figures" }, hint: "å forveksle → forveksler, forvekslet, har forvekslet. For + å veksle. ⚠ Brukes med med: å forveksle A MED B. Fast vending: «må ikke forveksles med», som står i hver eneste ordbok." },
        { id: "no-u119l3-abomme", type: "vocab", front: "å bomme", reading: "abomme", meaning: "to miss the mark (aim at something and fail)", example: { jp: "Han bommer på hele poenget, og svaret hans er likevel det beste vi har.", en: "He misses the whole point, and his answer is still the best we have." }, accept: ["to miss", "to get it wrong"], drill: { jp: "Det er lett å bomme på hele poenget", en: "It is easy to miss the whole point" }, hint: "å bomme → bommer, bommet, har bommet. Fra ei bom. ⚠ Du tar feil om et FAKTUM (å ta feil, u50); du bommer på et MÅL — et poeng, en frist, et skudd. Brukes med på." },
        { id: "no-u119l3-aglippe", type: "vocab", front: "å glippe", reading: "aglippe", meaning: "to slip through (be lost by accident)", example: { jp: "Den ene saka glipper hver sommer, og ingen kan si hvem som skulle ha tatt den.", en: "That one case slips through every summer, and nobody can say who should have taken it." }, accept: ["to slip", "to fall through the cracks"], drill: { jp: "Slike saker pleier å glippe i ferien", en: "Such cases tend to slip through over the holiday" }, hint: "å glippe → glipper, glapp, har glippet. ⚠ SAKA er subjektet, ikke mennesket: noe glipper FOR deg. Derfor er det det mildeste ordet i leksjonen — det plasserer ingen skyld." },
        { id: "no-u119l3-arote", type: "vocab", front: "å rote", reading: "arote", meaning: "to make a mess of (muddle things up)", example: { jp: "De har rotet med fristene, og nå vet ingen hvilken regel som gjelder.", en: "They have made a mess of the deadlines, and now nobody knows which rule applies." }, accept: ["to muddle", "to mess up"], drill: { jp: "Det er lett å rote med slike frister", en: "It is easy to make a mess of such deadlines" }, hint: "å rote → roter, rotet, har rotet. ⚠ Muntlig og ganske hardt: «de har rotet» sier at noen ikke hadde orden. Brukes med med. Også konkret: å rote på rommet." },
        { id: "no-u119l3-atamunnenforfull", type: "vocab", front: "å ta munnen for full", reading: "atamunnenforfull", meaning: "to overstate one's case (promise more than one can back)", example: { jp: "Han tok munnen for full i avisa, og nå må hele avdelingen holde det han lovet.", en: "He overstated his case in the paper, and now the whole department has to deliver what he promised." }, accept: ["to overpromise", "to bite off more than one can chew"], drill: { jp: "Det er lett å ta munnen for full", en: "It is easy to overstate one's case" }, hint: "å ta munnen for full → tar, tok, har tatt. En munn + for full. ⚠ Et fast uttrykk og svært vanlig i norsk; det er mildt og nesten vennlig, som å si at noen ble revet med." },
        { id: "no-u119l3-aundersla", type: "vocab", front: "å underslå", reading: "aundersla", meaning: "to suppress (leave out what would change the answer)", example: { jp: "Teksten underslår den ene undersøkelsen som peker andre veien, og den er nevnt i en fotnote.", en: "The text suppresses the one study that points the other way, and it is mentioned in a footnote." }, accept: ["to withhold", "to leave out (deliberately)"], drill: { jp: "Det går an å underslå en hel undersøkelse", en: "It is possible to suppress a whole study" }, hint: "å underslå → underslår, underslo, har underslått. Under + å slå. Merk å-folden: lesinga er aundersla. ⚠ To betydninger og begge er alvorlige: å stjele penger man har ansvar for, OG å holde tilbake opplysninger. Her: den andre." },
      ],
    },
    {
      id: "no-u119l4",
      unit: 119,
      lesson: 4,
      title: "Å rette opp i det offentlige",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Correct yourself in public — and pick the form that gives back exactly as much as you meant to give back.",
      items: [
        { id: "no-u119l4-akorrigere", type: "vocab", front: "å korrigere", reading: "akorrigere", meaning: "to correct (adjust a figure or a course)", example: { jp: "De korrigerer tallet uten å si noe, og den gamle teksten ligger fortsatt på nett.", en: "They correct the figure without saying anything, and the old text is still online." }, accept: ["to adjust", "to amend"], drill: { jp: "Det er lett å korrigere et slikt tall", en: "It is easy to correct a figure like that" }, hint: "å korrigere → korrigerer, korrigerte, har korrigert. ⚠ Kjølig og teknisk: du korrigerer et tall, en kurs, en antakelse. Om et MENNESKE blir det raskt nedlatende — «hun korrigerte ham»." },
        { id: "no-u119l4-aretteopp", type: "vocab", front: "å rette opp", reading: "aretteopp", meaning: "to put right (repair the damage, not just the text)", example: { jp: "De rettet opp feilen på nettsida, men de som hadde lest den gamle fikk aldri vite noe.", en: "They put the error right on the web page, but those who had read the old one were never told." }, accept: ["to rectify", "to make good"], drill: { jp: "De prøver å rette opp den gamle feilen", en: "They are trying to put the old error right" }, hint: "å rette opp → retter, rettet, har rettet. Å rette + opp. ⚠ Å korrigere endrer tallet; å rette opp gjør SKADEN god igjen. Fast vending: «å rette opp i noe»." },
        { id: "no-u119l4-eninnrommelse", type: "vocab", front: "en innrømmelse", reading: "eninnrommelse", meaning: "a concession (an admission that costs you something)", example: { jp: "Brevet er en innrømmelse, og det er nettopp derfor det er skrevet så vanskelig.", en: "The letter is a concession, and that is exactly why it is written so awkwardly." }, accept: ["an admission", "a concession"], drill: { jp: "Brevet er en innrømmelse og ikke mer", en: "The letter is a concession and nothing more" }, hint: "en innrømmelse → innrømmelsen, flertall innrømmelser. ⚠ -else er ALLTID hankjønn. Merk ø-folden: lesinga er eninnrommelse. Fra å innrømme (u49). To bruk: å gi motparten rett, og å gi etter i en forhandling." },
        { id: "no-u119l4-atilbakekalle", type: "vocab", front: "å tilbakekalle", reading: "atilbakekalle", meaning: "to withdraw (take back something already issued)", example: { jp: "De tilbakekaller hele rundskrivet, og ingen sier hvilken setning i det som var gal.", en: "They are withdrawing the whole circular, and nobody says which sentence in it was wrong." }, accept: ["to recall", "to revoke"], drill: { jp: "Det går an å tilbakekalle et helt rundskriv", en: "It is possible to withdraw a whole circular" }, hint: "å tilbakekalle → tilbakekaller, tilbakekalte, har tilbakekalt. Tilbake + å kalle (u58). ⚠ Om noe som alt er SENDT UT: et skriv, en tillatelse, en vare. Du tilbakekaller ikke en mening." },
        { id: "no-u119l4-adementere", type: "vocab", front: "å dementere", reading: "adementere", meaning: "to deny publicly (say the report is wrong)", example: { jp: "De dementerer saka samme dag, og det er ofte det som gjør at flere leser den.", en: "They publicly deny the story the same day, and that is often what makes more people read it." }, accept: ["to issue a denial", "to refute publicly"], drill: { jp: "De pleier å dementere slike saker fort", en: "They tend to publicly deny such stories quickly" }, hint: "å dementere → dementerer, dementerte, har dementert. ⚠ Alltid OFFENTLIG og alltid om en MELDING som er ute: du dementerer et rykte (u49), ikke en feil du selv gjorde." },
        { id: "no-u119l4-ataforbehold", type: "vocab", front: "å ta forbehold", reading: "ataforbehold", meaning: "to enter a reservation (agree, but not to all of it)", example: { jp: "Hun tar forbehold om tallene, og resten av styret skriver under uten å lese dem.", en: "She enters a reservation about the figures, and the rest of the board signs without reading them." }, accept: ["to make a reservation", "to qualify one's assent"], drill: { jp: "Hun pleier å ta forbehold om tallene", en: "She tends to enter a reservation about the figures" }, hint: "å ta forbehold → tar, tok, har tatt. Å ta + et forbehold (u73). ⚠ Brukes med om. Det er en FORHÅNDSRETTING: du sier på forhånd hvilken del du ikke går god for." },
      ],
    },
  ],
};
