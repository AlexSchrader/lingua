// DE Unit 36 — Sätze verbinden · 2 (slot: grammar-4) — A2
// Block 2 (u31–u40). Conventions: see de/unit1.js.
//
// BUILT ON u29, NOT OVER IT. The lead's u29 landed German's biggest A1 gap — the
// subordinating conjunctions and verb-final order — teaching weil, dass, wenn, ob,
// als, bevor, nachdem, sobald, während, obwohl, damit, falls, solange, sonst and
// their non-subordinating twins (deshalb, deswegen, trotzdem, nämlich, also).
// NONE of those is retaught here. This unit takes what u29 explicitly left: the
// TWO-PART conjunctions (l1), the adverbial connectors that add or concede (l2),
// the ones that order and emphasise an argument (l3), and the relative pronouns
// dessen/deren plus the contrast pair (l4).
//
// ⚠️ GLOSSED BY FUNCTION, OUTSIDE PARENTHESES — the lead's warning, obeyed. Six of
// these have a taught near-twin whose gloss they would otherwise collide with:
// jedoch~aber (u12), dennoch~trotzdem (u29), außerdem~auch (u3), allerdings~aber,
// sowie~und (u1), and zuerst~erstens inside this very lesson. normalizeMeaning
// STRIPS parentheticals, so "however (formal)" would collapse to "however" and
// collide. Each distinguishing clause is therefore written after an em dash,
// outside any bracket, where the normaliser cannot remove it.
//
// Rejected as already taught: zuerst and kaum — the lead's u21 took both while this
// unit was being written, and lower slot wins. endlich and besonders replaced them.
// je and desto were moved OUT of this unit to u37: they need comparatives (mehr,
// besser) which u37 teaches, and a unit may not use vocabulary from a later slot.
//
// Two ß fronts — außerdem and schließlich — with readings hand-written as
// "ausserdem" and "schliesslich" per the unit1.js rule.
export const DE_UNIT36 = {
  id: "de-u36",
  lang: "de",
  title: "Sätze verbinden · 2",
  order: 36,
  stage: "a2",
  lessons: [
    {
      id: "de-u36l1",
      unit: 36,
      lesson: 1,
      title: "Zweiteilige Konjunktionen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Join two things with a conjunction that comes in two halves — either/or, neither/nor, both/and.",
      items: [
        { id: "de-u36l1-entweder", type: "vocab", front: "entweder", reading: "entweder", meaning: "either", example: { jp: "Wir fahren entweder heute oder morgen.", en: "We are travelling either today or tomorrow." }, drill: { jp: "Wir gehen entweder heute oder morgen", en: "We are going either today or tomorrow" }, accept: ["either"], hint: "Always paired with oder (u12): entweder … oder. The first half can also open the sentence, and then the verb still comes second." },
        { id: "de-u36l1-weder", type: "vocab", front: "weder", reading: "weder", meaning: "neither", example: { jp: "Er hat weder Zeit noch Geld.", en: "He has neither time nor money." }, drill: { jp: "Wir haben weder Brot noch Milch", en: "We have neither bread nor milk" }, accept: ["neither"], hint: "Paired with noch (u12): weder … noch. Note that German uses no extra nicht — weder already carries the negative." },
        { id: "de-u36l1-sowohl", type: "vocab", front: "sowohl", reading: "sowohl", meaning: "both — in the pair sowohl … als auch", example: { jp: "Sowohl der Vater als auch die Mutter arbeiten hier.", en: "Both the father and the mother work here." }, drill: { jp: "Sowohl der Vater als auch die Mutter arbeiten", en: "Both the father and the mother work" }, accept: ["both", "both and", "as well as"], hint: "The fixed frame is sowohl … als auch, using u29's als and u3's auch. It is the positive mirror of weder … noch." },
        { id: "de-u36l1-zwar", type: "vocab", front: "zwar", reading: "zwar", meaning: "admittedly — setting up a following aber", example: { jp: "Das Buch ist zwar alt, aber sehr gut.", en: "The book is admittedly old, but very good." }, drill: { jp: "Das Buch ist zwar sehr alt", en: "The book is admittedly very old" }, accept: ["admittedly", "it is true that", "indeed"], hint: "It announces a concession before you make it: zwar …, aber … . A German hears zwar and waits for the aber." },
        { id: "de-u36l1-beziehungsweise", type: "vocab", front: "beziehungsweise", reading: "beziehungsweise", meaning: "or rather — naming a more exact option", example: { jp: "Wir kommen am Montag beziehungsweise am Dienstag.", en: "We are coming on Monday, or rather on Tuesday." }, drill: { jp: "Der Kurs ist am Mittwoch beziehungsweise am Freitag", en: "The course is on Wednesday, or rather on Friday" }, accept: ["or rather", "respectively", "or", "that is"], hint: "Almost always written bzw. Longer than any word needs to be, which is the joke Germans make about it themselves." },
        { id: "de-u36l1-sowie", type: "vocab", front: "sowie", reading: "sowie", meaning: "as well as — listing items, not joining clauses", example: { jp: "Wir kaufen Brot sowie Käse und Milch.", en: "We are buying bread as well as cheese and milk." }, drill: { jp: "Der Kurs ist für Kinder sowie Eltern", en: "The course is for children as well as parents" }, accept: ["as well as", "and also", "plus"], hint: "It joins nouns in a list, where und (u1) joins anything at all. A shopping list or a contract uses sowie; speech uses und." },
      ],
    },
    {
      id: "de-u36l2",
      unit: 36,
      lesson: 2,
      title: "Hinzufügen und einschränken",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Add a further point, or take one back a little, without starting a new sentence.",
      items: [
        { id: "de-u36l2-ausserdem", type: "vocab", front: "außerdem", reading: "ausserdem", meaning: "besides — adding a further reason", example: { jp: "Es ist spät, außerdem bin ich müde.", en: "It is late, and besides I am tired." }, drill: { jp: "Außerdem bin ich sehr müde", en: "Besides, I am very tired" }, accept: ["besides", "in addition", "moreover", "what is more"], hint: "Adds a NEW argument, where auch (u3) only adds another instance of the same one. It pushes the verb to second place after it." },
        { id: "de-u36l2-jedoch", type: "vocab", front: "jedoch", reading: "jedoch", meaning: "however — the written-register turn", example: { jp: "Das Zimmer ist klein, jedoch sehr hell.", en: "The room is small, however very bright." }, drill: { jp: "Das Zimmer ist jedoch sehr hell", en: "The room is, however, very bright" }, accept: ["however", "but", "yet", "nevertheless"], hint: "Means what aber (u12) means and belongs to writing. aber never changes the word order; jedoch can take first position and push the verb second." },
        { id: "de-u36l2-dennoch", type: "vocab", front: "dennoch", reading: "dennoch", meaning: "nevertheless — stronger than trotzdem", example: { jp: "Es regnet, dennoch gehen wir in den Park.", en: "It is raining; nevertheless we are going to the park." }, drill: { jp: "Wir gehen dennoch in den Park", en: "Nevertheless we are going to the park" }, accept: ["nevertheless", "nonetheless", "even so", "still"], hint: "u29 taught trotzdem for this job. dennoch is the heavier, more written of the two, and the two are otherwise interchangeable." },
        { id: "de-u36l2-allerdings", type: "vocab", front: "allerdings", reading: "allerdings", meaning: "though — conceding one point only", example: { jp: "Das Buch ist gut, allerdings ist es zu lang.", en: "The book is good, though it is too long." }, drill: { jp: "Das Buch ist allerdings sehr lang", en: "The book is, though, very long" }, accept: ["though", "admittedly", "mind you", "however"], hint: "Smaller than jedoch: it concedes one detail rather than turning the whole argument. On its own, Allerdings! means absolutely, quite so." },
        { id: "de-u36l2-uebrigens", type: "vocab", front: "übrigens", reading: "ubrigens", meaning: "by the way", example: { jp: "Übrigens kommt der Chef heute später.", en: "By the way, the boss is coming later today." }, drill: { jp: "Übrigens kommt der Chef heute", en: "By the way the boss is coming today" }, accept: ["by the way", "incidentally"], hint: "Drops a side remark into a conversation. Ü-bri-gens, stress at the front, and it takes first position with the verb straight after." },
        { id: "de-u36l2-sogar", type: "vocab", front: "sogar", reading: "sogar", meaning: "even — more than you would expect", example: { jp: "Er arbeitet sogar am Sonntag.", en: "He even works on Sunday." }, drill: { jp: "Das Kind liest sogar die Zeitung", en: "The child even reads the newspaper" }, accept: ["even"], hint: "Goes directly before the surprising word. Do not confuse it with u29's als or with auch — sogar always signals that this is the extreme case." },
      ],
    },
    {
      id: "de-u36l3",
      unit: 36,
      lesson: 3,
      title: "Ordnen und betonen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Put an argument in order and point at the part that matters most.",
      items: [
        { id: "de-u36l3-endlich", type: "vocab", front: "endlich", reading: "endlich", meaning: "at last — after a wait", example: { jp: "Endlich kommt der Zug, obwohl es sehr spät ist.", en: "At last the train is coming, although it is very late." }, drill: { jp: "Endlich kommt der Zug", en: "At last the train is coming" }, accept: ["at last", "finally", "eventually"], hint: "Carries relief that schließlich does not: schließlich just ends a sequence, endlich says you had been waiting. From das Ende." },
        { id: "de-u36l3-schliesslich", type: "vocab", front: "schließlich", reading: "schliesslich", meaning: "finally — the last step of a sequence", example: { jp: "Schließlich kommt der Zug doch noch.", en: "Finally the train comes after all." }, drill: { jp: "Schließlich kommt der Zug doch", en: "Finally the train comes after all" }, accept: ["finally", "in the end", "after all", "eventually"], hint: "Closes what zuerst opened. It has a second use meaning after all, giving a reason: Er ist müde, schließlich hat er gearbeitet." },
        { id: "de-u36l3-voralem", type: "vocab", front: "vor allem", reading: "vorallem", meaning: "above all", example: { jp: "Vor allem brauchen wir viel Zeit.", en: "Above all we need a lot of time." }, drill: { jp: "Vor allem brauchen wir Zeit", en: "Above all we need time" }, accept: ["above all", "especially", "most of all", "particularly"], hint: "Two words, built on vor (u13). It marks the most important item on a list you have just given." },
        { id: "de-u36l3-zumbeispiel", type: "vocab", front: "zum Beispiel", reading: "zumbeispiel", meaning: "for example", example: { jp: "Wir lernen Sprachen, zum Beispiel Deutsch.", en: "We learn languages, for example German." }, drill: { jp: "Wir lernen zum Beispiel Deutsch", en: "We learn German for example" }, accept: ["for example", "for instance", "such as", "e.g."], hint: "Written z. B. and said tsum BY-shpeel. zum is zu plus dem — the dative contraction from u14." },
        { id: "de-u36l3-erstens", type: "vocab", front: "erstens", reading: "erstens", meaning: "firstly — numbering a point in an argument", example: { jp: "Erstens ist das Buch zu teuer und zu lang.", en: "Firstly the book is too expensive and too long." }, drill: { jp: "Erstens ist das Buch zu teuer", en: "Firstly the book is too expensive" }, accept: ["firstly", "first of all", "for one thing", "in the first place"], hint: "For listing reasons, not events — zuerst (u21) does time order; erstens numbers the points in an argument. It runs erstens, zweitens, drittens." },
        { id: "de-u36l3-besonders", type: "vocab", front: "besonders", reading: "besonders", meaning: "especially", example: { jp: "Das Buch ist gut, besonders für Kinder.", en: "The book is good, especially for children." }, drill: { jp: "Das Buch ist besonders gut", en: "The book is especially good" }, accept: ["especially", "particularly", "specially"], hint: "Sharpens vor allem two cards up: vor allem picks the top of a list, besonders simply raises one item. Nicht besonders means not particularly — a very German understatement." },
      ],
    },
    {
      id: "de-u36l4",
      unit: 36,
      lesson: 4,
      title: "Gegenüberstellen und Relativsätze",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Weigh two sides against each other, and attach a clause saying whose something is.",
      items: [
        { id: "de-u36l4-einerseits", type: "vocab", front: "einerseits", reading: "einerseits", meaning: "on the one hand", example: { jp: "Einerseits ist das Haus schön, andererseits ist es teuer.", en: "On the one hand the house is beautiful, on the other it is expensive." }, drill: { jp: "Einerseits ist das Haus schön", en: "On the one hand the house is beautiful" }, accept: ["on the one hand", "for one thing"], hint: "Built on die Seite (u33) — one-side-ly. It sets up the next card and a German will expect it to." },
        { id: "de-u36l4-andererseits", type: "vocab", front: "andererseits", reading: "andererseits", meaning: "on the other hand", example: { jp: "Die Wohnung ist klein, andererseits ist sie hell.", en: "The flat is small; on the other hand it is bright." }, drill: { jp: "Andererseits ist es sehr teuer", en: "On the other hand it is very expensive" }, accept: ["on the other hand", "then again"], hint: "The answering half of einerseits. Four syllables and awkward to say: AN-de-rer-seits." },
        { id: "de-u36l4-anstatt", type: "vocab", front: "anstatt", reading: "anstatt", meaning: "instead of", example: { jp: "Wir gehen anstatt zu fahren.", en: "We walk instead of driving." }, drill: { jp: "Wir lesen anstatt zu schlafen", en: "We read instead of sleeping" }, accept: ["instead of", "rather than", "in place of"], hint: "With an infinitive it takes zu: anstatt zu fahren. The shorter statt means the same and is commoner in speech." },
        { id: "de-u36l4-immerhin", type: "vocab", front: "immerhin", reading: "immerhin", meaning: "at least — salvaging one good point", example: { jp: "Es regnet, immerhin ist es warm.", en: "It is raining; at least it is warm." }, drill: { jp: "Immerhin ist das Wetter warm", en: "At least the weather is warm" }, accept: ["at least", "after all", "still", "even so"], hint: "Finds the consolation in a bad situation. It is not the counting at least — that is mindestens, which u37 teaches." },
        { id: "de-u36l4-dessen", type: "vocab", front: "dessen", reading: "dessen", meaning: "whose — masculine and neuter", example: { jp: "Der Mann, dessen Buch hier liegt, kommt später.", en: "The man whose book is lying here is coming later." }, drill: { jp: "Der Mann dessen Buch hier liegt", en: "The man whose book is lying here" }, accept: ["whose", "of which", "of whom"], hint: "The genitive relative pronoun for der- and das-words. The noun after it takes NO article: dessen Buch, never dessen das Buch." },
        { id: "de-u36l4-deren", type: "vocab", front: "deren", reading: "deren", meaning: "whose — feminine and plural", example: { jp: "Die Frau, deren Kind hier spielt, wohnt neben uns.", en: "The woman whose child is playing here lives next to us." }, drill: { jp: "Die Frau deren Kind hier spielt", en: "The woman whose child is playing here" }, accept: ["whose", "of which", "of whom"], hint: "The feminine and plural partner of dessen. Choose by the noun BEFORE it — die Frau, deren … — not by the thing owned." },
      ],
    },
  ],
};
