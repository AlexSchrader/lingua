// NO Unit 53 — Sammenligning og grad ("Comparison and degree") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Comparison and degree"; retitled per CLAUDE.md → "No front
// language". Conventions: unit1.js §1–§9 (language) + unit51.js B1–B8 (band).
//
// ⚠ A2 TAUGHT THE COMPARATIVE FORMS THEMSELVES — bedre/best, verre/verst,
// mer/mest, mindre/minst, større/størst, eldre, enn, like… som is NOT taught but
// `som` and `som om` are. So u53 does NOT re-teach -ere/-est. It teaches what a
// B1 speaker does AROUND a comparison: the measuring frames (l1), the two-sided
// jo … desto construction (l2), the intensity dial that sits in front of any
// adjective (l3), and the vocabulary of the extremes (l4).
//
// ⚠ `like` IS A DELIBERATE HOMOGRAPH and is taught anyway. A1 teaches `å like`,
// to like; this `like` is the comparison adverb in like gammel som. Same string,
// unrelated words, and the learner cannot make a Norwegian comparison without it.
// The two never collide in practice because this one never takes å and never
// conjugates — its hint says exactly that. (unit1.js records the same call for
// Japanese に; this is the Norwegian instance of it.)
//
// FIRST FEMININE of the unit: this unit introduces NO feminine noun — only
// et flertall (neuter) and the adverbs/adjectives. No en-/ei- note is owed.
//
// ø IN `reading`: this unit has none.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT53 = {
  id: "no-u53",
  lang: "no",
  title: "Sammenligning og grad",
  order: 53,
  stage: "b1",
  lessons: [
    // Lesson 1: the frames you hold two things up in. i forhold til is the neutral
    // measuring stick and comes second, right after the verb it belongs to.
    {
      id: "no-u53l1",
      unit: 53,
      lesson: 1,
      title: "Å sammenligne",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Hold two things up against each other — compare them outright, measure one relative to the other, and say something is equivalent, double, half, or what the majority does.",
      items: [
        { id: "no-u53l1-asammenligne", type: "vocab", front: "å sammenligne", reading: "asammenligne", meaning: "to compare", example: { jp: "Vi sammenligner prisene i to butikker.", en: "We compare the prices in two shops." }, drill: { jp: "Det er lett å sammenligne to priser", en: "It is easy to compare two prices" }, accept: ["compare", "to contrast", "contrast", "to hold up against"], hint: "SAM-men-lig-ne. Sammen plus ligne, to resemble — to set them side by side and see what is alike. Present sammenligner, past sammenlignet. The frame is å sammenligne X MED Y." },
        { id: "no-u53l1-iforholdtil", type: "vocab", front: "i forhold til", reading: "iforholdtil", meaning: "compared to", example: { jp: "Bergen er liten i forhold til Oslo.", en: "Bergen is small compared to Oslo." }, drill: { jp: "Prisen er høy i forhold til andre butikker", en: "The price is high compared to other shops" }, accept: ["in relation to", "relative to", "against", "as against"], hint: "i for-HOLD til. Three words, one preposition, built on et forhold — a relation. It is the neutral measuring stick: Bergen er liten i forhold til Oslo says nothing about whether small is good." },
        { id: "no-u53l1-tilsvarende", type: "vocab", front: "tilsvarende", reading: "tilsvarende", meaning: "equivalent", example: { jp: "Vi fant et tilsvarende hus i en annen by.", en: "We found an equivalent house in another city." }, drill: { jp: "Han kjøpte et tilsvarende produkt", en: "He bought an equivalent product" }, accept: ["corresponding", "comparable", "similar", "matching"], hint: "til-SVA-ren-de. Til plus svare, to answer to — the thing that answers to the other one. Like felles, it never takes an ending." },
        { id: "no-u53l1-dobbelt", type: "vocab", front: "dobbelt", reading: "dobbelt", meaning: "double", example: { jp: "Han betalte dobbelt for den samme billetten.", en: "He paid double for the same ticket." }, drill: { jp: "Hun betalte dobbelt for rommet", en: "She paid double for the room" }, accept: ["twice as much", "twofold", "twice", "double the amount"], hint: "DOB-belt. ⚠ Dobbelt så dyr is twice as expensive — Norwegian uses SÅ where English says \"as\". Before a noun the form is dobbel: en dobbel porsjon." },
        { id: "no-u53l1-halvparten", type: "vocab", front: "halvparten", reading: "halvparten", meaning: "half of it", example: { jp: "Halvparten av elevene kom for sent.", en: "Half of the pupils arrived late." }, drill: { jp: "Halvparten av pengene er borte", en: "Half of the money is gone" }, accept: ["half", "the half", "one half"], hint: "HALV-par-ten. ⚠ It is ALWAYS definite — nobody says *en halvpart in ordinary Norwegian, so learn it with the -en already attached. Halv plus part, the half part, and it is always halvparten AV something." },
        { id: "no-u53l1-etflertall", type: "vocab", front: "et flertall", reading: "etflertall", meaning: "majority", example: { jp: "Et flertall i Norge liker å gå på ski.", en: "A majority in Norway like to go skiing." }, drill: { jp: "Et flertall stemte for forslaget", en: "A majority voted for the proposal" }, accept: ["a majority", "the majority", "most of them", "most"], hint: "FLER-tall. Neuter: definite flertallet. Flere plus tall, the greater number. ⚠ It has a second life in grammar: flertall is also the PLURAL of a noun, and entall is the singular." },
      ],
    },
    // Lesson 2: jo … desto, which is the one comparison construction an English
    // speaker gets wrong every time, because the jo-half is SUBORDINATE (verb at
    // the end) and the desto-half is V2 (verb second). Both halves are modelled in
    // both items' examples and drills, four times over.
    {
      id: "no-u53l2",
      unit: 53,
      lesson: 2,
      title: "Jo mer, desto bedre",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Tie two amounts together so one moves with the other — jo … desto — and say something is equally so, steadily becoming so, gradually getting there, or exactly the other way round.",
      items: [
        { id: "no-u53l2-jo", type: "vocab", front: "jo", reading: "jo", meaning: "the more", example: { jp: "Jo mer du leser, desto bedre blir du.", en: "The more you read, the better you get." }, drill: { jp: "Jo lenger vi venter desto verre", en: "The longer we wait the worse" }, accept: ["the", "the more", "all the"], hint: "YOO. It opens the first half of the pair jo … desto. ⚠ The jo-clause is SUBORDINATE, so its verb goes to the end — Jo mer du LESER — and then desto flips the second half back to V2: desto BEDRE blir du. Jo has two other lives: \"yes\" answering a negative question, and \"you know\" dropped into the middle of a sentence." },
        { id: "no-u53l2-desto", type: "vocab", front: "desto", reading: "desto", meaning: "the better", example: { jp: "Jo tidligere vi går, desto bedre er det.", en: "The earlier we leave, the better it is." }, drill: { jp: "Jo mindre du sier desto bedre", en: "The less you say the better" }, accept: ["the", "all the", "so much the"], hint: "DES-to. The second half of the jo-pair, and it takes V2: desto BEDRE er det. You will also hear jo … jo, which is the same construction said faster." },
        { id: "no-u53l2-like", type: "vocab", front: "like", reading: "like", meaning: "equally", example: { jp: "Hun er like gammel som broren sin.", en: "She is the same age as her brother." }, drill: { jp: "Han er like høy som meg", en: "He is as tall as me" }, accept: ["as", "just as", "equally as", "the same amount"], hint: "LI-ke. ⚠ Spelled exactly like å like, to like, and completely unrelated to it — this one is an adverb, never takes å and never conjugates. The frame is like X SOM Y: like gammel som, like dyr som. For \"not as … as\" Norwegian switches to ikke så … som." },
        { id: "no-u53l2-etterhvert", type: "vocab", front: "etter hvert", reading: "etterhvert", meaning: "gradually", example: { jp: "Etter hvert lærer du å forstå alt.", en: "Gradually you learn to understand everything." }, drill: { jp: "Etter hvert blir det bedre", en: "Gradually it gets better" }, accept: ["eventually", "in time", "bit by bit", "as time goes on"], hint: "et-ter VÆRT. Two words, one adverb — literally \"after each\". It fronts the clause and takes V2 with it: Etter hvert LÆRER du det. You will see it written etterhvert too, but two words is the recommended spelling." },
        { id: "no-u53l2-omvendt", type: "vocab", front: "omvendt", reading: "omvendt", meaning: "the other way round", example: { jp: "Han hjelper meg, og omvendt hjelper jeg ham.", en: "He helps me, and the other way round I help him." }, drill: { jp: "Det er omvendt i Norge", en: "It is the other way round in Norway" }, accept: ["conversely", "vice versa", "inverted", "reversed"], hint: "OM-vent. Om plus vende, to turn about — turned around. Tacked on at the end of a sentence, og omvendt is the everyday \"and vice versa\"." },
      ],
    },
    // Lesson 3: the intensity dial. Ordered weakest to strongest on purpose —
    // knapt, nokså, temmelig, vesentlig, svært — with overhodet last because it is
    // the one that only works with a negative.
    {
      id: "no-u53l3",
      unit: 53,
      lesson: 3,
      title: "Hvor mye og hvor lite",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Dial an adjective up or down precisely — call something substantial, barely so, rather so, very so, fairly so, or not so in the slightest.",
      items: [
        { id: "no-u53l3-vesentlig", type: "vocab", front: "vesentlig", reading: "vesentlig", meaning: "substantial", example: { jp: "Det er en vesentlig forskjell på de to husene.", en: "There is a substantial difference between the two houses." }, drill: { jp: "Dette er en vesentlig forskjell", en: "This is a substantial difference" }, accept: ["significant", "considerable", "essential", "material"], hint: "ve-SENT-li — silent g. From vesen, the nature of a thing: what belongs to its nature, and so what matters. Neuter vesentlig, plural vesentlige. As an adverb it means considerably: vesentlig dyrere." },
        { id: "no-u53l3-knapt", type: "vocab", front: "knapt", reading: "knapt", meaning: "barely", example: { jp: "Jeg kjenner ham knapt, og vi har snakket én gang.", en: "I barely know him, and we have spoken once." }, drill: { jp: "Han sier knapt et ord", en: "He barely says a word" }, accept: ["hardly", "scarcely", "only just"], hint: "KNAPT — say the k, Norwegian does. From knapp, tight or in short supply: there is only just enough. En knapp is a button, and the two words only look alike." },
        { id: "no-u53l3-temmelig", type: "vocab", front: "temmelig", reading: "temmelig", meaning: "fairly", example: { jp: "Det er temmelig kaldt ute i dag.", en: "It is rather cold outside today." }, drill: { jp: "Oppgaven er temmelig lang", en: "The assignment is rather long" }, accept: ["fairly", "pretty", "quite", "somewhat", "rather"], hint: "TEM-me-li — silent g. It sits above ganske and below veldig: temmelig kaldt is colder than ganske kaldt. Never stands alone — always in front of an adjective." },
        { id: "no-u53l3-svaert", type: "vocab", front: "svært", reading: "svaert", meaning: "highly", example: { jp: "Boka er svært god, og alle bør lese den.", en: "The book is very good, and everyone should read it." }, drill: { jp: "Været er svært dårlig i dag", en: "The weather is very bad today" }, accept: ["extremely", "highly", "greatly", "really", "very"], hint: "SVÆRT. Stronger than veldig and one step short of altfor. It is the neuter of svær, huge — so you are literally saying \"hugely\". It stays svært whatever it describes." },
        { id: "no-u53l3-overhodet", type: "vocab", front: "overhodet", reading: "overhodet", meaning: "at all", example: { jp: "Han sa overhodet ingenting om saka.", en: "He said nothing at all about the matter." }, drill: { jp: "Jeg forstår overhodet ingenting her", en: "I understand nothing at all here" }, accept: ["whatsoever", "in the slightest", "altogether", "at all"], hint: "O-ver-ho-de. ⚠ It lives with a negative: overhodet ikke, overhodet ingenting — not at all, nothing whatsoever. Over plus hode, over the head: taking the whole thing in at once." },
      ],
    },
    // Lesson 4: the edges. færre leads because it is the one an English speaker
    // gets wrong — "less" covers both færre and mindre in English and neither in
    // Norwegian.
    {
      id: "no-u53l4",
      unit: 53,
      lesson: 4,
      title: "Ytterpunkter",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Reach the edges of a comparison — say there are fewer of something, call a thing one of a kind or clearly superior, surpass a result, tell two things apart, and name the flat opposite.",
      items: [
        { id: "no-u53l4-faerre", type: "vocab", front: "færre", reading: "faerre", meaning: "fewer", example: { jp: "Det er færre biler på veien om søndagen.", en: "There are fewer cars on the road on Sundays." }, drill: { jp: "Det er færre elever her nå", en: "There are fewer pupils here now" }, accept: ["fewer of them", "a smaller number", "less"], hint: "FÆR-re. The comparative of få, few — and it counts things you can COUNT. For amounts you cannot count, Norwegian uses mindre: færre biler, mindre trafikk. English blurs both into \"less\"; Norwegian never does." },
        { id: "no-u53l4-enestaende", type: "vocab", front: "enestående", reading: "enestaende", meaning: "one of a kind", example: { jp: "Kunsten i museet er enestående.", en: "The art in the museum is one of a kind." }, drill: { jp: "Dette er et enestående tilbud", en: "This is an outstanding offer" }, accept: ["outstanding", "unique", "exceptional", "remarkable"], hint: "E-ne-staw-en-de. Ene, alone, plus stående, standing — it stands on its own with nothing next to it. No endings, ever, in any gender." },
        { id: "no-u53l4-overlegen", type: "vocab", front: "overlegen", reading: "overlegen", meaning: "superior", example: { jp: "Den nye metoden er overlegen.", en: "The new method is superior." }, drill: { jp: "Den gamle metoden er overlegen", en: "The old method is superior" }, accept: ["far better", "dominant", "commanding", "head and shoulders above"], hint: "O-ver-le-gen. Neuter overlegent, plural overlegne. Two senses that sit uncomfortably close: better than everything else, and acting like you know it — en overlegen mine is a smug look." },
        { id: "no-u53l4-aoverga", type: "vocab", front: "å overgå", reading: "aoverga", meaning: "to surpass", example: { jp: "Resultatet overgår alt vi håpet på.", en: "The result surpasses everything we hoped for." }, drill: { jp: "Det er lett å overgå det gamle resultatet", en: "It is easy to surpass the old result" }, accept: ["surpass", "to exceed", "exceed", "to outdo", "to beat"], hint: "O-ver-gaw. Over plus gå, to go past. Present overgår, past overgikk. Å overgå seg selv is to outdo yourself, which Norwegians say more often about a cake than a career." },
        { id: "no-u53l4-askille", type: "vocab", front: "å skille", reading: "askille", meaning: "to tell apart", example: { jp: "Jeg klarer ikke å skille de to brødrene.", en: "I cannot tell the two brothers apart." }, drill: { jp: "Det er lett å skille de to", en: "It is easy to tell the two apart" }, accept: ["distinguish", "to separate", "separate", "to tell apart"], hint: "SHIL-le. Present skiller, past skilte. Two jobs at once: to separate things physically, and to tell them apart in your head. Å skille seg ut is to stand out; å skille seg is to get divorced." },
        { id: "no-u53l4-motsatt", type: "vocab", front: "motsatt", reading: "motsatt", meaning: "opposite", example: { jp: "Han gikk i motsatt retning av oss.", en: "He walked in the opposite direction from us." }, drill: { jp: "Hun gikk i motsatt retning", en: "She walked in the opposite direction" }, accept: ["contrary", "reverse", "the other way", "inverse"], hint: "MOT-satt. Mot plus satt, set against. Det motsatte is the opposite thing: han sa det motsatte. The ending stays motsatt in the neuter and motsatte in the plural." },
      ],
    },
  ],
};
