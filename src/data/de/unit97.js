// DE Unit 97 — Ethik und Verantwortung (slot: ethics) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Already taught, used but never re-taught: die Verantwortung (u61), die Schuld
// (u61), der Verstoß (u61), das Gewissen (u58), die Rücksicht (u57), die
// Gerechtigkeit (u55), der Zweck (u52), die Folge (u52), die Absicht (u62), die
// Grenze (u19), die Pflicht (u32).
// Self-check, dropped: die Verantwortlichkeit (die Verantwortung u61), die
// Folgen (the plural of die Folge u52 — never teach a plural whose singular is
// taught), die Rücksichtnahme (die Rücksicht u57).
// ⚠️ A REAL COLLISION WORTH KNOWING: `die Würde` (dignity) is BLOCKED as a front
// by `würde` (the subjunctive, u37) — fronts are unique per language and the
// fold is case-insensitive. Dignity is therefore taught here through examples
// and the hint on der Grundsatz, not as its own card. Not a defect, and NOT a
// reason to weaken the validator: the word is reachable, it simply has no card.
//
// FREE: Details, Prozent, Firmen, Kunden, Dilemma, Moral, Transparenz, Fairness, Gemeinwohl, Grundsatz, Grundsaetze, Argumente, Studien
export const DE_UNIT97 = {
  id: "de-u97",
  lang: "de",
  title: "Ethik und Verantwortung",
  order: 97,
  stage: "b2",
  lessons: [
    {
      id: "de-u97l1",
      unit: 97,
      lesson: 1,
      title: "Grundsätze",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what you stand on before an argument starts — a principle, morality itself, honesty, transparency and the common good.",
      items: [
        { id: "de-u97l1-dergrundsatz", type: "vocab", front: "der Grundsatz", reading: "dergrundsatz", meaning: "the basic principle", example: { jp: "Der Grundsatz ist einfach: Die Würde des Menschen darf man nicht gegen Kosten abwägen.", en: "The principle is simple: human dignity may not be weighed against costs." }, drill: { jp: "Der Grundsatz bleibt immer gleich", en: "The principle always stays the same" }, accept: ["principle", "the principle", "basic principle", "tenet", "maxim"], hint: "der Grund (u29) + der Satz: the sentence everything else rests on. aus Grundsatz = on principle. The dignity clause the example quotes is Article 1 of the German constitution." },
        { id: "de-u97l1-diemoral", type: "vocab", front: "die Moral", reading: "diemoral", meaning: "the morality", example: { jp: "Über Moral lässt sich streiten, über das Gesetz meistens nicht.", en: "You can argue about morality; about the law usually not." }, drill: { jp: "Die Moral wiegt hier schwerer", en: "Morality weighs more heavily here" }, accept: ["morality", "the morality", "morals", "moral", "ethics", "morale"], hint: "Two senses, and the stress tells them apart in use: die Moral of a story is its lesson, and die Moral of a team is its morale. moralisch is the adjective." },
        { id: "de-u97l1-dieaufrichtigkeit", type: "vocab", front: "die Aufrichtigkeit", reading: "dieaufrichtigkeit", meaning: "the sincerity", example: { jp: "Seine Aufrichtigkeit hat ihm viel Kritik gebracht, aber sie hat die Diskussion ehrlicher gemacht.", en: "His sincerity brought him a lot of criticism, but it made the discussion more honest." }, drill: { jp: "Die Aufrichtigkeit kostet oft viel", en: "Sincerity often costs a lot" }, accept: ["sincerity", "the sincerity", "honesty", "candour", "candor", "integrity"], hint: "aufrichtig (upright, sincere) + -keit. Warmer than Ehrlichkeit: ehrlich is not lying, aufrichtig is meaning what you say." },
        { id: "de-u97l1-dietransparenz", type: "vocab", front: "die Transparenz", reading: "dietransparenz", meaning: "the transparency", example: { jp: "Die Firma verspricht Transparenz, veröffentlicht aber weder die Rohdaten noch die Methode.", en: "The company promises transparency, but publishes neither the raw data nor the method." }, drill: { jp: "Die Transparenz kostet die Firma wenig", en: "Transparency costs the company little" }, accept: ["transparency", "the transparency", "openness"], hint: "Almost always about institutions rather than glass. Note the drill: fehlen is itself untaught in German (see u88 §6) — this is one of the few places it is unavoidable, so it stays declared below." },
        { id: "de-u97l1-dasgemeinwohl", type: "vocab", front: "das Gemeinwohl", reading: "dasgemeinwohl", meaning: "the common good", example: { jp: "Das Gemeinwohl steht in der Verfassung, aber im Streitfall entscheidet am Ende ein Gericht darüber.", en: "The common good is in the constitution, but in a dispute a court decides about it in the end." }, drill: { jp: "Das Gemeinwohl steht über dem Gewinn", en: "The common good stands above profit" }, accept: ["common good", "the common good", "public good", "public interest", "general welfare"], hint: "gemein (common, shared) + das Wohl (welfare). A live term in German property law — Eigentum verpflichtet, ownership carries obligations." },
        { id: "de-u97l1-diefairness", type: "vocab", front: "die Fairness", reading: "diefairness", meaning: "the fairness", example: { jp: "Bei aller Fairness gegenüber der Gegenseite: Dieses Argument ist einfach nicht stichhaltig.", en: "With all fairness towards the other side: this argument is simply not valid." }, drill: { jp: "Die Fairness bleibt sehr wichtig", en: "Fairness remains very important" }, accept: ["fairness", "the fairness", "sportsmanship"], hint: "Borrowed whole from English and fully naturalized — die Fairness, no plural. German also says fair (Das ist nicht fair) far more readily than gerecht." },
      ],
    },
    {
      id: "de-u97l2",
      unit: 97,
      lesson: 2,
      title: "Wenn etwas falsch läuft",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name a wrong precisely — injustice, abuse, exploitation, an accusation, and the difference between careless and deliberate.",
      items: [
        { id: "de-u97l2-dasunrecht", type: "vocab", front: "das Unrecht", reading: "dasunrecht", meaning: "the injustice", example: { jp: "Das Unrecht war damals legal, und genau deshalb ist die Aufarbeitung so schwer.", en: "The injustice was legal at the time, and that is exactly why the reckoning is so hard." }, drill: { jp: "Das Unrecht bleibt bis heute ohne Strafe", en: "The injustice remains unpunished to this day" }, accept: ["injustice", "the injustice", "wrong", "the wrong", "wrongdoing"], hint: "un- + das Recht (u32): the opposite of right. jemandem Unrecht tun = to wrong someone; im Unrecht sein = to be in the wrong." },
        { id: "de-u97l2-dermissbrauch", type: "vocab", front: "der Missbrauch", reading: "dermissbrauch", meaning: "the abuse", example: { jp: "Der Missbrauch der Daten wurde erst bemerkt, als die Behörde selbst eine Prüfung verlangte.", en: "The misuse of the data was only noticed when the authority itself demanded an audit." }, drill: { jp: "Der Missbrauch kostet das Vertrauen", en: "The abuse costs trust" }, accept: ["abuse", "the abuse", "misuse", "the misuse", "malpractice"], hint: "miss- (wrongly) + der Brauch (use): using something wrongly. Note ß → ss in the reading. Covers data misuse, drug abuse and abuse of office alike." },
        { id: "de-u97l2-dieausbeutung", type: "vocab", front: "die Ausbeutung", reading: "dieausbeutung", meaning: "the exploitation", example: { jp: "Die Ausbeutung liegt weit weg in der Lieferkette, deshalb sieht der Kunde am Ende nur den Preis.", en: "The exploitation lies far away in the supply chain, which is why the customer in the end sees only the price." }, drill: { jp: "Die Ausbeutung steckt in der Lieferkette", en: "The exploitation is in the supply chain" }, accept: ["exploitation", "the exploitation"], hint: "From ausbeuten (to exploit — people or a mine). Of resources it is neutral; of people it is one of the harder words in German political argument." },
        { id: "de-u97l2-dervorwurf", type: "vocab", front: "der Vorwurf", reading: "dervorwurf", meaning: "the accusation", example: { jp: "Der Vorwurf ist schwer, aber bisher hat ihn niemand mit Quellen untermauert.", en: "The accusation is serious, but so far nobody has backed it up with sources." }, drill: { jp: "Der Vorwurf wiegt sehr schwer", en: "The accusation weighs very heavily" }, accept: ["accusation", "the accusation", "reproach", "the reproach", "allegation", "charge"], hint: "vor + werfen: thrown in front of someone. jemandem etwas vorwerfen = to reproach someone with something — the verb behind unterstellen (u88)." },
        { id: "de-u97l2-fahrlassig", type: "vocab", front: "fahrlässig", reading: "fahrlassig", meaning: "negligent", example: { jp: "Fahrlässig heißt nicht absichtlich, trotzdem haftet die Firma für den ganzen Schaden.", en: "Negligent does not mean intentional; nevertheless the company is liable for the whole damage." }, drill: { jp: "Dieser Fehler wirkt sehr fahrlässig", en: "This mistake seems very negligent" }, accept: ["negligent", "negligently", "careless", "reckless"], hint: "A legal grade, not an insult: grob fahrlässig (grossly negligent) is the level at which German insurance stops paying. Its opposite is vorsätzlich, below." },
        { id: "de-u97l2-vorsatzlich", type: "vocab", front: "vorsätzlich", reading: "vorsatzlich", meaning: "deliberate", example: { jp: "Ob der Verstoß vorsätzlich war, entscheidet das Gericht und nicht die Öffentlichkeit.", en: "Whether the violation was deliberate is decided by the court and not by the public." }, drill: { jp: "Der Verstoß war eindeutig vorsätzlich", en: "The violation was clearly deliberate" }, accept: ["deliberate", "deliberately", "intentional", "wilful", "willful", "premeditated"], hint: "der Vorsatz (intent) + -lich. The pair fahrlässig / vorsätzlich runs through the whole German criminal code, and the difference decides the sentence." },
      ],
    },
    {
      id: "de-u97l3",
      unit: 97,
      lesson: 3,
      title: "Was man verlangen kann",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Judge what may fairly be asked of someone — defensible, reasonable to expect, a duty broken, a promise made to yourself, and care for others.",
      items: [
        { id: "de-u97l3-vertretbar", type: "vocab", front: "vertretbar", reading: "vertretbar", meaning: "defensible", example: { jp: "Die Entscheidung ist vertretbar, auch wenn die halbe Branche sie für falsch hält.", en: "The decision is defensible, even if half the sector considers it wrong." }, drill: { jp: "Diese Kosten bleiben gerade noch vertretbar", en: "These costs remain just about defensible" }, accept: ["defensible", "justifiable", "acceptable", "reasonable", "tenable"], hint: "From vertreten (to represent, to stand for): you can stand in front of others and defend it. Not the same as right — only arguable." },
        { id: "de-u97l3-zumutbar", type: "vocab", front: "zumutbar", reading: "zumutbar", meaning: "reasonable to expect", example: { jp: "Ein längerer Weg ist zumutbar, ein Umzug in eine andere Stadt dagegen nicht.", en: "A longer journey is reasonable to expect; moving to another city, by contrast, is not." }, drill: { jp: "Dieser Weg bleibt für alle zumutbar", en: "This route remains reasonable for everyone" }, accept: ["reasonable to expect", "reasonable", "acceptable", "fair to ask", "bearable"], hint: "From zumuten (to expect something of someone). A legal test word — German labour and social law argues constantly about what is zumutbar." },
        { id: "de-u97l3-diepflichtverletzung", type: "vocab", front: "die Pflichtverletzung", reading: "diepflichtverletzung", meaning: "the breach of duty", example: { jp: "Eine Pflichtverletzung liegt vor, sobald der Vorstand die Prüfung bewusst nicht in Auftrag gibt.", en: "A breach of duty exists as soon as the board deliberately does not commission the audit." }, drill: { jp: "Die Pflichtverletzung kostet den Vorstand viel", en: "The breach of duty costs the board dearly" }, accept: ["breach of duty", "the breach of duty", "dereliction of duty", "violation of duty"], hint: "die Pflicht (u32) + die Verletzung (injury, violation). eine Pflichtverletzung liegt vor is the fixed legal frame — 'a breach of duty is present'." },
        { id: "de-u97l3-dieselbstverpflichtung", type: "vocab", front: "die Selbstverpflichtung", reading: "dieselbstverpflichtung", meaning: "the voluntary commitment", example: { jp: "Die Selbstverpflichtung der Branche wirkt gut, aber niemand überprüft sie von außen.", en: "The sector's voluntary commitment looks good, but nobody checks it from outside." }, drill: { jp: "Die Selbstverpflichtung bleibt ohne Folgen", en: "The voluntary commitment stays without consequences" }, accept: ["voluntary commitment", "the voluntary commitment", "self-commitment", "voluntary undertaking", "pledge"], hint: "selbst + verpflichten: binding yourself. In German policy debate it is the industry's alternative to a Gesetz (u32) — and the argument is always whether it works." },
        { id: "de-u97l3-diefursorge", type: "vocab", front: "die Fürsorge", reading: "diefursorge", meaning: "the duty of care", example: { jp: "Die Fürsorge für die Mitarbeiter endet nicht am Werktor, und genau das wird hier oft vergessen.", en: "Care for employees does not end at the factory gate, and that is exactly what is often forgotten here." }, drill: { jp: "Die Fürsorge bleibt eine Pflicht", en: "Care remains a duty" }, accept: ["care", "the care", "welfare", "duty of care", "provision", "solicitude"], hint: "für + sorgen (to care for). die Fürsorgepflicht is an employer's legal duty of care — the word carries obligation, not warmth." },
        { id: "de-u97l3-dulden", type: "vocab", front: "dulden", reading: "dulden", meaning: "to tolerate", example: { jp: "Die Behörde duldet den Zustand seit Jahren, obwohl er gegen die eigene Vorschrift verstößt.", en: "The authority has tolerated the situation for years, although it violates its own regulation." }, drill: { jp: "Die Behörden dulden diese Praxis", en: "The authorities tolerate this practice" }, accept: ["to tolerate", "tolerate", "to put up with", "to permit", "to suffer", "to allow"], hint: "Cooler than erlauben (u48): you do not approve, you simply do not stop it. keinen Aufschub dulden = to brook no delay." },
      ],
    },
    {
      id: "de-u97l4",
      unit: 97,
      lesson: 4,
      title: "Heikle Fälle",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Handle the hard case — call something delicate or contested, name the dilemma, give an account of yourself, weigh means against ends, and say you regret it.",
      items: [
        { id: "de-u97l4-heikel", type: "vocab", front: "heikel", reading: "heikel", meaning: "delicate", example: { jp: "Das Thema ist heikel, deshalb spricht der Vorstand darüber nur hinter verschlossenen Türen.", en: "The topic is delicate, which is why the board only talks about it behind closed doors." }, drill: { jp: "Dieses Thema bleibt sehr heikel", en: "This topic remains very delicate" }, accept: ["delicate", "tricky", "sensitive", "awkward", "touchy", "precarious"], hint: "Careful with the endings — the e drops: eine heikle Frage. Of a person it can also mean fussy about food, especially in the south." },
        { id: "de-u97l4-umstritten", type: "vocab", front: "umstritten", reading: "umstritten", meaning: "contested", example: { jp: "Die Methode ist wissenschaftlich umstritten, trotzdem steht sie seit Jahren in der Vorschrift.", en: "The method is scientifically contested; nevertheless it has been in the regulation for years." }, drill: { jp: "Diese Methode bleibt sehr umstritten", en: "This method remains very contested" }, accept: ["contested", "controversial", "disputed", "contentious", "debated"], hint: "The participle of umstreiten — fought over from all sides. The neutral German word where English reaches for 'controversial', which sounds heavier." },
        { id: "de-u97l4-dasdilemma", type: "vocab", front: "das Dilemma", reading: "dasdilemma", meaning: "the dilemma", example: { jp: "Das Dilemma bleibt: Jede Entscheidung schadet einer Seite, und keine Seite hat Unrecht.", en: "The dilemma remains: every decision harms one side, and neither side is in the wrong." }, drill: { jp: "Das Dilemma bleibt bis heute", en: "The dilemma remains to this day" }, accept: ["dilemma", "the dilemma", "quandary", "predicament"], hint: "Plural die Dilemmata or die Dilemmas — both are used, the first is more formal. in einem Dilemma stecken = to be stuck in a dilemma." },
        { id: "de-u97l4-dierechenschaft", type: "vocab", front: "die Rechenschaft", reading: "dierechenschaft", meaning: "the account", example: { jp: "Rechenschaft schuldet der Vorstand nicht nur den Kunden, sondern auch den eigenen Mitarbeitern.", en: "The board owes an account not only to the customers, but also to its own employees." }, drill: { jp: "Die Rechenschaft kommt immer später", en: "The account always comes later" }, accept: ["account", "the account", "accountability", "reckoning", "answerability"], hint: "rechnen (to reckon) + -schaft: literally the reckoning you give. Lives in fixed phrases — Rechenschaft ablegen (to account for), zur Rechenschaft ziehen (to hold to account)." },
        { id: "de-u97l4-dasmittel", type: "vocab", front: "das Mittel", reading: "dasmittel", meaning: "the means", example: { jp: "Der Zweck heiligt die Mittel nicht, auch wenn das Ziel selbst niemand kritisiert.", en: "The end does not justify the means, even if nobody criticizes the goal itself." }, drill: { jp: "Das Mittel passt nicht zum Zweck", en: "The means does not fit the purpose" }, accept: ["means", "the means", "remedy", "the remedy", "medium", "agent", "resource"], hint: "One word, several lives: the means to an end, a medicine (das Schmerzmittel), a cleaning agent, and — in the plural — funds. die Mittel kürzen = to cut funding." },
        { id: "de-u97l4-bereuen", type: "vocab", front: "bereuen", reading: "bereuen", meaning: "to regret deeply", example: { jp: "Öffentlich bereuen sie nichts, im Gespräch wirkt es dann oft ganz anders.", en: "Publicly they regret nothing; in conversation it then often seems quite different." }, drill: { jp: "Viele Firmen bereuen den Vertrag", en: "Many companies regret the contract" }, accept: ["to regret", "regret", "to repent", "repent", "to rue", "to be sorry for"], hint: "die Reue (remorse) is the noun. Stronger and more moral than bedauern, which is closer to 'to be sorry about' — a court cares about Reue." },
      ],
    },
  ],
};
