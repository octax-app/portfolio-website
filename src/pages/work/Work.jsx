import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { App as Config, matchesFilter } from "../../config/AppConfig";
import FilterChips from "../../shared/FilterChips";
import PageHeader from "../../shared/PageHeader";
import ProjectCard from "../../shared/ProjectCard";
import { Container } from "../../shared/Section";
import Seo from "../../shared/Seo";

// Full catalog with a filter that lives in the URL (?filter=mobile), so
// filtered views are linkable.
function Work() {
  const [params, setParams] = useSearchParams();
  const filter = Config.CatalogFilters.some((f) => f.id === params.get("filter"))
    ? params.get("filter")
    : "all";

  const items = useMemo(() => Config.Catalog.filter((p) => matchesFilter(p, filter)), [filter]);

  const setFilter = (id) => setParams(id === "all" ? {} : { filter: id }, { replace: true });

  return (
    <div className="Work">
      <Seo
        title="Work"
        description="The Octax catalog: OneERP, Octax Solobill, Octa Pass and the mobile apps, web platforms, websites and open-source libraries we've shipped."
      />
      <PageHeader eyebrow="Catalog" tone="pink" title="The work." subtitle={Config.Work.Intro} />

      <Container className="mt-10">
        <div className="sticky top-[84px] z-20 -mx-2 rounded-full px-2 py-2">
          <FilterChips value={filter} onChange={setFilter} />
        </div>

        <motion.div layout className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </Container>
    </div>
  );
}

export default Work;
