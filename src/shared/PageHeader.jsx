import { motion } from "framer-motion";

import { Container } from "./Section";

// Consistent page heading: a colourful clay banner with eyebrow, title and intro.
function PageHeader({ eyebrow, title, subtitle, tone = "violet", children }) {
  return (
    <Container className="mt-6 md:mt-10">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className={`tone-${tone} clay relative overflow-hidden !rounded-[40px] p-7 sm:p-10 md:p-14`}
      >
        <span className="tone-bg absolute -right-16 -top-20 h-64 w-64 rounded-full opacity-[0.12]" />
        <span className="tone-bg absolute -bottom-24 right-40 h-40 w-40 rounded-full opacity-[0.08]" />
        <div className="relative max-w-3xl">
          {eyebrow && (
            <span className="clay-soft inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] tone-text">
              <span className="h-2 w-2 rounded-full tone-bg" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 text-4xl font-black leading-[1.05] text-ink md:text-6xl">{title}</h1>
          {subtitle && <p className="mt-5 text-lg leading-relaxed text-muted md:text-xl">{subtitle}</p>}
          {children}
        </div>
      </motion.div>
    </Container>
  );
}

export default PageHeader;
