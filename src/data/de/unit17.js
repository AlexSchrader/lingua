// DE Unit 17 — Kleidung und Einkaufen (slot: vocabulary 3) — A1
// Block 3 (u15–u20). Conventions: see de/unit1.js.
//
// THEME CHOSEN BY THIS SEAT. Clothes are untouched by u1–u14 — the closest any
// earlier unit comes is u10's teuer/billig, which describe a price without
// naming a single thing you could buy. Shopping is the natural other half: it
// gives the clothes something to do, and it is the A1 conversation a traveller
// has on day one.
// This unit sits AFTER u16 on purpose. Every honest shopping sentence needs
// kosten, der Preis or das Geld, and a unit may only use what is taught at or
// before it, so numbers and money had to land first.
//
// Rejected as already taught: teuer, billig (u10), die Farbe and every colour
// (u8 — used freely in examples here instead), brauchen (u13), die Karte (u7).
// Rejected as the same lexeme: die Kleidung (~das Kleid — the -ung noun of a word
// this unit already teaches), die Größe (~groß u1), der Verkäufer (~verkaufen,
// taught two cards earlier in the same lesson).
// Kept deliberately: kaufen AND verkaufen. ver- here is not a predictable prefix
// — it reverses the direction of the transaction, which is the opposite of what
// ver- does in vergessen or verstehen, and a learner who knows kaufen would not
// guess it.
// die Mütze and der Hut both mean a hat and both are A1; only die Mütze is here,
// because two words for one object inside one six-card lesson is a weak lesson.
// FREE: Pullover, Sofa, Jeans, Mode | Schuhe, Hosen, Jacken, Socken, Kleider, Taschen, Preise, Euro, Farben
export const DE_UNIT17 = {
  id: "de-u17",
  lang: "de",
  title: "Kleidung und Einkaufen",
  order: 17,
  stage: "a1",
  lessons: [
    {
      id: "de-u17l1",
      unit: 17,
      lesson: 1,
      title: "Was man trägt",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the clothes you are wearing and say what colour they are: Das Hemd ist blau.",
      items: [
        { id: "de-u17l1-dashemd", type: "vocab", front: "das Hemd", reading: "dashemd", meaning: "the shirt", example: { jp: "Das Hemd ist weiß und sehr sauber.", en: "The shirt is white and very clean." }, accept: ["the shirt"], hint: "A shirt with a collar and buttons. A T-shirt is das T-Shirt, borrowed whole from English." },
        { id: "de-u17l1-diehose", type: "vocab", front: "die Hose", reading: "diehose", meaning: "the trousers", example: { jp: "Die Hose ist zu lang für mich.", en: "The trousers are too long for me." }, accept: ["the trousers", "the pants"], hint: "Singular in German, plural in English: die Hose ist, the trousers are. One garment, one word." },
        { id: "de-u17l1-derrock", type: "vocab", front: "der Rock", reading: "derrock", meaning: "the skirt", example: { jp: "Der Rock ist nicht teuer.", en: "The skirt is not expensive." }, accept: ["the skirt"], hint: "Nothing to do with music or stone. Der Rock is a skirt, and das Kleid is a dress." },
        { id: "de-u17l1-daskleid", type: "vocab", front: "das Kleid", reading: "daskleid", meaning: "the dress", example: { jp: "Das Kleid dort ist sehr schön.", en: "That dress over there is very beautiful." }, accept: ["the dress"], hint: "The plural die Kleider means clothes in general — which is where die Kleidung comes from." },
        { id: "de-u17l1-derschuh", type: "vocab", front: "der Schuh", reading: "derschuh", meaning: "the shoe", example: { jp: "Die Schuhe sind neu und noch nicht schmutzig.", en: "The shoes are new and not yet dirty." }, drill: { jp: "Der Schuh ist zu klein.", en: "The shoe is too small." }, accept: ["the shoe"], hint: "Almost always used in the plural, die Schuhe, because they come in twos." },
        { id: "de-u17l1-dietasche", type: "vocab", front: "die Tasche", reading: "dietasche", meaning: "the bag", example: { jp: "Mein Schlüssel ist in der Tasche.", en: "My key is in the bag." }, drill: { jp: "Die Tasche ist sehr teuer.", en: "The bag is very expensive." }, accept: ["the bag", "the pocket", "the handbag"], hint: "Both a bag you carry and a pocket in your clothes — context decides which." },
      ],
    },
    {
      id: "de-u17l2",
      unit: 17,
      lesson: 2,
      title: "Warme Sachen",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say what you put on when it is cold, and connect the weather words from u8 to real clothes.",
      items: [
        { id: "de-u17l2-diejacke", type: "vocab", front: "die Jacke", reading: "diejacke", meaning: "the jacket", example: { jp: "Es ist kalt — nimm die Jacke.", en: "It is cold — take the jacket." }, drill: { jp: "Die Jacke ist warm und blau.", en: "The jacket is warm and blue." }, accept: ["the jacket"], hint: "Jacket and Jacke are the same word. The ck is one sound, as in English back." },
        { id: "de-u17l2-dermantel", type: "vocab", front: "der Mantel", reading: "dermantel", meaning: "the coat", example: { jp: "Im Winter trage ich immer einen Mantel.", en: "In winter I always wear a coat." }, drill: { jp: "Der Mantel ist lang und schwarz.", en: "The coat is long and black." }, accept: ["the coat", "the overcoat"], hint: "Longer and warmer than eine Jacke. Plural umlauts: die Mäntel." },
        { id: "de-u17l2-derpullover", type: "vocab", front: "der Pullover", reading: "derpullover", meaning: "the jumper", example: { jp: "Der Pullover ist grau und sehr warm.", en: "The jumper is grey and very warm." }, accept: ["the jumper", "the sweater", "the pullover"], hint: "Everyone shortens it to der Pulli in speech." },
        { id: "de-u17l2-diesocke", type: "vocab", front: "die Socke", reading: "diesocke", meaning: "the sock", example: { jp: "Die Socken sind rot und gelb.", en: "The socks are red and yellow." }, drill: { jp: "Die Socke ist gelb und klein.", en: "The sock is yellow and small." }, accept: ["the sock"], hint: "Like shoes, nearly always plural: die Socken." },
        { id: "de-u17l2-diemutze", type: "vocab", front: "die Mütze", reading: "diemutze", meaning: "the woolly cap", example: { jp: "Bei Schnee brauche ich eine Mütze.", en: "When it snows I need a cap." }, drill: { jp: "Die Mütze ist warm und bunt.", en: "The hat is warm and colourful." }, accept: ["the cap", "the woolly hat", "the beanie"], hint: "The soft knitted kind. A hat with a brim is der Hut — a different word for a different object." },
        { id: "de-u17l2-derschal", type: "vocab", front: "der Schal", reading: "derschal", meaning: "the scarf", example: { jp: "Der Schal ist von meiner Mutter.", en: "The scarf is from my mother." }, accept: ["the scarf"], hint: "Said with a long a, like English shawl — which is where English got the word." },
      ],
    },
    {
      id: "de-u17l3",
      unit: 17,
      lesson: 3,
      title: "Anziehen und passen",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say that you are putting something on, trying it on, or that it does or does not fit.",
      items: [
        { id: "de-u17l3-tragen", type: "vocab", front: "tragen", reading: "tragen", meaning: "to wear / carry", example: { jp: "Sie trägt heute ein Kleid.", en: "She is wearing a dress today." }, drill: { jp: "Die Kinder tragen neue Schuhe.", en: "The children are wearing new shoes." }, accept: ["to wear", "to carry"], hint: "One verb for both jobs: you tragen clothes and you tragen a heavy bag. The vowel shifts in er/sie: er trägt." },
        { id: "de-u17l3-anziehen", type: "vocab", front: "anziehen", reading: "anziehen", meaning: "to put on", example: { jp: "Ich ziehe die Schuhe an.", en: "I am putting my shoes on." }, accept: ["to put on", "to get dressed"], hint: "A separable verb: the an- breaks off and goes to the end — ich ziehe … an. Watch for it in the example." },
        { id: "de-u17l3-ausziehen", type: "vocab", front: "ausziehen", reading: "ausziehen", meaning: "to undress / remove clothing", example: { jp: "Zieh die Jacke aus, hier ist es warm.", en: "Take your jacket off, it is warm in here." }, accept: ["to take off", "to undress", "to remove"], hint: "Same verb, opposite prefix: an- on, aus- off. It also means to move out of a flat." },
        { id: "de-u17l3-passen", type: "vocab", front: "passen", reading: "passen", meaning: "to fit", example: { jp: "Die Hose passt mir nicht.", en: "The trousers do not fit me." }, drill: { jp: "Die Schuhe passen mir nicht.", en: "The shoes do not fit me." }, accept: ["to fit", "to suit"], hint: "Takes the dative person: die Hose passt MIR. Nothing to do with der Pass, a passport." },
        { id: "de-u17l3-anprobieren", type: "vocab", front: "anprobieren", reading: "anprobieren", meaning: "to try on", example: { jp: "Kann ich das Kleid anprobieren?", en: "Can I try the dress on?" }, accept: ["to try on"], hint: "Separable again, and the one sentence you need in a German clothes shop." },
        { id: "de-u17l3-gefallen", type: "vocab", front: "gefallen", reading: "gefallen", meaning: "to please / appeal to", example: { jp: "Der Mantel gefällt mir sehr.", en: "I like the coat very much." }, drill: { jp: "Die Jacken gefallen mir sehr.", en: "I like the jackets a lot." }, accept: ["to please", "to appeal to", "to like"], hint: "Backwards from English: the THING is the subject and YOU are dative — der Mantel gefällt mir, the coat pleases me." },
      ],
    },
    {
      id: "de-u17l4",
      unit: 17,
      lesson: 4,
      title: "Im Geschäft",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Get through a shop: ask to be shown something, buy it, and pay at the till.",
      items: [
        { id: "de-u17l4-kaufen", type: "vocab", front: "kaufen", reading: "kaufen", meaning: "to buy", example: { jp: "Ich kaufe die Schuhe für vierzig Euro.", en: "I am buying the shoes for forty euros." }, drill: { jp: "Wir kaufen einen Mantel im Geschäft.", en: "We are buying a coat in the shop." }, accept: ["to buy", "to purchase"], hint: "Einkaufen, with ein-, is to do the shopping — the whole trip rather than one purchase." },
        { id: "de-u17l4-verkaufen", type: "vocab", front: "verkaufen", reading: "verkaufen", meaning: "to sell", example: { jp: "Sie verkaufen hier auch Bücher.", en: "They also sell books here." }, accept: ["to sell"], hint: "ver- turns the transaction around: kaufen is to buy, verkaufen is to sell. Same money, opposite direction." },
        { id: "de-u17l4-dasgeschaft", type: "vocab", front: "das Geschäft", reading: "dasgeschaft", meaning: "the shop", example: { jp: "Das Geschäft ist heute zu.", en: "The shop is closed today." }, accept: ["the shop", "the store", "the business"], hint: "Also the word for a business deal. Der Laden is the smaller, more everyday word for a shop." },
        { id: "de-u17l4-diekasse", type: "vocab", front: "die Kasse", reading: "diekasse", meaning: "the till", example: { jp: "Sie bezahlen bitte an der Kasse.", en: "Please pay at the till." }, drill: { jp: "Die Kasse ist dort links.", en: "The till is over there on the left." }, accept: ["the till", "the checkout", "the cash desk"], hint: "An der Kasse is where you queue. The same word covers a cinema box office." },
        { id: "de-u17l4-derkunde", type: "vocab", front: "der Kunde", reading: "derkunde", meaning: "the customer", example: { jp: "Der Kunde dort sucht einen Pullover.", en: "The customer over there is looking for a jumper." }, accept: ["the customer", "the client"], hint: "One of a small group of masculine nouns that add -n everywhere except the nominative: der Kunde, but den Kunden." },
        { id: "de-u17l4-zeigen", type: "vocab", front: "zeigen", reading: "zeigen", meaning: "to show", example: { jp: "Zeigen Sie mir bitte den Mantel.", en: "Please show me the coat." }, accept: ["to show", "to point out"], hint: "Two objects at once: the person is dative (mir) and the thing is accusative (den Mantel) — exactly the u13/u14 pattern." },
      ],
    },
  ],
};
