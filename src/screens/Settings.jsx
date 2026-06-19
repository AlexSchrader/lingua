import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RotateCcw, Globe, Info, AlertTriangle } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { LANGUAGES } from "../data/index.js";
import { C, F } from "../theme.js";
import { VERSION } from "../version.js";

function Section({ title, children }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.line}`, borderRadius: 18, padding: 16 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: C.inkSoft, marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  );
}

function Row({ icon: Icon, label, value }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0" }}>
      {Icon && <Icon size={16} color={C.inkSoft} />}
      <span style={{ flex: 1, fontSize: 14 }}>{label}</span>
      <span style={{ fontSize: 14, color: C.inkSoft, fontFamily: F.mono }}>{value}</span>
    </div>
  );
}

export default function Settings() {
  const navigate = useNavigate();
  const resetAll = useStore((s) => s.resetAll);
  const languages = useStore((s) => s.languages);
  const streak = useStore((s) => s.streak);
  const stats = useStore((s) => s.stats);
  const [confirming, setConfirming] = useState(false);

  const ja = languages.ja ?? LANGUAGES[0];

  const doReset = () => {
    resetAll();
    setConfirming(false);
    navigate("/");
  };

  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700 }}>Settings</div>
        <div style={{ fontSize: 13, color: C.inkSoft }}>Manage your progress and the app.</div>
      </div>

      <Section title="About">
        <Row icon={Info} label="Version" value={VERSION} />
        <Row icon={Globe} label="Learning" value={`${ja.flag} ${ja.name} · ${ja.level}`} />
        <Row label="Streak" value={`${streak.current} day${streak.current === 1 ? "" : "s"}`} />
        <Row label="Freezes" value={streak.freezes} />
        <Row label="Total XP" value={stats.xpTotal} />
      </Section>

      <Section title="Progress">
        {!confirming ? (
          <button
            onClick={() => setConfirming(true)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: 14,
              borderRadius: 12,
              border: `1.5px solid ${C.shu}`,
              background: C.surface,
              color: C.shu,
              fontSize: 15,
              fontWeight: 700,
              fontFamily: F.body,
              cursor: "pointer",
            }}
          >
            <RotateCcw size={18} />
            Reset all progress
          </button>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
                color: C.shu,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <AlertTriangle size={18} style={{ flexShrink: 0, marginTop: 1 }} />
              This wipes every item's progress, your streak, freezes, and XP back to a
              fresh start. It can't be undone.
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => setConfirming(false)}
                style={{
                  flex: 1,
                  padding: 14,
                  borderRadius: 12,
                  border: `1.5px solid ${C.line}`,
                  background: C.surface,
                  color: C.inkSoft,
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: F.body,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={doReset}
                style={{
                  flex: 1,
                  padding: 14,
                  borderRadius: 12,
                  border: "none",
                  background: C.shu,
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: F.body,
                  cursor: "pointer",
                }}
              >
                Reset everything
              </button>
            </div>
          </div>
        )}
      </Section>

      <div style={{ textAlign: "center", fontFamily: F.mono, fontSize: 11, color: C.locked, opacity: 0.6 }}>
        🇯🇵 {VERSION}
      </div>
    </div>
  );
}
