// DE Unit 59 — Wandel und Zeit (slot: change over time) — B1
// Block 1 (u51–u62). BAND CONVENTIONS: see the header of de/unit51.js.
//
// THEME: time as something that MOVES. A2 has the clock and the calendar, plus
// damals, inzwischen, bisher, neulich, die Vergangenheit, die Zukunft, dauern,
// wachsen, entwickeln. This unit is the slow arc across them: gradual change
// (l1), placing a thing in history (l2), how permanent it is (l3), and a human
// life from childhood to old age (l4).
// ⚠️ ONE FRONT WAS REJECTED HERE FOR A DRILL REASON, AND IT IS WORTH KNOWING WHY.
// `ehemalig` (former) cannot be drilled: it is attributive-only, so the drill
// would have to read "Der ehemalige Chef …" — and findWholeWord fails on the
// inflected `ehemalige`, which silently deletes the cloze and sentence:build
// cards. `vorbei` took the slot instead, because it lives predicatively (Die Zeit
// ist vorbei) and so appears in a drill in its bare form. BLOCKS 2 AND 3: check
// any attributive-only adjective against this before you card it.
// FREE: Jahrzehnten
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT59 = {
  id: "de-u59",
  lang: "de",
  title: "Wandel und Zeit",
  order: 59,
  stage: "b1",
  lessons: [
    {
      id: "de-u59l1",
      unit: 59,
      lesson: 1,
      title: "Langsam anders",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe slow change: say something is happening gradually, change a plan, name a habit, say a bad stretch is over, and look at the long run.",
      items: [
        { id: "de-u59l1-allmahlich", type: "vocab", front: "allmählich", reading: "allmahlich", meaning: "gradually", example: { jp: "Allmählich wird es besser, aber wir brauchen noch sehr viel Zeit.", en: "It's gradually getting better, but we still need a lot of time." }, drill: { jp: "Allmählich wird es besser", en: "It is gradually getting better" }, accept: ["gradually", "slowly", "little by little", "bit by bit", "progressively"], hint: "Slower than langsam: change you can only see once you look back at where it started." },
        { id: "de-u59l1-andern", type: "vocab", front: "ändern", reading: "andern", meaning: "to change", example: { jp: "Wir müssen den Termin ändern, weil der Chef am Freitag nicht da ist.", en: "We have to change the appointment, because the boss isn't there on Friday." }, drill: { jp: "Wir müssen den Termin ändern", en: "We have to change the appointment" }, accept: ["to change", "change", "to alter", "alter", "to modify", "to amend"], hint: "Of something you change on purpose. sich ändern = to change by itself: Das Wetter ändert sich." },
        { id: "de-u59l1-diegewohnheit", type: "vocab", front: "die Gewohnheit", reading: "diegewohnheit", meaning: "the habit", example: { jp: "Eine alte Gewohnheit kann man schwer ändern, auch wenn man es will.", en: "An old habit is hard to change, even when you want to." }, drill: { jp: "Die Gewohnheit ist sehr alt", en: "The habit is very old" }, accept: ["habit", "the habit", "custom", "the custom", "routine", "the routine"], hint: "From wohnen — what has moved in and lives with you. aus Gewohnheit = out of habit." },
        { id: "de-u59l1-vorbei", type: "vocab", front: "vorbei", reading: "vorbei", meaning: "over", example: { jp: "Die schwere Zeit ist vorbei, und jetzt wird es endlich besser.", en: "The hard time is over, and now it is finally getting better." }, drill: { jp: "Die schwere Zeit ist vorbei", en: "The hard time is over" }, accept: ["over", "past", "gone", "finished", "done", "by"], hint: "vor + bei: gone past. Es ist vorbei = it's over. Also of movement: an etwas vorbeigehen." },
        { id: "de-u59l1-derzeitraum", type: "vocab", front: "der Zeitraum", reading: "derzeitraum", meaning: "the period", example: { jp: "In einem Zeitraum von zehn Jahren ist die Stadt sehr stark gewachsen.", en: "Over a period of ten years the city grew very strongly." }, drill: { jp: "Der Zeitraum war sehr lang", en: "The period was very long" }, accept: ["period", "the period", "period of time", "the period of time", "time frame", "span", "the span"], hint: "die Zeit + der Raum (the space): a space of time. Longer and more formal than plain die Zeit." },
        { id: "de-u59l1-langfristig", type: "vocab", front: "langfristig", reading: "langfristig", meaning: "long-term", example: { jp: "Langfristig ist die Bahn billiger, auch wenn die Karte heute teuer ist.", en: "In the long term the railway is cheaper, even if the ticket is expensive today." }, drill: { jp: "Langfristig ist die Bahn billiger", en: "In the long run the railway is cheaper" }, accept: ["long-term", "long term", "in the long run", "in the long term", "long-range"], hint: "lang + die Frist (u56): over a long deadline. Its pair kurzfristig (u62) means at short notice." },
      ],
    },
    {
      id: "de-u59l2",
      unit: 59,
      lesson: 2,
      title: "Damals und heute",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Place something in history: the century, the decade, history itself, what counts as old-fashioned, what has happened since — and what has vanished.",
      items: [
        { id: "de-u59l2-dasjahrhundert", type: "vocab", front: "das Jahrhundert", reading: "dasjahrhundert", meaning: "the century", example: { jp: "Das Haus ist über ein Jahrhundert alt, aber es steht immer noch gut.", en: "The house is over a century old, but it is still standing well." }, drill: { jp: "Das Jahrhundert war sehr schwer", en: "The century was very hard" }, accept: ["century", "the century"], hint: "das Jahr + hundert: a hundred years, said out loud. im letzten Jahrhundert = in the last century." },
        { id: "de-u59l2-diegeschichte", type: "vocab", front: "die Geschichte", reading: "diegeschichte", meaning: "the history", example: { jp: "Die Geschichte der Stadt ist lang, und im Museum kann man sie lesen.", en: "The city's history is long, and in the museum you can read it." }, drill: { jp: "Die Geschichte ist sehr lang", en: "The history is very long" }, accept: ["history", "the history", "story", "the story", "tale", "the tale"], hint: "History AND a story — German makes no difference. Geschichte studieren; eine Geschichte erzählen." },
        { id: "de-u59l2-altmodisch", type: "vocab", front: "altmodisch", reading: "altmodisch", meaning: "old-fashioned", example: { jp: "Der Mantel ist altmodisch, aber er ist warm und er hält noch lange.", en: "The coat is old-fashioned, but it's warm and it will last a long time." }, drill: { jp: "Der Mantel ist ziemlich altmodisch", en: "The coat is fairly old-fashioned" }, accept: ["old-fashioned", "old fashioned", "outdated", "dated", "out of date"], hint: "alt + die Mode (fashion). Not always an insult — altmodisch can mean charmingly old." },
        { id: "de-u59l2-dasjahrzehnt", type: "vocab", front: "das Jahrzehnt", reading: "dasjahrzehnt", meaning: "the decade", example: { jp: "In zwei Jahrzehnten hat sich die Stadt sehr stark geändert.", en: "Over two decades the city has changed very greatly." }, drill: { jp: "Das Jahrzehnt war sehr ruhig", en: "The decade was very quiet" }, accept: ["decade", "the decade"], hint: "das Jahr + zehn: ten years. Same trick as das Jahrhundert — the number is inside the word." },
        { id: "de-u59l2-seitdem", type: "vocab", front: "seitdem", reading: "seitdem", meaning: "since then", example: { jp: "Wir sind vor drei Jahren umgezogen, und seitdem wohnen wir viel ruhiger.", en: "We moved three years ago, and since then we've lived much more quietly." }, drill: { jp: "Seitdem ist es viel ruhiger", en: "Since then it has been much quieter" }, accept: ["since then", "ever since", "since", "from then on"], hint: "seit + dem: since that. It also opens a clause: Seitdem er hier wohnt, geht es ihm besser." },
        { id: "de-u59l2-verschwinden", type: "vocab", front: "verschwinden", reading: "verschwinden", meaning: "to disappear", example: { jp: "Der Schlüssel ist verschwunden, obwohl er am Morgen noch hier lag.", en: "The key has disappeared, although it was still lying here in the morning." }, drill: { jp: "Die alten Bilder verschwinden schnell", en: "The old pictures are disappearing fast" }, accept: ["to disappear", "disappear", "to vanish", "vanish", "to go missing"], hint: "ver- + schwinden (to dwindle). Strong: verschwand, verschwunden. Verschwinde! = get lost!" },
      ],
    },
    {
      id: "de-u59l3",
      unit: 59,
      lesson: 3,
      title: "Beständig oder nicht",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how permanent a thing is: time passing, final against provisional, regular practice, speeding up, and a change that runs deep.",
      items: [
        { id: "de-u59l3-vergehen", type: "vocab", front: "vergehen", reading: "vergehen", meaning: "to go by", example: { jp: "Die Zeit vergeht sehr schnell, wenn die Arbeit interessant ist.", en: "Time passes very quickly when the work is interesting." }, drill: { jp: "Die Jahre vergehen sehr schnell", en: "The years pass very quickly" }, accept: ["to pass", "pass", "to go by", "go by", "to elapse", "to fade"], hint: "Of TIME and of pain: Der Schmerz vergeht. For a person walking past, German uses vorbeigehen." },
        { id: "de-u59l3-endgultig", type: "vocab", front: "endgültig", reading: "endgultig", meaning: "final", example: { jp: "Das Ergebnis ist endgültig, auch wenn niemand damit zufrieden ist.", en: "The result is final, even if nobody is satisfied with it." }, drill: { jp: "Das Ergebnis ist endgültig", en: "The result is final" }, accept: ["final", "definitive", "conclusive", "for good", "once and for all"], hint: "das Ende + gültig (valid, u61): valid all the way to the end. endgültig entscheiden = to decide once and for all." },
        { id: "de-u59l3-vorlaufig", type: "vocab", front: "vorläufig", reading: "vorlaufig", meaning: "provisional", example: { jp: "Das ist vorläufig genug, aber im Herbst müssen wir es noch einmal untersuchen.", en: "That is enough for now, but in autumn we have to examine it again." }, drill: { jp: "Das ist vorläufig genug", en: "That is enough for now" }, accept: ["provisional", "provisionally", "for now", "temporary", "tentative", "interim"], hint: "vor + laufen: running ahead of the real answer. The exact opposite of endgültig, one card up." },
        { id: "de-u59l3-regelmassig", type: "vocab", front: "regelmäßig", reading: "regelmassig", meaning: "regular", example: { jp: "Wer regelmäßig übt, lernt schneller und vergisst auch weniger.", en: "Whoever practises regularly learns faster and also forgets less." }, drill: { jp: "Wir üben sehr regelmäßig", en: "We practise very regularly" }, accept: ["regular", "regularly", "steady", "steadily", "at regular intervals"], hint: "die Regel + das Maß (the measure): by the measure of a rule. ß, so the reading is written ss." },
        { id: "de-u59l3-beschleunigen", type: "vocab", front: "beschleunigen", reading: "beschleunigen", meaning: "to accelerate", example: { jp: "Der Computer beschleunigt die Arbeit, aber er macht sie nicht besser.", en: "The computer speeds up the work, but it doesn't make it better." }, drill: { jp: "Computer beschleunigen die Arbeit sehr", en: "Computers speed up the work a lot" }, accept: ["to accelerate", "accelerate", "to speed up", "speed up", "to hasten"], hint: "be- + schleunig (swift). Of cars and of processes alike. The other direction is bremsen." },
        { id: "de-u59l3-derwandel", type: "vocab", front: "der Wandel", reading: "derwandel", meaning: "the transformation", example: { jp: "Der Wandel in der Gesellschaft dauert lange, aber nach zehn Jahren sieht man ihn deutlich.", en: "Change in society takes a long time, but after ten years you can see it clearly." }, drill: { jp: "Der Wandel dauert sehr lange", en: "The change takes a very long time" }, accept: ["change", "the change", "transformation", "the transformation", "shift", "the shift"], hint: "Bigger and slower than an Änderung: one whole thing turning into another. der Klimawandel = climate change." },
      ],
    },
    {
      id: "de-u59l4",
      unit: 59,
      lesson: 4,
      title: "Jung und alt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about a life over time: the present, growing up, being grown up, your age, your childhood — and doing something over again.",
      items: [
        { id: "de-u59l4-diegegenwart", type: "vocab", front: "die Gegenwart", reading: "diegegenwart", meaning: "the present", example: { jp: "In der Gegenwart ist die Arbeit leichter als in der Vergangenheit.", en: "In the present, the work is easier than it was in the past." }, drill: { jp: "Die Gegenwart ist sehr wichtig", en: "The present is very important" }, accept: ["present", "the present", "present time", "the present time", "now", "presence"], hint: "gegen + warten: what stands facing you now. The trio to keep together: Vergangenheit, Gegenwart, Zukunft." },
        { id: "de-u59l4-erwachsen", type: "vocab", front: "erwachsen", reading: "erwachsen", meaning: "grown-up", example: { jp: "Die Kinder sind jetzt erwachsen und wohnen nicht mehr zu Hause.", en: "The children are grown up now and no longer live at home." }, drill: { jp: "Die Kinder sind jetzt erwachsen", en: "The children are grown up now" }, accept: ["grown-up", "grown up", "adult", "mature"], hint: "The participle of erwachsen, to grow up. der Erwachsene = the adult, and it takes adjective endings." },
        { id: "de-u59l4-aufwachsen", type: "vocab", front: "aufwachsen", reading: "aufwachsen", meaning: "to grow up", example: { jp: "Er ist in einer kleinen Stadt aufgewachsen, deshalb liebt er die Berge so sehr.", en: "He grew up in a small town, which is why he loves the mountains so much." }, drill: { jp: "Die Kinder wollen hier aufwachsen", en: "The children want to grow up here" }, accept: ["to grow up", "grow up", "to be raised", "to be brought up"], hint: "auf + wachsen: to grow upwards. Of people only. Separable: er wächst hier auf." },
        { id: "de-u59l4-dasalter", type: "vocab", front: "das Alter", reading: "dasalter", meaning: "the age", example: { jp: "Im Alter von sechs Jahren hat sie schon sehr gut gelesen.", en: "At the age of six she was already reading very well." }, drill: { jp: "Das Alter ist nicht wichtig", en: "Age is not important" }, accept: ["age", "the age", "old age", "the old age"], hint: "alt + -er. Both a number (im Alter von 30) and old age itself (im Alter allein sein)." },
        { id: "de-u59l4-diekindheit", type: "vocab", front: "die Kindheit", reading: "diekindheit", meaning: "the childhood", example: { jp: "In meiner Kindheit gab es kein Internet, und wir haben den ganzen Tag gespielt.", en: "In my childhood there was no internet, and we played all day." }, drill: { jp: "Die Kindheit war sehr schön", en: "Childhood was very lovely" }, accept: ["childhood", "the childhood"], hint: "das Kind + -heit, the same ending as die Wahrheit and die Freiheit. Always feminine." },
        { id: "de-u59l4-erneut", type: "vocab", front: "erneut", reading: "erneut", meaning: "again", example: { jp: "Wir haben erneut gefragt, aber die Antwort war leider immer noch nein.", en: "We asked again, but unfortunately the answer was still no." }, drill: { jp: "Wir haben erneut gefragt", en: "We asked again" }, accept: ["again", "once again", "anew", "afresh", "a second time", "renewed"], hint: "From neu: made new again. More formal than noch einmal — the word of reports and news bulletins." },
      ],
    },
  ],
};
