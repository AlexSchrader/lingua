import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, AlertTriangle, RotateCcw, FlaskConical, Play, Sparkles } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { UNITS, LANGUAGES } from "../data/index.js";
import { devDiagnostics, sandboxRoute, cardPreviewRoute, PREVIEW_STATES, PREVIEW_LABEL, reviewSandboxRoute, fixupSandboxRoute, microSandboxRoute, devLanguages, defaultDevLang } from "../store/dev.js";
import { LIVE_CARD_KINDS } from "../data/cardKinds.js";
import { langName } from "../data/languages.js";
import Mascot from "../components/Mascot.jsx";
import Celebration from "../components/Celebration.jsx";
import { C, F } from "../theme.js";

// Card labels. Two of them name a Japanese concept ("rōmaji", "JP"), so they're
// resolved per language rather than baked in — a French panel reads "Type
// spelling" / "Type French".
const CARD_LABEL = { teach: "Teach", choice: "Choice", "choice:reverse": "Reverse", "listen:choice": "Listen", "listen:type": "Dictation", "cloze:choice": "Cloze", "particle:choice": "Particle", "type:meaning": "Type", "type:reading": "Type rōmaji", "type:produce": "Type JP", build: "Build", "sentence:build": "Sentence", conjugate: "Conjugate", trace: "Trace", speak: "Speak" };

function cardLabel(kind, lang) {
  if (lang && lang !== "ja") {
    if (kind === "type:reading") return "Type spelling";
    if (kind === "type:produce") return `Type ${langName(lang)}`;
    if (kind === "particle:choice") return "Little word";
  }
  return CARD_LABEL[kind] ?? kind;
}

// Mascot reactions worth eyeballing in the Moments gallery.
const MASCOT_CONTEXTS = ["greeting", "correctAnswer", "wrongAnswer", "lessonComplete", "achievement", "streakReminder", "unitUnlock", "error"];

// CEFR stages, in climb order — the lesson-preview launchers group units by these
// so the panel shows a couple of stage tabs instead of one tab per unit.
const STAGE_ORDER = ["pre-a1", "a1", "a2", "b1", "b2"];
const STAGE_LABEL = { "pre-a1": "Pre-A1", a1: "A1", a2: "A2", b1: "B1", b2: "B2" };

// Collapsible section — the panel got long, so every block is a tap-to-open
// accordion (collapsed by default) to kill the scrolling. The title stays visible
// as the header even when closed. Diagnostics opens by default (it's the primary
// readout and small).
function Section({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 18, padding: open ? 16 : "12px 16px" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", border: "none", background: "transparent", padding: 0, cursor: "pointer", fontSize: 13, fontWeight: 700, color: C.inkSoft, fontFamily: F.body, textAlign: "left" }}
      >
        <span style={{ fontSize: 11, color: C.ai, width: 10, flexShrink: 0 }}>{open ? "▾" : "▸"}</span>
        <span style={{ flex: 1 }}>{title}</span>
      </button>
      {open && <div style={{ marginTop: 12 }}>{children}</div>}
    </div>
  );
}

function Stat({ label, value, warn }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "5px 0" }}>
      <span style={{ flex: 1, fontSize: 14 }}>{label}</span>
      <span style={{ fontSize: 14, fontWeight: 700, color: warn ? C.shu : C.ink, fontFamily: F.mono }}>
        {value}
      </span>
    </div>
  );
}

// Hidden playtest panel — visible only when Dev Mode is unlocked. Reads from
// UNITS data (no hardcoded unit names): launches any lesson directly (bypassing
// ladder/unlock gating) in a fully isolated sandbox run. See src/store/dev.js.
export default function DevPanel() {
  const navigate = useNavigate();
  const devMode = useStore((s) => s.devMode);
  const resetAll = useStore((s) => s.resetAll);
  const replayOnboarding = useStore((s) => s.replayOnboarding);
  const devLearnItems = useStore((s) => s.devLearnItems);
  const devMasterItems = useStore((s) => s.devMasterItems);
  const devSeedMistakes = useStore((s) => s.devSeedMistakes);
  const devSeedReviews = useStore((s) => s.devSeedReviews);
  const [confirming, setConfirming] = useState(false);
  const [celebKey, setCelebKey] = useState(0); // >0 mounts the celebration overlay (bump to replay)
  const [seeded, setSeeded] = useState(null); // brief confirmation after a progress seed

  // Everything in the panel is scoped to ONE language at a time — the lesson list,
  // the quick cards, the session launchers and the diagnostics all follow this.
  // Opens on the learner's active language when it has content.
  const activeLang = useStore((s) => s.profile?.activeLang);
  const langs = useMemo(() => devLanguages(), []);
  const [lang, setLang] = useState(() => defaultDevLang(activeLang));

  const diag = useMemo(() => devDiagnostics(lang), [lang]);
  const langUnits = useMemo(() => UNITS.filter((u) => u.lang === lang), [lang]);
  const seed = (label, fn) => { fn(); setSeeded(label); };

  // Guard: not security, just don't render the panel when locked.
  useEffect(() => {
    if (!devMode) navigate("/settings", { replace: true });
  }, [devMode, navigate]);
  if (!devMode) return null;

  const doReset = () => {
    resetAll();
    setConfirming(false);
  };

  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <button
          aria-label="Back"
          onClick={() => navigate("/settings")}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: 999, border: "none", background: "transparent", color: C.inkSoft, cursor: "pointer", padding: 0 }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>
            <FlaskConical size={20} color={C.ai} /> Dev Mode
          </div>
          <div style={{ fontSize: 13, color: C.inkSoft }}>Isolated playtest — nothing here touches real progress.</div>
        </div>
      </div>

      {/* Language switcher — every section below is scoped to the pick. Only shown
          when more than one language actually has content. */}
      {langs.length > 1 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {langs.map((id) => {
            const meta = LANGUAGES.find((l) => l.id === id);
            const on = id === lang;
            return (
              <button
                key={id}
                onClick={() => setLang(id)}
                aria-pressed={on}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  padding: "9px 14px", borderRadius: 999,
                  border: `1.5px solid ${on ? C.ai : C.line}`,
                  background: on ? C.aiSoft : C.surface,
                  color: on ? C.aiDeep : C.inkSoft,
                  fontSize: 13, fontWeight: 700, fontFamily: F.body, cursor: "pointer",
                }}
              >
                <span>{meta?.flag ?? "🏳️"}</span> {meta?.name ?? id}
              </button>
            );
          })}
        </div>
      )}

      {/* Lesson preview — the primary tool, pinned to the top. Grouped by CEFR stage
          so there are a couple of stage tabs instead of one per unit. */}
      {STAGE_ORDER.filter((st) => langUnits.some((u) => (u.stage ?? "a1") === st)).map((st) => {
        const stageUnits = langUnits.filter((u) => (u.stage ?? "a1") === st);
        return (
          <Section key={st} title={`${STAGE_LABEL[st] ?? st} lessons · ${stageUnits.length} unit${stageUnits.length === 1 ? "" : "s"}`}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {stageUnits.map((unit) => {
                const lessons = unit.lessons.filter((l) => l.items);
                return (
                  <div key={unit.id}>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>
                      {unit.title} <span style={{ fontFamily: F.mono, color: C.inkSoft, fontWeight: 600, fontSize: 12 }}>· {unit.id}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {lessons.map((lesson) => (
                        <div key={lesson.id} style={{ border: `1px solid ${C.line}`, borderRadius: 12, padding: 12 }}>
                          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
                            <span style={{ fontSize: 14, fontWeight: 700 }}>{lesson.title}</span>
                            <span style={{ fontSize: 12, color: C.inkSoft, fontFamily: F.mono }}>
                              {lesson.cefr} · {lesson.items.length} items
                            </span>
                          </div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {PREVIEW_STATES.map((state) => (
                              <button
                                key={state}
                                onClick={() => navigate(sandboxRoute(lesson.id, state))}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 5,
                                  padding: "8px 12px",
                                  borderRadius: 10,
                                  border: `1.5px solid ${state === "fresh" ? C.ai : C.line}`,
                                  background: state === "fresh" ? C.aiSoft : C.surface,
                                  color: state === "fresh" ? C.aiDeep : C.inkSoft,
                                  fontSize: 13,
                                  fontWeight: 700,
                                  fontFamily: F.body,
                                  cursor: "pointer",
                                }}
                              >
                                <Play size={13} /> {PREVIEW_LABEL[state]}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>
        );
      })}

      <Section title="Quick card — jump straight to any card kind">
        <div style={{ fontSize: 12, color: C.inkSoft, marginBottom: 10 }}>
          One tap to a single example of each card, isolated — no real progress touched.
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {LIVE_CARD_KINDS.map((kind) => {
            // A kind with no items in this language can't be previewed — show it
            // greyed and disabled rather than launching an empty session.
            const n = diag.cardKinds.find((c) => c.kind === kind)?.count ?? 0;
            const dark = n === 0;
            return (
              <button
                key={kind}
                disabled={dark}
                title={dark ? `No ${lang} items route to ${kind} yet` : `${n} ${lang} item(s) route here`}
                onClick={() => navigate(cardPreviewRoute(kind, lang))}
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", borderRadius: 999, border: `1.5px solid ${dark ? C.line : C.ai}`, background: dark ? C.lockedBg : C.aiSoft, color: dark ? C.locked : C.aiDeep, fontSize: 13, fontWeight: 700, fontFamily: F.body, cursor: dark ? "default" : "pointer" }}
              >
                <Play size={13} /> {cardLabel(kind, lang)}
              </button>
            );
          })}
        </div>
      </Section>

      <Section title="Sessions — run a whole session shape (isolated)">
        <div style={{ fontSize: 12, color: C.inkSoft, marginBottom: 10 }}>
          The daily review, the mistake-review (Fix-up), and a "Just a few" micro-lesson — sandboxed, no real progress touched.
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {[["Review", reviewSandboxRoute(lang)], ["Fix-up", fixupSandboxRoute(lang)], ["Just a few", microSandboxRoute(lang)]].map(([label, route]) => (
            <button
              key={label}
              onClick={() => navigate(route)}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", borderRadius: 999, border: `1.5px solid ${C.ai}`, background: C.aiSoft, color: C.aiDeep, fontSize: 13, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
            >
              <Play size={13} /> {label}
            </button>
          ))}
        </div>
      </Section>

      <Section title="Moments — mascot reactions + the celebration">
        <button
          onClick={() => setCelebKey((k) => k + 1)}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, borderRadius: 12, border: `1.5px solid ${C.ai}`, background: C.aiSoft, color: C.aiDeep, fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
        >
          <Sparkles size={16} /> Play the lesson-complete celebration
        </button>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginTop: 14 }}>
          {MASCOT_CONTEXTS.map((ctx) => (
            <div key={ctx} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <Mascot context={ctx} size={56} videoKey={ctx} />
              <span style={{ fontSize: 10, color: C.inkSoft, textAlign: "center" }}>{ctx}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title={`Seed progress — ${langName(lang)}, ⚠️ touches REAL progress (Reset restores)`}>
        <div style={{ fontSize: 12, color: C.inkSoft, marginBottom: 10 }}>
          Populate the progress-dependent screens (Word bank, Ladder, Stats, Fix-up) without grinding. Unlike the rest of this panel, these write to your real deck — and only to your <strong>{langName(lang)}</strong> deck.
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {[
            ["Learn 20", () => devLearnItems(20, lang)],
            ["Master 10", () => devMasterItems(10, lang)],
            ["Seed 5 misses", () => devSeedMistakes(5, lang)],
            ["Make all due", () => devSeedReviews(lang)],
          ].map(([label, fn]) => (
            <button
              key={label}
              onClick={() => seed(label, fn)}
              style={{ padding: "10px 14px", borderRadius: 999, border: `1.5px solid ${C.shu}`, background: C.surface, color: C.shu, fontSize: 13, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
            >
              {label}
            </button>
          ))}
        </div>
        {seeded && <div style={{ fontSize: 12, color: C.matcha, marginTop: 8 }}>✓ {seeded} — open the Ladder / Stats / Today to see it.</div>}
      </Section>

      <Section title={`Diagnostics — ${langName(lang)}`} defaultOpen>
        <Stat label="Units registered" value={diag.unitCount} />
        <Stat label="Lessons (playable)" value={diag.lessonCount} />
        <Stat label="Items total" value={diag.itemCount} />
        <Stat label="Items with audio" value={`${diag.audioTotal} / ${diag.itemCount}`} warn={diag.audioTotal === 0} />
        {/* Stroke data is a glyph-script concern — a Latin-alphabet language has
            nothing to trace, so the row is hidden rather than reporting 0 / 0. */}
        {diag.kanaTotal > 0 && (
          <>
            <Stat label="Glyphs with stroke data" value={`${diag.kanaWithStroke} / ${diag.kanaTotal}`} />
            {diag.kanaMissing.length > 0 ? (
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start", color: C.shu, fontSize: 13, fontWeight: 600, marginTop: 6 }}>
                <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: 1 }} />
                Missing KanjiVG stroke data: {diag.kanaMissing.join("  ")}
              </div>
            ) : (
              <div style={{ fontSize: 13, color: C.inkSoft, marginTop: 6 }}>
                ✓ Every kana has stroke data.
              </div>
            )}
          </>
        )}

        {/* Which card kinds this language can actually reach — the same picks the
            Quick-card buttons use, so the count and the button never disagree. */}
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.inkSoft, marginBottom: 6 }}>
            Card kinds reachable · {diag.cardKinds.filter((c) => c.count > 0).length} / {diag.cardKinds.length}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {diag.cardKinds.map(({ kind, count }) => (
              <span
                key={kind}
                title={`${count} item(s)`}
                style={{
                  padding: "4px 9px", borderRadius: 999, fontSize: 11, fontWeight: 700, fontFamily: F.mono,
                  border: `1px solid ${count ? C.matcha : C.line}`,
                  background: count ? C.surface : C.lockedBg,
                  color: count ? C.matcha : C.locked,
                }}
              >
                {cardLabel(kind, lang)} {count || "—"}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Preview flows">
        <button
          onClick={() => { replayOnboarding(); navigate("/"); }}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, borderRadius: 12, border: `1.5px solid ${C.ai}`, background: C.aiSoft, color: C.aiDeep, fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
        >
          <Play size={18} /> Replay onboarding
        </button>
        <div style={{ fontSize: 12, color: C.inkSoft, marginTop: 8, lineHeight: 1.4 }}>
          Re-runs the language pick + onboarding screens. Safe — doesn't touch your progress; you'll land back in the app when you finish.
        </div>

        {/* The Ladder's "Add a language" section is gated on reaching A1, so its
            unlocked state is unreachable until then — which is why French shipped
            having only ever been seen as a FIRST pick, never as the addition it
            will usually be. This previews that state. Start is disabled inside the
            preview (it writes to real progress), keeping the panel's promise. */}
        <button
          onClick={() => navigate("/ladder?preview=addlang")}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, borderRadius: 12, border: `1.5px solid ${C.ai}`, background: C.aiSoft, color: C.aiDeep, fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer", marginTop: 12 }}
        >
          <Play size={18} /> Preview “Add a language”
        </button>
        <div style={{ fontSize: 12, color: C.inkSoft, marginTop: 8, lineHeight: 1.4 }}>
          Shows the Ladder's add-a-language rows unlocked, as they look once you've
          reached A1 — the only way to see {langName(lang)} offered as a second
          language rather than a first pick. Read-only: Start is disabled.
        </div>
      </Section>

      <Section title="Danger zone">
        {!confirming ? (
          <button
            onClick={() => setConfirming(true)}
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, borderRadius: 12, border: `1.5px solid ${C.shu}`, background: C.surface, color: C.shu, fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
          >
            <RotateCcw size={18} />
            Reset my real progress
          </button>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start", color: C.shu, fontSize: 13, fontWeight: 600 }}>
              <AlertTriangle size={18} style={{ flexShrink: 0, marginTop: 1 }} />
              This wipes your real progress (every item + your milestones) back to a fresh
              start. Dev Mode stays unlocked. It can't be undone.
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => setConfirming(false)}
                style={{ flex: 1, padding: 14, borderRadius: 12, border: `1.5px solid ${C.line}`, background: C.surface, color: C.inkSoft, fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
              >
                Cancel
              </button>
              <button
                onClick={doReset}
                style={{ flex: 1, padding: 14, borderRadius: 12, border: "none", background: C.shu, color: "#fff", fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
              >
                Reset everything
              </button>
            </div>
          </div>
        )}
      </Section>

      {/* Celebration overlay (fixed, pointer-events none) — bump celebKey to replay. */}
      {celebKey > 0 && <Celebration key={celebKey} />}
    </div>
  );
}
