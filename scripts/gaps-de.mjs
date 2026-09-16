// WHAT GERMAN DOES NOT TEACH — measured against an EXTERNAL frequency list.
//
// The de block-3 brief asked for "words the corpus USES in examples but never
// TEACHES" — the class of bug that put `duas` in 38 Portuguese examples with no
// card. scripts/scope-strict-de.mjs reports 0 such tokens over u1-u87.
//
// ⚠️ THAT ZERO IS NOT A CLEAN BILL OF HEALTH, AND AN EARLIER VERSION OF THIS
// HEADER CALLED IT ONE. It is the same defect measured from the other side.
// Counted over all 2998 German example+drill sentences in the corpus:
//
//     nur 0 · so 0 · alle 0 · jeder 0 · wirklich 0 · Leute 0     (sehr 472)
//
// Six of the most common words in the language appear ZERO times in 2998
// sentences. A corpus cannot reach that by chance. It is what happens when every
// author writes inside the vocabulary whitelist the scope checker enforces: the
// checker licenses only what is already taught, so nothing untaught is ever
// written, so the used-but-untaught count is 0 BY CONSTRUCTION and tells you
// nothing. The gap is real and it is invisible to every check in the repo,
// because a word that is never taught AND never used produces no warning at all.
//
// METHOD. The candidate list is the top of the Wiktionary German frequency list
// (OpenSubtitles, ~25M words), fetched verbatim and pasted below — NOT a list
// chosen by the seat running this. That matters: an earlier cut of this script
// probed 63 words picked by the author, which illustrates a gap but cannot
// measure one.
//   Source: https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/German_subtitles_1000
//
// A word counts as TAUGHT if buildScope() licenses it at the last unit: a front,
// a word inside a multi-word front, a regular or strong-verb form of a taught
// infinitive, a regular plural, or a `// FREE:` declaration. So "hat" counts via
// haben and "die Arbeit" via arbeiten, correctly — this UNDER-reports the gap.
//
// EXCLUSIONS, stated so the denominator is reviewable: forms with an apostrophe
// (geht's), single letters (n), interjections and English/proper names carried by
// a subtitle corpus (Mr, Dr, Mom, Dad, New, Captain, Yeah, OK, Okay, Hi, Hey, Oh,
// Ah, Äh, äh, Tja, Na, Ach, He, Wow, Sir, Miss, Mrs, Scheiße, Mist, Arsch,
// Arschloch, Verdammt, verdammt, Hölle, Teufel, Szene, Dollar, Captain).
//
//   node scripts/gaps-de.mjs              top 300 (default)
//   node scripts/gaps-de.mjs 600          top 600
//   node scripts/gaps-de.mjs --list       also print every untaught word
import { buildScope } from "./de-vocab-scope.mjs";

// Fetched verbatim from the source above, rank order, ~700 entries.
const RAW = `Ich ist nicht Sie du das die es und der zu sie Das ein in wir Du mir mit Was den mich was auf dass er eine Es hat Wir Und so sind von dich war haben für Ja hier an habe Er bin wie noch dir uns sich Die nur einen Nein dem ihn auch hast sein ihr da aus kann aber Aber schon wenn wird um Wie als bist im mal doch gut meine jetzt weiß Wenn werden Der nach ja Oh oder dann will mein mehr keine etwas alles muss immer nichts man wieder bei hab machen vor Mann ihm einem tun zum können sagen werde denn Ist Ein Warum einer gehen sehen sehr geht alle über müssen diese einfach euch des nie Also Wo los Zeit Ihnen gibt wirklich Hey Danke deine würde soll Da hatte Hier wissen bitte viel Dann So gesagt Ihr am kein Komm Wer zurück wurde In wollte Frau Leben wäre wo damit Nicht Gott Leute kannst heute meinen dieser dein kommt kommen willst Na wollen sicher ganz Jetzt Mein Mr also zur Hast Gut hätte weil tut Hallo Okay macht waren bis Vielleicht könnte Eine Bitte weg seine lassen Vater gesehen Nun gerade Alles glaube Tag ab Geld gemacht nein Sir sollte sagte keinen durch zwei diesen passiert wohl vielleicht ihre Mutter reden anderen dachte daß möchte wirst gehört weißt Keine raus Meine paar besser ob her musst Ordnung meiner klar ihnen Los diesem meinem lange Lass dieses helfen unsere Weg selbst Nur finden Mal jemand denke Ach Nacht genau gar sagt Welt Auf Mädchen ins hin vom schön warum weiter Leid gleich wer Man ohne Menschen deinen leid Wieso dort Als Hause sollten davon zusammen geben Ok Hör machst Freund richtig Angst Bist Tut Mit viele sieht Haus tot sollen ganze andere getan okay rein Diese Moment bleiben brauchen Weil Kinder unter Arbeit Für Problem dafür Herr Haben wegen liebe genug dabei bringen Ihre ne gegen Weißt Sag schnell nun eines brauche Abend hatten Jahre Mach Bruder Sache hören komm Sohn seit Morgen drei steht Scheiße mag sei unser konnte habt Oder einmal heißt OK Willst Kopf Hilfe Familie Geh Baby Dich Sind erst fertig gefunden seid kam nehmen morgen sprechen Mir sofort Kann Hat Jahren Kind seinen Genau daran Junge Minuten bevor Stadt beim sterben warst Recht glauben Warte darüber deiner deinem Ende He Dinge Namen wahr Alle allein Natürlich töten Nichts Wirklich bekommen Männer vergessen Doch dazu gab später wusste Augen Dank Freunde Jungs halten warten Glück beide gute Dein kennen Deine n Hi Dr Auto sage gehe komme Dir mache Von Uhr sehe Teufel sonst Art gern Liebe jeden könnten ihren Halt Fall Dad Film bisschen eigentlich weit mach Gib vorbei verstehe danke drin Im Name ganzen Musik würden Tür verrückt solltest denken Noch dran Sieh lieber Den leben Guten Um darauf Kein stimmt Kerl letzte Job verloren wurden kenne Ahnung seiner Grund toll Bis Verdammt bald bereit all jemanden hinter Schon Sehr Hand darf Dieser Frauen Euch Idee runter Macht draußen lang Land lass Typ hätten egal arbeiten spät stehen ok Gute gekommen Bei etwa essen kleine jeder Schwester Wasser spielen Geschichte seinem liegt sah Mom Seite wenig ruhig Frage meinst überhaupt fahren Ganz Gehen Essen Ruhe echt versucht Tochter Kommt Einen ging Jahr braucht fast neue geh ziemlich anders siehst Polizei Stunden musste Spiel gewesen gerne finde erzählt Tod Ort Chance bedeutet War sag sagst fragen letzten sogar ersten Sachen Wahrheit einzige kurz denen Kommen Spaß Nach oben Mama schwer Schule je eben Gesicht bestimmt treffen niemand Woche Entschuldigung Sorgen warte natürlich schlecht große getötet verstehen hoffe Ah Sei Zimmer hoch unserer Tage Teil Wann suchen verlassen zeigen wollten lässt Wort eins zwischen Woher Schatz Wissen versuchen Können Kannst nett Zu kriegen Geht Arsch kleinen Hab weiss erste läuft kommst Freundin Mensch beiden Ding niemals endlich Nimm muß gehst Heute denkst Herz Waffe Soll tust Dollar nehme Schau holen oft drauf anderes Niemand unten Wagen Yeah Schön wichtig Mrs hättest allen Miss ihrer gedacht Nummer würdest erzählen bleibt Auch Hände Blut Sehen bloß recht bringt Bett Lassen Eltern gefällt Schuld eure Plan Krieg neuen Klar retten guter während ihrem wären Fehler scheint Lasst gegeben An hör glücklich verdammt alt Platz darum Vielen falsch unseren schlafen Sagen nächsten fünf frei Sorge Vor fest bereits alleine Denn Zwei Fragen möglich irgendwie Papa lernen gestern hierher Schiff vier irgendwas Stimmt Menge keiner brauchst Typen Dass Stunde Szene Hölle einige Deshalb geworden Telefon Darf Feuer Wollen Bin Alter Captain Aus Dieses Probleme Jeder verstanden wann alten sondern guten zwar eigenen New Körper hört Zum gebe Kumpel Hund nochmal früh Hören trinken besten meines schaffen alte Luft Jemand dürfen Meister Erde Seit Sicher Hört Zukunft kaum funktioniert voll Bleib reicht weh stellen Siehst kleiner großen Waffen Büro Wahl verlieren Wochen Damit Stück lieben allem getroffen Am geschafft tue gefallen Tja Boss überall Sieht passieren lustig Licht gebracht nennen Folge Gefühl völlig denkt Schlüssel drüben Richtig wieso Leuten Buch laufen spielt früher Sein krank gegangen fand Seine Pass fühle Himmel froh leicht direkt langsam wolltest erinnern zuerst Krankenhaus Viel beste welche genommen Arzt unserem Idiot Machen glaubst jede Ohne groß hattest Jungen Rest Unsere versuche Tagen nächste Entschuldigen Doktor spricht könnt hält Team Verstanden kämpfen heiraten könntest Wow Etwas Straße Mist König redest kleines lebt erklären worden Millionen Wiedersehen Onkel kennst sitzen dies weniger Kaffee ernst wollt tragen Zeug trotzdem Ihren kaufen Liste ändern Kampf hasse Person Mund umbringen Präsident Boden Wohin machte Party gefragt Seht irgendwo kümmern kennt verletzt Habt Nachricht Willkommen vielen hart lasse total Gefängnis außer Sicherheit Schnell wem ehrlich interessiert Sex sagten ziehen Welche Unser Augenblick angerufen aufhören Klasse Bild stark Dies Eure zehn Sinn vorstellen Traum länger manchmal anrufen sechs Arschloch sollst gestorben Tages verschwinden Kraft gesprochen heraus genauso wärst Eins damals heißen Liebling wahrscheinlich`;

const DROP = new Set(["mr", "dr", "mom", "dad", "new", "captain", "yeah", "ok", "okay", "hi", "hey", "oh", "ah", "äh", "tja", "na", "ach", "he", "wow", "sir", "miss", "mrs", "scheiße", "mist", "arsch", "arschloch", "verdammt", "hölle", "teufel", "szene", "dollar", "boss", "team", "sex", "n", "ne", "baby", "party", "idiot", "job", "film"]);

const words = [];
const seen = new Set();
for (const w of RAW.split(/\s+/)) {
  const k = w.toLowerCase();
  if (k.includes("'") || k.length < 2 || DROP.has(k) || seen.has(k)) continue;
  seen.add(k);
  words.push(k);
}

const argv = process.argv.slice(2);
const showList = argv.includes("--list");
const N = Number(argv.find((a) => /^\d+$/.test(a)) ?? 300);
const probe = words.slice(0, N);

const { outOfScope, lastUnit } = await buildScope(process.cwd());
const gone = probe.filter((w) => outOfScope(w, lastUnit).length);

console.log(`Probed the top ${probe.length} distinct words of the Wiktionary German`);
console.log(`frequency list against the ${lastUnit}-unit de corpus in this tree.\n`);
console.log(`  TAUGHT NOWHERE: ${gone.length} / ${probe.length}  (${Math.round((gone.length / probe.length) * 100)}%)`);
if (showList) console.log("\n" + gone.join(" · "));
else console.log(`\n  first 40: ${gone.slice(0, 40).join(" · ")}\n  (run with --list for all)`);
console.log(`\n⚠️ u51-u75 are unauthored stubs on this branch, so some of these may be`);
console.log(`   claimed by blocks 1-2. Re-run after the merge before acting on the list.`);
