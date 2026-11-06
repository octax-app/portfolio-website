import { App as Config, matchesFilter } from "../config/AppConfig";

// Clay segmented filter: active chip is raised violet, others are sunken.
function FilterChips({ value, onChange, counts = true }) {
  return (
    <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
      {Config.CatalogFilters.map((f) => {
        const active = value === f.id;
        const count = Config.Catalog.filter((p) => matchesFilter(p, f.id)).length;
        return (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(f.id)}
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 font-display text-sm font-extrabold transition-all duration-300 ease-spring ${
              active ? "clay-btn-primary text-white" : "clay-inset text-muted hover:text-ink"
            }`}
          >
            {f.label}
            {counts && (
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] ${
                  active ? "bg-white/25" : "bg-surface text-muted"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default FilterChips;
