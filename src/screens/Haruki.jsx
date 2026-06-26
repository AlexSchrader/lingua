import { useState, useRef, useEffect } from "react";
import { Mic, MicOff, PhoneOff } from "lucide-react";
import { ConversationProvider, useConversation } from "@elevenlabs/react";
import { C, F } from "../theme.js";

// Live voice tutor — talks to the ElevenLabs Conversational AI agent (Claude LLM
// + Haruki's native-JP voice). The mic streams to the agent; Haruki replies in
// voice. The API key never reaches here — /api/convai-session mints an expiring
// signed URL server-side. useConversation must live inside ConversationProvider.
export default function Haruki() {
  return (
    <ConversationProvider>
      <HarukiChat />
    </ConversationProvider>
  );
}

function HarukiChat() {
  const [messages, setMessages] = useState([]);
  const [err, setErr] = useState(null);
  const bottomRef = useRef(null);

  const convo = useConversation({
    onConnect: () => setErr(null),
    onError: (e) => setErr(typeof e === "string" ? e : e?.message || "Connection error."),
    onMessage: (m) => {
      if (!m?.message) return;
      const mine = (m.source ?? m.role) === "user";
      setMessages((list) => [...list, { mine, text: m.message }]);
    },
  });

  const status = convo.status; // "disconnected" | "connecting" | "connected" | "error"
  const connecting = status === "connecting";
  const connected = status === "connected";
  const live = connecting || connected;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  async function start() {
    setErr(null);
    try {
      const res = await fetch("/api/convai-session?lang=ja");
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `Couldn't start the session (${res.status}).`);
      }
      const { signedUrl } = await res.json();
      await convo.startSession({ signedUrl });
    } catch (e) {
      setErr(e?.message || "Couldn't connect to Haruki. Check your mic permission and try again.");
    }
  }

  const pose = connecting ? "think" : convo.isSpeaking ? "cheer" : connected ? "base" : "wave";
  const statusText = connecting
    ? "Connecting…"
    : convo.isSpeaking
    ? "Haruki is speaking…"
    : connected
    ? "Listening — go ahead"
    : "Tap below to start talking with Haruki.";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: 16 }}>
      <div style={{ marginBottom: 12, flexShrink: 0 }}>
        <div style={{ fontFamily: F.disp, fontSize: 22, fontWeight: 700 }}>Haruki</div>
        <div style={{ fontSize: 13, color: C.inkSoft }}>Talk with your tutor — speak Japanese, he speaks back.</div>
      </div>

      {/* Mascot + live status */}
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingTop: 4 }}>
        <div style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <img
            src={`/lingua-${pose}.png`}
            alt=""
            aria-hidden
            style={{
              width: "clamp(120px, 34vw, 200px)",
              height: "auto",
              objectFit: "contain",
              // Gentle pulse while Haruki is speaking.
              transform: convo.isSpeaking ? "scale(1.04)" : "scale(1)",
              transition: "transform 200ms ease",
            }}
          />
          {connected && (
            <span
              aria-hidden
              style={{
                position: "absolute",
                bottom: 6,
                right: "18%",
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: convo.isSpeaking ? C.shu : C.matcha,
                boxShadow: `0 0 0 4px ${C.surface}`,
              }}
            />
          )}
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, color: connected ? C.ai : C.inkSoft, textAlign: "center" }}>
          {statusText}
        </div>
      </div>

      {/* Transcript */}
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 10, padding: "12px 0" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.mine ? "flex-end" : "flex-start" }}>
            <div
              style={{
                maxWidth: "82%",
                padding: "10px 14px",
                borderRadius: 16,
                borderBottomRightRadius: m.mine ? 4 : 16,
                borderBottomLeftRadius: m.mine ? 16 : 4,
                background: m.mine ? C.ai : C.surface,
                color: m.mine ? "#fff" : C.ink,
                border: m.mine ? "none" : `1px solid ${C.line}`,
                fontFamily: F.body,
                fontSize: 15,
                lineHeight: 1.4,
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {err && (
        <div style={{ flexShrink: 0, fontSize: 13, color: C.shu, textAlign: "center", marginBottom: 8 }}>{err}</div>
      )}

      {/* Controls */}
      <div style={{ flexShrink: 0, display: "flex", gap: 10, alignItems: "center", justifyContent: "center" }}>
        {!live ? (
          <button
            onClick={start}
            style={{
              flex: 1,
              maxWidth: 360,
              padding: 16,
              borderRadius: 16,
              border: "none",
              background: C.ai,
              color: "#fff",
              fontSize: 16,
              fontWeight: 700,
              fontFamily: F.body,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              boxShadow: "0 4px 14px rgba(42,74,123,0.25)",
            }}
          >
            <Mic size={20} /> Talk to Haruki
          </button>
        ) : (
          <>
            <button
              onClick={() => convo.setMuted(!convo.isMuted)}
              aria-label={convo.isMuted ? "Unmute" : "Mute"}
              disabled={!connected}
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: `1px solid ${C.line}`,
                background: convo.isMuted ? C.lockedBg : C.surface,
                color: convo.isMuted ? C.shu : C.ai,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: connected ? "pointer" : "default",
              }}
            >
              {convo.isMuted ? <MicOff size={22} /> : <Mic size={22} />}
            </button>
            <button
              onClick={() => convo.endSession()}
              style={{
                flex: 1,
                maxWidth: 300,
                padding: 16,
                borderRadius: 16,
                border: "none",
                background: C.shu,
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
                fontFamily: F.body,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <PhoneOff size={20} /> End
            </button>
          </>
        )}
      </div>
    </div>
  );
}
