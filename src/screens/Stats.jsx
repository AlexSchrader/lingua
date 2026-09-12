import { useMemo, useState } from "react";
import { Award } from "lucide-react";
import { useStore, activeLangId } from "../store/useStore.js";
import { LANGUAGES, UNITS } from "../data/index.js";
import { RUNGS, isMastered } from "../store/mastery.js";
import { milestonesFromIds, nextMilestone } from "../data/milestones.js";
import { C, F } from "../theme.js";
import LangChip from "../components/LangChip.jsx";

const STAGE_ORDER = ["pre-a1", "a1", "a2", "b1", "b2"];
const STAGE_LABEL = { "pre-a1": "Pre-A1", a1: "A1", a2: "A2", b1: "B1", b2: "B2" };

export default function Stats() {
  const languages = useStore((s) => s.languages);
  const items = useStore((s) => s.items);
  const milestonesEarned = useStore((s) => s.milestonesEarned);
  const profile = useStore((s) => s.profile);
  const canAddLanguage = useStore((s) => s.canAddLanguage);

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

  // Stats reports on THIS learner, so the Languages section lists the languages they
  // have actually started — not every language that happens to have content. Listing
  // all live languages meant a French learner's own stats screen showed Japanese and
  // Spanish progress bars at 0/5012 and 0/1457: someone else's catalog, rendered as
  // their own report card. Everything else in the app still discovers languages from
  // content (isLive) — that is a catalog question; this is not.
  const startedIds = profile?.languages ?? [];
  const startedLangs = LANGUAGES.filter((l) => startedIds.includes(l.id));
  // Not-yet-started languages stay visible as a single collapsed "planned" list, so
  // the picker is still discoverable without pretending the learner is studying them.
  const otherLangs = LANGUAGES.filter((l) => !startedIds.includes(l.id));

  // Mastery is per-language. Default to the learner's OWN active language; "all"
  // aggregates every language they study. This used to read `languages[id].unlocked`
  // and take the first hit — cascade residue that always resolved to Japanese — and
  // then resolved against the LIVE catalog, which is still not this learner. The
  // store's shared resolver is the one answer every screen agrees on.
  const activeLang = activeLangId(profile);
  const [masteryLang, setMasteryLang] = useState(activeLang);

  const masteryItems = masteryLang === "all" ? itemList : itemList.filter((it) => it.lang === masteryLang);
  const masteredCount = masteryItems.filter(isMastered).length;
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
      {/* An empty/missing language list means "no scoping" in milestonesForLangs —
          the WHOLE catalog, i.e. Japanese kanji goals on a French profile. Fall back
          to the learner's own active language rather than degrading to everything. */}
      <MilestonesSection
        items={items}
        earnedIds={milestonesEarned}
        startedLangs={profile?.languages?.length ? profile.languages : [activeLang]}
      />

      {/* Per-language, per-stage progress — the learner's OWN started languages;
          everything else collapses into one "planned" expander. */}
      <Section title="Languages">
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {startedLangs.length === 0 && (
            <div style={{ fontSize: 13, color: C.inkSoft }}>
              Pick a language to start and your progress shows up here.
            </div>
          )}
          {startedLangs.map((l) => {
            const lang = languages[l.id] ?? { ...l, level: "pre-A1" };
            const stages = langStages[l.id];
            const present = STAGE_ORDER.filter((s) => stages?.[s]?.total > 0);
            // Before A1 there is no CEFR level to print. "Starting out" was a label
            // with no information in it; the count of items learned is the same fact,
            // stated honestly, and it moves.
            const learnedInLang = present.reduce((n, s) => n + (stages[s]?.learned ?? 0), 0);
            // The padlock used to key off the catalog's `unlocked` flag — cascade
            // residue that marked every language but Japanese as locked forever, and
            // that marked EVERY language locked once the field was dropped. What
            // actually gates a language now is the earn-A1 rule: a language you
            // haven't started is locked only while you can't yet add one. Already
            // studying it, or free to pick it up → no lock.
            const started = (profile?.languages ?? []).includes(l.id);
            const locked = !started && !canAddLanguage();
            return (
              <div key={l.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 14, marginBottom: 8 }}>
                  <span style={{ fontWeight: 700 }}>
                    {lang.flag} {lang.name} {locked && "🔒"}
                  </span>
                  <span style={{ color: C.inkSoft, fontSize: 12 }}>
                    {lang.level === "pre-A1" ? `${learnedInLang} item${learnedInLang === 1 ? "" : "s"}` : lang.level}
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
          {otherLangs.length > 0 && <PlannedLanguages langs={otherLangs} />}
        </div>
      </Section>

      {/* Mastery — scoped to one language (or all) */}
      <Section title="Mastery">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
          {startedLangs.map((l) => (
            <LangChip key={l.id} label={`${l.flag} ${l.name}`} on={masteryLang === l.id} onClick={() => setMasteryLang(l.id)} />
          ))}
          {startedLangs.length > 1 && (
            <LangChip label="All languages" on={masteryLang === "all"} onClick={() => setMasteryLang("all")} />
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
          <Tile value={masteryItems.length} label="Items" />
          <Tile value={learned} label="Learned" />
          {/* One definition of mastered, shared with the Ladder. This counted rung 5
              while the Ladder counted stability, so the same word could be mastered on
              one screen and not the other. Both now read isMastered — every eligible
              card kind demonstrated. */}
          <Tile value={masteredCount} label="Mastered" />
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
function MilestonesSection({ items, earnedIds, startedLangs }) {
  // Earned list reads the PERSISTED set (earned-once, never revoked); the next goal
  // is derived live from current mastery.
  const earned = useMemo(() => milestonesFromIds(earnedIds), [earnedIds]);
  // Scoped to the started languages, so the gentle next goal offered to a French
  // learner is never "1 more to your first kanji" — a goal they cannot reach.
  const next = useMemo(() => nextMilestone(items, startedLangs), [items, startedLangs]);
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
