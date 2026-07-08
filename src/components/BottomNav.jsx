import { useNavigate, useLocation } from "react-router-dom";
import { Home, ListTree, MessageCircle, BarChart3, Lock } from "lucide-react";
import { useStore } from "../store/useStore.js";
import { C, F } from "../theme.js";

const TABS = [
  { label: "Today", path: "/", icon: Home },
  { label: "Ladder", path: "/ladder", icon: ListTree },
  { label: "Haruki", path: "/haruki", icon: MessageCircle },
  { label: "Stats", path: "/stats", icon: BarChart3 },
];

const MAXW = 600; // keep tabs aligned with the centered content column (see AppShell)

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // Haruki is gated on the Pre-A1 kana foundation; badge the tab with a small
  // lock until it opens. Subscribe to items + profile so it clears live.
  useStore((s) => s.items);
  useStore((s) => s.profile);
  const harukiLocked = !useStore((s) => s.speakingUnlocked)();

  return (
    <nav
      style={{
        borderTop: `1px solid ${C.line}`,
        background: C.surface,
        paddingBottom: "env(safe-area-inset-bottom)",
        flexShrink: 0,
      }}
    >
     <div style={{ maxWidth: MAXW, margin: "0 auto", display: "flex" }}>
      {TABS.map(({ label, path, icon: Icon }) => {
        const active = pathname === path;
        const locked = path === "/haruki" && harukiLocked;
        return (
          <button
            key={label}
            aria-label={label}
            onClick={() => navigate(path)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              padding: "10px 0 8px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: active ? C.ai : C.inkSoft,
              fontFamily: F.body,
              fontSize: 11,
              fontWeight: active ? 600 : 500,
            }}
          >
            <span style={{ position: "relative", display: "inline-flex" }}>
              <Icon size={22} strokeWidth={active ? 2.4 : 1.8} />
              {locked && (
                <span style={{ position: "absolute", right: -6, bottom: -3, background: C.surface, borderRadius: "50%", display: "flex", padding: 1 }}>
                  <Lock size={11} color={C.locked} />
                </span>
              )}
            </span>
            <span>{label}</span>
          </button>
        );
      })}
     </div>
    </nav>
  );
}
