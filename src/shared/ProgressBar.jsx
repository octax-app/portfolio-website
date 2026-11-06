import { useRef } from "react";
import { useInView } from "framer-motion";

// Sunken clay track with a glossy tone-coloured fill that grows into view.
function ProgressBar({ value, tone = "violet", label, height = "h-4" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div className={`tone-${tone}`} ref={ref}>
      {label !== false && (
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-sm font-semibold text-muted">{label || "Progress"}</span>
          <span className="font-display text-xl font-black tone-text">{value}%</span>
        </div>
      )}
      <div
        className={`clay-inset relative w-full overflow-hidden rounded-full ${height}`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || "Progress"}
      >
        <div
          className="tone-grad absolute inset-y-0 left-0 rounded-full"
          style={{
            width: inView ? `${value}%` : "0%",
            transition: "width 1.2s cubic-bezier(0.34, 1.2, 0.64, 1) 0.15s",
            boxShadow:
              "inset 0 -3px 6px rgba(0,0,0,.18), inset 0 3px 6px rgba(255,255,255,.5)",
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
