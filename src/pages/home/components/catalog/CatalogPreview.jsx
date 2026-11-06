import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import FilterChips from "../../../../shared/FilterChips";
import Icon from "../../../../shared/Icon";
import ProjectCard from "../../../../shared/ProjectCard";
import { Section, SectionHeading } from "../../../../shared/Section";
import { App as Config, matchesFilter } from "../../../../config/AppConfig";

const LIMIT = 6;

// Filterable preview of the catalog: featured items first, six at a time.
function CatalogPreview() {
  const [filter, setFilter] = useState("all");

  const items = useMemo(() => {
    const list = Config.Catalog.filter((p) => matchesFilter(p, filter));
    if (filter === "all") list.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    return list.slice(0, LIMIT);
  }, [filter]);

  return (
    <Section id="catalog">
      <SectionHeading
        eyebrow="Catalog"
        tone="pink"
        title="Apps & products, ready to explore."
        subtitle="Our own products, client apps on the stores, and open-source tools."
        action={
          <Link
            to="/work"
            onClickCapture={() => window.scrollTo({ top: 0, left: 0 })}
            className="clay-btn clay-btn-ghost text-sm"
          >
            Full catalog <Icon name="arrow" size={16} strokeWidth={2.5} />
          </Link>
        }
      />

      <div className="mt-8">
        <FilterChips value={filter} onChange={setFilter} />
      </div>

      <motion.div layout className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

export default CatalogPreview;
