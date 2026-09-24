// NO Unit 65 — Miljø og klima ("Environment and climate") — B1
// ─────────────────────────────────────────────────────────────────────────────
// Slot scaffolded "Environment and place"; RETHEMED to miljø og klima per
// CLAUDE.md → "No front language" (the slot title is a placeholder, and the
// language decides the content of the slot). PLACE is already covered twice in
// this corpus — u45 "Retning og geografi" owns kyst, dal, hav, fjord, fylke,
// område, landsdel, and u34 "Natur og vitenskap" owns natur, plante, jord, luft,
// miljø, planet. Authoring a third place unit would have duplicated a theme,
// which RUNBOOK §6 records as this project's most expensive failure mode. What
// is genuinely missing is the climate conversation a B1 Norwegian has every
// week: utslipp, gjenvinning, strøm, bærekraft, vern.
//
// Conventions are unit1.js §1–§9. Bokmål.
//
// ⚠ MASS NOUNS ARE TAUGHT BARE (unit1.js §1b): `avfall`, `gjenvinning`, `strøm`,
// `forurensning`, `vern` and `sparing` (u66) carry no article on the card, because the indefinite
// singular is not idiomatic for the sense being taught — "et avfall" is not
// something a Norwegian says. Gender is named in the hint instead, exactly as
// the base does with vann, melk, mat, luft, jord, energi and plast.
// ⚠ CORRECTED ON MERGE DAY 2026-09-17: this used to say `et forbruk` "goes the
// other way and is articled". It does not — the lemma is a mass noun and is taught
// bare, like avfall beside it, and the merged tree had it articled here and bare at
// u79l2, which is how the contradiction was found. A MODIFIED instance still takes an
// article (et høyt forbruk), and that is true of any mass noun; it does not make the
// citation form articled. §1's test is the sense, not the countability.
// ⚠ `et utslipp` IS ARTICLED ON PURPOSE and survived the Truth Layer's review of
// this exact carve-out: it is genuinely countable, its own example is plural
// (utslippene fra biler) and its hint teaches the count paradigm (flere utslipp).
// The eleven fronts that went bare had the opposite profile — a hint conceding
// "normally singular" and a drill forcing a string no Norwegian writes.
// ⚠ THE FOUR SURVIVORS OF THE FULL §1b SWEEP, argued rather than assumed:
//   et utslipp (above) · et hensyn and et standpunkt (u73 — both carry a bare
//   idiom, ta hensyn til / ta standpunkt til, AND a countable sense, et viktig
//   hensyn, flere standpunkt; the cards teach the countable one) · en student
//   (u74 — bare only after være, which is the profession rule, not mass-ness).
//   u71l3's en sannhet · en frihet · en virkelighet · en svakhet stay articled
//   for TWO reasons and the second is the load-bearing one: all four are
//   countable in the sense taught (en gammel sannhet, flere sannheter), and the
//   LESSON'S WHOLE POINT is that -het nouns are masculine — a bare front would
//   delete the one thing the lesson exists to show.
//
// GENDER: -ing/-ning feminine (ei klimaendring, ei oppvarming); -else masculine;
// compounds take the gender of their LAST element (ei endring → ei klimaendring,
// en gass → en klimagass).
// ⚠ `en kilde` is MASCULINE even though it looks like the feminine -e nouns —
// kilden, never kilda, which is Nynorsk-flavoured. Corrected after the content
// gate BLOCKed it, 2026-09-16, together with `forurensning` and `vern` below.
// FIRST FEMININE is `ei klimaendring` (l1), carrying the en-/ei- note §1 wants.
//
// SCOPE: frozen base u1–u50 plus this unit's earlier cards. Avoided words are
// listed in unit63.js's header.
// lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT65 = {
  id: "no-u65",
  lang: "no",
  title: "Miljø og klima",
  order: 65,
  stage: "b1",
  lessons: [
    // Lesson 1: the climate itself, and where the emissions come from.
    {
      id: "no-u65l1",
      unit: 65,
      lesson: 1,
      title: "Klima og utslipp",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about the climate changing and say where the emissions come from.",
      items: [
        { id: "no-u65l1-klimaendring", type: "vocab", front: "ei klimaendring", reading: "eiklimaendring", meaning: "a climate change", example: { jp: "Ei klimaendring skjer sakte, og mange ser den ikke.", en: "A climate change happens slowly, and many people do not see it." }, accept: ["climate change"], drill: { jp: "Ei klimaendring skjer over mange år", en: "A climate change happens over many years" }, hint: "et klima (u43) + ei endring (u50). A compound takes the gender of its LAST part, so this is feminine: klimaendringa. Norwegians nearly always say it in the plural — klimaendringene. Print also writes en/-en; this course marks ei so the definite -a stays predictable." },
        { id: "no-u65l1-utslipp", type: "vocab", front: "et utslipp", reading: "etutslipp", meaning: "an emission", example: { jp: "Utslippene fra biler er et stort problem i byen.", en: "Emissions from cars are a big problem in town." }, accept: ["emission", "discharge"], drill: { jp: "Dette er et utslipp vi må stoppe", en: "This is an emission we have to stop" }, hint: "ut + å slippe — what is let out. Neuter, and unchanged in the plural: et utslipp, flere utslipp, utslippet." },
        { id: "no-u65l1-klimagass", type: "vocab", front: "en klimagass", reading: "enklimagass", meaning: "a greenhouse gas", example: { jp: "En klimagass gjør lufta rundt jorda varmere.", en: "A greenhouse gas makes the air around the earth warmer." }, accept: ["greenhouse gas"], drill: { jp: "En klimagass gjør lufta varmere", en: "A greenhouse gas makes the air warmer" }, hint: "Masculine: klimagassen. This is the everyday word in Norwegian news, where English would say CO2." },
        { id: "no-u65l1-forurensning", type: "vocab", front: "forurensning", reading: "forurensning", meaning: "pollution", example: { jp: "Forurensninga i lufta er verst om vinteren.", en: "The pollution in the air is worst in winter." }, accept: ["pollution", "contamination"], drill: { jp: "Det er forurensning i elva", en: "There is pollution in the river" }, hint: "From å forurense, the next card. ⚠ A MASS noun, so no article on the card (unit1 §1b) — ei forurensning is not something a Norwegian writes. Feminine, definite forurensninga." },
        { id: "no-u65l1-forurense", type: "vocab", front: "å forurense", reading: "aforurense", meaning: "to pollute", example: { jp: "Biler forurenser lufta i byen hver dag.", en: "Cars pollute the air in town every day." }, accept: ["pollute", "to contaminate"], drill: { jp: "Det er lett å forurense ei elv", en: "It is easy to pollute a river" }, hint: "for- + urein, \"unclean\". forurenser, forurenset. The for- here is the same one that turns bruke into forbruke." },
        { id: "no-u65l1-oppvarming", type: "vocab", front: "ei oppvarming", reading: "eioppvarming", meaning: "a warming", example: { jp: "Oppvarminga av jorda går fort nå.", en: "The warming of the earth is going fast now." }, accept: ["warming", "heating", "warm-up"], drill: { jp: "Vi ser ei oppvarming av jorda", en: "We are seeing a warming of the earth" }, hint: "å varme opp → ei oppvarming, oppvarminga. Also the ordinary word for heating a house, and for a warm-up before sport." },
      ],
    },
    // Lesson 2: what happens to what you throw away.
    {
      id: "no-u65l2",
      unit: 65,
      lesson: 2,
      title: "Avfall og gjenvinning",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Sort your rubbish and say what happens to it afterwards.",
      items: [
        { id: "no-u65l2-avfall", type: "vocab", front: "avfall", reading: "avfall", meaning: "waste", example: { jp: "Avfallet fra kjøkkenet går i en egen pose.", en: "The waste from the kitchen goes in its own bag." }, accept: ["rubbish", "garbage", "refuse"], drill: { jp: "Vi kaster avfall hver uke", en: "We throw out waste every week" }, hint: "av + å falle — what falls away. A MASS noun, so no article on the card (unit1 §1b): neuter, definite avfallet." },
        { id: "no-u65l2-soppelbotte", type: "vocab", front: "ei søppelbøtte", reading: "eisoppelbotte", meaning: "an indoor bin", example: { jp: "Søppelbøtta står under bordet på kjøkkenet.", en: "The rubbish bin is under the table in the kitchen." }, accept: ["bin", "rubbish bin", "waste bin", "trash can"], drill: { jp: "Vi har ei søppelbøtte på kjøkkenet", en: "We have a rubbish bin in the kitchen" }, hint: "søppel + ei bøtte (u30). Feminine: søppelbøtta. The big one outside is en søppelkasse (u30). Both ø's fold to o in the reading." },
        { id: "no-u65l2-gjenvinning", type: "vocab", front: "gjenvinning", reading: "gjenvinning", meaning: "recycling", example: { jp: "Gjenvinning av glass er lett, og alle kan gjøre det.", en: "Recycling glass is easy, and everyone can do it." }, accept: ["recycling"], drill: { jp: "Gjenvinning av glass er lett", en: "Recycling glass is easy" }, hint: "gjen- (again) + å vinne (u44) — winning the material back. A mass noun, so bare: feminine, definite gjenvinninga." },
        { id: "no-u65l2-gjenvinne", type: "vocab", front: "å gjenvinne", reading: "agjenvinne", meaning: "to recycle", example: { jp: "Vi gjenvinner plast og glass i Norge.", en: "We recycle plastic and glass in Norway." }, accept: ["recycle", "to recover"], drill: { jp: "Det er lett å gjenvinne glass", en: "It is easy to recycle glass" }, hint: "It follows å vinne (u44) exactly: gjenvinner, gjenvant, har gjenvunnet. Same gjen- as gjenkjenne (u63) and gjenta (u33)." },
        { id: "no-u65l2-sortere", type: "vocab", front: "å sortere", reading: "asortere", meaning: "to sort", example: { jp: "Vi sorterer glass og plast i hver sin pose.", en: "We sort glass and plastic into separate bags." }, accept: ["sort", "to separate", "to sort out"], drill: { jp: "Vi pleier å sortere glass og plast", en: "We usually sort glass and plastic" }, hint: "sorterer, sorterte. Another regular -ere verb. Å sortere søppel is a daily word in Norway, not a technical one." },
        { id: "no-u65l2-forbruk", type: "vocab", front: "forbruk", reading: "forbruk", meaning: "consumption", example: { jp: "Forbruket av plast er høyt i Norge.", en: "Plastic consumption is high in Norway." }, accept: ["consumption", "usage"], drill: { jp: "Vi har et høyt forbruk", en: "We have a high consumption" }, hint: "for- + å bruke (u17). Intetkjønn: bestemt forbruket. Massesubstantiv, derfor bart oppslag (unit1.js §1b) — men et MODIFISERT forbruk tar artikkel: et høyt forbruk." },
      ],
    },
    // Lesson 3: where the power comes from, and why it should last.
    {
      id: "no-u65l3",
      unit: 65,
      lesson: 3,
      title: "Energi og ressurser",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about where electricity comes from and why a resource has to last.",
      items: [
        { id: "no-u65l3-strom", type: "vocab", front: "strøm", reading: "strom", meaning: "electricity", example: { jp: "Strømmen er dyr om vinteren, og alle snakker om den.", en: "Electricity is expensive in winter, and everyone talks about it." }, accept: ["power", "current"], drill: { jp: "Strøm er dyrt om vinteren", en: "Electricity is expensive in winter" }, hint: "A mass noun in this sense, so bare: masculine, definite strømmen. It is also a current in a river. Strømmen er dyr is what Norwegians say about the bill." },
        { id: "no-u65l3-kraftverk", type: "vocab", front: "et kraftverk", reading: "etkraftverk", meaning: "a power plant", example: { jp: "Kraftverket i dalen gir strøm til mange hus.", en: "The power plant in the valley supplies electricity to many houses." }, accept: ["power plant", "power station"], drill: { jp: "Norge har et kraftverk i hver dal", en: "Norway has a power plant in every valley" }, hint: "ei kraft (u34) + et verk. Neuter: kraftverket. Nearly all of Norway's power is vannkraft, from rivers." },
        { id: "no-u65l3-ressurs", type: "vocab", front: "en ressurs", reading: "enressurs", meaning: "a resource", example: { jp: "Vann er en viktig ressurs i verden.", en: "Water is an important resource in the world." }, accept: ["resource"], drill: { jp: "Vann er en ressurs i verden", en: "Water is a resource in the world" }, hint: "Masculine: ressursen. Stress at the end: re-SURS." },
        { id: "no-u65l3-baerekraftig", type: "vocab", front: "bærekraftig", reading: "baerekraftig", meaning: "sustainable", example: { jp: "Byen vil bli mer bærekraftig, men det tar tid.", en: "The town wants to become more sustainable, but it takes time." }, accept: ["sustainable"], drill: { jp: "Vi trenger en bærekraftig by", en: "We need a sustainable town" }, hint: "å bære + ei kraft (u34): what can carry its own weight. -ig adjectives never add -t in the neuter: et bærekraftig valg." },
        { id: "no-u65l3-forbruke", type: "vocab", front: "å forbruke", reading: "aforbruke", meaning: "to consume", example: { jp: "Vi forbruker mye vann om sommeren.", en: "We consume a lot of water in the summer." }, accept: ["consume", "to use up"], drill: { jp: "Det er lett å forbruke mye vann", en: "It is easy to consume a lot of water" }, hint: "for- + å bruke (u17): to use something UP, rather than simply to use it. forbruker, forbrukte." },
        { id: "no-u65l3-fornybar", type: "vocab", front: "fornybar", reading: "fornybar", meaning: "renewable", example: { jp: "Sol og vind er fornybar energi som aldri tar slutt.", en: "Sun and wind are renewable energy that never runs out." }, drill: { jp: "Vind er en fornybar ressurs", en: "Wind is a renewable resource" }, accept: ["that renews itself", "sustainable (of energy)", "regenerating"], hint: "FOR-nue-bar. Å fornye, to renew, plus -bar, the ending that means \"able to be\" — the same -bar as in bærekraftig's cousin brukbar. Neuter fornybart, plural fornybare." },
      ],
    },
    // Lesson 4: what is protected, and what is lost when nobody protects it.
    {
      id: "no-u65l4",
      unit: 65,
      lesson: 4,
      title: "Å verne naturen",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say what ought to be protected and what is being lost.",
      items: [
        { id: "no-u65l4-verne", type: "vocab", front: "å verne", reading: "averne", meaning: "to safeguard", example: { jp: "Staten verner skogen rundt byen.", en: "The state protects the forest around the town." }, accept: ["protect", "to safeguard", "to conserve", "to protect"], drill: { jp: "Det er viktig å verne naturen", en: "It is important to protect nature" }, hint: "verner, vernet. There is usually a law behind it — verne et område. Å passe (u15) is the everyday, personal one." },
        { id: "no-u65l4-vern", type: "vocab", front: "vern", reading: "vern", meaning: "protection", example: { jp: "Vernet av elva kom sent, men det kom.", en: "The protection of the river came late, but it came." }, accept: ["protection", "conservation", "safeguard"], drill: { jp: "Elva trenger vern i loven", en: "The river needs protection in the law" }, hint: "⚠ A MASS noun, so no article on the card (unit1 §1b): neuter, definite vernet. The noun behind å verne, and it lives mostly inside compounds: naturvern, miljøvern, personvern (u75)." },
        { id: "no-u65l4-art", type: "vocab", front: "en art", reading: "enart", meaning: "a species", example: { jp: "Vi har mange arter i skogen som ingen har sett.", en: "We have many species in the forest that nobody has seen." }, accept: ["species", "kind", "sort"], drill: { jp: "Denne skogen har en art fra Europa", en: "This forest has a species from Europe" }, hint: "Masculine: arten, flere arter. A biological species in science, and simply \"kind\" in everyday speech." },
        { id: "no-u65l4-artsmangfold", type: "vocab", front: "et artsmangfold", reading: "etartsmangfold", meaning: "biodiversity", example: { jp: "Artsmangfoldet i skogen blir mindre hvert år.", en: "The biodiversity in the forest gets smaller every year." }, accept: ["biodiversity", "species diversity"], drill: { jp: "Skogen har et artsmangfold vi må verne", en: "The forest has a biodiversity we must protect" }, hint: "art + mange + fold. Neuter: artsmangfoldet. The -s- in the middle glues the compound together, the same -s- as in arbeidsdag." },
        { id: "no-u65l4-utrydde", type: "vocab", front: "å utrydde", reading: "autrydde", meaning: "to wipe out", example: { jp: "Mennesket kan utrydde en hel art på ti år.", en: "Humans can wipe out a whole species in ten years." }, accept: ["wipe out", "to eradicate", "to exterminate"], drill: { jp: "Det er lett å utrydde en art", en: "It is easy to wipe out a species" }, hint: "ut + å rydde (u16) — to clear away, but completely. utrydder, utryddet." },
        { id: "no-u65l4-truet", type: "vocab", front: "truet", reading: "truet", meaning: "endangered", example: { jp: "Mange arter er truet av et varmere klima i havet.", en: "Many species are endangered by a warmer climate in the sea." }, drill: { jp: "Denne arten er truet i Norge", en: "This species is endangered in Norway" }, accept: ["under threat", "at risk (of dying out)", "threatened"], hint: "TRU-et. It is the past participle of å true, to threaten, doing the work of an adjective — so it never changes: et truet dyr, truede arter is the one form you will also see. En truet art is one step away from å bli utryddet." },
      ],
    },
  ],
};
