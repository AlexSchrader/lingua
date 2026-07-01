// Two palettes, one set of tokens. Components read `C.token` (a getter) so they
// always reflect the active theme. Getters return CONCRETE hex (not CSS vars),
// so canvas/SVG colors (TraceCard) and string-alpha (`${C.ai}33`) keep working
// unchanged. App applies the theme each render via setActiveTheme(), driven by
// the persisted `settings.theme` (light / dark / system).
const PALETTES = {
  light: {
    washi: "#F1EDE2",
    surface: "#FBFAF5",
    ink: "#1B1A17",
    inkSoft: "#6A655A",
    ai: "#2A4A7B",
    aiDeep: "#1E3559",
    aiSoft: "#E5EAF2",
    line: "#DDD8CA",
    locked: "#B4AF9F",
    lockedBg: "#E8E5DB",
    shu: "#C2502E",
    shuSoft: "#FCEEEA",
    matcha: "#3F7A55",
    matchaSoft: "#EAF3EC",
  },
  dark: {
    washi: "#17160F",
    surface: "#211F1A",
    ink: "#ECE7DB",
    inkSoft: "#A29B8B",
    ai: "#5486CE",
    aiDeep: "#9DBEEC",
    aiSoft: "#233349",
    line: "#34302A",
    locked: "#726C60",
    lockedBg: "#2C2A24",
    shu: "#E27E58",
    shuSoft: "#3A2620",
    matcha: "#6BB183",
    matchaSoft: "#223A2A",
  },
};

let _theme = "light";

// Set the active palette. Safe to call in render (idempotent module write).
export function setActiveTheme(name) {
  if (PALETTES[name]) _theme = name;
}

// Resolve a preference (light|dark|system) + the OS dark flag to a palette name.
export function resolveTheme(pref, systemDark) {
  if (pref === "dark") return "dark";
  if (pref === "light") return "light";
  return systemDark ? "dark" : "light";
}

export const C = {};
for (const key of Object.keys(PALETTES.light)) {
  Object.defineProperty(C, key, { enumerable: true, get: () => PALETTES[_theme][key] });
}

export const F = {
  disp: "'Space Grotesk','Segoe UI',system-ui,sans-serif",
  body: "'Inter',system-ui,sans-serif",
  mono: "ui-monospace,'SF Mono',Menlo,monospace",
  jp: "'Hiragino Kaku Gothic ProN','Yu Gothic','Noto Sans JP',sans-serif",
};
