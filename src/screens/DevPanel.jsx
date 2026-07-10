import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, AlertTriangle, RotateCcw, FlaskConical, Play, Sparkles } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { UNITS } from "../data/index.js";
import { devDiagnostics, sandboxRoute, cardPreviewRoute, PREVIEW_STATES, PREVIEW_LABEL, reviewSandboxRoute, fixupSandboxRoute, microSandboxRoute, a2PreviewUnits, A2_SAMPLER_ID } from "../store/dev.js";
import { LIVE_CARD_KINDS } from "../data/contract.js";
import Mascot from "../components/Mascot.jsx";
import Celebration from "../components/Celebration.jsx";
import { C, F } from "../theme.js";

const CARD_LABEL = { teach: "Teach", choice: "Choice", "listen:choice": "Listen", "listen:type": "Dictation", "cloze:choice": "Cloze", "particle:choice": "Particle", "type:meaning": "Type", "type:reading": "Type rōmaji", "type:produce": "Type JP", build: "Build", "sentence:build": "Sentence", conjugate: "Conjugate", trace: "Trace", speak: "Speak" };

// Mascot reactions worth eyeballing in the Moments gallery.
const MASCOT_CONTEXTS = ["greeting", "correctAnswer", "wrongAnswer", "lessonComplete", "achievement", "streakReminder", "unitUnlock", "error"];

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

  const diag = useMemo(() => devDiagnostics(), []);
  const seed = (label, fn) => { fn(); setSeeded(label); };
  // A2 draft units for the preview browser (dev-only; never in live UNITS).
  const a2Units = useMemo(() => a2PreviewUnits(), []);
  const a2ItemTotal = useMemo(
    () => a2Units.reduce((n, u) => n + u.lessons.reduce((m, l) => m + l.itemCount, 0), 0),
    [a2Units]
  );

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

      <Section title="Quick card — jump straight to any card kind">
        <div style={{ fontSize: 12, color: C.inkSoft, marginBottom: 10 }}>
          One tap to a single example of each card, isolated — no real progress touched.
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {LIVE_CARD_KINDS.map((kind) => (
            <button
              key={kind}
              onClick={() => navigate(cardPreviewRoute(kind))}
              style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", borderRadius: 999, border: `1.5px solid ${C.ai}`, background: C.aiSoft, color: C.aiDeep, fontSize: 13, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
            >
              <Play size={13} /> {CARD_LABEL[kind] ?? kind}
            </button>
          ))}
        </div>
      </Section>

      <Section title="Sessions — run a whole session shape (isolated)">
        <div style={{ fontSize: 12, color: C.inkSoft, marginBottom: 10 }}>
          The daily review, the mistake-review (Fix-up), and a "Just a few" micro-lesson — sandboxed, no real progress touched.
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {[["Review", reviewSandboxRoute()], ["Fix-up", fixupSandboxRoute()], ["Just a few", microSandboxRoute()]].map(([label, route]) => (
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

      <Section title="Seed progress — ⚠️ touches REAL progress (Reset restores)">
        <div style={{ fontSize: 12, color: C.inkSoft, marginBottom: 10 }}>
          Populate the progress-dependent screens (Word bank, Ladder, Stats, Fix-up) without grinding. Unlike the rest of this panel, these write to your real deck.
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {[
            ["Learn 20", () => devLearnItems(20)],
            ["Master 10", () => devMasterItems(10)],
            ["Seed 5 misses", () => devSeedMistakes(5)],
            ["Make all due", () => devSeedReviews()],
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

      <Section title="Diagnostics — is the new unit wired right?" defaultOpen>
        <Stat label="Units registered" value={diag.unitCount} />
        <Stat label="Lessons (playable)" value={diag.lessonCount} />
        <Stat label="Items total" value={diag.itemCount} />
        <Stat label="Kana with stroke data" value={`${diag.kanaWithStroke} / ${diag.kanaTotal}`} />
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
      </Section>

      <Section title="A2 preview (draft) — not live, sandbox only">
        <div style={{ fontSize: 12, color: C.inkSoft, marginBottom: 10, lineHeight: 1.4 }}>
          {a2Units.length} drafted A2 units · {a2ItemTotal} items. Playable here in the throwaway
          sandbox to feel the content before it ships — never touches real progress or the Ladder.
        </div>
        <button
          onClick={() => navigate(sandboxRoute(A2_SAMPLER_ID, "fresh"))}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, borderRadius: 12, border: `1.5px solid ${C.ai}`, background: C.aiSoft, color: C.aiDeep, fontSize: 15, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
        >
          <Sparkles size={16} /> Quick sampler — a taste of every A2 theme
        </button>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
          {a2Units.map((unit) => (
            <div key={unit.id} style={{ border: `1px solid ${C.line}`, borderRadius: 12, padding: 12 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 700, fontFamily: F.jp }}>{unit.title}</span>
                <span style={{ fontSize: 12, color: C.inkSoft, fontFamily: F.mono }}>
                  {unit.stage.toUpperCase()} · {unit.id}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {unit.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => navigate(sandboxRoute(lesson.id, "fresh"))}
                    style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 12px", borderRadius: 10, border: `1.5px solid ${C.line}`, background: C.surface, color: C.inkSoft, fontSize: 13, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}
                  >
                    <Play size={13} /> {lesson.title} · {lesson.itemCount}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {UNITS.map((unit) => {
        const lessons = unit.lessons.filter((l) => l.items);
        return (
          <Section key={unit.id} title={`${unit.title} · ${unit.id} · ${lessons.length} lesson${lessons.length === 1 ? "" : "s"}`}>
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
          </Section>
        );
      })}

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
              This wipes your real progress (every item, streak, freezes, XP) back to a fresh
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
