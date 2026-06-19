import { useRef, useState, useEffect, useCallback } from "react";
import { C, F } from "../../theme.js";

// Draw-to-trace pad. The learner drags a finger/stylus over a faint guide glyph
// and ink follows. The canvas sets `touch-action: none` so the gesture belongs
// to the pad, not the page — without it, a finger drag scrolls/rubber-bands the
// PWA instead of drawing. Local interaction only (no scoring yet).
// TODO: real KanjiVG stroke-order validation (Brief 3).
export default function TraceCard({ item, onAdvance }) {
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const [hasInk, setHasInk] = useState(false);

  // Size the canvas backing store to its CSS box × devicePixelRatio for crisp
  // lines, and configure the stroke style. Re-runs on resize.
  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = C.ink;
  }, []);

  useEffect(() => {
    setup();
    window.addEventListener("resize", setup);
    return () => window.removeEventListener("resize", setup);
  }, [setup]);

  // New character → clear the pad.
  useEffect(() => {
    clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.id]);

  const pos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onPointerDown = (e) => {
    e.preventDefault();
    canvasRef.current.setPointerCapture?.(e.pointerId);
    drawing.current = true;
    last.current = pos(e);
    setHasInk(true);
    // Dot for taps that never move.
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.arc(last.current.x, last.current.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = C.ink;
    ctx.fill();
  };

  const onPointerMove = (e) => {
    if (!drawing.current) return;
    e.preventDefault();
    const ctx = canvasRef.current.getContext("2d");
    const p = pos(e);
    ctx.beginPath();
    ctx.moveTo(last.current.x, last.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last.current = p;
  };

  const endStroke = () => {
    drawing.current = false;
  };

  function clear() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasInk(false);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, color: C.inkSoft, fontWeight: 600 }}>
          Trace the character
        </span>
        {hasInk && (
          <button
            onClick={clear}
            style={{
              border: "none",
              background: "transparent",
              color: C.ai,
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              padding: 0,
            }}
          >
            Clear
          </button>
        )}
      </div>

      <div
        style={{
          flex: 1,
          position: "relative",
          background: C.surface,
          border: `2px dashed ${hasInk ? C.matcha : C.line}`,
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        {/* Faint guide glyph behind the canvas. */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: F.jp,
            fontSize: "min(45vw, 200px)",
            color: C.lockedBg,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {item.front}
        </span>

        <canvas
          ref={canvasRef}
          data-testid="trace-pad"
          aria-label={`Trace ${item.front}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endStroke}
          onPointerLeave={endStroke}
          onPointerCancel={endStroke}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            touchAction: "none", // pad owns the gesture; page won't scroll while drawing
            cursor: "crosshair",
          }}
        />
      </div>

      <button
        onClick={onAdvance}
        disabled={!hasInk}
        style={{
          padding: 16,
          borderRadius: 14,
          border: "none",
          background: hasInk ? C.ai : C.lockedBg,
          color: hasInk ? "#fff" : C.locked,
          fontSize: 16,
          fontWeight: 700,
          fontFamily: F.body,
          cursor: hasInk ? "pointer" : "default",
        }}
      >
        {hasInk ? "Continue" : "Trace to continue"}
      </button>
    </div>
  );
}
