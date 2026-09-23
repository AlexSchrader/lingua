// DE Unit 124 — Zu Gast (slot: coverage-b2-14) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Coverage pass — method in u114's header, card count in u115's.
//
// Lessons 1-2 are tier A/B (frequency gaps and words the corpus used without a
// card). Lessons 3-4 are the VERB residue of the measured list: interessieren,
// beschaeftigen, verbringen, verraten, schwoeren, verheiraten, besuchen and
// bauen are all top-2000 entries that no unit had claimed.
//
// Self-check, dropped as same-lexeme duplicates: die Freude (sich freuen u22),
// der Gast is already taught (u40), das Glueck (gluecklich u10), die Achtung was
// CHECKED and KEPT - its only near hit is acht (eight, u5), a false family.
// veraendern DROPPED: die Veraenderung is taught (u59), same lexeme.
// FREE: beim, gedacht
// beim is bei (u14) + dem, and the scope oracle cannot build a preposition+
// article contraction - the same documented over-report class as im and am.
// Both halves are taught, so this declares nothing the learner has not met.
export const DE_UNIT124 = {
  id: "de-u124",
  lang: "de",
  title: "Zu Gast",
  order: 124,
  stage: "b2",
  lessons: [
    {
      id: "de-u124l1",
      unit: 124,
      lesson: 1,
      title: "Suppe, Salat und Eis",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Order or describe a simple meal end to end — soup, salad, ice cream, supper and a cup.",
      items: [
        { id: "de-u124l1-diesuppe", type: "vocab", front: "die Suppe", reading: "diesuppe", meaning: "the soup", example: { jp: "Die Suppe ist noch zu heiß, deshalb warten wir lieber ein paar Minuten.", en: "The soup is still too hot, so we'd rather wait a few minutes." }, drill: { jp: "Die Suppe schmeckt heute sehr gut", en: "The soup tastes very good today" }, accept: ["soup", "the soup", "broth"], hint: "Tier B: the corpus already used this word — Für die Suppe brauchst du einen Löffel — with no card behind it, in a course with three food units." },
        { id: "de-u124l1-dersalat", type: "vocab", front: "der Salat", reading: "dersalat", meaning: "the salad", example: { jp: "Der Salat war gut, aber für vier Leute war er einfach zu wenig.", en: "The salad was good, but for four people it was simply too little." }, drill: { jp: "Der Salat steht schon auf dem Tisch", en: "The salad is already on the table" }, accept: ["salad", "the salad", "lettuce"], hint: "Tier B, like die Suppe. Also the lettuce itself — ein Kopf Salat is a head of lettuce. Stress the last syllable: saLAT." },
        { id: "de-u124l1-daseis", type: "vocab", front: "das Eis", reading: "daseis", meaning: "the ice cream", example: { jp: "Das Eis im Sommer ist für die Kinder so wichtig wie das Schwimmen.", en: "Ice cream in summer is as important to the children as swimming." }, drill: { jp: "Das Eis schmeckt nach Wasser", en: "The ice cream tastes of water" }, accept: ["ice cream", "the ice cream", "ice", "icecream"], hint: "Tier B. One word for both ice and ice cream — Eis am Stiel is an ice lolly, and Eis on a road is what you slip on." },
        { id: "de-u124l1-dasabendessen", type: "vocab", front: "das Abendessen", reading: "dasabendessen", meaning: "the supper", example: { jp: "Beim Abendessen spricht in dieser Familie niemand über die Arbeit.", en: "At supper nobody in this family talks about work." }, drill: { jp: "Das Abendessen beginnt um sieben", en: "Supper begins at seven" }, accept: ["supper", "the supper", "dinner", "evening meal"], hint: "der Abend + das Essen. The German evening meal is traditionally cold — bread, cheese and sausage — which is why it is also called das Abendbrot." },
        { id: "de-u124l1-dietasse", type: "vocab", front: "die Tasse", reading: "dietasse", meaning: "the cup", example: { jp: "Eine Tasse steht noch auf dem Tisch, und niemand nimmt sie mit.", en: "A cup is still on the table, and nobody takes it away." }, drill: { jp: "Die Tasse ist schon wieder leer", en: "The cup is empty again already" }, accept: ["cup", "the cup", "mug"], hint: "Tier D — chosen, not measured: the course teaches der Teller, der Löffel, das Messer and die Gabel (all u41) and stopped one item short of the cup. nicht alle Tassen im Schrank haben is 'to be not quite right in the head'." },
      ],
    },
    {
      id: "de-u124l2",
      unit: 124,
      lesson: 2,
      title: "Besuch, Spaß und Achtung",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Host and be hosted — a visit, home, fun, respect, and an idea worth sharing.",
      items: [
        { id: "de-u124l2-derbesuch", type: "vocab", front: "der Besuch", reading: "derbesuch", meaning: "the visit", example: { jp: "Der Besuch bleibt nur zwei Tage, und trotzdem hat die halbe Familie frei genommen.", en: "The visitors are staying only two days, and yet half the family has taken time off." }, drill: { jp: "Der Besuch kommt erst am Abend", en: "The visit comes only in the evening" }, accept: ["visit", "the visit", "visitors", "company", "guest"], hint: "Both the visit and the PEOPLE visiting — Besuch haben is to have company. Singular even when several people come." },
        { id: "de-u124l2-daszuhause", type: "vocab", front: "das Zuhause", reading: "daszuhause", meaning: "the home (one's own)", example: { jp: "Nach so vielen Jahren im Ausland will er vor allem ein richtiges Zuhause.", en: "After so many years abroad, what he wants above all is a real home." }, drill: { jp: "Das Zuhause ist ihm sehr wichtig", en: "Home is very important to him" }, accept: ["home", "the home", "a home"], hint: "The noun, written as one word and capitalised — distinct from the adverb zu Hause (at home), which stays two words. German draws the line English does not." },
        { id: "de-u124l2-derspass", type: "vocab", front: "der Spaß", reading: "derspass", meaning: "the fun", example: { jp: "Die Arbeit macht ihm Spaß, auch wenn sie ihn fast jeden Abend eine Stunde kostet.", en: "He enjoys the work, even though it costs him an hour almost every evening." }, drill: { jp: "Der Spaß war es wirklich wert", en: "The fun was really worth it" }, accept: ["fun", "the fun", "enjoyment", "joke", "pleasure"], hint: "Spaß machen is the standard way to say you enjoy something — the fun is the subject, not you. Also a joke: aus Spaß, as a joke." },
        { id: "de-u124l2-dieachtung", type: "vocab", front: "die Achtung", reading: "dieachtung", meaning: "the regard", example: { jp: "Vor seiner Arbeit hat im Betrieb jeder Achtung, auch die Leute, die ihn nicht mögen.", en: "Everyone in the firm has respect for his work, even the people who don't like him." }, drill: { jp: "Die Achtung war ihm sehr wichtig", en: "The respect was very important to him" }, accept: ["respect", "the respect", "regard", "esteem", "attention"], hint: "As a bare shout — Achtung! — it means 'look out', which is how most learners meet it first. Achtung vor jemandem haben is to respect them." },
        { id: "de-u124l2-dieidee", type: "vocab", front: "die Idee", reading: "dieidee", meaning: "the idea (a plan)", example: { jp: "Die Idee ist nicht neu, aber bisher hat sie niemand so genau zu Ende gedacht.", en: "The idea is not new, but so far nobody has thought it through so precisely." }, drill: { jp: "Die Idee war von Anfang an gut", en: "The idea was good from the start" }, accept: ["idea", "the idea", "notion", "concept"], hint: "Taught nowhere in 113 units. Three syllables, stress on the last: i-DEE. keine Idee is 'no idea at all'." },
      ],
    },
    {
      id: "de-u124l3",
      unit: 124,
      lesson: 3,
      title: "Besuchen, verbringen, bauen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how you spend time and what you make of it — visit someone, spend a period, build something, take an interest, be busy, and bring something along.",
      items: [
        { id: "de-u124l3-besuchen", type: "vocab", front: "besuchen", reading: "besuchen", meaning: "to visit", example: { jp: "Wir wollen die Familie im Sommer besuchen, wenn die Kinder frei haben.", en: "We want to visit the family in the summer, when the children are free." }, drill: { jp: "Wir wollen den Professor besuchen", en: "We want to visit the professor" }, accept: ["to visit", "visit", "to call on", "to attend", "to go and see"], hint: "People and places alike, and also institutions — eine Schule besuchen is to attend a school, not to drop in on it." },
        { id: "de-u124l3-verbringen", type: "vocab", front: "verbringen", reading: "verbringen", meaning: "to spend (time)", example: { jp: "Den Winter will sie dieses Jahr im Ausland verbringen, weil ihr die Kälte nicht gut tut.", en: "She wants to spend the winter abroad this year, because the cold does her no good." }, drill: { jp: "Wir wollen den Abend zusammen verbringen", en: "We want to spend the evening together" }, accept: ["to spend", "spend", "to pass", "pass"], hint: "Time only — money is ausgeben (u27). English 'spend' covers both and German never does." },
        { id: "de-u124l3-bauen", type: "vocab", front: "bauen", reading: "bauen", meaning: "to build", example: { jp: "Hier soll man bald bauen, obwohl die Leute im Ort seit Jahren dagegen sind.", en: "They are supposed to build here soon, although the people in the place have been against it for years." }, drill: { jp: "Sie wollen ein neues Haus bauen", en: "They want to build a new house" }, accept: ["to build", "build", "to construct", "construct", "to erect"], hint: "Tier C: zerstören (to destroy) is taught in u60 and this half was missing. auf jemanden bauen is to rely on someone." },
        { id: "de-u124l3-interessieren", type: "vocab", front: "sich interessieren", reading: "sichinteressieren", meaning: "to take an interest", example: { jp: "Für diese Frage interessieren sich nur wenige Leute, und genau das ist das Problem.", en: "Only a few people take an interest in this question, and that is exactly the problem." }, drill: { jp: "Dafür muss man sich interessieren", en: "One has to take an interest in that" }, accept: ["to take an interest", "to be interested", "to be interested in", "to care about"], hint: "Reflexive and takes für: sich für etwas interessieren. Pairs with interessant, taught in u115 of this block." },
        { id: "de-u124l3-beschaeftigen", type: "vocab", front: "sich beschäftigen", reading: "sichbeschaeftigen", meaning: "to occupy oneself", example: { jp: "Mit dieser Sache beschäftigen sich im Haus gerade drei Leute, und trotzdem geht es langsam.", en: "Three people in the building are currently occupied with this matter, and even so it is going slowly." }, drill: { jp: "Damit muss man sich beschäftigen", en: "One has to occupy oneself with that" }, accept: ["to occupy oneself", "to deal with", "to be busy with", "to work on", "to employ"], hint: "Reflexive with mit. Non-reflexively it means to EMPLOY — die Firma beschäftigt zwanzig Leute." },
        { id: "de-u124l3-mitbringen", type: "vocab", front: "mitbringen", reading: "mitbringen", meaning: "to bring along", example: { jp: "Bring am Sonntag bitte nichts mit, wir haben schon viel zu viel Essen im Haus.", en: "Please don't bring anything along on Sunday, we already have far too much food in the house." }, drill: { jp: "Die Gäste wollen etwas mitbringen", en: "The guests want to bring something along" }, accept: ["to bring along", "bring along", "to bring", "to bring with"], hint: "Separable: bringt mit. das Mitbringsel is the small present a guest arrives with — a word with no English equivalent." },
      ],
    },
    {
      id: "de-u124l4",
      unit: 124,
      lesson: 4,
      title: "Schwören, verraten, heiraten",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Make and break a promise — swear to something, give a secret away, be married, name a wife, and groan about it.",
      items: [
        { id: "de-u124l4-schwoeren", type: "vocab", front: "schwören", reading: "schwoeren", meaning: "to swear (an oath)", example: { jp: "Ich schwöre, dass ich den Brief nie gelesen habe.", en: "I swear that I never read the letter." }, drill: { jp: "Er will vor Gericht schwören", en: "He wants to swear in court" }, accept: ["to swear", "swear", "to vow", "vow", "to pledge"], hint: "A solemn promise, in court or out of it — never swearing in the rude sense, which is fluchen. Strong verb: schwor, geschworen." },
        { id: "de-u124l4-verraten", type: "vocab", front: "verraten", reading: "verraten", meaning: "to give away (a secret)", example: { jp: "Du darfst nichts verraten, sonst weiß es bis zum Abend das ganze Haus.", en: "You mustn't give anything away, otherwise the whole house will know by evening." }, drill: { jp: "Er will das Ende nicht verraten", en: "He does not want to give away the ending" }, accept: ["to give away", "to reveal", "to betray", "betray", "to let slip", "to tell"], hint: "Two weights in one word: betraying a person, and merely letting a secret slip. Tone and object decide which. der Verrat is treachery." },
        { id: "de-u124l4-verheiratet", type: "vocab", front: "verheiratet", reading: "verheiratet", meaning: "married", example: { jp: "Die beiden sind seit zwanzig Jahren verheiratet und wohnen noch immer in derselben Wohnung.", en: "The two have been married for twenty years and still live in the same flat." }, drill: { jp: "Sie ist seit dem Sommer verheiratet", en: "She has been married since the summer" }, accept: ["married", "wed", "wedded"], hint: "Taught in the participle form, because that is the only shape the word appears in — verheiratet sein. heiraten (u68) is the act of marrying itself." },
        { id: "de-u124l4-dieehefrau", type: "vocab", front: "die Ehefrau", reading: "dieehefrau", meaning: "the wife", example: { jp: "Seine Ehefrau arbeitet in der gleichen Firma, aber in einem ganz anderen Haus.", en: "His wife works at the same company, but in a completely different building." }, drill: { jp: "Die Ehefrau wartet schon draußen", en: "The wife is already waiting outside" }, accept: ["wife", "the wife", "spouse"], hint: "The pair to der Ehemann, taught in u117 of this block. In speech Germans say meine Frau; Ehefrau belongs on forms and in formal introductions." },
        { id: "de-u124l4-stoehnen", type: "vocab", front: "stöhnen", reading: "stoehnen", meaning: "to groan", example: { jp: "Alle stöhnen über die neue Regel, aber niemand sagt es dem Chef ins Gesicht.", en: "Everyone groans about the new rule, but nobody says it to the boss's face." }, drill: { jp: "Die Leute stöhnen über die Preise", en: "People groan about the prices" }, accept: ["to groan", "groan", "to moan", "moan", "to complain"], hint: "Tier D — chosen, not measured. It completes a set the course already opened: seufzen, gähnen, zittern and flüstern are all taught (u57, u85, u86) and this one was missing. über etwas stöhnen is to grumble about it." },
      ],
    },
  ],
};
