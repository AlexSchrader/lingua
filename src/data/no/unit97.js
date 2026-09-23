// NO Unit 97 — Etikk og ansvar (slot: ethics) — B2
// Retitled from the scaffold's English placeholder "Ethics and responsibility".
// B2 band conventions live in no/unit88.js's header; language-wide in unit1.js.
//
// ⚠️ et ansvar ITSELF IS u50l4 and is NOT re-taught here — which is exactly why
// this slot needed a plan rather than a word list. The learner already has the
// noun; what is missing is everything you do with it: ansvarlig, uansvarlig, å
// stå til ansvar, ei skyld, skyldig, uskyldig. u61 owns å krenke and en norm,
// u34 owns en verdi, u49 owns å lyve, u40 owns å angre, u2 owns å beklage —
// all used freely below, none re-taught.
//
// ⚠️ LESSON 2 IS THE GUARD 1 HAZARD OF THIS UNIT. ansvarlig / uansvarlig /
// skyldig / uskyldig are four adjectives an English speaker will gloss as
// "responsible" and "guilty" twice over. Each gloss below names the thing only
// that word does — whose job it is, how they acted, what a court found — and
// the pairs are deliberately kept in one lesson so the contrast is the lesson
// rather than an accident spread across four.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT97 = {
  id: "no-u97",
  lang: "no",
  title: "Etikk og ansvar",
  order: 97,
  stage: "b2",
  lessons: [
    {
      id: "no-u97l1",
      unit: 97,
      lesson: 1,
      title: "Etikk og moral",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about right and wrong as a subject — the field itself, a real dilemma, and what your conscience is doing about it.",
      items: [
        { id: "no-u97l1-enetikk", type: "vocab", front: "en etikk", reading: "enetikk", meaning: "ethics (the study of what one ought to do)", example: { jp: "Hvert fag har en etikk, og den er som regel skrevet ned etter at noe gikk galt.", en: "Every field has an ethics, and it is usually written down after something went wrong." }, accept: ["moral philosophy", "a code of conduct"], drill: { jp: "Faget har en etikk vi følger", en: "The field has an ethics we follow" }, hint: "en etikk → etikken. -ikk er hankjønn (unit88 regel B3). Etikk er FAGET; moral er hva folk faktisk gjør." },
        { id: "no-u97l1-etisk", type: "vocab", front: "etisk", reading: "etisk", meaning: "ethical (judged against a stated code)", example: { jp: "Det er et etisk problem, ikke et problem for loven, og derfor hjelper ikke loven deg.", en: "It is an ethical problem, not a problem for the law, and that is why the law does not help you." }, accept: ["by the rules of the field", "answering to a code"], drill: { jp: "Dette er et etisk krav", en: "This is an ethical requirement" }, hint: "Bøyes etisk, etiske. Etisk peker på en KODE noen har skrevet: etiske retningslinjer på jobben." },
        { id: "no-u97l1-moralsk", type: "vocab", front: "moralsk", reading: "moralsk", meaning: "moral (judged against what is simply right)", example: { jp: "Det var ikke mot loven, men de fleste mente det ikke var moralsk riktig.", en: "It was not against the law, but most people thought it was not morally right." }, accept: ["about right and wrong itself", "in conscience"], drill: { jp: "Dette er et moralsk valg", en: "This is a moral choice" }, hint: "Bøyes moralsk, moralske. ⚠️ Etisk (over) måles mot regler noen har skrevet; moralsk måles mot rett og galt sjøl. Ofte samme svar, ikke alltid." },
        { id: "no-u97l1-etdilemma", type: "vocab", front: "et dilemma", reading: "etdilemma", meaning: "dilemma (both choices cost you something real)", example: { jp: "Et dilemma har ikke et godt svar, bare to som koster ulikt.", en: "A dilemma does not have a good answer, only two that cost differently." }, accept: ["a hard choice both ways", "a no-win choice"], drill: { jp: "Her står vi i et dilemma", en: "Here we stand in a dilemma" }, hint: "et dilemma → dilemmaet, flertall dilemmaer. Gresk: to premisser. ⚠️ Et problem har en løsning; et dilemma har bare en avveining." },
        { id: "no-u97l1-ensamvittighet", type: "vocab", front: "en samvittighet", reading: "ensamvittighet", meaning: "conscience (the sense inside you that something is wrong)", example: { jp: "Han hadde en dårlig samvittighet i mange år, og ingen andre visste hvorfor.", en: "He had a bad conscience for many years, and nobody else knew why." }, accept: ["inner moral sense", "the voice that judges you"], drill: { jp: "Hun har en samvittighet som virker", en: "She has a conscience that works" }, hint: "en samvittighet → samvittigheten. -het er HANKJØNN (unit88 regel B3), aldri ei. Sammen + å vite. Fast uttrykk: dårlig samvittighet." },
        { id: "no-u97l1-enverdighet", type: "vocab", front: "en verdighet", reading: "enverdighet", meaning: "dignity (what a person is owed simply for being one)", example: { jp: "En verdighet kan ingen gi deg, men mange kan ta den fra deg.", en: "A dignity nobody can give you, but many can take it away from you." }, accept: ["human worth", "standing as a person"], drill: { jp: "Alle har en verdighet her", en: "Everybody has a dignity here" }, hint: "en verdighet → verdigheten. -het er HANKJØNN (unit88 regel B3). En verdi (u34) kan måles; en verdighet kan ikke og skal ikke." },
      ],
    },
    {
      id: "no-u97l2",
      unit: 97,
      lesson: 2,
      title: "Skyld og ansvar",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say precisely who answers for what — whose job it was, who acted carelessly, and what a court actually found.",
      items: [
        { id: "no-u97l2-ansvarlig", type: "vocab", front: "ansvarlig", reading: "ansvarlig", meaning: "the one whose job it is to answer for something", example: { jp: "Hun er ansvarlig for hele avdelinga, også når andre gjør feil.", en: "She is responsible for the whole department, also when other people make mistakes." }, accept: ["in charge of", "accountable for"], drill: { jp: "Han er ansvarlig for dette", en: "He is responsible for this" }, hint: "Et ansvar (u50) + -lig. Bøyes ansvarlig, ansvarlige. ⚠️ Sier hvem som SVARER, ikke hvem som gjorde det. En sjef er ansvarlig uten å ha vært der." },
        { id: "no-u97l2-uansvarlig", type: "vocab", front: "uansvarlig", reading: "uansvarlig", meaning: "reckless (acting with no thought for what follows)", example: { jp: "Det var uansvarlig å love det uten å spørre noen først.", en: "It was reckless to promise that without asking anybody first." }, accept: ["careless of consequences", "irresponsible"], drill: { jp: "Dette var et uansvarlig valg", en: "This was a reckless choice" }, hint: "u- + ansvarlig. ⚠️ Ikke det motsatte av å være ansvarlig — det er en DOM over hvordan noen handlet." },
        { id: "no-u97l2-eiskyld", type: "vocab", front: "ei skyld", reading: "eiskyld", meaning: "blame (being the one who caused it)", example: { jp: "De brukte et år på å finne ut hvem som hadde skylda, og ingenting ble bedre av det.", en: "They spent a year working out whose fault it was, and nothing got better for it." }, accept: ["fault", "the causing of it"], drill: { jp: "Ingen tar ei skyld her", en: "Nobody takes any blame here" }, hint: "ei skyld → skylda. Fast uttrykk: å få skylda, å ta skylda. NB: en gjeld (u79) er penger du skylder — beslektet ord, helt ulik bruk." },
        { id: "no-u97l2-skyldig", type: "vocab", front: "skyldig", reading: "skyldig", meaning: "guilty (found by a court to have done it)", example: { jp: "Retten fant ham skyldig, men bare på en av fire saker.", en: "The court found him guilty, but only on one of four counts." }, accept: ["found to have done it", "convicted"], drill: { jp: "Retten fant henne skyldig", en: "The court found her guilty" }, hint: "Fra ei skyld. Bøyes skyldig, skyldige. ⚠️ I en domstol (u92) er skyldig en AVGJØRELSE, ikke en mening. Fast uttrykk: å erklære seg skyldig." },
        { id: "no-u97l2-uskyldig", type: "vocab", front: "uskyldig", reading: "uskyldig", meaning: "innocent (did not do the thing at all)", example: { jp: "Du er uskyldig til noe annet er vist, og det er ikke det samme som at alle tror deg.", en: "You are innocent until something else is shown, and that is not the same as everybody believing you." }, accept: ["not the one who did it", "blameless"], drill: { jp: "Han var uskyldig hele tida", en: "He was innocent the whole time" }, hint: "u- + skyldig. ⚠️ To betydninger: ikke skyldig i noe, OG naiv — et uskyldig spørsmål. Sammenhengen avgjør." },
        { id: "no-u97l2-astatilansvar", type: "vocab", front: "å stå til ansvar", reading: "astatilansvar", meaning: "to answer for it (stand in front of people and account for it)", example: { jp: "Noen må stå til ansvar, og det blir sjelden den som tok valget.", en: "Somebody has to answer for it, and it is rarely the one who made the choice." }, accept: ["to be held to account", "to face the consequences"], drill: { jp: "Det er tungt å stå til ansvar", en: "It is hard to answer for it" }, hint: "Fast uttrykk, fire ord. Å stå (u7) + til + et ansvar. Du står til ansvar OVERFOR noen. Å være ansvarlig er en rolle; dette er en handling." },
      ],
    },
    {
      id: "no-u97l3",
      unit: 97,
      lesson: 3,
      title: "Når noen blir brukt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what is wrong when somebody is used or treated unequally — and say what fair treatment would look like.",
      items: [
        { id: "no-u97l3-autnytte", type: "vocab", front: "å utnytte", reading: "autnytte", meaning: "to exploit (use somebody's weak position for your own gain)", example: { jp: "De utnytter folk som ikke kjenner loven, og de vet nøyaktig hva de gjør.", en: "They exploit people who do not know the law, and they know exactly what they are doing." }, accept: ["to take advantage of", "to use unfairly"], drill: { jp: "Det er galt å utnytte noen", en: "It is wrong to exploit somebody" }, hint: "å utnytte → utnytter, utnyttet. Ut + nytte. ⚠️ To betydninger: å utnytte en sjanse er POSITIVT; å utnytte en person er ikke." },
        { id: "no-u97l3-eikrenking", type: "vocab", front: "ei krenking", reading: "eikrenking", meaning: "a violation (an act that takes somebody's dignity or right)", example: { jp: "Det var ei krenking, ikke en spøk, og forskjellen ligger hos den det gikk ut over.", en: "It was a violation, not a joke, and the difference lies with the person it happened to." }, accept: ["an infringement", "an affront to somebody"], drill: { jp: "Dette er ei krenking av henne", en: "This is a violation of her" }, hint: "ei krenking → krenkinga, flertall krenkinger. -ing er hunkjønn (unit88 regel B3). Fra å krenke (u61)." },
        { id: "no-u97l3-enurettferdighet", type: "vocab", front: "en urettferdighet", reading: "enurettferdighet", meaning: "an injustice (a specific wrong in how people were treated)", example: { jp: "Han så en urettferdighet han ikke kunne gjøre noe med, og det tok på ham.", en: "He saw an injustice he could do nothing about, and it wore on him." }, accept: ["an unfairness", "a wrong done"], drill: { jp: "Her er en urettferdighet vi ser", en: "Here is an injustice we can see" }, hint: "en urettferdighet → urettferdigheten. -het er HANKJØNN (unit88 regel B3). Fra rettferdig (u32) med u-. Tellelig: EN urettferdighet, én konkret sak." },
        { id: "no-u97l3-rettmessig", type: "vocab", front: "rettmessig", reading: "rettmessig", meaning: "rightful (what somebody is properly entitled to)", example: { jp: "Penger gikk til rettmessig eier til slutt, men det tok tre år.", en: "The money went to the rightful owner in the end, but it took three years." }, accept: ["properly entitled", "by right"], drill: { jp: "Hun er rettmessig eier her", en: "She is the rightful owner here" }, hint: "En rett (u32) + messig. Bøyes rettmessig, rettmessige. Rettferdig er om hva som FØLES riktig; rettmessig er om hva du har KRAV på." },
        { id: "no-u97l3-eilikebehandling", type: "vocab", front: "ei likebehandling", reading: "eilikebehandling", meaning: "equal treatment (the same rules applied to everybody)", example: { jp: "Ei likebehandling er ikke alltid rettferdig, for folk begynner ikke samme sted.", en: "Equal treatment is not always fair, because people do not begin in the same place." }, accept: ["treating all alike", "parity of treatment"], drill: { jp: "Vi krever ei likebehandling her", en: "We demand equal treatment here" }, hint: "ei likebehandling → likebehandlinga. -ing er hunkjønn (unit88 regel B3). Lik + å behandle (u25). Et krav i norsk arbeidsliv og i det offentlige (u78)." },
        { id: "no-u97l3-enintegritet", type: "vocab", front: "en integritet", reading: "enintegritet", meaning: "integrity (staying the same person when it costs you)", example: { jp: "En integritet koster noe, ellers er det bare noe du sier om deg selv.", en: "Integrity costs something, otherwise it is just something you say about yourself." }, accept: ["moral wholeness", "staying true under pressure"], drill: { jp: "Han har en integritet vi ser", en: "He has an integrity we can see" }, hint: "en integritet → integriteten. -itet er HANKJØNN (unit88 regel B3). ⚠️ Også om kroppen: personlig integritet er retten til å være i fred." },
      ],
    },
    {
      id: "no-u97l4",
      unit: 97,
      lesson: 4,
      title: "Ærlighet og åpenhet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about honesty at work — what is being hidden, whose interests collide, and when standing together is the point.",
      items: [
        { id: "no-u97l4-enaerlighet", type: "vocab", front: "en ærlighet", reading: "enaerlighet", meaning: "honesty (telling it as it is, including about yourself)", example: { jp: "En ærlighet som bare kommer når den er trygg, betyr lite.", en: "An honesty that only comes out when it is safe means little." }, accept: ["truthfulness", "being straight about things"], drill: { jp: "Vi setter pris på en ærlighet", en: "We value an honesty" }, hint: "en ærlighet → ærligheten. -het er HANKJØNN (unit88 regel B3), aldri ei. Fra ærlig (u31). æ folder til ae, så lesinga er enaerlighet." },
        { id: "no-u97l4-enlogn", type: "vocab", front: "en løgn", reading: "enlogn", meaning: "a lie (one thing said that the speaker knows is untrue)", example: { jp: "Det begynner med en løgn ingen tenker på, og så blir den for stor til å ta tilbake.", en: "It begins with a lie nobody thinks about, and then it becomes too big to take back." }, accept: ["an untruth told", "a falsehood"], drill: { jp: "Dette var en løgn fra første dag", en: "This was a lie from the first day" }, hint: "en løgn → løgnen, flertall løgner. Fra å lyve (u49). ø folder til o, så lesinga er enlogn. En feil er noe du ikke visste; en løgn visste du." },
        { id: "no-u97l4-enapenhet", type: "vocab", front: "en åpenhet", reading: "enapenhet", meaning: "openness (letting people see how the decision was made)", example: { jp: "En åpenhet om hva som ikke gikk bra er det som gjør at folk tror på resten.", en: "An openness about what did not go well is what makes people believe the rest." }, accept: ["transparency", "being open about things"], drill: { jp: "Dette krever en åpenhet vi savner", en: "This calls for an openness we lack" }, hint: "en åpenhet → åpenheten. -het er HANKJØNN (unit88 regel B3). Fra åpen (u7). En ærlighet er om ORD; en åpenhet er om hva du lar folk SE." },
        { id: "no-u97l4-eninteressekonflikt", type: "vocab", front: "en interessekonflikt", reading: "eninteressekonflikt", meaning: "conflict of interest (you would gain from the decision you are making)", example: { jp: "Han hadde en interessekonflikt og sa det selv, og slik skal det være.", en: "He had a conflict of interest and said so himself, and that is how it should be." }, accept: ["a clash of interests", "standing to gain from your own decision"], drill: { jp: "Her er en interessekonflikt vi ser", en: "Here is a conflict of interest we can see" }, hint: "en interessekonflikt → interessekonflikten. Ei interesse (u35) + en konflikt (u68). Du LØSER den ikke — du melder fra og går ut." },
        { id: "no-u97l4-solidarisk", type: "vocab", front: "solidarisk", reading: "solidarisk", meaning: "in solidarity (bearing a cost for somebody else's sake)", example: { jp: "De var solidarisk med dem som tapte mest, og det kostet dem noe selv.", en: "They were in solidarity with those who lost the most, and it cost them something themselves." }, accept: ["standing with others", "sharing the burden"], drill: { jp: "Vi må være solidarisk her", en: "We have to be in solidarity here" }, hint: "Bøyes solidarisk, solidariske. ⚠️ Solidarisk er ikke å være enig — det er å bære noe SAMMEN, også når det koster deg." },
        { id: "no-u97l4-umoralsk", type: "vocab", front: "umoralsk", reading: "umoralsk", meaning: "immoral (wrong, and the person knew it)", example: { jp: "Det er ikke umoralsk å ta feil, men det er umoralsk å skjule det etterpå.", en: "It is not immoral to be wrong, but it is immoral to hide it afterwards." }, accept: ["morally wrong", "wrong and knowingly so"], drill: { jp: "Dette var et umoralsk valg", en: "This was an immoral choice" }, hint: "u- + moralsk (l1). ⚠️ Umoralsk er en HARD dom i norsk — det sier at noen visste bedre. Uetisk er svakere: du brøt en regel." },
      ],
    },
  ],
};
