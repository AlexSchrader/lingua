// NO Unit 91 — Nyanser og grader (slot: nuance-degree) — B2
// Retitled from the scaffold's English placeholder "Nuance and degree".
// B2 band conventions live in no/unit88.js's header; language-wide in unit1.js.
//
// ⚠️ THE DENSEST SYNONYM RISK IN THE BLOCK, so read unit88.js B5 before editing
// anything here. Degree words are near-synonyms by nature: hovedsakelig and
// overveiende both mean "mostly", marginal and umerkelig both mean "hardly
// anything". The glosses below are written to be MUTUALLY EXCLUSIVE prompts,
// not dictionary definitions, because the produce card shows the gloss and
// grades against exactly one front. Every lesson here was checked with
// tests/unit/corpus-guards.test.mjs GUARD 1.
//
// What B1 already took, and is used freely here but never re-taught: u53
// (Sammenligning og grad) has en grad, et flertall, knapt and vesentlig; u54
// (Tvil og forbehold) has neppe and eventuelt; u73 (Stil 2) has nokså,
// forholdsvis, relativt, snarere and helst. This unit is what is LEFT — the
// precision end, not the hedging end, which B1 has covered twice.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT91 = {
  id: "no-u91",
  lang: "no",
  title: "Nyanser og grader",
  order: 91,
  stage: "b2",
  lessons: [
    {
      id: "no-u91l1",
      unit: 91,
      lesson: 1,
      title: "Vekt og terskel",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say how much a thing actually matters — what settled it, what merely tipped it, and what was too small to feel.",
      items: [
        { id: "no-u91l1-avgjorende", type: "vocab", front: "avgjørende", reading: "avgjorende", meaning: "decisive (it settled the outcome)", example: { jp: "Det avgjørende var ikke prisen, men at de kunne begynne med det samme.", en: "The decisive thing was not the price, but that they could start straight away." }, accept: ["conclusive", "that settles it"], drill: { jp: "Dette er avgjørende for oss", en: "This is decisive for us" }, hint: "Fra å avgjøre. Bøyes ikke: et avgjørende svar, ei avgjørende stemme. ø folder til o, så lesinga er avgjorende." },
        { id: "no-u91l1-utslagsgivende", type: "vocab", front: "utslagsgivende", reading: "utslagsgivende", meaning: "the thing that tipped the balance (between options otherwise equal)", example: { jp: "De to som søkte var like gode, så erfaringa fra et annet land ble utslagsgivende.", en: "The two who applied were equally good, so the experience from another country tipped the balance." }, accept: ["what made the difference in the end", "the tipping factor"], drill: { jp: "Tallene var utslagsgivende her", en: "The figures tipped the balance here" }, hint: "Et utslag + å gi. Bøyes ikke. NB: avgjørende kan stå alene; utslagsgivende forutsetter at det stod likt fra før." },
        { id: "no-u91l1-enterskel", type: "vocab", front: "en terskel", reading: "enterskel", meaning: "threshold (the point where a thing starts to count at all)", example: { jp: "Kommer du under en terskel, får du ingen hjelp i det hele tatt.", en: "If you come in below a threshold, you get no help whatever." }, accept: ["a cut-off point", "a minimum level"], drill: { jp: "Vi ligger under en terskel her", en: "We are below a threshold here" }, hint: "en terskel → terskelen, flertall terskler. Først treet i døra, så alt som må passeres: en terskel for hjelp, for straff, for smerte." },
        { id: "no-u91l1-marginal", type: "vocab", front: "marginal", reading: "marginal", meaning: "marginal (right at the edge of mattering)", example: { jp: "Forskjellen er marginal, men over mange år blir den til penger.", en: "The difference is marginal, but over many years it turns into money." }, accept: ["borderline", "barely significant"], drill: { jp: "Forskjellen er marginal her", en: "The difference is marginal here" }, hint: "Bøyes marginal, marginalt, marginale. Fra en marg, kanten av sida. Marginal sier at noe SÅ VIDT teller — ikke at det ikke teller." },
        { id: "no-u91l1-merkbar", type: "vocab", front: "merkbar", reading: "merkbar", meaning: "noticeable (big enough that you feel it)", example: { jp: "Etter tre uker var det merkbar forskjell, og da begynner hun å tro på det.", en: "After three weeks there was a noticeable difference, and then she begins to believe in it." }, accept: ["perceptible", "you can tell"], drill: { jp: "Det er merkbar forskjell nå", en: "There is a noticeable difference now" }, hint: "Å merke (u42) + -bar, som i brukbar. Bøyes merkbar, merkbart, merkbare. Terskelen for merkbar er mennesket, ikke måleren." },
        { id: "no-u91l1-umerkelig", type: "vocab", front: "umerkelig", reading: "umerkelig", meaning: "imperceptible (too small for anybody to notice)", example: { jp: "Det skjer umerkelig, og derfor oppdager folk det først når det er for sent.", en: "It happens imperceptibly, and that is why people only discover it when it is too late." }, accept: ["unnoticeable", "below what can be felt"], drill: { jp: "Endringa går nesten umerkelig", en: "The change goes almost imperceptibly" }, hint: "u- + merkelig, jamfør uvanlig og ulik (u71). NB: merkelig alene betyr RART. Umerkelig er ikke motsatt av det, men av merkbar." },
      ],
    },
    {
      id: "no-u91l2",
      unit: 91,
      lesson: 2,
      title: "Helt eller delvis",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say exactly how much of a claim you accept — all of it, most of it, some of it, or none of it whatever.",
      items: [
        { id: "no-u91l2-utelukkende", type: "vocab", front: "utelukkende", reading: "utelukkende", meaning: "exclusively (that and nothing else at all)", example: { jp: "Penger går utelukkende til barn under ti år, og det står tydelig i avtalen.", en: "The money goes exclusively to children under ten, and that is stated clearly in the agreement." }, accept: ["solely", "only and nothing besides"], drill: { jp: "Dette gjelder utelukkende nye saker", en: "This applies exclusively to new cases" }, hint: "Å utelukke: å lukke ute alt annet. Bøyes ikke. Sterkeste ordet i denne leksjonen — det tåler ingen unntak." },
        { id: "no-u91l2-hovedsakelig", type: "vocab", front: "hovedsakelig", reading: "hovedsakelig", meaning: "mainly (the greater part of it, with some left over)", example: { jp: "De som kommer er hovedsakelig unge, men det sitter noen eldre bak også.", en: "Those who come are mainly young, but there are some older ones sitting at the back too." }, accept: ["for the most part", "chiefly"], drill: { jp: "Vi bruker hovedsakelig norske kilder", en: "We use mainly Norwegian sources" }, hint: "Et hovud + ei sak: hovedsaken. Bøyes ikke. Sier at resten fins, men er liten." },
        { id: "no-u91l2-overveiende", type: "vocab", front: "overveiende", reading: "overveiende", meaning: "predominantly (weighing heavier on one side when you count up)", example: { jp: "Svaret var overveiende godt, men det som var dårlig var mest tydelig.", en: "The response was predominantly good, but what was bad was the most pointed." }, accept: ["on balance mostly", "weighing more to one side"], drill: { jp: "Svaret er overveiende godt", en: "The response is predominantly good" }, hint: "Å veie over: det tyngste lodde. Bøyes ikke. Hovedsakelig er om MENGDE, overveiende er om VEKTEN når du legger det på vekta." },
        { id: "no-u91l2-tildels", type: "vocab", front: "til dels", reading: "tildels", meaning: "partly (true in some respects and not in others)", example: { jp: "Han har til dels rett, men han glemmer den viktige delen av saken.", en: "He is partly right, but he is forgetting the important part of the matter." }, accept: ["in some respects", "up to a point"], drill: { jp: "Dette stemmer til dels hos oss", en: "This is partly true with us" }, hint: "Fast uttrykk, to ord. Delvis (u51) deler opp MENGDEN; til dels deler opp hvilke SIDER av saken som stemmer." },
        { id: "no-u91l2-langtfra", type: "vocab", front: "langt fra", reading: "langtfra", meaning: "far from (nowhere near what was claimed)", example: { jp: "Arbeidet er langt fra ferdig, uansett hva de sier i avisa.", en: "The work is far from finished, whatever they say in the newspaper." }, accept: ["nowhere near", "a long way short of"], drill: { jp: "Vi er langt fra enige ennå", en: "We are far from agreed yet" }, hint: "Fast uttrykk. Kan stå aleine som svar: «Er det ferdig?» «Langt fra.» Sier at avstanden er stor, ikke bare at svaret er nei." },
        { id: "no-u91l2-paingenmate", type: "vocab", front: "på ingen måte", reading: "paingenmate", meaning: "by no means (not in any way whatever)", example: { jp: "Dette er på ingen måte det samme som å si ja til alt sammen.", en: "This is by no means the same as saying yes to all of it." }, accept: ["in no way at all", "absolutely not"], drill: { jp: "Det er på ingen måte sikkert", en: "That is by no means certain" }, hint: "Fast uttrykk, tre ord. Sterkere og mer formelt enn ikke. Åpner ofte setninga, og da kommer verbet rett etter (V2)." },
      ],
    },
    {
      id: "no-u91l3",
      unit: 91,
      lesson: 3,
      title: "Presist eller omtrent",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Be honest about how precise you are being — to the decimal, roughly, or only if you go by the letter.",
      items: [
        { id: "no-u91l3-noyaktig", type: "vocab", front: "nøyaktig", reading: "noyaktig", meaning: "exactly (right down to the last detail)", example: { jp: "Hun husker nøyaktig hva han sa, og hun kan si det ord for ord.", en: "She remembers exactly what he said, and she can say it word for word." }, accept: ["precisely so", "to the letter"], drill: { jp: "Vi vet nøyaktig hva som skjer", en: "We know exactly what is happening" }, hint: "Bøyes nøyaktig, nøyaktige. Både adjektiv og adverb: et nøyaktig tall, og han regner nøyaktig. ø folder til o." },
        { id: "no-u91l3-presis", type: "vocab", front: "presis", reading: "presis", meaning: "precise (sharply defined, with no room to slide)", example: { jp: "Vi trenger et presis ord her, for det gamle betyr altfor mange ting.", en: "We need a precise word here, because the old one means far too many things." }, accept: ["sharply defined", "exact in meaning"], drill: { jp: "Dette er et presis krav", en: "This is a precise requirement" }, hint: "Bøyes presis, presist, presise. NB: presis brukes også om tid: å komme presis er å komme på minuttet." },
        { id: "no-u91l3-tilnaermet", type: "vocab", front: "tilnærmet", reading: "tilnaermet", meaning: "approximately (close to, without claiming to hit it)", example: { jp: "De to gruppene er tilnærmet like store, så resultatet kan gå begge veier.", en: "The two groups are approximately equally large, so the result could go either way." }, accept: ["near enough to", "close to but not exactly"], drill: { jp: "Tallene er tilnærmet like her", en: "The figures are approximately equal here" }, hint: "Fra å tilnærme seg. Bøyes ikke. Tilnærmet er PRESIST om sin egen uklarhet — det sier hvor nær, ikke bare at det er omtrent. æ folder til ae." },
        { id: "no-u91l3-omtrentlig", type: "vocab", front: "omtrentlig", reading: "omtrentlig", meaning: "rough (only roughly right, and loose about it)", example: { jp: "Svaret hans var omtrentlig, og derfor kunne ingen bruke det til noe.", en: "His answer was rough, and that is why nobody could use it for anything." }, accept: ["vague in its precision", "loosely approximate"], drill: { jp: "Dette er et omtrentlig tall", en: "This is a rough figure" }, hint: "Fra omtrent (u26). Bøyes omtrentlig, omtrentlige. ⚠️ Ofte litt negativt: omtrentlig arbeid er slurv, mens tilnærmet er ærlig." },
        { id: "no-u91l3-grovtsett", type: "vocab", front: "grovt sett", reading: "grovtsett", meaning: "broadly speaking (setting the detail aside on purpose)", example: { jp: "Grovt sett er det to grupper her, selv om virkeligheten er mye mer blandet.", en: "Broadly speaking there are two groups here, even though the reality is much more mixed." }, accept: ["in broad terms", "painting with a wide brush"], drill: { jp: "Vi er grovt sett enige om dette", en: "We broadly speaking agree about this" }, hint: "Fast uttrykk. Grov + å se. Står gjerne først, og da kommer verbet rett etter (V2). Varsler at du forenkler med vilje." },
        { id: "no-u91l3-strengttatt", type: "vocab", front: "strengt tatt", reading: "strengttatt", meaning: "strictly speaking (if you go by the exact letter of it)", example: { jp: "Strengt tatt er det ikke lov, men ingen har nevnt det på mange år.", en: "Strictly speaking it is not allowed, but nobody has mentioned it for many years." }, accept: ["technically", "by the letter of the rule"], drill: { jp: "Dette er strengt tatt feil", en: "This is strictly speaking wrong" }, hint: "Fast uttrykk. Streng + å ta. Varsler at det følgende er riktig på papiret, og at praksis gjerne er en annen." },
      ],
    },
    {
      id: "no-u91l4",
      unit: 91,
      lesson: 4,
      title: "Små forskjeller",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe fine differences and how they arrive — step by step or all at once, and when something is leaning the wrong way.",
      items: [
        { id: "no-u91l4-gradvis", type: "vocab", front: "gradvis", reading: "gradvis", meaning: "gradually (by small steps over time)", example: { jp: "Det ble gradvis bedre, men ingen kan si nøyaktig når det ble bra.", en: "It got gradually better, but nobody can say exactly when it became good." }, accept: ["step by step", "little by little"], drill: { jp: "Det blir gradvis bedre nå", en: "It is getting gradually better now" }, hint: "En grad (u53) + -vis, som i delvis (u51). Bøyes ikke. Gradvis sier noe om VEIEN, ikke om hvor det ender." },
        { id: "no-u91l4-bratt", type: "vocab", front: "brått", reading: "bratt", meaning: "abruptly (all at once and without warning)", example: { jp: "Han sluttet brått, og ingen på jobben hadde hørt noe om det.", en: "He stopped abruptly, and nobody at work had heard anything about it." }, accept: ["suddenly", "without warning"], drill: { jp: "Alt ble brått ulikt der", en: "Everything became abruptly different there" }, hint: "Adverbet til brå. ⚠️ Lesinga er bratt fordi å folder til a — men skrivemåten brått og ordet bratt (steep) er TO ulike ord." },
        { id: "no-u91l4-ennyanse", type: "vocab", front: "en nyanse", reading: "ennyanse", meaning: "nuance (a fine shade of difference in meaning)", example: { jp: "Det er en nyanse mellom å love noe og å si at du skal prøve.", en: "There is a nuance between promising something and saying that you will try." }, accept: ["a shade of meaning", "a fine distinction"], drill: { jp: "Her er en nyanse vi glemte", en: "Here is a nuance we forgot" }, hint: "en nyanse → nyansen, flertall nyanser. Fra fransk, uttalt ny-ANG-se. Å nyansere (u73) er verbet. En forskjell (u23) er synlig; en nyanse må du se etter." },
        { id: "no-u91l4-pafallende", type: "vocab", front: "påfallende", reading: "pafallende", meaning: "striking (odd enough that it draws your attention)", example: { jp: "Det er påfallende at ingen av dem vil svare på det samme.", en: "It is striking that none of them will answer the same thing." }, accept: ["conspicuous", "noticeably odd"], drill: { jp: "Dette er påfallende likt", en: "This is strikingly alike" }, hint: "På + å falle: det faller deg inn. Bøyes ikke. Merkbar (l1) er om STØRRELSE; påfallende er om at noe VEKKER spørsmål." },
        { id: "no-u91l4-enskjevhet", type: "vocab", front: "en skjevhet", reading: "enskjevhet", meaning: "a skew (a lean in the figures that should not be there)", example: { jp: "Det er en skjevhet i utvalget, for de spurte bare folk som allerede var med.", en: "There is a skew in the selection, because they only asked people who were already taking part." }, accept: ["a bias in the data", "an imbalance"], drill: { jp: "Her er en skjevhet vi må rette", en: "Here is a skew we must correct" }, hint: "en skjevhet → skjevheten. -het er HANKJØNN (unit88 regel B3), aldri ei. Skjev + -het. Partisk (u89) er om folk; en skjevhet er om tall." },
        { id: "no-u91l4-ujevn", type: "vocab", front: "ujevn", reading: "ujevn", meaning: "uneven (not the same all the way through)", example: { jp: "Kvaliteten er ujevn, og det er verre enn om alt hadde vært likt.", en: "The quality is uneven, and that is worse than if everything had been the same." }, accept: ["inconsistent", "varying from part to part"], drill: { jp: "Arbeidet er ujevn i kvalitet", en: "The work is uneven in quality" }, hint: "u- + jevn (u59). Bøyes ujevn, ujevnt, ujevne. Om overflater, om kvalitet og om fordeling: ei ujevn fordeling er urettferdig." },
      ],
    },
  ],
};
