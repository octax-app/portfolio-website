import Reveal from "./Reveal";

export const CONTAINER = "max-w-[1120px] w-full px-4 sm:px-6 lg:px-8";

// Page-width wrapper used by every section.
export function Container({ children, className = "" }) {
  return (
    <div className="flex justify-center">
      <div className={`${CONTAINER} ${className}`}>{children}</div>
    </div>
  );
}

// Eyebrow chip + rounded display heading, with optional right-side action.
export function SectionHeading({ eyebrow, title, subtitle, tone = "violet", action }) {
  return (
    <Reveal y={20}>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          {eyebrow && (
            <span
              className={`tone-${tone} clay-soft inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] tone-text`}
            >
              <span className="h-2 w-2 rounded-full tone-bg" />
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 text-3xl font-black leading-[1.1] text-ink md:text-[42px]">
            {title}
          </h2>
          {subtitle && <p className="mt-3 text-lg text-muted">{subtitle}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </Reveal>
  );
}

export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`mt-24 scroll-mt-28 md:mt-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
