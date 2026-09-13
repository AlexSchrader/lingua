// DE Unit 44 — Stellen, legen und hängen (slot: vocabulary 5 (A2)) — A2
// Block 3 (u41–u50). Conventions: see de/unit1.js.
//
// THEME CHOSEN BY THIS SEAT, signed off by the crew lead, who called it the best
// structural idea in the German band — and it is, for a reason that is not about
// this unit: it is where `stehen` finally gets taught. A1's u20 deliberately
// dropped the bare verb (it taught aufstehen and verstehen instead), so every A2
// unit until now has had to route around a word as ordinary as "to stand". That
// gap closes here.
//
// THE PAIRING IS THE LESSON. German splits every position into a transitive verb
// (you put something there, accusative, weak) and an intransitive one (it is
// there, dative, strong). English uses one word for most of them and learners get
// it wrong for years:
//     stellen -> stehen      set upright / be standing
//     legen   -> liegen      lay down    / be lying      (liegen: u20)
//     setzen  -> sitzen      seat        / be sitting    (sitzen: u20)
//     hängen  -> hängen      hang up     / be hanging    (same form, different
//                                                         conjugation and case)
// So this unit is deliberately built ON TOP of u20 rather than beside it, and the
// three intransitive partners were already in the learner's hands.
//
// REFLEXIVES — ruling from the lead, and I was half wrong. I proposed teaching the
// bare pronoun `sich` here, having found no card whose front is `sich`. True, but
// the PATTERN is taught from the first unit of A2: twelve reflexive fronts across
// u21, u22, u24 and u25 (sich waschen, sich freuen, sich bewerben, sich erholen…),
// each carrying the pronoun, with the point made in u21's header. By u44 the
// learner has met it twelve times. A pronoun card here would be a late formal
// treatment of something already fluent, not an introduction. Lead's ruling: do
// not spend the slot. sich setzen and sich legen are taught as whole fronts, the
// way every other reflexive in this language is.
//
// DRILL CONSTRAINT, from u21's header: a reflexive front only survives WHOLE after
// a modal with a THIRD-PERSON subject, because that is the person whose pronoun is
// sich. So both reflexive drills are modal-framed, and the subjects vary across
// the lesson rather than opening "Die Kinder müssen sich…" six times.
// CROSS-BLOCK RULING (lead, dev-01), canonical-gloss tier, no card lost:
//   aufheben "to pick up" collided with u23 abholen; heben "to lift" with u30
//   der Aufzug "the lift". Both re-glossed, neither dropped. On heben I took the
//   lead's "to raise" as offered. On aufheben I took their SECOND option, "to pick
//   up off the floor", not their preferred "to keep": this lesson is things that
//   fall and get retrieved (fallen, halten, lassen), so the keeping sense would be
//   glossing the card away from the lesson that teaches it. The keeping sense stays
//   in accept[] and in the hint, where it costs nothing.
// check-forward-refs reports `ziehen` "used from u30, taught u44". That is the
// SEPARABLE-VERB artifact, not a forward reference: u30's "Wir ziehen im Sommer um"
// is the split form of umziehen, carded at u30l1 itself. Nothing to fix.
// RESERVE, screened clear against all 952 fronts in A1 + all three A2 blocks:
// werfen, fangen, halten, lassen, rollen, klopfen, drinnen, draußen,
// überall, die Mitte, das Ende.
// FREE: Sofa, Meter, Foto, Liter | Teller, Gläser, Bücher, Schuhe, Bilder, Kinder, Eltern, Schüler
export const DE_UNIT44 = {
  id: "de-u44",
  lang: "de",
  title: "Stellen, legen und hängen",
  order: 44,
  stage: "a2",
  lessons: [
    {
      id: "de-u44l1",
      unit: 44,
      lesson: 1,
      title: "Etwas hinstellen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put something somewhere: stand it up, lay it down, sit it down, hang it up or push it in.",
      items: [
        { id: "de-u44l1-stellen", type: "vocab", front: "stellen", reading: "stellen", meaning: "to stand something up", example: { jp: "Ich stelle die Flasche auf den Tisch.", en: "I stand the bottle on the table." }, drill: { jp: "Wir stellen die Flasche auf den Tisch", en: "We stand the bottle on the table" }, accept: ["to stand something up", "to put upright", "to place"], hint: "You stellen a thing that ends up STANDING. Takes the accusative because something moves. Its partner is stehen." },
        { id: "de-u44l1-legen", type: "vocab", front: "legen", reading: "legen", meaning: "to lay something down", example: { jp: "Sie legt das Messer neben den Teller.", en: "She lays the knife next to the plate." }, drill: { jp: "Wir legen das Buch auf den Tisch", en: "We lay the book on the table" }, accept: ["to lay", "to lay down", "to put down flat"], hint: "For a thing that ends up LYING. Partner of u20's liegen — legen moves it, liegen describes it." },
        { id: "de-u44l1-setzen", type: "vocab", front: "setzen", reading: "setzen", meaning: "to seat someone", example: { jp: "Der Vater setzt das Kind auf den Stuhl.", en: "The father sits the child on the chair." }, drill: { jp: "Wir setzen das Kind auf den Stuhl", en: "We sit the child on the chair" }, accept: ["to seat", "to sit someone down", "to place"], hint: "You setzen another person or a thing; you sich setzen yourself. Partner of u20's sitzen." },
        { id: "de-u44l1-hangen", type: "vocab", front: "hängen", reading: "hangen", meaning: "to hang something up", example: { jp: "Er hängt die Jacke in den Schrank.", en: "He hangs the jacket in the wardrobe." }, drill: { jp: "Wir hängen das Bild an die Wand", en: "We hang the picture on the wall" }, accept: ["to hang", "to hang up"], hint: "The odd one out: the same word does both jobs. Moving it is weak and takes the accusative; being hung is strong — es hing." },
        { id: "de-u44l1-stecken", type: "vocab", front: "stecken", reading: "stecken", meaning: "to put inside", example: { jp: "Ich stecke den Schlüssel in die Tasche.", en: "I put the key in my pocket." }, drill: { jp: "Wir stecken den Schlüssel in die Tasche", en: "We put the key in the pocket" }, accept: ["to put inside", "to stick", "to insert", "to slip"], hint: "Into a pocket, a bag, a socket. It also means to BE stuck: der Schlüssel steckt noch." },
        { id: "de-u44l1-stehen", type: "vocab", front: "stehen", reading: "stehen", meaning: "to be standing", example: { jp: "Die Flasche steht jetzt auf dem Tisch.", en: "The bottle is standing on the table now." }, drill: { jp: "Die Flaschen stehen auf dem Tisch", en: "The bottles are standing on the table" }, accept: ["to stand", "to be standing", "to be"], hint: "The partner of stellen, and the word A1 left out: u20 taught aufstehen and verstehen but never stehen itself. Takes the DATIVE — nothing is moving." },
      ],
    },
    {
      id: "de-u44l2",
      unit: 44,
      lesson: 2,
      title: "Sich setzen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put yourself somewhere rather than an object — sit down, lie down — and say what stays, falls or gets held.",
      items: [
        { id: "de-u44l2-sichsetzen", type: "vocab", front: "sich setzen", reading: "sichsetzen", meaning: "to sit down", example: { jp: "Bitte setzen Sie sich an den Tisch.", en: "Please sit down at the table." }, drill: { jp: "Die Kinder müssen sich setzen", en: "The children have to sit down" }, accept: ["to sit down", "to take a seat"], hint: "The reflexive of setzen: you seat yourself. sitzen (u20) is already being seated — Germans mind the difference." },
        { id: "de-u44l2-sichlegen", type: "vocab", front: "sich legen", reading: "sichlegen", meaning: "to lie down", example: { jp: "Der Patient soll sich legen, bevor der Arzt kommt.", en: "The patient should lie down before the doctor comes." }, drill: { jp: "Die Eltern wollen sich legen", en: "The parents want to lie down" }, accept: ["to lie down", "to lay oneself down"], hint: "The reflexive of legen. liegen (u20) is already lying there. Also used of wind or noise dying down." },
        { id: "de-u44l2-fallen", type: "vocab", front: "fallen", reading: "fallen", meaning: "to fall", example: { jp: "Das Glas fällt auf den Boden.", en: "The glass falls onto the floor." }, drill: { jp: "Die Gläser fallen auf den Boden", en: "The glasses fall onto the floor" }, accept: ["to fall", "to drop"], hint: "Nothing puts it there — it goes by itself, so no accusative object. Stem change: er fällt." },
        { id: "de-u44l2-halten", type: "vocab", front: "halten", reading: "halten", meaning: "to hold", example: { jp: "Kannst du bitte den Teller halten?", en: "Can you hold the plate, please?" }, drill: { jp: "Die Schüler halten die Bücher", en: "The pupils hold the books" }, accept: ["to hold", "to keep", "to stop"], hint: "Also to stop, of a bus or train — der Zug hält hier. Stem change: er hält." },
        { id: "de-u44l2-lassen", type: "vocab", front: "lassen", reading: "lassen", meaning: "to leave something", example: { jp: "Wir lassen die Bücher hier, weil sie zu schwer sind.", en: "We are leaving the books here, because they are too heavy." }, drill: { jp: "Wir lassen die Bücher auf dem Tisch", en: "We leave the books on the table" }, accept: ["to leave", "to let", "to allow"], hint: "Leaving a thing where it is, and also letting someone do something — lass mich gehen. Stem change: er lässt." },
        { id: "de-u44l2-aufheben", type: "vocab", front: "aufheben", reading: "aufheben", meaning: "to pick up off the floor", example: { jp: "Die Kinder müssen die Schuhe aufheben.", en: "The children have to pick the shoes up." }, drill: { jp: "Die Eltern müssen das Glas aufheben", en: "The parents have to pick the glass up" }, accept: ["to pick up", "to lift up", "to keep"], hint: "Separable, so it only stays whole after a modal — which is why the drill uses one. Also means to keep something for later." },
      ],
    },
    {
      id: "de-u44l3",
      unit: 44,
      lesson: 3,
      title: "Schieben und ziehen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Move something without lifting it: push, pull, press, turn, lift or roll.",
      items: [
        { id: "de-u44l3-schieben", type: "vocab", front: "schieben", reading: "schieben", meaning: "to push", example: { jp: "Wir schieben den Schrank an die Wand.", en: "We push the wardrobe against the wall." }, drill: { jp: "Wir schieben den Tisch an die Wand", en: "We push the table against the wall" }, accept: ["to push", "to shove", "to slide"], hint: "Pushing something along a surface. Pressing a button is drücken — German splits them." },
        { id: "de-u44l3-ziehen", type: "vocab", front: "ziehen", reading: "ziehen", meaning: "to pull", example: { jp: "Bitte ziehen und nicht drücken.", en: "Pull, please, and do not push." }, drill: { jp: "Die Kinder ziehen den Stuhl an das Fenster", en: "The children pull the chair to the window" }, accept: ["to pull", "to draw", "to tug"], hint: "On every German door: ZIEHEN on one side, DRÜCKEN on the other. It also means to move house." },
        { id: "de-u44l3-drucken", type: "vocab", front: "drücken", reading: "drucken", meaning: "to press", example: { jp: "Du musst hier lange drücken.", en: "You have to press here for a long time." }, drill: { jp: "Die Kinder drücken die Tür", en: "The children press the door" }, accept: ["to press", "to push a button", "to squeeze"], hint: "A button, a hand, a hug. The other half of the door pair with ziehen." },
        { id: "de-u44l3-drehen", type: "vocab", front: "drehen", reading: "drehen", meaning: "to turn", example: { jp: "Sie dreht den Schlüssel und die Tür geht auf.", en: "She turns the key and the door opens." }, drill: { jp: "Wir drehen den Schlüssel nach rechts", en: "We turn the key to the right" }, accept: ["to turn", "to rotate", "to twist"], hint: "Turning a thing on its axis — a key, a knob, a film. Turning yourself round is sich umdrehen." },
        { id: "de-u44l3-heben", type: "vocab", front: "heben", reading: "heben", meaning: "to raise", example: { jp: "Der Koffer ist sehr schwer, aber wir heben ihn.", en: "The suitcase is very heavy, but we lift it." }, drill: { jp: "Die Eltern heben den Koffer zusammen", en: "The parents lift the suitcase together" }, accept: ["to lift", "to raise"], hint: "Straight up, off the ground. aufheben, in the previous lesson, is lifting something that had fallen." },
        { id: "de-u44l3-rollen", type: "vocab", front: "rollen", reading: "rollen", meaning: "to roll", example: { jp: "Der Apfel rollt unter den Tisch.", en: "The apple rolls under the table." }, drill: { jp: "Die Äpfel rollen unter den Tisch", en: "The apples roll under the table" }, accept: ["to roll"], hint: "Roll and rollen are the same word. Works both ways: you can roll a thing, or it can roll by itself." },
      ],
    },
    {
      id: "de-u44l4",
      unit: 44,
      lesson: 4,
      title: "Oben und unten",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say where a thing ended up — above, below, at the front, at the back, or in the middle.",
      items: [
        { id: "de-u44l4-oben", type: "vocab", front: "oben", reading: "oben", meaning: "up there / at the top", example: { jp: "Die Gläser stehen oben im Schrank.", en: "The glasses are up at the top of the cupboard." }, drill: { jp: "Die Bücher stehen oben im Schrank", en: "The books are at the top of the cupboard" }, accept: ["up there", "at the top", "above", "upstairs"], hint: "A position, not a direction. Going up is nach oben — German keeps where and whither apart." },
        { id: "de-u44l4-unten", type: "vocab", front: "unten", reading: "unten", meaning: "down there / at the bottom", example: { jp: "Die schweren Bücher liegen unten.", en: "The heavy books are at the bottom." }, drill: { jp: "Die Schuhe stehen unten im Schrank", en: "The shoes are at the bottom of the cupboard" }, accept: ["down there", "at the bottom", "below", "downstairs"], hint: "The opposite of oben, and built the same way: nach unten is downwards." },
        { id: "de-u44l4-vorne", type: "vocab", front: "vorne", reading: "vorne", meaning: "at the front", example: { jp: "Die Kinder sitzen vorne, damit sie gut sehen.", en: "The children sit at the front, so that they can see well." }, drill: { jp: "Die Kinder sitzen vorne im Bus", en: "The children are sitting at the front of the bus" }, accept: ["at the front", "in front", "up front"], hint: "Related to u13's vor, but vorne is a place and vor is a preposition. Do not use one for the other." },
        { id: "de-u44l4-hinten", type: "vocab", front: "hinten", reading: "hinten", meaning: "at the back", example: { jp: "Der Garten hinten ist sehr klein.", en: "The garden at the back is very small." }, drill: { jp: "Die Eltern sitzen hinten im Bus", en: "The parents are sitting at the back of the bus" }, accept: ["at the back", "behind", "in the back"], hint: "Same relationship to u13's hinter as vorne has to vor: hinten is where, hinter is a preposition." },
        { id: "de-u44l4-diemitte", type: "vocab", front: "die Mitte", reading: "diemitte", meaning: "the middle", example: { jp: "In der Mitte steht ein großer Tisch.", en: "A big table stands in the middle." }, drill: { jp: "Die Mitte ist frei", en: "The middle is free" }, accept: ["the middle", "the centre", "the center"], hint: "In der Mitte is the phrase you need. Mitte and middle are the same word." },
        { id: "de-u44l4-dieecke", type: "vocab", front: "die Ecke", reading: "dieecke", meaning: "the corner", example: { jp: "Der Schrank steht in der Ecke neben dem Fenster.", en: "The wardrobe stands in the corner next to the window." }, drill: { jp: "Die Ecke ist sehr dunkel", en: "The corner is very dark" }, accept: ["the corner"], hint: "Inside a room you are IN der Ecke; a street corner is AN der Ecke. The preposition carries the difference." },
      ],
    },
  ],
};
