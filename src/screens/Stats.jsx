import { useMemo, useState } from "react";
import { Flame, Snowflake, Trophy } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { LANGUAGES, UNITS } from "../data/index.js";
import { RUNGS } from "../store/mastery.js";
import { C, F } from "../theme.js";

const STAGE_ORDER = ["pre-a1", "a1", "a2", "b1", "b2"];
const STAGE_LABEL = { "pre-a1": "Pre-A1", a1: "A1", a2: "A2", b1: "B1", b2: "B2" };

export default function Stats() {
  const streak = useStore((s) => s.streak);
  const stats = useStore((s) => s.stats);
  const languages = useStore((s) => s.languages);
  const items = useStore((s) => s.items);

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

  // Mastery is per-language. Default to the active (first unlocked) language;
  // "all" aggregates every language. Other languages stay out unless chosen.
  const activeLang = LANGUAGES.find((l) => languages[l.id]?.unlocked)?.id ?? LANGUAGES[0].id;
  const [masteryLang, setMasteryLang] = useState(activeLang);

  const masteryItems = masteryLang === "all" ? itemList : itemList.filter((it) => it.lang === masteryLang);
  const rungCounts = RUNGS.map((_, r) => masteryItems.filter((it) => (it.rung ?? 0) === r).length);
  const learned = masteryItems.filter((it) => (it.rung ?? 0) >= 1).length;
  const xp = masteryLang === "all" ? stats.xpTotal : languages[masteryLang]?.xp ?? 0;

  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700 }}>Stats</div>
        <div style={{ fontSize: 13, color: C.inkSoft }}>Your climb so far.</div>
      </div>

      {/* Streak + freezes */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        <Metric icon={Flame} color={C.shu} value={streak.current} label="Streak" />
        <Metric icon={Trophy} color={C.matcha} value={streak.longest} label="Longest" />
        <Metric icon={Snowflake} color={C.ai} value={streak.freezes} label="Freezes" />
      </div>

      {/* Per-language, per-stage progress */}
      <Section title="Languages">
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {LANGUAGES.map((l) => {
            const lang = languages[l.id] ?? { ...l, level: "pre-A1", unlocked: l.unlocked };
            const stages = langStages[l.id];
            const present = STAGE_ORDER.filter((s) => stages?.[s]?.total > 0);
            return (
              <div key={l.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 14, marginBottom: present.length ? 8 : 0 }}>
                  <span style={{ fontWeight: 700 }}>
                    {lang.flag} {lang.name} {!lang.unlocked && "🔒"}
                  </span>
                  <span style={{ color: C.inkSoft, fontSize: 12 }}>
                    {lang.level === "pre-A1" ? "Starting out" : lang.level}
                  </span>
                </div>
                {present.length === 0 ? (
                  <div style={{ fontSize: 12, color: C.inkSoft }}>Lessons coming soon.</div>
                ) : (
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
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Mastery — scoped to one language (or all) */}
      <Section title="Mastery">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
          {LANGUAGES.map((l) => (
            <LangChip key={l.id} label={`${l.flag} ${l.name}`} on={masteryLang === l.id} onClick={() => setMasteryLang(l.id)} />
          ))}
          <LangChip label="All languages" on={masteryLang === "all"} onClick={() => setMasteryLang("all")} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
          <Tile value={xp} label="Total XP" />
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

function Metric({ icon: Icon, color, value, label }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 14, padding: 14, textAlign: "center" }}>
      <Icon size={20} color={color} />
      <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700, marginTop: 4 }}>{value}</div>
      <div style={{ fontSize: 11, color: C.inkSoft, fontWeight: 600 }}>{label}</div>
    </div>
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
