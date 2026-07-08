import { useStore } from "./useStore.js";

// True when the OS asks for reduced motion. Runtime check (not reactive), fine
// as a one-shot read on render.
export function prefersReducedMotion() {
  return typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

// Reduce motion when the user turned it on in Settings, OR the OS asks for it.
// The in-app toggle is an explicit override for a motion-sensitive learner whose
// OS setting is off. Used to freeze the mascot to a still and skip the confetti.
export function useReduceMotion() {
  const setting = useStore((s) => s.settings?.reduceMotion ?? false);
  return setting || prefersReducedMotion();
}
