// STRICT vocabulary-scope triage for Portuguese examples — the pt counterpart of
// scripts/scope-strict-de.mjs (German) and scripts/scope-strict.mjs (Norwegian).
//
// WHY IT EXISTS. `check-lang-scope.mjs pt` reports 3,141 teach-before-use hits on
// the pt corpus, and roughly two thirds of them are not defects: that tool is
// language-agnostic and knows Spanish/French/German articles and a blind -s/-es
// plural rule, so every Portuguese conjugation, feminine, -ões plural, clitic
// pronoun and de/em contraction reads to it as an untaught word. A 3,141-line
// report nobody can act on is the same as no report. This script subtracts the
// morphology so the RESIDUE is short enough to read line by line.
//
// It licenses a token only when it can name the taught word it comes from:
//   - the taught fronts, and each word inside a multi-word or hyphenated front
//   - regular -ar/-er/-ir conjugation off a taught infinitive, incl. c/ç, c/qu,
//     g/gu spelling shifts
//   - a hand-written table of the ~30 irregular verbs (ser, estar, ter, ir,
//     fazer, poder, querer, saber, ver, vir, dar, dizer, trazer, pôr, ler …)
//   - regular nominal morphology: plurals (-s, -es, -ões/-ães/-ãos, -ais, -éis,
//     -óis, -is, -ns), feminines (-o→-a, -or→-ora, -ão→-ã), -mente adverbs,
//     -inho/-inha diminutives
//   - enclitic pronouns (queixar-se, mando-te, disse-lhe, destacou-se)
//   - the `// FREE:` declarations, read from the content exactly as
//     check-lang-scope.mjs reads them
//
// It applies NO prefix/edit-distance excuse, so it still OVER-REPORTS — that is
// the point; read every line. Output is split four ways so the reading is cheap:
// ORDER ONLY (the word IS taught in pt, just later — a sequencing defect) versus
// GENUINELY UNTAUGHT (taught nowhere in any form — a real gap), each for the band
// where the word is FIRST used, so a B1 seat is not handed A1's backlog.
//
// NOT WIRED INTO `npm run lint:curriculum` OR CI, deliberately, exactly like the
// de and no equivalents: it over-reports by design and must not fail a build.
//
//   node scripts/scope-strict-pt.mjs            run from the repo root
//   node scripts/scope-strict-pt.mjs <repoRoot> run against another worktree
//
// Baseline at the time it was written (2026-09-15, pt at 2,106 cards / 87 units):
// check-lang-scope.mjs pt reports 3,141 hits; this script's own scan of the same
// examples finds 3,139 (its tokenizer differs on hyphens) and licenses all but
// 833, across 415 distinct tokens. Of those, 111 hits / 72 tokens are FIRST used
// in B1 (u51–87) and hand-classify to 32 genuinely-untaught lemmas; the A1/A2
// half is larger (257 hits / 111 tokens). Both lists are in BUILD-CHECKLIST.md.
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const root = process.argv[2] || join(dirname(fileURLToPath(import.meta.url)), "..");
const langDir = join(root, "src", "data", "pt");
const mod = await import(pathToFileURL(join(langDir, "index.js")).href);
const UNITS = mod.PT_UNITS;

const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const clean = (s) => s.toLowerCase().replace(/['’]/g, "");
const norm = (s) => fold(clean(s));
const toks = (s) =>
  clean(s)
    .replace(/[¿?¡!.,—–"“”:;()«»]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map(fold);

const FREE_RAW = [];
for (const f of readdirSync(langDir).filter((f) => /^unit\d+\.js$/.test(f))) {
  const m = readFileSync(join(langDir, f), "utf8").match(/^\/\/\s*FREE:\s*(.+)$/m);
  if (m) FREE_RAW.push(...m[1].split(/[|,]/).map((s) => s.trim()).filter(Boolean));
}
const FREE = new Set(FREE_RAW.map(norm));

const authored = [...UNITS]
  .filter((u) => (u.lessons ?? []).some((l) => l.items))
  .sort((a, b) => a.order - b.order);

const taught = new Map(); // word -> earliest unit order
const infs = new Map(); // infinitive -> order
for (const u of authored)
  for (const l of u.lessons ?? [])
    for (const it of l.items ?? []) {
      // Split on whitespace ONLY (as check-lang-scope.mjs does), then ALSO add the
      // hyphen parts, so "o porta-voz" licenses both "porta-voz" and "porta"/"voz".
      const ws = norm(it.front).split(/\s+/);
      const art = ws.length > 1 && /^(o|a|os|as|um|uma)$/.test(ws[0]);
      const all = [...ws, ...ws.flatMap((w) => (w.includes("-") ? w.split("-") : []))];
      for (const w of all) if (w && !taught.has(w)) taught.set(w, u.order);
      for (const w of all) {
        if (/(ar|er|ir)$/.test(w) && w.length > 3 && !art && !infs.has(w)) infs.set(w, u.order);
      }
    }

// --- morphology -------------------------------------------------------------
const AR = "o as a amos am ei aste ou aram ava avas avamos avam arei aras ara aremos arao aria arias ariamos ariam e es emos em asse asses assemos assem ar ares armos arem ando ado ada ados adas".split(" ");
const ER = "o es e emos em i este eu eram ia ias iamos iam erei eras era eremos erao eria erias eriamos eriam a as amos am esse esses essemos essem er eres ermos erem endo ido ida idos idas".split(" ");
const IR = "o es e imos em i iste iu iram ia ias iamos iam irei iras ira iremos irao iria irias iriamos iriam a as amos am isse isses issemos issem ir ires irmos irem indo ido ida idos idas".split(" ");
const IRREG = {
  ser: "sou es e somos sao era eras eramos eram fui foste foi fomos foram serei seras sera seremos serao seria seriam seja sejas sejamos sejam fosse fosses fossemos fossem for fores formos forem sendo sido",
  estar: "estou estas esta estamos estao estava estavas estavamos estavam estive estiveste esteve estivemos estiveram estarei estara estaremos estarao estaria estariam esteja estejas estejamos estejam estivesse estivessem estiver estiverem estando estado",
  ter: "tenho tens tem temos teem tinha tinhas tinhamos tinham tive tiveste teve tivemos tiveram terei teras tera teremos terao teria teriam tenha tenhas tenhamos tenham tivesse tivessem tiver tiverem tendo tido",
  haver: "hei has ha havemos hao havia haviam houve houveram havera haveria haja hajam houvesse houvessem houver houverem havendo havido",
  ir: "vou vais vai vamos vao ia ias iamos iam fui foste foi fomos foram irei iras ira iremos irao iria iriam va vas fosse fossem for formos forem indo ido",
  fazer: "faco fazes faz fazemos fazem fazia faziam fiz fizeste fez fizemos fizeram farei fara faremos farao faria fariam faca facas facamos facam fizesse fizessem fizer fizerem fazendo feito feita feitos feitas",
  poder: "posso podes pode podemos podem podia podiam pude pudeste pudemos puderam poderei podera poderemos poderao poderia poderiam possa possas possamos possam pudesse pudessem puder puderem podendo podido",
  querer: "quero queres quer queremos querem queria queriam quis quiseste quisemos quiseram quererei querera quereria quereriam queira queiras queiramos queiram quisesse quisessem quiser quiserem querendo querido",
  saber: "sei sabes sabe sabemos sabem sabia sabiam soube soubeste soubemos souberam saberei sabera saberia saberiam saiba saibas saibamos saibam soubesse soubessem souber souberem sabendo sabido",
  ver: "vejo ves ve vemos veem via viam vi viste viu vimos viram verei vera veremos verao veria veriam veja vejas vejamos vejam visse vissem vir virmos virem vendo visto vista vistos vistas",
  vir: "venho vens vem vimos veem vinha vinham vim vieste veio viemos vieram virei vira viremos virao viria viriam venha venhas venhamos venham viesse viessem vier vierem vindo",
  dar: "dou das da damos dao dava davam dei deste deu demos deram darei dara daremos darao daria dariam de des deem desse dessem der derem dando dado dada dados dadas",
  dizer: "digo dizes diz dizemos dizem dizia diziam disse disseste dissemos disseram direi dira diremos dirao diria diriam diga digas digamos digam dissesse dissessem disser disserem dizendo dito dita ditos ditas",
  trazer: "trago trazes traz trazemos trazem trazia traziam trouxe trouxeste trouxemos trouxeram trarei trara traria trariam traga tragas tragamos tragam trouxesse trouxessem trouxer trouxerem trazendo trazido",
  por: "ponho poes poe pomos poem punha punham pus puseste pos pusemos puseram porei pora poremos porao poria poriam ponha ponhas ponhamos ponham pusesse pusessem puser puserem pondo posto posta postos postas",
  ler: "leio les le lemos leem lia liam li leste leu leram lerei lera leremos lerao leria leriam leia leias leiamos leiam lesse lessem lerem lendo lido",
  perder: "perco perdes perde perdemos perdem perdia perdiam perdi perdeste perdeu perderam perderei perdera perderia perca percas percamos percam perdesse perdessem perder perderem perdendo perdido",
  ouvir: "ouco ouves ouve ouvimos ouvem ouvia ouviam ouvi ouviste ouviu ouviram ouvirei ouvira ouviria ouca oucas oucamos oucam ouvisse ouvissem ouvir ouvirem ouvindo ouvido",
  pedir: "peco pedes pede pedimos pedem pedia pediam pedi pediste pediu pediram pedirei pedira pediria peca pecas pecamos pecam pedisse pedissem pedir pedirem pedindo pedido",
  sair: "saio sais sai saimos saem saia saiam saiste saiu sairam sairei saira sairia saias saiamos saisse saissem sair sairem saindo saido",
  dormir: "durmo dormes dorme dormimos dormem dormia dormiam dormi dormiste dormiu dormiram durma durmas durmamos durmam dormindo dormido",
  sentir: "sinto sentes sente sentimos sentem sentia sentiam senti sentiste sentiu sentiram sinta sintas sintamos sintam sentindo sentido sentida",
  servir: "sirvo serves serve servimos servem servia serviam servi serviste serviu serviram sirva sirvam servindo servido",
  seguir: "sigo segues segue seguimos seguem seguia seguiam segui seguiste seguiu seguiram siga sigas sigamos sigam seguindo seguido",
  conseguir: "consigo consegues consegue conseguimos conseguem conseguia conseguiam consegui conseguiste conseguiu conseguiram consiga consigas consigamos consigam conseguindo conseguido",
  subir: "subo sobes sobe subimos sobem subia subiam subi subiste subiu subiram suba subam subindo subido",
  cair: "caio cais cai caimos caem caia caiam caiste caiu cairam caindo caido",
  crer: "creio cres cre cremos creem cria criam cri creste creu creram creia creiam crendo crido",
  medir: "meco medes mede medimos medem media mediam medi mediste mediu mediram meca mecam medindo medido",
};
const irregForms = new Map();
for (const [inf, s] of Object.entries(IRREG))
  for (const f of s.split(/\s+/)) if (!irregForms.has(f)) irregForms.set(f, inf);

function verbLicensed(w, order) {
  const inf = irregForms.get(w);
  if (inf !== undefined && taught.has(inf) && taught.get(inf) <= order) return "verb(irreg " + inf + ")";
  for (const [i, o] of infs) {
    if (o > order) continue;
    const stem = i.slice(0, -2);
    if (stem.length < 2) continue;
    const set = i.endsWith("ar") ? AR : i.endsWith("er") ? ER : IR;
    if (w.startsWith(stem) && set.includes(w.slice(stem.length))) return "verb(" + i + ")";
    const alt = stem.slice(0, -1);
    if (alt.length >= 2 && w.startsWith(alt)) {
      const s2 = w.slice(alt.length);
      for (const pre of ["qu", "gu", "c", "g", "j"])
        if (s2.startsWith(pre) && set.includes(s2.slice(pre.length))) return "verb(" + i + ",ortho)";
    }
  }
  return null;
}

function nominalLicensed(w, order) {
  const ok = (x) => taught.has(x) && taught.get(x) <= order;
  const c = [];
  if (w.endsWith("s")) {
    c.push([w.slice(0, -1), "plural"]);
    if (w.endsWith("es")) c.push([w.slice(0, -2), "plural-es"]);
    if (w.endsWith("oes") || w.endsWith("aes") || w.endsWith("aos")) c.push([w.slice(0, -3) + "ao", "plural-ao"]);
    if (w.endsWith("ais")) c.push([w.slice(0, -3) + "al", "plural-al"]);
    if (w.endsWith("eis")) c.push([w.slice(0, -3) + "el", "plural-el"]);
    if (w.endsWith("ois")) c.push([w.slice(0, -3) + "ol", "plural-ol"]);
    if (w.endsWith("is")) c.push([w.slice(0, -2) + "il", "plural-il"]);
    if (w.endsWith("ns")) c.push([w.slice(0, -2) + "m", "plural-m"]);
  }
  if (w.endsWith("a")) {
    c.push([w.slice(0, -1) + "o", "feminine"]);
    c.push([w.slice(0, -1), "feminine-cons"]);
    c.push([w.slice(0, -1) + "ao", "feminine-ao"]);
  }
  if (w.endsWith("as")) {
    c.push([w.slice(0, -2) + "o", "fem-plural"]);
    c.push([w.slice(0, -2), "fem-plural-cons"]);
  }
  if (w.endsWith("os")) c.push([w.slice(0, -2) + "o", "masc-plural"]);
  if (w.endsWith("ora")) c.push([w.slice(0, -1), "feminine-or"]);
  if (w.endsWith("oras")) c.push([w.slice(0, -2), "feminine-or"]);
  if (w.endsWith("mente")) {
    c.push([w.slice(0, -5), "adverb"]);
    c.push([w.slice(0, -5) + "o", "adverb"]);
  }
  if (w.endsWith("inho") || w.endsWith("inha")) c.push([w.slice(0, -4) + "o", "diminutive"]);
  for (const [cand, why] of c) if (ok(cand)) return why + "<-" + cand;
  return null;
}

const CLITIC = /-(se|me|te|lhes|lhe|nos|vos|los|las|lo|la|nas|nos|no|na|os|as|o|a)$/;
// Full licensing test at a given unit order. INF = Infinity means "anywhere in pt".
function license(w, order) {
  const d = taught.get(w);
  if (d !== undefined && d <= order) return "taught u" + d;
  const nm = nominalLicensed(w, order);
  if (nm) return nm;
  const vb = verbLicensed(w, order);
  if (vb) return vb;
  if (w.includes("-")) {
    const base = w.replace(CLITIC, "");
    if (base !== w && base.length > 1) {
      const r = license(base, order);
      if (r) return "clitic(" + base + "):" + r;
    }
    for (const p of w.split("-")) {
      if (p.length < 2) continue;
      const r0 = taught.get(p);
      if (r0 !== undefined && r0 <= order) return "hyphen-part(" + p + ") u" + r0;
    }
  }
  return null;
}

const rows = [];
for (const u of authored)
  for (const l of u.lessons ?? [])
    for (const it of l.items ?? []) {
      const jp = it.example?.jp ?? "";
      if (!jp) continue;
      for (const w of toks(jp)) {
        if (FREE.has(w)) continue;
        let free = false;
        for (const f of FREE) {
          const st = f.replace(/[oaei]s?$/, "");
          if (st.length >= 4 && w.startsWith(st) && /^(o|a|os|as|es|s)?$/.test(w.slice(st.length))) {
            free = true;
            break;
          }
        }
        if (free) continue;
        const why = license(w, u.order);
        if (why) continue;
        const later = license(w, Infinity);
        rows.push({ id: it.id, unit: u.order, w, why: null, later, jp });
      }
    }

const residue = rows;
const byWord = new Map();
for (const r of residue) {
  if (!byWord.has(r.w)) byWord.set(r.w, { w: r.w, n: 0, firstUnit: r.unit, later: r.later, ids: [] });
  const e = byWord.get(r.w);
  e.n++;
  e.firstUnit = Math.min(e.firstUnit, r.unit);
  if (e.ids.length < 3) e.ids.push(`${r.id}(u${r.unit})`);
}
const list = [...byWord.values()].sort((a, b) => b.n - a.n);
console.log(`RESIDUE after pt morphology + clitics: ${residue.length} hits / ${list.length} distinct words`);
for (const band of [
  ["B1 (u51-87)", (e) => e.firstUnit >= 51],
  ["A1/A2 (u1-50) — NOT B1's", (e) => e.firstUnit < 51],
]) {
  for (const [label, filt] of [
    ["ORDER ONLY (taught later in pt)", (e) => e.later],
    ["GENUINELY UNTAUGHT (nowhere in pt)", (e) => !e.later],
  ]) {
    const sel = list.filter(band[1]).filter(filt);
    console.log(`\n=== ${band[0]} · ${label}: ${sel.length} distinct, ${sel.reduce((n, e) => n + e.n, 0)} hits ===`);
    for (const e of sel)
      console.log(`${String(e.n).padStart(3)}x  ${e.w.padEnd(18)} ${(e.later || "").padEnd(26)} ${e.ids.join(", ")}`);
  }
}
