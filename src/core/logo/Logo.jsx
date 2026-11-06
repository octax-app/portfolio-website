import { useId } from "react";

// OctaX mark: a clay octagon ("Octa") holding a chunky X whose four arms use
// the brand tones (amber, mint, sky, pink) and meet at a white core.
// Same artwork as /public/logo.svg and the favicons.
export function OctaxMark({ size = 40, className = "" }) {
  const id = useId().replace(/:/g, "");
  const oct = "M22.05 5.5h19.9L58.5 22.05v19.9L41.95 58.5h-19.9L5.5 41.95v-19.9z";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`transition-transform duration-500 ease-spring ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`b${id}`} x1="10" y1="6" x2="54" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#A78BFA" />
          <stop offset="0.55" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#C026D3" />
        </linearGradient>
        <radialGradient id={`g${id}`} cx="22" cy="16" r="26" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`s${id}`} x1="32" y1="30" x2="32" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2E1065" stopOpacity="0" />
          <stop offset="1" stopColor="#2E1065" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <path d={oct} fill={`url(#b${id})`} stroke={`url(#b${id})`} strokeWidth="5" strokeLinejoin="round" />
      <path d={oct} fill={`url(#s${id})`} />
      <path d={oct} fill={`url(#g${id})`} />
      <g strokeLinecap="round" strokeWidth="9.5">
        <path d="M32 32L20.5 20.5" stroke="#FBBF24" />
        <path d="M32 32L43.5 20.5" stroke="#34D399" />
        <path d="M32 32L43.5 43.5" stroke="#38BDF8" />
        <path d="M32 32L20.5 43.5" stroke="#F472B6" />
      </g>
      <g stroke="#fff" strokeOpacity="0.55" strokeLinecap="round" strokeWidth="2.4">
        <path d="M19.6 22.2l2.2 2.2" />
        <path d="M41.8 19.6l-2.2 2.2" />
      </g>
      <circle cx="32" cy="32" r="6.2" fill="#fff" />
      <circle cx="32" cy="32" r="2.6" fill="#7C3AED" />
    </svg>
  );
}

// "Octa" + gradient "X" wordmark.
export function Wordmark({ className = "" }) {
  return (
    <span className={`font-display font-black tracking-tight text-ink ${className}`}>
      Octa
      <span className="bg-gradient-to-br from-[#F59E0B] via-[#EC4899] to-[#7C3AED] bg-clip-text text-transparent">
        X
      </span>
    </span>
  );
}

function Logo({ className = "", logo, size = 40 }) {
  if (logo !== undefined) return <div className={`Logo ${className}`}>{logo}</div>;
  return (
    <span className={`Logo inline-flex drop-shadow-[0_8px_14px_rgba(124,58,237,0.35)] ${className}`}>
      <OctaxMark size={size} className="group-hover:rotate-[22.5deg]" />
    </span>
  );
}

export default Logo;
