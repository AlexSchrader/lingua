// DE Unit 48 — Handeln und Entscheiden (slot: vocabulary 9 (A2)) — A2
// Block 3 (u41–u50), coverage pass. Conventions: see de/unit1.js.
//
// THEME: a frequency pass on high-use A2 VERBS the band had not yet taught —
// deciding, allowing, forbidding, everyday handling. Fronts checked at FRONT and
// LEXEME level against A1 + all three A2 blocks. ß NOTE: "beschließen" → reading
// beschliessen (hand-written, ß→ss). REFLEXIVE DRILLS: per u21/u44, a reflexive
// front only survives whole after a modal with a THIRD-PERSON subject (whose
// pronoun is sich), so the four reflexive drills are modal-framed with varied
// subjects. Examples and drills use only vocab introduced at or before u48:
// verified by `node scripts/scope-strict-de.mjs 45 50`, which applies NO inflection
// excuse and reports 0 out-of-scope tokens across u45-u50.
export const DE_UNIT48 = {
  id: "de-u48",
  lang: "de",
  title: "Handeln und Entscheiden",
  order: 48,
  stage: "a2",
  lessons: [
    {
      id: "de-u48l1",
      unit: 48,
      lesson: 1,
      title: "Sich entscheiden",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about making up your mind: try, decide, resolve, plan, think over, hesitate.",
      items: [
        { id: "de-u48l1-versuchen", type: "vocab", front: "versuchen", reading: "versuchen", meaning: "to try", example: { jp: "Ich versuche, jeden Tag zu lernen.", en: "I try to learn every day." }, drill: { jp: "Wir versuchen es morgen", en: "We try it tomorrow" }, accept: ["to try", "to attempt"], hint: "versuchen zu + infinitive. der Versuch is an attempt. Also to taste food." },
        { id: "de-u48l1-selbst", type: "vocab", front: "selbst", reading: "selbst", meaning: "myself / yourself", example: { jp: "Ich mache das selbst.", en: "I do that myself." }, drill: { jp: "Wir machen das selbst", en: "We do that ourselves" }, accept: ["myself", "yourself", "oneself", "himself", "even"], hint: "Emphasises WHO does it: ich selbst, du selbst. Before a noun it can also mean 'even'." },
        { id: "de-u48l1-entscheiden", type: "vocab", front: "entscheiden", reading: "entscheiden", meaning: "to decide", example: { jp: "Du musst selbst entscheiden, was du willst.", en: "You have to decide yourself what you want." }, drill: { jp: "Wir entscheiden das morgen", en: "We decide that tomorrow" }, accept: ["to decide", "to determine"], hint: "sich entscheiden = to make up one's mind. die Entscheidung is the decision." },
        { id: "de-u48l1-beschliessen", type: "vocab", front: "beschließen", reading: "beschliessen", meaning: "to resolve", example: { jp: "Sie beschließt, mehr Sport zu machen.", en: "She resolves to do more sport." }, drill: { jp: "Wir beschließen zu warten", en: "We resolve to wait" }, accept: ["to resolve", "to decide", "to determine"], hint: "A firm decision to act. Stronger than entscheiden. Note the ß — reading beschliessen." },
        { id: "de-u48l1-planen", type: "vocab", front: "planen", reading: "planen", meaning: "to plan", example: { jp: "Wir planen eine Reise nach Österreich.", en: "We are planning a trip to Austria." }, drill: { jp: "Wir planen das Fest", en: "We plan the party" }, accept: ["to plan"], hint: "From der Plan. einplanen = to allow/schedule for." },
        { id: "de-u48l1-uberlegen", type: "vocab", front: "überlegen", reading: "uberlegen", meaning: "to think over", example: { jp: "Ich überlege noch, ob ich komme.", en: "I'm still thinking over whether I'll come." }, drill: { jp: "Wir überlegen kurz", en: "We think it over briefly" }, accept: ["to think over", "to consider", "to ponder"], hint: "To weigh something up. As an adjective, überlegen also means 'superior'." },
        { id: "de-u48l1-zogern", type: "vocab", front: "zögern", reading: "zogern", meaning: "to hesitate", example: { jp: "Er zögert und sagt lange nichts.", en: "He hesitates and says nothing for a long time." }, drill: { jp: "Wir zögern einen Moment", en: "We hesitate for a moment" }, accept: ["to hesitate", "to waver"], hint: "ohne zu zögern = without hesitation." },
      ],
    },
    {
      id: "de-u48l2",
      unit: 48,
      lesson: 2,
      title: "Wagen oder aufgeben",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say whether you go for it or back out: give up, dare, refuse, turn down, agree.",
      items: [
        { id: "de-u48l2-aufgeben", type: "vocab", front: "aufgeben", reading: "aufgeben", meaning: "to give up", example: { jp: "Die Kinder wollen nicht aufgeben.", en: "The children don't want to give up." }, drill: { jp: "Wir dürfen nicht aufgeben", en: "We must not give up" }, accept: ["to give up", "to quit", "to post"], hint: "Separable (gibt … auf), so it stays whole after a modal. Also to post a letter." },
        { id: "de-u48l2-wagen", type: "vocab", front: "wagen", reading: "wagen", meaning: "to venture", example: { jp: "Er wagt es nicht, sie zu fragen.", en: "He doesn't dare to ask her." }, drill: { jp: "Wir wagen den Versuch", en: "We dare to try" }, accept: ["to dare", "to risk", "to venture"], hint: "wagen zu + infinitive. Don't confuse with der Wagen, the car." },
        { id: "de-u48l2-sichtrauen", type: "vocab", front: "sich trauen", reading: "sichtrauen", meaning: "to dare", example: { jp: "Sie traut sich nicht, laut zu sprechen.", en: "She doesn't dare to speak loudly." }, drill: { jp: "Die Kinder müssen sich trauen", en: "The children have to dare" }, accept: ["to dare", "to have the nerve"], hint: "The reflexive everyday 'to dare'. From trauen, to trust — you trust yourself to do it." },
        { id: "de-u48l2-sichweigern", type: "vocab", front: "sich weigern", reading: "sichweigern", meaning: "to refuse", example: { jp: "Der Mann weigert sich zu zahlen.", en: "The man refuses to pay." }, drill: { jp: "Die Kollegen können sich weigern", en: "The colleagues can refuse" }, accept: ["to refuse", "to decline"], hint: "sich weigern zu + infinitive. A flat refusal to do something." },
        { id: "de-u48l2-ablehnen", type: "vocab", front: "ablehnen", reading: "ablehnen", meaning: "to turn down", example: { jp: "Sie lehnt den Plan höflich ab.", en: "She politely turns down the plan." }, drill: { jp: "Wir müssen das Angebot ablehnen", en: "We have to turn down the offer" }, accept: ["to turn down", "to reject", "to refuse", "to decline"], hint: "Separable (lehnt … ab). The opposite of zustimmen. From lehnen, to lean." },
        { id: "de-u48l2-zustimmen", type: "vocab", front: "zustimmen", reading: "zustimmen", meaning: "to agree", example: { jp: "Die Kollegen stimmen dem Plan zu.", en: "The colleagues agree to the plan." }, drill: { jp: "Wir können dem Plan zustimmen", en: "We can agree to the plan" }, accept: ["to agree", "to approve", "to consent"], hint: "Separable (stimmt … zu). zustimmen takes the dative. From die Stimme, voice/vote." },
      ],
    },
    {
      id: "de-u48l3",
      unit: 48,
      lesson: 3,
      title: "Erlauben und verbieten",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about rules: allow, forbid, permit, force, demand, watch out.",
      items: [
        { id: "de-u48l3-erlauben", type: "vocab", front: "erlauben", reading: "erlauben", meaning: "to allow", example: { jp: "Die Eltern erlauben das nicht.", en: "The parents don't allow that." }, drill: { jp: "Wir erlauben es dem Kind", en: "We allow the child to do it" }, accept: ["to allow", "to permit", "to let"], hint: "erlauben takes the dative person. die Erlaubnis is permission." },
        { id: "de-u48l3-verbieten", type: "vocab", front: "verbieten", reading: "verbieten", meaning: "to forbid", example: { jp: "Der Arzt verbietet ihm den Sport.", en: "The doctor forbids him to do sport." }, drill: { jp: "Wir verbieten das nicht", en: "We don't forbid that" }, accept: ["to forbid", "to ban", "to prohibit"], hint: "The opposite of erlauben. verboten = forbidden, a very common sign." },
        { id: "de-u48l3-gestatten", type: "vocab", front: "gestatten", reading: "gestatten", meaning: "to permit", example: { jp: "Essen ist hier nicht gestattet.", en: "Eating is not permitted here." }, drill: { jp: "Wir gestatten keine Fotos", en: "We do not permit photos" }, accept: ["to permit", "to allow"], hint: "A formal erlauben, seen on signs. Gestatten Sie? = May I?" },
        { id: "de-u48l3-zwingen", type: "vocab", front: "zwingen", reading: "zwingen", meaning: "to force", example: { jp: "Niemand kann dich zwingen.", en: "Nobody can force you." }, drill: { jp: "Wir zwingen ihn zu nichts", en: "We force him to do nothing" }, accept: ["to force", "to compel"], hint: "zwingen zu + noun/infinitive. Stem change in the past: zwang." },
        { id: "de-u48l3-verlangen", type: "vocab", front: "verlangen", reading: "verlangen", meaning: "to demand", example: { jp: "Der Chef verlangt viel von uns.", en: "The boss demands a lot from us." }, drill: { jp: "Wir verlangen eine Antwort", en: "We demand an answer" }, accept: ["to demand", "to require", "to ask for"], hint: "verlangen von = to demand of. At a shop counter: to ask for." },
        { id: "de-u48l3-aufpassen", type: "vocab", front: "aufpassen", reading: "aufpassen", meaning: "to watch out", example: { jp: "Pass auf, das Glas ist heiß!", en: "Watch out, the glass is hot!" }, drill: { jp: "Wir müssen auf die Kinder aufpassen", en: "We have to look after the children" }, accept: ["to watch out", "to pay attention", "to look after", "to be careful"], hint: "Separable (passt … auf). aufpassen auf = to look after / keep an eye on." },
      ],
    },
    {
      id: "de-u48l4",
      unit: 48,
      lesson: 4,
      title: "Im Alltag",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Everyday verbs: use, forget, remember, take care of, avoid, get done.",
      items: [
        { id: "de-u48l4-benutzen", type: "vocab", front: "benutzen", reading: "benutzen", meaning: "to use", example: { jp: "Darf ich dein Telefon benutzen?", en: "May I use your phone?" }, drill: { jp: "Wir benutzen den Computer", en: "We use the computer" }, accept: ["to use"], hint: "For using an object or tool. A near-twin is verwenden." },
        { id: "de-u48l4-vergessen", type: "vocab", front: "vergessen", reading: "vergessen", meaning: "to forget", example: { jp: "Ich vergesse immer deinen Namen.", en: "I always forget your name." }, drill: { jp: "Wir vergessen den Termin nicht", en: "We won't forget the appointment" }, accept: ["to forget"], hint: "Stem change: er vergisst. The opposite is sich erinnern." },
        { id: "de-u48l4-sicherinnern", type: "vocab", front: "sich erinnern", reading: "sicherinnern", meaning: "to remember", example: { jp: "Ich erinnere mich gut an den Tag.", en: "I remember the day well." }, drill: { jp: "Die Eltern können sich erinnern", en: "The parents can remember" }, accept: ["to remember", "to recall"], hint: "sich erinnern an + accusative. The opposite of vergessen." },
        { id: "de-u48l4-sichkummern", type: "vocab", front: "sich kümmern", reading: "sichkummern", meaning: "to take care of", example: { jp: "Sie kümmert sich um die alte Katze.", en: "She takes care of the old cat." }, drill: { jp: "Die Eltern müssen sich kümmern", en: "The parents have to take care" }, accept: ["to take care of", "to look after", "to see to"], hint: "sich kümmern um + accusative. From der Kummer, worry/grief." },
        { id: "de-u48l4-vermeiden", type: "vocab", front: "vermeiden", reading: "vermeiden", meaning: "to avoid", example: { jp: "Wir vermeiden die Stadt am Morgen.", en: "We avoid the city in the morning." }, drill: { jp: "Wir vermeiden das Problem", en: "We avoid the problem" }, accept: ["to avoid"], hint: "To keep away from a thing or situation. Stem change in past: vermied." },
        { id: "de-u48l4-erledigen", type: "vocab", front: "erledigen", reading: "erledigen", meaning: "to get done", example: { jp: "Ich muss heute noch viel erledigen.", en: "I still have a lot to get done today." }, drill: { jp: "Wir erledigen das schnell", en: "We get that done quickly" }, accept: ["to get done", "to deal with", "to take care of", "to finish"], hint: "To sort out and finish a task or errand — die Erledigungen, the errands." },
      ],
    },
  ],
};
