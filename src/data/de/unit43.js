// DE Unit 43 — Das Aussehen (slot: vocabulary 4 (A2)) — A2
// Block 3 (u41–u50). Conventions: see de/unit1.js.
//
// THEME CHOSEN BY THIS SEAT, signed off by the crew lead before authoring.
// A1's u11 gave the body as anatomy — der Kopf, das Auge, die Nase, der Mund —
// for a health unit, and u10 gave the plain adjectives. Neither lets a learner
// describe a PERSON. This unit does: the face in detail (l1), hair and build
// (l2), how someone comes across (l3), and recognising them (l4).
//
// BOUNDARY: u31 is personality and character — what someone IS LIKE. This unit
// is what they LOOK like. The two never meet: no nett, ruhig or lustig here, and
// u31 takes no physical description.
// CROSS-BLOCK RULING (lead, dev-01): wirken lost to block 2 u31 and ähnlich to
// block 2 u37; both replaced from this unit's own reserve list, and l3 retitled
// since it was named after wirken. aussehen KEPT and re-glossed from "to appear"
// to "to look" — it collided with block 2 u35 auftreten on the gloss, and the
// lead ruled the narrower gloss is the truer one, so nobody loses a card.
// Rejected as already taught: grau (u8), and u11's anatomy — der Kopf, das Auge,
// die Nase, der Mund, das Ohr, der Hals, die Hand, der Arm — all used freely in
// examples instead. blond is on block 1's FREE cognate line, so it is available
// in examples and not worth a card.
// Rejected as the same lexeme: das Aussehen (~aussehen, taught in lesson 3 —
// the verb is far the more useful of the pair), mittelgroß (~groß u1).
// Kept deliberately: aussehen, a separable verb on u20's sehen. "To look like"
// is not derivable from "to see", and u29's subordinators mean it drills whole
// in a weil-clause as well as after a modal.
// RESERVE, screened clear against all 504 taught fronts: der Schnurrbart,
// zierlich, die Locke, die Falte, rothaarig, der Zopf, das Gewicht, der Typ.
// FREE: blond, Typ, Zentimeter, Meter, Foto | Haare, Lippen, Wangen, Augen, Ringe, Ketten, Brillen
export const DE_UNIT43 = {
  id: "de-u43",
  lang: "de",
  title: "Das Aussehen",
  order: 43,
  stage: "a2",
  lessons: [
    {
      id: "de-u43l1",
      unit: 43,
      lesson: 1,
      title: "Das Gesicht",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe a face in more detail than u11's anatomy allowed: forehead, cheek, chin, lips and glasses.",
      items: [
        { id: "de-u43l1-dasgesicht", type: "vocab", front: "das Gesicht", reading: "dasgesicht", meaning: "the face", example: { jp: "Das Gesicht auf dem Foto ist sehr jung.", en: "The face in the photo is very young." }, drill: { jp: "Das Gesicht ist sehr jung", en: "The face is very young" }, accept: ["the face"], hint: "Built on sehen, the thing you see a person by. Plural die Gesichter." },
        { id: "de-u43l1-diestirn", type: "vocab", front: "die Stirn", reading: "diestirn", meaning: "the forehead", example: { jp: "Er hat die Hand an der Stirn, weil er müde ist.", en: "He has his hand on his forehead because he is tired." }, drill: { jp: "Die Stirn ist sehr hoch", en: "The forehead is very high" }, accept: ["the forehead", "the brow"], hint: "One syllable, and the i is short. Die Stirn runzeln is to frown." },
        { id: "de-u43l1-diewange", type: "vocab", front: "die Wange", reading: "diewange", meaning: "the cheek", example: { jp: "Die Wangen sind rot, obwohl es warm im Zimmer ist.", en: "Her cheeks are red, although it is warm in the room." }, drill: { jp: "Die Wange ist sehr rot", en: "The cheek is very red" }, accept: ["the cheek"], hint: "Die Backe means the same and is more colloquial. Wange is the one you meet in writing." },
        { id: "de-u43l1-daskinn", type: "vocab", front: "das Kinn", reading: "daskinn", meaning: "the chin", example: { jp: "Der Bart geht bis an das Kinn.", en: "The beard goes down to the chin." }, drill: { jp: "Das Kinn ist sehr klein", en: "The chin is very small" }, accept: ["the chin"], hint: "Chin and Kinn are the same word. Not to be confused with das Knie, the knee." },
        { id: "de-u43l1-dielippe", type: "vocab", front: "die Lippe", reading: "dielippe", meaning: "the lip", example: { jp: "Im Winter sind die Lippen oft kalt.", en: "In winter your lips are often cold." }, drill: { jp: "Die Lippe ist sehr rot", en: "The lip is very red" }, accept: ["the lip"], hint: "Usually plural, die Lippen, because they come in twos. Lip and Lippe are the same word." },
        { id: "de-u43l1-diebrille", type: "vocab", front: "die Brille", reading: "diebrille", meaning: "the glasses", example: { jp: "Ohne Brille kann ich die Karte nicht lesen.", en: "Without glasses I cannot read the menu." }, drill: { jp: "Die Brille ist neu und teuer", en: "The glasses are new and expensive" }, accept: ["the glasses", "the spectacles", "the eyeglasses"], hint: "SINGULAR in German where English is plural: die Brille ist, the glasses are. One object, one word." },
      ],
    },
    {
      id: "de-u43l2",
      unit: 43,
      lesson: 2,
      title: "Haar und Figur",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what someone's hair is like and describe their build — slim, strong, curly or straight.",
      items: [
        { id: "de-u43l2-dashaar", type: "vocab", front: "das Haar", reading: "dashaar", meaning: "the hair", example: { jp: "Ihr Haar ist lang und dunkel.", en: "Her hair is long and dark." }, drill: { jp: "Das Haar ist lang und dunkel", en: "The hair is long and dark" }, accept: ["the hair"], hint: "Germans usually say the plural die Haare for the hair on a head — das Haar is one hair, or the poetic whole." },
        { id: "de-u43l2-derbart", type: "vocab", front: "der Bart", reading: "derbart", meaning: "the beard", example: { jp: "Der Bart ist neu und sehr lang.", en: "The beard is new and very long." }, drill: { jp: "Der Bart ist grau und lang", en: "The beard is grey and long" }, accept: ["the beard"], hint: "Beard and Bart are the same word. A moustache alone is der Schnurrbart." },
        { id: "de-u43l2-lockig", type: "vocab", front: "lockig", meaning: "curly", reading: "lockig", example: { jp: "Ihr Haar ist lockig und dunkel.", en: "Her hair is curly and dark." }, drill: { jp: "Das Haar ist sehr lockig", en: "The hair is very curly" }, accept: ["curly"], hint: "From die Locke, a curl, plus the -ig ending that makes an adjective of a noun." },
        { id: "de-u43l2-glatt", type: "vocab", front: "glatt", reading: "glatt", meaning: "straight / smooth", example: { jp: "Mein Haar ist glatt und ihr Haar ist lockig.", en: "My hair is straight and her hair is curly." }, drill: { jp: "Das Haar ist sehr glatt", en: "The hair is very straight" }, accept: ["straight", "smooth", "slippery"], hint: "Straight hair, a smooth surface, and an icy road — one word for all three." },
        { id: "de-u43l2-schlank", type: "vocab", front: "schlank", reading: "schlank", meaning: "slim", example: { jp: "Er ist groß und schlank wie der Vater.", en: "He is tall and slim like his father." }, drill: { jp: "Der Mann ist groß und schlank", en: "The man is tall and slim" }, accept: ["slim", "slender", "thin"], hint: "The polite word. u10's dünn is neutral about objects but blunt about a person." },
        { id: "de-u43l2-muskulos", type: "vocab", front: "muskulös", reading: "muskulos", meaning: "muscular", example: { jp: "Sein Bruder ist groß und muskulös.", en: "His brother is tall and muscular." }, drill: { jp: "Der Mann ist sehr muskulös", en: "The man is very muscular" }, accept: ["muscular", "brawny", "well-built"], hint: "Having strong, visible muscles, from der Muskel. For a clearly athletic build." },
      ],
    },
    {
      id: "de-u43l3",
      unit: 43,
      lesson: 3,
      title: "Wie jemand aussieht",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how someone looks and the impression they give — good-looking, sporty, or younger than they are.",
      items: [
        { id: "de-u43l3-aussehen", type: "vocab", front: "aussehen", reading: "aussehen", meaning: "to look", example: { jp: "Du siehst heute sehr gut aus.", en: "You look very good today." }, drill: { jp: "Die Kinder müssen gut aussehen", en: "The children have to look good" }, accept: ["to look", "to appear", "to look like"], hint: "Separable: du siehst … aus. It only stays whole after a modal or in a weil-clause, which is why the drill uses one." },
        { id: "de-u43l3-gepflegt", type: "vocab", front: "gepflegt", reading: "gepflegt", meaning: "well-groomed", example: { jp: "Er ist immer gepflegt, auch am Sonntag.", en: "He is always well-groomed, even on Sunday." }, drill: { jp: "Der Mann ist sehr gepflegt", en: "The man is very well-groomed" }, accept: ["well-groomed", "neat", "well-kept"], hint: "From pflegen, to care for — the look of someone who takes trouble. Used of gardens and hands as well as people." },
        { id: "de-u43l3-hubsch", type: "vocab", front: "hübsch", reading: "hubsch", meaning: "pretty", example: { jp: "Das Kleid für den Sommer ist hübsch.", en: "The dress for the summer is pretty." }, drill: { jp: "Die Frau ist sehr hübsch", en: "The woman is very pretty" }, accept: ["pretty", "good-looking", "lovely"], hint: "Lighter than schön (u1) — pleasant rather than beautiful. Works for things as well as people." },
        { id: "de-u43l3-attraktiv", type: "vocab", front: "attraktiv", reading: "attraktiv", meaning: "attractive", example: { jp: "Er findet sie attraktiv, sagt es aber nicht.", en: "He finds her attractive, but does not say so." }, drill: { jp: "Der Mann ist sehr attraktiv", en: "The man is very attractive" }, accept: ["attractive", "appealing"], hint: "Same word as English, stressed at the end: at-trak-TEEF. The v says f." },
        { id: "de-u43l3-sportlich", type: "vocab", front: "sportlich", reading: "sportlich", meaning: "sporty / athletic", example: { jp: "Meine Schwester ist sehr sportlich und läuft oft.", en: "My sister is very sporty and runs often." }, drill: { jp: "Die Kinder sind sehr sportlich", en: "The children are very sporty" }, accept: ["sporty", "athletic", "sports-minded"], hint: "Sport plus -lich. Also means casual of clothes — ein sportliches Hemd." },
        { id: "de-u43l3-jugendlich", type: "vocab", front: "jugendlich", reading: "jugendlich", meaning: "youthful", example: { jp: "Sie sieht jugendlich aus, obwohl sie älter ist als ich.", en: "She looks youthful, although she is older than me." }, drill: { jp: "Der Mann ist sehr jugendlich", en: "The man is very youthful" }, accept: ["youthful", "young-looking"], hint: "Looking young, as opposed to jung (u3), which is being young. The difference matters." },
      ],
    },
    {
      id: "de-u43l4",
      unit: 43,
      lesson: 4,
      title: "Erkennen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Recognise someone, say who they resemble, and name the jewellery and skin you would describe them by.",
      items: [
        { id: "de-u43l4-erkennen", type: "vocab", front: "erkennen", reading: "erkennen", meaning: "to recognise", example: { jp: "Ich erkenne ihn an der Brille.", en: "I recognise him by his glasses." }, drill: { jp: "Wir erkennen ihn an der Brille", en: "We recognise him by his glasses" }, accept: ["to recognise", "to recognize", "to make out"], hint: "erkennen AN plus dative — you recognise someone BY something. Built on kennen, to know a person." },
        { id: "de-u43l4-verwechseln", type: "vocab", front: "verwechseln", reading: "verwechseln", meaning: "to mix up", example: { jp: "Wir verwechseln die Schwestern sehr oft.", en: "We mix the sisters up very often." }, drill: { jp: "Wir verwechseln die Kinder oft", en: "We often mix the children up" }, accept: ["to mix up", "to confuse", "to mistake for"], hint: "Two people or things swapped in your head. verwechseln MIT — ich verwechsle ihn mit seinem Bruder." },
        { id: "de-u43l4-diehaut", type: "vocab", front: "die Haut", reading: "diehaut", meaning: "the skin", example: { jp: "Im Sommer ist die Haut oft dunkel.", en: "In summer the skin is often dark." }, drill: { jp: "Die Haut ist sehr dunkel", en: "The skin is very dark" }, accept: ["the skin", "the hide"], hint: "One letter from das Haus and nothing to do with it. The au says ow, as in how." },
        { id: "de-u43l4-derring", type: "vocab", front: "der Ring", reading: "derring", meaning: "the ring", example: { jp: "Der Ring an ihrer Hand ist sehr alt.", en: "The ring on her hand is very old." }, drill: { jp: "Der Ring ist sehr alt", en: "The ring is very old" }, accept: ["the ring"], hint: "Ring and Ring, identical. Also a boxing ring and a ring road." },
        { id: "de-u43l4-diekette", type: "vocab", front: "die Kette", reading: "diekette", meaning: "the necklace / chain", example: { jp: "Die Kette ist von meiner Großmutter.", en: "The necklace is from my grandmother." }, drill: { jp: "Die Kette ist sehr schön", en: "The necklace is very beautiful" }, accept: ["the necklace", "the chain"], hint: "Both the jewellery and a bicycle chain. English chain is the same word one consonant over." },
        { id: "de-u43l4-derschmuck", type: "vocab", front: "der Schmuck", reading: "derschmuck", meaning: "the jewellery", example: { jp: "Sie trägt wenig Schmuck.", en: "She wears little jewellery." }, drill: { jp: "Der Schmuck ist sehr teuer", en: "The jewellery is very expensive" }, accept: ["the jewellery", "the jewelry", "the ornaments"], hint: "A collective noun with no plural, like das Besteck in u42. From schmücken, to decorate." },
      ],
    },
  ],
};
