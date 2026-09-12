// PT Unit 65 — O ambiente e o território (slot: environment) — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 BLOCK 2, unit 2 of 13. Three shipped units already own the concrete layer
// of this domain: u26 (a árvore, a floresta, o céu, the animals), u34 (o
// ambiente, a natureza, a poluição, reciclar, proteger, o clima, a Terra) and
// u46 (the compass, a costa, a região, o solo). Re-opening any of them at the
// same altitude is the trap the crew board records from es B1, so this unit
// takes the layer none of them has: CONSUMPTION and CONSEQUENCE — where energy
// comes from, what is thrown away, what the climate is doing, and what that
// does to the land people live on.
//
// Deliberate boundaries:
//   - u34 teaches `reciclar`, the verb. This unit teaches `a reciclagem`, the
//     system — a different word for a different thing, not a second mastery
//     track on the same one, and the hint says so.
//   - u34 teaches `proteger` and `a poluição`; both are used here in examples
//     and carded nowhere in this block.
//   - `a alteração` is carded, `alterar` is not: same lexeme, and the noun is
//     what the learner needs ("as alterações climáticas" is the standard
//     Portuguese term for climate change).
//   - The energy sources are taught as pairs the learner can contrast —
//     o petróleo / o carvão against renovável — because a B1 learner talking
//     about energy is always comparing, never listing.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT65 = {
  id: "pt-u65",
  lang: "pt",
  title: "O ambiente e o território",
  order: 65,
  stage: "b1",
  lessons: [
    {
      id: "pt-u65l1",
      unit: 65,
      lesson: 1,
      title: "A energia",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Say where a country's energy comes from and compare one source with another.",
      items: [
        { id: "pt-u65l1-aenergia", type: "vocab", front: "a energia", reading: "aenergia", meaning: "energy", example: { jp: "A energia do vento é cada vez mais importante em Portugal, no entanto o país ainda precisa de gás.", en: "Wind energy is more and more important in Portugal; however, the country still needs gas." }, drill: { jp: "A energia do vento é importante", en: "Wind energy is important" }, accept: ["power", "the energy"], hint: "e-ner-ZHEE-uh. Both the physics and the personal kind — não tenho energia hoje works exactly as in English. A eletricidade (u30) is what arrives in the house; a energia is the wider idea." },
        { id: "pt-u65l1-renovavel", type: "vocab", front: "renovável", reading: "renovavel", meaning: "renewable", example: { jp: "A energia renovável é mais limpa, por isso o governo quer fechar as fábricas antigas.", en: "Renewable energy is cleaner, so the government wants to close the old factories." }, drill: { jp: "A energia renovável é mais limpa", en: "Renewable energy is cleaner" }, accept: ["renewable"], hint: "rre-nu-VAH-vel; plural renováveis, like all -vel adjectives (possível / possíveis). Sits after the noun: energia renovável, never renovável energia." },
        { id: "pt-u65l1-opetroleo", type: "vocab", front: "o petróleo", reading: "opetroleo", meaning: "oil (crude oil)", example: { jp: "O petróleo ainda paga quase tudo em alguns países, mas o preço muda todos os meses.", en: "Oil still pays for almost everything in some countries, but the price changes every month." }, drill: { jp: "O petróleo é caro este ano", en: "Oil is expensive this year" }, accept: ["oil", "crude oil", "petroleum"], hint: "pe-TROH-lyu. The crude, the industry. The stuff you put in the car is a gasolina; cooking oil is o azeite (olive) or o óleo — three different words English collapses into one." },
        { id: "pt-u65l1-ocarvao", type: "vocab", front: "o carvão", reading: "ocarvao", meaning: "coal", example: { jp: "O carvão foi muito usado no passado, no entanto quase ninguém quer usar carvão hoje.", en: "Coal was widely used in the past; however, almost nobody wants to use coal today." }, drill: { jp: "O carvão foi usado no passado", en: "Coal was used in the past" }, accept: ["coal", "charcoal"], hint: "kar-VOWNG; plural os carvões. Also the charcoal under a grill — carne no carvão is how a Portuguese menu says charcoal-grilled." },
        { id: "pt-u65l1-oconsumo", type: "vocab", front: "o consumo", reading: "oconsumo", meaning: "consumption", example: { jp: "O consumo de água é maior no verão, por isso a cidade pede ajuda a toda a população.", en: "Water consumption is higher in summer, so the city asks the whole population for help." }, drill: { jp: "O consumo de água é maior no verão", en: "Water consumption is higher in summer" }, accept: ["consumption", "use", "usage"], hint: "kon-SOO-mu. How much of something gets used up — água, energia, carne. For shopping and buying, Portuguese says o consumidor for the person doing it." },
        { id: "pt-u65l1-consumir", type: "vocab", front: "consumir", reading: "consumir", meaning: "to consume", example: { jp: "Uma casa antiga consome muito mais energia, mas o trabalho também é caro.", en: "An old house consumes much more energy, but the work is expensive too." }, drill: { jp: "A casa antiga vai consumir energia", en: "The old house is going to consume energy" }, accept: ["consume", "to use up", "use"], hint: "kon-su-MEER. Regular -ir verb. Used of energy, water and food; of time Portuguese prefers gastar (u18), which A1 already gave you." },
      ],
    },
    {
      id: "pt-u65l2",
      unit: 65,
      lesson: 2,
      title: "O desperdício e os resíduos",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Talk about waste — what is thrown away, what is recycled, and how to use less of something.",
      items: [
        { id: "pt-u65l2-odesperdicio", type: "vocab", front: "o desperdício", reading: "odesperdicio", meaning: "waste", example: { jp: "O desperdício de comida é enorme nos restaurantes, no entanto muitas famílias não têm o que comer.", en: "Food waste is enormous in restaurants; however, many families do not have enough to eat." }, drill: { jp: "O desperdício de comida é enorme", en: "Food waste is enormous" }, accept: ["waste", "wastefulness", "the waste"], hint: "desh-per-DEE-syu. The ACT of wasting — the stuff itself is os resíduos or o lixo (u21). Portuguese keeps the two apart where English says \"waste\" for both." },
        { id: "pt-u65l2-desperdicar", type: "vocab", front: "desperdiçar", reading: "desperdicar", meaning: "to waste", example: { jp: "Não é bom desperdiçar água no verão, porque a seca chega quase todos os anos.", en: "It is not good to waste water in summer, because drought arrives almost every year." }, drill: { jp: "Não vamos desperdiçar água este verão", en: "We are not going to waste water this summer" }, accept: ["waste", "to squander", "throw away"], hint: "desh-per-dee-SAR. The ç keeps the s sound before a — same spelling rule as começar / começa. Of money Portugal also says gastar mal." },
        { id: "pt-u65l2-osresiduos", type: "vocab", front: "os resíduos", reading: "osresiduos", meaning: "waste materials", example: { jp: "Os resíduos da fábrica vão para o rio, por isso a água já não está limpa.", en: "The factory's waste goes into the river, so the water is no longer clean." }, drill: { jp: "Os resíduos da fábrica vão para o rio", en: "The factory's waste goes into the river" }, accept: ["waste", "residue", "the waste"], hint: "rre-ZEE-doo-ush. Plural by default — the singular o resíduo is a chemist's word. This is the formal term you see on signs and in the news; o lixo (u21) is what you carry out on a Tuesday." },
        { id: "pt-u65l2-areciclagem", type: "vocab", front: "a reciclagem", reading: "areciclagem", meaning: "recycling", example: { jp: "A reciclagem melhorou muito neste século, mas o vidro ainda chega sujo.", en: "Recycling has improved a lot this century, but the glass still arrives dirty." }, drill: { jp: "A reciclagem melhorou muito", en: "Recycling has improved a lot" }, accept: ["recycling", "the recycling"], hint: "rre-si-KLAH-zhaym. The system and the practice; u34 already taught you reciclar, the thing you personally do. Portugal's bins are colour-coded — o vidro green, o papel blue, o plástico yellow." },
        { id: "pt-u65l2-afabrica", type: "vocab", front: "a fábrica", reading: "afabrica", meaning: "factory", example: { jp: "A fábrica fechou o ano passado, no entanto muitas pessoas da aldeia ainda trabalham lá perto.", en: "The factory closed last year; however, many people from the village still work nearby." }, drill: { jp: "A fábrica fechou o ano passado", en: "The factory closed last year" }, accept: ["factory", "plant", "the factory"], hint: "FAH-bree-kuh, stress on the first syllable, which is why it carries the accent. A false friend for English ears: fabric is o tecido — a fábrica is the building." },
        { id: "pt-u65l2-reduzir", type: "vocab", front: "reduzir", reading: "reduzir", meaning: "to reduce", example: { jp: "A empresa quer reduzir o consumo de energia, por isso mudou todas as luzes da fábrica.", en: "The company wants to reduce its energy consumption, so it changed all the factory's lights." }, drill: { jp: "A empresa quer reduzir o consumo", en: "The company wants to reduce consumption" }, accept: ["reduce", "to cut", "to lower", "cut down"], hint: "rre-du-ZEER. Irregular in the eu form — eu reduzo. The opposite pair Portuguese uses in this register is reduzir / aumentar." },
      ],
    },
    {
      id: "pt-u65l3",
      unit: 65,
      lesson: 3,
      title: "As alterações do clima",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe what a changing climate does — drought, flooding, and species that are disappearing — and say what is at risk.",
      items: [
        { id: "pt-u65l3-aalteracao", type: "vocab", front: "a alteração", reading: "aalteracao", meaning: "change (an alteration)", example: { jp: "As alterações do clima já mudaram o verão português, no entanto muitas pessoas ainda não querem falar do assunto.", en: "Climate change has already changed the Portuguese summer; however, many people still do not want to talk about the subject." }, drill: { jp: "A alteração do clima mudou tudo", en: "The change in the climate changed everything" }, accept: ["change", "alteration", "the change"], hint: "al-te-ra-SOWNG; plural as alterações. As alterações climáticas is the standard term for climate change — always plural. A mudança (u29's mudar) is any change; uma alteração is a change made TO something that already existed." },
        { id: "pt-u65l3-aseca", type: "vocab", front: "a seca", reading: "aseca", meaning: "drought", example: { jp: "A seca do ano passado foi a pior do século, por isso os campos ficaram sem água durante meses.", en: "Last year's drought was the worst of the century, so the fields were left without water for months." }, drill: { jp: "A seca do ano passado foi terrível", en: "Last year's drought was terrible" }, accept: ["drought", "the drought", "dry spell"], hint: "SEH-kuh, open e. The noun from seco (u26, dry) — and the south of Portugal has enough of them that the word is everyday, not technical." },
        { id: "pt-u65l3-ainundacao", type: "vocab", front: "a inundação", reading: "ainundacao", meaning: "flood", example: { jp: "A inundação fechou a estrada durante dois dias, mas ninguém ficou doente.", en: "The flood closed the road for two days, but nobody fell ill." }, drill: { jp: "A inundação fechou a estrada", en: "The flood closed the road" }, accept: ["flood", "flooding", "the flood"], hint: "ee-nun-da-SOWNG; plural as inundações. In everyday speech Portugal also says as cheias, literally \"the fulls\" — same event, less formal." },
        { id: "pt-u65l3-ameacar", type: "vocab", front: "ameaçar", reading: "ameacar", meaning: "to threaten", example: { jp: "O fogo ameaçou a aldeia toda a noite, no entanto os bombeiros conseguiram proteger as casas.", en: "The fire threatened the village all night; however, the firefighters managed to protect the houses." }, drill: { jp: "O fogo vai ameaçar a aldeia", en: "The fire is going to threaten the village" }, accept: ["threaten", "to endanger", "put at risk"], hint: "a-me-a-SAR. Same ç-before-a rule as desperdiçar. Used of people and of things alike: o mar ameaça a costa is ordinary Portuguese, not a metaphor reserved for poetry." },
        { id: "pt-u65l3-desaparecer", type: "vocab", front: "desaparecer", reading: "desaparecer", meaning: "to disappear", example: { jp: "Muitas espécies vão desaparecer se a água continuar tão quente, por isso os cientistas pedem ajuda aos governos.", en: "Many species will disappear if the water stays this warm, so the scientists are asking governments for help." }, drill: { jp: "Muitas espécies vão desaparecer depressa", en: "Many species are going to disappear quickly" }, accept: ["disappear", "vanish", "to go missing"], hint: "de-za-pa-re-SER. Built from aparecer with des- reversing it — the same des- that turns ligar into desligar (u18). Of a person it also means to go missing." },
        { id: "pt-u65l3-aespecie", type: "vocab", front: "a espécie", reading: "aespecie", meaning: "species", example: { jp: "Esta espécie de pássaro só vive no norte do país, além disso precisa de floresta antiga.", en: "This species of bird only lives in the north of the country; what is more, it needs old forest." }, drill: { jp: "A espécie vive no norte do país", en: "The species lives in the north of the country" }, accept: ["species", "kind", "sort", "the species"], hint: "shh-PEH-syuh. Same form singular and plural — uma espécie, duas espécies, only the article and the -s move. Also \"a sort of\": uma espécie de sopa is how Portuguese hedges a description." },
      ],
    },
    {
      id: "pt-u65l4",
      unit: 65,
      lesson: 4,
      title: "A paisagem e o campo",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Describe a stretch of country — how it looks, whether it is rural or urban, and what is grown on it.",
      items: [
        { id: "pt-u65l4-apaisagem", type: "vocab", front: "a paisagem", reading: "apaisagem", meaning: "landscape", example: { jp: "A paisagem do Douro é conhecida em todo o mundo, por isso a região recebe turistas o ano inteiro.", en: "The Douro landscape is known all over the world, so the region receives tourists all year round." }, drill: { jp: "A paisagem do Douro é conhecida", en: "The Douro landscape is well known" }, accept: ["landscape", "scenery", "the landscape", "view"], hint: "pai-ZAH-zhaym; plural as paisagens. The country seen as a whole — a vista (u23) is the particular view you get from where you stand." },
        { id: "pt-u65l4-rural", type: "vocab", front: "rural", reading: "rural", meaning: "rural", example: { jp: "A vida rural é mais calma, no entanto as aldeias perdem pessoas todos os anos.", en: "Rural life is calmer; however, the villages lose people every year." }, drill: { jp: "A vida rural é mais calma", en: "Rural life is calmer" }, accept: ["rural", "country", "countryside"], hint: "rru-RAL; plural rurais. Goes after the noun. O campo (u20) is the countryside itself; rural is what you call anything belonging to it." },
        { id: "pt-u65l4-urbano", type: "vocab", front: "urbano", reading: "urbano", meaning: "urban", example: { jp: "O transporte urbano melhorou muito em Lisboa, mas fora da cidade quase todas as pessoas precisam de carro.", en: "Urban transport has improved a lot in Lisbon, but outside the city almost all the people need a car." }, drill: { jp: "O transporte urbano melhorou em Lisboa", en: "Urban transport has improved in Lisbon" }, accept: ["urban", "city"], hint: "oor-BAH-nu; feminine urbana. The pair rural / urbano is how Portuguese newspapers frame nearly every argument about housing and services." },
        { id: "pt-u65l4-aagricultura", type: "vocab", front: "a agricultura", reading: "aagricultura", meaning: "agriculture", example: { jp: "A agricultura usa muita água no sul, por isso a seca é um problema tão grande para a região.", en: "Agriculture uses a lot of water in the south, which is why drought is such a big problem for the region." }, drill: { jp: "A agricultura usa muita água", en: "Agriculture uses a lot of water" }, accept: ["agriculture", "farming"], hint: "a-gri-kul-TOO-ruh. The activity and the sector. The person is o agricultor, and Portugal also says o lavrador for a working farmer." },
        { id: "pt-u65l4-plantar", type: "vocab", front: "plantar", reading: "plantar", meaning: "to plant", example: { jp: "Vamos plantar árvores na serra depois do fogo, além disso a câmara quer proteger o solo.", en: "We are going to plant trees on the hills after the fire; what is more, the council wants to protect the soil." }, drill: { jp: "Vamos plantar árvores na serra", en: "We are going to plant trees on the hills" }, accept: ["plant", "to sow"], hint: "plan-TAR. Regular -ar verb, and a plantar an árvore or a flor alike. The noun a planta is the plant itself — and also the floor plan of a building." },
        { id: "pt-u65l4-oterreno", type: "vocab", front: "o terreno", reading: "oterreno", meaning: "plot of land", example: { jp: "O terreno atrás da casa é pequeno, mas chega para as flores e duas árvores.", en: "The plot behind the house is small, but it is enough for the flowers and two trees." }, drill: { jp: "O terreno atrás da casa é pequeno", en: "The plot behind the house is small" }, accept: ["land", "plot", "ground", "the land"], hint: "tuh-RRAY-nu. A defined piece of ground you can own or build on — a Terra (u34) is the planet, a terra is soil or a home region, o terreno is the parcel." },
      ],
    },
  ],
};
