// PROVES A BUILD CARRIES THE RIGHT STUDYBOT, by reading what was actually emitted.
//
//   node scripts/check-no-studybot.mjs              checks dist/ (production): NO hook
//   node scripts/check-no-studybot.mjs --studybot   checks dist-studybot/: hook present,
//                                                   and no Supabase key from .env*.
//
// Why read the files: the flag (src/studybot/flag.js) only stays out of production
// if Vite folds it to `false` and drops the hook chunk. A refactor that read the
// flag at runtime would still "work" and would ship window.StudyBot to every
// learner. Nothing but the emitted bundle can say which happened.
//
// Limits: it searches for marker strings, so a hook renamed without updating
// MARKERS below would slip past. Unknown arguments exit 2 rather than default.
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
for (const a of args) {
  if (a !== "--studybot") {
    console.error(`check-no-studybot: unknown argument "${a}" (only --studybot)`);
    process.exit(2);
  }
}
const studybot = args.includes("--studybot");
const dir = path.resolve(studybot ? "dist-studybot" : "dist");

// Strings that exist only in StudyBot code: the global's name, the text tutor's
// endpoint, and the two secrets' header/parameter names it may send.
const MARKERS = ["StudyBot", "/api/tutor-text", "x-vercel-protection-bypass", "x-tutor-token"];

if (!fs.existsSync(dir)) {
  console.error(`check-no-studybot: ${path.relative(process.cwd(), dir)}/ does not exist — build it first (${studybot ? "npm run build:studybot" : "npm run build"}).`);
  process.exit(1);
}

function* files(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) yield* files(p);
    else if (/\.(js|mjs|html|json|webmanifest|css)$/.test(e.name)) yield p;
  }
}

const hits = new Map(); // marker -> [file]
let scanned = 0;
const texts = [];
for (const f of files(dir)) {
  const text = fs.readFileSync(f, "utf8");
  texts.push([f, text]);
  scanned++;
  for (const m of MARKERS) if (text.includes(m)) hits.set(m, [...(hits.get(m) ?? []), path.relative(dir, f)]);
}

let failed = false;
if (!studybot) {
  for (const [m, fl] of hits) {
    console.error(`FAIL: production build contains "${m}" in ${fl.join(", ")}`);
    failed = true;
  }
  if (!failed) console.log(`check-no-studybot: OK — ${scanned} files in dist/, no StudyBot marker.`);
} else {
  if (!hits.has("StudyBot")) {
    console.error("FAIL: dist-studybot/ has no StudyBot hook — was it built with --mode studybot?");
    failed = true;
  }
  // No account can load: the Supabase keys from any local .env file must be absent.
  const secrets = [];
  for (const envFile of fs.readdirSync(process.cwd()).filter((n) => n.startsWith(".env"))) {
    for (const line of fs.readFileSync(envFile, "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*(VITE_SUPABASE_URL|VITE_SUPABASE_ANON_KEY)\s*=\s*(.+?)\s*$/);
      if (m && m[2].replace(/^["']|["']$/g, "").length > 8) secrets.push([m[1], m[2].replace(/^["']|["']$/g, "")]);
    }
  }
  for (const [name, value] of secrets) {
    for (const [f, text] of texts) {
      if (text.includes(value)) {
        console.error(`FAIL: dist-studybot/ contains ${name} (in ${path.relative(dir, f)}) — accounts must be impossible in this build.`);
        failed = true;
      }
    }
  }
  if (!failed) console.log(`check-no-studybot --studybot: OK — hook present, ${secrets.length} Supabase setting(s) checked absent, ${scanned} files.`);
}
process.exit(failed ? 1 : 0);
