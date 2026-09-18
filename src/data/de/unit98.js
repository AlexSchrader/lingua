// DE Unit 98 — Risiko und Ungewissheit (slot: risk-uncertainty) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Already taught, used but never re-taught: die Gefahr (u81), der Schaden (u79),
// die Vorsorge (u67), die Belastung (u67), der Verlust (u66), die Versicherung
// (u25), die Panik (u81), der Zufall (u58), das Risiko (u60), warnen (u60),
// ausfallen (u62), wahrscheinlich (u54), das Ausmaß (u91 — mine, one unit back).
// Self-check, dropped as same-lexeme duplicates: die Wahrscheinlichkeit
// (wahrscheinlich u54), der Ausfall (ausfallen u62), die Warnung (warnen u60).
// ⚠️ A SELF-COLLISION INSIDE THIS UNIT, caught in my own draft: die Sicherheit /
// die Unsicherheit / die Absicherung are one family, all three were free, and
// my first version taught all three - the Spanish-B1 failure in miniature, three
// cards for one lexeme. Resolved by keeping the ANTONYM PAIR (die Unsicherheit
// l1, die Sicherheit l4 - both genuinely untaught, and a pair teaches better
// than either alone) and dropping the third derivation: die Absicherung became
// der Puffer. Note what this means: the tool cannot catch a collision between
// two cards you are writing in the same session - only against what is already
// in the corpus. That check is yours.
// ⚠️ die Sicherheit was taught NOWHERE in de u1-u97 - another hole, closed here.
//
// FREE: Details, Prozent, Firmen, Kunden, Szenario, Szenarien, Prognose, Prognosen, Risiken, Restrisiko, Krise, Krisen, System, Systeme, Studien, riskant
export const DE_UNIT98 = {
  id: "de-u98",
  lang: "de",
  title: "Risiko und Ungewissheit",
  order: 98,
  stage: "b2",
  lessons: [
    {
      id: "de-u98l1",
      unit: 98,
      lesson: 1,
      title: "Was passieren könnte",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe a risk before it happens — the uncertainty around it, the threat, the weak point, the scenario you are modelling and the forecast you distrust.",
      items: [
        { id: "de-u98l1-dieunsicherheit", type: "vocab", front: "die Unsicherheit", reading: "dieunsicherheit", meaning: "the uncertainty", example: { jp: "Die Unsicherheit ist groß, deshalb halten viele Firmen ihre Investitionen vorerst zurück.", en: "The uncertainty is great, which is why a lot of companies are holding back their investments for now." }, drill: { jp: "Die Unsicherheit bleibt sehr groß", en: "The uncertainty remains very great" }, accept: ["uncertainty", "the uncertainty", "insecurity", "the insecurity", "doubt"], hint: "un- + sicher: both not knowing (economic uncertainty) and not feeling safe (personal insecurity). The context decides which one a German sentence means." },
        { id: "de-u98l1-diebedrohung", type: "vocab", front: "die Bedrohung", reading: "diebedrohung", meaning: "the threat", example: { jp: "Die Bedrohung ist real, aber die Zahlen dazu sind bis heute sehr unsicher.", en: "The threat is real, but the figures on it are still very uncertain." }, drill: { jp: "Die Bedrohung wächst seit Jahren", en: "The threat has been growing for years" }, accept: ["threat", "the threat", "menace", "danger"], hint: "From bedrohen (to threaten). die Gefahr (u81) is the danger itself; eine Bedrohung is a danger aimed at someone — bedrohte Arten are endangered species." },
        { id: "de-u98l1-dieschwachstelle", type: "vocab", front: "die Schwachstelle", reading: "dieschwachstelle", meaning: "the weak point", example: { jp: "Die Schwachstelle war seit Jahren bekannt, trotzdem hat niemand das System überprüft.", en: "The weak point had been known for years; nevertheless nobody checked the system." }, drill: { jp: "Die Schwachstelle steckt in der Software", en: "The weak point is in the software" }, accept: ["weak point", "the weak point", "vulnerability", "weakness", "flaw"], hint: "schwach (weak) + die Stelle (place). The standard word in German IT security reporting — eine Schwachstelle schließen = to patch a vulnerability." },
        { id: "de-u98l1-dasszenario", type: "vocab", front: "das Szenario", reading: "dasszenario", meaning: "the scenario", example: { jp: "Im schlimmsten Szenario fällt die ganze Lieferkette aus, und das für mehrere Wochen.", en: "In the worst scenario the whole supply chain fails, and that for several weeks." }, drill: { jp: "Das Szenario kostet die Firma viel", en: "The scenario costs the company a lot" }, accept: ["scenario", "the scenario"], hint: "Plural die Szenarien. German planning language leans on it hard: das Worst-Case-Szenario is said in English-German, das schlimmste Szenario in plain German." },
        { id: "de-u98l1-dieprognose", type: "vocab", front: "die Prognose", reading: "dieprognose", meaning: "the forecast", example: { jp: "Die Prognose war zweimal falsch, deshalb glaubt ihr in der Branche kaum noch jemand.", en: "The forecast was wrong twice, which is why hardly anyone in the sector still believes it." }, drill: { jp: "Die Prognose kommt im Sommer", en: "The forecast comes in summer" }, accept: ["forecast", "the forecast", "prognosis", "the prognosis", "projection", "prediction"], hint: "Used for weather, economy and medicine alike. eine Prognose stellen = to make a forecast; mit einer Prognose danebenliegen is how German says a prediction missed." },
        { id: "de-u98l1-unvorhersehbar", type: "vocab", front: "unvorhersehbar", reading: "unvorhersehbar", meaning: "unforeseeable", example: { jp: "Der Verlauf war unvorhersehbar, trotzdem verlangt die Öffentlichkeit jetzt Rechenschaft von der Behörde.", en: "The course of events was unforeseeable; nevertheless the public now demands accountability from the authority." }, drill: { jp: "Diese Folgen bleiben oft unvorhersehbar", en: "These consequences often remain unforeseeable" }, accept: ["unforeseeable", "unpredictable", "unforeseen", "not foreseeable"], hint: "un + vorher (beforehand) + sehen + -bar: not able to be seen beforehand. A four-part word that is completely transparent once you cut it up — German does this constantly." },
      ],
    },
    {
      id: "de-u98l2",
      unit: 98,
      lesson: 2,
      title: "Vorbeugen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about preparing for the worst — caution, prevention, cover, the counter-measure you have ready, an early warning and the emergency itself.",
      items: [
        { id: "de-u98l2-dievorsicht", type: "vocab", front: "die Vorsicht", reading: "dievorsicht", meaning: "the caution", example: { jp: "Vorsicht ist hier kein Zeichen von Angst, sondern einfach die vernünftigere Entscheidung.", en: "Caution here is not a sign of fear, but simply the more sensible decision." }, drill: { jp: "Die Vorsicht kostet wenig Geld", en: "Caution costs little money" }, accept: ["caution", "the caution", "care", "carefulness", "prudence"], hint: "vor + sehen: looking ahead. Vorsicht! on its own is the German for 'careful!' or 'mind out!', and it is what is printed on every warning sign." },
        { id: "de-u98l2-vorbeugen", type: "vocab", front: "vorbeugen", reading: "vorbeugen", meaning: "to take precautions", example: { jp: "Man kann dem Schaden vorbeugen, aber das kostet heute Geld für ein Problem von morgen.", en: "You can prevent the damage, but that costs money today for a problem of tomorrow." }, drill: { jp: "Diese Regeln sollen dem Schaden vorbeugen", en: "These rules are meant to prevent the damage" }, accept: ["to prevent", "prevent", "to forestall", "to take precautions", "to guard against"], hint: "Separable, and it takes the DATIVE: einem Problem vorbeugen. Literally to bend forward — the noun is die Vorbeugung." },
        { id: "de-u98l2-derpuffer", type: "vocab", front: "der Puffer", reading: "derpuffer", meaning: "the buffer", example: { jp: "Ohne Puffer trägt am Ende der Kunde die Verspätung, und das steht klein im Vertrag.", en: "Without a buffer the customer bears the delay in the end, and that is in the contract in small print." }, drill: { jp: "Der Puffer reicht für zwei Wochen", en: "The buffer is enough for two weeks" }, accept: ["buffer", "the buffer", "cushion", "margin", "slack", "reserve"], hint: "Time, money or stock kept spare on purpose — einen Puffer einplanen = to build in some slack. Also the buffer at the end of a railway line, which is the original picture." },
        { id: "de-u98l2-diegegenmassnahme", type: "vocab", front: "die Gegenmaßnahme", reading: "diegegenmassnahme", meaning: "the counter-measure", example: { jp: "Die Gegenmaßnahme greift erst nach Wochen, und bis dahin wächst der Schaden weiter.", en: "The counter-measure only takes effect after weeks, and until then the damage keeps growing." }, drill: { jp: "Die Gegenmaßnahme greift viel zu spät", en: "The counter-measure takes effect far too late" }, accept: ["counter-measure", "the counter-measure", "countermeasure", "remedial action", "response"], hint: "gegen + die Maßnahme (measure). Note ß → ss in the reading. eine Maßnahme greift = a measure takes effect, the standard German collocation." },
        { id: "de-u98l2-diefruhwarnung", type: "vocab", front: "die Frühwarnung", reading: "diefruhwarnung", meaning: "the early warning", example: { jp: "Die Frühwarnung kam pünktlich, aber die Behörde hat sie erst am nächsten Morgen gelesen.", en: "The early warning came on time, but the authority only read it the next morning." }, drill: { jp: "Die Frühwarnung kommt oft zu spät", en: "The early warning often comes too late" }, accept: ["early warning", "the early warning", "advance warning"], hint: "früh + die Warnung. das Frühwarnsystem is the fixed compound for the system itself — and the word German uses for everything from floods to bank failures." },
        { id: "de-u98l2-derernstfall", type: "vocab", front: "der Ernstfall", reading: "derernstfall", meaning: "the real emergency", example: { jp: "Im Ernstfall zählt nur, wer vorher geübt hat, und nicht wer den besseren Plan geschrieben hat.", en: "In an emergency only those who practised beforehand count, and not those who wrote the better plan." }, drill: { jp: "Der Ernstfall kommt meistens sehr schnell", en: "The emergency usually comes very quickly" }, accept: ["emergency", "the emergency", "serious case", "real emergency", "when it counts"], hint: "ernst (serious) + der Fall: the case where it is no longer a drill. im Ernstfall is the fixed phrase, and the whole German civil-protection vocabulary hangs off it." },
      ],
    },
    {
      id: "de-u98l3",
      unit: 98,
      lesson: 3,
      title: "Wenn es eintritt",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe the event as it unfolds — say it has occurred, that it is escalating, name the emergency and the setback, and judge how risky a course is.",
      items: [
        { id: "de-u98l3-eintreten", type: "vocab", front: "eintreten", reading: "eintreten", meaning: "to occur", example: { jp: "Wenn dieser Fall eintritt, greift die Versicherung erst nach einer Woche.", en: "If this case occurs, the insurance only takes effect after a week." }, drill: { jp: "Diese Gefahr kann jeden Tag eintreten", en: "This danger can occur any day" }, accept: ["to occur", "occur", "to happen", "happen", "to come about", "to enter", "to come true"], hint: "Separable. Three senses that share one picture of stepping in: to enter a room, to join a club, and — the one here — for a foreseen case to come about." },
        { id: "de-u98l3-eskalieren", type: "vocab", front: "eskalieren", reading: "eskalieren", meaning: "to escalate", example: { jp: "Der Streit eskaliert selten am ersten Tag, meistens über Wochen und wegen Kleinigkeiten.", en: "The conflict rarely escalates on the first day, usually over weeks and because of small things." }, drill: { jp: "Diese Konflikte eskalieren sehr schnell", en: "These conflicts escalate very quickly" }, accept: ["to escalate", "escalate", "to get out of hand", "to intensify"], hint: "Used of conflicts and costs. The German noun is die Eskalation, and die Eskalationsstufe (escalation level) is standard in crisis planning." },
        { id: "de-u98l3-dienotlage", type: "vocab", front: "die Notlage", reading: "dienotlage", meaning: "the plight", example: { jp: "In einer Notlage entscheidet man anders, und genau deshalb prüft das Gericht die Umstände so genau.", en: "In a plight you decide differently, and that is exactly why the court examines the circumstances so closely." }, drill: { jp: "Die Notlage dauert schon Monate", en: "The plight has already lasted months" }, accept: ["plight", "the plight", "emergency", "predicament", "distress", "hardship"], hint: "die Not (need, distress) + die Lage (situation). Legally weighty: eine wirtschaftliche Notlage can change what a German court considers zumutbar (u97)." },
        { id: "de-u98l3-derruckschlag", type: "vocab", front: "der Rückschlag", reading: "derruckschlag", meaning: "the setback", example: { jp: "Der Rückschlag war hart, aber die Gruppe hat danach schneller gearbeitet als vorher.", en: "The setback was hard, but the group worked faster afterwards than before." }, drill: { jp: "Der Rückschlag kam sehr plötzlich", en: "The setback came very suddenly" }, accept: ["setback", "the setback", "reverse", "blow", "relapse"], hint: "zurück + schlagen: a blow that comes back at you. In medicine it is a relapse; in a project, the month you lost." },
        { id: "de-u98l3-riskant", type: "vocab", front: "riskant", reading: "riskant", meaning: "risky", example: { jp: "Der Weg ist riskant, aber der andere Weg kostet das Doppelte.", en: "The route is risky, but the other route costs twice as much." }, drill: { jp: "Dieser Weg bleibt sehr riskant", en: "This route remains very risky" }, accept: ["risky", "hazardous", "chancy", "dicey"], hint: "The adjective to das Risiko (u60). German also says gewagt for a bold risk taken on purpose — riskant is the neutral description." },
        { id: "de-u98l3-abschatzen", type: "vocab", front: "abschätzen", reading: "abschatzen", meaning: "to gauge", example: { jp: "Die Folgen lassen sich heute kaum abschätzen, weil die Daten aus einem einzigen Jahr kommen.", en: "The consequences can hardly be gauged today, because the data come from a single year." }, drill: { jp: "Wir können den Schaden noch nicht abschätzen", en: "We cannot yet gauge the damage" }, accept: ["to gauge", "gauge", "to estimate", "estimate", "to assess", "assess", "to judge"], hint: "Separable: schätzt … ab. From schätzen (to estimate, and to treasure). nicht abzuschätzen = impossible to assess, the phrase German uses after a disaster." },
      ],
    },
    {
      id: "de-u98l4",
      unit: 98,
      lesson: 4,
      title: "Danach",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Speak about the aftermath — coping with it, staying composed, the residual risk you accept, the all-clear, and the confidence to carry on.",
      items: [
        { id: "de-u98l4-bewaltigen", type: "vocab", front: "bewältigen", reading: "bewaltigen", meaning: "to cope with", example: { jp: "Die Firma hat die Krise bewältigt, aber ein Teil der Mitarbeiter hat sie nicht mehr erlebt.", en: "The company coped with the crisis, but some of the employees were no longer there to see it." }, drill: { jp: "Wir müssen diese Krise gemeinsam bewältigen", en: "We have to cope with this crisis together" }, accept: ["to cope with", "cope with", "to manage", "manage", "to deal with", "to overcome", "to handle"], hint: "From die Gewalt (force): getting force over a thing. die Vergangenheitsbewältigung — coping with the past — is one of the defining German words of the last century." },
        { id: "de-u98l4-gefasst", type: "vocab", front: "gefasst", reading: "gefasst", meaning: "composed", example: { jp: "Sie blieb gefasst, obwohl die Nachricht für ihre ganze Abteilung das Ende bedeutete.", en: "She stayed composed, although the news meant the end for her whole department." }, drill: { jp: "Der Vorstand blieb sehr gefasst", en: "The board stayed very composed" }, accept: ["composed", "calm", "collected", "self-possessed", "prepared"], hint: "The participle of fassen (to grasp): you have hold of yourself. auf etwas gefasst sein = to be prepared for something, usually something bad." },
        { id: "de-u98l4-dasrestrisiko", type: "vocab", front: "das Restrisiko", reading: "dasrestrisiko", meaning: "the residual risk", example: { jp: "Ein Restrisiko bleibt immer, und wer etwas anderes verspricht, hat die Prognose nicht gelesen.", en: "A residual risk always remains, and anyone who promises otherwise has not read the forecast." }, drill: { jp: "Das Restrisiko bleibt immer bestehen", en: "The residual risk always remains" }, accept: ["residual risk", "the residual risk", "remaining risk"], hint: "der Rest + das Risiko (u60). A word from German nuclear and medical debate that has spread into ordinary speech — the risk you decide to live with." },
        { id: "de-u98l4-dieentwarnung", type: "vocab", front: "die Entwarnung", reading: "dieentwarnung", meaning: "the all-clear", example: { jp: "Die Entwarnung kam am Abend, trotzdem sind viele Leute die ganze Nacht wach geblieben.", en: "The all-clear came in the evening; nevertheless many people stayed awake all night." }, drill: { jp: "Die Entwarnung kam erst am Abend", en: "The all-clear only came in the evening" }, accept: ["all-clear", "the all-clear", "stand-down", "reassurance"], hint: "ent- (un-) + die Warnung: the un-warning. Entwarnung geben = to give the all-clear, said by authorities and, ironically, by doctors about test results." },
        { id: "de-u98l4-diezuversicht", type: "vocab", front: "die Zuversicht", reading: "diezuversicht", meaning: "the confidence", example: { jp: "Die Zuversicht kam über Monate zurück, zuerst in der Branche und erst viel später bei den Kunden.", en: "Confidence came back over months, first in the sector and only much later among the customers." }, drill: { jp: "Die Zuversicht wächst seit dem Sommer", en: "Confidence has been growing since the summer" }, accept: ["confidence", "the confidence", "optimism", "assurance", "hopefulness"], hint: "Not the same as das Vertrauen (trust in someone) or die Sicherheit (certainty): Zuversicht is quiet confidence that things will turn out. zuversichtlich is the adjective." },
        { id: "de-u98l4-diesicherheit", type: "vocab", front: "die Sicherheit", reading: "diesicherheit", meaning: "the safety", example: { jp: "Sicherheit kostet Geld, und deshalb streiten die zwei Seiten über die Kosten.", en: "Safety costs money, and that is why the two sides argue about the costs." }, drill: { jp: "Die Sicherheit geht immer vor", en: "Safety always comes first" }, accept: ["safety", "the safety", "security", "the security", "certainty", "confidence"], hint: "⚠️ Untaught in German before u98 — see the header. Three senses in one word: safety, security, and certainty (mit Sicherheit = certainly). Its opposite, die Unsicherheit, is in l1." },
      ],
    },
  ],
};
