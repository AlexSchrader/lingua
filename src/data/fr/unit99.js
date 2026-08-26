// FR Unit 99 — La politique et le droit (slot: politics and law) — B2
// A2+B1 taught the civics layer (l'État, le pouvoir, le gouvernement, la loi, le
// citoyen, voter, l'élection, le parti, la démocratie, la justice u62). B2 goes
// up to the institutional/legal register: law-making (la législation, le décret,
// promulguer, ratifier), the machinery of state (la souveraineté, la
// constitution, le mandat, la juridiction), political life (l'opposition, le
// scrutin, siéger, destituer) and the courts (le tribunal, le verdict, condamner,
// l'accusé). Fronts checked against the 2,168 live fr fronts. Conventions: fr/unit1.js.
export const FR_UNIT99 = {
  id: "fr-u99",
  lang: "fr",
  title: "La politique et le droit",
  order: 99,
  stage: "b2",
  lessons: [
    {
      id: "fr-u99l1",
      unit: 99,
      lesson: 1,
      title: "Making law",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about how laws are made: la législation, un décret, promulguer, un amendement.",
      items: [
        { id: "fr-u99l1-lalegislation", type: "vocab", front: "la législation", reading: "lalegislation", meaning: "the legislation", example: { jp: "La législation sur le travail a beaucoup changé.", en: "The legislation on work has changed a lot." }, accept: ["legislation", "the laws"], hint: "The body of laws on a subject — la législation en vigueur. From légal." },
        { id: "fr-u99l1-ledecret", type: "vocab", front: "le décret", reading: "ledecret", meaning: "the decree", example: { jp: "Ce nouveau décret change plusieurs règles.", en: "This new decree changes several rules." }, accept: ["decree", "the order"], hint: "A rule issued by the government, not voted by parliament — publier un décret." },
        { id: "fr-u99l1-promulguer", type: "vocab", front: "promulguer", reading: "promulguer", meaning: "to enact", example: { jp: "Le président a promulgué cette loi hier.", en: "The president enacted this law yesterday." }, accept: ["to enact", "to pass into law", "to promulgate"], hint: "To sign a voted law into force — promulguer une loi. The final step." },
        { id: "fr-u99l1-ratifier", type: "vocab", front: "ratifier", reading: "ratifier", meaning: "to ratify", example: { jp: "Les deux pays ont ratifié cet accord.", en: "The two countries ratified this agreement." }, accept: ["to ratify", "to approve"], hint: "To formally approve a treaty or agreement — ratifier un traité." },
        { id: "fr-u99l1-abroger", type: "vocab", front: "abroger", reading: "abroger", meaning: "to repeal", example: { jp: "Le gouvernement veut abroger cette loi.", en: "The government wants to repeal this law." }, accept: ["to repeal", "to abolish", "to strike down"], hint: "To cancel a law — abroger une loi. The opposite of promulguer." },
        { id: "fr-u99l1-lamendement", type: "vocab", front: "l'amendement", reading: "lamendement", meaning: "the amendment", example: { jp: "Cet amendement change un seul point de la loi.", en: "This amendment changes just one point of the law." }, accept: ["amendment"], hint: "A proposed change to a bill or law — voter un amendement. From amender." },
      ],
    },
    {
      id: "fr-u99l2",
      unit: 99,
      lesson: 2,
      title: "The machinery of state",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name the institutions of power: la souveraineté, la constitution, un mandat, la juridiction.",
      items: [
        { id: "fr-u99l2-lasouverainete", type: "vocab", front: "la souveraineté", reading: "lasouverainete", meaning: "sovereignty", example: { jp: "Ce pays tient beaucoup à sa souveraineté.", en: "This country cares a lot about its sovereignty." }, accept: ["sovereignty"], hint: "A state's power to rule itself — la souveraineté nationale. From souverain." },
        { id: "fr-u99l2-laconstitution", type: "vocab", front: "la constitution", reading: "laconstitution", meaning: "the constitution", example: { jp: "La constitution garantit la liberté de chacun.", en: "The constitution guarantees everyone's freedom." }, accept: ["constitution"], hint: "The founding law of a country — la Constitution française. Also 'making-up'." },
        { id: "fr-u99l2-linstitution", type: "vocab", front: "l'institution", reading: "linstitution", meaning: "the institution", example: { jp: "Ces institutions existent depuis longtemps.", en: "These institutions have existed for a long time." }, accept: ["institution", "the body"], hint: "An established body of the state or society — les institutions de la République." },
        { id: "fr-u99l2-lemandat", type: "vocab", front: "le mandat", reading: "lemandat", meaning: "the term of office", example: { jp: "Son mandat dure cinq années.", en: "His term of office lasts five years." }, accept: ["term of office", "the mandate", "the term"], hint: "A term in office, or authority given — un mandat de cinq ans. Also a money order." },
        { id: "fr-u99l2-lajuridiction", type: "vocab", front: "la juridiction", reading: "lajuridiction", meaning: "the jurisdiction", example: { jp: "Ce problème dépasse la juridiction de ce tribunal.", en: "This problem is beyond this court's jurisdiction." }, accept: ["jurisdiction", "the authority"], hint: "The area over which a court or body has authority — relever de la juridiction de." },
        { id: "fr-u99l2-lacoalition", type: "vocab", front: "la coalition", reading: "lacoalition", meaning: "the coalition", example: { jp: "Une coalition de partis dirige le pays.", en: "A coalition of parties runs the country." }, accept: ["coalition", "the alliance"], hint: "An alliance of parties or states — former une coalition." },
      ],
    },
    {
      id: "fr-u99l3",
      unit: 99,
      lesson: 3,
      title: "Political life",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Follow the political game: l'opposition, un scrutin, siéger, un référendum.",
      items: [
        { id: "fr-u99l3-lopposition", type: "vocab", front: "l'opposition", reading: "lopposition", meaning: "the opposition", example: { jp: "L'opposition va voter contre cette loi.", en: "The opposition is going to vote against this law." }, accept: ["opposition", "the opposition party"], hint: "The parties not in power — les partis de l'opposition. From s'opposer." },
        { id: "fr-u99l3-lescrutin", type: "vocab", front: "le scrutin", reading: "lescrutin", meaning: "the ballot", example: { jp: "Ce scrutin va décider de l'avenir du pays.", en: "This ballot will decide the country's future." }, accept: ["ballot", "the vote", "the poll"], hint: "The vote / balloting itself — le scrutin de dimanche. Also the way of counting: scrutin proportionnel." },
        { id: "fr-u99l3-sieger", type: "vocab", front: "siéger", reading: "sieger", meaning: "to sit (on a body)", example: { jp: "Chaque élu a le droit de siéger et de voter.", en: "Each elected member has the right to sit and to vote." }, accept: ["to sit on a body", "to have a seat", "to be a member"], hint: "To hold a seat in an assembly — siéger au parlement. From le siège, the seat." },
        { id: "fr-u99l3-lereferendum", type: "vocab", front: "le référendum", reading: "lereferendum", meaning: "the referendum", example: { jp: "On va décider cette question par référendum.", en: "This question will be decided by referendum." }, accept: ["referendum"], hint: "A direct vote of the people on one question — organiser un référendum." },
        { id: "fr-u99l3-lelu", type: "vocab", front: "l'élu", reading: "lelu", meaning: "the elected official", example: { jp: "Les élus ont voté cette loi hier soir.", en: "The elected officials voted this law last night." }, accept: ["elected official", "the representative", "the councillor"], hint: "Someone voted into office — un élu local. The past participle of élire, to elect." },
        { id: "fr-u99l3-destituer", type: "vocab", front: "destituer", reading: "destituer", meaning: "to remove from office", example: { jp: "Après le scandale, on a voulu le destituer.", en: "After the scandal, they wanted to remove him from office." }, accept: ["to remove from office", "to dismiss", "to impeach"], hint: "To force someone out of office — destituer un président. Formal." },
      ],
    },
    {
      id: "fr-u99l4",
      unit: 99,
      lesson: 4,
      title: "The courts",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a case in court: un tribunal, un verdict, condamner, l'accusé.",
      items: [
        { id: "fr-u99l4-letribunal", type: "vocab", front: "le tribunal", reading: "letribunal", meaning: "the court", example: { jp: "Cette histoire finira au tribunal.", en: "This story will end up in court." }, accept: ["court", "the courthouse", "the tribunal"], hint: "A court of law — porter une affaire devant le tribunal." },
        { id: "fr-u99l4-leverdict", type: "vocab", front: "le verdict", reading: "leverdict", meaning: "the verdict", example: { jp: "Personne ne connaît encore le verdict.", en: "Nobody knows the verdict yet." }, accept: ["verdict"], hint: "The court's decision — rendre son verdict. From the Latin 'truly said'." },
        { id: "fr-u99l4-condamner", type: "vocab", front: "condamner", reading: "condamner", meaning: "to convict", example: { jp: "Le tribunal l'a condamné à une forte amende.", en: "The court sentenced him to a heavy fine." }, accept: ["to convict", "to sentence", "to condemn"], hint: "To find guilty / sentence — condamner à deux ans. Also to condemn an act." },
        { id: "fr-u99l4-laccuse", type: "vocab", front: "l'accusé", reading: "laccuse", meaning: "the defendant", example: { jp: "L'accusé affirme être innocent.", en: "The defendant claims to be innocent." }, accept: ["defendant", "the accused"], hint: "The person on trial — from accuser. l'accusée for a woman." },
        { id: "fr-u99l4-poursuivre", type: "vocab", front: "poursuivre", reading: "poursuivre", meaning: "to prosecute", example: { jp: "Ils ont décidé de le poursuivre en justice.", en: "They decided to prosecute him." }, accept: ["to prosecute", "to sue", "to pursue"], hint: "poursuivre en justice = to take to court. Also just to pursue / continue." },
        { id: "fr-u99l4-lelitige", type: "vocab", front: "le litige", reading: "lelitige", meaning: "the dispute", example: { jp: "Ce vieux litige dure depuis des années.", en: "This old dispute has lasted for years." }, accept: ["dispute", "the legal dispute", "the disagreement"], hint: "A legal dispute — un litige entre voisins. From litigieux, contentious." },
      ],
    },
  ],
};
