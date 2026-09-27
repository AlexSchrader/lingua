// RUSSIAN example/drill vocabulary scope — the check no gate runs.
//
// WHY THIS FILE EXISTS. `src/data/lint.js` gates example scope behind
// `isLatinLang()`, which requires >50% Latin fronts. Every Russian front is
// Cyrillic, so `exampleScopeWarnings` returns SILENTLY for ru: the rule RUNBOOK
// §4 calls "the one most likely to bite you in block 2 or 3" is unchecked for
// this language. Nothing will catch a seat that uses a word before it is taught.
//
// HOW IT CHECKS. Russian inflects far too heavily for the exact-string match
// lint uses (вода/воды/воду, говорить/говорю/говорит), so every taught front
// contributes a STEM — the front with its inflecting tail stripped — and a token
// is in scope when it starts with a stem taught at or before its unit. That
// over-accepts (a 3-letter stem matches a lot) and under-reports rather than
// crying wolf; it is a review list, not a gate.
//
// ESCAPE HATCH. A unit file may declare words it deliberately uses without
// teaching them — proper nouns, and the handful of function words a natural
// sentence cannot avoid — with a line of the form
//     // FREE: по-русски | каждый | старый
// A FREE word is in scope for that unit and every later one, exactly like a
// taught front. Declaring one is a CLAIM: it means "a learner meets this word in
// a sentence and is never asked to produce it."
//
//   node scripts/scope-ru.mjs          every authored ru unit
//   node scripts/scope-ru.mjs 7,8,9,10 only those units
import { readFileSync } from "node:fs";
import { RU_UNITS } from "../src/data/ru/index.js";

// Longest-first so "ами" is tried before "а". Three passes, and never strip
// below 3 characters — a 2-letter stem matches half the language.
const TAIL =
  /(ами|ями|ого|его|ому|ему|ыми|ими|ешь|ёшь|ите|ете|ёте|ая|яя|ое|ее|ой|ей|ый|ий|ую|юю|ам|ям|ах|ях|ов|ев|ые|ие|ем|ём|им|ут|ют|ат|ят|ла|ло|ли|ть|ти|шь|а|я|о|е|ы|и|у|ю|й|ь)$/;
const norm = (w) => String(w).toLowerCase().replace(/ё/g, "е");
function stem(word) {
  let s = norm(word);
  for (let i = 0; i < 3; i++) {
    const next = s.replace(TAIL, "");
    if (next === s || next.length < 3) break;
    s = next;
  }
  return s.length >= 3 ? s : norm(word);
}

// IRREGULAR PARADIGMS — the forms a suffix-stripper cannot reach from the front.
// Each key is a taught front; its values are surfaces that belong to that same
// lexeme and are therefore in scope wherever the front is. Russian pronouns
// change root outright (я → меня/мне/мной) and several core verbs mutate their
// stem (хотеть → хочу, видеть → вижу), so without this table every correct
// sentence in the corpus reads as a scope violation.
const PARADIGM = {
  я: ["меня", "мне", "мной"],
  ты: ["тебя", "тебе", "тобой"],
  он: ["его", "ему", "им", "нём", "него", "нему"],
  она: ["её", "ей", "неё", "ней"],
  мы: ["нас", "нам", "нами"],
  вы: ["вас", "вам", "вами"],
  хотеть: ["хочу", "хочешь", "хочет", "хотим", "хотите", "хотят"],
  видеть: ["вижу", "видишь", "видит", "видим", "видите", "видят"],
  жить: ["живу", "живёшь", "живет", "живём", "живете", "живут"],
  любить: ["люблю", "любишь", "любит", "любим", "любите", "любят"],
  писать: ["пишу", "пишешь", "пишет", "пишем", "пишете", "пишут"],
  звать: ["зовут", "зову", "зовёшь", "зовём"],
  год: ["лет", "года", "году", "годы"],
  чай: ["чая", "чаю", "чаем"],
  ребёнок: ["дети", "детей", "детям"],
  мать: ["матери", "матерью"],
  дочь: ["дочери", "дочерью"],
  это: ["эта", "этот", "эти", "этом", "этой", "эту", "этого", "этому"],
  мой: ["моего", "моему", "моём", "мои", "моих", "моим"],
  моя: ["моей", "мою"],
  твой: ["твоего", "твоему", "твоём", "твои", "твоих"],
};

const items = [];
for (const u of RU_UNITS)
  for (const l of u.lessons ?? [])
    for (const it of l.items ?? []) items.push({ ...it, u: u.order, l: l.lesson });

// stem → earliest unit teaching it; and the exact surface of every front.
const born = new Map();
const exact = new Map();
const remember = (map, key, unit) => {
  const prev = map.get(key);
  if (prev === undefined || unit < prev) map.set(key, unit);
};
for (const it of items) {
  if (typeof it.front !== "string") continue;
  // A hyphenated front (по-русски) is ONE token in a sentence, so register the
  // whole string as well as its pieces — otherwise the card's own example flags.
  remember(exact, norm(it.front), it.u);
  for (const piece of norm(it.front).split(/[\s-]+/).filter(Boolean)) {
    remember(exact, piece, it.u);
    remember(born, stem(piece), it.u);
    for (const form of PARADIGM[piece] ?? []) remember(exact, norm(form), it.u);
  }
}

// FREE declarations, parsed out of the unit files.
const free = new Map(); // unit order → Set(word)
for (const u of RU_UNITS) {
  let src = "";
  try {
    src = readFileSync(`src/data/ru/unit${u.order}.js`, "utf8");
  } catch {
    continue;
  }
  const set = new Set();
  for (const m of src.matchAll(/^\/\/\s*FREE:\s*(.+)$/gm))
    m[1].split("|").map((s) => s.trim()).filter(Boolean).forEach((w) => set.add(norm(w)));
  if (set.size) free.set(u.order, set);
}

const tokenize = (s) => String(s ?? "").split(/[^\p{L}-]+/u).filter(Boolean);
const only = process.argv[2] ? new Set(process.argv[2].split(",").map(Number)) : null;

let checked = 0;
let flagged = 0;
for (const it of items) {
  if (only && !only.has(it.u)) continue;
  // A FREE word inflects like any other, so it contributes its STEM too — a
  // declared `старый` covers старая, старое, старую without twelve entries.
  const allowed = new Set();
  const allowedStems = new Set();
  for (const [order, words] of free)
    if (order <= it.u)
      for (const w of words) {
        allowed.add(w);
        allowedStems.add(stem(w));
      }
  for (const [kind, text] of [
    ["example", it.example?.jp],
    ["drill", it.drill?.jp],
  ]) {
    if (!text) continue;
    checked += 1;
    const miss = [];
    for (const raw of tokenize(text)) {
      const n = norm(raw);
      if (allowed.has(n)) continue;
      const e = exact.get(n);
      if (e !== undefined && e <= it.u) continue;
      const s = stem(n);
      let ok = false;
      for (const as of allowedStems) if (as.length >= 3 && (s === as || n.startsWith(as))) { ok = true; break; }
      if (ok) continue;
      for (const [bornStem, bornUnit] of born) {
        if (bornUnit <= it.u && bornStem.length >= 3 && (s === bornStem || n.startsWith(bornStem))) {
          ok = true;
          break;
        }
      }
      if (!ok) miss.push(raw);
    }
    if (miss.length) {
      flagged += 1;
      console.log(`u${it.u}l${it.l} ${it.id} ${kind}: ${[...new Set(miss)].join(", ")}   « ${text}`);
    }
  }
}
console.log(`\n${checked} sentence(s) checked · ${flagged} carrying an out-of-scope token`);
