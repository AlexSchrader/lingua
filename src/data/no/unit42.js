// NO Unit 42 — Klær og utseende ("Clothes and appearance") — A2
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Vocabulary 3 (A2)"; retitled per CLAUDE.md → "No front
// language". A1 u15 taught the garments a beginner points at (klær, ei bukse,
// en genser, en kjole, ei jakke, en sko, sokker, ei lue, et skjerf, en hanske,
// et belte, ei veske) and the shop that sells them. This unit takes the half A1
// left: the clothes you own but cannot yet name, what a person LOOKS like, what
// you do to a garment, and what it is made of.
//
// Conventions are unit1.js §1–§8 and bind every unit. Bokmål, not Nynorsk.
//
// PLURAL-ONLY, taught bare under §1(a): `briller` (l2). unit1.js names it in the
// same breath as penger — there is no idiomatic "ei brille" for the object you
// wear, only for a single lens. Definite plural brillene, in the hint.
// MASS NOUNS, taught bare under §1(b): `bomull` (l4), `silke` (l4). A length of
// cloth is `et stoff`, which IS countable and keeps its article.
//
// FIRST FEMININE OF THE UNIT is `ei bluse` (l1) and it carries the en-/ei-
// recognition note §1 requires.
//
// ø IS WRITTEN o IN `reading` (§3): `et skjørt` → "etskjort", `en støvel` →
// "enstovel", `å pynte` has none.
//
// ⚠ ADJECTIVES ARE GIVEN IN THE BASE FORM AND EVERY EXAMPLE KEEPS A NON-NEUTER
// SUBJECT, so no card asks the learner to derive a -t (unit1.js §8b; u14 owns
// agreement). `vakker` is the one to watch — its neuter is vakkert and its
// plural vakre, both irregular, and both are named in the hint rather than
// demonstrated.
//
// ⚠ RESERVE LIST — screened against A1's 480, against this block's own 240, and
// against the sibling A2 branches. Every collision resolves against this block,
// so swap a reserve in rather than re-authoring a lesson.
//   l1 plagg:      ei skjorte? NO — A1 u1 · reserves: en sokk · ei kappe · en hatt
//   l2 utseende:   et ansikt? NO — A1 u11 · reserves: krøllete · lys? NO A1 u8 ·
//                  reserves: rynkete · en type · et inntrykk? NO — my u50
//   l3 å kle seg:  å rette · å knappe · å file
//   l4 stoff:      et garn · ei fjær · prikkete
//
// SCOPE: examples and drills use A1's 480 plus u41 plus this unit's earlier
// cards. Nothing leans on u21–u40 (unauthored stubs here), and nothing uses
// `som`, which is untaught in A1 and only claimed at u29.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT42 = {
  id: "no-u42",
  lang: "no",
  title: "Klær og utseende",
  order: 42,
  stage: "a2",
  lessons: [
    // Lesson 1: the garments A1 left out.
    {
      id: "no-u42l1",
      unit: 42,
      lesson: 1,
      title: "Flere plagg",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the clothes A1 left out — frakk, skjørt, bluse, slips, støvel — and say what someone is wearing or buying.",
      items: [
        { id: "no-u42l1-enfrakk", type: "vocab", front: "en frakk", reading: "enfrakk", meaning: "coat", example: { jp: "Erling kjøper en frakk fordi det er kaldt ute.", en: "Erling buys a coat because it is cold outside." }, drill: { jp: "Det henger en frakk i skapet", en: "There is a coat hanging in the cupboard" }, accept: ["an overcoat", "a coat", "topcoat"], hint: "FRAKK. Masculine: definite frakken, plural frakker. A long coat over other clothes, where ei jakke from unit 15 is shorter and lighter." },
        { id: "no-u42l1-etskjort", type: "vocab", front: "et skjørt", reading: "etskjort", meaning: "skirt", example: { jp: "Kari velger et skjørt når hun skal på kino.", en: "Kari chooses a skirt when she is going to the cinema." }, drill: { jp: "Anna kjøper et skjørt og ei bluse", en: "Anna buys a skirt and a blouse" }, accept: ["a skirt"], hint: "SHURT — skj is the broad sh of skje and skjorte, and the reading folds ø to o: etskjort. Neuter: definite skjørtet. Keep it apart from ei skjorte, a shirt, from unit 1 — one letter and one gender between them." },
        { id: "no-u42l1-eibluse", type: "vocab", front: "ei bluse", reading: "eibluse", meaning: "blouse", example: { jp: "Denne blusa er fin, men den er veldig dyr.", en: "This blouse is nice, but it is very expensive." }, drill: { jp: "Kari vasker ei bluse", en: "Kari washes a blouse" }, accept: ["a blouse", "a top"], hint: "BLUE-se. Feminine: definite blusa, plural bluser. You will also see ei bluse written en bluse / blusen; Bokmål allows both and print uses the en form freely. This course writes ei, because ei is what tells you the definite ends in -a." },
        { id: "no-u42l1-etslips", type: "vocab", front: "et slips", reading: "etslips", meaning: "tie", example: { jp: "Sjefen bruker et slips når han er på kontoret.", en: "The boss wears a tie when he is at the office." }, drill: { jp: "Erling bruker et slips i dag", en: "Erling wears a tie today" }, accept: ["a necktie", "a tie"], hint: "SLIPS. Neuter: definite slipset, and the plural is slips, unchanged. Norway wears them rarely — even a sjef often does not, which tells you something about the place." },
        { id: "no-u42l1-enstovel", type: "vocab", front: "en støvel", reading: "enstovel", meaning: "boot", example: { jp: "Barna bruker en støvel når det regner.", en: "The children wear a boot when it rains." }, drill: { jp: "Det står en støvel på gulvet", en: "There is a boot standing on the floor" }, accept: ["a boot", "wellington"], hint: "STUR-vel, hand-folded to enstovel. Masculine: definite støvelen, and the plural drops the e: støvler. Norway is a country of støvler — you will own several." },
        { id: "no-u42l1-etsmykke", type: "vocab", front: "et smykke", reading: "etsmykke", meaning: "jewellery", example: { jp: "Anna har et smykke, og hun bruker det ofte.", en: "Anna has a piece of jewellery, and she wears it often." }, drill: { jp: "Anna kjøper et smykke til Kari", en: "Anna buys a piece of jewellery for Kari" }, accept: ["a piece of jewelry", "jewelry", "jewellery", "an ornament"], hint: "SMUEK-ke. Neuter: definite smykket, plural smykker. One item — a necklace, a ring, a brooch. English has no good singular for it, which is why the gloss is clumsy and the Norwegian is not." },
      ],
    },
    // Lesson 2: what a person looks like. Base-form adjectives only.
    {
      id: "no-u42l2",
      unit: 42,
      lesson: 2,
      title: "Utseende",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Describe what somebody looks like — vakker, slank, tynn, tykk — and mention a beard or a pair of glasses.",
      items: [
        { id: "no-u42l2-vakker", type: "vocab", front: "vakker", reading: "vakker", meaning: "beautiful", example: { jp: "Kari er vakker, og alle sier det til henne.", en: "Kari is beautiful, and everyone says so to her." }, drill: { jp: "En vakker dag er lang", en: "A beautiful day is long" }, accept: ["lovely", "handsome", "gorgeous"], hint: "VAK-ker. Stronger and more formal than pen or fin from unit 10 — you would write it, and say it about a person you mean it about. ⚠ Irregular: the neuter is vakkert and the plural vakre, with the e dropped." },
        { id: "no-u42l2-slank", type: "vocab", front: "slank", reading: "slank", meaning: "slim", example: { jp: "Erling er slank fordi han går mye på ski.", en: "Erling is slim because he skis a lot." }, drill: { jp: "En slank mann bruker et belte", en: "A slim man wears a belt" }, accept: ["slender", "trim"], hint: "SLANK. A neutral, complimentary word for a slim build — unlike tynn, the next card but one, which can sound like a comment on someone's health." },
        { id: "no-u42l2-tynn", type: "vocab", front: "tynn", reading: "tynn", meaning: "thin", example: { jp: "Denne genseren er tynn, og derfor fryser jeg.", en: "This jumper is thin, and that is why I am cold." }, drill: { jp: "En tynn genser er ikke varm", en: "A thin jumper is not warm" }, accept: ["slim", "skinny", "fine"], hint: "TUENN. Of a thing it is simply thin; of a person it leans toward too thin, where slank is the kind word. Neuter tynt, with one n." },
        { id: "no-u42l2-tykk", type: "vocab", front: "tykk", reading: "tykk", meaning: "thick", example: { jp: "Jeg bruker en tykk genser når det snør ute.", en: "I wear a thick jumper when it is snowing outside." }, drill: { jp: "En tykk frakk er varm", en: "A thick coat is warm" }, accept: ["fat", "heavy", "dense"], hint: "TUEKK. The opposite of tynn, and the same split: of a garment it is thick, of a person it is blunt. Neuter tykt." },
        { id: "no-u42l2-etskjegg", type: "vocab", front: "et skjegg", reading: "etskjegg", meaning: "beard", example: { jp: "Faren min har et skjegg, men broren min har ikke det.", en: "My father has a beard, but my brother does not." }, drill: { jp: "Bestefar har et skjegg", en: "Grandfather has a beard" }, accept: ["a beard", "whiskers"], hint: "SHEGG — skj again, the broad sh. Neuter: definite skjegget. Note the drill: et langt skjegg, with the neuter -t on lang, because skjegg is neuter." },
        { id: "no-u42l2-briller", type: "vocab", front: "briller", reading: "briller", meaning: "glasses", example: { jp: "Anna bruker briller når hun leser ei bok.", en: "Anna wears glasses when she reads a book." }, drill: { jp: "Jeg finner ikke briller i veska", en: "I cannot find glasses in the bag" }, accept: ["spectacles", "eyeglasses", "the glasses"], hint: "BRIL-ler. Plural only, so the front carries no article — the class unit 1 named with penger and klær. Definite plural brillene. One lens is ei brille, which is not what you wear." },
      ],
    },
    // Lesson 3: what you do to a garment. All six are å-verbs, so every drill
    // uses an å-taking frame — a modal would swallow the å and break the front.
    {
      id: "no-u42l3",
      unit: 42,
      lesson: 3,
      title: "Å kle seg",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what you do to clothes — sew, knit, hang, fold, decorate — and say you are getting dressed.",
      items: [
        { id: "no-u42l3-asy", type: "vocab", front: "å sy", reading: "asy", meaning: "to sew", example: { jp: "Bestemor syr et skjørt fordi hun liker å lage klær.", en: "Grandmother sews a skirt because she likes making clothes." }, drill: { jp: "Bestemor liker å sy ei bluse", en: "Grandmother likes to sew a blouse" }, accept: ["sew", "to stitch", "stitch"], hint: "SUE, present syr — a one-syllable verb, so the present is just the infinitive plus -r. Ei symaskin is a sewing machine." },
        { id: "no-u42l3-astrikke", type: "vocab", front: "å strikke", reading: "astrikke", meaning: "to knit", example: { jp: "Bestemor strikker en genser fordi barnet fryser.", en: "Grandmother knits a jumper because the child is cold." }, drill: { jp: "Det er hyggelig å strikke en genser", en: "It is nice to knit a jumper" }, accept: ["knit"], hint: "STRIK-ke, present strikker. Knitting is a live national habit, not a museum one — the ullgenser you meet in unit 15 was often made this way, by somebody's grandmother." },
        { id: "no-u42l3-ahenge", type: "vocab", front: "å henge", reading: "ahenge", meaning: "to hang", example: { jp: "Jeg henger en frakk i skapet når jeg kommer hjem.", en: "I hang a coat in the cupboard when I come home." }, drill: { jp: "Det er lett å henge opp ei jakke", en: "It is easy to hang up a jacket" }, accept: ["hang", "to hang up", "hang up"], hint: "HENG-e, present henger. It works both ways round: jeg henger jakka, I hang the jacket, and jakka henger, the jacket is hanging — same verb, no passive needed." },
        { id: "no-u42l3-abrette", type: "vocab", front: "å brette", reading: "abrette", meaning: "to fold", example: { jp: "Kari bretter klær når hun rydder.", en: "Kari folds clothes when she tidies up." }, drill: { jp: "Jeg liker å brette klær", en: "I like folding clothes" }, accept: ["fold", "to fold up", "fold up"], hint: "BRET-te, present bretter. Paper, cloth, a map from unit 20 — anything you double over." },
        { id: "no-u42l3-apynte", type: "vocab", front: "å pynte", reading: "apynte", meaning: "to decorate", example: { jp: "Vi pynter et rom fordi bestemor kommer på besøk.", en: "We decorate a room because grandmother is coming to visit." }, drill: { jp: "Det er hyggelig å pynte et rom", en: "It is nice to decorate a room" }, accept: ["decorate", "to dress up", "adorn"], hint: "PUEN-te, present pynter. A room, a tree, a table — and å pynte seg is to dress yourself up, which is what Norwegians do for the seventeenth of May." },
        { id: "no-u42l3-akle", type: "vocab", front: "å kle", reading: "akle", meaning: "to dress", example: { jp: "Denne fargen kler deg, og derfor bruker du den ofte.", en: "This colour suits you, and that is why you wear it often." }, drill: { jp: "Det er lett å kle et barn", en: "It is easy to dress a child" }, accept: ["dress", "to suit", "suit", "to clothe"], hint: "KLEH, present kler. Two jobs: to dress somebody (å kle et barn) and to suit somebody (fargen kler deg). Å kle på seg is to get dressed, and å kle av seg is the opposite." },
      ],
    },
    // Lesson 4: what a garment is made of and what it looks like.
    {
      id: "no-u42l4",
      unit: 42,
      lesson: 4,
      title: "Stoff og mønster",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say what a garment is made of — bomull, silke, stoff — and describe a stripe, a pattern or a check.",
      items: [
        { id: "no-u42l4-bomull", type: "vocab", front: "bomull", reading: "bomull", meaning: "cotton", example: { jp: "Denne blusa er av bomull, og derfor er den lett å vaske.", en: "This blouse is of cotton, and that is why it is easy to wash." }, drill: { jp: "Ei bluse av bomull er tynn", en: "A blouse of cotton is thin" }, accept: ["the cotton"], hint: "BOOM-ull — bom, from an old word for the plant, plus ull, the wool of unit 15. A mass noun, so no article on the front. Feminine: definite bomulla." },
        { id: "no-u42l4-silke", type: "vocab", front: "silke", reading: "silke", meaning: "silk", example: { jp: "Et slips av silke er dyrt, men det er veldig fint.", en: "A tie of silk is expensive, but it is very nice." }, drill: { jp: "Silke er dyr og fin", en: "Silk is expensive and fine" }, accept: ["the silk"], hint: "SIL-ke. A mass noun: no article. Masculine: definite silken. Note av silke, \"of silk\" — av is how Norwegian says what a thing is made of." },
        { id: "no-u42l4-etstoff", type: "vocab", front: "et stoff", reading: "etstoff", meaning: "fabric", example: { jp: "Bestemor kjøper et stoff når hun skal sy et skjørt.", en: "Grandmother buys a fabric when she is going to sew a skirt." }, drill: { jp: "Vi kjøper et stoff til ei bluse", en: "We buy a fabric for a blouse" }, accept: ["material", "a fabric", "cloth", "a material"], hint: "STOFF. Neuter: definite stoffet, plural stoffer. Countable, unlike bomull and silke — a stoff is a particular cloth you can buy a length of. The same word also means a substance, and in the wrong company, a drug." },
        { id: "no-u42l4-eistripe", type: "vocab", front: "ei stripe", reading: "eistripe", meaning: "stripe", example: { jp: "Genseren har ei stripe, og den er veldig fin.", en: "The jumper has a stripe, and it is very nice." }, drill: { jp: "Det er ei stripe på blusa", en: "There is a stripe on the blouse" }, accept: ["a stripe", "a streak", "a line"], hint: "STREE-pe. Feminine: definite stripa, plural striper. Stripete is the adjective, striped — the -ete ending turns a noun into \"having that thing\"." },
        { id: "no-u42l4-etmonster", type: "vocab", front: "et mønster", reading: "etmonster", meaning: "pattern", example: { jp: "Dette mønsteret er gammelt, og bestemor strikker det ofte.", en: "This pattern is old, and grandmother knits it often." }, drill: { jp: "En genser med et mønster er fin", en: "A jumper with a pattern is nice" }, accept: ["a pattern", "design", "a design"], hint: "MURN-ster, hand-folded to etmonster. Neuter: definite mønsteret, plural mønstre. Both the knitting pattern you follow and the pattern you see — and the Setesdal mønster on a genser is recognised across the country." },
        { id: "no-u42l4-eirute", type: "vocab", front: "ei rute", reading: "eirute", meaning: "check", example: { jp: "Ei skjorte med ruter er fin, men jeg liker striper bedre.", en: "A shirt with checks is nice, but I like stripes better." }, drill: { jp: "Denne skjorta har ei rute", en: "This shirt has a check" }, accept: ["a square", "a check", "a windowpane", "a pane"], hint: "RUE-te. Feminine: definite ruta, plural ruter — and rutete is the adjective, checked. The same word is a windowpane and a bus route, which is a lot of work for four letters." },
      ],
    },
  ],
};
