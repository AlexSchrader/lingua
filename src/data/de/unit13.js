// DE Unit 13 — Nominativ und Akkusativ (slot: grammar-2) — A1
// Block 2 (u8–u14). Conventions: see de/unit1.js.
// THE CASE SYSTEM STARTS HERE, and block 1 deliberately kept everything before it in
// the nominative so that der/den/dem would not arrive looking like three unrelated
// words. Where u1–u7 needed an object at all they used a neuter or feminine noun,
// whose accusative is identical to the nominative — so nothing leaked in early.
// The one fact this unit exists to deliver: ONLY THE MASCULINE CHANGES. der → den,
// ein → einen, mein → meinen. die, das and the plural look exactly as they did.
// Owns: den/einen and their possessive and negative cousins (l1), the accusative
// pronouns (l2), the accusative-only prepositions (l3), and the two-way prepositions
// used with motion — wohin? (l4).
// Block 1 taught ein (u5l1) and mein/dein (u4l4) in their NOMINATIVE forms only and
// left the accusative endings to this unit; einen, meinen, deinen are therefore new
// fronts by design, not duplicates. The same applies to the dative forms in u14.
// The remaining three two-way prepositions — über, unter, zwischen — are in u14,
// where they arrive alongside the dative and the wo/wohin contrast can finally be
// stated in full. u14 also teaches the contractions im and am.
export const DE_UNIT13 = {
  id: "de-u13",
  lang: "de",
  title: "Nominativ und Akkusativ",
  order: 13,
  stage: "a1",
  lessons: [
    {
      id: "de-u13l1",
      unit: 13,
      lesson: 1,
      title: "Der Akkusativ: den und einen",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use a masculine noun as the object of a sentence, changing der to den and ein to einen.",
      items: [
        { id: "de-u13l1-den", type: "vocab", front: "den", reading: "den", meaning: "the (masculine, object)", example: { jp: "Ich suche den Weg.", en: "I am looking for the way." }, accept: ["the", "the (accusative)", "the (object)"], hint: "der becomes den when the noun is the OBJECT. Der Weg ist lang, but Ich suche den Weg. Only the masculine does this — die and das never change." },
        { id: "de-u13l1-einen", type: "vocab", front: "einen", reading: "einen", meaning: "a / an (masculine, object)", example: { jp: "Ich suche einen Park.", en: "I am looking for a park." }, accept: ["a", "an", "a (accusative)", "one"], hint: "ein (u5) does exactly what der does: ein Park ist schön, but Ich suche einen Park. Feminine eine and neuter ein stay as they are." },
        { id: "de-u13l1-keinen", type: "vocab", front: "keinen", reading: "keinen", meaning: "no / not a (masculine, object)", example: { jp: "Ich habe keinen Hunger.", en: "I am not hungry." }, accept: ["no", "not a", "not any"], hint: "kein (u12) takes the same endings as ein, so it makes keinen the same way. Ich habe keinen Hunger is the everyday way to say you are not hungry." },
        { id: "de-u13l1-meinen", type: "vocab", front: "meinen", reading: "meinen", meaning: "my (masculine, object)", example: { jp: "Ich suche meinen Bruder.", en: "I am looking for my brother." }, accept: ["my", "my (accusative)"], hint: "mein (u4) joins the same club: mein Bruder ist hier, but Ich suche meinen Bruder. Once you know ein → einen, every one of these follows." },
        { id: "de-u13l1-deinen", type: "vocab", front: "deinen", reading: "deinen", meaning: "your (masculine, object)", example: { jp: "Ich suche deinen Freund.", en: "I am looking for your friend." }, accept: ["your", "your (accusative)"], hint: "dein (u4) behaves identically. The pattern is now five words wide — den, einen, keinen, meinen, deinen — and it is one single rule." },
        { id: "de-u13l1-wen", type: "vocab", front: "wen", reading: "wen", meaning: "whom (object)", example: { jp: "Wen suchst du?", en: "Whom are you looking for?" }, accept: ["whom", "who"], hint: "wer (u12) is the subject, wen is the object — exactly the who/whom split English is losing. Wer sucht dich? against Wen suchst du?" },
      ],
    },
    {
      id: "de-u13l2",
      unit: 13,
      lesson: 2,
      title: "Pronomen im Akkusativ",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say me, you, him and us as the object of a sentence, and say that something exists.",
      items: [
        { id: "de-u13l2-mich", type: "vocab", front: "mich", reading: "mich", meaning: "me", example: { jp: "Du findest mich hier.", en: "You will find me here." }, accept: ["me"], hint: "ich (u3) is the subject form, mich the object — the same I/me split English makes. MISH, with the soft ch of ich." },
        { id: "de-u13l2-dich", type: "vocab", front: "dich", reading: "dich", meaning: "you (object)", example: { jp: "Ich suche dich.", en: "I am looking for you." }, accept: ["you", "you (object)"], hint: "du (u3) → dich. English lost this distinction for you; German kept it, and it rhymes with mich to help you remember." },
        { id: "de-u13l2-ihn", type: "vocab", front: "ihn", reading: "ihn", meaning: "him / it (masculine)", example: { jp: "Ich finde ihn nicht.", en: "I cannot find him." }, accept: ["him", "it"], hint: "er (u3) → ihn. It also means it for any masculine thing: Der Weg? Ich finde ihn nicht." },
        { id: "de-u13l2-uns", type: "vocab", front: "uns", reading: "uns", meaning: "us", example: { jp: "Er findet uns hier.", en: "He will find us here." }, accept: ["us"], hint: "wir (u3) → uns. This one is easy in both directions, because uns is also the dative form — it never changes again." },
        { id: "de-u13l2-euch", type: "vocab", front: "euch", reading: "euch", meaning: "you (plural, object)", example: { jp: "Ich höre euch.", en: "I can hear you." }, accept: ["you", "you all", "you (plural)"], hint: "ihr (u3) → euch. OYCH, with the eu of neu (u10). Like uns, it is the same in the dative." },
        { id: "de-u13l2-esgibt", type: "vocab", front: "es gibt", reading: "esgibt", meaning: "there is / there are", example: { jp: "Es gibt einen Markt hier.", en: "There is a market here." }, accept: ["there is", "there are", "there exists"], hint: "Always es gibt, singular, whether one thing follows or many — and what follows is always ACCUSATIVE. Es gibt einen Markt, not ein Markt." },
      ],
    },
    {
      id: "de-u13l3",
      unit: 13,
      lesson: 3,
      title: "Präpositionen mit Akkusativ",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the five prepositions that always take the accusative, whatever they mean.",
      items: [
        { id: "de-u13l3-durch", type: "vocab", front: "durch", reading: "durch", meaning: "through", example: { jp: "Wir gehen durch den Park.", en: "We are walking through the park." }, accept: ["through"], hint: "DOORSH. One of five prepositions that take the accusative every single time, with no exceptions to learn: durch, für, gegen, ohne, um." },
        { id: "de-u13l3-fuer", type: "vocab", front: "für", reading: "fur", meaning: "for", example: { jp: "Der Kaffee ist für dich.", en: "The coffee is for you." }, accept: ["for"], hint: "Notice dich and not du — an accusative preposition forces the object form of a pronoun too. Type für or fur." },
        { id: "de-u13l3-gegen", type: "vocab", front: "gegen", reading: "gegen", meaning: "against", example: { jp: "Ich habe nichts gegen ihn.", en: "I have nothing against him." }, accept: ["against", "versus", "around (time)"], hint: "Again the pronoun goes accusative: gegen ihn, not gegen er. It also means roughly with a time — gegen acht." },
        { id: "de-u13l3-ohne", type: "vocab", front: "ohne", reading: "ohne", meaning: "without", example: { jp: "Ich trinke den Kaffee ohne Milch.", en: "I drink the coffee without milk." }, accept: ["without"], hint: "OH-ne. The opposite of mit, which is a DATIVE preposition arriving in u14 — a good pair to compare once you have both." },
        { id: "de-u13l3-um", type: "vocab", front: "um", reading: "um", meaning: "around / at (time)", example: { jp: "Wir gehen um den Platz.", en: "We walk around the square." }, accept: ["around", "at", "round"], hint: "Two jobs: physically around something, and at a clock time — um zwei. Both take the accusative." },
        { id: "de-u13l3-brauchen", type: "vocab", front: "brauchen", reading: "brauchen", meaning: "to need", example: { jp: "Ich brauche einen Arzt.", en: "I need a doctor." }, drill: { jp: "Wir brauchen einen Arzt", en: "We need a doctor" }, accept: ["to need", "need", "to require"], hint: "A verb that always takes an accusative object, which makes it a good one to practise the new endings on: Ich brauche einen…" },
      ],
    },
    {
      id: "de-u13l4",
      unit: 13,
      lesson: 4,
      title: "Wohin? Bewegung mit Akkusativ",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where something is going — the six commonest two-way prepositions, used with the accusative because there is movement.",
      items: [
        { id: "de-u13l4-in", type: "vocab", front: "in", reading: "in", meaning: "into / in", example: { jp: "Ich gehe in den Park.", en: "I am going into the park." }, accept: ["into", "in", "to"], hint: "The most useful preposition in German, and block 1 avoided it entirely so it could land here. With MOVEMENT it takes the accusative: in den Park. Standing still it takes the dative, which is u14." },
        { id: "de-u13l4-auf", type: "vocab", front: "auf", reading: "auf", meaning: "onto / on", example: { jp: "Wir gehen auf den Markt.", en: "We are going to the market." }, accept: ["onto", "on", "to"], hint: "On a horizontal surface, where an is on a vertical one. Same rule: movement takes the accusative." },
        { id: "de-u13l4-an", type: "vocab", front: "an", reading: "an", meaning: "to / at / on", example: { jp: "Wir fahren an den Bahnhof.", en: "We are driving to the station." }, accept: ["to", "at", "on", "onto"], hint: "Up against something rather than on top of it — a picture hangs an der Wand. With movement, accusative: an den Bahnhof." },
        { id: "de-u13l4-vor", type: "vocab", front: "vor", reading: "vor", meaning: "in front of", example: { jp: "Das Auto fährt vor das Haus.", en: "The car drives in front of the house." }, accept: ["in front of", "before", "ago"], hint: "One of the four two-way prepositions block 1 named as being kept back for this unit. It also means ago with a time — vor einem Jahr." },
        { id: "de-u13l4-hinter", type: "vocab", front: "hinter", reading: "hinter", meaning: "behind", example: { jp: "Der Weg geht hinter das Haus.", en: "The path goes behind the house." }, accept: ["behind", "at the back of"], hint: "The opposite of vor. Both work the same way: accusative for movement, dative for position." },
        { id: "de-u13l4-neben", type: "vocab", front: "neben", reading: "neben", meaning: "next to / beside", example: { jp: "Das Kind geht neben die Mutter.", en: "The child walks next to the mother." }, accept: ["next to", "beside", "alongside"], hint: "die Mutter here is feminine, so the accusative looks exactly like the nominative — which is precisely why u1–u7 could use feminine and neuter objects without the learner ever noticing a case was involved." },
      ],
    },
  ],
};
