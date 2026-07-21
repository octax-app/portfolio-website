import { useState } from "react";

// Renders an <img>, but falls back to a styled gradient placeholder when the
// image is missing — so pages look intentional before real assets are added.
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
        className={`flex items-center justify-center rounded-2xl border border-accent-200 dark:border-accent-700 bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-800 dark:to-accent-900 ${wrapperClassName}`}
      >
        <span className="px-4 text-sm font-semibold text-center text-accent-400 dark:text-accent-500">
          {label || alt}
          {note && (
            <span className="block mt-1 text-xs font-normal opacity-70">
              {note}
            </span>
          )}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={className}
    />
  );
}

export default FallbackImage;
