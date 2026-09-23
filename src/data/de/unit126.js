// DE Unit 126 — Hand und Mund (slot: coverage-b2-16) — B2
// Conventions: de/unit1.js + de/unit51.js + de/unit88.js (B2 band constitution).
// Coverage pass — method in u114's header, card count in u115's.
//
// ⚠️ TIER D, like u125 — the measured sources are exhausted. See u125's header
// for the full statement; it is not repeated here, and it is not hidden either.
// The principle is the same: COMPLETE A DOMAIN THE COURSE ITSELF OPENED. u85
// (Bewegung und Koerpersprache) teaches nicken, winken, umarmen, klettern,
// rutschen, stolpern, kriechen, seufzen and gaehnen — a careful list of what a
// body does — and stops before the things a body does with hands and mouth.
// Every front below was checked against all 2714 claimed fronts and is untaught.
//
// ⚠️ LAST UNIT OF THE BAND *of this block*. ⚠️ On THIS branch u88-u113 are
// still 26 locked stub units - they are blocks 1 and 2's, authored on their own
// branches. de has no locked stubs left only AFTER all three blocks are merged. The "Add a language" row on the Ladder reads its
// state off the corpus, so it should flip from a units-so-far count to a plain
// item total the moment blocks 1-3 are merged together. If it does NOT, that is
// a real signal that some unit still has locked lessons - see RUNBOOK §6.
// FREE: gewusst, gelohnt, geglaubt, geschrieben, gelernt, geworden
export const DE_UNIT126 = {
  id: "de-u126",
  lang: "de",
  title: "Hand und Mund",
  order: 126,
  stage: "b2",
  lessons: [
    {
      id: "de-u126l1",
      unit: 126,
      lesson: 1,
      title: "Streicheln, kneifen, kratzen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what a hand does to someone or something — stroke, pinch, scratch, and hold a brush.",
      items: [
        { id: "de-u126l1-streicheln", type: "vocab", front: "streicheln", reading: "streicheln", meaning: "to stroke", example: { jp: "Das Kind will den Hund streicheln, aber der Hund kennt es noch nicht.", en: "The child wants to stroke the dog, but the dog doesn't know it yet." }, drill: { jp: "Sie will die Katze streicheln", en: "She wants to stroke the cat" }, accept: ["to stroke", "stroke", "to pet", "pet", "to caress"], hint: "Tier D, extending u85. An -eln verb, so the ich form drops the e: ich streichle. Related to streichen, to paint or to spread." },
        { id: "de-u126l1-kneifen", type: "vocab", front: "kneifen", reading: "kneifen", meaning: "to pinch", example: { jp: "Die neuen Schuhe kneifen an der rechten Seite, deshalb kann sie nicht weit gehen.", en: "The new shoes pinch on the right side, so she cannot walk far." }, drill: { jp: "Der Mantel darf nicht kneifen", en: "The coat must not pinch" }, accept: ["to pinch", "pinch", "to nip", "to squeeze"], hint: "Tier D. Of fingers and of clothes alike. Colloquially it also means to back out of something — er hat gekniffen, he chickened out." },
        { id: "de-u126l1-kratzen", type: "vocab", front: "kratzen", reading: "kratzen", meaning: "to scratch", example: { jp: "Der Pullover kratzt am Hals, obwohl er sonst sehr warm ist.", en: "The pullover scratches at the neck, although otherwise it is very warm." }, drill: { jp: "Die Katze will an der Tür kratzen", en: "The cat wants to scratch at the door" }, accept: ["to scratch", "scratch", "to scrape", "scrape", "to claw"], hint: "Tier D. What a cat does and what rough wool does. das kratzt mich nicht means 'that doesn't bother me'." },
        { id: "de-u126l1-beissen", type: "vocab", front: "beißen", reading: "beissen", meaning: "to bite", example: { jp: "Der Hund beißt nicht, aber die Leute im Haus glauben das bis heute nicht.", en: "The dog doesn't bite, but the people in the house don't believe that to this day." }, drill: { jp: "Der Hund will niemanden beißen", en: "The dog does not want to bite anyone" }, accept: ["to bite", "bite", "to nip", "to sting"], hint: "Tier D. Strong verb: biss, gebissen. Of colours that clash, German also says sie beißen sich — they bite each other." },
        { id: "de-u126l1-diebuerste", type: "vocab", front: "die Bürste", reading: "diebuerste", meaning: "the brush (household)", example: { jp: "Die Bürste liegt im Bad, gleich neben der Seife und dem Handtuch.", en: "The brush is in the bathroom, right next to the soap and the towel." }, drill: { jp: "Die Bürste ist schon sehr alt", en: "The brush is already very old" }, accept: ["brush", "the brush", "scrubbing brush"], hint: "Tier D. The course teaches die Seife and das Handtuch (both u30) and stopped before this one. bürsten is the verb; der Pinsel is an artist's brush." },
        { id: "de-u126l1-greifen", type: "vocab", front: "greifen", reading: "greifen", meaning: "to grasp", example: { jp: "Das Kind greift nach allem, was auf dem Tisch liegt.", en: "The child grabs at everything lying on the table." }, drill: { jp: "Kinder greifen nach allem auf dem Tisch", en: "Children grab at everything on the table" }, accept: ["to grasp", "grasp", "to grab", "to reach for", "to take hold of", "to seize"], hint: "Strong verb: griff, hat gegriffen. nach etwas greifen = to reach for it. begreifen (u114) is the same verb applied to an idea." },
      ],
    },
    {
      id: "de-u126l2",
      unit: 126,
      lesson: 2,
      title: "Spucken, pusten, schlucken",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what a mouth does besides speaking — spit, blow, swallow, name a beak, and say what disgusts you.",
      items: [
        { id: "de-u126l2-spucken", type: "vocab", front: "spucken", reading: "spucken", meaning: "to spit", example: { jp: "Auf der Straße zu spucken ist hier sehr unhöflich.", en: "Spitting in the street is very rude here." }, drill: { jp: "Man soll nicht auf den Boden spucken", en: "One should not spit on the ground" }, accept: ["to spit", "spit", "to expectorate"], hint: "Tier D, extending u85. Also of machines and volcanoes throwing something out — Feuer spucken, to spit fire." },
        { id: "de-u126l2-pusten", type: "vocab", front: "pusten", reading: "pusten", meaning: "to blow", example: { jp: "Das Kind muss nur einmal pusten, dann ist jede Kerze auf dem Kuchen aus.", en: "The child only has to blow once, then every candle on the cake is out." }, drill: { jp: "Du musst kurz auf die Suppe pusten", en: "You have to blow briefly on the soup" }, accept: ["to blow", "blow", "to puff", "to huff"], hint: "Tier D. The everyday northern word; blasen is the neutral one and is what a wind or a musician does. Also what you do into a breathalyser." },
        { id: "de-u126l2-schlucken", type: "vocab", front: "schlucken", reading: "schlucken", meaning: "to swallow", example: { jp: "Das Kind will die Tablette nicht schlucken, weil sie so bitter ist.", en: "The child does not want to swallow the tablet because it is so bitter." }, drill: { jp: "Du musst die Tablette ganz schlucken", en: "You have to swallow the tablet whole" }, accept: ["to swallow", "swallow", "to gulp", "to gulp down"], hint: "Tier D, extending u85. Also figurative, exactly as in English — eine Kröte schlucken is to swallow something unpalatable, and etwas schlucken müssen is to have to take bad news." },
        { id: "de-u126l2-ekelhaft", type: "vocab", front: "ekelhaft", reading: "ekelhaft", meaning: "disgusting", example: { jp: "Das Essen ist ekelhaft, und trotzdem isst das Kind den ganzen Teller leer.", en: "The food is disgusting, and yet the child eats the whole plate empty." }, drill: { jp: "Das Wasser schmeckt einfach ekelhaft", en: "The water simply tastes disgusting" }, accept: ["disgusting", "revolting", "repulsive", "vile", "nasty"], hint: "Tier D. The adjective to der Ekel, taught in u125 of this block. ⚠️ A learner meets this far more often than the noun, so both earn a card." },
        { id: "de-u126l2-derschnabel", type: "vocab", front: "der Schnabel", reading: "derschnabel", meaning: "the beak", example: { jp: "Der Vogel hält im Schnabel etwas, das von hier aus wie ein Faden wirkt.", en: "The bird is holding something in its beak that from here seems like a thread." }, drill: { jp: "Der Schnabel ist lang und dünn", en: "The beak is long and thin" }, accept: ["beak", "the beak", "bill"], hint: "Tier D, completing the animal set begun in u125. Plural Schnäbel. halt den Schnabel is a rude 'shut up', the same joke as English 'shut your beak'." },
        { id: "de-u126l2-kauen", type: "vocab", front: "kauen", reading: "kauen", meaning: "to chew", example: { jp: "Du sollst langsam kauen, sonst schmeckt das Essen nach nichts.", en: "You should chew slowly, otherwise the food tastes of nothing." }, drill: { jp: "Du sollst das Brot langsam kauen", en: "You should chew the bread slowly" }, accept: ["to chew", "chew", "to masticate", "to munch"], hint: "Rhymes with bauen. Weak verb: gekaut. schlucken in this lesson is what comes next; der Kaugummi is chewing gum." },
      ],
    },
    {
      id: "de-u126l3",
      unit: 126,
      lesson: 3,
      title: "Daneben, darunter, dahinter",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Place one thing relative to another without repeating the noun — beside it, under it, behind it, out of it, before it.",
      items: [
        { id: "de-u126l3-davor", type: "vocab", front: "davor", reading: "davor", meaning: "before that", example: { jp: "Davor hat niemand an dieses Ergebnis geglaubt, und danach wollte es jeder vorher gewusst haben.", en: "Before that nobody believed in this result, and afterwards everyone claimed to have known it in advance." }, drill: { jp: "Davor war alles noch ganz ruhig", en: "Before that everything was still quite calm" }, accept: ["before that", "beforehand", "in front of it", "prior to that"], hint: "The last measured front in this block. Time and place at once: davor stehen is to stand in front of it. Angst davor haben is to be afraid of it." },
        { id: "de-u126l3-daneben", type: "vocab", front: "daneben", reading: "daneben", meaning: "beside it", example: { jp: "Das Haus steht am Wasser, und daneben beginnt gleich der Wald.", en: "The house stands by the water, and beside it the forest begins immediately." }, drill: { jp: "Daneben steht ein alter Baum", en: "Beside it stands an old tree" }, accept: ["beside it", "next to it", "alongside", "adjacent"], hint: "Tier D. da + neben (u13). daneben gehen means to miss — of a shot, or of a plan that goes wrong." },
        { id: "de-u126l3-darunter", type: "vocab", front: "darunter", reading: "darunter", meaning: "among them", example: { jp: "Zwanzig Leute haben geschrieben, darunter fast alle aus dem Dorf.", en: "Twenty people wrote, among them almost everyone from the village." }, drill: { jp: "Darunter war kein einziger Brief", en: "Among them was not a single letter" }, accept: ["among them", "underneath", "under it", "below it", "including"], hint: "Tier D. Literally 'under it', but in writing it far more often means 'among them' when listing — the sense a B2 reader meets first." },
        { id: "de-u126l3-dahinter", type: "vocab", front: "dahinter", reading: "dahinter", meaning: "behind it", example: { jp: "Vorne steht die Kirche, und dahinter liegt das alte Dorf.", en: "At the front stands the church, and behind it lies the old village." }, drill: { jp: "Dahinter beginnt ein kleiner Garten", en: "Behind it a small garden begins" }, accept: ["behind it", "behind that", "beyond it"], hint: "Tier D. da + hinter (u13). dahinterkommen is to work out what is really going on — to get behind it, in both senses." },
        { id: "de-u126l3-daraus", type: "vocab", front: "daraus", reading: "daraus", meaning: "out of it", example: { jp: "Aus dem Plan ist nichts geworden, und daraus haben alle etwas gelernt.", en: "Nothing came of the plan, and everyone learned something from it." }, drill: { jp: "Daraus wird wohl nichts mehr", en: "Nothing will come of it now" }, accept: ["out of it", "from it", "of it", "from that"], hint: "Tier D. da + aus (u3). daraus folgt is the standard 'from this it follows' of written argument — worth recognising in any report." },
        { id: "de-u126l3-dazwischen", type: "vocab", front: "dazwischen", reading: "dazwischen", meaning: "in between", example: { jp: "Links steht der Schrank, rechts das Regal und dazwischen passt kaum ein Stuhl.", en: "The cupboard is on the left, the shelf on the right, and hardly a chair fits in between." }, drill: { jp: "Dazwischen passt kaum noch ein Stuhl", en: "Hardly a chair fits in between" }, accept: ["in between", "between them", "in the middle", "among them"], hint: "da + zwischen, built like daneben and dahinter in this lesson. dazwischenkommen = to get in the way: mir ist etwas dazwischengekommen." },
      ],
    },
    {
      id: "de-u126l4",
      unit: 126,
      lesson: 4,
      title: "Stufe, Mühe und Talent",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Finish the band by talking about learning itself — a level, the effort it takes, a talent, real keenness, and coping.",
      items: [
        { id: "de-u126l4-diestufe", type: "vocab", front: "die Stufe", reading: "diestufe", meaning: "the level (step)", example: { jp: "Auf dieser Stufe soll man schon eine Zeitung lesen können, auch wenn nicht alles klar ist.", en: "At this level you should already be able to read a newspaper, even if not everything is clear." }, drill: { jp: "Die Stufe war deutlich schwerer", en: "The level was clearly harder" }, accept: ["level", "the level", "step", "stage", "grade"], hint: "Tier D. A step of a stair and a stage of anything — exactly the metaphor this course is built on. die Treppe (u15) is the whole staircase." },
        { id: "de-u126l4-diemuehe", type: "vocab", front: "die Mühe", reading: "diemuehe", meaning: "the trouble taken", example: { jp: "Die Mühe hat sich gelohnt, auch wenn es am Anfang fast niemand geglaubt hat.", en: "The effort was worth it, even if at the beginning almost nobody believed it." }, drill: { jp: "Die Mühe war wirklich sehr groß", en: "The effort was really very great" }, accept: ["effort", "the effort", "trouble", "pains", "exertion"], hint: "Tier D. sich Mühe geben is to take trouble over something — one of the commonest phrases in German school reports. mit Mühe is 'with difficulty'." },
        { id: "de-u126l4-dastalent", type: "vocab", front: "das Talent", reading: "dastalent", meaning: "the talent", example: { jp: "Talent hilft am Anfang, aber nach zwei Jahren ist nur noch die Arbeit wichtig.", en: "Talent helps at the beginning, but after two years only the work is important." }, drill: { jp: "Das Talent allein reicht nicht", en: "Talent alone is not enough" }, accept: ["talent", "the talent", "gift", "flair", "aptitude"], hint: "Tier D. Stress the last syllable: taLENT. Also the talented person — er ist ein großes Talent." },
        { id: "de-u126l4-dereifer", type: "vocab", front: "der Eifer", reading: "dereifer", meaning: "the keenness", example: { jp: "Der Eifer am Anfang war groß, aber nach dem Winter kam fast niemand mehr.", en: "The keenness at the start was great, but after the winter almost nobody came any more." }, drill: { jp: "Der Eifer war am Anfang groß", en: "The keenness was great at the start" }, accept: ["keenness", "the keenness", "eagerness", "zeal", "enthusiasm"], hint: "Tier D. im Eifer des Gefechts means 'in the heat of the moment'. eifrig is the adjective, and der Ehrgeiz is ambition rather than keenness." },
        { id: "de-u126l4-zurechtkommen", type: "vocab", front: "zurechtkommen", reading: "zurechtkommen", meaning: "to cope", example: { jp: "Wer bis hierher gekommen ist, wird mit einer deutschen Zeitung gut zurechtkommen.", en: "Whoever has got this far will cope well with a German newspaper." }, drill: { jp: "Wir werden schon allein zurechtkommen", en: "We will manage on our own" }, accept: ["to cope", "cope", "to manage", "manage", "to get along", "to get by"], hint: "Tier D, and the last card of the German band. Separable, and it takes mit: mit etwas zurechtkommen. A fitting front to end on — the whole point of a B2 band is coping without help." },
        { id: "de-u126l4-dieausdauer", type: "vocab", front: "die Ausdauer", reading: "dieausdauer", meaning: "the staying power", example: { jp: "Eine Sprache lernt man nicht mit Talent, sondern mit Ausdauer.", en: "You don't learn a language with talent, but with staying power." }, drill: { jp: "Die Ausdauer ist wichtiger als Talent", en: "Staying power matters more than talent" }, accept: ["staying power", "the staying power", "stamina", "the stamina", "endurance", "perseverance", "persistence"], hint: "aus + dauern: keeping going. No plural. der Eifer in this lesson is the keenness at the start; die Ausdauer is what is left in month six." },
      ],
    },
  ],
};
