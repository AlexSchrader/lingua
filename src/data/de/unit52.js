// DE Unit 52 — Ursache und Folge (slot: cause and consequence) — B1
// Block 1 (u51–u62). BAND CONVENTIONS: see the header of de/unit51.js — it is the
// B1 constitution and blocks 2 and 3 are told to read it. Language-wide A1/A2
// conventions stay in de/unit1.js.
//
// THEME: the chain from cause to result. The frozen base already teaches die
// Ursache, der Grund, weil, denn, deshalb, deswegen, damit, trotzdem, dennoch —
// so this unit takes the layer above them: the VERBS of causation (verursachen,
// entstehen, auslösen, ermöglichen, führen, beeinflussen), the nouns that name
// the link (der Zusammenhang, die Folge, die Auswirkung, die Voraussetzung, der
// Umstand, der Zweck), and the two written connectives A2 never reached
// (folglich, daher, dadurch).
// ⚠️ l1 teaches `wegen` + GENITIVE — the first of the band's two genitive
// prepositions. Its pair, `trotz`, is u62 l4. Both are cased in their examples
// rather than tabled; explicit case grammar belongs to u69–u71.
// FREE: Probleme, Stürme, Gruppen, Missverständnisse, Straßen, Wege, Worte, Noten, Regeln
// lang/unit/lesson are stamped in src/data/index.js.
export const DE_UNIT52 = {
  id: "de-u52",
  lang: "de",
  title: "Ursache und Folge",
  order: 52,
  stage: "b1",
  lessons: [
    {
      id: "de-u52l1",
      unit: 52,
      lesson: 1,
      title: "Woher es kommt",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say where something came from: name what caused it, how it arose, what it hangs on, and what it is connected to.",
      items: [
        { id: "de-u52l1-verursachen", type: "vocab", front: "verursachen", reading: "verursachen", meaning: "to cause", example: { jp: "Der Sturm hat viele Probleme verursacht, weil er mitten in der Nacht kam.", en: "The storm caused a lot of problems, because it came in the middle of the night." }, drill: { jp: "Stürme verursachen oft Probleme", en: "Storms often cause problems" }, accept: ["to cause", "cause", "to bring about", "bring about", "to be the cause of"], hint: "die Ursache (the cause) made into a verb. Almost always of something unwelcome: Schaden, Probleme, Verspätung." },
        { id: "de-u52l1-entstehen", type: "vocab", front: "entstehen", reading: "entstehen", meaning: "to arise", example: { jp: "Wenn zwei Gruppen nicht genug reden, entsteht schnell ein Missverständnis.", en: "When two groups don't talk enough, a misunderstanding quickly arises." }, drill: { jp: "So entstehen viele Missverständnisse", en: "That is how many misunderstandings arise" }, accept: ["to arise", "arise", "to come about", "come about", "to emerge", "emerge", "to be created"], hint: "ent- (a beginning) + stehen: to come into being. Nobody does it — it simply happens: Ein Problem entsteht." },
        { id: "de-u52l1-derzusammenhang", type: "vocab", front: "der Zusammenhang", reading: "derzusammenhang", meaning: "the connection", example: { jp: "Der Zusammenhang zwischen Wetter und Laune ist schwer zu beweisen.", en: "The connection between weather and mood is hard to prove." }, drill: { jp: "Der Zusammenhang zeigt sich später", en: "The connection shows itself later" }, accept: ["connection", "the connection", "link", "the link", "context", "the context", "correlation"], hint: "zusammen + hängen: what hangs together. im Zusammenhang mit = in connection with. Not the adverb zusammen — this is a noun built on it." },
        { id: "de-u52l1-abhangen", type: "vocab", front: "abhängen", reading: "abhangen", meaning: "to depend", example: { jp: "Ob wir morgen fahren, hängt vom Wetter ab und nicht von uns.", en: "Whether we travel tomorrow depends on the weather and not on us." }, drill: { jp: "Es kann vom Wetter abhängen", en: "It can depend on the weather" }, accept: ["to depend", "depend", "to be dependent", "to hinge on", "to rely on"], hint: "ab + hängen: to hang off something. von etwas abhängen, and separable — es hängt davon ab." },
        { id: "de-u52l1-beeinflussen", type: "vocab", front: "beeinflussen", reading: "beeinflussen", meaning: "to influence", example: { jp: "Das Wetter beeinflusst meine Laune stärker, als ich zugeben will.", en: "The weather influences my mood more strongly than I want to admit." }, drill: { jp: "Die Zeitungen beeinflussen viele Kinder", en: "The newspapers influence many children" }, accept: ["to influence", "influence", "to affect", "affect", "to have an effect on"], hint: "be- + Einfluss, from fließen (to flow): what flows into a thing. Inseparable — es beeinflusst mich." },
        { id: "de-u52l1-deranlass", type: "vocab", front: "der Anlass", reading: "deranlass", meaning: "the occasion", example: { jp: "Der Anlass für den Streit war eine alte Rechnung.", en: "The trigger for the quarrel was an old bill." }, drill: { jp: "Der Anlass war eine alte Rechnung", en: "The occasion was an old bill" }, accept: ["occasion", "the occasion", "trigger", "the trigger", "cause", "reason"], hint: "NOT die Ursache (u34), the deep cause — der Anlass is the immediate trigger, the thing that set it off. aus diesem Anlass = on this occasion." },
      ],
    },
    {
      id: "de-u52l2",
      unit: 52,
      lesson: 2,
      title: "Die Folge",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Follow the chain to the other end: say what follows from something, what set it off, and what it leads to.",
      items: [
        { id: "de-u52l2-diefolge", type: "vocab", front: "die Folge", reading: "diefolge", meaning: "the consequence", example: { jp: "Die Folge war, dass wir den ganzen Tag am Bahnhof warten mussten.", en: "The consequence was that we had to wait at the station all day." }, drill: { jp: "Die Folge kommt am Ende", en: "The consequence comes at the end" }, accept: ["consequence", "the consequence", "result", "the result", "outcome", "the outcome", "episode"], hint: "From folgen (to follow): what follows. Folgen haben = to have consequences. It is also a TV episode." },
        { id: "de-u52l2-folglich", type: "vocab", front: "folglich", reading: "folglich", meaning: "consequently", example: { jp: "Der Zug war sehr spät, folglich hatten wir für das Essen keine Zeit mehr.", en: "The train was very late, so we no longer had time for the meal." }, drill: { jp: "Folglich müssen wir hier warten", en: "Consequently we have to wait here" }, accept: ["consequently", "therefore", "so", "as a result", "accordingly", "hence"], hint: "die Folge + -lich. More formal than also or deshalb — the word of written German and the news." },
        { id: "de-u52l2-daher", type: "vocab", front: "daher", reading: "daher", meaning: "hence", example: { jp: "Der Regen war die ganze Nacht sehr stark, daher ist die Straße heute feucht.", en: "The rain was very heavy all night, so the street is damp today." }, drill: { jp: "Daher bleiben wir zu Hause", en: "That is why we are staying at home" }, accept: ["therefore", "hence", "for that reason", "that's why", "so", "thus"], hint: "Literally 'from there'. Same job as deshalb and darum, with a slightly more written feel." },
        { id: "de-u52l2-fuhren", type: "vocab", front: "führen", reading: "fuhren", meaning: "to lead to", example: { jp: "Zu wenig Geld führt zu Streit, und das ist bei uns auch so.", en: "Too little money leads to arguments, and that is the same with us." }, drill: { jp: "Zwei Wege führen zum Bahnhof", en: "Two paths lead to the station" }, accept: ["to lead", "lead", "to lead to", "to result in", "to guide", "to run"], hint: "Both senses: der Weg führt zum Bahnhof (goes there), and zu etwas führen = to result in something." },
        { id: "de-u52l2-dieauswirkung", type: "vocab", front: "die Auswirkung", reading: "dieauswirkung", meaning: "the effect", example: { jp: "Die Auswirkung war sehr groß, obwohl der Grund ganz klein war.", en: "The effect was very big, although the reason was quite small." }, drill: { jp: "Die Auswirkung zeigt sich im Herbst", en: "The effect shows in autumn" }, accept: ["effect", "the effect", "impact", "the impact", "consequence", "the consequence", "repercussion"], hint: "aus + wirken: the effect a thing works outwards. Usually plural in the news: die Auswirkungen." },
        { id: "de-u52l2-auslosen", type: "vocab", front: "auslösen", reading: "auslosen", meaning: "to trigger", example: { jp: "Ein falsches Wort hat den ganzen Streit ausgelöst, und danach war es ruhig.", en: "A wrong word triggered the whole argument, and afterwards it was quiet." }, drill: { jp: "Zwei Worte können Streit auslösen", en: "Two words can trigger an argument" }, accept: ["to trigger", "trigger", "to set off", "set off", "to spark", "spark", "to cause"], hint: "aus + lösen: to loose something off. Of alarms, reactions and arguments — the exact moment a thing starts." },
      ],
    },
    {
      id: "de-u52l3",
      unit: 52,
      lesson: 3,
      title: "Bedingung und Zweck",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Set out what has to be true first, what a thing is actually for, and what makes it possible at all.",
      items: [
        { id: "de-u52l3-dievoraussetzung", type: "vocab", front: "die Voraussetzung", reading: "dievoraussetzung", meaning: "the prerequisite", example: { jp: "Gute Noten sind die Voraussetzung für einen Platz an der Universität.", en: "Good grades are the prerequisite for a place at the university." }, drill: { jp: "Die Voraussetzung ist ein Ausweis", en: "The prerequisite is an ID card" }, accept: ["prerequisite", "the prerequisite", "requirement", "the requirement", "precondition", "the precondition", "condition"], hint: "voraus (ahead) + setzen: what has to be put in place first. unter der Voraussetzung, dass… = provided that…" },
        { id: "de-u52l3-dadurch", type: "vocab", front: "dadurch", reading: "dadurch", meaning: "thereby", example: { jp: "Wir haben jeden Tag geübt und dadurch in kurzer Zeit sehr viel gelernt.", en: "We practised every day and thereby learned a great deal in a short time." }, drill: { jp: "Dadurch sparen wir viel Geld", en: "That way we save a lot of money" }, accept: ["thereby", "through that", "by doing so", "as a result", "that way", "by that"], hint: "da + durch: 'through that'. It names the MEANS; deshalb names the reason. The pair is worth keeping straight." },
        { id: "de-u52l3-ermoglichen", type: "vocab", front: "ermöglichen", reading: "ermoglichen", meaning: "to make possible", example: { jp: "Das Geld ermöglicht uns einen Urlaub, den wir seit Jahren planen.", en: "The money makes possible a holiday that we have been planning for years." }, drill: { jp: "Computer ermöglichen schnelles Lernen", en: "Computers make fast learning possible" }, accept: ["to make possible", "make possible", "to enable", "enable", "to allow", "allow"], hint: "er- + möglich: to make a thing possible. jemandem etwas ermöglichen — the person takes the dative." },
        { id: "de-u52l3-derumstand", type: "vocab", front: "der Umstand", reading: "derumstand", meaning: "the circumstance", example: { jp: "Unter den Umständen können wir den Termin am Freitag nicht halten.", en: "Under the circumstances we can't keep the appointment on Friday." }, drill: { jp: "Der Umstand macht uns Probleme", en: "The circumstance causes us problems" }, accept: ["circumstance", "the circumstance", "fact", "the fact", "situation", "the situation"], hint: "um + stehen: what stands around an event. Mostly plural: unter diesen Umständen = under these circumstances." },
        { id: "de-u52l3-notwendig", type: "vocab", front: "notwendig", reading: "notwendig", meaning: "necessary", example: { jp: "Es ist notwendig, den Ausweis zu zeigen, denn ohne ihn geht hier nichts.", en: "It is necessary to show your ID, because nothing works here without it." }, drill: { jp: "Ein Ausweis ist hier notwendig", en: "An ID card is necessary here" }, accept: ["necessary", "needed", "required", "essential", "indispensable"], hint: "die Not (need) + wendig: what turns need away. Stronger than wichtig — without it the thing does not work at all." },
        { id: "de-u52l3-derzweck", type: "vocab", front: "der Zweck", reading: "derzweck", meaning: "the purpose", example: { jp: "Der Zweck der Übung ist, dass wir am Ende schneller sprechen können.", en: "The purpose of the exercise is that we can speak faster at the end." }, drill: { jp: "Der Zweck steht in der Anleitung", en: "The purpose is in the instructions" }, accept: ["purpose", "the purpose", "point", "the point", "aim", "the aim", "objective"], hint: "What a thing is FOR. zu welchem Zweck? = for what purpose? Das hat keinen Zweck = there is no point." },
      ],
    },
    {
      id: "de-u52l4",
      unit: 52,
      lesson: 4,
      title: "Vorteil und Nachteil",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Weigh the two sides of a decision: name the advantage and the drawback, say who it affects, and point at what actually matters.",
      items: [
        { id: "de-u52l4-dervorteil", type: "vocab", front: "der Vorteil", reading: "dervorteil", meaning: "the advantage", example: { jp: "Der Vorteil der Bahn ist, dass man im Zug lesen und arbeiten kann.", en: "The advantage of the railway is that you can read and work on the train." }, drill: { jp: "Der Vorteil ist der Preis", en: "The advantage is the price" }, accept: ["advantage", "the advantage", "benefit", "the benefit", "upside", "the upside", "plus"], hint: "vor + der Teil: the part out in front. einen Vorteil haben; im Vorteil sein = to be in the better position." },
        { id: "de-u52l4-dernachteil", type: "vocab", front: "der Nachteil", reading: "dernachteil", meaning: "the disadvantage", example: { jp: "Der Nachteil ist der hohe Preis, aber der Vorteil ist die Zeit.", en: "The disadvantage is the high price, but the advantage is the time." }, drill: { jp: "Der Nachteil ist die Zeit", en: "The disadvantage is the time" }, accept: ["disadvantage", "the disadvantage", "drawback", "the drawback", "downside", "the downside", "minus"], hint: "nach + der Teil: the part left behind. The exact mirror of der Vorteil, built from the same piece." },
        { id: "de-u52l4-dierolle", type: "vocab", front: "die Rolle", reading: "dierolle", meaning: "the role", example: { jp: "Das Geld spielt hier keine Rolle, aber die Zeit spielt eine große Rolle.", en: "Money plays no role here, but time plays a big role." }, drill: { jp: "Die Rolle bleibt für uns wichtig", en: "The role stays important for us" }, accept: ["role", "the role", "part", "the part"], hint: "eine Rolle spielen = to play a part, and it is the everyday way to say something matters: Das spielt keine Rolle." },
        { id: "de-u52l4-betreffen", type: "vocab", front: "betreffen", reading: "betreffen", meaning: "to concern", example: { jp: "Die neue Regel betrifft auch uns, weil wir oft am Wochenende arbeiten.", en: "The new rule concerns us too, because we often work at the weekend." }, drill: { jp: "Die neuen Regeln betreffen uns", en: "The new rules concern us" }, accept: ["to concern", "concern", "to affect", "affect", "to apply to", "to be about"], hint: "be- + treffen (to meet): to meet somebody head-on. was das betrifft = as far as that is concerned." },
        { id: "de-u52l4-derhinweis", type: "vocab", front: "der Hinweis", reading: "derhinweis", meaning: "the pointer", example: { jp: "Der Hinweis auf der Karte hat uns geholfen, den richtigen Weg zu finden.", en: "The pointer on the map helped us find the right way." }, drill: { jp: "Der Hinweis steht auf der Karte", en: "The pointer is on the map" }, accept: ["pointer", "the pointer", "hint", "the hint", "tip", "the tip", "clue", "the clue", "note", "the note"], hint: "hin + weisen (to point): a pointer towards something. einen Hinweis geben = to give somebody a tip." },
        { id: "de-u52l4-wesentlich", type: "vocab", front: "wesentlich", reading: "wesentlich", meaning: "essential", example: { jp: "Der wesentliche Grund für den Streit war Geld und nicht die Arbeit.", en: "The essential reason for the argument was money and not the work." }, drill: { jp: "Der Grund ist wesentlich", en: "The reason is essential" }, accept: ["essential", "fundamental", "substantial", "significant", "considerably", "much"], hint: "das Wesen (the essence). As an adverb it means 'considerably': wesentlich besser = considerably better." },
      ],
    },
  ],
};
