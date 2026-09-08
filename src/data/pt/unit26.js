// PT Unit 26 — A natureza e os animais — A2
// Portuguese A2, block 1 (units 21-30). Conventions, the pt-PT corpus decision and
// the Spanish-trap policy are in the header of unit1.js and bind this file too.
// Every vocab item carries a `drill` authored inline beside its `example`
// (RUNBOOK §4): 3-8 tokens, no punctuation, the item's own front inside it as a
// whole word. Verified against cardRouting.js canCloze/canSentence, not the lint.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT26 = {
  id: "pt-u26",
  lang: "pt",
  title: "A natureza e os animais",
  order: 26,
  stage: "a2",
  lessons: [
    {
      id: "pt-u26l1",
      unit: 26,
      lesson: 1,
      title: "As plantas",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name what grows in a Portuguese garden, field and forest.",
      items: [
        { id: "pt-u26l1-aarvore", type: "vocab", front: "a árvore", reading: "aarvore", meaning: "tree", example: { jp: "A árvore do jardim já tem mais de cem anos.", en: "The tree in the garden is already over a hundred years old." }, drill: { jp: "A árvore do jardim é enorme", en: "The tree in the garden is enormous" }, accept: ["the tree", "trees"], hint: "AR-vo-re, stressed on the first syllable — that is what the accent marks. Portugal's national tree is o sobreiro, the cork oak that a cortiça comes from." },
        { id: "pt-u26l1-aflor", type: "vocab", front: "a flor", reading: "aflor", meaning: "flower", example: { jp: "Comprei uma flor no mercado para a minha mãe.", en: "I bought a flower at the market for my mother." }, drill: { jp: "A flor do jardim é amarela", en: "The garden flower is yellow" }, accept: ["the flower", "flowers", "blossom"], hint: "FLOR, stress at the end. Plural as flores. Em flor means in bloom, and it is feminine despite ending in a consonant." },
        { id: "pt-u26l1-afolha", type: "vocab", front: "a folha", reading: "afolha", meaning: "leaf", example: { jp: "No outono a folha cai e o jardim fica cheio de cor.", en: "In autumn the leaf falls and the garden fills with colour." }, drill: { jp: "A folha cai sempre no outono", en: "The leaf always falls in autumn" }, accept: ["the leaf", "sheet", "page", "leaves"], hint: "FO-lya, the lh again. It is also a sheet of paper — uma folha de papel — so the leaf on the tree and the page in your hand are one word." },
        { id: "pt-u26l1-afloresta", type: "vocab", front: "a floresta", reading: "afloresta", meaning: "forest", example: { jp: "A floresta do norte é muito verde porque chove todo o ano.", en: "The forest in the north is very green because it rains all year." }, drill: { jp: "A floresta do norte é verde", en: "The northern forest is green" }, accept: ["the forest", "woods", "the woods"], hint: "flo-RESH-ta. A smaller wood is um bosque, and a mata is wilder scrubland. Portugal's fire season makes this a word you hear on the news every summer." },
        { id: "pt-u26l1-aerva", type: "vocab", front: "a erva", reading: "aerva", meaning: "grass", example: { jp: "A erva do campo estava molhada por causa da chuva.", en: "The grass in the field was wet because of the rain." }, drill: { jp: "A erva do campo está molhada", en: "The field grass is wet" }, accept: ["the grass", "herb", "weed"], hint: "ER-va. It covers grass and culinary herbs alike — ervas aromáticas is the packet in the supermarket. a relva is specifically a lawn or a football pitch." },
        { id: "pt-u26l1-asemente", type: "vocab", front: "a semente", reading: "asemente", meaning: "seed", example: { jp: "Pus a semente na terra em março e agora já tem folhas.", en: "I put the seed in the soil in March and now it already has leaves." }, drill: { jp: "A semente da flor é pequena", en: "The flower seed is small" }, accept: ["the seed", "seeds", "pip"], hint: "se-MEN-te, nasal. From semear, to sow. The same Latin root gives English semen and seminar — a place where ideas are sown." },
      ],
    },
    {
      id: "pt-u26l2",
      unit: 26,
      lesson: 2,
      title: "O céu e a terra",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Describe what is above and below you — sky, cloud, moon, stone and island.",
      items: [
        { id: "pt-u26l2-oceu", type: "vocab", front: "o céu", reading: "oceu", meaning: "sky", example: { jp: "O céu estava azul e não havia uma única nuvem.", en: "The sky was blue and there wasn't a single cloud." }, drill: { jp: "O céu está azul hoje", en: "The sky is blue today" }, accept: ["the sky", "heaven", "the heavens"], hint: "SEU, one syllable, soft c. It means sky and heaven both, exactly as in English. The accent marks that stressed e." },
        { id: "pt-u26l2-anuvem", type: "vocab", front: "a nuvem", reading: "anuvem", meaning: "cloud", example: { jp: "Uma nuvem escura passou e começou logo a chover.", en: "A dark cloud passed and it immediately began to rain." }, drill: { jp: "A nuvem escura trouxe chuva", en: "The dark cloud brought rain" }, accept: ["the cloud", "clouds"], hint: "NU-vaing, nasal -em. The plural is irregular in spelling: as nuvens. Estar nas nuvens is to be daydreaming." },
        { id: "pt-u26l2-aestrela", type: "vocab", front: "a estrela", reading: "aestrela", meaning: "star", example: { jp: "No campo vê-se cada estrela porque não há luz da cidade.", en: "In the countryside you can see every star because there is no city light." }, drill: { jp: "A estrela do céu é bonita", en: "The star in the sky is beautiful" }, accept: ["the star", "stars"], hint: "esh-TRE-la. Also a film star, as in English. The Serra da Estrela is Portugal's highest range and the source of its most famous cheese." },
        { id: "pt-u26l2-alua", type: "vocab", front: "a lua", reading: "alua", meaning: "moon", example: { jp: "A lua estava tão clara que se podia ler na rua.", en: "The moon was so bright that you could read in the street." }, drill: { jp: "A lua estava muito clara ontem", en: "The moon was very bright yesterday" }, accept: ["the moon"], hint: "LU-a, two syllables. Estar na lua is to have your head in the clouds — Portuguese puts you on the moon for this one." },
        { id: "pt-u26l2-apedra", type: "vocab", front: "a pedra", reading: "apedra", meaning: "stone", example: { jp: "A casa antiga é toda de pedra e por isso é fresca no verão.", en: "The old house is all stone and so it is cool in summer." }, drill: { jp: "A pedra da praia é branca", en: "The beach stone is white" }, accept: ["the stone", "rock", "a rock"], hint: "PE-dra. Portuguese pavements are calçada, laid by hand in small white and black pedras — the reason Lisbon's streets look the way they do." },
        { id: "pt-u26l2-ailha", type: "vocab", front: "a ilha", reading: "ailha", meaning: "island", example: { jp: "A ilha da Madeira fica no meio do mar, longe do continente.", en: "The island of Madeira sits in the middle of the sea, far from the mainland." }, drill: { jp: "A ilha fica muito longe", en: "The island is very far" }, accept: ["the island", "isle"], hint: "EE-lya, the lh. Portugal has two island regions, os Açores and a Madeira, and both take the article — na Madeira, nos Açores." },
      ],
    },
    {
      id: "pt-u26l3",
      unit: 26,
      lesson: 3,
      title: "Os animais",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the farm and garden animals a Portuguese child learns first.",
      items: [
        { id: "pt-u26l3-opassaro", type: "vocab", front: "o pássaro", reading: "opassaro", meaning: "bird", example: { jp: "Um pássaro entrou pela janela e não conseguia sair.", en: "A bird came in through the window and couldn't get out." }, drill: { jp: "O pássaro do jardim é pequeno", en: "The garden bird is small" }, accept: ["the bird", "birds"], hint: "PA-sa-ru, stressed on the first syllable, with the double ss saying a hard s. A ave is the more formal or scientific word, as in bird of prey." },
        { id: "pt-u26l3-ocavalo", type: "vocab", front: "o cavalo", reading: "ocavalo", meaning: "horse", example: { jp: "O cavalo do meu tio é castanho e muito calmo.", en: "My uncle's horse is brown and very calm." }, drill: { jp: "O cavalo do campo é castanho", en: "The horse in the field is brown" }, accept: ["the horse", "horses"], hint: "ka-VA-lu. The Lusitano is Portugal's own breed. A cavalo means on horseback, the same de frame you met for de comboio." },
        { id: "pt-u26l3-avaca", type: "vocab", front: "a vaca", reading: "avaca", meaning: "cow", example: { jp: "A vaca dá o leite que usamos para fazer queijo.", en: "The cow gives the milk we use to make cheese." }, drill: { jp: "A vaca dá leite todos os dias", en: "The cow gives milk every day" }, accept: ["the cow", "cattle", "cows"], hint: "VA-ka. Carne de vaca is beef on a Portuguese menu, where Brazil more often writes carne bovina. Doidos como uma vaca — no, that one is not Portuguese." },
        { id: "pt-u26l3-aovelha", type: "vocab", front: "a ovelha", reading: "aovelha", meaning: "sheep", example: { jp: "A ovelha da serra dá o leite do queijo mais famoso do país.", en: "The mountain sheep gives the milk of the country's most famous cheese." }, drill: { jp: "A ovelha da serra dá leite", en: "The mountain sheep gives milk" }, accept: ["the sheep", "ewe"], hint: "o-VE-lya, the lh again. Queijo da Serra, from Unit 6, is made from this animal's milk — the two cards explain each other." },
        { id: "pt-u26l3-agalinha", type: "vocab", front: "a galinha", reading: "agalinha", meaning: "hen", example: { jp: "A galinha põe um ovo quase todos os dias.", en: "The hen lays an egg almost every day." }, drill: { jp: "A galinha do campo é branca", en: "The farm hen is white" }, accept: ["the hen", "chicken", "the chicken", "hens"], hint: "ga-LEE-nya, the nh from Unit 1. o frango is the chicken you eat, a galinha the bird in the yard — Portuguese keeps them apart on the menu." },
        { id: "pt-u26l3-oporco", type: "vocab", front: "o porco", reading: "oporco", meaning: "pig", example: { jp: "O porco preto do Alentejo é famoso em todo o país.", en: "The black pig of the Alentejo is famous throughout the country." }, drill: { jp: "O porco preto é muito famoso", en: "The black pig is very famous" }, accept: ["the pig", "pork", "swine"], hint: "POR-ku. One word for the animal and the meat — carne de porco. The presunto from Unit 6 comes from exactly this animal." },
      ],
    },
    {
      id: "pt-u26l4",
      unit: 26,
      lesson: 4,
      title: "O tempo que faz",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Describe harder weather than Unit 8 covered — snow, ice, thunderstorms and fog — and say whether things are wet or dry.",
      items: [
        { id: "pt-u26l4-aneve", type: "vocab", front: "a neve", reading: "aneve", meaning: "snow", example: { jp: "A neve na serra só aparece dois ou três dias por ano.", en: "Snow in the mountains only appears two or three days a year." }, drill: { jp: "A neve da montanha é branca", en: "The mountain snow is white" }, accept: ["the snow"], hint: "NE-ve. Nevar is to snow. Portugal sees it almost only in the Serra da Estrela, which is why the word carries a holiday feeling here." },
        { id: "pt-u26l4-ogelo", type: "vocab", front: "o gelo", reading: "ogelo", meaning: "ice", example: { jp: "Pus gelo no joelho depois de me magoar a correr.", en: "I put ice on my knee after hurting myself running." }, drill: { jp: "O gelo da água é frio", en: "The ice in the water is cold" }, accept: ["the ice", "ice cube"], hint: "ZHE-lu, the zh of measure. Um gelado is an ice cream in Portugal, where Brazil says um sorvete. Com gelo is with ice, what you ask for in a café." },
        { id: "pt-u26l4-atrovoada", type: "vocab", front: "a trovoada", reading: "atrovoada", meaning: "thunderstorm", example: { jp: "A trovoada começou à noite e os cães ficaram todos nervosos.", en: "The thunderstorm began at night and the dogs all got nervous." }, drill: { jp: "A trovoada da noite é forte", en: "The night thunderstorm is strong" }, accept: ["the thunderstorm", "storm", "thunder"], hint: "tro-VWA-da, from trovão, thunder. Portugal gets them mostly in late summer, and they end the heat rather than announce rain." },
        { id: "pt-u26l4-onevoeiro", type: "vocab", front: "o nevoeiro", reading: "onevoeiro", meaning: "fog", example: { jp: "O nevoeiro estava tão cerrado que o voo foi cancelado.", en: "The fog was so thick that the flight was cancelled." }, drill: { jp: "O nevoeiro cancelou o voo", en: "The fog cancelled the flight" }, accept: ["the fog", "mist", "the mist"], hint: "ne-vo-AY-ru. Not built on neve despite the look: nevoeiro comes from névoa, Latin nebula, and neve from Latin nivem. a névoa is a lighter haze." },
        { id: "pt-u26l4-molhado", type: "vocab", front: "molhado", reading: "molhado", meaning: "wet", example: { jp: "Cheguei a casa todo molhado porque não levei guarda-chuva.", en: "I got home soaking wet because I didn't take an umbrella." }, drill: { jp: "Cheguei a casa todo molhado", en: "I got home all wet" }, accept: ["soaked", "damp", "drenched"], hint: "mo-LYA-du, the lh, and it agrees: molhada. From molhar, to wet. Note it is wet through, stronger than merely damp — that is húmido." },
        { id: "pt-u26l4-seco", type: "vocab", front: "seco", reading: "seco", meaning: "dry", example: { jp: "O verão foi muito seco e os rios ficaram quase vazios.", en: "The summer was very dry and the rivers were left almost empty." }, drill: { jp: "O verão foi muito seco", en: "The summer was very dry" }, accept: ["dried", "arid"], hint: "SE-ku, and it agrees: seca. a seca as a noun is a drought, a real subject in southern Portugal. Vinho seco is dry wine, the opposite of doce." },
      ],
    },
  ],
};
