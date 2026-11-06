import { App as Config } from "../config/AppConfig";
import { GithubGlyph } from "./Icon";

// "Live" / "In the lab" / "Client work" pill with a pulsing dot for live items.
export function StatusPill({ status, size = "sm" }) {
  const s = Config.Status[status];
  if (!s) return null;
  const pad = size === "sm" ? "px-2.5 py-1 text-[11px]" : "px-3.5 py-1.5 text-xs";
  return (
    <span
      className={`tone-${s.tone} clay-soft inline-flex items-center gap-1.5 rounded-full font-bold uppercase tracking-wider tone-text ${pad}`}
    >
      <span
        className={`h-2 w-2 rounded-full tone-bg ${status === "live" ? "pulse-dot" : ""}`}
      />
      {s.label}
    </span>
  );
}

// Open-source state pill: public / open-sourcing / planned.
export function OpenSourcePill({ state }) {
  const s = Config.OpenSource[state];
  if (!s) return null;
  return (
    <span
      className={`tone-${s.tone} clay-soft inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider tone-text`}
    >
      <GithubGlyph size={12} />
      {s.label}
    </span>
  );
}
