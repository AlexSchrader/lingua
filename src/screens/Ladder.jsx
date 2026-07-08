import { useState } from "react";
import { Lock, Check, ChevronRight, Volume2 } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { LANGUAGES, UNITS } from "../data/index.js";
import { roadmapFor } from "../data/roadmap.js";
import { KANJI_CATEGORIES, categoryOf } from "../data/ja/kanjiCategories.js";
import { masteryPct, isMastered } from "../store/mastery.js";
import { useItemAudio } from "../store/itemAudio.js";
import { AUDIO_IDS } from "../data/audioManifest.js";
import GlyphDetail from "../components/GlyphDetail.jsx";
import { C, F } from "../theme.js";

// A tap-to-hear speaker for a learned item, reused by the kana/kanji chips and
// the word-bank rows. Manual play only (autoplay:false) — the Ladder shows many
// items at once, so an on-mount autoplay would blast every visible clip. Only
// render this where a clip actually exists (AUDIO_IDS) and the item is unlocked.
// `floating` overlays it in a chip's top-right corner; inline is the default.
function SpeakerButton({ item, floating = false, size = 22 }) {
  const { play, active } = useItemAudio(item, { autoplay: false });
  return (
    <button
      onClick={(e) => { e.stopPropagation(); play(); }}
      aria-label={`Play pronunciation of ${item.front}`}
      style={{
        ...(floating ? { position: "absolute", top: 4, right: 4, zIndex: 1 } : {}),
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        border: `1px solid ${active ? C.ai : C.line}`,
        background: active ? C.ai : C.washi,
        color: active ? "#fff" : C.ai,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        padding: 0,
        transition: "background 150ms, border-color 150ms",
      }}
    >
      <Volume2 size={Math.round(size * 0.6)} />
    </button>
  );
}

// Stage sectioning for the Units list. `stage` lives on each unit (and roadmap
// entry); these drive the section headers in climb order. The JLPT tag is shown
// only for the Japanese track — Latin-alphabet languages get plain CEFR labels
// and simply render no Pre-A1 group (they have no pre-a1 units).
const STAGE_ORDER = ["pre-a1", "a1", "a2", "b1", "b2"];
const STAGE_LABEL = { "pre-a1": "Pre-A1", a1: "A1", a2: "A2", b1: "B1", b2: "B2" };
const JLPT_BY_STAGE = { ja: { a1: "N5", a2: "N4", b1: "N3", b2: "N2" } };

function stageHeading(langId, stage) {
  const label = STAGE_LABEL[stage] ?? stage;
  const jlpt = JLPT_BY_STAGE[langId]?.[stage];
  return jlpt ? `${label} · ${jlpt}` : label;
}

// Authored item defs for a language, in lesson order (gojūon for kana).
function defsFor(langId, predicate = () => true) {
  return UNITS.filter((u) => u.lang === langId)
    .flatMap((u) => u.lessons.filter((l) => Array.isArray(l.items)).flatMap((l) => l.items))
    .filter(predicate);
}

// Progress within a CEFR stage: fraction of that stage's unit items at rung ≥ 1.
// Stages are unit-level (`u.stage`), so a stage spans whole units (the kana
// foundation is "pre-a1"; the first thematic vocab units are "a1"). Returns
// totals so the spine can show "you're here / done / coming" honestly.
function stageStats(langId, stage, items) {
  const defs = UNITS.filter((u) => u.lang === langId && (u.stage ?? "a1") === stage)
    .flatMap((u) => u.lessons.filter((l) => Array.isArray(l.items)).flatMap((l) => l.items));
  const total = defs.length;
  const done = defs.filter((def) => (items[def.id]?.rung ?? 0) >= 1).length;
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0, complete: total > 0 && done === total };
}

const hasContent = (id) => UNITS.some((u) => u.lang === id);

export default function Ladder() {
  const languages = useStore((s) => s.languages);
  const items = useStore((s) => s.items);
  const showRomaji = useStore((s) => s.settings?.showRomaji ?? true);
  const profile = useStore((s) => s.profile);
  const startLanguage = useStore((s) => s.startLanguage);
  const setActiveLang = useStore((s) => s.setActiveLang);
  const canAdd = useStore((s) => s.canAddLanguage)();

  const langData = (id) => ({ ...LANGUAGES.find((l) => l.id === id), ...(languages[id] ?? {}) });
  // Started = the languages the learner chose (falls back to ja for safety).
  const started = profile.languages?.length ? profile.languages : ["ja"];
  const activeId = profile.activeLang && started.includes(profile.activeLang) ? profile.activeLang : started[0];
  const active = langData(activeId);
  const notStarted = LANGUAGES.filter((l) => !started.includes(l.id));

  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700 }}>Ladder</div>
        <div style={{ fontSize: 13, color: C.inkSoft }}>Your whole climb — what's done, what's next.</div>
      </div>

      {/* Switch focus among started languages */}
      {started.length > 1 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {started.map((id) => {
            const l = langData(id);
            const on = id === activeId;
            return (
              <button
                key={id}
                onClick={() => setActiveLang(id)}
                style={{ padding: "7px 12px", borderRadius: 999, border: `1.5px solid ${on ? C.ai : C.line}`, background: on ? C.aiSoft : C.surface, color: on ? C.aiDeep : C.inkSoft, fontSize: 13, fontWeight: 700, fontFamily: F.body, cursor: "pointer", whiteSpace: "nowrap" }}
              >
                {l.flag} {l.name}
              </button>
            );
          })}
        </div>
      )}

      <ActiveLanguage lang={active} items={items} />
      <KanaSection langId={active.id} items={items} showRomaji={showRomaji} />
      <YoonSection langId={active.id} items={items} showRomaji={showRomaji} />
      <KanjiSection langId={active.id} items={items} showRomaji={showRomaji} />
      <WordBankSection langId={active.id} items={items} showRomaji={showRomaji} />
      <UnitsSection langId={active.id} items={items} />

      {notStarted.length > 0 && (
        <Section title="Add a language">
          <div style={{ fontSize: 12, color: C.inkSoft, marginBottom: 12 }}>
            {canAdd
              ? "You've reached A1 — start another whenever you like. One at a time."
              : `Reach A1 in ${active.name} to unlock another language.`}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {notStarted.map((l) => (
              <AddLangRow key={l.id} lang={l} canAdd={canAdd} onStart={() => startLanguage(l.id)} />
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}

// --- Active language: CEFR ladder (the spine) -------------------------------

function ActiveLanguage({ lang, items }) {
  // The spine is the CEFR stages up to the goal, INCLUDING Pre-A1 — the kana
  // foundation is a real stage you climb before A1, not A1 itself. Stages are
  // unit-level, so "you're here" is derived from actual progress (the first
  // stage that isn't fully complete), not a stored level that never advances.
  const targetStageIdx = Math.max(0, STAGE_ORDER.indexOf((lang.target ?? "B2").toLowerCase()));
  const stages = STAGE_ORDER.slice(0, targetStageIdx + 1);
  const statsByStage = Object.fromEntries(stages.map((s) => [s, stageStats(lang.id, s, items)]));
  // Current stage = first one not yet complete (or the goal, if all are done).
  const currentStage = stages.find((s) => !statsByStage[s].complete) ?? stages[stages.length - 1];
  const cur = statsByStage[currentStage];

  // "You're here" shows position within the CURRENT stage: which unit of the
  // stage's units, and which lesson of the stage's total lessons —
  // "U:1/7 L:1/36". First lesson (in order) still holding an unlearned item.
  const hereLabel = (() => {
    const stageUnits = UNITS.filter((u) => u.lang === lang.id && (u.stage ?? "a1") === currentStage)
      .slice()
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    const totalUnits = stageUnits.length;
    const totalLessons = stageUnits.reduce((n, u) => n + u.lessons.filter((l) => Array.isArray(l.items)).length, 0);
    let before = 0;
    for (let ui = 0; ui < stageUnits.length; ui++) {
      const uLessons = stageUnits[ui].lessons.filter((l) => Array.isArray(l.items));
      for (let li = 0; li < uLessons.length; li++) {
        if (uLessons[li].items.some((def) => (items[def.id]?.rung ?? 0) < 1)) {
          return `U:${ui + 1}/${totalUnits} L:${before + li + 1}/${totalLessons}`;
        }
      }
      before += uLessons.length;
    }
    return "you're here";
  })();

  return (
    <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 18, padding: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ fontSize: 34 }}>{lang.flag}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: F.disp, fontSize: 18, fontWeight: 700 }}>{lang.name}</div>
          <div style={{ fontSize: 12, color: C.inkSoft }}>
            {lang.level === "pre-A1" ? "Starting out" : lang.level} → {lang.target} goal
          </div>
        </div>
      </div>

      {/* CEFR rungs (goal at top) on the left; Lingua stands big on the right.
          The mascot is ADAPTIVE: clamp() scales it with viewport width (no fixed
          px), and the rung block centers vertically so it stays tidy. The
          current-level progress bar lives full-width BELOW, under the mascot. */}
      <div style={{ marginTop: 14, display: "flex", gap: 10, alignItems: "stretch" }}>
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {[...stages].reverse().map((stage, i, arr) => (
            <CefrRung
              key={stage}
              level={STAGE_LABEL[stage] ?? stage}
              done={statsByStage[stage].complete}
              current={stage === currentStage}
              here={hereLabel}
              first={i === 0}
              last={i === arr.length - 1}
            />
          ))}
        </div>
        <div style={{ flexShrink: 0, display: "flex", alignItems: "flex-end" }}>
          <img
            src="/mascot/lingua-proud.png"
            alt=""
            aria-hidden
            style={{ width: "clamp(120px, 30vw, 220px)", height: "auto", objectFit: "contain", objectPosition: "bottom" }}
          />
        </div>
      </div>

      {/* Current-stage progress — full width, below the mascot. */}
      {cur.total > 0 ? (
        <div style={{ marginTop: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, marginBottom: 6 }}>
            <span style={{ fontWeight: 700, color: C.ink }}>{stageHeading(lang.id, currentStage)} progress</span>
            <span style={{ fontWeight: 700, color: C.ai }}>{cur.pct}%</span>
          </div>
          <div style={{ height: 10, borderRadius: 999, background: C.lockedBg, overflow: "hidden" }}>
            <div style={{ width: `${cur.pct}%`, height: "100%", background: C.ai, transition: "width 250ms ease" }} />
          </div>
        </div>
      ) : (
        <div style={{ marginTop: 12, fontSize: 12, color: C.inkSoft }}>Lessons for {STAGE_LABEL[currentStage] ?? currentStage} coming soon.</div>
      )}
    </div>
  );
}

function CefrRung({ level, done, current, here, first, last }) {
  const color = done ? C.matcha : current ? C.ai : C.locked;
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {/* rail + node */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 22 }}>
        <div style={{ width: 2, flex: 1, background: first ? "transparent" : C.line }} />
        <div
          style={{
            width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
            background: done ? C.matcha : current ? C.ai : C.lockedBg,
            border: `2px solid ${color}`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          {done && <Check size={9} color="#fff" />}
        </div>
        <div style={{ width: 2, flex: 1, background: last ? "transparent" : C.line }} />
      </div>
      {/* label + state */}
      <div style={{ flex: 1, padding: "8px 0", minWidth: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontWeight: current ? 700 : 600, fontSize: 15, color: current || done ? C.ink : C.inkSoft }}>
          {level}
          {current && <span style={{ fontSize: 11, fontWeight: 600, color: C.ai, marginLeft: 8 }}>{here ?? "you're here"}</span>}
        </span>
        {done && <span style={{ fontSize: 11, fontWeight: 700, color: C.matcha }}>Done</span>}
      </div>
    </div>
  );
}

// --- Writing-system section -------------------------------------------------

// Classify a kana by script + voicing, content-agnostically. NFD decomposition
// exposes a combining dakuten (゛U+3099) or handakuten (゜U+309A) on voiced kana
// (が = か + ゛), so base vs voiced is detected, never hardcoded — and katakana
// vs hiragana is just the codepoint block. New rows (katakana dakuten, combos)
// slot into the right group automatically as they ship.
function kanaGroupOf(char) {
  const voiced = /[゙゚]/.test(char.normalize("NFD"));
  const cp = char.codePointAt(0);
  const katakana = cp >= 0x30a0 && cp <= 0x30ff;
  if (katakana) return voiced ? "kata-voiced" : "kata";
  return voiced ? "hira-voiced" : "hira";
}

// The voiced rows carry their real names: the ゛dashes are "dakuten" (が/ざ/だ/ば),
// the ゜circle is "handakuten" (ぱ). Showing the terms teaches them, instead of
// the bare marks reading as just "lines and a circle".
const KANA_GROUPS = [
  { key: "hira", label: "Hiragana" },
  { key: "hira-voiced", label: "Hiragana dakuten/handakuten" },
  { key: "kata", label: "Katakana" },
  { key: "kata-voiced", label: "Katakana dakuten/handakuten" },
];

// Lay kana out as the gojūon table: 5 columns (a/i/u/e/o), one row per sound
// group (か-row separate from あ-row), aligned by vowel so や・ゆ・よ and わ・を sit
// in their real columns with gaps. ん stands on its own row. Driven by the reading
// (data is already in gojūon order), so dakuten rows and katakana fall out for free.
const VOWEL_COL = { a: 0, i: 1, u: 2, e: 3, o: 4 };
function vowelCol(reading) {
  if (!reading || reading === "n") return null; // ん / ン: no vowel column
  return VOWEL_COL[reading[reading.length - 1]] ?? null;
}
function gojuonRows(defs) {
  const rows = [];
  let row = [null, null, null, null, null];
  let started = false;
  let prevCol = -1;
  const flush = () => { if (started) { rows.push(row); row = [null, null, null, null, null]; started = false; prevCol = -1; } };
  for (const d of defs) {
    const col = vowelCol(d.reading);
    if (col === null) { flush(); rows.push([d, null, null, null, null]); continue; } // ん alone
    if (started && col <= prevCol) flush(); // vowel didn't advance → new sound group
    row[col] = d;
    started = true;
    prevCol = col;
  }
  flush();
  return rows;
}

function GojuonGrid({ defs, items, showRomaji }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {gojuonRows(defs).map((row, ri) => (
        <div key={ri} style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6 }}>
          {row.map((d, ci) => (d ? <KanaChip key={d.id} char={d.front} reading={d.reading} item={items[d.id]} showRomaji={showRomaji} /> : <div key={ci} />))}
        </div>
      ))}
    </div>
  );
}

function KanaSection({ langId, items, showRomaji }) {
  // Single-glyph kana only — yōon digraphs (きょ…) get their own section below.
  const kanaDefs = defsFor(langId, (d) => d.type === "kana" && [...d.front].length === 1);
  if (kanaDefs.length === 0) return null;
  const groups = KANA_GROUPS
    .map((g) => ({ ...g, defs: kanaDefs.filter((d) => kanaGroupOf(d.front) === g.key) }))
    .filter((g) => g.defs.length > 0);
  const learnedTotal = kanaDefs.filter((d) => (items[d.id]?.rung ?? 0) >= 1).length;

  return (
    <Section title="Writing system" collapsible defaultOpen={false} summary={`${learnedTotal}/${kanaDefs.length} kana`}>
      <div style={{ fontSize: 12, color: C.inkSoft, marginBottom: 14 }}>
        The bar under each character fills as you review it over time.
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {groups.map((g) => {
          const learned = g.defs.filter((d) => (items[d.id]?.rung ?? 0) >= 1).length;
          const mastered = g.defs.filter((d) => isMastered(items[d.id])).length;
          return (
            <div key={g.key} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 0.6, color: C.ai, textTransform: "uppercase" }}>
                  {g.label}
                </span>
                <div style={{ flex: 1, height: 1, background: C.line }} />
                <span style={{ fontSize: 11, color: C.inkSoft, whiteSpace: "nowrap", flexShrink: 0 }}>
                  {learned}/{g.defs.length} learned{mastered > 0 ? ` · ${mastered} mastered` : ""}
                </span>
              </div>
              <GojuonGrid defs={g.defs} items={items} showRomaji={showRomaji} />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// Kanji get their own section (they're not kana — different glyph set, and they
// carry meaning). Renders once the first kanji item ships; reuses the kana chip.
function KanjiSection({ langId, items, showRomaji }) {
  const kanjiDefs = defsFor(langId, (d) => d.type === "kanji");
  if (kanjiDefs.length === 0) return null;
  const learned = kanjiDefs.filter((d) => (items[d.id]?.rung ?? 0) >= 1).length;
  const mastered = kanjiDefs.filter((d) => isMastered(items[d.id])).length;

  // Group by semantic category (kanjiCategories.js) so kanji read in coherent
  // sets — numbers, time, verbs … — instead of one flat 106-glyph wall.
  // Uncategorized glyphs fall into a trailing "Other" group so none disappear.
  const groups = KANJI_CATEGORIES.map((cat) => ({
    ...cat,
    defs: kanjiDefs.filter((d) => categoryOf(d.front) === cat.key),
  })).filter((g) => g.defs.length > 0);
  const uncategorized = kanjiDefs.filter((d) => categoryOf(d.front) === null);
  if (uncategorized.length) groups.push({ key: "other", label: "Other", defs: uncategorized });

  return (
    <Section title="Kanji" collapsible defaultOpen={false} summary={`${learned}/${kanjiDefs.length} learned${mastered > 0 ? ` · ${mastered} mastered` : ""}`}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {groups.map((g) => {
          const glearned = g.defs.filter((d) => (items[d.id]?.rung ?? 0) >= 1).length;
          return (
            <div key={g.key} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 0.6, color: C.ai, textTransform: "uppercase" }}>{g.label}</span>
                <div style={{ flex: 1, height: 1, background: C.line }} />
                <span style={{ fontSize: 11, color: C.inkSoft, whiteSpace: "nowrap", flexShrink: 0 }}>{glearned}/{g.defs.length}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6 }}>
                {g.defs.map((d) => (
                  <KanaChip key={d.id} char={d.front} reading={d.reading} item={items[d.id]} showRomaji={showRomaji} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// Word bank: the vocabulary you've learned, organized by unit — the words
// counterpart to the kana chart. A place to revisit your growing vocabulary. Shows
// learned words only (rung ≥ 1); units with none yet are hidden, so the bank fills
// out as you climb rather than spoiling everything ahead.
function WordRow({ def, item, showRomaji }) {
  const pct = masteryPct(item);
  const mastered = isMastered(item);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 12, border: `1px solid ${C.line}`, background: C.surface }}>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontFamily: F.jp, fontSize: 18, fontWeight: 600, color: C.ink }}>{def.front}</span>
          {showRomaji && def.reading && <span style={{ fontFamily: F.mono, fontSize: 12, color: C.inkSoft }}>{def.reading}</span>}
        </div>
        {def.meaning && (
          <div style={{ fontSize: 13, color: C.inkSoft, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{def.meaning}</div>
        )}
      </div>
      {/* Word bank only lists learned words, so gate the speaker purely on a
          clip existing for this id. Use the seeded `item` (not the raw def) —
          it carries `lang`, which the audio path needs. */}
      {item && AUDIO_IDS.has(def.id) && <SpeakerButton item={item} size={30} />}
      <div title={mastered ? "Mastered" : `${Math.round(pct * 100)}%`} style={{ width: 40, height: 5, borderRadius: 999, background: C.lockedBg, overflow: "hidden", flexShrink: 0 }}>
        <div style={{ width: `${Math.max(6, Math.round(pct * 100))}%`, height: "100%", background: mastered ? C.matcha : C.ai }} />
      </div>
    </div>
  );
}

function WordBankSection({ langId, items, showRomaji }) {
  const units = UNITS.filter((u) => u.lang === langId)
    .map((u) => {
      const words = u.lessons.filter((l) => Array.isArray(l.items)).flatMap((l) => l.items).filter((d) => d.type === "vocab");
      return { id: u.id, title: u.title, total: words.length, learned: words.filter((d) => (items[d.id]?.rung ?? 0) >= 1) };
    })
    .filter((u) => u.total > 0);
  const totalWords = units.reduce((n, u) => n + u.total, 0);
  const learnedTotal = units.reduce((n, u) => n + u.learned.length, 0);
  if (totalWords === 0) return null;

  return (
    <Section title="Word bank" collapsible defaultOpen={false} summary={`${learnedTotal}/${totalWords} words`}>
      {learnedTotal === 0 ? (
        <div style={{ fontSize: 13, color: C.inkSoft }}>
          Learn some words and they'll collect here — organized by unit, so you can revisit your growing vocabulary any time.
        </div>
      ) : (
        <>
          <div style={{ fontSize: 12, color: C.inkSoft, marginBottom: 14 }}>
            The words you've learned so far, by unit. The bar shows how well each is sticking.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {units.filter((u) => u.learned.length > 0).map((u) => (
              <div key={u.id} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontFamily: F.jp, fontSize: 13, fontWeight: 800, color: C.ai }}>{u.title}</span>
                  <div style={{ flex: 1, height: 1, background: C.line }} />
                  <span style={{ fontSize: 11, color: C.inkSoft, whiteSpace: "nowrap", flexShrink: 0 }}>{u.learned.length}/{u.total}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {u.learned.map((d) => <WordRow key={d.id} def={d} item={items[d.id]} showRomaji={showRomaji} />)}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}

// Yōon (combination kana: きょ, しゃ, ぎょ…) — their own table: consonant rows ×
// the ゃ/ゅ/ょ columns. Two-glyph kana, so they live here, not in the gojūon grid.
function YoonSection({ langId, items, showRomaji }) {
  const defs = defsFor(langId, (d) => d.type === "kana" && [...d.front].length > 1);
  if (defs.length === 0) return null;
  const learned = defs.filter((d) => (items[d.id]?.rung ?? 0) >= 1).length;
  const mastered = defs.filter((d) => isMastered(items[d.id])).length;
  const YCOL = { a: 0, u: 1, o: 2 };
  const rows = [];
  let row = [null, null, null];
  let started = false;
  let prev = -1;
  const flush = () => { if (started) { rows.push(row); row = [null, null, null]; started = false; prev = -1; } };
  for (const d of defs) {
    const col = YCOL[d.reading[d.reading.length - 1]] ?? 0;
    if (started && col <= prev) flush();
    row[col] = d;
    started = true;
    prev = col;
  }
  flush();
  return (
    <Section title="Yōon (combination kana)" collapsible defaultOpen={false} summary={`${learned}/${defs.length} learned${mastered > 0 ? ` · ${mastered} mastered` : ""}`}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {rows.map((r, ri) => (
          <div key={ri} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
            {r.map((d, ci) => (d ? <KanaChip key={d.id} char={d.front} reading={d.reading} item={items[d.id]} showRomaji={showRomaji} /> : <div key={ci} />))}
          </div>
        ))}
      </div>
    </Section>
  );
}

function KanaChip({ char, reading, item, showRomaji }) {
  const [open, setOpen] = useState(false);
  const learned = (item?.rung ?? 0) >= 1;
  const pct = masteryPct(item);
  const mastered = isMastered(item);
  const accent = mastered ? C.matcha : C.ai;
  const romaji = showRomaji && reading;
  // Speaker only for unlocked glyphs that actually have a generated clip.
  const hasAudio = learned && item && AUDIO_IDS.has(item.id);
  return (
    <>
    <div
      onClick={learned && item ? () => setOpen(true) : undefined}
      role={learned ? "button" : undefined}
      aria-label={learned ? `${char} — details` : undefined}
      style={{
        position: "relative",
        width: "100%",
        borderRadius: 12,
        border: `1px solid ${learned ? accent : C.line}`,
        background: learned ? C.surface : C.lockedBg,
        opacity: learned ? 1 : 0.5,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: learned ? "pointer" : "default",
      }}
    >
      {hasAudio && <SpeakerButton item={item} floating size={22} />}
      <div
        style={{
          // When romaji shows, the glyph sits a little higher so the reading fits;
          // otherwise the glyph fills a square cell.
          aspectRatio: romaji ? "auto" : "1 / 1",
          paddingTop: romaji ? "14%" : 0,
          paddingBottom: romaji ? "2%" : 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: F.jp,
          fontSize: "clamp(26px, 7vw, 40px)",
          fontWeight: 500,
          color: learned ? C.ink : C.locked,
        }}
      >
        {char}
      </div>
      {romaji && (
        <div
          style={{
            textAlign: "center",
            fontFamily: F.mono,
            fontSize: "clamp(9px, 2.6vw, 12px)",
            color: learned ? C.inkSoft : C.locked,
            paddingBottom: 4,
          }}
        >
          {reading}
        </div>
      )}
      {/* Mastery bar — only once the character has been introduced (rung ≥ 1).
          Un-introduced kana show just the muted glyph, no bar. */}
      {learned && (
        <div style={{ height: 4, background: C.lockedBg }}>
          <div style={{ width: `${Math.max(6, pct * 100)}%`, height: "100%", background: accent, transition: "width 250ms ease" }} />
        </div>
      )}
    </div>
    {open && item && <GlyphDetail item={item} onClose={() => setOpen(false)} />}
    </>
  );
}

// --- Units section ----------------------------------------------------------

function UnitsSection({ langId, items }) {
  const units = UNITS.filter((u) => u.lang === langId).slice().sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const roadmap = roadmapFor(langId);

  // Per-unit progress; "current" = first unit not fully done (computed across the
  // whole track, independent of sectioning).
  let currentMarked = false;
  const unitRows = units.map((u) => {
    const defs = u.lessons.filter((l) => Array.isArray(l.items)).flatMap((l) => l.items);
    const done = defs.filter((d) => (items[d.id]?.rung ?? 0) >= 1).length;
    const total = defs.length;
    const isDone = total > 0 && done === total;
    let status = "coming";
    if (isDone) status = "done";
    else if (!currentMarked) { status = "current"; currentMarked = true; }
    return { kind: "unit", stage: u.stage ?? "a1", id: u.id, unit: u, done, total, status };
  });
  const roadmapRows = roadmap.map((r, i) => ({
    kind: "coming", stage: r.stage ?? "a1", id: `rm${i}`, title: r.title, theme: r.theme,
  }));

  // Render one group per stage that actually has rows, in climb order. Numbering
  // is assigned continuously top-to-bottom NOW (independent of which stages are
  // open), so it stays stable as sections collapse/expand.
  const stagesPresent = STAGE_ORDER.filter(
    (s) => unitRows.some((r) => r.stage === s) || roadmapRows.some((r) => r.stage === s)
  );
  let n = 0;
  const byStage = stagesPresent.map((stage) => ({
    stage,
    rows: [
      ...unitRows.filter((r) => r.stage === stage),
      ...roadmapRows.filter((r) => r.stage === stage),
    ].map((r) => ({ ...r, num: (n += 1) })),
  }));

  const anyCurrent = unitRows.some((r) => r.status === "current");
  const lastUnitStage = [...byStage].reverse().find((g) => g.rows.some((r) => r.kind === "unit"))?.stage;
  const doneUnits = unitRows.filter((r) => r.status === "done").length;

  return (
    <Section title="Units" collapsible defaultOpen summary={`${doneUnits}/${unitRows.length} done`}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {byStage.map(({ stage, rows }) => {
          const stageUnits = rows.filter((r) => r.kind === "unit");
          const stageDone = stageUnits.filter((r) => r.status === "done").length;
          const hasCurrent = stageUnits.some((r) => r.status === "current");
          // Open only your ACTIVE stage by default (or the last real stage if the
          // whole track is done) — collapsed stages keep the Units tab from being
          // one long wall as the curriculum grows.
          return (
            <StageGroup
              key={stage}
              label={stageHeading(langId, stage)}
              summary={stageUnits.length ? `${stageDone}/${stageUnits.length}` : "coming"}
              defaultOpen={hasCurrent || (!anyCurrent && stage === lastUnitStage)}
              rows={rows}
              items={items}
            />
          );
        })}
      </div>
    </Section>
  );
}

function StageGroup({ label, summary, defaultOpen, rows, items }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", padding: 0, cursor: "pointer", textAlign: "left", fontFamily: F.body }}
      >
        <ChevronRight size={14} color={C.ai} style={{ flexShrink: 0, transform: open ? "rotate(90deg)" : "none", transition: "transform 150ms" }} />
        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 0.6, color: C.ai, textTransform: "uppercase" }}>{label}</span>
        <div style={{ flex: 1, height: 1, background: C.line }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: C.inkSoft, whiteSpace: "nowrap", flexShrink: 0 }}>{summary}</span>
      </button>
      {open &&
        rows.map((r) =>
          r.kind === "unit" ? (
            <UnitRow key={r.id} n={r.num} unit={r.unit} items={items} done={r.done} total={r.total} status={r.status} />
          ) : (
            <ComingRow key={r.id} n={r.num} title={r.title} theme={r.theme} />
          )
        )}
    </div>
  );
}

function UnitRow({ n, unit, items, done, total, status }) {
  const [open, setOpen] = useState(false);
  const pct = total ? Math.round((done / total) * 100) : 0;
  const badge = status === "done"
    ? { text: "Done", color: C.matcha }
    : status === "current"
    ? { text: "Current", color: C.ai }
    : { text: "Coming", color: C.locked };
  const lessons = unit.lessons.filter((l) => Array.isArray(l.items));

  return (
    <div style={{ borderRadius: 12, background: C.surface, border: `1px solid ${C.line}`, overflow: "hidden" }}>
      {/* Header — tap to expand the lesson list */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: 12, background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: F.body }}
      >
        <Num n={n} color={badge.color} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
            <span style={{ fontFamily: F.jp, fontWeight: 700, fontSize: 15, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{unit.title}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: badge.color, flexShrink: 0 }}>{badge.text}</span>
          </div>
          <div style={{ height: 6, borderRadius: 999, background: C.lockedBg, overflow: "hidden", marginTop: 6 }}>
            <div style={{ width: `${pct}%`, height: "100%", background: status === "done" ? C.matcha : C.ai, transition: "width 250ms ease" }} />
          </div>
          <div style={{ fontSize: 11, color: C.inkSoft, marginTop: 4 }}>{done}/{total} items · {lessons.length} lessons</div>
        </div>
        <ChevronRight size={18} color={C.inkSoft} style={{ flexShrink: 0, transform: open ? "rotate(90deg)" : "none", transition: "transform 200ms ease" }} />
      </button>

      {/* Lesson previews — each expands to its item list */}
      {open && (
        <div style={{ borderTop: `1px solid ${C.line}`, display: "flex", flexDirection: "column" }}>
          {lessons.map((l, i) => (
            <LessonPreview key={l.id} lesson={l} n={i} items={items} />
          ))}
        </div>
      )}
    </div>
  );
}

// A lesson row that expands to preview its items — the words/kana it teaches, with
// the ones you've learned lit. Data already lives on the lesson (title/canDo/items),
// so this is pure render. Lets a learner see what a lesson covers before diving in.
function LessonPreview({ lesson, n, items }) {
  const [open, setOpen] = useState(false);
  const lt = lesson.items.length;
  const ld = lesson.items.filter((def) => (items[def.id]?.rung ?? 0) >= 1).length;
  const ldone = lt > 0 && ld === lt;
  return (
    <div style={{ borderTop: n === 0 ? "none" : `1px solid ${C.line}` }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{ width: "100%", padding: "10px 12px 10px 14px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: F.body }}
      >
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700 }}>
            <ChevronRight size={14} color={C.inkSoft} style={{ flexShrink: 0, transform: open ? "rotate(90deg)" : "none", transition: "transform 150ms" }} />
            Lesson {lesson.lesson ?? n + 1} · {lesson.title}
          </span>
          <span style={{ fontSize: 11, fontWeight: 700, color: ldone ? C.matcha : C.inkSoft, flexShrink: 0 }}>{ld}/{lt}</span>
        </div>
        {lesson.canDo && <div style={{ fontSize: 12, color: C.inkSoft, marginTop: 2, lineHeight: 1.35, paddingLeft: 20 }}>{lesson.canDo}</div>}
      </button>
      {open && (
        <div style={{ padding: "0 12px 12px 34px", display: "flex", flexWrap: "wrap", gap: 6 }}>
          {lesson.items.map((def) => {
            const learned = (items[def.id]?.rung ?? 0) >= 1;
            return (
              <span
                key={def.id}
                title={def.meaning ?? def.reading ?? undefined}
                style={{ display: "inline-flex", alignItems: "baseline", gap: 4, padding: "3px 8px", borderRadius: 8, border: `1px solid ${learned ? C.ai : C.line}`, background: learned ? C.aiSoft : C.washi, opacity: learned ? 1 : 0.6 }}
              >
                <span style={{ fontFamily: F.jp, fontSize: 14, fontWeight: 600, color: learned ? C.aiDeep : C.inkSoft }}>{def.front}</span>
                {def.meaning && <span style={{ fontSize: 11, color: C.inkSoft }}>{def.meaning}</span>}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ComingRow({ n, title, theme }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, borderRadius: 12, background: C.lockedBg, border: `1px dashed ${C.line}`, opacity: 0.8 }}>
      <Num n={n} color={C.locked} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <span style={{ fontFamily: F.jp, fontWeight: 700, fontSize: 15, color: C.inkSoft }}>{title}</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.locked, flexShrink: 0 }}>Coming soon</span>
        </div>
        <div style={{ fontSize: 11, color: C.inkSoft, marginTop: 4 }}>{theme}</div>
      </div>
    </div>
  );
}

function Num({ n, color }) {
  return (
    <div style={{ width: 28, height: 28, borderRadius: 8, flexShrink: 0, background: C.washi, border: `1px solid ${color}`, color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>
      {n}
    </div>
  );
}

// --- Other languages --------------------------------------------------------

function AddLangRow({ lang, canAdd, onStart }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, borderRadius: 12, background: canAdd ? C.surface : C.lockedBg, border: `1px ${canAdd ? "solid" : "dashed"} ${C.line}`, opacity: canAdd ? 1 : 0.85 }}>
      <div style={{ fontSize: 26 }}>{lang.flag}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontFamily: F.disp, fontSize: 15, fontWeight: 700, color: canAdd ? C.ink : C.inkSoft }}>{lang.name}</span>
          {!canAdd && <Lock size={13} color={C.locked} />}
        </div>
        <div style={{ fontSize: 12, color: C.inkSoft }}>
          {lang.target} goal{hasContent(lang.id) ? "" : " · content coming"}
        </div>
      </div>
      {canAdd && (
        <button
          onClick={onStart}
          style={{ padding: "8px 16px", borderRadius: 999, border: "none", background: C.ai, color: "#fff", fontSize: 13, fontWeight: 700, fontFamily: F.body, cursor: "pointer", flexShrink: 0 }}
        >
          Start
        </button>
      )}
    </div>
  );
}

function Section({ title, summary, collapsible = false, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const box = { background: C.surface, border: `1px solid ${C.line}`, borderRadius: 18, padding: 16 };
  if (!collapsible) {
    return (
      <div style={box}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.inkSoft, marginBottom: 12 }}>{title}</div>
        {children}
      </div>
    );
  }
  return (
    <div style={box}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", padding: 0, cursor: "pointer", textAlign: "left", fontFamily: F.body }}
      >
        <ChevronRight size={16} color={C.inkSoft} style={{ flexShrink: 0, transform: open ? "rotate(90deg)" : "none", transition: "transform 150ms" }} />
        <span style={{ fontSize: 13, fontWeight: 700, color: C.inkSoft }}>{title}</span>
        {summary && <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 600, color: C.inkSoft, whiteSpace: "nowrap" }}>{summary}</span>}
      </button>
      {open && <div style={{ marginTop: 14 }}>{children}</div>}
    </div>
  );
}
