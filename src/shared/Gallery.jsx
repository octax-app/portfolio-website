import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Icon from "./Icon";

const src = (path) => `/static/images/work/${path}`;

// Browser chrome around desktop screenshots.
function BrowserFrame({ children, url }) {
  return (
    <div className="overflow-hidden rounded-[22px] bg-surface shadow-[0_24px_48px_-20px_rgba(42,35,56,.45)] ring-1 ring-line">
      <div className="flex items-center gap-2 border-b border-line bg-sunken px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        {url && (
          <span className="ml-3 truncate rounded-full bg-surface px-3 py-0.5 font-mono text-[11px] text-muted">
            {url}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

// Rounded phone shell around mobile screenshots.
function PhoneFrame({ children }) {
  return (
    <div className="rounded-[34px] bg-[#1d1828] p-2 shadow-[0_24px_48px_-20px_rgba(42,35,56,.6)]">
      <div className="overflow-hidden rounded-[27px]">{children}</div>
    </div>
  );
}

function Lightbox({ items, index, onClose, onStep }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onStep]);

  const item = items[index];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#14101E]/85 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={onClose}
    >
      <motion.img
        key={item.src}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        src={src(item.src)}
        alt={item.caption}
        className="max-h-[82vh] max-w-full rounded-2xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="mt-4 text-center font-display text-lg font-extrabold text-white">
        {item.caption} <span className="ml-2 text-sm font-semibold text-white/60">{index + 1} / {items.length}</span>
      </p>
      {items.length > 1 && (
        <>
          <button type="button" aria-label="Previous screenshot" onClick={(e) => { e.stopPropagation(); onStep(-1); }} className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 sm:left-6">
            <Icon name="arrow" size={22} strokeWidth={2.5} className="rotate-180" />
          </button>
          <button type="button" aria-label="Next screenshot" onClick={(e) => { e.stopPropagation(); onStep(1); }} className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 sm:right-6">
            <Icon name="arrow" size={22} strokeWidth={2.5} />
          </button>
        </>
      )}
      <button type="button" aria-label="Close" onClick={onClose} className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25">
        <Icon name="x" size={22} strokeWidth={2.5} />
      </button>
    </motion.div>
  );
}

// Screenshot gallery for a project's detail page: a featured desktop shot
// with thumbnails, phone-framed mobile shots, and a full-screen lightbox.
function Gallery({ project }) {
  const items = project.gallery || [];
  const desktop = items.filter((g) => !g.device || g.device === "desktop");
  const mobile = items.filter((g) => g.device === "mobile" || g.device === "document");
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(null); // index into `items`

  const step = useCallback(
    (d) => setOpen((i) => (i === null ? null : (i + d + items.length) % items.length)),
    [items.length],
  );
  const close = useCallback(() => setOpen(null), []);

  const l = project.links || {};
  const host = (l.demo?.href || l.site?.href || "").replace(/^https?:\/\//, "").replace(/\/$/, "");
  const featured = desktop[active];

  return (
    <div className={`tone-${project.tone} grid grid-cols-1 gap-8 ${mobile.length && desktop.length ? "lg:grid-cols-[1fr_auto]" : ""}`}>
      {featured && (
        <div>
          <button
            type="button"
            onClick={() => setOpen(items.indexOf(featured))}
            className="group block w-full text-left"
            aria-label={`Enlarge: ${featured.caption}`}
          >
            <BrowserFrame url={featured.url || host}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={featured.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  src={src(featured.src)}
                  alt={featured.caption}
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                />
              </AnimatePresence>
            </BrowserFrame>
          </button>
          <p className="mt-3 text-sm font-semibold text-muted">{featured.caption}</p>

          {desktop.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2" role="tablist" aria-label="Screenshots">
              {desktop.map((g, i) => (
                <button
                  key={g.src}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={g.caption}
                  onClick={() => setActive(i)}
                  className={`w-36 shrink-0 overflow-hidden rounded-2xl transition-all duration-300 ease-spring sm:w-44 ${
                    i === active ? "clay-soft p-1 ring-4 ring-[rgb(var(--tone))]" : "clay-inset p-1 opacity-75 hover:opacity-100"
                  }`}
                >
                  <img src={src(g.src)} alt="" loading="lazy" className="aspect-[16/10] w-full rounded-xl object-cover object-top" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {mobile.length > 0 && (
        <div className={`flex gap-5 ${desktop.length ? "justify-center lg:flex-col lg:justify-start" : "flex-wrap justify-center"}`}>
          {mobile.map((g) => (
            <button
              key={g.src}
              type="button"
              onClick={() => setOpen(items.indexOf(g))}
              aria-label={`Enlarge: ${g.caption}`}
              className="group w-40 text-center sm:w-48"
            >
              <div className="transition-transform duration-500 ease-spring group-hover:-translate-y-1.5 group-hover:-rotate-1">
                {g.device === "document" ? (
                  <div className="clay overflow-hidden !rounded-[18px] p-2">
                    <img src={src(g.src)} alt={g.caption} loading="lazy" className="w-full rounded-xl" />
                  </div>
                ) : (
                  <PhoneFrame>
                    <img src={src(g.src)} alt={g.caption} loading="lazy" className="aspect-[9/19.5] w-full object-cover object-top" />
                  </PhoneFrame>
                )}
              </div>
              <p className="mt-2 text-xs font-semibold text-muted">{g.caption}</p>
            </button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {open !== null && <Lightbox items={items} index={open} onClose={close} onStep={step} />}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
