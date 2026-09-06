// PT Unit 22 — Os sentimentos e os estados — A2
// Portuguese A2, block 1 (units 21-30). Conventions, the pt-PT corpus decision and
// the Spanish-trap policy are in the header of unit1.js and bind this file too.
// Every vocab item carries a `drill` authored inline beside its `example`
// (RUNBOOK §4): 3-8 tokens, no punctuation, the item's own front inside it as a
// whole word. Verified against cardRouting.js canCloze/canSentence, not the lint.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT22 = {
  id: "pt-u22",
  lang: "pt",
  title: "Os sentimentos e os estados",
  order: 22,
  stage: "a2",
  lessons: [
    {
      id: "pt-u22l1",
      unit: 22,
      lesson: 1,
      title: "Como te sentes",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Say how you or someone else feels, with adjectives that agree — and remember these take estar, not ser.",
      items: [
        { id: "pt-u22l1-feliz", type: "vocab", front: "feliz", reading: "feliz", meaning: "happy", example: { jp: "A minha irmã está muito feliz porque acabou o curso.", en: "My sister is very happy because she finished her course." }, drill: { jp: "Estar feliz é muito bom", en: "Being happy is very good" }, accept: ["glad", "joyful", "content"], hint: "fe-LEESH. It does NOT change for gender — um homem feliz, uma mulher feliz — because it ends in -z, not -o. Only the plural moves: felizes." },
        { id: "pt-u22l1-triste", type: "vocab", front: "triste", reading: "triste", meaning: "sad", example: { jp: "Fiquei triste quando soube que o meu colega mudou de empresa.", en: "I was sad when I heard my colleague had moved company." }, drill: { jp: "Ficar triste é muito mau", en: "Getting sad is very bad" }, accept: ["unhappy", "sorrowful", "down"], hint: "TREESH-te. Like feliz it has one form for both genders — ending in -e, not -o. Ficar triste is to BECOME sad; estar triste is to be it now." },
        { id: "pt-u22l1-zangado", type: "vocab", front: "zangado", reading: "zangado", meaning: "angry", example: { jp: "O professor estava zangado porque ninguém tinha estudado.", en: "The teacher was angry because nobody had studied." }, drill: { jp: "O chefe está zangado hoje", en: "The boss is angry today" }, accept: ["cross", "annoyed", "mad"], hint: "zan-GA-du. This one DOES agree: zangado, zangada, zangados. Zangar-se com alguém is to get angry with someone. Brazil more often says bravo." },
        { id: "pt-u22l1-contente", type: "vocab", front: "contente", reading: "contente", meaning: "pleased", example: { jp: "Estou contente com a nota que tive no exame.", en: "I'm pleased with the mark I got in the exam." }, drill: { jp: "Estar contente com a nota", en: "Being pleased with the mark" }, accept: ["happy", "glad", "satisfied"], hint: "kon-TEN-te, one form for both genders. It is a shade calmer than feliz — satisfied rather than joyful — and Portugal uses it far more often in everyday speech." },
        { id: "pt-u22l1-nervoso", type: "vocab", front: "nervoso", reading: "nervoso", meaning: "nervous", example: { jp: "Fico sempre nervoso antes de uma entrevista de emprego.", en: "I always get nervous before a job interview." }, drill: { jp: "O professor está nervoso hoje", en: "The teacher is nervous today" }, accept: ["anxious", "edgy", "tense"], hint: "ner-VO-zu, with the s saying z between vowels. It agrees: nervosa. FALSE FRIEND WARNING — in Portuguese it is nervous or on edge, never physically strong the way English nerve suggests." },
        { id: "pt-u22l1-calmo", type: "vocab", front: "calmo", reading: "calmo", meaning: "calm", example: { jp: "Depois do duche fiquei mais calmo e consegui dormir.", en: "After the shower I felt calmer and managed to sleep." }, drill: { jp: "O mar está muito calmo", en: "The sea is very calm" }, accept: ["quiet", "peaceful", "relaxed"], hint: "KAL-mu, and it agrees: calma. Calma! shouted on its own is the everyday way to tell someone to take it easy." },
      ],
    },
    {
      id: "pt-u22l2",
      unit: 22,
      lesson: 2,
      title: "Ter fome e ter medo",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Use the ter expressions where English uses to be — you HAVE hunger, thirst, fear and luck in Portuguese.",
      items: [
        { id: "pt-u22l2-terfome", type: "vocab", front: "ter fome", reading: "terfome", meaning: "to be hungry", example: { jp: "Tenho fome porque não comi nada desde o pequeno-almoço.", en: "I'm hungry because I haven't eaten anything since breakfast." }, drill: { jp: "Ter fome ao fim do dia", en: "Being hungry at the end of the day" }, accept: ["be hungry", "to be starving", "hungry"], hint: "Literally to HAVE hunger. This is the pattern for a whole family of states, and using estar instead is the commonest learner error: never estou fome." },
        { id: "pt-u22l2-tersede", type: "vocab", front: "ter sede", reading: "tersede", meaning: "to be thirsty", example: { jp: "Depois de correr tanto ficámos todos com sede.", en: "After running so much we were all thirsty." }, drill: { jp: "Ter sede é muito mau", en: "Being thirsty is very bad" }, accept: ["be thirsty", "thirsty"], hint: "a sede is thirst. Note that ficar COM is the other everyday frame — ficar com sede, ficar com fome — which is how Portugal says it just as often." },
        { id: "pt-u22l2-termedo", type: "vocab", front: "ter medo", reading: "termedo", meaning: "to be afraid", example: { jp: "O meu filho tem medo de cães grandes.", en: "My son is afraid of big dogs." }, drill: { jp: "Ter medo não é bom", en: "Being afraid is not good" }, accept: ["be afraid", "be scared", "fear", "afraid"], hint: "Takes DE for what you fear: medo DE alguma coisa. o medo on its own is the noun, fear, and it appears two lessons from here." },
        { id: "pt-u22l2-terpressa", type: "vocab", front: "ter pressa", reading: "terpressa", meaning: "to be in a hurry", example: { jp: "Não tenho pressa, podemos ir a pé até à praça.", en: "I'm not in a hurry, we can walk to the square." }, drill: { jp: "Ter pressa de manhã", en: "Being in a hurry in the morning" }, accept: ["be in a hurry", "be rushed", "in a hurry"], hint: "a pressa is haste. Devagar, que tenho pressa is a very Portuguese joke — slowly, I'm in a hurry." },
        { id: "pt-u22l2-terrazao", type: "vocab", front: "ter razão", reading: "terrazao", meaning: "to be right", example: { jp: "Tinhas razão, o comboio das oito é sempre mais rápido.", en: "You were right, the eight o'clock train is always faster." }, drill: { jp: "Ter razão é sempre bom", en: "Being right is always good" }, accept: ["be right", "be correct", "right"], hint: "a razão is reason. Tens razão is how Portugal concedes a point — never estás certo, which sounds like a translation." },
        { id: "pt-u22l2-tersorte", type: "vocab", front: "ter sorte", reading: "tersorte", meaning: "to be lucky", example: { jp: "Tivemos sorte porque encontrámos bilhetes baratos.", en: "We were lucky because we found cheap tickets." }, drill: { jp: "Ter sorte com o tempo", en: "Being lucky with the weather" }, accept: ["be lucky", "be fortunate", "lucky"], hint: "a sorte is luck, already met in boa sorte in Unit 2. Que sorte! on its own is what you say when something goes someone's way." },
      ],
    },
    {
      id: "pt-u22l3",
      unit: 22,
      lesson: 3,
      title: "Os sentimentos",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Name the feelings themselves as nouns — including the one Portuguese word that famously has no English equivalent.",
      items: [
        { id: "pt-u22l3-aalegria", type: "vocab", front: "a alegria", reading: "aalegria", meaning: "joy", example: { jp: "A alegria das crianças na festa era enorme.", en: "The children's joy at the party was enormous." }, drill: { jp: "A alegria da festa de anos", en: "The joy of the birthday party" }, accept: ["the joy", "happiness", "cheer"], hint: "a-le-GREE-a. The adjective is alegre, cheerful. Note it is joy as a thing you can point at, where feliz is a state you are in." },
        { id: "pt-u22l3-araiva", type: "vocab", front: "a raiva", reading: "araiva", meaning: "anger", example: { jp: "Senti muita raiva quando percebi que tinha perdido o voo.", en: "I felt a lot of anger when I realised I had missed the flight." }, drill: { jp: "A raiva não é boa", en: "Anger is not good" }, accept: ["the anger", "rage", "fury"], hint: "RRY-va, with the strong initial r. Ter raiva de alguém is to resent someone. It also means rabies, which context always settles." },
        { id: "pt-u22l3-omedo", type: "vocab", front: "o medo", reading: "omedo", meaning: "fear", example: { jp: "O medo de falar em público é muito comum.", en: "The fear of speaking in public is very common." }, drill: { jp: "O medo de falar em público", en: "The fear of speaking in public" }, accept: ["the fear", "fright", "dread"], hint: "ME-du. The noun behind ter medo two lessons back. Meter medo is to frighten someone — literally to put fear into them." },
        { id: "pt-u22l3-asaudade", type: "vocab", front: "a saudade", reading: "asaudade", meaning: "longing", example: { jp: "Tenho saudades de Lisboa e da comida da minha avó.", en: "I miss Lisbon and my grandmother's food." }, drill: { jp: "A saudade é muito portuguesa", en: "Saudade is very Portuguese" }, accept: ["the longing", "yearning", "missing someone", "nostalgia"], hint: "THE Portuguese word, and it genuinely has no English equivalent — the ache of missing something you loved. Usually plural in use: tenho saudades TUAS means I miss you." },
        { id: "pt-u22l3-oamor", type: "vocab", front: "o amor", reading: "oamor", meaning: "love", example: { jp: "O amor dos meus pais pela música veio dos avós.", en: "My parents' love of music came from my grandparents." }, drill: { jp: "O amor da família é forte", en: "The family's love is strong" }, accept: ["the love", "affection"], hint: "a-MOR, stress at the end. Amar is the verb, but in everyday Portuguese people say gostar muito de or adorar far more often than amar." },
        { id: "pt-u22l3-oriso", type: "vocab", front: "o riso", reading: "oriso", meaning: "laughter", example: { jp: "O riso das crianças ouvia-se do outro lado do jardim.", en: "The children's laughter could be heard from the other side of the garden." }, drill: { jp: "O riso é sempre bom", en: "Laughter is always good" }, accept: ["the laughter", "a laugh", "laugh"], hint: "RREE-zu. The verb rir is in the next lesson. A gargalhada is a proper belly laugh, with the lh you met in Unit 1." },
      ],
    },
    {
      id: "pt-u22l4",
      unit: 22,
      lesson: 4,
      title: "Sentir e mostrar",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say what you feel and how you show it, using the verbs behind the feelings you have just named.",
      items: [
        { id: "pt-u22l4-sentir", type: "vocab", front: "sentir", reading: "sentir", meaning: "to feel", example: { jp: "Sinto que este ano vai ser melhor do que o passado.", en: "I feel that this year is going to be better than last." }, drill: { jp: "Sentir frio de manhã", en: "Feeling cold in the morning" }, accept: ["feel", "to sense", "sense"], hint: "sinto, sentes, sente — the e turns to i in the I form, which is a whole family of -ir verbs. Sentir-se plus an adjective is how you feel: sinto-me bem." },
        { id: "pt-u22l4-chorar", type: "vocab", front: "chorar", reading: "chorar", meaning: "to cry", example: { jp: "O bebé chorou toda a noite e ninguém conseguiu dormir.", en: "The baby cried all night and nobody managed to sleep." }, drill: { jp: "Chorar toda a noite", en: "Crying all night" }, accept: ["cry", "to weep", "weep"], hint: "cho-RAR, and remember ch is always sh. Não vale a pena chorar is what Portugal says instead of no use crying over spilt milk." },
        { id: "pt-u22l4-rir", type: "vocab", front: "rir", reading: "rir", meaning: "to laugh", example: { jp: "Rimos muito com a história que o meu tio contou.", en: "We laughed a lot at the story my uncle told." }, drill: { jp: "Rir é muito bom", en: "Laughing is very good" }, accept: ["laugh", "to laugh at"], hint: "Three letters and irregular: rio, ris, ri. Rir-se DE something is to laugh at it. The noun o riso is in the lesson before this one." },
        { id: "pt-u22l4-sorrir", type: "vocab", front: "sorrir", reading: "sorrir", meaning: "to smile", example: { jp: "Ela sorriu quando viu as flores em cima da mesa.", en: "She smiled when she saw the flowers on the table." }, drill: { jp: "Sorrir é sempre bom", en: "Smiling is always good" }, accept: ["smile", "to grin"], hint: "Built on rir with so- in front: sorrio, sorris, sorri. o sorriso is the smile itself, exactly as o riso is the laugh." },
        { id: "pt-u22l4-preocuparse", type: "vocab", front: "preocupar-se", reading: "preocuparse", meaning: "to worry", example: { jp: "Não te preocupes, o comboio ainda não passou.", en: "Don't worry, the train hasn't gone yet." }, drill: { jp: "Preocupar-se com o exame", en: "Worrying about the exam" }, accept: ["worry", "to be worried", "be worried"], hint: "Takes COM for what you worry about. Não te preocupes is the everyday reassurance and worth learning whole. FALSE FRIEND — preocupado is worried, not preoccupied in the sense of busy." },
        { id: "pt-u22l4-adorar", type: "vocab", front: "adorar", reading: "adorar", meaning: "to love", example: { jp: "Adoro o mar no inverno, quando não está lá ninguém.", en: "I love the sea in winter, when there is nobody there." }, drill: { jp: "Adorar o mar no inverno", en: "Loving the sea in winter" }, accept: ["love", "to adore", "adore", "really like"], hint: "Stronger than gostar de and far commoner than amar for things rather than people. Note it takes a direct object — adoro o mar, with no de." },
      ],
    },
  ],
};
