// DE Unit 31 — Persönlichkeit und Charakter (slot: personality) — A2
// Block 2 (u31–u40). Conventions: see de/unit1.js.
//
// BOUNDARY, and it is a tight one: u22 "Feelings and states" is the lead's. This unit
// takes STABLE TRAITS only — what someone is like across years — and leaves moods and
// passing states to u22. The test applied to every candidate: could you still say it
// about the person next year? ehrlich yes, wütend no.
// It also stays off u10 "Beschreiben" (A1), which already spent nett, ruhig, lustig,
// langweilig, traurig and glücklich on describing people.
// Dropped in the cross-block pass, lower slot wins: nervös and mutig were exact front
// duplicates of block 1's u22, which the learner meets first. geizig and klug replaced
// them. Not a screening failure on either side — no seat can see a sibling's branch.
// Rejected as the same lexeme: freundlich (~u4 der Freund — a transparent -lich
// derivation, and u10 already chose nett over it for exactly this reason);
// unhöflich (~höflich in this same lesson — un- prefixing is transparent).
export const DE_UNIT31 = {
  id: "de-u31",
  lang: "de",
  title: "Persönlichkeit und Charakter",
  order: 31,
  stage: "a2",
  lessons: [
    {
      id: "de-u31l1",
      unit: 31,
      lesson: 1,
      title: "Gute Eigenschaften",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you value in someone: honest, patient, generous, polite, reliable, helpful.",
      items: [
        { id: "de-u31l1-ehrlich", type: "vocab", front: "ehrlich", reading: "ehrlich", meaning: "honest", example: { jp: "Mein Bruder ist immer ehrlich, auch wenn es schwer ist.", en: "My brother is always honest, even when it is hard." }, drill: { jp: "Der Lehrer ist sehr ehrlich", en: "The teacher is very honest" }, accept: ["honest", "truthful", "sincere"], hint: "From die Ehre, honour. Ehrlich gesagt — honestly, to be honest — is how Germans open an opinion they think you may not like." },
        { id: "de-u31l1-geduldig", type: "vocab", front: "geduldig", reading: "geduldig", meaning: "patient — willing to wait", example: { jp: "Der Arzt ist sehr geduldig mit dem alten Mann.", en: "The doctor is very patient with the old man." }, drill: { jp: "Meine Mutter ist immer geduldig", en: "My mother is always patient" }, accept: ["patient", "tolerant"], hint: "Nothing to do with a patient in hospital — that is der Patient. This is the quality of waiting without getting cross." },
        { id: "de-u31l1-grosszuegig", type: "vocab", front: "großzügig", reading: "grosszugig", meaning: "generous", example: { jp: "Der Chef ist großzügig und gibt uns viel Zeit.", en: "The boss is generous and gives us a lot of time." }, drill: { jp: "Der Onkel ist sehr großzügig", en: "The uncle is very generous" }, accept: ["generous", "lavish", "open-handed"], hint: "groß plus Zug — literally big-strokes, someone who does things on a large scale. Type großzügig or grosszügig; the ß folds to ss." },
        { id: "de-u31l1-hoeflich", type: "vocab", front: "höflich", reading: "hoflich", meaning: "polite", example: { jp: "Sie ist immer höflich, obwohl die Kunden oft laut sind.", en: "She is always polite, although the customers are often loud." }, drill: { jp: "Mein Onkel ist immer höflich", en: "My uncle is always polite" }, accept: ["polite", "courteous", "well-mannered"], hint: "From der Hof, the court — court manners. The everyday word for good manners, wider than nett (u10), which is about warmth." },
        { id: "de-u31l1-zuverlaessig", type: "vocab", front: "zuverlässig", reading: "zuverlassig", meaning: "reliable", example: { jp: "Ich weiß, dass er zuverlässig ist.", en: "I know that he is reliable." }, drill: { jp: "Mein Kollege ist sehr zuverlässig", en: "My colleague is very reliable" }, accept: ["reliable", "dependable", "trustworthy"], hint: "The trait an employer names first. Sich auf jemanden verlassen is to rely on someone, and this is the adjective from it." },
        { id: "de-u31l1-hilfsbereit", type: "vocab", front: "hilfsbereit", reading: "hilfsbereit", meaning: "helpful", example: { jp: "Die Freunde sind hilfsbereit, wenn wir sie brauchen.", en: "The friends are helpful when we need them." }, drill: { jp: "Die Schüler sind sehr hilfsbereit", en: "The pupils are very helpful" }, accept: ["helpful", "obliging", "willing to help"], hint: "Built from helfen (u14) plus bereit, ready — ready to help. It describes a person, never a thing: a book is not hilfsbereit." },
      ],
    },
    {
      id: "de-u31l2",
      unit: 31,
      lesson: 2,
      title: "Schwierige Eigenschaften",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the traits that make someone hard work — lazy, stubborn, selfish, strict, jumpy, wary.",
      items: [
        { id: "de-u31l2-faul", type: "vocab", front: "faul", reading: "faul", meaning: "lazy", example: { jp: "Er ist nicht müde, sondern faul.", en: "He is not tired, he is lazy." }, drill: { jp: "Mein Cousin ist manchmal faul", en: "My cousin is sometimes lazy" }, accept: ["lazy", "idle"], hint: "Also means rotten, of fruit — ein fauler Apfel. Same word, and the metaphor runs the same way as English rotten." },
        { id: "de-u31l2-stur", type: "vocab", front: "stur", reading: "stur", meaning: "stubborn", example: { jp: "Sie ist sehr stur, obwohl das nicht hilft.", en: "She is very stubborn, although it does not help." }, drill: { jp: "Der alte Mann ist sehr stur", en: "The old man is very stubborn" }, accept: ["stubborn", "obstinate", "pig-headed"], hint: "Short and blunt, and it sounds it. Not a compliment in any register." },
        { id: "de-u31l2-egoistisch", type: "vocab", front: "egoistisch", reading: "egoistisch", meaning: "selfish", example: { jp: "Es ist egoistisch, dass er nichts sagt.", en: "It is selfish that he says nothing." }, drill: { jp: "Das Kind ist oft egoistisch", en: "The child is often selfish" }, accept: ["selfish", "self-centred", "self-centered", "egotistical"], hint: "e-go-IS-tisch, four syllables with the stress third. The -isch ending marks it as an adjective, like praktisch." },
        { id: "de-u31l2-streng", type: "vocab", front: "streng", reading: "streng", meaning: "strict", example: { jp: "Der Lehrer ist streng, aber die Klasse lernt viel.", en: "The teacher is strict, but the class learns a lot." }, drill: { jp: "Der Chef ist sehr streng", en: "The boss is very strict" }, accept: ["strict", "stern", "severe"], hint: "Of people and of rules alike: ein strenger Vater, ein strenges Gesetz. It is not automatically negative — a strenger Lehrer can be respected." },
        { id: "de-u31l2-geizig", type: "vocab", front: "geizig", reading: "geizig", meaning: "stingy", example: { jp: "Er ist geizig, obwohl er viel Geld hat.", en: "He is stingy, although he has a lot of money." }, drill: { jp: "Mein Onkel ist sehr geizig", en: "My uncle is very stingy" }, accept: ["stingy", "mean", "tight-fisted", "miserly"], hint: "The exact opposite of großzügig in lesson 1. From der Geiz, and it is the same Geiz hiding inside ehrgeizig — greedy for honour." },
        { id: "de-u31l2-vorsichtig", type: "vocab", front: "vorsichtig", reading: "vorsichtig", meaning: "careful / cautious", example: { jp: "Sie ist vorsichtig, weil die Straße sehr voll ist.", en: "She is cautious because the street is very full." }, drill: { jp: "Der Arzt ist immer vorsichtig", en: "The doctor is always careful" }, accept: ["careful", "cautious", "wary"], hint: "From die Vorsicht, caution. Vorsicht! on its own is the warning shouted at you — look out." },
      ],
    },
    {
      id: "de-u31l3",
      unit: 31,
      lesson: 3,
      title: "Wie jemand wirkt",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe the impression a person makes: likeable, curious, brave, modest, ambitious, self-assured.",
      items: [
        { id: "de-u31l3-sympathisch", type: "vocab", front: "sympathisch", reading: "sympathisch", meaning: "likeable", example: { jp: "Ich finde ihn sympathisch, obwohl wir uns selten sehen.", en: "I find him likeable, although we rarely see each other." }, drill: { jp: "Der neue Kollege ist sehr sympathisch", en: "The new colleague is very likeable" }, accept: ["likeable", "likable", "nice", "congenial"], hint: "A false friend: it means likeable, NOT sympathetic. Jemanden sympathisch finden is the standard way to say you took to someone." },
        { id: "de-u31l3-neugierig", type: "vocab", front: "neugierig", reading: "neugierig", meaning: "curious / nosy", example: { jp: "Die Kinder sind neugierig und fragen sehr oft.", en: "The children are curious and ask very often." }, drill: { jp: "Meine Schwester ist sehr neugierig", en: "My sister is very curious" }, accept: ["curious", "inquisitive", "nosy"], hint: "neu plus gierig, greedy — greedy for the new. It swings both ways: a curious child is charming, a curious neighbour is not." },
        { id: "de-u31l3-klug", type: "vocab", front: "klug", reading: "klug", meaning: "clever", example: { jp: "Sie ist klug und lernt sehr schnell.", en: "She is clever and learns very quickly." }, drill: { jp: "Das Kind ist sehr klug", en: "The child is very clever" }, accept: ["clever", "smart", "bright", "intelligent"], hint: "KLOOK, with the g hardened to k at the end. Warmer than intelligent, which in German sounds like a measurement." },
        { id: "de-u31l3-bescheiden", type: "vocab", front: "bescheiden", reading: "bescheiden", meaning: "modest", example: { jp: "Er ist bescheiden, obwohl er sehr viel Geld verdient.", en: "He is modest, although he earns a great deal of money." }, drill: { jp: "Der alte Lehrer ist bescheiden", en: "The old teacher is modest" }, accept: ["modest", "humble", "unassuming"], hint: "Of a person it is praise; of a meal or a room it means meagre — ein bescheidenes Zimmer. Context decides which." },
        { id: "de-u31l3-ehrgeizig", type: "vocab", front: "ehrgeizig", reading: "ehrgeizig", meaning: "ambitious", example: { jp: "Sie ist sehr ehrgeizig und übt sehr oft.", en: "She is very ambitious and practises very often." }, drill: { jp: "Der Schüler ist sehr ehrgeizig", en: "The pupil is very ambitious" }, accept: ["ambitious", "driven"], hint: "die Ehre, honour, plus der Geiz, greed — greedy for honour. German hears a faint warning in it that English ambitious does not." },
        { id: "de-u31l3-selbstbewusst", type: "vocab", front: "selbstbewusst", reading: "selbstbewusst", meaning: "self-assured", example: { jp: "Er wirkt selbstbewusst, weil er die Sprache gut spricht.", en: "He seems self-assured because he speaks the language well." }, drill: { jp: "Der Chef ist sehr selbstbewusst", en: "The boss is very self-assured" }, accept: ["self-assured", "self-confident", "confident"], hint: "selbst plus bewusst, aware — aware of oneself. Positive in German, where English confident can tip into arrogant." },
      ],
    },
    {
      id: "de-u31l4",
      unit: 31,
      lesson: 4,
      title: "Über den Charakter sprechen",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about character as a topic — name the trait, the behaviour, and how someone comes across.",
      items: [
        { id: "de-u31l4-dercharakter", type: "vocab", front: "der Charakter", reading: "dercharakter", meaning: "character", example: { jp: "Der Charakter von dem Mann ist nicht leicht.", en: "That man's character is not an easy one." }, drill: { jp: "Der Charakter ist sehr gut", en: "The character is very good" }, accept: ["character", "personality", "nature"], hint: "ka-RAK-ter, with a hard k for the ch — one of the few German words where ch is said that way, because the word is Greek." },
        { id: "de-u31l4-dieeigenschaft", type: "vocab", front: "die Eigenschaft", reading: "dieeigenschaft", meaning: "quality / trait", example: { jp: "Das ist eine gute Eigenschaft für einen Lehrer.", en: "That is a good quality for a teacher." }, drill: { jp: "Die Eigenschaft ist sehr selten", en: "The quality is very rare" }, accept: ["quality", "trait", "characteristic", "attribute"], hint: "From eigen, own. It works for people and for things alike — die Eigenschaften eines Stoffes, the properties of a material." },
        { id: "de-u31l4-dasverhalten", type: "vocab", front: "das Verhalten", reading: "dasverhalten", meaning: "behaviour", example: { jp: "Das Verhalten von dem Kind ist nicht höflich.", en: "That child's behaviour is not polite." }, drill: { jp: "Das Verhalten ist sehr schlecht", en: "The behaviour is very bad" }, accept: ["behaviour", "behavior", "conduct"], hint: "What someone does, as against der Charakter, what they are. A singular noun with no plural in ordinary use." },
        { id: "de-u31l4-fleissig", type: "vocab", front: "fleißig", reading: "fleissig", meaning: "hard-working", example: { jp: "Die Studenten sind fleißig, weil die Prüfung kommt.", en: "The students are hard-working because the exam is coming." }, drill: { jp: "Die Studenten sind sehr fleißig", en: "The students are very hard-working" }, accept: ["hard-working", "diligent", "industrious"], hint: "The exact opposite of faul in lesson 2, and the highest praise a German school report gives. Type fleißig or fleissig." },
        { id: "de-u31l4-ordentlich", type: "vocab", front: "ordentlich", reading: "ordentlich", meaning: "tidy / orderly", example: { jp: "Er ist sehr ordentlich, deshalb bleibt das Zimmer sauber.", en: "He is very tidy, so the room stays clean." }, drill: { jp: "Mein Vater ist sehr ordentlich", en: "My father is very tidy" }, accept: ["tidy", "orderly", "neat", "proper"], hint: "From die Ordnung, order. Of a person it is a character trait; sauber (u10) is about the state of a thing, not the habit of a person." },
        { id: "de-u31l4-wirken", type: "vocab", front: "wirken", reading: "wirken", meaning: "to seem / come across", example: { jp: "Sie wirkt ruhig, obwohl sie sehr nervös ist.", en: "She seems calm, although she is very jumpy." }, drill: { jp: "Die Kinder wirken sehr müde", en: "The children come across as very tired" }, accept: ["to seem", "to come across", "to appear", "to have an effect"], hint: "The impression from outside, which may be wrong — that gap is the whole point of the word. It also means to take effect: die Medizin wirkt." },
      ],
    },
  ],
};
