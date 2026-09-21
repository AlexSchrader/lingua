// DE Unit 106 — Das Irreale ("The unreal") — B2 (slot: grammar-9, conditional nuance and counterfactuals)
// THEME CONTRACT (block 2, u101–u113): grammar has no item type, so the patterns are
// taught as function-word / phrase vocab whose examples carry the structure.
// u106 owns the UNREAL: Konjunktiv II in the past (l1), irreal comparison with als ob
// (l2), conditions with fine print (l3), and hedged alternatives (l4).
// u37/u70 already teach the simple forms (hätte, wäre, dürfte, müsste, angenommen,
// vorausgesetzt, andernfalls, ansonsten) — this unit builds the COMPOUND forms on top of
// them and never re-teaches a bare one.
// ⚠ Fold hazard, logged by the German B1 lead: normalizeReading folds ä→a, so hätte and
// hatte are one string to the grader. The Konjunktiv fronts here are multi-word chunks,
// which is why none of them collides with a taught single word — keep it that way.
// ⚠ A German-specific authoring rule this unit had to learn: a drill must contain its
// front VERBATIM, but the Satzklammer splits hätte … gehabt around the object, so a split
// verb cluster can never be a front. Only clusters that stay contiguous (hätte fast,
// wäre beinahe, hätte sein können) work as cards.
export const DE_UNIT106 = {
  id: "de-u106",
  lang: "de",
  title: "Das Irreale",
  order: 106,
  stage: "b2",
  lessons: [
    {
      id: "de-u106l1",
      unit: 106,
      lesson: 1,
      title: "Was hätte sein können",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about a past that did not happen: what nearly happened, what could have been, and how it looks after the event.",
      items: [
        { id: "de-u106l1-hattefast", type: "vocab", front: "hätte fast", reading: "hattefast", meaning: "almost would have (nearly did)", example: { jp: "Ich hätte fast vergessen, dass wir uns am Freitag treffen.", en: "I almost forgot that we are meeting on Friday." }, drill: { jp: "Ich hätte fast den Zug verpasst", en: "I almost missed the train" }, accept: ["almost would have", "nearly", "almost did"], hint: "German puts the near-miss in the unreal form: hätte fast + participle. Word order keeps hätte fast together, unlike hätte … gehabt." },
        { id: "de-u106l1-warebeinahe", type: "vocab", front: "wäre beinahe", reading: "warebeinahe", meaning: "would nearly have (of a change or motion)", example: { jp: "Auf dem nassen Weg wäre sie beinahe gefallen.", en: "On the wet path she nearly fell." }, drill: { jp: "Sie wäre beinahe zu spät gekommen", en: "She nearly came too late" }, accept: ["would nearly have", "nearly", "almost"], hint: "wäre with verbs of motion and change, hätte with the rest — the same split as the ordinary perfect." },
        { id: "de-u106l1-hatteseinkonnen", type: "vocab", front: "hätte sein können", reading: "hatteseinkonnen", meaning: "could have been", example: { jp: "Das hätte ein guter Vertrag sein können, wenn beide Seiten ehrlich gewesen wären.", en: "That could have been a good contract if both sides had been honest." }, drill: { jp: "Genau das hätte sein können", en: "That is exactly what could have been" }, accept: ["could have been"], hint: "Two infinitives at the end instead of a participle — the Ersatzinfinitiv: nicht *gekonnt*, sondern können." },
        { id: "de-u106l1-nachtraglich", type: "vocab", front: "nachträglich", reading: "nachtraglich", meaning: "after the event (belatedly)", example: { jp: "Nachträglich hat die Firma zugegeben, dass die Zahlen falsch waren.", en: "After the event the company admitted that the figures were wrong." }, drill: { jp: "Nachträglich wurde alles noch einmal geprüft", en: "Afterwards everything was checked again" }, accept: ["belatedly", "after the event", "retrospectively", "afterwards"], hint: "Also the standard word on a late birthday card: nachträglich alles Gute!" },
        { id: "de-u106l1-umeinhaar", type: "vocab", front: "um ein Haar", reading: "umeinhaar", meaning: "by a hair's breadth (very nearly)", example: { jp: "Um ein Haar hätte ich den Termin vergessen.", en: "I very nearly forgot the appointment." }, drill: { jp: "Um ein Haar wäre alles schiefgegangen", en: "Everything very nearly went wrong" }, accept: ["by a hair's breadth", "very nearly", "almost", "by a whisker"], hint: "Always with Konjunktiv II: um ein Haar wäre/hätte … The near-miss is why the unreal form is needed." },
        { id: "de-u106l1-imnachhinein", type: "vocab", front: "im Nachhinein", reading: "imnachhinein", meaning: "in hindsight", example: { jp: "Im Nachhinein war die Entscheidung richtig, damals fühlte sie sich falsch an.", en: "In hindsight the decision was right; at the time it felt wrong." }, drill: { jp: "Im Nachhinein war die Entscheidung richtig", en: "In hindsight the decision was right" }, accept: ["in hindsight", "in retrospect", "looking back", "afterwards"], hint: "The register-neutral one; rückblickend is its written twin. Im Nachhinein weiß man alles besser." },
      ],
    },
    {
      id: "de-u106l2",
      unit: 106,
      lesson: 2,
      title: "Als ob und als wäre",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Compare something with a situation that is not real — it looks as if, he acts as though — and mark that a claim is only apparent.",
      items: [
        { id: "de-u106l2-alsob", type: "vocab", front: "als ob", reading: "alsob", meaning: "as if (introducing an unreal comparison)", example: { jp: "Er redete, als ob er dabei gewesen wäre.", en: "He talked as if he had been there." }, drill: { jp: "Er redete als ob nichts wäre", en: "He talked as if nothing were wrong" }, accept: ["as if", "as though"], hint: "Sends the verb to the end and takes Konjunktiv II: als ob er es wüsste. The comparison is explicitly not true." },
        { id: "de-u106l2-alsware", type: "vocab", front: "als wäre", reading: "alsware", meaning: "as if it were (als without ob)", example: { jp: "Sie ging durch das Zimmer, als wäre sie hier zu Hause.", en: "She walked through the room as if she were at home here." }, drill: { jp: "Sie tut als wäre alles normal", en: "She acts as if everything were normal" }, accept: ["as if it were", "as though it were", "as if"], hint: "Drop the ob and the verb comes straight after als: als wäre sie …, als hätte er … Slightly more elegant than als ob." },
        { id: "de-u106l2-sotunalsob", type: "vocab", front: "so tun als ob", reading: "sotunalsob", meaning: "to pretend (act as if)", example: { jp: "Er tut so, als ob ihn das Ergebnis nicht interessieren würde.", en: "He pretends the result does not interest him." }, drill: { jp: "Kinder können gut so tun als ob", en: "Children are good at pretending" }, accept: ["to pretend", "to act as if", "to make out"], hint: "The chunk Germans actually say: tun + so + als ob. Alone, tu nicht so! means stop pretending." },
        { id: "de-u106l2-scheinbar", type: "vocab", front: "scheinbar", reading: "scheinbar", meaning: "seemingly (but not really)", example: { jp: "Der Streit war nur scheinbar beendet, zwei Wochen später ging es weiter.", en: "The argument was only seemingly over; two weeks later it continued." }, drill: { jp: "Der Streit war nur scheinbar beendet", en: "The argument was only seemingly over" }, accept: ["seemingly", "apparently", "ostensibly", "only in appearance"], hint: "Careful: strictly, scheinbar means it looks that way and is NOT, while anscheinend means it probably IS. Everyday speech blurs this; writing does not." },
        { id: "de-u106l2-vermeintlich", type: "vocab", front: "vermeintlich", reading: "vermeintlich", meaning: "supposed (wrongly believed to be)", example: { jp: "Der vermeintliche Fehler war gar keiner, die Zahlen waren von einem anderen Jahr.", en: "The supposed error was not one at all; the figures were from a different year." }, drill: { jp: "Der vermeintlich sichere Weg war gesperrt", en: "The supposedly safe route was closed" }, accept: ["supposed", "putative", "alleged", "so-called"], hint: "Marks that the speaker doubts it: der vermeintliche Täter. Angeblich (u54) puts the claim on someone else instead." },
        { id: "de-u106l2-ansich", type: "vocab", front: "an sich", reading: "ansich", meaning: "in itself (strictly speaking)", example: { jp: "An sich ist der Plan gut, nur bezahlen kann ihn niemand.", en: "In itself the plan is good; it is just that nobody can pay for it." }, drill: { jp: "An sich ist der Plan gut", en: "In itself the plan is good" }, accept: ["in itself", "strictly speaking", "as such", "in principle"], hint: "Concedes the principle before the objection — the German half of yes, but. Eigentlich is its softer cousin." },
      ],
    },
    {
      id: "de-u106l3",
      unit: 106,
      lesson: 3,
      title: "Bedingungen mit Feinschliff",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "State a condition precisely: unless, provided that, without something happening, instead of it happening — and the wish that it had been otherwise.",
      items: [
        { id: "de-u106l3-esseidenn", type: "vocab", front: "es sei denn", reading: "esseidenn", meaning: "unless (except in the case that)", example: { jp: "Wir fahren am Samstag los, es sei denn, das Wetter wird richtig schlecht.", en: "We set off on Saturday, unless the weather gets really bad." }, drill: { jp: "Wir fahren los es sei denn es regnet", en: "We set off unless it rains" }, accept: ["unless", "except if", "save that"], hint: "A fossil subjunctive I — sei, not ist. Always after the main clause, with a comma: …, es sei denn, …" },
        { id: "de-u106l3-sofern", type: "vocab", front: "sofern", reading: "sofern", meaning: "provided that (as long as)", example: { jp: "Sofern die Kasse zustimmt, beginnt die Behandlung noch im Mai.", en: "Provided that the insurer agrees, the treatment starts as early as May." }, drill: { jp: "Sofern die Kasse zustimmt beginnen wir", en: "Provided the insurer agrees we begin" }, accept: ["provided that", "as long as", "if", "assuming that"], hint: "Written register; in speech Germans say wenn. Verb to the end, like every subordinating conjunction." },
        { id: "de-u106l3-ohnedass", type: "vocab", front: "ohne dass", reading: "ohnedass", meaning: "without (something happening)", example: { jp: "Die Firma hat die Vorgaben geändert, ohne dass jemand gefragt wurde.", en: "The company changed the requirements without anybody being asked." }, drill: { jp: "Er ging ohne dass jemand etwas merkte", en: "He left without anyone noticing" }, accept: ["without", "without it happening", "without the fact that"], hint: "Use ohne dass when the two clauses have different subjects; with the same subject German prefers ohne … zu + infinitive." },
        { id: "de-u106l3-stattdass", type: "vocab", front: "statt dass", reading: "stattdass", meaning: "instead of (something happening)", example: { jp: "Statt dass die Stadt neue Regeln schreibt, könnte sie die alten überwachen.", en: "Instead of the city writing new rules, it could monitor the old ones." }, drill: { jp: "Statt dass alle reden hört niemand zu", en: "Instead of everyone talking nobody listens" }, accept: ["instead of", "rather than", "in place of"], hint: "Same rule as ohne dass: different subjects take statt dass, the same subject takes statt … zu." },
        { id: "de-u106l3-gesetztdenfall", type: "vocab", front: "gesetzt den Fall", reading: "gesetztdenfall", meaning: "supposing that (let us say)", example: { jp: "Gesetzt den Fall, der Vertrag kommt nicht, was machen wir dann?", en: "Supposing the contract does not come, what do we do then?" }, drill: { jp: "Gesetzt den Fall wir bekommen das Geld", en: "Supposing we get the money" }, accept: ["supposing that", "supposing", "assuming that", "let us say"], hint: "Sets up a thought experiment. Angenommen (u70) is the everyday equivalent; this one belongs in a discussion or a paper." },
        { id: "de-u106l3-wennnur", type: "vocab", front: "wenn nur", reading: "wennnur", meaning: "if only (expressing a wish)", example: { jp: "Wenn ich nur früher gefragt hätte, wäre die Sache einfacher gewesen.", en: "If only I had asked earlier, the matter would have been easier." }, drill: { jp: "Wenn nur alles etwas einfacher wäre", en: "If only everything were a little simpler" }, accept: ["if only", "if only it were"], hint: "The wish without a main clause: Wenn ich nur wüsste! Adding doch makes it more plaintive: wenn ich das doch nur wüsste." },
      ],
    },
    {
      id: "de-u106l4",
      unit: 106,
      lesson: 4,
      title: "Fälle und Alternativen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Hedge what happens next: under some circumstances, in case of doubt, at worst — or rule it out completely.",
      items: [
        { id: "de-u106l4-unterumstanden", type: "vocab", front: "unter Umständen", reading: "unterumstanden", meaning: "possibly (under certain circumstances)", example: { jp: "Unter Umständen zahlt die Kasse auch den zweiten Termin.", en: "Under certain circumstances the insurer also pays for the second appointment." }, drill: { jp: "Unter Umständen zahlt die Kasse alles", en: "Under certain circumstances the insurer pays everything" }, accept: ["possibly", "under certain circumstances", "in some cases", "it may be that"], hint: "Often written u. U. in official letters. Careful — it is a hedge, not a promise." },
        { id: "de-u106l4-imzweifelsfall", type: "vocab", front: "im Zweifelsfall", reading: "imzweifelsfall", meaning: "if in doubt", example: { jp: "Im Zweifelsfall fragen Sie lieber noch einmal beim Amt nach.", en: "If in doubt, better ask at the office once more." }, drill: { jp: "Im Zweifelsfall fragen Sie bitte nach", en: "If in doubt please ask" }, accept: ["if in doubt", "in case of doubt", "when in doubt"], hint: "Der Zweifel (u54) is the doubt; im Zweifelsfall is the standing advice built on it." },
        { id: "de-u106l4-schlimmstenfalls", type: "vocab", front: "schlimmstenfalls", reading: "schlimmstenfalls", meaning: "at worst (in the worst case)", example: { jp: "Schlimmstenfalls dauert es noch ein Jahr, aber verloren ist nichts.", en: "At worst it takes another year, but nothing is lost." }, drill: { jp: "Schlimmstenfalls dauert es ein Jahr", en: "At worst it takes a year" }, accept: ["at worst", "in the worst case", "if the worst comes to the worst"], hint: "Same family as notfalls (u60) and keinesfalls: -falls makes an adverb of case. Its opposite is bestenfalls." },
        { id: "de-u106l4-keinesfalls", type: "vocab", front: "keinesfalls", reading: "keinesfalls", meaning: "under no circumstances", example: { jp: "Diese Zahlen darf man keinesfalls einzeln lesen.", en: "These figures must under no circumstances be read on their own." }, drill: { jp: "Man darf das keinesfalls allein entscheiden", en: "One must under no circumstances decide that alone" }, accept: ["under no circumstances", "by no means", "definitely not", "on no account"], hint: "Stronger and more formal than auf keinen Fall, and it happily starts a sentence: Keinesfalls ist damit gesagt, dass …" },
        { id: "de-u106l4-aufkeinenfall", type: "vocab", front: "auf keinen Fall", reading: "aufkeinenfall", meaning: "no way (absolutely not, spoken)", example: { jp: "Auf keinen Fall unterschreibe ich das heute.", en: "No way am I signing that today." }, drill: { jp: "Auf keinen Fall unterschreibe ich das", en: "No way am I signing that" }, accept: ["no way", "absolutely not", "on no account", "definitely not"], hint: "The spoken twin of keinesfalls. Its positive partner is auf jeden Fall — definitely, by all means." },
        { id: "de-u106l4-widrigenfalls", type: "vocab", front: "widrigenfalls", reading: "widrigenfalls", meaning: "failing which (official warning register)", example: { jp: "Bitte zahlen Sie bis zum 30. Juni, widrigenfalls geht die Sache vor Gericht.", en: "Please pay by 30 June, failing which the matter goes to court." }, drill: { jp: "Bitte zahlen Sie widrigenfalls folgt eine Klage", en: "Please pay failing which a lawsuit follows" }, accept: ["failing which", "otherwise", "in default of which"], hint: "Pure Amtsdeutsch — you will meet it in a letter and never in a conversation. Andernfalls (u70) is the neutral word for the same thing." },
      ],
    },
  ],
};
