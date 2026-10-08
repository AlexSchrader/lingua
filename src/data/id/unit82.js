// ID Unit 82 — Perkakas dan bahan ("Tools and materials") — B1
// ─────────────────────────────────────────────────────────────────────────────
// B1 block 3 (u77–u87). The 12 conventions in unit1.js and the 10 A2 conventions
// in unit21.js BIND this file. Read both before editing.
//
// THE HOLE THIS FILLS, AND IT WAS MEASURED ONCE ALREADY AND LEFT OPEN. The id A2
// seat's own core-inventory run reported "tools were 0 of 14 in the whole
// language". Re-measured against all 1200 A1+A2 cards for this unit: STILL 0.
// What A2 actually taught was the GENERIC and the INDUSTRIAL —
//   `alat` (a tool, in the abstract) · `mesin` · `perangkat` · `pabrik` ·
//   `listrik` · `kabel` · `baterai` · `tombol` · `canggih`
// and the RAW materials —
//   `kayu` · `besi` · `logam` · `emas` · `batu` · `kertas` · `tanah` · `pasir` ·
//   `kaleng` · `botol` · `bahan`
// — plus exactly three household implements: `pisau` · `sendok` · `panci`.
// NOT ONE NAMED HAND TOOL. A learner with 1200 Indonesian words could say "that
// machine is sophisticated" and could not ask for a hammer.
//
// ⚠️ THE SPLIT WITH THE NEXT UNIT, WHICH IS ALSO MINE, AND IT IS DECIDED HERE SO
// NOBODY HAS TO FEEL FOR IT. **This unit owns the hand tool and the STOCK
// material; the next one owns THE STRUCTURE.** The line is whether the stuff is
// still on a shelf or already built into something:
//   • HERE:  `kaca` · `karet` · `kain` · `kawat` · `benang` · `karung` · `selang`
//            — material you buy by the metre or the roll.
//   • THERE: `semen` · `bata` · `genteng` · `ubin` — material in situ, in a wall
//            or on a roof.
//   • `tangga` (a ladder) is HERE: you carry it to the job. `lift` is THERE: it
//            is part of the building.
//
// TWO FRONTS WERE BLOCKED AND BOTH ARE ALREADY TAUGHT: `kayu` and `besi` (u46).
// They are the materials this unit's tools are made OF, and they stay where they
// are. A third, `tang` (pliers), was declined: three letters, and it sits inside
// `tangan` and `tangga` closely enough to be a dictation hazard for no gain.
//
// TWO WORDS DECLINED FOR THE COPY-TASK RULE (A10 — the `skor` rejection):
//   `plastik` one letter from "plastic".
//   `pipa`    one letter from "a pipe". `selang` (a hose) is carded instead, and
//             it is the word an Indonesian household actually uses.
//
// GLOSSES REWRITTEN BECAUSE THE GRADER COLLIDED THEM. `normalizeMeaning` strips a
// leading "to " and "a/an/the", and `lint:curriculum` compares exact strings, so
// all three of these shipped invisible to lint:
//   `kaca`   "glass"   -> `gelas` (a drinking glass) accepts "glass".
//                        Now "a pane of glass".
//   `karung` "a sack"  -> BOTH `tas` and `kantong` accept "a sack".
//                        Now "a gunny sack".
//   `kawat`  "wire"    -> `kabel` accepts "wire". Now "metal wire".
// That middle one is the useful warning: two separate taught words had claimed
// the gloss, from two different units, and nothing flagged it.
//
// ROOT NOTE: `benang` is NOT built on `nang` — the probe matched `senang` and
// `menang` by letters. Unrelated word, carded clean.
// ─────────────────────────────────────────────────────────────────────────────
export const ID_UNIT82 = {
  id: "id-u82",
  lang: "id",
  title: "Perkakas dan bahan",
  order: 82,
  stage: "b1",
  lessons: [
    {
      id: "id-u82l1",
      unit: 82,
      lesson: 1,
      title: "Palu, paku, dan gergaji",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Ask for the right tool by name instead of pointing: a hammer, a nail, a saw, a screwdriver, a screw.",
      items: [
        { id: "id-u82l1-perkakas", type: "vocab", front: "perkakas", reading: "perkakas", meaning: "a set of tools", example: { jp: "Perkakas itu ada di dalam kotak di gudang.", en: "Those tools are in a box in the storeroom." }, accept: ["a toolkit", "implements taken together"], drill: { jp: "Perkakas itu ada di kotak di gudang", en: "Those tools are in a box in the storeroom" }, hint: "pur-KA-kahs. You already know alat, which is a tool or a device of ANY kind including a machine. perkakas is specifically the hand tools, as a kit: kotak perkakas is a toolbox." },
        { id: "id-u82l1-palu", type: "vocab", front: "palu", reading: "palu", meaning: "a hammer", example: { jp: "Saya mencari palu untuk memasang gambar.", en: "I am looking for a hammer to put up a picture." }, accept: ["a mallet", "a tool for driving nails"], drill: { jp: "Saya mencari palu untuk memasang gambar", en: "I am looking for a hammer to put up a picture" }, hint: "PA-loo. Also the judge's gavel, and the city of Palu in Sulawesi — same spelling, and context always sorts it." },
        { id: "id-u82l1-paku", type: "vocab", front: "paku", reading: "paku", meaning: "a nail", example: { jp: "Paku itu terlalu pendek untuk dinding yang tebal.", en: "That nail is too short for a thick wall." }, accept: ["a metal nail", "a tack"], drill: { jp: "Paku itu terlalu pendek untuk dinding tebal", en: "That nail is too short for a thick wall" }, hint: "PA-koo. One letter from palu, which you just met, and they are used in the same sentence constantly: palu dan paku. A nail for the hand, never a fingernail — that is kuku." },
        { id: "id-u82l1-gergaji", type: "vocab", front: "gergaji", reading: "gergaji", meaning: "a saw", example: { jp: "Dia memotong kayu dengan gergaji kecil.", en: "He cuts wood with a small saw." }, accept: ["a hand saw", "a cutting blade with teeth"], drill: { jp: "Dia memotong kayu dengan gergaji kecil", en: "He cuts wood with a small saw" }, hint: "gur-GA-jee. Both halves of the g are hard. The verb is menggergaji, to saw. kayu, the wood it cuts, you already know." },
        { id: "id-u82l1-obeng", type: "vocab", front: "obeng", reading: "obeng", meaning: "a screwdriver", example: { jp: "Obeng ini terlalu besar untuk sekrup yang kecil.", en: "This screwdriver is too big for a small screw." }, accept: ["a tool for turning screws", "a turning tool"], drill: { jp: "Obeng ini terlalu besar untuk sekrup kecil", en: "This screwdriver is too big for a small screw" }, hint: "O-beng, ending in the ng hum. From Dutch schroevendraaier by a long route, and nothing like the English word — a good reminder that Indonesian's borrowings come through Dutch, not English." },
        { id: "id-u82l1-sekrup", type: "vocab", front: "sekrup", reading: "sekrup", meaning: "a screw", example: { jp: "Sekrup di kursi itu sudah hilang.", en: "The screw in that chair is already missing." }, accept: ["a threaded fastener", "a bolt with a thread"], drill: { jp: "Sekrup di kursi itu sudah hilang", en: "The screw in that chair is missing" }, hint: "SUH-kroop, from Dutch schroef. A screw turns, a paku is driven — Indonesian keeps the two as clearly apart as English does." },
      ],
    },
    {
      id: "id-u82l2",
      unit: 82,
      lesson: 2,
      title: "Bor, gunting, dan jarum",
      cefr: "B1",
      dominantMode: "recognize",
      canDo: "Name the tools that make holes and joins — a drill, scissors, a needle, thread, glue, rope — and say what you are using each for.",
      items: [
        { id: "id-u82l2-bor", type: "vocab", front: "bor", reading: "bor", meaning: "a drill", example: { jp: "Bor itu terlalu keras untuk dinding yang tipis.", en: "That drill is too strong for a thin wall." }, accept: ["a boring tool", "a power drill"], drill: { jp: "Bor itu terlalu keras untuk dinding tipis", en: "That drill is too strong for a thin wall" }, hint: "BOR, one syllable, from Dutch boor. The verb is mengebor, to drill — note the extra e, because a one-syllable root takes menge- rather than meng-." },
        { id: "id-u82l2-gunting", type: "vocab", front: "gunting", reading: "gunting", meaning: "scissors", example: { jp: "Gunting itu tidak tajam, jadi susah memotong kertas.", en: "Those scissors are not sharp, so it is hard to cut paper." }, accept: ["a pair of scissors", "shears"], drill: { jp: "Gunting itu tidak tajam dan susah memotong", en: "Those scissors are not sharp and cut poorly" }, hint: "GOON-ting, ng hum at the end. Singular in Indonesian, where English insists on a plural pair — nouns here are not marked for number. The verb is menggunting." },
        { id: "id-u82l2-jarum", type: "vocab", front: "jarum", reading: "jarum", meaning: "a needle", example: { jp: "Jarum itu sangat kecil, jadi mudah hilang.", en: "That needle is very small, so it is easy to lose." }, accept: ["a sewing needle", "a thin pointed shaft"], drill: { jp: "Jarum itu sangat kecil dan mudah hilang", en: "That needle is very small and easy to lose" }, hint: "JA-room. A sewing needle, a clock hand, and the needle of an injection — you already know suntik for the injection itself. jarum jam is the hand of a clock." },
        { id: "id-u82l2-benang", type: "vocab", front: "benang", reading: "benang", meaning: "thread", example: { jp: "Benang hitam ini cukup untuk satu baju.", en: "This black thread is enough for one shirt." }, accept: ["sewing thread", "yarn"], drill: { jp: "Benang hitam ini cukup untuk satu baju", en: "This black thread is enough for one shirt" }, hint: "buh-NAHNG. What goes through the jarum. It shares no root with senang (happy) or menang (to win) — they merely end the same way." },
        { id: "id-u82l2-lem", type: "vocab", front: "lem", reading: "lem", meaning: "glue", example: { jp: "Lem ini sudah kering sekali dan tidak berguna.", en: "This glue has gone very dry and is useless." }, accept: ["adhesive", "paste for sticking"], drill: { jp: "Lem ini sudah kering dan tidak berguna", en: "This glue has gone dry and is useless" }, hint: "LEM, one syllable, from Dutch leem. The verb is mengelem, with the same extra e that mengebor takes, and for the same reason: the root is one syllable." },
        { id: "id-u82l2-tali", type: "vocab", front: "tali", reading: "tali", meaning: "rope", example: { jp: "Tali itu kuat, jadi bisa untuk membawa barang berat.", en: "That rope is strong, so it can carry heavy goods." }, accept: ["a cord", "string"], drill: { jp: "Tali itu kuat dan bisa membawa barang berat", en: "That rope is strong and can carry heavy goods" }, hint: "TA-lee. Rope, string and cord are all tali — thickness does not change the word. It also appears in tali air, an irrigation channel, and in tali persaudaraan, the bonds between people." },
      ],
    },
    {
      id: "id-u82l3",
      unit: 82,
      lesson: 3,
      title: "Kaca, karet, dan kain",
      cefr: "B1",
      dominantMode: "recall",
      canDo: "Name the stock materials you buy by the sheet, the metre or the roll — glass, rubber, cloth, wire, sacking, hose — and say which one a job needs.",
      items: [
        { id: "id-u82l3-kaca", type: "vocab", front: "kaca", reading: "kaca", meaning: "a pane of glass", example: { jp: "Kaca jendela itu rusak waktu angin kuat.", en: "That window pane broke in the strong wind." }, accept: ["sheet glass", "glass as a material"], drill: { jp: "Kaca jendela itu rusak waktu angin kuat", en: "That window pane broke in the strong wind" }, hint: "KA-cha — c is CH. Glass as a MATERIAL or a pane. You already know gelas, which is the thing you drink from; the gloss here says \"a pane\" because the grader would otherwise accept one answer for both. kaca mata is a different compound again, and it is a later unit's." },
        { id: "id-u82l3-karet", type: "vocab", front: "karet", reading: "karet", meaning: "rubber", example: { jp: "Roda itu dari karet, jadi tidak keras.", en: "That wheel is made of rubber, so it is not hard." }, accept: ["rubber as a material", "an elastic band"], drill: { jp: "Roda itu dari karet dan tidak keras", en: "That wheel is rubber and not hard" }, hint: "KA-ret. Indonesia is one of the world's great rubber producers, so you will see kebun karet on road signs. karet gelang is a rubber band." },
        { id: "id-u82l3-kain", type: "vocab", front: "kain", reading: "kain", meaning: "cloth", example: { jp: "Kain ini halus, jadi mahal sekali.", en: "This cloth is fine, so it is very expensive." }, accept: ["fabric", "textile by the metre"], drill: { jp: "Kain ini halus jadi mahal sekali", en: "This cloth is fine so it is very expensive" }, hint: "KA-een, two syllables. Cloth as material, where baju is a finished garment. In Indonesia kain on its own also means the wrapped lower garment worn with a kebaya." },
        { id: "id-u82l3-kawat", type: "vocab", front: "kawat", reading: "kawat", meaning: "metal wire", example: { jp: "Kawat itu tipis tetapi sangat kuat.", en: "That wire is thin but very strong." }, accept: ["wire for binding", "thin drawn metal"], drill: { jp: "Kawat itu tipis tetapi sangat kuat", en: "That wire is thin but very strong" }, hint: "KA-waht. Bare metal wire for tying and fencing. You already know kabel, which is the insulated electrical kind and accepts \"wire\" from the grader — which is why this card is glossed METAL wire." },
        { id: "id-u82l3-karung", type: "vocab", front: "karung", reading: "karung", meaning: "a gunny sack", example: { jp: "Gula itu ada di dalam karung besar.", en: "The sugar is in a big sack." }, accept: ["a large woven sack", "a bulk bag"], drill: { jp: "Gula itu ada di dalam karung besar", en: "The sugar is in a big sack" }, hint: "KA-roong. The big woven plastic sack that rice, cement and coffee come in. Both tas and kantong already accept \"a sack\" from the grader, so this card has to say which kind." },
        { id: "id-u82l3-selang", type: "vocab", front: "selang", reading: "selang", meaning: "a hose", example: { jp: "Selang itu rusak, jadi air keluar di tengah.", en: "That hose is damaged, so water comes out in the middle." }, accept: ["a flexible tube", "a rubber pipe"], drill: { jp: "Selang itu rusak dan air keluar di tengah", en: "That hose is damaged and water comes out in the middle" }, hint: "suh-LAHNG. The flexible rubber tube, for water or for fuel. Indonesian uses it where English might say pipe — a rigid pipe is a pipa, which this unit leaves out because the word and its gloss are a letter apart." },
      ],
    },
    {
      id: "id-u82l4",
      unit: 82,
      lesson: 4,
      title: "Ember, tangga, dan kuas",
      cefr: "B1",
      dominantMode: "produce",
      canDo: "Equip a job around the house or garden: a bucket, a ladder, a brush, a paintbrush, a tarpaulin, a hoe.",
      items: [
        { id: "id-u82l4-ember", type: "vocab", front: "ember", reading: "ember", meaning: "a bucket", example: { jp: "Ember di kamar mandi itu sudah penuh air.", en: "The bucket in the bathroom is already full of water." }, accept: ["a pail", "a plastic water bucket"], drill: { jp: "Ember di kamar mandi sudah penuh air", en: "The bucket in the bathroom is full of water" }, hint: "EM-ber, from Dutch emmer. Central to an Indonesian bathroom, where the bak and the ember do the work a shower does elsewhere." },
        { id: "id-u82l4-tangga", type: "vocab", front: "tangga", reading: "tangga", meaning: "a ladder", example: { jp: "Tangga itu terlalu pendek untuk atap rumah.", en: "That ladder is too short for the roof of the house." }, accept: ["a set of steps", "stairs"], drill: { jp: "Tangga itu terlalu pendek untuk atap rumah", en: "That ladder is too short for the house roof" }, hint: "TAHNG-ga, with ngg: the hum PLUS a hard g. Both a ladder you carry and the stairs in a building. It also hides inside rumah tangga, a household — literally house-and-steps." },
        { id: "id-u82l4-sikat", type: "vocab", front: "sikat", reading: "sikat", meaning: "a brush", example: { jp: "Sikat ini keras, jadi baik untuk lantai yang kotor.", en: "This brush is stiff, so it is good for a dirty floor." }, accept: ["a scrubbing brush", "a bristled tool"], drill: { jp: "Sikat ini keras dan baik untuk lantai kotor", en: "This brush is stiff and good for a dirty floor" }, hint: "SEE-kaht. A scrubbing or cleaning brush — sikat gigi is a toothbrush. The verb menyikat is to scrub, and in slang it also means to swipe something." },
        { id: "id-u82l4-kuas", type: "vocab", front: "kuas", reading: "kuas", meaning: "a paintbrush", example: { jp: "Kuas itu kecil, jadi lama sekali untuk dinding besar.", en: "That brush is small, so a big wall takes a very long time." }, accept: ["a painter's brush", "an artist's brush"], drill: { jp: "Kuas itu kecil jadi lama untuk dinding besar", en: "That brush is small so a big wall takes long" }, hint: "KOO-ahs, two syllables. The soft brush that carries paint or ink, where a sikat scrubs. An artist's brush is a kuas too — you already know lukisan, a painting." },
        { id: "id-u82l4-terpal", type: "vocab", front: "terpal", reading: "terpal", meaning: "a tarpaulin", example: { jp: "Mereka memasang terpal di atas barang waktu hujan.", en: "They put a tarpaulin over the goods when it rained." }, accept: ["a waterproof sheet", "canvas sheeting"], drill: { jp: "Mereka memasang terpal di atas barang", en: "They put a tarpaulin over the goods" }, hint: "TUR-pahl, from Dutch terpaulin. The blue plastic sheet that covers a market stall, a load on a truck, or a roof that is still being built. You see it everywhere in Indonesia." },
        { id: "id-u82l4-cangkul", type: "vocab", front: "cangkul", reading: "cangkul", meaning: "a hoe", example: { jp: "Dia memakai cangkul untuk bekerja di tanah.", en: "He uses a hoe to work the soil." }, accept: ["a digging hoe", "a mattock"], drill: { jp: "Dia memakai cangkul untuk bekerja di tanah", en: "He uses a hoe to work the soil" }, hint: "CHAHNG-kool — c is CH, and the ng is one hum. The broad-bladed hoe swung downwards, and the basic tool of Indonesian farming. The verb is mencangkul." },
      ],
    },
  ],
};
