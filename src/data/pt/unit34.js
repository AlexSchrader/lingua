// PT Unit 34 — O ambiente e a ciência ("Nature and science") — A2
// ─────────────────────────────────────────────────────────────────────────────
// The scaffold slot is "Nature and science", but block 1's u26 (a natureza e os
// animais) owns the LIVING half — a árvore, a flor, a folha, a floresta, o céu,
// a nuvem, a estrela, a lua, and every animal. Re-teaching any of that would be a
// straight duplicate, so this unit takes the other half of the slot: the
// ENVIRONMENT as a problem, and SCIENCE as the way we find things out. The title
// says environment rather than nature for exactly that reason.
//
// The one word both units want is `a natureza` itself. It is not in block 1's
// list — they took the things IN nature, not the abstract noun — so it is taught
// here, in l1, where the environment lesson needs it.
//
// Word families taught together on purpose: poluir / a poluição and descobrir /
// a descoberta. See the u31 header.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT34 = {
  id: "pt-u34",
  lang: "pt",
  title: "O ambiente e a ciência",
  order: 34,
  stage: "a2",
  lessons: [
    {
      id: "pt-u34l1",
      unit: 34,
      lesson: 1,
      title: "O ambiente",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about pollution and what people do about it — recycle, protect, or make it worse.",
      items: [
        { id: "pt-u34l1-oambiente", type: "vocab", front: "o ambiente", reading: "oambiente", meaning: "environment", example: { jp: "O ambiente da cidade está pior do que estava há dez anos.", en: "The city's environment is worse than it was ten years ago." }, drill: { jp: "O ambiente da cidade está pior", en: "The city's environment is worse" }, accept: ["the environment", "atmosphere", "surroundings"], hint: "am-bi-EN-te. Two senses, as in English: the natural environment, and the feel of a room — o restaurante tem bom ambiente. O meio ambiente is the fuller phrase for the ecological one." },
        { id: "pt-u34l1-anatureza", type: "vocab", front: "a natureza", reading: "anatureza", meaning: "nature", example: { jp: "A natureza no campo é tranquila, mas na cidade quase não há árvores.", en: "Nature in the countryside is peaceful, but in the city there are almost no trees." }, drill: { jp: "A natureza no campo é tranquila", en: "Nature in the countryside is peaceful" }, accept: ["the nature", "the natural world", "wildlife"], hint: "na-tu-RE-za, spelt with a z. The -eza ending builds abstract nouns out of adjectives, the way a beleza comes from belo. It also means someone's essential nature, which is close to o feitio from Unit 31 but colder and less personal." },
        { id: "pt-u34l1-apoluicao", type: "vocab", front: "a poluição", reading: "apoluicao", meaning: "pollution", example: { jp: "A poluição da cidade é enorme, especialmente quando faz calor e não faz vento.", en: "The city's pollution is enormous, especially when it is hot and there is no wind." }, drill: { jp: "A poluição da cidade é enorme", en: "The city's pollution is enormous" }, accept: ["the pollution", "contamination"], hint: "pu-lwi-SAWNG. Another -ção noun and so feminine — by now that ending should be doing the gender work for you without being checked. Do not confuse it with a população from Unit 32 — they share the -ção ending and a rhyme, and nothing else." },
        { id: "pt-u34l1-poluir", type: "vocab", front: "poluir", reading: "poluir", meaning: "to pollute", example: { jp: "Poluir o rio é muito mau para os peixes e para quem vive perto da água.", en: "Polluting the river is very bad for the fish and for those who live near the water." }, drill: { jp: "Poluir o rio é muito mau", en: "Polluting the river is very bad" }, accept: ["pollute", "to contaminate", "to foul"], hint: "pu-lu-EER, an -ir verb like abrir. The noun a poluição is the card before — verb and noun learned as one item, which is how A2 vocabulary actually grows." },
        { id: "pt-u34l1-reciclar", type: "vocab", front: "reciclar", reading: "reciclar", meaning: "to recycle", example: { jp: "Reciclar em casa é muito importante, e em Portugal os caixotes têm cores diferentes.", en: "Recycling at home is very important, and in Portugal the bins have different colours." }, drill: { jp: "Reciclar em casa é muito importante", en: "Recycling at home is very important" }, accept: ["recycle", "to sort waste"], hint: "rre-si-KLAR, strong initial r, soft c before i. Practical: Portugal's street bins are colour-coded with the words from Unit 8 — amarelo for plastic, verde for glass, azul for paper. They are called ecopontos." },
        { id: "pt-u34l1-proteger", type: "vocab", front: "proteger", reading: "proteger", meaning: "to protect", example: { jp: "Proteger a natureza é um dever de todos, e não apenas do governo.", en: "Protecting nature is everyone's duty, and not just the government's." }, drill: { jp: "Proteger a natureza é um dever", en: "Protecting nature is a duty" }, accept: ["protect", "to safeguard", "to shield"], hint: "pru-te-ZHER, with the g saying \"zh\" before e. Watch the spelling shift in the eu form: protejo, with a j, because Portuguese only writes g for that sound before e and i — the same swap corajoso made in Unit 31." },
      ],
    },
    {
      id: "pt-u34l2",
      unit: 34,
      lesson: 2,
      title: "A Terra e o clima",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Talk about the planet and the climate at a scale bigger than today's weather.",
      items: [
        { id: "pt-u34l2-aterra", type: "vocab", front: "a Terra", reading: "aterra", meaning: "Earth", example: { jp: "A Terra é um planeta pequeno, mas é o nosso e não temos outro.", en: "Earth is a small planet, but it is ours and we have no other." }, drill: { jp: "A Terra é um planeta pequeno", en: "Earth is a small planet" }, accept: ["the Earth", "the world", "the planet"], hint: "TE-rra, with the strong rr. CAPITALISED when it is the planet; lowercase a terra means the ground, the soil, or the land you come from — o meu pai voltou à terra dele. Portuguese uses the same word for all of it." },
        { id: "pt-u34l2-omundo", type: "vocab", front: "o mundo", reading: "omundo", meaning: "world", example: { jp: "O mundo está a mudar depressa e raramente para melhor.", en: "The world is changing fast and rarely for the better." }, drill: { jp: "O mundo está a mudar depressa", en: "The world is changing fast" }, accept: ["the world", "everyone"], hint: "MOON-du. Two idioms you will hear constantly: todo o mundo and, far more common in Portugal, toda a gente — both mean everybody. Um mundo de coisas means loads of things." },
        { id: "pt-u34l2-oplaneta", type: "vocab", front: "o planeta", reading: "oplaneta", meaning: "planet", example: { jp: "O planeta está mais quente do que estava, e os cientistas dizem que a causa somos nós.", en: "The planet is hotter than it was, and scientists say the cause is us." }, drill: { jp: "O planeta está mais quente", en: "The planet is hotter" }, accept: ["the planet", "world"], hint: "pla-NE-ta. MASCULINE despite the -a: Portuguese has a small Greek-derived group that breaks the gender rule, and o clima, o poema and o problema are all in it. O planeta, never \"a planeta\". (o dia from A1 u9 is masculine too, but for a different reason — it is Latin, not Greek.)" },
        { id: "pt-u34l2-oclima", type: "vocab", front: "o clima", reading: "oclima", meaning: "climate", example: { jp: "O clima de Portugal é bom quase todo o ano, mas os invernos no norte são húmidos.", en: "Portugal's climate is good almost all year, but the winters in the north are damp." }, drill: { jp: "O clima de Portugal é bom", en: "Portugal's climate is good" }, accept: ["the climate", "weather"], hint: "KLEE-ma, and MASCULINE — another -a word from Greek, like o planeta above it. Careful with o tempo from Unit 8: o tempo is today's weather, o clima is the long-run pattern. As alterações climáticas is climate change." },
        { id: "pt-u34l2-oar", type: "vocab", front: "o ar", reading: "oar", meaning: "air", example: { jp: "O ar da montanha é limpo, e nota-se logo no primeiro dia.", en: "The mountain air is clean, and you notice it on the very first day." }, drill: { jp: "O ar da montanha é limpo", en: "The mountain air is clean" }, accept: ["the air", "look", "appearance"], hint: "AR, one syllable. Ar condicionado is air conditioning. It also does \"look\" in the sense of appearance — ele tem um ar cansado, he looks tired — which is a very common construction and worth recognising." },
        { id: "pt-u34l2-atemperatura", type: "vocab", front: "a temperatura", reading: "atemperatura", meaning: "temperature", example: { jp: "A temperatura da água está alta para setembro, e por isso ainda se pode nadar.", en: "The water temperature is high for September, and so you can still swim." }, drill: { jp: "A temperatura da água está alta", en: "The water temperature is high" }, accept: ["the temperature"], hint: "tem-pe-ra-TU-ra. Portugal measures in graus centígrados and writes 20 °C. For a person's fever you met a febre in Unit 11 — ter febre, not \"ter temperatura\", which is the English habit and sounds odd here." },
      ],
    },
    {
      id: "pt-u34l3",
      unit: 34,
      lesson: 3,
      title: "A ciência",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about how something was found out — who did the research, what the experiment was, what was discovered.",
      items: [
        { id: "pt-u34l3-aciencia", type: "vocab", front: "a ciência", reading: "aciencia", meaning: "science", example: { jp: "A ciência explica muitas coisas, mas não explica porque é que as pessoas não acreditam nela.", en: "Science explains many things, but it doesn't explain why people don't believe it." }, drill: { jp: "A ciência explica muitas coisas", en: "Science explains many things" }, accept: ["the science", "knowledge"], hint: "si-EN-si-a. BOTH c's are soft here, because both sit in front of an i — compare a casa, where a c before an a goes hard. As ciências, plural, is the school subject." },
        { id: "pt-u34l3-ocientista", type: "vocab", front: "o cientista", reading: "ocientista", meaning: "scientist", example: { jp: "O cientista trabalha na universidade de Coimbra e a investigação demora anos.", en: "The scientist works at the University of Coimbra and the research takes years." }, drill: { jp: "O cientista trabalha na universidade", en: "The scientist works at the university" }, accept: ["the scientist", "researcher"], hint: "si-en-TEESH-ta. Same form for a man and a woman, like egoísta in Unit 31 — only the article moves: o cientista, a cientista. That is true of every -ista noun in the language." },
        { id: "pt-u34l3-aexperiencia", type: "vocab", front: "a experiência", reading: "aexperiencia", meaning: "experiment", example: { jp: "A experiência do cientista foi importante, mas o resultado não foi o que ele esperava.", en: "The scientist's experiment was important, but the result was not what he expected." }, drill: { jp: "A experiência do cientista foi importante", en: "The scientist's experiment was important" }, accept: ["experience", "the experiment", "trial"], hint: "esh-pe-ri-EN-si-a. ONE word for two English ones: a scientific experiment AND life experience — ele tem muita experiência. Context decides, and there is no separate word for either, which is worth remembering when you read a CV." },
        { id: "pt-u34l3-ainvestigacao", type: "vocab", front: "a investigação", reading: "ainvestigacao", meaning: "research", example: { jp: "A investigação demora muitos anos e raramente chega a uma descoberta.", en: "The research takes many years and rarely leads to a discovery." }, drill: { jp: "A investigação demora muitos anos", en: "The research takes many years" }, accept: ["the research", "investigation", "inquiry", "study"], hint: "een-vesh-ti-ga-SAWNG. Covers academic research AND a police investigation — a Polícia Judiciária does the second kind. Um investigador is both a researcher and a detective." },
        { id: "pt-u34l3-descobrir", type: "vocab", front: "descobrir", reading: "descobrir", meaning: "to discover", example: { jp: "Descobrir uma coisa nova é fantástico, e o cientista fica sempre contente.", en: "Discovering something new is fantastic, and the scientist is always happy." }, drill: { jp: "Descobrir uma coisa nova é fantástico", en: "Discovering something new is fantastic" }, accept: ["discover", "to find out", "to uncover"], hint: "desh-ku-BREER, an -ir verb. Literally to un-cover: des- reversing cobrir, to cover — the same prefix as descansar and descarregar. Portugal's national story is built on the word: os Descobrimentos." },
        { id: "pt-u34l3-adescoberta", type: "vocab", front: "a descoberta", reading: "adescoberta", meaning: "discovery", example: { jp: "A descoberta foi muito importante, mas o jornal apenas falou dela dez anos depois.", en: "The discovery was very important, but the paper only wrote about it ten years later." }, drill: { jp: "A descoberta foi muito importante", en: "The discovery was very important" }, accept: ["the discovery", "finding", "breakthrough"], hint: "desh-ku-BER-ta, the noun of the card before. Note it is built from the FEMININE past participle — descoberta — which is how Portuguese makes a lot of its nouns: a entrada from entrar, a chegada from chegar." },
      ],
    },
    {
      id: "pt-u34l4",
      unit: 34,
      lesson: 4,
      title: "Medir e explicar",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Measure something and explain it — give the weight, the height, the cause, the effect and the result.",
      items: [
        { id: "pt-u34l4-medir", type: "vocab", front: "medir", reading: "medir", meaning: "to measure", example: { jp: "Medir a temperatura da água é fácil; medir a poluição do ar já não é.", en: "Measuring the water temperature is easy; measuring air pollution is not." }, drill: { jp: "Medir a temperatura é muito fácil", en: "Measuring the temperature is very easy" }, accept: ["measure", "to gauge", "to be tall"], hint: "me-DEER, and irregular in the eu form: meço, with a cedilla, like faço from Unit 13. It also states height — quanto medes? is how you ask someone how tall they are, where English asks a completely different question." },
        { id: "pt-u34l4-opeso", type: "vocab", front: "o peso", reading: "opeso", meaning: "weight", example: { jp: "O peso da mala é enorme, por isso vou ter de comprar outra mais pequena.", en: "The suitcase's weight is enormous, so I'm going to have to buy another smaller one." }, drill: { jp: "O peso da mala é enorme", en: "The suitcase's weight is enormous" }, accept: ["the weight", "heaviness", "burden"], hint: "PE-zu, with the s saying z. From pesar, to weigh. Also a burden in the figurative sense — um peso na consciência. Nothing to do with o preço from Unit 1, though the two look alike on the page." },
        { id: "pt-u34l4-aaltura", type: "vocab", front: "a altura", reading: "aaltura", meaning: "height", example: { jp: "A altura da montanha é enorme, mas a estrada sobe devagar e o carro aguenta.", en: "The mountain's height is enormous, but the road climbs slowly and the car copes." }, drill: { jp: "A altura da montanha é enorme", en: "The mountain's height is enormous" }, accept: ["the height", "altitude", "time", "point"], hint: "al-TU-ra, from alto in Unit 10. Its second job is TIME, and it is very common: nessa altura means \"at that time\", na altura means \"back then\". You will hear the time sense far more often than the height one." },
        { id: "pt-u34l4-acausa", type: "vocab", front: "a causa", reading: "acausa", meaning: "cause", example: { jp: "A causa do problema é o clima, dizem os cientistas, mas o governo não concorda.", en: "The cause of the problem is the climate, the scientists say, but the government doesn't agree." }, drill: { jp: "A causa do problema é o clima", en: "The cause of the problem is the climate" }, accept: ["the cause", "reason", "case"], hint: "KAU-za. The phrase to learn with it is por causa de, \"because of\" — por causa da chuva. Note that is different from porque, which introduces a whole clause: block 1's u29 has that one." },
        { id: "pt-u34l4-oefeito", type: "vocab", front: "o efeito", reading: "oefeito", meaning: "effect", example: { jp: "O efeito da poluição no ar da cidade é enorme, e vê-se logo nos dias sem vento.", en: "The effect of pollution on the city's air is enormous, and you see it immediately on windless days." }, drill: { jp: "O efeito da poluição é enorme", en: "The effect of the pollution is enormous" }, accept: ["the effect", "impact", "result"], hint: "i-FAY-tu. The natural pair to a causa. Com efeito means \"indeed\" in writing, and na verdade is its spoken equivalent. Do not confuse it with o defeito from Unit 31 — one letter apart, opposite jobs." },
        { id: "pt-u34l4-oresultado", type: "vocab", front: "o resultado", reading: "oresultado", meaning: "result", example: { jp: "O resultado da experiência foi bom, mas o cientista não conseguiu explicar porquê.", en: "The result of the experiment was good, but the scientist couldn't explain why." }, drill: { jp: "O resultado da experiência foi bom", en: "The result of the experiment was good" }, accept: ["the result", "outcome", "score", "finding"], hint: "rre-zul-TA-du, strong initial r. It does exam marks, match scores and scientific findings alike — o resultado do jogo. The verb is resultar: resultar em something is to end up as it." },
      ],
    },
  ],
};
