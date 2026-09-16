// DE Unit 85 — Bewegung und Körpersprache (slot: coverage-b1-12) — B1
// Block 3 (u76-u87), the COVERAGE PASS. Conventions: see de/unit1.js.
//
// WHY THIS THEME. The corpus has ONE general motion verb set — gehen, laufen,
// fahren, kommen (u1-u19) — plus u44's stellen/legen/haengen for putting THINGS
// somewhere, and u43's Aussehen for what a face looks like. Nothing teaches how a
// BODY moves or what it says without words: no tripping, no falling, no bending,
// no nodding, no shaking your head, no shrug. A B1 speaker narrating anything
// that happened to a person needs all of it.
//
// FRONTS DROPPED as already taught or as lexeme duplicates:
//   springen, fallen (u44/u45) · die Haltung (lexeme of halten u44 — carded here
//   as the compound die Koerperhaltung instead) · zeigen auf (lexeme of zeigen
//   u20 — carded here as deuten) · knien (lexeme of das Knie u25) ·
//   starren (lexeme of starr u49) · laecheln (u22).
// REFLEXIVE FRONTS AND THE DRILL RULE. findWholeWord needs the front contiguous,
// and German splits a reflexive: "ich bücke mich" does NOT contain "sich bücken".
// Every reflexive here is therefore drilled with a MODAL, which pushes the
// infinitive to the end and keeps sich next to it: "Man muss sich bücken".
export const DE_UNIT85 = {
  id: "de-u85",
  lang: "de",
  title: "Bewegung und Körpersprache",
  order: 85,
  stage: "b1",
  lessons: [
    {
      id: "de-u85l1",
      unit: 85,
      lesson: 1,
      title: "Schnell und leise",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe how somebody moves: run, hop, climb, crawl, creep, slide.",
      items: [
        { id: "de-u85l1-rennen", type: "vocab", front: "rennen", reading: "rennen", meaning: "to run fast", example: { jp: "Das Kind rennt über die Straße.", en: "The child runs across the road." }, drill: { jp: "Wir müssen zum Bus rennen", en: "We have to run for the bus" }, accept: ["to run fast", "run fast", "to run", "run", "to race"], hint: "Faster and more urgent than laufen, which can just mean to walk." },
        { id: "de-u85l1-hupfen", type: "vocab", front: "hüpfen", reading: "hupfen", meaning: "to hop", example: { jp: "Das Kind hüpft durch das Zimmer.", en: "The child hops through the room." }, drill: { jp: "Das Kind will immer hüpfen", en: "The child always wants to hop" }, accept: ["to hop", "hop", "to skip", "to bounce", "to jump lightly"], hint: "Light and repeated. A single big jump is springen." },
        { id: "de-u85l1-klettern", type: "vocab", front: "klettern", reading: "klettern", meaning: "to climb", example: { jp: "Die Kinder klettern auf den Stuhl.", en: "The children climb onto the chair." }, drill: { jp: "Die Kinder wollen gern klettern", en: "The children like to climb" }, accept: ["to climb", "climb", "to clamber", "to scramble up"], hint: "Climbing with hands and feet. Climbing stairs is just gehen." },
        { id: "de-u85l1-kriechen", type: "vocab", front: "kriechen", reading: "kriechen", meaning: "to crawl", example: { jp: "Er kriecht unter das Bett.", en: "He crawls under the bed." }, drill: { jp: "Er muss unter den Tisch kriechen", en: "He has to crawl under the table" }, accept: ["to crawl", "crawl", "to creep along the ground", "to grovel"], hint: "On the ground. Traffic kriecht too, when it barely moves." },
        { id: "de-u85l1-schleichen", type: "vocab", front: "schleichen", reading: "schleichen", meaning: "to creep", example: { jp: "Sie schleicht durch den Flur.", en: "She creeps through the hallway." }, drill: { jp: "Er will durch das Haus schleichen", en: "He wants to creep through the house" }, accept: ["to creep", "creep", "to sneak", "sneak", "to move quietly"], hint: "Quietly and unseen — the verb for a burglar or a guilty child." },
        { id: "de-u85l1-rutschen", type: "vocab", front: "rutschen", reading: "rutschen", meaning: "to slide", example: { jp: "Auf dem Schnee kann man rutschen.", en: "You can slide on the snow." }, drill: { jp: "Man kann hier leicht rutschen", en: "You can slide here easily" }, accept: ["to slide", "slide", "to slip", "slip", "to skid"], hint: "die Rutsche = the slide in a playground. Also: rutsch mal! = budge up!" },
      ],
    },
    {
      id: "de-u85l2",
      unit: 85,
      lesson: 2,
      title: "Wenn es schiefgeht",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say that someone tripped, fell, is shaking, or is bending down.",
      items: [
        { id: "de-u85l2-stolpern", type: "vocab", front: "stolpern", reading: "stolpern", meaning: "to trip", example: { jp: "Er stolpert über den Teppich.", en: "He trips over the carpet." }, drill: { jp: "Kinder können oft stolpern", en: "Children can often trip" }, accept: ["to trip", "trip", "to stumble", "stumble"], hint: "stolpern über = to trip over something. You may not actually fall." },
        { id: "de-u85l2-sturzen", type: "vocab", front: "stürzen", reading: "sturzen", meaning: "to fall over", example: { jp: "Die alte Frau stürzt auf der Treppe.", en: "The old woman falls on the stairs." }, drill: { jp: "Auf der Treppe kann man stürzen", en: "You can fall over on the stairs" }, accept: ["to fall over", "fall over", "to take a fall", "to tumble", "to crash down"], hint: "Harder and more sudden than fallen. der Sturz = the fall." },
        { id: "de-u85l2-zittern", type: "vocab", front: "zittern", reading: "zittern", meaning: "to tremble", example: { jp: "Meine Hände zittern vor Kälte.", en: "My hands are trembling with cold." }, drill: { jp: "Die Hände zittern vor Kälte", en: "The hands are trembling with cold" }, accept: ["to tremble", "tremble", "to shake", "to shiver", "to quiver"], hint: "From cold, fear or age. Shaking something ELSE is schütteln." },
        { id: "de-u85l2-sichbucken", type: "vocab", front: "sich bücken", reading: "sichbucken", meaning: "to bend down", example: { jp: "Er bückt sich nach dem Schlüssel.", en: "He bends down for the key." }, drill: { jp: "Man muss sich bücken", en: "You have to bend down" }, accept: ["to bend down", "bend down", "to stoop", "stoop", "to bend over"], hint: "Reflexive: ich bücke mich. Always the whole upper body, from the waist." },
        { id: "de-u85l2-sichstrecken", type: "vocab", front: "sich strecken", reading: "sichstrecken", meaning: "to stretch", example: { jp: "Am Morgen streckt sie sich im Bett.", en: "In the morning she stretches in bed." }, drill: { jp: "Am Morgen muss man sich strecken", en: "In the morning you have to stretch" }, accept: ["to stretch", "stretch", "to stretch out", "to have a stretch"], hint: "Reflexive: ich strecke mich. strecken alone = to stretch something out." },
        { id: "de-u85l2-sichlehnen", type: "vocab", front: "sich lehnen", reading: "sichlehnen", meaning: "to lean", example: { jp: "Er lehnt sich an die Wand.", en: "He leans against the wall." }, drill: { jp: "Er will sich lehnen", en: "He wants to lean" }, accept: ["to lean", "lean", "to lean against", "to prop yourself"], hint: "sich lehnen an = to lean against. die Lehne = the back of a chair." },
      ],
    },
    {
      id: "de-u85l3",
      unit: 85,
      lesson: 3,
      title: "Mit den Händen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the gestures: waving, nodding, shaking your head, pointing, hugging.",
      items: [
        { id: "de-u85l3-winken", type: "vocab", front: "winken", reading: "winken", meaning: "to wave", example: { jp: "Sie winkt aus dem Fenster.", en: "She waves out of the window." }, drill: { jp: "Die Kinder winken dem Zug", en: "The children wave at the train" }, accept: ["to wave", "wave", "to wave at", "to signal with a hand"], hint: "Takes the dative: ich winke dir. Also to signal a taxi." },
        { id: "de-u85l3-nicken", type: "vocab", front: "nicken", reading: "nicken", meaning: "to nod", example: { jp: "Er nickt und sagt nichts.", en: "He nods and says nothing." }, drill: { jp: "Er kann einfach nicken", en: "He can simply nod" }, accept: ["to nod", "nod", "to nod your head", "to give a nod"], hint: "German nods mean yes exactly as English ones do." },
        { id: "de-u85l3-schutteln", type: "vocab", front: "schütteln", reading: "schutteln", meaning: "to shake something", example: { jp: "Sie schüttelt den Kopf.", en: "She shakes her head." }, drill: { jp: "Er will den Kopf schütteln", en: "He wants to shake his head" }, accept: ["to shake", "shake", "to shake something", "to give a shake"], hint: "You schüttelst something else; your own hands zittern." },
        { id: "de-u85l3-deuten", type: "vocab", front: "deuten", reading: "deuten", meaning: "to point", example: { jp: "Er deutet auf das Verkehrsschild.", en: "He points at the road sign." }, drill: { jp: "Sie kann auf das Haus deuten", en: "She can point at the house" }, accept: ["to point", "point", "to point at", "to indicate", "to interpret"], hint: "deuten auf = to point at. Also to interpret: einen Traum deuten." },
        { id: "de-u85l3-umarmen", type: "vocab", front: "umarmen", reading: "umarmen", meaning: "to hug", example: { jp: "Die Mutter umarmt ihr Kind.", en: "The mother hugs her child." }, drill: { jp: "Sie will das Kind umarmen", en: "She wants to hug the child" }, accept: ["to hug", "hug", "to embrace", "embrace", "to put your arms round"], hint: "um + der Arm: to put your arms around. NOT separable: ich umarme dich." },
        { id: "de-u85l3-diegeste", type: "vocab", front: "die Geste", reading: "diegeste", meaning: "the gesture", example: { jp: "Er macht eine Geste mit der Hand.", en: "He makes a gesture with his hand." }, drill: { jp: "Die Geste ist sehr nett", en: "The gesture is very kind" }, accept: ["gesture", "the gesture", "the sign", "the movement"], hint: "Said 'GES-teh', hard g. Also a kind act: eine nette Geste." },
      ],
    },
    {
      id: "de-u85l4",
      unit: 85,
      lesson: 4,
      title: "Ohne Worte",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe what a person is doing when they are not speaking.",
      items: [
        { id: "de-u85l4-schweigen", type: "vocab", front: "schweigen", reading: "schweigen", meaning: "to stay silent", example: { jp: "Er schweigt und hört zu.", en: "He stays silent and listens." }, drill: { jp: "Man kann auch schweigen", en: "You can also stay silent" }, accept: ["to stay silent", "stay silent", "to be silent", "to say nothing", "to keep quiet"], hint: "A deliberate silence, not an inability to speak. das Schweigen = the silence." },
        { id: "de-u85l4-seufzen", type: "vocab", front: "seufzen", reading: "seufzen", meaning: "to sigh", example: { jp: "Sie seufzt und macht die Tür zu.", en: "She sighs and closes the door." }, drill: { jp: "Er muss oft seufzen", en: "He often has to sigh" }, accept: ["to sigh", "sigh", "to give a sigh", "to heave a sigh"], hint: "der Seufzer = the sigh. Said 'ZOIF-tsen'." },
        { id: "de-u85l4-grinsen", type: "vocab", front: "grinsen", reading: "grinsen", meaning: "to grin", example: { jp: "Das Kind grinst über das Geschenk.", en: "The child grins about the present." }, drill: { jp: "Er kann nicht mehr grinsen", en: "He can't grin any more" }, accept: ["to grin", "grin", "to smirk", "smirk", "to beam"], hint: "Broader and cheekier than lächeln, and sometimes unkind." },
        { id: "de-u85l4-gahnen", type: "vocab", front: "gähnen", reading: "gahnen", meaning: "to yawn", example: { jp: "Ich bin müde und gähne.", en: "I am tired and I yawn." }, drill: { jp: "Am Abend muss man gähnen", en: "In the evening you have to yawn" }, accept: ["to yawn", "yawn", "to give a yawn"], hint: "Said 'GAY-nen'. Also of an empty space: eine gähnende Leere." },
        { id: "de-u85l4-sichumdrehen", type: "vocab", front: "sich umdrehen", reading: "sichumdrehen", meaning: "to turn around", example: { jp: "Er dreht sich um und geht.", en: "He turns around and goes." }, drill: { jp: "Man muss sich umdrehen", en: "You have to turn around" }, accept: ["to turn around", "turn around", "to turn round", "to look back"], hint: "Reflexive and separable: ich drehe mich um." },
        { id: "de-u85l4-diekorperhaltung", type: "vocab", front: "die Körperhaltung", reading: "diekorperhaltung", meaning: "the body posture", example: { jp: "Die Körperhaltung von dem Mann ist schlecht.", en: "The man's posture is bad." }, drill: { jp: "Die Körperhaltung ist nicht gut", en: "The posture is not good" }, accept: ["posture", "the posture", "body posture", "the body posture", "the bearing"], hint: "der Körper + die Haltung. How you hold yourself — and what it signals." },
      ],
    },
  ],
};
