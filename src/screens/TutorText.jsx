import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { C, F } from "../theme.js";
import { useStore, activeLangId } from "../store/useStore.js";
import { companionName } from "../data/companions.js";
import { langName } from "../data/languages.js";
import { STUDYBOT_API, STUDYBOT_API_BYPASS, STUDYBOT_TUTOR_TOKEN } from "../studybot/flag.js";
import { botEmit, useBotSurface } from "../studybot/bus.js";

// THE TEXT TUTOR — StudyBot builds only (App.jsx loads this in place of Haruki.jsx
// when STUDYBOT is set; a normal build never emits it).
//
// Why it exists: the voice tutor runs on an ElevenLabs agent, and the account
// behind it is gone (banned, every voice deleted). Doodle's study window needs the
// tutor as TEXT only: no voice SDK, no microphone, no ElevenLabs call of any kind.
// Each line goes to /api/tutor-text on a Vercel PREVIEW deployment (STUDYBOT_API),
// which answers with Claude in the companion's persona. The real 10-a-day cap is
// Doodle's own; the server's count is per instance only (see api/tutor-text.js).
const MAX_TURNS = 20; // what the server accepts; older lines drop off the front

function endpoint() {
  if (!STUDYBOT_API) return "";
  const base = String(STUDYBOT_API).replace(/\/+$/, "");
  const q = STUDYBOT_API_BYPASS ? `?x-vercel-protection-bypass=${encodeURIComponent(STUDYBOT_API_BYPASS)}` : "";
  return `${base}/api/tutor-text${q}`;
}

export default function TutorText() {
  const lang = activeLangId(useStore((s) => s.profile));
  const name = companionName(lang);
  const [messages, setMessages] = useState([]); // { from: "you" | "tutor", text }
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(null);
  const bottomRef = useRef(null);
  const url = endpoint();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy]);

  useBotSurface(
    1,
    { screen: "tutor", item: null, progress: null },
    []
  );

  async function send() {
    const text = draft.trim();
    if (!text || busy) return;
    setDraft("");
    setErr(null);
    const next = [...messages, { from: "you", text }];
    setMessages(next);
    botEmit("tutor", { from: "you", text });
    if (!url) {
      setErr(`${name} isn't connected in this build.`);
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-tutor-token": STUDYBOT_TUTOR_TOKEN || "" },
        body: JSON.stringify({ lang, messages: next.slice(-MAX_TURNS) }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 429) throw new Error(`${name} is done chatting for today — back tomorrow.`);
        throw new Error(j.error || `Couldn't reach ${name} (${res.status}).`);
      }
      const reply = String(j.reply ?? "").trim();
      if (reply) {
        setMessages((list) => [...list, { from: "tutor", text: reply }]);
        botEmit("tutor", { from: "tutor", text: reply });
      }
    } catch (e) {
      setErr(e?.message || `Couldn't reach ${name}.`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0, padding: 16 }}>
      <div style={{ marginBottom: 12, flexShrink: 0 }}>
        <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700 }}>{name}</div>
        <div style={{ fontSize: 13, color: C.inkSoft }}>Text chat.</div>
      </div>

      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain", display: "flex", flexDirection: "column", gap: 10, padding: "4px 0" }}>
        {messages.length === 0 ? (
          <div style={{ margin: "auto", textAlign: "center", color: C.inkSoft, fontSize: 14, maxWidth: 260 }}>
            Say something in {langName(lang)} — type it below.
          </div>
        ) : (
          messages.map((m, i) => (
            <div key={i} style={{ display: "flex", justifyContent: m.from === "you" ? "flex-end" : "flex-start" }}>
              <div
                style={{
                  maxWidth: "82%",
                  padding: "10px 14px",
                  borderRadius: 16,
                  borderBottomRightRadius: m.from === "you" ? 4 : 16,
                  borderBottomLeftRadius: m.from === "you" ? 16 : 4,
                  background: m.from === "you" ? C.ai : C.surface,
                  color: m.from === "you" ? "#fff" : C.ink,
                  border: m.from === "you" ? "none" : `1px solid ${C.line}`,
                  fontFamily: F.body,
                  fontSize: 15,
                  lineHeight: 1.4,
                }}
              >
                {m.text}
              </div>
            </div>
          ))
        )}
        {busy && <div style={{ fontSize: 13, color: C.inkSoft }}>{name} is typing…</div>}
        <div ref={bottomRef} />
      </div>

      {err && <div style={{ flexShrink: 0, fontSize: 13, color: C.shu, textAlign: "center", margin: "8px 0" }}>{err}</div>}

      <div style={{ flexShrink: 0, display: "flex", gap: 8, alignItems: "center" }}>
        <input
          data-bot="message"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type a message…"
          maxLength={2000}
          style={{ flex: 1, padding: "12px 14px", borderRadius: 999, border: `1px solid ${C.line}`, background: C.surface, fontFamily: F.body, fontSize: 15, outline: "none", minWidth: 0 }}
        />
        <button
          data-bot="submit"
          onClick={send}
          disabled={busy || !draft.trim()}
          aria-label="Send"
          style={{ width: 46, height: 46, borderRadius: "50%", border: "none", background: C.ai, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, opacity: busy || !draft.trim() ? 0.5 : 1 }}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
