import { useState } from "react";

// Renders an <img>, but falls back to a soft clay placeholder when the image
// is missing, so pages look intentional before real assets are added.
function FallbackImage({
  src,
  alt,
  label,
  className = "",
  wrapperClassName = "",
  note = "preview coming soon",
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`clay-inset flex items-center justify-center rounded-2xl ${wrapperClassName}`}
      >
        <span className="px-4 text-center text-sm font-semibold text-muted">
          {label || alt}
          {note && <span className="mt-1 block text-xs font-normal opacity-70">{note}</span>}
        </span>
      </div>
    );
  }

  return (
    <img src={src} alt={alt} loading="lazy" onError={() => setError(true)} className={className} />
  );
}

export default FallbackImage;
