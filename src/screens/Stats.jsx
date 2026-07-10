import { useMemo, useState } from "react";
import { Award } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { LANGUAGES, UNITS, isLive } from "../data/index.js";
import { RUNGS } from "../store/mastery.js";
import { milestonesFromIds, nextMilestone } from "../data/milestones.js";
import { C, F } from "../theme.js";

const STAGE_ORDER = ["pre-a1", "a1", "a2", "b1", "b2"];
const STAGE_LABEL = { "pre-a1": "Pre-A1", a1: "A1", a2: "A2", b1: "B1", b2: "B2" };

export default function Stats() {
  const languages = useStore((s) => s.languages);
  const items = useStore((s) => s.items);
  const milestonesEarned = useStore((s) => s.milestonesEarned);

  const itemList = useMemo(() => Object.values(items), [items]);

  // Per-language, per-stage progress straight from the curriculum (UNITS hold the
  // stage), cross-referenced with the learner's rung. So each language reads
  // "X/Y Pre-A1, X/Y A1 …" — real counts, not an XP proxy.
  const langStages = useMemo(() => {
    const out = {};
    for (const u of UNITS) {
      const lang = u.lang;
      const stage = u.stage ?? "a1";
      (out[lang] ??= {});
      (out[lang][stage] ??= { total: 0, learned: 0 });
      for (const l of u.lessons)
        for (const def of l.items ?? []) {
          out[lang][stage].total += 1;
          if ((items[def.id]?.rung ?? 0) >= 1) out[lang][stage].learned += 1;
        }
    }
    return out;
  }, [items]);

  // Catalog split: only languages with real content are shown expanded / as tabs;
  // the rest collapse into a "planned" list. Derived from UNITS, so a language
  // appears automatically the moment its first unit ships.
  const liveLangs = LANGUAGES.filter((l) => isLive(l.id));
  const plannedLangs = LANGUAGES.filter((l) => !isLive(l.id));

  // Mastery is per-language. Default to the active (first unlocked) language;
  // "all" aggregates every language. Other languages stay out unless chosen.
  const activeLang = LANGUAGES.find((l) => languages[l.id]?.unlocked)?.id ?? LANGUAGES[0].id;
  const [masteryLang, setMasteryLang] = useState(activeLang);

  const masteryItems = masteryLang === "all" ? itemList : itemList.filter((it) => it.lang === masteryLang);
  const rungCounts = RUNGS.map((_, r) => masteryItems.filter((it) => (it.rung ?? 0) === r).length);
  const learned = masteryItems.filter((it) => (it.rung ?? 0) >= 1).length;

  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700 }}>Stats</div>
        <div style={{ fontSize: 13, color: C.inkSoft }}>Your climb so far.</div>
      </div>

      {/* Milestones — capability you've reached (earned, never revoked) + the single
          nearest next goal. Honest structural progress, not an engagement score.
          Pure-derived from mastery state; see src/data/milestones.js. */}
      <MilestonesSection items={items} earnedIds={milestonesEarned} />

      {/* Per-language, per-stage progress — live languages only; planned ones
          collapse into a single expander instead of fake "coming soon" rows. */}
      <Section title="Languages">
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {liveLangs.map((l) => {
            const lang = languages[l.id] ?? { ...l, level: "pre-A1", unlocked: l.unlocked };
            const stages = langStages[l.id];
            const present = STAGE_ORDER.filter((s) => stages?.[s]?.total > 0);
            return (
              <div key={l.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 14, marginBottom: 8 }}>
                  <span style={{ fontWeight: 700 }}>
                    {lang.flag} {lang.name} {!lang.unlocked && "🔒"}
                  </span>
                  <span style={{ color: C.inkSoft, fontSize: 12 }}>
                    {lang.level === "pre-A1" ? "Starting out" : lang.level}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {present.map((s) => {
                    const { total, learned: lrn } = stages[s];
                    const pct = total ? Math.round((lrn / total) * 100) : 0;
                    const done = total > 0 && lrn === total;
                    return (
                      <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
                        <span style={{ width: 52, color: C.inkSoft, fontWeight: 600 }}>{STAGE_LABEL[s]}</span>
                        <div style={{ flex: 1, height: 6, background: C.lockedBg, borderRadius: 999, overflow: "hidden" }}>
                          <div style={{ width: `${pct}%`, height: "100%", background: done ? C.matcha : C.ai, transition: "width 250ms ease" }} />
                        </div>
                        <span style={{ width: 56, textAlign: "right", fontWeight: 700, color: done ? C.matcha : C.ink }}>
                          {lrn}/{total}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {plannedLangs.length > 0 && <PlannedLanguages langs={plannedLangs} />}
        </div>
      </Section>

      {/* Mastery — scoped to one language (or all) */}
      <Section title="Mastery">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
          {liveLangs.map((l) => (
            <LangChip key={l.id} label={`${l.flag} ${l.name}`} on={masteryLang === l.id} onClick={() => setMasteryLang(l.id)} />
          ))}
          {liveLangs.length > 1 && (
            <LangChip label="All languages" on={masteryLang === "all"} onClick={() => setMasteryLang("all")} />
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
          <Tile value={masteryItems.length} label="Items" />
          <Tile value={learned} label="Learned" />
          <Tile value={rungCounts[5]} label="Mastered" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {RUNGS.map((name, r) => (
            <div key={name} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
              <span style={{ width: 90, color: C.inkSoft }}>{name}</span>
              <div style={{ flex: 1, height: 6, background: C.lockedBg, borderRadius: 999, overflow: "hidden" }}>
                <div
                  style={{
                    width: masteryItems.length ? `${(rungCounts[r] / masteryItems.length) * 100}%` : 0,
                    height: "100%",
                    background: r === 5 ? C.matcha : C.ai,
                  }}
                />
              </div>
              <span style={{ width: 20, textAlign: "right", fontWeight: 700 }}>{rungCounts[r]}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Planned (no-content-yet) languages, collapsed behind one expander so the panel
// isn't cluttered with fake "coming soon" rows. Each flips to a live entry above
// automatically once its first unit ships (isLive derivation).
function PlannedLanguages({ langs }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{ display: "flex", alignItems: "center", gap: 6, border: "none", background: "transparent", color: C.inkSoft, fontSize: 12, fontWeight: 700, fontFamily: F.body, cursor: "pointer", padding: 0 }}
      >
        <span>{open ? "▾" : "▸"}</span> More languages · {langs.length} planned
      </button>
      {open && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
          {langs.map((l) => (
            <div key={l.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13 }}>
              <span style={{ color: C.inkSoft }}>{l.flag} {l.name}</span>
              <span style={{ fontSize: 10, color: C.inkSoft, fontWeight: 700, background: C.lockedBg, padding: "2px 8px", borderRadius: 999, textTransform: "uppercase", letterSpacing: 0.5 }}>Planned</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Capability milestones — the honest-progress replacement for the scoreboard.
// Shows every milestone already reached plus the SINGLE nearest next goal as a
// gentle target (no wall of locked badges to grind). Fully derived from mastery
// state — no tracking, no persistence here (earned-once lives in the store, later).
function MilestonesSection({ items, earnedIds }) {
  // Earned list reads the PERSISTED set (earned-once, never revoked); the next goal
  // is derived live from current mastery.
  const earned = useMemo(() => milestonesFromIds(earnedIds), [earnedIds]);
  const next = useMemo(() => nextMilestone(items), [items]);
  return (
    <Section title="Milestones">
      {earned.length === 0 && !next && (
        <div style={{ fontSize: 13, color: C.inkSoft }}>Milestones appear here as you reach them.</div>
      )}
      {earned.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: next ? 14 : 0 }}>
          {earned.map((e) => (
            <div key={e.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Award size={16} color={C.matcha} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 14, fontWeight: 600 }}>{e.label}</span>
            </div>
          ))}
        </div>
      )}
      {next && (
        <div style={{ background: C.washi, borderRadius: 12, padding: 12 }}>
          <div style={{ fontSize: 10, color: C.inkSoft, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>
            Next
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{next.label}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ flex: 1, height: 6, background: C.lockedBg, borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: `${Math.round((next.have / next.need) * 100)}%`, height: "100%", background: C.ai, transition: "width 250ms ease" }} />
            </div>
            <span style={{ width: 56, textAlign: "right", fontSize: 12, fontWeight: 700, color: C.inkSoft }}>
              {next.have}/{next.need}
            </span>
          </div>
        </div>
      )}
    </Section>
  );
}

function LangChip({ label, on, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "7px 12px",
        borderRadius: 999,
        border: `1.5px solid ${on ? C.ai : C.line}`,
        background: on ? C.aiSoft : C.surface,
        color: on ? C.aiDeep : C.inkSoft,
        fontSize: 12,
        fontWeight: 700,
        fontFamily: F.body,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

function Tile({ value, label }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 12, padding: "12px 10px" }}>
      <div style={{ fontFamily: F.disp, fontSize: 20, fontWeight: 700, color: C.ai }}>{value}</div>
      <div style={{ fontSize: 11, color: C.inkSoft, fontWeight: 600 }}>{label}</div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 18, padding: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: C.inkSoft, marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  );
}
