// NO Unit 97 — Etikk og ansvar (slot: ethics) — B2
// Block 1 of Norwegian B2. Band constitution: no/unit88.js §C1–C7.
//
// Blocked before authoring: `et ansvar` u50, `et hensyn` u61, `rettferdig` u55,
// `å angre` u40, `å krenke` u61, `å svikte` u60, `ærlig` u31, `en norm` u61,
// `respekt` u73, `omsorg` u68, `ei plikt`. The A2/B1 bands own the WORDS FOR
// BEING GOOD, so this unit is the harder layer: judging right from wrong (l1),
// what it feels like from the inside (l2), what you do to other people (l3),
// and the duties that come with a job rather than with being a person (l4).
//
// `ei krenking` was cut as a transparent derivation of `å krenke` (u61),
// `ei urettferdighet` and `ei uærlighet` as ones of `rettferdig` (u55) and
// `ærlig` (u31), and `et misbruk` as one of `å misbruke` (l3).
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
      title: "Rett og galt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Argue about right and wrong in Norwegian — call something ethical or not, name the dilemma, and weigh two bad options against each other.",
      items: [
        { id: "no-u97l1-enmoral", type: "vocab", front: "en moral", reading: "enmoral", meaning: "morality", example: { jp: "Moralen i saka er klar, men loven sier noe helt annet.", en: "The morality of the case is clear, but the law says something quite different." }, accept: ["morals", "moral sense"], drill: { jp: "Her er det en moral alle kjenner", en: "Here there is a morality everybody knows" }, hint: "en moral → moralen. Står oftest uten artikkel: å ha god moral. Også slutten på et eventyr: moralen er at ..." },
        { id: "no-u97l1-etisk", type: "vocab", front: "etisk", reading: "etisk", meaning: "ethical", example: { jp: "Det er lovlig, men mange mener at det ikke er etisk.", en: "It is lawful, but many think that it is not ethical." }, accept: ["moral", "principled"], drill: { jp: "Dette er ikke etisk i det hele tatt", en: "This is not ethical at all" }, hint: "etisk → etisk, etiske. Etikk er faget og moralen er det folk faktisk gjør, men i praksis brukes ordene om hverandre." },
        { id: "no-u97l1-uetisk", type: "vocab", front: "uetisk", reading: "uetisk", meaning: "unethical", example: { jp: "Alle visste at det var uetisk, og ingen sa noe.", en: "Everybody knew it was unethical, and nobody said anything." }, accept: ["immoral", "morally wrong"], drill: { jp: "Hele saka var helt uetisk", en: "The whole case was completely unethical" }, hint: "uetisk → uetisk, uetiske. U- + etisk. Sterkere enn dumt (u31), svakere enn ulovlig (u92) — og de to overlapper bare delvis." },
        { id: "no-u97l1-etdilemma", type: "vocab", front: "et dilemma", reading: "etdilemma", meaning: "dilemma", example: { jp: "Det er et dilemma uten god løsning, og de visste det på forhånd.", en: "It is a dilemma with no good solution, and they knew it beforehand." }, accept: ["a quandary", "a moral dilemma"], drill: { jp: "Dette er et dilemma uten svar", en: "This is a dilemma without an answer" }, hint: "et dilemma → dilemmaet, flertall dilemmaer. Gresk: to dører, begge dårlige. Ikke bare et vanskelig valg — begge valgene må koste noe." },
        { id: "no-u97l1-enurett", type: "vocab", front: "en urett", reading: "enurett", meaning: "wrong (injustice)", example: { jp: "Det ble gjort en urett, og ingen har sagt unnskyld ennå.", en: "A wrong was done, and nobody has said sorry yet." }, accept: ["an injustice", "a wrongdoing"], drill: { jp: "Her er det gjort en urett", en: "A wrong has been done here" }, hint: "en urett → uretten. U- + en rett. Står oftest uten artikkel: å lide urett. Urettferdig er adjektivet." },
        { id: "no-u97l1-aveie", type: "vocab", front: "å veie", reading: "aveie", meaning: "to weigh up", example: { jp: "Du må veie de to mot hverandre, og begge koster noe.", en: "You have to weigh the two against each other, and both of them cost something." }, accept: ["to balance", "to weigh"], drill: { jp: "Det er viktig å veie begge sider", en: "It is important to weigh both sides" }, hint: "å veie → veier, veide. Både på vekta og i hodet. Ei avveining (u91) er resultatet av det siste." },
      ],
    },
    {
      id: "no-u97l2",
      unit: 97,
      lesson: 2,
      title: "Samvittighet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about conscience in Norwegian — remorse, integrity, justifying yourself, and the quiet care that shows in how somebody acts.",
      items: [
        { id: "no-u97l2-ensamvittighet", type: "vocab", front: "en samvittighet", reading: "ensamvittighet", meaning: "conscience", example: { jp: "Samvittigheten hans er god, men det sier ikke så mye.", en: "His conscience is clear, but that does not say much." }, accept: ["a conscience"], drill: { jp: "Han har en samvittighet som plager ham", en: "He has a conscience that troubles him" }, hint: "en samvittighet → samvittigheten. -het-ord er hankjønn (regel 1), aldri ei. Sam + å vite (u12). «Dårlig samvittighet» er et av de aller vanligste uttrykkene i norsk." },
        { id: "no-u97l2-enanger", type: "vocab", front: "en anger", reading: "enanger", meaning: "remorse", example: { jp: "Angeren kom for sent, og da var alt allerede gjort.", en: "The remorse came too late, and by then everything was already done." }, accept: ["regret", "repentance"], drill: { jp: "Her er det en anger som varer", en: "Here there is a remorse that lasts" }, hint: "en anger → angeren. Står oftest uten artikkel: å føle anger. Fra å angre (u40). Sterkere enn å være lei seg." },
        { id: "no-u97l2-enintegritet", type: "vocab", front: "en integritet", reading: "enintegritet", meaning: "integrity", example: { jp: "Integriteten hans kostet ham jobben, og han angrer ikke.", en: "His integrity cost him his job, and he does not regret it." }, accept: ["moral integrity", "uprightness"], drill: { jp: "Hun har en integritet folk stoler på", en: "She has an integrity people trust" }, hint: "en integritet → integriteten. -itet-ord er hankjønn (regel 1), aldri ei. Å være hel: du gjør det samme når ingen ser på." },
        { id: "no-u97l2-arettferdiggjore", type: "vocab", front: "å rettferdiggjøre", reading: "arettferdiggjore", meaning: "to justify (morally)", example: { jp: "Ingenting kan rettferdiggjøre det, men mange prøver likevel.", en: "Nothing can justify it, but many people try all the same." }, accept: ["to vindicate", "to defend (morally)"], drill: { jp: "Det er umulig å rettferdiggjøre dette", en: "It is impossible to justify this" }, hint: "å rettferdiggjøre → rettferdiggjør, rettferdiggjorde. Merk ø-folden: lesinga er arettferdiggjore. Å begrunne (u78) er å gi grunner; dette er å gjøre noe galt til noe rett." },
        { id: "no-u97l2-hensynsfull", type: "vocab", front: "hensynsfull", reading: "hensynsfull", meaning: "considerate (of other people)", example: { jp: "Han er hensynsfull mot alle, og det tar tid.", en: "He is considerate towards everybody, and that takes time." }, accept: ["thoughtful", "mindful of others", "considerate"], drill: { jp: "Hun er hensynsfull mot alle andre", en: "She is considerate towards everybody else" }, hint: "hensynsfull → hensynsfullt, hensynsfulle. Et hensyn (u61) + full. Å ta hensyn er verbet, og hensynsløs er det motsatte." },
        { id: "no-u97l2-enomtanke", type: "vocab", front: "en omtanke", reading: "enomtanke", meaning: "care (thoughtfulness)", example: { jp: "Det er omtanke bak alt hun gjør, også når det ikke ser sånn ut.", en: "There is care behind everything she does, even when it does not look like it." }, accept: ["consideration", "concern"], drill: { jp: "Her er det en omtanke vi ser", en: "Here there is a care we can see" }, hint: "en omtanke → omtanken. Står oftest uten artikkel: å vise omtanke. Om + en tanke. Omsorg (u68) er å gjøre noe; omtanke er å tenke på noen." },
      ],
    },
    {
      id: "no-u97l3",
      unit: 97,
      lesson: 3,
      title: "Å svikte andre",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what people do to each other in Norwegian — betrayal, exploitation, abuse of power, and the harm done by not acting at all.",
      items: [
        { id: "no-u97l3-etsvik", type: "vocab", front: "et svik", reading: "etsvik", meaning: "betrayal", example: { jp: "Det var et svik, og alle rundt henne visste det.", en: "It was a betrayal, and everybody around her knew it." }, accept: ["treachery", "a breach of trust"], drill: { jp: "Dette var et svik mot alle", en: "This was a betrayal of everybody" }, hint: "et svik → sviket, flertall svik. Fra å svikte (u60). Sterkere enn en feil (u50): et svik er villet." },
        { id: "no-u97l3-autnytte", type: "vocab", front: "å utnytte", reading: "autnytte", meaning: "to exploit", example: { jp: "De utnytter folk som ikke kan språket godt nok.", en: "They exploit people who do not know the language well enough." }, accept: ["to take advantage of", "to use (unfairly)"], drill: { jp: "Det er lett å utnytte slike regler", en: "It is easy to exploit rules like these" }, hint: "å utnytte → utnytter, utnyttet. ⚠ To liv med helt ulik verdi: å utnytte en sjanse (u24) er bra, å utnytte en person er det ikke." },
        { id: "no-u97l3-amisbruke", type: "vocab", front: "å misbruke", reading: "amisbruke", meaning: "to misuse (abuse)", example: { jp: "Han misbrukte systemet i mange år, og ingen stoppet ham.", en: "He misused the system for many years, and nobody stopped him." }, accept: ["to abuse", "to use wrongly"], drill: { jp: "Det er lett å misbruke slik makt", en: "It is easy to misuse power like that" }, hint: "å misbruke → misbruker, misbrukte. Mis- + å bruke (u17). Et misbruk er resultatet. Brukt om makt (u55), om tillit og om stoff (u42)." },
        { id: "no-u97l3-etovergrep", type: "vocab", front: "et overgrep", reading: "etovergrep", meaning: "abuse (violation)", example: { jp: "Det er et overgrep mot folk som ikke kan svare for seg.", en: "It is a violation against people who cannot speak for themselves." }, accept: ["an assault", "a violation"], drill: { jp: "Dette er et overgrep mot alle", en: "This is a violation against everybody" }, hint: "et overgrep → overgrepet, flertall overgrep. Over + et grep. Både om vold mot enkeltpersoner og om makt brukt mot hele grupper (u68)." },
        { id: "no-u97l3-aunnlate", type: "vocab", front: "å unnlate", reading: "aunnlate", meaning: "to fail to (omit)", example: { jp: "Hun unnlot å si det, og saka ble mye verre av det.", en: "She failed to say it, and the case got much worse as a result." }, accept: ["to omit", "to refrain from"], drill: { jp: "Det er galt å unnlate å svare", en: "It is wrong to fail to answer" }, hint: "å unnlate → unnlater, unnlot. Alltid med å + verb: å unnlate å svare. Ei unnlatelse kan straffes like hardt som en handling (u64)." },
        { id: "no-u97l3-aforsomme", type: "vocab", front: "å forsømme", reading: "aforsomme", meaning: "to neglect", example: { jp: "De forsømte barna i mange år, og ingen grep inn.", en: "They neglected the children for many years, and nobody stepped in." }, accept: ["to fail (in a duty)", "to let slide"], drill: { jp: "Det er lett å forsømme slike ting", en: "It is easy to neglect things like these" }, hint: "å forsømme → forsømmer, forsømte. Merk ø-folden: lesinga er aforsomme. Du gjør ikke noe galt — du lar være å gjøre det du skulle. Ei forsømmelse er resultatet." },
      ],
    },
    {
      id: "no-u97l4",
      unit: 97,
      lesson: 4,
      title: "Plikt og åpenhet",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Handle the duties that come with a role in Norway — obligations, equal treatment, confidentiality, openness, and stepping aside when you are conflicted.",
      items: [
        { id: "no-u97l4-enforpliktelse", type: "vocab", front: "en forpliktelse", reading: "enforpliktelse", meaning: "obligation (undertaken)", example: { jp: "Det er en forpliktelse, ikke et tilbud, og det står i avtalen.", en: "It is an obligation, not an offer, and it is in the agreement." }, accept: ["a commitment", "a duty"], drill: { jp: "Dette er en forpliktelse vi har", en: "This is an obligation we have" }, hint: "en forpliktelse → forpliktelsen, flertall forpliktelser. -else-ord er hankjønn (regel 1), aldri ei. Ei plikt er noe du HAR; en forpliktelse er noe du har TATT PÅ DEG." },
        { id: "no-u97l4-eilikebehandling", type: "vocab", front: "ei likebehandling", reading: "eilikebehandling", meaning: "equal treatment", example: { jp: "Likebehandling står i loven, men den er vanskelig å måle.", en: "Equal treatment is in the law, but it is hard to measure." }, accept: ["equal consideration", "non-discrimination"], drill: { jp: "Alle har krav på ei likebehandling", en: "Everybody has a right to equal treatment" }, hint: "ei likebehandling → likebehandlinga. -ing-ord er hunkjønn; likebehandlingen er vanlig i trykk. Lik + ei behandling (u25). Ikke det samme som likestilling (u68), som gjelder kjønn." },
        { id: "no-u97l4-entaushetsplikt", type: "vocab", front: "en taushetsplikt", reading: "entaushetsplikt", meaning: "duty of confidentiality", example: { jp: "Legen har taushetsplikt, og den gjelder også etterpå.", en: "The doctor has a duty of confidentiality, and it applies afterwards too." }, accept: ["professional secrecy", "confidentiality"], drill: { jp: "Hun har en taushetsplikt hun holder", en: "She has a duty of confidentiality she keeps" }, hint: "en taushetsplikt → taushetsplikten. Ei taushet + ei plikt. Gjelder leger (u11), lærere (u3) og advokater (u92) — og den varer livet ut." },
        { id: "no-u97l4-enapenhet", type: "vocab", front: "en åpenhet", reading: "enapenhet", meaning: "openness (transparency)", example: { jp: "Åpenhet koster lite, men den er vanskelig å begynne med.", en: "Openness costs little, but it is hard to get started on." }, accept: ["transparency", "candour"], drill: { jp: "Vi trenger en åpenhet som varer", en: "We need an openness that lasts" }, hint: "en åpenhet → åpenheten. -het-ord er hankjønn (regel 1), aldri ei. Fra åpen (u7). I norsk forvaltning (u92) er åpenhet hovedregelen, ikke unntaket." },
        { id: "no-u97l4-inhabil", type: "vocab", front: "inhabil", reading: "inhabil", meaning: "disqualified (conflicted)", example: { jp: "Han var inhabil i saka, men var med på vedtaket likevel.", en: "He was disqualified in the case, but took part in the decision anyway." }, accept: ["conflicted", "not impartial"], drill: { jp: "Hun er inhabil i denne saka", en: "She is disqualified in this case" }, hint: "inhabil → inhabilt, inhabile. In- + habil. Du kan ikke avgjøre saka fordi du selv har noe å tjene på den. Habil er det motsatte." },
        { id: "no-u97l4-eninteressekonflikt", type: "vocab", front: "en interessekonflikt", reading: "eninteressekonflikt", meaning: "conflict of interest", example: { jp: "Det er en interessekonflikt her, og ingen vil snakke om den.", en: "There is a conflict of interest here, and nobody wants to talk about it." }, accept: ["a clash of interests"], drill: { jp: "Her er det en interessekonflikt ingen ser", en: "Here there is a conflict of interest nobody sees" }, hint: "en interessekonflikt → interessekonflikten, flertall interessekonflikter. En interesse + en konflikt. Grunnen (u32) til at noen blir inhabil." },
      ],
    },
  ],
};
