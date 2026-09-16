// DE Unit 57 — Gefühle, feiner betrachtet (slot: emotion, finer shades) — B1
// Block 1 (u51–u62). BAND CONVENTIONS: see the header of de/unit51.js.
//
// THEME: emotion at higher resolution. A2 already has wütend, traurig, glücklich,
// aufgeregt, enttäuscht, erschöpft, nervös, peinlich, stolz, zufrieden,
// überrascht, die Laune, die Stimmung, die Sorge, die Freude, die Angst, mutig,
// schüchtern, einsam, sich ärgern, sich freuen — the primary colours. B1 mixes
// them: relief and gratitude against jealousy (l1), the heavy feelings A2 never
// names (l2), what a BODY does with a feeling (l3), and what happens between two
// people (l4).
// ⚠️ TWO REFLEXIVE DRILLS, same trap as u56: sich schämen must sit contiguous, so
// the drill is "Niemand muss sich schämen", not the more natural "Man muss sich
// nicht schämen" — nicht between the two words is a silent miss.
// ⚠️ eifersüchtig (jealous of losing someone) vs neidisch (envious of what
// someone has) is a real German split English does not make. The hint says so;
// neidisch is deliberately NOT carded here — one contrast per card.
// FREE: Kopfschmerzen, Ärzte, Sorgen, Berge, Hände, Nachbarn
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT57 = {
  id: "de-u57",
  lang: "de",
  title: "Gefühle, feiner betrachtet",
  order: 57,
  stage: "b1",
  lessons: [
    {
      id: "de-u57l1",
      unit: 57,
      lesson: 1,
      title: "Zwischen Freude und Sorge",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name a feeling more precisely than gut or schlecht: relieved, grateful, thrilled, unbothered, eager, jealous.",
      items: [
        { id: "de-u57l1-erleichtert", type: "vocab", front: "erleichtert", reading: "erleichtert", meaning: "relieved", example: { jp: "Ich war sehr erleichtert, als die Nachricht endlich gekommen ist.", en: "I was very relieved when the message finally came." }, drill: { jp: "Wir waren sehr erleichtert", en: "We were very relieved" }, accept: ["relieved", "a relief", "relaxed after worry"], hint: "From leicht (light): the weight comes off. erleichtert sein, dass… — the feeling right after the worry ends." },
        { id: "de-u57l1-dankbar", type: "vocab", front: "dankbar", reading: "dankbar", meaning: "grateful", example: { jp: "Ich bin dir sehr dankbar, weil du mir am Wochenende geholfen hast.", en: "I'm very grateful to you, because you helped me at the weekend." }, drill: { jp: "Wir sind dir sehr dankbar", en: "We are very grateful to you" }, accept: ["grateful", "thankful", "appreciative"], hint: "danke + -bar (the -able ending): able to thank. jemandem für etwas dankbar sein — the person goes in the dative." },
        { id: "de-u57l1-begeistert", type: "vocab", front: "begeistert", reading: "begeistert", meaning: "thrilled", example: { jp: "Die Kinder waren vom Film begeistert, und wir auch.", en: "The children were thrilled by the film, and so were we." }, drill: { jp: "Die Kinder waren sehr begeistert", en: "The children were very thrilled" }, accept: ["thrilled", "enthusiastic", "excited", "delighted", "over the moon"], hint: "From der Geist (the spirit, u58): the spirit has got into you. von etwas begeistert sein." },
        { id: "de-u57l1-gelassen", type: "vocab", front: "gelassen", reading: "gelassen", meaning: "calm", example: { jp: "Er bleibt auch in einer Krise gelassen, und das hilft der ganzen Gruppe.", en: "He stays calm even in a crisis, and that helps the whole group." }, drill: { jp: "Er bleibt immer sehr gelassen", en: "He always stays very calm" }, accept: ["calm", "composed", "relaxed", "unruffled", "easy-going", "unfazed"], hint: "The past participle of lassen: you let things be. ruhig is quiet on the outside; gelassen is unbothered on the inside." },
        { id: "de-u57l1-gespannt", type: "vocab", front: "gespannt", reading: "gespannt", meaning: "eager", example: { jp: "Ich bin sehr gespannt, ob das am Ende auch gut funktioniert.", en: "I'm very eager to see whether that works well in the end." }, drill: { jp: "Ich bin schon sehr gespannt", en: "I am already very eager" }, accept: ["eager", "curious", "excited", "keen", "on tenterhooks"], hint: "From spannen (to stretch tight) — like a drawn bow. gespannt sein, ob… = to be eager to find out whether…" },
        { id: "de-u57l1-eifersuchtig", type: "vocab", front: "eifersüchtig", reading: "eifersuchtig", meaning: "jealous", example: { jp: "Er wird schnell eifersüchtig, obwohl es keinen Grund gibt.", en: "He quickly gets jealous, although there is no reason." }, drill: { jp: "Er ist sehr schnell eifersüchtig", en: "He gets jealous very quickly" }, accept: ["jealous", "possessive", "envious"], hint: "der Eifer (zeal) + die Sucht (addiction). Of a PERSON you fear losing. For wanting what somebody has, German says neidisch." },
      ],
    },
    {
      id: "de-u57l2",
      unit: 57,
      lesson: 2,
      title: "Wenn es schwerfällt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the hard feelings without reaching for traurig every time: suffering, being weighed down, despair, shame, longing and grief.",
      items: [
        { id: "de-u57l2-leiden", type: "vocab", front: "leiden", reading: "leiden", meaning: "to suffer", example: { jp: "Sie leidet seit Jahren an Kopfschmerzen, aber die Ärzte finden nichts.", en: "She has suffered from headaches for years, but the doctors find nothing." }, drill: { jp: "Viele Kinder leiden im Winter", en: "Many children suffer in winter" }, accept: ["to suffer", "suffer", "to be in pain", "to endure"], hint: "an etwas leiden = to suffer from an illness. unter etwas leiden = to suffer under a situation. The preposition changes the sense." },
        { id: "de-u57l2-belasten", type: "vocab", front: "belasten", reading: "belasten", meaning: "to burden", example: { jp: "Der Streit belastet die ganze Familie, auch wenn niemand etwas sagt.", en: "The quarrel is a burden on the whole family, even if nobody says anything." }, drill: { jp: "Die Sorgen belasten uns sehr", en: "The worries weigh on us a lot" }, accept: ["to burden", "burden", "to weigh on", "weigh on", "to strain", "to put a strain on"], hint: "be- + die Last (the load): to put a load on something. Of people, of bank accounts and of the environment." },
        { id: "de-u57l2-verzweifelt", type: "vocab", front: "verzweifelt", reading: "verzweifelt", meaning: "desperate", example: { jp: "Nach dem langen Streit war er völlig verzweifelt, und wir konnten nicht helfen.", en: "After the long quarrel he was completely desperate, and we couldn't help." }, drill: { jp: "Er war damals völlig verzweifelt", en: "He was completely desperate back then" }, accept: ["desperate", "despairing", "at your wit's end", "distraught"], hint: "ver- + der Zweifel (u54): doubt taken all the way to the end. Much stronger than traurig — the hope is gone." },
        { id: "de-u57l2-sichschamen", type: "vocab", front: "sich schämen", reading: "sichschamen", meaning: "to be ashamed", example: { jp: "Ich schäme mich, weil ich den Termin jetzt schon zweimal vergessen habe.", en: "I'm ashamed, because I've now forgotten the appointment twice." }, drill: { jp: "Niemand muss sich schämen", en: "Nobody has to be ashamed" }, accept: ["to be ashamed", "be ashamed", "to feel ashamed", "to be embarrassed"], hint: "sich für etwas schämen. Deeper than peinlich, which is about the awkward moment rather than about you." },
        { id: "de-u57l2-diesehnsucht", type: "vocab", front: "die Sehnsucht", reading: "diesehnsucht", meaning: "the longing", example: { jp: "Nach zehn Jahren im Ausland hatte er große Sehnsucht nach der Heimat.", en: "After ten years abroad he had a great longing for home." }, drill: { jp: "Die Sehnsucht bleibt viele Jahre", en: "The longing stays for many years" }, accept: ["longing", "the longing", "yearning", "the yearning", "nostalgia", "deep desire"], hint: "sehnen (to yearn) + die Sucht (the craving). Sehnsucht nach etwas haben — one of German's famous untranslatables." },
        { id: "de-u57l2-derkummer", type: "vocab", front: "der Kummer", reading: "derkummer", meaning: "the grief", example: { jp: "Der Kummer war groß, aber mit der Zeit wurde es besser.", en: "The grief was great, but with time it got better." }, drill: { jp: "Der Kummer bleibt sehr lange", en: "The grief stays a very long time" }, accept: ["grief", "the grief", "sorrow", "the sorrow", "distress", "the distress", "heartache", "trouble"], hint: "Quiet, long-lasting sadness — the kind you carry around. Kummer haben; jemandem Kummer machen." },
      ],
    },
    {
      id: "de-u57l3",
      unit: 57,
      lesson: 3,
      title: "Wie man reagiert",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe what a body does with a feeling: a start of fright, trembling hands, crying, smiling — and how much you can bear.",
      items: [
        { id: "de-u57l3-erschrecken", type: "vocab", front: "erschrecken", reading: "erschrecken", meaning: "to be startled", example: { jp: "Ich bin sehr erschrocken, als der Hund plötzlich hinter mir stand.", en: "I was very startled when the dog suddenly stood behind me." }, drill: { jp: "Die Kinder erschrecken sehr leicht", en: "The children are startled very easily" }, accept: ["to be startled", "be startled", "to get a fright", "to be frightened", "to startle", "to scare"], hint: "TWO verbs sharing a spelling. Intransitive and strong — ich erschrecke, ich erschrak, ich bin erschrocken (I get a fright). Transitive and weak — du erschreckst mich, du erschrecktest mich (you frighten me)." },
        { id: "de-u57l3-aushalten", type: "vocab", front: "aushalten", reading: "aushalten", meaning: "to endure", example: { jp: "Die Hitze im Sommer halte ich kaum aus, deshalb fahre ich in die Berge.", en: "I can hardly endure the heat in summer, so I go to the mountains." }, drill: { jp: "Das kann man kaum aushalten", en: "You can hardly endure that" }, accept: ["to endure", "endure", "to bear", "bear", "to stand", "stand", "to put up with", "to take"], hint: "aus + halten: to hold out all the way. Ich halte es nicht mehr aus = I can't stand it any more." },
        { id: "de-u57l3-zittern", type: "vocab", front: "zittern", reading: "zittern", meaning: "to tremble", example: { jp: "Meine Hände zittern, wenn ich vor vielen Gästen sprechen muss.", en: "My hands tremble when I have to speak in front of many guests." }, drill: { jp: "Meine Hände zittern sehr stark", en: "My hands are trembling a lot" }, accept: ["to tremble", "tremble", "to shake", "shake", "to shiver", "shiver", "to quiver"], hint: "From cold, from fear or from age. vor Angst zittern = to tremble with fear — the preposition is vor." },
        { id: "de-u57l3-weinen", type: "vocab", front: "weinen", reading: "weinen", meaning: "to cry", example: { jp: "Das Kind hat lange geweint, weil es den Hund so sehr vermisst hat.", en: "The child cried for a long time, because it missed the dog so much." }, drill: { jp: "Die Kinder weinen sehr laut", en: "The children are crying very loudly" }, accept: ["to cry", "cry", "to weep", "weep", "to shed tears"], hint: "Nothing to do with der Wein (wine) — that one has no -en. vor Freude weinen = to cry for joy." },
        { id: "de-u57l3-lacheln", type: "vocab", front: "lächeln", reading: "lacheln", meaning: "to smile", example: { jp: "Sie lächelt immer, auch wenn der Tag im Büro sehr schwer war.", en: "She always smiles, even when the day at the office was very hard." }, drill: { jp: "Die Gäste lächeln sehr oft", en: "The guests smile very often" }, accept: ["to smile", "smile", "to grin"], hint: "The small quiet one. lachen (to laugh) is the loud one, and it is one letter and one umlaut away." },
        { id: "de-u57l3-empfindlich", type: "vocab", front: "empfindlich", reading: "empfindlich", meaning: "sensitive", example: { jp: "Er ist sehr empfindlich, deshalb sage ich lieber nichts über die Arbeit.", en: "He is very sensitive, so I'd rather say nothing about the work." }, drill: { jp: "Die Haut ist sehr empfindlich", en: "The skin is very sensitive" }, accept: ["sensitive", "touchy", "delicate", "tender", "susceptible"], hint: "From empfinden, to feel. Of people (touchy), of skin (delicate) and of instruments (precise)." },
      ],
    },
    {
      id: "de-u57l4",
      unit: 57,
      lesson: 4,
      title: "Zwischen Menschen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Handle a relationship in words: trust somebody, forgive them, notice when you have insulted them, be considerate, miss them, comfort them.",
      items: [
        { id: "de-u57l4-dasvertrauen", type: "vocab", front: "das Vertrauen", reading: "dasvertrauen", meaning: "the trust", example: { jp: "Ohne Vertrauen kann eine Gruppe nicht lange zusammen arbeiten.", en: "Without trust a group can't work together for long." }, drill: { jp: "Das Vertrauen wächst mit der Zeit", en: "Trust grows with time" }, accept: ["trust", "the trust", "confidence", "the confidence", "faith", "the faith"], hint: "ver- + trauen (to dare). Vertrauen haben zu jemandem; das Vertrauen verlieren is the hard half." },
        { id: "de-u57l4-verzeihen", type: "vocab", front: "verzeihen", reading: "verzeihen", meaning: "to forgive", example: { jp: "Ich kann ihm den Streit verzeihen, aber vergessen kann ich ihn nicht.", en: "I can forgive him the quarrel, but I can't forget it." }, drill: { jp: "Wir können ihm das verzeihen", en: "We can forgive him that" }, accept: ["to forgive", "forgive", "to pardon", "pardon", "to excuse"], hint: "DATIVE for the person, accusative for the deed: jemandem etwas verzeihen. Verzeihung! is a polite sorry." },
        { id: "de-u57l4-beleidigen", type: "vocab", front: "beleidigen", reading: "beleidigen", meaning: "to insult", example: { jp: "Er wollte niemanden beleidigen, aber die Worte waren trotzdem sehr hart.", en: "He didn't want to insult anybody, but the words were very harsh anyway." }, drill: { jp: "Harte Worte beleidigen viele Gäste", en: "Harsh words insult many guests" }, accept: ["to insult", "insult", "to offend", "offend", "to be rude to"], hint: "beleidigt sein = to be offended, and Germans say it about themselves quite openly: Er ist beleidigt." },
        { id: "de-u57l4-dierucksicht", type: "vocab", front: "die Rücksicht", reading: "dierucksicht", meaning: "the consideration", example: { jp: "Ohne Rücksicht auf die Nachbarn hat er bis drei Uhr laut Musik gehört.", en: "With no consideration for the neighbours he listened to loud music until three." }, drill: { jp: "Die Rücksicht hilft in der Gruppe", en: "Consideration helps in the group" }, accept: ["consideration", "the consideration", "regard", "the regard", "thoughtfulness", "respect"], hint: "zurück + die Sicht (the view): looking back at who is behind you. Rücksicht nehmen auf jemanden." },
        { id: "de-u57l4-vermissen", type: "vocab", front: "vermissen", reading: "vermissen", meaning: "to miss", example: { jp: "Ich vermisse die alte Stadt, obwohl ich hier sehr zufrieden bin.", en: "I miss the old city, although I'm very content here." }, drill: { jp: "Wir vermissen die alte Wohnung", en: "We miss the old flat" }, accept: ["to miss", "miss", "to long for", "to feel the absence of"], hint: "Only of something absent that you want back. A train you miss is verpassen — a completely different word." },
        { id: "de-u57l4-trosten", type: "vocab", front: "trösten", reading: "trosten", meaning: "to comfort", example: { jp: "Die Mutter hat das Kind getröstet, bis es endlich ruhig geworden ist.", en: "The mother comforted the child until it finally went quiet." }, drill: { jp: "Wir wollen das Kind trösten", en: "We want to comfort the child" }, accept: ["to comfort", "comfort", "to console", "console", "to soothe"], hint: "der Trost is the comfort itself. Also reflexive: sich damit trösten, dass… = to console oneself that…" },
      ],
    },
  ],
};
