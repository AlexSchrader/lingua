// FREQUENCY-GAP probe for Portuguese — which of the commonest words in the
// language does the course teach NOWHERE?
//
// The pt counterpart of scripts/gaps-de.mjs. Same structural argument, so it is
// not repeated at length here: every scope check we own (check-lang-scope.mjs,
// scope-strict-pt.mjs) asks "is this word, in this sentence, taught by now?",
// and that question is answered INSIDE the corpus. It is therefore structurally
// blind to a word that is neither taught NOR written. German's `werden` was the
// case that proved it. Portuguese has the same hole and it is worse: see the
// headline below.
//
// THE LIST — and it is the EUROPEAN one, which is the whole point for pt-PT.
//   scripts/data/pt-freq-opensubtitles-ptPT.tsv, extracted verbatim from
//   https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/Portuguese_wordlist
// That page's own first line reads: "approximately 5,000 most used Português
// (Portugal) words based on the contents of www.opensubtitles.org". Wiktionary
// keeps a SEPARATE Brazilian list at .../BrazilianPortuguese_wordlist, which this
// script deliberately does NOT use — Lingua's pt is pt-PT, and a previous pass
// already shipped Brazilian-flavoured claims that had to be corrected.
// CC BY-SA. Re-extract with `--refetch`.
//
// It is a SURFACE-FORM list (está, estás and estou are three rows), so the script
// resolves each surface form against the corpus through pt morphology before
// calling it a gap.
//
// ⚠️ FOLD COLLISION IS A BIGGER RISK IN PORTUGUESE THAN IN GERMAN, and this is the
// one design difference from gaps-de.mjs. Accent-folding collapses real minimal
// pairs that are different words: só/so, está/esta, dá/da, é/e, há/ha, pôr/por,
// têm/tem, avô/avó, pára/para, às/as. gaps-de folds and moves on, and its own
// header records that taught `schön` made `schon` read as covered. So here the
// HEADLINE uses EXACT (unfolded, lowercased) matching, and anything that matches
// only after folding is reported separately under FOLD COLLISION rather than
// being counted as covered. A fold-only match is evidence of a gap, not of
// coverage.
//
// ⚠️ KNOWN BIAS of the source, declared so it is not discovered later as a
// surprise: subtitles over-represent interjections, forms of address, proper
// nouns and profanity, and this particular list is imperfectly cleaned — it
// contains English left in the subtitles and a few Brazilianisms (`tchau` sits at
// rank ~2010). `--teachable` subtracts the declared STOPLIST below so the
// authoring target is honest; the HEADLINE number stays the raw one, because a
// number you can tune by editing a stoplist is not evidence.
//
// NOT WIRED INTO `npm run lint:curriculum` OR CI, deliberately, exactly like
// gaps-de.mjs and scope-strict-pt.mjs: it over-reports by design and must not
// fail a build.
//
//   node scripts/gaps-pt.mjs                 top 1000 (default)
//   node scripts/gaps-pt.mjs 300 1000 2000   several cut-offs at once
//   node scripts/gaps-pt.mjs --teachable     subtract the stoplist
//   node scripts/gaps-pt.mjs --list 500      print the uncovered words in rank order
//   node scripts/gaps-pt.mjs --selftest      pin the parsing invariants
//   node scripts/gaps-pt.mjs --refetch       re-download the list from Wiktionary
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const DATA = join(root, "scripts/data/pt-freq-opensubtitles-ptPT.tsv");
const SRC =
  "https://en.wiktionary.org/w/index.php?title=Wiktionary:Frequency_lists/Portuguese_wordlist&action=raw";

const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const exact = (s) => s.toLowerCase().replace(/['’]/g, "");

// Subtitle-corpus artefacts: real text, but not curriculum vocabulary. Declared
// here rather than silently dropped, so anyone can disagree with a specific line.
const STOPLIST = new Set([
  // interjections / discourse noise of speech
  "oh", "ah", "eh", "hã", "hein", "ei", "uh", "ooh", "wow", "ha", "hã-hã",
  "ok", "okay", "olá", "ai", "ui", "psiu", "bla",
  // address, titles, given names and surnames that ride in on film dialogue
  "sr", "sra", "srta", "dr", "dra", "mr", "mrs", "miss", "sir", "madame",
  "john", "jack", "tom", "sam", "george", "charlie", "harry", "frank", "joe",
  "michael", "david", "peter", "paul", "james", "dean", "sarah", "jane",
  // profanity / crude register
  "merda", "foda", "fodas", "fode", "cabrão", "caralho", "puta", "putas",
  "cabra", "bosta", "porra", "idiota", "otário",
  // English left in the subtitles
  "the", "you", "and", "what", "yes", "no", "please", "come", "god", "baby",
  "boss", "cool", "yeah", "hello", "sorry", "man", "hey",
  // Brazilianisms in a list that claims to be European
  "tchau", "você's", "cara",
]);

// ---------------------------------------------------------------------------
async function refetch() {
  const res = await fetch(SRC);
  if (!res.ok) throw new Error(`${SRC} -> HTTP ${res.status}`);
  const rows = [];
  // Rows look like:  # <span lang="pt">[[que#Portuguese|que]]</span> 6707718
  const re = /^#\s*<span lang="pt">\[\[[^\]|]*\|([^\]]+)\]\]<\/span>\s*(\d+)\s*$/;
  for (const line of (await res.text()).split(/\r?\n/)) {
    const m = line.match(re);
    if (!m) continue;
    const word = m[1].trim();
    if (!word || !/^[\p{L}'’-]+$/u.test(word)) continue;
    rows.push([rows.length + 1, word, m[2]]);
  }
  if (rows.length < 4000) throw new Error(`only ${rows.length} rows parsed — the wiki table shape changed`);
  mkdirSync(join(root, "scripts/data"), { recursive: true });
  writeFileSync(DATA, rows.map((r) => r.join("\t")).join("\n") + "\n");
  console.log(`refetched ${rows.length} rows -> ${DATA}`);
}

function loadList() {
  // ⚠️ SPLIT ON /\r?\n/ AND TRIM EVERY FIELD, and do not "simplify" this back.
  // The .tsv is committed with LF and git checks it out with CRLF on Windows, so
  // a naive split("\n") leaves a trailing \r on the LAST column. In gaps-de.mjs
  // that silently switched lemma-coverage OFF and produced a wrong headline that
  // survived review because the author's working copy was the LF file they had
  // written by hand while every fresh checkout got CRLF. --selftest pins it.
  const out = [];
  for (const line of readFileSync(DATA, "utf8").split(/\r?\n/)) {
    if (!line.trim()) continue;
    const [rank, word, occ] = line.split("\t").map((s) => (s ?? "").trim());
    out.push({ rank: Number(rank), word, occ: Number(occ) });
  }
  return out.sort((a, b) => a.rank - b.rank);
}

// --- the corpus side --------------------------------------------------------
async function buildTaught() {
  const mod = await import(pathToFileURL(join(root, "src/data/pt/index.js")).href);
  const units = [...mod.PT_UNITS]
    .filter((u) => (u.lessons ?? []).some((l) => l.items))
    .sort((a, b) => a.order - b.order);
  const exactSet = new Map(); // exact lowercase form -> unit order
  const foldSet = new Map(); // folded form -> "unit|original front"
  const infs = new Map(); // infinitive (folded) -> order
  for (const u of units)
    for (const l of u.lessons ?? [])
      for (const it of l.items ?? []) {
        const parts = exact(it.front).split(/[\s-]+/).filter(Boolean);
        for (const p of [exact(it.front), ...parts]) {
          if (!exactSet.has(p)) exactSet.set(p, u.order);
          const f = fold(p);
          if (!foldSet.has(f)) foldSet.set(f, `${u.order}|${p}`);
          if (/(ar|er|ir|or)$/.test(f) && f.length > 3 && !infs.has(f)) infs.set(f, u.order);
        }
      }
  return { units, exactSet, foldSet, infs };
}

// Conservative morphology: enough to stop reporting every conjugated form of a
// taught verb as a gap, deliberately NOT enough to vouch for a word on a guess.
const AR = "o as a amos am ei aste ou ámos aram ava avas ávamos avam arei arás ará aremos arão aria arias aríamos ariam e es emos em asse asses ássemos assem ar ares armos arem ando ado ada ados adas".split(" ");
const ER = "o es e emos em i este eu emos eram ia ias íamos iam erei erás erá eremos erão eria erias eríamos eriam a as amos am esse esses êssemos essem er eres ermos erem endo ido ida idos idas".split(" ");
const IR = "o es e imos em i iste iu iram ia ias íamos iam irei irás irá iremos irão iria irias iríamos iriam a as amos am isse isses íssemos issem ir ires irmos irem indo ido ida idos idas".split(" ");
const IRREG = {
  ser: "sou és é somos são era eras éramos eram fui foste foi fomos foram serei serás será seremos serão seria seriam seja sejas sejamos sejam fosse fossem for formos forem sendo sido",
  estar: "estou estás está estamos estão estava estavas estávamos estavam estive estiveste esteve estivemos estiveram estarei estará estaremos estarão estaria estariam esteja estejam estivesse estivessem estiver estiverem estando estado",
  ter: "tenho tens tem temos têm tinha tinhas tínhamos tinham tive tiveste teve tivemos tiveram terei terás terá teremos terão teria teriam tenha tenhas tenhamos tenham tivesse tivessem tiver tiverem tendo tido",
  ir: "vou vais vai vamos vão ia ias íamos iam fui foste foi fomos foram irei irás irá iremos irão iria iriam vá vás fosse fossem for formos forem indo ido",
  fazer: "faço fazes faz fazemos fazem fazia faziam fiz fizeste fez fizemos fizeram farei fará faremos farão faria fariam faça faças façamos façam fizesse fizessem fizer fizerem fazendo feito feita feitos feitas",
  poder: "posso podes pode podemos podem podia podiam pude pudeste pôde pudemos puderam poderei poderá poderemos poderão poderia poderiam possa possas possamos possam pudesse pudessem puder puderem podendo podido",
  querer: "quero queres quer queremos querem queria queriam quis quiseste quisemos quiseram quererá quereria queira queiras queiramos queiram quisesse quisessem quiser quiserem querendo querido",
  saber: "sei sabes sabe sabemos sabem sabia sabiam soube soubeste soubemos souberam saberei saberá saberia saberiam saiba saibas saibamos saibam soubesse soubessem souber souberem sabendo sabido",
  ver: "vejo vês vê vemos veem via viam vi viste viu vimos viram verei verá veremos verão veria veriam veja vejas vejamos vejam visse vissem vir virmos virem vendo visto vista vistos vistas",
  vir: "venho vens vem vimos vêm vinha vinham vim vieste veio viemos vieram virei virá viremos virão viria viriam venha venhas venhamos venham viesse viessem vier vierem vindo",
  dizer: "digo dizes diz dizemos dizem dizia diziam disse disseste dissemos disseram direi dirá diremos dirão diria diriam diga digas digamos digam dissesse dissessem disser disserem dizendo dito dita ditos ditas",
  dar: "dou dás dá damos dão dava davam dei deste deu demos deram darei dará daremos darão daria dariam dê dês deem desse dessem der derem dando dado dada dados dadas",
  haver: "hei hás há havemos hão havia haviam houve houveram haverá haveria haja hajam houvesse houvessem houver houverem havendo havido",
};
const irregForms = new Map();
for (const [inf, s] of Object.entries(IRREG))
  for (const f of s.split(/\s+/)) if (!irregForms.has(f)) irregForms.set(f, inf);

function derived(word, { exactSet, infs }) {
  const w = exact(word);
  const f = fold(w);
  const inf = irregForms.get(w);
  if (inf && exactSet.has(inf)) return `irreg<-${inf}`;
  for (const [i, _o] of infs) {
    const stem = i.slice(0, -2);
    if (stem.length < 2) continue;
    const set = i.endsWith("ar") ? AR : i.endsWith("er") ? ER : IR;
    if (f.startsWith(stem) && set.map(fold).includes(f.slice(stem.length))) return `verb<-${i}`;
  }
  const cands = [];
  if (f.endsWith("s")) {
    cands.push(f.slice(0, -1));
    if (f.endsWith("es")) cands.push(f.slice(0, -2));
    if (f.endsWith("oes") || f.endsWith("aes")) cands.push(f.slice(0, -3) + "ao");
    if (f.endsWith("ais")) cands.push(f.slice(0, -3) + "al");
    if (f.endsWith("eis")) cands.push(f.slice(0, -3) + "el");
    if (f.endsWith("ns")) cands.push(f.slice(0, -2) + "m");
  }
  if (f.endsWith("a")) cands.push(f.slice(0, -1) + "o");
  if (f.endsWith("as")) cands.push(f.slice(0, -2) + "o");
  if (f.endsWith("os")) cands.push(f.slice(0, -2) + "o");
  if (f.endsWith("mente")) cands.push(f.slice(0, -5), f.slice(0, -5) + "o");
  for (const c of cands) {
    for (const [k] of exactSet) if (fold(k) === c) return `morph<-${k}`;
  }
  return null;
}

// ---------------------------------------------------------------------------
function selftest() {
  let fails = 0;
  const ok = (name, cond) => {
    console.log((cond ? "  ok   " : "  FAIL ") + name);
    if (!cond) fails++;
  };
  // 1. The CRLF invariant — the bug that cost gaps-de a wrong headline.
  const crlf = "1\tque\t10\r\n2\tnão\t9\r\n";
  const parsed = crlf.split(/\r?\n/).filter((l) => l.trim()).map((l) => l.split("\t").map((s) => s.trim()));
  ok("CRLF: last column carries no stray \\r", parsed[0][2] === "10" && parsed[1][1] === "não");
  ok("CRLF: a naive split('\\n') WOULD have broken it", "1\tque\t10\r".split("\t")[2] !== "10");
  // 2. Fold vs exact — the pt-specific design decision.
  ok("fold collapses só/so", fold("só") === fold("so"));
  ok("exact does NOT collapse só/so", exact("só") !== exact("so"));
  ok("fold collapses está/esta", fold("está") === fold("esta"));
  ok("fold collapses avô/avó", fold("avô") === fold("avó"));
  // 3. The data file is present and parses to a plausible size.
  if (existsSync(DATA)) {
    const list = loadList();
    ok(`list parses (${list.length} rows, >= 4000)`, list.length >= 4000);
    ok("rank 1 is a real word", /^[\p{L}]+$/u.test(list[0]?.word ?? ""));
    ok("ranks are dense and ascending", list.every((r, i) => r.rank === i + 1));
  } else {
    ok("data file present (run --refetch)", false);
  }
  console.log(fails ? `\nSELFTEST FAILED (${fails})` : "\nSELFTEST OK");
  process.exit(fails ? 1 : 0);
}

// ---------------------------------------------------------------------------
const argv = process.argv.slice(2);
if (argv.includes("--refetch")) {
  await refetch();
  if (argv.length === 1) process.exit(0);
}
if (argv.includes("--selftest")) selftest();

const teachableOnly = argv.includes("--teachable");
const listAt = argv.includes("--list") ? Number(argv[argv.indexOf("--list") + 1]) : 0;
const nums = argv.filter((a) => /^\d+$/.test(a)).map(Number).filter((n) => n !== listAt);
const cuts = nums.length ? nums : [1000];

const list = loadList();
const scope = await buildTaught();
console.log(
  `pt corpus: ${scope.units.length} authored units · ${scope.exactSet.size} distinct taught forms (fronts + their words)`,
);
console.log(`frequency list: ${list.length} European-Portuguese surface forms (opensubtitles via Wiktionary)\n`);

const verdict = new Map(); // word -> {rank, state, why}
for (const r of list) {
  const w = exact(r.word);
  if (scope.exactSet.has(w)) {
    verdict.set(r.word, { ...r, state: "taught", why: "u" + scope.exactSet.get(w) });
    continue;
  }
  const d = derived(r.word, scope);
  if (d) {
    verdict.set(r.word, { ...r, state: "derived", why: d });
    continue;
  }
  const f = scope.foldSet.get(fold(w));
  if (f) {
    verdict.set(r.word, { ...r, state: "foldonly", why: f });
    continue;
  }
  verdict.set(r.word, { ...r, state: "gap", why: null });
}

for (const cut of cuts.sort((a, b) => a - b)) {
  const rows = [...verdict.values()].filter((v) => v.rank <= cut);
  const sel = teachableOnly ? rows.filter((v) => !STOPLIST.has(exact(v.word))) : rows;
  const n = (s) => sel.filter((v) => v.state === s).length;
  const gaps = n("gap");
  const fo = n("foldonly");
  console.log(
    `TOP ${String(cut).padEnd(5)} ${teachableOnly ? "(teachable) " : ""}` +
      `taught ${String(n("taught")).padStart(4)} · derived ${String(n("derived")).padStart(4)} · ` +
      `FOLD-ONLY ${String(fo).padStart(3)} · GAP ${String(gaps).padStart(4)} ` +
      `-> ${((gaps + fo) / sel.length * 100).toFixed(1)}% of the commonest ${sel.length} words have no card`,
  );
}

if (listAt) {
  for (const [label, st] of [["GAP — no card anywhere, in any form", "gap"], ["FOLD-ONLY — matches a taught front only after stripping accents (a different word)", "foldonly"]]) {
    const sel = [...verdict.values()]
      .filter((v) => v.rank <= listAt && v.state === st)
      .filter((v) => !teachableOnly || !STOPLIST.has(exact(v.word)));
    console.log(`\n=== ${label}: ${sel.length} in the top ${listAt} ===`);
    for (const v of sel)
      console.log(`${String(v.rank).padStart(5)}  ${v.word.padEnd(20)} ${v.why ? "(" + v.why + ")" : ""}`);
  }
}
