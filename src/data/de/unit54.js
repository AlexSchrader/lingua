// DE Unit 54 — Vermutung und Unsicherheit (slot: hedging and uncertainty) — B1
// Block 1 (u51–u62). BAND CONVENTIONS: see the header of de/unit51.js.
//
// THEME: not being sure, and saying so accurately. A2 gives the learner
// vielleicht, möglich, sicher, hoffentlich and zögern — one blunt setting. B1
// needs the dial: how likely (l1), how little you know (l2), what you expect
// anyway (l3), and how to soften a claim so it does not land as a fact (l4).
// ⚠️ THE DISTINCTION WORTH TEACHING, and l1 is built around it: offenbar reports
// EVIDENCE you can see, angeblich reports a CLAIM somebody else made. English
// blurs both into "apparently"; German does not, and getting it wrong makes you
// sound either credulous or rude.
// ⚠️ eventuell is a false friend (possibly, NOT eventually) and its hint says so
// in capitals — it is the single most common B1 error an English speaker makes.
// ⚠️ mindestens (u53 l4) is the number floor; zumindest (l2 here) is the
// consolation. Both gloss as "at least" and the hints cross-reference.
// FREE: Nachrichten, Monaten
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT54 = {
  id: "de-u54",
  lang: "de",
  title: "Vermutung und Unsicherheit",
  order: 54,
  stage: "b1",
  lessons: [
    {
      id: "de-u54l1",
      unit: 54,
      lesson: 1,
      title: "Wahrscheinlich",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say how sure you are that something is true: probably, presumably, apparently from the evidence, or only allegedly.",
      items: [
        { id: "de-u54l1-wahrscheinlich", type: "vocab", front: "wahrscheinlich", reading: "wahrscheinlich", meaning: "probably", example: { jp: "Er kommt wahrscheinlich später, weil er noch im Büro sitzt.", en: "He'll probably come later, because he's still sitting in the office." }, drill: { jp: "Er kommt wahrscheinlich später", en: "He is probably coming later" }, accept: ["probably", "likely", "in all likelihood", "most likely", "probable"], hint: "wahr (true) + scheinen (to seem, the card below): it looks true. The everyday word for 'probably'." },
        { id: "de-u54l1-vermutlich", type: "vocab", front: "vermutlich", reading: "vermutlich", meaning: "presumably", example: { jp: "Das Paket kommt vermutlich morgen, aber ganz sicher ist das nicht.", en: "The parcel will presumably arrive tomorrow, but that isn't completely certain." }, drill: { jp: "Das Paket kommt vermutlich morgen", en: "The parcel is presumably coming tomorrow" }, accept: ["presumably", "probably", "supposedly", "I suppose", "most likely"], hint: "From vermuten (to suspect). A shade less certain than wahrscheinlich, and a shade more formal." },
        { id: "de-u54l1-offenbar", type: "vocab", front: "offenbar", reading: "offenbar", meaning: "apparently", example: { jp: "Er hat offenbar vergessen, dass wir um acht einen Termin hatten.", en: "He has apparently forgotten that we had an appointment at eight." }, drill: { jp: "Er hat offenbar nichts gehört", en: "He apparently heard nothing" }, accept: ["apparently", "evidently", "obviously", "clearly", "it seems"], hint: "offen + bar: lying open where you can see it. You are reporting the EVIDENCE — compare angeblich, which reports a claim." },
        { id: "de-u54l1-angeblich", type: "vocab", front: "angeblich", reading: "angeblich", meaning: "allegedly", example: { jp: "Der Zug hat angeblich Verspätung, aber im Internet steht nichts.", en: "The train is allegedly delayed, but there is nothing on the internet." }, drill: { jp: "Der Zug hat angeblich Verspätung", en: "The train is allegedly delayed" }, accept: ["allegedly", "supposedly", "reportedly", "so they say", "purportedly"], hint: "From angeben (to state): SOMEBODY claims it and you are not vouching for them. Never use it for your own view." },
        { id: "de-u54l1-scheinen", type: "vocab", front: "scheinen", reading: "scheinen", meaning: "to seem", example: { jp: "Er scheint sehr müde zu sein, obwohl er lange geschlafen hat.", en: "He seems to be very tired, although he slept for a long time." }, drill: { jp: "Die Gäste scheinen zufrieden zu sein", en: "The guests seem to be satisfied" }, accept: ["to seem", "seem", "to appear", "appear", "to look like", "to shine"], hint: "Two lives: es scheint gut zu sein (it seems) and die Sonne scheint (shines). der Schein, the banknote you already know, is the same family — what shows on the surface." },
        { id: "de-u54l1-eventuell", type: "vocab", front: "eventuell", reading: "eventuell", meaning: "possibly", example: { jp: "Wir kommen eventuell etwas später, das wissen wir heute noch nicht.", en: "We'll possibly come a little later; we don't know that yet today." }, drill: { jp: "Wir kommen eventuell etwas später", en: "We are possibly coming a bit later" }, accept: ["possibly", "perhaps", "maybe", "potentially", "if need be"], hint: "FALSE FRIEND — it does NOT mean 'eventually'. It means 'possibly', exactly like vielleicht. Germans hear 'eventually' as schließlich." },
      ],
    },
    {
      id: "de-u54l2",
      unit: 54,
      lesson: 2,
      title: "Keine Ahnung",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Admit what you don't know: give a rough number instead of an exact one, name your doubt, and say you have no idea.",
      items: [
        { id: "de-u54l2-derzweifel", type: "vocab", front: "der Zweifel", reading: "derzweifel", meaning: "the doubt", example: { jp: "Ich habe große Zweifel, ob das ohne mehr Geld überhaupt funktioniert.", en: "I have serious doubts whether that works at all without more money." }, drill: { jp: "Der Zweifel bleibt bei mir", en: "The doubt stays with me" }, accept: ["doubt", "the doubt", "misgiving", "the misgiving", "reservation", "the reservation"], hint: "zwei (two) sits inside it — a mind split in two. Zweifel haben an etwas; ohne Zweifel = without doubt. Plural looks the same." },
        { id: "de-u54l2-etwa", type: "vocab", front: "etwa", reading: "etwa", meaning: "roughly", example: { jp: "Etwa zwanzig Gäste sind schon gegangen, obwohl das Fest noch läuft.", en: "Roughly twenty guests have already left, although the party is still going." }, drill: { jp: "Etwa zwanzig Gäste sind gekommen", en: "Roughly twenty guests came" }, accept: ["roughly", "about", "approximately", "around", "some", "perhaps"], hint: "Same as ungefähr with numbers. It has a second job in questions, where it adds worry: Kommst du etwa nicht?" },
        { id: "de-u54l2-irgendwie", type: "vocab", front: "irgendwie", reading: "irgendwie", meaning: "somehow", example: { jp: "Wir schaffen das irgendwie, auch wenn ich noch nicht genau weiß wie.", en: "We'll manage it somehow, even if I don't know exactly how yet." }, drill: { jp: "Wir schaffen das schon irgendwie", en: "We'll manage it somehow" }, accept: ["somehow", "in some way", "kind of", "sort of", "somewhat"], hint: "irgend- (some-) + wie (how). The whole family works like this: irgendwann, irgendwo, irgendwer." },
        { id: "de-u54l2-zumindest", type: "vocab", front: "zumindest", reading: "zumindest", meaning: "at any rate", example: { jp: "Der Tag war sehr lang, aber zumindest hat das Essen gut geschmeckt.", en: "The day was very long, but at any rate the food tasted good." }, drill: { jp: "Zumindest hat das Essen geschmeckt", en: "At any rate the food tasted good" }, accept: ["at least", "at any rate", "at the very least", "if nothing else"], hint: "NOT the number floor — that is mindestens. This one is the consolation: zumindest ist es warm." },
        { id: "de-u54l2-dieahnung", type: "vocab", front: "die Ahnung", reading: "dieahnung", meaning: "the idea", example: { jp: "Ich habe keine Ahnung, warum der Zug heute überhaupt nicht fährt.", en: "I have no idea why the train isn't running at all today." }, drill: { jp: "Die Ahnung von gestern war richtig", en: "Yesterday's hunch was right" }, accept: ["idea", "the idea", "clue", "the clue", "inkling", "the inkling", "notion", "the notion", "hunch"], hint: "Nine times in ten you meet it as keine Ahnung! = no idea. From ahnen, to sense something coming." },
        { id: "de-u54l2-ungewiss", type: "vocab", front: "ungewiss", reading: "ungewiss", meaning: "uncertain", example: { jp: "Ob der Zug heute noch fährt, ist völlig ungewiss.", en: "Whether the train still runs today is completely uncertain." }, drill: { jp: "Das Ergebnis ist noch völlig ungewiss", en: "The result is still completely uncertain" }, accept: ["uncertain", "unclear", "unsure", "up in the air"], hint: "un- + gewiss (certain). Said of the THING, not the person: a fact is ungewiss, a person is unsicher. im Ungewissen bleiben = to be left in the dark." },
      ],
    },
    {
      id: "de-u54l3",
      unit: 54,
      lesson: 3,
      title: "Ich nehme an",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Work from what you expect rather than what you know: assume it, expect it, estimate it, and name what you are afraid of.",
      items: [
        { id: "de-u54l3-annehmen", type: "vocab", front: "annehmen", reading: "annehmen", meaning: "to assume", example: { jp: "Ich nehme an, dass er die Nachricht noch nicht gelesen hat.", en: "I assume that he hasn't read the message yet." }, drill: { jp: "Wir können das ruhig annehmen", en: "We can safely assume that" }, accept: ["to assume", "assume", "to suppose", "suppose", "to accept", "accept", "to take on"], hint: "an + nehmen, with two senses that sit side by side: ich nehme an, dass… (assume) and ein Angebot annehmen (accept)." },
        { id: "de-u54l3-erwarten", type: "vocab", front: "erwarten", reading: "erwarten", meaning: "to expect", example: { jp: "Wir erwarten heute Gäste, deshalb haben wir schon am Morgen aufgeräumt.", en: "We're expecting guests today, so we tidied up in the morning." }, drill: { jp: "Wir erwarten heute viele Gäste", en: "We are expecting many guests today" }, accept: ["to expect", "expect", "to await", "await", "to anticipate"], hint: "er- + warten: waiting for something you are sure is coming. Also of a baby: sie erwartet ein Kind." },
        { id: "de-u54l3-schatzen", type: "vocab", front: "schätzen", reading: "schatzen", meaning: "to estimate", example: { jp: "Ich schätze, dass wir noch zwei Stunden brauchen, vielleicht auch drei.", en: "I estimate that we need two more hours, maybe three." }, drill: { jp: "Wir schätzen die Zeit falsch", en: "We estimate the time wrongly" }, accept: ["to estimate", "estimate", "to reckon", "reckon", "to guess", "to value", "to appreciate"], hint: "Two senses that belong together: to put a number on something, and to value a person — ich schätze dich sehr." },
        { id: "de-u54l3-befurchten", type: "vocab", front: "befürchten", reading: "befurchten", meaning: "to fear", example: { jp: "Ich befürchte, dass wir den Termin am Freitag nicht halten können.", en: "I fear that we can't keep the appointment on Friday." }, drill: { jp: "Wir befürchten einen langen Streit", en: "We fear a long argument" }, accept: ["to fear", "fear", "to be afraid that", "to worry that", "to dread"], hint: "be- + die Furcht, a cousin of die Angst. You befürchten a FACT; you have Angst vor a THING." },
        { id: "de-u54l3-dereindruck", type: "vocab", front: "der Eindruck", reading: "dereindruck", meaning: "the impression", example: { jp: "Ich habe den Eindruck, dass er in der Nacht sehr schlecht geschlafen hat.", en: "I have the impression that he slept very badly during the night." }, drill: { jp: "Der Eindruck bleibt sehr lange", en: "The impression lasts a very long time" }, accept: ["impression", "the impression", "feeling", "the feeling", "sense", "the sense"], hint: "ein + drücken (to press): what pressed itself into you. den Eindruck haben, dass… = to get the feeling that…" },
        { id: "de-u54l3-diehoffnung", type: "vocab", front: "die Hoffnung", reading: "diehoffnung", meaning: "the hope", example: { jp: "Die Hoffnung auf eine schnelle Lösung ist leider klein geworden.", en: "The hope of a quick solution has sadly got small." }, drill: { jp: "Die Hoffnung auf gutes Wetter bleibt", en: "The hope of good weather remains" }, accept: ["hope", "the hope"], hint: "The noun beside hoffen (u29). die Hoffnung AUF etwas; die Hoffnung aufgeben = to give up hope." },
      ],
    },
    {
      id: "de-u54l4",
      unit: 54,
      lesson: 4,
      title: "Vorsichtig gesagt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Soften a statement so it doesn't land as a hard fact — the small words that let you hedge without lying.",
      items: [
        { id: "de-u54l4-eigentlich", type: "vocab", front: "eigentlich", reading: "eigentlich", meaning: "actually", example: { jp: "Eigentlich wollte ich früher gehen, aber dann kam noch ein langes Gespräch.", en: "Actually I wanted to leave earlier, but then another long conversation came up." }, drill: { jp: "Eigentlich wollte ich früher gehen", en: "Actually I wanted to leave earlier" }, accept: ["actually", "really", "in fact", "strictly speaking", "originally", "to be honest"], hint: "eigen (own) + -lich: how it really is underneath. Very often the polite run-up to a no." },
        { id: "de-u54l4-jedenfalls", type: "vocab", front: "jedenfalls", reading: "jedenfalls", meaning: "in any case", example: { jp: "Er hat gestern nicht angerufen, jedenfalls habe ich nichts gehört.", en: "He didn't call yesterday — in any case I heard nothing." }, drill: { jp: "Jedenfalls habe ich nichts gehört", en: "In any case I heard nothing" }, accept: ["in any case", "anyway", "at any rate", "at least", "either way"], hint: "jeden + Fall: in every case. It fences off what you actually know from what you are only guessing." },
        { id: "de-u54l4-sowieso", type: "vocab", front: "sowieso", reading: "sowieso", meaning: "anyway", example: { jp: "Wir müssen sowieso zum Supermarkt, deshalb können wir auch Brot holen.", en: "We have to go to the supermarket anyway, so we can get bread too." }, drill: { jp: "Wir müssen sowieso zum Supermarkt", en: "We have to go to the supermarket anyway" }, accept: ["anyway", "in any case", "anyhow", "regardless", "as it is"], hint: "It was going to happen with or without this reason. Spoken German often shortens it all the way to eh." },
        { id: "de-u54l4-lediglich", type: "vocab", front: "lediglich", reading: "lediglich", meaning: "merely", example: { jp: "Es war lediglich ein Versuch, und mehr wollten wir damit auch nicht.", en: "It was merely an attempt, and we didn't want more than that either." }, drill: { jp: "Es war lediglich ein Versuch", en: "It was merely an attempt" }, accept: ["merely", "only", "just", "simply", "no more than"], hint: "The written cousin of nur. lediglich ein Versuch = merely an attempt — it makes the claim smaller on purpose." },
        { id: "de-u54l4-bloss", type: "vocab", front: "bloß", reading: "bloss", meaning: "just", example: { jp: "Ich wollte bloß helfen, aber er hat das leider ganz falsch verstanden.", en: "I just wanted to help, but unfortunately he understood that completely wrongly." }, drill: { jp: "Ich wollte bloß kurz helfen", en: "I just wanted to help briefly" }, accept: ["just", "only", "merely", "simply", "bare"], hint: "The spoken cousin of nur — and an adjective too: mit bloßen Händen = with bare hands. ß, so the reading is written bloss." },
        { id: "de-u54l4-jenachdem", type: "vocab", front: "je nachdem", reading: "jenachdem", meaning: "depending", example: { jp: "Wir fahren mit dem Zug oder mit dem Auto, je nachdem wie das Wetter ist.", en: "We'll go by train or by car, depending on what the weather is like." }, drill: { jp: "Je nachdem wird es teuer", en: "Depending on that it gets expensive" }, accept: ["depending", "it depends", "depending on", "that depends"], hint: "je nachdem, ob / wie / wer… = depending on whether / how / who. On its own, Je nachdem. is a whole answer." },
      ],
    },
  ],
};
