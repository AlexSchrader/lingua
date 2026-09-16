// DE Unit 68 — Beziehungen und Gemeinschaft (slot: relationships) — B1
// Block 2 (u63-u75). Conventions: see de/unit1.js. Style note: see de/unit63.js.
//
// THEME. A2's u31 "Persoenlichkeit und Charakter" owns what a person IS and u32
// "Gesellschaft und Alltag" owns the everyday institutions; A1's u4 owns the
// family members. This unit takes what runs BETWEEN people: closeness, marriage,
// falling out and making up, and the words a B1 learner needs for civic life.
// NOT taken, each being one lexeme with a taught front: die Freundschaft (der
// Freund, u4), die Gleichheit (gleich, u37), die Einsamkeit (einsam, u22), sich
// kuemmern (u31), die Mehrheit (u32), die Hochzeit (u40), der Nachbar (u7).
// Pairs inside the unit: only der Streit (not sich streiten), only der Respekt
// (not respektieren), only die Gerechtigkeit (not gerecht) is carded. trennen /
// die Trennung is left to u65, which teaches trennen for separating rubbish —
// lower slot wins, so the break-up sense lives in an example here.
// FREE: Anna, Thomas, Lena, Max, Berlin, Hamburg, Deutschland, Jahre, Kinder, Eltern, Familien, Nachbarn
export const DE_UNIT68 = {
  id: "de-u68",
  lang: "de",
  title: "Beziehungen und Gemeinschaft",
  order: 68,
  stage: "b1",
  lessons: [
    {
      id: "de-u68l1",
      unit: 68,
      lesson: 1,
      title: "Nähe und Vertrauen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how close two people are: a relationship, trust, affection, loyal, jealous, a couple.",
      items: [
        { id: "de-u68l1-diebeziehung", type: "vocab", front: "die Beziehung", reading: "diebeziehung", meaning: "the relationship", example: { jp: "Die Beziehung zu meiner Schwester ist heute besser als früher.", en: "My relationship with my sister is better today than it used to be." }, drill: { jp: "Die Beziehung zu den Eltern ist gut", en: "The relationship with the parents is good" }, accept: ["relationship", "the relationship", "the connection", "the tie"], hint: "eine Beziehung haben on its own means being in a romantic relationship." },
        { id: "de-u68l1-dasvertrauen", type: "vocab", front: "das Vertrauen", reading: "dasvertrauen", meaning: "the trust", example: { jp: "Ohne Vertrauen kann keine Gruppe gut zusammen arbeiten.", en: "Without trust no group can work well together." }, drill: { jp: "Das Vertrauen kommt nach Jahren", en: "Trust comes after years" }, accept: ["trust", "the trust", "the confidence", "the faith"], hint: "Vertrauen haben zu jemandem. Nothing to do with der Vertrag (u48), a contract." },
        { id: "de-u68l1-diezuneigung", type: "vocab", front: "die Zuneigung", reading: "diezuneigung", meaning: "the affection", example: { jp: "Nach vielen Jahren ist die Zuneigung noch immer groß.", en: "After many years the affection is still great." }, drill: { jp: "Die Zuneigung ist immer noch groß", en: "The affection is still great" }, accept: ["affection", "the affection", "the fondness"], hint: "zu + neigen, to lean towards. Warmer than freundlich, quieter than die Liebe." },
        { id: "de-u68l1-treu", type: "vocab", front: "treu", reading: "treu", meaning: "loyal", example: { jp: "Der Hund von meinem Großvater war ihm immer treu.", en: "My grandfather's dog was always loyal to him." }, drill: { jp: "Der Hund ist immer treu", en: "The dog is always loyal" }, accept: ["loyal", "faithful", "true"], hint: "Of a friend, a dog or a partner. The noun is die Treue." },
        { id: "de-u68l1-eifersuchtig", type: "vocab", front: "eifersüchtig", reading: "eifersuchtig", meaning: "jealous", example: { jp: "Das kleine Kind ist oft eifersüchtig auf den großen Bruder.", en: "The little child is often jealous of the big brother." }, drill: { jp: "Das Kind ist oft eifersüchtig", en: "The child is often jealous" }, accept: ["jealous", "envious"], hint: "Takes auf + accusative. Built on die Sucht (u67) — literally 'eager-sick'." },
        { id: "de-u68l1-daspaar", type: "vocab", front: "das Paar", reading: "daspaar", meaning: "the couple", example: { jp: "Das Paar aus der Wohnung über uns ist sehr ruhig.", en: "The couple from the flat above us is very quiet." }, drill: { jp: "Das Paar wohnt seit Jahren zusammen", en: "The couple have lived together for years" }, accept: ["couple", "the couple", "the pair"], hint: "Two of a kind: ein Paar Schuhe, and two people. Written small, ein paar means 'a few'." },
      ],
    },
    {
      id: "de-u68l2",
      unit: 68,
      lesson: 2,
      title: "Ehe und Streit",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a partnership and its rough patches: marriage, to marry, engaged, an argument, to make up, a conflict.",
      items: [
        { id: "de-u68l2-dieehe", type: "vocab", front: "die Ehe", reading: "dieehe", meaning: "the marriage", example: { jp: "Die Ehe von meinen Eltern hält jetzt fast vierzig Jahre.", en: "My parents' marriage has now lasted almost forty years." }, drill: { jp: "Die Ehe war lange sehr gut", en: "The marriage was very good for a long time" }, accept: ["marriage", "the marriage", "the wedlock"], hint: "Two syllables, both e's spoken: EH-e. die Hochzeit (u40) is the wedding day itself." },
        { id: "de-u68l2-heiraten", type: "vocab", front: "heiraten", reading: "heiraten", meaning: "to marry", example: { jp: "Meine Schwester will im Sommer in Hamburg heiraten.", en: "My sister wants to get married in Hamburg in the summer." }, drill: { jp: "Im Sommer wollen wir heiraten", en: "We want to get married in the summer" }, accept: ["to marry", "to get married", "to wed"], hint: "No preposition: jemanden heiraten, not 'mit'. Regular: sie heiratet." },
        { id: "de-u68l2-verlobt", type: "vocab", front: "verlobt", reading: "verlobt", meaning: "engaged", example: { jp: "Die zwei sind seit Mai verlobt und suchen jetzt eine Wohnung.", en: "The two have been engaged since May and are now looking for a flat." }, drill: { jp: "Die zwei sind seit Mai verlobt", en: "The two have been engaged since May" }, accept: ["engaged", "betrothed"], hint: "From sich verloben. The fiancé is der Verlobte, the fiancée die Verlobte." },
        { id: "de-u68l2-derstreit", type: "vocab", front: "der Streit", reading: "derstreit", meaning: "the argument", example: { jp: "Der Streit über das Geld war für die ganze Familie hart.", en: "The argument about the money was hard for the whole family." }, drill: { jp: "Der Streit war leider sehr hart", en: "The argument was unfortunately very hard" }, accept: ["argument", "the argument", "the quarrel", "the dispute", "the row"], hint: "Streit haben mit jemandem. The verb is sich streiten." },
        { id: "de-u68l2-sichversohnen", type: "vocab", front: "sich versöhnen", reading: "sichversohnen", meaning: "to make up", example: { jp: "Nach vier Wochen haben sich die Brüder endlich versöhnt.", en: "After four weeks the brothers finally made up." }, drill: { jp: "Die Eltern wollen sich versöhnen", en: "The parents want to make up" }, accept: ["to make up", "to reconcile", "to be reconciled"], hint: "sich mit jemandem versöhnen. The noun is die Versöhnung." },
        { id: "de-u68l2-derkonflikt", type: "vocab", front: "der Konflikt", reading: "derkonflikt", meaning: "the conflict", example: { jp: "Ein alter Konflikt in der Familie bleibt oft viele Jahre.", en: "An old conflict in a family often stays for many years." }, drill: { jp: "Der Konflikt in der Familie ist alt", en: "The conflict in the family is old" }, accept: ["conflict", "the conflict", "the dispute"], hint: "Stress the end: kon-FLIKT. Bigger and cooler than ein Streit." },
      ],
    },
    {
      id: "de-u68l3",
      unit: 68,
      lesson: 3,
      title: "Miteinander leben",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what living alongside others asks of you: community, responsibility, consideration, respect, understanding, how you deal with people.",
      items: [
        { id: "de-u68l3-diegemeinschaft", type: "vocab", front: "die Gemeinschaft", reading: "diegemeinschaft", meaning: "the community", example: { jp: "In der kleinen Gemeinde hilft die Gemeinschaft bei den Festen.", en: "In the small parish the community helps at the festivals." }, drill: { jp: "Die Gemeinschaft in der Stadt ist stark", en: "The community in the city is strong" }, accept: ["community", "the community", "the fellowship"], hint: "gemeinsam (u32) + schaft. die Gemeinde (u32) is the place; die Gemeinschaft is the bond." },
        { id: "de-u68l3-dieverantwortung", type: "vocab", front: "die Verantwortung", reading: "dieverantwortung", meaning: "the responsibility", example: { jp: "Wer einen Hund nimmt, hat auch eine große Verantwortung.", en: "Whoever takes on a dog also takes on a big responsibility." }, drill: { jp: "Die Verantwortung für die Kinder ist groß", en: "The responsibility for the children is great" }, accept: ["responsibility", "the responsibility"], hint: "Built on antworten: the one who answers for it. Verantwortung übernehmen = to take responsibility." },
        { id: "de-u68l3-dierucksicht", type: "vocab", front: "die Rücksicht", reading: "dierucksicht", meaning: "the consideration", example: { jp: "Am Abend nehmen wir Rücksicht auf die Nachbarn und sind ruhig.", en: "In the evening we are considerate of the neighbours and keep quiet." }, drill: { jp: "Die Rücksicht auf die Nachbarn ist wichtig", en: "Consideration for the neighbours is important" }, accept: ["consideration", "the consideration", "the regard", "the thoughtfulness"], hint: "The fixed phrase is Rücksicht nehmen auf, and it is the one Germans use daily." },
        { id: "de-u68l3-derrespekt", type: "vocab", front: "der Respekt", reading: "derrespekt", meaning: "the respect", example: { jp: "Der Respekt vor dem alten Lehrer war bei uns sehr groß.", en: "Respect for the old teacher was very great among us." }, drill: { jp: "Der Respekt vor dem Lehrer ist wichtig", en: "Respect for the teacher is important" }, accept: ["respect", "the respect"], hint: "Respekt vor jemandem haben — vor, not 'für'." },
        { id: "de-u68l3-dasverstandnis", type: "vocab", front: "das Verständnis", reading: "dasverstandnis", meaning: "the understanding", example: { jp: "Für den harten Streit hatte die Mutter wenig Verständnis.", en: "The mother had little sympathy for the fierce argument." }, drill: { jp: "Das Verständnis für die Kinder ist groß", en: "The understanding for the children is great" }, accept: ["understanding", "the understanding", "the sympathy", "the comprehension"], hint: "From verstehen. Verständnis haben für = to be sympathetic about." },
        { id: "de-u68l3-derumgang", type: "vocab", front: "der Umgang", reading: "derumgang", meaning: "the way of dealing", example: { jp: "Der Umgang mit jungen Kollegen ist für den alten Chef schwer.", en: "Dealing with young colleagues is hard for the old boss." }, drill: { jp: "Der Umgang mit dem Chef ist schwer", en: "Dealing with the boss is hard" }, accept: ["the way of dealing", "dealings", "the handling", "the company", "the contact"], hint: "der Umgang mit — with people or with things: der Umgang mit Geld." },
      ],
    },
    {
      id: "de-u68l4",
      unit: 68,
      lesson: 4,
      title: "Gesellschaft und Zusammenhalt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about society at large: a minority, a generation, voluntary work, integration, justice, solidarity.",
      items: [
        { id: "de-u68l4-dieminderheit", type: "vocab", front: "die Minderheit", reading: "dieminderheit", meaning: "the minority", example: { jp: "Auch eine kleine Minderheit hat in einem Gesetz ihre Rechte.", en: "Even a small minority has its rights in a law." }, drill: { jp: "Die Minderheit hat auch Rechte", en: "The minority has rights too" }, accept: ["minority", "the minority"], hint: "The mirror of die Mehrheit (u32): minder is 'less'." },
        { id: "de-u68l4-diegeneration", type: "vocab", front: "die Generation", reading: "diegeneration", meaning: "the generation", example: { jp: "Die Generation von meinen Großeltern hat harte Jahre erlebt.", en: "My grandparents' generation lived through hard years." }, drill: { jp: "Die Generation der Eltern hat es schwer", en: "The parents' generation has it hard" }, accept: ["generation", "the generation"], hint: "German stress and a ts: ge-ne-ra-TSI-on." },
        { id: "de-u68l4-dasehrenamt", type: "vocab", front: "das Ehrenamt", reading: "dasehrenamt", meaning: "the voluntary post", example: { jp: "Im Ehrenamt arbeitet man ohne Lohn für die Gemeinde.", en: "In a voluntary post you work without pay for the parish." }, drill: { jp: "Das Ehrenamt macht die Stadt besser", en: "Voluntary work makes the city better" }, accept: ["voluntary post", "the voluntary post", "voluntary work", "the honorary office"], hint: "die Ehre (honour) + das Amt (office). ehrenamtlich arbeiten = to volunteer." },
        { id: "de-u68l4-dieintegration", type: "vocab", front: "die Integration", reading: "dieintegration", meaning: "the integration", example: { jp: "Für die Integration ist die Sprache am Anfang sehr wichtig.", en: "For integration the language is very important at the start." }, drill: { jp: "Die Integration in der Schule ist wichtig", en: "Integration at school is important" }, accept: ["integration", "the integration"], hint: "in-te-gra-TSI-on, with the same -tion ending as die Generation." },
        { id: "de-u68l4-diegerechtigkeit", type: "vocab", front: "die Gerechtigkeit", reading: "diegerechtigkeit", meaning: "the justice", example: { jp: "Ohne Gerechtigkeit hat auch ein gutes Gesetz keinen Wert.", en: "Without justice even a good law has no value." }, drill: { jp: "Die Gerechtigkeit ist sehr wichtig", en: "Justice is very important" }, accept: ["justice", "the justice", "the fairness"], hint: "From gerecht, fair. Five syllables: ge-RECH-tig-keit." },
        { id: "de-u68l4-derzusammenhalt", type: "vocab", front: "der Zusammenhalt", reading: "derzusammenhalt", meaning: "the solidarity", example: { jp: "In harten Jahren zeigt sich der Zusammenhalt in einer Familie.", en: "In hard years the solidarity in a family shows itself." }, drill: { jp: "Der Zusammenhalt in der Familie ist stark", en: "The solidarity in the family is strong" }, accept: ["solidarity", "the solidarity", "the cohesion", "the togetherness"], hint: "zusammen + halten: holding together. Of a family, a team or a country." },
      ],
    },
  ],
};
