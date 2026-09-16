// NO Unit 80 — Bolig og leieforhold (slot: coverage-b1-7) — B1
// COVERAGE UNIT, block 3. Retitled from the scaffold's "Vocabulary 7 (B1)".
//
// u16 "Hjemme" and u30 "Hjem og husarbeid" teach the INSIDE of a home — rooms,
// furniture, appliances, ei husleie, å leie, en kjeller, en balkong. Nobody
// teaches the RELATIONSHIP: en utleier, en leietaker, ei oppsigelse, et
// borettslag, en vaktmester, ei nettleie, en måler, en lekkasje, å melde fra.
// Renting is the first thing a newcomer does and the vocabulary for it stopped at
// the rent itself.
//
// `en strøm` is taught here rather than in a science unit because for a tenant it
// is a bill and a meter, not a physical phenomenon.
//
// Conventions per no/unit1.js. lang/unit/lesson are stamped in src/data/index.js.
export const NO_UNIT80 = {
  id: "no-u80",
  lang: "no",
  title: "Bolig og leieforhold",
  order: 80,
  stage: "b1",
  lessons: [
    {
      id: "no-u80l1",
      unit: 80,
      lesson: 1,
      title: "Å leie et sted",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Rent a place — name both sides of the agreement, give notice and move in.",
      items: [
        { id: "no-u80l1-enutleier", type: "vocab", front: "en utleier", reading: "enutleier", meaning: "landlord", example: { jp: "Utleieren bor i samme hus, så han ser alt vi gjør.", en: "The landlord lives in the same house, so he sees everything we do." }, accept: ["a lessor", "a landlady"], drill: { jp: "Hun er en utleier folk liker", en: "She is a landlord people like" }, hint: "en utleier → utleieren. Ut + å leie (u30). Samme form for kvinne og mann." },
        { id: "no-u80l1-enleietaker", type: "vocab", front: "en leietaker", reading: "enleietaker", meaning: "tenant", example: { jp: "Som leietaker har du flere rettigheter enn du tror.", en: "As a tenant you have more rights than you think." }, accept: ["a lessee", "a renter"], drill: { jp: "Han er en leietaker uten problemer", en: "He is a tenant without problems" }, hint: "en leietaker → leietakeren, flertall leietakere. Å leie + å ta: den som tar leia. Paret til en utleier." },
        { id: "no-u80l1-enoppsigelse", type: "vocab", front: "en oppsigelse", reading: "enoppsigelse", meaning: "notice (termination)", example: { jp: "Vi sendte en oppsigelse tre måneder før vi flyttet.", en: "We sent a notice three months before we moved." }, accept: ["a termination", "a resignation"], drill: { jp: "Vi sendte en oppsigelse i går", en: "We sent a notice yesterday" }, hint: "-else-ord er hankjønn (regel 1), aldri ei: en oppsigelse → oppsigelsen. Fra å si opp (u79)." },
        { id: "no-u80l1-aflytteinn", type: "vocab", front: "å flytte inn", reading: "aflytteinn", meaning: "to move in", example: { jp: "De skal flytte inn i leiligheten rett etter jul.", en: "They're going to move into the flat right after Christmas." }, accept: ["move in", "to take up residence"], drill: { jp: "Vi begynner å flytte inn i morgen", en: "We start moving in tomorrow" }, hint: "å flytte (u16) + inn. Motsatt: å flytte ut. Uten partikkel betyr å flytte bare 'to move something'." },
        { id: "no-u80l1-eiflytting", type: "vocab", front: "ei flytting", reading: "eiflytting", meaning: "move (relocation)", example: { jp: "Flyttinga tok hele helga, og vi er fremdeles trøtte.", en: "The move took the whole weekend, and we're still tired." }, accept: ["a removal", "moving house"], drill: { jp: "Ei flytting tar alltid lang tid", en: "A move always takes a long time" }, hint: "ei flytting → flyttinga. -ing-ord er hunkjønn. Et flyttebyrå er the removal firm." },
        { id: "no-u80l1-enplass", type: "vocab", front: "en plass", reading: "enplass", meaning: "room (space)", example: { jp: "Det er ikke plass til et bord til på kjøkkenet.", en: "There isn't room for another table in the kitchen." }, accept: ["space", "a place", "a seat"], drill: { jp: "Vi fant en plass til bordet", en: "We found a place for the table" }, hint: "en plass → plassen. Tre liv: space (det er plass), a place (en fin plass), og a seat (min plass på toget)." },
      ],
    },
    {
      id: "no-u80l2",
      unit: 80,
      lesson: 2,
      title: "I bygården",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Live in a block of flats — who owns it, who fixes it, and what everyone shares.",
      items: [
        { id: "no-u80l2-etborettslag", type: "vocab", front: "et borettslag", reading: "etborettslag", meaning: "housing cooperative", example: { jp: "Vi bor i et borettslag med mange leiligheter.", en: "We live in a housing cooperative with many flats." }, accept: ["a co-op", "a housing association"], drill: { jp: "Vi bor i et borettslag", en: "We live in a housing cooperative" }, hint: "et borettslag → borettslaget. Å bo + en rett + et lag: the group with the right to live there. Svært vanlig eieform i Norge." },
        { id: "no-u80l2-envaktmester", type: "vocab", front: "en vaktmester", reading: "envaktmester", meaning: "caretaker", example: { jp: "Ring vaktmesteren hvis heisen stopper igjen.", en: "Call the caretaker if the lift stops again." }, accept: ["a janitor", "a superintendent"], drill: { jp: "Hvert bygg har en vaktmester", en: "Every building has a caretaker" }, hint: "en vaktmester → vaktmesteren. En vakt + en mester. Personen som fikser alt som ikke er ditt." },
        { id: "no-u80l2-enheis", type: "vocab", front: "en heis", reading: "enheis", meaning: "lift (elevator)", example: { jp: "Heisen går ikke helt opp, så vi må gå trappa.", en: "The lift does not go all the way up, so we have to walk the stairs." }, accept: ["an elevator"], drill: { jp: "Huset har en heis og ei trapp", en: "The house has a lift and stairs" }, hint: "en heis → heisen. Fra å heise, to hoist. En skiheis er the ski lift." },
        { id: "no-u80l2-etloft", type: "vocab", front: "et loft", reading: "etloft", meaning: "attic", example: { jp: "Alle de gamle bøkene står oppe på loftet.", en: "All the old books are up in the attic." }, accept: ["a loft", "an attic room"], drill: { jp: "Huset har et loft over rommene", en: "The house has an attic above the rooms" }, hint: "et loft → loftet. Paret til en kjeller (u30): loftet oppe, kjelleren nede." },
        { id: "no-u80l2-etfellesareal", type: "vocab", front: "et fellesareal", reading: "etfellesareal", meaning: "shared area", example: { jp: "Hagen er et fellesareal, så alle kan bruke den.", en: "The garden is a shared area, so everybody can use it." }, accept: ["a common area", "communal space"], drill: { jp: "Hagen er et fellesareal", en: "The garden is a shared area" }, hint: "et fellesareal → fellesarealet. Felles = common, shared. Et areal er a floor area." },
        { id: "no-u80l2-enhusordensregel", type: "vocab", front: "en husordensregel", reading: "enhusordensregel", meaning: "house rule", example: { jp: "Det står i husordensreglene at ingen skal lage lyd om natta.", en: "It says in the house rules that nobody may make noise at night." }, accept: ["a building rule", "a tenancy rule"], drill: { jp: "Dette er en husordensregel", en: "This is a house rule" }, hint: "en husordensregel → husordensregelen, flertall husordensregler. Et hus + en orden + en regel (u32). Nesten alltid i flertall." },
      ],
    },
    {
      id: "no-u80l3",
      unit: 80,
      lesson: 3,
      title: "Strøm og varme",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Deal with electricity and heating — the supply, the grid rent, the meter and a power cut.",
      items: [
        { id: "no-u80l3-strom", type: "vocab", front: "strøm", reading: "strom", meaning: "electricity", example: { jp: "Strømmen er dyrest om vinteren, når alle bruker mest.", en: "Electricity is most expensive in the winter, when everybody uses the most." }, accept: ["power", "current", "a stream"], drill: { jp: "Strøm er dyrest om vinteren", en: "Electricity is most expensive in winter" }, hint: "strøm → strømmen. Massesubstantiv, derfor bart oppslag (regel 1b). Også a current in water: strømmen i elva." },
        { id: "no-u80l3-einettleie", type: "vocab", front: "ei nettleie", reading: "einettleie", meaning: "grid rent", example: { jp: "Du betaler for strømmen og ei nettleie hver måned.", en: "You pay for the electricity and a grid rent every month." }, accept: ["a network charge", "a distribution fee"], drill: { jp: "Vi betaler ei nettleie hver måned", en: "We pay a grid rent every month" }, hint: "ei nettleie → nettleia. Et nett + ei leie: rent for the wires, not for the power. To regninger fra to selskaper." },
        { id: "no-u80l3-etstrombrudd", type: "vocab", front: "et strømbrudd", reading: "etstrombrudd", meaning: "power cut", example: { jp: "Vi hadde et strømbrudd i tre timer under stormen.", en: "We had a power cut for three hours during the storm." }, accept: ["a blackout", "an outage"], drill: { jp: "Vi hadde et strømbrudd i går", en: "We had a power cut yesterday" }, hint: "et strømbrudd → strømbruddet. En strøm + et brudd, fra å bryte. Vanlig ute på bygda om vinteren." },
        { id: "no-u80l3-avarmeopp", type: "vocab", front: "å varme opp", reading: "avarmeopp", meaning: "to heat up", example: { jp: "Det tar lang tid å varme opp hele huset igjen.", en: "It takes a long time to heat the whole house up again." }, accept: ["to warm up", "heat"], drill: { jp: "Det tar tid å varme opp huset", en: "It takes time to heat up the house" }, hint: "Fra varm (u8) + opp. Også om mat og om kroppen før trening." },
        { id: "no-u80l3-enmaler", type: "vocab", front: "en måler", reading: "enmaler", meaning: "meter (gauge)", example: { jp: "Måleren står nede i kjelleren ved døra.", en: "The meter is downstairs in the basement by the door." }, accept: ["a gauge", "a counter"], drill: { jp: "Hvert hus har en måler", en: "Every house has a meter" }, hint: "en måler → måleren. Fra å måle (u35). NB: folder til maler, som også er 'a painter' — samme skriftbilde uten å." },
        { id: "no-u80l3-oppvarming", type: "vocab", front: "oppvarming", reading: "oppvarming", meaning: "heating", example: { jp: "Oppvarminga koster mest i de kaldeste månedene.", en: "The heating costs the most in the coldest months." }, accept: ["warming up", "a warm-up"], drill: { jp: "Oppvarming koster mye om vinteren", en: "Heating costs a lot in the winter" }, hint: "oppvarming → oppvarminga. -ing-ord er hunkjønn, men dette er massesubstantiv og står bart (regel 1b). Også a warm-up før sport." },
      ],
    },
    {
      id: "no-u80l4",
      unit: 80,
      lesson: 4,
      title: "Når noe ryker",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Report a fault in a rented home — a leak, a break-in, a repair and who to tell.",
      items: [
        { id: "no-u80l4-enlekkasje", type: "vocab", front: "en lekkasje", reading: "enlekkasje", meaning: "leak", example: { jp: "Det var en lekkasje på badet, og gulvet ble helt vått.", en: "There was a leak in the bathroom, and the floor got completely wet." }, accept: ["a leakage", "a drip"], drill: { jp: "Det er en lekkasje på badet", en: "There is a leak in the bathroom" }, hint: "en lekkasje → lekkasjen. Uttales -sje som i garasje. Fra å lekke, to leak." },
        { id: "no-u80l4-ameldefra", type: "vocab", front: "å melde fra", reading: "ameldefra", meaning: "to report (notify)", example: { jp: "Du må melde fra til utleieren med en gang noe ryker.", en: "You have to notify the landlord immediately when something breaks." }, accept: ["to notify", "to let somebody know"], drill: { jp: "Husk å melde fra til utleieren", en: "Remember to notify the landlord" }, hint: "Ei melding (u20) er substantivet. Melde fra TIL noen OM noe. Uten fra betyr å melde 'to register'." },
        { id: "no-u80l4-areparere", type: "vocab", front: "å reparere", reading: "areparere", meaning: "to repair", example: { jp: "De skal reparere heisen en gang neste uke.", en: "They're going to repair the lift sometime next week." }, accept: ["to fix", "to mend", "repair"], drill: { jp: "Vi må prøve å reparere den selv", en: "We have to try to repair it ourselves" }, hint: "å reparere → reparerer. En reparasjon er the repair. Å fikse (u82) er det uformelle ordet." },
        { id: "no-u80l4-aryke", type: "vocab", front: "å ryke", reading: "aryke", meaning: "to break (snap)", example: { jp: "Lyset røk igjen, og nå er det helt mørkt her inne.", en: "The light went again, and now it's completely dark in here." }, accept: ["to go (break)", "to snap", "to blow"], drill: { jp: "Gamle lys begynner å ryke", en: "Old lights start to go" }, hint: "å ryke → ryker, røk, røket. Brukes om noe som plutselig går i stykker: en sikring, et lys, et tau. Også 'to smoke'." },
        { id: "no-u80l4-etinnbrudd", type: "vocab", front: "et innbrudd", reading: "etinnbrudd", meaning: "break-in", example: { jp: "Det var et innbrudd i kjelleren vår i vinter.", en: "There was a break-in in our basement this winter." }, accept: ["a burglary"], drill: { jp: "Det var et innbrudd i kjelleren", en: "There was a break-in in the basement" }, hint: "et innbrudd → innbruddet. Inn + et brudd, fra å bryte: to break in. En innbruddstyv er the burglar." },
        { id: "no-u80l4-vedlikehold", type: "vocab", front: "vedlikehold", reading: "vedlikehold", meaning: "maintenance", example: { jp: "Utleieren har ansvar for vedlikeholdet av bygget.", en: "The landlord is responsible for the maintenance of the building." }, accept: ["upkeep", "servicing"], drill: { jp: "Huset trenger vedlikehold hvert år", en: "The house needs maintenance every year" }, hint: "vedlikehold → vedlikeholdet. Ved + like + å holde (u77): keeping it the same. Massesubstantiv, derfor bart oppslag. Står alltid i kontrakten." },
      ],
    },
  ],
};
