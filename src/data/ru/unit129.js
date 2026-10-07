// RU Unit 129 — Войско и оборона ("The army and defence") — B2
// ─────────────────────────────────────────────────────────────────────────────
// B2 block 3 (u124–u136). Conventions: ru/unit1.js §1–§10 and §A–§D,
// ru/unit31.js §1–§7, ru/unit51.js §1–§5, ru/unit87.js §1–§6, and
// ru/unit124.js §1–§5 for this block.
// Probes quoted in this header are reproducible with
// `node scripts/selfcheck-ru-b2-block3.mjs --probe <word> ...` — see unit124.js.
//
// THE MEASURED HOLE. u51l2 gives `армия` · `солдат` · `война`, and u92l3 gives
// the MEDIEVAL kit — `меч` · `щит` · `битва` · `осада` · `крепость` · `знамя`.
// Across 2,328 cards there is nothing modern at all: no officer, no rank, no
// regiment, no rifle, no bullet, no shell, no armour, no trench, no retreat and
// no defence. Eighteen of the probed seeds were free.
//
// ═════════════════════════════════════════════════════════════════════════════
// ⚠️ BOUNDARY — FOUR SLOTS IN THIS BAND REACH FOR "THE STATE" AND THE SPLIT IS
// FIXED CENTRALLY. THIS UNIT OWNS THE ARMY AND NOTHING ELSE.
// ═════════════════════════════════════════════════════════════════════════════
//   u102 (block 1)  THE CONSTITUTION AND THE COURTROOM — парламент ·
//                   конституция · кодекс · иск · адвокат · прокурор · указ ·
//                   референдум. `апелляция` is u102's and no other slot's.
//   u129 (here)     THE ARMY — оружие · полк · оборона.
//   u130 (block 3)  THE TREATY — посол · санкция · перемирие.
//   u131 (block 3)  THE CRIME AND THE INVESTIGATION — приговор · следователь ·
//                   улика · допрос. `приговор` and `расследование` are u131's
//                   and no other slot's.
// This unit took nothing from any of the other three, and `перемирие` (a truce,
// the obvious next word after `отступление`) is deliberately left to u130.
//
// ⚠️ `ракета` IS u124l3's AND IS NOT RE-CARDED HERE. Russian uses the one word
// for a space rocket and a missile, and u124's card carries both senses with
// the military one named in its hint. A second card would be the same front
// twice, which `contract.js` rejects outright.
//
// ⚠️ `наступление` WAS REFUSED and it is the natural partner of l4's
// `отступление`. `наступать` IS TAUGHT (u79), so наступление is the derivation
// §D's test refuses every time — the taught verb gives the noun away. The
// asymmetry is deliberate and it is not an oversight: `отступление` stands
// because `отступать` is NOT taught anywhere in 2,328 cards (probed). l4's hint
// on отступление names the offensive in English instead of carding it.
//
// ⚠️ `звание` IS ALLOWED AND IT IS THE CLOSEST CALL IN THE UNIT. `звать` is
// taught (u8l1, "to be called"), and -ние on a taught verb is the shape that
// got `решение` · `знание` · `объяснение` refused at A2 (unit51.js §3). It
// stands on the `звук`/`звучать` precedent that u87 §5 set: the gloss does not
// read off the base, because "a military rank" is not recoverable from "to be
// called" by any learner. If a later seat disagrees, `караул` and `штык` are
// the free replacements — both probed, both dropped for count.
//
// REFUSED, with the reason:
//   `наступление` — above.  `ракета` — above.
//   `мобилизация` — against `мобильный` (u43), and l3's `призыв` already IS
//        the call-up; two words for one idea in one unit.
//   `оружейный` · `военный` · `пленный` — adjectives of a taught or carded noun,
//        and `пленный` ("a prisoner of war") is additionally a substantivised
//        adjective, barred by unit1.js §5 (unit124.js §1's list).
//   `воин` — ALREADY REFUSED AT B1 against `война` (u87 §5's list); the refusal
//        stands and `офицер` carries the field.
//   `защита` — ALREADY REFUSED AT B1 against `защищать` (u59); `оборона` is a
//        different root and is what l4 cards instead.
//   `бомба` · `залп` · `штык` · `погон` · `дозор` · `караул` · `казарма` ·
//        `блиндаж` — all FREE, all dropped for count at 24.
//
// ⚠️ `генерал` AND `танк` ARE GLOSSED THE LONG WAY ROUND. Both transliterate to
// the English word, so "a general" and "a tank" normalise to exactly the card's
// own reading and are free passes under unit1.js §9. Every accept[] entry on the
// two of them avoids the bare English noun — the same trick `царь` uses at u92l1
// and `пилот` at u125l2.
// lang/unit/lesson are stamped in src/data/index.js.
export const RU_UNIT129 = {
  id: "ru-u129",
  lang: "ru",
  title: "Войско и оборона",
  order: 129,
  stage: "b2",
  lessons: [
    {
      id: "ru-u129l1",
      unit: 129,
      lesson: 1,
      title: "Ranks and units",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Say who commands and what they command — an officer, the highest rank, a rank itself, a regiment, a headquarters and the navy.",
      items: [
        { id: "ru-u129l1-ofitser", type: "vocab", front: "офицер", reading: "ofitser", meaning: "an officer", accept: ["a commander of soldiers", "a man who gives orders in an army", "someone who holds a commission"], example: { jp: "Этот офицер работал в армии двадцать лет и знает каждого солдата.", en: "This officer worked in the army for twenty years and knows every soldier." }, drill: { jp: "Этот офицер очень молодой", en: "This officer is very young" }, hint: "a-fi-TSER — stress on the last syllable, and the first о reduces to a. MASCULINE. ⚠️ Said with a hard ц, so the е after it sounds like э: a-fi-TSER, never a-fi-TSYER." },
        { id: "ru-u129l1-general", type: "vocab", front: "генерал", reading: "general", meaning: "the highest army rank", accept: ["the officer who commands an army", "a senior commander", "the top rank an officer can hold"], example: { jp: "Генерал приехал утром, и все офицеры ждали его у штаба.", en: "The commander arrived in the morning, and all the officers were waiting for him by the headquarters." }, drill: { jp: "Этот генерал очень старый", en: "This commander is very old" }, hint: "gi-ni-RAL — stress on the last syllable, and both е reduce to i. MASCULINE. ⚠️ Glossed the long way round on purpose: the word transliterates to the English one, and unit 1 §9 calls a prompt you can read the answer off a free pass rather than a card." },
        { id: "ru-u129l1-zvanie", type: "vocab", front: "звание", reading: "zvanie", meaning: "a military rank", accept: ["an official grade in an army", "the level an officer holds", "a formal title that marks standing"], example: { jp: "Он получил новое звание только через десять лет службы.", en: "He received a new rank only after ten years of service." }, drill: { jp: "Это звание очень высокое", en: "This rank is very high" }, hint: "ZVA-ni-ye — stress on the first syllable. NEUTER (-ие). ⚠️ From `звать` (unit 8), to be called — but nothing in \"to be called\" gives you \"a rank\", which is why the word is carded at all. Also used of honours: звание учителя." },
        { id: "ru-u129l1-polk", type: "vocab", front: "полк", reading: "polk", meaning: "a regiment", accept: ["a large army unit", "a body of about a thousand soldiers", "a standing unit under one commander"], example: { jp: "Этот полк стоял в городе всю зиму, и люди к нему уже привыкли.", en: "This regiment stood in the town all winter, and people had already got used to it." }, drill: { jp: "Этот полк очень большой", en: "This regiment is very large" }, hint: "POLK — one syllable. MASCULINE. ⚠️ Its oblique forms move the stress onto the ending AND the л goes soft: полкА, в полкУ. Do not confuse it with `полка`, a shelf, or with `пол`, the floor, from unit 15." },
        { id: "ru-u129l1-shtab", type: "vocab", front: "штаб", reading: "shtab", meaning: "a headquarters", accept: ["where the commanders work", "the office that runs an army", "the command centre of a force"], example: { jp: "В штабе работали всю ночь, потому что утром нужно было решение.", en: "They worked in the headquarters all night, because a decision was needed in the morning." }, drill: { jp: "Этот штаб совсем новый", en: "This headquarters is quite new" }, hint: "SHTAB — one syllable, and the б is said as a p. MASCULINE. A German loan (Stab). ⚠️ Alive far outside the army: the штаб of an election campaign, of a company, of a building project." },
        { id: "ru-u129l1-flot", type: "vocab", front: "флот", reading: "flot", meaning: "a country's war fleet", accept: ["a country's ships of war", "all the warships of a state", "the sea arm of an army"], example: { jp: "Флот этой страны очень старый, но корабли ещё могут работать.", en: "This country's navy is very old, but the ships can still work." }, drill: { jp: "Этот флот очень большой", en: "This navy is very large" }, hint: "FLOT — one syllable. MASCULINE. ⚠️ Its locative is irregular and stressed on the ending: во флотЕ, like в портУ from unit 125. Also a merchant fleet, and even a company's cars — автомобильный флот." },
      ],
    },
    {
      id: "ru-u129l2",
      unit: 129,
      lesson: 2,
      title: "Weapons",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Name what a modern army fights with — a weapon, a rifle, a machine gun, a bullet, a shell and an armoured vehicle.",
      items: [
        { id: "ru-u129l2-oruzhie", type: "vocab", front: "оружие", reading: "oruzhie", meaning: "a weapon", accept: ["something made for fighting", "arms", "what a soldier fights with"], example: { jp: "Это оружие такое старое, что его можно видеть только в музее.", en: "This weapon is so old that you can only see it in a museum." }, drill: { jp: "Это оружие очень старое", en: "This weapon is very old" }, hint: "a-RU-zhi-ye — stress on RU, and the first о reduces to a. NEUTER (-ие), and ⚠️ IT IS A MASS NOUN: one оружие means arms in general, so «у них есть оружие» covers one rifle or ten thousand. For a single item Russian says единица оружия." },
        { id: "ru-u129l2-vintovka", type: "vocab", front: "винтовка", reading: "vintovka", meaning: "a rifle", accept: ["a long gun a soldier carries", "a shoulder gun with a long barrel", "the standard gun of a foot soldier"], example: { jp: "Винтовка была такая тяжёлая, что молодой солдат нёс её очень медленно.", en: "The rifle was so heavy that the young soldier carried it very slowly." }, drill: { jp: "Эта винтовка очень старая", en: "This rifle is very old" }, hint: "vin-TOV-ka — stress on TOV. FEMININE (-а). From винт, a screw: the spiral cut inside the barrel is what makes it a винтовка and not a smooth-bore gun." },
        { id: "ru-u129l2-pulemyot", type: "vocab", front: "пулемёт", reading: "pulemyot", meaning: "a machine gun", accept: ["a gun that fires without stopping", "a rapid-firing gun", "a gun that keeps shooting by itself"], example: { jp: "Пулемёт стоял на самом высоком месте, и там было видно всё поле.", en: "The machine gun stood at the highest point, and the whole field was visible there." }, drill: { jp: "Этот пулемёт очень тяжёлый", en: "This machine gun is very heavy" }, hint: "pu-li-MYOT — stress on the last syllable, and the first е reduces to i. MASCULINE. ⚠️ A transparent compound: `пуля` from this lesson plus метать, to throw — a bullet-thrower. unit 1 §7 requires the ё, and it DROPS to е when the word inflects: пулемётА." },
        { id: "ru-u129l2-pulya", type: "vocab", front: "пуля", reading: "pulya", meaning: "a bullet", accept: ["the small metal piece a gun fires", "the shot a rifle sends", "what comes out of a gun barrel"], example: { jp: "Пуля прошла через стену и осталась в дереве.", en: "The bullet went through the wall and stayed in the wood." }, drill: { jp: "Эта пуля очень маленькая", en: "This bullet is very small" }, hint: "PU-lya — stress on the first syllable. FEMININE (-я). ⚠️ Alive as a figure of speech for speed: «пулей», like a shot — «он пулей вышел», he was out of there like a bullet." },
        { id: "ru-u129l2-snaryad", type: "vocab", front: "снаряд", reading: "snaryad", meaning: "an artillery shell", accept: ["the big round a big gun fires", "what a cannon sends", "a heavy projectile fired from a gun"], example: { jp: "Снаряд лежал в поле далеко от города, и никто не был ранен.", en: "The shell lay in a field far from the town, and nobody was hurt." }, drill: { jp: "Этот снаряд очень большой", en: "This shell is very large" }, hint: "sna-RYAD — stress on the last syllable, and the д is said as a t. MASCULINE. ⚠️ A SECOND sense you will meet in a gym: a снаряд is also a piece of apparatus — and unit 136's `штанга` is one of them." },
        { id: "ru-u129l2-tank", type: "vocab", front: "танк", reading: "tank", meaning: "an armoured fighting vehicle", accept: ["a tracked war machine", "an armoured vehicle with a gun", "a war machine that runs on tracks"], example: { jp: "Танк шёл по полю так тяжело, что земля под ним становилась мокрой.", en: "The armoured vehicle went across the field so heavily that the ground under it turned wet." }, drill: { jp: "Этот танк очень тяжёлый", en: "This armoured vehicle is very heavy" }, hint: "TANK — one syllable. MASCULINE. ⚠️ Glossed the long way round on purpose: the word transliterates to the English one, and unit 1 §9 calls that a free pass. A storage tank is also a танк in technical Russian, but the everyday word for that is бак." },
      ],
    },
    {
      id: "ru-u129l3",
      unit: 129,
      lesson: 3,
      title: "Cover, ground and the call-up",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Describe how an army protects itself and holds ground — armour, a helmet, a trench, a target, the rear and the call-up.",
      items: [
        { id: "ru-u129l3-bronya", type: "vocab", front: "броня", reading: "bronya", meaning: "armour plate", accept: ["the metal skin of a war machine", "thick steel that stops a bullet", "the plating on a vehicle"], example: { jp: "Броня была такая толстая, что пуля не могла её взять.", en: "The armour was so thick that a bullet could not take it." }, drill: { jp: "Эта броня очень толстая", en: "This armour is very thick" }, hint: "bra-NYA — stress on the LAST syllable, and the о reduces to a. FEMININE (-я). ⚠️ There is a second word брОня, stressed on the first syllable, meaning a reserved place — same letters, different stress, different word, exactly what unit 1 §6 warns about. An animal's natural armour is `панцирь`, from unit 128." },
        { id: "ru-u129l3-kaska", type: "vocab", front: "каска", reading: "kaska", meaning: "a helmet", accept: ["a hard hat that protects the head", "a metal hat a soldier wears", "head protection for work or war"], example: { jp: "Без каски на эту работу никого не пускают.", en: "Nobody is let onto this job without a helmet." }, drill: { jp: "Эта каска очень тяжёлая", en: "This helmet is very heavy" }, hint: "KAS-ka — stress on the first syllable. FEMININE (-а). ⚠️ A builder's hard hat is the same word, which is how you will meet it most often — and u126's `подрядчик` hands them out. A cyclist's helmet is шлем." },
        { id: "ru-u129l3-okop", type: "vocab", front: "окоп", reading: "okop", meaning: "a trench", accept: ["a dug line soldiers fight from", "a ditch dug for cover", "a hole in the ground soldiers hide in"], example: { jp: "Окоп был полный воды, но солдаты сидели в нём всю ночь.", en: "The trench was full of water, but the soldiers sat in it all night." }, drill: { jp: "Этот окоп совсем новый", en: "This trench is quite new" }, hint: "a-KOP — stress on the last syllable, and the first о reduces to a. MASCULINE. From копать, to dig. ⚠️ Not a ditch in the road, which is `яма`: an окоп is dug by soldiers to fight from." },
        { id: "ru-u129l3-mishen", type: "vocab", front: "мишень", reading: "mishen", meaning: "a shooting target", accept: ["what a shooter aims at", "the thing being shot at", "a marked board for practice"], example: { jp: "Мишень стояла так далеко, что её почти не было видно.", en: "The target stood so far away that it was almost invisible." }, drill: { jp: "Эта мишень очень маленькая", en: "This target is very small" }, hint: "mi-SHEN — stress on the last syllable. FEMININE despite the -ь, like every -ень noun, so unit 1 §3 says to name it. ⚠️ Alive in speech: «стать мишенью», to become the target of criticism." },
        { id: "ru-u129l3-tyl", type: "vocab", front: "тыл", reading: "tyl", meaning: "the rear", accept: ["the area behind the fighting", "the home side away from the front", "everything behind the fighting line"], example: { jp: "В тылу работали женщины и дети, потому что мужчины были на войне.", en: "In the rear the women and children worked, because the men were at the war." }, drill: { jp: "Этот тыл очень далеко", en: "This rear area is very far away" }, hint: "TYL — one syllable, with the ы from unit 5. MASCULINE. ⚠️ Its locative is irregular and stressed on the ending: в тылУ, like в портУ from unit 125. «Ударить в тыл» means to strike from behind." },
        { id: "ru-u129l3-prizyv", type: "vocab", front: "призыв", reading: "prizyv", meaning: "the call-up to military service", accept: ["conscription", "being called to serve in the army", "the summons to serve"], example: { jp: "Призыв идёт два раза в год, весной и осенью.", en: "The call-up happens twice a year, in spring and in autumn." }, drill: { jp: "Этот призыв был очень большой", en: "This call-up was very large" }, hint: "pri-ZYV — stress on the last syllable, with the ы from unit 5. MASCULINE. ⚠️ A SECOND, much commoner sense in the news: a призыв is also a public appeal — «призыв к миру», a call for peace." },
      ],
    },
    {
      id: "ru-u129l4",
      unit: 129,
      lesson: 4,
      title: "Friend, foe and the fight",
      cefr: "B2",
      dominantMode: "recall",
      canDo: "Talk about the course of a war — an ally, an enemy, defence, a retreat, reconnaissance and being taken prisoner.",
      items: [
        { id: "ru-u129l4-soyuznik", type: "vocab", front: "союзник", reading: "soyuznik", meaning: "an ally", accept: ["a country that fights on your side", "a partner in a war", "someone who stands with you"], example: { jp: "Этот союзник помогал всю войну и прислал много машин.", en: "This ally helped throughout the war and sent many vehicles." }, drill: { jp: "Этот союзник очень важный", en: "This ally is very important" }, hint: "sa-YUZ-nik — stress on YUZ, and the first о reduces to a. MASCULINE. From союз, a union, which unit 19's conjunction lesson mentions. ⚠️ Used outside war too: союзник in politics or business is anyone on your side." },
        { id: "ru-u129l4-vrag", type: "vocab", front: "враг", reading: "vrag", meaning: "an enemy", accept: ["the side you are fighting", "a foe", "someone who wants to harm you"], example: { jp: "Враг стоял на том берегу реки и ждал темноты.", en: "The enemy stood on the other bank of the river and waited for darkness." }, drill: { jp: "Этот враг очень сильный", en: "This enemy is very strong" }, hint: "VRAG — one syllable, and the г is said as a k. MASCULINE. ⚠️ Its oblique forms move the stress onto the ending: врагА, врагИ. In the singular it often means the whole opposing side, not one person: «враг наступал»." },
        { id: "ru-u129l4-oborona", type: "vocab", front: "оборона", reading: "oborona", meaning: "defence", accept: ["holding ground against an attack", "the work of keeping an enemy out", "standing to protect a place"], example: { jp: "Оборона этого города шла три месяца, и люди были там всё время.", en: "The defence of this city went on three months, and the people were there the whole time." }, drill: { jp: "Эта оборона очень сильная", en: "This defence is very strong" }, hint: "a-ba-RO-na — stress on RO, and both first о reduce to a. FEMININE (-а). ⚠️ `защищать` (unit 59) is to protect a person or a thing; оборона is the military act, and it is the word in «министерство обороны». Nothing to do with `оборот`, a turn, from unit 76." },
        { id: "ru-u129l4-otstuplenie", type: "vocab", front: "отступление", reading: "otstuplenie", meaning: "a retreat", accept: ["falling back from an enemy", "going back under pressure", "a withdrawal from a position"], example: { jp: "Отступление было всю зиму, и дорога была очень трудная.", en: "The retreat went on all winter, and the road was very hard." }, drill: { jp: "Это отступление было очень трудное", en: "This retreat was very hard" }, hint: "at-stup-LE-ni-ye — stress on LE, and the first о reduces to a. NEUTER (-ие). ⚠️ The opposite, наступление (an offensive), is NOT carded: `наступать` is taught at unit 79, so the noun would be the derivation unit 1 §D refuses. A digression in a book is also an отступление." },
        { id: "ru-u129l4-razvedka", type: "vocab", front: "разведка", reading: "razvedka", meaning: "reconnaissance", accept: ["finding out what an enemy is doing", "scouting ahead of an army", "military intelligence work"], example: { jp: "Разведка сказала, что враг уже далеко, и утром это было правда.", en: "Reconnaissance said that the enemy was already far away, and in the morning that was true." }, drill: { jp: "Эта разведка была очень важная", en: "This reconnaissance was very important" }, hint: "raz-VED-ka — stress on VED. FEMININE (-а). ⚠️ Nothing to do with `разве`, really?, from unit 64 — unrelated words that open the same way. The same word is the SERVICE (the intelligence agency) and the ACT, and in geology it is prospecting for ore." },
        { id: "ru-u129l4-plen", type: "vocab", front: "плен", reading: "plen", meaning: "captivity", accept: ["being held by an enemy", "the state of being a prisoner of war", "being taken and held by the other side"], example: { jp: "В плену он был два года, но потом вернулся домой.", en: "He was in captivity for two years, but then came home." }, drill: { jp: "Этот плен был очень долгий", en: "This captivity was very long" }, hint: "PLEN — one syllable. MASCULINE. ⚠️ Its locative is irregular and stressed on the ending: в пленУ, like в портУ from unit 125. The PERSON held is пленный, which this course cannot card: it is a substantivised adjective and unit 1 §5 bars those." },
      ],
    },
  ],
};
