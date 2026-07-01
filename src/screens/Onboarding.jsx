import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore.js";
import { LANGUAGES, UNITS } from "../data/index.js";
import { C, F } from "../theme.js";

// First-run onboarding, two calm steps: (1) pick the language to learn — any of
// them, even ones without lessons yet (they show "coming soon") — then (2) a
// name, a why, and an optional reminder. Everything's changeable later; nothing
// here blocks. Picking a language STARTS it and makes it active; more languages
// unlock once this one reaches A1 (handled on the Ladder).
const REASONS = [
  { key: "travel", label: "Travel", emoji: "✈️" },
  { key: "heritage", label: "Heritage / family", emoji: "🏮" },
  { key: "work", label: "Work or study", emoji: "💼" },
  { key: "fun", label: "For the love of it", emoji: "🌱" },
];

const hasContent = (id) => UNITS.some((u) => u.lang === id);

export default function Onboarding() {
  const navigate = useNavigate();
  const username = useStore((s) => s.auth.user?.username);
  const devMode = useStore((s) => s.devMode);
  const startLanguage = useStore((s) => s.startLanguage);
  const completeOnboarding = useStore((s) => s.completeOnboarding);

  const [step, setStep] = useState(0);

  // Dev-only escape hatch: when previewing this flow from the Dev panel, let the
  // learner bail out without completing it. Restores onboarded (keeps their real
  // profile answers) and returns to the Dev page.
  const exitPreview = () => {
    completeOnboarding({});
    navigate("/dev");
  };
  const linkBtn = { border: "none", background: "transparent", color: C.inkSoft, fontSize: 13, fontWeight: 700, fontFamily: F.body, cursor: "pointer", padding: 4 };
  const [lang, setLang] = useState(null);
  const [displayName, setDisplayName] = useState(username ?? "");
  const [reason, setReason] = useState(null);
  const [reminderTime, setReminderTime] = useState("");

  function chooseLanguage() {
    if (!lang) return;
    startLanguage(lang);
    setStep(1);
  }

  function finish() {
    completeOnboarding({
      displayName: displayName.trim() || username || null,
      reason,
      reminderTime: reminderTime || null,
    });
  }

  return (
    <div style={{ minHeight: "calc(100dvh / var(--app-zoom, 1))", background: C.washi, color: C.ink, fontFamily: F.body, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 400, display: "flex", flexDirection: "column", gap: 22 }}>
        {(step > 0 || devMode) && (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: -8 }}>
            {step > 0 ? <button onClick={() => setStep(0)} style={linkBtn}>← Back</button> : <span />}
            {devMode && <button onClick={exitPreview} style={linkBtn}>Exit preview →</button>}
          </div>
        )}
        {step === 0 ? (
          <>
            <div style={{ textAlign: "center" }}>
              <img src="/mascot/lingua-wave.png" alt="" aria-hidden style={{ width: 100, height: "auto", margin: "0 auto 8px" }} />
              <div style={{ fontFamily: F.disp, fontSize: 24, fontWeight: 700 }}>Which language?</div>
              <div style={{ fontSize: 13, color: C.inkSoft, marginTop: 4 }}>Pick the one to start with. You'll unlock the next once you reach A1.</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {LANGUAGES.map((l) => {
                const on = lang === l.id;
                const ready = hasContent(l.id);
                return (
                  <button
                    key={l.id}
                    onClick={() => setLang(l.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "14px 16px",
                      borderRadius: 14,
                      border: `1.5px solid ${on ? C.ai : C.line}`,
                      background: on ? C.aiSoft : C.surface,
                      color: C.ink,
                      cursor: "pointer",
                      fontFamily: F.body,
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: 28 }}>{l.flag}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: on ? C.aiDeep : C.ink }}>{l.name}</div>
                      <div style={{ fontSize: 12, color: ready ? C.matcha : C.inkSoft, fontWeight: 600, marginTop: 2 }}>
                        {ready ? "Available now" : "Content coming soon"}
                      </div>
                    </div>
                    <span style={{ fontSize: 12, color: C.inkSoft }}>→ {l.target}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={chooseLanguage}
              disabled={!lang}
              style={{ padding: 16, borderRadius: 14, border: "none", background: lang ? C.ai : C.lockedBg, color: lang ? "#fff" : C.locked, fontSize: 16, fontWeight: 700, fontFamily: F.body, cursor: lang ? "pointer" : "default" }}
            >
              Continue
            </button>
          </>
        ) : (
          <>
            <div style={{ textAlign: "center" }}>
              <img src="/mascot/lingua-cheer.png" alt="" aria-hidden style={{ width: 110, height: "auto", margin: "0 auto 8px" }} />
              <div style={{ fontFamily: F.disp, fontSize: 24, fontWeight: 700 }}>You're in 🎉</div>
              <div style={{ fontSize: 13, color: C.inkSoft, marginTop: 4 }}>Two quick things, then we start. Change these any time.</div>
            </div>

            <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 700 }}>What should we call you?</span>
              <input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your name"
                autoCapitalize="words"
                autoCorrect="off"
                style={{ padding: "13px 14px", borderRadius: 12, border: `1.5px solid ${C.line}`, background: C.surface, color: C.ink, fontSize: 16, fontFamily: F.body, outline: "none" }}
              />
            </label>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 700 }}>What's bringing you here?</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {REASONS.map((r) => {
                  const on = reason === r.key;
                  return (
                    <button
                      key={r.key}
                      onClick={() => setReason(on ? null : r.key)}
                      style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 12px", borderRadius: 12, border: `1.5px solid ${on ? C.ai : C.line}`, background: on ? C.aiSoft : C.surface, color: on ? C.aiDeep : C.ink, fontSize: 13, fontWeight: 600, fontFamily: F.body, cursor: "pointer", textAlign: "left" }}
                    >
                      <span aria-hidden style={{ fontSize: 16 }}>{r.emoji}</span>
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 700 }}>Daily reminder <span style={{ color: C.inkSoft, fontWeight: 600 }}>(optional)</span></span>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  style={{ flex: 1, minWidth: 0, padding: "13px 14px", borderRadius: 12, border: `1.5px solid ${C.line}`, background: C.surface, color: reminderTime ? C.ink : C.inkSoft, fontSize: 16, fontFamily: F.body, outline: "none" }}
                />
                {reminderTime && (
                  <button type="button" onClick={() => setReminderTime("")} style={{ flexShrink: 0, padding: "13px 16px", borderRadius: 12, border: `1.5px solid ${C.line}`, background: C.surface, color: C.inkSoft, fontSize: 14, fontWeight: 700, fontFamily: F.body, cursor: "pointer" }}>
                    Clear
                  </button>
                )}
              </div>
              <span style={{ fontSize: 12, color: C.inkSoft }}>No reminder unless you set a time.</span>
            </div>

            <button
              onClick={finish}
              style={{ padding: 16, borderRadius: 14, border: "none", background: C.ai, color: "#fff", fontSize: 16, fontWeight: 700, fontFamily: F.body, cursor: "pointer", boxShadow: "0 4px 14px rgba(42,74,123,0.25)" }}
            >
              Start learning
            </button>
          </>
        )}
      </div>
    </div>
  );
}
