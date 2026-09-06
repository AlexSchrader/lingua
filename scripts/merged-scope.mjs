// Cross-block EXAMPLE scope on the merged tree. RUNBOOK §4: the vocab-scope check
// "goes quiet behind stubs" on a block branch and "can only do its real work at
// merge". Every block gated alone; this is the first time anything has looked at
// all 480 examples with all 480 fronts visible.
const m = await import("file:///c:/dev/lingua-no-drills/src/data/no/index.js");
const U = (m.NO_UNITS ?? Object.values(m).find(Array.isArray)).filter((u) => u.lessons.some((l) => l.items));
const items = U.flatMap((u) => u.lessons.flatMap((l) => (l.items || []).map((i) => ({ ...i, u: u.order, l: l.lesson }))));
const blk = (u) => (u <= 7 ? 1 : u <= 14 ? 2 : 3);

const FREE = new Set("erling kari anna jonas oslo bergen norge europa bokmål kafé kaffe kafeen taxi pizza telefon restaurant museum hotell bank park sjokolade problem person tromsø karl johans".split(" "));
const IRREG = { være: ["er", "var"], ha: ["har", "hadde"], gå: ["går", "gikk"], gi: ["gir", "ga"], se: ["ser", "så"], bo: ["bor", "bodde"], forstå: ["forstår", "forsto"], stå: ["står", "sto"], vite: ["vet", "visste"], få: ["får", "fikk"], si: ["sier", "sa"], ta: ["tar", "tok"], kunne: ["kan", "kunne"], ville: ["vil", "ville"], skulle: ["skal", "skulle"], måtte: ["må", "måtte"], burde: ["bør", "burde"], bli: ["blir", "ble"], gjøre: ["gjør", "gjorde"], sove: ["sover", "sov"], komme: ["kommer", "kom"], sitte: ["sitter", "satt"], ligge: ["ligger", "lå"], velge: ["velger", "valgte"], synes: ["synes"], spørre: ["spør", "spurte"], svare: ["svarer"], hete: ["heter", "het"], le: ["ler", "lo"] };
const IRR_PL = { tann: ["tenner", "tennene"], bok: ["bøker", "bøkene"], hånd: ["hender"], fot: ["føtter"], bror: ["brødre"], søster: ["søstre"], datter: ["døtre"], mann: ["menn", "mennene"], natt: ["netter"], far: ["fedre"], mor: ["mødre"], øye: ["øyne", "øynene"], barn: ["barna"], tre: ["trær", "trærne"], ku: ["kyr"], sko: ["sko"] };
const IRR_CMP = { stor: ["større", "størst"], liten: ["mindre", "minst"], god: ["bedre", "best"], gammel: ["eldre"], ung: ["yngre"], lang: ["lengre"], mange: ["flere"], mye: ["mer", "mest"], vond: ["verre"], lett: ["lettere"], tung: ["tyngre"] };
const IRR_PLONLY = { klær: ["klærne"], penger: ["pengene"], foreldre: ["foreldrene"], sokker: ["sokkene"] };
const IRR_ADJ = { liten: ["lita", "lite", "små", "lille"], gammel: ["gammelt", "gamle"], ny: ["nytt", "nye"], blå: ["blått"], grå: ["grått"], egen: ["eget", "egne"], annen: ["annet", "andre"] };

const born = new Map();
const add = (w, u) => { const p = born.get(w); if (p === undefined || u < p) born.set(w, u); };
for (const i of items) {
  const bare = i.front.replace(/^(en |ei |et |å )/, "").toLowerCase();
  i.front.toLowerCase().split(" ").forEach((w) => add(w, i.u));
  add(bare, i.u);
  if (/^å /.test(i.front)) {
    (IRREG[bare] || []).forEach((f) => add(f, i.u));
    add(bare + "r", i.u); add(bare.replace(/e$/, "er"), i.u);
    add(bare.replace(/e$/, "te"), i.u); add(bare.replace(/e$/, "et"), i.u); add(bare.replace(/e$/, "de"), i.u);
  } else if (/^(en|ei|et) /.test(i.front)) {
    for (const s of ["en", "et", "a", "er", "ene", "ne", "e"]) add(bare + s, i.u);
    for (const s of ["a", "en", "er", "ene"]) add(bare.replace(/e$/, s), i.u);
    add(bare.replace(/el$/, "ler"), i.u);
    add(bare.replace(/e$/, "et"), i.u);   // et hode -> hodet, et yrke -> yrket
    add(bare + "et", i.u); add(bare + "ene", i.u);
    (IRR_PL[bare] || []).forEach((f) => add(f, i.u));
    if (/^[^aeiouyæøå]*[aeiouyæøå][bdfglmnprtk]$/.test(bare)) for (const s of ["et", "en", "er", "a", "ene"]) add(bare + bare.slice(-1) + s, i.u);
  } else {
    for (const s of ["t", "e", "ere", "est", "este", "er", "ene"]) add(bare + s, i.u);
    add(bare.replace(/(nn|mm|ll|tt)$/, (x) => x[0] + "t"), i.u);
    (IRR_ADJ[bare] || []).forEach((f) => add(f, i.u));
    (IRR_CMP[bare] || []).forEach((f) => add(f, i.u));
    (IRR_PLONLY[bare] || []).forEach((f) => add(f, i.u));
  }
}
const hits = [];
for (const i of items)
  for (const w of (i.example.jp.toLowerCase().match(/[a-zæøåéá]+/g) || [])) {
    if (FREE.has(w) || w.length < 2) continue;
    if ([...FREE].some((f) => f.length > 3 && (w === f + "en" || w === f + "et" || w === f + "n" || w === f + "er" || w === f.replace(/e$/, "en")))) continue;
    const at = born.get(w);
    if (at === undefined) hits.push({ kind: "UNTAUGHT", i, w, at: null });
    else if (at > i.u) hits.push({ kind: "FORWARD", i, w, at });
  }
const cross = hits.filter((h) => h.kind === "UNTAUGHT" || blk(h.at) !== blk(h.i.u));
console.log(`examples: ${items.length} · scope hits: ${hits.length} · CROSS-BLOCK or untaught: ${cross.length}\n`);
for (const h of cross) console.log(`  ${h.kind.padEnd(9)} ${h.i.id.padEnd(22)} b${blk(h.i.u)} u${h.i.u}  "${h.w}"${h.at ? ` taught u${h.at} (b${blk(h.at)})` : ""}  «${h.i.example.jp}»`);
const within = hits.filter((h) => !cross.includes(h));
console.log(`\nwithin-block forward refs (each block's own to answer for): ${within.length}`);
for (const h of within.slice(0, 15)) console.log(`  b${blk(h.i.u)} ${h.i.id} "${h.w}" taught u${h.at}`);
