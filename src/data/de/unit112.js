// DE Unit 112 — Feste Verbindungen ("Fixed expressions") — B2 (slot: coverage-b2-2)
// SLOT RETITLED per RUNBOOK §4. This coverage unit takes the NOUN+VERB pairs that carry
// so much written and spoken German — considering something (l1), consequence and what
// is at stake (l2), taking a position (l3), and what a thing is worth doing (l4).
// These are Funktionsverbgefüge: the noun carries the meaning, the verb only the
// grammar, and neither half can be swapped for a synonym — which is exactly why they
// have to be learned whole.
// u107 already teaches zur Verfügung stellen, in Anspruch nehmen and Bezug nehmen; they
// are the same construction and are used here in examples, never re-taught.
// ⚠ Drill rule: an infinitive front needs a modal in its drill, or the Satzklammer
// splits the pair apart (u106/u107 headers).
export const DE_UNIT112 = {
  id: "de-u112",
  lang: "de",
  title: "Feste Verbindungen",
  order: 112,
  stage: "b2",
  lessons: [
    {
      id: "de-u112l1",
      unit: 112,
      lesson: 1,
      title: "Etwas in Betracht ziehen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how an option is being handled: considered, envisaged, questioned, ignored, raised — or dropped.",
      items: [
        { id: "de-u112l1-inbetrachtziehen", type: "vocab", front: "in Betracht ziehen", reading: "inbetrachtziehen", meaning: "to consider (take into consideration)", example: { jp: "Das Gremium will auch eine Lösung ohne neues Haus in Betracht ziehen.", en: "The body also wants to consider a solution without a new house." }, drill: { jp: "Wir sollten die Folgen in Betracht ziehen", en: "We should take the consequences into consideration" }, accept: ["to consider", "to take into consideration", "to contemplate", "to weigh"], hint: "Der Betracht survives only here and in außer Betracht bleiben. Never *in Betracht nehmen*." },
        { id: "de-u112l1-insaugefassen", type: "vocab", front: "ins Auge fassen", reading: "insaugefassen", meaning: "to envisage (set one's sights on)", example: { jp: "Die Stadt hat für den Umbau das Jahr 2030 ins Auge gefasst.", en: "The city has set its sights on the year 2030 for the rebuilding." }, drill: { jp: "Wir können einen früheren Termin ins Auge fassen", en: "We can envisage an earlier date" }, accept: ["to envisage", "to set one's sights on", "to have in mind", "to contemplate"], hint: "More committed than in Betracht ziehen: you have already picked the option out." },
        { id: "de-u112l1-infragestellen", type: "vocab", front: "in Frage stellen", reading: "infragestellen", meaning: "to call into question", example: { jp: "Zwei Sätze im Bericht stellen die ganze Rechnung in Frage.", en: "Two sentences in the report call the whole calculation into question." }, drill: { jp: "Niemand will die Richtlinie in Frage stellen", en: "Nobody wants to call the guideline into question" }, accept: ["to call into question", "to question", "to challenge", "to cast doubt on"], hint: "Also written infrage stellen since the spelling reform — both are correct today." },
        { id: "de-u112l1-ausserachtlassen", type: "vocab", front: "außer Acht lassen", reading: "ausserachtlassen", meaning: "to disregard (leave out of account)", example: { jp: "Man darf die Kosten für die Pflege nicht außer Acht lassen.", en: "One must not disregard the costs of care." }, drill: { jp: "Den Preis darf man nicht außer Acht lassen", en: "One must not disregard the price" }, accept: ["to disregard", "to leave out of account", "to ignore", "to overlook"], hint: "Die Acht here is attention, the same word as in Achtung. Almost always negated — nicht außer Acht lassen." },
        { id: "de-u112l1-zursprachebringen", type: "vocab", front: "zur Sprache bringen", reading: "zursprachebringen", meaning: "to raise (bring up as a topic)", example: { jp: "Sie hat das Thema in der Sitzung zur Sprache gebracht, obwohl es niemand hören wollte.", en: "She raised the topic in the meeting, although nobody wanted to hear it." }, drill: { jp: "Jemand muss das Problem zur Sprache bringen", en: "Somebody has to raise the problem" }, accept: ["to raise", "to bring up", "to broach", "to mention"], hint: "Its passive twin is zur Sprache kommen — to come up. Ansprechen is the everyday one-word version." },
        { id: "de-u112l1-abstandnehmen", type: "vocab", front: "Abstand nehmen", reading: "abstandnehmen", meaning: "to refrain from (drop a plan)", example: { jp: "Die Firma hat von der Klage Abstand genommen, nachdem die Kasse gezahlt hatte.", en: "The company refrained from the lawsuit after the insurer paid." }, drill: { jp: "Wir sollten von diesem Plan Abstand nehmen", en: "We should refrain from this plan" }, accept: ["to refrain from", "to drop", "to abandon", "to desist from"], hint: "Always von + dative. Physical Abstand halten — keeping your distance — is the literal sibling." },
      ],
    },
    {
      id: "de-u112l2",
      unit: 112,
      lesson: 2,
      title: "Folgen und Gewicht",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say what something causes and how much it counts: it results in, it matters, it costs seriously, it is at stake, it is in force.",
      items: [
        { id: "de-u112l2-zurfolgehaben", type: "vocab", front: "zur Folge haben", reading: "zurfolgehaben", meaning: "to result in (have as a consequence)", example: { jp: "Der Erlass hatte zur Folge, dass zwei Ausschüsse gar nicht mehr getagt haben.", en: "The decree resulted in two committees not meeting at all any more." }, drill: { jp: "Ein Fehler kann große Kosten zur Folge haben", en: "An error can result in large costs" }, accept: ["to result in", "to lead to", "to have as a consequence", "to entail"], hint: "The written twin of führen zu. Die Folge (u52) is the consequence itself." },
        { id: "de-u112l2-einerollespielen", type: "vocab", front: "eine Rolle spielen", reading: "einerollespielen", meaning: "to matter (be a factor)", example: { jp: "Das Alter spielt bei dieser Behandlung kaum eine Rolle.", en: "Age hardly matters for this treatment." }, drill: { jp: "Die Kosten werden dabei eine Rolle spielen", en: "The costs will matter in this" }, accept: ["to matter", "to play a part", "to be a factor", "to count"], hint: "The commonest way German says something matters. Negated it becomes dismissive: das spielt keine Rolle." },
        { id: "de-u112l2-zubucheschlagen", type: "vocab", front: "zu Buche schlagen", reading: "zubucheschlagen", meaning: "to count for a lot (weigh on the budget)", example: { jp: "Die Zuzahlungen schlagen bei einer langen Behandlung deutlich zu Buche.", en: "The co-payments weigh noticeably on the budget in a long treatment." }, drill: { jp: "Solche Kosten können stark zu Buche schlagen", en: "Such costs can weigh heavily on the budget" }, accept: ["to count for a lot", "to weigh heavily", "to make a dent", "to add up"], hint: "From the accountant's book. Only about money and effort, and always about an amount big enough to notice." },
        { id: "de-u112l2-aufdemspielstehen", type: "vocab", front: "auf dem Spiel stehen", reading: "aufdemspielstehen", meaning: "to be at stake", example: { jp: "Bei der Anhörung stand die Genehmigung für die ganze Anlage auf dem Spiel.", en: "At the hearing the permit for the whole plant was at stake." }, drill: { jp: "Hier kann viel auf dem Spiel stehen", en: "A lot can be at stake here" }, accept: ["to be at stake", "to be on the line", "to hang in the balance"], hint: "From gambling: the stake is on the table. The active version is aufs Spiel setzen — to risk something." },
        { id: "de-u112l2-unterdruckgeraten", type: "vocab", front: "unter Druck geraten", reading: "unterdruckgeraten", meaning: "to come under pressure", example: { jp: "Nach der Pressemitteilung ist der Ausschuss schnell unter Druck geraten.", en: "After the press release the committee quickly came under pressure." }, drill: { jp: "Die Behörde kann leicht unter Druck geraten", en: "The authority can easily come under pressure" }, accept: ["to come under pressure", "to be put under pressure", "to be squeezed"], hint: "geraten means to end up somewhere without meaning to — in Schwierigkeiten geraten, in Streit geraten." },
        { id: "de-u112l2-inkraftsein", type: "vocab", front: "in Kraft sein", reading: "inkraftsein", meaning: "to be in force", example: { jp: "Die alte Richtlinie ist noch in Kraft, bis die neue bekannt gemacht wird.", en: "The old guideline is still in force until the new one is announced." }, drill: { jp: "Die Regel wird ab Januar in Kraft sein", en: "The rule will be in force from January" }, accept: ["to be in force", "to be in effect", "to apply", "to be valid"], hint: "The state that follows in Kraft treten (u107). Its end is außer Kraft treten." },
      ],
    },
    {
      id: "de-u112l3",
      unit: 112,
      lesson: 3,
      title: "Haltung zeigen",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Take a public position: state where you stand, draw the conclusion, insist on something, accept a downside, and be held to account.",
      items: [
        { id: "de-u112l3-stellungbeziehen", type: "vocab", front: "Stellung beziehen", reading: "stellungbeziehen", meaning: "to take a public position", example: { jp: "Das Institut wollte zu den Zahlen nicht öffentlich Stellung beziehen.", en: "The institute did not want to take a public position on the figures." }, drill: { jp: "Irgendwann muss man Stellung beziehen", en: "At some point one has to take a position" }, accept: ["to take a position", "to take a stand", "to comment", "to declare oneself"], hint: "The noun of it is die Stellungnahme (u110). Stellung nehmen zu … is the slightly softer variant." },
        { id: "de-u112l3-diekonsequenzenziehen", type: "vocab", front: "die Konsequenzen ziehen", reading: "diekonsequenzenziehen", meaning: "to draw the consequences (act on a failure)", example: { jp: "Nach dem zweiten Bericht hat der Vorsitzende die Konsequenzen gezogen und ist zurückgetreten.", en: "After the second report the chair drew the consequences and resigned." }, drill: { jp: "Jemand muss endlich die Konsequenzen ziehen", en: "Somebody finally has to draw the consequences" }, accept: ["to draw the consequences", "to act on it", "to take responsibility", "to resign"], hint: "In German public life this is usually a polite way of saying somebody resigned." },
        { id: "de-u112l3-wertlegen", type: "vocab", front: "Wert legen", reading: "wertlegen", meaning: "to set store by (auf + accusative)", example: { jp: "Der Dozent legt großen Wert auf saubere Quellen.", en: "The lecturer sets great store by clean sources." }, drill: { jp: "Darauf müssen wir großen Wert legen", en: "We have to set great store by that" }, accept: ["to set store by", "to attach importance to", "to insist on", "to value"], hint: "Always Wert legen auf + accusative, and the auf-phrase comes first: auf Genauigkeit Wert legen. The intensity sits in the adjective — großen, besonderen, keinen Wert." },
        { id: "de-u112l3-inkaufnehmen", type: "vocab", front: "in Kauf nehmen", reading: "inkaufnehmen", meaning: "to accept (put up with a downside)", example: { jp: "Für eine kürzere Wartezeit nimmt sie einen weiten Weg in Kauf.", en: "For a shorter waiting time she puts up with a long journey." }, drill: { jp: "Diesen Nachteil muss man in Kauf nehmen", en: "One has to accept this drawback" }, accept: ["to accept", "to put up with", "to take on board", "to tolerate"], hint: "Always about something unwelcome that comes bundled with what you want — the price of the bargain." },
        { id: "de-u112l3-rechenschaftablegen", type: "vocab", front: "Rechenschaft ablegen", reading: "rechenschaftablegen", meaning: "to account for oneself (answer for what one did)", example: { jp: "Wer öffentliches Geld ausgibt, muss darüber Rechenschaft ablegen.", en: "Whoever spends public money has to account for it." }, drill: { jp: "Die Behörde muss darüber Rechenschaft ablegen", en: "The authority has to account for it" }, accept: ["to account for oneself", "to render account", "to answer for", "to be accountable"], hint: "Rechnung + Schaft: the reckoning you owe somebody. Rechenschaft schulden is the passive side of it." },
        { id: "de-u112l3-zurverantwortungziehen", type: "vocab", front: "zur Verantwortung ziehen", reading: "zurverantwortungziehen", meaning: "to hold to account (call someone to answer)", example: { jp: "Bisher wurde niemand für die falschen Zahlen zur Verantwortung gezogen.", en: "So far nobody has been held to account for the wrong figures." }, drill: { jp: "Man kann ihn dafür zur Verantwortung ziehen", en: "One can hold him to account for it" }, accept: ["to hold to account", "to call to account", "to hold responsible", "to bring to book"], hint: "Someone else does this to you, unlike Rechenschaft ablegen, which you do yourself." },
      ],
    },
    {
      id: "de-u112l4",
      unit: 112,
      lesson: 4,
      title: "Im Blick behalten",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say where attention is pointed and what is being prepared: what is in the foreground, what is up for debate, who takes care of it, and what precautions are taken.",
      items: [
        { id: "de-u112l4-imvordergrundstehen", type: "vocab", front: "im Vordergrund stehen", reading: "imvordergrundstehen", meaning: "to be in the foreground (get the attention)", example: { jp: "In der Debatte stand das Geld im Vordergrund, die Versorgung kam kaum vor.", en: "In the debate the money was in the foreground; care provision hardly came up." }, drill: { jp: "Bei uns soll der Vorteil im Vordergrund stehen", en: "For us the advantage should be in the foreground" }, accept: ["to be in the foreground", "to be the main focus", "to take centre stage", "to come first"], hint: "From painting: der Vordergrund und der Hintergrund. Something else is always being pushed back." },
        { id: "de-u112l4-immittelpunktstehen", type: "vocab", front: "im Mittelpunkt stehen", reading: "immittelpunktstehen", meaning: "to be at the centre (of attention)", example: { jp: "Bei der Anhörung stand eine einzige Frage im Mittelpunkt.", en: "At the hearing a single question was at the centre." }, drill: { jp: "Der Patient sollte im Mittelpunkt stehen", en: "The patient should be at the centre" }, accept: ["to be at the centre", "to be central", "to be the focus", "to take centre stage"], hint: "Der Mittelpunkt is the geometric centre. Of a person it can be a criticism: er steht gern im Mittelpunkt." },
        { id: "de-u112l4-zurdebattestehen", type: "vocab", front: "zur Debatte stehen", reading: "zurdebattestehen", meaning: "to be up for debate", example: { jp: "Der Ausstieg selbst steht nicht zur Debatte, nur sein Zeitplan.", en: "The phase-out itself is not up for debate, only its timetable." }, drill: { jp: "Der Termin kann immer zur Debatte stehen", en: "The date can always be up for debate" }, accept: ["to be up for debate", "to be at issue", "to be on the table", "to be in question"], hint: "Its negative is the useful one: das steht nicht zur Debatte closes a discussion politely and firmly." },
        { id: "de-u112l4-sorgetragen", type: "vocab", front: "Sorge tragen", reading: "sorgetragen", meaning: "to see to it (take responsibility for)", example: { jp: "Die Behörde trägt dafür Sorge, dass jeder Bescheid zugestellt wird.", en: "The authority sees to it that every decision is delivered." }, drill: { jp: "Die Firma muss dafür Sorge tragen", en: "The firm has to see to it" }, accept: ["to see to it", "to ensure", "to take care of", "to be responsible for"], hint: "Formal and always with dafür: dafür Sorge tragen, dass … The everyday version is dafür sorgen." },
        { id: "de-u112l4-vorkehrungentreffen", type: "vocab", front: "Vorkehrungen treffen", reading: "vorkehrungentreffen", meaning: "to take precautions", example: { jp: "Vor dem Winter hat die Klinik Vorkehrungen für die kalten Monate getroffen.", en: "Before winter the clinic took precautions for the cold months." }, drill: { jp: "Die Stadt will rechtzeitig Vorkehrungen treffen", en: "The city wants to take precautions in good time" }, accept: ["to take precautions", "to make arrangements", "to prepare", "to take measures"], hint: "Plural only. Note that German takes Maßnahmen and trifft Vorkehrungen — the verbs are not interchangeable." },
        { id: "de-u112l4-bilanzziehen", type: "vocab", front: "Bilanz ziehen", reading: "bilanzziehen", meaning: "to take stock (sum up a period)", example: { jp: "Nach einem Jahr hat das Institut Bilanz gezogen und den Schwerpunkt geändert.", en: "After a year the institute took stock and changed its focus." }, drill: { jp: "Nach einem Jahr kann man Bilanz ziehen", en: "After a year one can take stock" }, accept: ["to take stock", "to sum up", "to draw a balance", "to review"], hint: "Die Bilanz (u66) is the balance sheet; ziehen makes it an act of reflection rather than accounting." },
      ],
    },
  ],
};
