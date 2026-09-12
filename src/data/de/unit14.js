// DE Unit 14 — Dativ und Perfekt (slot: grammar-3) — A1
// Block 2 (u8–u14). Conventions: see de/unit1.js. The last unit of this block and the
// payoff of the whole case story: u13 gave the accusative, this gives the dative, and
// only with both in hand can the wo/wohin contrast finally be stated in full.
// Owns: the dative article dem and the contractions im and am, plus the last three
// two-way prepositions (l1); the dative pronouns and the verbs that take them (l2);
// the dative-only prepositions (l3); and the Perfekt (l4).
// aus is ALREADY TAUGHT at u3 and is used here in examples, not re-taught.
// haben (u4l4) and the sein forms ist/bin/bist/sind (u1, u3) are likewise taught —
// lesson 4 teaches the PARTICIPLES and the pattern, never those auxiliaries again.
//
// ⚠️ DELIBERATE LEXEME CALL, flagged for the merge seat because a mechanical sweep
// WILL surface all six: lesson 4's fronts are past participles of verbs already
// taught — gewesen (sein), gehabt (haben u4), gegangen (gehen u7), gekommen
// (kommen u3), gearbeitet (arbeiten u3), getrunken (trinken u6). They are taught
// anyway, for three reasons. The slot assigns the Perfekt to this unit and there is
// no way to teach a perfect tense without participles. The forms are not derivable:
// gehen → gegangen and trinken → getrunken change the stem, and no rule the learner
// has predicts them. And block 1 set the precedent by teaching ist/bin/bist/sind as
// separate fronts from sein, for exactly the same reason — an irregular form of a
// known verb is new learning, not a second mastery track for old learning.
//
// No FREE line here: this unit's examples use no cognate and no plural that is not
// already declared. Block 2's single addition, Wochen, sits in unit9.js.
export const DE_UNIT14 = {
  id: "de-u14",
  lang: "de",
  title: "Dativ und Perfekt",
  order: 14,
  stage: "a1",
  lessons: [
    {
      id: "de-u14l1",
      unit: 14,
      lesson: 1,
      title: "Wo? Der Dativ",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say where something IS rather than where it is going — the same prepositions as u13, now with the dative.",
      items: [
        { id: "de-u14l1-dem", type: "vocab", front: "dem", reading: "dem", meaning: "the (masculine/neuter, dative)", example: { jp: "Das Auto ist vor dem Haus.", en: "The car is in front of the house." }, accept: ["the", "the (dative)", "to the"], hint: "The third form of der. Nominative der, accusative den (u13), dative dem — and das goes to dem as well. Feminine die becomes der in the dative, which is the one genuinely confusing overlap in the system." },
        { id: "de-u14l1-im", type: "vocab", front: "im", reading: "im", meaning: "in the", example: { jp: "Im Winter schneit es.", en: "In winter it snows." }, accept: ["in the", "in"], hint: "in + dem squeezed into one word, and obligatory — nobody says in dem Winter. This is the word u9 could not use: now Im Januar and Im Winter are finally sayable." },
        { id: "de-u14l1-am", type: "vocab", front: "am", reading: "am", meaning: "on the / at the", example: { jp: "Am Montag arbeite ich.", en: "On Monday I work." }, accept: ["on the", "at the", "on"], hint: "an + dem, contracted the same way. It is how German says a day: am Montag, am Freitag — the form every example in u9 had to work around." },
        { id: "de-u14l1-ueber", type: "vocab", front: "über", reading: "uber", meaning: "over / above", example: { jp: "Die Wolke ist über dem Haus.", en: "The cloud is above the house." }, accept: ["over", "above", "about"], hint: "No movement here, so the dative: über dem Haus. It also means about a topic — ein Buch über Berlin. Type über or uber." },
        { id: "de-u14l1-unter", type: "vocab", front: "unter", reading: "unter", meaning: "under / below", example: { jp: "Das Buch ist unter der Zeitung.", en: "The book is under the newspaper." }, accept: ["under", "below", "beneath", "among"], hint: "der Zeitung, not die — a feminine noun takes der in the dative. That is the overlap to watch: der can be nominative masculine OR dative feminine." },
        { id: "de-u14l1-zwischen", type: "vocab", front: "zwischen", reading: "zwischen", meaning: "between", example: { jp: "Die Bank ist zwischen dem Hotel und der Post.", en: "The bank is between the hotel and the post office." }, drill: { jp: "Das Hotel ist zwischen Bahnhof und Park", en: "The hotel is between the station and the park" }, accept: ["between", "among"], hint: "The last of the nine two-way prepositions. Both nouns after it take the dative — dem Hotel and der Post — because nothing is moving." },
      ],
    },
    {
      id: "de-u14l2",
      unit: 14,
      lesson: 2,
      title: "Dativpronomen und Dativverben",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say how you are feeling the German way, and use the verbs that take a dative object.",
      items: [
        { id: "de-u14l2-mir", type: "vocab", front: "mir", reading: "mir", meaning: "(to) me", example: { jp: "Mir ist kalt.", en: "I am cold." }, accept: ["me", "to me", "for me"], hint: "The form u8 promised you. German does not say I am cold — it says to-me is cold: Mir ist kalt. Same with Es geht mir gut." },
        { id: "de-u14l2-dir", type: "vocab", front: "dir", reading: "dir", meaning: "(to) you", example: { jp: "Wie geht es dir?", en: "How are you?" }, accept: ["you", "to you", "for you"], hint: "You have been saying this since u2: wie geht's is wie geht es dir squeezed together. Now you can see the dative inside it." },
        { id: "de-u14l2-ihm", type: "vocab", front: "ihm", reading: "ihm", meaning: "(to) him / it", example: { jp: "Ich helfe ihm.", en: "I am helping him." }, accept: ["him", "to him", "for him", "it"], hint: "er → ihn in the accusative (u13) → ihm in the dative. Three forms of one small word, and this is the last of them." },
        { id: "de-u14l2-ihnen", type: "vocab", front: "ihnen", reading: "ihnen", meaning: "(to) them", example: { jp: "Wir helfen ihnen.", en: "We are helping them." }, accept: ["them", "to them", "for them"], hint: "Capitalised as Ihnen it means to you formally — the dative of Sie (u3). Same sound, and only the capital letter tells them apart." },
        { id: "de-u14l2-wem", type: "vocab", front: "wem", reading: "wem", meaning: "(to) whom", example: { jp: "Wem hilfst du?", en: "Whom are you helping?" }, accept: ["whom", "to whom", "who"], hint: "The set is now complete: wer asks the subject (u12), wen the object (u13), wem the dative. Wer hilft dir? against Wem hilfst du?" },
        { id: "de-u14l2-helfen", type: "vocab", front: "helfen", reading: "helfen", meaning: "to help", example: { jp: "Ich helfe dem Kind.", en: "I am helping the child." }, drill: { jp: "Wir helfen dem Kind", en: "We help the child" }, accept: ["to help", "help"], hint: "A verb whose object is DATIVE, not accusative — dem Kind, never das Kind. There is a small family of these and you learn them one by one; danken and gehören are two more." },
      ],
    },
    {
      id: "de-u14l3",
      unit: 14,
      lesson: 3,
      title: "Präpositionen mit Dativ",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Use the prepositions that always take the dative, whatever they mean.",
      items: [
        { id: "de-u14l3-mit", type: "vocab", front: "mit", reading: "mit", meaning: "with", example: { jp: "Ich trinke Kaffee mit Milch.", en: "I drink coffee with milk." }, accept: ["with", "by"], hint: "Always dative, no exceptions — mit dem Auto, mit der Familie. Compare ohne (u13), which is always accusative: the pair is worth learning together." },
        { id: "de-u14l3-nach", type: "vocab", front: "nach", reading: "nach", meaning: "to / after", example: { jp: "Wir fahren nach Berlin.", en: "We are driving to Berlin." }, accept: ["to", "after", "towards"], hint: "For cities and countries it means to — nach Berlin, nach Deutschland. For time it means after. Do not confuse it with noch (u12)." },
        { id: "de-u14l3-bei", type: "vocab", front: "bei", reading: "bei", meaning: "at / near / with", example: { jp: "Ich arbeite bei der Post.", en: "I work at the post office." }, accept: ["at", "near", "with", "by"], hint: "At a place of work or at someone's home — bei der Post, bei Anna. BY, with the ei of nein (u1)." },
        { id: "de-u14l3-seit", type: "vocab", front: "seit", reading: "seit", meaning: "since / for", example: { jp: "Seit Montag regnet es.", en: "It has been raining since Monday." }, accept: ["since", "for"], hint: "German uses the PRESENT tense with seit where English uses a perfect: Seit Montag regnet es = it has been raining since Monday." },
        { id: "de-u14l3-von", type: "vocab", front: "von", reading: "von", meaning: "from / of", example: { jp: "Das ist die Karte von der Stadt.", en: "That is the map of the city." }, accept: ["from", "of", "by"], hint: "FON, with v as f. It does the job English does with of, which is why it turns up constantly. aus (u3) is the other from — aus is out of, von is away from." },
        { id: "de-u14l3-zu", type: "vocab", front: "zu", reading: "zu", meaning: "to", example: { jp: "Ich gehe zu dir.", en: "I am going to your place." }, accept: ["to", "towards", "too"], hint: "To a person or a place: zu dir, zu der Bank — though that one contracts to zur, and zu dem contracts to zum. It also means too as in too much: zu teuer." },
      ],
    },
    {
      id: "de-u14l4",
      unit: 14,
      lesson: 4,
      title: "Das Perfekt",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about what you did — the past tense Germans actually speak, built from a helper verb you already know plus a participle at the very end.",
      items: [
        { id: "de-u14l4-gewesen", type: "vocab", front: "gewesen", reading: "gewesen", meaning: "been (past participle of sein)", example: { jp: "Ich bin in Berlin gewesen.", en: "I have been in Berlin." }, accept: ["been", "was", "have been"], hint: "The shape of the whole tense: helper in position two, participle at the very END. Ich BIN in Berlin GEWESEN. sein takes bin/bist/ist, not habe." },
        { id: "de-u14l4-gehabt", type: "vocab", front: "gehabt", reading: "gehabt", meaning: "had (past participle of haben)", example: { jp: "Ich habe Hunger gehabt.", en: "I was hungry." }, accept: ["had", "have had"], hint: "haben (u4) is its own helper here: ich habe … gehabt. The ge-…-t shape is the regular one, and most German verbs follow it." },
        { id: "de-u14l4-gegangen", type: "vocab", front: "gegangen", reading: "gegangen", meaning: "gone (past participle of gehen)", example: { jp: "Er ist nach Berlin gegangen.", en: "He went to Berlin." }, accept: ["gone", "went", "have gone"], hint: "gehen (u7) → gegangen, with the stem changed in the middle. Verbs of MOVEMENT take sein as their helper, not haben — er IST gegangen." },
        { id: "de-u14l4-gekommen", type: "vocab", front: "gekommen", reading: "gekommen", meaning: "come (past participle of kommen)", example: { jp: "Sie ist heute gekommen.", en: "She came today." }, accept: ["come", "came", "have come"], hint: "kommen (u3) → gekommen, ge-…-en with no stem change. Movement again, so sein again: sie IST gekommen." },
        { id: "de-u14l4-gearbeitet", type: "vocab", front: "gearbeitet", reading: "gearbeitet", meaning: "worked (past participle of arbeiten)", example: { jp: "Ich habe hier gearbeitet.", en: "I worked here." }, accept: ["worked", "have worked"], hint: "arbeiten (u3) → gearbeitet, with an extra e because the stem ends in t and gearbeitt would be unsayable. No movement, so haben." },
        { id: "de-u14l4-getrunken", type: "vocab", front: "getrunken", reading: "getrunken", meaning: "drunk (past participle of trinken)", example: { jp: "Wir haben Kaffee getrunken.", en: "We drank coffee." }, accept: ["drunk", "drank", "have drunk"], hint: "trinken (u6) → getrunken: ge-…-en with i becoming u. Unpredictable, which is why participles are learned as words and not built from a rule." },
      ],
    },
  ],
};
