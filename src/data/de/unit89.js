// DE Unit 89 — Belege und Quellen (slot: evidence) — B2
// Conventions: de/unit1.js (A1/A2) + de/unit51.js (B1) + de/unit88.js (B2 band
// constitution). u88 reserved the SOURCE half of this field for this unit and
// kept the ARGUING half (widerlegen, entkräften, einräumen…) — that split holds.
// `der Beleg` (u78), `die Angabe` (u87), `der Durchschnitt` (u87), `messen`
// (u34), `die Umfrage` (u32), `veröffentlichen` (u55) and `der Zusammenhang`
// (u52) are all already taught: used freely in examples here, never re-taught.
// Self-check: die Auswertung / die Erhebung dropped as duplicates of auswerten /
// erheben. ⚠️ AND ONE THE TOOL MISSED: this unit first taught `nachweisen`, which
// is the same lexeme as `der Nachweis` (u76). check-front.mjs reported it free
// because its stemmer strips a trailing -s, so `nachweis` and `nachweisen` came
// out as different stems. Replaced with `bestätigen`. Second instance of this
// class after die Verhandlung/verhandeln in u93 - the stemmer is a filter, not a
// guarantee, and a noun/verb pair still needs the eye.
//
// FREE: Zahlen, Studie, Studien, Daten, Statistik, Statistiken, Experten, Kritiker, Quellen, Prozent, Test, Tests, Details, Regionen, Gruppen, Argument, Institut, Methode
export const DE_UNIT89 = {
  id: "de-u89",
  lang: "de",
  title: "Belege und Quellen",
  order: 89,
  stage: "b2",
  lessons: [
    {
      id: "de-u89l1",
      unit: 89,
      lesson: 1,
      title: "Die Quelle und der Beleg",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say where a claim comes from and how much weight it carries — name the source, quote it, prove a point, and flag the ones you don't trust.",
      items: [
        { id: "de-u89l1-dieherkunft", type: "vocab", front: "die Herkunft", reading: "dieherkunft", meaning: "the provenance", example: { jp: "Die Herkunft der Zahlen bleibt fragwürdig, und deshalb kritisiert die Forschung den ganzen Bericht.", en: "The origin of the figures remains dubious, and that is why research criticizes the whole report." }, drill: { jp: "Die Herkunft der Daten bleibt fragwürdig", en: "The origin of the data remains dubious" }, accept: ["origin", "the origin", "provenance", "background", "descent"], hint: "her (hither) + kommen: where a thing came here from. Used of data and goods (die Herkunft der Ware) and of people (deutscher Herkunft). die Quelle (u55) is the source you cite — this is where it came from." },
        { id: "de-u89l1-zitieren", type: "vocab", front: "zitieren", reading: "zitieren", meaning: "to quote", example: { jp: "Die Kritiker zitieren dieselbe Studie, aber sie lesen darin etwas anderes.", en: "The critics quote the same study, but they read something different in it." }, drill: { jp: "Kritiker zitieren gern diese Zahlen", en: "Critics like to quote these figures" }, accept: ["to quote", "quote", "to cite", "cite"], hint: "Quoting the words; belegen would be backing the claim. falsch zitieren = to misquote — the accusation that follows most public arguments." },
        { id: "de-u89l1-bestatigen", type: "vocab", front: "bestätigen", reading: "bestatigen", meaning: "to confirm", example: { jp: "Die zweite Studie bestätigt das Ergebnis, aber sie stammt von derselben Gruppe.", en: "The second study confirms the result, but it comes from the same group." }, drill: { jp: "Die Studien bestätigen das Ergebnis", en: "The studies confirm the result" }, accept: ["to confirm", "confirm", "to verify", "verify", "to corroborate", "to acknowledge"], hint: "fest (firm) sits inside it: to make something firm. Used for findings, appointments and receipt of an email alike — den Erhalt bestätigen. sich bestätigen = to prove true." },
        { id: "de-u89l1-derbeweis", type: "vocab", front: "der Beweis", reading: "derbeweis", meaning: "the piece of evidence", example: { jp: "Der Beweis kam nie, und deshalb bleibt die ganze These eine Vermutung.", en: "The proof never came, and that is why the whole thesis remains a supposition." }, drill: { jp: "Der Beweis liegt schon lange vor", en: "The proof has been available for a long time" }, accept: ["proof", "the proof", "evidence", "the evidence"], hint: "der Beweis is the thing you hold up; der Nachweis (u76) is the formal record of it. In court it is das Beweismittel; in maths, ein Beweis is a proof in the strict sense." },
        { id: "de-u89l1-verlasslich", type: "vocab", front: "verlässlich", reading: "verlasslich", meaning: "dependable", example: { jp: "Wir brauchen verlässliche Zahlen, sonst steht die Schlussfolgerung am Ende auf nichts.", en: "We need reliable figures, otherwise the conclusion stands on nothing in the end." }, drill: { jp: "Diese Quellen gelten als verlässlich", en: "These sources count as reliable" }, accept: ["reliable", "dependable", "trustworthy", "solid"], hint: "From sich verlassen auf (to rely on): you can lay yourself on it. Of people and of data alike — verlässliche Zahlen, ein verlässlicher Partner." },
        { id: "de-u89l1-fragwurdig", type: "vocab", front: "fragwürdig", reading: "fragwurdig", meaning: "dubious", example: { jp: "Die Methode wirkt fragwürdig, auch wenn das Ergebnis am Ende richtig sein sollte.", en: "The method seems dubious, even if the result should turn out to be right in the end." }, drill: { jp: "Diese Quellen bleiben fragwürdig", en: "These sources remain dubious" }, accept: ["dubious", "questionable", "doubtful", "suspect", "shady"], hint: "Literally 'worthy of a question'. German uses it as a polite knife: fragwürdig does not mean interesting, it means you should not trust it." },
      ],
    },
    {
      id: "de-u89l2",
      unit: 89,
      lesson: 2,
      title: "Zahlen und Erhebung",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Read a statistic critically — say who was asked, whether the sample stands for anything, which way the trend runs, and how much the numbers move.",
      items: [
        { id: "de-u89l2-diestatistik", type: "vocab", front: "die Statistik", reading: "diestatistik", meaning: "the statistics", example: { jp: "Die Statistik zeigt einen klaren Unterschied, aber sie erklärt seinen Grund nicht.", en: "The statistics show a clear difference, but they do not explain its reason." }, drill: { jp: "Die Statistik zeigt das Gegenteil", en: "The statistics show the opposite" }, accept: ["statistics", "the statistics", "statistic", "the statistic", "statistical data"], hint: "Singular in German where English often goes plural: Die Statistik zeigt… = 'the figures show…'. die Statistiken = several separate sets." },
        { id: "de-u89l2-diestichprobe", type: "vocab", front: "die Stichprobe", reading: "diestichprobe", meaning: "the sample", example: { jp: "Die Stichprobe war viel zu klein, deshalb sagt das Ergebnis über die ganze Stadt wenig aus.", en: "The sample was far too small, so the result says little about the whole city." }, drill: { jp: "Die Stichprobe bleibt deutlich zu klein", en: "The sample stays clearly too small" }, accept: ["sample", "the sample", "random sample", "spot check"], hint: "der Stich (a jab) + die Probe (a test): you poke in at random and test what comes out. Also the customs officer's spot check." },
        { id: "de-u89l2-erheben", type: "vocab", front: "erheben", reading: "erheben", meaning: "to collect data", example: { jp: "Das Institut erhebt die Daten selbst, damit niemand die Methode später kritisieren kann.", en: "The institute collects the data itself, so that nobody can criticize the method later." }, drill: { jp: "Wir erheben die Zahlen im Sommer", en: "We collect the figures in summer" }, accept: ["to collect", "collect", "to gather", "gather", "to raise", "raise", "to survey"], hint: "Wide verb: raise (die Stimme erheben), levy (eine Gebühr erheben) and — the one you need here — collect data. Sich erheben = to stand up." },
        { id: "de-u89l2-reprasentativ", type: "vocab", front: "repräsentativ", reading: "reprasentativ", meaning: "representative", example: { jp: "Die Umfrage ist nicht repräsentativ, weil fast nur junge Leute geantwortet haben.", en: "The survey is not representative, because almost only young people answered." }, drill: { jp: "Diese Gruppen gelten als repräsentativ", en: "These groups count as representative" }, accept: ["representative", "typical"], hint: "The word that decides whether a survey means anything. German newspapers print nicht repräsentativ as a disclaimer under online polls." },
        { id: "de-u89l2-schwanken", type: "vocab", front: "schwanken", reading: "schwanken", meaning: "to fluctuate", example: { jp: "Die Zahlen schwanken stark zwischen den Regionen, und genau das macht den Durchschnitt so gefährlich.", en: "The figures fluctuate strongly between regions, and that is exactly what makes the average so dangerous." }, drill: { jp: "Die Preise schwanken sehr stark", en: "The prices fluctuate very strongly" }, accept: ["to fluctuate", "fluctuate", "to vary", "vary", "to sway", "to waver"], hint: "Physically to sway; of numbers, to move up and down. Of a person, schwanken = to be undecided — er schwankt noch." },
        { id: "de-u89l2-dietendenz", type: "vocab", front: "die Tendenz", reading: "dietendenz", meaning: "the trend", example: { jp: "Die Tendenz geht seit Jahren nach oben, auch wenn einzelne Monate das Gegenteil zeigen.", en: "The trend has been going upward for years, even if individual months show the opposite." }, drill: { jp: "Die Tendenz bleibt bis heute gleich", en: "The trend remains the same to this day" }, accept: ["trend", "the trend", "tendency", "the tendency"], hint: "Tendenz steigend / fallend = trending up / down, the standard German caption on a chart. Of a person it is a leaning, not a fact." },
      ],
    },
    {
      id: "de-u89l3",
      unit: 89,
      lesson: 3,
      title: "Prüfen und auswerten",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Audit someone else's numbers — check them, work through them, name the gap between two figures, and say when a presentation distorts what it shows.",
      items: [
        { id: "de-u89l3-uberprufen", type: "vocab", front: "überprüfen", reading: "uberprufen", meaning: "to check", example: { jp: "Niemand hat die Angaben überprüft, obwohl sie den ganzen Bericht tragen.", en: "Nobody checked the figures, although they carry the whole report." }, drill: { jp: "Wir müssen die Quellen selbst überprüfen", en: "We have to check the sources ourselves" }, accept: ["to check", "check", "to verify", "verify", "to review", "review", "to examine"], hint: "Inseparable despite the über-: er überprüft, not er prüft über. The formal, careful word — a Kontrolle rather than a glance." },
        { id: "de-u89l3-auswerten", type: "vocab", front: "auswerten", reading: "auswerten", meaning: "to analyse", example: { jp: "Die Forschung wertet die Daten neu aus, weil die erste Auswertung zu schnell fertig war.", en: "The research is analysing the data again, because the first analysis was finished too quickly." }, drill: { jp: "Wir müssen die Tests auswerten", en: "We have to analyse the tests" }, accept: ["to analyse", "to analyze", "analyse", "analyze", "to evaluate", "evaluate", "to process"], hint: "Separable: wertet … aus. aus + der Wert (value): to get the value out of raw data. Note the drill puts the prefix at the end, which is where German actually keeps it." },
        { id: "de-u89l3-dieabweichung", type: "vocab", front: "die Abweichung", reading: "dieabweichung", meaning: "the deviation", example: { jp: "Eine kleine Abweichung ist normal, aber dieser Unterschied ist viel zu groß.", en: "A small deviation is normal, but this difference is far too big." }, drill: { jp: "Die Abweichung liegt bei zehn Prozent", en: "The deviation is around ten percent" }, accept: ["deviation", "the deviation", "variance", "discrepancy", "the discrepancy", "divergence"], hint: "From abweichen (to deviate, ab + weichen 'to give way'). In stats it is the spread; in an office it is the thing you must explain." },
        { id: "de-u89l3-verzerren", type: "vocab", front: "verzerren", reading: "verzerren", meaning: "to distort", example: { jp: "Ein falscher Durchschnitt verzerrt das Bild, obwohl die Zahlen alle stimmen.", en: "A wrong average distorts the picture, although the figures are all correct." }, drill: { jp: "Diese Bilder verzerren das Ergebnis", en: "These images distort the result" }, accept: ["to distort", "distort", "to skew", "skew", "to warp", "to twist"], hint: "ver- (wrongly) + zerren (to tug): to pull something out of shape. Of a face it is a grimace; of data it is the quiet lie." },
        { id: "de-u89l3-widerspruchlich", type: "vocab", front: "widersprüchlich", reading: "widerspruchlich", meaning: "contradictory", example: { jp: "Die zwei Studien sind widersprüchlich, und keine von ihnen erklärt den Unterschied.", en: "The two studies are contradictory, and neither of them explains the difference." }, drill: { jp: "Diese Angaben wirken widersprüchlich", en: "These figures seem contradictory" }, accept: ["contradictory", "conflicting", "inconsistent", "self-contradictory"], hint: "From der Widerspruch (u79): two claims that cannot both be true. Note wider- (against), not wieder- (again) — the same trap as widerlegen (u88)." },
        { id: "de-u89l3-belastbar", type: "vocab", front: "belastbar", reading: "belastbar", meaning: "robust", example: { jp: "Die Zahlen sind belastbar, weil zwei Firmen sie nach der gleichen Methode erhoben haben.", en: "The figures are robust, because two companies collected them by the same method." }, drill: { jp: "Diese Daten gelten als belastbar", en: "These data count as robust" }, accept: ["robust", "solid", "reliable", "able to bear weight", "resilient", "durable"], hint: "From belasten (to load): it holds weight. Of data it means it survives scrutiny; of a person, that they can take pressure — belastbar is high praise in a German job ad." },
      ],
    },
    {
      id: "de-u89l4",
      unit: 89,
      lesson: 4,
      title: "Wie sicher ist das?",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Grade your own certainty out loud — mark a claim as well-founded, as a mere supposition, or as telling you nothing, and admit when something simply makes sense.",
      items: [
        { id: "de-u89l4-fundiert", type: "vocab", front: "fundiert", reading: "fundiert", meaning: "well-founded", example: { jp: "Seine Kritik ist fundiert, deshalb hört ihm sogar die Mehrheit zu.", en: "His criticism is well-founded, which is why even the majority listens to him." }, drill: { jp: "Diese Kritik wirkt sehr fundiert", en: "This criticism seems very well-founded" }, accept: ["well-founded", "sound", "solid", "informed", "substantiated", "in-depth"], hint: "From das Fundament: it has a foundation under it. fundierte Kenntnisse = solid knowledge, the phrase every German CV uses." },
        { id: "de-u89l4-diestudie", type: "vocab", front: "die Studie", reading: "diestudie", meaning: "the study", example: { jp: "Die Studie untermauert die These, aber sie ist von der Firma selbst bezahlt worden.", en: "The study underpins the thesis, but it was paid for by the company itself." }, drill: { jp: "Die Studie widerlegt diese Zahlen", en: "The study refutes these figures" }, accept: ["study", "the study", "research study", "survey"], hint: "The research paper, not the room and not the act of studying — das Arbeitszimmer and das Studium are separate words. eine Studie durchführen = to carry out a study." },
        { id: "de-u89l4-dievermutung", type: "vocab", front: "die Vermutung", reading: "dievermutung", meaning: "the supposition", example: { jp: "Das ist bisher eine Vermutung, weil niemand den Zusammenhang bisher zeigen konnte.", en: "So far that is a supposition, because nobody has been able to show the connection so far." }, drill: { jp: "Die Vermutung liegt nahe genug", en: "The supposition suggests itself clearly enough" }, accept: ["supposition", "the supposition", "assumption", "guess", "hunch", "conjecture", "suspicion"], hint: "From vermuten (to suspect, to guess). Weaker than die Annahme (u88), which you build on; a Vermutung is what you have before the evidence arrives." },
        { id: "de-u89l4-aussagekraftig", type: "vocab", front: "aussagekräftig", reading: "aussagekraftig", meaning: "meaningful", example: { jp: "Das Ergebnis ist nicht aussagekräftig, solange die Stichprobe so klein bleibt.", en: "The result is not meaningful, as long as the sample stays this small." }, drill: { jp: "Diese Zahlen bleiben wenig aussagekräftig", en: "These figures remain of little significance" }, accept: ["meaningful", "significant", "conclusive", "informative", "telling", "expressive"], hint: "die Aussage (statement) + kräftig (strong): it actually says something. The polite German way to call a chart useless is nicht besonders aussagekräftig." },
        { id: "de-u89l4-einleuchten", type: "vocab", front: "einleuchten", reading: "einleuchten", meaning: "to make sense", example: { jp: "Das leuchtet mir ein, auch wenn ich mich selbst für einen anderen Weg entschieden hätte.", en: "That makes sense to me, even though I would have decided on a different path myself." }, drill: { jp: "Das will mir nicht einleuchten", en: "That just does not make sense to me" }, accept: ["to make sense", "make sense", "to be obvious", "to be clear", "to seem plausible"], hint: "Separable: leuchtet … ein — literally 'to light up inside'. Takes the dative person: Das leuchtet mir ein. The lamp going on over your head." },
        { id: "de-u89l4-dielucke", type: "vocab", front: "die Lücke", reading: "dielucke", meaning: "the gap", example: { jp: "In der Forschung bleibt eine große Lücke, weil niemand die alten Daten je überprüft hat.", en: "A big gap remains in the research, because nobody has ever checked the old data." }, drill: { jp: "Die Lücke steckt mitten im Bericht", en: "The gap sits in the middle of the report" }, accept: ["gap", "the gap", "hole", "the hole", "blank", "space"], hint: "A hole where something should be — eine Lücke im Gesetz is a loophole, eine Bildungslücke a gap in what you know. Fill it with schließen: eine Lücke schließen." },
      ],
    },
  ],
};
