// DE Unit 101 — Die globale Umweltpolitik ("Global environmental policy") — B2 (slot: environment-global)
// THEME CONTRACT (block 2, u101–u113): this unit owns the POLICY layer only —
// treaties and summits (l1), rules and enforcement (l2), emissions and the energy
// transition (l3), sustainability as a political object (l4). Weather, landscape and
// everyday recycling stay with u26/u34/u65 and appear here only as already-taught
// example vocabulary, never re-taught.
// Conventions: front = real orthography (nouns carry their article), reading = its
// ASCII fold (ä→a, ö→o, ü→u, ß→ss), accept[] on every card, drill = 3–8 tokens with
// the front inside it, examples use only vocab taught at or before u101.
export const DE_UNIT101 = {
  id: "de-u101",
  lang: "de",
  title: "Die globale Umweltpolitik",
  order: 101,
  stage: "b2",
  lessons: [
    {
      id: "de-u101l1",
      unit: 101,
      lesson: 1,
      title: "Gipfel, Abkommen und Protokolle",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how countries commit to environmental action — summits, accords and protocols — and what signing, ratifying or joining one actually binds a state to.",
      items: [
        { id: "de-u101l1-dasgipfeltreffen", type: "vocab", front: "das Gipfeltreffen", reading: "dasgipfeltreffen", meaning: "summit meeting (of heads of state)", example: { jp: "Das Gipfeltreffen in Berlin dauert drei Tage, und am Ende steht meistens ein gemeinsamer Bericht.", en: "The summit meeting in Berlin lasts three days, and at the end there is usually a joint report." }, drill: { jp: "Das Gipfeltreffen dauert drei Tage", en: "The summit meeting lasts three days" }, accept: ["summit", "summit meeting", "summit conference"], hint: "Gipfel is a mountain top; das Gipfeltreffen is the meeting at the top — chancellors and presidents, not officials." },
        { id: "de-u101l1-dasabkommen", type: "vocab", front: "das Abkommen", reading: "dasabkommen", meaning: "accord (agreement between states)", example: { jp: "Das Abkommen gilt für alle Staaten, die es unterzeichnet haben.", en: "The accord applies to all states that have signed it." }, drill: { jp: "Das Abkommen gilt für alle Staaten", en: "The accord applies to all states" }, accept: ["accord", "agreement", "treaty", "international agreement"], hint: "More formal than der Vertrag (u24), which can be your phone contract. Ein Abkommen is signed between states: das Pariser Abkommen." },
        { id: "de-u101l1-dasprotokoll", type: "vocab", front: "das Protokoll", reading: "dasprotokoll", meaning: "protocol (treaty adding detail to an earlier one)", example: { jp: "Ein Protokoll schreibt genauer vor, was ein älteres Abkommen nur allgemein verlangt.", en: "A protocol prescribes more precisely what an older accord only demands in general terms." }, drill: { jp: "Das Protokoll ergänzt das alte Abkommen", en: "The protocol supplements the old accord" }, accept: ["protocol"], hint: "Two senses, both live: the treaty document (das Kyoto-Protokoll) and the written minutes of a meeting." },
        { id: "de-u101l1-ratifizieren", type: "vocab", front: "ratifizieren", reading: "ratifizieren", meaning: "to ratify (confirm a treaty at home)", example: { jp: "Die Regierung hat unterschrieben, aber das Parlament muss das Abkommen noch ratifizieren.", en: "The government has signed, but parliament still has to ratify the accord." }, drill: { jp: "Das Parlament muss den Vertrag ratifizieren", en: "Parliament has to ratify the treaty" }, accept: ["to ratify", "ratify"], hint: "The step after signing: the state's own institutions make the promise binding. Ein nicht ratifiziertes Abkommen verpflichtet niemanden." },
        { id: "de-u101l1-unterzeichnen", type: "vocab", front: "unterzeichnen", reading: "unterzeichnen", meaning: "to sign (formally, in an official act)", example: { jp: "Beide Länder wollen den Vertrag im Juni in Wien unterzeichnen.", en: "Both countries want to sign the treaty in Vienna in June." }, drill: { jp: "Beide Länder unterzeichnen den Vertrag heute", en: "Both countries are signing the treaty today" }, accept: ["to sign", "sign", "to sign formally"], hint: "The formal twin of unterschreiben (u61). You unterschreibst a form at the Amt; states unterzeichnen an Abkommen." },
        { id: "de-u101l1-beitreten", type: "vocab", front: "beitreten", reading: "beitreten", meaning: "to accede to (join an agreement or body)", example: { jp: "Zwei weitere Staaten wollen dem Abkommen im nächsten Jahr beitreten.", en: "Two more states want to accede to the accord next year." }, drill: { jp: "Zwei Staaten wollen dem Abkommen beitreten", en: "Two states want to join the accord" }, accept: ["to accede", "to join", "accede to", "join"], hint: "Takes the dative: einem Abkommen, einer Partei, der EU beitreten. Joining something that already exists, on its terms." },
      ],
    },
    {
      id: "de-u101l2",
      unit: 101,
      lesson: 2,
      title: "Vorgaben, Auflagen und Kontrolle",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about environmental rules and how they are enforced: what is required, which limit applies, who checks it, and what follows a breach.",
      items: [
        { id: "de-u101l2-dievorgabe", type: "vocab", front: "die Vorgabe", reading: "dievorgabe", meaning: "requirement (set from above)", example: { jp: "Die neuen Vorgaben für die Luft sind streng, aber jede Stadt darf selbst entscheiden, wie sie sie erreicht.", en: "The new requirements for air are strict, but each city may decide for itself how to meet them." }, drill: { jp: "Die Vorgabe gilt seit dem Sommer", en: "The requirement has applied since the summer" }, accept: ["requirement", "specification", "target", "guideline"], hint: "Something given in advance by whoever is above you — a ministry, a head office. Die Regel (u32) is general; eine Vorgabe has an author." },
        { id: "de-u101l2-dieauflage", type: "vocab", front: "die Auflage", reading: "dieauflage", meaning: "condition attached to a permit", example: { jp: "Der Betrieb hat die Genehmigung bekommen, aber nur mit strengen Auflagen.", en: "The plant got the permit, but only with strict conditions attached." }, drill: { jp: "Die Auflage steht in der Genehmigung", en: "The condition is stated in the permit" }, accept: ["condition", "stipulation", "proviso", "attached condition"], hint: "The strings attached to a yes: mit Auflagen genehmigen. Not die Bedingung of a deal — an Auflage is imposed, not negotiated." },
        { id: "de-u101l2-beanstanden", type: "vocab", front: "beanstanden", reading: "beanstanden", meaning: "to object to (formally query a fault)", example: { jp: "Die Behörde hat zwei Werte beanstandet, den Rest hat sie ohne Kommentar akzeptiert.", en: "The authority objected to two values and accepted the rest without comment." }, drill: { jp: "Die Behörde will zwei Werte beanstanden", en: "The authority wants to object to two values" }, accept: ["to object to", "to query", "to take issue with", "to complain about"], hint: "The official word for finding fault on paper: etwas zu beanstanden haben. In a shop you reklamierst instead." },
        { id: "de-u101l2-uberwachen", type: "vocab", front: "überwachen", reading: "uberwachen", meaning: "to monitor (keep under official watch)", example: { jp: "Eine Behörde überwacht, ob die Firmen die Grenzwerte wirklich einhalten.", en: "An authority monitors whether the companies really keep to the limit values." }, drill: { jp: "Behörden müssen die großen Betriebe überwachen", en: "Authorities have to monitor the large plants" }, accept: ["to monitor", "monitor", "to supervise", "to keep under surveillance"], hint: "Continuous watching from above — cameras, sensors, an authority. Prüfen is a single check; überwachen never stops." },
        { id: "de-u101l2-diesanktion", type: "vocab", front: "die Sanktion", reading: "diesanktion", meaning: "sanction (penalty for a breach)", example: { jp: "Ohne Sanktionen bleibt ein Verstoß für die Firma billiger als die Regel selbst.", en: "Without sanctions, a breach stays cheaper for the company than the rule itself." }, drill: { jp: "Die Sanktion trifft vor allem Betriebe", en: "The sanction hits plants above all" }, accept: ["sanction", "sanctions", "penalty"], hint: "Institutional, usually plural: Sanktionen gegen einen Staat, gegen einen Betrieb. Die Strafe (u61) is what a court gives a person." },
        { id: "de-u101l2-verscharfen", type: "vocab", front: "verschärfen", reading: "verscharfen", meaning: "to tighten (make a rule stricter)", example: { jp: "Nach dem Bericht hat die Regierung die Vorgaben für den Verkehr deutlich verschärft.", en: "After the report the government tightened the requirements for traffic considerably." }, drill: { jp: "Die Regierung will die Vorgaben verschärfen", en: "The government wants to tighten the requirements" }, accept: ["to tighten", "tighten", "to toughen", "to make stricter"], hint: "From scharf. Rules, controls and conflicts verschärfen sich — the situation gets sharper, not just bigger." },
      ],
    },
    {
      id: "de-u101l3",
      unit: 101,
      lesson: 3,
      title: "Emissionen und Energiewende",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how a country cuts what it emits: what comes out of industry and traffic, what gets phased out, and how much energy is saved.",
      items: [
        { id: "de-u101l3-derrohstoff", type: "vocab", front: "der Rohstoff", reading: "derrohstoff", meaning: "raw material", example: { jp: "Jeder Rohstoff, der im Land bleibt, muss nicht neu gekauft werden.", en: "Every raw material that stays in the country does not have to be bought again." }, drill: { jp: "Der Rohstoff wird immer teurer", en: "The raw material is getting ever more expensive" }, accept: ["raw material", "commodity", "resource"], hint: "roh (raw) + Stoff (material). Die Ressource (u65) is what you have; ein Rohstoff is what goes into production." },
        { id: "de-u101l3-derausstieg", type: "vocab", front: "der Ausstieg", reading: "derausstieg", meaning: "phase-out (planned exit from a technology)", example: { jp: "Der Ausstieg aus der Kohle soll bis 2038 fertig sein.", en: "The phase-out of coal is supposed to be complete by 2038." }, drill: { jp: "Der Ausstieg aus der Kohle dauert Jahre", en: "The phase-out of coal takes years" }, accept: ["phase-out", "exit", "withdrawal", "phase out"], hint: "Literally getting out — of a bus, or of an entire industry: der Kohleausstieg, der Atomausstieg. Always aus + dative." },
        { id: "de-u101l3-diewende", type: "vocab", front: "die Wende", reading: "diewende", meaning: "turnaround (decisive change of direction)", example: { jp: "Ohne billigen Strom aus Wind und Sonne ist die Wende in der Energiepolitik kaum zu schaffen.", en: "Without cheap electricity from wind and sun, the turnaround in energy is hard to manage." }, drill: { jp: "Die Wende in der Energiepolitik kostet Geld", en: "The turnaround in energy policy costs money" }, accept: ["turnaround", "turning point", "shift", "transition"], hint: "The word Germans use for a change of direction that is chosen, not suffered: die Energiewende, die Verkehrswende. Capitalised, die Wende also means 1989." },
        { id: "de-u101l3-senken", type: "vocab", front: "senken", reading: "senken", meaning: "to lower (bring a figure down deliberately)", example: { jp: "Die Stadt will den Verbrauch in ihren Schulen um ein Viertel senken.", en: "The city wants to lower consumption in its schools by a quarter." }, drill: { jp: "Die Stadt will die Emissionen senken", en: "The city wants to lower emissions" }, accept: ["to lower", "lower", "to reduce", "to bring down", "reduce"], hint: "Transitive twin of sinken (u53): Preise sinken by themselves, but you senkst them. Steuern, Kosten, Emissionen senken." },
        { id: "de-u101l3-einsparen", type: "vocab", front: "einsparen", reading: "einsparen", meaning: "to save (by using less of something)", example: { jp: "Mit besseren Fenstern spart das Haus im Winter viel Energie ein.", en: "With better windows the house saves a lot of energy in winter." }, drill: { jp: "Wir wollen viel Energie einsparen", en: "We want to save a lot of energy" }, accept: ["to save", "save", "to economise", "to cut down on"], hint: "Separable: spart … ein. Sparen (u17) is putting money aside; einsparen is needing less of it in the first place." },
        { id: "de-u101l3-derfussabdruck", type: "vocab", front: "der Fußabdruck", reading: "derfussabdruck", meaning: "footprint (ecological)", example: { jp: "Wer selten fliegt und kein Auto hat, hat einen kleineren Fußabdruck.", en: "Someone who rarely flies and has no car has a smaller footprint." }, drill: { jp: "Der Fußabdruck wird langsam etwas kleiner", en: "The footprint is slowly getting somewhat smaller" }, accept: ["footprint", "carbon footprint", "ecological footprint"], hint: "The print a foot leaves, borrowed for what your living leaves behind: der ökologische Fußabdruck." },
      ],
    },
    {
      id: "de-u101l4",
      unit: 101,
      lesson: 4,
      title: "Nachhaltigkeit als politisches Ziel",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Discuss sustainability as policy: neutrality targets, keeping materials in use, steering behaviour with incentives and levies, and judging whether a measure actually works.",
      items: [
        { id: "de-u101l4-dieklimaneutralitat", type: "vocab", front: "die Klimaneutralität", reading: "dieklimaneutralitat", meaning: "climate neutrality", example: { jp: "Das Land hat sich Klimaneutralität bis 2045 als Ziel gesetzt.", en: "The country has set itself climate neutrality by 2045 as a goal." }, drill: { jp: "Die Klimaneutralität bleibt das große Ziel", en: "Climate neutrality remains the big goal" }, accept: ["climate neutrality", "carbon neutrality", "net zero"], hint: "Not zero emissions — emissions balanced by what is taken back out. The political target word of the last decade." },
        { id: "de-u101l4-diekreislaufwirtschaft", type: "vocab", front: "die Kreislaufwirtschaft", reading: "diekreislaufwirtschaft", meaning: "circular economy", example: { jp: "In einer Kreislaufwirtschaft wird aus dem Müll von heute das Material von morgen.", en: "In a circular economy, today's waste becomes tomorrow's material." }, drill: { jp: "Die Kreislaufwirtschaft braucht bessere Regeln", en: "The circular economy needs better rules" }, accept: ["circular economy"], hint: "Kreislauf is a circuit — the blood's, or a material's. The opposite model is the straight line from Rohstoff to Müll." },
        { id: "de-u101l4-deranreiz", type: "vocab", front: "der Anreiz", reading: "deranreiz", meaning: "incentive (something that makes an action attractive)", example: { jp: "Ohne finanziellen Anreiz baut kaum jemand das alte Dach um.", en: "Without a financial incentive, hardly anyone converts the old roof." }, drill: { jp: "Der Anreiz ist einfach zu klein", en: "The incentive is simply too small" }, accept: ["incentive", "inducement", "stimulus"], hint: "From reizen, to stimulate. Policy people talk about Anreize schaffen — creating incentives — where English says setting them." },
        { id: "de-u101l4-dieabgabe", type: "vocab", front: "die Abgabe", reading: "dieabgabe", meaning: "levy (charge paid to the state)", example: { jp: "Für jede Tonne wird eine Abgabe fällig, die jedes Jahr steigt.", en: "A levy falls due on every tonne, and it rises every year." }, drill: { jp: "Die Abgabe steigt in jedem Jahr", en: "The levy rises every year" }, accept: ["levy", "charge", "duty", "state charge"], hint: "Narrower than die Steuer (u32): a Steuer funds the state generally, an Abgabe is charged for a specific thing and often steers behaviour." },
        { id: "de-u101l4-wirksam", type: "vocab", front: "wirksam", reading: "wirksam", meaning: "effective (actually produces the effect)", example: { jp: "Eine Vorgabe ist nur wirksam, wenn jemand sie auch überwacht.", en: "A requirement is only effective if somebody also monitors it." }, drill: { jp: "Die Maßnahme war überraschend wirksam", en: "The measure was surprisingly effective" }, accept: ["effective", "efficacious", "potent"], hint: "From wirken, to have an effect. Note the medicine sense too: ein wirksames Mittel. Not the same as effizient, which is about cost." },
        { id: "de-u101l4-messbar", type: "vocab", front: "messbar", reading: "messbar", meaning: "measurable", example: { jp: "Ein Ziel ohne messbare Zahlen lässt sich später nicht prüfen.", en: "A goal without measurable figures cannot be checked later." }, drill: { jp: "Der Fortschritt ist endlich messbar geworden", en: "The progress has finally become measurable" }, accept: ["measurable", "quantifiable"], hint: "messen + -bar, the -able suffix. The same pattern gives you machbar, lesbar, bezahlbar — a cheap way to make adjectives." },
      ],
    },
  ],
};
