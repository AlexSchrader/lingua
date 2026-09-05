// NO Unit 2 — Hilsener ("Greetings") — A1
// Hello and goodbye, the how-are-you exchange, the politeness set, and parting.
// Conventions are declared in no/unit1.js and bind every unit — the en/ei/et noun
// front, the å-infinitive verb front, the hand-folded ø readings, and V2.
//
// V2 STARTS HERE, and it is modelled deliberately rather than explained:
//   "Kanskje er Erling norsk."   fronted adverb → verb → subject
//   "Snart ser vi Erling."       fronted adverb → verb → subject
//   "Kjenner du Erling?"         yes/no question by inversion, no helper verb
//   "Jeg er ikke norsk."         ikke sits AFTER the finite verb
// A learner who meets these forty times before the grammar unit arrives does not
// need the grammar unit to tell them the verb is second.
//
// FIXED FORMULAS (unit1.js §7): god morgen, god kveld, ha det and vær så snill are
// taught as whole phrases. `god` is taught alone in u1 and `å være` likewise — these
// are frozen greetings, one thing in the learner's mouth, not a re-teach.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT2 = {
  id: "no-u2",
  lang: "no",
  title: "Hilsener",
  order: 2,
  stage: "a1",
  lessons: [
    {
      id: "no-u2l1",
      unit: 2,
      lesson: 1,
      title: "Hello and goodbye",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Greet someone at any time of day, say goodbye, and ask a yes/no question by putting the verb first: Er du norsk?",
      items: [
        { id: "no-u2l1-hei", type: "vocab", front: "hei", reading: "hei", meaning: "hi", example: { jp: "Hei, er du norsk?", en: "Hi, are you Norwegian?" }, accept: ["hello", "hey", "hi there"], drill: { jp: "Hei Erling hvordan går det", en: "Hi Erling how are you" }, hint: "The all-purpose greeting, morning to night, friend or stranger. Doubled — hei hei — it is warmer still. Note the question: no do, no does, just the verb first." },
        { id: "no-u2l1-godmorgen", type: "vocab", front: "god morgen", reading: "godmorgen", meaning: "good morning", example: { jp: "God morgen, Erling!", en: "Good morning, Erling!" }, accept: ["morning", "good morning!"], drill: { jp: "God morgen Kari", en: "Good morning Kari" }, hint: "Remember the silent d in god: goo-MOR-ern. Used until about eleven, then people switch back to hei." },
        { id: "no-u2l1-godkveld", type: "vocab", front: "god kveld", reading: "godkveld", meaning: "good evening", example: { jp: "God kveld og velkommen!", en: "Good evening and welcome!" }, accept: ["evening", "good evening!"], drill: { jp: "God kveld og velkommen", en: "Good evening and welcome" }, hint: "kveld is the evening — the stretch after dinner. God natt is what you say when someone is actually going to bed, not on arrival." },
        { id: "no-u2l1-hadet", type: "vocab", front: "ha det", reading: "hadet", meaning: "bye", example: { jp: "Ha det, Erling!", en: "Bye, Erling!" }, accept: ["goodbye", "see you", "bye bye"], drill: { jp: "Ha det Erling", en: "Bye Erling" }, hint: "Literally \"have it\" — short for ha det bra, \"have it good\". Say ha-DE, with det's silent t." },
        { id: "no-u2l1-du", type: "vocab", front: "du", reading: "du", meaning: "you", example: { jp: "Kjenner du Erling?", en: "Do you know Erling?" }, accept: ["you (singular)", "thou"], drill: { jp: "Kjenner du Kari", en: "Do you know Kari" }, hint: "Norwegians use du with everyone — teachers, strangers, the prime minister. There is a formal De, and using it would sound like a costume drama." },
        { id: "no-u2l1-velkommen", type: "vocab", front: "velkommen", reading: "velkommen", meaning: "welcome", example: { jp: "Hei og velkommen!", en: "Hi and welcome!" }, accept: ["welcome!"], drill: { jp: "Velkommen Erling og Kari", en: "Welcome Erling and Kari" }, hint: "One word made of two: vel (well) + kommen (come) — the same build as English, welded together." },
      ],
    },
    {
      id: "no-u2l2",
      unit: 2,
      lesson: 2,
      title: "How are you?",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Ask how someone is and answer — hvordan går det? Bare bra, takk — and say what is NOT the case, with ikke after the verb.",
      items: [
        { id: "no-u2l2-hvordan", type: "vocab", front: "hvordan", reading: "hvordan", meaning: "how", example: { jp: "Hvordan går det, Erling?", en: "How are you, Erling?" }, accept: ["in what way", "how?"], drill: { jp: "Hvordan går det Kari", en: "How are you Kari" }, hint: "Silent h again: VOR-dan. Hvordan går det is literally \"how goes it\" — built from words you already have, hvordan + å gå + det." },
        { id: "no-u2l2-bra", type: "vocab", front: "bra", reading: "bra", meaning: "well", example: { jp: "Bare bra, takk!", en: "Just fine, thanks!" }, accept: ["good", "fine", "great", "okay"], drill: { jp: "Det går bra takk", en: "It is going well thanks" }, hint: "The standard answer is bare bra — \"only good\". Understating it is the Norwegian default; det går bra covers everything from fine to surviving." },
        { id: "no-u2l2-bare", type: "vocab", front: "bare", reading: "bare", meaning: "only", example: { jp: "Jeg lærer bare norsk.", en: "I am only learning Norwegian." }, accept: ["just", "merely", "simply"], drill: { jp: "Jeg lærer bare norsk", en: "I am only learning Norwegian" }, hint: "BAH-re. Also softens a request the way English \"just\" does: bare gi meg ei skje." },
        { id: "no-u2l2-takk", type: "vocab", front: "takk", reading: "takk", meaning: "thank you", example: { jp: "Takk, det er hyggelig.", en: "Thanks, that is nice." }, accept: ["thanks", "thank you!", "cheers"], drill: { jp: "Takk det er hyggelig", en: "Thanks that is nice" }, hint: "Tusen takk is \"a thousand thanks\" and is the warm version. Takk also means \"yes please\" when you are offered something." },
        { id: "no-u2l2-ikke", type: "vocab", front: "ikke", reading: "ikke", meaning: "not", example: { jp: "Jeg er ikke norsk.", en: "I am not Norwegian." }, accept: ["don't", "doesn't", "isn't"], drill: { jp: "Jeg kjenner ikke Erling", en: "I do not know Erling" }, hint: "IK-ke, and it goes AFTER the verb, never before: jeg er ikke, jeg kjenner ikke. This is Nynorsk's ikkje — the Bokmål form is ikke." },
        { id: "no-u2l2-veldig", type: "vocab", front: "veldig", reading: "veldig", meaning: "very", example: { jp: "Erling er veldig hyggelig.", en: "Erling is very nice." }, accept: ["really", "extremely", "so"], drill: { jp: "Kari er veldig hyggelig", en: "Kari is very nice" }, hint: "Another silent -ig g: VEL-di. Norwegians use it less than English uses \"very\" — veldig bra is genuine praise." },
      ],
    },
    {
      id: "no-u2l3",
      unit: 2,
      lesson: 3,
      title: "Yes, no, please, sorry",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say yes and no, ask for something politely, and apologise — and open a sentence with kanskje, which normally sends the verb ahead of the subject.",
      items: [
        { id: "no-u2l3-ja", type: "vocab", front: "ja", reading: "ja", meaning: "yes", example: { jp: "Ja, jeg er norsk.", en: "Yes, I am Norwegian." }, accept: ["yeah", "yep", "yes!"], drill: { jp: "Ja jeg er norsk", en: "Yes I am Norwegian" }, hint: "YAH — j is always a y. To contradict a negative question there is a special yes, jo: \"Er du ikke norsk?\" \"Jo!\"" },
        { id: "no-u2l3-nei", type: "vocab", front: "nei", reading: "nei", meaning: "no", example: { jp: "Nei, jeg kjenner ikke Erling.", en: "No, I do not know Erling." }, accept: ["nope", "no!"], drill: { jp: "Nei det er ikke bra", en: "No that is not good" }, hint: "The ei spelling is the diphthong of \"day\": NAY. Same vowel as hei — and as the -eg of jeg and meg." },
        { id: "no-u2l3-unnskyld", type: "vocab", front: "unnskyld", reading: "unnskyld", meaning: "excuse me", example: { jp: "Unnskyld, hvor er en kafé?", en: "Excuse me, where is a café?" }, accept: ["sorry", "pardon", "I'm sorry", "pardon me"], drill: { jp: "Unnskyld hvor er en kafé", en: "Excuse me where is a café" }, hint: "sk before y is the broad sh again: UNN-shuel. Use it to get attention and to apologise for something small." },
        { id: "no-u2l3-vaersasnill", type: "vocab", front: "vær så snill", reading: "vaersasnill", meaning: "please", example: { jp: "Vær så snill, gi meg ei skje.", en: "Please, give me a spoon." }, accept: ["please!", "be so kind"], drill: { jp: "Vær så snill gi meg ei skje", en: "Please give me a spoon" }, hint: "Literally \"be so kind\". Norwegian has no everyday word for please — most of the time politeness is carried by tone, or by takk afterwards." },
        { id: "no-u2l3-kanskje", type: "vocab", front: "kanskje", reading: "kanskje", meaning: "maybe", example: { jp: "Kanskje er Erling norsk.", en: "Maybe Erling is Norwegian." }, accept: ["perhaps", "possibly", "might"], drill: { jp: "Kanskje er Kari norsk", en: "Maybe Kari is Norwegian" }, hint: "KAN-she, with the broad skj. Watch the word order: kanskje takes the first slot, so er comes SECOND and Erling moves behind it. kanskje is the one adverb that also allows Kanskje Erling er norsk — both are correct, and you will hear both." },
        { id: "no-u2l3-abeklage", type: "vocab", front: "å beklage", reading: "abeklage", meaning: "to be sorry", example: { jp: "Jeg beklager, det er ikke bra.", en: "I am sorry, that is not good." }, accept: ["be sorry", "to apologize", "apologize", "to regret"], drill: { jp: "Det er viktig å beklage", en: "It is important to apologise" }, hint: "Heavier than unnskyld — this is the apology you give when something actually went wrong. Jeg beklager is the whole sentence." },
      ],
    },
    {
      id: "no-u2l4",
      unit: 2,
      lesson: 4,
      title: "See you again",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Talk about meeting people again — vi, snart, igjen — and open a sentence with an adverb, which sends the verb ahead of the subject.",
      items: [
        { id: "no-u2l4-ase", type: "vocab", front: "å se", reading: "ase", meaning: "to see", example: { jp: "Jeg ser Erling.", en: "I see Erling." }, accept: ["see", "to look", "to watch"], drill: { jp: "Det er hyggelig å se deg", en: "It is nice to see you" }, hint: "Short and irregular in the past, but the present is the usual infinitive + r: ser. Vi ses — \"we'll be seeing each other\" — is the commonest goodbye of all." },
        { id: "no-u2l4-vi", type: "vocab", front: "vi", reading: "vi", meaning: "we", example: { jp: "Vi lærer norsk.", en: "We are learning Norwegian." }, accept: ["us"], drill: { jp: "Vi lærer norsk", en: "We are learning Norwegian" }, hint: "VEE. The verb does not change for it — jeg lærer, vi lærer, de lærer. One present-tense form for every person." },
        { id: "no-u2l4-snart", type: "vocab", front: "snart", reading: "snart", meaning: "soon", example: { jp: "Snart ser vi Erling.", en: "Soon we will see Erling." }, accept: ["shortly", "in a moment", "before long"], drill: { jp: "Snart ser vi Erling", en: "Soon we will see Erling" }, hint: "V2 in action: snart takes slot one, so ser comes second and vi lands behind it. Never \"Snart vi ser\"." },
        { id: "no-u2l4-amote", type: "vocab", front: "å møte", reading: "amote", meaning: "to meet", example: { jp: "Vi møter en venn.", en: "We are meeting a friend." }, accept: ["meet", "to encounter", "encounter"], drill: { jp: "Det er hyggelig å møte deg", en: "It is nice to meet you" }, hint: "MUR-te — ø again, and note the reading is written amote by hand, because ø is the one letter that will not fold to ASCII on its own." },
        { id: "no-u2l4-igjen", type: "vocab", front: "igjen", reading: "igjen", meaning: "again", example: { jp: "Vi møter Erling igjen.", en: "We are meeting Erling again." }, accept: ["once more", "left over", "remaining"], drill: { jp: "Vi møter Erling igjen", en: "We are meeting Erling again" }, hint: "The g is silent and the j is a y: i-YEN. It also means \"left over\" — det er ei skje igjen, there is one spoon left." },
        { id: "no-u2l4-envenn", type: "vocab", front: "en venn", reading: "envenn", meaning: "friend", example: { jp: "Erling er en god venn.", en: "Erling is a good friend." }, accept: ["a friend", "pal", "mate"], drill: { jp: "Erling er en venn", en: "Erling is a friend" }, hint: "Masculine, so the definite is vennen and the plural venner. Norwegians reserve venn for the real thing — an acquaintance is a kjenning." },
      ],
    },
  ],
};
