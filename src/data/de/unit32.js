// DE Unit 32 — Gesellschaft und Alltag (slot: society) — A2
// Block 2 (u31–u40). Conventions: see de/unit1.js.
//
// BOUNDARIES. u24 "Work and school" and u30 "Home and household" are the lead's, so
// this unit takes neither the workplace nor the household: it is the layer ABOVE both
// — the state, the rules everyone lives under, and the neighbourhood.
// Dropped in the cross-block pass, lower slot wins: der Ausweis was an exact front
// duplicate of block 1's u23; das Formular replaced it. Re-glossed in the same pass so
// the canonical gloss no longer collides: das Recht -> "entitlement" (A1 u7 rechts owns
// "right"), gemeinsam -> "jointly" (A1 u1 zusammen owns "together"), das Thema ->
// "topic" (block 1's u24 das Fach owns "subject").
// Rejected as already taught: die Meinung (u29 — the lead's connector unit took it for
// its dass-clauses, and lower slot wins). Rejected as the same lexeme: die Sicherheit
// (~u12 sicher); wählen was dropped in favour of die Wahl so one lexeme has one card.
// streiten was given up to u39's sich streiten for the same reason; diskutieren does
// the job here.
export const DE_UNIT32 = {
  id: "de-u32",
  lang: "de",
  title: "Gesellschaft und Alltag",
  order: 32,
  stage: "a2",
  lessons: [
    {
      id: "de-u32l1",
      unit: 32,
      lesson: 1,
      title: "Der Staat",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the parts of a country's public life: society, state, government, law, election, citizen.",
      items: [
        { id: "de-u32l1-diegesellschaft", type: "vocab", front: "die Gesellschaft", reading: "diegesellschaft", meaning: "society", example: { jp: "In der Gesellschaft gibt es eine Gruppe für Musik.", en: "In society there is a group for music." }, drill: { jp: "Die Gesellschaft ist sehr groß", en: "Society is very large" }, accept: ["society", "company"], hint: "Everyone together, as a whole. In business it also means a company — eine Gesellschaft gründen — which is where English gets Ltd and GmbH." },
        { id: "de-u32l1-derstaat", type: "vocab", front: "der Staat", reading: "derstaat", meaning: "the state", example: { jp: "Der Staat bezahlt die Schule und das Krankenhaus.", en: "The state pays for the school and the hospital." }, drill: { jp: "Der Staat bezahlt die Schule", en: "The state pays for the school" }, accept: ["state", "the state", "country"], hint: "Two a's, said long: SHTAAT. The institution, not the territory — for the country you live in you would say das Land." },
        { id: "de-u32l1-dieregierung", type: "vocab", front: "die Regierung", reading: "dieregierung", meaning: "government", example: { jp: "Die Regierung macht das Gesetz.", en: "The government makes the law." }, drill: { jp: "Die Regierung macht das Gesetz", en: "The government makes the law" }, accept: ["government", "administration"], hint: "From regieren, to govern. Die Regierung is the people currently in charge; der Staat outlasts them." },
        { id: "de-u32l1-dasgesetz", type: "vocab", front: "das Gesetz", reading: "dasgesetz", meaning: "law", example: { jp: "Das Gesetz ist neu, obwohl es niemand gern liest.", en: "The law is new, although nobody enjoys reading it." }, drill: { jp: "Das Gesetz ist sehr neu", en: "The law is very new" }, accept: ["law", "act", "statute"], hint: "One written law. For the rule you follow day to day, use die Regel two cards on — a Gesetz is made by a parliament." },
        { id: "de-u32l1-diewahl", type: "vocab", front: "die Wahl", reading: "diewahl", meaning: "election / choice", example: { jp: "Nach der Wahl arbeitet die Regierung.", en: "After the election the government gets to work." }, drill: { jp: "Die Wahl ist im Sommer", en: "The election is in the summer" }, accept: ["election", "choice", "vote"], hint: "Both senses in one word: the political election and the everyday choice — Du hast die Wahl, it's your choice." },
        { id: "de-u32l1-derbuerger", type: "vocab", front: "der Bürger", reading: "derburger", meaning: "citizen", example: { jp: "Der Bürger geht zu der Wahl, wenn er alt genug ist.", en: "A citizen goes to the election if he is old enough." }, drill: { jp: "Der Bürger hat ein Recht", en: "The citizen has a right" }, accept: ["citizen", "member of the public"], hint: "From die Burg, the fortified town — originally the townsman. Nothing to do with a burger, which German spells Burger with no umlaut." },
      ],
    },
    {
      id: "de-u32l2",
      unit: 32,
      lesson: 2,
      title: "Rechte und Pflichten",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about what you are entitled to and what is required of you — rights, duties, tax, ID, the authorities.",
      items: [
        { id: "de-u32l2-dasrecht", type: "vocab", front: "das Recht", reading: "dasrecht", meaning: "entitlement", example: { jp: "Ich habe das Recht auf einen Arzt.", en: "I have the right to a doctor." }, drill: { jp: "Das Recht ist für den Bürger", en: "The right is for the citizen" }, accept: ["right", "law", "entitlement"], hint: "Careful with rechts (u7), which means on the right hand side. Das Recht is the entitlement; recht haben is to be correct." },
        { id: "de-u32l2-diepflicht", type: "vocab", front: "die Pflicht", reading: "diepflicht", meaning: "duty / obligation", example: { jp: "Es ist eine Pflicht, die Steuer zu bezahlen.", en: "It is a duty to pay the tax." }, drill: { jp: "Die Pflicht ist nicht immer leicht", en: "Duty is not always easy" }, accept: ["duty", "obligation"], hint: "The mirror of das Recht, and the two are almost always named together: Rechte und Pflichten. Pflichtfach is a compulsory school subject." },
        { id: "de-u32l2-diesteuer", type: "vocab", front: "die Steuer", reading: "diesteuer", meaning: "tax", example: { jp: "Wer viel verdient, bezahlt viele Steuern.", en: "Whoever earns a lot pays a lot of tax." }, drill: { jp: "Die Steuer ist sehr hoch", en: "The tax is very high" }, accept: ["tax", "duty"], hint: "Do not confuse it with teuer (u10), expensive — one letter apart and a very German joke. Das Steuer, neuter, is a steering wheel." },
        { id: "de-u32l2-dasformular", type: "vocab", front: "das Formular", reading: "dasformular", meaning: "form — the paper you fill in", example: { jp: "Das Formular ist lang und schwer.", en: "The form is long and difficult." }, drill: { jp: "Das Formular ist sehr lang", en: "The form is very long" }, accept: ["form", "official form", "paperwork"], hint: "for-mu-LAHR, stress at the end. Ein Formular ausfüllen is to fill in a form — the single most German administrative act there is." },
        { id: "de-u32l2-diebehoerde", type: "vocab", front: "die Behörde", reading: "diebehorde", meaning: "public authority / office", example: { jp: "Die Behörde antwortet nach vier Wochen.", en: "The authority answers after four weeks." }, drill: { jp: "Die Behörde antwortet sehr spät", en: "The authority answers very late" }, accept: ["authority", "public authority", "government office", "agency"], hint: "The office you must go to for a form or a permit. Usually plural in complaints — die Behörden, meaning officialdom generally." },
        { id: "de-u32l2-dieregel", type: "vocab", front: "die Regel", reading: "dieregel", meaning: "rule", example: { jp: "Die Regel ist leicht, obwohl niemand sie liest.", en: "The rule is easy, although nobody reads it." }, drill: { jp: "Die Regel ist sehr leicht", en: "The rule is very easy" }, accept: ["rule", "regulation"], hint: "Smaller and less formal than das Gesetz. In der Regel means as a rule, usually — the commonest place you will meet it." },
      ],
    },
    {
      id: "de-u32l3",
      unit: 32,
      lesson: 3,
      title: "Zusammenleben",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about the people around you and the groups you belong to — neighbour, club, community, together, social.",
      items: [
        { id: "de-u32l3-dernachbar", type: "vocab", front: "der Nachbar", reading: "dernachbar", meaning: "neighbour", example: { jp: "Der Nachbar hilft uns, wenn wir arbeiten.", en: "The neighbour helps us when we are working." }, drill: { jp: "Der Nachbar ist sehr hilfsbereit", en: "The neighbour is very helpful" }, accept: ["neighbour", "neighbor"], hint: "From nach plus Bauer, the farmer nearby. A woman neighbour is die Nachbarin, the same -in ending as die Freundin (u4)." },
        { id: "de-u32l3-derverein", type: "vocab", front: "der Verein", reading: "derverein", meaning: "club / association", example: { jp: "Er ist in dem Verein, weil er gern spielt.", en: "He is in the club because he likes playing." }, drill: { jp: "Der Verein spielt am Sonntag", en: "The club plays on Sunday" }, accept: ["club", "association", "society"], hint: "Central to German life — there is a Verein for everything, and joining one is how adults make friends. Nothing to do with ein, one." },
        { id: "de-u32l3-diegemeinde", type: "vocab", front: "die Gemeinde", reading: "diegemeinde", meaning: "local community / municipality", example: { jp: "Die Gemeinde bezahlt den Park und den Platz.", en: "The municipality pays for the park and the square." }, drill: { jp: "Die Gemeinde ist sehr klein", en: "The municipality is very small" }, accept: ["community", "municipality", "local council", "parish"], hint: "The smallest unit of German government, and also a church congregation. Same root as gemeinsam, the next card but one." },
        { id: "de-u32l3-gemeinsam", type: "vocab", front: "gemeinsam", reading: "gemeinsam", meaning: "jointly", example: { jp: "Wir arbeiten gemeinsam an dem Problem.", en: "We are working on the problem together." }, drill: { jp: "Wir lernen die Sprache gemeinsam", en: "We are learning the language together" }, accept: ["together", "joint", "jointly", "shared"], hint: "Zusammen (u1) is simply at the same time; gemeinsam adds that it is a shared undertaking. Etwas gemeinsam haben is to have something in common." },
        { id: "de-u32l3-sozial", type: "vocab", front: "sozial", reading: "sozial", meaning: "social", example: { jp: "Der Staat ist sehr sozial und hilft Familien mit wenig Geld.", en: "The state is very social and helps families with little money." }, drill: { jp: "Der Staat ist sehr sozial", en: "The state is very social" }, accept: ["social"], hint: "zo-tsi-AHL — the z is ts and the i is a separate syllable. It means to do with society, and in soziale Hilfe it means welfare." },
        { id: "de-u32l3-diegruppe", type: "vocab", front: "die Gruppe", reading: "diegruppe", meaning: "group", example: { jp: "Die Gruppe diskutiert über das Thema.", en: "The group is discussing the topic." }, drill: { jp: "Die Gruppe lernt am Montag", en: "The group studies on Monday" }, accept: ["group", "team"], hint: "GROO-pe, two syllables. In der Gruppe arbeiten is to work in a group — the standard phrase in a German classroom." },
      ],
    },
    {
      id: "de-u32l4",
      unit: 32,
      lesson: 4,
      title: "Probleme und Lösungen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Raise a problem, name the topic, argue about it and say what the majority thinks.",
      items: [
        { id: "de-u32l4-dasproblem", type: "vocab", front: "das Problem", reading: "dasproblem", meaning: "problem", example: { jp: "Das Problem ist alt, aber niemand hat eine Lösung.", en: "The problem is old, but nobody has a solution." }, drill: { jp: "Das Problem ist sehr groß", en: "The problem is very big" }, accept: ["problem", "issue"], hint: "You already say kein Problem (u2) as a fixed phrase; here it's the noun on its own, with its gender — das Problem (neuter). Stress the end: pro-BLEHM." },
        { id: "de-u32l4-dieloesung", type: "vocab", front: "die Lösung", reading: "dielosung", meaning: "solution", example: { jp: "Für das Problem gibt es noch keine Lösung, obwohl wir lange suchen.", en: "There is still no solution to the problem, although we have been looking for a long time." }, drill: { jp: "Die Lösung ist nicht leicht", en: "The solution is not easy" }, accept: ["solution", "answer"], hint: "From lösen, to loosen or solve. It covers a solution to a problem and the answer to an exercise alike." },
        { id: "de-u32l4-dieumfrage", type: "vocab", front: "die Umfrage", reading: "dieumfrage", meaning: "survey / poll", example: { jp: "Die Umfrage zeigt, dass die Bürger das Gesetz nicht gut finden.", en: "The survey shows that the citizens do not think the law is good." }, drill: { jp: "Die Umfrage zeigt das Problem", en: "The survey shows the problem" }, accept: ["survey", "poll", "opinion poll"], hint: "um plus fragen (u19) — asking around. Eine Umfrage machen is to run a survey." },
        { id: "de-u32l4-diemehrheit", type: "vocab", front: "die Mehrheit", reading: "diemehrheit", meaning: "majority", example: { jp: "Die Mehrheit ist für das Gesetz.", en: "The majority is in favour of the law." }, drill: { jp: "Die Mehrheit ist gegen das Gesetz", en: "The majority is against the law" }, accept: ["majority", "most"], hint: "From mehr, more. It takes a singular verb — die Mehrheit IST — even though it means many people." },
        { id: "de-u32l4-diskutieren", type: "vocab", front: "diskutieren", reading: "diskutieren", meaning: "to discuss / argue", example: { jp: "Wir diskutieren, weil das Thema schwer ist.", en: "We are arguing because the topic is difficult." }, drill: { jp: "Die Bürger diskutieren über das Gesetz", en: "The citizens are discussing the law" }, accept: ["to discuss", "to argue", "to debate"], hint: "Takes über for the topic: über etwas diskutieren. Warmer than English discuss — a German Diskussion can get quite loud." },
        { id: "de-u32l4-dasthema", type: "vocab", front: "das Thema", reading: "dasthema", meaning: "topic", example: { jp: "Das Thema ist schwer, deshalb sprechen wir lang.", en: "The topic is difficult, therefore we talk for a long time." }, drill: { jp: "Das Thema ist heute das Gesetz", en: "The topic today is the law" }, accept: ["topic", "subject", "theme"], hint: "TAY-ma, with a t said plainly — the h is silent. Its plural is irregular and Greek: die Themen." },
      ],
    },
  ],
};
