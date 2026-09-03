// NO Unit 15 — Klær ("Clothes") — A1
// ─────────────────────────────────────────────────────────────────────────────
// BLOCK 3, THE COVERAGE PASS. Units 15–20 close A1 by teaching the everyday
// domains units 1–14 do not claim. The scaffold called this slot "Vocabulary 1";
// that is a placeholder, not a slot definition (CLAUDE.md → "No front language"),
// so the six slots are retitled and rethemed after what they actually teach:
//   u15 Klær · u16 Hjemme · u17 Hva folk gjør · u18 Skole og arbeid ·
//   u19 Fritid og friluftsliv · u20 På reise
// Chosen against the taught corpus, not from a template: block 1 owns sounds,
// greetings, self, family/home, numbers/time, food/drink and town (u1–u7); block 2
// owns colours/weather, days/months, describing, body/health and all three grammar
// units (u8–u14). Clothes, the house interior, everyday life and the feelings,
// school/work, free time and travel are what is left, and they are what an A1
// learner still cannot say. (u17 was first drafted as a general-purpose VERB
// unit and re-authored when block 2 turned out to own that ground — unit17.js's
// header carries the whole story, and it is the one other seats should read.)
//
// Conventions are declared in no/unit1.js and bind every unit. Bokmål, not
// Nynorsk. What this unit does under them:
//
// ONE JUDGEMENT §1 EXPLICITLY DELEGATES — `ei bukse`, NOT `bukser`. unit1.js §1 lists `bukser`
// alongside `briller` and `sokker` as plural-only, the way `penger` is. That is
// right for briller and for sokker-as-a-pair, and wrong for bukse: unlike English
// "trousers", Norwegian has an ordinary singular that means one pair — "Jeg kjøpte
// ei ny bukse", definite buksa. §1 hands this call to the authoring seat in as
// many words: "Decide by the sense you are teaching, say which sense in the hint,
// and do not expect the rule to decide for you." The test is whether the
// indefinite singular is idiomatic FOR THE SENSE BEING TAUGHT, and for the
// garment it plainly is. Note too that §7 shows block 1 marking a list CLOSED
// when it means one ("four fronts, no others"); §1's list carries no such marker.
// So `ei bukse` is a normal feminine count noun and the hint names the pair
// sense. This is the rule being APPLIED, not overridden — MERGE SEAT, do not
// revert it. The tidy-up is one line in unit1.js and is routed through
// BUILD-CHECKLIST.md, because §6 never opens another block's unit header and a
// note here alone would reach nobody.
// `sokker` IS taught bare (l2), because the sense being taught is the pair.
//
// MASS NOUN, taught bare under §1(b): `ull` (l4). Gender in the hint (ulla).
// PLURAL-ONLY, taught bare under §1(a): `klær` (l1), `sokker` (l2).
//
// FIRST FEMININE OF THE UNIT is `ei bukse` (l1) and it carries the en-/ei-
// recognition note unit1.js requires of every block-3 unit.
//
// ø IS HAND-FOLDED, ø→o, per unit1.js §3 — `å prøve` → "aprove", `en størrelse`
// → "enstorrelse". Those two cards carry the known engine defect (the fold branch
// of checkReading is dead for ø, so "Ei bukse" passes but a capitalised ø front
// does not); the one-line fix is filed in BUILD-CHECKLIST.md → Feature CC backlog.
//
// V2 is modelled, not just permitted: "Nå velger Erling en genser." is a
// fronted-XP declarative — the pattern English does NOT have — and its hint says
// so outright. unit1.js §4 counted only ONE clean instance in all of block 1, so
// this block plants one in every unit rather than relying on questions.
//
// ⚠ WHAT WAS AND WAS NOT VERIFIED ON THIS BRANCH — read this before trusting any
// "scope is clean" claim in these six headers.
//   • Blocks 1 AND 2 were both read directly off their branches
//     (`git show content/no-a1-block<n>:src/data/no/unitN.js`) and every block-3
//     front was checked against all 336 of their fronts, exact and stem-level.
//     That check found 16 collisions, all resolved — see unit17.js's header,
//     which is where the story is written down.
//   • It could NOT be done with the tooling. `npm run taught -- no` reads LIVE
//     content and u8–u14 are 0-item stubs here, so it reports only block 1. The
//     vocab-scope lint skips units behind unauthored stubs by design (RUNBOOK
//     §4: "it can only do its real work at merge"). `npm run check:lexemes` is
//     Japanese-only. All three are GREEN with real collisions present.
//   • The per-lesson forward-reference check is a script this seat wrote for this
//     block. It is self-graded and is not a repo artifact, so nobody else can
//     re-run it. Treat its result as corroboration, not verification.
//   • Block 2 may still change before merge, and block 3 now has TWO exposures to
//     it, both deliberate. (a) The 16 resolved collisions. (b) Eight examples in
//     u18–u20 use seven block-2 verbs — å gjøre, å hjelpe, å høre, å ligge,
//     å sitte, å sove, å stå — which is legitimate (u11 and u13 both precede u18)
//     and is what a coverage pass SHOULD do, but it does mean those eight cards
//     go out of scope if block 2 drops one of those verbs. Re-run the comparison
//     at merge rather than trusting this note.
//
// LESSON ORDER IS DELIBERATE. l3's verbs (å prøve, å passe, å velge) come before
// l4 needs them, and every l4 example draws only on l1–l3 plus block 1. This has
// to be checked by eye: check-lang-scope.mjs resolves scope per UNIT, never per
// LESSON, so a word used in l1 and taught in l3 of the same unit is invisible to
// every gate (unit7.js says the same, from the same discovery).
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT15 = {
  id: "no-u15",
  lang: "no",
  title: "Klær",
  order: 15,
  stage: "a1",
  lessons: [
    // Lesson 1: the garments themselves. `ei skjorte` is already taught (u1l3),
    // so it is used here and never re-taught.
    {
      id: "no-u15l1",
      unit: 15,
      lesson: 1,
      title: "Klær du har på deg",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name what you are wearing — bukse, genser, kjole, jakke, sko — and say what someone is buying or cannot find.",
      items: [
        { id: "no-u15l1-klaer", type: "vocab", front: "klær", reading: "klaer", meaning: "clothes", example: { jp: "Kari har mange klær.", en: "Kari has a lot of clothes." }, accept: ["clothing", "garments", "the clothes"], hint: "KLAIR, with the æ of unit 1. Plural only — there is no \"a clothes\", so this front carries no article, exactly like penger. The definite is klærne, \"the clothes\"." },
        { id: "no-u15l1-eibukse", type: "vocab", front: "ei bukse", reading: "eibukse", meaning: "trousers", example: { jp: "Ei bukse er billig her.", en: "A pair of trousers is cheap here." }, accept: ["pants", "a pair of trousers", "trousers", "a pair of pants"], hint: "BUEK-se. Feminine: definite buksa. One garment, one singular — Norwegian counts trousers the way English counts a shirt, so ei bukse IS a pair. You will also see this written en bukse / buksen; Bokmål allows both and print uses the en form freely. This course writes ei, because ei tells you the definite ends in -a." },
        { id: "no-u15l1-engenser", type: "vocab", front: "en genser", reading: "engenser", meaning: "jumper", example: { jp: "Erling har en genser fra Norge.", en: "Erling has a jumper from Norway." }, accept: ["sweater", "pullover", "a jumper", "a sweater"], hint: "GEN-ser, hard g before e. Masculine: definite genseren, plural gensere. The wool genser is the thing every visitor takes home from Norway." },
        { id: "no-u15l1-enkjole", type: "vocab", front: "en kjole", reading: "enkjole", meaning: "dress", example: { jp: "Kari kjøper en kjole.", en: "Kari is buying a dress." }, accept: ["a dress", "gown", "frock"], hint: "HYOO-le — the thin kj of unit 1, the same sound as in kjøpe and kjøkken. Masculine: definite kjolen." },
        { id: "no-u15l1-eijakke", type: "vocab", front: "ei jakke", reading: "eijakke", meaning: "jacket", example: { jp: "Jakka er ikke dyr.", en: "The jacket is not expensive." }, accept: ["a jacket", "coat", "a coat"], hint: "YAK-ke — Norwegian j is always the y of \"yes\". Feminine: definite jakka. Note where ikke sits: straight after the finite verb, er ikke, never ikke er." },
        { id: "no-u15l1-ensko", type: "vocab", front: "en sko", reading: "ensko", meaning: "shoe", example: { jp: "Jeg finner ikke skoen min.", en: "I cannot find my shoe." }, accept: ["a shoe"], hint: "SKOO — sk before o is a hard sk, as in skole, not the sh of skje. Masculine: definite skoen. The plural is just sko, unchanged: to sko is a pair of shoes." },
      ],
    },
    // Lesson 2: what goes on over and around the garments.
    {
      id: "no-u15l2",
      unit: 15,
      lesson: 2,
      title: "Lue, skjerf og sokker",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Name the things you add to an outfit — sokker, lue, skjerf, hanske, belte, veske — and say who has them and what is inside.",
      items: [
        { id: "no-u15l2-sokker", type: "vocab", front: "sokker", reading: "sokker", meaning: "socks", example: { jp: "Jeg kjøper sokker i butikken.", en: "I am buying socks in the shop." }, accept: ["stockings", "the socks", "a pair of socks"], hint: "SOK-ker. Taught in the plural like klær and penger, because the thing you own is a pair. One sock IS en sokk, definite sokken — but you will hear sokker nearly every time. Definite plural sokkene." },
        { id: "no-u15l2-eilue", type: "vocab", front: "ei lue", reading: "eilue", meaning: "woolly hat", example: { jp: "Kari har ei lue og ei jakke.", en: "Kari has a woolly hat and a jacket." }, accept: ["hat", "a hat", "beanie", "cap", "a woolly hat"], hint: "LOO-e. Feminine: definite lua. Specifically the knitted winter hat — a sun hat or a cap with a brim is en hatt, a different word." },
        { id: "no-u15l2-etskjerf", type: "vocab", front: "et skjerf", reading: "etskjerf", meaning: "scarf", example: { jp: "Skjerfet er fra Bergen.", en: "The scarf is from Bergen." }, accept: ["a scarf", "muffler"], hint: "SHÆRF — skj is the broad sh of skje and skjorte, never a k sound. Neuter: definite skjerfet." },
        { id: "no-u15l2-enhanske", type: "vocab", front: "en hanske", reading: "enhanske", meaning: "glove", example: { jp: "Erling har hansker og ei lue.", en: "Erling has gloves and a woolly hat." }, accept: ["a glove", "mitten", "gloves"], hint: "HAN-ske. Masculine: definite hansken, plural hansker. You will meet the plural far more often than the singular — nobody buys en hanske." },
        { id: "no-u15l2-etbelte", type: "vocab", front: "et belte", reading: "etbelte", meaning: "belt", example: { jp: "Beltet er til ei bukse.", en: "The belt is for a pair of trousers." }, accept: ["a belt", "strap"], hint: "BEL-te. Neuter: definite beltet. A seatbelt is et bilbelte — bil welded onto belte, the same compounding that built sykehus out of syke and hus." },
        { id: "no-u15l2-eiveske", type: "vocab", front: "ei veske", reading: "eiveske", meaning: "bag", example: { jp: "Anna har penger i veska.", en: "Anna has money in her bag." }, accept: ["a bag", "handbag", "purse", "satchel"], hint: "VES-ke. Feminine: definite veska. A bag you carry, not a paper bag. Note the English: Norwegian says i veska, \"in the bag\", where English insists on \"in her bag\"." },
      ],
    },
    // Lesson 3: the shop. The three verbs land HERE, ahead of lesson 4, which
    // uses them — see the header note on per-unit scope resolution.
    {
      id: "no-u15l3",
      unit: 15,
      lesson: 3,
      title: "I klesbutikken",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Try something on, say whether it fits, ask about a size, choose between two things, and talk about the price in kroner.",
      items: [
        { id: "no-u15l3-aprove", type: "vocab", front: "å prøve", reading: "aprove", meaning: "to try", example: { jp: "Jeg prøver ei jakke i butikken.", en: "I am trying on a jacket in the shop." }, accept: ["try", "to try on", "try on", "to attempt", "attempt"], hint: "PRUR-ve, present prøver — and a hand-folded reading, aprove, because ø is the one letter that does not fold on its own. It covers trying a garment on AND trying to do something." },
        { id: "no-u15l3-apasse", type: "vocab", front: "å passe", reading: "apasse", meaning: "to fit", example: { jp: "Buksa passer ikke.", en: "The trousers do not fit." }, accept: ["fit", "to suit", "suit", "to look after", "to be right"], hint: "PAS-se, present passer. Of clothes it is fit; of a time it is suit — det passer bra, that works for me. It also means to look after: å passe et barn." },
        { id: "no-u15l3-enstorrelse", type: "vocab", front: "en størrelse", reading: "enstorrelse", meaning: "size", example: { jp: "Hva er størrelsen på skjorta?", en: "What size is the shirt?" }, accept: ["a size", "the size"], hint: "STUR-rel-se, hand-folded to enstorrelse. Masculine: definite størrelsen. Built from stor, big, plus -else — the ending that turns an adjective into a noun." },
        { id: "no-u15l3-etpar", type: "vocab", front: "et par", reading: "etpar", meaning: "pair", example: { jp: "Jeg kjøper et par sko.", en: "I am buying a pair of shoes." }, accept: ["a pair", "couple", "a couple", "two"], hint: "PAHR. Neuter: definite paret. Also a couple of people — and loosely \"a couple of\" anything: et par dager, a couple of days." },
        { id: "no-u15l3-avelge", type: "vocab", front: "å velge", reading: "avelge", meaning: "to choose", example: { jp: "Nå velger Erling en genser.", en: "Now Erling is choosing a jumper." }, accept: ["choose", "to pick", "pick", "to select", "select"], hint: "VEL-ge, present velger. Watch the word order: when nå opens the sentence the verb must come second, so the subject drops in behind it — Nå velger Erling, never Nå Erling velger. That is Norwegian's V2 rule, and it is not optional." },
        { id: "no-u15l3-eikrone", type: "vocab", front: "ei krone", reading: "eikrone", meaning: "krone", example: { jp: "Ei krone er ikke mye penger.", en: "A krone is not much money." }, accept: ["crown", "the norwegian krone", "kroner", "norwegian crown"], hint: "KROO-ne. Feminine: definite krona. Norway's money — one krone, and the plural you actually hear on every price is kroner. Written NOK on a tag." },
      ],
    },
    // Lesson 4: looking after the clothes, and the two small parts of a garment.
    {
      id: "no-u15l4",
      unit: 15,
      lesson: 4,
      title: "Å ta vare på klærne",
      cefr: "A1",
      dominantMode: "recall",
      canDo: "Say you are washing or changing your clothes, name a pocket and a button, and say what a garment is made of and where it is kept.",
      items: [
        { id: "no-u15l4-avaske", type: "vocab", front: "å vaske", reading: "avaske", meaning: "to wash", example: { jp: "Jeg vasker klær nå.", en: "I am washing clothes now." }, accept: ["wash", "to clean", "clean", "to do the washing"], hint: "VAS-ke, present vasker. Clothes, dishes, hands, floors — one verb covers all of them. Å vaske seg is to wash yourself." },
        { id: "no-u15l4-askifte", type: "vocab", front: "å skifte", reading: "askifte", meaning: "to change", example: { jp: "Erling skifter skjorte.", en: "Erling is changing his shirt." }, accept: ["change", "to change clothes", "swap", "to switch", "switch"], hint: "SHIF-te — sk before i is the broad sh again. Present skifter. Note skifte skjorte with no article at all, the same bare-noun pattern as kjøre bil." },
        { id: "no-u15l4-eilomme", type: "vocab", front: "ei lomme", reading: "eilomme", meaning: "pocket", example: { jp: "Jeg har penger i lomma.", en: "I have money in my pocket." }, accept: ["a pocket"], hint: "LOM-me. Feminine: definite lomma. A wallet is ei lommebok — a pocket-book, welded together the way sykehus was." },
        { id: "no-u15l4-enknapp", type: "vocab", front: "en knapp", reading: "enknapp", meaning: "button", example: { jp: "Jeg kjøper en knapp til skjorta.", en: "I am buying a button for the shirt." }, accept: ["a button", "knob"], hint: "KNAPP — and the k IS pronounced, unlike English \"knee\". Masculine: definite knappen. The same word is the button you press on a machine." },
        { id: "no-u15l4-ull", type: "vocab", front: "ull", reading: "ull", meaning: "wool", example: { jp: "En genser i ull er veldig god.", en: "A jumper made of wool is very good." }, accept: ["woollen", "woolen", "the wool"], hint: "UELL, with the tight Norwegian u. A mass noun, so the front carries no article — same class as vann and melk. Feminine: definite ulla. En ullgenser and ei ullbukse are what Norwegians actually put on in winter." },
        { id: "no-u15l4-etskap", type: "vocab", front: "et skap", reading: "etskap", meaning: "cupboard", example: { jp: "Klærne er i skapet.", en: "The clothes are in the cupboard." }, accept: ["a cupboard", "closet", "cabinet", "wardrobe"], hint: "SKAHP. Neuter: definite skapet. A wardrobe is et klesskap — klær plus skap — and a fridge is et kjøleskap. Learn skap and you have read half the doors in a Norwegian flat." },
      ],
    },
  ],
};
