// DE Unit 55 — Nachrichten und Gesellschaft (slot: news and society) — B1
// Block 1 (u51–u62). BAND CONVENTIONS: see the header of de/unit51.js.
//
// THEME: the vocabulary you need to read a German news story and argue about it.
// A2 already has die Nachricht, die Zeitung, die Regierung, die Gesellschaft, die
// Wahl, der Bürger, der Staat, das Gesetz, die Behörde, die Umfrage, sozial — the
// nouns. What it cannot do is talk ABOUT them: where a story came from (l1), who
// holds power (l2), what a society argues over (l3), and what the public does
// about it (l4).
// ⚠️ ECONOMICS IS NOT TAKEN HERE. die Wirtschaft, der Markt, die Inflation and
// their family belong to u66 "Money and the economy" (block 2). This unit stops
// at die Armut and der Streik, which are social rather than economic.
// ⚠️ die Stimme is deliberately taught as THE VOTE with "voice" in accept[] — the
// two senses are one word in German and the split is what an English speaker
// misses.
// FREE: Berichte, Wohnungen, Zeitungen
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT55 = {
  id: "de-u55",
  lang: "de",
  title: "Nachrichten und Gesellschaft",
  order: 55,
  stage: "b1",
  lessons: [
    {
      id: "de-u55l1",
      unit: 55,
      lesson: 1,
      title: "Die Schlagzeilen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Read a news story critically: name the headline, the report under it, the source it came from, and the event it describes.",
      items: [
        { id: "de-u55l1-dieschlagzeile", type: "vocab", front: "die Schlagzeile", reading: "dieschlagzeile", meaning: "the headline", example: { jp: "Die Schlagzeile war sehr groß, aber der Bericht hatte wenig Inhalt.", en: "The headline was very big, but the report had little content." }, drill: { jp: "Die Schlagzeile steht auf der Seite", en: "The headline is on the page" }, accept: ["headline", "the headline"], hint: "schlagen (to strike) + die Zeile (the line): the line that hits you. Plural: die Schlagzeilen." },
        { id: "de-u55l1-derbericht", type: "vocab", front: "der Bericht", reading: "derbericht", meaning: "the report", example: { jp: "Der Bericht über die Wahl war lang, aber er hat wenig erklärt.", en: "The report about the election was long, but it explained little." }, drill: { jp: "Der Bericht kommt am Montag", en: "The report comes on Monday" }, accept: ["report", "the report", "account", "the account", "coverage"], hint: "From berichten, to report. einen Bericht schreiben — for school, for work and for the news." },
        { id: "de-u55l1-diequelle", type: "vocab", front: "die Quelle", reading: "diequelle", meaning: "the source", example: { jp: "Die Quelle war gut, deshalb haben wir dem Bericht auch geglaubt.", en: "The source was good, so we believed the report too." }, drill: { jp: "Die Quelle kommt aus dem Internet", en: "The source comes from the internet" }, accept: ["source", "the source", "spring", "the spring"], hint: "Also a spring of water — the place a thing flows from. aus sicherer Quelle = from a reliable source." },
        { id: "de-u55l1-veroffentlichen", type: "vocab", front: "veröffentlichen", reading: "veroffentlichen", meaning: "to publish", example: { jp: "Die Zeitung hat den Bericht am Montag veröffentlicht, obwohl sie ihn seit Freitag hatte.", en: "The newspaper published the report on Monday, although it had had it since Friday." }, drill: { jp: "Zeitungen veröffentlichen viele Berichte", en: "Newspapers publish many reports" }, accept: ["to publish", "publish", "to release", "release", "to make public"], hint: "öffentlich (public) sits inside it: to make a thing public. Of books, reports and numbers." },
        { id: "de-u55l1-dasereignis", type: "vocab", front: "das Ereignis", reading: "dasereignis", meaning: "the event", example: { jp: "Das Ereignis am Samstag war groß, und die Presse hat sehr viel geschrieben.", en: "The event on Saturday was big, and the press wrote a great deal." }, drill: { jp: "Das Ereignis kommt in die Zeitung", en: "The event makes the newspaper" }, accept: ["event", "the event", "occurrence", "the occurrence", "incident", "the incident"], hint: "Something that HAPPENS, planned or not. Compare die Veranstaltung (u62), which somebody has to organize." },
        { id: "de-u55l1-diepresse", type: "vocab", front: "die Presse", reading: "diepresse", meaning: "the press", example: { jp: "Die Presse hat über den Streit geschrieben, obwohl niemand mit ihr sprechen wollte.", en: "The press wrote about the quarrel, although nobody wanted to talk to them." }, drill: { jp: "Die Presse war schon da", en: "The press was already there" }, accept: ["press", "the press", "media", "the media"], hint: "The printing press, then the newspapers, then all news media. die Pressefreiheit = freedom of the press." },
      ],
    },
    {
      id: "de-u55l2",
      unit: 55,
      lesson: 2,
      title: "Politik und Macht",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about who decides: power, parties, casting a vote, freedom, and who stands in for whom.",
      items: [
        { id: "de-u55l2-diemacht", type: "vocab", front: "die Macht", reading: "diemacht", meaning: "the power", example: { jp: "Wer die Macht hat, hört selten auf die Kritik von unten.", en: "Whoever has the power rarely listens to criticism from below." }, drill: { jp: "Die Macht bleibt bei der Partei", en: "The power stays with the party" }, accept: ["power", "the power", "might", "the might", "authority", "the authority"], hint: "an der Macht sein = to be in power. Plural die Mächte for the great powers of the world." },
        { id: "de-u55l2-diepartei", type: "vocab", front: "die Partei", reading: "diepartei", meaning: "the party", example: { jp: "Die Partei hat die Wahl gewonnen, obwohl viele Bürger nicht zufrieden waren.", en: "The party won the election, although many citizens were not satisfied." }, drill: { jp: "Die Partei hat die Wahl gewonnen", en: "The party won the election" }, accept: ["party", "the party", "political party", "the political party"], hint: "A POLITICAL party only. A party you go to is das Fest or die Feier — never die Partei." },
        { id: "de-u55l2-diestimme", type: "vocab", front: "die Stimme", reading: "diestimme", meaning: "the vote", example: { jp: "Bei der Wahl war meine Stimme wichtig, weil das Ergebnis so eng war.", en: "At the election my vote mattered, because the result was so close." }, drill: { jp: "Die Stimme war sehr laut", en: "The voice was very loud" }, accept: ["vote", "the vote", "voice", "the voice"], hint: "One word, two jobs: the voice you speak with and the vote you cast. seine Stimme abgeben = to cast a vote." },
        { id: "de-u55l2-diefreiheit", type: "vocab", front: "die Freiheit", reading: "diefreiheit", meaning: "the freedom", example: { jp: "Die Freiheit der Presse ist ein Recht, das man schnell verlieren kann.", en: "Freedom of the press is a right that you can lose quickly." }, drill: { jp: "Die Freiheit kommt nicht von selbst", en: "Freedom does not come by itself" }, accept: ["freedom", "the freedom", "liberty", "the liberty"], hint: "frei + -heit, the ending that turns an adjective into a noun. Always feminine: die Freiheit, die Sicherheit." },
        { id: "de-u55l2-vertreten", type: "vocab", front: "vertreten", reading: "vertreten", meaning: "to represent", example: { jp: "Der Kollege vertritt uns bei der Besprechung, weil ich nicht kommen kann.", en: "The colleague is representing us at the meeting, because I can't come." }, drill: { jp: "Zwei Kollegen vertreten die Gruppe", en: "Two colleagues represent the group" }, accept: ["to represent", "represent", "to stand in for", "to stand for", "to hold", "to deputize for"], hint: "Two senses: to stand in for a person, and to hold a position — eine Meinung vertreten." },
        { id: "de-u55l2-diepolitik", type: "vocab", front: "die Politik", reading: "diepolitik", meaning: "the politics", example: { jp: "Über Politik spricht man am Tisch lieber nicht, sagt meine Mutter.", en: "You'd better not talk about politics at the table, my mother says." }, drill: { jp: "Die Politik kostet viel Geld", en: "Politics costs a lot of money" }, accept: ["politics", "the politics", "policy", "the policy"], hint: "Both 'politics' and 'a policy': die Politik der Firma. No plural in the first sense." },
      ],
    },
    {
      id: "de-u55l3",
      unit: 55,
      lesson: 3,
      title: "Probleme der Gesellschaft",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name what a society argues about: poverty, education, violence, a crisis, fairness, and a strike.",
      items: [
        { id: "de-u55l3-diearmut", type: "vocab", front: "die Armut", reading: "diearmut", meaning: "the poverty", example: { jp: "Gegen Armut hilft Bildung mehr als Geld, sagt die Forschung.", en: "Education helps against poverty more than money does, research says." }, drill: { jp: "Die Armut ist ein Problem", en: "Poverty is a problem" }, accept: ["poverty", "the poverty"], hint: "From arm (poor). Its opposite noun is der Reichtum, from reich (rich)." },
        { id: "de-u55l3-diebildung", type: "vocab", front: "die Bildung", reading: "diebildung", meaning: "the education", example: { jp: "Ohne gute Bildung ist es schwer, eine gute Stelle zu finden.", en: "Without a good education it is hard to find a good job." }, drill: { jp: "Die Bildung hilft gegen Armut", en: "Education helps against poverty" }, accept: ["education", "the education", "schooling", "the schooling", "formation", "the formation"], hint: "From bilden, to form. Wider than die Ausbildung, which is vocational training — this is everything you learn." },
        { id: "de-u55l3-diegewalt", type: "vocab", front: "die Gewalt", reading: "diegewalt", meaning: "the violence", example: { jp: "Gewalt hilft in einem Streit nie, sie macht ihn meistens größer.", en: "Violence never helps in a quarrel; it usually makes it bigger." }, drill: { jp: "Die Gewalt ist ein Problem", en: "Violence is a problem" }, accept: ["violence", "the violence", "force", "the force", "power", "the power"], hint: "Also neutral 'force': die Staatsgewalt. Against die Macht — Macht is who decides, Gewalt is what breaks things." },
        { id: "de-u55l3-diekrise", type: "vocab", front: "die Krise", reading: "diekrise", meaning: "the crisis", example: { jp: "In einer Krise hilft es, ruhig zu bleiben und zusammen zu arbeiten.", en: "In a crisis it helps to stay calm and work together." }, drill: { jp: "Die Krise dauert schon lange", en: "The crisis has lasted a long time" }, accept: ["crisis", "the crisis"], hint: "Plural die Krisen. German uses it for health, money and relationships alike: eine Krise haben." },
        { id: "de-u55l3-diegerechtigkeit", type: "vocab", front: "die Gerechtigkeit", reading: "diegerechtigkeit", meaning: "the justice", example: { jp: "Die Gerechtigkeit war das Ziel, aber der Weg war sehr lang.", en: "Justice was the goal, but the way was very long." }, drill: { jp: "Die Gerechtigkeit ist ein Ziel", en: "Justice is a goal" }, accept: ["justice", "the justice", "fairness", "the fairness"], hint: "gerecht (just) + -igkeit. The long ending is regular: möglich → Möglichkeit, gerecht → Gerechtigkeit." },
        { id: "de-u55l3-derstreik", type: "vocab", front: "der Streik", reading: "derstreik", meaning: "the strike", example: { jp: "Wegen des Streiks fährt heute kein Zug, und niemand weiß wie lange.", en: "Because of the strike no train is running today, and nobody knows for how long." }, drill: { jp: "Der Streik dauert drei Tage", en: "The strike lasts three days" }, accept: ["strike", "the strike", "industrial action", "walkout", "the walkout"], hint: "Borrowed from English. streiken = to be on strike; in den Streik treten = to go on strike. Not der Streit (u51)." },
      ],
    },
    {
      id: "de-u55l4",
      unit: 55,
      lesson: 4,
      title: "Die Öffentlichkeit",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what the public does about a story: back something, demand something, criticize it — and talk about where you are from.",
      items: [
        { id: "de-u55l4-dieoffentlichkeit", type: "vocab", front: "die Öffentlichkeit", reading: "dieoffentlichkeit", meaning: "the public", example: { jp: "Die Öffentlichkeit hat lange nichts gewusst, weil die Firma geschwiegen hat.", en: "The public knew nothing for a long time, because the company stayed silent." }, drill: { jp: "Die Öffentlichkeit fordert mehr Geld", en: "The public demands more money" }, accept: ["public", "the public", "the general public", "publicity"], hint: "öffentlich + -keit. in der Öffentlichkeit = in public, out where everybody can see." },
        { id: "de-u55l4-diebevolkerung", type: "vocab", front: "die Bevölkerung", reading: "diebevolkerung", meaning: "the population", example: { jp: "Die Bevölkerung der Stadt wächst schnell, deshalb sind die Wohnungen so teuer.", en: "The city's population is growing fast, so the flats are so expensive." }, drill: { jp: "Die Bevölkerung wächst sehr schnell", en: "The population is growing very fast" }, accept: ["population", "the population", "people", "the people", "inhabitants", "the inhabitants"], hint: "das Volk (a people) is inside it. Of a country or a city — for the people in a room, say die Gäste or man." },
        { id: "de-u55l4-unterstutzen", type: "vocab", front: "unterstützen", reading: "unterstutzen", meaning: "to support", example: { jp: "Viele Bürger unterstützen den Verein, obwohl er sehr wenig Geld hat.", en: "Many citizens support the club, although it has very little money." }, drill: { jp: "Viele Bürger unterstützen den Verein", en: "Many citizens support the club" }, accept: ["to support", "support", "to back", "back", "to help", "to assist"], hint: "unter + stützen (to prop up): to hold a thing up from below. Inseparable — sie unterstützt uns." },
        { id: "de-u55l4-fordern", type: "vocab", front: "fordern", reading: "fordern", meaning: "to call for", example: { jp: "Die Kollegen fordern mehr Geld, weil die Preise so stark gestiegen sind.", en: "The colleagues are demanding more money, because prices have risen so sharply." }, drill: { jp: "Die Kollegen fordern mehr Geld", en: "The colleagues demand more money" }, accept: ["to demand", "demand", "to call for", "call for", "to require", "to claim"], hint: "Stronger than bitten or verlangen — a demand made out loud. Don't confuse it with fördern (to promote), one umlaut away." },
        { id: "de-u55l4-dieheimat", type: "vocab", front: "die Heimat", reading: "dieheimat", meaning: "the home", example: { jp: "Nach zehn Jahren ist die Stadt für uns zur Heimat geworden.", en: "After ten years the city has become home for us." }, drill: { jp: "Die Heimat bleibt immer im Herzen", en: "Home always stays in the heart" }, accept: ["home", "the home", "homeland", "the homeland", "native country", "where you are from"], hint: "Where you feel you belong — never das Haus. English has no clean word for it, which is why German keeps it." },
        { id: "de-u55l4-diekritik", type: "vocab", front: "die Kritik", reading: "diekritik", meaning: "the criticism", example: { jp: "Die Kritik war hart, aber am Ende hat sie uns sehr geholfen.", en: "The criticism was harsh, but in the end it helped us a lot." }, drill: { jp: "Die Kritik kommt von den Kollegen", en: "The criticism comes from the colleagues" }, accept: ["criticism", "the criticism", "critique", "the critique", "review", "the review"], hint: "Also a review of a book or a film. Kritik üben an etwas = to criticize something." },
      ],
    },
  ],
};
