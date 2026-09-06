// PT Unit 38 — A comida e a bebida · 2 — A2 (slot: conjugation-drill-1, REPURPOSED)
// ─────────────────────────────────────────────────────────────────────────────
// SLOT REPURPOSED, and this is a decided matter — see the block-2 kickoff and the
// crew-board row. The scaffold stamped this slot "Conjugation drill 1", which the
// engine cannot render for Portuguese: src/store/conjugate-latin.js declares
// ENGINES = { es, fr, no } and conjugateIn('pt', …) returns null. Worse, pt falls
// through to the JAPANESE vocabularies — conjFormsFor('pt') hands back ja forms
// and verbGroupsFor('pt') hands back ["godan","ichidan","irregular"] — so a
// Portuguese verb tagged group:"godan" would pass validate:content and render
// nothing at all. NO `group` OR `conjForm` TAG IS AUTHORED ANYWHERE IN THIS BLOCK.
// The slot therefore carries an ordinary vocabulary unit instead, and A2 lands
// complete with no dead slots and no dependency on the engine lane.
//
// The theme is the one A1 left half-open. A1's u6 (a comida e a bebida) taught
// the food itself — o pão, o queijo, o peixe, a carne, o arroz, a sopa. It never
// taught how to ORDER any of it, what is on the table, or how it was cooked. So
// this is that unit, and it continues A1's title with the · 2 the RUNBOOK asks
// for rather than inventing a new name for the same theme.
// Conventions and the pt-PT corpus decision: see unit1.js header.
// lang/unit/lesson are stamped in src/data/index.js.
export const PT_UNIT38 = {
  id: "pt-u38",
  lang: "pt",
  title: "A comida e a bebida · 2",
  order: 38,
  stage: "a2",
  lessons: [
    {
      id: "pt-u38l1",
      unit: 38,
      lesson: 1,
      title: "Na ementa",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Read a Portuguese menu and order from it — starter, dessert, and the small plates Portugal actually eats.",
      items: [
        { id: "pt-u38l1-aementa", type: "vocab", front: "a ementa", reading: "aementa", meaning: "menu", example: { jp: "A ementa do restaurante é pequena, o que normalmente é bom sinal.", en: "The restaurant's menu is small, which is usually a good sign." }, drill: { jp: "A ementa do restaurante é pequena", en: "The restaurant's menu is small" }, accept: ["the menu", "bill of fare"], hint: "PORTUGAL SAYS EMENTA. Brazil says o cardápio, and o menu here usually means the set meal of the day rather than the list. e-MEN-ta. A ementa do dia, chalked outside, is the cheap lunch every Portuguese town runs." },
        { id: "pt-u38l1-aentrada", type: "vocab", front: "a entrada", reading: "aentrada", meaning: "starter", example: { jp: "A entrada foi uma sopa de peixe e já chegava para o almoço todo.", en: "The starter was a fish soup and it was already enough for the whole lunch." }, drill: { jp: "A entrada foi uma sopa de peixe", en: "The starter was a fish soup" }, accept: ["appetiser", "appetizer", "the entrance", "first course"], hint: "en-TRA-da, from entrar. THREE jobs: the starter, the entrance to a building, and a ticket for admission. FALSE FRIEND for English — a Portuguese entrada is never the main course, which is o prato principal." },
        { id: "pt-u38l1-asobremesa", type: "vocab", front: "a sobremesa", reading: "asobremesa", meaning: "dessert", example: { jp: "A sobremesa foi um bolo de laranja que a dona da casa tinha feito de manhã.", en: "The dessert was an orange cake that the lady of the house had made that morning." }, drill: { jp: "A sobremesa foi um bolo de laranja", en: "The dessert was an orange cake" }, accept: ["pudding", "the dessert", "afters"], hint: "so-bre-ME-za — literally \"over-table\", built on a mesa from A1 u15. The one to order in Portugal is o pastel de nata, and asking for it by the Lisbon name, pastel de Belém, only works in Belém." },
        { id: "pt-u38l1-opetisco", type: "vocab", front: "o petisco", reading: "opetisco", meaning: "snack", example: { jp: "O petisco é sempre muito bom naquele sítio, e come-se de pé ao balcão.", en: "The snack is always very good in that place, and you eat it standing at the counter." }, drill: { jp: "O petisco é sempre muito bom", en: "The snack is always very good" }, accept: ["appetiser", "titbit", "tapa", "nibble"], hint: "pe-TEESH-ku. Portugal's answer to tapas — small plates shared at a counter, and petiscar is the verb for an evening spent doing it. This is a cultural word more than a culinary one; there is no clean English equivalent." },
        { id: "pt-u38l1-agorjeta", type: "vocab", front: "a gorjeta", reading: "agorjeta", meaning: "tip", example: { jp: "A gorjeta do empregado foi pequena, porque o serviço demorou quase uma hora.", en: "The waiter's tip was small, because the service took almost an hour." }, drill: { jp: "A gorjeta do empregado foi pequena", en: "The waiter's tip was small" }, accept: ["gratuity", "the tip"], hint: "gor-ZHE-ta. Practical: tipping in Portugal is modest and optional — rounding up, or five per cent for a good meal. Nothing to do with a propina, A1 u17, which is a university fee here and a tip in Spanish." },
        { id: "pt-u38l1-pedir", type: "vocab", front: "pedir", reading: "pedir", meaning: "to order", example: { jp: "Pedir a ementa ao empregado é normal, e as pessoas não acham isso mal-educado.", en: "Asking the waiter for the menu is normal, and people don't think that is rude." }, drill: { jp: "Pedir a ementa ao empregado é normal", en: "Asking the waiter for the menu is normal" }, accept: ["ask for", "to request", "to order", "to beg"], hint: "pe-DEER, irregular in the eu form: peço, with a cedilla, like faço and meço. ASK FOR something — as against perguntar in Unit 36, which is asking a question. Pedir a conta is how you get the bill, and you have to ask; it never just arrives." },
      ],
    },
    {
      id: "pt-u38l2",
      unit: 38,
      lesson: 2,
      title: "Os temperos",
      cefr: "A2",
      dominantMode: "recognize",
      canDo: "Name what goes on the food — salt, pepper, olive oil, garlic — and ask for it at the table.",
      items: [
        { id: "pt-u38l2-osal", type: "vocab", front: "o sal", reading: "osal", meaning: "salt", example: { jp: "O sal está na mesa, mas em Portugal a comida já chega bem temperada.", en: "The salt is on the table, but in Portugal the food already arrives well seasoned." }, drill: { jp: "O sal está na mesa", en: "The salt is on the table" }, accept: ["the salt"], hint: "SAL. Plural os sais, with the -l to -ais swap from o hospital. Portugal's flor de sal, hand-harvested in the Algarve, is a real export. Sem sal means both unsalted and, of a person, dull." },
        { id: "pt-u38l2-apimenta", type: "vocab", front: "a pimenta", reading: "apimenta", meaning: "pepper", example: { jp: "A pimenta é muito forte, por isso é melhor pôr pouca de uma vez.", en: "The pepper is very strong, so it is better to put a little at a time." }, drill: { jp: "A pimenta é muito forte", en: "The pepper is very strong" }, accept: ["black pepper", "the pepper"], hint: "pi-MEN-ta. Careful: a pimenta is the SPICE; o pimento is the vegetable, a bell pepper. One letter and one gender apart. The famous Portuguese hot sauce is piri-piri, from Mozambique." },
        { id: "pt-u38l2-oazeite", type: "vocab", front: "o azeite", reading: "oazeite", meaning: "olive oil", example: { jp: "O azeite português é muito bom e vai na salada, no peixe e até na sopa.", en: "Portuguese olive oil is very good and goes on salad, on fish and even in soup." }, drill: { jp: "O azeite português é muito bom", en: "Portuguese olive oil is very good" }, accept: ["the olive oil", "oil"], hint: "a-ZAY-te. SPECIFICALLY olive oil — any other cooking oil is o óleo, and the two are never confused here the way English's single \"oil\" allows. From Arabic az-zayt, like so much Portuguese food vocabulary." },
        { id: "pt-u38l2-oalho", type: "vocab", front: "o alho", reading: "oalho", meaning: "garlic", example: { jp: "O alho é bom para a sopa, mas naquele restaurante põem alho no peixe também.", en: "Garlic is good for soup, but in that restaurant they put garlic on the fish too." }, drill: { jp: "O alho é bom para a sopa", en: "Garlic is good for the soup" }, accept: ["the garlic"], hint: "A-lyu, with the lh from Unit 1. Do not confuse it with o olho, the eye, from A1 u11 — one vowel apart and a very different sentence. Portuguese cooking runs on alho, azeite and coentros." },
        { id: "pt-u38l2-acebola", type: "vocab", front: "a cebola", reading: "acebola", meaning: "onion", example: { jp: "A cebola é boa na sopa, mas quem a corta chora sempre.", en: "Onion is good in soup, but whoever cuts it always cries." }, drill: { jp: "A cebola é boa na sopa", en: "Onion is good in the soup" }, accept: ["the onion"], hint: "se-BO-la, soft c before e. A base of most Portuguese cooking — o refogado, the slow fry of cebola and alho in azeite, is where nearly every dish starts. Uma cebolada is a dish smothered in them." },
        { id: "pt-u38l2-ovinagre", type: "vocab", front: "o vinagre", reading: "ovinagre", meaning: "vinegar", example: { jp: "O vinagre é bom na salada, mas com azeite bom já não é preciso.", en: "Vinegar is good in salad, but with good olive oil it is no longer necessary." }, drill: { jp: "O vinagre é bom na salada", en: "Vinegar is good in the salad" }, accept: ["the vinegar"], hint: "vi-NA-gre — literally \"sour wine\", vinho + agre, and you can still hear o vinho from A1 u6 inside it. Portugal's is usually wine vinegar; balsamic is a recent import and is called balsâmico." },
      ],
    },
    {
      id: "pt-u38l3",
      unit: 38,
      lesson: 3,
      title: "À mesa",
      cefr: "A2",
      dominantMode: "recall",
      canDo: "Talk about what is on the table and what is being served, beyond the plate and cutlery A1 gave you.",
      items: [
        { id: "pt-u38l3-agarrafa", type: "vocab", front: "a garrafa", reading: "agarrafa", meaning: "bottle", example: { jp: "A garrafa de vinho está na mesa há uma hora e ainda está cheia.", en: "The bottle of wine has been on the table for an hour and is still full." }, drill: { jp: "A garrafa de vinho está na mesa", en: "The bottle of wine is on the table" }, accept: ["the bottle", "flask"], hint: "ga-RRA-fa, strong rr. Uma garrafa de água is what you ask for; if you want tap water, say água da torneira and expect a small argument. Um garrafão is the big five-litre one." },
        { id: "pt-u38l3-oguardanapo", type: "vocab", front: "o guardanapo", reading: "oguardanapo", meaning: "napkin", example: { jp: "O guardanapo está na mesa, mas em muitos cafés é apenas um papel pequeno.", en: "The napkin is on the table, but in many cafés it is only a small piece of paper." }, drill: { jp: "O guardanapo está na mesa", en: "The napkin is on the table" }, accept: ["serviette", "the napkin"], hint: "gwar-da-NA-pu — built on guardar, the verb Unit 33 taught for saving a file. Literally it \"keeps\" the tablecloth clean. The paper ones in a Portuguese café are famously small and famously useless." },
        { id: "pt-u38l3-oovo", type: "vocab", front: "o ovo", reading: "oovo", meaning: "egg", example: { jp: "O ovo cozido é bom na salada, e em Portugal aparece em quase todos os pratos.", en: "Boiled egg is good in salad, and in Portugal it turns up in almost every dish." }, drill: { jp: "O ovo cozido é bom na salada", en: "Boiled egg is good in the salad" }, accept: ["the egg"], hint: "O-vu, with a closed o — but the plural OPENS it: os ovos, with the vowel of \"or\". That vowel swap catches every learner and is real: ovo/ovos, novo/novos, porco/porcos. Ovos moles de Aveiro are a national dessert." },
        { id: "pt-u38l3-amanteiga", type: "vocab", front: "a manteiga", reading: "amanteiga", meaning: "butter", example: { jp: "A manteiga é boa com pão fresco, e ao pequeno-almoço não há nada melhor.", en: "Butter is good with fresh bread, and at breakfast there is nothing better." }, drill: { jp: "A manteiga é boa com pão", en: "Butter is good with bread" }, accept: ["the butter"], hint: "man-TAY-ga. A torrada com manteiga is the standard Portuguese breakfast beside a bica. Careful with the couvert — the bread and butter brought unasked to your table is charged for, and you may send it back." },
        { id: "pt-u38l3-amassa", type: "vocab", front: "a massa", reading: "amassa", meaning: "pasta", example: { jp: "A massa com queijo é deliciosa, mas em Portugal come-se muito mais arroz.", en: "Pasta with cheese is delicious, but in Portugal people eat far more rice." }, drill: { jp: "A massa com queijo é deliciosa", en: "Pasta with cheese is delicious" }, accept: ["dough", "the pasta", "mixture", "mass"], hint: "MA-sa, with the hard ss of isso from Unit 1. Pasta AND dough AND a crowd — a massa is all three, and in slang it is also money. Portugal's own is massinha, a soupy pasta dish for children." },
        { id: "pt-u38l3-servir", type: "vocab", front: "servir", reading: "servir", meaning: "to serve", example: { jp: "Servir o jantar às oito é normal em Portugal, e às vezes ainda mais tarde.", en: "Serving dinner at eight is normal in Portugal, and sometimes even later." }, drill: { jp: "Servir o jantar às oito é normal", en: "Serving dinner at eight is normal" }, accept: ["serve", "to be useful", "to fit"], hint: "ser-VEER, an -ir verb, irregular in the eu form: sirvo. It also means to be useful or to fit — isto não serve, this is no good; o casaco não me serve, the coat doesn't fit me. O serviço, from Unit 32, is its noun." },
      ],
    },
    {
      id: "pt-u38l4",
      unit: 38,
      lesson: 4,
      title: "Grelhado ou frito",
      cefr: "A2",
      dominantMode: "produce",
      canDo: "Say how something was cooked and whether it was any good — the four words that decide most Portuguese menus.",
      items: [
        { id: "pt-u38l4-grelhado", type: "vocab", front: "grelhado", reading: "grelhado", meaning: "grilled", example: { jp: "O peixe grelhado é muito saboroso, especialmente quando leva apenas azeite e sal.", en: "The grilled fish is very tasty, especially when it takes only olive oil and salt." }, drill: { jp: "O peixe grelhado é muito saboroso", en: "The grilled fish is very tasty" }, accept: ["broiled", "chargrilled", "off the grill"], hint: "gre-LYA-du, with the lh. THE default Portuguese cooking method — a sardinha grelhada in June is the national image of itself. From a grelha, the grill. Feminine grelhada." },
        { id: "pt-u38l4-assado", type: "vocab", front: "assado", reading: "assado", meaning: "roast", example: { jp: "O peixe assado no forno é bom, mas leva bastante mais tempo do que grelhado.", en: "Fish roasted in the oven is good, but it takes considerably longer than grilled." }, drill: { jp: "O peixe assado é muito bom", en: "The roast fish is very good" }, accept: ["roasted", "baked"], hint: "a-SA-du, with the hard ss. From assar, to roast. O frango assado — the roast chicken sold from roadside churrasqueiras — is Portugal's takeaway. Feminine assada; block 1 teaches o forno in u30." },
        { id: "pt-u38l4-cozido", type: "vocab", front: "cozido", reading: "cozido", meaning: "boiled", example: { jp: "O arroz cozido não é frito, e essa é a diferença entre um prato leve e um prato pesado.", en: "Boiled rice is not fried, and that is the difference between a light dish and a heavy one." }, drill: { jp: "O arroz cozido não é frito", en: "Boiled rice is not fried" }, accept: ["cooked", "boiled up", "stewed"], hint: "ku-ZEE-du, with the z sound, from cozer — not to be confused with coser, to sew, which sounds identical. As a noun o cozido à portuguesa is the national boiled dinner of meat and vegetables." },
        { id: "pt-u38l4-frito", type: "vocab", front: "frito", reading: "frito", meaning: "fried", example: { jp: "O peixe frito é mais caro do que o grelhado naquele restaurante, e o empregado não explica porquê.", en: "The fried fish is more expensive than the grilled in that restaurant, and the waiter doesn't explain why." }, drill: { jp: "O peixe frito é mais caro", en: "The fried fish is more expensive" }, accept: ["deep fried", "pan fried"], hint: "FREE-tu, from fritar — and note it is irregular as a participle, frito rather than \"fritado\". As batatas fritas are chips, and estar frito, of a person, means to be in serious trouble." },
        { id: "pt-u38l4-saboroso", type: "vocab", front: "saboroso", reading: "saboroso", meaning: "tasty", example: { jp: "O marisco é muito saboroso, mas é preciso saber comê-lo sem sujar a roupa.", en: "Seafood is very tasty, but you need to know how to eat it without dirtying your clothes." }, drill: { jp: "O marisco é muito saboroso", en: "Seafood is very tasty" }, accept: ["flavourful", "flavorful", "delicious", "savoury"], hint: "sa-bu-RO-zu, from o sabor, taste — and that from saber, which Unit 36 taught, because in Portuguese knowing and tasting are the same verb. Feminine saborosa. Note it is NOT esquisito, which Unit 10 warned you means weird." },
        { id: "pt-u38l4-omarisco", type: "vocab", front: "o marisco", reading: "omarisco", meaning: "seafood", example: { jp: "O marisco de Portugal é caro, mas numa marisqueira ao domingo está sempre cheio.", en: "Portuguese seafood is expensive, but a seafood restaurant on a Sunday is always full." }, drill: { jp: "O marisco de Portugal é caro", en: "Portuguese seafood is expensive" }, accept: ["shellfish", "the seafood"], hint: "ma-REESH-ku, from o mar, A1 u20. SHELLFISH specifically — prawns, crab, clams — not fish, which stays o peixe. Uma marisqueira is the restaurant that specialises in it, and amêijoas à Bulhão Pato is what to order." },
      ],
    },
  ],
};
